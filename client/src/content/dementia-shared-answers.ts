import type { LearnArticle, LearnSource } from "./my-time-learn";
import { NHS_LIVING_WELL } from "./vascular-answers";

// Answers shared by more than one Dementia & memory page (content/library-conditions/brain-a.ts `learnId`):
// the home, routines and memory aids. Every sentence was written from wording checked on 20 October 2026 on
// the pages listed under each answer's `sources`; nothing is added that those pages do not say.

const NHS_HOME: LearnSource = { label: "NHS: Making your home dementia friendly", url: "https://www.nhs.uk/conditions/dementia/living-with-dementia/home-environment/" };
const NHS_VASC_TREATMENT: LearnSource = { label: "NHS: Treating vascular dementia", url: "https://www.nhs.uk/conditions/vascular-dementia/treatment/" };
const NHS_INDEPENDENT: LearnSource = { label: "NHS: Staying independent with dementia", url: "https://www.nhs.uk/conditions/dementia/living-with-dementia/staying-independent/" };
const NHS_LOOKING_AFTER: LearnSource = { label: "NHS: Looking after someone with dementia", url: "https://www.nhs.uk/conditions/dementia/living-with-dementia/looking-after-someone/" };
const NHS_CARER_ASSESSMENT: LearnSource = { label: "NHS: Carer's assessments", url: "https://www.nhs.uk/conditions/social-care-and-support-guide/support-and-benefits-for-carers/carer-assessments/" };
const AS_RELATIONSHIPS: LearnSource = { label: "Alzheimer's Society: Your relationships", url: "https://www.alzheimers.org.uk/get-support/daily-living/your-relationships" };
const AS_LPA: LearnSource = { label: "Alzheimer's Society: Lasting power of attorney", url: "https://www.alzheimers.org.uk/get-support/legal-financial/lasting-power-attorney" };
const AS_DRIVING: LearnSource = { label: "Alzheimer's Society: Driving and dementia", url: "https://www.alzheimers.org.uk/get-support/living-with-dementia/driving-dementia" };
const AS_TREATMENT_SUPPORT: LearnSource = { label: "Alzheimer's Society: Treatment and support for Alzheimer's disease", url: "https://www.alzheimers.org.uk/about-dementia/types-dementia/treatment-support-alzheimers-disease" };
const AS_SUPPORT_LINE: LearnSource = { label: "Alzheimer's Society: Dementia Support Line", url: "https://www.alzheimers.org.uk/get-support/dementia-support-line" };
const GOV_LPA: LearnSource = { label: "GOV.UK: Make, register or end a lasting power of attorney", url: "https://www.gov.uk/power-of-attorney" };
const GOV_LPA_REGISTER: LearnSource = { label: "GOV.UK: Register a lasting power of attorney", url: "https://www.gov.uk/power-of-attorney/register" };
const GOV_DEMENTIA_DRIVING: LearnSource = { label: "GOV.UK: Dementia and driving", url: "https://www.gov.uk/dementia-and-driving" };
const GOV_AFTER_DVLA: LearnSource = { label: "GOV.UK: Medical conditions and driving", url: "https://www.gov.uk/driving-medical-conditions" };

