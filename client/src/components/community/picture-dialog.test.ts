import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { CommunityMemory, CommunitySettings } from "@/lib/community-store";
import type { Profile } from "@/lib/profile";

// What the dialog reads in each test: the stored record and the profile (a first visit by default).
const state = vi.hoisted(() => ({ memory: null as CommunityMemory | null, profile: null as Profile | null }));
vi.mock("@/lib/community-store", async importOriginal => {
  const actual = await importOriginal<typeof import("@/lib/community-store")>();
  return { ...actual, useCommunity: () => state.memory ?? actual.blankCommunityMemory() };
});
vi.mock("@/lib/profile", async importOriginal => {
  const actual = await importOriginal<typeof import("@/lib/profile")>();
  return { ...actual, useProfile: () => state.profile ?? actual.DEFAULT_PROFILE };
});

import { PORTRAIT_PRESETS } from "@/content/community-pictures";
import { blankCommunityMemory } from "@/lib/community-store";
import { DEFAULT_PROFILE } from "@/lib/profile";
import PictureDialog, { type PictureDialogProps } from "./PictureDialog";

afterEach(() => { state.memory = null; state.profile = null; });

const dialog = (props: Partial<PictureDialogProps> = {}) => renderToStaticMarkup(createElement(PictureDialog, { onClose: () => {}, ...props })).replace(/ data-loc="[^"]*"/g, "");
const words = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/\s+/g, " ");
/** The labels of the buttons pressed now. */
const pressedLabels = (html: string) => (html.match(/<button[^>]*aria-pressed="true"[^>]*>/g) ?? []).map(tag => tag.match(/aria-label="([^"]+)"/)?.[1] ?? "(words)");
function withSettings(patch: Partial<CommunitySettings>): CommunityMemory {
  const memory = blankCommunityMemory();
  memory.settings = { ...memory.settings, ...patch };
  return memory;
}

describe("Choose your picture", () => {
  it("offers a real photo, then the four styles, with the picture showing now picked", () => {
    const html = dialog();
    const text = words(html);
    expect(html).toMatch(/role="dialog"[^>]*aria-modal="true"/);
    expect(html).toMatch(/<h2[^>]*>Choose your picture<\/h2>/);
    expect(text).toContain("Use a real photo A photo of yourself helps friends know it's you. A JPG, PNG or WebP photo, up to 6 MB. Upload photo Take a photo");
    expect(text).toContain("or pick a style");
    for (const [style, tag] of [["Monogram", "Classic"], ["Portrait", "Natural"], ["Emblem", "Something you love"], ["Illustrated", "Playful"]]) expect(text).toContain(`${style} ${tag}`);
    // Four of each to begin with, and the ways to see more or make one's own.
    expect((html.match(/aria-label="Monogram on [^"]+"/g) ?? []).length).toBe(4);
    expect(text).toContain("More colours");
    expect(text).toContain("See all 16");
    expect((text.match(/Make your own/g) ?? []).length).toBe(2);
    expect(html).toContain('aria-label="Portrait, silver hair in a bun"');
    expect(html).toContain('aria-label="Cup of tea"');
    // The drawn face the preview starts with is picked: it is used as it is.
    expect(pressedLabels(html)).toEqual(["The drawn face you started with"]);
    expect(text).toContain("You can change this any time. Cancel Use this picture");
  });

  it("goes on to make a portrait one's own, and shows one the person made first in its row", () => {
    state.memory = withSettings({ picture: "portrait", look: { ...blankCommunityMemory().settings.look, portrait: PORTRAIT_PRESETS[1].look } });
    const preset = dialog();
    expect(pressedLabels(preset)).toEqual(["Portrait, short grey hair with glasses"]);
    expect(words(preset)).toContain("Cancel Continue");
    state.memory = withSettings({ picture: "portrait", look: { ...blankCommunityMemory().settings.look, portrait: { ...PORTRAIT_PRESETS[1].look, skin: "deep" } } });
    const own = dialog();
    expect(pressedLabels(own)).toEqual(["Your own portrait"]);
    expect(own.indexOf('aria-label="Your own portrait"')).toBeLessThan(own.indexOf('aria-label="Portrait, silver hair in a bun"'));
  });

  it("shows more colours and every emblem straight away when one of them is in use", () => {
    state.memory = withSettings({ picture: "initial", look: { ...blankCommunityMemory().settings.look, monogram: "rose", emblem: "crossword" } });
    const html = dialog();
    expect((html.match(/aria-label="Monogram on [^"]+"/g) ?? []).length).toBe(8);
    expect(pressedLabels(html)).toEqual(["Monogram on rose"]);
    expect(words(html)).toContain("Fewer colours");
    expect(html).toContain('aria-label="Crossword"');
    expect(words(html)).toContain("Show fewer");
  });

  it("offers the photo already in the profile", () => {
    state.profile = { ...DEFAULT_PROFILE, photo: "data:image/png;base64,iVBORw0KGgo=" };
    state.memory = withSettings({ picture: "photo" });
    const html = dialog();
    expect(pressedLabels(html)).toEqual(["Your photo"]);
    expect(words(html)).toContain("Your photo is kept on this device. You can upload or take another any time. Upload another Take a photo");
    expect(html).toContain('accept="image/jpeg,image/png,image/webp"');
  });
});

describe("making a picture one's own", () => {
  it("Make it yours: the portrait's hair, hairstyle, skin, top, background and glasses, with a preview", () => {
    state.memory = withSettings({ picture: "portrait", look: { ...blankCommunityMemory().settings.look, portrait: PORTRAIT_PRESETS[1].look } });
    const html = dialog({ start: "portrait" });
    const text = words(html);
    expect(html).toMatch(/<h2[^>]*>Make it yours<\/h2>/);
    expect(html).toContain('aria-label="Preview of your portrait"');
    expect(text).toContain("How it looks in lists");
    for (const group of ["Hair", "Hairstyle", "Skin", "Top", "Background", "Glasses"]) expect(html).toMatch(new RegExp(`<h3 class="cm-pic-group-title"[^>]*>${group}</h3>`));
    expect(pressedLabels(html)).toEqual(["Grey", "(words)", "Medium", "Navy", "Sand", "(words)"]);
    expect(html).toMatch(/aria-pressed="true">Short<\/button>/);
    expect(html).toMatch(/aria-pressed="true">Glasses<\/button>/);
    expect(text).toContain("Nothing here says anything about your health. Back Use this picture");
    expect(html).toContain('aria-label="Back to the styles"');
  });

  it("Make your own: the illustrated face's expression, hair, skin, clothes and background, and Surprise me", () => {
    const html = dialog({ start: "illustrated" });
    const text = words(html);
    expect(html).toMatch(/<h2[^>]*>Make your own<\/h2>/);
    expect(html).toContain('aria-label="Preview of your illustrated picture"');
    expect(text).toContain("Tap any option to try it. Nothing is saved until you choose “Use this picture”.");
    for (const group of ["Expression", "Hairstyle", "Hair colour", "Skin", "Clothes", "Background"]) expect(html).toMatch(new RegExp(`<h3 class="cm-pic-group-title"[^>]*>${group}</h3>`));
    expect(html).toContain('role="group" aria-label="Clothes colour"');
    expect(html).toMatch(/aria-pressed="true">Smile<\/button>/);
    expect(html).toMatch(/aria-pressed="true">Cardigan<\/button>/);
    expect(html).toMatch(/aria-pressed="true">Garden<\/button>/);
    expect(text).toContain("Surprise me Back Use this picture");
  });
});
