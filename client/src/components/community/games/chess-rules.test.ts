import { describe, expect, it } from "vitest";
import {
  capturedPieces, gameStatus, inCheck, legalMoves, moveCode, moveFromCode, moveNotation, moveWords, playMove, positionFromFen, replay, replyMove, squareIndex, squareName, startPosition, type ChessPosition,
} from "./chess-rules";

// The chess rules the group game uses. The move counts ("perft") are the standard published ones,
// so they check every rule at once: pins, check, castling and en passant.

function perft(position: ChessPosition, depth: number): number {
  if (depth === 0) return 1;
  const moves = legalMoves(position);
  if (depth === 1) return moves.length;
  return moves.reduce((sum, move) => sum + perft(playMove(position, move), depth - 1), 0);
}
const fen = (text: string) => {
  const position = positionFromFen(text);
  if (!position) throw new Error(`Can't read ${text}`);
  return position;
};
const play = (position: ChessPosition, ...codes: string[]) => codes.reduce((at, code) => {
  const move = moveFromCode(at, code);
  if (!move) throw new Error(`${code} is not legal`);
  return playMove(at, move);
}, position);

describe("chess rules", () => {
  it("names squares from a8 (0) to h1 (63)", () => {
    expect(squareName(0)).toBe("a8");
    expect(squareName(63)).toBe("h1");
    expect(squareIndex("e4")).toBe(36);
    expect(squareIndex("z9")).toBe(-1);
  });

  it("finds the right number of moves from the start", () => {
    const start = startPosition();
    expect(perft(start, 1)).toBe(20);
    expect(perft(start, 2)).toBe(400);
    expect(perft(start, 3)).toBe(8902);
  });

  it("gets castling, en passant and pins right in a busy position", () => {
    // "Kiwipete": a position full of castling, pins and en passant.
    const kiwipete = fen("r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq - 0 1");
    expect(perft(kiwipete, 1)).toBe(48);
    expect(perft(kiwipete, 2)).toBe(2039);
    const endgame = fen("8/2p5/3p4/KP5r/1R3p1k/8/4P1P1/8 w - - 0 1");
    expect(perft(endgame, 1)).toBe(14);
    expect(perft(endgame, 2)).toBe(191);
    expect(perft(endgame, 3)).toBe(2812);
  });

  it("never lets a pinned piece move off its line", () => {
    // The white knight on e2 is pinned to the king by the rook on e8.
    const pinned = fen("4r1k1/8/8/8/8/8/4N3/4K3 w - - 0 1");
    expect(legalMoves(pinned, squareIndex("e2"))).toEqual([]);
  });

  it("castles on both sides, and not through check", () => {
    const ready = fen("r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1");
    const kingMoves = legalMoves(ready, squareIndex("e1")).map(moveCode);
    expect(kingMoves).toEqual(expect.arrayContaining(["e1g1", "e1c1"]));
    const short = play(ready, "e1g1");
    expect(short.board[squareIndex("f1")]).toBe("wR");
    expect(short.board[squareIndex("h1")]).toBeNull();
    expect(short.castling).toMatchObject({ wK: false, wQ: false, bK: true, bQ: true });
    expect(moveNotation(ready, moveFromCode(ready, "e1c1")!)).toBe("O-O-O");
    // A black rook on f8 watches f1: no castling on the king's side.
    const watched = fen("r3kr2/8/8/8/8/8/8/R3K2R w KQq - 0 1");
    expect(legalMoves(watched, squareIndex("e1")).map(moveCode)).not.toContain("e1g1");
    expect(legalMoves(watched, squareIndex("e1")).map(moveCode)).toContain("e1c1");
    // In check: no castling at all.
    const checked = fen("r3k2r/8/8/8/8/8/4r3/R3K2R w KQkq - 0 1");
    expect(legalMoves(checked).filter(move => move.castle)).toEqual([]);
    // After the rook moves, castling on that side is gone for good.
    const rookMoved = play(ready, "h1h2", "a8a7", "h2h1", "a7a8");
    expect(legalMoves(rookMoved, squareIndex("e1")).map(moveCode)).not.toContain("e1g1");
  });

  it("takes en passant, only straight after the two-square move", () => {
    const before = play(startPosition(), "e2e4", "a7a6", "e4e5", "d7d5");
    const take = moveFromCode(before, "e5d6");
    expect(take).toMatchObject({ enPassant: true, captured: "bP" });
    const after = playMove(before, take!);
    expect(after.board[squareIndex("d5")]).toBeNull();
    expect(after.board[squareIndex("d6")]).toBe("wP");
    expect(moveNotation(before, take!)).toBe("exd6");
    // One move later, it is too late.
    const late = play(before, "a2a3", "a6a5");
    expect(moveFromCode(late, "e5d6")).toBeNull();
  });

  it("turns a pawn on the last row into a queen", () => {
    const near = fen("8/4P1k1/8/8/8/8/8/4K3 w - - 0 1");
    const move = moveFromCode(near, "e7e8")!;
    expect(move.promotion).toBe(true);
    expect(playMove(near, move).board[squareIndex("e8")]).toBe("wQ");
    expect(moveNotation(near, move)).toBe("e8=Q");
    expect(moveWords(move)).toBe("pawn to e8, and becomes a queen");
  });

  it("sees check, checkmate and stalemate", () => {
    const foolsMate = play(startPosition(), "f2f3", "e7e5", "g2g4");
    const mate = moveFromCode(foolsMate, "d8h4")!;
    expect(moveNotation(foolsMate, mate)).toBe("Qh4#");
    const over = playMove(foolsMate, mate);
    expect(inCheck(over)).toBe(true);
    expect(gameStatus(over)).toBe("checkmate");
    expect(legalMoves(over)).toEqual([]);
    const stalemate = fen("7k/5Q2/6K1/8/8/8/8/8 b - - 0 1");
    expect(inCheck(stalemate)).toBe(false);
    expect(gameStatus(stalemate)).toBe("stalemate");
    expect(gameStatus(fen("8/8/8/4k3/8/8/8/4K3 w - - 0 1"))).toBe("draw");
    expect(gameStatus(startPosition())).toBe("playing");
  });

  it("writes moves the way players do, saying which piece when two could go", () => {
    const start = startPosition();
    expect(moveNotation(start, moveFromCode(start, "g1f3")!)).toBe("Nf3");
    const twoKnights = fen("4k3/8/8/8/8/8/8/1N2KN2 w - - 0 1");
    expect(moveNotation(twoKnights, moveFromCode(twoKnights, "b1d2")!)).toBe("Nbd2");
    const check = play(start, "e2e4", "f7f6");
    expect(moveNotation(check, moveFromCode(check, "d1h5")!)).toBe("Qh5+");
    expect(moveWords(moveFromCode(start, "g1f3")!)).toBe("knight to f3");
  });

  it("replays saved moves and stops at one that isn't legal", () => {
    const game = replay(["e2e4", "e7e5", "g1f3", "b8c6"]);
    expect(game.history.map(entry => entry.notation)).toEqual(["e4", "e5", "Nf3", "Nc6"]);
    expect(game.position.turn).toBe("w");
    expect(replay(["e2e4", "e2e4", "e7e5"]).history).toHaveLength(1);
  });

  it("replies with a legal move, and takes a piece when it can", () => {
    const offered = play(startPosition(), "e2e4", "d7d5", "a2a3");
    const reply = replyMove(offered, () => 0.5);
    expect(reply).toMatchObject({ captured: "wP", to: squareIndex("e4") });
    expect(replyMove(fen("7k/5Q2/6K1/8/8/8/8/8 b - - 0 1"))).toBeNull();
  });

  it("counts the pieces taken", () => {
    const after = play(startPosition(), "e2e4", "d7d5", "e4d5");
    expect(capturedPieces(after.board, "b")).toEqual(["bP"]);
    expect(capturedPieces(after.board, "w")).toEqual([]);
  });
});
