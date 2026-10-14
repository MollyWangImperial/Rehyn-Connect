// Playing cards for Friday poker night: a deck, a fair shuffle, and a hand evaluator that ranks the
// best five cards out of five, six or seven (Texas Hold'em: two of yours and five on the table), with
// the hand said in plain words ("Two pair, aces and kings"). Pure functions, so they are tested.

export type Suit = "s" | "h" | "d" | "c";
/** 2 to 10, then jack 11, queen 12, king 13, ace 14. */
export type Rank = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
export type Card = { rank: Rank; suit: Suit };

export const SUITS: Suit[] = ["s", "h", "d", "c"];
export const RANKS: Rank[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
export const SUIT_NAMES: Record<Suit, string> = { s: "spades", h: "hearts", d: "diamonds", c: "clubs" };
export const isRed = (suit: Suit) => suit === "h" || suit === "d";

/** What the corner of a card says: A, K, Q, J, 10 … 2. */
export const rankLabel = (rank: Rank): string => (rank === 14 ? "A" : rank === 13 ? "K" : rank === 12 ? "Q" : rank === 11 ? "J" : String(rank));

const ONE: Record<Rank, string> = { 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "jack", 12: "queen", 13: "king", 14: "ace" };
const MANY: Record<Rank, string> = { 2: "twos", 3: "threes", 4: "fours", 5: "fives", 6: "sixes", 7: "sevens", 8: "eights", 9: "nines", 10: "tens", 11: "jacks", 12: "queens", 13: "kings", 14: "aces" };
const cap = (words: string) => words.charAt(0).toUpperCase() + words.slice(1);

/** A card in words, for reading aloud: "ace of spades". */
export const cardWords = (card: Card) => `${ONE[card.rank]} of ${SUIT_NAMES[card.suit]}`;

/** A fresh deck of 52, in order. */
export function newDeck(): Card[] {
  const deck: Card[] = [];
  SUITS.forEach(suit => RANKS.forEach(rank => deck.push({ rank, suit })));
  return deck;
}

/** A number from 0 to 1, from the device's own random source where it has one. */
export function fairRandom(): number {
  const crypto = typeof globalThis !== "undefined" ? globalThis.crypto : undefined;
  if (crypto?.getRandomValues) {
    const value = new Uint32Array(1);
    crypto.getRandomValues(value);
    return value[0] / 4294967296;
  }
  return Math.random();
}

/** A real shuffle (Fisher–Yates): every order is as likely as any other. Leaves the deck given alone. */
export function shuffle<T>(cards: readonly T[], random: () => number = fairRandom): T[] {
  const out = cards.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** The hands, best first, as "What beats what?" lists them. */
export const HAND_NAMES = ["Royal flush", "Straight flush", "Four of a kind", "Full house", "Flush", "Straight", "Three of a kind", "Two pair", "One pair", "High card"] as const;

/** 0 high card … 9 royal flush. HAND_NAMES[9 - category] names it. */
export type HandCategory = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type HandValue = {
  category: HandCategory;
  /** The ranks that settle a tie, most important first. */
  tiebreak: number[];
  /** One number to compare: bigger is better, equal is a split. */
  score: number;
  /** The five cards that make it. */
  cards: Card[];
  /** The hand in plain words: "Two pair, aces and kings". */
  words: string;
};

const scoreOf = (category: number, tiebreak: number[]) => tiebreak.slice(0, 5).reduce((sum, rank, i) => sum + rank * 15 ** (4 - i), category * 15 ** 5);

/** The top card of a straight in these five ranks (5 for ace to five), or 0. */
function straightHigh(ranks: number[]): number {
  const set = Array.from(new Set(ranks)).sort((a, b) => b - a);
  if (set.length !== 5) return 0;
  if (set[0] - set[4] === 4) return set[0];
  if (set[0] === 14 && set[1] === 5 && set[4] === 2) return 5;
  return 0;
}

function wordsFor(category: HandCategory, tiebreak: number[], cards: Card[]): string {
  const r = tiebreak as Rank[];
  switch (category) {
    case 9: return "A royal flush";
    case 8: return `A straight flush, up to the ${ONE[r[0]]}`;
    case 7: return `Four ${MANY[r[0]]}`;
    case 6: return `Full house, ${MANY[r[0]]} over ${MANY[r[1]]}`;
    case 5: return `A flush in ${SUIT_NAMES[cards[0].suit]}`;
    case 4: return r[0] === 5 ? "A straight, ace to five" : `A straight, up to the ${ONE[r[0]]}`;
    case 3: return `Three ${MANY[r[0]]}`;
    case 2: return `Two pair, ${MANY[r[0]]} and ${MANY[r[1]]}`;
    case 1: return `A pair of ${MANY[r[0]]}`;
    default: return `${cap(ONE[r[0]])} high`;
  }
}

/** Ranks exactly five cards. */
export function evaluateFive(cards: Card[]): HandValue {
  if (cards.length !== 5) throw new Error("evaluateFive needs five cards");
  const ranks = cards.map(card => card.rank as number);
  const counts = new Map<number, number>();
  ranks.forEach(rank => counts.set(rank, (counts.get(rank) ?? 0) + 1));
  // Groups, biggest first, then higher rank first: [[rank, count], …].
  const groups = Array.from(counts.entries()).sort((a, b) => b[1] - a[1] || b[0] - a[0]);
  const flush = cards.every(card => card.suit === cards[0].suit);
  const high = straightHigh(ranks);
  let category: HandCategory;
  let tiebreak: number[];
  if (flush && high) { category = high === 14 ? 9 : 8; tiebreak = [high]; }
  else if (groups[0][1] === 4) { category = 7; tiebreak = [groups[0][0], groups[1][0]]; }
  else if (groups[0][1] === 3 && groups[1][1] === 2) { category = 6; tiebreak = [groups[0][0], groups[1][0]]; }
  else if (flush) { category = 5; tiebreak = ranks.slice().sort((a, b) => b - a); }
  else if (high) { category = 4; tiebreak = [high]; }
  else if (groups[0][1] === 3) { category = 3; tiebreak = groups.map(group => group[0]); }
  else if (groups[0][1] === 2 && groups[1][1] === 2) { category = 2; tiebreak = groups.map(group => group[0]); }
  else if (groups[0][1] === 2) { category = 1; tiebreak = groups.map(group => group[0]); }
  else { category = 0; tiebreak = ranks.slice().sort((a, b) => b - a); }
  return { category, tiebreak, score: scoreOf(category, tiebreak), cards, words: wordsFor(category, tiebreak, cards) };
}

/** The best five-card hand out of five, six or seven cards. */
export function bestHand(cards: Card[]): HandValue {
  if (cards.length < 5 || cards.length > 7) throw new Error("bestHand needs five to seven cards");
  let best: HandValue | null = null;
  const n = cards.length;
  for (let a = 0; a < n; a++) for (let b = a + 1; b < n; b++) for (let c = b + 1; c < n; c++) for (let d = c + 1; d < n; d++) for (let e = d + 1; e < n; e++) {
    const value = evaluateFive([cards[a], cards[b], cards[c], cards[d], cards[e]]);
    if (!best || value.score > best.score) best = value;
  }
  return best as HandValue;
}

/** Above zero if a beats b, below zero if b beats a, zero for a split. */
export const compareHands = (a: HandValue, b: HandValue) => a.score - b.score;

/**
 * What you hold, in plain words, with whatever is on the table: before the flop just your two cards
 * ("Ace and king, same suit", "A pair of eights"), and after it your best hand so far.
 */
export function describeHolding(hole: Card[], board: Card[]): { words: string; category: HandCategory } {
  if (board.length >= 3) {
    const best = bestHand([...hole, ...board]);
    return { words: best.words, category: best.category };
  }
  if (hole.length < 2) return { words: "Waiting for your cards", category: 0 };
  const [a, b] = hole[0].rank >= hole[1].rank ? hole : [hole[1], hole[0]];
  if (a.rank === b.rank) return { words: `A pair of ${MANY[a.rank]}`, category: 1 };
  return { words: `${cap(ONE[a.rank])} and ${ONE[b.rank]}${a.suit === b.suit ? ", same suit" : ""}`, category: 0 };
}

/**
 * How good two starting cards are, from 0 to 1: pairs, high cards, the same suit and cards next to
 * each other all help. Used for the gentle advice line and by the computer players.
 */
export function startingStrength(hole: Card[]): number {
  if (hole.length < 2) return 0;
  const hi = Math.max(hole[0].rank, hole[1].rank);
  const lo = Math.min(hole[0].rank, hole[1].rank);
  let points = (hi + lo - 4) / 24 * 0.55;
  if (hi === lo) points += 0.35 + lo / 14 * 0.1;
  if (hole[0].suit === hole[1].suit) points += 0.06;
  if (hi - lo === 1) points += 0.05;
  if (hi >= 13) points += 0.06;
  return Math.max(0, Math.min(1, points));
}
