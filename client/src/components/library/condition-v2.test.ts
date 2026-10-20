import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Router } from "wouter";
import { librarySections } from "@/content/library";
import { findCondition } from "@/lib/library";
import { readLibraryState } from "@/lib/library-store";
import { ConditionBento } from "./ConditionBento";
import ConditionPage from "./ConditionPage";

// Every written condition page uses one layout ("A · Bento, continued from the Brain page"). There is
// no older version and no switch between versions. Groups with a pale card keep its colour.

const ischaemic = findCondition("stroke", "ischaemic")!;
const words = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ");
const inRouter = (child: ReturnType<typeof createElement>, path = "/stroke/ischaemic") => renderToStaticMarkup(createElement(Router, { ssrPath: path }, child));

describe("the condition pages", () => {
  it("all use the bento layout, with no switch between versions", () => {
    let written = 0;
    for (const section of librarySections) for (const group of section.groups) for (const condition of group.conditions) {
      if (!condition.content || !condition.summary) continue;
      written++;
      const place = findCondition(group.id, condition.id)!;
      const html = inRouter(createElement(ConditionPage, { place }), `/${group.id}/${condition.id}`);
      expect(html, `${group.id}/${condition.id}`).toContain("lib-v2-hero");
      expect(html, `${group.id}/${condition.id}`).not.toContain("Switch to Version");
    }
    expect(written).toBeGreaterThan(20);
  });

  it("keeps the pale colours of the Dementia and Parkinson's cards", () => {
    const memory = inRouter(createElement(ConditionPage, { place: findCondition("dementia", "alzheimers")! }), "/dementia/alzheimers");
    expect(memory).toContain("lib-v2 is-light is-memory");
    const movement = inRouter(createElement(ConditionPage, { place: findCondition("parkinsons", "essential-tremor")! }), "/parkinsons/essential-tremor");
    expect(movement).toContain("lib-v2 is-light is-movement");
    expect(inRouter(createElement(ConditionPage, { place: ischaemic }))).not.toContain("is-light");
  });

  it("opens a story-led page with its story", () => {
    const html = inRouter(createElement(ConditionPage, { place: findCondition("parkinsons", "parkinsons-disease")! }), "/parkinsons/parkinsons-disease");
    expect(html).toContain('id="story"');
    expect(html).toContain("lib-v2-hero");
  });

  it("puts the first Understand piece in the large tile, the others small, and the outside resources in a strip", () => {
    const content = ischaemic.condition.content!;
    const html = inRouter(createElement(ConditionBento, {
      place: ischaemic, state: readLibraryState(null),
      slots: { sources: createElement("section", { id: "sources" }, "Trusted sources"), stories: null, ask: null, related: null, footer: "Footer", purpose: () => "" },
    }));
    const text = words(html);
    const ours = content.understand.filter(item => !item.url);
    const outside = content.understand.filter(item => item.url);
    const feature = html.split('class="lib-v2-tile is-feature')[1].split("</article>")[0];
    expect(feature).toContain(ours[0].title);
    expect(feature).toContain(`href="/stroke/ischaemic/${ours[0].id}"`);
    expect(html.split('class="lib-v2-tile is-small').length - 1).toBe(ours.length - 1);
    for (const item of outside) expect(html).toContain(`href="${item.url}"`);
    for (const item of [...content.recover, ...content.liveWell, ...content.watch]) expect(html).toContain(item.url ? `href="${item.url}"` : `href="/stroke/ischaemic/${item.id}"`);
    expect(text).toContain("Trusted sources");
  });
});
