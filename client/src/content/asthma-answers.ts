import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Asthma page's pieces (content/library-conditions/heart.ts `learnId`).
// Every sentence was written from wording checked on 20 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS and from
// Asthma + Lung UK, the UK lung charity, and is credited to them. General information only; it never
// replaces what a person's own team tells them.

const aluk = (label: string, path: string): LearnSource => ({ label: `Asthma + Lung UK: ${label}`, url: `https://www.asthmaandlung.org.uk/${path}` });

const NHS_ASTHMA: LearnSource = { label: "NHS: Asthma", url: "https://www.nhs.uk/conditions/asthma/" };
const ALUK_WHAT = aluk("What is asthma?", "conditions/asthma/what-asthma");
const ALUK_TRIGGERS = aluk("What are asthma triggers?", "conditions/asthma/asthma-triggers/understanding-asthma-triggers");
const ALUK_TYPES = aluk("Types of asthma", "conditions/asthma/types-asthma");
const ALUK_OLDER = aluk("Asthma when you're older", "conditions/asthma/manage/asthma-older");
const ALUK_DIAGNOSING = aluk("Diagnosing asthma", "conditions/asthma/diagnosing-asthma");
const ALUK_PEAK = aluk("Peak flow test", "symptoms-tests-treatments/tests/peak-flow");
const ALUK_SPIRO = aluk("Spirometry and bronchodilator reversibility test", "symptoms-tests-treatments/tests/spirometry");
const ALUK_FENO = aluk("FeNO test", "symptoms-tests-treatments/tests/feno-test");
const ALUK_TREAT = aluk("How is asthma treated?", "conditions/asthma/treatments/how");
const ALUK_PREVENTER = aluk("Steroid preventer inhalers", "symptoms-tests-treatments/treatments/preventer-inhalers");
const ALUK_RELIEVER = aluk("Reliever inhalers", "symptoms-tests-treatments/treatments/reliever-inhalers");
const ALUK_SPACERS = aluk("Spacers", "symptoms-tests-treatments/treatments/spacers");
const ALUK_ACTION_PLAN = aluk("Your asthma action plan", "conditions/asthma/manage/your-asthma-action-plan");
const ALUK_ATTACKS = aluk("Asthma attacks", "conditions/asthma/asthma-attacks");
const ALUK_REVIEW = aluk("Your asthma review", "conditions/asthma/manage/asthma-review");
const ALUK_EXERCISE = aluk("Exercise, physical activity and asthma", "conditions/asthma/asthma-triggers/when-exercise-triggers-your-asthma");
const ALUK_ACTIVE = aluk("Physical activity and your lungs", "living-with/keeping-active/physical-activity");
const ALUK_WARM_UP = aluk("Warm up", "living-with/keeping-active/keep-active-programme/warm");
const ALUK_HOME = aluk("Air pollution and allergies at home", "living-with/indoor-air-pollution/home");
const ALUK_PETS = aluk("Pets and asthma", "conditions/asthma/asthma-triggers/pets-asthma");
const ALUK_CIGARETTES = aluk("Cigarettes and asthma", "conditions/asthma/asthma-triggers/cigarettes-asthma");
const ALUK_VAPING = aluk("Vaping and e-cigarettes", "living-with/stop-smoking/vaping");
const ALUK_QUIT = aluk("How to stop smoking", "living-with/stop-smoking/quit");
const ALUK_HAYFEVER_WHAT = aluk("What is hay fever?", "conditions/hay-fever-seasonal-allergic-rhinitis/what-is-hay-fever");
const ALUK_HAYFEVER_TREAT = aluk("Hay fever treatments", "conditions/hay-fever-seasonal-allergic-rhinitis/hay-fever-treatments");

