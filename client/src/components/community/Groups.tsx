import { useEffect, useId, useState, type ReactNode } from "react";
import { Link, useLocation, useSearch } from "wouter";
import { conditions, groupQuickReplies, inviteFriends, people, suggestedGroups, type ConditionId, type GroupMessage, type GroupVisibility, type PersonId, type JoinableGroupId } from "@/content/community-samples";
import { canSee, communityHref, communityStore, communityViewFromQuery, inCondition, isBlocked, listNames, useCommunity, type CommunityMemory, type NoteDraft, type OwnNote } from "@/lib/community-store";
import BattleshipsGame from "./games/Battleships";
import { MiniSea, Reticle } from "./games/BattleshipsArt";
import { battleshipsProgress } from "./games/battleships-rules";
import ChessGame from "./games/Chess";
import { replay } from "./games/chess-rules";
import { ChessPiece, GamesIcon } from "./games/pieces";
import PlayNowSheet, { COMPUTER_NOTE } from "./games/PlayNowSheet";
import StartGameSheet from "./games/StartGameSheet";
import { conditionOf, gameOpens, homeCondition, lastLine, myGames, myGroups, openGames, visibleSubgroups, type GameModel, type GroupModel, type SubgroupCard } from "./group-model";
import { useBursts, usePinnedToEnd } from "./hooks";
import { CheckIcon, ChevronDownIcon, ClockIcon, EyeIcon, GlobeIcon, HeartIcon, LockIcon, NextIcon, PlusIcon, PulseIcon, UsersIcon } from "./icons";
import { ChatInput, Cover, Face, FloatingHearts, LiveDot, MyFace, MyMessage, TheirMessage, toneClass, TypingRow } from "./parts";
import "@/pages/community-games.css";

const nameOf = (who: PersonId) => people[who].name;
/** `&game=new-open` on the Groups page opens Play now. */
const NEW_OPEN = "new-open";

/* --------------------------------------------------------------- small parts */

const conditionPaths: Record<ConditionId, ReactNode> = {
  stroke: <path d="M3 12h4l2.5-6 4 12 2.5-6h5" />,
  parkinsons: <path d="M7 11V6a1.5 1.5 0 0 1 3 0v4m0-5.5a1.5 1.5 0 0 1 3 0V10m0-4a1.5 1.5 0 0 1 3 0v5m0-2.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-1a6 6 0 0 1-5-2.7L3.6 14a1.5 1.5 0 0 1 2.5-1.6L7 13.5" />,
  ms: <><path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" /><circle cx="12" cy="12" r="2.2" /></>,
  brain: <><path d="M9.5 3a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 2.5 2.5 0 0 0 2.5-2.5V5.5A2.5 2.5 0 0 0 9.5 3z" /><path d="M14.5 3a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3 2.5 2.5 0 0 1-2.5-2.5V5.5A2.5 2.5 0 0 1 14.5 3z" /></>,
  spine: <><rect x="8.5" y="2.5" width="7" height="4.2" rx="1.6" /><rect x="8.5" y="9.9" width="7" height="4.2" rx="1.6" /><rect x="8.5" y="17.3" width="7" height="4.2" rx="1.6" /><path d="M12 6.7v3.2M12 14.1v3.2" /></>,
  joint: <><path d="M8 2.5v8a4 4 0 0 0 8 0v-8" /><path d="M10 21.5v-5.5M14 21.5v-5.5" /><circle cx="12" cy="11" r="1.4" /></>,
};

