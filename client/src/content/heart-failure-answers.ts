import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Heart failure page's pieces (content/library-conditions/heart-more.ts
// `heartFailure`). Every sentence was written from wording checked on 21 October 2026 on the pages listed
// under each answer's `sources`; nothing is added that those pages do not say. Much of it comes from the NHS
// heart failure page and the British Heart Foundation's "Understanding heart failure" booklet (last updated
// August 2024) and "Your guide to heart failure" (2024), and is credited to them. General information only;
// it never replaces what a person's own team tells them.

const bhf = (label: string, path: string): LearnSource => ({ label: `British Heart Foundation: ${label}`, url: `https://www.bhf.org.uk/informationsupport/${path}` });
const nhsTests = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/tests-and-treatments/${path}` });
const NHS_HF: LearnSource = { label: "NHS: Heart failure", url: "https://www.nhs.uk/conditions/heart-failure/" };
const NHS_FUROSEMIDE: LearnSource = { label: "NHS: Furosemide", url: "https://www.nhs.uk/medicines/furosemide/" };
const NHS_DAPAGLIFLOZIN: LearnSource = { label: "NHS: Dapagliflozin", url: "https://www.nhs.uk/medicines/dapagliflozin/" };
const NHS_ECHO = nhsTests("Echocardiogram", "echocardiogram/");
const NHS_PACEMAKER = nhsTests("Pacemakers", "pacemaker-implantation/");
const NHS_TALKING = nhsTests("Talking therapies", "talking-therapies/");
const NHS_EOL = nhsTests("What end of life care involves", "end-of-life-care/what-it-involves-and-when-it-starts/");
const NHS_PLAN_AHEAD = nhsTests("Why plan ahead for end of life care?", "end-of-life-care/planning-ahead/why-plan-ahead/");
const NHS_URGENT_MH: LearnSource = { label: "NHS: Where to get urgent help for mental health", url: "https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/" };
const GOV_HF_DRIVING: LearnSource = { label: "GOV.UK: Heart failure and driving", url: "https://www.gov.uk/heart-failure-and-driving" };
const GOV_PACEMAKER_DRIVING: LearnSource = { label: "GOV.UK: Pacemakers and driving", url: "https://www.gov.uk/pacemakers-and-driving" };
const GOV_DEFIB_DRIVING: LearnSource = { label: "GOV.UK: Defibrillators and driving", url: "https://www.gov.uk/defibrillators-and-driving" };
const BHF_HF = bhf("Heart failure", "conditions/heart-failure");
const BHF_LIVING = bhf("Living with heart failure", "support/practical-support/living-with-heart-failure");
const BHF_STAGES = bhf("Heart failure stages explained", "heart-matters-magazine/medical/heart-failure-stages");
const BHF_WEIGHT = bhf("Can heart failure cause sudden weight gain?", "heart-matters-magazine/medical/ask-the-experts/heart-failure-weight-gain");
const BHF_HOT_WEATHER = bhf("How do I manage fluid restriction in hot weather?", "heart-matters-magazine/medical/ask-the-experts/fluid-restriction-for-heart-failure-in-hot-weather");
const BHF_EXERCISE = bhf("Exercise for heart failure", "heart-matters-magazine/activity/exercise-for-heart-failure");
const BHF_ICD = bhf("Implantable cardioverter defibrillator (ICD)", "treatments/implantable-cardioverter-defibrillator");
const BHF_ICD_TIPS = bhf("ICDs: dos and don'ts", "heart-matters-magazine/medical/icd-tips");
const BHF_DEPRESSION = bhf("How to deal with depression when you have heart problems", "heart-matters-magazine/wellbeing/how-to-deal-with-depression-when-you-have-heart-problems");
const BHF_HELPLINE = bhf("Heart Helpline", "heart-helpline");
const BHF_UNDERSTANDING: LearnSource = {
  label: "British Heart Foundation: Understanding heart failure (booklet)",
  url: "https://www.bhf.org.uk/-/media/images/information-support/publications/new-covers-2025/understanding-series/2024-update/his8-0425-heart-failure-a6-booklet.pdf",
};
const BHF_GUIDE: LearnSource = {
  label: "British Heart Foundation: Your guide to heart failure (booklet)",
  url: "https://www.bhf.org.uk/-/media/images/information-support/publications/heart-conditions/your-guide-to-heart-failure-2024/guidetoheartfailure_online.pdf",
};
const ASTHMA_LUNG_BREATHING: LearnSource = { label: "Asthma + Lung UK: How can I manage my breathlessness?", url: "https://www.asthmaandlung.org.uk/symptoms-tests-treatments/symptoms/breathlessness/how-can-i-manage-my-breathlessness" };
const SLEEP_HYGIENE: LearnSource = { label: "The Sleep Charity: Sleep hygiene", url: "https://thesleepcharity.org.uk/adults/sleep-hygiene/" };

export const heartFailureAnswers: LearnArticle[] = [
  {
    id: "hf-what-it-is",
    kicker: "Understanding",
    question: "What does heart failure mean, and what does it not mean?",
    hook: "A heart that cannot pump blood around the body as well as it should. It does not mean the heart has stopped working.",
    short: "Heart failure is when your heart cannot pump blood around your body as well as it should. It does not mean your heart has stopped working or is about to stop working. There's no cure, but treatment and lifestyle changes can help manage symptoms and keep heart failure stable for many years.",
    sections: [
      {
        heading: "A pump that struggles",
        paragraphs: [
          "Heart failure is when your heart cannot pump blood properly. It does not mean your heart has stopped working or is about to stop working.",
          "The term heart failure sounds scary, but it does not mean your heart has failed. It just needs more support to help it work better.",
        ],
      },
      {
        heading: "Another way to think of it",
        paragraphs: [
          "The name heart failure can sound frightening, so it might be more helpful to think of it as: 'My heart is not working as well as it should and needs treatment to help how it works'.",
          "There are many reasons why this may happen, including damage to your heart, weakness or stiffness of your heart muscle, and narrowed or leaking valves.",
        ],
      },
      {
        heading: "Left side, right side and ejection fraction",
        paragraphs: [
          "Left-side heart failure is the most common type. Right-side heart failure is when the right side of your heart is not pumping blood to the lungs as well as it should. It can be caused by left-side heart failure.",
          "The ejection fraction of your heart means the amount of blood that is pushed out of your heart every time it beats. It's measured as a percentage during an echocardiogram. A normal ejection fraction is 50% and above.",
          "Heart failure with reduced ejection fraction (HFrEF) means less than 40%. Heart failure with mildly reduced ejection fraction (HFmrEF) means 40% to 49%. Heart failure with preserved ejection fraction (HFpEF) means above 50%.",
        ],
      },
      {
        heading: "Four stages",
        paragraphs: [
          "There are four stages or classes of heart failure. These stages describe how serious your heart failure is.",
          "In stage 1 you have no symptoms during everyday activities. In stage 2 you feel normal when resting but physical activity causes symptoms. In stage 3 a small amount of physical activity causes symptoms. In stage 4 you cannot do any physical activity without symptoms and may feel uncomfortable while resting.",
          "It's not unusual to move to a different class. You may move up a class during a period of being unwell, and return to your earlier class when you recover.",
        ],
      },
      {
        heading: "Living with it",
        paragraphs: [
          "There's no cure, but treatment and lifestyle changes can help manage symptoms and keep heart failure stable for many years.",
          "With good management of symptoms and the right treatment, many people with heart failure can lead a full and active life.",
        ],
      },
    ],
    helps: [
      "If you're not sure what the ejection fraction of your heart is, speak to your doctor.",
      "Ask your doctor to talk you through the type and stage of heart failure you have.",
      "See a GP if you have symptoms of heart failure.",
      "Call the British Heart Foundation Heart Helpline to speak to one of its cardiac nurses.",
    ],
    tryThisWeek: [
      "Ask what your ejection fraction is.",
      "Ask about your type and stage.",
      "Call the Heart Helpline.",
    ],
    ask: "What type and stage of heart failure do I have, and what is my ejection fraction?",
    interactive: {
      kind: "timeline",
      title: "The four stages",
      steps: [
        { id: "stage-1", when: "Stage 1", title: "No symptoms", points: ["No symptoms during everyday activities.", "You may still need medicine to reduce the risk of your condition getting worse."] },
        { id: "stage-2", when: "Stage 2", title: "Symptoms with activity", points: ["You feel normal when resting.", "Physical activity causes symptoms."] },
        { id: "stage-3", when: "Stage 3", title: "Symptoms with a little activity", points: ["You feel normal when resting.", "A small amount of physical activity causes symptoms."] },
        { id: "stage-4", when: "Stage 4", title: "Symptoms at rest", points: ["You cannot do any physical activity without symptoms.", "You may feel uncomfortable while resting."] },
      ],
    },
    sources: [NHS_HF, BHF_UNDERSTANDING, BHF_GUIDE, BHF_STAGES],
    quiz: {
      question: "Does heart failure mean the heart has stopped working?",
      options: [{ text: "No, it is not pumping as well as it should", right: true }, { text: "Yes, it has stopped" }, { text: "Yes, it is about to stop" }],
      why: "It does not mean your heart has stopped working or is about to stop working.",
    },
  },
  {
    id: "hf-causes",
    kicker: "Causes",
    question: "Why does heart failure happen?",
    hook: "A heart attack, high blood pressure and diseases of the heart muscle are the most common causes. Sometimes no cause is found.",
    short: "There are lots of possible causes of heart failure. It can happen suddenly, such as after a heart attack or infection, or from long-term strain on your heart from high blood pressure or coronary heart disease. Sometimes the cause is not known, and the important thing is to treat your condition and control your symptoms.",
    sections: [
      {
        heading: "Sudden, or slow",
        paragraphs: [
          "There are lots of possible causes of heart failure. It can happen suddenly, such as after a heart attack or infection, or from long-term strain on your heart from high blood pressure or coronary heart disease.",
          "It can be caused by one or more conditions at the same time. It can also progress slowly over months or years.",
        ],
      },
      {
        heading: "The most common causes",
        paragraphs: [
          "A heart attack can cause long-term damage to your heart muscle, affecting how well your heart can pump blood.",
          "Cardiomyopathy is a disease of the heart muscle which affects its size, shape or thickness. It can be inherited or caused by other conditions, but for some people the cause is not known.",
          "High blood pressure puts strain on the heart and can lead to heart failure over time.",
        ],
      },
      {
        heading: "Other causes",
        paragraphs: [
          "Other possible causes include heart valve disease, heart rhythm problems, chronic kidney disease, anaemia, haemochromatosis and thyroid problems.",
          "Some cancer treatments, such as chemotherapy, can also cause it. So can a build-up of abnormal proteins in your heart (cardiac amyloidosis), and a heart condition you're born with.",
          "Too much alcohol, more than the recommended limit of 14 units a week, is another cause.",
        ],
      },
      {
        heading: "Who is most at risk",
        paragraphs: [
          "Anyone can get heart failure, but you may be more at risk if you are 65 or older, are living with overweight or obesity, are pregnant, smoke, drink a lot of alcohol or use cocaine.",
          "Heart failure is more common in older people, but it does not happen just because you get older. Heart failure can happen at any age.",
        ],
      },
      {
        heading: "When no cause is found",
        paragraphs: [
          "Sometimes the cause is not known, which can be hard to accept. The important thing is to treat your condition and control your symptoms.",
          "When heart failure is caused by an underlying problem that can be treated, like high blood pressure or heart valve disease, your symptoms may go away or not be as bad.",
        ],
      },
    ],
    helps: [
      "Ask your heart specialist and care team what has caused your heart failure.",
      "Limit how much alcohol you drink to less than the recommended 14 units per week.",
      "Stop smoking and using other tobacco products.",
      "Keep to a healthy weight and diet to prevent extra strain on your heart.",
      "Take your prescribed medicines to help control your blood pressure.",
    ],
    tryThisWeek: [
      "Ask what caused yours.",
      "Keep alcohol under 14 units a week.",
      "Take a step towards stopping smoking.",
    ],
    ask: "What caused my heart failure, and can that cause be treated?",
    interactive: {
      kind: "risk-check",
      title: "What can make heart failure more likely?",
      intro: "Tick any that apply to you. Some can be treated or changed; some cannot.",
      items: [
        { id: "age", label: "Aged 65 or older", note: "You may be more at risk of heart failure if you are 65 or older.", changeable: false },
        { id: "bp", label: "High blood pressure", note: "It puts strain on the heart. Taking your prescribed medicines will help to control your blood pressure, as will cutting down on salt and alcohol.", changeable: true },
        { id: "heart-attack", label: "A past heart attack", note: "A heart attack can cause long-term damage to your heart muscle, affecting how well your heart can pump blood.", changeable: false },
        { id: "weight", label: "Living with overweight or obesity", note: "Keeping to a healthy weight and diet will help prevent extra strain on your heart.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Stopping smoking reduces your risk of developing heart and circulatory diseases.", changeable: true },
        { id: "alcohol", label: "Drinking a lot of alcohol", note: "Too much alcohol, more than the recommended limit of 14 units a week, is one cause of heart failure.", changeable: true },
        { id: "cocaine", label: "Using cocaine", note: "Using cocaine may put you more at risk of heart failure.", changeable: true },
        { id: "inherited", label: "Cardiomyopathy in the family", note: "Cardiomyopathy can be inherited or caused by other conditions, but for some people the cause is not known.", changeable: false },
      ],
    },
    sources: [NHS_HF, BHF_HF, BHF_UNDERSTANDING, BHF_GUIDE],
    quiz: {
      question: "Does heart failure only happen because you get older?",
      options: [{ text: "No, it can happen at any age", right: true }, { text: "Yes, only older people get it" }, { text: "Yes, it is part of ageing" }],
      why: "Heart failure is more common in older people, but it does not happen just because you get older. Heart failure can happen at any age.",
    },
  },
  {
    id: "hf-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms of heart failure?",
    hook: "Breathlessness, swollen feet and ankles, and feeling very tired are the most common. Some signs need help the same day, and some need 999.",
    short: "The most common symptoms are feeling breathless, feeling very tired, and swelling in the feet and ankles. They happen because your heart is not pumping as well as it should, so fluid can build up and your body does not get enough oxygen. Symptoms can vary from day to day and week to week.",
    sections: [
      {
        heading: "The most common symptoms",
        paragraphs: [
          "Symptoms include feeling out of breath when doing everyday activities or lying down, and feeling weak, light-headed or very tired, particularly after moving or doing physical activity.",
          "Swelling in your feet, ankles, legs or tummy, feeling bloated, sudden weight gain and coughing at night are also symptoms.",
        ],
      },
      {
        heading: "Why they happen",
        paragraphs: [
          "When your heart is not pumping blood as well as it should, it means you're not getting enough oxygen. This affects how your body works, including your breathing and muscles.",
          "Fluid can back up into your lungs, which can make you breathless. Your kidneys can end up keeping too much salt and water, and this extra fluid can cause swelling and sudden weight gain.",
        ],
      },
      {
        heading: "Less common symptoms",
        paragraphs: [
          "Less common symptoms include your heart beating faster than usual, a new ongoing cough that does not go away, feeling confused, wheezing and loss of appetite.",
          "Some people with heart failure have memory problems or difficulty concentrating.",
        ],
      },
      {
        heading: "Good days and bad days",
        paragraphs: [
          "Symptoms can vary from day to day and week to week.",
          "If any of your symptoms are new or getting worse, speak to your doctor or nurse as soon as possible. If you need help outside normal working hours, call NHS 111.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you feel breathless when lying down or from everyday activity, you're coughing up frothy pink phlegm, or you have suddenly gained weight.",
          "Call 999 if you're having severe difficulty breathing, your lips or skin are pale, blue or grey, or someone has passed out and is not responding normally. Do not drive yourself to A&E.",
        ],
      },
    ],
    helps: [
      "See a GP if you have symptoms of heart failure.",
      "Speak to your doctor or nurse as soon as possible if any of your symptoms are new or getting worse.",
      "If you need help outside normal working hours, call NHS 111.",
      "Call 999 if you're having severe difficulty breathing or someone has passed out and is not responding normally.",
      "Share your list of symptoms with your carer or family so that you all know what to do if they get worse.",
    ],
    tryThisWeek: [
      "See a GP about symptoms.",
      "Tell your team about new symptoms.",
      "Know when to call 999.",
    ],
    ask: "Which of my symptoms should make me call you straight away?",
    interactive: {
      kind: "signs",
      title: "What have you noticed?",
      intro: "Tick anything you have felt. The ones you tick make a list to take to your doctor or nurse.",
      signs: [
        "Breathless with everyday activities",
        "Breathless when lying down",
        "Weak, light-headed or very tired",
        "Swollen feet, ankles, legs or tummy",
        "Feeling bloated",
        "Sudden weight gain",
        "Coughing at night",
        "Heart beating faster than usual",
        "Loss of appetite",
      ],
      after: "If any of your symptoms are new or getting worse, speak to your doctor or nurse as soon as possible. Call 999 if you're having severe difficulty breathing or someone has passed out.",
      copyHeading: "Symptoms to talk about",
    },
    sources: [NHS_HF, BHF_UNDERSTANDING, BHF_GUIDE, BHF_HF],
    quiz: {
      question: "Which of these is a reason to call 999?",
      options: [{ text: "Severe difficulty breathing", right: true }, { text: "A question about your tablets" }, { text: "Feeling tired after shopping" }],
      why: "Call 999 if you're having severe difficulty breathing, your lips or skin are pale, blue or grey, or someone has passed out and is not responding normally.",
    },
  },
  {
    id: "hf-tests",
    kicker: "Tests",
    question: "Which tests are used to find heart failure?",
    hook: "A blood test for BNP, an ECG, and an echo, a scan that uses sound waves, are the main ones. Others check whether the lungs are to blame.",
    short: "If the doctor thinks you may have heart failure, they will do tests to see how well your heart and lungs are working, and refer you to a heart specialist. Tests may include blood tests including a BNP test, an ECG, an echocardiogram, a chest X-ray and breathing tests. You may need to go to hospital for some of them.",
    sections: [
      {
        heading: "First steps",
        paragraphs: [
          "Your doctor will ask about your symptoms and may do some physical checks, such as your blood pressure.",
          "If the doctor thinks you may have heart failure, they will do some tests to see how well your heart and lungs are working, and refer you to a heart specialist (cardiologist).",
        ],
      },
      {
        heading: "The BNP blood test",
        paragraphs: [
          "If your heart is not pumping properly, it will produce more of a protein called brain natriuretic peptide (BNP). This means your BNP levels will be higher.",
          "After diagnosis, you'll have regular blood tests to check how well your heart is pumping. Your doctors may also use blood tests to keep an eye on your kidneys, which can be affected by heart failure.",
        ],
      },
      {
        heading: "The ECG and the echo",
        paragraphs: [
          "An electrocardiogram (ECG) measures the electrical activity of your heart.",
          "An echocardiogram is a scan of your heart that's done to see how well your heart is working. It uses soundwaves to create an image of your heart, similar to an ultrasound scan used during pregnancy.",
          "The most common type of echocardiogram takes around 30 to 40 minutes. The scanner makes a loud swishing sound as it works.",
        ],
      },
      {
        heading: "Other tests",
        paragraphs: [
          "You may also have tests to check if another condition is causing your symptoms, such as a problem with your lungs. These include a chest X-ray and breathing tests, such as a peak flow test and spirometry.",
          "Tests may also include samples of your pee, and an MRI scan.",
        ],
      },
      {
        heading: "Waiting for appointments and results",
        paragraphs: [
          "It can take weeks or months to get a hospital appointment. You may also have to wait to get your test results.",
          "If you've not heard anything about your echocardiogram results after a few weeks, contact the doctor who referred you for the scan.",
        ],
      },
    ],
    helps: [
      "If you're not sure what the ejection fraction of your heart is, speak to your doctor.",
      "Let the person doing the echocardiogram know if you'd like someone else to be in the room with you.",
      "Ask questions if you're not sure about anything you've been told about your results.",
      "If you've not heard anything about your echocardiogram results after a few weeks, contact the doctor who referred you.",
    ],
    tryThisWeek: [
      "Ask what your ejection fraction is.",
      "Ask for a chaperone if you want one.",
      "Chase echo results after a few weeks.",
    ],
    ask: "Which tests do I need, and what did my echo and BNP results show?",
    interactive: {
      kind: "flip-cards",
      title: "The tests, turned over",
      intro: "Tap a card to see what each test does.",
      cards: [
        { id: "bnp", front: "BNP blood test", when: "To diagnose, then regularly after", back: "If your heart is not pumping properly, it produces more of a protein called BNP, so your BNP levels will be higher." },
        { id: "ecg", front: "Electrocardiogram (ECG)", when: "If you have symptoms", back: "Measures the electrical activity of your heart." },
        { id: "echo", front: "Echocardiogram (echo)", when: "To see how well your heart is working", back: "A scan that uses soundwaves to create an image of your heart. The most common type takes around 30 to 40 minutes." },
        { id: "xray", front: "Chest X-ray", when: "To check whether your lungs are involved", back: "Checks if there's fluid in your lungs or if a lung condition is causing the symptoms." },
        { id: "breathing", front: "Breathing tests", when: "To check your lungs", back: "Such as a peak flow test and spirometry, to see if a lung problem is causing your breathlessness." },
      ],
    },
    sources: [NHS_HF, BHF_UNDERSTANDING, BHF_HF, NHS_ECHO],
    quiz: {
      question: "What does an echocardiogram use to make a picture of the heart?",
      options: [{ text: "Soundwaves", right: true }, { text: "A blood sample" }, { text: "A breathing test" }],
      why: "It uses soundwaves to create an image of your heart, similar to an ultrasound scan used during pregnancy.",
    },
  },
  {
    id: "hf-medicines",
    kicker: "Treatment",
    question: "Why do people with heart failure take several medicines?",
    hook: "Each one does a different job: clearing fluid, relaxing blood vessels, slowing the heart. Doses are often changed slowly at the start.",
    short: "Medicines can protect and improve your heart function, improve your symptoms and reduce fluid building up in your body, and you will usually take more than one. Your doctor or specialist heart failure nurse will start you on a low dose and increase it. If you get side effects, do not just stop taking your medicines; talk to your nurse, GP or cardiologist.",
    sections: [
      {
        heading: "Several medicines, several jobs",
        paragraphs: [
          "Medicines can protect and improve your heart function, improve your symptoms and reduce fluid building up in your body. You will usually take more than one.",
          "You may be given medicines to make you pee more to reduce fluid build-up, to widen your blood vessels so your heart does not have to work as hard, and to slow your heart down so it does not need as much oxygen.",
        ],
      },
      {
        heading: "Water tablets",
        paragraphs: [
          "Water tablets (diuretics), such as furosemide, help your kidneys to get rid of water in your pee. They can help relieve symptoms such as swelling and breathlessness.",
          "If you take furosemide once a day, it's ideally taken every morning. Normally you will be advised to take your diuretics at a time that means you do not have to get up too often in the night.",
        ],
      },
      {
        heading: "Relaxing blood vessels and slowing the heart",
        paragraphs: [
          "ACE inhibitors, such as ramipril and enalapril, help your blood vessels widen and relax. This lowers your blood pressure, reducing the workload of your heart.",
          "Angiotensin II receptor blockers (ARBs), such as candesartan, work in a similar way but are less likely to cause a troublesome cough. Your doctor may prescribe sacubitril valsartan instead of an ACE inhibitor or an ARB.",
          "Beta blockers, such as bisoprolol, help slow your heart rate, reducing the work your heart has to do.",
        ],
      },
      {
        heading: "Other medicines you may hear about",
        paragraphs: [
          "Spironolactone and eplerenone help prevent and treat the build-up of fluid in your body. If you're taking ACE inhibitors or beta blockers but you're still having symptoms, you may be prescribed one.",
          "Dapagliflozin and empagliflozin were first used for people with type 2 diabetes. They have been found to reduce the development and progression of kidney disease and heart failure, even in those without diabetes.",
          "Ivabradine slows your heartbeat so that your heart does not have to work so hard. Digoxin slows down and strengthens your heartbeat.",
        ],
      },
      {
        heading: "Getting the dose right",
        paragraphs: [
          "Your doctor or specialist heart failure nurse will start you on a low dose and increase it until they get the best results for you. Getting the right balance can take time.",
          "You'll have regular blood tests to keep an eye on your potassium levels, and to check your kidneys are working properly.",
          "It can take a few weeks or months to feel the benefits of beta blockers, and you may even feel that your symptoms are getting worse to begin with.",
        ],
      },
    ],
    helps: [
      "Take medicine as your doctor has prescribed.",
      "If you get side effects, do not just stop taking your medicines; discuss them with your nurse, GP or cardiologist.",
      "Write down all the different medications you take and when you take them.",
      "Use a pill (dosette) box, available from pharmacies, to help you organise your medication.",
      "Always check with your pharmacist or doctor before taking any over-the-counter medication.",
    ],
    tryThisWeek: [
      "Take them as prescribed.",
      "Write a list of your medicines.",
      "Try a pill box.",
    ],
    ask: "What is each of my medicines for, and when will my doses change?",
    interactive: {
      kind: "flip-cards",
      title: "Your medicines, turned over",
      intro: "Tap a card to see what each type of medicine does.",
      cards: [
        { id: "diuretics", front: "Water tablets (diuretics)", when: "Often taken in the morning", back: "Help your kidneys get rid of water in your pee, relieving swelling and breathlessness." },
        { id: "ace", front: "ACE inhibitors", when: "Such as ramipril or enalapril", back: "Help your blood vessels widen and relax, lowering your blood pressure and reducing the workload of your heart." },
        { id: "arb", front: "ARBs", when: "Such as candesartan", back: "Work in a similar way to ACE inhibitors but are less likely to cause a troublesome cough." },
        { id: "entresto", front: "Sacubitril valsartan", when: "Instead of an ACE inhibitor or ARB", back: "Widens your blood vessels, increasing blood flow and lowering blood pressure to reduce the strain on your heart." },
        { id: "beta", front: "Beta blockers", when: "Such as bisoprolol", back: "Help slow your heart rate, reducing the work your heart has to do. Started at a low dose." },
        { id: "mra", front: "Spironolactone or eplerenone", when: "If you're still having symptoms", back: "Help prevent and treat the build-up of fluid in your body." },
        { id: "sglt2", front: "Dapagliflozin or empagliflozin", when: "With or without diabetes", back: "Found to reduce the development and progression of kidney disease and heart failure." },
      ],
    },
    sources: [NHS_HF, BHF_UNDERSTANDING, BHF_GUIDE, BHF_LIVING, NHS_FUROSEMIDE, NHS_DAPAGLIFLOZIN],
    quiz: {
      question: "What should you do if a heart failure medicine gives you side effects?",
      options: [{ text: "Talk to your nurse, GP or cardiologist", right: true }, { text: "Stop taking it straight away" }, { text: "Take half when you remember" }],
      why: "If you experience any side effects, do not just stop taking your medicines. Instead, discuss these side effects with your nurse, GP or cardiologist.",
    },
  },
  {
    id: "hf-devices",
    kicker: "Treatment",
    question: "What do pacemakers, ICDs and CRT devices do?",
    hook: "Small devices under the skin near the collarbone. A pacemaker steadies the beat, a CRT gets the chambers back in time, and an ICD can shock a dangerous rhythm.",
    short: "The most common devices used to treat heart failure are pacemakers, implantable cardioverter defibrillators (ICDs) and cardiac resynchronisation therapy (CRT) devices. They are usually put under the skin below the collarbone. If your heart failure is severe, you may be offered a device that helps your heart pump blood properly, or a heart transplant if treatments are not helping.",
    sections: [
      {
        heading: "Pacemakers and CRT",
        paragraphs: [
          "A pacemaker is a small device that's usually put under your skin below your collarbone. It helps to improve the strength, rate and rhythm of your heartbeat. This can help your heart to pump better.",
          "A CRT is a special type of pacemaker. It's used when the pumping chambers of your heart beat out of time with each other. It helps the chambers to pump at the same time and helps your heart pump better.",
          "If your heart failure is severe, you may be offered a device that helps your heart pump blood properly (left ventricular assist device), or a heart transplant if treatments are not helping.",
        ],
      },
      {
        heading: "ICDs",
        paragraphs: [
          "An ICD checks your heart rhythm. If it notices a dangerous heart rhythm it can give your heart an electrical shock to treat it.",
          "If you're at risk of a dangerous, abnormal heart rhythm you're more likely to have an ICD or a CRT-D. An ICD can also work as a pacemaker if you need one, so you'll only have one device.",
          "An ICD shock can feel like a sudden jolt or thump in your chest or back. It cannot shock people near you or touching you.",
        ],
      },
      {
        heading: "Having one fitted",
        paragraphs: [
          "A pacemaker usually takes about an hour to fit, using local anaesthetic. After the procedure, you'll usually stay in hospital overnight.",
          "Having an ICD fitted normally takes about 1 to 3 hours, and most people go home the next day.",
          "After a pacemaker, do not carry heavy objects or do vigorous exercise for 4 to 6 weeks, and do not lift your elbow above shoulder height for 4 to 6 weeks.",
        ],
      },
      {
        heading: "Checks and everyday life",
        paragraphs: [
          "You should have regular follow-up appointments to have your ICD checked, usually every 3 to 12 months. Some ICD checks can be done from home.",
          "Show your device ID card at airport security. It's OK to go through security with a pacemaker, but staff should not use a handheld metal detector over it.",
          "Keep mobile phones at least 15cm (6 inches) away from an ICD, and do not carry a phone in a pocket over it.",
        ],
      },
      {
        heading: "Telling DVLA",
        paragraphs: [
          "Tell DVLA if you have been fitted with a pacemaker or have an implanted defibrillator (ICD). You do not need to tell DVLA about a pacemaker battery change.",
          "You can be fined up to £1,000 if you do not tell DVLA about a medical condition or treatment that affects your driving.",
          "Do not drive for at least the first week after a pacemaker is fitted. With an ICD, your cardiac team or ICD clinic will tell you when it's safe to start driving again.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or nurse whether a device is the right option for you.",
      "Go to your device check appointments, even if you feel well.",
      "Carry your device ID card with you at all times.",
      "Tell DVLA and your insurance company that you have a pacemaker or ICD.",
      "Contact your pacemaker clinic or NHS 111 if your wound gets more swollen, tender or red, or starts leaking.",
    ],
    tryThisWeek: [
      "Go to every device check.",
      "Carry your device ID card.",
      "Tell DVLA and your insurer.",
    ],
    ask: "Would a pacemaker, CRT or ICD help my heart failure?",
    interactive: {
      kind: "flip-cards",
      title: "The devices, turned over",
      intro: "Tap a card to see what each device or treatment does.",
      cards: [
        { id: "pacemaker", front: "Pacemaker", when: "Under the skin below the collarbone", back: "Helps to improve the strength, rate and rhythm of your heartbeat, so your heart can pump better." },
        { id: "crt", front: "CRT", when: "When the chambers beat out of time", back: "A special type of pacemaker that helps the pumping chambers to pump at the same time." },
        { id: "icd", front: "ICD", when: "If you're at risk of a dangerous rhythm", back: "Checks your heart rhythm, and can give an electrical shock to treat a dangerous heart rhythm." },
        { id: "crt-d", front: "CRT-D", when: "Heart failure and a risk of dangerous rhythms", back: "A special type of pacemaker that helps the chambers beat at the same time, combined with a defibrillator." },
        { id: "lvad", front: "Left ventricular assist device", when: "If heart failure is severe", back: "A device that helps your heart pump blood properly." },
        { id: "transplant", front: "Heart transplant", when: "If treatments are not helping", back: "May be offered if your heart failure is severe and treatments are not helping." },
      ],
    },
    sources: [BHF_UNDERSTANDING, BHF_GUIDE, NHS_PACEMAKER, BHF_ICD, BHF_ICD_TIPS, NHS_HF, GOV_PACEMAKER_DRIVING, GOV_DEFIB_DRIVING],
    quiz: {
      question: "What does an ICD do if it notices a dangerous heart rhythm?",
      options: [{ text: "Gives the heart an electrical shock", right: true }, { text: "Releases a medicine" }, { text: "Switches the heart off" }],
      why: "If it notices a dangerous heart rhythm it can give your heart an electrical shock to treat it.",
    },
  },
  {
    id: "hf-fluid-salt",
    kicker: "Every day",
    question: "Why do fluid, salt and weighing yourself every day matter?",
    hook: "A sudden jump on the scales is often fluid, not fat. Weighing yourself each morning helps catch it early.",
    short: "Your body may hold on to fluid because your heart cannot pump blood around your body as well as it should, and this can cause sudden weight gain. Weigh yourself every day at the same time, usually when you wake up. If your weight has gone up more than 2kg in three days, you have swelling in your feet or ankles, or you feel breathless, contact your doctor.",
    sections: [
      {
        heading: "Why fluid builds up",
        paragraphs: [
          "Your body may hold on to fluid more than usual because your heart cannot pump blood around your body as well as it should.",
          "This can lead to fluid building up, usually in your legs and feet, but sometimes in your stomach or lower back. This causes swelling.",
        ],
      },
      {
        heading: "Weighing yourself",
        paragraphs: [
          "It's a good idea to weigh yourself every day. A sudden increase in weight could mean your body is holding on to fluid.",
          "Weigh yourself at the same time each morning, after going to the toilet, and wear similar clothes every time. Write your weight down each time you measure it.",
          "Use the same scales in the same place each time, on a firm flat surface, preferably not on a carpet.",
        ],
      },
      {
        heading: "What a change means",
        paragraphs: [
          "Weight gain from eating habits usually happens over weeks and months. With fluid retention it happens suddenly.",
          "If you notice your weight has gone up more than 2kg in three days, you have swelling in your feet or ankles, or feel breathless, contact your doctor.",
        ],
      },
      {
        heading: "Salt",
        paragraphs: [
          "Too much salt can make your body hold on to water and affect how your water tablets work. Adults should eat less than 6g of salt each day. That's about one level teaspoon.",
          "Some salt substitutes can be very high in potassium and are not recommended if you have heart failure.",
          "About three-quarters of the salt we eat comes from processed foods, so check the nutrition labels on packets and cans.",
        ],
      },
      {
        heading: "Fluid limits",
        paragraphs: [
          "If you've been advised to limit how much fluid you drink, your doctor or nurse will tell you how much you can drink each day. As a guide, NICE recommends about 6 to 8 cups a day.",
          "Remember that foods like soup, jelly, ice cream and juicy fruit also count toward your total.",
          "Never change your fluid limit on your own. If a heatwave is expected, or you are struggling with thirst, speak to your nurse or doctor.",
        ],
      },
    ],
    helps: [
      "Weigh yourself every day at the same time, usually when you wake up in the morning.",
      "Keep a daily weight chart and take it with you when you see your doctor or nurse.",
      "Contact your doctor if your weight has gone up more than 2kg in three days.",
      "Have less than 6g of salt a day, and avoid salt substitutes.",
      "If you're not sure how much fluid you can have in a day, ask your doctor or nurse.",
    ],
    tryThisWeek: [
      "Weigh yourself each morning.",
      "Keep a weight chart.",
      "Cut down on salt.",
    ],
    ask: "Should I weigh myself every day, and what change in weight should make me call you?",
    interactive: {
      kind: "scenarios",
      title: "Moments with the scales and the salt",
      scenarios: [
        {
          id: "scales",
          situation: "Your scales show you are more than 2kg heavier than three days ago.",
          options: [{ text: "Contact your doctor", best: true }, { text: "Eat less and wait a week" }],
          why: "If you notice your weight has gone up more than 2kg in three days, you have swelling in your feet or ankles, or feel breathless, contact your doctor.",
        },
        {
          id: "heat",
          situation: "It's a hot week, you're on a fluid limit and you feel very thirsty.",
          options: [{ text: "Speak to your nurse or doctor", best: true }, { text: "Change your limit yourself" }],
          why: "Never change your fluid limit on your own. If a heatwave is expected, or you are struggling with thirst, speak to your nurse or doctor.",
        },
        {
          id: "substitute",
          situation: "You see a low-sodium salt substitute in the shop.",
          options: [{ text: "Leave it on the shelf", best: true }, { text: "Use it instead of salt" }],
          why: "Some salt substitutes can be very high in potassium and are not recommended if you have heart failure.",
        },
      ],
    },
    sources: [BHF_UNDERSTANDING, BHF_GUIDE, BHF_WEIGHT, BHF_HOT_WEATHER, NHS_HF],
    quiz: {
      question: "What rise in weight is a reason to contact your doctor?",
      options: [{ text: "More than 2kg in three days", right: true }, { text: "Any change at all" }, { text: "Half a kilo over a month" }],
      why: "If you notice your weight has gone up more than 2kg in three days, you have swelling in your feet or ankles, or feel breathless, contact your doctor.",
    },
  },
  {
    id: "hf-cardiac-rehab",
    kicker: "Staying active",
    question: "Is it safe to exercise with heart failure, and what is cardiac rehab?",
    hook: "People with heart failure were once told to rest. Keeping active is now known to help symptoms and quality of life.",
    short: "Everyone diagnosed with heart failure should be offered cardiac rehabilitation, which may include exercise classes, advice and support. In the past, people with heart failure were told they needed rest, but keeping active can help to improve symptoms and quality of life. Speak to your doctor first, build up slowly and stop if you feel unwell.",
    sections: [
      {
        heading: "Rest is no longer the advice",
        paragraphs: [
          "In the past, people with heart failure were told they needed rest. But keeping active is now known to help improve your symptoms and quality of life.",
          "Research shows that exercising when you have heart failure can lead to a reduced risk of being hospitalised.",
        ],
      },
      {
        heading: "Cardiac rehabilitation",
        paragraphs: [
          "Everyone diagnosed with heart failure should be offered cardiac rehabilitation.",
          "It may include an assessment and advice about how you can safely exercise, exercise classes or a personal exercise programme, support around lifestyle changes, and support groups.",
          "To take part, your heart failure needs to be stable and your blood pressure under control. If it's difficult for you to get to a course, you may be able to follow a programme at home.",
        ],
      },
      {
        heading: "What kind of exercise",
        paragraphs: [
          "Moderate aerobic exercise means you are out of breath but can still hold a conversation. It includes brisk walking, cycling and moving to music.",
          "Strength workouts use light weights or resistance bands. If you find standing too tiring, chair-based exercises are an option.",
          "Avoid exercise that involves lifting heavy weights, holding your breath, or using your whole body as a weight, such as press-ups or planks.",
        ],
      },
      {
        heading: "Little and often",
        paragraphs: [
          "The UK Government's guidelines recommend at least 150 minutes of moderate intensity physical activity a week. You can spread this out by adding a few 5 to 10 minute sessions over the course of each day.",
          "Do what you planned, not what you feel like. Overdoing things on a good day can mean you need to rest for a couple of days afterwards.",
        ],
      },
      {
        heading: "When to stop",
        paragraphs: [
          "Stop exercising if you have palpitations, extreme shortness of breath or light-headedness.",
          "In general, you should not exercise on days that you're unwell or feel more tired or breathless than normal.",
        ],
      },
    ],
    helps: [
      "Speak to your doctor before starting a new exercise.",
      "Ask your doctor or specialist if cardiac rehab is an option for you.",
      "Warm up before you start, and cool down slowly afterwards.",
      "Try exercising little and often, with a few 5 to 10 minute sessions each day.",
      "Stop exercising if you have palpitations, extreme shortness of breath or light-headedness.",
    ],
    tryThisWeek: [
      "Ask about cardiac rehab.",
      "Try a 5 to 10 minute session.",
      "Warm up and cool down.",
    ],
    ask: "Can I be referred to cardiac rehabilitation, and what exercise is right for me?",
    interactive: {
      kind: "timeline",
      title: "Building up, one goal at a time",
      steps: [
        { id: "choose", when: "Step 1", title: "Choose a goal", points: ["Pick something straightforward, like walking more.", "Find a level you can manage comfortably, such as a 10-minute walk each day."] },
        { id: "reach", when: "For a week", title: "Reach the goal", points: ["Do it every day for a week if you can.", "If it makes you so tired that you need to rest the next day, your baseline is too high."] },
        { id: "new", when: "When it feels easy", title: "Choose a new goal", points: ["Add the next bit of your goal, or do the activity for longer.", "Go slowly and build up gently."] },
      ],
    },
    sources: [NHS_HF, BHF_EXERCISE, BHF_GUIDE, BHF_UNDERSTANDING],
    quiz: {
      question: "Which kind of exercise is best avoided with heart failure?",
      options: [{ text: "Lifting heavy weights", right: true }, { text: "Brisk walking" }, { text: "Chair-based exercises" }],
      why: "Avoid exercise that involves lifting heavy weights, holding your breath, or using your whole body as a weight, such as press-ups or planks.",
    },
  },
  {
    id: "hf-worsening",
    kicker: "Warning signs",
    question: "How can I tell if my heart failure is getting worse?",
    hook: "Weight that jumps in a few days, more swelling, more breathlessness, needing extra pillows. Catching it early means treatment can be changed.",
    short: "Signs of fluid build-up include sudden weight gain, swollen legs, ankles or feet, feeling more breathless and needing extra pillows at night to breathe comfortably. If you notice these changes, let your healthcare team know, as your medicines or treatment may need adjusting. Some signs need an urgent GP appointment or NHS 111, and some need 999.",
    sections: [
      {
        heading: "Signs of fluid building up",
        paragraphs: [
          "Signs of fluid build-up include sudden weight gain, swollen legs, ankles or feet, shoes or clothes feeling tighter, and feeling more breathless.",
          "A bloated or full feeling in your tummy, and needing extra pillows at night to breathe comfortably, are also signs.",
        ],
      },
      {
        heading: "Signs in your chest",
        paragraphs: [
          "Some people wake up in the night coughing, extremely breathless or having difficulty breathing. This is a sign of worsening heart failure, so report it to your doctor or nurse as soon as possible.",
          "A persistent cough or increased shortness of breath may be signs that fluid is building up in your lungs. Contact your doctor or nurse immediately.",
        ],
      },
      {
        heading: "Tell your team early",
        paragraphs: [
          "If you notice any of these changes, it's important to let your healthcare team know. Your medicines or treatment may need adjusting.",
          "If you suddenly feel ill and tired for no reason, or your symptoms get worse, come on with less effort or more often, tell your doctor.",
          "If you feel like you're struggling to manage your condition at home, contact your doctor or NHS 111.",
        ],
      },
      {
        heading: "Urgent help",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you feel breathless when lying down or from everyday activity, you're coughing up frothy pink phlegm, or you have suddenly gained weight.",
          "Call 999 if you're having severe difficulty breathing, your lips or skin are pale, blue or grey, or someone has passed out and is not responding normally. Do not drive yourself to A&E.",
          "If your symptoms are very bad, or you feel very ill and frightened, phone 999 for an ambulance.",
        ],
      },
      {
        heading: "Chest pain and blackouts",
        paragraphs: [
          "If you've not already been diagnosed with angina or coronary heart disease and you get chest pain, call 999 immediately, as you could be having a heart attack.",
          "If you ever have a blackout, call 999 for an ambulance.",
        ],
      },
    ],
    helps: [
      "Weigh yourself regularly, at the same time each morning, and write it down.",
      "Let your healthcare team know if you notice signs of fluid build-up.",
      "Report waking in the night coughing or extremely breathless to your doctor or nurse as soon as possible.",
      "Share your list of symptoms with your carer or family so that you all know what to do if they get worse.",
      "Call 999 if you have severe difficulty breathing, new chest pain or a blackout.",
    ],
    tryThisWeek: [
      "Weigh yourself each morning.",
      "Tell your team about changes.",
      "Know when to call 999.",
    ],
    ask: "Which changes mean I should call you, and which mean I should call 999?",
    interactive: {
      kind: "signs",
      title: "Is anything changing?",
      intro: "Tick anything you have noticed recently. The ones you tick make a list to tell your heart failure team.",
      signs: [
        "Sudden weight gain",
        "More swelling in legs, ankles or feet",
        "Shoes or clothes feeling tighter",
        "Feeling more breathless",
        "A bloated or full tummy",
        "Needing extra pillows to breathe",
        "Waking in the night coughing or breathless",
        "A persistent cough",
      ],
      after: "If you notice any of these changes, let your healthcare team know. Call 999 if you're having severe difficulty breathing or someone has passed out and is not responding normally.",
      copyHeading: "Changes to tell my heart failure team",
    },
    sources: [NHS_HF, BHF_GUIDE, BHF_UNDERSTANDING, BHF_WEIGHT, BHF_HF],
    quiz: {
      question: "What can needing extra pillows at night to breathe comfortably be a sign of?",
      options: [{ text: "Fluid building up", right: true }, { text: "A soft mattress" }, { text: "Too much exercise" }],
      why: "A bloated or full feeling in your tummy, and needing extra pillows at night to breathe comfortably, are also signs.",
    },
  },
  {
    id: "hf-sleep",
    kicker: "Nights",
    question: "Why is sleeping harder with heart failure, and what helps?",
    hook: "Lying flat can make breathing harder. Pillows, a calmer routine and a word with your nurse can all help.",
    short: "With heart failure you may find it difficult to lie flat, and some people cough or need the toilet in the night. Being propped up by pillows at night can help your breathing. Needing extra pillows to breathe comfortably, or waking up extremely breathless, can be a sign that things are getting worse, so tell your team.",
    sections: [
      {
        heading: "Why nights can be hard",
        paragraphs: [
          "You may find it difficult to lie flat. Feeling out of breath when lying down and coughing at night are symptoms of heart failure.",
          "You may also find it difficult to sleep well because you cough if you lie down or you need to use the toilet often.",
          "Other common reasons for poor sleep are a lack of activity during the day, and worry, anxiety or depression.",
        ],
      },
      {
        heading: "Propped up by pillows",
        paragraphs: [
          "Being propped up by pillows at night can help. Make sure that you have enough pillows to support you in a comfortable position.",
          "If you wake up breathless, sit yourself up as much as possible, try and calm yourself and take some deep breaths. Some people find that having an open window can help with their breathing.",
        ],
      },
      {
        heading: "A calmer routine",
        paragraphs: [
          "Take a walk in the fresh air every day. Have a warm drink before bedtime but avoid anything with caffeine in it.",
          "The Sleep Charity suggests avoiding caffeine for 8 hours before bedtime, keeping the bedroom cool, dark and quiet, and waking up at the same time each morning.",
          "Relaxed breathing, using your tummy instead of your upper chest, can help you breathe more efficiently.",
        ],
      },
      {
        heading: "Water tablets and the night",
        paragraphs: [
          "Normally you will be advised to take your diuretics at a time that means you do not have to get up too often in the night.",
          "If you suffer from a cough or need to go to the toilet often during the night, have a chat with your doctor or nurse.",
        ],
      },
      {
        heading: "When the night is a warning sign",
        paragraphs: [
          "Needing extra pillows at night to breathe comfortably can be a sign of fluid build-up. Let your healthcare team know.",
          "Waking up in the night coughing, extremely breathless or having difficulty breathing is a sign of worsening heart failure. Report it to your doctor or nurse as soon as possible.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you feel breathless when lying down.",
        ],
      },
    ],
    helps: [
      "Make sure that you have enough pillows to support you in a comfortable position.",
      "If you wake up breathless, sit yourself up as much as possible and take some deep breaths.",
      "Have a warm drink before bedtime, but avoid anything with caffeine in it.",
      "Ask when to take your water tablets so you do not have to get up too often in the night.",
      "Let your healthcare team know if you need extra pillows to breathe comfortably.",
    ],
    tryThisWeek: [
      "Prop yourself up with pillows.",
      "Skip caffeine in your bedtime drink.",
      "Ask about water tablet timing.",
    ],
    ask: "I find it hard to breathe lying down. Could my medicines or fluid need changing?",
    interactive: {
      kind: "scenarios",
      title: "What would help tonight?",
      scenarios: [
        {
          id: "wake",
          situation: "You wake in the night feeling breathless.",
          options: [{ text: "Sit up, breathe deeply, then report it", best: true }, { text: "Lie flat and ignore it" }],
          why: "Sit yourself up as much as possible and take some deep breaths. Waking up extremely breathless is a sign of worsening heart failure, so report it as soon as possible.",
        },
        {
          id: "toilet",
          situation: "Your water tablets keep you up going to the toilet at night.",
          options: [{ text: "Ask your doctor or nurse about timing", best: true }, { text: "Skip the dose" }],
          why: "Normally you will be advised to take your diuretics at a time that means you do not have to get up too often in the night.",
        },
        {
          id: "pillows",
          situation: "This week you've needed an extra pillow to breathe comfortably.",
          options: [{ text: "Let your healthcare team know", best: true }, { text: "Wait until your next check-up" }],
          why: "Needing extra pillows at night to breathe comfortably can be a sign of fluid build-up. Let your healthcare team know.",
        },
      ],
    },
    sources: [NHS_HF, BHF_GUIDE, BHF_LIVING, BHF_WEIGHT, ASTHMA_LUNG_BREATHING, SLEEP_HYGIENE],
    quiz: {
      question: "What can help your breathing at night?",
      options: [{ text: "Being propped up by pillows", right: true }, { text: "Lying completely flat" }, { text: "A strong coffee before bed" }],
      why: "Being propped up by pillows at night can help.",
    },
  },
  {
    id: "hf-mood",
    kicker: "Feelings",
    question: "How do I cope with worry and low mood with heart failure?",
    hook: "Being told you have heart failure can be a terrible shock. Fear, sadness and anger are common, and help is there.",
    short: "Being told you have a heart condition can be very scary, and cause stress, anxiety and worries about the future. Many people have good days and bad days following a diagnosis. If these feelings continue and are affecting your quality of life, talk to your GP; you can also refer yourself to NHS talking therapies.",
    sections: [
      {
        heading: "A common reaction",
        paragraphs: [
          "Heart failure can be difficult to live with both physically and emotionally. Being told you have a heart condition can be very scary, and cause stress, anxiety and worries about the future.",
          "Many people have good days and bad days following a diagnosis. It's normal to feel anxious, sad and scared about the future.",
        ],
      },
      {
        heading: "Worry and breathlessness",
        paragraphs: [
          "When you're worried, your heart rate increases and you become short of breath, which can increase anxiety.",
          "Being out of breath is not always a sign that something's wrong. Relaxing will help to calm you, reduce your heart rate and the workload of your heart.",
          "To try a breathing exercise for stress, breathe in gently through your nose, counting from one to five if it helps, then let the breath flow out gently. Keep doing this for three to five minutes.",
        ],
      },
      {
        heading: "Things that help",
        paragraphs: [
          "Understanding your condition and knowing how to control your symptoms will help to relieve some of the stress and anxiety that you feel.",
          "Talking to loved ones and friends about your feelings can help. Getting out of the house, doing activities you enjoy and seeing your friends can help to lift your mood.",
          "Do not rely on alcohol, smoking and caffeine as your ways of coping.",
        ],
      },
      {
        heading: "When it may be depression",
        paragraphs: [
          "Depression is more than feeling sad for a few days. If the feelings do not pass and you feel persistently sad for weeks or months, you may have depression.",
          "Depression is treatable. If you think that you might be depressed, speak to your doctor or nurse.",
          "You can refer yourself directly to an NHS talking therapies service without a referral from a GP.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "If you need urgent help for your mental health, get help from 111 online or call 111 and select the mental health option, or ask for an urgent GP appointment.",
          "You can call 116 123 to talk to Samaritans about anything that's troubling you.",
          "Call 999 or go to A&E if someone's life is at risk or you do not feel you can keep yourself or someone else safe.",
        ],
      },
    ],
    helps: [
      "Talk to your GP if anxious, sad or scared feelings continue and are affecting your quality of life.",
      "Refer yourself to NHS talking therapies.",
      "Try the breathing exercise for three to five minutes when you feel stressed.",
      "Plan something to look forward to every day.",
      "Join a local heart support group to share your experiences with others.",
      "Call the British Heart Foundation Heart Helpline to speak to a cardiac nurse.",
    ],
    tryThisWeek: [
      "Plan one thing to look forward to.",
      "Try the breathing exercise.",
      "Look up NHS talking therapies.",
    ],
    ask: "I've been feeling low and worried. What support is there for me?",
    interactive: {
      kind: "scenarios",
      title: "Where to turn",
      scenarios: [
        {
          id: "weeks",
          situation: "You have felt sad most of the time for several weeks.",
          options: [{ text: "Speak to your doctor or nurse", best: true }, { text: "Wait for it to pass" }],
          why: "If the feelings do not pass and you feel persistently sad for weeks or months, you may have depression. Depression is treatable.",
        },
        {
          id: "family",
          situation: "Your family will not let you do anything, in case it makes you worse.",
          options: [{ text: "Talk to them honestly", best: true }, { text: "Stop doing things you enjoy" }],
          why: "Tell your family and friends that you appreciate their concern, but going out and doing the things you enjoy, within your limits, will help your mental health.",
        },
        {
          id: "safe",
          situation: "You do not feel you can keep yourself safe.",
          options: [{ text: "Call 999 or go to A&E now", best: true }, { text: "Wait until tomorrow" }],
          why: "A mental health emergency should be taken as seriously as a physical one. You will not be wasting anyone's time.",
        },
      ],
    },
    sources: [NHS_HF, BHF_UNDERSTANDING, BHF_GUIDE, BHF_DEPRESSION, NHS_TALKING, NHS_URGENT_MH, BHF_LIVING],
    quiz: {
      question: "Do you need a GP referral for NHS talking therapies?",
      options: [{ text: "No, you can refer yourself", right: true }, { text: "Yes, always" }, { text: "Only from a cardiologist" }],
      why: "You can refer yourself directly to an NHS talking therapies service without a referral from a GP.",
    },
  },
  {
    id: "hf-support",
    kicker: "Support",
    question: "Where can I get support, and how do I plan ahead?",
    hook: "A care team, a nurse helpline, other people living with heart failure, and plans made while you feel well.",
    short: "As well as your doctor and care team, support can come from other people with heart failure, at a local support group or online, and from national charities. As part of your treatment you should be referred to a palliative care team, which focuses on improving your quality of life. Sorting out your care, finances and wills while you feel well enough can give you and your loved ones peace of mind.",
    sections: [
      {
        heading: "Your team, the helpline and other people",
        paragraphs: [
          "A heart specialist (cardiologist) and care team will talk to you about treatment options and any other changes you may need to make.",
          "The British Heart Foundation's cardiac nurses are on 0808 802 1234 (freephone), weekdays from 9am to 5pm, excluding bank holidays. You can also email them or use live chat.",
          "You may find it helpful to get support from other people with heart failure, either at a local support group or online.",
        ],
      },
      {
        heading: "Palliative care is about quality of life",
        paragraphs: [
          "As part of your treatment you should be referred to a team of doctors and nurses for palliative care.",
          "Palliative care focuses on improving your quality of life. It includes managing your symptoms, helping you feel more comfortable, thinking about practical needs such as equipment you may need at home, and supporting your family.",
          "Palliative care is available when you first learn you have a life-limiting illness. You might be able to receive it while you're still receiving other therapies to treat your condition.",
        ],
      },
      {
        heading: "Planning ahead",
        paragraphs: [
          "Conversations about life expectancy and death are difficult. You may need to discuss your care, finances and wills. Sorting these things out when you feel well enough to do so can help give you and your loved ones peace of mind.",
          "Planning ahead, sometimes called advance care planning, involves thinking and talking about your wishes for how you're cared for. You can review your plan regularly and make changes to it if you want to.",
          "A lasting power of attorney lets the person or people of your choice make decisions about your care if you're no longer able to do so yourself.",
        ],
      },
      {
        heading: "Work, money and carers",
        paragraphs: [
          "Some people continue to work, sometimes with reduced hours, and others give up work temporarily or permanently. UK law requires most employers to make reasonable adjustments.",
          "Citizens Advice can give you free, confidential benefits advice. The charity Turn2us provides practical help to people who may be worried about finances.",
          "Carers can ask the local social care services department for a carer's assessment. If the person they care for is ever in distress, unable to breathe properly, has chest pain or collapses, dial 999 for an ambulance immediately.",
        ],
      },
      {
        heading: "Driving",
        paragraphs: [
          "Car and motorcycle drivers need to tell DVLA about heart failure if they have symptoms that affect their ability to drive safely, distract them when driving, or happen at rest. Bus, coach and lorry drivers need to tell DVLA if they've had heart failure.",
          "If you need to tell DVLA, stop driving. If you're still experiencing symptoms, stop driving while DVLA investigates; otherwise, stop driving for at least 1 month. Bus, coach and lorry drivers also stop while DVLA investigates if their doctor says they have poor contractility of the heart muscle. You can only restart driving when your doctor tells you it's safe.",
          "You can be fined up to £1,000 if you do not tell DVLA about a medical condition that affects your driving.",
        ],
      },
    ],
    helps: [
      "Ask when your next appointment will be, and where you can go for help and support in the meantime.",
      "Call the Heart Helpline on 0808 802 1234 to speak to a cardiac nurse.",
      "Write down any questions before appointments, and take someone with you who can help take notes.",
      "Talk about your wishes for your future care with your family and your team while you feel well.",
      "Get free, confidential benefits advice from Citizens Advice.",
    ],
    tryThisWeek: [
      "Save the Heart Helpline number.",
      "Write your questions down.",
      "Talk through your wishes.",
    ],
    ask: "Is there a heart failure nurse I can contact, and can I be referred for palliative care?",
    interactive: {
      kind: "flip-cards",
      title: "Support, turned over",
      intro: "Tap a card to see what each kind of support offers.",
      cards: [
        { id: "helpline", front: "Heart Helpline", when: "Weekdays, 9am to 5pm", back: "Speak to a British Heart Foundation cardiac nurse on 0808 802 1234 (freephone), by email or by live chat." },
        { id: "group", front: "Support groups", when: "Locally or online", back: "Share experiences with other people who have heart failure." },
        { id: "palliative", front: "Palliative care team", when: "As part of your treatment", back: "Focuses on your quality of life: managing symptoms, comfort, practical needs and supporting your family." },
        { id: "advance", front: "Advance care plan", when: "While you feel well", back: "Your wishes for how you're cared for, written down. You can review it and change it." },
        { id: "lpa", front: "Lasting power of attorney", when: "Planning for the future", back: "Lets people of your choice make decisions about your care if you're no longer able to." },
        { id: "carer", front: "Carer's assessment", when: "For the person who cares for you", back: "Looks at the help a carer needs with caring and with their own health." },
      ],
    },
    sources: [NHS_HF, BHF_UNDERSTANDING, BHF_GUIDE, BHF_HELPLINE, NHS_EOL, NHS_PLAN_AHEAD, GOV_HF_DRIVING],
    quiz: {
      question: "What does palliative care focus on?",
      options: [{ text: "Improving your quality of life", right: true }, { text: "Only the last days of life" }, { text: "Stopping all treatment" }],
      why: "Palliative care focuses on improving your quality of life.",
    },
  },
];
