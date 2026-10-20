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

/** The groups whose own pieces have pictures drawn for them: the Dementia purples and the movement blues. */
export type LightTheme = "memory" | "movement";
const THEMES: Record<string, LightTheme> = { dementia: "memory", parkinsons: "movement" };
export const themeOf = (groupId: string): LightTheme | undefined => THEMES[groupId];

type Place = { section: { hue: { tint: string; ink: string } }; group: { id: string } };

/**
 * The palette for a condition's pages, or none for stroke (which keeps its deep purple header). A group
 * on the Brain page uses its card's colours; any other group uses its section's colour.
 */
export function paletteFor(place: Place): ThemePalette | undefined {
  if (place.group.id === "stroke") return undefined;
  const own = BRAIN_PALETTES[place.group.id];
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
