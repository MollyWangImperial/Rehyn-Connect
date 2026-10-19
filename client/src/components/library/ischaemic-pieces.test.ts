import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Router } from "wouter";
import { ischaemicMedia } from "@/content/ischaemic-media";
import { learnArticles } from "@/content/my-time-learn";
import { conditionItems, findCondition, findItem, findStory, isReadable, itemMedia, learnArticle, storiesFor } from "@/lib/library";
import { splitSentences } from "@/lib/alira-read-aloud";
import ItemPage from "./ItemPage";

// The Ischaemic stroke page: nothing on it is "coming soon" any more. Every piece opens a checked
// answer, a narrated film, a conversation or a guide, with its sources.

const words = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ");
const page = findCondition("stroke", "ischaemic")!;
const own = conditionItems(page.condition).filter(({ item }) => !item.url);
const render = (itemId: string) => {
  const place = findItem("stroke", "ischaemic", itemId)!;
  return renderToStaticMarkup(createElement(Router, { ssrPath: `/stroke/ischaemic/${itemId}` }, createElement(ItemPage, { place })));
};

describe("the Ischaemic stroke page's pieces", () => {
  it("has every piece ready, with no 'coming soon' anywhere", () => {
    expect(own.length).toBeGreaterThan(15);
    for (const { item } of own) {
      expect(isReadable(item), item.id).toBe(true);
      const text = words(render(item.id));
      expect(text, item.id).not.toMatch(/coming soon/i);
      expect(text, item.id).toContain(item.title);
    }
  });

  it("links each film, conversation or guide, and every one is used", () => {
    const used = own.map(({ item }) => item.mediaId).filter(Boolean);
    expect(new Set(used)).toEqual(new Set(ischaemicMedia.map(piece => piece.id)));
    for (const { item } of own) if (item.mediaId) expect(itemMedia(item), item.id).toBeDefined();
    for (const piece of ischaemicMedia) {
      expect(piece.sources.length, piece.id).toBeGreaterThan(0);
      for (const source of piece.sources) expect(source.url, piece.id).toMatch(/^https:\/\/(www\.)?(stroke\.org\.uk|stroke\.org|nhs\.uk|gov\.uk)\//);
    }
  });

  it("keeps the narration in whole sentences Alira can read one at a time", () => {
    for (const piece of ischaemicMedia) {
      if (piece.kind === "film") for (const scene of piece.scenes) expect(splitSentences(scene.caption).join(" "), scene.title).toBe(scene.caption);
      if (piece.kind === "conversation") {
        expect(piece.note).toMatch(/composite/i);
        for (const line of piece.lines) expect(piece.speakers.some(speaker => speaker.id === line.who), line.text).toBe(true);
      }
      if (piece.kind === "breathing") expect(Math.min(...piece.lengths)).toBeGreaterThanOrEqual(5); // the NHS guide: at least five minutes
    }
  });

  it("gives the new answers something to try, a quick check and three things for the week", () => {
    const ids = own.map(({ item }) => item.learnId).filter((id): id is string => Boolean(id?.startsWith("isch-")));
    expect(ids.length).toBeGreaterThan(8);
    for (const id of ids) {
      const article = learnArticles.find(candidate => candidate.id === id)!;
      expect(article, id).toBeDefined();
      expect(article.quiz?.options.filter(option => option.right).length, id).toBe(1);
      expect(article.tryThisWeek.length, id).toBe(3);
    }
  });

  it("shows a film above its written answer, and the hands-on part inside it", () => {
    expect(render("fatigue")).toContain('aria-label="Play the film with narration"');
    const fatigue = words(render("fatigue"));
    expect(fatigue).toContain("Your energy diary");
    expect(fatigue.indexOf("Your energy diary")).toBeLessThan(fatigue.indexOf("The written answer"));
    const types = words(render("types"));
    expect(types).toContain("Pick one to see it");
    expect(types).toContain("Quick check");
    expect(types).toContain("Three things to try");
    expect(learnArticle(findItem("stroke", "ischaemic", "types")!.item)?.id).toBe("isch-types");
  });

  it("finishes every chapter of the stories on the page", () => {
    for (const story of storiesFor(page.condition)) for (const chapter of story.chapters) expect(chapter.paragraphs.length, `${story.id} ${chapter.id}`).toBeGreaterThan(0);
    expect(findStory("rose")?.chapters[0]?.paragraphs.join(" ")).toContain("birthday card");
  });

  it("makes the stroke passport and the research real", () => {
    const sources = page.condition.content!.sources;
    expect(sources.find(source => source.tool === "stroke-passport")).toBeDefined();
    expect(sources.find(source => source.name.startsWith("For the curious"))?.url).toBe("https://www.strokeguideline.org/");
  });
});
