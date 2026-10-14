// The rules of chess, small enough to read: legal moves (pins and check included), castling,
// en passant, promotion (always to a queen, so nobody has to choose), checkmate, stalemate and the
// simple draws. Squares are numbered 0 to 63 from a8 to h1, as the board is drawn: index 0 is the
// top-left square, a8, and index 63 is h1. A piece is its colour and letter: "wP", "bK".

export type Colour = "w" | "b";
export type PieceKind = "P" | "N" | "B" | "R" | "Q" | "K";
export type Piece = `${Colour}${PieceKind}`;
export type Square = Piece | null;

export type Castling = { wK: boolean; wQ: boolean; bK: boolean; bQ: boolean };
export type ChessPosition = {
  board: Square[];
  turn: Colour;
  castling: Castling;
  /** The square a pawn could be taken on en passant, just after it moved two squares. */
  enPassant: number | null;
  /** Half-moves since the last capture or pawn move, for the fifty-move draw. */
  quiet: number;
};

export type ChessMove = {
  from: number;
  to: number;
  piece: Piece;
  captured: Piece | null;
  /** A pawn reaching the far side becomes a queen. */
  promotion: boolean;
  castle: "K" | "Q" | null;
  enPassant: boolean;
};

export type ChessStatus = "playing" | "checkmate" | "stalemate" | "draw";

const FILES = "abcdefgh";
export const PIECE_NAMES: Record<PieceKind, string> = { P: "pawn", N: "knight", B: "bishop", R: "rook", Q: "queen", K: "king" };

export const rowOf = (square: number) => Math.floor(square / 8);
export const colOf = (square: number) => square % 8;
/** "e4" for a square number. */
export const squareName = (square: number) => `${FILES[colOf(square)]}${8 - rowOf(square)}`;
/** The square number for "e4", or -1. */
export function squareIndex(name: string): number {
  const col = FILES.indexOf(name.charAt(0));
  const rank = Number(name.charAt(1));
  return name.length === 2 && col >= 0 && rank >= 1 && rank <= 8 ? (8 - rank) * 8 + col : -1;
}
const other = (colour: Colour): Colour => (colour === "w" ? "b" : "w");
const on = (row: number, col: number) => row >= 0 && row < 8 && col >= 0 && col < 8;

export function startPosition(): ChessPosition {
  const board: Square[] = Array(64).fill(null);
  const back: PieceKind[] = ["R", "N", "B", "Q", "K", "B", "N", "R"];
  back.forEach((kind, col) => {
    board[col] = `b${kind}`;
    board[8 + col] = "bP";
    board[48 + col] = "wP";
    board[56 + col] = `w${kind}`;
  });
  return { board, turn: "w", castling: { wK: true, wQ: true, bK: true, bQ: true }, enPassant: null, quiet: 0 };
}

/** A position written the standard way ("rnbqkbnr/pppppppp/8/... w KQkq - 0 1"), or null if it can't be read. */
export function positionFromFen(fen: string): ChessPosition | null {
  const [placement, turn, rights = "-", passant = "-", quiet = "0"] = fen.trim().split(/\s+/);
  const rows = placement?.split("/") ?? [];
  if (rows.length !== 8 || (turn !== "w" && turn !== "b")) return null;
  const board: Square[] = [];
  for (const row of rows) {
    for (const char of row) {
      if (/[1-8]/.test(char)) for (let i = 0; i < Number(char); i++) board.push(null);
      else if (/[pnbrqk]/i.test(char)) board.push(`${char === char.toUpperCase() ? "w" : "b"}${char.toUpperCase()}` as Piece);
      else return null;
    }
    if (board.length % 8 !== 0) return null;
  }
  if (board.length !== 64) return null;
  const enPassant = passant === "-" ? null : squareIndex(passant);
  return {
    board, turn,
    castling: { wK: rights.includes("K"), wQ: rights.includes("Q"), bK: rights.includes("k"), bQ: rights.includes("q") },
    enPassant: enPassant !== null && enPassant >= 0 ? enPassant : null,
    quiet: Number(quiet) || 0,
  };
}

