import type { CSSProperties } from "react";

// Every condition page, and every feature opened from it, takes its colours from its group's card on the
// section page: a light header with dark words, and tiles, cards and bands in the same family. Stroke
// keeps its own deep purple. Groups without a card of their own (sections without a bento page) use
// their section's colour. The rules that use these colours are in library-condition-v2.css and
// library-news.css (`.is-light`).

/** A card's colours: the strong one, the pale one, the dark words and the softer words. */
export type ThemePalette = { ink: string; tint: string; text: string; muted: string };

/** The Brain & nervous system groups, as their cards on the Brain page show them (SectionBento.tsx). */
export const BRAIN_PALETTES: Record<string, ThemePalette> = {
  stroke: { ink: "#4A3F9C", tint: "#EEEBFA", text: "#2F2770", muted: "#4D4580" },
  dementia: { ink: "#6A3E9E", tint: "#F1E9FB", text: "#4E2C7A", muted: "#5B4A72" },
  parkinsons: { ink: "#34509E", tint: "#E7ECFB", text: "#233A78", muted: "#3E4C78" },
  "multiple-sclerosis": { ink: "#1F6476", tint: "#E4F1F4", text: "#164E5C", muted: "#2F5C66" },
  epilepsy: { ink: "#A8402B", tint: "#FBEDE7", text: "#7E2F1F", muted: "#7A4535" },
  "brain-spinal-injury": { ink: "#3E4B5E", tint: "#ECEFF4", text: "#2C394C", muted: "#4A5568" },
  headache: { ink: "#8A5A12", tint: "#FBF0DC", text: "#6B450C", muted: "#6E5228" },
  nerves: { ink: "#4B7A2E", tint: "#EAF3E4", text: "#36591F", muted: "#46603A" },
};

/** The Heart & lungs groups, as their cards on the Heart page show them (SectionBento.tsx). */
export const HEART_PALETTES: Record<string, ThemePalette> = {
  "blood-pressure": { ink: "#B03A3A", tint: "#FBE9E7", text: "#7F2424", muted: "#7A4444" },
  "heart-attack": { ink: "#9C2F55", tint: "#F9E6EE", text: "#6E1F3C", muted: "#6E4655" },
  "heart-rhythm": { ink: "#B8562A", tint: "#FCEDE3", text: "#833A18", muted: "#7A4A33" },
  "long-term-lung": { ink: "#2B6C8F", tint: "#E3F0F7", text: "#1C4E6B", muted: "#3A5A6B" },
  "sleep-breathing": { ink: "#4A4F9C", tint: "#ECEDFA", text: "#30347A", muted: "#4A4E7A" },
};
/** The Diabetes & metabolism groups, as their cards on the Diabetes page show them (SectionBento.tsx). */
export const METABOLISM_PALETTES: Record<string, ThemePalette> = {
  diabetes: { ink: "#A15C0B", tint: "#FCEFD9", text: "#6E3F06", muted: "#735033" },
  thyroid: { ink: "#2E7A6B", tint: "#E3F3EF", text: "#1D5549", muted: "#3F665D" },
  cholesterol: { ink: "#A0394F", tint: "#FAE8EC", text: "#722438", muted: "#714A53" },
  weight: { ink: "#557A1E", tint: "#EDF4DF", text: "#3B5512", muted: "#58663F" },
  hormones: { ink: "#6A4C9C", tint: "#F0EAF9", text: "#4A3278", muted: "#5E5278" },
  "gout-vitamins": { ink: "#2F6690", tint: "#E5EFF7", text: "#1F4A6B", muted: "#425B70" },
};
/** The Bones, joints & muscles groups, as their cards on the Bones page show them (SectionBento.tsx). */
export const BONES_PALETTES: Record<string, ThemePalette> = {
  arthritis: { ink: "#1F6B64", tint: "#E4F3F1", text: "#164E49", muted: "#3C5F5B" },
  "bone-health": { ink: "#8A6A2E", tint: "#F6EFDF", text: "#5E4818", muted: "#6B5A3C" },
  "back-neck": { ink: "#3D5A8C", tint: "#E8EEF8", text: "#2A4069", muted: "#4A5A76" },
  muscles: { ink: "#A2483A", tint: "#FAEAE5", text: "#73291D", muted: "#714E47" },
  "joint-replacement": { ink: "#4C6B7A", tint: "#E6EFF3", text: "#304C59", muted: "#4B5E67" },
  "feet-tendons": { ink: "#6E6A1E", tint: "#F3F2DC", text: "#4C4910", muted: "#615E3E" },
};
/** The Cancer & recovery groups, as their cards on the Cancer page show them (SectionBento.tsx). */
export const CANCER_PALETTES: Record<string, ThemePalette> = {
  "common-cancers": { ink: "#963A66", tint: "#F9E8F0", text: "#6A2246", muted: "#6E4A5C" },
  "after-treatment": { ink: "#A9553A", tint: "#FBEDE6", text: "#773620", muted: "#755246" },
  "blood-cancers": { ink: "#A3333F", tint: "#FAE7E8", text: "#74202A", muted: "#734A4F" },
  "womens-cancers": { ink: "#7E4594", tint: "#F4EAF7", text: "#58296B", muted: "#685074" },
  "other-cancers": { ink: "#3F6188", tint: "#E6EDF6", text: "#2A4464", muted: "#4A5A70" },
  "advanced-cancer": { ink: "#5E6B3A", tint: "#EFF2E4", text: "#414C22", muted: "#5A6046" },
};
/** The Mind & mood groups, as their cards on the Mind page show them (SectionBento.tsx). */
export const MIND_PALETTES: Record<string, ThemePalette> = {
  depression: { ink: "#35458C", tint: "#E8EBF8", text: "#232F6B", muted: "#4A5378" },
  anxiety: { ink: "#2A7383", tint: "#E2F1F4", text: "#1C5260", muted: "#40636B" },
  sleep: { ink: "#5B4A9A", tint: "#EEEAF8", text: "#3D2F75", muted: "#574E78" },
  "bipolar-psychosis": { ink: "#8A3F7A", tint: "#F7E9F4", text: "#622A57", muted: "#6B5066" },
  "stress-grief": { ink: "#4F6E8A", tint: "#E8EEF4", text: "#334E66", muted: "#4F5F6E" },
  alcohol: { ink: "#A0522D", tint: "#FAECE3", text: "#713517", muted: "#73533F" },
  "eating-disorders": { ink: "#2E7D5B", tint: "#E3F3EB", text: "#1D5940", muted: "#40654F" },
};
/** The Kidneys, liver & digestion groups, as their cards on that page show them (SectionBento.tsx). */
export const DIGESTION_PALETTES: Record<string, ThemePalette> = {
  kidneys: { ink: "#4F6A14", tint: "#EEF3DF", text: "#36490A", muted: "#56603C" },
  liver: { ink: "#93402F", tint: "#F8E9E4", text: "#69281B", muted: "#6E4D45" },
  gut: { ink: "#82508A", tint: "#F4EAF5", text: "#5C3162", muted: "#6A5270" },
  bladder: { ink: "#2F6F8F", tint: "#E4EFF6", text: "#1F4E68", muted: "#435E70" },
  stomach: { ink: "#B0612A", tint: "#FBEDE2", text: "#7B3F17", muted: "#755643" },
  ibd: { ink: "#A8466B", tint: "#F9E9F0", text: "#77294A", muted: "#704C5C" },
};
const GROUP_PALETTES: Record<string, ThemePalette> = { ...BRAIN_PALETTES, ...HEART_PALETTES, ...METABOLISM_PALETTES, ...BONES_PALETTES, ...CANCER_PALETTES, ...MIND_PALETTES, ...DIGESTION_PALETTES };

