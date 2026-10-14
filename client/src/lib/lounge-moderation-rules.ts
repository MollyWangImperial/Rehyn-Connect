// The lounge's photo safety rules: what the automatic check looks for, how its scores become one
// risk score, and how a risk score becomes a pass, an unsure (held for the care team) or a block.
// The server (server/lounge-photo-check.ts) and the browser (lib/lounge-moderation*.ts) share them,
// so this file has no imports.

/** What the check scores, 0 to 1. The first four block a photo; the rest only send it to a person. */
export const PHOTO_CATEGORIES = [
  { id: "sexual", label: "Sexual or nude content", blocks: true },
  { id: "hate", label: "Hateful symbols, gestures or slurs", blocks: true },
  { id: "violence", label: "Graphic violence or self-harm", blocks: true },
  { id: "drugs", label: "Illegal drugs", blocks: true },
  { id: "medical", label: "Medical imagery, wounds, skin", blocks: false },
  { id: "alcohol", label: "Alcohol or smoking", blocks: false },
  { id: "people", label: "Other people's faces, children", blocks: false },
  { id: "text", label: "Readable text, phone numbers", blocks: false },
] as const;

export type PhotoCategory = (typeof PHOTO_CATEGORIES)[number]["id"];
export type PhotoScores = Record<PhotoCategory, number>;
export type PhotoVerdict = "pass" | "unsure" | "block";
/** Risk scores inside this band (both ends included) are unsure and wait for a person. */
export type UnsureBand = { low: number; high: number };

export const DEFAULT_UNSURE_BAND: UnsureBand = { low: 0.35, high: 0.7 };
/** How long the browser waits for the check before holding the photo for a person instead. */
export const PHOTO_CHECK_TIMEOUT_MS = 8000;
/** The photo is downscaled on the device before it is checked (at most this many pixels a side). */
export const PHOTO_CHECK_LONGEST_SIDE = 720;
/** A JPEG data URL of that size stays well under this. Bigger requests are turned away. */
export const PHOTO_CHECK_MAX_CHARS = 600_000;

const round = (value: number) => Math.round(value * 100) / 100;
const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

/** Pass below the band, block above it, and anything inside it waits for a person. */
export function classifyScore(score: number, band: UnsureBand = DEFAULT_UNSURE_BAND): PhotoVerdict {
  if (!Number.isFinite(score)) return "unsure";
  if (score < band.low) return "pass";
  if (score > band.high) return "block";
  return "unsure";
}

/**
 * One risk score from the category scores. A blocking category counts as it is. A review-only
 * category (alcohol, wounds, faces, readable text) can only lift the risk into the unsure band, so
 * on its own it never blocks a photo: 0.5 lands at 0.35 and 1.0 at 0.65.
 */
export function riskFromScores(scores: PhotoScores): { risk: number; labels: string[] } {
  let blocking = 0;
  let review = 0;
  const labels: string[] = [];
  for (const category of PHOTO_CATEGORIES) {
    const score = clamp01(scores[category.id]);
    if (category.blocks) blocking = Math.max(blocking, score);
    else review = Math.max(review, score);
    if (score >= 0.5) labels.push(category.label);
  }
  const lifted = review >= 0.5 ? Math.min(0.69, 0.35 + (review - 0.5) * 0.6) : 0;
  return { risk: round(Math.max(blocking, lifted)), labels };
}

/** The scores from the model's JSON, or null when anything is missing or not a number. */
export function readPhotoScores(value: unknown): PhotoScores | null {
  if (typeof value !== "object" || value === null) return null;
  const record = value as Record<string, unknown>;
  const scores = {} as PhotoScores;
  for (const category of PHOTO_CATEGORIES) {
    const score = record[category.id];
    if (typeof score !== "number" || !Number.isFinite(score)) return null;
    scores[category.id] = clamp01(score);
  }
  return scores;
}

/** The JSON schema the model answers in: one score for each category, nothing else. */
export const PHOTO_SCORES_SCHEMA = {
  type: "object",
  properties: Object.fromEntries(PHOTO_CATEGORIES.map(category => [category.id, { type: "number", description: `0 to 1: ${category.label}` }])),
  required: PHOTO_CATEGORIES.map(category => category.id),
  additionalProperties: false,
} as const;

/** A photo the browser may send: a JPEG data URL of a sensible size. */
export function isCheckablePhoto(value: unknown): value is string {
  return typeof value === "string" && value.length <= PHOTO_CHECK_MAX_CHARS && /^data:image\/jpeg;base64,[A-Za-z0-9+/]+=*$/.test(value);
}
