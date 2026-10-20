import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Essential tremor page's pieces (content/library-conditions/brain-a.ts
// `learnId`). Every sentence was written from wording checked on 20 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. The NHS has no page on essential
// tremor itself, so much of this comes from the National Tremor Foundation, a UK charity, and is credited to
// it. General information only; it never replaces what a person's own team tells them.

const ntf = (label: string, path: string): LearnSource => ({ label: `National Tremor Foundation: ${label}`, url: `https://tremor.org.uk/${path}` });
const NHS_TREMOR: LearnSource = { label: "NHS: Tremor or shaking hands", url: "https://www.nhs.uk/symptoms/tremor-or-shaking-hands/" };
const NTF_ET = ntf("Essential tremor", "essential-tremor");
const NTF_GENETIC = ntf("Is essential tremor genetic?", "is-essential-tremor-genetic");
const NTF_TREATMENTS = ntf("Medication and treatments", "medication-treatments");
const NTF_FUS = ntf("Focused ultrasound", "about-tremor-menu/focused-ultrasound");
const NTF_HINTS = ntf("Helpful hints", "helpful-hints");
const NTF_COMMUNICATION = ntf("Communication", "communication");
const NTF_ALCOHOL = ntf("Alcohol", "alcohol");
const NTF_MENTAL = ntf("Mental health", "mental-health");
const NTF_FAMILY = ntf("Family", "family");
const NTF_GROUPS = ntf("Support groups", "support-groups");
const NTF_CARDS = ntf("Alert cards", "advice-support/ntf-alert-cards");
const NTF_WHAT = ntf("What is tremor?", "what-is-tremor");
const PUK_TREMOR: LearnSource = { label: "Parkinson's UK: Tremor", url: "https://www.parkinsons.org.uk/information/symptoms/motor/tremor" };
const NICE_FUS: LearnSource = { label: "NICE: MRI-guided focused ultrasound thalamotomy for essential tremor (HTG474)", url: "https://www.nice.org.uk/guidance/htg474/chapter/1-Recommendations" };
const NICE_FUS_REVIEW: LearnSource = { label: "NICE: focused ultrasound for essential tremor (in development)", url: "https://www.nice.org.uk/guidance/indevelopment/gid-htg10860" };
const NICE_DBS: LearnSource = { label: "NICE: Deep brain stimulation for tremor and dystonia (HTG122)", url: "https://www.nice.org.uk/guidance/htg122/chapter/1-Recommendations" };
const NHS_PROPRANOLOL: LearnSource = { label: "NHS: Propranolol", url: "https://www.nhs.uk/medicines/propranolol/" };
const GOV_ET_DRIVING: LearnSource = { label: "GOV.UK: Essential tremor and driving", url: "https://www.gov.uk/benign-essential-tremor-and-driving" };

