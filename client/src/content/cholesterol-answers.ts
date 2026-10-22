import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the High cholesterol page's pieces (content/library-conditions/metabolism-more.ts).
// Every sentence was written from wording checked on 21 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, HEART UK (the
// cholesterol charity) and the British Heart Foundation. General information only; it never replaces what a
// person's own team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const huk = (label: string, path: string): LearnSource => ({ label: `HEART UK: ${label}`, url: `https://www.heartuk.org.uk/${path}` });
const bhf = (label: string, path: string): LearnSource => ({ label: `British Heart Foundation: ${label}`, url: `https://www.bhf.org.uk/informationsupport/${path}` });

const NHS_OVERVIEW = nhs("High cholesterol", "conditions/high-cholesterol/");
const NHS_LEVELS = nhs("High cholesterol – Cholesterol levels", "conditions/high-cholesterol/cholesterol-levels/");
const NHS_TESTED = nhs("High cholesterol – Getting tested", "conditions/high-cholesterol/getting-tested/");
const NHS_LOWER = nhs("High cholesterol – How to lower your cholesterol", "conditions/high-cholesterol/how-to-lower-your-cholesterol/");
const NHS_MEDS = nhs("High cholesterol – Medicines for high cholesterol", "conditions/high-cholesterol/medicines-for-high-cholesterol/");
const NHS_STATINS = nhs("Statins", "medicines/statins/");
const NHS_ATORVASTATIN = nhs("Atorvastatin", "medicines/atorvastatin/");
const NHS_EZE_ABOUT = nhs("About ezetimibe", "medicines/ezetimibe/about-ezetimibe/");
const NHS_EZE_SIDE = nhs("Side effects of ezetimibe", "medicines/ezetimibe/side-effects-of-ezetimibe/");
const NHS_HEALTH_CHECK = nhs("NHS Health Check", "tests-and-treatments/nhs-health-check/");
const NHS_LABELS = nhs("Food labels", "live-well/eat-well/food-guidelines-and-food-labels/how-to-read-food-labels/");

const HUK_WHAT = huk("What is cholesterol?", "cholesterol/what-is-cholesterol");
const HUK_CAUSES = huk("What causes high cholesterol?", "cholesterol/causes");
const HUK_RESULTS = huk("Understand your cholesterol test results", "cholesterol/understanding-your-cholesterol-test-results-");
const HUK_GET_TEST = huk("Getting a cholesterol test", "cholesterol/getting-a-cholesterol-test");
const HUK_HOME_TESTS = huk("Home cholesterol tests and sampling kits", "cholesterol/home-samples-and-testing");
const HUK_STATINS = huk("Statins", "getting-treatment/statins");
const HUK_STATIN_QS = huk("Questions about statins", "getting-treatment/questions-about-statins");
const HUK_EZETIMIBE = huk("Ezetimibe", "getting-treatment/ezetimibe");
const HUK_BEMPEDOIC = huk("Bempedoic acid", "getting-treatment/bempedoic-acid");
const HUK_INCLISIRAN = huk("Inclisiran", "getting-treatment/inclisiran");
const HUK_PCSK9 = huk("PCSK9 inhibitors", "getting-treatment/pcsk9-inhibitors");
const HUK_SAT_FAT = huk("Saturated fat", "low-cholesterol-foods/saturated-fat");
const HUK_EXERCISE = huk("Exercise", "healthy-living/exercise");
const HUK_WEIGHT = huk("Looking after your weight", "low-cholesterol-foods/looking-after-your-weight");
const HUK_SMOKING = huk("Stop smoking", "healthy-living/quit-smoking");
const HUK_ALCOHOL = huk("Alcohol", "low-cholesterol-foods/alcohol");
const HUK_LABELS = huk("Understanding food labels", "cholesterol-smart/food-labels");
const HUK_FOOD_CHOLESTEROL = huk("High cholesterol food", "low-cholesterol-foods/foods-that-contain-cholesterol");
const HUK_MYTHS = huk("Heart health nutrition myths busted by science", "news-and-blogs/heart-health-nutrition-myths-busted-by-science");
const HUK_FH = huk("What is FH?", "fh/what-is-fh");
const HUK_POLYGENIC = huk("Polygenic hypercholesterolaemia", "genetic-conditions/polygenic-hypercholesterolaemia");
const HUK_GENETIC = huk("Genetic testing", "getting-treatment/genetic-testing");

const BHF_CHOLESTEROL = bhf("High cholesterol", "risk-factors/high-cholesterol");
const BHF_LEVELS = bhf("Understanding your cholesterol levels", "risk-factors/high-cholesterol/understanding-your-cholesterol-levels");
const BHF_LOWERING = bhf("How to lower your cholesterol", "risk-factors/high-cholesterol/five-top-questions-about-lowering-cholesterol");
const BHF_QRISK = bhf("QRISK: how it works and what your score means", "heart-matters-magazine/medical/qrisk");
const BHF_STATINS = bhf("Statins and what they do", "treatments/medicine/statins");
const BHF_STATIN_SIDE = bhf("Statin side effects: how many real ones are there?", "heart-matters-magazine/news/behind-the-headlines/statin-side-effects");
const BHF_ALTERNATIVES = bhf("4 statin alternatives that lower cholesterol", "heart-matters-magazine/medical/statin-alternatives");
const BHF_LOWERING_FOODS = bhf("5 cholesterol-lowering foods", "heart-matters-magazine/nutrition/cholesterol-lowering-foods");
const BHF_FOODS_TO_AVOID = bhf("Foods to avoid with high cholesterol", "heart-matters-magazine/nutrition/high-cholesterol-foods-to-avoid");
const BHF_STEROLS = bhf("Plant sterols and stanols: do they lower cholesterol?", "heart-matters-magazine/medical/ask-the-experts/stanols-and-sterols");
const BHF_EXERCISE = bhf("Can exercise help lower cholesterol?", "heart-matters-magazine/activity/can-exercise-lower-cholesterol");
const BHF_EGGS = bhf("Are eggs high in cholesterol?", "heart-matters-magazine/nutrition/are-eggs-high-in-cholesterol");
const BHF_FH = bhf("Familial hypercholesterolaemia", "conditions/familial-hypercholesterolaemia");
const BHF_FAMILY = bhf("Family history", "risk-factors/family-history");

