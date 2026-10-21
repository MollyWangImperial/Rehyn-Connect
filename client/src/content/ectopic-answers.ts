import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Ectopic beats page's pieces (content/library-conditions/heart-more.ts).
// Every sentence was written from wording checked on 21 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Much of it comes from the NHS heart
// palpitations page, the British Heart Foundation's ectopic beats and palpitations articles, and the AF
// Association's "Ectopic heartbeats" factsheet (Arrhythmia Alliance family, reviewed March 2025), and is
// credited to them. General information only; it never replaces what a person's own team tells them.

const bhf = (label: string, path: string): LearnSource => ({ label: `British Heart Foundation: ${label}`, url: `https://www.bhf.org.uk/informationsupport/${path}` });
const NHS_PALPITATIONS: LearnSource = { label: "NHS: Heart palpitations", url: "https://www.nhs.uk/symptoms/heart-palpitations/" };
const NHS_ARRHYTHMIA: LearnSource = { label: "NHS: Heart rhythm problems (arrhythmia)", url: "https://www.nhs.uk/conditions/arrhythmia/" };
const NHS_ECG: LearnSource = { label: "NHS: Electrocardiogram (ECG)", url: "https://www.nhs.uk/tests-and-treatments/electrocardiogram/" };
const NHS_ECHO: LearnSource = { label: "NHS: Echocardiogram", url: "https://www.nhs.uk/tests-and-treatments/echocardiogram/" };
const NHS_BETA_BLOCKERS: LearnSource = { label: "NHS: Beta blockers", url: "https://www.nhs.uk/medicines/beta-blockers/" };
const NHS_CHEST_PAIN: LearnSource = { label: "NHS: Chest pain", url: "https://www.nhs.uk/symptoms/chest-pain/" };
const NHS_GAD: LearnSource = { label: "NHS: Generalised anxiety disorder (GAD)", url: "https://www.nhs.uk/mental-health/conditions/generalised-anxiety-disorder-gad/" };
const NHS_TALKING: LearnSource = { label: "NHS: Talking therapies", url: "https://www.nhs.uk/tests-and-treatments/talking-therapies/" };
const NHS_BREATHING: LearnSource = { label: "NHS: Breathing exercises for stress", url: "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/" };
const NHS_ACTIVITY: LearnSource = { label: "NHS: Physical activity guidelines for adults aged 19 to 64", url: "https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/" };
const NHS_INSOMNIA: LearnSource = { label: "NHS: Insomnia", url: "https://www.nhs.uk/conditions/insomnia/" };
const NHS_UNITS: LearnSource = { label: "NHS: Alcohol units", url: "https://www.nhs.uk/live-well/alcohol-advice/calculating-alcohol-units/" };
const BHF_ECTOPIC = bhf("What are ectopic beats? Can they damage your heart?", "heart-matters-magazine/medical/ask-the-experts/ectopic-beats");
const BHF_PALPITATIONS = bhf("Heart palpitations", "conditions/palpitations");
const BHF_WHEN_TO_WORRY = bhf("When to worry about heart palpitations", "heart-matters-magazine/medical/ask-the-experts/when-to-worry-about-heart-palpitations");
const BHF_NIGHT = bhf("Why do I get heart palpitations at night?", "heart-matters-magazine/medical/ask-the-experts/heart-palpitations-at-night");
const BHF_ECG = bhf("ECG", "tests/ecg");
const BHF_ECHO = bhf("Echocardiogram", "tests/echocardiogram");
const BHF_ANXIETY = bhf("How to deal with anxiety when you have a heart problem", "heart-matters-magazine/wellbeing/how-to-deal-with-anxiety-when-you-have-a-heart-problem");
const BHF_BREATHING = bhf("3 breathing exercises to relieve stress", "heart-matters-magazine/wellbeing/breathing-exercises");
const AFA_ECTOPIC: LearnSource = {
  label: "AF Association (Arrhythmia Alliance): Ectopic heartbeats, patient information (reviewed March 2025)",
  url: "https://api.heartrhythmalliance.org/files/download/4ae517dd5776c80efe8ca9c707ce01ed",
};
const LEEDS_VE: LearnSource = { label: "Leeds Teaching Hospitals NHS Trust: Ventricular ectopics (patient leaflet)", url: "https://flipbooks.leedsth.nhs.uk/LN005721.pdf" };

