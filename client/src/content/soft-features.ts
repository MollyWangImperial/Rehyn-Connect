import type { FeatureSpec } from "./feature-spec";

// The Fibromyalgia and Frozen shoulder pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsSoftPieces.tsx.

export const SOFT_PIECES = [
  // Fibromyalgia
  "fm-volume-dial", "fm-four-tiles", "fm-stepping-path", "fm-trigger-ring", "fm-build-up", "fm-six-weeks", "fm-body-mind", "fm-night-room", "fm-boom-bust", "fm-flare-wave", "fm-desk-adjust", "fm-path-light",
  // Frozen shoulder
  "fs-capsule", "fs-three-phases", "fs-age-line", "fs-turn-out", "fs-three-steps", "fs-wall-climb", "fs-stretch-capsule", "fs-three-doors", "fs-pillows", "fs-hundred-ring", "fs-desk-drive", "fs-long-road",
] as const;
export type SoftPiece = (typeof SOFT_PIECES)[number];

const fmU = "Understanding fibromyalgia", fmT = "Treat and manage", fmL = "Living with fibromyalgia";
const fsU = "Understanding frozen shoulder", fsT = "Treat and manage", fsL = "Living with frozen shoulder";

export const SOFT_FEATURES: Record<string, FeatureSpec<SoftPiece>> = {
  "fibromyalgia/what-it-is": { kicker: fmU, headline: "A nervous system turned up too high", standfirst: "What fibromyalgia is, why the pain is real, who gets it and what can help.", piece: "fm-volume-dial", pullQuote: "But this does not mean the symptoms are unreal or all in your mind." },
  "fibromyalgia/symptoms": { kicker: fmU, headline: "More than pain: the four core symptoms", standfirst: "Widespread pain, extra sensitivity, tiredness, unrefreshing sleep, fibro fog and other symptoms.", piece: "fm-four-tiles", pullQuote: "The main symptom is widespread pain." },
  "fibromyalgia/diagnosis": { kicker: fmU, headline: "No single test, but a clear path", standfirst: "How a GP diagnoses fibromyalgia, the tests for other conditions, and why it can take a while.", piece: "fm-stepping-path", pullQuote: "There are no specific blood tests, X-rays or scans to confirm it." },
  "fibromyalgia/triggers": { kicker: fmU, headline: "What turns the volume up", standfirst: "How stress, sleep, the weather and sensitivities can make symptoms worse, and finding your own patterns.", piece: "fm-trigger-ring", pullQuote: "Sometimes it does not develop after any obvious trigger." },
  "fibromyalgia/exercise": { kicker: fmT, headline: "Start small, keep moving", standfirst: "Why exercise helps, the kinds that suit fibromyalgia, and how to start gently.", piece: "fm-build-up", pullQuote: "Keeping active can also prevent other health problems." },
  "fibromyalgia/medicines": { kicker: fmT, headline: "Low doses, patience and a plan", standfirst: "The antidepressants used for pain, how long they take, side effects and stopping, and medicines used less now.", piece: "fm-six-weeks", pullQuote: "Your doctor will usually reduce the dose gradually." },
  "fibromyalgia/talking": { kicker: fmT, headline: "Changing how pain runs your life", standfirst: "ACT, CBT and pain management programmes, what they involve and how to get them.", piece: "fm-body-mind", pullQuote: "Pain can affect your mood and behaviour." },
  "fibromyalgia/sleep": { kicker: fmT, headline: "Sleep deep enough to refresh", standfirst: "Why sleep and pain are linked, a steady routine, habits that help and when to see a GP.", piece: "fm-night-room", pullQuote: "Make sure your bedroom is dark, quiet and a comfortable temperature." },
  "fibromyalgia/pacing": { kicker: fmL, headline: "Breaking the boom and bust cycle", standfirst: "Balancing activity and rest with the four Ps, spreading the load and tracking your energy.", piece: "fm-boom-bust", pullQuote: "Listen to your body and take breaks when needed." },
  "fibromyalgia/flares": { kicker: fmL, headline: "Riding out a flare-up", standfirst: "Why flare-ups happen, what can ease them, learning from them and when to get new symptoms checked.", piece: "fm-flare-wave", pullQuote: "Heat can help." },
  "fibromyalgia/work": { kicker: fmL, headline: "Staying in work, with adjustments", standfirst: "Your rights, telling your employer, adjustments that can help and Access to Work.", piece: "fm-desk-adjust", pullQuote: "Writing down what you agree can help if your manager changes." },
  "fibromyalgia/mood": { kicker: fmL, headline: "Low days are common, and help is there", standfirst: "Why low mood is common, the signs of depression, small steps, support and where to get urgent help.", piece: "fm-path-light", pullQuote: "Would you speak to a friend like that?" },

  "frozen-shoulder/what-it-is": { kicker: fsU, headline: "A capsule that tightens, then lets go", standfirst: "What happens in a frozen shoulder, its two main symptoms, and why it usually gets better.", piece: "fs-capsule", pullQuote: "But the pain and stiffness will usually go away eventually." },
  "frozen-shoulder/stages": { kicker: fsU, headline: "Pain, then stiffness, then a slow thaw", standfirst: "The painful, stiffness and resolution phases, how long each lasts, and why the phase matters.", piece: "fs-three-phases", pullQuote: "Pain is the main problem at first." },
  "frozen-shoulder/who": { kicker: fsU, headline: "Middle age, women and diabetes", standfirst: "Who frozen shoulder most often affects, the link with diabetes, and when there is no clear cause.", piece: "fs-age-line", pullQuote: "Frozen shoulder is more common in women." },
  "frozen-shoulder/diagnosis": { kicker: fsU, headline: "The answer is in how it moves", standfirst: "How an examination makes the diagnosis, when tests help, when to see a GP and when it is urgent.", piece: "fs-turn-out", pullQuote: "X-rays are not routinely needed." },
  "frozen-shoulder/pain-relief": { kicker: fsT, headline: "Three steps to easing the ache", standfirst: "Paracetamol, ibuprofen, stronger pain relief, and warmth or cold on the shoulder.", piece: "fs-three-steps", pullQuote: "At first, try taking paracetamol." },
  "frozen-shoulder/exercises": { kicker: fsT, headline: "Gentle moves, not a gym workout", standfirst: "Why movement helps, checking first, gentle moves to ask about, and physiotherapy.", piece: "fs-wall-climb", pullQuote: "Do not make up your own strenuous exercises." },
  "frozen-shoulder/injections": { kicker: fsT, headline: "Calming the joint so it can move", standfirst: "What a steroid injection does, when it is used, aftercare, hydrodilatation and diabetes.", piece: "fs-stretch-capsule", pullQuote: "It can be a bit painful, but your shoulder should feel less painful afterwards." },
  "frozen-shoulder/surgery": { kicker: fsT, headline: "When the shoulder will not settle", standfirst: "Manipulation under anaesthetic, keyhole capsular release, what the UK FROST trial found, and afterwards.", piece: "fs-three-doors", pullQuote: "Most people with frozen shoulder make a full recovery." },
  "frozen-shoulder/daily-tasks": { kicker: fsL, headline: "Pillows, elbows and short bursts", standfirst: "Sleeping, sitting, reaching, housework and dressing with a painful, stiff shoulder.", piece: "fs-pillows", pullQuote: "Sit with a cushion behind your lower back." },
  "frozen-shoulder/diabetes": { kicker: fsL, headline: "A known link, still not fully explained", standfirst: "How diabetes and frozen shoulder are linked, who is most affected, testing, and steroid injections.", piece: "fs-hundred-ring", pullQuote: "Frozen shoulder is more common in people with diabetes." },
  "frozen-shoulder/work": { kicker: fsL, headline: "Work, the desk and the drive home", standfirst: "Working comfortably, help from your employer, the DVLA, and getting home after treatment.", piece: "fs-desk-drive", pullQuote: "Avoid any manual work that hurts while you are doing it." },
  "frozen-shoulder/patience": { kicker: fsL, headline: "The long road back to movement", standfirst: "How long frozen shoulder takes, keeping going, when to check in, and why most people recover.", piece: "fs-long-road", pullQuote: "Frozen shoulder can take months or years to get better." },
};
