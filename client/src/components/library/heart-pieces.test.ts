import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Router } from "wouter";
import { newsExtrasFor } from "@/content/ischaemic-news";
import { conditionItems, findCondition, findItem, isReadable, learnArticle } from "@/lib/library";
import ItemPage from "./ItemPage";

// The Heart & lungs pages, built the same way as the Brain pages and in the colours of their own card:
// every piece opens a checked answer as a feature with a picture of its own; Watch & listen and the
// stories are real videos.

const words = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ");
const PAGES: [string, string, string][] = [
  ["blood-pressure", "high-blood-pressure", "#B03A3A"],
  ["heart-attack", "heart-attack", "#9C2F55"],
  ["heart-attack", "angina", "#9C2F55"],
  ["heart-rhythm", "atrial-fibrillation", "#B8562A"],
  ["long-term-lung", "copd", "#2B6C8F"],
  ["long-term-lung", "asthma", "#2B6C8F"],
  ["sleep-breathing", "sleep-apnoea", "#4A4F9C"],
  // Diabetes & metabolism, built the same way.
  ["diabetes", "prediabetes", "#A15C0B"],
  ["diabetes", "type-1", "#A15C0B"],
  ["diabetes", "type-2", "#A15C0B"],
  ["thyroid", "underactive", "#2E7A6B"],
  ["thyroid", "overactive", "#2E7A6B"],
  // Bones, joints & muscles.
  ["arthritis", "osteoarthritis", "#1F6B64"],
  ["arthritis", "rheumatoid", "#1F6B64"],
  ["bone-health", "osteoporosis", "#8A6A2E"],
  ["back-neck", "back-pain", "#3D5A8C"],
  // Cancer, Mind and Kidneys, liver & digestion.
  ["anxiety", "anxiety", "#2A7383"],
  ["depression", "depression", "#35458C"],
  ["depression", "after-stroke", "#35458C"],
  ["sleep", "insomnia", "#5B4A9A"],
  ["common-cancers", "breast", "#963A66"],
  ["common-cancers", "bowel", "#963A66"],
  ["common-cancers", "prostate", "#963A66"],
  ["after-treatment", "cancer-fatigue", "#A9553A"],
  ["kidneys", "chronic-kidney-disease", "#4F6A14"],
  ["liver", "fatty-liver", "#93402F"],
  ["gut", "ibs", "#82508A"],];

describe("the Heart & lungs pages", () => {
  for (const [groupId, conditionId, ink] of PAGES) {
    const page = findCondition(groupId, conditionId)!;
    const own = conditionItems(page.condition).filter(({ item }) => !item.url);
    const render = (itemId: string) => renderToStaticMarkup(createElement(Router, { ssrPath: `/${groupId}/${conditionId}/${itemId}` }, createElement(ItemPage, { place: findItem(groupId, conditionId, itemId)! })));

    it(`${conditionId}: opens every piece as a feature in its card's colours, with a picture of its own`, () => {
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
        const html = render(item.id);
        expect(html, item.id).toContain('class="lib-page lib-news is-light"');
        expect(html, item.id).toContain(`--t-ink:${ink}`);
        const text = words(html);
        expect(text, item.id).not.toMatch(/coming soon/i);
        expect(text, item.id).toContain(extras!.headline);
        // The pull quote is the answer's own words (it may stop before the end of the sentence).
        if (extras!.pullQuote) expect(JSON.stringify(learn), item.id).toContain(extras!.pullQuote.replace(/\.$/, ""));
        // Like the stroke features: a numbered source beside every paragraph and every "What helps" line,
        // and something to try beside the quick check.
        const refs = extras!.sectionRefs!;
        expect(refs, item.id).toHaveLength(learn.sections.length);
        learn.sections.forEach((section, at) => {
          expect(refs[at], `${item.id} section ${at}`).toHaveLength(section.paragraphs.length);
          for (const numbers of refs[at]) {
            expect(numbers.length, `${item.id} section ${at}`).toBeGreaterThan(0);
            for (const number of numbers) expect(number >= 1 && number <= learn.sources.length, `${item.id} ref ${number}`).toBe(true);
          }
        });
        expect(extras!.helpRefs, item.id).toHaveLength(learn.helps.length);
        for (const numbers of extras!.helpRefs!) for (const number of numbers) expect(number >= 1 && number <= learn.sources.length, `${item.id} help ref ${number}`).toBe(true);
        expect(learn.interactive, item.id).toBeDefined();
        expect(html, item.id).toContain('class="lib-news-ref"');
      }
      expect(new Set(pictures).size, conditionId).toBe(pictures.length);
    });

    it(`${conditionId}: lists real videos and real people's stories`, () => {
      const content = page.condition.content!;
      for (const item of content.watch) expect(item.url, item.id).toMatch(/^https:\/\/www\.youtube\.com\/watch\?v=/);
      expect(content.videoStories?.length).toBe(3);
    });
  }
});
