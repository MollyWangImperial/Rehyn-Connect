import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Atrial fibrillation page's pieces (content/library-conditions/heart.ts
// `learnId`). Every sentence was written from wording checked on 20 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. Much of it comes from the NHS
// atrial fibrillation and anticoagulant pages and the British Heart Foundation's "Understanding atrial
// fibrillation" booklet (updated May 2025), and is credited to them. General information only; it never
// replaces what a person's own team tells them.

const nhsAnticoag = (label: string, path: string): LearnSource => ({ label: `NHS: Anticoagulants – ${label}`, url: `https://www.nhs.uk/medicines/anticoagulants/${path}` });
const bhf = (label: string, path: string): LearnSource => ({ label: `British Heart Foundation: ${label}`, url: `https://www.bhf.org.uk/informationsupport/${path}` });
const NHS_AF: LearnSource = { label: "NHS: Atrial fibrillation", url: "https://www.nhs.uk/conditions/atrial-fibrillation/" };
const NHS_PALPITATIONS: LearnSource = { label: "NHS: Heart palpitations", url: "https://www.nhs.uk/symptoms/heart-palpitations/" };
const NHS_ANTICOAG: LearnSource = { label: "NHS: Anticoagulants", url: "https://www.nhs.uk/medicines/anticoagulants/" };
const NHS_ANTICOAG_USES = nhsAnticoag("Uses", "uses/");
const NHS_ANTICOAG_DOSAGE = nhsAnticoag("Dosage", "dosage/");
const NHS_ANTICOAG_CONSIDER = nhsAnticoag("Considerations", "considerations/");
const NHS_ANTICOAG_SIDE = nhsAnticoag("Side effects", "side-effects/");
const BHF_AF = bhf("Atrial fibrillation", "conditions/atrial-fibrillation");
const BHF_PULSE = bhf("How to check your pulse", "tests/checking-your-pulse");
const BHF_HEART_RATE = bhf("Your heart rate", "how-a-healthy-heart-works/your-heart-rate");
const BHF_LIVING = bhf("Expert tips on living with atrial fibrillation", "heart-matters-magazine/medical/living-with-atrial-fibrillation");
const BHF_BOOKLET: LearnSource = {
  label: "British Heart Foundation: Understanding atrial fibrillation (booklet)",
  url: "https://www.bhf.org.uk/-/media/files/information-and-support/publications/unassigned/understanding-series-update-2025/050825_understanding-atrial-fibrillation_a6_booklet.pdf",
};

