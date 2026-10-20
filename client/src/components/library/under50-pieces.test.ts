import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Router } from "wouter";
import { newsExtrasFor } from "@/content/ischaemic-news";
import { conditionItems, findCondition, findItem, isReadable, learnArticle } from "@/lib/library";
import ItemPage from "./ItemPage";

// The Stroke under 50 page, built the same way as Ischaemic stroke: every piece opens a checked answer
// as a feature with a picture, interactive or chart of its own; Watch & listen and the stories are real
// videos.

const words = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ");
const page = findCondition("stroke", "under-50")!;
const content = page.condition.content!;
const own = conditionItems(page.condition).filter(({ item }) => !item.url);
const render = (itemId: string) => {
  const place = findItem("stroke", "under-50", itemId)!;
  return renderToStaticMarkup(createElement(Router, { ssrPath: `/stroke/under-50/${itemId}` }, createElement(ItemPage, { place })));
};

describe("the Stroke under 50 page's pieces", () => {
  it("opens every piece as a feature of a checked answer, with nothing coming soon", () => {
    expect(own.length).toBe(13);
    for (const { item } of own) {
      expect(isReadable(item), item.id).toBe(true);
      const learn = learnArticle(item)!;
      const extras = newsExtrasFor("under-50", item.id, learn.id);
      expect(extras, item.id).toBeDefined();
      expect(extras!.figure || extras!.inserts || extras!.charts, item.id).toBeTruthy();
      const html = render(item.id);
      expect(html, item.id).toContain('class="lib-page lib-news"');
      const text = words(html);
      expect(text, item.id).not.toMatch(/coming soon/i);
      expect(text, item.id).toContain(extras!.headline);
    }
  });

  it("gives each of its own pieces a picture of its own, and its own answers", () => {
    const ownIds = ["why-young", "tests", "too-young", "recovery-shape", "hidden", "fitness", "work", "money", "children", "relationships"];
    const pictures = ownIds.map(id => {
      const figure = newsExtrasFor("under-50", id, "")!.figure;
      return figure?.art === "custom" ? figure.id : undefined;
    });
    expect(new Set(pictures).size).toBe(ownIds.length);
    for (const id of ownIds) expect(learnArticle(findItem("stroke", "under-50", id)!.item)?.id, id).toMatch(/^u50-/);
  });

  it("does not give a Statutory Sick Pay amount, and gives survivors' words as their own", () => {
    const money = words(render("money"));
    expect(money).not.toMatch(/£/);
    expect(money).toContain("28 weeks");
    expect(words(render("too-young"))).toContain("Maddy, who had a stroke at 24, says");
  });

  it("lists real videos and real people's stories", () => {
    for (const item of content.watch) expect(item.url, item.id).toMatch(/^https:\/\/www\.youtube\.com\/watch\?v=/);
    expect(content.videoStories?.length).toBe(3);
  });
});
