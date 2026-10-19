import type { LibraryCondition } from "../library";
import { AF_ASSOCIATION, article, ASTHMA_LUNG_UK, BHF, BLOOD_PRESSURE_UK, NHS, piece, source, STROKE_ASSOCIATION } from "../library-helpers";

// Heart & lungs: blood pressure, heart attack and angina, atrial fibrillation, COPD, asthma and
// sleep apnoea. Same shape as the Ischaemic stroke page (see brain-a.ts).

export const highBloodPressure: LibraryCondition = {
  id: "high-blood-pressure",
  title: "High blood pressure",
  summary: "Blood pushing too hard on the artery walls, usually without any symptoms at all. Over years it strains the heart, the brain and the kidneys, which is why the numbers matter even when you feel fine, and why bringing them down is one of the best things you can do after a stroke or heart attack.",
  facts: ["Usually no symptoms", "The biggest treatable cause of stroke", "Home readings often tell the truest story"],
  keywords: ["hypertension", "bp", "blood pressure", "high blood pressure", "reading"],
  content: {
    understand: [
      article("numbers", "What the blood pressure numbers actually mean", 3, { keywords: ["reading", "numbers", "hypertension"] }),
      article("after-stroke", "Why blood pressure matters after a stroke", 3, { keywords: ["stroke"] }),
      article("why-high", "Why it goes up: salt, weight, genes, age, kidneys", 4, { blurb: "The causes you can change and the ones you can't.", keywords: ["salt", "cause", "causes"] }),
      article("targets", "What your target should be, and why it differs", 3, { keywords: ["target", "goal"] }),
      article("home-monitor", "Measuring it at home properly", 3, { blurb: "The cuff, the chair, the five quiet minutes, and the diary.", keywords: ["monitor", "home", "cuff"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("tablets", "The tablets: ACE inhibitors, calcium blockers, diuretics and the rest", 6, { keywords: ["tablets", "medication", "ramipril", "amlodipine"] }),
      article("side-effects", "Side effects, and what to do instead of stopping", 4, { keywords: ["side effects", "cough", "dizzy"] }),
      article("salt", "Salt: where it hides, and how to eat less of it", 4, { keywords: ["salt", "diet", "food"] }),
      piece("video", "moving", "Exercise and blood pressure: what kind, how much", 6, { keywords: ["exercise", "walking"] }),
    ],
    liveWell: [
      article("alcohol-weight", "Alcohol, weight and blood pressure", 4, { keywords: ["alcohol", "weight"] }),
      article("missed-dose", "Missed a dose? What to do", 2, { keywords: ["missed", "dose", "forgot"] }),
      article("white-coat", "White-coat readings and the ones that count", 3, { keywords: ["white coat", "clinic", "nervous"] }),
      article("stress-sleep", "Stress, sleep and your numbers", 3, { keywords: ["stress", "sleep"] }),
    ],
    watch: [
      piece("video", "cuff", "How to take your blood pressure at home", 4),
      piece("animation", "in-pictures", "What high blood pressure does, in pictures", 3),
      piece("podcast", "numbers-talk", "Getting the numbers down: two people talk", 18),
    ],
    sources: [source(NHS, "High blood pressure: overview and treatment"), BLOOD_PRESSURE_UK, BHF, STROKE_ASSOCIATION],
    stories: [],
    askDoctor: [
      "What is my target, and how close am I?",
      "Should I check it at home, and how often?",
      "What should I do if a reading is very high?",
      "Which of my tablets is for blood pressure, and what does each do?",
    ],
    related: [
      { groupId: "stroke", conditionId: "ischaemic" },
      { groupId: "heart-attack", conditionId: "heart-attack" },
      { groupId: "kidneys", conditionId: "chronic-kidney-disease" },
      { groupId: "diabetes", conditionId: "type-2" },
    ],
  },
};

export const heartAttack: LibraryCondition = {
  id: "heart-attack",
  title: "Heart attack",
  summary: "A blocked artery starves part of the heart muscle of blood. Stents and clot-busting treatment in the first hours save muscle; the months after are about cardiac rehab, the tablets that protect you, and the habits that lower the chance of another one.",
  facts: ["Minutes matter: 999 at the first sign", "Most people have a stent within hours", "Cardiac rehab halves the chance of another"],
  keywords: ["heart attack", "chest pain", "cardiac", "myocardial infarction", "stent"],
  content: {
    understand: [
      article("statins", "Do statins really need to be taken for life?", 3, { keywords: ["statins", "cholesterol"] }),
      article("what-happened", "What happened to your heart", 4, { blurb: "The artery, the clot, the muscle, and what a stent does.", extra: "With a diagram", keywords: ["artery", "clot", "stent"] }),
      article("types", "STEMI, NSTEMI and what the letters mean", 3, { keywords: ["stemi", "nstemi", "ecg"] }),
      article("tests", "The tests: ECG, troponin, angiogram, echo", 4, { keywords: ["ecg", "troponin", "angiogram", "echo"] }),
      article("why-me", "Why it happened: cholesterol, pressure, smoking, family, bad luck", 5, { keywords: ["cause", "causes", "risk"] }),
    ],
    recover: [
      piece("video", "rehab", "Cardiac rehab: what it is and why it works", 7, { keywords: ["rehab", "exercise", "class"] }),
      article("tablets", "The tablets you left hospital with, and what each one does", 6, { keywords: ["aspirin", "clopidogrel", "beta blocker", "tablets"] }),
      article("first-weeks", "The first six weeks at home", 5, { keywords: ["home", "early", "weeks"] }),
      article("chest-pain", "Chest pain after a heart attack: what's normal, what's not", 3, { keywords: ["chest pain", "angina", "999"] }),
    ],
    liveWell: [
      article("driving-work", "Driving, work and flying", 4, { keywords: ["car", "dvla", "work", "flying"] }),
      article("food", "Eating for your heart, without misery", 5, { keywords: ["diet", "food", "mediterranean"] }),
      article("sex", "Sex after a heart attack", 3, { keywords: ["sex", "intimacy"] }),
      article("mood", "The low weeks: mood after a heart attack", 4, { keywords: ["mood", "depression", "anxious"] }),
      article("smoking", "Stopping smoking: the single biggest change", 4, { keywords: ["smoking", "quit"] }),
    ],
    watch: [
      piece("podcast", "alarm-clock", "The loudest alarm clock: two people talk about the year after", 24),
      piece("animation", "in-pictures", "A heart attack, in pictures", 4),
      piece("audio", "calm-heart", "A ten-minute breathing practice for a racing mind", 10, { extra: "read aloud" }),
    ],
    sources: [source(NHS, "Heart attack: symptoms, treatment and recovery"), BHF],
    stories: ["dev"],
    askDoctor: [
      "How much of my heart was affected, and what is my ejection fraction?",
      "Which tablets are for life, and which are for a year?",
      "When does cardiac rehab start, and how do I get there?",
      "What should make me call 999 again?",
    ],
    related: [
      { groupId: "heart-attack", conditionId: "angina" },
      { groupId: "blood-pressure", conditionId: "high-blood-pressure" },
      { groupId: "diabetes", conditionId: "type-2" },
      { groupId: "depression", conditionId: "depression" },
    ],
    companion: { storyId: "dev" },
  },
};

export const angina: LibraryCondition = {
  id: "angina",
  title: "Angina",
  summary: "Chest tightness or pain when the heart works harder than its narrowed arteries can supply: on the stairs, in the cold, after a meal. It is a warning rather than damage, and with the right spray, tablets and habits most people live full lives with it.",
  facts: ["Pain on effort that eases with rest", "A GTN spray eases an attack in minutes", "The same prevention as a heart attack"],
  keywords: ["angina", "chest pain", "chest tightness", "gtn spray"],
  content: {
    understand: [
      article("what-it-is", "What angina is", 3, { blurb: "Narrowed arteries, a heart that asks for more, and why rest helps.", extra: "With a diagram", keywords: ["cause", "arteries"] }),
      article("stable-unstable", "Stable or unstable: when it's an emergency", 3, { keywords: ["unstable", "emergency", "999"] }),
      article("tests", "The tests: ECG, stress test, CT angiogram", 4, { keywords: ["ecg", "stress test", "angiogram"] }),
      article("not-angina", "Chest pains that aren't angina", 3, { keywords: ["heartburn", "muscle", "anxiety"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("spray", "Using your GTN spray", 3, { keywords: ["gtn", "spray", "attack"] }),
      article("tablets", "Beta blockers, calcium blockers and the rest", 5, { keywords: ["tablets", "beta blocker", "medication"] }),
      article("stents-bypass", "Stents and bypass: when they're offered", 5, { keywords: ["stent", "bypass", "surgery"] }),
      piece("video", "rehab", "Exercising safely with angina", 6, { keywords: ["exercise", "walking", "rehab"] }),
    ],
    liveWell: [
      article("cold-meals", "Cold weather, big meals and other triggers", 3, { keywords: ["cold", "meals", "triggers"] }),
      article("driving-work", "Driving, work and flying", 3, { keywords: ["car", "dvla", "work"] }),
      article("food-smoking", "Eating, smoking and the arteries", 4, { keywords: ["diet", "smoking"] }),
      article("worry", "Living with a warning", 3, { keywords: ["worry", "anxious"] }),
    ],
    watch: [
      piece("video", "explained", "Angina explained in four minutes", 4),
      piece("podcast", "stairs", "Angina and the stairs: two people talk", 18),
    ],
    sources: [source(NHS, "Angina: symptoms, treatment and living with it"), BHF],
    stories: [],
    askDoctor: [
      "How narrowed are my arteries, and do I need a stent?",
      "How many sprays can I use before I call 999?",
      "Which activities should I avoid, and which are good for me?",
      "What are my cholesterol and blood pressure targets?",
    ],
    related: [
      { groupId: "heart-attack", conditionId: "heart-attack" },
      { groupId: "blood-pressure", conditionId: "high-blood-pressure" },
      { groupId: "anxiety", conditionId: "anxiety" },
    ],
  },
};

export const atrialFibrillation: LibraryCondition = {
  id: "atrial-fibrillation",
  title: "Atrial fibrillation",
  summary: "An irregular, often fast heartbeat, when the heart's upper chambers quiver instead of beating in time. Many people feel palpitations or breathlessness; some feel nothing. Blood can pool and clot, which is why AF raises the risk of stroke and why a blood thinner is so often prescribed.",
  facts: ["Raises stroke risk about fivefold", "Blood thinners cut that risk sharply", "Can come and go, or stay"],
  keywords: ["af", "afib", "atrial fibrillation", "irregular heartbeat", "palpitations", "fluttering"],
  content: {
    understand: [
      article("what-it-is", "What atrial fibrillation is", 4, { blurb: "The heart's wiring, the quivering chambers, and why the pulse feels chaotic.", extra: "With a diagram", keywords: ["heart", "rhythm", "cause"] }),
      article("stroke-link", "Why AF can cause a stroke", 3, { keywords: ["stroke", "clot", "risk"] }),
      article("types", "Paroxysmal, persistent, permanent: the types", 3, { keywords: ["paroxysmal", "persistent", "permanent"] }),
      article("tests", "ECG, monitors and the echo", 3, { keywords: ["ecg", "monitor", "echo"] }),
      article("symptoms", "Palpitations, tiredness and a racing heart: what AF can feel like", 3, { keywords: ["palpitations", "racing", "tired"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("anticoagulants", "Blood thinners: the choice, the bleeding risk, the benefit", 6, { keywords: ["anticoagulant", "apixaban", "warfarin", "doac"] }),
      article("rate-rhythm", "Slowing it down or putting it back in rhythm", 5, { keywords: ["beta blocker", "cardioversion", "rhythm"] }),
      article("ablation", "Ablation: who it's for and what it involves", 4, { keywords: ["ablation", "procedure"] }),
      article("checking-pulse", "Checking your own pulse", 2, { keywords: ["pulse", "check"] }),
    ],
    liveWell: [
      article("alcohol-caffeine", "Alcohol, caffeine and triggers", 3, { keywords: ["alcohol", "caffeine", "triggers"] }),
      article("bleeding", "Living on a blood thinner: cuts, dentists and operations", 4, { keywords: ["bleeding", "dentist", "surgery"] }),
      article("exercise", "Exercise with AF", 3, { keywords: ["exercise", "walking"] }),
      article("worry", "The worry of an irregular heart", 3, { keywords: ["anxious", "worry", "panic"] }),
    ],
    watch: [
      piece("animation", "in-pictures", "Atrial fibrillation, in pictures", 3),
      piece("podcast", "flutter", "Living with AF: two people talk", 20),
    ],
    sources: [source(NHS, "Atrial fibrillation: symptoms and treatment"), AF_ASSOCIATION, BHF, STROKE_ASSOCIATION],
    stories: [],
    askDoctor: [
      "What is my stroke risk score, and do I need a blood thinner?",
      "Is the plan to slow my heart or to restore its rhythm?",
      "What should I do if I feel an episode starting?",
      "Is ablation an option for me?",
    ],
    related: [
      { groupId: "stroke", conditionId: "ischaemic" },
      { groupId: "stroke", conditionId: "tia" },
      { groupId: "blood-pressure", conditionId: "high-blood-pressure" },
    ],
  },
};

export const copd: LibraryCondition = {
  id: "copd",
  title: "COPD",
  summary: "Chronic obstructive pulmonary disease: lungs that have become narrowed and damaged, usually by years of smoking, so that breathing out is slow and effortful. It cannot be reversed, but inhalers, pulmonary rehab and avoiding chest infections make a real difference to how you feel each day.",
  facts: ["Breathlessness that builds over years", "Pulmonary rehab is the most effective treatment after stopping smoking", "Chest infections need prompt treatment"],
  keywords: ["copd", "emphysema", "bronchitis", "breathless", "breathlessness", "lungs"],
  content: {
    understand: [
      article("what-it-is", "What COPD does to the lungs", 4, { blurb: "Narrowed airways, damaged air sacs, and why breathing out is the hard part.", extra: "With a diagram", keywords: ["lungs", "airways", "cause"] }),
      article("tests", "Spirometry and what the numbers mean", 3, { keywords: ["spirometry", "fev1", "test"] }),
      article("flare-ups", "Flare-ups: spotting one early", 4, { keywords: ["flare", "exacerbation", "infection"] }),
      article("breathless-why", "Why being out of breath feels frightening, and why it's safe to push a little", 3, { keywords: ["breathless", "panic", "fear"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      piece("video", "inhalers", "Inhalers: using yours properly", 6, { keywords: ["inhaler", "technique", "spacer"] }),
      piece("video", "rehab", "Pulmonary rehab: what it is and why it works", 7, { keywords: ["rehab", "exercise", "class"] }),
      article("rescue-pack", "Your rescue pack: when to start it", 3, { keywords: ["rescue pack", "antibiotics", "steroids"] }),
      article("oxygen", "Oxygen at home: who needs it", 4, { keywords: ["oxygen"] }),
    ],
    liveWell: [
      article("breathing", "Breathing techniques for the moments you're out of breath", 4, { keywords: ["breathing", "breathless", "pursed lips", "technique"] }),
      article("smoking", "Stopping smoking, even now", 4, { keywords: ["smoking", "quit"] }),
      article("vaccines", "Flu, COVID and pneumonia jabs", 2, { keywords: ["vaccine", "flu", "jab"] }),
      article("energy", "Pacing your day: showers, stairs and shopping", 4, { keywords: ["pacing", "energy", "stairs"] }),
      article("mood", "Being short of breath, anxiety and low mood", 4, { keywords: ["anxious", "mood", "depression"] }),
    ],
    watch: [
      piece("video", "breathing-video", "Pursed-lip breathing in three minutes", 3),
      piece("podcast", "lungs-talk", "Living with COPD: two people talk", 22),
      piece("audio", "calm-breath", "A ten-minute calm for short-of-breath evenings", 10, { extra: "read aloud" }),
    ],
    sources: [source(NHS, "COPD: symptoms, treatment and living with it"), ASTHMA_LUNG_UK, BHF],
    stories: [],
    askDoctor: [
      "What stage is my COPD, and what are my spirometry numbers?",
      "Am I using my inhalers correctly? Can you watch me?",
      "Can I be referred to pulmonary rehab?",
      "When should I start my rescue pack, and when should I call for help?",
    ],
    related: [
      { groupId: "long-term-lung", conditionId: "asthma" },
      { groupId: "sleep-breathing", conditionId: "sleep-apnoea" },
      { groupId: "anxiety", conditionId: "anxiety" },
    ],
  },
};

export const asthma: LibraryCondition = {
  id: "asthma",
  title: "Asthma",
  summary: "Airways that are sensitive and tighten up in response to triggers like colds, cold air, pollen or exercise, causing wheeze, cough and breathlessness. A preventer inhaler used every day keeps most people's asthma quiet, and a written plan tells you what to do when it isn't.",
  facts: ["A preventer every day, not just when wheezy", "Every person should have a written action plan", "Attacks are an emergency: know the steps"],
  keywords: ["asthma", "wheeze", "wheezing", "inhaler", "breathless", "cough"],
  content: {
    understand: [
      article("what-it-is", "What asthma does in the airways", 3, { blurb: "Inflammation, tightening and mucus. Why a preventer works on the first and a reliever on the second.", extra: "With a diagram", keywords: ["airways", "inflammation"] }),
      article("triggers", "Triggers: colds, pollen, cold air, exercise, stress", 4, { keywords: ["triggers", "pollen", "cold", "exercise"] }),
      article("tests", "Peak flow, spirometry and FeNO", 3, { keywords: ["peak flow", "spirometry", "test"] }),
      article("adult-onset", "Asthma that starts in adulthood", 3, { keywords: ["adult", "late onset"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      piece("video", "inhalers", "Preventer and reliever: using them properly", 6, { keywords: ["inhaler", "technique", "spacer", "preventer", "reliever"] }),
      article("action-plan", "Your asthma action plan", 4, { keywords: ["action plan", "plan", "zones"] }),
      article("attack", "An asthma attack: what to do, step by step", 3, { keywords: ["attack", "999", "emergency"] }),
      article("reviews", "The yearly review, and why it matters", 2, { keywords: ["review", "nurse"] }),
    ],
    liveWell: [
      article("exercise", "Exercise with asthma", 3, { keywords: ["exercise", "sport", "running"] }),
      article("home", "Dust, damp, pets and the house", 3, { keywords: ["dust", "damp", "pets", "home"] }),
      article("smoking-vaping", "Smoking, vaping and asthma", 2, { keywords: ["smoking", "vaping"] }),
      article("hay-fever", "Hay fever season", 3, { keywords: ["hay fever", "pollen", "antihistamine"] }),
    ],
    watch: [
      piece("video", "technique", "Inhaler technique in three minutes", 3),
      piece("animation", "in-pictures", "Asthma in the airways, in pictures", 3),
    ],
    sources: [source(NHS, "Asthma: symptoms, treatment and living with it"), ASTHMA_LUNG_UK],
    stories: [],
    askDoctor: [
      "Can we write or update my action plan today?",
      "Am I using my inhaler correctly? Can you watch me?",
      "How often is too often for my reliever?",
      "What are my triggers, and can any be tested for?",
    ],
    related: [
      { groupId: "long-term-lung", conditionId: "copd" },
      { groupId: "anxiety", conditionId: "anxiety" },
    ],
  },
};

export const sleepApnoea: LibraryCondition = {
  id: "sleep-apnoea",
  title: "Sleep apnoea",
  summary: "Breathing that stops and starts through the night as the throat closes, often with loud snoring. You may not know it is happening, but the broken sleep leaves you exhausted by day and strains the heart. A CPAP machine, used every night, transforms most people's days.",
  facts: ["Loud snoring and pauses in breathing", "Daytime sleepiness is the usual clue", "CPAP every night is the main treatment"],
  keywords: ["sleep apnoea", "snoring", "cpap", "tired", "sleepy", "breathing at night"],
  content: {
    understand: [
      article("what-happens", "What happens in the throat while you sleep", 3, { blurb: "Relaxed muscles, a closed airway, a brief waking you don't remember.", extra: "With a diagram", keywords: ["throat", "airway", "cause"] }),
      article("why-it-matters", "Why it matters: heart, blood pressure, driving and mood", 4, { keywords: ["heart", "blood pressure", "driving"] }),
      article("tests", "The sleep study: what it measures", 3, { keywords: ["sleep study", "test", "monitor"] }),
      article("severity", "Mild, moderate, severe: the AHI number", 2, { keywords: ["ahi", "severity"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      piece("video", "cpap", "Getting on with CPAP: masks, leaks and the first fortnight", 7, { keywords: ["cpap", "mask", "machine"] }),
      article("mouthpiece", "Mandibular devices: the mouthpiece option", 3, { keywords: ["mouthpiece", "device", "dentist"] }),
      article("weight-position", "Weight, alcohol and sleeping position", 4, { keywords: ["weight", "alcohol", "position", "side"] }),
    ],
    liveWell: [
      article("driving", "Driving and the DVLA", 3, { keywords: ["car", "dvla", "driving", "sleepy"] }),
      article("travel", "Travelling with CPAP", 2, { keywords: ["travel", "flying", "holiday"] }),
      article("partner", "For the person next to you", 3, { keywords: ["partner", "snoring"] }),
      article("energy", "Getting your days back", 3, { keywords: ["energy", "tired", "daytime"] }),
    ],
    watch: [
      piece("video", "explained", "Sleep apnoea explained in four minutes", 4),
      piece("podcast", "cpap-talk", "The first year on CPAP: two people talk", 18),
    ],
    sources: [source(NHS, "Sleep apnoea: symptoms and treatment"), ASTHMA_LUNG_UK, BHF],
    stories: [],
    askDoctor: [
      "How severe is my sleep apnoea?",
      "What should I do if I can't get on with the mask?",
      "Do I need to tell the DVLA?",
      "Could losing weight or treating my nose make a difference?",
    ],
    related: [
      { groupId: "sleep", conditionId: "insomnia" },
      { groupId: "blood-pressure", conditionId: "high-blood-pressure" },
      { groupId: "heart-rhythm", conditionId: "atrial-fibrillation" },
    ],
  },
};
