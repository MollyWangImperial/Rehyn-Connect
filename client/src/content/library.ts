// The Library: plain-words guides, short videos, trusted links and stories, arranged as
// Section → Group → Condition → content. The pages live at:
//   /library                            the front page
//   /library/brain-nervous-system       one section, its groups and their conditions
//   /library/stroke/ischaemic           one condition (group id, then condition id)
//   /library/stroke/ischaemic/fatigue   one piece of content on that condition
//   /library/stories, /library/stories/li-wei, /library/letters/two-years-ahead
//
// IMPORTANT: the titles of articles, videos and podcasts are placeholders until each one is written
// and clinically checked. A piece with a `learnId` opens a checked answer (content/my-time-learn.ts);
// any other piece shows an honest "coming soon" with trusted links.
// Only the conditions with `content` have a full page; the rest say their page is still being written.
// The stories and letters are composites written for Rehyn. The people in them are not real.
// Sentences are kept short because Alira reads them aloud one at a time.

export type Hue = { tint: string; ink: string };
export type SectionIcon = "brain" | "heart" | "drop" | "bone" | "ribbon" | "mind" | "kidney";
export type ItemKind = "article" | "video" | "animation" | "exercise" | "podcast" | "audio";

export type LibraryItem = {
  id: string;
  title: string;
  blurb?: string;
  kind: ItemKind;
  minutes?: number;
  /** A few words after the time: "neuro-physiotherapist", "with a diagram". */
  extra?: string;
  /** The checked answer (content/my-time-learn.ts) that this piece opens. */
  learnId?: string;
  isNew?: boolean;
  /** Words people search with that are not in the title. */
  keywords?: string[];
  /** Placement D: people in the stories who wondered the same thing, and the chapter where they did. */
  feltToo?: { storyIds: string[]; chapter: string; label: string; shortLabel: string };
};

export type TrustedSource = { name: string; note: string; url?: string; printable?: boolean };
export type StoryLink = { storyId: string; chapter: string; label: string };
export type ContentType = "understand" | "recover" | "liveWell" | "watch";

export type ConditionContent = {
  understand: LibraryItem[];
  recover: LibraryItem[];
  /** The second tab's name: "Explore" on most pages; "Treat & manage" where that fits better. */
  recoverTitle?: string;
  liveWell: LibraryItem[];
  watch: LibraryItem[];
  sources: TrustedSource[];
  /** Story ids, in the order they are listed. */
  stories: string[];
  askDoctor: string[];
  related: { groupId: string; conditionId: string; label?: string }[];
  /** Placement B: a dark band between Understand and Explore. */
  pause?: { storyId: string; chapter: string; quote: string; cta: string };
  /** Placement C: a companion in the side rail, at the point the reader says they have reached. */
  companion?: { storyId: string };
  /** Placement A: the story opens the page and the facts follow. */
  opening?: { storyId: string; quote: string };
  /** On story-led pages, a pill beside a heading that jumps into the story. */
  sectionStory?: Partial<Record<ContentType, StoryLink>>;
  /** Placement E: a letter at the foot of the page. */
  letterId?: string;
};

/** "woven": placements B, C and D through the page. "opening": placement A at the top and E at the foot. */
export type StoryLayout = "woven" | "opening";

export type LibraryCondition = {
  id: string;
  title: string;
  summary?: string;
  facts?: string[];
  storyLayout?: StoryLayout;
  keywords?: string[];
  content?: ConditionContent;
};

export type LibraryGroup = {
  id: string;
  title: string;
  blurb: string;
  badge?: string;
  keywords?: string[];
  conditions: LibraryCondition[];
};

export type LibrarySection = {
  id: string;
  title: string;
  /** One word, for small labels: "Heart", "Mind". */
  short: string;
  blurb: string;
  hue: Hue;
  icon: SectionIcon;
  /** Three names shown on the section's card on the front page. */
  chips: string[];
  groups: LibraryGroup[];
};

export type StoryChapter = { id: string; label: string; title: string; minutes: number; week?: number; paragraphs: string[] };

export type LibraryStory = {
  id: string;
  name: string;
  age: number;
  sectionId: string;
  groupId: string;
  conditionId: string;
  /** The condition as the story's tag shows it. */
  tag: string;
  title: string;
  /** "2 years on", "Caring for her mother". */
  when: string;
  detail: string;
  quote: string;
  /** A shorter line for the front page's filmstrip, where it differs. */
  filmQuote?: string;
  minutes: number;
  carer?: boolean;
  tint: Hue;
  pronoun: "his" | "her";
  chapters: StoryChapter[];
};

export type LibraryLetter = {
  id: string;
  storyId: string;
  title: string;
  /** What the envelope says before it is opened. */
  teaser: string;
  opening: string;
  paragraphs: string[];
  signOff: string;
  minutes: number;
};

export const STORIES_NOTE = "These stories are composites, written for Rehyn from experiences people commonly describe. The names and details are made up.";
export const LIBRARY_NOTE = "Everything here is general information. Your own care team knows your situation; follow their advice first.";

