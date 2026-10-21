import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Pulmonary fibrosis page's pieces (content/library-conditions/heart-more.ts).
// Every sentence was written from wording checked on 21 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS
// (Idiopathic pulmonary fibrosis, home oxygen, vaccines, shortness of breath, cough, end of life care)
// and Asthma + Lung UK's pulmonary fibrosis, interstitial lung disease, breathlessness, oxygen and travel
// pages, and is credited to them. General information only; it never replaces what a person's own
// respiratory team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const aluk = (label: string, path: string): LearnSource => ({ label: `Asthma + Lung UK: ${label}`, url: `https://www.asthmaandlung.org.uk/${path}` });

const NHS_IPF = nhs("Idiopathic pulmonary fibrosis", "conditions/idiopathic-pulmonary-fibrosis/");
const NHS_OXYGEN = nhs("Home oxygen therapy", "tests-and-treatments/home-oxygen-treatment/");
const NHS_SPIROMETRY = nhs("Spirometry test", "tests-and-treatments/spirometry/");
const NHS_BREATHLESS = nhs("Shortness of breath", "symptoms/shortness-of-breath/");
const NHS_COUGH = nhs("Cough", "symptoms/cough/");
const NHS_CHEST_INFECTION = nhs("Chest infection", "conditions/chest-infection/");
const NHS_PNEUMOCOCCAL = nhs("Pneumococcal vaccine", "vaccinations/pneumococcal-vaccine/");
const NHS_RSV = nhs("RSV vaccine", "vaccinations/rsv-vaccine/");
const NHS_COVID = nhs("COVID-19 vaccine", "vaccinations/covid-19-vaccine/");
const NHS_EOL = nhs("What end of life care involves", "tests-and-treatments/end-of-life-care/what-it-involves-and-when-it-starts/");
const NHS_PLAN_AHEAD = nhs("Why plan ahead for end of life care?", "tests-and-treatments/end-of-life-care/planning-ahead/why-plan-ahead/");
const NHS_ADVANCE_STATEMENT = nhs("Advance statement about your care wishes", "tests-and-treatments/end-of-life-care/planning-ahead/advance-statement/");

const ALUK_PF = aluk("Pulmonary fibrosis", "conditions/pulmonary-fibrosis");
const ALUK_WHAT = aluk("What is pulmonary fibrosis?", "conditions/pulmonary-fibrosis/what-pulmonary-fibrosis");
const ALUK_DIAGNOSIS = aluk("How is pulmonary fibrosis diagnosed?", "conditions/pulmonary-fibrosis/how-pulmonary-fibrosis-diagnosed");
const ALUK_TREATMENT = aluk("How is pulmonary fibrosis treated and managed?", "conditions/pulmonary-fibrosis/how-pulmonary-fibrosis-treated-managed");
const ALUK_LIVING = aluk("Living well with pulmonary fibrosis", "conditions/pulmonary-fibrosis/living-well-pulmonary-fibrosis");
const ALUK_ILD = aluk("What are interstitial lung diseases (ILDs)?", "conditions/interstitial-lung-diseases-ilds/what-are-interstitial-lung-diseases-ilds");
const ALUK_GAS_TRANSFER = aluk("Gas transfer test", "symptoms-tests-treatments/tests/gas-transfer");
const ALUK_OXYGEN = aluk("What is home oxygen therapy and how is it prescribed?", "symptoms-tests-treatments/treatments/home-oxygen-therapy/what-is");
const ALUK_OXYGEN_LIFE = aluk("Living with home oxygen", "symptoms-tests-treatments/treatments/home-oxygen-therapy/life-with");
const ALUK_REHAB = aluk("Pulmonary rehabilitation (PR)", "living-with/keeping-active/pulmonary-rehabilitation");
const ALUK_BREATHLESS_WHAT = aluk("What is breathlessness?", "symptoms-tests-treatments/symptoms/breathlessness/what-breathlessness");
const ALUK_BREATHLESS_MANAGE = aluk("How can I manage my breathlessness?", "symptoms-tests-treatments/symptoms/breathlessness/how-can-i-manage-my-breathlessness");
const ALUK_BREATHLESS_LIVING = aluk("Living well with breathlessness", "symptoms-tests-treatments/symptoms/breathlessness/breathlessness/living-well-breathlessness");
const ALUK_FLU = aluk("How to prevent flu", "conditions/flu/prevent");
const ALUK_TRAVEL = aluk("Travelling safely with a lung condition", "living-with/travel/safely");
const ALUK_TRAVEL_OXYGEN = aluk("Travelling with oxygen", "living-with/travel/oxygen");
const ALUK_TRAVEL_INSURANCE = aluk("Travel insurance with a lung condition", "living-with/travel/insurance");

