import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Router } from "wouter";
import { newsExtrasFor } from "@/content/ischaemic-news";
import { conditionItems, findCondition, findItem, isReadable, learnArticle } from "@/lib/library";
import ItemPage from "./ItemPage";

// The Parkinson's & movement pages, built the same way as the stroke and dementia pages but in the light
// blues of their card: every piece opens a checked answer as a feature with a picture of its own; Watch &
// listen and the stories are real videos.

const words = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ");
const PAGES = ["parkinsons-disease", "essential-tremor", "dystonia"];
const render = (conditionId: string, itemId: string) => {
  const place = findItem("parkinsons", conditionId, itemId)!;
  return renderToStaticMarkup(createElement(Router, { ssrPath: `/parkinsons/${conditionId}/${itemId}` }, createElement(ItemPage, { place })));
};

describe("the Parkinson's & movement pages", () => {
  for (const conditionId of PAGES) {
    const page = findCondition("parkinsons", conditionId)!;
    const own = conditionItems(page.condition).filter(({ item }) => !item.url);

    it(`${conditionId}: opens every piece as a light-blue feature with a picture of its own`, () => {
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
        expect(html, item.id).toContain('class="lib-page lib-news is-light is-movement"');
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

  it("never presents alcohol as a treatment for tremor", () => {
    expect(words(render("essential-tremor", "alcohol"))).toContain("Do not use alcohol to treat your tremor");
  });
});
