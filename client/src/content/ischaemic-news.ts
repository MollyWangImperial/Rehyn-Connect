// The Ischaemic stroke answers as magazine features ("A Blocked Supply Line" design): what a feature
// adds to its checked answer (content/ischaemic-answers.ts). An answer without an entry here uses its
// own question, short answer, headings and sources. The words of the feature are the answer's own.

/** When the Ischaemic stroke answers were written and checked (content/ischaemic-answers.ts). */
export const WRITTEN_ON = "17 October 2026";

export type NewsReference ={ publisher: string; title: string; url: string; extra?: string };

export type NewsChart =
  /** Horizontal bars, out of every 100 unless `max` says otherwise; `unit` follows each value ("×"). */
  | { kind: "bars"; title: string; subtitle: string; bars: { label: string; value: number; strong?: boolean }[]; sources: string; max?: number; ticks?: number[]; unit?: string }
  /** A range on a line from 0 to 100. */
  | { kind: "range"; title: string; subtitle: string; from: number; to: number; sources: string }
  /** A hundred squares, coloured by group: "out of every 100". */
  | { kind: "waffle"; title: string; subtitle: string; groups: { label: string; count: number; tone: "green" | "clay" | "dark" }[]; sources: string }
  /** How long a TIA's symptoms last, on a line from the first minute to the weeks after. */
  | { kind: "tia-clock"; title: string; subtitle: string; sources: string }
  /** One share of a whole, as a ring: "up to 15 in 100" ischaemic strokes, unless `subject` names who. */
  | { kind: "donut"; title: string; subtitle: string; value: number; prefix?: string; subject?: string; label: string; sources: string };

export type NewsExtras = {
  /** The first part of the line above the headline, before the condition: "Understanding stroke | Ischaemic stroke". */
  kicker: string;
  headline: string;
  standfirst: string;
  /** Numbered references; each number can cite more than one page. Without them, the answer's own sources, in order. */
  references?: NewsReference[][];
  /** Reference numbers beside each paragraph: `sectionRefs[i][j]` for section i, paragraph j. Left out where no paragraph-by-paragraph check was made. */
  sectionRefs?: number[][][];
  /** Reference numbers beside each "What helps now" line. */
  helpRefs?: number[][];
  /** Headings in place of the answer's own, by section; an empty first heading lets the story run on from the picture. */
  headings?: string[];
  /**
   * The full-width picture under the headline: the clot illustration, or the three routes to a
   * blockage, a picture the reader steers (each route opens the section it names).
   */
  figure?: { art: "clot"; words: [string, string] } | { art: "routes"; routes: NewsRoute[] } | { art: "types"; panels: NewsTypePanel[] } | { art: "scans"; milestones: NewsMilestone[]; kicker?: string; title?: string; credit?: string } | { art: "custom"; id: NewsPiece };
  /** A card's own pieces placed after a section, by section index (components/library/NewsPieces.tsx). */
  inserts?: Record<number, NewsPiece>;
  /** Big figures after a section, by section index, each with its reference number. */
  stats?: Record<number, NewsStat[]>;
  /** Charts after a section, by section index. */
  charts?: Record<number, NewsChart>;
  pullQuote?: string;
};

/** One of the three routes in the routes picture: where it starts, and the section that explains it. */
export type NewsRoute = { id: "neck" | "brain" | "heart"; label: string; section: number };
/**
 * One step on the hospital clock: how many hours after arriving, what happens, and the answer's own
 * words for it (a paragraph of a section, or a "What helps now" line).
 */
export type NewsMilestone = { id: string; hours: number; label: string; when: string; /** The clock's centre, in place of "N h". */ mark?: string; from: { section: number; paragraph: number } | { help: number } };
/** One panel of the three-word picture: the word, what it means, how common it is, and its section. */
export type NewsTypePanel = { id: "ischaemic" | "haemorrhagic" | "tia"; word: string; meaning: string; share: string; section: number };
/** A big figure with a small picture of it: half a circle, five bars against one, or one in N people (`of`). */
export type NewsStat = { value: string; label: string; ref: number; picture?: "half" | "times" | "one-in-four" | "one-in" | "hours" | "calendar"; of?: number };
/** The pieces made for one card each: pictures under the headline, and pieces placed after a section. */
export type NewsPiece =
  | "signal" | "ideas" | "road" | "words" | "road-signs" | "odds" | "stones" | "weather" | "swallow" | "wins"
  | "recovery-curve" | "balance-wheel" | "energy-day" | "thickness"
  // Haemorrhagic stroke's own (components/library/NewsBleedPieces.tsx).
  | "pressure" | "leaks" | "two-kinds" | "repair" | "headache-sort" | "bp-gauge" | "weighing" | "dvla"
  // TIA's own (components/library/NewsTiaPieces.tsx).
  | "tia-clear" | "tia-tests" | "questions" | "pill-box" | "neck-artery" | "heartbeat" | "risk-fades" | "fast-card"
  // Stroke under 50's own (components/library/NewsYoungPieces.tsx).
  | "young-causes" | "bubble-test" | "myth-fact" | "growth-rings" | "iceberg" | "steady-build" | "work-weeks" | "money-jars" | "kids-talk" | "two-chairs";

