import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Carer stress page's pieces (content/library-conditions/mind-extra.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (the social
// care and support guide, Stress, Talking therapies and Every Mind Matters), Carers UK, the government's pages on
// Carer's Allowance, Carer's Credit, carer's leave, time off for dependants and flexible working, and Rethink
// Mental Illness. mind.org.uk was not read (it answers automated reading with a bot check), so no Mind page is
// cited. Money figures are the 2026 to 2027 figures; amounts with pence are left out of the paragraphs. Every
// answer ends its "What helps" list with the crisis routes exactly as the NHS gives them (111 mental health
// option, Samaritans 116 123, Shout 85258, 999 or A&E). General information only; it never replaces advice from
// a person's own GP, council or benefits adviser.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const nhsCarers = (label: string, path: string): LearnSource => nhs(label, `social-care-and-support/support-and-benefits-for-carers/${path}`);
const govuk = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });
const cuk = (label: string, path: string): LearnSource => ({ label: `Carers UK: ${label}`, url: `https://www.carersuk.org/help-and-advice/${path}` });

const NHS_ASSESS = nhsCarers("Carer's assessments", "carer-assessments/");
const NHS_BREAKS = nhsCarers("Carers' breaks and respite care", "carer-breaks-and-respite-care/");
const NHS_BENEFITS = nhsCarers("Benefits for carers", "benefits-for-carers/");
const NHS_STRESS = nhs("Stress", "mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/stress/");
const NHS_TT = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");
const EMM_STRESS: LearnSource = { label: "NHS Every Mind Matters: Dealing with stress", url: "https://www.nhs.uk/every-mind-matters/mental-health-issues/stress/" };

const GOV_CA = govuk("Carer's Allowance", "carers-allowance");
const GOV_CA_ELIGIBILITY = govuk("Carer's Allowance: eligibility", "carers-allowance/eligibility");
const GOV_CA_CLAIM = govuk("Carer's Allowance: make a claim", "carers-allowance/how-to-claim");
const GOV_CA_EFFECT = govuk("Carer's Allowance: effect on other benefits", "carers-allowance/effect-on-other-benefits");
const GOV_CREDIT = govuk("Carer's Credit", "carers-credit");
const GOV_LEAVE = govuk("Unpaid carer's leave", "carers-leave");
const GOV_DEPENDANTS = govuk("Time off for family and dependants", "time-off-for-dependants");
const GOV_FLEX = govuk("Flexible working", "flexible-working");

const CUK_STRESS = cuk("Dealing with depression and stress", "your-health-and-wellbeing/dealing-with-depression-and-stress/");
const CUK_LOOKING = cuk("Looking after yourself", "your-health-and-wellbeing/looking-after-yourself/");
const CUK_SLEEP = cuk("Getting enough sleep", "your-health-and-wellbeing/getting-enough-sleep/");
const CUK_BREAK = cuk("Taking a break", "your-health-and-wellbeing/taking-a-break/");
const CUK_GP = cuk("Talking to your GP", "your-health-and-wellbeing/talking-to-your-gp/");
const CUK_FLU = cuk("Flu jabs", "your-health-and-wellbeing/flu-jabs/");
const CUK_EMOTIONS = cuk("Coping with guilt, resentment and other difficult emotions", "your-health-and-wellbeing/coping-with-guilt-resentment-and-other-difficult-emotions/");
const CUK_RELATIONSHIPS = cuk("Your relationships", "your-health-and-wellbeing/your-relationships/");
const CUK_BODY = cuk("Looking after your body", "your-health-and-wellbeing/looking-after-your-body/");
const CUK_MEETUPS = cuk("Online meetups with carers", "your-health-and-wellbeing/online-meetups/");
const CUK_ASSESS = cuk("Having a carer's assessment", "practical-support/carers-assessment/");
const CUK_RIGHTS = cuk("What are your rights as a carer?", "practical-support/what-are-your-rights-as-a-carer/");
const CUK_DISCRIMINATION = cuk("Protection from discrimination", "practical-support/what-are-your-rights-as-a-carer/protection-from-discrimination/");
const CUK_CARE_ACT = cuk("Your guide to the Care Act (England)", "guides-and-tools/your-guide-to-the-care-act-england/");
const CUK_EMERGENCY = cuk("Getting help in an emergency", "practical-support/getting-help-in-an-emergency/");
const CUK_CONTINGENCY = cuk("Creating a contingency plan", "practical-support/creating-a-contingency-plan/");
const CUK_PREPARED = cuk("Being prepared for the unexpected", "practical-support/being-prepared-for-the-unexpected/");
const CUK_LOCAL = cuk("Support where you live", "support-where-you-live/");
const CUK_CA = cuk("Carer's Allowance", "financial-support/carers-allowance/");
const CUK_HELPLINE = cuk("Helpline and other support", "helpline-and-other-support/");
const CUK_RIGHTS_WORK = cuk("Your rights in work", "work-and-career/your-rights-in-work/");
const CUK_FLEX = cuk("Requesting flexible working", "work-and-career/your-rights-in-work/requesting-flexible-working/");
const CUK_TIME_OFF = cuk("Taking time off when needed", "work-and-career/your-rights-in-work/taking-time-off-when-needed/");
const CUK_SUPPORT_WORK = cuk("Support in work", "work-and-career/support-in-work/");
const CUK_LEAVE_ACT = cuk("The Carer's Leave Act", "work-and-career/the-carers-leave-act-2023/");
const CUK_FACTS: LearnSource = { label: "Carers UK: Key facts and figures about caring", url: "https://www.carersuk.org/policy-and-research/key-facts-and-figures/" };

