import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Lymphoma page's pieces (content/library-conditions/cancer-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from Lymphoma Action,
// the NHS, Macmillan Cancer Support, Cancer Research UK and Blood Cancer UK, with the government's Access
// to Work page and Samaritans for the work and mood answers. The answers describe tests, treatment,
// recovery and living with after-effects; there are no survival or life-expectancy figures, and nothing
// is a prediction for one person. Emergency guidance (signs of infection or sepsis) is given as the NHS,
// Lymphoma Action and Macmillan state it. General information only; it never replaces what a person's
// own lymphoma team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const la = (label: string, path: string): LearnSource => ({ label: `Lymphoma Action: ${label}`, url: `https://lymphoma-action.org.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/${path}` });
const bcuk = (label: string, path: string): LearnSource => ({ label: `Blood Cancer UK: ${label}`, url: `https://bloodcancer.org.uk/${path}` });

const NHS_HL_WHAT = nhs("What is Hodgkin lymphoma?", "conditions/hodgkin-lymphoma/what-is-hodgkin-lymphoma/");
const NHS_HL_TESTS = nhs("Tests and next steps for Hodgkin lymphoma", "conditions/hodgkin-lymphoma/tests/");
const NHS_HL_TREAT = nhs("Treatment for Hodgkin lymphoma", "conditions/hodgkin-lymphoma/treatment/");
const NHS_HL_HELP = nhs("Help and support for Hodgkin lymphoma", "conditions/hodgkin-lymphoma/help-and-support/");
const NHS_NHL_WHAT = nhs("What is non-Hodgkin lymphoma?", "conditions/non-hodgkin-lymphoma/what-is/");
const NHS_NHL_SYMPTOMS = nhs("Symptoms of non-Hodgkin lymphoma", "conditions/non-hodgkin-lymphoma/symptoms/");
const NHS_NHL_TESTS = nhs("Tests and next steps for non-Hodgkin lymphoma", "conditions/non-hodgkin-lymphoma/tests-and-next-steps/");
const NHS_NHL_TREAT = nhs("Treatment for non-Hodgkin lymphoma", "conditions/non-hodgkin-lymphoma/treatment/");
const NHS_NHL_HELP = nhs("Help and support for non-Hodgkin lymphoma", "conditions/non-hodgkin-lymphoma/help-and-support/");
const NHS_CHEMO = nhs("Chemotherapy", "tests-and-treatments/chemotherapy/");
const NHS_SEPSIS = nhs("Sepsis", "conditions/sepsis/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const LA_WHAT = la("What is lymphoma?", "information-and-support/what-lymphoma");
const LA_LYMPHATIC = la("The lymphatic system", "information-and-support/what-lymphoma/lymphatic-system");
const LA_CAUSES = la("Causes and risk factors for lymphoma", "information-and-support/what-lymphoma/causes-and-risk-factors-lymphoma");
const LA_HL = la("Hodgkin lymphoma", "information-and-support/types-lymphoma/hodgkin-lymphoma");
const LA_NHL = la("Non-Hodgkin lymphoma", "information-and-support/types-lymphoma/non-hodgkin-lymphoma");
const LA_BIOPSY = la("Biopsy", "information-and-support/tests-scans-and-lymphoma-staging/biopsy");
const LA_PET = la("CT and PET/CT scan", "information-and-support/tests-scans-and-lymphoma-staging/ct-and-petct-scan");
const LA_STAGING = la("Lymphoma staging", "information-and-support/tests-scans-and-lymphoma-staging/lymphoma-staging");
const LA_WAITING = la("Waiting for test and scan results", "information-and-support/tests-scans-and-lymphoma-staging/waiting-test-and-scan-results");
const LA_ACTIVE = la("Active monitoring (watch and wait)", "information-and-support/lymphoma-treatment/active-monitoring-watch-and-wait");
const LA_ACTIVE_HUB = la("On active monitoring for lymphoma?", "active-monitoring-lymphoma");
const LA_CHEMO = la("Chemotherapy", "information-and-support/lymphoma-treatment/chemotherapy");
const LA_TARGETED = la("Targeted treatments and antibody therapy", "information-and-support/lymphoma-treatment/targeted-treatments-and-antibody-therapy");
const LA_RADIO = la("Radiotherapy for lymphoma", "information-and-support/lymphoma-treatment/radiotherapy");
const LA_MAINTENANCE = la("Maintenance therapy", "information-and-support/lymphoma-treatment/maintenance-therapy");
const LA_INFECTIONS = la("Infections: risk and prevention", "information-and-support/side-effects-lymphoma-and-treatment/infections-risk-and-prevention");
const LA_NEUTROPENIA = la("Neutropenia (low neutrophils)", "information-and-support/side-effects-lymphoma-and-treatment/neutropenia-low-neutrophils");
const LA_FATIGUE = la("Cancer-related fatigue", "information-and-support/side-effects-lymphoma-and-treatment/cancer-related-fatigue");
const LA_LATE = la("Late effects of lymphoma treatment", "information-and-support/side-effects-lymphoma-and-treatment/late-effects-lymphoma-treatment");
const LA_FERTILITY = la("Reduced fertility", "information-and-support/side-effects-lymphoma-and-treatment/reduced-fertility");
const LA_FOLLOW_UP = la("Follow-up after lymphoma treatment", "information-and-support/living-and-beyond-lymphoma/follow-after-lymphoma-treatment");
const LA_DAY_TO_DAY = la("Day-to-day living", "information-and-support/living-and-beyond-lymphoma/day-day-living");
const LA_EMOTIONAL = la("The emotional impact of living with lymphoma", "information-and-support/living-and-beyond-lymphoma/emotional-impact-living-lymphoma");
const LA_HELPLINE = la("Helpline Services", "information-and-support/support-you/helpline-services");

const MAC_INFECTION = mac("Infection", "impacts-of-cancer/infection");
const MAC_FATIGUE = mac("Tiredness (fatigue)", "impacts-of-cancer/tiredness");
const MAC_LATE = mac("Late effects of treatment for lymphoma", "impacts-of-cancer/late-effects-of-treatment-for-lymphoma");
const MAC_FOLLOW_UP = mac("Follow-up after lymphoma treatment", "lymphoma/follow-up-after-lymphoma-treatment");
const MAC_WORK = mac("Making decisions about work after treatment", "after-treatment/making-decisions-about-work-after-treatment");
const MAC_UNCERTAINTY = mac("Uncertainty and cancer", "impacts-of-cancer/uncertainty");

const CRUK_HL_TYPES = cruk("Types of Hodgkin lymphoma", "hodgkin-lymphoma/types");
const CRUK_NHL_TYPES = cruk("Types and grades of non-Hodgkin lymphoma", "non-hodgkin-lymphoma/types");

const BCUK_MIND = bcuk("Mind and emotions", "understanding-blood-cancer/life-with-blood-cancer/living-well/mind-emotions/");

const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work: get support if you have a disability or health condition", url: "https://www.gov.uk/access-to-work" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const lymphomaAnswers: LearnArticle[] = [
  {
    id: "lym-what-it-is",
    kicker: "Lymphoma",
    question: "What is lymphoma, and where in the body does it start?",
    hook: "Lymphoma starts in the white blood cells that fight infection, so it can turn up almost anywhere the lymphatic system reaches.",
    short: "Lymphoma is a blood cancer that develops when white blood cells called lymphocytes grow out of control. Lymphocytes travel around the body in the lymphatic system, a network of vessels, lymph nodes and organs such as the spleen. In most cases there is no known cause, and you cannot catch it or pass it on.",
    sections: [
      {
        heading: "A cancer of the white blood cells",
        paragraphs: [
          "Lymphoma is a type of blood cancer, and the most common blood cancer in the UK. It develops when white blood cells called lymphocytes grow out of control.",
          "Lymphocytes are part of your immune system, which helps to fight infection. They travel around your body in the lymphatic system, so lymphoma might also be called a cancer of the immune system.",
          "There are over 60 different types of lymphoma, broadly grouped into Hodgkin and non-Hodgkin lymphomas. Different types behave differently and need different treatment.",
        ],
      },
      {
        heading: "The lymphatic system",
        paragraphs: [
          "The lymphatic system is a network of tubes, tissues and organs that runs throughout your body. It includes lymphatic vessels that carry a fluid called lymph, the bone marrow and thymus, where immune cells develop, and the lymph nodes and spleen, where immune cells collect ready to fight infection.",
          "Lymph nodes, sometimes called lymph glands, are small, bean-shaped structures, usually 1 to 2cm long. Some are near the surface of the skin, in your neck, armpits or groin, and others are deep inside your body, in your chest or tummy. Any part of the lymphatic system can be affected by lymphoma.",
        ],
      },
      {
        heading: "What goes wrong",
        paragraphs: [
          "If you have lymphoma, your lymphocytes divide in an abnormal way or do not die when they should. The abnormal lymphocytes build up, which can be in almost any part of your body, but is often felt in your armpits, neck or groin.",
          "When you have an infection, your lymph nodes swell, and the swelling usually goes away in a couple of weeks. If lymphoma cells build up inside your lymph nodes, the swelling does not usually go down.",
        ],
      },
      {
        heading: "What people notice",
        paragraphs: [
          "Lymphoma can cause painless lumps in your glands. These are usually found in your neck, armpit or the area at the top of your inner thigh, called the groin.",
          "Other symptoms can include a high temperature, night sweats, shortness of breath, itchy skin and sudden unexplained weight loss. Many of these symptoms are common and can be caused by other conditions, which is why it is important to get them checked by a GP.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "In most cases of lymphoma there is no known cause. If you have lymphoma, it is not because of anything you did or did not do.",
          "You cannot catch lymphoma and you cannot give it to anybody else, and it is not passed on from parent to child. Some things, such as certain infections or a lowered immune system, are linked to a higher chance of lymphoma, but most people who develop it have none of these risk factors.",
        ],
      },
    ],
    helps: [
      "Ask your medical team which type of lymphoma you have, as different types behave differently and need different treatment.",
      "Remember that lymphoma is not caused by anything you did or did not do, and you cannot pass it on to anyone.",
      "Call the Lymphoma Action helpline free on 0808 808 5555, 10am to 3pm, Monday to Friday, to talk things through.",
      "Blood Cancer UK's helpline is on 0808 208 0888, and Macmillan's on 0808 808 0000.",
    ],
    tryThisWeek: [
      "Ask which type you have.",
      "Remember it is not your fault.",
      "Call a lymphoma helpline.",
    ],
    ask: "Which type of lymphoma do I have, and which parts of my lymphatic system are affected?",
    interactive: {
      kind: "flip-cards",
      title: "Your lymphatic system, part by part",
      intro: "Turn each card to see where each part is and what it does. Any of them can be affected by lymphoma.",
      cards: [
        { id: "nodes", front: "Lymph nodes", when: "Neck, armpits, groin, chest and tummy", back: "Small, bean-shaped checkpoints, usually 1 to 2cm long. They filter lymph and trap germs and damaged cells." },
        { id: "vessels", front: "Lymphatic vessels", when: "Throughout the body", back: "Tubes that carry lymph, a clear fluid, and return it to the bloodstream near the heart." },
        { id: "marrow", front: "Bone marrow", when: "Inside some of the bigger bones", back: "The spongy tissue that makes blood cells, including lymphocytes." },
        { id: "thymus", front: "Thymus", when: "Behind the breastbone, above the heart", back: "A small gland where T lymphocytes develop into active immune cells." },
        { id: "spleen", front: "Spleen", when: "Behind the ribs on the left", back: "Filters the blood. Its white blood cells help protect you from infection." },
      ],
    },
    sources: [LA_WHAT, LA_LYMPHATIC, NHS_HL_WHAT, NHS_NHL_WHAT, LA_CAUSES, NHS_NHL_SYMPTOMS, LA_HELPLINE, NHS_HL_HELP],
    quiz: {
      question: "Can you catch lymphoma from someone else?",
      options: [{ text: "No, it cannot be caught or passed on", right: true }, { text: "Yes, like a cold" }, { text: "Only from a close relative" }],
      why: "You cannot catch lymphoma and you cannot give it to anybody else, and it is not passed on from parent to child.",
    },
  },
  {
    id: "lym-types",
    kicker: "Types",
    question: "What is the difference between Hodgkin and non-Hodgkin lymphoma?",
    hook: "Two names, more than 60 types. Whether yours is fast or slow growing matters more to your treatment than almost anything else.",
    short: "Lymphomas are grouped as Hodgkin or non-Hodgkin by how the cells look under a microscope. Hodgkin lymphoma contains Reed–Sternberg cells; non-Hodgkin lymphoma is every other type, and it is more common. Non-Hodgkin lymphomas are also grouped as high grade, which grow quickly and usually respond very well to treatment, or low grade, which grow slowly and are usually controlled rather than cured.",
    sections: [
      {
        heading: "Two main groups",
        paragraphs: [
          "Lymphomas are grouped into Hodgkin or non-Hodgkin lymphomas, depending on what the cells look like when doctors examine them under a microscope. Hodgkin lymphoma contains abnormal cells called Reed–Sternberg cells, and non-Hodgkin lymphoma is any type of lymphoma that is not Hodgkin lymphoma.",
          "Non-Hodgkin lymphoma is the more common of the two. Around 13,500 people are diagnosed with it each year in the UK, compared with around 2,166 people with Hodgkin lymphoma.",
        ],
      },
      {
        heading: "Hodgkin lymphoma",
        paragraphs: [
          "Hodgkin lymphoma is rare. It can occur at any age, although most people diagnosed are between the ages of 15 and 34, or over 60.",
          "There are 2 main types. Classical Hodgkin lymphoma is the most common, and its 4 subtypes are all treated in the same way. Nodular lymphocyte predominant Hodgkin lymphoma, or NLPHL, is not very common: around 5 out of 100 people with Hodgkin lymphoma have it.",
          "NLPHL tends to be slower growing than classical Hodgkin lymphoma, and the treatment is different. You might also hear it called nodular lymphocyte predominant B-cell lymphoma.",
        ],
      },
      {
        heading: "Non-Hodgkin lymphoma",
        paragraphs: [
          "There are over 60 different types of non-Hodgkin lymphoma, and some of them are very rare. Most develop from B cells, and only around 1 in 10 develop from T cells.",
          "Non-Hodgkin lymphoma can affect people of any age, including children, but it is much more common in older people.",
        ],
      },
      {
        heading: "Fast growing or slow growing",
        paragraphs: [
          "High-grade non-Hodgkin lymphomas grow quickly, and are sometimes called aggressive. Although this might sound alarming, high-grade non-Hodgkin lymphoma usually responds very well to treatment, and it needs to be treated straight away.",
          "Low-grade non-Hodgkin lymphomas grow slowly. They generally respond well to treatment but are hard to get rid of completely, so they are usually treated with the aim of controlling the lymphoma, often for many years.",
          "It helps some people to think of low-grade non-Hodgkin lymphoma as a long-term illness that needs treatment from time to time. Low-grade lymphomas can sometimes change into a high-grade type, but this is rare.",
        ],
      },
      {
        heading: "Types you may hear about",
        paragraphs: [
          "Diffuse large B cell lymphoma is a type of high grade non-Hodgkin lymphoma: it grows quickly and treatment starts soon after diagnosis. Follicular lymphoma is usually slow growing and called a low grade lymphoma.",
          "If you have non-Hodgkin lymphoma, you will be told what type you have and whether it is slow growing or fast growing. Knowing the type of lymphoma helps your doctor decide the best treatment for you.",
        ],
      },
    ],
    helps: [
      "Ask your team which type of lymphoma you have, and whether it is slow growing or fast growing.",
      "If you have low-grade lymphoma, it may help to think of it as a long-term illness that needs treatment from time to time.",
      "Call the Lymphoma Action helpline on 0808 808 5555 for information about your type of lymphoma.",
    ],
    tryThisWeek: [
      "Ask your type and grade.",
      "Think long-term if it is low grade.",
      "Call the Lymphoma Action helpline.",
    ],
    ask: "Is my lymphoma Hodgkin or non-Hodgkin, which type is it, and is it high grade or low grade?",
    interactive: {
      kind: "flip-cards",
      title: "The main types, card by card",
      intro: "Turn each card to see what each name means.",
      cards: [
        { id: "classical", front: "Classical Hodgkin lymphoma", when: "The most common Hodgkin type", back: "Contains Reed–Sternberg cells. Its 4 subtypes are all treated in the same way." },
        { id: "nlphl", front: "NLPHL", when: "Around 5 in 100 with Hodgkin lymphoma", back: "Tends to grow more slowly than classical Hodgkin lymphoma, and the treatment is different." },
        { id: "high", front: "High-grade non-Hodgkin", when: "Grows quickly", back: "Sometimes called aggressive, but usually responds very well to treatment. Treated straight away." },
        { id: "low", front: "Low-grade non-Hodgkin", when: "Grows slowly", back: "Hard to get rid of completely, so usually treated to control it, often for many years." },
        { id: "dlbcl", front: "Diffuse large B cell", when: "A high grade type", back: "Grows quickly, and treatment starts soon after diagnosis." },
        { id: "follicular", front: "Follicular lymphoma", when: "A low grade type", back: "Usually slow growing." },
      ],
    },
    sources: [LA_HL, LA_NHL, CRUK_HL_TYPES, CRUK_NHL_TYPES, NHS_NHL_WHAT, NHS_NHL_TREAT, NHS_NHL_TESTS, LA_HELPLINE],
    quiz: {
      question: "How does high-grade non-Hodgkin lymphoma usually respond to treatment?",
      options: [{ text: "Very well", right: true }, { text: "It cannot be treated" }, { text: "It only ever needs watching" }],
      why: "Although this might sound alarming, high-grade non-Hodgkin lymphoma usually responds very well to treatment, and it needs to be treated straight away.",
    },
  },
  {
    id: "lym-tests",
    kicker: "Tests",
    question: "What do the biopsy, the scans and the stage tell my team?",
    hook: "A biopsy confirms the lymphoma and its type; the scans show where it is. Stage 4 sounds frightening, but in lymphoma it is common and often treated well.",
    short: "A biopsy, where a sample of a lymph node is checked under a microscope, is usually the only way to confirm lymphoma, and results usually come within 2 weeks. Blood tests and scans such as PET and CT then show which parts of the body are affected, which is called staging. The stage, grade and type together help your team choose your treatment.",
    sections: [
      {
        heading: "The biopsy",
        paragraphs: [
          "The main test for lymphoma is a biopsy, where a sample of the affected lymph nodes is taken and checked for signs of cancer. Usually, a biopsy is the only way to confirm a diagnosis of lymphoma.",
          "You may have part or all of a lymph node removed, called an excision biopsy, or a sample of cells taken with a thin needle. You will usually have a local or general anaesthetic so you do not feel any pain during the test.",
          "A specialist doctor called a pathologist looks at the sample under a microscope. It can also show the specific type of lymphoma, and how fast it is growing.",
        ],
      },
      {
        heading: "Waiting for results",
        paragraphs: [
          "You should get the results of a lymph node biopsy within 2 weeks. Sometimes the sample needs further laboratory tests, which could mean a longer wait of up to about 4 weeks.",
          "Many people feel anxious while waiting for results. You can call the hospital or GP if you are worried, and if any of your symptoms get worse while you wait, contact your medical team or GP.",
        ],
      },
      {
        heading: "Scans and other tests",
        paragraphs: [
          "After a diagnosis, you may need more tests. These can include blood tests, scans such as PET, CT, MRI or ultrasound, and a biopsy of the spongy cells in your bones, called the bone marrow.",
          "PET scans use a harmless radioactive form of sugar. Lymphoma cells are quite active, so they take up quite a lot of it, and they show up as hot spots on the scan.",
          "A PET/CT scan usually takes 30 to 60 minutes, but you are likely to be in the department for 2 to 3 hours, because you wait 60 to 90 minutes after the injection. You might be asked not to do strenuous exercise in the 24 hours before.",
        ],
      },
      {
        heading: "The stage",
        paragraphs: [
          "Staging means working out which parts of your body are affected by lymphoma. There are 4 main stages, based on where the lymphoma is in relation to the diaphragm, the sheet of muscle separating your chest from your tummy.",
          "Stage 1 means lymphoma in only one group of lymph nodes. Stage 2 means 2 or more groups on the same side of the diaphragm, stage 3 means lymph nodes on both sides, and stage 4 means it has spread to at least one organ outside the lymphatic system.",
          "It is common for lymphoma to be at an advanced stage when it is diagnosed, because the lymphatic system runs throughout your body. However, there is often effective treatment for advanced stage lymphomas.",
        ],
      },
      {
        heading: "Letters after the stage",
        paragraphs: [
          "Some hospitals add a letter after the stage number. B means you have one or more of these B symptoms: drenching night sweats, fevers above 38°C, or significant weight loss you cannot explain, and A means you have none of them.",
          "The stage, grade and type of lymphoma together help your specialist team decide what treatment you need.",
        ],
      },
    ],
    helps: [
      "Ask your doctor how long it will be before you get the results of your biopsy.",
      "Bring someone with you for support when a specialist explains your results.",
      "Write down your questions before a results appointment so you remember what you want to ask.",
      "Read your scan appointment letter carefully, and contact the hospital before the day if you have questions.",
      "Contact your GP if you are concerned about how long you have been waiting.",
      "If your symptoms get worse while you are waiting for results, contact your medical team or GP.",
    ],
    tryThisWeek: [
      "Ask when results are due.",
      "Write down your questions.",
      "Take someone with you.",
    ],
    ask: "What stage is my lymphoma, do I have any B symptoms, and which scans will I need during and after treatment?",
    interactive: {
      kind: "timeline",
      title: "From biopsy to a treatment plan",
      steps: [
        { id: "biopsy", when: "First", title: "The biopsy", points: ["A sample of a lymph node is taken.", "A local or general anaesthetic means no pain."] },
        { id: "wait", when: "Usually within 2 weeks", title: "The results", points: ["Further laboratory tests can mean up to about 4 weeks.", "Call the hospital or GP if you are worried."] },
        { id: "team", when: "At diagnosis", title: "Your team", points: ["A specialist explains what the results mean.", "A clinical nurse specialist is usually your main contact."] },
        { id: "scans", when: "Next", title: "More tests", points: ["Blood tests and scans such as PET and CT.", "Sometimes a bone marrow biopsy."] },
        { id: "stage", when: "Then", title: "The stage", points: ["Stage 1 to 4, by where the lymphoma is.", "Advanced stage is common, and often treated effectively."] },
        { id: "plan", when: "Finally", title: "The plan", points: ["Stage, grade and type together.", "They help your team decide your treatment."] },
      ],
    },
    sources: [NHS_HL_TESTS, NHS_NHL_TESTS, LA_BIOPSY, LA_PET, LA_STAGING, LA_WAITING],
    quiz: {
      question: "Why is it common for lymphoma to be at an advanced stage when it is diagnosed?",
      options: [{ text: "Because the lymphatic system runs throughout the body", right: true }, { text: "Because it is always found late" }, { text: "Because scans cannot see it early" }],
      why: "It is common for lymphoma to be at an advanced stage when it is diagnosed, because the lymphatic system runs throughout your body. However, there is often effective treatment for advanced stage lymphomas.",
    },
  },
  {
    id: "lym-watch-wait",
    kicker: "Watch and wait",
    question: "Why am I being watched instead of treated?",
    hook: "Being told you have cancer, then that it will not be treated yet, can feel wrong. For slow-growing lymphoma, waiting is a choice that costs nothing.",
    short: "Some slow-growing lymphomas do not need treatment straight away. Instead you have regular check-ups, called active monitoring or watch and wait, and treatment is offered when tests show you need it. For these types there is no benefit in starting early, treatment is just as effective when it is needed, and some people never need it.",
    sections: [
      {
        heading: "Treatment when it is needed",
        paragraphs: [
          "Lymphoma does not always need treatment straight away. Instead, you might have active monitoring, also called watch and wait: regular check-ups to see how the lymphoma is affecting you, with treatment offered when tests show you need it.",
          "Active monitoring means that, for your type of lymphoma, there is no benefit in starting treatment before it is needed. It does not mean there is no treatment available, that you are too old to be treated, or that your doctors are trying to save money.",
          "Treatment is just as effective if it is saved until it is needed. It might not be needed for months or years, and some people never need treatment.",
        ],
      },
      {
        heading: "Who it is for",
        paragraphs: [
          "You might be offered active monitoring if you have a low-grade, slow-growing lymphoma that is not causing problems in your day-to-day life. Types that might be monitored include follicular lymphoma, marginal zone lymphomas, small lymphocytic lymphoma, mantle cell lymphoma and NLPHL.",
          "Avoiding treatment for as long as possible means you avoid its side effects and late effects for as long as possible. The full range of treatment is still there for you, and you can benefit from newer therapies as they become available.",
        ],
      },
      {
        heading: "Your check-ups",
        paragraphs: [
          "You will usually have between 1 and 4 check-ups a year, at a hospital clinic or sometimes by video or phone. Your team will talk to you about how you are feeling, check for enlarged lymph nodes, and might do blood tests.",
          "You will not usually have a scan unless your team suspects the lymphoma is growing. This is to reduce your exposure to unnecessary radiation.",
        ],
      },
      {
        heading: "When to get in touch",
        paragraphs: [
          "Contact your medical team straight away if you notice a change in your symptoms or any new symptoms, and do not wait for your next appointment. A change in symptoms does not necessarily mean your lymphoma has got worse.",
          "Your team is likely to suggest treatment if, for example, your lymph nodes start to grow quickly or appear in new places, you develop B symptoms such as night sweats, weight loss and fevers, or your symptoms become difficult to cope with.",
        ],
      },
      {
        heading: "Living with it",
        paragraphs: [
          "Some people feel relieved that they do not need treatment straight away, and others find it hard to be told they have lymphoma that is not being treated. Many people adapt well, and some find it helps to think of it as a long-term illness, a bit like diabetes or high blood pressure.",
          "Many people feel anxious in the days or weeks before their check-ups and then relieved afterwards. Eating a healthy diet, keeping active, not smoking and limiting alcohol can help how you feel, and help prepare you for any treatment you might need.",
        ],
      },
    ],
    helps: [
      "Contact your medical team straight away about new or changing symptoms; do not wait for your next appointment.",
      "Go to your check-ups and any screening tests you are invited to, and have the vaccinations your team advises.",
      "Eat a healthy diet, keep active, do not smoke and limit your alcohol.",
      "If worry builds before check-ups, try setting aside worry time, or mindfulness or yoga.",
      "Point family and friends to information about active monitoring, instead of having to explain it all yourself.",
      "Ask about Lymphoma Action's Live your Life programme for people on watch and wait.",
    ],
    tryThisWeek: [
      "Report new symptoms straight away.",
      "Keep active and limit alcohol.",
      "Try a set worry time.",
    ],
    ask: "Why is active monitoring right for my type of lymphoma, and what changes would mean I need treatment?",
    interactive: {
      kind: "signs",
      title: "Changes to tell your team",
      intro: "Tick any you have noticed since your last check-up. A change does not necessarily mean the lymphoma has got worse.",
      signs: ["A change in your usual symptoms", "Any new symptoms", "Lymph nodes growing quickly", "Swollen lymph nodes in new places", "Night sweats", "Weight loss", "Fevers", "Symptoms that are hard to cope with"],
      after: "Contact your medical team straight away. Do not wait for your next appointment.",
      copyHeading: "Changes since my last check-up",
    },
    sources: [LA_ACTIVE, NHS_NHL_TREAT, NHS_HL_TREAT, LA_ACTIVE_HUB],
    quiz: {
      question: "Is treatment less effective if it is saved until it is needed?",
      options: [{ text: "No, it is just as effective", right: true }, { text: "Yes, it works less well later" }, { text: "Only if you wait more than a year" }],
      why: "Treatment is just as effective if it is saved until it is needed.",
    },
  },
  {
    id: "lym-treatments",
    kicker: "Treatment",
    question: "What do chemotherapy, rituximab and radiotherapy each do?",
    hook: "Most lymphoma treatment is a combination: chemotherapy to kill dividing cells, an antibody to point the immune system at them, and sometimes radiotherapy.",
    short: "Lymphoma is often treated with a combination of chemotherapy, targeted medicines or immunotherapy, and radiotherapy. Chemotherapy is given in cycles with rest in between; antibodies such as rituximab help your immune system destroy lymphoma cells; radiotherapy targets the areas affected. Which ones you have depends on the type, how fast it grows, where it is, and your general health.",
    sections: [
      {
        heading: "Your treatment plan",
        paragraphs: [
          "The treatment you have depends on the type of lymphoma, whether it is fast or slow growing, where it is, whether it has spread, your symptoms and your general health. You may be offered a combination of chemotherapy, targeted medicines or immunotherapy, and radiotherapy.",
          "Your specialist team will explain the treatments, their benefits and side effects, work with you on a plan that is best for you, and help you manage side effects. If you have any questions or worries, you can talk to them.",
        ],
      },
      {
        heading: "Chemotherapy",
        paragraphs: [
          "Chemotherapy uses medicines to kill cancer cells, and is sometimes given alongside steroid medicine. Most lymphoma cells are easily killed by chemotherapy: it works on cells that are dividing, and lymphoma cells divide much more often than healthy cells do.",
          "It is usually given in cycles, each followed by a rest period to give your healthy cells time to recover. For lymphoma, you would typically have 4 to 6 cycles, and it is most often given into a vein.",
        ],
      },
      {
        heading: "Antibodies and targeted treatments",
        paragraphs: [
          "Targeted treatments are designed to attack particular proteins on lymphoma cells, so they can kill them with fewer effects on healthy cells. Antibody therapy, also called immunotherapy, uses antibodies made in a lab that stick to a protein on the cancer cell and activate your immune system to destroy it.",
          "Rituximab is an antibody that sticks to a protein called CD20 on B-cell lymphomas. Antibody therapy is often given alongside chemotherapy, which is called chemoimmunotherapy.",
          "After treatment has put some types, such as follicular lymphoma, into remission, you might have maintenance therapy to make the remission last as long as possible. With rituximab, this is usually once every 2 months for 2 years.",
        ],
      },
      {
        heading: "Radiotherapy",
        paragraphs: [
          "Radiotherapy uses high-energy radiation to kill cancer cells in your lymph nodes. It is a local treatment, targeted as precisely as possible at the lymphoma, and might be given alone or with other treatments.",
          "Each session typically takes around 10 to 20 minutes, most of it spent getting you into position. Tiredness is a common side effect: it often worsens with each treatment, but usually starts to get better within a couple of weeks of finishing.",
        ],
      },
      {
        heading: "Transplants, and when cure is not possible",
        paragraphs: [
          "A stem cell transplant is where damaged blood cells are replaced with healthy ones. You may have one if your lymphoma has come back after treatment, or other treatments are not working.",
          "If you are told your lymphoma cannot be cured, this can be very hard news to take in. Treatment then aims to slow down the growth and spread of the cancer, help with the symptoms and help you live longer, and a palliative care team will help you manage symptoms and help you and your loved ones get any other support you need.",
        ],
      },
    ],
    helps: [
      "Ask your specialist team to explain each treatment, its benefits and its side effects.",
      "Tell a member of staff straight away if you feel pain or discomfort, or notice swelling, in your arm during a drip.",
      "Speak to your specialist team before treatment if you want to have children in the future.",
      "Use contraception during treatment if you could get pregnant or get your partner pregnant.",
      "Call your care team now if you have a high temperature or other signs of infection, and NHS 111 if you are not sure how to contact them.",
      "If you are told your lymphoma cannot be cured, Marie Curie's helpline is on 0800 090 2309.",
    ],
    tryThisWeek: [
      "List questions about each treatment.",
      "Report pain at a drip straight away.",
      "Save your care team's number.",
    ],
    ask: "Which treatments are in my plan, how many cycles will I have, and will I need maintenance therapy?",
    interactive: {
      kind: "flip-cards",
      title: "Your treatments, card by card",
      intro: "Turn each card to see what each treatment does.",
      cards: [
        { id: "chemo", front: "Chemotherapy", when: "Typically 4 to 6 cycles", back: "Medicines that kill dividing cells. Lymphoma cells divide much more often than healthy cells." },
        { id: "rituximab", front: "Rituximab", when: "Often given with chemotherapy", back: "An antibody that sticks to CD20 on B-cell lymphomas and activates your immune system against them." },
        { id: "maintenance", front: "Maintenance therapy", when: "After remission, for some types", back: "Aims to make the remission last as long as possible. Rituximab is usually every 2 months for 2 years." },
        { id: "radiotherapy", front: "Radiotherapy", when: "Sessions of around 10 to 20 minutes", back: "High-energy radiation aimed as precisely as possible at the lymphoma." },
        { id: "transplant", front: "Stem cell transplant", when: "If lymphoma comes back", back: "Damaged blood cells are replaced with healthy ones." },
      ],
    },
    sources: [NHS_NHL_TREAT, NHS_HL_TREAT, LA_CHEMO, LA_TARGETED, LA_RADIO, LA_MAINTENANCE, NHS_CHEMO, NHS_NHL_HELP],
    quiz: {
      question: "What is rituximab?",
      options: [{ text: "An antibody that targets CD20 on B-cell lymphomas", right: true }, { text: "A type of radiotherapy" }, { text: "A steroid tablet" }],
      why: "Rituximab is an antibody that sticks to a protein called CD20 on B-cell lymphomas.",
    },
  },
  {
    id: "lym-infections",
    kicker: "Infections",
    question: "Why are infections so serious now, and what should I do about a temperature?",
    hook: "During treatment, an infection that would once have been a nuisance can become dangerous within hours. The rule is simple: never wait and see.",
    short: "Lymphoma and its treatments can weaken your immune system, especially when neutrophils, the white cells that fight infection, are low. Contact your GP or medical team immediately about any sign of infection, even a minor one, on the number they gave you for any time of day or night. Signs of sepsis need 999 or A&E.",
    sections: [
      {
        heading: "Why infections matter",
        paragraphs: [
          "Lymphoma and its treatments can increase your risk of infections, and infections can become serious for people who have lymphoma. They are more likely if you have neutropenia, a low number of the white blood cells called neutrophils that help fight infection.",
          "Chemotherapy is one of the most common reasons for reduced immunity. You are particularly at risk of an infection 7 to 14 days after having chemotherapy, when the level of white blood cells is at its lowest.",
        ],
      },
      {
        heading: "Signs to act on",
        paragraphs: [
          "Common signs include a temperature above 38°C or below 35°C, chills, sweating or shivering, and feeling generally unwell, confused or disoriented. Others include a sore throat, a cough or difficulty breathing, diarrhoea or vomiting, stinging when you wee, and pain, redness or swelling around a wound or a line such as a PICC line.",
          "It is possible to have neutropenic sepsis, a whole-body reaction to an infection, without a fever, and steroids can mask a fever. Macmillan says to contact the hospital straight away on the number you have been given if your temperature goes over 37 and a half degrees or below 36°C, or if you suddenly feel unwell, even with a normal temperature.",
          "Your medical team can tell you about any signs you should be particularly aware of, and it is important to follow their specific advice.",
        ],
      },
      {
        heading: "What to do straight away",
        paragraphs: [
          "Contact your GP or a member of your medical team immediately if you have any possible signs of infection, even if you think they might be minor. Do not wait to see if they get worse, and if you are advised to go to hospital, go immediately.",
          "A haematology nurse specialist quoted by Lymphoma Action says that with signs such as fevers and feeling generally unwell, you should call your local hotline or out-of-hours emergency number immediately, and you will be advised to go to your local emergency department as a matter of urgency for antibiotics. The NHS says to call your care team now if you have a high temperature or other signs of infection, and to call NHS 111 if you are not sure how to contact them.",
          "Your medical team should give you telephone numbers to call at any time, including during the night and over weekends. If you have not been given them, ask your consultant or clinical nurse specialist.",
        ],
      },
      {
        heading: "Sepsis",
        paragraphs: [
          "Sepsis is a serious reaction to an infection that can be life-threatening, and it develops very quickly. Call 999 or go to A&E if someone is breathing very fast, is confused or has slurred speech, has blue, pale or blotchy skin, has a very high or very low temperature, or has a rash that does not fade when you press it.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance, and bring any medicines you take with you.",
        ],
      },
      {
        heading: "Lowering your risk",
        paragraphs: [
          "You cannot protect yourself completely, but good hygiene helps. Wash your hands well before preparing and eating food and after using the toilet, have a bath or shower every day, and follow food safety guidance.",
          "Keep your distance from people with infections such as a cold, flu, diarrhoea, vomiting or chickenpox, and avoid crowded places and public transport during rush hour. Ask your cancer doctor or specialist nurse before having any vaccinations, as you may not be able to have live vaccines while your immune system is weak.",
          "You might be given a medical card saying what to do if you develop a fever and who to contact. Carry it with you at all times, and take it with you if you need to go to hospital.",
        ],
      },
    ],
    helps: [
      "Keep a thermometer at home so you can easily check your temperature.",
      "Keep the numbers your team gives you for calling at any time, day or night, and ask for them if you do not have them.",
      "Contact your GP or medical team immediately about any sign of infection, even a minor one; do not wait to see if it gets worse.",
      "Carry any medical card you are given, and take it with you if you go to hospital.",
      "Wash your hands well before preparing and eating food, and after using the toilet.",
      "Check with your cancer doctor or specialist nurse before having any vaccinations.",
    ],
    tryThisWeek: [
      "Keep a thermometer at home.",
      "Save your team's day and night number.",
      "Wash hands before food.",
    ],
    ask: "Which temperature should I act on, which number do I call day or night, and when are my white cells likely to be lowest?",
    interactive: {
      kind: "signs",
      title: "Signs of infection",
      intro: "Tick any you have now. Contact your team immediately, even if they seem minor.",
      signs: ["A temperature above 38°C", "A temperature below 35°C", "Chills, sweating or shivering", "Feeling generally unwell or confused", "A sore throat or a cough", "Difficulty breathing", "Diarrhoea or vomiting", "Stinging when you wee", "Redness or swelling at a wound or line"],
      after: "Contact your GP or medical team immediately, on the number for any time of day or night. If you are told to go to hospital, go immediately. For signs of sepsis, call 999 or go to A&E.",
      copyHeading: "Signs of infection I have",
    },
    sources: [LA_INFECTIONS, LA_NEUTROPENIA, MAC_INFECTION, NHS_CHEMO, NHS_SEPSIS, LA_CHEMO],
    quiz: {
      question: "During treatment, what should you do about a possible sign of infection that seems minor?",
      options: [{ text: "Contact your GP or medical team immediately", right: true }, { text: "Wait a day to see if it gets worse" }, { text: "Mention it at your next appointment" }],
      why: "Contact your GP or a member of your medical team immediately if you have any possible signs of infection, even if you think they might be minor.",
    },
  },
  {
    id: "lym-fatigue",
    kicker: "Fatigue",
    question: "Why am I still so tired, and what helps?",
    hook: "Cancer-related fatigue is not ordinary tiredness, and it can last long after treatment. Pacing, planning and gentle activity all help.",
    short: "Cancer-related fatigue is exhaustion far beyond what you would expect, and it affects most people who have cancer. It is not unusual to feel tired for many months after lymphoma treatment, and occasionally for 1 or 2 years. A fatigue diary, planning around your energy, accepting help and regular physical activity can all help, and some causes can be treated.",
    sections: [
      {
        heading: "More than tiredness",
        paragraphs: [
          "Cancer-related fatigue is exhaustion at a much higher level than would usually be expected, and it can be physical, emotional or mental. It affects most people who have cancer, and you might feel very tired after doing quite little.",
          "It can affect your memory and concentration, your mood, your work and your relationships. It can vary throughout the day, and each day may be different.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "Many people treated with chemotherapy or radiotherapy say they feel fatigued at some point during or after their treatment. Having, or recovering from, an infection, stress and anxiety, low mood and other conditions can all play a part.",
          "Anaemia, a low number of red blood cells, can make you feel very tired, and it can be treated. Steroids can also affect energy: some people have more energy while taking them, but feel more tired once they stop.",
        ],
      },
      {
        heading: "How long it lasts",
        paragraphs: [
          "Tiredness from radiotherapy often worsens with each treatment, but usually starts to get better within a couple of weeks of finishing. Recovering from lymphoma treatment can take time, and it is not unusual to feel tired for many months after treatment is over.",
          "Occasionally, tiredness may last for 1 or 2 years, depending on the type of treatment you had. If it is not going away, talk to your lymphoma team or GP, as it can be a sign of problems that can be treated, such as depression, sleep problems, pain or changes in the thyroid gland.",
        ],
      },
      {
        heading: "Saving your energy",
        paragraphs: [
          "Some people think of their energy as a bank: rest adds to it, and tasks and activities make withdrawals. Where possible, ask family and friends for help, so you can save your energy for the things only you can do, or most want to do.",
          "A fatigue diary can show patterns, and help you plan activities for times when your energy is higher, with rest in between. There is no set time to keep one, but often a couple of weeks is enough.",
          "Spread housework out over the week, and sit down for some tasks if you can. Equipment can make tasks easier or quicker, such as a stool to sit on while showering, or having your food shopping delivered.",
        ],
      },
      {
        heading: "Keeping active",
        paragraphs: [
          "There is good evidence that physical activity, such as walking quickly, is one of the best ways to help reduce symptoms of fatigue. Short walks are a good way to start, and being active may also help you sleep better and improve your mood.",
          "Try to keep to a normal sleep routine, even if you feel like sleeping all the time. Talk to your cancer doctor, specialist nurse or GP before you make any big changes.",
        ],
      },
    ],
    helps: [
      "Tell your medical team or GP about your fatigue, so they can look at what might be making it worse.",
      "Keep a fatigue diary for a couple of weeks, and plan activities for when your energy is higher.",
      "Start with short walks to help your energy levels.",
      "Ask family and friends to help with tasks, so you can save your energy for what matters most to you.",
      "Do not drive if you feel very tired.",
      "Ask your cancer doctor, specialist nurse or GP about an occupational therapist for help with everyday tasks.",
    ],
    tryThisWeek: [
      "Start a fatigue diary.",
      "Take a short walk.",
      "Ask someone to help with a task.",
    ],
    ask: "Could anything treatable, such as anaemia, my thyroid or poor sleep, be adding to my tiredness?",
    interactive: {
      kind: "scenarios",
      title: "Pacing moments",
      scenarios: [
        {
          id: "housework",
          situation: "You have a good morning and want to clean the whole house.",
          options: [{ text: "Spread it out over the week", best: true }, { text: "Do it all while you can" }],
          why: "Spread housework out over the week, and sit down for some tasks if you can.",
        },
        {
          id: "help",
          situation: "A friend offers to help with the shopping.",
          options: [{ text: "Accept, and save your energy", best: true }, { text: "Say no so as not to be a bother" }],
          why: "Ask family and friends for help, so you can save your energy for the things only you can do, or most want to do.",
        },
        {
          id: "drive",
          situation: "You feel very tired but have an appointment to get to.",
          options: [{ text: "Ask someone to drive you", best: true }, { text: "Drive yourself anyway" }],
          why: "Do not drive if you feel very tired. Ask a family member or friend, or ask about hospital transport.",
        },
        {
          id: "months",
          situation: "Months after treatment, the tiredness is not going away.",
          options: [{ text: "Talk to your lymphoma team or GP", best: true }, { text: "Assume nothing can be done" }],
          why: "It can be a sign of problems that can be treated, such as depression, sleep problems, pain or changes in the thyroid gland.",
        },
      ],
    },
    sources: [LA_FATIGUE, MAC_FATIGUE, MAC_LATE, LA_RADIO],
    quiz: {
      question: "Which of these does Macmillan say is one of the best ways to help reduce fatigue?",
      options: [{ text: "Physical activity, such as walking quickly", right: true }, { text: "Sleeping as much as possible" }, { text: "Avoiding all activity" }],
      why: "There is good evidence that physical activity, such as walking quickly, is one of the best ways to help reduce symptoms of fatigue.",
    },
  },
  {
    id: "lym-late-effects",
    kicker: "Late effects",
    question: "Which late effects should I know about, and for how long?",
    hook: "Some effects of lymphoma treatment only show up years later. Knowing the signs, and keeping your treatment summary, means they can be found early.",
    short: "Late effects are health problems that develop months or years after treatment. Not everyone gets them, and today's treatments carry a lower risk than older ones. Depending on your treatment, they can affect the heart, lungs, thyroid, nerves, immunity and fertility, and some people need irradiated blood products for life.",
    sections: [
      {
        heading: "What late effects are",
        paragraphs: [
          "Late effects are health problems that develop months or years after treatment finishes. Not everyone gets late effects, and many side effects usually improve during or in the weeks and months after treatment.",
          "Whether you get them depends on the type of lymphoma, the treatment you had and how much of it, and your age. In general, the treatments used today have a lower risk of causing late effects than those used in the past.",
          "Once you finish treatment, you and your GP should be given a treatment summary. It outlines any late effects your treatment might cause, and any screening tests you might need to check for them.",
        ],
      },
      {
        heading: "Heart and lungs",
        paragraphs: [
          "Some lymphoma treatments may cause heart problems later in life, including some types of chemotherapy and, rarely, radiotherapy to the chest area. Being active, not smoking and a healthy diet can improve your heart health.",
          "Tell your cancer doctor, nurse or GP if you develop breathlessness, a cough that does not go away, or wheezing. If you have had the drug bleomycin, always tell the doctor before a general anaesthetic or oxygen therapy, and do not scuba dive for a year after treatment.",
        ],
      },
      {
        heading: "Thyroid and nerves",
        paragraphs: [
          "Radiotherapy to the neck may affect the thyroid gland a few years after treatment, causing an underactive thyroid, with symptoms such as weight gain, tiredness and constipation. If you have had radiotherapy to your neck, you will have a blood test once a year to check how well your thyroid is working.",
          "Some drugs used to treat lymphoma can affect the nerves, causing numb, tingling or painful hands or feet. Most people find their symptoms gradually improve as the nerves slowly recover, though this may take several months or more.",
        ],
      },
      {
        heading: "Infections and vaccines",
        paragraphs: [
          "Lymphoma and its treatments can affect how your immune system works, so tell your lymphoma team or GP if you have signs of an infection. Having it treated straight away can prevent serious complications.",
          "Your cancer doctor may advise vaccinations for flu, pneumonia and coronavirus. You should not have live vaccines if you have had Hodgkin lymphoma, or for 6 to 24 months after treatment for non-Hodgkin lymphoma, or until your immune system has recovered.",
        ],
      },
      {
        heading: "Second cancers and blood transfusions",
        paragraphs: [
          "Chemotherapy and radiotherapy can lead to a slightly increased risk of a second, different cancer later in life, and treatments are designed to limit this as much as possible. It is important to take up invitations to screening programmes and to go to your health appointments.",
          "If you have had Hodgkin lymphoma, you should only ever have irradiated blood products, and the same applies after some treatments for non-Hodgkin lymphoma. Your cancer doctor will give you a medical alert card to show if you ever need treatment at hospital or a blood transfusion.",
        ],
      },
    ],
    helps: [
      "Ask for your treatment summary, and check that your GP has been given one too.",
      "Keep up with follow-up, screening, sight checks and dental appointments.",
      "Be active, do not smoke and eat a healthy diet to help your heart.",
      "Tell your doctor, nurse or GP about breathlessness, a cough that does not go away, or wheezing.",
      "Ask your cancer doctor or specialist nurse before having any vaccinations.",
      "Carry your medical alert card if you need irradiated blood products, and show it at any hospital.",
    ],
    tryThisWeek: [
      "Check your GP has your summary.",
      "Book any screening you are due.",
      "Ask about your vaccinations.",
    ],
    ask: "Which late effects is my treatment most likely to cause, which checks will I need, and do I need irradiated blood?",
    interactive: {
      kind: "flip-cards",
      title: "Late effects, card by card",
      intro: "Turn each card to see what to know. Not everyone gets late effects.",
      cards: [
        { id: "heart", front: "Heart", when: "After some types of chemotherapy", back: "You may have heart tests. Being active, not smoking and a healthy diet help." },
        { id: "lungs", front: "Lungs", when: "Some treatments, including bleomycin", back: "Report breathlessness, a lasting cough or wheezing. Tell doctors you had bleomycin." },
        { id: "thyroid", front: "Thyroid", when: "After radiotherapy to the neck", back: "Can cause weight gain, tiredness and constipation. A yearly blood test checks it." },
        { id: "nerves", front: "Nerves", when: "After some lymphoma drugs", back: "Numb, tingling or painful hands or feet, which often improve slowly over months." },
        { id: "vaccines", front: "Live vaccines", when: "After treatment for lymphoma", back: "Never after Hodgkin lymphoma; for 6 to 24 months after non-Hodgkin treatment. Ask your doctor first." },
        { id: "blood", front: "Irradiated blood", when: "After Hodgkin lymphoma, for life", back: "Also after some non-Hodgkin treatments. Show your medical alert card." },
      ],
    },
    sources: [MAC_LATE, LA_LATE, LA_RADIO, LA_FOLLOW_UP],
    quiz: {
      question: "If you have had Hodgkin lymphoma, which blood products should you have?",
      options: [{ text: "Only irradiated blood products", right: true }, { text: "Any blood products" }, { text: "None, ever" }],
      why: "If you have had Hodgkin lymphoma, you should only ever have irradiated blood products.",
    },
  },
  {
    id: "lym-follow-up",
    kicker: "Follow-up",
    question: "What happens at follow-up, and what should I report in between?",
    hook: "Follow-up is less about scans than about talking: how you feel, what has changed, and who to call the moment something does.",
    short: "After treatment you have follow-up appointments, often every 3 months or so at first and less often after 2 years, or you may be asked to get in touch when you need to. Your team checks your recovery, any late effects and any signs of the lymphoma coming back. You will not usually have scans unless you develop symptoms, and you can contact your team at any time.",
    sections: [
      {
        heading: "At the end of treatment",
        paragraphs: [
          "After finishing treatment, you will have an end-of-treatment appointment with your medical team. You can ask about your lymphoma, and about day-to-day living, work, finances, vaccinations and travel.",
          "You and your GP should be given a treatment summary. It sets out the treatment you had, its possible side effects and late effects, the signs that could show your lymphoma has returned, and who to contact at any time of the day or night.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "Follow-up is planned for you as an individual, and depends on the type of lymphoma you had, the treatment and your hospital. To begin with, your appointments may be every 3 months or so, and after 2 years you may have fewer, or stop having them.",
          "Some hospitals offer patient-led follow-up: instead of booked appointments, you arrange one if you have concerns or symptoms. Either way, you can contact your team whenever you need to, and you do not need to wait until your next appointment.",
        ],
      },
      {
        heading: "What happens at appointments",
        paragraphs: [
          "Your doctor or nurse will talk with you about your physical health and emotional wellbeing, and might examine you and do blood tests. Appointments can be in person, by phone or sometimes by video call.",
          "You will not usually have scans, unless you develop symptoms that need to be checked. Scans are not routinely used in follow-up, as they are unlikely to find lymphoma.",
        ],
      },
      {
        heading: "Signs to report",
        paragraphs: [
          "If lymphoma comes back, it is usually discovered when symptoms develop. Possible signs include new lumps or swellings, heavy drenching sweats at night, unexplained high temperatures over 38°C, unexplained weight loss, extreme tiredness, itching or a rash that does not go away, and a cough or breathlessness that does not get better.",
          "If you think your lymphoma might have come back, contact your medical team straight away. Lymphoma that comes back can often be treated again.",
        ],
      },
      {
        heading: "Before an appointment",
        paragraphs: [
          "Many people find they get anxious before appointments, and this is natural. It might reassure you to know that if you do not have any new or returning symptoms, it is unlikely that your lymphoma has returned.",
          "Taking notes, or taking a family member or friend with you, can help you remember what you want to ask and what you are told. A symptom diary can help you keep track of any symptoms, how often you have them and whether they get better or worse.",
        ],
      },
    ],
    helps: [
      "Make sure you know who to contact, at any time of the day or night, if you notice signs of the lymphoma coming back.",
      "Contact your team between appointments if you have any concerns; you do not need to wait.",
      "Take notes at appointments, or take a family member or friend with you.",
      "Keep a symptom diary of how often symptoms happen and whether they change.",
      "Talk through your feelings before an appointment with someone close to you or the Lymphoma Action helpline.",
      "Call the Macmillan Support Line free on 0808 808 00 00 if you would like to talk.",
    ],
    tryThisWeek: [
      "Check who to contact, day or night.",
      "Take notes at your next visit.",
      "Start a symptom diary.",
    ],
    ask: "How often will my follow-up be, how long will it last, and which symptoms should make me call you?",
    interactive: {
      kind: "signs",
      title: "Signs to report",
      intro: "Tick any you have noticed. Report anything new or worrying, even if it is not on this list.",
      signs: ["New lumps or swellings", "Heavy drenching sweats at night", "Unexplained temperatures over 38°C", "Unexplained weight loss", "Extreme tiredness", "Itching or a rash that does not go away", "A cough that does not get better", "Breathlessness that does not get better"],
      after: "Contact your cancer doctor or specialist nurse. They can arrange an appointment if needed. You do not need to wait until your next follow-up.",
      copyHeading: "Symptoms I want to report",
    },
    sources: [LA_FOLLOW_UP, MAC_FOLLOW_UP],
    quiz: {
      question: "Will you usually have scans at follow-up?",
      options: [{ text: "Not unless you develop symptoms that need checking", right: true }, { text: "Yes, at every appointment" }, { text: "Yes, every month" }],
      why: "You will not usually have scans, unless you develop symptoms that need to be checked.",
    },
  },
  {
    id: "lym-work",
    kicker: "Work and money",
    question: "How do I go back to work, and what help is there with money?",
    hook: "The law treats cancer as a disability from the day of diagnosis. That gives you the right to changes at work, and opens doors to financial help.",
    short: "Most people take some time out of work during treatment, and returning can take careful planning. If you have or have had cancer, the law treats it as a disability, so your employer must consider reasonable adjustments, such as a phased return or extra breaks. Access to Work grants, benefits and free prescriptions in England may also help.",
    sections: [
      {
        heading: "Going back",
        paragraphs: [
          "Most people take some time out of work during treatment for lymphoma, and it can take a while to build your strength and energy back up. Returning can help you feel that life is getting back to normal, but it can also feel emotional and daunting.",
          "Take care not to over-commit or do more than is comfortable for you. When you go back depends on things like your general health, your day-to-day responsibilities, and whether your work is physically demanding.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "If you have or have ever had cancer, the law considers this a disability. You cannot be treated less favourably because you have cancer, or for reasons connected to it, and Lymphoma Action says the Equality Act 2010 protects you from discrimination in employment from diagnosis for the rest of your life.",
          "In Northern Ireland, the Disability Discrimination Act 1995 says employers cannot discriminate against you because of your disability. Your employer must make reasonable adjustments that allow you to continue working during and after treatment, and you should agree them together before they are put in place.",
        ],
      },
      {
        heading: "Changes that can help",
        paragraphs: [
          "Reasonable adjustments could include a phased return to work, different working hours, extra breaks to help you cope with tiredness, or a parking space near your work. Others are working some of your hours from home, avoiding peak travel times, or a short-term change in your responsibilities.",
          "Make sure you are fully involved in any decisions about your return. It can help to write notes in your meetings, or to have someone come to the meetings with you.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition or disability. It could give you a grant towards things like specialist equipment, support workers, or the costs of travelling to work if you cannot use public transport.",
          "An Access to Work grant will not affect any other benefits you get, and you will not have to pay it back. It will not pay for reasonable adjustments, which are the changes your employer must legally make.",
        ],
      },
      {
        heading: "Money",
        paragraphs: [
          "A diagnosis of cancer meets the government's definition of disability, so you might qualify for a range of financial support, such as Personal Independence Payment, Employment and Support Allowance or Universal Credit. Some of it depends on your savings and earnings.",
          "In England, you can apply for free prescriptions with a medical exemption certificate, which you can ask your consultant, clinical nurse specialist or GP about. Macmillan's money and welfare rights advisers are free on 0808 808 0000, and if you are self-employed, specialist advice can help you understand your options.",
        ],
      },
    ],
    helps: [
      "Talk to your employer early, so they can support you and put adjustments in place.",
      "Ask about a phased return, different working hours or extra breaks.",
      "Write notes in meetings about your return, or bring someone with you.",
      "Check whether you are eligible for an Access to Work grant.",
      "In England, ask your consultant, clinical nurse specialist or GP about a medical exemption certificate for free prescriptions.",
      "Call Macmillan's welfare rights advisers free on 0808 808 0000 before your work or benefits change.",
    ],
    tryThisWeek: [
      "Talk to your employer early.",
      "Ask about a phased return.",
      "Check Access to Work.",
    ],
    ask: "When might I be ready to go back to work, and could you write down what adjustments would help me?",
    interactive: {
      kind: "scenarios",
      title: "Back at work",
      scenarios: [
        {
          id: "start",
          situation: "You feel ready to go back, and want to start full time on Monday.",
          options: [{ text: "Ask about a phased return", best: true }, { text: "Go straight back to full hours" }],
          why: "Take care not to over-commit or do more than is comfortable for you. A phased return is one reasonable adjustment.",
        },
        {
          id: "tired",
          situation: "By mid-afternoon you are exhausted at your desk.",
          options: [{ text: "Ask about extra breaks or new hours", best: true }, { text: "Say nothing and push on" }],
          why: "Reasonable adjustments could include different working hours, or extra breaks to help you cope with tiredness.",
        },
        {
          id: "meeting",
          situation: "Your manager invites you to a meeting about your return.",
          options: [{ text: "Take notes, or bring someone with you", best: true }, { text: "Agree to whatever is suggested" }],
          why: "Make sure you are fully involved in any decisions about your return. It can help to write notes, or to have someone come with you.",
        },
        {
          id: "travel",
          situation: "You cannot manage public transport to get to work.",
          options: [{ text: "Check if Access to Work can help", best: true }, { text: "Assume you have to give up work" }],
          why: "Access to Work could give you a grant towards the costs of travelling to work if you cannot use public transport.",
        },
      ],
    },
    sources: [LA_DAY_TO_DAY, MAC_WORK, GOV_ATW],
    quiz: {
      question: "Does Access to Work pay for reasonable adjustments?",
      options: [{ text: "No, your employer must make those", right: true }, { text: "Yes, it pays for all of them" }, { text: "Only if you are self-employed" }],
      why: "It will not pay for reasonable adjustments, which are the changes your employer must legally make.",
    },
  },
  {
    id: "lym-fertility",
    kicker: "Fertility",
    question: "Will treatment affect my fertility, and what can I do about it?",
    hook: "Some lymphoma treatments can affect fertility, but not all. The time to talk about it is before treatment starts.",
    short: "Some treatments for lymphoma can affect your ability to have children, especially certain chemotherapy combinations, high-dose chemotherapy and radiotherapy to the pelvis. Most females who have lymphoma treatment can still have children naturally afterwards. Options such as sperm banking and egg freezing work best before treatment, so speak to your team early.",
    sections: [
      {
        heading: "Talk before treatment",
        paragraphs: [
          "Some treatment for lymphoma can affect your ability to have children. Speak to your specialist team before treatment if you want to have children in the future.",
          "Fertility is more likely to be affected by certain combinations of chemotherapy drugs, high-dose chemotherapy before a stem cell transplant, and radiotherapy to the area below your belly button. Fertility preservation is generally more effective if you begin it before lymphoma treatment.",
        ],
      },
      {
        heading: "Chemotherapy and fertility",
        paragraphs: [
          "Some chemotherapy drugs can affect fertility, but not all, and the higher the total dosage, the more likely it is. Chemotherapy often affects male fertility, at least temporarily, and can lower the sperm count.",
          "Most females who have lymphoma treatment can have children naturally afterwards. It is very common for periods to stop during chemotherapy; in younger females they usually come back, though it can take many months for egg release to begin again.",
        ],
      },
      {
        heading: "Ways to preserve fertility",
        paragraphs: [
          "NICE recommends that all men whose cancer treatment could affect their fertility are offered sperm banking. Sperm needs to be banked before lymphoma treatment starts, because treatment can affect the number and quality of sperm.",
          "For women, the most common options are egg freezing and embryo storage. Egg freezing involves injections to the tummy each day for about 2 weeks to stimulate the ovaries, before the eggs are taken out and frozen.",
          "Fertility treatments are not always available on the NHS for people with cancer, and options might be available up until age 40, though this varies. A member of your team or a fertility specialist should explain the options, and you should be offered the chance to talk to a specialist fertility counsellor.",
        ],
      },
      {
        heading: "Contraception and early menopause",
        paragraphs: [
          "Chemotherapy medicines can be very harmful for an unborn baby, so it is important to use contraception during treatment if you could get pregnant or get your partner pregnant. Doctors usually recommend contraception during radiotherapy and for at least 3 months afterwards.",
          "After treatment for lymphoma, you may have an earlier menopause, and your cancer doctor or specialist nurse can tell you if this is likely. Tell your doctor or nurse about any menopausal symptoms, as hormone replacement therapy can help reduce them.",
        ],
      },
      {
        heading: "Trying for a baby after treatment",
        paragraphs: [
          "The general recommendation is to try to conceive naturally at first, unless you already know you have a fertility problem. If you do not get pregnant within a year of trying, you might like to seek advice, with tests for both you and your partner.",
          "Tests after treatment can check whether you are making sperm normally, or how many eggs are left. If needed, you could use sperm, eggs or embryos stored before treatment, or consider other options, such as donor eggs or sperm, or adoption.",
        ],
      },
    ],
    helps: [
      "Speak to your specialist team about fertility before treatment starts.",
      "Ask whether your treatment is likely to affect your fertility, and what the options are.",
      "Use contraception during treatment if you could get pregnant or get your partner pregnant.",
      "Ask to talk to a specialist fertility counsellor.",
      "Tell your doctor or nurse about any menopausal symptoms after treatment.",
    ],
    tryThisWeek: [
      "Ask your team about fertility.",
      "Use contraception during treatment.",
      "Ask for a fertility counsellor.",
    ],
    ask: "Is my treatment likely to affect my fertility, and can I be referred to a fertility clinic before it starts?",
    interactive: {
      kind: "flip-cards",
      title: "Preserving fertility, card by card",
      intro: "Turn each card to see what each option involves. Not every option suits everyone, or is available on the NHS.",
      cards: [
        { id: "sperm", front: "Sperm banking", when: "Before treatment starts", back: "Semen is frozen and stored. NICE recommends it is offered to all men whose treatment could affect fertility." },
        { id: "eggs", front: "Egg freezing", when: "Before treatment starts", back: "Daily injections for about 2 weeks, then the eggs are collected and frozen." },
        { id: "embryos", front: "Embryo storage", when: "If you have a long-term partner", back: "Eggs are mixed with sperm, and the embryos are frozen until you want a baby." },
        { id: "ovarian", front: "Ovarian tissue freezing", when: "A newer technique", back: "Tissue containing immature eggs is frozen, and can later be put back." },
        { id: "contraception", front: "Contraception", when: "During treatment", back: "And for at least 3 months after radiotherapy, as doctors usually recommend." },
      ],
    },
    sources: [LA_FERTILITY, NHS_HL_TREAT, NHS_NHL_TREAT, NHS_CHEMO, MAC_LATE],
    quiz: {
      question: "When is fertility preservation generally most effective?",
      options: [{ text: "Before lymphoma treatment begins", right: true }, { text: "Halfway through treatment" }, { text: "A year after treatment" }],
      why: "Fertility preservation is generally more effective if you begin it before lymphoma treatment.",
    },
  },
  {
    id: "lym-mood",
    kicker: "Mood",
    question: "How do I live with the worry and uncertainty?",
    hook: "There is no right way to feel about lymphoma. Most people adapt, and there is help for the days and nights when it is too much.",
    short: "Shock, fear, anxiety, anger and low mood are all common with lymphoma, and uncertainty, from waiting for results to watch and wait, is hard. Most people adapt well over time. Talking to your team or GP, counselling and small daily steps can help, and if you ever feel you cannot keep yourself safe, call 999 or go to A&E, or call Samaritans free on 116 123.",
    sections: [
      {
        heading: "No right way to feel",
        paragraphs: [
          "You are likely to feel a mix of feelings and emotions with lymphoma, and there is no typical or right way to feel. Shock, fear, anxiety, anger, guilt and low mood are all common, and they might come and go.",
          "It takes adjustment, but most people adapt well to living with and beyond lymphoma. Over time, many people describe finding a new normal.",
        ],
      },
      {
        heading: "Living with uncertainty",
        paragraphs: [
          "It is normal to feel uncertain about your future when you have been diagnosed with cancer. Waiting for test results, being on watch and wait, and worrying about the lymphoma coming back can all cause anxiety.",
          "Most people who have been through cancer treatment live with some worry and uncertainty, and this does not mean they are not coping with life after treatment. These feelings can get better over time.",
          "The time after treatment can bring mixed feelings too. People might expect you to feel overjoyed, but some people find it an uncertain time, and feel unsettled by seeing less of the team who supported them.",
        ],
      },
      {
        heading: "Small things that help",
        paragraphs: [
          "It can help to focus on what you can control right now: talking about your feelings, getting support, and being involved in your own health and wellbeing. Be kind to yourself, stay connected with others, and have something to look forward to.",
          "Physical activity is good for your mental health, and can help you sleep better and manage stress, anxiety and depression. Some people find spending time in nature, doing something creative, or mindfulness helpful.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "Supporting your emotional wellbeing is an important part of your medical team's role, and a clinical nurse specialist is often a good person to approach. If your feelings do not improve or are hard to cope with, your lymphoma team or GP may be able to refer you to a counsellor or psychologist, or prescribe medicines to help.",
          "You can ask your GP or hospital team to refer you for free NHS counselling, and in England you can refer yourself. If you feel you want to withdraw from others all or most of the time, this could be a sign of low mood and depression, so speak to your GP or clinical nurse specialist.",
        ],
      },
      {
        heading: "If you need help urgently",
        paragraphs: [
          "If you need urgent help for your mental health, call 111 and select the mental health option, or ask for an urgent GP appointment. You can call Samaritans free on 116 123, any time, day or night.",
          "Call 999 or go to A&E if you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Tell your medical team how you are feeling; a clinical nurse specialist is often a good person to approach.",
      "Be kind to yourself: it is OK to say no to people and put off plans if you do not feel like them.",
      "Ask your GP or hospital team about free NHS counselling; in England you can refer yourself.",
      "For urgent help with your mental health, call 111 and select the mental health option.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "If you do not feel you can keep yourself safe, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Tell your nurse how you feel.",
      "Be kind to yourself.",
      "Ask about NHS counselling.",
    ],
    ask: "Can you refer me to a counsellor or psychologist, and who can I talk to between appointments when the worry builds?",
    interactive: {
      kind: "signs",
      title: "Feelings to talk about",
      intro: "Tick any you have been feeling. There is no right way to feel, and your team wants to know.",
      signs: ["Shock or numbness", "Fear or worry that will not settle", "Anxiety before appointments or results", "Anger or irritability", "Guilt", "Low mood or a sense of loss", "Wanting to be alone most of the time", "Difficulty sleeping"],
      after: "Tell your clinical nurse specialist, medical team or GP. If you do not feel you can keep yourself safe, call 999 or go to A&E, or call Samaritans free on 116 123.",
      copyHeading: "Feelings I want to talk about",
    },
    sources: [LA_EMOTIONAL, MAC_UNCERTAINTY, BCUK_MIND, NHS_URGENT, SAMARITANS, MAC_LATE],
    quiz: {
      question: "Does living with some worry after treatment mean you are not coping?",
      options: [{ text: "No, most people live with some worry", right: true }, { text: "Yes, it means something is wrong" }, { text: "Only if it lasts a week" }],
      why: "Most people who have been through cancer treatment live with some worry and uncertainty, and this does not mean they are not coping with life after treatment.",
    },
  },
];
