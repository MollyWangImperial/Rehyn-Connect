// The walking task's other how-to-film demonstration, for patients without room to film from the side: a looping
// 9.6 s animation. "Set up": the room from the side, the phone standing upright (portrait) on a stool at hip height at
// one end, its view down the room's length, a dashed path away from it with Start about 2 big steps out and Turn near
// the far wall. "What the camera sees": the portrait picture inside a phone, where a stick figure seen from behind
// walks away (getting smaller), turns, and walks back facing the camera (getting bigger), stopping with its feet still
// inside the picture; head to feet always inside. One caption per phase. Reduced motion: three still frames. Its look,
// layout and API match walk-demo.ts's side-view demonstration, so either can be shown.

import { type Box, type WalkerPose, WALKER_SPAN, walkerPose } from "./walk-demo";

/** The app's colours: deep green (text, frame), green (the patient), coral (the phone's view, markers), pale green, paper. */
const C = { dark: "#285b49", green: "#3c8255", coral: "#e18e6d", pale: "#b9d3c2", paper: "#fffefa" } as const;
const FONT = "Manrope, sans-serif";

/** One loop of the demonstration. */
export const WALK_FRONT_DEMO_MS = 9600;
/** Standing at the start, walking away, turning, walking back (ms into the loop); then standing again. */
const STAND_END = 1800, AWAY_END = 4800, TURN_END = 5700, BACK_END = 8700;
/** Steps (half leg cycles) each way: a whole number, so the legs come together as the walker stops. */
const WALK_STEPS = 6;
/** The caption of each phase. */
export const WALK_FRONT_DEMO_CAPTIONS = ["No room? Stand it up at one end", "Walk away from it…", "…turn, and walk back toward it"] as const;

/**
 * Distances from the phone, in start-mark distances (the start mark, about 2 big steps out, is 1): where the walker
 * turns, where it stops on the way back (a little nearer than it started, feet still in the picture) and the far wall.
 */
export const FRONT_TURN_DISTANCE = 3, FRONT_STOP_DISTANCE = 0.93;
const WALL_DISTANCE = 3.4;
/** In the camera's picture the walker, head to feet, is this share of the picture's height at the start mark. */
export const FRONT_START_SHARE = 0.78;

export type WalkFrontDemoState = {
  phase: 0 | 1 | 2;
  /** How far the walker is from the phone, in start-mark distances (1 at the start mark). */
  distance: number;
  /** +1 walking away (its back to the camera), −1 walking back toward it (facing it). */
  facing: 1 | -1;
  /** 0 along the path (back or front to the camera), 1 mid-turn (side-on to the camera, facing across the room). */
  turn: number;
  /** The legs' cycle, radians (one step per half cycle). */
  cycle: number;
  /** How far the legs and arms swing: 0 standing on both feet (still, turning), 1 walking; eased over the first and last half step. */
  stride: number;
};

/** Standing at the start mark, back to the phone (the set-up's still frame too). */
const STANDING: WalkFrontDemoState = { phase: 0, distance: 1, facing: 1, turn: 0, cycle: 0, stride: 0 };

/** The demonstration at a moment of its loop. */
export function walkFrontDemoState(elapsedMs: number): WalkFrontDemoState {
  const t = ((elapsedMs % WALK_FRONT_DEMO_MS) + WALK_FRONT_DEMO_MS) % WALK_FRONT_DEMO_MS;
  const walk = (from: number, to: number) => {
    const u = (t - from) / (to - from), ease = clamp(Math.min(u, 1 - u) * WALK_STEPS * 2, 0, 1);
    return { u, cycle: u * WALK_STEPS * Math.PI, stride: ease * ease * (3 - 2 * ease) };
  };
  if (t < STAND_END) return { ...STANDING };
  if (t < AWAY_END) { const { u, cycle, stride } = walk(STAND_END, AWAY_END); return { phase: 1, distance: lerp(1, FRONT_TURN_DISTANCE, u), facing: 1, turn: 0, cycle, stride }; }
  if (t < TURN_END) { const u = (t - AWAY_END) / (TURN_END - AWAY_END); return { phase: 2, distance: FRONT_TURN_DISTANCE, facing: u < 0.5 ? 1 : -1, turn: Math.sin(Math.PI * u), cycle: 0, stride: 0 }; }
  if (t < BACK_END) { const { u, cycle, stride } = walk(TURN_END, BACK_END); return { phase: 2, distance: lerp(FRONT_TURN_DISTANCE, FRONT_STOP_DISTANCE, u), facing: -1, turn: 0, cycle, stride }; }
  return { phase: 2, distance: FRONT_STOP_DISTANCE, facing: -1, turn: 0, cycle: 0, stride: 0 };
}

