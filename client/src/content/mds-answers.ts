import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Myelodysplastic syndromes (MDS) page's pieces
// (content/library-conditions/cancer-more-2.ts, `mds`). Every sentence was written from wording checked on
// 22 October 2026 on the pages listed under each answer's `sources`; nothing is added that those pages do not
// say. Most of it comes from the NHS, Blood Cancer UK, Macmillan Cancer Support, Cancer Research UK and
// Leukaemia Care, with Samaritans for the mood answer. (The MDS UK Patient Support Group website was offline
// today, so it is named only where the NHS, Cancer Research UK and Blood Cancer UK name it.) The answers
// describe tests, treatment and living with MDS; there are no survival or life-expectancy figures, and
// nothing is a prediction for one person. Emergency guidance (infection, sepsis, bleeding, transfusion
// reactions, problems after a transplant) and the mood answer's crisis routes are given exactly as the
// sources state them. General information only; it never replaces what a person's own haematology team
// tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/myelodysplastic-syndromes/${path}` });
const bcuk = (label: string, path: string): LearnSource => ({ label: `Blood Cancer UK: ${label}`, url: `https://bloodcancer.org.uk/understanding-blood-cancer/${path}` });
const bcmds = (label: string, path: string): LearnSource => bcuk(label, `myelodysplastic-syndromes-mds-/${path}`);