const KNIGHT = [[1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1]];
const KING = [[1, 1], [1, 0], [1, -1], [0, 1], [0, -1], [-1, 1], [-1, 0], [-1, -1]];
const STRAIGHT = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const DIAGONAL = [[1, 1], [1, -1], [-1, 1], [-1, -1]];

/** Whether `square` is attacked by any piece of colour `by`. */
export function isAttacked(board: Square[], square: number, by: Colour): boolean {
  const row = rowOf(square), col = colOf(square);
  // A pawn attacks diagonally forwards: a white pawn from the row below, a black one from above.
  const pawnRow = by === "w" ? row + 1 : row - 1;
  for (const dc of [-1, 1]) if (on(pawnRow, col + dc) && board[pawnRow * 8 + col + dc] === `${by}P`) return true;
  for (const [dr, dc] of KNIGHT) if (on(row + dr, col + dc) && board[(row + dr) * 8 + col + dc] === `${by}N`) return true;
  for (const [dr, dc] of KING) if (on(row + dr, col + dc) && board[(row + dr) * 8 + col + dc] === `${by}K`) return true;
  const slides = (dirs: number[][], kinds: PieceKind[]) => dirs.some(([dr, dc]) => {
    let r = row + dr, c = col + dc;
    while (on(r, c)) {
      const piece = board[r * 8 + c];
      if (piece) return piece[0] === by && kinds.includes(piece[1] as PieceKind);
      r += dr; c += dc;
    }
    return false;
  });
  return slides(STRAIGHT, ["R", "Q"]) || slides(DIAGONAL, ["B", "Q"]);
}

export function inCheck(position: ChessPosition, colour: Colour = position.turn): boolean {
  const king = position.board.indexOf(`${colour}K`);
  return king >= 0 && isAttacked(position.board, king, other(colour));
}

/** Every move the side to move could make, before checking that its own king is left safe. */
function pseudoMoves(position: ChessPosition): ChessMove[] {
  const { board, turn } = position;
  const moves: ChessMove[] = [];
  const add = (from: number, to: number, extra: Partial<ChessMove> = {}) => {
    const piece = board[from] as Piece;
    const promotion = piece[1] === "P" && (rowOf(to) === 0 || rowOf(to) === 7);
    moves.push({ from, to, piece, captured: board[to], promotion, castle: null, enPassant: false, ...extra });
  };
  board.forEach((piece, from) => {
    if (!piece || piece[0] !== turn) return;
    const row = rowOf(from), col = colOf(from);
    const kind = piece[1] as PieceKind;
    if (kind === "P") {
      const step = turn === "w" ? -1 : 1;
      const home = turn === "w" ? 6 : 1;
      const ahead = (row + step) * 8 + col;
      if (on(row + step, col) && !board[ahead]) {
        add(from, ahead);
        const twoAhead = (row + 2 * step) * 8 + col;
        if (row === home && !board[twoAhead]) add(from, twoAhead);
      }
      for (const dc of [-1, 1]) {
        if (!on(row + step, col + dc)) continue;
        const to = (row + step) * 8 + col + dc;
        const target = board[to];
        if (target && target[0] !== turn) add(from, to);
        else if (to === position.enPassant) add(from, to, { captured: `${other(turn)}P`, enPassant: true });
      }
      return;
    }
    const jumps = kind === "N" ? KNIGHT : kind === "K" ? KING : null;
    if (jumps) {
      for (const [dr, dc] of jumps) {
        if (!on(row + dr, col + dc)) continue;
        const to = (row + dr) * 8 + col + dc;
        if (!board[to] || board[to]![0] !== turn) add(from, to);
      }
    } else {
      const dirs = kind === "R" ? STRAIGHT : kind === "B" ? DIAGONAL : [...STRAIGHT, ...DIAGONAL];
      for (const [dr, dc] of dirs) {
        let r = row + dr, c = col + dc;
        while (on(r, c)) {
          const to = r * 8 + c;
          if (board[to]) { if (board[to]![0] !== turn) add(from, to); break; }
          add(from, to);
          r += dr; c += dc;
        }
      }
    }
    // Castling: the king and rook have not moved, the squares between are empty, and the king is
    // not in check, does not pass through an attacked square and does not land on one.
    if (kind === "K") {
      const homeRow = turn === "w" ? 7 : 0;
      const enemy = other(turn);
      if (from !== homeRow * 8 + 4 || isAttacked(board, from, enemy)) return;
      const rights = position.castling;
      const free = (cols: number[]) => cols.every(c => !board[homeRow * 8 + c]);
      const safe = (cols: number[]) => cols.every(c => !isAttacked(board, homeRow * 8 + c, enemy));
      if ((turn === "w" ? rights.wK : rights.bK) && board[homeRow * 8 + 7] === `${turn}R` && free([5, 6]) && safe([5, 6])) add(from, homeRow * 8 + 6, { castle: "K" });
      if ((turn === "w" ? rights.wQ : rights.bQ) && board[homeRow * 8] === `${turn}R` && free([1, 2, 3]) && safe([2, 3])) add(from, homeRow * 8 + 2, { castle: "Q" });
    }
  });
  return moves;
}

