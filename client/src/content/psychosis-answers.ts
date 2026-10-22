import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Psychosis page's pieces (content/library-conditions/mind-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS
// (including Every Mind Matters and NHS inform), the Royal College of Psychiatrists, Rethink Mental
// Illness, Samaritans, Shout and the government's pages on driving and Access to Work. Mind's pages could
// not be read today (the site answered 403), so they are not cited. Every answer follows safe-messaging
// guidance: no method details, hopeful and practical, and the crisis routes exactly as the NHS, Samaritans
// and Shout give them. Postpartum psychosis is described as the NHS words it: a medical emergency. Nothing
// here suggests stopping or changing a medicine without the doctor, and heavy drinkers are told not to stop
// suddenly without medical advice, as the NHS says. General information only; it never replaces what a
// person's own GP or mental health team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const rcpsych = (label: string, path: string): LearnSource => ({ label: `Royal College of Psychiatrists: ${label}`, url: `https://www.rcpsych.ac.uk/mental-health/${path}` });
const rethink = (label: string, path: string): LearnSource => ({ label: `Rethink Mental Illness: ${label}`, url: `https://www.rethink.org/advice-and-information/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_OVERVIEW = nhs("Psychosis: overview", "mental-health/conditions/psychosis/overview/");
const NHS_SYMPTOMS = nhs("Psychosis: symptoms", "mental-health/conditions/psychosis/symptoms/");
const NHS_CAUSES = nhs("Psychosis: causes", "mental-health/conditions/psychosis/causes/");
const NHS_DIAGNOSIS = nhs("Psychosis: diagnosis", "mental-health/conditions/psychosis/diagnosis/");
const NHS_TREATMENT = nhs("Psychosis: treatment", "mental-health/conditions/psychosis/treatment/");
const NHS_POSTPARTUM = nhs("Postpartum psychosis", "mental-health/conditions/post-partum-psychosis/");
const NHS_SCHIZ_LIVING = nhs("Schizophrenia: living with", "mental-health/conditions/schizophrenia/living-with/");
const NHS_HEARING_VOICES = nhs("Hallucinations and hearing voices", "mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/hallucinations-hearing-voices/");
const NHS_SMI_CHECK = nhs("Annual health check for people with severe mental health conditions", "mental-health/social-care-and-your-rights/annual-health-check-smi/");
const NHS_ALCOHOL_SUPPORT = nhs("Alcohol support", "live-well/alcohol-advice/alcohol-support/");
const NHS_DRUG_HELP = nhs("Drug addiction: getting help", "live-well/addiction-support/drug-addiction-getting-help/");
const NHS_CARER_ASSESSMENT = nhs("Carer's assessments", "social-care-and-support/support-and-benefits-for-carers/carer-assessments/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");
const EMM_URGENT: LearnSource = { label: "NHS Every Mind Matters: Urgent support", url: "https://www.nhs.uk/every-mind-matters/urgent-support/" };
const NHSI_PSYCHOSIS: LearnSource = { label: "NHS inform: Psychosis", url: "https://www.nhsinform.scot/illnesses-and-conditions/mental-health/psychosis/" };

const RCP_PSYCHOSIS = rcpsych("Psychosis", "mental-illnesses-and-mental-health-problems/psychosis");
const RCP_SCHIZ = rcpsych("Schizophrenia", "mental-illnesses-and-mental-health-problems/schizophrenia");
const RCP_ANTIPSYCHOTICS = rcpsych("Antipsychotics", "treatments-and-wellbeing/antipsychotics");
const RCP_CANNABIS = rcpsych("Cannabis and mental health", "mental-illnesses-and-mental-health-problems/cannabis-and-mental-health");

const RETHINK_PSYCHOSIS = rethink("Psychosis", "about-mental-illness/mental-health-conditions/psychosis/");
const RETHINK_TEAMS = rethink("NHS mental health teams", "living-with-mental-illness/treatment-and-support/nhs-mental-health-teams-community-crisis-and-early-intervention-support/");
const RETHINK_ANTIPSYCHOTICS = rethink("Antipsychotics", "living-with-mental-illness/medications/antipsychotics/");
const RETHINK_CANNABIS = rethink("Cannabis and mental health", "living-with-mental-illness/health-wellbeing-and-neurodiversity/cannabis-and-mental-health/");
const RETHINK_PHYSICAL = rethink("Physical health checks for severe mental illness", "living-with-mental-illness/health-wellbeing-and-neurodiversity/physical-health-checks-for-severe-mental-illness-what-you-need-to-know/");
const RETHINK_RECOVERY = rethink("Recovery and mental illness", "living-with-mental-illness/treatment-and-support/recovery-and-mental-illness/");
const RETHINK_WORRIED = rethink("Worried about someone's mental health?", "carers-hub/advice-for-loved-ones-and-carers/worried-about-someones-mental-health/");
const RETHINK_UNUSUAL = rethink("Responding to unusual behaviour linked to mental illness", "carers-hub/advice-for-loved-ones-and-carers/responding-to-unusual-behaviour-linked-to-mental-illness/");

const SAM_CONTACT: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };
const SHOUT: LearnSource = { label: "Shout: The UK's free, confidential, 24/7 mental health text service", url: "https://giveusashout.org/" };

const GOV_DRIVING = gov("Psychosis and driving", "psychosis-and-driving");
const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");

/** The crisis routes, worded as the NHS gives them (Where to get urgent help; Help for suicidal thoughts). */
const CRISIS = "If someone's life is at risk or you cannot keep yourself or someone else safe, call 999 or go to A&E. For urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258.";

export const psychosisAnswers: LearnArticle[] = [
  {
    id: "psy-what-it-is",
    kicker: "Understanding",
    question: "What is psychosis?",
    hook: "Losing some contact with reality can be frightening for the person and for those around them. But help and support is available, and early treatment can be more effective.",
    short: "Psychosis is when people lose some contact with reality. This might involve seeing or hearing things that other people cannot see or hear, or believing things that are not actually true. It is far more common than many people think, and if treated it can often lead to a full recovery.",
    sections: [
      {
        heading: "Losing some contact with reality",
        paragraphs: [
          "Psychosis is when people lose some contact with reality. This might involve seeing or hearing things that other people cannot see or hear, and believing things that are not actually true. It may also involve confused thinking and speaking.",
          "Psychosis is a term used to describe a group of symptoms. When someone is experiencing psychosis, their thoughts and feelings change so dramatically that they find it difficult to recognise what is real and what is not.",
        ],
      },
      {
        heading: "The three main symptoms",
        paragraphs: [
          "Hallucinations are where a person hears, sees, and in some cases feels, smells or tastes things that do not exist outside their mind. A common hallucination is hearing voices.",
          "Delusions are strong beliefs that are not shared by others, such as believing there's a conspiracy to harm them. Disordered thinking and speaking means thoughts and ideas come very quickly, which can make speech fast and confusing.",
          "Experiencing these symptoms is often called having a psychotic episode. If you are experiencing psychosis for the first time, this can be called a first episode of psychosis. Early intervention teams are set up specifically to work with people at this point.",
        ],
      },
      {
        heading: "Why it can be hard to notice",
        paragraphs: [
          "People who have psychotic episodes are often unaware that their delusions or hallucinations are not real, which may lead them to feel frightened or distressed.",
          "During a psychotic episode most people don't realise they are ill. Their friends and family may not understand why they are reacting so strongly to things they can't see or hear.",
        ],
      },
      {
        heading: "More common, and more treatable, than people think",
        paragraphs: [
          "Psychosis is far more common than many people think. Some people only have one episode: they experience psychosis, recover, and never experience it again. Others have more than one episode during their lives.",
          "Psychosis is not the same as being a psychopath. Someone with psychosis has a short-term condition that, if treated, can often lead to a full recovery.",
        ],
      },
      {
        heading: "Get help early",
        paragraphs: [
          "See a GP immediately if you're experiencing symptoms of psychosis for the first time. It's important psychosis is treated as soon as possible, as early treatment can be more effective.",
          "Call 999 or go to A&E if someone's life is at risk, or you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one.",
        ],
      },
    ],
    helps: [
      "See a GP immediately if you have symptoms of psychosis for the first time.",
      "If you're worried about someone, you could contact a GP for them, or their mental health worker if they have one.",
      "Ask whether you can be referred to a mental health specialist for further assessment and treatment.",
      "Remember that help and support is available, and some people make a complete recovery.",
      CRISIS,
    ],
    tryThisWeek: [
      "See a GP about first symptoms.",
      "Contact a GP for someone you're worried about.",
      "Ask about a specialist referral.",
    ],
    ask: "Could what I'm experiencing be psychosis, and who should I see?",
    interactive: {
      kind: "flip-cards",
      title: "The words, card by card",
      intro: "Turn each card to see what each word means.",
      cards: [
        { id: "hallucinations", front: "Hallucinations", when: "Sensing what others don't", back: "Hearing, seeing, feeling, smelling or tasting things that do not exist outside the mind. Hearing voices is common." },
        { id: "delusions", front: "Delusions", when: "Beliefs others don't share", back: "Strong beliefs that are not shared by others, such as believing there's a conspiracy to harm you." },
        { id: "disordered", front: "Disordered thinking", when: "Thoughts and speech", back: "Thoughts and ideas come very quickly, which can make speech fast and confusing." },
        { id: "episode", front: "Psychotic episode", when: "When symptoms happen", back: "Experiencing the symptoms of psychosis is often called having a psychotic episode." },
        { id: "first", front: "First episode of psychosis", when: "The first time", back: "Experiencing psychosis for the first time. Early intervention teams work with people at this point." },
        { id: "not-psychopath", front: "Not the same as psychopath", when: "A common mix-up", back: "Psychosis is a short-term condition that, if treated, can often lead to a full recovery." },
      ],
    },
    sources: [NHS_OVERVIEW, RCP_PSYCHOSIS, RETHINK_PSYCHOSIS, NHS_SYMPTOMS, NHSI_PSYCHOSIS, EMM_URGENT, NHS_URGENT, NHS_SUICIDAL, NHS_TREATMENT],
    quiz: {
      question: "When does the NHS say to see a GP about symptoms of psychosis?",
      options: [{ text: "Immediately", right: true }, { text: "Only if they last a year" }, { text: "Never; they pass on their own" }],
      why: "See a GP immediately if you're experiencing symptoms of psychosis. It's important psychosis is treated as soon as possible.",
    },
  },
  {
    id: "psy-symptoms",
    kicker: "Symptoms",
    question: "What do hallucinations, delusions and muddled thinking feel like?",
    hook: "These experiences can feel very real to the person having them, which is part of what makes psychosis hard to recognise.",
    short: "Hallucinations are where someone sees, hears, smells, tastes or feels things that do not exist outside their mind; hearing voices is the most common kind. Delusions are strong beliefs that are not shared by others. Thoughts can also become confused, with speech that is fast or hard to follow.",
    sections: [
      {
        heading: "Hallucinations",
        paragraphs: [
          "Hallucinations are where someone sees, hears, smells, tastes or feels things that do not exist outside their mind. That can mean seeing colours, shapes or people, feeling touched when there is nobody there, or smelling something other people cannot smell.",
          "Hearing voices or other sounds is the most common type of hallucination. Voices can be female or male, someone you know or someone you have never heard before, whispering or shouting, friendly or negative and disturbing.",
          "Some people hear voices only for a few minutes, or once a month. Others hear voices every day, for hours at a time.",
        ],
      },
      {
        heading: "Delusions",
        paragraphs: [
          "Delusions are beliefs that are very real to you, but probably won't be shared by or make sense to other people. You might believe you are far more powerful or important than you are, or that people on the TV or radio are sending messages meant only for you.",
          "Some people believe they are being watched or plotted against, or that their thoughts are being controlled or broadcast so that others can hear them. These beliefs won't be easily explained away by your religion or culture.",
        ],
      },
      {
        heading: "Muddled thinking and speech",
        paragraphs: [
          "People with psychosis sometimes have disturbed, confused and disrupted patterns of thought. Signs include rapid and constant speech, switching from one topic to another mid-sentence, and a sudden loss in their train of thought.",
          "You might notice racing thoughts, or find it hard to focus on one thing at a time. Other people might find it hard to follow what you are saying.",
        ],
      },
      {
        heading: "Why it can feel so real",
        paragraphs: [
          "People who have psychotic episodes are often unaware that their delusions or hallucinations are not real, which may lead them to feel frightened or distressed.",
          "You are unlikely to have every symptom all of the time. You might have delusions first and hallucinations later, which can make it hard to realise that you are unwell.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you or someone else have hallucinations.",
          "Call 999 or go to A&E now if someone hears voices telling them to harm themselves or someone else, has hallucinations that are quickly getting worse, or suddenly becomes confused.",
        ],
      },
    ],
    helps: [
      "Ask for an urgent GP appointment, or get help from NHS 111, if you or someone else have hallucinations.",
      "Be ready for the GP to ask about your hallucinations and delusions, such as whether you've heard voices.",
      "If you have a mental health condition like schizophrenia, ask about therapy or medicine to help reduce hallucinations.",
      "Do not drive to A&E: ask someone to drive you, or call 999 for an ambulance, and bring any medicines you take.",
      CRISIS,
    ],
    tryThisWeek: [
      "Get an urgent GP appointment or call 111.",
      "Be ready to describe what you've heard.",
      "Ask about therapy or medicine for voices.",
    ],
    ask: "Are the things I'm hearing or believing part of psychosis, and what can help?",
    interactive: {
      kind: "signs",
      title: "Experiences to mention",
      intro: "Tick any you have noticed. The ones you tick make a list to take to your GP.",
      signs: [
        "Hearing voices others cannot hear",
        "Seeing things that are not there",
        "Feeling touched when nobody is there",
        "Smelling or tasting things with no cause",
        "Strong beliefs others do not share",
        "Feeling watched or plotted against",
        "Thoughts being controlled or broadcast",
        "Racing thoughts",
        "Fast speech others find hard to follow",
        "Suddenly losing my train of thought",
      ],
      after: "Ask for an urgent GP appointment or get help from NHS 111. If voices tell you to harm yourself or someone else, call 999 or go to A&E.",
      copyHeading: "Experiences I have noticed",
    },
    sources: [NHS_SYMPTOMS, RCP_PSYCHOSIS, RETHINK_PSYCHOSIS, NHS_HEARING_VOICES, NHS_DIAGNOSIS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What is the most common type of hallucination?",
      options: [{ text: "Hearing voices or other sounds", right: true }, { text: "Seeing colours" }, { text: "Tasting things" }],
      why: "Hearing voices or other sounds is the most common type of hallucination.",
    },
  },
  {
    id: "psy-causes",
    kicker: "Causes",
    question: "What causes psychosis, and what conditions can it be part of?",
    hook: "Psychosis can be part of a mental health condition, a physical illness, or a reaction to drugs, alcohol or stress. Whatever the reason, it is not your fault.",
    short: "Psychosis can be caused by a mental health condition such as schizophrenia, bipolar disorder or severe depression, by a physical condition, or by alcohol or drug misuse. Trauma, stress, lack of sleep and childbirth can trigger it too. Sometimes there is no clear reason, and whatever the reason, it is not your fault.",
    sections: [
      {
        heading: "Conditions it can be part of",
        paragraphs: [
          "Psychosis can be a one-off experience, or part of a mental health condition. Conditions it can be part of include schizophrenia, bipolar disorder, schizoaffective disorder and severe depression.",
          "The cause can shape the kind of episode. Someone with bipolar disorder is more likely to have grandiose delusions, while someone with depression or schizophrenia is more likely to develop persecutory delusions. Treatment for psychosis will vary, depending on the underlying cause.",
        ],
      },
      {
        heading: "Physical illness and medicines",
        paragraphs: [
          "Some medical conditions have been known to trigger psychotic episodes, including Alzheimer's disease, Parkinson's disease, a brain tumour, very low blood sugar, and sudden illness or injury such as a high temperature or a head injury.",
          "An infection can cause delirium, which can bring psychotic symptoms that usually improve as the cause is treated. In rare situations, psychosis can be a side effect of a medicine. Never stop taking a prescribed medicine unless advised to by a GP or another qualified professional responsible for your care.",
        ],
      },
      {
        heading: "Stress, sleep and life events",
        paragraphs: [
          "Psychosis can be triggered by a traumatic experience, severe stress or anxiety, and lack of sleep. It can sometimes happen after a significant or stressful event, like a close friend or relative dying.",
          "Most people who experience stress, use drugs or give birth never develop psychosis, and sometimes it happens for no apparent reason. Whatever the reason, if you develop psychosis, it is not your fault.",
        ],
      },
      {
        heading: "Drugs and alcohol",
        paragraphs: [
          "Alcohol-use disorder and drug misuse can trigger a psychotic episode. Drugs known to trigger psychotic episodes include cannabis, cocaine, amphetamine and ketamine.",
          "A person can also have a psychotic episode if they suddenly stop drinking alcohol or taking drugs after using them for a long time. This is known as withdrawal. If you have become physically dependent on alcohol, stopping overnight could be harmful, so get advice first.",
        ],
      },
      {
        heading: "After having a baby",
        paragraphs: [
          "Postpartum psychosis is a serious mental illness that can affect someone soon after having a baby. It is very different from the baby blues, and should be treated as a medical emergency.",
          "You're more at risk if you already have bipolar disorder or schizophrenia, or a family history of mental illness. Most people with postpartum psychosis make a full recovery as long as they receive the right treatment.",
        ],
      },
    ],
    helps: [
      "Tell your GP about any medicines you take, your use of alcohol or drugs, and any family history of mental health conditions.",
      "See a GP if you think a medicine is causing psychotic side effects, but never stop a prescribed medicine unless advised to.",
      "If you use drugs, ask the people treating you how you can get help to stop; it should not stop you getting treatment for psychosis.",
      "If you are at high risk of postpartum psychosis, ask for specialist care during or before pregnancy and a pre-birth planning meeting.",
      "If you think someone has postpartum psychosis, see a GP immediately and ask for an urgent assessment on the same day.",
      CRISIS,
    ],
    tryThisWeek: [
      "List your medicines for the GP.",
      "Ask for help to stop using drugs.",
      "Ask about care before a baby is due.",
    ],
    ask: "What might have caused my psychosis, and does it change my treatment?",
    interactive: {
      kind: "risk-check",
      title: "Things that can play a part",
      intro: "Tick any that apply. Some of these can change, and some cannot. Whatever the reason, it is not your fault.",
      items: [
        { id: "condition", label: "Bipolar disorder or schizophrenia", note: "Psychosis can be part of these conditions. You'll receive specific treatment for the condition as well.", changeable: false },
        { id: "stress", label: "Severe stress or anxiety", note: "Severe stress or anxiety can trigger psychosis. Avoiding things that cause you stress can help you stay well.", changeable: true },
        { id: "sleep", label: "Very little sleep", note: "Lack of sleep can trigger psychotic episodes in some people.", changeable: true },
        { id: "drugs", label: "Using cannabis or other drugs", note: "Drug misuse can trigger psychosis. Sometimes if someone stops using drugs, their psychosis will improve.", changeable: true },
        { id: "alcohol", label: "Drinking heavily", note: "Alcohol-use disorder can trigger it. If you are dependent, get advice first: stopping overnight could be harmful.", changeable: true },
        { id: "illness", label: "A physical illness or head injury", note: "Conditions like Parkinson's disease, a brain tumour or a head injury can trigger psychotic episodes.", changeable: false },
        { id: "birth", label: "Recently having a baby", note: "Postpartum psychosis is a medical emergency. Most people make a full recovery with the right treatment.", changeable: false },
        { id: "family", label: "Mental illness in the family", note: "Research suggests mental illness can run in families, but genetics and life experiences are hard to separate.", changeable: false },
      ],
    },
    sources: [NHS_CAUSES, RCP_PSYCHOSIS, RETHINK_PSYCHOSIS, NHS_OVERVIEW, NHS_POSTPARTUM, NHS_DIAGNOSIS, NHS_ALCOHOL_SUPPORT, NHS_URGENT, NHS_SUICIDAL, NHS_TREATMENT],
    quiz: {
      question: "Is developing psychosis ever the person's fault?",
      options: [{ text: "No, whatever the reason", right: true }, { text: "Yes, if they were stressed" }, { text: "Only after drug use" }],
      why: "It is important to remember that whatever the reason, if you develop psychosis, it is not your fault.",
    },
  },
  {
    id: "psy-early-signs",
    kicker: "Early signs",
    question: "What are the early signs of psychosis, in me or someone I love?",
    hook: "Psychosis can make it hard to see that you are unwell. Noticing small changes, and acting on them, is how people get help quickly.",
    short: "Changes can creep in: sleeping badly, pulling away from people, feeling suspicious, finding it hard to concentrate, or hearing quiet voices now and again. Because psychosis can make it hard to realise you are unwell, family and friends often need to help. If you notice hallucinations or delusions for the first time, see a GP immediately.",
    sections: [
      {
        heading: "Why it can be hard to spot",
        paragraphs: [
          "When you are experiencing psychosis, you might find it difficult to realise that you are experiencing symptoms. This can unfortunately make it difficult to seek help.",
          "People experiencing psychosis may be reluctant to visit a GP if they believe there's nothing wrong with them. The people around them may need to help them get support and treatment.",
        ],
      },
      {
        heading: "Signs you might notice in yourself",
        paragraphs: [
          "Learning to recognise the signs that you're becoming unwell can help you manage your illness. Signs can include losing your appetite, feeling anxious or stressed, or having disturbed sleep.",
          "You may also notice milder symptoms developing, such as feeling suspicious or fearful, worrying about people's motives, hearing quiet voices now and again, or finding it difficult to concentrate.",
        ],
      },
      {
        heading: "Signs others might notice",
        paragraphs: [
          "Family and friends may see someone focus on odd ideas, believe that friends or family want to harm them, or think the TV or a device is talking to them. They may be suspicious and think people are talking about them.",
          "They may not talk to anyone or want to leave their room for days, have problems concentrating or remembering things, or stop eating, washing or dressing properly.",
        ],
      },
      {
        heading: "Your relapse signature",
        paragraphs: [
          "If you have been unwell before, the things you typically start to do as you become unwell are called your relapse signature. It is unique to you, and might include not sleeping, isolating yourself or going out more than usual, or speaking or acting differently.",
          "You and the people close to you can look out for these signs and agree a plan for what to do. You may also want to ask someone you trust to tell you if they notice your behaviour changing.",
        ],
      },
      {
        heading: "Acting on what you notice",
        paragraphs: [
          "Seek help from your GP immediately if you are experiencing hallucinations or delusions for the first time. These are symptoms of psychosis, and early treatment is more effective.",
          "If you're concerned about someone, you could contact a GP for them, or their local early intervention in psychosis team. These teams usually accept referrals from friends or relatives.",
        ],
      },
    ],
    helps: [
      "See a GP immediately if you notice hallucinations or delusions for the first time.",
      "Ask someone you trust to tell you if they notice your behaviour changing.",
      "If you have been unwell before, agree a plan with the people close to you for what to do when signs appear.",
      "If you're worried about someone, contact their GP, their mental health worker or their local early intervention team.",
      "If they won't see a GP, encourage them to talk to the GP about something that worries them, such as not sleeping well.",
      CRISIS,
    ],
    tryThisWeek: [
      "See a GP about first signs.",
      "Ask someone to tell you about changes.",
      "Agree a plan for warning signs.",
    ],
    ask: "What are my early warning signs, and who should I call if they appear?",
    interactive: {
      kind: "signs",
      title: "Changes to look out for",
      intro: "Tick any you have noticed in yourself or someone close to you. The ones you tick make a list to take to a GP.",
      signs: [
        "Not sleeping, or disturbed sleep",
        "Losing appetite",
        "Feeling anxious or stressed",
        "Feeling suspicious or fearful",
        "Worrying about people's motives",
        "Hearing quiet voices now and again",
        "Finding it hard to concentrate",
        "Isolating, or going out more than usual",
        "Speaking or acting differently",
        "Work or studies slipping",
        "Not eating, washing or dressing properly",
      ],
      after: "If these are new, see a GP immediately. If there is already a care plan, follow it and contact the mental health team.",
      copyHeading: "Changes I have noticed",
    },
    sources: [RCP_PSYCHOSIS, NHS_SCHIZ_LIVING, RETHINK_WORRIED, NHS_DIAGNOSIS, EMM_URGENT, RETHINK_PSYCHOSIS, NHS_OVERVIEW, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What is a relapse signature?",
      options: [{ text: "The signs, unique to you, that you are becoming unwell", right: true }, { text: "A doctor's signature on a prescription" }, { text: "A blood test for psychosis" }],
      why: "Your relapse signature is a way of describing the things that you typically start to do when you are becoming mentally unwell. It is unique to you.",
    },
  },
  {
    id: "psy-early-intervention",
    kicker: "Treatment",
    question: "What is an early intervention team, and how do I get seen?",
    hook: "For a first episode of psychosis, a specialist team can help quickly. Teams aim to see you within 2 weeks of your referral.",
    short: "Early intervention in psychosis teams work with people who have experienced their first episode of psychosis. They aim to provide a full assessment, medicine, talking therapies, and help with work, education and social needs. A GP can refer you, and teams usually accept referrals from you or your family, aiming to see you within 2 weeks.",
    sections: [
      {
        heading: "Who the team is for",
        paragraphs: [
          "An early intervention team is a team of healthcare professionals set up specifically to work with people who have experienced their first episode of psychosis.",
          "Early intervention services were put in place to make sure that people who are or might be experiencing psychosis get the right care quickly. There is lots of evidence that if people receive help for psychosis quickly, they are more likely to recover, and to recover quickly.",
        ],
      },
      {
        heading: "What they offer",
        paragraphs: [
          "Depending on your care needs, early intervention teams aim to provide a full assessment of your needs, medicine, talking therapies, and social, occupational and educational support.",
          "Teams are likely to include a psychiatrist, a community mental health nurse, a psychologist and a social worker, who can help with things like housing and finances.",
        ],
      },
      {
        heading: "How to get referred",
        paragraphs: [
          "If you are experiencing symptoms of psychosis, your GP will probably refer you to a specialist mental health service or your local early intervention team. Because early treatment matters, you're likely to be referred urgently.",
          "Early intervention teams usually accept direct referrals from you or a family member. You can find your local team by searching online, calling NHS 111 or asking your GP.",
        ],
      },
      {
        heading: "How quickly, and for whom",
        paragraphs: [
          "Early intervention teams aim to see you within 2 weeks of your referral. Treatment may include antipsychotic medicine and talking therapy like cognitive behavioural therapy.",
          "Some services' websites say they only treat people aged 35 or under. But the National Institute for Health and Care Excellence recommends that early intervention teams should be open to people of all ages.",
          "You might get help from an early intervention team if you have psychosis and have used drugs.",
        ],
      },
      {
        heading: "If you need help in a crisis",
        paragraphs: [
          "If the early intervention team cannot provide urgent support in a crisis, they should refer you to a crisis team. But you should still be supported by the early intervention team at the same time.",
          "A crisis resolution and home treatment team can help you if you are becoming unwell, as an alternative to going into hospital. For urgent support, NHS 111 is available 24 hours a day, 7 days a week.",
        ],
      },
    ],
    helps: [
      "Ask your GP whether you can be referred to your local early intervention in psychosis team.",
      "Search online for your local team, or call NHS 111; teams usually accept referrals from you or your family.",
      "If you are over 35, you can still ask: NICE recommends early intervention teams are open to all ages.",
      "Ask the team about help with work, education, housing and money, as well as treatment.",
      "Make sure your care plan includes the steps to take and emergency contact numbers if you become unwell.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask the GP for a referral.",
      "Find your local team online.",
      "Check your plan's emergency numbers.",
    ],
    ask: "Can I be referred to an early intervention team, and how soon will I be seen?",
    interactive: {
      kind: "timeline",
      title: "From first signs to support",
      steps: [
        { id: "gp", when: "First", title: "See a GP", points: ["See a GP immediately about symptoms of psychosis.", "Or contact your local team: many accept referrals from you."] },
        { id: "referral", when: "Referral", title: "Referred urgently", points: ["Early treatment matters, so referral is likely to be urgent.", "Family or friends can often refer you too."] },
        { id: "two-weeks", when: "Within 2 weeks", title: "Seen by the team", points: ["Teams aim to see you within 2 weeks of referral."] },
        { id: "assessment", when: "Assessment", title: "A full assessment", points: ["Your mental and physical health, medicines, and drug or alcohol use.", "Your relationships, work, education and quality of life."] },
        { id: "treatment", when: "Treatment", title: "Medicine and talking therapy", points: ["Usually antipsychotic medicine and talking therapy.", "Help with work, education and social needs too."] },
        { id: "crisis", when: "If there's a crisis", title: "Crisis team support", points: ["The team should refer you to a crisis team if needed.", "They should still support you at the same time."] },
      ],
    },
    sources: [NHS_TREATMENT, RCP_PSYCHOSIS, RETHINK_PSYCHOSIS, RETHINK_TEAMS, NHS_DIAGNOSIS, NHS_SCHIZ_LIVING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How soon do early intervention teams aim to see you after referral?",
      options: [{ text: "Within 2 weeks", right: true }, { text: "Within 6 months" }, { text: "Only after a hospital stay" }],
      why: "Early intervention teams aim to see you within 2 weeks of your referral.",
    },
  },
  {
    id: "psy-medicines",
    kicker: "Medicines",
    question: "What should I know about antipsychotic medicines?",
    hook: "Antipsychotics are usually the first treatment offered. They can take weeks to work fully, side effects differ from person to person, and it may take time to find the right one.",
    short: "Antipsychotic medicines are usually recommended as the first treatment for psychosis. They can reduce anxiety within a few hours, but may take several days or weeks to ease hallucinations and delusions. Side effects vary, so tell your doctor if they become troublesome, and never stop taking them unless the professional responsible for your care advises it.",
    sections: [
      {
        heading: "How they help",
        paragraphs: [
          "Antipsychotic medicines are usually recommended as the first treatment for psychosis. They work by blocking the effect of chemicals that transmit messages in the brain, such as dopamine.",
          "They can help reduce hearing voices, delusions and difficulty in thinking clearly. Research suggests 4 out of 5 people with severe mental illness who take antipsychotics find they are successful in treating their symptoms.",
        ],
      },
      {
        heading: "How long they take",
        paragraphs: [
          "Antipsychotics can usually reduce feelings of anxiety within a few hours of use, but they may take several days or weeks to reduce symptoms such as hallucinations or delusional thoughts.",
          "They can be taken by mouth or given as an injection. With some slow-release injections, you only need an injection every 1 to 4 weeks, and some people prefer this because they don't have to remember to take a tablet every day.",
        ],
      },
      {
        heading: "Finding the right one",
        paragraphs: [
          "Most antipsychotics seem to treat psychotic symptoms equally well, but people react differently to them, particularly with side effects. You may have to try different ones before you find the one that works best for you.",
          "Your doctor should explain the side effects you might have, and work in partnership with you to choose. If you have tried at least two antipsychotics and are still troubled by symptoms, your doctor might suggest clozapine, which needs regular blood tests.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Side effects can include drowsiness, shaking and trembling, weight gain, restlessness, muscle twitches and spasms, blurred vision, dizziness, constipation, loss of sex drive and a dry mouth. Not everyone gets them, and their severity differs from person to person.",
          "Tell a GP or mental health worker if side effects are becoming troublesome; there may be another antipsychotic that causes fewer side effects. Rarely, antipsychotics can trigger suicidal feelings or an urge to self-harm. Call 999 or go to A&E now if you have thoughts about ending your life or harming yourself.",
        ],
      },
      {
        heading: "Keep taking them, and stop only with your doctor",
        paragraphs: [
          "Never stop taking medicine prescribed for you unless advised to by a qualified healthcare professional responsible for your care. Suddenly stopping could trigger a return of your symptoms, and when it's time to stop, it will be done gradually.",
          "Some people are recommended to take antipsychotics long term. Others may be able to gradually reduce their dose and then stop if their symptoms improve a lot. If you are thinking about stopping, speak to your mental health professional or GP first.",
          "Tell your doctor before you start any other medicine, and if you drink alcohol, use drugs, or start, stop or cut down smoking, as these can interact with antipsychotics.",
        ],
      },
    ],
    helps: [
      "Take your antipsychotic as prescribed, and ask your doctor to explain the side effects you might have.",
      "Tell a GP or mental health worker if side effects become troublesome; another medicine may suit you better.",
      "Never stop suddenly; if you want to stop, talk to your doctor first so it can be done gradually.",
      "Tell your doctor before starting other medicines or supplements, and if you start, stop or cut down smoking.",
      "Read the leaflet that comes with your medicine, and ask the prescriber about anything you're unsure of.",
      CRISIS,
    ],
    tryThisWeek: [
      "Take it as prescribed.",
      "Report troublesome side effects.",
      "Never stop suddenly.",
    ],
    ask: "What side effects should I look out for, and what can we do if I get them?",
    interactive: {
      kind: "scenarios",
      title: "Moments with your medicine",
      scenarios: [
        {
          id: "weight",
          situation: "You've put on weight since starting your antipsychotic.",
          options: [{ text: "Tell your GP or mental health worker", best: true }, { text: "Stop taking it without saying anything" }],
          why: "Tell a GP or mental health worker if side effects are becoming troublesome. There may be another antipsychotic that causes fewer side effects.",
        },
        {
          id: "better",
          situation: "You feel much better and wonder if you still need it.",
          options: [{ text: "Talk to your doctor first", best: true }, { text: "Stop it straight away" }],
          why: "Suddenly stopping prescription medicine could trigger a return of your symptoms. When it's time to stop, it will be done gradually.",
        },
        {
          id: "slow",
          situation: "After a few days, the voices haven't gone yet.",
          options: [{ text: "Keep taking it and tell your team", best: true }, { text: "Decide it doesn't work" }],
          why: "Antipsychotics may take several days or weeks to reduce symptoms such as hallucinations or delusional thoughts.",
        },
        {
          id: "smoking",
          situation: "You've decided to stop smoking.",
          options: [{ text: "Tell your doctor first", best: true }, { text: "Just stop and say nothing" }],
          why: "If you stop smoking this can increase the amount of antipsychotic in your blood, so you might need a lower dose of medication.",
        },
        {
          id: "thoughts",
          situation: "Since starting, you've had thoughts of harming yourself.",
          options: [{ text: "Call 999 or go to A&E now", best: true }, { text: "Wait for your next appointment" }],
          why: "Rarely, antipsychotics can trigger suicidal feelings. Call 999 or go to A&E now if you have thoughts about ending your life or harming yourself.",
        },
      ],
    },
    sources: [NHS_TREATMENT, RCP_PSYCHOSIS, RCP_ANTIPSYCHOTICS, RETHINK_ANTIPSYCHOTICS, NHS_OVERVIEW, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How long can antipsychotics take to ease hallucinations and delusions?",
      options: [{ text: "Several days or weeks", right: true }, { text: "A few minutes" }, { text: "Several years" }],
      why: "Antipsychotics may take several days or weeks to reduce psychotic symptoms, such as hallucinations or delusional thoughts.",
    },
  },
  {
    id: "psy-talking",
    kicker: "Talking therapies",
    question: "How can talking therapies and family work help with psychosis?",
    hook: "Therapy alongside medicine can make both work better. CBT for psychosis and family intervention are the main options, and peer support can help too.",
    short: "Talking therapies can help reduce the intensity and anxiety caused by psychosis. You should be offered therapy at the same time as medicine, and still be offered it if you decide not to take medicine. The main ones are cognitive behavioural therapy (CBT) for psychosis and family intervention, which helps you and the people close to you cope together.",
    sections: [
      {
        heading: "Why therapy matters",
        paragraphs: [
          "Talking therapies can help reduce the intensity and anxiety caused by psychosis. There is a lot of evidence that psychological therapies are effective.",
          "You should be offered a psychological therapy at the same time as medicine, as this can make both more effective. If you decide not to take medicine, you should still be offered talking therapy.",
        ],
      },
      {
        heading: "CBT for psychosis",
        paragraphs: [
          "CBT for psychosis is based on an understanding of how people make sense of their experiences, and why some people become distressed by them. A therapist may encourage you to consider different ways of understanding what's happening to you.",
          "The aim is to help you achieve goals that matter to you, such as reducing your distress, returning to work or education, or regaining a sense of control. You should be offered individual CBT for at least 16 weekly sessions.",
          "If you are very unwell, it might be better to start CBT when you are more stable.",
        ],
      },
      {
        heading: "Family intervention",
        paragraphs: [
          "Family intervention is known to be an effective form of therapy for people with psychosis. It is a way of helping both you and your family cope with your condition.",
          "It can cover understanding the diagnosis, managing stress, solving problems and planning how to manage future episodes. Your family should get support for 3 months to 1 year, with at least 10 planned sessions.",
        ],
      },
      {
        heading: "Other kinds of support",
        paragraphs: [
          "Art therapies use painting, photography, music, writing and other creative forms to help you express yourself and explore your thoughts and feelings.",
          "If you have experienced trauma, therapy can help you understand the root causes of your hallucinations or delusions, and manage the impact of the trauma.",
          "Peer support means working with someone who has lived experience of psychosis and is now in recovery. Being around other people who've had similar experiences can also help.",
        ],
      },
    ],
    helps: [
      "Ask your team for a talking therapy alongside your medicine.",
      "Ask about CBT for psychosis; you should be offered at least 16 weekly sessions.",
      "Ask your care team about family intervention for the people you live with or are close to.",
      "Ask about peer support, or look for a local support group.",
      "Try to do the work between sessions: therapy is usually more helpful when you can.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask for therapy alongside medicine.",
      "Ask about family intervention.",
      "Look for a support group.",
    ],
    ask: "Can I be offered CBT for psychosis and family intervention, and how long is the wait?",
    interactive: {
      kind: "flip-cards",
      title: "Therapies, card by card",
      intro: "Turn each card to see what each one involves.",
      cards: [
        { id: "cbtp", front: "CBT for psychosis", when: "Alongside medicine", back: "Helps you understand your experiences and find new ways of coping. At least 16 weekly sessions." },
        { id: "family", front: "Family intervention", when: "With the people close to you", back: "At least 10 sessions over 3 months to 1 year, to understand, cope and solve problems together." },
        { id: "art", front: "Art therapies", when: "Often in a group", back: "Painting, music, writing and more, to express yourself and explore your feelings." },
        { id: "trauma", front: "Therapy for trauma", when: "If trauma played a part", back: "Helps you understand the root causes of voices or beliefs, and manage the trauma's impact." },
        { id: "peer", front: "Peer support", when: "From someone who has been there", back: "Someone with lived experience of psychosis, now in recovery, offers advice and support." },
        { id: "groups", front: "Support groups", when: "To feel less alone", back: "People share experiences and support each other. It can help you feel understood." },
      ],
    },
    sources: [NHS_TREATMENT, RCP_PSYCHOSIS, RETHINK_PSYCHOSIS, NHS_SCHIZ_LIVING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When should talking therapy be offered for psychosis?",
      options: [{ text: "At the same time as medicine", right: true }, { text: "Only if medicine fails" }, { text: "Only after a year" }],
      why: "You should be offered a psychological therapy at the same time as medication, as this can make both things more effective.",
    },
  },
  {
    id: "psy-urgent",
    kicker: "Urgent help",
    question: "When and how do I get urgent help for psychosis?",
    hook: "A mental health emergency should be taken as seriously as a physical one. You will not be wasting anyone's time.",
    short: "If someone's life is at risk, or you cannot keep yourself or someone else safe, call 999 or go to A&E. For urgent help that is not an emergency, call 111 and select the mental health option, or use 111 online. You can call Samaritans free on 116 123 at any time, or text SHOUT to 85258.",
    sections: [
      {
        heading: "If someone is in danger",
        paragraphs: [
          "Call 999 or go to A&E now if someone's life is at risk, or you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one. You will not be wasting anyone's time.",
          "Call 999 or go to A&E if someone hears voices telling them to harm themselves or someone else, is very agitated, has hallucinations that are quickly getting worse, or suddenly becomes confused. Do not drive to A&E: ask someone to drive you, or call 999 for an ambulance.",
        ],
      },
      {
        heading: "Urgent help that is not an emergency",
        paragraphs: [
          "Get help from 111 online, or call 111 and select the mental health option. 111 will tell you the right place to get help, and you may be able to speak to a trained mental health professional over the phone.",
          "You can also ask for an urgent GP appointment. If someone has had psychotic episodes before and has a home treatment or crisis resolution team, you can try contacting that team.",
        ],
      },
      {
        heading: "Helping someone else",
        paragraphs: [
          "People experiencing psychosis are not always able to recognise their symptoms. If you think someone's symptoms need urgent treatment, you can take them to A&E if they agree, call their GP or out-of-hours GP, or call 999 and ask for an ambulance.",
          "If they have a care plan, it may say what they can do if they need urgent mental health support.",
        ],
      },
      {
        heading: "After having a baby",
        paragraphs: [
          "Postpartum psychosis is a serious mental illness that should be treated as a medical emergency. See a GP immediately and request an urgent assessment on the same day, or call 111 if you cannot speak to a GP.",
          "Go to A&E or call 999 if you think you, or someone you know, may be in danger of imminent harm. Your midwife or health visitor may also be able to help you access care.",
        ],
      },
      {
        heading: "Someone to talk to, any hour",
        paragraphs: [
          "Samaritans are there to listen at any time of the day or night. Call free on 116 123 from any phone; the number won't come up on your phone bill, and they won't judge you or tell you what to do.",
          "If you do not want to talk to someone over the phone, text SHOUT to 85258. This text line is open 24 hours a day, every day.",
          "If you're feeling suicidal, speak to a friend, family member or someone you trust, or make an urgent appointment to see a GP, your psychiatrist or your care team.",
        ],
      },
    ],
    helps: [
      "If someone's life is at risk, or you cannot keep yourself or someone else safe, call 999 or go to A&E.",
      "For urgent help that is not an emergency, call 111 and select the mental health option, or use 111 online.",
      "Call Samaritans free on 116 123, at any time of the day or night.",
      "If you would rather not talk on the phone, text SHOUT to 85258.",
      "If you or someone close has a crisis team or a care plan, contact the team or follow the plan.",
      "For postpartum psychosis, see a GP immediately and ask for an urgent assessment on the same day.",
    ],
    tryThisWeek: [
      "Call 111 for urgent help.",
      "Call Samaritans on 116 123.",
      "Follow the crisis plan.",
    ],
    ask: "Who do I contact if things get worse, day or night?",
    interactive: {
      kind: "flip-cards",
      title: "Who to contact",
      intro: "Turn each card to see when to use it. All of these are free.",
      cards: [
        { id: "999", front: "999 or A&E", when: "If someone's life is at risk", back: "Call 999 or go to A&E if you cannot keep yourself or someone else safe. You will not be wasting anyone's time." },
        { id: "111", front: "NHS 111", when: "Urgent help, not an emergency", back: "Call 111 and select the mental health option, or use 111 online. They will tell you where to get help." },
        { id: "samaritans", front: "Samaritans: 116 123", when: "Any time, day or night", back: "Free from any phone. They will listen, and won't judge you or tell you what to do." },
        { id: "shout", front: "Shout: text SHOUT to 85258", when: "If you would rather not talk", back: "A free, confidential text line, open 24 hours a day, every day." },
        { id: "crisis", front: "Your crisis team", when: "If you already have one", back: "A home treatment or crisis resolution team you have been given before. Try contacting them." },
        { id: "gp", front: "A GP", when: "For an urgent appointment", back: "Ask for an urgent GP appointment. A GP can help you access mental health services." },
      ],
    },
    sources: [NHS_URGENT, NHS_SUICIDAL, NHS_OVERVIEW, NHS_HEARING_VOICES, NHS_DIAGNOSIS, SAM_CONTACT, SHOUT, NHS_POSTPARTUM, RETHINK_PSYCHOSIS],
    quiz: {
      question: "When you call 111 for urgent mental health help, what do you choose?",
      options: [{ text: "The mental health option", right: true }, { text: "Nothing; 111 can't help with mental health" }, { text: "Only the dental option" }],
      why: "Get help from 111 online or call 111 and select the mental health option. 111 will tell you the right place to get help.",
    },
  },
  {
    id: "psy-recovery",
    kicker: "Recovery",
    question: "What does recovery look like, and how do I get back to work, study and life?",
    hook: "Recovery looks different for everyone. It can mean doing the things you used to do, understanding your condition and knowing what helps you stay well.",
    short: "Some people make a complete recovery from psychosis; others learn to live well with ups and downs. It can help to think of recovery as being able to do the things you used to do, understanding your condition and knowing the signs that you are becoming unwell. Support with work, money and driving is part of getting back to life.",
    sections: [
      {
        heading: "What recovery can mean",
        paragraphs: [
          "Recovery looks very different for different people. It can help not to think of recovery as having no more symptoms. Instead, it can mean being able to do the things you used to do, understanding your condition, and learning what helps you stay as well as possible.",
          "Some people make a complete recovery from psychosis. It's normal to have setbacks along the way, and they can be a chance to practise the skills you have developed.",
        ],
      },
      {
        heading: "Staying well",
        paragraphs: [
          "Your mental health team should give you a staying well plan and work with you to complete it. Avoiding things that cause you stress, eating well, staying active and keeping in touch with your team can all help.",
          "Recovery colleges offer free courses about mental health to help you manage your experiences, and you can usually refer yourself. Social prescribing can connect you with local groups doing things you enjoy.",
        ],
      },
      {
        heading: "Work and study",
        paragraphs: [
          "If you have been very unwell, your work life will probably need to change. That might mean more support from your employer, a break from your job, or a different job if your current one causes you stress. These changes might not need to be permanent.",
          "Mental illnesses are considered a disability under the Equality Act 2010, so it is against the law to discriminate against someone because they have one. Your employer might help you make reasonable adjustments, such as a phased return, working part-time and slowly increasing your hours.",
          "Access to Work can help you get or stay in work if you have a mental health condition. Its mental health support might include a tailored plan to help you get or stay in work, and one-to-one sessions with a mental health professional.",
        ],
      },
      {
        heading: "Money and everyday life",
        paragraphs: [
          "Difficulties with money or housing can be some of the most stressful things we experience. If you have an occupational therapist in your mental health team, they might be able to help.",
          "Day centres, work projects and peer support can give structure to your week, help you spend time with other people, and support you back into work.",
        ],
      },
      {
        heading: "Driving",
        paragraphs: [
          "Do not drive during an episode of psychosis. If you drive, you are legally required to tell the Driver and Vehicle Licensing Agency (DVLA) if you experience psychosis, and you can be fined up to £1,000 if you do not tell them about a condition that affects your driving.",
          "You may be able to start driving again if you have been well for at least 3 months. Your doctor can help you understand whether it is safe, and the DVLA will write to your GP or psychiatrist to ask them to assess this.",
        ],
      },
    ],
    helps: [
      "Work with your team on a staying well plan, and review it regularly.",
      "Look for a recovery college near you; you can usually refer yourself.",
      "Talk to your employer about reasonable adjustments, such as a phased return.",
      "Apply for Access to Work mental health support if you need help to get or stay in work.",
      "If you drive, tell the DVLA about psychosis, and do not drive during an episode.",
      CRISIS,
    ],
    tryThisWeek: [
      "Review your staying well plan.",
      "Find a recovery college.",
      "Ask about a phased return.",
    ],
    ask: "What should go in my staying well plan, and when could I go back to work or driving?",
    interactive: {
      kind: "scenarios",
      title: "Getting back to life",
      scenarios: [
        {
          id: "work",
          situation: "You feel ready to go back to work after being unwell.",
          options: [{ text: "Ask your employer about a phased return", best: true }, { text: "Go straight back to full-time hours" }],
          why: "If you have been unwell but are ready to return to work, your employer could offer you a phased return, slowly increasing your hours to full-time again.",
        },
        {
          id: "setback",
          situation: "You have a hard week after months of feeling better.",
          options: [{ text: "See it as a setback, and use your plan", best: true }, { text: "Decide recovery has failed" }],
          why: "Recovery is an ongoing process. It's normal to have difficulties or setbacks along the way.",
        },
        {
          id: "drive",
          situation: "You've been unwell recently and want to drive to an appointment.",
          options: [{ text: "Don't drive; check with your doctor", best: true }, { text: "Drive if you feel fine" }],
          why: "Do not drive during an episode of psychosis. You may be able to drive again once you have been well for at least 3 months.",
        },
        {
          id: "tell",
          situation: "You're unsure whether to tell your employer about your diagnosis.",
          options: [{ text: "Know they'd have a duty to support you", best: true }, { text: "Assume you'd lose your job" }],
          why: "Mental illnesses are considered a disability by the Equality Act 2010. If you do tell your employer, they have a legal responsibility to support you.",
        },
      ],
    },
    sources: [RCP_PSYCHOSIS, RETHINK_RECOVERY, RETHINK_PSYCHOSIS, NHS_SCHIZ_LIVING, GOV_ATW, GOV_DRIVING, NHS_DIAGNOSIS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When might someone be able to drive again after psychosis?",
      options: [{ text: "After being well for at least 3 months, if it's safe", right: true }, { text: "The day after an episode" }, { text: "Never" }],
      why: "You may be able to start driving again if you have been well for at least 3 months. Your doctor should be able to help you understand whether it is safe.",
    },
  },
  {
    id: "psy-substances",
    kicker: "Living with it",
    question: "How do cannabis, alcohol and other drugs affect psychosis?",
    hook: "Drugs and alcohol can trigger psychosis and make it worse. You should not be refused care because you use them, and help to cut down or stop is there.",
    short: "Cannabis, alcohol and other drugs can trigger psychotic episodes, and with cannabis the risk is higher the younger you start, the stronger it is and the more regularly you use it. Drugs and alcohol can also react badly with antipsychotics. You should not be excluded from mental health care because of cannabis use, and a GP or local drug or alcohol service can help you cut down or stop.",
    sections: [
      {
        heading: "A known trigger",
        paragraphs: [
          "Alcohol-use disorder and drug misuse can trigger a psychotic episode. It's also possible to experience psychosis after drinking large amounts of alcohol or while high on drugs.",
          "Some people use drugs or alcohol to cope with their symptoms. This might feel like it helps in the short term, but there is evidence that it can make existing mental health problems worse.",
        ],
      },
      {
        heading: "Cannabis",
        paragraphs: [
          "Research has shown that people who use cannabis have an increased risk of developing psychosis. The younger you are when you start, and the stronger the cannabis or the more regularly you use it, the higher the risk.",
          "Regular use of cannabis from a young age seems to significantly increase the risk of schizophrenia, and research suggests it can as much as double the risk. For people who live with a psychotic illness, cannabis can bring symptoms back.",
          "Reducing or stopping cannabis can help reduce symptoms of psychosis. If you use it often, slowly reducing over several weeks before stopping completely can help with withdrawal.",
        ],
      },
      {
        heading: "Alcohol",
        paragraphs: [
          "A psychotic episode can happen if someone suddenly stops drinking after drinking for a long time. If you have become physically dependent on alcohol and need to stop completely, stopping overnight could be harmful, so get medical advice first.",
          "Call 999 if you have severe symptoms of alcohol withdrawal, such as hallucinations, severe tremors or fits. A GP is a good place to start, and can tell you about local alcohol services and any medicine you may need to stop safely.",
        ],
      },
      {
        heading: "Drugs, alcohol and your medicine",
        paragraphs: [
          "Drugs and alcohol can react badly with antipsychotic medicines, and can be very dangerous together. Speak to your doctor if you are drinking alcohol or using illegal drugs.",
          "Using cannabis won't change how a mental health medicine works, but it might make you less likely to take your medicine.",
        ],
      },
      {
        heading: "Getting help without judgement",
        paragraphs: [
          "You should not be excluded from NHS mental health care because of cannabis use, or from a substance misuse service because of a diagnosis of psychosis. If you use drugs or alcohol to cope, this shouldn't stop you getting timely treatment for psychosis.",
          "It is best to be honest with your GP about your use and your symptoms, so they can offer the right support. If you are seeking help, your doctor won't report you to the police unless you are putting others at risk. You can also call the FRANK drugs helpline on 0300 123 6600.",
        ],
      },
    ],
    helps: [
      "Tell your doctor or care co-ordinator if you drink or use drugs, and ask for help if you're finding it hard to stop.",
      "If you use cannabis often, reduce slowly over several weeks before stopping completely.",
      "If you drink heavily, do not stop suddenly without medical advice: speak to a GP first.",
      "You can approach your local drug service yourself, or call FRANK on 0300 123 6600.",
      "Avoid people, places and activities you link with using cannabis, and don't use it when you feel low.",
      CRISIS,
    ],
    tryThisWeek: [
      "Tell your doctor about drink or drugs.",
      "Cut down cannabis slowly.",
      "Don't stop heavy drinking without advice.",
    ],
    ask: "Could drink or drugs be affecting my psychosis or my medicine, and where can I get help to cut down?",
    interactive: {
      kind: "scenarios",
      title: "Choices about drink and drugs",
      scenarios: [
        {
          id: "cope",
          situation: "Your symptoms feel loud, and a friend offers cannabis to help you relax.",
          options: [{ text: "Say no, and talk to your team", best: true }, { text: "Use it to calm down" }],
          why: "This might feel like it helps in the short term, but there is evidence that if you already have mental health problems cannabis can make these worse.",
        },
        {
          id: "drink",
          situation: "You drink every day and decide to stop tonight on your own.",
          options: [{ text: "Get medical advice first", best: true }, { text: "Stop overnight without telling anyone" }],
          why: "If you have become physically dependent and need to stop drinking completely, stopping overnight could be harmful. Get advice first.",
        },
        {
          id: "honest",
          situation: "Your GP asks whether you use drugs.",
          options: [{ text: "Be honest about it", best: true }, { text: "Say no to avoid trouble" }],
          why: "Being honest helps your GP offer the right support. Your doctor won't report you to the police for seeking help, unless you are putting others at risk.",
        },
        {
          id: "withdrawal",
          situation: "You've stopped drinking and start seeing things that aren't there.",
          options: [{ text: "Call 999", best: true }, { text: "Wait for it to pass" }],
          why: "Call 999 if you have severe symptoms of alcohol withdrawal, including hallucinations, severe tremors or fits.",
        },
      ],
    },
    sources: [NHS_CAUSES, RCP_CANNABIS, RCP_PSYCHOSIS, RETHINK_CANNABIS, NHS_ALCOHOL_SUPPORT, NHS_DRUG_HELP, NHS_SCHIZ_LIVING, RCP_SCHIZ, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Can you be refused NHS mental health care because you use cannabis?",
      options: [{ text: "No", right: true }, { text: "Yes, always" }, { text: "Only in hospital" }],
      why: "You should not be excluded from NHS mental health care because of cannabis use.",
    },
  },
  {
    id: "psy-physical-health",
    kicker: "Physical health",
    question: "Why does physical health matter with psychosis, and what checks should I have?",
    hook: "People with psychosis can have worse physical health, particularly heart health. A free yearly health check can find problems early.",
    short: "If you have psychosis, you are at higher risk of physical health problems such as being overweight, coronary heart disease or diabetes, and some antipsychotics can make you put on weight. Anyone aged 18 or over with psychosis can have a free health check once a year. Eating well, staying active and support to stop smoking all help.",
    sections: [
      {
        heading: "Why it matters",
        paragraphs: [
          "People with psychosis can experience worse physical health, particularly heart and circulation health. The risks include being overweight, coronary heart disease and diabetes.",
          "Some antipsychotics can make you put on weight, which is one reason your physical health needs to be carefully monitored.",
        ],
      },
      {
        heading: "Checks when you start medicine",
        paragraphs: [
          "You should be offered a full physical health check before starting an antipsychotic. It includes blood tests for conditions like diabetes and high cholesterol, blood pressure and heart rate, height and weight, and an ECG to check your heart.",
          "Your weight should be monitored each week for the first 6 weeks. You should have a physical health check 12 weeks after starting medicine, and then at least once a year.",
        ],
      },
      {
        heading: "Your annual health check",
        paragraphs: [
          "Anyone aged 18 or over who has psychosis, schizophrenia or bipolar disorder can have a free health check once a year. Your GP surgery should invite you, and you can contact the surgery to ask if you have not had a letter.",
          "The appointment may take about 45 minutes. It usually includes your weight, heart rate and blood pressure, a urine and blood test, a talk about your medicines and any side effects, and a check that your vaccinations are up to date.",
          "Tell your GP surgery if you need extra help, such as a longer appointment, someone with you, or a home visit if you are unable to leave your home.",
        ],
      },
      {
        heading: "Everyday habits that help",
        paragraphs: [
          "A balanced diet with lots of fruit and vegetables and regular exercise can reduce your risk of heart disease and diabetes. Try to eat regularly, avoid skipping meals, and find an activity you enjoy, such as a brisk walk or swimming.",
          "Try to avoid too much stress, and keep a regular sleep pattern.",
        ],
      },
      {
        heading: "Smoking",
        paragraphs: [
          "Stopping smoking has been shown to improve the mental health of people with schizophrenia, and it reduces your risk of cancer, heart disease and stroke. You can ask your GP about NHS support and stop smoking medicines.",
          "If you take antipsychotics, talk to your GP or psychiatrist before you stop smoking, or if you start again. The amount of medicine you need could change.",
        ],
      },
    ],
    helps: [
      "Book your free annual health check with your GP surgery if you have not been invited.",
      "Ask whether you are on your GP surgery's severe mental illness register, and ask to be added if not.",
      "Talk to the doctor or nurse about your medicines and any side effects at each check.",
      "Eat regularly, and find an activity you enjoy that you can do regularly.",
      "Talk to your GP or psychiatrist before stopping or restarting smoking.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book your annual health check.",
      "Ask to join the register.",
      "Find an activity you enjoy.",
    ],
    ask: "What physical health checks do I need, and who will do them?",
    interactive: {
      kind: "timeline",
      title: "Health checks on antipsychotics",
      steps: [
        { id: "before", when: "Before you start", title: "A full check", points: ["Blood tests, blood pressure, heart rate, height and weight.", "An ECG to check your heart."] },
        { id: "weekly", when: "First 6 weeks", title: "Weight each week", points: ["Some antipsychotics can make you put on weight.", "Your weight should be monitored weekly."] },
        { id: "twelve", when: "Week 12", title: "A physical health check", points: ["A check 12 weeks after starting medicine.", "Your doctors should check the medicine is working."] },
        { id: "yearly", when: "Every year", title: "Annual health check", points: ["Free, for anyone 18 or over with psychosis.", "Weight, blood pressure, and blood and urine tests."] },
        { id: "daily", when: "Every day", title: "Habits that help", points: ["Eat regularly and stay active.", "Talk to your GP before you stop smoking."] },
      ],
    },
    sources: [NHS_SMI_CHECK, RCP_PSYCHOSIS, RETHINK_PSYCHOSIS, RETHINK_PHYSICAL, NHS_SCHIZ_LIVING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How often can you have a free health check if you have psychosis?",
      options: [{ text: "Once a year", right: true }, { text: "Once every 5 years" }, { text: "Never" }],
      why: "Anyone aged 18 or over who has schizophrenia, bipolar disorder or psychosis can have a free health check once a year.",
    },
  },
  {
    id: "psy-family",
    kicker: "Family and carers",
    question: "How can I support someone with psychosis, and look after myself?",
    hook: "It can be hard to know what to say when someone believes things that are not true. Responding to their feelings, rather than the belief, often helps more.",
    short: "Friends and family have a vital role in helping someone recover, and in making a relapse less likely. It can help to respond to the person's feelings rather than argue about their beliefs, to learn about psychosis, and to ask how you can help. Your own wellbeing matters too: you can ask for a free carer's assessment and about family intervention.",
    sections: [
      {
        heading: "Your part in recovery",
        paragraphs: [
          "Friends, relatives and partners have a vital role in helping people recover, and make a relapse less likely. Try to offer support and understanding about how the person is feeling, rather than blaming them or telling them to pull themselves together.",
          "Psychosis is a frequently misunderstood condition. Finding out more about it from reliable sources, and asking the person what you could help with, can make a real difference.",
        ],
      },
      {
        heading: "Responding to unusual beliefs",
        paragraphs: [
          "For the person experiencing psychosis, it can be impossible to tell their symptoms from reality. You might find it more helpful to respond to their feelings, rather than the beliefs causing those feelings.",
          "If they are scared they are being watched, rather than trying to convince them it isn't happening, you could tell them it sounds really scary and ask if there is anything you can do to help them feel safer.",
          "Try not to laugh at the belief, or agree with it to keep the peace, as agreeing might strengthen it. Listening, acknowledging their feelings and building trust can help.",
        ],
      },
      {
        heading: "Practical help",
        paragraphs: [
          "The person might like practical help, such as organising their finances, or emotional support, such as going to an appointment with them. If they are at risk of spending a lot of money when unwell, you can agree steps together to protect it.",
          "You can ask to see a copy of their care plan, and their team should involve you in planning their care, though it is usually up to the person how much is shared. The team should give you information about psychosis, recovery, support for carers and getting help in a crisis.",
        ],
      },
      {
        heading: "Family support",
        paragraphs: [
          "Family intervention helps both the person and their family cope. It involves a series of meetings over 3 months or more, discussing the condition, ways of supporting someone with psychosis, and planning how to manage future episodes.",
          "Friends and family can also watch out for signs of relapse, and encourage the person to take their medicine and go to appointments. Talk with the care team about what to do in the event of a crisis.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "Caring for someone with psychosis can be very difficult at times, and your own physical and mental health matter too. Even if you don't see yourself as a carer, you could still be entitled to support.",
          "A carer's assessment is free, and anyone over 18 can ask for one from adult social services at their local council. It might recommend things like someone taking over so you can have a break, or putting you in touch with local support groups.",
          "You can also speak to your GP about support for yourself, and join a carers service or support group.",
        ],
      },
    ],
    helps: [
      "Respond to the person's feelings, rather than arguing about or agreeing with the belief.",
      "Ask the person what practical or emotional help they would like.",
      "Ask the care team about family intervention, and about what to do in a crisis.",
      "Ask your local council for a free carer's assessment, and your GP about support for yourself.",
      "If you think the person needs urgent help, call 111, or call 999 if they are an immediate danger to themselves or others.",
      CRISIS,
    ],
    tryThisWeek: [
      "Respond to feelings, not the belief.",
      "Ask how you can help.",
      "Ask for a carer's assessment.",
    ],
    ask: "How can I be involved in my relative's care, and what support is there for me?",
    interactive: {
      kind: "scenarios",
      title: "What could you say?",
      scenarios: [
        {
          id: "watched",
          situation: "Your son says the government is listening to his phone calls.",
          options: [{ text: "Say it sounds scary, and ask how to help", best: true }, { text: "Argue until he admits it isn't true" }],
          why: "You might find it more helpful to validate their feelings, rather than the beliefs that are causing their feelings.",
        },
        {
          id: "laugh",
          situation: "Your partner's belief sounds so odd that you want to laugh.",
          options: [{ text: "Listen and acknowledge their feelings", best: true }, { text: "Laugh it off" }],
          why: "It may be tempting to laugh if a belief is very unusual, but it's best not to. It might upset them or make them angry.",
        },
        {
          id: "agree",
          situation: "It would be easier to just agree with the belief.",
          options: [{ text: "Don't agree; focus on their feelings", best: true }, { text: "Agree to keep the peace" }],
          why: "You may feel that it is easier just to agree. But doing this might strengthen their beliefs.",
        },
        {
          id: "worn-out",
          situation: "You're worn out from caring and have no time for yourself.",
          options: [{ text: "Ask for a carer's assessment and support", best: true }, { text: "Keep going without help" }],
          why: "Caring for someone with psychosis can be very difficult at times, and it is important that you are able to support your own physical and mental health as well.",
        },
      ],
    },
    sources: [RCP_PSYCHOSIS, RETHINK_PSYCHOSIS, RETHINK_UNUSUAL, NHS_SCHIZ_LIVING, NHS_TREATMENT, NHS_CARER_ASSESSMENT, NHS_DIAGNOSIS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When someone shares a delusion, what does the Royal College of Psychiatrists suggest?",
      options: [{ text: "Respond to their feelings", right: true }, { text: "Prove them wrong" }, { text: "Ignore them" }],
      why: "You might find it more helpful to validate their feelings, rather than the beliefs that are causing their feelings.",
    },
  },
];
