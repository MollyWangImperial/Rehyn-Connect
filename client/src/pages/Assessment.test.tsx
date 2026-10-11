import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Assessment, { companionRunnerUrl, walkingOnlyReport } from "./Assessment";
import { ONBOARDING_STORAGE_KEY } from "@/lib/alira-onboarding";
import { buildRunnerUrl } from "@/lib/assessment";

const route = vi.hoisted(() => ({ search: "onboarding=1" }));
vi.mock("wouter", () => ({ useLocation: () => ["/assessment", vi.fn()], useSearch: () => route.search }));
beforeEach(() => {
  route.search = "onboarding=1";
  const values = new Map<string, string>();
  vi.stubGlobal("localStorage", { getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => values.set(key, value) });
});
afterEach(() => vi.unstubAllGlobals());
describe("copied assessment host", () => {
  it("opens the camera runner full-screen with the new ladder and ordered tasks", () => {
    const html = renderToStaticMarkup(createElement(Assessment));
    expect(html).toContain('title="Rehyn movement check"');
    expect(html).toContain('allow="camera; microphone; autoplay; fullscreen"');
    expect(html).toContain('ladder=1');
    expect(html).toContain('task_ids=T1%2CT3%2CH4%2CH3%2CL6');
    expect(html).toContain('r160');
    // No demonstration until the runner says a task is about to start.
    expect(html).not.toContain("Watch first");
  });
  it("retains the left affected side from the Claude site's answers", () => {
    localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify({ side_affected: "left" }));
    expect(renderToStaticMarkup(createElement(Assessment))).toContain('affected_side=left');
  });
  it("keeps the runner closed for someone reporting no arm movement and a wheelchair", () => {
    localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify({ arm_hand_movement: "none", get_around: "wheelchair" }));
    const html = renderToStaticMarkup(createElement(Assessment));
    expect(html).toContain('supported movement');
    expect(html).not.toContain('<iframe');
  });
});

describe("the walking test (?only=L6)", () => {
  it("opens straight on the side video's demonstration, without the movement check or its camera", () => {
    route.search = "only=L6";
    const html = renderToStaticMarkup(createElement(Assessment));
    expect(html).not.toContain("<iframe");
    expect(html).not.toContain("Opening your movement check");
    expect(html).toContain("Watch first");
  });

  it("shows its results as the movement check's, saying which videos the walking score came from", () => {
    const report = { task_results: [{ task_id: "L6", metrics: { gait_analysis: { status: "scored", score: 76 } } }], metrics: { function_score: {} } };
    const checked = walkingOnlyReport(report, { skipped: false, evidence: null, duration_ms: 9000, views: ["front"], measured_from: "feet", view_scores: { front: 76, side: 54.1 } });
    expect(checked.task_results![0].metrics).toEqual({ gait_analysis: { status: "scored", score: 76 }, walking_video_views: ["front"], walking_measured_from: "feet", walking_view_scores: { front: 76, side: 54.1 } });
    expect(checked.metrics).toBe(report.metrics);
  });
});

describe("the review runner through the companion", () => {
  it("keeps every runner setting, asks it to wait for each demonstration and serves it from this origin", () => {
    const direct = buildRunnerUrl("https://rehyn.onrender.com", { affectedSide: "left", guestReview: true, returnTo: "/alira?onboarding=1" });
    const url = new URL(companionRunnerUrl(direct, "https://rehyn-recovery-companion.onrender.com"));
    expect(url.origin).toBe("https://rehyn-recovery-companion.onrender.com");
    expect(url.pathname).toBe("/movement-check/runner");
    expect(url.searchParams.get("host_demos")).toBe("1");
    const original = new URL(direct).searchParams;
    for (const [key, value] of original) expect(url.searchParams.get(key)).toBe(value);
    expect(url.searchParams.get("return_to")).toBe("/alira?onboarding=1");
  });
});
