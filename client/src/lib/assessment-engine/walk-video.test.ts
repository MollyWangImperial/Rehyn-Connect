import { describe, expect, it } from "vitest";
import { syntheticWalk, type SyntheticWalkParams } from "./gait";
import { analyzeWalkVideo, combineWalkEvidence, scoreGateReasons, type WalkEvidence, type WalkVideoFrame, type WalkView } from "./walk-video";

/** A synthetic walker's frames as the video analysis gets them (seconds; one person per frame unless asked). */
function frames(params: SyntheticWalkParams, extra?: (t: number) => { dx?: number; dy?: number; second?: boolean }) {
  const walk = syntheticWalk({ fps: 30, noise: 0.002, ...params });
  const input: WalkVideoFrame[] = walk.map(f => {
    const shift = extra?.(f.t / 1000) ?? {};
    const pose = f.landmarks.map(p => ({ x: p.x + (shift.dx ?? 0), y: p.y + (shift.dy ?? 0), visibility: p.visibility ?? 0.9 }));
    const poses = [pose];
    // Someone small in the background.
    if (shift.second) poses.push(f.landmarks.map(p => ({ x: 0.05 + p.x * 0.2, y: 0.1 + p.y * 0.2, visibility: 0.9 })));
    return { t: f.t / 1000, poses };
  });
  return { input, aspect: walk[0].aspect, durationMs: Math.round(walk[walk.length - 1].t) };
}
const analyse = (view: WalkView, params: SyntheticWalkParams, extra?: Parameters<typeof frames>[1]) => {
  const f = frames(params, extra);
  return analyzeWalkVideo(f.input, f.aspect, view, f.durationMs);
};
/**
 * A walker filmed from the front by a phone standing upright at hip height (a perspective camera): walking away from
 * about 2 m to 6 m, turning, and back to 2 m. Feet are planted in stance and swing forward lifted; steps alternate
 * (right steps `ratio` times the left's).
 */
function frontWalk({ step = 0.65, cadence = 1.8, ratio = 1, fps = 30, seed = 1, noise = 0.002 } = {}): { input: WalkVideoFrame[]; aspect: number; durationMs: number } {
  const aspect = 9 / 16, f = 1.0, camH = 0.9, hip = 0.9;
  let state = seed >>> 0;
  const rand = () => { state = (state * 1664525 + 1013904223) >>> 0; return state / 4294967296 - 0.5; };
  // Planted foot positions (distance from the phone, m) and when each step lands, for one pass from z0 to z1.
  type Plant = { t: number; z: number; foot: 0 | 1 };
  const plants: Plant[] = [];
  let t = 0.6, zFeet: [number, number] = [2, 2];
  const pass = (z1: number, dir: 1 | -1) => {
    let foot: 0 | 1 = 0;
    while ((z1 - zFeet[foot]) * dir > step * 0.5) {
      const length = step * (foot === 1 ? 2 * ratio / (1 + ratio) : 2 / (1 + ratio));
      const other = zFeet[1 - foot];
      zFeet[foot] = other + dir * length;
      t += 1 / cadence;
      plants.push({ t, z: zFeet[foot], foot });
      foot = (1 - foot) as 0 | 1;
    }
    // Bring the feet together.
    zFeet[foot] = zFeet[1 - foot]; t += 1 / cadence; plants.push({ t, z: zFeet[foot], foot });
  };
  pass(6, 1);
  const turnAt = t + 0.6;
  t += 1.2; pass(2, -1);
  const end = t + 0.6;
  const footAt = (time: number, foot: 0 | 1) => {
    const mine = plants.filter(p => p.foot === foot);
    let previous = { t: 0, z: 2 }, next: { t: number; z: number } | null = null;
    for (const p of mine) { if (p.t <= time) previous = p; else { next = p; break; } }
    if (!next) return { z: previous.z, lift: 0 };
    // The swing takes the last 60% of the time to the next plant.
    const start = next.t - 0.6 * (2 / cadence) * 0.5;
    if (time < start) return { z: previous.z, lift: 0 };
    const u = Math.min(1, (time - start) / (next.t - start));
    return { z: previous.z + (next.z - previous.z) * (u * u * (3 - 2 * u)), lift: 0.08 * Math.sin(Math.PI * u) };
  };
  const input: WalkVideoFrame[] = [];
  for (let k = 0; k * (1 / fps) <= end; k++) {
    const time = k / fps;
    const feet = [footAt(time, 0), footAt(time, 1)];
    const zP = (feet[0].z + feet[1].z) / 2;
    // The person's left (index 23 etc.) is at -X walking away and +X walking back toward the phone (facing it).
    const facingPhone = time > turnAt;
    const side = (s: 0 | 1) => (s === 0 ? 1 : -1) * (facingPhone ? 1 : -1);
    const project = (X: number, Y: number, Z: number) => ({
      x: 0.5 + (f * X / Z) / aspect + noise * rand(), y: 0.5 + f * (camH - Y) / Z + noise * rand(), visibility: 0.9,
    });
    const pose = Array.from({ length: 33 }, () => ({ x: NaN, y: NaN, visibility: 0 }));
    pose[0] = project(0, hip + 0.75, zP); pose[7] = project(0.07 * side(0), hip + 0.73, zP); pose[8] = project(0.07 * side(1), hip + 0.73, zP);
    for (const s of [0, 1] as const) {
      const X = 0.1 * side(s), foot = feet[s];
      pose[11 + s] = project(0.2 * side(s), hip + 0.5, zP);
      pose[23 + s] = project(X, hip, zP);
      pose[25 + s] = project(X, (hip + 0.08 + foot.lift) / 2 + 0.02, (zP + foot.z) / 2);
      pose[27 + s] = project(X, 0.08 + foot.lift, foot.z);
      // Heel on the side away from where the walker faces, toes toward it.
      const ahead = facingPhone ? -1 : 1;
      pose[29 + s] = project(X, 0.03 + foot.lift, foot.z - 0.05 * ahead);
      pose[31 + s] = project(X, 0.02 + foot.lift, foot.z + 0.15 * ahead);
    }
    input.push({ t: time, poses: [pose] });
  }
  return { input, aspect, durationMs: Math.round(end * 1000) };
}

