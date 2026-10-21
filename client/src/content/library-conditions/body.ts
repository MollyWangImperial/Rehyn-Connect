import type { LibraryCondition } from "../library";
import { article, BACKCARE, DIABETES_UK, JDRF, NHS, NRAS, piece, ROS, source, THYROID_UK, VERSUS_ARTHRITIS } from "../library-helpers";

// Diabetes & metabolism, and Bones, joints & muscles. Same shape as the Ischaemic stroke page
// (see brain-a.ts).

export const type2Diabetes: LibraryCondition = {
  id: "type-2",
  title: "Type 2 diabetes",
  summary: "Blood sugar that runs too high because the body no longer responds well to insulin. It builds slowly and often shows itself in a blood test rather than a symptom. Food, movement, weight and tablets bring it down, and for some people it can go into remission.",
  facts: ["Can go undiagnosed for years", "Ideal HbA1c: 48 mmol/mol or below", "Weight loss is the key to remission"],
  keywords: ["diabetes", "type 2", "sugar", "glucose", "insulin", "metformin"],
  content: {
    understand: [
      article("hba1c", "What is an HbA1c number?", 2, { learnId: "t2d-hba1c", keywords: ["blood test", "sugar", "hba1c"] }),
      article("what-it-is", "What type 2 diabetes is", 4, { blurb: "Insulin, resistance and why sugar stays in the blood.", extra: "With a diagram", learnId: "t2d-what-it-is", keywords: ["insulin", "resistance", "cause"] }),
      article("complications", "Eyes, feet, kidneys, heart: why the checks matter", 4, { learnId: "t2d-complications", keywords: ["eyes", "feet", "kidneys", "complications"] }),
      article("remission", "Remission: what it means and who it's possible for", 4, { learnId: "t2d-remission", keywords: ["remission", "reverse", "weight"] }),
      article("hypos", "Low blood sugar: who gets it and what to do", 3, { learnId: "t2d-hypos", keywords: ["hypo", "low sugar", "shaky"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("tablets", "Metformin and the other tablets, plainly", 6, { learnId: "t2d-tablets", keywords: ["metformin", "tablets", "medication", "gliptin", "sglt2"] }),
      article("injections", "GLP-1 injections and insulin: when they come in", 5, { learnId: "t2d-injections", keywords: ["injections", "insulin", "ozempic", "glp-1"] }),
      article("food", "Eating with type 2: carbs, portions and real life", 6, { learnId: "t2d-food", keywords: ["diet", "food", "carbs", "sugar"] }),
      article("moving", "Movement that lowers blood sugar", 4, { learnId: "t2d-moving", keywords: ["exercise", "walking"] }),
      article("monitoring", "Checking your own sugar: who needs to, and how", 3, { learnId: "t2d-monitoring", keywords: ["monitor", "finger prick", "cgm"] }),
    ],
    liveWell: [
      article("annual-checks", "The yearly checks, and what each one is for", 4, { learnId: "t2d-annual-checks", keywords: ["checks", "review", "eyes", "feet"] }),
      article("feet", "Looking after your feet", 4, { learnId: "t2d-feet", keywords: ["feet", "foot care", "shoes"] }),
      article("sick-days", "Sick-day rules: when you're ill", 3, { learnId: "t2d-sick-days", keywords: ["sick", "ill", "vomiting"] }),
      article("driving", "Driving with diabetes", 3, { learnId: "t2d-driving", keywords: ["car", "dvla", "driving"] }),
      article("mood", "Diabetes burnout and low mood", 4, { learnId: "t2d-mood", keywords: ["burnout", "mood", "fed up"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title and channel from YouTube's oEmbed,
    // running time from the video's page.
    watch: [
      { id: "yt-duk-what-is-type-2", title: "What is type 2 diabetes?", kind: "video", duration: "2:07", url: "https://www.youtube.com/watch?v=o3v2fnCaSTg", extra: "an animation on insulin and type 2", publisher: "Diabetes UK", keywords: ["insulin", "type 2"] },
      { id: "yt-duk-remission", title: "Type 2 Diabetes Remission", kind: "video", duration: "2:00", url: "https://www.youtube.com/watch?v=eNlCptQiB3Y", extra: "what remission means", publisher: "Diabetes UK", keywords: ["remission", "weight"] },
      { id: "yt-duk-foot-check", title: "How to perform a daily diabetes foot check", kind: "video", duration: "2:08", url: "https://www.youtube.com/watch?v=jC9hXPURsQA", extra: "a daily foot check at home", publisher: "Diabetes UK", keywords: ["feet", "foot care"] },
    ],
    sources: [source(NHS, "Type 2 diabetes: symptoms, treatment and living with it"), DIABETES_UK],
    stories: [],
    // Real people's stories. Checked 20 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-gina-t2", person: "Gina", title: "Getting back to nursing after a type 2 diagnosis", channel: "Diabetes UK", url: "https://www.youtube.com/watch?v=4idyluxxuXE", duration: "3:09", about: "Gina developed sight loss after her diagnosis and, with treatment, is back driving, visiting patients and riding her horses." },
      { id: "yt-shivali-t2", person: "Shivali", title: "Going into diabetes remission", channel: "Diabetes UK", url: "https://www.youtube.com/watch?v=rL5m-QjgRHg", duration: "4:06", about: "Shivali, a mother of two young children, shares how she put her type 2 diabetes into remission." },
      { id: "yt-tony-t2", person: "Tony", title: "Tony's story | #DiRECT", channel: "Diabetes UK", url: "https://www.youtube.com/watch?v=9x2X9BUFz6g", duration: "2:28", about: "Tony's story from DiRECT, the Diabetes UK trial of a low-calorie weight management treatment for type 2 diabetes." },
    ],
    askDoctor: [
      "What is my HbA1c, and what are we aiming for?",
      "Is remission realistic for me, and what would it take?",
      "Which of my tablets could cause a hypo?",
      "When are my next eye, foot and kidney checks?",
    ],
    related: [
      { groupId: "diabetes", conditionId: "prediabetes" },
      { groupId: "nerves", conditionId: "peripheral-neuropathy" },
      { groupId: "kidneys", conditionId: "chronic-kidney-disease" },
      { groupId: "heart-attack", conditionId: "heart-attack" },
    ],
  },
};

export const prediabetes: LibraryCondition = {
  id: "prediabetes",
  title: "Prediabetes",
  summary: "Blood sugar higher than it should be, but not yet in the diabetes range. It is a warning, and it is one of the few warnings in medicine that most people can act on in time: modest changes to weight, food and movement cut the chance of diabetes by about half.",
  facts: ["HbA1c of 42 to 47 mmol/mol", "Affects around one in 12 people", "Support can cut type 2 risk in half"],
  keywords: ["prediabetes", "borderline diabetes", "sugar", "hba1c", "at risk"],
  content: {
    understand: [
      article("what-it-is", "What prediabetes means", 3, { blurb: "The numbers, the range, and what happens if nothing changes.", learnId: "pre-what-it-is", keywords: ["hba1c", "numbers", "range"] }),
      article("why", "Why it happens: weight, inactivity, family, age", 3, { learnId: "pre-why", keywords: ["cause", "weight", "family"] }),
      article("odds", "The odds, honestly: who goes on to diabetes and who doesn't", 3, { learnId: "pre-odds", keywords: ["odds", "risk", "chance"] }),
      article("tests", "How often to be tested", 2, { learnId: "pre-tests", keywords: ["test", "blood test", "yearly"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("programme", "The NHS Diabetes Prevention Programme", 3, { learnId: "pre-programme", keywords: ["programme", "prevention", "course"] }),
      article("weight", "Weight: how much, and what actually works", 5, { learnId: "pre-weight", keywords: ["weight", "diet"] }),
      article("moving", "Movement that lowers blood sugar", 4, { learnId: "pre-moving", keywords: ["exercise", "walking"] }),
      article("food", "Food swaps that make the biggest difference", 5, { learnId: "pre-food", keywords: ["food", "diet", "swaps", "sugar"] }),
    ],
    liveWell: [
      article("sleep-stress", "Sleep, stress and blood sugar", 3, { learnId: "pre-sleep-stress", keywords: ["sleep", "stress"] }),
      article("alcohol", "Alcohol and sugar", 2, { learnId: "pre-alcohol", keywords: ["alcohol", "drink"] }),
      article("family", "Changing things as a household", 3, { learnId: "pre-family", keywords: ["family", "household", "cooking"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title and channel from YouTube's oEmbed,
    // running time from the video's page.
    watch: [
      { id: "yt-pre-nhsggc", title: "Information on Prediabetes", kind: "video", duration: "4:20", url: "https://www.youtube.com/watch?v=NwuijzW6w4o", extra: "NHS information on prediabetes", publisher: "NHS Greater Glasgow and Clyde", keywords: ["prediabetes"] },
      { id: "yt-pre-hba1c", title: "Your Diabetes Health Checks: HbA1c", kind: "video", duration: "3:46", url: "https://www.youtube.com/watch?v=7UJR11bBhkU", extra: "how the HbA1c test works", publisher: "Diabetes UK", keywords: ["hba1c", "blood test"] },
      { id: "yt-pre-cleveland", title: "What Is Prediabetes?", kind: "video", duration: "2:16", url: "https://www.youtube.com/watch?v=XpwZK9YW8G4", extra: "the blood test and lifestyle changes", publisher: "Cleveland Clinic", keywords: ["prediabetes", "lifestyle"] },
    ],
    sources: [source(NHS, "Prediabetes and the Diabetes Prevention Programme"), DIABETES_UK],
    stories: [],
    // Real people's stories. Checked 20 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-pre-pam", person: "Pam", title: "Pam's story - The NHS Diabetes Prevention Programme", channel: "NHS England", url: "https://www.youtube.com/watch?v=0FDCgvJun98", duration: "2:46", about: "Pam, who was on the borderline of diabetes, and her GP talk about the NHS Diabetes Prevention Programme." },
      { id: "yt-pre-hansa", person: "Hansa", title: "Hansa's story - The NHS Diabetes Prevention Programme", channel: "NHS England", url: "https://www.youtube.com/watch?v=k1ZVPAiunC8", duration: "2:34", about: "Hansa and her GP talk about how the programme can help people at risk of type 2 diabetes." },
      { id: "yt-pre-harry", person: "Harry", title: "#PreventingType2 with Healthier You - Harry's story", channel: "NHS England", url: "https://www.youtube.com/watch?v=6dWWWVa3At8", duration: "3:01", about: "Harry talks about Healthier You, the NHS programme for people at high risk of type 2 diabetes." },
    ],
    askDoctor: [
      "What is my HbA1c, and how far is it from the diabetes range?",
      "Can I join the Diabetes Prevention Programme?",
      "How much weight would make a difference for me?",
      "When should I be retested?",
    ],
    related: [
      { groupId: "diabetes", conditionId: "type-2" },
      { groupId: "blood-pressure", conditionId: "high-blood-pressure" },
      { groupId: "liver", conditionId: "fatty-liver" },
    ],
  },
};

export const type1Diabetes: LibraryCondition = {
  id: "type-1",
  title: "Type 1 diabetes",
  summary: "The body stops making insulin because the immune system has destroyed the cells that produce it. It usually starts in childhood or young adulthood, is nobody's fault, and means insulin every day for life. Modern pumps and sensors have changed what that life looks like.",
  facts: ["Over 400,000 people in the UK have it", "Not caused by diet or lifestyle", "A hypo is usually below 4mmol/l"],
  keywords: ["type 1", "diabetes", "insulin", "pump", "sensor", "libre"],
  content: {
    understand: [
      article("what-it-is", "What type 1 diabetes is", 4, { blurb: "The immune system, the beta cells and why insulin is not optional.", extra: "With a diagram", learnId: "t1d-what-it-is", keywords: ["immune", "insulin", "cause"] }),
      article("hypos-hypers", "Hypos and hypers: the signs and the fixes", 4, { learnId: "t1d-hypos-hypers", keywords: ["hypo", "hyper", "low", "high"] }),
      article("dka", "DKA: the emergency to know about", 3, { learnId: "t1d-dka", keywords: ["dka", "ketones", "emergency"] }),
      article("hba1c", "HbA1c, time in range and what the numbers mean", 3, { learnId: "t1d-hba1c", keywords: ["hba1c", "time in range", "numbers"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("insulin", "Basal and bolus: how the insulins fit together", 5, { learnId: "t1d-insulin", keywords: ["insulin", "basal", "bolus", "pen"] }),
      article("carb-counting", "Carb counting in real life", 4, { learnId: "t1d-carb-counting", keywords: ["carbs", "counting", "food"] }),
      article("sensors-pumps", "Sensors, pumps and closed loops", 5, { learnId: "t1d-sensors-pumps", keywords: ["sensor", "pump", "libre", "closed loop"] }),
      article("sick-days", "Sick-day rules and ketones", 3, { learnId: "t1d-sick-days", keywords: ["sick", "ketones", "ill"] }),
    ],
    liveWell: [
      article("exercise", "Exercise and insulin", 4, { learnId: "t1d-exercise", keywords: ["exercise", "sport", "hypo"] }),
      article("driving", "Driving with type 1", 3, { learnId: "t1d-driving", keywords: ["car", "dvla", "driving"] }),
      article("alcohol", "Alcohol and type 1", 3, { learnId: "t1d-alcohol", keywords: ["alcohol", "drink"] }),
      article("burnout", "Diabetes burnout, and the people who understand", 4, { learnId: "t1d-burnout", keywords: ["burnout", "mood", "fed up"] }),
      article("pregnancy", "Pregnancy with type 1", 4, { learnId: "t1d-pregnancy", keywords: ["pregnancy", "baby"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title and channel from YouTube's oEmbed,
    // running time from the video's page.
    watch: [
      { id: "yt-dk-what-is-t1", title: "What is type 1 diabetes?", kind: "video", duration: "2:03", url: "https://www.youtube.com/watch?v=V1rsB55vgAg", extra: "a short animation for families", publisher: "Diabetes UK", keywords: ["type 1", "insulin"] },
      { id: "yt-uhl-t1", title: "Type 1 diabetes: what is it and how to treat it", kind: "video", duration: "7:38", url: "https://www.youtube.com/watch?v=zWOvG3CeJ78", extra: "a specialist nurse on symptoms and treatment", publisher: "University Hospitals of Leicester NHS Trust", keywords: ["symptoms", "treatment"] },
      { id: "yt-uclh-hypo", title: "Diabetes and Hypoglycaemia (Low blood sugar)", kind: "video", duration: "4:39", url: "https://www.youtube.com/watch?v=bdfk3WmsF4E", extra: "spotting and treating a hypo", publisher: "University College London Hospitals NHS Foundation Trust", keywords: ["hypo", "low blood sugar"] },
    ],
    sources: [source(NHS, "Type 1 diabetes: treatment and living with it"), DIABETES_UK, JDRF],
    stories: [],
    // Real people's stories. Checked 20 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-emma-t1", person: "Emma", title: "Newly Diagnosed with Type 1 Diabetes: Emma's Story", channel: "Diabetes UK", url: "https://www.youtube.com/watch?v=jCEkZjPHJIs", duration: "1:39", about: "Emma talks about how scary her diagnosis was, and offers advice to people who feel overwhelmed." },
      { id: "yt-erin-t1", person: "Erin", title: "Living with Type 1 Diabetes: Erin's Story", channel: "Diabetes UK", url: "https://www.youtube.com/watch?v=3dEfFcE9jk8", duration: "2:44", about: "Erin shares what it is like living with type 1 diabetes." },
      { id: "yt-lisa-t1", person: "Lisa", title: "Lisa's story | Know Type 1", channel: "Diabetes UK", url: "https://www.youtube.com/watch?v=VDupOCpGBUU", duration: "0:59", about: "Lisa, a parent, talks about her son Ben's late diagnosis of type 1 diabetes." },
    ],
    askDoctor: [
      "Am I eligible for a sensor or a pump?",
      "What should my targets be, and what's my time in range?",
      "What are my sick-day rules, written down?",
      "Who do I call out of hours if my ketones are high?",
    ],
    related: [
      { groupId: "diabetes", conditionId: "type-2" },
      { groupId: "nerves", conditionId: "peripheral-neuropathy" },
      { groupId: "kidneys", conditionId: "chronic-kidney-disease" },
    ],
  },
};

export const underactiveThyroid: LibraryCondition = {
  id: "underactive",
  title: "Underactive thyroid",
  summary: "A thyroid gland that makes too little hormone, so everything slows: energy, weight, mood, bowels, warmth. It is common, easily found on a blood test and treated with one daily tablet, levothyroxine, which replaces what the gland no longer makes.",
  facts: ["Hashimoto's is the main cause in the UK", "Levothyroxine is usually for life", "A blood test once a year when stable"],
  keywords: ["thyroid", "underactive", "hypothyroid", "levothyroxine", "tired"],
  content: {
    understand: [
      article("what-it-does", "What the thyroid does, and what too little feels like", 3, { blurb: "The body's pace-setter, and why slowing shows up everywhere.", extra: "With a diagram", learnId: "hypo-what-it-does", keywords: ["thyroid", "hormone", "symptoms"] }),
      article("causes", "Why it happens: the immune system, mostly", 3, { learnId: "hypo-causes", keywords: ["hashimotos", "cause", "immune"] }),
      article("tests", "TSH and T4: what the blood tests mean", 3, { learnId: "hypo-tests", keywords: ["tsh", "t4", "blood test"] }),
      article("still-tired", "Still tired on the tablets? What else to check", 3, { learnId: "hypo-still-tired", keywords: ["tired", "fatigue", "dose"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("levothyroxine", "Levothyroxine: taking it so it works", 4, { learnId: "hypo-levothyroxine", keywords: ["levothyroxine", "tablets", "empty stomach"] }),
      article("dose", "Finding the right dose", 3, { learnId: "hypo-dose", keywords: ["dose", "adjust"] }),
      article("interactions", "Calcium, iron, coffee: what gets in the way", 2, { learnId: "hypo-interactions", keywords: ["calcium", "iron", "coffee"] }),
    ],
    liveWell: [
      article("weight", "Weight and the thyroid: the honest version", 3, { learnId: "hypo-weight", keywords: ["weight"] }),
      article("mood", "Mood, memory and fog", 3, { learnId: "hypo-mood", keywords: ["mood", "memory", "fog"] }),
      article("pregnancy", "Pregnancy and the thyroid", 3, { learnId: "hypo-pregnancy", keywords: ["pregnancy"] }),
      article("checks", "How often to be tested", 2, { learnId: "hypo-checks", keywords: ["test", "yearly", "review"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title from YouTube's oEmbed, running time from the
    // video's page. The British Thyroid Foundation's films are uploaded to a personal channel, so they are credited
    // to the Foundation as films, as their own titles do.
    watch: [
      { id: "yt-btf-thyroid-disorders", title: "A doctor's guide to thyroid disorders", kind: "video", duration: "4:18", url: "https://www.youtube.com/watch?v=C7tIG_RPk0w", extra: "how thyroid problems affect the body", publisher: "British Thyroid Foundation film", keywords: ["thyroid", "symptoms"] },
      { id: "yt-btf-being-treated", title: "Being treated for a thyroid disorder", kind: "video", duration: "4:08", url: "https://www.youtube.com/watch?v=KhuRKuXGx9A", extra: "young people on taking medication", publisher: "British Thyroid Foundation film", keywords: ["treatment", "tablets"] },
      { id: "yt-nbt-hypo-pregnancy", title: "Hypothyroidism during pregnancy", kind: "video", duration: "5:31", url: "https://www.youtube.com/watch?v=UnYlu2MdAsw", extra: "how pregnancy and the thyroid interact", publisher: "North Bristol NHS Trust", keywords: ["pregnancy", "levothyroxine"] },
    ],
    sources: [source(NHS, "Underactive thyroid: symptoms and treatment"), THYROID_UK],
    stories: [],
    // Real people's stories, British Thyroid Foundation films. Checked 20 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-cicely-hypo", person: "Cicely", title: "Cicely's Story - Hypothyroidism", channel: "British Thyroid Foundation film", url: "https://www.youtube.com/watch?v=37nDgN30Wxo", duration: "3:04", about: "Cicely's underactive thyroid was picked up at eight, and she says living with it hasn't changed much for her." },
      { id: "yt-alison-hypo", person: "Alison", title: "Patient Journeys: Hypothyroidism, Alison", channel: "British Thyroid Foundation film", url: "https://www.youtube.com/watch?v=CW2-Vb_CEnI", duration: "5:13", about: "Alison, diagnosed at 44, felt she had lost control of her life, then slowly found her way back with treatment." },
      { id: "yt-maret-hypo", person: "Maret", title: "Patient Journeys: Hypothyroidism, Maret", channel: "British Thyroid Foundation film", url: "https://www.youtube.com/watch?v=SH3t4nbWxzQ", duration: "4:45", about: "Maret was diagnosed with Hashimoto's thyroiditis and found lifestyle changes that helped her symptoms." },
    ],
    askDoctor: [
      "What are my TSH and T4, and are they in range?",
      "When should I take my tablet, and with what?",
      "How often do I need a blood test now?",
      "Could something else be making me tired?",
    ],
    related: [
      { groupId: "thyroid", conditionId: "overactive" },
      { groupId: "depression", conditionId: "depression" },
      { groupId: "nerves", conditionId: "carpal-tunnel" },
    ],
  },
};

export const overactiveThyroid: LibraryCondition = {
  id: "overactive",
  title: "Overactive thyroid",
  summary: "A thyroid gland that makes too much hormone, so everything speeds up: heart, weight loss, heat, anxiety, shaky hands. Tablets, radioiodine or surgery bring it under control, and the choice between them is a conversation worth having properly.",
  facts: ["Graves' disease in about 4 in 5", "About 10 times more common in women", "Tablets, radioiodine or surgery"],
  keywords: ["thyroid", "overactive", "hyperthyroid", "graves", "racing heart"],
  content: {
    understand: [
      article("what-it-does", "What too much thyroid hormone feels like", 3, { blurb: "The body's pace-setter stuck on fast.", extra: "With a diagram", learnId: "hyper-what-it-does", keywords: ["symptoms", "hormone"] }),
      article("causes", "Graves' disease and the other causes", 3, { learnId: "hyper-causes", keywords: ["graves", "nodule", "cause"] }),
      article("tests", "The blood tests and the scan", 3, { learnId: "hyper-tests", keywords: ["tsh", "antibodies", "scan"] }),
      article("eyes", "Thyroid eye disease: what to watch for", 3, { learnId: "hyper-eyes", keywords: ["eyes", "bulging", "dry eyes"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("tablets", "Carbimazole and the sore-throat rule", 4, { learnId: "hyper-tablets", keywords: ["carbimazole", "tablets", "sore throat"] }),
      article("radioiodine", "Radioiodine: what it involves", 4, { learnId: "hyper-radioiodine", keywords: ["radioiodine", "iodine"] }),
      article("surgery", "Surgery: when it's the right choice", 3, { learnId: "hyper-surgery", keywords: ["surgery", "thyroidectomy"] }),
      article("beta-blockers", "Beta blockers for the racing heart", 2, { learnId: "hyper-beta-blockers", keywords: ["beta blocker", "propranolol", "heart"] }),
    ],
    liveWell: [
      article("anxiety", "Anxiety that's the thyroid, not you", 3, { learnId: "hyper-anxiety", keywords: ["anxious", "anxiety", "mood"] }),
      article("smoking", "Smoking and thyroid eye disease", 2, { learnId: "hyper-smoking", keywords: ["smoking", "eyes"] }),
      article("pregnancy", "Pregnancy and an overactive thyroid", 3, { learnId: "hyper-pregnancy", keywords: ["pregnancy"] }),
      article("after", "After treatment: when it swings underactive", 3, { learnId: "hyper-after", keywords: ["underactive", "after treatment"] }),
    ],
    // Educational videos on YouTube. Checked 20 October 2026: title from YouTube's oEmbed, running time from the video's page.
    watch: [
      { id: "yt-btf-hyper-guide", title: "A doctor's guide to hyperthyroidism", kind: "video", duration: "11:42", url: "https://www.youtube.com/watch?v=LhDzh9ySBvA", extra: "symptoms and treatment options", publisher: "British Thyroid Foundation film", keywords: ["symptoms", "treatment"] },
      { id: "yt-uhsussex-carbimazole", title: "Carbimazole for an overactive thyroid", kind: "video", duration: "4:11", url: "https://www.youtube.com/watch?v=XZY9nYoLHRE", extra: "a hospital guide to carbimazole", publisher: "University Hospitals Sussex", keywords: ["carbimazole"] },
      { id: "yt-royalfree-radioiodine", title: "An introduction to radioactive iodine therapy", kind: "video", duration: "6:01", url: "https://www.youtube.com/watch?v=Sp67MxN6lbU", extra: "what the day and after look like", publisher: "Royal Free London NHS Foundation Trust", keywords: ["radioiodine"] },
    ],
    sources: [source(NHS, "Overactive thyroid: symptoms and treatment"), THYROID_UK],
    stories: [],
    // Real people's stories, British Thyroid Foundation films. Checked 20 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-katie-hyper", person: "Katie", title: "Katie's Story - Hyperthyroidism", channel: "British Thyroid Foundation film", url: "https://www.youtube.com/watch?v=D_Dzx-Tk1RY", duration: "2:54", about: "Katie was relieved to learn her anxiety came from an overactive thyroid, and got her symptoms under control before university." },
      { id: "yt-ella-hyper", person: "Ella", title: "Ella's story - Hyperthyroidism", channel: "British Thyroid Foundation film", url: "https://www.youtube.com/watch?v=3_QyUke0Cs4", duration: "5:04", about: "Ella talks about choosing radioactive iodine over surgery, and life afterwards." },
      { id: "yt-camilla-hyper", person: "Camilla", title: "Patient Journeys: Hyperthyroidism, Camilla", channel: "British Thyroid Foundation film", url: "https://www.youtube.com/watch?v=MMt25ujdvdo", duration: "5:34", about: "Camilla was diagnosed at 20, treated with radioactive iodine, and went on to run the London Marathon." },
    ],
    askDoctor: [
      "What is causing my overactive thyroid?",
      "Which treatment do you recommend for me, and why?",
      "What should I do if I get a sore throat or fever on the tablets?",
      "Are my eyes affected, and who should check them?",
    ],
    related: [
      { groupId: "thyroid", conditionId: "underactive" },
      { groupId: "heart-rhythm", conditionId: "atrial-fibrillation" },
      { groupId: "anxiety", conditionId: "anxiety" },
    ],
  },
};

export const osteoarthritis: LibraryCondition = {
  id: "osteoarthritis",
  title: "Osteoarthritis",
  summary: "Cartilage thins and the joint stiffens and aches, usually in the knees, hips, hands or spine. Joints repair themselves all the time; with osteoarthritis they repair less smoothly. Exercise can reduce pain, and for a badly affected joint a replacement may be considered.",
  facts: ["The most common arthritis in the UK", "Exercise can reduce pain", "Most people do not need surgery"],
  keywords: ["arthritis", "osteoarthritis", "knee", "hip", "joint pain", "stiff"],
  content: {
    understand: [
      article("knee-week-three", "Knee replacement: what week three really feels like", 4, { learnId: "oa-knee-week-three", keywords: ["knee", "replacement", "operation"] }),
      article("what-it-is", "What osteoarthritis is, and isn't", 4, { blurb: "Cartilage, bone and the joint's own repairs, and why it is more than wear and tear.", extra: "With a diagram", learnId: "oa-what-it-is", keywords: ["cartilage", "cause"] }),
      article("flare", "Why it flares, and why x-rays don't predict pain", 3, { learnId: "oa-flare", keywords: ["flare", "x-ray", "pain"] }),
      article("rheumatoid-or-osteo", "Osteoarthritis or rheumatoid? The difference", 3, { learnId: "oa-rheumatoid-or-osteo", keywords: ["rheumatoid", "difference"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("strength", "Strength exercises for knees and hips", 4, { learnId: "oa-strength", keywords: ["exercises", "strength", "knee", "hip"] }),
      article("painkillers", "Painkillers, gels and injections", 4, { learnId: "oa-painkillers", keywords: ["painkillers", "gel", "injection", "steroid"] }),
      article("weight", "Weight and the knees", 3, { learnId: "oa-weight", keywords: ["weight", "knee"] }),
      article("replacement", "Joint replacement: when, and what to expect", 6, { learnId: "oa-replacement", keywords: ["replacement", "surgery", "knee", "hip"] }),
    ],
    liveWell: [
      article("stairs-chairs", "Stairs, chairs, baths and getting up", 4, { learnId: "oa-stairs-chairs", keywords: ["stairs", "chair", "bath", "aids"] }),
      article("hands", "Hand arthritis: jars, keys and splints", 3, { learnId: "oa-hands", keywords: ["hands", "jars", "splint"] }),
      article("walking", "Walking, cycling and swimming with arthritis", 3, { learnId: "oa-walking", keywords: ["walking", "cycling", "swimming"] }),
      article("mood", "Pain, sleep and mood", 3, { learnId: "oa-mood", keywords: ["sleep", "mood", "pain"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from YouTube's own listing, as its watch pages asked for a sign-in that day.
    watch: [
      { id: "yt-auk-what-is-oa", title: "What is osteoarthritis?", kind: "video", duration: "2:43", url: "https://www.youtube.com/watch?v=Do-s0LXmwn4", extra: "what it is and how it affects joints", publisher: "Arthritis UK", keywords: ["osteoarthritis", "joints"] },
      { id: "yt-nhs-knee-replacement", title: "Knee replacement surgery", kind: "video", duration: "3:17", url: "https://www.youtube.com/watch?v=69YMHC6JAL4", extra: "a surgeon on what happens", publisher: "NHS", keywords: ["knee", "replacement"] },
      { id: "yt-nhs-knee-recovery", title: "Knee replacement recovery: dos and don'ts", kind: "video", duration: "3:28", url: "https://www.youtube.com/watch?v=Yy8pNXtYB60", extra: "dos and don'ts for recovery", publisher: "NHS", keywords: ["knee", "recovery"] },
    ],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-elaine-oa", person: "Elaine", title: "Osteoarthritis: Elaine's story", channel: "NHS", url: "https://www.youtube.com/watch?v=W42rwWD6zjw", duration: "3:34", about: "Elaine talks about her experience of osteoarthritis and how she manages it." },
      { id: "yt-mark-knee", person: "Mark", title: "Mark Burkett shares his experience of undergoing a total knee replacement", channel: "Sandwell & West Birmingham NHS Trust", url: "https://www.youtube.com/watch?v=7xtalYsZrus", duration: "1:56", about: "Mark talks about having a total knee replacement." },
      { id: "yt-christine-aids", person: "Christine", title: "Aids and adaptations: Christine's story", channel: "Arthritis UK", url: "https://www.youtube.com/watch?v=G3YxuCIxj_I", duration: "3:03", about: "Christine talks about the aids and adaptations that help her with arthritis." },
    ],
    sources: [source(NHS, "Osteoarthritis: symptoms, treatment and living with it"), VERSUS_ARTHRITIS],
    stories: [],
    askDoctor: [
      "Can I be referred to a physiotherapist for a strength programme?",
      "Which painkillers are safe for me to take regularly?",
      "Would an injection help, and how often can I have one?",
      "When would a joint replacement be worth considering?",
    ],
    related: [
      { groupId: "arthritis", conditionId: "rheumatoid" },
      { groupId: "back-neck", conditionId: "back-pain" },
      { groupId: "bone-health", conditionId: "osteoporosis" },
    ],
  },
};

export const rheumatoidArthritis: LibraryCondition = {
  id: "rheumatoid",
  title: "Rheumatoid arthritis",
  summary: "An immune condition in which the body attacks the lining of its own joints, causing pain, swelling and morning stiffness, often in the hands and feet on both sides. Starting treatment early lowers the risk of joint damage.",
  facts: ["Autoimmune, not wear and tear", "About 1 in 100 people in the UK", "Early treatment cuts joint damage risk"],
  keywords: ["rheumatoid", "arthritis", "swollen joints", "morning stiffness", "immune"],
  content: {
    understand: [
      article("what-it-is", "What rheumatoid arthritis is", 4, { learnId: "ra-what-it-is", blurb: "The immune system, the joint lining and why both sides are affected.", extra: "With a diagram", keywords: ["immune", "cause"] }),
      article("tests", "Blood tests, ultrasound and the diagnosis", 3, { learnId: "ra-tests", keywords: ["blood test", "rheumatoid factor", "ultrasound"] }),
      article("beyond-joints", "Beyond the joints: tiredness, eyes, lungs, heart", 4, { learnId: "ra-beyond-joints", keywords: ["tired", "fatigue", "eyes", "lungs"] }),
      article("flares", "Flares: what sets them off and how to ride them", 3, { learnId: "ra-flares", keywords: ["flare", "triggers"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("dmards", "Methotrexate and the other DMARDs", 6, { learnId: "ra-dmards", keywords: ["methotrexate", "dmard", "tablets"] }),
      article("biologics", "Biologics and JAK inhibitors: the next step", 5, { learnId: "ra-biologics", keywords: ["biologic", "injection", "jak"] }),
      article("steroids", "Steroids: the short-term help", 3, { learnId: "ra-steroids", keywords: ["steroids", "injection"] }),
      article("hands", "Hand exercises and joint protection", 4, { learnId: "ra-hands", keywords: ["hands", "exercises", "splint"] }),
    ],
    liveWell: [
      article("mornings", "Mornings: getting going", 3, { learnId: "ra-mornings", keywords: ["morning", "stiff", "shower"] }),
      article("fatigue", "Fatigue with rheumatoid arthritis", 4, { learnId: "ra-fatigue", keywords: ["fatigue", "tired", "pacing"] }),
      article("work", "Work and reasonable adjustments", 4, { learnId: "ra-work", keywords: ["work", "employer"] }),
      article("infections", "Infections, vaccines and your medicines", 3, { learnId: "ra-infections", keywords: ["infection", "vaccine", "flu"] }),
      article("pregnancy", "Pregnancy, family and your medicines", 3, { learnId: "ra-pregnancy", keywords: ["pregnancy"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from YouTube's own listing, as its watch pages asked for a sign-in that day.
    watch: [
      { id: "yt-nhs-ra", title: "Rheumatoid arthritis", kind: "video", duration: "3:55", url: "https://www.youtube.com/watch?v=0uwx64YaxSk", extra: "symptoms and treatment", publisher: "NHS", keywords: ["symptoms", "treatment"] },
      { id: "yt-nras-60", title: "What is Rheumatoid Arthritis (RA)? | 60 Second Series", kind: "video", duration: "1:09", url: "https://www.youtube.com/watch?v=WpIErd4gbvA", extra: "the condition in a minute", publisher: "NRAS", keywords: ["immune"] },
      { id: "yt-auk-hands", title: "Tailored stretching: Finger, hand and wrist exercises", kind: "video", duration: "10:41", url: "https://www.youtube.com/watch?v=sNxyYCaQbFw", extra: "gentle exercises to follow", publisher: "Arthritis UK", keywords: ["hands", "exercises"] },
    ],
    sources: [source(NHS, "Rheumatoid arthritis: symptoms and treatment"), NRAS, VERSUS_ARTHRITIS],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-rachael-ra", person: "Rachael", title: "Rheumatoid Arthritis Matters - Rachael's Story", channel: "NRAS", url: "https://www.youtube.com/watch?v=dqmh-zeYThc", duration: "3:21", about: "Rachael was just 22 and fresh out of university when she was diagnosed with rheumatoid arthritis." },
      { id: "yt-lea-ra", person: "Léa", title: "Léa's Story - Rheumatoid Arthritis Patient", channel: "NRAS", url: "https://www.youtube.com/watch?v=gxHcgg7cnkY", duration: "2:43", about: "Léa, diagnosed with rheumatoid arthritis in February 2020, shares first-hand experience of her early journey with it." },
      { id: "yt-florence-ra", person: "Florence", title: "Florence's Story - Rheumatoid Arthritis Patient", channel: "NRAS", url: "https://www.youtube.com/watch?v=QBGiXMrToPg", duration: "1:59", about: "Florence was diagnosed with rheumatoid arthritis at 18 and describes her struggles with the different forms of methotrexate." },
    ],    askDoctor: [
      "Is my disease under control, and how do we measure that?",
      "What blood tests do I need while on this medicine, and how often?",
      "What should I do during a flare?",
      "Is there a rheumatology nurse helpline I can call?",
    ],
    related: [
      { groupId: "arthritis", conditionId: "osteoarthritis" },
      { groupId: "nerves", conditionId: "carpal-tunnel" },
      { groupId: "bone-health", conditionId: "osteoporosis" },
    ],
  },
};

export const osteoporosis: LibraryCondition = {
  id: "osteoporosis",
  title: "Osteoporosis",
  summary: "Bones that have lost strength and break more easily, often found only after a wrist, hip or spine fracture. It is silent until then and more common after the menopause and with some medicines. Treatment, exercise, calcium and vitamin D can help lower the chance of the next break.",
  facts: ["Often found only after a bone breaks", "Most breaks heal in 6 to 12 weeks", "Adults need 700mg of calcium a day"],
  keywords: ["osteoporosis", "fracture", "brittle bones", "bone density", "dexa", "broken"],
  content: {
    understand: [
      article("what-it-is", "What osteoporosis is", 3, { blurb: "Bone as living tissue, and why it thins.", extra: "With a diagram", learnId: "op-what-it-is", keywords: ["bone", "cause"] }),
      article("dexa", "The DEXA scan and the T-score", 3, { learnId: "op-dexa", keywords: ["dexa", "scan", "t-score"] }),
      article("who", "Who gets it: menopause, steroids, family, thin frame", 3, { learnId: "op-who", keywords: ["menopause", "steroids", "risk"] }),
      article("spine", "Height loss and the spine", 3, { learnId: "op-spine", keywords: ["spine", "height", "stooped"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("tablets", "Bisphosphonates: taking them so they work", 4, { learnId: "op-tablets", keywords: ["alendronate", "bisphosphonate", "tablets"] }),
      article("other-treatments", "Injections and the other treatments", 4, { learnId: "op-other-treatments", keywords: ["denosumab", "injection"] }),
      article("calcium-d", "Calcium and vitamin D: food first", 3, { learnId: "op-calcium-d", keywords: ["calcium", "vitamin d", "diet"] }),
      article("bone-exercise", "Weight-bearing and strength exercise for bones", 4, { learnId: "op-bone-exercise", keywords: ["exercise", "strength", "walking"] }),
    ],
    liveWell: [
      article("falls", "Preventing falls at home", 4, { learnId: "op-falls", keywords: ["falls", "home", "rugs", "lighting"] }),
      article("after-fracture", "Recovering from a fracture", 4, { learnId: "op-after-fracture", keywords: ["fracture", "hip", "wrist", "recovery"] }),
      article("lifting", "Lifting, bending and gardening with care", 3, { learnId: "op-lifting", keywords: ["lifting", "bending", "gardening"] }),
      article("dentist", "Tell your dentist", 2, { learnId: "op-dentist", keywords: ["dentist", "teeth"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from YouTube's own listing, as its watch pages asked for a sign-in that day.
    watch: [
      { id: "yt-ros-what-is-osteoporosis", title: "What is osteoporosis?", kind: "video", duration: "5:39", url: "https://www.youtube.com/watch?v=oR6jGCCNGdU", extra: "who is at risk, and bone health", publisher: "Royal Osteoporosis Society", keywords: ["bone", "risk"] },
      { id: "yt-ros-dexa-scan", title: "What to expect at a bone density (DEXA/DXA) scan", kind: "video", duration: "2:34", url: "https://www.youtube.com/watch?v=o6PuelYvS4w", extra: "what happens at the scan", publisher: "Royal Osteoporosis Society", keywords: ["dexa", "scan"] },
      { id: "yt-rcp-fracture-liaison", title: "Strong bones after 50: Fracture liaison services explained", kind: "video", duration: "3:25", url: "https://www.youtube.com/watch?v=kyYd_HOhKF0", extra: "preventing the next break", publisher: "Royal College of Physicians", keywords: ["fracture"] },
    ],
    sources: [source(NHS, "Osteoporosis: symptoms, treatment and prevention"), ROS],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-ian-op", person: "Ian", title: "Living well with osteoporosis: Ian talks about his recovery from spinal fractures", channel: "Royal Osteoporosis Society", url: "https://www.youtube.com/watch?v=7eL9xxAw3bk", duration: "1:04", about: "Ian talks about his recovery from spinal fractures and living well with osteoporosis." },
      { id: "yt-corinne-op", person: "Corinne", title: "Living Well with Osteoporosis: Corinne's Story After 7 Spinal Fractures", channel: "Royal Osteoporosis Society", url: "https://www.youtube.com/watch?v=lLhe4fgHLwg", duration: "1:16", about: "Corinne shares her story of living well with osteoporosis after seven spinal fractures." },
      { id: "yt-kay-op", person: "Kay", title: "Living well with osteoporosis: Kay's Story of finding support from others", channel: "Royal Osteoporosis Society", url: "https://www.youtube.com/watch?v=wgsMsQpGu9s", duration: "1:14", about: "Kay talks about living well with osteoporosis by finding support from others." },
    ],
    askDoctor: [
      "What is my T-score, and what is my fracture risk?",
      "How long should I stay on the tablets?",
      "Do I need calcium and vitamin D supplements?",
      "Can I be referred to a falls or strength and balance class?",
    ],
    related: [
      { groupId: "arthritis", conditionId: "osteoarthritis" },
      { groupId: "back-neck", conditionId: "back-pain" },
      { groupId: "thyroid", conditionId: "overactive" },
    ],
  },
};

export const backPain: LibraryCondition = {
  id: "back-pain",
  title: "Back pain",
  summary: "Very common, and most of it is not a sign of damage: muscles, joints and discs that are sore, stiff and sensitive. It usually improves within a few weeks, and staying active and at work where you can often helps. A few symptoms do need urgent attention.",
  facts: ["Up to 6 in 10 people get it", "Usually improves within a few weeks", "Very few people need an operation"],
  keywords: ["back pain", "lower back", "neck pain", "slipped disc", "sore back"],
  content: {
    understand: [
      article("what-hurts", "What's actually hurting", 4, { blurb: "Muscles, joints, discs and nerves, and why the pain is rarely a sign of damage.", extra: "With a diagram", learnId: "back-what-hurts", keywords: ["cause", "disc", "muscle"] }),
      article("red-flags", "Symptoms that need urgent attention", 2, { learnId: "back-red-flags", keywords: ["emergency", "bladder", "numb", "cauda equina"] }),
      article("scans", "Why you probably don't need a scan", 3, { learnId: "back-scans", keywords: ["mri", "x-ray", "scan"] }),
      article("long-term", "When back pain lasts: the pain system, explained", 4, { learnId: "back-long-term", keywords: ["chronic", "persistent", "pain system"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("exercises", "Exercises for a sore back", 4, { learnId: "back-exercises", keywords: ["exercises", "stretch"] }),
      article("painkillers", "Painkillers: what helps and what doesn't", 3, { learnId: "back-painkillers", keywords: ["painkillers", "ibuprofen"] }),
      article("physio", "Physiotherapy and when to ask for it", 3, { learnId: "back-physio", keywords: ["physio", "referral"] }),
      article("injections-surgery", "Injections and surgery: rarely, and for whom", 3, { learnId: "back-injections-surgery", keywords: ["injection", "surgery"] }),
    ],
    liveWell: [
      article("work", "Working with back pain", 3, { learnId: "back-work", keywords: ["work", "desk", "lifting"] }),
      article("sleep", "Beds, pillows and sleeping with back pain", 3, { learnId: "back-sleep", keywords: ["sleep", "mattress", "pillow"] }),
      article("fear", "Fear of moving, and how to get past it", 4, { learnId: "back-fear", keywords: ["fear", "confidence", "moving"] }),
      article("neck", "Neck pain: the same rules", 3, { learnId: "back-neck", keywords: ["neck", "neck pain"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from YouTube's own listing, as its watch pages asked for a sign-in that day.
    watch: [
      { id: "yt-nhs-back-stretches", title: "Back stretches", kind: "video", duration: "5:17", url: "https://www.youtube.com/watch?v=VDf43fOTH1E", extra: "a physio shows simple back stretches", publisher: "NHS", keywords: ["stretches", "exercises"] },
      { id: "yt-csp-managing-back-pain", title: "Physio Advice on Managing Back Pain", kind: "video", duration: "0:59", url: "https://www.youtube.com/watch?v=24P7cTQjsVM", extra: "keep moving and stay in work", publisher: "The Chartered Society of Physiotherapy", keywords: ["physio", "work"] },
      { id: "yt-flippin-hurt-harm", title: "Hurt does not always mean harm", kind: "video", duration: "2:45", url: "https://www.youtube.com/watch?v=gtTRPOum1jE", extra: "a GP on hurt and harm", publisher: "Flippin' Pain", keywords: ["persistent pain", "hurt"] },
    ],
    sources: [source(NHS, "Back pain: causes, treatment and exercises"), VERSUS_ARTHRITIS, BACKCARE],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-rajinder-back", person: "Rajinder", title: "Right to Rehab: Rajinder's story (MSK back pain)", channel: "The Chartered Society of Physiotherapy", url: "https://www.youtube.com/watch?v=4LIbpj0Claw", duration: "1:31", about: "After injuring his back, Rajinder was stuck at home until a tailored strength and exercise programme helped." },
      { id: "yt-karen-back", person: "Karen", title: "Changing how we treat back pain: Karen's story", channel: "University Hospitals Coventry and Warwickshire", url: "https://www.youtube.com/watch?v=-8gtOQAeAgM", duration: "5:19", about: "Karen talks about her long-standing back pain and the musculoskeletal service that helped her." },
      { id: "yt-peter-back", person: "Peter", title: "Peter's story: an experience of managing long-term pain", channel: "NHS Devon", url: "https://www.youtube.com/watch?v=1iMkxXH_Pz8", duration: "4:46", about: "Peter has lived with severe back pain since an accident on a building site forty years ago." },
    ],
    askDoctor: [
      "Is there anything about my back pain that worries you?",
      "Which painkillers are safe for me, and for how long?",
      "Can I be referred to a physiotherapist?",
      "What should I keep doing, and what should I avoid?",
    ],
    related: [
      { groupId: "nerves", conditionId: "sciatica" },
      { groupId: "arthritis", conditionId: "osteoarthritis" },
      { groupId: "bone-health", conditionId: "osteoporosis" },
    ],
  },
};
