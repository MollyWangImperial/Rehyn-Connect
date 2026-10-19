import type { LearnSource } from "./my-time-learn";

// The watch, listen and practise pieces on the Ischaemic stroke page (content/library.ts `mediaId`),
// drawn by components/library/MediaPieces.tsx. The "videos" are narrated animations made in the
// page: Alira reads each scene's words while its picture moves. Every fact was checked on
// 17 October 2026 against each piece's `sources`. The pictures that compare the brain to roads are
// illustrations, not medical claims. The conversation is a composite, like the stories.

export type SceneArt =
  | "artery-flow" | "artery-clot" | "brain-dim" | "brain-cross" | "flow-restored" | "rewire-paths"
  | "bridge-down" | "back-roads" | "road-widens" | "calendar"
  | "bed-chair" | "standing" | "balance" | "walking-aid" | "footsteps" | "goals"
  | "battery-drain" | "healing" | "pace" | "breaks" | "diary" | "slow-lift";

export type FilmScene = { art: SceneArt; title: string; caption: string };
export type Film = {
  id: string;
  kind: "film";
  intro: string;
  scenes: FilmScene[];
  outro: string;
  /** Something to fill in under the film: the fatigue film's energy diary. */
  tool?: "energy-diary";
  sources: LearnSource[];
};

export type Speaker = { id: string; name: string; age: number; detail: string; tint: { tint: string; ink: string } };
export type Conversation = {
  id: string;
  kind: "conversation";
  intro: string;
  note: string;
  speakers: Speaker[];
  /** In order; a `topic` starts a new part that the reader can jump to. */
  lines: { who: string; text: string; topic?: string }[];
  sources: LearnSource[];
};

export type Breathing = {
  id: string;
  kind: "breathing";
  /** Read by Alira before the breathing starts. */
  intro: string[];
  inCount: number;
  outCount: number;
  /** Session lengths to choose from, in minutes. */
  lengths: number[];
  /** Shown one by one while breathing, a gentle reminder each minute or so. */
  cues: string[];
  close: string;
  sources: LearnSource[];
};

export type Practice = {
  id: string;
  kind: "practice";
  intro: string;
  principles: { title: string; text: string }[];
  /** Everyday ways to use the arm and hand, to talk over with a physiotherapist. */
  ideas: string[];
  safety: string;
  sources: LearnSource[];
};

export type MediaPiece = Film | Conversation | Breathing | Practice;

const sa = (label: string, path: string): LearnSource => ({ label: `Stroke Association: ${label}`, url: `https://www.stroke.org.uk/stroke/${path}` });
const SA_REWIRING = sa("Neuroplasticity, re-wiring the brain", "effects/neuroplasticity-rewiring-the-brain");
const SA_PHYSIO = sa("Physiotherapy after a stroke", "life-after-stroke/physiotherapy");
const SA_ISCHAEMIC = sa("Ischaemic stroke", "types/ischaemic");
const SA_TREATMENTS = sa("Ischaemic stroke treatments", "types/ischaemic/treatments");
const SA_DIAGNOSIS = sa("Diagnosing ischaemic stroke", "types/ischaemic/diagnosis");
const SA_BALANCE = sa("Balance problems after stroke", "effects/physical/balance-problems-after-stroke");
const SA_FATIGUE = sa("Post-stroke fatigue and tiredness", "effects/physical/tiredness-and-fatigue");
const SA_MANAGING_FATIGUE = sa("Managing post-stroke fatigue", "effects/physical/managing-fatigue");
const SA_WEAKNESS = sa("Muscle weakness", "effects/physical/muscle-weakness");
const SA_EMOTIONALISM = sa("Difficulty controlling emotions (emotionalism)", "effects/emotional-and-behavioural/emotionalism");
const SA_APHASIA = sa("Aphasia and its effects", "effects/aphasia/effects");
const ASA_EFFECTS: LearnSource = { label: "American Stroke Association: Effects of stroke", url: "https://www.stroke.org/en/about-stroke/effects-of-stroke" };
const GOV_DRIVING: LearnSource = { label: "GOV.UK: Stroke and driving", url: "https://www.gov.uk/stroke-and-driving" };
const NHS_RECOVERY: LearnSource = { label: "NHS: Recovering from a stroke", url: "https://www.nhs.uk/conditions/stroke/recovery/" };
const NHS_BREATHING: LearnSource = { label: "NHS: Breathing exercises for stress", url: "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/" };

