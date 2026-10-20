import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Angina page's pieces (content/library-conditions/heart.ts `learnId`).
// Every sentence was written from wording checked on 20 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, the British Heart
// Foundation (a UK charity) and NICE's guidelines on stable angina and on recent-onset chest pain, with
// driving rules from the DVLA pages on GOV.UK. General information only; it never replaces what a person's
// own heart team tells them.

const bhf = (label: string, path: string): LearnSource => ({ label: `British Heart Foundation: ${label}`, url: `https://www.bhf.org.uk/informationsupport/${path}` });
const NHS_ANGINA: LearnSource = { label: "NHS: Angina", url: "https://www.nhs.uk/conditions/angina/" };
const NHS_ECG: LearnSource = { label: "NHS: Electrocardiogram (ECG)", url: "https://www.nhs.uk/tests-and-treatments/electrocardiogram/" };
const NHS_GTN_ABOUT: LearnSource = { label: "NHS: About glyceryl trinitrate (GTN)", url: "https://www.nhs.uk/medicines/glyceryl-trinitrate-gtn/about-glyceryl-trinitrate-gtn/" };
const NHS_GTN_HOW: LearnSource = { label: "NHS: How and when to take glyceryl trinitrate (GTN)", url: "https://www.nhs.uk/medicines/glyceryl-trinitrate-gtn/how-and-when-to-take-glyceryl-trinitrate-gtn/" };
const NHS_GTN_SIDE: LearnSource = { label: "NHS: Side effects of glyceryl trinitrate (GTN)", url: "https://www.nhs.uk/medicines/glyceryl-trinitrate-gtn/side-effects-of-glyceryl-trinitrate-gtn/" };
const NHS_GTN_QUESTIONS: LearnSource = { label: "NHS: Common questions about glyceryl trinitrate (GTN)", url: "https://www.nhs.uk/medicines/glyceryl-trinitrate-gtn/common-questions-about-glyceryl-trinitrate-gtn/" };
const NHS_BETA_BLOCKERS: LearnSource = { label: "NHS: Beta blockers", url: "https://www.nhs.uk/medicines/beta-blockers/" };
const NHS_AMLODIPINE: LearnSource = { label: "NHS: Amlodipine", url: "https://www.nhs.uk/medicines/amlodipine/" };
const NHS_ANGIOPLASTY: LearnSource = { label: "NHS: Coronary angioplasty and stent insertion", url: "https://www.nhs.uk/tests-and-treatments/coronary-angioplasty/" };
const NHS_ANGIOPLASTY_ALTERNATIVES: LearnSource = { label: "NHS: Alternatives to coronary angioplasty", url: "https://www.nhs.uk/tests-and-treatments/coronary-angioplasty/alternatives/" };
const NHS_CABG_WHY: LearnSource = { label: "NHS: Why a coronary artery bypass graft is done", url: "https://www.nhs.uk/tests-and-treatments/coronary-artery-bypass-graft/why-its-done/" };
const NHS_STOP_SMOKING: LearnSource = { label: "NHS: Stop smoking services help you quit", url: "https://www.nhs.uk/live-well/quit-smoking/nhs-stop-smoking-services-help-you-quit/" };
const BHF_ANGINA = bhf("Angina", "conditions/angina");
const BHF_EXERCISE = bhf("Exercising with angina", "heart-matters-magazine/activity/exercising-with-a-heart-condition/exercising-with-angina");
const BHF_GTN = bhf("What's the best way to use GTN spray?", "heart-matters-magazine/medical/ask-the-experts/gtn-spray");
const BHF_CHEST_PAIN = bhf("Chest pain: what are the common causes?", "heart-matters-magazine/medical/chest-pain");
const BHF_ANGIOGRAM = bhf("Coronary angiogram", "tests/angiogram");
const BHF_EXERCISE_ECG = bhf("Exercise ECG", "tests/exercise-ecg");
const BHF_BETA_BLOCKERS = bhf("Beta blockers and what they do", "heart-matters-magazine/medical/drug-cabinet/beta-blockers");
const BHF_ANGIOPLASTY = bhf("Coronary angioplasty and stents", "treatments/coronary-angioplasty-and-stents");
const BHF_BYPASS = bhf("Coronary artery bypass surgery", "treatments/coronary-bypass-surgery");
const BHF_COLD = bhf("How cold weather affects your heart", "support/practical-support/will-cold-weather-affect-my-heart-condition");
const BHF_DRIVING = bhf("Driving with a heart or circulatory condition", "support/practical-support/driving");
const BHF_WORK = bhf("Work with a heart condition", "support/practical-support/work-and-a-heart-condition");
const BHF_TRAVEL = bhf("Holidays and travel", "support/practical-support/holidays-and-travel");
const BHF_SMOKING = bhf("Smoking", "risk-factors/smoking");
const BHF_ANXIETY = bhf("How to deal with anxiety when you have a heart problem", "heart-matters-magazine/wellbeing/how-to-deal-with-anxiety");
const BHF_EMOTIONAL = bhf("Emotional support", "support/emotional-support-and-wellbeing");
const NICE_STABLE_ANGINA: LearnSource = { label: "NICE: Stable angina, management (CG126)", url: "https://www.nice.org.uk/guidance/cg126/chapter/Recommendations" };
const NICE_CHEST_PAIN: LearnSource = { label: "NICE: Recent-onset chest pain of suspected cardiac origin (CG95)", url: "https://www.nice.org.uk/guidance/cg95/chapter/Recommendations" };
const GOV_ANGINA_DRIVING: LearnSource = { label: "GOV.UK: Angina and driving", url: "https://www.gov.uk/angina-and-driving" };

