import type { ReactNode } from "react";
import type { GameId } from "@/content/community-samples";
import { BattleshipsPicture } from "./BattleshipsArt";
import type { Piece, PieceKind } from "./chess-rules";

// The drawings for the group games: the chess pieces (original drawings from the design boards,
// on a 40 by 40 grid) and a small picture for each game in "Start a game".

const INK = "#1B2A24";
const PAPER = "#FFFDF8";
const base = <rect x="9.5" y="31" width="21" height="4.5" rx="2" />;
const collar = <rect x="12" y="27" width="16" height="3.4" rx="1.5" />;

const shapes: Record<PieceKind, (detail: string) => ReactNode> = {
  P: () => <><circle cx="20" cy="11.5" r="5.2" /><rect x="14.5" y="16.5" width="11" height="3" rx="1.5" /><path d="M16.2 19.5h7.6l3.2 11.5H13z" />{base}</>,
  R: () => <><path d="M11 7h4.2v3.2h2.6V7h4.4v3.2h2.6V7H29v8.5H11z" /><path d="M13.5 15.5h13l1.6 15.5H11.9z" />{base}</>,
  N: detail => <><path d="M12.5 31c.2-5.6 2.4-9.4 6-12.4-2.2.2-4.1.9-5.6 2.2l-2.6-2.6c.6-3.4 2.6-6.4 5.4-8.6l.8-4.1 2.6 2.6c6.7.6 11.1 6.2 11.1 14.4V31z" />{base}<circle cx="20.6" cy="12.4" r="1.25" fill={detail} stroke="none" /></>,
  B: detail => <><circle cx="20" cy="4.6" r="2.2" /><path d="M20 6.8c4.6 3.8 6.6 7.2 6.6 10a6.6 6.6 0 0 1-13.2 0c0-2.8 2-6.2 6.6-10z" /><rect x="14.5" y="21" width="11" height="3" rx="1.5" /><path d="M16.5 24h7l3 7H13.5z" />{base}<path d="M21.6 11.2l-3.4 3.8" stroke={detail} strokeWidth="1.6" fill="none" strokeLinecap="round" /></>,
  Q: () => <><circle cx="9.5" cy="10.5" r="2.3" /><circle cx="16" cy="7.5" r="2.3" /><circle cx="24" cy="7.5" r="2.3" /><circle cx="30.5" cy="10.5" r="2.3" /><path d="M9.5 12.5l3.6 14.5h13.8l3.6-14.5-5.4 7-1.1-9.6-4 8.6-4-8.6-1.1 9.6z" />{collar}{base}</>,
  K: () => <><rect x="18.7" y="2" width="2.6" height="9" rx="1" /><rect x="15.5" y="4.6" width="9" height="2.6" rx="1" /><path d="M20 11c5.6 0 9 1.6 9 4.2 0 2.6-1.4 5.4-2.6 11.8H13.6C12.4 20.6 11 17.8 11 15.2 11 12.6 14.4 11 20 11z" />{collar}{base}</>,
};

/** One chess piece: white pieces are cream with a dark outline, black pieces are dark. */
export function ChessPiece({ piece, size = 40, className = "" }: { piece: Piece; size?: number; className?: string }) {
  const white = piece[0] === "w";
  return (
    <svg className={`cm-piece ${className}`} width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <g fill={white ? PAPER : INK} stroke={INK} strokeWidth="1.5" strokeLinejoin="round">{shapes[piece[1] as PieceKind](white ? INK : PAPER)}</g>
    </svg>
  );
}

const Tick = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>;
export { Tick as GameTick };

/** A rounded board with three spots: the sign for games in general. */
export function GamesIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" /><circle cx="15.5" cy="15.5" r="1.2" fill="currentColor" /><circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  );
}

/** The picture on each game's tile in "Start a game". */
export function GamePicture({ game }: { game: GameId }) {
  switch (game) {
    case "chess":
      return <span className="cm-gp-chess"><ChessPiece piece="bN" size={44} /><ChessPiece piece="wP" size={34} /></span>;
    case "draughts":
      return <span className="cm-gp-draughts"><i /><i /></span>;
    case "xiangqi":
      return <span className="cm-gp-glyph" style={{ color: "#B5522E" }} lang="zh">象</span>;
    case "go":
      return <span className="cm-gp-go"><i /><i /><i /><i /></span>;
    case "backgammon":
      return (
        <svg width="46" height="34" viewBox="0 0 46 34" aria-hidden="true">
          <path d="M2 2h8l-4 22zM24 2h8l-4 22z" fill="#1F4E66" /><path d="M12 2h8l-4 22zM34 2h8l-4 22z" fill="#C8553A" />
        </svg>
      );
    case "ludo":
      return <span className="cm-gp-ludo"><i /><i /><i /><i /></span>;
    case "dominoes":
      return <span className="cm-gp-domino"><span><i /><i /></span><span><i /></span></span>;
    case "mahjong":
      return <span className="cm-gp-glyph" style={{ color: "#8F3520" }} lang="zh">中</span>;
    case "battleships":
      return <BattleshipsPicture />;
  }
}
