import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the High blood pressure page's pieces (content/library-conditions/heart.ts
// `learnId`). Every sentence was written from wording checked on 20 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS,
// Blood Pressure UK, the Stroke Association, the British Heart Foundation and NICE's hypertension guideline
// (NG136). General information only; it never replaces what a person's own team tells them.

const bpuk = (label: string, path: string): LearnSource => ({ label: `Blood Pressure UK: ${label}`, url: `https://www.bloodpressureuk.org/your-blood-pressure/${path}` });
const strokeAssociation = (label: string, path: string): LearnSource => ({ label: `Stroke Association: ${label}`, url: `https://www.stroke.org.uk/stroke/managing-risk/high-blood-pressure${path}` });

const NHS_HBP: LearnSource = { label: "NHS: High blood pressure", url: "https://www.nhs.uk/conditions/high-blood-pressure-hypertension/" };
const NHS_BP_TEST: LearnSource = { label: "NHS: Blood pressure test", url: "https://www.nhs.uk/tests-and-treatments/blood-pressure-test/" };
const NHS_SALT: LearnSource = { label: "NHS: Salt in your diet", url: "https://www.nhs.uk/live-well/eat-well/food-types/salt-nutrition/" };
const NHS_RAMIPRIL_HOW: LearnSource = { label: "NHS: How and when to take ramipril", url: "https://www.nhs.uk/medicines/ramipril/how-and-when-to-take-ramipril/" };
const NHS_RAMIPRIL_SIDE: LearnSource = { label: "NHS: Side effects of ramipril", url: "https://www.nhs.uk/medicines/ramipril/side-effects-of-ramipril/" };
const NHS_AMLODIPINE: LearnSource = { label: "NHS: Amlodipine", url: "https://www.nhs.uk/medicines/amlodipine/" };
const NHS_ACTIVITY: LearnSource = { label: "NHS: Physical activity guidelines for adults aged 19 to 64", url: "https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/" };
const BPUK_WHAT = bpuk("What is high blood pressure?", "understanding-your-blood-pressure/what-is-high-blood-pressure/");
const BPUK_NUMBERS = bpuk("What do the numbers mean?", "understanding-your-blood-pressure/what-do-the-numbers-mean/");
const BPUK_STROKE = bpuk("Stroke and high blood pressure", "understanding-your-blood-pressure/why-is-high-blood-pressure-a-problem/stroke-and-high-blood-pressure/");
const BPUK_CAUSES = bpuk("Causes of high blood pressure", "causes/");
const BPUK_CHECK = bpuk("Getting a blood pressure check", "getting-diagnosed/getting-a-blood-pressure-check/");
const BPUK_DIAGNOSED = bpuk("Just been diagnosed?", "getting-diagnosed/just-been-diagnosed/");
const BPUK_HOME = bpuk("Monitoring your blood pressure at home", "how-to-lower-your-blood-pressure/monitoring-your-blood-pressure-at-home/");
const BPUK_MEASURE = bpuk("How to measure your blood pressure at home", "how-to-lower-your-blood-pressure/monitoring-your-blood-pressure-at-home/how-to-measure-your-blood-pressure-at-home/");
const BPUK_MEDS = bpuk("Medications for high blood pressure", "how-to-lower-your-blood-pressure/medications-for-high-blood-pressure/");
const BPUK_ACE = bpuk("ACE inhibitors", "how-to-lower-your-blood-pressure/medications-for-high-blood-pressure/ace-inhibitors/");
const BPUK_CCB = bpuk("Calcium-channel blockers", "how-to-lower-your-blood-pressure/medications-for-high-blood-pressure/calcium-channel-blockers/");
const BPUK_DIURETICS = bpuk("Diuretics", "how-to-lower-your-blood-pressure/medications-for-high-blood-pressure/diuretics/");
const BPUK_SALT = bpuk("Salt and your blood pressure", "how-to-lower-your-blood-pressure/healthy-eating/salt-and-your-blood-pressure/");
const BPUK_ALCOHOL = bpuk("Alcohol and your blood pressure", "how-to-lower-your-blood-pressure/healthy-living/alcohol-and-your-blood-pressure/");
const BPUK_EXERCISE = bpuk("Exercise, physical activity and your blood pressure", "how-to-lower-your-blood-pressure/healthy-living/exercise-physical-activity/");
const BPUK_WEIGHT = bpuk("Your weight and your blood pressure", "how-to-lower-your-blood-pressure/healthy-living/your-weight-and-your-blood-pressure/");
const BPUK_SLEEP = bpuk("Sleep and your blood pressure", "how-to-lower-your-blood-pressure/healthy-living/sleep-and-your-blood-pressure/");
const BPUK_STRESS = bpuk("Stress and your blood pressure", "how-to-lower-your-blood-pressure/healthy-living/stress-and-your-blood-pressure/");
const SA_HBP = strokeAssociation("High blood pressure", "");
const SA_DIAGNOSE = strokeAssociation("Diagnosing high blood pressure", "/diagnose");
const SA_MONITOR = strokeAssociation("Monitoring high blood pressure", "/monitor");
const SA_REDUCE = strokeAssociation("Reducing high blood pressure", "/reduce");
const SA_MEDS = strokeAssociation("Medication to lower blood pressure", "/reduce/medication");
const BHF_HBP: LearnSource = { label: "British Heart Foundation: High blood pressure", url: "https://www.bhf.org.uk/informationsupport/risk-factors/high-blood-pressure" };
const NICE_NG136: LearnSource = { label: "NICE: Hypertension in adults (NG136), recommendations", url: "https://www.nice.org.uk/guidance/ng136/chapter/Recommendations" };