export const afAnswers: LearnArticle[] = [
  {
    id: "af-what-it-is",
    kicker: "Understanding",
    question: "What is atrial fibrillation?",
    hook: "A heart rhythm problem where the heartbeat is not steady. Extra electrical impulses make the top chambers of the heart twitch.",
    short: "Atrial fibrillation is a type of heart rhythm problem where your heartbeat is not steady. Extra electrical impulses start in the top chambers of the heart (atria) and make them twitch, or fibrillate. There is currently no cure, but treatment should help manage the symptoms.",
    sections: [
      {
        heading: "A heartbeat that is not steady",
        paragraphs: [
          "Atrial fibrillation, sometimes called afib or AF, is a type of heart rhythm problem where your heartbeat is not steady.",
          "If your heart does not beat regularly then blood is not pumped around your body as well as it should be.",
        ],
      },
      {
        heading: "How a heart normally beats",
        paragraphs: [
          "Your heart needs to beat regularly to help pump blood around your body. There are electrical impulses in your heart that help it to beat regularly and in time.",
          "The electrical impulses are sent by your sinoatrial (SA) node. They travel across the top chambers (atria), causing them to contract and pump blood into the bottom chambers (ventricles).",
        ],
      },
      {
        heading: "What changes in atrial fibrillation",
        paragraphs: [
          "If you have atrial fibrillation, you have extra electrical impulses that start in the top chambers of your heart. These extra impulses are uncoordinated and cause your heart to twitch (or fibrillate).",
          "This twitching causes an irregular and sometimes fast heartbeat. When this happens, it may be called an atrial fibrillation episode.",
        ],
      },
      {
        heading: "What causes it",
        paragraphs: [
          "Atrial fibrillation is caused by a problem with the electrical system that makes your heart beat. It is more common if you have certain heart conditions, like high blood pressure, coronary heart disease or heart valve disease.",
          "You may not have any risk factors but still get atrial fibrillation. When no cause can be found, it's called lone atrial fibrillation.",
        ],
      },
      {
        heading: "Living with it",
        paragraphs: [
          "There is currently no cure for atrial fibrillation, but treatment should help manage the symptoms. With the right treatment and lifestyle, you can live well.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you may have symptoms of atrial fibrillation.",
      "Ask your doctor what is causing your atrial fibrillation.",
      "If someone in your family has atrial fibrillation and you're concerned about your risk, talk to your GP.",
      "Call the British Heart Foundation Heart Helpline to speak to one of its cardiac nurses.",
    ],
    tryThisWeek: [
      "See a GP if you think you have symptoms.",
      "Ask what is causing your AF.",
      "Call the Heart Helpline.",
    ],
    ask: "What is the cause of my atrial fibrillation?",
    interactive: {
      kind: "risk-check",
      title: "What can make atrial fibrillation more likely?",
      intro: "Tick any that apply to you. Some can be treated or changed; some cannot.",
      items: [
        { id: "age", label: "Aged 55 or older", note: "People aged 55 or older are more likely to have atrial fibrillation.", changeable: false },
        { id: "bp", label: "High blood pressure", note: "Controlling high blood pressure is one of the simple lifestyle changes that can help manage atrial fibrillation.", changeable: true },
        { id: "weight", label: "Living with excess weight", note: "Maintaining a healthy weight can help manage atrial fibrillation.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Stopping smoking and using other tobacco products can help manage atrial fibrillation.", changeable: true },
        { id: "alcohol", label: "Drinking too much alcohol", note: "Limiting how much alcohol you drink, to under 14 units per week, can help.", changeable: true },
        { id: "thyroid", label: "An overactive thyroid", note: "If a cause can be found, you may only need treatment for this.", changeable: true },
        { id: "heart", label: "Coronary heart or heart valve disease", note: "Atrial fibrillation is more common if you have certain heart conditions.", changeable: false },
        { id: "family", label: "Atrial fibrillation in the family", note: "It can be passed down through families. If you're concerned about your risk, talk to your GP.", changeable: false },
      ],
    },
    sources: [NHS_AF, BHF_BOOKLET, BHF_AF],
    quiz: {
      question: "What do the extra electrical impulses do to the top chambers of the heart?",
      options: [{ text: "Make them twitch (fibrillate)", right: true }, { text: "Make them stop completely" }, { text: "Make them grow larger" }],
      why: "These extra impulses are uncoordinated and cause your heart to twitch (or fibrillate).",
    },
  },
  {
    id: "af-stroke-link",
    kicker: "Stroke risk",
    question: "Why can atrial fibrillation cause a stroke?",
    hook: "Blood that is not pumped well can sit in the heart and form a clot. If the clot reaches the brain, it can cause a stroke.",
    short: "Atrial fibrillation is not life-threatening, but it does mean an increased chance of having a stroke in the future. Because blood is not pumped around the heart as well as it should be, some extra blood can sit inside the heart and lead to a clot. If you're diagnosed, your doctor should check your risk of having a stroke.",
    sections: [
      {
        heading: "Not life-threatening, but a stroke risk",
        paragraphs: [
          "Atrial fibrillation is not life-threatening. But having atrial fibrillation does mean you have an increased chance of having a stroke in the future.",
          "The British Heart Foundation says the risk of stroke is five times higher for anyone with atrial fibrillation.",
        ],
      },
      {
        heading: "How a clot forms",
        paragraphs: [
          "Atrial fibrillation is a type of irregular heartbeat that can cause blood clots to form in the heart.",
          "Because blood is not being pumped around your heart as well as it should, it can cause some extra blood to sit inside your heart. This can lead to a blood clot. If the blood clot travels from your heart to your brain, it can cause a stroke.",
        ],
      },
      {
        heading: "Checking your risk",
        paragraphs: [
          "If you're diagnosed with atrial fibrillation your doctor should check your risk of having a stroke. This assessment is called a CHA2DS2-VASc score.",
          "It looks at your age, how well your heart is working, if you've had a stroke before, and whether you have certain health conditions, like high blood pressure.",
          "If you score 1 or more then you will usually be offered anticoagulant medicines to reduce your risk of having a stroke.",
        ],
      },
      {
        heading: "Know the signs of a stroke",
        paragraphs: [
          "Face weakness: one side of your face may fall (droop) and it might be hard to smile. Arm weakness: you may not be able to fully lift both arms and keep them there. Speech problems: you may slur your words or sound confused.",
          "A stroke is a medical emergency. If you see any one of these signs, call 999 for an ambulance.",
        ],
      },
    ],
    helps: [
      "Ask your doctor to check your risk of having a stroke.",
      "Take your anticoagulant medicine as it will reduce your risk of having a stroke.",
      "Learn the signs of a stroke: face weakness, arm weakness and speech problems.",
      "If you see any one of these signs, call 999 for an ambulance.",
    ],
    tryThisWeek: [
      "Ask about your stroke risk.",
      "Take your anticoagulant as prescribed.",
      "Learn the signs of a stroke.",
    ],
    ask: "Do I have an increased risk of having a stroke, and do I need an anticoagulant?",
    interactive: {
      kind: "scenarios",
      title: "What would you do?",
      scenarios: [
        {
          id: "face",
          situation: "Someone with atrial fibrillation suddenly finds one side of their face has dropped and they cannot smile.",
          options: [{ text: "Call 999 for an ambulance", best: true }, { text: "Wait to see if it passes" }, { text: "Book a GP appointment for next week" }],
          why: "A stroke is a medical emergency. If you see any one of these signs, call 999 for an ambulance.",
        },
        {
          id: "risk",
          situation: "You've just been diagnosed, and nobody has talked about your stroke risk.",
          options: [{ text: "Ask your doctor to check your stroke risk", best: true }, { text: "Assume there is no risk" }],
          why: "If you're diagnosed with atrial fibrillation your doctor should check your risk of having a stroke.",
        },
        {
          id: "feel-well",
          situation: "You feel well and wonder whether you still need your anticoagulant.",
          options: [{ text: "Keep taking it and talk to your doctor", best: true }, { text: "Stop it while you feel well" }],
          why: "It's important to take your anticoagulant medicine as it will reduce your risk of having a stroke.",
        },
      ],
    },
    sources: [BHF_BOOKLET, BHF_LIVING, NHS_ANTICOAG_USES],
    quiz: {
      question: "How can atrial fibrillation lead to a stroke?",
      options: [{ text: "A clot forms in the heart and travels to the brain", right: true }, { text: "The heart stops beating" }, { text: "Blood pressure falls too low" }],
      why: "Some extra blood can sit inside your heart and lead to a blood clot. If the blood clot travels from your heart to your brain, it can cause a stroke.",
    },
  },
  {
    id: "af-types",
    kicker: "Types",
    question: "What are paroxysmal, persistent and permanent atrial fibrillation?",
    hook: "Atrial fibrillation can come and go, last longer, or stay. The name depends on how long the episodes last.",
    short: "Paroxysmal atrial fibrillation is when episodes start and stop on their own, usually without treatment. Persistent atrial fibrillation is when episodes last more than seven days, and you'll usually need treatment. Permanent atrial fibrillation is when you live with it long-term, even after having treatment.",
    sections: [
      {
        heading: "Coming and going",
        paragraphs: [
          "Symptoms may start and stop on their own. This is called paroxysmal atrial fibrillation.",
          "Paroxysmal atrial fibrillation is when you have one or more episodes in seven days. They usually stop without treatment.",
        ],
      },
      {
        heading: "Lasting longer",
        paragraphs: [
          "Persistent atrial fibrillation is when you have one or more episodes for more than seven days. You'll usually need treatment.",
          "Long-standing atrial fibrillation is when you've had continuous atrial fibrillation for a year or more.",
        ],
      },
      {
        heading: "Permanent",
        paragraphs: [
          "Over time, you may always have symptoms. This is called permanent atrial fibrillation.",
          "Permanent atrial fibrillation is when you live with atrial fibrillation long-term, even after having treatment. You may continue to have treatment to lower your risk of having a stroke.",
        ],
      },
      {
        heading: "Not sure which you have?",
        paragraphs: [
          "Speak to your doctor if you're not sure what type of atrial fibrillation you have.",
        ],
      },
    ],
    helps: [
      "Speak to your doctor if you're not sure what type of atrial fibrillation you have.",
      "Ask whether you need to continue treatment to lower your risk of having a stroke.",
      "See a GP if you have been diagnosed with atrial fibrillation and treatment is not helping your symptoms.",
    ],
    tryThisWeek: [
      "Ask which type you have.",
      "Ask about treatment to lower stroke risk.",
      "See a GP if treatment is not helping.",
    ],
    ask: "Will my condition go away on its own?",
    interactive: {
      kind: "timeline",
      title: "From episodes to long-term",
      steps: [
        { id: "paroxysmal", when: "Within seven days", title: "Paroxysmal", points: ["One or more episodes in seven days.", "They usually stop without treatment."] },
        { id: "persistent", when: "More than seven days", title: "Persistent", points: ["Episodes last more than seven days.", "You'll usually need treatment."] },
        { id: "long-standing", when: "A year or more", title: "Long-standing", points: ["Continuous atrial fibrillation for a year or more."] },
        { id: "permanent", when: "Long-term", title: "Permanent", points: ["You live with it long-term, even after treatment.", "You may continue treatment to lower your stroke risk."] },
      ],
    },
    sources: [NHS_AF, BHF_BOOKLET, BHF_AF],
    quiz: {
      question: "Which type of atrial fibrillation usually stops without treatment?",
      options: [{ text: "Paroxysmal", right: true }, { text: "Persistent" }, { text: "Permanent" }],
      why: "Paroxysmal atrial fibrillation is when you have one or more episodes in seven days. They usually stop without treatment.",
    },
  },
  {
    id: "af-tests",
    kicker: "Tests",
    question: "What happens with the ECG, monitors and the echo?",
    hook: "Most people find out from a pulse check. An ECG records the heart's rhythm, and an echo uses sound waves to picture the heart.",
    short: "Most people find out they have an irregular heart rhythm when their pulse is checked during a health appointment. If a GP thinks you could have atrial fibrillation, they will refer you to a heart specialist. Tests may include an ECG, an echocardiogram, a chest X-ray and blood tests, and you may wear a small monitor for 24 hours or more.",
    sections: [
      {
        heading: "Often found at a check-up",
        paragraphs: [
          "Most people will find out they have an irregular heart rhythm when a healthcare professional is checking their pulse during a health appointment.",
          "If a GP thinks you could have atrial fibrillation, they will refer you to a heart specialist (cardiologist).",
        ],
      },
      {
        heading: "The ECG and the echo",
        paragraphs: [
          "An electrocardiogram (ECG) is a simple and useful test which records the rhythm, rate and electrical activity of your heart.",
          "An echocardiogram (echo) is a scan of the heart that uses sound waves to build up a picture of your heart.",
        ],
      },
      {
        heading: "Other tests",
        paragraphs: [
          "You may also have a chest X-ray to take a picture of your heart, lungs and ribs, blood tests, or an implantable loop recorder.",
        ],
      },
      {
        heading: "A longer ECG",
        paragraphs: [
          "You may need an ECG that takes longer than a normal ECG. You'll wear a small monitor for 24 hours or more.",
          "You can go about your normal daily activities while you're wearing it.",
        ],
      },
      {
        heading: "Smart watches and apps",
        paragraphs: [
          "Devices like smart watches and apps on your phone can track your pulse and heart rate. They can be useful to find out if there's an issue with your heartbeat, but they cannot replace medical tests or give you a diagnosis.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you may have symptoms of atrial fibrillation.",
      "Go about your normal daily activities while wearing a heart monitor.",
      "Speak to your doctor if you're worried about your pulse or heart rate.",
      "Ask whether you should see an electrophysiologist, a special doctor for heart rhythm disorders.",
    ],
    tryThisWeek: [
      "See a GP if you have symptoms.",
      "Carry on as normal with a monitor on.",
      "Ask about seeing an electrophysiologist.",
    ],
    ask: "Which tests do I need, and should I see an electrophysiologist?",
    interactive: {
      kind: "flip-cards",
      title: "The tests, turned over",
      intro: "Tap a card to see what each test does.",
      cards: [
        { id: "ecg", front: "Electrocardiogram (ECG)", when: "If a GP thinks you could have AF", back: "A simple test which records the rhythm, rate and electrical activity of your heart." },
        { id: "echo", front: "Echocardiogram (echo)", when: "To see how your heart is working", back: "A scan of the heart that uses sound waves to build up a picture of your heart." },
        { id: "monitor", front: "A longer ECG", when: "When a normal ECG is not long enough", back: "You wear a small monitor for 24 hours or more, and go about your normal daily activities." },
        { id: "xray", front: "Chest X-ray", when: "Alongside other tests", back: "Takes a picture of your heart, lungs and ribs." },
        { id: "watch", front: "Smart watch or app", when: "At home", back: "Can track your pulse and heart rate, but cannot replace medical tests or give you a diagnosis." },
      ],
    },
    sources: [NHS_AF, BHF_BOOKLET, BHF_AF],
    quiz: {
      question: "Can a smart watch diagnose atrial fibrillation?",
      options: [{ text: "No, it cannot replace medical tests", right: true }, { text: "Yes, always" }, { text: "Only at night" }],
      why: "They can be useful to find out if there's an issue with your heartbeat, but they cannot replace medical tests or give you a diagnosis.",
    },
  },
  {
    id: "af-symptoms",
    kicker: "Symptoms",
    question: "What can atrial fibrillation feel like?",
    hook: "A heart that pounds, races, flutters or skips a beat. Tiredness and breathlessness too. And for some people, nothing at all.",
    short: "Atrial fibrillation can make it suddenly feel like your heart is pounding, racing, fluttering, skipping or missing a beat. You may feel very tired, short of breath or dizzy, or find it harder to exercise. Some people with atrial fibrillation have symptoms, and some do not.",
    sections: [
      {
        heading: "What it can feel like",
        paragraphs: [
          "Symptoms include an irregular heartbeat, where your pulse is not steady. You may suddenly feel like your heart is pounding, racing, fluttering, skipping or missing a beat.",
          "Your heartbeat may be faster than 100 beats per minute.",
        ],
      },
      {
        heading: "Other symptoms",
        paragraphs: [
          "You may feel very tired, or find it harder to exercise.",
          "You may have chest pain or tightness, or feel short of breath, lightheaded, dizzy or like you might faint.",
        ],
      },
      {
        heading: "No symptoms at all",
        paragraphs: [
          "Some people with atrial fibrillation have symptoms, and some do not. You may be more likely to have symptoms if you're older.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "See a GP if you have heart palpitations that keep happening or are getting worse.",
          "Call 999 if you have a fast or irregular heartbeat and chest pain, shortness of breath, fainting, weakness or numbness on one side of your face or body, or confusion or difficulty speaking. Do not drive yourself to A&E.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you may have symptoms of atrial fibrillation.",
      "See a GP if you have heart palpitations that keep happening or are getting worse.",
      "Speak to your doctor if you have any of these symptoms or your symptoms are getting worse.",
      "Call 999 if a fast or irregular heartbeat comes with chest pain, shortness of breath or fainting.",
    ],
    tryThisWeek: [
      "See a GP if palpitations keep happening.",
      "Tell your doctor if symptoms get worse.",
      "Know when to call 999.",
    ],
    ask: "Are my symptoms caused by atrial fibrillation, and what should I do if they start?",
    interactive: {
      kind: "signs",
      title: "What have you noticed?",
      intro: "Tick anything you have felt. The ones you tick make a list to take to your doctor.",
      signs: [
        "A pulse that is not steady",
        "Heart pounding, racing or fluttering",
        "Heart skipping or missing a beat",
        "Feeling very tired",
        "Finding it harder to exercise",
        "Chest pain or tightness",
        "Short of breath",
        "Lightheaded, dizzy or faint",
      ],
      after: "Speak to your doctor if you have any of these symptoms or your symptoms are getting worse. Call 999 if a fast or irregular heartbeat comes with chest pain, shortness of breath or fainting.",
    },
    sources: [NHS_AF, BHF_BOOKLET, NHS_PALPITATIONS],
    quiz: {
      question: "Does everyone with atrial fibrillation have symptoms?",
      options: [{ text: "No, some people do not", right: true }, { text: "Yes, everyone does" }, { text: "Only children do" }],
      why: "Some people with atrial fibrillation have symptoms, and some do not.",
    },
  },
  {
    id: "af-anticoagulants",
    kicker: "Treatment",
    question: "What should I know about blood thinners?",
    hook: "Anticoagulants stop blood from clotting and reduce the risk of a stroke. The main side effect is bleeding too easily.",
    short: "Anticoagulant medicines stop your blood from clotting and reduce your risk of a stroke; you may hear them called blood thinners. They include apixaban, dabigatran, edoxaban, rivaroxaban and warfarin. The main side effect is that you can bleed too easily, but for most people the benefits outweigh the risk of excessive bleeding.",
    sections: [
      {
        heading: "What they do",
        paragraphs: [
          "You may be prescribed anticoagulant medicines. They stop your blood from clotting and reduce your risk of a stroke. You may hear anticoagulants called blood thinners.",
        ],
      },
      {
        heading: "The medicines",
        paragraphs: [
          "Anticoagulants you may have include apixaban, dabigatran, edoxaban, rivaroxaban and warfarin.",
          "A commonly prescribed anticoagulant is warfarin. Newer types of anticoagulants, sometimes called direct oral anticoagulants (DOACs), are also commonly used.",
        ],
      },
      {
        heading: "The benefit and the bleeding risk",
        paragraphs: [
          "The main side effect is that you can bleed too easily.",
          "For most people, the benefits of taking anticoagulants will outweigh the risk of excessive bleeding.",
        ],
      },
      {
        heading: "Blood tests for warfarin",
        paragraphs: [
          "If you're taking warfarin, you will need regular blood tests to check how quickly your blood clots.",
          "If you're taking another type of blood thinner you may not need regular appointments to check your blood.",
        ],
      },
      {
        heading: "Taking it every day",
        paragraphs: [
          "It's important to take your anticoagulant medicine as it will reduce your risk of having a stroke.",
          "For most people, anticoagulant tablets or capsules should be taken at the same time once or twice a day.",
        ],
      },
    ],
    helps: [
      "Take your anticoagulant at the same time once or twice a day, as prescribed.",
      "Get into a routine, and give your body time to get used to the medicine.",
      "Carry your anticoagulant alert card with you at all times.",
      "Speak to your pharmacist or GP before taking other medicines or supplements.",
      "If you're struggling with side effects, do not stop taking your medicine before speaking to a healthcare professional.",
    ],
    tryThisWeek: [
      "Take it at the same time each day.",
      "Carry your alert card.",
      "Check before taking other medicines.",
    ],
    ask: "Which blood thinner is right for me, and are there any side effects I need to know about?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments on a blood thinner",
      scenarios: [
        {
          id: "side-effects",
          situation: "The side effects of your medicine are getting you down.",
          options: [{ text: "Speak to a healthcare professional first", best: true }, { text: "Stop taking it" }],
          why: "If you're struggling with the side effects of your medicine, it's important not to stop taking it before speaking to a healthcare professional.",
        },
        {
          id: "supplement",
          situation: "A friend recommends a supplement.",
          options: [{ text: "Ask your pharmacist or GP first", best: true }, { text: "Start it straight away" }],
          why: "Speak to your pharmacist or GP before taking other medicines or supplements, as they can interact with your medicine.",
        },
        {
          id: "away",
          situation: "You're going away on holiday.",
          options: [{ text: "Plan your medicine before you go", best: true }, { text: "Leave it at home for a break" }],
          why: "Plan your medicine if you go away. Take enough medicine to last your holiday.",
        },
      ],
    },
    sources: [BHF_BOOKLET, NHS_ANTICOAG, NHS_ANTICOAG_DOSAGE],
    quiz: {
      question: "What is the main side effect of anticoagulants?",
      options: [{ text: "Bleeding too easily", right: true }, { text: "A faster heartbeat" }, { text: "Higher blood pressure" }],
      why: "The main side effect is that you can bleed too easily.",
    },
  },
  {
    id: "af-rate-rhythm",
    kicker: "Treatment",
    question: "How is the heart slowed down or put back in rhythm?",
    hook: "Medicines can control the heart rate. Cardioversion uses medicine or a controlled shock to get the heart back into a normal rhythm.",
    short: "Medicines can be given to control your heart rate, and your doctor will find the best treatment to control the rate and rhythm of your heart. Cardioversion uses medicine or controlled electrical energy to get your heart back into a normal rhythm. Some people with atrial fibrillation need a pacemaker.",
    sections: [
      {
        heading: "Finding the cause first",
        paragraphs: [
          "The first step is to try to find the cause of your atrial fibrillation. If a cause can be found, you may only need treatment for this, such as an overactive thyroid.",
        ],
      },
      {
        heading: "Medicines for rate and rhythm",
        paragraphs: [
          "Your doctor will find the best treatment for you to control the rate and rhythm of your heart. This may include medicines such as beta blockers and anti-arrhythmic drugs.",
          "Medicines to control your heart rate include beta blockers, calcium channel blockers, digoxin, flecainide, sotalol, amiodarone and dronedarone. Normally you will have more than one.",
        ],
      },
      {
        heading: "Cardioversion",
        paragraphs: [
          "Cardioversion involves giving your heart controlled electrical energy (a shock) to get your heart back into a normal rhythm. It can be done as a planned treatment or as an emergency.",
          "Pharmacological cardioversion is when you're given medicine to get your heart back to a normal rhythm. Electrical cardioversion is when a machine (defibrillator) gives you controlled electrical shocks through sticky pads attached to your chest.",
          "In some cases, cardioversion may only restore a normal rhythm for a short while.",
        ],
      },
      {
        heading: "A pill in the pocket",
        paragraphs: [
          "If you rarely have atrial fibrillation episodes your doctor may give you medicine to take next time you're having an episode. This is called a pill in the pocket.",
        ],
      },
      {
        heading: "A pacemaker",
        paragraphs: [
          "Some people with atrial fibrillation need a pacemaker. It helps your heart beat at a normal rate and can help it to pump better.",
        ],
      },
    ],
    helps: [
      "Discuss your options with your doctor and what they mean for you.",
      "Do not stop taking your medicine if your symptoms stop.",
      "Speak to your GP or a pharmacist if you have side effects; they can change the dose or prescribe a different medicine.",
      "Ask whether a pill in the pocket could suit you if you rarely have episodes.",
    ],
    tryThisWeek: [
      "Talk through your options with your doctor.",
      "Keep taking your medicine.",
      "Ask a pharmacist about side effects.",
    ],
    ask: "Is the plan to slow my heart down or to put it back in rhythm?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments, turned over",
      intro: "Tap a card to see what each treatment does.",
      cards: [
        { id: "rate", front: "Heart rate medicines", when: "Normally more than one", back: "Beta blockers, calcium channel blockers, digoxin and others, to control your heart rate." },
        { id: "chemical", front: "Pharmacological cardioversion", when: "Planned, or as an emergency", back: "Medicine, swallowed or injected, to get your heart back to a normal rhythm." },
        { id: "electrical", front: "Electrical cardioversion", when: "Planned, or as an emergency", back: "A defibrillator gives controlled electrical shocks through sticky pads attached to your chest." },
        { id: "pocket", front: "Pill in the pocket", when: "If you rarely have episodes", back: "Medicine to take next time you're having an episode, to help get your heart rhythm back to normal." },
        { id: "pacemaker", front: "Pacemaker", when: "Some people with atrial fibrillation", back: "A small device usually put under the skin below your collarbone. It helps your heart beat at a normal rate." },
      ],
    },
    sources: [BHF_BOOKLET, BHF_AF, NHS_AF],
    quiz: {
      question: "What is a pill in the pocket?",
      options: [{ text: "Medicine to take when an episode starts", right: true }, { text: "A daily vitamin" }, { text: "A tablet taken only at night" }],
      why: "Your doctor may give you medicine to take next time you're having an episode. This is called a pill in the pocket.",
    },
  },
  {
    id: "af-ablation",
    kicker: "Treatment",
    question: "What is ablation, and who is it for?",
    hook: "A procedure that uses hot or cold energy to scar tiny areas of the heart, blocking the extra impulses that cause the irregular rhythm.",
    short: "Catheter ablation is a procedure to stop parts of your heart sending extra or abnormal electrical impulses. Flexible tubes are guided to your heart, and hot or cold energy is used to scar small areas of tissue. You may be more likely to have ablation if you have very fast heart rhythms or if medicine is not working.",
    sections: [
      {
        heading: "What it does",
        paragraphs: [
          "Catheter ablation, or ablation, is a procedure to stop parts of your heart sending extra or abnormal electrical impulses.",
          "It involves very carefully using hot or cold energy to destroy or scar small areas of tissue in your heart. This blocks the extra impulses that are causing an arrhythmia.",
        ],
      },
      {
        heading: "How it is done",
        paragraphs: [
          "Flexible tubes (catheters) are put into a small cut in your wrist or the top of your leg (groin). They're then guided to your heart to record the electrical activity.",
          "Once the area in your heart sending abnormal electrical impulses is found, an energy source is used to burn or freeze the tissue.",
        ],
      },
      {
        heading: "How long it takes",
        paragraphs: [
          "The procedure can take up to four hours, but it may take much less time.",
          "You will either be given local anaesthetic (you're awake) or general anaesthetic (you're asleep). You will not feel any pain with either option.",
        ],
      },
      {
        heading: "Who it is for",
        paragraphs: [
          "You may be more likely to have ablation if you have very fast heart rhythms or if medicine is not working.",
          "If you're having a catheter ablation procedure, you may be more likely to have a pacemaker fitted.",
        ],
      },
    ],
    helps: [
      "Ask whether ablation is an option if medicine is not working.",
      "Ask whether you'll have a local or general anaesthetic.",
      "Ask your doctor to explain the benefits and possible side effects of each option before you decide.",
      "Ask whether you should see an electrophysiologist, a special doctor for heart rhythm disorders.",
    ],
    tryThisWeek: [
      "Ask if ablation is an option.",
      "Ask about the anaesthetic.",
      "Ask about benefits and side effects.",
    ],
    ask: "Is ablation an option for me?",
    interactive: {
      kind: "timeline",
      title: "Inside an ablation",
      steps: [
        { id: "anaesthetic", when: "First", title: "Anaesthetic", points: ["Local anaesthetic (you're awake) or general anaesthetic (you're asleep).", "You will not feel any pain with either option."] },
        { id: "catheters", when: "Next", title: "Catheters in", points: ["Flexible tubes go into a small cut in your wrist or groin.", "They're guided to your heart to record the electrical activity."] },
        { id: "find", when: "Then", title: "Finding the area", points: ["The area sending abnormal electrical impulses is found."] },
        { id: "treat", when: "Up to four hours in all", title: "Burn or freeze", points: ["An energy source burns or freezes the tissue.", "This blocks the extra impulses causing the arrhythmia."] },
      ],
    },
    sources: [BHF_BOOKLET, BHF_AF, NHS_AF],
    quiz: {
      question: "What does ablation use to scar small areas of heart tissue?",
      options: [{ text: "Hot or cold energy", right: true }, { text: "A blood thinner" }, { text: "A pacemaker" }],
      why: "It involves very carefully using hot or cold energy to destroy or scar small areas of tissue in your heart.",
    },
  },
  {
    id: "af-checking-pulse",
    kicker: "Self-check",
    question: "How do I check my own pulse?",
    hook: "Two fingers on the wrist, 30 seconds on a timer, then double it. A full minute if it feels irregular.",
    short: "Sit or lie down for five minutes first, and do not smoke or drink caffeine before you check. Put two fingers on the wrist, just below the thumb, count the beats for 30 seconds and double that number. If your pulse feels irregular, check for a full 60 seconds, and contact your GP if it is not steady.",
    sections: [
      {
        heading: "Before you start",
        paragraphs: [
          "Before you check your pulse, sit or lie down for five minutes in case any activity changes the reading. Do not smoke or drink caffeine before checking your pulse.",
        ],
      },
      {
        heading: "Finding it",
        paragraphs: [
          "Hold one arm out with your palm facing up, keeping your elbow slightly bent.",
          "Put the first two fingers of your other arm on the wrist of your outstretched arm, just below where your thumb connects to your wrist. Press your fingers firmly against your skin.",
        ],
      },
      {
        heading: "Counting",
        paragraphs: [
          "You should feel a light beat or throbbing feeling. Using a clock or timer on your phone, count the number of beats for 30 seconds. Double that number to get your heart rate in beats per minute.",
          "If your pulse feels irregular, you should check for a full 60 seconds.",
        ],
      },
      {
        heading: "What to look for",
        paragraphs: [
          "A normal heart rate is steady and usually between 60 and 100 beats per minute when you're resting. If you have atrial fibrillation your pulse will usually have no set pattern, and the beats may have different strengths.",
          "An irregular pulse could be a sign of an arrhythmia, such as atrial fibrillation. This is more likely if you are 65 or older.",
        ],
      },
      {
        heading: "When to contact your GP",
        paragraphs: [
          "Contact your GP if you notice that your pulse is not steady or has no set pattern.",
        ],
      },
    ],
    helps: [
      "Sit or lie down for five minutes before you check your pulse.",
      "Do not smoke or drink caffeine before checking your pulse.",
      "Count the beats for 30 seconds and double that number.",
      "If your pulse feels irregular, check for a full 60 seconds.",
      "Contact your GP if your pulse is not steady or has no set pattern.",
    ],
    tryThisWeek: [
      "Sit for five minutes first.",
      "Count for 30 seconds, then double it.",
      "Count a full minute if it feels irregular.",
    ],
    ask: "How often should I check my pulse, and what should I do if it is irregular?",
    interactive: {
      kind: "timeline",
      title: "Your pulse, step by step",
      steps: [
        { id: "rest", when: "Five minutes before", title: "Sit or lie down", points: ["Rest in case any activity changes the reading.", "Do not smoke or drink caffeine first."] },
        { id: "arm", when: "Step 1", title: "Arm out", points: ["Hold one arm out, palm up, elbow slightly bent."] },
        { id: "fingers", when: "Step 2", title: "Two fingers", points: ["Put the first two fingers of your other hand just below where your thumb meets your wrist.", "Press firmly against your skin."] },
        { id: "count", when: "Step 3", title: "Count and double", points: ["Count the beats for 30 seconds.", "Double that number to get beats per minute."] },
        { id: "irregular", when: "If it feels irregular", title: "A full minute", points: ["Check for a full 60 seconds.", "Contact your GP if your pulse is not steady or has no set pattern."] },
      ],
    },
    sources: [BHF_BOOKLET, BHF_PULSE, BHF_HEART_RATE],
    quiz: {
      question: "If your pulse feels irregular, how long should you count for?",
      options: [{ text: "A full 60 seconds", right: true }, { text: "Ten seconds" }, { text: "Five minutes" }],
      why: "If your pulse feels irregular, you should check for a full 60 seconds.",
    },
  },
  {
    id: "af-alcohol-caffeine",
    kicker: "Triggers",
    question: "Do alcohol, caffeine and other things trigger atrial fibrillation?",
    hook: "Alcohol, caffeine, spicy food, smoking, stress and dehydration are common triggers. Knowing your own is part of managing AF.",
    short: "You may be more likely to trigger an episode if you drink too much alcohol, drink lots of caffeine, eat very spicy food or smoke. Stress, dehydration and lack of sleep can be triggers too. Working out what triggers your atrial fibrillation is an important part of self-management.",
    sections: [
      {
        heading: "Common triggers",
        paragraphs: [
          "Common triggers include alcohol, dehydration, caffeine, spicy food, smoking and stress.",
          "You may be more likely to trigger an atrial fibrillation episode and symptoms if you drink too much alcohol, are living with excess weight, drink lots of caffeine, eat very spicy food, smoke, or take illegal drugs, such as amphetamines or cocaine.",
        ],
      },
      {
        heading: "Alcohol",
        paragraphs: [
          "Do not drink too much alcohol. Limiting how much alcohol you drink, to under 14 units per week, is one of the simple lifestyle changes that can help manage atrial fibrillation.",
        ],
      },
      {
        heading: "Other things to avoid",
        paragraphs: [
          "Try to avoid triggers such as caffeine, spicy food, stress, dehydration and lack of sleep. Do not smoke.",
        ],
      },
      {
        heading: "Knowing your own triggers",
        paragraphs: [
          "Working out what triggers your atrial fibrillation is another important part of self-management.",
          "You could commit to making one swap this week. By making lots of smaller changes you're more likely to stick to them.",
        ],
      },
    ],
    helps: [
      "Avoid triggers such as caffeine, spicy food, stress, dehydration and lack of sleep.",
      "Limit how much alcohol you drink to under 14 units per week.",
      "Stop smoking and using other tobacco products.",
      "Work out what triggers your atrial fibrillation.",
      "Commit to making one swap this week.",
    ],
    tryThisWeek: [
      "Cut down on caffeine.",
      "Keep alcohol under 14 units a week.",
      "Make one swap this week.",
    ],
    ask: "Which of my triggers is worth tackling first?",
    interactive: {
      kind: "risk-check",
      title: "Which of these might set yours off?",
      intro: "Tick any that seem to come before an episode for you.",
      items: [
        { id: "alcohol", label: "Alcohol", note: "Limit how much alcohol you drink to under 14 units per week.", changeable: true },
        { id: "caffeine", label: "Lots of caffeine", note: "Drinking lots of caffeine can make an episode more likely.", changeable: true },
        { id: "spicy", label: "Very spicy food", note: "Eating very spicy food can make an episode more likely.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Stop smoking and using other tobacco products.", changeable: true },
        { id: "stress", label: "Stress", note: "Try to avoid triggers such as stress.", changeable: true },
        { id: "water", label: "Dehydration", note: "Try to avoid triggers such as dehydration.", changeable: true },
        { id: "sleep", label: "Lack of sleep", note: "Try to avoid triggers such as lack of sleep.", changeable: true },
        { id: "drugs", label: "Illegal drugs", note: "Taking illegal drugs, such as amphetamines or cocaine, can make an episode more likely.", changeable: true },
      ],
    },
    sources: [NHS_AF, BHF_BOOKLET, BHF_LIVING],
    quiz: {
      question: "What weekly alcohol limit does the British Heart Foundation give?",
      options: [{ text: "Under 14 units per week", right: true }, { text: "Under 30 units per week" }, { text: "There is no limit" }],
      why: "Limiting how much alcohol you drink, to under 14 units per week, is one of the simple lifestyle changes that can help manage atrial fibrillation.",
    },
  },
  {
    id: "af-bleeding",
    kicker: "Every day",
    question: "What about cuts, dentists and operations on a blood thinner?",
    hook: "Carry your alert card, tell your dentist and surgeon, and know which kinds of bleeding need help straight away.",
    short: "Anticoagulants can make you more prone to bleeding if you're injured. Tell your dentist and anyone treating you for surgery that you take one, and only stop it on the advice of your GP or another healthcare professional. If you notice any severe or recurrent bleeding, seek medical attention immediately.",
    sections: [
      {
        heading: "Carry your card",
        paragraphs: [
          "You'll be given an alert card that you should carry with you at all times. It lets other healthcare professionals know that you're taking a blood thinner.",
        ],
      },
      {
        heading: "Dentists and operations",
        paragraphs: [
          "If you're having a dental procedure, such as having a tooth removed, tell your dentist that you take anticoagulants.",
          "If you're having surgery, make sure that the healthcare professionals treating you are aware of your medicine. Only stop taking your medicine on the advice of your GP or another healthcare professional.",
        ],
      },
      {
        heading: "Injuries",
        paragraphs: [
          "Taking anticoagulant medicines can make you more prone to bleeding if you're injured.",
          "Your GP or anticoagulant clinic may advise you to avoid contact sports because of the risk of excessive bleeding.",
        ],
      },
      {
        heading: "Bleeding to watch for",
        paragraphs: [
          "Signs include passing blood when you poo or having black poo, severe bruising, nosebleeds lasting longer than 10 minutes, and vomiting blood.",
          "If you notice any severe or recurrent bleeding, seek medical attention immediately. Call 111 or go to your nearest accident and emergency (A&E) department.",
        ],
      },
      {
        heading: "Other medicines",
        paragraphs: [
          "Speak to your GP, anticoagulant clinic or pharmacist before taking any other medicine, remedy or supplement. Some treatments can stop anticoagulants working or can increase the effect they have.",
          "If you're taking warfarin you may need to avoid medicines that reduce pain and inflammation (called NSAIDs), such as ibuprofen, naproxen, diclofenac and higher-dose aspirin.",
        ],
      },
    ],
    helps: [
      "Carry your anticoagulant alert card with you at all times.",
      "Tell your dentist that you take anticoagulants.",
      "Only stop taking your medicine on the advice of your GP or another healthcare professional.",
      "Speak to your GP, anticoagulant clinic or pharmacist before taking any other medicine, remedy or supplement.",
      "Seek medical attention immediately if you notice any severe or recurrent bleeding.",
    ],
    tryThisWeek: [
      "Carry your alert card.",
      "Tell your dentist about your anticoagulant.",
      "Check before taking other medicines.",
    ],
    ask: "Do I need to do anything about my blood thinner before a dental procedure or an operation?",
    interactive: {
      kind: "signs",
      title: "Bleeding to watch for",
      intro: "Tick anything you have noticed. The ones you tick make a list to tell your doctor or clinic.",
      signs: [
        "Blood when you poo, or black poo",
        "Severe bruising",
        "A nosebleed lasting over 10 minutes",
        "Vomiting blood",
        "Bleeding you cannot stop",
      ],
      after: "If you notice any severe or recurrent bleeding, seek medical attention immediately. Call 111 or go to your nearest accident and emergency (A&E) department.",
    },
    sources: [BHF_BOOKLET, NHS_ANTICOAG_CONSIDER, NHS_ANTICOAG_SIDE],
    quiz: {
      question: "Which nosebleed is a warning sign on a blood thinner?",
      options: [{ text: "One lasting longer than 10 minutes", right: true }, { text: "Any nosebleed at all" }, { text: "One lasting a few seconds" }],
      why: "Signs include nosebleeds lasting longer than 10 minutes.",
    },
  },
  {
    id: "af-exercise",
    kicker: "Staying active",
    question: "Can I exercise with atrial fibrillation?",
    hook: "Most activities, including exercise, can carry on. Build up gradually, and wait if you're having an episode.",
    short: "Exercise can improve your confidence and heart health, and the NHS suggests aiming for at least 150 minutes of moderate exercise a week. Do not exercise too much or too hard, as this can trigger atrial fibrillation. If you are having an episode or symptoms, it's better to wait until they have stopped.",
    sections: [
      {
        heading: "Exercise can help",
        paragraphs: [
          "It's normal to worry about exercising with atrial fibrillation. Exercise can improve your confidence and heart health.",
          "Exercise regularly, aiming for at least 150 minutes of moderate exercise a week.",
        ],
      },
      {
        heading: "Not too hard",
        paragraphs: [
          "Do not exercise too much or too hard. This can trigger atrial fibrillation.",
          "It's important to speak to your doctor about your individual situation and how to exercise in a safe way.",
        ],
      },
      {
        heading: "During an episode",
        paragraphs: [
          "If you are having an atrial fibrillation episode or symptoms, it's better to wait until your symptoms have stopped.",
          "If you have atrial fibrillation all the time, you can exercise if your heart rate is under control, your treatment is stable and you feel generally well.",
        ],
      },
      {
        heading: "Tips",
        paragraphs: [
          "Build exercise up gradually over time. Break your exercise up into smaller chunks so it's more manageable.",
          "Do a warm-up before exercise and a cool-down after. Stop exercising if you feel breathless, have chest pain or dizziness.",
        ],
      },
    ],
    helps: [
      "Speak to your doctor about how to exercise in a safe way.",
      "Build exercise up gradually over time.",
      "Break your exercise up into smaller chunks so it's more manageable.",
      "Do a warm-up before exercise and a cool-down after.",
      "Stop exercising if you feel breathless, have chest pain or dizziness.",
    ],
    tryThisWeek: [
      "Build up gradually.",
      "Warm up and cool down.",
      "Stop if breathless, dizzy or in pain.",
    ],
    ask: "How can I exercise safely with my atrial fibrillation?",
    interactive: {
      kind: "scenarios",
      title: "Moments on the move",
      scenarios: [
        {
          id: "episode",
          situation: "You feel an episode starting just before your walk.",
          options: [{ text: "Wait until your symptoms have stopped", best: true }, { text: "Walk faster to shake it off" }],
          why: "If you are having an atrial fibrillation episode or symptoms, it's better to wait until your symptoms have stopped.",
        },
        {
          id: "dizzy",
          situation: "Halfway through, you feel breathless and dizzy.",
          options: [{ text: "Stop exercising", best: true }, { text: "Push on to finish" }],
          why: "Stop exercising if you feel breathless, have chest pain or dizziness.",
        },
        {
          id: "start",
          situation: "You want to get more active after a long break.",
          options: [{ text: "Build up gradually, in smaller chunks", best: true }, { text: "Start with a long, hard session" }],
          why: "Build exercise up gradually over time. Break your exercise up into smaller chunks so it's more manageable.",
        },
      ],
    },
    sources: [NHS_AF, BHF_BOOKLET, BHF_LIVING],
    quiz: {
      question: "What should you do if you're having an episode?",
      options: [{ text: "Wait until your symptoms have stopped", right: true }, { text: "Exercise harder" }, { text: "Carry on as normal" }],
      why: "If you are having an atrial fibrillation episode or symptoms, it's better to wait until your symptoms have stopped.",
    },
  },
  {
    id: "af-worry",
    kicker: "Feelings",
    question: "How do I cope with the worry of an irregular heart?",
    hook: "Being told you have a heart condition can be scary. Talking it through, and knowing people have your back, helps.",
    short: "Being told you have a heart condition can be scary and overwhelming, and the first diagnosis can bring high levels of anxiety. Talking it through with your healthcare team and the people close to you can help. If you feel anxious and sad a lot of the time and it's affecting your daily life, talk to your GP.",
    sections: [
      {
        heading: "A common feeling",
        paragraphs: [
          "When you're told you have a heart condition it can be scary and overwhelming. The initial diagnosis can result in high levels of anxiety, and atrial fibrillation can lead to low mood too.",
          "Dealing with stress and anxiety is also common after being told you have a heart condition.",
        ],
      },
      {
        heading: "Talking it through",
        paragraphs: [
          "Talking it through can help you and your loved ones to understand your condition and what it means for you.",
          "Speak to your healthcare team. They can answer any questions you have so you can feel in control of your condition.",
        ],
      },
      {
        heading: "People who can support you",
        paragraphs: [
          "Your support network can include healthcare professionals, family, friends, and others living with atrial fibrillation.",
          "The British Heart Foundation Heart Helpline lets you speak to cardiac nurses on 0808 802 1234, on weekdays from 9am to 5pm.",
        ],
      },
      {
        heading: "When worry gets in the way",
        paragraphs: [
          "It's normal to feel worried or anxious about your health. But sometimes, this can get in the way of living your life.",
          "If you feel anxious and sad a lot of the time, and it's affecting your daily life, talk to your GP. You can also refer yourself to the NHS for talking therapies, like cognitive behavioural therapy (CBT) or counselling.",
        ],
      },
    ],
    helps: [
      "Work out what activities relieve anxiety and boost your mood.",
      "Talk to your GP if you feel anxious and sad a lot of the time and it's affecting your daily life.",
      "Refer yourself to NHS talking therapies.",
      "Call the British Heart Foundation Heart Helpline to speak to a cardiac nurse.",
      "Find a support group, or a programme on living with atrial fibrillation, on HealthUnlocked or through the AF Association.",
    ],
    tryThisWeek: [
      "Find one activity that lifts your mood.",
      "Look up NHS talking therapies.",
      "Look for a support group.",
    ],
    ask: "Is there support near me for the anxiety I feel about my heart?",
    interactive: {
      kind: "scenarios",
      title: "Where to turn",
      scenarios: [
        {
          id: "gp",
          situation: "You feel anxious and sad a lot of the time, and it's affecting your daily life.",
          options: [{ text: "Talk to your GP", best: true }, { text: "Keep it to yourself" }],
          why: "If you feel anxious and sad a lot of the time, and it's affecting your daily life, talk to your GP.",
        },
        {
          id: "questions",
          situation: "You have questions about your condition that keep coming back.",
          options: [{ text: "Speak to your healthcare team", best: true }, { text: "Try not to think about it" }],
          why: "Your healthcare team can answer any questions you have so you can feel in control of your condition.",
        },
        {
          id: "others",
          situation: "You'd like to talk to other people living with atrial fibrillation.",
          options: [{ text: "Look for a support group", best: true }, { text: "Wait until it passes" }],
          why: "Your support network can include healthcare professionals, family, friends, and others living with atrial fibrillation.",
        },
      ],
    },
    sources: [BHF_BOOKLET, BHF_LIVING, BHF_AF],
    quiz: {
      question: "What does the British Heart Foundation suggest if anxiety is affecting your daily life?",
      options: [{ text: "Talk to your GP", right: true }, { text: "Keep it to yourself" }, { text: "Stop your medicines" }],
      why: "If you feel anxious and sad a lot of the time, and it's affecting your daily life, talk to your GP.",
    },
  },
];
