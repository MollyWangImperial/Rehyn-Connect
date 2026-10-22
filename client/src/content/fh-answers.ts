import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Familial hypercholesterolaemia (FH) page's pieces
// (content/library-conditions/metabolism-more.ts). Every sentence was written from wording checked on
// 21 October 2026 on the pages listed under each answer's `sources`; nothing is added that those pages do not
// say. The NHS no longer has its own FH page (its High cholesterol page sends readers to HEART UK), so most of
// it comes from HEART UK, the British Heart Foundation, NICE guideline CG71 and the NHS cholesterol and
// medicine pages. General information only; it never replaces what a person's own team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const huk = (label: string, path: string): LearnSource => ({ label: `HEART UK: ${label}`, url: `https://www.heartuk.org.uk/${path}` });
const bhf = (label: string, path: string): LearnSource => ({ label: `British Heart Foundation: ${label}`, url: `https://www.bhf.org.uk/${path}` });

const NHS_HC = nhs("High cholesterol", "conditions/high-cholesterol/");
const NHS_HC_TESTED = nhs("High cholesterol: getting tested", "conditions/high-cholesterol/getting-tested/");
const NHS_HC_LOWER = nhs("How to lower your cholesterol", "conditions/high-cholesterol/how-to-lower-your-cholesterol/");
const NHS_STATINS = nhs("Statins", "medicines/statins/");
const NHS_ATORVASTATIN = nhs("Atorvastatin", "medicines/atorvastatin/");
const NHS_EZETIMIBE = nhs("About ezetimibe", "medicines/ezetimibe/about-ezetimibe/");
const NHS_EZETIMIBE_PREGNANCY = nhs("Pregnancy, breastfeeding and fertility while taking ezetimibe", "medicines/ezetimibe/pregnancy-breastfeeding-and-fertility-while-taking-ezetimibe/");
const NHS_HEART_ATTACK = nhs("Heart attack", "conditions/heart-attack/");

const HUK_WHAT = huk("What is familial hypercholesterolaemia (FH)?", "fh/what-is-fh");
const HUK_CRITERIA = huk("What are the diagnostic criteria for FH?", "fh/fh-diagnosis-criteria");
const HUK_PARENT = huk("Being a parent with FH", "fh/being-a-parent");
const HUK_CPSS = huk("Child-Parent Screening Service for FH, information for parents", "fh/cpss-information-for-parents");
const HUK_HOFH = huk("What is homozygous familial hypercholesterolaemia (HoFH)?", "hofh/what-is-hofh");
const HUK_GENETIC = huk("Genetic testing", "getting-treatment/genetic-testing");
const HUK_STATINS = huk("Statins", "getting-treatment/statins");
const HUK_STATIN_QUESTIONS = huk("Questions about statins", "getting-treatment/questions-about-statins");
const HUK_EZETIMIBE = huk("Ezetimibe", "getting-treatment/ezetimibe");
const HUK_PCSK9 = huk("PCSK9 inhibitors", "getting-treatment/pcsk9-inhibitors");
const HUK_INCLISIRAN = huk("Inclisiran", "getting-treatment/inclisiran");
const HUK_BEMPEDOIC = huk("Bempedoic acid", "getting-treatment/bempedoic-acid");
const HUK_APHERESIS = huk("LDL-apheresis", "getting-treatment/ldl-apheresis");
const HUK_CLINIC = huk("Find your nearest lipid clinic", "lipid-clinics/find-your-nearest-lipid-clinic");
const HUK_PREGNANCY = huk("Pregnancy and blood fats", "cholesterol/pregnancy-and-blood-fats");
const HUK_TEST = huk("Getting a cholesterol test", "cholesterol/getting-a-cholesterol-test");
const HUK_DIET_FH = huk("Statins vs diet in FH", "news-and-blogs/fh-statins-diet");

const BHF_FH = bhf("Familial hypercholesterolaemia", "informationsupport/conditions/familial-hypercholesterolaemia");
const BHF_GENETIC = bhf("Genetic (or genomic) testing", "informationsupport/tests/genetic-testing");
const BHF_GIS = bhf("Genetic Information Service", "informationsupport/support/genetic-information-service");
const BHF_CASCADE = bhf("Cascade testing for familial hypercholesterolaemia", "for-professionals/healthcare-professionals/innovation-in-care/familial-hypercholesterolaemia-cascade-testing-services");
const BHF_ALTERNATIVES = bhf("4 statin alternatives that lower cholesterol", "informationsupport/heart-matters-magazine/medical/statin-alternatives");
const BHF_FAMILY = bhf("Family history", "informationsupport/risk-factors/family-history");
const BHF_HELPLINE = bhf("Heart Helpline", "informationsupport/heart-helpline");

const NICE_FH: LearnSource = { label: "NICE: Familial hypercholesterolaemia: identification and management (CG71)", url: "https://www.nice.org.uk/guidance/cg71/chapter/Recommendations" };

