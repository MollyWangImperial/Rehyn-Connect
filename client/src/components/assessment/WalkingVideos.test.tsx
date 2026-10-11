import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import type { WalkEvidence, WalkVideoAnalysis } from "@/lib/assessment-engine/walk-video";
import WalkingVideos, { scoredWalkingHandoff, SIDE_FEET_OUT, slotStatus, walkingHandoff, WALK_SLOTS, WALK_STEPS } from "./WalkingVideos";

const evidence = (steps: number, views: ("side" | "front")[]): WalkEvidence => ({
  status: "completed", analysis_method: "mediapipe_browser_body_centric_2d_v1", camera_motion_handling: "body_centric_2d_browser",
  coordinate_frame: "pelvis_centered_leg_normalized_2d",
  quality: { sampled_frames: 60, detected_frames: 58, tracking_coverage: 0.96, full_body_visibility: 0.9, distal_visibility: 0.85, multi_person_ratio: 0, background_motion_reliable_ratio: 0 },
  features: {
    step_events: Array.from({ length: steps }, (_, i) => ({ side: i % 2 ? "right" : "left", time_s: 1 + i * 0.55, step_length_proxy_leg_ratio: 0.7 })),
    left_foot_clearance_leg_ratio: null, right_foot_clearance_leg_ratio: null, foot_clearance_reliable: false,
    left_swing_knee_flexion_deg: views[0] === "side" ? 55 : null, right_swing_knee_flexion_deg: views[0] === "side" ? 52 : null,
    trunk_lateral_excursion_deg: null, trunk_measurement_reliable: false,
  },
  provenance: { source_video_id: "", pose_model: "pose_landmarker_lite.task", analysis_fps: 30, processing_location: "patient_browser", uses_3d_reconstruction: false, frame_detection_mode: "video", views, analysed_frames: 150, measured_from: "feet" },
});
const analysis = (view: "side" | "front", ok: boolean, durationMs = 12000): WalkVideoAnalysis =>
  ({ view, evidence: ok ? evidence(view === "side" ? 8 : 6, [view]) : null, reasons: ok ? [] : ["feet_not_visible"], durationMs, analysedSeconds: ok ? 5 : 0 });

