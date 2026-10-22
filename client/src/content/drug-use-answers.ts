import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Drug use page's pieces (content/library-conditions/mind-extra.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, FRANK, the Royal College
// of Psychiatrists, Rethink Mental Illness and Change Grow Live, with UK SMART Recovery, Narcotics Anonymous UK,
// Cocaine Anonymous UK and GOV.UK where a piece needs them. mind.org.uk was not used.
// Neutral, non-judgemental wording throughout ("people who use drugs", never labels). No "how to use" information:
// harm reduction is given only as FRANK or the NHS words it, and overdose first aid only as FRANK gives it.
// Where the sources say stopping suddenly is unsafe (benzodiazepines, opioids, prescribed codeine, diazepam and
// pregabalin, or after long use), the answers say so plainly; nothing suggests stopping or changing a medicine
// without the doctor. Every answer ends its "What helps" list with the crisis routes exactly as the NHS gives them
// (999 or A&E, 111 mental health option, Samaritans 116 123, Shout 85258). General information only; it never
// replaces what a person's own GP, drug service or keyworker tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const frank = (label: string, path: string): LearnSource => ({ label: `FRANK: ${label}`, url: `https://www.talktofrank.com/${path}` });
const cgl = (label: string, path: string): LearnSource => ({ label: `Change Grow Live: ${label}`, url: `https://www.changegrowlive.org/${path}` });
const smart = (label: string, path: string): LearnSource => ({ label: `UK SMART Recovery: ${label}`, url: `https://smartrecovery.org.uk/${path}` });

