import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Slow heart rate and heart block page's pieces
// (content/library-conditions/heart-more.ts `slowHeartRate`). Every sentence was written from wording
// checked on 21 October 2026 on the pages listed under each answer's `sources`; nothing is added that
// those pages do not say. Much of it comes from the NHS heart block and pacemaker pages, the British Heart
// Foundation's pages and its "Understanding pacemakers" booklet (updated February 2026), Arrhythmia
// Alliance, and the DVLA's own pages, and is credited to them. Where two sources give different figures
// (how long a battery lasts, a night in hospital), both are named. General information only; it never
// replaces what a person's own team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const bhf = (label: string, path: string): LearnSource => ({ label: `British Heart Foundation: ${label}`, url: `https://www.bhf.org.uk/informationsupport/${path}` });
const aa = (label: string, path: string): LearnSource => ({ label: `Arrhythmia Alliance: ${label}`, url: `https://heartrhythmalliance.org/aa/uk/${path}` });

const NHS_HEART_BLOCK = nhs("Heart block", "conditions/heart-block/");
const NHS_PACEMAKER = nhs("Pacemakers", "tests-and-treatments/pacemaker-implantation/");
const NHS_ARRHYTHMIA = nhs("Heart rhythm problems (arrhythmia)", "conditions/arrhythmia/");
const NHS_ECG = nhs("Electrocardiogram (ECG)", "tests-and-treatments/electrocardiogram/");
const NHS_FAINTING = nhs("Fainting", "symptoms/fainting/");
const NHS_BETA = nhs("Beta blockers", "medicines/beta-blockers/");
const NHS_BISOPROLOL = nhs("Bisoprolol", "medicines/bisoprolol/");
const NHS_DIGOXIN = nhs("About digoxin", "medicines/digoxin/about-digoxin/");
const NHS_DIGOXIN_HOW = nhs("How and when to take digoxin", "medicines/digoxin/how-and-when-to-take-digoxin/");
const NHS_DIGOXIN_SIDE = nhs("Side effects of digoxin", "medicines/digoxin/side-effects-of-digoxin/");
const BHF_HEART_BLOCK = bhf("Heart block", "conditions/heart-block");
const BHF_ARRHYTHMIAS = bhf("Arrhythmias", "conditions/arrhythmias");
const BHF_HEART_RATE = bhf("Heart rate: what's normal and how to check it", "how-a-healthy-heart-works/your-heart-rate");
const BHF_BRADY = bhf("When should I worry about bradycardia - low heart rate?", "heart-matters-magazine/medical/ask-the-experts/bradycardia-low-heart-rate");
const BHF_ECG = bhf("ECG", "tests/ecg");
const BHF_PACEMAKERS = bhf("Pacemakers", "treatments/pacemakers");
const BHF_PM_FAQ = bhf("Pacemakers: 15 everyday things you can and cannot do with one", "heart-matters-magazine/medical/how-does-a-pacemaker-work/frequently-asked-pacemaker-questions");
const BHF_HR_EXERCISE = bhf("What should my heart rate be when I exercise?", "heart-matters-magazine/medical/ask-the-experts/heart-rate-exercise");
const BHF_PM_BOOKLET: LearnSource = {
  label: "British Heart Foundation: Understanding pacemakers (booklet)",
  url: "https://www.bhf.org.uk/-/media/files/information-and-support/publications/treatments-for-heart-conditions/understanding-pacemakers_a6_v14-web.pdf",
};
const AA_BRADY = aa("Bradycardia", "bradycardia");
const AA_PACEMAKER = aa("Pacemaker", "bradycardia/pacemaker");
const AA_REMOTE = aa("Remote monitoring", "bradycardia/remote-monitoring");
const AA_HEART_MONITOR = aa("Heart monitor", "heart-monitor");
const GOV_PACEMAKER_DRIVING: LearnSource = { label: "GOV.UK: Pacemakers and driving", url: "https://www.gov.uk/pacemakers-and-driving" };
const GOV_ARRHYTHMIA_DRIVING: LearnSource = { label: "GOV.UK: Arrhythmia and driving", url: "https://www.gov.uk/arrhythmia-and-driving" };
const GOV_DVLA_CARDIO: LearnSource = {
  label: "DVLA: Cardiovascular disorders – assessing fitness to drive",
  url: "https://www.gov.uk/guidance/cardiovascular-disorders-assessing-fitness-to-drive",
};

