import type { FeatureSpec } from "./feature-spec";

// The Haemochromatosis, Primary biliary cholangitis and Autoimmune hepatitis pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsBiliaryPieces.tsx.

export const BILIARY_PIECES = [
] as const;
export type BiliaryPiece = (typeof BILIARY_PIECES)[number];

export const BILIARY_FEATURES: Record<string, FeatureSpec<BiliaryPiece>> = {
};