export const tremorAnswers: LearnArticle[] = [
  {
    id: "et-what",
    kicker: "Understanding",
    question: "What is essential tremor?",
    hook: "A rhythmic shaking, most often of the hands and arms, that comes when you use them. For many people it changes little over the years.",
    short: "Essential tremor is a long-term condition that causes an involuntary, rhythmic tremor, most often of the hands and arms, and sometimes the head, voice or legs. NICE describes it as the most common cause of disabling tremor. In many people it changes little, and the tremor usually stops during sleep.",
    sections: [
      {
        heading: "A rhythmic tremor",
        paragraphs: [
          "Essential tremor is a long-term condition with an involuntary, rhythmic tremor of part of the body, most often the hands and arms.",
        ],
      },
      {
        heading: "Where it shows",
        paragraphs: [
          "People can have a rhythmic trembling of the hands, head, legs, body or voice. After the hands, the head is most often affected, followed by the voice.",
        ],
      },
      {
        heading: "Common",
        paragraphs: [
          "NICE describes essential tremor as the most common cause of disabling tremor.",
        ],
      },
      {
        heading: "Often steady",
        paragraphs: [
          "In many people, the condition may change relatively little. The tremor may stay mild throughout life.",
          "Tremors usually disappear during sleep.",
        ],
      },
    ],
    helps: [
      "See a GP if a tremor is getting in the way of everyday life.",
      "Medicines will not cure the tremor, but they often help reduce the shaking.",
      "The National Tremor Foundation can put you in touch with other people in a similar situation.",
    ],
    tryThisWeek: [
      "Note when the tremor is worst.",
      "Book a GP appointment if it gets in the way.",
      "Look up the National Tremor Foundation.",
    ],
    ask: "Are you sure it's essential tremor, and is it likely to change?",
    sources: [NTF_ET, NICE_FUS_REVIEW, NHS_TREMOR, NTF_FAMILY],
    quiz: {
      question: "What usually happens to the tremor during sleep?",
      options: [{ text: "It usually disappears", right: true }, { text: "It gets much worse" }, { text: "It moves to the legs" }],
      why: "Tremors usually disappear during sleep.",
    },
  },
  {
    id: "et-not-parkinsons",
    kicker: "Understanding",
    question: "How is essential tremor different from Parkinson's?",
    hook: "Essential tremor usually shows when you move. A Parkinson's tremor usually shows when you are at rest.",
    short: "Essential tremor is usually an action tremor: it appears when you move, such as holding a cup. A Parkinson's tremor usually happens when the body is relaxed, such as lying in bed. A scan called a DaTscan can help tell them apart, and some people have both.",
    sections: [
      {
        heading: "Moving, or at rest",
        paragraphs: [
          "Essential tremor is different from a Parkinson's tremor. It is usually an action tremor, so it appears when you move.",
          "A Parkinson's tremor usually happens when the body is relaxed, such as when you are lying in bed.",
        ],
      },
      {
        heading: "Rest tremor",
        paragraphs: [
          "A rest tremor is quite separate from other tremors. It is most commonly found in Parkinson's disease.",
        ],
      },
      {
        heading: "A scan that can help",
        paragraphs: [
          "A test called a DaTscan can tell the difference between essential tremor and the tremor of Parkinson's disease.",
        ],
      },
      {
        heading: "Both at once",
        paragraphs: [
          "You can have an essential tremor and a Parkinson's tremor at the same time.",
        ],
      },
    ],
    helps: [
      "Notice whether the tremor comes when you move, or when you are resting.",
      "Tell your doctor about any other changes, not just the tremor.",
      "Ask whether a scan is needed if the diagnosis is not clear.",
    ],
    tryThisWeek: [
      "Notice when the tremor happens.",
      "List any other changes for your doctor.",
      "Ask if a scan would help.",
    ],
    ask: "How sure are you that this is essential tremor and not Parkinson's?",
    sources: [PUK_TREMOR, NTF_WHAT, NTF_ET],
    quiz: {
      question: "When does essential tremor usually appear?",
      options: [{ text: "When you move", right: true }, { text: "Only when lying still" }, { text: "Only at night" }],
      why: "Essential tremor is usually an action tremor, so it appears when you move.",
    },
  },
  {
    id: "et-families",
    kicker: "Understanding",
    question: "Does essential tremor run in families?",
    hook: "Some types of tremor run in families, especially when it starts young. The genes involved are not yet known.",
    short: "Some types of tremor run in families. People whose essential tremor starts at a young age often have a family history of it, while those who develop it later in life are less likely to. Very little progress has been made in finding the specific genes.",
    sections: [
      {
        heading: "In families",
        paragraphs: [
          "Some types of tremor run in families.",
        ],
      },
      {
        heading: "Age it starts",
        paragraphs: [
          "People whose essential tremor starts at a young age often have a family history of others with the same condition. Those who develop it later in life are less likely to have a family link.",
        ],
      },
      {
        heading: "The genes",
        paragraphs: [
          "Very little progress has been made in identifying the specific genes involved.",
        ],
      },
    ],
    helps: [
      "Tell your doctor if anyone else in your family has a tremor.",
      "Talk with family members about it when you feel ready; how much you share is your decision.",
      "The National Tremor Foundation can put you in touch with others in a similar situation.",
    ],
    tryThisWeek: [
      "Ask if anyone else in the family has a tremor.",
      "Tell your doctor about family history.",
      "Share as much as you want to.",
    ],
    ask: "Does my family history change anything for me or my children?",
    sources: [NHS_TREMOR, NTF_GENETIC, NTF_FAMILY],
    quiz: {
      question: "When is a family history more common?",
      options: [{ text: "When essential tremor starts young", right: true }, { text: "When it starts late in life" }, { text: "Never" }],
      why: "People whose essential tremor starts young often have a family history; later onset is less often familial.",
    },
  },
  {
    id: "et-worse",
    kicker: "Triggers",
    question: "Why is my tremor worse on some days?",
    hook: "Stress, tiredness, caffeine, temperature and being watched can all make a tremor more noticeable.",
    short: "A tremor can be more noticeable when you are stressed, tired, anxious or angry, after caffeine, alcohol or smoking, and when you are very hot or cold. Stimulants and alcohol withdrawal can make it worse, and some people find it worse when they are performing a task in front of others.",
    sections: [
      {
        heading: "Feelings and tiredness",
        paragraphs: [
          "A tremor can become more noticeable when you are stressed, tired, anxious or angry.",
          "All involuntary movements, including tremor, are made worse by emotional or physical stress, anxiety, fatigue and illness.",
        ],
      },
      {
        heading: "Caffeine, alcohol and smoking",
        paragraphs: [
          "A tremor can be more noticeable after caffeine, for example in tea, coffee or cola, after drinking alcohol, or after smoking.",
          "Stimulants such as caffeine and chocolate, recreational drugs and alcohol withdrawal will make tremors worse.",
        ],
      },
      {
        heading: "Hot and cold",
        paragraphs: [
          "A tremor can be more noticeable if you are very hot or cold.",
        ],
      },
      {
        heading: "Being watched",
        paragraphs: [
          "In some people, the tremor may get worse when performing tasks.",
        ],
      },
    ],
    helps: [
      "Notice what makes your tremor worse, such as caffeine, tiredness or stress.",
      "Cut down on caffeine if it makes your tremor more noticeable.",
      "Say if you feel anxious: it is key to getting help.",
    ],
    tryThisWeek: [
      "Note what makes it worse.",
      "Try cutting down on caffeine.",
      "Tell someone if you feel anxious.",
    ],
    ask: "Which of my triggers is worth tackling first?",
    sources: [NHS_TREMOR, NTF_MENTAL, NTF_ET],
    quiz: {
      question: "Which of these can make a tremor more noticeable?",
      options: [{ text: "Caffeine", right: true }, { text: "Sleep" }, { text: "Resting your arm" }],
      why: "A tremor can be more noticeable after caffeine, for example in tea, coffee or cola.",
    },
  },
  {
    id: "et-tablets",
    kicker: "Treatment",
    question: "Which tablets can help essential tremor?",
    hook: "Medicines do not cure the tremor, but they often reduce it. Some are taken every day, some only when needed.",
    short: "Medicines will not cure a tremor, but they often help reduce the shaking. You may take them all the time, or only when needed, such as before a stressful situation. Medicines used include propranolol and primidone. Propranolol can cause dizziness, tiredness, cold hands and feet, and sleep problems, and is not suitable for everyone.",
    sections: [
      {
        heading: "What they can do",
        paragraphs: [
          "Medicine will not cure the tremor, but it often helps to reduce the shaking or trembling. The medical treatments available for essential tremor ease symptoms; they are not a cure.",
        ],
      },
      {
        heading: "Every day, or when needed",
        paragraphs: [
          "You may need to take medicine all the time, or only when you need it, for example before a stressful situation that makes your tremor worse.",
        ],
      },
      {
        heading: "The medicines",
        paragraphs: [
          "Medicines used for essential tremor include propranolol, primidone, topiramate and gabapentin.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "The main side effects of propranolol are feeling dizzy or tired, cold hands or feet, difficulty sleeping and nightmares.",
          "Tell your doctor before starting propranolol if you have lung disease or asthma.",
        ],
      },
    ],
    helps: [
      "Ask your doctor whether a medicine is worth trying for you.",
      "Ask whether to take it every day, or only before situations that make the tremor worse.",
      "Tell your doctor about asthma or lung disease before starting propranolol.",
    ],
    tryThisWeek: [
      "Ask if a medicine is worth trying.",
      "Ask about every day or when needed.",
      "Mention asthma before propranolol.",
    ],
    ask: "Is a tablet worth trying for me, and which one?",
    sources: [NHS_TREMOR, NTF_TREATMENTS, NHS_PROPRANOLOL],
    quiz: {
      question: "Do tremor medicines cure essential tremor?",
      options: [{ text: "No, but they often reduce it", right: true }, { text: "Yes, always" }, { text: "They make it worse" }],
      why: "Medicine will not cure the tremor, but it often helps to reduce the shaking.",
    },
  },
  {
    id: "et-procedures",
    kicker: "Treatment",
    question: "What procedures can help a severe tremor?",
    hook: "For a severe tremor that medicines do not help, focused ultrasound or deep brain stimulation may be options.",
    short: "Rarely, brain surgery may be an option for a severe tremor that medicine does not help. Focused ultrasound is available on the NHS in England for essential tremor; it treats one side of the body. Deep brain stimulation is another option NICE supports for tremor. NICE is reviewing its focused ultrasound guidance.",
    sections: [
      {
        heading: "When medicines are not enough",
        paragraphs: [
          "Rarely, brain surgery may be an option to treat a severe tremor that is not helped by medicine.",
        ],
      },
      {
        heading: "Focused ultrasound",
        paragraphs: [
          "MRI-guided focused ultrasound is available on the NHS in England as a treatment option for essential tremor.",
          "The procedure only treats the tremor on one side of the body. NICE says its safety raises no major concerns, but evidence on how well it works is limited.",
        ],
      },
      {
        heading: "Under review",
        paragraphs: [
          "NICE is reviewing its guidance, including treating the second side in a later procedure, usually 9 to 12 months after the first. New guidance is expected in January 2027.",
        ],
      },
      {
        heading: "Deep brain stimulation",
        paragraphs: [
          "NICE says the evidence on the safety and effectiveness of deep brain stimulation for tremor is adequate to support its use.",
        ],
      },
    ],
    helps: [
      "Ask whether you could be referred to a specialist if medicines have not helped.",
      "Ask what each procedure would mean for you, including its risks.",
      "Ask about the latest NICE guidance on focused ultrasound.",
    ],
    tryThisWeek: [
      "Ask about a specialist referral.",
      "Ask about the risks of each option.",
      "Ask about the latest guidance.",
    ],
    ask: "Would I be a candidate for focused ultrasound or deep brain stimulation?",
    sources: [NHS_TREMOR, NTF_FUS, PUK_TREMOR, NICE_FUS, NICE_FUS_REVIEW, NICE_DBS],
    quiz: {
      question: "How much of the body does one focused ultrasound procedure treat?",
      options: [{ text: "One side", right: true }, { text: "Both sides" }, { text: "Only the voice" }],
      why: "The procedure only treats the tremor on one side of the body.",
    },
  },
  {
    id: "et-hands",
    kicker: "Every day",
    question: "What helps with eating, drinking and writing?",
    hook: "Angled or weighted cutlery, two-handled cups, elbows on the table, and thicker pens.",
    short: "Cutlery with angled or weighted handles can make eating easier. Two-handled cups, or a large mug filled only halfway, reduce spills. Resting your elbows on the table can steady your hands. An occupational therapist can advise on handwriting, and thicker or padded pens and weighted cuffs can help.",
    sections: [
      {
        heading: "Eating",
        paragraphs: [
          "Try cutlery with specially adapted handles that are angled or weighted for ease of use.",
          "Placing your elbows on the table can help to steady your hands and arms when eating.",
        ],
      },
      {
        heading: "Drinking",
        paragraphs: [
          "To reduce spills, try two-handled cups or beakers, or a large mug filled only halfway.",
        ],
      },
      {
        heading: "Writing",
        paragraphs: [
          "An occupational therapist can advise on ways to help with handwriting. Thick, padded or felt-tip pens and weighted cuffs can help.",
          "Try wrapping elastic bands around the pen to give a better grip.",
        ],
      },
    ],
    helps: [
      "Try angled or weighted cutlery.",
      "Use a two-handled cup, or fill a large mug only halfway.",
      "Ask about an occupational therapist for help with writing.",
    ],
    tryThisWeek: [
      "Fill your mug only halfway.",
      "Rest your elbows on the table when eating.",
      "Wrap an elastic band round your pen.",
    ],
    ask: "Could an occupational therapist help me with eating and writing?",
    sources: [NTF_HINTS, NTF_COMMUNICATION],
    quiz: {
      question: "What can help reduce spills?",
      options: [{ text: "A large mug filled only halfway", right: true }, { text: "A tall full glass" }, { text: "Drinking faster" }],
      why: "Two-handled cups, or a large mug filled only halfway, can reduce spills.",
    },
  },
  {
    id: "et-public",
    kicker: "Out and about",
    question: "How can I manage eating out, signing and other public moments?",
    hook: "Keep going out. A shorter signature, an alert card and a little help can make public moments easier.",
    short: "Tremor can make writing, drinking, eating and dressing harder, and some people pull back from social life out of embarrassment. Keep eating out and seeing people. You can shorten your signature, as long as your bank has the new one, and an alert card can tell people you need a little more time.",
    sections: [
      {
        heading: "Everyday tasks",
        paragraphs: [
          "Hand tremor can make writing, drinking from a glass or cup, eating, sewing, putting on make-up, shaving or dressing more difficult.",
        ],
      },
      {
        heading: "Keep going out",
        paragraphs: [
          "Essential tremor can lead some people to withdraw from social activities because of embarrassment. Do not avoid eating out: keep up your social activities.",
        ],
      },
      {
        heading: "Signing",
        paragraphs: [
          "You can shorten your signature so that it is easier to write, but make sure the new signature is the one registered with your bank.",
        ],
      },
      {
        heading: "An alert card",
        paragraphs: [
          "An alert card from the National Tremor Foundation can show people around you that you may need some help, or a little more time.",
        ],
      },
    ],
    helps: [
      "Keep eating out and seeing friends.",
      "Shorten your signature, and register the new one with your bank.",
      "Carry an alert card if it helps.",
    ],
    tryThisWeek: [
      "Plan one meal out.",
      "Practise a shorter signature.",
      "Look up the alert card.",
    ],
    ask: "Is there anyone who can help with the anxiety I feel in public?",
    sources: [NTF_ET, NTF_HINTS, NTF_COMMUNICATION, NTF_CARDS],
    quiz: {
      question: "What should you check if you shorten your signature?",
      options: [{ text: "That your bank has the new one", right: true }, { text: "Nothing" }, { text: "That it is longer" }],
      why: "Make sure the new signature is the one registered with your bank.",
    },
  },
  {
    id: "et-alcohol",
    kicker: "Alcohol",
    question: "What should I know about alcohol and tremor?",
    hook: "Alcohol can briefly lessen a tremor, but it can rebound the next morning, and regular use carries real risks.",
    short: "Alcohol temporarily improves the tremor in about half of people, but the tremor often rebounds and gets worse the next morning. Using alcohol regularly to treat a tremor can lead to dependence. If you take propranolol, it is best to avoid alcohol, and it is advisable not to drink more than 14 units a week regularly.",
    sections: [
      {
        heading: "A short-lived effect",
        paragraphs: [
          "Alcohol will temporarily improve the tremor in about half of people.",
        ],
      },
      {
        heading: "The rebound",
        paragraphs: [
          "There is often a rebound that makes the tremor worse the next morning.",
        ],
      },
      {
        heading: "The risks",
        paragraphs: [
          "Regular use of alcohol to treat a tremor can often lead to dependence, and even alcoholism.",
          "It is advisable not to drink more than 14 units a week regularly.",
        ],
      },
      {
        heading: "With medicines",
        paragraphs: [
          "If you take a medicine such as propranolol, it is advisable to avoid alcohol, which could increase drowsiness and dizziness.",
        ],
      },
    ],
    helps: [
      "Do not use alcohol to treat your tremor.",
      "Avoid alcohol if you take propranolol.",
      "Keep to no more than 14 units a week.",
    ],
    tryThisWeek: [
      "Notice any morning rebound.",
      "Avoid alcohol with propranolol.",
      "Keep under 14 units a week.",
    ],
    ask: "Is it safe for me to drink alcohol with my tremor medicine?",
    sources: [NTF_TREATMENTS, NTF_ALCOHOL],
    quiz: {
      question: "What often happens the morning after alcohol eases a tremor?",
      options: [{ text: "The tremor rebounds and gets worse", right: true }, { text: "It is gone for good" }, { text: "Nothing changes" }],
      why: "There is often a rebound that makes the tremor worse the next morning.",
    },
  },
  {
    id: "et-voice",
    kicker: "Voice and head",
    question: "What helps when tremor affects the voice or head?",
    hook: "Injections can relax the muscles involved, and a speech and language therapist can help with the voice.",
    short: "If a tremor affects your head or voice, you may be offered injections to relax the muscles. A speech and language therapist can advise on tools such as amplifiers for a quiet voice. Sitting or standing upright can help your voice too.",
    sections: [
      {
        heading: "Head and voice",
        paragraphs: [
          "After the hands, the head is most often affected by essential tremor, followed by the voice, tongue, legs or body.",
        ],
      },
      {
        heading: "Injections",
        paragraphs: [
          "If a tremor is affecting your head or voice, you may be offered injections to block the nerves and relax the muscles. Botulinum toxin is sometimes considered for head or voice tremors.",
        ],
      },
      {
        heading: "Speech therapy",
        paragraphs: [
          "A speech and language therapist can advise on equipment and tools, such as amplifiers, to help with problems like a quiet voice.",
        ],
      },
      {
        heading: "Posture",
        paragraphs: [
          "Sit or stand comfortably, as upright as possible. Voice quality can be affected by a stooped posture.",
        ],
      },
    ],
    helps: [
      "Ask whether injections could help a head or voice tremor.",
      "Ask about a speech and language therapist.",
      "Sit or stand upright when you speak.",
    ],
    tryThisWeek: [
      "Ask about injections.",
      "Ask about speech therapy.",
      "Sit upright when you talk.",
    ],
    ask: "Would injections or speech therapy help my voice or head tremor?",
    sources: [NTF_ET, NHS_TREMOR, NTF_TREATMENTS, NTF_COMMUNICATION],
    quiz: {
      question: "What can affect voice quality?",
      options: [{ text: "A stooped posture", right: true }, { text: "Sitting upright" }, { text: "Drinking water" }],
      why: "Voice quality can be affected by a stooped posture.",
    },
  },
  {
    id: "et-telling",
    kicker: "Telling people",
    question: "How do I tell people about my tremor?",
    hook: "How much you share is your choice. Children often just ask, and support groups can help.",
    short: "How much you tell the people close to you is a personal decision. Children are curious and may simply ask why you tremble. Support groups let you learn, chat to people with similar problems and swap tips. If you drive, you must tell DVLA if your tremor affects your ability to drive safely.",
    sections: [
      {
        heading: "Your choice",
        paragraphs: [
          "How much you decide to tell those close to you, and how much you involve them, is a personal decision.",
        ],
      },
      {
        heading: "Children",
        paragraphs: [
          "Children are open and curious, and will quite naturally ask why you tremble.",
        ],
      },
      {
        heading: "Support groups",
        paragraphs: [
          "Support groups give people the chance to learn about their condition, chat to people with similar problems, and pass on helpful tips in a welcoming place.",
        ],
      },
      {
        heading: "Driving",
        paragraphs: [
          "You must tell DVLA if your essential tremor affects your ability to drive safely. Ask your doctor if you are not sure.",
        ],
      },
    ],
    helps: [
      "Share as much as you want to, when you are ready.",
      "Look for a support group near you.",
      "Ask your doctor if you are unsure whether your tremor affects your driving.",
    ],
    tryThisWeek: [
      "Decide who to tell first.",
      "Look for a support group.",
      "Ask your doctor about driving.",
    ],
    ask: "Does my tremor affect my driving, and should I tell DVLA?",
    sources: [NTF_FAMILY, NTF_GROUPS, GOV_ET_DRIVING],
    quiz: {
      question: "When must you tell DVLA?",
      options: [{ text: "If the tremor affects your ability to drive safely", right: true }, { text: "Always, straight away" }, { text: "Never" }],
      why: "You must tell DVLA if your essential tremor affects your ability to drive safely.",
    },
  },
];
