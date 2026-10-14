import { describe, expect, it } from "vitest";
import { bestHand, compareHands, describeHolding, evaluateFive, HAND_NAMES, newDeck, shuffle, type Card, type Rank, type Suit } from "./poker-hands";

/** "As Kh 10d" → cards. */
const cards = (text: string): Card[] => text.split(/\s+/).map(code => {
  const suit = code.slice(-1) as Suit;
  const face = code.slice(0, -1);
  const rank = ({ A: 14, K: 13, Q: 12, J: 11 } as Record<string, number>)[face] ?? Number(face);
  return { rank: rank as Rank, suit };
});

describe("evaluateFive", () => {
  it.each([
    ["As Ks Qs Js 10s", 9, "A royal flush"],
    ["9h 8h 7h 6h 5h", 8, "A straight flush, up to the nine"],
    ["Qd Qs Qh Qc 2s", 7, "Four queens"],
    ["Kd Ks Kh 7c 7s", 6, "Full house, kings over sevens"],
    ["2h 9h Jh 4h Kh", 5, "A flush in hearts"],
    ["10d 9s 8h 7c 6s", 4, "A straight, up to the ten"],
    ["Ad 2s 3h 4c 5s", 4, "A straight, ace to five"],
    ["7d 7s 7h Kc 2s", 3, "Three sevens"],
    ["Ad As Kh Kc 9s", 2, "Two pair, aces and kings"],
    ["Kd Ks 7h 2c 9s", 1, "A pair of kings"],
    ["Ad Js 8h 4c 2s", 0, "Ace high"],
  ])("%s is %s: %s", (hand, category, words) => {
    const value = evaluateFive(cards(hand));
    expect(value.category).toBe(category);
    expect(value.words).toBe(words);
    expect(HAND_NAMES[9 - value.category]).toBeTruthy();
  });

  it("ranks every category above the one below it", () => {
    const order = ["Ad Js 8h 4c 2s", "Kd Ks 7h 2c 9s", "Ad As Kh Kc 9s", "7d 7s 7h Kc 2s", "10d 9s 8h 7c 6s", "2h 9h Jh 4h Kh", "Kd Ks Kh 7c 7s", "Qd Qs Qh Qc 2s", "9h 8h 7h 6h 5h", "As Ks Qs Js 10s"].map(hand => evaluateFive(cards(hand)));
    for (let i = 1; i < order.length; i++) expect(compareHands(order[i], order[i - 1])).toBeGreaterThan(0);
  });

  it("settles ties on the kickers, and calls equal hands a split", () => {
    expect(compareHands(evaluateFive(cards("Kd Ks Ah 2c 9s")), evaluateFive(cards("Kh Kc Qh 2d 9c")))).toBeGreaterThan(0);
    expect(compareHands(evaluateFive(cards("Ad As Kh Kc 9s")), evaluateFive(cards("Ah Ac Kd Ks 9d")))).toBe(0);
    // An ace-to-five straight is the lowest straight.
    expect(compareHands(evaluateFive(cards("6d 2s 3h 4c 5s")), evaluateFive(cards("Ad 2s 3h 4c 5s")))).toBeGreaterThan(0);
  });
});

describe("bestHand", () => {
  it("finds the best five of seven, as in the Friday hand", () => {
    const best = bestHand(cards("As Kh Ks 7d 2c Ad 9h"));
    expect(best.words).toBe("Two pair, aces and kings");
    expect(best.cards).toHaveLength(5);
    expect(compareHands(best, bestHand(cards("Kc Qd Ks 7d 2c Ad 9h")))).toBeGreaterThan(0);
  });

  it("sees a flush that only six or seven cards make", () => {
    expect(bestHand(cards("2h 3h Kh 9h Jc Qh 4s")).category).toBe(5);
    expect(bestHand(cards("5h 6s 7d 8c 9h 10s")).words).toBe("A straight, up to the ten");
  });
});

describe("describeHolding", () => {
  it("says the two cards before the flop, and the best hand after", () => {
    expect(describeHolding(cards("As Kh"), []).words).toBe("Ace and king");
    expect(describeHolding(cards("Ks As"), []).words).toBe("Ace and king, same suit");
    expect(describeHolding(cards("8s 8h"), []).words).toBe("A pair of eights");
    expect(describeHolding(cards("As Kh"), cards("Ks 7d 2c")).words).toBe("A pair of kings");
  });
});

describe("shuffle", () => {
  it("keeps all 52 cards and leaves the deck given alone", () => {
    const deck = newDeck();
    const mixed = shuffle(deck);
    expect(mixed).toHaveLength(52);
    expect(new Set(mixed.map(card => `${card.rank}${card.suit}`)).size).toBe(52);
    expect(deck[0]).toEqual({ rank: 2, suit: "s" });
  });

  it("puts each card anywhere about as often (Fisher–Yates)", () => {
    const counts = [0, 0, 0];
    for (let i = 0; i < 3000; i++) counts[shuffle(["a", "b", "c"]).indexOf("a")] += 1;
    counts.forEach(count => expect(count).toBeGreaterThan(800));
  });
});
