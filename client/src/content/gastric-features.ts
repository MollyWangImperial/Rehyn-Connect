import type { FeatureSpec } from "./feature-spec";

// The Indigestion, Hiatus hernia, Gastritis and Microscopic colitis pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsGastricPieces.tsx.

export const GASTRIC_PIECES = [
] as const;
export type GastricPiece = (typeof GASTRIC_PIECES)[number];

export const GASTRIC_FEATURES: Record<string, FeatureSpec<GastricPiece>> = {
};
