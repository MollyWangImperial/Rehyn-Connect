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
// Every condition has a full page, built to the shape of the Ischaemic stroke page (the others are in
// library-conditions/*.ts). A condition without `content` would say its page is still being written.
// The stories and letters are composites written for Rehyn. The people in them are not real.
// Sentences are kept short because Alira reads them aloud one at a time.

import { article, CHSS, CURE_PARKINSONS, DIFFERENT_STROKES, NHS, PARKINSONS_FOUNDATION, PARKINSONS_UK, source, STROKE_ASSOCIATION } from "./library-helpers";
import { alzheimers, dystonia, essentialTremor, haemorrhagicStroke, lewyBodyDementia, mildCognitiveImpairment, progressiveMs, relapsingRemittingMs, strokeUnder50, tia, vascularDementia } from "./library-conditions/brain-a";
import { bellsPalsy, carpalTunnel, concussion, focalSeizures, generalisedSeizures, migraine, peripheralNeuropathy, sciatica, seizuresAfterStroke, spinalCordInjury, tensionHeadache, traumaticBrainInjury } from "./library-conditions/brain-b";
import { angina, asthma, atrialFibrillation, copd, heartAttack, highBloodPressure, sleepApnoea } from "./library-conditions/heart";
import { achilles, ankleFracture, axialSpondyloarthritis, bunions, bursitis, deQuervains, fibromyalgia, frozenShoulder, giantCellArteritis, hipFracture, hipReplacement, hypermobility, kneeLigament, kneeReplacement, lupus, meniscus, neckPain, pagets, plantarFasciitis, polymyalgiaRheumatica, psoriaticArthritis, rotatorCuff, scoliosis, shoulderReplacement, sjogrens, slippedDisc, spinalStenosis, sprainsStrains, systemicSclerosis, tennisElbow, triggerFinger, wristFracture } from "./library-conditions/body-more";
import { alcohol, bipolar, eatingDisorders, grief, loneliness, ocd, postnatalDepression, psychosis, ptsd, restlessLegs, sad, stress } from "./library-conditions/mind-more";
import { adhd, anger, arfid, autism, bingeEating, burnout, carerStress, drugUse, gambling, healthAnxiety, narcolepsy, panicDisorder, perimenopauseMood, personalityDisorder, phobias, quittingSmoking, schizophrenia, selfHarm, socialAnxiety } from "./library-conditions/mind-extra";
import { acidReflux, acuteKidneyInjury, alcoholLiverDisease, analFissure, autoimmuneHepatitis, bladderPain, bowelIncontinence, cirrhosis, coeliac, constipation, crohns, diverticular, enlargedProstate, gallstones, gastritis, glomerulonephritis, haemochromatosis, haemorrhoids, hepatitis, hiatusHernia, indigestion, kidneyFailureDialysis, kidneyStones, kidneyTransplant, lactoseIntolerance, microscopicColitis, overactiveBladder, pancreatitis, pbc, polycysticKidney, prostatitis, stomachUlcers, ulcerativeColitis, urinaryIncontinence, uti } from "./library-conditions/digestion-more";
import { addisons, familialHypercholesterolaemia, gestationalDiabetes, gout, highCholesterol, hypoglycaemia, obesity, pcos, thyroidNodules, vitaminD } from "./library-conditions/metabolism-more";
import { bronchiectasis, coronaryHeartDisease, ectopicBeats, heartFailure, lowBloodPressure, pulmonaryFibrosis, slowHeartRate, snoring, svt } from "./library-conditions/heart-more";
import { backPain, osteoarthritis, osteoporosis, overactiveThyroid, prediabetes, rheumatoidArthritis, type1Diabetes, type2Diabetes, underactiveThyroid } from "./library-conditions/body";
import { anxiety, bowelCancer, breastCancer, cancerFatigue, chronicKidneyDisease, depression, depressionAfterStroke, fattyLiver, ibs, insomnia, prostateCancer } from "./library-conditions/cancer-mind-digestion";
import { bladderCancer, cervicalCancer, headNeckCancer, kidneyCancer, leukaemia, lungCancer, lymphoedema, lymphoma, melanoma, myeloma, ovarianCancer, pancreaticCancer, secondaryCancer, wombCancer } from "./library-conditions/cancer-more";
import { boneMetastases, brainFog, brainTumours, caringAdvanced, fearOfRecurrence, fertilityAfterCancer, lateEffects, liverCancer, mds, mesothelioma, oesophagealCancer, penileCancer, sarcoma, skinCancer, stomachCancer, testicularCancer, thyroidCancer, vulvalCancer } from "./library-conditions/cancer-more-2";

export type Hue = { tint: string; ink: string };
export type SectionIcon = "brain" | "heart" | "drop" | "bone" | "ribbon" | "mind" | "kidney";
export type ItemKind = "article" | "video" | "animation" | "exercise" | "podcast" | "audio" | "news" | "research";

