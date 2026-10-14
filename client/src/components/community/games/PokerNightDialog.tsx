import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import { Link } from "wouter";
import { communityHref } from "@/lib/community-store";
import { ME, pickCounts, POKER_GAMES, pokerGame, pokerNight, TABLE_SIZE, usePokerNight, type PokerGameId } from "@/lib/poker-night";
import CommunityDialog from "../dialog";
import { useStill } from "../hooks";
import { CheckIcon, CloseIcon, NextIcon } from "../icons";
import { CardBack, CardFan, ChipsOnly, GAME_FANS, PlayingCard, PokerFace, playerName, useSecondsToTables, useTonightsTables } from "./PokerParts";

// Friday poker night's pop-up, from Rehyn (board 5, PokerPop): a countdown to 7 pm, the four games
// with how many have picked each (more pick while it is open: the "just picked" line), "Seat me at …"
// and "Not tonight". Once seated, a little table fills with the people who picked the same game, and
// there are switches for a reminder and for big cards. It opens by itself once on poker night (see
// pages/Community.tsx) and again from the Friday card. Chips only. Styles: community-poker.css.

/** How often somebody else picks a game while the pop-up is open. */
const PICK_MS = 2800;
/** How often another seat fills at your table. */
const FILL_MS = 1100;

const pad = (n: number) => String(n).padStart(2, "0");
const andList = (names: string[]) => (names.length < 2 ? names.join("") : `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`);
/** Where the seats are round the little table, starting with yours at the bottom. */
const SEAT_SPOTS: [number, number][] = [[50, 86], [14, 68], [14, 32], [50, 14], [86, 32], [86, 68]];

/** When the pop-up moves on a step, the button pressed has gone: the focus goes to the new heading. */
function useFocusOnStep(titleId: string, moved: boolean) {
  useEffect(() => { if (moved) document.getElementById(titleId)?.focus({ preventScroll: true }); }, [titleId, moved]);
}

function PickStep({ titleId, moved }: { titleId: string; moved: boolean }) {
  useFocusOnStep(titleId, moved);
  const poker = usePokerNight();
  const { players } = useTonightsTables();
  const left = useSecondsToTables();
  const late = players.filter(player => player.late);
  const [lateIn, setLateIn] = useState(0);
  useEffect(() => {
    if (lateIn >= late.length) return;
    const timer = window.setTimeout(() => setLateIn(n => n + 1), PICK_MS);
    return () => window.clearTimeout(timer);
  }, [lateIn, late.length]);
  const counts = pickCounts(players, lateIn);
  const latest = lateIn > 0 ? late[lateIn - 1] : null;
  const facesFor = (game: PokerGameId) => players.filter(player => player.game === game && !player.late).slice(0, 3);
  const most = POKER_GAMES.reduce((best, game) => (counts[game.id] > counts[best] ? game.id : best), "holdem" as PokerGameId);
  const chosen = pokerGame(poker.pick);

  return (
    <div className="pk-step">
      <div className="pk-pop-top">
        <div className="pk-pop-titles">
          <h2 className="pk-pop-title" id={titleId} tabIndex={-1}>It's Friday. Poker night!</h2>
          <p className="pk-pop-lead">Pick a game and we will seat you with others who picked the same one. Tables open at 7 pm.</p>
        </div>
        {left > 0 ? (
          <div className="pk-countdown">
            <span className="cm-sr">{`Tables open in ${Math.floor(left / 3600)} hours and ${Math.floor(left % 3600 / 60)} minutes.`}</span>
            {[["hours", Math.floor(left / 3600)], ["min", Math.floor(left % 3600 / 60)], ["sec", left % 60]].map(([unit, value]) => (
              <span key={unit} className="pk-countdown-part" aria-hidden="true"><span className="pk-countdown-num">{pad(value as number)}</span><span>{unit}</span></span>
            ))}
          </div>
        ) : <p className="pk-open-now">Tables are open</p>}
      </div>

      <div className="pk-games" role="group" aria-label="Pick a game">
        {POKER_GAMES.map(game => {
          const on = poker.pick === game.id;
          return (
            <button key={game.id} type="button" className={`pk-game ${on ? "is-on" : ""}`} aria-pressed={on} onClick={() => pokerNight.pick(game.id)}>
              <span className="pk-game-top">
                <CardFan cards={GAME_FANS[game.id]} size="sm" />
                <span className={`pk-game-tag ${game.id === most ? "is-gold" : ""}`}>{game.id === most ? "Most picked" : game.tag}</span>
              </span>
              <span className="pk-game-name">{game.name}</span>
              <span className="pk-game-blurb">{game.blurb}</span>
              <span className="pk-game-count">
                <span className="pk-stack" aria-hidden="true">{facesFor(game.id).map(player => <PokerFace key={player.id} id={player.id} size={26} />)}</span>
                <span>{`${counts[game.id]} picked`}</span>
              </span>
              {on && <span className="pk-game-check" aria-hidden="true"><CheckIcon size={17} strokeWidth={3} /></span>}
            </button>
          );
        })}
      </div>

      <p className="pk-ticker" aria-hidden="true">
        {latest && <span key={latest.id} className="pk-ticker-line"><PokerFace id={latest.id} size={24} /><span><strong>{latest.name}</strong>{` just picked ${pokerGame(latest.game).name}`}</span></span>}
      </p>

      <div className="pk-pop-actions">
        <button type="button" className="pk-btn pk-btn-ghost" onClick={pokerNight.skip}>Not tonight</button>
        <button type="button" className="pk-btn pk-btn-gold pk-nudge" onClick={pokerNight.seat}>{`Seat me at ${chosen.name}`}<NextIcon size={20} strokeWidth={2.6} /></button>
      </div>
      <ChipsOnly className="is-centred" />
    </div>
  );
}