const median = (values: number[]) => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];
const lengths = (evidence: WalkEvidence, side: "left" | "right") => evidence.features.step_events.filter(e => e.side === side).map(e => e.step_length_proxy_leg_ratio);

/** The Rehyn app's walking score (backend gait_scoring.py, rehyn-gait-score-1), for checking what the evidence earns. */
function rehynScore(evidence: WalkEvidence): number | null {
  const events = [...evidence.features.step_events].sort((a, b) => a.time_s - b.time_s);
  if (scoreGateReasons(evidence).length) return null;
  const ramp = (v: number, zero: number, full: number) => Math.max(0, Math.min(1, (v - zero) / (full - zero)));
  const sym = (a: number[], b: number[]) => { if (!a.length || !b.length) return null; const [s, l] = [Math.abs(median(a)), Math.abs(median(b))].sort((x, y) => x - y); return l > 1e-9 ? Math.min(1, s / l) : null; };
  const intervals: number[] = [], left: number[] = [], right: number[] = [];
  events.slice(1).forEach((e, k) => {
    if (e.side === events[k].side) return;
    const gap = e.time_s - events[k].time_s;
    if (gap >= 0.18 && gap <= 2.5) { intervals.push(gap); (e.side === "left" ? left : right).push(gap); }
  });
  const all = events.map(e => e.step_length_proxy_leg_ratio);
  const mean = intervals.reduce((a, b) => a + b, 0) / Math.max(1, intervals.length);
  const cv = intervals.length >= 2 ? Math.sqrt(intervals.reduce((a, b) => a + (b - mean) ** 2, 0) / intervals.length) / mean : null;
  const lenSym = sym(events.filter(e => e.side === "left").map(e => e.step_length_proxy_leg_ratio), events.filter(e => e.side === "right").map(e => e.step_length_proxy_leg_ratio));
  const timeSym = sym(left, right);
  const knees = [evidence.features.left_swing_knee_flexion_deg, evidence.features.right_swing_knee_flexion_deg];
  const knee = knees.every(k => k !== null) ? Math.min(knees[0]!, knees[1]!) : null;
  const parts: [number | null, number][] = [
    [100 * ramp(median(all), 0.1, 0.35), 20],
    [lenSym === null ? null : 100 * ramp(lenSym, 0.55, 0.9), 25],
    [timeSym === null ? null : 100 * ramp(timeSym, 0.6, 0.92), 20],
    [cv === null ? null : 100 * (1 - ramp(cv, 0.08, 0.35)), 15],
    [knee === null ? null : 100 * ramp(knee, 15, 50), 10],
  ];
  const used = parts.filter(([s]) => s !== null) as [number, number][];
  return Math.round(10 * used.reduce((a, [s, w]) => a + s * w, 0) / used.reduce((a, [, w]) => a + w, 0)) / 10;
}

