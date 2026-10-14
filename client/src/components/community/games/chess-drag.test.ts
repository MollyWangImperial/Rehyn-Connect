import { describe, expect, it } from "vitest";
import { canPickUp, dropMove, dragSlop, isDrag, squareAt, squareCentre } from "./chess-drag";
import { moveCode, moveFromCode, playMove, positionFromFen, squareIndex, startPosition, type ChessPosition } from "./chess-rules";

// Pressing on a chess piece and dragging it: which square the pointer is over, when a press becomes
// a drag, and which move letting go makes. A board 400 pixels wide at (100, 50): 50-pixel squares.

const rect = { left: 100, top: 50, width: 400, height: 400 };
const sq = squareIndex;
const fen = (text: string) => {
  const position = positionFromFen(text);
  if (!position) throw new Error(`Can't read ${text}`);
  return position;
};
const play = (position: ChessPosition, ...codes: string[]) => codes.reduce((at, code) => playMove(at, moveFromCode(at, code)!), position);

describe("chess drag", () => {
  it("finds the square under a point, with white at the bottom", () => {
    expect(squareAt({ x: 100, y: 50 }, rect)).toBe(sq("a8"));
    expect(squareAt({ x: 499.9, y: 449.9 }, rect)).toBe(sq("h1"));
    expect(squareAt({ x: 325, y: 275 }, rect)).toBe(sq("e4"));
    expect(squareAt({ x: 349, y: 399 }, rect)).toBe(sq("e2"));
    expect(squareAt({ x: 350, y: 400 }, rect)).toBe(sq("f1"));
  });

  it("turns the board round when black is at the bottom", () => {
    expect(squareAt({ x: 100, y: 50 }, rect, "b")).toBe(sq("h1"));
    expect(squareAt({ x: 499, y: 449 }, rect, "b")).toBe(sq("a8"));
    expect(squareAt({ x: 325, y: 275 }, rect, "b")).toBe(sq("d5"));
  });

  it("is off the board beyond its edges, and when the board has no size", () => {
    expect(squareAt({ x: 99.9, y: 200 }, rect)).toBeNull();
    expect(squareAt({ x: 500, y: 200 }, rect)).toBeNull();
    expect(squareAt({ x: 300, y: 49 }, rect)).toBeNull();
    expect(squareAt({ x: 300, y: 450 }, rect)).toBeNull();
    expect(squareAt({ x: -5000, y: 9000 }, rect)).toBeNull();
    expect(squareAt({ x: Number.NaN, y: 200 }, rect)).toBeNull();
    expect(squareAt({ x: 300, y: 200 }, { ...rect, width: 0, height: 0 })).toBeNull();
  });

  it("puts each square's middle where that same square is found, either way round", () => {
    for (const bottom of ["w", "b"] as const) {
      for (let square = 0; square < 64; square++) expect(squareAt(squareCentre(square, rect, bottom), rect, bottom)).toBe(square);
    }
    expect(squareCentre(sq("e2"), rect)).toEqual({ x: 325, y: 375 });
  });

  it("counts a press as a drag only once it has moved a little, a bit further for a finger", () => {
    expect(dragSlop("mouse")).toBeLessThan(dragSlop("touch"));
    expect(isDrag({ x: 0, y: 0 }, { x: 0, y: 0 }, "mouse")).toBe(false);
    expect(isDrag({ x: 10, y: 10 }, { x: 13, y: 14 }, "mouse")).toBe(false);
    expect(isDrag({ x: 10, y: 10 }, { x: 16, y: 10 }, "mouse")).toBe(true);
    expect(isDrag({ x: 10, y: 10 }, { x: 16, y: 10 }, "touch")).toBe(false);
    expect(isDrag({ x: 10, y: 10 }, { x: 16, y: 18 }, "touch")).toBe(true);
    expect(isDrag({ x: 10, y: 10 }, { x: 10, y: 4 }, "pen")).toBe(true);
  });

  it("lets only the side to move pick a piece up", () => {
    const start = startPosition();
    expect(canPickUp(start, sq("e2"))).toBe(true);
    expect(canPickUp(start, sq("g1"))).toBe(true);
    expect(canPickUp(start, sq("e7"))).toBe(false);
    expect(canPickUp(start, sq("e4"))).toBe(false);
    expect(canPickUp(start, null)).toBe(false);
    const blackToMove = play(start, "e2e4");
    expect(canPickUp(blackToMove, sq("e7"))).toBe(true);
    expect(canPickUp(blackToMove, sq("e4"))).toBe(false);
  });

  it("makes the move a drop names when it is legal, and nothing otherwise", () => {
    const start = startPosition();
    const e4 = dropMove(start, sq("e2"), sq("e4"));
    expect(e4 && moveCode(e4)).toBe("e2e4");
    expect(dropMove(start, sq("g1"), sq("f3"))).toMatchObject({ piece: "wN", captured: null });
    expect(dropMove(start, sq("e2"), sq("e5"))).toBeNull();
    expect(dropMove(start, sq("g1"), sq("g3"))).toBeNull();
    // Back on its own square, off the board, or a piece of the side not moving: no move.
    expect(dropMove(start, sq("e2"), sq("e2"))).toBeNull();
    expect(dropMove(start, sq("e2"), null)).toBeNull();
    expect(dropMove(start, sq("e7"), sq("e5"))).toBeNull();
    // A pinned knight stays put.
    expect(dropMove(fen("4r1k1/8/8/8/8/8/4N3/4K3 w - - 0 1"), sq("e2"), sq("c3"))).toBeNull();
  });

  it("castles, promotes and takes en passant through the usual rules", () => {
    const ready = fen("r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1");
    expect(dropMove(ready, sq("e1"), sq("g1"))).toMatchObject({ castle: "K" });
    expect(dropMove(ready, sq("e1"), sq("c1"))).toMatchObject({ castle: "Q" });
    expect(dropMove(ready, sq("e1"), sq("h1"))).toBeNull();
    const promote = dropMove(fen("8/4P1k1/8/8/8/8/8/4K3 w - - 0 1"), sq("e7"), sq("e8"));
    expect(promote).toMatchObject({ promotion: true });
    const passant = play(startPosition(), "e2e4", "a7a6", "e4e5", "d7d5");
    expect(dropMove(passant, sq("e5"), sq("d6"))).toMatchObject({ enPassant: true, captured: "bP" });
  });
});
