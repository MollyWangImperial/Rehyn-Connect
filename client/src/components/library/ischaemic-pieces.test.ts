import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Router } from "wouter";
import { ischaemicMedia } from "@/content/ischaemic-media";
import { newsExtrasFor } from "@/content/ischaemic-news";
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
      // A feature can carry a headline of its own in place of the piece's title.
      const learn = learnArticle(item);
      expect(text, item.id).toContain((learn && newsExtrasFor(item.id, learn.id)?.headline) ?? item.title);
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
    expect(render("fatigue")).toContain('class="lib-page lib-news"');
    expect(fatigue.indexOf("Your energy diary")).toBeLessThan(fatigue.indexOf("What helps now"));
    const types = words(render("types"));
    expect(types).toContain("Pick one to see it");
    expect(types).toContain("Quick check");
    expect(types).toContain("Sources");
    expect(types).toContain("More in Understand");
    expect(learnArticle(findItem("stroke", "ischaemic", "types")!.item)?.id).toBe("isch-types");
  });

  it("gives Why it happened to me a picture of its own, with checked figures and an AF chart", () => {
    const html = render("why-me");
    const text = words(html);
    expect(text).toContain("Three roads to a blockage");
    expect(html).toContain('class="lib-why-hero"');
    for (const road of ["Narrowed arteries", "Tiny vessels deep in the brain", "The heart"]) expect(text).toContain(road);
    expect(text).toContain("About half");
    expect(text).toContain("An irregular heartbeat raises the odds");
    expect(html).toContain('id="lib-news-s-2"');
  });

  it("gives TIA, ischaemic, haemorrhagic a picture for each word, a 100-square chart and a TIA timeline", () => {
    const html = render("types");
    const text = words(html);
    expect(text).toContain("Three words from the ward");
    expect(html).toContain('class="lib-types-hero"');
    for (const word of ["Ischaemic", "Haemorrhagic", "TIA"]) expect(text).toContain(word);
    expect(html.split('class="lib-news-chart lib-waffle"').length - 1).toBe(1);
    expect(html.match(/<rect[^>]*rx="4" fill="#(2F6851|C7553E|7A2E2E)"/g)?.length).toBe(100);
    expect(text).toContain("Fully gone within 24 hours");
  });

  it("gives The scans and tests you had a scanner, the hospital clock and the neck-artery ring", () => {
    const html = render("scans");
    const text = words(html);
    expect(text).toContain("The first day, test by test");
    expect(html).toContain('class="lib-scans-hero"');
    for (const step of ["Within 1 hour of arriving", "Within 4 hours", "After 24 hours, if effects remain"]) expect(text).toContain(step);
    expect(text).toContain("Up to 15 in 100");
    expect(text).not.toContain("around 15 in every 100 ischaemic");
  });

  it("gives every Ischaemic stroke card a feature of its own: a picture, an interactive or a chart no other card has", () => {
    const seen = new Set<string>();
    for (const { item } of own) {
      const learn = learnArticle(item);
      const extras = learn && newsExtrasFor(item.id, learn.id);
      expect(extras, item.id).toBeDefined();
      const own = [extras!.figure?.art === "custom" ? extras!.figure.id : extras!.figure?.art, ...Object.values(extras!.inserts ?? {})].filter(Boolean) as string[];
      expect(own.length + Object.keys(extras!.charts ?? {}).length, item.id).toBeGreaterThan(0);
      for (const piece of own) { expect(seen.has(piece), `${item.id}: ${piece}`).toBe(false); seen.add(piece); }
      expect(words(render(item.id)), item.id).toContain(extras!.headline);
    }
  });

  it("reads each written answer as a feature, with numbered references beside the words", () => {
    const html = render("what-happens");
    const text = words(html);
    expect(html).toContain('class="lib-page lib-news"');
    expect(text).toContain("A blocked supply line");
    expect(text).toContain("Most strokes are caused by a blockage");
    expect(html).toContain('href="#ref-5"');
    expect(html).toContain('id="ref-5"');
    expect(html).toContain('class="lib-news-notes"');
    expect(text).toContain("Take this to your next appointment");
  });

  it("finishes every chapter of the stories on the page", () => {
    for (const story of storiesFor(page.condition)) for (const chapter of story.chapters) expect(chapter.paragraphs.length, `${story.id} ${chapter.id}`).toBeGreaterThan(0);
    expect(findStory("rose")?.chapters[0]?.paragraphs.join(" ")).toContain("birthday card");
  });

  it("makes the stroke passport and the research real", () => {
    const sources = page.condition.content!.sources;
    expect(sources.find(source => source.tool === "stroke-passport")).toBeDefined();
    expect(sources.find(source => source.name === "Intercollegiate Stroke Working Party")?.url).toBe("https://www.strokeguideline.org/");
  });
});
