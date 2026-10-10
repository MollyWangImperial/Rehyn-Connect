// The movement check's walking videos (L6), analysed on the patient's device and scored by the Rehyn app's own walking
// score (its gait_scoring "rehyn-gait-score-1"), which takes the browser's 2D walking evidence: step events (side, time,
// step length in leg lengths), swing knee bend, trunk sway, and tracking quality.
//
// Patients film at home: a front video (walking away from the phone and back toward it, which needs little room) and,
// when there is room, a side video (walking across the picture). Home videos start and end with the person out of
// view or too close, turn in the middle, and are often hand-held, so:
// - only the stretches where the legs and feet are clearly in view are analysed (a stretch at least MIN_STRETCH_S long),
//   and the tracking quality is measured over those stretches;
// - everything is measured in the body's own frame (pelvis-centred, along the trunk, in leg lengths), so a moving or
//   hand-held camera does not count as walking;
// - front: a step is the moment the feet are furthest apart along the walk; walking toward the phone the leading foot
//   is lower in the picture, walking away it is higher, so the walk's direction (the body growing or shrinking in the
//   picture) decides which foot leads. The knee's bend cannot be seen from the front, so it is not measured there;
// - side: the leading foot is the one ahead along the trunk's perpendicular, the facing direction coming from the
//   toes (or the nose); steps are true step lengths, and the knee's bend in swing is measured;
// - with both videos the side video's steps and knee bend are used (they are measured directly) and the front video's
//   trunk sway is added; with one, that one alone. A video without enough measurable walking says why.
// Engineering measures, not a clinical gait assessment.

/** One pose point: normalised image coordinates and MediaPipe's visibility. */
export type WalkPoint = { x: number; y: number; visibility?: number };
/** One analysed video frame: its time (s) and every person the pose model found (33 points each). */
export type WalkVideoFrame = { t: number; poses: WalkPoint[][] };
export type WalkView = "front" | "side";

/** A step: the leading foot, when (s from the video's start), and how far apart the feet are (leg lengths). */
export type WalkStepEvent = { side: "left" | "right"; time_s: number; step_length_proxy_leg_ratio: number };

/** The Rehyn app's browser walking evidence ("mediapipe_browser_body_centric_2d_v1"), as its walking score takes it. */
export type WalkEvidence = {
  status: "completed";
  analysis_method: "mediapipe_browser_body_centric_2d_v1";
  camera_motion_handling: "body_centric_2d_browser";
  coordinate_frame: "pelvis_centered_leg_normalized_2d";
  quality: {
    sampled_frames: number;
    detected_frames: number;
    tracking_coverage: number;
    full_body_visibility: number;
    distal_visibility: number;
    multi_person_ratio: number;
    background_motion_reliable_ratio: number;
  };
  features: {
    step_events: WalkStepEvent[];
    left_foot_clearance_leg_ratio: number | null;
    right_foot_clearance_leg_ratio: number | null;
    foot_clearance_reliable: false;
    left_swing_knee_flexion_deg: number | null;
    right_swing_knee_flexion_deg: number | null;
    trunk_lateral_excursion_deg: number | null;
    trunk_measurement_reliable: boolean;
  };
  provenance: {
    source_video_id: string;
    pose_model: string;
    analysis_fps: number;
    processing_location: "patient_browser";
    uses_3d_reconstruction: false;
    frame_detection_mode: "video";
    views: WalkView[];
    analysed_frames: number;
  };
};

/** Why a video could not be scored, in the patient's words. */
export const WALK_VIDEO_REASONS = {
  no_person: "We could not find you in this video.",
  feet_not_visible: "Your feet were out of the picture for most of the walk. Stand the phone further away (or lower) so your whole body, feet included, stays in view.",
  too_short: "There was not enough walking in view. Walk for at least five or six steps in view.",
  too_few_steps: "We could not see clear steps. Walk at your usual pace with your whole body in view.",
  not_side_on: "This does not look like a side view. Film from the side, walking across the picture.",
  not_front_on: "This does not look like a front view. Walk away from the phone and back toward it.",
  multiple_people: "Someone else is in the picture for much of the walk. Ask them to stay out of view.",
} as const;
export type WalkVideoReason = keyof typeof WALK_VIDEO_REASONS;

export type WalkVideoAnalysis = {
  view: WalkView;
  /** The video's evidence, or null when it could not be scored (see reasons). */
  evidence: WalkEvidence | null;
  reasons: WalkVideoReason[];
  durationMs: number;
  /** Seconds of the video analysed (the stretches with the legs and feet in view). */
  analysedSeconds: number;
};