function SeatedStep({ titleId, name, onClose, moved }: { titleId: string; name: string; onClose: () => void; moved: boolean }) {
  useFocusOnStep(titleId, moved);
  const poker = usePokerNight();
  const still = useStill();
  const { mine, matesWhoAreFriends } = useTonightsTables();
  const seats = mine?.players ?? [ME];
  const [filled, setFilled] = useState(1);
  useEffect(() => {
    if (filled >= seats.length) return;
    if (still) { setFilled(seats.length); return; }
    const timer = window.setTimeout(() => setFilled(n => n + 1), FILL_MS);
    return () => window.clearTimeout(timer);
  }, [filled, seats.length, still]);
  const game = pokerGame(poker.pick);
  const friends = matesWhoAreFriends.map(playerName);
  const shown = Math.min(filled, seats.length);

  return (
    <div className="pk-step">
      <div className="pk-pop-titles">
        <p className="pk-eyebrow">{`Table ${mine?.number ?? ""} · ${game.name}`}</p>
        <h2 className="pk-pop-title" id={titleId} tabIndex={-1}>{`You're in, ${name}!`}</h2>
        <p className="pk-pop-lead">
          {`Everyone at your table picked ${game.name} too.`}
          {friends.length > 0 && ` ${andList(friends)}, ${friends.length === 1 ? "your friend, is" : "your friends, are"} sitting with you.`}
        </p>
      </div>
      <div className="pk-seated">
        <div className="pk-mini-table" aria-hidden="true">
          <span className="pk-mini-felt" />
          <span className="pk-mini-centre"><span className="pk-mini-backs"><CardBack size="xs" /><CardBack size="xs" /><CardBack size="xs" /></span><span>{`Table ${mine?.number ?? ""}`}</span></span>
          {SEAT_SPOTS.map(([x, y], i) => {
            const id = i < shown ? seats[i] : null;
            return (
              <span key={i} className="pk-mini-seat" style={{ left: `${x}%`, top: `${y}%` }}>
                {id ? <span className="pk-mini-person"><PokerFace id={id} size={50} className={id === ME ? "is-me" : ""} /><span className="pk-mini-name">{playerName(id)}</span></span> : <span className="pk-mini-empty" />}
              </span>
            );
          })}
        </div>
        <div className="pk-seated-side">
          <p className="pk-seats-line" aria-live="polite">{`${shown} of ${TABLE_SIZE} seats taken`}</p>
          <div className="pk-setting">
            <span className="pk-setting-words"><span className="pk-setting-name">Remind me at 6:45 pm</span><span className="pk-setting-note">A gentle nudge, nothing loud</span></span>
            <button type="button" className="cm-switch" role="switch" aria-checked={poker.remind} aria-label="Remind me at 6:45 pm" onClick={() => pokerNight.setRemind(!poker.remind)}><span /></button>
          </div>
          <div className="pk-setting">
            <span className="pk-setting-words"><span className="pk-setting-name">Big cards, slow dealing</span><span className="pk-setting-note">No timer on your turn, ever</span></span>
            <button type="button" className="cm-switch" role="switch" aria-checked={poker.bigCards} aria-label="Big cards, slow dealing" onClick={() => pokerNight.setBigCards(!poker.bigCards)}><span /></button>
          </div>
        </div>
      </div>
      <div className="pk-pop-actions">
        <button type="button" className="pk-btn pk-btn-ghost" onClick={pokerNight.change}>Change game</button>
        <Link href={communityHref("poker")} className="pk-btn pk-btn-gold" onClick={onClose}>See tonight's tables<NextIcon size={20} strokeWidth={2.6} /></Link>
      </div>
      <ChipsOnly className="is-centred" />
    </div>
  );
}