export const ischaemicMedia: MediaPiece[] = [
  {
    id: "film-rewiring",
    kind: "film",
    intro: "Six short scenes about how a brain finds new roads after a stroke.",
    scenes: [
      { art: "bridge-down", title: "The bridge is down", caption: "Picture a town where the main bridge has collapsed. A stroke is a little like that. It damages some of the connections inside the brain, and between the brain and the body." },
      { art: "back-roads", title: "Other roads", caption: "But the town is still there, and people start finding other roads. Healthy parts of the brain can make new connections." },
      { art: "road-widens", title: "Use makes them wider", caption: "At first the back roads are slow. Building up the new connections makes your brain better at controlling your body." },
      { art: "slow-lift", title: "Why exercises repeat", caption: "When you repeat therapy activities, it encourages the brain to make new connections in its healthy parts. That is why your exercises repeat so much." },
      { art: "footsteps", title: "Practise the exact thing", caption: "If you have difficulty lifting your arm, you will need activities that make you lift and use your arm. The practice matches the thing you want back." },
      { art: "calendar", title: "No deadline", caption: "Rewiring begins after a stroke, and it can carry on for years. The road is long, but not impossible." },
    ],
    outro: "Doctors call this neuroplasticity. Keep practising the activities your physiotherapist and stroke team recommend.",
    sources: [SA_REWIRING, SA_PHYSIO],
  },
  {
    id: "film-walking",
    kind: "film",
    intro: "From the bed, to a chair, to standing, to walking: the steps physiotherapy often takes, one at a time.",
    scenes: [
      { art: "bed-chair", title: "Bed to chair", caption: "Physiotherapy may start with moving around the bed, then from the bed to a chair. Sitting in a chair helps your breathing and helps avoid blood clots in your legs." },
      { art: "standing", title: "Standing", caption: "If you cannot stand yet, the team may use equipment to help you onto your feet, if it is safe. If your balance is unsteady, you may be asked to practise standing up." },
      { art: "balance", title: "Balance", caption: "Balance depends on your brain, muscles, joints, sense of touch, vision and inner ear all working together. A stroke can upset it, and practice helps." },
      { art: "walking-aid", title: "Walking with support", caption: "Your physiotherapist and occupational therapist may give you a walking aid, such as a stick or an ankle splint, and if necessary a wheelchair." },
      { art: "footsteps", title: "Walk as much as you can", caption: "If you are having difficulty walking, you need to walk as much as possible, in the way your physiotherapist shows you." },
      { art: "goals", title: "Small goals, big goals", caption: "A big goal like walking is broken into smaller steps, starting with sitting and standing on your own. Each step is a target to work towards with your team." },
    ],
    outro: "Your physiotherapist decides which aid suits you, and when to change it. Ask them before trying without one.",
    sources: [SA_PHYSIO, SA_BALANCE, SA_WEAKNESS],
  },
  {
    id: "film-fatigue",
    kind: "film",
    intro: "Why tiredness after a stroke is different, and what helps, in five scenes.",
    scenes: [
      { art: "battery-drain", title: "Not ordinary tiredness", caption: "Fatigue is very common after a stroke. It is different from normal tiredness, because it does not seem to get better with rest." },
      { art: "healing", title: "Healing uses energy", caption: "In the early weeks and months, your brain and body are healing. If your muscles are weak, walking and other movements can take much more energy than before." },
      { art: "pace", title: "Pace, plan, prioritise", caption: "Take things step by step at a speed you can manage. Plan when and how you will do things. Decide which matter most, and which you can leave or get help with." },
      { art: "breaks", title: "Breaks before and after", caption: "Take proper breaks before or after doing things. Even talking with friends, a car journey or eating a meal can be tiring." },
      { art: "diary", title: "A simple diary", caption: "Keep a diary of what you are doing, even if it is just a few notes or a photograph each day. It helps you track your progress." },
    ],
    outro: "Ask your GP or stroke team whether something like a medicine or an infection might be adding to your tiredness.",
    tool: "energy-diary",
    sources: [SA_FATIGUE, SA_MANAGING_FATIGUE],
  },
  {
    id: "practice-arm-hand",
    kind: "practice",
    intro: "A place to keep track of the arm and hand practice your physiotherapist gives you, day by day, for the first twelve weeks.",
    principles: [
      { title: "Practise the exact thing", text: "If you have difficulty lifting your arm, you need activities that make you lift and use your arm." },
      { title: "Repeat it", text: "Repeating therapy activities encourages the brain to make new connections in its healthy parts." },
      { title: "Small steps to big goals", text: "Your physiotherapist will set goals with you, and break the big ones into smaller steps." },
      { title: "Plan rest too", text: "Fatigue can make everything harder. Pace yourself, and take breaks before or after practice." },
    ],
    ideas: [
      "Reaching for something on a table",
      "Picking up and holding a light object",
      "Using the arm while getting dressed",
      "Using the hand while washing",
      "An easy kitchen job, like stirring or tearing herbs",
    ],
    safety: "Check with your physiotherapist which activities suit you, and how many. If anything hurts, especially your shoulder, stop and tell them.",
    sources: [SA_PHYSIO, SA_WEAKNESS, SA_REWIRING, SA_MANAGING_FATIGUE],
  },
];

export const findMedia = (id: string | undefined) => ischaemicMedia.find(piece => piece.id === id);
