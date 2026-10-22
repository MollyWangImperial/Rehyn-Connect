import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Alcohol-related liver disease page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS and Liver UK (the new
// name for the British Liver Trust; britishlivertrust.org.uk now redirects to liveruk.org), with NICE's
// information for the public on alcohol-use disorders (CG115) for withdrawal, medicines and families. Written to
// be kind and free of blame. General information only; it never replaces what a person's own GP, alcohol
// service or liver team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const liverUk = (label: string, path: string): LearnSource => ({ label: `Liver UK: ${label}`, url: `https://liveruk.org/${path}` });
const nice = (label: string, chapter: string): LearnSource => ({ label: `NICE: ${label} (CG115)`, url: `https://www.nice.org.uk/guidance/cg115/ifp/chapter/${chapter}` });

const NHS_ARLD = nhs("Alcohol-related liver disease (ARLD)", "conditions/alcohol-related-liver-disease-arld/");
const NHS_AUD = nhs("Alcohol-use disorder", "conditions/alcohol-use-disorder/");
const NHS_SUPPORT = nhs("Alcohol support", "live-well/alcohol-advice/alcohol-support/");
const NHS_UNITS = nhs("Alcohol units", "live-well/alcohol-advice/calculating-alcohol-units/");
const NHS_RISKS = nhs("The risks of drinking too much", "live-well/alcohol-advice/the-risks-of-drinking-too-much/");
const NHS_TIPS = nhs("Tips on cutting down on alcohol", "live-well/alcohol-advice/tips-on-cutting-down-alcohol/");
const NHS_CIRRHOSIS = nhs("Cirrhosis", "conditions/cirrhosis/");

const LU_ARLD = liverUk("Alcohol-related liver disease", "about-liver-disease/conditions/alcohol-related-liver-disease/");
const LU_CIRRHOSIS = liverUk("Cirrhosis", "about-liver-disease/conditions/cirrhosis/");
const LU_SYMPTOMS = liverUk("Symptoms of liver disease", "about-liver-disease/symptoms-of-liver-disease/");
const LU_LFT = liverUk("Liver blood tests", "about-liver-disease/tests/liver-blood-tests/");
const LU_FIBROSCAN = liverUk("VCTE (FibroScan)", "about-liver-disease/tests/transient-elastography-fibroscan/");
const LU_TX_WHO = liverUk("Who can have a liver transplant?", "about-liver-disease/treatments/transplant/who-can-have-a-liver-transplant/");
const LU_HELPLINE = liverUk("Nurse-led helpline", "how-we-can-help/nurse-led-helpline/");
const LU_GROUPS = liverUk("Support groups", "how-we-can-help/support-groups/");

const EAT = "about-liver-disease/living-with-a-liver-condition/eating-drinking-keeping-active";
const LU_ALCOHOL = liverUk("Alcohol and liver disease", `${EAT}/alcohol-and-liver-disease/`);
const LU_ALCOHOL_FAQS = liverUk("Alcohol FAQs", `${EAT}/alcohol-faqs/`);
const LU_DIET_CIRRHOSIS = liverUk("Diet and cirrhosis", `${EAT}/diet-and-cirrhosis/`);
const LU_DIET_LIVER = liverUk("Diet and liver disease", `${EAT}/diet-and-liver-disease/`);
const LU_ACTIVITY = liverUk("Physical activity and exercise", `${EAT}/physical-activity-and-exercise/`);

const FAMILY = "about-liver-disease/living-with-a-liver-condition/information-for-family-friends-and-carers";
const LU_FAMILY_WORRIED = liverUk("Worried about your loved one's liver?", `${FAMILY}/worried-about-a-loved-one/`);
const LU_FAMILY_DIAGNOSED = liverUk("Just diagnosed?", `${FAMILY}/just-diagnosed/`);
const LU_FAMILY_EVERYDAY = liverUk("Everyday life (family, friends and carers)", `${FAMILY}/everyday-life-caring-for-an-adult-with-liver-disease/`);
const LU_FAMILY_SUPPORT = liverUk("Support for you (family, friends and carers)", `${FAMILY}/support/`);

const NICE_HARMFUL = nice("Harmful drinking and alcohol dependence", "Harmful-drinking-high-risk-drinking-and-alcohol-dependence");
const NICE_SEE = nice("What should happen when you see care staff", "What-should-happen-when-you-see-care-staff");
const NICE_TREAT = nice("Treatments for adults who misuse alcohol", "Treatments-for-adults-who-misuse-alcohol");
const NICE_OTHER = nice("Treatments for other health problems", "Treatments-for-other-health-problems");
const NICE_FAMILY = nice("Information for families and carers", "Information-for-families-and-carers");

export const arldAnswers: LearnArticle[] = [
  {
    id: "arld-what-it-is",
    kicker: "Understanding",
    question: "What is alcohol-related liver disease?",
    hook: "Liver damage from drinking more than the liver can cope with over time. Often silent, and getting help early can stop it getting worse.",
    short: "Alcohol-related liver disease (ARLD) is where your liver is damaged by drinking too much alcohol over a long time. You don't have to be addicted to alcohol to develop it. It often has no symptoms early on, and getting help early can stop the damage getting worse.",
    sections: [
      {
        heading: "What it means",
        paragraphs: [
          "Alcohol-related liver disease (ARLD) is where your liver is damaged by drinking too much alcohol over a long time. Getting help early can stop the damage getting worse.",
          "It's sometimes referred to as alcoholic liver disease, and your doctor might use the abbreviations ALD or ARLD when they're talking about it.",
        ],
      },
      {
        heading: "Why alcohol harms the liver",
        paragraphs: [
          "Your liver has hundreds of jobs, including helping to break down a lot of what you eat and drink. When the liver breaks down alcohol, it makes harmful chemicals. These can damage and kill liver cells.",
          "The liver is very good at repairing itself, but it can only take so much. If someone is regularly drinking too much alcohol, it can't keep up with the damage. Scarring can build up, and over time this can stop the liver working properly.",
        ],
      },
      {
        heading: "Who it affects",
        paragraphs: [
          "You don't have to be addicted to alcohol to develop the condition. Regularly drinking over the guideline amounts can put you at risk. Having half a bottle of wine or a few pints most evenings can damage your liver.",
          "ARLD develops more quickly and at lower drinking levels in women than in men. Anyone can get ARLD. Not everyone who drinks too much alcohol will be affected, and it is usually impossible to predict who will.",
        ],
      },
      {
        heading: "What makes it more likely",
        paragraphs: [
          "You're more likely to develop ARLD if you drink too much and you already have a liver condition such as hepatitis C, have diabetes, especially type 2 diabetes, are overweight or obese, or have a family history of alcohol-related diseases and addiction.",
          "Alcohol consumption is the most common cause of liver disease in the UK, accounting for 6 in 10 cases. Up to 1 in 5 people in the UK drink alcohol in a way that could harm their liver.",
        ],
      },
      {
        heading: "Finding out early",
        paragraphs: [
          "Drinking less alcohol, or not drinking at all, reduces your risk of ARLD and helps prevent serious liver damage. If you stop drinking, your liver can often recover.",
          "Knowing about liver damage at an early stage allows you to make decisions that will help your liver to recover. Even if you are worried your liver may already be damaged, finding out for sure means you can get any help or treatment you need.",
        ],
      },
    ],
    helps: [
      "See a GP or an alcohol addiction support service if you're worried about your drinking or want help to stop.",
      "If you do drink alcohol, drink no more than 14 units a week, spread across 3 days or more.",
      "Be totally honest with your doctor about how much and how often you drink alcohol.",
      "If you regularly drink too much alcohol, get medical help before you try to stop, as stopping suddenly can be very dangerous.",
      "If you've been regularly drinking over the guidelines for several months, get your liver checked.",
    ],
    tryThisWeek: [
      "Keep within 14 units a week.",
      "Tell your doctor honestly what you drink.",
      "Ask about a liver check.",
    ],
    ask: "Has alcohol affected my liver, and how much damage is there?",
    interactive: {
      kind: "risk-check",
      title: "What makes it more likely?",
      intro: "Tick any that apply. Drinking is the one you can change, and help is there to do it.",
      items: [
        { id: "drinking", label: "Regularly drinking over the guidelines", note: "Generally, the more alcohol you drink above the recommended limits, the higher your risk.", changeable: true },
        { id: "weight", label: "Being overweight", note: "A weight in the overweight or obese range makes alcohol-related liver disease more likely.", changeable: true },
        { id: "diabetes", label: "Diabetes", note: "Having diabetes, mainly type 2 diabetes, raises the chance of developing it.", changeable: false },
        { id: "female", label: "Being female", note: "Women are more vulnerable to the harmful effects of alcohol than men.", changeable: false },
        { id: "liver", label: "Another liver condition", note: "Such as hepatitis C or haemochromatosis. The extra damage from alcohol can make things worse.", changeable: false },
        { id: "family", label: "Family history", note: "Alcohol-related diseases and addiction often run in families.", changeable: false },
      ],
    },
    sources: [NHS_ARLD, LU_ARLD, LU_ALCOHOL],
    quiz: {
      question: "Do you have to be addicted to alcohol to develop ARLD?",
      options: [{ text: "No, drinking over the guidelines can be enough", right: true }, { text: "Yes, only people who are addicted get it" }, { text: "Only people who drink spirits" }],
      why: "You don't have to be addicted to alcohol to develop the condition. Regularly drinking over the guideline amounts can put you at risk.",
    },
  },
  {
    id: "arld-stages",
    kicker: "Stages",
    question: "What are the three stages of alcohol-related liver disease?",
    hook: "Fatty liver, then alcohol-related hepatitis, then cirrhosis. The earlier the stage, the more the liver can recover.",
    short: "ARLD develops over months or years of drinking too much alcohol, in 3 stages: fatty liver, alcohol-related hepatitis and cirrhosis. The liver can usually recover from a fatty liver if you stop drinking. The later stages are harder to treat, but stopping still helps.",
    sections: [
      {
        heading: "Three stages",
        paragraphs: [
          "Alcohol-related liver disease develops over months or years of drinking too much alcohol. There are 3 stages of ARLD, depending on how serious the liver damage is.",
          "If you stop drinking, your liver can often recover. The later stages of ARLD are harder to treat and more likely to have serious complications.",
        ],
      },
      {
        heading: "Stage 1: fatty liver",
        paragraphs: [
          "In the first stage, fat builds up in the liver, and often there are no symptoms. Drinking over 4 units of alcohol a day will lead to some build-up of fat in the liver.",
          "The liver can usually recover if you stop drinking. If you stop drinking alcohol completely for a period of time, months or years, your liver can recover.",
        ],
      },
      {
        heading: "Stage 2: alcohol-related hepatitis",
        paragraphs: [
          "In the second stage, the liver is swollen and damaged, and symptoms are likely. The liver may be able to recover from some of the damage.",
          "This stage is very serious, and about a third of heavy drinkers with alcohol-related fatty liver will start to develop it. It normally occurs after years of drinking too much. But it can develop very suddenly and severely, and it can happen after drinking a lot of alcohol over a shorter period of time. This is called acute alcohol-related hepatitis, and it can lead to liver failure.",
        ],
      },
      {
        heading: "Stage 3: cirrhosis",
        paragraphs: [
          "Cirrhosis is the most serious stage. The liver is badly damaged and scarred, and this damage cannot usually be reversed. The liver may no longer be able to work properly, which can cause serious health problems.",
          "Up to 1 in every 5 heavy drinkers will develop cirrhosis. It usually takes many years to develop, and most people have no symptoms while this is happening.",
          "Compensated cirrhosis is when the liver has permanent scarring but is working OK, and you can live for years with it. Decompensated cirrhosis means the body is no longer coping with the scarring. Triggers such as infections or alcohol intake can cause this.",
        ],
      },
      {
        heading: "Stopping helps at every stage",
        paragraphs: [
          "The sooner you stop drinking alcohol, the more chance there is that your liver will be able to repair itself. It depends on how much damage has already been done.",
          "It is often possible to slow down compensated cirrhosis to stop it becoming decompensated, usually by stopping or treating whatever is causing the damage. If you have one of the more serious forms of liver damage, it's really important that you are referred to a liver specialist.",
        ],
      },
    ],
    helps: [
      "Aim to stop drinking alcohol completely; this is important whatever stage of ARLD you have.",
      "If you regularly drink too much alcohol, get medical help before you try to stop.",
      "Ask for the amount of scarring in your liver to be measured as part of your diagnosis.",
      "If you have one of the more serious forms of liver damage, ask to be referred to a liver specialist.",
      "If quitting completely is not possible right now, cutting down can still help and is a positive step for your liver.",
    ],
    tryThisWeek: [
      "Ask how much scarring there is.",
      "Get medical help before stopping.",
      "Ask about a liver specialist.",
    ],
    ask: "Which stage is my liver disease at, and how much can my liver recover?",
    interactive: {
      kind: "timeline",
      title: "The three stages, one by one",
      steps: [
        { id: "fatty", when: "Stage 1", title: "Fatty liver", points: ["Fat builds up in the liver", "Often there are no symptoms", "The liver can usually recover if you stop drinking"] },
        { id: "hepatitis", when: "Stage 2", title: "Alcohol-related hepatitis", points: ["The liver is swollen and damaged", "Symptoms are likely", "The liver may recover from some of the damage"] },
        { id: "cirrhosis", when: "Stage 3", title: "Cirrhosis", points: ["The liver is badly damaged and scarred", "This damage cannot usually be reversed", "Stopping the cause can slow it down"] },
      ],
    },
    sources: [NHS_ARLD, LU_ARLD, LU_CIRRHOSIS, LU_ALCOHOL_FAQS],
    quiz: {
      question: "At which stage can the liver usually recover if you stop drinking?",
      options: [{ text: "Fatty liver, the first stage", right: true }, { text: "Only once there is cirrhosis" }, { text: "At none of the stages" }],
      why: "In the first stage, fat builds up in the liver. The liver can usually recover if you stop drinking.",
    },
  },
  {
    id: "arld-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms, and why might there be none?",
    hook: "Early on there are often no signs at all. Later ones, like yellow skin or a swollen tummy, mean the liver is struggling.",
    short: "ARLD does not always cause symptoms in the early stages, and many people are only diagnosed once it has become serious. Early signs can be vague, like tiredness or a poor appetite. Later symptoms such as jaundice, swelling and confusion mean telling a doctor straight away.",
    sections: [
      {
        heading: "Often no symptoms at first",
        paragraphs: [
          "ARLD does not always cause symptoms in the early stages. It's often diagnosed during tests for other conditions, and many people aren't diagnosed until their disease has become serious.",
          "It is not possible to tell just from symptoms if your liver is healthy or not. Even if you have no symptoms, if you are at risk and are worried, tell your doctor.",
        ],
      },
      {
        heading: "Early symptoms",
        paragraphs: [
          "Early symptoms may include feeling very tired, feeling less hungry than usual, losing weight without trying, and feeling or being sick. Some people have pain or discomfort in the upper right side of the tummy, where the liver is.",
          "Diarrhoea, feeling generally unwell and trouble sleeping can also be early signs. These are usually things that could also be caused by something else.",
        ],
      },
      {
        heading: "As the damage gets worse",
        paragraphs: [
          "As liver damage gets worse, symptoms may include yellowing of the skin or whites of the eyes, called jaundice. Yellowing of the skin may be harder to see on black or brown skin.",
          "Other symptoms include a high temperature, swelling of the tummy caused by a build-up of fluid, swollen legs, shaking hands, itching, and a tendency to bleed and bruise more easily, such as frequent nosebleeds and bleeding gums.",
          "Some people have periods of confusion, forgetting things, mood changes or poor judgement, sometimes called brain fog. Losing a lot of weight for no reason, and weakness and wasting of the muscles, can also happen.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Get medical help if you think you might have ARLD. Do not wait for symptoms to get worse. See a GP or an alcohol addiction support service if you have symptoms of liver disease.",
          "Call 999 or go to A&E if you're worried alcohol may be affecting your liver and you vomit blood, your poo is black and looks sticky, you have pain in your tummy, you have difficulty breathing, or you feel suddenly confused, feel dizzy or have difficulty staying awake.",
        ],
      },
    ],
    helps: [
      "If you think you might be at risk, do not wait until you get symptoms: speak to your GP.",
      "Tell a doctor straight away if you notice yellow skin or eyes, swelling, itching or bruising more easily.",
      "See a GP or an alcohol addiction support service if you have symptoms of liver disease.",
      "Call 999 or go to A&E if you vomit blood, your poo is black and sticky, or you feel suddenly confused.",
      "Ask for a test to check on your liver; this will usually be a simple blood test to start with.",
    ],
    tryThisWeek: [
      "Note any symptoms you have.",
      "Ask your GP for a liver test.",
      "Know the signs that mean 999.",
    ],
    ask: "Could my symptoms be coming from my liver, and which ones should I watch for?",
    interactive: {
      kind: "signs",
      title: "Symptoms to tell a doctor about",
      intro: "Tick any you have noticed. The later symptoms mean telling a doctor straight away.",
      signs: [
        "Feeling very tired",
        "Feeling less hungry than usual",
        "Losing weight without trying",
        "Feeling or being sick",
        "Pain in the upper right tummy",
        "Yellow skin or whites of the eyes",
        "Swelling of the tummy or legs",
        "Itching",
        "Bruising or bleeding more easily",
        "Confusion or forgetting things",
      ],
      after: "Tell a doctor straight away about the later symptoms. Vomiting blood, black sticky poo or sudden confusion means call 999 or go to A&E.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_ARLD, LU_ARLD, LU_SYMPTOMS],
    quiz: {
      question: "Can you tell from how you feel whether your liver is healthy?",
      options: [{ text: "No, early stages often cause no symptoms", right: true }, { text: "Yes, liver damage always hurts" }, { text: "Yes, you always feel tired" }],
      why: "It is not possible to tell just from symptoms if your liver is healthy or not.",
    },
  },
  {
    id: "arld-tests",
    kicker: "Tests",
    question: "How is alcohol-related liver disease diagnosed?",
    hook: "An honest talk about drinking, then blood tests and scans. Measuring scarring shows whether the damage can be reversed.",
    short: "A doctor will ask about your drinking and how it's affecting your life, then may arrange blood tests, scans or sometimes a liver biopsy. Measuring the scarring in your liver matters, because it shows how much damage there is and whether it can be reversed.",
    sections: [
      {
        heading: "Talking about drinking",
        paragraphs: [
          "To diagnose ARLD, a doctor will ask about your drinking and how it's affecting your life. You may be asked to fill in a questionnaire.",
          "It's really important to be totally honest about how much and how often you drink alcohol. Giving your doctor as much information as you can helps them to diagnose your condition correctly and give you the right care.",
        ],
      },
      {
        heading: "Blood tests and scans",
        paragraphs: [
          "Tests may include blood tests to check your liver health, scans such as an ultrasound or CT scan, and a liver biopsy, where a small sample is taken from your liver for testing. Some people also have an MRI scan or an endoscopy.",
          "A liver blood test is actually several different tests, but usually only one blood sample is needed. Tell the doctor about any medicines, herbal and natural remedies and supplements, as these can sometimes affect the results. It is possible to get a normal liver blood test with a serious liver condition.",
        ],
      },
      {
        heading: "Measuring scarring",
        paragraphs: [
          "It's very important that the amount of scarring in your liver is measured. Doctors use it when they're assessing liver damage, and whether it can be reversed. Scarring, called fibrosis, is usually measured on a scale of 0 to 4, and the higher the number, the more severe it is.",
          "Fibrosis blood tests include the ELF test and the FIB-4 test. A FibroScan is a quick and painless scan that shows how stiff your liver is. It should only take around 5 to 15 minutes in total, and it cannot diagnose a liver condition on its own.",
        ],
      },
      {
        heading: "When to ask for a check",
        paragraphs: [
          "If you've been regularly drinking over the guidelines for several months, it's important to get your liver checked. Liver UK says to ask your doctor for a liver scan if you are a woman and have been drinking over 35 units a week, or a man drinking over 50 units a week.",
          "You might only find out you have ARLD during tests for other health problems. Many people are only diagnosed after going to A&E with symptoms of serious liver disease. Even then, there is still a lot that can be done to stop it getting worse and even repair some of the damage.",
        ],
      },
      {
        heading: "What the results mean",
        paragraphs: [
          "A low-risk score means advanced fibrosis can be safely ruled out, and your doctor will do a fibrosis test every 2 years. An inconclusive result means you should be offered further tests. A high-risk score means you should be referred to a liver specialist.",
          "When you're diagnosed with ARLD, your doctor should refer you to a liver specialist. This will be a hepatologist, who specialises in liver disease, or a gastroenterologist, who specialises in the digestive system.",
        ],
      },
    ],
    helps: [
      "Be totally honest about how much and how often you drink alcohol.",
      "Tell the doctor about any medicines, herbal and natural remedies and supplements before a liver blood test.",
      "Before a FibroScan you will probably be asked not to eat for at least 3 hours; wear a separate top and bottom.",
      "Ask your doctor for a liver scan if you are a woman drinking over 35 units a week, or a man drinking over 50.",
      "Ask what your score was, what happens next, and who you can contact if you have questions.",
    ],
    tryThisWeek: [
      "Be honest about your drinking.",
      "List your medicines and supplements.",
      "Ask about a liver scan.",
    ],
    ask: "How much scarring is in my liver, and when should it be checked again?",
    interactive: {
      kind: "flip-cards",
      title: "Your tests, card by card",
      intro: "Turn each card to see what each test looks for.",
      cards: [
        { id: "talk", front: "Questions about drinking", when: "At the start", back: "A doctor asks about your drinking and how it's affecting your life, sometimes with a questionnaire." },
        { id: "lft", front: "Liver blood tests", when: "Usually the first test", back: "Several tests from one sample. A normal result is possible even with a serious liver condition." },
        { id: "fibrosis", front: "Fibrosis blood tests", when: "To measure scarring", back: "The ELF and FIB-4 tests check for scarring in the liver without a biopsy." },
        { id: "fibroscan", front: "FibroScan", when: "A quick, painless scan", back: "Shows how stiff your liver is. Higher numbers are generally linked to more scarring." },
        { id: "scans", front: "Ultrasound, CT or MRI", when: "Scans of the liver", back: "Pictures that help doctors see if drinking is affecting your liver." },
        { id: "biopsy", front: "Liver biopsy", when: "Sometimes", back: "A small sample taken from your liver for testing." },
      ],
    },
    sources: [NHS_ARLD, LU_ARLD, LU_ALCOHOL, LU_LFT, LU_FIBROSCAN, NHS_CIRRHOSIS, NHS_AUD],
    quiz: {
      question: "Why is the scarring in your liver measured?",
      options: [{ text: "To see how damaged it is and if it can be reversed", right: true }, { text: "To check your blood group" }, { text: "To decide what you should eat" }],
      why: "Doctors use it when they're assessing liver damage, and whether it can be reversed.",
    },
  },
  {
    id: "arld-stopping",
    kicker: "Treatment",
    question: "How do I stop or cut down safely?",
    hook: "If your body has come to depend on alcohol, stopping overnight can be dangerous. With medical help, it can be done safely.",
    short: "If you regularly drink too much alcohol, it can be very dangerous to stop suddenly, so get medical help before you try. Your GP or an alcohol service can help you cut down slowly, or stop with a planned withdrawal, often called a detox, and many people do this at home.",
    sections: [
      {
        heading: "Why stopping suddenly can be risky",
        paragraphs: [
          "If you regularly drink too much alcohol, it can be very dangerous to stop drinking suddenly. Get medical help before you try to stop drinking.",
          "If you stop drinking or cut down, you may get withdrawal symptoms. This is a sign your body is dependent on alcohol. Symptoms include anxiety, difficulty sleeping, feeling and being sick, a racing heartbeat, sweating and shaking.",
          "Withdrawal symptoms begin within 6 to 12 hours of your last drink, and usually last from 3 to 7 days. More serious problems can include seeing or hearing things that are not there, confusion and seizures, also called fits.",
        ],
      },
      {
        heading: "Signs you may need medicine",
        paragraphs: [
          "The NHS says mild or moderate withdrawal symptoms that suggest you may need medicine include anxiety after waking, sweating and mild tremors, nausea or retching in the morning, and vomiting.",
          "Liver UK describes physical withdrawal symptoms as shaking, sweating or feeling anxious until you have your first drink of the day. If you have these, speak to a doctor before trying to cut down or stop drinking.",
        ],
      },
      {
        heading: "Cutting down slowly",
        paragraphs: [
          "If you're dependent on alcohol, your doctor might recommend cutting down slowly rather than stopping straight away. Reducing the amount of alcohol you drink can still lead to a significant improvement in your condition.",
          "Talk to your doctor or your local alcohol services about a safe reduction plan for you. If quitting completely is not possible for you right now, cutting down can still help, and it is a positive step towards helping your liver.",
        ],
      },
      {
        heading: "A planned withdrawal, or detox",
        paragraphs: [
          "If you have moderate or severe alcohol dependence, it is more effective and safer to stop or reduce your drinking in a planned way with medical help. This is sometimes called detoxification, or detox.",
          "Most people receive support to stop drinking in the community. If you need medicine to help you stop drinking, it can often be taken at home or when attending a local service daily. Some people need a short stay in a medically supported unit.",
          "If you're at home, you'll need to regularly see a nurse or another health professional. A family member or carer should preferably help you to take the medicine correctly, in case you become unwell or confused.",
        ],
      },
      {
        heading: "After stopping",
        paragraphs: [
          "Cutting down or stopping drinking is usually just the beginning. Most people will need some degree of help or a long-term plan to stay in control or completely alcohol-free.",
          "Don't stress over a small mistake; nobody is perfect all the time. Just keep moving forward. Think over what happened and why, and whether there is something you could change for next time.",
        ],
      },
    ],
    helps: [
      "If you regularly drink too much alcohol, get medical help before you try to stop drinking.",
      "If you have shaking, sweating or feel anxious until your first drink of the day, speak to a doctor before cutting down.",
      "Talk to your doctor or local alcohol services about a safe reduction plan for you.",
      "If you have a planned withdrawal at home, a family member or carer can help you take the medicine correctly.",
      "Ask a GP or alcohol service what longer-term support is available in your area.",
      "Call 999 or go to A&E if someone has severe withdrawal symptoms, such as shaking visibly, confusion or a seizure.",
    ],
    tryThisWeek: [
      "Talk to a doctor before stopping.",
      "Ask for a safe reduction plan.",
      "Line up someone to help at home.",
    ],
    ask: "Is it safe for me to stop drinking suddenly, or should I cut down slowly?",
    interactive: {
      kind: "scenarios",
      title: "Stopping safely",
      scenarios: [
        {
          id: "sudden",
          situation: "You drink heavily every day and decide to stop tonight.",
          options: [{ text: "Get medical help before stopping", best: true }, { text: "Stop suddenly on your own" }],
          why: "If you regularly drink too much alcohol it can be very dangerous to stop drinking suddenly. Get medical help before you try to stop drinking.",
        },
        {
          id: "morning",
          situation: "You feel shaky and sweaty until your first drink of the day.",
          options: [{ text: "Speak to a doctor before cutting down", best: true }, { text: "Push through it alone" }],
          why: "If you have physical withdrawal symptoms, it can be dangerous to stop drinking suddenly. Speak to a doctor before trying to cut down or stop.",
        },
        {
          id: "not-ready",
          situation: "You don't feel able to stop completely yet.",
          options: [{ text: "Cut down, with a safe plan", best: true }, { text: "Change nothing until you can stop" }],
          why: "If quitting completely is not possible for you right now, cutting down can still help, and it is a positive step towards helping your liver.",
        },
        {
          id: "slip",
          situation: "You had a drink after a week without one.",
          options: [{ text: "Think over what happened, and keep going", best: true }, { text: "Give up on the plan" }],
          why: "Don't stress over a small mistake; nobody is perfect all the time. Just keep moving forward.",
        },
        {
          id: "severe",
          situation: "Someone who has stopped drinking is shaking visibly and seems confused.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait to see if it passes" }],
          why: "Call 999 or go to A&E if you or someone else has severe withdrawal symptoms after stopping drinking alcohol.",
        },
      ],
    },
    sources: [NHS_ARLD, NHS_AUD, NHS_SUPPORT, LU_ARLD, LU_ALCOHOL_FAQS, NICE_HARMFUL, NICE_TREAT, LU_ALCOHOL],
    quiz: {
      question: "When do alcohol withdrawal symptoms usually begin?",
      options: [{ text: "Within 6 to 12 hours of the last drink", right: true }, { text: "About a month after stopping" }, { text: "Only after a year" }],
      why: "Withdrawal symptoms begin within 6 to 12 hours of your last drink, and usually last from 3 to 7 days.",
    },
  },
  {
    id: "arld-support",
    kicker: "Support",
    question: "Where can I get support to stop drinking?",
    hook: "Lots of people need help to stop, and asking for it is nothing to be ashamed of. A GP is a good place to start.",
    short: "Stopping drinking can be difficult, and lots of people need some help. A GP or a local alcohol service can support you, with talking therapies, medicines and longer-term plans. Helplines like Drinkline and groups like Alcoholics Anonymous and SMART Recovery are there too.",
    sections: [
      {
        heading: "Nothing to feel ashamed of",
        paragraphs: [
          "Cutting down on alcohol can be hard, and lots of people struggle. If you are one of them, it is nothing to feel ashamed or embarrassed about.",
          "Deciding to make a change is the most important step. Getting help means you are more likely to succeed and to stick to it.",
        ],
      },
      {
        heading: "Starting with a GP",
        paragraphs: [
          "A good place to start is with a GP. Try to be accurate and honest about how much you drink and any problems it may be causing you. Lots of people drink more than they would like to, and your GP should be used to talking about this.",
          "Your GP can refer you to local alcohol services, who can help you understand your drinking and support you to either cut down or stop, whichever is best for you. You can also ask about free local support groups and alcohol counselling.",
        ],
      },
      {
        heading: "What treatment can include",
        paragraphs: [
          "Support may include talking therapies such as cognitive behavioural therapy (CBT), medicines to help you stop drinking safely or to reduce cravings, and support groups such as Alcoholics Anonymous.",
          "Treatment can also include support to make positive changes in other areas of your life, such as your relationships, and help with other things, for example employment or housing.",
          "Care staff should build a supportive relationship with you based on trust and understanding. Your confidentiality, privacy and dignity should be respected at all times.",
        ],
      },
      {
        heading: "Helplines and groups",
        paragraphs: [
          "Drinkline is the national alcohol helpline. If you're worried about your own or someone else's drinking, you can call it free and in complete confidence on 0300 123 1110, weekdays 9am to 8pm and weekends 11am to 4pm.",
          "Alcoholics Anonymous is a free self-help group, with a 12 step programme and regular support groups. SMART Recovery groups help people decide whether they have a problem, build up their motivation to change, and offer tools and techniques to support recovery.",
        ],
      },
      {
        heading: "Support for your liver",
        paragraphs: [
          "Liver UK runs a free nurse-led helpline on 0800 652 7330, from 9am to 4pm Monday to Friday, excluding bank holidays. Calls are always answered by a specialist nurse, but the helpline is not an emergency number.",
          "Liver UK also runs support groups for adults affected by liver disease, face to face and online, including for family members and carers. Getting the right support can be crucial to staying in control in the future.",
        ],
      },
    ],
    helps: [
      "Start with a GP, and try to be accurate and honest about how much you drink.",
      "Ask about local alcohol services, free local support groups and alcohol counselling.",
      "Call Drinkline free and in complete confidence on 0300 123 1110.",
      "Try a self-help or mutual aid group, such as Alcoholics Anonymous or SMART Recovery.",
      "Call Liver UK's nurse-led helpline on 0800 652 7330 with questions about your liver.",
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Save Drinkline's number.",
      "Look up a local group.",
    ],
    ask: "Can I be referred to an alcohol support service, and what would it involve?",
    interactive: {
      kind: "flip-cards",
      title: "Where to find support",
      intro: "Turn each card to see what each one offers.",
      cards: [
        { id: "gp", front: "Your GP", when: "A good place to start", back: "Talks about your drinking and can refer you to local alcohol services." },
        { id: "service", front: "Local alcohol services", when: "Often through your GP", back: "Help you understand your drinking and support you to cut down or stop, whichever is best for you." },
        { id: "drinkline", front: "Drinkline", when: "0300 123 1110", back: "The national alcohol helpline: free and in complete confidence, for your own or someone else's drinking." },
        { id: "aa", front: "Alcoholics Anonymous", when: "A free self-help group", back: "A 12 step programme of getting sober with the help of regular support groups." },
        { id: "smart", front: "SMART Recovery", when: "Groups, including online", back: "Helps build motivation to change, with tools and techniques to support recovery." },
        { id: "liver", front: "Liver UK helpline", when: "0800 652 7330", back: "Free, answered by specialist liver nurses, 9am to 4pm Monday to Friday. Not an emergency number." },
      ],
    },
    sources: [NHS_ARLD, NHS_SUPPORT, LU_ALCOHOL, LU_HELPLINE, LU_GROUPS, NICE_SEE, NHS_AUD],
    quiz: {
      question: "Where is a good place to start getting help with drinking?",
      options: [{ text: "A GP", right: true }, { text: "Only a private clinic" }, { text: "Nowhere: it has to be done alone" }],
      why: "A good place to start is with a GP. Your GP should be used to talking about this.",
    },
  },
  {
    id: "arld-medicines",
    kicker: "Treatment",
    question: "Which medicines can help?",
    hook: "Some medicines ease withdrawal, some help you stay alcohol-free, and some treat the liver. Each one is chosen with care.",
    short: "Medicines can help at different points. During a planned withdrawal, medicine can ease symptoms. Afterwards, acamprosate or naltrexone can reduce cravings, and disulfiram is sometimes used. Thiamine (vitamin B1) helps protect the brain, and some people with severe alcohol-related hepatitis are treated in hospital.",
    sections: [
      {
        heading: "During withdrawal",
        paragraphs: [
          "Taking medicine during a planned withdrawal from alcohol can help to reduce withdrawal symptoms. The medicine usually offered is called a benzodiazepine, but it should not be offered if your liver is badly damaged.",
          "You should see care staff at least every other day so they can check how well the medicine is helping you. Benzodiazepines should not be offered for treating alcohol dependence in the long term.",
        ],
      },
      {
        heading: "Medicines to stay alcohol-free",
        paragraphs: [
          "Medicines for alcohol-use disorder can help you to avoid drinking. They're usually offered once you've stopped drinking and need help to stay sober, together with a psychological treatment.",
          "Acamprosate and naltrexone help reduce alcohol cravings, and NICE says they should be offered first. You can take them for up to 6 months, or longer if the medicine is helping. Naltrexone stops painkillers that contain opioids, such as morphine or codeine, from working.",
          "Disulfiram causes unpleasant effects, such as a headache, feeling sick, a high body temperature and heart palpitations, when combined with alcohol. Some foods, perfumes and sprays contain alcohol and can react with it too. Treatment should start at least 24 hours after your last drink.",
        ],
      },
      {
        heading: "Thiamine, or vitamin B1",
        paragraphs: [
          "People who drink heavily over a long period of time, particularly those who are not eating properly, often have low levels of thiamine. A lack of thiamine can cause serious harm to the brain and nervous system.",
          "NICE says you should be offered thiamine if you have alcohol-related liver disease, as an injection and then as tablets. This helps prevent a serious long-term condition called Wernicke–Korsakoff syndrome.",
        ],
      },
      {
        heading: "Medicines for the liver",
        paragraphs: [
          "Using medicine to directly treat alcohol-related liver disease is complex, and there's generally a lack of good evidence for it. That's why it's important to have a specialist co-ordinating your care, and to understand the plan they have put in place for you.",
          "If you have severe alcohol-related hepatitis, you may need to be treated in hospital, and specialists may use steroids in some patients to reduce liver damage. Liver UK says steroids have been shown to help in the short term but not over a longer term, and they increase the risk of serious infections in the first 3 months.",
          "Other medicines used for liver disease and its complications include antibiotics, beta blockers to reduce bleeding, and medicine to make you pee more and help reduce swelling.",
        ],
      },
      {
        heading: "Taking medicines safely",
        paragraphs: [
          "Check with a pharmacist or doctor before taking any medicines, including herbal medicines, as they may not be suitable if you have cirrhosis.",
          "Some treatments may not be suitable for you, depending on your exact circumstances. If you have questions about a medicine, talk to a member of your care team.",
        ],
      },
    ],
    helps: [
      "Ask whether acamprosate or naltrexone could help reduce your cravings once you've stopped drinking.",
      "If you take naltrexone, know that it stops painkillers containing opioids, such as codeine, from working.",
      "If you feel very unwell on disulfiram, or get a fever or jaundice, contact your care team straight away.",
      "If you have alcohol-related liver disease, ask about thiamine (vitamin B1).",
      "Check with a pharmacist or doctor before taking any medicines, including herbal medicines.",
      "If you have been in hospital, ask about aftercare before you are discharged.",
    ],
    tryThisWeek: [
      "Ask about medicines for cravings.",
      "Ask about thiamine.",
      "Check new medicines with a pharmacist.",
    ],
    ask: "Could a medicine help me stay alcohol-free, and which medicines are safe for my liver?",
    interactive: {
      kind: "flip-cards",
      title: "Medicines, card by card",
      intro: "Turn each card to see when each medicine is used and what it does.",
      cards: [
        { id: "benzo", front: "Benzodiazepine", when: "During a planned withdrawal", back: "Helps reduce withdrawal symptoms. Not offered if the liver is badly damaged, or for the long term." },
        { id: "acamprosate", front: "Acamprosate", when: "After stopping drinking", back: "Helps reduce alcohol cravings. Taken for up to 6 months, or longer if it is helping." },
        { id: "naltrexone", front: "Naltrexone", when: "After stopping drinking", back: "Helps reduce cravings. Stops painkillers that contain opioids, such as codeine, from working." },
        { id: "disulfiram", front: "Disulfiram", when: "If the others are not suitable", back: "Causes unpleasant effects, like feeling sick and heart palpitations, when combined with alcohol." },
        { id: "thiamine", front: "Thiamine (vitamin B1)", when: "With alcohol-related liver disease", back: "Helps prevent Wernicke–Korsakoff syndrome, which harms the brain and nervous system." },
        { id: "steroids", front: "Steroids", when: "Severe alcohol-related hepatitis", back: "Used in hospital in some patients to reduce liver damage. They raise the risk of serious infections." },
      ],
    },
    sources: [NHS_AUD, NICE_TREAT, NICE_OTHER, LU_ARLD, NHS_CIRRHOSIS],
    quiz: {
      question: "When are medicines like acamprosate usually offered?",
      options: [{ text: "Once you've stopped drinking, to help you stay sober", right: true }, { text: "Before your first drink of the day" }, { text: "Only after a liver transplant" }],
      why: "They're usually offered once you've stopped drinking and need help to stay sober, together with a psychological treatment.",
    },
  },
  {
    id: "arld-treatment",
    kicker: "Treatment",
    question: "How is the liver damage itself treated?",
    hook: "Stopping drinking lets the liver repair. When damage is advanced, treatment protects what is left, and a transplant is possible.",
    short: "The main treatment is to stop drinking alcohol completely, which gives the liver the best chance to repair itself. In earlier stages the aim is to cure the condition; in later stages it is to stop it getting worse and treat complications. If the liver is very badly damaged, a liver transplant may be considered.",
    sections: [
      {
        heading: "The main aim",
        paragraphs: [
          "The aim of treatment for ARLD is usually to help you stop drinking alcohol completely. This is important whatever stage of ARLD you have.",
          "Your liver is the only internal organ that can repair itself. If you can stop drinking alcohol and eat healthily, you'll reduce the risk of further damaging your liver and give it the best chance of recovering.",
        ],
      },
      {
        heading: "Treatment depends on the stage",
        paragraphs: [
          "If your liver disease is at an early to moderate stage, the aim will be to cure your condition, by giving your liver a chance to repair itself and preventing further damage.",
          "If it's more advanced, your treatment will aim to stabilise your liver disease and stop it from getting worse. You will be treated for any complications, such as bloating from fluid or bleeding.",
          "With alcohol-related fatty liver, the damage may be reversed if you stop for a period of time, months or years. Speak to your doctor if you are thinking of starting drinking again, as it may not be safe if you have a dependence on alcohol. With alcohol-related hepatitis or cirrhosis, your doctor will advise you to stop drinking completely, for life.",
        ],
      },
      {
        heading: "Treating complications",
        paragraphs: [
          "If your liver is badly damaged, you may need treatment in hospital. Treatments for complications of cirrhosis may include laxative medicine to help remove toxins, beta blockers to reduce bleeding, medicine to help reduce swelling, and antibiotics.",
          "It is also possible to reverse decompensation, usually by treating the cause of the liver damage or the trigger. You'll be supported by different healthcare professionals, which may include a liver specialist, a dietitian and alcohol support services.",
        ],
      },
      {
        heading: "Regular checks",
        paragraphs: [
          "It's important to have regular appointments with your doctor or specialist so they can monitor your condition. You should also have fibrosis tests to check the scarring in your liver every 2 years, as there are often no symptoms to warn you if it is getting worse.",
          "If you have cirrhosis, you'll need monitoring every 6 months for the rest of your life. This includes checking for a type of liver cancer called hepatocellular carcinoma.",
        ],
      },
      {
        heading: "Liver transplant",
        paragraphs: [
          "If your liver is very badly damaged, a liver transplant could be life-saving. It's usually only recommended if other treatments are no longer helpful. There's a general assumption that you can't have a transplant with later stage ARLD, but this isn't true.",
          "To be eligible, you need to have stopped drinking completely. Your liver transplant team can support you to stop drinking, and the most important thing is that you're open and honest with your medical team.",
          "A transplant is a major operation, and it can take up to a year to recover. Most people are able to leave hospital around 10 days after surgery, and need lifelong medicine to control the immune system. There are 7 transplant units in the UK.",
        ],
      },
    ],
    helps: [
      "Aim to stop drinking alcohol completely; this is important whatever stage of ARLD you have.",
      "Have regular appointments with your doctor or specialist so they can monitor your condition.",
      "If you have cirrhosis, go to your monitoring every 6 months.",
      "If you have been admitted to hospital, ask about aftercare before you are discharged.",
      "If you have later stage liver disease, ask your liver specialist about having a transplant.",
      "Be open and honest with your medical team about drinking, so they can support you in the best way.",
    ],
    tryThisWeek: [
      "Book your next liver check.",
      "Ask about aftercare.",
      "Ask if a transplant is an option.",
    ],
    ask: "What is the aim of my treatment, and could a transplant ever be an option for me?",
    interactive: {
      kind: "timeline",
      title: "Treatment, step by step",
      steps: [
        { id: "stop", when: "First", title: "Stop drinking", points: ["Important whatever stage you have", "Get medical help before stopping", "Gives the liver the best chance to recover"] },
        { id: "early", when: "Early to moderate stage", title: "Aim to cure", points: ["Give the liver a chance to repair itself", "Prevent further damage"] },
        { id: "advanced", when: "More advanced", title: "Stabilise and treat complications", points: ["Stop it from getting worse", "Treat fluid build-up or bleeding", "A team of specialists supports you"] },
        { id: "checks", when: "Ongoing", title: "Regular checks", points: ["Fibrosis tests every 2 years", "With cirrhosis, monitoring every 6 months"] },
        { id: "transplant", when: "If very badly damaged", title: "Liver transplant", points: ["When other treatments no longer help", "Having stopped drinking completely", "Lifelong medicine afterwards"] },
      ],
    },
    sources: [NHS_ARLD, LU_ARLD, NHS_CIRRHOSIS, LU_CIRRHOSIS, LU_TX_WHO],
    quiz: {
      question: "Can people with later stage ARLD have a liver transplant?",
      options: [{ text: "Yes, if it is right for them and they have stopped drinking", right: true }, { text: "No, never" }, { text: "Only after waiting 10 years" }],
      why: "There's a general assumption that you can't have a transplant with later stage ARLD, but this isn't true. To be eligible, you need to have stopped drinking completely.",
    },
  },
  {
    id: "arld-units",
    kicker: "Living well",
    question: "What are units, and what are the drinking guidelines?",
    hook: "14 units a week sounds like a lot, until you count them. Here is how units add up, and what the guidelines mean with a liver condition.",
    short: "A unit is 10ml of pure alcohol. To keep risks low, the advice is no more than 14 units a week, spread over 3 or more days, with several drink-free days. There's no safe level, and with alcohol-related liver disease the aim is usually to stop drinking completely.",
    sections: [
      {
        heading: "What a unit is",
        paragraphs: [
          "Units are a simple way of expressing the quantity of pure alcohol in a drink. One unit equals 10ml or 8g of pure alcohol, which is around the amount of alcohol the average adult can process in an hour.",
          "The number of units in a drink is based on the size of the drink and its alcohol strength, called ABV. You can find the ABV on the labels of cans and bottles, or you can ask bar staff.",
        ],
      },
      {
        heading: "The weekly guidelines",
        paragraphs: [
          "Men and women are advised not to drink more than 14 units a week on a regular basis. Spread your drinking over 3 or more days, and try to have several drink-free days each week.",
          "14 units is equivalent to 6 pints of average-strength beer or 10 small glasses of lower-strength wine. A 750ml bottle of red, white or rosé wine contains 10 units.",
        ],
      },
      {
        heading: "No safe level",
        paragraphs: [
          "Drinking less than 14 units a week is called low risk rather than safe, because there's no safe drinking level. The less you drink, the lower the health risks.",
          "Binge drinking means drinking more than 8 units of alcohol in a single session for men, or more than 6 units for women. A heavy drinking day can quickly harm your liver, especially if it's already damaged.",
        ],
      },
      {
        heading: "With a liver condition",
        paragraphs: [
          "The guidelines are for keeping health risks low if your liver is healthy. If you already have a liver condition, it is important to get personal advice, and your specialist liver team are the best people to talk to.",
          "With ARLD, the aim of treatment is usually to stop drinking alcohol completely, whatever stage you have. If you have a more serious form, such as alcohol-related hepatitis or cirrhosis, your doctor will advise you to stop drinking completely.",
          "Even drinks labelled alcohol free can have a very small amount of alcohol in them. So they are not suitable if it is vital that you completely stop drinking alcohol.",
        ],
      },
      {
        heading: "Counting your drinks",
        paragraphs: [
          "It is the amount of alcohol in a drink that matters, not the type of drink. A pint of strong lager contains 3 units of alcohol, whereas the same volume of lower-strength lager has just over 2 units.",
          "To cut down, set a limit before you start drinking, go for smaller sizes or lower-strength drinks, and alternate alcoholic drinks with water or other non-alcoholic drinks.",
        ],
      },
    ],
    helps: [
      "Keep to no more than 14 units a week on a regular basis, spread over 3 or more days.",
      "Try to have several drink-free days each week.",
      "Check the ABV on the label to see how strong a drink is.",
      "Set a limit before you start drinking, and alternate alcoholic drinks with water or soft drinks.",
      "If you have a liver condition, ask your specialist liver team for personal advice about alcohol.",
    ],
    tryThisWeek: [
      "Count your units this week.",
      "Plan some drink-free days.",
      "Set a limit before drinking.",
    ],
    ask: "Is any alcohol safe for me, given the state of my liver?",
    interactive: {
      kind: "scenarios",
      title: "Counting units",
      scenarios: [
        {
          id: "saving",
          situation: "You plan to save your week's units for Saturday night.",
          options: [{ text: "Spread drinking over 3 or more days", best: true }, { text: "Have them all in one night" }],
          why: "Spread your drinking over 3 or more days. A heavy drinking day can quickly harm your liver, especially if it's already damaged.",
        },
        {
          id: "strong",
          situation: "Two pints look the same, but one is a strong lager.",
          options: [{ text: "Check the ABV on the label", best: true }, { text: "Count them the same" }],
          why: "A pint of strong lager contains 3 units of alcohol, whereas the same volume of lower-strength lager has just over 2 units.",
        },
        {
          id: "cirrhosis",
          situation: "You've been told you have alcohol-related cirrhosis.",
          options: [{ text: "Stop drinking completely, with medical help", best: true }, { text: "Keep to 14 units a week" }],
          why: "If you have a more serious form, such as alcohol-related hepatitis or cirrhosis, your doctor will advise you to stop drinking completely.",
        },
        {
          id: "alcohol-free",
          situation: "You've stopped drinking and see an alcohol-free beer.",
          options: [{ text: "Check with your medical team first", best: true }, { text: "Assume it has no alcohol at all" }],
          why: "Even drinks labelled alcohol free can have a very small amount of alcohol in them.",
        },
      ],
    },
    sources: [NHS_UNITS, NHS_RISKS, NHS_ARLD, LU_ALCOHOL, NHS_TIPS, LU_ALCOHOL_FAQS, LU_ARLD],
    quiz: {
      question: "What is the weekly low-risk guideline for men and women?",
      options: [{ text: "No more than 14 units", right: true }, { text: "No more than 28 units for men" }, { text: "Any amount, if it is spread out" }],
      why: "Men and women are advised not to drink more than 14 units a week on a regular basis.",
    },
  },
  {
    id: "arld-food",
    kicker: "Living well",
    question: "What should I eat to help my liver recover?",
    hook: "Many people with ARLD are not getting enough nourishment. Eating well, and often, helps the liver heal and keeps muscles strong.",
    short: "A lot of people with alcohol-related liver disease are malnourished, and that makes it harder for the liver to recover. In earlier stages, a well-balanced diet is the aim. With alcohol-related hepatitis or cirrhosis, you may need more energy and protein, less salt, and to eat little and often.",
    sections: [
      {
        heading: "Why food matters",
        paragraphs: [
          "A lot of people with alcohol-related liver disease are malnourished. Not getting the right nutrients from your diet makes it harder for your liver to recover, so eating well is key to treating your condition.",
          "There are no foods or supplements that can prevent or undo damage caused to your liver by alcohol. But eating a healthy balanced diet can help your recovery.",
        ],
      },
      {
        heading: "Earlier stages",
        paragraphs: [
          "For earlier stage ARLD, focus on a well-balanced diet with lots of vegetables, fruit, wholegrain carbohydrates such as wholemeal bread or brown rice, and lean protein such as chicken, fish or tofu.",
          "Cut down on highly processed foods and snacks, especially those high in fat, sugar or salt. It's important to keep your weight healthy: carrying extra bodyweight can cause liver damage too, and being underweight could be a sign that you are malnourished.",
        ],
      },
      {
        heading: "With hepatitis or cirrhosis",
        paragraphs: [
          "If you have alcohol-related hepatitis or cirrhosis, you may need special advice to make sure you get enough energy and protein, and not too much salt. This helps prevent muscle wasting and weakness. Around 2 in 10 people with compensated cirrhosis are malnourished, rising to more than 5 in 10 with decompensated cirrhosis.",
          "People with cirrhosis often eat little and often. Instead of three main meals, aim to eat something every 2 to 3 hours, and have a snack before bedtime that is high in starchy carbohydrates, such as cereal or porridge.",
          "Protein can come from beans and pulses, nuts, eggs, cheese and other dairy, fish and meat. People with hepatic encephalopathy, which causes confusion, should also eat more protein. In the past they were advised to cut down on protein, but we now know this is wrong.",
        ],
      },
      {
        heading: "Salt and swelling",
        paragraphs: [
          "Cirrhosis can lead to fluid building up in the feet and legs or in the tummy. Your health professional might advise you to cut down on salt, for example with a no added salt diet. If you do, it is very important to get advice from a registered dietitian.",
          "Tips include not adding salt to meals at the table, avoiding very salty foods such as ham, bacon and sausages, and avoiding products with a red traffic light for salt. Pepper, vinegar, herbs, spices and lemon juice can add flavour instead.",
        ],
      },
      {
        heading: "Getting the right advice",
        paragraphs: [
          "Talk to your clinical team before making any changes to your diet. Your diet should be regularly reviewed by a liver specialist or a dietitian with experience in advising people with liver disease.",
          "Some supplements you can buy can cause more liver damage, so talk to your doctor or a registered dietitian before you try any. If you are prescribed supplements, you should always take them. People who drink heavily often have low levels of thiamine, also called vitamin B1.",
          "Doing regular physical activity can help keep you strong and prevent muscle wasting. Do what you can manage each day: doing something, even something small, is much better than nothing.",
        ],
      },
    ],
    helps: [
      "Eat a well-balanced diet with lots of vegetables, fruit, wholegrain carbohydrates and lean protein.",
      "If you have cirrhosis, eat something every 2 to 3 hours and have a starchy snack before bedtime.",
      "Do not add salt to meals at the table, and avoid products with a red traffic light for salt.",
      "Ask your doctor to refer you to a dietitian for advice that is specific to you.",
      "Talk to your doctor or a registered dietitian before trying any supplements.",
      "Do some physical activity each day to help keep your muscles strong.",
    ],
    tryThisWeek: [
      "Add vegetables and lean protein.",
      "Try a starchy snack before bed.",
      "Ask about seeing a dietitian.",
    ],
    ask: "Do I need more protein or less salt, and can I see a dietitian?",
    interactive: {
      kind: "scenarios",
      title: "Everyday food choices",
      scenarios: [
        {
          id: "appetite",
          situation: "You have cirrhosis and only feel like one big meal a day.",
          options: [{ text: "Eat something every 2 to 3 hours", best: true }, { text: "Keep to one big meal" }],
          why: "Eating more often means your body doesn't start breaking down the protein in your muscles for energy.",
        },
        {
          id: "bedtime",
          situation: "It's late in the evening, and you have cirrhosis.",
          options: [{ text: "Have a starchy snack, like porridge", best: true }, { text: "Skip food until morning" }],
          why: "Eat a snack before bedtime. This should be something high in starchy carbohydrates such as cereal, porridge, rice pudding or shortbread.",
        },
        {
          id: "protein",
          situation: "You've read that confusion from liver disease means eating less protein.",
          options: [{ text: "Keep eating protein, as advised", best: true }, { text: "Cut down on protein" }],
          why: "In the past, patients were advised to cut down on protein. We now know this is wrong.",
        },
        {
          id: "milk-thistle",
          situation: "A friend suggests milk thistle to heal your liver.",
          options: [{ text: "Talk to your doctor first", best: true }, { text: "Start taking it today" }],
          why: "There is no strong evidence to support milk thistle, and it might interfere with some medicines. Do not use it without discussing it with your doctor.",
        },
      ],
    },
    sources: [LU_ARLD, LU_DIET_CIRRHOSIS, LU_DIET_LIVER, LU_ALCOHOL_FAQS, NICE_OTHER, LU_ACTIVITY],
    quiz: {
      question: "Why is eating well so important with ARLD?",
      options: [{ text: "Poor nutrition makes it harder for the liver to recover", right: true }, { text: "Food can undo alcohol damage on its own" }, { text: "It makes no difference" }],
      why: "Not getting the right nutrients from your diet makes it harder for your liver to recover, so eating well is key to treating your condition.",
    },
  },
  {
    id: "arld-family",
    kicker: "Family and friends",
    question: "How can family and friends help, and get support themselves?",
    hook: "Someone close to you may need help before they know it themselves. You can support them, and you deserve support too.",
    short: "Family and friends can play an important part in helping someone stay alcohol-free, and in noticing early when there is a risk. It helps to make changes together and to know where to find help. Caring is hard, so support for you matters too, from Al-Anon, Adfam, Drinkline and Liver UK.",
    sections: [
      {
        heading: "If you are worried",
        paragraphs: [
          "Sometimes you can suspect your loved one has a problem before they know it themselves. If they are at risk of a liver condition, helping them to get help as soon as possible can make a big difference.",
          "Many people do not get symptoms until they are already very unwell, so do not wait for symptoms if you think your loved one might be at risk. Liver UK says 9 in 10 cases of liver disease in the UK could be prevented if people were able to make some changes before they are unwell.",
        ],
      },
      {
        heading: "Making changes together",
        paragraphs: [
          "Making changes together can make them easier to stick to. You could decide together to only have a drink at the weekends, or your loved one could swap some of their regular drinks for non-alcoholic versions.",
          "But if cutting down or stopping is very difficult, then it is important to seek help. Drinkline's free helpline, 0300 123 1110, is there if you're worried about your own or someone else's drinking.",
        ],
      },
      {
        heading: "Supporting treatment",
        paragraphs: [
          "Families and carers can play an important part in supporting a person with a drinking problem and helping them to stay alcohol-free after treatment. If your loved one agrees, you should be given information on how you can support them, for example when taking their medicine.",
          "Care staff should respect their privacy if they would prefer not to have anyone else involved in their treatment. Care staff should also respect your privacy.",
          "It is up to your loved one whether they tell people about their condition, and it is ok to just say no thanks to a drink. Picking just 1 or 2 people to help out in situations where there is pressure to drink can help.",
        ],
      },
      {
        heading: "Everyday life",
        paragraphs: [
          "Often a family member or carer is the person looking after things day to day, from medicines and hospital appointments to special diets and household finances. A pharmacist can explain what each medicine is and what it is used for.",
          "Some people with serious liver disease become confused or have problems with memory, from a condition called hepatic encephalopathy. It is a good idea to talk about this before it becomes a problem. A lasting power of attorney lets your loved one choose someone to make decisions if they can no longer make them.",
        ],
      },
      {
        heading: "Support for you",
        paragraphs: [
          "As well as caring for your loved one, it is important to care for yourself. Anyone with a caring role has the right to a carer's assessment.",
          "Al-Anon Family Groups offer support and understanding to the families and friends of people with a drinking problem, whether they're still drinking or not. Adfam works with families affected by drugs and alcohol. Nacoa runs a free, confidential helpline for children of alcohol-dependent parents on 0800 358 3456.",
          "Liver UK's nurse-led helpline, 0800 652 7330, talks to lots of carers and family members, and Liver UK runs support groups, including a group for carers. Samaritans offers support 24 hours a day on 116 123, whatever you are going through.",
        ],
      },
    ],
    helps: [
      "Do not wait for symptoms if you think your loved one might be at risk.",
      "Make changes together, such as only having a drink at weekends or swapping to non-alcoholic versions.",
      "If your loved one agrees, ask their care team how you can support their treatment.",
      "Ask for a carer's assessment: anyone with a caring role has the right to one.",
      "Contact Al-Anon, Adfam or Drinkline for support for yourself.",
      "Call Liver UK's helpline on 0800 652 7330, or join a support group for carers.",
    ],
    tryThisWeek: [
      "Make one change together.",
      "Ask for a carer's assessment.",
      "Save a support line's number.",
    ],
    ask: "How can I be involved in my loved one's care, and what support is there for me?",
    interactive: {
      kind: "scenarios",
      title: "Moments for families",
      scenarios: [
        {
          id: "worried",
          situation: "You think your partner's drinking could be harming their liver.",
          options: [{ text: "Help them get help early", best: true }, { text: "Wait until they have symptoms" }],
          why: "Many people do not get symptoms until they are already very unwell. So do not wait for symptoms if you think your loved one might be at risk.",
        },
        {
          id: "party",
          situation: "Your loved one has stopped drinking and is going to a party.",
          options: [{ text: "Offer to help out if there is pressure to drink", best: true }, { text: "Tell everyone about their condition" }],
          why: "It is up to them if they tell people. Picking just 1 or 2 people to help out where there is pressure to drink can help.",
        },
        {
          id: "privacy",
          situation: "Your loved one would rather you were not involved in their treatment.",
          options: [{ text: "Respect their privacy", best: true }, { text: "Insist on going to every appointment" }],
          why: "Care staff should respect their privacy if they would prefer not to have anyone else involved in their treatment.",
        },
        {
          id: "you",
          situation: "You feel worn out from caring.",
          options: [{ text: "Look for support for yourself", best: true }, { text: "Keep going without help" }],
          why: "As well as caring for your loved one, it is important to care for yourself.",
        },
      ],
    },
    sources: [LU_FAMILY_WORRIED, LU_FAMILY_SUPPORT, NICE_FAMILY, NHS_SUPPORT, LU_FAMILY_DIAGNOSED, LU_FAMILY_EVERYDAY, LU_ALCOHOL_FAQS],
    quiz: {
      question: "Who has the right to a carer's assessment?",
      options: [{ text: "Anyone with a caring role", right: true }, { text: "Only paid carers" }, { text: "Only close relatives" }],
      why: "Anyone with a caring role has the right to a carer's assessment.",
    },
  },
  {
    id: "arld-urgent",
    kicker: "Urgent help",
    question: "Which warning signs need help straight away?",
    hook: "Some signs, from the liver or from alcohol withdrawal, are emergencies. Knowing them means not waiting when it matters.",
    short: "Call 999 or go to A&E if you vomit blood, your poo is black and sticky, you have tummy pain or difficulty breathing, or you feel suddenly confused, dizzy or find it hard to stay awake. Severe withdrawal symptoms, such as visible shaking, seeing things that are not there or a seizure, are an emergency too.",
    sections: [
      {
        heading: "Signs from the liver",
        paragraphs: [
          "Call 999 or go to A&E if you're worried alcohol may be affecting your liver and you vomit blood, or your poo is black and looks sticky.",
          "Also call 999 or go to A&E if you have pain in your tummy, difficulty breathing or shortness of breath, or you feel suddenly confused, feel dizzy or have difficulty staying awake.",
          "Liver UK also lists jaundice, a yellow colour to your eyes or skin, if you have not had this before. These signs might not be caused by liver disease, but it is important to get checked out and looked after.",
        ],
      },
      {
        heading: "Signs of severe withdrawal",
        paragraphs: [
          "Call 999 or go to A&E if you or someone else has severe withdrawal symptoms after stopping drinking alcohol. These include shaking visibly, being unusually restless, irritable or upset, and confusion, for example not knowing what day it is.",
          "Seeing, hearing or feeling things that are not there, and having a seizure or fit, are also signs to call 999.",
        ],
      },
      {
        heading: "If you have cirrhosis",
        paragraphs: [
          "If you've been diagnosed with cirrhosis, call 999 or go to A&E if you're vomiting blood, your poo is very dark or black, or you suddenly become confused or have slurred speech.",
          "Ask for an urgent GP appointment or get help from NHS 111 if your skin or the whites of your eyes look yellow, you are more short of breath than usual, or you have a swollen tummy, legs, ankles or feet.",
        ],
      },
      {
        heading: "Getting there safely",
        paragraphs: [
          "Do not drive to A&E. Ask someone to drive you, or call 999 and ask for an ambulance. Bring any medicines you take with you.",
          "Liver UK's helpline is not an emergency number. If you have a specific medical question, call 111, or in an emergency call 999.",
        ],
      },
      {
        heading: "Signs to see a GP about",
        paragraphs: [
          "See a GP or an alcohol addiction support service if you have symptoms of liver disease, or you're worried about your drinking. Do not wait for symptoms to get worse.",
          "Also see a GP if you get symptoms like anxiety, difficulty sleeping, sweating or feeling and being sick when you try to stop drinking, or if you're worried about someone else's drinking.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E if you vomit blood, or your poo is black and looks sticky.",
      "Call 999 or go to A&E if you feel suddenly confused, feel dizzy or have difficulty staying awake.",
      "Call 999 or go to A&E for severe withdrawal symptoms, such as shaking visibly or a seizure.",
      "With cirrhosis, ask for an urgent GP appointment or get help from NHS 111 for yellow skin or eyes, breathlessness or swelling.",
      "Do not drive to A&E: ask someone to drive you or call 999, and bring any medicines you take.",
    ],
    tryThisWeek: [
      "Learn the signs that mean 999.",
      "Know when to use NHS 111.",
      "Keep your medicines ready to take.",
    ],
    ask: "Which symptoms mean I should call 999, and which mean calling my liver team or NHS 111?",
    interactive: {
      kind: "signs",
      title: "Signs that need help straight away",
      intro: "Tick any that are happening now. These need emergency help, not waiting.",
      signs: [
        "Vomiting blood",
        "Black, sticky poo",
        "Pain in the tummy",
        "Difficulty breathing",
        "Suddenly confused or dizzy",
        "Difficulty staying awake",
        "Shaking visibly after stopping drinking",
        "Seeing or hearing things not there",
        "A seizure or fit",
      ],
      after: "Call 999 or go to A&E now. Do not drive yourself: ask someone to drive you, or call 999 and ask for an ambulance.",
      copyHeading: "Signs happening now",
    },
    sources: [NHS_ARLD, NHS_AUD, NHS_SUPPORT, NHS_CIRRHOSIS, LU_SYMPTOMS, LU_HELPLINE],
    quiz: {
      question: "Someone who has stopped drinking has a seizure. What should you do?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Wait to see if it happens again" }, { text: "Book a GP appointment next week" }],
      why: "Call 999 or go to A&E if you or someone else has severe withdrawal symptoms after stopping drinking alcohol.",
    },
  },
];
