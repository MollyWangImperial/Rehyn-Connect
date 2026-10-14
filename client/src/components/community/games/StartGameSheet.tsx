import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties, type FocusEvent, type MouseEvent } from "react";
import { GAMES, gameInfo, people, type GameId, type PersonId } from "@/content/community-samples";
import { communityStore, groupPlayers, listNames, useCommunity, type GroupGame } from "@/lib/community-store";
import CommunityDialog from "../dialog";
import type { GroupModel } from "../group-model";
import { useLater, useStill } from "../hooks";
import { BellIcon, ChevronDownIcon, CloseIcon, LockIcon } from "../icons";
import { Face, MyFace } from "../parts";
import { GamePicture, GameTick } from "./pieces";
import "@/pages/community-games.css";

type Step = "pick" | "players" | "lobby";
const nameOf = (who: PersonId) => people[who].name;
/** How much of the next row shows under the first six games, so it's clear there are more. */
const PEEK = 26;

/**
 * The games to choose from, six at a time (three across and two down, or two across on a phone),
 * in an area that scrolls down to the rest. A soft fade and "Scroll for more games" show there is
 * more below, until the person scrolls. A tile reached with the keyboard is scrolled into view.
 */
function GamePicker({ chosen, onPick, returning }: { chosen: GameId; onPick: (game: GameId) => void; returning: boolean }) {
  const area = useRef<HTMLDivElement>(null);
  const still = useStill();
  const [edges, setEdges] = useState({ above: false, below: true, bar: 0 });
  const [scrolled, setScrolled] = useState(false);

  const measure = useCallback(() => {
    const el = area.current;
    if (!el) return;
    // Tall enough for six games and the top of the next row, however wide the tiles are.
    const seventh = el.querySelectorAll<HTMLElement>(".cm-gs-game")[6];
    if (seventh) el.style.maxHeight = `${seventh.offsetTop + PEEK}px`;
    const above = el.scrollTop > 2;
    const below = el.scrollTop + el.clientHeight < el.scrollHeight - 2;
    const bar = el.offsetWidth - el.clientWidth;
    setEdges(current => (current.above === above && current.below === below && current.bar === bar ? current : { above, below, bar }));
  }, []);

  useLayoutEffect(() => {
    measure();
    // Back from choosing the players: the game chosen is in view, with the focus on it.
    if (returning) {
      const tile = area.current?.querySelector<HTMLElement>(`[data-game="${chosen}"]`);
      tile?.focus({ preventScroll: true });
      tile?.scrollIntoView({ block: "nearest" });
    }
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
    // Set up once, when the step opens.
  }, []);

  const onScroll = () => {
    measure();
    if ((area.current?.scrollTop ?? 0) > 8) setScrolled(true);
  };
  const reveal = (tile: HTMLElement) => tile.scrollIntoView({ block: "nearest", behavior: still ? "auto" : "smooth" });
  // Keyboard focus brings a tile into view. A tile pressed with a mouse or a finger is brought into view once chosen.
  const onFocus = (event: FocusEvent<HTMLButtonElement>) => { if (event.currentTarget.matches(":focus-visible")) reveal(event.currentTarget); };
  const pick = (event: MouseEvent<HTMLButtonElement>, game: GameId) => { onPick(game); reveal(event.currentTarget); };
  const more = () => area.current?.scrollBy({ top: Math.max(120, area.current.clientHeight - 80), behavior: still ? "auto" : "smooth" });

  return (
    <div className={`cm-gs-scroll ${edges.above ? "is-above" : ""} ${edges.below ? "is-below" : ""}`} style={{ "--cm-gs-bar": `${edges.bar}px` } as CSSProperties}>
      <div className="cm-gs-area" ref={area} onScroll={onScroll}>
        <div className="cm-gs-games" role="group" aria-label="Games">
          {GAMES.map(item => (
            <button key={item.id} type="button" data-game={item.id} className={`cm-gs-game ${chosen === item.id ? "is-on" : ""}`} style={{ background: item.tint }} aria-pressed={chosen === item.id} onFocus={onFocus} onClick={event => pick(event, item.id)} data-autofocus={chosen === item.id ? true : undefined}>
              <span className="cm-gs-picture"><GamePicture game={item.id} /></span>
              <span className="cm-gs-name">{item.name}</span>
              <span className="cm-gs-detail">{item.min === item.max ? `${item.min} players` : `${item.min} to ${item.max} players`} · {item.time}</span>
              {chosen === item.id && <span className="cm-gs-tick cm-pop" aria-hidden="true"><GameTick /></span>}
            </button>
          ))}
        </div>
      </div>
      {/* A hint for the eye, gone once the person scrolls. Everyone can reach every game without it. */}
      {!scrolled && edges.below && <span className="cm-gs-more" aria-hidden="true" onClick={more}>Scroll for more games<ChevronDownIcon size={16} /></span>}
    </div>
  );
}

