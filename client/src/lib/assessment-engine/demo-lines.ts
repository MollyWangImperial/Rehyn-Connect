// The movement check's spoken hand-overs around each task's demonstration (DemoReel), so the patient knows what comes
// next: before the demonstration (the first task also says that every task starts this way), and as it ends, just
// before the task itself. A plain module (no CSS or app imports), so the voice tooling can read the lines too.

import type { AssessmentTaskId } from "./types";

/** Each task's narration, said in Alira's voice as its demonstration opens (DemoReel); each starts with the task's name. */
export const DEMO_NARRATIONS: Record<AssessmentTaskId, string> = {
  T1: "Reach. When the circle lights up, reach your hand up into it and hold it there for a moment, then bring your hand back to your lap. In the check there can be up to three circles, each a little higher.",
  T3: "Hand to mouth. Raise your hand to the starting circle, then bring it up to your mouth and hold it there. Keep your head still: your hand comes to your mouth.",
  H4: "Hand opening. Hold your hand up at chest height with your palm facing the camera. Then open your fingers as wide as is comfortable, and hold.",
  H3: "Pinch. Bring your thumb and first finger together, tip to tip, and hold. Then let go.",
  L6: "Walking. Prop your phone sideways at hip height. Stand side-on, about three big steps away. Then walk across at your usual pace, turn, and walk back.",
};

/** Said before a task's demonstration (`index`: the task's place in the check); the narration then names the task. */
export function demoLeadLine(index: number): string {
  return index === 0 ? "Before each task, I'll show you a short demonstration. Just watch for now." : "First, a short demonstration. Just watch.";
}

/** Said as the demonstration ends, before its task starts (walking goes on to its own screen, with no circle). */
export const yourTurnLine = (taskId: AssessmentTaskId) =>
  taskId === "L6" ? "Now it's your turn. Follow the steps on the next screen." : "Now it's your turn. Follow my voice and the circle.";
