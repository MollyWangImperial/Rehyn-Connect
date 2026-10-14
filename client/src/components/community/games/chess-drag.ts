// Moving a chess piece by pressing on it and dragging it: the parts that need no browser. Which
// square a point on the screen is over, when a press has moved far enough to be a drag, and which
// move (if any) letting go there makes. Squares are numbered as in chess-rules: 0 is a8, 63 is h1.

import { colOf, legalMoves, rowOf, type ChessMove, type ChessPosition, type Colour } from "./chess-rules";

export type Point = { x: number; y: number };
/** Where the board is on the screen, as getBoundingClientRect gives it. */
export type BoardRect = { left: number; top: number; width: number; height: number };

/**
 * The square under a point, or null when the point is off the board. `bottom` is the side drawn at
 * the bottom: with white there, a8 is the top-left square; with black, the board is turned round
 * and h1 is.
 */
export function squareAt(point: Point, rect: BoardRect, bottom: Colour = "w"): number | null {
  if (!(rect.width > 0 && rect.height > 0)) return null;
  const col = Math.floor(((point.x - rect.left) / rect.width) * 8);
  const row = Math.floor(((point.y - rect.top) / rect.height) * 8);
  if (!(col >= 0 && col < 8 && row >= 0 && row < 8)) return null;
  return bottom === "w" ? row * 8 + col : 63 - (row * 8 + col);
}

/** The middle of a square on the screen: where a piece let go somewhere it can't go returns to. */
export function squareCentre(square: number, rect: BoardRect, bottom: Colour = "w"): Point {
  const shown = bottom === "w" ? square : 63 - square;
  return { x: rect.left + ((colOf(shown) + 0.5) * rect.width) / 8, y: rect.top + ((rowOf(shown) + 0.5) * rect.height) / 8 };
}

/** How far a press must move, in CSS pixels, before it is a drag: a little further for a finger. */
export const dragSlop = (pointerType: string) => (pointerType === "touch" ? 10 : 6);

/** Whether a press has moved far enough from where it began to be a drag rather than a tap. */
export function isDrag(start: Point, now: Point, pointerType: string): boolean {
  return Math.hypot(now.x - start.x, now.y - start.y) >= dragSlop(pointerType);
}

/** Whether the piece on a square can be picked up: there is one, and it belongs to the side to move. */
export function canPickUp(position: ChessPosition, square: number | null): boolean {
  const piece = square === null ? null : position.board[square];
  return !!piece && piece[0] === position.turn;
}

/**
 * The move that letting go of the piece from `from` over `to` makes, or null when there isn't one:
 * off the board (`to` is null), back on its own square, or anywhere the rules don't allow. Castling
 * and promotion are the usual legal moves (the king to g1 or c1; a pawn on the last row is a queen).
 */
export function dropMove(position: ChessPosition, from: number, to: number | null): ChessMove | null {
  if (to === null || to === from) return null;
  return legalMoves(position, from).find(move => move.to === to) ?? null;
}
