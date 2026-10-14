import { describe, expect, it } from "vitest";
import {
  battleOf, battleshipsProgress, computerPick, fire, fits, newBattleships, phaseOf, randomFleet, readBattleshipsSave, shipSquares, shotsBy, squareName, startBattle, sunkShips, validFleet, withShot,
  type Battle, type BattleshipsSave, type Fleet, type Side,
} from "./battleships-rules";

// The Battleships rules and the computer player, ported from the prototype's own tests: fleets are
// always legal, shots hit, miss and sink as they should, and the computer finishes every game
// without firing at the same square twice.

/** A small seeded random source, so a failing game can be played again. */
function seeded(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6D2B79F5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Their fleet in rows A to E, each ship starting in column 1: easy to aim at in a test.
const ROWS: Fleet = [
  { id: "carrier", d: "h", r: 0, c: 0 },
  { id: "battleship", d: "h", r: 1, c: 0 },
  { id: "cruiser", d: "h", r: 2, c: 0 },
  { id: "submarine", d: "h", r: 3, c: 0 },
  { id: "destroyer", d: "h", r: 4, c: 0 },
];
const MINE: Fleet = [
  { id: "carrier", d: "v", r: 0, c: 9 },
  { id: "battleship", d: "v", r: 5, c: 9 },
  { id: "cruiser", d: "v", r: 0, c: 7 },
  { id: "submarine", d: "v", r: 4, c: 7 },
  { id: "destroyer", d: "v", r: 8, c: 7 },
];
const battle = (extra = true, first: Side = "you") => startBattle({ you: MINE, them: ROWS }, first, extra);
const shoot = (from: Battle, side: Side, ...squares: number[]) => squares.reduce((at, square) => {
  const next = fire(at, side, square);
  if (!next) throw new Error(`${squareName(square)} can't be fired at`);
  return next.battle;
}, from);

describe("fleets", () => {
  it("are always legal when placed at random", () => {
    const random = seeded(1);
    for (let i = 0; i < 500; i++) expect(validFleet(randomFleet(random))).toBe(true);
  });

  it("can't hang off the edge or overlap, but ships may touch", () => {
    expect(fits([], { id: "carrier", d: "h", r: 0, c: 6 })).toBe(false);
    expect(fits([], { id: "carrier", d: "h", r: 0, c: 5 })).toBe(true);
    expect(fits([], { id: "destroyer", d: "v", r: 9, c: 0 })).toBe(false);
    expect(fits([], { id: "destroyer", d: "h", r: -1, c: 0 })).toBe(false);
    const one: Fleet = [{ id: "carrier", d: "h", r: 0, c: 0 }];
    expect(fits(one, { id: "destroyer", d: "v", r: 0, c: 2 })).toBe(false);
    // Side by side, and end to end, is fine.
    expect(fits(one, { id: "destroyer", d: "h", r: 1, c: 0 })).toBe(true);
    expect(fits(one, { id: "destroyer", d: "h", r: 0, c: 5 })).toBe(true);
  });

  it("needs each of the five ships exactly once", () => {
    expect(validFleet(ROWS)).toBe(true);
    expect(validFleet(ROWS.slice(1))).toBe(false);
    expect(validFleet([...ROWS.slice(0, 4), { ...ROWS[3], r: 6 }])).toBe(false);
    expect(validFleet(ROWS.map(ship => (ship.id === "cruiser" ? { ...ship, r: 1 } : ship)))).toBe(false);
  });

  it("names squares from A1 to J10", () => {
    expect(squareName(0)).toBe("A1");
    expect(squareName(9)).toBe("A10");
    expect(squareName(42)).toBe("E3");
    expect(squareName(99)).toBe("J10");
    expect(shipSquares({ id: "cruiser", d: "v", r: 2, c: 4 })).toEqual([24, 34, 44]);
  });
});

describe("shots", () => {
  it("hit, miss and sink, and the extra shot after a hit is on by default", () => {
    expect(newBattleships(null, seeded(2)).extra).toBe(true);
    const start = battle();
    const hit = fire(start, "you", 40)!;
    expect(hit.shot).toEqual({ by: "you", at: 40, hit: true, sunk: null });
    // A hit: the same player fires again.
    expect(hit.battle.turn).toBe("you");
    const sunk = fire(hit.battle, "you", 41)!;
    expect(sunk.shot).toEqual({ by: "you", at: 41, hit: true, sunk: "destroyer" });
    expect(sunkShips(sunk.battle, "them")).toEqual(["destroyer"]);
    // A miss: the turn passes.
    const miss = fire(sunk.battle, "you", 99)!;
    expect(miss.shot.hit).toBe(false);
    expect(miss.battle.turn).toBe("them");
  });

  it("passes the turn after every shot when the extra shot is off", () => {
    const after = fire(battle(false), "you", 40)!;
    expect(after.shot.hit).toBe(true);
    expect(after.battle.turn).toBe("them");
  });

  it("won't fire out of turn, twice at a square, off the board, or after the game", () => {
    const start = battle();
    expect(fire(start, "them", 0)).toBeNull();
    expect(fire(start, "you", 100)).toBeNull();
    expect(fire(start, "you", 2.5)).toBeNull();
    const once = shoot(start, "you", 99);
    expect(fire(shoot(once, "them", 0), "you", 99)).toBeNull();
  });

  it("wins when every ship is sunk", () => {
    const squares = ROWS.flatMap(shipSquares);
    const end = shoot(battle(), "you", ...squares);
    expect(end.result).toEqual({ winner: "you", reason: "sunk" });
    expect(sunkShips(end, "them")).toHaveLength(5);
    expect(fire(end, "you", 99)).toBeNull();
  });
});

describe("the computer player", () => {
  for (const level of ["relaxed", "sharp"] as const) {
    it(`(${level}) always fires at a new square and finishes the game`, () => {
      const random = seeded(level === "relaxed" ? 3 : 4);
      for (let game = 0; game < 60; game++) {
        let at = startBattle({ you: randomFleet(random), them: randomFleet(random) }, "them", true);
        let shots = 0;
        while (!at.result) {
          const square = computerPick(at, level, "them", random);
          expect(shotsBy(at, "them")).not.toContain(square);
          const next = fire(at, "them", square);
          expect(next).not.toBeNull();
          // The computer keeps firing, as in the prototype's test, until the fleet is sunk.
          at = { ...next!.battle, turn: next!.battle.result ? next!.battle.turn : "them" };
          shots++;
          expect(shots).toBeLessThanOrEqual(100);
        }
        expect(at.result).toEqual({ winner: "them", reason: "sunk" });
      }
    });
  }

  it("follows up a hit on the Relaxed level", () => {
    const hit = shoot(battle(true, "them"), "them", 9);
    const next = computerPick(hit, "relaxed", "them", seeded(5));
    expect([8, 19]).toContain(next);
  });
});

describe("keeping a game", () => {
  const ready = (save: BattleshipsSave): BattleshipsSave => ({ ...save, fleet: MINE, theirs: ROWS, ready: true });

  it("plays out again from the shots kept", () => {
    let save = ready(newBattleships(null, seeded(6)));
    save = withShot(save, "you", 40)!;
    save = withShot(save, "you", 41)!;
    save = withShot(save, "you", 99)!;
    expect(withShot(save, "you", 98)).toBeNull();
    save = withShot(save, "them", 9)!;
    const battle = battleOf(save);
    expect(battle.shots.map(shot => [shot.at, shot.hit, shot.sunk])).toEqual([[40, true, null], [41, true, "destroyer"], [99, false, null], [9, true, null]]);
    expect(battle.turn).toBe("them");
    expect(phaseOf(save)).toBe("battle");
    expect(readBattleshipsSave(JSON.parse(JSON.stringify(save)))).toEqual(save);
  });

  it("keeps the shots only up to the first one that couldn't have been fired", () => {
    const save = ready(newBattleships(null, seeded(7)));
    const kept = readBattleshipsSave({ ...save, shots: [{ by: "you", at: 99 }, { by: "them", at: 0 }, { by: "them", at: 0 }, { by: "you", at: 5 }] });
    expect(kept?.shots).toEqual([{ by: "you", at: 99 }, { by: "them", at: 0 }]);
    // No shots before the battle has begun.
    expect(readBattleshipsSave({ ...save, ready: false, shots: [{ by: "you", at: 99 }] })?.shots).toEqual([]);
  });

  it("drops a game whose fleets aren't whole and legal", () => {
    const save = ready(newBattleships(null, seeded(8)));
    expect(readBattleshipsSave({ ...save, theirs: ROWS.slice(1) })).toBeNull();
    expect(readBattleshipsSave({ ...save, fleet: ROWS.map(ship => ({ ...ship, c: 7 })) })).toBeNull();
    expect(readBattleshipsSave({ ...save, fleet: [...ROWS.slice(0, 4), { id: "destroyer", d: "x", r: 9, c: 0 }] })).toBeNull();
    expect(readBattleshipsSave("battleships")).toBeNull();
  });

  it("ends with the other player winning when someone gives up", () => {
    const save = { ...ready(newBattleships(null, seeded(9))), gaveUp: "you" as const };
    expect(battleOf(save).result).toEqual({ winner: "them", reason: "gave-up" });
    expect(phaseOf(save)).toBe("over");
    expect(battleshipsProgress(save, "Margaret").text).toBe("Margaret won");
  });

  it("starts again with the same ships, and the other player first", () => {
    const first = ready(newBattleships(null, seeded(10)));
    const again = newBattleships(first, seeded(11));
    expect(again).toMatchObject({ fleet: MINE, ready: false, first: "them", shots: [], gaveUp: null, extra: true });
    expect(validFleet(again.theirs)).toBe(true);
    expect(battleshipsProgress(again, "Margaret")).toEqual({ text: "Place your ships", yours: true });
  });
});
