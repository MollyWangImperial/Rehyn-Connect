import { describe, expect, it } from "vitest";
import {
  drawWalkFrontDemo, frontCameraFigure, frontWalkerPose, FRONT_STOP_DISTANCE, FRONT_TURN_DISTANCE, WALK_FRONT_DEMO_CAPTIONS, WALK_FRONT_DEMO_MS,
  walkFrontDemoHeight, walkFrontDemoState,
} from "./walk-front-demo";
import { WALKER_SPAN } from "./walk-demo";

/** A 2D context that records what is drawn: fills, strokes, text and every colour set. */
function recordingContext() {
  const texts: string[] = [], colours: string[] = [];
  const state: Record<string, unknown> = {};
  const ctx = new Proxy(state, {
    get(target, key: string) {
      if (key === "measureText") return (text: string) => ({ width: text.length * 7 });
      if (key === "fillText") return (text: string) => { texts.push(text); };
      if (key in target) return target[key];
      return () => undefined;
    },
    set(target, key: string, value) {
      if (key === "fillStyle" || key === "strokeStyle") colours.push(String(value));
      target[key] = value;
      return true;
    },
  }) as unknown as CanvasRenderingContext2D;
  return { ctx, texts, colours };
}

/** The app's colours (and translucent versions of them, and white paper). */
const APP_COLOUR = /^(#285b49|#3c8255|#e18e6d|#b9d3c2|#fffefa|rgba\((185,211,194|225,142,109),[\d.]+\))$/;

const times = Array.from({ length: WALK_FRONT_DEMO_MS / 50 }, (_, k) => k * 50);

describe("walkFrontDemoState", () => {
  it("stands at the start, walks away, turns, walks back and loops", () => {
    expect(walkFrontDemoState(0)).toMatchObject({ phase: 0, distance: 1, facing: 1, turn: 0, stride: 0 });
    expect(walkFrontDemoState(1700).phase).toBe(0);
    const away = walkFrontDemoState(3300);
    expect(away).toMatchObject({ phase: 1, facing: 1, turn: 0, stride: 1 });
    expect(away.distance).toBeGreaterThan(1.5);
    expect(away.distance).toBeLessThan(2.5);
    const turning = walkFrontDemoState(5250);
    expect(turning).toMatchObject({ phase: 2, distance: FRONT_TURN_DISTANCE, stride: 0 });
    expect(turning.turn).toBeGreaterThan(0.9);
    const back = walkFrontDemoState(7200);
    expect(back).toMatchObject({ phase: 2, facing: -1, turn: 0 });
    expect(back.distance).toBeLessThan(FRONT_TURN_DISTANCE);
    expect(walkFrontDemoState(WALK_FRONT_DEMO_MS - 1)).toMatchObject({ phase: 2, distance: FRONT_STOP_DISTANCE, facing: -1, stride: 0 });
    expect(walkFrontDemoState(WALK_FRONT_DEMO_MS + 3300)).toEqual(away);
    expect(walkFrontDemoState(-WALK_FRONT_DEMO_MS + 3300)).toEqual(away);
    expect(WALK_FRONT_DEMO_MS).toBeGreaterThanOrEqual(9000);
    expect(WALK_FRONT_DEMO_MS).toBeLessThanOrEqual(10000);
  });

  it("goes through the phases in order, once each per loop", () => {
    const phases = times.map(t => walkFrontDemoState(t).phase);
    expect(phases.filter((phase, k) => k === 0 || phase !== phases[k - 1])).toEqual([0, 1, 2]);
  });

  it("stops on both feet, legs together, at the turn and at the end", () => {
    for (const t of [4799, 8699]) expect(Math.abs(Math.sin(walkFrontDemoState(t).cycle)), `t = ${t}`).toBeLessThan(0.02);
    const pose = (t: number) => { const s = walkFrontDemoState(t); return frontWalkerPose(0, 100, 100, s.cycle, s.stride, s.turn, 1); };
    for (const t of [0, 1799, 4799, 5000, 5250, 5600, 8699, WALK_FRONT_DEMO_MS - 1]) {
      expect(pose(t).legs.every(leg => Math.abs(leg.ankle.y - 100) < 1 && Math.abs(leg.toe.y - 100) < 1), `t = ${t}`).toBe(true);
    }
    // Walking, a foot lifts.
    expect(Math.max(...[3000, 3150, 3300].flatMap(t => pose(t).legs.map(leg => 100 - leg.ankle.y)))).toBeGreaterThan(3);
    // No jump as it starts or stops.
    const close = (p: { x: number; y: number }, q: { x: number; y: number }) => Math.hypot(p.x - q.x, p.y - q.y) < 1.5;
    for (const t of [1800, 4800, 5700, 8700]) {
      const before = pose(t - 2), after = pose(t + 2);
      expect(before.legs.every((leg, k) => close(leg.ankle, after.legs[k].ankle) && close(leg.knee, after.legs[k].knee)), `t = ${t}`).toBe(true);
      expect(close(before.head, after.head), `t = ${t}`).toBe(true);
    }
  });
});

describe("frontCameraFigure: what the camera sees", () => {
  // A portrait picture, about 9:16.
  const frame = { x: 10, y: 20, w: 180, h: 320 };
  const figure = (t: number) => frontCameraFigure(frame, walkFrontDemoState(t).distance);

  it("gets smaller walking away and bigger walking back", () => {
    for (let t = 1850; t < 4800; t += 50) expect(figure(t).height, `t = ${t}`).toBeLessThan(figure(t - 50).height);
    for (let t = 5750; t < 8700; t += 50) expect(figure(t).height, `t = ${t}`).toBeGreaterThan(figure(t - 50).height);
    // At the turn, a good deal smaller than at the start; at the end, a little bigger than at the start.
    expect(figure(5250).height).toBeLessThan(figure(0).height * 0.45);
    expect(figure(WALK_FRONT_DEMO_MS - 1).height).toBeGreaterThan(figure(0).height);
  });

  it("keeps the hips on the camera's middle line (the phone at hip height)", () => {
    for (const t of [0, 3300, 5250, 7200]) {
      const { footY, height } = figure(t);
      expect(footY - height / 2).toBeCloseTo(frame.y + frame.h / 2, 6);
    }
  });

  it("keeps the walker head to feet inside the picture all the way, and stops with its feet still in it", () => {
    for (const t of times) {
      const state = walkFrontDemoState(t), { x, footY, height } = figure(t);
      const pose = frontWalkerPose(x, footY, height, state.cycle, state.stride, state.turn, 1);
      // A margin wider than drawFigure's half line width and paper outline, so the drawn strokes are inside too.
      const margin = Math.max(2, height * 0.055) * 1.3;
      const points = [...pose.legs.flatMap(leg => [leg.ankle, leg.toe, leg.knee]), ...pose.arms.map(arm => arm.hand)];
      expect(Math.min(...points.map(p => p.x)) - margin, `t = ${t}`).toBeGreaterThan(frame.x);
      expect(Math.max(...points.map(p => p.x)) + margin, `t = ${t}`).toBeLessThan(frame.x + frame.w);
      expect(Math.max(...points.map(p => p.y)) + margin, `t = ${t}`).toBeLessThan(frame.y + frame.h);
      expect(pose.head.y - pose.headR - margin, `t = ${t}`).toBeGreaterThan(frame.y);
      expect(footY - (pose.head.y - pose.headR)).toBeCloseTo(height * WALKER_SPAN, 6);
    }
    // At the end, close to the phone: big in the picture, but with floor still showing under its feet.
    const end = figure(WALK_FRONT_DEMO_MS - 1);
    expect(end.height * WALKER_SPAN / frame.h).toBeGreaterThan(0.8);
    expect((frame.y + frame.h - end.footY) / frame.h).toBeGreaterThan(0.05);
  });
});

describe("drawWalkFrontDemo", () => {
  it("has three short captions", () => {
    expect(WALK_FRONT_DEMO_CAPTIONS).toHaveLength(3);
    for (const caption of WALK_FRONT_DEMO_CAPTIONS) expect(caption.length).toBeLessThanOrEqual(34);
    expect(WALK_FRONT_DEMO_CAPTIONS[0]).toMatch(/stand it up/i);
    expect(WALK_FRONT_DEMO_CAPTIONS[1]).toMatch(/away/i);
    expect(WALK_FRONT_DEMO_CAPTIONS[2]).toMatch(/turn.*back/i);
  });

  it("wants a landscape canvas when wide and a taller one when narrow", () => {
    expect(walkFrontDemoHeight(900, false)).toBe(450);
    expect(walkFrontDemoHeight(520, false)).toBe(260);
    expect(walkFrontDemoHeight(360, false)).toBeGreaterThan(360 * 1.5);
    expect(walkFrontDemoHeight(900, true)).toBeLessThan(900 * 0.6);
    expect(walkFrontDemoHeight(360, true)).toBeGreaterThan(360);
    for (const width of [300, 360, 519, 520, 619, 620, 900]) {
      for (const reduced of [false, true]) {
        const height = walkFrontDemoHeight(width, reduced);
        expect(Number.isInteger(height)).toBe(true);
        expect(height).toBeGreaterThan(0);
      }
    }
  });

  for (const width of [300, 360, 519, 520, 700, 900]) {
    for (const reduced of [false, true]) {
      it(`draws both panels and the captions in the app's colours (${width} px${reduced ? ", reduced motion" : ""})`, () => {
        const { ctx, texts, colours } = recordingContext();
        const drawAt = reduced ? [0] : [0, 2500, 5000, 8000, WALK_FRONT_DEMO_MS - 1];
        for (const t of drawAt) expect(() => drawWalkFrontDemo(ctx, t, width, walkFrontDemoHeight(width, reduced), reduced)).not.toThrow();
        expect(texts).toEqual(expect.arrayContaining(["Set up", "What the camera sees", "Start", "Turn", "2 big steps", "Hip height", "Upright"]));
        // A caption too wide for its space goes on two lines.
        for (const caption of WALK_FRONT_DEMO_CAPTIONS) expect(texts.join(" ")).toContain(caption);
        // Under the animation, each caption fits on one line.
        if (!reduced) expect(texts).toEqual(expect.arrayContaining([...WALK_FRONT_DEMO_CAPTIONS]));
        if (!reduced) expect(texts).toContain("REC");
        expect(colours.filter(colour => !APP_COLOUR.test(colour))).toEqual([]);
      });
    }
  }
});