export const hbpAnswers: LearnArticle[] = [
  {
    id: "hbp-numbers",
    kicker: "Understanding",
    question: "What do the blood pressure numbers actually mean?",
    hook: "A reading is two numbers: the push when your heart beats, and the pressure as it rests between beats.",
    short: "A blood pressure reading has two numbers. The top number is the highest pressure, when your heart beats, and the bottom number is the lowest, when your heart relaxes between beats. You are usually considered to have high blood pressure at 140/90 or higher when checked by a healthcare professional, or 135/85 or higher at home.",
    sections: [
      {
        heading: "Top and bottom",
        paragraphs: [
          "When you have your blood pressure measured, you will be given two numbers, a top number and a bottom number.",
          "The top number is systolic pressure. It is the highest level your blood pressure reaches when your heart beats, forcing blood around your body. The bottom number is diastolic pressure. It is the lowest level your blood pressure reaches as your heart relaxes between beats.",
        ],
      },
      {
        heading: "How it is written",
        paragraphs: [
          "Blood pressure is measured in millimetres of mercury, written mmHg. A reading of 120/80mmHg is said as 120 over 80.",
        ],
      },
      {
        heading: "What counts as high",
        paragraphs: [
          "You are usually considered to have high blood pressure if your reading is 140/90 or higher when checked by a healthcare professional, or 135/85 or higher when checked at home.",
          "Ideally, blood pressure should be between 90/60mmHg and 120/80mmHg. A reading between 120/80mmHg and 140/90mmHg is sometimes called high-normal blood pressure. It is not high blood pressure, but it means you could go on to develop it.",
        ],
      },
      {
        heading: "One number is enough",
        paragraphs: [
          "Only one of your numbers needs to be higher than it should be to be diagnosed with high blood pressure.",
          "A single high reading does not necessarily mean you have high blood pressure. Many things can affect it during the day, such as the temperature, when you last ate, and feeling stressed.",
        ],
      },
    ],
    helps: [
      "Get your blood pressure checked at a pharmacy or GP surgery if you think you might be at risk.",
      "If you are 40 or over and have not been checked for more than 5 years, get a check.",
      "Use a blood pressure chart to see where your numbers sit.",
      "Expect more than one reading before a diagnosis, because a single high reading may be a one-off.",
    ],
    tryThisWeek: [
      "Book a check if you are due one.",
      "Look up where your numbers sit on a chart.",
      "Remember one high reading may be a one-off.",
    ],
    ask: "What were my last numbers, and what do they mean for me?",
    interactive: {
      kind: "scenarios",
      title: "Read the reading",
      scenarios: [
        {
          id: "one-high",
          situation: "A nurse measures 145/85 in clinic.",
          options: [{ text: "May be high: top number over 140", best: true }, { text: "Fine: the bottom number is normal" }],
          why: "Only one of your numbers needs to be higher than it should be to be diagnosed with high blood pressure.",
        },
        {
          id: "home",
          situation: "Your home monitor shows 130/80.",
          options: [{ text: "It is below the home level of 135/85", best: true }, { text: "It is high, because it is over 120/80" }],
          why: "You are usually considered to have high blood pressure at 135/85 or higher when checked at home.",
        },
        {
          id: "one-off",
          situation: "One reading is high after a rushed morning.",
          options: [{ text: "May be a one-off: check again", best: true }, { text: "It definitely means high blood pressure" }],
          why: "A single high reading does not necessarily mean you have high blood pressure.",
        },
      ],
    },
    sources: [NHS_HBP, NHS_BP_TEST, BPUK_NUMBERS, BPUK_WHAT],
    quiz: {
      question: "How many of the two numbers need to be high for a diagnosis?",
      options: [{ text: "Just one", right: true }, { text: "Both of them" }, { text: "Neither: only the pulse counts" }],
      why: "Only one of your numbers needs to be higher than it should be to be diagnosed with high blood pressure.",
    },
  },
  {
    id: "hbp-after-stroke",
    kicker: "After a stroke",
    question: "Why does blood pressure matter so much after a stroke?",
    hook: "High blood pressure is the biggest single risk factor for stroke. Bringing it down, even a little, lowers the risk of another.",
    short: "High blood pressure is the biggest single risk factor for stroke, and plays a part in about half of all strokes. Over time it damages blood vessels so they can get blocked or burst. Many people need long-term medication and some healthy changes to reduce the risk of another stroke.",
    sections: [
      {
        heading: "The biggest risk factor",
        paragraphs: [
          "High blood pressure is the biggest single risk factor for stroke. It plays a part in about half of all strokes.",
        ],
      },
      {
        heading: "How it leads to a stroke",
        paragraphs: [
          "Uncontrolled high blood pressure can damage your blood vessels. Over time they can become narrower and stiffer, or weaker, so they can get blocked or burst.",
          "Clots can form on fatty material in narrowed arteries. If a clot travels to the brain, it causes an ischaemic stroke or a TIA. High blood pressure can also damage blood vessels inside the brain, causing bleeding, which is a haemorrhagic stroke.",
        ],
      },
      {
        heading: "The tiny vessels",
        paragraphs: [
          "High blood pressure over a long time is a risk factor for small vessel disease. This is damage to the tiny blood vessels deep inside the brain. It makes a stroke more likely and can affect thinking.",
        ],
      },
      {
        heading: "After a stroke or TIA",
        paragraphs: [
          "If you have had a stroke or TIA, your blood pressure will be checked in hospital. You will be given any treatment and advice you need to help lower it and reduce your risk of another stroke.",
          "Being diagnosed with high blood pressure after a stroke may come as a shock. Many people need long-term medication and some healthy lifestyle changes.",
        ],
      },
      {
        heading: "Small change, big difference",
        paragraphs: [
          "Lowering your blood pressure, even by a small amount, can help you stay healthy. The Stroke Association says that if you can lower your blood pressure by just 10 mmHg, you could cut your risk of stroke by over 25%.",
        ],
      },
    ],
    helps: [
      "Take your blood pressure medicines exactly as your doctor has told you.",
      "Ask your GP surgery or pharmacist about local support with lifestyle changes.",
      "Reduce your salt, eat plenty of fruit and vegetables, and be more active.",
      "Have your blood pressure checked until you reach your target, then every six months to a year.",
      "Call 999 straight away if you see any single sign of stroke in the face, arms or speech.",
    ],
    tryThisWeek: [
      "Take your medicines as prescribed.",
      "Ask about local lifestyle support.",
      "Learn the face, arms and speech signs.",
    ],
    ask: "What is my blood pressure target now, and how often should it be checked?",
    interactive: {
      kind: "timeline",
      title: "After a stroke or TIA",
      steps: [
        { id: "hospital", when: "In hospital", title: "Blood pressure checked", points: ["Your blood pressure is checked by a healthcare professional.", "You are given treatment and advice to help lower it."] },
        { id: "home", when: "Going home", title: "Medicines and healthy changes", points: ["Many people need long-term medication.", "Less salt, more fruit and vegetables, and more activity help."] },
        { id: "target", when: "Until your target", title: "Regular checks", points: ["You should be monitored until you reach your target blood pressure."] },
        { id: "after", when: "After that", title: "A check every six months to a year", points: ["Take your medicines exactly as your doctor has told you.", "Call 999 at any sign of stroke in the face, arms or speech."] },
      ],
    },
    sources: [SA_HBP, SA_DIAGNOSE, SA_REDUCE, SA_MONITOR, SA_MEDS, BPUK_STROKE],
    quiz: {
      question: "How big a part does high blood pressure play in strokes?",
      options: [{ text: "A part in about half of all strokes", right: true }, { text: "No part at all" }, { text: "Only in people over 80" }],
      why: "High blood pressure is the biggest single risk factor for stroke. It plays a part in about half of all strokes.",
    },
  },
  {
    id: "hbp-why-high",
    kicker: "Causes",
    question: "Why does blood pressure go up?",
    hook: "Salt, weight, alcohol and activity you can change. Age, genes and background you cannot, but they still count.",
    short: "For many people there is no single cause, but lifestyle often plays an important role. Too much salt, being overweight, drinking too much alcohol, not being active and smoking can all raise blood pressure. Age, family history and ethnic background play a part too, and sometimes another health problem or a medicine is the cause.",
    sections: [
      {
        heading: "Often no single cause",
        paragraphs: [
          "For many people there may be no one single cause of high blood pressure, but lifestyle often plays an important role.",
          "High blood pressure with no known single cause is called essential or primary hypertension. Most people have this type.",
        ],
      },
      {
        heading: "Things you can change",
        paragraphs: [
          "Eating too much salt is one of the main causes of high blood pressure. Being overweight is strongly linked with it.",
          "Alcohol has a surprisingly big impact on blood pressure, and is linked to a fifth of cases. Not eating enough fruit and vegetables, smoking and a lack of physical activity also raise the risk.",
        ],
      },
      {
        heading: "Things you cannot change",
        paragraphs: [
          "Blood pressure tends to rise with age. You are more likely to develop high blood pressure if other people in your family have it.",
          "People from Black African, Black Caribbean and South Asian backgrounds have a higher risk.",
        ],
      },
      {
        heading: "Other conditions and medicines",
        paragraphs: [
          "Sometimes high blood pressure is caused by another health problem, such as a kidney or hormone problem. This is called secondary hypertension, and treating the cause could bring blood pressure back to normal. Obstructive sleep apnoea is another example.",
          "Some medicines can raise blood pressure. These include the combined contraceptive pill, steroids, anti-inflammatory painkillers such as ibuprofen, and some antidepressants. Cough and cold remedies and herbal remedies can also have an effect.",
        ],
      },
    ],
    helps: [
      "Cut down on salt.",
      "Lose weight if you are overweight.",
      "Avoid drinking more than 14 alcohol units a week on a regular basis.",
      "Do not smoke.",
      "Ask your doctor or pharmacist if you are worried a medicine or remedy might affect your blood pressure.",
    ],
    tryThisWeek: [
      "Eat a little less salt.",
      "Count your alcohol units.",
      "Ask about any medicine you are unsure of.",
    ],
    ask: "Could another condition or one of my medicines be raising my blood pressure?",
    interactive: {
      kind: "risk-check",
      title: "What might be raising yours?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "salt", label: "Eating a lot of salt", note: "One of the main causes, so eating less is one of the best ways to lower it.", changeable: true },
        { id: "weight", label: "Being overweight", note: "Strongly linked with high blood pressure. Even losing a small amount can make a big difference.", changeable: true },
        { id: "alcohol", label: "Drinking too much alcohol", note: "Linked to a fifth of cases. Avoid drinking more than 14 units a week on a regular basis.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Stopping smoking is one of the best things you can do for your health.", changeable: true },
        { id: "active", label: "Not being active", note: "Aim to do at least 150 minutes of exercise a week.", changeable: true },
        { id: "fruit", label: "Little fruit and vegetables", note: "Eating too little can lead to high blood pressure.", changeable: true },
        { id: "stress", label: "Long-term stress", note: "Feeling stressed over a long period increases your chances, and can lead to unhealthy ways of coping.", changeable: true },
        { id: "medicines", label: "Medicines such as steroids", note: "Some medicines can raise blood pressure. Ask your doctor or pharmacist if you are worried.", changeable: true },
        { id: "age", label: "Getting older", note: "Blood pressure tends to rise with age. Healthy changes still help you take control.", changeable: false },
        { id: "family", label: "Family with high blood pressure", note: "Your genes play a role. Healthy changes still help you take control.", changeable: false },
        { id: "background", label: "Black African, Caribbean or South Asian", note: "People from these backgrounds have a higher risk. Changes to your diet could help lower it.", changeable: false },
      ],
    },
    sources: [NHS_HBP, BPUK_WHAT, BPUK_CAUSES, BHF_HBP],
    quiz: {
      question: "What is high blood pressure with no known single cause called?",
      options: [{ text: "Essential or primary hypertension", right: true }, { text: "Secondary hypertension" }, { text: "White coat hypertension" }],
      why: "High blood pressure with no known single cause is called essential or primary hypertension. Most people have this type.",
    },
  },
  {
    id: "hbp-targets",
    kicker: "Targets",
    question: "What should my target be, and why does it differ?",
    hook: "The usual target depends on your age, whether the reading is taken at home or in clinic, and some other conditions.",
    short: "NICE guidance says that for adults under 80, the aim is a clinic reading below 140/90mmHg, or below 135/85mmHg with home readings. For people aged 80 and over, it is below 150/90mmHg in clinic, or 145/85mmHg at home. Some people have a different target, so ask what yours is.",
    sections: [
      {
        heading: "Under 80",
        paragraphs: [
          "For adults with high blood pressure aged under 80, NICE says to reduce clinic blood pressure to below 140/90mmHg and keep it there. With home readings, the target is below 135/85mmHg.",
        ],
      },
      {
        heading: "80 and over",
        paragraphs: [
          "For adults aged 80 and over, the clinic target is below 150/90mmHg. With home readings, it is below 145/85mmHg.",
          "Doctors use their judgement for people living with frailty or several long-term conditions.",
        ],
      },
      {
        heading: "Why home figures are lower",
        paragraphs: [
          "Home readings are compared with lower figures than clinic readings. NICE says the matching home measurements are 5 mmHg lower than clinic measurements.",
        ],
      },
      {
        heading: "Other conditions",
        paragraphs: [
          "Some people with chronic kidney disease or type 1 diabetes have a lower target, below 130/80mmHg. NICE uses the same targets for people with and without cardiovascular disease.",
          "If your blood pressure drops a lot when you stand up, or you have symptoms of this, your target is based on your standing blood pressure.",
        ],
      },
      {
        heading: "Agreeing yours",
        paragraphs: [
          "These are guidance ranges. Discuss your readings with your healthcare team. Together, you might set a target blood pressure that is right for you and your health goals.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or nurse what your own target is.",
      "Check whether your target is a clinic figure or a home figure.",
      "Discuss your readings with your healthcare team and ask any questions you have.",
      "Mention any dizziness when you stand up, as it can change how your target is set.",
    ],
    tryThisWeek: [
      "Ask what your target is.",
      "Check if it is a clinic or home figure.",
      "Note questions about your readings.",
    ],
    ask: "What is my target, and is it for clinic or home readings?",
    interactive: {
      kind: "flip-cards",
      title: "Find your target",
      intro: "Turn each card to see the NICE target. Ask your team which one is yours.",
      cards: [
        { id: "under-80", front: "Under 80", when: "Most adults with high blood pressure", back: "Below 140/90mmHg in clinic, or below 135/85mmHg with home readings." },
        { id: "over-80", front: "80 and over", when: "Adults aged 80 and over", back: "Below 150/90mmHg in clinic, or below 145/85mmHg with home readings. Frailty is taken into account." },
        { id: "kidney", front: "Some kidney or diabetes conditions", when: "Some kidney disease or type 1 diabetes", back: "A lower target, below 130/80mmHg." },
        { id: "standing", front: "Dizzy when standing", when: "A big drop in pressure on standing", back: "The target is based on your standing blood pressure." },
      ],
    },
    sources: [NICE_NG136, BHF_HBP, BPUK_DIAGNOSED],
    quiz: {
      question: "What is the usual clinic target for adults under 80?",
      options: [{ text: "Below 140/90mmHg", right: true }, { text: "Below 160/100mmHg" }, { text: "Below 100/60mmHg" }],
      why: "For adults with high blood pressure aged under 80, NICE says to reduce clinic blood pressure to below 140/90mmHg and keep it there.",
    },
  },
  {
    id: "hbp-home-monitor",
    kicker: "At home",
    question: "How do I measure my blood pressure at home properly?",
    hook: "A validated upper-arm monitor, five quiet minutes, a supported arm, and a written record.",
    short: "Use a clinically validated automatic monitor with an upper-arm cuff that fits. Rest for five minutes, sitting with your back supported, feet flat and arm resting at heart level, then take two or three readings one to two minutes apart. Write them down exactly as they appear.",
    sections: [
      {
        heading: "The monitor",
        paragraphs: [
          "Choose a monitor that is clinically validated, which means it has been tested and gives results you can trust. An automatic monitor with an upper-arm cuff is the easiest to use and most reliable.",
          "Make sure the cuff is the right size, otherwise your reading will not be accurate.",
        ],
      },
      {
        heading: "Before you start",
        paragraphs: [
          "Do not measure your blood pressure within half an hour of eating, smoking, drinking caffeine or exercising. If you need the toilet, go first.",
          "Rest for five minutes. Sit somewhere quiet with your back supported, your feet flat on the floor, and your arm resting at the same height as your heart.",
        ],
      },
      {
        heading: "Taking the reading",
        paragraphs: [
          "Place the cuff just above your elbow. Keep still and quiet, and do not cross your legs.",
          "Take two or three readings, each about one to two minutes apart. If the first reading is much higher than the next, ignore it and take an extra one.",
        ],
      },
      {
        heading: "The first week",
        paragraphs: [
          "When you first start, measure your blood pressure in the morning and evening, every day for a week. Ignore the first day's readings, as you are still getting used to the monitor.",
          "After that, you can usually take readings less often. Your doctor or nurse can advise you.",
        ],
      },
      {
        heading: "Keeping a record",
        paragraphs: [
          "Write down your readings exactly as they appear on the screen, without rounding them up or down. Note the date and time, when you took your medicines, and anything that might have affected the reading. Take your record to your appointments.",
        ],
      },
    ],
    helps: [
      "Choose a clinically validated monitor with an upper-arm cuff.",
      "Rest for five minutes before you measure.",
      "Take two or three readings, one to two minutes apart.",
      "Take readings at the same time each day, using the same arm.",
      "Do not stop your medicines if your readings fall; talk to your doctor first.",
      "Bring your monitor to an appointment so your doctor or nurse can check you are using it correctly.",
    ],
    tryThisWeek: [
      "Rest five minutes before measuring.",
      "Take two or three readings.",
      "Measure at the same time each day.",
    ],
    ask: "How often should I measure at home, and what should I do with the readings?",
    interactive: {
      kind: "timeline",
      title: "One home reading, step by step",
      steps: [
        { id: "before", when: "Half an hour before", title: "No food, caffeine or smoking", points: ["Do not eat, smoke, drink caffeine or exercise.", "Go to the toilet first if you need to."] },
        { id: "rest", when: "Five minutes before", title: "Sit and rest", points: ["Back supported, feet flat on the floor.", "Arm resting at the same height as your heart."] },
        { id: "reading", when: "The reading", title: "Cuff on, keep still", points: ["Place the cuff just above your elbow.", "Keep still and quiet, and do not cross your legs."] },
        { id: "repeat", when: "One to two minutes later", title: "Take another", points: ["Take two or three readings.", "If the first is much higher, ignore it and take an extra one."] },
        { id: "record", when: "Afterwards", title: "Write it down", points: ["Write readings exactly as they appear on the screen.", "Note the date, the time and when you took your medicines."] },
      ],
    },
    sources: [BPUK_HOME, BPUK_MEASURE, NHS_BP_TEST, NICE_NG136],
    quiz: {
      question: "How long should you rest before taking a reading?",
      options: [{ text: "Five minutes", right: true }, { text: "No time at all" }, { text: "Only a few seconds" }],
      why: "Rest for five minutes. Sit somewhere quiet with your back supported, your feet flat on the floor, and your arm resting at the same height as your heart.",
    },
  },
  {
    id: "hbp-tablets",
    kicker: "Treatment",
    question: "What do the different blood pressure tablets do?",
    hook: "Four main types work in different ways, which is why many people take more than one.",
    short: "There are four main types: ACE inhibitors, angiotensin receptor blockers, calcium-channel blockers and thiazide-like diuretics. They work in different ways, so many people take more than one. Most blood pressure medicines are taken as tablets once a day.",
    sections: [
      {
        heading: "ACE inhibitors and ARBs",
        paragraphs: [
          "ACE inhibitors help the blood vessels relax and widen. Most have names ending in ‘pril’, such as ramipril.",
          "Angiotensin receptor blockers, called ARBs, work in a similar way. Most have names ending in ‘artan’, such as losartan. They are usually used if ACE inhibitors cause side effects, and the two are not usually taken together.",
        ],
      },
      {
        heading: "Calcium-channel blockers",
        paragraphs: [
          "Calcium-channel blockers allow the artery walls to relax, making them wider so more blood can pass through. Most have names ending in ‘pine’, such as amlodipine.",
        ],
      },
      {
        heading: "Diuretics",
        paragraphs: [
          "Thiazide-like diuretics are sometimes called water tablets. They help the kidneys take more salt and water out of the blood, so there is less pressure on the blood vessel walls. Examples include indapamide and bendroflumethiazide.",
        ],
      },
      {
        heading: "Which one first",
        paragraphs: [
          "Which medicine suits you depends on things like your age, ethnic background, other health problems and other medicines you take.",
          "ACE inhibitors are often used with people under 55 who are not of Black African or Black Caribbean origin. Calcium-channel blockers are particularly effective in people over 55, and in Black African and Black Caribbean people of any age.",
        ],
      },
      {
        heading: "More than one",
        paragraphs: [
          "Blood pressure medicines can be more effective in combination, because they work in different ways. If you are taking four types and your blood pressure stays high, you may be referred to a specialist.",
          "Other medicines, such as beta-blockers, are usually only recommended if other treatments have not worked.",
        ],
      },
    ],
    helps: [
      "Take your medicines exactly as your doctor has told you.",
      "Read the leaflet that comes with each medicine.",
      "Check with your GP or pharmacist before taking any new medicine, including over-the-counter treatments and supplements.",
      "Ask whether a combination tablet could mean taking fewer tablets.",
      "In England, ask your pharmacist about the New Medicines Service if you have just started a medicine.",
    ],
    tryThisWeek: [
      "Read each medicine's leaflet.",
      "Check with a pharmacist before new remedies.",
      "Ask about a combination tablet.",
    ],
    ask: "Which of my tablets is for blood pressure, and what does each one do?",
    interactive: {
      kind: "flip-cards",
      title: "Your tablets, card by card",
      intro: "Turn each card to see what that kind of medicine does.",
      cards: [
        { id: "ace", front: "ACE inhibitors", when: "‘pril’ names, such as ramipril", back: "Help the blood vessels relax and widen. The most common side effect is a dry, persistent cough." },
        { id: "arb", front: "ARBs", when: "‘artan’ names, such as losartan", back: "Work in a similar way to ACE inhibitors. Usually used if ACE inhibitors cause side effects." },
        { id: "ccb", front: "Calcium-channel blockers", when: "‘pine’ names, such as amlodipine", back: "Allow the artery walls to relax, making them wider so more blood can pass through." },
        { id: "diuretic", front: "Thiazide-like diuretics", when: "Indapamide, bendroflumethiazide", back: "Water tablets: they help the kidneys take salt and water out of the blood. Taking them in the morning can help." },
        { id: "beta", front: "Beta-blockers", when: "If other treatments have not worked", back: "Make your heart beat more slowly and with less force, which reduces your blood pressure." },
      ],
    },
    sources: [NHS_HBP, BPUK_MEDS, BPUK_ACE, BPUK_CCB, BPUK_DIURETICS, SA_MEDS],
    quiz: {
      question: "Why do many people take more than one blood pressure medicine?",
      options: [{ text: "They work in different ways", right: true }, { text: "One tablet never works" }, { text: "To replace eating well" }],
      why: "Blood pressure medicines can be more effective in combination, because they work in different ways.",
    },
  },
  {
    id: "hbp-side-effects",
    kicker: "Side effects",
    question: "What should I do about side effects, instead of stopping?",
    hook: "Many people have none. If one lingers, there is usually another dose or medicine to try.",
    short: "Many people have no side effects, or only minor ones, and some improve as the body gets used to the medicine. If a side effect does not go away, do not simply stop the tablets, because your blood pressure will go back up. Talk to your doctor, who can try a lower dose or a different medicine.",
    sections: [
      {
        heading: "Often none at all",
        paragraphs: [
          "All medicines can have side effects, but it is likely you will not have any at all with your blood pressure medicines.",
          "Sometimes side effects only happen when you first start a medicine or a higher dose. As your body gets used to it, they improve or go away.",
        ],
      },
      {
        heading: "Common ones",
        paragraphs: [
          "ACE inhibitors such as ramipril can cause a dry, persistent cough. Cough medicines do not usually help this cough. If you get it, your doctor may prescribe an ARB instead, which does not tend to cause a cough.",
          "Calcium-channel blockers such as amlodipine can cause swollen ankles, headaches and a flushed face. Diuretics can make you need to wee more often.",
        ],
      },
      {
        heading: "Dizzy when you stand",
        paragraphs: [
          "A common side effect is feeling faint or dizzy when you go from sitting or lying down to standing up, especially at night. This is called postural hypotension, and it can happen with any blood pressure medicine.",
          "If you feel dizzy, get up very slowly, or lie down so that you do not faint, then sit until you feel better. Do not drive or use machinery until it passes.",
        ],
      },
      {
        heading: "Do not just stop",
        paragraphs: [
          "If side effects do not go away, it is important not to simply stop taking your medicine, because your blood pressure will go back up.",
          "Talk to your doctor instead. They can try a lower dose, a different medicine or a different combination. If you have tried several options, your GP can refer you to a blood pressure specialist.",
        ],
      },
      {
        heading: "When it is urgent",
        paragraphs: [
          "With ramipril, call 999 or go to A&E if you have swelling in areas such as your lips, tongue and face.",
        ],
      },
    ],
    helps: [
      "Talk to your doctor if a side effect does not go away.",
      "Get up slowly if you feel dizzy when you stand.",
      "Ask whether an ARB could replace an ACE inhibitor if you have a dry cough.",
      "Tell your doctor or nurse about all the medicines you take, including herbal medicines and cold remedies.",
      "Report a new side effect through the Yellow Card scheme.",
    ],
    tryThisWeek: [
      "Tell your doctor about a lasting side effect.",
      "Stand up slowly if you feel dizzy.",
      "List all your medicines for your doctor.",
    ],
    ask: "Is there a different dose or medicine that might suit me better?",
    interactive: {
      kind: "signs",
      title: "Side effects to mention",
      intro: "Tick any you have noticed since starting or changing a blood pressure medicine.",
      signs: ["A dry, persistent cough", "Dizzy or faint when you stand up", "Swollen ankles", "Headaches", "A flushed face", "Needing to wee more often", "Tiredness or weakness", "A rash"],
      after: "Tell your doctor, nurse or pharmacist. Do not simply stop your medicine. With ramipril, call 999 for swelling of the lips, tongue or face.",
    },
    sources: [BPUK_MEDS, BPUK_ACE, BPUK_CCB, BPUK_DIURETICS, NHS_RAMIPRIL_SIDE, NHS_AMLODIPINE],
    quiz: {
      question: "What should you do if a side effect does not go away?",
      options: [{ text: "Talk to your doctor, not just stop", right: true }, { text: "Stop the tablets straight away" }, { text: "Take a double dose" }],
      why: "If side effects do not go away, it is important not to simply stop taking your medicine, because your blood pressure will go back up.",
    },
  },
  {
    id: "hbp-salt",
    kicker: "Food",
    question: "Where does salt hide, and how do I eat less of it?",
    hook: "Most of the salt we eat is already in the food we buy, not in the shaker.",
    short: "Adults should have no more than 6g of salt a day, around one level teaspoon. Around three quarters of the salt we eat is already in foods we buy, such as bread, breakfast cereals and ready meals. Checking labels, cooking with herbs and spices, and giving your taste buds a few weeks to adjust can all help.",
    sections: [
      {
        heading: "Why salt matters",
        paragraphs: [
          "Salt makes your body hold on to water. The extra water in your blood puts extra pressure on your blood vessel walls.",
          "Too much salt may mean blood pressure medicines do not work as well as they should. Cutting down can start to make a difference very quickly, even within weeks.",
        ],
      },
      {
        heading: "How much",
        paragraphs: [
          "Adults should have no more than 6g of salt a day, around one level teaspoon. This includes the salt already in food and the salt added during and after cooking.",
        ],
      },
      {
        heading: "Where it hides",
        paragraphs: [
          "Around three quarters of the salt we eat comes from packaged and everyday foods, such as bread, breakfast cereals, meat products and ready meals.",
          "Sauces, stock cubes, gravy granules, soy sauce, cheese, bacon and pickles can also be high in salt. Some fizzy dissolvable tablets, such as painkillers and vitamins, contain a lot of sodium too. Speak to your GP before changing any medicines.",
        ],
      },
      {
        heading: "Reading labels",
        paragraphs: [
          "Look for green and amber colour-coded labels on the front of packs, and compare similar products. If a label does not give the salt content, check the ingredients: the closer to the top salt appears, the more it is likely to contain.",
        ],
      },
      {
        heading: "Cooking with less",
        paragraphs: [
          "Add flavour with herbs, spices, black pepper, garlic, chilli or lemon juice instead of salt. Taste food before adding any.",
          "Sea salt, rock salt and pink salt have the same effect on blood pressure as ordinary salt. If food tastes bland at first, do not give up: after a few weeks your taste buds will adjust.",
        ],
      },
    ],
    helps: [
      "Take the salt shaker off the table.",
      "Taste food before adding salt.",
      "Check labels and choose green or amber for salt.",
      "Flavour food with herbs, spices, pepper, garlic or lemon juice.",
      "Check with your doctor or nurse before using a low-sodium salt substitute, as it may not suit you.",
      "When eating out, ask if your meal can be made with less salt.",
    ],
    tryThisWeek: [
      "Take the salt off the table.",
      "Check labels for salt.",
      "Cook with herbs and spices.",
    ],
    ask: "Is a salt substitute safe with my medicines?",
    interactive: {
      kind: "scenarios",
      title: "Salt in everyday moments",
      scenarios: [
        {
          id: "bland",
          situation: "Food tastes bland since you cut down on salt.",
          options: [{ text: "Keep going for a few weeks", best: true }, { text: "Add the salt back in" }],
          why: "If food tastes bland at first, do not give up: after a few weeks your taste buds will adjust.",
        },
        {
          id: "bread",
          situation: "Two loaves of bread look the same in the shop.",
          options: [{ text: "Compare the salt on their labels", best: true }, { text: "Pick either: bread has little salt" }],
          why: "Bread is one of the foods where most of our salt hides, and similar products can vary a lot. Compare the labels.",
        },
        {
          id: "sea-salt",
          situation: "A friend says sea salt is the healthy kind.",
          options: [{ text: "It has the same effect as ordinary salt", best: true }, { text: "Sea salt is fine to use freely" }],
          why: "Sea salt, rock salt and pink salt have the same effect on blood pressure as ordinary salt.",
        },
      ],
    },
    sources: [NHS_SALT, BPUK_SALT, NICE_NG136],
    quiz: {
      question: "Where does most of the salt we eat come from?",
      options: [{ text: "Foods we buy, like bread and ready meals", right: true }, { text: "The salt shaker" }, { text: "Fresh fruit" }],
      why: "Around three quarters of the salt we eat comes from packaged and everyday foods, such as bread, breakfast cereals, meat products and ready meals.",
    },
  },
  {
    id: "hbp-moving",
    kicker: "Exercise",
    question: "What kind of exercise helps blood pressure, and how much?",
    hook: "Rhythmic activity like brisk walking, cycling and swimming helps most. Start small and build up.",
    short: "Aerobic activity, such as brisk walking, cycling, swimming and dancing, helps your heart and blood vessels most. Aim for at least 150 minutes of exercise a week, building up gradually. Speak to your doctor or nurse before starting any new activity, especially if your blood pressure is very high.",
    sections: [
      {
        heading: "Why it helps",
        paragraphs: [
          "Being active lowers blood pressure by keeping your heart and blood vessels in good shape.",
          "Activity makes your blood pressure rise for a short time. For most people this is nothing to worry about, and it should quickly return to normal when you stop.",
        ],
      },
      {
        heading: "The best kind",
        paragraphs: [
          "Aerobic exercises are repetitive, rhythmic movements that use your large muscles. Walking, jogging, swimming, dancing and heavy gardening are all aerobic.",
          "Exercise that is very intense for short periods, such as sprinting or weightlifting, raises blood pressure very quickly and is less helpful.",
        ],
      },
      {
        heading: "How much",
        paragraphs: [
          "Aim to do at least 150 minutes of exercise a week. Moderate activity raises your heart rate and makes you breathe faster and feel warmer. You can still talk, but not sing.",
        ],
      },
      {
        heading: "Start small",
        paragraphs: [
          "Split your time into shorter sessions, such as three 10-minute sessions, and build up over a few weeks. Even a little can make a difference.",
          "If you have mobility problems, chair-based exercises can be a good way to be active.",
        ],
      },
      {
        heading: "Check first",
        paragraphs: [
          "It is a good idea to speak to your doctor or nurse before you start any new activity. If your reading is 180/100mmHg or higher, talk to them first. At 200/110mmHg or above, do not start any new activity, and see your doctor or nurse as soon as possible.",
        ],
      },
    ],
    helps: [
      "Speak to your doctor or nurse before starting a new activity.",
      "Choose aerobic activities like brisk walking, cycling or swimming.",
      "Aim for at least 150 minutes of exercise a week.",
      "Start with short sessions and build up over a few weeks.",
      "Find an activity you enjoy, perhaps with a friend.",
      "Try chair-based exercises if getting about is difficult.",
    ],
    tryThisWeek: [
      "Try a brisk walk or a swim.",
      "Start with short sessions.",
      "Ask a friend to join you.",
    ],
    ask: "Is my blood pressure safe for more exercise, and what kind would suit me?",
    interactive: {
      kind: "scenarios",
      title: "Getting moving safely",
      scenarios: [
        {
          id: "short",
          situation: "You cannot manage 30 minutes in one go.",
          options: [{ text: "Try three 10-minute sessions", best: true }, { text: "Skip it altogether" }],
          why: "Split your time into shorter sessions, such as three 10-minute sessions, and build up over a few weeks.",
        },
        {
          id: "choose",
          situation: "You are choosing a new activity.",
          options: [{ text: "Brisk walking or swimming", best: true }, { text: "Sprinting or heavy weightlifting" }],
          why: "Aerobic exercise helps most. Sprinting or weightlifting raises blood pressure very quickly.",
        },
        {
          id: "high",
          situation: "Your last reading was 185/105mmHg.",
          options: [{ text: "Talk to your doctor or nurse first", best: true }, { text: "Start running tomorrow" }],
          why: "If your reading is 180/100mmHg or higher, talk to your doctor or nurse before starting any new activity.",
        },
      ],
    },
    sources: [NHS_HBP, NHS_ACTIVITY, BPUK_EXERCISE],
    quiz: {
      question: "Which kind of exercise helps blood pressure most?",
      options: [{ text: "Aerobic, like brisk walking", right: true }, { text: "Sprinting" }, { text: "Heavy weightlifting" }],
      why: "Aerobic exercises are repetitive, rhythmic movements that use your large muscles. Walking, jogging, swimming, dancing and heavy gardening are all aerobic.",
    },
  },
  {
    id: "hbp-alcohol-weight",
    kicker: "Alcohol and weight",
    question: "How do alcohol and weight affect blood pressure?",
    hook: "Drinking less and losing even a little weight can both bring your numbers down.",
    short: "Drinking too much alcohol raises blood pressure over time, and alcohol is linked to a fifth of cases. Keeping to no more than 14 units a week helps. If you are overweight, losing even 5 or 10% of your body weight can make a big difference.",
    sections: [
      {
        heading: "Alcohol",
        paragraphs: [
          "Drinking too much alcohol will raise your blood pressure over time, and heavy drinking raises it further.",
          "Alcohol also contains a lot of calories, which can make you gain weight. That in turn raises your blood pressure.",
        ],
      },
      {
        heading: "How much",
        paragraphs: [
          "Regularly drinking more than 14 units a week risks damaging your health, for both men and women. Avoid drinking more than six units in six hours.",
          "Even if you drink less than this, you can still benefit from drinking a little less.",
        ],
      },
      {
        heading: "Weight",
        paragraphs: [
          "If you are overweight, losing weight lowers your blood pressure, because your heart does not have to work so hard to pump blood around your body.",
          "Even losing a small amount, 5 or 10% of your body weight, can make a big difference. A waist of 94cm or more in men, or 80cm or more in women, is linked to a higher risk of health problems.",
        ],
      },
      {
        heading: "Small changes",
        paragraphs: [
          "Make small changes to what you eat and how active you are, so you can keep them going for life. It is more about changing your lifestyle for the long term than going on a diet.",
          "Aim to lose weight steadily over three to six months.",
        ],
      },
    ],
    helps: [
      "Keep to no more than 14 units of alcohol a week.",
      "Have alcohol-free days and spread your drinks through the week.",
      "Alternate alcoholic drinks with soft drinks or water.",
      "Make small changes to eating and activity that you can keep up.",
      "Tell family and friends, so they can support you.",
    ],
    tryThisWeek: [
      "Plan some alcohol-free days.",
      "Alternate with soft drinks or water.",
      "Make one small change you can keep.",
    ],
    ask: "Could drinking less or losing weight mean I need fewer medicines?",
    interactive: {
      kind: "flip-cards",
      title: "What 14 units looks like",
      intro: "Turn each card to see how much adds up to 14 units. Stronger drinks get there with fewer.",
      cards: [
        { id: "wine", front: "Wine", when: "175ml glasses at 13%", back: "6 glasses add up to 14 units." },
        { id: "beer", front: "Beer or ale", when: "Pints of normal-strength beer at 4%", back: "6 pints add up to 14 units." },
        { id: "cider", front: "Cider", when: "Pints of cider", back: "5 pints add up to 14 units." },
        { id: "spirits", front: "Spirits", when: "Single 25ml measures at 40%", back: "14 single measures add up to 14 units." },
      ],
    },
    sources: [NHS_HBP, BPUK_CAUSES, BPUK_ALCOHOL, BPUK_WEIGHT, BPUK_MEDS],
    quiz: {
      question: "What is the weekly alcohol guide mentioned here?",
      options: [{ text: "No more than 14 units", right: true }, { text: "28 units" }, { text: "There is no guide" }],
      why: "Regularly drinking more than 14 units a week risks damaging your health, for both men and women.",
    },
  },
  {
    id: "hbp-missed-dose",
    kicker: "Medicines",
    question: "I missed a dose. What should I do?",
    hook: "Never double up. What to do next depends on the medicine, so check its leaflet.",
    short: "Do not take two doses to make up for a missed one, as your blood pressure could drop too low. For some medicines, such as ramipril, you take it when you remember unless the next dose is nearly due; for amlodipine, you skip it. Check the leaflet, or ask your pharmacist.",
    sections: [
      {
        heading: "Never double up",
        paragraphs: [
          "If you miss a dose, do not take two tablets together. Taking too much in one go could make your blood pressure drop too low.",
        ],
      },
      {
        heading: "Advice differs",
        paragraphs: [
          "For ramipril, take the missed dose as soon as you remember, unless it is nearly time for your next dose. In that case, skip the missed dose.",
          "For amlodipine, the NHS says to skip the missed dose and take your next dose as usual. So check the leaflet that comes with each of your medicines.",
        ],
      },
      {
        heading: "If you took too much",
        paragraphs: [
          "Taking more than your prescribed dose can make you feel dizzy and sleepy, and can be dangerous. Contact 111 for advice. If you need to go to A&E, do not drive yourself.",
        ],
      },
      {
        heading: "Remembering",
        paragraphs: [
          "Taking your tablets at the same time every day helps you remember them. A pill box with a compartment for each day lets you see at a glance whether you have taken them.",
          "If you often forget, setting an alarm may help. Your pharmacist can suggest other ways to remember.",
        ],
      },
      {
        heading: "Keep going",
        paragraphs: [
          "Keep taking your medicines even if you feel well. If you stop, your blood pressure will quickly rise again.",
        ],
      },
    ],
    helps: [
      "Never take two doses to make up for a missed one.",
      "Check each medicine's leaflet for what to do about a missed dose.",
      "Take your tablets at the same time every day.",
      "Use a pill box with a compartment for each day.",
      "Set an alarm to remind you.",
      "Ask your pharmacist for other ways to remember.",
    ],
    tryThisWeek: [
      "Use a pill box.",
      "Set a daily alarm.",
      "Read your medicine's leaflet.",
    ],
    ask: "What should I do if I miss a dose of each of my tablets?",
    interactive: {
      kind: "scenarios",
      title: "Missed a tablet?",
      scenarios: [
        {
          id: "double",
          situation: "You realise you missed a tablet.",
          options: [{ text: "Do not double up; check the leaflet", best: true }, { text: "Take two now to catch up" }],
          why: "If you miss a dose, do not take two tablets together. Taking too much in one go could make your blood pressure drop too low.",
        },
        {
          id: "amlodipine",
          situation: "You missed this morning's amlodipine.",
          options: [{ text: "Skip it and take the next dose as usual", best: true }, { text: "Take a double dose tomorrow" }],
          why: "For amlodipine, the NHS says to skip the missed dose and take your next dose as usual.",
        },
        {
          id: "extra",
          situation: "You took an extra dose by mistake.",
          options: [{ text: "Contact 111 for advice", best: true }, { text: "Wait and see" }],
          why: "Taking more than your prescribed dose can be dangerous. Contact 111 for advice.",
        },
        {
          id: "forget",
          situation: "You often forget your tablets.",
          options: [{ text: "Use a pill box and set an alarm", best: true }, { text: "Stop taking them" }],
          why: "A pill box lets you see at a glance whether you have taken them. If you often forget, setting an alarm may help.",
        },
      ],
    },
    sources: [BPUK_MEDS, NHS_RAMIPRIL_HOW, NHS_AMLODIPINE],
    quiz: {
      question: "What should you never do after missing a dose?",
      options: [{ text: "Take two doses together", right: true }, { text: "Check the leaflet" }, { text: "Ask your pharmacist" }],
      why: "If you miss a dose, do not take two tablets together. Taking too much in one go could make your blood pressure drop too low.",
    },
  },
  {
    id: "hbp-white-coat",
    kicker: "Clinic readings",
    question: "What are white-coat readings, and which ones count?",
    hook: "Being in a clinic can push your numbers up. Home and 24-hour readings help show the everyday picture.",
    short: "The stress of being in a clinic can push your blood pressure up for a short time. This is called the white coat effect, and it is fairly common. Home readings or a 24-hour monitor can show what your blood pressure is like in daily life, and doctors use them alongside clinic readings.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "White coat syndrome is when your blood pressure is raised by the stress of being in clinic, so your reading is higher than it would be at home.",
          "Most people are more tense than usual in medical settings and might not even realise it. So your blood pressure can be raised even if you do not feel stressed.",
        ],
      },
      {
        heading: "How big a difference",
        paragraphs: [
          "On average, the top number tends to be about 10mmHg higher in clinic than at home, and the bottom number about 5mmHg higher. If you feel very worried or stressed, it could be raised by as much as 30mmHg.",
        ],
      },
      {
        heading: "White coat hypertension",
        paragraphs: [
          "White coat hypertension is where your readings are over 140/90mmHg in clinic, but lower than that at home.",
          "Your blood pressure could still creep up into high blood pressure, so your GP will suggest how often to check it.",
        ],
      },
      {
        heading: "The readings that count",
        paragraphs: [
          "To confirm high blood pressure, NICE recommends a 24-hour monitor or home readings, as well as clinic readings. Home and 24-hour readings are compared with figures 5 mmHg lower than clinic ones.",
          "So you are usually considered to have high blood pressure at 140/90 or higher in clinic, or 135/85 or higher at home.",
        ],
      },
      {
        heading: "A calmer reading",
        paragraphs: [
          "If you have had to rush, your heart will be working hard and your blood pressure will go up. Arrive a few minutes early if you can, and sit quietly to relax before your check.",
        ],
      },
    ],
    helps: [
      "Arrive five or ten minutes early to relax before a check.",
      "Ask whether home readings or a 24-hour monitor would help.",
      "Record your home numbers for four to seven days before a clinic visit.",
      "Keep eating healthily and being active, even if your home readings are lower.",
    ],
    tryThisWeek: [
      "Arrive early and sit quietly.",
      "Ask about home readings.",
      "Record readings before your visit.",
    ],
    ask: "Could my clinic readings be higher than my everyday blood pressure?",
    interactive: {
      kind: "scenarios",
      title: "Clinic or home?",
      scenarios: [
        {
          id: "rush",
          situation: "You rushed to get to your appointment.",
          options: [{ text: "Sit quietly for a few minutes first", best: true }, { text: "Go straight in for the check" }],
          why: "If you have had to rush, your heart will be working hard and your blood pressure will go up.",
        },
        {
          id: "conflict",
          situation: "Clinic readings are high, home ones are not.",
          options: [{ text: "Ask about home or 24-hour readings", best: true }, { text: "Ignore the clinic readings" }],
          why: "To confirm high blood pressure, NICE recommends a 24-hour monitor or home readings, as well as clinic readings.",
        },
        {
          id: "review",
          situation: "Your review is next week.",
          options: [{ text: "Record readings for four to seven days", best: true }, { text: "Measure once, on the morning" }],
          why: "Record your home numbers for four to seven days before a clinic visit.",
        },
      ],
    },
    sources: [BPUK_CHECK, BPUK_HOME, BPUK_MEASURE, NICE_NG136, NHS_HBP],
    quiz: {
      question: "On average, how much higher is the top number in clinic than at home?",
      options: [{ text: "About 10mmHg", right: true }, { text: "About 50mmHg" }, { text: "It is always lower in clinic" }],
      why: "On average, the top number tends to be about 10mmHg higher in clinic than at home, and the bottom number about 5mmHg higher.",
    },
  },
  {
    id: "hbp-stress-sleep",
    kicker: "Stress and sleep",
    question: "How do stress and sleep affect my numbers?",
    hook: "Stress pushes blood pressure up for a short while. Poor sleep, over time, may do more.",
    short: "Stressful situations make blood pressure rise for a short time, then it returns to its usual level. Being under stress often can lead to habits that eventually raise it. Regular short or broken sleep, and sleep apnoea, are linked with high blood pressure.",
    sections: [
      {
        heading: "Stress in the moment",
        paragraphs: [
          "In a stressful situation, your body releases the hormones adrenaline and cortisol. They make your heart beat faster and your blood vessels narrower, raising your blood pressure.",
          "This only lasts a short time. Once the stressful situation is over, your blood pressure returns to its usual level.",
        ],
      },
      {
        heading: "Stress over time",
        paragraphs: [
          "If you are under stress often, you might eat unhealthy food, drink too much alcohol or lose out on sleep. These things can eventually lead to high blood pressure.",
        ],
      },
      {
        heading: "Sleep",
        paragraphs: [
          "When you are asleep, your blood pressure is generally lower than when you are awake. This is normal and is called nocturnal dipping.",
          "A regular lack of sleep can have a bigger effect. Sleeping less than five hours a night, insomnia and interrupted sleep all appear to raise blood pressure.",
        ],
      },
      {
        heading: "Sleep apnoea",
        paragraphs: [
          "Obstructive sleep apnoea makes the walls of the throat relax during sleep, so you cannot breathe for a short time. People with it are more likely to develop high blood pressure.",
          "Signs include snoring, gasping for breath and pauses in breathing, often noticed by a partner. See your GP if you think you might have it, as it can be treated.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "Finding ways to relax, talking to people and exercising regularly can all help with stress. Yoga, mindfulness and meditation can lower stress levels.",
          "Working out a regular sleep routine, and winding down before bed, can help you get enough sleep.",
        ],
      },
    ],
    helps: [
      "Find ways to relax.",
      "Talk to people.",
      "Exercise regularly.",
      "Try yoga, mindfulness or meditation.",
      "Keep a regular sleep routine, and wind down before bed.",
      "See your GP if you think you might have sleep apnoea.",
    ],
    tryThisWeek: [
      "Try a mindfulness exercise.",
      "Go to bed at a regular time.",
      "Ask your GP about sleep apnoea.",
    ],
    ask: "Could stress or poor sleep be affecting my blood pressure?",
    interactive: {
      kind: "timeline",
      title: "A day and night of blood pressure",
      steps: [
        { id: "stress", when: "A stressful moment", title: "A short rise", points: ["Adrenaline and cortisol make your heart beat faster.", "Blood vessels narrow, and blood pressure rises."] },
        { id: "after", when: "Once it is over", title: "Back to usual", points: ["Blood pressure returns to its usual level."] },
        { id: "evening", when: "Before bed", title: "Wind down", points: ["A warm bath, or writing down what is on your mind, can help.", "Keep a regular sleep routine."] },
        { id: "night", when: "Asleep", title: "The night-time dip", points: ["Blood pressure is generally lower while you sleep.", "This is normal and is called nocturnal dipping."] },
      ],
    },
    sources: [BPUK_STRESS, BPUK_SLEEP, SA_HBP],
    quiz: {
      question: "What normally happens to blood pressure during sleep?",
      options: [{ text: "It is generally lower", right: true }, { text: "It doubles" }, { text: "It stops being measurable" }],
      why: "When you are asleep, your blood pressure is generally lower than when you are awake. This is normal and is called nocturnal dipping.",
    },
  },
];