export const pulmonaryFibrosisAnswers: LearnArticle[] = [
  {
    id: "pf-what-it-is",
    kicker: "Understanding",
    question: "What is pulmonary fibrosis?",
    hook: "Scarring in the lungs that makes them stiffer and harder to fill. Scarring cannot be undone, but treatment can slow it down.",
    short: "Pulmonary fibrosis is a condition where you have scarring (fibrosis) in your lungs. It makes it harder for the lungs to expand fully when you breathe in, and harder for oxygen to move into the blood. Scarring already in your lungs cannot be reversed, but medicines and treatments can help slow down how much it progresses.",
    sections: [
      {
        heading: "Scarring in the lungs",
        paragraphs: [
          "Pulmonary means about the lungs, and fibrosis means scarring. Pulmonary fibrosis is a condition where you have scarring (fibrosis) in your lungs.",
          "Idiopathic pulmonary fibrosis (IPF) is a rare condition where your lungs become scarred, making it harder to breathe. It mainly affects people aged 70 or over, but can sometimes start at a younger age.",
        ],
      },
      {
        heading: "How it affects the lungs",
        paragraphs: [
          "It affects the tissue in and around the tiny air sacs in your lungs (interstitial tissue). These tissues provide structure and support. They also help oxygen and carbon dioxide move in and out of your lungs.",
          "Pulmonary fibrosis makes it harder for the lungs to expand fully when you breathe in. It's also harder for oxygen to move from the lungs into the blood. This means people with pulmonary fibrosis can have low blood oxygen levels.",
        ],
      },
      {
        heading: "What can cause it",
        paragraphs: [
          "Pulmonary fibrosis can be caused by breathing in dust from metal, stone and wood, or certain types of dust or organic matter, such as bird droppings. It can also be caused by some drug side effects or treatment, and by autoimmune conditions, like rheumatoid arthritis.",
          "You may have a higher risk if you're older, if there's a family history of interstitial lung diseases, particularly IPF, or if you smoke. But often the cause is not known.",
        ],
      },
      {
        heading: "A long-term condition",
        paragraphs: [
          "Pulmonary fibrosis is a long-term condition. Any scarring that's already in your lungs cannot be reversed. However, medicines and treatments can help slow down how much the scarring progresses, and keep your condition as stable as possible.",
          "There's currently no cure, but treatments are available to help manage the symptoms. If treatment works well, you may not have many symptoms for years.",
        ],
      },
    ],
    helps: [
      "Get medical advice if you have symptoms that could be idiopathic pulmonary fibrosis.",
      "See your GP as soon as possible if you notice any of the symptoms of pulmonary fibrosis.",
      "Stop smoking if you smoke.",
      "Ask your specialist team whether they can work out what's caused your condition, and if it's likely to be progressive.",
      "Call the Asthma + Lung UK helpline on 0300 222 5800 to talk to a respiratory nurse specialist.",
    ],
    tryThisWeek: [
      "Get your symptoms checked.",
      "Stop smoking if you smoke.",
      "Call the Asthma + Lung UK helpline.",
    ],
    ask: "What has caused my pulmonary fibrosis, and is it likely to be progressive?",
    interactive: {
      kind: "risk-check",
      title: "What can make pulmonary fibrosis more likely?",
      intro: "Tick any that apply to you. Some can be avoided or changed; some cannot.",
      items: [
        { id: "age", label: "Being older", note: "IPF mainly affects people aged 70 or over, but can sometimes start at a younger age.", changeable: false },
        { id: "family", label: "Lung disease in the family", note: "You may be more at risk if someone else in your close family has had it.", changeable: false },
        { id: "smoking", label: "Smoking", note: "You may have a higher risk if you smoke. Stop smoking if you smoke.", changeable: true },
        { id: "dust", label: "Dust from metal, stone or wood", note: "Breathing in dust from metal, stone and wood can cause it. Once you know a cause, you can take steps to avoid it.", changeable: true },
        { id: "organic", label: "Bird droppings or organic dust", note: "Breathing in certain types of dust or organic matter, such as bird droppings, can cause it.", changeable: true },
        { id: "medicines", label: "Some medicines", note: "Some antibiotics, anti-inflammatory medicines and chemotherapy can cause it as a side effect.", changeable: false },
        { id: "autoimmune", label: "An autoimmune condition", note: "Autoimmune conditions, like rheumatoid arthritis, can cause pulmonary fibrosis.", changeable: false },
      ],
    },
    sources: [NHS_IPF, ALUK_WHAT, ALUK_ILD],
    quiz: {
      question: "Can scarring that is already in the lungs be reversed?",
      options: [{ text: "No, but treatment can slow it down", right: true }, { text: "Yes, with rest" }, { text: "Yes, with antibiotics" }],
      why: "Any scarring that's already in your lungs cannot be reversed. However, medicines and treatments can help slow down how much the scarring progresses.",
    },
  },
  {
    id: "pf-types",
    kicker: "Types",
    question: "What is idiopathic pulmonary fibrosis, and what are the other types?",
    hook: "Pulmonary fibrosis belongs to a big family of lung diseases. Idiopathic pulmonary fibrosis, where no cause is found, is the most common.",
    short: "Pulmonary fibrosis is part of a larger group of lung diseases called interstitial lung diseases (ILDs), and there are more than 200 types of ILD. Idiopathic pulmonary fibrosis (IPF) is the most common type; idiopathic means no specific cause has been found. Some types stay the same or change very slowly, while others are progressive and get worse over time.",
    sections: [
      {
        heading: "A family of lung diseases",
        paragraphs: [
          "Interstitial lung disease (ILD) is the name for a group of conditions that damage the tissue in your lungs. There are more than 200 types of ILD. Some cause inflammation. Some cause scarring of the lungs. Others cause a mix of both.",
          "Pulmonary fibrosis is part of this larger group of lung diseases. Some ILDs can lead to pulmonary fibrosis, but not all of them do.",
        ],
      },
      {
        heading: "Idiopathic pulmonary fibrosis",
        paragraphs: [
          "Idiopathic pulmonary fibrosis (IPF) is the most common type of ILD. Idiopathic means that no specific cause for the pulmonary fibrosis has been found.",
          "IPF is a progressive type of pulmonary fibrosis. It affects almost 40,000 people in the UK.",
          "Around 1 in 20 people with IPF have another family member with the condition.",
        ],
      },
      {
        heading: "Other types",
        paragraphs: [
          "Many other ILDs can also cause fibrosis and be progressive. They include hypersensitivity pneumonitis and sarcoidosis.",
          "Hypersensitivity pneumonitis can happen when your immune system overreacts to something you breathe in. Connective tissue disease related ILD may happen when an autoimmune condition affects your lungs, for example in people with rheumatoid arthritis.",
          "Occupational ILDs are caused by breathing in certain harmful substances in the workplace. They can be triggered by asbestos, coal dust, silica dust and beryllium metal.",
        ],
      },
      {
        heading: "Progressive or stable",
        paragraphs: [
          "Some types of pulmonary fibrosis can stay the same or change very slowly. But some types are progressive and get worse over time. In some ILDs the fibrosis is a result of inflammation, and sometimes it can be stopped with treatment.",
          "When you first get diagnosed, specialists may not be able to tell whether your condition is likely to be progressive or not. They need to review your condition regularly and test your lung function.",
        ],
      },
    ],
    helps: [
      "Ask your specialist respiratory team what type of pulmonary fibrosis you have.",
      "Go to your regular reviews, so your team can see whether your condition is changing over time.",
      "Be ready to tell your GP where you've worked, what your hobbies are and whether you have any pets.",
      "If a cause is found, take steps to avoid it.",
    ],
    tryThisWeek: [
      "Ask which type you have.",
      "List your jobs, hobbies and pets.",
      "Keep your review appointments.",
    ],
    ask: "What type of pulmonary fibrosis do I have, and is it progressive?",
    interactive: {
      kind: "flip-cards",
      title: "The types, turned over",
      intro: "Tap a card to see what each type is.",
      cards: [
        { id: "ipf", front: "Idiopathic pulmonary fibrosis", when: "The most common type", back: "No specific cause has been found. It can be progressive, which means the scarring gradually gets worse over time." },
        { id: "hp", front: "Hypersensitivity pneumonitis", when: "Caused by something breathed in", back: "Your immune system overreacts to something you breathe in, such as certain dusts, moulds, or animal and plant proteins." },
        { id: "ctild", front: "Connective tissue disease ILD", when: "With an autoimmune condition", back: "May happen when an autoimmune condition, such as rheumatoid arthritis, affects your lungs." },
        { id: "occupational", front: "Occupational ILD", when: "From the workplace", back: "Caused by breathing in harmful substances at work, such as asbestos, coal dust or silica dust." },
        { id: "drug", front: "Drug-induced ILD", when: "A rare side effect of medicines", back: "Can happen with certain antibiotics, chemotherapy drugs and immunosuppressants." },
        { id: "sarcoidosis", front: "Pulmonary sarcoidosis", when: "Inflamed cells join together", back: "Inflamed cells join together and make tiny lumps called granulomas in your lungs." },
      ],
    },
    sources: [ALUK_WHAT, ALUK_ILD, ALUK_PF],
    quiz: {
      question: "What does idiopathic mean?",
      options: [{ text: "No specific cause has been found", right: true }, { text: "It always runs in families" }, { text: "It is caused by smoking" }],
      why: "Idiopathic means that no specific cause for the pulmonary fibrosis has been found.",
    },
  },
  {
    id: "pf-symptoms",
    kicker: "Symptoms",
    question: "What does pulmonary fibrosis feel like?",
    hook: "Breathlessness, a dry cough that will not go away, and tiredness. The symptoms usually start slowly.",
    short: "The most common symptoms are feeling breathless, a dry cough that does not go away, feeling tired a lot and losing weight without trying. The symptoms usually start slowly but continue to get worse over time. See your GP as soon as possible if you notice any of them.",
    sections: [
      {
        heading: "The main symptoms",
        paragraphs: [
          "The most common symptoms of pulmonary fibrosis are feeling breathless with everyday activities or when resting, a dry cough that does not go away and is not relieved by over-the-counter cough remedies, feeling tired a lot or all the time (fatigue), and losing weight without trying to.",
          "The symptoms usually start slowly but continue to get worse over time.",
        ],
      },
      {
        heading: "Breathlessness",
        paragraphs: [
          "Most people with pulmonary fibrosis have breathlessness. You may only notice this when you're active, like climbing stairs. But some people feel breathless even when resting.",
        ],
      },
      {
        heading: "Signs a doctor may notice",
        paragraphs: [
          "Your GP may notice other signs, like finger clubbing, lips which are blueish or grey due to low blood oxygen levels, or crackling sounds when they listen to your chest.",
          "Finger clubbing is when the fingertips look swollen and rounder. Your healthcare professional may ask you to place your fingernails together to look for a small space between them.",
          "Symptoms like breathlessness may be caused by other health conditions too, such as COPD, heart disease, being overweight or becoming less fit as you get older.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "See a GP if you have shortness of breath that gets worse when you've been doing your normal activities, or when you lie down, or if you've had a cough for 3 weeks or more. You're not wasting anyone's time by getting it checked out.",
          "If you have pulmonary fibrosis, contact your GP or call 111 if you feel more breathless than usual, are coughing more, find your usual activities more difficult, or have symptoms like blue or grey lips which are not normal for you.",
          "Call 999 or go to A&E immediately if you suddenly feel much more breathless, you're finding it very hard to breathe, you're coughing up a lot of blood, you have new or severe chest pain, or you feel unusually drowsy or confused.",
        ],
      },
    ],
    helps: [
      "See your GP as soon as possible if you notice any of these symptoms.",
      "See a GP if you've had a cough for 3 weeks or more.",
      "Contact your GP or call 111 if you feel more breathless than usual.",
      "Call 999 or go to A&E immediately if you suddenly feel much more breathless or are finding it very hard to breathe.",
    ],
    tryThisWeek: [
      "See your GP about your symptoms.",
      "Get a three-week cough checked.",
      "Know when to call 999.",
    ],
    ask: "Are my symptoms caused by pulmonary fibrosis, or by something else?",
    interactive: {
      kind: "signs",
      title: "What have you noticed?",
      intro: "Tick anything you have noticed. The ones you tick make a list to take to your GP or specialist team.",
      signs: [
        "Breathless with everyday activities",
        "Breathless even when resting",
        "A dry cough that does not go away",
        "Feeling tired a lot, or all the time",
        "Losing weight without trying",
        "Fingertips that look swollen and rounder",
        "Lips that look blueish or grey",
      ],
      after: "See your GP as soon as possible if you notice any of these symptoms. Call 999 or go to A&E immediately if you suddenly feel much more breathless or are finding it very hard to breathe.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_IPF, ALUK_WHAT, ALUK_ILD],
    quiz: {
      question: "How do the symptoms of pulmonary fibrosis usually start?",
      options: [{ text: "Slowly, then get worse over time", right: true }, { text: "Suddenly, overnight" }, { text: "Only after a cold" }],
      why: "The symptoms usually start slowly but continue to get worse over time.",
    },
  },
  {
    id: "pf-tests",
    kicker: "Tests",
    question: "How is pulmonary fibrosis diagnosed?",
    hook: "A GP check, then specialist tests: breathing tests, a chest X-ray and a detailed CT scan. A biopsy only if things are still unclear.",
    short: "Your GP may listen to your chest, do a breathing test and arrange blood tests, then refer you to a team of respiratory specialists. Tests include spirometry, a chest X-ray and a high-resolution CT scan to look for scarring. A biopsy is only needed if test results are still uncertain.",
    sections: [
      {
        heading: "Seeing your GP",
        paragraphs: [
          "Your GP may ask about your medical history, including any family history of lung disease. They may ask about your work and hobbies to see if you've been exposed to dusts.",
          "They may listen to your chest using a stethoscope, and may hear a crackling sound that sounds like pulling Velcro apart. They may also do a lung function test, arrange blood tests to help rule out other conditions, and check your fingers and fingertips.",
          "If a doctor thinks you could have idiopathic pulmonary fibrosis, they'll refer you to a specialist in hospital for tests.",
        ],
      },
      {
        heading: "Breathing tests",
        paragraphs: [
          "A spirometry test measures how much air you can breathe out in one breath. You take a deep breath in, close your lips tightly around the tube, and breathe out as quickly and strongly as you can.",
          "You may also be offered a gas transfer test. This shows how well your lungs move oxygen into your blood. The whole test takes around 10 to 30 minutes.",
        ],
      },
      {
        heading: "Scans",
        paragraphs: [
          "A chest X-ray checks for patches or patterns on the lungs that could suggest scarring. A chest X-ray is not enough to diagnose pulmonary fibrosis and a high-resolution CT scan is usually needed too.",
          "A high-resolution CT scan gives detailed images of your lungs. The results can show different patterns that make diagnosing pulmonary fibrosis easier.",
        ],
      },
      {
        heading: "If it is still not clear",
        paragraphs: [
          "If it's still not clear what's causing your symptoms, you may be offered a bronchoscopy, where a thin, flexible tube is passed down into your lungs, or a lung biopsy, where small samples of your lung tissue are removed for testing.",
          "Biopsies are not needed for everyone, only if test results are still uncertain.",
        ],
      },
      {
        heading: "Why it can take time",
        paragraphs: [
          "Diagnosing pulmonary fibrosis can sometimes take time. Symptoms can come on gradually, and other conditions with similar symptoms, like asthma and COPD, need to be ruled out.",
          "A specialist team including respiratory specialists and radiologists needs time to carefully review and discuss all your test results, to make sure they are giving you the correct diagnosis.",
        ],
      },
    ],
    helps: [
      "See your GP if you have any signs and symptoms of pulmonary fibrosis.",
      "Tell your GP about your work, your hobbies and any family history of lung disease.",
      "While you're waiting for a diagnosis, try to keep active, eat well and stay at a healthy weight.",
      "Ask your specialist team any questions you have about your diagnosis, symptoms and treatments.",
    ],
    tryThisWeek: [
      "Note your work, hobbies and family history.",
      "Keep active while you wait.",
      "Write down your questions.",
    ],
    ask: "Which tests do I need, and how long might it take to get a diagnosis?",
    interactive: {
      kind: "flip-cards",
      title: "The tests, turned over",
      intro: "Tap a card to see what each test does.",
      cards: [
        { id: "blood", front: "Blood tests", when: "At the GP or the specialist team", back: "Can help rule out other conditions or infections." },
        { id: "spirometry", front: "Spirometry", when: "To check how well your lungs work", back: "Measures how much air you can breathe out in one breath." },
        { id: "gas", front: "Gas transfer test", when: "Alongside other breathing tests", back: "Shows how well your lungs move oxygen into your blood. It takes around 10 to 30 minutes." },
        { id: "xray", front: "Chest X-ray", when: "Early on", back: "Checks for patches or patterns that could suggest scarring. On its own it is not enough to diagnose pulmonary fibrosis." },
        { id: "ct", front: "High-resolution CT scan", when: "Usually needed too", back: "Gives detailed images of your lungs, showing patterns that make diagnosing pulmonary fibrosis easier." },
        { id: "biopsy", front: "Biopsy", when: "Only if results are still uncertain", back: "A small sample of lung tissue is taken, by bronchoscopy or surgery, to confirm a diagnosis." },
      ],
    },
    sources: [NHS_IPF, ALUK_DIAGNOSIS, NHS_SPIROMETRY, ALUK_GAS_TRANSFER],
    quiz: {
      question: "Is a chest X-ray enough to diagnose pulmonary fibrosis?",
      options: [{ text: "No, a CT scan is usually needed too", right: true }, { text: "Yes, always" }, { text: "Only with a blood test" }],
      why: "A chest X-ray is not enough to diagnose pulmonary fibrosis and a high-resolution CT scan is usually needed too.",
    },
  },
  {
    id: "pf-antifibrotics",
    kicker: "Treatment",
    question: "What do the medicines that slow the scarring do?",
    hook: "Two antifibrotic medicines, pirfenidone and nintedanib, can help slow down scarring. They cannot undo scarring that is already there.",
    short: "Antifibrotics can help slow down scarring in the lungs, but they cannot treat scarring that has already developed. The two main ones are pirfenidone and nintedanib, taken as tablets or capsules several times a day. You'll need regular blood tests and reviews while taking them.",
    sections: [
      {
        heading: "What they do",
        paragraphs: [
          "Antifibrotics can help slow down scarring. However, they cannot treat scarring that has already developed.",
          "There are 2 medicines that may be prescribed to some people with idiopathic pulmonary fibrosis, to help slow down scarring in the lungs: pirfenidone (Esbriet) and nintedanib (Ofev).",
        ],
      },
      {
        heading: "Who they are for",
        paragraphs: [
          "Pirfenidone is mainly used for idiopathic pulmonary fibrosis. Nintedanib is used for IPF, but can also be used for other types of interstitial lung diseases which are progressive and fibrotic.",
          "Your specialist team will consider your diagnosis, test results, how your condition is changing, and your overall health when deciding whether an antifibrotic medicine is suitable for you.",
        ],
      },
      {
        heading: "Taking them",
        paragraphs: [
          "These medicines are tablets or capsules you take several times a day. While taking these medicines you'll need regular blood tests to check how well they're working.",
          "Regular reviews are important to check any changes to your lung function, if the medicines are affecting your liver, and how you're coping with any side effects.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Very common nintedanib side effects, affecting 1 in 10 or more people, include feeling sick, vomiting, skin rash, diarrhoea and abdominal pain.",
          "Very common pirfenidone side effects include diarrhoea, loss of appetite, headache, indigestion, nausea and a rash from sensitivity to sunlight. Your specialist may tell you to avoid direct sunlight and use SPF50 sunscreen.",
          "Tell your specialist team about any side effects you may have. They can give you advice and support on managing them and they may adjust your treatment.",
        ],
      },
      {
        heading: "Other medicines",
        paragraphs: [
          "If you have fibrosis caused by an inflammatory or autoimmune interstitial lung disease, your specialist team may prescribe medicines that calm down your immune response, such as prednisolone or other immunosuppressants.",
          "Your pharmacist can explain how your medicines work, discuss possible side effects, and check whether medicines are safe to take together.",
        ],
      },
    ],
    helps: [
      "Ask your specialist team whether an antifibrotic medicine is suitable for you.",
      "Have regular blood tests while taking these medicines.",
      "Tell your specialist team about any side effects you may have.",
      "If you take pirfenidone, ask whether you should avoid direct sunlight and use SPF50 sunscreen.",
      "Ask your pharmacist to check whether your medicines are safe to take together.",
    ],
    tryThisWeek: [
      "Ask if an antifibrotic suits you.",
      "Report any side effects.",
      "Ask your pharmacist to check your medicines.",
    ],
    ask: "Would an antifibrotic medicine help me, and which side effects should I look out for?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments on an antifibrotic",
      scenarios: [
        {
          id: "side-effects",
          situation: "Since starting your medicine you've had diarrhoea and felt sick.",
          options: [{ text: "Tell your specialist team", best: true }, { text: "Keep it to yourself" }],
          why: "Tell your specialist team about any side effects you may have. They can give you advice and support on managing them and they may adjust your treatment.",
        },
        {
          id: "sun",
          situation: "You take pirfenidone and a sunny day is forecast.",
          options: [{ text: "Follow your team's advice on sun", best: true }, { text: "Sunbathe as usual" }],
          why: "Pirfenidone can cause a rash from sensitivity to sunlight. Your specialist may tell you to avoid direct sunlight and use SPF50 sunscreen.",
        },
        {
          id: "blood-test",
          situation: "A blood test is due, but you feel fine.",
          options: [{ text: "Go to the blood test", best: true }, { text: "Skip it while you feel well" }],
          why: "While taking these medicines you'll need regular blood tests to check how well they're working.",
        },
        {
          id: "new-medicine",
          situation: "You've been prescribed a new medicine for something else.",
          options: [{ text: "Ask your pharmacist to check them", best: true }, { text: "Start it without checking" }],
          why: "Your pharmacist can explain how your medicines work, discuss possible side effects, and check whether medicines are safe to take together.",
        },
      ],
    },
    sources: [NHS_IPF, ALUK_TREATMENT],
    quiz: {
      question: "Can antifibrotics treat scarring that has already developed?",
      options: [{ text: "No, they help slow down scarring", right: true }, { text: "Yes, they reverse it" }, { text: "Only if taken once a week" }],
      why: "Antifibrotics can help slow down scarring. However, they cannot treat scarring that has already developed.",
    },
  },
  {
    id: "pf-oxygen",
    kicker: "Treatment",
    question: "What is oxygen therapy, and do I need it?",
    hook: "Oxygen therapy treats low blood oxygen levels, not breathlessness on its own. Some people need it only when active; others at rest too.",
    short: "Oxygen therapy is where you breathe in air with a higher concentration of oxygen in it. You may need it at home if tests show the level of oxygen in your blood is too low. Some people only need oxygen when they're active, while others need it at rest too.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Oxygen therapy is a therapy where you breathe in air with a higher concentration of oxygen in it. You may need oxygen therapy to use at home if tests show that the level of oxygen in your blood is too low.",
          "Oxygen therapy is a treatment for low blood oxygen levels, not breathlessness. If you have problems with breathlessness but do not have low blood oxygen levels, it is not the right treatment for you.",
        ],
      },
      {
        heading: "At rest or on the move",
        paragraphs: [
          "Some people only need oxygen when they're active or doing exercise. But for others, blood oxygen levels may be low even when resting.",
          "If your oxygen levels drop when you're active, you may be offered ambulatory oxygen. This is when you have a small oxygen cylinder you can use while moving around or exercising.",
          "Oxygen therapy may help you manage your breathlessness, make it easier for you to be more active, and make it easier to take part in pulmonary rehabilitation classes.",
        ],
      },
      {
        heading: "Getting assessed",
        paragraphs: [
          "To check the amount of oxygen in your blood, you may have a blood test and an oxygen sensor may be attached to your finger or earlobe. You may also be asked to do an exercise or a walking test.",
          "The assessment involves measuring your blood gases on two occasions, a few weeks apart. Your oxygen therapy should then be reviewed at least once a year.",
        ],
      },
      {
        heading: "The equipment",
        paragraphs: [
          "Oxygen is breathed through short tubes placed in your nostrils, called a nasal cannula, or a mask over your nose and mouth. An engineer will install the equipment and explain how to use it safely.",
          "An oxygen concentrator is recommended if you need to have oxygen for most of the day. It may be possible to use a small, portable oxygen cylinder outside your house or when moving around at home. Portable oxygen cylinders are not suitable for everyone.",
        ],
      },
      {
        heading: "Using it safely",
        paragraphs: [
          "Oxygen is highly flammable. Do not smoke, or let anyone smoke near you, when using oxygen therapy. Smoking also means you will not get the full benefits of your oxygen therapy.",
          "Keep your device at least 3 metres away from any appliances that use an open flame, such as a gas cooker or gas fire. Do not use oil-based emollients, such as Vaseline, when using your device.",
          "Only use home oxygen therapy if your GP or specialist has prescribed it for you. Buying oxygen online and using it without a prescription can be dangerous.",
        ],
      },
    ],
    helps: [
      "Only use home oxygen therapy if your GP or specialist has prescribed it for you.",
      "Do not smoke, or let anyone smoke near you, when using oxygen therapy.",
      "Keep your device at least 3 metres away from appliances that use an open flame, such as a gas cooker.",
      "Tell your local fire brigade that you have oxygen at home; they can arrange a free fire safety check.",
      "Tell your home insurance provider that you use oxygen at home.",
    ],
    tryThisWeek: [
      "Use oxygen only as prescribed.",
      "Keep smoke away from your oxygen.",
      "Tell your local fire brigade.",
    ],
    ask: "Do I need oxygen, at rest or when I am active?",
    interactive: {
      kind: "scenarios",
      title: "Living with oxygen at home",
      scenarios: [
        {
          id: "smoke",
          situation: "A visitor wants to smoke indoors while your oxygen is on.",
          options: [{ text: "Ask them not to smoke near you", best: true }, { text: "Let them, with a window open" }],
          why: "Do not smoke, or let anyone smoke near you, when using oxygen therapy. Oxygen is highly flammable.",
        },
        {
          id: "online",
          situation: "You see oxygen for sale online and wonder if it would help.",
          options: [{ text: "Only use oxygen prescribed for you", best: true }, { text: "Buy some to try" }],
          why: "Buying oxygen online and using it without a prescription can be dangerous.",
        },
        {
          id: "lips",
          situation: "Your lips are dry and you reach for Vaseline.",
          options: [{ text: "Ask your pharmacist for another product", best: true }, { text: "Use it while on oxygen" }],
          why: "Do not use oil-based emollients, such as Vaseline, when using your device. Your care team or pharmacist should be able to recommend alternative products.",
        },
        {
          id: "levels",
          situation: "You feel breathless, but your blood oxygen levels are not low.",
          options: [{ text: "Ask about other ways to manage it", best: true }, { text: "Ask for oxygen anyway" }],
          why: "Oxygen therapy is a treatment for low blood oxygen levels, not breathlessness. If you do not have low blood oxygen levels, it is not the right treatment for you.",
        },
      ],
    },
    sources: [NHS_OXYGEN, ALUK_TREATMENT, ALUK_OXYGEN, ALUK_LIVING, ALUK_OXYGEN_LIFE],
    quiz: {
      question: "What does oxygen therapy treat?",
      options: [{ text: "Low blood oxygen levels", right: true }, { text: "Any breathlessness at all" }, { text: "A dry cough" }],
      why: "Oxygen therapy is a treatment for low blood oxygen levels, not breathlessness.",
    },
  },
  {
    id: "pf-rehab",
    kicker: "Staying active",
    question: "What is pulmonary rehab, and how do I stay active?",
    hook: "A course of exercise and advice for people whose lungs make them breathless. Getting out of breath is part of the therapy.",
    short: "Pulmonary rehabilitation is a treatment programme of exercise classes, advice and breathing techniques for people with a lung condition that makes them breathless. A course usually lasts six to eight weeks, with two sessions a week. Keeping active at a level that's right for you can help you manage breathlessness and boost your mood.",
    sections: [
      {
        heading: "What pulmonary rehab is",
        paragraphs: [
          "Pulmonary rehabilitation (PR) is a treatment programme made up of exercise classes designed for people with long-term lung conditions, information about looking after your body and lungs, advice on managing your lung condition, and techniques to manage breathlessness.",
          "A local pulmonary rehabilitation course can help you understand idiopathic pulmonary fibrosis and learn the best ways to live with it, such as exercises you can do.",
        ],
      },
      {
        heading: "How a course works",
        paragraphs: [
          "A course of PR usually lasts six to eight weeks, with two sessions of about two hours each week. You'll be in a group with other people too.",
          "At each session, you'll spend about half the time exercising. Getting out of breath is part of the therapy, but you will be supported throughout the class and won't be asked to do more than you can safely do.",
          "If your oxygen levels fall when you're active, oxygen therapy can help you take part in pulmonary rehabilitation classes.",
        ],
      },
      {
        heading: "How it helps",
        paragraphs: [
          "PR can improve your muscle strength so you become less breathless, help you cope better with feeling out of breath, improve your mental wellbeing and help you feel less tired.",
          "Your specialist team may refer you to PR classes if breathlessness is making it harder for you to stay active or manage everyday activities.",
        ],
      },
      {
        heading: "Keeping active every day",
        paragraphs: [
          "If you have pulmonary fibrosis, keeping fit and active can help you to manage breathlessness, keep muscles strong, including your breathing muscles, and boost your mood.",
          "Try to keep active regularly at a level that's right for you, building up gradually when you can. You could try setting yourself small goals to keep motivated.",
          "If your symptoms are much worse than usual, stop exercising and ask your specialist team for advice about when it's safe to start again.",
        ],
      },
    ],
    helps: [
      "Ask your GP, practice nurse or respiratory team if PR is right for you.",
      "Try to attend every session of PR if you can.",
      "Keep active regularly at a level that's right for you, building up gradually when you can.",
      "Set yourself small goals to keep motivated.",
      "If your symptoms are much worse than usual, stop exercising and ask your specialist team when it's safe to start again.",
      "Keep going after PR, with a follow-up programme or the Keep Active videos at home.",
    ],
    tryThisWeek: [
      "Ask about a PR referral.",
      "Set one small activity goal.",
      "Build up gradually.",
    ],
    ask: "Can I be referred to pulmonary rehabilitation, and how active should I try to be?",
    interactive: {
      kind: "timeline",
      title: "A course of pulmonary rehab",
      steps: [
        { id: "referral", when: "Before", title: "Referral", points: ["Your GP, practice nurse or respiratory team can refer you.", "Some programmes have waiting lists, so speak to your GP about it as soon as you can."] },
        { id: "assessment", when: "First session", title: "Assessment", points: ["A check of your health and what you're physically able to do."] },
        { id: "sessions", when: "Six to eight weeks", title: "Two sessions a week", points: ["About half of each session is exercise.", "The rest covers topics like breathing techniques, medicines and eating when you are breathless."] },
        { id: "after", when: "Afterwards", title: "Keep it going", points: ["Staying active helps you keep up the progress you've made.", "Ask about a follow-up programme, or use the Keep Active videos at home."] },
      ],
    },
    sources: [NHS_IPF, ALUK_TREATMENT, ALUK_REHAB, ALUK_LIVING],
    quiz: {
      question: "Is getting out of breath during pulmonary rehab a sign to stop going?",
      options: [{ text: "No, it is part of the therapy", right: true }, { text: "Yes, always stop going" }, { text: "Only on the first day" }],
      why: "Getting out of breath is part of the therapy, but you will be supported throughout the class and won't be asked to do more than you can safely do.",
    },
  },
  {
    id: "pf-cough",
    kicker: "Symptoms",
    question: "How can I manage the cough?",
    hook: "A pulmonary fibrosis cough can be hard to treat, and ordinary cough medicines may not work. Some simple habits can help you cough less.",
    short: "With pulmonary fibrosis, simple everyday activities like talking or moving position may make you cough. Treating the cough can be difficult because the usual over-the-counter cough medicines may not work. Drinking water regularly, breathing gently and avoiding things that make your cough worse can help you cough less.",
    sections: [
      {
        heading: "Why it happens",
        paragraphs: [
          "When you have pulmonary fibrosis, simple everyday activities like talking or moving position may make you cough. Constant coughing can affect the quality of your everyday life.",
          "Coughing a lot over a long period of time can irritate your throat and make you more sensitive to things that trigger your cough, leading to a cycle of coughing.",
        ],
      },
      {
        heading: "Treating the cough",
        paragraphs: [
          "Treating a pulmonary fibrosis cough can sometimes be difficult, because the usual over-the-counter cough medicines may not work. Some studies suggest that antifibrotics can improve cough in some people.",
          "Treatments cannot stop you from coughing completely, but there are things you can do to help you cough less.",
        ],
      },
      {
        heading: "Things you can try",
        paragraphs: [
          "You could try drinking water regularly throughout the day, and breathing in gently through your nose and out through your mouth.",
          "Avoid anything that worsens your cough, such as cold air, smoke and perfumes, if you can. You could try wrapping a loose scarf over your mouth and nose to warm the air you breathe in.",
        ],
      },
      {
        heading: "Other causes to mention",
        paragraphs: [
          "Other conditions can also cause a cough or make it worse. Tell your specialist team about heartburn, indigestion or a sour taste at the back of your mouth, which can be acid reflux.",
          "Also mention post-nasal drip, when extra mucus builds up and drips from your nose into your throat, and any respiratory infections, such as chest infections.",
        ],
      },
      {
        heading: "When to get advice",
        paragraphs: [
          "Get advice from your GP or specialist team if you're coughing more than usual, or if your cough has changed or got worse.",
          "Ask for an urgent GP appointment or get help from NHS 111 if your cough is very bad or quickly gets worse, you feel very unwell, you have chest pain, the side of your neck feels swollen and painful, you find it hard to breathe, or you're coughing up blood.",
        ],
      },
    ],
    helps: [
      "Drink water regularly throughout the day.",
      "Breathe in gently through your nose and out through your mouth.",
      "Avoid anything that worsens your cough, such as cold air, smoke and perfumes, if you can.",
      "Wrap a loose scarf over your mouth and nose to warm the air you breathe in.",
      "Tell your specialist team about acid reflux, post-nasal drip or chest infections.",
      "Get advice from your GP or specialist team if you're coughing more than usual, or your cough has changed.",
    ],
    tryThisWeek: [
      "Sip water through the day.",
      "Avoid cold air, smoke and perfume.",
      "Tell your team about reflux.",
    ],
    ask: "What can help my cough, and could anything else be making it worse?",
    interactive: {
      kind: "risk-check",
      title: "What might set off your cough?",
      intro: "Tick any that seem to start or worsen your cough. Some can be avoided or treated; some cannot.",
      items: [
        { id: "talking", label: "Talking", note: "Simple everyday activities like talking may make you cough.", changeable: false },
        { id: "moving", label: "Moving position", note: "Moving position may make you cough.", changeable: false },
        { id: "cold", label: "Cold air", note: "Try wrapping a loose scarf over your mouth and nose to warm the air you breathe in.", changeable: true },
        { id: "smoke", label: "Smoke", note: "Avoid anything that worsens your cough, such as smoke, if you can.", changeable: true },
        { id: "perfume", label: "Perfumes", note: "Avoid anything that worsens your cough, such as perfumes, if you can.", changeable: true },
        { id: "reflux", label: "Heartburn or a sour taste", note: "Acid reflux can cause a cough or make it worse. Tell your specialist team.", changeable: true },
        { id: "drip", label: "Mucus dripping into your throat", note: "Post-nasal drip can cause a cough or make it worse. Tell your specialist team.", changeable: true },
        { id: "infection", label: "A chest infection", note: "Respiratory infections can cause a cough or make it worse. Tell your specialist team.", changeable: true },
      ],
    },
    sources: [ALUK_TREATMENT, ALUK_ILD, NHS_COUGH],
    quiz: {
      question: "Why can a pulmonary fibrosis cough be hard to treat?",
      options: [{ text: "Usual cough medicines may not work", right: true }, { text: "It is always an infection" }, { text: "It only happens at night" }],
      why: "Treating a pulmonary fibrosis cough can sometimes be difficult, because the usual over-the-counter cough medicines may not work.",
    },
  },
  {
    id: "pf-breathlessness",
    kicker: "Every day",
    question: "How can I manage breathlessness day to day?",
    hook: "Breathing techniques, recovery positions, a handheld fan and pacing your day can all help you feel more in control.",
    short: "Breathing techniques help you control and slow your breathing, and recover after being active. Pacing, planning and prioritising your day can help you avoid getting too exhausted. Holding a handheld battery fan near your face can help you feel less breathless.",
    sections: [
      {
        heading: "Why staying active matters",
        paragraphs: [
          "You may avoid physical activity because you don't want to become breathless. However, moving less means that your muscles become weaker, and this can make breathing harder.",
          "Breathlessness is also affected by the way you breathe, your lifestyle and how you think and feel about your breathing. A worrying thought can make you feel anxious and make you feel breathless.",
        ],
      },
      {
        heading: "Breathing techniques",
        paragraphs: [
          "Breathing techniques help you control and slow your breathing. Different techniques work for different people, and your specialist team, respiratory physiotherapist or pulmonary rehabilitation team can help you find ones that work for you.",
          "For pursed-lips breathing, breathe in gently through your nose, then breathe out with your lips pursed as if you're going to blow out a candle. Blow out for as long as is comfortable, and do not force your lungs to empty.",
          "For blow as you go breathing, breathe in before you make the effort, and breathe out while you're making it, for example while lifting a heavy bag.",
        ],
      },
      {
        heading: "Getting your breath back",
        paragraphs: [
          "Positions can help you recover from breathlessness. You could sit leaning forward with your elbows on your knees, lean back or sideways against a wall, or sit leaning forward at a table with your head and arms resting on pillows.",
          "Hold a handheld battery fan near your face, about 6 inches away. This can help you feel less breathless.",
        ],
      },
      {
        heading: "Pacing your day",
        paragraphs: [
          "Try pacing, planning and prioritising to avoid getting too exhausted. It may help to plan your tasks around your most important thing to do each day, and to break bigger tasks down into smaller ones, spread across the day.",
          "Use a towelling robe after showering or bathing, put items you use often in easy-to-reach places, and don't be afraid to ask for support when you need it.",
        ],
      },
      {
        heading: "When it is an emergency",
        paragraphs: [
          "Always contact your GP or call 111 as soon as possible if your breathing gets worse.",
          "Call 999 or go to A&E immediately if you have severe difficulty breathing and you're gasping, choking or not able to get words out, your chest feels tight or heavy, you have pain that spreads to your arms, back, neck and jaw, your lips or skin are turning very pale, blue or grey, or you feel suddenly confused.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
        ],
      },
    ],
    helps: [
      "Ask your physiotherapist or healthcare professional about the right breathing techniques for you.",
      "Practise breathing control when you're sitting, relaxed and not out of breath.",
      "Hold a handheld battery fan near your face to help you feel less breathless.",
      "Break bigger tasks down into smaller ones, spread across the day.",
      "Stay as active as possible to manage your breathlessness.",
      "Contact your GP or call 111 as soon as possible if your breathing gets worse.",
    ],
    tryThisWeek: [
      "Practise breathing while relaxed.",
      "Keep a handheld fan nearby.",
      "Break big tasks into smaller ones.",
    ],
    ask: "Which breathing techniques would suit me, and when should I get urgent help?",
    interactive: {
      kind: "scenarios",
      title: "When your breath runs short",
      scenarios: [
        {
          id: "stairs",
          situation: "You reach the top of the stairs very out of breath.",
          options: [{ text: "Lean forward and use pursed-lips breathing", best: true }, { text: "Hold your breath until it passes" }],
          why: "You can use pursed-lips breathing to help control your breathing at any time, and positions like sitting leaning forward help you recover from breathlessness.",
        },
        {
          id: "bag",
          situation: "You need to lift a heavy shopping bag.",
          options: [{ text: "Breathe in first, then out as you lift", best: true }, { text: "Hold your breath and lift" }],
          why: "Breathe in before you make the effort. Breathe out while you're making the effort, for example while lifting the heavy bag.",
        },
        {
          id: "worse",
          situation: "Over a few days your breathing has been getting worse.",
          options: [{ text: "Contact your GP or call 111", best: true }, { text: "Wait for your next review" }],
          why: "Always contact your GP or call 111 as soon as possible if your breathing gets worse.",
        },
        {
          id: "severe",
          situation: "Suddenly you're gasping and cannot get words out.",
          options: [{ text: "Call 999", best: true }, { text: "Drive yourself to A&E" }, { text: "Wait to see if it passes" }],
          why: "Call 999 or go to A&E immediately if you have severe difficulty breathing. Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
        },
      ],
    },
    sources: [ALUK_BREATHLESS_MANAGE, ALUK_TREATMENT, ALUK_BREATHLESS_LIVING, ALUK_LIVING, NHS_BREATHLESS, ALUK_BREATHLESS_WHAT],
    quiz: {
      question: "Where should a handheld fan be held to help with breathlessness?",
      options: [{ text: "Near your face", right: true }, { text: "By your feet" }, { text: "Behind your back" }],
      why: "Hold a handheld battery fan near your face, about 6 inches away. This can help you feel less breathless.",
    },
  },
  {
    id: "pf-infections",
    kicker: "Protection",
    question: "Which vaccines help, and how do I avoid chest infections?",
    hook: "Infections can be more serious with a lung condition. Yearly flu jabs, the pneumococcal and RSV vaccines, and good hygiene all help.",
    short: "The NHS says to get the annual flu vaccine, pneumococcal vaccine and RSV vaccine if you're eligible, because these infections can be more serious if you have a lung condition. Try to keep away from people with chest infections and colds. Washing your hands and covering coughs and sneezes help stop infections spreading.",
    sections: [
      {
        heading: "Why vaccines matter",
        paragraphs: [
          "Get the annual flu vaccine, pneumococcal vaccine and RSV vaccine if you're eligible. These infections can be more serious if you have a lung condition.",
          "If you have a lung condition and flu, you're more at risk of a flare-up of your lung condition. You're also more at risk of a chest infection.",
        ],
      },
      {
        heading: "Flu and pneumococcal vaccines",
        paragraphs: [
          "Most people with lung conditions can get a free flu vaccine, including people with pulmonary fibrosis. It's best to get the vaccine before the end of October, and flu vaccines take up to 14 days to work.",
          "The pneumococcal vaccine helps protect against serious illnesses like pneumonia. People with a long-term condition that affects their breathing are at higher risk of getting seriously ill, and most adults only need 1 dose for long-term protection.",
        ],
      },
      {
        heading: "RSV and COVID-19 vaccines",
        paragraphs: [
          "You can get a free RSV vaccination on the NHS if you're aged 75 or over, or aged 65 to 74 and have a long-term lung condition. Older adults only need 1 dose.",
          "You can get a COVID-19 vaccine if you're aged 75 or over, or have a weakened immune system because of a health condition or treatment. Speak to your GP surgery or specialist if you're not sure if you're eligible.",
          "At your review, your specialist team can make sure you're having all the vaccines you're eligible for, including flu, COVID, RSV and shingles.",
        ],
      },
      {
        heading: "Avoiding infections",
        paragraphs: [
          "Try to keep away from people with chest infections and colds.",
          "Wash your hands with warm water and soap regularly, and cover your mouth and nose when you cough and sneeze. Open windows and doors to let fresh air into indoor spaces.",
          "See a GP if you have a chest infection and a long-term health condition, such as a lung condition, or if you feel very unwell or your symptoms get worse.",
        ],
      },
    ],
    helps: [
      "Get the flu vaccine every year, ideally before the end of October.",
      "Ask if you should have the pneumococcal vaccine.",
      "Check whether you're eligible for the RSV and COVID-19 vaccines.",
      "Try to keep away from people with chest infections and colds.",
      "Wash your hands with warm water and soap regularly.",
      "See a GP if you get a chest infection.",
    ],
    tryThisWeek: [
      "Book your flu vaccine.",
      "Ask about the pneumococcal vaccine.",
      "Wash your hands regularly.",
    ],
    ask: "Which vaccines am I eligible for, and when should I have them?",
    interactive: {
      kind: "flip-cards",
      title: "Your vaccines, turned over",
      intro: "Tap a card to see who each vaccine is for.",
      cards: [
        { id: "flu", front: "Flu vaccine", when: "Every year, before the end of October", back: "Free for most people with lung conditions, including pulmonary fibrosis. It takes up to 14 days to work." },
        { id: "pneumococcal", front: "Pneumococcal vaccine", when: "Usually once", back: "Helps protect against serious illnesses like pneumonia. Most adults only need 1 dose for long-term protection." },
        { id: "rsv", front: "RSV vaccine", when: "Aged 75 or over, or 65 to 74 with a lung condition", back: "Helps reduce the risk of serious breathing problems like pneumonia. It is given all year round." },
        { id: "covid", front: "COVID-19 vaccine", when: "Usually spring and early winter", back: "For people aged 75 or over, or with a weakened immune system because of a health condition or treatment." },
      ],
    },
    sources: [NHS_IPF, ALUK_FLU, NHS_PNEUMOCOCCAL, NHS_RSV, NHS_COVID, ALUK_TREATMENT, NHS_CHEST_INFECTION],
    quiz: {
      question: "When is it best to get the flu vaccine?",
      options: [{ text: "Before the end of October", right: true }, { text: "In the middle of summer" }, { text: "Only once you have flu" }],
      why: "It's best to get the vaccine before the end of October, and flu vaccines take up to 14 days to work.",
    },
  },
  {
    id: "pf-travel",
    kicker: "Travel",
    question: "Can I travel and fly with pulmonary fibrosis?",
    hook: "Most people with a lung condition can travel safely. Planning early with your team is the key, especially if you fly or use oxygen.",
    short: "Most people with a lung condition can travel safely, and you can fly if you have an interstitial lung disease, but talk to your GP or specialist team before you plan any travel. They may suggest a fitness-to-fly test to check if you need in-flight oxygen. If you use oxygen, arrange it with your supplier or airline well before you go.",
    sections: [
      {
        heading: "Talk to your team first",
        paragraphs: [
          "Most people with a lung condition can travel safely. But it's important to speak to your GP or specialist team for advice before planning a trip.",
          "You can fly if you have an interstitial lung disease. Before you plan any travel, talk to your GP or specialist team. They may prescribe you an emergency supply of antibiotics.",
          "If you take oral steroids or immunosuppressive medicine, see your GP at least eight weeks before you travel. Some vaccines may not be suitable for you.",
        ],
      },
      {
        heading: "Before you fly",
        paragraphs: [
          "Ask your GP or specialist team if you need any tests before you travel. They may suggest a fitness-to-fly (hypoxic challenge) test to check if you need in-flight oxygen.",
          "You may not normally use oxygen, but you may need it while flying because there is less oxygen in the air at high altitudes.",
          "The fitness-to-fly test is not usually available on the NHS. It can take a few weeks to arrange, so book it at least four to six weeks in advance.",
        ],
      },
      {
        heading: "Travelling with oxygen",
        paragraphs: [
          "If you're going on holiday in the UK, talk to your oxygen supplier to see if it's possible for oxygen to be delivered to your destination. Try to give them as much notice as possible.",
          "In most cases, UK oxygen providers do not allow their equipment to be taken outside the UK, but they can usually tell you how to arrange oxygen abroad. Airlines have their own rules about using in-flight oxygen, so check with the airline before booking.",
          "If you're using oxygen on the plane, the airline will ask for a medical certificate to show you're healthy enough to fly.",
        ],
      },
      {
        heading: "Medicines, insurance and altitude",
        paragraphs: [
          "Discuss your plans with your doctor at least two months before you plan to travel. If you're flying, carry your medicines and any medical equipment in your hand luggage.",
          "You should always get travel insurance if you're travelling abroad, even if you have a UK Global Health Insurance Card. Check that it covers your lung condition and any other conditions you have.",
          "Our lungs get less oxygen at high altitude, which can make it more difficult for people with lung conditions, so it's a good idea to talk to your healthcare professional before travelling.",
        ],
      },
    ],
    helps: [
      "Speak to your GP or specialist team for advice before planning a trip.",
      "Ask whether you need a fitness-to-fly test, and book it at least four to six weeks in advance.",
      "Give your oxygen supplier as much notice as possible.",
      "Carry your medicines and any medical equipment in your hand luggage.",
      "Get travel insurance that covers your lung condition and any other conditions you have.",
      "Keep the helpline number for your oxygen equipment supplier with you at all times.",
    ],
    tryThisWeek: [
      "Talk to your team before booking.",
      "Ask about a fitness-to-fly test.",
      "Pack medicines in your hand luggage.",
    ],
    ask: "Is it safe for me to fly, and do I need a fitness-to-fly test or in-flight oxygen?",
    interactive: {
      kind: "timeline",
      title: "Planning a trip, step by step",
      steps: [
        { id: "team", when: "Before booking", title: "Talk to your team", points: ["Speak to your GP or specialist team before planning a trip.", "If you need in-flight oxygen, check with the airline before booking."] },
        { id: "medicines", when: "Two months before", title: "Plan your medicines", points: ["Discuss your plans with your doctor.", "Organise medicines for the whole of your trip."] },
        { id: "steroids", when: "Eight weeks before", title: "Steroids or immunosuppressants", points: ["See your GP at least eight weeks before you travel if you take these medicines."] },
        { id: "test", when: "Four to six weeks before", title: "Fitness-to-fly test", points: ["Book it in advance if your team suggests it.", "It checks if you need in-flight oxygen."] },
        { id: "go", when: "Travel day", title: "Pack and go", points: ["Medicines and medical equipment in your hand luggage.", "Keep your oxygen supplier's helpline number with you."] },
      ],
    },
    sources: [ALUK_TRAVEL, ALUK_TRAVEL_OXYGEN, NHS_OXYGEN, ALUK_TRAVEL_INSURANCE],
    quiz: {
      question: "Why might you need oxygen on a plane even if you don't use it at home?",
      options: [{ text: "There is less oxygen in the air at high altitudes", right: true }, { text: "Planes are too warm" }, { text: "Airlines give it to everyone" }],
      why: "You may not normally use oxygen, but you may need it while flying because there is less oxygen in the air at high altitudes.",
    },
  },
  {
    id: "pf-support",
    kicker: "Support",
    question: "Where can I find support, and how do I plan ahead?",
    hook: "You do not have to manage alone. Specialist teams, charities, support groups and palliative care can all help, from diagnosis onwards.",
    short: "Living with pulmonary fibrosis may mean you feel worried, anxious, low or overwhelmed at times. Your specialist team, charities such as Action for Pulmonary Fibrosis and the Pulmonary Fibrosis Trust, and support groups can help. Palliative care is not just end-of-life care, and planning ahead lets people know your wishes.",
    sections: [
      {
        heading: "Your feelings matter",
        paragraphs: [
          "Living with pulmonary fibrosis may mean you feel worried, anxious, low or overwhelmed at times, particularly when you're newly diagnosed or if your symptoms or circumstances change.",
          "If anxiety, low mood or other difficult feelings are affecting your everyday life, talk to your GP or specialist team. They can discuss the support and treatments available, which may include talking therapies.",
        ],
      },
      {
        heading: "People who can help",
        paragraphs: [
          "You may find it helpful to get support from other people with idiopathic pulmonary fibrosis. The charities Action for Pulmonary Fibrosis and the Pulmonary Fibrosis Trust provide a range of support and information.",
          "Action for Pulmonary Fibrosis has a support line and a telephone befriending service. You can call the Asthma + Lung UK helpline on 0300 222 5800 to talk to one of its respiratory nurse specialists.",
          "Take someone with you to your appointments if you can. It can be hard to remember everything that's said.",
        ],
      },
      {
        heading: "Palliative care",
        paragraphs: [
          "Supportive or palliative care can help you and your family, friends and carers from diagnosis onwards. Palliative care is not just end-of-life care.",
          "It focuses on helping you live as well as possible, with relief for symptoms, emotional support, and decisions about your care and treatment.",
        ],
      },
      {
        heading: "Planning ahead",
        paragraphs: [
          "Your specialist team can talk to you about any worries and fears you may have, such as how to manage worsening symptoms. They can also talk about future planning and life expectancy.",
          "Planning ahead is sometimes called advance care planning. It involves thinking and talking about your wishes for how you're cared for in the final months of your life. You can review your plan regularly and make changes to it if you want to.",
          "An advance statement sets down your preferences, wishes, beliefs and values regarding your future care. A lasting power of attorney lets the people you choose make decisions about your care if you're no longer able to do so yourself.",
        ],
      },
    ],
    helps: [
      "Talk to your GP or specialist team if difficult feelings are affecting your everyday life.",
      "Connect with other people living with pulmonary fibrosis, or ask about local support groups.",
      "Call the Asthma + Lung UK helpline on 0300 222 5800.",
      "Take someone with you to your appointments if you can.",
      "Ask about being referred to palliative care to help manage difficult symptoms and for emotional and practical support.",
      "Start the conversation about your wishes with your partner, family, carers and health professionals.",
    ],
    tryThisWeek: [
      "Tell your team how you're feeling.",
      "Ask about a local support group.",
      "Start a conversation about your wishes.",
    ],
    ask: "Can I be referred to a specialist nurse, support services or palliative care?",
    interactive: {
      kind: "scenarios",
      title: "Where to turn",
      scenarios: [
        {
          id: "low",
          situation: "You've felt low and anxious for weeks, and it's affecting daily life.",
          options: [{ text: "Talk to your GP or specialist team", best: true }, { text: "Keep it to yourself" }],
          why: "If anxiety, low mood or other difficult feelings are affecting your everyday life, talk to your GP or specialist team.",
        },
        {
          id: "others",
          situation: "You'd like to talk to people who understand what it's like.",
          options: [{ text: "Ask about local support groups", best: true }, { text: "Wait until you feel better" }],
          why: "Connect with other people living with pulmonary fibrosis. Ask your specialist team about local wellbeing groups, support groups or other services in your area.",
        },
        {
          id: "palliative",
          situation: "Palliative care is mentioned, and you worry it means the end.",
          options: [{ text: "Ask what palliative care could offer", best: true }, { text: "Turn it down straight away" }],
          why: "Palliative care is not just end-of-life care. You can be referred to palliative care to help manage difficult symptoms and for emotional and practical support.",
        },
        {
          id: "appointments",
          situation: "You often forget what was said at your appointments.",
          options: [{ text: "Take someone with you", best: true }, { text: "Stop going to reviews" }],
          why: "Take someone with you to your appointments if you can. It can be hard to remember everything that's said.",
        },
      ],
    },
    sources: [ALUK_LIVING, NHS_IPF, ALUK_WHAT, ALUK_TREATMENT, ALUK_DIAGNOSIS, NHS_PLAN_AHEAD, NHS_ADVANCE_STATEMENT, NHS_EOL],
    quiz: {
      question: "Is palliative care only for the end of life?",
      options: [{ text: "No, it can help from diagnosis onwards", right: true }, { text: "Yes, only for the last few days" }, { text: "Only in hospital" }],
      why: "Supportive or palliative care can help you and your family, friends and carers from diagnosis onwards. Palliative care is not just end-of-life care.",
    },
  },
];
