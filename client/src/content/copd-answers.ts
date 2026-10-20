import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the COPD page's pieces (content/library-conditions/heart.ts `learnId`).
// Every sentence was written from wording checked on 20 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS and from
// Asthma + Lung UK, the UK lung charity, and is credited to them. General information only; it never
// replaces what a person's own team tells them.

const nhsCopd = (label: string, path: string): LearnSource => ({ label: `NHS: COPD, ${label}`, url: `https://www.nhs.uk/conditions/chronic-obstructive-pulmonary-disease-copd/${path}` });
const aluk = (label: string, path: string): LearnSource => ({ label: `Asthma + Lung UK: ${label}`, url: `https://www.asthmaandlung.org.uk/${path}` });

const NHS_COPD: LearnSource = { label: "NHS: Chronic obstructive pulmonary disease (COPD)", url: "https://www.nhs.uk/conditions/chronic-obstructive-pulmonary-disease-copd/" };
const NHS_COPD_SYMPTOMS = nhsCopd("symptoms", "symptoms/");
const NHS_COPD_CAUSES = nhsCopd("causes", "causes/");
const NHS_COPD_DIAGNOSIS = nhsCopd("diagnosis", "diagnosis/");
const NHS_COPD_TREATMENT = nhsCopd("treatment", "treatment/");
const NHS_COPD_LIVING = nhsCopd("living with", "living-with/");
const NHS_SPIROMETRY: LearnSource = { label: "NHS: Spirometry", url: "https://www.nhs.uk/tests-and-treatments/spirometry/" };
const NHS_FLU: LearnSource = { label: "NHS: Flu vaccine", url: "https://www.nhs.uk/vaccinations/flu-vaccine/" };
const NHS_PNEUMO: LearnSource = { label: "NHS: Pneumococcal vaccine", url: "https://www.nhs.uk/vaccinations/pneumococcal-vaccine/" };
const NHS_COVID: LearnSource = { label: "NHS: COVID-19 vaccine", url: "https://www.nhs.uk/vaccinations/covid-19-vaccine/" };
const NHS_QUIT: LearnSource = { label: "NHS Better Health: Quit smoking", url: "https://www.nhs.uk/better-health/quit-smoking/" };
const ALUK_COPD_WHAT = aluk("What is COPD?", "conditions/copd-chronic-obstructive-pulmonary-disease/what-chronic-obstructive-pulmonary-disease");
const ALUK_EMPHYSEMA = aluk("Emphysema", "conditions/copd-chronic-obstructive-pulmonary-disease/emphysema");
const ALUK_COPD_DIAG = aluk("How is COPD diagnosed?", "conditions/copd-chronic-obstructive-pulmonary-disease/how-copd-diagnosed");
const ALUK_SPIRO = aluk("Spirometry and bronchodilator reversibility test", "symptoms-tests-treatments/tests/spirometry");
const ALUK_COPD_FLARE = aluk("What is a COPD flare-up?", "conditions/copd-chronic-obstructive-pulmonary-disease/managing-copd-flare-ups");
const ALUK_COPD_TREAT = aluk("Treatments and medicines for COPD", "conditions/copd-chronic-obstructive-pulmonary-disease/what-are-treatments-copd");
const ALUK_PR = aluk("Pulmonary rehabilitation", "living-with/keeping-active/pulmonary-rehabilitation");
const ALUK_BREATHLESS_MANAGE = aluk("How can I manage my breathlessness?", "symptoms-tests-treatments/symptoms/breathlessness/how-can-i-manage-my-breathlessness");
const ALUK_BREATHLESS_LIVING = aluk("Living well with breathlessness", "symptoms-tests-treatments/symptoms/breathlessness/breathlessness/living-well-breathlessness");
const ALUK_TECHNIQUES = aluk("Techniques to help you manage your breathing", "living-with/keeping-active/keep-active-programme/managing-breathlessness");
const ALUK_ACTIVE = aluk("Physical activity and your lungs", "living-with/keeping-active/physical-activity");
const ALUK_OXYGEN_WHAT = aluk("What is home oxygen therapy?", "symptoms-tests-treatments/treatments/home-oxygen-therapy/what-is");
const ALUK_OXYGEN_LIFE = aluk("Living with home oxygen", "symptoms-tests-treatments/treatments/home-oxygen-therapy/life-with");
const ALUK_ANXIETY = aluk("Anxiety and your lung condition", "living-with/mental-health/anxiety");
const ALUK_DEPRESSION = aluk("Depression and your lung condition", "living-with/mental-health/depression");
const ALUK_QUIT = aluk("How to stop smoking", "living-with/stop-smoking/quit");
const ALUK_FLU = aluk("How to prevent flu", "conditions/flu/prevent");
const ALUK_INHALER_VIDEOS = aluk("How to use your inhaler", "living-with/inhaler-videos");
const ALUK_SPACERS = aluk("Spacers", "symptoms-tests-treatments/treatments/spacers");