const clamp = (value: number, low: number, high: number) => Math.min(high, Math.max(low, value));
const lerp = (a: number, b: number, u: number) => a + (b - a) * u;

/** The canvas height (CSS px) the demonstration wants at this width: side by side when wide, stacked when narrow. */
export function walkFrontDemoHeight(width: number, reducedMotion: boolean): number {
  if (reducedMotion) {
    if (width >= 620) return Math.round(width * 0.48);
    // Narrow: the set-up across the width, then the two camera stills side by side, each with its caption underneath.
    const pad = demoPad(width), inner = width - 2 * pad, half = (inner - pad) / 2;
    return Math.round(pad + inner * STILL_SET_UP + STILL_CAPTION + pad + half * STILL_CAMERA + STILL_CAMERA_CAPTION + pad);
  }
  return Math.round(width >= 520 ? width * 0.5 : width * 1.7);
}
const demoPad = (width: number) => clamp(width * 0.03, 8, 18);
/**
 * Narrow still frames: the set-up's height as a share of the width, a camera still's as a share of its half, and the
 * captions' (a camera still's caption may take two lines).
 */
const STILL_SET_UP = 0.66, STILL_CAMERA = 1.5, STILL_CAPTION = 34, STILL_CAMERA_CAPTION = 44;
/** The phone's shape, width over height, bezel included (its picture is about 9:16). */
const PHONE_ASPECT = 0.56;

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

type P = { x: number; y: number };

/**
 * A stick figure seen from in front or from behind, feet at (x, footY), `height` tall (the same build as walkerPose).
 * Walking, the swinging foot lifts and its knee rises, the opposite hand comes up a little and the hips shift over the
 * standing foot; with `stride` 0 it stands on both feet. `side` turns it toward side-on (1 = side-on, facing `facing`
 * across the picture), standing as walkerPose stands, for the turn.
 */
export function frontWalkerPose(x: number, footY: number, height: number, cycle: number, stride = 1, side = 0, facing: 1 | -1 = 1): WalkerPose {
  const h = height, swing = clamp(stride, 0, 1), turned = clamp(side, 0, 1), open = 1 - turned;
  const hipY = footY - 0.5 * h, shoulderY = footY - 0.79 * h, headY = footY - 0.9 * h;
  const cx = x + 0.015 * h * Math.sin(cycle) * swing * open;
  const legs = [cycle, cycle + Math.PI].map((phase, k) => {
    const out = k ? 1 : -1, hipX = cx + out * 0.07 * h * open;
    const lift = 0.07 * h * Math.max(0, Math.sin(phase)) * swing;
    // Side-on, the legs stand a little apart along the way it faces, so both feet are seen.
    const ankle = { x: hipX + out * 0.015 * h * open + turned * out * 0.06 * h * facing, y: footY - lift };
    const knee = { x: (hipX + ankle.x) / 2 + out * 0.01 * h * open, y: hipY + 0.25 * h - 0.45 * lift };
    return { hip: { x: hipX, y: hipY }, knee, ankle, toe: { x: ankle.x + out * 0.035 * h * open + 0.08 * h * facing * turned, y: ankle.y } };
  });
  const arms = [cycle + Math.PI, cycle].map((phase, k) => {
    const out = k ? 1 : -1, forward = Math.max(0, Math.sin(phase)) * swing;
    const sx = cx + out * 0.13 * h * open + 0.03 * h * facing * turned;
    const elbow = { x: sx + out * 0.03 * h * open, y: shoulderY + 0.17 * h - 0.02 * h * forward };
    return { shoulder: { x: sx, y: shoulderY }, elbow, hand: { x: elbow.x + out * 0.01 * h * open + Math.sin(0.35) * 0.16 * h * facing * turned, y: elbow.y + 0.16 * h - 0.05 * h * forward } };
  });
  return { legs, arms, neck: { x: cx + 0.02 * h * facing * turned, y: shoulderY }, pelvis: { x: cx, y: hipY }, head: { x: cx + 0.03 * h * facing * turned, y: headY }, headR: 0.085 * h };
}