export const slowHeartAnswers: LearnArticle[] = [
  {
    id: "brady-what-it-is",
    kicker: "Understanding",
    question: "What is a slow heart rate?",
    hook: "Below 60 beats a minute counts as slow. For a very fit athlete, or anyone asleep, that can be normal.",
    short: "A normal heart rate is anything between 60 and 100 beats per minute; anything below 60 is a low heart rate, which doctors call bradycardia. It can be normal for people who are very fit, and it is common for the heart rate to drop below 60 when you are asleep. Speak to your doctor if you notice new symptoms like dizziness, feeling more tired than usual or fainting.",
    sections: [
      {
        heading: "Below 60 beats a minute",
        paragraphs: [
          "A normal heart rate is anything between 60 and 100 beats per minute (bpm). Anything that falls below 60 bpm is considered a low heart rate, which doctors call bradycardia.",
          "Bradycardia describes a number of different conditions in which the heart beats at an unusually slow rate. A heartbeat that is too slow will not pump blood through the body efficiently.",
        ],
      },
      {
        heading: "When slow is normal",
        paragraphs: [
          "It's normal for your heart rate to vary during the day. Your heart rate may drop below 60 bpm at some points and then speed up again.",
          "It's also common for your heart rate to drop below 60 bpm when you're asleep. It will usually go back to normal when you wake up.",
          "A slow heart rate can be normal for people like athletes who are very fit.",
        ],
      },
      {
        heading: "When it can be a problem",
        paragraphs: [
          "Some people have a naturally low heart rate or a health condition that affects their heart's ability to regulate its rhythm. A low heart rate can also develop as you age.",
          "Sinus bradycardia is when your heart beats in a regular way but it's slower than 60 bpm. It does not mean there's something wrong with your heart and you might not need treatment. Sometimes it can be caused by another condition which you may need treatment for.",
        ],
      },
      {
        heading: "When to speak to a doctor",
        paragraphs: [
          "If you're usually fit and healthy, and you do not have any symptoms, try not to worry if your heart rate drops below 60 bpm.",
          "Speak to your doctor if you notice new symptoms, like dizziness, palpitations, feeling more tired than usual, or feeling generally weaker and fainting. If you have a slow heart rate and symptoms like fainting and tiredness, make an appointment with your GP.",
        ],
      },
    ],
    helps: [
      "If you're usually fit and healthy and have no symptoms, try not to worry if your heart rate drops below 60 bpm.",
      "Speak to your doctor if you notice new symptoms like dizziness, palpitations or feeling more tired than usual.",
      "Make an appointment with your GP if you have a slow heart rate and symptoms like fainting and tiredness.",
      "If you have a heart condition, ask your doctor what your normal heart rate should be.",
      "Speak to the British Heart Foundation's cardiac nurses on the Heart Helpline, Monday to Friday, 9am to 5pm.",
    ],
    tryThisWeek: [
      "Tell your doctor about any new symptoms.",
      "See a GP if a slow pulse comes with fainting.",
      "Ask what your normal heart rate should be.",
    ],
    ask: "Is my slow heart rate normal for me, or is it causing my symptoms?",
    interactive: {
      kind: "scenarios",
      title: "Slow, but is it a problem?",
      scenarios: [
        {
          id: "fit",
          situation: "You're fit and healthy, you feel well, and your resting heart rate is in the 50s.",
          options: [{ text: "Try not to worry", best: true }, { text: "Go to A&E" }],
          why: "If you're usually fit and healthy, and you do not have any symptoms, try not to worry if your heart rate drops below 60 bpm.",
        },
        {
          id: "night",
          situation: "Your watch shows your heart rate dropped below 60 while you slept.",
          options: [{ text: "This is common during sleep", best: true }, { text: "It means your heart is failing" }],
          why: "It's also common for your heart rate to drop below 60 bpm when you're asleep. It will usually go back to normal when you wake up.",
        },
        {
          id: "symptoms",
          situation: "Your pulse is slow and you have started feeling faint and very tired.",
          options: [{ text: "Make an appointment with your GP", best: true }, { text: "Wait and see for a few months" }],
          why: "If you have a slow heart rate and are experiencing symptoms like fainting and tiredness, you should make an appointment with your GP.",
        },
      ],
    },
    sources: [BHF_BRADY, BHF_HEART_RATE, AA_BRADY, BHF_ARRHYTHMIAS],
    quiz: {
      question: "What heart rate do doctors call a low heart rate (bradycardia)?",
      options: [{ text: "Below 60 beats per minute", right: true }, { text: "Below 100 beats per minute" }, { text: "Below 30 beats per minute" }],
      why: "Anything that falls below 60 bpm is considered a low heart rate, which doctors call bradycardia.",
    },
  },
  {
    id: "brady-heart-block",
    kicker: "Types",
    question: "What are the types of heart block?",
    hook: "The signal from the top of the heart to the bottom can be slowed, sometimes dropped, or stopped altogether. That is first, second and third degree.",
    short: "Heart block is when the electrical signals travelling from the top to the bottom of your heart are blocked or delayed. The most common type, AV heart block, comes in three degrees: first-degree does not usually need treatment, second-degree sometimes does, and third-degree (complete) heart block often needs treatment, usually a pacemaker.",
    sections: [
      {
        heading: "A delayed or blocked signal",
        paragraphs: [
          "Heart block is a condition where your heart beats too slowly or your heartbeat is not steady. It can happen if the electrical impulses in your heart are blocked or delayed.",
          "Electrical impulses flow from the upper chambers (atria) to the lower chambers (ventricles) of your heart. These impulses tell your heart when to beat.",
        ],
      },
      {
        heading: "First-degree heart block",
        paragraphs: [
          "The most common type of heart block is called AV (atrioventricular) heart block. It may be diagnosed as first-degree, second-degree or third-degree (complete).",
          "First-degree heart block is when electrical impulses can still reach your ventricles but move more slowly than normal. Most people with first-degree heart block do not have any signs and symptoms. It is the least severe and usually does not require treatment.",
        ],
      },
      {
        heading: "Second-degree heart block",
        paragraphs: [
          "Second-degree heart block is when electrical impulses from your atria sometimes do not flow to your ventricles. It sometimes needs treatment.",
          "In Mobitz type I, the electrical impulses get slower and slower until your heart skips a beat. In Mobitz type II, some impulses do not get to the ventricles, which makes your heart beat irregularly and slower. This type can sometimes progress to third-degree heart block, and you may need a pacemaker to regulate your heartbeat.",
        ],
      },
      {
        heading: "Third-degree or complete heart block",
        paragraphs: [
          "With third-degree or complete heart block, the electrical signal from your atria does not flow at all to your ventricles. This is the most severe form of heart block and usually requires a pacemaker.",
        ],
      },
      {
        heading: "Other kinds",
        paragraphs: [
          "A bundle branch block is when the electrical impulses that travel through the bottom chambers of your heart are slower than normal. This delay does not often cause symptoms.",
          "Tachy-brady syndrome, also called sick sinus syndrome, happens when the sinus node, which tells your heart when to beat, does not work properly. Your heartbeat can become too fast or too slow, or switch between fast and slow rhythms.",
        ],
      },
    ],
    helps: [
      "If you're worried about your treatment or have any questions, speak to your doctor or healthcare team.",
      "Get advice and support from your GP or other healthcare professionals.",
      "If you experience severe or sudden symptoms, call 999 for an ambulance.",
      "Speak to a cardiac nurse on the British Heart Foundation's Heart Helpline.",
      "Order the British Heart Foundation's free booklet on heart block.",
    ],
    tryThisWeek: [
      "Ask your team about your type of block.",
      "Call 999 for severe or sudden symptoms.",
      "Call the Heart Helpline.",
    ],
    ask: "Which type of heart block do I have, and does it need treatment?",
    interactive: {
      kind: "flip-cards",
      title: "The degrees of heart block, turned over",
      intro: "Tap a card to see what each type means.",
      cards: [
        { id: "first", front: "First-degree", when: "Does not usually need treatment", back: "Impulses still reach the ventricles but move more slowly than normal. It is the least severe." },
        { id: "mobitz1", front: "Second-degree, Mobitz type I", when: "Sometimes needs treatment", back: "The electrical impulses get slower and slower until your heart skips a beat." },
        { id: "mobitz2", front: "Second-degree, Mobitz type II", when: "You may need a pacemaker", back: "Some impulses do not get to the ventricles, so your heart beats irregularly and slower." },
        { id: "third", front: "Third-degree (complete)", when: "Usually requires a pacemaker", back: "The signal from the atria does not flow at all to the ventricles. It is the most severe form." },
        { id: "bundle", front: "Bundle branch block", when: "Does not often cause symptoms", back: "Impulses travelling through the bottom chambers of your heart are slower than normal." },
      ],
    },
    sources: [NHS_HEART_BLOCK, BHF_HEART_BLOCK, BHF_ARRHYTHMIAS],
    quiz: {
      question: "Which type of heart block usually requires a pacemaker?",
      options: [{ text: "Third-degree (complete) heart block", right: true }, { text: "First-degree heart block" }, { text: "Bundle branch block" }],
      why: "This is the most severe form of heart block and usually requires a pacemaker.",
    },
  },
  {
    id: "brady-causes",
    kicker: "Causes",
    question: "What causes a slow heart rate or heart block?",
    hook: "Heart disease, a heart attack, the wiring ageing, and some medicines. And sometimes no cause at all.",
    short: "Heart block is most often caused by a heart condition such as coronary heart disease or a heart attack. Ageing of the heart's electrical pathways and some medicines, such as beta blockers, can also slow the heart. Sometimes there's no obvious cause, and heart block can happen in people with a normal heart.",
    sections: [
      {
        heading: "The heart's wiring",
        paragraphs: [
          "Heart rhythm problems happen when there's a fault with the electrical system that makes your heart beat.",
          "Heart block is often caused by an underlying heart condition or other issues that can affect your heart's electrical system. The specific cause will depend on the type you have.",
        ],
      },
      {
        heading: "Heart conditions",
        paragraphs: [
          "Heart block is most often caused by a heart condition such as coronary heart disease, or a heart attack.",
          "Causes may also include congenital heart disease, cardiomyopathy, ageing of the electrical pathways in your heart, and thickening of the heart muscle. Infection and inflammation of the heart, caused by another condition, and having heart surgery are other possible causes.",
        ],
      },
      {
        heading: "Age and fitness",
        paragraphs: [
          "Some people have a naturally low heart rate. A low heart rate can also develop as you age.",
          "A slow heart rate can be normal for people like athletes who are very fit.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "A slow heart rate can also be caused by medicine, such as beta blockers. Taking some types of medicine is one of the possible causes of heart block.",
          "If you have heart block due to medicines or electrolyte imbalances, you'll be monitored closely in hospital and given treatment to reverse the medicines or correct the electrolyte imbalances.",
        ],
      },
      {
        heading: "Sometimes no clear cause",
        paragraphs: [
          "Sometimes babies are born with heart block, known as congenital heart block. Sometimes there's no obvious cause.",
          "Heart block can also happen naturally in people with a normal heart and no heart problems. Commonly, bradycardia is treated by addressing the underlying cause.",
        ],
      },
    ],
    helps: [
      "If you're worried about having heart block or any heart condition, speak to your doctor or healthcare team.",
      "Check with your doctor about the medicine you're taking and how it affects your heart rate.",
      "Speak to your doctor if you notice a change in your heart rate when taking medicine.",
      "See a GP if you think you may have heart rhythm problems.",
    ],
    tryThisWeek: [
      "Ask how your medicines affect your heart rate.",
      "Tell your doctor about heart rate changes.",
      "See a GP if you think you have symptoms.",
    ],
    ask: "What is causing my slow heart rate, and could any of my medicines be part of it?",
    interactive: {
      kind: "risk-check",
      title: "What can slow the heart?",
      intro: "Tick any that apply to you. Some can be treated or changed; some cannot.",
      items: [
        { id: "chd", label: "Coronary heart disease or a heart attack", note: "Heart block is most often caused by a heart condition such as coronary heart disease, or a heart attack.", changeable: false },
        { id: "age", label: "Getting older", note: "A low heart rate can develop as you age. Ageing of the electrical pathways in your heart is one cause of heart block.", changeable: false },
        { id: "medicines", label: "Medicines such as beta blockers", note: "Check with your doctor about the medicine you're taking. Heart block due to medicines can be reversed with treatment in hospital.", changeable: true },
        { id: "electrolytes", label: "Electrolyte imbalance", note: "If heart block is due to an electrolyte imbalance, you'll be given treatment to correct it.", changeable: true },
        { id: "surgery", label: "Heart surgery", note: "Having heart surgery is one of the possible causes of AV heart block.", changeable: false },
        { id: "infection", label: "Infection or inflammation of the heart", note: "Infection and inflammation of the heart, caused by another condition, can cause AV heart block.", changeable: false },
        { id: "muscle", label: "Cardiomyopathy or thick heart muscle", note: "Both are listed by the British Heart Foundation as possible causes of heart block.", changeable: false },
        { id: "fit", label: "Being very fit", note: "A slow heart rate can be normal for people like athletes who are very fit.", changeable: false },
      ],
    },
    sources: [NHS_HEART_BLOCK, BHF_HEART_BLOCK, BHF_HEART_RATE, BHF_BRADY, AA_BRADY, NHS_ARRHYTHMIA],
    quiz: {
      question: "What most often causes heart block, according to the NHS?",
      options: [{ text: "A heart condition such as coronary heart disease, or a heart attack", right: true }, { text: "Drinking too much water" }, { text: "Sleeping too much" }],
      why: "Heart block is most often caused by a heart condition such as coronary heart disease, or a heart attack.",
    },
  },
  {
    id: "brady-symptoms",
    kicker: "Symptoms",
    question: "What can a slow heart rate or heart block feel like?",
    hook: "Dizziness, fainting, tiredness, breathlessness. Or nothing at all, until a test for something else picks it up.",
    short: "Heart block can cause dizziness, fainting or feeling like you're about to faint, chest pain, tiredness and shortness of breath. Symptoms range from mild to severe, and some people have none at all. Get help from NHS 111 if you feel dizzy all the time or you've fainted, and call 999 if you've been diagnosed with heart block and have chest pain.",
    sections: [
      {
        heading: "What it can feel like",
        paragraphs: [
          "Symptoms of heart block may include dizziness, fainting or feeling like you're about to faint, chest pain, tiredness and shortness of breath.",
          "Second and third-degree heart blocks can cause you to feel faint or dizzy, tired and sometimes confused, feel a pressure or pain in your chest, or be short of breath. Some people with heart block can have a very low heart rate.",
        ],
      },
      {
        heading: "Mild, severe, or nothing at all",
        paragraphs: [
          "These symptoms can range from mild to severe depending on the type of heart block you have and how it's affecting you.",
          "You may have no symptoms and only find out you have heart block during tests for something else. In some people, heart blocks are always there, while in other people, they can come and go.",
        ],
      },
      {
        heading: "When to get help from NHS 111",
        paragraphs: [
          "Get help from NHS 111 if you feel dizzy all the time or it keeps coming back, if you've fainted, or if you have shortness of breath that gets worse when you've been doing your normal activities, or when you lie down.",
          "It's important to get medical advice to make sure it's nothing serious. You are not wasting anyone's time by getting it checked out.",
        ],
      },
      {
        heading: "When to call 999",
        paragraphs: [
          "Call 999 if you've been diagnosed with heart block and have chest pain, if you have severe difficulty breathing, or if you feel sweaty, sick or lightheaded. Call 999 if someone faints and they are not breathing or cannot be woken up within 1 minute.",
          "Call 999 straight away as you may need immediate treatment in hospital. Do not drive yourself to A&E.",
        ],
      },
      {
        heading: "If you feel faint",
        paragraphs: [
          "If you feel like you're about to faint, try to lie down with your legs raised. If you cannot do this, sit with your head lowered between your knees.",
        ],
      },
    ],
    helps: [
      "Get help from NHS 111 if you feel dizzy all the time or it keeps coming back.",
      "Get help from NHS 111 if you've fainted.",
      "Speak to your doctor if you notice new symptoms like dizziness, palpitations or feeling more tired than usual.",
      "If you feel like you're about to faint, lie down with your legs raised.",
      "Call 999 if you've been diagnosed with heart block and have chest pain.",
    ],
    tryThisWeek: [
      "Call 111 if dizziness keeps coming back.",
      "Lie down, legs raised, if you feel faint.",
      "Know when to call 999.",
    ],
    ask: "Are my dizzy spells or tiredness caused by my heart rate, and what should I do if I faint?",
    interactive: {
      kind: "signs",
      title: "What have you noticed?",
      intro: "Tick anything you have felt. The ones you tick make a list to take to your doctor.",
      signs: [
        "Dizziness",
        "Fainting, or feeling about to faint",
        "Tiredness",
        "Feeling confused",
        "Shortness of breath",
        "Pressure or pain in the chest",
        "Palpitations",
        "Feeling generally weaker",
      ],
      after: "Get help from NHS 111 if you feel dizzy all the time or it keeps coming back, or if you've fainted. Call 999 if you've been diagnosed with heart block and have chest pain, or have severe difficulty breathing.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_HEART_BLOCK, BHF_HEART_BLOCK, BHF_BRADY, NHS_FAINTING],
    quiz: {
      question: "Does everyone with heart block have symptoms?",
      options: [{ text: "No, some people only find out during tests for something else", right: true }, { text: "Yes, everyone faints" }, { text: "Only people over 90 have symptoms" }],
      why: "You may have no symptoms and only find out you have heart block during tests for something else.",
    },
  },
  {
    id: "brady-tests",
    kicker: "Tests",
    question: "What do the ECG and heart monitors show?",
    hook: "A few minutes lying still with ten sticky patches. Or a small recorder worn for a day or more, to catch what a short test misses.",
    short: "The main test for heart block is an electrocardiogram (ECG), which measures the electrical activity of your heart and can show the type of heart block you have. You may also wear a portable ECG, usually for 24 to 48 hours, to monitor your heart for longer. Other tests include an echocardiogram, an MRI scan, exercise tests and blood tests.",
    sections: [
      {
        heading: "The main test",
        paragraphs: [
          "The main test used to diagnose heart block is an electrocardiogram (ECG), which measures the electrical activity of your heart.",
          "Unless you have symptoms, heart block is often noticed while you're having routine tests for other conditions. The results of an ECG can show the type of heart block you have.",
        ],
      },
      {
        heading: "A resting ECG",
        paragraphs: [
          "Ten small sticky patches called electrodes are put on your arms, legs and chest. These are connected by wires to an ECG machine which picks up the electrical signals that make your heart beat.",
          "The whole test takes a few minutes and is completely painless. You will need to lie still as moving can affect the results.",
        ],
      },
      {
        heading: "A portable monitor",
        paragraphs: [
          "For a portable ECG, sticky patches are put on your chest and attached to a small recorder, which you wear on a belt around your waist. You'll usually be asked to wear it for 24 to 48 hours, but it can be up to 7 days.",
          "You cannot have a bath or shower while wearing the portable ECG recorder. This test can pick up on heart rhythm problems which do not show themselves often or have not been detected by a standard ECG.",
        ],
      },
      {
        heading: "Longer-term recorders",
        paragraphs: [
          "If you have symptoms that do not happen frequently, your doctor might suggest an implantable loop recorder. It is implanted under the skin on your chest in a minor procedure done under local anaesthetic.",
          "It can continuously monitor your heartbeat for up to three years and help find out what may be causing symptoms such as dizzy spells or blackouts.",
        ],
      },
      {
        heading: "Other tests, and your results",
        paragraphs: [
          "Other tests may include an echocardiogram or MRI scan to get a picture of your heart, exercise tests on a bike or treadmill, and blood tests.",
          "You may get your ECG results on the same day, but it can take a few weeks. If you've not heard anything after a few weeks, contact the doctor who referred you.",
        ],
      },
    ],
    helps: [
      "Wear a top that's easy to take on and off.",
      "Do not put body lotions, oils or talcum powder on your skin before the test.",
      "Let the team know if you have sensitive skin, as some electrodes can be very sticky.",
      "Return the recorder when the test is finished so the results can be looked at by a specialist.",
      "If you've not heard anything after a few weeks, contact the doctor who referred you.",
    ],
    tryThisWeek: [
      "Wear an easy top to the test.",
      "Skip lotions and oils beforehand.",
      "Chase your results after a few weeks.",
    ],
    ask: "Which tests do I need, and how will I get the results?",
    interactive: {
      kind: "flip-cards",
      title: "The tests, turned over",
      intro: "Tap a card to see what each test does.",
      cards: [
        { id: "ecg", front: "Resting ECG", when: "Usually the first test", back: "Ten sticky patches pick up the electrical signals that make your heart beat. It takes a few minutes and is painless." },
        { id: "portable", front: "Portable ECG (Holter)", when: "Usually 24 to 48 hours", back: "A small recorder on a belt records your heart rhythm while you go about your day. No bath or shower while wearing it." },
        { id: "exercise", front: "Exercise ECG", when: "To check your heart when active", back: "An ECG recorded while you walk on a treadmill or cycle on an exercise bike." },
        { id: "loop", front: "Implantable loop recorder", when: "If symptoms are infrequent", back: "Placed under the skin of your chest. It can monitor your heartbeat for up to three years." },
        { id: "echo", front: "Echocardiogram", when: "To picture the heart", back: "A scan of the heart, similar to an ultrasound, that makes a picture of your heart." },
      ],
    },
    sources: [NHS_HEART_BLOCK, NHS_ECG, BHF_ECG, AA_HEART_MONITOR, BHF_HEART_BLOCK],
    quiz: {
      question: "What can you not do while wearing a portable ECG recorder?",
      options: [{ text: "Have a bath or shower", right: true }, { text: "Walk around" }, { text: "Go to work" }],
      why: "You cannot have a bath or shower while wearing the portable ECG recorder.",
    },
  },
  {
    id: "brady-pacemaker",
    kicker: "Treatment",
    question: "Who needs a pacemaker?",
    hook: "A device smaller than a matchbox that steps in when the heart slows down or misses a beat. It does not give the heart a shock.",
    short: "A pacemaker is a small device put under the skin of your chest that sends out an electrical signal to help control your heartbeat. You may need one if you have a particularly slow heart rate or a type of heart block, especially if it is causing severe symptoms. Having a pacemaker can improve your quality of life and for some people it can save their life.",
    sections: [
      {
        heading: "What a pacemaker is",
        paragraphs: [
          "A pacemaker is a small device that can be used to treat heart rhythm problems (arrhythmias). It's put under the skin of your chest and sends out an electrical signal to help control your heartbeat.",
          "Pacemakers are usually 5 by 4 centimetres (smaller than a matchbox) and weigh about 20 to 50 grams.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "Your heart has a sinus node that sends out electrical impulses to make your heart beat. The job of a pacemaker is to take over the role of your sinus node if it's not working properly.",
          "Most pacemakers work just when they're needed. Others send out impulses all of the time, called a fixed rate. Pacemakers do not give your heart an electrical shock.",
        ],
      },
      {
        heading: "Who needs one",
        paragraphs: [
          "You may need a pacemaker if you have a particularly slow heart rate (bradycardia) or type of heart block, if your heart is beating too fast and it's not controlled by medicine, or if you have heart failure.",
          "If you have heart block that is not causing any symptoms, you will not usually need any treatment. If you have severe symptoms, you may need a pacemaker, which keeps your heart beating regularly and not too slowly.",
          "If persistent bradycardia and related symptoms are present, the condition can be corrected by implanting a permanent pacemaker under the skin.",
        ],
      },
      {
        heading: "For a short time, or for good",
        paragraphs: [
          "You may need a pacemaker for a short time or permanently, depending on what's causing your heart block.",
          "You may have a pacemaker fitted as an emergency treatment or it can be planned. Your doctor will talk to you about why you need a pacemaker.",
        ],
      },
      {
        heading: "Types, and what they can do",
        paragraphs: [
          "Your pacemaker can have one lead (a single-chamber pacemaker), two leads (a dual-chamber pacemaker) or three leads (a biventricular pacemaker). Some people may have a pacemaker with no leads, called a leadless pacemaker, but they're not suitable for everyone.",
          "Having a pacemaker can improve your quality of life and for some people it can save their life. It should also improve any symptoms like feeling breathless or dizzy.",
        ],
      },
    ],
    helps: [
      "Speak to your doctor to find out why they're recommending a pacemaker and if there are any alternatives.",
      "Ask your doctor which type of pacemaker is most suitable for you.",
      "If you're worried about having a pacemaker fitted, speak to your doctor or call the British Heart Foundation's cardiac nurses on 0808 802 1234.",
      "Order the British Heart Foundation's free booklet on pacemakers.",
    ],
    tryThisWeek: [
      "Ask why a pacemaker is recommended.",
      "Ask which type suits you.",
      "Call the Heart Helpline if you're worried.",
    ],
    ask: "Do I need a pacemaker, and what type?",
    interactive: {
      kind: "flip-cards",
      title: "Pacemakers, turned over",
      intro: "Tap a card to see what each type is.",
      cards: [
        { id: "single", front: "Single-chamber pacemaker", when: "One lead", back: "One lead connects the pacemaker to your heart." },
        { id: "dual", front: "Dual-chamber pacemaker", when: "Two leads", back: "Two leads connect the pacemaker to your heart." },
        { id: "biv", front: "Biventricular (CRT) pacemaker", when: "Three leads", back: "Used when the pumping chambers beat out of time with each other. It helps them pump at the same time." },
        { id: "leadless", front: "Leadless pacemaker", when: "Not suitable for everyone", back: "A small pacemaker with no leads, put directly into your heart." },
      ],
    },
    sources: [NHS_PACEMAKER, BHF_PACEMAKERS, NHS_HEART_BLOCK, AA_PACEMAKER, BHF_PM_BOOKLET, AA_BRADY],
    quiz: {
      question: "Does a pacemaker give your heart an electrical shock?",
      options: [{ text: "No, it sends signals to make the heart beat", right: true }, { text: "Yes, every few minutes" }, { text: "Only at night" }],
      why: "Pacemakers do not give your heart an electrical shock.",
    },
  },
  {
    id: "brady-pacemaker-fitting",
    kicker: "Treatment",
    question: "What happens when a pacemaker is fitted?",
    hook: "Usually about an hour, under local anaesthetic, through a small cut on the left side of the chest. It is a common procedure and should not hurt.",
    short: "Having a pacemaker fitted is a common procedure and should not hurt. It usually takes about an hour under local anaesthetic: a small cut is made on the left side of your chest, the wires are guided through a vein to your heart, and the pacemaker is placed under the skin near your collarbone. The pacemaker is checked before you go home.",
    sections: [
      {
        heading: "Before the day",
        paragraphs: [
          "Before having a pacemaker, you'll have an assessment at the hospital. You may need to have blood tests, a chest X-ray or echocardiogram.",
          "Let them know about any medicines you take regularly. The nurse will tell you if you need to stop eating or drinking before your procedure.",
        ],
      },
      {
        heading: "On the day",
        paragraphs: [
          "Having a pacemaker fitted is a common procedure and should not hurt. It's normal to feel a bit nervous.",
          "It usually takes about an hour. You'll have local anaesthetic to numb your chest, so you're awake but should not feel any pain. You may also have medicine to help you relax (sedation).",
        ],
      },
      {
        heading: "How it goes in",
        paragraphs: [
          "A small cut, about 5 to 6 centimetres, is made on the left side of your chest. The wires from the pacemaker are put into a vein and guided to your heart.",
          "The pacemaker is placed near your collarbone, under the skin and above the muscle. The cut is closed using stitches or glue.",
          "If you have a slow heartbeat, you may be offered a leadless pacemaker. This is put into a vein and guided directly to your heart, meaning there are no wires and no cuts to your chest. You can usually go home on the same day.",
        ],
      },
      {
        heading: "Going home",
        paragraphs: [
          "The NHS says you'll usually stay in hospital overnight. The British Heart Foundation's booklet says most people can go home the same day, but some people may need to stay longer.",
          "Before you go home, the pacemaker will be checked to make sure it's working. You'll feel tired for the first few days and the left side of your chest will be sore.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Contact your pacemaker clinic or NHS 111 if your wound gets more swollen, tender or redder, if blood, pus or clear liquid is leaking from your wound, if your temperature is very high or you feel hot, cold or shivery, or if any symptoms you had before the procedure come back or get worse.",
          "Call 999 or go to A&E immediately if you have severe difficulty breathing, your chest feels tight or heavy, or you have pain that spreads to your arms, back, neck and jaw. Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
        ],
      },
    ],
    helps: [
      "Organise transport to and from the hospital.",
      "Wear clothes that are loose and comfortable on the day.",
      "Take things to keep you busy, like books, podcasts and music.",
      "Keep your wound and stitches clean.",
      "Contact your pacemaker clinic or NHS 111 if your wound gets more swollen, tender or redder.",
    ],
    tryThisWeek: [
      "Organise your transport.",
      "Wear loose, comfortable clothes.",
      "Keep the wound clean.",
    ],
    ask: "Will I go home the same day, and who do I call if my wound looks wrong?",
    interactive: {
      kind: "timeline",
      title: "Your pacemaker day, step by step",
      steps: [
        { id: "assess", when: "Days or weeks before", title: "Assessment", points: ["Blood tests, a chest X-ray or echocardiogram.", "Tell the team about any medicines you take."] },
        { id: "numb", when: "On the day", title: "Local anaesthetic", points: ["Your chest is numbed; you're awake but should not feel pain.", "You may be given medicine to help you relax."] },
        { id: "leads", when: "About an hour in all", title: "Cut and leads", points: ["A small cut on the left side of your chest.", "The wires go into a vein and are guided to your heart."] },
        { id: "box", when: "Then", title: "The pacemaker in place", points: ["Placed near your collarbone, under the skin and above the muscle.", "The cut is closed with stitches or glue."] },
        { id: "home", when: "Before you leave", title: "Checked, then home", points: ["The pacemaker is checked to make sure it's working.", "Expect to feel tired and sore for the first few days."] },
      ],
    },
    sources: [NHS_PACEMAKER, BHF_PACEMAKERS, BHF_PM_BOOKLET, AA_PACEMAKER],
    quiz: {
      question: "How long does fitting a standard pacemaker usually take?",
      options: [{ text: "About an hour", right: true }, { text: "About ten minutes" }, { text: "A whole day" }],
      why: "There are different ways to fit a pacemaker, but it usually takes about an hour.",
    },
  },
  {
    id: "brady-medicines-review",
    kicker: "Medicines",
    question: "Which medicines can slow the heart?",
    hook: "Beta blockers slow down your heartbeat, and digoxin works by slowing down your heart rate. Do not stop one without talking to your doctor.",
    short: "Some medicines, such as beta blockers, slow your heart rate, and taking some types of medicine is one possible cause of heart block. Digoxin also works by slowing down your heart rate. Check with your doctor about the medicines you take, and do not stop one without talking to your doctor.",
    sections: [
      {
        heading: "Some medicines slow the heart",
        paragraphs: [
          "Some medicines can change your heart rate. Medicines such as beta blockers can help control your heart rate by slowing it down.",
          "A slow heart rate can also be caused by medicine, such as beta blockers. Taking some types of medicine is one possible cause of heart block.",
        ],
      },
      {
        heading: "Beta blockers",
        paragraphs: [
          "Beta blockers help treat problems affecting your heart and blood vessels by slowing down your heartbeat. They're often used to treat angina, high blood pressure, atrial fibrillation and some types of heart failure.",
          "Commonly used beta blockers include atenolol, bisoprolol, metoprolol, carvedilol, labetalol, propranolol and sotalol. They may not be suitable if you have heart block, where your heart beats too slowly or your heartbeat is not steady.",
        ],
      },
      {
        heading: "Digoxin",
        paragraphs: [
          "Digoxin is used to control some heart problems, such as irregular heartbeats including atrial fibrillation. It works by slowing down your heart rate and making your heart beat more strongly.",
          "You'll need regular blood tests while taking digoxin to check that your kidneys are healthy and you have the right amount of potassium, magnesium and calcium in your blood.",
        ],
      },
      {
        heading: "Changes are made with your doctor",
        paragraphs: [
          "Arrhythmia Alliance says bradycardia is commonly treated by addressing the underlying cause, and by stopping or changing any medication that might be affecting the heart rate.",
          "Do not stop taking bisoprolol without talking to your doctor because your condition may get worse. Talk to your doctor if you want to stop taking digoxin, as stopping suddenly can make your condition worse.",
          "If you have heart block due to medicines, you'll be monitored closely in hospital and given treatment to reverse the medicines.",
        ],
      },
      {
        heading: "Side effects to know",
        paragraphs: [
          "Common side effects of beta blockers include cold feet and hands, dizziness and tiredness. If you feel dizzy after taking a beta blocker, do not drive, ride a bike or use machinery until the dizziness stops.",
          "Tell your doctor if you have more than 2 of the common side effects of digoxin, as it means you could have too much digoxin in your blood. Call 999 or go to A&E now if you take digoxin and have a fast heart rate, shortness of breath, or feel dizzy or light-headed.",
        ],
      },
    ],
    helps: [
      "Check with your doctor about the medicine you're taking and how it affects your heart rate.",
      "Speak to your doctor if you notice a change in your heart rate when taking medicine.",
      "Do not stop taking a beta blocker such as bisoprolol without talking to your doctor.",
      "Before using beta blockers, tell your doctor if you have any medical conditions.",
      "Speak to your doctor or pharmacist if side effects are bothering you or do not go away.",
    ],
    tryThisWeek: [
      "Ask how your medicines affect your heart rate.",
      "Tell your doctor if your heart rate changes.",
      "Do not stop a medicine on your own.",
    ],
    ask: "Could any of my medicines be slowing my heart?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments with heart medicines",
      scenarios: [
        {
          id: "dizzy",
          situation: "You feel dizzy after taking your beta blocker and were about to drive.",
          options: [{ text: "Do not drive until the dizziness stops", best: true }, { text: "Drive slowly" }],
          why: "If you feel dizzy after taking a beta blocker, do not drive, ride a bike or use machinery until the dizziness stops.",
        },
        {
          id: "stop",
          situation: "You've read that your tablet can slow the heart, and you want to stop it.",
          options: [{ text: "Talk to your doctor first", best: true }, { text: "Stop it today" }],
          why: "Do not stop taking bisoprolol without talking to your doctor because your condition may get worse.",
        },
        {
          id: "digoxin",
          situation: "You take digoxin and suddenly have a fast heartbeat and feel light-headed.",
          options: [{ text: "Call 999 or go to A&E now", best: true }, { text: "Wait until your next appointment" }],
          why: "Call 999 or go to A&E now if you have a fast heart rate (palpitations), shortness of breath, feel dizzy or feel light-headed.",
        },
      ],
    },
    sources: [BHF_HEART_RATE, NHS_BETA, NHS_DIGOXIN, NHS_HEART_BLOCK, BHF_HEART_BLOCK, NHS_BISOPROLOL, AA_BRADY, NHS_DIGOXIN_SIDE, NHS_DIGOXIN_HOW],
    quiz: {
      question: "What should you do if you want to stop a beta blocker such as bisoprolol?",
      options: [{ text: "Talk to your doctor first", right: true }, { text: "Stop it straight away" }, { text: "Halve the dose yourself" }],
      why: "Do not stop taking bisoprolol without talking to your doctor because your condition may get worse.",
    },
  },
  {
    id: "brady-living-pacemaker",
    kicker: "Every day",
    question: "What can I do, and what should I avoid, with a pacemaker?",
    hook: "Phones, hobs, airports and scans. Most everyday things are fine kept 15cm away; a few devices are best avoided completely.",
    short: "Modern pacemakers are designed to let people return to a normal, active life. Most household electrical items are fine if kept at least 15cm (6 inches) from your pacemaker; keep 60cm from an induction hob, and avoid a few devices such as TENS machines. Carry your pacemaker identification card, and show it before any treatment and at airport security.",
    sections: [
      {
        heading: "A normal, active life",
        paragraphs: [
          "Modern pacemakers are very robust and are designed to let people return to a normal, active life.",
          "Most electrical items around your house, including microwaves, air fryers, food mixers and hairdryers, should not affect your pacemaker. Try to keep them at least 15cm (6 inches) from your pacemaker.",
        ],
      },
      {
        heading: "Phones, headphones and watches",
        paragraphs: [
          "Mobile phones and headphones are generally safe, but keep them 15cm (6 inches) away from your pacemaker. Use your phone on the opposite side of your body, and do not put it, or your headphones, in a chest pocket on the same side as your pacemaker.",
          "It is not currently clear whether it is safe to use smartwatches with a pacemaker. If you choose to wear one, keep it 15cm away from the side of your chest where the device was implanted, and keep the magnetic charger at least 30cm away.",
        ],
      },
      {
        heading: "Things to avoid",
        paragraphs: [
          "Avoid TENS machines, electronic body fat scales, magnetic mattress pads or pillows, abdominal stimulators and welding equipment with currents above 130 amps.",
          "If you have an induction hob, keep a distance of at least 60cm (2ft) between the stovetop and your pacemaker. If you feel dizzy when using an electrical device, move away from it and check your heartbeat has returned to normal.",
        ],
      },
      {
        heading: "Your card, airports and scans",
        paragraphs: [
          "Carry your pacemaker identification card in case of an emergency. Show it to any doctor, dentist or other healthcare professional before having a treatment.",
          "It's OK to go through airport security with a pacemaker, but they must not use a handheld metal detector over your pacemaker, and you can ask for a hand search instead.",
          "Most modern pacemakers are MRI compatible, but always tell healthcare staff you have a pacemaker, and show them your card, before any test or procedure.",
        ],
      },
      {
        heading: "Worries about your health",
        paragraphs: [
          "It's normal to feel worried or anxious about your health. If you feel anxious and sad a lot of the time, and it's affecting your daily life, talk to your GP.",
          "You can also refer yourself to the NHS for talking therapies, like cognitive behavioural therapy (CBT) or counselling.",
        ],
      },
    ],
    helps: [
      "Keep your phone 15cm (6 inches) away from your pacemaker and use it on the opposite side.",
      "Keep at least 60cm between an induction hob and your pacemaker.",
      "Carry your pacemaker identification card with you.",
      "At airport security, show your card; you can ask for a hand search instead.",
      "If in doubt about an appliance, check the manufacturer's safety advice or ask your pacing clinic.",
    ],
    tryThisWeek: [
      "Use your phone on the other side.",
      "Carry your pacemaker ID card.",
      "Ask your clinic about any appliance.",
    ],
    ask: "Are there any devices at home or at work I should keep away from?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments with a pacemaker",
      scenarios: [
        {
          id: "phone",
          situation: "You usually keep your phone in your shirt pocket, on the same side as your pacemaker.",
          options: [{ text: "Move it to the other side", best: true }, { text: "Leave it where it is" }],
          why: "Try to use your phone on the opposite side of your body to your pacemaker and do not put it in a chest pocket that is on the same side.",
        },
        {
          id: "hob",
          situation: "You're cooking on an induction hob.",
          options: [{ text: "Keep at least 60cm between you and the hob", best: true }, { text: "Lean over it as usual" }],
          why: "If you have an induction hob, keep a distance of at least 60cm (2ft) between the stovetop and your pacemaker.",
        },
        {
          id: "airport",
          situation: "You reach airport security and see a handheld metal detector.",
          options: [{ text: "Show your card and ask for a hand search", best: true }, { text: "Let them scan over your pacemaker" }],
          why: "They must not use a handheld metal detector over your pacemaker, and you can ask for a hand search instead.",
        },
        {
          id: "tens",
          situation: "A friend offers you a TENS machine for back pain.",
          options: [{ text: "Do not use it", best: true }, { text: "Use it on a low setting" }],
          why: "If you have a pacemaker, there are some devices that you should avoid using completely, including TENS machines.",
        },
      ],
    },
    sources: [BHF_PM_FAQ, BHF_PM_BOOKLET, NHS_PACEMAKER, AA_PACEMAKER],
    quiz: {
      question: "How far should you keep a mobile phone from your pacemaker?",
      options: [{ text: "At least 15cm (6 inches)", right: true }, { text: "It can rest on top of it" }, { text: "At least 5 metres" }],
      why: "It's safe to use a mobile phone, but you'll need to keep it more than 15cm (or 6 inches) away from your pacemaker.",
    },
  },
  {
    id: "brady-driving",
    kicker: "Driving",
    question: "When can I drive after a pacemaker?",
    hook: "Tell DVLA, tell your insurer, and leave the car for at least a week. Bus and lorry drivers wait longer.",
    short: "Tell DVLA if you have been fitted with a pacemaker, and tell your insurance company. The DVLA's guidance says car and motorcycle drivers must not drive for at least one week after a pacemaker implant or box change; bus and lorry drivers must not drive for at least 6 weeks. You do not need to tell DVLA about a battery (box) change.",
    sections: [
      {
        heading: "Telling DVLA",
        paragraphs: [
          "The DVLA's pacemakers and driving page says to tell DVLA if you have been fitted with a pacemaker.",
          "You do not need to tell DVLA if you have had a pacemaker battery change. This is also known as a box change.",
        ],
      },
      {
        heading: "How long to wait",
        paragraphs: [
          "The DVLA's guidance for medical professionals says car and motorcycle drivers must not drive for at least one week after pacemaker implant and pacemaker box change. Driving may resume after one week provided there is no other disqualifying condition.",
          "For bus and lorry drivers, it says they must not drive for at least 6 weeks and must notify DVLA. Driving may resume after 6 weeks provided there is no other disqualifying condition.",
        ],
      },
      {
        heading: "Checks and symptoms",
        paragraphs: [
          "The same guidance says regular device checks must be undertaken with your specialist health care professional.",
          "If you have symptoms that affect your ability to drive, like dizziness or fainting, you'll need to stop driving until they're under control. The DVLA's arrhythmia page says to tell DVLA about an arrhythmia if you have distracting or disabling symptoms, or if it means you might not be able to safely stop or control a vehicle.",
        ],
      },
      {
        heading: "Insurance, forms and fines",
        paragraphs: [
          "Tell your insurance company that you have a pacemaker.",
          "With a car or motorcycle licence, you can report your condition online or fill in form H1. With a bus, coach or lorry licence, fill in form VOCH1.",
          "You can be fined up to £1,000 if you do not tell DVLA about a medical condition or treatment that affects your driving. You may be prosecuted if you're involved in an accident as a result.",
        ],
      },
    ],
    helps: [
      "Tell DVLA if you have been fitted with a pacemaker, online or with form H1.",
      "Tell your insurance company that you have a pacemaker.",
      "Do not drive for at least the first week.",
      "Speak to your doctor about when you can start driving and if you have any questions about driving.",
      "If a seatbelt is painful, put a soft jumper or small pillow between your pacemaker and the seatbelt.",
    ],
    tryThisWeek: [
      "Tell DVLA about your pacemaker.",
      "Tell your insurer.",
      "Leave the car for at least a week.",
    ],
    ask: "When can I drive again, and is there anything else stopping me?",
    interactive: {
      kind: "scenarios",
      title: "Back behind the wheel?",
      scenarios: [
        {
          id: "car",
          situation: "You drive a car and had your first pacemaker fitted three days ago.",
          options: [{ text: "Wait at least one week, and tell DVLA", best: true }, { text: "Drive now if you feel fine" }],
          why: "Car and motorcycle drivers must not drive for at least one week after pacemaker implant. You also need to tell DVLA you have been fitted with a pacemaker.",
        },
        {
          id: "lorry",
          situation: "You drive a lorry for work.",
          options: [{ text: "Stop for at least 6 weeks and tell DVLA", best: true }, { text: "Return after one week" }],
          why: "Bus and lorry drivers must not drive for at least 6 weeks and must notify DVLA.",
        },
        {
          id: "box",
          situation: "You've just had your pacemaker battery changed.",
          options: [{ text: "No need to tell DVLA, but wait a week to drive a car", best: true }, { text: "Tell DVLA and stop for a year" }],
          why: "You do not need to tell DVLA if you have had a pacemaker battery change. Car drivers must not drive for at least one week after a pacemaker box change.",
        },
        {
          id: "dizzy",
          situation: "Weeks later, you still get dizzy spells.",
          options: [{ text: "Stop driving and speak to your doctor", best: true }, { text: "Keep driving short distances" }],
          why: "If you have symptoms that affect your ability to drive, like dizziness or fainting, you'll need to stop driving until they're under control.",
        },
      ],
    },
    sources: [GOV_PACEMAKER_DRIVING, GOV_DVLA_CARDIO, GOV_ARRHYTHMIA_DRIVING, NHS_PACEMAKER, BHF_PM_BOOKLET],
    quiz: {
      question: "Do you need to tell DVLA about a pacemaker battery (box) change?",
      options: [{ text: "No", right: true }, { text: "Yes, every time" }, { text: "Only if it's done at night" }],
      why: "You do not need to tell DVLA if you have had a pacemaker battery change. This is also known as a box change.",
    },
  },
  {
    id: "brady-activity",
    kicker: "Recovery",
    question: "When can I get active again after a pacemaker?",
    hook: "Light jobs in the first days, the arm kept below shoulder height for a few weeks, then back to the things you enjoy.",
    short: "Most people feel back to normal after a few days. Avoid lifting your arm above shoulder level on the pacemaker side, carrying heavy objects or doing vigorous exercise for four to six weeks, but keep the shoulder gently moving. Once you've recovered, usually after six weeks or your first check-up, most people can return to activities they enjoy.",
    sections: [
      {
        heading: "The first few days",
        paragraphs: [
          "Take it easy for the first few days and make sure you have enough rest. It's normal to feel tired afterwards, but most people find that they're back to normal after a few days.",
          "Doing light activities can help build up your confidence, such as making drinks and snacks, walking around the house or garden, and very light chores, like washing up.",
        ],
      },
      {
        heading: "Your arm and shoulder",
        paragraphs: [
          "Avoid lifting your arm above your shoulder level on the side you had your pacemaker fitted for four to six weeks. This includes hanging out washing, carrying children or pets, weights and lifting things above your shoulder.",
          "But it's important to keep your shoulder and arm moving. Gently rotate your shoulder at a low level and move your head from side to side to avoid stiffness in your neck, shoulder and arm.",
        ],
      },
      {
        heading: "Heavy jobs and sport",
        paragraphs: [
          "Do not carry heavy objects or do vigorous exercise for 4 to 6 weeks. For the first 6 weeks, avoid heavy housework, gardening, golfing, lifting heavy weights or DIY.",
          "Avoid contact sports, like rugby, football and boxing, because they can cause damage to your pacemaker.",
        ],
      },
      {
        heading: "Back to what you enjoy",
        paragraphs: [
          "Once you're recovered, staying active can help you live a happier and healthier life. This will usually be after six weeks or your first check-up at the pacemaker clinic.",
          "Most people should be able to return to activities they enjoy, such as the gym, cricket, golf, yoga and Pilates, climbing and swimming. In the long term, a pacemaker should make physical activity much easier.",
        ],
      },
      {
        heading: "Finding the right level",
        paragraphs: [
          "If you have heart or circulatory disease, check with your doctor or nurse what heart rate you should aim for when exercising.",
          "The talk test can help: if you can comfortably talk while being active, feel warm and are breathing a little more heavily than normal, you're moving at the right pace. See your doctor if you experience dizziness, palpitations or chest pain when exercising.",
        ],
      },
    ],
    helps: [
      "Do not try to do too much too soon, and listen to your body.",
      "Gently rotate your shoulder at a low level to avoid stiffness.",
      "Avoid lifting your arm above shoulder level on the pacemaker side for four to six weeks.",
      "Use the talk test to check you're exercising at the right pace.",
      "Ask the pacemaker clinic what you can and cannot do.",
    ],
    tryThisWeek: [
      "Take it slowly and listen to your body.",
      "Keep your shoulder gently moving.",
      "Try the talk test.",
    ],
    ask: "When can I lift my arm, and which activities are safe for me now?",
    interactive: {
      kind: "timeline",
      title: "Getting moving again",
      steps: [
        { id: "days", when: "First few days", title: "Rest and light jobs", points: ["Making drinks, walking around the house or garden, washing up.", "Do not try to do too much too soon."] },
        { id: "arm", when: "Four to six weeks", title: "Arm below shoulder height", points: ["No lifting your arm above shoulder level on the pacemaker side.", "Keep the shoulder gently moving at a low level."] },
        { id: "heavy", when: "Up to 6 weeks", title: "No heavy work", points: ["No heavy objects, vigorous exercise, heavy housework, gardening or DIY."] },
        { id: "back", when: "After six weeks or your first check-up", title: "Back to what you enjoy", points: ["The gym, golf, yoga, swimming and more.", "Contact sports stay off the list."] },
        { id: "long", when: "Long term", title: "Easier to be active", points: ["A pacemaker should make physical activity much easier.", "Use the talk test to find the right pace."] },
      ],
    },
    sources: [BHF_PM_BOOKLET, NHS_PACEMAKER, BHF_PM_FAQ, BHF_HR_EXERCISE],
    quiz: {
      question: "For how long should you avoid lifting your arm above shoulder level on the pacemaker side?",
      options: [{ text: "Four to six weeks", right: true }, { text: "One day" }, { text: "For the rest of your life" }],
      why: "Avoid lifting your arm above your shoulder level on the side you had your pacemaker fitted for four to six weeks.",
    },
  },
  {
    id: "brady-checks",
    kicker: "Follow-up",
    question: "What happens at pacemaker checks, and when the battery runs low?",
    hook: "A first check after a few weeks, then at least once a year. The battery gives months of warning before it needs changing.",
    short: "You'll have a check about 6 weeks after your pacemaker is fitted, then at least every 12 months at the pacemaker clinic, and some pacemakers can also be checked from home. A pacemaker will not run out without warning; changing the battery, a box change, is simpler than the first procedure and most people go home the same day.",
    sections: [
      {
        heading: "Your follow-up appointments",
        paragraphs: [
          "You'll have regular follow-up appointments: about 6 weeks after the procedure at the pacemaker clinic, 3 to 6 months after with your cardiologist or the cardiology team, and at least every 12 months after that at the pacemaker clinic.",
          "It's important to go to your appointment, even if you feel well. The hospital team will check your pacemaker is working.",
        ],
      },
      {
        heading: "Checks from home",
        paragraphs: [
          "Pacemakers can have transmitters that automatically send information about the heart to a doctor, arrhythmia nurse or cardiac physiologist through a remote monitoring device.",
          "Keep the remote monitor switched on; it does not use much energy. It lets your specialist check how the device is working, its battery levels and any heart rhythm changes.",
        ],
      },
      {
        heading: "How long the battery lasts",
        paragraphs: [
          "The NHS says the battery usually lasts 6 to 7 years. The British Heart Foundation's booklet says 6 to 10 years.",
          "Your pacemaker will not run out without warning. The device triggers an alert when it has about 3 to 6 months of life left, giving you plenty of time to schedule a battery change.",
        ],
      },
      {
        heading: "A box change",
        paragraphs: [
          "Changing the battery is simpler than when your pacemaker is fitted. You'll be given local anaesthetic, so you'll be awake but should not feel any pain.",
          "Your pacemaker box will be removed, but the leads stay in place. A new box is put in your chest, and most people go home the same day.",
        ],
      },
      {
        heading: "Between checks",
        paragraphs: [
          "If you experience any new symptoms that you feel may be related to your pacemaker, such as dizziness or palpitations, talk to your GP or pacing clinic so your device can be checked.",
          "If you're not sure when your next appointment is, call your cardiology department. The number should be on your hospital letter.",
        ],
      },
    ],
    helps: [
      "Go to your appointment, even if you feel well.",
      "Keep your remote monitor switched on.",
      "Call your cardiology department if you're not sure when your next appointment is.",
      "Talk to your GP or pacing clinic about any new symptoms, such as dizziness or palpitations.",
      "Keep your pacemaker identification card with you.",
    ],
    tryThisWeek: [
      "Keep every appointment.",
      "Leave the home monitor switched on.",
      "Report new dizziness or palpitations.",
    ],
    ask: "When is my next check, and can my pacemaker be monitored from home?",
    interactive: {
      kind: "timeline",
      title: "A pacemaker's check-ups",
      steps: [
        { id: "first", when: "About 6 weeks", title: "First clinic check", points: ["At the pacemaker clinic.", "Go even if you feel well."] },
        { id: "cardio", when: "3 to 6 months", title: "Cardiology review", points: ["With your cardiologist or the cardiology team."] },
        { id: "yearly", when: "At least every 12 months", title: "Regular checks", points: ["At the pacemaker clinic, and from home if you have remote monitoring."] },
        { id: "alert", when: "About 3 to 6 months left", title: "Battery alert", points: ["Plenty of time to schedule a battery change."] },
        { id: "box", when: "When the battery runs low", title: "Box change", points: ["Local anaesthetic; the leads stay in place.", "Most people go home the same day."] },
      ],
    },
    sources: [NHS_PACEMAKER, BHF_PM_BOOKLET, BHF_PM_FAQ, AA_PACEMAKER, AA_REMOTE],
    quiz: {
      question: "Can a pacemaker battery run out without warning?",
      options: [{ text: "No, there is plenty of warning", right: true }, { text: "Yes, often" }, { text: "Only if you use a microwave" }],
      why: "Your pacemaker will not run out without warning. The device triggers an alert when it has about 3 to 6 months of life left.",
    },
  },
];
