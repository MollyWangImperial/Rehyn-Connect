import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Lewy body dementia page's own pieces (content/library-conditions/brain-a.ts
// `learnId`). Every sentence was written from wording checked on 20 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. Where sources give different
// figures, the one used names its source. General information only; it never replaces what a person's own
// team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/conditions/${path}` });
const as = (label: string, path: string): LearnSource => ({ label: `Alzheimer's Society: ${label}`, url: `https://www.alzheimers.org.uk/about-dementia/${path}` });
const lbs = (label: string, path: string): LearnSource => ({ label: `Lewy Body Society: ${label}`, url: `https://www.lewybody.org/information-and-support/${path}/` });
const NHS_DLB = nhs("Dementia with Lewy bodies", "dementia-with-lewy-bodies/");
const NHS_DLB_SYMPTOMS = nhs("Symptoms of dementia with Lewy bodies", "dementia-with-lewy-bodies/symptoms/");
const NHS_DLB_TREATMENT = nhs("Treating dementia with Lewy bodies", "dementia-with-lewy-bodies/treatment/");
const NHS_HOME = nhs("Making your home dementia friendly", "dementia/living-with-dementia/home-environment/");
const NICE_NG97: LearnSource = { label: "NICE: Dementia (NG97) recommendations", url: "https://www.nice.org.uk/guidance/ng97/chapter/Recommendations" };
const PUK_DEMENTIA: LearnSource = { label: "Parkinson's UK: Dementia", url: "https://www.parkinsons.org.uk/information-and-support/dementia" };
const LBS_SYMPTOMS = lbs("Symptoms", "symptoms");
const LBS_TREATMENT = lbs("Treatment", "treatment");
const LBS_FAQS = lbs("FAQs", "faqs");
const AS_DLB = as("Dementia with Lewy bodies", "types-dementia/dementia-with-lewy-bodies");
const AS_DLB_DIAGNOSIS = as("Diagnosing dementia with Lewy bodies", "types-dementia/dementia-with-lewy-bodies-diagnosis");
const AS_DLB_SYMPTOMS = as("Symptoms of dementia with Lewy bodies", "types-dementia/dementia-with-lewy-bodies-symptoms");
const AS_DLB_TREATMENT = as("Treating dementia with Lewy bodies", "types-dementia/dementia-with-lewy-bodies-treatments");
const AS_HALLUCINATIONS = as("Hallucinations", "stages-and-symptoms/hallucinations");
const ARUK_DLB: LearnSource = { label: "Alzheimer's Research UK: Dementia with Lewy bodies", url: "https://www.alzheimersresearchuk.org/dementia-information/types-of-dementia/dementia-with-lewy-bodies/" };