// ------------------------------------------------------------------------------------------------
// Trusted sources. Each is the organisation's real homepage.

const NHS: TrustedSource = { name: "NHS", note: "Health A to Z, symptoms and treatment", url: "https://www.nhs.uk/" };
const source = (base: TrustedSource, note: string): TrustedSource => ({ ...base, note });
const STROKE_ASSOCIATION: TrustedSource = { name: "Stroke Association", note: "Helpline, printed guides and local groups", url: "https://www.stroke.org.uk/" };
const DIFFERENT_STROKES: TrustedSource = { name: "Different Strokes", note: "For younger survivors and working-age families", url: "https://differentstrokes.co.uk/" };
const CHSS: TrustedSource = { name: "Chest Heart & Stroke Scotland", note: "Support if you're in Scotland", url: "https://www.chss.org.uk/" };
const PARKINSONS_UK: TrustedSource = { name: "Parkinson's UK", note: "Helpline, local groups, exercise classes", url: "https://www.parkinsons.org.uk/" };
const PARKINSONS_FOUNDATION: TrustedSource = { name: "Parkinson's Foundation", note: "Videos and a large library in plain English", url: "https://www.parkinson.org/" };
const CURE_PARKINSONS: TrustedSource = { name: "Cure Parkinson's", note: "Research news and trials you can join", url: "https://cureparkinsons.org.uk/" };

/** The sources shown on a condition whose own page is still being written. */
export const DEFAULT_SOURCES: TrustedSource[] = [NHS];

const BRAIN: Hue = { tint: "#EEEBFA", ink: "#4A3F9C" };
const CORAL: Hue = { tint: "#FBEDE7", ink: "#B04B30" };
const GREEN: Hue = { tint: "#F1F7F2", ink: "#2F6851" };
const SUN: Hue = { tint: "#FBF0DC", ink: "#8A5A12" };
const HEART: Hue = { tint: "#FCEBE6", ink: "#A8402B" };

/** A condition whose own page is still being written; it may already list a piece or two. */
const soon = (id: string, title: string, understand: LibraryItem[] = [], keywords?: string[]): LibraryCondition => ({
  id,
  title,
  keywords,
  ...(understand.length ? { content: { understand, recover: [], liveWell: [], watch: [], sources: DEFAULT_SOURCES, stories: [], askDoctor: [], related: [] } } : {}),
});
const article = (id: string, title: string, minutes: number, more: Partial<LibraryItem> = {}): LibraryItem => ({ id, title, kind: "article", minutes, ...more });

// ------------------------------------------------------------------------------------------------
// Ischaemic stroke: the full page, with stories woven through it (placements B, C and D).

