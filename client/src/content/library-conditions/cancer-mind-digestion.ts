import type { LibraryCondition } from "../library";
import { ANXIETY_UK, article, BOWEL_CANCER_UK, BREAST_CANCER_NOW, BRITISH_LIVER_TRUST, CANCER_RESEARCH_UK, GUTS_UK, KIDNEY_CARE_UK, MACMILLAN, MIND, NHS, piece, PROSTATE_CANCER_UK, SAMARITANS, SLEEP_CHARITY, source, STROKE_ASSOCIATION } from "../library-helpers";

// Cancer & recovery, Mind & mood, and Kidneys, liver & digestion. Same shape as the Ischaemic
// stroke page (see brain-a.ts).

export const breastCancer: LibraryCondition = {
  id: "breast",
  title: "Breast cancer",
  summary: "The months after breast cancer treatment: a body that has been through surgery, perhaps radiotherapy and chemotherapy, hormone tablets that may go on for years, and a mind that is only now catching up. Recovery is slower and odder than people expect, and it is still recovery.",
  facts: ["Treatment can take a year; recovery takes longer", "Hormone tablets often continue for 5 to 10 years", "Tiredness and worry are the most common after-effects"],
  keywords: ["breast cancer", "mastectomy", "chemotherapy", "radiotherapy", "tamoxifen"],
  content: {
    understand: [
      article("what-you-had", "Your treatment, explained after the fact", 5, { blurb: "Surgery, radiotherapy, chemotherapy, hormone therapy: what each was for.", keywords: ["surgery", "radiotherapy", "chemotherapy"] }),
      article("results", "Your results: grade, stage, receptors and what they mean", 4, { keywords: ["grade", "stage", "her2", "receptor"] }),
      article("follow-up", "Follow-up: mammograms, appointments and open access", 3, { keywords: ["follow up", "mammogram", "appointments"] }),
      article("recurrence", "The worry about it coming back, and the real numbers", 4, { keywords: ["recurrence", "come back", "risk"] }),
    ],
    recover: [
      article("fatigue", "Tiredness after treatment, and pacing", 5, { keywords: ["tired", "fatigue", "energy"] }),
      piece("video", "arm-shoulder", "Arm and shoulder exercises after surgery", 6, { keywords: ["arm", "shoulder", "exercises", "lymphoedema"] }),
      article("hormone-tablets", "Tamoxifen and the aromatase inhibitors: the side effects, and what helps", 5, { keywords: ["tamoxifen", "letrozole", "hot flushes", "joints"] }),
      article("chemo-brain", "Chemo brain: fog, memory and getting sharper", 4, { keywords: ["chemo brain", "memory", "fog"] }),
    ],
    liveWell: [
      article("body", "Your body after breast cancer: scars, reconstruction, clothes", 5, { keywords: ["body", "scar", "reconstruction"] }),
      article("menopause", "Treatment-induced menopause", 4, { keywords: ["menopause", "hot flushes"] }),
      article("work", "Going back to work", 4, { keywords: ["work", "employer", "phased"] }),
      article("relationships", "Sex, intimacy and partners", 4, { keywords: ["sex", "intimacy", "partner"] }),
      article("mood", "The low months after treatment ends", 4, { keywords: ["mood", "anxious", "depression"] }),
    ],
    watch: [
      piece("podcast", "after-treatment", "The year after treatment: two women talk", 24),
      piece("video", "exercises-video", "Arm exercises in five minutes", 5),
      piece("audio", "rest", "A ten-minute rest for a tired body", 10, { extra: "read aloud" }),
    ],
    sources: [source(NHS, "Breast cancer: treatment and living with it"), BREAST_CANCER_NOW, MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    askDoctor: [
      "What was my stage and grade, and what does that mean for me now?",
      "How long will I take hormone tablets, and what can help the side effects?",
      "What symptoms should I report between appointments?",
      "Can I be referred for help with fatigue, lymphoedema or mood?",
    ],
    related: [
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
      { groupId: "bone-health", conditionId: "osteoporosis" },
      { groupId: "anxiety", conditionId: "anxiety" },
    ],
  },
};

export const bowelCancer: LibraryCondition = {
  id: "bowel",
  title: "Bowel cancer",
  summary: "Recovery after bowel cancer treatment: an operation that changed how your gut works, perhaps a stoma, chemotherapy that left your hands and feet tingling, and a new relationship with food and the bathroom. It settles, slowly, and there is a lot of help for the parts that don't.",
  facts: ["Bowel habits can take a year to settle", "A stoma may be temporary or permanent", "Follow-up scans and blood tests for several years"],
  keywords: ["bowel cancer", "colon", "colorectal", "stoma", "colostomy", "ileostomy"],
  content: {
    understand: [
      article("what-you-had", "Your treatment, explained after the fact", 5, { blurb: "Surgery, chemotherapy, radiotherapy: what each was for.", keywords: ["surgery", "chemotherapy", "radiotherapy"] }),
      article("results", "Your results: stage, nodes and what they mean", 4, { keywords: ["stage", "nodes", "results"] }),
      article("follow-up", "Follow-up: scans, blood tests and colonoscopies", 3, { keywords: ["follow up", "cea", "colonoscopy"] }),
      article("stoma", "Living with a stoma: the first months", 5, { keywords: ["stoma", "bag", "colostomy", "ileostomy"] }),
    ],
    recover: [
      article("bowels", "Your bowels after surgery: urgency, frequency and what settles", 5, { keywords: ["bowel", "urgency", "diarrhoea", "lars"] }),
      article("food", "Eating after bowel surgery", 5, { keywords: ["food", "diet", "fibre"] }),
      article("neuropathy", "Tingling hands and feet after chemotherapy", 3, { keywords: ["tingling", "neuropathy", "oxaliplatin"] }),
      piece("video", "core", "Gentle core and walking after abdominal surgery", 6, { keywords: ["exercise", "walking", "core"] }),
    ],
    liveWell: [
      article("out-and-about", "Toilets, travel and going out", 4, { keywords: ["toilets", "travel", "out"] }),
      article("work", "Going back to work", 4, { keywords: ["work", "employer"] }),
      article("relationships", "Sex, intimacy and body confidence", 4, { keywords: ["sex", "intimacy", "body"] }),
      article("mood", "The low months after treatment ends", 4, { keywords: ["mood", "anxious"] }),
      article("family", "Family history and screening for relatives", 3, { keywords: ["family", "screening", "genetic"] }),
    ],
    watch: [
      piece("podcast", "after-treatment", "The year after bowel cancer: two people talk", 24),
      piece("video", "stoma-care", "Stoma care basics in six minutes", 6),
    ],
    sources: [source(NHS, "Bowel cancer: treatment and living with it"), BOWEL_CANCER_UK, MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    askDoctor: [
      "What was my stage, and what follow-up will I have?",
      "Will my bowels settle, and what can help in the meantime?",
      "Is my stoma temporary, and when might it be reversed?",
      "Should my family be screened?",
    ],
    related: [
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
      { groupId: "gut", conditionId: "ibs" },
      { groupId: "nerves", conditionId: "peripheral-neuropathy" },
    ],
  },
};

export const prostateCancer: LibraryCondition = {
  id: "prostate",
  title: "Prostate cancer",
  summary: "Recovery after prostate cancer treatment, or living alongside a cancer that is being watched rather than treated. Surgery and radiotherapy can affect the bladder and erections; hormone treatment changes energy, mood and the body. All of it has help worth asking for.",
  facts: ["Many prostate cancers are slow and can be watched", "Bladder control and erections usually improve over months", "PSA blood tests track it after treatment"],
  keywords: ["prostate", "prostate cancer", "psa", "radiotherapy", "hormone treatment"],
  content: {
    understand: [
      article("what-you-had", "Surgery, radiotherapy, hormones or watching: what each means", 5, { keywords: ["surgery", "radiotherapy", "hormone", "active surveillance"] }),
      article("psa", "PSA after treatment: what the numbers mean", 3, { keywords: ["psa", "blood test", "numbers"] }),
      article("results", "Gleason score, stage and what they mean", 3, { keywords: ["gleason", "stage", "results"] }),
      article("surveillance", "Active surveillance: living with a cancer that's watched", 4, { keywords: ["surveillance", "watching", "monitoring"] }),
    ],
    recover: [
      piece("video", "pelvic-floor", "Pelvic floor exercises that work", 5, { keywords: ["pelvic floor", "exercises", "bladder"] }),
      article("bladder", "Leaks and urgency after treatment", 4, { keywords: ["bladder", "leaks", "incontinence", "pads"] }),
      article("erections", "Erections after treatment: what helps", 5, { keywords: ["erections", "erectile", "sex", "tablets"] }),
      article("hormone-therapy", "Hormone therapy: hot flushes, tiredness, mood, bones", 5, { keywords: ["hormone", "hot flushes", "tired", "bones"] }),
    ],
    liveWell: [
      article("exercise", "Exercise on hormone therapy: muscle, bones and mood", 4, { keywords: ["exercise", "strength"] }),
      article("relationships", "Partners, intimacy and talking about it", 4, { keywords: ["partner", "intimacy", "sex"] }),
      article("work", "Work and travel after treatment", 3, { keywords: ["work", "travel"] }),
      article("mood", "Mood on hormone therapy, and after", 4, { keywords: ["mood", "depression", "anxious"] }),
    ],
    watch: [
      piece("podcast", "men-talk", "Prostate cancer: two men talk about the year after", 22),
      piece("video", "pelvic-video", "Pelvic floor exercises in four minutes", 4),
    ],
    sources: [source(NHS, "Prostate cancer: treatment and living with it"), PROSTATE_CANCER_UK, MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    askDoctor: [
      "What is my PSA now, and what would worry you?",
      "What can help with leaks or erections, and who do I ask?",
      "How long will I be on hormone therapy, and what should I watch for?",
      "Should I have a bone density scan?",
    ],
    related: [
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
      { groupId: "bone-health", conditionId: "osteoporosis" },
      { groupId: "depression", conditionId: "depression" },
    ],
  },
};

export const cancerFatigue: LibraryCondition = {
  id: "cancer-fatigue",
  title: "Tiredness after treatment",
  summary: "A tiredness that sleep doesn't fix, that arrives without warning and lasts months after treatment ends. It is the most common after-effect of cancer treatment and the least talked about. Pacing, gentle exercise and treating the things that make it worse help most people.",
  facts: ["The most common after-effect of cancer treatment", "Can last months, sometimes longer", "Gentle exercise helps more than rest"],
  keywords: ["tired", "fatigue", "exhausted", "cancer fatigue", "after chemo", "energy"],
  content: {
    understand: [
      article("why", "Why cancer treatment leaves you so tired", 4, { blurb: "Chemotherapy, radiotherapy, surgery, hormones, worry, and the body's repair work.", keywords: ["cause", "chemotherapy", "repair"] }),
      article("not-laziness", "It isn't laziness, and it isn't in your head", 3, { keywords: ["laziness", "guilt", "understanding"] }),
      article("other-causes", "Things that make it worse: anaemia, thyroid, sleep, mood, medicines", 3, { keywords: ["anaemia", "thyroid", "sleep", "mood"] }),
      article("how-long", "How long it lasts, honestly", 3, { keywords: ["how long", "months"] }),
    ],
    recover: [
      piece("video", "pacing", "Pacing: the energy budget", 6, { keywords: ["pacing", "energy", "budget", "diary"] }),
      piece("exercise", "gentle-exercise", "Gentle exercise that gives energy back", 0, { keywords: ["exercise", "walking", "gentle"] }),
      article("sleep", "Sleep when you're exhausted but can't", 4, { keywords: ["sleep", "night", "naps"] }),
      article("food", "Eating for energy", 3, { keywords: ["food", "diet", "appetite"] }),
    ],
    liveWell: [
      article("work", "Going back to work with fatigue", 4, { keywords: ["work", "phased", "employer"] }),
      article("asking-help", "Asking for help without feeling a burden", 3, { keywords: ["help", "family", "burden"] }),
      article("mood", "Fatigue and mood: the loop", 3, { keywords: ["mood", "depression", "anxious"] }),
      article("family", "For the people around you", 4, { keywords: ["family", "carer", "partner"] }),
    ],
    watch: [
      piece("podcast", "tired-talk", "Tired after treatment: two people talk", 20),
      piece("audio", "rest", "A ten-minute rest for a tired body", 10, { extra: "read aloud" }),
    ],
    sources: [source(NHS, "Cancer-related fatigue and life after cancer treatment"), MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    askDoctor: [
      "Could anything treatable be adding to my tiredness?",
      "Is there a fatigue or exercise programme I can be referred to?",
      "How much activity is safe for me right now?",
      "When should I worry that it isn't improving?",
    ],
    related: [
      { groupId: "common-cancers", conditionId: "breast" },
      { groupId: "sleep", conditionId: "insomnia" },
      { groupId: "depression", conditionId: "depression" },
    ],
  },
};

export const depression: LibraryCondition = {
  id: "depression",
  title: "Depression",
  summary: "Low mood that lasts for weeks, drains the pleasure from things and makes everyday life heavy, often alongside poor sleep, little appetite and a harsh inner voice. It is an illness, it is common with any long-term condition, and talking therapy and medicines both work.",
  facts: ["More than a low week: most days, for over two weeks", "Common alongside physical illness", "Talking therapies and antidepressants both work"],
  keywords: ["depression", "low mood", "sad", "hopeless", "no interest", "mental health"],
  content: {
    understand: [
      article("what-it-is", "What depression is, and isn't", 4, { blurb: "The symptoms, the two-week rule, and why it's not weakness.", keywords: ["symptoms", "weakness", "illness"] }),
      article("illness-link", "Why it so often follows a physical illness", 4, { keywords: ["illness", "stroke", "heart", "diagnosis"] }),
      article("body", "How depression shows up in the body", 3, { keywords: ["sleep", "appetite", "pain", "tired"] }),
      article("urgent", "If you're thinking about ending your life", 2, { blurb: "Who to call, right now, any hour.", keywords: ["suicide", "crisis", "samaritans", "999"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("talking", "Talking therapies: CBT and the others, and how to get them", 5, { keywords: ["cbt", "therapy", "counselling", "talking therapies"] }),
      article("antidepressants", "Antidepressants: what to expect in the first weeks", 5, { keywords: ["antidepressants", "sertraline", "tablets", "side effects"] }),
      piece("video", "activity", "Behavioural activation: small steps that lift mood", 6, { keywords: ["activity", "steps", "routine"] }),
      article("exercise-sleep", "Exercise, daylight and sleep", 4, { keywords: ["exercise", "daylight", "sleep"] }),
    ],
    liveWell: [
      article("telling-people", "Telling someone", 3, { keywords: ["telling", "family", "friend"] }),
      article("work", "Work, sick notes and going back", 4, { keywords: ["work", "sick note", "employer"] }),
      article("relapse", "Staying well, and spotting a dip early", 4, { keywords: ["relapse", "staying well", "warning signs"] }),
      article("carers", "Supporting someone with depression", 4, { keywords: ["carer", "partner", "support"] }),
    ],
    watch: [
      piece("podcast", "the-fog", "Coming through depression: two people talk", 22),
      piece("animation", "in-pictures", "Depression and the brain, in pictures", 3),
      piece("audio", "gentle-morning", "A gentle ten minutes for a heavy morning", 10, { extra: "read aloud" }),
    ],
    sources: [source(NHS, "Depression: symptoms, treatment and support"), MIND, SAMARITANS],
    stories: [],
    askDoctor: [
      "Can I be referred for talking therapy, and how long is the wait?",
      "Would an antidepressant help me, and what should I expect at first?",
      "Could any of my other medicines or conditions be adding to this?",
      "Who do I contact if things get worse quickly?",
    ],
    related: [
      { groupId: "depression", conditionId: "after-stroke" },
      { groupId: "anxiety", conditionId: "anxiety" },
      { groupId: "sleep", conditionId: "insomnia" },
    ],
  },
};

export const depressionAfterStroke: LibraryCondition = {
  id: "after-stroke",
  title: "Depression after stroke",
  summary: "About a third of people feel depressed in the year after a stroke. Some of it is the loss and the fright; some is the injury itself changing how the brain handles mood. Both kinds are treatable, and treating them helps recovery of everything else.",
  facts: ["Affects about one in three people after a stroke", "Partly the injury, partly the loss", "Treating it helps physical recovery too"],
  keywords: ["depression", "stroke", "low mood", "crying", "emotional", "after stroke"],
  content: {
    understand: [
      article("why", "Why depression is so common after a stroke", 4, { blurb: "The brain injury, the losses, the fatigue and the fright.", keywords: ["cause", "brain", "loss"] }),
      article("emotionalism", "Crying or laughing without meaning to: emotionalism", 3, { keywords: ["crying", "laughing", "emotional", "emotionalism"] }),
      article("signs", "The signs, in yourself or someone you care for", 3, { keywords: ["signs", "symptoms", "carer"] }),
      article("anxiety-too", "Anxiety after stroke: the fear of another one", 3, { keywords: ["anxiety", "fear", "another stroke"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("talking", "Talking therapy after a stroke, including with aphasia", 4, { keywords: ["therapy", "cbt", "aphasia"] }),
      article("antidepressants", "Antidepressants after a stroke", 4, { keywords: ["antidepressants", "tablets"] }),
      piece("video", "activity", "Small steps: activity and mood after stroke", 6, { keywords: ["activity", "steps", "routine"] }),
      article("peer-support", "Other people who've had a stroke: why it helps", 3, { keywords: ["peer support", "group", "others"] }),
    ],
    liveWell: [
      article("fatigue-mood", "Fatigue and mood: the loop", 3, { keywords: ["fatigue", "tired", "mood"] }),
      article("purpose", "Finding purpose when the old roles have changed", 4, { keywords: ["purpose", "roles", "work"] }),
      article("carers", "For carers: your mood matters too", 4, { keywords: ["carer", "partner", "family"] }),
    ],
    watch: [
      piece("podcast", "low-days", "Low days after stroke: two people talk", 20),
      piece("audio", "gentle-morning", "A gentle ten minutes for a heavy morning", 10, { extra: "read aloud" }),
    ],
    sources: [source(NHS, "Depression and emotional changes after stroke"), STROKE_ASSOCIATION, MIND, SAMARITANS],
    stories: ["li-wei"],
    askDoctor: [
      "Could what I'm feeling be depression rather than just the stroke?",
      "Can I be referred for talking therapy, adapted if I have aphasia?",
      "Would an antidepressant interfere with my stroke medicines?",
      "Is there a stroke group near me?",
    ],
    related: [
      { groupId: "stroke", conditionId: "ischaemic" },
      { groupId: "depression", conditionId: "depression" },
      { groupId: "anxiety", conditionId: "anxiety" },
    ],
  },
};

export const anxiety: LibraryCondition = {
  id: "anxiety",
  title: "Anxiety",
  summary: "Worry that won't switch off, a body on alert, panic that arrives from nowhere. Anxiety is the mind's alarm system stuck on, and it is especially common after a health scare. It responds well to talking therapy, and there are things that help today.",
  facts: ["The most common mental health problem", "Often follows a health scare", "CBT works for most people"],
  keywords: ["anxiety", "worry", "panic", "panic attack", "nervous", "on edge"],
  content: {
    understand: [
      article("what-it-is", "What anxiety is doing in your body", 4, { blurb: "Adrenaline, the alarm system and why your heart races in a quiet room.", extra: "With a diagram", keywords: ["adrenaline", "body", "symptoms"] }),
      article("panic", "Panic attacks: what they are and what they aren't", 3, { keywords: ["panic", "panic attack", "heart attack"] }),
      article("health-anxiety", "Health anxiety after a scare", 4, { keywords: ["health anxiety", "scare", "checking"] }),
      article("types", "Generalised, social, phobias: the types", 3, { keywords: ["generalised", "social", "phobia"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("cbt", "CBT for anxiety, and how to get it", 5, { keywords: ["cbt", "therapy", "talking therapies"] }),
      piece("video", "breathing", "Breathing and grounding for the moment it hits", 5, { keywords: ["breathing", "grounding", "panic"] }),
      article("medicines", "Medicines for anxiety: what they can and can't do", 4, { keywords: ["sertraline", "tablets", "medication"] }),
      article("worry-time", "Worry time and other tricks that work", 3, { keywords: ["worry time", "tricks", "techniques"] }),
    ],
    liveWell: [
      article("caffeine-sleep", "Caffeine, alcohol and sleep", 3, { keywords: ["caffeine", "alcohol", "sleep"] }),
      article("avoidance", "Avoidance: why it feeds anxiety", 3, { keywords: ["avoidance", "avoiding"] }),
      article("telling-people", "Telling the people around you", 3, { keywords: ["telling", "family"] }),
      article("exercise", "Exercise and anxiety", 3, { keywords: ["exercise", "walking"] }),
    ],
    watch: [
      piece("podcast", "on-edge", "Living on edge: two people talk about anxiety", 20),
      piece("audio", "grounding", "A ten-minute grounding practice", 10, { extra: "read aloud" }),
    ],
    sources: [source(NHS, "Anxiety: symptoms, treatment and self-help"), MIND, ANXIETY_UK],
    stories: [],
    askDoctor: [
      "Can I be referred for CBT, and can I refer myself?",
      "Could my heart or thyroid be adding to this?",
      "Would a medicine help, and what are the trade-offs?",
      "What can I do on a bad day while I wait for therapy?",
    ],
    related: [
      { groupId: "depression", conditionId: "depression" },
      { groupId: "sleep", conditionId: "insomnia" },
      { groupId: "heart-rhythm", conditionId: "atrial-fibrillation" },
    ],
  },
};

export const insomnia: LibraryCondition = {
  id: "insomnia",
  title: "Sleep problems",
  summary: "Trouble getting to sleep, staying asleep or waking rested, for weeks on end. Pain, worry, medicines, the menopause and a long-term condition all get in the way, and sleep then makes everything else worse. The best-proven treatment is not a tablet but a short course of CBT for insomnia.",
  facts: ["CBT for insomnia works better than sleeping tablets", "Pain, worry and medicines are common causes", "Fixing sleep improves mood, pain and energy"],
  keywords: ["insomnia", "sleep", "can't sleep", "waking", "tired", "night"],
  content: {
    understand: [
      article("what-happens", "What happens when you sleep, and when you don't", 4, { blurb: "The sleep cycles, the body clock and sleep pressure.", extra: "With a diagram", keywords: ["cycles", "body clock"] }),
      article("causes", "Why you can't sleep: pain, worry, medicines, menopause, habits", 4, { keywords: ["pain", "worry", "medicines", "menopause"] }),
      article("not-apnoea", "Sleep apnoea, restless legs: when it's something else", 3, { keywords: ["apnoea", "restless legs", "snoring"] }),
      article("how-much", "How much sleep you actually need", 2, { keywords: ["how much", "hours"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("cbt-i", "CBT for insomnia: what it is and how to get it", 5, { keywords: ["cbt-i", "cbt", "therapy", "app"] }),
      piece("video", "sleep-window", "The sleep window: the method that works", 6, { keywords: ["sleep window", "restriction", "method"] }),
      article("sleeping-tablets", "Sleeping tablets: the honest version", 3, { keywords: ["sleeping tablets", "zopiclone", "melatonin"] }),
      article("pain-at-night", "Sleeping with pain", 3, { keywords: ["pain", "night"] }),
    ],
    liveWell: [
      article("evenings", "Evenings, screens and the bedroom", 3, { keywords: ["screens", "bedroom", "routine"] }),
      article("naps", "Naps and the day", 2, { keywords: ["naps", "daytime"] }),
      article("worry", "Night-time worry", 3, { keywords: ["worry", "anxious", "3am"] }),
      article("partner", "Sharing a bed with a poor sleeper", 2, { keywords: ["partner", "snoring"] }),
    ],
    watch: [
      piece("audio", "wind-down", "A ten-minute wind-down for bed", 10, { extra: "read aloud" }),
      piece("video", "explained", "Insomnia explained in four minutes", 4),
    ],
    sources: [source(NHS, "Insomnia: causes and treatment"), SLEEP_CHARITY, MIND],
    stories: [],
    askDoctor: [
      "Could any of my medicines be affecting my sleep?",
      "Can I be referred for CBT for insomnia, or use an app on prescription?",
      "Should I be checked for sleep apnoea?",
      "Is a short course of sleeping tablets sensible for me?",
    ],
    related: [
      { groupId: "sleep-breathing", conditionId: "sleep-apnoea" },
      { groupId: "anxiety", conditionId: "anxiety" },
      { groupId: "depression", conditionId: "depression" },
    ],
  },
};

export const chronicKidneyDisease: LibraryCondition = {
  id: "chronic-kidney-disease",
  title: "Chronic kidney disease",
  summary: "Kidneys that are not filtering as well as they should, found on a blood or urine test long before any symptoms. Most people with it never need dialysis: the job is to protect what's left, mainly through blood pressure, diabetes and the right medicines.",
  facts: ["Usually found on a blood test, with no symptoms", "Stages 1 to 5: most people stay in the early ones", "Blood pressure control protects the kidneys most"],
  keywords: ["kidney", "ckd", "kidney disease", "egfr", "dialysis", "kidney function"],
  content: {
    understand: [
      article("what-kidneys-do", "What the kidneys do", 3, { blurb: "Filtering, fluid, blood pressure and bones. Why so much depends on them.", extra: "With a diagram", keywords: ["kidneys", "filter"] }),
      article("egfr", "eGFR and the stages: what your number means", 3, { keywords: ["egfr", "stage", "number"] }),
      article("causes", "Why it happens: diabetes, blood pressure, age, and others", 4, { keywords: ["diabetes", "blood pressure", "cause"] }),
      article("protein", "Protein in the urine, and why it matters", 2, { keywords: ["protein", "urine", "acr"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("blood-pressure", "Blood pressure: the kidney's best friend", 4, { keywords: ["blood pressure", "tablets", "ace inhibitor"] }),
      article("medicines", "Medicines that protect, and medicines to avoid", 4, { keywords: ["sglt2", "ibuprofen", "avoid", "medication"] }),
      article("food", "Salt, protein and potassium: eating with CKD", 5, { keywords: ["diet", "salt", "potassium", "food"] }),
      article("later-stages", "If it progresses: dialysis and transplant, explained early", 5, { keywords: ["dialysis", "transplant"] }),
    ],
    liveWell: [
      article("sick-days", "Sick-day rules for your kidneys", 3, { keywords: ["sick", "dehydration", "vomiting"] }),
      article("painkillers", "Painkillers and the kidneys", 2, { keywords: ["painkillers", "ibuprofen", "nsaid"] }),
      article("tiredness", "Tiredness and anaemia", 3, { keywords: ["tired", "anaemia"] }),
      article("checks", "The checks, and how often", 2, { keywords: ["checks", "blood test", "review"] }),
    ],
    watch: [
      piece("video", "explained", "Kidney disease explained in four minutes", 4),
      piece("podcast", "kidney-talk", "Living with CKD: two people talk", 20),
    ],
    sources: [source(NHS, "Chronic kidney disease: symptoms and treatment"), KIDNEY_CARE_UK],
    stories: [],
    askDoctor: [
      "What is my eGFR and stage, and is it stable?",
      "What is my blood pressure target?",
      "Which of my medicines need adjusting for my kidneys?",
      "Should I see a kidney dietitian?",
    ],
    related: [
      { groupId: "blood-pressure", conditionId: "high-blood-pressure" },
      { groupId: "diabetes", conditionId: "type-2" },
      { groupId: "heart-attack", conditionId: "heart-attack" },
    ],
  },
};

export const fattyLiver: LibraryCondition = {
  id: "fatty-liver",
  title: "Fatty liver",
  summary: "Fat building up in the liver, usually linked to weight, diabetes and the metabolism rather than alcohol. It is very common, usually silent, and in most people it can be reversed. For some it scars the liver, which is why it's worth taking seriously early.",
  facts: ["Very common, usually with no symptoms", "Linked to weight, diabetes and cholesterol", "Losing weight reverses it for most people"],
  keywords: ["fatty liver", "liver", "nafld", "masld", "liver test"],
  content: {
    understand: [
      article("what-it-is", "What fatty liver is", 3, { blurb: "Why fat collects in the liver, and what it does there.", extra: "With a diagram", keywords: ["liver", "fat", "cause"] }),
      article("tests", "Blood tests, ultrasound and the FibroScan", 3, { keywords: ["blood test", "ultrasound", "fibroscan"] }),
      article("scarring", "Fibrosis and cirrhosis: when it matters", 3, { keywords: ["fibrosis", "cirrhosis", "scarring"] }),
      article("alcohol-or-not", "Alcohol-related or metabolic: the difference", 2, { keywords: ["alcohol", "metabolic"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("weight", "Weight: how much, and what works", 5, { keywords: ["weight", "diet"] }),
      article("food", "Eating for your liver", 4, { keywords: ["food", "diet", "sugar"] }),
      piece("video", "moving", "Movement and the liver", 6, { keywords: ["exercise", "walking"] }),
      article("other-conditions", "Diabetes, cholesterol and blood pressure alongside", 3, { keywords: ["diabetes", "cholesterol"] }),
    ],
    liveWell: [
      article("alcohol", "Alcohol and a fatty liver", 2, { keywords: ["alcohol", "drink"] }),
      article("medicines", "Medicines and supplements to be careful with", 2, { keywords: ["medicines", "supplements", "paracetamol"] }),
      article("checks", "How often to be checked", 2, { keywords: ["checks", "review"] }),
    ],
    watch: [
      piece("video", "explained", "Fatty liver explained in three minutes", 3),
      piece("podcast", "liver-talk", "Turning a fatty liver round: two people talk", 18),
    ],
    sources: [source(NHS, "Non-alcoholic fatty liver disease"), BRITISH_LIVER_TRUST],
    stories: [],
    askDoctor: [
      "Is there any scarring in my liver?",
      "How much weight would make a difference for me?",
      "How often should my liver be checked?",
      "Is alcohol safe for me at all?",
    ],
    related: [
      { groupId: "diabetes", conditionId: "type-2" },
      { groupId: "diabetes", conditionId: "prediabetes" },
      { groupId: "blood-pressure", conditionId: "high-blood-pressure" },
    ],
  },
};

export const ibs: LibraryCondition = {
  id: "ibs",
  title: "Irritable bowel syndrome (IBS)",
  summary: "Tummy pain, bloating and a bowel that swings between too loose and too slow, with nothing wrong on the tests. It is a real condition of how the gut and the brain talk to each other, it is common, and food, stress and a few specific treatments can bring it under control.",
  facts: ["Pain, bloating and changed bowel habits", "Tests are normal: it's how the gut works, not damage", "Diet, stress and gut-directed therapy all help"],
  keywords: ["ibs", "irritable bowel", "bloating", "tummy pain", "constipation", "diarrhoea"],
  content: {
    understand: [
      article("what-it-is", "What IBS is", 4, { blurb: "The gut, the brain and the nerves between them. Why the tests are normal and the pain is real.", extra: "With a diagram", keywords: ["gut", "brain", "cause"] }),
      article("red-flags", "Symptoms that aren't IBS and need checking", 2, { keywords: ["bleeding", "weight loss", "red flags"] }),
      article("types", "IBS-D, IBS-C and mixed", 2, { keywords: ["diarrhoea", "constipation", "mixed"] }),
      article("triggers", "Triggers: food, stress, infections, hormones", 3, { keywords: ["triggers", "food", "stress"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("first-steps", "First steps: meals, fibre, fluids and caffeine", 4, { keywords: ["fibre", "meals", "caffeine"] }),
      article("low-fodmap", "The low FODMAP diet, with a dietitian", 5, { keywords: ["fodmap", "diet", "dietitian"] }),
      article("medicines", "Antispasmodics, laxatives, loperamide and the rest", 4, { keywords: ["medicines", "antispasmodic", "laxative", "loperamide"] }),
      article("gut-therapy", "Gut-directed CBT and hypnotherapy", 3, { keywords: ["cbt", "hypnotherapy", "therapy"] }),
    ],
    liveWell: [
      article("out-and-about", "Toilets, travel and eating out", 3, { keywords: ["toilets", "travel", "restaurant"] }),
      article("stress", "Stress and the gut", 3, { keywords: ["stress", "anxious"] }),
      article("work", "IBS at work", 3, { keywords: ["work", "employer"] }),
      article("diary", "Keeping a food and symptom diary", 2, { keywords: ["diary", "food diary"] }),
    ],
    watch: [
      piece("video", "explained", "IBS explained in four minutes", 4),
      piece("audio", "gut-calm", "A ten-minute calm for a cramping gut", 10, { extra: "read aloud" }),
    ],
    sources: [source(NHS, "IBS: symptoms, diet and treatment"), GUTS_UK],
    stories: [],
    askDoctor: [
      "Have the other causes been ruled out, including coeliac disease?",
      "Can I be referred to a dietitian for the low FODMAP diet?",
      "Which medicine suits my type of IBS?",
      "Is gut-directed therapy available to me?",
    ],
    related: [
      { groupId: "anxiety", conditionId: "anxiety" },
      { groupId: "common-cancers", conditionId: "bowel" },
      { groupId: "sleep", conditionId: "insomnia" },
    ],
  },
};