/** The sign for each condition group, drawn in its own ink. */
export function ConditionIcon({ id, size = 22 }: { id: ConditionId; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{conditionPaths[id]}</svg>;
}

/** "Private" with a lock, or "Public" with a globe. */
export function PrivacyPill({ visibility, className = "" }: { visibility: GroupVisibility; className?: string }) {
  return visibility === "private"
    ? <span className={`cm-privacy-pill is-private ${className}`}><LockIcon size={13} strokeWidth={2.2} />Private</span>
    : <span className={`cm-privacy-pill is-public ${className}`}><GlobeIcon size={13} strokeWidth={2} />Public</span>;
}

/** Whose turn it is in a chess game the person plays (always white). */
const yourMove = (game: GameModel) => replay(game.moves).position.turn === "w";
/** A game the person plays and can open now: their chess games and their own Battleships games. */
const playsNow = (game: GameModel) => game.withYou && gameOpens(game);
/** Where one of the person's own games has got to, in a few words, and whether it is their go. */
function progressOf(game: GameModel): { text: string; yours: boolean } {
  const who = nameOf(game.players[0]);
  if (game.type === "battleships") return battleshipsProgress(game.battle, who);
  return yourMove(game) ? { text: "Your move", yours: true } : { text: `${who} is thinking`, yours: false };
}
/** "Your move" becomes "your move" in the middle of a sentence; a name keeps its capital. */
const midSentence = (text: string, name: string) => (text.startsWith(name) ? text : `${text.charAt(0).toLowerCase()}${text.slice(1)}`);

/**
 * "Play now": a game with someone new, with no group to make first. Under the button, the Play now
 * games already going: chess and Battleships open to play; the other games are coming soon.
 */
function PlayNowCard({ memory, cond }: { memory: CommunityMemory; cond: ConditionId }) {
  const games = openGames(memory).filter(game => game.state !== "finished").slice(0, 4);
  return (
    <section className="cm-card cm-side-card cm-play-now cm-rise-2" aria-labelledby="cm-play-now-title">
      <p className="cm-overline">Play now</p>
      <h3 id="cm-play-now-title">Play a game with someone new</h3>
      <Link className="cm-play-now-go cm-nudge" href={communityHref("groups", null, { game: NEW_OPEN, cond })}><GamesIcon size={20} />Play now</Link>
      <p className="cm-play-now-note">{COMPUTER_NOTE}</p>
      {games.length > 0 && (
        <ul className="cm-games-list" aria-label="Your Play now games">
          {games.map(game => {
            const who = listNames(game.players.map(nameOf));
            if (playsNow(game)) {
              const { text, yours } = progressOf(game);
              return (
                <li key={game.id}>
                  <Link className="cm-game-row is-yours" href={communityHref("groups", null, { game: game.id })}>
                    <span className="cm-game-face">
                      <Face who={game.players[0]} size={44} />
                      <span className="cm-game-badge" aria-hidden="true">{game.type === "battleships" ? <Reticle className="cm-bs-badge" /> : <ChessPiece piece="wN" size={16} />}</span>
                    </span>
                    <span className="cm-group-text"><b>{`${game.name} · ${who}`}</b><span className={yours ? "is-go" : ""}>{text}</span></span>
                    <span className={`cm-game-play ${yours ? "cm-nudge" : ""}`}>Play</span>
                  </Link>
                </li>
              );
            }
            return (
              <li key={game.id} className="cm-game-row">
                <span className="cm-game-tile is-lilac"><GamesIcon /></span>
                <span className="cm-group-text"><b>{`${game.name} · ${who}`}</b><span>Coming soon in this preview</span></span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

/* --------------------------------------------------------- groups by condition */

type Filter = "all" | "mine" | "public";
const FILTERS: { id: Filter; label: string }[] = [{ id: "all", label: "All" }, { id: "mine", label: "Mine" }, { id: "public", label: "Public" }];

/**
 * The Groups tab: the condition groups, then the smaller groups members started inside the one
 * chosen. Private groups show only to the people in them; everyone else never sees them here.
 * With `playAsked` (`&game=new-open`), Play now is open over it.
 */
function ConditionGroups({ chosen, playAsked }: { chosen: ConditionId | null; playAsked: boolean }) {
  const memory = useCommunity();
  const [, navigate] = useLocation();
  const cond = conditionOf(chosen ?? homeCondition(memory));
  const member = inCondition(memory, cond.id);
  const [filter, setFilter] = useState<Filter>("all");
  const { bursts, burst } = useBursts();
  useEffect(() => { setFilter("all"); }, [cond.id]);

  const all = visibleSubgroups(memory, cond.id);
  const shown = all.filter(group => (filter === "mine" ? group.member : filter === "public" ? group.visibility === "public" : true));
  const join = (group: SubgroupCard) => { communityStore.toggleJoined(group.id as JoinableGroupId); burst(); };
  // Play now closes back to the groups; a game that can be played opens on its own page.
  const here = communityHref("groups", null, { cond: chosen });
  const closePlay = () => navigate(here, { replace: true });
  const play = (game: { id: string; type: string }) => navigate(game.type === "chess" || game.type === "battleships" ? communityHref("groups", null, { game: game.id }) : here, { replace: true });

  return (
    <div className="cm-conds">
      <div className="cm-conds-head">
        <h2 className="cm-conds-title" tabIndex={-1} data-view-heading>Groups by condition</h2>
      </div>

      <nav className="cm-cond-tiles" aria-label="Conditions">
        {conditions.map(item => {
          const on = item.id === cond.id;
          return (
            <Link key={item.id} className={`cm-cond-tile ${on ? "is-on" : ""}`} style={{ background: item.tint }} href={communityHref("groups", null, { cond: item.id })} replace aria-current={on ? "true" : undefined}>
              <span className="cm-cond-icon" style={{ color: item.ink }}><ConditionIcon id={item.id} /></span>
              {inCondition(memory, item.id) && <span className="cm-cond-in cm-pop"><CheckIcon size={12} />You're in</span>}
              <span className="cm-cond-name"><b>{item.name}</b><span>{item.members}</span></span>
            </Link>
          );
        })}
      </nav>

      <div className="cm-conds-body">
        <section className="cm-card cm-inside cm-rise" aria-labelledby="cm-inside-title">
          <div className="cm-inside-head">
            <div>
              <h3 className="cm-inside-title" id="cm-inside-title">{`Inside ${cond.name}`}</h3>
              <p>{member ? "Groups that members started. You can see your own groups and any public ones." : `Public groups that members started. Join ${cond.name} to start your own.`}</p>
            </div>
            <div className="cm-segments cm-inside-filter" role="group" aria-label="Show">
              {FILTERS.map(item => <button key={item.id} type="button" className="cm-segment" aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>{item.label}</button>)}
            </div>
          </div>

          {!member && (
            <div className="cm-cond-join cm-pop" style={{ background: cond.tint }}>
              <p><strong>Anyone can join a condition group.</strong> You might be here for yourself, or for someone you care for.</p>
              <button type="button" className="cm-btn cm-btn-dark" onClick={() => { communityStore.toggleCondition(cond.id); burst(); }}>{`Join ${cond.name}`}</button>
            </div>
          )}

          {shown.length > 0 ? (
            <ul className="cm-sub-grid">
              {shown.map(group => (
                <li key={group.id} className="cm-sub-card cm-rise">
                  <div className="cm-sub-top">
                    <Cover cover={group.cover} className="cm-sub-cover" iconSize={34} />
                    <div className="cm-sub-text">
                      <b>{group.name}</b>
                      <PrivacyPill visibility={group.visibility} />
                      <span className="cm-sub-members"><span className="cm-face-stack" aria-hidden="true">{group.faces.slice(0, 3).map(who => <Face key={who} who={who} size={24} />)}</span>{`${group.members} members`}</span>
                    </div>
                  </div>
                  <div className="cm-sub-foot">
                    <span className={`cm-sub-act is-${group.activity.kind}`}>
                      {group.activity.kind === "game" && <LiveDot tone="green" />}
                      {group.activity.kind === "soon" && <ClockIcon size={14} strokeWidth={2} />}
                      <span>{group.activity.text}</span>
                    </span>
                    {group.member
                      ? <Link className="cm-sub-open" href={communityHref("groups", group.id)}>Open<span className="cm-sr">{` ${group.name}`}</span></Link>
                      : <button type="button" className="cm-sub-join" onClick={() => join(group)}>Join<span className="cm-sr">{` ${group.name}`}</span></button>}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="cm-sub-empty cm-pop">
              <span className="cm-sub-empty-icon" style={{ background: cond.tint }}><UsersIcon size={30} /></span>
              <p className="cm-sub-empty-title">No groups of yours here yet</p>
              <p>Join one of the public groups, or start a small private one with people you already know.</p>
              <Link className="cm-btn cm-btn-dark" href={communityHref("start", null, { cond: cond.id })}><PlusIcon size={18} />Start a group</Link>
            </div>
          )}
          <p className="cm-sub-count"><EyeIcon size={16} strokeWidth={2} />{`${shown.length} ${shown.length === 1 ? "group" : "groups"} shown. Private groups you are not in never appear here.`}</p>
          <FloatingHearts bursts={bursts} className="cm-hearts-chat" />
        </section>

        {/* After the list, not beside it (review): start a smaller group, then play with someone new. */}
        <div className="cm-conds-after">
          <section className="cm-card cm-start-small cm-rise-2" aria-labelledby="cm-start-small-title">
            <p className="cm-overline cm-overline-gold">{`Inside ${cond.name}`}</p>
            <h3 id="cm-start-small-title">Start a smaller group</h3>
            <Link className="cm-start-gold" href={communityHref("start", null, { cond: cond.id })}><PlusIcon size={18} />Start a group</Link>
          </section>
          <PlayNowCard memory={memory} cond={cond.id} />
        </div>
      </div>
      {playAsked && <PlayNowSheet onClose={closePlay} onPlay={play} />}
    </div>
  );
}

/* ------------------------------------------------------------- the group page */

type LogLine =
  | { kind: "theirs"; at: number; message: GroupMessage }
  | { kind: "mine"; at: number; note: OwnNote }
  | { kind: "hello"; at: number; text: string }
  | { kind: "event"; at: number; text: string };

/** "This week: a photo of something growing" becomes "A photo of something growing", under "This week's group challenge". */
const challengeWords = (text: string) => { const words = text.replace(/^This week:\s*/i, ""); return words.charAt(0).toUpperCase() + words.slice(1); };

function Challenge({ group }: { group: GroupModel }) {
  const joined = useCommunity().challenges.includes(group.id);
  const { done: base, total, text } = group.challenge;
  const done = Math.min(total, base + (joined ? 1 : 0));
  return (
    <div className="cm-challenge">
      <span className="cm-challenge-count" aria-hidden="true">{done}</span>
      <div className="cm-challenge-body">
        <p className="cm-overline cm-overline-gold">This week's group challenge</p>
        <p className="cm-challenge-text">{challengeWords(text)}</p>
        <div className="cm-progress-row">
          <span className="cm-progress" role="progressbar" aria-label="Done this week" aria-valuemin={0} aria-valuemax={total} aria-valuenow={done} aria-valuetext={`${done} of ${total}`}>
            <span className="cm-progress-fill" style={{ width: `${Math.round((done * 100) / total)}%` }} />
          </span>
          <span className="cm-progress-text" aria-hidden="true">{done} of {total} done</span>
        </div>
      </div>
      <button type="button" className={`cm-challenge-join ${joined ? "is-on" : ""}`} aria-pressed={joined} onClick={() => communityStore.toggleChallenge(group.id)}>
        {joined ? <><CheckIcon size={14} />You're in</> : "Join in"}<span className="cm-sr">{joined ? ", tap to leave the challenge" : " the challenge"}</span>
      </button>
    </div>
  );
}

/**
 * "+ Invite a friend": the example friends who could come along (never anyone blocked). Nothing is
 * sent anywhere.
 */
function InvitePanel({ group, id, invited, onToggle }: { group: GroupModel; id: string; invited: PersonId[]; onToggle: (who: PersonId) => void }) {
  const memory = useCommunity();
  const candidates = (group.kind === "started" ? inviteFriends : inviteFriends.filter(who => !group.faces.includes(who))).filter(who => !isBlocked(memory, who));
  return (
    <div className="cm-invite-panel cm-pop" id={id}>
      <p className="cm-invite-note">These are example friends, so nothing is sent.</p>
      {candidates.length ? (
        <ul>
          {candidates.map(who => {
            const on = invited.includes(who);
            return (
              <li key={who}>
                <Face who={who} size={36} />
                <span className="cm-invite-name">{nameOf(who)}</span>
                <button type="button" className={`cm-remind ${on ? "is-on" : ""}`} onClick={() => onToggle(who)}>
                  {on ? "Invited" : "Invite"}<span className="cm-sr">{` ${nameOf(who)}`}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : <p className="cm-invite-note">Everyone you know here is already in this group.</p>}
    </div>
  );
}

/** A small board showing where a chess game has got to. */
function MiniBoard({ moves }: { moves: string[] }) {
  const board = replay(moves).position.board;
  return (
    <span className="cm-mini-board" aria-hidden="true">
      {board.map((piece, index) => <span key={index} className={(Math.floor(index / 8) + (index % 8)) % 2 === 0 ? "is-light" : "is-dark"}>{piece && <ChessPiece piece={piece} size={11} />}</span>)}
    </span>
  );
}

/**
 * The strip above a group's chat: the game going on, or coming up, and "Start a game". In a public
 * group the button is switched off, and the strip says why.
 */
function GameStrip({ group, games, onStart }: { group: GroupModel; games: GameModel[]; onStart: () => void }) {
  const noteId = useId();
  const live = games.find(game => game.state === "playing" && game.own) ?? games.find(game => game.state === "playing" && !game.withYou) ?? games.find(game => game.state === "playing") ?? games.find(game => game.state === "lobby") ?? games.find(game => game.state === "scheduled");
  // Another game the person is playing here gets a line of its own under the strip.
  const yours = games.find(game => game !== live && playsNow(game));
  let body;
  if (!group.games) {
    body = (
      <>
        <span className="cm-strip-icon"><GamesIcon size={40} /></span>
        <div className="cm-strip-text">
          <p className="cm-overline cm-overline-gold">Games are for private groups</p>
          <p className="cm-strip-title">This group is public</p>
          <p id={noteId}>{group.started ? "Make it private to play games together." : "Only private groups can play games together."}</p>
        </div>
      </>
    );
  } else if (live && live.type === "chess" && live.state === "playing") {
    const moveNo = Math.floor(live.moves.length / 2) + 1;
    const next = replay(live.moves).position.turn === "w" ? live.players[0] : live.players[1] ?? live.players[0];
    const watching = live.watchers.length ? ` · ${listNames(live.watchers.map(nameOf))} ${live.watchers.length === 1 ? "is" : "are"} watching` : "";
    body = (
      <>
        <MiniBoard moves={live.moves} />
        <div className="cm-strip-text">
          <p className="cm-overline cm-overline-gold"><LiveDot />Game on in this group</p>
          <p className="cm-strip-title">{live.withYou ? `You vs ${nameOf(live.players[0])} · chess` : `${listNames(live.players.map(nameOf))} · chess`}</p>
          <p>{live.withYou ? (yourMove(live) ? `Move ${moveNo} · your move` : `Move ${moveNo} · ${nameOf(live.players[0])} is thinking`) : `Move ${moveNo} · ${nameOf(next)} is thinking${watching}`}</p>
        </div>
        <Link className="cm-strip-watch" href={communityHref("groups", group.id, { game: live.id })}><EyeIcon size={18} strokeWidth={2} />{live.withYou ? "Play" : "Watch"}</Link>
      </>
    );
  } else if (live && live.type === "battleships" && gameOpens(live)) {
    const shots = live.battle?.ready ? live.battle.shots.filter(shot => shot.by === "you").length : 0;
    body = (
      <>
        <MiniSea save={live.battle} />
        <div className="cm-strip-text">
          <p className="cm-overline cm-overline-gold"><LiveDot />Game on in this group</p>
          <p className="cm-strip-title">{`You vs ${nameOf(live.players[0])} · Battleships`}</p>
          <p>{shots ? `${progressOf(live).text} · ${shots} ${shots === 1 ? "shot" : "shots"} fired` : progressOf(live).text}</p>
        </div>
        <Link className="cm-strip-watch" href={communityHref("groups", group.id, { game: live.id })}><EyeIcon size={18} strokeWidth={2} />Play</Link>
      </>
    );
  } else if (live) {
    const who = listNames(live.players.map(nameOf));
    body = (
      <>
        <span className="cm-strip-icon"><GamesIcon size={40} /></span>
        <div className="cm-strip-text">
          <p className="cm-overline cm-overline-gold">{live.state === "scheduled" ? live.when : live.state === "lobby" ? "Invites sent" : "Game on in this group"}</p>
          <p className="cm-strip-title">{live.state === "scheduled" ? `${live.name} · ${live.players.length} going` : `${live.name} with ${who}`}</p>
          <p>{live.state === "scheduled" ? `${nameOf(live.players[0])} set it up. ${listNames(live.players.slice(1).map(nameOf))} said yes.` : live.state === "lobby" ? `Waiting for ${who} to say yes.` : "Only chess and Battleships can be played in this preview. The others are coming soon."}</p>
        </div>
      </>
    );
  } else {
    body = (
      <>
        <span className="cm-strip-icon"><GamesIcon size={40} /></span>
        <div className="cm-strip-text">
          <p className="cm-overline cm-overline-gold">Games in this group</p>
          <p className="cm-strip-title">No game on yet</p>
          <p>Chess, draughts, Go, Battleships and other classics. No clock.</p>
        </div>
      </>
    );
  }
  return (
    <div className="cm-strip-wrap">
      <div className="cm-strip">
        {body}
        <button type="button" className={`cm-strip-start ${group.games ? "cm-nudge" : ""}`} aria-disabled={!group.games} aria-describedby={group.games ? undefined : noteId} onClick={() => { if (group.games) onStart(); }}>
          <PlusIcon size={18} />Start a game
        </button>
      </div>
      {yours && (
        <Link className="cm-strip-yours" href={communityHref("groups", group.id, { game: yours.id })}>
          {yours.type === "battleships" ? <Reticle className="cm-bs-tile-icon" /> : <ChessPiece piece="wN" size={20} />}
          <span>{`Your ${yours.type === "chess" ? "chess" : yours.name} game with ${nameOf(yours.players[0])}: ${midSentence(progressOf(yours).text, nameOf(yours.players[0]))}`}</span>
          <NextIcon size={16} />
        </Link>
      )}
    </div>
  );
}

/**
 * F3: a group's page. Switch groups, clear unread badges, join the weekly challenge, start a game
 * in a private group, and chat. Messages from people the person has blocked or hidden are left out.
 */
function GroupPage({ active, requested, sheetAsked }: { active: boolean; requested: string; sheetAsked: boolean }) {
  const memory = useCommunity();
  const shown = (who: PersonId) => canSee(memory, who);
  // Blocked people are out of sight: not in the face stacks, the invites or the names.
  const inSight = (who: PersonId) => !isBlocked(memory, who);
  const [, navigate] = useLocation();
  const groups = myGroups(memory);
  const selected = groups.find(group => group.id === requested) ?? groups.find(group => group.id === "garden") ?? groups[0];
  const cond = conditionOf(selected.conditionId);
  const [delivered, setDelivered] = useState<Record<string, number>>({});
  const [typing, setTyping] = useState<{ group: string; who: PersonId } | null>(null);
  const [invites, setInvites] = useState<Record<string, PersonId[]>>({});
  const [inviting, setInviting] = useState(false);
  const [closing, setClosing] = useState(false);
  const [sentNote, setSentNote] = useState("");
  const [sheet, setSheet] = useState(sheetAsked && selected.games);
  const { bursts, burst } = useBursts();
  const panelId = useId();
  const games = myGames(memory, selected.id);

  const own = memory.messages[selected.id] ?? [];
  const deliveredAt = delivered[selected.id];
  const events: LogLine[] = [
    ...(selected.event ? [{ kind: "event" as const, at: -1, text: selected.event }] : []),
    ...games.filter(game => game.own).map(game => ({ kind: "event" as const, at: game.own!.createdAt, text: `You started ${game.name.toLowerCase()} with ${listNames(game.players.map(nameOf))}` })),
  ];
  const log: LogLine[] = [
    ...events,
    ...selected.messages.filter(message => shown(message.who)).map(message => ({ kind: "theirs" as const, at: 0, message })),
    ...(selected.started?.hello ? [{ kind: "hello" as const, at: selected.started.createdAt, text: selected.started.hello }] : []),
    ...own.map(note => ({ kind: "mine" as const, at: note.createdAt, note })),
    ...(deliveredAt !== undefined && selected.incoming && shown(selected.incoming.who) ? [{ kind: "theirs" as const, at: deliveredAt, message: selected.incoming }] : []),
  ].sort((a, b) => a.at - b.at);
  const writing = typing && typing.group === selected.id && shown(typing.who) ? typing.who : null;
  const { box, onScroll } = usePinnedToEnd<HTMLDivElement>(`${selected.id}:${log.length}:${writing ?? ""}`, active);

  // Opening a group clears its unread badge.
  useEffect(() => { if (active && selected.unread > 0) communityStore.markRead(selected.id); }, [active, selected.id, selected.unread]);
  useEffect(() => { setInviting(false); setClosing(false); }, [selected.id]);
  useEffect(() => { if (sheetAsked && selected.games) setSheet(true); }, [sheetAsked, selected.games]);
  // While a group is open, one more message arrives: first "is writing", then the message.
  useEffect(() => {
    const incoming = selected.incoming;
    if (!active || !incoming || delivered[selected.id] !== undefined) return;
    const timer = window.setTimeout(() => {
      if (typing?.group !== selected.id) setTyping({ group: selected.id, who: incoming.who });
      else { setTyping(null); setDelivered(list => ({ ...list, [selected.id]: Date.now() })); }
    }, 2400);
    return () => window.clearTimeout(timer);
  }, [active, selected.id, selected.incoming, typing, delivered]);

  const send = (draft: NoteDraft) => {
    const note = communityStore.addMessage(selected.id, draft);
    if (note) setSentNote(`Sent: ${note.text || "your photo"}`);
  };
  const started = selected.started;
  const invited = (started ? started.friends : invites[selected.id] ?? []).filter(inSight);
  const toggleInvite = (who: PersonId) => {
    if (started) communityStore.toggleGroupFriend(started.id, who);
    else setInvites(list => {
      const current = list[selected.id] ?? [];
      return { ...list, [selected.id]: current.includes(who) ? current.filter(other => other !== who) : [...current, who] };
    });
  };
  const close = () => {
    if (!started) return;
    communityStore.closeGroup(started.id);
    navigate(communityHref("groups"), { replace: true });
  };
  const closeSheet = () => {
    setSheet(false);
    if (sheetAsked) navigate(communityHref("groups", selected.id), { replace: true });
  };

  const inCond = groups.filter(group => group.conditionId === cond.id).sort((a, b) => Number(b.visibility === "private") - Number(a.visibility === "private"));
  const others = conditions.filter(item => item.id !== cond.id);
  const side = (
    <div className="cm-side">
      <section className="cm-card cm-side-card cm-group-list" aria-labelledby="cm-group-list-title">
        <Link className="cm-cond-chip" href={communityHref("groups", null, { cond: cond.id })}><PulseIcon size={14} strokeWidth={2} />{`${cond.name} community`}<ChevronDownIcon size={14} /></Link>
        <h3 className="cm-side-title" id="cm-group-list-title">Your groups</h3>
        <Link className="cm-everyone" href={communityHref("groups", null, { cond: cond.id })}>
          <span className="cm-everyone-icon"><ConditionIcon id={cond.id} size={20} /></span>
          <span className="cm-group-text"><b>{`Everyone in ${cond.name}`}</b><span>{`${cond.members} · the big room`}</span></span>
        </Link>
        <ul className="cm-nested">
          {inCond.map(group => {
            const on = group.id === selected.id;
            const unread = on ? 0 : group.unread;
            const game = group.activity.kind === "game";
            const soon = group.activity.kind === "soon";
            return (
              <li key={group.id}>
                <Link className={`cm-group-pick ${on ? "is-on" : ""}`} href={communityHref("groups", group.id)} aria-current={on ? "page" : undefined}>
                  <span className="cm-cover-wrap">
                    <Cover cover={group.cover} className="cm-cover-thumb" />
                    {group.active && <span className="cm-cover-live cm-live" aria-hidden="true" />}
                  </span>
                  <span className="cm-group-text">
                    <b>{group.name}{group.visibility === "private" && <span className="cm-lock" aria-label="Private"><LockIcon size={14} strokeWidth={2.2} /></span>}</b>
                    <span className={game ? "is-game" : ""}>{game ? group.activity.text.replace(/ ·.*/, "") : soon ? group.activity.text : lastLine(group, memory, delivered[group.id] ?? null, nameOf, shown)}</span>
                  </span>
                  {unread > 0 && <span className="cm-badge cm-pop"><span aria-hidden="true">{unread}</span><span className="cm-sr">{`, ${unread} unread`}</span></span>}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link className="cm-start-link" href={communityHref("start", null, { cond: cond.id })}><PlusIcon size={18} /><span>{`Start a group in ${cond.name}`}</span></Link>
      </section>

      <section className="cm-card cm-side-card cm-other-conds" aria-labelledby="cm-other-title">
        <h3 className="cm-overline cm-overline-rust" id="cm-other-title">Other conditions</h3>
        <ul>
          {others.slice(0, 2).map(item => (
            <li key={item.id}>
              <Link className="cm-other-cond" href={communityHref("groups", null, { cond: item.id })}>
                <span style={{ color: item.ink }}><ConditionIcon id={item.id} size={20} /></span>
                <span>{item.short}</span>
                <NextIcon size={16} />
              </Link>
            </li>
          ))}
        </ul>
        <Link className="cm-see-all" href={communityHref("groups", null, { cond: others[0].id })}>See all conditions</Link>
      </section>

      <section className="cm-card cm-side-card" aria-labelledby="cm-suggest-title">
        <h3 className="cm-overline cm-overline-rust" id="cm-suggest-title">Groups you might like</h3>
        <ul className="cm-suggestions">
          {suggestedGroups.filter(group => group.visibility === "public").map(group => {
            const on = (memory.joined as string[]).includes(group.id);
            return (
              <li key={group.id}>
                <Cover cover={group.cover} className="cm-cover-thumb" />
                <span className="cm-group-text">
                  <b>{group.name}</b>
                  {on ? <Link className="cm-inline-link" href={communityHref("groups", group.id)}>Welcome! Say hello</Link> : <span>{group.why}</span>}
                </span>
                <button type="button" className={`cm-join ${on ? "is-on cm-pop" : ""}`} onClick={() => { communityStore.toggleJoined(group.id as JoinableGroupId); if (!on) burst(); }}>
                  {on ? "Joined" : "Join"}<span className="cm-sr">{` ${group.name}`}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );

  return (
    <div className="cm-layout cm-groups">
      {side}
      <section className="cm-card cm-chat cm-group" aria-labelledby="cm-group-title">
        <Cover cover={selected.cover} className="cm-group-band" iconSize={56} />
        <header className="cm-group-head">
          <Cover cover={selected.cover} className="cm-group-tile" iconSize={34} />
          <div className="cm-group-titles">
            <h2 id="cm-group-title" tabIndex={-1} data-view-heading>{selected.name}</h2>
            <p className="cm-group-meta">
              <PrivacyPill visibility={selected.visibility} />
              <span>{selected.meta}</span>
              {selected.online > 0 && <><LiveDot tone="green" className="cm-meta-dot" /><span className="cm-online">{selected.online} online</span></>}
              <span className="cm-face-stack cm-group-faces" aria-hidden="true">
                {started && <MyFace size={28} />}
                {selected.faces.filter(inSight).slice(0, 4).map(who => <Face key={who} who={who} size={28} />)}
              </span>
            </p>
          </div>
          <span className="cm-group-actions">
            <button type="button" className={`cm-invite ${!started && invited.length ? "is-on" : ""}`} aria-expanded={inviting} aria-controls={inviting ? panelId : undefined} onClick={() => setInviting(!inviting)}>
              {!started && invited.length ? `${invited.length} invited` : "+ Invite a friend"}
            </button>
            <span className="cm-joined-pill"><CheckIcon size={14} />{started ? "Yours" : "Joined"}</span>
          </span>
        </header>
        <p className="cm-group-about">{selected.about}</p>
        {inviting && <InvitePanel group={selected} id={panelId} invited={invited} onToggle={toggleInvite} />}
        {started && (
          <div className="cm-started-bar">
            {closing ? (
              <span className="cm-confirm" role="group" aria-label={`Close ${started.name}?`}>
                <span>{`Close ${started.name}? It will be removed from this device.`}</span>
                <button type="button" className="cm-btn cm-btn-small cm-btn-rust" onClick={close}>Close it</button>
                <button type="button" className="cm-btn cm-btn-small cm-btn-quiet" onClick={() => setClosing(false)}>Keep it</button>
              </span>
            ) : (
              <>
                <span>{invited.length ? `You started this group with ${listNames(invited.map(nameOf))}.` : "You started this group."}</span>
                <span className="cm-started-tools">
                  <button type="button" className="cm-text-button" onClick={() => communityStore.setGroupVisibility(started.id, started.visibility === "private" ? "public" : "private")}>
                    {started.visibility === "private" ? "Make it public" : "Make it private"}<span className="cm-sr">{started.visibility === "private" ? ". Games will switch off" : ". Games will switch on"}</span>
                  </button>
                  <button type="button" className="cm-text-button" onClick={() => setClosing(true)}>Close group</button>
                </span>
              </>
            )}
          </div>
        )}
        <Challenge group={selected} />
        <GameStrip group={selected} games={games} onStart={() => setSheet(true)} />
        <div className="cm-chat-log" ref={box} onScroll={onScroll} role="log" aria-live="off" aria-label={`Messages in ${selected.name}`} tabIndex={0}>
          <div className="cm-chat-fade" aria-hidden="true" />
          <ol className="cm-messages">
            {log.length > 0 && <li className="cm-today" aria-hidden="true"><span>Today</span></li>}
            {log.length === 0 && <li className="cm-log-note">It's just you here for now. Say the first hello.</li>}
            {log.map((line, index) => line.kind === "event"
              ? <li key={`event-${index}`} className="cm-event"><GamesIcon size={16} /><span>{line.text}</span></li>
              : line.kind === "theirs"
                ? <TheirMessage key={line.message.id} message={line.message} heartKey={`group:${selected.id}:${line.message.id}`} />
                : line.kind === "hello"
                  ? <MyMessage key="hello" note={{ text: line.text, photo: null, voice: false }} onRemove={() => started && communityStore.setGroupHello(started.id, null)} />
                  : <MyMessage key={line.note.id} note={line.note} onRemove={() => communityStore.removeMessage(selected.id, line.note.id)} />)}
          </ol>
          {writing && <TypingRow who={writing} />}
        </div>
        <FloatingHearts bursts={bursts} className="cm-hearts-chat" />
        <div className="cm-chat-foot">
          <div className="cm-quick-row" role="group" aria-label="Quick replies">
            {groupQuickReplies.map(reply => <button key={reply.label} type="button" className={`cm-quick ${toneClass(reply.tone)}`} onClick={() => send({ text: reply.text })}>{reply.label}</button>)}
            <button type="button" className="cm-love" aria-label="Send a heart" onClick={burst}><HeartIcon size={22} fill="currentColor" strokeWidth={1.6} /></button>
          </div>
          <ChatInput label="Message the group" placeholder="Message the group" onSend={send} allowPhoto sendText="Send" />
          <p className="cm-sr" role="status">{sentNote}</p>
        </div>
      </section>
      {sheet && selected.games && (
        <StartGameSheet
          group={selected}
          onClose={closeSheet}
          onPlay={game => {
            setSheet(false);
            navigate(game.type === "chess" || game.type === "battleships" ? communityHref("groups", selected.id, { game: game.id }) : communityHref("groups", selected.id), { replace: sheetAsked });
          }}
        />
      )}
    </div>
  );
}

/**
 * The Groups tab. With no group named it shows the groups by condition; with one, that group's
 * page; with a game named too (`&game=`), that game. `&game=new` opens "Start a game" on the page.
 * With no group, `&game=new-open` opens Play now, and `&game=<id>` one of its games.
 */
export default function GroupsView({ active, requested }: { active: boolean; requested: string | null }) {
  const memory = useCommunity();
  const view = communityViewFromQuery(useSearch());
  if (!requested) {
    const open = view.game && view.game !== NEW_OPEN ? openGames(memory).find(item => item.id === view.game && gameOpens(item)) : undefined;
    if (open) return open.type === "battleships" ? <BattleshipsGame key={open.id} game={open} group={null} /> : <ChessGame key={open.id} game={open} group={null} />;
    return <ConditionGroups chosen={view.cond ?? null} playAsked={view.game === NEW_OPEN} />;
  }
  const group = myGroups(memory).find(item => item.id === requested);
  const game = group && view.game ? myGames(memory, group.id).find(item => item.id === view.game && gameOpens(item)) : undefined;
  if (group && game) return game.type === "battleships" ? <BattleshipsGame key={game.id} game={game} group={group} /> : <ChessGame key={game.id} game={game} group={group} />;
  return <GroupPage active={active} requested={requested} sheetAsked={view.game === "new"} />;
}
