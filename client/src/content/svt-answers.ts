import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Supraventricular tachycardia (SVT) page's pieces
// (content/library-conditions/heart-more.ts `svt`). Every sentence was written from wording checked on
// 21 October 2026 on the pages listed under each answer's `sources`; nothing is added that those pages do
// not say. Much of it comes from the NHS SVT page, the British Heart Foundation's arrhythmia, test and
// treatment pages, and the Arrhythmia Alliance's SVT page and leaflets (patient information reviewed June
// 2025; catheter ablation booklet reviewed June 2025; Living with SVT questions published June 2023), and is
// credited to them. Driving rules are DVLA's own. General information only; it never replaces what a
// person's own team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const bhf = (label: string, path: string): LearnSource => ({ label: `British Heart Foundation: ${label}`, url: `https://www.bhf.org.uk/informationsupport/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_SVT = nhs("Supraventricular tachycardia (SVT)", "conditions/supraventricular-tachycardia-svt/");
const NHS_PALPITATIONS = nhs("Heart palpitations", "symptoms/heart-palpitations/");
const NHS_ARRHYTHMIA = nhs("Heart rhythm problems (arrhythmia)", "conditions/arrhythmia/");
const NHS_ECG = nhs("Electrocardiogram (ECG)", "tests-and-treatments/electrocardiogram/");
const NHS_BETA_BLOCKERS = nhs("Beta blockers", "medicines/beta-blockers/");
const NHS_VERAPAMIL = nhs("About verapamil", "medicines/verapamil/about-verapamil/");
const NHS_999 = nhs("When to call 999", "nhs-services/urgent-and-emergency-care-services/when-to-call-999/");
const NHS_111 = nhs("When to use NHS 111 online or call 111", "nhs-services/urgent-and-emergency-care-services/when-to-use-111/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const BHF_ARRHYTHMIAS = bhf("Arrhythmias", "conditions/arrhythmias");
const BHF_PALPITATIONS = bhf("Heart palpitations", "conditions/palpitations");
const BHF_PALPITATIONS_WORRY = bhf("When to worry about heart palpitations", "heart-matters-magazine/medical/ask-the-experts/when-to-worry-about-heart-palpitations");
const BHF_PALPITATIONS_NIGHT = bhf("Why do I get heart palpitations at night?", "heart-matters-magazine/medical/ask-the-experts/heart-palpitations-at-night");
const BHF_ECG = bhf("ECG", "tests/ecg");
const BHF_LOOP = bhf("Implantable loop recorders", "tests/implantable-loop-recorders");
const BHF_EP = bhf("Electrophysiology (EP) study", "tests/electrophysiological-studies");
const BHF_ABLATION = bhf("Ablation", "treatments/ablation");
const BHF_CARDIOVERSION = bhf("Cardioversion", "treatments/cardioversion");
const BHF_CAFFEINE = bhf("Is caffeine bad for you? How much is too much?", "heart-matters-magazine/nutrition/ask-the-expert/how-much-caffeine");
const BHF_ALCOHOL = bhf("Alcohol and heart disease: what are the risks?", "heart-matters-magazine/medical/effects-of-alcohol-on-your-heart");
const BHF_SAFE_EXERCISE = bhf("Exercising with a heart condition: finding a safe level for you", "heart-matters-magazine/activity/finding-safe-exercise-limits");
const BHF_ANXIETY = bhf("How to deal with anxiety when you have a heart problem", "heart-matters-magazine/wellbeing/how-to-deal-with-anxiety");
const BHF_WORK = bhf("Work with a heart condition", "support/practical-support/work-and-a-heart-condition");
const BHF_HELPLINE = bhf("Heart Helpline", "heart-helpline");
const AA_SVT: LearnSource = { label: "Arrhythmia Alliance: Supraventricular Tachycardia (SVT)", url: "https://heartrhythmalliance.org/aa/uk/supraventricular-tachycardia-svt" };
const AA_LEAFLET: LearnSource = { label: "Arrhythmia Alliance: Supraventricular Tachycardia (SVT) patient information (leaflet)", url: "https://api.heartrhythmalliance.org/files/download/30e80816107caf8f77829809cd2a6564" };
const AA_FAQ: LearnSource = { label: "Arrhythmia Alliance: Living with SVT, frequently asked questions (leaflet)", url: "https://api.heartrhythmalliance.org/files/download/fff2227a655c457e6afc7a710339de9c" };
const AA_ABLATION: LearnSource = { label: "Arrhythmia Alliance: Catheter ablation for SVT (booklet)", url: "https://api.heartrhythmalliance.org/files/download/8594382aab558c80cecce99a02268ab0" };
const GOV_TACHYCARDIA = gov("Tachycardia and driving", "tachycardia-and-driving");
const GOV_ABLATION = gov("Catheter ablation and driving", "catheter-ablation-and-driving");
const GOV_ACCESS_TO_WORK = gov("Access to Work", "access-to-work");

export const svtAnswers: LearnArticle[] = [
  {
    id: "svt-what-it-is",
    kicker: "Understanding",
    question: "What is SVT?",
    hook: "The heart suddenly races, then slows down just as suddenly. A fault in the heart's electrical wiring is behind it.",
    short: "Supraventricular tachycardia (SVT) is a condition where your heart suddenly beats much faster than normal. It happens when the electrical system that controls your heart rhythm is not working properly. It's not usually serious, but some people may need treatment.",
    sections: [
      {
        heading: "A heart that suddenly races",
        paragraphs: [
          "Supraventricular tachycardia (SVT) is a condition where your heart suddenly beats much faster than normal. It's not usually serious, but some people may need treatment.",
          "A normal resting heart rate is 60 to 100 beats per minute. With SVT your heart rate suddenly goes above 100 beats per minute. The Arrhythmia Alliance says that during SVT the heart usually beats 150 to 220 times a minute.",
        ],
      },
      {
        heading: "The heart's wiring",
        paragraphs: [
          "The heart has two upper chambers, called the atria, and two lower chambers, called the ventricles. Normally it is driven by the sinus node, a clump of specialised cells in the atria that sends out electrical impulses.",
          "These impulses spread through the atria and then into the ventricles through a connecting area of tissue, the AV node.",
        ],
      },
      {
        heading: "Where the short circuit comes in",
        paragraphs: [
          "SVT happens when the electrical system that controls your heart rhythm is not working properly. This causes your heart to suddenly beat much faster. It can then slow down abruptly.",
          "Sometimes the electrical signals travel in a different direction because of extra electrical connections, known as pathways. Often these pathways are present at birth, but may only start to cause symptoms in adulthood.",
          "Most types of SVT are caused by electrical impulses not travelling normally from the top chambers of your heart to the bottom chambers.",
        ],
      },
      {
        heading: "Is it dangerous?",
        paragraphs: [
          "SVT is rarely life threatening. The Arrhythmia Alliance says it is not life threatening, but can cause unpleasant symptoms and interfere with your quality of life.",
          "Most people with SVT do not need treatment. When it is recommended, treatment may include specific actions or movements, medicines, a heart procedure, or a device to control the heartbeat.",
        ],
      },
    ],
    helps: [
      "See a GP if you keep getting a fast heartbeat.",
      "Ask whether you need a test, such as an electrocardiogram (ECG), to find out what's going on.",
      "Call 999 if you have a fast heartbeat with shortness of breath, chest pain or feeling faint.",
      "Call the British Heart Foundation Heart Helpline to speak to a cardiac nurse.",
    ],
    tryThisWeek: [
      "See a GP if fast heartbeats keep coming.",
      "Ask about an ECG.",
      "Know when to call 999.",
    ],
    ask: "What type of SVT do I have, and what is causing it?",
    interactive: {
      kind: "flip-cards",
      title: "The heart's wiring, turned over",
      intro: "Tap a card to see what each part does.",
      cards: [
        { id: "sinus", front: "Sinus node", when: "In the upper chambers", back: "The heart's natural pacemaker. A clump of specialised cells that sends out electrical impulses." },
        { id: "atria", front: "Atria", when: "The two upper chambers", back: "The impulses spread through the atria first. SVT is a fast rhythm that begins up here." },
        { id: "av-node", front: "AV node", when: "Between upper and lower chambers", back: "A gatekeeper that passes the electrical signals from the atria down to the ventricles." },
        { id: "ventricles", front: "Ventricles", when: "The two lower chambers", back: "They pump blood out through the aorta and to the lungs." },
        { id: "pathway", front: "An extra pathway", when: "Often present at birth", back: "An extra electrical connection that lets signals travel the wrong way, so the heart suddenly starts to race." },
      ],
    },
    sources: [NHS_SVT, AA_SVT, AA_LEAFLET, BHF_ARRHYTHMIAS, AA_ABLATION],
    quiz: {
      question: "What is a normal resting heart rate?",
      options: [{ text: "60 to 100 beats per minute", right: true }, { text: "150 to 220 beats per minute" }, { text: "20 to 40 beats per minute" }],
      why: "A normal resting heart rate is 60 to 100 beats per minute. With SVT your heart rate suddenly goes above 100 beats per minute.",
    },
  },
  {
    id: "svt-symptoms",
    kicker: "Symptoms",
    question: "What does an SVT episode feel like?",
    hook: "A heartbeat that suddenly races for minutes, sometimes hours. For some people, chest pain, dizziness or breathlessness come with it.",
    short: "Having SVT means your heart suddenly beats faster. An episode usually lasts for a few minutes, but can sometimes last for several hours. You may get no other symptoms, but some people also have chest pain, feel weak, breathless, lightheaded, dizzy or tired.",
    sections: [
      {
        heading: "A sudden racing heart",
        paragraphs: [
          "Having SVT means your heart suddenly beats faster. An episode usually lasts for a few minutes, but can sometimes last for several hours.",
          "Episodes can happen several times a day or once a year. The fast heartbeat may come and go suddenly.",
        ],
      },
      {
        heading: "What else you might feel",
        paragraphs: [
          "You may get no other symptoms, but sometimes people also have chest pain or discomfort, feel weak, breathless, lightheaded or dizzy, or feel tired.",
          "The Arrhythmia Alliance also lists pounding or fluttering feelings in the chest, a pounding sensation in the neck, sweating and fainting. Some people with SVT do not have any symptoms.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "SVT can happen at any age, but often starts for the first time in children and young adults. Many people have their first symptoms between 25 and 40 years old.",
          "It can happen when you're resting or doing exercise.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "See a GP if you keep getting a fast heartbeat. It's important to get it checked out.",
          "Call 999 if you've been diagnosed with SVT and your episode has lasted longer than usual, or if you have a fast heartbeat with shortness of breath, chest pain or feeling faint. You need to go to hospital for treatment immediately. Do not drive yourself to A&E.",
        ],
      },
    ],
    helps: [
      "See a GP if you keep getting a fast heartbeat.",
      "Write down when you get palpitations, what you were doing at the time, and any other symptoms you noticed.",
      "Call 999 if you have a fast heartbeat with shortness of breath, chest pain or feeling faint.",
      "Call 999 if you've been diagnosed with SVT and your episode has lasted longer than usual.",
      "Do not drive yourself to A&E.",
    ],
    tryThisWeek: [
      "See a GP if it keeps happening.",
      "Keep a symptom diary.",
      "Know when to call 999.",
    ],
    ask: "How long do my episodes usually last, and what should I do if one lasts longer?",
    interactive: {
      kind: "signs",
      title: "What have you noticed?",
      intro: "Tick anything you have felt during an episode. The ones you tick make a list to take to your GP.",
      signs: [
        "A heartbeat that suddenly races",
        "Pounding or fluttering in the chest",
        "A pounding feeling in the neck",
        "Chest pain or discomfort",
        "Feeling weak or tired",
        "Breathless",
        "Lightheaded or dizzy",
        "Sweating",
        "Fainting",
      ],
      after: "See a GP if you keep getting a fast heartbeat. Call 999 if you have a fast heartbeat with shortness of breath, chest pain or feeling faint, or if a diagnosed episode has lasted longer than usual.",
      copyHeading: "What I have felt during an episode",
    },
    sources: [NHS_SVT, AA_SVT, BHF_PALPITATIONS_NIGHT],
    quiz: {
      question: "How long does an SVT episode usually last?",
      options: [{ text: "A few minutes", right: true }, { text: "Several weeks" }, { text: "A whole year" }],
      why: "An episode usually lasts for a few minutes, but can sometimes last for several hours.",
    },
  },
  {
    id: "svt-triggers",
    kicker: "Triggers",
    question: "What can set off an SVT episode?",
    hook: "Caffeine, alcohol and drugs can bring on an episode. But often nothing obvious sets it off at all.",
    short: "SVT can be triggered by caffeine, alcohol or drugs, but often there's no obvious trigger. Dehydration, stress and tiredness can play a part too. Cutting down on caffeine or alcohol, cutting back on smoking and getting enough rest can reduce your chances of having episodes.",
    sections: [
      {
        heading: "Common triggers",
        paragraphs: [
          "SVT can be triggered by caffeine, alcohol or drugs, but often there's no obvious trigger.",
          "The Arrhythmia Alliance says these fast rhythms can be made worse by dehydration, alcohol, caffeine and illness that is not to do with the heart.",
        ],
      },
      {
        heading: "Stress, tiredness and stimulants",
        paragraphs: [
          "Stress can cause panic and anxiety. Stimulants such as caffeine, dehydration and fatigue can also stimulate the heart.",
        ],
      },
      {
        heading: "Other things that bring on palpitations",
        paragraphs: [
          "The British Heart Foundation lists other causes of palpitations, including smoking or vaping, recreational drugs, intense exercise, certain medicines, hormonal changes, and triggering foods, such as spicy or rich food.",
          "Some medicines are known to cause palpitations in some people, including cold and flu medicines containing decongestants and painkillers with added caffeine. Always mention any new palpitations to your doctor or pharmacist.",
        ],
      },
      {
        heading: "Cutting down your chances",
        paragraphs: [
          "You can make changes to your lifestyle to reduce your chances of having episodes, such as cutting down on the amount of caffeine or alcohol you drink, stopping or cutting back on smoking, and making sure you get enough rest.",
          "Try keeping a symptom diary so you can recognise and avoid triggers.",
        ],
      },
    ],
    helps: [
      "Cut down on the amount of caffeine or alcohol you drink.",
      "Stop or cut back on smoking.",
      "Make sure you get enough rest.",
      "Keep a symptom diary so you can recognise and avoid triggers.",
      "Mention any new palpitations to your doctor or pharmacist.",
    ],
    tryThisWeek: [
      "Cut down on caffeine or alcohol.",
      "Get enough rest.",
      "Keep a symptom diary.",
    ],
    ask: "Could any of my medicines be bringing on my episodes?",
    interactive: {
      kind: "risk-check",
      title: "Which of these come before yours?",
      intro: "Tick any that seem to come before an episode for you. Often there is no obvious trigger at all.",
      items: [
        { id: "caffeine", label: "Caffeine", note: "Cutting down on the amount of caffeine you drink can reduce your chances of having episodes.", changeable: true },
        { id: "alcohol", label: "Alcohol", note: "Cutting down on the amount of alcohol you drink can reduce your chances of having episodes.", changeable: true },
        { id: "smoking", label: "Smoking or vaping", note: "Stopping or cutting back on smoking can reduce your chances of having episodes.", changeable: true },
        { id: "drugs", label: "Recreational drugs", note: "SVT can be triggered by drugs.", changeable: true },
        { id: "tired", label: "Tiredness", note: "Fatigue can stimulate the heart. Make sure you get enough rest.", changeable: true },
        { id: "water", label: "Dehydration", note: "Dehydration can stimulate the heart and make these fast rhythms worse.", changeable: true },
        { id: "stress", label: "Stress", note: "Stress can cause panic and anxiety, and palpitations can be set off by stress.", changeable: true },
        { id: "medicines", label: "Some medicines", note: "Cold and flu medicines with decongestants can cause palpitations. Mention new palpitations to your doctor or pharmacist.", changeable: true },
        { id: "illness", label: "Another illness", note: "Illness that is not to do with the heart can make these fast rhythms worse.", changeable: false },
      ],
    },
    sources: [NHS_SVT, AA_SVT, AA_LEAFLET, AA_FAQ, BHF_PALPITATIONS, BHF_PALPITATIONS_WORRY],
    quiz: {
      question: "Does every SVT episode have an obvious trigger?",
      options: [{ text: "No, often there's no obvious trigger", right: true }, { text: "Yes, always caffeine" }, { text: "Yes, always exercise" }],
      why: "SVT can be triggered by caffeine, alcohol or drugs, but often there's no obvious trigger.",
    },
  },
  {
    id: "svt-tests",
    kicker: "Tests",
    question: "How do an ECG and heart monitors find SVT?",
    hook: "The trick is catching the heart while it races. That can mean a monitor worn for days, or one placed under the skin.",
    short: "An ECG records the electrical activity of your heart, including the rate and rhythm. If you are having SVT during the ECG, a clear diagnosis can be made, but episodes come and go. So you may wear a portable monitor for a day or more, or have a small recorder put under the skin.",
    sections: [
      {
        heading: "Catching the rhythm",
        paragraphs: [
          "An ECG records the electrical activity of your heart, including the rate and rhythm. It's usually quick and painless.",
          "If you are having SVT during the ECG, a clear diagnosis can be made. But it is sometimes not possible to get a full ECG done during the SVT, because an ECG can only be done in places like the hospital or the GP surgery.",
        ],
      },
      {
        heading: "Wearing a monitor",
        paragraphs: [
          "A portable ECG is a small recorder you wear on a belt around your waist. You'll usually be asked to wear it for 24 to 48 hours, but it can be up to 7 days.",
          "You cannot have a bath or shower while wearing the portable ECG recorder.",
          "There are also monitors like large plasters that are attached to the chest, and some can be worn for several weeks. You can shower while wearing them.",
        ],
      },
      {
        heading: "When episodes are rare",
        paragraphs: [
          "If you have symptoms that do not happen often, your doctor might suggest an implantable loop recorder. It is a small device put under the skin, usually in your chest, that records your heart rhythm for up to four and a half years.",
          "Having one fitted takes about 15 minutes and should not hurt. You'll be given local anaesthetic to numb the area.",
        ],
      },
      {
        heading: "Devices of your own",
        paragraphs: [
          "Some people buy devices to take a heart rhythm tracing themselves. Some work with smartphones, some are stand-alone devices, and some watches can now record an ECG trace.",
          "The Arrhythmia Alliance recommends devices that have been approved by NICE in the UK, and suggests checking with your doctor first.",
        ],
      },
      {
        heading: "A closer look: the EP study",
        paragraphs: [
          "An electrophysiology study, or EP study, looks at your heart's electrical activity in more detail. It is used to diagnose abnormal heart rhythms and is often used alongside ablation treatment.",
          "An EP study usually takes about 2 to 3 hours but can take longer.",
        ],
      },
    ],
    helps: [
      "Wear a top that's easy to take on and off for an ECG.",
      "Do not put body lotions, oils or talcum powder on your skin before the test.",
      "Let the team know if you have sensitive skin, as some electrodes can be very sticky.",
      "If you've not heard about your results after a few weeks, contact the doctor who referred you.",
      "Ask the team which form of monitoring is best for recording your rhythm when symptoms happen.",
    ],
    tryThisWeek: [
      "Wear an easy top to your ECG.",
      "Skip lotions before the test.",
      "Chase results after a few weeks.",
    ],
    ask: "Which monitor is most likely to catch my episodes?",
    interactive: {
      kind: "flip-cards",
      title: "The tests, turned over",
      intro: "Tap a card to see what each test does.",
      cards: [
        { id: "ecg", front: "Resting ECG", when: "Usually the first test", back: "Records the electrical activity of your heart, including the rate and rhythm. Quick and painless." },
        { id: "portable", front: "Portable ECG", when: "Usually 24 to 48 hours", back: "A small recorder on a belt, worn for up to 7 days. You cannot bath or shower while wearing it." },
        { id: "patch", front: "Patch monitor", when: "Up to several weeks", back: "Like a large plaster on the chest. You can shower while wearing it." },
        { id: "ilr", front: "Implantable loop recorder", when: "When symptoms are rare", back: "Put under the skin of your chest. Records your heart rhythm for up to four and a half years." },
        { id: "ep", front: "EP study", when: "Often alongside ablation", back: "Looks at your heart's electrical activity in more detail. Usually takes about 2 to 3 hours." },
        { id: "own", front: "Your own device", when: "At home", back: "Some phone devices and watches record an ECG trace. Check with your doctor first." },
      ],
    },
    sources: [NHS_ECG, AA_LEAFLET, BHF_ECG, BHF_LOOP, BHF_EP, AA_FAQ],
    quiz: {
      question: "How long is a portable ECG usually worn?",
      options: [{ text: "24 to 48 hours", right: true }, { text: "Ten minutes" }, { text: "A full year" }],
      why: "You'll usually be asked to wear it for 24 to 48 hours, but it can be up to 7 days.",
    },
  },
  {
    id: "svt-stopping-episode",
    kicker: "Self-help",
    question: "How can I stop an SVT episode myself?",
    hook: "Simple tricks that change the body's nerve reflexes for a few seconds can stop many fast rhythms, without a trip to hospital.",
    short: "Fast heart rhythms that come on suddenly can often be stopped by simple tricks called physiological manoeuvres, such as the Valsalva manoeuvre. Do them lying or sitting down. Your doctor may be able to recommend which ones to use, and if you feel unwell when SVT begins, call 999 without delay.",
    sections: [
      {
        heading: "Simple tricks",
        paragraphs: [
          "Fast heart rhythms that come on suddenly can often be stopped by some simple tricks called physiological manoeuvres. These alter nerve reflexes in the body for a few seconds.",
          "The Arrhythmia Alliance says they are easy and safe to perform in any setting, and may stop the fast rhythm and return the heart to normal. Your doctor may also be able to recommend some simple techniques to help stop episodes when they happen.",
        ],
      },
      {
        heading: "The Valsalva manoeuvre",
        paragraphs: [
          "This is a way of briefly increasing the pressure inside the chest. Lie or sit down, take a breath in and then strain, as if you were constipated and trying to open your bowels.",
          "Some people get the same effect by taking a breath in, placing the tip of their thumb in their mouth and blowing hard against it. Whichever method you use, try to do it for a count of about twenty seconds and then breathe out normally.",
          "Do this lying or sitting down. If you try it standing up, it may make you feel very faint. If it does not work the first time, try again for a longer period if you can.",
        ],
      },
      {
        heading: "Other things people try",
        paragraphs: [
          "The diving reflex slightly slows the heart. Fill a sink or bowl with cold water and put your face fully into the water for a second or two.",
          "Sometimes a cough, or just taking a deep breath as soon as the fast rhythm starts, is enough.",
          "The Arrhythmia Alliance also describes lying flat on the floor with your legs raised on a chair, then taking a deep breath, pushing down and holding for five seconds, and repeating.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "If one of these works, tell your doctor about it, as it helps to show the type of fast rhythm that was causing the problem. These techniques work well for many fast regular heart rhythms, but are usually not effective for fast irregular rhythms, such as atrial fibrillation.",
          "If your symptoms get worse, or the method you use no longer works, talk to your GP about seeing a heart rhythm specialist.",
        ],
      },
      {
        heading: "When not to wait",
        paragraphs: [
          "If you feel unwell when SVT begins, for example you have bad chest pain, feel very faint or find breathing difficult, call 999 for an ambulance without delay.",
          "Call 999 if you've been diagnosed with SVT and your episode has lasted longer than usual.",
        ],
      },
    ],
    helps: [
      "Ask your doctor which simple techniques to use to stop an episode.",
      "Do the Valsalva manoeuvre lying or sitting down, not standing up.",
      "Tell your doctor if one of the techniques works for you.",
      "Keep a record of how often your SVT happens.",
      "Call 999 without delay if you have bad chest pain, feel very faint or find breathing difficult.",
    ],
    tryThisWeek: [
      "Ask which techniques suit you.",
      "Do them lying or sitting down.",
      "Keep a record of episodes.",
    ],
    ask: "Which manoeuvres should I try to stop an episode, and how long should I try before getting help?",
    interactive: {
      kind: "timeline",
      title: "The Valsalva manoeuvre, step by step",
      steps: [
        { id: "position", when: "First", title: "Lie or sit down", points: ["Do it lying or sitting down.", "Standing up may make you feel very faint."] },
        { id: "strain", when: "Then", title: "Breathe in and strain", points: ["Take a breath in, then strain as if trying to open your bowels.", "Or blow hard against the tip of your thumb."] },
        { id: "count", when: "About twenty seconds", title: "Hold, then breathe out", points: ["Keep going for a count of about twenty seconds.", "Then breathe out normally. If it works, it usually does so just after breathing out."] },
        { id: "again", when: "If it has not worked", title: "Try again", points: ["Try again for a longer period if you can.", "Tell your doctor about any technique that works."] },
        { id: "help", when: "If you feel unwell", title: "Call 999", points: ["Bad chest pain, feeling very faint or difficult breathing: call 999 without delay.", "Call 999 if an episode has lasted longer than usual."] },
      ],
    },
    sources: [AA_LEAFLET, NHS_SVT, AA_FAQ],
    quiz: {
      question: "Why should the Valsalva manoeuvre be done lying or sitting down?",
      options: [{ text: "Standing may make you feel very faint", right: true }, { text: "It only works at night" }, { text: "It needs a machine" }],
      why: "It is important that you do this lying or sitting down. If you try it standing up, it may make you feel very faint.",
    },
  },
  {
    id: "svt-medicines",
    kicker: "Treatment",
    question: "Which medicines are used for SVT?",
    hook: "Some medicines stop an episode in hospital. Others are taken to keep episodes away, every day or only when one starts.",
    short: "If your episodes only last a few minutes and do not bother you, you may not need treatment. If you keep having long episodes, medicines can be given in hospital as tablets or through a vein. Medicines such as beta blockers, verapamil, flecainide or propafenone may be used to prevent episodes.",
    sections: [
      {
        heading: "Not everyone needs them",
        paragraphs: [
          "If your episodes of SVT only last a few minutes and do not bother you, you may not need treatment.",
          "Medicines may be used to treat SVT. Your doctor will discuss with you the most commonly used medicines, and their benefits and side effects.",
        ],
      },
      {
        heading: "Medicines in hospital",
        paragraphs: [
          "You may need treatment in hospital if you keep having long episodes. This may include medicines to control the episodes, given as tablets or through a vein. The Arrhythmia Alliance also mentions a nasal spray.",
          "Using medicine to get the heart back to a normal rhythm is called pharmacological, or chemical, cardioversion. You may swallow the medicine or receive it through an intravenous infusion (IV), directly into your veins. The Arrhythmia Alliance names adenosine as one of these medicines.",
        ],
      },
      {
        heading: "Medicines to prevent episodes",
        paragraphs: [
          "For people with more regular episodes, treatment options include medicines such as flecainide or propafenone.",
          "Beta blockers slow down your heartbeat. The NHS lists them among the medicines that control the rate and rhythm of your heartbeat.",
          "Verapamil is a calcium channel blocker used to treat irregular heart rhythms. It relaxes the heart and slows down the heart rate. It may take 1 to 2 weeks to work fully.",
        ],
      },
      {
        heading: "Every day, or only when needed",
        paragraphs: [
          "Some medicines are prescribed to take every day, and some can be a pill in the pocket. Check with your doctor which applies to you.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Common side effects of beta blockers can include cold hands and feet, dizziness, tiredness and insomnia. If you feel dizzy after taking a beta blocker, do not drive, ride a bike or use machinery until the dizziness stops.",
          "If side effects are bothering you or do not go away, speak to your doctor or pharmacist for advice.",
        ],
      },
    ],
    helps: [
      "Ask your doctor about the benefits and side effects of each medicine.",
      "Check with your doctor whether your medicine is taken every day or as a pill in the pocket.",
      "Speak to your doctor or pharmacist if side effects are bothering you or do not go away.",
      "Do not eat grapefruit or drink grapefruit juice while you're taking verapamil.",
      "Check the leaflet that comes with your medicine to see if there is anything to avoid while taking it.",
    ],
    tryThisWeek: [
      "Ask about benefits and side effects.",
      "Check how your medicine is taken.",
      "Read the medicine leaflet.",
    ],
    ask: "Should I take a medicine every day, or only when an episode starts?",
    interactive: {
      kind: "flip-cards",
      title: "SVT medicines, turned over",
      intro: "Tap a card to see what each medicine does.",
      cards: [
        { id: "beta", front: "Beta blockers", when: "To control rate and rhythm", back: "Slow down your heartbeat. Common side effects include cold hands and feet, dizziness and tiredness." },
        { id: "verapamil", front: "Verapamil", when: "For irregular heart rhythms", back: "A calcium channel blocker that relaxes the heart and slows the heart rate. Avoid grapefruit." },
        { id: "flecainide", front: "Flecainide or propafenone", when: "For more regular episodes", back: "Medicines the Arrhythmia Alliance lists as options for people with more regular episodes." },
        { id: "hospital", front: "Medicine through a vein", when: "In hospital, for long episodes", back: "Given to control an episode or get the heart back to a normal rhythm. Adenosine is one example." },
        { id: "pocket", front: "Pill in the pocket", when: "Only when needed", back: "Some medicines can be a pill in the pocket. Check with your doctor which applies to you." },
      ],
    },
    sources: [NHS_SVT, AA_SVT, AA_LEAFLET, AA_FAQ, NHS_BETA_BLOCKERS, NHS_VERAPAMIL, BHF_CARDIOVERSION, NHS_ARRHYTHMIA],
    quiz: {
      question: "How do beta blockers help?",
      options: [{ text: "They slow down your heartbeat", right: true }, { text: "They thin the blood" }, { text: "They speed up the heart" }],
      why: "Beta blockers can help treat problems affecting your heart and blood vessels by slowing down your heartbeat.",
    },
  },
  {
    id: "svt-ablation",
    kicker: "Treatment",
    question: "What is catheter ablation for SVT?",
    hook: "Thin tubes reach the heart, find the faulty spot, and treat it with heat or cold. For most people, it cures the problem.",
    short: "Catheter ablation is a treatment where thin tubes are placed through a vein or artery into your heart, and heat or freezing is used to correct the problem with the electrical system. The NHS says this permanently cures the problem in most people. It may be offered as an alternative to medicines for some people with SVT.",
    sections: [
      {
        heading: "A procedure that can cure it",
        paragraphs: [
          "Catheter ablation is a treatment where thin tubes are placed through a vein or artery into the affected area of your heart, and heat or freezing is used to correct the problem with the electrical system. The NHS says this permanently cures the problem in most people.",
          "It aims to cure the abnormal heart rhythm by destroying the area of heart cells responsible, without affecting the rest of the heart.",
        ],
      },
      {
        heading: "Who it is for, and the risks",
        paragraphs: [
          "Catheter ablation may be offered as an alternative to medicines for some people with SVT. It is often considered when medicines are not effective or tolerated, or when the arrhythmia affects a person's quality of life.",
          "It is ultimately your decision. It will depend on whether your episodes can be controlled by medicine alone or whether you would benefit from the ablation.",
          "Risks include bleeding, infection, damage to the heart's normal electrical pathways needing a pacemaker, and stroke. More specific risks and benefits will be discussed with you at your local hospital.",
        ],
      },
      {
        heading: "What happens",
        paragraphs: [
          "It is carried out in a cardiac catheter laboratory, usually using local anaesthetic and sedation. A catheter is put into a blood vessel, usually in the groin, and guided to the heart using X-ray.",
          "Extra beats may be delivered, which may bring on your palpitations. This is needed to see where the abnormal rhythm is coming from. Most commonly, heat called radiofrequency energy is used to treat the area, but freezing, called cryotherapy, may be used instead.",
          "The shortest ablation can take as little as 15 minutes, while a more complex procedure can take three or four hours.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "Most people recover quickly and feel well enough to carry on with simple daily activities the following day. Avoid heavy lifting and more strenuous exercise, such as long walks or going to the gym, for about 2 weeks.",
          "It's quite common to be aware of your own heartbeat afterwards, or to notice extra or missed beats, and these usually settle with time. If your palpitations or a racing heartbeat come back, report this to your doctor.",
          "Time off work depends on your job, but often people take one to two weeks off.",
        ],
      },
      {
        heading: "Driving after an ablation",
        paragraphs: [
          "With a car or motorcycle licence, DVLA says you do not need to tell it if you've had a catheter ablation. After an ablation for reasons other than ventricular tachycardia or congenital heart disease, the rule is to stop driving for 2 days.",
          "With a bus, coach or lorry licence, the rule after such an ablation is to stop driving for 2 weeks. You do not need to tell DVLA.",
        ],
      },
    ],
    helps: [
      "Ask your doctor about the risks and benefits before you decide.",
      "Organise transport to and from the hospital, and time off work.",
      "Ask whether you should keep taking all your medicines before the procedure.",
      "Avoid heavy lifting and more strenuous exercise for about 2 weeks afterwards.",
      "Report it to your doctor if your palpitations or a racing heartbeat come back.",
    ],
    tryThisWeek: [
      "Ask about risks and benefits.",
      "Organise transport and time off.",
      "Avoid heavy lifting for 2 weeks.",
    ],
    ask: "Would ablation be right for me, and what are the risks in my case?",
    interactive: {
      kind: "timeline",
      title: "An ablation, from start to clinic",
      steps: [
        { id: "before", when: "Before", title: "Getting ready", points: ["Organise transport and time off work.", "Ask whether to keep taking all your medicines."] },
        { id: "lab", when: "On the day", title: "In the cath lab", points: ["Usually local anaesthetic and sedation.", "A catheter goes in through the groin and is guided to the heart using X-ray."] },
        { id: "find", when: "During", title: "Finding the spot", points: ["Extra beats may bring on your palpitations.", "This shows where the abnormal rhythm is coming from."] },
        { id: "treat", when: "15 minutes to four hours", title: "Heat or cold", points: ["Radiofrequency heat, or freezing, treats the area of extra cells."] },
        { id: "home", when: "The next day", title: "Simple activities", points: ["Most people feel well enough for simple daily activities.", "Car licence: no driving for 2 days."] },
        { id: "weeks", when: "About 2 weeks", title: "Taking it easy", points: ["Avoid heavy lifting and strenuous exercise.", "Often one to two weeks off work."] },
        { id: "clinic", when: "A few months", title: "Clinic check", points: ["You are usually seen in the outpatient clinic to see how you are progressing."] },
      ],
    },
    sources: [NHS_SVT, AA_ABLATION, BHF_ABLATION, AA_LEAFLET, GOV_ABLATION, AA_FAQ],
    quiz: {
      question: "What does the NHS say catheter ablation does for most people with SVT?",
      options: [{ text: "Permanently cures the problem", right: true }, { text: "Makes episodes last longer" }, { text: "Replaces all medicines with a pacemaker" }],
      why: "The NHS says catheter ablation permanently cures the problem in most people.",
    },
  },
  {
    id: "svt-when-to-get-help",
    kicker: "Urgent help",
    question: "When should I call 999 or go to A&E?",
    hook: "An episode that lasts longer than usual, or a racing heart with chest pain, breathlessness or feeling faint, needs help now.",
    short: "Call 999 if you've been diagnosed with SVT and your episode has lasted longer than usual, or if you have a fast heartbeat with shortness of breath, chest pain or feeling faint. You need to go to hospital for treatment immediately. Do not drive yourself to A&E.",
    sections: [
      {
        heading: "Call 999",
        paragraphs: [
          "Call 999 if you've been diagnosed with SVT and your episode has lasted longer than usual.",
          "Call 999 if you have a fast heartbeat with shortness of breath, chest pain or feeling faint. You need to go to hospital for treatment immediately.",
        ],
      },
      {
        heading: "Palpitations that will not go away",
        paragraphs: [
          "Call 999 or go to A&E if you currently have heart palpitations and they do not go away, or you also have chest pain, shortness of breath, or feel faint or have fainted.",
        ],
      },
      {
        heading: "Getting there",
        paragraphs: [
          "Do not drive yourself to A&E. Ask someone to drive you or call 999 and ask for an ambulance. Bring any medicines you take with you.",
          "The person you speak to at 999 will give you advice about what to do.",
        ],
      },
      {
        heading: "If it has stopped",
        paragraphs: [
          "If you've had these symptoms but they've now stopped, ask your GP surgery for an urgent appointment, call 111 or get help from 111 online.",
          "If you're not sure whether you need to call 999, NHS 111 can check your symptoms and tell you what to do.",
        ],
      },
      {
        heading: "Not urgent, but worth checking",
        paragraphs: [
          "See a GP if you keep getting a fast heartbeat. You might need a test, such as an electrocardiogram (ECG), to find out what's going on.",
        ],
      },
    ],
    helps: [
      "Call 999 if you've been diagnosed with SVT and your episode has lasted longer than usual.",
      "Call 999 if you have a fast heartbeat with shortness of breath, chest pain or feeling faint.",
      "Do not drive yourself to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
      "Bring any medicines you take with you.",
      "If the symptoms have now stopped, ask your GP surgery for an urgent appointment, call 111 or use 111 online.",
    ],
    tryThisWeek: [
      "Call 999 if it lasts longer than usual.",
      "Never drive yourself to A&E.",
      "Bring your medicines with you.",
    ],
    ask: "How long should I wait before getting help?",
    interactive: {
      kind: "scenarios",
      title: "What would you do?",
      scenarios: [
        {
          id: "longer",
          situation: "You have SVT, and today's episode has already lasted longer than your episodes usually do.",
          options: [{ text: "Call 999", best: true }, { text: "Wait until tomorrow" }, { text: "Drive yourself to A&E" }],
          why: "Call 999 if you've been diagnosed with SVT and your episode has lasted longer than usual. Do not drive yourself to A&E.",
        },
        {
          id: "chest",
          situation: "Your heart is racing and you have chest pain and feel faint.",
          options: [{ text: "Call 999", best: true }, { text: "Book a GP appointment" }, { text: "Lie down and see if it passes" }],
          why: "Call 999 if you have a fast heartbeat with shortness of breath, chest pain or feeling faint. You need to go to hospital for treatment immediately.",
        },
        {
          id: "stopped",
          situation: "Earlier today you had a racing heart and felt faint, but it has now stopped.",
          options: [{ text: "Ask your GP surgery for an urgent appointment or call 111", best: true }, { text: "Ignore it" }],
          why: "If you've had these symptoms but they've now stopped, ask your GP surgery for an urgent appointment, call 111 or get help from 111 online.",
        },
        {
          id: "unsure",
          situation: "You feel unwell and are not sure whether you need to call 999.",
          options: [{ text: "Get help from NHS 111", best: true }, { text: "Do nothing" }],
          why: "If you're not sure whether you need to call 999, NHS 111 can check your symptoms and tell you what to do.",
        },
      ],
    },
    sources: [NHS_SVT, NHS_PALPITATIONS, NHS_ARRHYTHMIA, NHS_999, NHS_111],
    quiz: {
      question: "How should you get to A&E during an SVT emergency?",
      options: [{ text: "Ask someone to drive you or call 999", right: true }, { text: "Drive yourself" }, { text: "Cycle there" }],
      why: "Do not drive yourself to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
    },
  },
  {
    id: "svt-exercise",
    kicker: "Staying active",
    question: "Can I exercise and play sport with SVT?",
    hook: "SVT can start during exercise, but being active is still recommended for most people. Build up slowly and know when to stop.",
    short: "SVT can happen when you're resting or doing exercise. If you've seen your doctor and you do not need further investigation or treatment, exercising as part of a healthy lifestyle is recommended. Start slowly, build up gradually, and stop if you get chest pain, palpitations, dizziness or light-headedness.",
    sections: [
      {
        heading: "Episodes and exercise",
        paragraphs: [
          "SVT can happen when you're resting or doing exercise.",
          "You may notice palpitations when you exercise. If they are putting you off being active, get them checked out.",
        ],
      },
      {
        heading: "Staying active",
        paragraphs: [
          "If you've seen your doctor and you do not need further investigation or treatment, exercising as part of a healthy lifestyle is recommended.",
          "Adults should aim to do at least 150 minutes of moderate intensity activity a week. Speak to your GP first if you have not exercised for some time, or if you have medical conditions or concerns.",
        ],
      },
      {
        heading: "Start slowly",
        paragraphs: [
          "If exercise is new to you, start with 5 or 10 minutes of walking and gradually increase your time and distance.",
          "For most people, exercising regularly at a moderate intensity has the greatest benefit for heart health. You should feel that your breathing rate has increased but that you are still able to talk.",
          "If you want to try vigorous exercise, where you're breathing hard and fast, discuss this with a healthcare professional to make sure it is safe for you.",
        ],
      },
      {
        heading: "Do not ignore symptoms",
        paragraphs: [
          "Stop exercising if you experience any chest pain, palpitations, dizziness or light-headedness. If the symptoms do not go away quickly with rest, seek urgent medical advice.",
          "Call 999 if you have a fast heartbeat with shortness of breath, chest pain or feeling faint.",
        ],
      },
      {
        heading: "After an ablation",
        paragraphs: [
          "After an ablation, avoid heavy lifting and more strenuous exercise, such as long walks or going to the gym, for about 2 weeks.",
        ],
      },
    ],
    helps: [
      "Get your palpitations checked out if they are putting you off being active.",
      "Start with 5 or 10 minutes of walking and gradually increase your time and distance.",
      "Start and finish each session at a slower pace.",
      "Discuss vigorous exercise with a healthcare professional first.",
      "Stop exercising if you get chest pain, palpitations, dizziness or light-headedness.",
    ],
    tryThisWeek: [
      "Start with 5 to 10 minute walks.",
      "Start and finish slowly.",
      "Stop if symptoms start.",
    ],
    ask: "Is it safe for me to exercise, and are there any sports I should avoid?",
    interactive: {
      kind: "scenarios",
      title: "Moments on the move",
      scenarios: [
        {
          id: "palpitations",
          situation: "Halfway through a brisk walk, your heart starts racing and you feel dizzy.",
          options: [{ text: "Stop exercising", best: true }, { text: "Push on to finish" }],
          why: "Stop exercising if you experience any chest pain, palpitations, dizziness or light-headedness. If the symptoms do not go away quickly with rest, seek urgent medical advice.",
        },
        {
          id: "new",
          situation: "Exercise is new to you and you want to get more active.",
          options: [{ text: "Start with 5 or 10 minutes of walking", best: true }, { text: "Start with a long run" }],
          why: "If exercise is new to you, start with 5 or 10 minutes of walking and gradually increase your time and distance.",
        },
        {
          id: "vigorous",
          situation: "You'd like to get back to a hard, fast sport.",
          options: [{ text: "Discuss it with a healthcare professional first", best: true }, { text: "Just go for it" }],
          why: "If you want to try vigorous exercise, discuss this with a healthcare professional to make sure it is safe for you.",
        },
      ],
    },
    sources: [NHS_SVT, BHF_PALPITATIONS_WORRY, BHF_SAFE_EXERCISE, NHS_ACTIVITY, AA_ABLATION],
    quiz: {
      question: "What should you do if you get palpitations and dizziness while exercising?",
      options: [{ text: "Stop exercising", right: true }, { text: "Exercise harder" }, { text: "Carry on as normal" }],
      why: "Stop exercising if you experience any chest pain, palpitations, dizziness or light-headedness.",
    },
  },
  {
    id: "svt-caffeine-alcohol",
    kicker: "Triggers",
    question: "Do caffeine, alcohol and energy drinks trigger SVT?",
    hook: "Caffeine and alcohol are known SVT triggers. A standard energy drink has about as much caffeine as an espresso.",
    short: "SVT can be triggered by caffeine, alcohol or drugs, and cutting down on caffeine or alcohol can reduce your chances of having episodes. Caffeine is in coffee, tea, energy drinks, cola and chocolate. Alcohol can also temporarily increase your heart rate or cause palpitations.",
    sections: [
      {
        heading: "Known triggers",
        paragraphs: [
          "SVT can be triggered by caffeine, alcohol or drugs, but often there's no obvious trigger.",
          "You can reduce your chances of having episodes by cutting down on the amount of caffeine or alcohol you drink.",
        ],
      },
      {
        heading: "Caffeine",
        paragraphs: [
          "Caffeine is a natural stimulant found in coffee, black tea, green tea, energy drinks, cola and chocolate, as well as caffeine supplements.",
          "Up to 400mg of caffeine a day, or around 4 to 5 cups of tea or coffee, is generally considered safe for most adults. Some people experience palpitations if they drink too much.",
          "If caffeine triggers palpitations or increases your heart rate, it may be worth cutting down or switching to decaffeinated drinks instead.",
        ],
      },
      {
        heading: "Energy drinks and supplements",
        paragraphs: [
          "The British Heart Foundation says a standard 250ml energy drink has about 80mg of caffeine, the same as a 60ml espresso.",
          "Caffeine supplements and powders often have much higher levels of caffeine than food or drinks, so check the label before you try them.",
        ],
      },
      {
        heading: "Alcohol",
        paragraphs: [
          "Alcohol can temporarily increase your heart rate or cause heart palpitations. Speak to your doctor if you often have a high heart rate or palpitations.",
          "If you drink, keep to no more than 14 units a week, spread over 3 days or more, with several alcohol-free days. Fourteen units is equivalent to 6 pints of average strength beer or 6 medium glasses of average strength wine.",
          "Taking beta blockers with alcohol can make you feel dizzy and light-headed.",
        ],
      },
    ],
    helps: [
      "Cut down on the amount of caffeine or alcohol you drink.",
      "Try switching to decaffeinated drinks if caffeine triggers palpitations.",
      "Check the label of caffeine supplements and powders before you try them.",
      "Keep to no more than 14 units of alcohol a week, with several alcohol-free days.",
      "Speak to your doctor if you often have a high heart rate or palpitations.",
    ],
    tryThisWeek: [
      "Cut down on caffeine or alcohol.",
      "Try a decaf swap.",
      "Check caffeine supplement labels.",
    ],
    ask: "Do I need to cut out caffeine and alcohol completely, or just cut down?",
    interactive: {
      kind: "flip-cards",
      title: "How much caffeine?",
      intro: "Tap a card to see the average caffeine in each, from the British Heart Foundation.",
      cards: [
        { id: "coffee", front: "Filtered or instant coffee", when: "200ml cup", back: "About 90mg of caffeine." },
        { id: "espresso", front: "Espresso", when: "60ml", back: "About 80mg of caffeine." },
        { id: "energy", front: "Standard energy drink", when: "250ml can", back: "About 80mg of caffeine, the same as an espresso." },
        { id: "tea", front: "Black tea", when: "220ml cup", back: "About 50mg of caffeine." },
        { id: "cola", front: "Standard cola", when: "355ml", back: "About 40mg of caffeine." },
        { id: "decaf", front: "Decaffeinated coffee", when: "200ml cup", back: "About 7mg of caffeine. A swap if caffeine triggers palpitations." },
      ],
    },
    sources: [NHS_SVT, BHF_CAFFEINE, BHF_ALCOHOL, AA_SVT, NHS_BETA_BLOCKERS],
    quiz: {
      question: "Roughly how much caffeine is in a standard 250ml energy drink?",
      options: [{ text: "About 80mg, like an espresso", right: true }, { text: "None at all" }, { text: "About 7mg, like decaf" }],
      why: "A standard energy drink (250ml) has about 80mg of caffeine, the same as an espresso (60ml).",
    },
  },
  {
    id: "svt-driving-work",
    kicker: "Everyday life",
    question: "Can I drive and work with SVT?",
    hook: "DVLA needs to know if your tachycardia has caused sudden dizziness or fainting. Most people keep working, with support if needed.",
    short: "With a car or motorcycle licence, tell DVLA if your tachycardia has caused any sudden dizziness or fainting within the last 12 months. Bus, coach and lorry drivers always need to tell DVLA. At work, talking to your manager or occupational health can help, and Access to Work may give a grant for support.",
    sections: [
      {
        heading: "A car or motorcycle licence",
        paragraphs: [
          "DVLA says to tell it if your tachycardia has caused any sudden dizziness or fainting within the last 12 months.",
          "You also need to tell DVLA if you have tachycardia or any abnormal heart rhythm that affects your driving, unless the underlying cause has been identified and treated and your heart rhythm is controlled for at least 4 weeks.",
          "You can be fined up to £1,000 if you do not tell DVLA about a medical condition that affects your driving.",
        ],
      },
      {
        heading: "A bus, coach or lorry licence",
        paragraphs: [
          "DVLA says bus, coach and lorry drivers always need to tell it if they have tachycardia. This is done with form VOCH1.",
        ],
      },
      {
        heading: "After an ablation",
        paragraphs: [
          "With a car or motorcycle licence, you do not need to tell DVLA if you've had a catheter ablation. After an ablation for reasons other than ventricular tachycardia or congenital heart disease, the rule is to stop driving for 2 days, or 2 weeks with a bus, coach or lorry licence.",
          "If your ability to drive is affected, your insurance company and DVLA need to know. Your GP can let you know if you need to do this.",
        ],
      },
      {
        heading: "At work",
        paragraphs: [
          "Talk to your manager or occupational health department, if you have one, if you think your work may be affected.",
          "You do not have to tell your employer about your condition. But it can help them be more supportive and make reasonable adjustments, such as time off for medical appointments or changes to your work pattern.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition. It could give you a grant to help pay for things like specialist equipment, or the costs of travelling to work if you cannot use public transport.",
          "If you get an Access to Work grant, it will not affect any other benefits you get and you will not have to pay it back.",
        ],
      },
    ],
    helps: [
      "Tell DVLA if your tachycardia has caused sudden dizziness or fainting within the last 12 months.",
      "Ask your GP whether you need to tell DVLA and your insurance company.",
      "If you feel dizzy after taking a beta blocker, do not drive until the dizziness stops.",
      "Talk to your manager or occupational health department if your work may be affected.",
      "Contact Access to Work to see if you can get a grant for equipment or support.",
    ],
    tryThisWeek: [
      "Check whether to tell DVLA.",
      "Ask your GP about driving.",
      "Talk to your manager if work is affected.",
    ],
    ask: "Is it safe for me to drive, and do I need to tell DVLA?",
    interactive: {
      kind: "scenarios",
      title: "Driving and work: what fits?",
      scenarios: [
        {
          id: "dizzy",
          situation: "You drive a car, and an SVT episode made you suddenly dizzy last month.",
          options: [{ text: "Tell DVLA", best: true }, { text: "Carry on without telling anyone" }],
          why: "Tell DVLA if your tachycardia has caused any sudden dizziness or fainting within the last 12 months.",
        },
        {
          id: "lorry",
          situation: "You hold a lorry licence and have just been diagnosed with SVT.",
          options: [{ text: "Tell DVLA using form VOCH1", best: true }, { text: "Only tell DVLA if you faint" }],
          why: "DVLA says bus, coach and lorry drivers always need to tell it if they have tachycardia, using form VOCH1.",
        },
        {
          id: "ablation",
          situation: "You drive a car and had a catheter ablation for SVT yesterday.",
          options: [{ text: "Wait 2 days before driving", best: true }, { text: "Drive home from hospital yourself" }],
          why: "After an ablation for reasons other than ventricular tachycardia or congenital heart disease, the rule for a car licence is to stop driving for 2 days.",
        },
        {
          id: "work",
          situation: "Appointments and episodes are making work harder.",
          options: [{ text: "Talk to your manager or occupational health", best: true }, { text: "Hide it and struggle on" }],
          why: "Talk to your manager or occupational health department if you think your work may be affected. Reasonable adjustments can include time off for medical appointments.",
        },
      ],
    },
    sources: [GOV_TACHYCARDIA, GOV_ABLATION, BHF_ARRHYTHMIAS, BHF_WORK, GOV_ACCESS_TO_WORK, NHS_BETA_BLOCKERS],
    quiz: {
      question: "With a car licence, when does DVLA say to tell it about tachycardia?",
      options: [{ text: "If it has caused sudden dizziness or fainting in the last 12 months", right: true }, { text: "Never" }, { text: "Only if you are over 70" }],
      why: "Tell DVLA if your tachycardia has caused any sudden dizziness or fainting within the last 12 months.",
    },
  },
  {
    id: "svt-worry",
    kicker: "Feelings",
    question: "How do I live with the worry of the next episode?",
    hook: "Not knowing when your heart will next race can be hard. Knowing what is normal for you, and having a plan, can ease the worry.",
    short: "It's normal to experience anxiety if you have a heart problem, and palpitations themselves can trigger anxiety. Getting to know your condition, trying grounding and calm breathing, and talking therapies can all help. If anxiety persists and is interfering with your everyday life, it's important to seek help.",
    sections: [
      {
        heading: "A normal reaction",
        paragraphs: [
          "It's normal to experience anxiety if you have a heart problem. Living with an abnormal heart rhythm can be emotionally challenging for you and your family.",
          "Anxiety can make your heart race, and palpitations themselves can trigger feelings of anxiety.",
        ],
      },
      {
        heading: "Knowing what is normal for you",
        paragraphs: [
          "The Arrhythmia Alliance says that although SVT can feel troublesome, it does not shorten your life expectancy. The majority of SVTs are not life threatening.",
          "It can help to get to know your heart condition and your anxiety symptoms, so you can learn what's normal for you. You can work on this with your doctor or psychologist.",
          "Heart attacks and panic attacks share many similar symptoms. If you're unsure which it is, it's always safest to call 999 and seek medical help.",
        ],
      },
      {
        heading: "Things to try",
        paragraphs: [
          "Grounding and relaxation techniques can help when you feel overwhelmed. Calm breathing, like diaphragmatic breathing, encourages slower, deeper breaths.",
          "Keeping a diary of your anxiety triggers and thoughts can help you find patterns. Setting aside a specific time, about 20 minutes, to focus on your worries can help stop them taking over your day.",
          "Think carefully before using health monitoring devices, like fitness watches or health apps. For some people, these can make anxiety worse.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "Anxiety is usually treated with talking therapies like cognitive behavioural therapy (CBT). You can refer yourself to NHS talking therapies for anxiety without speaking to a GP.",
          "The British Heart Foundation Heart Helpline lets you speak to a cardiac nurse on 0808 802 1234, weekdays 9am to 5pm.",
          "If anxiety persists and is interfering with your everyday life, it's important to seek help.",
        ],
      },
    ],
    helps: [
      "Get to know what's normal for you, with your doctor or psychologist.",
      "Try grounding and calm breathing techniques.",
      "Keep a diary of your anxiety triggers and thoughts.",
      "Refer yourself to NHS talking therapies.",
      "Call the Heart Helpline to speak to a cardiac nurse.",
      "If you're unsure whether it's a heart attack or a panic attack, call 999.",
    ],
    tryThisWeek: [
      "Try a calm breathing exercise.",
      "Keep a worry diary.",
      "Look up NHS talking therapies.",
    ],
    ask: "Can you help me tell which of my symptoms are SVT and which are anxiety?",
    interactive: {
      kind: "scenarios",
      title: "Where to turn",
      scenarios: [
        {
          id: "checking",
          situation: "You find yourself checking your pulse many times a day.",
          options: [{ text: "Gradually cut down how often you check", best: true }, { text: "Check even more often" }],
          why: "If you usually check your pulse rate multiple times a day, set yourself a goal to reduce the number of times by a small amount each week.",
        },
        {
          id: "unsure",
          situation: "Your chest feels tight, you are short of breath and you cannot tell if it is a panic attack or a heart attack.",
          options: [{ text: "Call 999", best: true }, { text: "Wait and see" }],
          why: "If you're unsure, it's always safest to call 999 and seek medical help.",
        },
        {
          id: "everyday",
          situation: "Worry about the next episode is getting in the way of everyday life.",
          options: [{ text: "Refer yourself to NHS talking therapies or see your GP", best: true }, { text: "Keep it to yourself" }],
          why: "If anxiety persists and is interfering with your everyday life, it's important to seek help. You can refer yourself to NHS talking therapies.",
        },
      ],
    },
    sources: [BHF_ANXIETY, BHF_PALPITATIONS_WORRY, BHF_ARRHYTHMIAS, NHS_TALKING, BHF_HELPLINE, AA_FAQ, AA_LEAFLET],
    quiz: {
      question: "What does the British Heart Foundation suggest if you cannot tell a heart attack from a panic attack?",
      options: [{ text: "Call 999 and seek medical help", right: true }, { text: "Ignore them" }, { text: "Check your pulse again" }],
      why: "If you're unsure, it's always safest to call 999 and seek medical help.",
    },
  },
];
