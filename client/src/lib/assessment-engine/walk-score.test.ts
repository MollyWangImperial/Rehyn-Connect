import { afterEach, describe, expect, it, vi } from "vitest";
import type { WalkEvidence, WalkVideoAnalysis } from "./walk-video";
import { bestWalkEvidence, scoreWalkEvidence, walkCandidates } from "./walk-score";

const evidence = (view: "side" | "front", measured: "feet" | "hips_knees" = "feet"): WalkEvidence => ({
  status: "completed", analysis_method: "mediapipe_browser_body_centric_2d_v1", camera_motion_handling: "body_centric_2d_browser",
  coordinate_frame: "pelvis_centered_leg_normalized_2d",
  quality: { sampled_frames: 60, detected_frames: 58, tracking_coverage: 0.96, full_body_visibility: 0.9, distal_visibility: 0.85, multi_person_ratio: 0, background_motion_reliable_ratio: 0 },
  features: {
    step_events: [{ side: "left", time_s: 1, step_length_proxy_leg_ratio: 0.6 }, { side: "right", time_s: 1.6, step_length_proxy_leg_ratio: 0.6 }, { side: "left", time_s: 2.2, step_length_proxy_leg_ratio: 0.6 }],
    left_foot_clearance_leg_ratio: null, right_foot_clearance_leg_ratio: null, foot_clearance_reliable: false,
    left_swing_knee_flexion_deg: null, right_swing_knee_flexion_deg: null, trunk_lateral_excursion_deg: view === "front" ? 3 : null, trunk_measurement_reliable: view === "front",
  },
  provenance: { source_video_id: "", pose_model: "pose_landmarker_lite.task", analysis_fps: 30, processing_location: "patient_browser", uses_3d_reconstruction: false, frame_detection_mode: "video", views: [view], analysed_frames: 120, measured_from: measured },
});
const analysis = (view: "side" | "front", measured: "feet" | "hips_knees" = "feet", durationMs = 10000): WalkVideoAnalysis =>
  ({ view, evidence: evidence(view, measured), reasons: [], durationMs, analysedSeconds: 4, measuredFrom: measured });

afterEach(() => vi.unstubAllGlobals());

describe("scoring each walking video", () => {
  it("offers each usable video, and both together only when the side video's steps are from the feet", () => {
    expect(walkCandidates(analysis("front"), analysis("side")).map(c => c.choice)).toEqual(["combined", "front", "side"]);
    expect(walkCandidates(analysis("front"), analysis("side", "hips_knees")).map(c => c.choice)).toEqual(["front", "side"]);
    expect(walkCandidates(null, analysis("side", "hips_knees"))).toMatchObject([{ choice: "side", measuredFrom: "hips_knees", views: ["side"] }]);
    expect(walkCandidates({ ...analysis("front"), evidence: null }, null)).toEqual([]);
  });

  it("asks the Rehyn walking score as the movement check does, and reads the score", async () => {
    const fetch = vi.fn(async () => new Response(JSON.stringify({ task_results: [{ task_id: "L6", metrics: { gait_analysis: { status: "scored", score: 76.4 } } }] })));
    vi.stubGlobal("fetch", fetch);
    expect(await scoreWalkEvidence(evidence("front"), 9000)).toBe(76.4);
    const [url, init] = fetch.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("https://rehyn.onrender.com/api/assessment/review/results");
    const body = JSON.parse(String(init.body));
    expect(body).toMatchObject({ assigned_task_ids: ["L6"], task_results: [{ task_id: "L6", duration_ms: 9000, metrics: { walking_video_analysis_status: "ready_for_backend_scoring" } }] });
    expect(body.task_results[0].metrics.gait_2d_evidence.provenance.source_video_id).toBe("local-preview-walking");
  });

  it("gives no score when the walk cannot be scored or the service fails, and stops when cancelled", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => new Response(JSON.stringify({ task_results: [{ task_id: "L6", metrics: { gait_analysis: { status: "not_scored", score: null } } }] }))));
    expect(await scoreWalkEvidence(evidence("front"), 9000)).toBeNull();
    vi.stubGlobal("fetch", vi.fn(async () => new Response("down", { status: 503 })));
    expect(await scoreWalkEvidence(evidence("front"), 9000)).toBeNull();
    vi.stubGlobal("fetch", vi.fn(async () => { throw new TypeError("offline"); }));
    expect(await scoreWalkEvidence(evidence("front"), 9000)).toBeNull();
    const controller = new AbortController();
    vi.stubGlobal("fetch", vi.fn((_url: string, init: RequestInit) => new Promise((_resolve, reject) => init.signal!.addEventListener("abort", () => reject(new DOMException("aborted", "AbortError"))))));
    const pending = scoreWalkEvidence(evidence("front"), 9000, controller.signal);
    controller.abort();
    await expect(pending).rejects.toThrow();
  });

  it("chooses the highest score, the fuller evidence on a tie, and the usual choice when nothing scores", async () => {
    const byView = (scores: Record<string, number | null>) => async (e: WalkEvidence) => scores[e.provenance.views.join("+")];
    expect((await bestWalkEvidence(analysis("front"), analysis("side"), byView({ "side+front": 70, front: 76, side: 54 })))!.candidate.choice).toBe("front");
    expect((await bestWalkEvidence(analysis("front"), analysis("side"), byView({ "side+front": 76, front: 76, side: 54 })))!.candidate.choice).toBe("combined");
    expect((await bestWalkEvidence(analysis("front"), analysis("side"), byView({ "side+front": null, front: null, side: 61 })))!.candidate.choice).toBe("side");
    const none = (await bestWalkEvidence(analysis("front"), analysis("side", "hips_knees"), async () => null))!;
    expect(none.candidate).toMatchObject({ choice: "front", views: ["front"] });
    expect(none.scores).toEqual({ front: null, side: null });
  });
});
