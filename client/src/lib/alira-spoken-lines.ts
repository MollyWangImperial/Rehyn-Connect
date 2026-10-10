import { DEMO_NARRATIONS, demoLeadLine, WALK_NARRATIONS, yourTurnLine } from "./assessment-engine/demo-lines";
import { cycleFor, EVERYDAY_EXERCISE_ID, EXERCISES, LAUNCH_EXERCISE_IDS, resolveExercise, type Rung } from "./exercise-engine/config";
import { CONTRAST_HINTS } from "./exercise-engine/contrast";
import { LIGHTING_HINTS } from "./exercise-engine/lighting";
import { POSE_NEEDS } from "./exercise-engine/metrics";
import { WARM_REP_LINES } from "./warm-rep-lines";
import {
  ANGLE_ADVICE, bestLine, bodyInViewLine, CLOSER_TARGET_LINE, ELBOW_ADVICE, finalRepAdvice, finishedLevelLine, goodRepsLine, graspHandInViewLine,
  handInViewLine, keepInViewLine, learnHoldLine, LOST_VIEW_LINES, MAX_SPOKEN_REPS, moveFurtherLine, practiceLine, PRACTISE_AGAIN_LINE,
  reachedTargetsLine, repCompleteLine, repsAheadLine, repScoreLine, SHOULDER_ADVICE, slideHandsInViewLine,
} from "./exercise-engine/spoken";

// Fixed lines Alira says outside her own page: the daily exercises, the movement check's demonstrations, the warm-up
// repetition and the emergency FAST check. They join her registered phrases so `pnpm voice:bake` records them in her
// voice. Sentences built from numbers (rep counts, scores, levels) are listed in every version, so they are recorded
// too. Forward reach also records every rounded best-angle result in advance.

const sessionLines = [
  "The next repetition starts in three seconds.",
  "Now watch the demonstration on the right. I will show you how to do the movement. Just watch; nothing is scored.",
  "Now one practice repetition. It is not scored. Reach to the circle and hold while I learn your movement, then return to your lap.",
  "Now one practice repetition. It is not scored. Bring your hand to the mouth circle and hold while I learn your movement, then return to your lap.",
  "Now one practice repetition. It is not scored, and it helps me learn your starting position.",
  "Do you want to skip this one for today?",
  "Let's bring the target a little closer.",
  "On the next repetition, lift your arm a little more from your shoulder while keeping your chest upright.",
  "No problem, we will skip this one for today.",
  "Only redo this exercise if you have enough energy and do not feel fatigued. If you feel tired, rest for now.",
];

const range = (from: number, to: number) => Array.from({ length: to - from + 1 }, (_, i) => from + i);
const numberLines = [
  ...range(1, MAX_SPOKEN_REPS).flatMap(n => [repCompleteLine(n), repsAheadLine(n)]),
  ...range(0, 100).map(repScoreLine),
  ...range(1, MAX_SPOKEN_REPS).flatMap(planned => range(0, planned).map(good => goodRepsLine(good, planned))),
  ...range(1, 3).map(finishedLevelLine),
];
const sides = (line: (side: "left" | "right") => string) => [line("left"), line("right")];

const linesOf = (exercise: (typeof EXERCISES)[string]) => [
  exercise.setupVoice,
  exercise.calibrationInstruction,
  ...exercise.cycle.flatMap(step => [step.voice, `${step.caption}.`]),
  ...exercise.feedback.map(rule => rule.say),
  exercise.praise,
];

// Graded Forward Reach is the everyday exercise and speaks only in Alira's voice, so everything it can say is recorded
// with her lines: its own wording plus the shared session and number lines.
const reach = EXERCISES[EVERYDAY_EXERCISE_ID];
const reachLines = [
  ...linesOf(reach),
  ...POSE_NEEDS.upper.map(need => need.say),
  "I can't see you yet. Sit in front of the camera.",
  "Sit in front of the camera so I can see you.",
  "Bring your affected hand back into view.",
  "Move so both shoulders are in view.",
  "Adjust the camera so your shoulders and the top of your thigh are clearly visible.",
  "Keep your hand in the circle and your whole arm in view while I learn your movement.",
  "Lower your affected hand and rest it on your lap.",
  ...["left", "right"].flatMap(side => [
    `Bring your ${side} hand into view and rest it on your lap.`,
    `Move the camera back a little so I can see the top of your ${side} thigh.`,
    `Lower your ${side} hand and rest it on the visible top of your ${side} thigh.`,
    `Bring your ${side} hand onto the visible top of your ${side} thigh.`,
    `Rest your ${side} hand on your ${side} thigh, closer to your body.`,
    `Rest your ${side} hand on the visible top of your ${side} thigh.`,
  ]),
  // Shoulder angles are bounded to 0–180 degrees; every possible rounded result is reusable.
  ...range(0, 180).map(degrees => bestLine(reach.bestLabel, degrees)),
  ...sessionLines,
  ...numberLines,
  ELBOW_ADVICE,
  SHOULDER_ADVICE,
  CLOSER_TARGET_LINE,
  ...[true, false].flatMap(finalRep => [keepInViewLine(finalRep), reachedTargetsLine(finalRep)]),
  ...reach.romSteps.flatMap(rom => [moveFurtherLine(rom.label, true), moveFurtherLine(rom.label, false)]),
  ...reach.feedback.map(rule => finalRepAdvice(rule.say)),
  // The set-up's lighting and clothing hints (every exercise's set-up checks them).
  ...Object.values(LIGHTING_HINTS),
  CONTRAST_HINTS.arm,
];

