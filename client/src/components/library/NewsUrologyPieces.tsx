import type { NewsPiece } from "@/content/ischaemic-news";
import { UROLOGY_PIECES, type UrologyPiece } from "@/content/urology-features";
import type { PieceProps } from "./NewsPieceParts";

// The Overactive bladder, Bladder pain syndrome and Prostatitis pages' own pieces (content/urology-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Kidneys, liver & digestion pieces. Each is steered by the card's
// sections; pictures show ideas, never anyone's own body or results.

export const isUrologyPiece = (piece: NewsPiece): piece is UrologyPiece => (UROLOGY_PIECES as readonly string[]).includes(piece);

export function UrologyPieceView({ piece, ...props }: { piece: UrologyPiece } & PieceProps) {
  void props;
  switch (piece) {
    default: return null;
  }
}