/**
 * "Start a game" in a private group, in three steps: pick a game, pick who plays (within the
 * game's numbers), then a lobby where the invitees say yes. In this preview they say yes on their
 * own after a moment. `onPlay` opens the game once everyone is ready.
 */
export default function StartGameSheet({ group, onClose, onPlay }: { group: GroupModel; onClose: () => void; onPlay: (game: GroupGame) => void }) {
  const memory = useCommunity();
  const later = useLater();
  const titleId = useId();
  const [step, setStep] = useState<Step>("pick");
  const [type, setType] = useState<GameId>("chess");
  const [picked, setPicked] = useState<PersonId[]>([]);
  const [watch, setWatch] = useState(true);
  const [game, setGame] = useState<GroupGame | null>(null);
  const [ready, setReady] = useState<PersonId[]>([]);
  const [problem, setProblem] = useState("");
  // Set once the person comes back to the games from a later step.
  const [returning, setReturning] = useState(false);
  const round = useRef(0);

  const info = gameInfo(type);
  const need = info.min - 1;
  const most = info.max - 1;
  // Anyone in the group can be asked, apart from people who are blocked. The first few are online now.
  const everyone = groupPlayers(memory, group.id);
  const online = everyone.slice(0, Math.max(1, group.online));
  const chosen = picked.filter(who => everyone.includes(who));
  const enough = chosen.length >= need && chosen.length <= most;
  const allReady = chosen.length > 0 && chosen.every(who => ready.includes(who));
  const saved = game ? memory.games.find(item => item.id === game.id) ?? null : null;

  useEffect(() => { if (allReady && saved && saved.state === "lobby") communityStore.setGameState(saved.id, "playing"); }, [allReady, saved]);

  const pickGame = (next: GameId) => {
    setType(next);
    // Keep the people already picked, as many as the new game takes.
    setPicked(list => list.slice(0, gameInfo(next).max - 1));
  };
  const toggle = (who: PersonId) => setPicked(list => {
    if (list.includes(who)) return list.filter(other => other !== who);
    if (most === 1) return [who];
    return list.length < most ? [...list, who] : list;
  });
  const backToPick = () => {
    round.current++;
    if (saved && saved.state === "lobby") communityStore.setGameState(saved.id, "finished");
    setGame(null);
    setReady([]);
    setReturning(true);
    setStep("pick");
  };
  const sendInvites = () => {
    if (!enough) return;
    const made = communityStore.startGame({ groupId: group.id, type, players: chosen, watch });
    if (!made) { setProblem("That game can't be started here."); return; }
    setProblem("");
    setGame(made);
    setReady([]);
    setStep("lobby");
    const mine = ++round.current;
    chosen.forEach((who, index) => later(() => { if (round.current === mine) setReady(list => (list.includes(who) ? list : [...list, who])); }, 1400 + index * 1100));
  };

  const titles: Record<Step, string> = { pick: "Start a game", players: `Who is playing ${info.name}?`, lobby: allReady ? "Everyone is ready" : "Invites sent" };
  const lines: Record<Step, string> = {
    pick: "Only people in this private group can see and join it.",
    players: need === most ? `Pick ${need} ${need === 1 ? "person" : "people"}. Green dots are online now.` : `Pick ${need} to ${most} people. Green dots are online now.`,
    lobby: allReady ? "Take your time, there is no clock." : "We'll let you know the moment they say yes.",
  };
  const waiting = chosen.filter(who => !ready.includes(who)).map(nameOf);

  return (
    <CommunityDialog kind="sheet" labelledBy={titleId} onClose={onClose} className="cm-gs-sheet">
      <div className="cm-dialog-head">
        <div className="cm-dialog-titles">
          <p className="cm-gs-eyebrow"><LockIcon size={14} strokeWidth={2.2} />{group.name} · private</p>
          <h2 className="cm-dialog-title cm-dialog-title-small" id={titleId}>{titles[step]}</h2>
          <p>{lines[step]}</p>
        </div>
        <button type="button" className="cm-dialog-close" aria-label="Close" onClick={onClose}><CloseIcon size={22} /></button>
      </div>

      {step === "pick" && (
        <div className="cm-gs-step cm-gs-step-pick cm-rise">
          <GamePicker chosen={type} onPick={pickGame} returning={returning} />
          <button type="button" className="cm-gs-next" onClick={() => setStep("players")}>Next: choose who plays {info.name}</button>
        </div>
      )}

      {step === "players" && (
        <div className="cm-gs-step cm-rise">
          {everyone.length < need ? (
            <p className="cm-gs-note">{`${info.name} needs ${need} other ${need === 1 ? "person" : "people"}, and this group doesn't have that many yet. Invite a friend, or pick another game.`}</p>
          ) : (
            <div className="cm-gs-people" role="group" aria-label={`Who plays ${info.name}`}>
              {everyone.map(who => {
                const on = chosen.includes(who);
                const full = !on && chosen.length >= most && most > 1;
                const here = online.includes(who);
                return (
                  <button key={who} type="button" className={`cm-gs-person ${on ? "is-on" : ""} ${full ? "is-full" : ""}`} aria-pressed={on} onClick={() => toggle(who)}>
                    <span className="cm-gs-face">
                      <Face who={who} size={60} />
                      {here && <span className="cm-gs-online cm-live" aria-hidden="true" />}
                      {on && <span className="cm-gs-check cm-pop" aria-hidden="true"><GameTick /></span>}
                    </span>
                    <b>{nameOf(who)}</b>
                    <span className={here ? "is-online" : ""}>{here ? "Online now" : "Away"}</span>
                  </button>
                );
              })}
            </div>
          )}
          <div className="cm-gs-settings">
            <p className="cm-gs-setting"><span><b>No clock</b><span>Take your turn whenever you're ready, even tomorrow</span></span></p>
            <div className="cm-gs-setting">
              <span><b>Let the group watch</b><span>{`Others in ${group.name} can follow along and cheer`}</span></span>
              <button type="button" className="cm-gs-switch" role="switch" aria-checked={watch} aria-label="Let the group watch" onClick={() => setWatch(!watch)}><span /></button>
            </div>
          </div>
          {problem && <p className="cm-problem" role="alert">{problem}</p>}
          <div className="cm-gs-row">
            <button type="button" className="cm-gs-back" onClick={() => { setReturning(true); setStep("pick"); }}>Back</button>
            <button type="button" className={`cm-gs-send ${enough ? "" : "is-waiting"}`} aria-disabled={!enough} onClick={sendInvites}>
              {enough ? `Send ${chosen.length === 1 ? "the invite" : `${chosen.length} invites`}` : `Pick ${need}${need === most ? "" : " or more"}`}
            </button>
          </div>
        </div>
      )}

      {step === "lobby" && (
        <div className="cm-gs-step cm-rise">
          <div className="cm-gs-lobby">
            <span className="cm-gs-seat"><MyFace size={84} className="cm-gs-me" /><b>You</b><span>Ready</span></span>
            {chosen.map(who => {
              const yes = ready.includes(who);
              return (
                <span key={who} className="cm-gs-versus">
                  <span className="cm-gs-vs" aria-hidden="true">vs</span>
                  <span className={`cm-gs-seat ${yes ? "is-ready" : ""}`}>
                    <span className="cm-gs-face"><Face who={who} size={84} />{yes && <span className="cm-gs-yes cm-pop" aria-hidden="true"><GameTick /></span>}</span>
                    <b>{nameOf(who)}</b>
                    {yes ? <span className="cm-gs-said cm-pop">Said yes!</span> : <span className="cm-typing-dots" aria-hidden="true"><i /><i /><i /></span>}
                  </span>
                </span>
              );
            })}
          </div>
          <p className="cm-gs-lobby-note" role="status"><BellIcon size={18} strokeWidth={2} />{allReady ? `${group.name} will see that a game has started` : `Waiting for ${listNames(waiting)}`}</p>
          <div className="cm-gs-row">
            <button type="button" className="cm-gs-back" onClick={backToPick}>Change game</button>
            <button type="button" className={`cm-gs-play ${allReady ? "" : "is-waiting"}`} aria-disabled={!allReady} onClick={() => { if (allReady && saved) onPlay(saved); }}>
              {allReady ? "Let's play" : "Waiting for players…"}
            </button>
          </div>
        </div>
      )}
    </CommunityDialog>
  );
}
