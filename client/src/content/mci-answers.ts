import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Mild cognitive impairment page's own pieces (content/library-conditions/
// brain-a.ts `learnId`). Every sentence was written from wording checked on 20 October 2026 on the pages
// listed under each answer's `sources`; nothing is added that those pages do not say. Test scores are never
// shown. General information only; it never replaces what a person's own team tells them.

const as = (label: string, path: string): LearnSource => ({ label: `Alzheimer's Society: ${label}`, url: `https://www.alzheimers.org.uk/${path}` });
const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const AS_MCI = as("Mild cognitive impairment (MCI)", "about-dementia/types-dementia/mild-cognitive-impairment-mci");
const AS_MCI_CAUSES = as("Causes of mild cognitive impairment", "about-dementia/types-dementia/mild-cognitive-impairment-mci-causes");
const AS_MCI_TREATMENTS = as("Diagnosis and treatment of mild cognitive impairment", "about-dementia/types-dementia/mild-cognitive-impairment-treatments");
const AS_MCI_TIPS = as("Tips for managing an MCI diagnosis", "about-dementia/types-dementia/tips-managing-mci-diagnosis");
const AS_SIGNS = as("Do I have dementia? Signs to look out for", "about-dementia/worried-about-memory-problems/do-i-have-dementia-signs");
const AS_REDUCE_RISK = as("Reduce your risk of dementia", "about-dementia/managing-the-risk-of-dementia/reduce-your-risk-of-dementia");
const AS_RISK_NEWS = as("News: one in four over-40s can't name a single risk factor for dementia (26 August 2026)", "news/2026-08-26/new-research-reveals-one-four-over-40s-cant-name-single-risk-factor-dementia");
const AS_HEARING = as("Hearing loss and the risk of dementia", "about-dementia/managing-the-risk-of-dementia/reduce-your-risk-of-dementia/hearing-loss");
const AS_SLEEP = as("Sleep and the risk of dementia", "about-dementia/managing-the-risk-of-dementia/reduce-your-risk-of-dementia/sleep");
const AS_AIDS = as("Memory aids and tools", "get-support/living-with-dementia/memory-aids-and-tools");
const NHS_DEM_SYMPTOMS = nhs("Symptoms of dementia", "conditions/dementia/symptoms-and-diagnosis/symptoms/");
const NHS_MEMORY_LOSS = nhs("Memory loss", "symptoms/memory-loss-amnesia/");
const NHS_DEM_DIAGNOSIS = nhs("How to get a dementia diagnosis", "conditions/dementia/symptoms-and-diagnosis/diagnosis/");
const NHS_DEM_TESTS = nhs("Tests used to diagnose dementia", "conditions/dementia/symptoms-and-diagnosis/tests/");
const NHS_PREVENTION = nhs("Can dementia be prevented?", "conditions/dementia/about-dementia/prevention/");
const NHS_B12 = nhs("Symptoms of vitamin B12 or folate deficiency anaemia", "conditions/vitamin-b12-or-folate-deficiency-anaemia/symptoms/");
const NHS_THYROID = nhs("Underactive thyroid", "conditions/underactive-thyroid-hypothyroidism/");
const NHS_HEARING = nhs("Hearing loss", "conditions/hearing-loss/");
const NHS_INSOMNIA = nhs("Insomnia", "conditions/insomnia/");