export const lewyAnswers: LearnArticle[] = [
  {
    id: "lewy-what",
    kicker: "Your brain",
    question: "What are Lewy bodies, and what do they do?",
    hook: "Clumps of a protein inside brain cells, in the areas for thinking, seeing and movement. They are also found in Parkinson's disease.",
    short: "In dementia with Lewy bodies, a protein called alpha-synuclein changes shape and sticks together inside brain cells, forming clumps called Lewy bodies. They build up in areas for thinking, visual perception and movement. The same deposits are found in Parkinson's disease. Alzheimer's Research UK says about three or four in every 20 people with dementia have dementia with Lewy bodies.",
    sections: [
      {
        heading: "Clumps of protein",
        paragraphs: [
          "In dementia with Lewy bodies, a protein called alpha-synuclein changes shape and sticks together inside brain cells. The clumps it forms are called Lewy bodies.",
        ],
      },
      {
        heading: "Thinking, seeing and moving",
        paragraphs: [
          "The deposits build up in areas of the brain responsible for thinking, visual perception and muscle movement. Lewy bodies at the base of the brain are closely linked to problems with movement.",
        ],
      },
      {
        heading: "The link with Parkinson's",
        paragraphs: [
          "These deposits are also found in people with Parkinson's disease.",
          "In dementia with Lewy bodies, memory problems and dementia symptoms appear before or at the same time as movement problems. In Parkinson's disease dementia, movement problems come a year or more before memory and thinking problems.",
        ],
      },
      {
        heading: "How common",
        paragraphs: [
          "Alzheimer's Research UK says that for every 20 people who have dementia, between three and four will have dementia with Lewy bodies. That is around 100,000 people in the UK.",
        ],
      },
    ],
    helps: [
      "Make sure the team, and every new doctor, knows it is dementia with Lewy bodies, not just dementia.",
      "Ask your team whether your movement problems and your thinking problems are linked.",
      "The Lewy Body Society, the Alzheimer's Society and Dementia UK can give support.",
    ],
    tryThisWeek: [
      "Tell every doctor it is Lewy body dementia.",
      "Ask how movement and thinking are linked.",
      "Look up the Lewy Body Society.",
    ],
    ask: "Is it dementia with Lewy bodies or Parkinson's disease dementia, and does that change anything?",
    sources: [ARUK_DLB, NHS_DLB, AS_DLB_SYMPTOMS, AS_DLB_TREATMENT, NHS_DLB_TREATMENT],
    quiz: {
      question: "Lewy bodies are also found in which condition?",
      options: [{ text: "Parkinson's disease", right: true }, { text: "Diabetes" }, { text: "Asthma" }],
      why: "The same deposits are found in people with Parkinson's disease.",
    },
  },
  {
    id: "lewy-fluctuations",
    kicker: "Symptoms",
    question: "Why do alertness and attention come and go?",
    hook: "Swings between alertness and confusion or sleepiness are common. They can change over hours, or even minutes.",
    short: "Marked swings between alertness and confusion or sleepiness are common in dementia with Lewy bodies. They can happen unexpectedly and change over minutes or hours. A person may seem to switch off, stare into space or sleep a lot, then be alert again.",
    sections: [
      {
        heading: "Swings through the day",
        paragraphs: [
          "There can be marked swings between alertness and confusion or sleepiness. This can happen unexpectedly and change over minutes or hours.",
        ],
      },
      {
        heading: "Hour to hour",
        paragraphs: [
          "These problems are likely to vary a lot throughout the day, from hour to hour or even over the course of a few minutes.",
        ],
      },
      {
        heading: "Switching off",
        paragraphs: [
          "A person may become less aware of what is going on around them and appear to switch off. They may stare into space for periods, seem drowsy and sleep a lot.",
        ],
      },
      {
        heading: "A good day at the clinic",
        paragraphs: [
          "Tests can sometimes miss symptoms if the person does one when they are having a good day.",
        ],
      },
    ],
    helps: [
      "Tell the team how alertness changes through the day.",
      "Tell the team if the person was having a good day when they were tested.",
      "If the person seems more confused than usual, get medical help, as this may be a sign of delirium.",
    ],
    tryThisWeek: [
      "Tell the team how alertness changes.",
      "Tell the team if tests fell on a good day.",
      "Get help if confusion is worse than usual.",
    ],
    ask: "How do we tell the usual ups and downs from something new, like delirium?",
    sources: [NHS_DLB_SYMPTOMS, AS_DLB_SYMPTOMS, LBS_SYMPTOMS, AS_DLB_DIAGNOSIS, AS_HALLUCINATIONS],
    quiz: {
      question: "How quickly can alertness change?",
      options: [{ text: "Over minutes or hours", right: true }, { text: "Only over years" }, { text: "It never changes" }],
      why: "Swings between alertness and confusion can happen unexpectedly and change over minutes or hours.",
    },
  },
  {
    id: "lewy-hallucinations",
    kicker: "Symptoms",
    question: "Why do people with Lewy body dementia see things that are not there?",
    hook: "Visual hallucinations are a common early symptom, often of people or animals. They can be pleasant or distressing.",
    short: "Seeing things that are not there is a common early symptom of dementia with Lewy bodies. The hallucinations are often vivid and realistic, of people or animals, and can range from pleasant to distressing. Some people mistake objects for other things. Hallucinations that do not distress the person may not need to be stopped.",
    sections: [
      {
        heading: "Common, and early",
        paragraphs: [
          "A common early symptom of dementia with Lewy bodies is visual hallucinations, seeing things that are not there. The person might describe seeing people or animals.",
        ],
      },
      {
        heading: "Vivid and real",
        paragraphs: [
          "They often take the form of complex, vivid and very realistic hallucinations of people or animals. They often last for several minutes and happen often.",
          "They can range from pleasant to distressing.",
        ],
      },
      {
        heading: "Mistaking things",
        paragraphs: [
          "Some people mistake objects for other things. For example, a pile of clothes might look like a dog.",
        ],
      },
      {
        heading: "Not always a problem",
        paragraphs: [
          "Hallucinations that are not distressing to the person may not need to be stopped.",
        ],
      },
    ],
    helps: [
      "Stay with the person and reassure them, and ask them to describe what they see.",
      "Get their eyesight and hearing checked regularly.",
      "Tell the team if hallucinations are distressing, or if the person seems more confused than usual.",
    ],
    tryThisWeek: [
      "Reassure, and ask what they see.",
      "Book an eyesight and hearing check.",
      "Tell the team about distressing hallucinations.",
    ],
    ask: "Are these hallucinations part of the Lewy body dementia, and do they need treating?",
    sources: [AS_DLB_SYMPTOMS, AS_HALLUCINATIONS, NHS_DLB_SYMPTOMS, PUK_DEMENTIA, AS_DLB_TREATMENT],
    quiz: {
      question: "Do all hallucinations need to be stopped?",
      options: [{ text: "Not if they do not distress the person", right: true }, { text: "Yes, always" }, { text: "Only at night" }],
      why: "Hallucinations that are not distressing to the person may not need to be stopped.",
    },
  },
  {
    id: "lewy-diagnosis",
    kicker: "Diagnosis",
    question: "Why is Lewy body dementia often missed at first?",
    hook: "It can be mistaken for Alzheimer's disease or delirium, and a good day at the clinic can hide the symptoms.",
    short: "There is no single test for dementia with Lewy bodies. It is often mistakenly diagnosed as another type of dementia, such as Alzheimer's disease, or mistaken for delirium. A particular brain scan that shows loss of dopamine nerve cells can help confirm it.",
    sections: [
      {
        heading: "No single test",
        paragraphs: [
          "There is no single test for dementia with Lewy bodies.",
        ],
      },
      {
        heading: "Mistaken for something else",
        paragraphs: [
          "People with dementia with Lewy bodies are often mistakenly diagnosed as having another type of dementia, such as Alzheimer's disease.",
          "It may also be mistaken for delirium, particularly if the person is first seen during an emergency admission to hospital.",
        ],
      },
      {
        heading: "A good day",
        paragraphs: [
          "Tests can sometimes miss symptoms if the person does one when they are having a good day.",
        ],
      },
      {
        heading: "A special scan",
        paragraphs: [
          "Another type of brain scan can confirm a diagnosis if it shows loss of a particular type of cells, called dopamine nerve cells, at the base of the brain.",
          "National guidance says a normal result on this kind of scan should not on its own rule dementia with Lewy bodies out.",
        ],
      },
    ],
    helps: [
      "Tell the team about hallucinations, swings in alertness, acting out dreams and movement changes.",
      "Mention if the person was having a good day when they were tested.",
      "Ask whether a scan to look at dopamine nerve cells would help.",
    ],
    tryThisWeek: [
      "List the symptoms that come and go.",
      "Mention if tests fell on a good day.",
      "Ask about the dopamine scan.",
    ],
    ask: "How sure is the team that this is Lewy body dementia, and would a scan help?",
    sources: [NHS_DLB, AS_DLB_DIAGNOSIS, NICE_NG97],
    quiz: {
      question: "What is Lewy body dementia often mistaken for?",
      options: [{ text: "Alzheimer's disease or delirium", right: true }, { text: "A cold" }, { text: "Nothing, it is easy to spot" }],
      why: "It is often mistakenly diagnosed as another type of dementia, such as Alzheimer's disease, or mistaken for delirium.",
    },
  },
  {
    id: "lewy-medicines",
    kicker: "Treatment",
    question: "Which medicines need care in Lewy body dementia?",
    hook: "Antipsychotics can cause serious reactions and are avoided whenever possible. Some dementia medicines may help.",
    short: "People with dementia with Lewy bodies can have a serious reaction to antipsychotic medicines that are usually safe in other types of dementia, so they are avoided whenever possible. Donepezil or rivastigmine may be offered, and may help with hallucinations, confusion and sleepiness. Medicines for movement may make hallucinations worse, so they need careful monitoring.",
    sections: [
      {
        heading: "Antipsychotics",
        paragraphs: [
          "People with dementia with Lewy bodies can have a serious reaction to antipsychotic medicines that are usually safe for people with other types of dementia. They can cause serious side effects and should be avoided whenever possible.",
        ],
      },
      {
        heading: "Medicines that may help",
        paragraphs: [
          "National guidance says to offer donepezil or rivastigmine to people with mild to moderate dementia with Lewy bodies.",
          "They may help improve hallucinations, confusion and sleepiness in some people.",
        ],
      },
      {
        heading: "Medicines for movement",
        paragraphs: [
          "Levodopa can help with movement problems, but it can also worsen other symptoms and needs to be carefully monitored by a doctor. Medicines for improving movement can make hallucinations worse.",
        ],
      },
      {
        heading: "Tell every doctor",
        paragraphs: [
          "The person or their family should check that medical staff know the person has dementia with Lewy bodies, not just dementia.",
          "Do not stop or change medicines by yourself. Always speak to your specialist or nurse.",
        ],
      },
    ],
    helps: [
      "Make sure every doctor and hospital knows it is dementia with Lewy bodies, not just dementia.",
      "Ask the team before starting any new medicine that affects mood or behaviour.",
      "Do not stop or change medicines by yourself: speak to your specialist or nurse.",
    ],
    tryThisWeek: [
      "Tell every doctor it is Lewy body dementia.",
      "Ask before any new mood or behaviour medicine.",
      "Never stop medicines without advice.",
    ],
    ask: "Is it written in the notes that antipsychotics should be avoided, and could donepezil or rivastigmine help?",
    sources: [AS_DLB_TREATMENT, NICE_NG97, NHS_DLB_TREATMENT, PUK_DEMENTIA],
    quiz: {
      question: "Why are antipsychotics avoided whenever possible?",
      options: [{ text: "They can cause a serious reaction", right: true }, { text: "They are too expensive" }, { text: "They do not exist" }],
      why: "People with dementia with Lewy bodies can have a serious reaction to antipsychotic medicines.",
    },
  },
  {
    id: "lewy-sleep",
    kicker: "Sleep",
    question: "Why do some people act out their dreams?",
    hook: "REM sleep behaviour disorder can make a person physically act out dreams, sometimes years before diagnosis.",
    short: "If a person has REM sleep behaviour disorder, they may physically act out their dreams, with violent movements and shouting. Poor sleep is common and can start many years before diagnosis. Removing sharp objects and putting a mattress beside the bed can help, and a medicine called clonazepam can help some people.",
    sections: [
      {
        heading: "Acting out dreams",
        paragraphs: [
          "If the person has rapid eye movement, or REM, sleep behaviour disorder, they may physically act out their dreams. Sleep can be disturbed, often with violent movements and shouting out.",
        ],
      },
      {
        heading: "Years before",
        paragraphs: [
          "Not sleeping well is a common symptom and can start many years before a person is diagnosed.",
        ],
      },
      {
        heading: "Keeping safe at night",
        paragraphs: [
          "Remove sharp objects, and put a mattress alongside the bed in case the person falls or jumps out in their sleep.",
        ],
      },
      {
        heading: "Treatment",
        paragraphs: [
          "A medicine called clonazepam can help with REM sleep behaviour disorder.",
        ],
      },
    ],
    helps: [
      "Remove sharp objects from around the bed.",
      "Put a mattress alongside the bed in case of falls.",
      "Tell the team about acting out dreams, and ask whether treatment could help.",
    ],
    tryThisWeek: [
      "Clear sharp objects from the bedside.",
      "Put a mattress beside the bed.",
      "Tell the team about the nights.",
    ],
    ask: "Could anything help with acting out dreams, and how do we keep both of us safe at night?",
    sources: [AS_DLB_SYMPTOMS, NHS_DLB, AS_DLB_TREATMENT, NHS_DLB_TREATMENT],
    quiz: {
      question: "What can help keep someone safe if they act out dreams?",
      options: [{ text: "A mattress beside the bed", right: true }, { text: "A brighter bedroom light" }, { text: "Nothing" }],
      why: "Put a mattress alongside the bed in case the person falls or jumps out in their sleep, and remove sharp objects.",
    },
  },
  {
    id: "lewy-movement",
    kicker: "Moving",
    question: "How does Lewy body dementia affect movement?",
    hook: "Movement symptoms are like Parkinson's disease, and falls are more likely. Staying active, and some checks, can help.",
    short: "The movement symptoms of dementia with Lewy bodies are similar to Parkinson's disease, and together with difficulty seeing things properly they make falls more likely. Strength and balance exercises, an eyesight test or a medicines review may reduce the risk. Physiotherapy can help, and staying active matters.",
    sections: [
      {
        heading: "Like Parkinson's",
        paragraphs: [
          "The movement symptoms of dementia with Lewy bodies are similar to those of Parkinson's disease.",
        ],
      },
      {
        heading: "Falls",
        paragraphs: [
          "Together with difficulty seeing objects properly, this can make it likely for people to fall and get hurt.",
        ],
      },
      {
        heading: "Lowering the risk",
        paragraphs: [
          "The risk of falls may be reduced by strength and balance exercises, an eyesight test or a medicines review.",
          "Physiotherapy can help with movement.",
        ],
      },
      {
        heading: "Staying active",
        paragraphs: [
          "It is vital that people with dementia with Lewy bodies stay as active as they can, physically, mentally and socially.",
        ],
      },
    ],
    helps: [
      "Ask about physiotherapy, and strength and balance exercises.",
      "Book an eyesight test, and ask for a medicines review.",
      "Stay as active as you can: physically, mentally and socially.",
    ],
    tryThisWeek: [
      "Ask about physiotherapy.",
      "Book an eyesight test.",
      "Do one active thing with someone.",
    ],
    ask: "Could a physiotherapist help with movement and falls?",
    sources: [AS_DLB_SYMPTOMS, AS_DLB_TREATMENT, NHS_DLB_TREATMENT],
    quiz: {
      question: "What may reduce the risk of falls?",
      options: [{ text: "Strength and balance exercises, an eyesight test or a medicines review", right: true }, { text: "Staying in bed" }, { text: "Nothing can help" }],
      why: "The risk of falls may be reduced by strength and balance exercises, an eyesight test or a medicines review.",
    },
  },
  {
    id: "lewy-standing",
    kicker: "Feeling dizzy",
    question: "Why might someone feel dizzy or faint when standing up?",
    hook: "Low blood pressure on standing up is common in Lewy body dementia. Rising slowly helps.",
    short: "People with dementia with Lewy bodies can have low blood pressure when standing up, which can cause dizziness and fainting. It is one of several automatic body functions that can be affected. Rising slowly helps prevent falls.",
    sections: [
      {
        heading: "Low blood pressure on standing",
        paragraphs: [
          "Low blood pressure when standing up can cause dizziness and fainting. It is called orthostatic or postural hypotension.",
        ],
      },
      {
        heading: "Part of the condition",
        paragraphs: [
          "Blood pressure dropping on standing, dizziness, falls and bladder problems can all be part of the condition.",
        ],
      },
      {
        heading: "Rising slowly",
        paragraphs: [
          "Rising slowly helps to prevent falls from low blood pressure on standing.",
        ],
      },
    ],
    helps: [
      "Stand up slowly, especially from bed.",
      "Tell the team about dizziness or fainting.",
      "Ask for a medicines review, which may help reduce the risk of falls.",
    ],
    tryThisWeek: [
      "Stand up slowly.",
      "Tell the team about any dizziness.",
      "Ask for a medicines review.",
    ],
    ask: "Could my blood pressure be checked lying and standing, and could any medicines be adding to the dizziness?",
    sources: [AS_DLB_SYMPTOMS, LBS_SYMPTOMS, LBS_FAQS, LBS_TREATMENT, AS_DLB_TREATMENT],
    quiz: {
      question: "What helps prevent falls from low blood pressure on standing?",
      options: [{ text: "Rising slowly", right: true }, { text: "Standing up quickly" }, { text: "Skipping meals" }],
      why: "Rising slowly helps prevent falls from low blood pressure on standing.",
    },
  },
  {
    id: "lewy-responding",
    kicker: "For families",
    question: "How can families respond to hallucinations?",
    hook: "Do not argue. Stay with the person, reassure them, and check what they might be mistaking.",
    short: "It is unhelpful to try to convince someone that what they are seeing is not there, and it can lead to more distress. Stay with the person, reassure them and ask them to describe what they see. A busy pattern can be mistaken for something else, and eyesight and hearing should be checked regularly.",
    sections: [
      {
        heading: "Do not argue",
        paragraphs: [
          "It is unhelpful to try to convince the person that what they are seeing is not there. Trying to convince someone they are mistaken can lead to more distress.",
        ],
      },
      {
        heading: "Stay and reassure",
        paragraphs: [
          "Stay with the person and try to reassure them. Ask them to describe their hallucination.",
        ],
      },
      {
        heading: "Look for a cause",
        paragraphs: [
          "If they describe a swarm of insects, and there is a busy pattern on a carpet, it may be a misperception.",
          "It is important to get the person's eyesight and hearing checked regularly.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Get medical help if the person seems more confused than usual, which may be a sign of delirium.",
        ],
      },
    ],
    helps: [
      "Do not argue: stay with the person and reassure them.",
      "Look for busy patterns, shadows or reflections that could be mistaken for something.",
      "Get medical help if the person seems more confused than usual.",
    ],
    tryThisWeek: [
      "Reassure, rather than argue.",
      "Look for patterns that could mislead.",
      "Get help if confusion is worse.",
    ],
    ask: "What should we do if a hallucination is frightening, and when should we call for help?",
    sources: [AS_DLB_TREATMENT, AS_HALLUCINATIONS],
    quiz: {
      question: "What helps when someone is seeing things?",
      options: [{ text: "Staying with them and reassuring them", right: true }, { text: "Arguing that it is not there" }, { text: "Leaving them alone" }],
      why: "Stay with the person and try to reassure them; arguing can lead to more distress.",
    },
  },
  {
    id: "lewy-home",
    kicker: "At home",
    question: "How can the home help with Lewy body dementia?",
    hook: "Less glare and fewer shadows, mirrors checked, curtains closed at night, and plain patterns.",
    short: "Reducing glare, shadows and reflections can help. Check mirrors, and cover or remove them if they cause confusion, and close the curtains in the evening so the person cannot see their reflection in the window. Avoid bold patterns, remove trip hazards and add grab bars and handrails.",
    sections: [
      {
        heading: "Glare and shadows",
        paragraphs: [
          "Try to reduce glare, shadows and reflections.",
        ],
      },
      {
        heading: "Mirrors and windows",
        paragraphs: [
          "Check mirrors, and cover or remove them if they are likely to cause confusion.",
          "It can help to close the curtains in the evening, so the person cannot see their reflection in the window glass.",
        ],
      },
      {
        heading: "Patterns",
        paragraphs: [
          "Avoid bold patterns and stripes, as they can be confusing and disorientating.",
        ],
      },
      {
        heading: "Safer floors",
        paragraphs: [
          "Changes to the home can help, such as removing trip hazards, making sure the home is well lit, and adding grab bars and handrails.",
        ],
      },
    ],
    helps: [
      "Reduce glare, shadows and reflections.",
      "Close the curtains in the evening, and cover mirrors if they confuse.",
      "Remove trip hazards and add grab bars and handrails.",
    ],
    tryThisWeek: [
      "Close the curtains at dusk.",
      "Check one mirror.",
      "Remove one trip hazard.",
    ],
    ask: "Could someone look at our home and suggest changes for Lewy body dementia?",
    sources: [NHS_HOME, NHS_DLB_TREATMENT],
    quiz: {
      question: "Why close the curtains in the evening?",
      options: [{ text: "So the person cannot see their reflection in the window", right: true }, { text: "To save energy only" }, { text: "It makes no difference" }],
      why: "Closing the curtains in the evening means the person cannot see their reflection in the window glass.",
    },
  },
];