// MediaPipe pose points.
const L = { shoulder: 11, hip: 23, knee: 25, ankle: 27, heel: 29, toe: 31 } as const;
const R = { shoulder: 12, hip: 24, knee: 26, ankle: 28, heel: 30, toe: 32 } as const;
const LOWER = [23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
const DISTAL = [25, 26, 27, 28, 29, 30, 31, 32];

/** A lower-body point counts as seen at this visibility, inside the picture. */
export const LOWER_SEEN = 0.3;
/** Hips and shoulders, which carry the body's frame, are needed a little more clearly. */
export const TRUNK_SEEN = 0.5;
/** A stretch of walking in view: frames this close stay one stretch; a stretch counts from this long. */
export const STRETCH_GAP_S = 0.35, MIN_STRETCH_S = 1.2;
/** The body is at least this tall in the picture (leg length, image heights): smaller is too far to measure. */
export const MIN_LEG_HEIGHT = 0.06;
/**
 * From the front the feet's lead is a small difference in height in the picture, lost in tracking noise when the
 * walker is far away: front frames count with the legs at least this tall (image heights; about a quarter of the
 * picture for the whole body).
 */
export const FRONT_MIN_LEG_HEIGHT = 0.1;
/** Hip width over leg length: a front view shows it at least this wide, a side view at most SIDE_MAX_HIP. */
export const FRONT_MIN_HIP = 0.12, SIDE_MAX_HIP = 0.2;
/**
 * Front step lengths: a foot d ahead of the other at distance D, filmed by a phone at height h with focal length f
 * (image heights), sits f·h·d/D² higher in the picture, and the legs (length L) are f·L/D tall; so d/L is the height
 * difference over the legs' size squared, times L/(f·h). With the phone at hip height that factor is 1/f; on a home
 * video (a phone held about chest high, a healthy adult's usual step of about 0.75 leg lengths read as about 1.5) it
 * was about a half. An estimate: the camera's height and lens vary, so left-right evenness and timing matter more.
 */
export const FRONT_DEPTH_SCALE = 0.5;
/** The walk's direction in a front video: the leg length grows or shrinks at least this fast (log units per s). */
export const DIRECTION_MIN_RATE = 0.04;
/** Steps: the feet's lead swings at least this far (leg lengths) and this share of its range; steps at least this far apart. */
export const STEP_MIN_PROMINENCE = 0.05, STEP_PROMINENCE_SHARE = 0.25, STEP_MIN_GAP_S = 0.33;
/** The Rehyn walking score's own gates (gait_scoring.py), checked here to tell the patient at once. */
export const SCORE_GATES = { detectedFrames: 24, coverage: 0.72, fullBody: 0.5, distal: 0.5, multiPerson: 0.2, steps: 3 };
/** The evidence reports at most this many frames (the Rehyn app accepts 24-60); the analysis itself uses every frame. */
export const REPORTED_FRAMES_MAX = 60;
/** The trunk's sway is used from a front video with at least this much walking in view (s). */
export const TRUNK_MIN_SECONDS = 2;

const DEG = 180 / Math.PI;
const finite = (n: number) => Number.isFinite(n);
const seen = (p: WalkPoint | undefined, min: number): p is WalkPoint =>
  !!p && finite(p.x) && finite(p.y) && (p.visibility ?? 1) >= min && p.x >= 0 && p.x <= 1 && p.y >= 0 && p.y <= 1;
const round = (n: number, places: number) => Math.round(n * 10 ** places) / 10 ** places;

function percentile(values: number[], fraction: number): number | null {
  const sorted = values.filter(finite).sort((a, b) => a - b);
  if (!sorted.length) return null;
  const at = (sorted.length - 1) * fraction, low = Math.floor(at), high = Math.ceil(at);
  return sorted[low] + (sorted[high] - sorted[low]) * (at - low);
}

/** The person to analyse in a frame: the biggest, most clearly seen (as the Rehyn runner chooses). */
export function choosePerson(poses: WalkPoint[][]): WalkPoint[] | null {
  let best: WalkPoint[] | null = null, bestScore = -1;
  for (const pose of poses) {
    if (!pose || pose.length < 33) continue;
    const usable = pose.filter(p => seen(p, 0.05));
    if (!usable.length) continue;
    const xs = usable.map(p => p.x), ys = usable.map(p => p.y);
    const area = (Math.max(...xs) - Math.min(...xs)) * (Math.max(...ys) - Math.min(...ys));
    const visibility = LOWER.reduce((sum, i) => sum + (pose[i]?.visibility ?? 0), 0) / LOWER.length;
    const score = area * Math.max(visibility, 0.05);
    if (score > bestScore) { best = pose; bestScore = score; }
  }
  return best;
}

/** The pose model gave the same answer: a repeated video frame. */
function samePose(a: WalkPoint[], b: WalkPoint[]): boolean {
  return [23, 24, 27, 28, 31, 32].every(i => Math.abs(a[i].x - b[i].x) < 1e-6 && Math.abs(a[i].y - b[i].y) < 1e-6);
}

type V = { x: number; y: number };
const sub = (a: V, b: V): V => ({ x: a.x - b.x, y: a.y - b.y });
const mid = (a: V, b: V): V => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
const len = (a: V) => Math.hypot(a.x, a.y);
const dot = (a: V, b: V) => a.x * b.x + a.y * b.y;

/** One frame in the body's frame (aspect-corrected, pelvis-centred, in leg lengths). */
type BodyFrame = {
  t: number;
  /** Leg length in image heights. */
  leg: number;
  /** Hip width over leg length. */
  hipWidth: number;
  /** Each foot (ankle, heel, toe) along the trunk (up) and across it, leg lengths from the pelvis. */
  left: { up: number; across: number };
  right: { up: number; across: number };
  /** Toes ahead of heels along "across" (leg lengths), both feet averaged: + when facing the "across" direction. */
  toesAhead: number;
  /** The nose ahead of the ears along "across" (leg lengths), or NaN. */
  noseAhead: number;
  /** The knees' bend (degrees, 0 straight), in the picture. */
  leftKnee: number;
  rightKnee: number;
  /** The trunk's lean from the picture's vertical (degrees, + to the picture's right). */
  trunk: number;
  lowerFullySeen: boolean;
  distal: number;
  people: number;
};

function bodyFrame(t: number, pose: WalkPoint[], aspect: number, people: number): BodyFrame | null {
  const P = (i: number): V => ({ x: pose[i].x * aspect, y: pose[i].y });
  if (![L.hip, R.hip, L.shoulder, R.shoulder].every(i => seen(pose[i], TRUNK_SEEN))) return null;
  if (!LOWER.every(i => seen(pose[i], LOWER_SEEN))) return null;
  const pelvis = mid(P(L.hip), P(R.hip)), shoulders = mid(P(L.shoulder), P(R.shoulder));
  const trunkVec = sub(shoulders, pelvis);
  if (len(trunkVec) < 1e-4) return null;
  const up = { x: trunkVec.x / len(trunkVec), y: trunkVec.y / len(trunkVec) };
  const across = { x: -up.y, y: up.x };
  const legOf = (s: typeof L | typeof R) => len(sub(P(s.hip), P(s.knee))) + len(sub(P(s.knee), P(s.ankle)));
  const leg = (legOf(L) + legOf(R)) / 2;
  if (!(leg >= MIN_LEG_HEIGHT)) return null;
  const foot = (s: typeof L | typeof R) => {
    const f = { x: (P(s.ankle).x + P(s.heel).x + P(s.toe).x) / 3, y: (P(s.ankle).y + P(s.heel).y + P(s.toe).y) / 3 };
    const d = sub(f, pelvis);
    return { up: dot(d, up) / leg, across: dot(d, across) / leg };
  };
  const toes = (dot(sub(P(L.toe), P(L.heel)), across) + dot(sub(P(R.toe), P(R.heel)), across)) / 2 / leg;
  const ears = seen(pose[7], 0.5) && seen(pose[8], 0.5) ? mid(P(7), P(8)) : null;
  const noseAhead = ears && seen(pose[0], 0.5) ? dot(sub(P(0), ears), across) / leg : NaN;
  const knee = (s: typeof L | typeof R) => {
    const a = sub(P(s.hip), P(s.knee)), b = sub(P(s.ankle), P(s.knee));
    const c = dot(a, b) / Math.max(1e-9, len(a) * len(b));
    return 180 - Math.acos(Math.max(-1, Math.min(1, c))) * DEG;
  };
  return {
    t, leg,
    hipWidth: len(sub(P(L.hip), P(R.hip))) / leg,
    left: foot(L), right: foot(R),
    toesAhead: toes, noseAhead,
    leftKnee: knee(L), rightKnee: knee(R),
    trunk: Math.atan2(shoulders.x - pelvis.x, pelvis.y - shoulders.y) * DEG,
    lowerFullySeen: LOWER.every(i => (pose[i].visibility ?? 1) >= 0.45),
    distal: DISTAL.reduce((sum, i) => sum + (pose[i].visibility ?? 1), 0) / DISTAL.length,
    people,
  };
}

/** Stretches of consecutive analysable frames (gaps of at most STRETCH_GAP_S), at least MIN_STRETCH_S long. */
function stretches(rows: BodyFrame[]): BodyFrame[][] {
  const out: BodyFrame[][] = [];
  let current: BodyFrame[] = [];
  for (const row of rows) {
    if (current.length && row.t - current[current.length - 1].t > STRETCH_GAP_S) { out.push(current); current = []; }
    current.push(row);
  }
  if (current.length) out.push(current);
  return out.filter(s => s[s.length - 1].t - s[0].t >= MIN_STRETCH_S);
}

/** The values within `half` seconds either side of each frame. */
function around(values: number[], times: number[], i: number, half: number): number[] {
  const out: number[] = [];
  for (let j = i; j >= 0 && times[i] - times[j] <= half; j--) out.push(values[j]);
  for (let j = i + 1; j < values.length && times[j] - times[i] <= half; j++) out.push(values[j]);
  return out;
}
/** A one-frame tracking spike removed (a centred median over SPIKE_HALF_S), then a centred average over SMOOTH_HALF_S. */
export const SPIKE_HALF_S = 0.07, SMOOTH_HALF_S = 0.07;
function smooth(values: number[], times: number[]): number[] {
  const despiked = values.map((_, i) => percentile(around(values, times, i, SPIKE_HALF_S), 0.5) ?? values[i]);
  return despiked.map((_, i) => { const near = around(despiked, times, i, SMOOTH_HALF_S); return near.reduce((a, b) => a + b, 0) / near.length; });
}

/** Peaks of a series: local maxima at least `prominence` above the lower of the minima within 0.6 s either side. */
function peaks(values: number[], times: number[], prominence: number): number[] {
  const found: { index: number; prominence: number }[] = [];
  for (let i = 1; i < values.length - 1; i++) {
    if (values[i] < values[i - 1] || values[i] < values[i + 1]) continue;
    let leftMin = values[i], rightMin = values[i];
    for (let j = i - 1; j >= 0 && times[i] - times[j] <= 0.6; j--) leftMin = Math.min(leftMin, values[j]);
    for (let j = i + 1; j < values.length && times[j] - times[i] <= 0.6; j++) rightMin = Math.min(rightMin, values[j]);
    const p = values[i] - Math.max(leftMin, rightMin);
    if (p >= prominence) found.push({ index: i, prominence: p });
  }
  const kept: typeof found = [];
  for (const candidate of found) {
    const previous = kept[kept.length - 1];
    if (!previous || times[candidate.index] - times[previous.index] >= STEP_MIN_GAP_S) kept.push(candidate);
    else if (candidate.prominence > previous.prominence) kept[kept.length - 1] = candidate;
  }
  return kept.map(k => k.index);
}

/** Steps in one stretch from the left foot's lead (leg lengths, + when the left foot is ahead). */
function stretchSteps(rows: BodyFrame[], lead: number[], length: (row: BodyFrame, lead: number) => number): WalkStepEvent[] {
  const times = rows.map(r => r.t);
  const series = smooth(lead, times);
  const range = (percentile(series, 0.95) ?? 0) - (percentile(series, 0.05) ?? 0);
  const prominence = Math.max(STEP_MIN_PROMINENCE, range * STEP_PROMINENCE_SHARE);
  const events = [
    ...peaks(series, times, prominence).map(i => ({ i, side: "left" as const })),
    ...peaks(series.map(v => -v), times, prominence).map(i => ({ i, side: "right" as const })),
  ].sort((a, b) => a.i - b.i)
    // Not at a stretch's very ends, where a peak may be cut short.
    .filter(e => times[e.i] - times[0] >= 0.1 && times[times.length - 1] - times[e.i] >= 0.1);
  // One foot's lead twice in a row is one step (the bigger kept).
  const alternate = (list: { i: number; side: "left" | "right" }[]) => {
    const out: { i: number; side: "left" | "right" }[] = [];
    for (const e of list) {
      const previous = out[out.length - 1];
      if (previous && previous.side === e.side) { if (Math.abs(series[e.i]) > Math.abs(series[previous.i])) out[out.length - 1] = e; }
      else out.push(e);
    }
    return out;
  };
  let alternating = alternate(events);
  // A step far quicker than the stretch's usual step is a tracking wobble, not a step: the weaker of its two ends goes
  // (and the feet's alternation is restored).
  for (let changed = true; changed && alternating.length >= 3;) {
    changed = false;
    const gaps = alternating.slice(1).map((e, k) => times[e.i] - times[alternating[k].i]);
    const usual = percentile(gaps, 0.5) ?? 0;
    const k = gaps.findIndex(g => g < usual * SHORT_STEP_SHARE);
    if (k >= 0) {
      const a = alternating[k], b = alternating[k + 1];
      alternating = alternate(alternating.filter(e => e !== (Math.abs(series[a.i]) < Math.abs(series[b.i]) ? a : b)));
      changed = true;
    }
  }
  // Steady walking only: steps in a stretch's first and last STEADY_EDGE_S (starting off, after a turn, slowing down)
  // are left out.
  const steady = alternating.filter(e => times[e.i] - times[0] >= STEADY_EDGE_S && times[times.length - 1] - times[e.i] >= STEADY_EDGE_S);
  return steady.map(e => ({ side: e.side, time_s: round(peakTime(series, times, e.i, e.side === "left" ? 1 : -1), 3), step_length_proxy_leg_ratio: round(Math.min(2, length(rows[e.i], series[e.i])), 4) }));
}

/** A peak's time between frames: the top of the parabola through it and its neighbours (sign -1 for a trough). */
function peakTime(series: number[], times: number[], i: number, sign: 1 | -1): number {
  if (i <= 0 || i >= series.length - 1) return times[i];
  const a = sign * series[i - 1], b = sign * series[i], c = sign * series[i + 1];
  const curve = a - 2 * b + c;
  if (curve >= 0) return times[i];
  const offset = Math.max(-0.5, Math.min(0.5, 0.5 * (a - c) / curve));
  return times[i] + offset * (offset < 0 ? times[i] - times[i - 1] : times[i + 1] - times[i]);
}
/** Steps this close to a stretch's start or end are not steady walking. */
export const STEADY_EDGE_S = 0.25;
/** A step shorter than this share of the stretch's usual step time is not a step. */
export const SHORT_STEP_SHARE = 0.6;

/** The step detection's sampling rate: about the Rehyn runner's own (10 a second). */
export const STEP_SAMPLING_FPS = 10;
/** Steps found by different samplings within this long of each other, with the same leading foot, are one step. */
export const SAME_STEP_S = 0.15;

/** The steps most samplings agree on: each at the median of its times and lengths, the feet alternating. */
function agreedSteps(found: WalkStepEvent[][]): WalkStepEvent[] {
  if (found.length === 1) return found[0];
  const groups: WalkStepEvent[][] = [];
  for (const event of found.flat().sort((a, b) => a.time_s - b.time_s)) {
    const group = groups.find(g => g[0].side === event.side && Math.abs((percentile(g.map(e => e.time_s), 0.5) ?? 0) - event.time_s) <= SAME_STEP_S);
    if (group) group.push(event); else groups.push([event]);
  }
  const agreed = groups.filter(g => g.length * 2 >= found.length)
    .map(g => ({ side: g[0].side, time_s: round(percentile(g.map(e => e.time_s), 0.5)!, 3), step_length_proxy_leg_ratio: round(percentile(g.map(e => e.step_length_proxy_leg_ratio), 0.5)!, 4), support: g.length }))
    .sort((a, b) => a.time_s - b.time_s);
  const out: (WalkStepEvent & { support: number })[] = [];
  for (const e of agreed) {
    const previous = out[out.length - 1];
    if (previous && previous.side === e.side) { if (e.support > previous.support) out[out.length - 1] = e; }
    else out.push(e);
  }
  return out.map(({ support: _support, ...e }) => e);
}

/**
 * A front video's step length depends on how far away the walker is (the feet's separation shrinks with distance
 * faster than the legs do), so each stretch's steps are scaled to the video's overall typical step: left and right
 * are compared at the same distance, and the typical length is kept.
 */
function evenOutDistance(byStretch: WalkStepEvent[][]): WalkStepEvent[][] {
  const all = byStretch.flat().map(e => e.step_length_proxy_leg_ratio);
  const overall = percentile(all, 0.5);
  if (!overall) return byStretch;
  return byStretch.map(events => {
    const typical = percentile(events.map(e => e.step_length_proxy_leg_ratio), 0.5);
    if (!typical || events.length < 2) return events;
    return events.map(e => ({ ...e, step_length_proxy_leg_ratio: round(Math.min(2, e.step_length_proxy_leg_ratio * overall / typical), 4) }));
  });
}

/**
 * A stretch where the walker is small in the picture (far away) or turning tracks the feet poorly and its step
 * timing jumps about. When some stretches step regularly (their step times vary by at most REGULAR_STEP_CV) with at
 * least SCORE_GATES.steps steps between them, only those are used; otherwise all are.
 */
export const REGULAR_STEP_CV = 0.25;
function stepTimeCv(events: WalkStepEvent[]): number | null {
  const gaps = events.slice(1).map((e, k) => e.time_s - events[k].time_s);
  if (gaps.length < 2) return gaps.length === 1 ? 0 : null;
  const mean = gaps.reduce((a, b) => a + b, 0) / gaps.length;
  return Math.sqrt(gaps.reduce((a, b) => a + (b - mean) ** 2, 0) / gaps.length) / mean;
}
function keepRegularStretches(byStretch: WalkStepEvent[][]): WalkStepEvent[][] {
  const regular = byStretch.filter(events => events.length >= 2 && (stepTimeCv(events) ?? 1) <= REGULAR_STEP_CV);
  const steps = regular.reduce((n, events) => n + events.length, 0);
  return steps >= SCORE_GATES.steps && regular.length < byStretch.length ? regular : byStretch;
}

/**
 * The stretches' steps as one list. The Rehyn score times each step from the previous one when they lead with
 * different feet, so a stretch whose first step leads with the other foot from the previous stretch's last would
 * time the turn (or the gap) as a step: that first step is left out.
 */
function joinStretches(byStretch: WalkStepEvent[][]): WalkStepEvent[] {
  const out: WalkStepEvent[] = [];
  for (const events of byStretch) {
    const previous = out[out.length - 1];
    out.push(...(previous && events.length && events[0].side !== previous.side ? events.slice(1) : events));
  }
  return out;
}

/**
 * How fast the body grows (+) or shrinks in the picture around a frame (log leg length per s, over APPROACH_HALF_S
 * either side): walking toward or away from the phone at a usual pace from a few metres is 0.2-0.5.
 */
export const APPROACH_HALF_S = 0.4, FRONT_MIN_APPROACH = 0.08;
function scaleRate(rows: BodyFrame[], i: number): number {
  const near = rows.filter(r => Math.abs(r.t - rows[i].t) <= APPROACH_HALF_S);
  if (near.length < 3) return 0;
  const mx = near.reduce((a, r) => a + r.t, 0) / near.length, my = near.reduce((a, r) => a + Math.log(r.leg), 0) / near.length;
  let num = 0, den = 0;
  for (const r of near) { num += (r.t - mx) * (Math.log(r.leg) - my); den += (r.t - mx) ** 2; }
  return den > 0 ? num / den : 0;
}

/** The walk's direction in a front-video stretch: +1 toward the phone, -1 away, 0 unclear. */
function frontDirection(rows: BodyFrame[]): -1 | 0 | 1 {
  const xs = rows.map(r => r.t), ys = rows.map(r => Math.log(r.leg));
  const mx = xs.reduce((a, b) => a + b, 0) / xs.length, my = ys.reduce((a, b) => a + b, 0) / ys.length;
  let num = 0, den = 0;
  xs.forEach((x, i) => { num += (x - mx) * (ys[i] - my); den += (x - mx) ** 2; });
  const rate = den > 0 ? num / den : 0;
  return rate >= DIRECTION_MIN_RATE ? 1 : rate <= -DIRECTION_MIN_RATE ? -1 : 0;
}

/** Facing in a side-video stretch: +1 when the person faces the trunk's "across" direction, -1 the other way, 0 unclear. */
function sideFacing(rows: BodyFrame[]): -1 | 0 | 1 {
  const toes = percentile(rows.map(r => r.toesAhead), 0.5) ?? 0;
  if (Math.abs(toes) >= 0.02) return toes > 0 ? 1 : -1;
  const nose = percentile(rows.map(r => r.noseAhead).filter(finite), 0.5);
  return nose === null || Math.abs(nose) < 0.01 ? 0 : nose > 0 ? 1 : -1;
}

/** Splits a side video's stretch where the facing changes (the turn), keeping walking pieces long enough. */
function splitAtTurns(rows: BodyFrame[]): BodyFrame[][] {
  const pieces: BodyFrame[][] = [];
  let current: BodyFrame[] = [], sign = 0;
  const signs = smooth(rows.map(r => r.toesAhead), rows.map(r => r.t));
  rows.forEach((row, i) => {
    const s = Math.abs(signs[i]) >= 0.02 ? Math.sign(signs[i]) : sign;
    if (sign && s && s !== sign && current.length) { pieces.push(current); current = []; }
    if (s) sign = s;
    current.push(row);
  });
  if (current.length) pieces.push(current);
  return pieces.filter(p => p[p.length - 1].t - p[0].t >= MIN_STRETCH_S);
}

/**
 * Analyses one walking video, given its frames (sampled evenly; 10-15 a second is plenty) and the picture's width
 * over its height. `durationMs` is the whole video's length.
 */
export function analyzeWalkVideo(frames: WalkVideoFrame[], aspect: number, view: WalkView, durationMs: number): WalkVideoAnalysis {
  // A phone video often repeats a frame: a repeat adds nothing and would flatten the steps' timing.
  const people = frames.map(f => ({ t: f.t, pose: choosePerson(f.poses), count: f.poses.length }))
    .filter((p, i, all) => i === 0 || !p.pose || !all[i - 1].pose || !samePose(p.pose, all[i - 1].pose!));
  const base = { view, evidence: null, durationMs, analysedSeconds: 0 };
  if (!people.some(p => p.pose)) return { ...base, reasons: ["no_person"] };
  const rows = people.map(p => (p.pose ? bodyFrame(p.t, p.pose, aspect, p.count) : null)).filter((r): r is BodyFrame => !!r);
  const fitting = rows.filter(r => (view === "front" ? r.hipWidth >= FRONT_MIN_HIP && r.leg >= FRONT_MIN_LEG_HEIGHT : r.hipWidth <= SIDE_MAX_HIP))
    // From the front, walking is moving toward or away from the phone: standing, stopping and turning are left out.
    .filter((r, i, all) => view !== "front" || Math.abs(scaleRate(all, i)) >= FRONT_MIN_APPROACH);
  let walking = stretches(fitting);
  if (view === "side") walking = walking.flatMap(splitAtTurns);
  if (!walking.length) {
    const reasons: WalkVideoReason[] = [];
    const posed = people.filter(p => p.pose).length;
    if (rows.length < posed * 0.3) reasons.push("feet_not_visible");
    else if (fitting.length < rows.length * 0.3) reasons.push(view === "side" ? "not_side_on" : "not_front_on");
    else reasons.push("too_short");
    return { ...base, reasons };
  }

  // Steps are found in each of a few interleaved samplings of about STEP_SAMPLING_FPS (each frame in one), and a step
  // counts when most samplings find it: one sampling's timing depends on which frames it happens to hold.
  // The frame rate while walking was in view (gaps out of view do not count).
  const intervals = walking.flatMap(s => s.slice(1).map((r, i) => r.t - s[i].t)).filter(dt => dt > 0);
  const frameRate = 1 / Math.max(1e-3, percentile(intervals, 0.5) ?? 0.1);
  const samplings = Math.max(1, Math.round(frameRate / STEP_SAMPLING_FPS));
  let byStretch: WalkStepEvent[][] = [];
  for (const stretch of walking) {
    const found: WalkStepEvent[][] = [];
    for (let phase = 0; phase < samplings; phase++) {
      const rowsHere = stretch.filter((_, i) => i % samplings === phase);
      if (rowsHere.length < 4) continue;
      if (view === "front") {
        const direction = frontDirection(rowsHere) || 1;
        // Toward the phone the leading foot is lower in the picture (less "up"); away from it, higher.
        const lead = rowsHere.map(r => (r.right.up - r.left.up) * direction);
        // The step's length is how far one foot is ahead of the other, which from the front shows as a difference in
        // height in the picture (the feet's side-to-side gap is the step's width, not its length). In perspective that
        // difference shrinks with distance twice as fast as the legs do, so it is divided by the legs' size once more:
        // for a phone at about hip height that gives the step in leg lengths (FRONT_DEPTH_SCALE).
        found.push(stretchSteps(rowsHere, lead, r => Math.abs(r.left.up - r.right.up) / r.leg * FRONT_DEPTH_SCALE));
      } else {
        const facing = sideFacing(rowsHere);
        if (!facing) continue;
        const lead = rowsHere.map(r => (r.left.across - r.right.across) * facing);
        found.push(stretchSteps(rowsHere, lead, (_r, value) => Math.abs(value)));
      }
    }
    if (found.length) byStretch.push(agreedSteps(found));
  }
  byStretch = keepRegularStretches(byStretch);
  if (view === "front") byStretch = evenOutDistance(byStretch);
  const events = joinStretches(byStretch);

  // Quality over the analysed stretches: their frames found against the frames in their time spans.
  const spanFrames = people.filter(p => walking.some(s => p.t >= s[0].t && p.t <= s[s.length - 1].t));
  const analysed = walking.flat();
  const coverage = analysed.length / Math.max(1, spanFrames.length);
  const fullBody = analysed.filter(r => r.lowerFullySeen).length / Math.max(1, analysed.length);
  const distal = analysed.reduce((sum, r) => sum + r.distal, 0) / Math.max(1, analysed.length);
  const multi = spanFrames.filter(p => p.count > 1).length / Math.max(1, spanFrames.length);
  const analysedSeconds = walking.reduce((sum, s) => sum + (s[s.length - 1].t - s[0].t), 0);
  const reportedSampled = Math.max(SCORE_GATES.detectedFrames, Math.min(REPORTED_FRAMES_MAX, spanFrames.length));
  const fps = analysed.length / Math.max(0.1, analysedSeconds);

  // Knee bend in swing (side only): the 90th percentile of each knee's bend while walking.
  const knee = (side: "leftKnee" | "rightKnee") => (view === "side" ? percentile(analysed.map(r => r[side]), 0.9) : null);
  // Trunk sway (front only): the trunk's lean range within each stretch, the median across stretches.
  const sways = view === "front" ? walking.map(s => (percentile(s.map(r => r.trunk), 0.95) ?? 0) - (percentile(s.map(r => r.trunk), 0.05) ?? 0)) : [];
  const sway = sways.length ? percentile(sways, 0.5) : null;

  const evidence: WalkEvidence = {
    status: "completed",
    analysis_method: "mediapipe_browser_body_centric_2d_v1",
    camera_motion_handling: "body_centric_2d_browser",
    coordinate_frame: "pelvis_centered_leg_normalized_2d",
    quality: {
      sampled_frames: reportedSampled,
      detected_frames: Math.min(reportedSampled, Math.round(coverage * reportedSampled)),
      tracking_coverage: round(Math.min(1, coverage), 3),
      full_body_visibility: round(fullBody, 3),
      distal_visibility: round(distal, 3),
      multi_person_ratio: round(multi, 3),
      background_motion_reliable_ratio: 0,
    },
    features: {
      step_events: events.slice(0, reportedSampled),
      left_foot_clearance_leg_ratio: null,
      right_foot_clearance_leg_ratio: null,
      foot_clearance_reliable: false,
      left_swing_knee_flexion_deg: knee("leftKnee") === null ? null : round(knee("leftKnee")!, 1),
      right_swing_knee_flexion_deg: knee("rightKnee") === null ? null : round(knee("rightKnee")!, 1),
      // Reported for review, not scored: a phone's view of the trunk's sway is too noisy (as the Rehyn runner's).
      trunk_lateral_excursion_deg: sway === null ? null : round(sway, 1),
      trunk_measurement_reliable: false,
    },
    provenance: {
      source_video_id: "",
      pose_model: "pose_landmarker_lite.task",
      analysis_fps: round(fps, 3),
      processing_location: "patient_browser",
      uses_3d_reconstruction: false,
      frame_detection_mode: "video",
      views: [view],
      analysed_frames: analysed.length,
    },
  };
  const reasons = scoreGateReasons(evidence);
  return { view, evidence: reasons.length ? null : evidence, reasons, durationMs, analysedSeconds: round(analysedSeconds, 2) };
}

/** The Rehyn walking score's own reasons for not scoring, as the patient's reasons. */
export function scoreGateReasons(evidence: WalkEvidence): WalkVideoReason[] {
  const q = evidence.quality, steps = evidence.features.step_events;
  const reasons: WalkVideoReason[] = [];
  if (q.detected_frames < SCORE_GATES.detectedFrames || q.tracking_coverage < SCORE_GATES.coverage) reasons.push("too_short");
  if (q.full_body_visibility < SCORE_GATES.fullBody || q.distal_visibility < SCORE_GATES.distal) reasons.push("feet_not_visible");
  if (q.multi_person_ratio > SCORE_GATES.multiPerson) reasons.push("multiple_people");
  if (steps.length < SCORE_GATES.steps || !steps.some(s => s.side === "left") || !steps.some(s => s.side === "right")) reasons.push("too_few_steps");
  return reasons.filter((reason, i) => reasons.indexOf(reason) === i);
}

/**
 * The walking evidence to score: with a scorable side video, its steps and knee bend, plus a scorable front video's
 * trunk sway; otherwise the one scorable video's own evidence; null when neither can be scored. `durationMs` is the
 * task's duration (the videos used, together), which every step time falls within.
 */
export function combineWalkEvidence(front: WalkVideoAnalysis | null, side: WalkVideoAnalysis | null): { evidence: WalkEvidence; durationMs: number; views: WalkView[] } | null {
  const f = front?.evidence ?? null, s = side?.evidence ?? null;
  // The walking's duration is the videos used.
  const durationMs = (f ? front!.durationMs : 0) + (s ? side!.durationMs : 0);
  if (s && f) {
    return {
      durationMs,
      views: ["side", "front"],
      evidence: {
        ...s,
        features: {
          ...s.features,
          trunk_lateral_excursion_deg: f.features.trunk_lateral_excursion_deg,
          trunk_measurement_reliable: f.features.trunk_measurement_reliable,
        },
        provenance: { ...s.provenance, views: ["side", "front"], analysed_frames: s.provenance.analysed_frames + f.provenance.analysed_frames },
      },
    };
  }
  if (s) return { evidence: s, durationMs, views: ["side"] };
  if (f) return { evidence: f, durationMs, views: ["front"] };
  return null;
}