/**
 * Draws a figure's pose; `halo` outlines it in paper. Seen from behind, the head is filled in (hair); from in front,
 * two eyes; `marks` fades them (mid-turn).
 */
function drawFigure(ctx: CanvasRenderingContext2D, pose: WalkerPose, height: number, color: string, halo: boolean, view: "back" | "front" | null = null, marks = 1) {
  const lw = clamp(height * 0.045, 2, 10);
  const strokeAll = (style: string, width: number) => {
    ctx.strokeStyle = style; ctx.lineWidth = width;
    const line = (points: P[]) => { ctx.beginPath(); points.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y))); ctx.stroke(); };
    for (const leg of pose.legs) line([leg.hip, leg.knee, leg.ankle, leg.toe]);
    line([pose.neck, pose.pelvis]);
    if (Math.abs(pose.arms[0].shoulder.x - pose.arms[1].shoulder.x) > 1) line([pose.arms[0].shoulder, pose.arms[1].shoulder]);
    for (const arm of pose.arms) line([arm.shoulder, arm.elbow, arm.hand]);
    ctx.beginPath(); ctx.arc(pose.head.x, pose.head.y, pose.headR, 0, Math.PI * 2); ctx.stroke();
  };
  ctx.save();
  ctx.lineCap = "round"; ctx.lineJoin = "round";
  if (halo) strokeAll(C.paper, lw * 2.6);
  strokeAll(color, lw);
  if (view && marks > 0.05) {
    const { x, y } = pose.head, r = pose.headR;
    ctx.globalAlpha = marks; ctx.fillStyle = color;
    if (view === "back") { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); }
    else for (const side of [-1, 1]) { ctx.beginPath(); ctx.arc(x + side * r * 0.38, y - r * 0.05, Math.max(0.8, r * 0.15), 0, Math.PI * 2); ctx.fill(); }
  }
  ctx.restore();
}

function panelTitle(ctx: CanvasRenderingContext2D, text: string, box: Box, font: number) {
  ctx.save();
  ctx.fillStyle = C.dark;
  ctx.font = `800 ${font}px ${FONT}`;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText(text, box.x + 2, box.y);
  ctx.restore();
}

/** The space under a panel's title (null: no title, but the same space, so still frames line up). */
function underTitle(ctx: CanvasRenderingContext2D, box: Box, title: string | null): Box {
  const font = clamp(box.w * 0.05, 10.5, 15);
  if (title) panelTitle(ctx, title, box, font + 1);
  const top = box.y + font * 1.9;
  return { x: box.x, y: top, w: box.w, h: box.y + box.h - top };
}

/** The largest box of this width-over-height shape inside `area`, centred. */
function fit(area: Box, aspect: number): Box {
  const w = Math.min(area.w, area.h * aspect), h = w / aspect;
  return { x: area.x + (area.w - w) / 2, y: area.y + (area.h - h) / 2, w, h };
}

/** In the set-up, along the room (−1 the phone's end, 1 the far wall): the phone, and how far one start-mark distance reaches. */
const PHONE_U = -0.84, DISTANCE_U = (0.96 - PHONE_U) / WALL_DISTANCE, PATH_D = 0.5;