export const ectopicAnswers: LearnArticle[] = [
  {
    id: "eb-what-it-is",
    kicker: "Understanding",
    question: "What are ectopic beats?",
    hook: "An early or extra heartbeat. Sometimes it is followed by a short pause, then a thud as the heart catches up.",
    short: "Ectopic beats are early (premature), or extra heartbeats, which can feel like your heart is skipping or missing a beat. They are common, with most people having them at some point in their lives. They are usually harmless and do not damage the heart.",
    sections: [
      {
        heading: "An early or extra beat",
        paragraphs: [
          "Ectopic beats are early (premature), or extra heartbeats. They can cause palpitations that feel like your heart is skipping or missing a beat.",
          "They're common, with most people experiencing ectopic beats at some point in their lives, especially at times of hormonal changes, such as menopause.",
        ],
      },
      {
        heading: "Where they start",
        paragraphs: [
          "An ectopic beat is an additional beat of the heart. It can come from either the upper chamber of the heart (the atrium) or the lower chamber (the ventricle).",
          "They are therefore described as premature atrial contractions (PACs) or premature ventricular contractions (PVCs). The beat occurs just before the normal heartbeat.",
        ],
      },
      {
        heading: "The pause and the thud",
        paragraphs: [
          "Ectopics can be felt as an extra beat in the rhythm of the heart, or as a thud following a short pause in the rhythm.",
          "In the second case, the additional beat has happened in the pause, and the following thud is the heart catching up.",
        ],
      },
      {
        heading: "Different patterns",
        paragraphs: [
          "Ectopic beats can last for seconds, minutes, or longer. They also come in different patterns. You may have one ectopic beat before every normal heartbeat, or several ectopic beats in a row.",
          "Doctors may call them a heart arrhythmia. Many people who have them have no symptoms, or have them while they're asleep.",
        ],
      },
      {
        heading: "Usually harmless",
        paragraphs: [
          "Ectopic beats are usually harmless and do not damage the heart.",
        ],
      },
    ],
    helps: [
      "If you are unsure or have frequent or lengthy spells of palpitations, speak to your doctor.",
      "See a GP if your palpitations keep coming back or are happening more often.",
      "Check the leaflets of any medicines you take, as some medicines cause ectopic beats.",
      "Always see your GP before stopping any medicines.",
    ],
    tryThisWeek: [
      "Speak to your doctor if you're unsure.",
      "See a GP if they keep coming back.",
      "Check your medicine leaflets.",
    ],
    ask: "Are my extra beats coming from the top or the bottom chambers of my heart?",
    interactive: {
      kind: "timeline",
      title: "An early beat, step by step",
      steps: [
        { id: "normal", when: "Before", title: "The normal rhythm", points: ["The heart beats in its normal rhythm."] },
        { id: "early", when: "Just before the next beat", title: "The early beat", points: ["An additional beat comes from the upper or lower chamber.", "It occurs just before the normal heartbeat."] },
        { id: "pause", when: "Then", title: "A short pause", points: ["It can feel like your heart is skipping or missing a beat."] },
        { id: "thud", when: "After the pause", title: "The thud", points: ["The following thud is the heart catching up."] },
      ],
    },
    sources: [BHF_ECTOPIC, AFA_ECTOPIC, NHS_PALPITATIONS],
    quiz: {
      question: "What is the thud that can follow a short pause?",
      options: [{ text: "The heart catching up", right: true }, { text: "A sign the heart is damaged" }, { text: "A blocked artery" }],
      why: "The additional beat has happened in the pause, and the following thud is the heart catching up.",
    },
  },
  {
    id: "eb-feelings",
    kicker: "Symptoms",
    question: "What do ectopic beats feel like?",
    hook: "A skipped beat, an extra beat, a thump or a flutter. Sometimes nothing at all.",
    short: "With ectopic beats, your heartbeat may feel irregular, with skipped or extra beats, or you may feel a pounding, thumping or fluttering. You may feel it in your chest, neck or throat. Many people who have them have no symptoms.",
    sections: [
      {
        heading: "Skipped, extra or thumping",
        paragraphs: [
          "When you have heart palpitations, your heartbeat feels uncomfortable or unusual. Your heartbeat may feel irregular, with skipped or extra beats (ectopic beats).",
          "If you do have symptoms from ectopic beats, you may feel like your heartbeat is racing, or is irregular with skipped or extra beats. Or you may feel a pounding, thumping or fluttering.",
        ],
      },
      {
        heading: "Where you feel it",
        paragraphs: [
          "You may feel it in your chest, neck or throat.",
          "Palpitations can happen at any time, even if you are resting or doing normal activities.",
        ],
      },
      {
        heading: "An extra beat, or a pause then a thud",
        paragraphs: [
          "Ectopics can either be felt as an extra beat in the rhythm of the heart, or as a thud following a short pause.",
        ],
      },
      {
        heading: "How long it lasts",
        paragraphs: [
          "Heart palpitations can last seconds, minutes or longer.",
          "Many people who have ectopic beats have no symptoms, or have them while they're asleep.",
        ],
      },
    ],
    helps: [
      "See a GP if your palpitations keep coming back or are happening more often.",
      "See a GP if they last longer than a few minutes.",
      "Make an appointment to see your GP if you're concerned about the palpitations.",
      "Call 999 or go to A&E if palpitations do not go away, or come with chest pain, shortness of breath, or feeling faint or fainting.",
    ],
    tryThisWeek: [
      "See a GP if they keep coming back.",
      "See a GP if they last over a few minutes.",
      "Know when to call 999.",
    ],
    ask: "Do the beats I feel sound like ectopic beats?",
    interactive: {
      kind: "signs",
      title: "What have you noticed?",
      intro: "Tick anything you have felt. The ones you tick make a list to take to your GP.",
      signs: [
        "Skipped or missed beats",
        "Extra beats",
        "Pounding or thumping",
        "Fluttering",
        "Racing or beating very fast",
        "A thud after a short pause",
        "Felt in my chest, neck or throat",
        "Lasting longer than a few minutes",
      ],
      after: "See a GP if they keep coming back, happen more often or last longer than a few minutes. Call 999 or go to A&E if they do not go away, or come with chest pain, shortness of breath, or feeling faint or fainting.",
      copyHeading: "What my palpitations feel like",
    },
    sources: [NHS_PALPITATIONS, BHF_ECTOPIC, BHF_PALPITATIONS, AFA_ECTOPIC],
    quiz: {
      question: "Where might you feel palpitations?",
      options: [{ text: "In your chest, neck or throat", right: true }, { text: "Only in your arms" }, { text: "Only in your stomach" }],
      why: "You may feel it in your chest, neck or throat.",
    },
  },
  {
    id: "eb-causes",
    kicker: "Causes",
    question: "What makes ectopic beats more likely?",
    hook: "Strenuous exercise, lack of sleep, stress, alcohol, smoking and caffeine are common causes. Some medicines can play a part too.",
    short: "Common causes include strenuous exercise, lack of sleep, stress, anxiety, alcohol, smoking and caffeine. Some medicines cause ectopic beats too, so check your medicine leaflets, but always see your GP before stopping any medicines. Hormonal changes, such as menopause, can play a part.",
    sections: [
      {
        heading: "Common causes",
        paragraphs: [
          "Common causes include strenuous exercise, lack of sleep, stress, anxiety, alcohol, smoking and caffeine. If any of these are triggers for you, try to avoid them.",
          "The NHS also lists nicotine and recreational drugs among the common causes of heart palpitations.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "Some medicines cause ectopic beats too, so check your medicine leaflets. But always see your GP before stopping any medicines.",
          "Off-the-shelf cold and flu medicines sometimes contain decongestants and other drugs that can stimulate the heart. These are probably best avoided.",
        ],
      },
      {
        heading: "Hormones",
        paragraphs: [
          "Most people have ectopic beats at some point, especially at times of hormonal changes, such as menopause.",
          "Changes in hormone levels, which happen in pregnancy and menopause, can trigger palpitations.",
        ],
      },
      {
        heading: "Other conditions",
        paragraphs: [
          "Palpitations can also be caused by a condition such as iron deficiency anaemia, an overactive thyroid, a heart rhythm problem, or other heart problems such as heart valve disease.",
        ],
      },
    ],
    helps: [
      "If strenuous exercise, lack of sleep, stress, alcohol, smoking or caffeine are triggers for you, try to avoid them.",
      "Check your medicine leaflets.",
      "Always see your GP before stopping any medicines.",
      "Always mention any new palpitations to your doctor or pharmacist.",
      "Keep a symptom diary so you can recognise and avoid triggers.",
    ],
    tryThisWeek: [
      "Avoid the triggers that apply to you.",
      "Check your medicine leaflets.",
      "Start a symptom diary.",
    ],
    ask: "Could caffeine, alcohol or one of my medicines be causing my ectopic beats?",
    interactive: {
      kind: "risk-check",
      title: "What could be playing a part?",
      intro: "Tick any that apply to you. Some can be changed; some cannot.",
      items: [
        { id: "caffeine", label: "Caffeine", note: "Caffeine is known to cause palpitations, so cutting down on tea, coffee and chocolate may be worthwhile.", changeable: true },
        { id: "alcohol", label: "Alcohol", note: "Drink less or have no alcohol, and no more than the recommended limit of 14 units a week.", changeable: true },
        { id: "smoking", label: "Smoking or vaping", note: "Not smoking or using tobacco products can help manage palpitations.", changeable: true },
        { id: "stress", label: "Stress or anxiety", note: "To relieve anxiety and stress, try breathing exercises, yoga and mindfulness.", changeable: true },
        { id: "sleep", label: "Lack of sleep", note: "Lack of sleep is one of the common causes of ectopic beats.", changeable: true },
        { id: "exercise", label: "Strenuous exercise", note: "A common cause. If palpitations are putting you off being active, get them checked out.", changeable: true },
        { id: "medicine", label: "A medicine", note: "Check the leaflet, and always see your GP before stopping any medicines.", changeable: true },
        { id: "cold", label: "Cold and flu remedies", note: "Some contain decongestants that can stimulate the heart, and are probably best avoided.", changeable: true },
        { id: "hormones", label: "Pregnancy or menopause", note: "Changes in hormone levels can trigger palpitations.", changeable: false },
      ],
    },
    sources: [BHF_ECTOPIC, NHS_PALPITATIONS, BHF_PALPITATIONS, AFA_ECTOPIC, BHF_WHEN_TO_WORRY],
    quiz: {
      question: "What should you do before stopping a medicine you think is causing ectopic beats?",
      options: [{ text: "See your GP first", right: true }, { text: "Stop it straight away" }, { text: "Take a double dose" }],
      why: "Some medicines cause ectopic beats too, so check your medicine leaflets. But always see your GP before stopping any medicines.",
    },
  },
  {
    id: "eb-harmless",
    kicker: "Getting checked",
    question: "Are ectopic beats harmless, and when should I get them checked?",
    hook: "Nearly always harmless. But some patterns, and some symptoms, are worth a check.",
    short: "Ectopic beats are common, and in most people with no other known heart condition they are harmless. See a GP if your palpitations keep coming back, last longer than a few minutes, or you have a heart condition or a family history of heart problems. Call 999 or go to A&E if they do not go away, or come with chest pain, shortness of breath, or feeling faint or fainting.",
    sections: [
      {
        heading: "Usually harmless",
        paragraphs: [
          "Ectopic beats are usually harmless and do not damage the heart.",
          "Ectopic beats are common, and in most people with no other known heart condition they are harmless. Although the symptoms can be unpleasant or cause anxiety, the extra beats will not usually cause any damage.",
        ],
      },
      {
        heading: "When they may matter more",
        paragraphs: [
          "In people with structural heart disease, ectopic beats may be of greater significance, and further cardiological assessment may be advised.",
          "Frequent atrial ectopics, together with a significant AF-related stroke risk score, may be an indication of underlying atrial fibrillation. Some schools of thought consider that ectopic episodes or palpitations lasting more than 30 seconds actually are atrial fibrillation.",
        ],
      },
      {
        heading: "See a GP if",
        paragraphs: [
          "See a GP if you've had heart palpitations and feel well, but they keep coming back or are happening more often, they last longer than a few minutes, you have a heart condition, or you have a history of heart problems in your family.",
          "If you are unsure or have frequent or lengthy spells of palpitations, speak to your doctor to discuss whether you need to have your heart monitored.",
        ],
      },
      {
        heading: "When it is an emergency",
        paragraphs: [
          "Call 999 or go to A&E if you currently have heart palpitations and they do not go away, or you also have chest pain, shortness of breath, or feeling faint or fainting.",
          "If you've had these symptoms but they've now stopped, ask your GP surgery for an urgent appointment, call 111 or get help from 111 online.",
        ],
      },
    ],
    helps: [
      "See a GP if your palpitations keep coming back, are happening more often or last longer than a few minutes.",
      "See a GP if you have a heart condition or a history of heart problems in your family.",
      "Speak to your doctor if you have frequent or lengthy spells of palpitations.",
      "It is always best to see your doctor for evaluation and investigation.",
      "Call 999 or go to A&E if palpitations do not go away, or come with chest pain, shortness of breath, or feeling faint or fainting.",
    ],
    tryThisWeek: [
      "See a GP if they keep coming back.",
      "Mention any family heart problems.",
      "Know when to call 999.",
    ],
    ask: "Are my ectopic beats harmless, or do I need more tests?",
    interactive: {
      kind: "scenarios",
      title: "What would you do?",
      scenarios: [
        {
          id: "more-often",
          situation: "You feel well, but your skipped beats are happening more often than before.",
          options: [{ text: "See a GP", best: true }, { text: "Ignore them" }, { text: "Go straight to A&E" }],
          why: "See a GP if you've had heart palpitations and feel well, but they keep coming back or are happening more often.",
        },
        {
          id: "chest-pain",
          situation: "Your heart is thumping and you also have chest pain.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait to see if it passes" }, { text: "Book a GP appointment for next week" }],
          why: "Call 999 or go to A&E if you currently have heart palpitations and you also have chest pain, shortness of breath, or feeling faint or fainting.",
        },
        {
          id: "stopped",
          situation: "Earlier you felt faint with palpitations, but it has now stopped.",
          options: [{ text: "Ask your GP surgery for an urgent appointment, or call 111", best: true }, { text: "Do nothing" }],
          why: "If you've had these symptoms but they've now stopped, ask your GP surgery for an urgent appointment, call 111 or get help from 111 online.",
        },
      ],
    },
    sources: [AFA_ECTOPIC, BHF_ECTOPIC, NHS_PALPITATIONS],
    quiz: {
      question: "Do ectopic beats usually damage the heart?",
      options: [{ text: "No, they are usually harmless", right: true }, { text: "Yes, always" }, { text: "Only at night" }],
      why: "Ectopic beats are usually harmless and do not damage the heart.",
    },
  },
  {
    id: "eb-tests",
    kicker: "Tests",
    question: "What happens with the ECG, heart monitors and the echo?",
    hook: "An ECG records the heart's rhythm. If the beats do not show up, a monitor can record for longer, and an echo looks at the heart itself.",
    short: "Normally a clinician will diagnose an ectopic beat from what you tell them, and an electrocardiogram (ECG) will confirm it. If the beats are less frequent, a portable monitor worn for 24 hours or longer is more likely to catch them. An echocardiogram, a scan of the heart, can check for any underlying heart issues.",
    sections: [
      {
        heading: "It starts with what you describe",
        paragraphs: [
          "Normally a clinician will diagnose an ectopic beat from what you have told them. A heart tracing, the electrocardiogram (ECG), will confirm this diagnosis. Any ectopic beats will appear as a different pattern on the trace.",
        ],
      },
      {
        heading: "The ECG",
        paragraphs: [
          "An ECG is a test that records the electrical activity of your heart, including the rate and rhythm. It's usually quick and painless.",
          "Ten small sticky patches called electrodes are put on your arms, legs and chest. The whole test takes a few minutes, and you will need to lie still as moving can affect the results.",
        ],
      },
      {
        heading: "A longer recording",
        paragraphs: [
          "If you do not have palpitations during an ECG, they might not show up on the test. Your doctor may suggest you wear a Holter monitor, a continuous ECG, to look at your heart rhythm over a longer period.",
          "A small portable ECG recorder is worn on a belt around your waist. You'll usually wear it for 24 to 48 hours, but it can be up to 7 days. You cannot have a bath or shower while wearing it.",
          "If your symptoms do not happen often, your doctor might suggest an implantable loop recorder. It is put under the skin on your chest under local anaesthetic, and can monitor your heartbeat for up to three years.",
        ],
      },
      {
        heading: "The echo",
        paragraphs: [
          "An echocardiogram is a scan of your heart. It uses soundwaves (ultrasound) to create an image of your heart, similar to an ultrasound scan used during pregnancy.",
          "Your doctor may suggest one to see if there are any underlying heart issues. The scan takes around 30 to 40 minutes.",
        ],
      },
      {
        heading: "Getting results",
        paragraphs: [
          "You may get your ECG results on the same day, but it can take a few weeks. If you've not heard anything after a few weeks, contact the doctor who referred you.",
          "For many people, no underlying cause for their palpitations is ever found, and they learn to live with them.",
        ],
      },
    ],
    helps: [
      "Wear a top that's easy to take on and off, and do not put body lotions, oils or talcum powder on your skin before an ECG.",
      "Do everything you would normally do while wearing a 24-hour ECG recorder, except have a bath or shower.",
      "Let the team know if you have sensitive skin, as some electrodes can be very sticky.",
      "Contact the doctor who referred you if you've not heard about your results after a few weeks.",
      "Ask to talk to a healthcare professional if you have questions about your results.",
    ],
    tryThisWeek: [
      "Wear an easy top, and skip the lotion.",
      "Carry on as normal with a monitor on.",
      "Chase results after a few weeks.",
    ],
    ask: "Do I need a longer heart recording, or an echo?",
    interactive: {
      kind: "flip-cards",
      title: "The tests, turned over",
      intro: "Tap a card to see what each test does.",
      cards: [
        { id: "ecg", front: "Electrocardiogram (ECG)", when: "Usually one of the first tests", back: "Records the rate, rhythm and electrical activity of your heart. It takes a few minutes and is painless." },
        { id: "holter", front: "24-hour ECG (Holter monitor)", when: "If beats do not show on a normal ECG", back: "A small recorder on a belt records your heart, usually for 24 to 48 hours, sometimes up to 7 days." },
        { id: "loop", front: "Implantable loop recorder", when: "If symptoms do not happen often", back: "Put under the skin on your chest. It can monitor your heartbeat for up to three years." },
        { id: "echo", front: "Echocardiogram (echo)", when: "To look for underlying heart issues", back: "A scan that uses soundwaves to build a picture of your heart. It takes around 30 to 40 minutes." },
      ],
    },
    sources: [NHS_ECG, BHF_ECG, NHS_ECHO, BHF_ECTOPIC, AFA_ECTOPIC, BHF_WHEN_TO_WORRY, BHF_ECHO],
    quiz: {
      question: "Why might you wear a heart monitor for a day or more?",
      options: [{ text: "The beats may not show up on a short ECG", right: true }, { text: "A normal ECG is painful" }, { text: "The monitor treats the beats" }],
      why: "If you do not have palpitations during an ECG, they might not show up on the test.",
    },
  },
  {
    id: "eb-triggers",
    kicker: "Triggers",
    question: "How can I cut down on the things that trigger them?",
    hook: "Less caffeine and alcohol, no smoking, better sleep and a symptom diary. Small changes that often help.",
    short: "If you don't need treatment, the easiest way to manage symptoms at home is to avoid the triggers that bring on your palpitations. That might mean fewer caffeinated drinks, less or no alcohol, not smoking, managing stress and keeping a symptom diary. Avoiding triggers can help if palpitations are not caused by a health condition.",
    sections: [
      {
        heading: "Start with your triggers",
        paragraphs: [
          "If you don't need treatment, the easiest way to manage your symptoms at home is to avoid the triggers that bring on your palpitations.",
          "Avoiding things that can trigger palpitations, such as stress, smoking, caffeine and alcohol, can help if palpitations are not caused by a health condition.",
        ],
      },
      {
        heading: "Caffeine and alcohol",
        paragraphs: [
          "Avoid or drink fewer caffeinated drinks. Caffeine is known to cause palpitations, so cutting down on tea, coffee and chocolate may be worthwhile.",
          "Drink less or have no alcohol, and no more than the recommended limit of 14 units a week.",
        ],
      },
      {
        heading: "Sleep, food and fluids",
        paragraphs: [
          "Lack of sleep is a common cause of ectopic beats. To help you sleep, do not smoke or drink alcohol, tea or coffee at least 6 hours before going to bed.",
          "Some people notice palpitations after a large meal high in refined carbohydrates or sugar. Eating smaller meals and avoiding spicy foods can help.",
          "Dehydration can trigger palpitations, and staying well hydrated can help to ease them. The Eatwell Guide recommends 6 to 8 glasses of fluid every day.",
        ],
      },
      {
        heading: "Smoking, stress and stimulants",
        paragraphs: [
          "Do not smoke or use tobacco products, and try to manage your stress levels.",
          "Cut down on anything that may be acting as a stimulant. Off-the-shelf cold and flu medicines sometimes contain decongestants that can stimulate the heart, and these are probably best avoided.",
        ],
      },
      {
        heading: "Keep a diary",
        paragraphs: [
          "Try keeping a symptom diary so you can recognise and avoid triggers. Write down when you get palpitations, what you were doing at the time, and any other symptoms you noticed.",
        ],
      },
    ],
    helps: [
      "Avoid or drink fewer caffeinated drinks.",
      "Drink less or no alcohol, and no more than 14 units a week.",
      "Do not smoke or use tobacco products.",
      "Manage your stress levels.",
      "Keep a symptom diary so you can recognise and avoid triggers.",
      "Drink 6 to 8 glasses of fluid every day.",
    ],
    tryThisWeek: [
      "Drink fewer caffeinated drinks.",
      "Keep alcohol under 14 units a week.",
      "Start a symptom diary.",
    ],
    ask: "Which of my triggers is worth tackling first?",
    interactive: {
      kind: "scenarios",
      title: "Everyday swaps",
      scenarios: [
        {
          id: "coffee",
          situation: "You notice skipped beats after your third coffee of the morning.",
          options: [{ text: "Try cutting down on caffeine", best: true }, { text: "Have another to wake up" }],
          why: "Caffeine is known to cause palpitations, so cutting down on tea, coffee and chocolate may be worthwhile.",
        },
        {
          id: "cold",
          situation: "You have a cold and reach for an off-the-shelf cold and flu remedy.",
          options: [{ text: "Avoid ones with decongestants", best: true }, { text: "Take whichever is nearest" }],
          why: "Off-the-shelf cold and flu medicines sometimes contain decongestants that can stimulate the heart, and these are probably best avoided.",
        },
        {
          id: "meal",
          situation: "Your palpitations seem to follow big, spicy meals.",
          options: [{ text: "Try smaller meals and less spicy food", best: true }, { text: "Eat bigger meals, less often" }],
          why: "Eating smaller meals and avoiding spicy foods can help.",
        },
      ],
    },
    sources: [BHF_PALPITATIONS, BHF_WHEN_TO_WORRY, BHF_ECTOPIC, AFA_ECTOPIC, NHS_PALPITATIONS, NHS_INSOMNIA, NHS_UNITS, BHF_NIGHT],
    quiz: {
      question: "What weekly alcohol limit does the British Heart Foundation mention?",
      options: [{ text: "No more than 14 units a week", right: true }, { text: "No more than 30 units a week" }, { text: "There is no limit" }],
      why: "Drink less or have no alcohol, and no more than the recommended limit of 14 units a week.",
    },
  },
  {
    id: "eb-treatment",
    kicker: "Treatment",
    question: "Do ectopic beats need treatment?",
    hook: "Often not. Reassurance and cutting down on triggers come first. Medicines or a procedure are for symptoms that persist.",
    short: "Not all ectopic beats need treatment. If you are otherwise fit and healthy, all that is usually needed is reassurance and advice, such as cutting down on stimulants like alcohol or caffeine. If symptoms are persistent and uncomfortable, a doctor may suggest a medicine such as a beta blocker, and some people with ventricular ectopics are offered catheter ablation.",
    sections: [
      {
        heading: "Often no treatment",
        paragraphs: [
          "Not all ectopic beats need treatment.",
          "If a person with ectopic beats is otherwise fit and healthy, all that is usually needed is reassurance and advice, such as cutting down on anything that may be acting as a stimulant, like alcohol or caffeine.",
          "Treatment for heart palpitations depends on the cause. They often do not need to be treated.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "If symptoms are persistent and uncomfortable, medical therapies may be appropriate. Generally, a doctor would first use a medicine such as a beta blocker, like bisoprolol.",
          "Beta blockers work by slowing down your heartbeat. They may not be suitable if you have a breathing problem, such as asthma. For people with asthma or bronchitis, a calcium channel blocker such as diltiazem may be considered instead.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Common side effects of beta blockers can include cold feet and hands, dizziness and tiredness. If side effects are bothering you or do not go away, speak to your doctor or pharmacist.",
          "If you feel dizzy after taking a beta blocker, do not drive, ride a bike or use machinery until the dizziness stops.",
        ],
      },
      {
        heading: "Ablation",
        paragraphs: [
          "Ablation means burning or freezing the section of heart that's causing a faulty heart rhythm.",
          "Some people are offered catheter ablation for ventricular ectopics. Catheters are placed into the heart through veins or arteries at the top of the legs, and a controlled area of scar is made by heating the heart.",
          "Life threatening complications are rare. One hospital leaflet says they occur approximately once in every 1000 procedures.",
        ],
      },
      {
        heading: "Weighing it up",
        paragraphs: [
          "When thinking about the options, think about the chance of controlling symptoms with or without tablets, and the impact ongoing symptoms could have on you. Some people have side effects from medicines, such as feeling tired or having a slow heart rate.",
        ],
      },
    ],
    helps: [
      "Cut down on anything that may be acting as a stimulant, such as alcohol or caffeine.",
      "Before using beta blockers, tell your doctor if you have any medical conditions.",
      "If side effects are bothering you or do not go away, speak to your doctor or pharmacist.",
      "Think about the chance of controlling symptoms with or without tablets.",
      "It is always best to see your doctor for evaluation and investigation.",
    ],
    tryThisWeek: [
      "Cut down on stimulants.",
      "Tell your doctor about other conditions.",
      "Report side effects that bother you.",
    ],
    ask: "Do my ectopic beats need treatment, or are they best left alone?",
    interactive: {
      kind: "flip-cards",
      title: "The options, turned over",
      intro: "Tap a card to see what each option involves.",
      cards: [
        { id: "advice", front: "Reassurance and advice", when: "If otherwise fit and healthy", back: "Cutting down on anything that may be acting as a stimulant, such as alcohol or caffeine." },
        { id: "beta", front: "Beta blocker", when: "If symptoms are persistent and uncomfortable", back: "A medicine such as bisoprolol, which works by slowing down your heartbeat." },
        { id: "ccb", front: "Calcium channel blocker", when: "For people with asthma or bronchitis", back: "An alternative such as diltiazem may be considered." },
        { id: "ablation", front: "Catheter ablation", when: "For some people with ventricular ectopics", back: "Catheters reach the heart from the top of the legs, and heating makes a controlled area of scar." },
      ],
    },
    sources: [AFA_ECTOPIC, BHF_PALPITATIONS, NHS_PALPITATIONS, NHS_ARRHYTHMIA, NHS_BETA_BLOCKERS, LEEDS_VE, BHF_ECTOPIC],
    quiz: {
      question: "If you are otherwise fit and healthy, what is usually all that is needed?",
      options: [{ text: "Reassurance and advice", right: true }, { text: "An operation" }, { text: "Daily injections" }],
      why: "If a person with ectopic beats is otherwise fit and healthy, all that is usually needed is reassurance and advice.",
    },
  },
  {
    id: "eb-urgent",
    kicker: "Urgent help",
    question: "Which symptoms need urgent help?",
    hook: "Palpitations that do not go away, or that come with chest pain, breathlessness or fainting, need 999 or A&E.",
    short: "Call 999 or go to A&E if you have heart palpitations that do not go away, or you also have chest pain, shortness of breath, or feeling faint or fainting. Do not drive to A&E. If you've had these symptoms but they've now stopped, ask your GP surgery for an urgent appointment, call 111 or get help from 111 online.",
    sections: [
      {
        heading: "Call 999 or go to A&E",
        paragraphs: [
          "Call 999 or go to A&E if you currently have heart palpitations and they do not go away, or you also have chest pain, shortness of breath, or feeling faint or fainting.",
          "The British Heart Foundation says to call 999 if you have palpitations with severe shortness of breath, chest pain or tightness, dizziness and light headedness, or fainting or blackouts.",
        ],
      },
      {
        heading: "Getting there",
        paragraphs: [
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance. Bring any medicines you take with you.",
        ],
      },
      {
        heading: "If the symptoms have stopped",
        paragraphs: [
          "If you've had these symptoms but they've now stopped, ask your GP surgery for an urgent appointment, call 111 or get help from 111 online.",
        ],
      },
      {
        heading: "Chest pain",
        paragraphs: [
          "Call 999 if you get sudden pain or discomfort in your chest that does not go away, pain that spreads to your arms, neck, jaw, stomach or back, or chest pain and you feel sweaty, sick, light headed or short of breath. You could be having a heart attack.",
        ],
      },
      {
        heading: "Not sure if it is panic",
        paragraphs: [
          "Heart attacks and panic attacks share many similar symptoms, like chest pain or tightness, shortness of breath, sweating and feelings of dread. If you're unsure, it's always safest to call 999 and seek medical help.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E if palpitations do not go away, or come with chest pain, shortness of breath, or feeling faint or fainting.",
      "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
      "Bring any medicines you take with you.",
      "If the symptoms have stopped, ask your GP surgery for an urgent appointment, call 111 or get help from 111 online.",
      "If you're unsure whether it is a heart attack or a panic attack, it's always safest to call 999.",
    ],
    tryThisWeek: [
      "Know when to call 999.",
      "Do not drive yourself to A&E.",
      "Bring your medicines with you.",
    ],
    ask: "Which symptoms should make me seek help straight away?",
    interactive: {
      kind: "signs",
      title: "Signs that need help now",
      intro: "Tick anything that comes with your palpitations. The note underneath says where to get help.",
      signs: [
        "Palpitations that do not go away",
        "Chest pain or tightness",
        "Shortness of breath",
        "Feeling faint or fainting",
        "Dizziness or light headedness",
        "Blackouts",
      ],
      after: "If you have any of these now, call 999 or go to A&E. Do not drive to A&E. If you've had them but they've now stopped, ask your GP surgery for an urgent appointment, call 111 or get help from 111 online.",
      copyHeading: "Symptoms with my palpitations",
    },
    sources: [NHS_PALPITATIONS, BHF_PALPITATIONS, NHS_ARRHYTHMIA, NHS_CHEST_PAIN, BHF_ANXIETY],
    quiz: {
      question: "You have palpitations and chest pain. How should you get to A&E?",
      options: [{ text: "Ask someone to drive you, or call 999", right: true }, { text: "Drive yourself" }, { text: "Wait until the morning" }],
      why: "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
    },
  },
  {
    id: "eb-noticing-less",
    kicker: "Everyday life",
    question: "How can I notice ectopic beats less?",
    hook: "Palpitations often feel more serious than they are. Calming the body, and checking less, can turn the volume down.",
    short: "Palpitations are usually harmless and often feel more serious than they are, and many people live a normal life with them. Breathing exercises, yoga and mindfulness can relieve the anxiety and stress that make them feel worse. Gradually checking your pulse less can help to break the cycle of anxiety.",
    sections: [
      {
        heading: "They often feel worse than they are",
        paragraphs: [
          "Palpitations are usually harmless and often feel more serious than they are.",
          "Many people live a normal life with palpitations, but some may need help to learn how to live with them.",
        ],
      },
      {
        heading: "Calm breathing",
        paragraphs: [
          "To relieve anxiety and stress, try breathing exercises, yoga and mindfulness.",
          "Let your breath flow as deep down into your belly as is comfortable, without forcing it. Breathe in gently, counting from 1 to 5 if it helps, then let it flow out gently. Repeat for at least 5 minutes.",
          "If deep breathing triggers unexpected or concerning symptoms such as pain, breathlessness or dizziness, stop right away and get help.",
        ],
      },
      {
        heading: "Grounding and distraction",
        paragraphs: [
          "When you feel overwhelmed, grounding can bring your attention back to the present moment. Try naming 5 things you can see, 4 you can feel or touch, 3 you can hear, 2 you can smell and 1 you can taste.",
          "Distraction can give some comfort too. Try calling a friend, playing some of your favourite music, or going for a short walk.",
        ],
      },
      {
        heading: "Checking less",
        paragraphs: [
          "Gradually reducing reassurance seeking, such as checking your pulse, can help to break the cycle of anxiety. If you check often, note how many times, then set a goal to reduce it by a small amount each week.",
          "Think carefully before using health monitoring devices, like fitness watches or health apps on your phone. For some people, these can make anxiety worse.",
        ],
      },
    ],
    helps: [
      "Try breathing exercises, yoga and mindfulness.",
      "Practise calm breathing for at least 5 minutes, as part of your daily routine.",
      "Try the 5-4-3-2-1 grounding technique when you feel overwhelmed.",
      "Set a goal to check your pulse a little less each week.",
      "Think carefully before using fitness watches or health apps.",
    ],
    tryThisWeek: [
      "Try a breathing exercise each day.",
      "Try 5-4-3-2-1 grounding.",
      "Check your pulse a little less.",
    ],
    ask: "Could my ectopic beats feel worse because of stress or worry?",
    interactive: {
      kind: "timeline",
      title: "A calming breath, step by step",
      steps: [
        { id: "settle", when: "First", title: "Get comfortable", points: ["Stand, sit in a chair that supports your back, or lie down.", "Loosen any clothes that restrict your breathing."] },
        { id: "belly", when: "Next", title: "Into your belly", points: ["Let your breath flow as deep into your belly as is comfortable, without forcing it."] },
        { id: "in", when: "Breathing in", title: "In through your nose", points: ["Breathe in gently and regularly.", "Some people count steadily from 1 to 5."] },
        { id: "out", when: "Breathing out", title: "Out through your mouth", points: ["Let it flow out gently, counting from 1 to 5 again if it helps."] },
        { id: "repeat", when: "At least 5 minutes", title: "Keep going", points: ["Repeat for at least 5 minutes.", "You get the most benefit if you do it regularly."] },
      ],
    },
    sources: [BHF_WHEN_TO_WORRY, BHF_ANXIETY, NHS_BREATHING, BHF_BREATHING, BHF_ECTOPIC],
    quiz: {
      question: "What does the British Heart Foundation say about how palpitations feel?",
      options: [{ text: "They often feel more serious than they are", right: true }, { text: "They always mean heart damage" }, { text: "They only happen during exercise" }],
      why: "Palpitations are usually harmless and often feel more serious than they are.",
    },
  },
  {
    id: "eb-exercise",
    kicker: "Staying active",
    question: "Can I exercise with ectopic beats?",
    hook: "Strenuous exercise can bring them on. But once they've been checked, being active is recommended. Start small and build up.",
    short: "Strenuous exercise is one of the common causes of ectopic beats. If palpitations are putting you off being active, get them checked; if your doctor says you do not need further investigation or treatment, exercising as part of a healthy lifestyle is recommended. Start gently and build up gradually.",
    sections: [
      {
        heading: "Exercise can bring them on",
        paragraphs: [
          "Common causes of ectopic beats and palpitations include strenuous exercise.",
          "You may notice palpitations when you exercise. If they are putting you off being active, then get them checked out.",
        ],
      },
      {
        heading: "Once you've been checked",
        paragraphs: [
          "If you've seen your doctor and you do not need further investigation or treatment, then exercising as part of a healthy lifestyle is recommended.",
          "Speak to your GP first if you have not exercised for some time, or if you have medical conditions or concerns.",
        ],
      },
      {
        heading: "Start small",
        paragraphs: [
          "If exercise is new to you, start with 5 or 10 minutes of walking, and gradually increase your time and distance.",
          "As long as you increase your activity level gradually, you should be able to get used to more intense exercise.",
        ],
      },
      {
        heading: "The weekly target",
        paragraphs: [
          "Adults should aim to do at least 150 minutes of moderate intensity activity a week, or 75 minutes of vigorous intensity activity a week.",
          "Moderate activity will raise your heart rate, and make you breathe faster and feel warmer. You can still talk, but not sing.",
        ],
      },
      {
        heading: "If they get worse",
        paragraphs: [
          "If your palpitations get worse with exercise, stop and speak to your doctor. Speak to your doctor about any new symptoms, so you can be monitored if needed.",
        ],
      },
    ],
    helps: [
      "Get palpitations checked out if they are putting you off being active.",
      "Start with 5 or 10 minutes of walking and gradually increase your time and distance.",
      "Check with your doctor first.",
      "If your palpitations get worse with exercise, stop and speak to your doctor.",
      "Aim for at least 150 minutes of moderate intensity activity a week.",
    ],
    tryThisWeek: [
      "Get them checked if they put you off.",
      "Start with a 5 to 10 minute walk.",
      "Stop if they get worse, and tell your doctor.",
    ],
    ask: "Is it safe for me to exercise, and how hard can I go?",
    interactive: {
      kind: "scenarios",
      title: "Moments on the move",
      scenarios: [
        {
          id: "putting-off",
          situation: "You've stopped going out for runs because you feel skipped beats when you exercise.",
          options: [{ text: "Get them checked out", best: true }, { text: "Give up exercise for good" }],
          why: "You may notice palpitations when you exercise. If they are putting you off being active, then get them checked out.",
        },
        {
          id: "new",
          situation: "Your doctor says you need no more tests, but exercise is new to you.",
          options: [{ text: "Start with 5 or 10 minutes of walking", best: true }, { text: "Start with a long, hard run" }],
          why: "If exercise is new to you, start with 5 or 10 minutes of walking, and gradually increase your time and distance.",
        },
        {
          id: "worse",
          situation: "Your palpitations get worse as you exercise.",
          options: [{ text: "Stop and speak to your doctor", best: true }, { text: "Push through to the end" }],
          why: "If your palpitations get worse with exercise, stop and speak to your doctor.",
        },
      ],
    },
    sources: [BHF_WHEN_TO_WORRY, BHF_ECTOPIC, NHS_PALPITATIONS, NHS_ACTIVITY],
    quiz: {
      question: "How does the British Heart Foundation suggest starting if exercise is new to you?",
      options: [{ text: "With 5 or 10 minutes of walking", right: true }, { text: "With an hour of running" }, { text: "With heavy weights" }],
      why: "If exercise is new to you, start with 5 or 10 minutes of walking, and gradually increase your time and distance.",
    },
  },
  {
    id: "eb-night",
    kicker: "Night-time",
    question: "Why do ectopic beats feel worse at night?",
    hook: "A slower heart, a quieter room and a busier mind. Night is when many people notice them most.",
    short: "Ectopics tend to happen when the heart rate is slower, such as when relaxing in the evening or sleeping at night. Many people also notice palpitations more in bed simply because they are less distracted and there is less noise. Worry, and the position you lie in, can play a part too.",
    sections: [
      {
        heading: "A slower heart",
        paragraphs: [
          "Ectopics tend to occur when the heart rate is slower, such as when we are relaxing in the evening or sleeping at night.",
        ],
      },
      {
        heading: "A quieter room",
        paragraphs: [
          "Palpitations can happen at any time of day, but some people notice them more at night, once they are relaxed or in bed.",
          "For most people, this is simply because we are less distracted at night and there is less noise, so we are more aware of sensations in our bodies.",
        ],
      },
      {
        heading: "A busier mind",
        paragraphs: [
          "Night-time can be when we are more likely to start thinking about stressful or worrying things. Anxiety and stress can make palpitations feel worse, so this may be another reason for noticing them more at night.",
        ],
      },
      {
        heading: "How you lie",
        paragraphs: [
          "Some experts say people who sleep on their backs may be more likely to feel palpitations, because of pressure changes in the body in bed.",
          "They also think left-sided sleepers could feel them more often, because of the shorter distance between the heart and the chest wall.",
        ],
      },
      {
        heading: "Winding down",
        paragraphs: [
          "Relax at least 1 hour before bed, such as by taking a bath or reading a book. Do not smoke or drink alcohol, tea or coffee at least 6 hours before going to bed.",
          "If you're worried about your palpitations, speak to your doctor. A symptom diary can help them understand what you've been experiencing.",
        ],
      },
    ],
    helps: [
      "Keep a symptom diary of when you get palpitations, what you were doing, and any other symptoms.",
      "Speak to your doctor if you're worried about your palpitations.",
      "Relax at least 1 hour before bed.",
      "Do not smoke or drink alcohol, tea or coffee at least 6 hours before going to bed.",
      "Try deep breathing at or around bedtime.",
    ],
    tryThisWeek: [
      "Note night-time beats in a diary.",
      "Relax for an hour before bed.",
      "No tea or coffee for 6 hours before bed.",
    ],
    ask: "Why do I notice my ectopic beats more when I lie down at night?",
    interactive: {
      kind: "risk-check",
      title: "What might make night-time beats more noticeable?",
      intro: "Tick any that sound like you. Some can be changed; some cannot.",
      items: [
        { id: "slow", label: "A slower heart rate at rest", note: "Ectopics tend to occur when the heart rate is slower, such as when sleeping at night.", changeable: false },
        { id: "quiet", label: "A quiet room, fewer distractions", note: "With less noise, we are more aware of sensations in our bodies.", changeable: false },
        { id: "worry", label: "Worrying thoughts at bedtime", note: "Anxiety and stress can make palpitations feel worse.", changeable: true },
        { id: "back", label: "Sleeping on your back", note: "Some experts say back sleepers may be more likely to feel palpitations.", changeable: true },
        { id: "left", label: "Sleeping on your left side", note: "Some experts think left-sided sleepers could feel them more often.", changeable: true },
        { id: "evening", label: "Tea, coffee or alcohol in the evening", note: "Do not drink alcohol, tea or coffee at least 6 hours before going to bed.", changeable: true },
      ],
    },
    sources: [BHF_NIGHT, AFA_ECTOPIC, BHF_WHEN_TO_WORRY, NHS_INSOMNIA, BHF_BREATHING],
    quiz: {
      question: "Why do most people notice palpitations more at night?",
      options: [{ text: "They are less distracted and it is quieter", right: true }, { text: "The heart is damaged at night" }, { text: "Beds cause ectopic beats" }],
      why: "For most people, this is simply because we are less distracted at night and there is less noise.",
    },
  },
  {
    id: "eb-worry",
    kicker: "Feelings",
    question: "How do I deal with the worry and anxiety?",
    hook: "Anxiety can make the heart race, and palpitations can trigger anxiety. That loop can be broken, and help is there.",
    short: "Anxiety can make your heart race, and palpitations themselves can trigger feelings of anxiety. Grounding, relaxation and talking therapies can help, and you can refer yourself to NHS talking therapies. If anxiety is affecting your daily life, see a GP.",
    sections: [
      {
        heading: "A two-way link",
        paragraphs: [
          "Anxiety can make your heart race, and palpitations themselves can trigger feelings of anxiety.",
          "A more noticeable or unusual heartbeat is one of the symptoms of generalised anxiety disorder.",
        ],
      },
      {
        heading: "When worry takes over",
        paragraphs: [
          "Some people check their heartbeat many times a day and mistake normal changes, like those caused by stress or anxiety, for signs of a heart problem. This can lead to panic attacks, causing a vicious cycle.",
          "Because of their fears, people may avoid things like exercise, which can limit their daily life.",
        ],
      },
      {
        heading: "Things that help",
        paragraphs: [
          "There are different methods you can try to reduce anxiety, including grounding and relaxation techniques.",
          "Setting aside a specific time to focus on your worries can help stop them taking over your day. Pick a time that suits you, and give yourself about 20 minutes.",
          "Getting enough sleep and exercising regularly can improve your wellbeing. Reducing caffeine and alcohol could help you feel calmer.",
        ],
      },
      {
        heading: "Talking therapies",
        paragraphs: [
          "Talking therapies can help with anxiety. Anxiety is usually treated with talking therapies like cognitive behavioural therapy (CBT).",
          "You can refer yourself to NHS talking therapies without speaking to a GP. You need to be registered with a GP and aged 18 or over, or 16 or over in some areas.",
          "Sometimes medicine is prescribed for anxiety linked to palpitations, if it's stopping you from living a normal life.",
        ],
      },
      {
        heading: "Someone to talk to",
        paragraphs: [
          "See a GP if you think you might have generalised anxiety disorder. You could also contact Samaritans by calling 116 123 if you need someone to talk to.",
          "The British Heart Foundation Heart Helpline lets you speak to cardiac nurses on 0808 802 1234, Monday to Friday, 9am to 5pm.",
        ],
      },
    ],
    helps: [
      "Try grounding and relaxation techniques.",
      "Set aside about 20 minutes at a time that suits you to focus on your worries.",
      "Refer yourself to NHS talking therapies.",
      "See a GP if you think you might have generalised anxiety disorder.",
      "Contact Samaritans by calling 116 123 if you need someone to talk to.",
      "Call the British Heart Foundation Heart Helpline to speak to a cardiac nurse.",
    ],
    tryThisWeek: [
      "Try a grounding technique.",
      "Set aside 20 minutes for worries.",
      "Look up NHS talking therapies.",
    ],
    ask: "Is there support near me for the anxiety I feel about my heartbeat?",
    interactive: {
      kind: "scenarios",
      title: "Where to turn",
      scenarios: [
        {
          id: "checking",
          situation: "You check your pulse many times a day, and each check makes you more anxious.",
          options: [{ text: "Gradually reduce how often you check", best: true }, { text: "Check more often to be sure" }],
          why: "Gradually reducing reassurance seeking or avoidance behaviours can help to break the cycle of anxiety.",
        },
        {
          id: "daily-life",
          situation: "Worry about your heartbeat is affecting your daily life.",
          options: [{ text: "Refer yourself to NHS talking therapies, or see a GP", best: true }, { text: "Keep it to yourself" }],
          why: "You can refer yourself to NHS talking therapies without speaking to a GP.",
        },
        {
          id: "talk",
          situation: "It's late, and you need someone to talk to.",
          options: [{ text: "Call Samaritans on 116 123", best: true }, { text: "Wait until morning on your own" }],
          why: "You could also contact Samaritans by calling 116 123 if you need someone to talk to.",
        },
      ],
    },
    sources: [BHF_WHEN_TO_WORRY, BHF_ANXIETY, NHS_GAD, NHS_TALKING, BHF_PALPITATIONS],
    quiz: {
      question: "Can you refer yourself to NHS talking therapies?",
      options: [{ text: "Yes, without speaking to a GP", right: true }, { text: "No, only a cardiologist can" }, { text: "Only after a heart test" }],
      why: "You can refer yourself to NHS talking therapies without speaking to a GP.",
    },
  },
];
