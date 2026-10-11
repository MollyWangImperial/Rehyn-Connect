import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import type { AssessmentReport, StoredAssessment } from "@/lib/assessment";
import { buildDashboard, canReopenCheckDashboard, daysUntilNextCheck, reopenCheckDashboard, standingFor } from "@/lib/assessment-dashboard";
import AssessmentDashboard, { nextInWords, videosLine } from "./AssessmentDashboard";

const task = (task_id: string, domain: string, level: number | null, points = level === null ? null : level * 25) => ({ task_id, domain, level, points, task_label: task_id });
/** A report as the Rehyn app returns it (function score: areas and tasks). */
function report({ arm = 75, hand = 50, walking = null as number | null, views = [] as string[] } = {}): AssessmentReport {
  return {
    preview_only: true,
    task_results: [{ task_id: "L6", metrics: { walking_video_views: views } }],
    metrics: {
      function_score: {
        display_total: Math.round((arm + hand + (walking ?? 0)) / (walking === null ? 2 : 3)),
        areas: { upper_limb: { display_score: arm }, hand: { display_score: hand }, ...(walking === null ? {} : { lower_limb: { display_score: walking } }) },
        tasks: [task("T1", "upper_limb", 4), task("T3", "upper_limb", 2), task("H4", "hand", 4), task("H3", "hand", 0), { ...task("L6", "lower_limb", null), points: walking }],
      },
    },
  } as unknown as AssessmentReport;
}
const today = new Date(2026, 9, 10, 15, 0);

describe("the results dashboard", () => {
  it("shows the day, the daily function score with its word, and each area with what was done", () => {
    const dashboard = buildDashboard(report(), null, today)!;
    expect(dashboard.dateLabel).toBe("10 October");
    expect(dashboard.total).toBe(63);
    expect(dashboard.word).toBe("Building");
    expect(dashboard.areas.map(area => [area.title, area.score, area.word])).toEqual([["Arm", 75, "Strong"], ["Hand", 50, "Building"], ["Walking", null, "Not measured"]]);
    expect(dashboard.areas[0].summary).toBe("Reach: done fully on your own. Hand to mouth: an easier version on your own.");
    expect(dashboard.areas[1].summary).toBe("Hand opening: done fully on your own. Pinch: not yet.");
    expect(dashboard.areas[2].summary).toBe("Walking was not measured in this check.");
    expect(standingFor(49)).toBe("starting");
  });

  it("says which walking videos the walking score came from", () => {
    const front = buildDashboard(report({ walking: 80, views: ["front"] }), null, today)!;
    expect(front.areas[2]).toMatchObject({ score: 80, word: "Strong", summary: "Measured from your front video: your steps, their evenness and rhythm." });
    expect(buildDashboard(report({ walking: 70, views: ["side", "front"] }), null, today)!.areas[2].summary).toContain("your side and front videos");
    const knees = report({ walking: 55, views: ["side"] });
    (knees.task_results![0].metrics as Record<string, unknown>).walking_measured_from = "hips_knees";
    expect(buildDashboard(knees, null, today)!.areas[2].summary).toBe("Based on your hips and knees in your side video (your feet were out of the picture): your steps' timing, evenness and length.");
  });

  it("compares with the previous check, area by area, and starts fresh without one", () => {
    const previous: StoredAssessment = { id: "p", completedAt: new Date(2026, 9, 2).toISOString(), report: report({ arm: 88, hand: 100 }) };
    const since = buildDashboard(report(), previous, today)!.since!;
    expect(since).toMatchObject({ dateLabel: "2 October", total: 94 });
    expect(since.changes).toEqual([{ title: "Arm", change: -13 }, { title: "Hand", change: -50 }]);
    expect(buildDashboard(report(), null, today)!.since).toBeNull();
    expect(buildDashboard(report(), { id: "x", completedAt: "not a date", report: report() }, today)!.since).toBeNull();
  });

  it("sets the next check-up 14 days on, with the movements furthest from done to work on", () => {
    const next = buildDashboard(report(), null, today)!.next;
    expect(next).toEqual({ dateLabel: "Saturday 24 October", days: 14, tryTo: ["Bring your thumb to your first finger", "Bring your hand to your mouth"] });
  });

  it("tells the tester where this check's videos went, with a way to choose the folder", () => {
    expect(videosLine({ status: "saved", folder: "rehyn-assessment-videos" })).toContain("saved in your “rehyn-assessment-videos” folder, replacing the last check's");
    expect(videosLine({ status: "needs_folder" })).toContain("for example on D:");
    const html = renderToStaticMarkup(createElement(AssessmentDashboard, { dashboard: buildDashboard(report(), null, today)!, onAlira: () => {}, onHome: () => {}, videos: { state: { status: "needs_folder" }, onSave: () => {} } }));
    expect(html).toContain("Save to a folder…");
    expect(renderToStaticMarkup(createElement(AssessmentDashboard, { dashboard: buildDashboard(report(), null, today)!, onAlira: () => {}, onHome: () => {} }))).not.toContain("Save to a folder");
  });

  it("is not shown without a function score", () => {
    expect(buildDashboard({ preview_only: true } as AssessmentReport, null, today)).toBeNull();
  });

  it("renders the design: the score ring, the areas, since last time, the next check-up and its actions", () => {
    const previous: StoredAssessment = { id: "p", completedAt: new Date(2026, 9, 2).toISOString(), report: report({ arm: 88, hand: 100 }) };
    const html = renderToStaticMarkup(createElement(AssessmentDashboard, { dashboard: buildDashboard(report(), previous, today)!, onAlira: () => {}, onHome: () => {} }));
    for (const text of ["Movement check · 10 October", "Your movement check", "Daily function score 63 out of 100", "Arm", "Strong", "Hand", "Building", "Walking", "Not measured",
      "Since last time", "vs. your check on 2 October", "Arm −13", "Hand −50", "Next check-up", "Saturday 24 October", "Until then, try to",
      "Bring your thumb to your first finger", "Continue to Alira", "Go to my home", "How we scored this"]) expect(html).toContain(text);
  });
});