/** The room from the side: the floor, the stool with the phone standing on it, its view, the path and its markers. */
function drawSetUp(ctx: CanvasRenderingContext2D, box: Box, state: WalkFrontDemoState, now: number, reducedMotion: boolean) {
  // The room keeps a landscape shape, using the panel's width when it can.
  const space = underTitle(ctx, box, "Set up");
  const room = fit(space, clamp(space.w / Math.max(1, space.h), 1.25, 1.9));
  const font = clamp(room.w * 0.045, 10, 14), unit = room.h;
  const backY = room.y + room.h * 0.22, frontY = room.y + room.h;
  // A point on the floor: u along the room (−1 the phone's end .. 1 the far wall), d into it (0 front .. 1 back wall).
  const floor = (u: number, d: number) => ({ x: room.x + room.w / 2 + u * lerp(room.w * 0.5, room.w * 0.36, d), y: lerp(frontY, backY, d) });
  const along = (distance: number) => PHONE_U + distance * DISTANCE_U;
  const polyline = (points: P[]) => points.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
  ctx.save();
  ctx.lineCap = "round"; ctx.lineJoin = "round";
  // Back wall and floor.
  ctx.fillStyle = "rgba(185,211,194,.14)";
  ctx.strokeStyle = C.pale; ctx.lineWidth = 1.5;
  const wallL = floor(-1, 1), wallR = floor(1, 1);
  ctx.fillRect(wallL.x, room.y, wallR.x - wallL.x, backY - room.y);
  ctx.strokeRect(wallL.x, room.y, wallR.x - wallL.x, backY - room.y);
  ctx.beginPath(); polyline([floor(-1, 1), floor(1, 1), floor(1, 0), floor(-1, 0)]); ctx.closePath();
  ctx.fillStyle = "rgba(185,211,194,.28)"; ctx.fill(); ctx.stroke();

  // The phone's view on the floor, from the phone down the room's length to the far wall.
  const edge = (sign: number) => Array.from({ length: 9 }, (_, k) => { const s = k / 8; return floor(lerp(PHONE_U + 0.04, 1, s), PATH_D + sign * 0.36 * s); });
  ctx.beginPath(); polyline([...edge(-1), ...edge(1).reverse()]); ctx.closePath();
  ctx.fillStyle = "rgba(225,142,109,.14)"; ctx.fill();
  ctx.setLineDash([5, 5]); ctx.strokeStyle = C.coral; ctx.lineWidth = 1.5;
  for (const sign of [-1, 1]) { ctx.beginPath(); polyline(edge(sign)); ctx.stroke(); }
  ctx.setLineDash([]);

  // The walking path straight away from the phone; Start (a mark on the floor) about 2 big steps out, Turn near the far wall.
  const path = floor(0, PATH_D), startU = along(1), turnU = along(FRONT_TURN_DISTANCE + 0.24);
  ctx.setLineDash([7, 6]); ctx.strokeStyle = C.green; ctx.lineWidth = 2.2;
  ctx.beginPath(); polyline([floor(PHONE_U + 0.12, PATH_D), floor(0.95, PATH_D)]); ctx.stroke(); ctx.setLineDash([]);
  ctx.strokeStyle = C.coral; ctx.lineWidth = 3;
  ctx.beginPath(); polyline([floor(startU, PATH_D - 0.08), floor(startU, PATH_D + 0.08)]); ctx.stroke();
  ctx.fillStyle = C.dark; ctx.font = `700 ${font}px ${FONT}`; ctx.textAlign = "center"; ctx.textBaseline = "top";
  const startLabel = floor(startU, PATH_D - 0.22);
  ctx.fillText("Start", startLabel.x, startLabel.y);
  const flagX = floor(turnU, PATH_D).x, poleH = unit * 0.13;
  ctx.strokeStyle = C.dark; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(flagX, path.y); ctx.lineTo(flagX, path.y - poleH); ctx.stroke();
  ctx.fillStyle = C.coral;
  ctx.beginPath(); ctx.moveTo(flagX, path.y - poleH); ctx.lineTo(flagX + poleH * 0.5, path.y - poleH * 0.8); ctx.lineTo(flagX, path.y - poleH * 0.6); ctx.closePath(); ctx.fill();
  // Labelled under the path, like Start, so the walker turning beside the flag never covers it.
  ctx.fillStyle = C.dark;
  ctx.fillText("Turn", flagX, startLabel.y);

  // "2 big steps": two footprints from the phone out to the start, just in front of the path.
  ctx.fillStyle = C.green;
  for (const share of [0.35, 0.78]) {
    const p = floor(lerp(PHONE_U, startU, share), PATH_D - (share > 0.5 ? 0.09 : 0.13));
    ctx.beginPath(); ctx.ellipse(p.x, p.y, unit * 0.034, unit * 0.018, 0, 0, Math.PI * 2); ctx.fill();
  }
  ctx.fillStyle = C.dark; ctx.textBaseline = "top";
  const stepsLabel = floor(lerp(PHONE_U, startU, 0.5), PATH_D - 0.38);
  ctx.fillText("2 big steps", Math.max(stepsLabel.x, room.x + ctx.measureText("2 big steps").width / 2 + 2), stepsLabel.y);

  // The walker on the path, side-on, the way it walks; facing the room at the turn.
  const walkerH = unit * 0.3, walker = floor(along(state.distance), PATH_D);
  drawFigure(ctx, walkerPose(walker.x, path.y, walkerH, state.facing, state.cycle, state.turn, state.stride), walkerH, C.green, true);

  // The stool at the phone's end, the phone standing upright on it with its middle at hip height, and how high it sits.
  const stool = floor(PHONE_U, PATH_D), lensY = path.y - walkerH * 0.5;
  const phoneH = unit * 0.12, phoneW = phoneH * 0.55, seatY = lensY + phoneH / 2, seatW = room.w * 0.07;
  const phone = { x: stool.x - phoneW / 2, y: lensY - phoneH / 2, w: phoneW, h: phoneH };
  ctx.strokeStyle = C.pale; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(stool.x - seatW / 2, seatY); ctx.lineTo(stool.x + seatW / 2, seatY);
  ctx.moveTo(stool.x - seatW * 0.38, seatY); ctx.lineTo(stool.x - seatW * 0.38, stool.y);
  ctx.moveTo(stool.x + seatW * 0.38, seatY); ctx.lineTo(stool.x + seatW * 0.38, stool.y);
  ctx.stroke();
  if (state.phase === 0) {
    const pulse = reducedMotion ? 0.5 : 0.5 + 0.5 * Math.sin(now / 260);
    ctx.strokeStyle = `rgba(225,142,109,${0.35 + 0.45 * pulse})`; ctx.lineWidth = 3;
    roundRect(ctx, phone.x - 5 - pulse * 3, phone.y - 5 - pulse * 3, phone.w + 10 + pulse * 6, phone.h + 10 + pulse * 6, 8); ctx.stroke();
  }
  ctx.fillStyle = C.dark;
  roundRect(ctx, phone.x, phone.y, phone.w, phone.h, Math.max(2, phone.w * 0.22)); ctx.fill();
  ctx.fillStyle = C.coral;
  ctx.beginPath(); ctx.arc(stool.x, lensY, Math.max(2, phone.w * 0.2), 0, Math.PI * 2); ctx.fill();
  // Hip height: a bracket from the floor to the phone.
  const bx = stool.x - seatW / 2 - room.w * 0.02;
  ctx.strokeStyle = C.dark; ctx.lineWidth = 1.4;
  ctx.beginPath(); ctx.moveTo(bx, stool.y); ctx.lineTo(bx, lensY); ctx.moveTo(bx - 4, stool.y); ctx.lineTo(bx + 4, stool.y); ctx.moveTo(bx - 4, lensY); ctx.lineTo(bx + 4, lensY); ctx.stroke();
  ctx.fillStyle = C.dark; ctx.font = `700 ${font}px ${FONT}`; ctx.textBaseline = "bottom"; ctx.textAlign = "left";
  const hipLabel = "Hip height", hipX = Math.max(room.x + 2, stool.x - ctx.measureText(hipLabel).width / 2);
  ctx.fillText(hipLabel, hipX, phone.y - 12);
  ctx.textBaseline = "middle";
  ctx.fillText("Upright", phone.x + phone.w + 8, lensY);
  ctx.restore();
}

