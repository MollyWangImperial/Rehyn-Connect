import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Secondary bone cancer page's pieces
// (content/library-conditions/cancer-more-2.ts, `boneMetastases`). Every sentence was written from wording
// checked on 22 October 2026 on the pages listed under each answer's `sources`; nothing is added that those
// pages do not say. Most of it comes from Macmillan Cancer Support, Cancer Research UK, Breast Cancer Now,
// Prostate Cancer UK and Marie Curie, with the NHS pages on care needs assessments and urgent mental health
// help, and Samaritans. The answers are written to be calm, honest and kind. They give no figures about time
// left and nothing that reads as a prediction, and each one says where to get support. The urgent help answer
// gives the spinal cord compression and high calcium guidance as the sources word it (contact the hospital
// team immediately, even at weekends; go to A&E if no one can be reached; do not wait; tell the doctor or
// specialist nurse straight away about signs of high calcium), and never suggests waiting. The mood answer
// follows safe-messaging guidance and gives the crisis routes exactly as the NHS and Samaritans state them.
// General information only; it never replaces what a person's own cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/${path}` });
const bcn = (label: string, path: string): LearnSource => ({ label: `Breast Cancer Now: ${label}`, url: `https://breastcancernow.org/about-breast-cancer/secondary-breast-cancer/${path}` });
const pcuk = (label: string, path: string): LearnSource => ({ label: `Prostate Cancer UK: ${label}`, url: `https://prostatecanceruk.org/prostate-information-and-support/${path}` });
const mc = (label: string, path: string): LearnSource => ({ label: `Marie Curie: ${label}`, url: `https://www.mariecurie.org.uk/${path}` });

const MAC_SBC = mac("Secondary bone cancer", "bone-cancer-secondary");
const MAC_MANAGE = mac("Managing symptoms of secondary bone cancer", "bone-cancer-secondary/managing-symptoms-of-secondary-bone-cancer");
const MAC_MSCC = mac("Metastatic spinal cord compression (MSCC)", "impacts-of-cancer/metastatic-spinal-cord-compression");
const MAC_BISPH = mac("Bisphosphonates", "treatments-and-drugs/bisphosphonates");
const MAC_DENO = mac("Denosumab", "treatments-and-drugs/denosumab");
const MAC_RT = mac("Radiotherapy for secondary bone cancer", "treatments-and-drugs/radiotherapy-for-secondary-bone-cancer");
const MAC_PAIN = mac("Pain", "impacts-of-cancer/pain");
const MAC_PAIN_FAQ = mac("Common questions about painkillers", "impacts-of-cancer/pain/painkillers-frequently-asked-questions");
const MAC_MOBILITY = mac("Walking (mobility) problems", "impacts-of-cancer/mobility");
const MAC_EXSAFE = mac("Exercising safely when you have cancer", "treatment/preparing-for-treatment/physical-activity-and-cancer/exercising-safely");
const MAC_EQUIP = mac("Equipment and home adaptations", "supporting-someone/practical-support-for-carers/equipment-and-home-adaptations");
const MAC_CARE_ADV = mac("Care and support if you have advanced cancer", "advanced-cancer/care-and-support-if-you-have-advanced-cancer");
const MAC_FEEL_ADV = mac("Coping with your feelings about advanced cancer", "advanced-cancer/coping-with-your-feelings-about-advanced-cancer");
const MAC_DEPRESSION = mac("Depression and cancer", "impacts-of-cancer/depression");
const MAC_TALKING = mac("Talking, counselling and support groups", "treatment/coping-with-treatment/talking-therapies");
const MAC_WAITING = mac("Cancer tests and waiting for results", "diagnosis/cancer-tests-and-waiting-for-results");
const MAC_SUPPORT_LINE = mac("Macmillan Support Line", "get-help/macmillan-support-line");

const CRUK_SBC = cruk("Secondary bone cancer", "secondary-cancer/secondary-bone-cancer");
const CRUK_SBC_TREAT = cruk("Treatment for secondary bone cancer", "secondary-cancer/secondary-bone-cancer/treatment");
const CRUK_CALCIUM = cruk("High calcium levels (hypercalcaemia)", "coping/physically/blood-calcium/high-calcium-people-cancer");
const CRUK_SCC = cruk("Spinal cord compression and cancer", "coping/physically/spinal-cord-compression");
const CRUK_BISPH = cruk("Bisphosphonates and cancer", "treatment/bisphosphonates");
const CRUK_ONJ = cruk("Jaw problems (osteonecrosis) and cancer treatment", "treatment/bisphosphonates/jaw-problems-osteonecrosis");
const CRUK_BONESCAN = cruk("Bone scan", "tests-and-scans/bone-scan");

const BCN_BONE = bcn("Secondary (metastatic) breast cancer in the bone", "secondary-breast-cancer-treatment/secondary-metastatic-breast-cancer-in-the-bone");
const BCN_TESTS = bcn("Secondary breast cancer tests", "secondary-breast-cancer-tests");

const PCUK_MSCC = pcuk("Metastatic spinal cord compression (MSCC)", "advanced-prostate-cancer/metastatic-spinal-cord-compression-mscc");
const PCUK_PAIN = pcuk("Pain and advanced prostate cancer", "advanced-prostate-cancer/pain-and-advanced-prostate-cancer");
const PCUK_PAIN_TREAT = pcuk("Treatments for pain in advanced prostate cancer", "advanced-prostate-cancer/pain-and-advanced-prostate-cancer/treatments-for-pain-in-advanced-prostate-cancer");
const PCUK_PAIN_WAYS = pcuk("Ways to manage pain in advanced prostate cancer", "advanced-prostate-cancer/pain-and-advanced-prostate-cancer/ways-to-manage-pain-in-advanced-prostate-cancer");
const PCUK_SYMPTOMS = pcuk("Managing symptoms in advanced prostate cancer", "advanced-prostate-cancer/managing-symptoms-in-advanced-prostate-cancer");
const PCUK_SCANS = pcuk("Scans to see if your cancer has spread", "prostate-tests/scans-to-see-if-your-cancer-has-spread");
const PCUK_NURSES = pcuk("Our Specialist Nurses", "get-support/our-specialist-nurses");

const MC_PALL = mc("What is palliative care?", "information/getting-care/palliative-care");
const MC_LINE = mc("Marie Curie Support Line", "services/support-line");

