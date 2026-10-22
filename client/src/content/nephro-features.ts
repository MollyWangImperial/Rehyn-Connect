import type { FeatureSpec } from "./feature-spec";

// The Polycystic kidney disease, Kidney failure and dialysis, Kidney transplant and Glomerulonephritis pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsNephroPieces.tsx.

export const NEPHRO_PIECES = [
] as const;
export type NephroPiece = (typeof NEPHRO_PIECES)[number];

export const NEPHRO_FEATURES: Record<string, FeatureSpec<NephroPiece>> = {
};