const NHS_WHAT = nhs("What is myelodysplastic syndrome (MDS)?", "conditions/myelodysplastic-syndrome-mds/what-is-mds/");
const NHS_SYMPTOMS = nhs("Symptoms of myelodysplastic syndrome (MDS)", "conditions/myelodysplastic-syndrome-mds/symptoms/");
const NHS_CAUSES = nhs("Causes of myelodysplastic syndrome (MDS)", "conditions/myelodysplastic-syndrome-mds/causes/");
const NHS_TESTS = nhs("Tests and next steps for myelodysplastic syndrome (MDS)", "conditions/myelodysplastic-syndrome-mds/tests-and-next-steps/");
const NHS_TREATMENT = nhs("Treatment for myelodysplastic syndrome (MDS)", "conditions/myelodysplastic-syndrome-mds/treatment/");
const NHS_SUPPORT = nhs("Help and support for myelodysplastic syndrome (MDS)", "conditions/myelodysplastic-syndrome-mds/support/");
const NHS_TRANSFUSION = nhs("Blood transfusion", "tests-and-treatments/blood-transfusion/");
const NHS_SCT_HOW = nhs("How a stem cell or bone marrow transplant is done", "tests-and-treatments/stem-cell-or-bone-marrow-transplants/how-its-done/");
const NHS_SCT_RECOVERY = nhs("Recovering from a stem cell or bone marrow transplant", "tests-and-treatments/stem-cell-or-bone-marrow-transplants/recovery/");
const NHS_SCT_COMPLICATIONS = nhs("Complications of a stem cell or bone marrow transplant", "tests-and-treatments/stem-cell-or-bone-marrow-transplants/complications/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const BC_EXPLAINED = bcmds("MDS explained", "what-is-mds/mds-explained/");
const BC_TYPES = bcmds("Types of MDS", "what-is-mds/mds-types/");
const BC_CAUSES = bcmds("What causes MDS?", "what-is-mds/what-causes-mds/");
const BC_PROGNOSIS = bcmds("Prognosis for MDS", "prognosis/");
const BC_SYMPTOMS = bcmds("MDS symptoms", "symptoms/");
const BC_TESTS = bcmds("Tests for MDS", "tests-diagnosis/");
const BC_MONITORING = bcmds("Active monitoring (watch and wait) for MDS", "active-monitoring/");
const BC_PLANNING = bcmds("Planning MDS treatment", "mds-treatment-side-effects/planning-treatment/");
const BC_SUPPORTIVE = bcmds("Supportive care for MDS", "mds-treatment-side-effects/supportive-care/");
const BC_NON_INTENSIVE = bcmds("Non-intensive treatment for MDS", "mds-treatment-side-effects/non-intensive-treatment/");
const BC_INTENSIVE = bcmds("Intensive treatment for MDS", "mds-treatment-side-effects/intensive-treatment/");
const BC_SIDE_EFFECTS = bcmds("Side effects of MDS treatment", "mds-treatment-side-effects/side-effects/");
const BC_INFECTION_SYMPTOMS = bcuk("Infection symptoms and what to do", "treatment/infection-neutropenia-sepsis/infection-symptoms-what-do/");
const BC_AE = bcuk("What to say in A&E", "treatment/infection-neutropenia-sepsis/what-to-say-accident-emergency/");
const BC_SEPSIS = bcuk("Neutropenia and the risk of sepsis", "treatment/infection-neutropenia-sepsis/neutropenia/neutropenic-sepsis/");
const BC_PREVENTING = bcuk("Preventing infection", "treatment/infection-neutropenia-sepsis/managing-infection-risk/preventing-infection/");
const BC_FATIGUE = bcuk("Fatigue", "treatment/side-effects/fatigue/");
const BC_ACTIVE = bcuk("Keeping active", "life-with-blood-cancer/living-well/keeping-active/");
const BC_MIND = bcuk("Mind and emotions", "life-with-blood-cancer/living-well/mind-emotions/");
const BC_MONITORING_FEELINGS = bcuk("Coping with your feelings on active monitoring", "treatment/active-monitoring/coping-with-feelings/");
const BC_MONITORING_EXPECT = bcuk("Active monitoring: what to expect", "treatment/active-monitoring/active-monitoring-what-to-expect/");

const MAC_MDS = mac("Myelodysplasia or myelodysplastic syndrome (MDS)", "blood-cancer/myelodysplasia-mds");
const MAC_BIOPSY = mac("Bone marrow biopsy", "diagnostic-tests/bone-marrow-biopsy");
const MAC_AZACITIDINE = mac("Azacitidine", "treatments-and-drugs/azacitidine");
const MAC_INFECTION = mac("Infection", "impacts-of-cancer/infection");
const MAC_MENTAL_HEALTH = mac("Cancer and mental health support", "treatment/coping-with-treatment/cancer-and-mental-health-support");

const CRUK_WHAT = cruk("What are myelodysplastic syndromes (MDS)?", "what-is-mds");
const CRUK_TREATMENT = cruk("Tests and treatment for myelodysplastic syndromes (MDS)", "treatment");
const CRUK_COPING = cruk("Coping with myelodysplastic syndrome (MDS)", "coping");

const LEUKAEMIA_CARE: LearnSource = { label: "Leukaemia Care: Myelodysplastic syndromes (MDS)", url: "https://www.leukaemiacare.org.uk/about-leukaemia/types/myelodysplastic-syndromes-mds/" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const mdsAnswers: LearnArticle[] = [
  {
    id: "mds-what-it-is",
    kicker: "Understanding",
    question: "What is MDS?",
    hook: "The bone marrow is the body's blood cell factory. In MDS, some of the cells it makes never grow up properly, so there are too few healthy ones in the blood.",
    short: "Myelodysplastic syndrome (MDS) is a rare type of blood cancer that affects the bone marrow, where blood cells are made. Some cells do not develop properly, so there are not enough healthy blood cells. It often develops slowly and may not need treatment straight away.",
    sections: [
      {
        heading: "A problem in the bone marrow",
        paragraphs: [
          "Myelodysplastic syndrome (MDS), also called myelodysplasia, is a rare type of blood cancer. It affects the bone marrow, the spongy tissue inside some bones where the body makes blood cells.",
          "MDS is sometimes called bone marrow failure, because the bone marrow does not make blood cells in the normal way. The word myelo means bone marrow, and dysplasia means abnormal cells.",
        ],
      },
      {
        heading: "How blood cells are made",
        paragraphs: [
          "All blood cells start from stem cells in the bone marrow. These develop into immature cells called blasts, then into mature blood cells: red blood cells that carry oxygen, white blood cells that fight infections and platelets that prevent bleeding.",
          "In MDS, some of these cells do not develop properly. They stay at the immature blast stage, or become abnormal cells that do not work and are quickly destroyed by the body. The result is too few healthy blood cells in the blood.",
        ],
      },
      {
        heading: "Who gets it, and why",
        paragraphs: [
          "Anyone can get MDS, but it is more common as you get older. The typical age is around 75, and about 9 in 10 people diagnosed are over 50.",
          "For most people, no cause is found. Rarely, it follows chemotherapy or radiotherapy for another cancer, and contact with the chemical benzene, found in cigarette smoke and petrol, slightly increases the risk.",
          "MDS is not infectious, and getting it is not because of anything you have done. For most people, it is not passed down to children.",
        ],
      },
      {
        heading: "How it can change",
        paragraphs: [
          "MDS often develops slowly, over several years, and may not need treatment straight away. For others it develops faster. Some people with MDS go on to develop another blood cancer called acute myeloid leukaemia (AML).",
          "It cannot usually be cured, but the symptoms can often be managed with treatment. How serious it is depends on the type of MDS, the risk of AML and your general health, and your hospital team are the best people to explain your own situation.",
        ],
      },
    ],
    helps: [
      "Ask your haematologist or clinical nurse specialist to explain the type of MDS you have and what this means.",
      "Ask your hospital team about your own situation; they know you and are the best people to answer.",
      "Make a list of questions before you see your doctor, and take someone with you to help remember the answers.",
      "Ask your doctors and nurses to explain things again if you need them to.",
      "Call the Macmillan Support Line free on 0808 808 00 00 if you want to talk.",
      "Contact the Blood Cancer UK support line on 0808 2080 888 with questions or worries.",
    ],
    tryThisWeek: [
      "Ask which type of MDS you have.",
      "List your questions before appointments.",
      "Save a support line number.",
    ],
    ask: "Which type of MDS do I have, and what does it mean for me?",
    interactive: {
      kind: "flip-cards",
      title: "The cells MDS affects",
      intro: "Turn a card to see what each kind of blood cell does, and what happens when there are too few.",
      cards: [
        { id: "red", front: "Red blood cells", when: "Too few: anaemia", back: "They carry oxygen around the body. Too few can make you feel weak, tired and breathless." },
        { id: "white", front: "White blood cells", when: "Too few: more infections", back: "They fight infections. Too few make infections more likely, and harder for your body to fight." },
        { id: "platelets", front: "Platelets", when: "Too few: bruising and bleeding", back: "They help the blood to clot. Too few can make you bruise and bleed easily." },
        { id: "blasts", front: "Blasts", when: "Immature cells in the bone marrow", back: "Normally they grow into mature blood cells. In some types of MDS there are too many, leaving less room for healthy cells." },
      ],
    },
    sources: [NHS_WHAT, BC_EXPLAINED, CRUK_WHAT, MAC_MDS, NHS_CAUSES, BC_CAUSES, LEUKAEMIA_CARE, BC_PROGNOSIS, NHS_TESTS, NHS_SUPPORT, CRUK_COPING],
    quiz: {
      question: "What part of the body does MDS affect?",
      options: [{ text: "The bone marrow", right: true }, { text: "The lungs" }, { text: "The liver" }],
      why: "It affects the bone marrow, the spongy tissue inside some bones where the body makes blood cells.",
    },
  },
  {
    id: "mds-types",
    kicker: "Understanding",
    question: "What does lower risk or higher risk MDS mean?",
    hook: "Your type of MDS describes which cells are affected. Your risk group describes how quickly it may change, and it shapes the treatment you are offered.",
    short: "MDS has different types, based on which blood cells are affected, the number of immature cells called blasts and genetic changes. Doctors also work out a risk group, often using a system with five groups from very low to very high. Lower and higher risk MDS are treated differently.",
    sections: [
      {
        heading: "Type and risk group are different things",
        paragraphs: [
          "There are different types of MDS, based on which blood cells are affected, how many immature cells called blasts there are, and whether there are genetic changes in the cells. As well as the type, doctors put MDS into a risk group.",
          "The names for the types are complicated. Your haematologist or clinical nurse specialist can explain the type you have and what it means.",
        ],
      },
      {
        heading: "The main types",
        paragraphs: [
          "Blood Cancer UK describes six main types. In some, just one type of blood cell in the bone marrow is abnormal; in others, two or three are.",
          "In MDS with ring sideroblasts, red blood cells do not process iron properly. In MDS with excess blasts, there are too many blasts in the bone marrow or blood. In MDS with isolated del (5q), part of chromosome 5 is lost.",
          "Any MDS that does not fit these groups is called unclassifiable. Most MDS has no known cause, but a small number of people develop it after chemotherapy or radiotherapy, which is called secondary or therapy-related MDS.",
        ],
      },
      {
        heading: "How the risk group is worked out",
        paragraphs: [
          "Risk groups give an idea of how quickly or slowly MDS may develop, and the risk of it developing into acute myeloid leukaemia (AML). Your doctor works out your risk group from your blood counts, the number of blasts in your bone marrow and genetic test results.",
          "Doctors often use a system called the IPSS-R, which has five risk groups: very low, low, intermediate, high and very high. A newer system, the IPSS-M, uses more detailed genetic information.",
        ],
      },
      {
        heading: "Lower or higher risk",
        paragraphs: [
          "Your doctor might say you have lower risk or higher risk MDS. Lower risk includes the very low and low groups and some of the intermediate group; higher risk includes the rest of the intermediate group and the high and very high groups.",
          "This matters because the treatment approaches are different. If you have low risk MDS and few symptoms, you will usually just have regular check-ups. If you have higher risk MDS, treatment may include chemotherapy or a stem cell transplant.",
        ],
      },
      {
        heading: "Talking about it",
        paragraphs: [
          "Finding out about your risk group can be scary, especially if you have been told you are in a higher risk group. It is up to you how much you want to know, and if you do not want to hear about survival times, tell your hospital team; they will respect your wishes.",
          "Statistics can never tell you what will happen to you personally. Your healthcare team can explain which risk group you are in and what this may mean for you.",
        ],
      },
    ],
    helps: [
      "Ask your doctor which risk group you are in, and what this means.",
      "Tell your hospital team if you do not want to hear about survival times; they will respect your wishes.",
      "Think about your questions in advance, and take them with you to an appointment.",
      "Ask a Blood Cancer UK nurse if you hear or read something about your prognosis that you do not understand or that worries you.",
      "Ask whether your case has been discussed with an MDS specialist, or ask for a second opinion.",
    ],
    tryThisWeek: [
      "Ask which risk group you are in.",
      "Decide how much you want to know.",
      "Write your questions down.",
    ],
    ask: "What is my MDS risk group, and what does this mean?",
    interactive: {
      kind: "flip-cards",
      title: "The main types of MDS",
      intro: "Turn a card to see what each name means. Your haematology team can explain which one you have.",
      cards: [
        { id: "sld", front: "Single lineage dysplasia", when: "One kind of cell affected", back: "Just one type of blood cell in the bone marrow is abnormal, with low levels of one or two types in the blood." },
        { id: "mld", front: "Multilineage dysplasia", when: "Two or three kinds affected", back: "Two or three types of blood cell in the bone marrow are abnormal." },
        { id: "rs", front: "Ring sideroblasts", when: "A problem with iron", back: "Red blood cells do not process iron properly, which shows as a ring of iron inside the cell." },
        { id: "eb", front: "Excess blasts", when: "Too many immature cells", back: "There are too many blasts in the bone marrow or blood, with low levels of other blood cells." },
        { id: "5q", front: "Isolated del (5q)", when: "A change in chromosome 5", back: "Part of chromosome 5 is lost. A medicine called lenalidomide is used for this type." },
        { id: "unclassifiable", front: "Unclassifiable", when: "Does not fit the other groups", back: "Any MDS that does not fit the groups above. Your medical team can explain more about it." },
      ],
    },
    sources: [BC_TYPES, MAC_MDS, BC_PROGNOSIS, CRUK_WHAT, NHS_TREATMENT, BC_PLANNING, BC_NON_INTENSIVE],
    quiz: {
      question: "How many risk groups does the IPSS-R system have?",
      options: [{ text: "Five", right: true }, { text: "Two" }, { text: "Ten" }],
      why: "Doctors often use a system called the IPSS-R, which has five risk groups: very low, low, intermediate, high and very high.",
    },
  },
  {
    id: "mds-tests",
    kicker: "Tests",
    question: "What happens in the blood and bone marrow tests for MDS?",
    hook: "A blood test shows something is low. A bone marrow sample shows why, and genetic tests on it show which type of MDS you have.",
    short: "A full blood count shows if any blood cells are low. A bone marrow biopsy, usually from the back of the hip bone under local anaesthetic, confirms MDS, and genetic tests on the sample show the type and risk group. Results can take a few weeks, and you will have regular blood tests after that.",
    sections: [
      {
        heading: "Starting with a blood test",
        paragraphs: [
          "MDS is sometimes found when you have a blood test for another reason, before you have any symptoms. A blood test called a full blood count checks the number of each type of blood cell, and in MDS at least one is usually low.",
          "Many conditions can cause low blood counts, so your doctor will ask about your health and examine you to rule out other causes. You may be referred to a specialist blood doctor called a haematologist.",
        ],
      },
      {
        heading: "The bone marrow biopsy",
        paragraphs: [
          "A bone marrow biopsy is usually needed to confirm the diagnosis. A small sample is taken with a needle, usually from the back of the hip bone, and looked at under a microscope.",
          "You usually have a local anaesthetic to numb the area, and you can ask for medicine to help you relax. The appointment takes about 20 to 30 minutes, but the biopsy itself only takes a few minutes.",
          "It may feel uncomfortable for a few seconds when the liquid marrow is drawn out. Afterwards you may ache or feel bruised for a few days, and painkillers such as paracetamol can help.",
        ],
      },
      {
        heading: "Genetic tests",
        paragraphs: [
          "The bone marrow sample is tested for changes in the chromosomes and genes of the blood cells. This helps confirm MDS, and shows which type you have and your risk group.",
          "Sometimes the results are not clear. If so, your doctor may monitor you and repeat the bone marrow test later.",
        ],
      },
      {
        heading: "Waiting for results",
        paragraphs: [
          "It can take a few weeks to get the results. Try not to worry if they take a long time; it does not definitely mean anything is wrong, and you can call the hospital or GP for an update.",
          "Waiting can be a difficult time. It may help to talk to family, friends or your clinical nurse specialist, and to bring someone with you when you get the results.",
        ],
      },
      {
        heading: "Tests from now on",
        paragraphs: [
          "After diagnosis you will usually have regular blood tests to monitor the MDS. Some people need repeat bone marrow tests to check on its progress, or to see how well treatment has worked.",
        ],
      },
    ],
    helps: [
      "Tell the doctor or nurse before the biopsy if you take medicine to thin the blood.",
      "Ask for medicine to help you relax during the biopsy if you want it.",
      "If you have a sedative, do not drive for 24 hours, and have someone take you home and stay with you overnight.",
      "Call the hospital or GP if you are worried about how long your results are taking.",
      "Bring someone with you for support when you get your results.",
      "Ask your treatment team how often you need blood tests, and where to go for them.",
    ],
    tryThisWeek: [
      "Mention any blood thinners first.",
      "Arrange a lift if you are sedated.",
      "Ask how often your bloods are checked.",
    ],
    ask: "How often will my blood be checked, and will I need more bone marrow tests?",
    interactive: {
      kind: "timeline",
      title: "A bone marrow biopsy, step by step",
      steps: [
        { id: "before", when: "Before", title: "Getting ready", points: ["Tell the doctor or nurse if you take medicine to thin the blood.", "A local anaesthetic numbs the area; you can ask for a sedative."] },
        { id: "during", when: "During", title: "A few minutes", points: ["You lie on your side and a needle takes a sample from the hip bone.", "It may feel uncomfortable for a few seconds."] },
        { id: "after", when: "Straight after", title: "A dressing", points: ["You can remove the dressing after 24 hours.", "If you had a sedative, do not drive for 24 hours."] },
        { id: "days", when: "The next few days", title: "Some aching", points: ["You may ache or feel bruised for a few days.", "Painkillers such as paracetamol can help."] },
        { id: "results", when: "A few weeks later", title: "Results", points: ["A specialist explains what the results mean and what happens next.", "You may want to bring someone with you."] },
      ],
    },
    sources: [NHS_SYMPTOMS, BC_TESTS, MAC_MDS, NHS_TESTS, MAC_BIOPSY, CRUK_TREATMENT],
    quiz: {
      question: "How long does the bone marrow biopsy itself usually take?",
      options: [{ text: "A few minutes", right: true }, { text: "About two hours" }, { text: "A whole day" }],
      why: "The appointment takes about 20 to 30 minutes, but the biopsy itself only takes a few minutes.",
    },
  },
  {
    id: "mds-counts",
    kicker: "Your results",
    question: "What do my blood counts mean?",
    hook: "Haemoglobin, platelets, white cells, neutrophils and blasts: five numbers your team watches, and what each one tells them.",
    short: "A blood count is the number of each type of blood cell in your blood, and MDS usually makes at least one lower than normal. Haemoglobin carries oxygen, platelets help the blood clot, and neutrophils help fight infection. Healthy ranges vary, so ask your team what your numbers mean for you.",
    sections: [
      {
        heading: "What a blood count is",
        paragraphs: [
          "A blood count means the number of each type of blood cell in your blood. MDS usually causes at least one of your blood counts to be lower than normal, and the medical name for low blood counts is cytopenias.",
          "Healthy blood counts can vary with sex, age and ethnicity. Ask your medical team what your results mean, because they know what is normal for you.",
        ],
      },
      {
        heading: "Haemoglobin and red cells",
        paragraphs: [
          "Haemoglobin is found in red blood cells and carries oxygen around the body. In someone healthy, it can range from 115 to 180 grams per litre.",
          "Too few healthy red blood cells is called anaemia. It can make you feel weak and tired, breathless even with light exercise, and dizzy or light-headed.",
        ],
      },
      {
        heading: "Platelets",
        paragraphs: [
          "Platelets help the blood to clot, to prevent uncontrolled bleeding. In someone healthy, the level can range from 150 to 400 billion cells per litre.",
          "A low platelet count can make you bruise and bleed more easily than usual, with nosebleeds or bleeding gums.",
        ],
      },
      {
        heading: "White cells and neutrophils",
        paragraphs: [
          "The white cell count measures all the different types of white blood cell together. In someone healthy, it can range from 4 to 11 billion cells per litre.",
          "Neutrophils are white cells that help fight infections, and they are generally the most useful to monitor in MDS. A low level is called neutropenia, and it makes it harder to fight infections.",
        ],
      },
      {
        heading: "Blasts",
        paragraphs: [
          "Blasts are very young blood cells. In some types of MDS, too many are made, and they build up in the bone marrow and blood, leaving less room for healthy cells.",
          "Your doctor may measure your blasts with blood tests and bone marrow biopsies, and a rising number could be a sign the MDS is progressing. But a change does not always mean that; your doctor looks at a range of things before deciding whether you need treatment.",
        ],
      },
    ],
    helps: [
      "Ask your medical team what your blood test results and numbers mean, because they know what is normal for you.",
      "Keep a symptom diary between blood tests, so changes are easier to notice and report.",
      "Tell your doctor or nurse about any changes in symptoms, such as tiredness, breathlessness, bruising or bleeding.",
      "Ask your treatment team how often you need to have blood tests.",
    ],
    tryThisWeek: [
      "Ask what your numbers mean.",
      "Start a symptom diary.",
      "Report new bruises or tiredness.",
    ],
    ask: "Which of my blood counts are low, and what do my numbers mean for me?",
    interactive: {
      kind: "flip-cards",
      title: "Your blood count, card by card",
      intro: "Turn a card to see what each result measures. Healthy ranges vary, so ask your team what is normal for you.",
      cards: [
        { id: "hb", front: "Haemoglobin (Hb)", when: "Healthy: 115 to 180 grams per litre", back: "It carries oxygen around the body. Too few healthy red cells is anaemia, which can make you tired, weak and breathless." },
        { id: "platelets", front: "Platelets", when: "Healthy: 150 to 400 billion per litre", back: "They help the blood to clot. A low count can make you bruise and bleed easily." },
        { id: "wbc", front: "White blood cells", when: "Healthy: 4 to 11 billion per litre", back: "This counts all the types of white blood cell together. They fight infections." },
        { id: "neutrophils", front: "Neutrophils", when: "The most useful to watch in MDS", back: "These white cells help fight infections. A low level, called neutropenia, makes infections harder to fight." },
        { id: "blasts", front: "Blasts", when: "Measured in blood and bone marrow", back: "Very young blood cells. A rising number could be a sign the MDS is progressing, but your doctor looks at a range of things." },
      ],
    },
    sources: [BC_TESTS, BC_SYMPTOMS, MAC_MDS, LEUKAEMIA_CARE, BC_MONITORING],
    quiz: {
      question: "What is the medical name for low blood counts?",
      options: [{ text: "Cytopenias", right: true }, { text: "Blasts" }, { text: "Platelets" }],
      why: "MDS usually causes at least one of your blood counts to be lower than normal, and the medical name for low blood counts is cytopenias.",
    },
  },
  {
    id: "mds-watch-wait",
    kicker: "Monitoring",
    question: "Why am I being watched instead of treated?",
    hook: "Being told you have blood cancer but do not need treatment can feel strange. For lower risk MDS with few symptoms, waiting is safe and keeps treatment for when it will do most good.",
    short: "If your doctor does not think you need treatment yet, you will go on active monitoring, also called watch and wait. It is usually for lower risk MDS with few or no worrying symptoms, and saving treatment for later is safe. You have regular blood tests, and many people stay on monitoring for years.",
    sections: [
      {
        heading: "What it means",
        paragraphs: [
          "If your doctor does not think you need treatment for MDS, you will go on active monitoring. This means you have regular check-ups to keep an eye on the MDS. It is also called watch and wait.",
          "It is usually recommended if you have lower risk MDS and few or no worrying symptoms. If you have very low, low or intermediate risk MDS without symptoms, you may not need treatment straight away.",
        ],
      },
      {
        heading: "Why wait?",
        paragraphs: [
          "Saving treatment for later is safe in this situation, and means the treatment will have more impact if you need it later. You also avoid possible side effects of treatment for as long as possible.",
          "Many people stay on active monitoring for years without needing any treatment. You will not start treatment until your doctor thinks it is the right time.",
        ],
      },
      {
        heading: "At your check-ups",
        paragraphs: [
          "Check-ups involve blood tests, which may be done at the hospital or at your GP surgery. Your doctor or nurse will also ask about symptoms such as tiredness, feeling breathless, bruising or bleeding easily.",
          "Your doctor looks for changes, such as your blood counts going down. Low counts on their own do not always need treatment, but low counts together with symptoms could be a sign you need to start.",
          "Results are often discussed by phone or video call, which many people find convenient. But you can ask to have your appointments face to face if you prefer.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "Ask who you should contact with concerns between appointments. Usually there will be a clinical nurse specialist, who will often be your main point of contact.",
          "A symptom diary helps you notice if anything changes and makes it easier to report. Tell your doctor if anything changes; it does not always mean the MDS is progressing.",
          "If you are worried or notice any new symptoms between appointments, tell your haematologist or clinical nurse specialist as soon as possible.",
        ],
      },
      {
        heading: "The feelings it brings",
        paragraphs: [
          "Being on watch and wait can be tough emotionally. It might feel strange to be told you have blood cancer but do not need treatment, and people often say their anxiety rises as the next check-up comes nearer.",
          "Talk to your doctor or nurse if you feel anxious about being on active monitoring. They may be able to reassure you, or refer you for counselling, and in England you can refer yourself.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or nurse who to contact if you have concerns between appointments.",
      "Keep a symptom diary, and tell your doctor if anything changes.",
      "Tell your haematologist or clinical nurse specialist about new symptoms as soon as possible.",
      "Bring someone with you, or a notebook, to your check-ups.",
      "Talk to your doctor or nurse if you feel anxious about being on active monitoring.",
      "Ask for face-to-face appointments if you prefer them to phone or video calls.",
    ],
    tryThisWeek: [
      "Find your key contact's number.",
      "Start a symptom diary.",
      "Take a notebook to check-ups.",
    ],
    ask: "How often will my blood be checked, and what changes would mean starting treatment?",
    interactive: {
      kind: "scenarios",
      title: "Life on watch and wait",
      scenarios: [
        {
          id: "bruises",
          situation: "Between blood tests, you notice you are getting more bruises.",
          options: [{ text: "Tell your haematologist or nurse soon", best: true }, { text: "Wait for your next check-up" }],
          why: "If you are worried or notice any new symptoms between appointments, tell your haematologist or clinical nurse specialist as soon as possible.",
        },
        {
          id: "friend",
          situation: "A friend asks why you are not having treatment.",
          options: [{ text: "Explain that saving treatment for later is safe", best: true }, { text: "Agree that something must be wrong" }],
          why: "Saving treatment for later is safe in this situation, and means the treatment will have more impact if you need it later.",
        },
        {
          id: "anxious",
          situation: "You feel more and more anxious as your check-up gets closer.",
          options: [{ text: "Talk to your doctor or nurse about it", best: true }, { text: "Keep it to yourself" }],
          why: "Talk to your doctor or nurse if you feel anxious about being on active monitoring. They may be able to reassure you, or refer you for counselling.",
        },
        {
          id: "video",
          situation: "Your results are offered by video call, but you would rather be seen in person.",
          options: [{ text: "Ask for a face-to-face appointment", best: true }, { text: "Accept and say nothing" }],
          why: "You can ask to have your appointments face to face if you prefer.",
        },
      ],
    },
    sources: [BC_MONITORING, MAC_MDS, BC_MONITORING_FEELINGS, BC_MONITORING_EXPECT],
    quiz: {
      question: "Why can waiting be the right choice in lower risk MDS with few symptoms?",
      options: [{ text: "Treatment will have more impact later, and side effects are avoided", right: true }, { text: "MDS never changes" }, { text: "There is no treatment for MDS" }],
      why: "Saving treatment for later is safe in this situation, and means the treatment will have more impact if you need it later.",
    },
  },
  {
    id: "mds-transfusions",
    kicker: "Treatment",
    question: "What should I know about blood transfusions?",
    hook: "Many people with MDS have regular transfusions. Knowing what happens, how often, and what to watch for afterwards makes them easier.",
    short: "Many people with MDS need blood transfusions to increase their healthy blood cells: red cells for anaemia, and platelets for bleeding. A transfusion usually takes up to 4 hours in hospital. Frequent transfusions can build up iron, so your team checks your iron levels.",
    sections: [
      {
        heading: "Why transfusions help",
        paragraphs: [
          "Many people with MDS need blood transfusions to increase their number of healthy blood cells. You are given blood donated by someone else, usually through a thin plastic tube into a vein in your arm.",
          "Red blood cell transfusions are the most common type. They help with symptoms of anaemia, such as tiredness and shortness of breath. A platelet transfusion may be needed if your platelets are too low and you have bleeding.",
        ],
      },
      {
        heading: "What happens",
        paragraphs: [
          "Blood transfusions take place in hospital. A blood sample is taken first to check the donor blood is the right blood group for you, and your pulse, temperature and blood pressure are checked before, during and after.",
          "A transfusion usually takes up to 4 hours, but it can take longer depending on how much blood you need. You can usually go home afterwards unless you are very unwell.",
        ],
      },
      {
        heading: "How often, and how you feel",
        paragraphs: [
          "Some people need transfusions every few months, and others every week or so. Once you start having regular transfusions, the time between them usually gets gradually shorter.",
          "Your symptoms of anaemia should improve, though it can take a few days before you start to feel better. If they come back well before your next transfusion is due, tell your hospital team; they might shorten the time between transfusions, or give you more blood.",
        ],
      },
      {
        heading: "Iron from transfusions",
        paragraphs: [
          "Red blood cells contain a lot of iron, so frequent transfusions can lead to a build-up of iron in the body. Too much iron can damage the heart and liver, so your hospital team will monitor your iron levels.",
          "If your iron levels are too high, you might need medicine to reduce them, called iron chelation. Desferrioxamine is given as a drip, and deferasirox comes as tablets.",
        ],
      },
      {
        heading: "Side effects and when to get help",
        paragraphs: [
          "Many people have no side effects. Mild ones include a high temperature, feeling shivery or a rash, and slowing down or stopping the transfusion usually helps. Tell your healthcare team immediately if you have any trouble breathing.",
          "Complications can happen hours, days or even weeks later. Ask for an urgent GP appointment or contact NHS 111 if, after a transfusion, you have a high temperature or feel hot, cold or shivery, very little or very dark pee, or yellowing skin or eyes, and tell them you recently had a transfusion.",
          "Call 999 if you have severe difficulty breathing, chest pain, or tingling or swelling in your mouth or throat. Do not drive yourself to A&E.",
        ],
      },
    ],
    helps: [
      "Tell your hospital team if your anaemia symptoms come back well before your next transfusion is due.",
      "If you need frequent transfusions, expect your team to check your iron levels, and ask what they show.",
      "Tell your healthcare team immediately if you have any trouble breathing during a transfusion.",
      "Ask for an urgent GP appointment or contact NHS 111 if you feel hot, cold or shivery after a transfusion.",
      "Call 999 if you have severe difficulty breathing or chest pain after a transfusion, and do not drive yourself to A&E.",
    ],
    tryThisWeek: [
      "Note when anaemia symptoms return.",
      "Ask about your iron levels.",
      "Know when to call 111 or 999.",
    ],
    ask: "How often am I likely to need transfusions, and how will you check my iron levels?",
    interactive: {
      kind: "signs",
      title: "After a transfusion",
      intro: "Tick any you have had since a transfusion. Ask for an urgent GP appointment or contact NHS 111, and tell them you recently had a transfusion.",
      signs: [
        "A high temperature, or feeling hot, cold or shivery",
        "Aching muscles for no reason",
        "Feeling sick or vomiting",
        "Blood in my pee, or very little or very dark pee",
        "Bleeding from my mouth, bottom, nose or eyelids",
        "Yellowing of my skin or the whites of my eyes",
        "Lower back pain",
      ],
      after: "Call 999 if you have severe difficulty breathing, chest pain, or tingling or swelling in your mouth or throat. Do not drive yourself to A&E.",
      copyHeading: "Symptoms since my transfusion",
    },
    sources: [BC_SUPPORTIVE, NHS_TRANSFUSION, MAC_MDS, CRUK_TREATMENT],
    quiz: {
      question: "How long does a blood transfusion usually take?",
      options: [{ text: "Up to 4 hours", right: true }, { text: "About 10 minutes" }, { text: "Two days" }],
      why: "A transfusion usually takes up to 4 hours, but it can take longer depending on how much blood you need.",
    },
  },
  {
    id: "mds-treatments",
    kicker: "Treatment",
    question: "What medicines and other treatments are used for MDS?",
    hook: "Some treatments ease symptoms, some slow MDS down, and a few aim to get rid of it. Which you are offered depends on your type, your risk group and you.",
    short: "Treatment depends on your type of MDS, risk group, symptoms, general health and wishes. Supportive treatment such as transfusions and growth factors eases symptoms; azacitidine and lenalidomide can help control MDS; intensive treatment is right for only some people. Tell your team about any side effects.",
    sections: [
      {
        heading: "What decides your treatment",
        paragraphs: [
          "Treatment depends on your symptoms, the type of MDS, your risk group, your age and general health, and your own wishes. A team of specialists, called a multidisciplinary team, plans the treatment they feel is best for you.",
          "Not everyone needs active treatment. Supportive care controls symptoms, non-intensive treatment tries to slow MDS down and improve blood counts, and intensive treatment aims to get rid of it but is not right for everyone.",
        ],
      },
      {
        heading: "Supportive treatment",
        paragraphs: [
          "Supportive treatment helps prevent or control symptoms. It usually means blood transfusions, medicines called growth factors that help your body make more blood cells, and antibiotics for infections.",
          "Growth factors are injections under the skin. Erythropoietin increases red blood cells and can reduce the number of transfusions you need, and G-CSF increases white blood cells. A nurse can sometimes teach you how to give them yourself.",
        ],
      },
      {
        heading: "Azacitidine",
        paragraphs: [
          "Azacitidine is a chemotherapy drug for higher risk MDS when a stem cell transplant is not possible or not wanted. It is given as injections under the skin, and you go into hospital as a day patient to have them.",
          "Each cycle is usually 7 days of injections, followed by at least 3 weeks off. You usually have at least 6 cycles, and you can keep having it for as long as it works.",
          "Side effects include pain or redness where the injection goes in, feeling sick and feeling tired. It can also lower your blood counts for a short time, which raises the risk of infection, anaemia, and bruising or bleeding.",
        ],
      },
      {
        heading: "Lenalidomide and immunosuppressants",
        paragraphs: [
          "Lenalidomide is for a type of MDS with a genetic change called isolated del (5q). It comes as capsules, usually taken for 21 days followed by 7 days off, and can help with symptoms and reduce the need for blood transfusions.",
          "In a few people with MDS, drugs that suppress the immune system, such as anti-thymocyte globulin and ciclosporin, can improve the blood count. This treatment is not suitable for everyone.",
        ],
      },
      {
        heading: "Side effects and clinical trials",
        paragraphs: [
          "Your hospital team can tell you what side effects you might get, and everyone reacts differently. Tell them about any you have, as there are often medicines or treatments that can help, and your doctor may be able to adjust your treatment.",
          "Chemotherapy and some other treatments may affect the development of an unborn baby, so effective contraception is important, and chemotherapy may affect fertility. Doctors are always researching new treatments, and you may be offered a clinical trial.",
        ],
      },
    ],
    helps: [
      "Ask what treatment is recommended and why, and what its aim is.",
      "Tell your hospital team about any side effects you have.",
      "Save your 24-hour hospital contact numbers in your phone, or keep them somewhere safe.",
      "Talk to your doctor before starting treatment if fertility is a concern.",
      "Ask whether a clinical trial might be suitable for you.",
      "Ask whether your treatment has been discussed with an MDS specialist, or ask for a second opinion.",
    ],
    tryThisWeek: [
      "Ask the aim of your treatment.",
      "Save the 24-hour number.",
      "Report any side effects.",
    ],
    ask: "What is the aim of my treatment, and what side effects should I expect?",
    interactive: {
      kind: "flip-cards",
      title: "MDS treatments at a glance",
      intro: "Turn a card to see what each treatment does and who it is for.",
      cards: [
        { id: "transfusions", front: "Blood transfusions", when: "Supportive treatment", back: "Red cells for anaemia, or platelets for bleeding, to increase your number of healthy blood cells." },
        { id: "growth", front: "Growth factors", when: "Supportive treatment", back: "Injections that help the bone marrow make more blood cells. Erythropoietin can reduce how many transfusions you need." },
        { id: "azacitidine", front: "Azacitidine", when: "Higher risk MDS, no transplant", back: "Chemotherapy injections for 7 days, then at least 3 weeks off, usually for at least 6 cycles." },
        { id: "lenalidomide", front: "Lenalidomide", when: "MDS with isolated del (5q)", back: "Capsules taken for 21 days, then 7 days off. It can reduce the need for blood transfusions." },
        { id: "immuno", front: "Immunosuppressants", when: "A few people with MDS", back: "Drugs such as ciclosporin that suppress the immune system can sometimes improve the blood count." },
        { id: "trials", front: "Clinical trials", when: "If one is suitable", back: "Doctors are always researching new treatments. Your haematologist may talk to you about taking part." },
      ],
    },
    sources: [NHS_TREATMENT, BC_PLANNING, MAC_MDS, LEUKAEMIA_CARE, BC_SUPPORTIVE, CRUK_TREATMENT, BC_NON_INTENSIVE, MAC_AZACITIDINE, BC_SIDE_EFFECTS],
    quiz: {
      question: "Who is lenalidomide mainly used for?",
      options: [{ text: "People with MDS with isolated del (5q)", right: true }, { text: "Everyone with MDS" }, { text: "Only people after a transplant" }],
      why: "Lenalidomide is for a type of MDS with a genetic change called isolated del (5q).",
    },
  },
  {
    id: "mds-transplant",
    kicker: "Treatment",
    question: "Could a stem cell transplant be right for me?",
    hook: "A donor stem cell transplant gives the best chance of curing MDS, but it is tough and has serious risks, so it suits only some people.",
    short: "A stem cell transplant replaces the damaged stem cells in the bone marrow with healthy ones from a donor. It can sometimes cure MDS, but it can have serious complications, so it is only for people fit enough, with a suitable donor. You stay in hospital for at least 6 weeks, and full recovery can take up to a year.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "A stem cell transplant replaces the damaged stem cells in your bone marrow with healthy ones from a donor. For MDS, this is called an allogeneic transplant.",
          "It gives the best chance of curing MDS, and can sometimes cure it. But it can have serious complications, so it is not suitable for most people.",
        ],
      },
      {
        heading: "Who it may suit",
        paragraphs: [
          "It may be recommended if you have higher risk MDS and are in good health apart from your MDS, or lower risk MDS that other treatments have not helped. You also need a suitable donor.",
          "The donor needs a similar tissue type to you. The best match is usually a brother or sister, or another close relative, and if there is no match in the family, a donor can be found through the NHS Stem Cell Donor Registry.",
          "Your haematologist will talk to you about the risks and benefits if a transplant is a possibility for you.",
        ],
      },
      {
        heading: "Getting ready",
        paragraphs: [
          "First you have treatment called conditioning, which usually lasts 1 to 10 days. Full intensity conditioning uses high doses of chemotherapy; reduced intensity conditioning uses lower doses and can be a good option for people who are older or have other health conditions.",
          "Some people have intensive chemotherapy before the transplant. Azacitidine is also sometimes used to prepare the bone marrow and give the transplant the best chance of success.",
        ],
      },
      {
        heading: "The transplant and the hospital stay",
        paragraphs: [
          "The new stem cells are given through a thin tube into a vein, a bit like having a blood transfusion. It is not painful. The cells travel to your bone marrow and begin growing into new blood cells.",
          "You will need to be in hospital for at least 6 weeks, usually in your own room to lower the risk of infection. Visitors, including your care team, wear masks, gloves and gowns.",
        ],
      },
      {
        heading: "Recovering",
        paragraphs: [
          "It can take up to a year to fully recover. At home you have regular check-ups, usually weekly at first, and your team gives you medicines to protect you from infections and to stop your immune system attacking the new stem cells.",
          "Rest when you need to, slowly increase your exercise with short walks, eat small meals regularly and wash your hands often. Do not travel abroad unless your care team says you can.",
          "Call your care team now if you have a high temperature or other signs of infection, or sudden breathlessness or chest pain, and call NHS 111 if you are not sure how to contact them. Donor cells can sometimes attack the body, called graft versus host disease, so let your team know about any side effects.",
        ],
      },
    ],
    helps: [
      "Ask your haematologist about the risks and benefits of a transplant for you.",
      "Rest when you need to, and slowly increase how much exercise you do; short walks help at first.",
      "Wash your hands thoroughly and often, and follow your care team's advice about foods to avoid.",
      "Ask your hospital team how and when to have your childhood vaccinations again after the transplant.",
      "Call your care team now if you have a high temperature or other signs of infection.",
      "Ask for help with everyday tasks if you need it.",
    ],
    tryThisWeek: [
      "Ask about the risks and benefits.",
      "Plan help with everyday tasks.",
      "Keep your care team's number handy.",
    ],
    ask: "Would a transplant be right for me, and what would the risks and benefits be?",
    interactive: {
      kind: "timeline",
      title: "The road through a transplant",
      steps: [
        { id: "conditioning", when: "Before", title: "Conditioning", points: ["Chemotherapy, and sometimes radiotherapy, usually for 1 to 10 days.", "The transplant usually happens the day after it finishes."] },
        { id: "day", when: "Transplant day", title: "New stem cells", points: ["The cells go into a vein through a thin tube, like a transfusion.", "It is not painful, and you do not need a general anaesthetic."] },
        { id: "hospital", when: "The first weeks", title: "In hospital", points: ["You stay in hospital for at least 6 weeks.", "You are usually in your own room, to lower the risk of infection."] },
        { id: "home", when: "Back home", title: "Check-ups", points: ["Check-ups are usually weekly at first.", "Rest when you need to, and build up short walks."] },
        { id: "year", when: "Up to a year", title: "Recovery", points: ["It can take up to a year to fully recover.", "You will need your childhood vaccinations again."] },
      ],
    },
    sources: [NHS_TREATMENT, BC_INTENSIVE, MAC_MDS, CRUK_TREATMENT, NHS_SCT_HOW, BC_NON_INTENSIVE, NHS_SCT_RECOVERY, NHS_SCT_COMPLICATIONS, BC_PREVENTING],
    quiz: {
      question: "How long can it take to fully recover from a stem cell transplant?",
      options: [{ text: "Up to a year", right: true }, { text: "About a week" }, { text: "About a month" }],
      why: "It can take up to a year to fully recover.",
    },
  },
  {
    id: "mds-infections",
    kicker: "Staying safe",
    question: "How do I deal with infections when I have MDS?",
    hook: "With fewer healthy white cells, an infection can become an emergency quickly. Know the signs, know the number to call, and never wait.",
    short: "MDS can make infections more likely and harder to fight, and they can get worse very quickly. If you think you have an infection, get medical advice straight away: during treatment, call your emergency contact number, or 999 or A&E if you cannot get through. Signs of sepsis need 999 or A&E right away.",
    sections: [
      {
        heading: "Why infections matter",
        paragraphs: [
          "Having a low number of healthy white blood cells makes you more likely to get infections, and makes them harder for your body to fight. You might get lots of infections, or infections that last longer than normal.",
          "Infections can start suddenly and get worse very quickly. Symptoms can be very mild, because your immune system does not react as strongly, and you could still have an infection even if you do not have a fever.",
        ],
      },
      {
        heading: "Signs to look out for",
        paragraphs: [
          "Signs include a temperature that is higher or lower than normal, shivering and sweating, a sore throat or cough, diarrhoea, burning or stinging when you wee, feeling dizzy or faint, or new pain anywhere. Generally not feeling well can be a reason to get advice too.",
          "Most treating teams advise getting advice if your temperature reaches 37 and a half degrees or goes below 36 degrees. Paracetamol, steroids and aspirin can mask a fever, so tell emergency staff if you take them.",
        ],
      },
      {
        heading: "What to do, without waiting",
        paragraphs: [
          "Get medical advice straight away. If you are having treatment, call the emergency contact number you have been given and follow the advice. If you cannot get through, call 999 or get someone to drive you to A&E.",
          "If you are not having treatment, call your GP or hospital team, or call 111 if you cannot speak to them. If you are told to go to A&E, call 999 or get someone to drive you there.",
          "If you do not feel right and cannot get medical advice, go to A&E straight away. Tell staff you believe you are at risk of sepsis because you have a blood cancer diagnosis.",
        ],
      },
      {
        heading: "Sepsis",
        paragraphs: [
          "Sepsis is a serious condition caused by an infection, and it is an emergency. Call 999 or go to A&E right away if you have slurred speech or confusion, extreme shivering or muscle pain, no urine in a day, severe breathlessness, mottled or discoloured skin, or it feels like you are going to die.",
          "Sepsis can be treated with antibiotics, which you should get within one hour of arriving at hospital. Most people recover from sepsis.",
        ],
      },
      {
        heading: "Lowering your risk",
        paragraphs: [
          "Your doctor will probably recommend vaccinations, such as against covid, flu, pneumonia and shingles. People with weak immune systems should not have live vaccines, and if you are offered a shingles vaccine, you can safely have Shingrix, which is not live.",
          "Clean your hands often, clean cuts straight away, use a soft toothbrush, avoid sharing towels or cups, and wear gloves for gardening. Stay away from people with infections, and ask your hospital team whether you should avoid crowded places.",
          "If worries about infection become overwhelming, talk to your hospital team. While it is important to manage your risk, it is also important to live your life and do the things you enjoy.",
        ],
      },
    ],
    helps: [
      "Write your emergency contact number somewhere you can easily find it.",
      "Get medical advice straight away if you think you have an infection; do not wait.",
      "Tell A&E staff you are at risk of sepsis because you have a blood cancer diagnosis.",
      "Ask your hospital team which vaccinations you need, and which are safe for you.",
      "Clean your hands often with soap and water, or use hand gel if you cannot wash them.",
      "Have a bag ready in case you need to go to A&E or stay in hospital.",
    ],
    tryThisWeek: [
      "Save your emergency number.",
      "Pack a bag for A&E.",
      "Ask which vaccinations you need.",
    ],
    ask: "Who should I call if I get a temperature or signs of infection, day or night?",
    interactive: {
      kind: "scenarios",
      title: "When an infection might be starting",
      scenarios: [
        {
          id: "temperature",
          situation: "During treatment, your temperature reaches 37 and a half degrees.",
          options: [{ text: "Call your emergency contact number now", best: true }, { text: "Take paracetamol and wait until morning" }],
          why: "Get medical advice straight away. If you are having treatment, call the emergency contact number you have been given and follow the advice.",
        },
        {
          id: "no-answer",
          situation: "You cannot get through to the number you were given.",
          options: [{ text: "Call 999 or get a lift to A&E", best: true }, { text: "Try again tomorrow" }],
          why: "If you cannot get through, call 999 or get someone to drive you to A&E.",
        },
        {
          id: "off-treatment",
          situation: "You are not having treatment, and you feel shivery with a sore throat.",
          options: [{ text: "Call your GP or hospital team, or 111", best: true }, { text: "Wait a few days to see" }],
          why: "If you are not having treatment, call your GP or hospital team, or call 111 if you cannot speak to them.",
        },
        {
          id: "sepsis",
          situation: "You feel confused and very breathless.",
          options: [{ text: "Call 999 or go to A&E right away", best: true }, { text: "Book a routine GP appointment" }],
          why: "Call 999 or go to A&E right away if you have slurred speech or confusion, extreme shivering or muscle pain, no urine in a day, or severe breathlessness.",
        },
      ],
    },
    sources: [BC_SYMPTOMS, BC_INFECTION_SYMPTOMS, MAC_INFECTION, BC_AE, BC_SEPSIS, BC_PREVENTING],
    quiz: {
      question: "If you think you have an infection, what should you do?",
      options: [{ text: "Get medical advice straight away", right: true }, { text: "Wait a day or two" }, { text: "Only act if you have a fever" }],
      why: "Get medical advice straight away.",
    },
  },
  {
    id: "mds-fatigue",
    kicker: "Living well",
    question: "Why am I so tired, and what helps?",
    hook: "Anaemia is common in MDS, and fatigue can hit even when you have rested. Treatment, pacing and a little activity can all help.",
    short: "About 8 out of 10 people with MDS have anaemia, which can leave you weak, tired and breathless. Transfusions and growth factors can treat it, so tell your team if tiredness changes or comes back early. Balancing rest with some activity, pacing your day and asking for help all make a difference.",
    sections: [
      {
        heading: "Why MDS makes you tired",
        paragraphs: [
          "Anaemia, having too few healthy red blood cells, is common in MDS: about 8 out of 10 people with MDS have it. Red blood cells carry oxygen, so anaemia can leave you weak and tired, breathless even with light exercise, and dizzy or light-headed.",
          "Fatigue is more than just tiredness. It can affect you mentally and physically, and can hit even when you are well rested. The cancer itself, current or past treatment, medicines, stress or depression can all play a role.",
        ],
      },
      {
        heading: "Treating anaemia",
        paragraphs: [
          "Red blood cell transfusions help with the symptoms of anaemia, and erythropoietin injections can help the bone marrow make more red blood cells and reduce the number of transfusions you need.",
          "If your symptoms of anaemia come back well before your next transfusion is due, let your hospital team know.",
          "If fatigue is new for you, or it gets worse, tell your hospital team so they can check whether it means a change to your health.",
        ],
      },
      {
        heading: "Balancing rest and activity",
        paragraphs: [
          "You need both rest and activity to fight fatigue. It may sound strange, but being more active actually reduces tiredness.",
          "Being active is usually safe for most people with blood cancer, but speak to your hospital team about activities you want to try first. If you have not done much walking before, start with five or 10 minutes a day and slowly build it up.",
          "It is normal to feel sore or achy after being active. But if you get dizzy, feel unwell or have any unusual symptoms, stop and speak to a doctor.",
        ],
      },
      {
        heading: "Pacing your days",
        paragraphs: [
          "Keep track of how you feel each day and week, such as with a fatigue diary, and plan rest in between activities. If you get tired easily, try to work out your priorities each day.",
          "It is OK to ask for help. Think about what friends or family could do for you, and if you are still working, what changes would help.",
          "Be kind to yourself. You are not being lazy, and if you need a rest day, have one.",
        ],
      },
      {
        heading: "More help",
        paragraphs: [
          "Your medical team or GP may refer you to an occupational therapist or physiotherapist, who can show you ways to pace yourself and make the most of your energy. Eating a healthy, balanced diet and resting when you are tired may also help you feel better.",
        ],
      },
    ],
    helps: [
      "Tell your hospital team if fatigue is new or gets worse.",
      "Let your hospital team know if anaemia symptoms come back well before your next transfusion.",
      "Balance rest with some activity, and build up slowly.",
      "Keep a fatigue diary, and plan rest in between activities.",
      "Think about which jobs friends or family could take on.",
      "Ask your medical team or GP about seeing an occupational therapist or physiotherapist.",
    ],
    tryThisWeek: [
      "Tell your team if tiredness changes.",
      "Walk for five or 10 minutes a day.",
      "Plan rests between activities.",
    ],
    ask: "Could my tiredness be anaemia, and would a transfusion or other treatment help?",
    interactive: {
      kind: "risk-check",
      title: "What could be adding to it?",
      intro: "Tick any that apply. Many of these can be helped, so share them with your hospital team.",
      items: [
        { id: "anaemia", label: "Breathless, dizzy or light-headed", note: "These can be symptoms of anaemia. Tell your team, especially if they come back before a transfusion is due.", changeable: true },
        { id: "treatment", label: "Treatment or medicines", note: "Current or past treatment and medicines can play a role in fatigue. Tell your healthcare team.", changeable: true },
        { id: "mood", label: "Stress, low mood or worry", note: "Feeling depressed or anxious can also cause fatigue. There is support for your mind and emotions.", changeable: true },
        { id: "inactive", label: "Moving less than before", note: "Being more active actually reduces tiredness. Start small and build up slowly.", changeable: true },
        { id: "too-much", label: "Doing too much at once", note: "Plan rest in between activities, and work out your priorities each day.", changeable: true },
        { id: "mds", label: "The MDS itself", note: "The cancer itself can play a role in fatigue. Your hospital team may be able to help.", changeable: false },
      ],
    },
    sources: [LEUKAEMIA_CARE, BC_SYMPTOMS, BC_FATIGUE, BC_SUPPORTIVE, MAC_MDS, BC_ACTIVE, CRUK_COPING],
    quiz: {
      question: "What does Blood Cancer UK say helps fight fatigue?",
      options: [{ text: "Both rest and activity", right: true }, { text: "Rest alone" }, { text: "Pushing on without breaks" }],
      why: "You need both rest and activity to fight fatigue. It may sound strange, but being more active actually reduces tiredness.",
    },
  },
  {
    id: "mds-bleeding",
    kicker: "Staying safe",
    question: "Why do I bruise and bleed so easily?",
    hook: "Low platelets mean the blood does not clot as well. Knowing what to report, and what to avoid, keeps you safer.",
    short: "Platelets help the blood to clot, so a low number can make you bruise and bleed easily. Contact the hospital straight away on the 24-hour number about any unexplained bruising or bleeding; you may need a platelet transfusion. Avoid ibuprofen, aspirin and blood thinners unless your doctor recommends them.",
    sections: [
      {
        heading: "Why it happens",
        paragraphs: [
          "Platelets help your blood to clot. They stick together to stop bleeding if you have a cut or a bruise, so a low number of healthy platelets can make you bruise and bleed easily.",
          "You may have nosebleeds or bleeding gums, and if you have periods, they may be heavier and last longer than usual.",
        ],
      },
      {
        heading: "A rash to know about",
        paragraphs: [
          "You may get a rash of tiny spots of bleeding under the skin, called petechiae, often where clothes fit tightly, such as around the ankles or waist. The spots do not disappear when you press on them, and do not fade when you roll a glass over them.",
          "The spots can look red, brown or purple, and they can be harder to see on black or brown skin.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "If you have any unexplained bruising or bleeding during treatment, contact the hospital straight away on the 24-hour number. You may need a platelet transfusion.",
          "Look out for blood in your pee or poo too. Contact the hospital straight away on the 24-hour number, or call 999, if you have a severe headache, weakness in your body or changes to your speech.",
          "If you have MDS, tell your hospital team about any new symptoms straight away. They will tell you whether you need to see them, or your GP instead.",
        ],
      },
      {
        heading: "Lowering the risk",
        paragraphs: [
          "If you have low platelets, you should usually avoid blood thinning medicines and anti-inflammatory painkillers, such as ibuprofen and aspirin, unless your doctor recommends them.",
          "It is best to avoid activities with a high risk of injury, such as contact sports, climbing high ladders and cycling without a helmet. A soft bristle toothbrush can stop you making your gums bleed.",
        ],
      },
    ],
    helps: [
      "Contact the hospital straight away on the 24-hour number if you have any unexplained bruising or bleeding.",
      "Avoid ibuprofen, aspirin and other blood thinning medicines unless your doctor recommends them.",
      "Avoid contact sports, climbing high ladders and cycling without a helmet.",
      "Use a soft bristle toothbrush so you do not make your gums bleed.",
      "Tell your hospital team about any new symptoms straight away.",
    ],
    tryThisWeek: [
      "Save the 24-hour number.",
      "Check before taking painkillers.",
      "Switch to a soft toothbrush.",
    ],
    ask: "What should I do if I start bleeding, and which painkillers are safe for me?",
    interactive: {
      kind: "signs",
      title: "Bruising and bleeding to report",
      intro: "Tick any you have noticed. Contact the hospital straight away on the 24-hour number about any unexplained bruising or bleeding.",
      signs: [
        "Bruising more than usual",
        "Nosebleeds",
        "Bleeding gums",
        "Heavier or longer periods",
        "Blood in my pee or poo",
        "Tiny spots under the skin that do not fade",
      ],
      after: "Contact the hospital straight away on the 24-hour number, or call 999, if you have a severe headache, weakness in your body or changes to your speech.",
      copyHeading: "Bruising and bleeding I have noticed",
    },
    sources: [BC_SUPPORTIVE, BC_SYMPTOMS, NHS_SYMPTOMS, MAC_AZACITIDINE, BC_PREVENTING, BC_TESTS],
    quiz: {
      question: "Which painkillers should you usually avoid with low platelets, unless your doctor recommends them?",
      options: [{ text: "Ibuprofen and aspirin", right: true }, { text: "Every kind of painkiller" }, { text: "None at all" }],
      why: "If you have low platelets, you should usually avoid blood thinning medicines and anti-inflammatory painkillers, such as ibuprofen and aspirin, unless your doctor recommends them.",
    },
  },
  {
    id: "mds-mood",
    kicker: "Mood",
    question: "How do I cope with the worry and uncertainty of MDS?",
    hook: "MDS can bring a lot of not knowing. Ups and downs are normal, there are small things that help, and support is there, including right now if you need it.",
    short: "It is normal to go through emotional ups and downs with MDS, and the uncertainty of waiting can be hard. Staying connected, keeping active and focusing on the here and now can help, and your team can refer you for counselling. If you need urgent help, call 111 and select the mental health option, call Samaritans free on 116 123, or call 999 if you cannot keep yourself safe.",
    sections: [
      {
        heading: "Ups and downs are normal",
        paragraphs: [
          "Hearing that you have MDS can feel overwhelming, and for many people it has a big emotional impact. It is normal to go through lots of emotional ups and downs, and however you feel, it is OK.",
          "You might worry about whether treatment will work, or find the uncertainty of watch and wait hard. Lots of people say that waiting for test results causes anxiety.",
        ],
      },
      {
        heading: "Living with uncertainty",
        paragraphs: [
          "For some people, focusing on the here and now can stop them worrying too much about the future. Taking each day as it comes, spending time with people you love and appreciating good things can help.",
          "Statistics can never tell you what will happen to you personally. Your hospital team know you and your situation, and are the best people to ask.",
        ],
      },
      {
        heading: "Small things that help",
        paragraphs: [
          "Be kind to yourself, stay connected with others, and keep doing hobbies you enjoy. Physical activity is good for your mental health, and can help manage stress, anxiety and depression.",
          "Some people find that writing down how they feel helps, or mindfulness, such as concentrating on your breathing. Having something to look forward to can help too.",
        ],
      },
      {
        heading: "Support from others",
        paragraphs: [
          "Your hospital team should regularly ask you about your emotional health. They can refer you for counselling or other psychological support, and in England you can refer yourself for NHS counselling.",
          "Talking to people in a similar situation can help. MDS UK Patient Support Group, on 020 7733 7558, can put you in touch with local MDS support groups, and Leukaemia Care's freephone helpline is 08088 010 444.",
          "You can also call the Macmillan Support Line free on 0808 808 00 00, or Blood Cancer UK on 0808 2080 888.",
        ],
      },
      {
        heading: "If you are struggling right now",
        paragraphs: [
          "If you need urgent help for your mental health, call 111 and select the mental health option, or ask for an urgent GP appointment. In Northern Ireland, call your GP, GP out of hours service or local urgent and emergency care service.",
          "You can call Samaritans free on 116 123, any time, day or night. Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Talk to your doctor or nurse if you feel anxious; they can refer you for counselling.",
      "Stay connected with family and friends, and chat about things that are not related to your health.",
      "Try to stay active, building up gradually and pacing yourself.",
      "Ask MDS UK Patient Support Group about local MDS support groups.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "Call 999 or go to A&E if you do not feel you can keep yourself safe.",
    ],
    tryThisWeek: [
      "Tell someone close how you feel.",
      "Do one thing you enjoy.",
      "Save the Samaritans number.",
    ],
    ask: "Can you refer me for counselling or other psychological support?",
    interactive: {
      kind: "signs",
      title: "How I have been feeling",
      intro: "Tick any that fit. Sharing them can help your hospital team offer you the right support.",
      signs: [
        "Anxious about my health or the future",
        "Worried before check-ups or results",
        "Feeling low or depressed",
        "Feeling overwhelmed",
        "Pulling away from other people",
        "Struggling to cope",
      ],
      after: "If you need urgent help, call 111 and select the mental health option. Samaritans is free on 116 123. Call 999 or go to A&E if you cannot keep yourself safe.",
      copyHeading: "How I have been feeling",
    },
    sources: [NHS_TESTS, BC_SUPPORTIVE, BC_MIND, BC_MONITORING_FEELINGS, BC_PROGNOSIS, MAC_MENTAL_HEALTH, NHS_SUPPORT, BC_MONITORING, LEUKAEMIA_CARE, MAC_MDS, NHS_URGENT, SAMARITANS],
    quiz: {
      question: "Where can you get urgent help for your mental health by phone?",
      options: [{ text: "Call 111 and select the mental health option", right: true }, { text: "Wait for your next check-up" }, { text: "Only from your hospital team" }],
      why: "If you need urgent help for your mental health, call 111 and select the mental health option, or ask for an urgent GP appointment.",
    },
  },
];
