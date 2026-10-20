import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Dystonia page's pieces (content/library-conditions/brain-a.ts `learnId`).
// Every sentence was written from wording checked on 20 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. General information only; it never replaces what a
// person's own team tells them.

const duk = (label: string, path: string): LearnSource => ({ label: `Dystonia UK: ${label}`, url: `https://www.dystonia.org.uk/${path}` });
const NHS_DYSTONIA: LearnSource = { label: "NHS: Dystonia", url: "https://www.nhs.uk/conditions/dystonia/" };
const DUK_WHAT = duk("What is dystonia?", "what-is-dystonia");
const DUK_TYPES = duk("Types of dystonia", "Pages/Category/types-of-dystonia/");
const DUK_DIAGNOSIS = duk("Diagnosis and treatment", "Pages/Category/diagnosis-and-treatment/");
const DUK_DIAGNOSIS_FAQ = duk("Diagnosis and symptoms FAQs", "diagnosis-symptoms-faqs-page");
const DUK_TREATMENT_FAQ = duk("Treatment FAQs", "treatment-faqs-page");
const DUK_BOTOX = duk("Botulinum toxin injections", "botulinum-toxin-injections");
const DUK_MEDICINES = duk("Medications", "medications");
const DUK_DOPA = duk("Dopa-responsive dystonia", "dopa-responsive-dystonia");
const DUK_PHYSIO = duk("Physiotherapy", "physiotherapy");
const DUK_OT = duk("Occupational therapy", "occupational-therapy");
const DUK_COMPLEMENTARY = duk("Complementary therapies", "complementary-therapies");
const DUK_DBS = duk("Deep brain stimulation", "deep-brain-stimulation");
const DUK_EMPLOYMENT = duk("Employment", "employment");
const DUK_TRAVEL = duk("Travel and transport", "travel-transport");
const DUK_MENTAL = duk("Managing mental health", "managing-mental-health");
const DUK_GROUPS = duk("Your local support group", "Pages/Category/your-local-support-group/");
const DUK_NECK = duk("Neck dystonia", "neck-dystonia");
const DUK_HAND = duk("Hand dystonia", "hand-dystonia");
const DUK_VOICE = duk("Voice dystonia", "voice-dystonia");
const DUK_SLEEP = duk("Sleep", "sleep");
const NICE_DBS: LearnSource = { label: "NICE: Deep brain stimulation for tremor and dystonia (HTG122)", url: "https://www.nice.org.uk/guidance/htg122/chapter/1-Recommendations" };
const GOV_EYES: LearnSource = { label: "GOV.UK: Eye conditions and driving", url: "https://www.gov.uk/eye-conditions-and-driving" };

