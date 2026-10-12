import { describe, expect, it } from "vitest";
import { DAILY_QUESTIONS, dailyQuestion, isDailyPostId } from "./daily-questions";

describe("the Daily question", () => {
  it("is the same all day, changes at midnight, and goes round the whole list", () => {
    const morning = dailyQuestion(new Date(2026, 9, 12, 7, 0));
    const evening = dailyQuestion(new Date(2026, 9, 12, 23, 59));
    const tomorrow = dailyQuestion(new Date(2026, 9, 13, 0, 1));
    expect(evening).toEqual(morning);
    expect(morning).toMatchObject({ id: "daily-2026-10-12", dateLabel: "Monday 12 October" });
    expect(tomorrow.id).toBe("daily-2026-10-13");
    expect(tomorrow.question).not.toBe(morning.question);
    const seen = new Set(Array.from({ length: DAILY_QUESTIONS.length }, (_, day) => dailyQuestion(new Date(2026, 0, 1 + day, 12)).question));
    expect(seen.size).toBe(DAILY_QUESTIONS.length);
  });

  it("asks short, open questions, each once", () => {
    expect(new Set(DAILY_QUESTIONS).size).toBe(DAILY_QUESTIONS.length);
    for (const question of DAILY_QUESTIONS) {
      expect(question.length).toBeLessThan(80);
      expect(question).toMatch(/[.?]$/);
    }
    expect(isDailyPostId("daily-2026-10-12")).toBe(true);
    expect(isDailyPostId("p-margaret")).toBe(false);
  });
});
