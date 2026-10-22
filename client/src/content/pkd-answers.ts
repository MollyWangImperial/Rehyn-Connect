import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Polycystic kidney disease page's pieces
// (content/library-conditions/digestion-more.ts). Every sentence was written from wording checked on
// 22 October 2026 on the pages listed under each answer's `sources`; nothing is added that those pages do
// not say. Most of it comes from the NHS, the PKD Charity, Kidney Care UK and NICE (TA358). General
// information only; it never replaces what a person's own GP or kidney team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const pkdc = (label: string, path: string): LearnSource => ({ label: `PKD Charity: ${label}`, url: `https://pkdcharity.org.uk/${path}` });

const ADPKD = "conditions/autosomal-dominant-polycystic-kidney-disease-adpkd/";
const NHS_ADPKD = nhs("Autosomal dominant polycystic kidney disease (ADPKD)", ADPKD);
const NHS_SYMPTOMS = nhs("Symptoms of ADPKD", `${ADPKD}symptoms/`);
const NHS_DIAGNOSIS = nhs("Diagnosis of ADPKD", `${ADPKD}diagnosis/`);
const NHS_TREATMENT = nhs("Treatment of ADPKD", `${ADPKD}treatment/`);
const NHS_COMPLICATIONS = nhs("Complications of ADPKD", `${ADPKD}complications/`);

const PKDC_BASICS = pkdc("ADPKD basics", "adpkd/what-is-adpkd/adpkd-basics");
const PKDC_CYSTS = pkdc("How are cysts formed?", "adpkd/what-is-adpkd/how-are-cysts-formed");
const PKDC_DIAGNOSED = pkdc("How is ADPKD diagnosed?", "adpkd/what-is-adpkd/how-is-adpkd-diagnosed");
const PKDC_GENETIC = pkdc("Genetic testing and counselling for ADPKD", "adpkd/what-is-adpkd/genetic-testing-and-counselling-for-adpkd");
const PKDC_BP = pkdc("High blood pressure", "adpkd/symptoms/high-blood-pressure");
const PKDC_PAIN = pkdc("Pain", "adpkd/symptoms/pain");
const PKDC_LIVER = pkdc("Polycystic liver disease", "adpkd/symptoms/polycystic-liver-disease");
const PKDC_ANEURYSM = pkdc("Brain aneurysms", "adpkd/symptoms/brain-aneurysms");
const PKDC_FAILURE = pkdc("Kidney failure", "adpkd/symptoms/kidney-failure");
const PKDC_MEDS = pkdc("Medications to treat ADPKD", "adpkd/treatment/medications-to-treat-adpkd");
const PKDC_AVOID = pkdc("Medicines to avoid if you have ADPKD", "adpkd/treatment/medicines-to-avoid");
const PKDC_TRANSPLANT = pkdc("Kidney transplants and ADPKD", "adpkd/treatment/kidney-transplants-and-adpkd");
const PKDC_DIALYSIS = pkdc("Introduction to dialysis", "adpkd/treatment/introduction-to-dialysis");
const PKDC_DIET = pkdc("Diet and lifestyle in ADPKD", "adpkd/life-with-adpkd/pkd-diet-and-lifestyle");
const PKDC_LIVING = pkdc("Living well", "adpkd/life-with-adpkd/living-well");
const PKDC_EMPLOYMENT = pkdc("Employment advice", "adpkd/life-with-adpkd/employment-advice");
const PKDC_TALKING = pkdc("Talking to your child about ADPKD", "adpkd/children-with-adpkd/talking-to-your-child-about-adpkd");
const PKDC_CHILDREN = pkdc("Symptoms of ADPKD and tests in children", "adpkd/children-with-adpkd/symptoms-and-testing-in-children");
const PKDC_INSURANCE = pkdc("Insurance", "get-help/insurance");
const PKDC_HELPLINE = pkdc("PKD Helpline", "get-help/pkd-helpline");
const PKDC_GROUPS = pkdc("PKD Support Groups", "get-help/pkd-support-groups");
const PKDC_EXERCISE = pkdc("PKD Exercise Programme", "get-help/pkd-exercise-programme");

const KCUK_ADPKD: LearnSource = {
  label: "Kidney Care UK: Autosomal dominant polycystic kidney disease (ADPKD)",
  url: "https://kidneycareuk.org/kidney-disease-information/kidney-conditions/autosomal-dominant-polycystic-kidney-disease-adpkd/",
};
const NICE_TA358: LearnSource = {
  label: "NICE: Tolvaptan for treating autosomal dominant polycystic kidney disease (TA358)",
  url: "https://www.nice.org.uk/guidance/ta358/chapter/1-Recommendations",
};