const NHS_NEEDS = nhs("Getting a care needs assessment", "social-care-and-support/help-from-social-services-and-charities/getting-a-needs-assessment/");
const NHS_URGENT_MH = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const boneMetastasesAnswers: LearnArticle[] = [
  {
    id: "bmet-what-it-is",
    kicker: "Understanding",
    question: "What is secondary bone cancer?",
    hook: "It is the first cancer, settled in a new place. The cells in the bone are still cells of the cancer where it began, and that is what guides treatment.",
    short: "Secondary bone cancer happens when cancer cells spread to the bone from a primary tumour somewhere else in the body. The cells in the bone are the same type as the primary cancer, which tells your doctor which treatment you need. It is not currently curable, but treatment aims to control it and relieve symptoms, and many people live with it for a long time.",
    sections: [
      {
        heading: "Cancer that has moved to the bone",
        paragraphs: [
          "The place where a cancer starts in the body is called the primary cancer. Sometimes cells break away from it and are carried in the bloodstream or through the lymphatic system to another part of the body, where they may form a new tumour. This is called secondary cancer.",
          "Secondary cancer in the bone happens when cancer cells spread to the bone from a primary tumour somewhere else in the body. It is sometimes called bone secondaries or bone metastases.",
        ],
      },
      {
        heading: "Still the first cancer",
        paragraphs: [
          "The secondary cancer is made of the same type of cells as the primary cancer. So, if a cancer started in the lung and has spread to the bones, the areas of cancer in the bone are made up of lung cancer cells.",
          "This is different from a cancer that first started in the bone, which is called primary bone cancer. It matters because the primary cancer tells your doctor which type of treatment you need.",
        ],
      },
      {
        heading: "Which cancers spread to bone",
        paragraphs: [
          "Any type of primary cancer can spread to the bone. The most common are breast, prostate, lung, kidney and thyroid cancer. Myeloma, a cancer that develops from cells in the bone marrow, often affects the bones too.",
          "Sometimes only 1 area of bone is affected, but in most people the cancer will spread to a few different areas. In breast cancer, the bones most often affected are the spine, ribs, skull, pelvis and the upper bones of the arms and legs.",
        ],
      },
      {
        heading: "What it does to the bone",
        paragraphs: [
          "Cancers that spread to the bones damage the bones as they grow. The cancer cells release proteins that make the cells that break down bone overactive, so bone is destroyed faster than it grows.",
          "This means bones can become thinner and weaker, causing pain in the affected bone, high calcium levels in the blood and an increased risk of breaks.",
        ],
      },
      {
        heading: "What treatment aims to do",
        paragraphs: [
          "Secondary bone cancer is not currently curable. Treatment usually aims to control the cancer and relieve symptoms, and it may also help prevent problems from developing. However, many people live with secondary bone cancer for a long time.",
          "Most people worry about their outlook when they have a secondary cancer. It is usually difficult to predict, and this uncertainty can be hard to deal with. Speak to your doctor if you want more information.",
          "A team of specialists will meet to talk about the best possible treatment for you, and you can stop treatment whenever you want if you find it too much to cope with. Talk through your options with your doctor or specialist nurse.",
        ],
      },
    ],
    helps: [
      "Talk through your treatment options with your doctor or specialist nurse.",
      "Talk things over with a close relative or friend, or a counsellor if one is available.",
      "Speak to your doctor if you want more information about your outlook.",
      "Contact your doctor or specialist nurse as soon as possible if you have any problems between appointments.",
      "Call the Macmillan Support Line free on 0808 808 00 00, 7 days a week, 8am to 8pm.",
    ],
    tryThisWeek: [
      "Talk through your options with your team.",
      "Talk things over with someone close.",
      "Save the Macmillan Support Line number.",
    ],
    ask: "Where did my cancer start, which bones are affected, and what is my treatment aiming to do?",
    interactive: {
      kind: "flip-cards",
      title: "Words you may hear",
      intro: "Turn a card to see what each word means.",
      cards: [
        { id: "primary", front: "Primary cancer", when: "Where the cancer started", back: "The place where a cancer starts in the body. It tells your doctor which type of treatment you need." },
        { id: "secondary", front: "Secondary cancer", when: "When cells spread", back: "Cells break away and travel in the blood or lymphatic system to another part of the body, forming a new tumour." },
        { id: "metastases", front: "Bone metastases", when: "Another name for it", back: "Secondary cancers in the bone are sometimes called bone secondaries or bone metastases." },
        { id: "primary-bone", front: "Primary bone cancer", when: "A different illness", back: "A cancer that first started in the bone, made up of bone cells that have become cancerous." },
        { id: "mdt", front: "Multidisciplinary team", when: "Planning your treatment", back: "A team of specialists who meet to talk about the best possible treatment for you." },
      ],
    },
    sources: [MAC_SBC, CRUK_SBC, CRUK_BISPH, BCN_BONE, CRUK_SBC_TREAT, MAC_SUPPORT_LINE],
    quiz: {
      question: "If lung cancer spreads to the bones, what are the areas of cancer in the bone made of?",
      options: [{ text: "Lung cancer cells", right: true }, { text: "Bone cells that have become cancerous" }, { text: "Blood cells" }],
      why: "So, if a cancer started in the lung and has spread to the bones, the areas of cancer in the bone are made up of lung cancer cells.",
    },
  },
  {
    id: "bmet-symptoms",
    kicker: "Symptoms",
    question: "What does bone pain feel like, and what else should I look out for?",
    hook: "Pain is the most common sign, and it is worth telling your team about early. A few other changes are worth knowing too.",
    short: "Pain is the most common symptom of secondary bone cancer, often described as a gnawing or dull ache that is worse when you move. Tell your doctor or nurse about pain that lasts more than 2 weeks, comes when you move or wakes you at night. Weaker bones, changes in the blood, high calcium and pressure on the spinal cord can also happen, and some need help straight away.",
    sections: [
      {
        heading: "Pain is the most common symptom",
        paragraphs: [
          "Pain is the most common symptom of secondary bone cancer. Everyone feels pain differently, and the pain may depend on which bones are affected. Some people do not have any symptoms.",
          "The pain is continuous, and people often describe it as gnawing. It may be a dull ache that does not go away, and it is often worse when you move.",
          "Breast Cancer Now says the pain can happen when resting or sleeping, and may get worse when lying down, especially at night.",
        ],
      },
      {
        heading: "Where you feel it",
        paragraphs: [
          "Secondary bone cancer in the spine can cause backache and pain in the arms and legs. In the leg bones, it may cause pain when you are walking.",
          "In other parts of the body such as the ribs or spine, the pain may seem to vary in where it is and when it occurs. Some men with prostate cancer describe bone pain as feeling similar to a toothache, but in the bones.",
        ],
      },
      {
        heading: "When to tell your doctor or nurse",
        paragraphs: [
          "It is important to let your doctor or nurse know if you have pain in 1 or more areas that lasts for more than 2 weeks, pain when you are moving, pain that wakes you up at night, or pain in your back that shoots down your arm or leg.",
          "Aches and pains are common and may be a muscle strain or an everyday ache. But tell your doctor if you have a new pain, so they can check what is causing it and treat it as soon as possible. This helps to avoid further problems such as bone fractures or severe pain.",
        ],
      },
      {
        heading: "Weaker bones and changes in the blood",
        paragraphs: [
          "Cancer in the bones can weaken them. Sometimes a bone weakened by cancer will break, even if you have not had an accident or fall. This is known as a pathological fracture.",
          "Secondary bone cancer can also affect the way the bone marrow works. Too few red blood cells can make you feel tired and breathless, too few white blood cells make you more prone to infection, and a low platelet count can cause bruising or bleeding.",
        ],
      },
      {
        heading: "Signs that need help straight away",
        paragraphs: [
          "Secondary bone cancer may cause increased amounts of calcium to be released into the blood, which is called hypercalcaemia. It can also put pressure on the nerves in the spinal cord, which is called malignant spinal cord compression.",
          "If you develop symptoms of either, it is very important to let your doctor or specialist nurse know straight away. If you cannot contact your specialist team and you develop weakness in your legs or arms or problems controlling your bowel or bladder, go to your local A&E straight away.",
        ],
      },
    ],
    helps: [
      "Tell your doctor or nurse about pain that lasts more than 2 weeks, comes when you move, or wakes you at night.",
      "Tell your doctor if you have a new pain, so they can check the cause and treat it as soon as possible.",
      "Report any new or ongoing symptoms to your treatment team, however minor they seem.",
      "Keep a pain diary of when you have pain, how strong it is, where it is and what medicines you take.",
      "Let your doctor or specialist nurse know straight away about signs of high calcium or spinal cord compression.",
    ],
    tryThisWeek: [
      "Note any pain lasting over 2 weeks.",
      "Start a simple pain diary.",
      "Report new symptoms, however minor.",
    ],
    ask: "Which of my symptoms could be caused by the cancer in my bones, and which ones should I report straight away?",
    interactive: {
      kind: "signs",
      title: "Symptoms to tell your team about",
      intro: "Tick any you have noticed. Tell your doctor or nurse about them, however minor they seem.",
      signs: [
        "Pain lasting more than 2 weeks",
        "Pain when I am moving",
        "Pain that wakes me at night",
        "Back pain shooting down an arm or leg",
        "A bone that broke without a fall",
        "Feeling tired and breathless",
        "More infections than usual",
        "Bruising or bleeding",
      ],
      after: "Weak arms or legs, or bladder or bowel problems? Tell your team straight away. If you cannot contact them, go to A&E straight away.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [MAC_SBC, CRUK_SBC, MAC_PAIN, BCN_BONE, PCUK_PAIN],
    quiz: {
      question: "How long can bone pain last before it is important to tell your doctor or nurse?",
      options: [{ text: "More than 2 weeks", right: true }, { text: "More than 6 months" }, { text: "Only once it stops you walking" }],
      why: "It is important to let your doctor or nurse know if you have pain in 1 or more areas that lasts for more than 2 weeks, pain when you are moving, pain that wakes you up at night, or pain in your back that shoots down your arm or leg.",
    },
  },
  {
    id: "bmet-emergencies",
    kicker: "Urgent help",
    question: "Which warning signs need urgent help?",
    hook: "Spinal cord compression and high calcium can both be treated, and the earlier treatment starts, the better. Knowing the signs, and who to call, is the thing to have ready.",
    short: "Spinal cord compression is an emergency. If you have any of its symptoms, contact your hospital team immediately, even at the weekend, and go to A&E straight away if you cannot reach anyone; do not wait for further symptoms to develop. Signs of high calcium, such as feeling sick, thirsty, drowsy or confused, need your doctor or specialist nurse straight away.",
    sections: [
      {
        heading: "Spinal cord compression",
        paragraphs: [
          "Secondary bone cancer can put pressure on the nerves in the spinal cord. This is called metastatic spinal cord compression, or MSCC. It is rare but can be serious.",
          "Spinal cord compression is an emergency and needs to be treated quickly. The earlier treatment starts, the more likely it is to be effective. If left untreated, MSCC can cause permanent nerve damage.",
        ],
      },
      {
        heading: "The warning signs",
        paragraphs: [
          "Back or neck pain is often the first symptom. It may be mild at first but become severe, feel like a band around your chest or tummy, spread down a leg or arm, or get worse when you cough, sneeze or go to the toilet.",
          "Other signs include weakness in your arms or legs, difficulty walking or your legs giving way, numbness or pins and needles anywhere in your body, and problems controlling your bladder or bowels.",
          "These symptoms can also be caused by other conditions. But you should always get your symptoms checked, even if you have had previous treatment for MSCC.",
        ],
      },
      {
        heading: "What to do, straight away",
        paragraphs: [
          "If you develop any symptoms of MSCC, get medical advice immediately. Even if it is the weekend or a holiday, contact the hospital team where you usually go for cancer treatment and follow-up appointments.",
          "If you are unable to get in touch with anyone, go to the nearest A&E straight away. Tell them you have cancer and are worried you may have spinal cord compression, and show them your MSCC alert card or leaflet.",
          "Do not wait for further symptoms to develop. The sooner MSCC is diagnosed, the sooner treatment can begin, and it should usually start within 24 hours of diagnosis.",
        ],
      },
      {
        heading: "High calcium (hypercalcaemia)",
        paragraphs: [
          "Secondary cancer cells in the bone can cause calcium from the bone to be released into the blood. A high level of calcium in the blood is called hypercalcaemia, and it can make you feel very unwell.",
          "It can make you feel sick, thirsty, drowsy, confused and unwell, or constipated, and you may pass urine more often. Some people just feel a bit unwell or very tired.",
          "If you develop any of these symptoms, it is very important to let your doctor or specialist nurse know straight away. Your doctor will want to start treatment as soon as possible.",
        ],
      },
      {
        heading: "Have your numbers ready",
        paragraphs: [
          "Make sure you have the contact details of your hospital team and know who to phone at evenings and weekends. You can ask your doctor or nurse to write down who to contact during the day, at night and at the weekend.",
          "Contact the hospital straight away on the 24-hour number if you have throbbing pain or swelling in a leg or arm, or suddenly feel breathless. Always call 999 if you have chest pain or difficulty breathing.",
        ],
      },
    ],
    helps: [
      "Contact your hospital team immediately if you have any symptom of spinal cord compression, even at the weekend.",
      "Go to the nearest A&E straight away if you are unable to get in touch with anyone.",
      "Tell staff you have cancer and are worried about spinal cord compression, and show your alert card.",
      "Let your doctor or specialist nurse know straight away if you have signs of high calcium.",
      "Keep your team's day, night and weekend contact details somewhere easy to find.",
      "Always call 999 if you have chest pain or difficulty breathing.",
    ],
    tryThisWeek: [
      "Keep your team's numbers easy to find.",
      "Carry your alert card to show staff.",
      "Report high calcium signs straight away.",
    ],
    ask: "Who exactly should I call, day and night, if I get signs of spinal cord compression or high calcium?",
    interactive: {
      kind: "signs",
      title: "Signs that need help straight away",
      intro: "Tick any you have now. If you have any of them, do not wait to see if they get better.",
      signs: [
        "New back or neck pain, getting worse",
        "Pain like a band round chest or tummy",
        "Pain spreading down an arm or leg",
        "Weakness in my arms or legs",
        "Legs giving way, or difficulty walking",
        "New numbness or pins and needles",
        "Problems controlling bladder or bowels",
        "Feeling sick, thirsty or drowsy",
        "Confusion, or passing urine more often",
      ],
      after: "Spine signs: contact your hospital team now, or go to A&E if no one answers. Calcium signs: tell your doctor or specialist nurse straight away.",
      copyHeading: "Symptoms I need urgent help with",
    },
    sources: [MAC_MSCC, CRUK_SCC, MAC_SBC, MAC_MANAGE, CRUK_CALCIUM, PCUK_MSCC, MAC_DENO, BCN_BONE],
    quiz: {
      question: "You get signs of spinal cord compression on a Sunday. What should you do?",
      options: [{ text: "Contact your hospital team straight away", right: true }, { text: "Wait until Monday" }, { text: "See whether it gets better on its own" }],
      why: "Even if it is the weekend or a holiday, contact the hospital team where you usually go for cancer treatment and follow-up appointments.",
    },
  },
  {
    id: "bmet-tests",
    kicker: "Tests",
    question: "Which scans and tests might I have?",
    hook: "Blood tests, x-rays and scans each show something different. Knowing what happens on the day can make the waiting a little easier.",
    short: "You might have blood tests, x-rays and scans such as a bone scan, CT, MRI or PET-CT scan, and sometimes a small sample of bone. A bone scan checks the whole skeleton, but hot spots on it are not always cancer. Many people feel anxious while waiting for results, and there is support if you need it.",
    sections: [
      {
        heading: "Why tests are done",
        paragraphs: [
          "You may see your GP or your cancer doctor. They will ask you about any symptoms you have, may examine you, and may arrange some tests and scans.",
          "The tests you have may depend on your symptoms. For example, if you have pain that affects your bones, you may have a bone scan.",
        ],
      },
      {
        heading: "Blood tests and x-rays",
        paragraphs: [
          "You may have a blood test to check your general health and the level of calcium in your blood. Increased calcium levels can be a sign of secondary cancer in the bone.",
          "Bone x-rays can show changes in the bone, such as a fracture, and may show a secondary bone cancer. But not all secondary bone cancers can be seen on an x-ray.",
        ],
      },
      {
        heading: "A bone scan",
        paragraphs: [
          "A bone scan checks the whole skeleton, and it is more sensitive than an x-ray. A small amount of radioactive tracer is injected into a vein, and you wait 2 to 3 hours while it collects in your bones.",
          "The scan itself takes between 30 minutes and an hour, and you keep very still while the camera takes pictures. You are at the hospital for about 4 to 5 hours in all.",
          "Areas where the tracer collects are often called hot spots. These are not always cancer, as bone changes can happen for other reasons like arthritis. Tell your doctor or nurse if you have arthritis or have ever had broken bones or surgery to the bones.",
        ],
      },
      {
        heading: "Other scans and a biopsy",
        paragraphs: [
          "A CT scan makes a detailed picture of the inside of the body using x-rays. An MRI scan uses magnetism to build up a detailed picture, and it is the scan usually used if your team thinks you might have spinal cord compression.",
          "A PET-CT scan can give more detailed information about cancer or abnormal areas seen on other scans. Sometimes a doctor takes a sample of cells from the bone, called a bone biopsy, to be checked for cancer under the microscope.",
        ],
      },
      {
        heading: "Waiting for results",
        paragraphs: [
          "You should get the results of a bone scan within 1 or 2 weeks, and you won't get any results at the time of the scan. Contact your doctor or nurse if you haven't heard anything after a couple of weeks.",
          "Many people feel anxious while they are waiting. It may help to talk to your specialist nurse or a close friend or relative, or to call the Macmillan Support Line free on 0808 808 00 00.",
        ],
      },
    ],
    helps: [
      "Tell your doctor or nurse before a bone scan if you have arthritis or have had broken bones or bone surgery.",
      "Drink plenty while you wait for a bone scan, and for the rest of the day afterwards.",
      "For the rest of the day after a bone scan, avoid close contact with pregnant women, babies or young children, or keep it short.",
      "Tell the radiographer beforehand if keeping still may be a problem for you, or if you feel closed in.",
      "Ask how long your results will take, and contact your team if you haven't heard after a couple of weeks.",
      "Write down your questions before any appointment and take them with you.",
    ],
    tryThisWeek: [
      "Mention arthritis or old breaks before a scan.",
      "Drink plenty on scan day.",
      "Write down your questions.",
    ],
    ask: "Which scans do I need, what are they looking for, and when and how will I get the results?",
    interactive: {
      kind: "flip-cards",
      title: "Tests at a glance",
      intro: "Turn a card to see what each test looks for.",
      cards: [
        { id: "blood", front: "Blood test", when: "Often one of the first tests", back: "Checks your general health and the calcium level in your blood. Raised calcium can be a sign of cancer in the bone." },
        { id: "xray", front: "Bone x-ray", when: "To look at a painful area", back: "Can show changes such as a fracture. Not all secondary bone cancers show up on an x-ray." },
        { id: "bonescan", front: "Bone scan", when: "To check the whole skeleton", back: "A tracer collects where bone is breaking down and repairing. Hot spots are not always cancer." },
        { id: "ct", front: "CT scan", when: "A detailed picture inside", back: "Builds a detailed picture of the inside of the body from x-rays." },
        { id: "mri", front: "MRI scan", when: "Often for the spine", back: "Uses magnetism to build a detailed picture. It is the usual urgent scan if spinal cord compression is suspected." },
        { id: "biopsy", front: "Bone biopsy", when: "Sometimes, to confirm", back: "A small sample of bone is checked under a microscope, which can help confirm the diagnosis." },
      ],
    },
    sources: [MAC_SBC, BCN_TESTS, CRUK_BONESCAN, PCUK_SCANS, MAC_MSCC, MAC_WAITING],
    quiz: {
      question: "Are the hot spots on a bone scan always cancer?",
      options: [{ text: "No, bone changes can happen for other reasons", right: true }, { text: "Yes, every hot spot is cancer" }, { text: "Hot spots only show old fractures" }],
      why: "These are not always cancer, as bone changes can happen for other reasons like arthritis.",
    },
  },
  {
    id: "bmet-bone-drugs",
    kicker: "Treatment",
    question: "How do bone-strengthening medicines help?",
    hook: "Bisphosphonates and denosumab slow the damage cancer does to bone. They can ease pain, lower calcium and help prevent breaks.",
    short: "Bisphosphonates and denosumab are drugs that strengthen the bones. They aim to reduce the risk of fractures and high calcium, and help with pain. You have them as a drip, tablets or an injection under the skin, and side effects are usually mild, but you will be asked to see a dentist before you start.",
    sections: [
      {
        heading: "What they do",
        paragraphs: [
          "Bisphosphonates and denosumab are drugs that can help to strengthen the bones. They aim to reduce the risk of fractures or high levels of calcium in the blood, and help with pain.",
          "They work in slightly different ways. Bisphosphonates are taken up by the cells that break down old bone, which slows them down and reduces bone breakdown. Denosumab is a targeted therapy, called a monoclonal antibody, that reduces bone loss.",
        ],
      },
      {
        heading: "How you have them",
        paragraphs: [
          "Zoledronic acid, the most commonly used bisphosphonate, is given into a vein over at least 15 minutes every 3 to 4 weeks, usually as an outpatient. Once you have had it for around 1 year, you may be able to have it every 12 weeks instead.",
          "Some bisphosphonates, such as clodronate, are capsules or tablets. Denosumab is an injection under the skin of the thigh, stomach or upper arm, usually once every 4 weeks.",
          "You will usually have them for as long as your treatment team feels you are benefiting and any side effects are manageable.",
        ],
      },
      {
        heading: "Who has them",
        paragraphs: [
          "Bisphosphonates can treat bone weakness or pain caused by myeloma or by breast cancer that has spread to the bones. If you have prostate cancer, you might have them if painkillers are not working well enough.",
          "You might have bisphosphonates, or denosumab, for other cancer types that have spread to the bone. This is to try and prevent any problems with your bones, and you might also have them to help with pain relief.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Side effects are usually mild. Flu-like symptoms, such as pains in the muscles and joints, usually settle after the first dose.",
          "These drugs can make calcium in the blood drop too low. Early signs include tingling around the mouth and lips and in the hands and feet, and you may be prescribed calcium and vitamin D supplements to prevent it.",
          "Zoledronic acid can cause kidney problems, so your doctor will check your kidney function first. Rarely, these drugs can cause the thigh bone to break, so tell your team about any pain in your thigh, hip or groin.",
        ],
      },
      {
        heading: "Your jaw and your dentist",
        paragraphs: [
          "Rarely, these treatments can affect the jawbone, which is called osteonecrosis of the jaw. Your treatment team will recommend you see a dentist before starting.",
          "Do not stop taking bone-strengthening drugs unless your treatment team or dentist tells you to. Let your treatment team know straight away if you have jaw pain, loose teeth, or swelling, redness or ulcers on the gums.",
        ],
      },
    ],
    helps: [
      "See a dentist before starting bone-strengthening drugs.",
      "Take the drugs exactly as your specialist or pharmacist explains.",
      "Take calcium and vitamin D supplements if they are prescribed for you.",
      "Tell your team about tingling around your mouth or in your fingers and toes.",
      "Tell your team about any new pain in your thigh, hip or groin.",
      "Do not stop bone-strengthening drugs unless your treatment team or dentist tells you to.",
    ],
    tryThisWeek: [
      "Book a dental check-up before starting.",
      "Take any prescribed calcium and vitamin D.",
      "Report tingling around your mouth.",
    ],
    ask: "Would a bisphosphonate or denosumab help me, and how often would I have it?",
    interactive: {
      kind: "flip-cards",
      title: "The bone-strengthening drugs",
      intro: "Turn a card to see how each one is given and what it can treat.",
      cards: [
        { id: "zoledronic", front: "Zoledronic acid", when: "A drip, often every 3 to 4 weeks", back: "The most commonly used bisphosphonate. It can lower raised calcium and treat bone weakness or pain." },
        { id: "pamidronate", front: "Pamidronate", when: "A drip (infusion)", back: "Treats high calcium caused by cancer in the bones, and bone weakness or pain from myeloma or breast cancer." },
        { id: "clodronate", front: "Clodronate", when: "Capsules or tablets", back: "Treats high calcium caused by cancer in the bones, and bone weakness or pain from myeloma or breast cancer." },
        { id: "ibandronic", front: "Ibandronic acid", when: "A drip or a tablet", back: "Treats high calcium caused by cancer in the bones, and bone weakness or pain from breast cancer." },
        { id: "denosumab", front: "Denosumab", when: "An injection under the skin", back: "Strengthens and protects the bones and may be given to prevent fractures. It can be every 4 weeks, 3 months or 6 months." },
      ],
    },
    sources: [MAC_SBC, MAC_BISPH, BCN_BONE, CRUK_BISPH, MAC_DENO, CRUK_SBC_TREAT],
    quiz: {
      question: "What will your treatment team recommend before you start bone-strengthening drugs?",
      options: [{ text: "Seeing a dentist", right: true }, { text: "Cutting calcium out of your diet" }, { text: "Stopping all painkillers" }],
      why: "Your treatment team will recommend you see a dentist before starting.",
    },
  },
  {
    id: "bmet-radiotherapy",
    kicker: "Treatment",
    question: "How does radiotherapy ease bone pain?",
    hook: "Often a single short session, or a few, aimed at the painful bone. The pain usually starts to ease within a couple of weeks.",
    short: "Radiotherapy is often used to treat secondary bone cancer and can help relieve pain by shrinking the cancer cells pressing on nerves. You may have a single session or a few daily sessions, and side effects are usually few. It may take 7 to 10 days for the pain to start improving, so keep taking your painkillers until your team says otherwise.",
    sections: [
      {
        heading: "Why it is used",
        paragraphs: [
          "Radiotherapy is often used to treat secondary bone cancer. It uses high-energy rays to destroy cancer cells in the area where it is given, and it can help relieve symptoms such as pain.",
          "Pain-relieving radiotherapy can shrink the cancer cells in the bones and stop them pressing on nerves and causing pain. It can also sometimes slow the growth of cancer cells, giving your bones time to repair and strengthen.",
        ],
      },
      {
        heading: "Having external radiotherapy",
        paragraphs: [
          "External beam radiotherapy is given from a machine outside the body, to the area of bone affected by the cancer. You may have a single treatment session or a number of daily sessions, and each treatment takes a few minutes.",
          "External radiotherapy does not make you radioactive. It is perfectly safe to be with other people after treatment, including children.",
          "Stereotactic radiotherapy uses small, precise beams of radiation to target the tumour. It is occasionally used to treat secondary bone cancer in the spine if only 1 or 2 areas are affected.",
        ],
      },
      {
        heading: "When the pain eases",
        paragraphs: [
          "It may take 7 to 10 days for bone pain to start improving, and up to 6 weeks before you feel the full benefit. Sometimes bone pain gets slightly worse before getting better.",
          "It is important to continue taking any painkillers you have been prescribed. You can talk to your doctor or nurse about reducing your painkillers as your pain improves.",
          "If your pain comes back, you may be able to have more radiotherapy to the same area. This will depend on the dose you have already had and when you had it.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "This type of radiotherapy usually causes very few side effects, and they depend on where the treatment is given. Treatment to the ribs or spine may make you feel sick for a couple of days, and some people feel more tired or have some skin redness.",
          "Radiotherapy to the pelvis may also cause diarrhoea. Your team will discuss possible side effects with you before treatment starts and make sure you have any medication you need.",
        ],
      },
      {
        heading: "Radioisotope therapy",
        paragraphs: [
          "Radioisotopes are radioactive substances given as a drink, capsules or an injection into a vein. Cancer cells absorb them more than normal cells, so all the bones affected by cancer are treated, which can help if several bones are affected.",
          "Radium-223 can treat secondary cancer in the bone from prostate cancer that is no longer responding to hormonal therapy. It can temporarily lower blood cell counts, so you have blood tests first. Some people have tumour flare, which can cause a temporary increase in pain and tenderness.",
          "After radium-223, some radiation may be present in your urine and stools for up to 7 days. Your healthcare team will let you know if there are any safety guidelines you need to follow.",
        ],
      },
    ],
    helps: [
      "Keep taking the painkillers you have been prescribed during and after radiotherapy.",
      "Talk to your doctor or nurse about reducing your painkillers as your pain improves.",
      "Ask your team about possible side effects before treatment starts, and about medicine to manage them.",
      "Ask your doctor or nurse whether more radiotherapy could help if your pain comes back.",
      "Follow any safety guidelines your team gives you after radioisotope treatment.",
    ],
    tryThisWeek: [
      "Keep taking your prescribed painkillers.",
      "Ask about side effects before you start.",
      "Tell your team if the pain comes back.",
    ],
    ask: "Would radiotherapy help my bone pain, and would it be one session or several?",
    interactive: {
      kind: "timeline",
      title: "After radiotherapy for bone pain",
      steps: [
        { id: "treatment", when: "Treatment", title: "One session or a few", points: ["Each treatment takes a few minutes.", "External radiotherapy does not make you radioactive."] },
        { id: "first-days", when: "First few days", title: "Possible side effects", points: ["Treatment to the ribs or spine may make you feel sick.", "Pain can get slightly worse before it gets better."] },
        { id: "days", when: "7 to 10 days", title: "Pain starts to ease", points: ["Keep taking the painkillers you have been prescribed."] },
        { id: "weeks", when: "Up to 6 weeks", title: "The full benefit", points: ["Talk to your team about reducing painkillers as pain improves."] },
        { id: "later", when: "If pain returns", title: "More may be possible", points: ["Ask whether more radiotherapy to the same area could help."] },
      ],
    },
    sources: [MAC_RT, PCUK_PAIN_TREAT, CRUK_SBC_TREAT, BCN_BONE],
    quiz: {
      question: "How long may it take for bone pain to start improving after radiotherapy?",
      options: [{ text: "7 to 10 days", right: true }, { text: "A few hours" }, { text: "6 months" }],
      why: "It may take 7 to 10 days for bone pain to start improving, and up to 6 weeks before you feel the full benefit.",
    },
  },
  {
    id: "bmet-pain",
    kicker: "Pain",
    question: "What can help with my pain?",
    hook: "Bone pain can usually be eased. Telling your team early, taking painkillers regularly and using the other treatments for bone pain all help.",
    short: "For most people, cancer pain can be managed, and the sooner you tell your team, the easier it is to control. Painkillers are chosen step by step for mild, moderate or severe pain and work best taken regularly, as prescribed. Radiotherapy, bone-strengthening drugs, a palliative care nurse and simple things at home can all help too.",
    sections: [
      {
        heading: "Pain can usually be managed",
        paragraphs: [
          "Many people with cancer will have pain at some point, but for most people pain can be managed. Pain is very personal, and two people with the same type of cancer may have different amounts of pain.",
          "Pain does not always get worse if the cancer develops. With the right treatment and management, pain can usually be relieved or reduced.",
        ],
      },
      {
        heading: "Telling your team",
        paragraphs: [
          "Tell your doctor or nurse about any pain as soon as you can. The sooner you get help, the easier it is to control, and you don't have to put up with pain.",
          "Let them know where your pain is, if it is not controlled, and if you get pain with tasks such as walking or lifting things. Keeping a pain diary, even for only a few days, may show a pattern that can be used to improve your pain control.",
        ],
      },
      {
        heading: "Painkillers, step by step",
        paragraphs: [
          "Health professionals may use a pain relief ladder. Mild pain is treated with paracetamol or anti-inflammatory drugs, moderate pain with weak opioids such as codeine, and severe pain with strong opioids such as morphine.",
          "It is important to take your painkillers regularly, as prescribed. Don't wait until the pain comes back, as it might get worse and be harder to control. Breakthrough pain can be treated with a short-acting painkiller, best taken before the pain gets severe.",
          "Addiction is rare when a strong painkiller is used correctly to relieve cancer pain as prescribed. Do not increase the dose, or suddenly stop a strong painkiller, without talking to your doctor or nurse first.",
        ],
      },
      {
        heading: "Other treatments for bone pain",
        paragraphs: [
          "Radiotherapy, bisphosphonates and sometimes surgery can also treat bone pain. Steroids can reduce swelling, and other medicines can help with nerve pain.",
          "Hot or cold packs wrapped in a towel, changing position often to prevent stiffness, and relaxation such as deep breathing may also help. Complementary therapies are meant to be used alongside usual treatments, rather than instead of them.",
        ],
      },
      {
        heading: "People who can help",
        paragraphs: [
          "You can ask your doctor to refer you to a palliative care nurse, who is a specialist in advising on pain and symptom control. Many hospitals also have specialist pain teams, which can be very useful if your pain is difficult to control.",
          "A physiotherapist can show you different ways of moving to help manage the pain, and an occupational therapist can provide equipment to make you more comfortable. Sometimes a stay in a hospice, often for 1 to 2 weeks, can help get your pain under control before you go home.",
          "You can have palliative care at any stage, alongside treatments aimed at controlling the illness, such as radiotherapy. It aims to make sure you feel supported and comfortable.",
        ],
      },
    ],
    helps: [
      "Tell your doctor or nurse about any pain as soon as you can.",
      "Keep a pain diary of when you have pain, how strong it is, where it is and what you take.",
      "Take your painkillers regularly, as prescribed.",
      "Talk to your doctor or nurse before changing the dose of a strong painkiller.",
      "Ask to be referred to a palliative care nurse for advice on pain and symptom control.",
      "Make sure you and your family know who to contact if your pain suddenly gets worse.",
    ],
    tryThisWeek: [
      "Tell your team about any pain.",
      "Keep a pain diary for a few days.",
      "Take painkillers regularly, as prescribed.",
    ],
    ask: "Is my pain as well controlled as it could be, and could a palliative care nurse or pain team help?",
    interactive: {
      kind: "scenarios",
      title: "Moments with pain",
      scenarios: [
        {
          id: "early",
          situation: "Your pain comes back before your next dose is due.",
          options: [{ text: "Let your doctor or nurse know", best: true }, { text: "Put up with it until the next dose" }],
          why: "If your pain comes back before your next dose is due, let your doctor or nurse know, as the dose might need changing.",
        },
        {
          id: "addiction",
          situation: "You worry that you will become addicted to morphine.",
          options: [{ text: "Talk to your doctor or nurse about it", best: true }, { text: "Stop taking it on your own" }],
          why: "Addiction is rare when a strong painkiller is used correctly to relieve cancer pain as prescribed.",
        },
        {
          id: "skip",
          situation: "The pain is mild this morning, so you think about skipping a dose.",
          options: [{ text: "Keep taking it regularly, as prescribed", best: true }, { text: "Wait until the pain is bad" }],
          why: "Don't wait until the pain comes back, as it might get worse and be harder to control.",
        },
        {
          id: "lifting",
          situation: "Carrying the shopping hurts more than it used to.",
          options: [{ text: "Tell your team you get pain when lifting", best: true }, { text: "Keep it to yourself" }],
          why: "Let them know where your pain is, if it is not controlled, and if you get pain with tasks such as walking or lifting things.",
        },
      ],
    },
    sources: [MAC_PAIN, PCUK_PAIN, MAC_MANAGE, PCUK_PAIN_TREAT, MAC_PAIN_FAQ, PCUK_PAIN_WAYS, MC_PALL],
    quiz: {
      question: "When is a painkiller for breakthrough pain best taken?",
      options: [{ text: "Before the pain gets severe", right: true }, { text: "Only once the pain is at its worst" }, { text: "The next day" }],
      why: "Breakthrough pain can be treated with a short-acting painkiller, best taken before the pain gets severe.",
    },
  },
  {
    id: "bmet-surgery",
    kicker: "Treatment",
    question: "When might surgery be used to support a bone?",
    hook: "Not often, but when a bone is badly weakened or has broken, a pin, a new joint or bone cement can make it stronger and less painful.",
    short: "Surgery is not a very common treatment for secondary bone cancer, but it can strengthen a weakened bone or fix a fracture. It may mean a metal pin or plate, a joint replacement, rods in the spine or an injection of bone cement. You may have radiotherapy before or after, and your cancer doctor can tell you whether surgery would suit you.",
    sections: [
      {
        heading: "Why surgery may help",
        paragraphs: [
          "Bones can sometimes be weakened by the secondary bone cancer cells, which can cause the bone to break. If this happens, it may be possible to strengthen or repair them using surgery.",
          "Surgery is not a very common treatment. Your doctor might suggest you see a surgeon, to see if they can help strengthen weakened bones.",
        ],
      },
      {
        heading: "Types of operation",
        paragraphs: [
          "A metal pin or plate can be put into the bone under general anaesthetic, to strengthen and stabilise it and reduce the risk of it breaking. Surgery can also help fix a fracture in a weakened bone.",
          "If secondary cancer has caused a lot of damage to your hip or shoulder joint, you may need an operation to replace the joint. You may have rods put in to stabilise and strengthen your spine if you have cancer there.",
        ],
      },
      {
        heading: "Bone cement",
        paragraphs: [
          "A doctor can inject a special cement into a weakened bone to strengthen it and relieve pain. When this is done in the spine, it is called vertebroplasty. Kyphoplasty is similar, but uses a balloon to make a space for the cement.",
          "Vertebroplasty is done in the x-ray department. It takes about an hour, and you can usually go home later that day.",
        ],
      },
      {
        heading: "Radiotherapy alongside",
        paragraphs: [
          "You may also have radiotherapy before or after these operations, or both. This is to try to destroy any cancer cells left in the area and help repair the bone.",
        ],
      },
      {
        heading: "Is it right for you?",
        paragraphs: [
          "Surgery is not suitable for everyone. It depends on where the damaged bone is, and other things, such as whether you are well enough for surgery.",
          "Surgery to remove secondary bone cancer is very rare. It is usually only considered if the cancer only affects one bone and has not spread to other parts of the body. Your cancer doctor can tell you more and talk to you about whether surgery would be suitable for you.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor whether surgery would be suitable for you.",
      "Ask whether you will have radiotherapy before or after the operation.",
      "Tell your doctor if you have a new pain, to help avoid problems such as fractures.",
      "Ask your surgeon or physiotherapist which activities to avoid after surgery, and for how long.",
    ],
    tryThisWeek: [
      "Ask whether surgery could suit you.",
      "Report any new pain.",
      "Ask what to avoid after surgery.",
    ],
    ask: "Is any of my bones at risk of breaking, and could surgery or bone cement help?",
    interactive: {
      kind: "flip-cards",
      title: "Ways to support a bone",
      intro: "Turn a card to see what each operation does.",
      cards: [
        { id: "pin", front: "Metal pin or plate", when: "A weakened or broken bone", back: "Put into the bone under general anaesthetic to strengthen and stabilise it and reduce the risk of it breaking." },
        { id: "joint", front: "Joint replacement", when: "A badly damaged hip or shoulder", back: "An operation to replace the joint if secondary cancer has caused a lot of damage to it." },
        { id: "rods", front: "Spinal rods", when: "Cancer in the spine", back: "Rods may be put in to stabilise and strengthen the spine." },
        { id: "vertebroplasty", front: "Vertebroplasty", when: "Painful, damaged spinal bones", back: "Bone cement is injected to stabilise and strengthen the bones. It takes about an hour, in the x-ray department." },
        { id: "kyphoplasty", front: "Kyphoplasty", when: "Similar to vertebroplasty", back: "A balloon makes a space inside the bone for the cement. It can restore the height of the bone." },
        { id: "rt", front: "Radiotherapy", when: "Before or after an operation", back: "Tries to destroy any cancer cells left in the area and help repair the bone." },
      ],
    },
    sources: [MAC_SBC, CRUK_SBC_TREAT, PCUK_PAIN_TREAT, BCN_BONE, PCUK_SYMPTOMS, CRUK_SBC, MAC_EXSAFE],
    quiz: {
      question: "How long does a vertebroplasty usually take?",
      options: [{ text: "About an hour", right: true }, { text: "A whole day" }, { text: "A week in hospital" }],
      why: "It takes about an hour, and you can usually go home later that day.",
    },
  },
  {
    id: "bmet-moving",
    kicker: "Moving",
    question: "How can I stay active safely?",
    hook: "Being active is still good for you. The trick is choosing gentle, low-impact activities and checking with your team first.",
    short: "Physical activity is safe if you have advanced cancer, and it can improve bone health, mood and fitness. Speak to your healthcare team first, avoid high-impact activities and falls, and choose things like walking, swimming or cycling. Start slowly, and stop and speak to a doctor straight away if you get unusual back or bone pain.",
    sections: [
      {
        heading: "Moving is still good for you",
        paragraphs: [
          "Doing physical activity is safe if you have advanced cancer, and it has many of the same benefits as for people who do not. It can improve bone health, mood and general fitness.",
          "Staying active can help with your general health and your ability to move around. It could also help to keep you strong and prevent falls that could cause broken bones.",
        ],
      },
      {
        heading: "Check first",
        paragraphs: [
          "If you have cancer in the bones, speak to your healthcare team before doing or starting any exercise. You can ask your cancer doctor or palliative care team to refer you to a clinical exercise physiologist or physiotherapist for advice.",
          "Your doctor will want to check that the bones have not become weakened by the cancer, as weakened bones are more likely to break.",
        ],
      },
      {
        heading: "What to avoid",
        paragraphs: [
          "It is usually best to avoid high-impact activities, such as running, football, tennis, squash and contact sports, because there is more risk of breaking a bone. Avoid uneven surfaces and activities that increase the risk of falling.",
          "You may also be advised to avoid exercises where you repeatedly bend forward at the waist, such as toe-touching and sit-ups. If you have secondary bone cancer in the spine or hip, check with your healthcare team whether this is safe for you to do.",
        ],
      },
      {
        heading: "What is usually safe",
        paragraphs: [
          "Low-impact activities that are usually safe include walking, dancing, climbing stairs, swimming, cycling and light-resistance exercises. Exercises that improve co-ordination and balance, such as tai chi, can reduce your risk of falling.",
          "Start slowly and build up gradually. To start with, try to reduce the time you spend sitting or lying down during the day, and move around the house doing everyday things.",
        ],
      },
      {
        heading: "Stop if something feels wrong",
        paragraphs: [
          "Do not exercise if you feel unwell. Stop if you get any sudden symptoms, such as unusual back or bone pain, chest pain, feeling dizzy or breathing problems, and speak to a doctor straight away.",
          "If you have difficulty walking, a physiotherapist can assess you to see if a walking stick or walking frame may help. They can also help you with moving around at home.",
        ],
      },
    ],
    helps: [
      "Speak to your healthcare team before starting any exercise.",
      "Ask to be referred to a clinical exercise physiologist or physiotherapist.",
      "Choose low-impact activities such as walking, swimming or cycling.",
      "Avoid high-impact activities, uneven surfaces and repeated bending at the waist.",
      "Stop and speak to a doctor straight away if you get unusual back or bone pain.",
      "Ask a physiotherapist whether a walking stick or frame could help.",
    ],
    tryThisWeek: [
      "Ask your team what is safe for you.",
      "Try a short, gentle walk.",
      "Stop if you get unusual bone pain.",
    ],
    ask: "Which activities are safe for my bones, and could I see a physiotherapist?",
    interactive: {
      kind: "scenarios",
      title: "Choosing how to move",
      scenarios: [
        {
          id: "tennis",
          situation: "A friend invites you to a game of tennis.",
          options: [{ text: "Ask your team first, as tennis is high impact", best: true }, { text: "Play a full match" }],
          why: "It is usually best to avoid high-impact activities, such as running, football, tennis, squash and contact sports, because there is more risk of breaking a bone.",
        },
        {
          id: "warm-up",
          situation: "A class warm-up starts with toe-touching.",
          options: [{ text: "Check with your team whether bending is safe", best: true }, { text: "Join in anyway" }],
          why: "You may also be advised to avoid exercises where you repeatedly bend forward at the waist, such as toe-touching and sit-ups.",
        },
        {
          id: "new-pain",
          situation: "On a walk, you get a sudden, unusual pain in your back.",
          options: [{ text: "Stop, and speak to a doctor straight away", best: true }, { text: "Walk it off" }],
          why: "Stop if you get any sudden symptoms, such as unusual back or bone pain, chest pain, feeling dizzy or breathing problems, and speak to a doctor straight away.",
        },
        {
          id: "start",
          situation: "You want to be more active but don't know where to begin.",
          options: [{ text: "Start by moving around the house more", best: true }, { text: "Start with a run" }],
          why: "To start with, try to reduce the time you spend sitting or lying down during the day, and move around the house doing everyday things.",
        },
      ],
    },
    sources: [MAC_EXSAFE, PCUK_SYMPTOMS, MAC_MANAGE],
    quiz: {
      question: "Which of these is usually safe if you have bone secondaries?",
      options: [{ text: "Walking", right: true }, { text: "Running" }, { text: "Squash" }],
      why: "Low-impact activities that are usually safe include walking, dancing, climbing stairs, swimming, cycling and light-resistance exercises.",
    },
  },
  {
    id: "bmet-teeth",
    kicker: "Dental care",
    question: "Why does dental care matter on bone medicines?",
    hook: "Bone-strengthening drugs can, rarely, harm the jawbone. A dental check first and good daily mouth care lower the risk.",
    short: "Rarely, bisphosphonates and denosumab can damage the jawbone, which is called osteonecrosis of the jaw. Having a dental check-up first, keeping your teeth and gums clean and telling your dentist about your treatment all help lower the risk. Tell your cancer doctor and dentist straight away about jaw pain, loose teeth or gum problems.",
    sections: [
      {
        heading: "A rare jaw problem",
        paragraphs: [
          "Rarely, bisphosphonates and denosumab can affect the jawbone. Healthy bone in the jaw becomes damaged and dies, which is called osteonecrosis of the jaw.",
          "These drugs are a very important part of treatment for people with some types of cancer, and the risk is still low. The risk is lower with tablets than with treatment into a vein.",
        ],
      },
      {
        heading: "See a dentist first",
        paragraphs: [
          "Your treatment team will recommend you see a dentist before starting bone-strengthening drugs. Have a dental check-up and any treatment you need before you start.",
          "If you do not have a dentist, or you are having difficulty registering with one, let your treatment team know. If you have any mouth ulcers or sores, you should not start denosumab until they have healed.",
          "If you need a tooth removed, you may need to wait for the area to fully heal before starting bone-strengthening drugs. This usually takes about 4 to 6 weeks.",
        ],
      },
      {
        heading: "Looking after your mouth",
        paragraphs: [
          "Good dental hygiene can help reduce the risk. This includes brushing your teeth and flossing, making sure dentures fit well, and having regular dental check-ups.",
          "Always tell your dentist that you are taking these treatments. People who smoke are at more risk, so speak to your treatment team or GP if you need support with stopping smoking.",
        ],
      },
      {
        heading: "Dental treatment during treatment",
        paragraphs: [
          "Avoid dental treatment that could affect your jawbone while you are having these drugs, such as having a tooth or root removed or dental implants put in. You can still have fillings, gum treatments, or a scale and polish.",
          "If you need dental treatment, speak to your treatment team first. Do not stop taking bone-strengthening drugs unless your treatment team or dentist tells you to.",
        ],
      },
      {
        heading: "Signs to report",
        paragraphs: [
          "Tell both your cancer doctor and your dentist straight away if you have pain, swelling or redness in your jaw or gums, gum infections, loose teeth or poor healing of the gums. Some people notice numbness or a feeling of heaviness in the jaw.",
          "Rarely, osteonecrosis can affect the bones around the ears. Tell your team straight away if you have ear pain, an ear infection or discharge from your ear.",
        ],
      },
    ],
    helps: [
      "Have a dental check-up and any treatment you need before you start.",
      "Brush and floss regularly, and make sure dentures fit well.",
      "Always tell your dentist you are having bone-strengthening drugs.",
      "Speak to your treatment team before you have any dental treatment.",
      "Tell your cancer doctor and dentist straight away about jaw pain, loose teeth or gum problems.",
      "Show your dental alert card, if you are given one, to a dentist if you get symptoms.",
    ],
    tryThisWeek: [
      "Book a dental check-up.",
      "Brush and floss every day.",
      "Tell your dentist about your treatment.",
    ],
    ask: "Do I need a dental check-up before I start, and what should I do if I need dental treatment?",
    interactive: {
      kind: "signs",
      title: "Mouth and jaw changes to report",
      intro: "Tick any you have noticed. Tell your cancer doctor and your dentist straight away.",
      signs: [
        "Pain in my jaw",
        "Swelling in my jaw",
        "Red or infected gums",
        "Loose teeth",
        "Gums slow to heal after dental work",
        "Bone showing in my mouth",
        "Numbness or heaviness in my jaw",
        "Ear pain or discharge",
      ],
      after: "These can have less serious causes. But if you have any of them, tell both your cancer doctor and your dentist straight away.",
      copyHeading: "Mouth and jaw changes I have noticed",
    },
    sources: [MAC_BISPH, CRUK_ONJ, BCN_BONE, MAC_DENO],
    quiz: {
      question: "Which dental treatments can you usually still have while on bisphosphonates?",
      options: [{ text: "Fillings, gum treatments, or a scale and polish", right: true }, { text: "Dental implants" }, { text: "Having a tooth removed without telling your team" }],
      why: "You can still have fillings, gum treatments, or a scale and polish.",
    },
  },
  {
    id: "bmet-home",
    kicker: "Home",
    question: "What help can I get at home?",
    hook: "Therapists, nurses, equipment and your council can all make home easier. Most of it starts with asking.",
    short: "If moving around or everyday tasks are getting harder, your GP, cancer doctor or specialist nurse can tell you what help there is. Physiotherapists and occupational therapists can advise on walking aids and equipment, and district nurses can arrange things like a pressure-relieving mattress. Anyone can ask their council for a free care needs assessment.",
    sections: [
      {
        heading: "Help to stay independent",
        paragraphs: [
          "Some people with secondary bone cancer may have difficulty walking or moving around, which can make simple tasks difficult. Your GP, cancer doctor or specialist nurse can tell you what support is available and how to access it.",
          "Secondary bone cancer in your arms may make day-to-day tasks such as eating or drying your hair painful or difficult. An occupational therapist can suggest different ways of doing things, or equipment that can help make things easier for you.",
        ],
      },
      {
        heading: "Physiotherapists and occupational therapists",
        paragraphs: [
          "A physiotherapist gives advice about exercise and mobility. They can assess whether a walking stick or walking frame may help, and help you with moving around at home.",
          "An occupational therapist can arrange aids such as toilet frames, handrails or a wheelchair, and changes such as safety rails in the bathroom. They can also suggest ways to improve your energy levels and be more active.",
        ],
      },
      {
        heading: "Equipment around the house",
        paragraphs: [
          "A raised toilet seat or a commode, handrails, slip mats and shower seats can make going to the toilet and bathing safer. Furniture raisers or a riser recliner chair can make a bed or chair easier to get in and out of.",
          "District nurses can arrange a pressure-relieving mattress, a commode or a hospital bed at home. Your local council can also assess your home for free, for changes such as a ramp up to your door or a handrail by your steps.",
        ],
      },
      {
        heading: "A care needs assessment",
        paragraphs: [
          "If you need help to cope day to day, contact social services at your local council and ask for a needs assessment. The needs assessment is free and anyone can ask for one.",
          "Someone from the council, such as a social worker or occupational therapist, will ask how you manage everyday tasks like washing, dressing and cooking. Give as much detail as you can, even about the little things, and have a friend or relative with you if possible.",
          "You will generally be expected to pay towards the cost of social care, depending on your finances. The NHS can provide most care, support and equipment for free.",
        ],
      },
      {
        heading: "Nurses and other support",
        paragraphs: [
          "Community or district nurses can make regular home visits to give nursing care and support your carers. Palliative care nurses are experts in managing pain and other symptoms, and in some areas Marie Curie nurses or healthcare assistants can help, sometimes overnight.",
          "The British Red Cross can lend equipment such as wheelchairs and commodes and help with things like shopping. You may also be able to apply for a Blue Badge to park nearer to shops and services, and you can talk to Macmillan's advisers about money on 0808 808 00 00.",
        ],
      },
    ],
    helps: [
      "Ask your GP, cancer doctor or specialist nurse what support is available.",
      "Ask to see an occupational therapist about equipment and easier ways of doing things.",
      "Ask a physiotherapist whether a walking stick, frame or wheelchair could help.",
      "Contact your local council's social services and ask for a free needs assessment.",
      "In the assessment, mention every task you struggle with, even the little ones.",
      "Tell someone in your healthcare team as soon as possible if you are worried about how you will manage.",
    ],
    tryThisWeek: [
      "Ask your team what support there is.",
      "Ask your council for a needs assessment.",
      "List the tasks you struggle with.",
    ],
    ask: "Could I be referred to an occupational therapist or physiotherapist to help me manage at home?",
    interactive: {
      kind: "flip-cards",
      title: "Who can help at home",
      intro: "Turn a card to see what each person can do.",
      cards: [
        { id: "gp", front: "Your GP", when: "When you are at home", back: "Has overall responsibility for your care at home, prescribes medicines and arranges help from other professionals." },
        { id: "physio", front: "Physiotherapist", when: "Walking and moving", back: "Advises on exercise and mobility, and whether a walking stick, frame or wheelchair may help." },
        { id: "ot", front: "Occupational therapist", when: "Everyday tasks", back: "Arranges aids such as toilet frames and handrails, and suggests easier ways of doing things." },
        { id: "district", front: "District nurse", when: "Nursing care at home", back: "Makes home visits, gives nursing care and can arrange a pressure-relieving mattress or a commode." },
        { id: "palliative", front: "Palliative care nurse", when: "Pain and other symptoms", back: "An expert in managing pain and other symptoms, who also gives emotional support. These services are free." },
        { id: "council", front: "Social services", when: "Help to cope day to day", back: "Your council can do a free needs assessment and recommend equipment, home changes or a paid carer." },
      ],
    },
    sources: [MAC_MANAGE, MAC_MOBILITY, MAC_CARE_ADV, MAC_PAIN, MAC_EQUIP, NHS_NEEDS],
    quiz: {
      question: "Who can ask their council for a care needs assessment?",
      options: [{ text: "Anyone", right: true }, { text: "Only people over 75" }, { text: "Only people already in hospital" }],
      why: "The needs assessment is free and anyone can ask for one.",
    },
  },
  {
    id: "bmet-mood",
    kicker: "Support",
    question: "How can I cope with my feelings, and where can I get support?",
    hook: "Fear, anger, sadness and uncertainty are all natural. Talking helps, and support is there, including right now if you need it.",
    short: "It is common to have many different feelings with advanced cancer, and there is no right or wrong way to feel. Talking to someone you trust, your team or a support line can help, and if low feelings last more than 2 weeks, talk to your doctor or nurse. If you ever feel you cannot keep yourself safe, call 999 or go to A&E, or call Samaritans free on 116 123.",
    sections: [
      {
        heading: "Many feelings",
        paragraphs: [
          "It is common to have many different emotions when coping with advanced cancer. You may feel uncertain and frightened about the future, or angry and sad about the effect the cancer is having on you and those close to you.",
          "There is no right or wrong way to feel. Difficult feelings usually become easier to manage with time and support from family, friends and healthcare professionals.",
        ],
      },
      {
        heading: "Pain, worry and uncertainty",
        paragraphs: [
          "Your feelings can also affect your pain. Anxiety can make it worse, and feeling low can make you more aware of your pain. When your pain is well controlled, it will improve the way you feel.",
          "For many people, uncertainty can be the hardest part. Thinking about what you can control right now can help, such as the choices you make about treatment, or how you use your time.",
        ],
      },
      {
        heading: "Talking helps",
        paragraphs: [
          "Talking about your feelings with someone you trust, such as a close friend, partner or family member, can help. Your GP, specialist nurse or hospital team can support you too, and can refer you to a counsellor or psychologist.",
          "You can also talk to people going through similar experiences, through a support group or an online community. The Macmillan Support Line is free on 0808 808 00 00, 7 days a week, 8am to 8pm, and the Marie Curie Support Line is free on 0800 090 2309.",
          "Breast Cancer Now's specialist nurses are on 0808 800 6000, and Prostate Cancer UK's Specialist Nurses are on 0800 074 8383.",
        ],
      },
      {
        heading: "When low mood lasts",
        paragraphs: [
          "Feeling sad at times is normal. But if you feel low most of the time, lose interest in things you used to enjoy, or notice changes in sleeping, eating or concentration for more than 2 weeks, talk to your doctor or nurse.",
          "Your GP, cancer doctor or palliative care doctor may be able to give you medicines to help. In England, you can contact NHS talking therapies yourself, or your GP can refer you. Antidepressants should not be stopped suddenly, so follow your doctor's advice.",
        ],
      },
      {
        heading: "If you are struggling right now",
        paragraphs: [
          "If you have thoughts of suicide or self-harm, contact your GP or specialist nurse straight away, or go to A&E. You can call Samaritans free on 116 123, any time, day or night.",
          "For urgent help with your mental health, call 111 and choose the mental health option, or ask for an urgent GP appointment.",
          "Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Talk about how you feel with someone you trust.",
      "Talk to your doctor or nurse if low feelings go on for more than 2 weeks.",
      "Ask your GP or cancer doctor to refer you to a counsellor or psychologist.",
      "Call the Macmillan Support Line free on 0808 808 00 00, or Marie Curie free on 0800 090 2309.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "If you do not feel you can keep yourself safe, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Tell someone you trust how you feel.",
      "Note low feelings lasting 2 weeks.",
      "Save the support line numbers.",
    ],
    ask: "Could I talk to a counsellor or psychologist, and who can support my family too?",
    interactive: {
      kind: "signs",
      title: "Feelings to tell your doctor or nurse",
      intro: "Tick any you have had most of the time. If they go on for more than 2 weeks, talk to your doctor or nurse.",
      signs: [
        "Feeling low or sad most of the time",
        "Losing interest in things I enjoyed",
        "Changes in my sleep",
        "Changes in my eating",
        "Trouble concentrating",
        "Feeling helpless or vulnerable",
        "Problems starting or finishing tasks",
      ],
      after: "If you have thoughts of self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. Samaritans is free on 116 123.",
      copyHeading: "How I have been feeling",
    },
    sources: [MAC_FEEL_ADV, PCUK_PAIN, MAC_PAIN, BCN_BONE, MAC_DEPRESSION, MAC_SUPPORT_LINE, MC_LINE, PCUK_NURSES, MAC_TALKING, SAMARITANS, NHS_URGENT_MH],
    quiz: {
      question: "What usually helps difficult feelings become easier to manage?",
      options: [{ text: "Time and support from others", right: true }, { text: "Keeping them to yourself" }, { text: "Staying positive all the time" }],
      why: "Difficult feelings usually become easier to manage with time and support from family, friends and healthcare professionals.",
    },
  },
];
