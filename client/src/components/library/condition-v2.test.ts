import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Router } from "wouter";
import { findCondition } from "@/lib/library";
import { readLibraryState } from "@/lib/library-store";
import { ConditionBento, hasVersionTwo } from "./ConditionBento";
import ConditionPage from "./ConditionPage";

// The Ischaemic stroke page has a Version 2 ("A · Bento, continued from the Brain page"), reached by
// a button at the top right; the other condition pages do not.

const ischaemic = findCondition("stroke", "ischaemic")!;
const words = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ");
const inRouter = (child: ReturnType<typeof createElement>) => renderToStaticMarkup(createElement(Router, { ssrPath: "/stroke/ischaemic" }, child));

describe("Version 2 of the Ischaemic stroke page", () => {
  it("is offered on Ischaemic stroke only, by a button in the page's header", () => {
    expect(hasVersionTwo(ischaemic)).toBe(true);
    expect(hasVersionTwo(findCondition("stroke", "haemorrhagic")!)).toBe(false);
    const html = inRouter(createElement(ConditionPage, { place: ischaemic }));
    expect(html).toMatch(/class="lib-condition-actions"><button[^>]*class="lib-version-switch"[^>]*>Switch to Version 2<\/button>/);
    expect(inRouter(createElement(ConditionPage, { place: findCondition("stroke", "haemorrhagic")! }))).not.toContain("Switch to Version");
  });

  it("puts the first Understand piece in the large tile, the others small, and the outside resources in a strip", () => {
    const content = ischaemic.condition.content!;
    const html = inRouter(createElement(ConditionBento, {
      place: ischaemic, state: readLibraryState(null), onSwitch: () => {},
      slots: { sources: createElement("section", { id: "sources" }, "Trusted sources"), stories: null, ask: null, related: null, footer: "Footer", purpose: () => "" },
    }));
    const text = words(html);
    expect(text).toContain("Switch to Version 1");
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
