import { useCallback, useEffect, useRef, useState, type MouseEvent as ReactMouseEvent, type PointerEvent as ReactPointerEvent } from "react";
import { canPickUp, dropMove, isDrag, squareAt, squareCentre, type Point } from "./chess-drag";
import type { ChessMove, ChessPosition, Colour, Piece } from "./chess-rules";

// Press and hold to move a chess piece: the pointer handling for the board in Chess.tsx, for a mouse,
// a finger or a pen. A press on one of your pieces that moves a little becomes a drag: the piece
// follows the pointer, and letting go on a legal square makes the move just as tapping would.
// Anywhere else, it goes back with nothing changed. A press that doesn't move stays a tap, so tapping
// a piece and then a square, and the keyboard, work as they always have.

/** The piece in hand, for drawing it and marking its squares. */
export type HeldPiece = {
  /** The square it was picked up from. */
  from: number;
  piece: Piece;
  /** The square under the pointer, or null off the board. */
  over: number | null;
  /** A square's size on the screen, so the piece in hand is the size it is on the board. */
  size: number;
  /** Held by a finger, which hides the square under it. */
  touch: boolean;
  /** Let go where it can't go: on its way back to its square. */
  back: boolean;
};

type Press = { id: number; from: number; piece: Piece; type: string; square: Element; start: Point; at: Point; dragging: boolean; left: boolean };

/** How long a piece let go in the wrong place takes to glide home (the CSS transition is a little shorter). */
const BACK_MS = 200;

/** Puts the piece in hand with its middle on a point. */
function placeHand(hand: HTMLElement | null, point: Point, size: number) {
  if (hand) hand.style.transform = `translate3d(${point.x - size / 2}px, ${point.y - size / 2}px, 0)`;
}

/** The square (a child of the board) that an element pressed on is part of. */
function squareOf(board: Element, inside: Element | null): Element | null {
  let element = inside;
  while (element && element.parentElement !== board) element = element.parentElement;
  return element;
}

export function useChessDrag({ position, canMove, bottom = "w", onMove, onTap }: {
  position: ChessPosition;
  /** It is the person's turn: their pieces can be picked up. */
  canMove: boolean;
  /** The side drawn at the bottom of the board. */
  bottom?: Colour;
  /** A drop on a legal square: the same as a tapped move. */
  onMove: (move: ChessMove) => void;
  /** A press that wobbled past the drag distance but never left its square: the same as a tap. */
  onTap: (square: number) => void;
}) {
  const board = useRef<HTMLDivElement>(null);
  const hand = useRef<HTMLDivElement | null>(null);
  const press = useRef<Press | null>(null);
  const size = useRef(0);
  // After a drag, the click the browser may send when the pointer is let go is not a tap.
  const dragged = useRef(false);
  const homeTimer = useRef<number | undefined>(undefined);
  const [held, setHeld] = useState<HeldPiece | null>(null);
  // A drop is judged on the game as it is when the piece is let go, not when it was picked up.
  const latest = useRef({ position, canMove, onMove, onTap });
  latest.current = { position, canMove, onMove, onTap };

  useEffect(() => () => window.clearTimeout(homeTimer.current), []);

  const putDown = () => { window.clearTimeout(homeTimer.current); setHeld(null); };

  /** Sends the piece back to its square: a short glide, or straight there for less motion. */
  const goHome = (from: number) => {
    const rect = board.current?.getBoundingClientRect();
    if (!rect || !hand.current || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) { putDown(); return; }
    placeHand(hand.current, squareCentre(from, rect, bottom), size.current);
    setHeld(current => current && { ...current, over: null, back: true });
    window.clearTimeout(homeTimer.current);
    homeTimer.current = window.setTimeout(() => setHeld(null), BACK_MS);
  };

  const cancel = () => {
    const current = press.current;
    press.current = null;
    if (current?.dragging) goHome(current.from);
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (press.current?.dragging) return; // one piece at a time: a second finger changes nothing
    dragged.current = false;
    press.current = null;
    if (held) putDown(); // a piece still gliding home lands at once
    if (!event.isPrimary || event.button !== 0) return;
    const { position: now, canMove: can } = latest.current;
    const start = { x: event.clientX, y: event.clientY };
    const from = squareAt(start, event.currentTarget.getBoundingClientRect(), bottom);
    const square = squareOf(event.currentTarget, event.target as Element);
    if (!can || from === null || !square || !canPickUp(now, from)) return;
    press.current = { id: event.pointerId, from, piece: now.board[from]!, type: event.pointerType, square, start, at: start, dragging: false, left: false };
    // The rest of this press comes to the square pressed, wherever the pointer goes: off the board,
    // or out of the window. A press let go where it began still clicks that square, so taps work.
    try { square.setPointerCapture(event.pointerId); } catch { /* the pointer has already gone */ }
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const current = press.current;
    if (!current || event.pointerId !== current.id) return;
    // No button down any more: it was let go somewhere this page couldn't hear.
    if (event.buttons === 0) { cancel(); return; }
    current.at = { x: event.clientX, y: event.clientY };
    if (!current.dragging && !isDrag(current.start, current.at, current.type)) return;
    const rect = board.current?.getBoundingClientRect();
    if (!rect) return;
    const over = squareAt(current.at, rect, bottom);
    if (over !== current.from) current.left = true;
    if (!current.dragging) {
      current.dragging = true;
      dragged.current = true;
      size.current = rect.width / 8;
      setHeld({ from: current.from, piece: current.piece, over, size: size.current, touch: current.type !== "mouse", back: false });
      return; // the piece in hand is placed as it appears (handRef)
    }
    placeHand(hand.current, current.at, size.current);
    setHeld(state => (state && state.over !== over ? { ...state, over } : state));
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const current = press.current;
    if (!current || event.pointerId !== current.id) return;
    press.current = null;
    if (!current.dragging) return; // a press that never moved: the click that follows is the tap
    const rect = board.current?.getBoundingClientRect();
    const to = rect ? squareAt({ x: event.clientX, y: event.clientY }, rect, bottom) : null;
    const { position: now, canMove: can, onMove: move, onTap: tap } = latest.current;
    const made = can && now.board[current.from] === current.piece ? dropMove(now, current.from, to) : null;
    if (made) { putDown(); move(made); return; }
    if (to === current.from && !current.left) { putDown(); tap(current.from); return; }
    goHome(current.from);
  };

  const onPointerCancel = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerId === press.current?.id) cancel();
  };
  // Only the square this page captured counts. (A finger's own capture moving to it doesn't, and
  // letting go has already ended the press by the time the browser releases it.)
  const onLostPointerCapture = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerId === press.current?.id && event.target === press.current.square) cancel();
  };
  // A finger held still on a piece asks for the long-press menu: not while it holds the piece.
  const onContextMenu = (event: ReactMouseEvent<HTMLDivElement>) => { if (press.current) event.preventDefault(); };

  // Escape puts a held piece back.
  const dragging = !!held && !held.back;
  useEffect(() => {
    if (!dragging) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") cancel(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [dragging]);

  const handRef = useCallback((element: HTMLDivElement | null) => {
    hand.current = element;
    if (element && press.current) placeHand(element, press.current.at, size.current);
  }, []);

  /** Whether a square's click is only the end of a drag (a keyboard click never is). */
  const skipClick = (event: ReactMouseEvent) => {
    if (!dragged.current || event.detail === 0) return false;
    dragged.current = false;
    return true;
  };

  return {
    held,
    boardProps: { ref: board, onPointerDown, onPointerMove, onPointerUp, onPointerCancel, onLostPointerCapture, onContextMenu },
    handRef,
    skipClick,
  };
}
