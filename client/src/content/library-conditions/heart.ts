import type { LibraryCondition } from "../library";
import { AF_ASSOCIATION, article, ASTHMA_LUNG_UK, BHF, BLOOD_PRESSURE_UK, NHS, piece, source, STROKE_ASSOCIATION } from "../library-helpers";

// Heart & lungs: blood pressure, heart attack and angina, atrial fibrillation, COPD, asthma and
// sleep apnoea. Same shape as the Ischaemic stroke page (see brain-a.ts).

export const highBloodPressure: LibraryCondition = {
  id: "high-blood-pressure",
  title: "High blood pressure",
  summary: "Blood pushing too hard on the artery walls, usually without any symptoms at all. Over years it strains the heart, the brain and the kidneys, which is why the numbers matter even when you feel fine, and why bringing them down is one of the best things you can do after a stroke or heart attack.",
  facts: ["Usually causes no symptoms at all", "Biggest single risk factor for stroke", "High: 140/90 in clinic, 135/85 at home"],
  keywords: ["hypertension", "bp", "blood pressure", "high blood pressure", "reading"],
  content: {
    understand: [
      article("numbers", "What the blood pressure numbers actually mean", 3, { blurb: "The top number, the bottom number, and what counts as high.", learnId: "hbp-numbers", keywords: ["reading", "numbers", "hypertension"] }),
      article("after-stroke", "Why blood pressure matters after a stroke", 3, { learnId: "hbp-after-stroke", keywords: ["stroke"] }),
      article("why-high", "Why it goes up: salt, weight, genes, age, kidneys", 4, { blurb: "The causes you can change and the ones you can't.", learnId: "hbp-why-high", keywords: ["salt", "cause", "causes"] }),
      article("targets", "What your target should be, and why it differs", 3, { learnId: "hbp-targets", keywords: ["target", "goal"] }),
      article("home-monitor", "Measuring it at home properly", 3, { blurb: "The cuff, the chair, the five quiet minutes, and the diary.", learnId: "hbp-home-monitor", keywords: ["monitor", "home", "cuff"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("tablets", "The tablets: ACE inhibitors, calcium blockers, diuretics and the rest", 6, { learnId: "hbp-tablets", keywords: ["tablets", "medication", "ramipril", "amlodipine"] }),
      article("side-effects", "Side effects, and what to do instead of stopping", 4, { learnId: "hbp-side-effects", keywords: ["side effects", "cough", "dizzy"] }),
      article("salt", "Salt: where it hides, and how to eat less of it", 4, { learnId: "hbp-salt", keywords: ["salt", "diet", "food"] }),
      article("moving", "Exercise and blood pressure: what kind, how much", 4, { learnId: "hbp-moving", keywords: ["exercise", "walking"] }),
    ],
    liveWell: [
      article("alcohol-weight", "Alcohol, weight and blood pressure", 4, { learnId: "hbp-alcohol-weight", keywords: ["alcohol", "weight"] }),
      article("missed-dose", "Missed a dose? What to do", 2, { learnId: "hbp-missed-dose", keywords: ["missed", "dose", "forgot"] }),
      article("white-coat", "White-coat readings and the ones that count", 3, { learnId: "hbp-white-coat", keywords: ["white coat", "clinic", "nervous"] }),
      article("stress-sleep", "Stress, sleep and your numbers", 3, { learnId: "hbp-stress-sleep", keywords: ["stress", "sleep"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title and channel from YouTube's oEmbed,
    // running time from the video's page.
    watch: [
      { id: "yt-bhf-understanding-bp", title: "Understanding Blood Pressure", kind: "video", duration: "1:55", url: "https://www.youtube.com/watch?v=4YNdp3pRjig", extra: "an animation, with subtitles", publisher: "British Heart Foundation", keywords: ["blood pressure"] },
      { id: "yt-bhf-measure-home", title: "How to measure your blood pressure at home", kind: "video", duration: "1:54", url: "https://www.youtube.com/watch?v=wKCa9g0ob7k", extra: "step by step, with a home monitor", publisher: "British Heart Foundation", keywords: ["monitor", "home", "cuff"] },
      { id: "yt-bpuk-measure-home", title: "How to measure your blood pressure at home", kind: "video", duration: "4:46", url: "https://www.youtube.com/watch?v=TItRBH7wbfk", extra: "knowing your numbers, and home checks", publisher: "Blood Pressure UK", keywords: ["monitor", "home", "numbers"] },
    ],
    sources: [source(NHS, "High blood pressure: overview and treatment"), BLOOD_PRESSURE_UK, BHF, STROKE_ASSOCIATION],
    stories: [],
    // Real people's stories. Checked 20 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-steve-bp", person: "Steve", title: "High blood pressure: Steve's Story", channel: "NHS Somerset", url: "https://www.youtube.com/watch?v=KdSwNYEdrZY", duration: "2:43", about: "Steve had a stroke at 36, and explains why getting your blood pressure checked matters." },
      { id: "yt-david-bp", person: "David", title: "David's story: finding high blood pressure in the community", channel: "British Heart Foundation", url: "https://www.youtube.com/watch?v=z0z7uuctK-0", duration: "3:45", about: "David did not know his blood pressure was very high until a project visited his community centre in Bradford." },
      { id: "yt-adam-bp", person: "Adam", title: "Adam's stroke: a missed case of high blood pressure", channel: "British Heart Foundation", url: "https://www.youtube.com/watch?v=AnyeRLcFjGg", duration: "3:26", about: "Adam had a stroke at 47, and only found out afterwards that he had high blood pressure." },
    ],
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
  facts: ["Usually caused by a blood clot", "Call 999, and don't drive to A&E", "Cardiac rehab is offered at any age"],
  keywords: ["heart attack", "chest pain", "cardiac", "myocardial infarction", "stent"],
  content: {
    understand: [
      article("statins", "Do statins really need to be taken for life?", 3, { learnId: "mi-statins", keywords: ["statins", "cholesterol"] }),
      article("what-happened", "What happened to your heart", 4, { blurb: "The artery, the clot, the muscle, and what a stent does.", extra: "With a diagram", learnId: "mi-what-happened", keywords: ["artery", "clot", "stent"] }),
      article("types", "STEMI, NSTEMI and what the letters mean", 3, { learnId: "mi-types", keywords: ["stemi", "nstemi", "ecg"] }),
      article("tests", "The tests: ECG, troponin, angiogram, echo", 4, { learnId: "mi-tests", keywords: ["ecg", "troponin", "angiogram", "echo"] }),
      article("why-me", "Why it happened: cholesterol, pressure, smoking, family", 5, { learnId: "mi-why-me", keywords: ["cause", "causes", "risk"] }),
    ],
    recover: [
      article("rehab", "Cardiac rehab: what it is and why it works", 4, { learnId: "mi-rehab", keywords: ["rehab", "exercise", "class"] }),
      article("tablets", "The tablets you left hospital with, and what each one does", 6, { learnId: "mi-tablets", keywords: ["aspirin", "clopidogrel", "beta blocker", "tablets"] }),
      article("first-weeks", "The first six weeks at home", 5, { learnId: "mi-first-weeks", keywords: ["home", "early", "weeks"] }),
      article("chest-pain", "Chest pain after a heart attack: what's normal, what's not", 3, { learnId: "mi-chest-pain", keywords: ["chest pain", "angina", "999"] }),
    ],
    liveWell: [
      article("driving-work", "Driving, work and flying", 4, { learnId: "mi-driving-work", keywords: ["car", "dvla", "work", "flying"] }),
      article("food", "Eating for your heart, without misery", 5, { learnId: "mi-food", keywords: ["diet", "food", "mediterranean"] }),
      article("sex", "Sex after a heart attack", 3, { learnId: "mi-sex", keywords: ["sex", "intimacy"] }),
      article("mood", "The low weeks: mood after a heart attack", 4, { learnId: "mi-mood", keywords: ["mood", "depression", "anxious"] }),
      article("smoking", "Stopping smoking: the single biggest change", 4, { learnId: "mi-smoking", keywords: ["smoking", "quit"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title and channel from YouTube's oEmbed,
    // running time from the video's page.
    watch: [
      { id: "yt-bhf-what-is-a-heart-attack", title: "What is a heart attack", kind: "video", duration: "3:00", url: "https://www.youtube.com/watch?v=bw_Vv2WRG-A", extra: "an animation: what happens, and treatment", publisher: "British Heart Foundation", keywords: ["heart attack", "treatment"] },
      { id: "yt-bhf-heart-attack-symptoms", title: "Heart attack symptoms to look out for", kind: "video", duration: "2:56", url: "https://www.youtube.com/watch?v=ppP6rGIfWf0", extra: "a cardiac nurse on the symptoms", publisher: "British Heart Foundation", keywords: ["symptoms", "999", "chest pain"] },
      { id: "yt-bhf-what-is-cardiac-rehab", title: "What is cardiac rehabilitation?", kind: "video", duration: "3:10", url: "https://www.youtube.com/watch?v=GU4LFDHf9hE", extra: "what to expect at rehab", publisher: "British Heart Foundation", keywords: ["rehab", "exercise"] },
    ],
    sources: [source(NHS, "Heart attack: symptoms, treatment and recovery"), BHF],
    stories: ["dev"],
    // Real people's stories. Checked 20 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-caroline-mi", person: "Caroline", title: "Travelling After a Heart Attack - Caroline's Story", channel: "British Heart Foundation", url: "https://www.youtube.com/watch?v=YelD3Cx7FZ0", duration: "2:27", about: "A heart attack affected Caroline's confidence; after recovering, she is travelling the world again." },
      { id: "yt-colin-mi", person: "Colin", title: "Get up and go, Colin's story", channel: "British Heart Foundation", url: "https://www.youtube.com/watch?v=7fCxAcNTTnM", duration: "6:27", about: "Colin's heart attack at 62 was a wake-up call; he shares how he changed his lifestyle." },
      { id: "yt-des-mi", person: "Des", title: "Des is a survivor of two heart attacks and shares his experience", channel: "HEART UK", url: "https://www.youtube.com/watch?v=YW8zJNgRTYY", duration: "4:12", about: "Des had stents after two heart attacks, and talks about recovering physically and emotionally." },
    ],
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
  facts: ["Attacks usually last under 10 minutes", "Usually caused by narrowed arteries", "Car drivers need not tell DVLA"],
  keywords: ["angina", "chest pain", "chest tightness", "gtn spray"],
  content: {
    understand: [
      article("what-it-is", "What angina is", 3, { blurb: "Narrowed arteries, a heart that asks for more, and why rest helps.", extra: "With a diagram", learnId: "ang-what-it-is", keywords: ["cause", "arteries"] }),
      article("stable-unstable", "Stable or unstable: when it's an emergency", 3, { learnId: "ang-stable-unstable", keywords: ["unstable", "emergency", "999"] }),
      article("tests", "The tests: ECG, stress test, CT angiogram", 4, { learnId: "ang-tests", keywords: ["ecg", "stress test", "angiogram"] }),
      article("not-angina", "Chest pains that aren't angina", 3, { learnId: "ang-not-angina", keywords: ["heartburn", "muscle", "anxiety"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("spray", "Using your GTN spray", 3, { learnId: "ang-spray", keywords: ["gtn", "spray", "attack"] }),
      article("tablets", "Beta blockers, calcium blockers and the rest", 5, { learnId: "ang-tablets", keywords: ["tablets", "beta blocker", "medication"] }),
      article("stents-bypass", "Stents and bypass: when they're offered", 5, { learnId: "ang-stents-bypass", keywords: ["stent", "bypass", "surgery"] }),
      article("rehab", "Exercising safely with angina", 4, { learnId: "ang-rehab", keywords: ["exercise", "walking", "rehab"] }),
    ],
    liveWell: [
      article("cold-meals", "Cold weather, big meals and other triggers", 3, { learnId: "ang-cold-meals", keywords: ["cold", "meals", "triggers"] }),
      article("driving-work", "Driving, work and flying", 3, { learnId: "ang-driving-work", keywords: ["car", "dvla", "work"] }),
      article("food-smoking", "Eating, smoking and the arteries", 4, { learnId: "ang-food-smoking", keywords: ["diet", "smoking"] }),
      article("worry", "Living with a warning", 3, { learnId: "ang-worry", keywords: ["worry", "anxious"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title and channel from YouTube's oEmbed,
    // running time from the video's page.
    watch: [
      { id: "yt-bhf-all-about-angina", title: "All about angina", kind: "video", duration: "3:04", url: "https://www.youtube.com/watch?v=oQ90VLrCnBM", extra: "an animation on managing angina", publisher: "British Heart Foundation", keywords: ["angina"] },
      { id: "yt-bhf-what-is-angina", title: "What is angina", kind: "video", duration: "2:30", url: "https://www.youtube.com/watch?v=k5VjGgk7Wqc", extra: "types, triggers and lifestyle changes", publisher: "British Heart Foundation", keywords: ["angina", "triggers"] },
      { id: "yt-ekhuft-gtn-spray", title: "About GTN spray for angina", kind: "video", duration: "4:11", url: "https://www.youtube.com/watch?v=rqVGsbvcNgc", extra: "how to use the spray safely", publisher: "East Kent Hospitals University NHS Foundation Trust", keywords: ["gtn", "spray"] },
    ],
    sources: [source(NHS, "Angina: symptoms, treatment and living with it"), BHF],
    stories: [],
    // Real people's stories. Checked 20 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-elsa-angina", person: "Elsa", title: "Why we need to take angina seriously | Elsa Steo's story", channel: "World Heart Federation", url: "https://www.youtube.com/watch?v=8MRcophPeqY", duration: "3:47", about: "Elsa almost put her symptoms down to stress, but friends and a doctor who took her seriously meant her angina was not missed." },
      { id: "yt-joanne-angina", person: "Joanne", title: "Living with vasospastic angina – Joanne's story", channel: "World Heart Federation", url: "https://www.youtube.com/watch?v=Z_wKPyL6ano", duration: "2:38", about: "Joanne found a walk up the street left her breathless, and saw many doctors over years to find out why." },
      { id: "yt-len-bypass", person: "Len", title: "Having a heart bypass, Len's story", channel: "British Heart Foundation", url: "https://www.youtube.com/watch?v=vJuXyRLVklM", duration: "1:48", about: "Len explains how he found out he needed bypass surgery, and how life has improved since." },
    ],
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
  facts: ["Stroke risk five times higher with AF", "Many people have no symptoms", "No cure, but treatment helps"],
  keywords: ["af", "afib", "atrial fibrillation", "irregular heartbeat", "palpitations", "fluttering"],
  content: {
    understand: [
      article("what-it-is", "What atrial fibrillation is", 4, { blurb: "The heart's wiring, the twitching chambers, and why the pulse feels uneven.", extra: "With a diagram", learnId: "af-what-it-is", keywords: ["heart", "rhythm", "cause"] }),
      article("stroke-link", "Why AF can cause a stroke", 3, { learnId: "af-stroke-link", keywords: ["stroke", "clot", "risk"] }),
      article("types", "Paroxysmal, persistent, permanent: the types", 3, { learnId: "af-types", keywords: ["paroxysmal", "persistent", "permanent"] }),
      article("tests", "ECG, monitors and the echo", 3, { learnId: "af-tests", keywords: ["ecg", "monitor", "echo"] }),
      article("symptoms", "Palpitations, tiredness and a racing heart: what AF can feel like", 3, { learnId: "af-symptoms", keywords: ["palpitations", "racing", "tired"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("anticoagulants", "Blood thinners: the choice, the bleeding risk, the benefit", 6, { learnId: "af-anticoagulants", keywords: ["anticoagulant", "apixaban", "warfarin", "doac"] }),
      article("rate-rhythm", "Slowing it down or putting it back in rhythm", 5, { learnId: "af-rate-rhythm", keywords: ["beta blocker", "cardioversion", "rhythm"] }),
      article("ablation", "Ablation: who it's for and what it involves", 4, { learnId: "af-ablation", keywords: ["ablation", "procedure"] }),
      article("checking-pulse", "Checking your own pulse", 2, { learnId: "af-checking-pulse", keywords: ["pulse", "check"] }),
    ],
    liveWell: [
      article("alcohol-caffeine", "Alcohol, caffeine and triggers", 3, { learnId: "af-alcohol-caffeine", keywords: ["alcohol", "caffeine", "triggers"] }),
      article("bleeding", "Living on a blood thinner: cuts, dentists and operations", 4, { learnId: "af-bleeding", keywords: ["bleeding", "dentist", "surgery"] }),
      article("exercise", "Exercise with AF", 3, { learnId: "af-exercise", keywords: ["exercise", "walking"] }),
      article("worry", "The worry of an irregular heart", 3, { learnId: "af-worry", keywords: ["anxious", "worry", "panic"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title and channel from YouTube's oEmbed,
    // running time from the video's page.
    watch: [
      { id: "yt-bhf-what-is-af", title: "What is Atrial Fibrillation?", kind: "video", duration: "2:12", url: "https://www.youtube.com/watch?v=ezTEc6GwLNs", extra: "what happens to the heartbeat", publisher: "British Heart Foundation", keywords: ["af", "heart rhythm"] },
      { id: "yt-bhf-af-stroke", title: "Why does AF increase your risk of stroke?", kind: "video", duration: "0:30", url: "https://www.youtube.com/watch?v=SXCeECd2zgo", extra: "the link with stroke", publisher: "British Heart Foundation", keywords: ["stroke", "clot"] },
      { id: "yt-bhf-noacs", title: "How do novel oral anticoagulants (NOACs) work?", kind: "video", duration: "1:40", url: "https://www.youtube.com/watch?v=L9GaJmm6Exo", extra: "how newer blood thinners work", publisher: "British Heart Foundation", keywords: ["anticoagulant", "blood thinner"] },
    ],
    sources: [source(NHS, "Atrial fibrillation: symptoms and treatment"), AF_ASSOCIATION, BHF, STROKE_ASSOCIATION],
    stories: [],
    // Real people's stories. Checked 20 October 2026; each detail is from the video's own title.
    videoStories: [
      { id: "yt-kim-af", person: "Kim", title: "Living with atrial fibrillation (AF) – Kim's story", channel: "British Heart Foundation", url: "https://www.youtube.com/watch?v=P_T8p8XHI8w", duration: "3:44", about: "Kim talks about living with atrial fibrillation." },
      { id: "yt-jayne-af", person: "Jayne", title: "Living with atrial fibrillation (AF) – Jayne's story", channel: "British Heart Foundation", url: "https://www.youtube.com/watch?v=1Dna0ddaO_w", duration: "3:09", about: "Jayne talks about living with atrial fibrillation." },
      { id: "yt-rosemary-af", person: "Rosemary", title: "AF Patient Voices: Rosemary's story", channel: "Arrhythmia Alliance", url: "https://www.youtube.com/watch?v=bZb9JSM3MVk", duration: "3:27", about: "Rosemary shares her story in the AF Patient Voices series." },
    ],
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
  facts: ["Around 9 in 10 cases linked to smoking", "Flare-ups usually last 7 to 10 days", "Rehab: usually two sessions a week"],
  keywords: ["copd", "emphysema", "bronchitis", "breathless", "breathlessness", "lungs"],
  content: {
    understand: [
      article("what-it-is", "What COPD does to the lungs", 4, { blurb: "Narrowed airways, damaged air sacs, and why breathing out is the hard part.", extra: "With a diagram", learnId: "copd-what-it-is", keywords: ["lungs", "airways", "cause"] }),
      article("tests", "Spirometry and what the numbers mean", 3, { learnId: "copd-tests", keywords: ["spirometry", "fev1", "test"] }),
      article("flare-ups", "Flare-ups: spotting one early", 4, { learnId: "copd-flare-ups", keywords: ["flare", "exacerbation", "infection"] }),
      article("breathless-why", "Why being out of breath feels frightening, and why it's safe to push a little", 3, { learnId: "copd-breathless-why", keywords: ["breathless", "panic", "fear"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("inhalers", "Inhalers: using yours properly", 4, { learnId: "copd-inhalers", keywords: ["inhaler", "technique", "spacer"] }),
      article("rehab", "Pulmonary rehab: what it is and why it works", 4, { learnId: "copd-rehab", keywords: ["rehab", "exercise", "class"] }),
      article("rescue-pack", "Your rescue pack: when to start it", 3, { learnId: "copd-rescue-pack", keywords: ["rescue pack", "antibiotics", "steroids"] }),
      article("oxygen", "Oxygen at home: who needs it", 4, { learnId: "copd-oxygen", keywords: ["oxygen"] }),
    ],
    liveWell: [
      article("breathing", "Breathing techniques for the moments you're out of breath", 4, { learnId: "copd-breathing", keywords: ["breathing", "breathless", "pursed lips", "technique"] }),
      article("smoking", "Stopping smoking, even now", 4, { learnId: "copd-smoking", keywords: ["smoking", "quit"] }),
      article("vaccines", "Flu, COVID and pneumonia jabs", 2, { learnId: "copd-vaccines", keywords: ["vaccine", "flu", "jab"] }),
      article("energy", "Pacing your day: showers, stairs and getting out", 4, { learnId: "copd-energy", keywords: ["pacing", "energy", "stairs"] }),
      article("mood", "Being short of breath, anxiety and low mood", 4, { learnId: "copd-mood", keywords: ["anxious", "mood", "depression"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title and channel from YouTube's oEmbed,
    // running time from the video's page.
    watch: [
      { id: "yt-nhs-pulmonary-rehab", title: "Pulmonary rehabilitation", kind: "video", duration: "2:54", url: "https://www.youtube.com/watch?v=JGzlcU9PQ-M", extra: "a nurse and patients explain rehab", publisher: "NHS", keywords: ["rehab", "exercise"] },
      { id: "yt-alu-keep-active", title: "Keep active with a lung condition: introduction", kind: "video", duration: "2:44", url: "https://www.youtube.com/watch?v=Kcu6ECzLEXU", extra: "why staying active helps", publisher: "Asthma + Lung UK", keywords: ["active", "exercise"] },
      { id: "yt-alu-breath-back", title: "How to get my breath back", kind: "video", duration: "6:02", url: "https://www.youtube.com/watch?v=m_XCRf9EjNs", extra: "positions and breathing to recover", publisher: "Asthma + Lung UK", keywords: ["breathless", "breathing"] },
    ],
    sources: [source(NHS, "COPD: symptoms, treatment and living with it"), ASTHMA_LUNG_UK, BHF],
    stories: [],
    // Real people's stories. Checked 20 October 2026; each detail is from the video's own title.
    videoStories: [
      { id: "yt-derek-copd", person: "Derek", title: "Derek's Story - Living with COPD", channel: "Chest Heart & Stroke Scotland", url: "https://www.youtube.com/watch?v=8h0shUtfuAw", duration: "3:18", about: "Derek shares his story of living with COPD." },
      { id: "yt-tina-copd", person: "Tina", title: "Living with COPD - Tina's Story", channel: "COPD Foundation", url: "https://www.youtube.com/watch?v=W4kWLqvwzGM", duration: "2:27", about: "Tina talks about her life with COPD." },
      { id: "yt-don-carole-copd", person: "Don and Carole", title: "Living with COPD: Don and Carole's story", channel: "Health Innovation Manchester", url: "https://www.youtube.com/watch?v=TWJEYpBXJq4", duration: "3:19", about: "Don and Carole talk about living with COPD." },
    ],
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
  facts: ["About 8 in 100 people in the UK have it", "Everyone with asthma needs a preventer", "Have an asthma review at least yearly"],
  keywords: ["asthma", "wheeze", "wheezing", "inhaler", "breathless", "cough"],
  content: {
    understand: [
      article("what-it-is", "What asthma does in the airways", 3, { blurb: "Tightening, swelling and mucus, and why a preventer and a reliever do different jobs.", extra: "With a diagram", learnId: "ast-what-it-is", keywords: ["airways", "inflammation"] }),
      article("triggers", "Triggers: colds, pollen, cold air, exercise, stress", 4, { learnId: "ast-triggers", keywords: ["triggers", "pollen", "cold", "exercise"] }),
      article("tests", "Peak flow, spirometry and FeNO", 3, { learnId: "ast-tests", keywords: ["peak flow", "spirometry", "test"] }),
      article("adult-onset", "Asthma that starts in adulthood", 3, { learnId: "ast-adult-onset", keywords: ["adult", "late onset"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("inhalers", "Preventer and reliever: using them properly", 4, { learnId: "ast-inhalers", keywords: ["inhaler", "technique", "spacer", "preventer", "reliever"] }),
      article("action-plan", "Your asthma action plan", 4, { learnId: "ast-action-plan", keywords: ["action plan", "plan", "zones"] }),
      article("attack", "An asthma attack: what to do, step by step", 3, { learnId: "ast-attack", keywords: ["attack", "999", "emergency"] }),
      article("reviews", "The yearly review, and why it matters", 2, { learnId: "ast-reviews", keywords: ["review", "nurse"] }),
    ],
    liveWell: [
      article("exercise", "Exercise with asthma", 3, { learnId: "ast-exercise", keywords: ["exercise", "sport", "running"] }),
      article("home", "Dust, damp, pets and the house", 3, { learnId: "ast-home", keywords: ["dust", "damp", "pets", "home"] }),
      article("smoking-vaping", "Smoking, vaping and asthma", 2, { learnId: "ast-smoking-vaping", keywords: ["smoking", "vaping"] }),
      article("hay-fever", "Hay fever season", 3, { learnId: "ast-hay-fever", keywords: ["hay fever", "pollen", "antihistamine"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title and channel from YouTube's oEmbed,
    // running time from the video's page.
    watch: [
      { id: "yt-alu-asthma-lungs", title: "How asthma affects your lungs", kind: "video", duration: "1:37", url: "https://www.youtube.com/watch?v=aFmL7QLy758", extra: "what happens in the airways", publisher: "Asthma + Lung UK", keywords: ["airways", "lungs"] },
      { id: "yt-alu-asthma-attack", title: "What to do during an asthma attack", kind: "video", duration: "1:15", url: "https://www.youtube.com/watch?v=pt53nH_dX1Y", extra: "a respiratory nurse on the steps", publisher: "Asthma + Lung UK", keywords: ["attack", "999"] },
      { id: "yt-alu-pmdi", title: "How to use a pMDI inhaler", kind: "video", duration: "3:01", url: "https://www.youtube.com/watch?v=MVbXUdV5mHU", extra: "puffer inhaler technique", publisher: "Asthma + Lung UK", keywords: ["inhaler", "technique"] },
    ],
    sources: [source(NHS, "Asthma: symptoms, treatment and living with it"), ASTHMA_LUNG_UK],
    stories: [],
    // Real people's stories, from a European patients' federation; all three live with severe asthma.
    // Checked 20 October 2026; each detail is from the video's own title.
    videoStories: [
      { id: "yt-peter-asthma", person: "Peter", title: "Severely, ASTHMA! The diagnosis of severe asthma, Peter's story", channel: "EFA Patients", url: "https://www.youtube.com/watch?v=R4gTxIZK9P8", duration: "4:49", about: "Peter talks about being diagnosed with severe asthma." },
      { id: "yt-nadia-asthma", person: "Nadia", title: "Severely, ASTHMA! The impact of air quality, Nadia's story", channel: "EFA Patients", url: "https://www.youtube.com/watch?v=JfGwpRzzsNk", duration: "5:08", about: "Nadia talks about how air quality affects her life with severe asthma." },
      { id: "yt-anne-asthma", person: "Anne", title: "Severely, ASTHMA! Social life with severe asthma, Anne's story", channel: "EFA Patients", url: "https://www.youtube.com/watch?v=sC2z6iWYXhM", duration: "5:33", about: "Anne talks about her social life with severe asthma." },
    ],
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
  summary: "Breathing that stops and starts through the night as the throat closes, often with loud snoring. You may not know it is happening, but the broken sleep can leave you exhausted by day, and untreated it can affect the heart and blood pressure. Treatment, often a CPAP machine used every night, can help you feel more refreshed.",
  facts: ["Breathing stops and starts during sleep", "Usually tested at home overnight", "CPAP is free on the NHS if you need it"],
  keywords: ["sleep apnoea", "snoring", "cpap", "tired", "sleepy", "breathing at night"],
  content: {
    understand: [
      article("what-happens", "What happens in the throat while you sleep", 3, { blurb: "Relaxed muscles, a closed airway, a brief waking you don't remember.", extra: "With a diagram", learnId: "osa-what-happens", keywords: ["throat", "airway", "cause"] }),
      article("why-it-matters", "Why it matters: heart, blood pressure, driving and mood", 4, { learnId: "osa-why-it-matters", keywords: ["heart", "blood pressure", "driving"] }),
      article("tests", "The sleep study: what it measures", 3, { learnId: "osa-tests", keywords: ["sleep study", "test", "monitor"] }),
      article("severity", "Mild, moderate, severe: the AHI number", 2, { learnId: "osa-severity", keywords: ["ahi", "severity"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("cpap", "Getting on with CPAP: masks, leaks and the first weeks", 4, { learnId: "osa-cpap", keywords: ["cpap", "mask", "machine"] }),
      article("mouthpiece", "Mandibular devices: the mouthpiece option", 3, { learnId: "osa-mouthpiece", keywords: ["mouthpiece", "device", "dentist"] }),
      article("weight-position", "Weight, alcohol and sleeping position", 4, { learnId: "osa-weight-position", keywords: ["weight", "alcohol", "position", "side"] }),
    ],
    liveWell: [
      article("driving", "Driving and the DVLA", 3, { learnId: "osa-driving", keywords: ["car", "dvla", "driving", "sleepy"] }),
      article("travel", "Travelling with CPAP", 2, { learnId: "osa-travel", keywords: ["travel", "flying", "holiday"] }),
      article("partner", "For the person next to you", 3, { learnId: "osa-partner", keywords: ["partner", "snoring"] }),
      article("energy", "Getting your days back", 3, { learnId: "osa-energy", keywords: ["energy", "tired", "daytime"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title and channel from YouTube's oEmbed,
    // running time from the video's page.
    watch: [
      { id: "yt-mayo-osa", title: "Obstructive Sleep Apnea", kind: "video", duration: "2:40", url: "https://www.youtube.com/watch?v=z12MEPiG4cg", extra: "snoring, pauses and daytime sleepiness", publisher: "Mayo Clinic", keywords: ["snoring", "sleepy"] },
      { id: "yt-cleveland-osa", title: "What Is Sleep Apnea?", kind: "video", duration: "2:33", url: "https://www.youtube.com/watch?v=p2z7Rdk4kL0", extra: "types, signs and treatment", publisher: "Cleveland Clinic", keywords: ["signs", "treatment"] },
      { id: "yt-derby-cpap", title: "Obstructive Sleep Apnoea, CPAP and You", kind: "video", duration: "5:08", url: "https://www.youtube.com/watch?v=DEu8mct-4xs", extra: "an NHS trust on CPAP", publisher: "University Hospitals of Derby and Burton", keywords: ["cpap", "mask"] },
    ],
    sources: [source(NHS, "Sleep apnoea: symptoms and treatment"), ASTHMA_LUNG_UK, BHF],
    stories: [],
    // Real people's stories. Checked 20 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-kath-osa", person: "Kath", title: "Kath Hope, founder of Hope2Sleep, shares her journey to diagnosis with OSA", channel: "Sleep Apnea Stories", url: "https://www.youtube.com/watch?v=XLcjlhywHnA", duration: "67:27", about: "Kath, who founded the UK charity Hope2Sleep, talks about her road to a diagnosis of sleep apnoea." },
      { id: "yt-ed-osa", person: "Ed", title: "Sleep Apnea - Ed's Story", channel: "MaineHealth", url: "https://www.youtube.com/watch?v=dHezrPiDSts", duration: "1:47", about: "Ed has used a CPAP mask to manage his sleep apnoea for seven years." },
      { id: "yt-jackie-osa", person: "Jackie", title: "What is Sleep Apnea—Jackie's Story", channel: "Harvard Medical School", url: "https://www.youtube.com/watch?v=n7QzEENeMMo", duration: "4:29", about: "Jackie tells her own story of sleep apnoea." },
    ],
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
