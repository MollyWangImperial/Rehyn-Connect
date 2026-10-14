// Battleships in a private group: the rules and the computer player, ported from the Rehyn
// Battleships prototype. Pure functions, with no page in sight, so they can be tested and kept.
// A square is a number from 0 to 99 (row × 10 + column): A1 is 0, A10 is 9 and J10 is 99.

export const SIZE = 10;
const ROWS = "ABCDEFGHIJ";

export type ShipId = "carrier" | "battleship" | "cruiser" | "submarine" | "destroyer";
export type ShipKind = { id: ShipId; name: string; length: number };
/** The fleet, longest ship first. */
export const SHIPS: ShipKind[] = [
  { id: "carrier", name: "Carrier", length: 5 },
  { id: "battleship", name: "Battleship", length: 4 },
  { id: "cruiser", name: "Cruiser", length: 3 },
  { id: "submarine", name: "Submarine", length: 3 },
  { id: "destroyer", name: "Destroyer", length: 2 },
];
export const SHIP_IDS: ShipId[] = SHIPS.map(ship => ship.id);
export const shipKind = (id: ShipId): ShipKind => SHIPS.find(ship => ship.id === id) ?? SHIPS[0];

/** A ship on the board: which one, across ("h") or down ("v"), and the row and column of its top or left end. */
export type Ship = { id: ShipId; d: "h" | "v"; r: number; c: number };
export type Fleet = Ship[];
/** The person ("you") and the member they invited ("them"). */
export type Side = "you" | "them";
export const other = (side: Side): Side => (side === "you" ? "them" : "you");

/** "A1" to "J10": the row's letter, then the column's number. */
export const squareName = (square: number) => `${ROWS[Math.floor(square / SIZE)]}${(square % SIZE) + 1}`;
export const isSquare = (value: unknown): value is number => typeof value === "number" && Number.isInteger(value) && value >= 0 && value < SIZE * SIZE;

/** The squares a ship covers, from its top or left end. */
export function shipSquares(ship: Ship): number[] {
  const out: number[] = [];
  for (let i = 0; i < shipKind(ship.id).length; i++) out.push(ship.d === "h" ? ship.r * SIZE + ship.c + i : (ship.r + i) * SIZE + ship.c);
  return out;
}

/** Whether a ship is wholly on the board. */
export function inBounds(ship: Ship): boolean {
  const length = shipKind(ship.id).length;
  return ship.r >= 0 && ship.c >= 0 && (ship.d === "h" ? ship.c + length <= SIZE && ship.r < SIZE : ship.r + length <= SIZE && ship.c < SIZE);
}

/** Whether a ship would lie on top of another in the fleet. Ships may touch. */
export function overlaps(fleet: Fleet, ship: Ship): boolean {
  const mine = new Set(shipSquares(ship));
  return fleet.some(item => item.id !== ship.id && shipSquares(item).some(square => mine.has(square)));
}

/** A ship can go there: on the board, and not on top of another ship. */
export const fits = (fleet: Fleet, ship: Ship): boolean => inBounds(ship) && !overlaps(fleet, ship);

/** A whole fleet: each of the five ships once, all on the board, none on top of another. */
export function validFleet(fleet: Fleet): boolean {
  return fleet.length === SHIPS.length && SHIPS.every(kind => fleet.filter(ship => ship.id === kind.id).length === 1) && fleet.every(ship => fits(fleet, ship));
}

/** Used only if a fleet can't be placed at random (a broken random source). */
const SPARE_FLEET: Fleet = SHIPS.map((kind, row) => ({ id: kind.id, d: "h", r: row * 2, c: 0 }));

/** Five ships in random places, each one where it fits. */
export function randomFleet(random: () => number = Math.random): Fleet {
  for (let attempt = 0; attempt < 500; attempt++) {
    const fleet: Fleet = [];
    for (const kind of SHIPS) {
      for (let tries = 0; tries < 200; tries++) {
        const d = random() < 0.5 ? "h" : "v";
        const ship: Ship = { id: kind.id, d, r: Math.floor(random() * (d === "v" ? SIZE - kind.length + 1 : SIZE)), c: Math.floor(random() * (d === "h" ? SIZE - kind.length + 1 : SIZE)) };
        if (fits(fleet, ship)) { fleet.push(ship); break; }
      }
      if (fleet.length === 0 || fleet[fleet.length - 1].id !== kind.id) break;
    }
    if (fleet.length === SHIPS.length) return fleet;
  }
  return SPARE_FLEET.map(ship => ({ ...ship }));
}