const ischaemicStroke: LibraryCondition = {
  id: "ischaemic",
  title: "Ischaemic stroke",
  summary: "A clot blocks the blood supply to part of the brain. It is the most common kind of stroke, and the kind most people in Rehyn are recovering from.",
  facts: ["About 85% of strokes", "Clot-busting or clot-removal if caught early", "Recovery carries on for years, not weeks"],
  storyLayout: "woven",
  keywords: ["clot", "cva", "blocked artery"],
  content: {
    understand: [
      article("what-happens", "What actually happens in the brain", 4, { blurb: "Blood, oxygen, and why minutes mattered on the day. Why the left side of the brain affects the right side of the body.", keywords: ["oxygen", "blood supply"] }),
      article("why-me", "Why it happened to me", 5, {
        blurb: "Blood pressure, atrial fibrillation, cholesterol, diabetes, smoking, and the ones that are nobody's fault.",
        keywords: ["cause", "causes", "risk", "reason"],
        feltToo: { storyIds: ["li-wei", "tom"], chapter: "week-3", label: "Li Wei and Tom both asked this. Hear what they found", shortLabel: "Li Wei and Tom asked this too" },
      }),
      article("types", "TIA, ischaemic, haemorrhagic: the difference", 3, { blurb: "Three words the ward used that nobody explained. A two-minute picture of each.", extra: "With a diagram", keywords: ["mini-stroke", "bleed"] }),
      article("scans", "The scans and tests you had", 4, { blurb: "CT, MRI, carotid ultrasound, the heart monitor. What each one was looking for and how to ask for your results.", keywords: ["ct", "mri", "ultrasound", "results"] }),
      article("heavy-side", "Why does one side feel heavier?", 3, { blurb: "The short answer about a hand and arm that won't do as they are told.", learnId: "hand", keywords: ["weakness", "heavy", "arm", "leg"] }),
    ],
    recover: [
      { id: "rewiring", title: "How the brain rewires: neuroplasticity, explained", kind: "video", minutes: 6, extra: "neuro-physiotherapist", learnId: "rewiring", keywords: ["neuroplasticity", "rewire"] },
      { id: "arm-hand", title: "Arm and hand: the first twelve weeks", kind: "exercise", learnId: "hand", keywords: ["arm", "hand", "grip", "exercises"] },
      article("first-three-months", "The first three months: what's typical, what's not", 6, { keywords: ["early", "weeks", "normal"] }),
      { id: "walking", title: "Walking again: from frame to stick to nothing", kind: "video", minutes: 8, keywords: ["walk", "walking", "balance", "frame"] },
      article("words", "Finding words again: aphasia and speech", 5, { extra: "with practice prompts", learnId: "words", keywords: ["aphasia", "speech", "talking", "words"] }),
      { id: "fatigue", title: "Fatigue: why rest doesn't fix it, and what does", kind: "video", minutes: 6, isNew: true, learnId: "fatigue", blurb: "A six-minute video on pacing your day, plus a printable energy diary.", keywords: ["tired", "tiredness", "exhausted", "energy", "fatigue", "sleepy"] },
    ],
    liveWell: [
      article("driving", "Can I drive again, and who decides?", 4, { keywords: ["car", "licence", "dvla"] }),
      article("prevention", "Preventing another one: the tablets, the numbers, the habits", 7, { learnId: "again", keywords: ["another stroke", "again", "prevent", "tablets"] }),
      article("work", "Going back to work, in stages", 5, { keywords: ["job", "employer"] }),
      article("mood", "Low days, flat days: mood after stroke", 5, { learnId: "emotions", keywords: ["sad", "crying", "low", "emotions", "depression"] }),
      article("swallowing", "Eating and swallowing safely", 4, { keywords: ["swallow", "food", "choking"] }),
      article("carers", "For the person looking after you: a page for carers", 6, { keywords: ["carer", "family", "partner"] }),
    ],
    watch: [
      { id: "first-year-podcast", title: "Two survivors talk about the first year", kind: "podcast", minutes: 24 },
      { id: "in-pictures", title: "What a stroke does to the brain, in pictures", kind: "animation", minutes: 4 },
      { id: "wind-down", title: "A ten-minute wind-down for stroke fatigue", kind: "audio", minutes: 10, extra: "read by Alira", keywords: ["relax", "calm"] },
    ],
    sources: [
      source(NHS, "Stroke overview, treatment and recovery pages"),
      STROKE_ASSOCIATION,
      DIFFERENT_STROKES,
      CHSS,
      { name: "Printable: my stroke passport", note: "One page to hand to a new doctor or physio", printable: true },
      { name: "For the curious: the research", note: "Clinical guidelines and the studies behind this page, in plain summaries" },
    ],
    stories: ["li-wei", "tom", "rose"],
    askDoctor: [
      "Which artery was blocked, and does that explain my arm?",
      "What is my blood pressure target now?",
      "Do I need a heart monitor for atrial fibrillation?",
      "When can I ask about driving?",
    ],
    related: [
      { groupId: "blood-pressure", conditionId: "high-blood-pressure" },
      { groupId: "heart-rhythm", conditionId: "atrial-fibrillation" },
      { groupId: "depression", conditionId: "after-stroke" },
      { groupId: "diabetes", conditionId: "type-2" },
    ],
    pause: { storyId: "li-wei", chapter: "week-9", quote: "The physio said ‘again’ about four hundred times. On day sixty I said it first. That's the day I'd tell you about, not the day of the stroke.", cta: "Read day sixty" },
    companion: { storyId: "li-wei" },
  },
};

// ------------------------------------------------------------------------------------------------
// Parkinson's disease: the story-led page (placement A opens it, placement E closes it).