export const mciAnswers: LearnArticle[] = [
  {
    id: "mci-forgetting",
    kicker: "Memory",
    question: "How can I tell ordinary forgetting from something more?",
    hook: "Memory can get less reliable with age without stopping everyday life. Problems that last months, or get in the way, are worth checking.",
    short: "Memory and concentration can become less reliable with age, but this rarely stops people doing everyday things. Forgetting where you put your phone, but retracing your steps to find it, is common. If problems with thinking continue for more than a few months, or get noticeably worse over months, see a GP: it could be something treatable.",
    sections: [
      {
        heading: "Getting older",
        paragraphs: [
          "Some mental abilities, such as memory and concentration, can become less reliable as a person gets older. This often becomes more noticeable around age 60 and older. It can be frustrating, but it rarely stops a person from doing normal everyday activities.",
        ],
      },
      {
        heading: "Common slips",
        paragraphs: [
          "Forgetting something you were told a while ago, or where you put something like your phone, but being able to retrace your steps to find it, is a common sign of ageing.",
          "If a problem is mildly annoying but does not affect your ability to do things in everyday life, it is unlikely to be a sign of dementia.",
        ],
      },
      {
        heading: "When it lasts",
        paragraphs: [
          "If problems with thinking continue for more than a few months, it could be a sign of mild cognitive impairment.",
          "A sign to look out for is mental abilities getting noticeably worse over several months, rather than gradual changes over many years.",
        ],
      },
      {
        heading: "See a GP",
        paragraphs: [
          "Most people forget things from time to time, but see a GP if you keep having problems with your memory. It could be caused by something that can be treated.",
        ],
      },
    ],
    helps: [
      "See a GP if you keep having problems with your memory.",
      "It might be useful to bring someone with you who can help describe the problems.",
      "Listen to the people close to you: it can be hard to see changes in yourself.",
    ],
    tryThisWeek: [
      "Book a GP appointment if it keeps happening.",
      "Ask someone to come with you.",
      "Ask a close friend what they have noticed.",
    ],
    ask: "Is this normal ageing, or should it be looked into further?",
    sources: [AS_MCI, AS_SIGNS, NHS_MEMORY_LOSS],
    quiz: {
      question: "When are memory problems worth seeing a GP about?",
      options: [{ text: "When they keep happening", right: true }, { text: "Never" }, { text: "Only after age 90" }],
      why: "See a GP if you keep having problems with your memory. It could be caused by something that can be treated.",
    },
  },
  {
    id: "mci-what",
    kicker: "Understanding MCI",
    question: "What is mild cognitive impairment, and will it become dementia?",
    hook: "Memory or thinking problems that do not stop everyday life. Many people stay the same or get better, and some go on to develop dementia.",
    short: "Mild cognitive impairment is when a person has problems with memory or thinking that do not get in the way of everyday tasks. It is not the same as dementia, and it does not always get worse. About 4 in 10 people with MCI get better. About one in seven diagnosed by a memory service develop dementia over the next year, and around half after five years.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Mild cognitive impairment is when a person starts to have problems with their memory or thinking. These may cause difficulties, but not so much that they interfere with doing everyday tasks.",
        ],
      },
      {
        heading: "Not dementia",
        paragraphs: [
          "Having MCI is not the same as having dementia. A person with MCI has milder symptoms, and is still able to do most everyday tasks without support.",
          "Dementia always gets worse over time. This is not always the case for MCI.",
        ],
      },
      {
        heading: "Many stay the same, or improve",
        paragraphs: [
          "In some people, the symptoms stay the same and do not get worse. About 4 in 10 people with MCI will get better, although there is no guarantee the recovery will be permanent.",
        ],
      },
      {
        heading: "Some go on to dementia",
        paragraphs: [
          "About one in every seven people diagnosed with MCI by their memory service will develop dementia over the next 12 months. Around one in two will have dementia after five years.",
          "The majority of people with MCI younger than 65 do not develop dementia.",
        ],
      },
    ],
    helps: [
      "Look after your health: depression, diabetes, high blood pressure and being very overweight all raise the risk of MCI getting worse.",
      "Go to your follow-up appointments.",
      "Contact the GP if symptoms get worse before your next review.",
    ],
    tryThisWeek: [
      "Check your blood pressure is being looked after.",
      "Note the date of your next review.",
      "Contact the GP if things get worse.",
    ],
    ask: "What do you think is causing my MCI, and what are the chances it changes?",
    sources: [AS_MCI, AS_MCI_CAUSES, NHS_DEM_SYMPTOMS, AS_MCI_TREATMENTS],
    quiz: {
      question: "Does MCI always turn into dementia?",
      options: [{ text: "No, many people stay the same or get better", right: true }, { text: "Yes, always" }, { text: "Yes, within a month" }],
      why: "In some people symptoms stay the same, and about 4 in 10 people with MCI get better.",
    },
  },
  {
    id: "mci-tests",
    kicker: "Tests",
    question: "What happens in the memory tests?",
    hook: "Questions about your symptoms, a short check of thinking skills, blood tests, and sometimes a scan.",
    short: "The GP will ask about your symptoms, review your physical health and medicines, and briefly test your thinking. The tests look at memory, attention, language and awareness of time and place. They cannot diagnose dementia on their own, but they can show whether more checks are needed. Blood tests and sometimes a brain scan rule out other causes.",
    sections: [
      {
        heading: "At the GP",
        paragraphs: [
          "The GP will ask about your symptoms, including when they started and how they are affecting daily life.",
          "They will review your physical health and any medicines you are taking. They will also briefly test your thinking skills.",
        ],
      },
      {
        heading: "Thinking tests",
        paragraphs: [
          "There are several different tests. A common one used by GPs is the General Practitioner Assessment of Cognition, or GPCOG.",
          "The tests look at different mental abilities, including short and long-term memory, concentration and attention, language and communication, and awareness of time and place.",
        ],
      },
      {
        heading: "What they can show",
        paragraphs: [
          "These tests cannot diagnose dementia, but they may show memory difficulties that need further investigation.",
        ],
      },
      {
        heading: "Blood tests and scans",
        paragraphs: [
          "Blood tests usually check things like thyroid function and vitamin B12 and folate levels.",
          "A brain scan may be requested to check that the symptoms are not caused by a brain injury or tumour, but a scan is not always needed.",
        ],
      },
      {
        heading: "Bring someone",
        paragraphs: [
          "It might be useful to bring someone with you who can help describe the problems you are having.",
        ],
      },
    ],
    helps: [
      "Bring someone with you who can help describe the problems.",
      "Take a list of the medicines you take.",
      "Ask what each test is for, and what happens next.",
    ],
    tryThisWeek: [
      "Ask someone to come with you.",
      "List your medicines.",
      "Ask what happens next.",
    ],
    ask: "What did the tests show, and what happens next?",
    sources: [AS_MCI_TREATMENTS, NHS_DEM_TESTS, NHS_MEMORY_LOSS],
    quiz: {
      question: "Can a short memory test diagnose dementia on its own?",
      options: [{ text: "No, but it can show if more checks are needed", right: true }, { text: "Yes, always" }, { text: "It has nothing to do with memory" }],
      why: "These tests cannot diagnose dementia, but they may show memory difficulties that need further investigation.",
    },
  },
  {
    id: "mci-mimics",
    kicker: "Other causes",
    question: "What else can cause memory problems?",
    hook: "Sleep, medicines, low mood or stress, sight or hearing, infections, and things like thyroid or vitamin B12 levels.",
    short: "Memory problems do not necessarily mean dementia. Sleep problems, side effects of medicines, depression, anxiety or stress, sight or hearing loss, infections, and high or low levels of vitamins, hormones or sugars can all cause them. An underactive thyroid or low vitamin B12 can affect thinking, and blood tests check for these.",
    sections: [
      {
        heading: "Not always dementia",
        paragraphs: [
          "Memory problems do not necessarily mean you have dementia.",
        ],
      },
      {
        heading: "Sleep",
        paragraphs: [
          "Sleep disorders can cause problems, for example not being able to sleep, called insomnia, or not breathing easily while asleep, called sleep apnoea.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "Side effects of medicines that cause confusion or drowsiness can affect memory and thinking.",
        ],
      },
      {
        heading: "Mood and stress",
        paragraphs: [
          "Mental health problems, such as depression, anxiety or long-term stress, can cause memory problems.",
        ],
      },
      {
        heading: "Sight, hearing and infections",
        paragraphs: [
          "Sight or hearing loss, and infections, including the after-effects of COVID or other viruses, can play a part.",
        ],
      },
      {
        heading: "Thyroid and vitamins",
        paragraphs: [
          "High or low levels of vitamins, minerals, hormones or sugars in the body can cause problems. An underactive thyroid can make it difficult to concentrate or think clearly, and low vitamin B12 can affect memory, understanding and judgement.",
        ],
      },
    ],
    helps: [
      "See a GP: memory problems could be caused by something that can be treated.",
      "Tell the GP about all the medicines you take.",
      "Get help for sleep problems, low mood or stress.",
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "List all your medicines.",
      "Mention sleep, mood or stress.",
    ],
    ask: "Have thyroid, vitamin B12, my medicines, sleep and mood been checked?",
    sources: [AS_MCI_CAUSES, NHS_DEM_DIAGNOSIS, NHS_B12, NHS_THYROID, NHS_MEMORY_LOSS],
    quiz: {
      question: "Which of these can cause memory problems?",
      options: [{ text: "Low vitamin B12", right: true }, { text: "Drinking enough water" }, { text: "Good sleep" }],
      why: "Low vitamin B12 can affect memory, understanding and judgement.",
    },
  },
  {
    id: "mci-protect",
    kicker: "Brain health",
    question: "What protects the brain?",
    hook: "Fourteen risk factors can be changed. Addressing them could prevent or delay almost half of dementia cases.",
    short: "The 2024 Lancet Commission found 14 risk factors for dementia that can be changed. Addressing them could prevent or delay almost half of dementia cases, although there is no guaranteed way to prevent dementia. Regular physical activity, not smoking, staying social and keeping blood pressure healthy all help, and it is never too late to start.",
    sections: [
      {
        heading: "Fourteen risk factors",
        paragraphs: [
          "The 2024 Lancet Commission on dementia, part-funded by Alzheimer's Society, identified 14 risk factors that can be changed and that can increase a person's likelihood of developing dementia.",
        ],
      },
      {
        heading: "Almost half",
        paragraphs: [
          "There is currently no guaranteed way to prevent dementia. But evidence suggests that addressing these factors could prevent or delay almost half of dementia cases.",
        ],
      },
      {
        heading: "Moving",
        paragraphs: [
          "Regular physical activity is one of the best ways to reduce your risk of dementia.",
        ],
      },
      {
        heading: "Smoking and the heart",
        paragraphs: [
          "If you smoke, it is never too late to quit.",
          "Keep your blood pressure at a healthy level. What is good for your heart is also good for your brain.",
        ],
      },
      {
        heading: "Staying social",
        paragraphs: [
          "Social activity is a great way to practise using your brain, especially in older age.",
        ],
      },
      {
        heading: "Never too late",
        paragraphs: [
          "It is best to start from at least midlife, in your 40s and 50s. But it is never too late for the brain to get some benefit from living more healthily.",
        ],
      },
    ],
    helps: [
      "Be physically active regularly.",
      "If you smoke, it is never too late to quit.",
      "Keep your blood pressure healthy, and stay socially active.",
    ],
    tryThisWeek: [
      "Plan some regular activity.",
      "Get your blood pressure checked.",
      "See a friend, or join a group.",
    ],
    ask: "Which of the risk factors apply to me, and which should I start with?",
    sources: [AS_RISK_NEWS, AS_REDUCE_RISK, NHS_PREVENTION, AS_MCI_CAUSES],
    quiz: {
      question: "How many risk factors that can be changed did the 2024 Lancet Commission find?",
      options: [{ text: "14", right: true }, { text: "2" }, { text: "None" }],
      why: "The 2024 Lancet Commission identified 14 risk factors that can be changed.",
    },
  },
  {
    id: "mci-aids",
    kicker: "Every day",
    question: "Which memory aids and habits help with MCI?",
    hook: "One thing at a time, the same place for keys, a calendar or phone reminders, and alarms for medicines.",
    short: "Doing one thing at a time and removing distractions helps. Keep belongings in the same place, such as keys on a hook. Use a calendar, diary or phone reminders for appointments, and set an alarm for medicines, ticking them off once taken. Choose aids that fit the skills you already have.",
    sections: [
      {
        heading: "One thing at a time",
        paragraphs: [
          "Try to do just one thing at a time, and remove distractions.",
        ],
      },
      {
        heading: "The same place",
        paragraphs: [
          "Get into a routine of putting belongings in the same place so they are easy to find, for example always putting keys on a hook.",
        ],
      },
      {
        heading: "Calendars and reminders",
        paragraphs: [
          "Use a calendar, diary or reminders on a phone or tablet to help remember appointments and important events. Keeping a notebook handy can be very useful.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "Set an alarm for when a medicine needs to be taken, then tick it off on a daily or weekly checklist once done.",
        ],
      },
      {
        heading: "Aids that fit you",
        paragraphs: [
          "Look for aids that fit with the skills you already have.",
          "Cross the day's date off your calendar before you go to bed, so you are certain of the date when you get up.",
        ],
      },
    ],
    helps: [
      "Keep belongings in the same place, such as keys on a hook.",
      "Use a calendar, diary or phone reminders, and keep a notebook handy.",
      "Set an alarm for medicines and tick them off once taken.",
    ],
    tryThisWeek: [
      "Put a hook up for your keys.",
      "Set one phone reminder.",
      "Cross off each day on a calendar.",
    ],
    ask: "Which memory aids would suit me best?",
    sources: [AS_MCI_TIPS, AS_AIDS],
    quiz: {
      question: "What can help you be sure of the date each morning?",
      options: [{ text: "Crossing off the day on a calendar at bedtime", right: true }, { text: "Guessing" }, { text: "Staying up late" }],
      why: "Cross the day's date off your calendar before you go to bed, so you are certain of the date when you get up.",
    },
  },
  {
    id: "mci-hearing",
    kicker: "Hearing",
    question: "How are hearing and memory linked?",
    hook: "Hearing loss in mid-life may raise the risk of dementia. Hearing aids may help, and a hearing test can be free.",
    short: "People who develop hearing problems in mid-life, aged 40 to 65, may have a higher risk of dementia, although hearing loss is only a risk factor. There is some evidence that hearing aids may reduce thinking symptoms and slow decline in people at risk. Hearing problems can also lead people to withdraw socially. Free hearing tests are available at some pharmacies and opticians.",
    sections: [
      {
        heading: "Hearing and risk",
        paragraphs: [
          "People who develop hearing problems during mid-life, aged 40 to 65, may have an increased risk of developing dementia.",
        ],
      },
      {
        heading: "Only a risk factor",
        paragraphs: [
          "Hearing loss is only a risk factor. It does not mean that a person with hearing loss will definitely develop dementia.",
        ],
      },
      {
        heading: "Hearing aids",
        paragraphs: [
          "There is some evidence that, if needed, using hearing aids may reduce thinking symptoms and slow decline in people at risk of dementia. It is not yet clear if they can prevent dementia.",
          "Hearing aids will not make your hearing perfect, but they make sounds louder and clearer.",
        ],
      },
      {
        heading: "Staying in touch",
        paragraphs: [
          "People with hearing problems may be more likely to withdraw from social situations and become more isolated over time.",
        ],
      },
      {
        heading: "A hearing test",
        paragraphs: [
          "You can sometimes get a free hearing test at some pharmacies and opticians.",
        ],
      },
    ],
    helps: [
      "Get your hearing tested: it can be free at some pharmacies and opticians.",
      "If hearing aids are recommended, use them.",
      "Keep up social contact, even if hearing makes it harder.",
    ],
    tryThisWeek: [
      "Book a hearing test.",
      "Wear your hearing aids if you have them.",
      "Call or meet one friend.",
    ],
    ask: "Should my hearing be tested, and could hearing aids help?",
    sources: [AS_HEARING, NHS_HEARING],
    quiz: {
      question: "Does hearing loss mean someone will get dementia?",
      options: [{ text: "No, it is only a risk factor", right: true }, { text: "Yes, always" }, { text: "Only in children" }],
      why: "Hearing loss is only a risk factor. It does not mean a person will definitely develop dementia.",
    },
  },
  {
    id: "mci-followup",
    kicker: "Follow-up",
    question: "What happens after an MCI diagnosis?",
    hook: "Usually back to the GP, sometimes a review in 6 or 12 months, and a referral back if things get worse.",
    short: "After an MCI diagnosis, people are often referred back to their GP. Some memory services ask people to come back in 6 or 12 months. If symptoms get worse, especially if everyday tasks get harder, the GP can refer you back. There are no medicines licensed for MCI, but looking after conditions like high blood pressure and diabetes matters.",
    sections: [
      {
        heading: "Back to the GP",
        paragraphs: [
          "Once a person has been told they have MCI, they will often be referred back to the care of their GP.",
        ],
      },
      {
        heading: "A routine review",
        paragraphs: [
          "Some memory services ask a person with MCI to come back in 6 or 12 months for a routine follow-up appointment.",
        ],
      },
      {
        heading: "If it gets worse",
        paragraphs: [
          "If symptoms get worse before then, contact the GP. The GP will refer the person back to the memory service, particularly if the symptoms are making everyday activities difficult without help.",
        ],
      },
      {
        heading: "Health that matters",
        paragraphs: [
          "Some long-term health problems increase the risk of MCI getting worse and becoming dementia. These include depression, diabetes, high blood pressure and being very overweight.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "There are currently no medicines licensed to treat MCI, or to reduce the chances of developing dementia.",
        ],
      },
    ],
    helps: [
      "Go to your follow-up appointments.",
      "Contact the GP if symptoms get worse before your review.",
      "Look after depression, diabetes, blood pressure and weight with your GP.",
    ],
    tryThisWeek: [
      "Note your review date.",
      "Contact the GP if things get worse.",
      "Book a blood pressure check.",
    ],
    ask: "Will I have a follow-up, and what should make me come back sooner?",
    sources: [AS_MCI_TREATMENTS],
    quiz: {
      question: "Are there medicines licensed to treat MCI?",
      options: [{ text: "Not at present", right: true }, { text: "Yes, several" }, { text: "Only vitamins" }],
      why: "There are currently no medicines licensed to treat MCI.",
    },
  },
  {
    id: "mci-worry",
    kicker: "Feelings",
    question: "How do I live with the uncertainty of MCI?",
    hook: "Many people feel relief, and many feel unsettled. Being kind to yourself and getting support both help.",
    short: "Many people are relieved to hear they have MCI, because there is still a good chance their symptoms will not get worse. For many, the cause is not clear and the best option may be to wait and see, which can be emotional. Reducing stress, anxiety and low mood can improve thinking and memory, and counselling and peer support can help.",
    sections: [
      {
        heading: "Relief",
        paragraphs: [
          "Many people are relieved when they are told they have MCI, because it means there is still a good chance their symptoms will not get worse.",
        ],
      },
      {
        heading: "Wait and see",
        paragraphs: [
          "For many people it is not clear what is causing their MCI, so the best option may be to wait and see.",
        ],
      },
      {
        heading: "It can be emotional",
        paragraphs: [
          "Waiting for a diagnosis can be emotional, and lots of people find it affects their wellbeing and day-to-day life.",
        ],
      },
      {
        heading: "Be kind to yourself",
        paragraphs: [
          "Explore ways to reduce stress, anxiety and depression, as this can improve thinking and memory. Be as kind to yourself as you would be to others you care about.",
        ],
      },
      {
        heading: "Support",
        paragraphs: [
          "Counselling, peer support groups or rehabilitation services can often help.",
        ],
      },
    ],
    helps: [
      "Look for ways to reduce stress, anxiety and low mood.",
      "Be as kind to yourself as you would be to others.",
      "Ask about counselling or a peer support group.",
    ],
    tryThisWeek: [
      "Do one thing that eases stress.",
      "Be kind to yourself.",
      "Ask about a support group.",
    ],
    ask: "Is there counselling or a support group that could help me with the worry?",
    sources: [AS_MCI_TREATMENTS, AS_MCI_TIPS, AS_MCI_CAUSES],
    quiz: {
      question: "Why do many people feel relief at an MCI diagnosis?",
      options: [{ text: "There is still a good chance symptoms won't get worse", right: true }, { text: "It means nothing is wrong" }, { text: "It means they will get dementia" }],
      why: "There is still a good chance that the symptoms will not get worse.",
    },
  },
  {
    id: "mci-telling",
    kicker: "Telling people",
    question: "Should I tell people about my MCI?",
    hook: "A diagnosis can help people understand what is happening. Those close to you may notice things you do not.",
    short: "A diagnosis of MCI can help if you have been struggling to convince people that you have a problem and need support. It can be hard to see changes in yourself, so it helps to listen to people close to you. Ideally, an employer will make adjustments for an employee with MCI.",
    sections: [
      {
        heading: "A diagnosis can help",
        paragraphs: [
          "A diagnosis of MCI can be helpful for anyone struggling to convince the people around them that they have a problem and need help or support.",
        ],
      },
      {
        heading: "Listening to others",
        paragraphs: [
          "Sometimes it can be hard to see changes in yourself. You may need to listen to the people close to you.",
        ],
      },
      {
        heading: "At work",
        paragraphs: [
          "Ideally, an employer will be willing to make adjustments to meet the needs of an employee with MCI.",
        ],
      },
    ],
    helps: [
      "Tell the people close to you when you are ready, and ask what they have noticed.",
      "Ask your employer about adjustments at work.",
      "Most people with MCI are able to carry on driving; ask your doctor if you are unsure whether to tell DVLA.",
    ],
    tryThisWeek: [
      "Talk to one person you trust.",
      "Think about adjustments at work.",
      "Ask your doctor about driving.",
    ],
    ask: "Does my MCI affect my work or my driving?",
    sources: [AS_MCI_TREATMENTS, AS_SIGNS, AS_MCI_TIPS, { label: "GOV.UK: Cognitive problems and driving", url: "https://www.gov.uk/cognitive-problems-and-driving" }],
    quiz: {
      question: "Can most people with MCI carry on driving?",
      options: [{ text: "Yes", right: true }, { text: "No, never" }, { text: "Only at night" }],
      why: "Most people with MCI are able to carry on driving. If unsure, ask your doctor whether to tell DVLA.",
    },
  },
  {
    id: "mci-sleep",
    kicker: "Sleep",
    question: "Why does sleep matter for memory?",
    hook: "Poor sleep is linked with a higher dementia risk, and sleep apnoea has the strongest evidence. Most adults need seven to nine hours.",
    short: "Try to get enough sleep, ideally at least seven hours a night; adults usually need around seven to nine. People who consistently sleep poorly have a higher risk of dementia, although the evidence is not certain. Obstructive sleep apnoea has the strongest evidence. Get help for sleep disorders such as insomnia or breathing problems.",
    sections: [
      {
        heading: "Enough sleep",
        paragraphs: [
          "Try to get enough sleep, ideally at least seven hours each night. Adults usually need around seven to nine hours.",
        ],
      },
      {
        heading: "Sleep and risk",
        paragraphs: [
          "People who consistently sleep poorly have a higher risk of dementia.",
          "There is some evidence that a lack of sleep may increase a person's risk of dementia, but not enough to say for sure.",
        ],
      },
      {
        heading: "Sleep apnoea",
        paragraphs: [
          "Obstructive sleep apnoea, where you stop breathing at night for short periods, is probably the sleep disorder with the strongest evidence of increased dementia risk.",
        ],
      },
      {
        heading: "Tired in the day",
        paragraphs: [
          "Insomnia can make it difficult to concentrate during the day because you are tired.",
        ],
      },
    ],
    helps: [
      "Aim for at least seven hours of sleep a night.",
      "Get help from a health professional for sleep disorders, such as insomnia or breathing problems at night.",
      "Tell your GP if you stop breathing at night for short periods.",
    ],
    tryThisWeek: [
      "Aim for seven hours tonight.",
      "Mention any sleep problems to your GP.",
      "Ask about breathing problems at night.",
    ],
    ask: "Could a sleep problem be affecting my memory?",
    sources: [AS_MCI_TIPS, AS_SLEEP, AS_REDUCE_RISK, NHS_INSOMNIA],
    quiz: {
      question: "Which sleep disorder has the strongest evidence of increased dementia risk?",
      options: [{ text: "Obstructive sleep apnoea", right: true }, { text: "Dreaming" }, { text: "Napping" }],
      why: "Obstructive sleep apnoea is probably the sleep disorder with the strongest evidence of increased dementia risk.",
    },
  },
];