/** Plays a move (assumed legal) and returns the new position. The old one is left as it was. */
export function playMove(position: ChessPosition, move: ChessMove): ChessPosition {
  const board = position.board.slice();
  const { from, to, piece } = move;
  const colour = piece[0] as Colour;
  board[from] = null;
  board[to] = move.promotion ? `${colour}Q` : piece;
  if (move.enPassant) board[to + (colour === "w" ? 8 : -8)] = null;
  if (move.castle) {
    const row = rowOf(to) * 8;
    if (move.castle === "K") { board[row + 5] = board[row + 7]; board[row + 7] = null; }
    else { board[row + 3] = board[row]; board[row] = null; }
  }
  const castling = { ...position.castling };
  if (piece === "wK") { castling.wK = false; castling.wQ = false; }
  if (piece === "bK") { castling.bK = false; castling.bQ = false; }
  // A rook leaving its corner, or taken in it, ends castling on that side.
  for (const square of [from, to]) {
    if (square === 63) castling.wK = false;
    if (square === 56) castling.wQ = false;
    if (square === 7) castling.bK = false;
    if (square === 0) castling.bQ = false;
  }
  const twoStep = piece[1] === "P" && Math.abs(to - from) === 16;
  return {
    board, castling, turn: other(position.turn),
    enPassant: twoStep ? (from + to) / 2 : null,
    quiet: piece[1] === "P" || move.captured ? 0 : position.quiet + 1,
  };
}

/** The moves the side to move can make: none of them leaves its own king in check. */
export function legalMoves(position: ChessPosition, from?: number): ChessMove[] {
  return pseudoMoves(position).filter(move => (from === undefined || move.from === from) && !inCheck(playMove(position, move), position.turn));
}

/** Only kings, or a king with one bishop or knight against a lone king: nobody can win. */
function tooFewPieces(board: Square[]): boolean {
  const left = board.filter((piece): piece is Piece => !!piece && piece[1] !== "K");
  return left.length === 0 || (left.length === 1 && (left[0][1] === "B" || left[0][1] === "N"));
}

export function gameStatus(position: ChessPosition): ChessStatus {
  if (!legalMoves(position).length) return inCheck(position) ? "checkmate" : "stalemate";
  if (position.quiet >= 100 || tooFewPieces(position.board)) return "draw";
  return "playing";
}