describe("walking videos: side view", () => {
  it("measures a usual walk across and back: its steps, true step lengths and knee bend, ready to score", () => {
    const result = analyse("side", { view: "side", seed: 1 });
    expect(result.reasons).toEqual([]);
    const evidence = result.evidence!;
    expect(evidence.features.step_events.length).toBeGreaterThanOrEqual(6);
    expect(median(evidence.features.step_events.map(e => e.step_length_proxy_leg_ratio))).toBeCloseTo(0.75, 1);
    expect(evidence.features.left_swing_knee_flexion_deg).toBeGreaterThan(40);
    expect(evidence.features.trunk_measurement_reliable).toBe(false);
    expect(evidence.provenance.views).toEqual(["side"]);
    // The Rehyn app's own evidence checks.
    expect(evidence.quality.sampled_frames).toBeGreaterThanOrEqual(24);
    expect(evidence.quality.sampled_frames).toBeLessThanOrEqual(60);
    expect(evidence.features.step_events.length).toBeLessThanOrEqual(evidence.quality.sampled_frames);
    expect(evidence.features.step_events.every(e => e.time_s <= result.durationMs / 1000)).toBe(true);
    expect(rehynScore(evidence)).toBeGreaterThan(90);
  });

  it("sees uneven steps, uneven timing and a stiff knee, and scores them lower", () => {
    const usual = rehynScore(analyse("side", { view: "side", seed: 1 }).evidence!)!;
    const short = analyse("side", { view: "side", stepLengthRatio: 0.6, seed: 2 }).evidence!;
    const ratio = median(lengths(short, "right")) / median(lengths(short, "left"));
    expect(Math.min(ratio, 1 / ratio)).toBeCloseTo(0.6, 1);
    expect(rehynScore(short)!).toBeLessThan(usual - 10);
    const uneven = analyse("side", { view: "side", stepTimeRatio: 1.5, seed: 3 }).evidence!;
    expect(rehynScore(uneven)!).toBeLessThan(usual - 5);
    const stiff = analyse("side", { view: "side", kneeFlex: [60, 25], seed: 4 }).evidence!;
    expect(Math.min(stiff.features.left_swing_knee_flexion_deg!, stiff.features.right_swing_knee_flexion_deg!)).toBeLessThan(30);
    expect(rehynScore(stiff)!).toBeLessThan(usual);
  });

  it("is not fooled by a hand-held phone that pans with the walker", () => {
    const panning = analyse("side", { view: "side", seed: 5 }, t => ({ dx: -0.08 * t, dy: 0.01 * Math.sin(t * 3) }));
    expect(panning.reasons).toEqual([]);
    expect(median(panning.evidence!.features.step_events.map(e => e.step_length_proxy_leg_ratio))).toBeCloseTo(0.75, 1);
  });

  it("scores a side video with the feet out of the picture from the hips and knees", () => {
    const cut = analyse("side", { view: "side", yShift: 0.25, seed: 6 });
    expect(cut.measuredFrom).toBe("hips_knees");
    const evidence = cut.evidence!;
    expect(evidence.provenance.measured_from).toBe("hips_knees");
    expect(evidence.features.step_events.length).toBeGreaterThanOrEqual(4);
    expect(new Set(evidence.features.step_events.map(e => e.side)).size).toBe(2);
    // Steps at the walker's 100 a minute on average (the thigh's forward and back peaks are not exactly half a stride
    // apart, so single steps alternate a little longer and shorter), and no knee bend (it needs the ankles).
    const gaps = evidence.features.step_events.slice(1).map((e, k) => e.time_s - evidence.features.step_events[k].time_s).filter(g => g < 1);
    expect(gaps.reduce((a, b) => a + b, 0) / gaps.length).toBeGreaterThan(0.52);
    expect(gaps.reduce((a, b) => a + b, 0) / gaps.length).toBeLessThan(0.68);
    expect(evidence.features.left_swing_knee_flexion_deg).toBeNull();
    expect(rehynScore(evidence)).toBeGreaterThan(60);
  });

  it("says so when even the knees are out of the picture", () => {
    const cut = analyse("side", { view: "side", yShift: 0.45, seed: 6 });
    expect(cut.evidence).toBeNull();
    expect(cut.reasons).toEqual(["legs_not_visible"]);
  });

  it("says when a video filmed from the front was chosen as the side view", () => {
    const wrong = analyse("side", { view: "toward", seed: 7 });
    expect(wrong.evidence).toBeNull();
    expect(wrong.reasons.length).toBeGreaterThan(0);
  });
});

