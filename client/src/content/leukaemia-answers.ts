import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Leukaemia page's pieces (content/library-conditions/cancer-more.ts,
// `leukaemia`). Every sentence was written from wording checked on 22 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. Most of it comes from Blood Cancer UK,
// the NHS, Macmillan Cancer Support and Cancer Research UK, with the government's pages on disability and Access
// to Work, and Samaritans. The NHS website has no single leukaemia page, so its pages on each main type (AML,
// ALL, CLL and CML), stem cell transplants, chemotherapy and sepsis are used. No survival or life-expectancy
// figures are given anywhere. Infection and sepsis guidance gives the routes exactly as Blood Cancer UK, Macmillan
// and the NHS state them (the 24-hour emergency number, 999, A&E, NHS 111). The mood answer follows
// safe-messaging guidance and gives the crisis routes as the NHS and Samaritans state them. General information
// only; it never replaces what a person's own haematology team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const bcuk = (label: string, path: string): LearnSource => ({ label: `Blood Cancer UK: ${label}`, url: `https://bloodcancer.org.uk/understanding-blood-cancer/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_AML_WHAT = nhs("What is acute myeloid leukaemia?", "conditions/acute-myeloid-leukaemia/what-is-acute-myeloid-leukaemia/");
const NHS_AML_TESTS = nhs("Tests and next steps for acute myeloid leukaemia", "conditions/acute-myeloid-leukaemia/tests-and-next-steps/");
const NHS_AML_TREAT = nhs("Treatment for acute myeloid leukaemia", "conditions/acute-myeloid-leukaemia/treatment/");
const NHS_ALL_WHAT = nhs("What is acute lymphoblastic leukaemia?", "conditions/acute-lymphoblastic-leukaemia/what-is-acute-lymphoblastic-leukaemia/");
const NHS_ALL_TESTS = nhs("Tests and next steps for acute lymphoblastic leukaemia", "conditions/acute-lymphoblastic-leukaemia/tests-and-next-steps/");
const NHS_ALL_TREAT = nhs("Treatment for acute lymphoblastic leukaemia", "conditions/acute-lymphoblastic-leukaemia/treatment/");
const NHS_ALL_HELP = nhs("Help and support for acute lymphoblastic leukaemia", "conditions/acute-lymphoblastic-leukaemia/help-and-support/");
const NHS_CLL_WHAT = nhs("What is chronic lymphocytic leukaemia?", "conditions/chronic-lymphocytic-leukaemia/what-is-chronic-lymphocytic-leukaemia/");
const NHS_CLL_TREAT = nhs("Treatment for chronic lymphocytic leukaemia", "conditions/chronic-lymphocytic-leukaemia/treatment/");
const NHS_CML_WHAT = nhs("What is chronic myeloid leukaemia?", "conditions/chronic-myeloid-leukaemia/what-is-cml/");
const NHS_CML_TREAT = nhs("Treatment for chronic myeloid leukaemia", "conditions/chronic-myeloid-leukaemia/treatment/");
const NHS_SCT_WHAT = nhs("What is a stem cell or bone marrow transplant?", "tests-and-treatments/stem-cell-or-bone-marrow-transplants/what-it-is/");
const NHS_SCT_WHY = nhs("Why a stem cell or bone marrow transplant is done", "tests-and-treatments/stem-cell-or-bone-marrow-transplants/why-its-done/");
const NHS_SCT_PREP = nhs("Preparing for a stem cell or bone marrow transplant", "tests-and-treatments/stem-cell-or-bone-marrow-transplants/preparation/");
const NHS_SCT_HOW = nhs("How a stem cell or bone marrow transplant is done", "tests-and-treatments/stem-cell-or-bone-marrow-transplants/how-its-done/");
const NHS_SCT_RECOVERY = nhs("Recovering from a stem cell or bone marrow transplant", "tests-and-treatments/stem-cell-or-bone-marrow-transplants/recovery/");
const NHS_SCT_COMPLICATIONS = nhs("Complications of a stem cell or bone marrow transplant", "tests-and-treatments/stem-cell-or-bone-marrow-transplants/complications/");
const NHS_CHEMO = nhs("Chemotherapy", "tests-and-treatments/chemotherapy/");
const NHS_SEPSIS = nhs("Sepsis", "conditions/sepsis/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const BCUK_LEUK = bcuk("Leukaemia", "leukaemia/");
const BCUK_CELLS = bcuk("Blood cells", "about-blood-cancer/blood-cells/");
const BCUK_SYMPTOMS = bcuk("Leukaemia symptoms and signs", "leukaemia/leukaemia-symptoms-signs/");
const BCUK_LEUK_TESTS = bcuk("Leukaemia tests for diagnosis", "leukaemia/tests-diagnose-leukaemia/");
const BCUK_TESTS = bcuk("Blood cancer tests", "about-blood-cancer/blood-cancer-tests-diagnosis/");
const BCUK_SIDE = bcuk("Leukaemia treatment and side effects", "leukaemia/side-effects-leukaemia-treatment/");
const BCUK_CML = bcuk("Chronic myeloid leukaemia (CML)", "leukaemia/chronic-myeloid-leukaemia-cml/");
const BCUK_AIMS = bcuk("Blood cancer treatment aims", "treatment/treatment-planning-types/treatment-aims/");
const BCUK_SUPPORTIVE = bcuk("Supportive care for blood cancer", "treatment/treatment-planning-types/supportive-care/");
const BCUK_TRANSFUSION = bcuk("Blood cancer and blood transfusions", "treatment/treatment-planning-types/blood-transfusions/");
const BCUK_INFECTION = bcuk("Blood cancer and infection", "treatment/infection-neutropenia-sepsis/blood-cancer-and-infection/");
const BCUK_INF_SYMPTOMS = bcuk("Infection symptoms and what to do", "treatment/infection-neutropenia-sepsis/infection-symptoms-what-do/");
const BCUK_AE = bcuk("What to say in A&E", "treatment/infection-neutropenia-sepsis/what-to-say-accident-emergency/");
const BCUK_EAT_SAFE = bcuk("Eating safely with neutropenia", "treatment/infection-neutropenia-sepsis/neutropenia/eating-safely-neutropenia/");
const BCUK_FATIGUE = bcuk("Fatigue", "treatment/side-effects/fatigue/");
const BCUK_LATE_FOLLOW = bcuk("Late effects: monitoring and follow-up after treatment ends", "treatment/side-effects/late-effects-monitoring-and-follow-up-after-treatment-ends/");
const BCUK_WORK = bcuk("Working with blood cancer", "life-with-blood-cancer/living-well/money-work/working-blood-cancer/");
const BCUK_COSTS = bcuk("Help with costs", "life-with-blood-cancer/living-well/money-work/help-costs/");
const BCUK_MIND = bcuk("Blood cancer: mind and emotions", "life-with-blood-cancer/living-well/mind-emotions/");

const MAC_LEUK = mac("Leukaemia", "leukaemia");
const MAC_BLOOD = mac("Blood and bone marrow", "blood-cancer/blood-and-bone-marrow");
const MAC_AML_TREAT = mac("Treatment for acute myeloid leukaemia (AML)", "leukaemia/acute-myeloid-leukaemia-aml-treatment");
const MAC_CML = mac("Chronic myeloid leukaemia (CML)", "leukaemia/chronic-myeloid-leukaemia-cml");
const MAC_CML_TREAT = mac("Treatment for chronic myeloid leukaemia (CML)", "leukaemia/chronic-myeloid-leukaemia-cml-treatment");
const MAC_CLL_TREAT = mac("Treatment for chronic lymphocytic leukaemia (CLL)", "leukaemia/chronic-lymphocytic-leukaemia-cll-treatment");
const MAC_COPING_ACUTE = mac("Coping with treatment for acute leukaemia", "leukaemia/coping-with-treatment-for-acute-leukaemia");
const MAC_SCT = mac("Stem cell and bone marrow transplants", "treatments-and-drugs/stem-cell-and-bone-marrow-transplants");
const MAC_INFECTION = mac("Infection", "impacts-of-cancer/infection");
const MAC_FOOD_SAFETY = mac("Food safety when your immunity is low", "impacts-of-cancer/healthy-eating-and-cancer/food-safety-when-your-immunity-is-low");
const MAC_FATIGUE = mac("Tiredness (fatigue)", "impacts-of-cancer/tiredness");
const MAC_FOLLOW = mac("Follow-up care after cancer treatment", "after-treatment/follow-up-care-after-treatment");
const MAC_WORRY = mac("Coping with worries about cancer coming back", "after-treatment/coping-with-worries-about-cancer-coming-back");
const MAC_DEPRESSION = mac("Depression and cancer", "impacts-of-cancer/depression");
const MAC_RETURNING = mac("Returning to work", "impacts-of-cancer/work-and-cancer/returning-to-work");
const MAC_ADJUSTMENTS = mac("Reasonable adjustments", "impacts-of-cancer/work-and-cancer/reasonable-adjustments");

const CRUK_LEUK = cruk("Leukaemia", "leukaemia");
const CRUK_AML_ABOUT = cruk("What is acute myeloid leukaemia (AML)?", "acute-myeloid-leukaemia-aml/about-acute-myeloid-leukaemia");
const CRUK_AML_SCT = cruk("Stem cell or bone marrow transplants for AML", "acute-myeloid-leukaemia-aml/treating-aml/stem-cell-bone-marrow-transplant");
const CRUK_AML_FOLLOW = cruk("Follow up after treatment for AML", "acute-myeloid-leukaemia-aml/treating-aml/follow-up");

const GOV_DISABILITY = gov("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");
const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");

const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const leukaemiaAnswers: LearnArticle[] = [
  {
    id: "leuk-what-it-is",
    kicker: "Understanding",
    question: "What is leukaemia, and what goes wrong in the bone marrow?",
    hook: "Your bone marrow makes blood cells all the time. In leukaemia, it makes cells that do not develop or work the way they should.",
    short: "Leukaemia is a type of blood cancer that affects blood cells in your bone marrow, usually white blood cells. You may have too many, too few, or blood cells that don't work properly. Some types are slow-growing (chronic) and some are fast-growing (acute).",
    sections: [
      {
        heading: "Where blood is made",
        paragraphs: [
          "Your bone marrow is a spongy tissue found inside some of your bones, and it is where the body makes blood cells. Most blood cells are made in the back of the hips, the backbone and the breastbone.",
          "All your blood cells start off as stem cells. They develop into immature cells called blast cells, and then into mature red blood cells, white blood cells or platelets, before they leave the bone marrow.",
        ],
      },
      {
        heading: "Three kinds of blood cell",
        paragraphs: [
          "Red blood cells carry oxygen from your lungs to all the cells in your body, using a protein called haemoglobin. White blood cells help your body fight infection, and platelets help your blood to clot.",
          "There are two types of blood stem cell. Lymphoid stem cells make white blood cells called lymphocytes, and myeloid stem cells make the other white blood cells, such as neutrophils, as well as red blood cells and platelets.",
        ],
      },
      {
        heading: "What goes wrong",
        paragraphs: [
          "In leukaemia, blood cells are not produced the way they should be. You may have too many, too few, or blood cells that don't work properly.",
          "If something goes wrong as blood cells develop, they may not develop properly or may multiply too quickly. These abnormal cells are not detected by the body's natural defence system, so they continue to multiply.",
          "In acute myeloid leukaemia, for example, too many abnormal white cells can overcrowd the bone marrow, leaving less space for healthy blood cells. This is why people can get infections, feel tired and breathless, or bruise and bleed more easily.",
        ],
      },
      {
        heading: "Fast or slow",
        paragraphs: [
          "There are different types of leukaemia, depending on the type of blood cell affected and how it develops. Some types are slow-growing (chronic) and some are fast-growing (acute).",
          "Chronic leukaemias develop slowly, and many people have no symptoms in the early stages; it may be found by chance after a routine blood test. Acute leukaemias are more likely to cause symptoms over a few weeks, and people often feel ill quite quickly.",
        ],
      },
      {
        heading: "What causes it",
        paragraphs: [
          "Doctors do not know the exact causes of leukaemia, but some risk factors may increase the chance of developing it. Having one or more risk factors does not mean you will get leukaemia.",
          "The gene changes that cause blood cancer happen during a person's lifetime. They are not faulty genes that you can pass down to children.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or specialist nurse which type of leukaemia you have, if you aren't sure.",
      "Ask your hospital team to explain your blood cells and results in a simple way.",
      "Contact your GP about any symptom that you cannot explain, goes on for a long time or is unusual for you.",
      "Call a Blood Cancer UK nurse on 0808 2080 888 if you have questions or worries.",
      "If you suddenly feel very unwell, get medical help straight away by calling 999 or going to A&E.",
    ],
    tryThisWeek: [
      "Ask which type you have.",
      "Ask to have your results explained.",
      "Save the blood cancer nurse number.",
    ],
    ask: "Which type of leukaemia do I have, and which blood cells does it affect?",
    interactive: {
      kind: "flip-cards",
      title: "The cells in your blood",
      intro: "Turn a card to see what each kind of cell does, and what happens when leukaemia affects it.",
      cards: [
        { id: "stem", front: "Stem cells", when: "Where every blood cell starts", back: "Blood cells at their earliest stage. They develop in the bone marrow into all the other blood cells." },
        { id: "red", front: "Red blood cells", when: "Carry oxygen", back: "Carry oxygen from your lungs to your body. Too few can make you tired and breathless." },
        { id: "white", front: "White blood cells", when: "Fight infection", back: "Part of your immune system. In leukaemia they are usually the cells affected." },
        { id: "platelets", front: "Platelets", when: "Help blood clot", back: "Stick together to stop bleeding. Too few can mean bruising or nosebleeds." },
        { id: "blast", front: "Blast cells", when: "Immature cells", back: "The stage between a stem cell and a mature blood cell, before cells leave the bone marrow." },
      ],
    },
    sources: [BCUK_LEUK, BCUK_CELLS, MAC_BLOOD, MAC_LEUK, CRUK_AML_ABOUT, BCUK_SYMPTOMS, BCUK_TESTS, CRUK_LEUK],
    quiz: {
      question: "Where does the body make blood cells?",
      options: [{ text: "In the bone marrow", right: true }, { text: "In the liver" }, { text: "In the lymph nodes" }],
      why: "Your bone marrow is a spongy tissue found inside some of your bones, and it is where the body makes blood cells.",
    },
  },
  {
    id: "leuk-types",
    kicker: "Understanding",
    question: "What's the difference between acute and chronic leukaemia?",
    hook: "Acute types usually develop quickly and need treatment straight away. Chronic types grow slowly, and some people don't need treatment at first.",
    short: "Leukaemia types are named by the blood cell affected and by how fast they grow. The four main types are acute myeloid (AML), acute lymphoblastic (ALL), chronic lymphocytic (CLL) and chronic myeloid (CML). Acute types usually need treatment straight away; chronic types develop slowly and may not need it at first.",
    sections: [
      {
        heading: "Two parts to every name",
        paragraphs: [
          "Different types of leukaemia are named by the type of blood cell affected, and by whether the leukaemia is acute, which means faster growing, or chronic, which means slower growing.",
          "Myeloid types affect cells called myeloid stem cells. Lymphocytic and lymphoblastic types affect lymphoid stem cells, which make the white blood cells called lymphocytes.",
          "There are other, rarer types too, such as acute promyelocytic leukaemia and hairy cell leukaemia.",
        ],
      },
      {
        heading: "Acute myeloid leukaemia (AML)",
        paragraphs: [
          "AML is a rare type of cancer that affects the blood and bone marrow. It usually develops quickly and needs to be treated straight away.",
          "It can be diagnosed at any age, but the risk of getting it increases with age. How serious it is depends on the type of AML you have, your age and your general health.",
        ],
      },
      {
        heading: "Acute lymphoblastic leukaemia (ALL)",
        paragraphs: [
          "ALL is a rare type of cancer that also usually develops quickly and needs to be treated straight away. It is most common in children and young people, especially children aged 4 and under.",
        ],
      },
      {
        heading: "Chronic lymphocytic leukaemia (CLL)",
        paragraphs: [
          "CLL is the most common type of leukaemia. It usually develops very slowly and does not always need to be treated straight away.",
          "It cannot usually be cured, but it can be managed with treatment. It is more common as you get older, and very rare in people under 40.",
        ],
      },
      {
        heading: "Chronic myeloid leukaemia (CML)",
        paragraphs: [
          "CML is a rare type of cancer that affects the bone marrow and white blood cells. It develops slowly, over several years, and is usually treatable.",
          "It can be diagnosed at any age but is more common in people aged 65 or over. Most people with CML take a daily tablet called a tyrosine kinase inhibitor, or TKI.",
        ],
      },
    ],
    helps: [
      "Make sure you know which type you have; ask your doctor or specialist nurse if you aren't sure.",
      "Read information about your own type, as treatment varies for each.",
      "Ask your clinical nurse specialist any questions; they are your main point of contact.",
      "Ask your healthcare team about your prognosis if you want to know, because everyone is different.",
      "If thinking about what your diagnosis means is hard, a blood cancer nurse can talk you through it or simply listen.",
    ],
    tryThisWeek: [
      "Write down your exact type.",
      "Note questions for your nurse.",
      "Ask about your outlook, if you want to.",
    ],
    ask: "Which type of leukaemia do I have, and is it acute or chronic?",
    interactive: {
      kind: "flip-cards",
      title: "The four main types",
      intro: "Turn a card to see how each main type behaves.",
      cards: [
        { id: "aml", front: "AML", when: "Usually treated straight away", back: "Acute myeloid leukaemia affects myeloid stem cells. It usually develops quickly, and the risk increases with age." },
        { id: "all", front: "ALL", when: "Usually treated straight away", back: "Acute lymphoblastic leukaemia affects lymphoid stem cells. It is most common in children aged 4 and under." },
        { id: "cll", front: "CLL", when: "May not need treatment at first", back: "The most common type. It usually develops very slowly, and can be managed with treatment." },
        { id: "cml", front: "CML", when: "Usually a daily tablet", back: "Develops slowly over several years and is usually treatable, mostly with TKI tablets." },
      ],
    },
    sources: [MAC_LEUK, MAC_BLOOD, BCUK_LEUK, NHS_AML_WHAT, NHS_ALL_WHAT, NHS_CLL_WHAT, NHS_CML_WHAT, BCUK_CML, CRUK_LEUK, CRUK_AML_ABOUT, NHS_AML_TESTS],
    quiz: {
      question: "What does 'chronic' mean in the name of a leukaemia?",
      options: [{ text: "It grows more slowly", right: true }, { text: "It is always more serious" }, { text: "It has spread" }],
      why: "Different types of leukaemia are named by the type of blood cell affected, and by whether the leukaemia is acute, which means faster growing, or chronic, which means slower growing.",
    },
  },
  {
    id: "leuk-tests",
    kicker: "Tests",
    question: "What happens in blood tests and a bone marrow test?",
    hook: "A blood test is usually the first step. A bone marrow biopsy takes a small sample from your hip, with an injection to numb the area.",
    short: "Blood tests count each type of blood cell, and other tests look closely at the cells themselves. A bone marrow biopsy, usually from the hip, shows whether your body is making normal, healthy blood cells. Results can take one or two weeks, and a specialist will explain what they mean.",
    sections: [
      {
        heading: "Blood tests first",
        paragraphs: [
          "Your doctor will take samples of your blood to check your full blood count. This measures the number of each type of cell in your blood: red blood cells, white blood cells and platelets.",
          "Other blood tests check how well your liver and kidneys are working. A blood film looks at your cells to see whether they are the right size and shape, and whether they look healthy.",
          "If you are starting treatment, you may also have tests to check for conditions such as HIV and hepatitis B and C.",
        ],
      },
      {
        heading: "A bone marrow biopsy",
        paragraphs: [
          "A bone marrow biopsy removes a sample of bone marrow, usually from your hip bone, to look at under a microscope. It can show whether your body is making normal, healthy blood cells or not.",
          "You lie on your side with your knees tucked up to your chest, and you have an injection to numb the area. You may also be offered medicine to help you relax, or gas and air.",
          "It takes about 20 to 30 minutes, but removing the sample only takes a few minutes. You can usually go home the same day if you're feeling well enough.",
        ],
      },
      {
        heading: "Does it hurt?",
        paragraphs: [
          "It seems to vary. Some people say they don't feel much, some feel a pulling sensation, and others find it painful.",
          "Your hip might hurt for a few days afterwards, and you may need some painkillers at home. If you are nervous, speak to your healthcare team in advance, and you may want someone to come with you.",
          "If you have sedation, you'll need someone to take you home and stay with you overnight.",
        ],
      },
      {
        heading: "Tests on the cells",
        paragraphs: [
          "Immunophenotyping, also called flow cytometry, looks at the proteins on the surface of your cells to help spot abnormal ones. Genetic tests look for changes to the genes in your cells.",
          "Knowing about particular gene changes helps doctors identify the exact type of blood cancer, and can help predict which treatments might work best for you.",
          "You may also have scans, such as a CT scan, an ultrasound scan or an X-ray. Some people have a lumbar puncture, which takes a sample of fluid from the lower spine.",
        ],
      },
      {
        heading: "Waiting for results",
        paragraphs: [
          "You won't get bone marrow results straight away. It can take one or two weeks, and you'll usually have a follow-up appointment.",
          "Try not to worry if your results take a long time; it does not definitely mean anything is wrong. You can call the hospital or GP if you are worried, and a specialist will explain what the results mean and what happens next.",
        ],
      },
    ],
    helps: [
      "Speak to your healthcare team in advance if you are nervous about a bone marrow biopsy.",
      "Take someone with you, and arrange for them to stay overnight if you have sedation.",
      "Keep the bandage on for 24 hours after a bone marrow biopsy.",
      "Call the hospital or GP if you are worried while you wait for results.",
      "Ask a blood cancer nurse if you have questions or just need someone to talk to.",
    ],
    tryThisWeek: [
      "Tell the team if you're nervous.",
      "Arrange someone to come with you.",
      "Call if waiting worries you.",
    ],
    ask: "Which tests will I have, and when and how will I get the results?",
    interactive: {
      kind: "timeline",
      title: "A bone marrow biopsy, step by step",
      steps: [
        { id: "before", when: "Before", title: "Speak up", points: ["Tell your healthcare team in advance if you are nervous.", "You may want someone to come with you."] },
        { id: "during", when: "About 20 to 30 minutes", title: "The test", points: ["You lie on your side with your knees tucked up.", "An injection numbs the area; taking the sample takes a few minutes."] },
        { id: "after", when: "The same day", title: "Home again", points: ["Keep the bandage on for 24 hours.", "Your hip might hurt for a few days."] },
        { id: "results", when: "One or two weeks", title: "Results", points: ["You'll usually have a follow-up appointment.", "A specialist will explain what the results mean."] },
      ],
    },
    sources: [BCUK_LEUK_TESTS, BCUK_TESTS, NHS_AML_TESTS, NHS_ALL_TESTS],
    quiz: {
      question: "How long can bone marrow biopsy results take?",
      options: [{ text: "One or two weeks", right: true }, { text: "A few minutes" }, { text: "Six months" }],
      why: "You won't get bone marrow results straight away. It can take one or two weeks, and you'll usually have a follow-up appointment.",
    },
  },
  {
    id: "leuk-counts",
    kicker: "Blood counts",
    question: "What do my blood count numbers mean?",
    hook: "Haemoglobin, white cells, neutrophils and platelets: a few numbers that explain how you feel, and what is safe for you right now.",
    short: "A full blood count checks the numbers of red blood cells, white blood cells and platelets in your blood. Low counts can explain tiredness, infections or bruising, and they change during treatment. Your own normal range may differ from the usual ones, so ask your hospital team what yours are.",
    sections: [
      {
        heading: "The full blood count",
        paragraphs: [
          "A full blood count is a blood test that checks the number of red blood cells, white blood cells and platelets in your blood.",
          "Everyone has slightly different numbers of each type of blood cell. If you have blood cancer, or have had it in the past, your own blood counts are likely to be different from the usual ranges.",
        ],
      },
      {
        heading: "What each number tells you",
        paragraphs: [
          "Haemoglobin is the protein in red blood cells that carries oxygen. A low level of red blood cells is called anaemia, and it can make you feel very tired, breathless and dizzy.",
          "Neutrophils are a type of white blood cell that helps the body fight infection. A low level is called neutropenia, and it puts you at particularly high risk of infection and sepsis.",
          "Platelets help your blood to clot. If they drop, you may bruise more easily, or have nosebleeds or bleeding gums.",
        ],
      },
      {
        heading: "Words you may hear",
        paragraphs: [
          "A word ending in '-penia' or '-penic' means low. So neutropenic means a low count of neutrophils, and pancytopenia means your red cells, white cells and platelets are all low.",
          "A word ending in '-sis' means too many. Leukocytosis means too many white blood cells, and thrombocytosis means too many platelets.",
        ],
      },
      {
        heading: "Why counts go up and down",
        paragraphs: [
          "Chemotherapy reduces the number of white blood cells made by the bone marrow. You are particularly at risk of infection 7 to 14 days after chemotherapy, when white cells are at their lowest; this is called the nadir.",
          "After the nadir, the number of white blood cells increases steadily. Your blood is checked before you have more chemotherapy, to make sure the white cells are at a normal level.",
          "If your counts are low, you may be offered a blood or platelet transfusion, or growth factors, which are drugs that encourage your body to make more blood cells.",
        ],
      },
      {
        heading: "Making sense of your results",
        paragraphs: [
          "Results can differ slightly between hospitals because of the machines involved, so don't be alarmed if they change when you have a test somewhere else. Always check with your main hospital if you have concerns.",
          "Your hospital team should be able to explain what each number means in a simple way, and tell you the expected ranges for you personally. Blood Cancer UK has a chart you can print to track your own results.",
        ],
      },
    ],
    helps: [
      "Ask your hospital team what the expected ranges are for you personally.",
      "Ask your team whether you are neutropenic, and what to do if you think you have an infection.",
      "Keep a record of your results, such as Blood Cancer UK's printable blood count chart.",
      "Write down any questions about your results for your hospital team.",
      "Check with your main hospital if a result from another location worries you.",
    ],
    tryThisWeek: [
      "Ask for your own ranges.",
      "Ask if you are neutropenic.",
      "Start a blood count record.",
    ],
    ask: "What do my latest blood counts mean, and what are the expected ranges for me?",
    interactive: {
      kind: "flip-cards",
      title: "Your key numbers",
      intro: "Turn a card to see what each number measures, and what a low level can mean.",
      cards: [
        { id: "hb", front: "Haemoglobin (Hb)", when: "Red blood cells", back: "The protein that carries oxygen. Low red cells (anaemia) can make you very tired, breathless and dizzy." },
        { id: "wbc", front: "White blood cells (WBC)", when: "Your immune system", back: "Help your body fight infection. Chemotherapy lowers them for a time." },
        { id: "neut", front: "Neutrophils", when: "The main infection fighters", back: "A low level is called neutropenia, a particularly high risk of infection and sepsis." },
        { id: "plt", front: "Platelets", when: "Clotting", back: "Help your blood to clot. A drop can mean bruising, nosebleeds or bleeding gums." },
      ],
    },
    sources: [BCUK_CELLS, BCUK_TRANSFUSION, MAC_BLOOD, BCUK_INFECTION, CRUK_AML_SCT, MAC_INFECTION, BCUK_SUPPORTIVE],
    quiz: {
      question: "What does 'neutropenic' mean?",
      options: [{ text: "A low count of neutrophils", right: true }, { text: "Too many platelets" }, { text: "A high temperature" }],
      why: "So neutropenic means a low count of neutrophils, and pancytopenia means your red cells, white cells and platelets are all low.",
    },
  },
  {
    id: "leuk-treatments",
    kicker: "Treatment",
    question: "What treatments are used, from tablets to chemotherapy?",
    hook: "Some people take one tablet a day for years. Others spend weeks in hospital for intensive chemotherapy. It depends on the type.",
    short: "Treatment depends on the type of leukaemia, your age and your general health. Acute leukaemia usually needs treatment straight away, mainly with chemotherapy. Chronic leukaemia may be watched at first, and is often treated with targeted medicines, such as daily TKI tablets for CML.",
    sections: [
      {
        heading: "Planned around you",
        paragraphs: [
          "A team of specialists, called a multidisciplinary team, meets to discuss the best treatment for you. It depends on things such as the type of leukaemia you have and your general health, and you may have a combination of treatments.",
          "For some people, the aim is to get rid of the cancer. For others, treatment aims to keep it under control, so you can live with it and lead a good quality of life. Your doctor will let you know the aim of any treatment they recommend.",
        ],
      },
      {
        heading: "Acute leukaemia",
        paragraphs: [
          "Chemotherapy is the main treatment for acute myeloid and acute lymphoblastic leukaemia, and you usually have a combination of medicines. Treatment for ALL usually includes steroids too.",
          "Intensive treatment for AML aims to cure it and is usually done in hospital, sometimes for a few weeks at a time. Non-intensive treatment aims to control it for as long as possible, is usually done at home and has fewer side effects.",
          "Targeted medicines, immunotherapy or a stem cell transplant may also be part of treatment, depending on the type.",
        ],
      },
      {
        heading: "Chronic leukaemia",
        paragraphs: [
          "You may not need treatment straight away for CLL. You'll be seen regularly, and when you start treatment depends on your symptoms, the stage of the cancer and your general health. The main treatments are targeted medicines, sometimes with chemotherapy.",
          "The main treatment for CML is targeted medicines called tyrosine kinase inhibitors, or TKIs, taken as tablets or capsules every day. If one causes side effects or is not working, your specialist may try you on a different one.",
        ],
      },
      {
        heading: "Supportive treatments",
        paragraphs: [
          "Alongside treatment, you'll be offered supportive treatments to prevent and manage symptoms. These may include antibiotics to prevent or treat infections, blood transfusions, growth factors to help the bone marrow make blood cells, and vaccines.",
          "Your specialist team will explain the treatments, their benefits and side effects, and work with you to create a treatment plan.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "You'll have regular check-ups during and after treatment. If you have any symptoms or side effects you're worried about, talk to your specialists; you do not need to wait for your next check-up.",
          "Sometimes leukaemia is very hard to treat, and it may not be possible to cure it. Then the aim of treatment is to limit the cancer and its symptoms, and a palliative care team works with you to manage symptoms and help you feel more comfortable.",
        ],
      },
    ],
    helps: [
      "Ask your doctor the aim of any treatment they recommend.",
      "If you don't feel ready to decide, ask your doctor how long you can have to think about it.",
      "Talk to your family or friends, then decide together with your doctor.",
      "Tell your specialists about side effects that worry you; you do not need to wait for your next check-up.",
      "Ask your doctor about any clinical trials you could join.",
    ],
    tryThisWeek: [
      "Ask the aim of your treatment.",
      "Talk your options over at home.",
      "Report side effects that worry you.",
    ],
    ask: "What is the aim of my treatment, and what side effects should I tell you about?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments for leukaemia",
      intro: "Turn a card to see what each treatment does and when it is used.",
      cards: [
        { id: "chemo", front: "Chemotherapy", when: "Main treatment for acute types", back: "Uses medicines to kill cancer cells. You usually have a combination of medicines." },
        { id: "targeted", front: "Targeted medicines", when: "Main treatment for CLL and CML", back: "Aim to stop the cancer growing. For CML, TKIs are tablets or capsules taken every day." },
        { id: "steroids", front: "Steroids", when: "Part of treatment for ALL", back: "Aim to get rid of leukaemia cells. Usually taken for up to a week before chemotherapy." },
        { id: "transplant", front: "Stem cell transplant", when: "If it has come back, or is likely to", back: "Replaces damaged blood cells with healthy ones." },
        { id: "monitoring", front: "Active monitoring", when: "Some slow-growing types", back: "Careful monitoring, with treatment only if and when it is needed." },
        { id: "supportive", front: "Supportive treatments", when: "Alongside treatment", back: "Antibiotics, transfusions, growth factors and vaccines to prevent and manage symptoms." },
      ],
    },
    sources: [MAC_LEUK, BCUK_AIMS, NHS_AML_TREAT, NHS_ALL_TREAT, MAC_AML_TREAT, NHS_CLL_TREAT, MAC_CML_TREAT, NHS_CML_TREAT, MAC_CLL_TREAT, BCUK_LEUK],
    quiz: {
      question: "What is the main treatment for CML?",
      options: [{ text: "TKI tablets or capsules taken every day", right: true }, { text: "Surgery" }, { text: "Radiotherapy alone" }],
      why: "The main treatment for CML is targeted medicines called tyrosine kinase inhibitors, or TKIs, taken as tablets or capsules every day.",
    },
  },
  {
    id: "leuk-stem-cell",
    kicker: "Transplant",
    question: "What happens in a stem cell transplant?",
    hook: "High-dose treatment clears out the unhealthy cells, then new stem cells arrive through a drip, a bit like a blood transfusion. Full recovery can take up to a year.",
    short: "A stem cell or bone marrow transplant replaces damaged blood cells with healthy ones. You have chemotherapy, and sometimes radiotherapy, then receive your own or a donor's stem cells through a drip. You stay in your own room until the transplant starts to work, and it can take up to a year to fully recover.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "A stem cell or bone marrow transplant replaces damaged blood cells with healthy ones. It is used to treat some blood cancers, including acute myeloid and acute lymphoblastic leukaemia.",
          "Most people with AML have stem cells from someone else, which is called a donor transplant. An autologous transplant uses your own stem cells, collected and stored so they can be put back after high-dose treatment.",
          "The best donor match is usually a brother or sister, or sometimes another close family member. If there is no match in your close family, donors can be found through the NHS Stem Cell Donor Registry.",
        ],
      },
      {
        heading: "Getting ready",
        paragraphs: [
          "You'll have tests to make sure you're well enough, such as heart tests, a scan of organs like your lungs and liver, and blood tests. Your hospital may offer support with diet, exercise and mental health beforehand, sometimes called prehab.",
          "You'll usually have chemotherapy or radiotherapy first, called conditioning therapy, to destroy any unhealthy blood cells. It usually lasts 1 to 10 days, and the transplant usually happens the day after it finishes.",
        ],
      },
      {
        heading: "The transplant itself",
        paragraphs: [
          "The stem cells are given through a thin tube in your chest or upper arm. They go directly into your bloodstream, a bit like having a blood transfusion. It's not painful and you will not need a general anaesthetic.",
          "The cells find their way to your bone marrow, and your body starts making blood cells again. This is called engraftment, and it can take about 2 to 3 weeks, but it can take longer.",
        ],
      },
      {
        heading: "Your own room",
        paragraphs: [
          "While your blood counts are low you are at very high risk of infection, so you stay in a room on your own, with the doors and windows closed. Visitors, including your care team, wear masks, gloves and plastic gowns.",
          "Being in isolation is tough, and it can feel lonely or frightening. Taking in personal things, your phone or a tablet can help the time pass, and it can help to talk to the nurses about your worries.",
          "Try to get into a routine: get washed and dressed by a certain time, and sit out of bed in a chair at mealtimes. A physiotherapist can help you set up safe, gentle exercises.",
        ],
      },
      {
        heading: "Recovery",
        paragraphs: [
          "You can usually expect to spend several weeks in hospital. At home, you'll have regular check-ups, usually weekly at first, and medicines to protect you from infections.",
          "If the stem cells came from a donor, there is a risk they attack other cells in your body. This is called graft versus host disease, or GvHD. Symptoms include dry, red, itchy skin, diarrhoea and yellowing of the skin, so let your care team know if you get any.",
          "It can take up to a year to fully recover. Rest when you need to, slowly increase how much exercise you do, and do not travel abroad unless your care team says you can.",
        ],
      },
    ],
    helps: [
      "Rest when you need to, and slowly increase exercise; short walks help at first.",
      "Ask for help with everyday tasks if you need it.",
      "Wash your hands thoroughly and often to prevent infection.",
      "Follow your care team's advice about foods to avoid, such as soft cheeses or undercooked eggs.",
      "Protect your skin from the sun while you recover.",
      "Call your care team now if you have a high temperature or other signs of an infection.",
    ],
    tryThisWeek: [
      "Rest when you need to.",
      "Take a short walk.",
      "Wash your hands often.",
    ],
    ask: "What kind of transplant would I have, and what support will I get during recovery?",
    interactive: {
      kind: "timeline",
      title: "The stages of a transplant",
      steps: [
        { id: "tests", when: "Before", title: "Tests and prehab", points: ["Tests check you're well enough.", "Your hospital may offer prehab support."] },
        { id: "conditioning", when: "1 to 10 days", title: "Conditioning", points: ["Chemotherapy or radiotherapy destroys unhealthy blood cells.", "The transplant usually follows the next day."] },
        { id: "transplant", when: "Transplant day", title: "Stem cells by drip", points: ["A bit like having a blood transfusion.", "It's not painful."] },
        { id: "engraftment", when: "About 2 to 3 weeks", title: "New cells settle in", points: ["You stay in a room on your own.", "Regular blood tests check your counts."] },
        { id: "home", when: "After several weeks", title: "Going home", points: ["Check-ups usually weekly at first.", "Medicines to protect you from infections."] },
        { id: "year", when: "Up to a year", title: "Full recovery", points: ["Rest when you need to.", "Slowly build up exercise."] },
      ],
    },
    sources: [NHS_SCT_WHAT, NHS_SCT_WHY, CRUK_AML_SCT, MAC_SCT, NHS_SCT_HOW, NHS_SCT_PREP, NHS_SCT_RECOVERY, NHS_SCT_COMPLICATIONS],
    quiz: {
      question: "How long can it take to fully recover from a stem cell transplant?",
      options: [{ text: "Up to a year", right: true }, { text: "About a week" }, { text: "A month at most" }],
      why: "It can take up to a year to fully recover.",
    },
  },
  {
    id: "leuk-infections",
    kicker: "Staying safe",
    question: "Why are infections so serious, and what do I do if I feel unwell?",
    hook: "With leukaemia, an infection can become an emergency quickly. Know your 24-hour number, and never wait to call it.",
    short: "Leukaemia and its treatment can weaken your immune system, so infections can happen more often, last longer, become more serious and lead to sepsis. If you are having treatment and think you have an infection, call the 24-hour emergency number you have been given straight away. If you can't get through, call 999 or get someone to drive you to A&E.",
    sections: [
      {
        heading: "Why the risk is higher",
        paragraphs: [
          "Blood cancer and its treatment can weaken the immune system, so infections can happen more often, last longer and become more serious than normal. If an infection isn't spotted and treated, it can develop into sepsis, which can be very serious.",
          "You are at highest risk if you are neutropenic, which means you have a low level of the white blood cells called neutrophils. The risk is also highest while you are having any treatment, including chemotherapy, targeted therapies, steroids or a stem cell transplant.",
          "Symptoms can be very mild, because your immune system doesn't react as strongly as normal, and some medicines can mask them. You could still have an infection even if you do not have a fever.",
        ],
      },
      {
        heading: "Signs of infection",
        paragraphs: [
          "Signs include feeling hot or cold, a sore throat, a cough, diarrhoea, being sick, burning when you wee, skin that feels red, hot or swollen, pain or redness around a central line, or generally not feeling well.",
          "Most treating teams advise you to check your temperature if you feel unwell, and to get advice if it is higher or lower than normal. Paracetamol, steroids and aspirin can mask a fever, so tell emergency staff if you are taking these.",
          "Contact the hospital straight away on the number you have been given if you suddenly feel unwell, even with a normal temperature.",
        ],
      },
      {
        heading: "What to do, straight away",
        paragraphs: [
          "If you are having treatment, you should be given a 24-hour emergency number, which might be called a chemotherapy hotline or cancer treatment helpline. Call it and follow the advice. If you can't get through, call 999 or get someone to drive you to your nearest A&E.",
          "If you are not having treatment, call your GP or hospital team. If you can't speak to them, call 111 and follow the advice; if you are told to go to A&E, call 999 or get someone to drive you there.",
          "The NHS says to call your care team now if you have a high temperature or other signs of an infection, and to call 111 if you're not sure how to contact them. Infections can get worse very quickly, so don't wait.",
        ],
      },
      {
        heading: "Signs of sepsis: call 999",
        paragraphs: [
          "Call 999 or go to A&E right away if you have slurred speech or confusion, extreme shivering or muscle pain, pass no urine in a day, are severely breathless, feel like you're going to die, or have mottled or discoloured skin.",
          "Do not drive yourself to A&E. Ask someone to drive you, or call 999 and ask for an ambulance, and bring any medicines you take with you.",
        ],
      },
      {
        heading: "In A&E, and every day",
        paragraphs: [
          "In A&E, show any cancer alert card, and tell staff you believe you are at risk of sepsis because you have blood cancer. If you are neutropenic, say you are at risk of neutropenic sepsis. If you are having anti-cancer treatment, you should get antibiotics quickly, ideally within the hour.",
          "Day to day, wash your hands regularly, always after the toilet and before cooking or eating, and stay away from people with colds, flu, diarrhoea or vomiting. While your white cells are low, try to avoid crowded places and busy public transport.",
          "Check with your cancer doctor or specialist nurse before having any vaccinations, as you will need to avoid live vaccines while your immune system is weak.",
        ],
      },
    ],
    helps: [
      "Write your emergency contact number somewhere you can easily find it.",
      "Make sure you and anyone you live with know what signs of infection to look for.",
      "If you think you have an infection, get medical advice straight away; don't wait.",
      "If you don't feel right and can't get medical advice, go to A&E straight away.",
      "Keep a bag ready in case you need to go to A&E, with your cancer alert card and a face mask.",
      "Ask your consultant or clinical nurse specialist about your personal level of infection risk.",
    ],
    tryThisWeek: [
      "Write down your 24-hour number.",
      "Teach your household the signs.",
      "Pack a bag for A&E.",
    ],
    ask: "What number do I call if I get a temperature or feel unwell, and am I neutropenic?",
    interactive: {
      kind: "signs",
      title: "Signs to act on now",
      intro: "Tick any you have now. If you are having treatment, call your 24-hour emergency number straight away and don't wait.",
      signs: ["Feeling hot or cold, or shivery", "A sore throat or a cough", "Diarrhoea or being sick", "Burning or stinging when I wee", "Red, hot or swollen skin", "Pain or redness around my central line", "New pain anywhere", "Generally not feeling well"],
      after: "Call 999 or go to A&E right away for slurred speech or confusion, extreme shivering, no urine in a day, severe breathlessness or mottled skin.",
      copyHeading: "Infection signs I have now",
    },
    sources: [BCUK_INFECTION, BCUK_INF_SYMPTOMS, BCUK_AE, MAC_INFECTION, NHS_SEPSIS, MAC_COPING_ACUTE, NHS_CHEMO],
    quiz: {
      question: "You're having chemotherapy and suddenly feel shivery. What should you do first?",
      options: [{ text: "Call your 24-hour emergency number now", right: true }, { text: "Wait until tomorrow to see if it passes" }, { text: "Take paracetamol and say nothing" }],
      why: "If you are having treatment, you should be given a 24-hour emergency number, which might be called a chemotherapy hotline or cancer treatment helpline. Call it and follow the advice.",
    },
  },
  {
    id: "leuk-fatigue",
    kicker: "Recovery",
    question: "Why am I so tired, and could it be anaemia?",
    hook: "Fatigue is one of the most common side effects of blood cancer and its treatment. Sometimes a low red cell count is part of it, and that can be treated.",
    short: "Fatigue is when you're totally drained in body or mind, and it can hit even when you've rested. The cancer, treatment, medicines, stress or anaemia can all play a part. Tell your team, as anaemia can be checked with a blood test and treated, and balancing rest with activity helps.",
    sections: [
      {
        heading: "More than tiredness",
        paragraphs: [
          "Fatigue is when you're totally drained in body or mind. It can hit even when you've rested or slept well, and it can also cause brain fog.",
          "It's a normal and common side effect for people with blood cancer. The cancer itself, current or past treatment, medicines, stress or depression can all play a role.",
        ],
      },
      {
        heading: "Anaemia",
        paragraphs: [
          "Anaemia means having a low level of red blood cells. Leukaemia can cause it, and so can some cancer treatments.",
          "Signs of anaemia include tiredness, breathlessness, dizziness or feeling faint, chest pain and pale skin.",
          "A blood test checks the level of haemoglobin in your blood. The main treatment for anaemia is a blood transfusion, and other treatments include erythropoietin or an iron infusion.",
        ],
      },
      {
        heading: "Having a transfusion",
        paragraphs: [
          "Red blood cell transfusions are the most common type of transfusion. They help relieve the symptoms of anaemia by raising your level of red blood cells and haemoglobin.",
          "You usually have a transfusion at the hospital as an outpatient, and a red cell transfusion can take up to four hours per bag. You may want to take some snacks and something to keep you occupied.",
          "Tell the nurse straight away if you start feeling unwell during the transfusion, and tell your hospital team if you feel unwell after you get home.",
        ],
      },
      {
        heading: "Balancing rest and activity",
        paragraphs: [
          "You need both rest and activity to fight fatigue. It may sound strange, but being more active actually reduces tiredness. Build it up gradually, and take things slowly if your red blood cells are low.",
          "Keep track of how you feel each day and week, with a fatigue diary, and plan rest between activities. Your specialist nurse may ask you to score your fatigue from 0 to 10, where 10 is the worst possible fatigue.",
          "Be kind to yourself: you're not being lazy. If you need a rest day, have one, and think about what you could ask friends or family to help with.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "If tiredness is new for you, or it gets worse, tell your hospital team so they can check whether it means a change to your health.",
          "Your medical team or GP may refer you to an occupational therapist or physiotherapist, who can show you ways to pace yourself and make the most of your energy.",
        ],
      },
    ],
    helps: [
      "Tell your hospital team if tiredness is new or gets worse.",
      "Tell your healthcare team how you're feeling, as there are normally ways they can help.",
      "Keep a fatigue diary of how you feel each day and week.",
      "Balance rest with activity, and plan rest between activities.",
      "Ask friends or family to help with tasks you could hand over.",
      "Ask to be referred to an occupational therapist or physiotherapist.",
    ],
    tryThisWeek: [
      "Note your energy each day.",
      "Plan rests between activities.",
      "Hand one task to someone.",
    ],
    ask: "Could anaemia be adding to my tiredness, and would a transfusion help?",
    interactive: {
      kind: "risk-check",
      title: "What could be adding to your tiredness?",
      intro: "Tick any that apply. Tell your hospital team, as there are normally ways they can help.",
      items: [
        { id: "anaemia", label: "Breathless, dizzy or pale", note: "These can be signs of anaemia. A blood test checks your haemoglobin, and a transfusion can treat it.", changeable: true },
        { id: "treatment", label: "Current or past treatment", note: "Fatigue is a common side effect of blood cancer treatment. Tell your team how it affects you.", changeable: false },
        { id: "medicines", label: "Medicines", note: "Medicines can play a role in fatigue. Tell your healthcare team how you're feeling.", changeable: true },
        { id: "mood", label: "Stress, worry or low mood", note: "Feeling depressed or anxious can also cause fatigue, and support is available.", changeable: true },
        { id: "inactive", label: "Doing much less than usual", note: "Being more active actually reduces tiredness. Build up gradually.", changeable: true },
      ],
    },
    sources: [BCUK_FATIGUE, BCUK_SIDE, BCUK_SYMPTOMS, MAC_FATIGUE, BCUK_TRANSFUSION, MAC_COPING_ACUTE],
    quiz: {
      question: "What does Blood Cancer UK say helps fight fatigue?",
      options: [{ text: "Balancing rest with activity", right: true }, { text: "Resting in bed all day" }, { text: "Pushing through without breaks" }],
      why: "You need both rest and activity to fight fatigue. It may sound strange, but being more active actually reduces tiredness.",
    },
  },
  {
    id: "leuk-follow-up",
    kicker: "After treatment",
    question: "What happens at follow-up, and how often are my checks?",
    hook: "Check-ups go on for several years, with a blood test at almost every one. With chronic types, monitoring becomes part of everyday life.",
    short: "After treatment you'll have regular check-ups, with blood tests and sometimes other tests, for several years. They check how you are, look for side effects and late effects, and check the leukaemia has not come back. You don't have to wait for an appointment to report a new symptom.",
    sections: [
      {
        heading: "Why follow-up matters",
        paragraphs: [
          "You'll have regular check-ups, which include blood tests and sometimes other tests, and they continue for several years. Some people have ongoing treatment with targeted therapy or chemotherapy to keep the leukaemia away.",
          "Appointments check how you are and whether you have side effects, complications or worries, and whether the leukaemia has come back. Your team also checks for late effects, which are side effects that develop months or years after treatment.",
        ],
      },
      {
        heading: "How often, after acute leukaemia",
        paragraphs: [
          "At first you have at least weekly blood counts until your bone marrow is working properly, and you see your doctor every few weeks. As time goes on, appointments gradually become less frequent.",
          "As a general guide after AML, Cancer Research UK gives every 3 months for 2 years, every 4 months for another 2 years, then every 6 months for 1 year. Follow-up is more frequent if you have had a stem cell transplant.",
          "After a stem cell transplant, you'll likely have follow-up appointments, usually yearly, throughout your life, to check your general health and look for late effects.",
        ],
      },
      {
        heading: "Monitoring chronic leukaemia",
        paragraphs: [
          "With CLL, even if you are not having any treatment, you will see your haematologist or GP regularly for check-ups and blood tests. This is called monitoring, or watch and wait.",
          "With CML, if you take a TKI, your healthcare team monitors you every 1 to 2 weeks. A sensitive blood test called PCR checks for leukaemia cells every 3 months to start with, and as time goes on, you may only need a check-up every 3 to 6 months.",
        ],
      },
      {
        heading: "Your end of treatment summary",
        paragraphs: [
          "When treatment ends, your hospital team sends an end of treatment summary to you and your GP. It includes a care plan setting out how you will be monitored, and the contact details to use if you have questions or concerns.",
          "If you stay in remission throughout follow-up, you'll likely be discharged to the care of your GP. You may want to book an appointment to go through your summary together.",
        ],
      },
      {
        heading: "Getting the most from appointments",
        paragraphs: [
          "Write down any questions before your appointment, and take someone with you to help you remember what was said. Tell your team about any new or ongoing symptoms, and how you are coping with your feelings.",
          "Contact your doctor or specialist nurse if you notice new symptoms or have concerns between appointments; you don't have to wait until your next one.",
          "Many people find check-ups quite worrying, as an appointment can bring back anxiety about the cancer. It can help to tell someone close to you how you're feeling.",
        ],
      },
    ],
    helps: [
      "Write down any questions before your appointment.",
      "Take someone with you to help you remember what was said.",
      "Ask your team what your follow-up plan is, and how long it will last.",
      "Ask which late effects you are more likely to develop, and what symptoms to look out for.",
      "Contact your specialist nurse if you are expecting an appointment but haven't heard anything.",
      "Book a GP appointment to go through your end of treatment summary.",
    ],
    tryThisWeek: [
      "Write your questions down.",
      "Ask about your follow-up plan.",
      "Book a GP chat about your summary.",
    ],
    ask: "What is my follow-up plan, and which symptoms should I contact you about between appointments?",
    interactive: {
      kind: "timeline",
      title: "A general guide to check-ups after AML",
      steps: [
        { id: "start", when: "At first", title: "Close contact", points: ["At least weekly blood counts.", "You see your doctor every few weeks."] },
        { id: "y1", when: "Years 1 and 2", title: "Every 3 months", points: ["A blood test at clinic appointments.", "Sometimes a bone marrow test too."] },
        { id: "y3", when: "Years 3 and 4", title: "Every 4 months", points: ["Appointments become less frequent.", "Report new symptoms at any time."] },
        { id: "y5", when: "Year 5", title: "Every 6 months", points: ["A general guide; yours may differ.", "More often after a stem cell transplant."] },
        { id: "later", when: "After 5 years", title: "Late effects checks", points: ["Tests for side effects of treatment.", "Generally yearly, if follow-up continues."] },
      ],
    },
    sources: [MAC_LEUK, CRUK_AML_FOLLOW, BCUK_LATE_FOLLOW, MAC_CLL_TREAT, MAC_CML, MAC_FOLLOW],
    quiz: {
      question: "Do you have to wait for your next appointment to report a new symptom?",
      options: [{ text: "No, contact your team when you notice it", right: true }, { text: "Yes, always wait" }, { text: "Only if it lasts a year" }],
      why: "Contact your doctor or specialist nurse if you notice new symptoms or have concerns between appointments; you don't have to wait until your next one.",
    },
  },
  {
    id: "leuk-eating",
    kicker: "Eating well",
    question: "What can I eat safely when my immunity is low?",
    hook: "You can still eat a wide range of food. Good kitchen hygiene and avoiding a short list of higher-risk foods do most of the work.",
    short: "When your neutrophils are low, you can get infections more easily from food, so good food hygiene and avoiding some higher-risk foods help. Many hospitals no longer recommend a strict neutropenic diet, and you can still eat a balanced diet. Your hospital team will tell you which foods to avoid, and for how long.",
    sections: [
      {
        heading: "Why food matters now",
        paragraphs: [
          "Neutropenia weakens your immune system, so you can get infections more easily from your food. Some treatments can also damage your gut lining, making it easier for harmful bacteria to pass from food into your bloodstream.",
          "You can still eat a balanced diet with a wide range of foods while you're neutropenic. Eating well gives you the energy you need to help you through treatment and supports your recovery.",
        ],
      },
      {
        heading: "Good kitchen habits",
        paragraphs: [
          "Wash your hands before you prepare food and before you eat. Clean utensils and chopping boards thoroughly, especially after preparing meat or eggs, and keep pets out of the kitchen.",
          "Make sure food is thoroughly cooked, store it at the correct temperature, and eat it before the use-by date. Wash fruit and vegetables before eating, including pre-packed salad, even if it says ready washed.",
          "Only reheat food once, and make sure it is hot all the way through. Do not reheat cooked rice, and defrost food fully before reheating it.",
        ],
      },
      {
        heading: "Higher-risk foods",
        paragraphs: [
          "Higher-risk foods include raw or runny eggs, raw or undercooked meat and poultry, raw fish and shellfish, unpasteurised milk and the foods made from it, and probiotic drinks and yoghurts.",
          "Mould-ripened soft cheeses like Brie, soft blue cheeses, smoked fish and cured meats such as salami are higher risk unless cooked until steaming hot. So is unpasteurised pâté.",
          "Safer choices include hard pasteurised cheeses like Cheddar, well-cooked eggs, cooked fish and seafood, and pasteurised milk and yoghurt. Your hospital team will let you know if you should avoid these foods, and for how long, and it is important to follow their advice.",
        ],
      },
      {
        heading: "Myths about a neutropenic diet",
        paragraphs: [
          "Several research studies have found that a strict neutropenic diet does not reduce infections, and it may even be harmful by limiting what you can eat. Many hospitals have stopped recommending it.",
          "Bottled water is safe to drink, and there's no need to sterilise cutlery or crockery. Washing them with hot water and washing up liquid, or in a dishwasher, keeps them clean.",
        ],
      },
      {
        heading: "Eating out, and alcohol",
        paragraphs: [
          "Ask your hospital team about eating out and takeaways. Stick to places with high standards of food hygiene, where a rating of 5 is the highest, and it's safest to avoid buffets and open salad bars.",
          "When your blood counts recover, you can usually eat a normal diet. Drinking a lot of alcohol can slow your recovery and increase the risk of bleeding if your platelets are low, so ask your doctor if it is okay for you to drink.",
        ],
      },
    ],
    helps: [
      "Ask your hospital team which foods to avoid, and for how long.",
      "Wash your hands before preparing food and before eating.",
      "Wash fruit and vegetables, including pre-packed salad.",
      "Cook higher-risk foods until steaming hot, and only reheat food once.",
      "Check a restaurant's food hygiene rating before eating out.",
      "Speak to your healthcare team if thinking about food safety makes you anxious.",
    ],
    tryThisWeek: [
      "Ask which foods to avoid.",
      "Wash all salad and fruit.",
      "Check hygiene ratings first.",
    ],
    ask: "Do I need to avoid any foods right now, and for how long?",
    interactive: {
      kind: "scenarios",
      title: "Safe swaps",
      scenarios: [
        {
          id: "brie",
          situation: "You fancy some Brie while you're neutropenic.",
          options: [{ text: "Have Cheddar, or Brie cooked until steaming hot", best: true }, { text: "Eat it cold as usual" }],
          why: "Mould-ripened soft cheeses like Brie are higher risk unless cooked until steaming hot.",
        },
        {
          id: "salad",
          situation: "The bagged salad says it is ready washed.",
          options: [{ text: "Wash it anyway", best: true }, { text: "Eat it straight from the bag" }],
          why: "Wash fruit and vegetables before eating, including pre-packed salad, even if it says ready washed.",
        },
        {
          id: "egg",
          situation: "You'd like a soft-boiled egg for breakfast.",
          options: [{ text: "Choose a well-cooked egg", best: true }, { text: "Keep the yolk runny" }],
          why: "Higher-risk foods include raw or runny eggs. Well-cooked eggs are a safer choice.",
        },
        {
          id: "buffet",
          situation: "Friends suggest a buffet restaurant.",
          options: [{ text: "Suggest somewhere with a high hygiene rating", best: true }, { text: "Go along and fill a plate" }],
          why: "Stick to places with high standards of food hygiene, and it's safest to avoid buffets and open salad bars.",
        },
        {
          id: "rice",
          situation: "There's cooked rice left over from last night.",
          options: [{ text: "Don't reheat it", best: true }, { text: "Warm it up in the microwave" }],
          why: "Only reheat food once, and do not reheat cooked rice.",
        },
      ],
    },
    sources: [BCUK_EAT_SAFE, MAC_FOOD_SAFETY, MAC_COPING_ACUTE],
    quiz: {
      question: "Which of these is a higher-risk food when your immunity is low?",
      options: [{ text: "Runny eggs", right: true }, { text: "Hard pasteurised Cheddar" }, { text: "Well-cooked fish" }],
      why: "Higher-risk foods include raw or runny eggs, raw or undercooked meat and poultry, raw fish and shellfish.",
    },
  },
  {
    id: "leuk-work",
    kicker: "Work and money",
    question: "Can I keep working, and what help is there with money?",
    hook: "Cancer counts as a disability from the day you're diagnosed. That gives you rights at work, whether you're having treatment, in remission or on watch and wait.",
    short: "You automatically meet the definition of disability under the Equality Act 2010 from the day you're diagnosed with cancer, whatever stage you're at. Your employer has to consider reasonable adjustments, such as working from home to lower infection risk or a phased return. There is also help with costs, from benefits to free prescriptions and Access to Work.",
    sections: [
      {
        heading: "Your rights",
        paragraphs: [
          "You automatically meet the disability definition under the Equality Act 2010 from the day you're diagnosed with cancer. The Act does not apply to Northern Ireland, where the Disability Discrimination Act protects you.",
          "Whatever stage you're at with blood cancer, you're protected: in remission, on active monitoring, having treatment or living with chronic blood cancer.",
        ],
      },
      {
        heading: "Telling work",
        paragraphs: [
          "You do not have to tell your employer you have cancer. But they do not have to make a reasonable adjustment unless they know, or should reasonably know, that you have cancer.",
          "Your manager or HR team can't tell anyone else at work without your permission. Your employer should do a risk assessment, understanding that you're likely to be at higher risk from infection.",
        ],
      },
      {
        heading: "When to go back",
        paragraphs: [
          "Your doctor or nurse can advise you when to start work again; it may depend on your treatment and how well you are recovering. After a stem cell transplant, they may advise waiting until your blood count is back to normal or almost normal.",
          "You may want to start part-time and build up gradually. You and your manager can agree a return-to-work plan, as flexible as possible, and your doctor can give you a fit note explaining how your health affects what you can do at work.",
        ],
      },
      {
        heading: "Adjustments that help",
        paragraphs: [
          "Reasonable adjustments include support to work from home because of infection risk, a phased return, time off for medical appointments, more breaks, changed start or finish times and reduced hours.",
          "You can ask for adjustments at any time, not just when you're first diagnosed or returning to work. Write down what makes work harder, think of a way to change each thing, then talk to your employer.",
          "Access to Work can give a grant towards practical support, such as equipment or the cost of travelling to work if you cannot use public transport. It will not affect other benefits, you will not have to pay it back, and it does not pay for reasonable adjustments.",
        ],
      },
      {
        heading: "Help with costs",
        paragraphs: [
          "Blood cancer counts as a disability in the UK, so you may be entitled to benefits such as Personal Independence Payment or Universal Credit. Macmillan has specialist benefits advisers on 0808 808 00 00, and Citizens Advice is on 0344 411 1444.",
          "In England, you can get a medical exemption certificate for free prescriptions if you're having treatment for cancer or its effects; it lasts 5 years. Prescriptions are free for everyone in Northern Ireland, Scotland and Wales.",
          "Hospital parking should be free for people with cancer in England and Northern Ireland, and all parking is free in Scotland and Wales. Ask your medical team for details, and whether you can claim back the cost of travel.",
        ],
      },
    ],
    helps: [
      "Write down what makes work harder, and suggest a change for each thing.",
      "Ask your employer to do a risk assessment.",
      "Agree a flexible return-to-work plan with your manager, and meet regularly.",
      "Ask your GP surgery or hospital doctor for the form for a medical exemption certificate.",
      "Use a benefits calculator, or call Macmillan's benefits advisers on 0808 808 00 00.",
      "Contact Acas on 0300 123 1100 if you have concerns about your rights at work.",
    ],
    tryThisWeek: [
      "List what makes work harder.",
      "Ask for the prescription form.",
      "Try a benefits calculator.",
    ],
    ask: "When is it safe for me to go back to work, and could you write a fit note or letter for my employer?",
    interactive: {
      kind: "scenarios",
      title: "Moments at work",
      scenarios: [
        {
          id: "office",
          situation: "Your workplace is busy and you're worried about catching infections.",
          options: [{ text: "Ask about working from home as a reasonable adjustment", best: true }, { text: "Say nothing and hope for the best" }],
          why: "Reasonable adjustments include support to work from home because of infection risk.",
        },
        {
          id: "telling",
          situation: "You'd like flexible hours but haven't told work about your leukaemia.",
          options: [{ text: "Tell them, so they can make adjustments", best: true }, { text: "Expect changes without telling them" }],
          why: "They do not have to make a reasonable adjustment unless they know, or should reasonably know, that you have cancer.",
        },
        {
          id: "remission",
          situation: "You're in remission and think your rights at work have ended.",
          options: [{ text: "You're still protected", best: true }, { text: "Your rights ended with treatment" }],
          why: "Whatever stage you're at with blood cancer, you're protected: in remission, on active monitoring, having treatment or living with chronic blood cancer.",
        },
        {
          id: "prescriptions",
          situation: "You live in England and are paying for prescriptions during treatment.",
          options: [{ text: "Ask for a medical exemption certificate", best: true }, { text: "Keep paying" }],
          why: "In England, you can get a medical exemption certificate for free prescriptions if you're having treatment for cancer or its effects.",
        },
      ],
    },
    sources: [GOV_DISABILITY, BCUK_WORK, MAC_ADJUSTMENTS, MAC_RETURNING, MAC_COPING_ACUTE, GOV_ATW, BCUK_COSTS],
    quiz: {
      question: "When does someone with cancer meet the Equality Act's definition of disability?",
      options: [{ text: "From the day they're diagnosed", right: true }, { text: "After a year off work" }, { text: "Only during treatment" }],
      why: "You automatically meet the disability definition under the Equality Act 2010 from the day you're diagnosed with cancer.",
    },
  },
  {
    id: "leuk-mood",
    kicker: "Mood",
    question: "How do I live with the uncertainty, and where can I get support?",
    hook: "Waiting for results, watch and wait, the worry of relapse: uncertainty is part of life with leukaemia for many people. You don't have to carry it alone.",
    short: "It's normal to feel anxious about your health and what leukaemia means for you and the people close to you, and to have good and bad days. Staying connected, staying active and focusing on the here and now can help, and professional support is there. If you have thoughts of suicide, contact your GP or specialist nurse straight away, call Samaritans free on 116 123, or call 999 if you can't keep yourself safe.",
    sections: [
      {
        heading: "A normal response",
        paragraphs: [
          "If you have blood cancer, it's normal to feel anxious about your health and what your diagnosis could mean for you, your loved ones and the future. You'll probably have good and bad days, and you won't be the only one who feels like this.",
          "On active monitoring, it can be hard to cope with not knowing whether you'll need treatment in the future. Lots of people say waiting for test results causes anxiety, and others worry about relapse.",
          "Worrying about the cancer coming back is common after treatment. These feelings can be hard to deal with, but they often get better with time.",
        ],
      },
      {
        heading: "Things that can help",
        paragraphs: [
          "Be kind to yourself, stay connected with family and friends, and keep doing things you enjoy. Physical activity is good for your mental health, so build up gradually and pace yourself.",
          "Focusing on the here and now can help if you feel overwhelmed, such as concentrating on your breathing. Mindfulness can help reduce anxiety and depression in people with cancer.",
          "Try not to worry about things that may never happen. Focusing on what you can control and do now can help, such as your well-being, talking about your feelings and knowing your triggers.",
        ],
      },
      {
        heading: "When low mood lasts",
        paragraphs: [
          "Signs of depression can include feeling low most of the time, losing interest in things you used to enjoy, changes in sleeping, eating or concentration, and feeling helpless. If they go on for more than 2 weeks, talk to your doctor or nurse.",
          "Depression is common, and there are many things that can help. Your GP or specialist nurse can listen, refer you to a counsellor or psychologist, and talk to you about medicine that can help treat depression.",
          "You can ask your GP or hospital team to refer you for free NHS counselling. In England you can refer yourself if you prefer; in Scotland, Wales and Northern Ireland, you'll need to go through a doctor.",
        ],
      },
      {
        heading: "People to talk to",
        paragraphs: [
          "Blood Cancer UK's support line is on 0808 2080 888, and the Macmillan Support Line is free on 0808 808 00 00, 8am to 8pm, 7 days a week. Leukaemia Care's helpline is on 08088 010 444.",
          "Talking to people going through something similar can help, through a cancer support group or an online community. Your clinical nurse specialist can tell you about local support services.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "If you have thoughts about self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. You can call Samaritans free on 116 123, any time, day or night.",
          "For urgent help with your mental health, call 111 and select the mental health option, or ask for an urgent GP appointment. If you'd rather not talk on the phone, you can text SHOUT to 85258.",
          "Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Talk about how you feel with family, friends or your partner.",
      "Try a few minutes of mindfulness, concentrating on your breathing.",
      "Talk to your doctor or nurse if low feelings go on for more than 2 weeks.",
      "Ask your GP or hospital team about free NHS counselling.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "If you do not feel you can keep yourself safe, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Tell someone close how you feel.",
      "Try a short breathing exercise.",
      "Ask about NHS counselling.",
    ],
    ask: "Could my low mood or worry be something you can help with, and can you refer me for counselling?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your doctor or nurse",
      intro: "Tick any you have had most of the time. If they go on for more than 2 weeks, talk to your doctor or nurse.",
      signs: ["Feeling low or sad most of the time", "Lost interest in things I enjoyed", "Changes in my sleep", "Changes in my eating", "Trouble concentrating", "Feeling helpless or vulnerable", "Problems starting or finishing tasks"],
      after: "If you have thoughts of self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. Samaritans is free on 116 123.",
      copyHeading: "How I have been feeling",
    },
    sources: [BCUK_MIND, MAC_WORRY, MAC_DEPRESSION, NHS_ALL_HELP, SAMARITANS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When should you talk to your doctor or nurse about low feelings?",
      options: [{ text: "If they go on for more than 2 weeks", right: true }, { text: "Only if they last a year" }, { text: "Never, they always pass" }],
      why: "If they go on for more than 2 weeks, talk to your doctor or nurse.",
    },
  },
];
