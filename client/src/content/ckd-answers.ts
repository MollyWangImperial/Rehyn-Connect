import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Chronic kidney disease page's pieces
// (content/library-conditions/cancer-mind-digestion.ts). Every sentence was written from wording checked on
// 21 October 2026 on the pages listed under each answer's `sources`; nothing is added that those pages do
// not say. Most of it comes from the NHS, Kidney Care UK, the National Kidney Federation and Kidney Research
// UK. General information only; it never replaces what a person's own GP or kidney team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const kcuk = (label: string, path: string): LearnSource => ({ label: `Kidney Care UK: ${label}`, url: `https://kidneycareuk.org/${path}` });
const nkf = (label: string, path: string): LearnSource => ({ label: `National Kidney Federation: ${label}`, url: `https://www.kidney.org.uk/${path}` });
const kruk = (label: string, path: string): LearnSource => ({ label: `Kidney Research UK: ${label}`, url: `https://www.kidneyresearchuk.org/${path}` });

const NHS_CKD = nhs("Chronic kidney disease", "conditions/kidney-disease/");
const NHS_CKD_DIAGNOSIS = nhs("Diagnosis of chronic kidney disease", "conditions/kidney-disease/diagnosis/");
const NHS_CKD_TREATMENT = nhs("Treatment of chronic kidney disease", "conditions/kidney-disease/treatment/");
const NHS_CKD_LIVING = nhs("Living with chronic kidney disease", "conditions/kidney-disease/living-with/");
const NHS_CKD_PREVENTION = nhs("Preventing chronic kidney disease", "conditions/kidney-disease/prevention/");
const NHS_AKI = nhs("Acute kidney injury (AKI)", "conditions/acute-kidney-injury/");
const NHS_NSAIDS = nhs("NSAIDs", "medicines/nsaids/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_DAPAGLIFLOZIN = nhs("Dapagliflozin", "medicines/dapagliflozin/");
const NHS_DEHYDRATION = nhs("Dehydration", "conditions/dehydration/");
const NHS_DIALYSIS_HOW = nhs("How dialysis is done", "tests-and-treatments/dialysis/how-its-done/");

const KCUK_FACTS_YOURS = kcuk("Facts about your kidneys", "kidney-disease-information/about-kidney-health/facts-about-your-kidneys/");
const KCUK_FACTS = kcuk("Facts about kidneys", "kidney-disease-information/about-kidney-health/facts-about-kidneys/");
const KCUK_CKD = kcuk("Chronic kidney disease (CKD)", "kidney-disease-information/kidney-conditions/patient-info-ckd-chronic-kidney-disease/");
const KCUK_AKI = kcuk("Acute kidney injury (AKI)", "kidney-disease-information/kidney-conditions/patient-info-acute-kidney-injury-aki/");
const KCUK_EARLY = kcuk("Early stage CKD", "kidney-disease-information/early-stage-ckd/");
const KCUK_STAGE3 = kcuk("Stage 3 (CKD3)", "kidney-disease-information/stages-of-kidney-disease/stage-3/");
const KCUK_STAGE4 = kcuk("Stage 4 (CKD4)", "kidney-disease-information/stages-of-kidney-disease/stage-4/");
const KCUK_RISK = kcuk("Understanding risk factors of kidney disease", "kidney-disease-information/about-kidney-health/understanding-risk-factors-of-kidney-disease/");
const KCUK_DIABETES = kcuk("Focus on diabetes and kidney disease", "kidney-disease-information/about-kidney-health/understanding-risk-factors-of-kidney-disease/focus-on-diabetes-and-kidney-disease/");
const KCUK_BP = kcuk("Focus on high blood pressure and kidney disease", "kidney-disease-information/about-kidney-health/understanding-risk-factors-of-kidney-disease/focus-on-high-blood-pressure-and-kidney-disease/");
const KCUK_FAMILY = kcuk("Focus on family history and chronic kidney disease", "kidney-disease-information/about-kidney-health/understanding-risk-factors-of-kidney-disease/focus-on-family-history-and-chronic-kidney-disease/");
const KCUK_HEART = kcuk("Focus on heart disease and kidney disease", "kidney-disease-information/about-kidney-health/understanding-risk-factors-of-kidney-disease/focus-on-heart-disease-and-kidney-disease/");
const KCUK_HBP_HUB = kcuk("High blood pressure and kidney disease", "kidney-disease-information/high-blood-pressure-and-kidney-disease/");
const KCUK_TESTS = kcuk("Tests for chronic kidney disease", "kidney-disease-information/about-kidney-health/tests-for-chronic-kidney-disease/");
const KCUK_RESULTS = kcuk("Understanding your CKD blood and urine test results", "kidney-disease-information/treatments/patient-info-understanding-your-ckd-blood-and-urine-test-results/");
const KCUK_MED_BP = kcuk("Medicines for high blood pressure", "kidney-disease-information/treatments/medication-for-kidney-disease/patient-info-medicines-for-high-blood-pressure/");
const KCUK_MED_CKD = kcuk("Medicines for chronic kidney disease (CKD)", "kidney-disease-information/treatments/medication-for-kidney-disease/patient-info-medicines-for-chronic-kidney-disease-ckd/");
const KCUK_SGLT2 = kcuk("SGLT2 inhibitors", "kidney-disease-information/treatments/medication-for-kidney-disease/patient-info-sglt2-inhibitors/");
const KCUK_OTC = kcuk("Over-the-counter medicines", "kidney-disease-information/treatments/medication-for-kidney-disease/patient-info-over-the-counter-medicines/");
const KCUK_PAIN = kcuk("Pain medication for people with chronic kidney disease", "kidney-disease-information/treatments/medication-for-kidney-disease/patient-info-pain-medication-for-people-with-chronic-kidney-disease/");
const KCUK_MED_ANAEMIA = kcuk("Medicines for anaemia and mineral bone disease", "kidney-disease-information/treatments/medication-for-kidney-disease/patient-info-medicines-for-anaemia-and-mineral-bone-disease/");
const KCUK_EATING = kcuk("Healthy eating and lifestyle for your kidneys", "get-support/healthy-diet-support/patient-info-healthy-eating-and-lifestyle-for-your-kidneys/");
const KCUK_POTASSIUM = kcuk("Potassium and chronic kidney disease (CKD)", "get-support/healthy-diet-support/potassium-and-chronic-kidney-disease/");
const KCUK_LOW_POTASSIUM = kcuk("Lowering your potassium levels", "get-support/healthy-diet-support/patient-info-lowering-your-potassium-levels/");
const KCUK_FLUID = kcuk("Managing your fluid levels", "get-support/healthy-diet-support/patient-info-managing-your-fluid-levels/");
const KCUK_FATIGUE = kcuk("Fatigue (tiredness)", "kidney-disease-information/living-with-kidney-disease/managing-symptoms/patient-info-fatigue-tiredness/");
const KCUK_ANAEMIA_QA = kcuk("Anaemia and CKD: your questions answered", "kidney-disease-information/living-with-kidney-disease/managing-symptoms/anaemia-and-ckd-your-questions-answered/");
const KCUK_ANAEMIA_MANAGING = kcuk("Managing anaemia and chronic kidney disease (CKD)", "kidney-disease-information/living-with-kidney-disease/managing-symptoms/anaemia-and-ckd-your-questions-answered/managing-anaemia-and-chronic-kidney-disease-ckd/");
const KCUK_ANAEMIA_IRON = kcuk("Anaemia: iron comes first", "kidney-disease-information/living-with-kidney-disease/managing-symptoms/anaemia-and-ckd-your-questions-answered/anaemia-iron-comes-first/");
const KCUK_IRON = kcuk("Your kidneys and iron: what you need to know", "kidney-disease-information/living-with-kidney-disease/managing-symptoms/anaemia-and-ckd-your-questions-answered/your-kidneys-and-iron-what-you-need-to-know/");
const KCUK_FAILURE = kcuk("Kidney failure", "kidney-disease-information/kidney-conditions/patient-info-kidney-failure/");
const KCUK_CONSERVATIVE = kcuk("Conservative kidney management", "kidney-disease-information/treatments/choosing-conservative-kidney-management/");

const NKF_CKD = nkf("Chronic kidney disease", "chronic-kidney-disease");
const NKF_STAGE3 = nkf("Stage 3 chronic kidney disease", "stage-3-chronic-kidney-disease");
const NKF_AKI = nkf("Acute kidney injury", "acute-kidney-injury");
const NKF_EATING = nkf("Healthy eating for people with chronic kidney disease (CKD)", "healthy-eating-for-people-with-chronic-kidney-disease-ckd");
const NKF_PAIN = nkf("Pain in kidney or urine diseases", "pain-in-kidney-or-urine-diseases");

const KRUK_STAGES = kruk("Kidney disease stages", "kidney-health-information/stages-of-kidney-disease/");
const KRUK_PROTEINURIA = kruk("Proteinuria", "conditions-symptoms/proteinuria/");
const KRUK_DIAGNOSED = kruk("How is kidney disease diagnosed?", "kidney-health-information/about-kidney-disease/how-is-kidney-disease-diagnosed/");

export const ckdAnswers: LearnArticle[] = [
  {
    id: "ckd-what-kidneys-do",
    kicker: "Understanding",
    question: "What do the kidneys actually do?",
    hook: "Two fist-sized filters that clean your blood, balance fluid and salts, and make hormones for blood pressure, red blood cells and bones.",
    short: "Your kidneys filter your blood to get rid of waste products and extra fluid, which leave your body as urine. They also keep the balance of water, salts and minerals right, and release hormones that help control blood pressure, make red blood cells and keep bones healthy. When they stop working so well, all of these jobs can be affected.",
    sections: [
      {
        heading: "Where they are",
        paragraphs: [
          "Most people have two kidneys. They sit just below your rib cage, on either side of your spine, and each is about the size of an adult fist and shaped like a bean.",
          "On average, a kidney is 12cm long, 6cm wide and 3cm thick, and weighs 150g. The kidneys are part of the urinary tract, which means all the organs involved in making and passing urine.",
        ],
      },
      {
        heading: "Filtering the blood",
        paragraphs: [
          "Blood flows into each kidney from an artery that comes from your heart. Tiny blood vessels inside filter it, and veins carry the cleaned blood back into your bloodstream.",
          "Each kidney contains about a million tiny filtering units, called nephrons. The waste that is filtered out flows down a tube called the ureter to your bladder, and leaves your body when you wee. Kidney Care UK says the kidneys filter around 180 litres of blood every day.",
        ],
      },
      {
        heading: "Balancing water and salts",
        paragraphs: [
          "Your kidneys keep a healthy balance of water, salts and minerals, such as sodium, potassium and calcium, in your blood.",
          "If you have not drunk enough, they make more concentrated urine, which is why your wee looks dark. If you have drunk a lot, they get rid of the extra as pale, watery wee.",
        ],
      },
      {
        heading: "Making hormones",
        paragraphs: [
          "Renin keeps blood pressure normal. If blood pressure falls too low, the kidneys release renin to make the small blood vessels narrow, raising it.",
          "Erythropoietin, or EPO, works in your bone marrow to boost the making of red blood cells, which carry oxygen. The kidneys also change vitamin D into an active form that helps your gut absorb calcium and keeps bones and muscles healthy.",
        ],
      },
      {
        heading: "When they do not work so well",
        paragraphs: [
          "If your kidneys stop working so well, this is called chronic kidney disease, or CKD. It can cause high blood pressure, anaemia, which is a low red blood cell count, and weakened bones.",
          "CKD can also raise the risk of heart and blood vessel disease. But many people with CKD are able to live long lives with the condition.",
        ],
      },
    ],
    helps: [
      "Know your blood pressure and cholesterol levels, and have them treated if they are high.",
      "Have a healthy lifestyle and avoid becoming overweight, which increases the risk of diabetes.",
      "Stop smoking, as smoking damages the fine blood vessels in your kidneys.",
      "Avoid NSAIDs such as ibuprofen, which can damage the kidneys if used long term.",
      "See a GP if you have persistent or worrying symptoms that you think could be caused by kidney disease.",
    ],
    tryThisWeek: [
      "Find out your blood pressure.",
      "Get help to stop smoking.",
      "Avoid ibuprofen-type painkillers.",
    ],
    ask: "Which of my kidneys' jobs are affected, and what do my results show?",
    interactive: {
      kind: "flip-cards",
      title: "The kidneys' jobs, card by card",
      intro: "Turn each card to see what that job involves.",
      cards: [
        { id: "filter", front: "Filtering", when: "Many times a day", back: "Tiny blood vessels filter waste and extra fluid out of your blood, and it leaves your body as urine." },
        { id: "balance", front: "Water and salts", when: "Sodium, potassium, calcium", back: "Kept in a healthy balance in your blood. Your wee is darker or paler depending on how much you drink." },
        { id: "renin", front: "Renin", when: "A hormone for blood pressure", back: "Released if blood pressure falls too low, to make small blood vessels narrow and raise it." },
        { id: "epo", front: "EPO (erythropoietin)", when: "A hormone for red blood cells", back: "Works in your bone marrow to boost the making of red blood cells, which carry oxygen." },
        { id: "vitamin-d", front: "Vitamin D", when: "For bones and muscles", back: "Changed by the kidneys into an active form that helps your gut absorb calcium." },
      ],
    },
    sources: [KCUK_FACTS_YOURS, KCUK_FACTS, KCUK_AKI, NHS_CKD, NKF_STAGE3],
    quiz: {
      question: "Which hormone made by the kidneys helps make red blood cells?",
      options: [{ text: "Erythropoietin (EPO)", right: true }, { text: "Insulin" }, { text: "Adrenaline" }],
      why: "Erythropoietin, or EPO, works in your bone marrow to boost the making of red blood cells, which carry oxygen.",
    },
  },
  {
    id: "ckd-egfr",
    kicker: "Understanding",
    question: "What does my eGFR number mean, and what stage am I?",
    hook: "One number from a blood test, roughly the percentage your kidneys are working. Most people stay in the early stages.",
    short: "eGFR stands for estimated glomerular filtration rate. It comes from a blood test for a waste product called creatinine, and shows how well your kidneys filter your blood. Healthy kidneys filter more than 90ml/min, and the result places kidney disease in one of five stages. With treatment, most people at stage 3 stay stable.",
    sections: [
      {
        heading: "Where the number comes from",
        paragraphs: [
          "The main test for kidney disease is a blood test that measures a waste product called creatinine. Your muscles make it during normal everyday activity, and healthy kidneys filter it out into your urine.",
          "A doctor uses the result, plus your age, size and gender, to work out how many millilitres of waste your kidneys should be able to filter in a minute. This is your estimated glomerular filtration rate, or eGFR.",
        ],
      },
      {
        heading: "Reading it as a percentage",
        paragraphs: [
          "Your eGFR may be shown in ml/min or as a percentage. An eGFR of 50ml/min means your kidneys are working at about 50%.",
          "Higher is better. Healthy kidneys should be able to filter more than 90ml/min, and you may have CKD if your rate is lower than this.",
        ],
      },
      {
        heading: "The five stages",
        paragraphs: [
          "Stage 1 is a normal eGFR above 90, but other tests have found signs of kidney damage. Stage 2 is 60 to 89, with other signs of damage. Stage 3a is 45 to 59, and stage 3b is 30 to 44.",
          "Stage 4 is 15 to 29. Stage 5 is below 15, meaning the kidneys have lost almost all of their function. A urine test is staged too, from A1 to A3, and for both a higher stage means more severe kidney disease.",
        ],
      },
      {
        heading: "One reading is not the whole story",
        paragraphs: [
          "eGFR is not used on its own. An eGFR as low as 60 may be considered normal if there is no other sign of kidney disease, and if yours is under 60, your doctor will normally want to repeat the test in a couple of weeks.",
          "Creatinine can be higher after recent exercise, in people with more muscle, or after eating meat, so you may be asked not to eat meat for 12 hours before the test. Sometimes the overall trend in your results matters more than the exact number.",
        ],
      },
      {
        heading: "What the stages usually mean",
        paragraphs: [
          "The eGFR usually goes down by about 1ml/min a year as people get older. A healthy person aged 75 may have an eGFR of 50 to 60.",
          "With treatment and lifestyle changes, most people stay stable at stage 3 and their CKD does not get worse. Most people with stages 1 to 3 will never need to see a kidney specialist, and only 1 in 50 people with CKD will ever need dialysis or a transplant.",
        ],
      },
    ],
    helps: [
      "Get to know your own test results: understanding them can help you make informed decisions about your health.",
      "Speak to your healthcare team if you have any questions or concerns about your results.",
      "Look at the overall trend in your results, not just one number.",
      "If you are asked to, avoid eating meat for 12 hours before a blood test, as it can give a misleading reading.",
      "Check whether your results are available in your online GP health record.",
      "Expect blood and urine tests at least once a year if you have stages 1 to 3.",
    ],
    tryThisWeek: [
      "Find your last eGFR result.",
      "Look at the trend, not one number.",
      "Skip meat before a blood test if asked.",
    ],
    ask: "What is my eGFR and stage, and is it stable?",
    interactive: {
      kind: "scenarios",
      title: "Reading your eGFR",
      scenarios: [
        {
          id: "fifty",
          situation: "Your eGFR is 50ml/min.",
          options: [{ text: "Kidneys working at about 50%", best: true }, { text: "Your kidneys have failed" }],
          why: "An eGFR of 50ml/min means your kidneys are working at about 50%.",
        },
        {
          id: "first-low",
          situation: "A first eGFR result comes back under 60.",
          options: [{ text: "Expect a repeat test soon", best: true }, { text: "Assume it is kidney failure" }],
          why: "If your eGFR is under 60, your doctor will normally want to repeat the test in a couple of weeks.",
        },
        {
          id: "meat",
          situation: "Your blood test is tomorrow morning.",
          options: [{ text: "Skip meat for 12 hours if asked", best: true }, { text: "Have a big steak tonight" }],
          why: "You may be asked not to eat meat for 12 hours before the test, as it can give a misleading reading.",
        },
        {
          id: "stage-3",
          situation: "You are told you have stage 3 CKD.",
          options: [{ text: "Most people stay stable here", best: true }, { text: "Dialysis is coming soon" }],
          why: "With treatment and lifestyle changes, most people stay stable at stage 3 and their CKD does not get worse.",
        },
      ],
    },
    sources: [NHS_CKD_DIAGNOSIS, KCUK_CKD, KCUK_TESTS, KCUK_RESULTS, NKF_CKD, KCUK_STAGE3, KCUK_EARLY],
    quiz: {
      question: "Is a higher or a lower eGFR better?",
      options: [{ text: "Higher", right: true }, { text: "Lower" }, { text: "It makes no difference" }],
      why: "Higher is better. Healthy kidneys should be able to filter more than 90ml/min.",
    },
  },
  {
    id: "ckd-causes",
    kicker: "Causes",
    question: "Why did I get kidney disease?",
    hook: "Usually not one cause but a few: diabetes and high blood pressure most of all, with age, family and some medicines playing a part.",
    short: "CKD is usually caused by other conditions that put a strain on the kidneys, often a combination of them. The two biggest are diabetes and high blood pressure, which together are factors in two out of three cases. Age, family history, kidney inflammation and long-term use of some medicines can also play a part.",
    sections: [
      {
        heading: "Usually more than one thing",
        paragraphs: [
          "Chronic kidney disease is usually caused by other conditions that put a strain on the kidneys. Often it is the result of a combination of different problems.",
          "CKD can also sometimes make those underlying conditions worse. Your GP will try to find out what has caused your CKD, to help decide the best treatment for you.",
        ],
      },
      {
        heading: "Diabetes",
        paragraphs: [
          "Too much glucose in your blood can damage the tiny filters in the kidneys. Over a long time, it makes extra blood flow through them, so they have to work harder, and eventually they can be damaged and leak.",
          "Nearly one in five people with diabetes will need to be treated for CKD. But having diabetes does not mean you will definitely develop it, and there is a lot you and your healthcare team can do to lower the risk.",
        ],
      },
      {
        heading: "High blood pressure",
        paragraphs: [
          "Over time, high blood pressure can put strain on the small blood vessels in the kidneys and stop them working properly. It also damages the delicate filtering units in your kidneys.",
          "It works both ways. High blood pressure can cause CKD, and CKD can in turn raise your blood pressure more.",
        ],
      },
      {
        heading: "Other causes",
        paragraphs: [
          "High cholesterol can cause a build-up of fatty deposits in the blood vessels supplying the kidneys. Kidney infections, kidney inflammation called glomerulonephritis, and blockages in the flow of urine, such as kidney stones that keep coming back or an enlarged prostate, can also cause CKD.",
          "So can long-term, regular use of certain medicines, such as lithium and NSAIDs like ibuprofen. Kidney Care UK says occasional use of these painkillers is not a problem, but taking them every day for a long time may harm the kidneys.",
        ],
      },
      {
        heading: "Who is more likely to get it",
        paragraphs: [
          "CKD is more common as people get older. Around 4 in 10 people over the age of 70 have some form of it, and kidney function can decline naturally with age in some people.",
          "It is more common in people who are Black or of South Asian origin, and in people with a family history of kidney disease. Experts know of more than 60 inherited kidney diseases, though autosomal dominant polycystic kidney disease is the only common one.",
        ],
      },
    ],
    helps: [
      "If you have diabetes or high blood pressure, follow your GP's advice, take any medicine you are prescribed and keep all your appointments.",
      "If you are worried about your risk, talk to your doctor, who can check your kidneys and the conditions linked with CKD.",
      "If a close relative has had an inherited kidney disease, ask your doctor about genetic testing.",
      "Talk to your family about kidney health, and make healthy changes together.",
      "If you are over 40, ask about the free NHS Health Check, offered every five years.",
      "If you take long-term medicines that can affect the kidneys, such as lithium, omeprazole or NSAIDs, ask about regular kidney tests.",
    ],
    tryThisWeek: [
      "Keep your diabetes or blood pressure appointments.",
      "Ask your family about kidney health.",
      "Ask about regular kidney tests.",
    ],
    ask: "What do you think caused my CKD, and can that cause be treated?",
    interactive: {
      kind: "risk-check",
      title: "What raises the risk?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "diabetes", label: "Diabetes", note: "Too much glucose in your blood can damage the tiny filters in the kidneys.", changeable: true },
        { id: "bp", label: "High blood pressure", note: "With diabetes, a factor in two out of three CKD cases. It strains the kidneys' small blood vessels.", changeable: true },
        { id: "cholesterol", label: "High cholesterol", note: "Can cause fatty deposits in the blood vessels supplying your kidneys.", changeable: true },
        { id: "painkillers", label: "Taking ibuprofen-type painkillers daily", note: "Taking them every day for a long time may harm your kidneys. Occasional use is not a problem.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Kidney Care UK says it can make kidney disease worse and raise your risk of heart disease.", changeable: true },
        { id: "age", label: "Being over 60", note: "People over 60 years old are at greater risk.", changeable: false },
        { id: "family", label: "A family history of kidney disease", note: "If a close relative had an inherited kidney disease, ask about genetic testing.", changeable: false },
        { id: "background", label: "Black or South Asian origin", note: "CKD is more common in people who are Black or of South Asian origin.", changeable: false },
      ],
    },
    sources: [NHS_CKD, KCUK_RISK, KCUK_DIABETES, KCUK_BP, KCUK_FAMILY, KCUK_EARLY, NHS_CKD_DIAGNOSIS, KCUK_HEART, KCUK_CKD, NHS_CKD_PREVENTION],
    quiz: {
      question: "What are the two biggest risk factors for CKD?",
      options: [{ text: "Diabetes and high blood pressure", right: true }, { text: "Coffee and alcohol" }, { text: "Not drinking enough water" }],
      why: "The two biggest are diabetes and high blood pressure, which together are factors in two out of three cases.",
    },
  },
  {
    id: "ckd-protein",
    kicker: "Understanding",
    question: "Why does protein in my urine matter?",
    hook: "Healthy kidneys keep protein in the blood. When it leaks into urine, it is an early sign of damage, and one that treatment can target.",
    short: "Healthy kidneys only let tiny amounts of protein into the urine. When the filters are damaged, a protein called albumin leaks through, which can be an early sign of kidney damage. A urine test called the ACR measures it, and is staged from A1 to A3 alongside your eGFR.",
    sections: [
      {
        heading: "Why protein leaks",
        paragraphs: [
          "Protein is present in the blood, and healthy kidneys should only filter tiny amounts into the urine, as most protein molecules are too large for the filters. When protein does leak into the urine, it is called proteinuria.",
          "In CKD, damage to the kidneys' filter system lets blood and protein leak into the urine. The protein most relevant to kidney disease is albumin, and finding it in urine can be an early sign of kidney damage.",
        ],
      },
      {
        heading: "The ACR test",
        paragraphs: [
          "The urine test checks the levels of albumin and creatinine in your urine, known as the albumin:creatinine ratio, or ACR. Because it compares the two, the amount of water you drink does not affect the result.",
          "You will usually be asked for a sample of your wee early in the morning. Alongside your eGFR, the test gives a more accurate picture of how well your kidneys are working.",
        ],
      },
      {
        heading: "The A stages",
        paragraphs: [
          "A1 is an ACR of less than 3mg/mmol. A2 is 3 to 30mg/mmol, and A3 is more than 30mg/mmol. The higher your ACR, the more serious your kidney disease may be.",
          "If your ACR is 3 to 70mg/mmol, your doctor will want to repeat the test within the next three months. Above 70mg/mmol, the protein is so high that a repeat test is not needed.",
        ],
      },
      {
        heading: "Not always a kidney problem",
        paragraphs: [
          "Protein in the urine does not usually cause symptoms. If the loss is heavy, urine can look frothy, usually along with other symptoms such as swelling.",
          "A positive dipstick is not always abnormal. A concentrated first-morning sample, dehydration, vigorous exercise or a high fever can all show some protein for a while, and a urine infection can cause it too.",
        ],
      },
      {
        heading: "Why it guides treatment",
        paragraphs: [
          "Leakage of protein into the urine increases the risk of any kidney disease, so everyone with CKD should have a urine test to measure it. Poorly controlled blood pressure, poorly controlled diabetes and weight gain all make the leak worse.",
          "Combining your ACR with your eGFR helps doctors predict whether your kidney disease is likely to progress. In general, the higher the A stage, the more likely you are to benefit from blood pressure-lowering treatment.",
        ],
      },
    ],
    helps: [
      "Make sure you have a urine test for protein, as everyone with CKD should.",
      "Give an early-morning urine sample when you are asked for one.",
      "Keep your blood pressure and diabetes well controlled, as poor control makes the protein leak worse.",
      "If you have diabetes and CKD, ask whether an ACE inhibitor or ARB could protect your kidney function, even if your blood pressure is below 130/80.",
      "Speak to your GP if you have any concerns about protein in your urine.",
    ],
    tryThisWeek: [
      "Ask for your latest ACR result.",
      "Give a morning sample when asked.",
      "Keep blood pressure under control.",
    ],
    ask: "What was my last ACR, and would a medicine help reduce the protein leak?",
    interactive: {
      kind: "scenarios",
      title: "Reading your urine result",
      scenarios: [
        {
          id: "a1",
          situation: "Your ACR is below 3mg/mmol.",
          options: [{ text: "No further action is needed", best: true }, { text: "Repeat it every week" }],
          why: "If your ACR is below 3mg/mmol, no further action is needed.",
        },
        {
          id: "repeat",
          situation: "Your ACR is 20mg/mmol.",
          options: [{ text: "Expect a repeat within three months", best: true }, { text: "Ignore it" }],
          why: "If your ACR is 3 to 70mg/mmol, your doctor will want to repeat the test within the next three months.",
        },
        {
          id: "exercise",
          situation: "A dipstick showed protein after a hard workout.",
          options: [{ text: "It may only be temporary", best: true }, { text: "It always means kidney disease" }],
          why: "Temporary proteinuria may occur after vigorous exercise or if you have a high fever.",
        },
        {
          id: "frothy",
          situation: "Your urine has started to look frothy.",
          options: [{ text: "Mention it to your GP", best: true }, { text: "Drink less to see if it stops" }],
          why: "If the protein loss is heavy, urine can look frothy. Speak to your GP if you have any concerns about protein in your urine.",
        },
      ],
    },
    sources: [NHS_CKD_DIAGNOSIS, KCUK_TESTS, KCUK_CKD, KRUK_PROTEINURIA, KRUK_STAGES, NKF_CKD, KCUK_BP, KRUK_DIAGNOSED],
    quiz: {
      question: "Which protein does the ACR urine test look for?",
      options: [{ text: "Albumin", right: true }, { text: "Insulin" }, { text: "Haemoglobin" }],
      why: "The urine test checks the levels of albumin and creatinine in your urine, known as the albumin:creatinine ratio, or ACR.",
    },
  },
  {
    id: "ckd-blood-pressure",
    kicker: "Treatment",
    question: "Why does blood pressure matter so much for my kidneys?",
    hook: "High blood pressure damages the kidneys' filters, and damaged kidneys push blood pressure up. Breaking that loop protects them most.",
    short: "Good control of blood pressure is vital to protect the kidneys. The NHS says people with kidney disease should usually aim for below 140/90mmHg, or below 130/80mmHg if they also have diabetes. A combination of medicines is often needed, alongside less salt, staying active and not smoking.",
    sections: [
      {
        heading: "A two-way loop",
        paragraphs: [
          "More than one in two people with CKD have high blood pressure. High blood pressure can cause CKD in the first place, and CKD can in turn raise your blood pressure more.",
          "High blood pressure damages the delicate filtering units in your kidneys and affects how they get rid of waste and extra fluid. The extra fluid builds up and pushes blood pressure higher still, which makes it more likely the kidney disease will get worse.",
        ],
      },
      {
        heading: "Your target",
        paragraphs: [
          "The NHS says people with kidney disease should usually aim to get their blood pressure below 140/90mmHg, or below 130/80mmHg if they also have diabetes.",
          "Kidney Care UK says that if you have CKD, diabetes or both, your doctor may want you to keep it below 130/80. Everyone is a bit different, so your GP can tell you what you should be aiming for.",
        ],
      },
      {
        heading: "The medicines",
        paragraphs: [
          "Medicines called ACE inhibitors are often used, such as ramipril, enalapril and lisinopril. Side effects can include a persistent dry cough, dizziness, tiredness and headaches, and if they are troublesome you can be given an angiotensin-II receptor blocker, or ARB, instead.",
          "A combination of a few medicines is often needed to reach your target. If you have diabetes and CKD, you may be given an ACE inhibitor or ARB even if your blood pressure is below 130/80, as these medicines can protect kidney function.",
        ],
      },
      {
        heading: "Keep taking them",
        paragraphs: [
          "High blood pressure may not make you feel unwell, but it can damage your kidneys, so it is important to keep taking your medicines even if you do not feel any different.",
          "A common effect is feeling dizzy when you stand up, so try not to stand up too quickly. If you have side effects, do not stop all your medicines suddenly, as your blood pressure can rise. Talk to your doctor or nurse.",
        ],
      },
      {
        heading: "What you can do",
        paragraphs: [
          "Reducing salt, eating a healthy, balanced diet, losing weight if you need to, staying active most days, not smoking and drinking no more than 14 units of alcohol a week all help to lower blood pressure.",
          "You can check your blood pressure with a cuff at home, or with your GP, practice nurse or pharmacist. A one-off high reading is usually nothing to worry about, but if it is consistently high, speak to your GP.",
        ],
      },
    ],
    helps: [
      "Ask your GP what your own blood pressure target is.",
      "Keep taking your blood pressure medicines, even if you feel fine.",
      "Try not to stand up too quickly if your tablets make you dizzy, and have your blood pressure checked.",
      "Use a home blood pressure monitor to help keep an eye on your readings.",
      "Cut down on salt: it is one of the best things you can do to help manage your blood pressure.",
      "Talk to your doctor or nurse about side effects, rather than stopping your medicines suddenly.",
    ],
    tryThisWeek: [
      "Ask what your target is.",
      "Take a reading at home.",
      "Cut down on salt.",
    ],
    ask: "What is my blood pressure target, and are my tablets the right ones for my kidneys?",
    interactive: {
      kind: "scenarios",
      title: "Blood pressure moments",
      scenarios: [
        {
          id: "fine",
          situation: "You feel well and your readings look good.",
          options: [{ text: "Keep taking your tablets", best: true }, { text: "Stop them, since you feel fine" }],
          why: "High blood pressure may not make you feel unwell, but it can damage your kidneys, so it is important to keep taking your medicines even if you do not feel any different.",
        },
        {
          id: "dizzy",
          situation: "You feel dizzy when you stand up.",
          options: [{ text: "Stand up slowly and get a check", best: true }, { text: "Stop all your tablets" }],
          why: "Try not to stand up too quickly. If you have side effects, do not stop all your medicines suddenly, as your blood pressure can rise.",
        },
        {
          id: "cough",
          situation: "Ramipril gives you a dry cough that will not go away.",
          options: [{ text: "Ask about an ARB instead", best: true }, { text: "Put up with it and say nothing" }],
          why: "If the side effects of ACE inhibitors are troublesome, you can be given an angiotensin-II receptor blocker, or ARB, instead.",
        },
        {
          id: "one-off",
          situation: "One home reading comes out high.",
          options: [{ text: "Keep an eye on your readings", best: true }, { text: "Double your tablets" }],
          why: "A one-off high reading is usually nothing to worry about, but if it is consistently high, speak to your GP.",
        },
      ],
    },
    sources: [NHS_CKD_TREATMENT, KCUK_BP, KCUK_MED_BP, NHS_CKD_LIVING, KCUK_HBP_HUB],
    quiz: {
      question: "Why might someone with diabetes and CKD take an ACE inhibitor even with normal blood pressure?",
      options: [{ text: "It can protect kidney function", right: true }, { text: "It cures diabetes" }, { text: "It replaces a statin" }],
      why: "If you have diabetes and CKD, you may be given an ACE inhibitor or ARB even if your blood pressure is below 130/80, as these medicines can protect kidney function.",
    },
  },
  {
    id: "ckd-medicines",
    kicker: "Treatment",
    question: "Which medicines protect my kidneys, and which should I avoid?",
    hook: "Some tablets help kidneys keep working for longer. Others, including some you can buy, can make CKD worse.",
    short: "There is no medicine that cures CKD, but some help keep the kidneys working for longer and control the problems linked to it. SGLT2 inhibitors such as dapagliflozin, blood pressure medicines and statins are common. Anti-inflammatory painkillers such as ibuprofen, potassium supplements and some over-the-counter products can harm the kidneys, so check with a pharmacist first.",
    sections: [
      {
        heading: "Medicines that protect",
        paragraphs: [
          "There is no medicine that can cure CKD. But medicine can help control many of the problems that cause it and the complications it can lead to, and keep the kidneys working for longer.",
          "Some SGLT2 inhibitors have been proven to slow CKD getting worse, even in people without diabetes. One called dapagliflozin is used to treat CKD and is often given to people who also have diabetes, but it is not suitable for everybody.",
        ],
      },
      {
        heading: "SGLT2 inhibitors",
        paragraphs: [
          "They work by stopping the kidneys taking glucose back into the blood, so more of it leaves the body in urine. This lowers blood glucose, and also reduces blood pressure and weight.",
          "They are taken as a tablet once a day. Most people get no side effects, but they can cause thrush, and because they make you produce more urine, it is important to drink enough water to stay hydrated.",
        ],
      },
      {
        heading: "Other common medicines",
        paragraphs: [
          "Blood pressure medicines such as ACE inhibitors are often used. Statins, such as atorvastatin and simvastatin, may be prescribed to reduce your risk of cardiovascular disease, including heart attack and stroke, which is higher with CKD.",
          "You may also be given medicines for problems CKD can cause, such as anaemia, bone problems or water retention. In the later stages, your medicines should be reviewed, as some doses may need to change and some drugs may need to be avoided.",
        ],
      },
      {
        heading: "Medicines to be careful with",
        paragraphs: [
          "Avoid over-the-counter NSAIDs, such as ibuprofen, unless a medical professional advises them, as they can harm your kidneys if you have kidney disease. It is also important to avoid potassium supplements, and some medicines for high blood pressure and heart failure can make potassium levels too high.",
          "Some medicines you can buy may cause problems with other medicines, make kidney function worse, or contain potassium, sodium or aluminium. Effervescent tablets contain salt, which can raise blood pressure, and vitamins, supplements and herbal medicines can also cause harm or interact with other medicines.",
        ],
      },
      {
        heading: "Telling everyone",
        paragraphs: [
          "Always tell your doctor and pharmacist that you have kidney disease, and check that a medicine is safe for you. Try to use the same pharmacy, so the pharmacist can build up a complete picture of what you take.",
          "Take any prescribed medicine, even if you do not feel unwell, as some are designed to prevent serious problems in the future. Do not stop any medication without taking medical advice.",
        ],
      },
    ],
    helps: [
      "Tell any doctor or pharmacist recommending a medicine that you have kidney disease.",
      "Check with a doctor or pharmacist before taking over-the-counter painkillers or supplements.",
      "Use the same pharmacy when you can, and include medicines you buy when your team asks what you take.",
      "Ask your healthcare team whether an SGLT2 inhibitor is a suitable treatment for you.",
      "Read the leaflet that comes with your medicine about possible interactions with other medicines or supplements.",
      "Speak to your care team about any side effects, and do not stop a medicine without medical advice.",
    ],
    tryThisWeek: [
      "Tell your pharmacist about your kidneys.",
      "Check before buying painkillers.",
      "Ask if an SGLT2 inhibitor suits you.",
    ],
    ask: "Which of my medicines need adjusting for my kidneys?",
    interactive: {
      kind: "flip-cards",
      title: "Your medicines, card by card",
      intro: "Turn each card to see what that kind of medicine means for your kidneys.",
      cards: [
        { id: "sglt2", front: "SGLT2 inhibitors", when: "Such as dapagliflozin, once a day", back: "Help keep the kidneys working for longer. Some slow CKD even in people without diabetes." },
        { id: "ace", front: "ACE inhibitors and ARBs", when: "Such as ramipril or lisinopril", back: "Lower blood pressure, and can protect kidney function. An ARB can replace an ACE inhibitor if side effects are troublesome." },
        { id: "statins", front: "Statins", when: "Such as atorvastatin or simvastatin", back: "Reduce the higher risk of heart attack and stroke that comes with CKD. Report any unexplained muscle aches." },
        { id: "nsaids", front: "NSAIDs", when: "Such as ibuprofen", back: "Can harm your kidneys if you have kidney disease. Avoid them unless a medical professional advises them." },
        { id: "potassium", front: "Potassium supplements", when: "Sold over the counter", back: "Best avoided with CKD, as they can make your potassium levels too high." },
      ],
    },
    sources: [NHS_CKD_TREATMENT, KCUK_SGLT2, NHS_DAPAGLIFLOZIN, KCUK_MED_CKD, NKF_CKD, KCUK_OTC, NHS_CKD_LIVING, KCUK_CKD, KCUK_BP],
    quiz: {
      question: "Which painkiller is usually best avoided with CKD?",
      options: [{ text: "Ibuprofen", right: true }, { text: "Paracetamol" }, { text: "Neither" }],
      why: "Avoid over-the-counter NSAIDs, such as ibuprofen, unless a medical professional advises them, as they can harm your kidneys if you have kidney disease.",
    },
  },
  {
    id: "ckd-food",
    kicker: "Food",
    question: "What should I eat with kidney disease?",
    hook: "For most people, simply a healthy diet with less salt. Limits on potassium, phosphate, protein or fluid come in only if your team advises them.",
    short: "If you have CKD, you may not need a special diet. A healthy, balanced diet with plenty of fruit, vegetables and wholegrains, and less salt and processed food, helps protect your kidneys. Only some people, often with more advanced CKD or particular blood results, are advised to limit potassium, phosphate, protein or fluids, with help from a kidney dietitian.",
    sections: [
      {
        heading: "No special diet for most",
        paragraphs: [
          "If you have CKD, you may not need a special diet. A diet that helps your kidneys is not different to a healthy diet, and there are no specific kidney-friendly foods.",
          "Kidney Care UK says only people with severe CKD, at stages 4 and 5, or whose blood tests show a specific problem with salts such as potassium, need specific kidney diets. Always speak to a health professional before you restrict your diet in any way.",
        ],
      },
      {
        heading: "Salt",
        paragraphs: [
          "Too much salt can lead to high blood pressure and fluid retention, which can affect your kidney function. The NHS advises less than 6g a day, which is around 1 teaspoon.",
          "Cook at home with fresh ingredients where you can, taste food before adding salt, and flavour it with herbs and spices. Processed foods, ready meals, cured meats, crisps and sauces such as soy sauce and ketchup can be high in salt.",
        ],
      },
      {
        heading: "Protein and plants",
        paragraphs: [
          "Beans, lentils, chickpeas and other pulses provide protein and are high in fibre. The Renal Nutrition Group, writing for the National Kidney Federation, says regularly replacing some of your meat with pulses may help to slow the loss of kidney function.",
          "Fish, eggs, meat and dairy can be part of a healthy diet in moderate amounts, but it is best to eat more plant protein and less meat, especially red meat. People with more advanced CKD may be advised to change how much protein they eat.",
        ],
      },
      {
        heading: "Potassium and phosphate",
        paragraphs: [
          "When the kidneys are not working well, potassium can build up in the blood, and very high levels can affect the way the heart beats. But in the early stages, potassium is good for your kidneys, so only restrict potassium-rich foods if a health professional advises you to.",
          "If blood tests show high levels of potassium and phosphate, you may be referred to a dietitian. Potassium and phosphate additives in processed foods are absorbed easily, so checking labels and cooking from scratch helps.",
        ],
      },
      {
        heading: "Fluids",
        paragraphs: [
          "Some people with kidney problems are advised to control how much they drink, because their kidneys cannot get rid of extra fluid. The fluid can build up, causing swelling and strain on the heart and lungs.",
          "Check with your kidney team before you cut back. Reducing your fluid when you have not been advised to may cause harm, and not drinking enough can lead to dehydration.",
        ],
      },
    ],
    helps: [
      "Eat a healthy, balanced diet with plenty of fruit, vegetables, pulses and wholegrains.",
      "Cut down on salt and processed foods, and use herbs and spices for flavour.",
      "Ask before using salt substitutes such as Lo-Salt, which contain a lot of potassium and are not always suitable with kidney disease.",
      "Only follow a special diet for your kidneys if your kidney doctor or dietitian has advised it.",
      "Check with your kidney team before you cut down how much you drink.",
      "If you need to change what you eat because of your CKD, you will be referred to a kidney dietitian: ask about this.",
    ],
    tryThisWeek: [
      "Cut down on salt.",
      "Ask before using salt substitutes.",
      "Check before drinking less.",
    ],
    ask: "Should I see a kidney dietitian?",
    interactive: {
      kind: "scenarios",
      title: "Everyday food choices",
      scenarios: [
        {
          id: "substitute",
          situation: "You want to swap salt for a low-sodium salt substitute.",
          options: [{ text: "Ask first: they are high in potassium", best: true }, { text: "Use as much as you like" }],
          why: "Salt substitutes such as Lo-Salt contain a lot of potassium and are not always suitable for people with kidney disease.",
        },
        {
          id: "early",
          situation: "You have stage 2 CKD and normal blood results.",
          options: [{ text: "A healthy, balanced diet", best: true }, { text: "A strict low-potassium diet" }],
          why: "Only people with severe CKD, at stages 4 and 5, or whose blood tests show a specific problem with salts such as potassium, need specific kidney diets.",
        },
        {
          id: "potatoes",
          situation: "Your team has told you to lower your potassium.",
          options: [{ text: "Boil potatoes and pour the water away", best: true }, { text: "Bake them in their skins" }],
          why: "Boiling potatoes and other vegetables reduces their potassium content, as some of the potassium leaks into the cooking water.",
        },
        {
          id: "fluid",
          situation: "You read online that drinking less is good for kidneys.",
          options: [{ text: "Check with your kidney team first", best: true }, { text: "Cut right down today" }],
          why: "Reducing your fluid when you have not been advised to may cause harm.",
        },
      ],
    },
    sources: [KCUK_EATING, NHS_CKD_LIVING, NHS_CKD_TREATMENT, KCUK_EARLY, NKF_EATING, KCUK_POTASSIUM, KCUK_LOW_POTASSIUM, KCUK_FLUID],
    quiz: {
      question: "Do most people with early CKD need a special kidney diet?",
      options: [{ text: "No, a healthy, balanced diet", right: true }, { text: "Yes, low potassium for everyone" }, { text: "Yes, with no protein at all" }],
      why: "If you have CKD, you may not need a special diet. A diet that helps your kidneys is not different to a healthy diet.",
    },
  },
  {
    id: "ckd-later-stages",
    kicker: "Treatment",
    question: "If it gets worse: what are dialysis and a transplant?",
    hook: "Most people never need either. For those who do, it usually happens slowly, with time to plan and a real choice.",
    short: "Only 1 in 50 people with CKD will ever need dialysis or a transplant. For those whose kidneys do stop working, it usually happens gradually, leaving time to plan. The options are dialysis, a kidney transplant, or supportive care without dialysis, and your kidney team helps you choose what suits your life.",
    sections: [
      {
        heading: "Usually a slow change",
        paragraphs: [
          "For a small proportion of people with CKD, the kidneys will eventually stop working. This usually happens gradually, so there should be time to plan the next stage of treatment.",
          "Only 1 in 50 people with CKD will ever need dialysis or a transplant. The National Kidney Federation says a treatment plan should be made with a kidney specialist team well before stage 5 is reached.",
        ],
      },
      {
        heading: "Haemodialysis",
        paragraphs: [
          "In haemodialysis, your blood flows into a machine, is cleaned, and flows back into your body. Each session takes around 4 hours, and most people need 3 sessions a week, at a local hospital or dialysis unit, or sometimes at home.",
          "Around 10 weeks before starting, you need a procedure to join an artery and a vein together, usually in your arm, to make a new blood vessel for the machine to attach to. This is called an arteriovenous fistula.",
        ],
      },
      {
        heading: "Peritoneal dialysis",
        paragraphs: [
          "In peritoneal dialysis, a special fluid flows into your tummy through a soft tube called a catheter. While it is inside you, it absorbs waste products, and after a few hours it is drained out.",
          "You can usually do it yourself at home, every day, either by hand during the day or with a machine overnight. A nurse will show you how.",
        ],
      },
      {
        heading: "A kidney transplant",
        paragraphs: [
          "A transplant is often the most effective treatment for advanced kidney disease. It involves major surgery, and taking medicines called immunosuppressants for the rest of your life to stop your body attacking the donor kidney.",
          "Donor kidneys can come from living or recently deceased donors, and one in three kidney transplants in the UK is now from a living donor. There is still a shortage, so you could wait months or years, and may need dialysis meanwhile. About 90% of transplants still function after 5 years.",
        ],
      },
      {
        heading: "Choosing not to have dialysis",
        paragraphs: [
          "Some people choose supportive care, also called conservative kidney management. It means not doing dialysis rather than not doing treatment: it still includes regular appointments, symptom control and support to live as well as possible.",
          "Your choice is personal, and can depend on your work, home, family and how you want to live. It is never too late to review your choice of care, and you can even change your treatment.",
        ],
      },
    ],
    helps: [
      "Find out early what treatment choices are available locally, so you have more time to talk them through with your team and family.",
      "Talk to your doctor about the pros and cons of each type of dialysis.",
      "Talk to staff and other patients about what they like and do not like about their treatment.",
      "If someone may be willing to donate a kidney, ask a transplant coordinator about living donation.",
      "Involve your family or carers in decisions about treatment.",
    ],
    tryThisWeek: [
      "Ask what choices exist locally.",
      "Ask about the pros and cons.",
      "Talk it through with family.",
    ],
    ask: "Is my kidney function changing, and when should we start planning together?",
    interactive: {
      kind: "flip-cards",
      title: "The options, card by card",
      intro: "Turn each card to see what each treatment involves.",
      cards: [
        { id: "haemodialysis", front: "Haemodialysis", when: "Usually 3 sessions a week", back: "A machine cleans your blood, around 4 hours a session, at a hospital or unit, or sometimes at home." },
        { id: "peritoneal", front: "Peritoneal dialysis", when: "Every day, usually at home", back: "Fluid flows into your tummy through a catheter, absorbs waste, and is drained out after a few hours." },
        { id: "transplant", front: "Kidney transplant", when: "From a living or deceased donor", back: "Often the most effective treatment. It needs major surgery and lifelong immunosuppressant medicines." },
        { id: "conservative", front: "Conservative kidney management", when: "Also called supportive care", back: "Keeps the kidneys working as long as possible and treats symptoms, without dialysis." },
      ],
    },
    sources: [NHS_CKD_TREATMENT, NHS_DIALYSIS_HOW, KCUK_FAILURE, KCUK_CONSERVATIVE, KCUK_CKD, NKF_CKD],
    quiz: {
      question: "How many people with CKD will ever need dialysis or a transplant?",
      options: [{ text: "Only 1 in 50", right: true }, { text: "Most of them" }, { text: "About half" }],
      why: "Only 1 in 50 people with CKD will ever need dialysis or a transplant.",
    },
  },
  {
    id: "ckd-sick-days",
    kicker: "Living well",
    question: "What are sick-day rules for my kidneys?",
    hook: "Being sick, having diarrhoea or a fever can dry you out, and some medicines then put the kidneys at risk. A plan made in advance helps.",
    short: "Sick-day rules are advice about how to take your medicines if you are unwell and become dehydrated, such as with vomiting, diarrhoea or a high temperature. Your doctor or nurse may suggest stopping some medicines, such as ACE inhibitors, ARBs, water tablets, metformin and SGLT2 inhibitors, until you have been eating and drinking normally again for at least 48 hours. Ask your team what applies to you before you need it.",
    sections: [
      {
        heading: "Why being ill matters",
        paragraphs: [
          "Taking certain medicines when you are unwell can lead to more severe illness. Dehydration happens if you are unable to drink fluid, or have diarrhoea or vomiting.",
          "If your kidneys are not working perfectly in the first place and you get ill, you are more likely to get acute kidney injury, a sudden drop in kidney function. Severe dehydration and infection are both important causes.",
        ],
      },
      {
        heading: "The medicines involved",
        paragraphs: [
          "Your doctor or nurse may suggest that you stop some of your medicines until you have been eating and drinking normally again for at least 48 hours. These can include ACE inhibitors, ARBs and water tablets, called diuretics.",
          "Other medicines you may be advised to stop include metformin, tolvaptan and SGLT2 inhibitors, sometimes called flozins. Always check with your GP, kidney doctor or pharmacist before changing any medicines.",
        ],
      },
      {
        heading: "SGLT2 inhibitors",
        paragraphs: [
          "Kidney Care UK says SGLT2 inhibitors should be stopped for a while if you are not eating or drinking as normal, have a high temperature, are dehydrated, have diarrhoea or vomiting, or are about to have an operation.",
          "You will usually be able to start taking them again when you have been feeling better for two days. Ask your healthcare team if you are unsure.",
        ],
      },
      {
        heading: "Signs to watch for",
        paragraphs: [
          "Acute kidney injury can cause peeing a lot less than usual, feeling very thirsty, feeling or being sick, swollen feet or legs, and feeling tired, dizzy, confused or sleepy. Many people get no symptoms, especially if it is mild.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you think you may have symptoms of acute kidney injury. Dark yellow pee or peeing less than normal can also be signs of serious dehydration.",
        ],
      },
      {
        heading: "Planning ahead",
        paragraphs: [
          "If you have had acute kidney injury before, ask your doctor which warning signs to watch for. You may be told to see a doctor sooner if you feel unwell, after 1 day rather than waiting 3 or 4 days.",
          "Drink enough fluids so your pee is pale and regular, especially in hot weather or if you are being sick or have diarrhoea. Some people with kidney problems are advised to control how much they drink, so check with your kidney team what applies to you.",
        ],
      },
    ],
    helps: [
      "Ask a doctor which medicines to avoid if you become dehydrated, for example with diarrhoea and vomiting or in a hot country.",
      "Ask your doctor which warning signs to watch for, and how soon to see a doctor when you feel unwell.",
      "If you take dapagliflozin and get vomiting, diarrhoea or a fever, talk to a pharmacist or doctor.",
      "Restart paused medicines as your doctor or nurse advises, usually once you have been eating and drinking normally for at least 48 hours.",
      "Get help from NHS 111 if you think you may have symptoms of acute kidney injury.",
      "Speak to a doctor before taking any new medicines or supplements.",
    ],
    tryThisWeek: [
      "Ask which medicines to pause when ill.",
      "Learn your warning signs.",
      "Know when to call NHS 111.",
    ],
    ask: "Which of my medicines should I stop if I am sick, and for how long?",
    interactive: {
      kind: "signs",
      title: "When you are unwell",
      intro: "Tick any that apply. These are the times sick-day advice is meant for, and signs worth reporting.",
      signs: ["Being sick (vomiting)", "Diarrhoea", "A high temperature", "Not eating or drinking as normal", "Peeing a lot less than usual", "Feeling very thirsty", "Dark yellow, strong-smelling pee", "Feeling dizzy, confused or sleepy"],
      after: "Follow the sick-day advice your team has given you. Ask for an urgent GP appointment or get help from NHS 111 if you think you have symptoms of acute kidney injury.",
      copyHeading: "When I was unwell",
    },
    sources: [KCUK_MED_BP, KCUK_SGLT2, KCUK_AKI, NHS_AKI, NKF_AKI, NHS_DAPAGLIFLOZIN, NHS_DEHYDRATION, KCUK_EATING],
    quiz: {
      question: "If a medicine is paused while you are ill, when might it usually restart?",
      options: [{ text: "After at least 48 hours of eating and drinking normally", right: true }, { text: "Straight away, as soon as you stop being sick" }, { text: "After a month" }],
      why: "Your doctor or nurse may suggest that you stop some of your medicines until you have been eating and drinking normally again for at least 48 hours.",
    },
  },
  {
    id: "ckd-painkillers",
    kicker: "Medicines",
    question: "Which painkillers are safe with kidney disease?",
    hook: "Paracetamol, in standard doses, is the safe first choice. Ibuprofen and the other anti-inflammatories are the ones to avoid.",
    short: "Paracetamol in standard doses is safe if you have kidney problems. Anti-inflammatory painkillers, called NSAIDs, such as ibuprofen, naproxen and aspirin, can make kidney function worse and are best avoided unless your kidney doctor approves them. Check cold remedies and gels too, and ask a pharmacist when you buy anything.",
    sections: [
      {
        heading: "Paracetamol first",
        paragraphs: [
          "Paracetamol in standard doses is safe to take if you have kidney problems. Kidney Care UK gives the standard dose as 500mg to 1g every four to six hours, with a maximum of eight tablets in 24 hours.",
          "Paracetamol is often found in cold and cough medicines, so be careful not to take two kinds at once. Co-codamol and co-dydramol both contain paracetamol too.",
        ],
      },
      {
        heading: "Why NSAIDs are a problem",
        paragraphs: [
          "NSAIDs, such as ibuprofen, naproxen, diclofenac and aspirin, can further reduce kidney function and cause fluid retention. They also increase blood pressure. The NHS lists kidney problems, with symptoms such as shortness of breath, blood in your pee or swollen ankles, feet or hands, among their possible serious side effects.",
          "The NHS says to avoid over-the-counter NSAIDs, except when advised to by a medical professional, as they can harm your kidneys if you have kidney disease. Kidney Care UK says to take them only if your kidney doctor has approved them.",
        ],
      },
      {
        heading: "Not just tablets",
        paragraphs: [
          "This applies to NSAID creams and gels as well as tablets. For muscle aches, Kidney Care UK lists Deep Heat or Ralgex as alternatives to tablets or creams containing ibuprofen.",
          "Some cold medicines contain an NSAID, so check the label. Avoid effervescent tablets, which contain salt that can increase your blood pressure.",
        ],
      },
      {
        heading: "Aspirin and stronger painkillers",
        paragraphs: [
          "A low dose of aspirin can be taken if your doctor prescribes it, though there is still a risk of bleeding, even with a small dose.",
          "Opioids such as codeine can be used carefully, starting with small doses and only under medical supervision. People with kidney disease often need very small doses and get more side effects, such as drowsiness, constipation and feeling sick.",
        ],
      },
      {
        heading: "Getting the right help",
        paragraphs: [
          "Only treat minor ailments yourself for a few days. If your symptoms change, get worse or last for more than a couple of days, see your doctor.",
          "Talk to your GP, kidney doctor or pharmacist if you are in pain, and especially before changing or starting any medicines. Pain that will not go away may need help from a hospital pain specialist or a psychologist.",
        ],
      },
    ],
    helps: [
      "Use paracetamol in standard doses, and never take more than the recommended dose.",
      "Avoid ibuprofen and other NSAIDs, including gels and creams, unless your kidney doctor has approved them.",
      "Check cold and cough remedies for paracetamol and NSAIDs before you take them.",
      "Avoid effervescent painkillers, as they contain salt.",
      "Tell any pharmacist or doctor recommending a medicine about your kidney condition.",
      "See your doctor if symptoms get worse or last for more than a couple of days.",
    ],
    tryThisWeek: [
      "Make paracetamol your first choice.",
      "Check cold remedies before taking.",
      "Tell the pharmacist about your kidneys.",
    ],
    ask: "Which painkillers are safe for me, and is there anything I should never take?",
    interactive: {
      kind: "scenarios",
      title: "At the pharmacy counter",
      scenarios: [
        {
          id: "headache",
          situation: "You have a headache.",
          options: [{ text: "Paracetamol", best: true }, { text: "Ibuprofen or aspirin" }],
          why: "For a headache, Kidney Care UK lists paracetamol as the suitable choice, and says to avoid ibuprofen, aspirin and all effervescent products.",
        },
        {
          id: "cold",
          situation: "You have a cold and are already taking paracetamol.",
          options: [{ text: "Check the cold remedy's label first", best: true }, { text: "Add any cold and flu sachet" }],
          why: "Paracetamol is often found in cold and cough medicines, so be careful not to take two kinds at once.",
        },
        {
          id: "muscle",
          situation: "Your back aches after gardening.",
          options: [{ text: "Ask about Deep Heat or Ralgex", best: true }, { text: "Rub in ibuprofen gel" }],
          why: "For muscle aches, Kidney Care UK lists Deep Heat or Ralgex as alternatives to tablets or creams containing ibuprofen.",
        },
        {
          id: "fizzy",
          situation: "The only painkillers left are fizzy, soluble ones.",
          options: [{ text: "Choose a non-effervescent tablet", best: true }, { text: "Take the fizzy ones" }],
          why: "Avoid effervescent tablets, which contain salt that can increase your blood pressure.",
        },
      ],
    },
    sources: [KCUK_PAIN, KCUK_OTC, NHS_CKD_TREATMENT, NHS_IBUPROFEN, NHS_NSAIDS, NKF_PAIN],
    quiz: {
      question: "Which painkiller is safe in standard doses with kidney problems?",
      options: [{ text: "Paracetamol", right: true }, { text: "Ibuprofen" }, { text: "Naproxen" }],
      why: "Paracetamol in standard doses is safe to take if you have kidney problems.",
    },
  },
  {
    id: "ckd-tiredness",
    kicker: "Living well",
    question: "Why am I so tired, and could it be anaemia?",
    hook: "Waste building up, fewer red blood cells, poor sleep or low mood can all drain energy. Several of them can be treated.",
    short: "Tiredness is common in CKD. Waste products can build up and make you feel tired and weak, and damaged kidneys make less of the hormone EPO, which can lead to anaemia, a lack of red blood cells. Anaemia is found with a simple blood test and can be treated with iron and, if needed, injections, so tell your team how you feel.",
    sections: [
      {
        heading: "Many reasons",
        paragraphs: [
          "If your kidneys are not working well, waste products build up in your blood, and this can make you feel tired and weak. You may feel more tired as your kidney function drops.",
          "Poor sleep, itching, restless legs, and feeling anxious or depressed can all add to it. Kidney Care UK says up to one in three people with kidney disease will have depression at some point.",
        ],
      },
      {
        heading: "Why anaemia happens",
        paragraphs: [
          "The kidneys make a hormone called erythropoietin, or EPO, which tells your bone marrow to make red blood cells. Damaged kidneys make less EPO, so your body makes fewer red blood cells.",
          "When your kidneys do not work well, you also absorb less iron from your food. Anaemia starts to develop when kidney function is less than 60% of normal, and gets worse as function falls.",
        ],
      },
      {
        heading: "The signs",
        paragraphs: [
          "Symptoms of anaemia include tiredness, lack of energy, shortness of breath, headaches and a pounding, fluttering or irregular heartbeat. Some people feel cold all the time or have restless legs.",
          "Many of these, such as tiredness and itchy skin, are also symptoms of CKD itself, so it can be hard to tell which is which. Anaemia develops slowly, so people may not realise how ill they felt until it is treated.",
        ],
      },
      {
        heading: "Testing and treatment",
        paragraphs: [
          "A simple blood test checks your haemoglobin, the protein in red blood cells that carries oxygen. In people with CKD, anaemia is defined as haemoglobin below 110 g/L.",
          "Iron tablets are often the first treatment, but if they do not work, or kidney disease is advanced, iron is often given into a vein instead. Injections called ESAs, which replace EPO, may be added if anaemia continues, and treatment can improve energy, concentration and quality of life.",
        ],
      },
      {
        heading: "Day to day",
        paragraphs: [
          "Even a little physical activity can help stop fatigue getting worse. It is fine to be active only on your better days, and to plan activity for the time of day when your fatigue is lowest.",
          "Have plenty of rest periods but try not to fall asleep, and keep any nap to half an hour. Avoid caffeine from lunchtime onwards, and go to bed and wake up at the same times each day.",
        ],
      },
    ],
    helps: [
      "Tell your healthcare team if you have symptoms of fatigue, so they can work out what might be causing it.",
      "If you are prescribed medicines for anaemia, take them as instructed.",
      "Write down any issues you want to discuss, so you have them to hand when you see your doctor.",
      "If you feel you need your iron levels tested and none is scheduled, ask for an extra test.",
      "Talk to your healthcare team about treatments for itching, or about support if you feel anxious or depressed.",
      "Speak to your healthcare professional or a dietitian before changing your diet to get more iron.",
    ],
    tryThisWeek: [
      "Tell your team how tired you feel.",
      "Write down your questions.",
      "Ask about an iron test.",
    ],
    ask: "Could my tiredness be anaemia, and when was my haemoglobin last checked?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your team",
      intro: "Tick any you have noticed. They can be signs of anaemia, or of CKD itself.",
      signs: ["Tiredness or lack of energy", "Shortness of breath", "Headaches", "A pounding, fluttering or irregular heartbeat", "Feeling cold all the time", "Restless legs", "Trouble concentrating", "Feeling dizzy"],
      after: "Tell your kidney team. A simple blood test can show whether you have anaemia, and there are treatments that can help.",
      copyHeading: "Signs I have noticed",
    },
    sources: [KCUK_FATIGUE, KCUK_ANAEMIA_QA, KCUK_ANAEMIA_MANAGING, KCUK_ANAEMIA_IRON, KCUK_IRON, NHS_CKD_TREATMENT, KCUK_MED_ANAEMIA, KCUK_FACTS],
    quiz: {
      question: "Why are people with CKD more likely to have anaemia?",
      options: [{ text: "Damaged kidneys make less EPO", right: true }, { text: "They eat too much protein" }, { text: "They drink too much water" }],
      why: "Damaged kidneys make less EPO, so your body makes fewer red blood cells.",
    },
  },
  {
    id: "ckd-checks",
    kicker: "Living well",
    question: "Which checks will I have, and how often?",
    hook: "For the early stages, usually a yearly review at the GP: blood and urine tests, weight and blood pressure, and a chance to ask questions.",
    short: "If you have CKD stages 1 to 3, you can expect blood and urine tests organised by your GP practice at least once a year. Each review usually includes your weight and blood pressure, a urine check for blood, protein or infection, and a blood test for kidney function and anaemia. At stage 4, you will be seen by a kidney doctor.",
    sections: [
      {
        heading: "The yearly review",
        paragraphs: [
          "In stages 1 to 3, you can expect blood and urine tests to check your kidney function, organised by your GP practice, at least once a year.",
          "At each visit your weight and blood pressure are measured, and a urine sample is checked for signs of blood, protein or infection. A blood test measures your kidney function and checks for signs of anaemia.",
        ],
      },
      {
        heading: "Talking it through",
        paragraphs: [
          "Reviews usually include talking about your symptoms and whether they affect your normal activities, and about your medicines and any side effects.",
          "It is also a good chance to ask questions. The National Kidney Federation says looking after your kidneys is a partnership between you and your doctor.",
        ],
      },
      {
        heading: "Checks at home, and vaccinations",
        paragraphs: [
          "You may want to help monitor your condition at home, for example with a home blood pressure monitor. The National Kidney Federation suggests checking at least twice a week.",
          "Everyone with CKD is encouraged to have the annual flu jab and the one-off pneumococcal vaccination, at a GP surgery or a pharmacy that offers them.",
        ],
      },
      {
        heading: "When tests are repeated",
        paragraphs: [
          "If results suggest kidney damage, the tests are usually repeated over the next three months before CKD is diagnosed. If you have risk factors but no CKD, your doctor should suggest the tests every year.",
          "Haemoglobin, which shows whether you have anaemia, should be checked at least once a year in stage 3, and at least twice a year in stages 4 and 5.",
        ],
      },
      {
        heading: "If things change",
        paragraphs: [
          "At stage 4, you will be seen by a specialist kidney doctor called a nephrologist. If urine tests show a lot of protein, or kidney function is falling over time, your case may be discussed with or referred to a kidney specialist.",
          "Contact your GP or healthcare team if your symptoms are getting worse or you develop new symptoms. The overall trend in your results can matter more than any single number.",
        ],
      },
    ],
    helps: [
      "Keep your yearly kidney review with your GP practice.",
      "Use the review to ask any questions and raise anything you would like to discuss.",
      "Monitor your blood pressure at home, for example with a home blood pressure monitor.",
      "Have the annual flu jab and the one-off pneumococcal vaccination.",
      "Contact your GP or healthcare team if your symptoms get worse or you develop new ones.",
    ],
    tryThisWeek: [
      "Book your yearly review.",
      "Write down your questions.",
      "Book your flu jab.",
    ],
    ask: "When is my next kidney review, and what will we check?",
    interactive: {
      kind: "timeline",
      title: "The checks over time",
      steps: [
        { id: "diagnosis", when: "At diagnosis", title: "Tests repeated", points: ["Tests are usually repeated over three months.", "A low eGFR or high ACR that stays confirms CKD."] },
        { id: "yearly", when: "Every year", title: "The GP review", points: ["Weight, blood pressure and a urine check.", "A blood test for kidney function and anaemia."] },
        { id: "home", when: "Each week", title: "Home readings", points: ["A home blood pressure monitor can help.", "The NKF suggests at least twice a week."] },
        { id: "jabs", when: "Every year", title: "Vaccinations", points: ["The annual flu jab.", "A one-off pneumococcal vaccination."] },
        { id: "stage-4", when: "If you reach stage 4", title: "A kidney doctor", points: ["You will see a nephrologist.", "Haemoglobin checks at least twice a year."] },
      ],
    },
    sources: [KCUK_CKD, KCUK_EARLY, NHS_CKD_LIVING, NKF_CKD, KCUK_TESTS, KCUK_ANAEMIA_IRON, NKF_STAGE3, KCUK_STAGE4, KCUK_RESULTS],
    quiz: {
      question: "How often are kidney tests usually organised for CKD stages 1 to 3?",
      options: [{ text: "At least once a year", right: true }, { text: "Every week" }, { text: "Only when you feel ill" }],
      why: "In stages 1 to 3, you can expect blood and urine tests to check your kidney function, organised by your GP practice, at least once a year.",
    },
  },
];