// The other seven exercises speak in Alira's voice too. A session says, in order: its set-up and calibration, the
// demonstration's captions, the practice, each step's instruction and short cue, then after each repetition its score
// (recorded with the reach) and at most one tip: the compensation's short correction, keeping in view, or moving further.
const targetExercises = LAUNCH_EXERCISE_IDS.filter(id => id !== EVERYDAY_EXERCISE_ID).map(id => EXERCISES[id]);
const rungs: Rung[] = [1, 2, 3];
const targetSessionLines = (exercise: (typeof EXERCISES)[string]) => {
  // Supported Arm Elevation can also be done from the chair's armrest, with its own wording.
  const armrest = exercise.id === "ex_wallslide" ? resolveExercise(exercise.id, false, true) : null;
  const steps = [...rungs.flatMap(rung => cycleFor(exercise.id, rung)), ...(armrest?.cycle ?? [])];
  const angleAdvice = (finalRep: boolean) => exercise.romSteps.map(rom => ANGLE_ADVICE[exercise.id]?.[rom.id]?.review
    ?? (rom.id === "elbow_extension" ? ELBOW_ADVICE : rom.id === "shoulder_flexion" ? SHOULDER_ADVICE : moveFurtherLine(rom.label, finalRep)));
  return [
    exercise.setupVoice,
    ...(armrest ? [armrest.setupVoice] : []),
    exercise.calibrationInstruction,
    ...steps.map(step => `${step.caption}.`),
    practiceLine(exercise.id),
    PRACTISE_AGAIN_LINE,
    ...steps.flatMap(step => [step.voice, ...(step.cue ? [step.cue] : [])]),
    ...(exercise.speedCue ? [exercise.speedCue.lift, exercise.speedCue.lower] : []),
    ...exercise.compensations.map(comp => comp.correction),
    ...angleAdvice(false),
    ...angleAdvice(true),
    learnHoldLine(exercise.id),
  ];
};
// Keeping the patient in view during a repetition and in its review.
// (LOST_VIEW_LINES.body is for exercises without on-screen targets: none of these.)
const inViewLines = [
  LOST_VIEW_LINES.legs, LOST_VIEW_LINES.slide, LOST_VIEW_LINES.hand,
  handInViewLine(), graspHandInViewLine(), bodyInViewLine(), slideHandsInViewLine(),
  ...[false, true].map(keepInViewLine),
];

/**
 * The set-up hints the seven exercises can speak while the patient gets into position (the target modules' rest and
 * readiness checks, and the Runner's). They come last when credits are short: a hint not yet recorded is generated
 * live. The test checks that each one is still worded this way in the engine.
 */
