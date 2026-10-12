import { describe, expect, it } from "vitest";
import { PERSON_IDS } from "./community-samples";
import { DAILY_QUESTIONS, dailyQuestion, isDailyPostId } from "./daily-questions";

describe("the Daily question", () => {
  it("is the same all day, changes at midnight, and goes round the whole list", () => {
    const morning = dailyQuestion(new Date(2026, 9, 12, 7, 0));
    const evening = dailyQuestion(new Date(2026, 9, 12, 23, 59));
    const tomorrow = dailyQuestion(new Date(2026, 9, 13, 0, 1));
    expect(evening).toEqual(morning);
    expect(morning).toMatchObject({ id: "daily-2026-10-12", dateLabel: "Monday 12 October", question: "Name a colour that sums up your mood today.", key: "colour" });
    expect(tomorrow.id).toBe("daily-2026-10-13");
    expect(tomorrow.question).toBe("Are you an early bird or a night owl?");
    const seen = new Set(Array.from({ length: DAILY_QUESTIONS.length }, (_, day) => dailyQuestion(new Date(2026, 9, 12 + day, 12)).question));
    expect(seen.size).toBe(DAILY_QUESTIONS.length);
  });

  it("has a key phrase, starters, a placeholder and eight answers from the community for each question", () => {
    for (const question of DAILY_QUESTIONS) {
      const whole = `${question.pre}${question.key}${question.post}`;
      expect(whole.length).toBeLessThan(80);
      expect(whole).toMatch(/[.?]$/);
      expect(question.key.trim().length).toBeGreaterThan(0);
      expect(question.starters.length).toBeGreaterThanOrEqual(3);
      expect(question.placeholder).toMatch(/…$/);
      expect(question.answers).toHaveLength(8);
      // Each of the eight example people answers once, so the window never shows the same person twice in a row.
      expect(new Set(question.answers.map(answer => answer.who)).size).toBe(8);
      for (const answer of question.answers) {
        expect(PERSON_IDS).toContain(answer.who);
        expect(answer.text.length).toBeLessThan(60);
        expect(answer.hearts).toBeGreaterThan(0);
        if (answer.tag) expect(answer.tag.colour).toMatch(/^#[0-9A-F]{6}$/i);
      }
    }
    expect(new Set(DAILY_QUESTIONS.map(question => question.key)).size).toBe(DAILY_QUESTIONS.length);
    expect(isDailyPostId("daily-2026-10-12")).toBe(true);
    expect(isDailyPostId("p-margaret")).toBe(false);
  });
});
