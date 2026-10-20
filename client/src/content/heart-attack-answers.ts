import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Heart attack page's pieces (content/library-conditions/heart.ts
// `learnId`). Every sentence was written from wording checked on 20 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, the
// British Heart Foundation (a UK charity) and NICE's guideline on acute coronary syndromes, with driving
// rules from the DVLA pages on GOV.UK. General information only; it never replaces what a person's own
// heart team tells them.

const bhf = (label: string, path: string): LearnSource => ({ label: `British Heart Foundation: ${label}`, url: `https://www.bhf.org.uk/informationsupport/${path}` });
const NHS_HEART_ATTACK: LearnSource = { label: "NHS: Heart attack", url: "https://www.nhs.uk/conditions/heart-attack/" };
const NHS_STATINS: LearnSource = { label: "NHS: Statins", url: "https://www.nhs.uk/medicines/statins/" };
const NHS_ECG: LearnSource = { label: "NHS: Electrocardiogram (ECG)", url: "https://www.nhs.uk/tests-and-treatments/electrocardiogram/" };
const NHS_ANGIOPLASTY: LearnSource = { label: "NHS: Coronary angioplasty and stent insertion", url: "https://www.nhs.uk/tests-and-treatments/coronary-angioplasty/" };
const NHS_GTN_HOW: LearnSource = { label: "NHS: How and when to take glyceryl trinitrate (GTN)", url: "https://www.nhs.uk/medicines/glyceryl-trinitrate-gtn/how-and-when-to-take-glyceryl-trinitrate-gtn/" };
const NHS_GTN_QUESTIONS: LearnSource = { label: "NHS: Common questions about glyceryl trinitrate (GTN)", url: "https://www.nhs.uk/medicines/glyceryl-trinitrate-gtn/common-questions-about-glyceryl-trinitrate-gtn/" };
const NHS_STOP_SMOKING: LearnSource = { label: "NHS: Stop smoking services help you quit", url: "https://www.nhs.uk/live-well/quit-smoking/nhs-stop-smoking-services-help-you-quit/" };
const BHF_HEART_ATTACK = bhf("Heart attack", "conditions/heart-attack");
const BHF_TYPES = bhf("What are the different types of heart attacks?", "heart-matters-magazine/medical/ask-the-experts/what-are-the-different-types-of-heart-attacks");
const BHF_TROPONIN = bhf("What is troponin?", "heart-matters-magazine/medical/ask-the-experts/troponin");
const BHF_ECHO = bhf("Echocardiogram", "tests/echocardiogram");
const BHF_ANGIOGRAM = bhf("Coronary angiogram", "tests/angiogram");
const BHF_STATINS = bhf("Statins and what they do", "treatments/statins");
const BHF_ANGIOPLASTY = bhf("Coronary angioplasty and stents", "treatments/coronary-angioplasty-and-stents");
const BHF_ANTIPLATELETS = bhf("Antiplatelets", "heart-matters-magazine/medical/drug-cabinet/antiplatelets");
const BHF_REHAB = bhf("What is cardiac rehabilitation?", "support/cardiac-rehabilitation/what-is-cardiac-rehab");
const BHF_CHEST_PAIN = bhf("Chest pain: what are the common causes?", "heart-matters-magazine/medical/chest-pain");
const BHF_ANXIETY = bhf("How to deal with anxiety when you have a heart problem", "heart-matters-magazine/wellbeing/how-to-deal-with-anxiety");
const BHF_DEPRESSION = bhf("How to deal with depression when you have heart problems", "heart-matters-magazine/wellbeing/how-to-deal-with-depression-when-you-have-heart-problems");
const BHF_EMOTIONAL = bhf("Emotional support", "support/emotional-support-and-wellbeing");
const BHF_DRIVING = bhf("Driving with a heart or circulatory condition", "support/practical-support/driving");
const BHF_WORK = bhf("Work with a heart condition", "support/practical-support/work-and-a-heart-condition");
const BHF_TRAVEL = bhf("Holidays and travel", "support/practical-support/holidays-and-travel");
const BHF_EATING = bhf("Healthy eating", "support/healthy-living/healthy-eating");
const BHF_SEX = bhf("Sex and heart conditions", "support/practical-support/sex-and-heart-conditions");
const BHF_SMOKING = bhf("Smoking", "risk-factors/smoking");
const NICE_ACS: LearnSource = { label: "NICE: Acute coronary syndromes (NG185)", url: "https://www.nice.org.uk/guidance/ng185/chapter/Recommendations" };
const GOV_HEART_ATTACK_DRIVING: LearnSource = { label: "GOV.UK: Heart attacks, angioplasty, and driving", url: "https://www.gov.uk/heart-attacks-and-driving" };