const RETHINK_SUPPORTING: LearnSource = { label: "Rethink Mental Illness: Supporting someone with a mental illness", url: "https://www.rethink.org/advice-and-information/carers-hub/advice-for-loved-ones-and-carers/supporting-someone-with-a-mental-illness/" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact Samaritans", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you do not feel you can keep yourself safe.";

export const carerStressAnswers: LearnArticle[] = [
  {
    id: "cstress-what-it-is",
    kicker: "Understanding",
    question: "Why does caring wear me down so much?",
    hook: "Caring can be rewarding, but it asks a lot of your body and mind. Stress builds quietly when there is little time left for you.",
    short: "Caring for someone can be rewarding, but it can also be very tiring, putting demands on your physical and emotional energy. Stress builds when the pressure becomes so intense or so persistent that you feel unable to cope. Recognising it is the first step, and support is available.",
    sections: [
      {
        heading: "Who counts as a carer",
        paragraphs: [
          "You are a carer if you look after someone regularly because they are ill, older or disabled, including family members. That can mean help with washing, dressing or medicines, getting to appointments, shopping, or paying bills.",
          "It also counts if you give emotional support, by sitting with someone to keep them company or watching over someone who cannot be left alone.",
        ],
      },
      {
        heading: "Why the pressure builds",
        paragraphs: [
          "Stress is caused by the many demands made on our time and energy, and it can be heightened by the expectations we have of ourselves. Sometimes the balance tips too far, and the pressure becomes so intense or so persistent that you may feel unable to cope.",
          "Caring can bring extra pressures, such as money worries, emotional worry, isolation and having no time to yourself. The needs of the person you care for may also interrupt your night's sleep.",
          "The NHS lists caring for someone among the family pressures that can cause stress. Stressful feelings typically happen when we feel we do not have the resources to manage the challenges we face.",
        ],
      },
      {
        heading: "How it can affect you",
        paragraphs: [
          "Stress can make it hard to cope with the demands of caring. You can become more and more exhausted, and feelings of tension or irritability can put a strain on relationships.",
          "Over the long term, stress can affect your health and put you at risk of high blood pressure. Long-term or severe stress can lead to physical, mental and emotional exhaustion, often called burnout.",
        ],
      },
      {
        heading: "Why your own needs matter",
        paragraphs: [
          "When you are coping day to day and responding to the needs of others, it is easy to forget your own health needs. In a 2025 Carers UK survey, three quarters of carers said they had felt stressed or anxious.",
          "The first step is to recognise that stress is happening, and not to struggle on hoping it will go away. Just talking about how you feel can make a huge difference.",
        ],
      },
    ],
    helps: [
      "Talk about how you feel with family, friends, other carers or a health professional.",
      "Join a local carers' group or an online forum to share your experiences.",
      "Ask your local council for a carer's assessment, to see what might make your life easier.",
      "Take small chunks of time for yourself, even a couple of hours a week doing something you enjoy.",
      "See a GP if you are struggling to cope with stress, or the things you are trying are not helping.",
      CRISIS,
    ],
    tryThisWeek: [
      "Talk to someone about how you feel.",
      "Book a couple of hours for yourself.",
      "Ask for a carer's assessment.",
    ],
    ask: "Could the stress of caring be affecting my health, and what support is there for me?",
    interactive: {
      kind: "risk-check",
      title: "What adds to the pressure?",
      intro: "Tick any that apply to you. Many of them can be eased with the right support.",
      items: [
        { id: "sleep", label: "Broken sleep at night", note: "Caring can interrupt your sleep. Sitting services and respite care may help you get a better night's sleep.", changeable: true },
        { id: "money", label: "Money worries", note: "Caring can bring money worries. A carer's assessment can include advice about benefits for carers.", changeable: true },
        { id: "alone", label: "Feeling cut off from others", note: "Caring can make you more open to stress if you are isolated. A local carers' group or online forum can help.", changeable: true },
        { id: "no-time", label: "No time to yourself", note: "Even a couple of hours each week doing something you enjoy can make a considerable difference.", changeable: true },
        { id: "expectations", label: "Expecting too much of yourself", note: "Our own expectations can heighten stress. Be realistic, and tackle one thing at a time.", changeable: true },
      ],
    },
    sources: [CUK_STRESS, NHS_STRESS, EMM_STRESS, CUK_SLEEP, CUK_LOOKING, NHS_ASSESS, CUK_FACTS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What is the first step to dealing with stress?",
      options: [{ text: "Recognising that it is happening", right: true }, { text: "Struggling on until it goes away" }, { text: "Cutting yourself off from others" }],
      why: "The first step is to recognise that stress is happening, and not to struggle on hoping it will go away.",
    },
  },
  {
    id: "cstress-signs",
    kicker: "Signs",
    question: "How do I know if caring is getting too much?",
    hook: "When you are busy looking after someone else, it is easy to miss the signs in yourself. Stress shows up in your mind, your body and what you do.",
    short: "Stress can cause mental signs such as racing thoughts, anger, tearfulness and difficulty concentrating, and physical ones such as headaches, muscle tension and chest pain. You may have so little time to yourself that you do not notice at first. When the signs appear, it is important not to struggle on.",
    sections: [
      {
        heading: "Easy to miss",
        paragraphs: [
          "You may have so little time to yourself that you do not realise you are struggling at first. It is not always easy to recognise when stress is the reason you are feeling or acting differently.",
          "When you do start noticing the symptoms, it is important not to struggle on, hoping they will go away.",
        ],
      },
      {
        heading: "In your mind",
        paragraphs: [
          "Mental signs can include anxiety, racing thoughts, anger, crying often, tiredness and difficulty concentrating. You may feel overwhelmed, struggle to make decisions, worry constantly or be forgetful.",
          "Stress can also leave you irritable, tearful, hopeless or scared.",
        ],
      },
      {
        heading: "In your body",
        paragraphs: [
          "Physical signs can include headaches or dizziness, muscle tension or pain, stomach problems, chest pain or a faster heartbeat, and breathlessness.",
          "Sometimes stress causes high blood pressure and chest pains, but these symptoms should stop when your stress goes. If you have any symptoms that you are worried about, see a GP.",
        ],
      },
      {
        heading: "In what you do, and how you sleep",
        paragraphs: [
          "Stress can change how you behave: being irritable and snappy, sleeping or eating too much or too little, avoiding certain places or people, or drinking or smoking more.",
          "If you are having trouble sleeping for longer than a night or two, everything will seem harder. You may feel constantly tired, drop off during the day and start feeling depressed.",
        ],
      },
      {
        heading: "When low mood lasts",
        paragraphs: [
          "Depression can build up gradually, so you may not realise how much it is affecting you. You might feel hopeless, unable to cope with everyday things, or unable to sleep or concentrate.",
          "Some people feel so low that they have thoughts of suicide or self-harm. If this happens, tell someone: help is available right now, and you do not have to struggle with difficult feelings alone.",
        ],
      },
    ],
    helps: [
      "Notice the signs early, and do not struggle on hoping they will go away.",
      "Talk about your feelings to a friend, family member or health professional.",
      "See a GP if you are struggling to cope with stress, or the things you are trying are not helping.",
      "Refer yourself to NHS talking therapies if you are 18 or over, or 16 or over in some areas.",
      "See a GP about any symptom you are worried about, such as chest pain.",
      CRISIS,
    ],
    tryThisWeek: [
      "Notice your own signs of stress.",
      "Tell someone how you are feeling.",
      "See a GP if you are struggling.",
    ],
    ask: "Could my tiredness, sleep problems or low mood be caused by the stress of caring?",
    interactive: {
      kind: "signs",
      title: "Signs to notice in yourself",
      intro: "Tick any you have noticed in the past few weeks. They can be a list to take to your GP.",
      signs: ["Racing thoughts or constant worry", "Feeling overwhelmed", "Irritable, angry or tearful", "Hard to concentrate or decide", "Headaches or dizziness", "Muscle tension or pain", "Sleeping too much or too little", "Drinking or smoking more"],
      after: "These can all be signs of stress. See a GP if you are struggling to cope, and call 999 or go to A&E if you do not feel you can keep yourself safe.",
      copyHeading: "Signs of stress I have noticed",
    },
    sources: [CUK_STRESS, NHS_STRESS, EMM_STRESS, CUK_SLEEP, CUK_FACTS, NHS_TT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Why might carers miss the signs of stress in themselves?",
      options: [{ text: "They have so little time to themselves", right: true }, { text: "Stress never shows in the body" }, { text: "Carers do not feel stress" }],
      why: "You may have so little time to yourself that you do not realise you are struggling at first.",
    },
  },
  {
    id: "cstress-rights",
    kicker: "Rights",
    question: "What rights do I have as a carer?",
    hook: "Carers have rights in law: to an assessment of their own needs, to time off work, and to fair treatment. Knowing them can give you confidence.",
    short: "In England, the Care Act gives you the right to a carer's assessment if you appear to need support. If you work, you can take up to a week of unpaid carer's leave a year, take time off in an emergency, and ask for flexible working from your first day. The Equality Act protects you from discrimination because of the person you care for.",
    sections: [
      {
        heading: "A legal basis for support",
        paragraphs: [
          "Carers' rights can differ depending on whether you live in England, Wales, Northern Ireland or Scotland. In England, the Care Act 2014 provides a legal basis for your rights as a carer.",
          "Under the Care Act, you are entitled to a carer's assessment where you appear to have needs for support. You will be entitled to support if you meet the national eligibility criteria.",
          "Local authorities also have a general duty to promote your wellbeing, including your physical and mental health and emotional wellbeing. They have to consider the impact of your caring role on your wellbeing.",
        ],
      },
      {
        heading: "Leave for planned care",
        paragraphs: [
          "Employees can take up to one week of unpaid carer's leave every 12 months, to give or arrange care for a dependant with a long-term care need. It is available from the first day of work, and the person does not have to be a family member.",
          "Your employer cannot refuse carer's leave, but can ask you to take it at a different time if your absence would cause serious disruption. You do not need to give evidence of the care needs, and the right covers employees in England, Wales and Scotland.",
        ],
      },
      {
        heading: "Time off in an emergency",
        paragraphs: [
          "As an employee, you are allowed a reasonable amount of time off to deal with an emergency involving a dependant. Your employer may pay you for this time, but they do not have to.",
        ],
      },
      {
        heading: "Flexible working",
        paragraphs: [
          "All employees have the legal right to request flexible working from their first day in a job. You can ask to change the number of hours you work, when you start or finish, the days you work, or where you work.",
          "Employers must deal with requests in a reasonable manner, and can refuse only if they have a good business reason. The rules are different in Northern Ireland.",
        ],
      },
      {
        heading: "Fair treatment",
        paragraphs: [
          "If you look after someone who is elderly or disabled, the Equality Act 2010 protects you from direct discrimination or harassment because of your caring responsibilities. This is called discrimination by association.",
          "It covers areas such as employment, education, housing, shops and services, and public authorities like the council and the NHS. If you think you have been treated unfairly, get specialist advice, as there may be deadlines for taking action.",
        ],
      },
    ],
    helps: [
      "Ask your local council for a carer's assessment if you need support.",
      "Use your week of unpaid carer's leave for planned caring, such as taking someone to an appointment.",
      "Take a reasonable amount of time off to deal with an emergency involving a dependant.",
      "Ask your employer for flexible working if it would help you combine work and caring.",
      "Get specialist advice, such as from the Equality Advisory and Support Service or Acas, if you are treated unfairly.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask for a carer's assessment.",
      "Use carer's leave for appointments.",
      "Ask about flexible working.",
    ],
    ask: "Can you help me find out what support I am entitled to as a carer?",
    interactive: {
      kind: "flip-cards",
      title: "Your rights, card by card",
      intro: "Turn each card to see when each right applies and what it gives you.",
      cards: [
        { id: "assessment", front: "Carer's assessment", when: "If you appear to need support", back: "The council must assess you if you seem to need support. It is free, and anyone over 18 can ask." },
        { id: "wellbeing", front: "The wellbeing duty", when: "When the council makes decisions", back: "Councils have a duty to promote your wellbeing, including your physical and mental health." },
        { id: "leave", front: "Carer's leave", when: "Planned care, from your first day", back: "Up to one week of unpaid leave every 12 months, as a whole week, days or half days." },
        { id: "dependants", front: "Time off for dependants", when: "An emergency involving a dependant", back: "A reasonable amount of time off. Your employer may pay you, but does not have to." },
        { id: "flexible", front: "Flexible working", when: "From your first day in a job", back: "Ask to change your hours, start and finish times, days or place of work." },
        { id: "equality", front: "Equality Act protection", when: "If you are treated unfairly", back: "Protects you from direct discrimination or harassment because of the person you care for." },
      ],
    },
    sources: [CUK_RIGHTS, CUK_CARE_ACT, NHS_ASSESS, GOV_LEAVE, GOV_DEPENDANTS, GOV_FLEX, CUK_DISCRIMINATION, CUK_LEAVE_ACT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "From when can an employee take unpaid carer's leave?",
      options: [{ text: "From their first day of work", right: true }, { text: "After two years in the job" }, { text: "Only with proof of the care needs" }],
      why: "It is available from the first day of work, and the person does not have to be a family member.",
    },
  },
  {
    id: "cstress-assessment",
    kicker: "Assessment",
    question: "What is a carer's assessment, and how do I get one?",
    hook: "It is not a test of how well you care. It is a chance to say how caring affects you, and to find out what could help.",
    short: "A carer's assessment looks at how caring affects your life and what might make it easier. It is free, and anyone over 18 who cares for someone can ask their local council's adult social services for one. If you qualify, the council will write a support plan with you.",
    sections: [
      {
        heading: "Not a test",
        paragraphs: [
          "A carer's assessment is not a test of your abilities as a carer. It is a chance to let your local council know how caring affects you physically and emotionally, and what support you need.",
          "It is free, and anyone over 18 can ask for one. It is separate from the needs assessment the person you care for might have, but you can ask to have them both done at the same time.",
          "In Scotland it is usually called an adult carer support plan, and in Wales it is often called a carer's needs assessment.",
        ],
      },
      {
        heading: "How to ask",
        paragraphs: [
          "Contact adult social services at your local council and ask for a carer's assessment, by phone or online. If you care for a child, contact the children with disabilities department.",
          "There can sometimes be a waiting list. You are entitled to an assessment whether or not the person you care for has had one.",
        ],
      },
      {
        heading: "Getting ready",
        paragraphs: [
          "Have your NHS number, your GP's details, your email address and the details of the person you care for ready. Make a list of the ways you support them, from emotional support to managing money or helping with personal needs.",
          "Think about how caring affects you. Do you lose sleep, feel drained or lonely, or get backache from lifting? Has it affected your work or social life?",
        ],
      },
      {
        heading: "On the day",
        paragraphs: [
          "Someone from the council, or an organisation it works with, will ask how you are coping, including your physical and mental health, work, free time and relationships. The assessment usually lasts at least an hour.",
          "It can help to have someone with you, such as a friend or relative, or an advocate. Be honest and realistic: if you put on a brave face, you could miss out on help.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "If you qualify for help, the council will write a care and support plan with you. Support might include someone to take over so you can have a break, help with housework, training in lifting safely, or putting you in touch with support groups.",
          "If you are not eligible, the council should still give you free advice about where to get help. If you disagree with the result, you can complain to the council, and then to the ombudsman.",
        ],
      },
    ],
    helps: [
      "Contact adult social services at your local council to ask for a carer's assessment.",
      "Gather your NHS number, GP details and the details of the person you care for beforehand.",
      "Write down how caring affects your sleep, health, work and social life.",
      "Take a friend, relative or advocate with you if it helps.",
      "Be honest about the difficulties, rather than putting on a brave face.",
      CRISIS,
    ],
    tryThisWeek: [
      "Call your council's adult social services.",
      "Note how caring affects you.",
      "Ask someone to come with you.",
    ],
    ask: "Can you tell me how to get a carer's assessment in this area?",
    interactive: {
      kind: "timeline",
      title: "Your carer's assessment, step by step",
      steps: [
        { id: "ask", when: "Step 1", title: "Ask your council", points: ["Contact adult social services, by phone or online.", "It is free, and anyone over 18 can ask."] },
        { id: "prepare", when: "Before", title: "Get ready", points: ["Gather your NHS number and GP's details.", "Note how caring affects your sleep, health and work."] },
        { id: "meet", when: "The assessment", title: "Talk it through", points: ["Usually face to face, and at least an hour.", "Be honest: do not put on a brave face."] },
        { id: "plan", when: "Afterwards", title: "A support plan", points: ["If you qualify, the council writes a plan with you.", "If not, it should still give you free advice."] },
        { id: "challenge", when: "If you disagree", title: "Complain", points: ["Complain to the council first.", "Then to the ombudsman if you are still unhappy."] },
      ],
    },
    sources: [NHS_ASSESS, CUK_ASSESS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Who can ask for a carer's assessment?",
      options: [{ text: "Anyone over 18 who cares for someone", right: true }, { text: "Only people who get Carer's Allowance" }, { text: "Only carers who live with the person" }],
      why: "It is free, and anyone over 18 can ask for one.",
    },
  },
  {
    id: "cstress-breaks",
    kicker: "Breaks",
    question: "How can I get a break from caring?",
    hook: "A break, whether an hour or a holiday, helps stop you becoming exhausted. It can be good for the person you care for too.",
    short: "Respite care means someone else looks after the person you care for while you take a break. Options range from a volunteer sitting with them for a few hours to a short stay in a care home. If you want the council to help pay, you and the person you care for will both need an assessment.",
    sections: [
      {
        heading: "Why breaks matter",
        paragraphs: [
          "Respite care lets you take time out to look after yourself, and helps stop you becoming exhausted and run down.",
          "Time apart can benefit the person you care for too, with new social contact and a change of scenery. It could also improve your relationship by giving you new experiences to talk about.",
          "Do not be afraid to take a break, whether it is short term or longer term.",
        ],
      },
      {
        heading: "The kinds of break",
        paragraphs: [
          "The main types are day care centres, homecare from a paid carer, a short stay in a care home, help from friends and family, respite holidays and sitting services.",
          "With a sitting service, a trained volunteer keeps the person company, usually for a few hours, and it is often free. A night-sitting service lets you have a proper night's sleep.",
        ],
      },
      {
        heading: "Getting assessed first",
        paragraphs: [
          "Councils only fund respite care for people they have assessed as needing it. So it is important that you have a carer's assessment, and the person you look after has a care needs assessment.",
          "Even without council funding, a needs assessment is useful, as it will say which type of respite care is most suitable.",
        ],
      },
      {
        heading: "Paying for it",
        paragraphs: [
          "Some respite services may be free, and costs can vary a lot. If you qualify, the council will do a financial assessment to work out if it will pay towards it.",
          "Carers Trust has information about grants, and the Turn2us website lets you search for them. You can also raise the cost of a break during your carer's assessment, or ask a local carers' centre about local schemes.",
        ],
      },
      {
        heading: "Planning the break",
        paragraphs: [
          "Leave the person covering for you the information they need, from mealtimes to medicines, and a list of contacts including the doctor. Go through your emergency plan with them.",
          "If a care home is providing the short stay, it helps to visit beforehand if you can. Some care homes take advance bookings, which can help you plan a holiday.",
        ],
      },
    ],
    helps: [
      "Ask your local council or local carers' centre about respite support in your area.",
      "Make sure you have a carer's assessment, and the person you care for has a needs assessment.",
      "Ask friends or family to help, even with shopping or chores, to ease the pressure.",
      "Look for a sitting service, which is often free, for a few hours' break.",
      "Leave clear notes on meals, medicines and contacts for whoever steps in.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask about respite support locally.",
      "Ask a friend to help with a chore.",
      "Look up a sitting service.",
    ],
    ask: "What respite or sitting services are there near me, and how do I get them?",
    interactive: {
      kind: "flip-cards",
      title: "Kinds of break, card by card",
      intro: "Turn each card to see when each kind of break might suit you.",
      cards: [
        { id: "day-care", front: "Day care centre", when: "Regular daytime breaks", back: "A chance for the person you care for to socialise and take part in activities. Transport is often provided." },
        { id: "homecare", front: "Homecare from a paid carer", when: "So you can work, study or rest", back: "Regular, or for a short period such as a week. Live-in care is possible if 24-hour supervision is needed." },
        { id: "sitting", front: "Sitting service", when: "A few hours to yourself", back: "A trained volunteer keeps the person company. It is often free, or there may be a small charge." },
        { id: "night", front: "Night-sitting", when: "When you need sleep", back: "Someone comes into your home so you can have a proper night's sleep." },
        { id: "care-home", front: "Short stay in a care home", when: "For a holiday", back: "Some care homes take advance bookings, which can help you plan ahead." },
        { id: "family", front: "Friends and family", when: "If others can step in", back: "They might stay with the person you care for, or invite them to stay for a while." },
      ],
    },
    sources: [NHS_BREAKS, CUK_BREAK, RETHINK_SUPPORTING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What do councils need before they fund respite care?",
      options: [{ text: "An assessment showing it is needed", right: true }, { text: "A letter from a friend" }, { text: "Nothing: it is always free" }],
      why: "Councils only fund respite care for people they have assessed as needing it.",
    },
  },
  {
    id: "cstress-money",
    kicker: "Money",
    question: "What money help is there for carers?",
    hook: "Many carers do not think of themselves as carers, so they miss out. Carer's Allowance is the main benefit, and there is help for your pension record too.",
    short: "Carer's Allowance is the main state benefit for carers, if you care for someone at least 35 hours a week and they get certain disability benefits. If you cannot get it, Carer's Credit can protect your National Insurance record. A benefits check helps, as claiming can affect other benefits.",
    sections: [
      {
        heading: "Carer's Allowance",
        paragraphs: [
          "Carer's Allowance is the main state benefit for carers. You could get it if you care for someone at least 35 hours a week and they get certain benefits, such as the daily living part of Personal Independence Payment, or Attendance Allowance.",
          "You do not have to be related to, or live with, the person you care for. You do not get paid extra if you care for more than one person, and if someone else also cares for the same person, only one of you can claim.",
        ],
      },
      {
        heading: "Who can claim",
        paragraphs: [
          "You need to be 16 or over and not in full-time education. Your earnings need to be £204 or less a week after tax, National Insurance and expenses.",
          "In Scotland, you apply for Carer Support Payment instead. You can backdate a claim by up to 3 months, and you can get independent help from Carers UK, Carers Trust or Citizens Advice.",
        ],
      },
      {
        heading: "Protecting your pension",
        paragraphs: [
          "For each week you get Carer's Allowance, you automatically get National Insurance credits. If you care for someone at least 20 hours a week but do not get Carer's Allowance, Carer's Credit can help with gaps in your National Insurance record.",
          "Your income, savings or investments will not affect whether you can get Carer's Credit.",
        ],
      },
      {
        heading: "Other benefits",
        paragraphs: [
          "Carer's Allowance can affect the other benefits that you and the person you care for get. The person you care for will usually stop getting a severe disability premium paid with their benefits.",
          "Your total benefit payments will usually go up or stay the same. If you get Universal Credit, it will be reduced by the amount of your Carer's Allowance, but you may get an extra amount for caring.",
          "You might also get support from your council, a Council Tax Reduction, or a Carer Premium on top of some other benefits.",
        ],
      },
      {
        heading: "Keep it up to date",
        paragraphs: [
          "Report any change in your circumstances, such as starting work, a change in earnings, or the person going into hospital. Even £1 over the earnings limit means losing all of your Carer's Allowance, and overpayments may have to be paid back.",
          "Money can be a real strain: in a 2025 Carers UK survey, nearly half of carers had cut back on essentials such as food and heating.",
        ],
      },
    ],
    helps: [
      "Check what you can get with a benefits calculator, or arrange a benefit check.",
      "Apply for Carer's Allowance if you care for someone 35 hours a week or more.",
      "Claim Carer's Credit if you care 20 hours a week or more but do not get Carer's Allowance.",
      "Get free benefits advice from the Carers UK helpline on 0808 808 7777, or Citizens Advice.",
      "Report any change in your circumstances straight away, to avoid an overpayment.",
      CRISIS,
    ],
    tryThisWeek: [
      "Try a benefits calculator.",
      "Apply for Carer's Allowance if eligible.",
      "Call the Carers UK helpline.",
    ],
    ask: "Who can help me check which benefits I can claim as a carer?",
    interactive: {
      kind: "flip-cards",
      title: "Money help, card by card",
      intro: "Turn each card to see when each one applies and what it gives you.",
      cards: [
        { id: "allowance", front: "Carer's Allowance", when: "Caring 35 hours a week or more", back: "The main benefit for carers. The person you care for must get certain disability benefits." },
        { id: "credit", front: "Carer's Credit", when: "Caring 20 hours a week or more", back: "A National Insurance credit that helps with gaps in your record, if you do not get Carer's Allowance." },
        { id: "ni", front: "National Insurance credits", when: "Each week you get Carer's Allowance", back: "Given automatically, helping you qualify for some other benefits and State Pension." },
        { id: "premium", front: "Carer Premium", when: "If you already get some benefits", back: "An extra amount on top of benefits such as Income Support or Housing Benefit." },
        { id: "universal-credit", front: "Universal Credit extra amount", when: "If you get Universal Credit", back: "An extra amount for caring for someone who gets a disability-related benefit." },
        { id: "scotland", front: "Carer Support Payment", when: "If you live in Scotland", back: "Apply for this instead of Carer's Allowance." },
      ],
    },
    sources: [NHS_BENEFITS, GOV_CA, GOV_CA_ELIGIBILITY, GOV_CA_CLAIM, GOV_CA_EFFECT, GOV_CREDIT, CUK_CA, CUK_FACTS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How many hours a week of caring does Carer's Allowance need?",
      options: [{ text: "At least 35", right: true }, { text: "At least 5" }, { text: "Exactly 50" }],
      why: "You could get it if you care for someone at least 35 hours a week and they get certain benefits.",
    },
  },
  {
    id: "cstress-gp",
    kicker: "Your GP",
    question: "Why should I tell my GP I am a carer?",
    hook: "Your GP can only help with the pressure of caring if they know about it. Telling them can open doors to support, and to a free flu jab.",
    short: "If your GP knows you are a carer, they can record it, offer more tailored advice and point you to local support. You may also be entitled to a free flu jab. It is a good moment to mention your own health, sleep and mood too.",
    sections: [
      {
        heading: "Let them know",
        paragraphs: [
          "Tell your GP that you have caring responsibilities as soon as possible, so they can record this on your medical records. Carers UK has a letter template to help you register your role.",
          "Caring can take its toll on your health, so it helps your GP to know about the extra pressures you face. In the GP Patient Survey 2025, 72 in every 100 carers said they had a physical or mental health condition lasting, or expected to last, 12 months or more.",
        ],
      },
      {
        heading: "What they can help with",
        paragraphs: [
          "Your GP can refer you to local support networks, or to specialists such as occupational therapists, physiotherapists and continence advisers. If they know you are a carer, they can offer more tailored advice in the future.",
          "You could ask how to balance the needs of the person you look after with your own, and how to arrange home visits if caring makes it hard to get to the surgery.",
        ],
      },
      {
        heading: "A free flu jab",
        paragraphs: [
          "If you are the main carer for an older or disabled person who may be put at risk if you became ill, you should be offered a free flu jab. You should also be offered one if you get Carer's Allowance.",
          "You should be able to ask for one at your GP surgery or from your local pharmacist.",
        ],
      },
      {
        heading: "Your own health",
        paragraphs: [
          "If you have not seen your GP for some time, you could arrange a health check, with a general talk about how you feel emotionally and physically.",
          "Talk to your GP if you are feeling low or stressed, as talking therapies like counselling or CBT might help. Speak to them too if lack of sleep is becoming too much.",
        ],
      },
      {
        heading: "Saving time",
        paragraphs: [
          "You could arrange double appointments for you and the person you care for at the same time, and have repeat prescriptions delivered to your local pharmacy. You could also ask your GP for supporting letters to prove your caring role.",
        ],
      },
    ],
    helps: [
      "Tell your GP you are a carer, so it is recorded on your medical records.",
      "Ask about a free flu jab at your GP surgery or pharmacy.",
      "Arrange a health check if you have not seen your GP for some time.",
      "Talk to your GP if you feel low or stressed, or lack of sleep is too much.",
      "Ask for double appointments, so you and the person you care for go together.",
      CRISIS,
    ],
    tryThisWeek: [
      "Tell your GP you are a carer.",
      "Ask about a free flu jab.",
      "Book a health check.",
    ],
    ask: "Can you register me as a carer, and check how I am coping?",
    interactive: {
      kind: "scenarios",
      title: "At the surgery",
      scenarios: [
        {
          id: "register",
          situation: "You have never mentioned caring to your GP.",
          options: [{ text: "Tell them, so it goes on your records", best: true }, { text: "Keep it to yourself" }],
          why: "Tell your GP as soon as possible. They can record it, and offer more tailored advice and support.",
        },
        {
          id: "flu",
          situation: "Winter is coming, and you worry about falling ill.",
          options: [{ text: "Ask about a free flu jab", best: true }, { text: "Hope for the best" }],
          why: "If the person you care for may be put at risk if you became ill, you should be offered a free flu jab.",
        },
        {
          id: "two-trips",
          situation: "You and your mum both need appointments.",
          options: [{ text: "Ask for double appointments", best: true }, { text: "Make two separate trips" }],
          why: "You could arrange double appointments at the same time, to avoid visiting the surgery twice.",
        },
        {
          id: "low",
          situation: "You have felt low and stressed for weeks.",
          options: [{ text: "Talk to your GP about it", best: true }, { text: "Wait for it to pass" }],
          why: "Talk to your GP if you are feeling low or stressed. Talking therapies like counselling or CBT might help.",
        },
      ],
    },
    sources: [CUK_GP, CUK_FLU, CUK_FACTS, RETHINK_SUPPORTING, CUK_SLEEP, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Who should be offered a free flu jab?",
      options: [{ text: "The main carer of someone at risk if they fell ill", right: true }, { text: "Nobody under 65" }, { text: "Only people who work in care homes" }],
      why: "If you are the main carer for an older or disabled person who may be put at risk if you became ill, you should be offered a free flu jab.",
    },
  },
  {
    id: "cstress-talking",
    kicker: "Support",
    question: "Can talking therapy or a carers' group help me?",
    hook: "Talking to a therapist, or to people who know what caring is like, can ease the load. You can often refer yourself.",
    short: "NHS talking therapies may help with stress, low mood and worry, and if you are 18 or over you can usually refer yourself without seeing a GP. Talking to other carers, in a local group or online, can also be a great help. The Carers UK helpline can point you to support.",
    sections: [
      {
        heading: "Talking therapies on the NHS",
        paragraphs: [
          "Talking therapies involve talking to a trained professional about your thoughts, feelings and behaviours. NHS talking therapies for anxiety and depression may be able to help with stress, and with difficult feelings such as low mood and worry.",
          "You do not need a diagnosed mental health condition. If you are registered with a GP and aged 18 or over, or 16 or over in some areas, you can refer yourself without speaking to a GP.",
        ],
      },
      {
        heading: "What you might be offered",
        paragraphs: [
          "You may be offered guided self-help first, working through a workbook or online course with a therapist's help. Other types include cognitive behavioural therapy, and counselling, where a therapist listens and helps you find your own solutions.",
          "Sessions can be in person, by video or phone call, or as an online course, and may be in a group or one-to-one. Your GP may also be able to refer you to a counselling service.",
        ],
      },
      {
        heading: "Other carers understand",
        paragraphs: [
          "Talking to people in a similar situation can be a great help when you are stressed, and you may be surprised to find that others feel the same way. You could join a local carers' group to share your experiences.",
          "Carers UK runs a weekly online Care for a Cuppa chat, Share and Learn sessions, and a forum where you can meet other carers. Most areas have carers groups or services, and local social services can tell you about them.",
        ],
      },
      {
        heading: "Helplines",
        paragraphs: [
          "The Carers UK helpline on 0808 808 7777 gives information on benefits, rights at work, carer's assessments and services, from Monday to Friday. If you need a listening ear, Samaritans are free to call on 116 123, day or night.",
        ],
      },
    ],
    helps: [
      "Refer yourself to NHS talking therapies if you are 18 or over and registered with a GP.",
      "Speak to a GP if you are not sure about referring yourself.",
      "Join a local carers' group, or an online meetup, to talk to people who understand.",
      "Call the Carers UK helpline on 0808 808 7777 for information and signposting.",
      "If you pay privately, check the therapist is registered with a body accredited by the Professional Standards Authority.",
      CRISIS,
    ],
    tryThisWeek: [
      "Refer yourself to talking therapies.",
      "Try an online carers' meetup.",
      "Call the Carers UK helpline.",
    ],
    ask: "Could I be referred for talking therapy or counselling for the stress of caring?",
    interactive: {
      kind: "flip-cards",
      title: "Where to talk, card by card",
      intro: "Turn each card to see when each kind of support might suit you.",
      cards: [
        { id: "nhs", front: "NHS talking therapies", when: "Stress, low mood or worry", back: "Refer yourself if you are 18 or over and registered with a GP, or 16 or over in some areas." },
        { id: "self-help", front: "Guided self-help", when: "Often offered first", back: "A workbook or online course, with a therapist's help, based on CBT principles." },
        { id: "counselling", front: "Counselling", when: "To talk things through", back: "A therapist listens and helps you find your own solutions to problems." },
        { id: "group", front: "Carers' groups", when: "To meet people who understand", back: "Share your experiences with others in a similar situation. Social services can tell you about local groups." },
        { id: "cuppa", front: "Care for a Cuppa", when: "A weekly online chat", back: "Carers UK's weekly online meetup, to talk with people who understand what you are going through." },
        { id: "helpline", front: "Carers UK helpline", when: "Monday to Friday, 9am to 6pm", back: "Call 0808 808 7777 for information on benefits, rights, assessments and services." },
        { id: "samaritans", front: "Samaritans: 116 123", when: "Any time, day or night", back: "Free to call from any phone, to talk to a volunteer who will listen without judgement." },
      ],
    },
    sources: [NHS_TT, NHS_STRESS, CUK_STRESS, CUK_EMOTIONS, CUK_MEETUPS, CUK_HELPLINE, RETHINK_SUPPORTING, SAMARITANS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do you need a GP referral for NHS talking therapies for stress?",
      options: [{ text: "No, you can usually refer yourself", right: true }, { text: "Yes, always" }, { text: "Only after trying medicine" }],
      why: "If you are registered with a GP and aged 18 or over, or 16 or over in some areas, you can refer yourself without speaking to a GP.",
    },
  },
  {
    id: "cstress-health",
    kicker: "Your health",
    question: "How can I look after my own health while caring?",
    hook: "Looking after yourself is part of being able to keep caring. Sleep, movement, food and your back all need attention.",
    short: "When you are coping day to day, it is easy to forget your own health. A regular sleep routine, small amounts of activity, regular meals and safer ways of lifting can all help. Ask about training in moving someone safely if you need to lift.",
    sections: [
      {
        heading: "Your health matters too",
        paragraphs: [
          "Caring can be rewarding, but it can also be very tiring and put a lot of demands on your physical and emotional energy. When you are just coping day to day, it is easy to forget your own health needs.",
          "In a 2025 Carers UK survey, 42 in every 100 carers said their physical health had suffered as a result of caring.",
        ],
      },
      {
        heading: "Sleep",
        paragraphs: [
          "Problems sleeping are common when you care for someone. Long-term lack of sleep may increase your risk of high blood pressure, diabetes and obesity.",
          "Keep a regular bedtime and wake-up time, keep devices away from the bed, and cut down on tea and coffee in the evening. A notepad by the bed lets you write down worries to deal with the next day.",
        ],
      },
      {
        heading: "Moving more",
        paragraphs: [
          "Physical exercise is a simple way to relieve tension. Even a walk to the shops can help, or if you are tied to the home, try a 10 minute yoga session.",
          "If it has been a long time since you exercised, or you have any health conditions, discuss it with your GP first.",
        ],
      },
      {
        heading: "Food and drink",
        paragraphs: [
          "Eating regular meals with a good variety from the main food groups can make a real difference to how you feel. It is easy to slip into habits like comfort eating, which can make you feel worse.",
          "Too much caffeine or alcohol can cause your mood to plummet, so cutting down could help.",
        ],
      },
      {
        heading: "Protecting your back",
        paragraphs: [
          "Lifting someone regularly without support can do long-term damage to your own health. Your council or local carers' organisation should be able to tell you about training in lifting and moving more safely.",
          "An occupational therapist can advise on equipment such as a hoist, or changes to the home. If you are worried because you need to lift someone regularly, speak to your doctor.",
        ],
      },
    ],
    helps: [
      "Keep a regular bedtime and wake-up time, even if you are not tired.",
      "Try to be active, even with a walk to the shops or 10 minutes of yoga.",
      "Eat regular meals, and watch how much caffeine and alcohol you have.",
      "Ask your council or carers' organisation about training in lifting safely.",
      "Talk to your GP if lack of sleep is becoming too much, or you are worried about lifting.",
      CRISIS,
    ],
    tryThisWeek: [
      "Keep the same bedtime.",
      "Take a short walk or try yoga.",
      "Ask about safe lifting training.",
    ],
    ask: "Could you check my health, and tell me where to get advice on lifting safely?",
    interactive: {
      kind: "risk-check",
      title: "What is wearing you down?",
      intro: "Tick any that apply. Each one is something you can work on, a little at a time.",
      items: [
        { id: "sleep", label: "Broken or short sleep", note: "Keep a regular bedtime and wake-up time, and see your GP if lack of sleep becomes too much.", changeable: true },
        { id: "caffeine", label: "Tea or coffee late in the day", note: "Cut down on tea and coffee in the evening. Too much caffeine can make your mood plummet.", changeable: true },
        { id: "inactive", label: "Little time to move", note: "Even a walk to the shops or a 10 minute yoga session can help relieve tension.", changeable: true },
        { id: "meals", label: "Skipping meals or comfort eating", note: "Regular meals with a good variety from the main food groups can help how you feel.", changeable: true },
        { id: "lifting", label: "Lifting someone regularly", note: "Ask about training in safer lifting, and an occupational therapist's advice on equipment.", changeable: true },
      ],
    },
    sources: [CUK_LOOKING, CUK_SLEEP, CUK_BODY, CUK_STRESS, CUK_FACTS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What can long-term lack of sleep increase the risk of?",
      options: [{ text: "High blood pressure, diabetes and obesity", right: true }, { text: "Nothing at all" }, { text: "Only feeling a little tired" }],
      why: "Long-term lack of sleep may increase your risk of high blood pressure, diabetes and obesity.",
    },
  },
  {
    id: "cstress-work",
    kicker: "Work",
    question: "How can I keep working while I care?",
    hook: "Juggling a job and caring is hard, but the law gives you some room. Leave, time off and flexible working can all help.",
    short: "If you are an employee, you can take up to a week of unpaid carer's leave a year, take reasonable time off in an emergency, and ask for flexible working from your first day. Your contract may give you more. It is your choice whether to tell your employer you are a carer.",
    sections: [
      {
        heading: "You are not alone",
        paragraphs: [
          "Census data shows nearly 3 million people in the UK balance unpaid care with paid work. Carers in work are more likely than others to work part time.",
          "Your rights come from the law and from your contract, which can be more generous. It is worth checking your contract, staff handbook or HR policies for anything extra.",
        ],
      },
      {
        heading: "Carer's leave",
        paragraphs: [
          "Employees can take up to one week of unpaid carer's leave every 12 months, from their first day of work. You can take a whole week, or individual days or half days, for planned care such as taking someone to a medical appointment.",
          "For a half day or a day, give at least 3 days' notice. For longer, the notice needs to be at least twice as long as the leave you are asking for. The right covers employees in England, Wales and Scotland.",
        ],
      },
      {
        heading: "When something goes wrong",
        paragraphs: [
          "You are allowed a reasonable amount of time off to deal with an emergency involving a dependant, such as when your usual care arrangements break down. There is no set amount of time, as it depends on the situation.",
          "Tell your employer as soon as possible how much time you will need. Whether it is paid is up to your employer.",
        ],
      },
      {
        heading: "Flexible working",
        paragraphs: [
          "All employees can ask for flexible working from their first day in a job, such as different hours, start and finish times, days or place of work. Options include flexi-time, working from home, part-time working and compressed hours.",
          "It is a good idea to discuss your ideas with your manager first. Your employer must deal with your request in a reasonable manner, and can refuse only for a good business reason. The rules are different in Northern Ireland.",
        ],
      },
      {
        heading: "Telling your employer",
        paragraphs: [
          "It is your choice whether to tell your employer about your caring role. Your workplace may have a carer's policy, with carer's leave, time off for appointments or a carer support group.",
          "Colleagues can be very supportive, and some may have caring responsibilities too. Extra support for the person you look after, such as a care worker, could also put your mind at ease while you are at work.",
        ],
      },
    ],
    helps: [
      "Check your contract and HR policies for carer's leave or other support.",
      "Use your week of unpaid carer's leave for planned caring, giving enough notice.",
      "Take reasonable time off if there is an emergency involving someone who depends on you.",
      "Discuss flexible working with your manager, then make your request in writing.",
      "Get advice from Acas or Citizens Advice if you feel you are being treated unfairly.",
      CRISIS,
    ],
    tryThisWeek: [
      "Check your workplace carer's policy.",
      "Plan carer's leave for appointments.",
      "Talk to your manager about flexibility.",
    ],
    ask: "Is juggling work and caring affecting my health, and what support could help?",
    interactive: {
      kind: "scenarios",
      title: "Work and caring moments",
      scenarios: [
        {
          id: "appointment",
          situation: "Your dad has a hospital appointment next week.",
          options: [{ text: "Book carer's leave, giving notice", best: true }, { text: "Call in sick on the day" }],
          why: "Carer's leave is for planned care. For a half day or a day, give at least 3 days' notice.",
        },
        {
          id: "breakdown",
          situation: "Your dad's usual care falls through this morning.",
          options: [{ text: "Take time off for dependants", best: true }, { text: "Leave him without help all day" }],
          why: "You are allowed a reasonable amount of time off to deal with an emergency, such as when care arrangements break down.",
        },
        {
          id: "hours",
          situation: "You need to finish earlier each day.",
          options: [{ text: "Make a flexible working request", best: true }, { text: "Quietly slip out early" }],
          why: "All employees can ask for flexible working from their first day, including a change to when they start or finish.",
        },
        {
          id: "refused",
          situation: "Your request is turned down without a reason.",
          options: [{ text: "Ask for the business reason, and get advice", best: true }, { text: "Give up on it" }],
          why: "Your employer can only refuse for good business reasons, and these should be explained in writing.",
        },
      ],
    },
    sources: [CUK_RIGHTS_WORK, GOV_LEAVE, GOV_DEPENDANTS, GOV_FLEX, CUK_FLEX, CUK_SUPPORT_WORK, CUK_FACTS, CUK_TIME_OFF, CUK_LEAVE_ACT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How much notice is needed for a single day of carer's leave?",
      options: [{ text: "At least 3 days", right: true }, { text: "At least a month" }, { text: "None at all" }],
      why: "For a half day or a day, give at least 3 days' notice.",
    },
  },
  {
    id: "cstress-emergency",
    kicker: "Planning",
    question: "What happens to the person I care for if I am suddenly ill?",
    hook: "It is a common worry. A simple written plan, shared with the right people, can bring real peace of mind.",
    short: "Carers UK advises all carers to make an emergency plan, with the details someone would need to step in. Think about who could take over at short notice, and make sure they know the care needed. Some areas run carers' emergency card schemes.",
    sections: [
      {
        heading: "Why plan ahead",
        paragraphs: [
          "Think about who you could contact if you could not reach the person you care for, because of an accident or sudden illness. This might be a relative, friend or neighbour who could step in for a few hours while proper arrangements are made.",
          "Having a plan can ease your worries about being unable to care at some point, and offers peace of mind. Putting one together might not take as long as you think.",
        ],
      },
      {
        heading: "What to put in it",
        paragraphs: [
          "Include the name, address and contact details of the person you look after, and who you would both like to be contacted in an emergency. Add their medicines and where they are stored, any allergies, and their GP and pharmacy.",
          "Note any ongoing treatment, care services, continence products, mobility aids such as a hoist, and anything about their behaviour that others need to know.",
          "Leave notes about the care needed somewhere easy to see, with any dos and don'ts for whoever steps in. Make sure they have door keys or know the code to a key safe.",
        ],
      },
      {
        heading: "Share it and keep it current",
        paragraphs: [
          "Talk about the plan with the person you care for, if possible, and with your emergency contacts. Give copies to trusted family, friends and health professionals, or tell them where to find it.",
          "Make a note in your diary to review it now and then, so the information stays up to date.",
        ],
      },
      {
        heading: "Extra help",
        paragraphs: [
          "Every carer who has a carer's assessment should be asked about emergencies and offered help to plan for them. In some areas, carers' emergency card schemes hold your plan and provide a 24-hour response service.",
          "Your local carers' organisation can tell you if a scheme runs near you. You could also prepare a hospital bag for the person you care for, with their emergency contact and a list of their medicines.",
        ],
      },
      {
        heading: "In a crisis",
        paragraphs: [
          "If anyone is at immediate risk of harm, call 999. NHS 111 can help if you are unwell or need to call on behalf of the person you look after, and if social services are closed, there is an emergency duty team.",
        ],
      },
    ],
    helps: [
      "Write an emergency plan with the details someone would need to take over.",
      "Ask a relative, friend or neighbour if they could step in at short notice.",
      "Make sure they have door keys, or know the code to a key safe.",
      "Share the plan with your emergency contacts, and review it regularly.",
      "Ask your local carers' organisation about an emergency card scheme.",
      CRISIS,
    ],
    tryThisWeek: [
      "Start your emergency plan.",
      "Ask someone to be your back-up.",
      "Check for a carers' card scheme.",
    ],
    ask: "Can you help me plan what would happen if I could not care for a while?",
    interactive: {
      kind: "signs",
      title: "Your emergency plan checklist",
      intro: "Tick each detail once it is in your plan. Then copy the list to keep with it.",
      signs: ["Their name, address and contacts", "Who to call in an emergency", "Their medicines and where they are kept", "Any allergies", "Their GP and pharmacy", "Care services they receive", "Mobility aids, such as a hoist", "Where the door keys are"],
      after: "Share the plan with your emergency contacts and health professionals, and review it regularly to keep it up to date.",
      copyHeading: "My emergency plan includes",
    },
    sources: [NHS_BREAKS, CUK_CONTINGENCY, CUK_EMERGENCY, CUK_PREPARED, CUK_LOCAL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Who does Carers UK advise to make an emergency plan?",
      options: [{ text: "All carers", right: true }, { text: "Only carers over 65" }, { text: "Only people who care full time" }],
      why: "Carers UK advises all carers to make an emergency plan, with the details someone would need to step in.",
    },
  },
  {
    id: "cstress-feelings",
    kicker: "Feelings",
    question: "Is it normal to feel guilty, angry or resentful as a carer?",
    hook: "Caring can bring love and frustration in the same day. These feelings are common, and they do not make you a bad carer.",
    short: "Caring can bring complex feelings that change over time, and some people feel resentful about how life has changed, then guilty for feeling that way. These feelings are natural and common among carers. Acknowledge them, try not to bottle them up, and talk to someone who understands.",
    sections: [
      {
        heading: "Mixed feelings are common",
        paragraphs: [
          "Caring can involve a whole range of complex emotions, which can change over time. Some people feel resentful about how their life has changed, and then guilty for feeling that way.",
          "Some describe caring as an emotional rollercoaster, because each day can be so unpredictable. In a 2025 Carers UK survey, 40 in every 100 carers said they felt depressed.",
        ],
      },
      {
        heading: "Guilt",
        paragraphs: [
          "You may feel you should be doing more, or doing something better. Remind yourself that you are only human, nobody is perfect, and you are probably underestimating your good qualities.",
          "Try not to feel guilty about needing time out for your own needs. If you struggle to see your qualities, ask a good friend or relative what they value in you.",
        ],
      },
      {
        heading: "Resentment and anger",
        paragraphs: [
          "Feelings of resentment do not define you or make you a bad person or carer. They are natural and common: you may miss your independence, or feel the person you care for does not always appreciate what you do.",
          "Do not beat yourself up if you lose patience now and again; it is natural to feel frustrated. If you notice negative feelings building up, talk them through with someone you know or a counsellor.",
        ],
      },
      {
        heading: "Grief before a loss",
        paragraphs: [
          "Some carers feel a deep sense of loss for the person someone used to be, while they are still here. This is called anticipatory grief, and it can be hard to recognise and deal with.",
        ],
      },
      {
        heading: "Finding an outlet",
        paragraphs: [
          "Acknowledge your feelings and try not to bottle them up. If you can, talk with the person you care for, or with other carers who may know what you are going through.",
          "Your GP may be able to refer you to counselling or tell you about local support groups. If low mood carries on, make an appointment with your doctor, and Samaritans are there on 116 123 at any time.",
        ],
      },
    ],
    helps: [
      "Acknowledge your feelings, and try not to bottle them up.",
      "Remind yourself that you are only human, and nobody is perfect.",
      "Talk to other carers, at a local group or on the Carers UK forum.",
      "Find an outlet for building frustration, with someone you trust or a counsellor.",
      "Make an appointment with your doctor if low mood carries on.",
      CRISIS,
    ],
    tryThisWeek: [
      "Say how you feel; do not bottle it up.",
      "Remind yourself nobody is perfect.",
      "Talk to another carer.",
    ],
    ask: "I feel guilty and resentful about caring: could counselling help me?",
    interactive: {
      kind: "scenarios",
      title: "Hard feelings, real moments",
      scenarios: [
        {
          id: "break-guilt",
          situation: "You feel guilty for wanting an afternoon off.",
          options: [{ text: "Remind yourself your needs matter too", best: true }, { text: "Push on without a break" }],
          why: "Try not to feel guilty about needing time out for your own needs.",
        },
        {
          id: "snapped",
          situation: "You snapped at your mum and feel awful.",
          options: [{ text: "Accept you are human, and talk it out", best: true }, { text: "Decide you are a bad carer" }],
          why: "Do not beat yourself up if you lose patience now and again. Find an outlet for your feelings.",
        },
        {
          id: "unnoticed",
          situation: "Your efforts seem to go unnoticed.",
          options: [{ text: "Acknowledge your own efforts", best: true }, { text: "Keep it all inside" }],
          why: "Try to acknowledge your own efforts consciously, and reward yourself when you have gone above and beyond.",
        },
        {
          id: "low",
          situation: "Low mood has lasted for weeks.",
          options: [{ text: "Make an appointment with your doctor", best: true }, { text: "Wait and say nothing" }],
          why: "If low mood carries on, make an appointment with your doctor.",
        },
      ],
    },
    sources: [CUK_EMOTIONS, CUK_RELATIONSHIPS, CUK_STRESS, CUK_FACTS, SAMARITANS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do feelings of resentment make you a bad carer?",
      options: [{ text: "No, they are natural and common", right: true }, { text: "Yes, always" }, { text: "Only if you feel them often" }],
      why: "Feelings of resentment do not define you or make you a bad person or carer.",
    },
  },
];
