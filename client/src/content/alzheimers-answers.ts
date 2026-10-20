import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Alzheimer's disease page's own pieces (content/library-conditions/brain-a.ts
// `learnId`). Every sentence was written from wording checked on 20 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. General information only; it never
// replaces what a person's own team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/conditions/${path}` });
const as = (label: string, path: string): LearnSource => ({ label: `Alzheimer's Society: ${label}`, url: `https://www.alzheimers.org.uk/${path}` });
const NHS_AD = nhs("Alzheimer's disease", "alzheimers-disease/");
const NHS_AD_CAUSES = nhs("Causes of Alzheimer's disease", "alzheimers-disease/causes/");
const NHS_AD_SYMPTOMS = nhs("Symptoms of Alzheimer's disease", "alzheimers-disease/symptoms/");
const NHS_AD_DIAGNOSIS = nhs("Diagnosing Alzheimer's disease", "alzheimers-disease/diagnosis/");
const NHS_AD_TREATMENT = nhs("Treating Alzheimer's disease", "alzheimers-disease/treatment/");
const NHS_DEM_TREATMENT = nhs("Treating dementia", "dementia/about-dementia/treatment/");
const NHS_LIVING_WELL = nhs("Living well with dementia", "dementia/living-with-dementia/living-well/");
const AS_AD = as("Alzheimer's disease", "about-dementia/types-dementia/alzheimers-disease");
const AS_AD_SYMPTOMS = as("Symptoms of Alzheimer's disease", "about-dementia/types-dementia/alzheimers-disease-symptoms");
const AS_AD_TREATMENT = as("Treatment and support for Alzheimer's disease", "about-dementia/types-dementia/treatment-support-alzheimers-disease");
const AS_STAGES = as("The progression and stages of dementia", "about-dementia/stages-and-symptoms/progression-stages-dementia");
const AS_MEDICATION = as("Medication for dementia symptoms", "about-dementia/treatments/dementia-medication/medication-dementia-symptoms");
const AS_NEW_DRUGS = as("Researching new drugs for Alzheimer's disease", "about-dementia/treatments/researching-new-drugs-alzheimers-disease");
const AS_HEALTHY = as("Staying healthy to help memory", "get-support/living-with-dementia/staying-healthy-help-memory");
const NICE_NG97: LearnSource = { label: "NICE: Dementia (NG97) recommendations", url: "https://www.nice.org.uk/guidance/ng97/chapter/Recommendations" };
const NICE_LECANEMAB: LearnSource = { label: "NICE: Lecanemab (in development)", url: "https://www.nice.org.uk/guidance/indevelopment/gid-ta11220" };
const NICE_DONANEMAB: LearnSource = { label: "NICE: Donanemab (in development)", url: "https://www.nice.org.uk/guidance/indevelopment/gid-ta11221" };

export const alzheimersAnswers: LearnArticle[] = [
  {
    id: "alz-what",
    kicker: "Your brain",
    question: "What does Alzheimer's disease do in the brain?",
    hook: "Two proteins build up, as plaques and tangles. The parts of the brain for memory are usually affected first.",
    short: "Alzheimer's disease is the most common cause of dementia in the UK. Deposits of a protein called amyloid form plaques around brain cells, and deposits of tau form tangles inside them. The first areas affected are usually those for memory, so recent events are often forgotten, while older memories usually stay in the earlier stages.",
    sections: [
      {
        heading: "The most common cause",
        paragraphs: [
          "Alzheimer's disease is the most common cause of dementia in the UK. It is thought that two out of three people living with dementia in the UK have Alzheimer's disease.",
        ],
      },
      {
        heading: "Plaques and tangles",
        paragraphs: [
          "One of the proteins involved is called amyloid, deposits of which form plaques around brain cells. The other protein is called tau, deposits of which form tangles within brain cells.",
        ],
      },
      {
        heading: "Memory first",
        paragraphs: [
          "Over time, different areas of the brain shrink. The first areas usually affected are responsible for memories.",
          "One of the first parts to be damaged is the hippocampus, which has an important role in memory. The person is much less able to form new memories, so they often do not remember things that happened recently.",
        ],
      },
      {
        heading: "Older memories",
        paragraphs: [
          "Memories of events that happened a long time ago are not usually affected in the earlier stages.",
        ],
      },
      {
        heading: "Years before",
        paragraphs: [
          "Alzheimer's disease starts many years before symptoms start to show.",
        ],
      },
    ],
    helps: [
      "Tell your GP if memory problems are affecting daily life.",
      "Ask your team which type of dementia you have, and how sure they are.",
      "The Alzheimer's Society Dementia Support Line is 0333 150 3456.",
    ],
    tryThisWeek: [
      "Talk to your GP about memory changes.",
      "Ask which type of dementia it is.",
      "Save the Dementia Support Line: 0333 150 3456.",
    ],
    ask: "Which type of dementia is it, and how sure is the team?",
    sources: [NHS_AD, AS_AD, NHS_AD_CAUSES, AS_AD_SYMPTOMS],
    quiz: {
      question: "Why are recent events often forgotten first?",
      options: [{ text: "The parts of the brain for memory are usually affected first", right: true }, { text: "Older memories go first" }, { text: "It is only tiredness" }],
      why: "The first areas usually affected are responsible for memories, so new memories are harder to form.",
    },
  },
  {
    id: "alz-diagnosis",
    kicker: "Diagnosis",
    question: "How is Alzheimer's disease diagnosed, and why can it take a while?",
    hook: "There is no single test. The GP, a memory service, and sometimes scans, over several appointments.",
    short: "There is no single test for Alzheimer's disease. The GP may arrange blood tests and check your medicines to rule out other causes, then refer you to a memory service. You may have a CT or MRI scan. It can take several appointments over many months, though it is often quicker.",
    sections: [
      {
        heading: "No single test",
        paragraphs: [
          "There is no single test that can be used to diagnose Alzheimer's disease.",
        ],
      },
      {
        heading: "The GP first",
        paragraphs: [
          "The GP may organise some blood tests and ask about any medicines you are taking, to rule out other possible causes of your symptoms.",
          "If the GP thinks the symptoms may be caused by dementia, they will refer the person to a local memory service for a more detailed assessment.",
        ],
      },
      {
        heading: "The memory clinic",
        paragraphs: [
          "The specialist may be based in a memory clinic, alongside other professionals who are experts in diagnosing, caring for and advising people with dementia and their families.",
        ],
      },
      {
        heading: "Scans",
        paragraphs: [
          "You may have a CT scan, where several X-rays of the brain are taken at slightly different angles, or an MRI scan, which uses a strong magnetic field and radio waves to make detailed images of the brain.",
        ],
      },
      {
        heading: "Why it can take a while",
        paragraphs: [
          "It may take several appointments and tests over many months before a diagnosis can be confirmed, although it is often diagnosed more quickly than this.",
        ],
      },
    ],
    helps: [
      "Tell the GP about any medicines you take.",
      "Take someone with you to appointments if you can.",
      "Ask what each test is for, and when you will hear the results.",
    ],
    tryThisWeek: [
      "List your medicines for the GP.",
      "Ask someone to come with you.",
      "Ask when results will come.",
    ],
    ask: "What tests are still to come, and when will we know more?",
    sources: [NHS_AD, NHS_AD_DIAGNOSIS, AS_AD, { label: "NHS: Memory loss", url: "https://www.nhs.uk/symptoms/memory-loss-amnesia/" }],
    quiz: {
      question: "Is there one test that diagnoses Alzheimer's disease?",
      options: [{ text: "No, there is no single test", right: true }, { text: "Yes, a blood test" }, { text: "Yes, an eye test" }],
      why: "There is no single test that can be used to diagnose Alzheimer's disease.",
    },
  },
  {
    id: "alz-stages",
    kicker: "Over time",
    question: "What do the stages of Alzheimer's disease look like?",
    hook: "Early, middle and later stages, but the speed is different for everyone and cannot be predicted for sure.",
    short: "The symptoms of Alzheimer's disease are usually divided into three main stages. In the early stage, a person can still do many things by themselves or with a little support. In the middle stage, symptoms become more severe and wide-ranging. Alzheimer's tends to progress more slowly than other types, and the speed is different for everyone.",
    sections: [
      {
        heading: "Three stages",
        paragraphs: [
          "Generally, the symptoms of Alzheimer's disease are divided into three main stages.",
        ],
      },
      {
        heading: "Early stage",
        paragraphs: [
          "Early stage dementia is when a person has symptoms that are interfering with daily life, but they can still manage to do many things by themselves, or with a little support.",
        ],
      },
      {
        heading: "Middle stage",
        paragraphs: [
          "Middle stage dementia is when symptoms become more severe and wide-ranging.",
        ],
      },
      {
        heading: "Different for everyone",
        paragraphs: [
          "The rate at which the symptoms progress is different for each person. Alzheimer's disease tends to progress more slowly than the other types.",
          "There is no way to be sure how quickly a person's dementia will progress.",
        ],
      },
    ],
    helps: [
      "Accept support from other people, including friends, family and professionals.",
      "Focus on the things you can still do and enjoy.",
      "Plan ahead while things are straightforward.",
    ],
    tryThisWeek: [
      "Accept one offer of help.",
      "Do one thing you enjoy.",
      "Start one plan for the future.",
    ],
    ask: "What stage am I at, and what should we put in place now?",
    sources: [NHS_AD_SYMPTOMS, AS_STAGES, NHS_LIVING_WELL],
    quiz: {
      question: "Can anyone say exactly how quickly Alzheimer's will progress?",
      options: [{ text: "No, it is different for everyone", right: true }, { text: "Yes, it always takes five years" }, { text: "Yes, from a blood test" }],
      why: "There is no way to be sure how quickly a person's dementia will progress.",
    },
  },
  {
    id: "alz-not-memory",
    kicker: "Symptoms",
    question: "Is Alzheimer's disease only about memory?",
    hook: "No. Finding words, knowing the time and place, decisions, feelings and behaviour can all change too.",
    short: "Alzheimer's disease is not only about memory. People can have difficulty finding the right words, get confused about the time of day or where they are, and find decisions harder. They may become anxious, easily annoyed, sad or frightened, and behave in ways that seem out of character.",
    sections: [
      {
        heading: "Finding words",
        paragraphs: [
          "Language problems tend to involve difficulty finding the right words, and not being able to concentrate on what is being said.",
        ],
      },
      {
        heading: "Time and place",
        paragraphs: [
          "A person may get confused about what time of day it is, or where they are.",
        ],
      },
      {
        heading: "Decisions",
        paragraphs: [
          "A person may show poor judgement or find it harder to make decisions, and become less flexible and more hesitant to try new things.",
        ],
      },
      {
        heading: "Feelings",
        paragraphs: [
          "In the earlier stages, a person may become anxious, more easily annoyed, sad or frightened.",
        ],
      },
      {
        heading: "Behaviour",
        paragraphs: [
          "The person may start to behave in ways that seem unusual or out of character, such as becoming aggressive or suspicious of others.",
        ],
      },
    ],
    helps: [
      "Tell the team about changes in words, mood or behaviour, not just memory.",
      "Depression is very common in dementia: talk to your GP, as there are talking treatments that can help.",
      "Ask the team for support if behaviour changes, such as suspicion or aggression, are hard to manage.",
    ],
    tryThisWeek: [
      "Mention changes beyond memory.",
      "Talk to your GP about low mood.",
      "Note what seems out of character.",
    ],
    ask: "Which of these changes are part of Alzheimer's, and what could help with them?",
    sources: [AS_AD_SYMPTOMS, NHS_AD_SYMPTOMS, NHS_AD, NHS_LIVING_WELL],
    quiz: {
      question: "Which of these can be part of Alzheimer's disease?",
      options: [{ text: "Difficulty finding the right words", right: true }, { text: "Better sense of direction" }, { text: "Sharper decisions" }],
      why: "Language problems often involve difficulty finding the right words.",
    },
  },
  {
    id: "alz-tablets",
    kicker: "Treatment",
    question: "What can the Alzheimer's medicines do, and what can't they?",
    hook: "Four medicines can ease symptoms for a while. They do not stop the disease, and the new antibody medicines are not on the NHS.",
    short: "Four medicines are approved in the UK to ease the symptoms of dementia: donepezil, rivastigmine, galantamine and memantine. Their benefit is modest: they do not make symptoms go away or stop the disease, but they can improve or steady symptoms for around six to 12 months. Two newer medicines, lecanemab and donanemab, are approved in the UK but are not available on the NHS.",
    sections: [
      {
        heading: "Four medicines",
        paragraphs: [
          "There are four medicines approved in the UK to ease a person's dementia symptoms, including memory and thinking problems: donepezil, rivastigmine, galantamine and memantine.",
        ],
      },
      {
        heading: "What they can and can't do",
        paragraphs: [
          "The overall benefit of dementia medicines is modest. They do not make symptoms go away, and they do not stop the disease in the brain.",
          "Starting a medicine such as donepezil can help to improve or stabilise symptoms for around six to 12 months.",
        ],
      },
      {
        heading: "Who prescribes them",
        paragraphs: [
          "They can only be prescribed by specialists, such as psychiatrists or neurologists, or by a GP on the advice of a specialist.",
          "Memantine is used for moderate or severe Alzheimer's disease.",
        ],
      },
      {
        heading: "The newer medicines",
        paragraphs: [
          "Two disease-modifying treatments, donanemab and lecanemab, have been approved for use in the UK, but they are not available on the NHS.",
          "In July 2026, NICE paused its evaluation of both while the companies and NHS England hold commercial discussions.",
        ],
      },
    ],
    helps: [
      "Ask your specialist whether one of the four medicines is right for you.",
      "Ask your team what side effects to look out for.",
      "Ask your team about the latest on lecanemab and donanemab.",
    ],
    tryThisWeek: [
      "Ask if a medicine is right for you.",
      "Ask which side effects to watch for.",
      "Ask for an update on the newer medicines.",
    ],
    ask: "Are the tablets right for me, and what should I watch for?",
    sources: [AS_MEDICATION, NHS_AD_TREATMENT, AS_NEW_DRUGS, NICE_LECANEMAB, NICE_DONANEMAB],
    quiz: {
      question: "What can the four dementia medicines do?",
      options: [{ text: "Ease or steady symptoms for a while", right: true }, { text: "Cure Alzheimer's disease" }, { text: "Stop the disease completely" }],
      why: "They can help to improve or stabilise symptoms for around six to 12 months, but do not stop the disease.",
    },
  },
  {
    id: "alz-active",
    kicker: "Keeping active",
    question: "Does keeping the mind active help with Alzheimer's?",
    hook: "Group cognitive stimulation therapy is recommended for mild to moderate dementia. Brain-training on its own is not.",
    short: "Cognitive stimulation therapy, or CST, involves group activities and exercises to improve memory, problem-solving and language. National guidance says to offer group CST to people with mild to moderate dementia, and evidence suggests it helps. Cognitive training on its own is not recommended as a treatment for Alzheimer's.",
    sections: [
      {
        heading: "Cognitive stimulation therapy",
        paragraphs: [
          "Cognitive stimulation therapy involves taking part in group activities and exercises designed to improve memory, problem-solving skills and language ability. It involves themed activity sessions over several weeks.",
        ],
      },
      {
        heading: "The evidence",
        paragraphs: [
          "Evidence suggests that cognitive stimulation therapy benefits people with mild to moderate dementia. National guidance says to offer it in groups.",
        ],
      },
      {
        heading: "Brain training",
        paragraphs: [
          "National guidance says not to offer cognitive training to treat mild to moderate Alzheimer's disease.",
        ],
      },
      {
        heading: "Finding it",
        paragraphs: [
          "Some of these therapies may not be freely available in certain places.",
        ],
      },
    ],
    helps: [
      "Ask your memory service about group cognitive stimulation therapy.",
      "Join a local dementia-friendly group, perhaps at a memory café.",
      "Exercise regularly: a daily walk, gardening, tai chi or dancing.",
    ],
    tryThisWeek: [
      "Ask about group CST.",
      "Look for a memory café nearby.",
      "Take a daily walk.",
    ],
    ask: "Is cognitive stimulation therapy available near us?",
    sources: [NHS_DEM_TREATMENT, NICE_NG97, AS_AD_TREATMENT, NHS_LIVING_WELL],
    quiz: {
      question: "Which is recommended for mild to moderate dementia?",
      options: [{ text: "Group cognitive stimulation therapy", right: true }, { text: "Brain-training apps alone" }, { text: "Nothing helps" }],
      why: "National guidance says to offer group cognitive stimulation therapy to people with mild to moderate dementia.",
    },
  },
  {
    id: "alz-other",
    kicker: "Other causes",
    question: "What can make memory worse with Alzheimer's?",
    hook: "Infections, delirium, some medicines, low mood, and sight and hearing problems. Many can be treated.",
    short: "Other conditions can make symptoms worse, such as infections, a stroke or delirium. Some medicines can too. Chest or urine infections can cause a lot of confusion if not treated promptly, depression is very common and treatable, and sight and hearing should be checked regularly.",
    sections: [
      {
        heading: "Infections",
        paragraphs: [
          "See your GP if you feel unwell, as things like chest or urine infections can make you feel very confused if they are not treated promptly.",
        ],
      },
      {
        heading: "Other conditions",
        paragraphs: [
          "In some cases, other conditions can be responsible for symptoms getting worse, such as infections, a stroke or delirium.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "Other things, such as certain medicines, can also make the symptoms of dementia worse.",
        ],
      },
      {
        heading: "Mood",
        paragraphs: [
          "Depression is very common in dementia. Talk to your GP, as there are talking treatments that can help.",
        ],
      },
      {
        heading: "Sight and hearing",
        paragraphs: [
          "Get your sight and hearing checked regularly. If you need a hearing aid, wear it, check the batteries and keep it clean.",
        ],
      },
    ],
    helps: [
      "See your GP if you feel unwell, especially with signs of a chest or urine infection.",
      "Get your sight and hearing checked regularly.",
      "Talk to your GP about low mood.",
    ],
    tryThisWeek: [
      "See your GP if you feel unwell.",
      "Book a sight or hearing check.",
      "Mention low mood to your GP.",
    ],
    ask: "Could anything else be making my memory worse right now, like an infection or a medicine?",
    sources: [NHS_AD_SYMPTOMS, NHS_LIVING_WELL, AS_HEALTHY],
    quiz: {
      question: "What can an untreated urine infection cause?",
      options: [{ text: "A lot of confusion", right: true }, { text: "Better memory" }, { text: "Nothing at all" }],
      why: "Chest or urine infections can make you feel very confused if they are not treated promptly.",
    },
  },
  {
    id: "alz-good-days",
    kicker: "Living well",
    question: "How can I live well in the early years of Alzheimer's?",
    hook: "You are still you. Keep doing what you enjoy, join a group, keep moving and accept help.",
    short: "You are still you, even with problems with memory, concentration and planning. Focusing on the things you can still do and enjoy helps you stay positive. A dementia-friendly group or memory café, regular exercise and accepting support from friends, family and professionals all help.",
    sections: [
      {
        heading: "Still you",
        paragraphs: [
          "You are still you, even though you have problems with memory, concentration and planning.",
        ],
      },
      {
        heading: "What you can do",
        paragraphs: [
          "Focusing on the things you can still do and enjoy will help you to stay positive.",
        ],
      },
      {
        heading: "Other people",
        paragraphs: [
          "It is a good idea to join a local dementia-friendly group, perhaps at a memory café.",
        ],
      },
      {
        heading: "Moving",
        paragraphs: [
          "Exercise regularly. This could be a daily walk or gardening, or you could try tai chi or dancing.",
        ],
      },
      {
        heading: "Accepting help",
        paragraphs: [
          "Accept support from other people, including friends, family and professionals.",
        ],
      },
    ],
    helps: [
      "Focus on the things you can still do and enjoy.",
      "Join a local dementia-friendly group or memory café.",
      "Exercise regularly, and accept support from others.",
    ],
    tryThisWeek: [
      "Do one thing you enjoy.",
      "Find a memory café nearby.",
      "Take a walk, or try dancing.",
    ],
    ask: "What groups or activities are there near us for people with dementia?",
    sources: [NHS_LIVING_WELL, AS_STAGES],
    quiz: {
      question: "What can help you stay positive?",
      options: [{ text: "Focusing on what you can still do and enjoy", right: true }, { text: "Avoiding other people" }, { text: "Giving up hobbies" }],
      why: "Focusing on the things you can still do and enjoy will help you to stay positive.",
    },
  },
];