/**
 * A card's feature: by condition and piece first ("ischaemic/heavy-side": two pieces can share one
 * answer, and two conditions can share a piece id), then by its answer.
 */
export const newsExtrasFor = (conditionId: string, itemId: string, articleId: string): NewsExtras | undefined =>
  NEWS_EXTRAS[`${conditionId}/${itemId}`] ?? NEWS_EXTRAS[articleId];

const NHS_STROKE: NewsReference ={ publisher: "NHS", title: "Stroke: overview", url: "https://www.nhs.uk/conditions/stroke/" };
const SA_ISCHAEMIC: NewsReference = { publisher: "Stroke Association", title: "Ischaemic stroke", url: "https://www.stroke.org.uk/stroke/types/ischaemic" };

export const NEWS_EXTRAS: Record<string, NewsExtras> = {
  "isch-what-happens": {
    kicker: "Understanding stroke",
    headline: "A blocked supply line",
    standfirst: "What actually happens in the brain during an ischaemic stroke — and why minutes mattered on the day",
    references: [
      [NHS_STROKE, SA_ISCHAEMIC],
      [
        { publisher: "National Institute for Health and Care Excellence (NICE)", title: "Stroke and transient ischaemic attack in over 16s: diagnosis and initial management (NG128)", url: "https://www.nice.org.uk/guidance/ng128" },
        { publisher: "Intercollegiate Stroke Working Party", title: "National Clinical Guideline for Stroke for the UK and Ireland", url: "https://www.strokeguideline.org/", extra: "2023" },
      ],
      [
        { publisher: "Stroke Association", title: "Ischaemic stroke treatments", url: "https://www.stroke.org.uk/stroke/types/ischaemic/treatments" },
        { publisher: "Sentinel Stroke National Audit Programme (SSNAP)", title: "National results", url: "https://www.strokeaudit.org/" },
      ],
      [{ publisher: "American Stroke Association", title: "Effects of stroke", url: "https://www.stroke.org/en/about-stroke/effects-of-stroke" }],
      [{ publisher: "NHS", title: "Stroke: symptoms", url: "https://www.nhs.uk/conditions/stroke/symptoms/" }],
    ],
    sectionRefs: [
      [[1], [1]],
      [[2], [3]],
      [[], [4]],
      [[1], [4]],
    ],
    helpRefs: [[5], [], [2]],
    headings: ["", "Against the clock", "Crossed wires", "After the clot"],
    figure: { art: "clot", words: ["Downstream of the clot,", "cells run out of oxygen."] },
    charts: {
      0: { kind: "bars", title: "Most strokes are caused by a blockage", subtitle: "Strokes in the UK, by cause, out of every 100", bars: [{ label: "Ischaemic (blockage)", value: 85, strong: true }, { label: "Other, mostly bleeds", value: 15 }], sources: "Sources: NHS; Stroke Association" },
      1: { kind: "range", title: "A narrow window", subtitle: "People able to have clot-busting or clot removal, out of every 100", from: 10, to: 15, sources: "Sources: Stroke Association; Sentinel Stroke National Audit Programme" },
    },
    pullQuote: "The brain cells that died do not grow back. But the brain can rewire itself.",
  },

  // Figures checked on 19 October 2026 against the Stroke Association pages cited for each.
  "isch-why-me": {
    kicker: "Understanding stroke",
    headline: "Three roads to a blockage",
    standfirst: "Why did this happen to me? Sometimes there is one clear reason, sometimes several, and sometimes the tests never find one.",
    references: [
      [{ publisher: "Stroke Association", title: "Ischaemic stroke causes", url: "https://www.stroke.org.uk/stroke/types/ischaemic/causes" }],
      [{ publisher: "Stroke Association", title: "High blood pressure", url: "https://www.stroke.org.uk/stroke/managing-risk/high-blood-pressure" }],
      [{ publisher: "Stroke Association", title: "Atrial fibrillation", url: "https://www.stroke.org.uk/stroke/managing-risk/atrial-fibrillation" }],
      [{ publisher: "Stroke Association", title: "Types and causes of stroke", url: "https://www.stroke.org.uk/stroke/types" }],
      [{ publisher: "Stroke Association", title: "Ischaemic stroke treatments", url: "https://www.stroke.org.uk/stroke/types/ischaemic/treatments" }],
    ],
    sectionRefs: [
      [[1], [1, 2]],
      [[1], [1, 2]],
      [[1, 3], [1]],
      [[1], [1, 4], [4]],
    ],
    helpRefs: [[1], [1], [5]],
    headings: ["1 · Narrowed arteries", "2 · Tiny vessels deep in the brain", "3 · The heart", "Other reasons, and none"],
    figure: {
      art: "routes",
      routes: [
        { id: "neck", label: "Narrowed arteries", section: 0 },
        { id: "brain", label: "Tiny vessels deep in the brain", section: 1 },
        { id: "heart", label: "The heart", section: 2 },
      ],
    },
    stats: {
      0: [
        { value: "About half", label: "of all strokes have high blood pressure playing a part. It is the biggest single risk factor.", ref: 2, picture: "half" },
        { value: "1 in 4", label: "strokes in the UK happen to people of working age.", ref: 4, picture: "one-in-four" },
      ],
      2: [
        { value: "1 in 4", label: "people have a small gap in the heart, a PFO. Most never have a stroke.", ref: 1, picture: "one-in-four" },
      ],
    },
    charts: {
      2: { kind: "bars", title: "An irregular heartbeat raises the odds", subtitle: "How likely a stroke is with atrial fibrillation, compared with without it", bars: [{ label: "Without AF", value: 1 }, { label: "With AF", value: 5, strong: true }], max: 5, ticks: [0, 1, 2, 3, 4, 5], unit: "×", sources: "Source: Stroke Association, Atrial fibrillation (AF can make a stroke five times more likely)" },
    },
    pullQuote: "Anyone can have a stroke.",
  },

  // Figures checked on 19 October 2026 against the Stroke Association pages cited for each.
  "isch-types": {
    kicker: "Understanding stroke",
    headline: "Three words from the ward",
    standfirst: "Ischaemic, haemorrhagic, TIA. The words nobody explained, with a picture of each.",
    references: [
      [{ publisher: "Stroke Association", title: "Types and causes of stroke", url: "https://www.stroke.org.uk/stroke/types" }],
      [SA_ISCHAEMIC],
      [{ publisher: "Stroke Association", title: "Haemorrhagic stroke", url: "https://www.stroke.org.uk/stroke/types/haemorrhagic" }],
      [{ publisher: "Stroke Association", title: "Transient ischaemic attack (TIA)", url: "https://www.stroke.org.uk/stroke/type/tia" }],
      [{ publisher: "Stroke Association", title: "Diagnosing ischaemic stroke", url: "https://www.stroke.org.uk/stroke/types/ischaemic/diagnosis" }],
    ],
    sectionRefs: [
      [[2]],
      [[3], [3]],
      [[4], [4]],
      [[1, 5], [1]],
    ],
    helpRefs: [[4], [4], [1]],
    headings: ["Ischaemic: a blockage", "Haemorrhagic: a bleed", "TIA: a warning", "Why the type matters"],
    figure: {
      art: "types",
      panels: [
        { id: "ischaemic", word: "Ischaemic", meaning: "A blockage cuts off the blood supply.", share: "About 85 in 100 strokes", section: 0 },
        { id: "haemorrhagic", word: "Haemorrhagic", meaning: "A blood vessel bleeds in or around the brain.", share: "About 15 in 100 strokes", section: 1 },
        { id: "tia", word: "TIA", meaning: "A blockage that clears by itself.", share: "A warning sign", section: 2 },
      ],
    },
    charts: {
      1: { kind: "waffle", title: "Out of every 100 strokes in the UK", subtitle: "By what caused them", groups: [{ label: "Ischaemic: a blockage", count: 85, tone: "green" }, { label: "A bleed inside the brain", count: 10, tone: "clay" }, { label: "A bleed on the surface of the brain", count: 5, tone: "dark" }], sources: "Source: Stroke Association, Ischaemic stroke and Haemorrhagic stroke. About 15 in 100 strokes are bleeds; about two in three bleeds are inside the brain, and about 5 in 100 strokes are bleeds on the surface. All figures are approximate." },
      2: { kind: "tia-clock", title: "How long a TIA lasts", subtitle: "The signs come and go; the risk does not", sources: "Source: Stroke Association, Transient ischaemic attack (TIA)" },
    },
    pullQuote: "A TIA is a warning. It is a medical emergency all the same.",
  },

  // Times and figures checked on 19 October 2026 against the Stroke Association pages cited for each.
  "isch-scans": {
    kicker: "Understanding stroke",
    headline: "The first day, test by test",
    standfirst: "CT, MRI, an ECG, a neck scan, a sip of water. Each one was looking for something.",
    references: [
      [{ publisher: "Stroke Association", title: "Diagnosing ischaemic stroke", url: "https://www.stroke.org.uk/stroke/types/ischaemic/diagnosis" }],
      [{ publisher: "Stroke Association", title: "Ischaemic stroke treatments", url: "https://www.stroke.org.uk/stroke/types/ischaemic/treatments" }],
      [{ publisher: "Stroke Association", title: "Swallowing problems", url: "https://www.stroke.org.uk/stroke/effects/physical/swallowing-problems" }],
      [{ publisher: "Stroke Association", title: "Carotid artery disease", url: "https://www.stroke.org.uk/stroke/types/ischaemic/carotid-artery-disease" }],
    ],
    sectionRefs: [
      [[1], [1], [1, 2]],
      [[1]],
      [[1], [1, 4]],
      [[2, 3]],
    ],
    helpRefs: [[2], [2], [1]],
    headings: ["The brain scan", "Scans with a dye", "Looking for the cause", "The swallowing test"],
    figure: {
      art: "scans",
      milestones: [
        { id: "scan", hours: 1, label: "Brain scan", when: "Within 1 hour of arriving", from: { section: 0, paragraph: 0 } },
        { id: "swallow", hours: 4, label: "Swallowing test", when: "Within 4 hours", from: { section: 3, paragraph: 0 } },
        { id: "team", hours: 24, label: "Full assessment by the stroke team", when: "After 24 hours, if effects remain", from: { help: 1 } },
      ],
    },
    charts: {
      2: { kind: "donut", title: "Narrowed neck arteries", subtitle: "Ischaemic strokes in the UK that may be due to them, out of every 100", value: 15, prefix: "Up to", label: "may be due to narrowed arteries in the neck: the reason for the neck scan", sources: "Source: Stroke Association, Carotid artery disease" },
    },
    pullQuote: "Nothing to eat, drink or swallow by mouth until the swallowing test is done.",
  },

  // ---- The rest of the Ischaemic stroke page, keyed by piece. Each has a picture or interactive of
  // its own (components/library/NewsPieces.tsx). Figures checked on 20 October 2026 against the page
  // each one cites; references without a list here are the answer's own sources, in order.

  "ischaemic/heavy-side": {
    kicker: "Understanding stroke",
    headline: "A message that is not getting through",
    standfirst: "Your muscles are still there. The trouble is higher up, and that is good news for getting movement back.",
    figure: { art: "custom", id: "signal" },
    pullQuote: "The muscles are waiting for a signal that is not getting through clearly yet.",
  },

  "ischaemic/rewiring": {
    kicker: "Recovery after stroke",
    headline: "New roads around a broken bridge",
    standfirst: "The cells a stroke destroyed will not grow back. So how do people learn to walk and talk again?",
    references: [
      [{ publisher: "Stroke Association", title: "Neuroplasticity, re-wiring the brain", url: "https://www.stroke.org.uk/stroke/effects/neuroplasticity-rewiring-the-brain" }],
      [{ publisher: "Stroke Association", title: "Physiotherapy after a stroke", url: "https://www.stroke.org.uk/stroke/life-after-stroke/physiotherapy" }],
      [{ publisher: "Stroke Association", title: "Stroke recovery", url: "https://www.stroke.org.uk/stroke/recovery" }],
    ],
    inserts: { 2: "recovery-curve" },
    pullQuote: "There is no time limit on the brain's ability to rewire.",
  },

  "ischaemic/arm-hand": {
    kicker: "Recovery after stroke",
    headline: "Practise the exact thing",
    standfirst: "Everyday ways to use your arm and hand, and a log to keep track of the practice your physiotherapist gives you.",
    figure: { art: "custom", id: "ideas" },
    pullQuote: "Do your exercises on the affected side, even when the other side would be quicker.",
  },

  "ischaemic/first-three-months": {
    kicker: "Recovery after stroke",
    headline: "Day one to month six",
    standfirst: "What is typical, what is not, and the review that comes after.",
    figure: { art: "custom", id: "road" },
    stats: {
      1: [
        { value: "3 hours", label: "of therapy for movement goals, at least five days a week, is what stroke guidelines recommend, if you are able to.", ref: 2, picture: "hours" },
        { value: "Up to 6 weeks", label: "is how long early supported discharge, therapy at home, typically lasts.", ref: 2, picture: "calendar" },
        { value: "About 6 months", label: "after a stroke, everyone should be offered a review of their progress.", ref: 3, picture: "calendar" },
      ],
    },
    pullQuote: "Every stroke is different, and every recovery is too.",
  },

  "ischaemic/walking": {
    kicker: "Recovery after stroke",
    headline: "Small steps to walking",
    standfirst: "From the bed, to a chair, to your feet: walking usually comes back in small steps, not one big one.",
    inserts: { 0: "balance-wheel" },
    pullQuote: "A big goal like walking is broken into smaller steps.",
  },

  "ischaemic/words": {
    kicker: "Recovery after stroke",
    headline: "The thought is there. The word is stuck.",
    standfirst: "You know exactly what you want to say. It just will not come out. Around a third of people find this after a stroke.",
    figure: { art: "custom", id: "words" },
    stats: { 0: [{ value: "1 in 3", label: "people who have a stroke will experience aphasia. It does not affect intelligence.", ref: 1, picture: "one-in", of: 3 }] },
    pullQuote: "People with aphasia still think in the same way.",
  },

  "ischaemic/fatigue": {
    kicker: "Recovery after stroke",
    headline: "Not ordinary tiredness",
    standfirst: "It is not laziness, and a nap will not fix it. Tiredness after a stroke is its own thing.",
    inserts: { 0: "energy-day" },
    pullQuote: "It can follow any stroke, big or small.",
  },

  "ischaemic/driving": {
    kicker: "Life after stroke",
    headline: "Off the road, for now",
    standfirst: "The rules are clearer than most people think. Your doctor says when, and sometimes DVLA needs to know.",
    figure: { art: "custom", id: "road-signs" },
    stats: { 3: [{ value: "Up to £1,000", label: "fine if you do not tell DVLA about a medical condition that affects your driving.", ref: 1 }] },
    pullQuote: "Restart only when your doctor or healthcare professional tells you it is safe.",
  },

  "ischaemic/prevention": {
    kicker: "Life after stroke",
    headline: "Lowering the odds",
    standfirst: "The honest answer, and the handful of things that really do lower the odds.",
    figure: { art: "custom", id: "odds" },
    stats: { 0: [{ value: "1 in 4", label: "stroke survivors will have a second stroke within the next five years.", ref: 5, picture: "one-in", of: 4 }] },
    pullQuote: "Remember the word FAST. Face, arms, speech, and time to call 999.",
  },

  "ischaemic/work": {
    kicker: "Life after stroke",
    headline: "Back to work, at your own pace",
    standfirst: "Some people go back within weeks, some after months or years. A plan with your employer makes the difference.",
    references: [
      [{ publisher: "Stroke Association", title: "Work after a stroke", url: "https://www.stroke.org.uk/stroke/life-after/work" }],
      [{ publisher: "Stroke Association", title: "Muscle weakness", url: "https://www.stroke.org.uk/stroke/effects/physical/muscle-weakness" }],
      [{ publisher: "Stroke Association", title: "Types and causes of stroke", url: "https://www.stroke.org.uk/stroke/types" }],
    ],
    figure: { art: "custom", id: "stones" },
    stats: { 0: [{ value: "1 in 4", label: "strokes in the UK happen to people of working age.", ref: 3, picture: "one-in", of: 4 }] },
    pullQuote: "You are the expert in your own needs.",
  },

  "ischaemic/mood": {
    kicker: "Life after stroke",
    headline: "Tears out of nowhere",
    standfirst: "Tears, or laughter, that arrive out of nowhere have a name. About one in five people get them.",
    figure: { art: "custom", id: "weather" },
    stats: {
      1: [
        { value: "1 in 5", label: "people have emotionalism in the first few months after a stroke.", ref: 1, picture: "one-in", of: 5 },
        { value: "1 in 3", label: "stroke survivors will have some form of depression within the first year.", ref: 2, picture: "one-in", of: 3 },
        { value: "1 in 4", label: "people who have a stroke will experience anxiety within the first five years.", ref: 2, picture: "one-in", of: 4 },
      ],
    },
    pullQuote: "You are not becoming a different person. It is an effect of the stroke.",
  },

  "ischaemic/swallowing": {
    kicker: "Life after stroke",
    headline: "Swallowing safely again",
    standfirst: "Swallowing is one of the most complicated things the brain does. Here is what helps while it recovers.",
    figure: { art: "custom", id: "swallow" },
    inserts: { 2: "thickness" },
    pullQuote: "Most people can swallow safely again within the first few weeks.",
  },

  "ischaemic/carers": {
    kicker: "Life after stroke",
    headline: "Doing it with them, not for them",
    standfirst: "Patience, encouragement, and knowing when not to help. A page for the person alongside.",
    figure: { art: "custom", id: "wins" },
    pullQuote: "Recovery is slow, so praise every sign of progress, however small.",
  },

  // ---- Haemorrhagic stroke (content/haemorrhagic-answers.ts). Figures checked on 20 October 2026
  // against the Stroke Association pages each answer cites; references are the answer's own sources.

  "haemorrhagic/what-happens": {
    kicker: "Understanding stroke",
    headline: "A bleed in a closed box",
    standfirst: "The blood itself damages brain cells, and the pressure it builds can do harm too.",
    figure: { art: "custom", id: "pressure" },
    pullQuote: "If a bleed inside the brain is large, pressure can build up inside the skull.",
  },

  "haemorrhagic/why-me": {
    kicker: "Understanding stroke",
    headline: "Weak spots under pressure",
    standfirst: "Blood pressure, a weak spot in a vessel, or a medicine that thins the blood: the usual reasons, and the rarer ones.",
    figure: { art: "custom", id: "leaks" },
    pullQuote: "A specific cause is not identified for most aneurysms.",
  },

  "haemorrhagic/two-kinds": {
    kicker: "Understanding stroke",
    headline: "Two kinds of bleed",
    standfirst: "The difference is where the blood collects: inside the brain, or in the space around it.",
    figure: { art: "custom", id: "two-kinds" },
    stats: { 0: [{ value: "About 2 in 3", label: "haemorrhagic strokes are intracerebral: bleeding into the brain tissue.", ref: 1 }] },
    charts: {
      1: { kind: "waffle", title: "Out of every 100 strokes in the UK", subtitle: "By what caused them", groups: [{ label: "Ischaemic: a blockage", count: 85, tone: "green" }, { label: "A bleed inside the brain", count: 10, tone: "clay" }, { label: "A bleed on the surface of the brain", count: 5, tone: "dark" }], sources: "Source: Stroke Association, Haemorrhagic stroke. About 15 in 100 strokes are bleeds; about two in three bleeds are inside the brain, and about 5 in 100 strokes are bleeds on the surface. All figures are approximate." },
    },
    pullQuote: "People describe it as the worst pain ever, like being hit on the head.",
  },

  "haemorrhagic/surgery": {
    kicker: "Understanding stroke",
    headline: "Coils, clips and drains",
    standfirst: "Coils, clips, removing a bleed, draining fluid. Each one had a job.",
    figure: { art: "custom", id: "repair" },
    stats: { 4: [{ value: "About 3 weeks", label: "is how long nimodipine may be given after a subarachnoid haemorrhage, to help prevent vasospasm.", ref: 1, picture: "calendar" }] },
    pullQuote: "Surgery aims to stop the bleeding by sealing the weak area of the blood vessel.",
  },
};