describe("re-opening a check's results from the Journey", () => {
  const latest: StoredAssessment = { id: "c11", completedAt: today.toISOString(), report: report() };

  it("rebuilds the latest check's dashboard from its stored report, with the check-up counted from now", () => {
    expect(canReopenCheckDashboard("c11", latest)).toBe(true);
    expect(canReopenCheckDashboard("other", latest)).toBe(false);
    expect(canReopenCheckDashboard(undefined, latest)).toBe(false);
    expect(canReopenCheckDashboard("c11", { ...latest, report: undefined })).toBe(false);
    const reopened = reopenCheckDashboard("c11", latest, new Date(2026, 9, 20, 9, 0))!;
    expect(reopened).toMatchObject({ dateLabel: "10 October", total: 63 });
    expect(reopened.next).toMatchObject({ dateLabel: "Saturday 24 October", days: 4 });
    expect(reopenCheckDashboard("other", latest)).toBeNull();
  });

  it("counts the days to the next check-up, down to due", () => {
    expect(daysUntilNextCheck(today.toISOString(), today)).toBe(14);
    expect(daysUntilNextCheck(today.toISOString(), new Date(2026, 9, 23, 22, 0))).toBe(1);
    expect(daysUntilNextCheck(today.toISOString(), new Date(2026, 9, 30))).toBe(0);
    expect([14, 1, 0].map(nextInWords)).toEqual(["in 14 days", "tomorrow", "due now"]);
  });

  it("says the check's day instead of today, and has a way back to the Journey", () => {
    const previous: StoredAssessment = { id: "p", completedAt: new Date(2026, 9, 2).toISOString(), report: report({ arm: 88, hand: 100 }) };
    const dashboard = buildDashboard(report(), previous, today)!;
    const html = renderToStaticMarkup(createElement(AssessmentDashboard, { dashboard, onAlira: () => {}, onHome: () => {}, onBack: () => {} }));
    expect(html).toContain("Back to my journey");
    expect(html).toContain("Every number here comes from your own movements on 10 October.");
    expect(html).not.toContain(">Today<");
    expect(html).toContain('role="dialog"');
    const fresh = renderToStaticMarkup(createElement(AssessmentDashboard, { dashboard, onAlira: () => {}, onHome: () => {} }));
    expect(fresh).not.toContain("Back to my journey");
    expect(fresh).toContain(">Today<");
  });
});
