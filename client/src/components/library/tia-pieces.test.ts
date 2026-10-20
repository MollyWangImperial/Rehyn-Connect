import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Router } from "wouter";
import { newsExtrasFor } from "@/content/ischaemic-news";
import { conditionItems, findCondition, findItem, isReadable, learnArticle } from "@/lib/library";
import ItemPage from "./ItemPage";

// The TIA page, built the same way as Ischaemic stroke: every piece opens a checked answer as a
// feature with a picture, interactive or chart of its own; Watch & listen and the stories are real videos.

const words = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ");
const page = findCondition("stroke", "tia")!;
const content = page.condition.content!;
const own = conditionItems(page.condition).filter(({ item }) => !item.url);
const render = (itemId: string) => {
  const place = findItem("stroke", "tia", itemId)!;
  return renderToStaticMarkup(createElement(Router, { ssrPath: `/stroke/tia/${itemId}` }, createElement(ItemPage, { place })));
};

describe("the TIA page's pieces", () => {
  it("opens every piece as a feature of a checked answer, with nothing coming soon", () => {
    expect(own.length).toBeGreaterThan(8);
    for (const { item } of own) {
      expect(isReadable(item), item.id).toBe(true);
      const learn = learnArticle(item)!;
      const extras = newsExtrasFor("tia", item.id, learn.id);
      expect(extras, item.id).toBeDefined();
      expect(extras!.figure || extras!.inserts || extras!.charts, item.id).toBeTruthy();
      const html = render(item.id);
      expect(html, item.id).toContain('class="lib-page lib-news"');
      const text = words(html);
      expect(text, item.id).not.toMatch(/coming soon/i);
      expect(text, item.id).toContain(extras!.headline);
    }
  });

  it("gives each TIA piece a picture of its own", () => {
    const pieces = own.map(({ item }) => {
      const extras = newsExtrasFor("tia", item.id, learnArticle(item)!.id)!;
      const figure = extras.figure;
      return figure?.art === "custom" ? figure.id : figure ? `${figure.art}:${item.id}` : extras.inserts?.[0] ?? item.id;
    });
    expect(new Set(pieces).size).toBe(pieces.length);
  });

  it("keeps the FAST words as the NHS gives them, and lists real videos and stories", () => {
    expect(words(render("fast"))).toContain("Call 999");
    for (const item of content.watch) expect(item.url, item.id).toMatch(/^https:\/\/www\.youtube\.com\/watch\?v=/);
    expect(content.videoStories?.length).toBe(3);
  });
});
