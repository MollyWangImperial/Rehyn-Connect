import { describe, expect, it } from "vitest";
import { circle } from "./community-samples";
import { CIRCLE_EVENTS, CIRCLE_EVENT_IDS, circleComingUp, circleNow, isCircleOccurrenceId } from "./circle-events";

describe("the Sunday circle's events", () => {
  it("are ten social get-togethers, none about stroke, each with its own topic, talk and answers", () => {
    expect(CIRCLE_EVENT_IDS).toEqual(["film", "books", "football", "music", "quiz", "travel", "bake", "garden", "comedy", "photos"]);
    const speakers = circle.order.filter(who => who !== "you");
    for (const event of CIRCLE_EVENTS) {
      expect(Object.keys(event.lines).sort()).toEqual([...speakers].sort());
      expect(event.shareChoices).toHaveLength(3);
      const all = [event.name, event.detail, event.topic, event.shareLabel, ...event.shareChoices, ...Object.values(event.lines)].join(" ");
      expect(all).not.toMatch(/stroke|therapy|rehab|exercise|stretch|recovery/i);
    }
  });

  it("changes every two days at 4 pm, going round all ten, and stays on for the day in between", () => {
    const tuesday = circleNow(new Date(2026, 9, 6, 9, 0));
    expect(tuesday).toMatchObject({ id: "photos-2026-10-06" });
    expect(tuesday.start).toEqual(new Date(2026, 9, 6, 16, 0));
    // Wednesday is the day in between: Tuesday's get-together is still the one on.
    expect(circleNow(new Date(2026, 9, 7, 20, 0)).id).toBe("photos-2026-10-06");
    expect(circleNow(new Date(2026, 9, 8, 9, 0)).id).toBe("film-2026-10-08");
    expect(circleComingUp(new Date(2026, 9, 6, 9, 0)).map(item => item.id)).toEqual(["film-2026-10-08", "books-2026-10-10", "football-2026-10-12"]);
    const seen = new Set(Array.from({ length: 10 }, (_, index) => circleNow(new Date(2026, 9, 6 + index * 2, 12)).event.id));
    expect(seen.size).toBe(10);
  });

  it("can show one event's scene and talk when asked (?event=film), and knows its reminders", () => {
    expect(circleNow(new Date(2026, 9, 6, 9, 0), "music").event.name).toBe("Music memories");
    expect(circleNow(new Date(2026, 9, 6, 9, 0), "nonsense").event.id).toBe("photos");
    expect(isCircleOccurrenceId("film-2026-10-08")).toBe(true);
    expect(isCircleOccurrenceId("words")).toBe(false);
    expect(isCircleOccurrenceId("midnight-2026-10-08")).toBe(false);
  });
});