NEWS_EXTRAS["haemorrhagic/first-three-months"] = {
  kicker: "Recovery after stroke",
  headline: "Slow, then steady",
  standfirst: "Recovery can be slow and frustrating. Most people improve, and it can carry on for years.",
  figure: { art: "custom", id: "road" },
  stats: { 1: [
    { value: "3 hours", label: "of therapy for movement goals, at least five days a week, is what stroke guidelines recommend, if you are able to.", ref: 4, picture: "hours" },
    { value: "Up to 6 weeks", label: "is how long early supported discharge, therapy at home, typically lasts.", ref: 4, picture: "calendar" },
  ] },
  pullQuote: "Most people improve with treatment, and some recover fully.",
};
NEWS_EXTRAS["haemorrhagic/headaches"] = {
  kicker: "Recovery after stroke",
  headline: "Common, or an emergency",
  standfirst: "Headaches after a bleed are common, and they usually ease. One kind is always an emergency.",
  figure: { art: "custom", id: "headache-sort" },
  pullQuote: "If you have any signs of a stroke, including a sudden, severe headache, call 999.",
};
NEWS_EXTRAS["haemorrhagic/blood-pressure"] = {
  kicker: "Life after stroke",
  headline: "The number that matters most",
  standfirst: "High blood pressure can make the blood vessels in the brain more likely to bleed. Keeping it down is the main way to lower the risk.",
  figure: { art: "custom", id: "bp-gauge" },
  stats: { 0: [{ value: "Over 25%", label: "lower risk of stroke could come from lowering your blood pressure by just 10 mmHg.", ref: 3 }] },
  pullQuote: "Your doctor can advise you on the target for your blood pressure.",
};
NEWS_EXTRAS["haemorrhagic/blood-thinners"] = {
  kicker: "Life after stroke",
  headline: "A careful conversation",
  standfirst: "They help prevent clots, and they can raise the risk of bleeding. It is a decision to make with your team.",
  figure: { art: "custom", id: "weighing" },
  pullQuote: "Do not stop taking a medicine without speaking to your doctor or pharmacist first.",
};
NEWS_EXTRAS["haemorrhagic/driving"] = {
  kicker: "Life after stroke",
  headline: "Off the road, and back again",
  standfirst: "The rules depend on the kind of bleed, whether you had surgery, and your licence.",
  figure: { art: "custom", id: "dvla" },
  pullQuote: "Restart only when your doctor says it is safe.",
};

