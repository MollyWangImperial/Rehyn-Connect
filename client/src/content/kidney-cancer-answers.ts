import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Kidney cancer page's pieces
// (content/library-conditions/cancer-more.ts, `kidneyCancer`). Every sentence was written from wording
// checked on 22 October 2026 on the pages listed under each answer's `sources`; nothing is added that those
// pages do not say. Most of it comes from the NHS, Macmillan Cancer Support and Cancer Research UK, with
// Kidney Care UK for kidney function tests, the government's pages on disability and Access to Work, and
// Samaritans. There are no survival figures and nothing that reads as a prediction. Urgent signs give the
// routes exactly as the sources state them (the hospital's 24-hour number, 999, A&E, NHS 111), and the mood
// answer follows safe-messaging guidance with the crisis routes the NHS, Macmillan and Samaritans give.
// General information only; it never replaces what a person's own cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_KC_TREAT = nhs("Treatment for kidney cancer", "conditions/kidney-cancer/treatment/");
const NHS_KC_TESTS = nhs("Tests and next steps for kidney cancer", "conditions/kidney-cancer/tests-and-next-steps/");
const NHS_HBP = nhs("High blood pressure", "conditions/high-blood-pressure/");
const NHS_CKD_DIAG = nhs("Chronic kidney disease: diagnosis", "conditions/kidney-disease/diagnosis/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const MAC_KC = mac("Kidney cancer", "kidney-cancer");
const MAC_KC_STAGE = mac("Staging and grading of kidney cancer", "kidney-cancer/staging-and-grading-of-kidney-cancer");
const MAC_KC_TREAT = mac("Treatment for kidney cancer", "kidney-cancer/treatment");
const MAC_KC_RECOVERY = mac("Recovery from treatment for kidney cancer", "kidney-cancer/recovery-from-treatment-for-kidney-cancer");
const MAC_KIDNEYS = mac("The kidneys and ureters", "kidney-cancer/the-kidneys-and-ureters");
const MAC_KC_SURGERY = mac("Surgery for kidney cancer", "treatments-and-drugs/surgery-for-kidney-cancer");
const MAC_KC_ABLATION = mac("Tumour ablation for kidney cancer", "treatments-and-drugs/tumour-ablation-for-kidney-cancer");
const MAC_SUNITINIB = mac("Sunitinib", "treatments-and-drugs/sunitinib");
const MAC_PEMBRO = mac("Pembrolizumab (Keytruda)", "treatments-and-drugs/pembrolizumab");
const MAC_IMMUNO = mac("Immunotherapy", "treatment/types-of-treatment/immunotherapy");
const MAC_FOLLOWUP = mac("Follow-up care after cancer treatment", "after-treatment/follow-up-care-after-treatment");
const MAC_RECOVER = mac("Beginning to recover", "after-treatment/beginning-to-recover");
const MAC_FATIGUE = mac("Tiredness (fatigue)", "impacts-of-cancer/tiredness");
const MAC_RETURNING = mac("Returning to work", "impacts-of-cancer/work-and-cancer/returning-to-work");
const MAC_ADJUSTMENTS = mac("Reasonable adjustments", "impacts-of-cancer/work-and-cancer/reasonable-adjustments");
const MAC_RIGHTS = mac("Cancer and employment rights", "impacts-of-cancer/work-and-cancer/cancer-and-employment-rights");
const MAC_MONEY = mac("Money worries and cancer: your questions answered", "get-help/financial-and-work/money-faqs");
const MAC_DEPRESSION = mac("Depression and cancer", "impacts-of-cancer/depression");

const CRUK_FOLLOWUP = cruk("Follow up for kidney cancer", "kidney-cancer/treatment/follow-up");
const CRUK_DAILY = cruk("Life after surgery for kidney cancer", "kidney-cancer/living-with/daily-life");
const CRUK_AFTER_SURGERY = cruk("After kidney cancer surgery", "kidney-cancer/treatment/surgery/after-surgery");
const CRUK_PROBLEMS = cruk("Problems after kidney cancer surgery", "kidney-cancer/treatment/surgery/problems");
const CRUK_TARGETED = cruk("Targeted and immunotherapy drugs for advanced kidney cancer", "kidney-cancer/advanced/targeted-immunotherapy-cancer-drugs");
const CRUK_IMMUNO_AFTER = cruk("Immunotherapy after surgery for kidney cancer", "kidney-cancer/treatment/immunotherapy-after-surgery-for-kidney-cancer");
const CRUK_TYPES_GRADES = cruk("Types and grades of kidney cancer", "kidney-cancer/stages-types-grades/types-grades");
const CRUK_COPING = cruk("Coping and support when you have kidney cancer", "kidney-cancer/living-with/coping");
const CRUK_FATIGUE_WHAT = cruk("What is cancer fatigue?", "coping/physically/fatigue/what-is-cancer-fatigue");
const CRUK_FATIGUE_MANAGE = cruk("Managing and treating cancer fatigue", "coping/physically/fatigue/managing-treating-cancer-fatigue");

const KCUK_TESTS: LearnSource = { label: "Kidney Care UK: Tests for chronic kidney disease", url: "https://kidneycareuk.org/kidney-disease-information/about-kidney-health/tests-for-chronic-kidney-disease/" };
const GOV_DISABILITY = gov("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");
const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const kidneyCancerAnswers: LearnArticle[] = [
  {
    id: "kc-what-you-had",
    kicker: "Understanding",
    question: "What treatment did I have, and what was it for?",
    hook: "Most kidney cancers that have not spread are treated with surgery. Freezing or heating the cancer, careful monitoring and cancer drugs are used in other situations.",
    short: "Treatment for kidney cancer depends on the type of cancer, where it is, how big it is, whether it has spread and your general health. Cancer that has not spread outside the kidney is usually treated with surgery, which may be the only treatment you need. Some people have the cancer frozen or heated instead, are monitored with scans, or have targeted and immunotherapy drugs.",
    sections: [
      {
        heading: "A plan made for you",
        paragraphs: [
          "The treatment you have for kidney cancer depends on the type of kidney cancer, where it is and how big it is, whether it has spread, and your general health.",
          "A team of specialists meets to discuss the best possible treatment for you. This is called a multidisciplinary team, or MDT.",
          "Cancer that has not spread outside the kidney, stage 1 or 2, is usually treated with surgery. Surgery may be the only treatment you need.",
        ],
      },
      {
        heading: "Surgery to the kidney",
        paragraphs: [
          "There are 2 main types of surgery for kidney cancer. One removes the kidney, called a nephrectomy. The other removes the cancer but leaves as much of the kidney as possible, called a partial nephrectomy.",
          "Removing part of the kidney is the most common operation for kidney cancers smaller than 4cm. The aim is to remove the cancer but leave as much normal tissue as possible, so the kidney can keep working.",
          "When the whole kidney is removed, the surgeon also takes some surrounding tissue and lymph nodes close to the kidney, to check them for cancer cells. Kidney cancer surgery is often done as keyhole surgery, but open surgery is sometimes needed.",
        ],
      },
      {
        heading: "Freezing, heating or watching",
        paragraphs: [
          "Tumour ablation uses heat or cold to destroy cancer cells. It may be used to treat small kidney cancers instead of surgery.",
          "Cryotherapy is where small needles are passed through the skin to freeze the cancer cells. Radiofrequency ablation uses radio waves, given through a needle passed through the skin into the kidney, to kill cancer cells.",
          "Some people do not start treatment straight away, and have regular ultrasound, CT or MRI scans instead. This is called monitoring or active surveillance. The main advantage is that you can avoid the risks or side effects of treatment.",
        ],
      },
      {
        heading: "Drugs and other treatments",
        paragraphs: [
          "After surgery to remove a locally advanced kidney cancer, you may have a drug called pembrolizumab. This helps reduce the risk of the cancer coming back.",
          "Targeted medicines and immunotherapy may be used if the cancer has spread to other parts of the body, or has come back after treatment.",
          "If someone is not well enough for surgery, they may be offered a treatment to block the cancer's blood supply, called arterial embolisation. It can help to shrink the cancer and control symptoms. Radiotherapy is not used very often for kidney cancer, but is sometimes used to control symptoms.",
        ],
      },
      {
        heading: "Asking about your own treatment",
        paragraphs: [
          "Your team will include a clinical nurse specialist, who is your main point of contact during and after treatment. You can ask them any questions you have.",
          "You can ask for copies of your letters so that you can keep track, or ask for a treatment summary.",
        ],
      },
    ],
    helps: [
      "Ask your clinical nurse specialist any questions you have; they are your main point of contact during and after treatment.",
      "Ask for copies of your letters, or a treatment summary, to keep track of what you had.",
      "Write down your questions before appointments, and the answers to help you remember them.",
      "Take someone with you to appointments for support.",
      "Tell your cancer team about any side effects, as these can usually be managed.",
      "Call the Macmillan Support Line free on 0808 808 00 00, open every day from 8am to 8pm.",
    ],
    tryThisWeek: [
      "Ask for a treatment summary.",
      "Write down your questions.",
      "Take someone to appointments.",
    ],
    ask: "Which operation or treatment did I have, and will I need any more treatment?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments for kidney cancer",
      intro: "Turn a card to see what each treatment does.",
      cards: [
        { id: "partial", front: "Partial nephrectomy", when: "Often for cancers smaller than 4cm", back: "The surgeon removes the part of the kidney with the cancer and leaves as much normal tissue as possible, so the kidney can keep working." },
        { id: "radical", front: "Radical nephrectomy", when: "If only part cannot be taken", back: "The surgeon removes the whole kidney, some surrounding tissue, and lymph nodes close to the kidney to check them for cancer cells." },
        { id: "ablation", front: "Cryotherapy or radiofrequency ablation", when: "Sometimes for small kidney cancers", back: "Needles or probes passed through the skin freeze or heat the cancer to destroy the cancer cells." },
        { id: "monitoring", front: "Monitoring", when: "For some very small, slow-growing cancers", back: "Regular scans look for signs the cancer is growing, so treatment can wait until it is needed." },
        { id: "pembrolizumab", front: "Pembrolizumab after surgery", when: "After surgery for locally advanced cancer", back: "An immunotherapy drug that helps reduce the risk of the cancer coming back." },
        { id: "drugs", front: "Targeted drugs and immunotherapy", when: "If the cancer has spread or come back", back: "Targeted medicines aim to slow or stop the cancer growing. Some also help the immune system kill cancer cells." },
        { id: "embolisation", front: "Arterial embolisation", when: "If surgery is not possible", back: "Blocks the cancer's blood supply. It can help to shrink the cancer and control symptoms." },
      ],
    },
    sources: [NHS_KC_TREAT, MAC_KC, MAC_KC_TREAT, MAC_KC_SURGERY, MAC_KC_ABLATION, NHS_KC_TESTS, MAC_FOLLOWUP],
    quiz: {
      question: "How is kidney cancer that has not spread outside the kidney usually treated?",
      options: [{ text: "With surgery", right: true }, { text: "With chemotherapy" }, { text: "With radiotherapy alone" }],
      why: "Cancer that has not spread outside the kidney, stage 1 or 2, is usually treated with surgery.",
    },
  },
  {
    id: "kc-stage",
    kicker: "Understanding",
    question: "What do the stage and grade of my kidney cancer mean?",
    hook: "The stage describes the cancer's size and whether it has spread. The grade describes how the cells look under a microscope. Together with the type, they guide your treatment.",
    short: "The stage of a kidney cancer describes its size and whether it has spread, from stage 1 to stage 4. The grade gives an idea of how quickly the cancer might grow and spread. Your cancer doctor and specialist nurse can explain what your own stage and grade mean, and statistics cannot tell you what will definitely happen to you.",
    sections: [
      {
        heading: "Three things your team looks at",
        paragraphs: [
          "Your cancer doctor uses your test results to advise on the best treatment for you. This includes the type of kidney cancer, the stage, which describes its size and whether it has spread, and the grade, which gives an idea of how quickly it might grow and spread.",
          "Renal cell cancer is the most common type of kidney cancer in adults. Around 80 out of 100 kidney cancers are renal cell cancers, and the most common type of these is called clear cell.",
        ],
      },
      {
        heading: "Number stages, from 1 to 4",
        paragraphs: [
          "At stage 1, the cancer is 7cm or smaller and is inside the kidney. At stage 2, it is bigger than 7cm and still inside the kidney. In both, it has not spread to the lymph nodes or other organs.",
          "At stage 3, the cancer is growing into the fat around the kidney, or into one of the major veins close to it. It may or may not have spread to the lymph nodes.",
          "At stage 4, the cancer has grown through the capsule that surrounds the kidney and into nearby areas, or has spread to other parts of the body further away. Cancer that has spread is called secondary or metastatic kidney cancer.",
        ],
      },
      {
        heading: "The letters T, N and M",
        paragraphs: [
          "The most commonly used staging system for kidney cancer is the TNM system. T describes the size of the tumour. N describes whether the cancer has spread to the lymph nodes. M describes whether it has spread to other parts of the body.",
          "For example, T1 means the cancer is only inside the kidney and is no bigger than 7cm. T1a means it is 4cm or smaller.",
        ],
      },
      {
        heading: "What the grade means",
        paragraphs: [
          "A doctor decides the grade by looking at the cancer cells under a microscope. Kidney cancers are usually given a grade from 1 to 3, but sometimes a 1 to 4 system is used. The lower the number, the lower the grade.",
          "Low grade means the cancer cells are more like normal cells, and they grow slowly. High grade means the cells are less like normal cells, and they grow more quickly.",
          "The main factor for deciding on treatment is whether the cancer has spread away from the kidney or not.",
        ],
      },
      {
        heading: "Statistics and you",
        paragraphs: [
          "Doctors cannot predict exactly what will happen. Statistics can be complex and difficult to understand, and they cannot tell you what will definitely happen to you. Not everyone wants or needs this information.",
          "If you want information about your outlook, it is best to talk to your cancer doctor or specialist nurse. They can explain which information applies to someone with your diagnosis.",
          "Waiting to know the stage and grade of your cancer can be a worrying time. You can call the Macmillan Support Line for free on 0808 808 00 00.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor or specialist nurse to explain what your stage and grade mean.",
      "Talk to your cancer doctor or specialist nurse about your outlook, rather than relying on statistics you find online.",
      "Ask at your first follow-up appointment about the type of kidney cancer and its grade.",
      "Ask your healthcare team to explain things again if you need them to.",
      "Call the Macmillan Support Line free on 0808 808 00 00 if waiting for results is worrying you.",
    ],
    tryThisWeek: [
      "Ask what your stage and grade mean.",
      "Ask your team, not the internet.",
      "Ask for things to be explained again.",
    ],
    ask: "What are the type, stage and grade of my kidney cancer, and what do they mean for my treatment and follow-up?",
    interactive: {
      kind: "flip-cards",
      title: "Stages and grades, card by card",
      intro: "Turn a card to see what each stage or grade describes.",
      cards: [
        { id: "stage-1", front: "Stage 1", when: "Inside the kidney", back: "The cancer is 7cm or smaller and is inside the kidney. It has not spread to the lymph nodes or other organs." },
        { id: "stage-2", front: "Stage 2", when: "Inside the kidney", back: "The cancer is bigger than 7cm and is inside the kidney. It has not spread to the lymph nodes or other organs." },
        { id: "stage-3", front: "Stage 3", when: "Into the fat or a major vein", back: "The cancer is growing into the fat around the kidney, or into the renal vein or vena cava. It may or may not have reached lymph nodes." },
        { id: "stage-4", front: "Stage 4", when: "Through the capsule, or further away", back: "The cancer has grown through the capsule into nearby areas, or has spread to parts of the body further away." },
        { id: "low-grade", front: "Low grade", when: "Grades 1 and 2", back: "The cancer cells are more like normal cells. They grow slowly and are less likely to spread." },
        { id: "high-grade", front: "High grade", when: "Grades 3 and 4", back: "The cancer cells are less like normal cells. They grow more quickly and are more likely to spread." },
      ],
    },
    sources: [MAC_KC_STAGE, CRUK_TYPES_GRADES, MAC_KC, CRUK_FOLLOWUP, CRUK_COPING],
    quiz: {
      question: "What does the stage of a kidney cancer describe?",
      options: [{ text: "Its size and whether it has spread", right: true }, { text: "How the cells look under a microscope" }, { text: "Which kidney it is in" }],
      why: "The stage describes its size and whether it has spread.",
    },
  },
  {
    id: "kc-follow-up",
    kicker: "Follow-up",
    question: "What happens at follow-up, and how often will I have scans?",
    hook: "Check-ups and CT scans carry on for several years. How often depends on your treatment and the chance of the cancer coming back, and you never have to wait for the next one to get help.",
    short: "After treatment for kidney cancer you have regular follow-up appointments, usually with CT scans and tests of how well your kidney or kidneys are working. How often depends on your treatment and the risk of the cancer coming back, and appointments become less frequent over time. You can contact your doctor or specialist nurse between appointments at any time.",
    sections: [
      {
        heading: "What follow-up is for",
        paragraphs: [
          "Follow-up appointments check your recovery after treatment and any side effects, whether the cancer has come back, and any questions or worries you have.",
          "You usually have follow-up appointments for a few years after treatment. If there are no signs of the cancer coming back, you have fewer appointments each year.",
          "Your appointments may be in person or over the telephone. It is important not to miss your scans and appointments, so make sure you know who to contact if you need to change a date.",
        ],
      },
      {
        heading: "The first appointment after surgery",
        paragraphs: [
          "You may have a telephone call from your specialist nurse when you go home after surgery. This is to make sure you are recovering well.",
          "Your first follow-up appointment with your surgeon is usually about 6 weeks after you leave hospital. They check how you are and explain the results of the tests on the cancer, including its type and grade.",
          "They may refer you to an oncologist if you need treatment to reduce the chance of the cancer coming back. This is called adjuvant treatment.",
        ],
      },
      {
        heading: "How often you have scans",
        paragraphs: [
          "How often you have follow-up and CT scans varies between hospitals. It also depends on your treatment and the risk of the cancer coming back. The higher the risk, the more often you have appointments and scans.",
          "The scans are normally CT scans of your chest, tummy and pelvis. You usually have regular CT scans for at least 5 years after surgery, and then your doctor decides whether you need any more.",
          "After the scans stop, you may be able to have follow-up with your GP.",
        ],
      },
      {
        heading: "At the appointment",
        paragraphs: [
          "Your doctor will examine you, check your lymph nodes and tummy, and listen to your chest. You will also have tests to check how well your kidneys or remaining kidney are working.",
          "Your doctor will ask how you are feeling, and you can ask questions. It may help to write questions down as you think of them, and to take someone with you.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "Contact your doctor or specialist nurse if you have any concerns between appointments, or notice any new symptoms. You do not have to wait until your next visit.",
          "Some people find it very stressful to know they need follow-up, and scans can make some people anxious. Your doctor or specialist nurse can explain why you have follow-up as often as you do, and tell you about support groups.",
        ],
      },
    ],
    helps: [
      "Contact your doctor or specialist nurse about any concerns or new symptoms, without waiting for your next visit.",
      "Keep your scans and follow-up appointments, and know who to contact to change a date.",
      "Write down your questions as you think of them, and take them with you.",
      "Take someone with you to support you and help you remember what was said.",
      "If you move, tell your old hospital and your new GP that you are being followed up for kidney cancer.",
      "Tell your doctor or specialist nurse if scans make you anxious.",
    ],
    tryThisWeek: [
      "Note your next scan date.",
      "Write down your questions.",
      "Save your specialist nurse's number.",
    ],
    ask: "How often will I have follow-up and CT scans, and who do I contact between appointments?",
    interactive: {
      kind: "timeline",
      title: "A typical road through follow-up",
      steps: [
        { id: "home", when: "After going home", title: "A call from your nurse", points: ["Your specialist nurse may phone to check you are recovering well."] },
        { id: "six-weeks", when: "About 6 weeks", title: "Seeing your surgeon", points: ["They explain the results of the tests on the cancer.", "They may refer you to an oncologist for adjuvant treatment."] },
        { id: "years", when: "The first years", title: "Regular CT scans", points: ["How often depends on your treatment and the risk of the cancer coming back.", "You have fewer appointments each year if all is well."] },
        { id: "five-years", when: "After 5 years", title: "Deciding what next", points: ["Your doctor decides whether you need more scans.", "After the scans stop, you may be followed up by your GP."] },
      ],
    },
    sources: [CRUK_FOLLOWUP, MAC_KC, MAC_FOLLOWUP],
    quiz: {
      question: "When is the first follow-up appointment with the surgeon usually?",
      options: [{ text: "About 6 weeks after leaving hospital", right: true }, { text: "The day after the operation" }, { text: "A year after the operation" }],
      why: "Your first follow-up appointment with your surgeon is usually about 6 weeks after you leave hospital.",
    },
  },
  {
    id: "kc-one-kidney",
    kicker: "One kidney",
    question: "Can I live a normal life with one kidney?",
    hook: "Usually, yes. One healthy kidney can do the work of two, and a few everyday habits help keep it that way.",
    short: "You can usually live a normal life with one kidney, because it can do the work of both. Your team checks how well it is working with regular blood and urine tests. Not smoking, keeping your blood pressure healthy and taking care with some medicines and contact sports all help protect it.",
    sections: [
      {
        heading: "One can do the work of two",
        paragraphs: [
          "You can usually live a normal life with one kidney. It can do the work of both kidneys.",
          "One kidney is enough to filter your blood to keep it clean and healthy. So there should be no ill effects of having only one, as long as it works normally.",
          "If you have had part of a kidney removed, your remaining kidney tissue and other kidney will usually be able to do the work of both kidneys.",
        ],
      },
      {
        heading: "What the kidneys do",
        paragraphs: [
          "The kidneys filter the blood to remove excess water and waste products, which are made into urine. They clean the blood and keep anything the body needs.",
          "This helps control the balance of fluid, salt and minerals in the body. It also helps maintain blood pressure.",
        ],
      },
      {
        heading: "Checking it is working well",
        paragraphs: [
          "You have regular tests after surgery to check your remaining kidney is working well. They are called kidney function tests, and include a urine test and a blood test.",
          "You usually have these tests as part of your follow-up appointments.",
        ],
      },
      {
        heading: "Protecting your remaining kidney",
        paragraphs: [
          "Lifestyle changes can help protect your remaining kidney or kidneys, because they help reduce your risk of high blood pressure, heart problems and diabetes. These conditions can put strain on the kidneys.",
          "Keeping your remaining kidney healthy includes stopping smoking, drinking less alcohol, eating a balanced diet, being more active, keeping your blood pressure in a healthy range and controlling other health conditions.",
          "It is important to avoid injury to your kidneys. You may have to avoid contact sports, such as rugby and football, and extreme sports such as skydiving.",
        ],
      },
      {
        heading: "Before a new sport or medicine",
        paragraphs: [
          "Speak to your doctor or nurse specialist if you want to restart or begin a particular exercise or sport, because not all activities may be suitable for you.",
          "Some painkillers, such as aspirin and ibuprofen, can damage the kidneys. Ask your doctor for advice before taking medicines you buy, or vitamin or mineral supplements.",
          "A small number of people may need kidney dialysis after having a kidney removed, for example if their other kidney does not work. Your doctor will talk to you about this if it applies to you.",
        ],
      },
    ],
    helps: [
      "Keep up your kidney function tests at your follow-up appointments.",
      "If you smoke, ask your GP or pharmacist for help to stop.",
      "Have your blood pressure checked regularly.",
      "Ask your doctor before taking painkillers you buy, such as aspirin or ibuprofen, or any supplements.",
      "Speak to your doctor or nurse specialist before starting a contact or extreme sport.",
      "Speak to your GP if you have symptoms of a urine infection.",
    ],
    tryThisWeek: [
      "Book a blood pressure check.",
      "Ask before taking ibuprofen.",
      "Check a sport with your nurse.",
    ],
    ask: "How well is my remaining kidney working, and is there anything I should avoid?",
    interactive: {
      kind: "risk-check",
      title: "What puts strain on a kidney?",
      intro: "Tick any that apply to you. Most of these can be changed or checked with your GP or team.",
      items: [
        { id: "bp", label: "High blood pressure", note: "It can damage your kidney. If it is raised, your GP can prescribe tablets to control it.", changeable: true },
        { id: "smoking", label: "Smoking", note: "It raises the risk of heart disease, which can stop your kidney working properly. Your GP or pharmacist can help you stop.", changeable: true },
        { id: "diabetes", label: "Diabetes that is not well controlled", note: "It can damage the kidney. Your GP or practice nurse can help you prevent or control problems.", changeable: true },
        { id: "weight", label: "Being above a healthy weight", note: "It can damage your kidneys. Your GP can tell you what your healthy weight is.", changeable: true },
        { id: "alcohol", label: "Heavy drinking over a long time", note: "It can cause kidney damage. Cutting down or stopping is helpful.", changeable: true },
        { id: "painkillers", label: "Painkillers such as ibuprofen", note: "Some painkillers can damage the kidneys. Ask your doctor before taking medicines you buy.", changeable: true },
        { id: "sport", label: "Contact or extreme sports", note: "It is important to avoid injury to your kidneys. Check with your doctor or nurse specialist first.", changeable: true },
      ],
    },
    sources: [MAC_KC_SURGERY, CRUK_DAILY, MAC_KC_RECOVERY, MAC_KIDNEYS, KCUK_TESTS],
    quiz: {
      question: "What can one healthy kidney usually do?",
      options: [{ text: "The work of both kidneys", right: true }, { text: "Only half the work, so dialysis is needed" }, { text: "Nothing without daily medicine" }],
      why: "You can usually live a normal life with one kidney. It can do the work of both kidneys.",
    },
  },
  {
    id: "kc-surgery-recovery",
    kicker: "Recovery",
    question: "How long does recovery from kidney surgery take?",
    hook: "A few days in hospital, about six weeks of tiredness, and most people feel recovered by about twelve weeks. Moving early helps.",
    short: "After keyhole surgery most people go home after 2 to 5 days, and after open surgery after 5 to 7 days. It is common to feel more tired than usual for about 6 weeks, and most people feel recovered after about 12 weeks. Know the signs of infection and blood clots, and who to call when you get home.",
    sections: [
      {
        heading: "The first days",
        paragraphs: [
          "Having all or part of your kidney removed is major surgery. You might have several tubes in place afterwards, such as a drip, a drain in your back or side and a catheter so your urine can be measured.",
          "It is normal to have pain for the first week or so, and you have painkillers to help. Tell your doctor or nurse as soon as you feel any pain, because painkillers work best when you take them regularly.",
        ],
      },
      {
        heading: "Moving early",
        paragraphs: [
          "After the operation, you will be encouraged to start moving around as soon as possible. Getting up may seem difficult at first, but moving about helps you get better quicker.",
          "It also helps to stop you getting a chest infection or a blood clot. You may have an injection every day to help stop blood clots, and some people need to continue these at home.",
        ],
      },
      {
        heading: "Going home and getting back to normal",
        paragraphs: [
          "How long you stay in hospital depends on the type of operation and how quickly you recover. After keyhole surgery, most people go home after 2 to 5 days. After open surgery, most people go home after 5 to 7 days.",
          "Your body uses a lot of energy to heal. It is common to feel more tired than usual for about 6 weeks after the operation, and most people feel they have recovered after about 12 weeks.",
          "While you recover, you may not be able to shop, drive, have sex, play sport or work. Your nurse or surgeon can tell you when you can do these things again. After tumour ablation, you may go home on the same day or the day after.",
        ],
      },
      {
        heading: "Your wound",
        paragraphs: [
          "After keyhole surgery, you have 3 or more small wounds. A special glue is sometimes used on them, which comes off on its own in about 10 days.",
          "If clips are used, they are left in for at least 10 days, and you may need an appointment with the practice nurse at your GP surgery to remove them.",
          "After open surgery, some people develop a bulge along their scar, called an incisional hernia. Tell your doctor or nurse if you develop a bulge around the scar.",
        ],
      },
      {
        heading: "Signs to act on at home",
        paragraphs: [
          "Tell your doctor or nurse if you have symptoms of an infection. These include a high temperature, feeling generally unwell, shivering, feeling hot and cold, swelling or redness around your wound, smelly or cloudy pee, or a cough.",
          "An area of your leg that is swollen, hot, red or sore can be a sign of a blood clot. Shortness of breath, chest pain, coughing up blood or feeling dizzy can be signs that a clot has travelled to the lungs. If you have any symptoms of a blood clot at home, contact a doctor immediately, call 999 or go to your nearest A&E.",
          "You will be given a telephone number to call if you need advice when you get home.",
        ],
      },
    ],
    helps: [
      "Start moving around as soon as you can after the operation.",
      "Tell your doctor or nurse as soon as you feel any pain, and take painkillers regularly.",
      "Do the leg exercises your nurse taught you, and move around as much as possible.",
      "Ask your nurse or surgeon when you can drive, work, play sport and have sex again.",
      "Tell your doctor or nurse if you notice a bulge around your scar.",
      "If you have signs of a blood clot at home, contact a doctor immediately, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Move around a little more each day.",
      "Ask when you can drive again.",
      "Keep the advice number to hand.",
    ],
    ask: "When can I drive, go back to work and lift things again, and who do I call if I have a problem at home?",
    interactive: {
      kind: "timeline",
      title: "Recovery after kidney surgery",
      steps: [
        { id: "ward", when: "First days", title: "On the ward", points: ["You are encouraged to start moving around as soon as possible.", "Pain is normal for the first week or so."] },
        { id: "home", when: "A few days", title: "Going home", points: ["Most people go home after 2 to 5 days after keyhole surgery.", "After open surgery, most go home after 5 to 7 days."] },
        { id: "ten-days", when: "About 10 days", title: "Wounds healing", points: ["Wound glue comes off on its own in about 10 days.", "Clips stay in for at least 10 days."] },
        { id: "six-weeks", when: "About 6 weeks", title: "Check-up", points: ["Feeling more tired than usual is common until about now.", "Your check-up is usually about 6 weeks after the operation."] },
        { id: "twelve-weeks", when: "About 12 weeks", title: "Feeling recovered", points: ["Most people feel they have recovered after about 12 weeks."] },
      ],
    },
    sources: [MAC_KC_SURGERY, CRUK_AFTER_SURGERY, CRUK_PROBLEMS, MAC_KC_ABLATION],
    quiz: {
      question: "When do most people feel they have recovered from kidney cancer surgery?",
      options: [{ text: "After about 12 weeks", right: true }, { text: "After about 2 days" }, { text: "Never fully" }],
      why: "Most people feel they have recovered after about 12 weeks.",
    },
  },
  {
    id: "kc-drugs",
    kicker: "Treatment",
    question: "How do targeted drugs and immunotherapy work for kidney cancer?",
    hook: "Targeted drugs act on the differences in cancer cells. Immunotherapy helps your own immune system attack the cancer. You might have one, the other or both together.",
    short: "Targeted drugs target the differences in cancer cells that help them grow, and immunotherapy helps the immune system attack cancer. They are the main treatment for advanced kidney cancer, and pembrolizumab may be given after surgery to reduce the risk of the cancer coming back. Targeted drugs are tablets or capsules, while immunotherapy is usually a drip every few weeks.",
    sections: [
      {
        heading: "Two ways of treating the cancer",
        paragraphs: [
          "Targeted cancer drugs target the differences in cancer cells. These differences help them grow and survive. Targeted medicines aim to slow or stop the cancer from growing.",
          "Other drugs help the immune system attack cancer. These are called immunotherapies. Some drugs work in more ways than one.",
        ],
      },
      {
        heading: "When they are used",
        paragraphs: [
          "Cancer drugs are the main treatment for advanced kidney cancer. You may have a combination of drugs or one drug on its own. The aim is to try to control the cancer, reduce symptoms and improve your quality of life.",
          "If you have an increased risk of the cancer coming back after surgery, your doctor may recommend an immunotherapy drug. This is called adjuvant treatment, and it helps to reduce the chance of the cancer coming back.",
          "If you have a genetic condition called von Hippel-Lindau disease, you may have a targeted drug called belzutifan instead of surgery. This can control a small early kidney cancer.",
        ],
      },
      {
        heading: "Targeted drugs: tablets at home",
        paragraphs: [
          "Targeted therapy drugs for kidney cancer are tablets or capsules that you take by mouth. You usually continue taking one as long as it keeps the cancer under control, and you have regular CT scans to check this.",
          "Most are taken every day. Some, such as sunitinib or tivozanib, are taken for a number of weeks followed by a break of several weeks. For kidney cancer, sunitinib is usually taken once a day for 4 weeks, followed by 2 weeks without the drug.",
          "Your cancer team may suggest short breaks in treatment to help manage side effects. Always follow your cancer team's advice about how to take your treatment.",
        ],
      },
      {
        heading: "Immunotherapy: a drip every few weeks",
        paragraphs: [
          "The immunotherapy drugs used for kidney cancer are also called checkpoint inhibitors. They are usually given as a drip into a vein, with one dose every few weeks.",
          "Pembrolizumab after surgery is given through a drip into your bloodstream every 3 to 6 weeks. It can also be given as an injection under the skin.",
          "You will be given a card with information about your treatment. It is important to keep it with you during treatment and after treatment ends, and to show it to any doctor or healthcare professional caring for you.",
        ],
      },
      {
        heading: "If a treatment stops working",
        paragraphs: [
          "Several different drugs are available. If one combination stops working, your cancer team may suggest trying a different drug or combination of drugs.",
          "Researchers continue to look at new drugs and new combinations, and you may have treatment as part of a clinical trial.",
        ],
      },
    ],
    helps: [
      "Take your tablets or capsules exactly as explained, at the same time every day.",
      "Do not eat grapefruit or drink grapefruit juice while you are taking sunitinib.",
      "If you miss a dose of sunitinib and a full day has passed, do not take a double dose; call the 24-hour number for advice.",
      "Keep your treatment card with you and show it to any doctor or healthcare professional caring for you.",
      "Save the hospital's 24-hour numbers in your phone.",
      "Always tell your doctor or nurse about any side effects you have, and follow their advice.",
    ],
    tryThisWeek: [
      "Take tablets at the same time daily.",
      "Carry your treatment card.",
      "Save the 24-hour numbers.",
    ],
    ask: "Which drug or combination am I having, how often, and what side effects should I look out for?",
    interactive: {
      kind: "flip-cards",
      title: "Drugs used for kidney cancer",
      intro: "Turn a card to see how each drug or group of drugs is given.",
      cards: [
        { id: "tki", front: "Targeted tablets", when: "Such as sunitinib, pazopanib or cabozantinib", back: "Tablets or capsules taken by mouth, usually for as long as they keep the cancer under control, with regular CT scans." },
        { id: "sunitinib", front: "Sunitinib", when: "Taken in 6-week cycles", back: "Usually taken once a day for 4 weeks, followed by 2 weeks without the drug. Avoid grapefruit while taking it." },
        { id: "pembrolizumab", front: "Pembrolizumab after surgery", when: "If the cancer is more likely to come back", back: "An immunotherapy drug given every 3 to 6 weeks. It helps reduce the chance of the cancer coming back." },
        { id: "nivo-ipi", front: "Nivolumab with ipilimumab", when: "A first treatment for advanced cancer", back: "Two immunotherapy drugs given together. Immunotherapy drugs are usually a drip into a vein every few weeks." },
        { id: "combination", front: "A targeted drug with immunotherapy", when: "Such as lenvatinib with pembrolizumab", back: "Some people have a targeted drug and an immunotherapy drug together as their first treatment." },
        { id: "belzutifan", front: "Belzutifan", when: "For von Hippel-Lindau disease", back: "A targeted drug that can control a small early kidney cancer, used instead of surgery." },
      ],
    },
    sources: [CRUK_TARGETED, MAC_KC_TREAT, CRUK_IMMUNO_AFTER, MAC_SUNITINIB, MAC_PEMBRO, MAC_KC, NHS_KC_TREAT],
    quiz: {
      question: "How are targeted therapy drugs for kidney cancer taken?",
      options: [{ text: "As tablets or capsules by mouth", right: true }, { text: "As a drip into a vein every day" }, { text: "As an injection into the kidney" }],
      why: "Targeted therapy drugs for kidney cancer are tablets or capsules that you take by mouth.",
    },
  },
  {
    id: "kc-side-effects",
    kicker: "Side effects",
    question: "Which side effects can be managed, and when should I call the hospital?",
    hook: "Most side effects can be managed if your team knows about them early. Some need a call to the hospital's 24-hour number straight away, and a few need 999.",
    short: "Each kidney cancer drug has its own side effects, and most can usually be managed if you tell your cancer team. Your team gives you a 24-hour hospital number to call at any time if you feel unwell or need advice. Immunotherapy side effects can start months or even more than a year after treatment ends, so they always need a call.",
    sections: [
      {
        heading: "Tell your team early",
        paragraphs: [
          "Each drug has its own side effects, and your cancer team will tell you which are likely with your treatment. It is important to tell your cancer team about any side effects, as these can usually be managed.",
          "Do not try to treat side effects yourself. Your team can give you drugs to help control some side effects, and advice about managing them.",
        ],
      },
      {
        heading: "The 24-hour number",
        paragraphs: [
          "Your doctor, nurse or pharmacist will give you 24-hour contact numbers for the hospital. If you feel unwell or need advice, you can call at any time of the day or night. Save these numbers in your phone or keep them somewhere safe.",
          "Contact the hospital straight away on the 24-hour number if your temperature goes above 37 and a half degrees or below 36 degrees, if you feel unwell even with a normal temperature, or if you have symptoms of an infection.",
          "Always call 999 if you have chest pain or difficulty breathing. If you have heavy bleeding that happens suddenly or will not stop, call 999.",
        ],
      },
      {
        heading: "Targeted tablets",
        paragraphs: [
          "With a targeted drug such as sunitinib, feeling tired, diarrhoea, a sore mouth and taste changes are common. If you are passing loose stools 3 or more times a day and this is not normal for you, contact the hospital as soon as possible on the 24-hour number.",
          "The palms of your hands and soles of your feet may become sore, tingle, swell, peel or blister. This is called hand-foot syndrome. Contact the hospital straight away if you notice it, and keep your hands and feet cool and gently moisturised.",
          "These drugs can also cause high blood pressure. You will have your blood pressure checked before and during treatment, or you may be given a monitor to check it at home.",
        ],
      },
      {
        heading: "Immunotherapy and the immune system",
        paragraphs: [
          "Immunotherapy makes the immune system more active. This can cause side effects when the immune system attacks normal cells in the body as well as the cancer cells.",
          "These side effects may be mild to start with, but can quickly become serious unless treated. They can start during treatment, or weeks, months or sometimes more than a year after you finish it.",
          "Contact the hospital straight away on the 24-hour number if you have diarrhoea 4 or more times in a day, breathlessness or a cough that does not go away, yellow skin or eyes, or a rash that is spreading.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "Drinking fluids helps protect your kidneys. The advice is usually to try to drink at least 2 litres of fluid each day, but follow your team's advice about how much is right for you.",
          "Your skin may burn more easily, so use a sun cream of at least SPF 30 and cover up with clothing and a hat.",
          "Always tell your cancer team about any other drugs you are taking or planning to take, including medicines you buy, vitamins, supplements and herbal remedies.",
        ],
      },
    ],
    helps: [
      "Save the hospital's 24-hour numbers in your phone, and call at any time of the day or night if you feel unwell.",
      "Tell your cancer team about every side effect, as these can usually be managed.",
      "Do not try to treat side effects yourself.",
      "Call the 24-hour number about any new symptom during immunotherapy or after it ends.",
      "Always call 999 if you have chest pain or difficulty breathing.",
      "Tell your team about any medicines, vitamins or herbal remedies you take.",
    ],
    tryThisWeek: [
      "Save the 24-hour number.",
      "Report every side effect.",
      "Know when to call 999.",
    ],
    ask: "Which side effects are most likely with my treatment, and which ones mean I should call the 24-hour number straight away?",
    interactive: {
      kind: "signs",
      title: "Signs to report to the hospital",
      intro: "Tick any you have had. Contact the hospital straight away on the 24-hour number about these.",
      signs: [
        "A temperature above 37 and a half degrees",
        "A temperature below 36 degrees",
        "Feeling unwell, even with a normal temperature",
        "Diarrhoea 4 or more times in a day",
        "A cough that does not go away",
        "Breathlessness",
        "Yellow skin or eyes",
        "A rash that is spreading",
        "Sore, peeling or blistered hands or feet",
        "Unexplained bruising or bleeding",
      ],
      after: "Always call 999 if you have chest pain or difficulty breathing, or heavy bleeding that happens suddenly or will not stop.",
      copyHeading: "Side effects to tell the hospital about",
    },
    sources: [MAC_KC_TREAT, MAC_SUNITINIB, MAC_PEMBRO, MAC_IMMUNO, CRUK_IMMUNO_AFTER],
    quiz: {
      question: "When can immunotherapy side effects start?",
      options: [{ text: "During treatment, or even more than a year after it ends", right: true }, { text: "Only on the day of the drip" }, { text: "Only in the first week" }],
      why: "They can start during treatment, or weeks, months or sometimes more than a year after you finish it.",
    },
  },
  {
    id: "kc-fatigue",
    kicker: "Tiredness",
    question: "Why am I so tired after kidney cancer treatment?",
    hook: "Healing from surgery takes a lot of energy, and targeted drugs and immunotherapy can tire you too. Pacing, a little activity and telling your team all help.",
    short: "Fatigue is very common with cancer and, unlike ordinary tiredness, it does not usually go away with sleep or rest. After kidney surgery it is common to feel more tired than usual for about 6 weeks, and drug treatments can cause tiredness too. Pacing your day, gentle activity and telling your team, especially if it gets worse, can help.",
    sections: [
      {
        heading: "More than being tired",
        paragraphs: [
          "Fatigue means feeling very tired, exhausted and lacking energy. It can be a symptom of the cancer or a side effect of treatment.",
          "It is very common. Research suggests cancer related fatigue affects almost 65 out of 100 people with cancer.",
          "Unlike ordinary tiredness, cancer fatigue does not usually go away with sleep or rest. For most people, fatigue gets better after treatment finishes, but for some it may continue for months or sometimes years.",
        ],
      },
      {
        heading: "After surgery",
        paragraphs: [
          "Your body uses a lot of energy to heal. It is common to feel more tired than usual for about 6 weeks after the operation.",
          "Most people feel weak and lack strength for some time after their operation. Try to move and exercise gradually, and set a goal every day. A balanced diet will also help your energy levels.",
          "Tell your doctor or nurse if the weakness continues for more than a few weeks. If you look paler than normal or continue to feel tired, they may arrange a blood test.",
        ],
      },
      {
        heading: "During drug treatment",
        paragraphs: [
          "Feeling tired is a common side effect of targeted drugs and immunotherapy. If you feel sleepy, do not drive or use machinery.",
          "Sometimes immunotherapy affects glands that make hormones, which can make you feel tired. Contact the hospital on the 24-hour number if your tiredness gets worse or stops you doing your usual daily activities, or if you feel weak or shaky.",
          "If you feel very low in energy, breathless, dizzy and light-headed, this may be anaemia. Contact the hospital straight away on the 24-hour number.",
        ],
      },
      {
        heading: "Pacing your day",
        paragraphs: [
          "Try planning your day so that you have energy for the things that are most important to you. Pace yourself, take short naps and rests, but try to balance them with some activity.",
          "A fatigue diary can help you record your energy levels at different times of day and find patterns. Your nurse may ask you to score your fatigue from 0 to 10, where 10 is the worst possible fatigue.",
          "Spread tasks out over the week, and do a little each day rather than lots at one time. Online shopping or ready meals can save energy on tired days.",
        ],
      },
      {
        heading: "Moving more, and getting help",
        paragraphs: [
          "There is good evidence that physical activity, such as walking quickly, is one of the best ways to help reduce fatigue. To start with, you could go for a short walk each day, and increase the distance when you are ready.",
          "Talk to your doctor, nurse or physiotherapist about what you can do, so you find a realistic goal and do not overdo things.",
          "Your cancer doctor, specialist nurse or GP can refer you to an occupational therapist, who can help you find ways to do everyday tasks more easily.",
        ],
      },
    ],
    helps: [
      "Keep a fatigue diary, and score your fatigue from 0 to 10.",
      "Plan your day so you have energy for the things that matter most to you.",
      "Go for a short walk each day, and build up when you are ready.",
      "Tell your doctor or nurse if weakness after surgery continues for more than a few weeks.",
      "During immunotherapy, call the 24-hour number if your tiredness gets worse or stops your usual activities.",
      "Ask for a referral to an occupational therapist.",
    ],
    tryThisWeek: [
      "Score your energy each day.",
      "Take a short daily walk.",
      "Plan around what matters most.",
    ],
    ask: "Could my tiredness be caused by my treatment, anaemia or a hormone change, and can I be referred for help?",
    interactive: {
      kind: "scenarios",
      title: "Tired-day choices",
      scenarios: [
        {
          id: "sleep",
          situation: "Someone says a good night's sleep will sort your tiredness out.",
          options: [{ text: "Explain cancer fatigue doesn't usually go away with sleep", best: true }, { text: "Feel you are doing something wrong" }],
          why: "Unlike ordinary tiredness, cancer fatigue does not usually go away with sleep or rest.",
        },
        {
          id: "worse",
          situation: "During immunotherapy, your tiredness is getting worse and you feel shaky.",
          options: [{ text: "Call the hospital's 24-hour number", best: true }, { text: "Wait for your next appointment" }],
          why: "Contact the hospital on the 24-hour number if your tiredness gets worse or stops you doing your usual daily activities, or if you feel weak or shaky.",
        },
        {
          id: "weeks",
          situation: "Two months after surgery, you still feel weak.",
          options: [{ text: "Tell your doctor or nurse", best: true }, { text: "Keep it to yourself" }],
          why: "Tell your doctor or nurse if the weakness continues for more than a few weeks.",
        },
        {
          id: "housework",
          situation: "You feel well this morning and want to clean the whole house.",
          options: [{ text: "Do a little, and spread the rest over the week", best: true }, { text: "Do it all while you can" }],
          why: "Spread tasks out over the week, and do a little each day rather than lots at one time.",
        },
      ],
    },
    sources: [CRUK_FATIGUE_WHAT, MAC_FATIGUE, MAC_KC_SURGERY, CRUK_PROBLEMS, MAC_SUNITINIB, MAC_PEMBRO, CRUK_FATIGUE_MANAGE],
    quiz: {
      question: "How long is it common to feel more tired than usual after kidney cancer surgery?",
      options: [{ text: "About 6 weeks", right: true }, { text: "About 2 days" }, { text: "Always for the rest of your life" }],
      why: "It is common to feel more tired than usual for about 6 weeks after the operation.",
    },
  },
  {
    id: "kc-kidney-health",
    kicker: "Kidney health",
    question: "How do I look after my kidney function?",
    hook: "Regular blood and urine tests keep an eye on it. Plenty of water, less salt, care with painkillers and a few other habits help protect it.",
    short: "Your team checks your kidney function with blood and urine tests at follow-up. Drinking plenty of water, eating less salt, not smoking, drinking less alcohol and asking before taking painkillers such as ibuprofen all help protect your kidneys. Urine infections need checking by your GP.",
    sections: [
      {
        heading: "The tests that check your kidneys",
        paragraphs: [
          "You have regular kidney function tests after surgery, including a urine test and a blood test. You usually have them as part of your follow-up appointments.",
          "The main blood test measures a waste product called creatinine. A doctor uses it, with your age, size and gender, to calculate your estimated glomerular filtration rate, or eGFR.",
          "Healthy kidneys should be able to filter more than 90ml a minute, and the higher the eGFR, the better. But eGFR is not used on its own, and an eGFR as low as 60 may be considered normal if there is no other sign of kidney disease.",
        ],
      },
      {
        heading: "Drink plenty, and go easy on salt",
        paragraphs: [
          "Drink at least 2 litres of non-alcoholic fluids a day. This helps protect the kidneys, and plain water is best. Avoid bottled waters that are high in salts, as they make the kidneys work harder.",
          "Try to limit the amount of salt you eat, because salt can raise blood pressure and make the kidneys work harder. Processed foods contain added salt too.",
          "If you are following a weight-loss diet, avoid high-protein diets, as these can stress the kidneys. If your remaining kidney is not working so well, your doctor or nurse can refer you to a dietitian.",
        ],
      },
      {
        heading: "Medicines and supplements",
        paragraphs: [
          "Some painkillers, such as aspirin and ibuprofen, can damage the kidneys. Ask your doctor for advice before taking medicines you buy in a shop, pharmacy or online, and before taking vitamin or mineral supplements.",
          "The NHS says ibuprofen may not be suitable if you have a kidney condition. Possible serious side effects include a problem with your kidneys, causing symptoms such as shortness of breath, blood in your pee or swelling in your ankles, feet or hands.",
        ],
      },
      {
        heading: "Smoking, alcohol and weight",
        paragraphs: [
          "Smoking has been linked to kidney cancer, and it raises your risk of heart disease, which can stop your kidney from working properly. Speak to your GP or pharmacist if you need help to stop.",
          "Heavy drinking over a long period of time can cause kidney damage. Guidelines recommend not regularly drinking more than 14 units of alcohol a week, with a few alcohol-free days each week.",
          "Being above a healthy weight can damage your kidneys. Your GP can tell you what your healthy weight is.",
        ],
      },
      {
        heading: "Infections and other conditions",
        paragraphs: [
          "Urine infections can usually be easily treated, but if they are ignored they can cause problems with the kidneys. If you have smelly or cloudy urine, pain or burning when you pass urine, or feel you have to pass urine urgently, speak to your GP.",
          "Some other health problems, such as diabetes, can damage your kidney if they are not well controlled. Your GP or practice nurse can check you for these.",
        ],
      },
    ],
    helps: [
      "Keep up your kidney function tests at follow-up.",
      "Drink at least 2 litres of non-alcoholic fluids a day; plain water is best.",
      "Cut down on salt, including the salt in processed foods.",
      "Ask your doctor before taking painkillers you buy, such as aspirin or ibuprofen, or supplements.",
      "Speak to your GP if you have symptoms of a urine infection.",
      "Ask your GP or pharmacist for help to stop smoking.",
    ],
    tryThisWeek: [
      "Drink 2 litres a day, mostly water.",
      "Check labels for added salt.",
      "Ask before buying painkillers.",
    ],
    ask: "What is my eGFR now, how often will it be checked, and which painkillers are safe for me?",
    interactive: {
      kind: "scenarios",
      title: "Everyday kidney choices",
      scenarios: [
        {
          id: "headache",
          situation: "You have a headache and there is ibuprofen in the cupboard.",
          options: [{ text: "Ask your doctor or pharmacist first", best: true }, { text: "Take it anyway" }],
          why: "Some painkillers, such as aspirin and ibuprofen, can damage the kidneys. Ask your doctor for advice before taking medicines you buy.",
        },
        {
          id: "drink",
          situation: "You are choosing what to drink through the day.",
          options: [{ text: "Plain water, at least 2 litres in all", best: true }, { text: "Bottled water high in salts" }],
          why: "Plain water is best. Avoid bottled waters that are high in salts, as they make the kidneys work harder.",
        },
        {
          id: "urine",
          situation: "Your urine is cloudy and it burns when you pass it.",
          options: [{ text: "Speak to your GP", best: true }, { text: "Ignore it and hope it passes" }],
          why: "Urine infections can usually be easily treated, but if they are ignored they can cause problems with the kidneys.",
        },
        {
          id: "diet",
          situation: "A friend suggests a high-protein diet to lose weight.",
          options: [{ text: "Choose a balanced diet instead", best: true }, { text: "Start the high-protein diet" }],
          why: "If you are following a weight-loss diet, avoid high-protein diets, as these can stress the kidneys.",
        },
      ],
    },
    sources: [CRUK_DAILY, NHS_CKD_DIAG, KCUK_TESTS, MAC_KC_RECOVERY, NHS_IBUPROFEN],
    quiz: {
      question: "Which painkillers does Macmillan say can damage the kidneys?",
      options: [{ text: "Some, such as aspirin and ibuprofen", right: true }, { text: "None at all" }, { text: "Only prescription painkillers" }],
      why: "Some painkillers, such as aspirin and ibuprofen, can damage the kidneys.",
    },
  },
  {
    id: "kc-blood-pressure",
    kicker: "Blood pressure",
    question: "Why does my blood pressure matter after kidney cancer?",
    hook: "High blood pressure can damage the kidney, and some kidney cancer drugs can raise it. It rarely causes symptoms, so regular checks matter.",
    short: "High blood pressure does not always cause symptoms, but it can be bad for the kidneys. It is important to have it checked regularly, and your GP can prescribe tablets if it is raised. Some targeted drugs and immunotherapy can raise blood pressure, so your team checks it during treatment.",
    sections: [
      {
        heading: "Kidneys and blood pressure",
        paragraphs: [
          "The kidneys help control the balance of fluid, salt and minerals in the body, and help maintain blood pressure.",
          "Having high blood pressure can damage your kidney. If blood pressure is too high, it puts extra strain on your blood vessels, heart and other organs, such as your brain, kidneys and eyes.",
          "High blood pressure does not always cause any symptoms, so many people have it without realising.",
        ],
      },
      {
        heading: "Getting it checked",
        paragraphs: [
          "It is important to have your blood pressure checked regularly. Your GP monitors it to make sure your kidney stays healthy, and if it is raised, your GP can prescribe tablets to control it.",
          "You are usually considered to have high blood pressure if your reading is 140/90 or higher when checked by a healthcare professional, or 135/85 or higher when checked at home.",
        ],
      },
      {
        heading: "Cancer drugs can raise it",
        paragraphs: [
          "Targeted drugs such as sunitinib can cause high blood pressure in some people. You will have your blood pressure checked before and during treatment, or you may be given a monitor so you can check it at home.",
          "Some people may need to take medicine to control their blood pressure during treatment. Immunotherapy such as pembrolizumab can also cause high blood pressure, so tell your doctor or nurse if you have ever had problems with your blood pressure.",
        ],
      },
      {
        heading: "Everyday things that help",
        paragraphs: [
          "Eating a balanced diet and being more active can help control your blood pressure. The NHS suggests aiming for at least 150 minutes of exercise a week, and losing weight if you are overweight.",
          "Try not to eat too much salt, as salt can raise blood pressure and make the kidneys work harder. Avoid drinking more than 14 alcohol units a week on a regular basis, cut down on caffeine and do not smoke.",
        ],
      },
      {
        heading: "When to get help quickly",
        paragraphs: [
          "Get help from NHS 111 if you often have headaches or blurred vision, or chest pain that comes and goes.",
          "Call 999 if you get sudden pain or discomfort in your chest that does not go away, or chest pain with feeling sweaty, sick, light-headed or short of breath. Do not drive yourself to A&E.",
        ],
      },
    ],
    helps: [
      "Have your blood pressure checked regularly by your GP or practice nurse.",
      "If your blood pressure is raised, ask your GP about tablets to control it.",
      "If you are given a home monitor during cancer drug treatment, use it as you have been shown.",
      "Cut down on salt, alcohol and caffeine, and do not smoke.",
      "Aim for at least 150 minutes of exercise a week.",
      "Call 999 if you have sudden chest pain that does not go away.",
    ],
    tryThisWeek: [
      "Book a blood pressure check.",
      "Cut back on salt.",
      "Add a few active minutes each day.",
    ],
    ask: "What is my blood pressure, what should it be, and does my cancer treatment mean I should check it at home?",
    interactive: {
      kind: "risk-check",
      title: "What raises blood pressure?",
      intro: "Tick any that apply. Many can be changed, and your GP can help.",
      items: [
        { id: "salt", label: "A diet high in salt", note: "Salt can raise blood pressure and make the kidneys work harder.", changeable: true },
        { id: "alcohol", label: "Drinking too much alcohol", note: "Avoid drinking more than 14 alcohol units a week on a regular basis.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Smoking increases the risk of high blood pressure and heart disease.", changeable: true },
        { id: "weight", label: "Being overweight", note: "Losing weight if you are overweight can help lower blood pressure.", changeable: true },
        { id: "stress", label: "Feeling stressed for a long time", note: "Long-term stress is one of the things that increases the chances of high blood pressure.", changeable: true },
        { id: "drugs", label: "Taking a targeted cancer drug", note: "Some can raise blood pressure, so your team checks it before and during treatment.", changeable: false },
        { id: "age-family", label: "Older age or close relatives with it", note: "These increase your chances of having high blood pressure, which usually has no symptoms.", changeable: false },
      ],
    },
    sources: [MAC_KIDNEYS, CRUK_DAILY, NHS_HBP, MAC_KC_RECOVERY, MAC_SUNITINIB, MAC_PEMBRO],
    quiz: {
      question: "Which home reading usually means high blood pressure?",
      options: [{ text: "135/85 or higher", right: true }, { text: "Anything above 100/60" }, { text: "Only 180/120 or higher" }],
      why: "You are usually considered to have high blood pressure if your reading is 135/85 or higher when checked at home.",
    },
  },
  {
    id: "kc-work",
    kicker: "Work and money",
    question: "When can I go back to work, and what help is there with money?",
    hook: "The law treats cancer as a disability from the day you are diagnosed. A phased return, adjustments, Access to Work and benefits can all help.",
    short: "If you have or have had cancer, the law treats it as a disability, so your employer should consider reasonable adjustments such as a phased return or extra breaks. Your nurse or surgeon can tell you when you can work again after surgery. Access to Work grants, benefits and free prescriptions may help with money, and Macmillan's money advisers can explain what you might get.",
    sections: [
      {
        heading: "Your rights",
        paragraphs: [
          "If you have cancer, the law considers this a disability. You automatically meet the definition under the Equality Act 2010 from the day you are diagnosed. In Northern Ireland, the Disability Discrimination Act 1995 protects you.",
          "This protection does not end when your treatment finishes. You keep it even if you no longer have cancer, and if you move to another employer.",
        ],
      },
      {
        heading: "When to go back",
        paragraphs: [
          "While you recover from surgery, you may not be able to work. Talk to your doctor or nurse specialist about how long you will need off. This depends on the operation you had, how well you are recovering and the job you do.",
          "For many people, returning to work when they feel ready is a big step in their recovery. It can help you get back into a routine and feel a sense of normality.",
          "You may still be coping with side effects, or feel too well to stay at home but not quite well enough to deal with work pressures.",
        ],
      },
      {
        heading: "Adjustments that help",
        paragraphs: [
          "Your employer should consider reasonable adjustments, which are changes to the workplace or your job that let you keep working or return. They could include a phased return, different working hours, time off for medical appointments or extra breaks to help with tiredness.",
          "You and your manager can agree a return-to-work plan, which should be as flexible as possible. You can also ask your doctor for a fit note, which explains how your health affects what you can do at work.",
          "You do not have to tell your employer you have cancer. But they do not have to make a reasonable adjustment unless they know, or should reasonably know, that you have cancer.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work could give you a grant to help pay for practical support, such as specialist equipment, or the cost of travelling to work if you cannot use public transport.",
          "A grant will not affect any other benefits you get, and you will not have to pay it back. It will not pay for reasonable adjustments, which your employer must legally make.",
        ],
      },
      {
        heading: "Help with money",
        paragraphs: [
          "If cancer is affecting your income, you may be able to get financial help, even if you have never claimed before. Each benefit has different rules about who can claim.",
          "Prescriptions are free in Scotland, Wales and Northern Ireland. In England, people being treated for cancer can apply for a medical exemption certificate, which gives them free prescriptions.",
          "Macmillan's money advisers can explain what you might be entitled to on 0808 808 00 00, Monday to Friday, 8am to 6pm. A hospital social worker can also check you get the benefits you are entitled to.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or nurse specialist how long you will need off work.",
      "Agree a flexible return-to-work plan with your manager, and meet regularly to review it.",
      "Ask about a phased return, different hours or extra breaks.",
      "Ask your doctor for a fit note.",
      "Check whether Access to Work could help with costs such as travel.",
      "Call Macmillan's money advisers free on 0808 808 00 00 to find out what you might be entitled to.",
    ],
    tryThisWeek: [
      "Ask how long you need off.",
      "Ask about a phased return.",
      "Call a Macmillan money adviser.",
    ],
    ask: "How long will I need off work, and can you give me a fit note that explains what I can do?",
    interactive: {
      kind: "scenarios",
      title: "Moments at work",
      scenarios: [
        {
          id: "telling",
          situation: "You would like adjustments but have not told your employer about the cancer.",
          options: [{ text: "Tell them, so they can make adjustments", best: true }, { text: "Expect changes without telling them" }],
          why: "They do not have to make a reasonable adjustment unless they know, or should reasonably know, that you have cancer.",
        },
        {
          id: "phased",
          situation: "Full days feel like too much straight after recovery.",
          options: [{ text: "Ask for a phased return", best: true }, { text: "Go straight back full time" }],
          why: "Reasonable adjustments could include a phased return, different working hours or extra breaks to help with tiredness.",
        },
        {
          id: "travel",
          situation: "You cannot manage public transport to work yet.",
          options: [{ text: "Check whether Access to Work can help", best: true }, { text: "Give up the job" }],
          why: "Access to Work could give you a grant to help pay for the cost of travelling to work if you cannot use public transport.",
        },
        {
          id: "prescriptions",
          situation: "You live in England and are paying for prescriptions during treatment.",
          options: [{ text: "Apply for a medical exemption certificate", best: true }, { text: "Keep paying" }],
          why: "In England, people being treated for cancer can apply for a medical exemption certificate, which gives them free prescriptions.",
        },
      ],
    },
    sources: [MAC_RIGHTS, GOV_DISABILITY, MAC_KC_SURGERY, CRUK_AFTER_SURGERY, MAC_RETURNING, MAC_ADJUSTMENTS, GOV_ATW, MAC_MONEY, CRUK_COPING],
    quiz: {
      question: "When do you meet the Equality Act's definition of disability if you have cancer?",
      options: [{ text: "From the day you are diagnosed", right: true }, { text: "After 12 months off work" }, { text: "Only while you are having treatment" }],
      why: "You automatically meet the definition under the Equality Act 2010 from the day you are diagnosed.",
    },
  },
  {
    id: "kc-mood",
    kicker: "Mood",
    question: "Why do I feel low now that treatment has ended?",
    hook: "Relief and worry often arrive together. Low feelings usually ease with time and support, and help is there if they do not, including right now.",
    short: "Many people feel relieved when treatment ends but worried about the future, and scans can bring back anxiety. Feelings of sadness often improve as you recover, but if low mood goes on for more than 2 weeks, talk to your doctor or nurse. If you have thoughts of self-harm or suicide, contact your GP or specialist nurse straight away or go to A&E, or call Samaritans free on 116 123.",
    sections: [
      {
        heading: "Mixed feelings are common",
        paragraphs: [
          "People often have many different feelings when they finish kidney cancer treatment. You may feel relieved that treatment has finished, but worried about what will happen in the future.",
          "Many people find it hard at first not meeting with their cancer team as often. It is important to remember that you can contact them if you need to.",
          "Sometimes emotional recovery can take longer than physical recovery. But things should improve with time and the right support.",
        ],
      },
      {
        heading: "When scans bring back the worry",
        paragraphs: [
          "Having scans after treatment has finished can make some people anxious. You can talk this through with your doctor or specialist nurse.",
          "It can help to tell someone how you are feeling. Sharing your worries can mean they do not seem so overwhelming.",
        ],
      },
      {
        heading: "Sadness or depression?",
        paragraphs: [
          "As you begin to recover, feelings of sadness and loss often improve. But for some people, the low mood continues or gets worse, and may become depression.",
          "Symptoms can include feeling low or sad most of the time, losing interest in things you used to enjoy, changes in sleeping, eating or concentration, and feeling helpless. If they go on for more than 2 weeks, talk to your doctor or nurse.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "Talking about your feelings with family, friends or a partner can help. So can talking to people going through similar experiences, at a cancer support group or online.",
          "Your GP or specialist nurse can listen, refer you to a counsellor or psychologist, and talk to you about medicine that can help treat depression. You can also refer yourself to NHS talking therapies if you are registered with a GP and aged 18 or over, or 16 or over in some areas.",
          "Anti-depressants can take up to 4 weeks to start helping. They are not addictive, but you should not stop taking them suddenly, and it is important to follow your doctor's advice.",
        ],
      },
      {
        heading: "If you are struggling right now",
        paragraphs: [
          "If you have any thoughts about self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. You can call Samaritans free on 116 123, any time, day or night.",
          "For urgent help with your mental health, call 111 and select the mental health option, or ask for an urgent GP appointment. If you would rather not talk, you can text SHOUT to 85258.",
          "Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Talk about how you feel with family, friends or a partner.",
      "Talk to your doctor or nurse if low feelings go on for more than 2 weeks.",
      "Refer yourself to NHS talking therapies, or ask your GP about counselling.",
      "Join a cancer support group, in person or online.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "If you do not feel you can keep yourself safe, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Tell someone close how you feel.",
      "Look up NHS talking therapies.",
      "Find a support group.",
    ],
    ask: "Could my low mood be depression, and can you refer me for counselling or a talking therapy?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your doctor or nurse",
      intro: "Tick any you have had most of the time. If they go on for more than 2 weeks, talk to your doctor or nurse.",
      signs: [
        "Feeling low or sad most of the time",
        "Losing interest in things I used to enjoy",
        "Changes in my sleep",
        "Changes in my eating",
        "Trouble concentrating",
        "Feeling helpless or vulnerable",
        "Problems starting or finishing tasks",
      ],
      after: "If you have thoughts of self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. Samaritans is free on 116 123.",
      copyHeading: "How I have been feeling",
    },
    sources: [MAC_KC, MAC_RECOVER, CRUK_FOLLOWUP, MAC_DEPRESSION, NHS_TALKING, NHS_URGENT, NHS_SUICIDAL, SAMARITANS],
    quiz: {
      question: "When should you talk to your doctor or nurse about low feelings?",
      options: [{ text: "If they go on for more than 2 weeks", right: true }, { text: "Only if they last a year" }, { text: "Never, they always pass" }],
      why: "If they go on for more than 2 weeks, talk to your doctor or nurse.",
    },
  },
];