/**
 * Where the walker stands in the phone's portrait picture `frame` at `distance` (start-mark distances): its feet
 * (x, footY) and height. The camera is at hip height, so the hips stay on the picture's middle line while the figure
 * shrinks walking away and grows walking back; at the start mark it is FRONT_START_SHARE of the picture's height.
 */
export function frontCameraFigure(frame: Box, distance: number) {
  const height = frame.h * FRONT_START_SHARE / WALKER_SPAN / Math.max(0.1, distance), hipLine = frame.y + frame.h * 0.5;
  return { x: frame.x + frame.w / 2, footY: hipLine + height * 0.5, height };
}

/** The picture inside a phone drawn in `body`. */
function phonePicture(body: Box): Box {
  const bezel = Math.max(4, body.w * 0.055);
  return { x: body.x + bezel, y: body.y + bezel * 1.8, w: body.w - 2 * bezel, h: body.h - 3.6 * bezel };
}

/** The phone and its portrait picture: the room down its length, the walker going away from behind and coming back facing it. */
function drawCameraView(ctx: CanvasRenderingContext2D, box: Box, state: WalkFrontDemoState, now: number, reducedMotion: boolean, title: string | null = "What the camera sees") {
  // A phone standing upright, as large as fits.
  const body = fit(underTitle(ctx, box, title), PHONE_ASPECT), frame = phonePicture(body), fw = frame.w, fh = frame.h;
  const font = clamp(fw * 0.08, 10, 14);
  ctx.save();
  ctx.fillStyle = C.dark;
  roundRect(ctx, body.x, body.y, body.w, body.h, body.w * 0.14); ctx.fill();
  ctx.fillStyle = C.pale;
  roundRect(ctx, body.x + body.w * 0.38, body.y + (frame.y - body.y) * 0.4, body.w * 0.24, (frame.y - body.y) * 0.22, 4); ctx.fill();
  roundRect(ctx, frame.x, frame.y, fw, fh, Math.max(4, fw * 0.06));
  ctx.fillStyle = C.paper; ctx.fill();
  ctx.fillStyle = "rgba(185,211,194,.22)"; ctx.fill();
  ctx.save(); ctx.clip();
  // The room seen down its length: the far wall, the floor and its side edges running toward the middle.
  const cx = frame.x + fw / 2, at = (distance: number) => frontCameraFigure(frame, distance);
  const wall = at(WALL_DISTANCE), halfRoom = 0.75;
  ctx.fillStyle = "rgba(185,211,194,.45)"; ctx.fillRect(frame.x, wall.footY, fw, frame.y + fh - wall.footY);
  ctx.strokeStyle = C.pale; ctx.lineWidth = 1.5;
  const near = at(0.3);
  ctx.beginPath();
  ctx.moveTo(frame.x, wall.footY); ctx.lineTo(frame.x + fw, wall.footY);
  for (const sign of [-1, 1]) {
    ctx.moveTo(cx + sign * halfRoom * wall.height, wall.footY); ctx.lineTo(cx + sign * halfRoom * near.height, near.footY);
    ctx.moveTo(cx + sign * halfRoom * wall.height, wall.footY); ctx.lineTo(cx + sign * halfRoom * wall.height, frame.y);
  }
  ctx.stroke();
  // The start mark on the floor, and the turn flag beside the path near the far wall.
  const start = at(1);
  ctx.strokeStyle = C.coral; ctx.lineWidth = Math.max(2, start.height * 0.02);
  ctx.beginPath(); ctx.moveTo(cx - start.height * 0.22, start.footY); ctx.lineTo(cx + start.height * 0.22, start.footY); ctx.stroke();
  const flag = at(FRONT_TURN_DISTANCE + 0.24), flagX = cx + flag.height * 0.32, poleH = flag.height * 0.5;
  ctx.strokeStyle = C.dark; ctx.lineWidth = Math.max(1.2, flag.height * 0.025);
  ctx.beginPath(); ctx.moveTo(flagX, flag.footY); ctx.lineTo(flagX, flag.footY - poleH); ctx.stroke();
  ctx.fillStyle = C.coral;
  ctx.beginPath(); ctx.moveTo(flagX, flag.footY - poleH); ctx.lineTo(flagX + poleH * 0.4, flag.footY - poleH * 0.82); ctx.lineTo(flagX, flag.footY - poleH * 0.64); ctx.closePath(); ctx.fill();
  // The walker and its shadow: from behind going away, from in front coming back, side-on mid-turn.
  const { x, footY, height } = at(state.distance);
  ctx.fillStyle = "rgba(185,211,194,.95)";
  ctx.beginPath(); ctx.ellipse(x, footY + height * 0.012, height * 0.16, height * 0.022, 0, 0, Math.PI * 2); ctx.fill();
  const pose = frontWalkerPose(x, footY, height, state.cycle, state.stride, state.turn, 1);
  drawFigure(ctx, pose, height, C.green, true, state.facing === 1 ? "back" : "front", 1 - state.turn);
  ctx.restore();
  // Recording, while the walk is under way.
  if (state.phase > 0) {
    const blink = reducedMotion ? 1 : 0.55 + 0.45 * Math.sin(now / 300);
    const recX = frame.x + fw * 0.1, recY = frame.y + Math.max(10, fh * 0.05);
    ctx.fillStyle = `rgba(225,142,109,${blink})`;
    ctx.beginPath(); ctx.arc(recX, recY, Math.max(3, fw * 0.03), 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = C.dark; ctx.font = `800 ${font * 0.8}px ${FONT}`; ctx.textAlign = "left"; ctx.textBaseline = "middle";
    ctx.fillText("REC", recX + Math.max(6, fw * 0.055), recY);
  }
  ctx.restore();
}

/** One caption with its step number, centred in the box; when it is too wide, smaller (down to 12 px), then on two lines. */
function drawCaption(ctx: CanvasRenderingContext2D, box: Box, phase: number) {
  const text: string = WALK_FRONT_DEMO_CAPTIONS[phase];
  ctx.save();
  const measure = (line: string, size: number) => { ctx.font = `700 ${size}px ${FONT}`; return ctx.measureText(line).width; };
  // The width left for the text beside the step number.
  const space = (size: number) => box.w - size * 1.5 - 10;
  let font = clamp(Math.min(box.w * 0.045, box.h * 0.5), 12, 17), lines = [text];
  if (measure(text, font) > space(font)) {
    font = Math.max(12, font * space(font) / measure(text, font));
    if (measure(text, font) > space(font)) {
      // Two lines, split at the space that makes the longer line shortest.
      const words = text.split(" ");
      const splits = words.slice(1).map((_, k) => [words.slice(0, k + 1).join(" "), words.slice(k + 1).join(" ")]);
      lines = splits.reduce((best, pair) => (Math.max(...pair.map(line => measure(line, font))) < Math.max(...best.map(line => measure(line, font))) ? pair : best), splits[0] ?? [text]);
      const widest = Math.max(...lines.map(line => measure(line, font)));
      if (widest > space(font)) font = Math.max(9, font * space(font) / widest);
    }
  }
  const r = font * 0.75, lineH = font * 1.2;
  ctx.textBaseline = "middle";
  const width = Math.max(...lines.map(line => measure(line, font))) + r * 2 + 10;
  const x = box.x + Math.max(0, (box.w - width) / 2), y = box.y + box.h / 2;
  ctx.fillStyle = C.dark; ctx.beginPath(); ctx.arc(x + r, y, r, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = C.paper; ctx.textAlign = "center"; ctx.font = `800 ${font * 0.85}px ${FONT}`; ctx.fillText(String(phase + 1), x + r, y + 0.5);
  ctx.fillStyle = C.dark; ctx.textAlign = "left"; ctx.font = `700 ${font}px ${FONT}`;
  lines.forEach((line, k) => ctx.fillText(line, x + r * 2 + 10, y + (k - (lines.length - 1) / 2) * lineH));
  ctx.restore();
}

/** The three-step progress dots under the caption. */
function drawDots(ctx: CanvasRenderingContext2D, x: number, y: number, phase: number, size: number) {
  ctx.save();
  for (let k = 0; k < 3; k++) {
    ctx.beginPath(); ctx.arc(x + (k - 1) * size * 3, y, size, 0, Math.PI * 2);
    ctx.fillStyle = k === phase ? C.dark : C.pale; ctx.fill();
  }
  ctx.restore();
}

/**
 * Draws the demonstration at `elapsedMs` into a `width` × `height` area (CSS px; the caller scales for the screen's
 * pixel density). Wide areas show the set-up and the camera's view side by side, narrow ones stack them; with reduced
 * motion, three still frames with their captions.
 */
export function drawWalkFrontDemo(ctx: CanvasRenderingContext2D, elapsedMs: number, width: number, height: number, reducedMotion: boolean) {
  ctx.save();
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = C.paper;
  ctx.fillRect(0, 0, width, height);
  const pad = demoPad(width);
  const now = elapsedMs;
  if (reducedMotion) {
    // Three still frames: the set-up, walking away, walking back; side by side when wide; when narrow, the set-up
    // across the width and the two camera stills side by side under it.
    const stills: WalkFrontDemoState[] = [
      { ...STANDING },
      { phase: 1, distance: 2, facing: 1, turn: 0, cycle: Math.PI / 2, stride: 1 },
      { phase: 2, distance: 1.4, facing: -1, turn: 0, cycle: Math.PI / 2, stride: 1 },
    ];
    const wide = width >= 620, inner = width - 2 * pad, half = (inner - pad) / 2;
    stills.forEach((state, k) => {
      const captionH = wide ? clamp((height - 2 * pad) * 0.2, 34, 56) : k === 0 ? STILL_CAPTION : STILL_CAMERA_CAPTION;
      const setUpH = inner * STILL_SET_UP + STILL_CAPTION;
      const box: Box = wide
        ? { x: pad + k * (width - pad) / 3, y: pad, w: (width - pad) / 3 - pad, h: height - 2 * pad }
        : k === 0
          ? { x: pad, y: pad, w: inner, h: setUpH }
          : { x: pad + (k - 1) * (half + pad), y: pad + setUpH + pad, w: half, h: half * STILL_CAMERA + captionH };
      const picture: Box = { x: box.x, y: box.y, w: box.w, h: box.h - captionH };
      if (k === 0) drawSetUp(ctx, picture, state, now, true);
      else drawCameraView(ctx, picture, state, now, true, k === 1 ? "What the camera sees" : null);
      drawCaption(ctx, { x: box.x, y: box.y + box.h - captionH, w: box.w, h: captionH }, k);
    });
    ctx.restore();
    return;
  }
  const state = walkFrontDemoState(elapsedMs);
  const captionH = clamp(height * 0.13, 38, 60);
  const area = { x: pad, y: pad, w: width - 2 * pad, h: height - 2 * pad - captionH };
  if (width >= 520) {
    // The room is wide and the phone is tall: the room gets more of the width.
    const gap = pad * 1.4, left = (area.w - gap) * 0.58;
    drawSetUp(ctx, { x: area.x, y: area.y, w: left, h: area.h }, state, now, false);
    drawCameraView(ctx, { x: area.x + left + gap, y: area.y, w: area.w - gap - left, h: area.h }, state, now, false);
  } else {
    // Stacked: the upright phone gets a little more height than the room.
    const gap = pad, upper = (area.h - gap) * 0.44, lower = area.h - gap - upper;
    drawSetUp(ctx, { x: area.x, y: area.y, w: area.w, h: upper }, state, now, false);
    drawCameraView(ctx, { x: area.x, y: area.y + upper + gap, w: area.w, h: lower }, state, now, false);
  }
  const caption = { x: pad, y: height - pad - captionH, w: width - 2 * pad, h: captionH * 0.72 };
  drawCaption(ctx, caption, state.phase);
  drawDots(ctx, width / 2, caption.y + caption.h + captionH * 0.16, state.phase, Math.max(2.5, captionH * 0.06));
  ctx.restore();
}
