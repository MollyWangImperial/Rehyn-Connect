import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { canSee, friendList, useCommunity } from "@/lib/community-store";
import { cardWords, isRed, rankLabel, type Card, type Suit } from "@/lib/poker-hands";
import { CHIPS_ONLY, ME, POKER_PLAYERS, secondsToTables, tonightsTables, usePokerNight, type PokerGameId, type PokerPlayer } from "@/lib/poker-night";
import { ShieldIcon } from "../icons";
import { Face, MyFace } from "../parts";

// The pieces poker night is drawn with: cards and suits (the suit drawings are from the poker
// boards), faces for the people at the tables, the "Chips only" line, and tonight's seating for the
// person (by the game they picked, beside their friends, leaving out anybody they've blocked).
// Styles: community-poker.css (pk-).

const SUIT_PATHS: Record<Suit, ReactNode> = {
  s: <path d="M12 2.5C9.2 6.6 3.5 9.4 3.5 14a4.3 4.3 0 0 0 7.3 3.1L9.6 21.5h4.8l-1.2-4.4A4.3 4.3 0 0 0 20.5 14c0-4.6-5.7-7.4-8.5-11.5z" />,
  h: <path d="M12 20.5s-7.6-4.6-9.4-9.3C1.3 7.9 3.4 4.5 6.8 4.5c2.1 0 3.7 1.2 5.2 3.1 1.5-1.9 3.1-3.1 5.2-3.1 3.4 0 5.5 3.4 4.2 6.7-1.8 4.7-9.4 9.3-9.4 9.3z" />,
  d: <path d="M12 2.5l7.5 9.5-7.5 9.5L4.5 12z" />,
  c: <><circle cx="12" cy="7.2" r="4" /><circle cx="7" cy="13.2" r="4" /><circle cx="17" cy="13.2" r="4" /><path d="M10.7 12.5h2.6l1.3 9h-5.2z" /></>,
};

/** A suit, drawn: black spades and clubs, red hearts and diamonds (or `colour`). Decoration only. */
export const SuitGlyph = ({ suit, size = 16, colour, className }: { suit: Suit; size?: number; colour?: string; className?: string }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill={colour ?? (isRed(suit) ? "#C8553A" : "#1B2A24")} aria-hidden="true" focusable="false">{SUIT_PATHS[suit]}</svg>
);

/** The suit each game is shown with in lists, as on the boards. */
export const GAME_SUIT: Record<PokerGameId, Suit> = { holdem: "s", omaha: "h", stud: "d", draw: "c" };

/** Card sizes: tiny for the game rows, up to the large ones in your hand. */
export type CardSize = "xs" | "sm" | "md" | "board" | "hand";

/** One card, face up. It is a picture with its name, such as "Ace of spades". */
export function PlayingCard({ card, size = "md", tilt = 0, className = "", style, label = true }: { card: Card; size?: CardSize; tilt?: number; className?: string; style?: CSSProperties; label?: boolean }) {
  const words = cardWords(card);
  return (
    <span className={`pk-card pk-card-${size} ${isRed(card.suit) ? "is-red" : ""} ${className}`} style={{ ...style, ...(tilt ? { transform: `rotate(${tilt}deg)` } : {}) }}
      role={label ? "img" : undefined} aria-label={label ? words.charAt(0).toUpperCase() + words.slice(1) : undefined} aria-hidden={label ? undefined : true}>
      <span className="pk-card-rank">{rankLabel(card.rank)}</span>
      <SuitGlyph suit={card.suit} className="pk-card-pip" />
      <SuitGlyph suit={card.suit} className="pk-card-big" />
    </span>
  );
}

/** A card face down. */
export const CardBack = ({ size = "md", tilt = 0, className = "" }: { size?: CardSize; tilt?: number; className?: string }) => (
  <span className={`pk-card pk-card-${size} pk-back ${className}`} style={tilt ? { transform: `rotate(${tilt}deg)` } : undefined} aria-hidden="true" />
);