export const shipAt = (fleet: Fleet, square: number): Ship | null => fleet.find(ship => shipSquares(ship).includes(square)) ?? null;
export const isSunk = (ship: Ship, shots: ReadonlySet<number>) => shipSquares(ship).every(square => shots.has(square));
export const allSunk = (fleet: Fleet, shots: ReadonlySet<number>) => fleet.every(ship => isSunk(ship, shots));

/* ----------------------------------------------------------------- the battle */

/** One shot: who fired, at which square, whether it hit, and the ship it sank, if it did. */
export type Shot = { by: Side; at: number; hit: boolean; sunk: ShipId | null };
export type Battle = {
  /** Each player's own ships. */
  fleets: Record<Side, Fleet>;
  shots: Shot[];
  /** Whose turn it is to fire. */
  turn: Side;
  /** Extra shot after a hit: whoever hits fires again, until they miss. */
  extra: boolean;
  result: { winner: Side; reason: "sunk" | "gave-up" } | null;
};

export const startBattle = (fleets: Record<Side, Fleet>, first: Side = "you", extra = true): Battle => ({ fleets, shots: [], turn: first, extra, result: null });

/** The squares one side has fired at, oldest first. */
export const shotsBy = (battle: Battle, side: Side): number[] => battle.shots.filter(shot => shot.by === side).map(shot => shot.at);

/** Whether a side may fire at a square now: the game is on, it is their turn, and they haven't fired there yet. */
export const canFire = (battle: Battle, side: Side, square: number): boolean =>
  !battle.result && battle.turn === side && isSquare(square) && !shotsBy(battle, side).includes(square);

/**
 * A shot. It hits when one of the other side's ships is on the square, sinks that ship once all its
 * squares are hit, and wins once every ship is sunk. After a hit, with the extra shot on, the same
 * side fires again; otherwise the turn passes. Null for a shot that isn't allowed.
 */
export function fire(battle: Battle, side: Side, square: number): { battle: Battle; shot: Shot; win: boolean } | null {
  if (!canFire(battle, side, square)) return null;
  const fleet = battle.fleets[other(side)];
  const ship = shipAt(fleet, square);
  const fired = new Set([...shotsBy(battle, side), square]);
  const win = !!ship && allSunk(fleet, fired);
  const shot: Shot = { by: side, at: square, hit: !!ship, sunk: ship && isSunk(ship, fired) ? ship.id : null };
  const turn = win || (ship && battle.extra) ? side : other(side);
  return { battle: { ...battle, shots: [...battle.shots, shot], turn, result: win ? { winner: side, reason: "sunk" } : null }, shot, win };
}

/** Giving up: the other side wins. A game that is already over stays as it ended. */
export const giveUp = (battle: Battle, side: Side): Battle => (battle.result ? battle : { ...battle, result: { winner: other(side), reason: "gave-up" } });

/** Which of a fleet's ships have been sunk by the other side's shots, longest first. */
export function sunkShips(battle: Battle, side: Side): ShipId[] {
  const fired = new Set(shotsBy(battle, other(side)));
  return battle.fleets[side].filter(ship => isSunk(ship, fired)).map(ship => ship.id);
}

/* --------------------------------------------------------- the computer player */

/** Relaxed fires at random and follows up its hits. Sharp works out where the ships still afloat could be. */
export type ComputerLevel = "relaxed" | "sharp";

/**
 * Where the computer fires next, as `side` (the other player, unless told otherwise). It knows only
 * what a player is told: which of its shots hit, and which ships are sunk. It never fires at the
 * same square twice; -1 means there is nowhere left.
 */
