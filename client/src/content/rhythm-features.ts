import type { FeatureSpec } from "./feature-spec";

// The SVT, Slow heart rate and heart block, and Ectopic beats pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsRhythmPieces.tsx.

export const RHYTHM_PIECES = [
  // SVT
  "svt-wiring", "svt-on-off", "svt-trigger-ring", "svt-monitors", "svt-valsalva", "svt-pill-boxes", "svt-catheter", "svt-999-path", "svt-walk-path", "svt-cups", "svt-road-desk", "svt-worry-tools",
  // Slow heart rate and heart block
  "brady-dial", "brady-signal-rows", "brady-cause-tiles", "brady-body-signs", "brady-ecg-patches", "brady-backup", "brady-fitting", "brady-pill-slow", "brady-rings", "brady-car-weeks", "brady-arm-level", "brady-check-line",
  // Ectopic beats
  "eb-early-beat", "eb-felt-places", "eb-cause-grid", "eb-three-lanes", "eb-strip-tests", "eb-diary-swaps", "eb-steps", "eb-phone-999", "eb-volume", "eb-week-bars", "eb-bedroom", "eb-worry-circle",
] as const;
export type RhythmPiece = (typeof RHYTHM_PIECES)[number];

const svtU = "Understanding SVT", svtT = "Treat and manage", svtL = "Living with SVT";
const brU = "Understanding slow heart rate and heart block", brT = "Treat and manage", brL = "Living with slow heart rate and heart block";
const ebU = "Understanding ectopic beats", ebT = "Treat and manage", ebL = "Living with ectopic beats";