export const dystoniaAnswers: LearnArticle[] = [
  {
    id: "dys-what",
    kicker: "Understanding",
    question: "What is dystonia?",
    hook: "Uncontrolled, sometimes painful muscle spasms, caused by a problem in the part of the brain that controls movement.",
    short: "Dystonia is the name for uncontrolled and sometimes painful muscle movements, or spasms. It is caused by a problem with the part of the brain that controls movement. It is usually lifelong, but treatment can help relieve the symptoms, and in most cases it does not shorten life. Dystonia UK estimates it affects at least 100,000 people in the UK.",
    sections: [
      {
        heading: "Muscle spasms",
        paragraphs: [
          "Dystonia is the name for uncontrolled and sometimes painful muscle movements, called spasms.",
        ],
      },
      {
        heading: "From the brain",
        paragraphs: [
          "Dystonia is caused by a problem with the part of the brain that controls movement. The spasms are caused by incorrect signals from the brain.",
        ],
      },
      {
        heading: "Lifelong, but treatable",
        paragraphs: [
          "It is usually a lifelong condition, but treatment can help relieve the symptoms. In most cases it is not life limiting.",
        ],
      },
      {
        heading: "How many people",
        paragraphs: [
          "Dystonia UK estimates that dystonia affects at least 100,000 people in the UK.",
        ],
      },
    ],
    helps: [
      "Get symptoms checked by a GP: dystonia is uncommon, but it is best to have it looked at.",
      "Ask about treatment: it can help relieve the symptoms.",
      "Dystonia UK has information and local support groups.",
    ],
    tryThisWeek: [
      "Note when the spasms happen.",
      "Ask your GP about treatment.",
      "Look up Dystonia UK.",
    ],
    ask: "Which type of dystonia do I have, and could anything else be causing it?",
    sources: [NHS_DYSTONIA, DUK_WHAT],
    quiz: {
      question: "Where does the problem in dystonia start?",
      options: [{ text: "In the part of the brain that controls movement", right: true }, { text: "In the muscles themselves" }, { text: "In the bones" }],
      why: "Dystonia is caused by a problem with the part of the brain that controls movement.",
    },
  },
  {
    id: "dys-types",
    kicker: "Understanding",
    question: "What are the types of dystonia?",
    hook: "It can affect one part of the body, or more. Neck and eye dystonia are the most common.",
    short: "Focal dystonia affects one part of the body, segmental dystonia two or more parts next to each other, and generalised dystonia most or all of the body. Neck dystonia and eye dystonia are the most common types. Others affect the voice, or the hand, such as writer's cramp.",
    sections: [
      {
        heading: "How much of the body",
        paragraphs: [
          "Focal dystonia affects one part of the body. Segmental dystonia affects two or more parts next to each other. Generalised dystonia affects most or all of the body.",
        ],
      },
      {
        heading: "Neck and eyes",
        paragraphs: [
          "Neck dystonia and eye dystonia are the two most common types. Cervical dystonia, also called torticollis, affects the neck. Blepharospasm affects the eyes.",
        ],
      },
      {
        heading: "Voice",
        paragraphs: [
          "Laryngeal dystonia, also called spasmodic dysphonia, affects the voice box.",
        ],
      },
      {
        heading: "Hand",
        paragraphs: [
          "Task-specific dystonia affects the hands, arms and wrists. When hand dystonia affects writing, making it painful and harder to read, it is known as writer's cramp.",
        ],
      },
    ],
    helps: [
      "Ask which type of dystonia you have.",
      "For eye or voice dystonia, you may also be seen by an eye specialist or an ear, nose and throat specialist.",
      "Dystonia UK has information on each type.",
    ],
    tryThisWeek: [
      "Ask which type you have.",
      "Note which parts of the body are affected.",
      "Read about your type on Dystonia UK.",
    ],
    ask: "Which type of dystonia do I have, and which specialist should I see?",
    sources: [DUK_TYPES, NHS_DYSTONIA, DUK_HAND, DUK_VOICE, DUK_DIAGNOSIS],
    quiz: {
      question: "Which two types of dystonia are most common?",
      options: [{ text: "Neck and eye dystonia", right: true }, { text: "Leg and foot dystonia" }, { text: "Generalised dystonia only" }],
      why: "Neck dystonia and eye dystonia are the two most common types.",
    },
  },
  {
    id: "dys-diagnosis",
    kicker: "Diagnosis",
    question: "How is dystonia diagnosed?",
    hook: "By a neurologist, often after ruling out other conditions that look similar.",
    short: "If your GP thinks you could have dystonia, they will refer you to a neurologist for tests. The neurologist may arrange blood and urine tests and a brain scan. Dystonia can look like other conditions, so these are often ruled out first. Only a medical professional can confirm it.",
    sections: [
      {
        heading: "A neurologist",
        paragraphs: [
          "If your GP thinks you could have dystonia, they will refer you to a specialist called a neurologist for tests.",
        ],
      },
      {
        heading: "Tests",
        paragraphs: [
          "A neurologist may carry out some blood and urine tests, and arrange a brain scan to look for any problems.",
        ],
      },
      {
        heading: "Ruling things out",
        paragraphs: [
          "Symptoms of dystonia can be similar to those of other conditions, so it is often a question of ruling these out first.",
          "Only a medical professional can confirm if you have dystonia.",
        ],
      },
      {
        heading: "Other specialists",
        paragraphs: [
          "For blepharospasm you may be treated by an eye specialist, and for laryngeal dystonia by an ear, nose and throat specialist.",
        ],
      },
    ],
    helps: [
      "See your GP and describe exactly when the spasms happen.",
      "Ask what each test is for.",
      "Ask whether you need an eye or ear, nose and throat specialist too.",
    ],
    tryThisWeek: [
      "Note when the spasms happen.",
      "Ask what each test is for.",
      "Ask about other specialists.",
    ],
    ask: "Have other conditions been ruled out, and how sure is the diagnosis?",
    sources: [NHS_DYSTONIA, DUK_DIAGNOSIS, DUK_DIAGNOSIS_FAQ],
    quiz: {
      question: "Who usually diagnoses dystonia?",
      options: [{ text: "A neurologist", right: true }, { text: "A dentist" }, { text: "Anyone, online" }],
      why: "If your GP thinks you could have dystonia, they will refer you to a neurologist for tests.",
    },
  },
  {
    id: "dys-trick",
    kicker: "Understanding",
    question: "What is the sensory trick?",
    hook: "A simple touch or gesture that, for some people, can briefly ease the spasms.",
    short: "A sensory trick is a gesture, such as touching part of the face or body, that some people find can briefly relieve their dystonia. Some musicians find small changes help, such as moving keys on an instrument, using the other hand, or wearing a thin glove.",
    sections: [
      {
        heading: "A touch",
        paragraphs: [
          "A sensory trick is a gesture, such as touching a part of the face or body, which some people find can briefly relieve their dystonia.",
        ],
      },
      {
        heading: "Musicians",
        paragraphs: [
          "Some musicians find sensory tricks helpful, such as changing the position of keys on a wind instrument, using the other hand for bowing on the violin, or wearing a latex glove while playing.",
        ],
      },
      {
        heading: "Stress",
        paragraphs: [
          "Stress and anxiety are known to make the symptoms worse.",
        ],
      },
    ],
    helps: [
      "Notice whether any touch or gesture briefly eases your spasms.",
      "Tell your neurologist about any trick that helps: it can be useful information.",
      "Look for ways to reduce stress, which can make symptoms worse.",
    ],
    tryThisWeek: [
      "Notice any touch that helps.",
      "Tell your neurologist about it.",
      "Try one way to ease stress.",
    ],
    ask: "Is my sensory trick a useful clue for my diagnosis or treatment?",
    sources: [DUK_TREATMENT_FAQ, DUK_HAND, DUK_NECK],
    quiz: {
      question: "What is a sensory trick?",
      options: [{ text: "A touch or gesture that can briefly ease the spasms", right: true }, { text: "A type of injection" }, { text: "A brain scan" }],
      why: "A sensory trick is a gesture, such as touching part of the face, which some people find can briefly relieve their dystonia.",
    },
  },
  {
    id: "dys-botox",
    kicker: "Treatment",
    question: "What should I expect from botulinum toxin injections?",
    hook: "Injections into the affected muscles, usually repeated about every 3 months. They take a few days to start working.",
    short: "Botulinum toxin is injected directly into the affected muscles, and usually needs repeating about every 3 months. It reduces the extra muscle activity caused by dystonia. It usually takes a few days to work and lasts 12 to 16 weeks. It can take several rounds to get relief, and side effects can include pain at the injection site and unwanted muscle weakness.",
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "The toxin affects the nerves where they meet the muscles, and reduces the extra muscle activity caused by dystonia.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "The injections go directly into the affected muscles, and need to be repeated about every 3 months.",
          "They usually take a few days to have an effect, and can last from 12 to 16 weeks.",
        ],
      },
      {
        heading: "Finding the right dose",
        paragraphs: [
          "When you first start, it can often take several rounds to get relief.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Side effects can include pain and bruising at the injection site, flu-like symptoms, and unwanted muscle weakness around the injected muscles. In neck dystonia, some people have difficulty swallowing.",
        ],
      },
    ],
    helps: [
      "Allow a few days for the injections to work, and several rounds to find the right dose.",
      "Keep a note of how long each round lasts.",
      "Tell your team about side effects, such as difficulty swallowing.",
    ],
    tryThisWeek: [
      "Note when this round starts working.",
      "Note when it wears off.",
      "Report any swallowing trouble.",
    ],
    ask: "How often should I have injections, and what should I watch for?",
    sources: [NHS_DYSTONIA, DUK_BOTOX, DUK_TREATMENT_FAQ],
    quiz: {
      question: "How often are botulinum toxin injections usually repeated?",
      options: [{ text: "About every 3 months", right: true }, { text: "Every day" }, { text: "Once, for life" }],
      why: "The injections need to be repeated about every 3 months.",
    },
  },
  {
    id: "dys-tablets",
    kicker: "Treatment",
    question: "When are tablets used for dystonia?",
    hook: "Mostly when more of the body is affected. One rare type responds very well to levodopa.",
    short: "Medicines to relax the muscles can be given as tablets or injections when a larger part of the body is affected. They work best in more generalised types of dystonia. They include anticholinergics and GABA agonists, which act as muscle relaxants. Dopa-responsive dystonia, a rare genetic type, usually responds to levodopa.",
    sections: [
      {
        heading: "For larger areas",
        paragraphs: [
          "Medicines to relax the muscles in a larger part of the body can be given as tablets, or as injections into a vein. They are proven to work best in more generalised types of dystonia.",
        ],
      },
      {
        heading: "The medicines",
        paragraphs: [
          "Anticholinergic medicines block the effect of a chemical messenger called acetylcholine. GABA agonists act as a muscle relaxant. Most of these medicines are taken as a tablet.",
        ],
      },
      {
        heading: "Dopa-responsive dystonia",
        paragraphs: [
          "Dopa-responsive dystonia is a rare but highly treatable genetic form of dystonia that usually responds to a medicine called levodopa.",
        ],
      },
    ],
    helps: [
      "Ask whether tablets suit your type of dystonia.",
      "Ask what side effects to look out for.",
      "Ask whether dopa-responsive dystonia has been considered.",
    ],
    tryThisWeek: [
      "Ask if tablets suit your type.",
      "Ask about side effects.",
      "Ask about dopa-responsive dystonia.",
    ],
    ask: "Would tablets help my type of dystonia, and has dopa-responsive dystonia been ruled out?",
    sources: [NHS_DYSTONIA, DUK_MEDICINES, DUK_DOPA],
    quiz: {
      question: "Which rare type of dystonia usually responds to levodopa?",
      options: [{ text: "Dopa-responsive dystonia", right: true }, { text: "Writer's cramp" }, { text: "All types" }],
      why: "Dopa-responsive dystonia is a rare, highly treatable genetic form that usually responds to levodopa.",
    },
  },
  {
    id: "dys-physio",
    kicker: "Therapy",
    question: "Can physiotherapy help dystonia?",
    hook: "It can, from a physiotherapist who knows dystonia. The wrong exercises can make it worse.",
    short: "Physiotherapy and occupational therapy may help. Physiotherapy should come from someone who knows about dystonia, because the wrong exercises or stretches can make symptoms worse. The results can be significant, but it is not a quick fix. Occupational therapy can help you stay independent at home, at work or in education.",
    sections: [
      {
        heading: "It may help",
        paragraphs: [
          "Physiotherapy and occupational therapy may help.",
        ],
      },
      {
        heading: "The right physiotherapist",
        paragraphs: [
          "It is important that physiotherapy is provided by physiotherapists who know about dystonia. The wrong exercises or stretches may make symptoms worse.",
        ],
      },
      {
        heading: "Not a quick fix",
        paragraphs: [
          "The results can be significant, but it is not a quick or easy fix.",
        ],
      },
      {
        heading: "Occupational therapy",
        paragraphs: [
          "Occupational therapy can help you live as independently as possible, at home, at work or in education.",
          "Complementary therapies are not an alternative to treatment from conventional medicine.",
        ],
      },
    ],
    helps: [
      "Ask for a physiotherapist who knows about dystonia.",
      "Avoid exercises or stretches that have not been suggested for your dystonia.",
      "Ask about occupational therapy for home or work.",
    ],
    tryThisWeek: [
      "Ask for a dystonia-aware physiotherapist.",
      "Check exercises with your team.",
      "Ask about occupational therapy.",
    ],
    ask: "Is there a physiotherapist near me who knows about dystonia?",
    sources: [NHS_DYSTONIA, DUK_PHYSIO, DUK_OT, DUK_COMPLEMENTARY],
    quiz: {
      question: "Why should physiotherapy come from someone who knows dystonia?",
      options: [{ text: "The wrong exercises can make symptoms worse", right: true }, { text: "It is quicker" }, { text: "It does not matter" }],
      why: "Inappropriate exercises or stretching may make symptoms worse.",
    },
  },
  {
    id: "dys-dbs",
    kicker: "Treatment",
    question: "What is deep brain stimulation for dystonia?",
    hook: "A small device, like a pacemaker, offered when other treatments have not helped enough.",
    short: "Deep brain stimulation may be offered on the NHS if other treatments do not help. A small device, similar to a pacemaker, is put under the skin of the chest or tummy. It is usually only offered for severe generalised dystonia, neck dystonia or dystonic tremor, and many people still need injections or tablets afterwards. NICE supports its use.",
    sections: [
      {
        heading: "When it is offered",
        paragraphs: [
          "Deep brain stimulation may be offered on the NHS if other treatments do not help. It is usually only offered for severe generalised dystonia, neck dystonia or dystonic tremor, when other treatments have not given enough relief.",
        ],
      },
      {
        heading: "The device",
        paragraphs: [
          "It involves putting a small device, similar to a pacemaker, under the skin of your chest or tummy.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "Many people still need to keep having botulinum toxin injections or tablets.",
          "Deep brain stimulation can reduce the pain caused by dystonia.",
        ],
      },
      {
        heading: "The evidence",
        paragraphs: [
          "NICE says the evidence on the safety and effectiveness of deep brain stimulation for dystonia is adequate to support its use.",
        ],
      },
    ],
    helps: [
      "Ask whether deep brain stimulation could be an option if other treatments stop working.",
      "Ask what it would and would not change for you.",
      "Ask whether you would still need injections or tablets.",
    ],
    tryThisWeek: [
      "Ask if it could be an option.",
      "Ask what it would change.",
      "Ask about other treatments afterwards.",
    ],
    ask: "Could deep brain stimulation be an option if injections stop working?",
    sources: [NHS_DYSTONIA, DUK_DBS, NICE_DBS],
    quiz: {
      question: "Where is the deep brain stimulation device placed?",
      options: [{ text: "Under the skin of the chest or tummy", right: true }, { text: "In the hand" }, { text: "Outside the body" }],
      why: "A small device, similar to a pacemaker, is put under the skin of the chest or tummy.",
    },
  },
  {
    id: "dys-pain",
    kicker: "Living with it",
    question: "What eases pain with dystonia?",
    hook: "Pain is common. Treating the dystonia itself, positioning, and some therapies can help.",
    short: "Dystonia can make daily activities painful and difficult, and some people also have pain, poor sleep and mental health problems. Deep brain stimulation can reduce pain in some people. Hypnosis is mainly used to help with pain management, and many people find pillows and positioning important to reduce discomfort.",
    sections: [
      {
        heading: "Common",
        paragraphs: [
          "Dystonia can have a big effect on your life and make daily activities painful and difficult.",
          "Some people also have non-movement symptoms, including pain, sleep problems and mental health issues.",
        ],
      },
      {
        heading: "Treating the dystonia",
        paragraphs: [
          "Deep brain stimulation can reduce the pain caused by dystonia.",
        ],
      },
      {
        heading: "Therapies",
        paragraphs: [
          "Hypnosis is mainly used to help with pain management. Complementary therapies are not an alternative to conventional treatment.",
        ],
      },
      {
        heading: "Positioning",
        paragraphs: [
          "Many people with dystonia find that pillow arrangement and positioning are especially important to reduce discomfort.",
        ],
      },
    ],
    helps: [
      "Tell your team about pain: it is part of dystonia for many people.",
      "Try different pillow arrangements and positions to reduce discomfort.",
      "Ask whether your treatment could be adjusted to help the pain.",
    ],
    tryThisWeek: [
      "Tell your team about pain.",
      "Try a different pillow position.",
      "Ask about adjusting treatment.",
    ],
    ask: "What can we do about the pain from my dystonia?",
    sources: [NHS_DYSTONIA, DUK_WHAT, DUK_DBS, DUK_COMPLEMENTARY, DUK_SLEEP],
    quiz: {
      question: "What do many people find important to reduce discomfort?",
      options: [{ text: "Pillow arrangement and positioning", right: true }, { text: "Sleeping less" }, { text: "Ignoring it" }],
      why: "Many people find pillow arrangement and positioning especially important to reduce discomfort.",
    },
  },
  {
    id: "dys-work",
    kicker: "Work and driving",
    question: "How can I manage work and driving with dystonia?",
    hook: "Ask about reasonable adjustments and Access to Work. Tell DVLA if your dystonia may affect your driving.",
    short: "Activities like writing, typing or playing an instrument can trigger dystonia. Speak to your employer about reasonable adjustments, and explain what you can do as well as what you cannot. Access to Work may help. If you drive, you must tell DVLA if your dystonia may affect your ability to drive safely; it does not necessarily mean you will have to stop.",
    sections: [
      {
        heading: "Triggers at work",
        paragraphs: [
          "Dystonia can be triggered by activities like writing, typing or playing an instrument.",
        ],
      },
      {
        heading: "Adjustments",
        paragraphs: [
          "Speak to your employer about any reasonable adjustments. Explain clearly what you can do, as well as what you cannot do.",
          "You may also be entitled to extra help from the government's Access to Work scheme.",
        ],
      },
      {
        heading: "Driving",
        paragraphs: [
          "If you drive, you must tell DVLA, or DVA in Northern Ireland, if you have any form of dystonia that may affect your ability to drive safely.",
          "Having dystonia does not necessarily mean you will have to stop driving, but you may need a medical or driving assessment.",
        ],
      },
      {
        heading: "Eyes",
        paragraphs: [
          "Blepharospasm is one of the eye conditions you must tell DVLA about.",
        ],
      },
    ],
    helps: [
      "Speak to your employer about reasonable adjustments.",
      "Look up Access to Work.",
      "Tell DVLA if your dystonia may affect your driving.",
    ],
    tryThisWeek: [
      "List what you can and cannot do at work.",
      "Look up Access to Work.",
      "Check whether to tell DVLA.",
    ],
    ask: "Does my dystonia affect my driving, and what should I tell my employer?",
    sources: [NHS_DYSTONIA, DUK_EMPLOYMENT, DUK_TRAVEL, GOV_EYES],
    quiz: {
      question: "Does dystonia always mean you must stop driving?",
      options: [{ text: "No, but you must tell DVLA if it may affect your driving", right: true }, { text: "Yes, always" }, { text: "You never need to tell anyone" }],
      why: "Having dystonia does not necessarily mean you have to stop driving, but DVLA must be told if it may affect your driving.",
    },
  },
  {
    id: "dys-mood",
    kicker: "Feelings",
    question: "How can dystonia affect mood and confidence?",
    hook: "Anxiety and depression are more common with dystonia, and stress can make symptoms worse. Help is there.",
    short: "Rates of anxiety and depression are higher in people with dystonia than in the general population. Stress and anxiety can make the symptoms worse. Common treatments include medication and talking therapies, and support groups can help with feeling isolated.",
    sections: [
      {
        heading: "More common",
        paragraphs: [
          "Research shows that rates of anxiety and depression are higher in people with dystonia than in the general population.",
        ],
      },
      {
        heading: "Stress and symptoms",
        paragraphs: [
          "Stress and anxiety are known to make the symptoms worse.",
        ],
      },
      {
        heading: "Treatment",
        paragraphs: [
          "Common treatments include medication and talking therapies.",
        ],
      },
      {
        heading: "Not alone",
        paragraphs: [
          "Living with dystonia can feel isolating, but you are not alone. Dystonia UK has in-person support groups across the UK.",
        ],
      },
    ],
    helps: [
      "Talk to your GP about anxiety or low mood: talking therapies can help.",
      "Look for a local support group.",
      "Find ways to reduce stress, which can make symptoms worse.",
    ],
    tryThisWeek: [
      "Mention mood to your GP.",
      "Look up a local support group.",
      "Try one way to ease stress.",
    ],
    ask: "Could talking therapy help me with the anxiety around my dystonia?",
    sources: [DUK_MENTAL, DUK_NECK, DUK_GROUPS],
    quiz: {
      question: "What can make dystonia symptoms worse?",
      options: [{ text: "Stress and anxiety", right: true }, { text: "Talking therapies" }, { text: "Support groups" }],
      why: "Stress and anxiety are known to make the symptoms worse.",
    },
  },
  {
    id: "dys-telling",
    kicker: "Telling people",
    question: "How can I explain dystonia to other people?",
    hook: "Explain what you find difficult, and what you can still do. With people who share it, you may not need to explain at all.",
    short: "Dystonia is not well known, which can make it hard to explain. It helps to explain what your difficulties are, and what you can do as well as what you cannot. In a support group you do not have to explain everything; you can just be yourself and be understood.",
    sections: [
      {
        heading: "What to say",
        paragraphs: [
          "Explain what your difficulties are. Make sure you explain clearly what you can do, as well as what you cannot do.",
        ],
      },
      {
        heading: "A brain condition",
        paragraphs: [
          "It can help to explain that dystonia is caused by a problem with the part of the brain that controls movement, and that the spasms are not something you can control.",
        ],
      },
      {
        heading: "With people who know",
        paragraphs: [
          "In a support group you do not have to explain everything. You can just be yourself and be understood.",
        ],
      },
    ],
    helps: [
      "Explain what you find difficult, and what you can still do.",
      "Share information from Dystonia UK with people close to you.",
      "Look for a support group, where you do not have to explain everything.",
    ],
    tryThisWeek: [
      "Write one sentence that explains your dystonia.",
      "Share a Dystonia UK page with someone.",
      "Look up a support group.",
    ],
    ask: "Is there anyone who can help me explain my dystonia to my family or employer?",
    sources: [DUK_EMPLOYMENT, NHS_DYSTONIA, DUK_WHAT, DUK_GROUPS],
    quiz: {
      question: "What helps when explaining dystonia?",
      options: [{ text: "Saying what you can do, as well as what you cannot", right: true }, { text: "Saying nothing at all" }, { text: "Only describing the worst days" }],
      why: "Explain clearly what you can do, as well as what you cannot do.",
    },
  },
];
