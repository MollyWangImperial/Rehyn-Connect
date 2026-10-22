import type { NewsPiece } from "@/content/ischaemic-news";
import { NEPHRO_PIECES, type NephroPiece } from "@/content/nephro-features";
import type { PieceProps } from "./NewsPieceParts";

// The Polycystic kidney disease, Kidney failure and dialysis, Kidney transplant and Glomerulonephritis pages' own pieces (content/nephro-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Kidneys, liver & digestion pieces. Each is steered by the card's
// sections; pictures show ideas, never anyone's own body or results.

export const isNephroPiece = (piece: NewsPiece): piece is NephroPiece => (NEPHRO_PIECES as readonly string[]).includes(piece);

export function NephroPieceView({ piece, ...props }: { piece: NephroPiece } & PieceProps) {
  void props;
  switch (piece) {
    default: return null;
  }
}