export const pkdAnswers: LearnArticle[] = [
  {
    id: "pkd-what-it-is",
    kicker: "Understanding",
    question: "What is polycystic kidney disease?",
    hook: "Fluid-filled cysts that grow slowly in both kidneys over many years. Most people stay well for decades.",
    short: "Autosomal dominant polycystic kidney disease, or ADPKD, is an inherited condition that causes fluid-filled sacs called cysts to grow in the kidneys. People are born with it, but it rarely causes problems until the cysts grow large enough to affect how the kidneys work, usually from the age of 30 to 40. There is no cure, but treatments help, and most people stay in good health for decades.",
    sections: [
      {
        heading: "Cysts in both kidneys",
        paragraphs: [
          "Autosomal dominant polycystic kidney disease, or ADPKD, is an inherited condition that causes small fluid-filled sacs called cysts to develop in the kidneys. It is the most common inherited condition to affect the kidneys, although it is still relatively uncommon.",
          "The cysts are not cancerous and the fluid inside them is harmless. ADPKD is not a disease you can catch.",
        ],
      },
      {
        heading: "How the cysts grow",
        paragraphs: [
          "Your kidneys contain fine tubes that filter your blood to make urine. In ADPKD, cysts form in these tubes when the cells lining a tube grow too fast, making a bulge that fills with fluid.",
          "The cysts can be as small as a pea or as large as a grapefruit. As they grow over the years, they squash the healthy kidney tissue and make the kidneys larger, and the kidneys tend to grow by about 5% each year.",
        ],
      },
      {
        heading: "There from birth, noticed later",
        paragraphs: [
          "Although children with ADPKD are born with the condition, it rarely causes noticeable problems until the cysts grow large enough to affect how the kidneys work. In most cases, this does not happen until a person is between 30 and 40 years of age.",
          "Most people with ADPKD live completely normal lives with very mild or no symptoms for most of the time. With the right care, people with ADPKD can stay healthy for much of their lives.",
        ],
      },
      {
        heading: "Who has it",
        paragraphs: [
          "It is estimated that up to 1 in every 1,000 to 2,500 people in the UK has ADPKD. That means there could be between 30,000 and 70,000 people in the UK with the condition.",
          "It can affect men and women and people of different ethnicities. Kidney Care UK says men tend to be more severely affected and are often diagnosed at a younger age.",
        ],
      },
      {
        heading: "What it can lead to",
        paragraphs: [
          "Kidney function may gradually fall until kidney failure occurs. On average, around half of people with ADPKD need treatment for kidney failure by the time they are 60, but the outlook varies a lot, and some people never get kidney failure.",
          "There is no cure, but treatments can help with many of its symptoms. Some people can take a medicine called tolvaptan to slow down kidney damage.",
        ],
      },
    ],
    helps: [
      "Have regular check-ups with your kidney doctor and GP throughout life.",
      "If you have not seen a kidney doctor yet, ask your GP to refer you.",
      "Keep to a healthy lifestyle, which may help to protect your kidney function.",
      "Contact the PKD Charity's confidential helpline on 0300 111 1234 for emotional support, practical advice and information.",
    ],
    tryThisWeek: [
      "Check when your next check-up is.",
      "Ask your GP about a kidney referral.",
      "Save the PKD helpline number.",
    ],
    ask: "How is ADPKD affecting my kidneys now, and what should I expect?",
    interactive: {
      kind: "flip-cards",
      title: "ADPKD, card by card",
      intro: "Turn each card to see what it means.",
      cards: [
        { id: "cysts", front: "Cysts", when: "Fluid-filled sacs", back: "Form in the fine tubes that filter blood. They can be as small as a pea or as large as a grapefruit." },
        { id: "kidneys", front: "Larger kidneys", when: "Over many years", back: "As the cysts grow, the kidneys tend to grow by about 5% each year." },
        { id: "liver", front: "The liver", when: "Often affected too", back: "Most people with ADPKD (8 out of 10) have liver cysts by their mid-thirties. The liver will probably still work well." },
        { id: "not-cancer", front: "Not cancer", when: "And not catching", back: "The cysts are not cancerous and the fluid inside them is harmless." },
        { id: "outlook", front: "The outlook", when: "It varies a lot", back: "Most people stay in good health for decades after diagnosis, and some never get kidney failure." },
      ],
    },
    sources: [NHS_ADPKD, PKDC_BASICS, PKDC_CYSTS, KCUK_ADPKD],
    quiz: {
      question: "Where do the cysts in ADPKD form?",
      options: [{ text: "In the kidneys' fine filtering tubes", right: true }, { text: "In the bladder" }, { text: "In the blood" }],
      why: "Your kidneys contain fine tubes that filter your blood to make urine. In ADPKD, cysts form in these tubes.",
    },
  },
  {
    id: "pkd-inheritance",
    kicker: "Causes",
    question: "How is polycystic kidney disease inherited?",
    hook: "One changed gene from one parent is enough. Each child of a parent with ADPKD has a one in two chance.",
    short: "ADPKD is caused by a fault in a gene, most often PKD1 or PKD2. One changed copy is enough to cause it, so a child of a parent with ADPKD has a 1 in 2 chance of having it. In up to 1 in 4 cases there is no known family history, and sometimes the change happens for the first time in the person themselves.",
    sections: [
      {
        heading: "One changed gene is enough",
        paragraphs: [
          "ADPKD is caused by a genetic fault that disrupts the normal development of some cells in the kidneys and causes cysts to grow. We all have two copies of each gene, one from each parent, and one changed copy of a gene linked to ADPKD is enough to cause the condition.",
          "Genes act like recipes, telling our cells how to make different proteins. The PKD1 and PKD2 genes are codes for proteins called polycystin 1 and polycystin 2, found on cells lining the kidney tubes that make urine.",
        ],
      },
      {
        heading: "PKD1 and PKD2",
        paragraphs: [
          "Faults in one of two genes cause most ADPKD. The NHS says PKD1 accounts for around 78% of cases and PKD2 for around 15%, and rarer gene changes can also cause it.",
          "Both types have the same symptoms, but they tend to be more severe with PKD1. People with a PKD2 change often get kidney failure in their 70s, while people with PKD1 often get it in their 50s.",
        ],
      },
      {
        heading: "A one in two chance for each child",
        paragraphs: [
          "A child has a 1 in 2 chance of developing ADPKD if one of their parents has the faulty PKD1 or PKD2 gene. This chance applies to each child, and it is pure chance which copy of the gene a child gets.",
          "If the gene change in the family is known and a relative does not have it, they do not have ADPKD, and their children cannot inherit it.",
        ],
      },
      {
        heading: "When there is no family history",
        paragraphs: [
          "In up to 1 in 4 cases, a person develops ADPKD without a known family history. The condition may never have been diagnosed in a relative, or a relative may have died before their symptoms were recognised.",
          "In around 1 in 10 cases, the gene change happens for the first time in the person themselves, and it is not known why. They can pass it on in the same way, although a small number of people with a new change cannot pass it on.",
        ],
      },
      {
        heading: "A rarer type",
        paragraphs: [
          "Autosomal recessive polycystic kidney disease, or ARPKD, is a rarer type that can only be inherited if both parents carry the faulty gene. In this type, problems usually start much earlier, during childhood.",
        ],
      },
    ],
    helps: [
      "Ask your kidney doctor or a genetics specialist to explain whether a new gene change applies to you.",
      "If you would like a genetic test, ask your GP or kidney doctor whether you can have one on the NHS.",
      "Talk through the pros and cons with a genetic counsellor, clinical geneticist or kidney doctor before deciding.",
      "If you are planning a family, ask your GP or kidney doctor to refer you to a genetics centre before becoming pregnant.",
    ],
    tryThisWeek: [
      "Ask whether a new gene change applies.",
      "Ask if NHS genetic testing is possible.",
      "Ask about a genetics referral.",
    ],
    ask: "Which gene change do I have, and what does it mean for my children?",
    interactive: {
      kind: "scenarios",
      title: "How it passes on",
      scenarios: [
        {
          id: "each-child",
          situation: "A parent has ADPKD and has three children.",
          options: [{ text: "Each child has a 1 in 2 chance", best: true }, { text: "Only the first child is at risk" }],
          why: "A child has a 1 in 2 chance of developing ADPKD if one of their parents has the faulty gene. This chance applies to each child.",
        },
        {
          id: "no-history",
          situation: "No one in your family is known to have ADPKD.",
          options: [{ text: "It can still happen", best: true }, { text: "It cannot be ADPKD" }],
          why: "In up to 1 in 4 cases, a person develops ADPKD without a known family history.",
        },
        {
          id: "negative",
          situation: "Your brother does not have the family's known gene change.",
          options: [{ text: "He does not have ADPKD", best: true }, { text: "He could still pass it on" }],
          why: "If the gene change in the family is known and a relative does not have it, they do not have ADPKD, and their children cannot inherit it.",
        },
        {
          id: "pkd2",
          situation: "Your ADPKD is caused by a PKD2 change.",
          options: [{ text: "It tends to be milder than PKD1", best: true }, { text: "It is always more severe" }],
          why: "Both types have the same symptoms, but they tend to be more severe with PKD1.",
        },
      ],
    },
    sources: [NHS_ADPKD, PKDC_GENETIC, PKDC_BASICS, KCUK_ADPKD],
    quiz: {
      question: "How many changed copies of an ADPKD gene does it take to cause the condition?",
      options: [{ text: "One", right: true }, { text: "Two" }, { text: "Three" }],
      why: "One changed copy of a gene linked to ADPKD is enough to cause the condition.",
    },
  },
  {
    id: "pkd-symptoms",
    kicker: "Symptoms",
    question: "What symptoms does polycystic kidney disease cause?",
    hook: "High blood pressure is often the first sign, and it is silent. Pain and blood in the urine are common too.",
    short: "ADPKD often causes no obvious problems until the age of 30 to 60. The most common problems are high blood pressure, pain in the tummy, side or lower back, blood in the urine, kidney stones and urinary tract infections. Some need quick advice: the NHS says to get advice from 111 or ask for an urgent GP appointment if you think you have a urinary tract infection or a kidney stone.",
    sections: [
      {
        heading: "Often quiet for years",
        paragraphs: [
          "ADPKD is present from birth, but it may not cause obvious problems until the cysts reach a size where they affect how well the kidneys work. In most cases, this does not happen until 30 to 60 years of age.",
          "Not everyone with ADPKD gets these problems, and they become more likely with age. The growth of cysts can cause pain, blood in the urine, high blood pressure, kidney stones, urinary tract infections and, eventually, loss of kidney function.",
        ],
      },
      {
        heading: "High blood pressure",
        paragraphs: [
          "Many experts consider high blood pressure to be the first effect of ADPKD. It often causes no obvious symptoms, so it is usually only found during routine testing.",
          "About 5 in every 10 people with ADPKD have high blood pressure. Very high blood pressure is rare, but it can cause a persistent headache, blurred or double vision, nosebleeds or shortness of breath, and the NHS says to see a GP straight away if you get these.",
        ],
      },
      {
        heading: "Pain",
        paragraphs: [
          "Pain in the tummy, side or lower back is often the first noticeable symptom. It can be severe, but is usually short-lived, lasting from a few minutes to several days.",
          "Common causes include a cyst getting larger, bleeding into a cyst, a kidney stone or a urinary tract infection. Six out of every 10 people with ADPKD have long-term pain.",
        ],
      },
      {
        heading: "Blood in your urine",
        paragraphs: [
          "Blood in the urine is another common early symptom, and about 6 in every 10 people with ADPKD see blood in their wee at times. It can happen when a tiny blood vessel in the wall of a cyst breaks.",
          "It can be frightening, but it is not usually a cause for concern, and most cases settle within a week without treatment. See a GP if you notice blood in your urine, so other possible causes can be checked.",
        ],
      },
      {
        heading: "Infections and stones",
        paragraphs: [
          "ADPKD does not make bladder infections more likely, but any that do develop could spread to the kidneys. The NHS says to get advice from 111 or ask for an urgent GP appointment if you have ADPKD and think you may have a urinary tract infection.",
          "ADPKD also raises the risk of kidney stones, which can cause intense pain in the back or side of the tummy. Get advice from 111 or ask for an urgent GP appointment if you think you may have a kidney stone.",
        ],
      },
    ],
    helps: [
      "Have your blood pressure checked regularly, as high blood pressure often causes no symptoms.",
      "See a GP straight away if you get a persistent headache, blurred or double vision, nosebleeds or shortness of breath.",
      "See a GP if you notice blood in your urine.",
      "Get advice from 111 or ask for an urgent GP appointment if you think you may have a urinary tract infection or a kidney stone.",
      "See your GP or kidney doctor right away if you have pain in your back, side or tummy with a high or low temperature, which can be a sign of a cyst infection.",
    ],
    tryThisWeek: [
      "Get your blood pressure checked.",
      "Report any blood in your urine.",
      "Call 111 about a possible infection.",
    ],
    ask: "Which of my symptoms come from ADPKD, and which should I report quickly?",
    interactive: {
      kind: "signs",
      title: "Symptoms to tell your team",
      intro: "Tick any you have noticed. The ones you tick become a list to take to your GP or kidney team.",
      signs: [
        "Pain in my tummy, side or lower back",
        "Blood in my urine",
        "Pain or burning when I wee",
        "Needing to wee more often",
        "A high temperature, or feeling hot, cold or shivery",
        "A persistent headache",
        "Blurred or double vision",
        "Nosebleeds",
      ],
      after: "Get advice from 111 or ask for an urgent GP appointment if you have ADPKD and think you may have a urinary tract infection or a kidney stone.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_SYMPTOMS, PKDC_BASICS, KCUK_ADPKD],
    quiz: {
      question: "What do many experts consider the first effect of ADPKD?",
      options: [{ text: "High blood pressure", right: true }, { text: "Swollen ankles" }, { text: "Itchy skin" }],
      why: "Many experts consider high blood pressure to be the first effect of ADPKD.",
    },
  },
  {
    id: "pkd-tests",
    kicker: "Tests",
    question: "Which scans and tests diagnose polycystic kidney disease?",
    hook: "Usually an ultrasound scan of the kidneys. A genetic test helps when the answer is unclear.",
    short: "ADPKD is usually diagnosed with an ultrasound scan that shows cysts in the kidneys, especially when a relative has the condition. A genetic test can help when a scan is unclear or there is no family history, though about 1 in 4 people get an unclear result. Blood, urine and blood pressure checks show how the kidneys are working.",
    sections: [
      {
        heading: "First checks",
        paragraphs: [
          "Your GP will ask about your symptoms and your family's medical history. If your kidneys are enlarged, your GP may be able to feel them in your tummy.",
          "They will measure your blood pressure, and may do urine tests to check for blood or protein, and blood tests to estimate how fast your kidneys filter your blood. Healthy kidneys should be able to filter more than 90ml of blood a minute.",
        ],
      },
      {
        heading: "A kidney scan",
        paragraphs: [
          "Kidney specialists most often diagnose ADPKD with an ultrasound scan, which uses sound waves to see inside the body. A probe is held against the skin of your tummy, and it is almost always painless.",
          "A CT or MRI scan may be offered if an ultrasound does not give a clear answer. If you are under 40 and a scan shows no cysts, there is a chance you have ADPKD but it has not caused cysts yet, so further scans may be offered later.",
        ],
      },
      {
        heading: "A genetic test",
        paragraphs: [
          "A genetic test looks for gene changes that can cause ADPKD, usually from a blood or spit sample. People can have one free on the NHS if they have, or are likely to have, the condition.",
          "If no one in your family has been tested before, results should come within 12 weeks, or within 6 weeks if the family's gene change is already known. About 1 in every 4 people get an unclear result.",
        ],
      },
      {
        heading: "Talking it through first",
        paragraphs: [
          "Talk to a specialist before having either test. A kidney doctor or genetic counsellor can explain the pros and cons, and you do not have to decide right away.",
          "A clear answer can be reassuring, or can mean getting the right check-ups and care. But a diagnosis can stir up strong emotions, and it may affect insurance related to your health.",
        ],
      },
      {
        heading: "After a diagnosis",
        paragraphs: [
          "If you are diagnosed with ADPKD, you will usually be offered blood and urine tests, a blood pressure check and a liver scan to check for liver cysts. A brain scan for an aneurysm may be offered if you are at higher risk.",
          "Most people with kidney disease have check-ups 1 to 4 times a year. Kidney Care UK says people with ADPKD are usually seen once a year by a kidney specialist.",
        ],
      },
    ],
    helps: [
      "Talk to a specialist about the pros and cons of testing before going ahead.",
      "Ask your genetics clinic how long you may wait for results.",
      "Ask for a follow-up appointment with your kidney specialist to talk the news through.",
      "If you have not been referred to a kidney specialist yet, ask your GP to refer you.",
      "Before a check-up, note down your recent symptoms and the questions you have.",
    ],
    tryThisWeek: [
      "Ask about the pros and cons of testing.",
      "Ask for a kidney specialist referral.",
      "Write down your questions.",
    ],
    ask: "Would a scan or a genetic test give me a clearer answer?",
    interactive: {
      kind: "flip-cards",
      title: "The tests, card by card",
      intro: "Turn each card to see what the test is for.",
      cards: [
        { id: "ultrasound", front: "Ultrasound scan", when: "Most often used", back: "Sound waves show cysts in the kidneys. A probe is held on your tummy, and it is almost always painless." },
        { id: "ct-mri", front: "CT or MRI scan", when: "If ultrasound is unclear", back: "Shows the kidneys in more detail. An MRI is recommended if there is a family history of brain aneurysms." },
        { id: "genetic", front: "Genetic test", when: "A blood or spit sample", back: "Looks for gene changes that cause ADPKD. Results in 6 to 12 weeks; about 1 in 4 are unclear." },
        { id: "egfr", front: "Blood test", when: "How well kidneys filter", back: "Estimates how much blood your kidneys filter in a minute. Healthy kidneys filter more than 90ml." },
        { id: "urine", front: "Urine test", when: "Blood or protein", back: "Checks for blood or protein in your urine." },
        { id: "bp", front: "Blood pressure", when: "At least once a year", back: "ADPKD can cause high blood pressure, so people with ADPKD usually have it checked at least once a year." },
      ],
    },
    sources: [NHS_DIAGNOSIS, PKDC_DIAGNOSED, PKDC_GENETIC, PKDC_BASICS, KCUK_ADPKD],
    quiz: {
      question: "Which scan is most often used to diagnose ADPKD?",
      options: [{ text: "An ultrasound scan", right: true }, { text: "An X-ray" }, { text: "A bone scan" }],
      why: "Kidney specialists most often diagnose ADPKD with an ultrasound scan, which uses sound waves to see inside the body.",
    },
  },
  {
    id: "pkd-blood-pressure",
    kicker: "Treatment",
    question: "Why does keeping my blood pressure down matter so much?",
    hook: "Half of people with ADPKD have high blood pressure, often from about 30. It can harm the kidneys, heart and brain.",
    short: "About 5 in every 10 people with ADPKD have high blood pressure, and it can damage the kidneys and raise the risk of stroke and heart problems. It usually causes no symptoms, so regular checks matter. Medicines called ACE inhibitors and ARBs are most widely used, alongside less salt, exercise, a healthy weight and not smoking.",
    sections: [
      {
        heading: "Why it matters",
        paragraphs: [
          "About 5 in every 10 people with ADPKD have high blood pressure, about twice as common as in the general population. On average it starts at about 30 years old, and most people with ADPKD over 50 have it.",
          "High blood pressure can damage the kidneys, so while ADPKD can cause it, it may also make ADPKD worse. It also raises the risk of stroke and heart problems.",
        ],
      },
      {
        heading: "Checks and targets",
        paragraphs: [
          "Most people with ADPKD have their blood pressure measured at kidney clinic check-ups, usually at least once a year. Your doctor might suggest monitoring at home too, and 24-hour monitoring can spot rises that happen at night.",
          "You and your doctor will agree a target together. Depending on things like your age, kidney function and other health conditions, the PKD Charity says it is likely to be below 130/90 mmHg or below 120/80 mmHg.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "Medicine is usually used to treat high blood pressure in ADPKD. ACE inhibitors and ARBs are the two most widely used, and for most people with ADPKD one medicine is enough, though some need more.",
          "A common side effect is blood pressure dropping too low, which can make you feel tired, dizzy or lightheaded, especially when you stand up. Some people get a dry cough with ACE inhibitors, and because there are many other medicines, you might be able to swap or lower the dose.",
        ],
      },
      {
        heading: "Everyday steps",
        paragraphs: [
          "Cutting salt helps, and the NHS suggests less than 6g a day, about a teaspoonful. Losing any excess weight, exercising regularly, eating a healthy balanced diet and giving up smoking also help.",
          "If you drink a lot of caffeine or alcohol, cut it down. Guidelines suggest 14 units of alcohol or less a week for men and women.",
        ],
      },
      {
        heading: "Your doctor's guidance",
        paragraphs: [
          "Your doctor will let you know if there are times to stop taking your blood pressure medicine, such as when you are ill or about to have surgery. Read the package leaflet so you know which side effects to look out for, and talk to your doctor about any you get.",
        ],
      },
    ],
    helps: [
      "Agree your target blood pressure with your doctor.",
      "Keep taking your prescribed medicines and keep up your healthy lifestyle.",
      "If you check at home, use a cuff the right size for your arm and take readings at the same times each day.",
      "Before a reading, avoid caffeine, exercise and smoking for 30 minutes, have a pee, and sit quietly for at least 5 minutes.",
      "Cut your salt to less than 6g a day.",
      "Talk to your doctor if you have side effects from a blood pressure medicine.",
    ],
    tryThisWeek: [
      "Ask what your target is.",
      "Prepare properly before a reading.",
      "Cut down on salt.",
    ],
    ask: "What is my blood pressure target, and is my medicine the right one for me?",
    interactive: {
      kind: "scenarios",
      title: "Blood pressure moments",
      scenarios: [
        {
          id: "coffee",
          situation: "Your blood pressure check is in 10 minutes and you fancy a coffee.",
          options: [{ text: "Skip caffeine for 30 minutes first", best: true }, { text: "Have a strong coffee" }],
          why: "Before a reading, avoid caffeine, exercise and smoking for 30 minutes, have a pee, and sit quietly for at least 5 minutes.",
        },
        {
          id: "dizzy",
          situation: "You feel dizzy when you stand up after starting a new tablet.",
          options: [{ text: "Talk to your doctor", best: true }, { text: "Ignore it" }],
          why: "Blood pressure dropping too low can make you feel dizzy or lightheaded. There are many medicines, so you might be able to swap or lower the dose.",
        },
        {
          id: "fine",
          situation: "Your readings have been good for months.",
          options: [{ text: "Keep up your medicines and lifestyle", best: true }, { text: "Stop your tablets" }],
          why: "To keep your blood pressure at a healthy level, keep taking your prescribed medicines and keep up your healthy lifestyle.",
        },
        {
          id: "surgery",
          situation: "You are about to have surgery.",
          options: [{ text: "Ask your doctor about your tablets", best: true }, { text: "Decide by yourself" }],
          why: "Your doctor will let you know if there are times to stop taking your blood pressure medicine, such as when you are ill or about to have surgery.",
        },
      ],
    },
    sources: [NHS_TREATMENT, PKDC_BP, PKDC_BASICS],
    quiz: {
      question: "Which two kinds of medicine are most widely used for high blood pressure in ADPKD?",
      options: [{ text: "ACE inhibitors and ARBs", right: true }, { text: "Antibiotics and antacids" }, { text: "Painkillers and laxatives" }],
      why: "ACE inhibitors and ARBs are the two most widely used.",
    },
  },
  {
    id: "pkd-tolvaptan",
    kicker: "Treatment",
    question: "What is tolvaptan, and who is it for?",
    hook: "The only medicine that slows ADPKD down. It suits adults whose kidneys are changing fast, and it makes you thirsty.",
    short: "Tolvaptan is the only medicine available to slow the progression of ADPKD. It slows the growth of cysts and helps keep the kidneys working for longer. NICE recommends it for adults with chronic kidney disease stage 2 or 3 at the start whose disease is progressing rapidly. It is taken twice a day, and the commonest side effects are thirst and needing to pee often.",
    sections: [
      {
        heading: "What it does",
        paragraphs: [
          "Tolvaptan, brand name Jinarc, is the only medicine available to slow down the progression of ADPKD. It can slow the growth of cysts, reducing overall kidney growth and keeping the kidneys working for longer.",
          "It works by blocking the receptor for a hormone called vasopressin. Researchers think this stops the growth of cells that line the cysts and reduces the fluid that collects in them.",
        ],
      },
      {
        heading: "Who it is for",
        paragraphs: [
          "NICE recommends tolvaptan for adults with ADPKD only if they have chronic kidney disease stage 2 or 3 at the start of treatment and there is evidence of rapidly progressing disease.",
          "The PKD Charity says stage 1 can also be eligible in Scotland. You might need further tests over the next 6 or 12 months before your doctor can estimate how fast your ADPKD is progressing, and genetic testing or more detailed scans are sometimes used.",
          "If your kidney function is good and your ADPKD is progressing very slowly, your doctor might say you do not need it yet.",
        ],
      },
      {
        heading: "Taking it",
        paragraphs: [
          "Tolvaptan is a tablet taken twice a day as a split dose. You will be monitored often through hospital clinics at first, and people taking it have regular monthly blood tests to check their liver.",
          "In trials, people taking it had less rapid growth in kidney size and a slower drop in kidney function. The benefits seem to last for at least 10 years in people who keep taking it.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Common side effects include thirst, needing to pee often in the day and at night, headaches, dizziness, diarrhoea, a dry mouth and tiredness. In one trial, around 2 in every 10 people stopped taking it because of side effects.",
          "Liver damage has been reported in some people taking it. This is not common, and it reverses on stopping the drug.",
        ],
      },
    ],
    helps: [
      "Ask your kidney specialist whether tolvaptan is suitable for you, and talk through the benefits and risks.",
      "Go to your regular monthly blood tests to check your liver.",
      "Check the patient information leaflet for the full list of possible side effects.",
      "Ask your doctor what stage your kidney disease is and how quickly it might progress.",
    ],
    tryThisWeek: [
      "Ask if tolvaptan suits you.",
      "Keep your monthly liver blood tests.",
      "Read the medicine leaflet.",
    ],
    ask: "Is my ADPKD progressing fast enough for tolvaptan to help me?",
    interactive: {
      kind: "flip-cards",
      title: "Tolvaptan, card by card",
      intro: "Turn each card to see what it means for you.",
      cards: [
        { id: "who", front: "Who it is for", when: "Adults over 18", back: "With kidney disease stage 2 or 3 at the start, and ADPKD that is progressing rapidly." },
        { id: "how", front: "How it is taken", when: "A tablet", back: "Taken twice a day as a split dose." },
        { id: "thirst", front: "Thirst", when: "The commonest side effect", back: "Being thirsty and needing to pee often, in the day and at night." },
        { id: "liver", front: "Liver checks", when: "Monthly blood tests", back: "Tolvaptan can affect the liver. This is not common, and it reverses on stopping the drug." },
        { id: "benefit", front: "The benefit", when: "Seen in trials", back: "Less rapid growth in kidney size and a slower drop in kidney function." },
      ],
    },
    sources: [NHS_TREATMENT, PKDC_MEDS, NICE_TA358, PKDC_CYSTS, KCUK_ADPKD],
    quiz: {
      question: "What does tolvaptan do in ADPKD?",
      options: [{ text: "Slows the growth of cysts", right: true }, { text: "Cures ADPKD" }, { text: "Removes the cysts" }],
      why: "It can slow the growth of cysts, reducing overall kidney growth and keeping the kidneys working for longer.",
    },
  },
  {
    id: "pkd-pain",
    kicker: "Treatment",
    question: "How can I manage kidney pain?",
    hook: "Sudden pain usually has a cause that can be treated. Long-term pain needs a plan, step by step.",
    short: "Up to 6 in every 10 people with ADPKD have pain some or most of the time. Sudden severe pain is often from a stone, a burst cyst or an infection, and needs urgent medical care. For long-term pain, paracetamol is the first medicine to try, alongside heat, gentle exercise and relaxation, while ibuprofen-type painkillers are usually avoided.",
    sections: [
      {
        heading: "Two kinds of pain",
        paragraphs: [
          "Up to 6 in every 10 people with ADPKD have pain some or most of the time. New severe pain often comes from a problem such as a kidney stone, a burst cyst or a urinary tract infection, and usually gets better once the problem is treated.",
          "Long-term pain lasts 3 months or more, and in ADPKD it is often caused by enlarged kidneys or liver. Back pain is the most common, and the amount of pain does not always match the size of the kidneys.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "If you have sudden severe pain, seek urgent medical care, as it could be a sign of a problem such as an infection or a burst cyst. If your pain is very bad and you cannot get an appointment quickly, call 111.",
          "If long-term pain is getting worse or your treatments are not working, see your GP or kidney doctor. If they do not ask about pain at check-ups, raise it and explain how it affects your life.",
        ],
      },
      {
        heading: "Pain medicines",
        paragraphs: [
          "Paracetamol is the best medicine to try first. If pain is severe, a stronger painkiller such as tramadol may be prescribed, and some antidepressants or epilepsy medicines can help long-term pain.",
          "Anti-inflammatory painkillers, called NSAIDs, such as ibuprofen are usually best avoided, as they can affect kidney function and interfere with blood pressure medicines. A short course may sometimes be safe if blood pressure is well controlled and kidney function is fairly normal, so only use them if your doctor says it is okay.",
        ],
      },
      {
        heading: "Other ways to ease it",
        paragraphs: [
          "Experts suggest trying physical therapies first, such as heat pads, light exercise and working on posture, along with meditation or cognitive behavioural therapy. Acupuncture and nerve stimulation through the skin are next steps.",
          "Occasionally, large cysts can be drained to relieve the pressure. As a last step, one or both kidneys, or part of the liver, may be removed.",
        ],
      },
      {
        heading: "Pacing and a pain diary",
        paragraphs: [
          "Adjusting your daily routine can help you make the most of times when pain is lower. Rest when you need to, as pushing through bad pain does not help.",
          "A pain diary helps you and your doctor find what works. Note how bad the pain is on a scale of 0 to 10, where it is, when it happens and what triggers it.",
        ],
      },
    ],
    helps: [
      "Try paracetamol first if you need a painkiller.",
      "Only use NSAIDs such as ibuprofen if your doctor says it is okay.",
      "Seek urgent medical care for sudden severe pain.",
      "Keep a pain diary of how bad the pain is, where it is, when it happens and what triggers it.",
      "Try heat or cold for 10 to 15 minutes at a time, taking care not to burn yourself.",
      "Raise pain at your check-ups and ask for specialist support.",
    ],
    tryThisWeek: [
      "Start a pain diary.",
      "Try heat or cold for short spells.",
      "Ask before taking ibuprofen.",
    ],
    ask: "What is causing my pain, and what is the next step if paracetamol is not enough?",
    interactive: {
      kind: "timeline",
      title: "The steps for long-term pain",
      steps: [
        { id: "step-1", when: "Step 1", title: "Gentle first steps", points: ["Heat pads, light exercise and posture work", "Meditation or cognitive behavioural therapy", "Mild pain medicines such as paracetamol"] },
        { id: "step-2", when: "Step 2", title: "Next options", points: ["Acupuncture", "Nerve stimulation through the skin", "Prescription medicines such as tramadol"] },
        { id: "step-3", when: "Step 3", title: "Stronger treatment", points: ["Stronger opioid pain medicines", "A procedure or surgery to treat painful cysts"] },
        { id: "step-4", when: "Step 4", title: "Surgery, for a few", points: ["Removing one or both kidneys", "Removing part or all of the liver"] },
      ],
    },
    sources: [NHS_TREATMENT, PKDC_PAIN, PKDC_AVOID],
    quiz: {
      question: "Which painkiller is the best one to try first for ADPKD pain?",
      options: [{ text: "Paracetamol", right: true }, { text: "Ibuprofen" }, { text: "High-dose aspirin" }],
      why: "Paracetamol is the best medicine to try first.",
    },
  },
  {
    id: "pkd-later",
    kicker: "Treatment",
    question: "What happens if my kidneys fail?",
    hook: "It usually comes slowly enough to plan. A transplant is usually the best option, and dialysis works well too.",
    short: "On average, people with ADPKD reach kidney failure at about 55 or 60, but the timing varies and some never do. Kidney teams can usually see it coming a year or two ahead. The options are a kidney transplant, which experts usually see as best, dialysis, or conservative care that treats symptoms only.",
    sections: [
      {
        heading: "Planning ahead",
        paragraphs: [
          "On average, people with ADPKD reach kidney failure at about 55 or 60, but the timing differs a lot, and some never do. Kidney failure means the kidneys are doing less than a sixth of the work of healthy kidneys.",
          "Your kidney team can usually predict kidney failure a year or two before it happens, so you can plan ahead. They will help you think about your preferences at least a year before you might need treatment.",
        ],
      },
      {
        heading: "A kidney transplant",
        paragraphs: [
          "Experts agree that a transplant is usually the best treatment for kidney failure caused by ADPKD. It usually improves both life expectancy and quality of life more than the other options.",
          "You only need one kidney to survive, so a living person can donate one, and close relatives usually make the best match. People with ADPKD cannot donate a kidney, so a genetic test can check a relative first.",
          "In the UK, about a third of kidney transplants come from a living donor. The average wait for a kidney from a deceased donor is about 2 to 3 years, and immunosuppressant medicines are needed for life.",
        ],
      },
      {
        heading: "Dialysis",
        paragraphs: [
          "In haemodialysis, a machine filters your blood to remove waste and extra fluid. In peritoneal dialysis, fluid is added into a space in your tummy, where it absorbs waste and extra fluid from your blood.",
          "Both work equally well for most people and are equally safe. Dialysis removes enough waste and fluid to reduce symptoms and extend life, and most people on dialysis can still work or study, exercise, drive and have holidays.",
        ],
      },
      {
        heading: "Choosing treatment of symptoms only",
        paragraphs: [
          "A few people decide not to have dialysis or a transplant, and prefer treatment of their symptoms. This is called conservative care, and it involves medicines, a special diet and being very careful about how much fluid you drink.",
        ],
      },
    ],
    helps: [
      "Discuss with your doctors what treatment you would want if your kidneys stop working.",
      "See whether a relative would consider being tested as a possible kidney donor.",
      "Ask your kidney doctor, dialysis team or transplant team if you would like to talk to a counsellor or psychologist.",
      "Talk to other people with kidney failure through the PKD Charity's support groups and Facebook groups.",
    ],
    tryThisWeek: [
      "Talk about your treatment wishes.",
      "Ask about living donation.",
      "Ask about seeing a counsellor.",
    ],
    ask: "How fast is my kidney function changing, and when should we start planning?",
    interactive: {
      kind: "flip-cards",
      title: "The options, card by card",
      intro: "Turn each card to see what each option involves.",
      cards: [
        { id: "transplant", front: "Kidney transplant", when: "Usually the best option", back: "A kidney from a living or deceased donor. Immunosuppressant medicines are needed for life." },
        { id: "haemodialysis", front: "Haemodialysis", when: "A machine", back: "A machine filters your blood to remove waste and extra fluid." },
        { id: "peritoneal", front: "Peritoneal dialysis", when: "Fluid in your tummy", back: "Fluid is added into a space in your tummy, where it absorbs waste and extra fluid from your blood." },
        { id: "conservative", front: "Conservative care", when: "Treating symptoms only", back: "Medicines, a special diet and great care with fluids, without dialysis or a transplant." },
      ],
    },
    sources: [NHS_TREATMENT, PKDC_FAILURE, PKDC_BASICS, PKDC_TRANSPLANT, PKDC_DIALYSIS, PKDC_GENETIC],
    quiz: {
      question: "Which treatment do experts usually see as best for kidney failure caused by ADPKD?",
      options: [{ text: "A kidney transplant", right: true }, { text: "Dialysis" }, { text: "Painkillers" }],
      why: "Experts agree that a transplant is usually the best treatment for kidney failure caused by ADPKD.",
    },
  },
  {
    id: "pkd-fluids-food",
    kicker: "Living well",
    question: "What should I drink and eat with polycystic kidney disease?",
    hook: "No special diet for most people: enough water to stay hydrated, less salt, and a healthy balance.",
    short: "There is no special diet for ADPKD unless kidney function is low, but a healthy lifestyle may help protect the kidneys and lower blood pressure. Drink enough so you are not thirsty, keep salt down, eat a balanced diet with a moderate amount of protein, and drink alcohol within the low-risk limits. Ask your kidney team before changing your diet.",
    sections: [
      {
        heading: "No special diet",
        paragraphs: [
          "No diet or lifestyle changes have been shown to stop cysts developing, and dietitians do not recommend a special diet unless kidney function is low. But a healthy lifestyle may help protect your kidney function, lower your blood pressure and reduce the risk of heart and blood vessel problems.",
          "This advice is for people with normal to moderately reduced kidney function. If you have severely reduced kidney function, are on dialysis or have had a transplant, your needs may differ, so ask your kidney specialist before changing your diet.",
        ],
      },
      {
        heading: "Water",
        paragraphs: [
          "There is no proof that drinking extra fluid slows the growth of cysts. Kidney Care UK says to drink enough so you are not thirsty, but not too much, and six to eight 200ml glasses of water a day is usually enough in the UK.",
          "You may need more if you lose fluid through heavy exercise, sweating or diarrhoea. Some PKD Charity pages say experts recommend at least 2 to 3 litres a day if your eGFR is at least 30, and that you should follow your kidney specialist's advice if it is lower, so ask what suits you.",
          "Avoid having lots of sugary drinks. Up to 2 cups of coffee or 4 cups of tea a day is thought to be okay.",
        ],
      },
      {
        heading: "Salt",
        paragraphs: [
          "Too much salt can speed up ADPKD and raise blood pressure. In one study, people with ADPKD who ate more salt than recommended lost kidney function faster, and their kidneys grew more.",
          "The PKD Charity says adults should aim for no more than 5g of salt a day, just under a teaspoon, and the NHS says less than 6g. Salt hides in bread, breakfast cereals, bacon, ham, sausages, takeaways and ready meals.",
          "Some low-salt products replace sodium with potassium, which can be a problem for a very small number of people with ADPKD. Ask your kidney specialist whether you need to limit potassium.",
        ],
      },
      {
        heading: "A healthy balance",
        paragraphs: [
          "Eat 5 portions of fruit or vegetables a day, base meals on starchy foods, and include some dairy and protein such as beans, pulses, fish, eggs or meat. Using fresh ingredients helps limit processed and ready-made food.",
          "Adults without severely reduced kidney function should eat a moderate amount of protein. The PKD Charity does not recommend keto diets, as it cannot be sure there are any benefits.",
          "There is no need to avoid alcohol completely. For lower-risk drinking, have no more than 14 units a week, spread over the week.",
        ],
      },
    ],
    helps: [
      "Drink enough fluid so you are not thirsty and your wee is light in colour.",
      "Keep your salt to no more than 5g a day, and check food labels.",
      "Ask your kidney specialist before using low-salt products that contain potassium.",
      "Use fresh ingredients to limit processed and ready-made food.",
      "Talk to your kidney specialist, doctor or a kidney dietitian before trying a diet that differs from a normal healthy diet.",
    ],
    tryThisWeek: [
      "Check the colour of your wee.",
      "Check food labels for salt.",
      "Cook from fresh ingredients.",
    ],
    ask: "How much should I drink, and do I need to limit potassium or protein?",
    interactive: {
      kind: "scenarios",
      title: "Everyday food and drink",
      scenarios: [
        {
          id: "water",
          situation: "You read that drinking huge amounts of water shrinks cysts.",
          options: [{ text: "Drink enough not to be thirsty", best: true }, { text: "Drink as much as possible" }],
          why: "There is no proof that drinking extra fluid slows the growth of cysts. Drink enough so you are not thirsty, but not too much.",
        },
        {
          id: "label",
          situation: "A ready meal's label shows red for salt.",
          options: [{ text: "Pick a lower-salt option", best: true }, { text: "Salt does not matter with ADPKD" }],
          why: "Red on a food label means high salt. Too much salt can speed up ADPKD and raise blood pressure.",
        },
        {
          id: "keto",
          situation: "A friend suggests a keto diet for your kidneys.",
          options: [{ text: "Speak to your kidney team first", best: true }, { text: "Start it today" }],
          why: "The PKD Charity does not recommend keto diets, and suggests speaking to your kidney specialist, doctor or a kidney dietitian first.",
        },
        {
          id: "low-function",
          situation: "Your kidney function has fallen to stage 4.",
          options: [{ text: "Follow your specialist's advice on water", best: true }, { text: "Drink 3 litres whatever happens" }],
          why: "If your eGFR is lower than 30, follow your kidney specialist's advice about water.",
        },
      ],
    },
    sources: [PKDC_DIET, KCUK_ADPKD, PKDC_CYSTS, NHS_TREATMENT, PKDC_BASICS],
    quiz: {
      question: "How much salt does the PKD Charity suggest adults with ADPKD keep to?",
      options: [{ text: "No more than 5g a day", right: true }, { text: "Up to 15g a day" }, { text: "There is no limit" }],
      why: "The PKD Charity says adults should aim for no more than 5g of salt a day, just under a teaspoon.",
    },
  },
  {
    id: "pkd-family",
    kicker: "Living well",
    question: "How do I tell my family, and should relatives be tested?",
    hook: "Each child has a one in two chance. Testing is a choice, and honest, simple talk helps children cope.",
    short: "Testing relatives is a personal choice with pros and cons, so it helps to talk it through with your GP, family and a genetics specialist. Children can be tested by scan or gene test if parents and doctors agree. Talking openly and simply helps children cope, and in the UK insurers cannot ask about or use predictive genetic test results.",
    sections: [
      {
        heading: "Deciding whether to test",
        paragraphs: [
          "Screening relatives with a family history of ADPKD is debated. Some say it achieves little, as nothing yet stops ADPKD developing, while others say finding it lets high blood pressure and complications be treated promptly.",
          "If you are considering testing for yourself or your children, discuss the advantages and disadvantages with your GP, partner and family. People within families can have different views, and a genetic counsellor can give tips on talking to relatives.",
        ],
      },
      {
        heading: "Testing relatives",
        paragraphs: [
          "If the gene change causing ADPKD in your family has been found, close relatives can have a predictive genetic test for the same change. The result might come within 6 weeks, because the lab knows what to look for.",
          "Children with a parent or close relative with ADPKD can have a kidney scan or gene test if their parents and doctor agree, and children old enough to understand should help decide. Most children with ADPKD do not have symptoms that cause problems.",
          "Children with ADPKD usually have check-ups on their kidneys and blood pressure once every 2 years.",
        ],
      },
      {
        heading: "Talking to children",
        paragraphs: [
          "Children usually want information first from their parents, and talking helps them cope and feel less confused. Finding out about ADPKD later can be more of a shock.",
          "Look for natural moments, keep it informal, use simple words and give small amounts of information at a time. Give the condition a name, talk about feelings, and do not avoid questions, as children like trust and honesty.",
        ],
      },
      {
        heading: "Insurance",
        paragraphs: [
          "In the UK, you do not need to tell an insurer about a genetic test you or your family have had to predict ADPKD if you have no signs or symptoms. Insurers are not allowed to ask about or use the results of predictive tests.",
          "If asked, tell your insurer about a diagnosis and about any family history of ADPKD, or your insurance could be invalid. If you are unsure whether a test was predictive or diagnostic, ask your kidney doctor, geneticist or genetic counsellor.",
        ],
      },
      {
        heading: "Planning a family",
        paragraphs: [
          "If you or your partner have ADPKD, pre-implantation genetic testing, a special type of IVF, can help you have a child without ADPKD. It is only possible if the gene change is known, and about a third of couples having it have a baby.",
          "It is best to discuss options before becoming pregnant. Ask your GP or kidney doctor to refer you to a genetics centre.",
        ],
      },
    ],
    helps: [
      "Discuss the pros and cons of testing with your GP, partner and family.",
      "If you are thinking about testing a child, ask your GP to refer you to a genetic counsellor, clinical geneticist or kidney doctor.",
      "Keep conversations with children informal, simple and honest, and encourage future chats.",
      "Be clear whether a test is predictive or diagnostic, and ask your specialist if you are unsure.",
      "If you are planning a family, ask to be referred to a genetics centre before becoming pregnant.",
    ],
    tryThisWeek: [
      "Talk testing over with family.",
      "Plan a simple, honest chat.",
      "Check if a test was predictive.",
    ],
    ask: "Should my children or relatives be tested, and who can help us decide?",
    interactive: {
      kind: "scenarios",
      title: "Family moments",
      scenarios: [
        {
          id: "child-asks",
          situation: "Your 9-year-old asks why you keep going to hospital.",
          options: [{ text: "Give a short, honest answer", best: true }, { text: "Change the subject" }],
          why: "Give small amounts of information at a time, and do not avoid questions, as children like trust and honesty.",
        },
        {
          id: "sister",
          situation: "Your sister wants to know if she has the family's gene change.",
          options: [{ text: "She can ask about a predictive test", best: true }, { text: "She has to wait for symptoms" }],
          why: "If the gene change causing ADPKD in your family has been found, close relatives can have a predictive genetic test for the same change.",
        },
        {
          id: "insurer",
          situation: "You had a predictive test, have no symptoms, and are buying insurance.",
          options: [{ text: "You do not need to declare it", best: true }, { text: "Send them the result" }],
          why: "Insurers are not allowed to ask about or use the results of predictive tests.",
        },
        {
          id: "pregnancy",
          situation: "You and your partner are planning a pregnancy.",
          options: [{ text: "Ask for a genetics referral first", best: true }, { text: "Wait until after the birth" }],
          why: "It is best to discuss options before becoming pregnant. Ask your GP or kidney doctor to refer you to a genetics centre.",
        },
      ],
    },
    sources: [PKDC_GENETIC, PKDC_TALKING, PKDC_CHILDREN, NHS_DIAGNOSIS, PKDC_INSURANCE],
    quiz: {
      question: "Can UK insurers use the result of a predictive genetic test for ADPKD?",
      options: [{ text: "No", right: true }, { text: "Yes, always" }, { text: "Only for travel insurance" }],
      why: "Insurers are not allowed to ask about or use the results of predictive tests.",
    },
  },
  {
    id: "pkd-liver-brain",
    kicker: "Living well",
    question: "What are liver cysts and brain aneurysms?",
    hook: "Most people get liver cysts that cause no trouble. Brain aneurysms are rarer, and a sudden severe headache means 999.",
    short: "Most people with ADPKD get liver cysts by their mid-thirties, but the liver usually keeps working and most have no symptoms. Brain aneurysms are more common than in other people, affecting about 9 in 100, and most never cause a problem. Scans are offered to those at higher risk, and a sudden agonising headache means dialling 999 immediately.",
    sections: [
      {
        heading: "Liver cysts",
        paragraphs: [
          "Most people with ADPKD, 8 out of 10, have liver cysts by their mid-thirties. This is called polycystic liver disease, and the liver is likely to keep working well.",
          "Over 95 in 100 people with liver cysts have no symptoms. A few get a very large liver, which can cause bloating, a large tummy, feeling full early in a meal, heartburn, pain or breathlessness, and these are worth telling your GP or kidney team about.",
        ],
      },
      {
        heading: "Treating liver cysts",
        paragraphs: [
          "Treatment is usually only needed for symptoms. An infected cyst is treated with antibiotics, and in rare cases where a larger cyst causes severe or lasting pain, surgery may be needed to drain it.",
          "Oestrogen seems to increase the growth of liver cysts, so doctors usually suggest contraception without oestrogen and are unlikely to recommend HRT. Ask your doctor to explain the benefits and risks.",
        ],
      },
      {
        heading: "Brain aneurysms",
        paragraphs: [
          "An aneurysm is a bulge in a blood vessel caused by a weakness in its wall. About 9 in every 100 people with ADPKD have a brain aneurysm, compared with about 2 to 3 in 100 people in general.",
          "Most people with one will not have symptoms, and it is unlikely to cause a problem. Smoking, high blood pressure and drinking a lot of alcohol raise the risk, as does having a close relative who has had a bleed on the brain.",
        ],
      },
      {
        heading: "Screening scans",
        paragraphs: [
          "Screening is not recommended routinely for everyone with ADPKD. If you have ADPKD and a family history of subarachnoid haemorrhage, you will usually be offered an MRA scan to check for aneurysms.",
          "If no aneurysms or only small ones are found, you will be offered further scans at intervals of 1 to 5 years. If an aneurysm could burst, coiling or clipping can prevent it, and these work well for 9 out of 10 people.",
        ],
      },
      {
        heading: "A bleed on the brain is an emergency",
        paragraphs: [
          "A burst aneurysm causes bleeding over the surface of the brain, called a subarachnoid haemorrhage. Signs include a sudden agonising headache unlike anything before, a stiff neck, being sick, sensitivity to light, blurred or double vision, confusion and weakness on one side of the body.",
          "Dial 999 immediately and ask for an ambulance if you think you or someone you know is having a subarachnoid haemorrhage. It is a medical emergency that needs immediate treatment.",
        ],
      },
    ],
    helps: [
      "Tell your GP or kidney team if you feel bloated, full early in meals or short of breath, or your tummy is getting larger.",
      "Give up smoking, keep your blood pressure under control, and drink no more than 14 units of alcohol a week.",
      "If a close relative has had a bleed on the brain, ask about a screening scan.",
      "Raise your aneurysm risk with your doctor before using hormone-based contraception.",
      "Dial 999 immediately and ask for an ambulance for a sudden agonising headache unlike any before.",
      "If worry about aneurysms is affecting your life, talk to your GP or kidney specialist.",
    ],
    tryThisWeek: [
      "Mention any bloating or fullness.",
      "Ask if a brain scan is advised.",
      "Know when to dial 999.",
    ],
    ask: "Do I need a liver scan or a brain scan, and how often?",
    interactive: {
      kind: "scenarios",
      title: "Liver and brain moments",
      scenarios: [
        {
          id: "headache",
          situation: "You get a sudden, agonising headache unlike any before.",
          options: [{ text: "Dial 999 for an ambulance", best: true }, { text: "Lie down and see if it passes" }],
          why: "Dial 999 immediately and ask for an ambulance if you think you or someone you know is having a subarachnoid haemorrhage.",
        },
        {
          id: "fullness",
          situation: "You feel full early in meals and your tummy is growing.",
          options: [{ text: "Tell your GP or kidney team", best: true }, { text: "Ignore it" }],
          why: "A very large liver can cause bloating, a large tummy and feeling full early in a meal. These are worth telling your GP or kidney team about.",
        },
        {
          id: "family",
          situation: "Your mother had a bleed on the brain.",
          options: [{ text: "Ask about a screening scan", best: true }, { text: "Assume nothing can be done" }],
          why: "If you have ADPKD and a family history of subarachnoid haemorrhage, you will usually be offered an MRA scan to check for aneurysms.",
        },
        {
          id: "contraception",
          situation: "You are choosing contraception.",
          options: [{ text: "Ask about options without oestrogen", best: true }, { text: "Any type is the same" }],
          why: "Oestrogen seems to increase the growth of liver cysts, so doctors usually suggest contraception without oestrogen.",
        },
      ],
    },
    sources: [NHS_COMPLICATIONS, PKDC_LIVER, PKDC_ANEURYSM],
    quiz: {
      question: "How many people with ADPKD have liver cysts by their mid-thirties?",
      options: [{ text: "8 out of 10", right: true }, { text: "1 in 10" }, { text: "Almost none" }],
      why: "Most people with ADPKD, 8 out of 10, have liver cysts by their mid-thirties.",
    },
  },
  {
    id: "pkd-support",
    kicker: "Living well",
    question: "Where can I find support, and how do I live well with it?",
    hook: "Most people keep working, travelling and staying active. A helpline and groups are there when it feels heavy.",
    short: "Finding out you have ADPKD can be a shock, but most people can still work, have children, go on holiday and keep active. Feelings such as fear, worry or guilt are common, and your GP and kidney team can help with your mental health too. The PKD Charity runs a confidential helpline on 0300 111 1234 and support groups in person and online.",
    sections: [
      {
        heading: "Life goes on",
        paragraphs: [
          "Finding out you have ADPKD can be a shock, but it does not mean you need to change your life greatly. Most people with ADPKD can still work, have children, go on holiday and keep active.",
          "Of people with good or moderate kidney function, over 8 in every 10 say ADPKD does not affect their daily life. It might affect you more as you get older and your kidney health worsens.",
        ],
      },
      {
        heading: "Feelings",
        paragraphs: [
          "It is common to fear how ADPKD will affect your health and family, to feel stressed by the uncertainty, or to feel guilty about passing it on. At least 3 in 10 people with ADPKD have anxiety or depression at some point in their life.",
          "Your GP and kidney team are there to support your mental health as well as your physical health. If anxiety, depression or other issues are affecting your day-to-day life, let them know.",
        ],
      },
      {
        heading: "People who understand",
        paragraphs: [
          "The PKD Charity's confidential helpline, 0300 111 1234, offers emotional support, practical advice and information from people with personal experience of PKD. It is open 9:30am to 5pm, Monday to Friday, except bank holidays.",
          "PKD Connect groups meet in person and online, including groups for young adults, people with low kidney function and people who have had a transplant. There is no pressure to talk, and you can simply come along and listen.",
        ],
      },
      {
        heading: "Staying active and positive",
        paragraphs: [
          "The PKD Charity's exercise programme, on the Kidney Beam online platform, was designed by clinical specialists to help people with kidney conditions build strength and confidence. It is currently free only in some areas, and charity supporters can ask for an access code.",
          "Three ideas shared by people with PKD are to be informed, talk to others and own your life. Living well is not about powering on regardless, so accept when you need to recharge.",
        ],
      },
      {
        heading: "Work",
        paragraphs: [
          "Most people with ADPKD can work, including those with low kidney function. You do not have to tell your employer, but if you explain how ADPKD affects you, your employer has to make changes to help you do your job, if they can.",
          "If PKD affects your normal daily life, you might be classed as disabled under the Equality Act 2010, which does not apply in Northern Ireland. Citizens Advice can help you check your rights.",
        ],
      },
    ],
    helps: [
      "Call the PKD helpline on 0300 111 1234 for emotional support, practical advice and information.",
      "Join a PKD Connect group, in person or online.",
      "Tell your GP or kidney team if anxiety or depression is affecting your day-to-day life.",
      "Explain to your employer how ADPKD affects you, so they can think about reasonable adjustments.",
      "Accept when you need to recharge.",
      "Contact Kidney Care UK's support line on 0808 801 0000 for practical, emotional and financial support.",
    ],
    tryThisWeek: [
      "Save the PKD helpline number.",
      "Find a PKD Connect group.",
      "Tell your team how you feel.",
    ],
    ask: "Who can I talk to about how ADPKD is affecting me and my family?",
    interactive: {
      kind: "flip-cards",
      title: "Support, card by card",
      intro: "Turn each card to see what is on offer.",
      cards: [
        { id: "helpline", front: "PKD Helpline", when: "Weekdays, 9:30am to 5pm", back: "0300 111 1234. Emotional support and practical advice from people with personal experience of PKD." },
        { id: "groups", front: "PKD Connect groups", when: "In person and online", back: "Relaxed groups where you can share experiences, or simply come along and listen." },
        { id: "exercise", front: "Exercise programme", when: "On Kidney Beam", back: "Online classes led by specialist physiotherapists. Currently free only in some areas." },
        { id: "team", front: "Your GP and kidney team", when: "For your mental health too", back: "Let them know if anxiety, depression or other issues are affecting your day-to-day life." },
        { id: "work", front: "Reasonable adjustments", when: "At work", back: "If you explain how ADPKD affects you, your employer has to make changes to help you do your job, if they can." },
      ],
    },
    sources: [PKDC_BASICS, PKDC_HELPLINE, PKDC_GROUPS, PKDC_LIVING, PKDC_EXERCISE, PKDC_EMPLOYMENT, PKDC_FAILURE],
    quiz: {
      question: "Of people with good or moderate kidney function, how many say ADPKD does not affect their daily life?",
      options: [{ text: "Over 8 in 10", right: true }, { text: "About 1 in 10" }, { text: "Almost nobody" }],
      why: "Of people with good or moderate kidney function, over 8 in every 10 say ADPKD does not affect their daily life.",
    },
  },
];
