import type { FeatureSpec } from "./feature-spec";

// The Overactive bladder, Bladder pain syndrome and Prostatitis pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsUrologyPieces.tsx.

export const UROLOGY_PIECES = [
] as const;
export type UrologyPiece = (typeof UROLOGY_PIECES)[number];

export const UROLOGY_FEATURES: Record<string, FeatureSpec<UrologyPiece>> = {
};