export type LibraryItem = {
  id: string;
  title: string;
  blurb?: string;
  kind: ItemKind;
  minutes?: number;
  /** An external video's exact running time as its page gives it ("29:14"), shown in place of minutes. */
  duration?: string;
  /** A genuine resource elsewhere: the page opens it in a new tab instead of a page of its own. */
  url?: string;
  /** Who published it ("Stroke Association"), shown with the date on the card. */
  publisher?: string;
  /** When it was published or last reviewed, as shown ("May 2025"). */
  date?: string;
  /** A few words after the time: "neuro-physiotherapist", "with a diagram". */
  extra?: string;
  /** The checked answer (content/my-time-learn.ts) that this piece opens. */
  learnId?: string;
  /** The narrated film, conversation, breathing guide or practice set (content/ischaemic-media.ts) shown above the written answer. */
  mediaId?: string;
  isNew?: boolean;
  /** Words people search with that are not in the title. */
  keywords?: string[];
  /** Placement D: people in the stories who wondered the same thing, and the chapter where they did. */
  feltToo?: { storyIds: string[]; chapter: string; label: string; shortLabel: string };
};

export type TrustedSource = {
  name: string;
  note: string;
  /** The resource's own title, shown after the organisation in the reference list. */
  title?: string;
  url?: string;
  printable?: boolean;
  /** Something made in Rehyn that the card opens instead of a link: the printable stroke passport. */
  tool?: "stroke-passport";
};
export type StoryLink = { storyId: string; chapter: string; label: string };
/** A real person's own stroke story, published on YouTube: only what the video's title and description say. */
export type VideoStory = { id: string; person: string; title: string; channel: string; url: string; duration: string; about: string };
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
  /** Real people's stories on YouTube; where given, the Stories list shows these instead. */
  videoStories?: VideoStory[];
  askDoctor: string[];
  related: { groupId: string; conditionId: string; label?: string }[];
  /** Placement C: a companion the reader can open at the top of the page, at the point they say they have reached. */
  companion?: { storyId: string };
  /** The line under each part's heading, saying what it is for; the page has plain defaults. */
  purpose?: Partial<Record<"understand" | "recover" | "liveWell" | "watch" | "sources", string>>;
  /** The page's closing line, in place of the Library's general one. */
  footer?: string;
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
  /** Three short facts shown under the section's title, in place of its counts. */
  facts?: string[];
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
// Trusted sources and the small helpers live in library-helpers.ts; every other condition's page is
// in library-conditions/*.ts, each built to the shape of the Ischaemic stroke page below.

export { DEFAULT_SOURCES } from "./library-helpers";