export const heartAttackAnswers: LearnArticle[] = [
  {
    id: "mi-statins",
    kicker: "Statins",
    question: "Do statins really need to be taken for life?",
    hook: "Your body never stops making cholesterol. That is why most people keep taking a statin every day.",
    short: "Statins lower the amount of cholesterol your body makes and help protect your arteries. Most people take a statin every day for the rest of their life, because if you stop, your cholesterol will go up again. Talk to a doctor or pharmacist before stopping, as there are other options to discuss.",
    sections: [
      {
        heading: "What statins do",
        paragraphs: [
          "Statins are medicines that help lower your cholesterol and protect your arteries. They work by lowering the amount of cholesterol your body makes.",
          "After a heart attack, statins like atorvastatin reduce the level of cholesterol in your blood and protect the insides of your arteries.",
        ],
      },
      {
        heading: "Usually for life",
        paragraphs: [
          "You'll usually take statins long term. This helps keep the risk of a heart attack or stroke as low as possible as you get older.",
          "Most people will take a statin every day for the rest of their life.",
        ],
      },
      {
        heading: "If you stop",
        paragraphs: [
          "If you stop taking a statin, and do not make changes to your lifestyle, your cholesterol will go up again. This is because your body will always make cholesterol.",
          "Talk to a doctor or pharmacist before stopping.",
        ],
      },
      {
        heading: "Side effects and choices",
        paragraphs: [
          "Most people taking statins will have no side effects. Research has found that statins do not cause most reported side effects.",
          "If you are unsure about your statin, options to talk about include trying a different statin, changing the dose, or other medicines to lower your cholesterol. It's your choice whether you take a statin.",
        ],
      },
    ],
    helps: [
      "Take your statin at the same time every day, such as before you brush your teeth at night.",
      "If you forget a dose, take your normal dose the next day; do not have an extra statin.",
      "Talk to a doctor or pharmacist before stopping a statin.",
      "If side effects bother you, ask about trying a different statin, changing the dose or another medicine.",
      "Avoid grapefruit and grapefruit juice, and keep alcohol below 14 units a week.",
    ],
    tryThisWeek: [
      "Take it at the same time each day.",
      "Ask before you stop.",
      "Skip grapefruit juice.",
    ],
    ask: "How long will I need my statin, and what would happen if I stopped?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments with a statin",
      scenarios: [
        { id: "forgot", situation: "You realise you forgot last night's statin.", options: [{ text: "Take your normal dose the next day", best: true }, { text: "Take two tonight to catch up" }, { text: "Stop for a week" }], why: "If you forget to take your statin, take your normal dose the next day. Do not have an extra statin." },
        { id: "aches", situation: "New aches since starting your statin are worrying you.", options: [{ text: "Talk to your doctor about other options", best: true }, { text: "Stop it without telling anyone" }], why: "Talk to your doctor if you're worried about side effects. They can help you manage them or look at other options with you." },
        { id: "grapefruit", situation: "Breakfast comes with a glass of grapefruit juice.", options: [{ text: "Choose a different drink", best: true }, { text: "Have a large glass" }], why: "Some things can affect how well your statin works, including grapefruit and grapefruit juice." },
      ],
    },
    sources: [NHS_STATINS, BHF_STATINS, BHF_HEART_ATTACK],
    quiz: {
      question: "How long do most people take a statin for?",
      options: [{ text: "Every day for the rest of their life", right: true }, { text: "For six weeks" }, { text: "Only when they feel unwell" }],
      why: "Most people will take a statin every day for the rest of their life.",
    },
  },
  {
    id: "mi-what-happened",
    kicker: "Understanding",
    question: "What happened to my heart?",
    hook: "A clot blocked an artery and part of the heart muscle lost its blood supply. Treatment aims to get blood flowing again, fast.",
    short: "A heart attack happens when there is a sudden loss of blood flow to part of the heart muscle. Most are caused by coronary heart disease: fatty deposits narrow an artery, and a blood clot forms and blocks it. Quick treatment, such as a stent that acts like scaffolding, gets blood flowing again and can reduce permanent damage.",
    sections: [
      {
        heading: "A blocked supply",
        paragraphs: [
          "A heart attack happens when there's a sudden loss of blood flow to a part of the heart muscle. Without enough blood and oxygen, your heart can be seriously damaged.",
        ],
      },
      {
        heading: "The artery and the clot",
        paragraphs: [
          "Most heart attacks are caused by coronary heart disease. Your coronary arteries become narrowed by a gradual build-up of fatty deposits called atheroma.",
          "If a piece of atheroma breaks off, a blood clot forms around it to try and repair the damage. This clot can block your coronary artery, starving your heart muscle of blood and oxygen.",
        ],
      },
      {
        heading: "Getting blood flowing again",
        paragraphs: [
          "Quick treatment to get the blood flowing to your heart muscle again is important. It can reduce the amount of permanent damage to your heart and save your life.",
          "Treatment may be a coronary angioplasty with stents, clot-busting medicine to dissolve the clot, or bypass surgery.",
        ],
      },
      {
        heading: "What a stent does",
        paragraphs: [
          "A stent is a short wire mesh tube put into the artery during an angioplasty. It is left in place permanently to allow blood to flow more freely.",
          "When the balloon is deflated and removed, the stent stays in place, acting like a scaffold to keep your artery open.",
        ],
      },
      {
        heading: "Not a cardiac arrest",
        paragraphs: [
          "A heart attack is not the same as a cardiac arrest. A cardiac arrest happens when your heart suddenly stops pumping blood around your body.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or nurse what your test results mean for you.",
      "Keep taking medicines such as aspirin and clopidogrel after a stent; blood clots can form within stents even after the procedure.",
      "Make healthy changes to help a stent work long term: eat more healthily, get more active, give up smoking and cut down on alcohol.",
    ],
    tryThisWeek: [
      "Ask what your results mean.",
      "Keep taking your stent medicines.",
      "Pick one healthy change to start.",
    ],
    ask: "Which artery was blocked, and how much of my heart was affected?",
    interactive: {
      kind: "timeline",
      title: "How a heart attack unfolds",
      steps: [
        { id: "years", when: "Over years", title: "Fatty deposits build up", points: ["Atheroma gradually narrows the coronary arteries."] },
        { id: "clot", when: "The moment", title: "A clot blocks the artery", points: ["A piece of atheroma breaks off and a clot forms around it.", "Heart muscle is starved of blood and oxygen."] },
        { id: "treat", when: "In hospital", title: "Blood flow restored", points: ["A stent, clot-busting medicine or bypass surgery.", "Quick treatment can reduce permanent damage."] },
        { id: "after", when: "Afterwards", title: "Keeping the artery open", points: ["The stent stays in place like a scaffold.", "Medicines help stop clots forming in and around the stent."] },
      ],
    },
    sources: [NHS_HEART_ATTACK, BHF_HEART_ATTACK, NHS_ANGIOPLASTY, BHF_ANGIOPLASTY],
    quiz: {
      question: "What does a stent do?",
      options: [{ text: "Acts like a scaffold to keep the artery open", right: true }, { text: "Dissolves the clot" }, { text: "Replaces damaged heart muscle" }],
      why: "The stent stays in place, acting like a scaffold to keep your artery open.",
    },
  },
  {
    id: "mi-types",
    kicker: "Understanding",
    question: "What do STEMI and NSTEMI mean?",
    hook: "Two kinds of heart attack, told apart by the ECG. Both need urgent treatment.",
    short: "There are two main types of heart attack. In a STEMI the ECG shows a change called ST elevation and the artery is likely totally blocked. In an NSTEMI the artery is partially blocked, troponin is high, but the ECG does not show that change. An NSTEMI is less severe but can turn into a STEMI, so both need urgent care.",
    sections: [
      {
        heading: "Two main types",
        paragraphs: [
          "There are 2 main types of heart attack: STEMI (ST-segment elevation myocardial infarction) and NSTEMI (non-ST-segment elevation myocardial infarction).",
          "Both are caused by blockages in the coronary arteries. The main difference is the extent of the blockage, and the damage caused to the heart.",
        ],
      },
      {
        heading: "STEMI",
        paragraphs: [
          "Using an ECG, doctors can see a change in the electrical signals in your heart called ST elevation when you've had a STEMI.",
          "If your ECG shows ST elevation and you have high troponin blood levels, your coronary artery is likely totally blocked. A STEMI needs urgent treatment to clear the blocked artery and restore blood flow.",
        ],
      },
      {
        heading: "NSTEMI",
        paragraphs: [
          "In an NSTEMI, the coronary artery is partially blocked. Your troponin levels will be high, but your ECG will not show the changes seen in a STEMI.",
          "Even though it's less severe, an NSTEMI can turn into a STEMI if the blockage is not treated quickly, so urgent medical attention is still needed.",
        ],
      },
      {
        heading: "Other names you may hear",
        paragraphs: [
          "In hospital, you might hear a heart attack called acute coronary syndrome, myocardial infarction (MI) or coronary thrombosis.",
          "The symptoms of both types of heart attack are the same.",
        ],
      },
    ],
    helps: [
      "If you're not sure which type of heart attack you had, ask your doctor or nurse to confirm.",
      "Ask a doctor to discuss what your ECG and blood test results mean for you.",
      "Call 999 straight away for heart attack symptoms, whichever type it might be.",
    ],
    tryThisWeek: [
      "Ask which type you had.",
      "Ask what your results showed.",
      "Know when to call 999.",
    ],
    ask: "Was mine a STEMI or an NSTEMI, and what does that mean for me?",
    interactive: {
      kind: "flip-cards",
      title: "What the letters mean",
      intro: "Turn each card to see what it means.",
      cards: [
        { id: "stemi", front: "STEMI", when: "ST elevation on the ECG", back: "The artery is likely totally blocked. It needs urgent treatment to clear it and restore blood flow." },
        { id: "nstemi", front: "NSTEMI", when: "High troponin, no ST elevation", back: "The artery is partially blocked. Less severe, but it can turn into a STEMI, so urgent care is still needed." },
        { id: "acs", front: "Acute coronary syndrome", when: "A name you may hear in hospital", back: "Another name for a heart attack, alongside myocardial infarction (MI) and coronary thrombosis." },
      ],
    },
    sources: [BHF_TYPES, BHF_HEART_ATTACK, NHS_HEART_ATTACK],
    quiz: {
      question: "In an NSTEMI, what is the artery usually like?",
      options: [{ text: "Partially blocked", right: true }, { text: "Totally blocked" }, { text: "Completely clear" }],
      why: "In an NSTEMI, the coronary artery is partially blocked.",
    },
  },
  {
    id: "mi-tests",
    kicker: "Tests",
    question: "What were all those tests: ECG, troponin, angiogram, echo?",
    hook: "Each test answers a different question: is it a heart attack, where is the blockage, and how well is the heart pumping?",
    short: "An ECG records the electrical activity of your heart. A troponin blood test shows whether the heart has been injured. A coronary angiogram finds exactly where blood flow is blocked, and the blockage may be treated at the same time. An echocardiogram uses sound waves to show how well your heart is pumping and whether it has been damaged.",
    sections: [
      {
        heading: "ECG",
        paragraphs: [
          "An ECG records the electrical activity of your heart, including the rate and rhythm. It's usually quick and painless.",
          "Paramedics will often do an ECG, as it is an important test to find out if you're having a heart attack.",
        ],
      },
      {
        heading: "Troponin",
        paragraphs: [
          "Troponin is a protein found in your muscles, including your heart. When your heart is injured or damaged, troponin is released into your blood.",
          "Doctors may recheck your blood several times to see if your troponin levels are still rising. There are no set numbers for a high level, because different hospitals use different testing machines.",
        ],
      },
      {
        heading: "Coronary angiogram",
        paragraphs: [
          "A coronary angiogram can find out exactly where the blood flow to your heart is blocked. The blockage may be treated at the same time.",
          "A thin, flexible tube is passed into an artery in your wrist or groin and guided to your heart. A dye shows any narrowed areas or blockages on X-ray. It's very common to feel a hot, flushing sensation for a few seconds as the dye goes in.",
        ],
      },
      {
        heading: "Echocardiogram",
        paragraphs: [
          "An echocardiogram, or echo, is a scan of the heart that uses sound waves to build up a picture. It gives information on how well your heart is pumping, and can find out if your heart has been damaged.",
          "There are no risks or side effects from having a standard echo.",
        ],
      },
    ],
    helps: [
      "Ask to talk to a healthcare professional if you have questions about your results or do not understand them.",
      "If you've not heard about results after a few weeks, contact the doctor who referred you.",
      "Tell the team if you feel unwell or uncomfortable at any time during an angiogram.",
      "If you feel very anxious about an angiogram, you can ask for a mild sedative to help you relax.",
    ],
    tryThisWeek: [
      "Write down questions about your results.",
      "Chase results after a few weeks.",
      "Ask about a sedative if you're anxious.",
    ],
    ask: "What did my echo show about how well my heart is pumping?",
    interactive: {
      kind: "flip-cards",
      title: "The tests",
      intro: "Turn each card to see what the test looks for.",
      cards: [
        { id: "ecg", front: "ECG", when: "In the ambulance and in hospital", back: "Records the electrical activity of your heart, including the rate and rhythm. Usually quick and painless." },
        { id: "troponin", front: "Troponin blood test", when: "Often repeated several times", back: "Troponin is released into the blood when the heart is injured or damaged." },
        { id: "angiogram", front: "Coronary angiogram", when: "If a heart attack is found", back: "Dye shows exactly where blood flow is blocked. The blockage may be treated at the same time." },
        { id: "echo", front: "Echocardiogram", when: "To check for damage", back: "Sound waves build a picture of your heart, showing how well it is pumping." },
      ],
    },
    sources: [NHS_HEART_ATTACK, NHS_ECG, BHF_HEART_ATTACK, BHF_TROPONIN, BHF_ANGIOGRAM, BHF_ECHO],
    quiz: {
      question: "What does an echocardiogram use to make a picture of the heart?",
      options: [{ text: "Sound waves", right: true }, { text: "A dye and X-rays" }, { text: "A blood sample" }],
      why: "An echocardiogram, or echo, is a scan of the heart that uses sound waves to build up a picture.",
    },
  },
  {
    id: "mi-why-me",
    kicker: "Causes",
    question: "Why did it happen to me?",
    hook: "Some risks you can change, such as smoking and blood pressure. Some you cannot, such as age and family history.",
    short: "Heart attacks are usually caused by a blood clot stopping enough blood getting to the heart, most often because of coronary heart disease. You're more likely to have one if you smoke, have high blood pressure, high cholesterol or diabetes, are living with overweight, or have a close relative who has had one. Some risks cannot be changed, but many can.",
    sections: [
      {
        heading: "Usually a clot",
        paragraphs: [
          "Heart attacks are usually caused by a blood clot stopping enough blood getting to your heart. Most heart attacks are caused by coronary heart disease.",
        ],
      },
      {
        heading: "What raises the risk",
        paragraphs: [
          "You're more likely to have a heart attack if you smoke, have high blood pressure, have high cholesterol, or have diabetes.",
          "The risk is also higher if you are living with overweight or obesity, or have a close relative who's had a heart attack.",
        ],
      },
      {
        heading: "What you cannot change",
        paragraphs: [
          "Some risk factors cannot be controlled. These include family history, getting older, your ethnic background, your assigned sex at birth, and having had a previous heart attack.",
        ],
      },
      {
        heading: "Less common causes",
        paragraphs: [
          "Less common causes include a tear in the wall of a coronary artery, called spontaneous coronary artery dissection or SCAD. Harmful drugs like cocaine and amphetamines, and a sudden drop in oxygen levels in the body, can also cause a heart attack.",
        ],
      },
      {
        heading: "What you can change",
        paragraphs: [
          "You cannot always prevent a heart attack, but there are lifestyle changes you can make to reduce your risk of having one.",
        ],
      },
    ],
    helps: [
      "Stop smoking and using other tobacco products.",
      "Try to keep your cholesterol and blood pressure at a healthy level.",
      "Eat a healthy, balanced diet and reduce the salt and saturated fat you eat.",
      "Exercise regularly and try to maintain a healthy weight.",
      "Keep alcohol to less than 14 units a week.",
      "If you have a family history of cardiovascular disease, let your GP know.",
    ],
    tryThisWeek: [
      "Take one step towards stopping smoking.",
      "Cut down on salt.",
      "Tell your GP about family history.",
    ],
    ask: "Which of my risk factors matter most, and which can I change?",
    interactive: {
      kind: "risk-check",
      title: "Which of these apply to you?",
      intro: "Tick any that apply to see what can be done.",
      items: [
        { id: "smoke", label: "I smoke", note: "Stopping smoking and using other tobacco products reduces your risk.", changeable: true },
        { id: "bp", label: "High blood pressure", note: "Try to keep your blood pressure at a healthy level.", changeable: true },
        { id: "cholesterol", label: "High cholesterol", note: "Try to keep your cholesterol at a healthy level.", changeable: true },
        { id: "diabetes", label: "Diabetes", note: "Controlling your blood sugar levels helps reduce your risk.", changeable: true },
        { id: "weight", label: "Living with overweight", note: "Try to maintain a healthy weight, eat a balanced diet and exercise regularly.", changeable: true },
        { id: "family", label: "A close relative had a heart attack", note: "Family history cannot be changed. Let your GP know about it.", changeable: false },
        { id: "age", label: "Getting older", note: "Age is a risk factor you cannot control.", changeable: false },
        { id: "previous", label: "A previous heart attack", note: "Having had a previous heart attack is a risk factor you cannot control.", changeable: false },
      ],
    },
    sources: [NHS_HEART_ATTACK, BHF_HEART_ATTACK],
    quiz: {
      question: "What usually causes a heart attack?",
      options: [{ text: "A blood clot stopping blood getting to the heart", right: true }, { text: "The heart suddenly stopping" }, { text: "A chest infection" }],
      why: "Heart attacks are usually caused by a blood clot stopping enough blood getting to your heart.",
    },
  },
  {
    id: "mi-rehab",
    kicker: "Recovery",
    question: "What is cardiac rehab, and why does it work?",
    hook: "Exercise, information and support, built around you. The BHF calls it as important as taking your medicines.",
    short: "Cardiac rehab is an individualised exercise, education and support programme that helps you recover after a heart attack. NICE says everyone, regardless of age, should be offered it. Research has shown it can reduce the risk of another heart event or going back into hospital, and it can be done in person, from home, or both.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Cardiac rehab helps you to recover and get back to as full a life as possible after a heart attack. It is an individualised exercise, education and support programme built around your personal circumstances and needs.",
        ],
      },
      {
        heading: "Offered to everyone",
        paragraphs: [
          "NICE says all people, regardless of their age, should be given advice about and offered a cardiac rehabilitation programme with an exercise component.",
          "NICE says it should begin as soon as possible, and start within 10 days of leaving hospital.",
        ],
      },
      {
        heading: "What happens",
        paragraphs: [
          "First you talk with the rehab team about what is important to you and set goals. Exercise sessions are tailored to you, with a warm-up, a main section at a safe level, and a cool down.",
          "There are also information sessions on topics such as eating healthily, your medicines, stopping smoking and relaxation. You can attend in person, take part remotely from home using video calls or apps, or do a mix of both.",
        ],
      },
      {
        heading: "Why it helps",
        paragraphs: [
          "Research has shown that cardiac rehab can reduce your risk of having another heart event or being readmitted to hospital. It also has a positive impact on your wellbeing and quality of life.",
          "Cardiac rehab is a vital part of your recovery and it's just as important as taking your medicines.",
        ],
      },
    ],
    helps: [
      "Talk to your healthcare team about how you can start a cardiac rehab programme.",
      "Ask whether you can take part at home, in hospital or in the community, and at a time that suits you.",
      "Mention anything that might stop you going, such as transport difficulties.",
      "Involve your partner or carer in the programme if you would like to.",
      "Find your nearest programme with the BHF cardiac rehab finder or Heart Helpline.",
    ],
    tryThisWeek: [
      "Ask how to start rehab.",
      "Ask about home or group options.",
      "Find your nearest programme.",
    ],
    ask: "When does my cardiac rehab start, and can I do it from home?",
    interactive: {
      kind: "timeline",
      title: "Your cardiac rehab, step by step",
      steps: [
        { id: "hospital", when: "In hospital", title: "Rehab begins", points: ["NICE says rehab should begin as soon as possible, before you leave hospital."] },
        { id: "ten", when: "Within 10 days", title: "Your first session", points: ["NICE says it should start within 10 days of leaving hospital."] },
        { id: "assess", when: "Assessment", title: "Talk about your goals", points: ["Discuss what is important to you and any concerns.", "Agree a plan: in person, from home, or both."] },
        { id: "sessions", when: "The programme", title: "Exercise, information, support", points: ["A warm-up, main exercise at a safe level, and a cool down.", "Sessions on eating, medicines, smoking and relaxation."] },
        { id: "home", when: "Every day", title: "Active at home", points: ["Guidance on how to be physically active at home on a daily basis."] },
      ],
    },
    sources: [BHF_REHAB, BHF_HEART_ATTACK, NHS_HEART_ATTACK, NICE_ACS],
    quiz: {
      question: "How important is cardiac rehab, according to the BHF?",
      options: [{ text: "Just as important as taking your medicines", right: true }, { text: "Only for very fit people" }, { text: "Only needed if you feel unwell" }],
      why: "Cardiac rehab is a vital part of your recovery and it's just as important as taking your medicines.",
    },
  },
  {
    id: "mi-tablets",
    kicker: "Medicines",
    question: "What does each of the tablets I left hospital with do?",
    hook: "Most people go home with several medicines. Each one has a different job in protecting your heart.",
    short: "After a heart attack you'll be given medicines to take long term. They treat the causes and help reduce the risk of another one. They usually include antiplatelets such as aspirin and clopidogrel or ticagrelor, an ACE inhibitor such as ramipril, a beta blocker such as bisoprolol, a statin, and often a GTN spray. Keep taking them even if you feel well.",
    sections: [
      {
        heading: "Why they matter",
        paragraphs: [
          "You will be given medicines to take long-term after a heart attack. They treat the causes of your heart attack and help reduce your risk of having another one.",
          "It's essential that you take any medicine that's been prescribed, even if you feel well.",
        ],
      },
      {
        heading: "Antiplatelets",
        paragraphs: [
          "Antiplatelets stop platelets from sticking together normally, which helps stop your blood from clotting.",
          "Antiplatelets like clopidogrel or ticagrelor are commonly prescribed for 1 year to reduce the chance of another heart attack. Most people are also prescribed lifelong aspirin.",
        ],
      },
      {
        heading: "ACE inhibitors and beta blockers",
        paragraphs: [
          "ACE inhibitors or ARBs, such as ramipril or losartan, are prescribed to treat heart failure and high blood pressure.",
          "Beta blockers like bisoprolol help control your heart rate and can also help lower blood pressure. This reduces the workload of the heart so that it can recover.",
        ],
      },
      {
        heading: "Statins and GTN",
        paragraphs: [
          "Statins like atorvastatin reduce the level of cholesterol in your blood and protect the insides of your arteries.",
          "Glyceryl trinitrate (GTN) spray helps reduce chest pain, which can happen after a heart attack.",
        ],
      },
      {
        heading: "If you have side effects",
        paragraphs: [
          "If you are worried about side effects, do not stop taking your medicine; talk to your doctor. If your symptoms are serious, speak to your GP or pharmacist straight away.",
          "Antiplatelets can make you bruise more easily or increase the risk of bleeding, such as nosebleeds.",
        ],
      },
    ],
    helps: [
      "Keep taking your medicines even if you feel well.",
      "Talk to your doctor before stopping any medicine, even if you're worried about side effects.",
      "If side effects are not too bad, keep a diary of your symptoms to show your doctor.",
      "Ask your pharmacist about the NHS New Medicine Service for extra help with a new medicine.",
      "Check with your doctor or pharmacist before taking other medicines or supplements, such as ibuprofen, with antiplatelets.",
      "Get urgent help for blood in your pee or poo, a bruise that keeps getting bigger, or nosebleeds that do not stop.",
    ],
    tryThisWeek: [
      "Take your medicines even on good days.",
      "Note any side effects in a diary.",
      "Check before taking ibuprofen.",
    ],
    ask: "Which of my tablets are for life, and which are for a year?",
    interactive: {
      kind: "flip-cards",
      title: "Your medicines",
      intro: "Turn each card to see what the medicine does.",
      cards: [
        { id: "antiplatelet", front: "Clopidogrel or ticagrelor", when: "Commonly for 1 year", back: "Antiplatelets stop platelets sticking together, to reduce the chance of another heart attack." },
        { id: "aspirin", front: "Aspirin", when: "Usually lifelong", back: "An antiplatelet that helps stop your blood from clotting." },
        { id: "ace", front: "Ramipril (ACE inhibitor)", when: "Usually continued long term", back: "Prescribed to treat heart failure and high blood pressure." },
        { id: "beta", front: "Bisoprolol (beta blocker)", when: "Started soon after", back: "Helps control your heart rate and lower blood pressure, reducing the heart's workload so it can recover." },
        { id: "statin", front: "Atorvastatin (statin)", when: "Usually for life", back: "Reduces cholesterol in your blood and protects the insides of your arteries." },
        { id: "gtn", front: "GTN spray", when: "If chest pain happens", back: "Helps reduce chest pain, which can happen after a heart attack." },
      ],
    },
    sources: [NHS_HEART_ATTACK, BHF_HEART_ATTACK, BHF_ANTIPLATELETS, NICE_ACS],
    quiz: {
      question: "How long are antiplatelets like clopidogrel or ticagrelor commonly prescribed after a heart attack?",
      options: [{ text: "1 year", right: true }, { text: "1 week" }, { text: "Only on days with chest pain" }],
      why: "Antiplatelets like clopidogrel or ticagrelor are commonly prescribed for 1 year to reduce the chance of another heart attack.",
    },
  },
  {
    id: "mi-first-weeks",
    kicker: "Early days",
    question: "What should the first six weeks at home look like?",
    hook: "Small steps first: getting up, washing and dressing. Then build up a little at a time.",
    short: "Most people stay in hospital for about 2 to 5 days. At home, build up what you do gradually: getting up, washing and dressing is a good first step, then light jobs and short walks around the house. You'll need to rest and take time off work, and to stop driving for a while. Feeling scared or low is natural, and your GP can help.",
    sections: [
      {
        heading: "Leaving hospital",
        paragraphs: [
          "You'll usually stay in hospital for about 2 to 5 days after a heart attack. You will not be sent home until your doctor is certain you're well enough.",
        ],
      },
      {
        heading: "Build up gradually",
        paragraphs: [
          "When you get home, it's a good idea to gradually build up how much you do. Even if you do not feel like it, many people find getting up, washing and dressing a positive first step.",
          "Over time, you can do light household activities like making a hot drink or the washing up. Walking around the house, or standing up and marching on the spot for a minute, is another way of keeping active.",
        ],
      },
      {
        heading: "Rest and support",
        paragraphs: [
          "After a heart attack you'll usually need to rest, including taking time off work. You might find it helpful to have someone stay with you for the first few days or weeks.",
        ],
      },
      {
        heading: "Driving, work and sex",
        paragraphs: [
          "Car drivers should stop driving for 1 week after a successful angioplasty, or 4 weeks otherwise. After an angioplasty and stents, some people can return to work after 2 to 4 weeks.",
          "NICE says that after an uncomplicated recovery, people can resume sex when they feel comfortable, usually after about 4 weeks.",
        ],
      },
      {
        heading: "Your feelings",
        paragraphs: [
          "A heart attack can be a frightening experience and it can take time to come to terms with what's happened. It's natural to be worried about your recovery, and to feel scared, frustrated and isolated.",
        ],
      },
    ],
    helps: [
      "Build up what you do gradually, starting with getting up, washing and dressing.",
      "Do light jobs like making a hot drink, and walk around the house to keep active.",
      "Have someone stay with you for the first few days or weeks if it helps.",
      "Check with your doctor to find out when it's safe to start driving again.",
      "Talk to your GP if you're feeling anxious or have low mood.",
    ],
    tryThisWeek: [
      "Get up, wash and dress each day.",
      "Walk around the house.",
      "Ask your doctor when you can drive.",
    ],
    ask: "What can I safely do this week, and when can I drive and go back to work?",
    interactive: {
      kind: "timeline",
      title: "The first weeks",
      steps: [
        { id: "hospital", when: "2 to 5 days", title: "Leaving hospital", points: ["Most people stay in hospital for about 2 to 5 days.", "You go home once your doctor is certain you're well enough."] },
        { id: "home", when: "First days", title: "Small first steps", points: ["Get up, wash and dress.", "Someone staying with you may help."] },
        { id: "light", when: "Next", title: "Light jobs", points: ["Make a hot drink or do the washing up.", "Walk around the house, or march on the spot for a minute."] },
        { id: "drive", when: "1 to 4 weeks", title: "Driving, once cleared", points: ["Car drivers stop for 1 week after a successful angioplasty, 4 weeks otherwise.", "Check with your doctor first."] },
        { id: "work", when: "2 to 4 weeks", title: "Work, for some", points: ["After stents, some people can return to work after 2 to 4 weeks."] },
        { id: "sex", when: "About 4 weeks", title: "Sex, when comfortable", points: ["After an uncomplicated recovery, usually after about 4 weeks."] },
      ],
    },
    sources: [BHF_HEART_ATTACK, NHS_HEART_ATTACK, GOV_HEART_ATTACK_DRIVING, BHF_WORK, NICE_ACS],
    quiz: {
      question: "What does the BHF suggest when you first get home?",
      options: [{ text: "Gradually build up how much you do", right: true }, { text: "Stay in bed for six weeks" }, { text: "Go straight back to everything" }],
      why: "When you get home, it's a good idea to gradually build up how much you do.",
    },
  },
  {
    id: "mi-chest-pain",
    kicker: "Warning signs",
    question: "Chest pain after a heart attack: what's normal, and what's not?",
    hook: "Chest pain can come from your heart, your stomach, your muscles or worry. Knowing when to use GTN and when to call 999 matters most.",
    short: "Chest pain can happen after a heart attack, and a GTN spray helps reduce it. Sit down and use it; if you are still in pain 5 minutes after a second dose, or the pain gets worse, call 999. Chest discomfort can also come from indigestion, muscle strain or anxiety, but if you are unsure, get medical help.",
    sections: [
      {
        heading: "Using your GTN",
        paragraphs: [
          "Glyceryl trinitrate (GTN) spray helps reduce chest pain, which can happen after a heart attack.",
          "Sit down and use 1 or 2 sprays under your tongue. If you're still in pain after 5 minutes, you can have a second dose. Do not use more than 2 doses during one attack.",
        ],
      },
      {
        heading: "When to call 999",
        paragraphs: [
          "Call 999 if you've taken 2 doses of GTN and you're still in pain 5 minutes after the second dose, your pain is getting worse, or you feel unwell.",
          "Also call 999 for chest pain that feels tight or squeezing, pain spreading to your arms, neck or jaw, or severe difficulty breathing. Do not drive yourself to A&E, and do not worry about wasting anyone's time.",
        ],
      },
      {
        heading: "Other causes of chest pain",
        paragraphs: [
          "Discomfort in the chest can be caused by many things, from a heart attack to indigestion and muscle strain.",
          "If you get chest pain after eating, it may be a sign of indigestion. If you only get it in a specific position, it may be muscular. It can be hard to tell the cause, so if you are unsure, seek medical help.",
        ],
      },
      {
        heading: "Anxiety",
        paragraphs: [
          "Heart attacks and panic attacks share many similar symptoms, like chest pain or tightness, shortness of breath and sweating. If you're unsure, it's always safest to call 999.",
          "It can help to get to know your heart condition and your anxiety symptoms, so that you learn what's normal for you. You can work with your doctor or psychologist to do this.",
        ],
      },
      {
        heading: "Changes to report",
        paragraphs: [
          "Call NHS 111 if you're suddenly more short of breath than usual, or you have chest pain and feel sick.",
          "Speak to your GP if you have any new or ongoing chest discomfort.",
        ],
      },
    ],
    helps: [
      "Keep your GTN spray with you and sit down before you use it.",
      "Call 999 if you're still in pain 5 minutes after a second dose of GTN, or the pain is getting worse.",
      "Do not drive yourself to A&E.",
      "Speak to your GP about any new or ongoing chest discomfort.",
      "Work with your doctor to learn what's normal for you.",
    ],
    tryThisWeek: [
      "Carry your GTN spray.",
      "Learn the 999 rule.",
      "Tell your GP about new discomfort.",
    ],
    ask: "What chest pain should I expect now, and what should make me call 999?",
    interactive: {
      kind: "scenarios",
      title: "Chest pain moments",
      scenarios: [
        { id: "walking", situation: "Chest tightness starts while you're out walking.", options: [{ text: "Sit down and use your GTN spray", best: true }, { text: "Keep walking to see if it passes" }], why: "Sit down and use 1 or 2 sprays under your tongue. If you're still in pain after 5 minutes, you can have a second dose." },
        { id: "second", situation: "Five minutes after a second dose of GTN, the pain is still there.", options: [{ text: "Call 999", best: true }, { text: "Use a third dose" }, { text: "Drive yourself to A&E" }], why: "Call 999 if you're still in pain 5 minutes after the second dose. Do not drive yourself to A&E." },
        { id: "unsure", situation: "A burning feeling comes on after a big meal, and you're not sure what it is.", options: [{ text: "Seek medical help", best: true }, { text: "Ignore it" }], why: "It can be hard to tell the cause, so if you are unsure, seek medical help." },
      ],
    },
    sources: [BHF_HEART_ATTACK, NHS_GTN_HOW, NHS_HEART_ATTACK, BHF_CHEST_PAIN, BHF_ANXIETY],
    quiz: {
      question: "When should you call 999 after using GTN?",
      options: [{ text: "If you're still in pain 5 minutes after the second dose", right: true }, { text: "Straight after the first spray, whatever happens" }, { text: "Only if the pain lasts all day" }],
      why: "Call 999 if you've taken 2 doses of GTN and you're still in pain 5 minutes after the second dose.",
    },
  },
  {
    id: "mi-driving-work",
    kicker: "Getting back",
    question: "When can I drive, work and fly again?",
    hook: "Car drivers don't need to tell DVLA, but do need a short break from driving. Work and flying depend on your recovery.",
    short: "Car and motorcycle drivers do not need to tell DVLA about a heart attack, but should stop driving for 1 week after a successful angioplasty, or 4 weeks otherwise. Bus, coach and lorry drivers need to tell DVLA and stop for 6 weeks. Many people return to work within weeks, and most can fly safely once their GP or heart specialist agrees.",
    sections: [
      {
        heading: "Driving a car",
        paragraphs: [
          "You do not need to tell DVLA if you've had a heart attack or an angioplasty. You should stop driving for 1 week if you had angioplasty, it was successful, and you do not need any more surgery.",
          "Stop for 4 weeks if the angioplasty was not successful, or if you had a heart attack but no angioplasty. Check with your doctor to find out when it's safe for you to drive again.",
        ],
      },
      {
        heading: "Bus, coach or lorry",
        paragraphs: [
          "Bus, coach and lorry drivers need to tell DVLA and stop driving for 6 weeks after a heart attack or angioplasty. After 6 weeks, an assessment with your doctor checks whether you meet the medical standard to drive again.",
          "It's important to tell any insurer about changes to your health, including car, travel and life insurance.",
        ],
      },
      {
        heading: "Going back to work",
        paragraphs: [
          "If you have an angioplasty and stents, you may be able to return to work after 2 to 4 weeks. After bypass surgery you will need longer, such as 6 to 12 weeks. A manual job takes longer to return to.",
          "You do not have to tell your employer about your condition, but it can help them support you. Reasonable adjustments can include a phased return, time off for appointments, or lighter duties while you recover.",
        ],
      },
      {
        heading: "Flying",
        paragraphs: [
          "Most people with heart and circulatory disease can travel by air safely. Always check with your GP or heart specialist that you are fit to fly, particularly if you've recently had a heart attack.",
          "It's safe to use your GTN spray on the plane. Keep your medicines in your hand luggage.",
        ],
      },
    ],
    helps: [
      "Check with your doctor when it's safe to start driving again.",
      "Tell your car, travel and life insurers about changes to your health.",
      "Speak to your doctor to plan your return to work, including whether you need a phased return.",
      "Check with your GP or heart specialist that you're fit to fly.",
      "Keep your medicines in your hand luggage when you fly.",
    ],
    tryThisWeek: [
      "Ask your doctor when to drive.",
      "Tell your insurer.",
      "Plan a phased return to work.",
    ],
    ask: "When can I drive, fly and go back to work, given the treatment I had?",
    interactive: {
      kind: "scenarios",
      title: "Getting back on the road",
      scenarios: [
        { id: "car", situation: "You drive a car and had a successful angioplasty, with no more surgery needed.", options: [{ text: "Stop for 1 week, then check with your doctor", best: true }, { text: "Drive yourself home from hospital" }, { text: "Tell DVLA and wait 6 weeks" }], why: "Stop driving for 1 week if you had angioplasty, it was successful, and you do not need any more surgery." },
        { id: "lorry", situation: "You drive a lorry for work.", options: [{ text: "Tell DVLA and stop driving for 6 weeks", best: true }, { text: "Carry on after 1 week" }], why: "Bus, coach and lorry drivers need to tell DVLA and stop driving for 6 weeks after a heart attack or angioplasty." },
        { id: "fly", situation: "You'd like to book a flight soon after your heart attack.", options: [{ text: "Check with your GP or heart specialist first", best: true }, { text: "Book it without asking" }], why: "Always check with your GP or heart specialist that you are fit to fly, particularly if you've recently had a heart attack." },
      ],
    },
    sources: [GOV_HEART_ATTACK_DRIVING, BHF_DRIVING, BHF_WORK, BHF_TRAVEL],
    quiz: {
      question: "Do car drivers need to tell DVLA after a heart attack?",
      options: [{ text: "No, but they should stop driving for a while", right: true }, { text: "Yes, always" }, { text: "No, and they can drive the next day" }],
      why: "You do not need to tell DVLA if you've had a heart attack or an angioplasty. You should stop driving for 1 week if you had angioplasty, it was successful, and you do not need any more surgery.",
    },
  },
  {
    id: "mi-food",
    kicker: "Eating well",
    question: "How can I eat for my heart without misery?",
    hook: "Not a strict diet: more bread, fruit, vegetables and fish, less meat, and plant oils instead of butter.",
    short: "NICE advises a Mediterranean-style diet after a heart attack: more bread, fruit, vegetables and fish, less meat, and products based on plant oils instead of butter and cheese. The BHF says strict diets are hard to keep up; healthy eating is about balance and small, long-term changes. NICE does not advise omega-3 capsules to prevent another heart attack.",
    sections: [
      {
        heading: "A Mediterranean style",
        paragraphs: [
          "NICE advises a Mediterranean-style diet after a heart attack: more bread, fruit, vegetables and fish; less meat; and replacing butter and cheese with products based on plant oils.",
        ],
      },
      {
        heading: "Balance, not a strict diet",
        paragraphs: [
          "Strict diets are hard to sustain long term. Healthy eating isn't about cutting out individual foods; it's about getting the right balance.",
          "It's about making small, long-term changes and enjoying the food you eat.",
        ],
      },
      {
        heading: "More fruit, vegetables and fibre",
        paragraphs: [
          "Eating at least five portions of fruit and vegetables a day has been shown to help lower your risk of heart and circulatory diseases.",
          "Choose wholegrain or wholemeal bread, rice and pasta, as they contain more fibre.",
        ],
      },
      {
        heading: "Less saturated fat and salt",
        paragraphs: [
          "Too much saturated fat can increase blood cholesterol and the risk of heart attack and stroke. Replacing butter with plant-based oils like olive oil can help.",
          "Eating too much salt can increase the risk of high blood pressure. If you like salty food, try a squeeze of fresh lemon juice instead.",
        ],
      },
      {
        heading: "Supplements",
        paragraphs: [
          "NICE does not advise omega-3 capsules or omega-3 supplemented foods to prevent another heart attack. It also advises against supplements containing beta-carotene.",
        ],
      },
    ],
    helps: [
      "Eat more bread, fruit, vegetables and fish, and less meat.",
      "Swap butter and cheese for products based on plant oils.",
      "Aim for at least five portions of fruit and vegetables a day.",
      "Try fresh lemon juice instead of adding salt.",
      "Drink no more than 14 units of alcohol a week, with several alcohol-free days.",
    ],
    tryThisWeek: [
      "Add one more portion of vegetables.",
      "Swap butter for a plant oil.",
      "Try lemon instead of salt.",
    ],
    ask: "Could I talk to someone about my diet and what to change first?",
    interactive: {
      kind: "scenarios",
      title: "Mediterranean swaps",
      scenarios: [
        { id: "toast", situation: "You're making toast.", options: [{ text: "Use a spread based on plant oils", best: true }, { text: "Spread on thick butter" }], why: "NICE advises replacing butter and cheese with products based on plant oils." },
        { id: "salt", situation: "Your dinner tastes a little bland.", options: [{ text: "Add a squeeze of fresh lemon juice", best: true }, { text: "Add more salt" }], why: "If you like salty food, try a squeeze of fresh lemon juice instead." },
        { id: "capsules", situation: "A friend suggests omega-3 capsules to prevent another heart attack.", options: [{ text: "Focus on a Mediterranean-style diet", best: true }, { text: "Buy the capsules for that reason" }], why: "NICE does not advise omega-3 capsules or omega-3 supplemented foods to prevent another heart attack." },
      ],
    },
    sources: [NICE_ACS, BHF_EATING],
    quiz: {
      question: "Which style of eating does NICE advise after a heart attack?",
      options: [{ text: "A Mediterranean-style diet", right: true }, { text: "Omega-3 capsules with every meal" }, { text: "Cutting out bread completely" }],
      why: "NICE advises a Mediterranean-style diet after a heart attack: more bread, fruit, vegetables and fish; less meat.",
    },
  },
  {
    id: "mi-sex",
    kicker: "Relationships",
    question: "Is sex safe after a heart attack?",
    hook: "For most people, yes. Sex is no more likely to trigger a heart attack than any other activity.",
    short: "After recovery, sex carries no greater risk of triggering another heart attack than if you had never had one. Most people can start again when they feel comfortable, usually after a few weeks. Loss of sex drive and erection problems are common and can be a side effect of medicine. Medicines for erection problems cannot be taken with GTN.",
    sections: [
      {
        heading: "No greater risk",
        paragraphs: [
          "Sex is no more likely to trigger a heart problem, such as a heart attack, than any other activity.",
          "NICE says that after recovery, sexual activity presents no greater risk of triggering another heart attack than if you had never had one.",
        ],
      },
      {
        heading: "When to start again",
        paragraphs: [
          "After an uncomplicated recovery, people can resume sex when they feel comfortable, usually after about 4 weeks. The BHF says this is usually around 2 to 8 weeks, depending on how quickly you recover.",
          "You should be fine to have sex if you can walk a mile on flat ground in about 20 minutes, or climb 2 flights of stairs comfortably.",
        ],
      },
      {
        heading: "Common worries",
        paragraphs: [
          "Loss of sex drive and erection problems are common, and may be a side effect of your medicine. Anxiety can also have a huge impact.",
          "Your GP, nurse or cardiac rehab nurse can offer support. They talk to people about sex all the time.",
        ],
      },
      {
        heading: "GTN and erection medicines",
        paragraphs: [
          "Chest pain during sex is very uncommon. If you have chest pain at any stage, stop and get medical help.",
          "You cannot take medicines for erection problems, such as sildenafil (Viagra) or tadalafil (Cialis), if you're using GTN.",
        ],
      },
    ],
    helps: [
      "Ease into sexual activity slowly.",
      "Avoid sex after a heavy meal, and avoid too much alcohol beforehand.",
      "Keep your GTN spray within easy reach on your bedside table.",
      "Find other ways to be intimate, such as having a cuddle.",
      "Talk to your GP, nurse or cardiac rehab nurse about any problems.",
    ],
    tryThisWeek: [
      "Keep your GTN by the bed.",
      "Avoid sex after a heavy meal.",
      "Talk to your rehab nurse.",
    ],
    ask: "When is sex safe for me, and could any of my medicines be affecting it?",
    interactive: {
      kind: "scenarios",
      title: "Intimacy, step by step",
      scenarios: [
        { id: "when", situation: "Your recovery has gone smoothly and you feel ready.", options: [{ text: "Start again when you feel comfortable", best: true }, { text: "Wait a whole year" }], why: "After an uncomplicated recovery, people can resume sex when they feel comfortable, usually after about 4 weeks." },
        { id: "meal", situation: "You've just finished a big dinner.", options: [{ text: "Wait until later", best: true }, { text: "Go ahead straight away" }], why: "Avoid sex after a heavy meal, and avoid too much alcohol beforehand." },
        { id: "pills", situation: "You use GTN and are thinking about sildenafil (Viagra).", options: [{ text: "Talk to your doctor first", best: true }, { text: "Take both" }], why: "You cannot take medicines for erection problems, such as sildenafil (Viagra) or tadalafil (Cialis), if you're using GTN." },
      ],
    },
    sources: [BHF_SEX, NICE_ACS, NHS_GTN_QUESTIONS],
    quiz: {
      question: "Is sex more likely to trigger a heart attack than other activity?",
      options: [{ text: "No", right: true }, { text: "Yes, much more likely" }, { text: "Only at night" }],
      why: "Sex is no more likely to trigger a heart problem, such as a heart attack, than any other activity.",
    },
  },
  {
    id: "mi-mood",
    kicker: "Feelings",
    question: "Why do I feel so low after my heart attack?",
    hook: "Feeling scared, frustrated or flat is common. If it lasts for weeks, it may be depression, and help works.",
    short: "It's natural to feel worried, scared, frustrated and isolated after a heart attack, and depression after a heart event is common. If you feel persistently sad for weeks or months, you may have depression. It has nothing to do with willpower, and with the right help things can get better. Talk to your GP if you feel anxious or low.",
    sections: [
      {
        heading: "Common feelings",
        paragraphs: [
          "A heart attack can be a frightening experience and it can take time to come to terms with what's happened. It's natural to feel worried, scared, frustrated and isolated.",
          "It's normal to experience depression after a heart event.",
        ],
      },
      {
        heading: "When it may be depression",
        paragraphs: [
          "If the feelings don't pass and you feel persistently sad for weeks or months, you may have clinical depression.",
          "Depression is a genuine health condition. It's nothing to do with willpower, and it does not mean you're weak. With the right help, things can get better.",
        ],
      },
      {
        heading: "Why it matters for your heart",
        paragraphs: [
          "Experiences like a heart attack, or time in intensive care, can leave a lasting emotional impact.",
          "Depression can make it hard to keep up habits that protect your heart, like taking your medicine on time and being active.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "Talk to your GP if you're feeling anxious or you have low mood after a heart attack. They can help you get support.",
          "Cardiac rehab includes stress management. Support groups and online communities let you share experiences with people in a similar situation.",
        ],
      },
    ],
    helps: [
      "Share how you feel with a friend or family member you trust.",
      "Get moving: a brisk 15-minute walk, a short home workout or a bit of gardening can help.",
      "Keep a routine, with a regular wake-up time.",
      "Plan to do one thing you enjoy each day, even for a few minutes.",
      "Talk to your GP if low feelings do not pass.",
    ],
    tryThisWeek: [
      "Tell one person how you feel.",
      "Take a short walk.",
      "Plan one thing you enjoy.",
    ],
    ask: "Could this be depression, and what support is available to me?",
    interactive: {
      kind: "scenarios",
      title: "Low days",
      scenarios: [
        { id: "weeks", situation: "You've felt flat and sad most days for several weeks.", options: [{ text: "Talk to your GP", best: true }, { text: "Wait for it to pass on its own" }], why: "If the feelings don't pass and you feel persistently sad for weeks or months, you may have clinical depression. Talk to your GP." },
        { id: "alone", situation: "You've stopped seeing friends since coming home.", options: [{ text: "Share how you feel with someone you trust", best: true }, { text: "Keep it to yourself" }], why: "Share how you feel with a friend or family member you trust." },
        { id: "energy", situation: "You don't feel like doing anything today.", options: [{ text: "Try a short walk or a bit of gardening", best: true }, { text: "Stay in bed all day" }], why: "Get moving: a brisk 15-minute walk, a short home workout or a bit of gardening can help." },
      ],
    },
    sources: [BHF_HEART_ATTACK, BHF_DEPRESSION, BHF_EMOTIONAL, NHS_HEART_ATTACK, NICE_ACS],
    quiz: {
      question: "What might it mean if you feel persistently sad for weeks or months?",
      options: [{ text: "You may have depression, and help is available", right: true }, { text: "You are not trying hard enough" }, { text: "Nothing; it is best ignored" }],
      why: "If the feelings don't pass and you feel persistently sad for weeks or months, you may have clinical depression.",
    },
  },
  {
    id: "mi-smoking",
    kicker: "Smoking",
    question: "Why does stopping smoking matter so much?",
    hook: "Smoking makes artery walls sticky and raises the risk of clots. A year after stopping, your heart attack risk halves.",
    short: "Chemicals in cigarettes make artery walls sticky, so fatty material clogs them, and smoking raises the risk of blood clots. After 1 year without smoking, your risk of a heart attack is half that of a smoker. Free NHS stop smoking services offer support and treatments, and are often more effective than going it alone.",
    sections: [
      {
        heading: "What smoking does",
        paragraphs: [
          "The chemicals in cigarettes make the walls of your arteries sticky, so fatty material sticks to them. If the arteries that carry blood to your heart get clogged, it can lead to a heart attack.",
          "Smoking also increases your risk of blood clots, and causes an instant rise in your heart rate and blood pressure.",
        ],
      },
      {
        heading: "The benefits of stopping",
        paragraphs: [
          "Your heart rate and blood pressure begin to return to normal 20 minutes after stopping. After 1 year, your risk of a heart attack is half that of a smoker.",
          "It's never too late to benefit from stopping smoking.",
        ],
      },
      {
        heading: "Help to quit",
        paragraphs: [
          "Local NHS stop smoking services are free and can improve your chances of quitting for good. They offer advice, support, and treatments such as nicotine replacement therapy and stop smoking medicines.",
          "Your GP or pharmacist can refer you, or you can contact your local service yourself.",
        ],
      },
      {
        heading: "Handling cravings",
        paragraphs: [
          "Cravings usually last around 5 minutes. Plan things you can do in 5 minutes to stay busy when they come.",
          "Vapes are less harmful than cigarettes and can help you quit. If you quit using a vape, consider stopping that too.",
        ],
      },
    ],
    helps: [
      "Ask your GP, pharmacist or local stop smoking service for help.",
      "Set a quit date and tell family, friends and colleagues.",
      "Plan things you can do in 5 minutes to get through cravings.",
      "Ask about nicotine replacement therapy or stop smoking medicines.",
      "If you've tried before and did not manage it, do not let that put you off trying again.",
    ],
    tryThisWeek: [
      "Set a quit date.",
      "Contact a stop smoking service.",
      "Plan for five-minute cravings.",
    ],
    ask: "Can you refer me to a stop smoking service, and which aids would suit me?",
    interactive: {
      kind: "timeline",
      title: "After your last cigarette",
      steps: [
        { id: "date", when: "Quit date", title: "Set a date", points: ["Tell family, friends and colleagues so they can help.", "Free NHS stop smoking services can support you."] },
        { id: "minutes", when: "20 minutes", title: "Heart rate settles", points: ["Heart rate and blood pressure begin to return to normal."] },
        { id: "cravings", when: "Each craving", title: "About 5 minutes", points: ["Plan things you can do in 5 minutes to stay busy."] },
        { id: "support", when: "Up to 12 weeks", title: "Support continues", points: ["Stop smoking services usually offer support for up to 12 weeks."] },
        { id: "year", when: "1 year", title: "Risk halves", points: ["Your risk of a heart attack is half that of a smoker."] },
      ],
    },
    sources: [BHF_SMOKING, NHS_STOP_SMOKING, BHF_HEART_ATTACK, NICE_ACS],
    quiz: {
      question: "A year after stopping smoking, how does your heart attack risk compare with a smoker's?",
      options: [{ text: "It is about half", right: true }, { text: "It is the same" }, { text: "It is double" }],
      why: "After 1 year, your risk of a heart attack is half that of a smoker.",
    },
  },
];
