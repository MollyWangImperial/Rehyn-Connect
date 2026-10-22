import type { FeatureSpec } from "./feature-spec";

// The Haemorrhoids, Anal fissure, Lactose intolerance and Bowel incontinence pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsRectalPieces.tsx.

export const RECTAL_PIECES = [
] as const;
export type RectalPiece = (typeof RECTAL_PIECES)[number];

export const RECTAL_FEATURES: Record<string, FeatureSpec<RectalPiece>> = {
};