export const copdAnswers: LearnArticle[] = [
  {
    id: "copd-what-it-is",
    kicker: "Understanding",
    question: "What does COPD do to the lungs?",
    hook: "Narrowed airways and damaged air sacs make it hard to breathe out quickly, so air gets trapped in the chest.",
    short: "COPD is a group of lung conditions, including emphysema and chronic bronchitis, in which the lungs become inflamed and damaged and the airways narrow. Narrowed airways make it harder to breathe out quickly, so air gets trapped in the chest. The damage cannot be reversed, but treatment can help slow it down.",
    sections: [
      {
        heading: "Narrowed airways",
        paragraphs: [
          "COPD is a lung condition where the lungs become inflamed and damaged, and the airways narrow.",
          "This makes it harder for air to move in and out of the lungs, so people become breathless.",
        ],
      },
      {
        heading: "Why breathing out is hard",
        paragraphs: [
          "Obstructive means your airways are narrowed. So it is harder to breathe out quickly, and air gets trapped in your chest.",
        ],
      },
      {
        heading: "The air sacs",
        paragraphs: [
          "Your lungs have millions of tiny air sacs. They fill with air when you breathe in and empty when you breathe out. Oxygen passes through their thin walls into the blood.",
          "In emphysema, the walls of the air sacs are damaged, so they break apart and merge, making holes in the lung. Damaged parts of the lung can become baggy and trap air.",
        ],
      },
      {
        heading: "Often a mix of two",
        paragraphs: [
          "COPD includes emphysema, which is damage to the air sacs, and chronic bronchitis, which is long-term inflammation of the airways. People often have a mix of both.",
        ],
      },
      {
        heading: "What causes it",
        paragraphs: [
          "Smoking is the main cause, and is thought to be responsible for around 9 in every 10 cases. Some cases come from long-term exposure to harmful fumes or dust at work.",
          "COPD cannot be cured or reversed. But treatment can help slow it down.",
        ],
      },
    ],
    helps: [
      "If you smoke, stopping is the most important thing you can do.",
      "See a GP about a lasting cough or breathlessness, particularly if you are over 35 and smoke or used to smoke.",
      "Ask about inhalers and medicines that help make breathing easier.",
      "Ask about pulmonary rehabilitation, a programme of exercise and education.",
    ],
    tryThisWeek: [
      "Take one step towards stopping smoking.",
      "Ask about inhalers that ease breathing.",
      "Ask about pulmonary rehab.",
    ],
    ask: "How much of my COPD is emphysema, and how much is narrowed airways?",
    sources: [NHS_COPD, ALUK_COPD_WHAT, ALUK_EMPHYSEMA, NHS_COPD_CAUSES],
    interactive: {
      kind: "risk-check",
      title: "What can lead to COPD?",
      intro: "Tick any that apply to you. Smoking is the main cause, but not the only one.",
      items: [
        { id: "smoking", label: "Smoking, now or in the past", note: "Smoking is the main cause. Stopping can help stop COPD from getting worse, at any stage.", changeable: true },
        { id: "work", label: "Dust or fumes at work", note: "Some workplace dusts and chemicals may damage the lungs. The risk is even higher if you also smoke.", changeable: false },
        { id: "family", label: "A close relative with COPD", note: "COPD can run in families, which suggests genes may affect how vulnerable you are.", changeable: false },
        { id: "aatd", label: "Alpha-1-antitrypsin deficiency", note: "A rare inherited condition. Without this protein, the lungs are more vulnerable to damage.", changeable: false },
        { id: "asthma", label: "Asthma, now or as a child", note: "You are more likely to develop COPD if you have asthma or had it as a child.", changeable: false },
        { id: "pollution", label: "Long-term air pollution", note: "Some research suggests it could increase the risk, but the link is not conclusive.", changeable: false },
      ],
    },
    quiz: {
      question: "Why does air get trapped in the chest in COPD?",
      options: [{ text: "Narrowed airways make it hard to breathe out quickly", right: true }, { text: "The lungs grow too big" }, { text: "The heart beats too slowly" }],
      why: "Your airways are narrowed. So it is harder to breathe out quickly, and air gets trapped in your chest.",
    },
  },
  {
    id: "copd-tests",
    kicker: "Tests",
    question: "What is spirometry, and what do the results mean?",
    hook: "A breathing test that measures how much air you can blow out, and how fast. It shows whether your airways are obstructed.",
    short: "Spirometry is a simple breathing test that measures how much air you can blow out and how quickly. You may breathe in a medicine that widens your airways first, and your results are compared with what is normal for someone like you. The results show whether your airways are obstructed.",
    sections: [
      {
        heading: "Two measurements",
        paragraphs: [
          "Spirometry measures how much air you can breathe out in one forced breath. It also measures the total amount of air you can breathe out of your lungs.",
        ],
      },
      {
        heading: "Before the test",
        paragraphs: [
          "You may be asked to breathe in a medicine called a bronchodilator first, which helps widen your airways.",
          "You may be asked not to smoke for 24 hours before, and to avoid a large meal for at least 2 hours before. You will be told whether to stop any medicines or inhalers.",
        ],
      },
      {
        heading: "During the test",
        paragraphs: [
          "You sit next to the machine with a soft clip on your nose. You breathe in fully, seal your lips around the mouthpiece, and breathe out as fast and hard as you can.",
          "The test is repeated a couple of times. Some people feel dizzy or faint for a few minutes afterwards, and some people cough.",
        ],
      },
      {
        heading: "What the results show",
        paragraphs: [
          "Your results are compared with what is expected for your age, height, weight, ethnicity and sex. This shows whether your airways are obstructed.",
          "An obstructive result can mean narrowed airways, as in COPD or asthma. Air cannot be breathed out as fast as it should.",
          "A specialist looks at the results first, so you will not get them straight away.",
        ],
      },
      {
        heading: "Other tests",
        paragraphs: [
          "Everyone with COPD should also have a chest X-ray, blood tests, their body mass index worked out, and a finger test of their oxygen level.",
        ],
      },
    ],
    helps: [
      "Follow any instructions about smoking, meals and medicines before the test.",
      "Put as much effort into each breath out as you can, to get an accurate result.",
      "Tell the person doing the test if you feel faint.",
      "Ask your healthcare professional to talk through what your results mean.",
    ],
    tryThisWeek: [
      "Check your test instructions.",
      "Tell staff if you feel faint.",
      "Ask what your results mean.",
    ],
    ask: "What did my spirometry show, and how does it compare with what is expected for me?",
    sources: [NHS_COPD_DIAGNOSIS, NHS_SPIROMETRY, ALUK_SPIRO, ALUK_COPD_DIAG],
    interactive: {
      kind: "flip-cards",
      title: "The tests for COPD",
      intro: "Turn each card to see what the test is for.",
      cards: [
        { id: "spirometry", front: "Spirometry", when: "If COPD is suspected", back: "Measures how much air you can blow out, and how quickly. It shows whether your airways are obstructed." },
        { id: "xray", front: "Chest X-ray", when: "For everyone with COPD", back: "Looks for lung problems that can cause symptoms like COPD, such as chest infections." },
        { id: "blood", front: "Blood tests", when: "For everyone with COPD", back: "Can find conditions with similar symptoms, such as anaemia, and sometimes alpha-1-antitrypsin deficiency." },
        { id: "oximetry", front: "Finger oxygen test", when: "For everyone with COPD", back: "A small device on your finger measures the oxygen in your blood." },
        { id: "peak", front: "Peak flow", when: "Sometimes, as a further test", back: "Can help rule out asthma." },
        { id: "feno", front: "FeNO", when: "Sometimes, as a further test", back: "A blowing test of airway inflammation. It is often raised in asthma, but usually not in COPD." },
        { id: "ct", front: "CT scan", when: "Sometimes, as a further test", back: "Shows the pattern of lung disease and any other lung problems." },
      ],
    },
    quiz: {
      question: "What does spirometry measure?",
      options: [{ text: "How much air you can blow out, and how fast", right: true }, { text: "Your heart rate" }, { text: "How well you sleep" }],
      why: "Spirometry measures how much air you can breathe out in one forced breath, and the total amount you can breathe out.",
    },
  },
  {
    id: "copd-flare-ups",
    kicker: "Flare-ups",
    question: "How do I spot a COPD flare-up early?",
    hook: "More breathless, more cough, more phlegm, or phlegm that changes colour. Your plan says what to do next.",
    short: "A flare-up, or exacerbation, is when COPD symptoms suddenly get worse: more breathless than usual, coughing more, more phlegm, or phlegm changing colour. Your self-management plan should say what to do. Flare-ups usually last seven to ten days, and most people fully recover within four to six weeks.",
    sections: [
      {
        heading: "What a flare-up is",
        paragraphs: [
          "A flare-up is when your COPD symptoms suddenly get worse. It is also called an exacerbation.",
          "Symptoms normally vary from day to day, but a sudden worsening may mean a flare-up. Many people have a few flare-ups a year, particularly during the winter.",
        ],
      },
      {
        heading: "Signs to spot",
        paragraphs: [
          "Common signs are being more breathless than usual, coughing more, bringing up more phlegm, and phlegm changing colour.",
          "Other signs include more wheezing, feeling very tired, finding it harder to be active, confusion and swollen ankles.",
        ],
      },
      {
        heading: "What to do",
        paragraphs: [
          "Your COPD self-management plan should include guidance on what to do if you think you are having a flare-up.",
          "Milder symptoms can be treated at home by following your plan. This usually means using a reliever inhaler and taking steroid tablets or antibiotics.",
        ],
      },
      {
        heading: "When it is an emergency",
        paragraphs: [
          "Call 999 or go to A&E if you are finding it very hard to breathe, such as gasping, choking or being unable to speak.",
          "Get emergency help too for a chest that feels tight or heavy, lips or skin turning very pale or blue, or sudden confusion.",
        ],
      },
      {
        heading: "Getting better",
        paragraphs: [
          "Flare-ups usually last seven to ten days, though full recovery can take longer. Most people fully recover within four to six weeks.",
          "Whether you were treated at home or in hospital, you should have a follow-up appointment with your GP once you feel better.",
        ],
      },
    ],
    helps: [
      "Use a COPD self-management plan.",
      "Check that you are using your medicines correctly, including your inhaler technique.",
      "Have the vaccines you are offered, such as flu and pneumococcal vaccines.",
      "Get help to stop smoking.",
      "Avoid triggers where you can, such as respiratory infections, smoke and air pollution.",
    ],
    tryThisWeek: [
      "Find your self-management plan.",
      "Get your inhaler technique checked.",
      "Check which vaccines you are due.",
    ],
    ask: "What should my self-management plan say about flare-ups?",
    sources: [ALUK_COPD_FLARE, NHS_COPD_SYMPTOMS, NHS_COPD],
    interactive: {
      kind: "signs",
      title: "Flare-up signs to tell your team",
      intro: "Tick any that are worse than usual for you.",
      signs: [
        "More breathless than usual",
        "Coughing more",
        "More phlegm",
        "Phlegm changing colour",
        "More wheezing than usual",
        "Feeling very tired",
        "Harder to be active",
        "Swollen ankles",
        "Confusion",
      ],
      after: "Follow your self-management plan. Call 999 if it is very hard to breathe, or for sudden confusion.",
    },
    quiz: {
      question: "Which of these can be a sign of a flare-up?",
      options: [{ text: "Phlegm changing colour", right: true }, { text: "Sleeping better than usual" }, { text: "Feeling less breathless" }],
      why: "Common signs are being more breathless than usual, coughing more, bringing up more phlegm, and phlegm changing colour.",
    },
  },
  {
    id: "copd-breathless-why",
    kicker: "Breathlessness",
    question: "Why does being out of breath feel so frightening, and is it safe to push a little?",
    hook: "Breathlessness and worry feed each other. Getting out of breath when you are active is normal, and avoiding it makes things worse.",
    short: "Breathlessness can make you feel more anxious, and anxiety can make you more breathless. Getting out of breath when you are active is normal, and exercising to the point of mild breathlessness is not dangerous, but do not push too far. Avoiding activity weakens your muscles, which makes breathlessness worse over time.",
    sections: [
      {
        heading: "A cycle of worry",
        paragraphs: [
          "Breathlessness can make you feel more anxious, which can make breathlessness worse.",
          "A worrying thought can make you feel anxious and breathless. This can lead to panic, with physical symptoms such as a tight chest or fast breathing.",
        ],
      },
      {
        heading: "Breathing habits",
        paragraphs: [
          "When you are out of breath, you may breathe faster, so you may not fully empty your lungs. Relying on the top of your chest takes more effort.",
        ],
      },
      {
        heading: "Normal to get out of breath",
        paragraphs: [
          "Getting out of breath when you are active is completely normal.",
          "Exercising to the point of mild breathlessness is not dangerous. But do not push yourself too far.",
        ],
      },
      {
        heading: "The cycle of inactivity",
        paragraphs: [
          "Avoiding activities that make you breathless weakens your muscles. Weaker muscles need more oxygen, so you feel more breathless over time.",
          "Becoming more active strengthens your muscles, including your breathing muscles. This breaks the cycle.",
        ],
      },
      {
        heading: "Staying calm",
        paragraphs: [
          "Learning to manage and recover your breath is important, because panic can make breathlessness worse.",
          "If you can only say one word at a time while you exercise, slow down.",
        ],
      },
    ],
    helps: [
      "Practise breathing control when you are relaxed and not out of breath, so you can use it when you need it.",
      "Use the talk test: if you have to stop for breath partway through a sentence, you are working at the right level.",
      "Speak to a GP before starting a new exercise programme if your symptoms are severe or you have not exercised for a while.",
      "Ask whether pulmonary rehabilitation could help.",
      "Talk to your GP or nurse about anxiety and ways to manage breathlessness.",
    ],
    tryThisWeek: [
      "Practise breathing control while calm.",
      "Try the talk test on a walk.",
      "Mention anxiety to your GP or nurse.",
    ],
    ask: "How hard is it safe for me to push myself when I exercise?",
    sources: [ALUK_ACTIVE, ALUK_BREATHLESS_MANAGE, ALUK_ANXIETY, NHS_COPD_LIVING],
    interactive: {
      kind: "scenarios",
      title: "Out of breath: what helps most?",
      scenarios: [
        {
          id: "walk",
          situation: "You get out of breath walking to the shops.",
          options: [{ text: "Keep going, at a level that suits you", best: true }, { text: "Stop going out" }, { text: "Push on until you cannot speak" }],
          why: "Getting out of breath when you are active is completely normal. If you can only say one word at a time, slow down.",
        },
        {
          id: "panic",
          situation: "You start to feel panicky as your breathing speeds up.",
          options: [{ text: "Use the breathing control you practised", best: true }, { text: "Breathe faster from the top of your chest" }, { text: "Hold your breath" }],
          why: "Panic can make breathlessness worse. Staying calm, and learning to manage and recover your breath, is important.",
        },
        {
          id: "class",
          situation: "Your symptoms are severe and you want to start a new exercise class.",
          options: [{ text: "Speak to a GP first", best: true }, { text: "Start at full effort" }, { text: "Give up on exercise" }],
          why: "Speak to a GP before starting a new programme if your symptoms are severe or you have not exercised for a while.",
        },
      ],
    },
    quiz: {
      question: "What happens if you avoid activities that make you breathless?",
      options: [{ text: "Your muscles weaken and you get more breathless", right: true }, { text: "Your lungs heal faster" }, { text: "Nothing changes" }],
      why: "Avoiding activities that make you breathless weakens your muscles. Weaker muscles need more oxygen, so you feel more breathless over time.",
    },
  },
  {
    id: "copd-inhalers",
    kicker: "Treatment",
    question: "How do I use my COPD inhalers properly?",
    hook: "Relievers work within minutes; long-acting inhalers work all day. The right technique gets the medicine into your lungs.",
    short: "An inhaler delivers medicine into your lungs when you breathe in. Short-acting relievers start working within minutes, while long-acting inhalers help for 12 to 24 hours if used regularly. Correct technique matters so the medicine works properly, and a pharmacist or inhaler videos can help you check.",
    sections: [
      {
        heading: "How inhalers help",
        paragraphs: [
          "An inhaler delivers medicine into your lungs when you breathe it in.",
          "Bronchodilators relax the muscles in your airways, making breathing easier.",
        ],
      },
      {
        heading: "Short-acting relievers",
        paragraphs: [
          "Reliever inhalers start working within minutes and suit breathlessness during activity. They can be used up to four times a day, and help for four to six hours.",
        ],
      },
      {
        heading: "Long-acting and steroid inhalers",
        paragraphs: [
          "Long-acting bronchodilators are for people who are breathless every day. They take longer to work, but help for 12 to 24 hours if used regularly.",
          "Steroid inhalers are for some people, such as those with frequent flare-ups. Take them as prescribed, and do not stop just because you feel well.",
        ],
      },
      {
        heading: "Getting the technique right",
        paragraphs: [
          "Correct technique matters so the medicine works properly.",
          "With a dry powder inhaler, breathe in as hard as you can, then hold your breath for ten seconds.",
          "With a pressurised metered dose inhaler, take a slow, deep breath, then hold for up to ten seconds. Always use it with a spacer.",
        ],
      },
      {
        heading: "Looking after a spacer",
        paragraphs: [
          "Replace your spacer at least every year, especially if you use it daily.",
          "Do not store it in a plastic bag, because static can build up and reduce the medicine's effect.",
        ],
      },
    ],
    helps: [
      "Ask a doctor, nurse or pharmacist to check how you use your inhaler.",
      "Watch the inhaler video for your type of device.",
      "Always use a spacer with a pressurised metered dose inhaler.",
      "Take steroid inhalers as prescribed, even when you feel well.",
      "Replace your spacer at least every year.",
    ],
    tryThisWeek: [
      "Ask someone to check your technique.",
      "Watch the video for your inhaler.",
      "Use your spacer every time.",
    ],
    ask: "Am I using my inhalers correctly? Can you watch me?",
    sources: [ALUK_COPD_TREAT, NHS_COPD_TREATMENT, ALUK_INHALER_VIDEOS, ALUK_SPACERS],
    interactive: {
      kind: "flip-cards",
      title: "Your inhalers, card by card",
      intro: "Turn each card to see what it does and how to use it.",
      cards: [
        { id: "short", front: "Short-acting reliever", when: "When you are breathless", back: "Starts working within minutes. Can be used up to four times a day, and helps for four to six hours." },
        { id: "long", front: "Long-acting bronchodilator", when: "If you are breathless every day", back: "Takes longer to work, but helps for 12 to 24 hours if used regularly." },
        { id: "steroid", front: "Steroid inhaler", when: "For some, such as frequent flare-ups", back: "Reduces airway inflammation over time. Take it as prescribed; do not stop just because you feel well." },
        { id: "dpi", front: "Dry powder inhaler", when: "A type of device", back: "Breathe in as hard as you can, then hold your breath for ten seconds." },
        { id: "mdi", front: "Metered dose inhaler", when: "A type of device, with a spacer", back: "Take a slow, deep breath, then hold for up to ten seconds. Always use it with a spacer." },
        { id: "mist", front: "Soft mist inhaler", when: "A type of device", back: "Turns liquid medicine into a mist that you breathe in." },
      ],
    },
    quiz: {
      question: "How do you breathe in with a dry powder inhaler?",
      options: [{ text: "As hard as you can, then hold for ten seconds", right: true }, { text: "Very gently, over a whole minute" }, { text: "Through your nose" }],
      why: "With a dry powder inhaler, breathe in as hard as you can, then hold your breath for ten seconds.",
    },
  },
  {
    id: "copd-rehab",
    kicker: "Treatment",
    question: "What is pulmonary rehab, and why does it work?",
    hook: "A course of exercise and advice, in a group, tailored to you. It strengthens muscles so you feel less breathless.",
    short: "Pulmonary rehabilitation is a programme of exercise and education for people whose breathing limits what they can do. A course usually lasts six to eight weeks, with two sessions a week, tailored to you. It can strengthen your muscles so you feel less breathless, and lower your risk of going into hospital with a flare-up.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Pulmonary rehabilitation is a specialised programme of exercise and education for lung problems such as COPD.",
          "You are in a group, with a team that includes physiotherapists, nurses and occupational therapists. It is done in a group, but tailored to your needs.",
        ],
      },
      {
        heading: "What a course looks like",
        paragraphs: [
          "A course usually lasts six to eight weeks, with two sessions of about two hours each week.",
          "It usually starts with an assessment of your health and what you can do. Getting out of breath is part of the therapy, and exercise takes about half of each session.",
          "Topics include breathing techniques, managing anxiety and low mood, using inhalers, eating when breathless, and handling flare-ups.",
        ],
      },
      {
        heading: "How it helps",
        paragraphs: [
          "It can improve muscle strength, so you use oxygen more efficiently and feel less breathless.",
          "9 in 10 people who complete a course are more able to be active. It can also reduce your risk of going into hospital with a chest infection or flare-up.",
        ],
      },
      {
        heading: "Getting a place",
        paragraphs: [
          "Your GP or a member of your respiratory team should refer you if your breathing limits your day-to-day activities.",
          "Some programmes have waiting lists, so speak to your GP as soon as you can. You can do it if you use oxygen; some people need a portable cylinder during classes.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "Staying active helps you keep the progress you have made. Your team may offer a follow-up exercise programme, so ask.",
        ],
      },
    ],
    helps: [
      "Ask your GP, practice nurse or respiratory team to refer you.",
      "Ask whether you can bring a family member or carer.",
      "Try to go to every session.",
      "Keep active after the course to hold on to your progress.",
    ],
    tryThisWeek: [
      "Ask your GP for a referral.",
      "Ask if a carer can come.",
      "Plan to go to every session.",
    ],
    ask: "Can I be referred to pulmonary rehab?",
    sources: [ALUK_PR, ALUK_COPD_TREAT, NHS_COPD_TREATMENT],
    interactive: {
      kind: "timeline",
      title: "A course of pulmonary rehab",
      steps: [
        { id: "referral", when: "Before", title: "Getting referred", points: ["Your GP, practice nurse or respiratory team can refer you.", "Some have waiting lists, so speak to your GP soon."] },
        { id: "start", when: "First session", title: "An assessment", points: ["The course usually starts with a check of your health and what you can do."] },
        { id: "weeks", when: "Six to eight weeks", title: "Two sessions a week", points: ["Each session is about two hours.", "Exercise takes about half of each session.", "Getting out of breath is part of the therapy."] },
        { id: "learn", when: "Along the way", title: "Learning to manage", points: ["Breathing techniques, using inhalers, and eating when breathless.", "Managing anxiety and low mood, and handling flare-ups."] },
        { id: "after", when: "Afterwards", title: "Keeping it up", points: ["Staying active helps you keep the progress you have made.", "Ask whether there is a follow-up exercise programme."] },
      ],
    },
    quiz: {
      question: "How often are pulmonary rehab sessions usually held?",
      options: [{ text: "Twice a week", right: true }, { text: "Once a year" }, { text: "Every day for a year" }],
      why: "A course usually lasts six to eight weeks, with two sessions of about two hours each week.",
    },
  },
  {
    id: "copd-rescue-pack",
    kicker: "Flare-ups",
    question: "What is a rescue pack, and when should I start it?",
    hook: "Steroid tablets or antibiotics to keep at home for a flare-up. Start them only for a flare-up, and always tell your team.",
    short: "A rescue pack is a short course of steroid tablets or antibiotics to keep at home in case of a flare-up. Your healthcare professional should explain when and how to use it at every review. Always tell them when you use it, so they can review your treatment.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Your healthcare professional may give you a short course of steroid tablets or antibiotics to keep at home, in case you have a flare-up. This is called a rescue pack.",
        ],
      },
      {
        heading: "When it is used",
        paragraphs: [
          "Steroid tablets are given for a bad flare-up, usually as a five-day course.",
          "Antibiotics are for a suspected chest infection. Signs include more breathlessness, more coughing, or phlegm changing colour or becoming thicker.",
          "Your self-management plan should include guidance on what to do if you think you are having a flare-up.",
        ],
      },
      {
        heading: "Not too often",
        paragraphs: [
          "Steroid tablets can cause side effects, especially at higher doses. Taking antibiotics too often can lead to antibiotic resistance.",
          "Antibiotics do not work against viral infections, so take them only when needed.",
        ],
      },
      {
        heading: "Tell your team",
        paragraphs: [
          "Always tell your healthcare professional if you use your rescue pack, so they can review your treatment.",
          "If you use three or more courses of steroid tablets or antibiotics within a year, your healthcare professional should offer you a review.",
        ],
      },
      {
        heading: "If it is serious",
        paragraphs: [
          "Call 999 or go to A&E if you are finding it very hard to breathe, such as gasping, choking or being unable to speak.",
        ],
      },
    ],
    helps: [
      "Ask your healthcare professional to explain when and how to use your pack at each review.",
      "Follow your COPD self-management plan.",
      "Tell your healthcare professional every time you use the pack.",
      "Call 999 if it is very hard to breathe.",
    ],
    tryThisWeek: [
      "Ask when and how to use your pack.",
      "Read your self-management plan.",
      "Tell your team when you use it.",
    ],
    ask: "When should I start my rescue pack, and when should I call for help?",
    sources: [ALUK_COPD_FLARE, ALUK_COPD_TREAT, NHS_COPD_TREATMENT],
    interactive: {
      kind: "scenarios",
      title: "Your rescue pack: what helps most?",
      scenarios: [
        {
          id: "signs",
          situation: "You are more breathless than usual, coughing more, and your phlegm has changed colour.",
          options: [{ text: "Follow your self-management plan", best: true }, { text: "Ignore it until your next review" }],
          why: "Your self-management plan should include guidance on what to do if you think you are having a flare-up.",
        },
        {
          id: "started",
          situation: "You have just started your rescue pack.",
          options: [{ text: "Tell your healthcare professional", best: true }, { text: "Keep it to yourself" }, { text: "Stop your other medicines" }],
          why: "Always tell your healthcare professional if you use your rescue pack, so they can review your treatment.",
        },
        {
          id: "gasping",
          situation: "You are gasping and cannot finish a sentence.",
          options: [{ text: "Call 999", best: true }, { text: "Start the pack and wait" }, { text: "Lie down and rest" }],
          why: "Call 999 or go to A&E if you are finding it very hard to breathe, such as gasping, choking or being unable to speak.",
        },
      ],
    },
    quiz: {
      question: "What should you do after using your rescue pack?",
      options: [{ text: "Tell your healthcare professional", right: true }, { text: "Stop all your inhalers" }, { text: "Start a second pack straight away" }],
      why: "Always tell your healthcare professional if you use your rescue pack, so they can review your treatment.",
    },
  },
  {
    id: "copd-oxygen",
    kicker: "Treatment",
    question: "Who needs oxygen at home?",
    hook: "Home oxygen treats low blood oxygen, not breathlessness. Most people with a lung condition do not need it.",
    short: "Home oxygen treats low blood oxygen levels, not breathlessness, and most people with a lung condition do not need it. Long-term oxygen is used for 15 hours a day or more, and ambulatory oxygen helps you stay active. You are assessed first, and people who smoke cannot be prescribed it because of the fire risk.",
    sections: [
      {
        heading: "For low oxygen, not breathlessness",
        paragraphs: [
          "Oxygen is only useful for people with low oxygen levels. It does not help breathlessness when oxygen levels are not low.",
          "With COPD, breathlessness is usually caused by difficulty moving air in and out, not by low oxygen.",
        ],
      },
      {
        heading: "Types of home oxygen",
        paragraphs: [
          "Long-term oxygen therapy is used to keep your oxygen levels up for 15 hours a day or more. Ambulatory oxygen is portable oxygen, used to help keep you active.",
          "In people with very low oxygen levels, long-term oxygen for at least 15 hours a day can improve life expectancy.",
        ],
      },
      {
        heading: "Being assessed",
        paragraphs: [
          "A finger-clip device measures your oxygen. If your levels are too low, you are referred for a home oxygen assessment.",
          "The assessment measures blood gases on two occasions, a few weeks apart.",
        ],
      },
      {
        heading: "Smoking and safety",
        paragraphs: [
          "Oxygen makes things catch fire much more easily and more fiercely. People who smoke cannot be prescribed home oxygen because of the fire risk.",
          "Keep the equipment at least three metres from open flames, and one and a half metres from other electrical appliances and heat sources.",
          "Do not use oxygen without a prescription, as this can damage your lungs and affect your breathing.",
        ],
      },
      {
        heading: "Reviews",
        paragraphs: [
          "You should have a blood test within three months of starting, then a review at least once a year.",
        ],
      },
    ],
    helps: [
      "Ask whether your oxygen level has been checked.",
      "If you smoke, get help to stop: home oxygen cannot be prescribed to people who smoke.",
      "Keep oxygen equipment away from open flames and heat.",
      "Tell your home and car insurance providers if you use oxygen.",
      "Ask about ambulatory oxygen if you are on long-term oxygen and think it would help you stay active.",
    ],
    tryThisWeek: [
      "Ask if your oxygen level was checked.",
      "Keep oxygen well away from flames.",
      "Tell your insurer you use oxygen.",
    ],
    ask: "Are my oxygen levels low enough that home oxygen would help me?",
    sources: [ALUK_OXYGEN_WHAT, ALUK_OXYGEN_LIFE, ALUK_COPD_TREAT, NHS_COPD_TREATMENT],
    interactive: {
      kind: "flip-cards",
      title: "Oxygen, and the checks for it",
      intro: "Turn each card to see what it is and when it is used.",
      cards: [
        { id: "ltot", front: "Long-term oxygen", when: "Very low oxygen levels", back: "Keeps your oxygen levels up for 15 hours a day or more." },
        { id: "aot", front: "Ambulatory oxygen", when: "Oxygen falls when you are active", back: "Portable oxygen, used to help keep you active and mobile." },
        { id: "pot", front: "Palliative oxygen", when: "At the end of life", back: "Used to manage very low oxygen levels at the end of life." },
        { id: "oximeter", front: "Pulse oximeter", when: "The first check", back: "A finger-clip device that measures your oxygen. If it is too low, you are referred for an assessment." },
        { id: "gas", front: "Blood gas test", when: "The home oxygen assessment", back: "A sample from the wrist or earlobe, more accurate than pulse oximetry. Done twice, a few weeks apart." },
      ],
    },
    quiz: {
      question: "What does home oxygen treat?",
      options: [{ text: "Low blood oxygen levels", right: true }, { text: "Every kind of breathlessness" }, { text: "A chesty cough" }],
      why: "Oxygen is only useful for people with low oxygen levels. It does not help breathlessness when oxygen levels are not low.",
    },
  },
  {
    id: "copd-breathing",
    kicker: "Every day",
    question: "Which breathing techniques help when I'm out of breath?",
    hook: "Pursed lips, blow as you go, paced breathing, and a good position to recover in.",
    short: "Breathing control means breathing gently, using the least effort. Pursed-lips breathing, blowing out as you make an effort, and pacing your breaths to your steps can all help. Resting positions, such as leaning forward with your elbows on your knees, can help you get your breath back.",
    sections: [
      {
        heading: "Breathing control",
        paragraphs: [
          "Breathe gently, using the least effort. Practise while sitting, relaxed and not out of breath, so you can use it when you are short of breath.",
          "Breathe in slowly through your nose, then out through your mouth. Aim for an out-breath that is longer than the in-breath.",
        ],
      },
      {
        heading: "Pursed lips",
        paragraphs: [
          "Breathe in gently through your nose. Purse your lips as if you are going to blow out a candle, and breathe out slowly for as long as is comfortable.",
          "Do not force your lungs to empty. You can use it at any time, or during activity.",
        ],
      },
      {
        heading: "Blow as you go, and paced breathing",
        paragraphs: [
          "Breathe in before an effort, such as lifting a heavy bag, then breathe out during it.",
          "For paced breathing, count to yourself as you walk. Breathe in for one step and out over one or two steps.",
        ],
      },
      {
        heading: "Positions to recover",
        paragraphs: [
          "Sit leaning forward with your elbows resting on your knees. Or lean back or sideways against a wall, with your feet slightly apart.",
          "Or sit leaning forward at a table, resting your head and arms on pillows.",
        ],
      },
      {
        heading: "A handheld fan",
        paragraphs: [
          "Holding a handheld battery fan about 6 inches from your face can make you feel less breathless.",
        ],
      },
    ],
    helps: [
      "Ask your physiotherapist or healthcare professional which techniques suit you.",
      "Practise when you are relaxed and not out of breath, so the techniques become a habit.",
      "Use pursed-lips breathing at any time, including during activity.",
      "Try a handheld battery fan.",
      "Learn a resting position to get your breath back.",
    ],
    tryThisWeek: [
      "Practise pursed lips while calm.",
      "Try a handheld fan.",
      "Learn one resting position.",
    ],
    ask: "Which breathing techniques would suit me best?",
    sources: [ALUK_BREATHLESS_MANAGE, ALUK_TECHNIQUES, ALUK_BREATHLESS_LIVING, NHS_COPD_LIVING],
    interactive: {
      kind: "flip-cards",
      title: "Six ways to steady your breath",
      intro: "Turn each card to see how it is done.",
      cards: [
        { id: "control", front: "Breathing control", when: "Practise when relaxed", back: "Breathe gently, using the least effort. Aim for an out-breath longer than the in-breath." },
        { id: "lips", front: "Pursed lips", when: "Any time, or when active", back: "Breathe in through your nose, then out slowly through pursed lips, as if blowing out a candle." },
        { id: "blow", front: "Blow as you go", when: "Lifting, or on stairs", back: "Breathe in before the effort, then breathe out during it." },
        { id: "paced", front: "Paced breathing", when: "When walking", back: "Breathe in for one step and out over one or two steps." },
        { id: "lean", front: "Leaning forward", when: "Getting your breath back", back: "Sit leaning forward with your elbows on your knees, or at a table with your head and arms on pillows." },
        { id: "fan", front: "Handheld fan", when: "Feeling breathless", back: "Hold a battery fan about 6 inches from your face. It can make you feel less breathless." },
      ],
    },
    quiz: {
      question: "In pursed-lips breathing, how do you breathe out?",
      options: [{ text: "Slowly, as if blowing out a candle", right: true }, { text: "As hard and fast as you can" }, { text: "Only through your nose" }],
      why: "Purse your lips as if you are going to blow out a candle, and breathe out slowly for as long as is comfortable.",
    },
  },
  {
    id: "copd-smoking",
    kicker: "Smoking",
    question: "Is it worth stopping smoking now?",
    hook: "Yes. It is the most important thing you can do for COPD, and it is never too late.",
    short: "If you have COPD and smoke, stopping is the most important thing you can do. The damage cannot be reversed, but stopping can prevent further damage, and people with advanced COPD still benefit. You are 3 times more likely to stop with support from a local stop smoking service.",
    sections: [
      {
        heading: "Why it matters",
        paragraphs: [
          "Stopping smoking is the most effective way to prevent COPD from getting worse.",
          "Lung and airway damage cannot be reversed, but stopping can prevent further damage. Quitting should improve your symptoms and make flare-ups less likely.",
        ],
      },
      {
        heading: "Never too late",
        paragraphs: [
          "In early COPD, stopping smoking may be all the treatment needed. It is never too late, and people with advanced COPD still benefit.",
        ],
      },
      {
        heading: "Help to stop",
        paragraphs: [
          "Local stop smoking services give free advice and support. You are 3 times more likely to stop with their support.",
          "Your GP can refer you, or you can contact a service yourself. Your healthcare professional should offer stop smoking support at every appointment.",
        ],
      },
      {
        heading: "What can help",
        paragraphs: [
          "Nicotine replacement comes as patches, gums, lozenges, inhalers and sprays. It works best when two types are combined.",
          "Stop smoking medicines are available from your GP or local stop smoking service.",
          "Vapes can be very effective, especially if other approaches have not worked. But they are not risk free.",
        ],
      },
      {
        heading: "Cravings",
        paragraphs: [
          "Cravings usually last only 5 or 10 minutes. Once you reach 28 days smoke free, you are 5 times more likely to stop for good.",
        ],
      },
    ],
    helps: [
      "Contact a local stop smoking service, or ask your GP to refer you.",
      "Combine two types of nicotine replacement, such as a patch and gum.",
      "Ask your GP or stop smoking service about stop smoking medicines.",
      "Wait out cravings: they usually last only 5 or 10 minutes.",
      "Aim for 28 days smoke free.",
    ],
    tryThisWeek: [
      "Contact a stop smoking service.",
      "Ask about stop smoking medicines.",
      "Wait out one craving.",
    ],
    ask: "Which stop smoking treatments would suit me?",
    sources: [NHS_COPD_TREATMENT, ALUK_COPD_TREAT, ALUK_QUIT, NHS_QUIT],
    interactive: {
      kind: "scenarios",
      title: "Stopping smoking: what helps most?",
      scenarios: [
        {
          id: "craving",
          situation: "A strong craving hits.",
          options: [{ text: "Wait it out: it usually passes in minutes", best: true }, { text: "Have just one" }],
          why: "Cravings usually last only 5 or 10 minutes.",
        },
        {
          id: "tried",
          situation: "You have tried to stop on your own before, without success.",
          options: [{ text: "Contact a local stop smoking service", best: true }, { text: "Decide it is too late now" }, { text: "Wait until your COPD gets worse" }],
          why: "You are 3 times more likely to stop with their support. It is never too late, and people with advanced COPD still benefit.",
        },
        {
          id: "patch",
          situation: "You use one nicotine patch, but still get strong cravings.",
          options: [{ text: "Ask about combining two types", best: true }, { text: "Stop using nicotine replacement" }, { text: "Smoke as well" }],
          why: "Nicotine replacement comes as patches, gums, lozenges, inhalers and sprays. It works best when two types are combined.",
        },
      ],
    },
    quiz: {
      question: "How much more likely are you to stop with a local stop smoking service?",
      options: [{ text: "3 times more likely", right: true }, { text: "No more likely" }, { text: "Less likely" }],
      why: "Local stop smoking services give free advice and support. You are 3 times more likely to stop with their support.",
    },
  },
  {
    id: "copd-vaccines",
    kicker: "Vaccines",
    question: "Which jabs should I have with COPD?",
    hook: "A flu jab every year and a one-off pneumococcal vaccine. Infections can make people with COPD seriously ill.",
    short: "Everyone with COPD is encouraged to have the yearly flu jab and the one-off pneumococcal vaccine. Respiratory infections such as flu can make people with COPD seriously ill. COVID-19 and RSV vaccines depend on age and other things, so check with your GP surgery or pharmacy.",
    sections: [
      {
        heading: "Why vaccines matter",
        paragraphs: [
          "Respiratory infections such as flu can make people with COPD seriously ill, or send them to hospital.",
          "Flu raises the risk of a lung condition flare-up and a chest infection.",
        ],
      },
      {
        heading: "Flu, every year",
        paragraphs: [
          "The flu vaccine is free on the NHS for people with COPD. Protection decreases over time, and the virus types covered change, so it is important to have it every year.",
          "It is best to have it before the end of October. It takes up to 14 days to work.",
          "You can get it at your GP surgery or at a pharmacy offering free vaccination.",
        ],
      },
      {
        heading: "Pneumococcal vaccine",
        paragraphs: [
          "The pneumococcal vaccine protects against infections that can cause serious illness, including pneumonia.",
          "It is recommended for people with a long-term condition that affects breathing, such as COPD. Most adults need only one dose.",
        ],
      },
      {
        heading: "COVID-19 and RSV",
        paragraphs: [
          "This season's COVID-19 vaccine is for adults aged 75 or over, people living in care homes for older adults, and people with a weakened immune system.",
          "An RSV vaccine is available to people aged 75 to 79.",
        ],
      },
      {
        heading: "Together or apart",
        paragraphs: [
          "The flu and COVID-19 vaccines can be given at the same time. The RSV vaccine is not usually given to older adults at the same time as the flu vaccine.",
        ],
      },
    ],
    helps: [
      "Have the flu jab every year, ideally before the end of October.",
      "Check that you have had the one-off pneumococcal vaccine.",
      "Ask your GP surgery or pharmacist whether you are eligible for COVID-19 or RSV vaccines.",
      "Ask whether your main carer can have a free flu vaccine too.",
    ],
    tryThisWeek: [
      "Book your flu jab.",
      "Check you have had the pneumococcal jab.",
      "Ask if your carer can be vaccinated.",
    ],
    ask: "Which vaccines am I due, and can I have them together?",
    sources: [NHS_COPD_LIVING, NHS_FLU, ALUK_FLU, NHS_PNEUMO, NHS_COVID, ALUK_COPD_TREAT],
    interactive: {
      kind: "timeline",
      title: "Your flu jab through the winter",
      steps: [
        { id: "book", when: "By the end of October", title: "Have your flu jab", points: ["It is best to be vaccinated before the end of October.", "Book at your GP surgery or a pharmacy offering free vaccination."] },
        { id: "works", when: "Up to 14 days on", title: "The vaccine starts working", points: ["Flu vaccines take up to 14 days to work."] },
        { id: "spread", when: "Mid-November", title: "Flu starts to spread", points: ["Flu usually begins to spread in the middle of November."] },
        { id: "season", when: "Until March", title: "Flu season runs on", points: ["Flu seasons last until March."] },
        { id: "next", when: "Next autumn", title: "Again, every year", points: ["Protection decreases over time and the virus types change, so have it every year."] },
      ],
    },
    quiz: {
      question: "When is the best time to have the flu jab?",
      options: [{ text: "Before the end of October", right: true }, { text: "In March" }, { text: "Only once in your life" }],
      why: "It is best to have it before the end of October. It takes up to 14 days to work.",
    },
  },
  {
    id: "copd-energy",
    kicker: "Every day",
    question: "How can I pace my day: showers, stairs and shopping?",
    hook: "Plan, break jobs down and rest. A towelling robe, a few stairs at a time and breathing out on the effort all help.",
    short: "Plan your day and pace yourself, leaving plenty of time to rest, and break activities into smaller tasks. A towelling robe after a shower uses less energy than drying off with a towel. On stairs, breathe out during the effort and go a few steps at a time.",
    sections: [
      {
        heading: "Plan and pace",
        paragraphs: [
          "Plan your day and pace yourself, leaving plenty of time to rest.",
          "Break activities into smaller, more manageable tasks. Be patient with yourself and give yourself time to do things.",
        ],
      },
      {
        heading: "Washing and dressing",
        paragraphs: [
          "After a shower or bath, use a towelling robe. It uses less energy than drying off with a towel.",
          "Wear loose clothes, and clothes and shoes that are easy to take on and off.",
        ],
      },
      {
        heading: "Stairs",
        paragraphs: [
          "Blow as you go: breathe in before the effort, then breathe out during it.",
          "On stairs, you can go a few steps at a time, and lean on a wall or banister while you recover your breath.",
        ],
      },
      {
        heading: "Around the house and out",
        paragraphs: [
          "Keep things you use often in easy-to-reach places. A small table or wheeled cart can move things around, and long-handled tongs can help you reach.",
          "A wheeled walking frame with a seat can help you be more active. Ask for support when you need it.",
        ],
      },
      {
        heading: "Building strength",
        paragraphs: [
          "With regular exercise, you need to breathe less to do the same activity. Strengthening your hips and thighs can help with getting out of chairs.",
          "Occupational therapists and physiotherapists can give you a plan based on your goals.",
        ],
      },
    ],
    helps: [
      "Plan your day, with plenty of time to rest.",
      "Break jobs into smaller, more manageable tasks.",
      "Use a towelling robe after a shower or bath.",
      "Keep everyday items within easy reach.",
      "Take stairs a few steps at a time, breathing out on the effort.",
      "Ask for support when you need it.",
    ],
    tryThisWeek: [
      "Plan rest into tomorrow.",
      "Try a towelling robe after a shower.",
      "Move everyday items within reach.",
    ],
    ask: "Could an occupational therapist or physiotherapist help me plan my day?",
    sources: [ALUK_BREATHLESS_LIVING, ALUK_TECHNIQUES, ALUK_ACTIVE],
    interactive: {
      kind: "scenarios",
      title: "Pacing your day: what helps most?",
      scenarios: [
        {
          id: "shower",
          situation: "You have just had a shower and feel tired.",
          options: [{ text: "Put on a towelling robe", best: true }, { text: "Rub yourself dry quickly" }],
          why: "A towelling robe uses less energy than drying off with a towel.",
        },
        {
          id: "stairs",
          situation: "You need to climb a flight of stairs.",
          options: [{ text: "A few steps at a time, breathing out on the effort", best: true }, { text: "Rush up in one go" }],
          why: "Breathe in before the effort, then out during it. On stairs, you can go a few steps at a time and lean on the banister to recover.",
        },
        {
          id: "jobs",
          situation: "You have a busy day of jobs ahead.",
          options: [{ text: "Break them into smaller tasks, with rests", best: true }, { text: "Do everything at once" }],
          why: "Plan your day and pace yourself, leaving plenty of time to rest. Break activities into smaller, more manageable tasks.",
        },
      ],
    },
    quiz: {
      question: "What uses less energy after a shower?",
      options: [{ text: "A towelling robe", right: true }, { text: "Rubbing dry with a towel" }, { text: "Standing in a cool room" }],
      why: "After a shower or bath, use a towelling robe. It uses less energy than drying off with a towel.",
    },
  },
  {
    id: "copd-mood",
    kicker: "Feelings",
    question: "Why do I feel anxious or low, and what helps?",
    hook: "Breathlessness and anxiety can feed each other, and coughing and breathlessness can wear you down. Help is there.",
    short: "Breathlessness can make you feel more anxious, and anxiety can make you more breathless. Difficulty breathing and coughing can also make you feel tired and depressed. Talking therapies, support groups and pulmonary rehabilitation can help, so talk to your GP or nurse.",
    sections: [
      {
        heading: "Breathlessness and anxiety",
        paragraphs: [
          "Anxiety can change the way you breathe and may make lung symptoms feel worse.",
          "Breathlessness can make you feel more anxious, which can make breathlessness worse, creating a cycle. It can be easy to confuse anxiety symptoms with breathlessness.",
        ],
      },
      {
        heading: "Low mood",
        paragraphs: [
          "Difficulty breathing and coughing can make you feel tired and depressed.",
          "People with a long-term physical health condition are two to three times more likely to get depression. Signs include a low mood lasting weeks or months, losing interest in things you enjoyed, and having little energy.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "See your GP if you have feelings of depression. Do not delay getting help.",
          "Talking therapies such as cognitive behavioural therapy are often used for anxiety. Your GP can also discuss whether medicines would help.",
          "Research shows pulmonary rehabilitation improves fitness and mental wellbeing.",
        ],
      },
      {
        heading: "Talking to others",
        paragraphs: [
          "Talk openly with your partner, spouse or carer about your worries, and say if you need time to yourself.",
          "Some people find local support groups or internet chat rooms helpful.",
        ],
      },
      {
        heading: "In a crisis",
        paragraphs: [
          "Call 999 or go to A&E if you are having thoughts about harming yourself or ending your life. You are not wasting anyone's time by asking for help.",
        ],
      },
    ],
    helps: [
      "Talk to your GP or nurse about stress, anxiety or low mood.",
      "Ask about talking therapies such as cognitive behavioural therapy.",
      "Ask whether pulmonary rehabilitation could help.",
      "Share your feelings with others who have long-term lung conditions, in a support group or online forum.",
      "Do one thing today to lift your mood.",
    ],
    tryThisWeek: [
      "Tell your GP or nurse how you feel.",
      "Look for a support group.",
      "Do one thing to lift your mood.",
    ],
    ask: "Could my mood or anxiety be affecting my breathing, and what help is there?",
    sources: [ALUK_ANXIETY, ALUK_DEPRESSION, NHS_COPD_LIVING],
    interactive: {
      kind: "signs",
      title: "Feelings to mention to your GP or nurse",
      intro: "Tick any that are true for you at the moment.",
      signs: [
        "Low mood for weeks or months",
        "Lost interest in things I enjoyed",
        "Little or no energy",
        "Feeling anxious or panicky",
        "Worry makes me more breathless",
        "Tired from breathing and coughing",
        "Mood changes since a new medicine",
      ],
      after: "See your GP if you have feelings of depression; do not delay. Call 999 if you have thoughts of harming yourself.",
    },
    quiz: {
      question: "Which of these can improve both fitness and mental wellbeing?",
      options: [{ text: "Pulmonary rehabilitation", right: true }, { text: "Staying in bed" }, { text: "Avoiding all activity" }],
      why: "Research shows pulmonary rehabilitation improves fitness and mental wellbeing.",
    },
  },
];
