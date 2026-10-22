import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Joint hypermobility page's pieces (content/library-conditions/body-more.ts). Every
// sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's `sources`;
// nothing is added that those pages do not say. Most of it comes from the NHS, NHS inform (Scotland), Arthritis UK
// (the charity formerly called Versus Arthritis; versusarthritis.org now redirects to arthritis-uk.org) and the
// Hypermobility Syndromes Association, with The Ehlers-Danlos Society's Beighton score page (which the NHS links to),
// a Chartered Society of Physiotherapy (APCP) leaflet, Samaritans and the government's pages on Access to Work,
// reasonable adjustments and the Equality Act. Ehlers-Danlos Support UK's own site did not answer today, so its
// helpline is given as the NHS page gives it. Exercises are described only as the sources describe them. The support
// answer follows safe-messaging guidance, with the crisis routes exactly as the NHS and Samaritans give them.
// General information only; it never replaces what a person's own GP or healthcare team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const auk = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const hmsa = (label: string, path: string): LearnSource => ({ label: `Hypermobility Syndromes Association: ${label}`, url: `https://www.hypermobility.org/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_JHS = nhs("Joint hypermobility syndrome", "conditions/joint-hypermobility-syndrome/");
const NHS_EDS = nhs("Ehlers-Danlos syndromes", "conditions/ehlers-danlos-syndromes/");
const NHS_POTS = nhs("Postural tachycardia syndrome (PoTS)", "conditions/postural-tachycardia-syndrome/");
const NHS_SHOULDER = nhs("Dislocated shoulder", "conditions/dislocated-shoulder/");
const NHS_KNEECAP = nhs("Dislocated kneecap", "conditions/dislocated-kneecap/");
const NHS_SPRAINS = nhs("Sprains and strains", "conditions/sprains-and-strains/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_PAIN = nhs("10 ways to reduce pain", "live-well/pain/10-ways-to-ease-pain/");
const NHS_TIRED = nhs("Tiredness and fatigue", "symptoms/tiredness-and-fatigue/");
const NHS_PHYSIO = nhs("Physiotherapy", "tests-and-treatments/physiotherapy/");
const NHS_OT = nhs("Occupational therapy", "tests-and-treatments/occupational-therapy/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");
const NHS_TALKING = nhs("Find NHS talking therapies for anxiety and depression", "nhs-services/mental-health-services/find-nhs-talking-therapies-for-anxiety-and-depression/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const NHSI_HM: LearnSource = { label: "NHS inform: Joint hypermobility", url: "https://www.nhsinform.scot/illnesses-and-conditions/muscle-bone-and-joints/conditions-that-can-affect-multiple-parts-of-the-body/joint-hypermobility/" };

const AUK_HM = auk("Joint hypermobility", "understanding-arthritis/conditions/joint-hypermobility/");
const AUK_FATIGUE = auk("Coping with and managing arthritis fatigue", "understanding-arthritis/managing-arthritis-symptoms/managing-fatigue/");
const AUK_4PS = auk("The 4 Ps: strategies you can use to cope with fatigue", "understanding-arthritis/managing-arthritis-symptoms/managing-fatigue/the-4-ps-strategies-you-can-use-to-cope-with-fatigue/");
const AUK_MENTAL = auk("Mental health and arthritis", "living-with-arthritis/health-and-wellbeing/mental-health-and-arthritis/");
const AUK_SCHOOLS = auk("Information for schools", "understanding-arthritis/young-people-and-families/information-for-schools/");

const HMSA_HOME = hmsa("Home", "");
const HMSA_WHAT = hmsa("What are hypermobility syndromes?", "what-is-hypermobility");
const HMSA_HSD = hmsa("hEDS, JHS and HSD", "hsd-jhs-heds");
const HMSA_FAQ = hmsa("FAQs", "faqs");
const HMSA_SUPPORT = hmsa("Support we give", "support-and-advice");
const HMSA_GROUPS = hmsa("Patient support groups", "support-groups");
const HMSA_EXERCISE = hmsa("Exercise", "exercise");
const HMSA_PAIN = hmsa("Pain management", "pain-management");
const HMSA_SLEEP = hmsa("Sleep and hypermobility", "sleep");
const HMSA_SCHOOL = hmsa("Kids Zone: Coping at school", "kidz-zone/coping-at-school");
const HMSA_PE = hmsa("Kids Zone: PE and exercise", "kidz-zone/p.e.-and-exercise");
const HMSA_KIDS_PAIN = hmsa("Kids Zone: Pain and tiredness", "kidz-zone/pain-and-tiredness");

const EDS_SOCIETY: LearnSource = { label: "The Ehlers-Danlos Society: Assessing joint hypermobility", url: "https://www.ehlers-danlos.com/assessing-joint-hypermobility/" };
const CSP_APCP: LearnSource = { label: "Chartered Society of Physiotherapy (APCP): Hypermobility and Hypermobility Spectrum Disorder, information for parents and carers", url: "https://apcp.csp.org.uk/system/files/documents/2023-03/Hypermobility%20and%20Hypermobility%20Spectrum%20Disorder%202023.pdf" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

const GOV_ATW = gov("Access to Work", "access-to-work");
const GOV_ATW_ELIGIBILITY = gov("Access to Work: eligibility", "access-to-work/eligibility");
const GOV_ADJUSTMENTS = gov("Reasonable adjustments for workers with disabilities or health conditions", "reasonable-adjustments-for-disabled-workers");
const GOV_DISABILITY = gov("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");

export const hypermobilityAnswers: LearnArticle[] = [
  {
    id: "hmob-what-it-is",
    kicker: "Understanding",
    question: "What is joint hypermobility?",
    hook: "Joints that bend further than most people's. For many people it causes no problems at all; for some it brings pain and tiredness.",
    short: "Joint hypermobility means some or all of your joints can move further than most people's, which some people call being double-jointed. Many people with hypermobile joints have no problems, and it can even be an advantage in sport and dance. For a smaller number it brings symptoms such as pain, tiredness and injuries.",
    sections: [
      {
        heading: "Joints that move further",
        paragraphs: [
          "Hypermobility means you can move some or all of your joints more than most people can. Some people call this having loose joints or being double-jointed.",
          "Hyper means more and mobility means movement. Ligaments give a joint its stability, and in hypermobility the ligaments are lax, so the joints have more flexibility.",
        ],
      },
      {
        heading: "Often no problem at all",
        paragraphs: [
          "Many people with hypermobile joints do not have any problems. For some, the extra flexibility is a benefit, for ballet dancers or gymnasts for example.",
          "A Chartered Society of Physiotherapy leaflet says it is not an illness or a disease, just the way someone is put together. Hypermobility is common in gymnasts, athletes, dancers and musicians.",
        ],
      },
      {
        heading: "When it brings symptoms",
        paragraphs: [
          "For a smaller number of people, hypermobility comes with symptoms. This is called symptomatic hypermobility.",
          "Hypermobility can cause some people pain, fatigue and injuries to joints and ligaments. When this happens, it can be a sign of a hypermobility syndrome, such as hypermobility spectrum disorder or hypermobile Ehlers-Danlos syndrome.",
        ],
      },
      {
        heading: "Why joints are looser",
        paragraphs: [
          "Joint hypermobility often runs in families and cannot be prevented. Usually the ligaments that should support the joints are weak, because the collagen that strengthens them is different from other people's.",
          "Collagen is found throughout the body, including in the skin and ligaments. The shape of your bones can matter too: if the socket of your hip or shoulder is shallow, that joint can move further than usual.",
        ],
      },
      {
        heading: "Age and who it affects",
        paragraphs: [
          "Joint hypermobility syndrome usually affects children and young people and often gets better as you get older. The collagen fibres in ligaments tend to bind together more with age, which is one reason many people become stiffer.",
          "Hypermobility is more common in women and children, and in people of Afro-Caribbean and Asian descent. There is no cure for being hypermobile, but there are many things that can help manage symptoms.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you or your child have joint hypermobility syndrome.",
      "Keep gently active: not doing any exercise can make symptoms worse.",
      "Do not overextend your joints just because you can.",
      "Speak to your healthcare professional if you have symptoms beyond your joints, such as dizziness or stomach problems.",
    ],
    tryThisWeek: [
      "See a GP if you have symptoms.",
      "Keep gently active.",
      "Do not overextend your joints.",
    ],
    ask: "Is my hypermobility causing my symptoms, or could something else be going on?",
    interactive: {
      kind: "flip-cards",
      title: "Words you may hear",
      intro: "Turn each card to see what it means.",
      cards: [
        { id: "hypermobility", front: "Hypermobility", when: "The basic idea", back: "Joints that can move further than most people's. Hyper means more and mobility means movement." },
        { id: "double-jointed", front: "Double-jointed", when: "An everyday name", back: "What some people call having loose or very flexible joints." },
        { id: "ligaments", front: "Ligaments", when: "What holds a joint steady", back: "Tough bands of connective tissue that link 2 bones at a joint. In hypermobility they are lax." },
        { id: "collagen", front: "Collagen", when: "Why joints are looser", back: "A protein found in skin and ligaments. If it is more stretchy than it should be, joints move further." },
        { id: "symptomatic", front: "Symptomatic hypermobility", when: "When it causes problems", back: "Hypermobility that comes with symptoms, such as pain, fatigue or dislocations." },
      ],
    },
    sources: [NHS_JHS, AUK_HM, HMSA_WHAT, NHSI_HM, CSP_APCP],
    quiz: {
      question: "Does joint hypermobility always cause problems?",
      options: [{ text: "No, many people have no problems", right: true }, { text: "Yes, always" }, { text: "Only in older people" }],
      why: "Many people with hypermobile joints do not have any problems. For some, the extra flexibility is a benefit.",
    },
  },
  {
    id: "hmob-when-a-problem",
    kicker: "Symptoms",
    question: "When does hypermobility start to cause problems?",
    hook: "Flexible joints can be fine for years. Then pain, tiredness or injuries start, often after something in life changes.",
    short: "Some people with hypermobile joints get pain and stiffness, tiredness, repeated sprains or joints that dislocate. Symptoms can affect many parts of the body, not just the joints, and they vary over time. They often begin after something changes, such as an injury, an illness, stress or pregnancy.",
    sections: [
      {
        heading: "Joint symptoms",
        paragraphs: [
          "You may have joint hypermobility syndrome if you often get tired, even after rest, keep getting pain and stiffness in your joints or muscles, or keep getting sprains and strains. Some people keep dislocating their joints, which pop out.",
          "Pain and stiffness are often worse towards the end of the day and after physical activity. Clicking joints, back and neck pain, and poor balance and co-ordination are common too.",
        ],
      },
      {
        heading: "Beyond the joints",
        paragraphs: [
          "Hypermobility can cause a range of symptoms that often affect many parts of the body. They can include stomach and digestive problems such as reflux and constipation, bladder and bowel problems, easy bruising, and stretchy or soft skin.",
          "Some people find it difficult to sense the position of a joint without being able to see it. This sense is called proprioception.",
        ],
      },
      {
        heading: "Dizziness on standing",
        paragraphs: [
          "Some people with hypermobility also have postural tachycardia syndrome, or PoTS. Your heart rate increases after getting up from sitting or lying down, often making you feel dizzy or lightheaded.",
          "You may be more likely to have PoTS if you have joint hypermobility syndrome. If you have symptoms of PoTS, it is important to get them checked, so see a GP.",
        ],
      },
      {
        heading: "What tips the balance",
        paragraphs: [
          "Symptoms vary a lot between people, and also vary over time for each person. It is common for hypermobility to become symptomatic after something changes that tips the body from coping to not coping.",
          "This can be triggered by many things, including injury, illness, stress, pregnancy, or changes in activity levels, job or home life.",
        ],
      },
      {
        heading: "When to get checked",
        paragraphs: [
          "See a GP if you think you or your child have joint hypermobility syndrome. Feeling worried or anxious can be part of hypermobility too.",
          "If you get a new pain or symptom, the Hypermobility Syndromes Association says it is worth seeing a doctor to get it checked, in case it is something else or there are specific things that can help.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you or your child have joint hypermobility syndrome.",
      "Speak to your healthcare professional about symptoms beyond the joints, such as dizziness or stomach problems.",
      "See a GP if you have symptoms of PoTS, such as feeling dizzy after standing up.",
      "Get a new pain or symptom checked by a doctor.",
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Mention dizziness on standing.",
      "Get new symptoms checked.",
    ],
    ask: "Could any of my symptoms be caused by something other than hypermobility?",
    interactive: {
      kind: "signs",
      title: "Symptoms to mention",
      intro: "Tick the ones you have. Your list can help your GP see the whole picture.",
      signs: ["Pain or stiffness in joints or muscles", "Tired, even after rest", "Repeated sprains or strains", "Joints that pop out", "Clicking joints", "Poor balance or co-ordination", "Dizzy after standing up", "Reflux or constipation", "Bladder or bowel problems", "Bruising easily"],
      after: "Take your list to your GP. If you get a new pain or symptom, it is worth getting it checked, in case it is something else.",
      copyHeading: "My symptoms",
    },
    sources: [NHS_JHS, AUK_HM, HMSA_WHAT, HMSA_FAQ, NHS_POTS, NHSI_HM],
    quiz: {
      question: "What often comes before hypermobility starts causing symptoms?",
      options: [{ text: "A change such as injury, illness or stress", right: true }, { text: "Drinking more water" }, { text: "Getting new glasses" }],
      why: "It is common for hypermobility to become symptomatic after something changes, such as injury, illness, stress, pregnancy, or changes in activity levels, job or home life.",
    },
  },
  {
    id: "hmob-hsd-heds",
    kicker: "Conditions",
    question: "What are hypermobility spectrum disorder and hypermobile EDS?",
    hook: "Two names you may hear for symptoms caused by hypermobility. The label matters less than how they are managed, which is the same.",
    short: "Hypermobility spectrum disorder (HSD) and hypermobile Ehlers-Danlos syndrome (hEDS) are the two most common hypermobility syndromes. They can cause the same problems and are managed in the same way. HSD was previously known as joint hypermobility syndrome.",
    sections: [
      {
        heading: "Two related conditions",
        paragraphs: [
          "The term hypermobility syndromes usually refers to two related conditions: hypermobility spectrum disorder, previously known as joint hypermobility syndrome, and Ehlers-Danlos syndrome. In both, joint hypermobility is the main feature and the cause of symptoms such as pain, fatigue and injuries.",
          "Whether your diagnosis is HSD or hEDS, both can cause the same number of problems and be managed in the same way. The NHS says HSD is treated in the same way as hEDS.",
        ],
      },
      {
        heading: "Ehlers-Danlos syndromes",
        paragraphs: [
          "Ehlers-Danlos syndromes, or EDS, are a group of rare inherited conditions that affect connective tissue. Connective tissues provide support in skin, tendons, ligaments, blood vessels, internal organs and bones.",
          "There are 13 types of EDS, most of which are rare. Hypermobile EDS is the most common type.",
        ],
      },
      {
        heading: "What hEDS can bring",
        paragraphs: [
          "People with hEDS may have loose, unstable joints that dislocate easily, joint pain and clicking joints, extreme tiredness, and skin that bruises easily. Some have digestive problems such as heartburn and constipation, or dizziness and an increased heart rate after standing up.",
          "Currently there are no tests to confirm whether someone has hEDS. The diagnosis is made based on a person's medical history and a physical examination. There is no genetic test for hEDS or HSD, but there are genetic tests for rarer forms of EDS.",
        ],
      },
      {
        heading: "Why so many names",
        paragraphs: [
          "You may also hear joint hypermobility syndrome, EDS type 3 or symptomatic hypermobility. The Hypermobility Syndromes Association says everyone in this group may have the same potential symptoms and need the same symptom-based treatment and management.",
          "The 2017 criteria for hEDS and HSD are still being validated. More research is needed before clear guidelines can tell the people in this group apart.",
        ],
      },
      {
        heading: "In families",
        paragraphs: [
          "Hypermobile EDS is passed on by 1 parent, and there is a 1 in 2 chance of each of their children developing the condition. The severity can vary within the same family.",
          "A person with EDS can only pass on the same type of EDS to their children. For example, the children of someone with hypermobile EDS cannot inherit vascular EDS, a rare type that is often considered the most serious.",
        ],
      },
    ],
    helps: [
      "See a GP if you have several troublesome symptoms of EDS.",
      "Ask whether a referral to a joint specialist, a rheumatologist, could help if you have problems with your joints.",
      "Ask about genetic counselling to learn how your condition is inherited.",
      "Call Ehlers-Danlos Support UK's free helpline on 0800 907 8518.",
      "Call the Hypermobility Syndromes Association helpline on 0333 011 6388.",
    ],
    tryThisWeek: [
      "Talk to your GP about your symptoms.",
      "Ask about a specialist referral.",
      "Call a hypermobility helpline.",
    ],
    ask: "Do my symptoms fit HSD or hEDS, and does the difference change my care?",
    interactive: {
      kind: "flip-cards",
      title: "Names you may hear",
      intro: "Turn each card to see what it means.",
      cards: [
        { id: "hsd", front: "Hypermobility spectrum disorder", when: "HSD", back: "Problems caused by hypermobility without one of the specific EDS conditions. It is treated in the same way as hEDS." },
        { id: "heds", front: "Hypermobile EDS", when: "hEDS, the most common EDS", back: "No test can confirm it yet. It is diagnosed from a person's medical history and a physical examination." },
        { id: "jhs", front: "Joint hypermobility syndrome", when: "JHS, an older name", back: "The name HSD replaced. Still used for symptomatic hypermobility that does not fit a known syndrome." },
        { id: "rare", front: "Rarer types of EDS", when: "Such as classical or vascular EDS", back: "A genetics service can assess these, and a genetic blood test may confirm the diagnosis." },
        { id: "symptomatic", front: "Symptomatic hypermobility", when: "A broad term", back: "A fitting term for anyone who does not clearly fit a more specific diagnosis." },
      ],
    },
    sources: [NHS_EDS, AUK_HM, HMSA_HSD, NHSI_HM],
    quiz: {
      question: "How are HSD and hEDS managed?",
      options: [{ text: "In the same way", right: true }, { text: "HSD always needs surgery" }, { text: "hEDS cannot be managed" }],
      why: "Whether your diagnosis is HSD or hEDS, both can cause the same number of problems and be managed in the same way.",
    },
  },
  {
    id: "hmob-diagnosis",
    kicker: "Diagnosis",
    question: "How is joint hypermobility assessed?",
    hook: "A few simple bending tests start it off. But the score alone cannot confirm a diagnosis.",
    short: "A GP will usually check how flexible your joints are with the Beighton score, 5 quick tests that add up to 9 points. The score cannot confirm a diagnosis on its own, so doctors also ask about your symptoms and family history and may arrange tests to rule out other conditions, like arthritis.",
    sections: [
      {
        heading: "Seeing a GP",
        paragraphs: [
          "See a GP if you think you or your child have joint hypermobility syndrome. The GP will usually check the flexibility of your joints using a test called the Beighton scoring system.",
          "They may also refer you for a blood test or X-ray to help rule out other conditions, like arthritis.",
        ],
      },
      {
        heading: "The Beighton score",
        paragraphs: [
          "The Beighton score is a series of 5 tests that add up to a total of 9 points. You get 1 point for each little finger that bends back beyond 90 degrees, each thumb that touches the forearm, and each elbow and knee that bends backwards, and 1 point for placing your palms flat on the floor with straight legs.",
          "NHS inform says a score of 4 or more makes joint hypermobility likely. The Ehlers-Danlos Society counts 5 or more as positive for adults, 6 for children before puberty, and 4 for adults over 50.",
        ],
      },
      {
        heading: "More than a score",
        paragraphs: [
          "The Beighton score cannot be used to confirm a diagnosis, because it is important to look at all the joints and take symptoms into account. It does not include joints such as the shoulders and hips.",
          "Your doctor will ask questions, take a family history, rule out other conditions and examine your joints. They will also ask about pain and dislocations and how you judge where your body is, and check for flat feet or a curved spine.",
        ],
      },
      {
        heading: "Further referrals",
        paragraphs: [
          "The GP may refer you to a joint specialist, a rheumatologist, if you have problems with your joints and they suspect EDS. If one of the rare types of EDS is possible, they can refer you to your local genetics service, where a genetic blood test may confirm the diagnosis.",
          "There is no genetic test for hEDS or HSD. Depending on the outcome of the assessment, you may receive a diagnosis of hypermobility spectrum disorder or Ehlers-Danlos syndrome.",
        ],
      },
      {
        heading: "After a diagnosis, or while you wait",
        paragraphs: [
          "The Hypermobility Syndromes Association says the average gap between symptoms starting and diagnosis is somewhere between 10 and 15 years. If you are waiting for a diagnosis, there are plenty of ways to manage your symptoms.",
          "After diagnosis the focus is on managing symptoms, and often your GP can refer you on to physiotherapy, podiatry or pain management. Children are more hypermobile than adults, so rather than a diagnosis that may turn out to be wrong, their hypermobility is often recognised and their symptoms managed.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you or your child have joint hypermobility syndrome.",
      "Tell your doctor about your pain, any dislocations and your family history.",
      "Ask whether tests are needed to rule out other conditions, like arthritis.",
      "After a diagnosis, ask about referrals for physiotherapy, podiatry or pain management.",
      "Start managing your symptoms while you wait for a diagnosis.",
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Note dislocations and family history.",
      "Ask about physiotherapy.",
    ],
    ask: "What did my assessment show, and which referrals would help me now?",
    interactive: {
      kind: "timeline",
      title: "From first visit to support",
      steps: [
        { id: "gp", when: "First", title: "Seeing a GP", points: ["The Beighton score checks how far some joints bend.", "It adds up to 9 points."] },
        { id: "history", when: "Next", title: "Questions and examination", points: ["Pain, dislocations and family history.", "A look at all the joints, not just the score."] },
        { id: "tests", when: "If needed", title: "Ruling out other conditions", points: ["A blood test or X-ray.", "To check for things like arthritis."] },
        { id: "referral", when: "Sometimes", title: "Specialist referral", points: ["A rheumatologist for joint problems.", "A genetics service if a rare EDS is possible."] },
        { id: "manage", when: "Then", title: "Managing symptoms", points: ["Physiotherapy, podiatry or pain management.", "Plenty of self-management helps too."] },
      ],
    },
    sources: [NHS_JHS, AUK_HM, NHSI_HM, EDS_SOCIETY, NHS_EDS, HMSA_SUPPORT, HMSA_FAQ],
    quiz: {
      question: "How many points is the Beighton score out of?",
      options: [{ text: "9", right: true }, { text: "5" }, { text: "100" }],
      why: "The Beighton score is a series of 5 tests that add up to a total of 9 points.",
    },
  },
  {
    id: "hmob-strengthening",
    kicker: "Treatment",
    question: "How does building strength protect hypermobile joints?",
    hook: "Stronger muscles can steady joints that loose ligaments cannot. That is why strength and fitness are the main treatment.",
    short: "The main treatment for hypermobility is improving muscle strength and fitness so your joints are better protected. A physiotherapist can help reduce pain and the risk of dislocations and improve strength, posture and balance. Ask for exercises that suit you, and speak to your GP first if you have not exercised for some time.",
    sections: [
      {
        heading: "The main treatment",
        paragraphs: [
          "There is no cure for joint hypermobility syndrome. The main treatment is improving muscle strength and fitness so your joints are better protected.",
          "Physical therapies can help reduce pain and the risk of dislocations, improve muscle strength and fitness, and improve your posture and balance.",
        ],
      },
      {
        heading: "What exercise can do",
        paragraphs: [
          "The Hypermobility Syndromes Association says exercise can be key to managing a hypermobility syndrome. It can improve proprioception and balance, improve muscle strength, help stabilise hypermobile joints and reduce long-term pain.",
          "A Chartered Society of Physiotherapy leaflet says strengthening exercises strengthen the muscles around a joint, helping to reduce symptoms such as pain or tiredness.",
        ],
      },
      {
        heading: "Seeing a physiotherapist",
        paragraphs: [
          "A GP may refer you to a physiotherapist, occupational therapist or podiatrist. In many areas you may also be able to get NHS physiotherapy without a GP referral, though there may be a long waiting list.",
          "It helps to have a physiotherapist with knowledge of hEDS or HSD, as some physiotherapy treatments can make symptoms worse. You may be given an exercise programme with strength and balance training, special stretching techniques and advice about pacing.",
        ],
      },
      {
        heading: "Kinds of exercise",
        paragraphs: [
          "Static strengthening exercises can help stabilise the joints, and balance and proprioception exercises are encouraged too. Strengthening the tummy muscles matters, because they steady the trunk before you move your arms and legs.",
          "Hydrotherapy can also help strengthen your joints. The water takes the weight off your joints and the warm pool helps relax your muscles, which makes physiotherapy exercises easier.",
        ],
      },
      {
        heading: "Doing it safely",
        paragraphs: [
          "Speak to your GP first if you have not exercised for some time. Do any exercises you are given regularly at home between appointments.",
          "Splinting or taping may support a joint during exercise, so speak to your healthcare provider about these. If you have a rarer condition such as vascular EDS, it is important to discuss exercise with your healthcare professionals, as there may be extra risks.",
        ],
      },
    ],
    helps: [
      "Ask your GP about a referral to a physiotherapist, or check whether you can refer yourself.",
      "Look for a physiotherapist with knowledge of hEDS or HSD.",
      "Do the exercises you are given regularly at home.",
      "Speak to your GP first if you have not exercised for some time.",
      "Ask your healthcare provider about splinting or taping to support a joint during exercise.",
    ],
    tryThisWeek: [
      "Ask about physiotherapy.",
      "Do your home exercises.",
      "Ask about splints or taping.",
    ],
    ask: "Can I see a physiotherapist who knows about hypermobility, and which exercises should I start with?",
    interactive: {
      kind: "flip-cards",
      title: "Who can help",
      intro: "Turn each card to see what each one does.",
      cards: [
        { id: "physio", front: "Physiotherapist", when: "For strength, balance and pain", back: "Can reduce pain and improve strength, fitness and balance, which helps reduce the risk of dislocations." },
        { id: "ot", front: "Occupational therapist", when: "For everyday tasks", back: "Helps you stay independent, advises on gadgets, and shows how to use splints, tape and elasticated bandages." },
        { id: "podiatrist", front: "Podiatrist", when: "For feet and walking", back: "Assesses your feet and walking and can give insoles that support your feet and help prevent injury." },
        { id: "hydro", front: "Hydrotherapy", when: "Exercise in a warm pool", back: "Water takes the weight off your joints and the warmth relaxes muscles, making exercises easier." },
      ],
    },
    sources: [NHS_JHS, AUK_HM, HMSA_EXERCISE, NHSI_HM, CSP_APCP, NHS_PHYSIO, HMSA_PAIN, NHS_ACTIVITY],
    quiz: {
      question: "What is the main treatment for joint hypermobility syndrome?",
      options: [{ text: "Improving muscle strength and fitness", right: true }, { text: "Surgery on the joints" }, { text: "Resting the joints completely" }],
      why: "The main treatment is improving muscle strength and fitness so your joints are better protected.",
    },
  },
  {
    id: "hmob-pain",
    kicker: "Pain",
    question: "How can I manage hypermobility pain?",
    hook: "Pain is common with hypermobility, and it can have more than one cause. Different things help at different times.",
    short: "Pain is a common part of hypermobility syndromes and varies a lot between people. Paracetamol and anti-inflammatory painkillers like ibuprofen may help, and a pharmacist can advise on the best one for you. Heat, relaxation, gentle movement and, when needed, a pain clinic can all play a part.",
    sections: [
      {
        heading: "Pain that varies",
        paragraphs: [
          "Pain is a common part of hypermobility syndromes, and it can vary a lot between people. It can have a variety of causes, so different techniques might help at different times or with different types of pain.",
          "How bad the pain is is not linked to the type of hypermobility syndrome. Someone with HSD can have more problems with pain and fatigue than someone with classical or vascular EDS, and the other way round.",
        ],
      },
      {
        heading: "Painkillers",
        paragraphs: [
          "Paracetamol and anti-inflammatory painkillers like ibuprofen, which comes as tablets, gels and sprays, may help to ease pain. Speak to a pharmacist about the best painkiller for you, and a GP may be able to prescribe stronger painkillers.",
          "Ibuprofen may not be suitable if you have a stomach ulcer or have had one before, have asthma, or have a heart, liver or kidney condition. Do not take ibuprofen tablets for more than 10 days unless a doctor advises it, and see a GP if your pain gets worse or does not go away.",
          "Some people with hEDS or HSD find pain medicine is not effective for them. Some also find local anaesthetic has no effect, so it may help to discuss this with your doctor or dentist beforehand.",
        ],
      },
      {
        heading: "Heat and relaxation",
        paragraphs: [
          "To help ease joint pain and stiffness, you can have warm baths, use hot water bottles or use heat-rub cream. Heat helps with tense, tight muscles, and cold helps with swelling and injuries like sprains.",
          "Daily sessions of muscle relaxation should help, and a physiotherapist can teach you techniques. When pain is intense, breathe slowly and deeply rather than taking shallow, rapid breaths.",
        ],
      },
      {
        heading: "Keep moving",
        paragraphs: [
          "When we are injured, our muscles tighten, which can make pain in hypermobile joints worse. So on a bad pain day, gentle stretching and moving help more than lying on the sofa all day.",
          "If you become more active gradually, it is unlikely you will cause any damage or harm. Distraction helps too, because thinking about pain makes you notice it more.",
        ],
      },
      {
        heading: "If pain is not getting better",
        paragraphs: [
          "If you are in severe pain, or your pain is not getting better, a GP may refer you to a pain clinic. Pain clinics aim to help you develop your own self-help skills as well as control and relieve your pain.",
          "Some people with hEDS or HSD benefit from cognitive behavioural therapy, or CBT, when painkillers are not working. Pain specialists may also give medicines used for nerve pain, which should only be continued if there are clear benefits.",
        ],
      },
    ],
    helps: [
      "Speak to a pharmacist about the best painkiller for you.",
      "Use warm baths, hot water bottles or heat-rub cream for pain and stiffness.",
      "Do gentle stretching and moving, even on a bad pain day.",
      "Breathe slowly and deeply when the pain is intense.",
      "Ask your GP about a pain clinic if your pain is severe or not getting better.",
      "Tell your doctor or dentist beforehand if local anaesthetic has not worked for you.",
    ],
    tryThisWeek: [
      "Ask a pharmacist about painkillers.",
      "Try a warm bath for stiffness.",
      "Keep gently moving on bad days.",
    ],
    ask: "Which painkiller suits me best, and could a pain clinic help?",
    interactive: {
      kind: "scenarios",
      title: "Pain moments",
      scenarios: [
        {
          id: "bad-day",
          situation: "It is a bad pain day and the sofa looks tempting.",
          options: [{ text: "Do some gentle stretching and moving", best: true }, { text: "Lie on the sofa all day" }],
          why: "Lying on the sofa all day can feel nice at the time, but it can make pain worse in the long term.",
        },
        {
          id: "stiff",
          situation: "Your joints feel stiff and sore by the evening.",
          options: [{ text: "Try a warm bath or hot water bottle", best: true }, { text: "Stretch them as far as they go" }],
          why: "To help ease joint pain and stiffness, you can have warm baths, use hot water bottles or use heat-rub cream.",
        },
        {
          id: "dentist",
          situation: "A dental filling is booked, and local anaesthetic did not work for you last time.",
          options: [{ text: "Tell the dentist beforehand", best: true }, { text: "Say nothing and hope it works" }],
          why: "Some people with hEDS or HSD find local anaesthetic has no effect, so it may help to discuss this with your doctor or dentist beforehand.",
        },
      ],
    },
    sources: [HMSA_PAIN, HMSA_FAQ, NHS_JHS, NHS_IBUPROFEN, NHSI_HM, HMSA_KIDS_PAIN, NHS_PAIN, AUK_HM],
    quiz: {
      question: "What do pain clinics aim to do?",
      options: [{ text: "Help you build self-help skills and relieve pain", right: true }, { text: "Replace all exercise" }, { text: "Operate on painful joints" }],
      why: "Pain clinics aim to help you develop your own self-help skills as well as control and relieve your pain.",
    },
  },
  {
    id: "hmob-fatigue",
    kicker: "Energy",
    question: "Why am I so tired, and how can pacing help?",
    hook: "Holding loose joints steady is hard work, even when you do not notice it. Pacing helps your energy go further.",
    short: "Extreme tiredness, or fatigue, is a common symptom of hypermobility. People with a hypermobility syndrome often have to work much harder to do the same things as everyone else. Pacing, which means balancing activity with rest, along with good sleep and gentle exercise, can help.",
    sections: [
      {
        heading: "Why tiredness happens",
        paragraphs: [
          "Extreme tiredness, known as fatigue, is one of the symptoms hypermobility can cause. Fatigue is an overwhelming physical and mental tiredness that does not significantly improve with rest or sleep.",
          "If your joints and muscles are too loose, you have to work very hard, without even thinking about it, to keep everything working. This may be why people with a hypermobility syndrome feel very tired.",
        ],
      },
      {
        heading: "Pacing",
        paragraphs: [
          "Pacing involves balancing periods of activity with periods of rest. It means not overdoing it or pushing yourself beyond your limits, because pushing too hard could slow your long-term progress.",
          "Boom and bust is when you do too much on one day and then feel unable to do anything the next. Avoid repetitive exercises or activities, and take regular breaks instead.",
          "If fatigue is a problem, you can be taught ways to conserve your energy and pace your activities.",
        ],
      },
      {
        heading: "The four Ps",
        paragraphs: [
          "Arthritis UK suggests four Ps: problem solving, planning, prioritising and pacing. Think of them at the beginning of each day or week to help manage your energy.",
          "Break a big job into smaller tasks spread through the day or week, and plan bigger tasks for when you tend to have more energy. Ask whether a job needs doing today, or at all, and whether someone else could help.",
        ],
      },
      {
        heading: "Sleep and energy",
        paragraphs: [
          "Good sleep matters even more for people with long-term health issues, including symptomatic hypermobility. The Hypermobility Syndromes Association says people with long-term conditions may need more sleep, so do not be surprised if you need 9 to 10 hours.",
          "Have regular times for going to bed and getting up, on busy and quiet days alike. Use extra cushions or pillows to support painful or unstable joints, and keep your room dark and at the right temperature for you.",
          "Exercise during the day can improve sleep, and so decrease fatigue, even though it can make you feel more tired in the short term.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "See a GP if you have been feeling tired for a few weeks and are not sure why, or if your tiredness affects your daily life. Do not self-diagnose, as tiredness can have many causes.",
          "If you are still struggling with sleep after a couple of months, speak to your GP. They may be able to refer you for cognitive behavioural techniques designed for insomnia.",
        ],
      },
    ],
    helps: [
      "Think of the four Ps at the start of each day or week.",
      "Break big jobs into smaller tasks, with rest in between.",
      "Take regular breaks instead of doing repetitive activities.",
      "Keep regular times for going to bed and getting up.",
      "Support painful or unstable joints with extra cushions or pillows in bed.",
      "See a GP if tiredness affects your daily life.",
    ],
    tryThisWeek: [
      "Plan your week with the four Ps.",
      "Keep regular sleep times.",
      "Take regular breaks.",
    ],
    ask: "Could an occupational therapist or physiotherapist help me pace my activities and save energy?",
    interactive: {
      kind: "timeline",
      title: "The four Ps, step by step",
      steps: [
        { id: "problem", when: "Step 1", title: "Problem solve", points: ["What is using up your energy?", "Find a way round it, like shopping online."] },
        { id: "plan", when: "Step 2", title: "Plan", points: ["Break big jobs into smaller tasks.", "Do bigger tasks when you have more energy."] },
        { id: "prioritise", when: "Step 3", title: "Prioritise", points: ["Does it need doing today, or at all?", "Could someone else help?"] },
        { id: "pace", when: "Step 4", title: "Pace", points: ["Spread tasks over the day or week.", "Take regular breaks."] },
        { id: "sleep", when: "Every night", title: "Rest well", points: ["Regular bed and wake times.", "Cushions to support sore joints."] },
      ],
    },
    sources: [AUK_HM, AUK_FATIGUE, HMSA_KIDS_PAIN, NHSI_HM, NHS_JHS, NHS_EDS, AUK_4PS, HMSA_SLEEP, NHS_TIRED],
    quiz: {
      question: "What does pacing mean?",
      options: [{ text: "Balancing activity with rest", right: true }, { text: "Doing everything on good days" }, { text: "Resting all the time" }],
      why: "Pacing involves balancing periods of activity with periods of rest.",
    },
  },
  {
    id: "hmob-dislocations",
    kicker: "Dislocations",
    question: "What should I do if a joint dislocates or slips out?",
    hook: "Hypermobile joints can slip partly or fully out of place. Knowing when it needs hospital care matters.",
    short: "A subluxation is when a joint slips partially out of place; a dislocation is when it comes out completely. A dislocated shoulder needs treatment in hospital, and a suspected dislocated kneecap needs medical advice as soon as possible. Never try to put a joint back yourself, and ask about physiotherapy to lower the risk of it happening again.",
    sections: [
      {
        heading: "Dislocations and subluxations",
        paragraphs: [
          "People with hypermobility syndromes can have dislocations or subluxations, where a joint slips partially out of place. Loose joints and shallow sockets make it easier for a joint to fall out of place.",
          "People with hEDS may have loose, unstable joints that dislocate easily.",
        ],
      },
      {
        heading: "A dislocated shoulder",
        paragraphs: [
          "A dislocated shoulder needs treatment in hospital, so do not try to treat it yourself. Go to A&E if you have injured your shoulder and you cannot move your arm, your shoulder looks out of place or has changed shape, or it is painful, bruised or swollen.",
          "Call 999 for an ambulance if you cannot get to A&E by yourself. Do not drive to A&E: ask someone to drive you or call 999 and ask for an ambulance.",
          "While you wait, do not move your upper arm and do not try to put your arm back in yourself. You can support the arm with a sling or a towel and take paracetamol for the pain.",
        ],
      },
      {
        heading: "A dislocated kneecap",
        paragraphs: [
          "Get help from NHS 111 if you have injured your knee and it is very painful, swollen or bruised, you cannot stand up or move your knee, or you think your kneecap dislocated and then moved back into place.",
          "Go to A&E if your knee has changed shape, becomes very swollen very quickly, you felt a pop or snap, you can see bone sticking out, or it is bleeding heavily. Call 999 if you cannot get to A&E because you are unable to move your injured leg due to the pain.",
          "Keep the knee still and supported, and do not try to put the kneecap back into place yourself. Even if it moves back by itself, you will still need to get it checked by a doctor.",
        ],
      },
      {
        heading: "Sprains and other injuries",
        paragraphs: [
          "Call 999 or go to A&E if you heard a crack when you were injured, the injured part has changed shape or is pointing at an odd angle, it is numb or tingling, or the skin has changed colour or is cold to touch. You may have broken a bone.",
          "For the first 2 to 3 days after a sprain or strain, follow PRICE: protection, rest, ice, compression and elevation. Get help from NHS 111 if it is very painful or the pain is getting worse, or you cannot put any weight on it.",
        ],
      },
      {
        heading: "Lowering the risk",
        paragraphs: [
          "Physical therapy can reduce pain and improve your strength, fitness and balance, which will help reduce the risk of dislocations. An occupational therapist can show you how to use splints, tape and elasticated bandages, which can help protect against dislocations.",
          "Surgery on the joints is not normally recommended with hypermobility, because the tissue in and around the joint does not usually heal very well. But a torn tendon will usually be repaired with surgery.",
          "It usually takes 6 to 12 weeks to recover from a dislocated shoulder. The hospital may recommend physiotherapy to make your shoulder muscles stronger and reduce the risk of dislocating it again.",
        ],
      },
    ],
    helps: [
      "Go to A&E if you think you have dislocated your shoulder, and call 999 if you cannot get there by yourself.",
      "Do not try to put a dislocated joint back in yourself.",
      "Get help from NHS 111 if you think your kneecap dislocated and then moved back into place.",
      "Do not drive to A&E: ask someone to drive you or call 999.",
      "Ask about physiotherapy to strengthen your muscles and lower the risk of dislocating again.",
      "Ask an occupational therapist about splints, tape or elasticated bandages.",
    ],
    tryThisWeek: [
      "Never put a joint back yourself.",
      "Ask about strengthening physiotherapy.",
      "Ask an OT about splints or tape.",
    ],
    ask: "What should my plan be if a joint dislocates, and could splints or tape help protect it?",
    interactive: {
      kind: "scenarios",
      title: "When a joint goes",
      scenarios: [
        {
          id: "shoulder",
          situation: "You fall, your shoulder looks out of place and you cannot move your arm.",
          options: [{ text: "Go to A&E, or call 999 if you cannot get there", best: true }, { text: "Try to put it back in yourself" }, { text: "Wait a few days to see" }],
          why: "A dislocated shoulder needs treatment in hospital. Call 999 for an ambulance if you cannot get to A&E by yourself.",
        },
        {
          id: "kneecap",
          situation: "Your kneecap popped out, then moved back into place by itself.",
          options: [{ text: "Get help from NHS 111", best: true }, { text: "Carry on as normal" }],
          why: "Even if it moves back by itself, you will still need to get it checked by a doctor.",
        },
        {
          id: "drive",
          situation: "You think you have dislocated a joint and your car is outside.",
          options: [{ text: "Ask someone to drive you or call 999", best: true }, { text: "Drive yourself to A&E" }],
          why: "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
        },
      ],
    },
    sources: [HMSA_WHAT, HMSA_KIDS_PAIN, NHS_EDS, NHS_SHOULDER, NHS_KNEECAP, NHS_SPRAINS, AUK_HM],
    quiz: {
      question: "What should you do if you think you have dislocated your shoulder?",
      options: [{ text: "Get treatment in hospital at A&E", right: true }, { text: "Put it back in yourself" }, { text: "Wait a week" }],
      why: "A dislocated shoulder needs treatment in hospital, so do not try to treat it yourself.",
    },
  },
  {
    id: "hmob-everyday",
    kicker: "Everyday life",
    question: "How can I protect my joints in everyday life?",
    hook: "Small changes, from supportive shoes to changing position often, can take strain off hypermobile joints.",
    short: "Supportive shoes, keeping joints away from the end of their range and changing position often can reduce strain on hypermobile joints. A podiatrist can advise on insoles, and an occupational therapist can suggest easier ways to do daily tasks and equipment that may help. A healthy weight can also reduce the strain on joints.",
    sections: [
      {
        heading: "Joints in the middle",
        paragraphs: [
          "Do not overextend your joints just because you can. The Hypermobility Syndromes Association suggests keeping joints in their neutral range: do not sit with joints resting at the end of their range, and get your limbs in a good position before picking anything up.",
          "Physiotherapy can help improve posture. Correcting your posture and joint positions is part of changing the way you do things.",
        ],
      },
      {
        heading: "Keep changing position",
        paragraphs: [
          "Avoid repetitive tasks and fixed positions, and take rest breaks. The Hypermobility Syndromes Association suggests staying at one task or in one position for half an hour at most.",
          "Lots of hypermobile children need to fidget. Their body is telling them to move, to stop an area feeling stiff and hurting.",
        ],
      },
      {
        heading: "Feet and footwear",
        paragraphs: [
          "Many people with hypermobility have a low arch or flat feet, which can cause pain and problems when walking. Wear supportive shoes, and special insoles if a podiatrist has recommended them.",
          "A podiatrist can assess your feet and walking and give you insoles to support your feet and help prevent injury. Footwear that supports the ankle and the arch, with a good shock-absorbing sole, may help.",
        ],
      },
      {
        heading: "Easier ways to do things",
        paragraphs: [
          "An occupational therapist can help with everyday difficulties, such as reducing the strain on your joints while using a computer, getting dressed, or moving around your home. Special grips can make holding a pen easier.",
          "Look at ways of changing your surroundings, such as having work surfaces at the right height so you avoid bending all the time. Cushions, seat wedges and supportive pillows may help too.",
          "You can get occupational therapy free through the NHS or social services, depending on your situation. Speak to a GP about a referral, or ask your local council.",
        ],
      },
      {
        heading: "Weight and daily habits",
        paragraphs: [
          "A healthy diet and a healthy weight can help your joint strength and reduce the strain on your joints. There is no single diet that will help everyone with hypermobility.",
          "Staying as active as you can and having a good sleep routine also help.",
        ],
      },
    ],
    helps: [
      "Do not overextend your joints just because you can.",
      "Change task or position at least every half an hour.",
      "Wear supportive shoes, and insoles if a podiatrist recommends them.",
      "Ask a GP about occupational therapy for help with daily tasks and equipment.",
      "Set work surfaces at a height that avoids bending all the time.",
    ],
    tryThisWeek: [
      "Wear supportive shoes.",
      "Move every half an hour.",
      "Ask about an occupational therapist.",
    ],
    ask: "Could a podiatrist or occupational therapist help with my feet and daily tasks?",
    interactive: {
      kind: "scenarios",
      title: "Everyday choices",
      scenarios: [
        {
          id: "desk",
          situation: "You have been sitting at a desk in the same position for an hour.",
          options: [{ text: "Get up and change position", best: true }, { text: "Stay put until the job is done" }],
          why: "Only stay at one task or in any one position for a maximum of half an hour.",
        },
        {
          id: "shoes",
          situation: "You are choosing shoes for a long walk.",
          options: [{ text: "Shoes that support the ankle and arch", best: true }, { text: "Flat, unsupportive pumps" }],
          why: "Footwear that supports the ankle and the arch, with a good shock-absorbing sole, may help.",
        },
        {
          id: "trick",
          situation: "Friends ask you to show how far your fingers bend back.",
          options: [{ text: "Politely skip it", best: true }, { text: "Show them how far they go" }],
          why: "Do not overextend your joints just because you can.",
        },
      ],
    },
    sources: [NHS_JHS, HMSA_PAIN, NHSI_HM, HMSA_SCHOOL, AUK_HM, CSP_APCP, NHS_OT],
    quiz: {
      question: "How long does the Hypermobility Syndromes Association suggest staying in one position, at most?",
      options: [{ text: "Half an hour", right: true }, { text: "Three hours" }, { text: "All day" }],
      why: "The Hypermobility Syndromes Association suggests staying at one task or in one position for half an hour at most.",
    },
  },
  {
    id: "hmob-exercise",
    kicker: "Exercise",
    question: "Which kinds of exercise suit hypermobile joints?",
    hook: "Being active matters, but how you move counts. Low-impact, controlled exercise is a good place to start.",
    short: "Not doing any exercise can make hypermobility symptoms worse. Low-impact activities such as swimming, cycling, pilates or tai chi are good places to start, while contact sports and high-impact exercise need more caution. If something causes pain, stop it until it is clear why, and ask a physiotherapist for advice.",
    sections: [
      {
        heading: "Why keep active",
        paragraphs: [
          "Not doing any exercise can make symptoms worse. There is no reason why people with hypermobile joints should not exercise, and it can help fitness, sleep, balance, muscle strength and wellbeing.",
          "Adults should aim for strengthening activities on at least 2 days a week, and at least 150 minutes of moderate activity a week. Speak to your GP first if you have not exercised for some time, or if you have medical conditions or concerns.",
        ],
      },
      {
        heading: "Gentle places to start",
        paragraphs: [
          "If you have not been active before, start with low-impact exercise like swimming or cycling. NHS inform also suggests pilates or tai chi to reduce strain on your joints.",
          "Swimming helps because water supports your weight, but breaststroke can irritate the knee and hip, so it is best to paddle the legs. Yoga focused on strength and control, rather than more flexibility, may also be worth trying.",
        ],
      },
      {
        heading: "Take care with",
        paragraphs: [
          "The Hypermobility Syndromes Association suggests caution with contact sports, high-impact exercise such as running and jumping, and sudden twisting. Depending on your type of EDS, you may be advised to avoid some activities entirely, such as heavy lifting and contact sports.",
          "If you do exercises focused on flexibility, such as yoga, be careful not to overstretch hypermobile areas.",
        ],
      },
      {
        heading: "Listen to pain",
        paragraphs: [
          "If a sport or exercise involves movements that cause pain, stop that activity until it is clear why. With the right strengthening exercises, it may be possible to return to it without increasing pain.",
          "A physiotherapist can advise you about exercises to improve control of the movements your sport needs. It is also important not to be overprotective and avoid an otherwise normal life.",
        ],
      },
      {
        heading: "Many ways to move",
        paragraphs: [
          "Exercise can be done almost anywhere, including sitting down, such as chair dancing or sitting on a gym ball. Pilates, the gym, physiotherapy-led exercise and any movement done with control can all count.",
          "Exercising with a friend or in a group may help you stay motivated. If you have a rarer condition such as vascular EDS, discuss exercise with your healthcare professionals, as there may be extra risks.",
        ],
      },
    ],
    helps: [
      "Start with low-impact exercise like swimming or cycling.",
      "Speak to your GP first if you have not exercised for some time.",
      "Paddle your legs rather than doing breaststroke kicks when swimming.",
      "Take care with contact sports, high-impact exercise and sudden twisting.",
      "Stop an activity that causes pain until it is clear why, and ask a physiotherapist.",
      "Exercise with a friend or in a group to stay motivated.",
    ],
    tryThisWeek: [
      "Try a swim or a bike ride.",
      "Check with your GP first.",
      "Pause anything that hurts.",
    ],
    ask: "Which sports or exercises are safe for me, and are there any I should avoid?",
    interactive: {
      kind: "scenarios",
      title: "Choosing how to move",
      scenarios: [
        {
          id: "class",
          situation: "One move in your exercise class makes a joint hurt.",
          options: [{ text: "Stop that move until it is clear why", best: true }, { text: "Push through the pain" }],
          why: "If a sport or exercise involves movements that cause pain, stop that activity until it is clear why.",
        },
        {
          id: "new",
          situation: "You have not been active before and want to start.",
          options: [{ text: "Low-impact, like swimming or cycling", best: true }, { text: "A contact sport like rugby" }],
          why: "If you have not been active before, start with low-impact exercise like swimming or cycling.",
        },
        {
          id: "yoga",
          situation: "In yoga, you can stretch much further than everyone else.",
          options: [{ text: "Focus on strength and control", best: true }, { text: "Go as far as you can" }],
          why: "If you do exercises focused on flexibility, such as yoga, be careful not to overstretch hypermobile areas.",
        },
      ],
    },
    sources: [NHS_JHS, AUK_HM, HMSA_EXERCISE, NHS_ACTIVITY, NHSI_HM, HMSA_PAIN, NHS_EDS],
    quiz: {
      question: "Which swimming stroke can irritate the knee and hip?",
      options: [{ text: "Breaststroke", right: true }, { text: "Gently paddling the legs" }, { text: "Floating on your back" }],
      why: "Breaststroke can irritate the knee and hip, so it is best to paddle the legs.",
    },
  },
  {
    id: "hmob-work-school",
    kicker: "Work and study",
    question: "How can work and school make room for hypermobility?",
    hook: "Pain and tiredness can make a full day hard. Adjustments at work and a plan at school can help.",
    short: "Employers have a duty to make reasonable adjustments, such as changed working hours or special equipment, and the government's Access to Work scheme can help pay for support beyond that. At school, an agreed plan, an occupational therapist's advice and small changes can help children with hypermobility stay in school with less pain.",
    sections: [
      {
        heading: "At work",
        paragraphs: [
          "Work can provide financial security, a sense of purpose and a supportive social network. If hypermobility is affecting your ability to work, speak to your employer's occupational health service if they have one.",
          "Employers must make reasonable adjustments so that workers with disabilities or health conditions are not substantially disadvantaged. These can include changing equipment, such as a special keyboard, or a phased return to work with flexible hours or part-time working.",
        ],
      },
      {
        heading: "Is it a disability?",
        paragraphs: [
          "Some people are disabled by their hypermobility and others are not, and symptoms can change over time. Under the Equality Act 2010, you are disabled if a condition has a substantial and long-term negative effect on your ability to do normal daily activities.",
          "Long-term means 12 months or more. There are special rules about recurring or fluctuating conditions.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "If your employer cannot make all the adjustments you need, you may be able to get help through Access to Work. It can give a grant towards things like specialist equipment, support workers, or the cost of travelling to work if you cannot use public transport.",
          "To be eligible, you need to be 16 or over and in paid work, or about to start or return to paid work in the next 12 weeks. You do not need to be diagnosed with a condition to apply, and a grant does not have to be paid back.",
        ],
      },
      {
        heading: "At school",
        paragraphs: [
          "Most children with a hypermobility syndrome go to school full time and manage just fine. An occupational therapist may visit the school to see whether a child needs special chairs, cushions, pens or splints to stay in school with less pain.",
          "If writing is hard, breaks, someone to write for them, or typing on a laptop may help. A plan agreed with the school, parents and perhaps the school nurse can help manage pain and tiredness during the day.",
          "Arthritis UK's guidance for schools suggests a written care plan, such as an Individual Healthcare Plan, and says some pupils may need extra time or a computer in exams.",
        ],
      },
      {
        heading: "PE and helping school understand",
        paragraphs: [
          "Unless a doctor or physiotherapist says not to, children should try to do some PE, because weak muscles can cause more pain. If they cannot do the whole lesson, doing a bit of it is better than none.",
          "The Hypermobility Syndromes Association suggests sharing its educators' guide and schools toolkit with the teacher or special educational needs co-ordinator. If the school still is not listening, your local parent partnership service may help.",
        ],
      },
    ],
    helps: [
      "Speak to your employer's occupational health service if hypermobility affects your work.",
      "Ask your employer about reasonable adjustments, such as special equipment or flexible hours.",
      "Apply to Access to Work if you need support beyond reasonable adjustments.",
      "Agree a plan with your child's school for managing pain and tiredness.",
      "Share the Hypermobility Syndromes Association's educators' guide or schools toolkit with your child's teacher.",
      "Encourage your child to do some PE, even part of a lesson.",
    ],
    tryThisWeek: [
      "Talk to occupational health.",
      "Ask about reasonable adjustments.",
      "Agree a plan with the school.",
    ],
    ask: "Could you write a letter about my condition for my employer or my child's school?",
    interactive: {
      kind: "scenarios",
      title: "Work and school moments",
      scenarios: [
        {
          id: "keyboard",
          situation: "Typing all day makes your wrists ache.",
          options: [{ text: "Ask your employer about adjustments, like equipment", best: true }, { text: "Say nothing and push on" }],
          why: "Reasonable adjustments can include changing equipment, such as a special keyboard.",
        },
        {
          id: "beyond",
          situation: "Your employer cannot pay for all the equipment you need.",
          options: [{ text: "Look into Access to Work", best: true }, { text: "Give up on the job" }],
          why: "If your employer cannot make all the adjustments you need, you may be able to get help through Access to Work.",
        },
        {
          id: "pe",
          situation: "Your child's joints ache and they want to skip PE.",
          options: [{ text: "Join in with part of the lesson", best: true }, { text: "Skip PE altogether" }],
          why: "If they cannot do the whole lesson, doing a bit of it is better than none.",
        },
      ],
    },
    sources: [AUK_HM, GOV_ADJUSTMENTS, HMSA_FAQ, GOV_DISABILITY, GOV_ATW, GOV_ATW_ELIGIBILITY, HMSA_SCHOOL, AUK_SCHOOLS, HMSA_PE],
    quiz: {
      question: "Do you need a diagnosis to apply for Access to Work?",
      options: [{ text: "No", right: true }, { text: "Yes, always" }, { text: "Only for equipment" }],
      why: "You do not need to be diagnosed with a condition to apply.",
    },
  },
  {
    id: "hmob-support",
    kicker: "Support",
    question: "Where can I find support, and look after my mood?",
    hook: "Hypermobility can be hard to explain and easy to overlook. Talking to people who understand can help.",
    short: "Pain, fatigue and living with a long-term condition can affect your mood, and anxiety is more common with hypermobility. The Hypermobility Syndromes Association and Ehlers-Danlos Support UK run helplines and support groups. If you are struggling, talk to a healthcare professional, and if you ever feel you cannot keep yourself safe, call 999 or go to A&E.",
    sections: [
      {
        heading: "Feelings are part of it",
        paragraphs: [
          "Studies have shown that you are more likely to have anxiety if you have hypermobility. Along with the pain, fatigue and disruption to daily life, this can bring feelings of depression, so it is important to take care of your mental health.",
          "It is not uncommon to feel low, isolated or overwhelmed when you have recently been diagnosed or are dealing with pain and fatigue. These emotions are normal, but that does not make them any less difficult.",
        ],
      },
      {
        heading: "Charities that understand",
        paragraphs: [
          "The Hypermobility Syndromes Association supports everyone with symptomatic hypermobility, whatever the cause and whether or not they are diagnosed. Its helpline, 0333 011 6388, is staffed by volunteers who live with a hypermobility syndrome themselves.",
          "Ehlers-Danlos Support UK has a free helpline on 0800 907 8518 and local support groups. Members of the Hypermobility Syndromes Association can join peer support groups covering the whole of the UK, to share tips with people who just get it.",
        ],
      },
      {
        heading: "Small steps that help",
        paragraphs: [
          "Try to keep up the activities you enjoy, adapting them if you need to by pacing yourself, taking more breaks or asking a friend to help. Keeping in touch with friends and family is good for your health and can help you feel much better.",
          "Check how you talk to yourself through the day. Would you speak to a friend like that?",
        ],
      },
      {
        heading: "Talking to someone",
        paragraphs: [
          "If you are struggling, reach out to a healthcare professional, who may be able to refer you to a psychologist for help with coping strategies. Counselling and CBT may be useful if you are struggling to cope with long-term pain.",
          "In England, you can refer yourself to NHS talking therapies for anxiety and depression if you are 18 or over, or 16 or 17 in some areas. They may help if you have anxiety or depression alongside a long-term health condition.",
        ],
      },
      {
        heading: "If you need help urgently",
        paragraphs: [
          "If you need urgent help for your mental health, get help from 111 online, call 111 and select the mental health option, or ask for an urgent GP appointment. You can call Samaritans free on 116 123, any time, day or night.",
          "Call 999 or go to A&E now if someone's life is at risk, or you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Call the Hypermobility Syndromes Association helpline on 0333 011 6388.",
      "Call Ehlers-Danlos Support UK's free helpline on 0800 907 8518.",
      "Keep up the activities you enjoy, adapting them if you need to.",
      "Reach out to a healthcare professional if you are struggling.",
      "Refer yourself to NHS talking therapies if you live in England and feel anxious or low.",
      "Call Samaritans free on 116 123, any time, day or night.",
    ],
    tryThisWeek: [
      "Call a hypermobility helpline.",
      "Do one activity you enjoy.",
      "Talk to a professional if struggling.",
    ],
    ask: "Could talking therapy or a psychologist help me cope, and how do I get referred?",
    interactive: {
      kind: "flip-cards",
      title: "Where to turn",
      intro: "Turn each card to see who can help, and when.",
      cards: [
        { id: "hmsa", front: "HMSA helpline", when: "0333 011 6388", back: "Support and advice on living with hypermobility, from volunteers who live with it themselves." },
        { id: "edsuk", front: "Ehlers-Danlos Support UK", when: "Free helpline 0800 907 8518", back: "Information, advice and local support groups for people with EDS and their families." },
        { id: "talking", front: "NHS talking therapies", when: "Self-referral in England", back: "Psychological treatments for anxiety and depression, from 18, or 16 or 17 in some areas." },
        { id: "111", front: "NHS 111", when: "Urgent mental health help", back: "Call 111 and select the mental health option, or use 111 online. Or ask for an urgent GP appointment." },
        { id: "samaritans", front: "Samaritans", when: "116 123, free, any time", back: "Talk about anything that is troubling you, day or night." },
        { id: "999", front: "999 or A&E", when: "If a life is at risk", back: "Call 999 or go to A&E now if you do not feel you can keep yourself or someone else safe." },
      ],
    },
    sources: [AUK_HM, AUK_MENTAL, HMSA_HOME, HMSA_SUPPORT, NHS_EDS, HMSA_GROUPS, NHS_PAIN, NHS_TALKING, NHS_URGENT, SAMARITANS],
    quiz: {
      question: "What does the NHS say to do if you do not feel you can keep yourself safe?",
      options: [{ text: "Call 999 or go to A&E now", right: true }, { text: "Wait and see how you feel tomorrow" }, { text: "Keep it to yourself" }],
      why: "Call 999 or go to A&E now if someone's life is at risk, or you do not feel you can keep yourself or someone else safe.",
    },
  },
];
