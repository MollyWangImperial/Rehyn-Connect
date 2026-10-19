import type { LibraryCondition } from "../library";
import { article, BACKCARE, DIABETES_UK, JDRF, NHS, NRAS, piece, ROS, source, THYROID_UK, VERSUS_ARTHRITIS } from "../library-helpers";

// Diabetes & metabolism, and Bones, joints & muscles. Same shape as the Ischaemic stroke page
// (see brain-a.ts).

export const type2Diabetes: LibraryCondition = {
  id: "type-2",
  title: "Type 2 diabetes",
  summary: "Blood sugar that runs too high because the body no longer responds well to insulin. It builds slowly and often shows itself in a blood test rather than a symptom. Food, movement, weight and tablets bring it down, and for some people it can go into remission.",
  facts: ["Usually found on a blood test", "Remission is possible for some, especially early on", "Protects the eyes, feet, kidneys and heart to keep sugar in range"],
  keywords: ["diabetes", "type 2", "sugar", "glucose", "insulin", "metformin"],
  content: {
    understand: [
      article("hba1c", "What is an HbA1c number?", 2, { keywords: ["blood test", "sugar", "hba1c"] }),
      article("what-it-is", "What type 2 diabetes is", 4, { blurb: "Insulin, resistance and why sugar stays in the blood.", extra: "With a diagram", keywords: ["insulin", "resistance", "cause"] }),
      article("complications", "Eyes, feet, kidneys, heart: why the checks matter", 4, { keywords: ["eyes", "feet", "kidneys", "complications"] }),
      article("remission", "Remission: what it means and who it's possible for", 4, { keywords: ["remission", "reverse", "weight"] }),
      article("hypos", "Low blood sugar: who gets it and what to do", 3, { keywords: ["hypo", "low sugar", "shaky"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("tablets", "Metformin and the other tablets, plainly", 6, { keywords: ["metformin", "tablets", "medication", "gliptin", "sglt2"] }),
      article("injections", "GLP-1 injections and insulin: when they come in", 5, { keywords: ["injections", "insulin", "ozempic", "glp-1"] }),
      article("food", "Eating with type 2: carbs, portions and real life", 6, { keywords: ["diet", "food", "carbs", "sugar"] }),
      piece("video", "moving", "Movement that lowers blood sugar", 6, { keywords: ["exercise", "walking"] }),
      article("monitoring", "Checking your own sugar: who needs to, and how", 3, { keywords: ["monitor", "finger prick", "cgm"] }),
    ],
    liveWell: [
      article("annual-checks", "The yearly checks, and what each one is for", 4, { keywords: ["checks", "review", "eyes", "feet"] }),
      article("feet", "Looking after your feet", 4, { keywords: ["feet", "foot care", "shoes"] }),
      article("sick-days", "Sick-day rules: when you're ill", 3, { keywords: ["sick", "ill", "vomiting"] }),
      article("driving", "Driving with diabetes", 3, { keywords: ["car", "dvla", "driving"] }),
      article("mood", "Diabetes burnout and low mood", 4, { keywords: ["burnout", "mood", "fed up"] }),
    ],
    watch: [
      piece("podcast", "remission-talk", "Two people talk about getting their sugar down", 22),
      piece("animation", "in-pictures", "Insulin and blood sugar, in pictures", 3),
      piece("video", "plate", "The diabetes plate in four minutes", 4),
    ],
    sources: [source(NHS, "Type 2 diabetes: symptoms, treatment and living with it"), DIABETES_UK],
    stories: [],
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
  facts: ["HbA1c between 42 and 47", "About half of people can avoid diabetes with changes", "No symptoms: found on a blood test"],
  keywords: ["prediabetes", "borderline diabetes", "sugar", "hba1c", "at risk"],
  content: {
    understand: [
      article("what-it-is", "What prediabetes means", 3, { blurb: "The numbers, the range, and what happens if nothing changes.", keywords: ["hba1c", "numbers", "range"] }),
      article("why", "Why it happens: weight, inactivity, family, age", 3, { keywords: ["cause", "weight", "family"] }),
      article("odds", "The odds, honestly: who goes on to diabetes and who doesn't", 3, { keywords: ["odds", "risk", "chance"] }),
      article("tests", "How often to be tested", 2, { keywords: ["test", "blood test", "yearly"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("programme", "The NHS Diabetes Prevention Programme", 3, { keywords: ["programme", "prevention", "course"] }),
      article("weight", "Weight: how much, and what actually works", 5, { keywords: ["weight", "diet"] }),
      piece("video", "moving", "Movement that lowers blood sugar", 6, { keywords: ["exercise", "walking"] }),
      article("food", "Food swaps that make the biggest difference", 5, { keywords: ["food", "diet", "swaps", "sugar"] }),
    ],
    liveWell: [
      article("sleep-stress", "Sleep, stress and blood sugar", 3, { keywords: ["sleep", "stress"] }),
      article("alcohol", "Alcohol and sugar", 2, { keywords: ["alcohol", "drink"] }),
      article("family", "Changing things as a household", 3, { keywords: ["family", "household", "cooking"] }),
    ],
    watch: [
      piece("video", "explained", "Prediabetes explained in three minutes", 3),
      piece("podcast", "turned-it-round", "Two people who turned prediabetes round", 18),
    ],
    sources: [source(NHS, "Prediabetes and the Diabetes Prevention Programme"), DIABETES_UK],
    stories: [],
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
  facts: ["An immune condition, not caused by lifestyle", "Insulin every day, for life", "Sensors and pumps take much of the guesswork away"],
  keywords: ["type 1", "diabetes", "insulin", "pump", "sensor", "libre"],
  content: {
    understand: [
      article("what-it-is", "What type 1 diabetes is", 4, { blurb: "The immune system, the beta cells and why insulin is not optional.", extra: "With a diagram", keywords: ["immune", "insulin", "cause"] }),
      article("hypos-hypers", "Hypos and hypers: the signs and the fixes", 4, { keywords: ["hypo", "hyper", "low", "high"] }),
      article("dka", "DKA: the emergency to know about", 3, { keywords: ["dka", "ketones", "emergency"] }),
      article("hba1c", "HbA1c, time in range and what the numbers mean", 3, { keywords: ["hba1c", "time in range", "numbers"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("insulin", "Basal and bolus: how the insulins fit together", 5, { keywords: ["insulin", "basal", "bolus", "pen"] }),
      piece("video", "carb-counting", "Carb counting in real life", 7, { keywords: ["carbs", "counting", "food"] }),
      article("sensors-pumps", "Sensors, pumps and closed loops", 5, { keywords: ["sensor", "pump", "libre", "closed loop"] }),
      article("sick-days", "Sick-day rules and ketones", 3, { keywords: ["sick", "ketones", "ill"] }),
    ],
    liveWell: [
      article("exercise", "Exercise and insulin", 4, { keywords: ["exercise", "sport", "hypo"] }),
      article("driving", "Driving with type 1", 3, { keywords: ["car", "dvla", "driving"] }),
      article("alcohol", "Alcohol and type 1", 3, { keywords: ["alcohol", "drink"] }),
      article("burnout", "Diabetes burnout, and the people who understand", 4, { keywords: ["burnout", "mood", "fed up"] }),
      article("pregnancy", "Pregnancy with type 1", 4, { keywords: ["pregnancy", "baby"] }),
    ],
    watch: [
      piece("podcast", "pump-talk", "Pumps, sensors and real life: two people talk", 22),
      piece("animation", "in-pictures", "Insulin and the beta cells, in pictures", 3),
    ],
    sources: [source(NHS, "Type 1 diabetes: treatment and living with it"), DIABETES_UK, JDRF],
    stories: [],
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
  facts: ["Tiredness, weight gain, feeling the cold", "One daily tablet replaces the hormone", "Blood tests set the dose; it can take months to feel right"],
  keywords: ["thyroid", "underactive", "hypothyroid", "levothyroxine", "tired"],
  content: {
    understand: [
      article("what-it-does", "What the thyroid does, and what too little feels like", 3, { blurb: "The body's pace-setter, and why slowing shows up everywhere.", extra: "With a diagram", keywords: ["thyroid", "hormone", "symptoms"] }),
      article("causes", "Why it happens: the immune system, mostly", 3, { keywords: ["hashimotos", "cause", "immune"] }),
      article("tests", "TSH and T4: what the blood tests mean", 3, { keywords: ["tsh", "t4", "blood test"] }),
      article("still-tired", "Still tired on the tablets? What else to check", 3, { keywords: ["tired", "fatigue", "dose"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("levothyroxine", "Levothyroxine: taking it so it works", 4, { keywords: ["levothyroxine", "tablets", "empty stomach"] }),
      article("dose", "Finding the right dose", 3, { keywords: ["dose", "adjust"] }),
      article("interactions", "Calcium, iron, coffee: what gets in the way", 2, { keywords: ["calcium", "iron", "coffee"] }),
    ],
    liveWell: [
      article("weight", "Weight and the thyroid: the honest version", 3, { keywords: ["weight"] }),
      article("mood", "Mood, memory and fog", 3, { keywords: ["mood", "memory", "fog"] }),
      article("pregnancy", "Pregnancy and the thyroid", 3, { keywords: ["pregnancy"] }),
      article("checks", "How often to be tested", 2, { keywords: ["test", "yearly", "review"] }),
    ],
    watch: [
      piece("video", "explained", "The thyroid explained in three minutes", 3),
      piece("podcast", "slow-start", "Getting the dose right: two people talk", 16),
    ],
    sources: [source(NHS, "Underactive thyroid: symptoms and treatment"), THYROID_UK],
    stories: [],
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
  facts: ["Racing heart, weight loss, feeling hot and anxious", "Three treatments: tablets, radioiodine, surgery", "Graves' disease is the usual cause"],
  keywords: ["thyroid", "overactive", "hyperthyroid", "graves", "racing heart"],
  content: {
    understand: [
      article("what-it-does", "What too much thyroid hormone feels like", 3, { blurb: "The body's pace-setter stuck on fast.", extra: "With a diagram", keywords: ["symptoms", "hormone"] }),
      article("causes", "Graves' disease and the other causes", 3, { keywords: ["graves", "nodule", "cause"] }),
      article("tests", "The blood tests and the scan", 3, { keywords: ["tsh", "antibodies", "scan"] }),
      article("eyes", "Thyroid eye disease: what to watch for", 3, { keywords: ["eyes", "bulging", "dry eyes"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("tablets", "Carbimazole and the sore-throat rule", 4, { keywords: ["carbimazole", "tablets", "sore throat"] }),
      article("radioiodine", "Radioiodine: what it involves", 4, { keywords: ["radioiodine", "iodine"] }),
      article("surgery", "Surgery: when it's the right choice", 3, { keywords: ["surgery", "thyroidectomy"] }),
      article("beta-blockers", "Beta blockers for the racing heart", 2, { keywords: ["beta blocker", "propranolol", "heart"] }),
    ],
    liveWell: [
      article("anxiety", "Anxiety that's the thyroid, not you", 3, { keywords: ["anxious", "anxiety", "mood"] }),
      article("smoking", "Smoking and thyroid eye disease", 2, { keywords: ["smoking", "eyes"] }),
      article("pregnancy", "Pregnancy and an overactive thyroid", 3, { keywords: ["pregnancy"] }),
      article("after", "After treatment: when it swings underactive", 3, { keywords: ["underactive", "after treatment"] }),
    ],
    watch: [
      piece("video", "explained", "The thyroid explained in three minutes", 3),
      piece("podcast", "fast-forward", "Living on fast-forward: two people talk", 16),
    ],
    sources: [source(NHS, "Overactive thyroid: symptoms and treatment"), THYROID_UK],
    stories: [],
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
  summary: "The wear-and-repair arthritis: cartilage thins, the joint stiffens and aches, usually in the knees, hips, hands or spine. It is not simply wearing out, and movement helps rather than harms. For a badly worn joint, a replacement is one of the most successful operations there is.",
  facts: ["Knees, hips, hands and spine most often", "Movement and strength help; rest makes it stiffer", "Joint replacement for the worst joints"],
  keywords: ["arthritis", "osteoarthritis", "knee", "hip", "joint pain", "stiff"],
  content: {
    understand: [
      article("knee-week-three", "Knee replacement: what week three really feels like", 4, { keywords: ["knee", "replacement", "operation"] }),
      article("what-it-is", "What osteoarthritis is, and isn't", 4, { blurb: "Cartilage, bone and the joint's attempts to repair. Why 'wear and tear' is the wrong picture.", extra: "With a diagram", keywords: ["cartilage", "cause"] }),
      article("flare", "Why it flares, and why x-rays don't predict pain", 3, { keywords: ["flare", "x-ray", "pain"] }),
      article("rheumatoid-or-osteo", "Osteoarthritis or rheumatoid? The difference", 3, { keywords: ["rheumatoid", "difference"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      piece("exercise", "strength", "Strength exercises for knees and hips", 0, { keywords: ["exercises", "strength", "knee", "hip"] }),
      article("painkillers", "Painkillers, gels and injections", 4, { keywords: ["painkillers", "gel", "injection", "steroid"] }),
      article("weight", "Weight and the knees: every kilo counts", 3, { keywords: ["weight", "knee"] }),
      article("replacement", "Joint replacement: when, and what to expect", 6, { keywords: ["replacement", "surgery", "knee", "hip"] }),
    ],
    liveWell: [
      article("stairs-chairs", "Stairs, chairs, baths and getting up", 4, { keywords: ["stairs", "chair", "bath", "aids"] }),
      article("hands", "Hand arthritis: jars, keys and splints", 3, { keywords: ["hands", "jars", "splint"] }),
      article("walking", "Walking, cycling and swimming with arthritis", 3, { keywords: ["walking", "cycling", "swimming"] }),
      article("mood", "Pain, sleep and mood", 3, { keywords: ["sleep", "mood", "pain"] }),
    ],
    watch: [
      piece("video", "knee-exercises", "Five knee exercises in five minutes", 5),
      piece("podcast", "new-knee", "Before and after a new knee: two people talk", 20),
      piece("audio", "pain-rest", "A ten-minute rest when the pain is loud", 10, { extra: "read aloud" }),
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
  summary: "An immune condition in which the body attacks the lining of its own joints, causing pain, swelling and morning stiffness, often in the hands and feet on both sides. Modern medicines can stop it damaging the joints, which is why starting them early matters so much.",
  facts: ["An immune condition, not wear and tear", "Morning stiffness lasting over an hour", "Early treatment prevents joint damage"],
  keywords: ["rheumatoid", "arthritis", "swollen joints", "morning stiffness", "immune"],
  content: {
    understand: [
      article("what-it-is", "What rheumatoid arthritis is", 4, { blurb: "The immune system, the joint lining and why both sides are affected.", extra: "With a diagram", keywords: ["immune", "cause"] }),
      article("tests", "Blood tests, ultrasound and the diagnosis", 3, { keywords: ["blood test", "rheumatoid factor", "ultrasound"] }),
      article("beyond-joints", "Beyond the joints: tiredness, eyes, lungs, heart", 4, { keywords: ["tired", "fatigue", "eyes", "lungs"] }),
      article("flares", "Flares: what sets them off and how to ride them", 3, { keywords: ["flare", "triggers"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("dmards", "Methotrexate and the other DMARDs", 6, { keywords: ["methotrexate", "dmard", "tablets"] }),
      article("biologics", "Biologics and JAK inhibitors: the next step", 5, { keywords: ["biologic", "injection", "jak"] }),
      article("steroids", "Steroids: the short-term help", 3, { keywords: ["steroids", "injection"] }),
      piece("video", "hands", "Hand exercises and joint protection", 6, { keywords: ["hands", "exercises", "splint"] }),
    ],
    liveWell: [
      article("mornings", "Mornings: getting going", 3, { keywords: ["morning", "stiff", "shower"] }),
      article("fatigue", "Fatigue with rheumatoid arthritis", 4, { keywords: ["fatigue", "tired", "pacing"] }),
      article("work", "Work and reasonable adjustments", 4, { keywords: ["work", "employer"] }),
      article("infections", "Infections, vaccines and your medicines", 3, { keywords: ["infection", "vaccine", "flu"] }),
      article("pregnancy", "Pregnancy, family and your medicines", 3, { keywords: ["pregnancy"] }),
    ],
    watch: [
      piece("podcast", "ra-voices", "The first year with rheumatoid arthritis: two people talk", 22),
      piece("animation", "in-pictures", "Rheumatoid arthritis in the joint, in pictures", 3),
    ],
    sources: [source(NHS, "Rheumatoid arthritis: symptoms and treatment"), NRAS, VERSUS_ARTHRITIS],
    stories: [],
    askDoctor: [
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
  summary: "Bones that have lost strength and break more easily, often found only after a wrist, hip or spine fracture. It is silent until then, more common after the menopause and with steroids, and the tablets and the right exercise genuinely lower the chance of the next break.",
  facts: ["Silent until a bone breaks", "A DEXA scan measures bone strength", "Tablets, calcium, vitamin D and weight-bearing exercise"],
  keywords: ["osteoporosis", "fracture", "brittle bones", "bone density", "dexa", "broken"],
  content: {
    understand: [
      article("what-it-is", "What osteoporosis is", 3, { blurb: "Bone as living tissue, and why it thins.", extra: "With a diagram", keywords: ["bone", "cause"] }),
      article("dexa", "The DEXA scan and the T-score", 3, { keywords: ["dexa", "scan", "t-score"] }),
      article("who", "Who gets it: menopause, steroids, family, thin frame", 3, { keywords: ["menopause", "steroids", "risk"] }),
      article("spine", "Height loss and the spine", 3, { keywords: ["spine", "height", "stooped"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("tablets", "Bisphosphonates: taking them so they work", 4, { keywords: ["alendronate", "bisphosphonate", "tablets"] }),
      article("other-treatments", "Injections and the other treatments", 4, { keywords: ["denosumab", "injection"] }),
      article("calcium-d", "Calcium and vitamin D: food first", 3, { keywords: ["calcium", "vitamin d", "diet"] }),
      piece("exercise", "bone-exercise", "Weight-bearing and strength exercise for bones", 0, { keywords: ["exercise", "strength", "walking"] }),
    ],
    liveWell: [
      article("falls", "Preventing falls at home", 4, { keywords: ["falls", "home", "rugs", "lighting"] }),
      article("after-fracture", "Recovering from a fracture", 4, { keywords: ["fracture", "hip", "wrist", "recovery"] }),
      article("lifting", "Lifting, bending and gardening with care", 3, { keywords: ["lifting", "bending", "gardening"] }),
      article("dentist", "Tell your dentist", 2, { keywords: ["dentist", "teeth"] }),
    ],
    watch: [
      piece("video", "explained", "Osteoporosis explained in three minutes", 3),
      piece("video", "balance", "Balance exercises in five minutes", 5),
    ],
    sources: [source(NHS, "Osteoporosis: symptoms, treatment and prevention"), ROS],
    stories: [],
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
  summary: "Nearly everyone gets it, and most of it is not a sign of damage: muscles, joints and discs that are sore, stiff and sensitive. Keeping moving, staying at work where you can and not fearing the pain are the best-proven treatments. A few symptoms do need urgent attention.",
  facts: ["Most episodes settle within six weeks", "Keep moving: bed rest makes it worse", "Scans are rarely needed and rarely help"],
  keywords: ["back pain", "lower back", "neck pain", "slipped disc", "sore back"],
  content: {
    understand: [
      article("what-hurts", "What's actually hurting", 4, { blurb: "Muscles, joints, discs and nerves, and why the pain is rarely a sign of damage.", extra: "With a diagram", keywords: ["cause", "disc", "muscle"] }),
      article("red-flags", "Symptoms that need urgent attention", 2, { keywords: ["emergency", "bladder", "numb", "cauda equina"] }),
      article("scans", "Why you probably don't need a scan", 3, { keywords: ["mri", "x-ray", "scan"] }),
      article("long-term", "When back pain lasts: the pain system, explained", 4, { keywords: ["chronic", "persistent", "pain system"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      piece("video", "exercises", "Exercises for a sore back", 7, { keywords: ["exercises", "stretch"] }),
      article("painkillers", "Painkillers: what helps and what doesn't", 3, { keywords: ["painkillers", "ibuprofen"] }),
      article("physio", "Physiotherapy and when to ask for it", 3, { keywords: ["physio", "referral"] }),
      article("injections-surgery", "Injections and surgery: rarely, and for whom", 3, { keywords: ["injection", "surgery"] }),
    ],
    liveWell: [
      article("work", "Working with back pain", 3, { keywords: ["work", "desk", "lifting"] }),
      article("sleep", "Beds, pillows and sleeping with back pain", 3, { keywords: ["sleep", "mattress", "pillow"] }),
      article("fear", "Fear of moving, and how to get past it", 4, { keywords: ["fear", "confidence", "moving"] }),
      article("neck", "Neck pain: the same rules", 3, { keywords: ["neck", "neck pain"] }),
    ],
    watch: [
      piece("video", "explained", "Back pain explained in four minutes", 4),
      piece("audio", "pain-rest", "A ten-minute rest when the pain is loud", 10, { extra: "read aloud" }),
    ],
    sources: [source(NHS, "Back pain: causes, treatment and exercises"), VERSUS_ARTHRITIS, BACKCARE],
    stories: [],
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
