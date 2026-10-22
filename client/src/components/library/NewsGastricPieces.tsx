import type { NewsPiece } from "@/content/ischaemic-news";
import { GASTRIC_PIECES, type GastricPiece } from "@/content/gastric-features";
import type { PieceProps } from "./NewsPieceParts";

// The Indigestion, Hiatus hernia, Gastritis and Microscopic colitis pages' own pieces (content/gastric-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Kidneys, liver & digestion pieces. Each is steered by the card's
// sections; pictures show ideas, never anyone's own body or results.

export const isGastricPiece = (piece: NewsPiece): piece is GastricPiece => (GASTRIC_PIECES as readonly string[]).includes(piece);

export function GastricPieceView({ piece, ...props }: { piece: GastricPiece } & PieceProps) {
  void props;
  switch (piece) {
    default: return null;
  }
}