// ---- TIA (mini-stroke) (content/tia-answers.ts). Wording checked on 20 October 2026 against the pages
// each answer cites; references are the answer's own sources.

NEWS_EXTRAS["tia/what-happened"] = {
  kicker: "Understanding stroke",
  headline: "It came, and it went",
  standfirst: "A blockage that cleared by itself before it did lasting damage. The warning it gives still matters.",
  figure: { art: "custom", id: "tia-clear" },
  pullQuote: "When the blockage moves away or dissolves, the blood supply returns and the symptoms stop.",
};
NEWS_EXTRAS["tia/warning"] = {
  kicker: "Understanding stroke",
  headline: "A warning, not a false alarm",
  standfirst: "It is a warning. The risk of a stroke is greatest in the first days and weeks after it.",
  figure: {
    art: "scans",
    kicker: "Act fast",
    title: "The first 24 hours",
    credit: "Illustration: Rehyn. Times as the NHS, NICE and the Stroke Association set them out.",
    milestones: [
      { id: "aspirin", hours: 0, mark: "Now", label: "Aspirin", when: "Straight away", from: { section: 1, paragraph: 0 } },
      { id: "specialist", hours: 24, label: "Seen by a specialist", when: "Within 24 hours", from: { section: 2, paragraph: 0 } },
    ],
  },
  charts: { 3: { kind: "tia-clock", title: "How long a TIA lasts", subtitle: "The signs come and go; the risk does not", sources: "Source: Stroke Association, Transient ischaemic attack (TIA)" } },
  pullQuote: "A TIA is a medical emergency, the same as a stroke.",
};
NEWS_EXTRAS["tia/tests"] = {
  kicker: "Understanding stroke",
  headline: "Looking for the cause",
  standfirst: "A scan, a neck scan, blood tests, a heart check. Each one looks for a cause that can be treated.",
  figure: { art: "custom", id: "tia-tests" },
  pullQuote: "A TIA may not cause damage that would show up on a scan.",
};
NEWS_EXTRAS["tia/not-a-tia"] = {
  kicker: "Understanding stroke",
  headline: "Why so many questions",
  standfirst: "Other things can cause the same symptoms. The questions help rule them out.",
  figure: { art: "custom", id: "questions" },
  pullQuote: "The specialist will listen carefully to you and confirm whether you have had a TIA.",
};
NEWS_EXTRAS["tia/tablets"] = {
  kicker: "Treat and manage",
  headline: "What is in the box",
  standfirst: "Most people take one or more medicines every day, long term, to lower the chance of a stroke.",
  figure: { art: "custom", id: "pill-box" },
  pullQuote: "Do not stop any medicines before speaking to your GP or pharmacist.",
};
NEWS_EXTRAS["tia/carotid"] = {
  kicker: "Treat and manage",
  headline: "Clearing the neck artery",
  standfirst: "An operation to clear fatty deposits from the artery in the neck, to improve blood flow and help prevent a stroke.",
  figure: { art: "custom", id: "neck-artery" },
  stats: { 1: [{ value: "More than 50%", label: "narrowing of the carotid artery is when surgery might be offered.", ref: 3 }] },
  pullQuote: "This improves blood flow and helps prevent a stroke.",
};
NEWS_EXTRAS["tia/af-check"] = {
  kicker: "Treat and manage",
  headline: "A rhythm that comes and goes",
  standfirst: "A clot can form in the heart and travel to the brain. An irregular heartbeat can come and go, so finding it can take time.",
  figure: { art: "custom", id: "heartbeat" },
  stats: { 2: [{ value: "24 hours", label: "is how long a small wearable device may track your heartbeat, because atrial fibrillation can come and go.", ref: 3, picture: "hours" }] },
  pullQuote: "Atrial fibrillation can come and go.",
};
NEWS_EXTRAS["tia/prevent"] = {
  kicker: "Life after a TIA",
  headline: "Keeping a warning a warning",
  standfirst: "Medicines every day, the numbers checked, and the habits that help. And the risk goes down over time.",
  figure: { art: "custom", id: "odds" },
  pullQuote: "Your risk of a stroke goes down over time following a TIA.",
};
NEWS_EXTRAS["tia/driving"] = {
  kicker: "Life after a TIA",
  headline: "A month off the road",
  standfirst: "You must stop straight away. With a car licence it is at least a month, and only when your doctor says it is safe.",
  figure: { art: "custom", id: "road-signs" },
  pullQuote: "You can restart only when your doctor or healthcare professional tells you it is safe.",
};
NEWS_EXTRAS["tia/worry"] = {
  kicker: "Life after a TIA",
  headline: "The worry, and what helps",
  standfirst: "It can be very worrying to be told you had a TIA. The risk goes down over time, and support is there.",
  figure: { art: "custom", id: "risk-fades" },
  pullQuote: "Your risk of a stroke goes down over time.",
};
NEWS_EXTRAS["tia/fast"] = {
  kicker: "Life after a TIA",
  headline: "Four letters, one rule",
  standfirst: "Face, arms, speech, time. If you spot any of the signs, call 999. Do not wait to see if they pass.",
  figure: { art: "custom", id: "fast-card" },
  pullQuote: "Do not wait to see if the symptoms pass.",
};

