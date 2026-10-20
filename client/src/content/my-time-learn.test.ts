import { describe, expect, it } from "vitest";
import { learnArticles, trustedPlaces } from "./my-time-learn";
import { splitSentences } from "@/lib/alira-read-aloud";

// The checked answers the Library opens (content/library.ts `learnId`).
describe("the checked answers", () => {
  it("gives every article a hook, a short answer, things that help and a source to check", () => {
    expect(new Set(learnArticles.map(article => article.id)).size).toBe(learnArticles.length);
    for (const article of learnArticles) {
      expect(article.question.endsWith("?"), article.id).toBe(true);
      expect(article.hook.length, article.id).toBeGreaterThan(30);
      expect(article.short.length, article.id).toBeGreaterThan(80);
      expect(article.sections.length, article.id).toBeGreaterThan(0);
      expect(article.helps.length, article.id).toBeGreaterThan(2);
      expect(article.sources.length, article.id).toBeGreaterThan(0);
      // GOV.UK sets the driving rules, so it is the source for them; NICE sets the national guidance on treatment.
      for (const source of article.sources) expect(source.url).toMatch(/^https:\/\/(www\.)?(stroke\.org\.uk|stroke\.org|nhs\.uk|gov\.uk|nice\.org\.uk)\//);
    }
    for (const place of trustedPlaces) expect(place.url).toMatch(/^https:\/\//);
  });

  it("splits what is read aloud into whole sentences", () => {
    expect(splitSentences("No. The fastest recovery comes first. Is there a deadline?")).toEqual(["No.", "The fastest recovery comes first.", "Is there a deadline?"]);
    expect(splitSentences("The note said, “For your garden.” She laughed")).toEqual(["The note said, “For your garden.”", "She laughed"]);
    expect(splitSentences("  ")).toEqual([]);
    for (const article of learnArticles) for (const section of article.sections) for (const paragraph of section.paragraphs) {
      expect(splitSentences(paragraph).join(" "), article.id).toBe(paragraph);
    }
  });
});