export const fhAnswers: LearnArticle[] = [
  {
    id: "fh-what-it-is",
    kicker: "Understanding",
    question: "What is familial hypercholesterolaemia?",
    hook: "An inherited change in one gene means the liver cannot clear bad cholesterol from the blood as it should.",
    short: "Familial hypercholesterolaemia (FH) is an inherited condition that can cause extremely high cholesterol levels, usually from birth. A change in one gene makes the liver less able to remove LDL, or bad, cholesterol from the blood. Without treatment it can lead to heart disease at a young age, but once it is diagnosed it can be treated with medicines and a healthy lifestyle.",
    sections: [
      {
        heading: "Passed down in the genes",
        paragraphs: [
          "Familial hypercholesterolaemia, or FH for short, is an inherited condition that can cause extremely high cholesterol levels. It is passed down through families in the genes, and the high levels are usually present from birth.",
          "The word familial means it runs in families. Hypercholesterolaemia means too much cholesterol in the blood, which can clog up your blood vessels.",
        ],
      },
      {
        heading: "What goes wrong",
        paragraphs: [
          "Cholesterol is made by your liver and carried around your body in the blood. Liver cells have small structures on them called LDL receptors, which catch LDL cholesterol as it passes by and take it into the cell to be used, stored or broken down.",
          "With FH, a change in one of the genes involved means LDL cholesterol, sometimes known as bad cholesterol, cannot be taken out of your blood quickly or easily. So it builds up.",
        ],
      },
      {
        heading: "Three main genes",
        paragraphs: [
          "Most people with FH have a change in an LDL receptor gene, which means they do not have enough LDL receptors. Only two or three in every 100 people with FH have a change in the APOB gene, and only a few have a change in the PCSK9 gene.",
          "Because it is about genes, FH means your cholesterol can become much higher than other people's even if you have a very healthy lifestyle.",
        ],
      },
      {
        heading: "How common it is",
        paragraphs: [
          "FH is a common inherited condition that affects about 1 in every 250 people. It is estimated that around 270,000 people in the UK have it, but many do not know they have it.",
          "A rare and more severe type, homozygous FH, happens when someone inherits an altered gene from both parents. An estimated one in 250,000 people have it.",
        ],
      },
      {
        heading: "Treatable once found",
        paragraphs: [
          "Without treatment, FH can lead to heart disease at a very young age. But once it has been diagnosed, it can be treated with medicines and a healthy lifestyle.",
          "There is no cure for FH, but it can be managed. The NHS points people to HEART UK, the cholesterol charity, for information about this inherited high cholesterol that starts at a young age.",
        ],
      },
    ],
    helps: [
      "Ask your GP surgery for a cholesterol test if you have not had one and high cholesterol or heart problems run in your family.",
      "If you have been diagnosed with FH, ask your doctor about the treatment plan for you.",
      "Ask whether your parents, brothers, sisters and children should be assessed as soon as possible.",
      "Contact the British Heart Foundation's Genetic Information Service if you have questions or concerns about FH.",
    ],
    tryThisWeek: [
      "Ask for a cholesterol test.",
      "Ask about your treatment plan.",
      "Ask if relatives should be assessed.",
    ],
    ask: "Is my high cholesterol caused by FH, and which gene is involved?",
    interactive: {
      kind: "flip-cards",
      title: "The genes behind FH",
      intro: "Turn each card to see what a change in that gene does.",
      cards: [
        { id: "ldlr", front: "LDL receptor genes", when: "Most people with FH", back: "A change means you do not have enough LDL receptors, so cholesterol builds up in the blood." },
        { id: "apob", front: "APOB gene", when: "Two or three in every 100 with FH", back: "LDL cholesterol cannot bind well to LDL receptors, so it is taken out of the blood too slowly." },
        { id: "pcsk9", front: "PCSK9 gene", when: "Only a few people", back: "LDL receptors are broken down in the liver, so they cannot take cholesterol out of your blood." },
        { id: "hofh", front: "Homozygous FH", when: "An altered gene from each parent", back: "Raises cholesterol even further. An estimated one in 250,000 people have it." },
      ],
    },
    sources: [HUK_WHAT, BHF_FH, HUK_HOFH, NHS_HC, NHS_HC_TESTED],
    quiz: {
      question: "What does a change in an FH gene do?",
      options: [{ text: "Stops LDL cholesterol leaving the blood easily", right: true }, { text: "Makes the body crave fatty food" }, { text: "Only matters with an unhealthy lifestyle" }],
      why: "With FH, a change in one of the genes involved means LDL cholesterol, sometimes known as bad cholesterol, cannot be taken out of your blood quickly or easily.",
    },
  },
  {
    id: "fh-signs",
    kicker: "Signs",
    question: "What are the signs of FH, and why does family history matter?",
    hook: "Most people with FH have no visible signs. A cholesterol test and the family's heart history are the real clues.",
    short: "High cholesterol does not usually cause symptoms, and FH only rarely causes visible signs, such as lumps on the tendons or yellow patches around the eyes. More often, FH is suspected because of a high result on a routine blood test, or because relatives had heart disease or a stroke young. A blood test is the only way to find out.",
    sections: [
      {
        heading: "Often no signs at all",
        paragraphs: [
          "High cholesterol does not usually cause symptoms. You can only find out if you have it from a blood test.",
          "Rarely, too much cholesterol caused by FH causes visible signs. NICE guidance says that not having signs, such as lumps on the tendons, does not rule out FH in adults or children.",
        ],
      },
      {
        heading: "Signs that can show",
        paragraphs: [
          "Tendon xanthomata are lumps and bumps around your knuckles, knees or the back of your ankle, the Achilles tendon. Corneal arcus is a pale white ring around the coloured part of your eye.",
          "Xanthelasmas are small yellow lumps or patches on the skin around your eye or on your eyelid.",
        ],
      },
      {
        heading: "When a doctor may suspect FH",
        paragraphs: [
          "Your doctor may suspect FH if a routine blood test shows you have a high cholesterol level, or if you have a heart attack or stroke, especially at a younger age.",
          "They may also suspect it if other members of your family have had heart disease or a stroke at a younger age, or have been diagnosed with FH.",
        ],
      },
      {
        heading: "Your family's heart history",
        paragraphs: [
          "You have a strong family history of a condition if your father or brother was under the age of 55 when they were diagnosed, or your mother or sister was under the age of 65.",
          "Tell your doctor if a family member you are related to by blood has had a heart attack or a stroke, even if you feel healthy. They can check your blood pressure and your cholesterol.",
        ],
      },
      {
        heading: "Getting checked",
        paragraphs: [
          "HEART UK recommends that all adults get a cholesterol check, even if they are young, fit and feel healthy, because high cholesterol can be caused by your genes.",
          "If your mother, father, brother, sister or child has FH, you should be offered a test when you find out. Ask your GP surgery for a test if you have not had one and high cholesterol or heart problems run in your family.",
        ],
      },
    ],
    helps: [
      "Ask your GP surgery for a cholesterol test if high cholesterol or heart problems run in your family.",
      "Tell your doctor if a blood relative has had a heart attack or a stroke, even if you feel healthy.",
      "Find out which relatives had heart disease and how old they were, as doctors ask about this.",
      "If you are diagnosed with FH, ask whether your parents, brothers, sisters and children should be assessed.",
      "If you are 40 to 74 and live in England, take up your free NHS Health Check invitation.",
    ],
    tryThisWeek: [
      "Ask for a cholesterol test.",
      "Tell your doctor about family heart history.",
      "Note relatives' ages at diagnosis.",
    ],
    ask: "Could my cholesterol result or my family history point to FH?",
    interactive: {
      kind: "signs",
      title: "Clues to mention",
      intro: "Tick any that apply. They can be clues to FH worth telling your GP or nurse about.",
      signs: [
        "Lumps on knuckles, knees or ankles",
        "A pale white ring around your iris",
        "Yellow patches around your eyes",
        "A high routine cholesterol result",
        "A heart attack or stroke when younger",
        "Early heart disease or stroke in family",
        "A relative diagnosed with FH",
      ],
      after: "Show this list to your GP or nurse. A simple blood test checks your cholesterol, and they will ask about your family history.",
      copyHeading: "Possible signs of FH I have noticed",
    },
    sources: [BHF_FH, NHS_HC_TESTED, BHF_FAMILY, HUK_TEST, NICE_FH],
    quiz: {
      question: "Can you have FH without any visible signs?",
      options: [{ text: "Yes, visible signs are rare", right: true }, { text: "No, there are always lumps" }, { text: "Only children have no signs" }],
      why: "Rarely, too much cholesterol caused by FH causes visible signs.",
    },
  },
  {
    id: "fh-diagnosis",
    kicker: "Diagnosis",
    question: "How is FH diagnosed, and what is the genetic test?",
    hook: "A blood test, your family history and a set of criteria come first. A DNA test can then confirm it.",
    short: "Diagnosis starts with a cholesterol blood test and questions about your family history. If FH looks likely, your doctor uses criteria such as the Simon Broome criteria and may refer you to a specialist for a genetic test, using a blood sample or a cheek swab. Genetic testing can find an altered gene in about three out of every four people with FH.",
    sections: [
      {
        heading: "First, a blood test",
        paragraphs: [
          "The first step is to visit your GP or nurse to have your cholesterol checked with a simple blood test. They will also ask whether you have a family history of high cholesterol or heart conditions.",
          "If your results come back high, or they notice some of the signs of FH, they may use a special guide to help them make a diagnosis.",
        ],
      },
      {
        heading: "The criteria doctors use",
        paragraphs: [
          "Doctors use the Simon Broome criteria, which look at your cholesterol level, physical signs such as lumps on the tendons, your family history and any DNA result. You might be diagnosed as having definite FH or possible FH.",
          "Some doctors use the Dutch Lipid Clinic Network criteria instead, which work on a points system. NICE says people who meet the Simon Broome criteria for possible or definite FH should be referred to a specialist FH service for DNA testing.",
        ],
      },
      {
        heading: "The genetic test",
        paragraphs: [
          "Genetic testing looks at your DNA to see if you have a genetic variation which can cause FH. The test may be a blood sample or a mouth swab from inside your cheek, and the sample is sent to a laboratory.",
          "Before the test, you should have genetic counselling with an FH professional or a genetics counsellor. It is a very personal choice, and you do not have to have a genetic test if you do not want to.",
        ],
      },
      {
        heading: "Getting your results",
        paragraphs: [
          "If you are the first person in your family to have the test, results can take around two or three months, or sometimes longer. Scientists need to search all the genes that could be causing the problem.",
          "Genetic testing can find an altered gene in about three out of every four people with FH. If no change is found, it does not always mean you do not have a genetic condition, and your specialist will talk through what it means.",
        ],
      },
      {
        heading: "Why a confirmed diagnosis helps",
        paragraphs: [
          "A genetic result can confirm a diagnosis, let you start treatment quickly and mean your family can be tested too. Diagnosis matters because treatment is more effective the sooner it is started.",
          "HEART UK suggests telling insurers that you have FH. If you have no symptoms and normal cholesterol levels, it suggests challenging any company that raises your premium simply because of FH.",
        ],
      },
    ],
    helps: [
      "Ask your GP or nurse for a cholesterol test, and tell them about any family history of high cholesterol or heart conditions.",
      "Ask whether you meet the criteria for a referral to a specialist FH service for DNA testing.",
      "Use genetic counselling to ask what the results could mean for you and your family.",
      "Talk to your health professional about practical concerns, such as insurance, before the test.",
      "Contact the British Heart Foundation's Genetic Information Service if you have questions about testing.",
    ],
    tryThisWeek: [
      "Ask for a cholesterol test.",
      "Ask about a genetic test referral.",
      "Write down questions for counselling.",
    ],
    ask: "Do I meet the criteria for a genetic test, and how long will the result take?",
    interactive: {
      kind: "timeline",
      title: "From blood test to diagnosis",
      steps: [
        { id: "gp", when: "First", title: "Your GP or nurse", points: ["A simple blood test checks your cholesterol.", "Questions about your family history."] },
        { id: "criteria", when: "If it is high", title: "The criteria", points: ["The Simon Broome or Dutch criteria are used.", "You may be diagnosed with possible or definite FH."] },
        { id: "counselling", when: "Before the test", title: "Genetic counselling", points: ["What the test involves and what results mean.", "It is your choice whether to go ahead."] },
        { id: "test", when: "The test", title: "Blood sample or cheek swab", points: ["The sample goes to a laboratory.", "First in the family: around two or three months."] },
        { id: "family", when: "If a gene is found", title: "Family testing", points: ["Relatives can be tested for the same gene.", "This is called cascade testing."] },
      ],
    },
    sources: [BHF_FH, HUK_CRITERIA, HUK_GENETIC, BHF_GENETIC, NICE_FH, HUK_WHAT],
    quiz: {
      question: "How often does genetic testing find an altered gene in people with FH?",
      options: [{ text: "In about three out of every four", right: true }, { text: "Every single time" }, { text: "In about one in ten" }],
      why: "Genetic testing can find an altered gene in about three out of every four people with FH.",
    },
  },
  {
    id: "fh-risk",
    kicker: "Your heart",
    question: "What does FH mean for my heart?",
    hook: "Cholesterol that is high from birth builds up in the arteries earlier. Treatment changes that picture a great deal.",
    short: "High cholesterol causes a gradual build-up of fatty material in the arteries, which raises the risk of coronary heart disease, a heart attack or a stroke. With FH that risk is higher and more likely to come at a younger age. Treatment greatly reduces it, and if FH is treated you can expect to live a normal, healthy life.",
    sections: [
      {
        heading: "Why high cholesterol matters",
        paragraphs: [
          "Having high cholesterol causes a gradual build-up of fatty material in your arteries, known as atheroma. This increases your risk of developing coronary heart disease or having a heart attack or stroke.",
          "If LDL cholesterol is too high, it gets laid down in your blood vessel walls, clogging them up. Blood clots can also form, which can cause a heart attack or stroke.",
        ],
      },
      {
        heading: "Higher, and earlier",
        paragraphs: [
          "If you have FH, your risk of this happening is higher and it is more likely to happen at a younger age. High cholesterol levels develop from childhood.",
          "The BHF says studies have shown that the risk of developing coronary heart disease is up to 13 times higher in people with untreated FH.",
        ],
      },
      {
        heading: "Treatment changes the picture",
        paragraphs: [
          "Treatment greatly reduces your risk of coronary heart disease, a heart attack or a stroke. The BHF says early detection and treatment with cholesterol-lowering medicines can increase life expectancy to near normal.",
          "It is understandable to be concerned if you are diagnosed with FH, but if it is treated you can expect to live a normal, healthy life.",
        ],
      },
      {
        heading: "Why the usual risk score is not used",
        paragraphs: [
          "Heart risk tools such as QRISK are not used for people with FH. NICE says this is because people with FH are already at high risk of early coronary heart disease.",
          "NICE says people with FH should be offered a structured review at least once a year, which includes checking for any symptoms of coronary heart disease.",
        ],
      },
      {
        heading: "Know the heart attack signs",
        paragraphs: [
          "Symptoms of a heart attack may include chest pain which may feel like crushing or squeezing on your chest, and the pain may spread to your arm, neck and jaw. You may also feel short of breath, feel sick or sweat.",
          "Call 999 if you have chest pain that feels tight or like squeezing on your chest, or chest pain that is spreading to your arms, neck or jaw. Do not drive yourself to A&E.",
        ],
      },
    ],
    helps: [
      "Follow the treatment plan you agree with your doctor, as treatment greatly reduces your risk.",
      "Go to your structured review at least once a year, and mention any symptoms.",
      "Eat a healthy balanced diet, keep active and stop smoking.",
      "Call 999 for chest pain that feels tight or squeezing, or spreads to your arms, neck or jaw.",
      "Do not drive yourself to A&E.",
    ],
    tryThisWeek: [
      "Check when your review is due.",
      "Learn the heart attack signs.",
      "Eat well and keep active.",
    ],
    ask: "How much has my treatment lowered my LDL cholesterol, and is it enough?",
    interactive: {
      kind: "scenarios",
      title: "Heart moments",
      scenarios: [
        {
          id: "chest",
          situation: "You have chest pain that feels tight and spreads to your jaw.",
          options: [{ text: "Call 999", best: true }, { text: "Drive yourself to A&E" }, { text: "Wait to see if it passes" }],
          why: "Call 999 if you have chest pain that is spreading to your arms, neck or jaw. Do not drive yourself to A&E.",
        },
        {
          id: "score",
          situation: "An online risk calculator says your heart risk is low.",
          options: [{ text: "Check with your FH team", best: true }, { text: "Decide you no longer need treatment" }],
          why: "Heart risk tools such as QRISK are not used for people with FH, because they are already at high risk of early coronary heart disease.",
        },
        {
          id: "worry",
          situation: "You feel frightened after your diagnosis.",
          options: [{ text: "Treatment greatly reduces the risk", best: true }, { text: "Assume heart disease cannot be avoided" }],
          why: "If it is treated you can expect to live a normal, healthy life.",
        },
        {
          id: "review",
          situation: "It has been over a year since your last FH review.",
          options: [{ text: "Ask for your structured review", best: true }, { text: "Wait until you have symptoms" }],
          why: "NICE says people with FH should be offered a structured review at least once a year.",
        },
      ],
    },
    sources: [BHF_FH, BHF_CASCADE, HUK_HOFH, NHS_HEART_ATTACK, NICE_FH],
    quiz: {
      question: "If FH is treated, what can you expect?",
      options: [{ text: "A normal, healthy life", right: true }, { text: "Heart disease is certain anyway" }, { text: "Treatment makes little difference" }],
      why: "It is understandable to be concerned if you are diagnosed with FH, but if it is treated you can expect to live a normal, healthy life.",
    },
  },
  {
    id: "fh-statins",
    kicker: "Treatment",
    question: "Why are statins the main treatment for FH?",
    hook: "A daily tablet that makes the liver produce less cholesterol, so it pulls more out of the blood. For most people with FH, it is enough.",
    short: "Statins lower the amount of cholesterol your body makes, and HEART UK says they are usually enough to treat FH. NICE recommends a high-intensity statin for adults with FH, aiming to cut LDL cholesterol by at least half. They are taken once a day, usually for life, and most people have no side effects.",
    sections: [
      {
        heading: "How statins work",
        paragraphs: [
          "Statins work by lowering the amount of cholesterol your body makes. Because the liver is not making so much, it takes cholesterol out of your blood instead, so your blood cholesterol levels fall.",
          "There are five types of statins in the UK: atorvastatin, rosuvastatin, pravastatin, simvastatin and fluvastatin. They come as a tablet you take once a day.",
        ],
      },
      {
        heading: "Statins and FH",
        paragraphs: [
          "FH is usually treated with statins, and HEART UK says they are usually enough. The NHS lists inherited high cholesterol among the conditions for which you may be offered a statin.",
          "NICE recommends a high-intensity statin as the first treatment for all adults with FH, aiming for at least a 50% fall in LDL cholesterol from the level before treatment. The dose can be raised to the highest that is licensed or that you can tolerate.",
        ],
      },
      {
        heading: "Taking them",
        paragraphs: [
          "You will usually take statins long term, sometimes for life. Try to take them at the same time each day, and if you forget a dose, skip it and take the next one at the usual time.",
          "You should have check-ups and blood tests to see how well your statin is working, usually after three months. Statins can interact with other medicines, and grapefruit juice can increase side effects, so check the leaflet and ask a pharmacist if you are unsure.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Most people do not have any side effects. The most commonly reported side effects are muscle aches and pains, and others include headaches, dizziness, feeling sick and sleep problems.",
          "If you think a statin is causing side effects, talk to a doctor. They will check what is causing your symptoms and may prescribe another statin or change your dose.",
        ],
      },
      {
        heading: "Keep taking them",
        paragraphs: [
          "If you stop taking statins, your cholesterol levels may go up again. Talk to a doctor or pharmacist before stopping.",
          "Statins should not be taken if you are pregnant or trying to get pregnant, because they can affect how a baby develops. Tell your doctor if you are planning a pregnancy.",
        ],
      },
    ],
    helps: [
      "Take your statin every day, at the same time each day.",
      "If you miss a dose, skip it and take the next one at the usual time; do not take 2 doses to make up for it.",
      "Talk to a doctor if you think you have side effects; another statin or a different dose may suit you.",
      "Do not stop taking statins without talking to a doctor or pharmacist first.",
      "Tell your doctor about any other medicines, herbal remedies, vitamins or supplements you take.",
      "Keep eating healthily, being active and not smoking: statins work better if your lifestyle is healthy too.",
    ],
    tryThisWeek: [
      "Take it at the same time daily.",
      "Report side effects to a doctor.",
      "Tell your doctor about other medicines.",
    ],
    ask: "Am I on a high-intensity statin, and has my LDL cholesterol fallen by at least half?",
    interactive: {
      kind: "scenarios",
      title: "Statin moments",
      scenarios: [
        {
          id: "missed",
          situation: "You forgot to take yesterday's statin.",
          options: [{ text: "Skip it and take today's as usual", best: true }, { text: "Take two today" }],
          why: "If you forget a dose, skip it and take the next one at the usual time. Do not take 2 doses to make up for a missed dose.",
        },
        {
          id: "aches",
          situation: "You have had muscle aches since starting a statin.",
          options: [{ text: "Talk to your doctor before stopping", best: true }, { text: "Stop it straight away on your own" }],
          why: "If you think a statin is causing side effects, talk to a doctor. They may prescribe another statin or change your dose.",
        },
        {
          id: "grapefruit",
          situation: "You take atorvastatin and love grapefruit juice.",
          options: [{ text: "No more than 1 or 2 small glasses a day", best: true }, { text: "Drink as much as you like" }],
          why: "The NHS says not to have more than 1 or 2 small glasses of grapefruit juice a day while taking atorvastatin.",
        },
        {
          id: "baby",
          situation: "You are thinking of trying for a baby.",
          options: [{ text: "Talk to your doctor first", best: true }, { text: "Carry on as normal" }],
          why: "Statins should not be taken if you are pregnant or trying to get pregnant.",
        },
      ],
    },
    sources: [NHS_STATINS, HUK_STATINS, HUK_WHAT, NICE_FH, NHS_ATORVASTATIN, HUK_STATIN_QUESTIONS, BHF_FH],
    quiz: {
      question: "How do statins lower cholesterol?",
      options: [{ text: "They lower the amount of cholesterol your body makes", right: true }, { text: "They stop you absorbing fat from food" }, { text: "They cure the faulty gene" }],
      why: "Statins work by lowering the amount of cholesterol your body makes.",
    },
  },
  {
    id: "fh-other-treatments",
    kicker: "Treatment",
    question: "What other treatments are there if statins are not enough?",
    hook: "A tablet that blocks cholesterol from food, injections that help the liver clear more, and for a few people, a machine that filters the blood.",
    short: "If statins do not lower your cholesterol enough, or you cannot take them, you may be offered other medicines instead or alongside. Ezetimibe is usually the next treatment, and specialists can prescribe injections called PCSK9 inhibitors for people with FH. A very small number of people have LDL apheresis, which filters cholesterol out of the blood.",
    sections: [
      {
        heading: "When other medicines come in",
        paragraphs: [
          "If statins do not lower your cholesterol enough or you cannot take them, you may be offered other medicines instead of, or alongside, your statin. These include ezetimibe, bempedoic acid, PCSK9 inhibitors, inclisiran, bile acid sequestrants and fibrates.",
          "NICE says adults with FH should be offered a referral to a specialist if the highest dose of a high-intensity statin they can take, with ezetimibe, does not lower LDL cholesterol by more than half.",
        ],
      },
      {
        heading: "Ezetimibe",
        paragraphs: [
          "Ezetimibe is a tablet taken once a day that helps stop your body taking in cholesterol from food. HEART UK calls it the next treatment after a statin.",
          "It is often taken alongside a statin, because they work in different ways and the effects add up. Common side effects include stomach pain and diarrhoea.",
        ],
      },
      {
        heading: "Injections",
        paragraphs: [
          "PCSK9 inhibitors, such as evolocumab and alirocumab, allow the liver to remove more LDL cholesterol from the blood. They are injected every two to four weeks and are usually prescribed by hospital specialists.",
          "For people with FH, they are approved when LDL cholesterol stays above set levels despite other medicines, such as above 5mmol/L for people without cardiovascular disease. Inclisiran works in a similar way and is injected every three to six months, but in England it is only for people who already have cardiovascular disease.",
        ],
      },
      {
        heading: "Other tablets",
        paragraphs: [
          "Bempedoic acid reduces the cholesterol made in the liver, like a statin, but it only works in the liver, so it is much less likely to cause muscle side effects. NICE recommends it with ezetimibe for people who cannot take statins, when ezetimibe alone does not lower cholesterol enough.",
          "For adults with FH who cannot take statins or ezetimibe, NICE says a specialist may consider a bile acid sequestrant, also called a resin, or a fibrate.",
        ],
      },
      {
        heading: "LDL apheresis",
        paragraphs: [
          "A very small number of people may have LDL apheresis. Blood is passed through a machine that filters out the cholesterol and is then returned to the body, a lot like dialysis.",
          "It is usually needed every one to two weeks and takes two to four hours. It is the main treatment for homozygous FH, and can help people whose cholesterol is still too high with medicines.",
        ],
      },
    ],
    helps: [
      "If your cholesterol is not coming down enough, ask your doctor whether another medicine could be added.",
      "If a statin gives you side effects, ask about a lower dose, a different statin or another medicine.",
      "Ask for a referral to a specialist if your LDL cholesterol has not fallen by more than half.",
      "If you are prescribed injections, ask your doctor or nurse to show you how to give them yourself.",
      "Tell your doctor about any side effects you notice.",
    ],
    tryThisWeek: [
      "Ask if another medicine could help.",
      "Ask about a specialist referral.",
      "Report side effects to your doctor.",
    ],
    ask: "If my LDL cholesterol is still high, which treatment would you add next?",
    interactive: {
      kind: "flip-cards",
      title: "Beyond statins, card by card",
      intro: "Turn each card to see what that treatment does and how it is given.",
      cards: [
        { id: "ezetimibe", front: "Ezetimibe", when: "A tablet once a day", back: "Helps stop your body taking in cholesterol from food. Often taken alongside a statin." },
        { id: "bempedoic", front: "Bempedoic acid", when: "A tablet, with ezetimibe", back: "Reduces the cholesterol made in the liver, with less risk of muscle side effects." },
        { id: "pcsk9", front: "PCSK9 inhibitors", when: "Injection every 2 to 4 weeks", back: "Allow the liver to remove more LDL cholesterol from the blood. Usually prescribed by specialists." },
        { id: "inclisiran", front: "Inclisiran", when: "Injection every 3 to 6 months", back: "Stops the liver making the PCSK9 protein. In England, only for people with cardiovascular disease." },
        { id: "apheresis", front: "LDL apheresis", when: "Every 1 to 2 weeks, in a clinic", back: "A machine filters cholesterol out of the blood, a lot like dialysis. For a very small number of people." },
      ],
    },
    sources: [BHF_FH, NHS_EZETIMIBE, HUK_EZETIMIBE, HUK_PCSK9, HUK_INCLISIRAN, HUK_BEMPEDOIC, HUK_APHERESIS, HUK_STATIN_QUESTIONS, NICE_FH, BHF_ALTERNATIVES, HUK_HOFH],
    quiz: {
      question: "How does ezetimibe lower cholesterol?",
      options: [{ text: "It helps stop your body taking in cholesterol from food", right: true }, { text: "It filters the blood through a machine" }, { text: "It replaces the need for a healthy diet" }],
      why: "Ezetimibe is a tablet taken once a day that helps stop your body taking in cholesterol from food.",
    },
  },
  {
    id: "fh-lifestyle",
    kicker: "Living well",
    question: "Do food, activity and not smoking still matter if I take medicine?",
    hook: "FH cannot be treated by diet alone, but what you eat and how you live still play an important part.",
    short: "FH cannot be treated through diet alone, but eating well and staying active still play an important part in treatment. The BHF advises a diet low in saturated fat, and limiting cholesterol in food to no more than 300mg a day. Not smoking matters even more with FH, because the risk of heart disease is already raised.",
    sections: [
      {
        heading: "Not instead of medicine",
        paragraphs: [
          "FH cannot be treated through diet alone, but eating well and staying active still play an important part in your treatment. NICE says lifestyle advice is part of medical care, and not a substitute for medicine.",
          "A large Danish study, described by HEART UK, found that people with FH who stuck more closely to a heart-healthy diet had a lower risk of heart disease. This was seen in people already taking statins too.",
        ],
      },
      {
        heading: "Foods to cut down on",
        paragraphs: [
          "It is important to follow a diet low in saturated fat and dietary cholesterol. Foods that can raise your cholesterol include red and processed meat, full-fat dairy products, baked goods and fried foods.",
          "While most people do not need to limit dietary cholesterol, people with FH need to cut down on foods high in it. The BHF suggests no more than 300mg a day, ideally less than 200mg: about 3 or 4 eggs a week, shellfish up to once or twice a week, and avoiding liver and offal.",
        ],
      },
      {
        heading: "Foods that help",
        paragraphs: [
          "Go for foods that lower cholesterol, like vegetable oils such as sunflower, olive and rapeseed oil, nuts, seeds, avocado and oily fish. Foods high in fibre, like oats, barley, rye, beans, fruit and vegetables, can also help.",
          "Foods with added plant stanols or sterols can help lower cholesterol and can be taken alongside medicines, but they are not a replacement for them. NICE says they need to be eaten consistently to work.",
        ],
      },
      {
        heading: "Moving more",
        paragraphs: [
          "Aim to do at least 150 minutes of moderate exercise or 75 minutes of vigorous activity a week. Good things to try when starting out include walking fast enough that your heart beats faster, swimming and cycling.",
          "Try a few different exercises to find something you like doing. You are more likely to keep doing it if you enjoy it.",
        ],
      },
      {
        heading: "Smoking and alcohol",
        paragraphs: [
          "Smoking can raise your cholesterol and make you more likely to have heart attacks and strokes. NICE says people with FH, especially children, should be strongly discouraged from starting, because their risk of heart disease is already greatly increased.",
          "Your GP and NHS stop smoking services can help you quit. For alcohol, try to avoid drinking more than 14 units a week on a regular basis, and have several drink-free days each week.",
        ],
      },
    ],
    helps: [
      "Cut down on saturated fat, such as red and processed meat, full-fat dairy, baked goods and fried foods.",
      "Keep cholesterol in food to no more than 300mg a day, which is about 3 or 4 eggs a week.",
      "Choose oily fish, nuts, seeds, vegetable oils, oats, beans, fruit and vegetables.",
      "Build up to at least 150 minutes of moderate exercise a week.",
      "If you smoke, get help to stop from your GP or NHS stop smoking services.",
      "Ask for advice on food from a professional with expertise in nutrition, such as a dietitian.",
    ],
    tryThisWeek: [
      "Swap one saturated-fat food.",
      "Move towards 150 minutes a week.",
      "Ask about seeing a dietitian.",
    ],
    ask: "Could I see a dietitian, and how much should I limit cholesterol in food?",
    interactive: {
      kind: "scenarios",
      title: "Everyday choices with FH",
      scenarios: [
        {
          id: "eggs",
          situation: "You like eggs for breakfast.",
          options: [{ text: "About 3 or 4 eggs a week", best: true }, { text: "Two eggs every day" }],
          why: "The BHF suggests no more than 300mg of cholesterol in food a day, which is about 3 or 4 eggs a week.",
        },
        {
          id: "liver",
          situation: "Liver and onions is on the menu.",
          options: [{ text: "Choose something else", best: true }, { text: "Have it: it is lean meat" }],
          why: "For people with FH, the BHF says liver and offal should be avoided.",
        },
        {
          id: "spread",
          situation: "You see a spread with added plant stanols.",
          options: [{ text: "Fine alongside medicines, not instead", best: true }, { text: "Use it and stop your statin" }],
          why: "Foods with plant stanols or sterols can be taken alongside medicines, but they are not a replacement for them.",
        },
        {
          id: "smoke",
          situation: "A teenager with FH is offered a cigarette.",
          options: [{ text: "Say no: FH already raises the risk", best: true }, { text: "One will not matter" }],
          why: "People with FH, especially children, should be strongly discouraged from starting, because their risk of heart disease is already greatly increased.",
        },
      ],
    },
    sources: [BHF_FH, NHS_HC_LOWER, NICE_FH, HUK_DIET_FH],
    quiz: {
      question: "Can FH be treated by diet alone?",
      options: [{ text: "No, but diet still plays an important part", right: true }, { text: "Yes, diet is enough" }, { text: "No, so diet does not matter" }],
      why: "FH cannot be treated through diet alone, but eating well and staying active still play an important part in your treatment.",
    },
  },
  {
    id: "fh-clinic",
    kicker: "Your care",
    question: "What happens at a lipid clinic?",
    hook: "Specialists in blood fats who confirm FH, arrange genetic tests, fine-tune treatment and help find relatives.",
    short: "Lipid clinics are specialist centres for people with raised or abnormal blood fats. You may be referred if your doctor thinks you have a blood fat condition that runs in families, you need a genetic test, or your medicines are not working well enough. NICE says all people with FH should be offered a referral to a specialist, and a review at least once a year.",
    sections: [
      {
        heading: "What a lipid clinic is",
        paragraphs: [
          "Lipid clinics are centres where you can get specialist help if you have raised or abnormal levels of blood fats, known as lipids. The team can do specialist tests to help diagnose your condition, and offer treatments and advice.",
          "NICE says all people with FH should be offered a referral to a specialist with expertise in FH, to confirm the diagnosis and start testing in the family.",
        ],
      },
      {
        heading: "Why you might be referred",
        paragraphs: [
          "You may be referred if your healthcare professional thinks you may have a blood fat condition that is passed down through families, or if you need a specialist test such as a genetic test.",
          "You may also be referred if your statins or other medicines are giving you side effects or are not bringing your blood fats down low enough, or if you need specialist treatment such as LDL apheresis.",
        ],
      },
      {
        heading: "Who you might see",
        paragraphs: [
          "You might see a lipidologist, a doctor who treats people with raised blood fats and can offer genetic testing to find relatives with the same condition. You may also meet a lipid nurse, a dietitian and a genetics counsellor.",
          "In the BHF-supported FH services, the GP refers someone with suspected FH to a lipid clinic, the Simon Broome criteria are used, and an FH specialist nurse arranges a genetic test.",
        ],
      },
      {
        heading: "Your yearly review",
        paragraphs: [
          "NICE says all people with FH should be offered a regular structured review at least once a year. It includes any symptoms of heart disease, a fasting cholesterol test, and a talk about your medicines and any side effects.",
          "The review also records which relatives have been tested, and updates your family tree with any changes in their heart health.",
        ],
      },
      {
        heading: "Finding a clinic",
        paragraphs: [
          "HEART UK publishes a map of lipid clinics across the UK. Your GP can refer you to a lipid clinic for genetic testing.",
          "The BHF's Genetic Information Service nurses can explain why you might need to be seen at a specialist clinic, and may be able to help arrange a referral by sending a letter to your GP.",
        ],
      },
    ],
    helps: [
      "Ask your GP whether you can be referred to a lipid clinic.",
      "Tell your team if your medicines cause side effects or are not lowering your blood fats enough.",
      "Go to your structured review at least once a year.",
      "Bring news of relatives who have been tested or had heart problems to your review.",
      "Call the BHF Genetic Information Service on 0808 802 1234 for help understanding a referral.",
    ],
    tryThisWeek: [
      "Ask about a lipid clinic referral.",
      "Check when your review is due.",
      "Bring family news to your review.",
    ],
    ask: "Can I be referred to a lipid clinic, and who will I see there?",
    interactive: {
      kind: "flip-cards",
      title: "Your lipid clinic team",
      intro: "Turn each card to see what each person in the team does.",
      cards: [
        { id: "lipidologist", front: "Lipidologist", when: "A doctor for blood fats", back: "Treats people with raised blood fats and can offer genetic testing to find relatives with the same condition." },
        { id: "nurse", front: "Lipid nurse", when: "A specialist nurse", back: "Supports you in understanding your condition and helps you manage it." },
        { id: "counsellor", front: "Genetics counsellor", when: "Around a genetic test", back: "Helps you understand what happens in a genetic test and what the results might mean for your family." },
        { id: "dietitian", front: "Dietitian", when: "An expert in food", back: "Helps you make changes to what you eat to manage your condition." },
        { id: "cardiologist", front: "Cardiologist", when: "A heart doctor", back: "Prevents and treats diseases of the heart and blood vessels." },
      ],
    },
    sources: [HUK_CLINIC, NICE_FH, BHF_CASCADE, BHF_GIS, HUK_PARENT],
    quiz: {
      question: "How often does NICE say people with FH should be offered a structured review?",
      options: [{ text: "At least once a year", right: true }, { text: "Only once, at diagnosis" }, { text: "Every ten years" }],
      why: "NICE says all people with FH should be offered a regular structured review at least once a year.",
    },
  },
  {
    id: "fh-relatives",
    kicker: "Family",
    question: "Why should my relatives be tested, and how do I tell them?",
    hook: "One diagnosis can protect a whole family. Once your gene change is found, testing relatives is simpler.",
    short: "If you have FH, your parents, brothers, sisters and children should be assessed as soon as possible, and each of your children has a 1 in 2 chance of having it. Once your gene change is known, relatives can be tested for the same change, which is called cascade testing. Your team may give you a letter to pass on and can help with difficult conversations.",
    sections: [
      {
        heading: "Who should be assessed",
        paragraphs: [
          "If you are diagnosed with FH, your parents, brothers, sisters and children, known as first-degree relatives, should also be assessed as soon as possible. If one of your first-degree relatives has FH, you should get assessed as well.",
          "NICE says testing should reach second-degree relatives too, such as grandparents, aunts and uncles, and third-degree relatives where possible. Most people with FH have two close relatives with FH.",
        ],
      },
      {
        heading: "What cascade testing is",
        paragraphs: [
          "Cascade testing is the process of rolling out genetic testing through a family. It is much easier to find a gene change in other family members once it has been found in one person, because geneticists already know what they are looking for.",
          "If a relative tests positive, their own immediate family are also invited for testing and treatment.",
        ],
      },
      {
        heading: "Why it matters even if they feel well",
        paragraphs: [
          "Sometimes people have FH and do not know it, because they do not have related health problems, perhaps because they have a very healthy lifestyle. They could still pass the gene on to their children.",
          "If a genetic test shows a relative does not have the same gene change, they will not develop the condition. They also cannot pass it on to their children.",
        ],
      },
      {
        heading: "Telling your family",
        paragraphs: [
          "Your doctor will probably want your help to contact your family, and may give you a letter to pass on. It explains the condition, the health problems it can cause and how the test works, and passing it on can help prevent heart disease and stroke in your family for generations to come.",
          "Some people find it hard to explain, or are not in touch or on good terms with some relatives. Specialist nurses or your genetics counsellor may be able to help you contact or talk to them.",
        ],
      },
      {
        heading: "Support",
        paragraphs: [
          "The BHF's Genetic Information Service has cardiac nurses who can help you understand why you, or a family member, might need genetic testing. They may be able to support a referral to a clinic too.",
        ],
      },
    ],
    helps: [
      "Tell your parents, brothers, sisters and children so they can be assessed as soon as possible.",
      "Pass on the letter your team gives you to explain FH to relatives.",
      "Ask your nurse or genetics counsellor for help if contacting or talking to family is difficult.",
      "Keep a note of which relatives have been tested, as this is checked at your yearly review.",
      "Suggest relatives with questions contact the BHF Genetic Information Service.",
    ],
    tryThisWeek: [
      "Tell your closest relatives.",
      "Pass on the letter from your team.",
      "Ask for help with hard conversations.",
    ],
    ask: "Who in my family should be tested, and will you help me contact them?",
    interactive: {
      kind: "scenarios",
      title: "Family conversations",
      scenarios: [
        {
          id: "sister",
          situation: "Your sister feels well and sees no need for a test.",
          options: [{ text: "Explain FH may cause no problems", best: true }, { text: "Agree she can skip it" }],
          why: "Sometimes people have FH and do not know it, because they do not have related health problems. They could still pass the gene on to their children.",
        },
        {
          id: "estranged",
          situation: "You are not in touch with your father.",
          options: [{ text: "Ask your nurse or counsellor to help", best: true }, { text: "Leave him out" }],
          why: "Specialist nurses or your genetics counsellor may be able to help you contact or talk to relatives.",
        },
        {
          id: "negative",
          situation: "Your brother's test shows no gene change.",
          options: [{ text: "He will not develop it or pass it on", best: true }, { text: "He still has FH" }],
          why: "If a genetic test shows a relative does not have the same gene change, they will not develop the condition, and cannot pass it on.",
        },
        {
          id: "letter",
          situation: "Your clinic gives you a letter for relatives.",
          options: [{ text: "Pass it on", best: true }, { text: "Keep it to yourself" }],
          why: "Passing it on can help prevent heart disease and stroke in your family for generations to come.",
        },
      ],
    },
    sources: [BHF_FH, HUK_GENETIC, BHF_GENETIC, NICE_FH, BHF_CASCADE],
    quiz: {
      question: "Why is testing relatives easier once your gene change is found?",
      options: [{ text: "Scientists already know what to look for", right: true }, { text: "Relatives do not need to give a sample" }, { text: "It is not any easier" }],
      why: "It is much easier to find a gene change in other family members once it has been found in one person, because geneticists already know what they are looking for.",
    },
  },
  {
    id: "fh-children",
    kicker: "Children",
    question: "When should children be tested, and do they need statins?",
    hook: "Found early, children with FH can start treatment and healthy habits before any problems develop.",
    short: "If a parent has FH, there is a one in two chance that each child has it too. National guidelines say children of a parent with confirmed FH should be tested at the earliest opportunity, ideally before age 10, with a genetic test for the same gene. NICE says statins should be offered to children with FH by the age of 10, and children diagnosed and treated early can live a normal, healthy life.",
    sections: [
      {
        heading: "When to test",
        paragraphs: [
          "If you have FH, there is a one in two chance that your children will have it too. You can discuss when to get your child tested with your lipid consultant, a specialist in blood fats.",
          "National guidelines recommend that children with a parent with confirmed FH are tested at the earliest opportunity, and if possible before they are 10 years old. This is a genetic test looking for the same FH gene that the parent has.",
        ],
      },
      {
        heading: "A screening pilot",
        paragraphs: [
          "A pilot programme, the Child-Parent Screening Service, invites children around the age of one to two to be screened at their routine immunisations, if their GP practice is a pilot site.",
          "The child has a heel prick test. If their cholesterol is raised, the sample has a genetic test, and if that is positive, the parents are offered a test too, because every child with FH has a parent with the gene.",
        ],
      },
      {
        heading: "Treatment for children",
        paragraphs: [
          "Children diagnosed with FH are looked after by a specialist in FH in children and young people, in a setting focused on young people. Statins are usually the first line of treatment.",
          "NICE says statins should be offered to children with FH by the age of 10, or at the earliest opportunity after that. Atorvastatin is sometimes prescribed for children aged 10 years or older.",
        ],
      },
      {
        heading: "Healthy living as a family",
        paragraphs: [
          "A healthy diet and exercise will help any treatments work better. It is good to make healthy changes together as a family, so children develop healthy habits and do not feel they are being treated differently.",
          "Children should be active for at least an hour a day, and children under five for three hours, spread throughout the day. Your lipid specialist will normally refer you to a dietitian.",
        ],
      },
      {
        heading: "No need for guilt",
        paragraphs: [
          "If your child has inherited FH, there is no need to feel guilty. You cannot change your DNA or the genes your child inherits.",
          "If your child is diagnosed and treated early, they can live a normal, healthy life. It is natural to feel worried, and talking to friends and family can help.",
        ],
      },
    ],
    helps: [
      "Ask your lipid consultant when to get your child tested, ideally before they are 10.",
      "Ask for a referral to a specialist in FH in children and young people.",
      "Make healthy changes together as a whole family.",
      "Help your child be active for at least an hour a day.",
      "Ask about a dietitian, as children have different dietary needs to adults.",
      "Email the HEART UK Cholesterol Helpline or speak to your own healthcare professional if you need more information.",
    ],
    tryThisWeek: [
      "Ask when to test your child.",
      "Plan an active hour together.",
      "Make one family food change.",
    ],
    ask: "When should my child be tested, and who will look after them if they have FH?",
    interactive: {
      kind: "timeline",
      title: "FH through childhood",
      steps: [
        { id: "screen", when: "Age 1 to 2", title: "A screening pilot", points: ["A heel prick test at routine immunisations.", "Only where the GP practice is a pilot site."] },
        { id: "test", when: "As early as possible", title: "The genetic test", points: ["Looks for the same gene the parent has.", "If possible, before age 10."] },
        { id: "specialist", when: "After diagnosis", title: "A children's specialist", points: ["Care in a setting focused on young people.", "A dietitian and an active family life."] },
        { id: "statin", when: "By age 10", title: "Statins offered", points: ["NICE says statins should be offered by age 10.", "Treatment is usually lifelong."] },
        { id: "growing", when: "Growing up", title: "Checks continue", points: ["Growth and development are checked.", "A normal, healthy life is possible."] },
      ],
    },
    sources: [HUK_PARENT, NICE_FH, HUK_CPSS, HUK_TEST, NHS_ATORVASTATIN],
    quiz: {
      question: "By what age does NICE say statins should be offered to children with FH?",
      options: [{ text: "By the age of 10", right: true }, { text: "By the age of 2" }, { text: "Not until 18" }],
      why: "NICE says statins should be offered to children with FH by the age of 10, or at the earliest opportunity after that.",
    },
  },
  {
    id: "fh-pregnancy",
    kicker: "Pregnancy",
    question: "Can I have a baby if I have FH?",
    hook: "FH should not affect your chances of getting pregnant. Planning ahead with your team is what matters.",
    short: "FH should not affect your chances of getting pregnant, and in general there is no reason to advise against pregnancy or breastfeeding. Cholesterol-lowering medicines such as statins and ezetimibe are usually stopped at least three months before trying to conceive, so speak to your doctor before you try. Your team will also talk about the chance of your child inheriting FH.",
    sections: [
      {
        heading: "Pregnancy is possible",
        paragraphs: [
          "FH should not affect your chances of getting pregnant. NICE says that, in general, there is no reason to advise against pregnancy or breastfeeding for women with FH.",
          "Speak to your doctor before you try to get pregnant. They can check any medicines you are taking, explain any risks and help give you the right care during pregnancy.",
        ],
      },
      {
        heading: "Medicines before and during pregnancy",
        paragraphs: [
          "Statins should not be taken if you are pregnant or trying to get pregnant, because they can affect how a baby develops. The advice is to stop cholesterol-lowering medicines three months before you start trying to conceive.",
          "HEART UK says these medicines are usually kept off throughout pregnancy and breastfeeding, and that for most women this is safe. The temporary rise in blood fats poses no risk to the baby.",
        ],
      },
      {
        heading: "If you are already pregnant",
        paragraphs: [
          "If you become pregnant while still taking these medicines, HEART UK strongly advises stopping them and contacting your GP, specialist or other healthcare professional straight away.",
          "Ezetimibe is not usually recommended in pregnancy, but specialists may prescribe it if cholesterol is very high. Bile acid sequestrants, also called resins, do not cross the placenta, so a specialist can prescribe them in pregnancy and breastfeeding.",
        ],
      },
      {
        heading: "Care during pregnancy",
        paragraphs: [
          "If you are pregnant or planning a pregnancy, you should be under the care of your lipid consultant, along with other professionals such as obstetricians and in some cases cardiologists.",
          "Cholesterol naturally rises in pregnancy, so it is not usually checked, as results do not reflect your usual levels. Specialists advise waiting at least two to three months after the birth, or until you stop breastfeeding, before a cholesterol test.",
        ],
      },
      {
        heading: "Your baby and FH",
        paragraphs: [
          "Your doctor will also want to discuss the chance of your child inheriting FH, and when they can test for it. Eating a healthy balanced diet and keeping active will help you stay as healthy as possible during pregnancy.",
          "NICE says women and girls with FH should be offered information on contraception and a choice of effective methods. The risks of medicines in a future pregnancy should be talked about at least once a year.",
        ],
      },
    ],
    helps: [
      "Speak to your doctor before you try to get pregnant.",
      "Plan with your doctor to stop statins and ezetimibe at least three months before trying to conceive.",
      "If you find you are pregnant while still taking them, stop and contact your GP or specialist straight away.",
      "Ask to be under the care of your lipid consultant while pregnant.",
      "Ask about the contraception that suits you while you take cholesterol-lowering medicines.",
      "Wait two to three months after the birth, or until breastfeeding stops, before a cholesterol test.",
    ],
    tryThisWeek: [
      "Talk to your doctor before trying.",
      "Ask about contraception options.",
      "Ask about your lipid consultant's care.",
    ],
    ask: "When should I stop my cholesterol medicine before trying for a baby, and when can I restart?",
    interactive: {
      kind: "timeline",
      title: "Planning a pregnancy with FH",
      steps: [
        { id: "plan", when: "Before trying", title: "Talk to your doctor", points: ["They check your medicines and explain any risks.", "The chance of your child inheriting FH."] },
        { id: "washout", when: "At least 3 months before", title: "Medicines stop", points: ["Statins and ezetimibe are usually stopped.", "This gives them time to leave your body."] },
        { id: "pregnant", when: "During pregnancy", title: "Shared care", points: ["Your lipid consultant works with obstetricians.", "Cholesterol is not usually tested."] },
        { id: "feeding", when: "Breastfeeding", title: "Still off most medicines", points: ["Resins can be prescribed by a specialist.", "Others restart once your baby is weaned."] },
        { id: "after", when: "2 to 3 months after", title: "A cholesterol test", points: ["Or once you stop breastfeeding.", "It gives a truer picture of your levels."] },
      ],
    },
    sources: [BHF_FH, HUK_PREGNANCY, NICE_FH, NHS_ATORVASTATIN, NHS_EZETIMIBE_PREGNANCY, NHS_STATINS],
    quiz: {
      question: "Does FH affect your chances of getting pregnant?",
      options: [{ text: "No, it should not", right: true }, { text: "Yes, it makes pregnancy unlikely" }, { text: "Only if you take statins" }],
      why: "FH should not affect your chances of getting pregnant.",
    },
  },
  {
    id: "fh-living",
    kicker: "Living with FH",
    question: "What helps me live well with FH day to day?",
    hook: "Once it is treated, FH is something you manage. Daily tablets, a yearly review and support when you need it.",
    short: "If FH is treated, you can expect to live a normal, healthy life. Living well means taking your medicine every day, going to your yearly review and keeping up healthy habits. Support is there from the BHF Heart Helpline, its Genetic Information Service and the HEART UK Cholesterol Helpline.",
    sections: [
      {
        heading: "A normal, healthy life",
        paragraphs: [
          "It is understandable to be concerned if you are diagnosed with FH, but if it is treated you can expect to live a normal, healthy life. There is no cure for FH, but it can be managed.",
          "It is natural to feel worried. Just talking to your friends and family can help you to feel more positive.",
        ],
      },
      {
        heading: "Day to day",
        paragraphs: [
          "Take your statins every day, at the same time, to keep your cholesterol levels down. If you are struggling with side effects, speak to your doctor rather than simply stopping, because your cholesterol will go back up.",
          "Statins work better if your lifestyle is healthy too. Keep eating healthily, being active, watching what you drink and not smoking.",
        ],
      },
      {
        heading: "Checks and reviews",
        paragraphs: [
          "NICE says all people with FH should be offered a regular structured review at least once a year. It looks at your cholesterol, your medicines and any side effects, and how testing in your family is going.",
          "If you have symptoms that could be heart disease but are not an emergency, NICE says you should be offered an urgent referral to a heart specialist.",
        ],
      },
      {
        heading: "Prescriptions and insurance",
        paragraphs: [
          "Once you are on a stable dose with well-controlled LDL cholesterol, HEART UK suggests asking your GP to prescribe three months of medicine on one prescription. There may also be prepayment options.",
          "HEART UK suggests telling insurers that you have FH. If you have no symptoms and normal cholesterol levels, it suggests challenging any company that raises your premium simply because of FH, and shopping around.",
        ],
      },
      {
        heading: "Where to get support",
        paragraphs: [
          "The BHF Heart Helpline lets you speak to a cardiac nurse by phone on 0808 802 1234, by email or by online chat. It is open on weekdays from 9am to 5pm.",
          "The BHF's Genetic Information Service can give information and support about FH over the phone or by email. HEART UK runs a Cholesterol Helpline you can email with questions.",
        ],
      },
    ],
    helps: [
      "Take your medicine every day, at the same time.",
      "Speak to your doctor about side effects instead of simply stopping.",
      "Go to your structured review at least once a year.",
      "Once your dose is stable, ask your GP about three months of medicine on one prescription, or a prepayment option.",
      "Call the BHF Heart Helpline on 0808 802 1234 to speak to a cardiac nurse.",
      "Join the BHF's online HealthUnlocked community to talk to people going through the same experience.",
    ],
    tryThisWeek: [
      "Set a daily time for your tablet.",
      "Ask about a three-month prescription.",
      "Save the Heart Helpline number.",
    ],
    ask: "Is my cholesterol at target on my treatment, and when is my next review?",
    interactive: {
      kind: "scenarios",
      title: "Everyday FH moments",
      scenarios: [
        {
          id: "aches",
          situation: "Your statin seems to be giving you aches.",
          options: [{ text: "Speak to your doctor, do not just stop", best: true }, { text: "Stop it and say nothing" }],
          why: "If you are struggling with side effects, speak to your doctor rather than simply stopping, because your cholesterol will go back up.",
        },
        {
          id: "prescription",
          situation: "Your dose is stable and you pay for a prescription every month.",
          options: [{ text: "Ask for 3 months per prescription", best: true }, { text: "Skip doses to make it last" }],
          why: "Once you are on a stable dose with well-controlled LDL cholesterol, HEART UK suggests asking your GP to prescribe three months of medicine on one prescription.",
        },
        {
          id: "insurance",
          situation: "An insurer raises your premium only because you have FH.",
          options: [{ text: "Challenge it and shop around", best: true }, { text: "Hide your FH next time" }],
          why: "HEART UK suggests telling insurers you have FH, and challenging any company that raises your premium simply because of FH.",
        },
        {
          id: "worry",
          situation: "You feel low about having FH.",
          options: [{ text: "Talk to friends, family or a helpline", best: true }, { text: "Keep it to yourself" }],
          why: "It is natural to feel worried. Just talking to your friends and family can help you to feel more positive.",
        },
      ],
    },
    sources: [BHF_FH, NICE_FH, HUK_WHAT, HUK_GENETIC, BHF_HELPLINE, HUK_STATINS, HUK_PARENT],
    quiz: {
      question: "What does HEART UK suggest if a statin gives you side effects?",
      options: [{ text: "Speak to your doctor rather than simply stopping", right: true }, { text: "Stop it without telling anyone" }, { text: "Take a double dose" }],
      why: "If you are struggling with side effects, speak to your doctor rather than simply stopping, because your cholesterol will go back up.",
    },
  },
];
