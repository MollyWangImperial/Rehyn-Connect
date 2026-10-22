import type { NewsPiece } from "@/content/ischaemic-news";
import { BILIARY_PIECES, type BiliaryPiece } from "@/content/biliary-features";
import type { PieceProps } from "./NewsPieceParts";

// The Haemochromatosis, Primary biliary cholangitis and Autoimmune hepatitis pages' own pieces (content/biliary-features.ts), drawn in the page's card
// colours (the --t- variables), like the other Kidneys, liver & digestion pieces. Each is steered by the card's
// sections; pictures show ideas, never anyone's own body or results.

export const isBiliaryPiece = (piece: NewsPiece): piece is BiliaryPiece => (BILIARY_PIECES as readonly string[]).includes(piece);

export function BiliaryPieceView({ piece, ...props }: { piece: BiliaryPiece } & PieceProps) {
  void props;
  switch (piece) {
    default: return null;
  }
}
