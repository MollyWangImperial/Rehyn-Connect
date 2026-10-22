import type { NewsPiece } from "@/content/ischaemic-news";
import { RECTAL_PIECES, type RectalPiece } from "@/content/rectal-features";
import type { PieceProps } from "./NewsPieceParts";

// The Haemorrhoids, Anal fissure, Lactose intolerance and Bowel incontinence pages' own pieces (content/rectal-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Kidneys, liver & digestion pieces. Each is steered by the card's
// sections; pictures show ideas, never anyone's own body or results.

export const isRectalPiece = (piece: NewsPiece): piece is RectalPiece => (RECTAL_PIECES as readonly string[]).includes(piece);

export function RectalPieceView({ piece, ...props }: { piece: RectalPiece } & PieceProps) {
  void props;
  switch (piece) {
    default: return null;
  }
}
