import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Living with secondary cancer page's pieces
// (content/library-conditions/cancer-more.ts, `secondaryCancer`). Every sentence was written from wording
// checked on 22 October 2026 on the pages listed under each answer's `sources`; nothing is added that those
// pages do not say. Most of it comes from Macmillan Cancer Support, Marie Curie, Cancer Research UK, the NHS
// pages on end of life care, sepsis, chemotherapy and radiotherapy, the government's pages on benefits and
// Access to Work, and Samaritans. The answers are written to be calm, honest and kind. They give no figures
// about time left and nothing that reads as a prediction, and each one says where to get support. Palliative
// care and planning ahead follow the sources' own words. The urgent help answer gives the contact routes
// exactly as the sources state them (the 24-hour number, 999, A&E and NHS 111), and the feelings section
// gives the crisis routes as the NHS and Samaritans state them. General information only; it never replaces
// what a person's own cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const eol = (label: string, path: string): LearnSource => nhs(label, `tests-and-treatments/end-of-life-care/${path}`);
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const mc = (label: string, path: string): LearnSource => ({ label: `Marie Curie: ${label}`, url: `https://www.mariecurie.org.uk/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_EOL_WHAT = eol("What end of life care involves", "what-it-involves-and-when-it-starts/");
const NHS_WHY_PLAN = eol("Why plan ahead for end of life care?", "planning-ahead/why-plan-ahead/");
const NHS_ADV_STMT = eol("Advance statement about your care wishes", "planning-ahead/advance-statement/");
const NHS_LPA = eol("Lasting power of attorney", "planning-ahead/lasting-power-of-attorney/");
const NHS_SYMPTOMS = eol("Managing pain and other symptoms during end of life care", "your-wellbeing/controlling-pain-and-other-symptoms/");
const NHS_MONEY = eol("Coping financially with end of life care", "your-wellbeing/coping-financially/");
const NHS_COPING = eol("Coping with a terminal illness", "your-wellbeing/coping-with-a-terminal-illness/");
const NHS_TALK = eol("Starting to talk about your terminal illness", "your-wellbeing/starting-to-talk-about-your-illness/");
const NHS_SEPSIS = nhs("Sepsis", "conditions/sepsis/");
const NHS_CHEMO = nhs("Chemotherapy", "tests-and-treatments/chemotherapy/");
const NHS_RADIO = nhs("Radiotherapy", "tests-and-treatments/radiotherapy/");
const NHS_URGENT_MH = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const MAC_ADV = mac("What is advanced cancer?", "advanced-cancer");
const MAC_SEC = mac("Secondary cancer", "secondary-cancer");
const MAC_HOWLONG = mac("Asking about how long you might live", "advanced-cancer/asking-about-how-long-you-might-live");
const MAC_CARE = mac("Care and support if you have advanced cancer", "advanced-cancer/care-and-support-if-you-have-advanced-cancer");
const MAC_DAY = mac("Coping with day-to-day life with advanced cancer", "advanced-cancer/coping-with-day-to-day-life-with-advanced-cancer");
const MAC_FEEL = mac("Coping with your feelings about advanced cancer", "advanced-cancer/coping-with-your-feelings-about-advanced-cancer");
const MAC_REL = mac("Relationships and advanced cancer", "advanced-cancer/relationships-and-advanced-cancer");
const MAC_PALL = mac("Palliative care and cancer", "treatment/types-of-treatment/palliative-care-and-cancer");
const MAC_ACP = mac("Advance care planning", "treatment/if-you-have-an-advanced-cancer/advance-care-planning");
const MAC_PLAN = mac("Planning ahead", "treatment/if-you-have-an-advanced-cancer/advance-care-planning/planning-ahead");
const MAC_HELP_PLAN = mac("Help with planning ahead", "treatment/if-you-have-an-advanced-cancer/advance-care-planning/help-with-planning-ahead");
const MAC_PAIN = mac("Cancer pain", "impacts-of-cancer/pain");
const MAC_BREATH = mac("Breathlessness", "impacts-of-cancer/breathlessness");
const MAC_NAUSEA = mac("Nausea and vomiting", "impacts-of-cancer/nausea-and-vomiting");
const MAC_TIRED = mac("Tiredness (fatigue)", "impacts-of-cancer/tiredness");
const MAC_UNCERT = mac("Uncertainty", "impacts-of-cancer/uncertainty");
const MAC_BONE_SYM = mac("Managing symptoms of secondary bone cancer", "bone-cancer-secondary/managing-symptoms-of-secondary-bone-cancer");
const MAC_MSCC = mac("Metastatic spinal cord compression (MSCC)", "impacts-of-cancer/metastatic-spinal-cord-compression");
const MAC_CHEMO_SE = mac("Side effects of chemotherapy", "treatment/types-of-treatment/chemotherapy/side-effects-of-chemotherapy");
const MAC_TRIALS = mac("Cancer clinical trials", "treatments-and-drugs/clinical-trials");
const MAC_CHILDREN = mac("Talking to children and teenagers", "diagnosis/talking-about-cancer/talking-to-children-and-teenagers");
const MAC_RIGHTS = mac("Cancer and employment rights", "impacts-of-cancer/work-and-cancer/cancer-and-employment-rights");
const MAC_ADJUST = mac("Reasonable adjustments", "impacts-of-cancer/work-and-cancer/reasonable-adjustments");
const MAC_STOP_WORK = mac("If you decide to stop working", "impacts-of-cancer/work-and-cancer/stopping-work");
const MAC_FIN_EOL = mac("Financial help at the end of life", "impacts-of-cancer/benefits-and-financial-support/financial-help-end-of-life");

const MC_PALL = mc("What is palliative care?", "information/getting-care/palliative-care");
const MC_TEAM = mc("Palliative care team", "information/getting-care/palliative-care-team");
const MC_HOSPICE = mc("Hospice care", "information/getting-care/hospice-care");
const MC_CHEMO = mc("What is palliative chemotherapy?", "information/symptoms/palliative-chemotherapy");
const MC_LINE = mc("Marie Curie Support Line", "services/support-line");

const CRUK_SPREAD = cruk("How cancer can spread", "what-is-cancer/how-cancer-start-grow-spread/how-cancer-can-spread");
const CRUK_SEPSIS = cruk("Sepsis, infection, and cancer", "coping/physically/sepsis-infection-cancer");
const CRUK_CALCIUM = cruk("High calcium levels (hypercalcaemia)", "coping/physically/blood-calcium/high-calcium-people-cancer");

const GOV_DISABILITY = gov("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");
const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");
const GOV_SPECIAL = gov("Get benefits if you're nearing the end of life", "benefits-end-of-life");

const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const secondaryCancerAnswers: LearnArticle[] = [
  {
    id: "sc-what-it-is",
    kicker: "Understanding",
    question: "What does it mean that my cancer has spread?",
    hook: "A secondary cancer is the same cancer, growing in a new place. It usually cannot be cured, but that is not the whole story.",
    short: "A secondary cancer forms when cells break away from where the cancer started and grow in another part of the body. It is still the same type of cancer, and it is treated with the drugs used for that cancer. Secondary cancers are not usually curable, but treatment aims to control the cancer and manage symptoms, sometimes for a long time.",
    sections: [
      {
        heading: "Where it starts, and where it goes",
        paragraphs: [
          "The place where a cancer starts in the body is called the primary cancer. Sometimes cells break away from it and are carried in the bloodstream or through the lymphatic system to another part of the body. There they may grow and form another tumour, called a secondary cancer or a metastasis.",
          "Cancer cells don't stick together as well as normal cells do. Spreading is quite a complicated process, and most cancer cells that reach the bloodstream don't survive it. Only a few go on to form a secondary cancer.",
        ],
      },
      {
        heading: "Still the same cancer",
        paragraphs: [
          "A secondary cancer is the same type of cancer as the primary tumour. For example, breast cancer cells that spread to the liver are still breast cancer cells. They will be treated with drugs used to treat breast cancer.",
          "This is why bowel cancer that has spread to the liver is called bowel cancer with liver metastases. It is not called liver cancer.",
        ],
      },
      {
        heading: "The words doctors use",
        paragraphs: [
          "Doctors may use the words metastatic or secondary cancer to describe cancer that has spread to other parts of the body. Depending on the cancer type, it may also be called stage 4 cancer.",
          "Advanced cancer is cancer that has spread or come back, and the words are usually used for cancer that cannot be cured. Locally advanced cancer is different: the primary tumour has grown into nearby areas, but it has not spread to other parts of the body.",
          "Some people find out they have advanced cancer when they are first diagnosed. For others, the cancer may spread or come back after treatment.",
        ],
      },
      {
        heading: "What it does and does not mean",
        paragraphs: [
          "In a small number of situations, it is possible to cure a secondary cancer. But secondary cancers are not usually curable, and the aim of treatment is to control the cancer and manage any symptoms.",
          "Sometimes treatment can control advanced cancer for a long time. During this time, you may be able to continue with your life and do the things that are important to you.",
          "Everyone is different and will respond to treatment in different ways. Your doctors cannot be certain what will happen, because cancer affects people differently.",
        ],
      },
      {
        heading: "When you have just been told",
        paragraphs: [
          "It is common to have many different reactions when you find out that cancer has come back or spread. You may feel shocked and find it hard to understand, or feel angry or frightened about the future. These feelings usually become easier to manage over time.",
          "Macmillan is here to support you, and your family and friends. You can call the Macmillan Support Line free on 0808 808 00 00, from 8am to 8pm, 7 days a week.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor or specialist nurse to explain what treatment is likely to be suitable for you.",
      "Ask your cancer doctor or specialist what to look out for, as the signs can depend on the type of cancer.",
      "Always contact your doctor if you have symptoms that are ongoing, unexplained or unusual for you.",
      "If you want to talk about what may happen, your cancer doctor or specialist nurse can help. If you are not comfortable discussing it, it is okay to say so.",
      "Call the Macmillan Support Line free on 0808 808 00 00 if you would like to talk.",
    ],
    tryThisWeek: [
      "Ask which treatments may suit you.",
      "Note any new or unusual symptoms.",
      "Call the Macmillan Support Line.",
    ],
    ask: "Where has the cancer spread to, and what does that mean for my treatment?",
    interactive: {
      kind: "flip-cards",
      title: "The words you might hear",
      intro: "Turn a card to see what each word means.",
      cards: [
        { id: "primary", front: "Primary cancer", when: "Where it started", back: "The place where a cancer starts in the body." },
        { id: "secondary", front: "Secondary cancer", when: "Also called a metastasis", back: "Cells that broke away from the primary cancer and formed another tumour in another part of the body." },
        { id: "metastatic", front: "Metastatic cancer", when: "The medical term", back: "Cancer that has spread to a different area of the body. Usually, treatment aims to control it and manage symptoms." },
        { id: "locally-advanced", front: "Locally advanced", when: "Grown nearby", back: "The primary tumour has grown into nearby areas of the body, but has not spread to other parts of the body." },
        { id: "advanced", front: "Advanced cancer", when: "Spread or come back", back: "Usually used to describe cancer that cannot be cured. Depending on the cancer type, it may be called stage 4." },
      ],
    },
    sources: [MAC_SEC, CRUK_SPREAD, MAC_ADV, MAC_HOWLONG],
    quiz: {
      question: "Breast cancer that has spread to the liver is made of which cells?",
      options: [{ text: "Breast cancer cells", right: true }, { text: "Liver cancer cells" }, { text: "A new kind of cancer cell" }],
      why: "A secondary cancer is the same type of cancer as the primary tumour. For example, breast cancer cells that spread to the liver are still breast cancer cells.",
    },
  },
  {
    id: "sc-treatment-aims",
    kicker: "Treatment",
    question: "If it can't be cured, what is treatment for?",
    hook: "Treatment now aims to control the cancer, ease symptoms and help you feel as well as possible. Knowing the aim helps you decide.",
    short: "Secondary cancers are not usually curable, so treatment usually aims to control the cancer and manage symptoms. Sometimes it can control advanced cancer for a long time. Your doctor should explain what a treatment is for, and it is always your choice whether to have it.",
    sections: [
      {
        heading: "Control, not cure",
        paragraphs: [
          "Secondary cancers are not usually curable, and the aim of treatment is to control the cancer and manage any symptoms. In a small number of situations, it is possible to cure a secondary cancer.",
          "Sometimes treatment can control advanced cancer for a long time. Sometimes it is not possible to stop the spread of the cancer, and you will still have treatment to manage symptoms and help you feel as well as possible.",
        ],
      },
      {
        heading: "What treatment might be",
        paragraphs: [
          "Treatment for advanced cancer may include surgery, radiotherapy, chemotherapy, hormonal therapies, targeted therapies, immunotherapies or a combination of treatments. You may be offered some treatments as part of a clinical trial.",
          "The treatment you have will depend on the primary cancer, where it has spread to and what treatment you have had before.",
        ],
      },
      {
        heading: "Treatment described as palliative",
        paragraphs: [
          "You might have cancer treatment that is described as palliative. This means the aim is to manage symptoms caused by the cancer and to improve your quality of life. For example, radiotherapy can be used to improve pain caused by cancer in an area of bone.",
          "Palliative chemotherapy aims to control the cancer, help with symptoms such as pain or breathlessness, and sometimes help people live longer, but not always. It does not aim to cure the cancer.",
          "Your cancer doctor should explain why you are having a treatment. They may not always use the word palliative, and if you're not sure, it's OK to ask.",
        ],
      },
      {
        heading: "Weighing it up",
        paragraphs: [
          "Your doctor can usually give you information on how well a treatment may work. They will consider what is important to you and how treatment may affect you.",
          "You may need to have treatment for a while to see if it is helping. Sometimes the treatment only causes side effects and has no benefits, and you may want to think about whether to continue. It may help to talk to your cancer doctor, specialist nurse and family and friends first.",
          "If you are offered palliative chemotherapy, it is your choice whether you have it. If you decide not to have further treatment, your cancer doctor and specialist nurse will support you and make sure your symptoms are managed.",
        ],
      },
      {
        heading: "Questions you can ask",
        paragraphs: [
          "You might want to ask what a treatment is meant to do for you, what the side effects and risks are, and what your other options are. Your doctors might not be able to give exact answers to everything, but they should give you information to help you make a decision.",
          "You can have palliative care at the same time as chemotherapy. The Macmillan Support Line and the Marie Curie Support Line both offer free information and support if you want to talk a decision through.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor what a treatment is meant to do for you.",
      "Ask about the side effects and risks, and what your other options are.",
      "Talk a decision through with your cancer doctor, specialist nurse, family and friends.",
      "Ask if you can be referred for palliative care alongside your treatment.",
      "Ask your cancer team about clinical trials, even if they have not mentioned them.",
      "Call the Macmillan or Marie Curie Support Line to talk things through.",
    ],
    tryThisWeek: [
      "Ask what a treatment is meant to do.",
      "Ask about side effects and options.",
      "Ask about palliative care alongside.",
    ],
    ask: "What is the aim of my treatment now, and what might happen if I do not have it?",
    interactive: {
      kind: "scenarios",
      title: "Making sense of a treatment",
      scenarios: [
        {
          id: "control",
          situation: "Your doctor says the chemotherapy is to help control the cancer, not cure it.",
          options: [{ text: "Ask what it is meant to do for you", best: true }, { text: "Assume nothing more can be done" }],
          why: "They may not always use the word 'palliative'. They may say that the chemotherapy is to help control your cancer or help with symptoms. If you're not sure, it's OK to ask.",
        },
        {
          id: "side-effects",
          situation: "After a while, the treatment seems to bring only side effects.",
          options: [{ text: "Talk it through with your doctor, nurse and family", best: true }, { text: "Say nothing and carry on" }],
          why: "Sometimes, the treatment only causes side effects and has no benefits. In this case, you may want to think about if you want to continue with treatment.",
        },
        {
          id: "family-views",
          situation: "Your family have strong views on what you should do.",
          options: [{ text: "Make the decision that feels right for you", best: true }, { text: "Go along with them to avoid upset" }],
          why: "Sometimes family and friends may have different thoughts or opinions on what you should do. It's OK to do what you think is best for you.",
        },
        {
          id: "stopping",
          situation: "You worry that stopping treatment means being left on your own.",
          options: [{ text: "Know your team will still manage your symptoms", best: true }, { text: "Stay on it just to keep contact" }],
          why: "If you decide not to have further treatment, your cancer doctor and specialist nurse will support you and make sure your symptoms are managed.",
        },
      ],
    },
    sources: [MAC_SEC, MAC_ADV, MAC_PALL, MC_CHEMO, MAC_TRIALS],
    quiz: {
      question: "What is the usual aim of treatment for secondary cancer?",
      options: [{ text: "To control the cancer and manage symptoms", right: true }, { text: "Always to cure it" }, { text: "Only to keep you in hospital" }],
      why: "Secondary cancers are not usually curable, and the aim of treatment is to control the cancer and manage any symptoms.",
    },
  },
  {
    id: "sc-symptoms",
    kicker: "Symptoms",
    question: "What symptoms might I have, and who helps with them?",
    hook: "Symptoms depend on where the cancer is. Many can be eased, and there are people whose whole job is helping with them.",
    short: "The symptoms of a secondary cancer depend on where in the body it is. Pain, sickness, breathlessness and tiredness are among the symptoms people have, and most pain can be managed. Check any new symptom with your GP, cancer doctor or specialist nurse, and ask who to call out of hours.",
    sections: [
      {
        heading: "It depends on where it is",
        paragraphs: [
          "The symptoms caused by a secondary cancer depend on where in the body the secondary cancer is. The possible signs can also depend on the type of cancer, and your cancer doctor or specialist can explain what to look out for.",
          "Always check any new symptoms with your GP, cancer doctor or specialist nurse. This can help with feelings of worry and uncertainty.",
        ],
      },
      {
        heading: "Symptoms people have",
        paragraphs: [
          "Each person will have different symptoms, depending on their condition and the treatment they are having. Symptoms can include feeling and being sick, constipation, loss of appetite and pain.",
          "Pain is the most common symptom of secondary bone cancer. It may be a dull ache that does not go away, and it is often worse when you move.",
          "Breathlessness can be a symptom of cancer, or a side effect of treatment. Fatigue, a feeling of tiredness or exhaustion, is a very common problem.",
        ],
      },
      {
        heading: "Pain is not something to put up with",
        paragraphs: [
          "Many people with cancer will have pain at some point. But for most people, pain can be managed using different medicines, non-drug treatments and things you can do yourself.",
          "Some people do not want to talk about pain because they worry it means the cancer has got worse. But controlling pain is an important part of your care, and pain does not always get worse if the cancer develops.",
        ],
      },
      {
        heading: "Who can help",
        paragraphs: [
          "Palliative care professionals are experts at managing symptoms. They can assess, treat and give advice about coping with any symptoms caused by cancer at any stage.",
          "Your GP can arrange for a district nurse to visit, and can refer you to a specialist palliative care team or a pain team. A physiotherapist can show you ways of moving, and an occupational therapist can provide equipment to make you more comfortable.",
        ],
      },
      {
        heading: "When to get help quickly",
        paragraphs: [
          "Contact your doctor straight away if breathlessness is a new symptom, if you have pain when you breathe, or if the breathlessness gets worse quickly. If you cannot speak to your doctor and it continues to get worse, go straight to your nearest A&E.",
          "Always call 999 if you have chest pain or difficulty breathing.",
        ],
      },
    ],
    helps: [
      "Check any new symptoms with your GP, cancer doctor or specialist nurse.",
      "Ask your cancer doctor or specialist what to look out for with your type of cancer.",
      "Tell your doctor or nurse where the pain is and how it affects your life.",
      "Keep a record of the pain, as even a few days of notes may show a pattern.",
      "Ask your cancer doctor or specialist nurse who to contact, including at night, on bank holidays and at weekends.",
      "Ask your doctor to refer you to a palliative care nurse, who can advise on pain and symptom control.",
    ],
    tryThisWeek: [
      "Note any new symptoms.",
      "Keep a short pain record.",
      "Ask who to call out of hours.",
    ],
    ask: "What symptoms should I look out for with my type of cancer, and who do I call about them?",
    interactive: {
      kind: "signs",
      title: "Symptoms to tell your team",
      intro: "Tick any you have noticed. Always check new symptoms with your GP, cancer doctor or specialist nurse.",
      signs: ["New pain, or pain getting worse", "Pain that stops me sleeping", "Feeling or being sick", "Constipation", "Loss of appetite", "Breathlessness", "Feeling very tired or exhausted", "Any other new or unusual symptom"],
      after: "Contact your doctor straight away if breathlessness is new or gets worse quickly. Always call 999 if you have chest pain or difficulty breathing.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [MAC_SEC, MAC_ADV, NHS_SYMPTOMS, MAC_PAIN, MAC_BREATH, MAC_TIRED, MAC_BONE_SYM, MAC_PALL],
    quiz: {
      question: "Who are experts at managing symptoms at any stage?",
      options: [{ text: "Palliative care professionals", right: true }, { text: "Only your GP's receptionist" }, { text: "No one, symptoms have to be put up with" }],
      why: "Palliative care professionals are experts at managing symptoms. They can assess, treat and give advice about coping with any symptoms caused by cancer at any stage.",
    },
  },
  {
    id: "sc-palliative",
    kicker: "Palliative care",
    question: "Does palliative care mean the end?",
    hook: "No. Palliative care is support to live as well as possible, and some people have it for years, alongside their treatment.",
    short: "Palliative care offers physical, emotional and practical support to people with an illness that cannot be cured. It can start soon after diagnosis and run alongside treatment such as chemotherapy, and some people have it for years. Your GP or district nurse can refer you, and your family can be supported too.",
    sections: [
      {
        heading: "What palliative care is",
        paragraphs: [
          "Palliative care offers physical, emotional and practical support to people with an illness that cannot be cured. It aims to make sure you feel supported and comfortable, rather than cure the illness.",
          "It can include help to manage pain or other symptoms, emotional support, advice about practical problems and planning ahead, and support for the people close to you. It is often also called supportive care.",
          "It deals with you as a whole person, not just your illness or symptoms. This is called a holistic approach.",
        ],
      },
      {
        heading: "Not only for the end",
        paragraphs: [
          "Having palliative care doesn't necessarily mean that you're likely to die soon. Some people have palliative care for years.",
          "For cancer that cannot be cured, you might have palliative care soon after diagnosis, or at several points throughout your treatment. It is based on your needs rather than life expectancy.",
          "Palliative care can include end of life care, but it is much broader and can last for longer.",
        ],
      },
      {
        heading: "Alongside your treatment",
        paragraphs: [
          "You can have palliative care alongside treatments aimed at controlling your illness, such as chemotherapy or radiotherapy. You do not have to stop seeing the specialists who have been treating your illness.",
          "Your doctor or nurse may suggest palliative care because they want to make sure you have all the support you need. That might include managing symptoms, emotional support for you or your loved ones, or looking after your general wellbeing.",
        ],
      },
      {
        heading: "Hospices are for living too",
        paragraphs: [
          "A hospice can support you at any stage of a terminal illness, not only at the end of life. You might visit during the day for support sessions, stay for a few days or weeks while you need specialist care and then go home, or have hospice care at home.",
          "Hospices are smaller and quieter than hospitals. As well as nursing care, they may offer counselling, complementary therapies, spiritual care and psychological support, and hospice care is free.",
          "If you are not sure about the idea of hospice care, you can ask to visit a hospice. The staff can show you around and talk through any questions you have.",
        ],
      },
      {
        heading: "How to get it",
        paragraphs: [
          "You may need a referral to get palliative care. To get one, speak with your GP, your district nurse or another healthcare professional. If you are not in touch with any services, it's best to contact your GP.",
          "Family, friends and carers can get emotional and practical support too. The Marie Curie Support Line gives free information and emotional support on 0800 090 2309.",
        ],
      },
    ],
    helps: [
      "Ask your GP or district nurse about a referral to palliative care.",
      "Keep seeing the specialists who have been treating your illness alongside palliative care.",
      "Ask your palliative care team what is available at your local hospice.",
      "If you are not sure about hospice care, ask to visit a hospice.",
      "Ask what support there is for the people close to you.",
      "Call the Marie Curie Support Line free on 0800 090 2309.",
    ],
    tryThisWeek: [
      "Ask about a palliative care referral.",
      "Ask what your local hospice offers.",
      "Save the Marie Curie Support Line.",
    ],
    ask: "Can I be referred to a palliative care team now, alongside my treatment?",
    interactive: {
      kind: "scenarios",
      title: "Worries about palliative care",
      scenarios: [
        {
          id: "suggested",
          situation: "A nurse suggests palliative care, and you worry it means the end is near.",
          options: [{ text: "Ask what support it could give you now", best: true }, { text: "Turn it down straight away" }],
          why: "Your doctor or nurse may mention or suggest palliative care because they want to make sure you have all the support you need.",
        },
        {
          id: "treatment",
          situation: "You think palliative care means stopping your chemotherapy.",
          options: [{ text: "Know you can have both", best: true }, { text: "Choose one or the other" }],
          why: "You can have other treatments, such as radiotherapy or chemotherapy, at the same time as palliative care.",
        },
        {
          id: "hospice",
          situation: "Your team mentions the local hospice, and the word frightens you.",
          options: [{ text: "Ask to visit and look around", best: true }, { text: "Refuse to hear about it" }],
          why: "If you are not sure about the idea of hospice care, you can ask to visit a hospice. The staff can show you around and talk through any questions or concerns you have.",
        },
        {
          id: "partner",
          situation: "Your partner is struggling too.",
          options: [{ text: "Ask what support there is for them", best: true }, { text: "Assume it is only for you" }],
          why: "Family, friends and carers can access emotional and practical palliative care.",
        },
      ],
    },
    sources: [MC_PALL, MAC_PALL, NHS_EOL_WHAT, MC_HOSPICE, MAC_CARE, MC_TEAM, MC_LINE],
    quiz: {
      question: "Does having palliative care mean you are likely to die soon?",
      options: [{ text: "No, some people have it for years", right: true }, { text: "Yes, it is only for the last days" }, { text: "Only if you have stopped treatment" }],
      why: "Having palliative care doesn't necessarily mean that you're likely to die soon. Some people have palliative care for years.",
    },
  },
  {
    id: "sc-symptom-control",
    kicker: "Symptom control",
    question: "How can pain and other symptoms be controlled?",
    hook: "Painkillers are chosen step by step, there are ways round swallowing problems, and sickness and breathlessness can be eased too.",
    short: "Telling your team about pain, and how it affects you, is the first step. Your doctor or nurse will use the weakest painkiller that keeps you free from pain, and there are other ways to give medicine if you cannot swallow. Sickness and breathlessness can be eased too, and a palliative care team can help.",
    sections: [
      {
        heading: "Telling your team",
        paragraphs: [
          "It is important to tell your doctor or nurse if you have pain and how it affects you. If your pain is well managed, it means you can do more of the things you want to do.",
          "Your doctor or nurse will ask where the pain is, when it started and the effect it is having on you, such as whether it is stopping you sleeping. This is called a pain assessment, and keeping a pain diary can help.",
        ],
      },
      {
        heading: "Painkillers, step by step",
        paragraphs: [
          "Your doctor or nurse will use the weakest painkiller available that keeps you free from pain. In order of strength, there are non-opioid painkillers such as paracetamol, mild opioids such as codeine, and strong opioids such as morphine.",
          "If you take regular painkillers, you may still feel sudden pain, called breakthrough pain. It may be treated with a short-acting painkiller, and it is best to take it before the pain gets severe.",
          "If taking medicine by mouth is not possible, there are other ways, such as a patch on your skin. A small battery-operated pump called a syringe driver can also give medicine continuously under the skin.",
        ],
      },
      {
        heading: "Worries about strong painkillers",
        paragraphs: [
          "Some people worry that strong painkillers may be addictive, that using them too early will make them less effective later on, or that they mean end of life is near. Talk to your doctor, nurse or palliative care team, who can help with side effects and reassure you about any concerns.",
          "Opioid medicines can cause a dry mouth, feeling or being sick, constipation and drowsiness. Your doctor can prescribe laxative medicine, so tell your doctor or nurse if you have constipation.",
        ],
      },
      {
        heading: "Sickness and breathlessness",
        paragraphs: [
          "The best way to manage nausea and vomiting is by treating the cause, such as an infection or constipation. If you continue to feel sick while taking anti-sickness drugs, tell your doctor or nurse as soon as possible.",
          "Eating small amounts often, trying dry foods such as toast or crackers, and sipping cool, fizzy drinks may also help.",
          "For breathlessness, breathing exercises, relaxation techniques and a handheld fan may help. A physiotherapist can help you learn breathing techniques, and some hospices and hospitals have special breathlessness clinics.",
        ],
      },
      {
        heading: "Other kinds of help",
        paragraphs: [
          "Bone pain may be treated with radiotherapy, bisphosphonates or surgery, as well as painkillers. A palliative care nurse can advise on pain and symptom control.",
          "Sometimes it can help to spend some time in a hospice having your pain and other symptoms treated. There, doctors and nurses can often adjust your medicines more quickly than if you were at home, and once your pain is controlled, you can go home again.",
        ],
      },
    ],
    helps: [
      "Tell your doctor or nurse if you have pain and how it affects you.",
      "Keep a pain diary to share at your pain assessment.",
      "Take a short-acting painkiller for breakthrough pain before the pain gets severe.",
      "Talk to your doctor, nurse or palliative care team about any worries about strong painkillers.",
      "Tell your doctor or nurse if you continue to feel sick while taking anti-sickness drugs.",
      "Ask to see a physiotherapist to learn breathing techniques.",
    ],
    tryThisWeek: [
      "Start a simple pain diary.",
      "Share worries about painkillers.",
      "Ask about breathing techniques.",
    ],
    ask: "Is my pain as well controlled as it could be, and could a palliative care team help?",
    interactive: {
      kind: "flip-cards",
      title: "Ways symptoms can be eased",
      intro: "Turn a card to see when each is used and what it does.",
      cards: [
        { id: "non-opioid", front: "Non-opioid painkillers", when: "The weakest, such as paracetamol", back: "Your doctor or nurse will use the weakest painkiller available that keeps you free from pain." },
        { id: "mild-opioid", front: "Mild opioids", when: "Such as codeine", back: "Next in strength. Opioids can cause a dry mouth, feeling sick, constipation and drowsiness." },
        { id: "strong-opioid", front: "Strong opioids", when: "Such as morphine", back: "If you worry about them, talk to your doctor, nurse or palliative care team. They can help with side effects." },
        { id: "syringe-driver", front: "Syringe driver", when: "If you cannot take medicine by mouth", back: "A small battery-operated pump that gives medicine continuously under the skin." },
        { id: "bone", front: "Radiotherapy and bisphosphonates", when: "For bone pain", back: "Treatments used alongside painkillers to help with pain from secondary bone cancer." },
        { id: "fan", front: "A handheld fan", when: "For breathlessness", back: "One of the ways to manage breathlessness, with breathing exercises and relaxation techniques." },
      ],
    },
    sources: [MAC_PAIN, NHS_SYMPTOMS, MAC_NAUSEA, MAC_BREATH, MAC_BONE_SYM],
    quiz: {
      question: "Which painkiller will your doctor or nurse use?",
      options: [{ text: "The weakest one that keeps you free from pain", right: true }, { text: "Always the strongest one" }, { text: "None until the pain is severe" }],
      why: "Your doctor or nurse will use the weakest painkiller available that keeps you free from pain.",
    },
  },
  {
    id: "sc-treatments",
    kicker: "Treatment",
    question: "What is it like having treatment that carries on?",
    hook: "Treatment may come and go in cycles, with check-ups in between. Knowing the rhythm, and who to call, makes it easier to live around.",
    short: "When treatment carries on, a cancer doctor looks after you and you usually have regular check-ups. Chemotherapy is usually given in cycles with breaks to recover, and radiotherapy can be used to relieve symptoms. Let your care team know about side effects, and ask about clinical trials.",
    sections: [
      {
        heading: "Treatment that goes on",
        paragraphs: [
          "If you are having treatments such as chemotherapy, targeted therapy, hormonal therapy or radiotherapy, a cancer doctor will look after you. You will usually have regular check-ups with the hospital team, face to face or by a phone or video call.",
          "There may be times when you need a lot of help and support from doctors and nurses, such as when you are having chemotherapy or immunotherapy. At other times, you may need very little help from your healthcare team.",
        ],
      },
      {
        heading: "Chemotherapy",
        paragraphs: [
          "Chemotherapy may be used to shrink cancer or stop it spreading, or to relieve symptoms caused by cancer. You usually have it in cycles, with a break of a few days or weeks to let your body recover before the next treatment.",
          "Each time you have treatment, your care team may ask about side effects, do a blood test, or arrange an X-ray or scan to check how well treatment is working.",
          "How many cycles of palliative chemotherapy you have depends on the effect on your cancer and how you feel. If you already feel unwell or weak, side effects can be worse.",
        ],
      },
      {
        heading: "Radiotherapy",
        paragraphs: [
          "Radiotherapy may be used after cancer has started to spread. It can be used to relieve symptoms if a cure is not possible, which is called palliative radiotherapy.",
          "Side effects can include sore skin, feeling tired, feeling sick and losing your appetite. Many of these side effects can be treated or prevented, and most will go away after treatment stops.",
        ],
      },
      {
        heading: "Clinical trials",
        paragraphs: [
          "You may be offered some treatments as part of a clinical trial. A trial is the best way to test if a new treatment is more effective than the current treatment.",
          "Trials can also research ways to manage side effects or symptoms, and the quality of life for people living with cancer. Even if they have not offered information, you can still ask your cancer team about clinical trials.",
        ],
      },
      {
        heading: "Side effects to report",
        paragraphs: [
          "Let your care team know if you get side effects. They may be able to give you treatments to ease them and advice about things you can do.",
          "Call your care team now if you have a high temperature or other signs of an infection, or throbbing pain, swelling and warmth in a leg or arm. Call NHS 111 if you're not sure how to contact your care team.",
        ],
      },
    ],
    helps: [
      "Ask your care team about the side effects you might get.",
      "Let your care team know if you get side effects.",
      "Contact the hospital straight away on the 24-hour number you have been given if you suddenly feel unwell.",
      "Talk to your healthcare professionals about how many cycles to expect.",
      "Ask your cancer team about clinical trials.",
    ],
    tryThisWeek: [
      "Ask what side effects to expect.",
      "Save your 24-hour number.",
      "Ask about clinical trials.",
    ],
    ask: "How will we know if this treatment is helping, and what are my options if it stops helping?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments you might have",
      intro: "Turn a card to see what each one is for.",
      cards: [
        { id: "chemo", front: "Chemotherapy", when: "Usually in cycles", back: "Uses medicine to kill cancer cells. It can shrink cancer, stop it spreading or relieve symptoms." },
        { id: "radio", front: "Radiotherapy", when: "Often to relieve symptoms", back: "Uses radiation to kill cancer cells. Palliative radiotherapy relieves symptoms if a cure is not possible." },
        { id: "palliative", front: "Palliative treatment", when: "To manage symptoms", back: "Aims to manage symptoms caused by the cancer and to improve your quality of life." },
        { id: "trial", front: "Clinical trial", when: "If one suits you", back: "Tests whether a new treatment is more effective than the current one, or new ways to manage symptoms." },
        { id: "check-ups", front: "Check-ups", when: "Regularly, with the hospital", back: "Appointments with the hospital team, face to face or by a phone or video call." },
      ],
    },
    sources: [MAC_CARE, NHS_CHEMO, MC_CHEMO, NHS_RADIO, MAC_ADV, MAC_TRIALS, MAC_CHEMO_SE, MAC_PALL],
    quiz: {
      question: "How is chemotherapy usually given?",
      options: [{ text: "In cycles, with breaks to recover", right: true }, { text: "Every day without a break" }, { text: "Only once" }],
      why: "You usually have it in cycles, with a break of a few days or weeks to let your body recover before the next treatment.",
    },
  },
  {
    id: "sc-fatigue",
    kicker: "Tiredness",
    question: "Why am I so tired, and what helps?",
    hook: "Fatigue is one of the most common problems with cancer. It cannot always be fixed, but it can often be eased and planned around.",
    short: "Fatigue is a feeling of tiredness or exhaustion that cancer and its treatments can cause, and it is very common. Anaemia, pain, poor sleep and low mood can add to it, so tell your team. Planning your day, pacing yourself and gentle activity, checked with your team first, can help.",
    sections: [
      {
        heading: "More than ordinary tiredness",
        paragraphs: [
          "Fatigue is a feeling of tiredness or exhaustion, and cancer and cancer treatments can cause it. People with cancer may get tired more quickly after less activity, and feel exhausted even if they are getting enough rest and sleep.",
          "Fatigue affects everyone differently. It can vary throughout the day, and each day may be different.",
        ],
      },
      {
        heading: "What can add to it",
        paragraphs: [
          "Some cancers reduce the number of red blood cells, which is called anaemia. It can make you feel very tired, and you may also feel breathless, dizzy and light-headed. A blood test can check this, and the main treatment is a blood transfusion.",
          "Pain, eating problems, trouble sleeping, other health conditions and some medicines can all cause fatigue. Anxiety, depression, stress and tension can make it worse.",
        ],
      },
      {
        heading: "Telling your team",
        paragraphs: [
          "There are no medical tests to measure fatigue. Your specialist nurse may ask you to give it a score from 0 to 10, where 0 is no fatigue and 10 is the worst possible fatigue.",
          "A daily diary can help you record your energy levels at different times of the day, find any patterns and plan important activities for when you have more energy. It is a good idea to share it with your healthcare team.",
        ],
      },
      {
        heading: "Planning your energy",
        paragraphs: [
          "Try planning your day so that you have energy to do the things that are most important to you. Pace yourself, take short naps and rests, but try to balance them with some activity.",
          "On days when you feel less well, it is okay to be less active and to rest more. Spread tasks out over the week, sit down to do some tasks if you can, and ask other people to do hard work such as hoovering or gardening.",
        ],
      },
      {
        heading: "Moving, gently",
        paragraphs: [
          "Keeping active can improve symptoms such as tiredness, poor appetite, constipation and weak muscles. Physical activity is safe if you have advanced cancer, but you should start slowly and gradually build up the amount that you do.",
          "Ask your GP, cancer doctor or nurse for advice before you start any type of exercise. If the cancer is in the bones, you should usually avoid high-impact activities, such as running, football or tennis.",
          "Physiotherapists and occupational therapists can help you manage fatigue. Your cancer doctor, specialist nurse or GP can refer you to an occupational therapist.",
        ],
      },
    ],
    helps: [
      "Tell your healthcare team how you feel and whether fatigue is affecting your day-to-day activities.",
      "Keep a daily diary of your energy levels, and share it with your healthcare team.",
      "Plan your day so you have energy for the things that are most important to you.",
      "Ask other people to do hard work, such as hoovering, gardening or taking the rubbish out.",
      "Ask your GP, cancer doctor or nurse for advice before you start any type of exercise.",
      "Ask to be referred to an occupational therapist.",
    ],
    tryThisWeek: [
      "Score your tiredness from 0 to 10.",
      "Keep a daily energy diary.",
      "Hand one heavy job to someone.",
    ],
    ask: "Could anything, such as anaemia or one of my medicines, be adding to my tiredness?",
    interactive: {
      kind: "scenarios",
      title: "Spending your energy",
      scenarios: [
        {
          id: "housework",
          situation: "You wake with some energy and want to do all the housework.",
          options: [{ text: "Do a little, and spread the rest over the week", best: true }, { text: "Do it all while you can" }],
          why: "Spread tasks out over the week. Try to do a little bit each day rather than lots at one time.",
        },
        {
          id: "bad-day",
          situation: "Today you feel less well than usual.",
          options: [{ text: "Let yourself rest more today", best: true }, { text: "Push on to keep to your plan" }],
          why: "On days when you feel less well, it is okay to be less active and to rest more.",
        },
        {
          id: "exercise",
          situation: "You want to get more active, and the cancer has spread to your bones.",
          options: [{ text: "Ask your team first, and avoid high-impact activity", best: true }, { text: "Start running to build strength" }],
          why: "Ask your GP, cancer doctor or nurse for advice before you start any type of exercise. If the cancer is in the bones, you should usually avoid high-impact activities, such as running, football or tennis.",
        },
        {
          id: "dizzy",
          situation: "You feel very tired, breathless and dizzy.",
          options: [{ text: "Tell your doctor or nurse", best: true }, { text: "Put it down to a bad week" }],
          why: "Anaemia can make you feel very tired, and you may also feel breathless, dizzy and light-headed. A blood test can check this.",
        },
      ],
    },
    sources: [MAC_TIRED, MAC_DAY, MAC_CARE, MC_TEAM, MAC_CHEMO_SE],
    quiz: {
      question: "How might your specialist nurse ask you to describe your fatigue?",
      options: [{ text: "As a score from 0 to 10", right: true }, { text: "With a blood test" }, { text: "By how many hours you sleep" }],
      why: "Your specialist nurse may ask you to give it a score from 0 to 10, where 0 is no fatigue and 10 is the worst possible fatigue.",
    },
  },
  {
    id: "sc-emergencies",
    kicker: "Urgent help",
    question: "When should I call for help straight away?",
    hook: "A few symptoms need help the same day, day or night. Knowing them, and your 24-hour number, means you never have to wonder whether to wait.",
    short: "Keep your hospital's 24-hour number with you and know who to call at evenings and weekends. Call straight away for a high or very low temperature, or if you suddenly feel unwell, and call 999 or go to A&E for signs of sepsis. New back pain, weak legs or bladder or bowel problems, sudden breathlessness and signs of high calcium also need help without waiting.",
    sections: [
      {
        heading: "Know your numbers",
        paragraphs: [
          "Make sure you have the contact details of the hospital team where you have your cancer care, and know who to phone at evenings and weekends. Ask your cancer doctor or specialist nurse when you should call for help or advice.",
          "If you are having chemotherapy, contact the hospital straight away on the 24-hour contact number you have been given if you suddenly feel unwell, even with a normal temperature.",
        ],
      },
      {
        heading: "Infection and sepsis",
        paragraphs: [
          "Call your 24 hour advice line straight away if you feel generally unwell, or have a temperature of 37 and a half degrees Celsius or above, or below 36 degrees Celsius. Other signs of infection include feeling cold and shivery, a sore throat, a cough, pain when you wee, and pain, swelling, heat or redness in your skin or around a wound or line.",
          "It is just as important to report a very low temperature as a high one. You can have an infection without having a high temperature, and drugs such as paracetamol can hide an infection.",
          "Call 999 or go to A&E immediately if you have slurred speech or confusion, extreme shivering or muscle pain, pass no urine in a day, have severe breathlessness, have mottled or discoloured skin, or feel like you're going to die.",
        ],
      },
      {
        heading: "Spinal cord compression",
        paragraphs: [
          "Cancer that has spread to the bones of the spine can press on the spinal cord. Warning signs include new back or neck pain, which may feel like a band around your chest or tummy, difficulty walking or weak legs, numbness or pins and needles, and problems controlling your bladder or bowels.",
          "If you develop any of these, get medical advice immediately, even if it is the weekend or a holiday, by contacting the hospital team where you usually go for cancer treatment. If you are unable to get in touch with anyone, go to the nearest A&E straight away. Do not wait for further symptoms to develop.",
        ],
      },
      {
        heading: "Breathlessness and blood clots",
        paragraphs: [
          "A blood clot in the lung can cause sudden breathlessness, or coughing when you breathe. Contact your cancer team or hospital straight away on the 24 hour number if you have these symptoms, and always call 999 if you have chest pain or difficulty breathing.",
          "Throbbing pain, redness or swelling in a leg or arm can be a sign of a blood clot. Contact the hospital straight away on the 24-hour contact number, and if you cannot get through, call the NHS urgent advice number on 111.",
        ],
      },
      {
        heading: "High calcium, and bleeding",
        paragraphs: [
          "Secondary cancer cells in the bone can raise the level of calcium in the blood. This can make you feel sick, thirsty, drowsy, confused and unwell, constipated, or pass urine more often. If you develop any of these symptoms, let your doctor or specialist nurse know straight away.",
          "Tell your doctor or nurse if you have any unexplained bruising or bleeding, such as nosebleeds, bleeding gums, or blood in your urine or poo.",
        ],
      },
    ],
    helps: [
      "Keep your hospital's 24-hour number with you, and know who to phone at evenings and weekends.",
      "Buy a thermometer, and make sure your family and friends know how to use it.",
      "Call your advice line straight away for a high or very low temperature, or if you suddenly feel unwell.",
      "Call 999 or go to A&E immediately if you have signs of sepsis.",
      "Get medical advice immediately for signs of spinal cord compression, and go to A&E if you cannot reach anyone.",
      "Call NHS 111 if you're not sure how to contact your care team.",
    ],
    tryThisWeek: [
      "Save your 24-hour number.",
      "Get a thermometer.",
      "Learn the signs of sepsis.",
    ],
    ask: "Who do I call, day or night, if I become unwell, and which symptoms should make me call?",
    interactive: {
      kind: "signs",
      title: "Signs that need help now",
      intro: "Tick any you have. Do not wait: call your 24-hour number straight away.",
      signs: [
        "Temperature 37 and a half °C or higher",
        "Temperature below 36°C",
        "Suddenly feeling unwell",
        "Shivering, sore throat or cough",
        "Pain or redness around a wound or line",
        "New back or neck pain",
        "Weak or unsteady legs, or numbness",
        "New bladder or bowel problems",
        "Sudden breathlessness",
        "Sick, thirsty, drowsy or confused",
      ],
      after: "Call your 24-hour number straight away. Call 999 or go to A&E for confusion, slurred speech, severe breathlessness, chest pain or mottled skin.",
      copyHeading: "Symptoms I need to report urgently",
    },
    sources: [CRUK_SEPSIS, MAC_CHEMO_SE, NHS_SEPSIS, MAC_MSCC, MAC_BREATH, CRUK_CALCIUM, MAC_BONE_SYM, NHS_CHEMO],
    quiz: {
      question: "Your temperature is below 36°C during treatment. What should you do?",
      options: [{ text: "Call your advice line straight away", right: true }, { text: "Wait to see if it goes up" }, { text: "Take paracetamol and rest" }],
      why: "It is just as important to report a very low temperature as a high one.",
    },
  },
  {
    id: "sc-living-well",
    kicker: "Living well",
    question: "How do I live well from day to day?",
    hook: "Living with uncertainty is hard. Small goals, a little help and time for what you enjoy can make the days feel more your own.",
    short: "There are many unknowns with advanced cancer, but thinking about what you can control now can help. Small, achievable goals, eating well, keeping active and accepting help can make each day easier. Difficult feelings usually ease with time and support, and help is there if you need it, including right now.",
    sections: [
      {
        heading: "One step at a time",
        paragraphs: [
          "There are a lot of unknowns when you are living with advanced cancer, and it is difficult to make plans when you do not know what is going to happen. Thinking about what you can control right now can help, such as choices about treatment, or how you use your time.",
          "Take one day at a time, or one week at a time. Decide on some small, achievable goals, such as putting family photos into an album, or visiting a friend.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "Eating well and keeping active are positive choices that can help you feel better and more in control. If your appetite is poor, ask your GP, cancer doctor or nurse if they can refer you to a dietitian.",
          "Keep an up-to-date list of your medicines at home, and take it with you to appointments. Tell family, friends or carers where the list is, so they can tell health professionals if you become unwell.",
          "Try to take some time to do things you enjoy. Some people find that complementary therapies or mindfulness help them cope with stress.",
        ],
      },
      {
        heading: "Help from others",
        paragraphs: [
          "Make a list of things you need or would like people to help with, such as housework, gardening, looking after a pet or going to appointments with you. The people close to you may be happy to have specific things they can do.",
          "If you live alone, it is ok to ask for and accept help. Marie Curie and Age UK have free helper services in parts of the UK, where someone can visit you for a chat, help you get to an appointment or run an errand.",
        ],
      },
      {
        heading: "Your feelings",
        paragraphs: [
          "There is no right or wrong way to feel. Difficult feelings usually become easier to manage with time and support from family, friends and healthcare professionals.",
          "Your loved ones may tell you to be positive. No one feels positive all the time, and it can be very difficult when the future is uncertain.",
          "If you are finding it very difficult to cope, ask your GP or cancer doctor to refer you to a counsellor or psychologist. Medicine can help too, and counselling or cognitive behavioural therapy can make a difference to how you're coping.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "For urgent help with your mental health, call 111 and select the mental health option, or ask for an urgent GP appointment. You can call Samaritans free on 116 123, any time, day or night.",
          "Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
          "The Macmillan Support Line is free on 0808 808 00 00. Macmillan's Online Community also has a group for people living with incurable cancer, where you can openly discuss your feelings.",
        ],
      },
    ],
    helps: [
      "Decide on some small, achievable goals for the week.",
      "Keep an up-to-date list of your medicines, and tell people where it is.",
      "Make a list of things people could help you with.",
      "Take some time to do things you enjoy.",
      "Ask your GP or cancer doctor about a counsellor or psychologist if you are finding it very difficult to cope.",
      "Call Samaritans free on 116 123, any time, day or night.",
    ],
    tryThisWeek: [
      "Set one small goal.",
      "Update your list of medicines.",
      "Write a list of help you'd like.",
    ],
    ask: "Could I be referred to a counsellor or psychologist to help me cope?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        {
          id: "positive",
          situation: "A friend keeps telling you to stay positive.",
          options: [{ text: "Tell them it is hard to feel positive sometimes", best: true }, { text: "Pretend you feel fine" }],
          why: "Try telling them that you know they are trying to help, but it is hard to feel positive sometimes.",
        },
        {
          id: "overwhelmed",
          situation: "Everything feels too big to face.",
          options: [{ text: "Choose one small goal for this week", best: true }, { text: "Try to sort everything at once" }],
          why: "Take one day at a time, or one week at a time. Decide on some small, achievable goals, so that you gain confidence.",
        },
        {
          id: "offer",
          situation: "Someone offers to help but isn't sure what to do.",
          options: [{ text: "Show them your list of jobs", best: true }, { text: "Say you can manage" }],
          why: "If people offer to help but are not sure what to do, they can choose to do something from your list.",
        },
        {
          id: "night",
          situation: "You can't sleep, and the worries feel louder at night.",
          options: [{ text: "Ring someone, such as a friend or Samaritans", best: true }, { text: "Lie in the dark and try to sleep" }],
          why: "Make sure there's someone you can ring (a friend, relative or Samaritans), but also recognise that you do not have to lie in the dark and try to sleep.",
        },
      ],
    },
    sources: [MAC_DAY, MAC_FEEL, NHS_COPING, MAC_ADV, NHS_URGENT_MH, SAMARITANS, MAC_UNCERT],
    quiz: {
      question: "What can help when everything feels overwhelming?",
      options: [{ text: "Small, achievable goals, one day at a time", right: true }, { text: "Tackling everything at once" }, { text: "Keeping your feelings to yourself" }],
      why: "Take one day at a time, or one week at a time. Decide on some small, achievable goals, such as putting family photos into an album, or visiting a friend.",
    },
  },
  {
    id: "sc-talking",
    kicker: "Family",
    question: "How do I talk to my family and children about it?",
    hook: "There is no perfect way to start. Honest, simple words, a quiet moment and support for the whole family all help.",
    short: "Talking can help you and the people close to you cope, and it can bring you closer. With children, it is best to be honest, use simple words and reassure them that nothing they did caused the cancer. Many hospices offer support for families, including children.",
    sections: [
      {
        heading: "Why talking helps",
        paragraphs: [
          "Your family and friends may be unsure if you want to talk about your illness, and may wait for you to talk about it. Talking can help you and them cope with your situation, and you may find it brings you closer together.",
          "Not talking can create worries or distance between you and the people who are important to you. You do not have to talk about everything at once.",
        ],
      },
      {
        heading: "Starting the conversation",
        paragraphs: [
          "Choose a time and a place when you will not be disturbed. Starting with a question may help, because it gives the other person a chance to say how they feel.",
          "Listen to what the other person says. If they change the subject, you can tell them you do not have to talk about it now, but you hope you can talk about it another time.",
          "It's normal for people to get upset or feel emotional. Getting upset or crying can be a release, and may help you feel able to discuss things more openly.",
        ],
      },
      {
        heading: "Your partner",
        paragraphs: [
          "Sometimes partners try to protect each other, and avoid talking about the illness so as not to upset the other person. But talking about what is happening and how you both feel can help you both feel less alone.",
          "It may help to keep to a normal routine as much as possible. Talking to someone outside of your situation, such as a counsellor, may also help.",
        ],
      },
      {
        heading: "Children and teenagers",
        paragraphs: [
          "It is natural to want to protect children from difficult news. But children often know when something serious is affecting the people they are close to, and explaining what is happening may make things less unsettling for them.",
          "It is best to be honest with children, and try not to make things sound less serious than they are. Use simple, clear language and short sentences. You may not be able to answer all their questions, and you can tell them you will try to find the answers.",
          "Children need reassurance that nothing they did or thought caused the cancer, that they cannot catch it, and that there will always be someone to take care of them.",
        ],
      },
      {
        heading: "Support for the whole family",
        paragraphs: [
          "Many hospices have family or carer support services for families of people with advanced cancer. Your community nurse, palliative care nurse or GP may be able to refer your family, including children.",
          "It is a good idea to tell nursery staff, teachers and the school nurse, so they can be aware of your child's needs. If changes in a child's behaviour carry on, you can ask for help from your GP, teachers, the school nurse or psychological services at your hospital.",
          "You can tell people as much or as little as you want to about your health. There may also be times when you want to be on your own, and this is natural.",
        ],
      },
    ],
    helps: [
      "Choose a time and a place when you will not be disturbed.",
      "Start with a question, to give the other person a chance to say how they feel.",
      "Be honest with children, using simple, clear language and short sentences.",
      "Reassure children that nothing they did caused the cancer and they cannot catch it.",
      "Tell nursery staff, teachers and the school nurse, so they can support your child.",
      "Ask your palliative care nurse or GP about hospice support for your family.",
    ],
    tryThisWeek: [
      "Pick a quiet time to talk.",
      "Start with a question.",
      "Let your child's school know.",
    ],
    ask: "Can my family, including my children, be referred for support?",
    interactive: {
      kind: "scenarios",
      title: "Moments with family",
      scenarios: [
        {
          id: "subject",
          situation: "Your partner keeps changing the subject.",
          options: [{ text: "Say you hope to talk another time", best: true }, { text: "Insist on talking now" }],
          why: "If they change the subject or do not want to talk about it, try saying something like: 'OK, we do not have to talk about it now, but I hope we can talk about it another time.'",
        },
        {
          id: "question",
          situation: "Your child asks a question you cannot answer.",
          options: [{ text: "Say you will try to find out", best: true }, { text: "Make up an answer" }],
          why: "You may not be able to answer all their questions. Tell them you will try to find the answers and will tell them when you know.",
        },
        {
          id: "fault",
          situation: "Your young child wonders if they made you ill.",
          options: [{ text: "Reassure them it is not their fault", best: true }, { text: "Change the subject" }],
          why: "Children need reassurance that nothing they did or thought caused the cancer.",
        },
        {
          id: "oldest",
          situation: "You are thinking of telling only your oldest child.",
          options: [{ text: "Tell them together if you can", best: true }, { text: "Tell the oldest and keep it from the rest" }],
          why: "If there is more than 1 child, it might be best to tell them together, if you can. Try to avoid only telling older children, as this can be difficult for them to cope with.",
        },
      ],
    },
    sources: [MAC_REL, MAC_CHILDREN, NHS_TALK],
    quiz: {
      question: "What is usually best when talking to children about cancer?",
      options: [{ text: "Being honest, in simple, clear words", right: true }, { text: "Keeping it from them" }, { text: "Making it sound less serious" }],
      why: "It is best to be honest with children, and try not to make things sound less serious than they are.",
    },
  },
  {
    id: "sc-work-money",
    kicker: "Money",
    question: "What help is there with work, money and benefits?",
    hook: "The law protects you at work, there are benefits you may be able to claim, and there are free advisers who can help you through it.",
    short: "If you have cancer, the law treats it as a disability, so your employer should consider reasonable adjustments. Benefits such as Personal Independence Payment are not means-tested, and some can be claimed more quickly under special rules. A social worker or Macmillan's money advisers can help with claims.",
    sections: [
      {
        heading: "Your rights at work",
        paragraphs: [
          "If you have cancer, the law considers this a disability. Under the Equality Act 2010, you meet the definition from the day you're diagnosed, and in Northern Ireland the Disability Discrimination Act 1995 protects you.",
          "This means you cannot be treated less favourably because you have cancer, or for reasons connected to the cancer.",
        ],
      },
      {
        heading: "Changes that help you keep working",
        paragraphs: [
          "If your employer is aware of your disability, they must try to make reasonable adjustments. These could include different working hours, time off to go to medical appointments, extra breaks to help you cope with tiredness, or a quiet place to rest.",
          "You do not have to tell your employer you have cancer. But they do not have to make a reasonable adjustment unless they know, or should reasonably know, that you have cancer.",
          "Access to Work could give you a grant to help pay for things like specialist equipment, or the cost of travelling to work if you cannot use public transport. It will not affect any other benefits you get, and you will not have to pay it back.",
        ],
      },
      {
        heading: "If you decide to stop working",
        paragraphs: [
          "Some people decide to stop working to focus on treatment and time with family or friends. You may find it gives you more time to do things that are important to you.",
          "Before you decide, think about how it will affect your finances. When you give up work, you lose rights such as occupational sick pay, death in service benefit and pension rights. If you are thinking about early retirement, it is a good idea to get advice from an independent pension adviser.",
        ],
      },
      {
        heading: "Benefits",
        paragraphs: [
          "Disability benefits include Personal Independence Payment, if you are aged 16 to State Pension age, and Attendance Allowance, if you are at or above State Pension age. These benefits are not means-tested, and you may also be able to apply for Employment and Support Allowance or Universal Credit.",
          "If you are nearing the end of life, you might be able to get certain benefits more quickly and at a higher rate, under what are called special rules. A doctor or nurse fills in a form to support the claim, and you can ask yours whether they will support one.",
          "In England, prescriptions are free for anything related to cancer or its effects. You need to collect an FP92A form from your GP surgery and apply for a medical exemption certificate.",
        ],
      },
      {
        heading: "Help with money worries",
        paragraphs: [
          "Ask a GP, hospital doctor or nurse to refer you to a hospital or community social worker. They can assess your financial situation, give you advice on benefits and tell you about any special funds you might qualify for.",
          "Macmillan's money advisers can give you advice about claiming benefits and help you fill in claim forms. You can talk to one free on 0808 808 00 00.",
        ],
      },
    ],
    helps: [
      "Talk to your employer about reasonable adjustments, such as different hours or extra breaks.",
      "Check whether Access to Work could help with costs such as travel.",
      "Think about how stopping work would affect your finances before you decide.",
      "Ask your doctor or nurse whether they will support a claim under the special rules.",
      "In England, collect an FP92A form from your GP surgery for free prescriptions.",
      "Call Macmillan's money advisers free on 0808 808 00 00.",
    ],
    tryThisWeek: [
      "Ask about reasonable adjustments.",
      "Ask about free prescriptions.",
      "Call a Macmillan money adviser.",
    ],
    ask: "Could you refer me to a social worker for advice on benefits and money?",
    interactive: {
      kind: "scenarios",
      title: "Work and money moments",
      scenarios: [
        {
          id: "afternoons",
          situation: "Your energy runs out every afternoon at work.",
          options: [{ text: "Ask about different hours or extra breaks", best: true }, { text: "Say nothing and push on" }],
          why: "Reasonable adjustments could include different working hours, time off to go to medical appointments and extra breaks.",
        },
        {
          id: "resign",
          situation: "You are thinking about handing in your notice.",
          options: [{ text: "Check how it would affect your finances first", best: true }, { text: "Resign today and sort it out later" }],
          why: "Before you decide to stop working, you may need to think about how it will affect your finances. When you give up work, you lose any employment rights you might have had.",
        },
        {
          id: "travel",
          situation: "Public transport to work has become too hard.",
          options: [{ text: "Ask Access to Work about travel costs", best: true }, { text: "Give up the job" }],
          why: "Access to Work could give you a grant to help pay for costs of travelling to work, if you cannot use public transport.",
        },
        {
          id: "prescriptions",
          situation: "You live in England and prescription charges are adding up.",
          options: [{ text: "Apply for a medical exemption certificate", best: true }, { text: "Keep paying for each one" }],
          why: "In England, prescriptions are free for anything related to cancer or its effects. You need to collect an FP92A form from your GP surgery and apply for a medical exemption certificate.",
        },
      ],
    },
    sources: [MAC_RIGHTS, GOV_DISABILITY, MAC_ADJUST, GOV_ATW, MAC_STOP_WORK, MAC_FIN_EOL, GOV_SPECIAL, NHS_MONEY],
    quiz: {
      question: "When does someone with cancer meet the Equality Act's definition of disability?",
      options: [{ text: "From the day they are diagnosed", right: true }, { text: "Only after a year off work" }, { text: "Only while having treatment" }],
      why: "Under the Equality Act 2010, you meet the definition from the day you're diagnosed, and in Northern Ireland the Disability Discrimination Act 1995 protects you.",
    },
  },
  {
    id: "sc-planning",
    kicker: "Planning ahead",
    question: "How do I plan ahead, at my own pace?",
    hook: "Planning ahead is about making sure people know what matters to you. You can do it in small steps, when you feel ready, and change your mind.",
    short: "Planning ahead means people will know your wishes, even if you become very unwell and cannot tell them. You can do it in simple steps, in your own time, starting with what matters most. Your GP, specialist nurse or social worker can help, and you can change your plan at any time.",
    sections: [
      {
        heading: "At your own pace",
        paragraphs: [
          "Knowing that your illness may not be curable might help you think about what is important to you and how you want to live your life. If you feel ready, you may want to write down your wishes.",
          "You can plan ahead in simple steps, and you do not need to follow them in order. You do not have to do them all, and it may help to start with the ones that are most important to you.",
          "Planning ahead can cause many different emotions, and you may feel sad, anxious and scared. These are normal reactions, and talking to family, friends or people close to you about how you feel can help.",
        ],
      },
      {
        heading: "Why it can help",
        paragraphs: [
          "Planning ahead means that people will know your wishes, even if you become very unwell and cannot make a decision or communicate. It can also help to make things easier for your partner or family.",
          "You can change your mind at any time, but remember to record your changes. If you make changes to your plan, tell all the people involved and give them an updated copy.",
        ],
      },
      {
        heading: "Writing down your wishes",
        paragraphs: [
          "A written record of your wishes for your care is often called an advance care plan. It might include where you would most like to be cared for, who you would like to be involved in your care, any spiritual, religious or cultural practices, and who should look after anyone you care for or any pets.",
          "An advance statement sets down your preferences, wishes, beliefs and values about your future care. It is not legally binding, but anyone who's making decisions about your care must take it into account.",
        ],
      },
      {
        heading: "Legal choices",
        paragraphs: [
          "In England and Wales, an advance decision to refuse treatment lets you write down any treatments you would not want. It is legally binding if it meets the requirements set out in the Mental Capacity Act 2005.",
          "A lasting power of attorney lets you choose someone you trust to make decisions for you if you become unable to. There is one for health and welfare decisions, and one for property and financial affairs.",
          "It is a good idea to speak to a solicitor if you want to make a will, a lasting power of attorney or an advance decision to refuse treatment.",
        ],
      },
      {
        heading: "Who can help, and keeping it safe",
        paragraphs: [
          "Your GP, hospital doctors, specialist nurse, district nurse or social worker can help you start. You could tell them you have been thinking about making plans for your future care, and ask them to help you find out your options.",
          "Keep a copy of your plan in a safe place at home and tell people where it is. Some people put a note somewhere obvious, such as on the fridge, to tell an emergency doctor or paramedic where to find their documents.",
          "If you would like to talk, the Macmillan Support Line is free on 0808 808 00 00, and the Marie Curie Support Line is free on 0800 090 2309.",
        ],
      },
    ],
    helps: [
      "Start with the parts of planning that are most important to you.",
      "Talk to close family members or friends about your wishes.",
      "Ask your GP, specialist nurse or district nurse to help you find out your options.",
      "Write your wishes down in an advance care plan or advance statement.",
      "Speak to a solicitor about a will or a lasting power of attorney.",
      "Tell people where you keep your documents.",
    ],
    tryThisWeek: [
      "Note what matters most to you.",
      "Talk to someone close.",
      "Tell people where documents are.",
    ],
    ask: "Can you help me write down my wishes for my future care?",
    interactive: {
      kind: "flip-cards",
      title: "Ways to record your wishes",
      intro: "Turn a card to see what each one is and when it is used.",
      cards: [
        { id: "acp", front: "Advance care plan", when: "Your wishes for your care", back: "A written record of what matters to you, such as where you would most like to be cared for." },
        { id: "statement", front: "Advance statement", when: "Your preferences and values", back: "Not legally binding, but anyone making decisions about your care must take it into account." },
        { id: "adrt", front: "Advance decision to refuse treatment", when: "England and Wales", back: "Treatments you would not want. Legally binding if it meets the Mental Capacity Act 2005." },
        { id: "lpa", front: "Lasting power of attorney", when: "If you cannot decide yourself", back: "Lets someone you trust make decisions for you, about health and welfare or money and property." },
        { id: "respect", front: "ReSPECT", when: "For emergencies", back: "Records what you would want to happen in emergency situations, completed with your team." },
        { id: "will", front: "A will", when: "Best made while you feel well", back: "Gives instructions about who you want to give your money and belongings to." },
      ],
    },
    sources: [MAC_ADV, MAC_ACP, MAC_PLAN, NHS_WHY_PLAN, MAC_HELP_PLAN, NHS_ADV_STMT, NHS_LPA, MC_LINE],
    quiz: {
      question: "Is an advance statement legally binding?",
      options: [{ text: "No, but it must be taken into account", right: true }, { text: "Yes, always" }, { text: "Only if a solicitor writes it" }],
      why: "It is not legally binding, but anyone who's making decisions about your care must take it into account.",
    },
  },
];