const NHS_HELP = nhs("Drug addiction: getting help", "live-well/addiction-support/drug-addiction-getting-help/");
const NHS_ADDICTION = nhs("Addiction: what is it?", "live-well/addiction-support/addiction-what-is-it/");
const NHS_HEROIN = nhs("Heroin addiction: get help", "live-well/addiction-support/heroin-get-help/");
const NHS_COCAINE = nhs("Cocaine addiction: get help", "live-well/addiction-support/cocaine-get-help/");
const NHS_FAMILIES = nhs("Advice for families of people who use drugs", "live-well/addiction-support/advice-for-the-families-of-drug-users/");
const NHS_PSYCHOSIS_CAUSES = nhs("Psychosis: causes", "mental-health/conditions/psychosis/causes/");
const NHS_CODEINE = nhs("Codeine", "medicines/codeine/");
const NHS_COCODAMOL_Q = nhs("Common questions about co-codamol for adults", "medicines/co-codamol-for-adults/common-questions-about-co-codamol-for-adults/");
const NHS_DIAZEPAM = nhs("Diazepam", "medicines/diazepam/");
const NHS_PREGABALIN_Q = nhs("Common questions about pregabalin", "medicines/pregabalin/common-questions-about-pregabalin/");
const NHS_PREGABALIN = nhs("About pregabalin", "medicines/pregabalin/about-pregabalin/");
const NHS_INSOMNIA = nhs("Insomnia", "conditions/insomnia/");
const NHS_TT = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_HEPC = nhs("Hepatitis C", "conditions/hepatitis-c/");
const NHS_CARERS = nhs("Carer's assessments", "social-care-and-support/support-and-benefits-for-carers/carer-assessments/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const F_CONTACT = frank("Contact FRANK", "contact-frank");
const F_TREATMENT = frank("What is drug and alcohol treatment like?", "get-help/what-is-drug-and-alcohol-treatment-like");
const F_FRIEND = frank("Concerned about a friend?", "get-help/concerned-about-a-friend");
const F_PARENT = frank("Concerned about a parent's drug or alcohol use?", "get-help/concerned-about-a-parent");
const F_EMERGENCY = frank("What to do in an emergency", "get-help/what-to-do-in-an-emergency");
const F_COCAINE = frank("Cocaine", "drug/cocaine");
const F_HEROIN = frank("Heroin", "drug/heroin");
const F_BENZOS = frank("Benzodiazepines and derivatives", "drug/benzodiazepines");
const F_OPIOID_PK = frank("Opioid painkillers", "drug/opiateopioid-painkillers");
const F_SYNTH = frank("New synthetic opioids", "drug/synthetic-opioids");
const F_PREGABALIN = frank("Pregabalin", "drug/pregabalin");
const F_METHADONE = frank("Methadone", "drug/methadone");

const RCP_CANNABIS: LearnSource = { label: "Royal College of Psychiatrists: Cannabis and mental health", url: "https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/cannabis-and-mental-health" };
const RETHINK_DRUGS: LearnSource = { label: "Rethink Mental Illness: Drugs, alcohol, and mental health", url: "https://www.rethink.org/advice-and-information/living-with-mental-illness/health-wellbeing-and-neurodiversity/drugs-alcohol-and-mental-health/" };

const CGL_RELAPSE = cgl("Drug and alcohol relapse advice", "advice-info/alcohol-drugs/relapse-advice");
const CGL_STOPPING = cgl("Tips for cutting down or stopping drug use", "advice-info/drugs/stopping-cutting-down");
const CGL_PEER = cgl("How our groups can support you", "advice-info/alcohol-drugs/peer-mentors-and-groups");
const CGL_NALOXONE = cgl("Naloxone", "advice-info/alcohol-drugs/naloxone-overdose-reversal-drug");

const SMART_WHAT = smart("What is SMART Recovery", "about/what-smart-recovery");
const SMART_MEETINGS = smart("SMART Recovery meetings", "about/smart-recovery-meetings");
const SMART_PROGRAMMES = smart("SMART Programmes", "about/smart-programmes");
const UKNA: LearnSource = { label: "Narcotics Anonymous UK: Welcome to UKNA", url: "https://ukna.org/" };
const CAUK: LearnSource = { label: "Cocaine Anonymous UK", url: "https://www.cocaineanonymous.org.uk/" };
const GOV_DRUG_DRIVING: LearnSource = { label: "GOV.UK: Drugs and driving: the law", url: "https://www.gov.uk/drug-driving-law" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you do not feel you can keep yourself safe.";

export const drugUseAnswers: LearnArticle[] = [
  {
    id: "drug-what-it-is",
    kicker: "Understanding",
    question: "When does using drugs become a problem?",
    hook: "Most people who try drugs do not go on to have a problem. When it starts to take control, help is there, and it works.",
    short: "Addiction means not having control over taking or using something, to the point where it could be harmful to you. You do not have to use a drug every day to be addicted: a sign is that you have tried to cut down or stop but cannot. Addiction is a treatable condition, and there are lots of ways to get help.",
    sections: [
      {
        heading: "Use, misuse and dependence",
        paragraphs: [
          "Addiction is defined as not having control over doing, taking or using something to the point where it could be harmful to you. It is a common problem, but help is available.",
          "Most people only develop an addiction after regularly taking a drug. It is highly unlikely that anyone will develop an addiction after taking drugs once or twice, and most people who try drugs do not keep on doing it.",
        ],
      },
      {
        heading: "Why it can be hard to stop",
        paragraphs: [
          "Drugs affect the way you feel, both physically and mentally. These feelings can be enjoyable and create a powerful urge to use the substance again.",
          "Being addicted means that not having it causes withdrawal symptoms, or a come down. Because this can be unpleasant, it is easier to carry on, and so the cycle continues. Often an addiction gets out of control because you need more and more to get the same effect.",
        ],
      },
      {
        heading: "Why people start",
        paragraphs: [
          "People use drugs for lots of reasons: to socialise, to fit in, out of curiosity, or to escape difficult feelings. Some people use them to try to deal with the symptoms of a mental illness, which is called self-medication.",
          "Some studies suggest a person's risk of becoming addicted is partly genetic, but being around other people with addictions is also thought to raise it. Unemployment, poverty, stress and emotional or professional pressure can trigger addiction.",
        ],
      },
      {
        heading: "What it can affect",
        paragraphs: [
          "Using drugs regularly may have a long-term effect on your health, mood, motivation and relationships. The strain of managing an addiction can seriously damage your work life and relationships.",
          "You do not have to be taking a drug like cocaine every day to be addicted to it. A sign of addiction is that you have tried to cut down or stop but are unable to.",
        ],
      },
      {
        heading: "Help is there",
        paragraphs: [
          "Addiction is a treatable condition. You are entitled to the same confidential NHS care as anyone else who has a health problem, and if you are not ready to stop, you can still get help with staying safe and healthy.",
        ],
      },
    ],
    helps: [
      "Remember that addiction is a treatable condition, and help is available.",
      "See a GP, or contact an organisation that specialises in helping people with addictions.",
      "If you are not ready to stop, you can still get help with staying safe and healthy.",
      "To speak to someone anonymously about any type of addiction, call Samaritans free on 116 123.",
      CRISIS,
    ],
    tryThisWeek: [
      "Remind yourself addiction is treatable.",
      "Think about talking to a GP.",
      "Call Samaritans on 116 123 to talk.",
    ],
    ask: "Could my drug use be turning into a problem, and what help is there?",
    interactive: {
      kind: "timeline",
      title: "How the cycle can build",
      steps: [
        { id: "effect", when: "Step 1", title: "The effect", points: ["A drug changes how you feel, in body and mind.", "The feeling can create a powerful urge to use again."] },
        { id: "more", when: "Step 2", title: "Using more often", points: ["Most addiction develops after regular use.", "You may need more to get the same effect."] },
        { id: "come-down", when: "Step 3", title: "The come down", points: ["Without it, withdrawal symptoms or a come down follow.", "Carrying on feels easier, so the cycle continues."] },
        { id: "control", when: "Step 4", title: "Losing control", points: ["You try to cut down or stop but cannot.", "It starts to affect work and relationships."] },
        { id: "help", when: "Step 5", title: "Breaking the cycle", points: ["Addiction is a treatable condition.", "A GP or local drug service can help."] },
      ],
    },
    sources: [NHS_ADDICTION, F_FRIEND, RETHINK_DRUGS, NHS_COCAINE, NHS_HEROIN, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do you have to use a drug every day to be addicted?",
      options: [{ text: "No, a sign is trying to stop but being unable to", right: true }, { text: "Yes, only daily use counts" }, { text: "Only if it is a Class A drug" }],
      why: "You do not have to be taking a drug like cocaine every day to be addicted to it. A sign of addiction is that you have tried to cut down or stop but are unable to.",
    },
  },
  {
    id: "drug-mental-health",
    kicker: "Mind and mood",
    question: "Can drugs affect my mental health?",
    hook: "Drugs can seem to ease difficult feelings for a while. Over time, they can make anxiety, low mood and other symptoms worse.",
    short: "Drugs can make the symptoms of a mental illness worse, and some drugs may make it more likely that you get a mental illness. Some people use drugs to try to cope with how they feel, but this can backfire. A GP can help with both your mental health and your drug use.",
    sections: [
      {
        heading: "A two-way link",
        paragraphs: [
          "Living with a mental illness and using drugs or drinking a lot is sometimes called dual diagnosis. Some people use drugs to try to deal with the symptoms of their mental illness, which is called self-medication.",
          "This might feel like it helps in the short term. But there is evidence that if you already have mental health problems, cannabis can make them worse.",
        ],
      },
      {
        heading: "Mood, anxiety and paranoia",
        paragraphs: [
          "Drug use can lead to mood swings, and sometimes to serious mental health problems such as panic attacks and depression.",
          "Regular use of cocaine can make people feel depressed, run down, anxious and paranoid. Cocaine can also bring earlier mental health problems to the surface.",
          "Cannabis can raise the risk of depression, anxiety and suicidal thoughts, and the younger you are when you start, the greater the risk.",
        ],
      },
      {
        heading: "Psychosis",
        paragraphs: [
          "Psychosis is when your thoughts and feelings change so much that you lose contact with reality. Drug misuse can trigger a psychotic episode, and so can suddenly stopping drugs after using them for a long time.",
          "Drugs known to trigger psychotic episodes include cocaine, amphetamine, mephedrone, ecstasy, cannabis, LSD, magic mushrooms and ketamine.",
          "With cannabis, the risk of psychosis is higher with stronger forms, regular use and starting young. If you think you might have symptoms of psychosis, speak to your GP straight away.",
        ],
      },
      {
        heading: "Getting help for both",
        paragraphs: [
          "Seeing your GP is a good first step. A GP can help with your mental health and refer you to a drug and alcohol service, or to a specialist for talking therapy.",
          "NHS specialist mental health services should not refuse to support you with your mental health because you take drugs. They should assess both your drug use and your mental health needs.",
          "Reducing or stopping cannabis can help reduce symptoms like depression and psychosis, though you might need extra support for your mental health.",
        ],
      },
    ],
    helps: [
      "See your GP: it is a good first step to get help with your mental health and with drugs.",
      "If you think you might have symptoms of psychosis, speak to your GP straight away.",
      "Try not to use cannabis when you feel sad or depressed, as it can make you feel worse.",
      "If a mental health service says it cannot help because of your drug use, talk to the person in charge of your care, get an advocate or contact PALS.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Avoid cannabis when feeling low.",
      "Ask for help if a service says no.",
    ],
    ask: "Could my drug use be affecting my mood, and can you help with both?",
    interactive: {
      kind: "risk-check",
      title: "What can raise the risk",
      intro: "Tick what applies. Each one says what the sources say about it.",
      items: [
        { id: "coping", label: "Using to cope with symptoms", note: "It might feel like it helps in the short term, but it can make mental health problems worse.", changeable: true },
        { id: "regular", label: "Using cannabis regularly", note: "Regular use, and stronger forms, can raise the risk of psychosis.", changeable: true },
        { id: "young", label: "Starting young", note: "The younger you are when you start using cannabis, the higher the risk.", changeable: false },
        { id: "family", label: "Family history of mental illness", note: "If a relative has had mental health problems, cocaine may carry more risk for you.", changeable: false },
        { id: "stopping", label: "Stopping suddenly after long use", note: "Withdrawal can bring on a psychotic episode. Get help to stop safely.", changeable: true },
      ],
    },
    sources: [RETHINK_DRUGS, RCP_CANNABIS, NHS_PSYCHOSIS_CAUSES, F_COCAINE, F_FRIEND, NHS_TT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What can suddenly stopping drugs after long use bring on?",
      options: [{ text: "A psychotic episode", right: true }, { text: "Nothing at all" }, { text: "Instantly better sleep" }],
      why: "Drug misuse can trigger a psychotic episode, and so can suddenly stopping drugs after using them for a long time.",
    },
  },
  {
    id: "drug-prescription",
    kicker: "Medicines",
    question: "Can I get hooked on medicines from my doctor or the chemist?",
    hook: "Painkillers, sleeping tablets and some other medicines help many people. Taken for a long time, some can be hard to stop.",
    short: "Some prescription and over-the-counter medicines, such as codeine painkillers, benzodiazepines like diazepam, and pregabalin, can be addictive. You are unlikely to become addicted if you follow your doctor's advice about how long to take them. If you are worried, talk to your doctor, and do not stop suddenly without their advice.",
    sections: [
      {
        heading: "Medicines that can be addictive",
        paragraphs: [
          "It is possible to become addicted to codeine, a strong painkiller called an opioid. Small amounts of codeine are also in some painkillers you can buy at a pharmacy, such as co-codamol.",
          "Diazepam, a benzodiazepine used for severe anxiety, should only be used short term, up to 4 weeks. Taking it for longer can cause addiction and withdrawal symptoms. Some people can also become addicted to pregabalin.",
          "GPs now rarely prescribe sleeping pills for insomnia, because they can have serious side effects and you can become dependent on them.",
        ],
      },
      {
        heading: "How it can creep up",
        paragraphs: [
          "If you take a medicine like co-codamol for a long time, your body can become tolerant to it. That means you need higher doses to control your pain over time.",
          "FRANK says some people who have used opioid painkillers regularly for some time have become dependent on them. The risk is greater if they are taken to get high or to manage psychological pain.",
        ],
      },
      {
        heading: "Signs to notice",
        paragraphs: [
          "If you are addicted, you may find it difficult to stop taking the medicine, or feel you need to take it more often than necessary.",
          "You may find you have been hiding the amount you are taking, or not being honest about your symptoms.",
        ],
      },
      {
        heading: "Buying from a pharmacy",
        paragraphs: [
          "If you have bought co-codamol from a pharmacy, only take it for up to 3 days at a time. If your pain is not better after 3 days, ask your doctor for advice about further pain relief.",
          "Counterfeit medicines can be very hard to tell from real ones. You can only be sure an opioid painkiller is real if it comes from a pharmacy registered in the UK.",
        ],
      },
      {
        heading: "Stopping safely",
        paragraphs: [
          "Do not stop taking codeine, diazepam or pregabalin suddenly, as this can cause withdrawal symptoms. Your doctor will reduce your dose gradually. Always follow your doctor's advice.",
        ],
      },
    ],
    helps: [
      "Talk to your doctor if you are worried about addiction, need help with it, or want to stop taking the medicine.",
      "Do not stop taking it suddenly; your doctor will reduce your dose gradually.",
      "Only take co-codamol bought from a pharmacy for up to 3 days at a time.",
      "Only get medicines from your prescriber or a pharmacy registered in the UK.",
      CRISIS,
    ],
    tryThisWeek: [
      "Tell your doctor if you are worried.",
      "Do not stop suddenly on your own.",
      "Keep pharmacy co-codamol to 3 days.",
    ],
    ask: "Could I be becoming dependent on one of my medicines, and how could we reduce it safely?",
    interactive: {
      kind: "flip-cards",
      title: "Medicines that can be habit-forming",
      intro: "Tap a card to see what the NHS says about each one.",
      cards: [
        { id: "codeine", front: "Codeine", when: "Pain, after an operation or injury", back: "A strong opioid painkiller. It is possible to become addicted. Do not stop suddenly; your doctor will reduce the dose." },
        { id: "co-codamol", front: "Co-codamol", when: "Pain; some kinds sold in pharmacies", back: "Contains codeine. If bought from a pharmacy, take it for up to 3 days at a time, then ask your doctor." },
        { id: "diazepam", front: "Diazepam", when: "Severe anxiety, seizures, muscle spasms", back: "A benzodiazepine for short-term use, up to 4 weeks. Taking it for longer can cause addiction and withdrawal." },
        { id: "pregabalin", front: "Pregabalin", when: "Epilepsy, anxiety and nerve pain", back: "Some people become addicted. The dose is reduced gradually; do not stop without talking to your doctor." },
        { id: "sleeping-pills", front: "Sleeping pills", when: "Insomnia, now rarely", back: "GPs rarely prescribe them, as they can have serious side effects and you can become dependent on them." },
      ],
    },
    sources: [NHS_CODEINE, NHS_COCODAMOL_Q, NHS_DIAZEPAM, NHS_PREGABALIN_Q, F_TREATMENT, F_OPIOID_PK, NHS_INSOMNIA, NHS_PREGABALIN, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How long should co-codamol bought from a pharmacy be taken at a time?",
      options: [{ text: "Up to 3 days", right: true }, { text: "Up to 3 weeks" }, { text: "As long as it is needed" }],
      why: "If you have bought co-codamol from a pharmacy, only take it for up to 3 days at a time.",
    },
  },
  {
    id: "drug-signs",
    kicker: "Spotting it",
    question: "How can I tell if drug use is becoming a problem?",
    hook: "It rarely happens overnight. Small changes, like using alone or hiding how much, can be the first signs.",
    short: "Signs that drug use is becoming a problem include using very regularly, carrying on despite trying to cut down or stop, keeping it secret, and doing less of the things you enjoy. People who are dependent often do not think they are, or do not feel they can admit it. Noticing the signs is a good reason to talk to someone.",
    sections: [
      {
        heading: "Signs to look out for",
        paragraphs: [
          "FRANK lists signs that a person is getting addicted: taking a drug very regularly, taking it despite trying to cut down or stop, and lying about how much they use or keeping it secret.",
          "Other signs are carrying on despite the harm it is causing, using alone, and doing less of the things they enjoy because drugs are getting in the way.",
        ],
      },
      {
        heading: "When it takes over",
        paragraphs: [
          "The Royal College of Psychiatrists describes how dependence on cannabis can look. You might struggle to stop once you have started, spend a lot of time thinking about using, or use even where it might be dangerous, such as at work or when looking after children.",
          "Some people do extreme things to get a drug, like getting into debt or faking symptoms to get prescription medicines.",
        ],
      },
      {
        heading: "Effects on daily life",
        paragraphs: [
          "Problems might involve money, strained friendships, broken relationships, your job, or getting arrested.",
          "Change Grow Live adds signs like feeling the need to use before doing everyday things, arguments at home, and other people noticing a change in your behaviour.",
          "Long-term use can also bring sudden mood changes, loss of motivation, problems with relationships and being secretive.",
        ],
      },
      {
        heading: "Hard to see from the inside",
        paragraphs: [
          "People who are addicted often do not think they are, or do not feel they can admit it. You do not have to be taking a drug every day to be addicted: a sign is that you have tried to cut down or stop but are unable to.",
          "If cocaine is damaging your relationships, work, money or health, you can get help to stop on the NHS.",
        ],
      },
    ],
    helps: [
      "Look honestly at whether you have tried to cut down or stop but have not been able to.",
      "Keep a diary of how much you are using and when, to understand your use and what it costs.",
      "Talk to someone you trust, like a friend or family member, if your use feels like it is getting out of control.",
      "Call FRANK any time on 0300 123 6600 for confidential advice.",
      CRISIS,
    ],
    tryThisWeek: [
      "Keep a diary of when you use.",
      "Talk to someone you trust.",
      "Call FRANK on 0300 123 6600.",
    ],
    ask: "Some of these signs sound familiar. What should I do next?",
    interactive: {
      kind: "signs",
      title: "Signs I have noticed",
      intro: "Tick any that apply to you, or to someone you are worried about.",
      signs: [
        "Using very regularly",
        "Using despite trying to cut down or stop",
        "Hiding how much, or keeping it secret",
        "Carrying on despite the harm",
        "Using alone",
        "Doing less of what I enjoy",
        "Thinking about using a lot of the time",
        "Needing to use before everyday things",
        "Money worries or debt",
        "Sudden mood changes",
      ],
      after: "Take this list to a GP or local drug service, or talk it through with FRANK on 0300 123 6600.",
      copyHeading: "Signs I have noticed about drug use",
    },
    sources: [F_FRIEND, RCP_CANNABIS, NHS_COCAINE, RETHINK_DRUGS, F_TREATMENT, CGL_STOPPING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Which of these is a sign drug use is becoming a problem?",
      options: [{ text: "Using despite trying to cut down", right: true }, { text: "Trying a drug once" }, { text: "Reading about drugs" }],
      why: "FRANK lists signs that a person is getting addicted: taking a drug very regularly, taking it despite trying to cut down or stop, and lying about how much they use or keeping it secret.",
    },
  },
  {
    id: "drug-getting-help",
    kicker: "Getting help",
    question: "Where can I get help with drugs, and what happens when I go?",
    hook: "You do not need a referral, and treatment is confidential. Here is what the first steps look like.",
    short: "If you need help for a drug problem, you are entitled to treatment in the same way as anyone else with a health problem. A GP can refer you, or you can contact your local drug treatment service yourself. At your first appointment, staff will ask about your drug use and agree a treatment plan with you.",
    sections: [
      {
        heading: "Two ways in",
        paragraphs: [
          "A GP may be a good place to start. They can discuss your problems with you and will usually refer you to your local drug service.",
          "If you are not comfortable talking to a GP, you can refer yourself directly to your local drug treatment service. You can find support near you on the FRANK website.",
        ],
      },
      {
        heading: "Confidential, and free on the NHS",
        paragraphs: [
          "As someone with a drug problem, you are entitled to the same confidential NHS care as anyone else who has a health problem.",
          "Charities and the NHS provide most drug treatment. There are also private treatment organisations, but you will need to pay for private treatment.",
          "If you seek help for your cannabis use, your doctor will not report you to the police, unless you are putting others at risk.",
        ],
      },
      {
        heading: "Your first appointment",
        paragraphs: [
          "Staff will ask you about your drug use, and about your work, family and housing. You may be asked for a sample of urine or saliva.",
          "They will talk you through your treatment options and agree a treatment plan with you. You will also be given a keyworker, who will support you throughout your treatment.",
        ],
      },
      {
        heading: "If you are not sure where to start",
        paragraphs: [
          "If you are having trouble finding the right sort of help, call the FRANK helpline on 0300 123 6600. FRANK is open 24 hours a day, 7 days a week, and you can talk in 120 languages.",
          "You can also text FRANK on 82111, or send an email.",
        ],
      },
    ],
    helps: [
      "See a GP, who can refer you to your local drug service.",
      "Or contact your local drug treatment service yourself; find one on the FRANK website.",
      "Call FRANK on 0300 123 6600, any time, to talk through your options.",
      "If you are not ready to stop, you can still get help with staying safe and healthy.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Look up your local drug service.",
      "Call FRANK on 0300 123 6600.",
    ],
    ask: "Can you refer me to a local drug service, or can I go straight there myself?",
    interactive: {
      kind: "timeline",
      title: "From first call to a plan",
      steps: [
        { id: "reach-out", when: "Step 1", title: "Reaching out", points: ["See a GP, or contact a local drug service yourself.", "FRANK can help you find one."] },
        { id: "assessment", when: "Step 2", title: "Assessment", points: ["Staff ask about your drug use and your life.", "You may give a urine or saliva sample."] },
        { id: "plan", when: "Step 3", title: "Your plan", points: ["You agree a treatment plan together.", "It is updated as your needs change."] },
        { id: "keyworker", when: "Step 4", title: "Your keyworker", points: ["A keyworker supports you throughout.", "They can tell you about local support groups."] },
        { id: "treatment", when: "Step 5", title: "Treatment", points: ["Most treatment involves a talking therapy.", "Some drug problems need prescribed medicine too."] },
      ],
    },
    sources: [NHS_HELP, NHS_COCAINE, NHS_HEROIN, F_TREATMENT, F_CONTACT, RCP_CANNABIS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do you need a GP to refer you to a drug service?",
      options: [{ text: "No, you can refer yourself", right: true }, { text: "Yes, always" }, { text: "Only with a letter from the police" }],
      why: "If you are not comfortable talking to a GP, you can refer yourself directly to your local drug treatment service.",
    },
  },
  {
    id: "drug-stopping-safely",
    kicker: "Stopping",
    question: "Is it safe to stop suddenly?",
    hook: "Stopping some drugs overnight can be harmful. With the right support, coming off gradually is safer.",
    short: "For some drugs and medicines, stopping suddenly can cause withdrawal symptoms that can be dangerous, and can even bring on a psychotic episode or fits. Treatment for opioids such as heroin helps you withdraw gradually. Talk to a GP or drug service before stopping, and never stop a prescribed medicine without your doctor's advice.",
    sections: [
      {
        heading: "Why stopping suddenly can be risky",
        paragraphs: [
          "Gradual reduction is often the best way to quit. If you think you may be dependent on alcohol, benzodiazepines or opioids like heroin, avoid stopping suddenly and speak to a professional, because withdrawal can be uncomfortable and sometimes dangerous.",
          "People who use a lot of benzodiazepines can have bad withdrawal symptoms, including anxiety, panic attacks and depression, and might have fits. If you want to stop, talk to your GP for help and support.",
          "A person can also have a psychotic episode if they suddenly stop taking drugs after using them for a long time.",
        ],
      },
      {
        heading: "Opioids such as heroin",
        paragraphs: [
          "Your key worker will help you choose between maintenance therapy, where you switch to a substitute such as methadone or buprenorphine and stay on a stable dose, and detox, where you switch to a substitute and then gradually come off it.",
          "Both aim to help you withdraw gradually and ease withdrawal symptoms, which is much less severe than going cold turkey. Detoxing from heroin while living at home can take up to 12 weeks.",
          "For pregnant women who have been using opioids daily for a while, stopping suddenly without proper advice is not a good idea, as it may increase the risk of miscarriage or premature labour.",
        ],
      },
      {
        heading: "Prescribed medicines",
        paragraphs: [
          "Do not stop taking codeine or diazepam suddenly, as this can cause withdrawal symptoms. Your doctor will gradually reduce your dose. Always follow your doctor's advice.",
        ],
      },
      {
        heading: "Cannabis",
        paragraphs: [
          "If you use cannabis often and stop, you might get withdrawal symptoms such as poor sleep, anxiety, irritability and low mood. They usually start within 1 or 2 days and can last around 2 weeks, most intense in the first week.",
          "It can help to slowly reduce your use over several weeks before stopping completely. If you cannot do this, your doctor can advise you on how to reduce safely.",
        ],
      },
      {
        heading: "After stopping",
        paragraphs: [
          "Detox lowers your tolerance. This means your risk of overdose is higher if you take heroin or other drugs, such as benzodiazepines, after detoxing.",
          "After detox, your key worker will carry on supporting you for at least 6 months, which may include help with housing, work or education.",
        ],
      },
    ],
    helps: [
      "Talk to a GP or your local drug service before you stop, so they can help you do it safely.",
      "Never stop a prescribed medicine suddenly; your doctor will reduce the dose gradually.",
      "If you use cannabis often, cut down slowly over several weeks before stopping.",
      "Remember that after detox your tolerance is lower, and the risk of overdose is higher.",
      CRISIS,
    ],
    tryThisWeek: [
      "Talk to a GP before you stop.",
      "Keep taking prescribed medicine as advised.",
      "Cut down cannabis slowly over weeks.",
    ],
    ask: "Is it safe for me to stop suddenly, or should we plan to cut down gradually?",
    interactive: {
      kind: "scenarios",
      title: "Thinking about stopping",
      scenarios: [
        {
          id: "benzos",
          situation: "You have used benzos for months and want to stop tomorrow.",
          options: [{ text: "Talk to your GP first", best: true }, { text: "Stop all at once" }],
          why: "People who use a lot of benzodiazepines can have bad withdrawal symptoms and might have fits. If you want to stop, talk to your GP.",
        },
        {
          id: "painkiller",
          situation: "You want to stop a prescribed painkiller you have taken for a long time.",
          options: [{ text: "Ask your doctor to reduce it gradually", best: true }, { text: "Stop it tonight" }],
          why: "Do not stop taking codeine suddenly, as this can cause withdrawal symptoms. Your doctor will gradually reduce your dose.",
        },
        {
          id: "cannabis",
          situation: "You use cannabis most days and plan to stop.",
          options: [{ text: "Cut down slowly over several weeks", best: true }, { text: "Expect no withdrawal at all" }],
          why: "It can help to slowly reduce your use over several weeks before stopping completely.",
        },
        {
          id: "after-detox",
          situation: "You have just finished a detox.",
          options: [{ text: "Remember your tolerance is lower", best: true }, { text: "Assume nothing has changed" }],
          why: "Detox lowers your tolerance, so your risk of overdose is higher if you take heroin or other drugs afterwards.",
        },
      ],
    },
    sources: [NHS_HEROIN, NHS_PSYCHOSIS_CAUSES, F_BENZOS, RCP_CANNABIS, NHS_CODEINE, NHS_DIAZEPAM, F_METHADONE, F_OPIOID_PK, CGL_STOPPING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Why is the overdose risk higher after a detox?",
      options: [{ text: "Your tolerance is lower", right: true }, { text: "Detox makes drugs stronger" }, { text: "It is not higher" }],
      why: "Detox lowers your tolerance. This means your risk of overdose is higher if you take heroin or other drugs, such as benzodiazepines, after detoxing.",
    },
  },
  {
    id: "drug-treatments",
    kicker: "Treatment",
    question: "What treatment is there for drug problems, and does it work?",
    hook: "Most treatment means talking, with medicines for some drugs. It is planned with you, and many people do well.",
    short: "Most drug treatment involves some form of talking therapy, such as CBT. If you are dependent on heroin or another opioid, you may be offered a substitute medicine such as methadone or buprenorphine. Your keyworker will plan the right treatment with you, and most people who have treatment for cocaine addiction have good results.",
    sections: [
      {
        heading: "Talking therapies",
        paragraphs: [
          "Most treatment involves some form of talking therapy. Therapies like cognitive behavioural therapy (CBT) help you understand your addiction and change your thoughts and behaviour.",
          "It can also involve exploring the reasons for your drug use and what you can do to resist it. You might be offered one-to-one therapy, group therapy, or work with your partner or family.",
          "For drug and alcohol problems, a GP can refer you to a suitable specialist for talking therapy.",
        ],
      },
      {
        heading: "Medicines for opioids",
        paragraphs: [
          "If you are dependent on heroin or another opioid, you may be offered a substitute medicine, such as methadone or buprenorphine. This means you can get on with your treatment without having to worry about withdrawing or buying street drugs.",
          "Your daily dose will be supervised by a drugs worker or pharmacist for at least the first 3 months. FRANK says there is very good evidence for this treatment as one part of a path to recovery.",
        ],
      },
      {
        heading: "Cocaine and other stimulants",
        paragraphs: [
          "There are no medicines that work as substitutes for cocaine, crack cocaine or other stimulants. Talking therapies are known to work, and you may be offered medicines for related problems such as sleep, usually short term.",
          "You may also be offered couples therapy, or rewards such as vouchers for sticking with treatment.",
        ],
      },
      {
        heading: "Where treatment happens",
        paragraphs: [
          "You will usually have treatment while living at home. If you need intensive treatment like detox, it may be as a hospital inpatient, and you may be referred to residential rehab.",
          "Staff will also help reduce the risks of drug use, and you may be offered testing and treatment for hepatitis or HIV.",
        ],
      },
      {
        heading: "Does it work?",
        paragraphs: [
          "Most people who have treatment for cocaine addiction have good results. The majority of people treated for powder cocaine addiction remain drug free.",
        ],
      },
    ],
    helps: [
      "Ask your keyworker which treatments suit your circumstances and the drug you use.",
      "If you are dependent on heroin or another opioid, ask about substitute medicines.",
      "If you need help with anxiety or depression while detoxing, ask about a talking therapy like CBT.",
      "Ask about local support groups, such as Narcotics Anonymous or SMART Recovery.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask your keyworker about options.",
      "Ask about CBT for anxiety or low mood.",
      "Ask about local support groups.",
    ],
    ask: "Which treatments would suit me, and could I have talking therapy alongside?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments you may be offered",
      intro: "Tap a card to see what each one does.",
      cards: [
        { id: "cbt", front: "Talking therapy (CBT)", when: "Most drug problems", back: "Helps you understand your addiction and change your thoughts and behaviour, one to one or in a group." },
        { id: "substitute", front: "Methadone or buprenorphine", when: "Dependence on heroin or other opioids", back: "A substitute medicine, so you can focus on treatment without worrying about withdrawing or buying street drugs." },
        { id: "detox", front: "Detox", when: "Stopping opioids like heroin completely", back: "Helps you cope with withdrawal symptoms, usually while living at home, sometimes in hospital." },
        { id: "couples", front: "Couples therapy", when: "Cocaine, if your partner does not use", back: "May be offered alongside other treatment for cocaine addiction." },
        { id: "incentives", front: "Incentives", when: "Cocaine and heroin treatment", back: "Rewards such as vouchers for sticking with treatment and staying off the drug." },
        { id: "rehab", front: "Residential rehab", when: "When needs are severe or complicated", back: "Living away from your usual circumstances and influences, to focus on recovery." },
      ],
    },
    sources: [NHS_HELP, F_TREATMENT, NHS_COCAINE, NHS_HEROIN, NHS_TT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Is there a substitute medicine for cocaine?",
      options: [{ text: "No, talking therapies are the main treatment", right: true }, { text: "Yes, methadone" }, { text: "Yes, buprenorphine" }],
      why: "There are no medicines that work as substitutes for cocaine, crack cocaine or other stimulants. Talking therapies are known to work.",
    },
  },
  {
    id: "drug-emergency",
    kicker: "Emergency",
    question: "What should I do if someone has taken too much?",
    hook: "If someone will not wake up or is struggling to breathe, call 999 straight away. Staying with them can save their life.",
    short: "Call 999 now if someone is unconscious or will not wake up, has difficulty breathing or has stopped, has blue lips or fingertips, or is having a seizure. Stay with them, and tell the ambulance crew everything you know about what they have taken. In most circumstances, they will not tell the police.",
    sections: [
      {
        heading: "When to call 999",
        paragraphs: [
          "Call 999 now if someone is unconscious or will not wake up, has difficulty breathing or has stopped breathing, has blue lips or fingertips, or is having a seizure. You can also call 112.",
          "Signs of an opioid overdose include very slow or stopped breathing, blue or grey lips or fingertips, not being able to be woken, and very small pinpoint pupils.",
        ],
      },
      {
        heading: "While you wait",
        paragraphs: [
          "Stay with them, and do not leave them alone, even for a moment. If they are awake, keep them calm and speak softly.",
          "If they are unconscious but breathing, put them in the recovery position, on their side, so they can breathe. If they are not breathing, start CPR, and the 999 operator will talk you through it.",
        ],
      },
      {
        heading: "Naloxone",
        paragraphs: [
          "Naloxone is an emergency antidote that reverses an opioid overdose. If you have it and think it is an opioid overdose, use it, following the instructions on the kit, and tell the crew you have given it.",
          "It only works for a short time, so an ambulance should always be called and someone should stay with the person. If you use opioids or know someone who does, you should be able to get naloxone free from your local drug treatment service, and training can take as little as 10 minutes.",
        ],
      },
      {
        heading: "Tell the crew everything",
        paragraphs: [
          "Tell the ambulance crew all you know about what the person has taken, whether they have been drinking, and any medical conditions. If there are drugs left, hand them over, as it helps treatment.",
          "In most circumstances, the doctors and nurses will not tell the police, the person's family or others not involved in their care.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "It is normal to feel shaky, anxious or drained after helping someone. Talk to someone about what happened, and rest when you can.",
          "If you are still feeling worried, you can talk to FRANK on 0300 123 6600.",
        ],
      },
    ],
    helps: [
      "Call 999 if someone is unconscious, struggling to breathe, has blue lips or is having a seizure.",
      "Stay with them, and put them on their side in the recovery position if they are unconscious but breathing.",
      "If you or someone close uses opioids, get free naloxone from a local drug service, and use it in an opioid overdose.",
      "Tell the crew everything you know about what was taken, and hand over any drugs left.",
      CRISIS,
    ],
    tryThisWeek: [
      "Learn the signs to call 999.",
      "Learn the recovery position.",
      "Ask a drug service about naloxone.",
    ],
    ask: "Can I get naloxone and overdose training for my family?",
    interactive: {
      kind: "scenarios",
      title: "What would you do?",
      scenarios: [
        {
          id: "wont-wake",
          situation: "A friend will not wake up after taking drugs.",
          options: [{ text: "Call 999 straight away", best: true }, { text: "Let them sleep it off" }],
          why: "Call 999 now if someone is unconscious or will not wake up.",
        },
        {
          id: "breathing",
          situation: "They are unconscious but breathing.",
          options: [{ text: "Put them in the recovery position", best: true }, { text: "Leave them on their back" }],
          why: "If they are unconscious but breathing, put them on their side in the recovery position, so they can breathe.",
        },
        {
          id: "police",
          situation: "You worry the police will be called.",
          options: [{ text: "Call 999 anyway", best: true }, { text: "Wait and see" }],
          why: "Safety comes first. In most circumstances, they will not tell the police.",
        },
        {
          id: "crew",
          situation: "The crew asks what was taken.",
          options: [{ text: "Tell them everything you know", best: true }, { text: "Say you do not know" }],
          why: "Tell the crew all you know about what the person has taken. It helps them give the right treatment without delay.",
        },
      ],
    },
    sources: [F_EMERGENCY, F_FRIEND, F_SYNTH, CGL_NALOXONE, F_CONTACT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Someone has blue lips and is barely breathing. What comes first?",
      options: [{ text: "Call 999", right: true }, { text: "Give them coffee" }, { text: "Put them in a cold bath" }],
      why: "Call 999 now if someone is unconscious or will not wake up, has difficulty breathing or has stopped breathing, has blue lips or fingertips, or is having a seizure.",
    },
  },
  {
    id: "drug-relapse",
    kicker: "Staying on track",
    question: "What if I start using again?",
    hook: "A relapse does not have to mean the end of recovery. Lots of people get back on track, and there is help to do it safely.",
    short: "Returning to drug use after a time of recovery is known as a relapse. It is not something to feel ashamed or guilty about, and lots of people who relapse get their journey back on track. Talk to someone you trust, and get help from a professional rather than stopping suddenly on your own.",
    sections: [
      {
        heading: "What a relapse is",
        paragraphs: [
          "Sometimes people who are recovering return to their old habits and begin taking drugs again. This is known as a relapse.",
          "Recovery is a process, and relapsing is sometimes a part of that process. Lots of people in recovery have relapsed, and lots of them have got their journey back on track.",
        ],
      },
      {
        heading: "What can trigger it",
        paragraphs: [
          "The people, places and things around you can trigger a relapse, such as something that reminds you of your old drug use.",
          "Feeling angry, upset or stressed can make a relapse more likely, and so can an emotional time of year, like a birthday or anniversary. Cravings and urges are the most common reasons people lapse or relapse.",
        ],
      },
      {
        heading: "Lowering the risk",
        paragraphs: [
          "Make use of the support available, from one-to-one therapy to groups and activities. Try not to spend emotional times of year on your own, and try to avoid places, people and situations you think might trigger a relapse.",
          "Many people keep busy, with a new hobby or volunteering, and plan their week so there is always something positive to focus on. A list of the good things recovery has brought can help too.",
          "Recovery often involves a long-term lifestyle change. Stable housing, friends who do not use drugs, work or education, and support from others who have had similar problems can all help.",
        ],
      },
      {
        heading: "Early warning signs",
        paragraphs: [
          "Watch for changes in how you are thinking or behaving: fond memories of past use, telling yourself just once will be okay, or hiding how you feel from other people. If you think you might be about to relapse, talk to someone about how you are feeling.",
        ],
      },
      {
        heading: "If it happens",
        paragraphs: [
          "Talk to family, friends and support workers about what has happened. If you have started using again and want to stop, it is best to get help from a medical professional rather than stopping suddenly on your own.",
          "After a break, tolerance drops quickly. This means the risk of overdose is higher if you take the same amount as before.",
          "Once it is behind you, look at what you can learn. You may be able to spot emotions or situations that acted as triggers, and work to avoid them in future.",
        ],
      },
    ],
    helps: [
      "Make use of the support available, such as one-to-one therapy, groups and activities.",
      "Plan to be with supportive people at emotional times of year, like birthdays and anniversaries.",
      "Keep a list of the positive things recovery has brought you.",
      "If you start using again, talk to someone you trust, and get help from a professional rather than stopping suddenly alone.",
      "Remember that after a break your tolerance is lower, so the risk of overdose is higher.",
      CRISIS,
    ],
    tryThisWeek: [
      "Plan company for a hard date.",
      "List what recovery has given you.",
      "Tell someone if you slip.",
    ],
    ask: "If I slip, can I come straight back to my keyworker for help?",
    interactive: {
      kind: "signs",
      title: "Early warning signs",
      intro: "Tick any you notice. They can be a cue to reach out.",
      signs: [
        "Fond memories of past use",
        "Telling myself just once will be okay",
        "Hiding how I feel from others",
        "Strong cravings or urges",
        "Feeling angry, upset or stressed",
        "A hard date coming up",
        "Spending time where I used to use",
      ],
      after: "Talk to someone you trust, your keyworker or a support group about what you have noticed.",
      copyHeading: "Warning signs I have noticed",
    },
    sources: [CGL_RELAPSE, SMART_PROGRAMMES, F_TREATMENT, NHS_HEROIN, F_HEROIN, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Is a relapse the end of recovery?",
      options: [{ text: "No, many people get back on track", right: true }, { text: "Yes, you start again from nothing" }, { text: "Yes, and help is no longer offered" }],
      why: "Recovery is a process, and relapsing is sometimes a part of that process. Lots of people in recovery have relapsed, and lots of them have got their journey back on track.",
    },
  },
  {
    id: "drug-family",
    kicker: "Family and friends",
    question: "How can I help someone I love who uses drugs, and look after myself?",
    hook: "You cannot force someone to change. But how you talk, and getting support for yourself, can make a real difference.",
    short: "If someone close to you uses drugs, you may feel worried, frustrated and alone. Families often play an important role in helping someone come off drugs, and getting help for yourself puts you in a better position to support them. FRANK, Adfam and other organisations offer helplines and local groups.",
    sections: [
      {
        heading: "You are not alone",
        paragraphs: [
          "Lots of families in the UK have a loved one who is using or trying to come off drugs. If you are a parent, partner, child or carer, you may feel worried, frustrated and alone.",
          "Families often play an important role in helping someone come off drugs. Getting help for yourself will put you in a better position to support your loved one.",
        ],
      },
      {
        heading: "Talking about it",
        paragraphs: [
          "Choose a time when you are both sober and not on drugs, somewhere private and familiar, when you have plenty of time. You may need to have several conversations.",
          "Try not to be judgemental or critical, and speak less and listen more. Make sure they know you are there to help, not judge.",
          "People who are dependent often do not think they are, or do not feel they can admit it. If they do not listen at first, give them some space and try again in a little while.",
        ],
      },
      {
        heading: "What you can and cannot do",
        paragraphs: [
          "You cannot force someone to do anything they do not want to do, but you still might be able to help. You could suggest activities away from the places where they would normally use, and tell them where to get accurate information.",
          "How you deal with it is up to you, and it is essential to think of your own wellbeing. You may need support or professional help yourself too.",
        ],
      },
      {
        heading: "Support for you",
        paragraphs: [
          "Your GP can give you details of local support groups for people affected by someone else's drug use. FRANK, on 0300 123 6600, gives advice to people who use drugs and to their parents or carers.",
          "Adfam helps families find support. Addiction Family Support offers phone and email support on 0300 888 3853, Families Anonymous runs support meetings, and SMART Recovery runs a Family and Friends programme.",
          "If you care for someone, you can ask your local council for a free carer's assessment, to see what might make your life easier.",
        ],
      },
      {
        heading: "If you are a child or young person",
        paragraphs: [
          "If a parent's drug use worries you, remember it is not your fault and you are not alone. Talk to someone you trust, or speak confidentially to Childline on 0800 1111.",
        ],
      },
    ],
    helps: [
      "Talk when you are both sober, somewhere private, and listen more than you speak.",
      "Look after your own wellbeing, and get support for yourself too.",
      "Ask your GP about local support groups for families.",
      "Call FRANK on 0300 123 6600, or Addiction Family Support on 0300 888 3853.",
      "If you care for someone, ask your council for a free carer's assessment.",
      CRISIS,
    ],
    tryThisWeek: [
      "Plan a calm, private time to talk.",
      "Ask your GP about family groups.",
      "Call a family helpline for you.",
    ],
    ask: "Is there support for me as someone affected by a family member's drug use?",
    interactive: {
      kind: "scenarios",
      title: "Starting the conversation",
      scenarios: [
        {
          id: "timing",
          situation: "You want to raise it as soon as they come home high.",
          options: [{ text: "Wait until you are both sober", best: true }, { text: "Raise it straight away" }],
          why: "Choose a time when you are both sober and not on drugs, somewhere private and familiar, when you have plenty of time.",
        },
        {
          id: "denial",
          situation: "They say there is no problem.",
          options: [{ text: "Give them space and try again", best: true }, { text: "Give up for good" }],
          why: "People who are dependent often do not think they are. If they do not listen at first, give them some space and try again in a little while.",
        },
        {
          id: "yourself",
          situation: "You feel you have to fix everything.",
          options: [{ text: "Look after yourself too", best: true }, { text: "Put your own needs aside" }],
          why: "It is essential to think of your own wellbeing. You may need support or professional help yourself too.",
        },
        {
          id: "listen",
          situation: "You want to tell them what they should do.",
          options: [{ text: "Speak less and listen more", best: true }, { text: "Tell them you know better" }],
          why: "Try not to be judgemental or critical, and speak less and listen more.",
        },
      ],
    },
    sources: [NHS_FAMILIES, F_FRIEND, F_PARENT, SMART_PROGRAMMES, NHS_CARERS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When is a good time to talk to someone about their drug use?",
      options: [{ text: "When you are both sober, with time to talk", right: true }, { text: "Straight after they have used" }, { text: "In front of their friends" }],
      why: "Choose a time when you are both sober and not on drugs, somewhere private and familiar, when you have plenty of time.",
    },
  },
  {
    id: "drug-harm-reduction",
    kicker: "Staying safer",
    question: "If I am not ready to stop, how can I lower the risks?",
    hook: "Help is not only for people who want to stop. Drug services can help keep you safer and healthier in the meantime.",
    short: "If you are not ready to stop, you can still get help with staying safe and healthy. Local drug services can help reduce the risks, including testing for hepatitis and HIV, and free naloxone. FRANK warns that mixing drugs is always risky, and that you can never really know what is in any street or counterfeit drug.",
    sections: [
      {
        heading: "Help without having to stop",
        paragraphs: [
          "If you are not ready to stop, you can still get help with staying safe and healthy. Staff at your local drug service will help reduce the risks of your drug use.",
          "For example, you may be offered testing and treatment for hepatitis or HIV. You can also get a hepatitis C test from sexual health clinics or drug addiction services.",
        ],
      },
      {
        heading: "Mixing is risky",
        paragraphs: [
          "FRANK says mixing drugs is always risky, but some mixtures are more dangerous than others. Alcohol and some drugs, including benzodiazepines, heroin and other opioids, pregabalin and gabapentin, affect your breathing.",
          "Using any combination of these, with or without alcohol, increases the risk of overdose and death.",
        ],
      },
      {
        heading: "Not knowing what is in it",
        paragraphs: [
          "Some drugs are increasingly cut with dangerous synthetic opioids like nitazenes, which FRANK says have killed hundreds of people in the UK in the past year. You can never really know what is in any street or counterfeit drug.",
          "Fake medicines can be very hard to tell from real ones. You can only be sure an opioid painkiller is real if it comes from a pharmacy registered in the UK.",
        ],
      },
      {
        heading: "Tolerance and being alone",
        paragraphs: [
          "If someone stops taking heroin for just a few days, their tolerance drops quickly, and taking the same amount as before risks an overdose.",
          "FRANK warns that if you overdose alone, nobody can help you.",
        ],
      },
      {
        heading: "Naloxone, infections and driving",
        paragraphs: [
          "Naloxone is an antidote that reverses an opioid overdose. If you use opioids or know someone who does, you should be able to get it free from your local drug treatment service.",
          "Do not share any equipment for injecting or snorting drugs, as hepatitis C can be passed on this way. If you are 18 or over, you can order a free home test, and treatment can cure hepatitis C in most people.",
          "It is illegal to drive if you are unfit to because of legal or illegal drugs, or with certain levels of illegal drugs in your blood.",
        ],
      },
    ],
    helps: [
      "Ask your local drug service about testing for hepatitis and HIV.",
      "Get free naloxone from your local drug treatment service if you or someone close uses opioids.",
      "Remember it is dangerous to take benzodiazepines, opioids, pregabalin or gabapentin with alcohol or with each other.",
      "Never share needles, syringes, spoons, filters, straws or notes.",
      "Do not drive if drugs could affect your driving.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask about a hepatitis C test.",
      "Get a free naloxone kit.",
      "Do not mix drugs with alcohol.",
    ],
    ask: "Can I get tested for hepatitis and HIV, and get naloxone, at my local service?",
    interactive: {
      kind: "risk-check",
      title: "Know the risks",
      intro: "Tick what applies. Each one says what FRANK or the NHS says about it.",
      items: [
        { id: "mixing", label: "Mixing with alcohol or other downers", note: "Benzos, opioids, pregabalin and alcohol together affect breathing and raise the risk of overdose and death.", changeable: true },
        { id: "street", label: "Street or counterfeit pills", note: "They may contain nitazenes. You can never really know what is in any street or counterfeit drug.", changeable: true },
        { id: "break", label: "Using after a break", note: "Tolerance drops quickly after even a few days, so the risk of overdose is higher.", changeable: true },
        { id: "sharing", label: "Sharing equipment", note: "Hepatitis C can be passed on by sharing equipment for injecting or snorting. Testing and treatment are available.", changeable: true },
        { id: "naloxone", label: "No naloxone nearby", note: "Naloxone reverses an opioid overdose. Ask your local drug treatment service for a free kit.", changeable: true },
      ],
    },
    sources: [NHS_HELP, NHS_HEROIN, F_SYNTH, F_BENZOS, F_HEROIN, NHS_HEPC, F_OPIOID_PK, F_PREGABALIN, GOV_DRUG_DRIVING, F_EMERGENCY, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Why is mixing benzodiazepines with alcohol dangerous?",
      options: [{ text: "Both affect breathing, raising the risk of overdose", right: true }, { text: "It is not dangerous" }, { text: "Alcohol cancels benzodiazepines out" }],
      why: "Alcohol and some drugs, including benzodiazepines, affect your breathing. Using any combination of these, with or without alcohol, increases the risk of overdose and death.",
    },
  },
  {
    id: "drug-support",
    kicker: "Support",
    question: "Would a support group help me?",
    hook: "Meeting people who have been where you are can make change feel possible. Groups are free, and you can just listen at first.",
    short: "Some people find support groups like Narcotics Anonymous, Cocaine Anonymous or SMART Recovery helpful. Peer support helps people feel less alone and more confident about change. Your keyworker can tell you where your nearest group is, and many groups also meet online.",
    sections: [
      {
        heading: "Why peer support helps",
        paragraphs: [
          "Peer support is about people with similar experiences coming together to help and inspire each other. It helps people feel more confident and positive about change, and less lonely and isolated.",
          "FRANK says mutual aid groups, like Narcotics Anonymous or Cocaine Anonymous, can play an important role in recovery for many people, as can peer support like SMART Recovery.",
        ],
      },
      {
        heading: "12-step groups",
        paragraphs: [
          "Narcotics Anonymous is made up of people in recovery from drugs who help each other get and stay clean. It has face-to-face and online meetings across the UK, and a helpline on 0300 999 1212.",
          "Cocaine Anonymous is a fellowship for people who want to stop using cocaine and all other mind-altering substances, with no fees for membership. Its helpline is 0800 612 0225.",
          "These groups use the 12-step recovery programme.",
        ],
      },
      {
        heading: "SMART Recovery",
        paragraphs: [
          "SMART Recovery is a science-based alternative. Its free meetings use tools from cognitive behavioural therapy and motivational approaches, and are run by trained facilitators.",
          "Meetings are usually weekly and last 60 or 90 minutes. New people are welcome to just observe, and the focus is on the present and future, not the past. You can also join online.",
          "It avoids labelling people by their behaviours, and there is no one path to recovery: you are free to use other services or groups too.",
        ],
      },
      {
        heading: "Finding a group",
        paragraphs: [
          "Your keyworker can tell you where your nearest group is. Many drug services also run their own groups and offer support from volunteers with lived experience.",
        ],
      },
    ],
    helps: [
      "Ask your keyworker where your nearest group is.",
      "Try a Narcotics Anonymous meeting, face to face or online; the helpline is 0300 999 1212.",
      "If cocaine is the main problem, Cocaine Anonymous can help on 0800 612 0225.",
      "Try a free SMART Recovery meeting; you can just observe at first.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask where your nearest group is.",
      "Try an online meeting.",
      "Go along and just observe at first.",
    ],
    ask: "Which support groups meet near me, and could I try one alongside treatment?",
    interactive: {
      kind: "flip-cards",
      title: "Groups you could try",
      intro: "Tap a card to see what each group offers.",
      cards: [
        { id: "na", front: "Narcotics Anonymous", when: "Any drug problem", back: "People in recovery helping each other get and stay clean. Meetings in person and online. Helpline 0300 999 1212." },
        { id: "ca", front: "Cocaine Anonymous", when: "Cocaine and other substances", back: "A 12-step fellowship with no fees for membership. Helpline 0800 612 0225." },
        { id: "smart", front: "SMART Recovery", when: "Any addictive behaviour", back: "Free meetings using CBT-based tools, run by trained facilitators. You can just observe at first." },
        { id: "service", front: "Your local drug service", when: "While you are in treatment", back: "Many services run their own groups, with volunteers who have lived experience." },
        { id: "family", front: "SMART Family and Friends", when: "For people close to you", back: "Practical tools to cope, set healthy boundaries and look after their own wellbeing." },
      ],
    },
    sources: [NHS_HELP, NHS_COCAINE, CGL_PEER, SMART_MEETINGS, SMART_WHAT, UKNA, CAUK, F_TREATMENT, SMART_PROGRAMMES, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do you have to talk at your first SMART Recovery meeting?",
      options: [{ text: "No, you can just observe", right: true }, { text: "Yes, everyone shares their story" }, { text: "Only after paying a fee" }],
      why: "New people are welcome to just observe, and the focus is on the present and future, not the past.",
    },
  },
];