const parkinsonsDisease: LibraryCondition = {
  id: "parkinsons-disease",
  title: "Parkinson's disease",
  summary: "A slowly progressing condition in which the brain makes less dopamine, the chemical that keeps movement smooth. It shows up differently in everyone, and a great deal of it can be managed.",
  facts: ["Progresses slowly, over years", "Movement and non-movement symptoms", "Exercise is part of the treatment"],
  storyLayout: "opening",
  keywords: ["parkinsons", "tremor", "shaking", "dopamine"],
  content: {
    understand: [
      article("dopamine", "What dopamine does, and why less of it matters", 4, { blurb: "The one paragraph of brain science you actually need.", extra: "with a diagram" }),
      article("unexpected-symptoms", "The symptoms nobody expects", 5, { blurb: "Sleep, smell, constipation, low mood, a quieter voice. Often years before the tremor.", keywords: ["smell", "sleep", "voice", "constipation"] }),
      article("diagnosis", "How it's diagnosed", 4, { blurb: "Why there's no single test, what the neurologist is watching for, and the scan you might be offered.", keywords: ["test", "scan", "neurologist"] }),
      article("tremor-types", "Parkinson's tremor or essential tremor?", 3, { blurb: "Resting versus moving. A short comparison with a video of each.", extra: "2 short clips", keywords: ["shaking", "tremor"] }),
      article("morning-shaking", "Why are my hands shaking more in the morning?", 3, { keywords: ["shaking", "tremor", "hands", "morning"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("levodopa", "Levodopa and timing: why “on” and “off” happen", 6, { extra: "with a dose-timing sheet", keywords: ["tablets", "medication", "levodopa", "on off"] }),
      { id: "exercise", title: "Exercise is treatment: what kind, how often", kind: "video", minutes: 7, keywords: ["exercise", "boxing", "activity"] },
      { id: "voice", title: "Keeping your voice loud and your swallow safe", kind: "audio", minutes: 10, extra: "daily", keywords: ["voice", "speech", "swallow"] },
      article("dbs", "Deep brain stimulation: who it's for, honestly", 5, { keywords: ["dbs", "surgery"] }),
    ],
    liveWell: [
      article("freezing", "Freezing in doorways: tricks that unstick your feet", 3, { keywords: ["freezing", "stuck", "walking"] }),
      article("sleep", "Sleeping better with Parkinson's", 5, { keywords: ["sleep", "night"] }),
      article("falls", "Falls: a home checklist you can do in an afternoon", 4, { keywords: ["fall", "falls", "home"] }),
      article("driving-work", "Driving, work and telling people", 5, { keywords: ["driving", "work", "telling"] }),
      article("carers", "For partners and carers: the first year, from your side", 6, { keywords: ["carer", "partner"] }),
    ],
    watch: [
      { id: "two-voices", title: "Living with Parkinson's: two people talk", kind: "podcast", minutes: 22 },
      { id: "dopamine-pictures", title: "What dopamine does, in pictures", kind: "animation", minutes: 3 },
      { id: "stiff-evenings", title: "A calm ten minutes for stiff evenings", kind: "audio", minutes: 10, extra: "read by Alira" },
    ],
    sources: [source(NHS, "Overview, symptoms and treatment"), PARKINSONS_UK, PARKINSONS_FOUNDATION, CURE_PARKINSONS],
    stories: ["margaret"],
    askDoctor: [
      "Which symptoms should I keep a diary of before next time?",
      "What kind of exercise would help me most, and how often?",
      "Should I see a speech and language therapist about my voice?",
      "Who can I contact between appointments?",
    ],
    related: [
      { groupId: "parkinsons", conditionId: "essential-tremor" },
      { groupId: "sleep", conditionId: "insomnia" },
      { groupId: "depression", conditionId: "depression" },
    ],
    opening: { storyId: "margaret", quote: "I thought Parkinson's meant the end of gardening. My tomatoes disagree. This is the year I found out what it actually meant." },
    sectionStory: {
      understand: { storyId: "margaret", chapter: "diagnosis", label: "In Margaret's story: chapter 2, the diagnosis" },
      recover: { storyId: "margaret", chapter: "tablets", label: "In Margaret's story: chapters 3 and 4" },
    },
    letterId: "first-year",
  },
};

// ------------------------------------------------------------------------------------------------
// The seven sections. Heart & lungs was two sections once; lib/library.ts keeps the old addresses
// (/heart-circulation, /lungs-breathing) opening it.

export const librarySections: LibrarySection[] = [
  {
    id: "brain-nervous-system",
    title: "Brain & nervous system",
    short: "Brain",
    blurb: "Conditions that affect the brain, the spinal cord and the nerves: how they change movement, memory, speech and mood, and what recovery can look like. Start with the group that sounds like yours.",
    hue: BRAIN,
    icon: "brain",
    chips: ["Stroke", "Dementia", "Parkinson's"],
    groups: [
      {
        id: "stroke",
        title: "Stroke",
        blurb: "When blood stops reaching part of the brain. The type you had shapes your treatment and the shape of your recovery.",
        badge: "Most visited",
        keywords: ["face", "arm", "weakness", "one side", "speech"],
        conditions: [
          ischaemicStroke,
          soon("haemorrhagic", "Haemorrhagic stroke", [], ["bleed"]),
          soon("tia", "TIA (mini-stroke)", [], ["mini-stroke", "transient"]),
          soon("under-50", "Stroke under 50", [], ["young"]),
        ],
      },
      {
        id: "dementia",
        title: "Dementia & memory",
        blurb: "Memory, thinking and language changes that are more than ordinary ageing, for the person and for the family around them.",
        keywords: ["memory", "forgetting", "losing words", "repeating", "confused", "confusion"],
        conditions: [
          soon("alzheimers", "Alzheimer's disease"),
          soon("vascular", "Vascular dementia"),
          soon("lewy-body", "Lewy body dementia"),
          soon("mild-cognitive-impairment", "Mild cognitive impairment", [article("forgetting-words", "Forgetting words versus early dementia: how to tell", 4, { keywords: ["forgetting", "memory", "words"] })]),
        ],
      },
      {
        id: "parkinsons",
        title: "Parkinson's & movement",
        blurb: "Tremor, stiffness and slowness, and the many things that help: medication timing, exercise, voice work and good sleep.",
        keywords: ["tremor", "shaking", "stiff", "slow"],
        conditions: [parkinsonsDisease, soon("essential-tremor", "Essential tremor", [], ["shaking"]), soon("dystonia", "Dystonia")],
      },
      {
        id: "multiple-sclerosis",
        title: "Multiple sclerosis",
        blurb: "An immune condition of the nerves. Comes in different patterns, and each pattern has its own treatment path.",
        keywords: ["ms"],
        conditions: [soon("relapsing-remitting", "Relapsing-remitting MS"), soon("progressive", "Progressive MS")],
      },
      {
        id: "epilepsy",
        title: "Epilepsy & seizures",
        blurb: "Including seizures that start after a stroke or a brain injury, and what to do when one happens.",
        keywords: ["fit", "fits", "seizure"],
        conditions: [soon("focal", "Focal seizures"), soon("generalised", "Generalised seizures"), soon("after-stroke", "Seizures after stroke")],
      },
      {
        id: "brain-spinal-injury",
        title: "Brain & spinal injury",
        blurb: "Recovery after a knock to the head or damage to the spinal cord, from the first weeks to getting back to everyday life.",
        keywords: ["head injury", "knock", "accident"],
        conditions: [soon("traumatic-brain-injury", "Traumatic brain injury"), soon("concussion", "Concussion"), soon("spinal-cord", "Spinal cord injury")],
      },
      {
        id: "headache",
        title: "Migraine & headache",
        blurb: "Telling a migraine from a headache that needs urgent attention, and the triggers worth keeping a diary of.",
        keywords: ["headache", "migraine"],
        conditions: [soon("migraine", "Migraine"), soon("tension", "Tension headache")],
      },
      {
        id: "nerves",
        title: "Nerve conditions",
        blurb: "Numbness, tingling, weakness or pain along a nerve, often alongside diabetes or after an injury.",
        keywords: ["numb", "numbness", "tingling", "pins and needles"],
        conditions: [soon("peripheral-neuropathy", "Peripheral neuropathy"), soon("bells-palsy", "Bell's palsy"), soon("sciatica", "Sciatica"), soon("carpal-tunnel", "Carpal tunnel")],
      },
    ],
  },
  {
    id: "heart-lungs",
    title: "Heart & lungs",
    short: "Heart",
    blurb: "Blood pressure, heart attacks and heart rhythm, breathlessness, coughs and breathing at night: what the numbers mean, and what recovery and prevention can look like.",
    hue: HEART,
    icon: "heart",
    chips: ["High blood pressure", "Heart attack", "COPD"],
    groups: [
      {
        id: "blood-pressure",
        title: "Blood pressure",
        blurb: "The numbers, the tablets and the habits that keep them where your doctor wants them.",
        conditions: [soon("high-blood-pressure", "High blood pressure", [
          article("numbers", "What the blood pressure numbers actually mean", 3, { keywords: ["reading", "numbers", "hypertension"] }),
          article("after-stroke", "Why blood pressure matters after a stroke", 3, { keywords: ["stroke"] }),
        ], ["hypertension", "bp"])],
      },
      {
        id: "heart-attack",
        title: "Heart attack & angina",
        blurb: "Chest pain, the days in hospital, and the months of cardiac rehab that follow.",
        conditions: [soon("heart-attack", "Heart attack", [article("statins", "Do statins really need to be taken for life?", 3, { keywords: ["statins", "cholesterol"] })], ["chest pain", "cardiac"]), soon("angina", "Angina")],
      },
      {
        id: "heart-rhythm",
        title: "Heart rhythm",
        blurb: "When the heart beats too fast, too slow or out of step.",
        conditions: [soon("atrial-fibrillation", "Atrial fibrillation", [], ["af", "afib", "irregular heartbeat", "palpitations"])],
      },
      { id: "long-term-lung", title: "Long-term lung conditions", blurb: "Living with breathlessness, and the inhalers and exercise that help.", keywords: ["breathless", "inhaler", "lungs", "breathing"], conditions: [soon("copd", "COPD"), soon("asthma", "Asthma")] },
      { id: "sleep-breathing", title: "Breathing in sleep", blurb: "Snoring, pauses in breathing at night and the tiredness that follows.", keywords: ["breathing"], conditions: [soon("sleep-apnoea", "Sleep apnoea", [], ["snoring"])] },
    ],
  },
  {
    id: "diabetes-metabolism",
    title: "Diabetes & metabolism",
    short: "Diabetes",
    blurb: "Blood sugar and the glands that set the body's pace, and how to live well alongside them.",
    hue: SUN,
    icon: "drop",
    chips: ["Type 2 diabetes", "Prediabetes", "Thyroid"],
    groups: [
      {
        id: "diabetes",
        title: "Diabetes",
        blurb: "Blood sugar, the tests that track it and the everyday changes that help.",
        keywords: ["sugar", "glucose"],
        conditions: [soon("type-2", "Type 2 diabetes", [article("hba1c", "What is an HbA1c number?", 2, { keywords: ["blood test", "sugar", "hba1c"] })]), soon("prediabetes", "Prediabetes"), soon("type-1", "Type 1 diabetes")],
      },
      {
        id: "thyroid",
        title: "Thyroid",
        blurb: "A small gland in the neck that sets the pace for much of the body.",
        conditions: [soon("underactive", "Underactive thyroid"), soon("overactive", "Overactive thyroid")],
      },
    ],
  },
  {
    id: "bones-joints-muscles",
    title: "Bones, joints & muscles",
    short: "Joints",
    blurb: "Stiff joints, fragile bones and sore backs, and getting moving again after an operation.",
    hue: { tint: "#E4F3F1", ink: "#1F6B64" },
    icon: "bone",
    chips: ["Osteoarthritis", "Osteoporosis", "Back pain"],
    groups: [
      {
        id: "arthritis",
        title: "Arthritis",
        blurb: "Painful, stiff joints, and the treatments and operations that help.",
        keywords: ["joint", "knee", "hip"],
        conditions: [soon("osteoarthritis", "Osteoarthritis", [article("knee-week-three", "Knee replacement: what week three really feels like", 4, { keywords: ["knee", "replacement", "operation"] })]), soon("rheumatoid", "Rheumatoid arthritis")],
      },
      { id: "bone-health", title: "Bone health", blurb: "Keeping bones strong, and recovering well after a break.", conditions: [soon("osteoporosis", "Osteoporosis", [], ["fracture", "brittle"])] },
      { id: "back-neck", title: "Back & neck", blurb: "Everyday back and neck pain, and when to get it checked.", conditions: [soon("back-pain", "Back pain")] },
    ],
  },
  {
    id: "cancer-recovery",
    title: "Cancer & recovery",
    short: "Cancer",
    blurb: "The months after treatment: getting your strength back, and what to keep an eye on.",
    hue: { tint: "#FAE8F0", ink: "#8E3561" },
    icon: "ribbon",
    chips: ["Breast", "Bowel", "Prostate"],
    groups: [
      { id: "common-cancers", title: "Common cancers", blurb: "Recovery after treatment for some of the most common cancers.", conditions: [soon("breast", "Breast cancer"), soon("bowel", "Bowel cancer"), soon("prostate", "Prostate cancer")] },
      { id: "after-treatment", title: "Life after treatment", blurb: "Tiredness, worry and going back to normal life after treatment ends.", conditions: [soon("cancer-fatigue", "Tiredness after treatment", [], ["tired", "fatigue"])] },
    ],
  },
  {
    id: "mind-mood",
    title: "Mind & mood",
    short: "Mind",
    blurb: "Low mood, worry and sleep, which so often travel alongside a physical illness, and the help that works.",
    hue: { tint: "#E8EBF8", ink: "#35458C" },
    icon: "mind",
    chips: ["Depression", "Anxiety", "Sleep"],
    groups: [
      { id: "depression", title: "Depression", blurb: "Low mood that lasts, including the kind that follows a stroke or a diagnosis.", keywords: ["low", "sad", "mood"], conditions: [soon("depression", "Depression"), soon("after-stroke", "Depression after stroke")] },
      { id: "anxiety", title: "Anxiety", blurb: "Worry that gets in the way of everyday life.", keywords: ["worry", "panic"], conditions: [soon("anxiety", "Anxiety")] },
      { id: "sleep", title: "Sleep", blurb: "Trouble getting to sleep, staying asleep or waking rested.", keywords: ["insomnia", "night"], conditions: [soon("insomnia", "Sleep problems")] },
    ],
  },
  {
    id: "kidneys-liver-digestion",
    title: "Kidneys, liver & digestion",
    short: "Digestion",
    blurb: "The organs that clean and process: what the test results mean and the changes that help.",
    hue: { tint: "#EEF3DF", ink: "#4F6A14" },
    icon: "kidney",
    chips: ["Chronic kidney disease", "Fatty liver", "IBS"],
    groups: [
      { id: "kidneys", title: "Kidneys", blurb: "How well the kidneys are working, and keeping them that way.", conditions: [soon("chronic-kidney-disease", "Chronic kidney disease", [], ["ckd"])] },
      { id: "liver", title: "Liver", blurb: "The liver, what can strain it and what helps it recover.", conditions: [soon("fatty-liver", "Fatty liver")] },
      { id: "gut", title: "Gut & digestion", blurb: "Tummy pain, bloating and bowel changes.", conditions: [soon("ibs", "Irritable bowel syndrome (IBS)", [], ["ibs", "bloating"])] },
    ],
  },
];

// ------------------------------------------------------------------------------------------------
// Stories. Composites; the people are not real.

export const libraryStories: LibraryStory[] = [
  {
    id: "li-wei",
    name: "Li Wei",
    age: 58,
    sectionId: "brain-nervous-system",
    groupId: "stroke",
    conditionId: "ischaemic",
    tag: "Ischaemic stroke",
    title: "Day sixty",
    when: "2 years on",
    detail: "Right-side weakness · back to cooking",
    quote: "The physio said ‘again’ about four hundred times. On day sixty I said it first.",
    filmQuote: "The first time I buttoned my own shirt I cried in the hallway. Fourteen months.",
    minutes: 9,
    tint: BRAIN,
    pronoun: "his",
    chapters: [
      { id: "day-1", label: "Day 1", title: "The ward", minutes: 2, week: 1, paragraphs: [
        "I remember the ceiling tiles more than the doctors. Everyone spoke quickly and kindly, and I understood about half of it.",
        "My right hand lay on the blanket like it belonged to someone else. My wife held the other one and did all the listening for both of us.",
      ] },
      { id: "week-3", label: "Week 3", title: "Home, suddenly", minutes: 3, week: 3, paragraphs: [
        "Coming home felt like a reward and a test at the same time. The stairs looked taller. The kettle looked heavier.",
        "I kept asking why it had happened to me. I didn't smoke. I walked to work. My GP went through my blood pressure with me, and it helped to have a reason I could do something about.",
        "Not every question had an answer. I learnt to write the ones that didn't on a list for the next appointment.",
      ] },
      { id: "week-9", label: "Week 9", title: "The stairs", minutes: 4, week: 9, paragraphs: [
        "The physio said ‘again’ about four hundred times. Again up one step. Again down. Again with the rail, again with my hand on the wall.",
        "On day sixty I said it first. I don't know why that mattered so much, but it did. It meant the stairs were mine to practise, not hers to give me.",
        "That's the day I'd tell you about, not the day of the stroke.",
      ] },
      { id: "month-6", label: "Month 6", title: "Back in the kitchen", minutes: 5, week: 26, paragraphs: [
        "I used to cook every night. For months my right hand couldn't hold a knife steadily, so I sat at the table and gave orders. My family were very patient.",
        "Then I started with the easy jobs: stirring, washing vegetables, tearing herbs. My therapist called them exercises. I called them dinner.",
        "Fourteen months in, I buttoned my own shirt for the first time and cried in the hallway. Nobody saw. I told everyone anyway.",
      ] },
      { id: "year-2", label: "Year 2", title: "What I'd tell you", minutes: 3, week: 104, paragraphs: [
        "It is slower than you want, and it keeps going for longer than you think. I am still getting better at things two years on.",
        "Count small things. Write them down. On a bad week, read them back.",
        "And say ‘again’ before anyone else can.",
      ] },
    ],
  },
  {
    id: "tom",
    name: "Tom",
    age: 44,
    sectionId: "brain-nervous-system",
    groupId: "stroke",
    conditionId: "under-50",
    tag: "Stroke under 50",
    title: "The one at the gym",
    when: "18 months on",
    detail: "Driving and work",
    quote: "Everyone at the gym thought I'd pulled something. I thought I was too young for a stroke.",
    minutes: 7,
    tint: GREEN,
    pronoun: "his",
    chapters: [
      { id: "week-3", label: "Week 3", title: "Too young for this", minutes: 3, week: 3, paragraphs: [
        "I was 42 and fit. I kept asking why it had happened to me, as if there had been a mistake in the paperwork.",
        "Some of my answers came from tests, and some never came at all. Meeting other people who'd had a stroke young helped more than any leaflet.",
      ] },
      { id: "work", label: "Month 8", title: "Back to work, in stages", minutes: 4, week: 35, paragraphs: [] },
    ],
  },
  {
    id: "rose",
    name: "Rose",
    age: 80,
    sectionId: "brain-nervous-system",
    groupId: "stroke",
    conditionId: "ischaemic",
    tag: "Ischaemic stroke",
    title: "My daughter wrote this with me",
    when: "3 years on",
    detail: "Aphasia · told with a carer",
    quote: "The words are in there. Some days they take the long way round.",
    minutes: 6,
    carer: true,
    tint: SUN,
    pronoun: "her",
    chapters: [{ id: "words", label: "Year 1", title: "The long way round", minutes: 6, paragraphs: [] }],
  },
  {
    id: "hannah",
    name: "Hannah",
    age: 49,
    sectionId: "brain-nervous-system",
    groupId: "dementia",
    conditionId: "vascular",
    tag: "Vascular dementia · carer",
    title: "Nobody warned us about the house",
    when: "Caring for her mother",
    detail: "Told by a carer",
    quote: "Mum stopped recognising the house before she stopped recognising me. Nobody warned us about the house.",
    minutes: 7,
    carer: true,
    tint: SUN,
    pronoun: "her",
    chapters: [{ id: "house", label: "Year 1", title: "The house", minutes: 7, paragraphs: [] }],
  },
  {
    id: "margaret",
    name: "Margaret",
    age: 71,
    sectionId: "brain-nervous-system",
    groupId: "parkinsons",
    conditionId: "parkinsons-disease",
    tag: "Parkinson's disease",
    title: "A year in five chapters",
    when: "6 years on",
    detail: "Diagnosed at 65",
    quote: "I thought Parkinson's meant the end of gardening. My tomatoes disagree.",
    minutes: 14,
    tint: BRAIN,
    pronoun: "her",
    chapters: [
      { id: "hand", label: "Chapter 1", title: "The hand that wouldn't still", minutes: 3, paragraphs: [
        "It started with my left hand, resting on my knee in front of the television. It shook, very gently, as if it were keeping time to music I couldn't hear.",
        "I told myself it was the cold, and then that it was tiredness. I sat on it for about six months, which my daughter still hasn't quite forgiven.",
      ] },
      { id: "diagnosis", label: "Chapter 2", title: "The diagnosis", minutes: 3, paragraphs: [
        "There was no single test. The neurologist watched me walk, tap my fingers and turn round, and asked a great many questions about my sense of smell, of all things.",
        "When she said the word, I didn't hear much after it. I went home and looked it up, which I don't recommend on the first night. Write your questions down instead and take them back.",
      ] },
      { id: "tablets", label: "Chapter 3", title: "Tablets and timing", minutes: 3, paragraphs: [
        "I learnt that my tablets worked best when I took them at the same times every day, as my team had planned with me. I set alarms on my phone and stuck a list on the fridge.",
        "Some hours I moved easily and some hours I didn't. Keeping a diary of which was which made the next appointment far more useful.",
      ] },
      { id: "boxing", label: "Chapter 4", title: "The boxing class", minutes: 3, paragraphs: [
        "My physio told me exercise was part of the treatment, not an extra. I laughed when she suggested a boxing class. I was 66 and had never hit anything in my life.",
        "I went anyway. Twelve of us, all with Parkinson's, punching pads and shouting. I came home tired and happier than I'd been in months.",
      ] },
      { id: "tomatoes", label: "Chapter 5", title: "Tomatoes", minutes: 2, paragraphs: [
        "I thought Parkinson's meant the end of gardening. It meant raised beds, a stool, lighter tools and more help with the heavy digging.",
        "That first summer I grew more tomatoes than we could eat. My tomatoes disagree with whatever I believed on the night I was told.",
      ] },
    ],
  },
  {
    id: "dev",
    name: "Dev",
    age: 47,
    sectionId: "heart-lungs",
    groupId: "heart-attack",
    conditionId: "heart-attack",
    tag: "Heart attack",
    title: "The loudest alarm clock",
    when: "3 years on",
    detail: "Cardiac rehab and back to work",
    quote: "My heart attack at 44 was the loudest alarm clock I've ever ignored. Then I stopped ignoring it.",
    minutes: 8,
    tint: HEART,
    pronoun: "his",
    chapters: [{ id: "alarm", label: "Year 1", title: "The alarm clock", minutes: 8, paragraphs: [] }],
  },
];

// ------------------------------------------------------------------------------------------------
// Letters (placement E). A letter waits at the foot of its condition's page until it is opened.

export const libraryLetters: LibraryLetter[] = [
  {
    id: "two-years-ahead",
    storyId: "li-wei",
    title: "A letter from someone two years ahead of you",
    teaser: "Written for people in their first three months after a stroke. It stays here until you've read it.",
    opening: "Dear you,",
    paragraphs: [
      "Two years ago I was where you are now. I could not hold a cup in my right hand, and I was frightened that this was how it would always be.",
      "It wasn't. It was slower than I wanted, and it kept going for longer than I thought. I am still getting better at things now.",
      "Here is what I would tell you. Count the small things, because they add up. Write them down, and on a bad week, read them back.",
      "Let people help you. It is not giving up. And take your questions to your team, even the ones that feel silly. Mine were never silly.",
    ],
    signOff: "Li Wei",
    minutes: 3,
  },
  {
    id: "first-year",
    storyId: "margaret",
    title: "From Margaret, six years in, to anyone in their first",
    teaser: "Written for anyone in their first year with Parkinson's. It stays here until you've read it.",
    opening: "Dear you. I know what you typed into the search box tonight, because I typed it too. Here is the thing nobody told me in year one, and I wish they had…",
    paragraphs: [
      "It is still you. Parkinson's arrived in my life, but it did not move into every room. I still garden, I still argue with my sister, and I still burn the toast.",
      "It shows up differently in everyone, so try not to measure yourself against strangers on the internet. Measure yourself against last month.",
      "Keep moving. Exercise is part of the treatment, and it turned out to be the part I enjoy most. Find a class where everyone understands.",
      "Write your questions down before every appointment, and take someone with you if you can. Two pairs of ears hear twice as much.",
      "And plant something. You will want to be there to see it come up.",
    ],
    signOff: "Margaret",
    minutes: 4,
  },
];

// ------------------------------------------------------------------------------------------------
// The front page's lists. Each points at a piece by `groupId/conditionId/itemId`.

/**
 * An editor's pick for now; it can follow real reading counts once there are any. The front page
 * opens with these five, then turns the list slowly through the pieces that have words to read.
 */
export const MOST_READ = [
  "stroke/ischaemic/fatigue",
  "blood-pressure/high-blood-pressure/numbers",
  "stroke/ischaemic/driving",
  "dementia/mild-cognitive-impairment/forgetting-words",
  "arthritis/osteoarthritis/knee-week-three",
];

export const THREE_MINUTE_ANSWERS = [
  "stroke/ischaemic/heavy-side",
  "diabetes/type-2/hba1c",
  "parkinsons/parkinsons-disease/morning-shaking",
  "heart-attack/heart-attack/statins",
];

/** The popular chips under the search box: what they say and the condition they open. */
export const POPULAR = [
  { label: "Stroke", key: "stroke/ischaemic" },
  { label: "High blood pressure", key: "blood-pressure/high-blood-pressure" },
  { label: "Type 2 diabetes", key: "diabetes/type-2" },
  { label: "Parkinson's", key: "parkinsons/parkinsons-disease" },
  { label: "Dementia", key: "dementia/alzheimers" },
  { label: "Osteoarthritis", key: "arthritis/osteoarthritis" },
];
