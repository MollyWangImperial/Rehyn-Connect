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
  summary: "The most common cause of dementia in the UK. It usually begins with memory for recent things, and the speed it changes is different for everyone. A diagnosis is the start of planning, for the person and for the family around them.",
  facts: ["The most common cause of dementia", "Recent memories are usually affected first", "Medicines can ease symptoms for a while"],
  keywords: ["alzheimers", "memory loss", "dementia", "forgetting"],
  content: {
    understand: [
      article("what-happens", "What Alzheimer's does in the brain", 4, { blurb: "Plaques, tangles and why recent memories go first.", extra: "With a diagram", learnId: "alz-what", keywords: ["plaques", "memory"] }),
      article("diagnosis", "How it's diagnosed, and why it can take a while", 4, { blurb: "The GP, the memory service and scans: what each step is for.", learnId: "alz-diagnosis", keywords: ["memory clinic", "test", "scan"] }),
      article("stages", "Early, middle and later: what each stage can look like", 4, { blurb: "A plain guide, with the reminder that nobody follows it exactly.", learnId: "alz-stages", keywords: ["stages", "progression"] }),
      article("not-just-memory", "It isn't only memory: words, time and feelings", 4, { learnId: "alz-not-memory", keywords: ["mood", "words", "lost"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("tablets", "The tablets: what they can and can't do", 5, { learnId: "alz-tablets", keywords: ["donepezil", "medication", "tablets", "lecanemab", "donanemab"] }),
      article("keeping-sharp", "Keeping the mind active: what the evidence says", 4, { learnId: "alz-active", keywords: ["puzzles", "activity", "brain training", "cst"] }),
      article("routines", "Routines, labels and lists: making the day easier", 4, { learnId: "dem-routines", keywords: ["routine", "labels", "home"] }),
      article("other-conditions", "Infections, hearing, eyesight and other things that make memory worse", 4, { learnId: "alz-other", keywords: ["hearing", "eyes", "infection"] }),
    ],
    liveWell: [
      article("telling-people", "Telling family, friends and work", 4, { learnId: "dem-telling", keywords: ["telling", "family", "work"] }),
      article("planning", "Power of attorney and planning ahead, while it's easy", 5, { learnId: "dem-planning", keywords: ["power of attorney", "lpa", "planning", "will"] }),
      article("driving", "Driving with a dementia diagnosis", 3, { learnId: "dem-driving", keywords: ["car", "licence", "dvla"] }),
      article("good-days", "Good days: living well in the early years", 4, { learnId: "alz-good-days", keywords: ["living well", "mood"] }),
      article("carers", "For the person alongside: a page for family carers", 4, { learnId: "dem-carers", keywords: ["carer", "family", "partner"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title and channel from YouTube's oEmbed,
    // running time from the video's page, speakers from its own description.
    watch: [
      { id: "yt-as-alz", title: "What is Alzheimer's disease?", kind: "video", duration: "4:05", url: "https://www.youtube.com/watch?v=wfLP8fFrOp0", extra: "an animation of plaques and tangles", publisher: "Alzheimer's Society", keywords: ["plaques", "tangles"] },
      { id: "yt-ted-alz", title: "What is Alzheimer's disease? - Ivan Seah Yu Jun", kind: "video", duration: "3:49", url: "https://www.youtube.com/watch?v=yJXTXN4xrI8", extra: "a lesson by Ivan Seah Yu Jun", publisher: "TED-Ed", keywords: ["brain"] },
      { id: "yt-aruk-dementia", title: "What is dementia? Alzheimer's Research UK", kind: "video", duration: "4:05", url: "https://www.youtube.com/watch?v=HobxLbPhrMc", extra: "an animation of the diseases that cause dementia", publisher: "Alzheimer's Research UK", keywords: ["dementia"] },
      { id: "yt-jhm-alz", title: "How Do You Know If You Have Alzheimer Disease", kind: "video", duration: "6:38", url: "https://www.youtube.com/watch?v=NGxsIzRseWE", extra: "on early symptoms, and when to get checked", publisher: "Johns Hopkins Medicine", keywords: ["symptoms"] },
    ],
    sources: [source(NHS, "Alzheimer's disease: symptoms, diagnosis and treatment"), ALZHEIMERS_SOCIETY, DEMENTIA_UK],
    stories: ["hannah"],
    // Real people's stories of Alzheimer's disease. Checked 20 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-raymond", person: "Raymond", title: "Raymond and Cynthia's vow since his diagnosis of Alzheimer's disease in 2017", channel: "Alzheimer's Society", url: "https://www.youtube.com/watch?v=jwLZhoqDhH0", duration: "4:09", about: "Raymond and Cynthia have been married for 55 years; art is helping Raymond live with dementia." },
      { id: "yt-frank", person: "Frank", title: "Alison & Frank's story | The impact of Alzheimer's disease", channel: "Alzheimer's Research UK", url: "https://www.youtube.com/watch?v=pb-peaJVR7M", duration: "5:46", about: "Frank was diagnosed in 2020; he and Alison talk about how it has changed their life together." },
      { id: "yt-cindy", person: "Cindy", title: "Living with Alzheimer's disease", channel: "Mayo Clinic", url: "https://www.youtube.com/watch?v=yeC_91VABgs", duration: "3:27", about: "Cindy, a longtime nurse and nurse educator, was diagnosed with young-onset Alzheimer's disease in 2018." },
    ],
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
  summary: "Dementia caused by reduced blood flow to the brain, often after a stroke or through the small blood vessels deep inside it. It can change in steps, with steady stretches in between, and treating the cause can help stop it getting worse.",
  facts: ["The second most common type of dementia", "Can change in steps, with steady stretches between", "Treating the cause can help slow it down"],
  keywords: ["vascular", "small vessel", "dementia", "after stroke"],
  content: {
    understand: [
      article("what-happens", "Blood flow, small vessels and the brain", 4, { blurb: "Why a stroke, or the small vessels deep inside the brain, can change thinking and memory.", extra: "With a diagram", learnId: "vasc-what", keywords: ["blood flow", "small vessel"] }),
      article("steps", "Why it can change in steps", 3, { blurb: "What a step looks like, and why some stretches are steadier.", learnId: "vasc-steps", keywords: ["steps", "progression"] }),
      article("diagnosis", "How it's diagnosed, and how it differs from Alzheimer's", 4, { learnId: "vasc-diagnosis", keywords: ["diagnosis", "scan", "alzheimers"] }),
      article("thinking-not-memory", "Planning, speed and attention: why memory isn't always first", 4, { learnId: "vasc-thinking", keywords: ["planning", "slow", "attention"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("protect", "Treating the cause: blood pressure, cholesterol and clots", 5, { learnId: "vasc-protect", keywords: ["blood pressure", "cholesterol", "tablets"] }),
      article("routines", "Routines, labels and lists: making the day easier", 4, { learnId: "dem-routines", keywords: ["routine", "labels", "home"] }),
      article("mood-apathy", "Low mood and apathy: common, and there is help", 4, { learnId: "vasc-mood", keywords: ["mood", "apathy", "depression"] }),
      article("mixed", "Mixed dementia: when it's vascular and Alzheimer's together", 3, { learnId: "vasc-mixed", keywords: ["mixed"] }),
    ],
    liveWell: [
      article("home", "The house: lighting, floors and the things that help", 4, { learnId: "dem-home", keywords: ["home", "safety", "falls"] }),
      article("planning", "Power of attorney and planning ahead", 5, { learnId: "dem-planning", keywords: ["power of attorney", "lpa", "planning"] }),
      article("driving", "Driving with a dementia diagnosis", 3, { learnId: "dem-driving", keywords: ["car", "licence", "dvla"] }),
      article("carers", "For the person alongside: a page for family carers", 4, { learnId: "dem-carers", keywords: ["carer", "family", "daughter"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title and channel from YouTube's oEmbed,
    // running time from the video's page, speakers from its own description.
    watch: [
      { id: "yt-as-vascular", title: "What is vascular dementia?", kind: "video", duration: "3:21", url: "https://www.youtube.com/watch?v=GdkU5vCIpaU", extra: "an animation", publisher: "Alzheimer's Society", keywords: ["vascular", "blood supply"] },
      { id: "yt-bhf-vascular", title: "Vascular dementia", kind: "video", duration: "2:04", url: "https://www.youtube.com/watch?v=G_ZohkndikU", extra: "an animation of the symptoms, causes and treatment", publisher: "British Heart Foundation", keywords: ["vascular", "symptoms"] },
      { id: "yt-mayo-vascular", title: "Mayo Clinic Minute - What is vascular dementia?", kind: "video", duration: "1:05", url: "https://www.youtube.com/watch?v=Q-kourqRrPQ", extra: "with Dr Stephen English, neurologist", publisher: "Mayo Clinic", keywords: ["vascular", "risk"] },
    ],
    sources: [source(NHS, "Vascular dementia: symptoms and treatment"), ALZHEIMERS_SOCIETY, DEMENTIA_UK, STROKE_ASSOCIATION],
    stories: ["hannah"],
    // Real people's stories of vascular dementia. Checked 20 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-olive", person: "Olive", title: "Olive's story: living with vascular dementia", channel: "Alzheimer's Research UK", url: "https://www.youtube.com/watch?v=9luNs6AvQK8", duration: "3:48", about: "Olive and her husband Ronnie talk about her diagnosis, finding the right words, and the future." },
      { id: "yt-bob", person: "Bob", title: "Knowing when to ask for help: Bob's story of vascular dementia", channel: "Dementia UK", url: "https://www.youtube.com/watch?v=yitFv9JHxgw", duration: "21:53", about: "Bob, 85, has cared for his wife Jan since her vascular dementia diagnosis after a stroke, and talks about accepting help." },
      { id: "yt-audrey", person: "Audrey", title: "Audrey and Alan's story of living with vascular dementia - Alzheimer's Society", channel: "Alzheimer's Society", url: "https://www.youtube.com/watch?v=f9R5s3Tf4VQ", duration: "3:40", about: "Audrey developed vascular dementia after a stroke; she and Alan share their story." },
    ],
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
  },
};

export const lewyBodyDementia: LibraryCondition = {
  id: "lewy-body",
  title: "Lewy body dementia",
  summary: "A dementia that shares some of its features with Parkinson's: alertness that comes and goes through the day, vivid visual hallucinations, movement changes and very active dreams. Knowing which dementia it is matters, because some common medicines can cause serious reactions.",
  facts: ["Alertness can swing over hours or minutes", "Seeing things is a common early symptom", "Antipsychotics are avoided whenever possible"],
  keywords: ["lewy", "hallucinations", "dementia", "parkinsons dementia"],
  content: {
    understand: [
      article("what-happens", "Lewy bodies and the brain", 4, { blurb: "What the protein deposits do, and why movement and thinking are both affected.", extra: "With a diagram", learnId: "lewy-what" }),
      article("fluctuations", "Good hours and foggy hours: the fluctuations", 3, { blurb: "Why a person can be alert at breakfast and foggy by lunch.", learnId: "lewy-fluctuations", keywords: ["fluctuate", "fog", "alert"] }),
      article("hallucinations", "Seeing things that aren't there", 4, { blurb: "What the hallucinations are like, and when they need help.", learnId: "lewy-hallucinations", keywords: ["hallucinations", "seeing things"] }),
      article("diagnosis", "How it's diagnosed, and why it's often missed at first", 4, { learnId: "lewy-diagnosis", keywords: ["diagnosis", "missed", "parkinsons"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("medicines", "Medicines to use with care, and the ones that may help", 5, { learnId: "lewy-medicines", keywords: ["antipsychotic", "tablets", "medication"] }),
      article("sleep", "Acting out dreams: REM sleep behaviour disorder", 4, { learnId: "lewy-sleep", keywords: ["dreams", "sleep", "shouting"] }),
      article("movement", "Movement, falls and staying active", 4, { learnId: "lewy-movement", keywords: ["exercise", "walking", "stiff", "falls"] }),
      article("blood-pressure", "Dizziness on standing, and what helps", 3, { learnId: "lewy-standing", keywords: ["dizzy", "faint", "blood pressure"] }),
    ],
    liveWell: [
      article("responding", "Responding to hallucinations without arguing", 4, { learnId: "lewy-responding", keywords: ["hallucinations", "family"] }),
      article("home", "The house: lighting, mirrors and the things that help", 4, { learnId: "lewy-home", keywords: ["home", "lighting", "falls"] }),
      article("planning", "Power of attorney and planning ahead", 5, { learnId: "dem-planning", keywords: ["power of attorney", "lpa", "planning"] }),
      article("carers", "For the person alongside: a page for family carers", 4, { learnId: "dem-carers", keywords: ["carer", "family", "partner"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title and channel from YouTube's oEmbed,
    // running time from the video's page, speakers from its own description.
    watch: [
      { id: "yt-as-dlb", title: "What is dementia with Lewy bodies?", kind: "video", duration: "2:46", url: "https://www.youtube.com/watch?v=hhE2dyeHP54", extra: "an animation", publisher: "Alzheimer's Society", keywords: ["lewy", "protein"] },
      { id: "yt-aruk-dlb", title: "What is dementia with Lewy bodies? - Dr Jay Amin", kind: "video", duration: "0:59", url: "https://www.youtube.com/watch?v=tNnl0_dswDo", extra: "with researcher Dr Jay Amin", publisher: "Alzheimer's Research UK", keywords: ["lewy"] },
      { id: "yt-mayo-lbd", title: "Mayo Clinic Minute: What is Lewy body dementia?", kind: "video", duration: "1:07", url: "https://www.youtube.com/watch?v=wM-T4HWbv8Q", extra: "with Dr Brad Boeve", publisher: "Mayo Clinic", keywords: ["lewy", "diagnosis"] },
      { id: "yt-ncl-mckeith", title: "Dementia with Lewy Bodies - Ian McKeith", kind: "video", duration: "5:23", url: "https://www.youtube.com/watch?v=Hy0lpzZVumM", extra: "with Professor Ian McKeith, on 30 years of research", publisher: "Newcastle University", keywords: ["lewy", "research"] },
    ],
    sources: [source(NHS, "Dementia with Lewy bodies: symptoms and treatment"), LEWY_BODY_SOCIETY, ALZHEIMERS_SOCIETY, DEMENTIA_UK],
    stories: [],
    // Real people's stories of Lewy body dementia. Checked 20 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-des", person: "Des", title: "The symptoms of dementia with Lewy bodies: Des' story", channel: "Alzheimer's Research UK", url: "https://www.youtube.com/watch?v=zJNbH43KavA", duration: "2:28", about: "Des was diagnosed in 2016; he and his wife Valli explain some of his symptoms and how they affect him." },
      { id: "yt-roy", person: "Roy", title: "Living with LBD: A short film", channel: "Rare Dementia Support", url: "https://www.youtube.com/watch?v=Axn4FvlWFds", duration: "3:25", about: "Roy, who lives with Lewy body dementia, and his wife Mihoko share their story and advice for others." },
      { id: "yt-mayo-living", person: "A family", title: "Living with Lewy Body Dementia - Mayo Clinic", channel: "Mayo Clinic", url: "https://www.youtube.com/watch?v=RSRbR1R4mz0", duration: "2:58", about: "A family describes how the condition came on little by little." },
    ],
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
  summary: "Memory or thinking problems that are noticeable, but not enough to get in the way of everyday life. Some people stay the same, about 4 in 10 get better, and some go on to develop dementia. Other causes, like sleep, mood and medicines, are worth checking.",
  facts: ["More than ordinary ageing, less than dementia", "About 4 in 10 people get better", "Sleep, mood, hearing and medicines are worth checking"],
  keywords: ["mci", "memory", "forgetful", "forgetting", "mild cognitive"],
  content: {
    understand: [
      article("forgetting-words", "Everyday forgetting, or something more: how to tell", 4, { learnId: "mci-forgetting", keywords: ["forgetting", "memory", "words"] }),
      article("what-mci-is", "What mild cognitive impairment is, and isn't", 4, { blurb: "The line between ordinary forgetting, MCI and dementia, in plain words.", learnId: "mci-what", keywords: ["mci", "dementia", "ageing"] }),
      article("tests", "The memory tests, and what they look at", 3, { learnId: "mci-tests", keywords: ["test", "memory clinic"] }),
      article("other-causes", "Things that mimic it: sleep, thyroid, mood, medicines", 4, { learnId: "mci-mimics", keywords: ["hearing", "thyroid", "depression", "medicines"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("brain-health", "What protects the brain: the evidence, honestly", 5, { learnId: "mci-protect", keywords: ["exercise", "diet", "protect"] }),
      article("memory-aids", "Memory aids that actually get used", 4, { learnId: "mci-aids", keywords: ["notes", "calendar", "phone", "aids"] }),
      article("hearing", "Hearing aids and the brain", 3, { learnId: "mci-hearing", keywords: ["hearing", "hearing aids"] }),
      article("follow-up", "Being followed up: what the clinic is watching for", 3, { learnId: "mci-followup", keywords: ["follow up", "clinic", "review"] }),
    ],
    liveWell: [
      article("worry", "Living with not knowing", 4, { learnId: "mci-worry", keywords: ["worry", "anxious", "future"] }),
      article("telling-people", "Whether, and how, to tell people", 3, { learnId: "mci-telling", keywords: ["telling", "family", "work", "driving"] }),
      article("planning", "Planning ahead while it's easy", 5, { learnId: "dem-planning", keywords: ["power of attorney", "planning"] }),
      article("sleep", "Sleep, and why it matters for memory", 4, { learnId: "mci-sleep", keywords: ["sleep", "night"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title and channel from YouTube's oEmbed,
    // running time from the video's page, speakers from its own description.
    watch: [
      { id: "yt-nhse-mci", title: "Mild Cognitive Impairment (MCI) - A Guide for the Public", kind: "video", duration: "3:26", url: "https://www.youtube.com/watch?v=mudsX6ODwyw", extra: "with people living with MCI and professionals", publisher: "NHS England", keywords: ["mci"] },
      { id: "yt-nia-mci", title: "What is Mild Cognitive Impairment?", kind: "video", duration: "3:16", url: "https://www.youtube.com/watch?v=5ziltqjp3Zs", extra: "an explainer", publisher: "National Institute on Aging", keywords: ["mci"] },
      { id: "yt-cc-mci", title: "6 Symptoms of Mild Cognitive Impairment", kind: "video", duration: "2:03", url: "https://www.youtube.com/watch?v=wUnHbpEJlBA", extra: "an explainer", publisher: "Cleveland Clinic", keywords: ["symptoms"] },
      { id: "yt-mayo-mci", title: "Mild Cognitive Impairment & Dementia", kind: "video", duration: "2:35", url: "https://www.youtube.com/watch?v=eYIvUaaVG8g", extra: "with Glenn E. Smith, PhD, neuropsychologist", publisher: "Mayo Clinic", keywords: ["mci", "dementia"] },
    ],
    sources: [source(NHS, "Memory loss and mild cognitive impairment"), ALZHEIMERS_SOCIETY, DEMENTIA_UK],
    stories: [],
    // Real people's stories of mild cognitive impairment. Checked 20 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-leah", person: "Leah", title: "Leah Fisher: Learning to Live with Uncertainty After an MCI Diagnosis | Patient Perspectives", channel: "Being Patient", url: "https://www.youtube.com/watch?v=DRFtgT9XIyQ", duration: "33:59", about: "Leah talks about dealing with uncertainty after a diagnosis of mild cognitive impairment." },
      { id: "yt-dale", person: "Dale", title: "A Former Prosecutor's Journey With Mild Cognitive Impairment", channel: "Being Patient", url: "https://www.youtube.com/watch?v=9xUqab_g1HI", duration: "32:43", about: "Former trial attorney Dale, 64, shares his story of living fully with mild cognitive impairment." },
      { id: "yt-wendy", person: "Wendy", title: "Early signs of dementia - what you need to know | Alzheimer's Research UK", channel: "Alzheimer's Research UK", url: "https://www.youtube.com/watch?v=yZcEs7xwrx0", duration: "5:21", about: "Melissa's mum Wendy was first diagnosed with mild cognitive impairment, before dementia symptoms became clearer." },
    ],
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
  summary: "A rhythmic shaking, most often of the hands and arms, that shows up when you use them: holding a cup, writing, pointing. It is different from a Parkinson's tremor, some types run in families, and for many people it changes little over the years.",
  facts: ["Shows when you move, not at rest", "Some types run in families", "Medicines often help reduce it"],
  keywords: ["tremor", "shaking", "shaky hands", "essential tremor"],
  content: {
    understand: [
      article("what-it-is", "What essential tremor is", 3, { blurb: "A rhythmic tremor, most often of the hands, that usually stops in sleep.", learnId: "et-what", keywords: ["cause", "brain"] }),
      article("not-parkinsons", "Essential tremor or Parkinson's? The difference", 3, { blurb: "Moving versus resting, and the scan that can tell them apart.", learnId: "et-not-parkinsons", keywords: ["parkinsons", "difference"] }),
      article("families", "Why it can run in families", 3, { learnId: "et-families", keywords: ["family", "genetic", "inherited"] }),
      article("worse-days", "Why it's worse when you're tired, stressed or caffeinated", 3, { learnId: "et-worse", keywords: ["stress", "caffeine", "tired"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("tablets", "The tablets that can calm it, and their trade-offs", 4, { learnId: "et-tablets", keywords: ["propranolol", "primidone", "tablets"] }),
      article("procedures", "Focused ultrasound and deep brain stimulation", 4, { learnId: "et-procedures", keywords: ["ultrasound", "dbs", "surgery"] }),
      article("steadier-hands", "Steadier hands: cutlery, cups and pens", 3, { learnId: "et-hands", keywords: ["cutlery", "cup", "writing", "aids"] }),
    ],
    liveWell: [
      article("out-and-about", "Eating out, signing things and other public moments", 3, { learnId: "et-public", keywords: ["restaurant", "signature", "public"] }),
      article("alcohol", "Alcohol and tremor: the honest version", 3, { learnId: "et-alcohol", keywords: ["alcohol", "drink"] }),
      article("voice", "When it affects your voice or head", 3, { learnId: "et-voice", keywords: ["voice", "head"] }),
      article("telling-people", "Telling people, and driving", 3, { learnId: "et-telling", keywords: ["telling", "embarrassed", "driving"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title and channel from YouTube's oEmbed,
    // running time from the video's page, speakers from its own description.
    watch: [
      { id: "yt-ietf-what", title: "What is Essential Tremor?", kind: "video", duration: "2:47", url: "https://www.youtube.com/watch?v=QM8KPWLzI7Q", extra: "on everyday challenges and triggers", publisher: "International Essential Tremor Foundation", keywords: ["tremor"] },
      { id: "yt-ntf-fus", title: "MRgFUS Q&A", kind: "video", duration: "8:58", url: "https://www.youtube.com/watch?v=5rf_s8LdqCI", extra: "questions on focused ultrasound", publisher: "National Tremor Foundation", keywords: ["ultrasound"] },
      { id: "yt-mayo-et-dbs", title: "Mayo Clinic Minute: When to consider deep brain stimulation for essential tremor", kind: "video", duration: "1:11", url: "https://www.youtube.com/watch?v=AWzoMEbpExQ", extra: "with Dr Philip Tipton", publisher: "Mayo Clinic", keywords: ["dbs"] },
    ],
    sources: [source(NHS, "Tremor: causes and treatment"), TREMOR_FOUNDATION],
    stories: [],
    // Real people's stories of essential tremor. Checked 20 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-chloe", person: "Chloe", title: "Chloe shares her experience of living with essential tremor", channel: "National Tremor Foundation", url: "https://www.youtube.com/watch?v=K6XhkrQ2T6E", duration: "3:41", about: "Chloe talks about her essential tremor at a National Tremor Foundation open day." },
      { id: "yt-jamie", person: "Jamie", title: "Jamie shares his experience of living with essential tremor", channel: "National Tremor Foundation", url: "https://www.youtube.com/watch?v=LcdaCeTXPjQ", duration: "6:57", about: "Jamie shares his experience of essential tremor at a National Tremor Foundation open day." },
      { id: "yt-tony", person: "Tony", title: "Tony Foulds shares his story about living with essential tremor", channel: "National Tremor Foundation", url: "https://www.youtube.com/watch?v=AC5nHmN0lzI", duration: "3:23", about: "Tony, who looks after a memorial to the crew of a 1944 plane crash, talks about his tremor." },
    ],
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
  summary: "Uncontrolled, sometimes painful muscle spasms that can pull part of the body into a twist or a posture: a neck that turns, eyelids that squeeze shut, a hand that cramps when writing. It is caused by a problem in the part of the brain that controls movement, and treatment can help.",
  facts: ["Spasms you can't control", "Neck and eyes are the most common places", "Injections are usually repeated every 3 months"],
  keywords: ["dystonia", "twisting", "neck", "spasm", "cramp"],
  content: {
    understand: [
      article("what-it-is", "What dystonia is", 3, { blurb: "A problem in the brain's movement control, and why the muscles get the blame.", learnId: "dys-what", keywords: ["cause", "brain"] }),
      article("types", "Neck, eyes, voice, hand: the types", 3, { blurb: "Cervical dystonia, blepharospasm, writer's cramp and the rest.", learnId: "dys-types", keywords: ["cervical", "blepharospasm", "writers cramp"] }),
      article("diagnosis", "How it's diagnosed", 3, { learnId: "dys-diagnosis", keywords: ["diagnosis", "neurologist"] }),
      article("sensory-trick", "The sensory trick: why a touch can help", 3, { learnId: "dys-trick", keywords: ["trick", "touch"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("botox", "Botulinum toxin injections: what to expect", 4, { learnId: "dys-botox", keywords: ["botox", "injections"] }),
      article("tablets", "Tablets, and when they're used", 3, { learnId: "dys-tablets", keywords: ["tablets", "medication"] }),
      article("physio", "Physiotherapy for dystonia: what helps", 3, { learnId: "dys-physio", keywords: ["physio", "exercise", "stretch"] }),
      article("dbs", "Deep brain stimulation for dystonia", 3, { learnId: "dys-dbs", keywords: ["dbs", "surgery"] }),
    ],
    liveWell: [
      article("pain", "Pain with dystonia, and what eases it", 3, { learnId: "dys-pain", keywords: ["pain", "ache"] }),
      article("work", "Work and driving with dystonia", 3, { learnId: "dys-work", keywords: ["work", "driving", "desk"] }),
      article("mood", "Mood, confidence and stress", 3, { learnId: "dys-mood", keywords: ["mood", "confidence", "anxious"] }),
      article("telling-people", "Explaining dystonia to other people", 3, { learnId: "dys-telling", keywords: ["telling", "explain"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title and channel from YouTube's oEmbed,
    // running time from the video's page, speakers from its own description.
    watch: [
      { id: "yt-duk-what", title: "What is dystonia? animated infographic", kind: "video", duration: "1:12", url: "https://www.youtube.com/watch?v=2L3tffXwOTM", extra: "an animation", publisher: "Dystonia UK", keywords: ["dystonia"] },
      { id: "yt-duk-bbc", title: "Dystonia UK live on BBC Breakfast!", kind: "video", duration: "10:27", url: "https://www.youtube.com/watch?v=ID7-OIdV2WY", extra: "with neurologist Professor Kailash Bhatia", publisher: "Dystonia UK", keywords: ["explaining"] },
      { id: "yt-duk-webinar", title: "A 'Reach Out, Reach All' Webinar - Your Questions Answered with Dr Miles Humberstone", kind: "video", duration: "54:58", url: "https://www.youtube.com/watch?v=TMJlPQUlT_k", extra: "with consultant neurologist Dr Miles Humberstone", publisher: "Dystonia UK", keywords: ["questions", "treatment"] },
    ],
    sources: [source(NHS, "Dystonia: symptoms and treatment"), DYSTONIA_UK],
    stories: [],
    // Real people's stories of dystonia. Checked 20 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-ross", person: "Ross", title: "Neck dystonia (Cervical dystonia / Spasmodic Torticollis)", channel: "Dystonia UK", url: "https://www.youtube.com/watch?v=daNuCgoMfPE", duration: "5:46", about: "Ross talks about living with neck dystonia." },
      { id: "yt-fink", person: "Emma and Lauren", title: "Deep brain stimulation helps sisters with dystonia return to activities they love", channel: "Mayo Clinic", url: "https://www.youtube.com/watch?v=KR3wYqk1SCM", duration: "4:49", about: "Sisters Emma and Lauren had deep brain stimulation tailored to their symptoms and goals." },
      { id: "yt-robert", person: "Robert", title: "My Dystonia Story: Robert from The Netherlands", channel: "Dystonia Europe", url: "https://www.youtube.com/watch?v=l4psC7JIos4", duration: "3:02", about: "Robert shares what it is like for him to live with dystonia." },
    ],
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