/** A little fan of cards for a game's row: "As Kh", with "back" for a hidden one. Decoration only. */
export function CardFan({ cards, size = "xs" }: { cards: (Card | "back")[]; size?: CardSize }) {
  const spread = cards.length > 3 ? 9 : 9 - cards.length;
  const middle = (cards.length - 1) / 2;
  return (
    <span className={`pk-fan pk-fan-${size}`} aria-hidden="true">
      {cards.map((card, i) => card === "back"
        ? <CardBack key={i} size={size} tilt={(i - middle) * spread} />
        : <PlayingCard key={i} card={card} size={size} tilt={(i - middle) * spread} label={false} />)}
    </span>
  );
}

const c = (rank: Card["rank"], suit: Suit): Card => ({ rank, suit });
/** The cards each game is pictured with, as on the boards. */
export const GAME_FANS: Record<PokerGameId, (Card | "back")[]> = {
  holdem: [c(14, "s"), c(13, "h")],
  omaha: [c(12, "d"), c(11, "c"), c(9, "h"), c(9, "s")],
  stud: [c(7, "c"), c(7, "d"), "back"],
  draw: [c(2, "h"), c(5, "h"), c(8, "s"), c(8, "c"), c(13, "d")],
};

export const playerById = (id: string): PokerPlayer | null => POKER_PLAYERS.find(player => player.id === id) ?? null;
/** Somebody's name at the table: "You" for the person. */
export const playerName = (id: string) => (id === ME ? "You" : playerById(id)?.name ?? "Someone");

/** Somebody at poker night: the person's own picture, an example person's face, or an initial. */
export function PokerFace({ id, size = 40, className = "", style }: { id: string; size?: number; className?: string; style?: CSSProperties }) {
  if (id === ME) return <MyFace size={size} className={className} style={style} />;
  const player = playerById(id);
  if (player?.face) return <Face who={player.face} size={size} className={className} style={style} />;
  return (
    <span className={`cm-face cm-face-initial pk-initial ${className}`} style={{ width: size, height: size, fontSize: Math.round(size * 0.42), backgroundColor: player?.tint ?? "#E6E2DA", ...style }} aria-hidden="true">
      {(player?.name ?? "?").slice(0, 1)}
    </span>
  );
}

/** Seconds until the tables open at 7 pm, ticking down once a second (0 once they're open). */
export function useSecondsToTables(running = true) {
  const [left, setLeft] = useState(() => secondsToTables(new Date()));
  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setLeft(secondsToTables(new Date())), 1000);
    return () => window.clearInterval(timer);
  }, [running]);
  return left;
}

/** "Chips only, just for fun. No real money, ever." Said wherever poker appears. */
export const ChipsOnly = ({ className = "" }: { className?: string }) => (
  <p className={`pk-chips-only ${className}`}><ShieldIcon size={16} /><span>{CHIPS_ONLY}</span></p>
);

/**
 * Tonight's tables as the person sees them: everybody seated by the game they picked, with the person
 * at their own table (once they have picked) beside their friends where possible. People they've
 * blocked or hidden are left out, as everywhere in My community.
 */
export function useTonightsTables() {
  const memory = useCommunity();
  const poker = usePokerNight();
  const seated = poker.status === "seated";
  const friends = friendList(memory).map(friend => friend.who as string).join(",");
  const visible = POKER_PLAYERS.filter(player => !player.face || canSee(memory, player.face)).map(player => player.id).join(",");
  return useMemo(() => {
    const players = POKER_PLAYERS.filter(player => visible.split(",").includes(player.id));
    const tables = tonightsTables(players, seated ? { game: poker.pick, friends: friends ? friends.split(",") : [] } : null);
    const mine = tables.find(table => table.players.includes(ME)) ?? null;
    const friendIds = friends ? friends.split(",") : [];
    return { players, tables, mine, matesWhoAreFriends: mine ? mine.players.filter(id => friendIds.includes(id)) : [] };
  }, [visible, friends, seated, poker.pick]);
}