export default function PokerNightDialog({ name, onClose, fallbackFocus }: { name: string; onClose: () => void; fallbackFocus?: () => HTMLElement | null | undefined }) {
  const poker = usePokerNight();
  const titleId = useId();
  const seated = poker.status === "seated";
  // True once the pop-up has opened: a step that shows after that moves the focus to its heading.
  const opened = useRef(false);
  useEffect(() => { opened.current = true; }, []);
  return (
    <CommunityDialog kind="sheet" labelledBy={titleId} onClose={onClose} className="pk-pop" fallbackFocus={fallbackFocus}>
      <span className="pk-pop-deco" aria-hidden="true">
        <span className="pk-float" style={{ "--r": "-14deg" } as CSSProperties}><PlayingCard card={{ rank: 14, suit: "s" }} size="md" label={false} /></span>
        <span className="pk-float" style={{ "--r": "6deg", marginLeft: -18, marginTop: 10, animationDelay: ".7s" } as CSSProperties}><PlayingCard card={{ rank: 13, suit: "h" }} size="md" label={false} /></span>
        <span className="pk-float" style={{ "--r": "18deg", marginLeft: -16, marginTop: 22, animationDelay: "1.3s" } as CSSProperties}><CardBack size="md" /></span>
      </span>
      <span className="pk-twinkle" style={{ left: "46%", top: 30 }} aria-hidden="true" />
      <span className="pk-twinkle is-white" style={{ left: "62%", top: 96, animationDelay: "1.1s" }} aria-hidden="true" />
      <button type="button" className="pk-pop-close" aria-label="Close" onClick={onClose}><CloseIcon size={22} /></button>
      <div className="pk-from">
        <span className="pk-mark" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l2.5-6 4 12 2.5-6h5" /></svg></span>
        <span className="pk-from-words"><span className="pk-from-name">Rehyn</span><span className="pk-from-when">Every Friday · just now</span></span>
      </div>
      {seated ? <SeatedStep key="seated" titleId={titleId} name={name} onClose={onClose} moved={opened.current} /> : <PickStep key="pick" titleId={titleId} moved={opened.current} />}
    </CommunityDialog>
  );
}