export function computerPick(battle: Battle, level: ComputerLevel = "relaxed", side: Side = "them", random: () => number = Math.random): number {
  const fleet = battle.fleets[other(side)];
  const shots = shotsBy(battle, side);
  const fired = new Set(shots);
  const sunkSquares = new Set(fleet.filter(ship => isSunk(ship, fired)).flatMap(shipSquares));
  // Hits on ships that are still afloat: there is more of them to find.
  const openHits = shots.filter(square => shipAt(fleet, square) && !sunkSquares.has(square));
  const blocked = new Set(shots.filter(square => !openHits.includes(square)));
  const unshot: number[] = [];
  for (let square = 0; square < SIZE * SIZE; square++) if (!fired.has(square)) unshot.push(square);
  if (!unshot.length) return -1;
  const pick = (list: number[]) => list[Math.min(list.length - 1, Math.floor(random() * list.length))];
  const neighbours = (square: number) => {
    const r = Math.floor(square / SIZE), c = square % SIZE, out: number[] = [];
    if (r > 0) out.push(square - SIZE);
    if (r < SIZE - 1) out.push(square + SIZE);
    if (c > 0) out.push(square - 1);
    if (c < SIZE - 1) out.push(square + 1);
    return out;
  };

  if (level === "relaxed") {
    if (openHits.length) {
      const next = Array.from(new Set(openHits.flatMap(neighbours))).filter(square => !fired.has(square));
      if (next.length) return pick(next);
    }
    return pick(unshot);
  }

  // Sharp: count the ways each ship still afloat could lie, without crossing a miss or a sunk ship.
  // Around a hit, only the ways through that hit count, and the more hits they cross the better.
  const remaining = fleet.filter(ship => !isSunk(ship, fired)).map(ship => shipKind(ship.id).length);
  const score = new Array<number>(SIZE * SIZE).fill(0);
  const hitSet = new Set(openHits);
  for (const length of remaining) {
    for (let r = 0; r < SIZE; r++) for (let c = 0; c < SIZE; c++) for (const d of ["h", "v"] as const) {
      if (d === "h" ? c + length > SIZE : r + length > SIZE) continue;
      const squares: number[] = [];
      let crossed = 0;
      let bad = false;
      for (let i = 0; i < length; i++) {
        const square = d === "h" ? r * SIZE + c + i : (r + i) * SIZE + c;
        if (blocked.has(square)) { bad = true; break; }
        if (hitSet.has(square)) crossed++;
        squares.push(square);
      }
      if (bad || (openHits.length && crossed === 0)) continue;
      const weight = openHits.length ? 1 + crossed * 25 : 1;
      for (const square of squares) if (!fired.has(square)) score[square] += weight;
    }
  }
  let best = -1;
  let options: number[] = [];
  for (const square of unshot) {
    if (score[square] > best) { best = score[square]; options = [square]; }
    else if (score[square] === best) options.push(square);
  }
  if (best <= 0) return pick(unshot);
  // While hunting, every other square is enough: the smallest ship is two long.
  if (!openHits.length) {
    const parity = options.filter(square => (Math.floor(square / SIZE) + (square % SIZE)) % 2 === 0);
    if (parity.length) options = parity;
  }
  return pick(options);
}

/* ------------------------------------------------------------ keeping a game */

/** A Battleships game as it is kept on this device. Everything else is worked out from it again. */
export type BattleshipsSave = {
  /** The person's ships: where they are, or where they are so far while they are being placed. */
  fleet: Fleet;
  /** The other player's ships. In this preview the computer places them. */
  theirs: Fleet;
  /** Set once the person has placed their ships and pressed Ready. */
  ready: boolean;
  /** Extra shot after a hit: on, unless it was switched off before the battle. */
  extra: boolean;
  /** Who fires first. */
  first: Side;
  /** Every shot, oldest first. Whether each one hit is worked out again from the fleets. */
  shots: { by: Side; at: number }[];
  /** Who gave up, if someone did. */
  gaveUp: Side | null;
};
/** Each side can fire at most once at each square. */
export const MOST_SHOTS = SIZE * SIZE * 2;

/**
 * A new game, with fresh ships for the other player. "Play again" keeps the person's ships where
 * they were and their choice of extra shot, and the other player fires first this time.
 */