export const anginaAnswers: LearnArticle[] = [
  {
    id: "ang-what-it-is",
    kicker: "Understanding",
    question: "What is angina?",
    hook: "Narrowed arteries can carry enough blood when you rest, but not when your heart has to work harder.",
    short: "Angina is a pain or uncomfortable feeling, usually in the chest, when blood flow to the heart is reduced. It is usually caused by coronary heart disease, where fatty deposits narrow the arteries that supply the heart. Attacks often come on with effort and usually stop after a few minutes' rest or angina medicine. It is a warning sign, so treatment and healthy changes matter.",
    sections: [
      {
        heading: "A symptom, not a disease",
        paragraphs: [
          "Angina is a symptom. It's a pain or an uncomfortable feeling when blood flow to your heart is reduced. It's not dangerous, but it can be a sign of a heart problem like coronary heart disease.",
          "It's usually felt in your chest. Some people feel the pain in their arm, neck, stomach, back or jaw.",
        ],
      },
      {
        heading: "Narrowed arteries",
        paragraphs: [
          "Angina happens when the heart does not get enough blood. This is usually due to coronary heart disease, where the blood vessels supplying the heart become narrowed or blocked by fatty deposits.",
          "It can also be caused by the blood vessels in your heart tightening when they should not. This is called vasospastic angina or microvascular angina.",
        ],
      },
      {
        heading: "Why effort brings it on",
        paragraphs: [
          "When you exercise, your heart beats faster to get blood to your muscles, so it needs more oxygen-rich blood itself. If it does not receive enough blood, this can trigger angina pain.",
        ],
      },
      {
        heading: "Why rest helps",
        paragraphs: [
          "Angina attacks usually last less than 10 minutes. They should stop after resting for a few minutes or taking your angina medicine.",
        ],
      },
      {
        heading: "A warning sign",
        paragraphs: [
          "Angina is a warning sign that you're at risk of serious problems such as heart attacks and strokes. With treatment, the symptoms should improve over time and may eventually stop.",
        ],
      },
    ],
    helps: [
      "See a GP as soon as possible if you think you may have angina.",
      "Stop what you're doing and rest when an attack starts.",
      "Always have your angina medicine with you.",
      "Avoid things that trigger your angina attacks as much as possible.",
    ],
    tryThisWeek: [
      "Rest when an attack starts.",
      "Carry your medicine.",
      "Notice your triggers.",
    ],
    ask: "What type of angina do I have, and what is causing it?",
    interactive: {
      kind: "timeline",
      title: "Inside an angina attack",
      steps: [
        { id: "effort", when: "Effort", title: "The heart works harder", points: ["Exercise, stress, emotion or cold can bring it on.", "The heart needs more oxygen-rich blood."] },
        { id: "short", when: "Not enough blood", title: "Narrowed arteries can't keep up", points: ["Fatty deposits limit the blood supply.", "Pain or tightness in the chest, arm, neck or jaw."] },
        { id: "rest", when: "Rest or medicine", title: "Stop and rest", points: ["Stop what you're doing, rest, and use your angina medicine."] },
        { id: "passes", when: "Under 10 minutes", title: "The attack passes", points: ["Angina attacks usually last less than 10 minutes."] },
      ],
    },
    sources: [NHS_ANGINA, BHF_ANGINA, BHF_EXERCISE, NHS_GTN_QUESTIONS],
    quiz: {
      question: "What usually causes angina?",
      options: [{ text: "Arteries to the heart narrowed by fatty deposits", right: true }, { text: "A chest infection" }, { text: "The heart stopping for a moment" }],
      why: "This is usually due to coronary heart disease, where the blood vessels supplying the heart become narrowed or blocked by fatty deposits.",
    },
  },
  {
    id: "ang-stable-unstable",
    kicker: "Emergency",
    question: "Stable or unstable: when is angina an emergency?",
    hook: "Stable angina follows a pattern and eases with rest. Pain that comes at rest, or won't settle, is a 999 call.",
    short: "Stable angina is the most common type: it comes on when your heart works harder, lasts 5 minutes or less, and improves with rest or medicine. Unstable angina can happen at rest, feels more severe and lasts longer. Call 999 if chest pain does not stop after rest and your medicine. Get help from NHS 111 if your angina is getting worse or more frequent.",
    sections: [
      {
        heading: "Stable angina",
        paragraphs: [
          "Stable angina is the most common type. It tends to happen when your heart works harder, such as walking uphill, and goes away when you rest.",
          "You'll usually know when it's likely to happen. It lasts 5 minutes or less, and improves if you rest or take your medicine.",
        ],
      },
      {
        heading: "Unstable angina",
        paragraphs: [
          "Unstable angina can feel different to your normal angina symptoms. It can happen even when you're resting, feels more severe and lasts longer.",
          "If your symptoms do not improve when you rest or take medicines, you should call 999 immediately.",
        ],
      },
      {
        heading: "When to call 999",
        paragraphs: [
          "Call 999 if you have angina and chest pain that does not stop after resting for a few minutes or after taking your angina medicine.",
          "Also call 999 for pain that spreads to your arms, neck, jaw, shoulder, stomach or back, or chest pain with sweating, sickness, light-headedness or shortness of breath. You could be having a heart attack. Do not drive yourself to A&E.",
        ],
      },
      {
        heading: "When to get help from 111",
        paragraphs: [
          "Get help from NHS 111 if your angina feels worse than before, is happening more often, lasts longer, or happens when you're resting.",
        ],
      },
    ],
    helps: [
      "Follow your plan: stop what you're doing, rest and use your GTN.",
      "Take another dose after 5 minutes if the first does not help.",
      "Call 999 if you still have symptoms 5 minutes after the second dose.",
      "Get help from NHS 111 if your angina is worse, more frequent, longer or happens at rest.",
      "Do not drive yourself to A&E.",
    ],
    tryThisWeek: [
      "Learn the two-dose rule.",
      "Know when to call 111.",
      "Never drive yourself to A&E.",
    ],
    ask: "How will I know if my angina is becoming unstable?",
    interactive: {
      kind: "scenarios",
      title: "Which call to make?",
      scenarios: [
        { id: "hill", situation: "Your usual tightness walking uphill, easing after a few minutes' rest.", options: [{ text: "Rest and use your GTN as planned", best: true }, { text: "Call 999 straight away" }], why: "Stable angina tends to happen when your heart works harder, such as walking uphill, and goes away when you rest." },
        { id: "often", situation: "This week your angina is coming more often and lasting longer.", options: [{ text: "Get help from NHS 111", best: true }, { text: "Wait and see" }], why: "Get help from NHS 111 if your angina feels worse than before, is happening more often, lasts longer, or happens when you're resting." },
        { id: "rest", situation: "Chest pain at rest is still there 5 minutes after a second dose of GTN.", options: [{ text: "Call 999", best: true }, { text: "Drive yourself to A&E" }, { text: "Wait an hour" }], why: "Call 999 if you still have symptoms 5 minutes after the second dose. Do not drive yourself to A&E." },
      ],
    },
    sources: [BHF_ANGINA, NHS_ANGINA, NICE_STABLE_ANGINA],
    quiz: {
      question: "Your angina comes on at rest and does not ease with your medicine. What should you do?",
      options: [{ text: "Call 999", right: true }, { text: "Wait until tomorrow" }, { text: "Drive yourself to A&E" }],
      why: "If your symptoms do not improve when you rest or take medicines, you should call 999 immediately.",
    },
  },
  {
    id: "ang-tests",
    kicker: "Tests",
    question: "What happens at the tests: ECG, stress test, CT angiogram?",
    hook: "Some tests look at the heart's electrical signals, some at how it copes with effort, and some at the arteries themselves.",
    short: "If a GP thinks you may have angina, you'll be referred to a heart specialist. Tests may include blood tests, an ECG and scans such as a CT coronary angiogram. NICE recommends a CT coronary angiogram when the symptoms suggest angina. A normal resting ECG does not rule angina out. A traditional angiogram is still the most reliable test for blockages.",
    sections: [
      {
        heading: "First steps",
        paragraphs: [
          "If a GP thinks you may have angina, you'll be referred to a heart specialist (cardiologist). Tests may include blood tests, an ECG, checking the oxygen in your blood, and scans such as an angiogram, MRI or CT scan.",
        ],
      },
      {
        heading: "ECG",
        paragraphs: [
          "An ECG records the electrical activity of your heart, including the rate and rhythm. It's usually quick and painless.",
          "A normal resting ECG does not rule out stable angina.",
        ],
      },
      {
        heading: "CT coronary angiogram",
        paragraphs: [
          "A CT coronary angiogram shows images of the coronary arteries and any fatty deposits within them. A dye is injected into your hand or arm, and you lie on a table that moves through the scanner.",
          "NICE recommends a CT coronary angiogram when an assessment of your symptoms suggests angina.",
        ],
      },
      {
        heading: "Stress tests",
        paragraphs: [
          "An exercise ECG, or stress test, looks at how your heart works while you walk on a treadmill or cycle. It starts slowly and gets harder, and stops if you have symptoms or feel too tired.",
          "If you cannot exercise, you may be given a medicine that raises your heart rate instead. NICE says an exercise ECG should not be used to diagnose or rule out stable angina in people without known coronary artery disease.",
        ],
      },
      {
        heading: "Traditional angiogram",
        paragraphs: [
          "In a traditional angiogram, a thin tube is passed through your wrist or groin to your heart, and a dye shows any narrowing on X-ray. You'll be awake, and it usually takes around 30 minutes.",
          "It is still the gold standard for diagnosing coronary heart disease.",
        ],
      },
    ],
    helps: [
      "For an exercise test, wear light, comfortable clothes and trainers.",
      "Avoid a heavy meal or caffeine for two to three hours before an exercise test, and do not smoke for eight hours before.",
      "Let the team know if you would like someone else in the room with you during an ECG.",
      "Tell the team if you feel nervous or claustrophobic during a CT scan.",
      "Tell the nurse if you have diabetes before an angiogram.",
    ],
    tryThisWeek: [
      "Pack trainers for a stress test.",
      "Skip caffeine before the test.",
      "Mention nerves or diabetes.",
    ],
    ask: "Which test will I have first, and what will it tell us?",
    interactive: {
      kind: "flip-cards",
      title: "The tests",
      intro: "Turn each card to see what the test shows.",
      cards: [
        { id: "ecg", front: "Resting ECG", when: "Quick and painless", back: "Records the electrical activity of your heart. A normal result does not rule out stable angina." },
        { id: "ct", front: "CT coronary angiogram", when: "When symptoms suggest angina", back: "Shows the coronary arteries and any fatty deposits. Less invasive than a traditional angiogram." },
        { id: "stress", front: "Exercise ECG", when: "On a treadmill or bike", back: "Shows how your heart works during exercise. It stops if you have symptoms or feel too tired." },
        { id: "angio", front: "Traditional angiogram", when: "About 30 minutes, awake", back: "Dye through a thin tube shows narrowing on X-ray. Still the gold standard for coronary heart disease." },
      ],
    },
    sources: [NHS_ANGINA, NHS_ECG, BHF_ANGINA, BHF_ANGIOGRAM, BHF_EXERCISE_ECG, NICE_CHEST_PAIN],
    quiz: {
      question: "Does a normal resting ECG rule out stable angina?",
      options: [{ text: "No", right: true }, { text: "Yes, always" }, { text: "Only in younger people" }],
      why: "A normal resting ECG does not rule out stable angina.",
    },
  },
  {
    id: "ang-not-angina",
    kicker: "Other causes",
    question: "What chest pains aren't angina?",
    hook: "Heartburn, strained muscles and anxiety can all cause chest pain. But if you're unsure, get it checked.",
    short: "Chest pain is not always related to the heart. Common other causes include heartburn, chest infections, muscle strain and anxiety. Heartburn is often worse after eating or lying down, and muscle pain may come after lifting or in one position. Anxiety is not caused by a problem with blood flow, whereas angina is. If you are unsure, get medical help.",
    sections: [
      {
        heading: "Many causes",
        paragraphs: [
          "Common causes of chest pain that are not related to the heart include heartburn, chest infection, muscle pain, injuries and inflammation.",
          "Pain that is continuous or very long-lasting, unrelated to activity, or brought on by breathing in makes stable angina less likely.",
        ],
      },
      {
        heading: "Heartburn",
        paragraphs: [
          "Heartburn can cause a burning feeling in the middle of your chest and a sour taste in your mouth. Symptoms are often worse after eating, when lying down and when bending over.",
          "Sometimes people confuse angina with indigestion.",
        ],
      },
      {
        heading: "Muscles and ribs",
        paragraphs: [
          "Chest pain after exercise, carrying heavy shopping, or sleeping in an awkward position is probably linked to strain on your muscles and tendons.",
          "If your chest is painful to touch, it could be a condition called costochondritis, caused by inflammation in the rib cage.",
        ],
      },
      {
        heading: "Anxiety",
        paragraphs: [
          "Panic attacks or feeling anxious can cause chest pain. Anxiety isn't caused by a problem with your blood flow, whereas angina is.",
          "Anxiety-related chest pain is common. Medication, breathing techniques and psychotherapy can help you cope with or even control the symptoms over time.",
        ],
      },
      {
        heading: "If you are unsure",
        paragraphs: [
          "It can be hard to tell the cause of chest pain. If you are unsure, seek medical help.",
          "Call 999 for sudden chest pain that spreads to your arms, back, neck or jaw, makes your chest feel tight or heavy, or comes with breathlessness, sweating or feeling sick.",
        ],
      },
    ],
    helps: [
      "Notice what brings the pain on, such as meals, a position, or effort.",
      "Speak to your GP about any new or ongoing chest discomfort.",
      "If you are unsure about the cause, seek medical help.",
      "Call 999 for sudden chest pain that spreads, feels tight or heavy, or comes with breathlessness, sweating or feeling sick.",
      "Ask about breathing techniques or psychotherapy for anxiety-related chest pain.",
    ],
    tryThisWeek: [
      "Note what brings the pain on.",
      "See your GP about new pain.",
      "Know the 999 signs.",
    ],
    ask: "Could my chest pain be something other than angina?",
    interactive: {
      kind: "scenarios",
      title: "What might this pain be?",
      scenarios: [
        { id: "burn", situation: "A burning feeling in the middle of your chest after dinner, worse lying down.", options: [{ text: "It could be heartburn; see your GP if it carries on", best: true }, { text: "It is definitely angina" }], why: "Heartburn symptoms are often worse after eating, when lying down and when bending over. Speak to your GP about any new or ongoing chest discomfort." },
        { id: "shopping", situation: "Your chest is sore after carrying heavy shopping.", options: [{ text: "Probably muscle strain", best: true }, { text: "Certainly your heart" }], why: "Chest pain after carrying heavy shopping is probably linked to strain on your muscles and tendons." },
        { id: "sudden", situation: "Sudden heavy chest pain spreading to your arm, with sweating.", options: [{ text: "Call 999", best: true }, { text: "Wait to see if it is heartburn" }], why: "Call 999 for sudden chest pain that spreads to your arms, back, neck or jaw, or comes with breathlessness, sweating or feeling sick." },
      ],
    },
    sources: [BHF_CHEST_PAIN, BHF_ANGINA, NICE_CHEST_PAIN],
    quiz: {
      question: "Which sounds more like heartburn than angina?",
      options: [{ text: "A burning feeling that is worse after eating or lying down", right: true }, { text: "Pain walking uphill that eases with rest" }, { text: "Pain that GTN eases within minutes" }],
      why: "Symptoms are often worse after eating, when lying down and when bending over.",
    },
  },
  {
    id: "ang-spray",
    kicker: "GTN spray",
    question: "How do I use my GTN spray?",
    hook: "Sit down, spray under your tongue, wait 5 minutes. The two-dose rule tells you when to call 999.",
    short: "GTN widens your blood vessels, which increases the blood supply to your heart. Sit down and use 1 or 2 sprays under your tongue. If you're still in pain after 5 minutes, use a second dose. Do not use more than 2 doses in an attack, and call 999 if the pain is still there 5 minutes after the second dose. Headaches, dizziness and flushing are common.",
    sections: [
      {
        heading: "What GTN does",
        paragraphs: [
          "GTN is a type of medicine called a nitrate. It works by widening your blood vessels, which increases the blood supply to your heart and reduces chest pain.",
          "You use the spray during an angina attack, or before an activity that's likely to cause one.",
        ],
      },
      {
        heading: "How to use the spray",
        paragraphs: [
          "Sit down. If you have not used your spray for over a week, do 1 spray into the air first.",
          "Hold the nozzle in front of your mouth, open your mouth and lift your tongue. Spray under your tongue by pressing once firmly, without breathing in, then close your mouth. Rest for a while before you stand up slowly.",
        ],
      },
      {
        heading: "The two-dose rule",
        paragraphs: [
          "One dose is 1 or 2 sprays. If you're still in pain after 5 minutes, you can have a second dose. Do not use more than 2 doses during an angina attack.",
          "Call 999 if you're still in pain 5 minutes after your second dose, your pain is getting worse, or you feel unwell. Do not drive yourself to A&E.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "The most common side effects include headaches, feeling dizzy and facial flushing. The spray can cause a drop in blood pressure, so use it sitting down to avoid dizziness and fainting.",
          "Headaches usually go away after a few days if you use GTN regularly. Paracetamol is safe to take with GTN.",
        ],
      },
      {
        heading: "Before activity, and how often",
        paragraphs: [
          "You can use 1 or 2 sprays before an activity that brings on your angina. The spray usually takes 1 to 3 minutes to work.",
          "Overuse can reduce its effectiveness. If you find you're using your spray more often, discuss it with your GP or pharmacist.",
        ],
      },
    ],
    helps: [
      "When you first get your spray, do a test spray onto a tissue so you know how it works.",
      "Always sit down before using your spray.",
      "Keep your spray with you all the time, and have a spare.",
      "Check the expiry dates of your medicines.",
      "Tell your GP or pharmacist if you're using your spray more often.",
      "Do not use GTN if you've taken a medicine for erection problems, such as sildenafil.",
    ],
    tryThisWeek: [
      "Do a test spray onto a tissue.",
      "Keep a spare spray handy.",
      "Check the expiry date.",
    ],
    ask: "How often is it all right to use my spray, and when should I tell you?",
    interactive: {
      kind: "timeline",
      title: "Using GTN in an attack",
      steps: [
        { id: "sit", when: "Pain starts", title: "Stop and sit down", points: ["Sitting avoids the risk of dizziness and fainting."] },
        { id: "first", when: "First dose", title: "1 or 2 sprays", points: ["Spray under your tongue, then close your mouth."] },
        { id: "wait", when: "5 minutes", title: "Still in pain?", points: ["You can have a second dose."] },
        { id: "second", when: "Second dose", title: "1 or 2 more sprays", points: ["Do not use more than 2 doses in one attack."] },
        { id: "call", when: "5 minutes later", title: "Still in pain: call 999", points: ["Also call if the pain gets worse or you feel unwell.", "Do not drive yourself to A&E."] },
      ],
    },
    sources: [NHS_GTN_ABOUT, NHS_GTN_HOW, NHS_GTN_SIDE, NHS_GTN_QUESTIONS, BHF_GTN, NICE_STABLE_ANGINA],
    quiz: {
      question: "What is the most GTN you should use during one angina attack?",
      options: [{ text: "2 doses", right: true }, { text: "As much as it takes" }, { text: "Half a spray" }],
      why: "Do not use more than 2 doses during an angina attack.",
    },
  },
  {
    id: "ang-tablets",
    kicker: "Medicines",
    question: "What do beta blockers, calcium blockers and my other tablets do?",
    hook: "Some tablets prevent angina attacks. Others protect you from a heart attack or stroke.",
    short: "Anti-angina tablets aim to prevent episodes of angina, while other medicines such as low-dose aspirin and statins aim to prevent heart attack and stroke. NICE recommends a beta blocker or a calcium channel blocker first. Beta blockers slow the heart; calcium channel blockers such as amlodipine relax and widen the blood vessels. Other options exist if these do not suit you.",
    sections: [
      {
        heading: "Two different jobs",
        paragraphs: [
          "The aim of anti-anginal drug treatment is to prevent episodes of angina. The aim of other treatment is to prevent cardiovascular events such as heart attack and stroke.",
          "Medicines to reduce your risk of a stroke or heart attack include low-dose aspirin and statins.",
        ],
      },
      {
        heading: "Beta blockers",
        paragraphs: [
          "NICE recommends either a beta blocker or a calcium channel blocker as the first treatment for stable angina.",
          "Beta blockers slow down your heartbeat, reducing how hard the heart has to work. Common side effects include cold hands and feet, tiredness, dizziness, and vivid dreams or nightmares.",
        ],
      },
      {
        heading: "Calcium channel blockers",
        paragraphs: [
          "Amlodipine is a calcium channel blocker. It works by relaxing and widening your blood vessels, and it helps prevent angina attacks.",
          "Do not stop taking amlodipine unless a doctor tells you to. Stopping suddenly can be dangerous.",
        ],
      },
      {
        heading: "Other options",
        paragraphs: [
          "Other medicines taken regularly to prevent angina attacks include long-acting nitrates such as isosorbide mononitrate, ranolazine, nicorandil and ivabradine.",
          "Your doctor will advise you on which is the best medicine for you.",
        ],
      },
      {
        heading: "Getting it right",
        paragraphs: [
          "NICE says your response to treatment, including side effects, should be reviewed 2 to 4 weeks after starting or changing a medicine.",
          "There is no evidence that vitamin or fish oil supplements help stable angina.",
        ],
      },
    ],
    helps: [
      "Take your angina medicines regularly, as prescribed.",
      "Do not stop a tablet suddenly without talking to your doctor.",
      "Tell your doctor if you have asthma or COPD before starting a beta blocker.",
      "If a tablet makes you dizzy, do not drive, ride a bike or use machinery until it stops.",
      "Speak to your doctor or pharmacist if side effects bother you or do not go away.",
    ],
    tryThisWeek: [
      "Take your tablets regularly.",
      "Ask before stopping anything.",
      "Report side effects that linger.",
    ],
    ask: "Is my tablet a beta blocker or a calcium channel blocker, and why that one for me?",
    interactive: {
      kind: "flip-cards",
      title: "Your angina medicines",
      intro: "Turn each card to see what the medicine does.",
      cards: [
        { id: "beta", front: "Beta blocker", when: "A first choice for stable angina", back: "Slows your heartbeat, reducing how hard the heart has to work." },
        { id: "ccb", front: "Calcium channel blocker", when: "A first choice for stable angina", back: "Amlodipine relaxes and widens your blood vessels, and helps prevent angina attacks." },
        { id: "nitrate", front: "Long-acting nitrate", when: "Taken regularly to prevent attacks", back: "Isosorbide mononitrate is one. Other options include ranolazine, nicorandil and ivabradine." },
        { id: "protect", front: "Low-dose aspirin or a statin", when: "To lower heart attack and stroke risk", back: "These aim to prevent heart attack and stroke, rather than episodes of angina." },
      ],
    },
    sources: [NICE_STABLE_ANGINA, NHS_ANGINA, NHS_BETA_BLOCKERS, BHF_BETA_BLOCKERS, NHS_AMLODIPINE, NHS_GTN_QUESTIONS],
    quiz: {
      question: "What is the aim of anti-angina tablets?",
      options: [{ text: "To prevent episodes of angina", right: true }, { text: "To cure coronary heart disease" }, { text: "To replace your GTN spray" }],
      why: "The aim of anti-anginal drug treatment is to prevent episodes of angina.",
    },
  },
  {
    id: "ang-stents-bypass",
    kicker: "Procedures",
    question: "When are stents or bypass surgery offered?",
    hook: "When tablets do not control the symptoms well enough, opening or bypassing the narrowed artery may help.",
    short: "A stent or bypass may be considered when angina is not well controlled with the best medicines. An angioplasty uses a balloon and usually a stent to open a narrowed artery, and most people go home the same or next day. Bypass surgery uses a healthy blood vessel to make a new route for blood. NICE says the main purpose of both for stable angina is to improve symptoms.",
    sections: [
      {
        heading: "When medicines are not enough",
        paragraphs: [
          "NICE says a stent or bypass can be considered for people whose stable angina is not well controlled with the best medical treatment.",
          "An angiogram is used first to check the arteries and guide what treatment is best.",
        ],
      },
      {
        heading: "Angioplasty and stents",
        paragraphs: [
          "A thin tube is passed through your wrist or groin to the narrowed artery, and a small balloon is inflated to widen it. A small mesh tube called a stent usually stays in place, acting like a scaffold to keep the artery open.",
          "It usually takes between 30 minutes and 2 hours, and you'll be awake. If you're being treated for angina, you'll normally go home the same day or the day after.",
        ],
      },
      {
        heading: "Bypass surgery",
        paragraphs: [
          "Bypass surgery takes a healthy blood vessel from your chest, arm or leg and uses it to make a new route for blood around the narrowed artery.",
          "It might be recommended if medicines are not enough, if you're at high risk of a heart attack, or if angioplasty is not suitable. You should be able to do most normal activities after about 6 weeks.",
        ],
      },
      {
        heading: "Weighing them up",
        paragraphs: [
          "NICE says the main purpose of a stent or bypass for stable angina is to improve symptoms, and both are effective at relieving them. A repeat procedure may be needed after either, and is less often needed after bypass.",
          "Angioplasty has a quicker recovery, but the artery may narrow again. Bypass has a longer recovery and a higher risk of complications.",
        ],
      },
    ],
    helps: [
      "Ask your doctor about the benefits and risks of each option for you.",
      "Ask about the likely hospital stay, recovery time and medicines afterwards.",
      "Prepare by arranging someone to look after you, transport, and time off work.",
      "After a stent, keep taking prescribed medicines such as aspirin and clopidogrel.",
      "Make healthy changes to improve long-term success, such as being more active and giving up smoking.",
    ],
    tryThisWeek: [
      "List your questions about each option.",
      "Arrange help for your recovery.",
      "Ask about medicines afterwards.",
    ],
    ask: "Would a stent or bypass help my symptoms, and what are the risks for me?",
    interactive: {
      kind: "flip-cards",
      title: "The procedures",
      intro: "Turn each card to see what happens.",
      cards: [
        { id: "angiogram", front: "Angiogram", when: "First, to guide treatment", back: "Checks the heart and its blood vessels to see what treatment is best." },
        { id: "stent", front: "Angioplasty and stent", when: "Usually home the same or next day", back: "A balloon widens the artery, and a mesh stent stays in place like a scaffold to keep it open." },
        { id: "bypass", front: "Bypass surgery", when: "If angioplasty is not suitable", back: "A healthy blood vessel from your chest, arm or leg makes a new route around the narrowing." },
      ],
    },
    sources: [NICE_STABLE_ANGINA, NHS_ANGINA, NHS_ANGIOPLASTY, NHS_ANGIOPLASTY_ALTERNATIVES, NHS_CABG_WHY, BHF_ANGIOPLASTY, BHF_BYPASS],
    quiz: {
      question: "What is the main purpose of a stent or bypass for stable angina?",
      options: [{ text: "To improve symptoms", right: true }, { text: "To cure heart disease" }, { text: "To stop all medicines for good" }],
      why: "NICE says the main purpose of a stent or bypass for stable angina is to improve symptoms.",
    },
  },
  {
    id: "ang-rehab",
    kicker: "Exercise",
    question: "How can I exercise safely with angina?",
    hook: "Most people with angina can exercise safely. Warm up, keep it conversational, and carry your GTN.",
    short: "Exercise cannot cure angina, but it can reduce the risk of it getting worse and may improve your symptoms by raising the level of activity that triggers it. Aim for moderate activity where you can still hold a conversation. Warm up for 15 minutes, cool down for 10, carry your GTN, and stop if symptoms start. Do not exercise with unstable angina.",
    sections: [
      {
        heading: "Why exercise helps",
        paragraphs: [
          "Exercise cannot cure angina, but it can reduce the risk of angina getting worse and may even improve your symptoms. Most people with angina can still exercise safely.",
          "The level of activity it takes to trigger your symptoms is called the anginal threshold. Regular exercise can raise this threshold, so you can do more before symptoms start.",
        ],
      },
      {
        heading: "How hard to go",
        paragraphs: [
          "Aim for moderate intensity, such as brisk walking, cycling or dancing. A helpful guideline is to make sure you can still hold a conversation while you're exercising.",
          "Check with your medical team about what level you should be working at.",
        ],
      },
      {
        heading: "Warm up and cool down",
        paragraphs: [
          "Before you start, do a 15-minute warm-up. This lets your blood vessels gradually widen, so you're less likely to get angina symptoms.",
          "Cool down for 10 minutes afterwards, so your heart rate, breathing and blood pressure can gradually return to normal.",
        ],
      },
      {
        heading: "Carry your GTN",
        paragraphs: [
          "Have your GTN spray or tablets with you. Stop exercising straight away if you get chest, upper back, arm or jaw pain, feel very short of breath, dizzy or sick. Sit down, rest and take your angina medicine.",
          "Some people take GTN before exercise, but speak to your doctor first, as it can make you feel dizzy.",
        ],
      },
      {
        heading: "Not with unstable angina",
        paragraphs: [
          "You should not exercise if you have unstable angina, when symptoms happen unexpectedly, even at rest. Call 999 if your symptoms do not go away when you rest or take your angina medicine.",
        ],
      },
    ],
    helps: [
      "Do a 15-minute warm-up before exercising, and cool down for 10 minutes after.",
      "Exercise at a level where you can still hold a conversation.",
      "Carry your GTN spray or tablets when you exercise.",
      "If symptoms start, stop, sit down, rest and take your angina medicine.",
      "Do not hold your breath during strength exercises.",
      "Start slowly and build up gradually.",
    ],
    tryThisWeek: [
      "Do a 15-minute warm-up.",
      "Use the talk test.",
      "Take your GTN on walks.",
    ],
    ask: "What level of exercise is safe for me, and could I join a cardiac rehab programme?",
    interactive: {
      kind: "timeline",
      title: "One exercise session",
      steps: [
        { id: "warm", when: "15 minutes", title: "Warm up", points: ["Blood vessels gradually widen, so angina is less likely.", "In the cold, start warming up at home."] },
        { id: "main", when: "Main part", title: "Moderate effort", points: ["Brisk walking, cycling or dancing.", "You can still hold a conversation."] },
        { id: "symptoms", when: "If symptoms start", title: "Stop and rest", points: ["Sit down, rest and take your angina medicine.", "Warm up again before you carry on."] },
        { id: "cool", when: "10 minutes", title: "Cool down", points: ["Heart rate, breathing and blood pressure return to normal."] },
      ],
    },
    sources: [BHF_EXERCISE, BHF_ANGINA, NHS_GTN_QUESTIONS],
    quiz: {
      question: "What is a simple way to check your exercise level?",
      options: [{ text: "You can still hold a conversation", right: true }, { text: "You are too breathless to speak" }, { text: "Your chest starts to hurt" }],
      why: "A helpful guideline is to make sure you can still hold a conversation while you're exercising.",
    },
  },
  {
    id: "ang-cold-meals",
    kicker: "Triggers",
    question: "Why do cold weather and big meals bring on my angina?",
    hook: "Cold makes the heart work harder, and a big meal or stress can do the same. Small changes help.",
    short: "Angina is often brought on by exercise, stress, emotion or cold temperatures, and eating a big meal can trigger it too. In the cold, blood vessels narrow and the heart works harder, so symptoms can be worse in winter. Wrap a scarf loosely over your mouth and nose, eat smaller meals more often, and find ways to manage stress.",
    sections: [
      {
        heading: "Common triggers",
        paragraphs: [
          "Angina symptoms are often brought on by exercise, stress, emotion or cold temperatures, although sometimes there's no obvious trigger. Eating a heavy meal can also bring it on.",
        ],
      },
      {
        heading: "Cold weather",
        paragraphs: [
          "When you're cold, blood vessels narrow, so your blood pressure and heart rate go up and your heart works harder. If you have angina, your symptoms may be worse, or happen more often, in cold weather.",
          "Wear a scarf wrapped loosely around your mouth and nose, or a face mask, so you breathe in warmer air. On particularly cold days, it's best to avoid exercising outdoors.",
        ],
      },
      {
        heading: "Big meals",
        paragraphs: [
          "Eating a big meal can trigger angina symptoms. If meals are making your angina worse, try having smaller portions, more often through the day.",
        ],
      },
      {
        heading: "Stress",
        paragraphs: [
          "Stress can bring on angina symptoms. Some people find regular yoga or meditation helps.",
        ],
      },
      {
        heading: "Planning ahead",
        paragraphs: [
          "If you know an activity will bring on your angina, you can use your GTN beforehand. If it's cold outside, start warming up at home before you go out for a walk.",
        ],
      },
    ],
    helps: [
      "Avoid your triggers as much as possible.",
      "In the cold, wear a scarf loosely around your mouth and nose, and dress in layers.",
      "Try to keep the room you spend most time in heated to at least 18°C.",
      "Have smaller meals, more often.",
      "Find ways to manage stress, such as yoga or meditation.",
      "Warm up indoors before going out in the cold.",
    ],
    tryThisWeek: [
      "Wear a scarf over your mouth and nose.",
      "Try smaller meals more often.",
      "Warm up indoors first.",
    ],
    ask: "Which of my triggers can I plan around, and should I use GTN beforehand?",
    interactive: {
      kind: "risk-check",
      title: "What brings on your angina?",
      intro: "Tick your triggers to see what may help.",
      items: [
        { id: "cold", label: "Cold weather", note: "Wrap a scarf loosely around your mouth and nose, layer up, and avoid exercising outdoors on very cold days.", changeable: true },
        { id: "meal", label: "Big meals", note: "Try smaller portions, more often through the day.", changeable: true },
        { id: "stress", label: "Stress", note: "Find ways to manage stress. Some people find regular yoga or meditation helps.", changeable: true },
        { id: "effort", label: "Walking uphill or other effort", note: "Warm up first. You can use your GTN before an activity you know brings it on.", changeable: true },
        { id: "emotion", label: "Strong emotion", note: "Emotion is a common trigger. Avoid your triggers as much as possible.", changeable: true },
        { id: "none", label: "No obvious trigger", note: "Sometimes there's no obvious trigger. Always have your angina medicine with you.", changeable: false },
      ],
    },
    sources: [NHS_ANGINA, BHF_ANGINA, BHF_COLD, BHF_EXERCISE, BHF_GTN, NICE_STABLE_ANGINA],
    quiz: {
      question: "What may help your angina in cold weather?",
      options: [{ text: "A scarf loosely over your mouth and nose", right: true }, { text: "Hard exercise outdoors" }, { text: "Going out without a coat" }],
      why: "Wear a scarf wrapped loosely around your mouth and nose, or a face mask, so you breathe in warmer air.",
    },
  },
  {
    id: "ang-driving-work",
    kicker: "Getting about",
    question: "Can I drive, work and fly with angina?",
    hook: "Most car drivers with angina can keep driving. Jobs with heavy work or large vehicles may need changes.",
    short: "Car and motorcycle drivers do not need to tell DVLA about angina, and can keep driving unless angina happens at rest, while driving, or with emotion. Bus, coach and lorry drivers need to tell DVLA. Well-controlled angina usually has little impact on life, though physically demanding work may need changes. Most people with heart conditions can fly safely.",
    sections: [
      {
        heading: "Driving a car",
        paragraphs: [
          "You do not need to tell DVLA if you have angina and drive a car or motorcycle. You may continue to drive, even if you need medication, unless angina happens while resting, driving, or with emotion.",
          "If it does, stop driving until your symptoms are under control. After a planned angioplasty, stop driving for 1 week.",
        ],
      },
      {
        heading: "Bus, coach or lorry",
        paragraphs: [
          "Bus, coach and lorry drivers need to tell DVLA about angina, using form VOCH1.",
          "It's important to tell any insurer about changes to your health, including car, travel and life insurance.",
        ],
      },
      {
        heading: "Work",
        paragraphs: [
          "If your symptoms are well controlled, angina will not usually have a big impact on your life. But it may affect work that involves a lot of physical activity.",
          "Reasonable adjustments can include changing to less physically demanding duties. You do not have to tell your employer about your condition, but it can help them support you.",
        ],
      },
      {
        heading: "Flying and travel",
        paragraphs: [
          "Most people with heart and circulatory disease can travel by air safely, but check with your GP or heart specialist first. It's safe to use your GTN spray on the plane.",
          "Avoid travelling to high altitudes, above 2,000 metres, as less oxygen can bring on angina symptoms. Make sure you have enough medicine with you, and a spare supply.",
        ],
      },
    ],
    helps: [
      "Stop driving if angina comes on while resting, driving or with emotion, until it is under control.",
      "Ask your doctor whether you need to inform DVLA about your condition.",
      "Tell your insurers about changes to your health.",
      "Talk to your manager about adjustments if your job is physically demanding.",
      "Keep your medicines in your hand luggage, with a spare supply.",
    ],
    tryThisWeek: [
      "Ask your doctor about DVLA.",
      "Tell your insurer.",
      "Pack spare medicine for trips.",
    ],
    ask: "Is my angina controlled enough for driving and for my job?",
    interactive: {
      kind: "scenarios",
      title: "Driving, work and travel",
      scenarios: [
        { id: "car", situation: "You drive a car, and your angina only comes on with effort.", options: [{ text: "Carry on driving; no need to tell DVLA", best: true }, { text: "Give up driving for good" }], why: "You may continue to drive, even if you need medication, unless angina happens while resting, driving, or with emotion." },
        { id: "wheel", situation: "Angina comes on while you are driving.", options: [{ text: "Stop driving until it is under control", best: true }, { text: "Keep driving as normal" }], why: "If angina happens while driving, stop driving until your symptoms are under control." },
        { id: "trip", situation: "You're packing for a flight.", options: [{ text: "Medicines in hand luggage, with a spare supply", best: true }, { text: "All medicines in the hold" }], why: "Keep your medicines in your hand luggage, with a spare supply. It's safe to use your GTN spray on the plane." },
      ],
    },
    sources: [GOV_ANGINA_DRIVING, BHF_DRIVING, NHS_ANGINA, BHF_WORK, BHF_TRAVEL],
    quiz: {
      question: "Do car drivers with angina need to tell DVLA?",
      options: [{ text: "No, but stop if it happens at rest, while driving or with emotion", right: true }, { text: "Yes, always" }, { text: "Only after every attack" }],
      why: "You may continue to drive, even if you need medication, unless angina happens while resting, driving, or with emotion.",
    },
  },
  {
    id: "ang-food-smoking",
    kicker: "Arteries",
    question: "How do eating and smoking affect my arteries?",
    hook: "Smoking clogs arteries and makes angina worse. Food, alcohol and weight all play a part too.",
    short: "Lifestyle changes help prevent more fatty plaque forming in your arteries and can improve angina. Smoking can clog arteries and make angina worse; stopping cuts the risk of heart attack and stroke. Eat plenty of fruit, vegetables and wholegrains, choose lower saturated fat, keep salt to 6g a day and alcohol to 14 units a week.",
    sections: [
      {
        heading: "Why it matters",
        paragraphs: [
          "A change in lifestyle will help prevent more fatty plaque forming in your arteries and improve your symptoms of angina.",
          "Angina is a warning sign that you're at risk of serious problems such as heart attacks and strokes.",
        ],
      },
      {
        heading: "Smoking",
        paragraphs: [
          "Smoking can cause arteries to become clogged, and this can make angina symptoms worse. The chemicals in cigarettes make artery walls sticky, so fatty material sticks to them.",
          "Smoking increases your heart rate and blood pressure. Quitting will cut your risk of heart attack and stroke, and it's best to avoid secondhand smoke too.",
        ],
      },
      {
        heading: "Eating",
        paragraphs: [
          "Aim for plenty of fruit and vegetables, wholegrains, fat-free or low-fat dairy and lean proteins. Choose options that are lower in saturated fat, and swap unhealthy snacks for more nutritious ones.",
          "Aim for no more than 6g of salt a day.",
        ],
      },
      {
        heading: "Alcohol and weight",
        paragraphs: [
          "Try to keep to no more than 14 units of alcohol a week, spread across 3 or more days. Keeping to a healthy weight also helps.",
        ],
      },
      {
        heading: "Supplements",
        paragraphs: [
          "There is no evidence that vitamin or fish oil supplements help stable angina.",
        ],
      },
    ],
    helps: [
      "Try to quit smoking, and ask a free NHS stop smoking service for support.",
      "Eat plenty of fruit, vegetables and wholegrains, with less saturated fat.",
      "Keep salt to no more than 6g a day.",
      "Keep to no more than 14 units of alcohol a week, spread across 3 or more days.",
      "Try to keep to a healthy weight.",
    ],
    tryThisWeek: [
      "Contact a stop smoking service.",
      "Eat more fruit and vegetables.",
      "Keep salt under 6g a day.",
    ],
    ask: "Which change would make the biggest difference to my arteries?",
    interactive: {
      kind: "risk-check",
      title: "Which of these apply to you?",
      intro: "Tick any that apply to see what can help.",
      items: [
        { id: "smoke", label: "I smoke", note: "Smoking can clog arteries and make angina worse. Free NHS stop smoking services can help you quit.", changeable: true },
        { id: "salt", label: "I eat a lot of salty food", note: "Aim for no more than 6g of salt a day.", changeable: true },
        { id: "alcohol", label: "Over 14 units of alcohol a week", note: "Keep to no more than 14 units a week, spread across 3 or more days.", changeable: true },
        { id: "fat", label: "Lots of saturated fat or snacks", note: "Choose options lower in saturated fat, and swap unhealthy snacks for more nutritious ones.", changeable: true },
        { id: "weight", label: "Above a healthy weight", note: "Try to keep to a healthy weight.", changeable: true },
        { id: "supplements", label: "Taking fish oil for angina", note: "There is no evidence that vitamin or fish oil supplements help stable angina.", changeable: true },
      ],
    },
    sources: [BHF_ANGINA, NHS_GTN_QUESTIONS, NHS_ANGINA, BHF_SMOKING, NHS_STOP_SMOKING, NICE_STABLE_ANGINA],
    quiz: {
      question: "What is the most salt a day the NHS suggests aiming for?",
      options: [{ text: "6g", right: true }, { text: "20g" }, { text: "There is no limit" }],
      why: "Aim for no more than 6g of salt a day.",
    },
  },
  {
    id: "ang-worry",
    kicker: "Living with it",
    question: "How do I live with angina without constant worry?",
    hook: "Angina is a warning, not a sentence. Many people live full lives with it, and worry is common and treatable.",
    short: "Angina means a higher risk of heart attack or stroke, so treatment and healthy changes matter. But with treatment, symptoms should improve, and well-controlled angina will not usually have a big impact on your life, including exercise and sex. It's normal to feel anxious with a heart problem. Talking it through, and learning what's normal for you, can help.",
    sections: [
      {
        heading: "A warning to act on",
        paragraphs: [
          "Having angina means you're at higher risk of having a heart attack or stroke. It's important to treat it and make healthy lifestyle changes to reduce this risk.",
        ],
      },
      {
        heading: "Life can carry on",
        paragraphs: [
          "With treatment, the symptoms should improve over time and may eventually stop. If your symptoms are well controlled, angina will not usually have a big impact on your life.",
          "You'll usually be able to continue with most things, including exercise and sex. Many people with angina have a good quality of life and continue as usual.",
        ],
      },
      {
        heading: "Worry is common",
        paragraphs: [
          "It's normal to experience anxiety if you have a heart problem. Some people check their heartbeat many times a day, or avoid exercise because of fear.",
          "It can help to get to know your heart condition and your anxiety symptoms, so that you learn what's normal for you. You can work with your doctor or psychologist to do this.",
        ],
      },
      {
        heading: "Talking it through",
        paragraphs: [
          "NICE says people with stable angina should be encouraged to ask questions and voice their concerns and fears. Help can include pacing activities, setting goals, and support with stress, anxiety or depression.",
          "Support groups and online communities let you share experiences with people in a similar situation.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or nurse your questions, and share your fears.",
      "Work with your doctor to learn what's normal for you.",
      "Try a grounding technique, like naming 5 things you can see, when you feel overwhelmed.",
      "Speak to your doctor before taking up a new activity if you're worried about exercising.",
      "Talk to a cardiac nurse on the BHF Heart Helpline, or join a support group.",
    ],
    tryThisWeek: [
      "Share one worry with your doctor.",
      "Try the 5 things you can see exercise.",
      "Look up a support group.",
    ],
    ask: "How can I tell my angina apart from anxiety?",
    interactive: {
      kind: "scenarios",
      title: "Worried moments",
      scenarios: [
        { id: "pulse", situation: "You catch yourself checking your pulse many times a day.", options: [{ text: "Work with your doctor on what's normal for you", best: true }, { text: "Check it even more often" }], why: "It can help to get to know your heart condition and your anxiety symptoms, so that you learn what's normal for you." },
        { id: "activity", situation: "You'd like to take up a new activity but feel nervous.", options: [{ text: "Speak to your doctor first", best: true }, { text: "Avoid all activity" }], why: "Speak to your doctor before taking up a new activity if you're worried about exercising." },
        { id: "overwhelmed", situation: "Worry suddenly feels overwhelming.", options: [{ text: "Name 5 things you can see", best: true }, { text: "Try to push the thoughts away" }], why: "Try a grounding technique, like naming 5 things you can see, when you feel overwhelmed." },
      ],
    },
    sources: [NHS_ANGINA, BHF_ANGINA, BHF_ANXIETY, BHF_EMOTIONAL, NICE_STABLE_ANGINA],
    quiz: {
      question: "What does the NHS say about well-controlled angina?",
      options: [{ text: "It will not usually have a big impact on your life", right: true }, { text: "You will need to stop all exercise" }, { text: "A heart attack is certain" }],
      why: "If your symptoms are well controlled, angina will not usually have a big impact on your life.",
    },
  },
];