const BRAIN: Hue = { tint: "#EEEBFA", ink: "#4A3F9C" };
const CORAL: Hue = { tint: "#FBEDE7", ink: "#B04B30" };
const GREEN: Hue = { tint: "#F1F7F2", ink: "#2F6851" };
const SUN: Hue = { tint: "#FBF0DC", ink: "#8A5A12" };
const HEART: Hue = { tint: "#FCEBE6", ink: "#A8402B" };

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
      article("what-happens", "What actually happens in the brain", 4, { blurb: "Blood, oxygen, and why minutes mattered on the day. Why the left side of the brain affects the right side of the body.", learnId: "isch-what-happens", keywords: ["oxygen", "blood supply"] }),
      article("why-me", "Why it happened to me", 5, {
        learnId: "isch-why-me",
        blurb: "Blood pressure, atrial fibrillation, cholesterol, diabetes, smoking, and the ones that are nobody's fault.",
        keywords: ["cause", "causes", "risk", "reason"],
        feltToo: { storyIds: ["li-wei", "tom"], chapter: "week-3", label: "Li Wei and Tom both asked this. Hear what they found", shortLabel: "Li Wei and Tom asked this too" },
      }),
      article("types", "TIA, ischaemic, haemorrhagic: the difference", 3, { blurb: "Three words the ward used that nobody explained. A two-minute picture of each.", extra: "With a diagram", learnId: "isch-types", keywords: ["mini-stroke", "bleed"] }),
      article("scans", "The scans and tests you had", 4, { blurb: "CT, MRI, carotid ultrasound, the heart monitor. What each one was looking for and how to ask for your results.", learnId: "isch-scans", keywords: ["ct", "mri", "ultrasound", "results"] }),
      article("heavy-side", "Why does one side feel heavier?", 3, { blurb: "The short answer about a hand and arm that won't do as they are told.", learnId: "hand", keywords: ["weakness", "heavy", "arm", "leg"] }),
      // Genuine resources elsewhere (review): each checked on 17 October 2026 for its title, publisher, date and address.
      { id: "sa-ischaemic", title: "Ischaemic stroke: symptoms, causes, diagnosis and treatment", kind: "article", url: "https://www.stroke.org.uk/stroke/types/ischaemic", publisher: "Stroke Association", blurb: "The charity's own guide, with a helpline and printed, large-print and braille versions.", keywords: ["stroke association", "guide"] },
      { id: "nhs-stroke", title: "Stroke: symptoms, causes and treatment", kind: "article", url: "https://www.nhs.uk/conditions/stroke/", publisher: "NHS", blurb: "The NHS overview: what a stroke is, the FAST signs and what happens in hospital.", keywords: ["nhs", "fast", "signs"] },
      { id: "sa-thrombolysis-video", title: "Emergency treatment for ischaemic stroke: an aphasia-friendly video on thrombolysis", kind: "video", url: "https://www.stroke.org.uk/stroke/symptoms/diagnosis-treatment", publisher: "Stroke Association", blurb: "Short, simply worded and captioned, on the charity's diagnosis and emergency treatment page.", keywords: ["thrombolysis", "clot-busting", "video", "aphasia"] },
      { id: "sa-stroke-stories", title: "Stroke Stories: survivors talk about their recovery", kind: "podcast", url: "https://www.stroke.org.uk/stroke/life-after/stroke-stories-podcast", publisher: "Stroke Association", blurb: "Mark Goodier's interviews with stroke survivors and their families, including a stroke at 50 with aphasia.", keywords: ["podcast", "stories", "survivors"] },
      { id: "lth-thrombectomy-news", title: "Launch of 24/7 thrombectomy service for Lancashire and South Cumbria", kind: "news", url: "https://www.lancsteachinghospitals.nhs.uk/news/article/862", publisher: "Lancashire Teaching Hospitals NHS Foundation Trust", date: "28 January 2026", blurb: "Clot removal around the clock from 2 February 2026 at Royal Preston Hospital, and why minutes matter.", keywords: ["thrombectomy", "news", "24/7"] },
      { id: "nice-ng128", title: "Stroke and TIA in over 16s: diagnosis and initial management (NICE guideline NG128)", kind: "research", url: "https://www.nice.org.uk/guidance/ng128", publisher: "NICE", date: "updated April 2022, reviewed March 2026", blurb: "The established UK guidance on the first 48 hours: recognising a stroke, scans, clot-busting and clot removal. A plain 'information for the public' version is on the same page.", keywords: ["nice", "guideline", "guidance"] },
      { id: "bridge-tnk", title: "Intravenous tenecteplase before thrombectomy in stroke (the BRIDGE-TNK trial)", kind: "research", url: "https://pubmed.ncbi.nlm.nih.gov/40396577/", publisher: "New England Journal of Medicine", date: "July 2025", blurb: "An emerging finding, not yet UK guidance: in one trial in China, a clot-busting drug given before clot removal left more people independent at 90 days (53% against 44%).", keywords: ["tenecteplase", "trial", "research", "thrombectomy"] },
    ],
    recover: [
      { id: "rewiring", title: "How the brain rewires: neuroplasticity, explained", kind: "video", minutes: 2, extra: "with narration", learnId: "rewiring", mediaId: "film-rewiring", keywords: ["neuroplasticity", "rewire"] },
      { id: "arm-hand", title: "Arm and hand: an activity log", kind: "exercise", extra: "with an activity log", learnId: "hand", mediaId: "practice-arm-hand", keywords: ["arm", "hand", "grip", "exercises"] },
      article("first-three-months", "The first weeks and months: what may happen", 6, { learnId: "isch-first-three-months", keywords: ["early", "weeks", "normal"] }),
      { id: "walking", title: "Walking and balance: a narrated animation", kind: "video", minutes: 2, extra: "with narration", mediaId: "film-walking", learnId: "isch-walking", keywords: ["walk", "walking", "balance", "frame"] },
      article("words", "Aphasia and speech: a guide", 5, { extra: "with communication tips", learnId: "words", keywords: ["aphasia", "speech", "talking", "words"] }),
      { id: "fatigue", title: "Post-stroke fatigue: an animation and energy diary", kind: "video", minutes: 2, isNew: true, learnId: "fatigue", mediaId: "film-fatigue", blurb: "A short narrated film on pacing your day, plus an energy diary you can fill in and print.", keywords: ["tired", "tiredness", "exhausted", "energy", "fatigue", "sleepy"] },
    ],
    liveWell: [
      article("driving", "Can I drive again, and who decides?", 4, { learnId: "isch-driving", keywords: ["car", "licence", "dvla"] }),
      article("prevention", "Preventing another one: the tablets, the numbers, the habits", 7, { learnId: "again", keywords: ["another stroke", "again", "prevent", "tablets"] }),
      article("work", "Going back to work, in stages", 5, { learnId: "isch-work", keywords: ["job", "employer"] }),
      article("mood", "Low days, flat days: mood after stroke", 5, { learnId: "emotions", keywords: ["sad", "crying", "low", "emotions", "depression"] }),
      article("swallowing", "Eating and swallowing safely", 4, { learnId: "isch-swallowing", keywords: ["swallow", "food", "choking"] }),
      article("carers", "For the person looking after you: a page for carers", 6, { learnId: "isch-carers", keywords: ["carer", "family", "partner"] }),
    ],
    watch: [
      // Educational videos and podcasts on YouTube. Checked 19 October 2026: title and channel from
      // YouTube's oEmbed, running time from the video's page, speakers from its own description.
      { id: "yt-what-is-a-stroke", title: "What is a stroke? Explaining the symptoms, effects and life after stroke", kind: "video", duration: "2:44", url: "https://www.youtube.com/watch?v=e-hMH6jWIYs", publisher: "Stroke Association", keywords: ["symptoms", "effects"] },
      { id: "yt-ted-ed-stroke", title: "What happens during a stroke? - Vaibhav Goswami", kind: "animation", duration: "4:59", url: "https://www.youtube.com/watch?v=-NJm4TJ2it0", extra: "lesson by Vaibhav Goswami", publisher: "TED-Ed", keywords: ["brain", "oxygen", "animation"] },
      { id: "yt-aha-first-90-days", title: "Survived a stroke? How to heal in the first 90 days.", kind: "video", duration: "7:29", url: "https://www.youtube.com/watch?v=fq2RjVyJ2T8", extra: "with Dr Eduardo Sanchez", publisher: "American Heart Association", keywords: ["first months", "rehabilitation"] },
      { id: "yt-stroke-matters-fatigue", title: "Episode 3: Post-Stroke Fatigue Explained with Libby Cunningham, Stroke Matters Podcast", kind: "podcast", duration: "29:14", url: "https://www.youtube.com/watch?v=DKzub5VAFcw", extra: "with Libby Cunningham, clinical specialist occupational therapist", publisher: "StrokeLINK", keywords: ["fatigue", "tired", "tiredness"] },
      { id: "yt-health-compass-thrombectomy", title: "A new spin on stroke treatment | Ep.3: Health Compass Podcast", kind: "podcast", duration: "31:07", url: "https://www.youtube.com/watch?v=RzT-xef1j_A", extra: "with Jeremy Heit, MD, PhD, and Renee Zhao, PhD", publisher: "Stanford Medicine", keywords: ["clot removal", "thrombectomy", "research"] },
    ],
    sources: [
      source(NHS, "Stroke overview, symptoms, treatment and recovery pages"),
      STROKE_ASSOCIATION,
      DIFFERENT_STROKES,
      CHSS,
      // Checked 19 October 2026: title, publisher and edition as the guideline's own site gives them.
      { name: "Intercollegiate Stroke Working Party", title: "National Clinical Guideline for Stroke for the UK and Ireland (2023 edition)", note: "The clinical guideline, with a plain language summary for people affected by stroke", url: "https://www.strokeguideline.org/" },
      { name: "Printable: my stroke passport", note: "One page to fill in and hand to a new doctor or physio", printable: true, tool: "stroke-passport" },
    ],
    stories: ["li-wei", "tom", "rose"],
    // Real people's ischaemic stroke stories. Checked 19 October 2026 (oEmbed title and channel,
    // running time from the video page); each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-anna", person: "Anna", title: "American Stroke Association - Stroke Survivor Story - Anna", channel: "American Heart Association", url: "https://www.youtube.com/watch?v=MiGd61rUoiA", duration: "2:57", about: "Anna talks about her life more than a decade after an ischemic stroke." },
      { id: "yt-steve-rhyne", person: "Steve Rhyne", title: "A Stroke Survivor's Story - UF Health Neuroscience Institute", channel: "UF Health Jacksonville", url: "https://www.youtube.com/watch?v=C7wzgy3kZeI", duration: "3:33", about: "Steve describes his acute ischemic stroke and getting to hospital in time for clot-busting treatment." },
      { id: "yt-joy", person: "Joy Hadji Alliy", title: "Sheelagh meets Joy, Ischemic Stroke aged 42", channel: "Different Strokes UK", url: "https://www.youtube.com/watch?v=8LDZRotvMb4", duration: "59:40", about: "A conversation with Joy about her ischaemic stroke in 2020 and the years since." },
    ],
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
    companion: { storyId: "li-wei" },
    purpose: {
      understand: "Understand ischaemic stroke, its causes and the tests used to diagnose it.",
      recover: "Educational summaries written by Rehyn from information published by external organisations, named on each card. For general information only; not medical advice from Rehyn.",
      liveWell: "Find practical support for everyday life after stroke.",
      watch: "Watch and listen to short films, talks and audio about life after stroke.",
      sources: "Find reliable information and guidance from trusted health organisations.",
    },
    footer: "This page helps you understand ischaemic stroke, explore recovery and find practical support for daily life. Your own care team knows your situation; follow their advice first.",
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
      article("dopamine", "What dopamine does, and why less of it matters", 4, { blurb: "The one paragraph of brain science you actually need.", extra: "with a diagram", learnId: "pd-dopamine" }),
      article("unexpected-symptoms", "The symptoms nobody expects", 4, { blurb: "Sleep, smell, constipation, low mood, a quieter voice. Sometimes years before the tremor.", learnId: "pd-symptoms", keywords: ["smell", "sleep", "voice", "constipation"] }),
      article("diagnosis", "How it's diagnosed", 4, { blurb: "Why there's no single test, what the neurologist is watching for, and the scan you might be offered.", learnId: "pd-diagnosis", keywords: ["test", "scan", "neurologist"] }),
      article("tremor-types", "Parkinson's tremor or essential tremor?", 3, { blurb: "At rest, or on the move: how the two differ.", learnId: "pd-tremor", keywords: ["shaking", "tremor"] }),
      article("morning-shaking", "Harder mornings: when medicines wear off overnight", 3, { learnId: "pd-morning", keywords: ["shaking", "tremor", "hands", "morning"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("levodopa", "Levodopa and timing: why “on” and “off” happen", 5, { learnId: "pd-levodopa", keywords: ["tablets", "medication", "levodopa", "on off"] }),
      article("exercise", "Exercise is part of the treatment", 3, { learnId: "pd-exercise", keywords: ["exercise", "activity", "physiotherapy"] }),
      article("voice", "Keeping your voice loud and your swallow safe", 4, { learnId: "pd-voice", keywords: ["voice", "speech", "swallow"] }),
      article("dbs", "Deep brain stimulation: who it's for, honestly", 4, { learnId: "pd-dbs", keywords: ["dbs", "surgery"] }),
    ],
    liveWell: [
      article("freezing", "Freezing: ways to unstick your feet", 3, { learnId: "pd-freezing", keywords: ["freezing", "stuck", "walking"] }),
      article("sleep", "Sleeping better with Parkinson's", 3, { learnId: "pd-sleep", keywords: ["sleep", "night"] }),
      article("falls", "Falls: making the home safer", 3, { learnId: "pd-falls", keywords: ["fall", "falls", "home"] }),
      article("driving-work", "Driving, work and telling people", 4, { learnId: "pd-driving-work", keywords: ["driving", "work", "telling"] }),
      article("carers", "For partners and carers: support for you", 3, { learnId: "pd-carers", keywords: ["carer", "partner"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title and channel from YouTube's oEmbed,
    // running time from the video's page, speakers from its own description.
    watch: [
      { id: "yt-puk-what", title: "What is Parkinson's?", kind: "video", duration: "1:10", url: "https://www.youtube.com/watch?v=ODX2-C2uEAs", extra: "an animation", publisher: "Parkinson's UK", keywords: ["dopamine", "brain"] },
      { id: "yt-puk-why", title: "Why do people get Parkinson's?", kind: "video", duration: "11:47", url: "https://www.youtube.com/watch?v=6F-Bx7qjnSo", extra: "with Professor Huw Morris, UCL Institute of Neurology", publisher: "Parkinson's UK", keywords: ["causes"] },
      { id: "yt-mayo-pd", title: "Mayo Clinic Minute: Parkinson's - Regaining movement control", kind: "video", duration: "0:56", url: "https://www.youtube.com/watch?v=Yl89IkRDX7Y", extra: "with Dr Eric Ahlskog", publisher: "Mayo Clinic", keywords: ["movement"] },
      { id: "yt-puk-physio", title: "Physiotherapists and Parkinson’s", kind: "video", duration: "2:21", url: "https://www.youtube.com/watch?v=lYwQnHqO5TI", extra: "on keeping moving and daily tasks", publisher: "Parkinson's UK", keywords: ["exercise", "physiotherapy"] },
    ],
    sources: [source(NHS, "Overview, symptoms and treatment"), PARKINSONS_UK, PARKINSONS_FOUNDATION, CURE_PARKINSONS],
    stories: ["margaret"],
    // Real people's stories of Parkinson's. Checked 20 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-tizzy", person: "Tizzy", title: "Living positively with Parkinson's - Tizzy's Story", channel: "Parkinson's UK", url: "https://www.youtube.com/watch?v=GZippmwYZaU", duration: "2:21", about: "Tizzy was diagnosed aged 25; exercise, a positive attitude and being open about it keep her going." },
      { id: "yt-katy", person: "Katy", title: "My Story: Our Cure - Katy", channel: "Cure Parkinson's", url: "https://www.youtube.com/watch?v=ggOIBhSeIm8", duration: "2:03", about: "Katy was diagnosed with young-onset Parkinson's at 42, in 2021." },
      { id: "yt-paula", person: "Paula", title: "'Wearing off' - Paula's story of living with Parkinson's", channel: "Parkinson's UK", url: "https://www.youtube.com/watch?v=IvV6RvK_zf8", duration: "2:20", about: "Paula shares how her symptoms affect everyday life, and how 'wearing off' affects her." },
    ],
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
    blurb: "Explore brain, spinal cord and nerve conditions, their effects and recovery.",
    hue: BRAIN,
    icon: "brain",
    chips: ["Stroke", "Dementia", "Parkinson's"],
    facts: ["Affects more than 1 in 3 people worldwide", "The brain can rewire itself after damage", "Recovery stories from people who've lived it"],
    groups: [
      {
        id: "stroke",
        title: "Stroke",
        blurb: "When blood stops reaching part of the brain. The type you had shapes your treatment and the shape of your recovery.",
        badge: "Most visited",
        keywords: ["face", "arm", "weakness", "one side", "speech"],
        conditions: [ischaemicStroke, haemorrhagicStroke, tia, strokeUnder50],
      },
      {
        id: "dementia",
        title: "Dementia & memory",
        blurb: "Memory, thinking and language changes that are more than ordinary ageing, for the person and for the family around them.",
        keywords: ["memory", "forgetting", "losing words", "repeating", "confused", "confusion"],
        conditions: [alzheimers, vascularDementia, lewyBodyDementia, mildCognitiveImpairment],
      },
      {
        id: "parkinsons",
        title: "Parkinson's & movement",
        blurb: "Tremor, stiffness and slowness, and the many things that help: medication timing, exercise, voice work and good sleep.",
        keywords: ["tremor", "shaking", "stiff", "slow"],
        conditions: [parkinsonsDisease, essentialTremor, dystonia],
      },
      {
        id: "multiple-sclerosis",
        title: "Multiple sclerosis",
        blurb: "An immune condition of the nerves. Comes in different patterns, and each pattern has its own treatment path.",
        keywords: ["ms"],
        conditions: [relapsingRemittingMs, progressiveMs],
      },
      {
        id: "epilepsy",
        title: "Epilepsy & seizures",
        blurb: "Including seizures that start after a stroke or a brain injury, and what to do when one happens.",
        keywords: ["fit", "fits", "seizure"],
        conditions: [focalSeizures, generalisedSeizures, seizuresAfterStroke],
      },
      {
        id: "brain-spinal-injury",
        title: "Brain & spinal injury",
        blurb: "Recovery after a knock to the head or damage to the spinal cord, from the first weeks to getting back to everyday life.",
        keywords: ["head injury", "knock", "accident"],
        conditions: [traumaticBrainInjury, concussion, spinalCordInjury],
      },
      {
        id: "headache",
        title: "Migraine & headache",
        blurb: "Telling a migraine from a headache that needs urgent attention, and the triggers worth keeping a diary of.",
        keywords: ["headache", "migraine"],
        conditions: [migraine, tensionHeadache],
      },
      {
        id: "nerves",
        title: "Nerve conditions",
        blurb: "Numbness, tingling, weakness or pain along a nerve, often alongside diabetes or after an injury.",
        keywords: ["numb", "numbness", "tingling", "pins and needles"],
        conditions: [peripheralNeuropathy, bellsPalsy, sciatica, carpalTunnel],
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
        conditions: [highBloodPressure, lowBloodPressure],
      },
      {
        id: "heart-attack",
        title: "Heart disease",
        blurb: "Narrowed heart arteries, chest pain, heart attacks and heart failure, and the months of rehab and treatment that follow.",
        conditions: [heartAttack, angina, coronaryHeartDisease, heartFailure],
      },
      {
        id: "heart-rhythm",
        title: "Heart rhythm",
        blurb: "When the heart beats too fast, too slow or out of step.",
        conditions: [atrialFibrillation, svt, slowHeartRate, ectopicBeats],
      },
      { id: "long-term-lung", title: "Long-term lung conditions", blurb: "Living with breathlessness, and the inhalers and exercise that help.", keywords: ["breathless", "inhaler", "lungs", "breathing"], conditions: [copd, asthma, bronchiectasis, pulmonaryFibrosis] },
      { id: "sleep-breathing", title: "Breathing in sleep", blurb: "Snoring, pauses in breathing at night and the tiredness that follows.", keywords: ["breathing", "snoring"], conditions: [sleepApnoea, snoring] },
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
        conditions: [type2Diabetes, prediabetes, type1Diabetes, gestationalDiabetes, hypoglycaemia],
      },
      {
        id: "thyroid",
        title: "Thyroid",
        blurb: "A small gland in the neck that sets the pace for much of the body.",
        conditions: [underactiveThyroid, overactiveThyroid, thyroidNodules],
      },
      { id: "cholesterol", title: "Cholesterol", blurb: "Fats in the blood, the numbers on the test and what brings them down.", keywords: ["lipids", "statins"], conditions: [highCholesterol, familialHypercholesterolaemia] },
      { id: "weight", title: "Weight", blurb: "Carrying extra weight, and the support that helps.", keywords: ["bmi", "weight loss"], conditions: [obesity] },
      { id: "hormones", title: "Hormones & glands", blurb: "Conditions of the ovaries and adrenal glands.", keywords: ["hormones", "glands"], conditions: [pcos, addisons] },
      { id: "gout-vitamins", title: "Gout & vitamin D", blurb: "Uric acid crystals in the joints, and the vitamin bones need.", keywords: ["uric acid", "vitamins"], conditions: [gout, vitaminD] },
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
        conditions: [osteoarthritis, rheumatoidArthritis, psoriaticArthritis, axialSpondyloarthritis, polymyalgiaRheumatica, giantCellArteritis, lupus, sjogrens, systemicSclerosis],
      },
      { id: "bone-health", title: "Bone health", blurb: "Keeping bones strong, and recovering well after a break.", conditions: [osteoporosis, hipFracture, wristFracture, ankleFracture, pagets] },
      { id: "back-neck", title: "Back & neck", blurb: "Everyday back and neck pain, and when to get it checked.", conditions: [backPain, neckPain, slippedDisc, spinalStenosis, scoliosis] },
      { id: "muscles", title: "Muscles & soft tissue", blurb: "Widespread pain, shoulders, bursae and flexible joints.", keywords: ["muscle", "soft tissue"], conditions: [fibromyalgia, frozenShoulder, rotatorCuff, bursitis, hypermobility] },
      { id: "joint-replacement", title: "Joint replacement", blurb: "Getting ready for a new hip, knee or shoulder, and the recovery after.", keywords: ["operation", "surgery"], conditions: [hipReplacement, kneeReplacement, shoulderReplacement] },
      { id: "feet-tendons", title: "Tendons, hands & feet", blurb: "Elbows, hands, heels and toes: tendons and feet.", keywords: ["tendon", "heel", "elbow", "hand", "foot"], conditions: [tennisElbow, triggerFinger, deQuervains, plantarFasciitis, achilles, bunions] },
      { id: "injuries", title: "Sprains & joint injuries", blurb: "Twists, sprains and knee injuries, and getting back to activity.", keywords: ["injury", "sport", "sprain"], conditions: [sprainsStrains, kneeLigament, meniscus] },
    ],
  },
  {
    id: "cancer-recovery",
    title: "Cancer & recovery",
    short: "Cancer",
    blurb: "Treatment, recovery and living well with cancer: getting your strength back, what to keep an eye on, and the support that helps.",
    hue: { tint: "#FAE8F0", ink: "#8E3561" },
    icon: "ribbon",
    chips: ["Breast", "Bowel", "Prostate"],
    groups: [
      { id: "common-cancers", title: "Common cancers", blurb: "Recovery after treatment for some of the most common cancers.", conditions: [breastCancer, bowelCancer, prostateCancer, lungCancer, melanoma, skinCancer] },
      { id: "blood-cancers", title: "Blood cancers", blurb: "Lymphoma, leukaemia, myeloma and MDS: treatment, infections and life between appointments.", keywords: ["blood cancer", "bone marrow"], conditions: [lymphoma, leukaemia, myeloma, mds] },
      { id: "womens-cancers", title: "Women's cancers", blurb: "Recovery after ovarian, womb, cervical and vulval cancer.", keywords: ["gynaecological"], conditions: [ovarianCancer, wombCancer, cervicalCancer, vulvalCancer] },
      { id: "mens-cancers", title: "Men's cancers", blurb: "Recovery after testicular and penile cancer.", conditions: [testicularCancer, penileCancer] },
      { id: "digestive-cancers", title: "Digestive cancers", blurb: "Oesophageal, stomach and liver cancer, and the changes to eating that follow.", keywords: ["gastric", "food pipe"], conditions: [oesophagealCancer, stomachCancer, liverCancer] },
      { id: "other-cancers", title: "Other cancers", blurb: "Head and neck, bladder, kidney, pancreatic and thyroid cancer.", conditions: [headNeckCancer, bladderCancer, kidneyCancer, pancreaticCancer, thyroidCancer] },
      { id: "rarer-cancers", title: "Less common cancers", blurb: "Brain tumours, sarcoma and mesothelioma.", conditions: [brainTumours, sarcoma, mesothelioma] },
      { id: "after-treatment", title: "Life after treatment", blurb: "Tiredness, swelling, brain fog, worry, fertility and the longer-term effects of treatment.", conditions: [cancerFatigue, lymphoedema, brainFog, fearOfRecurrence, fertilityAfterCancer, lateEffects] },
      { id: "advanced-cancer", title: "Advanced cancer", blurb: "Living well with cancer that has spread, and support for those who care.", keywords: ["metastatic", "palliative"], conditions: [secondaryCancer, boneMetastases, caringAdvanced] },
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
      { id: "depression", title: "Depression", blurb: "Low mood that lasts, including the kind that follows a stroke or a diagnosis.", keywords: ["low", "sad", "mood"], conditions: [depression, depressionAfterStroke, sad, postnatalDepression, perimenopauseMood, selfHarm] },
      { id: "anxiety", title: "Anxiety", blurb: "Worry that gets in the way of everyday life.", keywords: ["worry", "panic", "trauma", "phobia"], conditions: [anxiety, ocd, ptsd, panicDisorder, healthAnxiety, socialAnxiety, phobias] },
      { id: "sleep", title: "Sleep", blurb: "Trouble getting to sleep, staying asleep or waking rested.", keywords: ["insomnia", "night"], conditions: [insomnia, restlessLegs, narcolepsy] },
      { id: "bipolar-psychosis", title: "Bipolar, psychosis & personality", blurb: "Big swings in mood, times when reality is hard to tell apart, and lasting patterns of intense emotion.", keywords: ["mania", "voices", "bpd"], conditions: [bipolar, psychosis, schizophrenia, personalityDisorder] },
      { id: "stress-grief", title: "Stress, grief & loneliness", blurb: "Pressure, loss and feeling alone, and the support that helps.", keywords: ["pressure", "loss", "lonely", "carer", "anger"], conditions: [stress, grief, loneliness, burnout, carerStress, anger] },
      { id: "alcohol", title: "Alcohol & addiction", blurb: "Drinking, drugs, gambling and smoking: how they affect mood and health, and help to cut down or stop.", keywords: ["drinking", "units", "drugs", "gambling", "smoking"], conditions: [alcohol, drugUse, gambling, quittingSmoking] },
      { id: "eating-disorders", title: "Eating disorders", blurb: "When food and eating become a way of coping, and getting help early.", keywords: ["anorexia", "bulimia", "binge"], conditions: [eatingDisorders, bingeEating, arfid] },
      { id: "adhd-autism", title: "ADHD & autism", blurb: "Differences in attention, communication and the senses, and getting support as an adult.", keywords: ["neurodivergent", "adhd", "autism"], conditions: [adhd, autism] },
    ],
  },
  {
    id: "kidneys-liver-digestion",
    title: "Kidneys, liver & digestion",
    short: "Digestion",
    blurb: "The organs that clean and process: what the test results mean and the changes that help.",
    hue: { tint: "#EEF3DF", ink: "#4F6A14" },
    icon: "kidney",
    chips: ["Kidney disease", "Liver", "IBS"],
    groups: [
      { id: "kidneys", title: "Kidneys", blurb: "How well the kidneys are working, stones and sudden injury, and keeping them well.", conditions: [chronicKidneyDisease, kidneyStones, acuteKidneyInjury, polycysticKidney, glomerulonephritis, kidneyFailureDialysis, kidneyTransplant] },
      { id: "bladder", title: "Bladder & prostate", blurb: "Leaks, infections and a prostate that has grown.", keywords: ["urine", "peeing", "urinary"], conditions: [urinaryIncontinence, overactiveBladder, uti, bladderPain, enlargedProstate, prostatitis] },
      { id: "liver", title: "Liver", blurb: "The liver, what can strain and scar it, and what helps it recover.", conditions: [fattyLiver, cirrhosis, alcoholLiverDisease, hepatitis, haemochromatosis, pbc, autoimmuneHepatitis] },
      { id: "stomach", title: "Stomach & gallbladder", blurb: "Heartburn, ulcers, gallstones and the pancreas.", keywords: ["indigestion", "heartburn", "upper abdomen"], conditions: [acidReflux, indigestion, hiatusHernia, gastritis, stomachUlcers, gallstones, pancreatitis] },
      { id: "gut", title: "Gut & digestion", blurb: "Tummy pain, bloating and bowel changes.", conditions: [ibs, coeliac, lactoseIntolerance, diverticular, constipation, haemorrhoids, analFissure, bowelIncontinence] },
      { id: "ibd", title: "Crohn's & colitis", blurb: "Inflammatory bowel disease: flare-ups, treatment and living well.", keywords: ["inflammatory bowel disease", "ibd"], conditions: [crohns, ulcerativeColitis, microscopicColitis] },
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
      { id: "work", label: "Month 8", title: "Back to work, in stages", minutes: 4, week: 35, paragraphs: [
        "I wanted to go back to the office after six weeks. My occupational therapist asked me to wait and make a plan first. She was right.",
        "I phoned my manager from home in week two. I told her I'd had a stroke, that I was in rehabilitation, and when I'd be in touch again. She sent me the return-to-work policy the same day.",
        "We agreed a phased return. Two short days a week to start, mornings only, and no driving to site. Then three days. Then longer ones.",
        "The tiredness was the thing nobody at work could see. By two o'clock my head felt full of sand. I learnt to plan the hard jobs for the morning, and to take a proper break at lunch.",
        "Some colleagues didn't know what to say, so they said nothing. I sent a short email explaining what had happened and what helped. After that, it was easier.",
        "By month eight I was back to four days. Not quite the job I had before. A slightly different version of it, and a slightly different version of me.",
        "If you're thinking about going back: don't rush, keep in touch, and remember you're the expert on what you need.",
      ] },
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
    chapters: [{ id: "words", label: "Year 1", title: "The long way round", minutes: 6, paragraphs: [
      "My daughter is writing this down for me. I tell her a sentence, she reads it back, and I say yes or no. It is slower that way, but it is mine.",
      "The stroke came on a Sunday morning. I was making tea and the words went wrong. I said spoon when I meant kettle, and then I couldn't say anything at all.",
      "My daughter knew the signs. She called 999 before I had sat down.",
      "In hospital they called it aphasia. I understood most of what people said. Finding my own words was the hard part. They were in there. Some days they took the long way round.",
      "People talked to my daughter instead of me. That was the worst bit. I wanted to say: I am still here. I still think the same.",
      "The speech and language therapist gave me time. She asked questions I could answer with yes or no. She let me point, and write, and draw. She never finished my sentences for me.",
      "At home, my daughter turned the radio off when we talked. One thing at a time. Short questions. It made a big difference.",
      "Every evening we practised names. The grandchildren, the neighbours, the cat. Some nights I got them all. Some nights I got none, and we laughed anyway.",
      "Eleven months in, I wrote a birthday card for my great-grandson. Every word myself. It took an hour. My daughter cried more than I did.",
      "If you are near the start: let people help you, but not too much. Ask them to wait. The words may come.",
    ] }],
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
