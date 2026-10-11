// The walking score from whichever of the patient's videos scores higher. Each usable video (and, with a side video
// measured from the feet, the two together) is scored by the Rehyn app's own walking score, the one the movement check
// uses, and the best one's evidence is handed to the movement check, so its results and dashboard show that score.
// Only the walking measurements are sent, never the videos.

import { DEFAULT_ASSESSMENT_BASE } from "@/lib/assessment";
import { combineWalkEvidence, type WalkEvidence, type WalkMeasure, type WalkVideoAnalysis, type WalkView } from "./walk-video";

/** Which evidence: one video's own, or the side video's steps with the front video's trunk sway. */
export type WalkChoice = "side" | "front" | "combined";
export type WalkCandidate = { choice: WalkChoice; evidence: WalkEvidence; durationMs: number; views: WalkView[]; measuredFrom: WalkMeasure };
/** Each candidate's walking score (null when it could not be scored). */
export type WalkScores = Partial<Record<WalkChoice, number | null>>;
export type ScoreWalk = (evidence: WalkEvidence, durationMs: number, signal?: AbortSignal) => Promise<number | null>;

/** The evidence that can be scored: each usable video, and both together when the side video's steps are from the feet. */
export function walkCandidates(front: WalkVideoAnalysis | null, side: WalkVideoAnalysis | null): WalkCandidate[] {
  const out: WalkCandidate[] = [];
  if (side?.evidence && front?.evidence && side.evidence.provenance.measured_from === "feet") {
    const both = combineWalkEvidence(front, side);
    if (both) out.push({ choice: "combined", ...both });
  }
  if (front?.evidence) out.push({ choice: "front", evidence: front.evidence, durationMs: front.durationMs, views: ["front"], measuredFrom: "feet" });
  if (side?.evidence) out.push({ choice: "side", evidence: side.evidence, durationMs: side.durationMs, views: ["side"], measuredFrom: side.evidence.provenance.measured_from });
  return out;
}

/** How long scoring one video may take (the service can be waking up). */
export const SCORE_TIMEOUT_MS = 60000;

/**
 * The walking score the Rehyn app gives this evidence: the movement check's own scoring request (review mode, walking
 * only), as the runner sends it, to the same service (the runner's RUNNER_UPSTREAM). Null when it cannot be scored or
 * the request fails.
 */
export const scoreWalkEvidence: ScoreWalk = async (evidence, durationMs, signal) => {
  const metrics = {
    walking_capture_mode: "uploaded_video", walking_video_role: "gait_scoring_input", lower_limb_result_source: "walking_video_analysis",
    walking_video_analysis_status: "ready_for_backend_scoring", walking_video_accepted: true, walking_video_metadata_readable: true,
    uploaded_video_duration_ms: durationMs,
  };
  const body = {
    task_results: [{
      task_id: "L6", completed_steps: 1, total_steps: 1, duration_ms: durationMs,
      steps: [{ step_id: "L6-S1", completed: true, failure_code: null, duration_ms: durationMs, metrics }],
      metrics: { ...metrics, gait_2d_evidence: { ...evidence, provenance: { ...evidence.provenance, source_video_id: "local-preview-walking" } } },
    }],
    affected_side: "right", assessment_package: "initial", assigned_task_ids: ["L6"], review_options: { goal: "", has_helper: false },
  };
  // A service that does not answer in time leaves the choice to the movement check, as before.
  const request = new AbortController();
  const timer = setTimeout(() => request.abort(), SCORE_TIMEOUT_MS);
  const stop = () => request.abort();
  signal?.addEventListener("abort", stop, { once: true });
  try {
    const response = await fetch(`${DEFAULT_ASSESSMENT_BASE}/api/assessment/review/results`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), signal: request.signal,
    });
    if (!response.ok) return null;
    const data = await response.json() as { task_results?: { task_id?: string; metrics?: { gait_analysis?: { status?: string; score?: unknown } } }[] };
    const gait = data.task_results?.find(row => row.task_id === "L6")?.metrics?.gait_analysis;
    return gait?.status === "scored" && typeof gait.score === "number" && Number.isFinite(gait.score) ? gait.score : null;
  } catch (error) {
    if (signal?.aborted) throw error;
    return null;
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener("abort", stop);
  }
};

/** On a tie, the evidence with more measured (both videos, then the front video's steps). */
const PREFERENCE: WalkChoice[] = ["combined", "front", "side"];

/**
 * The candidate with the highest walking score, and every candidate's score. When none could be scored (offline, or
 * the service is down) the usual choice stands (combineWalkEvidence), for the movement check to score as before.
 */
export async function bestWalkEvidence(front: WalkVideoAnalysis | null, side: WalkVideoAnalysis | null, score: ScoreWalk = scoreWalkEvidence, signal?: AbortSignal): Promise<{ candidate: WalkCandidate; scores: WalkScores } | null> {
  const candidates = walkCandidates(front, side);
  if (!candidates.length) return null;
  const results = await Promise.all(candidates.map(c => score(c.evidence, c.durationMs, signal)));
  const scores: WalkScores = {};
  candidates.forEach((c, i) => { scores[c.choice] = results[i]; });
  const scored = candidates.map((c, i) => ({ c, s: results[i] })).filter((r): r is { c: WalkCandidate; s: number } => r.s !== null);
  if (scored.length) {
    scored.sort((a, b) => b.s - a.s || PREFERENCE.indexOf(a.c.choice) - PREFERENCE.indexOf(b.c.choice));
    return { candidate: scored[0].c, scores };
  }
  const usual = combineWalkEvidence(front, side);
  return usual ? { candidate: { choice: usual.views.length > 1 ? "combined" : usual.views[0], ...usual }, scores } : null;
}