export const RHYTHM_FEATURES: Record<string, FeatureSpec<RhythmPiece>> = {
  "svt/what-it-is": { kicker: svtU, headline: "A short circuit in the heart's wiring", standfirst: "How the heart's wiring normally works, the short circuit behind SVT, and why it is rarely dangerous.", piece: "svt-wiring", pullQuote: "It can then slow down abruptly." },
  "svt/symptoms": { kicker: svtU, headline: "Racing heart: on, then off", standfirst: "What an episode can feel like, how long it lasts, who gets it, and when to get help.", piece: "svt-on-off", pullQuote: "The fast heartbeat may come and go suddenly." },
  "svt/triggers": { kicker: svtU, headline: "Caffeine, alcohol, or nothing at all", standfirst: "Caffeine, alcohol, stress and tiredness can set it off, though often there is no obvious trigger.", piece: "svt-trigger-ring", pullQuote: "Stimulants such as caffeine, dehydration and fatigue can also stimulate the heart." },
  "svt/tests": { kicker: svtU, headline: "Catching a heart in the act", standfirst: "An ECG, monitors worn for days or weeks, a loop recorder for rare episodes, and the EP study.", piece: "svt-monitors", pullQuote: "If you are having SVT during the ECG, a clear diagnosis can be made." },
  "svt/stopping-episode": { kicker: svtT, headline: "Simple tricks to calm a racing heart", standfirst: "The Valsalva manoeuvre and other simple tricks, what to do afterwards, and when not to wait.", piece: "svt-valsalva", pullQuote: "This is a way of briefly increasing the pressure inside the chest." },
  "svt/medicines": { kicker: svtT, headline: "Medicines to stop it, or keep it away", standfirst: "Medicines given in hospital, medicines to prevent episodes, and their side effects.", piece: "svt-pill-boxes", pullQuote: "Beta blockers slow down your heartbeat." },
  "svt/ablation": { kicker: svtT, headline: "One procedure, a lasting fix", standfirst: "What catheter ablation involves, who it is for, recovering, and driving afterwards.", piece: "svt-catheter", pullQuote: "The NHS says this permanently cures the problem in most people." },
  "svt/when-to-get-help": { kicker: svtT, headline: "When a racing heart needs 999", standfirst: "When to call 999, how to get to hospital, and what to do if the symptoms have stopped.", piece: "svt-999-path", pullQuote: "Do not drive yourself to A&E." },
  "svt/exercise": { kicker: svtL, headline: "Staying active, at your own pace", standfirst: "Staying active with SVT, starting slowly, and the symptoms that mean stop.", piece: "svt-walk-path", pullQuote: "SVT can happen when you're resting or doing exercise." },
  "svt/caffeine-alcohol": { kicker: svtL, headline: "What's really in your cup", standfirst: "How much caffeine is generally safe, what is in an energy drink, and keeping alcohol within 14 units.", piece: "svt-cups", pullQuote: "Alcohol can temporarily increase your heart rate or cause heart palpitations." },
  "svt/driving-work": { kicker: svtL, headline: "Behind the wheel and at work", standfirst: "When to tell DVLA, driving after an ablation, and support at work.", piece: "svt-road-desk", pullQuote: "You do not have to tell your employer about your condition." },
  "svt/worry": { kicker: svtL, headline: "Living with the next-episode worry", standfirst: "Why anxiety and palpitations feed each other, things to try, and where to get support.", piece: "svt-worry-tools", pullQuote: "Anxiety can make your heart race, and palpitations themselves can trigger feelings of anxiety." },

  "slow-heart-rate/what-it-is": { kicker: brU, headline: "When slow is fine, and when it isn't", standfirst: "What counts as a low heart rate, when slow is normal, and when to speak to a doctor.", piece: "brady-dial", pullQuote: "A low heart rate can also develop as you age." },
  "slow-heart-rate/heart-block": { kicker: brU, headline: "Slowed, dropped or stopped signals", standfirst: "How the heart's signal can be delayed or blocked, from first-degree to complete heart block.", piece: "brady-signal-rows", pullQuote: "This is the most severe form of heart block and usually requires a pacemaker." },
  "slow-heart-rate/causes": { kicker: brU, headline: "Wiring, age, medicines, or nothing at all", standfirst: "Heart conditions, age, fitness and medicines can slow the heart; sometimes there is no clear cause.", piece: "brady-cause-tiles", pullQuote: "Sometimes there's no obvious cause." },
  "slow-heart-rate/symptoms": { kicker: brU, headline: "Dizzy, faint, tired, or nothing", standfirst: "What heart block can feel like, and when to get help from NHS 111 or call 999.", piece: "brady-body-signs", pullQuote: "You are not wasting anyone's time by getting it checked out." },
  "slow-heart-rate/tests": { kicker: brT, headline: "The tests that catch a slow beat", standfirst: "An ECG, a portable monitor, a loop recorder and other tests, and getting your results.", piece: "brady-ecg-patches", pullQuote: "The whole test takes a few minutes and is completely painless." },
  "slow-heart-rate/pacemaker": { kicker: brT, headline: "A back-up for a slowing heart", standfirst: "What a pacemaker is, how it works, who may need one, and the different types.", piece: "brady-backup", pullQuote: "Pacemakers do not give your heart an electrical shock." },
  "slow-heart-rate/pacemaker-fitting": { kicker: brT, headline: "An hour, a small cut, then home", standfirst: "Before the day, how a pacemaker is fitted, going home, and when to get help.", piece: "brady-fitting", pullQuote: "Having a pacemaker fitted is a common procedure and should not hurt." },
  "slow-heart-rate/medicines-review": { kicker: brT, headline: "The tablets that slow the beat", standfirst: "How beta blockers and digoxin can slow the heart, and why changes are made with your doctor.", piece: "brady-pill-slow", pullQuote: "Some medicines can change your heart rate." },
  "slow-heart-rate/living-pacemaker": { kicker: brL, headline: "Phones, hobs and airport gates", standfirst: "Keeping phones and appliances at a distance, carrying your card, and looking after your mood.", piece: "brady-rings", pullQuote: "It's normal to feel worried or anxious about your health." },
  "slow-heart-rate/driving": { kicker: brL, headline: "A week off the road, then back", standfirst: "Telling DVLA, how long to stop driving after a pacemaker, and telling your insurer.", piece: "brady-car-weeks", pullQuote: "Tell your insurance company that you have a pacemaker." },
  "slow-heart-rate/activity": { kicker: brL, headline: "Arm down, then back to the gym", standfirst: "Taking it easy at first, protecting your arm and shoulder, and getting back to what you enjoy.", piece: "brady-arm-level", pullQuote: "In the long term, a pacemaker should make physical activity much easier." },
  "slow-heart-rate/checks": { kicker: brL, headline: "Check-ups, and a battery with warning", standfirst: "Follow-up appointments, remote checks, battery life and what a box change involves.", piece: "brady-check-line", pullQuote: "It's important to go to your appointment, even if you feel well." },

  "ectopic-beats/what-it-is": { kicker: ebU, headline: "An early beat, then a catch-up", standfirst: "What ectopic beats are, where they start, and why they are usually harmless.", piece: "eb-early-beat", pullQuote: "The beat occurs just before the normal heartbeat." },
  "ectopic-beats/feelings": { kicker: ebU, headline: "Skipped, thumping or fluttering beats", standfirst: "How ectopic beats can feel, where you might notice them, and how long they last.", piece: "eb-felt-places", pullQuote: "You may feel it in your chest, neck or throat." },
  "ectopic-beats/causes": { kicker: ebU, headline: "The everyday things that set them off", standfirst: "Stress, caffeine, alcohol, poor sleep, some medicines, hormones and other conditions.", piece: "eb-cause-grid", pullQuote: "But always see your GP before stopping any medicines." },
  "ectopic-beats/harmless": { kicker: ebU, headline: "Usually harmless, sometimes worth a check", standfirst: "Why ectopic beats are usually harmless, when to see a GP, and when it is an emergency.", piece: "eb-three-lanes", pullQuote: "Ectopic beats are usually harmless and do not damage the heart." },
  "ectopic-beats/tests": { kicker: ebT, headline: "Catching a beat that comes and goes", standfirst: "Describing your symptoms, an ECG, longer recordings, an echo, and getting your results.", piece: "eb-strip-tests", pullQuote: "It's usually quick and painless." },
  "ectopic-beats/triggers": { kicker: ebT, headline: "Small swaps, fewer skipped beats", standfirst: "Cutting down on caffeine and alcohol, sleep, food and fluids, and keeping a symptom diary.", piece: "eb-diary-swaps", pullQuote: "Avoid or drink fewer caffeinated drinks." },
  "ectopic-beats/treatment": { kicker: ebT, headline: "Often no treatment at all", standfirst: "Why many people need only reassurance and advice, and where medicines and ablation fit.", piece: "eb-steps", pullQuote: "Not all ectopic beats need treatment." },
  "ectopic-beats/urgent": { kicker: ebT, headline: "When a flutter needs 999", standfirst: "When palpitations need 999 or A&E, getting there safely, and what to do if they stop.", piece: "eb-phone-999", pullQuote: "Ask someone to drive you or call 999 and ask for an ambulance." },
  "ectopic-beats/noticing-less": { kicker: ebL, headline: "Turning down the volume on beats", standfirst: "Calm breathing, grounding and checking less can help when ectopic beats feel worrying.", piece: "eb-volume", pullQuote: "Palpitations are usually harmless and often feel more serious than they are." },
  "ectopic-beats/exercise": { kicker: ebL, headline: "Back to moving, one step at a time", standfirst: "Getting checked, starting small, the weekly target, and when to stop.", piece: "eb-week-bars", pullQuote: "If they are putting you off being active, then get them checked out." },
  "ectopic-beats/night": { kicker: ebL, headline: "Why beats can feel worse at bedtime", standfirst: "Why ectopic beats can be easier to notice at night, and winding down before bed.", piece: "eb-bedroom", pullQuote: "If you're worried about your palpitations, speak to your doctor." },
  "ectopic-beats/worry": { kicker: ebL, headline: "Breaking the worry and heartbeat loop", standfirst: "How worry and palpitations feed each other, and the help that can break the cycle.", piece: "eb-worry-circle", pullQuote: "Anxiety can make your heart race, and palpitations themselves can trigger feelings of anxiety." },
};
