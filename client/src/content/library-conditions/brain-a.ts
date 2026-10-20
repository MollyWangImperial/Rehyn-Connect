import type { LibraryCondition } from "../library";
import { ALZHEIMERS_SOCIETY, article, CHSS, DEMENTIA_UK, DIFFERENT_STROKES, DYSTONIA_UK, LEWY_BODY_SOCIETY, MS_SOCIETY, MS_TRUST, NHS, piece, source, STROKE_ASSOCIATION, TREMOR_FOUNDATION } from "../library-helpers";

// Brain & nervous system, part one: the other strokes, dementia, Parkinson's & movement, and MS.
// Each page follows the shape of the Ischaemic stroke page: Understand, Explore (or Treat & manage),
// Live well, Watch & listen, trusted sources, questions for the doctor and related pages. The titles
// are placeholders until each piece is written and clinically checked (see content/library.ts).

export const haemorrhagicStroke: LibraryCondition = {
  id: "haemorrhagic",
  title: "Haemorrhagic stroke",
  summary: "A blood vessel in or around the brain bursts, and the bleed presses on the tissue around it. It is less common than an ischaemic stroke, and the first weeks are often spent in hospital while the bleeding settles.",
  facts: ["About 15% of strokes", "Blood pressure control is the main way to prevent another", "Recovery follows the same path as other strokes, often from a slower start"],
  keywords: ["bleed", "bleeding", "brain haemorrhage", "subarachnoid", "aneurysm"],
  content: {
    understand: [
      article("what-happens", "What a bleed does inside the skull", 4, { blurb: "The bleeding, the pressure it can build, and the emergency care that follows.", learnId: "haem-what-happens", keywords: ["pressure", "swelling", "hydrocephalus"] }),
      article("why-me", "Why it happened: blood pressure, aneurysms and blood thinners", 5, { blurb: "The common causes, the rarer ones, and the questions worth asking about yours.", learnId: "haem-why-me", keywords: ["cause", "causes", "aneurysm", "warfarin"] }),
      article("two-kinds", "Intracerebral or subarachnoid: the two kinds of bleed", 3, { blurb: "Where the blood collects, and the sudden headache that can come with it.", extra: "With a diagram", learnId: "haem-two-kinds", keywords: ["subarachnoid", "intracerebral"] }),
      article("surgery", "The operations and procedures you may have had", 4, { blurb: "Coiling, clipping, removing a bleed, draining fluid, and what each was for.", learnId: "haem-surgery", keywords: ["coiling", "clipping", "operation", "surgery"] }),
    ],
    recover: [
      piece("video", "rewiring", "How the brain rewires: neuroplasticity, explained", 2, { extra: "with narration", learnId: "rewiring", mediaId: "film-rewiring", keywords: ["neuroplasticity", "rewire"] }),
      article("first-three-months", "The first three months after a bleed", 6, { learnId: "haem-first-months", keywords: ["early", "weeks", "normal", "nimodipine"] }),
      piece("video", "walking", "Walking and balance: a narrated animation", 2, { extra: "with narration", learnId: "isch-walking", mediaId: "film-walking", keywords: ["walk", "walking", "balance"] }),
      article("headaches", "Headaches after a bleed: what's usual and what isn't", 4, { learnId: "haem-headaches", keywords: ["headache", "pain"] }),
      piece("video", "fatigue", "Fatigue after a bleed, and pacing your day", 2, { extra: "with narration", learnId: "fatigue", mediaId: "film-fatigue", keywords: ["tired", "tiredness", "energy", "fatigue"] }),
    ],
    liveWell: [
      article("blood-pressure", "Blood pressure: the one number that matters most now", 5, { learnId: "haem-blood-pressure", keywords: ["bp", "hypertension", "tablets"] }),
      article("blood-thinners", "Blood thinners after a bleed: the careful conversation", 4, { learnId: "haem-blood-thinners", keywords: ["aspirin", "anticoagulant", "warfarin"] }),
      article("driving", "Driving again, and who decides", 4, { learnId: "haem-driving", keywords: ["car", "licence", "dvla"] }),
      article("mood", "Low days and worry after a bleed", 5, { learnId: "emotions", keywords: ["sad", "anxious", "mood"] }),
      article("carers", "For the person looking after you", 6, { learnId: "isch-carers", keywords: ["carer", "family", "partner"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title and channel from YouTube's oEmbed,
    // running time from the video's page, speakers from its own description.
    watch: [
      { id: "yt-baf-recovery", title: "Recovery From a Ruptured Brain Aneurysm", kind: "video", duration: "6:02", url: "https://www.youtube.com/watch?v=BJr2_VsHdI0", publisher: "Brain Aneurysm Foundation", keywords: ["aneurysm", "recovery"] },
      { id: "yt-mayo-sah", title: "Subarachnoid Hemorrhage from Ruptured Brain Aneurysm", kind: "video", duration: "6:22", url: "https://www.youtube.com/watch?v=a86y04dqma8", extra: "with Dr Giuseppe Lanzino and Dr Alejandro Rabinstein", publisher: "Mayo Clinic", keywords: ["subarachnoid", "aneurysm"] },
      { id: "yt-cleveland-coiling", title: "Aneurysm Coiling", kind: "video", duration: "2:17", url: "https://www.youtube.com/watch?v=6XTl7pXQmTE", extra: "with neurosurgeon Peter Rasmussen, MD", publisher: "Cleveland Clinic", keywords: ["coiling", "operation"] },
      { id: "yt-bsf-fatigue", title: "BSF Webinar: Understanding Cognitive Fatigue After Brain Haemorrhage", kind: "video", duration: "30:33", url: "https://www.youtube.com/watch?v=Q13-HQuRzKs", extra: "with Dr Grace Holly, clinical psychologist", publisher: "Brain & Spine Foundation", keywords: ["fatigue", "tired"] },
    ],
    sources: [source(NHS, "Stroke overview, treatment and recovery pages"), STROKE_ASSOCIATION, DIFFERENT_STROKES, CHSS],
    stories: ["li-wei"],
    // Real people's stories of a bleed. Checked 20 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-jane", person: "Jane", title: "Jane's Story - Brain aneurysm and subarachnoid haemorrhage", channel: "Queen Square Imaging Centre", url: "https://www.youtube.com/watch?v=m-sgv1Np3ZA", duration: "5:36", about: "Jane, a radiographer, describes her subarachnoid haemorrhage in 2014." },
      { id: "yt-louise", person: "Louise", title: "Louise's story with Brain Haemorrhage | The Brain & Spine Foundation", channel: "Brain & Spine Foundation", url: "https://www.youtube.com/watch?v=AXWeok8OMTU", duration: "2:30", about: "Louise's story of a subarachnoid haemorrhage in 2018, and the physical and psychological recovery that followed." },
      { id: "yt-martin", person: "Martin", title: "Sheelagh meets Martin – Haemorrhagic stroke in 2013 aged 49", channel: "Different Strokes UK", url: "https://www.youtube.com/watch?v=3Q8KeJAbZY0", duration: "30:28", about: "A conversation with Martin about his haemorrhagic stroke at 49, his recovery and his work." },
    ],
    askDoctor: [
      "Where was the bleed, and has it fully stopped?",
      "What should my blood pressure be now, and how often should I check it?",
      "Are any of my tablets off limits after a bleed?",
      "When is it safe to fly, lift or drive?",
    ],
    related: [
      { groupId: "stroke", conditionId: "ischaemic" },
      { groupId: "blood-pressure", conditionId: "high-blood-pressure" },
      { groupId: "epilepsy", conditionId: "after-stroke" },
    ],
  },
};

export const tia: LibraryCondition = {
  id: "tia",
  title: "TIA (mini-stroke)",
  summary: "A transient ischaemic attack is a stroke that passes: the blood supply is blocked for a short time, and the symptoms last minutes to hours and fully go within 24 hours. It is a warning: the risk of a stroke is greatest in the days and weeks after, which is why it is treated straight away.",
  facts: ["Symptoms clear within 24 hours", "Highest risk of a stroke in the days just after", "Treated as an emergency even once it has passed"],
  keywords: ["mini-stroke", "transient", "tia", "warning stroke"],
  content: {
    understand: [
      article("what-happened", "What a TIA is, and why it passed", 3, { blurb: "A blockage that moved away or dissolved before lasting damage was done. Why the symptoms still matter.", learnId: "tia-what", keywords: ["clot", "passed"] }),
      article("warning", "Why a TIA is treated as an emergency", 3, { blurb: "The risk in the first days and weeks, aspirin straight away, and a specialist within 24 hours.", learnId: "tia-warning", keywords: ["risk", "clinic", "emergency", "aspirin"] }),
      article("tests", "The tests you had, and the ones you might still have", 4, { blurb: "Brain scan, neck scan, blood tests, heart checks: what each was looking for.", learnId: "tia-tests", keywords: ["ultrasound", "monitor", "scan", "mri"] }),
      article("not-a-tia", "Why the doctor asked so many questions", 3, { blurb: "Other things can cause the same symptoms, such as low blood sugar. How the specialist rules them out.", learnId: "tia-not", keywords: ["mimic", "blood sugar"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("tablets", "The tablets you were started on, and why", 5, { learnId: "tia-tablets", keywords: ["aspirin", "clopidogrel", "statin", "tablets"] }),
      article("carotid", "If the neck artery is narrowed: the operation explained", 4, { learnId: "tia-carotid", keywords: ["carotid", "endarterectomy", "operation"] }),
      article("af-check", "Checking for an irregular heartbeat", 3, { learnId: "tia-af", keywords: ["atrial fibrillation", "af", "monitor"] }),
    ],
    liveWell: [
      article("prevent", "Preventing a stroke: the medicines and the habits", 5, { learnId: "tia-prevent", keywords: ["prevent", "blood pressure", "cholesterol"] }),
      article("driving", "Driving after a TIA: the rules", 3, { learnId: "tia-driving", keywords: ["car", "licence", "dvla"] }),
      article("worry", "The worry that follows", 4, { learnId: "tia-worry", keywords: ["anxious", "worry", "fear"] }),
      article("fast", "FAST: what to do if it happens again", 2, { learnId: "tia-fast", keywords: ["fast", "999", "signs"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title and channel from YouTube's oEmbed,
    // running time from the video's page, speakers from its own description.
    watch: [
      { id: "yt-sa-rothwell", title: "Professor Peter Rothwell talks mini-stroke (with subtitles)", kind: "video", duration: "2:18", url: "https://www.youtube.com/watch?v=GWWPkyfRM6w", extra: "with Professor Peter Rothwell", publisher: "Stroke Association", keywords: ["mini-stroke", "warning"] },
      { id: "yt-mayo-tia", title: "What is a TIA? Is it a stroke? Mayo Clinic on Transient Ischemic Attacks", kind: "video", duration: "1:33", url: "https://www.youtube.com/watch?v=5X0ov8E1nzo", extra: "with Dr Kevin M. Barrett, vascular neurologist", publisher: "Mayo Clinic", keywords: ["tia"] },
      { id: "yt-uh-tia", title: "Understanding Transient Ischemic Attack (TIA or Mini-Stroke)", kind: "video", duration: "1:42", url: "https://www.youtube.com/watch?v=Jeeoy5mycXA", extra: "with Cathy Sila, MD", publisher: "University Hospitals", keywords: ["tia", "warning"] },
    ],
    sources: [source(NHS, "TIA: symptoms, causes and treatment"), STROKE_ASSOCIATION, CHSS],
    stories: [],
    // Real people's own mini-stroke stories. Checked 20 October 2026; each detail is from the video's title or description.
    videoStories: [
      { id: "yt-dawn", person: "Dawn Turnage", title: "Mini-stroke survivor, Dawn Turnage, shares her story of survival and recovery", channel: "American Heart Association", url: "https://www.youtube.com/watch?v=_if5IXyQ7rI", duration: "2:14", about: "Dawn's sister spotted possible stroke signs on a video call; at hospital she learned she had been having mini-strokes." },
      { id: "yt-jia", person: "Jia Wu", title: "Mini-stroke survivor, Jia Wu, shares her story of survival and recovery", channel: "American Heart Association", url: "https://www.youtube.com/watch?v=_YDf0CAkInw", duration: "2:02", about: "Jia's mini-strokes went undiagnosed at first; she was later diagnosed with Moyamoya disease." },
      { id: "yt-blue-collar", person: "A YouTube creator", title: "My Mini-Stroke. TIA (Transient Ischemic Attack)", channel: "Blue Collar Logic", url: "https://www.youtube.com/watch?v=ulCbNLpm0gA", duration: "10:27", about: "A creator's own account of having a mini-stroke." },
    ],
    askDoctor: [
      "What caused mine, as far as the tests can tell?",
      "Which tablets are for life, and which are for the first few weeks?",
      "What are my blood pressure and cholesterol targets?",
      "When can I drive again?",
    ],
    related: [
      { groupId: "stroke", conditionId: "ischaemic" },
      { groupId: "heart-rhythm", conditionId: "atrial-fibrillation" },
      { groupId: "blood-pressure", conditionId: "high-blood-pressure" },
    ],
  },
};

export const strokeUnder50: LibraryCondition = {
  id: "under-50",
  title: "Stroke under 50",
  summary: "A stroke can happen at any age: one in four strokes happen to people of working age. Some causes are more common when you are younger, and the life you are getting back to often includes work, money and family.",
  facts: ["1 in 4 strokes happen at working age", "Some causes are more common in younger people", "Recovery can continue for months and years"],
  keywords: ["young", "younger", "working age", "under 50"],
  content: {
    understand: [
      article("why-young", "Why strokes happen to younger people", 5, { blurb: "A torn artery, a hole in the heart, blood that clots more easily, and the usual causes arriving early.", learnId: "u50-why", keywords: ["pfo", "dissection", "cause", "causes"] }),
      article("tests", "The extra tests younger people may have", 4, { blurb: "A bubble test, blood tests, heart monitoring and neck scans: what each is looking for.", learnId: "u50-tests", keywords: ["bubble", "echo", "monitor"] }),
      article("too-young", "“Too young for a stroke”: what people get wrong", 3, { blurb: "A common misconception, survivors' own accounts, and why any sign means calling 999.", learnId: "u50-signs", keywords: ["signs", "missed", "fast"] }),
      article("recovery-shape", "How recovery can be different when you are younger", 4, { blurb: "Quickest at first, but it can carry on for months and years.", learnId: "u50-recovery", keywords: ["recovery", "age"] }),
    ],
    recover: [
      piece("video", "rewiring", "How the brain rewires: neuroplasticity, explained", 2, { extra: "with narration", learnId: "rewiring", mediaId: "film-rewiring", keywords: ["neuroplasticity", "rewire"] }),
      article("hidden", "The hidden effects: tiredness, memory and thinking", 5, { learnId: "u50-hidden", keywords: ["concentration", "memory", "tired", "fatigue"] }),
      article("fitness", "Getting your fitness back, safely", 4, { learnId: "u50-fitness", keywords: ["gym", "exercise", "running", "sport"] }),
      article("words", "Finding words again: aphasia and speech", 5, { learnId: "words", keywords: ["aphasia", "speech"] }),
    ],
    liveWell: [
      article("work", "Going back to work, in stages", 5, { learnId: "u50-work", keywords: ["job", "employer", "phased return"] }),
      article("money", "Sick pay, benefits and the mortgage", 5, { learnId: "u50-money", keywords: ["money", "benefits", "pay"] }),
      article("children", "Explaining your stroke to your children", 4, { learnId: "u50-children", keywords: ["kids", "children", "family"] }),
      article("driving", "Driving again, and who decides", 4, { learnId: "isch-driving", keywords: ["car", "licence", "dvla"] }),
      article("relationships", "Partners, family and friends", 4, { learnId: "u50-relationships", keywords: ["partner", "friends", "relationship", "sex"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title and channel from YouTube's oEmbed,
    // running time from the video's page, speakers from its own description.
    watch: [
      { id: "yt-uksa-young", title: "Stroke in younger people (UKSA Webinar, 9 September 2020)", kind: "video", duration: "46:44", url: "https://www.youtube.com/watch?v=VlNS-psmJTY", extra: "a recorded webinar, with people with lived experience", publisher: "Stroke Association", keywords: ["young", "younger"] },
      { id: "yt-ds-advice", title: "Advice for younger stroke survivors", kind: "video", duration: "4:11", url: "https://www.youtube.com/watch?v=c6YcDhNJrmQ", extra: "from a charity run by younger stroke survivors", publisher: "Different Strokes UK", keywords: ["young", "advice"] },
      { id: "yt-aha-work", title: "The Stroke Survivor's Guide to Returning to Work", kind: "video", duration: "2:49", url: "https://www.youtube.com/watch?v=wGMnE2Erk6s", extra: "with Dr Nneka Ifejika", publisher: "American Heart Association", keywords: ["work", "job"] },
      { id: "yt-bas-work", title: "Return to work after a stroke", kind: "video", duration: "37:44", url: "https://www.youtube.com/watch?v=zOKEVOeIza4", extra: "a talk on occupational therapy and reasonable adjustments", publisher: "Bristol After Stroke", keywords: ["work", "adjustments"] },
    ],
    sources: [STROKE_ASSOCIATION, DIFFERENT_STROKES, source(NHS, "Stroke overview, treatment and recovery pages")],
    stories: ["tom"],
    // Real people's stories of a stroke before 50. Checked 20 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-neil", person: "Neil", title: "Neil's Survivor Story - Stroke Aged 40", channel: "Different Strokes UK", url: "https://www.youtube.com/watch?v=qMyp0C-7-uc", duration: "3:31", about: "Neil had a stroke at 40. He was paralysed for two years and could not go back to work; he now walks and supports others at a London group." },
      { id: "yt-demi", person: "Demi", title: "Demi's Story- Stroke at 22", channel: "Different Strokes UK", url: "https://www.youtube.com/watch?v=fOqbU_Qolxg", duration: "8:17", about: "Demi tells her story three years after her stroke at 22." },
      { id: "yt-vicki", person: "Vicki", title: "Vicki had a stroke at just 20 years old", channel: "Stroke Association", url: "https://www.youtube.com/watch?v=ozmiTidN9Cg", duration: "1:26", about: "Feeling lost after leaving hospital, and finding a Stroke Association information pack waiting at home." },
    ],
    askDoctor: [
      "Have all the causes that are more common in younger people been checked, including my heart?",
      "Is there anything in my blood that makes clots more likely?",
      "What can I say to my employer about a phased return?",
      "Is it safe for me to exercise hard again, and when?",
    ],
    related: [
      { groupId: "stroke", conditionId: "ischaemic" },
      { groupId: "heart-rhythm", conditionId: "atrial-fibrillation" },
      { groupId: "depression", conditionId: "after-stroke" },
    ],
  },
};

export const alzheimers: LibraryCondition = {
  id: "alzheimers",
  title: "Alzheimer's disease",
  summary: "The most common cause of dementia. It usually begins with memory for recent things and moves slowly, over years. A diagnosis is the start of planning, not the end of a good life, for the person and for the family around them.",
  facts: ["The most common cause of dementia", "Starts slowly and changes over years", "Treatments can ease symptoms; support changes daily life more"],
  keywords: ["alzheimers", "memory loss", "dementia", "forgetting"],
  content: {
    understand: [
      article("what-happens", "What Alzheimer's does in the brain", 4, { blurb: "Plaques, tangles and why recent memories go first.", extra: "With a diagram", keywords: ["plaques", "memory"] }),
      article("diagnosis", "How it's diagnosed, and why it took a while", 4, { blurb: "Memory tests, scans and the memory clinic. What each step was for.", keywords: ["memory clinic", "test", "scan"] }),
      article("stages", "Early, middle and later: what each stage can look like", 5, { blurb: "A plain guide, with the reminder that nobody follows it exactly.", keywords: ["stages", "progression"] }),
      article("not-just-memory", "It isn't only memory: mood, words and finding the way", 4, { keywords: ["mood", "words", "lost"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("tablets", "The tablets: what they can and can't do", 5, { keywords: ["donepezil", "medication", "tablets"] }),
      article("keeping-sharp", "Keeping the mind active: what the evidence says", 4, { keywords: ["puzzles", "activity", "brain training"] }),
      piece("video", "routines", "Routines, labels and lists: making the house work for you", 7, { keywords: ["routine", "labels", "home"] }),
      article("other-conditions", "Hearing, eyesight and other things that make memory worse", 3, { keywords: ["hearing", "eyes", "infection"] }),
    ],
    liveWell: [
      article("telling-people", "Telling family, friends and work", 4, { keywords: ["telling", "family", "work"] }),
      article("planning", "Power of attorney and planning ahead, while it's easy", 6, { keywords: ["power of attorney", "lpa", "planning", "will"] }),
      article("driving", "Driving with a dementia diagnosis", 3, { keywords: ["car", "licence", "dvla"] }),
      article("good-days", "Good days, bad days: living well in the early years", 5, { keywords: ["living well", "mood"] }),
      article("carers", "For the person alongside: a page for family carers", 7, { keywords: ["carer", "family", "partner"] }),
    ],
    watch: [
      piece("podcast", "early-days", "Two families talk about the first year after diagnosis", 24),
      piece("animation", "in-pictures", "What Alzheimer's does to the brain, in pictures", 4),
      piece("audio", "calm-evening", "A calm ten minutes for a restless evening", 10, { extra: "read aloud" }),
    ],
    sources: [source(NHS, "Alzheimer's disease: symptoms, diagnosis and treatment"), ALZHEIMERS_SOCIETY, DEMENTIA_UK],
    stories: ["hannah"],
    askDoctor: [
      "Which type of dementia is it, and how sure is the team?",
      "Are the tablets right for me, and what should I watch for?",
      "Who is our contact between appointments?",
      "What should we put in place now, while it's straightforward?",
    ],
    related: [
      { groupId: "dementia", conditionId: "mild-cognitive-impairment" },
      { groupId: "dementia", conditionId: "vascular" },
      { groupId: "depression", conditionId: "depression" },
    ],
  },
};

export const vascularDementia: LibraryCondition = {
  id: "vascular",
  title: "Vascular dementia",
  summary: "Dementia caused by reduced blood flow to the brain, often after strokes or many tiny ones. It tends to change in steps rather than a slow slope, and the same things that protect the heart help to protect the brain.",
  facts: ["Often follows strokes or small vessel disease", "Changes in steps, with steadier stretches between", "Blood pressure and heart health slow it down"],
  keywords: ["vascular", "small vessel", "dementia", "after stroke"],
  content: {
    understand: [
      article("what-happens", "Blood flow, small vessels and the brain", 4, { blurb: "Why a stroke, or many tiny ones, can change thinking and memory.", extra: "With a diagram", keywords: ["blood flow", "small vessel"] }),
      article("steps", "Why it changes in steps rather than slowly", 3, { blurb: "What a step looks like, and why some stretches are steadier.", keywords: ["steps", "progression"] }),
      article("diagnosis", "How it's diagnosed, and how it differs from Alzheimer's", 4, { keywords: ["diagnosis", "scan", "alzheimers"] }),
      article("thinking-not-memory", "Planning, speed and attention: why memory isn't always first", 4, { keywords: ["planning", "slow", "attention"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("protect", "Protecting the brain: blood pressure, cholesterol, diabetes", 6, { keywords: ["blood pressure", "cholesterol", "tablets"] }),
      piece("video", "routines", "Routines, labels and lists: making the house work for you", 7, { keywords: ["routine", "labels", "home"] }),
      article("mood-apathy", "Low mood and apathy: common, and treatable", 4, { keywords: ["mood", "apathy", "depression"] }),
      article("mixed", "Mixed dementia: when it's vascular and Alzheimer's together", 3, { keywords: ["mixed"] }),
    ],
    liveWell: [
      article("home", "The house: lighting, steps and the things that help", 5, { keywords: ["home", "safety", "falls"] }),
      article("planning", "Power of attorney and planning ahead", 6, { keywords: ["power of attorney", "lpa", "planning"] }),
      article("driving", "Driving with a dementia diagnosis", 3, { keywords: ["car", "licence", "dvla"] }),
      article("carers", "For the person alongside: a page for family carers", 7, { keywords: ["carer", "family", "daughter"] }),
    ],
    watch: [
      piece("podcast", "family-voices", "A daughter and a son talk about caring", 22),
      piece("animation", "in-pictures", "Small vessels and the brain, in pictures", 3),
    ],
    sources: [source(NHS, "Vascular dementia: symptoms and treatment"), ALZHEIMERS_SOCIETY, DEMENTIA_UK, STROKE_ASSOCIATION],
    stories: ["hannah"],
    askDoctor: [
      "What is causing the reduced blood flow, and can we slow it?",
      "What are the blood pressure and cholesterol targets now?",
      "Should any tablets for memory be considered?",
      "Who can help us at home as things change?",
    ],
    related: [
      { groupId: "stroke", conditionId: "ischaemic" },
      { groupId: "dementia", conditionId: "alzheimers" },
      { groupId: "blood-pressure", conditionId: "high-blood-pressure" },
    ],
    companion: { storyId: "hannah" },
  },
};

export const lewyBodyDementia: LibraryCondition = {
  id: "lewy-body",
  title: "Lewy body dementia",
  summary: "A dementia that shares some of its features with Parkinson's: attention that comes and goes through the day, vivid visual hallucinations, movement changes and very active dreams. Knowing which dementia it is matters, because some common tablets suit it badly.",
  facts: ["Attention and alertness vary through the day", "Visual hallucinations are common and usually not frightening at first", "Some medicines used in other dementias should be avoided"],
  keywords: ["lewy", "hallucinations", "dementia", "parkinsons dementia"],
  content: {
    understand: [
      article("what-happens", "Lewy bodies, dopamine and the brain", 4, { blurb: "What the protein deposits do, and why movement and thinking are both affected.", extra: "With a diagram" }),
      article("fluctuations", "Good hours and foggy hours: the fluctuations", 3, { blurb: "Why a person can be sharp at breakfast and lost by lunch.", keywords: ["fluctuate", "fog", "alert"] }),
      article("hallucinations", "Seeing things that aren't there", 4, { blurb: "What the hallucinations are like, and how families can respond.", keywords: ["hallucinations", "seeing things"] }),
      article("diagnosis", "How it's diagnosed, and why it's often missed at first", 4, { keywords: ["diagnosis", "missed", "parkinsons"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("medicines", "Medicines to use with care, and the ones that help", 5, { keywords: ["antipsychotic", "tablets", "medication"] }),
      article("sleep", "Acting out dreams: REM sleep behaviour disorder", 4, { keywords: ["dreams", "sleep", "shouting"] }),
      piece("video", "movement", "Keeping moving: exercise with Lewy body dementia", 7, { keywords: ["exercise", "walking", "stiff"] }),
      article("blood-pressure", "Dizziness on standing, and what helps", 3, { keywords: ["dizzy", "faint", "blood pressure"] }),
    ],
    liveWell: [
      article("responding", "Responding to hallucinations without arguing", 4, { keywords: ["hallucinations", "family"] }),
      article("home", "The house: lighting, mirrors and the things that help", 5, { keywords: ["home", "lighting", "falls"] }),
      article("planning", "Power of attorney and planning ahead", 6, { keywords: ["power of attorney", "lpa", "planning"] }),
      article("carers", "For the person alongside: a page for family carers", 7, { keywords: ["carer", "family", "partner"] }),
    ],
    watch: [
      piece("podcast", "family-voices", "Two carers talk about the good hours and the foggy ones", 24),
      piece("animation", "in-pictures", "Lewy bodies, in pictures", 3),
    ],
    sources: [source(NHS, "Dementia with Lewy bodies: symptoms and treatment"), LEWY_BODY_SOCIETY, ALZHEIMERS_SOCIETY, DEMENTIA_UK],
    stories: [],
    askDoctor: [
      "Which medicines should we avoid, and is that written in the notes?",
      "What can help with the hallucinations, and when should we worry?",
      "Could a Parkinson's physio or nurse help with movement?",
      "What helps with the dreams and the nights?",
    ],
    related: [
      { groupId: "parkinsons", conditionId: "parkinsons-disease" },
      { groupId: "dementia", conditionId: "alzheimers" },
      { groupId: "sleep", conditionId: "insomnia" },
    ],
  },
};

export const mildCognitiveImpairment: LibraryCondition = {
  id: "mild-cognitive-impairment",
  title: "Mild cognitive impairment",
  summary: "Memory or thinking that is worse than expected for your age, but not enough to get in the way of everyday life. Some people stay the same for years, some improve, and some go on to develop dementia. The years in between are worth using well.",
  facts: ["More than ordinary ageing, less than dementia", "Many people stay stable or improve", "Hearing, sleep, mood and medicines are worth checking first"],
  keywords: ["mci", "memory", "forgetful", "forgetting", "mild cognitive"],
  content: {
    understand: [
      article("forgetting-words", "Forgetting words versus early dementia: how to tell", 4, { keywords: ["forgetting", "memory", "words"] }),
      article("what-mci-is", "What mild cognitive impairment is, and isn't", 4, { blurb: "The line between ordinary forgetting, MCI and dementia, in plain words.", keywords: ["mci", "dementia", "ageing"] }),
      article("tests", "The memory tests, and what the scores mean", 3, { keywords: ["test", "score", "memory clinic"] }),
      article("other-causes", "Things that mimic it: hearing, thyroid, mood, medicines", 4, { keywords: ["hearing", "thyroid", "depression", "medicines"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("brain-health", "What protects the brain: the evidence, honestly", 6, { keywords: ["exercise", "diet", "protect"] }),
      piece("video", "memory-aids", "Memory aids that actually get used", 6, { keywords: ["notes", "calendar", "phone", "aids"] }),
      article("hearing", "Hearing aids and the brain", 3, { keywords: ["hearing", "hearing aids"] }),
      article("follow-up", "Being followed up: what the clinic is watching for", 3, { keywords: ["follow up", "clinic", "review"] }),
    ],
    liveWell: [
      article("worry", "Living with not knowing", 4, { keywords: ["worry", "anxious", "future"] }),
      article("telling-people", "Whether, and how, to tell people", 3, { keywords: ["telling", "family", "work"] }),
      article("planning", "Planning ahead while it's easy", 5, { keywords: ["power of attorney", "planning"] }),
      article("sleep", "Sleep, and why it matters for memory", 4, { keywords: ["sleep", "night"] }),
    ],
    watch: [
      piece("podcast", "in-between", "Living in the in-between: two people with MCI talk", 20),
      piece("animation", "in-pictures", "Memory and the brain, in pictures", 3),
    ],
    sources: [source(NHS, "Memory loss and mild cognitive impairment"), ALZHEIMERS_SOCIETY, DEMENTIA_UK],
    stories: [],
    askDoctor: [
      "Have the other causes of memory trouble been ruled out?",
      "How often will I be reviewed, and by whom?",
      "What can I do now that makes a real difference?",
      "Should I tell the DVLA, and does it affect my driving?",
    ],
    related: [
      { groupId: "dementia", conditionId: "alzheimers" },
      { groupId: "sleep", conditionId: "insomnia" },
      { groupId: "depression", conditionId: "depression" },
    ],
  },
};

export const essentialTremor: LibraryCondition = {
  id: "essential-tremor",
  title: "Essential tremor",
  summary: "A shaking of the hands, head or voice that shows up when you use them: holding a cup, writing, pointing. It is far more common than Parkinson's, often runs in families, and is not the same condition, even though it is often mistaken for it.",
  facts: ["Shakes on movement, not at rest", "Often runs in families", "Not Parkinson's, and doesn't become it"],
  keywords: ["tremor", "shaking", "shaky hands", "essential tremor"],
  content: {
    understand: [
      article("what-it-is", "What essential tremor is", 3, { blurb: "A fault in the brain's timing circuits, not in the hands.", keywords: ["cause", "brain"] }),
      article("not-parkinsons", "Essential tremor or Parkinson's? The difference", 3, { blurb: "Resting versus moving, and the other clues a neurologist looks for.", extra: "2 short clips", keywords: ["parkinsons", "difference"] }),
      article("families", "Why it runs in families", 3, { keywords: ["family", "genetic", "inherited"] }),
      article("worse-days", "Why it's worse when you're tired, stressed or caffeinated", 3, { keywords: ["stress", "caffeine", "tired"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("tablets", "The tablets that can calm it, and their trade-offs", 5, { keywords: ["propranolol", "primidone", "tablets"] }),
      article("procedures", "Focused ultrasound and deep brain stimulation", 5, { keywords: ["ultrasound", "dbs", "surgery"] }),
      piece("video", "steadier-hands", "Steadier hands: weighted cutlery, grips and tricks", 6, { keywords: ["cutlery", "cup", "writing", "aids"] }),
    ],
    liveWell: [
      article("out-and-about", "Eating out, signing things and other public moments", 4, { keywords: ["restaurant", "signature", "public"] }),
      article("alcohol", "Alcohol and tremor: the honest version", 3, { keywords: ["alcohol", "drink"] }),
      article("voice", "When it affects your voice or head", 3, { keywords: ["voice", "head"] }),
      article("telling-people", "Telling people, so they stop guessing", 3, { keywords: ["telling", "embarrassed"] }),
    ],
    watch: [
      piece("podcast", "shaky-hands", "Living with shaky hands: two people talk", 18),
      piece("animation", "in-pictures", "Where tremor comes from, in pictures", 3),
    ],
    sources: [source(NHS, "Tremor: causes and treatment"), TREMOR_FOUNDATION],
    stories: [],
    askDoctor: [
      "Are you sure it's essential tremor and not Parkinson's?",
      "Is a tablet worth trying for me, and which one?",
      "Would I be a candidate for focused ultrasound or DBS?",
      "Is there a tremor clinic or a specialist nurse I could see?",
    ],
    related: [
      { groupId: "parkinsons", conditionId: "parkinsons-disease" },
      { groupId: "parkinsons", conditionId: "dystonia" },
      { groupId: "anxiety", conditionId: "anxiety" },
    ],
  },
};

export const dystonia: LibraryCondition = {
  id: "dystonia",
  title: "Dystonia",
  summary: "Muscles that contract when they shouldn't, pulling part of the body into a twist or a posture: a neck that turns, eyelids that squeeze shut, a hand that cramps when writing. It is a brain condition, not a muscle one, and botulinum toxin injections help most people.",
  facts: ["Muscles contract against your will", "Neck, eyes, voice or a hand are the usual places", "Botulinum toxin injections are the main treatment"],
  keywords: ["dystonia", "twisting", "neck", "spasm", "cramp"],
  content: {
    understand: [
      article("what-it-is", "What dystonia is", 4, { blurb: "The brain's movement planning gone slightly wrong, and why the muscles get the blame.", keywords: ["cause", "brain"] }),
      article("types", "Neck, eyes, voice, hand: the types", 4, { blurb: "Cervical dystonia, blepharospasm, writer's cramp and the rest.", keywords: ["cervical", "blepharospasm", "writers cramp"] }),
      article("diagnosis", "How it's diagnosed", 3, { keywords: ["diagnosis", "neurologist"] }),
      article("sensory-trick", "The sensory trick: why a touch can stop it", 3, { keywords: ["trick", "touch"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("botox", "Botulinum toxin injections: what to expect", 5, { keywords: ["botox", "injections"] }),
      article("tablets", "Tablets, and when they're used", 4, { keywords: ["tablets", "medication"] }),
      piece("video", "physio", "Physiotherapy for dystonia: what helps", 7, { keywords: ["physio", "exercise", "stretch"] }),
      article("dbs", "Deep brain stimulation for dystonia", 4, { keywords: ["dbs", "surgery"] }),
    ],
    liveWell: [
      article("pain", "Pain with dystonia, and what eases it", 4, { keywords: ["pain", "ache"] }),
      article("work", "Working with dystonia: desks, screens and driving", 4, { keywords: ["work", "driving", "desk"] }),
      article("mood", "Mood, confidence and being looked at", 4, { keywords: ["mood", "confidence", "anxious"] }),
      article("telling-people", "Explaining dystonia to other people", 3, { keywords: ["telling", "explain"] }),
    ],
    watch: [
      piece("podcast", "dystonia-voices", "Living with dystonia: two people talk", 20),
      piece("animation", "in-pictures", "Dystonia in pictures", 3),
    ],
    sources: [source(NHS, "Dystonia: symptoms and treatment"), DYSTONIA_UK],
    stories: [],
    askDoctor: [
      "Which type do I have, and could anything else be causing it?",
      "Would injections help me, and how often?",
      "Is there a physio who knows dystonia?",
      "Could DBS be an option if injections stop working?",
    ],
    related: [
      { groupId: "parkinsons", conditionId: "parkinsons-disease" },
      { groupId: "parkinsons", conditionId: "essential-tremor" },
      { groupId: "back-neck", conditionId: "back-pain" },
    ],
  },
};

export const relapsingRemittingMs: LibraryCondition = {
  id: "relapsing-remitting",
  title: "Relapsing-remitting MS",
  summary: "The most common pattern of multiple sclerosis: flare-ups of new or worse symptoms, called relapses, with recovery in between. Modern treatments can cut the number of relapses a great deal, which is why starting them early matters.",
  facts: ["About 85% of people start with this pattern", "Relapses come and go; recovery between them can be full", "Disease-modifying treatments reduce relapses"],
  keywords: ["ms", "multiple sclerosis", "relapse", "flare"],
  content: {
    understand: [
      article("what-happens", "What MS does to the nerves", 4, { blurb: "Myelin, the immune system and why signals slow down or stop.", extra: "With a diagram", keywords: ["myelin", "immune", "nerves"] }),
      article("relapse", "What a relapse is, and what isn't one", 4, { blurb: "New symptoms lasting more than a day, versus a hot day or an infection bringing old ones back.", keywords: ["relapse", "flare", "pseudo"] }),
      article("diagnosis", "MRI, lumbar puncture and the diagnosis", 4, { keywords: ["mri", "lumbar puncture", "diagnosis"] }),
      article("symptoms", "The symptoms nobody warns you about", 5, { blurb: "Fatigue, numbness, eyesight, bladder, heat. Why they vary so much.", keywords: ["fatigue", "numb", "bladder", "heat", "vision"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("dmts", "Disease-modifying treatments: the choices, plainly", 7, { keywords: ["dmt", "injection", "infusion", "tablets"] }),
      article("steroids", "Steroids for a relapse: what they do and don't do", 3, { keywords: ["steroids", "relapse"] }),
      piece("video", "fatigue", "MS fatigue: pacing, cooling and what helps", 7, { keywords: ["fatigue", "tired", "energy"] }),
      piece("exercise", "moving", "Exercise with MS: what kind, how much", 0, { keywords: ["exercise", "strength", "balance"] }),
    ],
    liveWell: [
      article("heat", "Heat, baths and summer: staying cool", 3, { keywords: ["heat", "summer", "cooling"] }),
      article("work", "Work, disclosure and reasonable adjustments", 5, { keywords: ["work", "employer", "adjustments"] }),
      article("family", "Pregnancy, family and MS", 5, { keywords: ["pregnancy", "baby", "family"] }),
      article("mood", "Mood and worry with a condition that comes and goes", 4, { keywords: ["mood", "anxious", "uncertainty"] }),
    ],
    watch: [
      piece("podcast", "first-year", "The first year with MS: two people talk", 24),
      piece("animation", "in-pictures", "Myelin and the nerves, in pictures", 3),
      piece("audio", "cool-down", "A ten-minute rest for MS fatigue", 10, { extra: "read aloud" }),
    ],
    sources: [source(NHS, "Multiple sclerosis: symptoms, diagnosis and treatment"), MS_SOCIETY, MS_TRUST],
    stories: [],
    askDoctor: [
      "Which disease-modifying treatment suits me, and how soon can I start?",
      "What counts as a relapse I should report, and who do I call?",
      "How often will I have an MRI?",
      "Is there an MS nurse I can contact between appointments?",
    ],
    related: [
      { groupId: "multiple-sclerosis", conditionId: "progressive" },
      { groupId: "nerves", conditionId: "peripheral-neuropathy" },
      { groupId: "depression", conditionId: "depression" },
    ],
  },
};

export const progressiveMs: LibraryCondition = {
  id: "progressive",
  title: "Progressive MS",
  summary: "Multiple sclerosis in which symptoms build up gradually, with few or no relapses: either from the start (primary progressive) or after years of relapsing-remitting MS (secondary progressive). Fewer treatments change its course, but a great deal can be done about the symptoms.",
  facts: ["Symptoms build gradually rather than in flares", "Primary progressive from the start; secondary progressive follows relapsing MS", "Symptom treatment and rehab make the biggest difference day to day"],
  keywords: ["ms", "multiple sclerosis", "progressive", "primary progressive", "secondary progressive"],
  content: {
    understand: [
      article("what-happens", "What progressive MS does to the nerves", 4, { blurb: "Less inflammation, more slow loss. Why the treatments are different.", extra: "With a diagram" }),
      article("two-kinds", "Primary and secondary progressive: the difference", 3, { keywords: ["primary", "secondary"] }),
      article("pace", "How fast is it? What the evidence says", 4, { blurb: "Why nobody can give you a timetable, and what the averages mean.", keywords: ["progression", "pace", "future"] }),
      article("symptoms", "Walking, bladder, fatigue, thinking: the common symptoms", 5, { keywords: ["walking", "bladder", "fatigue", "memory"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("treatments", "Treatments that slow progressive MS", 5, { keywords: ["ocrelizumab", "siponimod", "treatment"] }),
      piece("video", "physio", "Physiotherapy and keeping mobile", 8, { keywords: ["physio", "walking", "stick", "exercise"] }),
      article("bladder", "Bladder and bowel: the treatments that work", 5, { keywords: ["bladder", "bowel", "continence"] }),
      article("spasticity", "Stiffness and spasms: stretches and medicines", 4, { keywords: ["stiff", "spasm", "spasticity", "baclofen"] }),
    ],
    liveWell: [
      article("aids", "Sticks, scooters and the house: getting the right help early", 5, { keywords: ["aids", "wheelchair", "home", "ot"] }),
      article("energy", "Energy: deciding where it goes", 4, { keywords: ["fatigue", "pacing", "energy"] }),
      article("work-money", "Work, benefits and money", 5, { keywords: ["work", "benefits", "pip"] }),
      article("carers", "For partners and family", 6, { keywords: ["carer", "partner", "family"] }),
    ],
    watch: [
      piece("podcast", "long-road", "Living with progressive MS: two people talk", 24),
      piece("animation", "in-pictures", "Myelin and the nerves, in pictures", 3),
      piece("audio", "cool-down", "A ten-minute rest for MS fatigue", 10, { extra: "read aloud" }),
    ],
    sources: [source(NHS, "Multiple sclerosis: symptoms, diagnosis and treatment"), MS_SOCIETY, MS_TRUST],
    stories: [],
    askDoctor: [
      "Is there a treatment that could slow my MS, and am I eligible?",
      "Who is in my MS team, and how do I reach them?",
      "Can I be referred for physio, continence or occupational therapy?",
      "What should I watch for that would change the plan?",
    ],
    related: [
      { groupId: "multiple-sclerosis", conditionId: "relapsing-remitting" },
      { groupId: "brain-spinal-injury", conditionId: "spinal-cord" },
      { groupId: "depression", conditionId: "depression" },
    ],
  },
};