export const dementiaSharedAnswers: LearnArticle[] = [
  {
    id: "dem-planning",
    kicker: "Planning ahead",
    question: "What is a lasting power of attorney, and when should I make one?",
    hook: "A legal document that lets you choose who can make decisions for you. It is best made early, while you can make your own decisions.",
    short: "A lasting power of attorney, or LPA, lets you appoint one or more people to help you make decisions, or to make decisions for you. There are two types: health and welfare, and property and financial affairs. You must have mental capacity when you make it, so it is a good idea to start thinking about one as soon as you can.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "A lasting power of attorney is a legal document that lets you, the donor, appoint one or more people, known as attorneys, to help you make decisions or to make decisions on your behalf.",
        ],
      },
      {
        heading: "Two types",
        paragraphs: [
          "There are two types: health and welfare, and property and financial affairs.",
          "A health and welfare LPA can only be used when you are unable to make your own decisions. A property and financial affairs LPA can be used as soon as it is registered, with your permission.",
        ],
      },
      {
        heading: "While you can",
        paragraphs: [
          "You must be 18 or over and have mental capacity, the ability to make your own decisions, when you make your LPA.",
          "It is a good idea to start thinking about making an LPA as soon as you can, while you have mental capacity.",
        ],
      },
      {
        heading: "Registering it",
        paragraphs: [
          "When you have made your LPA, you need to register it with the Office of the Public Guardian. It takes 8 to 10 weeks to register if there are no mistakes in the application.",
          "There is a fee to register, shown on the government's lasting power of attorney pages. You can apply for a reduction if you earn less than £12,000.",
        ],
      },
    ],
    helps: [
      "Start thinking about an LPA as soon as you can, while you can make your own decisions.",
      "Decide whether you want one type or both: health and welfare, and property and financial affairs.",
      "Register it with the Office of the Public Guardian, and allow 8 to 10 weeks.",
    ],
    tryThisWeek: [
      "Think about who you would choose.",
      "Decide which types you want.",
      "Look at the LPA pages on GOV.UK.",
    ],
    ask: "Is now a good time to make a lasting power of attorney, and who can help us with it?",
    sources: [GOV_LPA, GOV_LPA_REGISTER, AS_LPA],
    quiz: {
      question: "When must you have mental capacity for an LPA?",
      options: [{ text: "When you make it", right: true }, { text: "Only when it is used" }, { text: "It does not matter" }],
      why: "You must have mental capacity, the ability to make your own decisions, when you make your LPA.",
    },
  },
  {
    id: "dem-driving",
    kicker: "Driving",
    question: "Can I keep driving with a dementia diagnosis?",
    hook: "You must tell DVLA. A diagnosis is not in itself a reason to stop, and you can usually keep driving while DVLA decides.",
    short: "You must tell DVLA if you have dementia. A diagnosis is not in itself a reason to stop driving, and you can usually keep driving while DVLA considers your case. DVLA may contact your doctor, arrange an examination or ask you to take a driving assessment, and you will get a decision by letter.",
    sections: [
      {
        heading: "Tell DVLA",
        paragraphs: [
          "You must tell DVLA if you have dementia. You can be fined up to £1,000 if you do not tell DVLA about a medical condition that affects your driving.",
        ],
      },
      {
        heading: "Not an automatic stop",
        paragraphs: [
          "A diagnosis of dementia is not in itself a reason to stop driving. You can usually keep driving while DVLA is considering your application.",
        ],
      },
      {
        heading: "What DVLA may do",
        paragraphs: [
          "DVLA might contact your doctor or consultant, arrange for you to be examined, or ask you to take a driving assessment, or an eyesight or driving test. You will get a decision by letter.",
        ],
      },
      {
        heading: "Later on",
        paragraphs: [
          "Most drivers with Alzheimer's disease will need to stop driving in the middle stage of dementia.",
        ],
      },
    ],
    helps: [
      "Tell DVLA about your diagnosis.",
      "Ask your doctor whether your driving is affected.",
      "Keep the letter DVLA sends with its decision.",
    ],
    tryThisWeek: [
      "Tell DVLA about your diagnosis.",
      "Ask your doctor about your driving.",
      "Keep DVLA's letter safe.",
    ],
    ask: "Is my driving affected, and what should I tell DVLA?",
    sources: [GOV_DEMENTIA_DRIVING, AS_DRIVING, GOV_AFTER_DVLA],
    quiz: {
      question: "Do you have to stop driving as soon as you are diagnosed?",
      options: [{ text: "Not necessarily, but you must tell DVLA", right: true }, { text: "Yes, straight away" }, { text: "You never need to tell anyone" }],
      why: "A diagnosis is not in itself a reason to stop driving, but you must tell DVLA.",
    },
  },
  {
    id: "dem-carers",
    kicker: "For carers",
    question: "What support is there for the person caring?",
    hook: "Your needs matter as much as the person you care for. A carer's assessment is free, and helplines are there.",
    short: "Your needs as a carer are as important as the person you are caring for. A carer's assessment is free and anyone over 18 can ask for one, through adult social services at the local council. Specialist dementia nurses, including Admiral Nurses, and dementia helplines can help.",
    sections: [
      {
        heading: "Your needs matter",
        paragraphs: [
          "Your needs as a carer are as important as the person you are caring for.",
        ],
      },
      {
        heading: "A carer's assessment",
        paragraphs: [
          "A carer's assessment is free and anyone over 18 can ask for one. Contact adult social services at your local council and ask for a carer's assessment. Assessments usually last at least an hour.",
        ],
      },
      {
        heading: "Specialist nurses",
        paragraphs: [
          "Specialist dementia nurses, such as Admiral Nurses, can give practical, clinical and emotional support to the person and their family.",
        ],
      },
      {
        heading: "Helplines",
        paragraphs: [
          "The Dementia UK Admiral Nurse Dementia Helpline is free on 0800 888 6678.",
          "The Alzheimer's Society Dementia Support Line is 0333 150 3456.",
        ],
      },
    ],
    helps: [
      "Ask adult social services at your local council for a free carer's assessment.",
      "Call the Admiral Nurse Dementia Helpline on 0800 888 6678.",
      "Call the Alzheimer's Society Dementia Support Line on 0333 150 3456.",
    ],
    tryThisWeek: [
      "Ask for a carer's assessment.",
      "Save the Admiral Nurse helpline: 0800 888 6678.",
      "Save the Dementia Support Line: 0333 150 3456.",
    ],
    ask: "Who can support me as a carer, and how do I get a carer's assessment?",
    sources: [NHS_LOOKING_AFTER, NHS_CARER_ASSESSMENT, AS_TREATMENT_SUPPORT, AS_SUPPORT_LINE],
    quiz: {
      question: "Who can ask for a carer's assessment?",
      options: [{ text: "Anyone over 18", right: true }, { text: "Only family members over 65" }, { text: "Only paid carers" }],
      why: "A carer's assessment is free and anyone over 18 can ask for one.",
    },
  },
  {
    id: "dem-telling",
    kicker: "Telling people",
    question: "How do I tell family, friends and work about my diagnosis?",
    hook: "When you are ready. Explain what it means and how people can help, and talk to your employer when you feel able.",
    short: "When you are ready, it is best to tell others about your diagnosis, and to explain what it means and how they can help. Be honest about how you are feeling. Speak to your employer when you feel ready: under the Equality Act 2010, they have to make reasonable adjustments.",
    sections: [
      {
        heading: "When you are ready",
        paragraphs: [
          "When you are ready, it is best to tell others about your diagnosis.",
        ],
      },
      {
        heading: "What to say",
        paragraphs: [
          "Try to explain what your diagnosis means and the ways in which people can help and support you. Be honest and let them know how you are feeling.",
        ],
      },
      {
        heading: "At work",
        paragraphs: [
          "You should speak to your employer as soon as you feel ready. In some jobs, such as the armed forces, you must tell your employer.",
          "Under the Equality Act 2010, your employer has to make reasonable adjustments in the workplace to help you do your job.",
        ],
      },
    ],
    helps: [
      "Tell people when you are ready, and explain how they can help.",
      "Be honest about how you are feeling.",
      "Speak to your employer when you feel ready, and ask about reasonable adjustments.",
    ],
    tryThisWeek: [
      "Choose one person to tell first.",
      "Think of one way they could help.",
      "Ask your employer about adjustments.",
    ],
    ask: "Is there anyone who could help me tell my family or my employer?",
    sources: [NHS_LIVING_WELL, AS_RELATIONSHIPS, NHS_INDEPENDENT],
    quiz: {
      question: "What does the Equality Act 2010 mean for work?",
      options: [{ text: "Your employer has to make reasonable adjustments", right: true }, { text: "You must stop working" }, { text: "Nothing at all" }],
      why: "Under the Equality Act 2010, your employer has to make reasonable adjustments to help you do your job.",
    },
  },
  {
    id: "dem-home",
    kicker: "At home",
    question: "How can the home be made easier and safer with dementia?",
    hook: "Better lighting, clear floors, colours that stand out, and signs and clocks that help with the day.",
    short: "Better lighting can help to avoid confusion and reduce the risk of falls, especially on the stairs and in the toilet. Removing rugs and trip hazards and adding grab bars helps. Contrasting colours, plain patterns, labels and large clocks make the home easier to understand.",
    sections: [
      {
        heading: "Good lighting",
        paragraphs: [
          "Most people with dementia, and older people in general, benefit from better lighting in their home. It can help to avoid confusion and reduce the risk of falls.",
          "Lighting is particularly important on the stairs and in the toilet.",
        ],
      },
      {
        heading: "Clear floors",
        paragraphs: [
          "Try to avoid rugs or mats on the floor.",
          "Changes to the home can help, such as removing loose carpet and trip hazards, making sure the home is well lit, and adding grab bars and handrails.",
        ],
      },
      {
        heading: "Colour and contrast",
        paragraphs: [
          "A toilet seat in a contrasting colour to the rest of the bathroom can help.",
          "Avoid bold patterns and stripes, as they can be confusing and disorientating.",
        ],
      },
      {
        heading: "Signs and clocks",
        paragraphs: [
          "Labels and signs on cupboards and doors can be helpful, such as a toilet sign on the bathroom door.",
          "Clocks with large displays showing the day, date and time can help.",
        ],
      },
    ],
    helps: [
      "Improve the lighting, especially on the stairs and in the toilet.",
      "Remove rugs, loose carpet and other trip hazards, and add grab bars and handrails.",
      "Use labels on cupboards and doors, and a clock that shows the day, date and time.",
    ],
    tryThisWeek: [
      "Brighten the stairs and the toilet.",
      "Remove one trip hazard.",
      "Label one cupboard or door.",
    ],
    ask: "Could someone look at our home and suggest changes that would help?",
    sources: [NHS_HOME, NHS_VASC_TREATMENT],
    quiz: {
      question: "Why can bold patterns and stripes be a problem?",
      options: [{ text: "They can be confusing and disorientating", right: true }, { text: "They are hard to clean" }, { text: "They make rooms cold" }],
      why: "Bold patterns and stripes can be confusing and disorientating.",
    },
  },
  {
    id: "dem-routines",
    kicker: "Every day",
    question: "Which routines and memory aids help with dementia?",
    hook: "A regular routine, a timetable on the fridge, a pill organiser, labels, and a clock that shows the day.",
    short: "A regular routine helps, with a weekly timetable on the kitchen wall or fridge. A pill organiser can help you remember which medicines to take when. Labels on cupboards and doors, a clock showing the day and date, and a whiteboard for daily tasks can all help.",
    sections: [
      {
        heading: "A regular routine",
        paragraphs: [
          "Have a regular routine. Put a weekly timetable on the kitchen wall or fridge, and try to plan activities for when you usually feel better, for example in the mornings.",
        ],
      },
      {
        heading: "A pill organiser",
        paragraphs: [
          "Use a pill organiser box, or dosette box, to help you remember which medicines to take when. A pharmacist can help you get one.",
        ],
      },
      {
        heading: "Labels and signs",
        paragraphs: [
          "Labels and signs on cupboards and doors can be helpful, such as a toilet sign on the bathroom door.",
        ],
      },
      {
        heading: "Clocks and boards",
        paragraphs: [
          "Clocks with large displays showing the day, date and time can help. A noticeboard or whiteboard can be used to list daily household tasks.",
        ],
      },
    ],
    helps: [
      "Put a weekly timetable on the kitchen wall or fridge.",
      "Ask a pharmacist about a pill organiser box.",
      "Use labels on cupboards and doors, and a whiteboard for daily tasks.",
    ],
    tryThisWeek: [
      "Put a timetable on the fridge.",
      "Ask a pharmacist about a pill organiser.",
      "Start a whiteboard for daily tasks.",
    ],
    ask: "Which memory aids would suit us best at this stage?",
    sources: [NHS_LIVING_WELL, NHS_HOME],
    quiz: {
      question: "Who can help you get a pill organiser box?",
      options: [{ text: "A pharmacist", right: true }, { text: "Only a hospital consultant" }, { text: "Nobody" }],
      why: "A pharmacist can help you get a pill organiser box.",
    },
  },
];
