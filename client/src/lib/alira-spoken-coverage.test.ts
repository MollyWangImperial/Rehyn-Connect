import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { DEMO_SPECS } from "@/components/assessment/DemoReel";
import { aliraSpokenLines, SETUP_HINT_LINES } from "./alira-spoken-lines";
import { demoLeadLine, yourTurnLine } from "./assessment-engine/demo-lines";
import type { AssessmentTaskId } from "./assessment-engine/types";
import { EXERCISES, LAUNCH_EXERCISE_IDS, type Rung } from "./exercise-engine/config";
import { ExerciseSession, simFrame, type Voice } from "./exercise-engine/session";

// Every exercise speaks in Alira's voice from lines recorded in advance (alira-spoken-lines.ts). A line the registry
// misses would be generated live, at a cost, each time the server's cache is empty: these tests keep it complete.

const FRAME_MS = 33;
type Profile = (rep: number) => { level: number; compensations: string[] };

/** What a simulated patient hears in one whole session, run as the Runner runs it (a review after each repetition). */
function heard(exerciseId: string, rung: Rung, profile: Profile, armrest = false) {
  const said: string[] = [];
  const voice: Voice = { say: text => said.push(text), busy: () => false, stop: () => {} };
  const session = new ExerciseSession({ exerciseId, rung, side: "right", repsOverride: 4, reviewBetweenReps: true, armrest }, voice);
  let t = 0;
  session.start(t);
  while (t < 600_000 && session.snapshot().phase !== "done") {
    t += FRAME_MS;
    const snap = session.snapshot();
    const step = session.currentStep;
    const moving = (snap.phase === "warm" || snap.phase === "reps") && step && (step.kind === "reach" || step.kind === "open" || step.kind === "pinch");
    const p = snap.phase === "reps" ? profile(snap.repIndex) : { level: 1, compensations: [] as string[] };
    session.push(simFrame(t, session.cfg, session.targets(), { level: moving && snap.holdProgress < 1 ? p.level : 0, compensations: moving ? p.compensations : [] }));
  }
  expect(session.snapshot().phase, `${exerciseId} rung ${rung}`).toBe("done");
  return said;
}

describe("Alira's recorded lines cover what the exercises say", () => {
  const registered = new Set(Object.values(aliraSpokenLines));

  it.each(LAUNCH_EXERCISE_IDS.map(id => [id]))("%s: every line of a session, clean or with each compensation, at every level", id => {
    const exercise = EXERCISES[id];
    const profiles: Profile[] = [
      () => ({ level: 1, compensations: [] }),
      // Short of the target: the advice to move further, and a target brought closer.
      rep => ({ level: rep === 2 ? 1 : 0.55, compensations: [] }),
      ...exercise.compensations.map(comp => (rep: number) => ({ level: 1, compensations: rep === 2 ? [] : [comp.id] })),
    ];
    const missing = new Set<string>();
    for (const rung of [1, 2, 3] as Rung[]) {
      for (const profile of profiles) {
        for (const line of heard(id, rung, profile)) if (!registered.has(line.trim())) missing.add(line);
        if (id === "ex_wallslide") for (const line of heard(id, rung, profile, true)) if (!registered.has(line.trim())) missing.add(line);
      }
    }
    expect([...missing]).toEqual([]);
  });

  it("covers what the movement check's demonstrations say, before, during and after each one", () => {
    for (const id of Object.keys(DEMO_SPECS) as AssessmentTaskId[]) {
      expect(registered.has(DEMO_SPECS[id].narration), id).toBe(true);
      expect(registered.has(yourTurnLine(id)), id).toBe(true);
    }
    for (const index of [0, 1, 4]) expect(registered.has(demoLeadLine(index)), String(index)).toBe(true);
  });

  it("lists the set-up hints as the engine still words them", () => {
    const sources = [
      ...readdirSync(path.join(__dirname, "exercise-engine")).filter(name => name.endsWith(".ts") && !name.endsWith(".test.ts")).map(name => path.join(__dirname, "exercise-engine", name)),
      path.join(__dirname, "..", "pages", "ExerciseRunner.tsx"),
    ].map(file => readFileSync(file, "utf8")).join("\n");
    const escape = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // The parts a hint's code fills in (`${side}`, `${covering}`, `${slideRestOn(support)}`), or writes out.
    const filled = /\b(left|right|face|shoulder|on the table beside you|on the armrest of your chair)\b/g;
    const stale = SETUP_HINT_LINES.filter(line => !new RegExp(escape(line).replace(filled, "(?:$1|\\$\\{[^}]+\\})")).test(sources));
    expect(stale).toEqual([]);
  });
});