// Stroke under 50 (content/under50-answers.ts).
NEWS_EXTRAS["under-50/why-young"] = {
  kicker: "Understanding stroke",
  headline: "Different reasons, earlier",
  standfirst: "A torn artery, a hole in the heart, blood that clots too easily, or the usual causes arriving early. And sometimes no cause is found.",
  figure: { art: "custom", id: "young-causes" },
  stats: { 0: [{ value: "1 in 4", label: "adults who have a stroke are of working age, between 18 and 65.", ref: 1, picture: "one-in", of: 4 }] },
  pullQuote: "A stroke can affect anyone, at any age.",
};
NEWS_EXTRAS["under-50/tests"] = {
  kicker: "Understanding stroke",
  headline: "A closer look at the heart",
  standfirst: "When a stroke happens younger, or the cause is not clear, the team may look harder: at the heart, the blood and the arteries in the neck.",
  figure: { art: "custom", id: "bubble-test" },
  pullQuote: "A bubble test looks for a small hole that could allow clots to pass through.",
};
NEWS_EXTRAS["under-50/too-young"] = {
  kicker: "Understanding stroke",
  headline: "Never too young",
  standfirst: "One in four strokes happen at working age. Any one of the signs is an emergency, whatever your age.",
  figure: { art: "custom", id: "myth-fact" },
  charts: { 0: { kind: "donut", title: "A common belief", subtitle: "People in the UK, out of every 100, in a 2023 Stroke Association survey", value: 60, subject: "people in the UK", label: "wrongly believe that strokes do not happen to young adults", sources: "Source: Stroke Association, 26 October 2023" } },
  pullQuote: "Any one of these signs of stroke is an emergency.",
};
NEWS_EXTRAS["under-50/recovery-shape"] = {
  kicker: "Understanding stroke",
  headline: "Quick at first, and still going",
  standfirst: "Recovery is quickest in the first days and weeks, but it can carry on for months and years.",
  figure: { art: "custom", id: "growth-rings" },
  pullQuote: "Recovery can continue for months and years after a stroke.",
};
NEWS_EXTRAS["under-50/hidden"] = {
  kicker: "Recovery after stroke",
  headline: "Looking fine, feeling otherwise",
  standfirst: "Tiredness, memory and thinking problems can be there even when nobody can see them.",
  figure: { art: "custom", id: "iceberg" },
  pullQuote: "Fatigue does not seem to get better with rest.",
};
NEWS_EXTRAS["under-50/fitness"] = {
  kicker: "Recovery after stroke",
  headline: "Slowly does it",
  standfirst: "Unless your doctor says otherwise, moving is safe. Start slowly, build up, and ask first if you are unsure.",
  figure: { art: "custom", id: "steady-build" },
  pullQuote: "Start slowly, and build up over time.",
};
NEWS_EXTRAS["under-50/work"] = {
  kicker: "Life after stroke",
  headline: "Back in stages",
  standfirst: "A phased return, reasonable adjustments, and the help Access to Work can give.",
  figure: { art: "custom", id: "work-weeks" },
  stats: { 2: [{ value: "12 months", label: "or more counts as long-term under the Equality Act 2010.", ref: 4, picture: "calendar" }] },
  pullQuote: "Employers have a duty to make reasonable adjustments for employees who are disabled.",
};
NEWS_EXTRAS["under-50/money"] = {
  kicker: "Life after stroke",
  headline: "Keeping the money coming in",
  standfirst: "Sick pay first, then benefits such as ESA and PIP, and what to check about your mortgage.",
  figure: { art: "custom", id: "money-jars" },
  stats: { 0: [
    { value: "28 weeks", label: "the longest your employer pays Statutory Sick Pay.", ref: 1, picture: "calendar" },
    { value: "7 days", label: "off work in a row, including non-working days, before you need a fit note.", ref: 2 },
  ] },
  pullQuote: "You can get PIP even if you are working.",
};
NEWS_EXTRAS["under-50/children"] = {
  kicker: "Life after stroke",
  headline: "The truth, at their size",
  standfirst: "Children cope better when they are told the truth, simply and honestly, and when the everyday routine carries on.",
  figure: { art: "custom", id: "kids-talk" },
  pullQuote: "It is important that your answers are honest.",
};
NEWS_EXTRAS["under-50/relationships"] = {
  kicker: "Life after stroke",
  headline: "Both of you, changed",
  standfirst: "A stroke can be as life-changing for a partner. Talking helps, and many people have happy, healthy relationships afterwards.",
  figure: { art: "custom", id: "two-chairs" },
  pullQuote: "Talk to your partner about the things you are finding difficult.",
};

// Pieces whose answer is the same for every kind of stroke share the same feature.
for (const id of ["rewiring", "walking", "fatigue", "mood", "carers"]) NEWS_EXTRAS[`haemorrhagic/${id}`] = NEWS_EXTRAS[`ischaemic/${id}`];
for (const id of ["rewiring", "words", "driving"]) NEWS_EXTRAS[`under-50/${id}`] = NEWS_EXTRAS[`ischaemic/${id}`];