export const SETUP_HINT_LINES = [
  // Hand opening and pinch: the hand in the shaded area.
  ...sides(side => `Hold your ${side} hand up in the shaded area with your palm facing the camera.`),
  "Hold your hand toward the camera so I can see every finger.",
  "Move your hand back a little so I can see every fingertip.",
  "Keep your face and both shoulders in view.",
  "Bring your hand into the shaded area.",
  "Move your hand a little further out, away from your face.",
  "Move your hand a little further out, away from your shoulder.",
  "Turn your palm to face the camera.",
  "Hold your wrist as you did at the start.",
  "Let your fingers relax first.",
  "Let your fingers relax and curl gently. Don't open your hand yet.",
  "Open your fingers and thumb, so your thumb is away from your first finger.",
  "Open your fingers and thumb.",
  CONTRAST_HINTS.hand,
  // Cylindrical grasp: seated back with both hands on the thighs.
  "Sit back so your shoulders and both hips are in view.",
  "Rest your hand on your thigh where the camera can see your whole hand.",
  // Seated knee extension, seated toe lift and supported arm elevation: the whole seated body.
  "Move the camera back so I can see you from your head to your feet.",
  "Move the camera back so I can see both shoulders.",
  "Sit facing the camera so I can see both hips.",
  "Move the camera back so I can see both knees.",
  "Move the camera back, or tilt it down, so I can see both feet.",
  "Sit down on a chair facing the camera, with your knees bent and both feet flat on the floor.",
  "Tilt the camera up a little so there is space above your head.",
  "Tilt the camera down a little so there is space below your feet.",
  "Move the camera so you are in the middle of the picture.",
  "Move the camera a little closer.",
  "Move the camera back a little, or sit nearer the middle of the picture, so there is space beside your shoulder.",
  CONTRAST_HINTS.leg,
  "Put your foot flat on the floor, below your knee.",
  "Put both feet flat on the floor, about hip-width apart.",
  "Go back to Set up so I can place the knee dial.",
  ...sides(side => `Put your ${side} foot in the area marked on the floor, heel under your knee.`),
  ...sides(side => `Put your ${side} foot in the area marked on the floor: heel under your knee, toes turned out onto the outline.`),
  "Put both feet in the areas marked on the floor, side by side.",
  "Move the camera a little closer, keeping your feet in view.",
  "Rest your toes on the floor, heel down.",
  "Go back to Set up so I can place the ankle dial.",
  "Move the camera back so I can see you from your head to your thighs.",
  "Move the camera back so I can see both hips.",
  "Move the camera back so I can see your hips.",
  ...sides(side => `Rest your ${side} forearm on the table beside you, with your elbow bent.`),
  ...sides(side => `Rest your ${side} forearm on the armrest of your chair, with your elbow bent.`),
  "Rest your other hand on your thigh or the other armrest, where the camera can see it.",
  "Rest your other hand on your thigh or on the chair's other armrest.",
  "Raise the camera to chest height, above your forearm.",
  "Move the camera back a little, or sit a little toward your other side, so there is room beside your arm for the cup.",
  "Go back to Set up so I can place the cup.",
];

// The movement check (/assessment): each task's demonstration, its narration and the hand-overs around it. The tasks
// themselves speak in her voice from the original runner.
const assessmentLines = [
  ...Object.values(DEMO_NARRATIONS),
  // Walking's two demonstrations, filming from the side and then from the front, each with its own narration.
  ...Object.values(WALK_NARRATIONS),
  demoLeadLine(0),
  demoLeadLine(1),
  yourTurnLine("T1"),
  yourTurnLine("L6"),
];

// The FAST check's phrase is fixed in fast-check-runtime.js ("The sky is blue today").
const fastLines = [
  "Face. Please smile and hold while I compare both sides.",
  "Arms. Please raise both arms and keep them there while I watch for one arm drifting down.",
  "Speech. Please repeat: The sky is blue today.",
  "Please repeat: The sky is blue today.",
  "Demo only. The app is simulating a 999 call. No emergency call has been placed. In a real emergency, call 999 immediately.",
];

/** A short stable ID for a line, so a recorded clip keeps its name while the wording is unchanged. */
function lineId(text: string): string {
  let hash = 5381;
  for (let i = 0; i < text.length; i++) hash = ((hash * 33) ^ text.charCodeAt(i)) >>> 0;
  return hash.toString(16).padStart(8, "0");
}

const unique = (lines: string[]) => Array.from(new Set(lines.map(line => line.trim()).filter(Boolean)));
const reachSet = new Set(unique(reachLines));
const assessmentSet = new Set(unique(assessmentLines));

export const aliraSpokenLines: Record<string, string> = Object.fromEntries([
  ...unique(fastLines).map(text => [`fast-${lineId(text)}`, text]),
  ...unique(assessmentLines).filter(text => !reachSet.has(text)).map(text => [`assess-${lineId(text)}`, text]),
  // The warm-up speaks in Alira's voice now, so its lines are recorded with hers, not with the exercises.
  ...unique(Object.values(WARM_REP_LINES)).map(text => [`warmup-${lineId(text)}`, text]),
  ...unique(reachLines).map(text => [`reach-${lineId(text)}`, text]),
  // In the order they are recorded when credits run short: every session's lines first, then the set-up hints.
  ...unique([...targetExercises.flatMap(targetSessionLines), ...inViewLines, ...SETUP_HINT_LINES])
    .filter(text => !reachSet.has(text) && !assessmentSet.has(text)).map(text => [`exercise-${lineId(text)}`, text]),
]);