describe("walking videos: front view", () => {
  const front = (options: Parameters<typeof frontWalk>[0] = {}) => { const w = frontWalk(options); return analyzeWalkVideo(w.input, w.aspect, "front", w.durationMs); };

  it("measures walking away from the phone and back: steps and their timing, no knee bend (not visible from the front)", () => {
    const result = front();
    expect(result.reasons).toEqual([]);
    const evidence = result.evidence!;
    expect(evidence.features.step_events.length).toBeGreaterThanOrEqual(6);
    expect(evidence.features.step_events.some(e => e.side === "left") && evidence.features.step_events.some(e => e.side === "right")).toBe(true);
    // Steady steps at 1.8 a second.
    const gaps = evidence.features.step_events.slice(1).map((e, k) => e.time_s - evidence.features.step_events[k].time_s).filter(g => g < 1);
    expect(median(gaps)).toBeCloseTo(1 / 1.8, 1);
    expect(evidence.features.left_swing_knee_flexion_deg).toBeNull();
    expect(evidence.features.trunk_measurement_reliable).toBe(false);
    expect(evidence.provenance.views).toEqual(["front"]);
    expect(rehynScore(evidence)).toBeGreaterThan(80);
  });

  it("labels the leading foot the same way walking away and walking back, so uneven steps show", () => {
    const usual = front({ seed: 2 }).evidence!;
    const uneven = front({ ratio: 0.55, seed: 2 }).evidence!;
    const ratio = median(lengths(uneven, "right")) / median(lengths(uneven, "left"));
    expect(Math.min(ratio, 1 / ratio)).toBeLessThan(0.8);
    expect(rehynScore(uneven)!).toBeLessThan(rehynScore(usual)! - 5);
  });

  it("says when the feet are out of the picture all along", () => {
    const w = frontWalk({ seed: 3 });
    const cut = w.input.map(frame => ({ ...frame, poses: frame.poses.map(pose => pose.map((p, i) => (i >= 25 ? { ...p, y: p.y + 0.6 } : p))) }));
    expect(analyzeWalkVideo(cut, w.aspect, "front", w.durationMs).reasons).toContain("feet_not_visible");
  });

  it("says when there is no one in the video, or someone else is in it much of the time", () => {
    expect(analyzeWalkVideo([{ t: 0, poses: [] }, { t: 1, poses: [] }], 9 / 16, "front", 1000).reasons).toEqual(["no_person"]);
    const crowded = analyse("side", { view: "side", seed: 9 }, () => ({ second: true }));
    // The walker is still analysed (the biggest, clearest person); the score's own check sees the other person.
    expect(crowded.reasons).toContain("multiple_people");
  });
});

describe("walking videos: both", () => {
  it("scores the side video's steps and knee bend when both can be scored, else whichever can, else nothing", () => {
    const side = analyse("side", { view: "side", seed: 1 });
    const walk = frontWalk({ seed: 4 });
    const front = analyzeWalkVideo(walk.input, walk.aspect, "front", walk.durationMs);
    expect(front.evidence).not.toBeNull();
    const both = combineWalkEvidence(front, side)!;
    expect(both.views).toEqual(["side", "front"]);
    expect(both.evidence.features.step_events).toEqual(side.evidence!.features.step_events);
    expect(both.evidence.features.left_swing_knee_flexion_deg).toBe(side.evidence!.features.left_swing_knee_flexion_deg);
    expect(both.evidence.provenance.views).toEqual(["side", "front"]);
    expect(both.durationMs).toBe(side.durationMs + front.durationMs);
    // A side video measured from the hips and knees: the front video is scored when there is one, else that.
    const knees = analyse("side", { view: "side", yShift: 0.25, seed: 6 });
    expect(combineWalkEvidence(front, knees)).toMatchObject({ views: ["front"], evidence: front.evidence, durationMs: front.durationMs, measuredFrom: "feet" });
    expect(combineWalkEvidence(null, knees)).toMatchObject({ views: ["side"], measuredFrom: "hips_knees" });
    expect(combineWalkEvidence(null, side)).toMatchObject({ views: ["side"], evidence: side.evidence });
    const none = analyse("side", { view: "side", yShift: 0.45, seed: 6 });
    expect(combineWalkEvidence(front, none)).toMatchObject({ views: ["front"] });
    expect(combineWalkEvidence(null, none)).toBeNull();
  });
});