export const cholesterolAnswers: LearnArticle[] = [
  {
    id: "chol-what-it-is",
    kicker: "Understanding",
    question: "What is cholesterol, and what makes it good or bad?",
    hook: "Every cell in your body needs some. The trouble starts when too much of the wrong kind builds up in your arteries.",
    short: "Cholesterol is a fatty substance in your blood, made mostly in your liver. Your body needs some, but too much can clog your arteries and make heart problems or a stroke more likely. HDL, often called good cholesterol, carries it back to the liver, while too much non-HDL, or bad cholesterol, can stick to artery walls.",
    sections: [
      {
        heading: "A fat your body needs",
        paragraphs: [
          "Cholesterol is a type of blood fat which is made in the liver. It is found in some foods too.",
          "There is cholesterol in every cell in your body. It is part of the outer layer of your cells, and it is used to make vitamin D, some hormones and bile, which helps you digest the fats you eat.",
        ],
      },
      {
        heading: "Made mostly in the liver",
        paragraphs: [
          "Some cholesterol comes from the food we eat, but most, about 80%, is made in the liver.",
          "Cholesterol cannot travel loosely in the blood. The liver packages it with proteins into parcels called lipoproteins, which carry it around the body to wherever it is needed.",
        ],
      },
      {
        heading: "Good and bad cholesterol",
        paragraphs: [
          "HDL is often called good cholesterol. It takes cholesterol you do not need back to your liver, where it is broken down and passed out of your body.",
          "Non-HDL, or bad cholesterol, takes cholesterol from your liver to cells around your body. It is mostly made up of LDL. If you have too much, it gets stuck to the walls of your arteries.",
        ],
      },
      {
        heading: "When there is too much",
        paragraphs: [
          "High cholesterol is when you have too much of this fatty substance in your blood. It can narrow your arteries and cause fatty material to build up, which is called atherosclerosis.",
          "This makes you more likely to have heart problems or a stroke. High cholesterol does not usually cause symptoms, so you can only find out if you have it from a blood test.",
        ],
      },
      {
        heading: "Triglycerides",
        paragraphs: [
          "Triglycerides are another type of blood fat. Most enter the blood after a meal, and they are used for energy or stored for later.",
          "Too much in your blood can also narrow your arteries. It is useful to have your triglycerides tested when you get a cholesterol check.",
        ],
      },
    ],
    helps: [
      "Get a cholesterol check: it is the only way to know your cholesterol level.",
      "Ask for your triglycerides to be tested at the same check.",
      "Eat healthily and get more exercise to help lower your cholesterol.",
      "Ask your doctor or nurse for your separate HDL and non-HDL results.",
      "Speak to your doctor if you have any questions about your cholesterol.",
    ],
    tryThisWeek: [
      "Book a cholesterol check.",
      "Ask about triglycerides too.",
      "Ask for your HDL and non-HDL.",
    ],
    ask: "Which of my numbers are high: HDL, non-HDL or triglycerides?",
    interactive: {
      kind: "flip-cards",
      title: "The blood fats, card by card",
      intro: "Turn each card to see what that blood fat does.",
      cards: [
        { id: "ldl", front: "LDL", when: "Often called bad cholesterol", back: "Delivers cholesterol to the cells. Too much can fur up blood vessel walls and clog them." },
        { id: "hdl", front: "HDL", when: "Often called good cholesterol", back: "Carries cholesterol away from your cells, back to the liver to be broken down." },
        { id: "non-hdl", front: "Non-HDL", when: "On your test result", back: "Total cholesterol minus HDL: all the bad cholesterol added together, mostly LDL." },
        { id: "triglycerides", front: "Triglycerides", when: "Another blood fat", back: "Mostly enter the blood after a meal, and are used for energy or stored for later." },
        { id: "lipoproteins", front: "Lipoproteins", when: "The parcels in your blood", back: "Fats and proteins packaged together by the liver to carry fats around the body." },
      ],
    },
    sources: [HUK_WHAT, NHS_OVERVIEW, BHF_CHOLESTEROL, NHS_STATINS, NHS_LEVELS],
    quiz: {
      question: "Where does most of your cholesterol come from?",
      options: [{ text: "Your liver", right: true }, { text: "Eggs and shellfish" }, { text: "Sugary drinks" }],
      why: "Some cholesterol comes from the food we eat, but most, about 80%, is made in the liver.",
    },
  },
  {
    id: "chol-numbers",
    kicker: "Tests",
    question: "What do the numbers on my cholesterol test mean?",
    hook: "Total, HDL, non-HDL: a result can look fine overall and still hide an unhealthy balance.",
    short: "A cholesterol test can measure your total cholesterol, your good HDL and your bad non-HDL cholesterol, in millimoles per litre (mmol/L). As a guide for healthy adults, the NHS gives a total below 5mmol/L and non-HDL below 4mmol/L. Your own target depends on your age, your health and your risk, so ask what yours is.",
    sections: [
      {
        heading: "Having the test",
        paragraphs: [
          "There are 2 ways of having a cholesterol test. Blood can be taken from your arm and sent to a lab, with the result in a few days, or a finger-prick test can check your cholesterol in a few minutes.",
          "Most people do not need to fast before the test. You might be asked not to eat for up to 12 hours beforehand.",
        ],
      },
      {
        heading: "What the test measures",
        paragraphs: [
          "Millimoles per litre (mmol/L) is the unit used to measure cholesterol in the blood. A test can measure your total cholesterol, your good cholesterol called HDL, and your non-HDL cholesterol, which is the difference between the two.",
          "When you get your result, you may just be told your total cholesterol. It is possible to have a healthy total and an unhealthy balance of the different types, so ask for a breakdown of the other numbers.",
        ],
      },
      {
        heading: "Healthy levels",
        paragraphs: [
          "As a guide for healthy adults, total cholesterol should be below 5mmol/L and non-HDL below 4mmol/L. If your LDL is tested, a healthy level is below 3mmol/L.",
          "Good HDL cholesterol should be above 1mmol/L for men. Women naturally have higher HDL than men, so the healthy level for women is higher.",
        ],
      },
      {
        heading: "After a heart attack or stroke",
        paragraphs: [
          "If you have had a heart attack or stroke, the recommended levels for you are lower, to help prevent another one. The BHF gives an LDL of 2mmol/L or below and a total of 4mmol/L or below.",
          "If you do not have heart disease but are at higher risk, national guidelines recommend reducing your non-HDL cholesterol by more than 40%.",
        ],
      },
      {
        heading: "Your own target",
        paragraphs: [
          "What is a good target level for you depends on things like your age, any health conditions and your risk of cardiovascular disease. Being ill, taking some medicines or recently having a baby can make your levels lower or higher.",
          "Cholesterol rises during pregnancy, so HEART UK does not recommend a test then. Results of tests at your GP surgery may be in your online GP health record.",
        ],
      },
    ],
    helps: [
      "Ask your healthcare professional to explain your results.",
      "If you are only given your total cholesterol, ask for a breakdown of the other numbers.",
      "Ask for a print-out of your results if you cannot speak to your GP, nurse or pharmacist.",
      "Ask your doctor or nurse for your separate HDL and non-HDL results.",
      "Look for your results in your online GP health record.",
      "Speak to your GP if you are unsure what your target levels are.",
    ],
    tryThisWeek: [
      "Ask for the full breakdown.",
      "Look up your results online.",
      "Ask what your target is.",
    ],
    ask: "What are my total, HDL and non-HDL numbers, and what target should I aim for?",
    interactive: {
      kind: "scenarios",
      title: "Reading your result",
      scenarios: [
        {
          id: "total-only",
          situation: "Your result gives only your total cholesterol.",
          options: [{ text: "Ask for the other numbers", best: true }, { text: "Assume the rest is fine" }],
          why: "It is possible to have a healthy total and an unhealthy balance of the different types, so ask for a breakdown of the other numbers.",
        },
        {
          id: "non-hdl",
          situation: "Your non-HDL cholesterol is 5mmol/L.",
          options: [{ text: "Above the guide: ask what next", best: true }, { text: "Healthy, nothing to do" }],
          why: "As a guide for healthy adults, total cholesterol should be below 5mmol/L and non-HDL below 4mmol/L.",
        },
        {
          id: "fasting",
          situation: "Your cholesterol blood test is tomorrow morning.",
          options: [{ text: "Eat as usual unless told to fast", best: true }, { text: "Always fast for 12 hours" }],
          why: "Most people do not need to fast before the test. You might be asked not to eat for up to 12 hours beforehand.",
        },
        {
          id: "pregnancy",
          situation: "You are pregnant and curious about your cholesterol.",
          options: [{ text: "Wait until after the birth", best: true }, { text: "Test now for a true picture" }],
          why: "Cholesterol rises during pregnancy, so HEART UK does not recommend a test then.",
        },
      ],
    },
    sources: [NHS_LEVELS, BHF_LEVELS, HUK_RESULTS, NHS_TESTED],
    quiz: {
      question: "What is a healthy total cholesterol for most adults, as a guide?",
      options: [{ text: "Below 5mmol/L", right: true }, { text: "Below 10mmol/L" }, { text: "Above 6mmol/L" }],
      why: "As a guide for healthy adults, total cholesterol should be below 5mmol/L and non-HDL below 4mmol/L.",
    },
  },
  {
    id: "chol-causes",
    kicker: "Causes",
    question: "Why is my cholesterol high?",
    hook: "Food, activity, smoking and weight play a part. So do age, family and some health conditions you cannot see.",
    short: "High cholesterol can be caused by eating fatty food, not exercising enough, being overweight, smoking and drinking alcohol. You are also more likely to have it if you are over 50, a man, past the menopause, of South Asian or sub-Saharan African origin, or if it runs in your family. Some health conditions and medicines can raise it too.",
    sections: [
      {
        heading: "It is very common",
        paragraphs: [
          "People are often surprised to find out they have high cholesterol. The BHF says about half of adults in the UK have total cholesterol levels above the recommended healthy limit of 5mmol/L.",
          "Your lifestyle, your genes and your overall health can all have an effect, and these can all add up.",
        ],
      },
      {
        heading: "Things you can change",
        paragraphs: [
          "High cholesterol can be caused by eating fatty food, not exercising enough, being overweight, smoking and drinking alcohol.",
          "Eating too much saturated fat raises it, and so does living with excess weight, especially round your middle.",
        ],
      },
      {
        heading: "Things you cannot change",
        paragraphs: [
          "You are more likely to get high cholesterol if you are over 50, a man, have been through the menopause, or are of South Asian or sub-Saharan African origin. It can also run in families.",
          "Cholesterol levels naturally rise through adult life. The hormone oestrogen helps keep cholesterol down, so levels can rise when oestrogen falls at the menopause.",
        ],
      },
      {
        heading: "Your genes",
        paragraphs: [
          "High cholesterol can be caused by genetic conditions passed down through families. Familial hypercholesterolaemia, or FH, is one of the most common.",
          "You are at higher risk if a close family member, such as a parent or sibling, has had high cholesterol or a heart attack or stroke.",
        ],
      },
      {
        heading: "Health conditions and medicines",
        paragraphs: [
          "Some health conditions can raise cholesterol, including an underactive thyroid, kidney disease, liver disease and type 2 diabetes. If a test shows high cholesterol, your doctor will try to find out what is causing it.",
          "Some medicines can affect blood fats too, such as diuretics, corticosteroids and beta-blockers. HEART UK says not to worry or stop taking them, as your doctor will have been aware of the effects when they prescribed them.",
        ],
      },
    ],
    helps: [
      "Eat healthily and get more exercise.",
      "Cut down the amount of saturated fat in your food.",
      "Get support from your local pharmacy or GP to reduce and eventually stop smoking.",
      "Reduce the amount of alcohol you drink each week.",
      "Do not stop a medicine that may affect your cholesterol; your doctor will review how you are getting on.",
      "Look at the leaflet that comes with your medicines to see whether any could affect your blood fats.",
    ],
    tryThisWeek: [
      "Cut down one high saturated fat food.",
      "Ask your pharmacy about stopping smoking.",
      "Check your medicine leaflets.",
    ],
    ask: "Could anything else, such as my thyroid, a medicine or my genes, be raising my cholesterol?",
    interactive: {
      kind: "risk-check",
      title: "What can raise cholesterol?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "sat-fat", label: "Eating a lot of saturated fat", note: "Cut down the amount of saturated fat in your food, for example by swapping butter for olive spread.", changeable: true },
        { id: "inactive", label: "Not being physically active", note: "Try to be more active, for example by walking every day at lunchtime.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Get support from your local pharmacy or GP to reduce and eventually stop.", changeable: true },
        { id: "alcohol", label: "Drinking alcohol", note: "Reduce the amount you drink each week, or swap one drink for a non-alcoholic version.", changeable: true },
        { id: "weight", label: "Extra weight round your middle", note: "Living with excess weight, especially round your middle, can raise cholesterol.", changeable: true },
        { id: "age", label: "Getting older", note: "Cholesterol levels naturally rise through adult life.", changeable: false },
        { id: "menopause", label: "Being past the menopause", note: "Oestrogen helps keep cholesterol down, and it falls at the menopause.", changeable: false },
        { id: "background", label: "South Asian or sub-Saharan African origin", note: "You are more likely to get high cholesterol.", changeable: false },
        { id: "family", label: "High cholesterol in the family", note: "Some causes, such as FH, are passed down through families.", changeable: false },
      ],
    },
    sources: [NHS_OVERVIEW, HUK_CAUSES, BHF_CHOLESTEROL, BHF_FOODS_TO_AVOID],
    quiz: {
      question: "Which of these is something you can change?",
      options: [{ text: "Smoking", right: true }, { text: "Your age" }, { text: "Your family history" }],
      why: "High cholesterol can be caused by eating fatty food, not exercising enough, being overweight, smoking and drinking alcohol.",
    },
  },
  {
    id: "chol-risk",
    kicker: "Your risk",
    question: "What does my heart and stroke risk score mean?",
    hook: "Cholesterol is one piece. A risk score puts it together with your age, blood pressure and more.",
    short: "Your GP uses your cholesterol along with things like your age, blood pressure and health conditions to estimate your risk of cardiovascular disease. They may give you a QRISK score, an estimate of how likely you are to have a heart or circulation problem over the next 10 years. Whatever your score, there are steps you can take to lower your risk.",
    sections: [
      {
        heading: "Cholesterol is one part",
        paragraphs: [
          "Your GP will use your cholesterol levels along with other factors, such as your age, blood pressure and health conditions, to estimate your risk of cardiovascular disease.",
          "They may give you a score called a QRISK score, which estimates how likely you are to have a heart or circulation problem over the next 10 years.",
        ],
      },
      {
        heading: "How QRISK works",
        paragraphs: [
          "QRISK is an online calculator based on research into large numbers of people. It looks at your age, sex, ethnic background and where you live, whether you smoke or have obesity, conditions such as diabetes or chronic kidney disease, your family history and your blood pressure.",
          "It does not tell you that you will definitely have a heart attack or stroke. It gives an estimate, so you and your doctor can take steps to reduce your risk if needed.",
        ],
      },
      {
        heading: "What the scores mean",
        paragraphs: [
          "A score of less than 10 per cent suggests a relatively low risk. A score of 10 to 20 per cent is a moderate risk, and your doctor may recommend a medicine like a statin as well as lifestyle changes.",
          "A score of 20 per cent or higher is a high risk. Your doctor will recommend medicines like statins to lower your risk, as well as lifestyle changes.",
        ],
      },
      {
        heading: "Where you might get a score",
        paragraphs: [
          "QRISK is most often used at an NHS Health Check. In England, people aged 40 to 74 without certain existing conditions should be invited every 5 years.",
          "You can work out your own 10-year risk with the NHS Heart Age Tool, designed for people aged 25 to 84. It is not suitable if you already have heart disease, have had a stroke, or have an inherited condition such as FH.",
        ],
      },
      {
        heading: "When a score is not used",
        paragraphs: [
          "QRISK is not designed for people who already have cardiovascular disease or take statins, as they are already known to be at high risk. After 85, your risk is deemed to be high because of your age.",
          "Your risk score may be higher at your next check even if your results are the same, because everybody's risk rises with age. Smoking, your cholesterol and your blood pressure are some of the most important factors, and they can be changed.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or nurse what your QRISK score means for you.",
      "If you are 40 to 74 and have not been invited for an NHS Health Check, contact your GP practice.",
      "Eat a healthy diet with plenty of fruit, vegetables and wholegrains, keep to a healthy weight, be active and stop smoking.",
      "If you have been prescribed medicines for high blood pressure or high cholesterol, take them, and speak to your doctor or nurse about any concerns.",
      "Try the NHS Heart Age Tool, and know your blood pressure numbers for a more accurate result.",
    ],
    tryThisWeek: [
      "Ask what your score means.",
      "Ask about an NHS Health Check.",
      "Try the Heart Age Tool.",
    ],
    ask: "What is my 10-year risk score, and what would lower it most?",
    interactive: {
      kind: "scenarios",
      title: "Making sense of a score",
      scenarios: [
        {
          id: "low",
          situation: "Your QRISK score is 6 per cent.",
          options: [{ text: "Low: keep up healthy habits", best: true }, { text: "Never think about it again" }],
          why: "It is still important to maintain a healthy lifestyle, especially as your lifetime risk is likely to be higher.",
        },
        {
          id: "moderate",
          situation: "Your QRISK score is 15 per cent.",
          options: [{ text: "Talk through lifestyle and a statin", best: true }, { text: "Ignore it for now" }],
          why: "A score of 10 to 20 per cent is a moderate risk, and your doctor may recommend a medicine like a statin as well as lifestyle changes.",
        },
        {
          id: "check",
          situation: "You are 52 and have never been invited for an NHS Health Check.",
          options: [{ text: "Contact your GP practice", best: true }, { text: "Wait until you feel unwell" }],
          why: "If you are 40 to 74 and have not been invited for an NHS Health Check, contact your GP practice.",
        },
        {
          id: "fh",
          situation: "You have FH and want to try the Heart Age Tool.",
          options: [{ text: "Ask your doctor about your risk", best: true }, { text: "Rely on the tool's result" }],
          why: "It is not suitable if you already have heart disease, have had a stroke, or have an inherited condition such as FH.",
        },
      ],
    },
    sources: [NHS_LEVELS, BHF_QRISK, NHS_HEALTH_CHECK, HUK_RESULTS, NHS_STATINS],
    quiz: {
      question: "What does a QRISK score estimate?",
      options: [{ text: "Your chance of a heart or circulation problem over 10 years", right: true }, { text: "Exactly when you will have a heart attack" }, { text: "Your cholesterol level next year" }],
      why: "It does not tell you that you will definitely have a heart attack or stroke. It gives an estimate, so you and your doctor can take steps to reduce your risk if needed.",
    },
  },
  {
    id: "chol-statins",
    kicker: "Treatment",
    question: "What do statins do, and what about side effects?",
    hook: "The most common cholesterol medicine. Most people get no side effects, and there is usually a fix if they do.",
    short: "Statins lower the amount of cholesterol your body makes, which helps prevent it building up in your blood vessels and lowers the risk of a heart attack or stroke. You take a tablet once a day, usually long term. Most people have no side effects, and if you do, your doctor can change the dose or try another statin.",
    sections: [
      {
        heading: "What statins do",
        paragraphs: [
          "Statins work by lowering the amount of cholesterol your body makes. This helps prevent the build-up of cholesterol in the blood vessels and keeps them working properly.",
          "They also help stabilise the fatty, hardened parts of the arteries, called plaques, which can burst and cause blood clots. Low-dose statins can lower bad LDL cholesterol by up to 30 per cent, and high doses by more than 40 per cent.",
        ],
      },
      {
        heading: "Who may be offered one",
        paragraphs: [
          "You may be offered a statin if you are at higher risk of cardiovascular disease and healthy lifestyle changes have not helped or are unlikely to help on their own, or if you already have cardiovascular disease.",
          "Your doctor will look at your overall risk. But it is your choice whether you take a statin, and asking your doctor questions can help you decide.",
          "Most people can take statins, but not if you have severe liver disease, or are pregnant or trying to get pregnant.",
        ],
      },
      {
        heading: "Taking them",
        paragraphs: [
          "Statins come as a tablet you take once a day. You will usually take them long term, as your cholesterol levels will rise again if you stop.",
          "They should start to work within two to three months. You should have blood tests to check your cholesterol and your liver, usually after three months, and again a year later.",
          "Some medicines, herbal remedies such as St John's wort, and grapefruit can cause problems with statins. Tell your doctor about any other medicines you take.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Most people taking statins will have no side effects. Common ones can include headaches, dizziness, feeling sick, problems with pooing, muscle pain and sleep problems.",
          "A BHF-funded study published in 2026 found statins may not cause 62 out of 66 side effects commonly listed on their leaflets. People taking a dummy pill were just as likely to report them.",
          "Statins can slightly increase the likelihood of muscle pain, and people already at high risk of diabetes may develop it sooner. The researchers say the proven benefits of statins outweigh these risks.",
        ],
      },
      {
        heading: "If you have problems",
        paragraphs: [
          "If you think a statin is causing side effects, talk to a doctor. They may prescribe another statin or change your dose.",
          "Do not simply stop taking them, because your cholesterol will go back up. Muscle aches linked to statins are usually felt all over the body, like flu, and last more than a couple of days.",
          "Serious side effects are rare. With atorvastatin, the NHS says to call 111 if you think you might be having one, such as yellowing of your skin or the whites of your eyes, severe stomach pain, or muscle cramps, severe pain and weakness.",
        ],
      },
    ],
    helps: [
      "Take your statin every day, at the same time each day.",
      "If you forget a dose, carry on as normal the next day, and do not take an extra one.",
      "Talk to a doctor if you think your statin is causing side effects, rather than simply stopping it.",
      "Keep a symptom diary to help you describe any side effects to your GP.",
      "Avoid grapefruit juice with simvastatin, and have no more than one or two small glasses with atorvastatin.",
      "Keep eating healthily, being active, watching what you drink and not smoking: statins work better with a healthy lifestyle.",
    ],
    tryThisWeek: [
      "Take it at the same time each day.",
      "Keep a symptom diary if needed.",
      "Check the grapefruit advice for yours.",
    ],
    ask: "Why is a statin right for me, and what should I do if I get side effects?",
    interactive: {
      kind: "scenarios",
      title: "Everyday statin moments",
      scenarios: [
        {
          id: "missed",
          situation: "You forgot yesterday's statin.",
          options: [{ text: "Carry on as normal today", best: true }, { text: "Take two today" }],
          why: "If you forget a dose, carry on as normal the next day, and do not take an extra one.",
        },
        {
          id: "aches",
          situation: "Your muscles have ached all over, like flu, for days.",
          options: [{ text: "Talk to your doctor", best: true }, { text: "Stop the statin yourself" }],
          why: "If you think a statin is causing side effects, talk to a doctor. Do not simply stop taking them, because your cholesterol will go back up.",
        },
        {
          id: "grapefruit",
          situation: "You take simvastatin and enjoy grapefruit juice.",
          options: [{ text: "Avoid it with simvastatin", best: true }, { text: "Drink as much as you like" }],
          why: "Avoid grapefruit juice with simvastatin, and have no more than one or two small glasses with atorvastatin.",
        },
        {
          id: "yellow",
          situation: "On atorvastatin, the whites of your eyes turn yellow.",
          options: [{ text: "Call NHS 111", best: true }, { text: "Wait for your next review" }],
          why: "With atorvastatin, the NHS says to call 111 if you think you might be having a serious side effect, such as yellowing of your skin or the whites of your eyes.",
        },
      ],
    },
    sources: [NHS_STATINS, BHF_STATINS, HUK_STATINS, HUK_STATIN_QS, NHS_ATORVASTATIN, BHF_STATIN_SIDE],
    quiz: {
      question: "How do statins lower cholesterol?",
      options: [{ text: "They lower the amount your body makes", right: true }, { text: "They stop you absorbing fat from food" }, { text: "They flush it out in your pee" }],
      why: "Statins work by lowering the amount of cholesterol your body makes.",
    },
  },
  {
    id: "chol-other-medicines",
    kicker: "Treatment",
    question: "If statins are not enough, what else is there?",
    hook: "A tablet that blocks cholesterol from food, and injections given every few weeks or twice a year.",
    short: "Other medicines may be used if statins do not work or you cannot take them. These include tablets such as ezetimibe, sometimes with bempedoic acid, and injections such as alirocumab, evolocumab and inclisiran. Some can only be prescribed by a specialist, and NICE sets rules on who can have them.",
    sections: [
      {
        heading: "When they are used",
        paragraphs: [
          "Other medicines may be used if statins do not work or you cannot take statins. Some people take one alongside a statin to help bring their cholesterol down to a healthy level.",
          "For most people who have problems with a statin, trying a lower dose or a different statin can solve the problem. Ezetimibe is the next treatment after a statin.",
        ],
      },
      {
        heading: "Ezetimibe",
        paragraphs: [
          "Ezetimibe helps stop your body taking in cholesterol from food. It is a tablet taken once a day, and it usually lowers cholesterol levels within 2 weeks.",
          "It is often taken with a statin, because they work in different ways and the effects add up. On its own it lowers LDL cholesterol by 15 to 22 per cent, or 21 to 27 per cent with a statin.",
          "Common side effects include stomach pain and diarrhoea. Treatment with ezetimibe is usually for life.",
        ],
      },
      {
        heading: "Bempedoic acid",
        paragraphs: [
          "Like statins, bempedoic acid reduces the cholesterol made in the liver. Because it only works in the liver, it is much less likely to cause side effects affecting the muscles.",
          "NICE recommends it with ezetimibe for people who cannot take statins and whose cholesterol is not lowered enough by ezetimibe alone. The most common side effect reported is a rise in uric acid and the risk of gout.",
        ],
      },
      {
        heading: "Injections",
        paragraphs: [
          "PCSK9 inhibitors, alirocumab and evolocumab, are injections given every 2 to 4 weeks. They help the liver remove more bad LDL cholesterol from the blood, and are usually prescribed by hospital specialists.",
          "Inclisiran works in a similar way. After the first dose, the next is given after three months, then only every six months, by a health professional.",
          "Under NICE rules in England, inclisiran is only for people who already have cardiovascular disease, such as a past heart attack or stroke, and whose LDL stays high despite other treatment. PCSK9 inhibitors can also be prescribed for some people with familial hypercholesterolaemia.",
        ],
      },
      {
        heading: "Side effects and safety",
        paragraphs: [
          "Injections can cause soreness, pain, redness or a rash where they are given. PCSK9 inhibitors can also cause flu-like symptoms.",
          "Serious side effects of ezetimibe are not common. Tell a doctor or call 111 straight away if you get muscle pain, tenderness or weakness, yellowing of your skin or eyes, or severe stomach pain. Call 999 if your lips, mouth, throat or tongue suddenly swell, or you are struggling to breathe.",
        ],
      },
    ],
    helps: [
      "Ask your doctor about the medicines you can take.",
      "Keep taking ezetimibe every day: treatment is usually for life.",
      "Keep eating a healthy diet alongside your medicines.",
      "Have your cholesterol checked about two to three months after starting a new medicine, to see how well it is working.",
      "Contact your doctor if you get side effects from an injection.",
      "Call 999 if your lips, mouth, throat or tongue suddenly swell, or you are struggling to breathe.",
    ],
    tryThisWeek: [
      "Ask which medicines could suit you.",
      "Book a check after starting.",
      "Keep up a healthy diet.",
    ],
    ask: "If my statin is not enough, which other medicine would suit me, and could I have it?",
    interactive: {
      kind: "flip-cards",
      title: "Beyond statins, card by card",
      intro: "Turn each card to see what that medicine does.",
      cards: [
        { id: "ezetimibe", front: "Ezetimibe", when: "A tablet once a day", back: "Helps stop your body taking in cholesterol from food. Often taken with a statin." },
        { id: "bempedoic", front: "Bempedoic acid", when: "A daily tablet, with ezetimibe", back: "Reduces the cholesterol made in the liver, and is much less likely to affect the muscles." },
        { id: "pcsk9", front: "PCSK9 inhibitors", when: "Injections every 2 to 4 weeks", back: "Help the liver remove more bad LDL cholesterol. Usually prescribed by hospital specialists." },
        { id: "inclisiran", front: "Inclisiran", when: "An injection every six months", back: "Stops the PCSK9 protein being made in the liver, so more LDL is removed from the blood." },
      ],
    },
    sources: [NHS_MEDS, NHS_EZE_ABOUT, HUK_EZETIMIBE, HUK_BEMPEDOIC, HUK_INCLISIRAN, HUK_PCSK9, BHF_ALTERNATIVES, NHS_EZE_SIDE, HUK_STATIN_QS],
    quiz: {
      question: "How does ezetimibe help?",
      options: [{ text: "It helps stop your body taking in cholesterol from food", right: true }, { text: "It is a stronger kind of statin" }, { text: "It thins the blood" }],
      why: "Ezetimibe helps stop your body taking in cholesterol from food.",
    },
  },
  {
    id: "chol-food",
    kicker: "Food",
    question: "What should I eat to lower my cholesterol?",
    hook: "It is less about cutting all fat, and more about swapping the saturated kind and adding fibre.",
    short: "Cutting down on saturated fat, found in fatty meat, butter, cream, cheese, cakes and biscuits, can help lower cholesterol. Swapping to unsaturated fats such as olive or rapeseed oil, and eating more fibre from oats, beans, fruit and vegetables, helps too. UK guidelines recommend no more than 30g of saturated fat a day for men and 20g for women.",
    sections: [
      {
        heading: "Swap the fat, not all fat",
        paragraphs: [
          "To reduce your cholesterol, try to cut down on fatty food, especially food that contains saturated fat. You can still have foods that contain a healthier type of fat called unsaturated fat.",
          "Research suggests eating too much saturated fat stops the liver's LDL receptors working so well, so cholesterol builds up in the blood. UK guidelines recommend no more than 30g of saturated fat a day for men and 20g for women.",
        ],
      },
      {
        heading: "Eat less of these",
        paragraphs: [
          "Foods high in saturated fat include meat pies, sausages and fatty meat, butter, lard and ghee, cream and cheese, cakes and biscuits, and food that contains coconut oil or palm oil.",
          "Swapping butter, lard and ghee for olive oil, rapeseed oil or sunflower oil can help maintain healthy cholesterol levels. Check the ingredients list for hidden sources of saturated fat, such as palm or coconut oil.",
        ],
      },
      {
        heading: "Eat more of these",
        paragraphs: [
          "Try to eat more oily fish like mackerel and salmon, olive and rapeseed oils and spreads made from them, brown rice, wholegrain bread and wholewheat pasta, nuts and seeds, and fruit and vegetables.",
          "Fibre helps reduce the amount of cholesterol absorbed into the blood from your gut. Pulses such as lentils, beans and chickpeas, and at least five portions of fruit and vegetables a day, are good sources.",
        ],
      },
      {
        heading: "Foods that actively help",
        paragraphs: [
          "Oats and barley contain a soluble fibre called beta glucans, which forms a gel in the gut and helps stop cholesterol being absorbed. Aim for two to three portions of oat or barley foods a day.",
          "A small handful of plain nuts, about 30g, makes a good swap for chocolate, cakes and biscuits. Foods with added plant sterols and stanols can lower cholesterol when eaten every day, with a meal, in the right amount.",
        ],
      },
      {
        heading: "Alongside medicine",
        paragraphs: [
          "Even if you are doing all the right things, your doctor or nurse might still recommend medicine. The effect of changes to your diet can vary from person to person.",
          "If you do need cholesterol-lowering medicine, do not give up on your diet, as it will support your treatment and help to lower your risk.",
        ],
      },
    ],
    helps: [
      "Check labels on food to see what type of fat it has in it.",
      "Swap butter for vegetable oil spreads, such as sunflower, olive or rapeseed oil spreads.",
      "Have porridge or muesli made with oats for breakfast, or oatcakes as a snack.",
      "Swap crisps for unsalted nuts or seeds.",
      "Swap red or processed meat for fish, turkey or chicken without the skin, or lentils, soya or Quorn.",
      "Bake, steam, grill or boil foods instead of frying them.",
    ],
    tryThisWeek: [
      "Try oats for breakfast.",
      "Swap butter for an oil spread.",
      "Swap crisps for unsalted nuts.",
    ],
    ask: "Which changes to what I eat would make the most difference to my cholesterol?",
    interactive: {
      kind: "scenarios",
      title: "Everyday food swaps",
      scenarios: [
        {
          id: "toast",
          situation: "You butter your toast every morning.",
          options: [{ text: "Swap to a sunflower or olive spread", best: true }, { text: "Switch to coconut oil" }],
          why: "Swap butter for vegetable oil spreads, such as sunflower, olive or rapeseed oil spreads.",
        },
        {
          id: "snack",
          situation: "You want a mid-afternoon snack.",
          options: [{ text: "A small handful of plain nuts", best: true }, { text: "A packet of crisps" }],
          why: "A small handful of plain nuts, about 30g, makes a good swap for chocolate, cakes and biscuits.",
        },
        {
          id: "breakfast",
          situation: "You are choosing breakfast.",
          options: [{ text: "Porridge made with oats", best: true }, { text: "A pastry" }],
          why: "Oats and barley contain a soluble fibre called beta glucans, which forms a gel in the gut and helps stop cholesterol being absorbed.",
        },
        {
          id: "pie",
          situation: "You are making a pie for dinner.",
          options: [{ text: "Use a top crust only", best: true }, { text: "Add extra cheese" }],
          why: "Choosing pies with only a top crust, whether sweet or savoury, can cut saturated fat by 40 percent, says the BHF.",
        },
      ],
    },
    sources: [NHS_LOWER, HUK_SAT_FAT, BHF_LOWERING_FOODS, BHF_FOODS_TO_AVOID, BHF_LOWERING, BHF_STEROLS],
    quiz: {
      question: "Which type of fat raises blood cholesterol?",
      options: [{ text: "Saturated fat", right: true }, { text: "Unsaturated fat in olive oil" }, { text: "The fat in oily fish" }],
      why: "To reduce your cholesterol, try to cut down on fatty food, especially food that contains saturated fat.",
    },
  },
  {
    id: "chol-activity",
    kicker: "Lifestyle",
    question: "How do activity, weight and stopping smoking help my cholesterol?",
    hook: "Moving more helps clear bad cholesterol. Stopping smoking halves the risk of heart disease within a year.",
    short: "Being active lowers bad cholesterol and raises good HDL cholesterol. Aim for at least 150 minutes of moderate activity a week. Losing even a little weight helps, and stopping smoking is one of the best things you can do for your cholesterol and your heart.",
    sections: [
      {
        heading: "Why moving helps",
        paragraphs: [
          "Regular exercise decreases bad non-HDL cholesterol and increases good HDL cholesterol. It does this by stimulating the body to move bad cholesterol to your liver so it can be removed.",
          "Being active can also help you lose weight or stay a healthy weight, lose fat from around your middle, lower your blood pressure and lower the risk of type 2 diabetes.",
        ],
      },
      {
        heading: "How much",
        paragraphs: [
          "Aim to do at least 150 minutes of moderate intensity exercise or 75 minutes of vigorous activity a week. One way is 30 minutes a day, on at least five days a week.",
          "Moderate activity gets your heart rate up and makes you breathe harder, but you should not be out of breath. Walking, swimming and cycling are good things to try when starting out.",
          "Start slowly and build up. Find something you enjoy, as you are more likely to keep doing it.",
        ],
      },
      {
        heading: "Weight and shape",
        paragraphs: [
          "If your doctor has advised you to lose weight, even a little makes a big difference. Losing 10% of your body weight will help lower your cholesterol and triglyceride levels and your blood pressure.",
          "Carrying extra weight around your middle can lead to higher cholesterol and triglycerides. Changes to what you eat and how active you are can help you lose fat from your middle.",
        ],
      },
      {
        heading: "Stopping smoking",
        paragraphs: [
          "Smoking lowers good HDL cholesterol and makes bad LDL cholesterol stickier, so it clings to your artery walls. It also damages the artery walls, and cholesterol collects in the damaged areas.",
          "Stopping smoking is one of the best things you can do for your cholesterol and your heart. Within a year, your risk of heart disease will be halved, and you are up to four times more likely to quit with support.",
        ],
      },
      {
        heading: "Alcohol",
        paragraphs: [
          "When you drink alcohol, the liver turns it into triglycerides and cholesterol, so drinking raises both in your blood. Cutting down can help you lower your cholesterol.",
          "Try to avoid drinking more than 14 units of alcohol a week on a regular basis, spread your drinking over 3 or more days, and have several drink-free days each week.",
        ],
      },
    ],
    helps: [
      "Walk fast enough that your heart starts beating faster.",
      "Take the stairs, or hop off the bus a stop early and walk.",
      "Go for smaller portions, and fill half your plate with vegetables.",
      "Get help to stop smoking from your GP or NHS stop smoking services.",
      "Have several drink-free days each week.",
      "Ask your GP for help and advice if you are struggling to cut down on alcohol.",
    ],
    tryThisWeek: [
      "Take a brisk walk.",
      "Use the stairs.",
      "Plan a drink-free day.",
    ],
    ask: "What kind of activity suits me, and what support is there to stop smoking?",
    interactive: {
      kind: "timeline",
      title: "After your last cigarette",
      steps: [
        { id: "hours", when: "Within hours", title: "Your heart settles", points: ["Your heart rate returns to normal.", "The chemicals start to leave your blood."] },
        { id: "days", when: "Within days", title: "Breathing opens up", points: ["Your breathing opens up.", "Your sense of taste and smell improves."] },
        { id: "weeks", when: "Within weeks", title: "Less sticky blood", points: ["Your blood becomes less sticky.", "The risk of heart attacks starts to fall."] },
        { id: "months", when: "Within months", title: "More energy", points: ["Blood flow around your body improves.", "Exercise gets easier."] },
        { id: "year", when: "After one year", title: "Half the risk", points: ["Your risk of heart disease and heart attacks is halved."] },
      ],
    },
    sources: [NHS_LOWER, HUK_EXERCISE, BHF_EXERCISE, HUK_WEIGHT, HUK_SMOKING, BHF_LOWERING, HUK_ALCOHOL],
    quiz: {
      question: "How does regular exercise help your cholesterol?",
      options: [{ text: "It helps move bad cholesterol to the liver to be removed", right: true }, { text: "It turns good cholesterol into bad" }, { text: "It makes no difference" }],
      why: "It does this by stimulating the body to move bad cholesterol to your liver so it can be removed.",
    },
  },
  {
    id: "chol-rechecks",
    kicker: "Checks",
    question: "How often should my cholesterol be checked again?",
    hook: "Once a year if it is high or you take a statin, with a first check about three months after starting.",
    short: "If you have high cholesterol, your GP should invite you for a blood test every year to check your levels and how you are getting on. After starting a statin, a check is usually done after three months, then again a year later. If your levels are normal or borderline, the BHF suggests a check every 5 years.",
    sections: [
      {
        heading: "Once a year",
        paragraphs: [
          "If you have high cholesterol, your GP should invite you for a blood test every year. It checks your levels and how you are getting on with any medicines or lifestyle changes.",
          "If you take medicines to lower your cholesterol, you should be offered a test every year. If your levels are normal or borderline, the BHF suggests a check once every 5 years.",
        ],
      },
      {
        heading: "After starting treatment",
        paragraphs: [
          "Statins should start to work within two to three months. You should have a check-up and blood tests, usually after three months, to see whether your cholesterol has changed and whether your liver is healthy.",
          "These tests are recommended again a year later. With some other medicines, such as bempedoic acid, your doctor should check your cholesterol within two to three months of starting.",
        ],
      },
      {
        heading: "Where to get checked",
        paragraphs: [
          "You can get a test at your GP surgery or a pharmacy, or as part of an NHS Health Check. In England, people aged 40 to 74 without certain conditions should be invited every 5 years.",
          "People already diagnosed with conditions such as heart disease, or taking statins, are not offered the NHS Health Check. They should be offered regular check-ups instead.",
        ],
      },
      {
        heading: "Home test kits",
        paragraphs: [
          "HEART UK suggests it is better to have tests done by a trained healthcare professional. Most home kits that use a small machine only give your total cholesterol, not the full breakdown.",
          "If you use a home kit, always follow it up with a proper blood test taken by a healthcare professional.",
        ],
      },
    ],
    helps: [
      "If you have high cholesterol, get your levels tested at least once a year to track your progress.",
      "Go to your check-up after starting a statin, usually after three months.",
      "If you are 40 to 74 and have not been invited for an NHS Health Check, contact your GP practice.",
      "Follow up any home test with a blood test taken by a healthcare professional.",
      "Speak to your doctor if you have any questions about your cholesterol.",
    ],
    tryThisWeek: [
      "Check when your next test is due.",
      "Ask about an NHS Health Check.",
      "Follow up any home test.",
    ],
    ask: "When is my next cholesterol test, and what result are we hoping for?",
    interactive: {
      kind: "timeline",
      title: "The first year on a statin",
      steps: [
        { id: "start", when: "Day one", title: "Starting a statin", points: ["One tablet a day, usually long term.", "Tell your doctor about any other medicines."] },
        { id: "working", when: "Two to three months", title: "Starting to work", points: ["Statins should start to work within two to three months."] },
        { id: "first-check", when: "About three months", title: "First check-up", points: ["A cholesterol test to see what has changed.", "A test to see whether your liver is healthy."] },
        { id: "year", when: "A year later", title: "Checked again", points: ["The tests are recommended again a year later."] },
        { id: "yearly", when: "Every year", title: "Your yearly test", points: ["You should be offered a test every year while you take medicine to lower cholesterol."] },
      ],
    },
    sources: [BHF_CHOLESTEROL, BHF_LOWERING, HUK_STATINS, HUK_GET_TEST, NHS_HEALTH_CHECK, HUK_BEMPEDOIC, HUK_HOME_TESTS],
    quiz: {
      question: "If you have high cholesterol, how often should your GP invite you for a blood test?",
      options: [{ text: "Every year", right: true }, { text: "Every 10 years" }, { text: "Only if you feel unwell" }],
      why: "If you have high cholesterol, your GP should invite you for a blood test every year.",
    },
  },
  {
    id: "chol-labels",
    kicker: "Food",
    question: "How do I read a food label for saturated fat?",
    hook: "Red, amber, green on the front. The numbers per 100g on the back. Here is what to look for.",
    short: "Food labels show how much fat, saturated fat, sugar and salt a food contains. More than 5g of saturated fat per 100g is high. On colour-coded labels, red means high, amber medium and green low, so for heart health go for more greens and ambers.",
    sections: [
      {
        heading: "Where to look",
        paragraphs: [
          "All pre-packed foods have a nutrition information label on the back or side of the packaging. It must show energy, fat, saturates or saturated fat, carbohydrate, sugars, protein and salt.",
          "All nutrition information is given per 100 grams or per 100 millilitres, and sometimes per portion. Serving sizes vary between brands and may not reflect your portion, so check the amounts per 100g to compare products.",
        ],
      },
      {
        heading: "Is it high in saturated fat?",
        paragraphs: [
          "A food is high in saturated fat if it has more than 5g of saturated fat per 100g. If you are trying to cut down, eat fewer of these foods.",
          "Saturated fat might be written as sat fat or saturates. For heart health, focus on saturated fat rather than total fat.",
        ],
      },
      {
        heading: "Traffic lights on the front",
        paragraphs: [
          "Some front-of-pack labels use red, amber and green. Red means high, amber means medium and green means low.",
          "Products with mostly greens are the healthiest choices, and a mix of ambers and greens is fine every day. Limit foods with red, especially for saturated fat, sugar or salt.",
          "Some foods that are high in fat, such as oily fish, nuts, oils and spreads, may be red for saturated fat. This is OK because they contain a higher proportion of healthy unsaturated fats.",
        ],
      },
      {
        heading: "The ingredients list",
        paragraphs: [
          "Ingredients are listed in order of weight, so the main ingredients always come first. If the first few are cream, butter or oil, the food is likely to be high in fat.",
          "Look for hidden saturated fat, such as butter, palm oil or coconut oil. The higher they appear on the list, the more there is in the product.",
        ],
      },
    ],
    helps: [
      "Check the front-of-pack colours, and go for more greens and ambers and fewer reds.",
      "Compare similar products and choose the one lower in saturated fat, sugar and salt.",
      "Check the amounts per 100g for an accurate comparison.",
      "Look for butter, palm oil or coconut oil near the top of the ingredients list.",
      "When eating out, check the nutrition information online or on the menu.",
    ],
    tryThisWeek: [
      "Compare two similar products.",
      "Check the per 100g column.",
      "Read the first few ingredients.",
    ],
    ask: "Which of the foods I eat most often should I check first for saturated fat?",
    interactive: {
      kind: "scenarios",
      title: "In the supermarket aisle",
      scenarios: [
        {
          id: "pie",
          situation: "A pie has 6g of saturated fat per 100g.",
          options: [{ text: "High: have it less often", best: true }, { text: "Low: eat it freely" }],
          why: "A food is high in saturated fat if it has more than 5g of saturated fat per 100g.",
        },
        {
          id: "nuts",
          situation: "A bag of plain nuts shows red on the label.",
          options: [{ text: "Still a good choice", best: true }, { text: "Avoid nuts altogether" }],
          why: "Some foods that are high in fat, such as oily fish, nuts, oils and spreads, may be red for saturated fat. This is OK because they contain a higher proportion of healthy unsaturated fats.",
        },
        {
          id: "ready-meals",
          situation: "Two ready meals look much the same.",
          options: [{ text: "Pick the one with more greens", best: true }, { text: "Pick the bigger portion" }],
          why: "Products with mostly greens are the healthiest choices, and a mix of ambers and greens is fine every day.",
        },
        {
          id: "butter-first",
          situation: "The first ingredient listed is butter.",
          options: [{ text: "Likely to be high in fat", best: true }, { text: "Probably low in fat" }],
          why: "If the first few are cream, butter or oil, the food is likely to be high in fat.",
        },
      ],
    },
    sources: [NHS_LABELS, HUK_LABELS, HUK_SAT_FAT, BHF_FOODS_TO_AVOID],
    quiz: {
      question: "On a traffic light label, what does red mean?",
      options: [{ text: "High", right: true }, { text: "Healthy" }, { text: "Low" }],
      why: "Red means high, amber means medium and green means low.",
    },
  },
  {
    id: "chol-myths",
    kicker: "Food questions",
    question: "Can I still eat eggs, and is butter better than spread?",
    hook: "Eggs are fine for most people. Butter, coconut oil and low-fat diets are where the myths start.",
    short: "For most people, the cholesterol in eggs and shellfish has a much smaller effect on blood cholesterol than saturated fat. Butter and coconut oil are high in saturated fat, so a spread made from vegetable oils is the healthier choice. People with familial hypercholesterolaemia may need to be more careful.",
    sections: [
      {
        heading: "Eggs",
        paragraphs: [
          "For most people, eggs are not bad for you. Eggs contain cholesterol in the yolk, but this dietary cholesterol has a much smaller effect on blood cholesterol than once thought.",
          "The BHF says there is no recommended limit on eggs, and 1 or 2 a day is unlikely to be a problem for most adults as part of a balanced diet. How they are cooked matters: boiled or poached eggs are healthy choices, while butter, bacon and sausages add saturated fat.",
        ],
      },
      {
        heading: "Shellfish and offal",
        paragraphs: [
          "Prawns, crab, liver and kidney contain cholesterol, but they are low in saturated fat. Most people do not need to cut down on them as part of a healthy, balanced diet.",
          "Liver is very high in vitamin A, so the government recommends no more than one portion of liver or liver pâté a week. If you are pregnant or planning a pregnancy, avoid liver, liver pâté and supplements containing retinol completely.",
        ],
      },
      {
        heading: "Butter or spread?",
        paragraphs: [
          "Butter is about half saturated fat, and one teaspoon contains a large part of the daily maximum. It is not better for you than margarine, which is made from vegetable oils containing healthier unsaturated fats.",
          "Some spreads also contain plant stanols and sterols, which can lower LDL cholesterol if eaten in the right amounts.",
        ],
      },
      {
        heading: "Coconut oil and low-fat diets",
        paragraphs: [
          "Coconut oil has an image of being a healthy option, but it is made up almost entirely of saturated fat, even more than butter. It is best used sparingly.",
          "A low-fat diet is not needed to lower cholesterol. We need some fat, and what matters is the type, so swap foods high in saturated fat for ones with healthier unsaturated fat.",
        ],
      },
      {
        heading: "If you have FH or very high cholesterol",
        paragraphs: [
          "If you have familial hypercholesterolaemia, you may still need to be careful about foods that contain dietary cholesterol, including eggs, shellfish and offal.",
          "HEART UK suggests limiting eggs to three or four a week for people with FH, high blood cholesterol or heart disease. The BHF says that if you have FH or very high cholesterol, talk to your GP or dietitian about how eggs fit into your diet.",
        ],
      },
    ],
    helps: [
      "Boil or poach eggs, or cook them with a small amount of vegetable oil rather than butter or ghee.",
      "Swap fried eggs and bacon for poached eggs with wholegrain toast and grilled tomatoes.",
      "Swap butter for a spread made from sunflower, olive or rapeseed oil.",
      "Use coconut oil sparingly.",
      "If you have FH or very high cholesterol, check with your GP or dietitian about eggs.",
      "Check the source of nutrition advice, and trust it only if it is backed by strong scientific evidence.",
    ],
    tryThisWeek: [
      "Poach or boil your eggs.",
      "Swap butter for an oil spread.",
      "Check where advice comes from.",
    ],
    ask: "With my cholesterol, how many eggs a week is sensible for me?",
    interactive: {
      kind: "scenarios",
      title: "Myth or fact?",
      scenarios: [
        {
          id: "eggs",
          situation: "Eggs have to be cut out when cholesterol is high.",
          options: [{ text: "A myth, for most people", best: true }, { text: "A fact" }],
          why: "For most people, eggs are not bad for you. This dietary cholesterol has a much smaller effect on blood cholesterol than once thought.",
        },
        {
          id: "butter",
          situation: "Butter is better for you than margarine.",
          options: [{ text: "A myth", best: true }, { text: "A fact" }],
          why: "It is not better for you than margarine, which is made from vegetable oils containing healthier unsaturated fats.",
        },
        {
          id: "coconut",
          situation: "Coconut oil is a healthy choice.",
          options: [{ text: "A myth: it is mostly saturated fat", best: true }, { text: "A fact" }],
          why: "Coconut oil is made up almost entirely of saturated fat, even more than butter. It is best used sparingly.",
        },
        {
          id: "low-fat",
          situation: "You need a low-fat diet to lower cholesterol.",
          options: [{ text: "A myth: the type of fat matters", best: true }, { text: "A fact" }],
          why: "A low-fat diet is not needed to lower cholesterol. We need some fat, and what matters is the type.",
        },
        {
          id: "prawns",
          situation: "Prawns can be part of a healthy diet.",
          options: [{ text: "A fact, for most people", best: true }, { text: "A myth" }],
          why: "Prawns, crab, liver and kidney contain cholesterol, but they are low in saturated fat. Most people do not need to cut down on them.",
        },
      ],
    },
    sources: [BHF_EGGS, HUK_FOOD_CHOLESTEROL, HUK_MYTHS, BHF_LOWERING, BHF_STEROLS, HUK_SAT_FAT],
    quiz: {
      question: "For most people, what has the bigger effect on blood cholesterol?",
      options: [{ text: "Saturated fat", right: true }, { text: "The cholesterol in eggs" }, { text: "Prawns" }],
      why: "For most people, dietary cholesterol has a much smaller effect on blood cholesterol than once thought. Saturated fat has a much bigger impact.",
    },
  },
  {
    id: "chol-family",
    kicker: "Family",
    question: "Could high cholesterol run in my family?",
    hook: "Sometimes it is in the genes. Finding it in one person can protect the rest of the family.",
    short: "High cholesterol can run in families, either through one gene, as in familial hypercholesterolaemia (FH), or through many small gene changes adding up. FH affects about 1 in every 250 people, and a parent with FH has a 1 in 2 chance of passing it on to each child. If FH is found, close relatives should be assessed too.",
    sections: [
      {
        heading: "Families share genes and habits",
        paragraphs: [
          "You are at higher risk if a close family member, such as a parent or sibling, has had high cholesterol or a heart attack or stroke.",
          "Families also often share habits that raise risk, such as smoking, being physically inactive or eating more salt, sugar, fat and alcohol. A healthy weight, being active and a balanced diet can help reduce your risk.",
        ],
      },
      {
        heading: "Familial hypercholesterolaemia",
        paragraphs: [
          "FH is a genetic condition that can cause extremely high cholesterol, usually from birth. A change in one gene makes the liver less able to remove bad LDL cholesterol.",
          "It affects about 1 in every 250 people, and many do not know they have it. Without treatment, FH can lead to heart disease at a very young age.",
          "If one of your parents has FH, there is a 1 in 2 chance you could inherit it. If you have FH, there is the same chance of passing it on to each of your children.",
        ],
      },
      {
        heading: "Many small genes",
        paragraphs: [
          "Polygenic hypercholesterolaemia is when many small gene changes add up to raise your cholesterol. It is quite common, and you can have it even if your parents do not have high cholesterol.",
          "Unlike FH, cholesterol may not be raised from birth, and it can be affected by diet and lifestyle, age and the menopause.",
        ],
      },
      {
        heading: "Signs and testing",
        paragraphs: [
          "Rarely, FH causes visible signs, such as lumps around the knuckles, knees or the back of the ankle, a pale white ring around the coloured part of the eye, or small yellow patches around the eyes.",
          "A doctor may suspect FH from a high cholesterol result, a heart attack or stroke at a younger age, or a family history of either. A specialist assessment is likely to include a genetic test, from a blood sample or a cheek swab.",
        ],
      },
      {
        heading: "Testing relatives",
        paragraphs: [
          "If you are diagnosed with FH, your parents, brothers, sisters and children should be assessed as soon as possible. Children of people with FH should have a cholesterol check by the age of 10.",
          "Once an altered gene is found in one person, it is much easier to find it in relatives. This is called cascade testing, and your doctor may give you a letter to pass on to your family.",
          "There is no cure for FH, but it can be managed. If it is treated, you can expect to live a normal, healthy life.",
        ],
      },
    ],
    helps: [
      "Tell your doctor if a blood relative has had a heart attack or stroke, even if you feel healthy.",
      "If FH is found, help your doctor contact your parents, brothers, sisters and children for testing.",
      "Make sure children of a parent with FH have a cholesterol check by the age of 10.",
      "Have genetic counselling before a genetic test, so you understand what the results could mean for you and your family.",
      "Ask HEART UK's specialist nurses or your genetics counsellor for help talking to your family.",
    ],
    tryThisWeek: [
      "Tell your doctor about family heart attacks.",
      "Help relatives get tested.",
      "Ask about checks for your children.",
    ],
    ask: "Could my high cholesterol be genetic, and should my family be tested?",
    interactive: {
      kind: "signs",
      title: "Signs and family history to mention",
      intro: "Tick any that apply. Some can be signs of FH, and some are part of your family history.",
      signs: [
        "Lumps around the knuckles, knees or ankles",
        "A pale white ring around the iris",
        "Small yellow patches around the eyes",
        "A very high cholesterol result",
        "A heart attack or stroke at a younger age",
        "Relatives with early heart disease or stroke",
        "A relative diagnosed with FH",
      ],
      after: "Take this list to your GP or nurse. A simple blood test is the first step, and close relatives of anyone with FH should be assessed as soon as possible.",
      copyHeading: "Signs and family history to mention",
    },
    sources: [BHF_FH, HUK_FH, HUK_CAUSES, HUK_POLYGENIC, HUK_GET_TEST, HUK_GENETIC, BHF_FAMILY],
    quiz: {
      question: "If one of your parents has FH, what is the chance you inherit it?",
      options: [{ text: "1 in 2", right: true }, { text: "1 in 250" }, { text: "1 in 100" }],
      why: "If one of your parents has FH, there is a 1 in 2 chance you could inherit it.",
    },
  },
];