/** The move as chess players write it: "e4", "Nxf3", "O-O", "exd6", "e8=Q+", "Qh5#". */
export function moveNotation(position: ChessPosition, move: ChessMove): string {
  const after = playMove(position, move);
  const mark = gameStatus(after) === "checkmate" ? "#" : inCheck(after) ? "+" : "";
  if (move.castle) return (move.castle === "K" ? "O-O" : "O-O-O") + mark;
  const kind = move.piece[1] as PieceKind;
  const takes = move.captured ? "x" : "";
  const to = squareName(move.to);
  if (kind === "P") return `${takes ? FILES[colOf(move.from)] : ""}${takes}${to}${move.promotion ? "=Q" : ""}${mark}`;
  // When two of the same pieces could go there, say which: by file, else by rank, else both.
  const rivals = legalMoves(position).filter(other => other.to === move.to && other.piece === move.piece && other.from !== move.from);
  let which = "";
  if (rivals.length) {
    const sameFile = rivals.some(other => colOf(other.from) === colOf(move.from));
    const sameRank = rivals.some(other => rowOf(other.from) === rowOf(move.from));
    which = !sameFile ? FILES[colOf(move.from)] : !sameRank ? String(8 - rowOf(move.from)) : squareName(move.from);
  }
  return `${kind}${which}${takes}${to}${mark}`;
}

/** The move in plain words, for reading aloud: "knight to f3", "pawn takes bishop on d5", "castles on the king's side". */
export function moveWords(move: ChessMove): string {
  if (move.castle) return move.castle === "K" ? "castles on the king's side" : "castles on the queen's side";
  const name = PIECE_NAMES[move.piece[1] as PieceKind];
  const words = move.captured ? `${name} takes ${PIECE_NAMES[move.captured[1] as PieceKind]} on ${squareName(move.to)}` : `${name} to ${squareName(move.to)}`;
  return move.promotion ? `${words}, and becomes a queen` : words;
}

/** "e2e4": how moves are kept on the device. */
export const moveCode = (move: ChessMove) => `${squareName(move.from)}${squareName(move.to)}`;

/** The legal move a code names in this position, or null. */
export function moveFromCode(position: ChessPosition, code: string): ChessMove | null {
  const from = squareIndex(code.slice(0, 2));
  const to = squareIndex(code.slice(2, 4));
  return legalMoves(position, from).find(move => move.to === to) ?? null;
}

export type ChessReplay = { position: ChessPosition; history: { move: ChessMove; notation: string; before: ChessPosition }[] };
/** Plays a list of move codes from the start. It stops at the first one that isn't legal. */
export function replay(codes: string[]): ChessReplay {
  let position = startPosition();
  const history: ChessReplay["history"] = [];
  for (const code of codes) {
    const move = moveFromCode(position, code);
    if (!move) break;
    history.push({ move, notation: moveNotation(position, move), before: position });
    position = playMove(position, move);
  }
  return { position, history };
}

/** A friendly opponent: a random legal move, taking a piece when it can. `random` is for tests. */
export function replyMove(position: ChessPosition, random: () => number = Math.random): ChessMove | null {
  const moves = legalMoves(position);
  if (!moves.length) return null;
  const takes = moves.filter(move => move.captured);
  const pool = takes.length ? takes : moves;
  return pool[Math.min(pool.length - 1, Math.floor(random() * pool.length))];
}

const FULL_SET: Record<PieceKind, number> = { P: 8, N: 2, B: 2, R: 2, Q: 1, K: 1 };
/** The pieces of one colour no longer on the board, biggest first. (A promoted pawn counts as a queen.) */
export function capturedPieces(board: Square[], colour: Colour): Piece[] {
  const have: Record<PieceKind, number> = { P: 0, N: 0, B: 0, R: 0, Q: 0, K: 0 };
  board.forEach(piece => { if (piece && piece[0] === colour) have[piece[1] as PieceKind]++; });
  const out: Piece[] = [];
  (["Q", "R", "B", "N", "P"] as PieceKind[]).forEach(kind => { for (let i = have[kind]; i < FULL_SET[kind]; i++) out.push(`${colour}${kind}`); });
  return out;
}
