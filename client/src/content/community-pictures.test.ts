import { describe, expect, it } from "vitest";
import {
  DEFAULT_PICTURE_LOOK,
  EMBLEMS,
  ILLUSTRATED,
  ILLUSTRATED_KEYS,
  ILLUSTRATED_PRESETS,
  MONOGRAM_TONES,
  PICTURE_CHOICES,
  PORTRAIT,
  PORTRAIT_PRESETS,
  artUrl,
  illustratedSvg,
  pictureArt,
  pictureWords,
  portraitSvg,
  readPictureLook,
} from "./community-pictures";

const ids = (list: readonly { id: string }[]) => list.map(item => item.id);
/** Every drawing is shapes only: no text, script, links or handlers, and nothing from outside. */
const onlyShapes = (svg: string) => {
  expect(svg.startsWith("<rect")).toBe(true);
  expect(svg).not.toMatch(/<(script|text|a|image|foreignObject|use)\b|\son[a-z]+=|href|url\(|javascript:/i);
  for (const tag of svg.match(/<([a-z]+)/g) ?? []) expect(["<rect", "<path", "<circle", "<ellipse"]).toContain(tag);
};

describe("the pictures a person can show in My community", () => {
  it("has distinct choices in every list, and ready-made looks that the editors can make", () => {
    for (const list of [MONOGRAM_TONES, EMBLEMS, ...Object.values(PORTRAIT), ...Object.values(ILLUSTRATED)]) expect(new Set(ids(list)).size).toBe(list.length);
    expect(PICTURE_CHOICES).toEqual(["drawn", "photo", "initial", "portrait", "emblem", "illustrated"]);
    expect(EMBLEMS).toHaveLength(16);
    expect(PORTRAIT_PRESETS).toHaveLength(4);
    expect(ILLUSTRATED_PRESETS).toHaveLength(4);
    // A ready-made look reads back as itself: every part of it is one of the editor's choices.
    for (const preset of PORTRAIT_PRESETS) expect(readPictureLook({ portrait: preset.look }).portrait).toEqual(preset.look);
    for (const preset of ILLUSTRATED_PRESETS) expect(readPictureLook({ illustrated: preset.look }).illustrated).toEqual(preset.look);
    // Skin tones from light to deep in both styles, so everyone can draw themselves.
    expect(ids(PORTRAIT.skin)).toEqual(["light", "medium", "tan", "deep"]);
    expect(ids(ILLUSTRATED.skin)).toEqual(["light", "medium", "tan", "deep"]);
  });

  it("draws every choice with shapes only", () => {
    for (const preset of PORTRAIT_PRESETS) onlyShapes(portraitSvg(preset.look));
    for (const preset of ILLUSTRATED_PRESETS) onlyShapes(illustratedSvg(preset.look));
    for (const emblem of EMBLEMS) onlyShapes(emblem.svg);
    // Every option of every part, one at a time.
    for (const key of Object.keys(PORTRAIT) as (keyof typeof PORTRAIT)[]) {
      for (const option of PORTRAIT[key]) onlyShapes(portraitSvg({ ...DEFAULT_PICTURE_LOOK.portrait, [key]: option.id }));
    }
    for (const key of ILLUSTRATED_KEYS) {
      for (const option of ILLUSTRATED[key] as readonly { id: string }[]) onlyShapes(illustratedSvg({ ...DEFAULT_PICTURE_LOOK.illustrated, [key]: option.id }));
    }
    // Glasses show only when chosen; long hair falls behind the shoulders.
    const plain = { ...DEFAULT_PICTURE_LOOK.portrait, glasses: false };
    expect(portraitSvg({ ...plain, glasses: true }).length).toBeGreaterThan(portraitSvg(plain).length);
    expect(portraitSvg({ ...plain, hairStyle: "long" })).toContain("M36 96 L36 56");
  });

  it("reads a saved look field by field, keeping the rest and one order of keys", () => {
    expect(readPictureLook(null)).toBe(DEFAULT_PICTURE_LOOK);
    expect(JSON.stringify(readPictureLook({}))).toBe(JSON.stringify(DEFAULT_PICTURE_LOOK));
    const read = readPictureLook({ monogram: "rose", emblem: "nope", portrait: { skin: "deep", glasses: "yes" }, illustrated: { face: "wink", bg: "neon" } });
    expect(read.monogram).toBe("rose");
    expect(read.emblem).toBe(DEFAULT_PICTURE_LOOK.emblem);
    expect(read.portrait).toEqual({ ...DEFAULT_PICTURE_LOOK.portrait, skin: "deep" });
    expect(read.illustrated).toEqual({ ...DEFAULT_PICTURE_LOOK.illustrated, face: "wink" });
    expect(Object.keys(read.illustrated)).toEqual(ILLUSTRATED_KEYS);
  });

  it("says each picture in words, and makes drawings into images", () => {
    const look = { ...DEFAULT_PICTURE_LOOK, emblem: "tea" as const, monogram: "sage" as const };
    expect(pictureWords("drawn", look, "Z", false)).toBe("Your drawn face");
    expect(pictureWords("photo", look, "Z", true)).toBe("Your photo");
    expect(pictureWords("photo", look, "Z", false)).toBe("Your initial, Z");
    expect(pictureWords("initial", look, "Z", false)).toBe("Your initial, Z, on sage");
    expect(pictureWords("portrait", look, "Z", false)).toBe("Your portrait");
    expect(pictureWords("emblem", look, "Z", false)).toBe("Your emblem: a cup of tea");
    expect(pictureWords("illustrated", look, "Z", false)).toBe("Your illustrated picture");
    expect(pictureArt("photo", look)).toBeNull();
    expect(pictureArt("initial", look)).toBeNull();
    expect(pictureArt("emblem", look)).toBe(EMBLEMS.find(emblem => emblem.id === "tea")?.svg);
    const url = artUrl(pictureArt("portrait", look) ?? "");
    expect(url.startsWith("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22")).toBe(true);
    expect(artUrl(pictureArt("portrait", look) ?? "")).toBe(url);
  });
});
