import { bestHand, fairRandom, newDeck, shuffle, startingStrength, type Card, type HandValue } from "./poker-hands";

// One hand of Texas Hold'em at a poker night table, as pure functions: deal from a shuffled deck,
// post the blinds, take turns (fold, check, call or raise), deal the flop, turn and river, and
// settle the pot at the showdown. The computer players use `botMove`. Chips only: no real money.
// Kept simple on purpose: nobody can bet more than the shortest stack still in the hand can match,
// so there are never side pots. There is no clock on anybody's turn.

export const SMALL_BLIND = 5;
export const BIG_BLIND = 10;
/** Everybody sits down with this many chips. */
export const STARTING_CHIPS = 1000;

export type Street = "pre" | "flop" | "turn" | "river" | "show";
export type Player = { id: string; name: string; chips: number; human?: boolean };
export type Seat = {
  id: string;
  name: string;
  human: boolean;
  chips: number;
  cards: Card[];
  folded: boolean;
  /** Sitting this hand out: no chips left. */
  out: boolean;
  allIn: boolean;
  /** Put in on this round of betting. */
  bet: number;
  acted: boolean;
  /** What they did last, for the label by their seat: "Call 10", "Check", "Fold". */
  said: string | null;
};
export type Result = {
  winners: number[];
  /** What each winner takes. */
  share: number;
  /** The winning hand, or null when everybody else folded (the cards stay hidden). */
  value: HandValue | null;
};
export type Holdem = {
  hand: number;
  seats: Seat[];
  deck: Card[];
  board: Card[];
  pot: number;
  street: Street;
  dealer: number;
  /** Whose turn it is, or -1 when nobody needs to act (deal the next card, or the hand is over). */
  toAct: number;
  /** The most anybody has put in on this round. */
  currentBet: number;
  result: Result | null;
};
export type Move = { kind: "fold" } | { kind: "check" } | { kind: "call" } | { kind: "raise"; by: number };

const inHand = (seat: Seat) => !seat.out && !seat.folded;
const canAct = (seat: Seat) => inHand(seat) && !seat.allIn;

/** The next seat after `from`, going round the table, that passes `test` (or -1). */
function nextSeat(seats: Seat[], from: number, test: (seat: Seat) => boolean): number {
  for (let step = 1; step <= seats.length; step++) {
    const at = (from + step) % seats.length;
    if (test(seats[at])) return at;
  }
  return -1;
}

function pay(state: Holdem, at: number, amount: number) {
  const seat = state.seats[at];
  const paid = Math.max(0, Math.min(amount, seat.chips));
  seat.chips -= paid;
  seat.bet += paid;
  state.pot += paid;
  if (seat.chips === 0) seat.allIn = true;
  return paid;
}

const copy = (state: Holdem): Holdem => ({ ...state, seats: state.seats.map(seat => ({ ...seat, cards: seat.cards.slice() })), deck: state.deck.slice(), board: state.board.slice() });

/**
 * Deals a new hand. `dealer` is the seat that had the dealer button last hand: it moves one seat on
 * to somebody with chips. Anybody without chips sits the hand out.
 */
export function startHand(players: Player[], lastDealer: number, hand: number, random: () => number = fairRandom): Holdem {
  const seats: Seat[] = players.map(player => ({ id: player.id, name: player.name, human: !!player.human, chips: player.chips, cards: [], folded: false, out: player.chips <= 0, allIn: false, bet: 0, acted: false, said: null }));
  if (seats.filter(seat => !seat.out).length < 2) throw new Error("A hand needs two players with chips");
  const dealer = nextSeat(seats, lastDealer, seat => !seat.out);
  const state: Holdem = { hand, seats, deck: shuffle(newDeck(), random), board: [], pot: 0, street: "pre", dealer, toAct: -1, currentBet: 0, result: null };
  // Two cards each, one at a time, starting left of the dealer.
  for (let round = 0; round < 2; round++) {
    let at = dealer;
    for (let n = 0; n < seats.length; n++) {
      at = nextSeat(seats, at, seat => !seat.out);
      if (seats[at].cards.length === round) seats[at].cards.push(state.deck.pop() as Card);
    }
  }
  const small = nextSeat(seats, dealer, seat => !seat.out);
  const big = nextSeat(seats, small, seat => !seat.out);
  seats[small].said = `Small blind ${pay(state, small, SMALL_BLIND)}`;
  seats[big].said = `Big blind ${pay(state, big, BIG_BLIND)}`;
  state.currentBet = Math.max(seats[small].bet, seats[big].bet);
  state.toAct = nextSeat(seats, big, canAct);
  if (seats.filter(canAct).length < 2 && seats.every(seat => !canAct(seat) || seat.bet >= state.currentBet)) state.toAct = -1;
  return state;
}

/** What the player whose turn it is may do. */
export function options(state: Holdem) {
  const seat = state.seats[state.toAct];
  if (!seat) return { toCall: 0, canCheck: false, canRaise: false, maxRaise: 0 };
  const toCall = Math.min(state.currentBet - seat.bet, seat.chips);
  // Nobody bets more than the shortest stack still in can match, so there are never side pots.
  const cap = Math.min(...state.seats.filter(inHand).map(other => other.chips + other.bet));
  const maxRaise = Math.max(0, cap - state.currentBet);
  const others = state.seats.some((other, at) => at !== state.toAct && canAct(other));
  return { toCall, canCheck: toCall === 0, canRaise: maxRaise > 0 && others, maxRaise };
}