/** The groups whose own pieces have pictures drawn for them: the Dementia purples and the movement blues. */
export type LightTheme = "memory" | "movement";
const THEMES: Record<string, LightTheme> = { dementia: "memory", parkinsons: "movement" };
export const themeOf = (groupId: string): LightTheme | undefined => THEMES[groupId];

type Place = { section: { hue: { tint: string; ink: string } }; group: { id: string } };

/**
 * The palette for a condition's pages, or none for stroke (which keeps its deep purple header). A group
 * on a bento section page (Brain, Heart) uses its card's colours; any other group its section's colour.
 */
export function paletteFor(place: Place): ThemePalette | undefined {
  if (place.group.id === "stroke") return undefined;
  const own = GROUP_PALETTES[place.group.id];
  if (own) return own;
  const { ink, tint } = place.section.hue;
  return { ink, tint, text: mix(ink, "#000000", 0.25), muted: mix(ink, "#5A5A5A", 0.35) };
}

const hex = (colour: string) => colour.replace("#", "").match(/../g)!.map(part => parseInt(part, 16));
/** A colour `amount` of the way from `a` to `b`. */
export function mix(a: string, b: string, amount: number) {
  const [x, y] = [hex(a), hex(b)];
  return `#${x.map((value, index) => Math.round(value + (y[index] - value) * amount).toString(16).padStart(2, "0")).join("")}`;
}
const rgb = (colour: string) => hex(colour).join(",");

/** The CSS variables a light-themed page or feature reads (--t-…), from its palette. */
export function themeVars(palette: ThemePalette): CSSProperties {
  return {
    "--t-ink": palette.ink,
    "--t-tint": palette.tint,
    "--t-tint-rgb": rgb(palette.tint),
    "--t-text": mix(palette.text, "#000000", 0.2),
    "--t-body": palette.text,
    "--t-muted": palette.muted,
    "--t-soft": mix(palette.ink, "#FFFFFF", 0.35),
    "--t-line": mix(palette.tint, palette.ink, 0.14),
    "--t-press": mix(palette.tint, palette.ink, 0.16),
    "--t-shadow": rgb(palette.ink),
    "--t-page": mix(palette.tint, "#FFFFFF", 0.6),
    "--t-on": mix(palette.tint, "#FFFFFF", 0.3),
    "--news-clay": palette.ink,
    "--news-forest": palette.text,
  } as CSSProperties;
}

/** Four tile colourings in the palette's family, for the bento's tiles. */
export const tileLooks = (palette: ThemePalette) => [
  { ink: palette.ink, tint: palette.tint, text: palette.text },
  { ink: palette.text, tint: mix(palette.tint, palette.ink, 0.08), text: mix(palette.text, "#000000", 0.2) },
  { ink: mix(palette.ink, "#FFFFFF", 0.18), tint: mix(palette.tint, "#FFFFFF", 0.4), text: palette.text },
  { ink: mix(palette.ink, palette.text, 0.5), tint: mix(palette.tint, palette.ink, 0.05), text: mix(palette.text, "#000000", 0.2) },
];

/** Four card backgrounds for Watch & listen, strong enough for white words. */
export const watchBackgrounds = (palette: ThemePalette) => [palette.ink, palette.text, mix(palette.ink, "#FFFFFF", 0.12), mix(palette.ink, palette.text, 0.5)];