describe("WalkingVideos", () => {
  const render = (step: "side" | "front") => renderToStaticMarkup(createElement(WalkingVideos, { step, onNext: () => {}, onDone: () => {}, onWatchAgain: () => {}, onExit: () => {} }));

  it("asks for the side video first, with a way on for patients without the room", () => {
    const html = render("side");
    expect(html).toContain("Walking · Step 1 of 2");
    expect(html).toContain(WALK_STEPS.side.title);
    expect(html).toContain(WALK_SLOTS.side.title);
    expect(html).not.toContain(WALK_SLOTS.front.title);
    expect(html).toContain("feet included");
    expect(html.match(/type="file"/g)).toHaveLength(1);
    expect(html).toContain("No room, or feet won&#x27;t fit: skip");
    expect(WALK_STEPS.side.lead).toContain("can't fit your feet in the picture from the side? Skip it");
    expect(html).toMatch(/<button[^>]*disabled=""[^>]*>Next: the front video/);
    expect(html).toContain("Skip walking for now");
    expect(html).toContain("Watch how to film");
    expect(html).toContain("Your videos stay on this device");
  });

  it("then asks for the front video, and scores once there is a usable video", () => {
    const html = render("front");
    expect(html).toContain("Walking · Step 2 of 2");
    expect(html).toContain(WALK_STEPS.front.title);
    expect(html).toContain(WALK_SLOTS.front.title);
    expect(html.match(/type="file"/g)).toHaveLength(1);
    expect(html).toMatch(/<button[^>]*disabled=""[^>]*>Get my walking score<\/button>/);
  });

  it("tells the patient each video's state in plain words", () => {
    expect(slotStatus({ state: "empty" })).toBe("No video chosen yet.");
    expect(slotStatus({ state: "analysing", name: "a.mp4", share: 0.42 })).toBe("Checking your walk… 42%");
    expect(slotStatus({ state: "analysing", name: "a.mp4", share: 0 })).toBe("Getting ready to check this video…");
    expect(slotStatus({ state: "done", name: "a.mp4", analysis: analysis("front", true) })).toBe("Ready: 6 clear steps measured.");
    expect(slotStatus({ state: "done", name: "a.mp4", analysis: analysis("side", false) })).toContain("Your feet were out of the picture");
    expect(slotStatus({ state: "failed", name: "a.mp4", message: "Please choose a video file." })).toBe("Please choose a video file.");
  });

  it("hands over the front video alone, the side video's steps with both, and nothing usable as nothing", () => {
    expect(walkingHandoff(analysis("front", true), null)).toMatchObject({ skipped: false, views: ["front"], duration_ms: 12000 });
    const both = walkingHandoff(analysis("front", true, 11000), analysis("side", true, 14000))!;
    expect(both).toMatchObject({ skipped: false, views: ["side", "front"], duration_ms: 25000 });
    expect(both.skipped === false && both.evidence?.features.step_events).toHaveLength(8);
    // An unusable side video adds nothing, not even its length.
    expect(walkingHandoff(analysis("front", true, 11000), analysis("side", false, 14000))).toMatchObject({ views: ["front"], duration_ms: 11000 });
    expect(walkingHandoff(analysis("front", false), analysis("side", false))).toBeNull();
    expect(walkingHandoff(null, null)).toBeNull();
  });

  const hipsKnees = (durationMs = 14000): WalkVideoAnalysis => {
    const side = analysis("side", true, durationMs);
    return { ...side, measuredFrom: "hips_knees", evidence: { ...side.evidence!, provenance: { ...side.evidence!.provenance, measured_from: "hips_knees" } } };
  };

  it("sends the patient on from a side video without the feet, which still counts if it scores higher", async () => {
    expect(slotStatus({ state: "done", name: "s.mp4", analysis: hipsKnees() })).toBe(SIDE_FEET_OUT);
    expect(SIDE_FEET_OUT).toContain("Go on to the front video: your walking score will be the higher of the two");
    // Unscored, the front video is chosen over the hips and knees.
    expect(walkingHandoff(analysis("front", true, 11000), hipsKnees())).toMatchObject({ views: ["front"], duration_ms: 11000, measured_from: "feet" });
    const sideHigher = await scoredWalkingHandoff(analysis("front", true, 11000), hipsKnees(), async e => (e.provenance.measured_from === "hips_knees" ? 64 : 58));
    expect(sideHigher).toMatchObject({ views: ["side"], duration_ms: 14000, measured_from: "hips_knees", view_scores: { front: 58, side: 64 } });
  });

  it("hands over whichever video (or both together) scores higher, with every score", async () => {
    const front = analysis("front", true, 11000), side = analysis("side", true, 14000);
    const scores = { front: 76, side: 54, both: 70 };
    const score = async (e: WalkEvidence) => (e.provenance.views.length > 1 ? scores.both : e.provenance.views[0] === "front" ? scores.front : scores.side);
    expect(await scoredWalkingHandoff(front, side, score)).toMatchObject({ views: ["front"], duration_ms: 11000, view_scores: { combined: 70, front: 76, side: 54 } });
    scores.both = 80;
    expect(await scoredWalkingHandoff(front, side, score)).toMatchObject({ views: ["side", "front"], duration_ms: 25000 });
    // Not scored (offline): handed over as before, for the movement check to score.
    expect(await scoredWalkingHandoff(front, side, async () => null)).toMatchObject({ views: ["side", "front"], view_scores: { combined: null, front: null, side: null } });
    expect(await scoredWalkingHandoff(null, null, score)).toBeNull();
  });
});
