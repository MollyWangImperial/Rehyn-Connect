import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Router } from "wouter";
import { librarySections } from "@/content/library";
import { hasBento } from "./SectionBento";
import SectionPage from "./SectionPage";

// The Brain & nervous system page as a bento: one group large, the rest small; the conditions are
// links only in the large tile. The other sections keep their plain group grid.

const render = (id: string) => {
  const section = librarySections.find(candidate => candidate.id === id)!;
  return renderToStaticMarkup(createElement(Router, { ssrPath: `/${id}` }, createElement(SectionPage, { section })));
};
const tiles = (html: string, kind: string) => html.split(`class="lib-bento-tile ${kind}`).slice(1).map(part => part.split("</article>")[0]);

describe("the Brain & nervous system bento", () => {
  it("is on for every section", () => {
    expect(librarySections.filter(hasBento).map(section => section.id)).toEqual(librarySections.map(section => section.id));
    for (const section of librarySections) expect(render(section.id), section.id).toContain("lib-bento-hero");
  });

  it("opens Cancer & recovery with the common cancers large and its five other groups small", () => {
    const html = render("cancer-recovery");
    const [feature] = tiles(html, "is-feature");
    expect(feature).toContain(">Common cancers</h2>");
    expect(feature).toContain('href="/common-cancers/breast"');
    expect(tiles(html, "is-small")).toHaveLength(5);
    expect(html).toContain("lib-bento is-five");
  });

  it("opens Mind & mood with Depression large and its six other groups small", () => {
    const html = render("mind-mood");
    expect(tiles(html, "is-small")).toHaveLength(6);
    expect(html).toContain("lib-bento is-six");
  });

  it("opens Kidneys, liver & digestion with Kidneys large and its five other groups small", () => {
    const html = render("kidneys-liver-digestion");
    const [feature] = tiles(html, "is-feature");
    expect(feature).toContain(">Kidneys</h2>");
    expect(tiles(html, "is-small")).toHaveLength(5);
    expect(html).toContain("lib-bento is-five");
  });

  it("opens Bones, joints & muscles with Arthritis large and its five other groups small", () => {
    const html = render("bones-joints-muscles");
    const [feature] = tiles(html, "is-feature");
    expect(feature).toContain(">Arthritis</h2>");
    expect(tiles(html, "is-small")).toHaveLength(5);
    expect(html).toContain("lib-bento is-five");
  });

  it("opens Diabetes & metabolism with Diabetes large and its five other groups small", () => {
    const html = render("diabetes-metabolism");
    const [feature] = tiles(html, "is-feature");
    expect(feature).toContain(">Diabetes</h2>");
    expect(feature).toContain('href="/diabetes/type-2"');
    expect(tiles(html, "is-small")).toHaveLength(5);
  });

  it("opens Heart & lungs with Blood pressure large and in its own pale colour", () => {
    const html = render("heart-lungs");
    const [feature] = tiles(html, "is-feature");
    expect(feature).toContain(">Blood pressure</h2>");
    expect(feature).toContain("is-light");
    expect(feature).toContain('href="/blood-pressure/high-blood-pressure"');
    expect(tiles(html, "is-small")).toHaveLength(4);
    expect(html).toContain("lib-bento is-few");
  });

  it("opens with Stroke large, its conditions as links, and every other group small", () => {
    const html = render("brain-nervous-system");
    const [feature] = tiles(html, "is-feature");
    expect(feature).toContain(">Stroke</h2>");
    expect(feature).toContain("Most visited");
    for (const id of ["ischaemic", "haemorrhagic", "tia", "under-50"]) expect(feature).toContain(`href="/stroke/${id}"`);
    const small = tiles(html, "is-small");
    expect(small).toHaveLength(7);
    for (const tile of small) {
      expect(tile).not.toContain("<a ");
      expect(tile).toMatch(/<button[^>]*class="lib-bento-pick"[^>]*aria-label="Show [^"]+ in the large tile"/);
    }
    expect(html).toContain("Not sure which group?");
    // The header shows the section's short facts where it has them, and its counts otherwise.
    const brain = librarySections.find(section => section.id === "brain-nervous-system")!;
    const header = html.split('class="lib-bento-stats"')[1].split("</div>")[0];
    if (brain.facts) for (const fact of brain.facts) expect(header).toContain(fact.replace(/'/g, "&#x27;"));
    else {
      expect(header).toContain(`${brain.groups.length} groups`);
      expect(header).toContain(`${brain.groups.reduce((sum, group) => sum + group.conditions.length, 0)} conditions`);
    }
  });
});