export function newBattleships(previous: BattleshipsSave | null = null, random: () => number = Math.random): BattleshipsSave {
  return {
    fleet: previous ? previous.fleet.map(ship => ({ ...ship })) : randomFleet(random),
    theirs: randomFleet(random),
    ready: false,
    extra: previous ? previous.extra : true,
    first: previous ? other(previous.first) : "you",
    shots: [],
    gaveUp: null,
  };
}

/** The battle a game describes. Its shots are fired again in order, so what they hit always matches the fleets. */
export function battleOf(save: BattleshipsSave): Battle {
  let battle = startBattle({ you: save.fleet, them: save.theirs }, save.first, save.extra);
  for (const item of save.shots) {
    const next = fire(battle, item.by, item.at);
    if (!next) break;
    battle = next.battle;
  }
  return save.gaveUp ? giveUp(battle, save.gaveUp) : battle;
}

export type BattlePhase = "placing" | "battle" | "over";
export const phaseOf = (save: BattleshipsSave, battle: Battle = battleOf(save)): BattlePhase => (!save.ready ? "placing" : battle.result ? "over" : "battle");

/** The game with one more shot, or null when that shot isn't allowed. */
export function withShot(save: BattleshipsSave, side: Side, square: number): BattleshipsSave | null {
  if (!save.ready || save.gaveUp) return null;
  return fire(battleOf(save), side, square) ? { ...save, shots: [...save.shots, { by: side, at: square }] } : null;
}

const isObject = (value: unknown): value is Record<string, unknown> => !!value && typeof value === "object" && !Array.isArray(value);

/** A saved fleet, checked: all five ships, each once, on the board and not on top of each other. */
export function readFleet(value: unknown): Fleet | null {
  if (!Array.isArray(value) || value.length !== SHIPS.length) return null;
  const fleet: Fleet = [];
  for (const item of value as unknown[]) {
    if (!isObject(item) || !(SHIP_IDS as unknown[]).includes(item.id) || (item.d !== "h" && item.d !== "v")) return null;
    if (!Number.isInteger(item.r) || !Number.isInteger(item.c)) return null;
    fleet.push({ id: item.id as ShipId, d: item.d, r: item.r as number, c: item.c as number });
  }
  return validFleet(fleet) ? SHIPS.map(kind => fleet.find(ship => ship.id === kind.id) as Ship) : null;
}

/**
 * A saved game, checked. Both fleets must be whole and legal, or nothing is kept. Shots count only
 * once the battle has begun, and are kept up to the first one that couldn't have been fired.
 */
export function readBattleshipsSave(value: unknown): BattleshipsSave | null {
  if (!isObject(value)) return null;
  const fleet = readFleet(value.fleet);
  const theirs = readFleet(value.theirs);
  if (!fleet || !theirs) return null;
  const save: BattleshipsSave = { fleet, theirs, ready: value.ready === true, extra: value.extra !== false, first: value.first === "them" ? "them" : "you", shots: [], gaveUp: null };
  if (!save.ready) return save;
  let battle = battleOf(save);
  if (Array.isArray(value.shots)) {
    for (const item of (value.shots as unknown[]).slice(0, MOST_SHOTS)) {
      if (!isObject(item) || (item.by !== "you" && item.by !== "them")) break;
      const next = fire(battle, item.by, item.at as number);
      if (!next) break;
      battle = next.battle;
      save.shots.push({ by: item.by, at: item.at as number });
    }
  }
  if ((value.gaveUp === "you" || value.gaveUp === "them") && !battle.result) save.gaveUp = value.gaveUp;
  return save;
}

/** Where a game has got to, in a few words, for the game strip and "Games in your groups". `yours` is set when it is the person's go. */
export function battleshipsProgress(save: BattleshipsSave | null, name: string): { text: string; yours: boolean } {
  if (!save || !save.ready) return { text: "Place your ships", yours: true };
  const battle = battleOf(save);
  if (battle.result) return { text: battle.result.winner === "you" ? "You won" : `${name} won`, yours: false };
  return battle.turn === "you" ? { text: "Your turn", yours: true } : { text: `${name} is aiming`, yours: false };
}