/** Everybody else folded: the last one in takes the pot without showing. */
function winByFolds(state: Holdem): Holdem {
  const at = state.seats.findIndex(inHand);
  state.seats[at].chips += state.pot;
  state.result = { winners: [at], share: state.pot, value: null };
  state.street = "show";
  state.toAct = -1;
  return state;
}

/** The player whose turn it is makes a move. */
export function act(before: Holdem, move: Move): Holdem {
  if (before.toAct < 0 || before.result) return before;
  const state = copy(before);
  const at = state.toAct;
  const seat = state.seats[at];
  const { toCall, canRaise, maxRaise } = options(state);
  if (move.kind === "fold") {
    seat.folded = true;
    seat.said = "Fold";
  } else if (move.kind === "raise" && canRaise) {
    const by = Math.max(1, Math.min(Math.round(move.by), maxRaise));
    pay(state, at, toCall + by);
    state.currentBet = seat.bet;
    seat.said = `Raise ${by}`;
    // Everybody else has to answer the raise.
    state.seats.forEach((other, i) => { if (i !== at && canAct(other)) other.acted = false; });
  } else if (toCall > 0) {
    seat.said = `Call ${pay(state, at, toCall)}`;
  } else {
    seat.said = "Check";
  }
  seat.acted = true;
  if (state.seats.filter(inHand).length === 1) return winByFolds(state);
  state.toAct = nextSeat(state.seats, at, other => canAct(other) && (!other.acted || other.bet < state.currentBet));
  return state;
}

/** The betting round is over: deal the next card (or cards), or settle the pot after the river. */
export function nextStreet(before: Holdem): Holdem {
  if (before.toAct >= 0 || before.result) return before;
  const state = copy(before);
  if (state.street === "river") return showdown(state);
  state.deck.pop(); // a card is burnt before each deal, as at a real table
  const deal = state.street === "pre" ? 3 : 1;
  for (let i = 0; i < deal; i++) state.board.push(state.deck.pop() as Card);
  state.street = state.street === "pre" ? "flop" : state.street === "flop" ? "turn" : "river";
  state.currentBet = 0;
  state.seats.forEach(seat => { seat.bet = 0; seat.acted = false; if (!seat.folded) seat.said = null; });
  state.toAct = state.seats.filter(canAct).length >= 2 ? nextSeat(state.seats, state.dealer, canAct) : -1;
  return state;
}

/** Cards on the table: the best hand takes the pot, and a tie splits it. */
function showdown(state: Holdem): Holdem {
  const values = state.seats.map(seat => (inHand(seat) ? bestHand([...seat.cards, ...state.board]) : null));
  const top = Math.max(...values.map(value => value?.score ?? -1));
  const winners = values.map((value, at) => (value && value.score === top ? at : -1)).filter(at => at >= 0);
  const share = Math.floor(state.pot / winners.length);
  winners.forEach(at => { state.seats[at].chips += share; });
  // An odd chip left over from a split goes to the first winner after the dealer.
  const odd = state.pot - share * winners.length;
  if (odd > 0) state.seats[nextSeat(state.seats, state.dealer, seat => winners.includes(state.seats.indexOf(seat)))].chips += odd;
  state.result = { winners, share, value: values[winners[0]] };
  state.street = "show";
  state.toAct = -1;
  return state;
}

/** How good a seat's cards are now, from 0 to 1: their two cards before the flop, their best hand after. */
export function strengthOf(seat: Seat, board: Card[]): number {
  if (board.length < 3) return startingStrength(seat.cards);
  const best = bestHand([...seat.cards, ...board]);
  const byCategory = [0.15, 0.45, 0.7, 0.8, 0.88, 0.9, 0.95, 0.98, 1, 1];
  let strength = byCategory[best.category];
  // A pair that is all on the table belongs to everybody.
  if (best.category === 1 && !seat.cards.some(card => card.rank === best.tiebreak[0])) strength = 0.22;
  if (best.category === 1) strength += (best.tiebreak[0] - 2) / 12 * 0.15;
  return Math.min(1, strength);
}

/** A simple computer player: plays its strong hands, calls when the price is fair, and folds the rest. */
export function botMove(state: Holdem, random: () => number = fairRandom): Move {
  const seat = state.seats[state.toAct];
  const { toCall, canRaise } = options(state);
  const strength = strengthOf(seat, state.board) + (random() - 0.5) * 0.2;
  if (toCall === 0) {
    if (canRaise && strength > 0.7 && random() < 0.6) return { kind: "raise", by: BIG_BLIND * (strength > 0.9 ? 4 : 2) };
    return { kind: "check" };
  }
  const price = toCall / (state.pot + toCall);
  if (strength < Math.max(0.2, price + 0.05)) return { kind: "fold" };
  if (canRaise && strength > 0.8 && random() < 0.5) return { kind: "raise", by: BIG_BLIND * 2 };
  return { kind: "call" };
}

/** The players after a hand, with their chips now, for the next one. */
export const playersAfter = (state: Holdem): Player[] => state.seats.map(seat => ({ id: seat.id, name: seat.name, chips: seat.chips, human: seat.human }));
