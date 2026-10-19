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
  it("is on for the Brain section only", () => {
    expect(librarySections.filter(hasBento).map(section => section.id)).toEqual(["brain-nervous-system"]);
    const heart = render("heart-lungs");
    expect(heart).toContain("lib-group");
    expect(heart).not.toContain("lib-bento");
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
