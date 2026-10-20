import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Router } from "wouter";
import { newsExtrasFor } from "@/content/ischaemic-news";
import { conditionItems, findCondition, findItem, isReadable, learnArticle } from "@/lib/library";
import ItemPage from "./ItemPage";

// The Dementia & memory pages, built the same way as the stroke pages but in the light purples of their
// card: every piece opens a checked answer as a feature with a picture of its own; Watch & listen and the
// stories are real videos.

const words = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ");
const PAGES = ["alzheimers", "vascular", "lewy-body", "mild-cognitive-impairment"];
const render = (conditionId: string, itemId: string) => {
  const place = findItem("dementia", conditionId, itemId)!;
  return renderToStaticMarkup(createElement(Router, { ssrPath: `/dementia/${conditionId}/${itemId}` }, createElement(ItemPage, { place })));
};

describe("the Dementia & memory pages", () => {
  for (const conditionId of PAGES) {
    const page = findCondition("dementia", conditionId)!;
    const own = conditionItems(page.condition).filter(({ item }) => !item.url);

    it(`${conditionId}: opens every piece as a light-purple feature with a picture of its own`, () => {
      expect(own.length).toBeGreaterThan(10);
      const pictures: string[] = [];
      for (const { item } of own) {
        expect(isReadable(item), item.id).toBe(true);
        const learn = learnArticle(item)!;
        const extras = newsExtrasFor(conditionId, item.id, learn.id);
        expect(extras, item.id).toBeDefined();
        const figure = extras!.figure;
        expect(figure?.art, item.id).toBe("custom");
        if (figure?.art === "custom") pictures.push(figure.id);
        const html = render(conditionId, item.id);
        expect(html, item.id).toContain('class="lib-page lib-news is-memory"');
        const text = words(html);
        expect(text, item.id).not.toMatch(/coming soon/i);
        expect(text, item.id).toContain(extras!.headline);
      }
      expect(new Set(pictures).size, conditionId).toBe(pictures.length);
    });

    it(`${conditionId}: lists real videos and real people's stories`, () => {
      const content = page.condition.content!;
      for (const item of content.watch) expect(item.url, item.id).toMatch(/^https:\/\/www\.youtube\.com\/watch\?v=/);
      expect(content.videoStories?.length).toBe(3);
    });
  }

  it("never shows a test score, and gives no LPA fee amount", () => {
    expect(words(render("mild-cognitive-impairment", "tests"))).not.toMatch(/\b\d+\s*(out of|\/)\s*\d+/);
    expect(words(render("alzheimers", "planning"))).not.toMatch(/£\s?\d{2,3}\b(?!,)/);
  });
});