export const asthmaAnswers: LearnArticle[] = [
  {
    id: "ast-what-it-is",
    kicker: "Understanding",
    question: "What does asthma do in the airways?",
    hook: "Sensitive airways tighten, swell and fill with mucus when they meet a trigger. A preventer calms the swelling; a reliever opens the airways.",
    short: "Asthma is a long-term condition in which the airways are more sensitive. When they meet a trigger, the muscles around them tighten, the airways narrow and become inflamed, and some people make sticky mucus. A reliever opens the airways but cannot treat the inflammation; a preventer, taken every day, keeps it down.",
    sections: [
      {
        heading: "Sensitive airways",
        paragraphs: [
          "Asthma is a long-term condition that affects the airways, the tubes that carry air in and out of the lungs.",
          "In healthy airways the muscles are relaxed and the airway is open. In asthma, the airways are more sensitive.",
        ],
      },
      {
        heading: "Three changes",
        paragraphs: [
          "When you meet a trigger, the muscles around the airways tighten, and the airways narrow and become swollen and inflamed.",
          "Some people also make sticky mucus or phlegm, which narrows the airways even more. This causes a tight chest, wheezing, coughing and breathlessness.",
        ],
      },
      {
        heading: "Reliever and preventer",
        paragraphs: [
          "A reliever, usually blue, opens the airways. But it cannot treat the inflammation in your airways.",
          "A preventer, taken every day as prescribed, keeps inflammation down. So the airways are less likely to react to triggers.",
        ],
      },
      {
        heading: "Common, and controllable",
        paragraphs: [
          "About 8 in every 100 people in the UK have asthma.",
          "There is no cure, but most people can control their symptoms well. Some go weeks or months without symptoms.",
        ],
      },
      {
        heading: "Taking it seriously",
        paragraphs: [
          "Asthma attacks can be life-threatening. Taking your medicines as prescribed, even when you feel well, and using an asthma action plan lower the risk.",
        ],
      },
    ],
    helps: [
      "Take your preventer every day as prescribed, even when you feel well.",
      "Always carry your reliever inhaler.",
      "Use an asthma action plan.",
      "Learn what your triggers are.",
    ],
    tryThisWeek: [
      "Take your preventer every day.",
      "Keep your reliever with you.",
      "Find your action plan.",
    ],
    ask: "Is my asthma well controlled, and is my preventer the right one for me?",
    sources: [ALUK_WHAT, NHS_ASTHMA, ALUK_TREAT],
    interactive: {
      kind: "flip-cards",
      title: "Inside an airway with asthma",
      intro: "Turn each card to see what happens, and what each inhaler does.",
      cards: [
        { id: "muscle", front: "Muscles tighten", when: "When you meet a trigger", back: "The muscles around the airways tighten, and the airways narrow." },
        { id: "swell", front: "The lining swells", when: "When you meet a trigger", back: "The airways become swollen and inflamed." },
        { id: "mucus", front: "Sticky mucus", when: "In some people", back: "Sticky mucus or phlegm narrows the airways even more." },
        { id: "reliever", front: "Reliever", when: "When you have symptoms", back: "Opens the airways. But it cannot treat the inflammation in your airways." },
        { id: "preventer", front: "Preventer", when: "Every day, as prescribed", back: "Keeps inflammation down, so the airways are less likely to react to triggers." },
      ],
    },
    quiz: {
      question: "What can a blue reliever not do?",
      options: [{ text: "Treat the inflammation in your airways", right: true }, { text: "Open the airways" }, { text: "Ease a tight chest" }],
      why: "A reliever, usually blue, opens the airways. But it cannot treat the inflammation in your airways.",
    },
  },
  {
    id: "ast-triggers",
    kicker: "Triggers",
    question: "What sets my asthma off?",
    hook: "Colds, weather, pollen, exercise, smoke, pets and strong feelings are common triggers. Yours may be different.",
    short: "A trigger is anything that irritates your airways and makes asthma symptoms worse. Common ones include colds and flu, hot or cold weather, pollen, exercise, smoke, dust mites, pets and strong emotions. Knowing yours helps you avoid them, and a steroid preventer keeps inflammation down so you are less likely to react.",
    sections: [
      {
        heading: "What a trigger is",
        paragraphs: [
          "An asthma trigger is anything that irritates your airways and makes your asthma symptoms worse. Triggers can also cause asthma attacks.",
          "Triggers vary between people. You may have one trigger or lots of triggers.",
        ],
      },
      {
        heading: "Common triggers",
        paragraphs: [
          "Common triggers include colds, flu and chest infections, hot or cold weather, thunderstorms, hay fever and pollen, and smoking and vaping.",
          "Others include damp and mould, dust mites, air pollution, exercise, pets, and strong emotions and stress.",
          "8 in 10 people with asthma told the charity that colds and flu triggered their asthma.",
        ],
      },
      {
        heading: "Triggers can change",
        paragraphs: [
          "Some triggers matter more at certain times of year, such as pollen or colds and flu.",
          "After long-term uncontrolled asthma, airways may become more sensitive, so reactions can be quicker and stronger.",
        ],
      },
      {
        heading: "Finding yours",
        paragraphs: [
          "A symptom diary and peak flow scores can help you spot patterns.",
          "Some triggers, such as pollen, are not visible, and several can act at once. A GP or nurse can help if you are struggling to identify them.",
        ],
      },
      {
        heading: "Once you know",
        paragraphs: [
          "Ask your GP or nurse to add your triggers to your asthma action plan. Avoid them where possible, and limit time around those you cannot avoid.",
          "A steroid preventer helps keep inflammation down in your airways.",
        ],
      },
    ],
    helps: [
      "Keep a symptom diary to spot patterns.",
      "Ask your GP or nurse to add your triggers to your asthma action plan.",
      "Avoid triggers where possible, and limit time around those you cannot avoid.",
      "Always keep your reliever inhaler with you.",
      "Check with a pharmacist or doctor before taking other medicines, as aspirin, ibuprofen and beta blockers can trigger symptoms in some people.",
    ],
    tryThisWeek: [
      "Start a symptom diary.",
      "Add your triggers to your plan.",
      "Check new medicines with a pharmacist.",
    ],
    ask: "What are my triggers, and can any be tested for?",
    sources: [ALUK_TRIGGERS, NHS_ASTHMA, ALUK_WHAT],
    interactive: {
      kind: "risk-check",
      title: "Which triggers are yours?",
      intro: "Tick any that set off your asthma. Triggers vary between people.",
      items: [
        { id: "colds", label: "Colds and flu", note: "8 in 10 people with asthma say colds and flu trigger it. Vaccinations such as the flu vaccine can help.", changeable: true },
        { id: "pollen", label: "Pollen and hay fever", note: "Pollen matters more at certain times of year, and it is not visible.", changeable: false },
        { id: "weather", label: "Hot or cold weather", note: "Weather, including thunderstorms, can be a trigger. Always keep your reliever with you.", changeable: false },
        { id: "smoke", label: "Smoke", note: "Do not smoke, and get help to quit if you need it.", changeable: true },
        { id: "home", label: "Damp, mould or dust mites", note: "Mould or dust mites at home can affect your triggers. Avoid triggers where possible.", changeable: true },
        { id: "exercise", label: "Exercise", note: "Keep exercising regularly. Get advice if exercise triggers your symptoms.", changeable: true },
        { id: "emotions", label: "Strong emotions or stress", note: "Strong emotions and stress are a common trigger.", changeable: false },
        { id: "medicines", label: "Some other medicines", note: "Aspirin, ibuprofen and beta blockers can trigger symptoms in some people. Check with a pharmacist or doctor.", changeable: true },
      ],
    },
    quiz: {
      question: "What did 8 in 10 people with asthma say triggered it?",
      options: [{ text: "Colds and flu", right: true }, { text: "Food" }, { text: "Sleep" }],
      why: "8 in 10 people with asthma told the charity that colds and flu triggered their asthma.",
    },
  },
  {
    id: "ast-tests",
    kicker: "Tests",
    question: "What are peak flow, spirometry and FeNO?",
    hook: "Three breathing tests: how fast you can blow out, how much you can blow out, and how inflamed your airways are.",
    short: "Peak flow measures how fast you can blow air out of your lungs. Spirometry measures how much air you can blow out in one forced breath. FeNO measures the amount of inflammation in your airways. Not every test is available at every surgery, and a diagnosis can take time.",
    sections: [
      {
        heading: "Why tests",
        paragraphs: [
          "Your GP or nurse will ask questions, listen to your chest and test how your lungs are working.",
          "Asthma varies between people and over time, so a confirmed diagnosis may not come at the first appointment.",
        ],
      },
      {
        heading: "Peak flow",
        paragraphs: [
          "Peak flow measures how quickly you can blow air out of your lungs, using a small hand-held meter.",
          "You may be asked to keep a peak flow diary for two or more weeks. Blow three times, and record the highest score.",
          "A score below your personal best may be an early sign of an asthma attack or flare-up.",
        ],
      },
      {
        heading: "Spirometry",
        paragraphs: [
          "Spirometry measures how much air you can blow out in one forced breath.",
          "If it shows narrowed airways, you may repeat it 15 to 20 minutes after using a reliever with a spacer. If your airways open well, asthma is more likely than COPD.",
          "If your results are normal but you have had asthma-like symptoms, you may still have asthma, because asthma is a variable condition.",
        ],
      },
      {
        heading: "FeNO",
        paragraphs: [
          "FeNO measures nitric oxide in your breath. A high level can show that your airways are inflamed.",
          "For at least one hour before, avoid heavy exercise, smoking, hot drinks, caffeine and alcohol. Avoid green leafy vegetables and beetroot for at least three hours before.",
          "Breathing into the mouthpiece takes five to ten seconds. In adults, asthma is diagnosed if your history suggests it and the result is 50 ppb or more.",
        ],
      },
      {
        heading: "Blood test",
        paragraphs: [
          "A blood test can measure eosinophils, a type of white blood cell.",
        ],
      },
    ],
    helps: [
      "Keep a symptom diary, and note when symptoms are worse and what seems to set them off.",
      "Follow the letter or text you are sent before a FeNO test.",
      "Bring your inhalers, and your spacer if you use one, to a spirometry test.",
      "Ask your GP to recheck your best peak flow if it was last checked years ago.",
      "Remember your symptoms and how you feel are just as important as your peak flow score.",
    ],
    tryThisWeek: [
      "Start a symptom diary.",
      "Read your test instructions.",
      "Pack your inhalers for the test.",
    ],
    ask: "Which tests have I had, and what did they show?",
    sources: [ALUK_DIAGNOSING, ALUK_PEAK, ALUK_SPIRO, ALUK_FENO, NHS_ASTHMA],
    interactive: {
      kind: "flip-cards",
      title: "Four asthma tests",
      intro: "Turn each card to see what the test measures.",
      cards: [
        { id: "peak", front: "Peak flow", when: "To diagnose and to monitor", back: "How quickly you can blow air out of your lungs, with a small hand-held meter." },
        { id: "spiro", front: "Spirometry", when: "To diagnose", back: "How much air you can blow out in one forced breath. It may be repeated after a reliever." },
        { id: "feno", front: "FeNO", when: "To diagnose, and at reviews", back: "Nitric oxide in your breath. A high level can show that your airways are inflamed." },
        { id: "blood", front: "Blood test", when: "To diagnose", back: "Measures eosinophils, a type of white blood cell." },
      ],
    },
    quiz: {
      question: "What does a FeNO test measure?",
      options: [{ text: "Inflammation in your airways", right: true }, { text: "Your heart rhythm" }, { text: "How fast you walk" }],
      why: "FeNO measures nitric oxide in your breath. A high level can show that your airways are inflamed.",
    },
  },
  {
    id: "ast-adult-onset",
    kicker: "Understanding",
    question: "Can asthma start in adulthood?",
    hook: "Yes. It is more common in women, often around the menopause, and work, smoking and weight can play a part.",
    short: "Asthma first diagnosed in adulthood is called adult-onset or late-onset asthma. It is more common in women, often starting around the menopause, and causes include things at work, smoking, obesity and female sex hormones. It can be harder to diagnose and to control, so talk to your GP or nurse.",
    sections: [
      {
        heading: "Starting as an adult",
        paragraphs: [
          "Asthma often starts in childhood, but some people are first diagnosed as adults. This is called adult-onset or late-onset asthma.",
          "It is more common in women, and often starts around the menopause.",
        ],
      },
      {
        heading: "Causes",
        paragraphs: [
          "Causes include substances at work, smoking and second-hand smoke, obesity and female sex hormones.",
          "About 1 in 10 people who develop asthma as an adult have occupational asthma. Signs include symptoms that start in adulthood and improve on days away from work.",
        ],
      },
      {
        heading: "Harder to spot",
        paragraphs: [
          "It can be difficult to diagnose, because symptoms can differ in older people. It is sometimes mistaken for COPD, which can lead to the wrong treatment.",
          "It is possible to have asthma and COPD at the same time.",
        ],
      },
      {
        heading: "Harder to control",
        paragraphs: [
          "Late-onset asthma is often harder to control with the usual asthma medicines. Your GP may prescribe add-on treatments.",
        ],
      },
      {
        heading: "Asthma coming back",
        paragraphs: [
          "Childhood asthma can return later in life, after a long time without symptoms. It can be set off by illness, stress, substances at work, pollution, or hormonal changes such as the menopause.",
        ],
      },
    ],
    helps: [
      "See your GP if you feel more out of breath than normal on stairs or uphill.",
      "Tell your GP if your symptoms ease on days away from work.",
      "Speak to your GP or nurse if asthma symptoms come back in adulthood.",
      "Track your symptoms in a diary, notebook or on your phone, and bring it to appointments.",
      "Have a yearly asthma review.",
    ],
    tryThisWeek: [
      "Note if symptoms ease away from work.",
      "Start tracking your symptoms.",
      "Book your yearly review.",
    ],
    ask: "Could my asthma be linked to my work, or to the menopause?",
    sources: [ALUK_TYPES, ALUK_OLDER, ALUK_WHAT],
    interactive: {
      kind: "risk-check",
      title: "What can bring asthma on in adults?",
      intro: "Tick any that apply to you.",
      items: [
        { id: "work", label: "Substances at work", note: "About 1 in 10 people who develop asthma as adults have occupational asthma. Talk to your GP or nurse if you suspect it.", changeable: false },
        { id: "smoking", label: "Smoking or second-hand smoke", note: "If you smoke, quitting is the best thing you can do, because smoking can make asthma worse.", changeable: true },
        { id: "weight", label: "Obesity", note: "Obesity raises the risk of developing asthma, and of more severe asthma.", changeable: false },
        { id: "hormones", label: "Female sex hormones or menopause", note: "Adult-onset asthma is more common in women, and often starts around the menopause.", changeable: false },
        { id: "child", label: "Asthma as a child", note: "Childhood asthma can return later in life, after a long time without symptoms.", changeable: false },
      ],
    },
    quiz: {
      question: "When is adult-onset asthma more common?",
      options: [{ text: "In women, often around the menopause", right: true }, { text: "Only in teenagers" }, { text: "Only in people who run" }],
      why: "It is more common in women, and often starts around the menopause.",
    },
  },
  {
    id: "ast-inhalers",
    kicker: "Treatment",
    question: "How do I use my preventer and reliever properly?",
    hook: "Everyone with asthma needs steroid preventer medicine. A blue reliever on its own is not enough.",
    short: "Everyone with asthma needs an inhaler with steroid preventer medicine. You may have an AIR or MART combination inhaler, or a daily preventer plus a blue reliever; a blue reliever should not be used on its own. Good technique gets the medicine where it is needed, and a spacer should always be used with a pressurised inhaler.",
    sections: [
      {
        heading: "Preventers",
        paragraphs: [
          "A steroid preventer reduces inflammation and swelling in the airways, lowering the risk of symptoms and attacks.",
          "Use it every day as prescribed. A routine can help, such as taking it at the same time every morning and evening.",
        ],
      },
      {
        heading: "Relievers",
        paragraphs: [
          "A reliever quickly opens your airways and helps you breathe more easily. Always carry it.",
          "A blue reliever contains no steroid, so it cannot treat inflammation. If you use one, you also need a steroid preventer.",
        ],
      },
      {
        heading: "AIR and MART",
        paragraphs: [
          "AIR and MART inhalers contain a steroid preventer and formoterol, which can open the airways quickly. You do not need a separate blue reliever.",
          "With AIR, you use it only when you get symptoms. With MART, you use it every morning and evening, and also when you get symptoms.",
        ],
      },
      {
        heading: "Technique and spacers",
        paragraphs: [
          "Correct technique affects how much medicine reaches your airways. Your GP, nurse or pharmacist can check it.",
          "Always use a spacer if you have a pressurised metered dose inhaler. A whistling sound means you are breathing in too fast.",
        ],
      },
      {
        heading: "Side effects and warning signs",
        paragraphs: [
          "Steroid inhalers can cause a sore mouth, a hoarse voice or thrush. Rinsing your mouth with water after use lowers the risk.",
          "See your GP or nurse if you use a blue reliever three times a week or more, or use your AIR inhaler most days.",
        ],
      },
    ],
    helps: [
      "Ask your GP, nurse or pharmacist to check your inhaler technique.",
      "Always use a spacer with a pressurised metered dose inhaler.",
      "Rinse your mouth with water after using your preventer.",
      "Take your preventer at the same time every morning and evening.",
      "Never stop or cut down your medicines without speaking to your GP or nurse.",
      "Return empty, unwanted or out-of-date inhalers to a pharmacy.",
    ],
    tryThisWeek: [
      "Get your technique checked.",
      "Rinse after your preventer.",
      "Set a morning and evening routine.",
    ],
    ask: "How often is too often for my reliever?",
    sources: [ALUK_TREAT, ALUK_PREVENTER, ALUK_RELIEVER, ALUK_SPACERS, NHS_ASTHMA],
    interactive: {
      kind: "flip-cards",
      title: "Which inhaler does what?",
      intro: "Turn each card to see what it does.",
      cards: [
        { id: "preventer", front: "Steroid preventer", when: "Every day, as prescribed", back: "Reduces inflammation and swelling in the airways, lowering the risk of symptoms and attacks." },
        { id: "blue", front: "Blue reliever", when: "When you have symptoms", back: "Quickly opens the airways. It has no steroid, so you also need a preventer." },
        { id: "air", front: "AIR inhaler", when: "Only when you get symptoms", back: "A steroid preventer plus formoterol. You do not need a separate blue reliever." },
        { id: "mart", front: "MART inhaler", when: "Morning, evening and when needed", back: "A steroid preventer plus formoterol, used every day and also when you get symptoms." },
        { id: "spacer", front: "Spacer", when: "With a pressurised inhaler", back: "Helps the right amount of medicine reach your lungs. A whistling sound means you are breathing in too fast." },
      ],
    },
    quiz: {
      question: "Why is a blue reliever not enough on its own?",
      options: [{ text: "It cannot treat inflammation", right: true }, { text: "It works too slowly" }, { text: "It is only for children" }],
      why: "A blue reliever contains no steroid, so it cannot treat inflammation. If you use one, you also need a steroid preventer.",
    },
  },
  {
    id: "ast-action-plan",
    kicker: "Treatment",
    question: "What goes in an asthma action plan?",
    hook: "Your daily medicines, what to do when symptoms get worse, and what to do in an attack, all in one place.",
    short: "An asthma action plan tells you which medicines to take each day, what to do when symptoms get worse, and what to do in an asthma attack. Your GP or nurse can help you fill it in. People who use one are less likely to need hospital treatment for an asthma attack.",
    sections: [
      {
        heading: "What it says",
        paragraphs: [
          "Your plan tells you which daily medicines to take, what to do when your symptoms get worse, and what to do in an asthma attack.",
          "There are different plans for MART, AIR, or separate preventer and reliever inhalers.",
        ],
      },
      {
        heading: "Why it helps",
        paragraphs: [
          "Using a plan makes you less likely to need hospital treatment for an asthma attack.",
        ],
      },
      {
        heading: "Getting one",
        paragraphs: [
          "Download a free plan that matches your treatment, and take it to your next asthma appointment. Your GP or nurse can help you complete it and talk it through.",
          "You can ask for a printed copy, or have one sent by email, text or WhatsApp.",
        ],
      },
      {
        heading: "Keeping it handy",
        paragraphs: [
          "Save a copy on your phone or computer, or take a photo of it. Keep paper copies with your medicines and inhalers.",
          "Give copies to friends and family, so they know how to help in an attack.",
        ],
      },
      {
        heading: "Keeping it up to date",
        paragraphs: [
          "Bring it to every asthma appointment, so your GP or nurse can keep it current. Update it when your medicines change.",
        ],
      },
    ],
    helps: [
      "Ask your GP or nurse to help you fill in a plan that matches your treatment.",
      "Keep a photo of it on your phone.",
      "Give copies to family and friends.",
      "Take it to every asthma appointment.",
      "Ask for your triggers to be added to it.",
    ],
    tryThisWeek: [
      "Photograph your plan.",
      "Share a copy with family.",
      "Take it to your next appointment.",
    ],
    ask: "Can we write or update my action plan today?",
    sources: [ALUK_ACTION_PLAN, NHS_ASTHMA, ALUK_TREAT, ALUK_TRIGGERS],
    interactive: {
      kind: "scenarios",
      title: "Your plan: what helps most?",
      scenarios: [
        {
          id: "friend",
          situation: "A friend asks how they could help if you had an attack.",
          options: [{ text: "Give them a copy of your plan", best: true }, { text: "Tell them not to worry" }],
          why: "Give copies to friends and family, so they know how to help in an attack.",
        },
        {
          id: "change",
          situation: "Your GP changes your inhaler.",
          options: [{ text: "Update your action plan", best: true }, { text: "Keep using the old plan" }],
          why: "Update your asthma action plan with any medicine changes.",
        },
        {
          id: "appointment",
          situation: "You have an asthma appointment next week.",
          options: [{ text: "Take your plan with you", best: true }, { text: "Leave it at home" }],
          why: "Bring it to every asthma appointment, so your GP or nurse can keep it current.",
        },
        {
          id: "which",
          situation: "You are not sure which plan matches your inhaler.",
          options: [{ text: "Ask a healthcare professional", best: true }, { text: "Pick any plan" }],
          why: "There are different plans for MART, AIR, or separate preventer and reliever inhalers. Ask if you are unsure.",
        },
      ],
    },
    quiz: {
      question: "Who is it worth giving a copy of your plan to?",
      options: [{ text: "Family and friends", right: true }, { text: "Nobody at all" }, { text: "Only your dentist" }],
      why: "Give copies to friends and family, so they know how to help in an attack.",
    },
  },
  {
    id: "ast-attack",
    kicker: "Emergency",
    question: "What do I do in an asthma attack, step by step?",
    hook: "Sit up, stay calm, take your reliever puffs, and call 999 if you get worse or do not improve.",
    short: "Sit up and try to stay calm. With a blue reliever, take one puff every 30 to 60 seconds, up to 10 puffs; with an AIR or MART inhaler, take one puff every 1 to 3 minutes, up to six puffs. Call 999 if you feel worse at any point, or do not improve.",
    sections: [
      {
        heading: "Signs of an attack",
        paragraphs: [
          "Your symptoms are quickly getting worse: cough, breathlessness, wheezing or a tight chest.",
          "Your reliever is not working as well as usual, or you need it more often. You may find it hard to walk or talk.",
          "You may not notice a wheeze, and your peak flow may be normal even when you have symptoms.",
        ],
      },
      {
        heading: "With a blue reliever",
        paragraphs: [
          "Sit up and try to keep calm. Take one puff every 30 to 60 seconds, up to 10 puffs.",
          "Call 999 if you feel worse at any point, or if you do not improve after 10 puffs.",
          "If the ambulance has not arrived after 10 minutes and you are not improving, repeat the puffs. If you are still no better, call 999 again straight away.",
        ],
      },
      {
        heading: "With an AIR or MART inhaler",
        paragraphs: [
          "Sit up and try to keep calm. Take one puff every 1 to 3 minutes, up to six puffs.",
          "Call 999 if you feel worse at any point, or do not improve after six puffs. If there is no ambulance after 10 minutes and you are not improving, repeat the puffs.",
        ],
      },
      {
        heading: "No inhaler",
        paragraphs: [
          "If you are struggling to breathe and do not have a reliever, call 999 straight away. Do not wait to see if you get better on your own.",
          "Do not drive yourself to A&E.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "Call your GP surgery for a follow-up appointment, even if you feel better.",
          "If you managed the attack yourself, ask for an urgent same-day appointment. If you were treated in hospital or by paramedics, you need a follow-up no later than two working days after.",
        ],
      },
    ],
    helps: [
      "Always carry your reliever inhaler.",
      "Follow your personal asthma action plan if it gives a different maximum dose.",
      "Use a spacer if you have one, and shake the inhaler between puffs.",
      "Call 999 if you feel worse at any point.",
      "See your GP after any attack, even if you feel better.",
    ],
    tryThisWeek: [
      "Check your reliever is with you.",
      "Read the attack steps in your plan.",
      "Book a check-up after any attack.",
    ],
    ask: "What should I do in an attack with my own inhaler?",
    sources: [ALUK_ATTACKS, NHS_ASTHMA],
    interactive: {
      kind: "timeline",
      title: "An attack, step by step",
      steps: [
        { id: "sit", when: "Straight away", title: "Sit up and keep calm", points: ["Sit up and try to keep calm.", "If you have no reliever, call 999 straight away."] },
        { id: "puffs", when: "Next", title: "Take your reliever", points: ["Blue reliever: one puff every 30 to 60 seconds, up to 10 puffs.", "AIR or MART: one puff every 1 to 3 minutes, up to six puffs."] },
        { id: "call", when: "Any time", title: "Call 999", points: ["If you feel worse at any point.", "If you do not improve after the maximum puffs."] },
        { id: "ten", when: "After 10 minutes", title: "Repeat if no ambulance", points: ["If it has not arrived and you are not improving, repeat the puffs.", "If you are still no better, call 999 again straight away."] },
        { id: "after", when: "Afterwards", title: "See your GP", points: ["Managed it yourself: ask for an urgent same-day appointment.", "Treated in hospital or by paramedics: follow-up within two working days."] },
      ],
    },
    quiz: {
      question: "With a blue reliever in an attack, how often do you take a puff?",
      options: [{ text: "Every 30 to 60 seconds, up to 10 puffs", right: true }, { text: "Once an hour" }, { text: "Two puffs, then wait until tomorrow" }],
      why: "Take one puff every 30 to 60 seconds, up to 10 puffs.",
    },
  },
  {
    id: "ast-reviews",
    kicker: "Check-ups",
    question: "What happens at the yearly asthma review, and why does it matter?",
    hook: "A check of your symptoms, medicines, technique and plan, worth having even when you feel well.",
    short: "An asthma review is a routine check-up with a GP, nurse or other healthcare professional, at least once a year. It covers your symptoms, medicines, inhaler technique and action plan. It is worth having even if you feel well, to check you are on the lowest dose that keeps you free of symptoms.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "An asthma review is a routine check-up with a GP, nurse or other healthcare professional, to see how your asthma is.",
          "Most people have one at least once a year. People with difficult or severe asthma may need one more often.",
        ],
      },
      {
        heading: "What is covered",
        paragraphs: [
          "Your symptoms, and whether they affect daily life or sleep. Your medicines, and how often you use them.",
          "Your inhaler technique, stopping smoking, exercise, and whether your action plan needs updating. It may include a FeNO test.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "A review may lower your risk of an asthma attack.",
          "It is worth having even if you feel well, to check you are on the lowest dose that keeps you free of symptoms. If you have had no symptoms for some time, you can ask about lowering your preventer dose.",
        ],
      },
      {
        heading: "Getting the most from it",
        paragraphs: [
          "Write down your questions beforehand, and keep a symptom diary.",
          "Bring your inhalers and spacer, so your technique can be checked. Reviews by phone or video are considered safe, but ask to be seen in person if you struggle with your technique.",
        ],
      },
      {
        heading: "Between reviews",
        paragraphs: [
          "You do not have to wait for your review to get help. See your GP or nurse if you use your blue reliever three times a week or more, or your AIR inhaler most days.",
        ],
      },
    ],
    helps: [
      "Book a review at least once a year, even if you feel well.",
      "Write down your questions beforehand.",
      "Bring your inhalers and spacer.",
      "Ask for your updated action plan by email if you want a digital copy.",
      "Ask whether there is a text or email reminder for your next review.",
    ],
    tryThisWeek: [
      "Book your yearly review.",
      "Write down your questions.",
      "Pack your inhalers and spacer.",
    ],
    ask: "Am I on the lowest dose that keeps me well?",
    sources: [ALUK_REVIEW, NHS_ASTHMA, ALUK_OLDER],
    interactive: {
      kind: "signs",
      title: "Things to raise at your review",
      intro: "Tick anything you want to talk about.",
      signs: [
        "Symptoms affecting daily life",
        "Symptoms keeping me awake",
        "Using my reliever more often",
        "More side effects than usual",
        "Checking my inhaler technique",
        "Lowering my preventer dose",
        "Hay fever season coming up",
        "Help to stop smoking",
      ],
      after: "Bring your inhalers, spacer and symptom diary, so your technique can be checked and your plan updated.",
    },
    quiz: {
      question: "Why have a review even when you feel well?",
      options: [{ text: "To check you are on the lowest dose that keeps you well", right: true }, { text: "There is no reason to" }, { text: "To stop all your medicines" }],
      why: "It is worth having even if you feel well, to check you are on the lowest dose that keeps you free of symptoms.",
    },
  },
  {
    id: "ast-exercise",
    kicker: "Staying active",
    question: "Can I exercise with asthma?",
    hook: "Yes. If exercise sets off your asthma, that is usually a sign it could be better controlled.",
    short: "It is normal to breathe faster or more deeply during exercise. For most people, exercise that triggers asthma symptoms is a sign their asthma is not as well controlled as it could be. Using a preventer or MART inhaler every day, carrying your reliever and warming up can help you exercise safely.",
    sections: [
      {
        heading: "Normal to breathe harder",
        paragraphs: [
          "It is normal to breathe faster or more deeply during exercise.",
          "Coughing, wheezing or a tight chest suggest exercise may be a trigger for you, so see a GP or nurse.",
        ],
      },
      {
        heading: "A sign to review",
        paragraphs: [
          "For most people, exercise triggering asthma is a sign it is not as well controlled as it could be.",
          "Wheezing or breathlessness during exercise may also be due to low fitness or being overweight.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "During exercise you breathe through your mouth, so the air is not warmed or moistened. Colder, drier air can narrow the airways in some people with asthma.",
          "Pollen, pollution, dust in gyms, chlorine in pools and changes in the weather can also set off symptoms.",
        ],
      },
      {
        heading: "Exercising safely",
        paragraphs: [
          "Use a preventer or MART inhaler every day as prescribed. Preventers reduce inflammation, so you are less likely to react to cold, dry air or pollen during exercise.",
          "Always carry your reliever inhaler. Warming up before exercise reduces the risk of injury or sudden breathlessness.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "A GP or nurse can review your medicines, check your inhaler technique and update your action plan. If only exercise triggers your symptoms, they may prescribe an add-on treatment.",
          "Call 999 if your breathing does not return to normal after exercise.",
        ],
      },
    ],
    helps: [
      "Use your preventer or MART inhaler every day as prescribed.",
      "Always carry your reliever inhaler.",
      "Warm up before you exercise.",
      "Keep a symptom calendar to see whether pollution, pollen or cold weather is the real trigger.",
      "See a GP or nurse if exercise makes your symptoms worse or you need extra reliever doses.",
    ],
    tryThisWeek: [
      "Take your preventer every day.",
      "Warm up before you exercise.",
      "Note when symptoms happen.",
    ],
    ask: "Why does exercise set off my asthma, and is my treatment right?",
    sources: [ALUK_EXERCISE, ALUK_ACTIVE, ALUK_WARM_UP, NHS_ASTHMA, ALUK_TYPES],
    interactive: {
      kind: "scenarios",
      title: "Exercising with asthma: what helps most?",
      scenarios: [
        {
          id: "run",
          situation: "You cough and wheeze every time you go for a run.",
          options: [{ text: "See your GP or nurse for a review", best: true }, { text: "Stop exercising for good" }],
          why: "For most people, exercise triggering asthma is a sign it is not as well controlled as it could be.",
        },
        {
          id: "cold",
          situation: "It is a cold, dry day and you plan to exercise outside.",
          options: [{ text: "Take your preventer as usual, and carry your reliever", best: true }, { text: "Leave your reliever at home" }],
          why: "Preventers reduce inflammation, so you are less likely to react to cold, dry air. Always carry your reliever inhaler.",
        },
        {
          id: "start",
          situation: "You are about to start a workout.",
          options: [{ text: "Warm up first", best: true }, { text: "Go straight to full effort" }],
          why: "Warming up before exercise reduces the risk of injury or sudden breathlessness.",
        },
        {
          id: "after",
          situation: "After exercise, your breathing does not return to normal.",
          options: [{ text: "Call 999", best: true }, { text: "Wait it out at home" }],
          why: "Call 999 if your breathing does not return to normal after exercise.",
        },
      ],
    },
    quiz: {
      question: "What does exercise triggering asthma usually suggest?",
      options: [{ text: "Asthma is not as well controlled as it could be", right: true }, { text: "You should never exercise" }, { text: "Your inhaler is empty" }],
      why: "For most people, exercise triggering asthma is a sign it is not as well controlled as it could be.",
    },
  },
  {
    id: "ast-home",
    kicker: "At home",
    question: "How do dust, damp and pets affect my asthma?",
    hook: "Dust mites, mould and pets are the most common indoor allergens. A few habits at home can cut them down.",
    short: "Dust mites, mould and pets are the most common indoor allergens. Deal with damp and mould as quickly as possible, keep rooms well aired, and wash bedding at 60°C to kill dust mites. Using your preventer regularly, as prescribed, is the most important way to lower your risk from pets.",
    sections: [
      {
        heading: "Damp and mould",
        paragraphs: [
          "Damp and mould can cause or worsen asthma, so deal with them as quickly as possible.",
          "Condensation is one of the main causes. Keeping rooms well aired helps prevent it. Renters can get advice from Citizens Advice and Shelter.",
        ],
      },
      {
        heading: "Dust mites",
        paragraphs: [
          "We all have dust mites in our homes. It is impossible to get rid of them completely, so the aim is to reduce them.",
          "Wash bedding and soft furnishings at 60°C, which kills dust mites. Vacuum weekly, and clean surfaces with a damp cloth at least once a week.",
          "Open windows regularly, use extractor fans in the bathroom and kitchen, and avoid drying washing indoors.",
        ],
      },
      {
        heading: "Pets",
        paragraphs: [
          "Pets with fur or feathers are more likely to trigger allergic asthma. No pet is totally hypoallergenic.",
          "Limit where your pet can go in the house, and wash your pet and the surfaces they touch regularly. A skin prick or blood test is the only way to confirm a pet allergy.",
        ],
      },
      {
        heading: "Smoke, sprays and cooking",
        paragraphs: [
          "If anyone in your home smokes, the best option is to quit. If they are not ready, they should always smoke outside.",
          "Aerosols, air fresheners and perfumes can make lung symptoms worse. Use an extractor fan when cooking, or open the windows.",
        ],
      },
      {
        heading: "Your preventer",
        paragraphs: [
          "The most important thing you can do to lower your risk is to use your preventer inhaler regularly, as prescribed.",
        ],
      },
    ],
    helps: [
      "Deal with damp and mould as quickly as possible.",
      "Wash bedding at 60°C.",
      "Vacuum weekly, ideally with a HEPA filter.",
      "Use extractor fans in the bathroom and kitchen.",
      "Limit where your pet can go in the house.",
      "Use your preventer inhaler regularly, as prescribed.",
    ],
    tryThisWeek: [
      "Wash your bedding at 60°C.",
      "Use the extractor fan when cooking.",
      "Limit where your pet can go.",
    ],
    ask: "Could something in my home be triggering my asthma?",
    sources: [ALUK_HOME, ALUK_PETS, ALUK_TRIGGERS],
    interactive: {
      kind: "risk-check",
      title: "What is in your home?",
      intro: "Tick any that are true of your home.",
      items: [
        { id: "damp", label: "Damp or mould", note: "Deal with it as quickly as possible. Keeping rooms well aired helps prevent condensation.", changeable: true },
        { id: "mites", label: "Dust mites in bedding and carpets", note: "Wash bedding at 60°C, vacuum weekly, and dust with a damp cloth at least once a week.", changeable: true },
        { id: "pet", label: "A pet with fur or feathers", note: "Limit where your pet can go, and wash your pet and the surfaces they touch regularly.", changeable: true },
        { id: "smoke", label: "Someone smokes indoors", note: "The best option is to quit. If not ready, always smoke outside.", changeable: true },
        { id: "gas", label: "A gas cooker", note: "Use an extractor fan when cooking, or open windows every time you cook.", changeable: true },
        { id: "wood", label: "A wood burner or open fire", note: "If possible, avoid using wood burners, especially if you have a lung condition.", changeable: true },
        { id: "sprays", label: "Aerosols, air fresheners or perfume", note: "These can cause allergic reactions and headaches, and can worsen lung symptoms.", changeable: false },
      ],
    },
    quiz: {
      question: "What washing temperature kills dust mites?",
      options: [{ text: "60°C", right: true }, { text: "20°C" }, { text: "Cold water" }],
      why: "Wash bedding and soft furnishings at 60°C, which kills dust mites.",
    },
  },
  {
    id: "ast-smoking-vaping",
    kicker: "Smoking",
    question: "How do smoking and vaping affect asthma?",
    hook: "Smoke irritates the airways and weakens your preventer. Quitting is the best thing you can do for your asthma.",
    short: "Smoke from your own or someone else's cigarette can irritate your airways and raise your risk of worse symptoms or an attack. Quitting is the best thing you can do for your asthma. Vapes are less harmful than smoking and can help people quit, but they are not risk free and can trigger symptoms in some people.",
    sections: [
      {
        heading: "Why smoke matters",
        paragraphs: [
          "Breathing in cigarette smoke, your own or someone else's, can irritate your airways, because cigarettes contain toxic chemicals.",
          "If smoke triggers your asthma, you are at risk of your symptoms getting worse or an asthma attack. Smoking also reduces how well steroid medicine works.",
        ],
      },
      {
        heading: "Second-hand smoke",
        paragraphs: [
          "Keep your home smoke-free. Smoke sticks to clothes and soft furnishings.",
          "Do not smoke in a car or any enclosed space. In England, Wales and Scotland it is illegal to smoke in a car with anyone under 18 in it.",
        ],
      },
      {
        heading: "Help to quit",
        paragraphs: [
          "Quitting is the best thing you can do for your asthma.",
          "You are 3 times more likely to stop with support from a local stop smoking service. Your healthcare professional should offer stop smoking support at every asthma review.",
        ],
      },
      {
        heading: "Vaping",
        paragraphs: [
          "Vapes are less harmful than smoking and can help people quit. But they are not risk free.",
          "Vaping can cause inflammation in the airways, which might cause harm over time. Some people with asthma say vaping or second-hand vapour triggers their symptoms.",
        ],
      },
      {
        heading: "If you vape to quit",
        paragraphs: [
          "The charity does not recommend vaping unless you are trying to stop smoking.",
          "If you have a lung condition, stop vaping eventually, but not before you are ready, as this could lead you to start smoking again.",
        ],
      },
    ],
    helps: [
      "Contact a local stop smoking service, or ask your GP to refer you.",
      "Keep your home and car smoke-free.",
      "Tell your GP or nurse if vaping or second-hand vapour triggers your symptoms.",
      "If you vape to quit, switch completely from smoking.",
    ],
    tryThisWeek: [
      "Contact a stop smoking service.",
      "Make your home smoke-free.",
      "Tell your GP if vapour triggers you.",
    ],
    ask: "What is the best way for me to stop smoking or vaping?",
    sources: [ALUK_CIGARETTES, ALUK_VAPING, ALUK_QUIT, ALUK_PREVENTER, NHS_ASTHMA],
    interactive: {
      kind: "scenarios",
      title: "Smoke and vapour: what helps most?",
      scenarios: [
        {
          id: "visitor",
          situation: "A visitor wants to smoke in your living room.",
          options: [{ text: "Ask them to smoke outside, away from the door", best: true }, { text: "Open a window and let them" }],
          why: "Avoid smoking indoors. Smoke sticks to clothes and soft furnishings. If people smoke outside, they should be far from the door.",
        },
        {
          id: "car",
          situation: "Someone offering you a lift wants to smoke in the car.",
          options: [{ text: "Ask them not to smoke in the car", best: true }, { text: "Open a window instead" }],
          why: "Smoke in a car is high-risk, and opening a window will not clear it enough.",
        },
        {
          id: "vape",
          situation: "You vape to stay off cigarettes, but you are not ready to stop vaping.",
          options: [{ text: "Stop vaping later, once you are ready", best: true }, { text: "Stop suddenly, even if you might smoke again" }],
          why: "If you have a lung condition, stop vaping eventually, but not before you are ready, as this could lead you to start smoking again.",
        },
        {
          id: "vapour",
          situation: "Other people's vapour seems to set off your symptoms.",
          options: [{ text: "Tell your GP or nurse", best: true }, { text: "Ignore it" }],
          why: "Some people with asthma say vaping or second-hand vapour triggers their symptoms, and should speak to their GP or nurse.",
        },
      ],
    },
    quiz: {
      question: "If you smoke, what is the best thing you can do for your asthma?",
      options: [{ text: "Quit smoking", right: true }, { text: "Smoke only at night" }, { text: "Smoke with a window open" }],
      why: "Quitting is the best thing you can do for your asthma.",
    },
  },
  {
    id: "ast-hay-fever",
    kicker: "Seasons",
    question: "How do I get through hay fever season with asthma?",
    hook: "Pollen can set off coughing and wheezing. Start hay fever treatment early and keep your reliever close.",
    short: "Hay fever is an allergy to pollen, and in people with asthma it can trigger coughing, wheezing, a tight chest and breathlessness. Having both can increase your risk of an asthma attack. Keep taking your preventer, carry your reliever, and start hay fever treatments before your season begins.",
    sections: [
      {
        heading: "Pollen and your lungs",
        paragraphs: [
          "Hay fever is an allergic reaction to pollen. It is usually worse between March and September.",
          "In people with asthma, it can trigger coughing, wheezing, a tight chest and breathlessness. Having hay fever and asthma can increase your risk of an asthma attack.",
        ],
      },
      {
        heading: "Start treatment early",
        paragraphs: [
          "If you know when your symptoms usually start, some antihistamines work best taken two to four weeks before.",
          "Steroid nasal sprays reduce swelling in your nose. Begin them one to two weeks before your symptoms usually start, for the best protection.",
        ],
      },
      {
        heading: "Your asthma medicines",
        paragraphs: [
          "Keep your reliever inhaler with you, and use it straight away if your symptoms get worse.",
          "If your symptoms only come at certain times of year, keep following your action plan and take your preventer as prescribed.",
        ],
      },
      {
        heading: "High pollen days",
        paragraphs: [
          "Check the daily pollen forecast on the Met Office website.",
          "Shower, wash your hair and change your clothes after being outside. Keep windows and doors shut as much as possible.",
          "Try to avoid drying clothes outside, cutting grass, and spending too much time outside on very high pollen days.",
        ],
      },
      {
        heading: "Thunderstorms",
        paragraphs: [
          "Thunderstorms can trigger asthma, especially if you have hay fever. Thunderstorm asthma is rare and does not affect everybody with asthma.",
        ],
      },
    ],
    helps: [
      "Check the daily pollen forecast.",
      "Start antihistamines or a steroid nasal spray before your season begins.",
      "Keep your reliever with you, and use it straight away if symptoms get worse.",
      "Keep taking your preventer as prescribed, even if your symptoms are seasonal.",
      "Ask about hay fever treatment at your asthma review, before your season starts.",
    ],
    tryThisWeek: [
      "Check the pollen forecast.",
      "Start hay fever treatment early.",
      "Keep your reliever with you.",
    ],
    ask: "When should I start my hay fever treatment, and should my asthma plan change in pollen season?",
    sources: [ALUK_HAYFEVER_WHAT, ALUK_HAYFEVER_TREAT, ALUK_TYPES, ALUK_REVIEW],
    interactive: {
      kind: "timeline",
      title: "Getting ready for pollen season",
      steps: [
        { id: "review", when: "Before the season", title: "Ask at your review", points: ["Ask about antihistamines and nasal sprays before your hay fever season starts."] },
        { id: "tablets", when: "2 to 4 weeks before", title: "Start some antihistamines", points: ["If you know when symptoms usually start, some types work best taken two to four weeks before."] },
        { id: "spray", when: "1 to 2 weeks before", title: "Start a steroid nasal spray", points: ["Begin one to two weeks before, for the best protection."] },
        { id: "season", when: "March to September", title: "Hay fever season", points: ["Check the daily pollen forecast.", "Keep your reliever with you, and use it straight away if symptoms get worse.", "Keep taking your preventer as prescribed."] },
        { id: "high", when: "High pollen days", title: "Keep pollen out", points: ["Shower, wash your hair and change clothes after being outside.", "Keep windows and doors shut as much as possible."] },
      ],
    },
    quiz: {
      question: "When do some antihistamines work best if started?",
      options: [{ text: "Two to four weeks before symptoms usually start", right: true }, { text: "Only after an asthma attack" }, { text: "In December" }],
      why: "If you know when your symptoms usually start, some antihistamines work best taken two to four weeks before.",
    },
  },
];
