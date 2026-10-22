import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Stress and burnout page's pieces (content/library-conditions/mind-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (including Every Mind
// Matters), the Mental Health Foundation, Rethink Mental Illness, the Health and Safety Executive, Carers UK,
// Samaritans and the World Health Organization. mind.org.uk could not be read today (it answers 403 with a bot
// check), so no Mind page is cited. Safe messaging: no method details, hopeful and practical. Every answer ends
// its "What helps" list with the crisis routes exactly as the NHS gives them (999, 111, Samaritans 116 123,
// Shout 85258). General information only; it never replaces what a person's own GP or therapist tells them, and
// no medicine should be stopped or changed without the doctor.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const emm = (label: string, path: string): LearnSource => ({ label: `NHS Every Mind Matters: ${label}`, url: `https://www.nhs.uk/every-mind-matters/${path}` });
const mhf = (label: string, path: string): LearnSource => ({ label: `Mental Health Foundation: ${label}`, url: `https://www.mentalhealth.org.uk/explore-mental-health/${path}` });
const hse = (label: string, path: string): LearnSource => ({ label: `Health and Safety Executive: ${label}`, url: `https://www.hse.gov.uk/${path}` });
const carersUk = (label: string, path: string): LearnSource => ({ label: `Carers UK: ${label}`, url: `https://www.carersuk.org/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_STRESS = nhs("Stress", "mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/stress/");
const NHS_BUSTERS = nhs("10 stress busters", "mental-health/self-help/guides-tools-and-activities/tips-to-reduce-stress/");
const NHS_BREATHING = nhs("Breathing exercises for stress", "mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/");
const NHS_MINDFULNESS = nhs("Mindfulness", "mental-health/self-help/tips-and-support/mindfulness/");
const NHS_TT = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_COUNSELLING = nhs("Counselling", "tests-and-treatments/counselling/");
const NHS_INSOMNIA = nhs("Insomnia", "conditions/insomnia/");
const NHS_EXERCISE_BENEFITS = nhs("Benefits of exercise", "live-well/exercise/exercise-health-benefits/");
const NHS_ACTIVITY_GUIDELINES = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");
const NHS_ALCOHOL_SUPPORT = nhs("Alcohol support", "live-well/alcohol-advice/alcohol-support/");
const NHS_ALCOHOL_TIPS = nhs("Tips on cutting down on alcohol", "live-well/alcohol-advice/tips-on-cutting-down-alcohol/");
const NHS_CARER_ASSESSMENT = nhs("Carer's assessments", "social-care-and-support/support-and-benefits-for-carers/carer-assessments/");
const NHS_CARER_BREAKS = nhs("Carers' breaks and respite care", "social-care-and-support/support-and-benefits-for-carers/carer-breaks-and-respite-care/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const EMM_STRESS = emm("Stress", "mental-health-issues/stress/");
const EMM_WORK = emm("Work-related stress", "lifes-challenges/work-related-stress/");
const EMM_MONEY = emm("Money worries and mental health", "lifes-challenges/money-worries-mental-health/");
const EMM_PROBLEM = emm("Problem solving", "mental-wellbeing-tips/self-help-cbt-techniques/problem-solving/");
const EMM_SLEEP = emm("Sleep problems", "mental-health-issues/sleep/");
const EMM_URGENT = emm("Urgent support", "urgent-support/");

const MHF_STRESS = mhf("Stress", "a-z-topics/stress");
const MHF_STATS = mhf("Stress: statistics", "statistics/stress-statistics");
const MHF_BURNOUT = mhf("Burnout", "articles/burnout-signs-causes-and-ways-recover");
const MHF_WORK_LIFE = mhf("Work-life balance", "a-z-topics/work-life-balance");

const RETHINK_STRESS: LearnSource = { label: "Rethink Mental Illness: Stress – how to manage it", url: "https://www.rethink.org/advice-and-information/about-mental-illness/mental-health-symptoms/stress-how-to-manage-it-causes-symptoms-and-support-options/" };

const HSE_OVERVIEW = hse("Work-related stress and how to manage it", "stress/overview.htm");
const HSE_CAUSES = hse("Causes of stress at work", "stress/causes.htm");
const HSE_EMPLOYEE = hse("Help for employees on stress at work", "stress/help-employee.htm");
const HSE_FIGURES = hse("Key figures for Great Britain 2024 to 2025", "statistics/overview.htm");

const WHO_BURNOUT: LearnSource = { label: "World Health Organization: Burn-out an \"occupational phenomenon\"", url: "https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases" };

const SAMARITANS_CONTACT: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };
const SAMARITANS_STRUGGLING: LearnSource = { label: "Samaritans: Signs you may be struggling to cope", url: "https://www.samaritans.org/how-we-can-help/if-youre-having-difficult-time/signs-you-may-be-struggling-cope/" };
const SHOUT: LearnSource = { label: "Shout 85258: free, confidential, 24/7 mental health text service", url: "https://giveusashout.org/" };

const CUK_STRESS = carersUk("Dealing with depression and stress", "help-and-advice/your-health-and-wellbeing/dealing-with-depression-and-stress/");
const CUK_FACTS = carersUk("Key facts and figures", "policy-and-research/key-facts-and-figures/");

const GOV_FLEXIBLE = gov("Flexible working", "flexible-working");
const GOV_SICK_LEAVE = gov("Taking sick leave", "taking-sick-leave");
const GOV_ACCESS_TO_WORK = gov("Access to Work", "access-to-work");

const DRINKAWARE_MH: LearnSource = { label: "Drinkaware: Alcohol and mental health", url: "https://www.drinkaware.co.uk/facts/health-effects-of-alcohol/mental-health" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you cannot keep yourself safe.";

export const stressAnswers: LearnArticle[] = [
  {
    id: "str-what-it-is",
    kicker: "Understanding",
    question: "What is stress, and when does it become a problem?",
    hook: "Stress is the body's response to pressure. In short bursts it can help, but when it does not switch off it starts to wear you down.",
    short: "Stress is the body's reaction to feeling threatened or under pressure. It releases hormones such as adrenaline and cortisol, which can give you a boost to act quickly. A little stress can help, but if you are stressed all the time it can become a problem, affecting your mood, your body and your relationships.",
    sections: [
      {
        heading: "The body's response to pressure",
        paragraphs: [
          "Stress is the body's reaction to feeling threatened or under pressure. It is usually a reaction to mental or emotional pressure, and it is often related to feeling like you are losing control over something. Sometimes there is no obvious cause.",
          "Stress is something everyone feels at times, especially when dealing with change or life challenges. We all deal with stress differently, and the level of stress you are comfortable with may be higher or lower than that of the people around you.",
        ],
      },
      {
        heading: "Fight or flight",
        paragraphs: [
          "When you are stressed, your body releases stress hormones such as adrenaline and cortisol. This is the body's way of helping you deal with pressure or threats, and it is sometimes called a fight or flight response.",
          "Adrenaline usually gives us a boost or motivates us to act quickly. Stress hormone levels usually return to normal once the pressure or threat has passed, and there are no lasting effects.",
        ],
      },
      {
        heading: "When a little stress helps",
        paragraphs: [
          "A little stress can be a good thing, as it helps us get things done or focus on something that needs our attention. Some people find stress helpful or even motivating.",
          "The Mental Health Foundation says the stress response can help us push through fear or pain, so we can run a marathon or deliver a speech.",
        ],
      },
      {
        heading: "When it does not switch off",
        paragraphs: [
          "If you are stressed all the time, it can become a problem. Too much stress can leave us in a permanent state of fight or flight, feeling overwhelmed or unable to cope, and over the long term this can affect our physical and mental health.",
          "Stress is not an illness itself, but it can make you unwell if it is very bad or lasts for a long time. Stress that lasts a long time can lead to anxiety and depression, and long-term or severe stress can lead to physical, mental and emotional exhaustion, often called burnout.",
          "It is common. In a 2018 poll for the Mental Health Foundation, 74% of people said that in the past year they had felt so stressed they were overwhelmed or unable to cope.",
        ],
      },
      {
        heading: "You are not alone",
        paragraphs: [
          "Most people feel stressed at some point in their life, and support is available. If stress is affecting your life, there are things you can try that may help, and you can talk to a GP or refer yourself for free NHS talking therapies.",
        ],
      },
    ],
    helps: [
      "Try to work out what is causing your stress: if you know the cause, it might be easier to find ways to manage it.",
      "Talk about your feelings to a friend, family member or health professional, or call Samaritans on 116 123 if you need someone to talk to.",
      "Do not try to do everything at once: set small targets you can easily achieve.",
      "Try not to use alcohol, cigarettes, gambling or drugs to relieve stress, as these can all contribute to poor mental health.",
      "If you are 18 or over (or 16 or over in some areas), refer yourself to NHS talking therapies, or see a GP if you are struggling to cope.",
      CRISIS,
    ],
    tryThisWeek: [
      "Note what is causing your stress.",
      "Talk to someone you trust.",
      "Set one small, easy target.",
    ],
    ask: "Could stress be behind how I am feeling, and what support is there near me?",
    interactive: {
      kind: "timeline",
      title: "The stress response, step by step",
      steps: [
        { id: "pressure", when: "It starts", title: "You feel under pressure", points: ["Often when you feel you are losing control over something.", "Sometimes there is no obvious cause."] },
        { id: "hormones", when: "Inside the body", title: "Stress hormones are released", points: ["Adrenaline and cortisol.", "This is the fight or flight response."] },
        { id: "boost", when: "In short bursts", title: "A boost to act", points: ["It can help you get things done or focus.", "Some people find it motivating."] },
        { id: "settle", when: "Once it passes", title: "Levels return to normal", points: ["Stress hormones usually settle once the pressure has passed.", "There are no lasting effects."] },
        { id: "stuck", when: "If it goes on", title: "It can become a problem", points: ["Stress all the time can affect mood, body and relationships.", "Long-term stress can lead to burnout, anxiety or depression."] },
      ],
    },
    sources: [EMM_STRESS, NHS_STRESS, MHF_STRESS, RETHINK_STRESS, HSE_OVERVIEW, NHS_URGENT, NHS_SUICIDAL, MHF_STATS],
    quiz: {
      question: "Which hormones does the body release when you are stressed?",
      options: [{ text: "Stress hormones such as adrenaline and cortisol", right: true }, { text: "Insulin, to lower blood sugar" }, { text: "None: stress is only in the mind" }],
      why: "When you are stressed, your body releases stress hormones such as adrenaline and cortisol.",
    },
  },
  {
    id: "str-signs",
    kicker: "Signs",
    question: "How do I know if stress is affecting me?",
    hook: "Stress shows up in the body, in your thoughts and in what you do. It is not always easy to spot that stress is the reason.",
    short: "Stress can cause physical symptoms such as headaches, muscle tension and stomach problems, mental symptoms such as constant worrying and struggling to concentrate, and changes in behaviour such as sleeping or eating too much or too little. It is not always easy to recognise when stress is the reason you are feeling or acting differently. If you have symptoms you are worried about, see a GP.",
    sections: [
      {
        heading: "In your body",
        paragraphs: [
          "Stress can cause headaches or dizziness, muscle tension or pain, stomach problems, chest pain or a faster heartbeat, and sexual problems.",
          "Some people get skin reactions, like stress rashes and hives, or feel dizzy, sick or faint. Others notice nausea, indigestion, sweating, shallow breathing or heart palpitations.",
        ],
      },
      {
        heading: "In your mind and mood",
        paragraphs: [
          "Stress can make it hard to concentrate or make decisions, and you may feel overwhelmed, worry constantly or be forgetful.",
          "It can make you irritable, angry or tearful, and leave you feeling worried, anxious, hopeless or scared. Some people have racing thoughts, imagine the worst or feel low.",
        ],
      },
      {
        heading: "In what you do",
        paragraphs: [
          "You may be irritable and snappy, sleep or eat too much or too little, avoid certain places or people, or drink or smoke more.",
          "Stress can also change how much you exercise, and how much you see people or do the things you used to enjoy. In a 2018 poll for the Mental Health Foundation, 46% said they ate too much or ate unhealthily because of stress, and 29% said they started drinking or drank more.",
        ],
      },
      {
        heading: "Not always easy to spot",
        paragraphs: [
          "It is not always easy to recognise when stress is the reason you are feeling or acting differently. Stress affects different people in different ways, and you may have signs that are not on any list.",
          "If the stress is long-lasting, you may notice your sleep and memory are affected, your eating habits change, or you feel less inclined to exercise. Many employees are unwilling to talk about stress at work because of the stigma it has, but stress is not a weakness, and it can happen to anyone.",
        ],
      },
      {
        heading: "When to get checked",
        paragraphs: [
          "Sometimes stress causes high blood pressure and chest pains, but these symptoms should stop when your stress goes. If you have any symptoms you are worried about, or feel your stress is more severe, see a GP.",
          "Call 999 or go to A&E now if you or someone you know needs immediate help. A mental health emergency should be taken as seriously as a physical emergency.",
        ],
      },
    ],
    helps: [
      "Connect the physical and emotional signs you notice to the pressures you face.",
      "Do not ignore physical warning signs such as tense muscles, tiredness, headaches or migraines.",
      "Keep a stress diary for a few weeks, noting when you feel stressed and what happens just before or after.",
      "See a GP if you have symptoms you are worried about, or feel your stress is more severe.",
      CRISIS,
    ],
    tryThisWeek: [
      "Notice your body's warning signs.",
      "Start a short stress diary.",
      "See a GP about worrying symptoms.",
    ],
    ask: "Could my headaches, stomach problems or poor sleep be caused by stress, or should anything else be checked?",
    interactive: {
      kind: "signs",
      title: "Signs you may notice",
      intro: "Tick any you have noticed lately. Stress can show up in the body, the mind and in what you do.",
      signs: ["Headaches or dizziness", "Muscle tension or pain", "Stomach problems", "A faster heartbeat", "Struggling to concentrate or decide", "Constant worrying", "Feeling irritable or snappy", "Sleeping too much or too little", "Eating too much or too little", "Drinking or smoking more"],
      after: "Stress can cause all of these, but it is not always easy to tell. If you have symptoms you are worried about, see a GP.",
      copyHeading: "Signs of stress I have noticed",
    },
    sources: [NHS_STRESS, EMM_STRESS, MHF_STRESS, RETHINK_STRESS, HSE_EMPLOYEE, NHS_URGENT, NHS_SUICIDAL, MHF_STATS],
    quiz: {
      question: "Is it always easy to tell that stress is behind how you feel?",
      options: [{ text: "No, it is not always easy to recognise", right: true }, { text: "Yes, stress always feels the same" }, { text: "Only if you have a headache" }],
      why: "It is not always easy to recognise when stress is the reason you are feeling or acting differently.",
    },
  },
  {
    id: "str-causes",
    kicker: "Causes",
    question: "What causes stress?",
    hook: "Work, money, family, health, or a big change, even a happy one: the causes vary from person to person, and often it comes down to feeling out of control.",
    short: "Stress is usually a reaction to mental or emotional pressure, and it is often related to feeling like you are losing control over something. Common causes include work, family, money and health, and even happy life events can bring stress. Knowing what is causing your stress can make it easier to manage.",
    sections: [
      {
        heading: "Different for everyone",
        paragraphs: [
          "The things that cause stress vary from person to person. Stressful feelings typically happen when we feel we do not have the resources to manage the challenges we face.",
          "Almost anything that affects your daily life, work or relationships can cause stress. Even seemingly small issues can cause stress if they go on for a long time.",
        ],
      },
      {
        heading: "Common causes",
        paragraphs: [
          "Work can cause stress, through pressure at work, unemployment or retirement. So can family, through relationship difficulties, divorce or caring for someone.",
          "Money problems, such as unexpected bills or borrowing money, are another cause. So is health: illness, injury, or losing someone close to you.",
          "Other causes include housing issues, pregnancy and parenting, and loneliness or feeling unsupported. Our genes, upbringing and experiences as children or adults also play a part.",
        ],
      },
      {
        heading: "Even good changes",
        paragraphs: [
          "Even significant life events such as buying a house, having a baby or planning a wedding could lead to feelings of stress. If you feel stressed in these situations, you may struggle to understand why, but feeling stressed in these situations is very common.",
        ],
      },
      {
        heading: "Feeling out of control",
        paragraphs: [
          "A feeling of loss of control is one of the main causes of stress and lack of wellbeing. If you think you cannot do anything about your problem, your stress can get worse.",
          "Some people are more likely to face stressful situations. People with a lot of debt or financial insecurity are more likely to be stressed about money, and people with disabilities or long-term health conditions are more likely to be stressed about their health.",
          "In a 2018 poll for the Mental Health Foundation, 36% of adults who reported stress named their own or a friend or relative's long-term health condition as a factor, and 22% named debt.",
        ],
      },
      {
        heading: "Finding your cause",
        paragraphs: [
          "If you know what is causing your stress, it might be easier to find ways to manage it. You might find it hard to explain to people why you feel this way, but talking to someone could help you find a solution.",
          "If money is a worry, Every Mind Matters suggests a budget, which can help you feel more in control, and talking about your money worries with someone you trust.",
        ],
      },
    ],
    helps: [
      "If you do not know what is causing your stress, keep a stress diary for a few weeks to spot areas you may be able to change.",
      "Sort your worries into issues with a practical solution, things that will get better with time, and things you cannot do anything about.",
      "Take control by taking small steps towards the things you can improve.",
      "Get practical advice on housing, benefits, money or employment from an advice service.",
      "Talk to someone: it could help you find a solution.",
      CRISIS,
    ],
    tryThisWeek: [
      "Keep a stress diary.",
      "Sort what you can and cannot change.",
      "Take one small step you can control.",
    ],
    ask: "Some of my stress comes from my health: can you help me with the parts I can change?",
    interactive: {
      kind: "risk-check",
      title: "What is adding to the pressure?",
      intro: "Tick any that apply. Some you can change, and some you can only learn to manage.",
      items: [
        { id: "work", label: "Pressure at work", note: "Work pressure, unemployment or retirement can all cause stress. Talking to someone could help you find a solution.", changeable: true },
        { id: "money", label: "Money worries", note: "A budget can help you feel more in control, and an advice service can help with money and debt.", changeable: true },
        { id: "caring", label: "Caring for someone", note: "Caring for someone is a common cause of stress. Take small steps towards the things you can improve.", changeable: true },
        { id: "health", label: "Your health, or a loved one's", note: "Illness, injury or losing someone can cause stress. Focus on the small steps you can take.", changeable: false },
        { id: "change", label: "A big life change", note: "Even happy events like a new baby or a wedding can be stressful, and that is very common.", changeable: false },
        { id: "lonely", label: "Feeling lonely or unsupported", note: "Loneliness can cause stress. Close friends or family can offer help and practical advice.", changeable: true },
      ],
    },
    sources: [NHS_STRESS, EMM_STRESS, NHS_BUSTERS, MHF_STRESS, RETHINK_STRESS, MHF_STATS, EMM_MONEY, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does the NHS call one of the main causes of stress?",
      options: [{ text: "A feeling of loss of control", right: true }, { text: "Being too relaxed" }, { text: "Only bad news" }],
      why: "A feeling of loss of control is one of the main causes of stress and lack of wellbeing.",
    },
  },
  {
    id: "str-burnout",
    kicker: "Burnout",
    question: "What is burnout, and how is it different from stress?",
    hook: "Stress feels like too much. Burnout can feel like there is nothing left to give.",
    short: "Burnout is physical and emotional exhaustion, usually after long-term stress. Stress often feels like too much, but burnout can feel like you have nothing left to give, with little motivation or hope that things will change. It does not tend to get better on its own, but recovery is possible with the right support.",
    sections: [
      {
        heading: "Running on empty",
        paragraphs: [
          "Burnout is physical and emotional exhaustion. It can drain your energy and motivation, affecting your work, wellbeing and relationships, and it may increase your risk of anxiety and depression.",
          "Long-term or severe stress can lead to physical, mental and emotional exhaustion, often called burnout. It can develop gradually, so you may not notice it straight away.",
          "The Mental Health Foundation says recent reports estimate that 65% of UK workers feel burnt out.",
        ],
      },
      {
        heading: "Stress or burnout?",
        paragraphs: [
          "Burnout can be caused by long-term stress, but they are not the same. Stress often feels like too much: you may feel overwhelmed but still believe things will improve once you get them under control.",
          "Burnout can feel like you have nothing left to give. You may feel empty, exhausted and detached, with little motivation or hope that things will change.",
        ],
      },
      {
        heading: "What the World Health Organization says",
        paragraphs: [
          "The World Health Organization includes burnout in its International Classification of Diseases as an occupational phenomenon. It is not classified as a medical condition.",
          "It describes burnout as coming from chronic workplace stress that has not been successfully managed. It has three parts: feeling drained of energy or exhausted, feeling mentally distant from your job or negative about it, and reduced performance at work.",
        ],
      },
      {
        heading: "The signs",
        paragraphs: [
          "Signs of burnout include feeling tired and drained, losing motivation, feeling helpless or detached, becoming more negative, withdrawing from others, struggling to get things done, and changes to your sleep or appetite.",
          "The Mental Health Foundation says personal factors can raise the risk too, such as being a carer or a parent, or living with a long-term health condition. You do not need to have every symptom to be experiencing burnout.",
        ],
      },
      {
        heading: "Recovering",
        paragraphs: [
          "Burnout does not tend to get better on its own, but recovery is possible. It can take time, and it is important to deal with what is causing it, not just the symptoms.",
          "If burnout is affecting your daily life or mental health, talk to a GP or contact NHS talking therapies. Be compassionate to yourself, and remember that this is not your fault.",
        ],
      },
    ],
    helps: [
      "Identify what is contributing to the burnout, and deal with the cause, not just the symptoms.",
      "Recognise what is within your control: you may be able to raise work issues with HR or Occupational Health.",
      "Prioritise sleep, keep to a routine, and stay physically active.",
      "Be compassionate to yourself, and remember that this is not your fault.",
      "If burnout is affecting your daily life or mental health, talk to a GP or contact NHS talking therapies.",
      CRISIS,
    ],
    tryThisWeek: [
      "Name one cause you can tackle.",
      "Protect your sleep and routine.",
      "Be kind to yourself.",
    ],
    ask: "I think I may be burnt out: could talking therapy help, and should I take time off?",
    interactive: {
      kind: "flip-cards",
      title: "Stress or burnout?",
      intro: "Turn each card to see how stress and burnout differ, and the three parts of burnout the World Health Organization describes.",
      cards: [
        { id: "stress", front: "Stress", when: "Feels like too much", back: "Overwhelmed by pressure, but you still believe things will improve once you get them under control." },
        { id: "burnout", front: "Burnout", when: "Nothing left to give", back: "Feeling empty, exhausted and detached, with little motivation or hope that things will change." },
        { id: "exhaustion", front: "Exhaustion", when: "Part one", back: "Feelings of energy depletion or exhaustion." },
        { id: "distance", front: "Mental distance", when: "Part two", back: "Feeling mentally distant from your job, or negative or cynical about it." },
        { id: "performance", front: "Doing less well at work", when: "Part three", back: "Reduced professional efficacy, or performance, at work." },
      ],
    },
    sources: [EMM_WORK, WHO_BURNOUT, MHF_BURNOUT, EMM_STRESS, NHS_TT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How can burnout feel different from stress?",
      options: [{ text: "Like you have nothing left to give", right: true }, { text: "Like a busy but exciting week" }, { text: "Exactly the same as stress" }],
      why: "Stress often feels like too much. Burnout can feel like you have nothing left to give.",
    },
  },
  {
    id: "str-small-changes",
    kicker: "Self-help",
    question: "What small changes can help with stress?",
    hook: "Small steps, taken one at a time, can take the edge off stress and help you feel back in control.",
    short: "The first step is to identify what is causing your stress. Then take control of what you can: split big tasks into smaller ones, plan ahead, make time for yourself, stay connected and be active. Try not to do everything at once, and do not rely on alcohol, smoking and caffeine to cope.",
    sections: [
      {
        heading: "Start with the cause",
        paragraphs: [
          "If you are stressed, whether by your job or something more personal, the first step to feeling better is to identify the cause. Feeling like you have no control, and that there is nothing you can do, can make you feel worse.",
          "The act of taking control can be empowering. Sort your worries into issues with a practical solution, things that will get better with time, and things you cannot do anything about, then make a plan for the things you can.",
        ],
      },
      {
        heading: "One thing at a time",
        paragraphs: [
          "Do not try to do everything at once: set small targets you can easily achieve. Breaking a task down into easier, more manageable chunks can help, and give yourself credit when you finish a task.",
          "Working smarter means prioritising your work and concentrating on the tasks that will make a real difference. Leave the least important tasks to last, and accept that you will not have time for everything.",
          "Write lists of what you need to do, share tasks with others if you can, and set steps and goals for complicated tasks. Planning ahead for stressful days, such as planning a journey or listing things to take, can really help.",
        ],
      },
      {
        heading: "Time for yourself, and for others",
        paragraphs: [
          "Many of us do not spend enough time doing things we really enjoy. Try setting aside a couple of nights a week for some quality me time, for socialising, relaxation or exercise.",
          "A good support network of colleagues, friends and family can help you see things in a different way. Helping others, even with a small favour each day, may help you become more resilient.",
        ],
      },
      {
        heading: "Kinder thoughts",
        paragraphs: [
          "Look for the positives in life. Try writing down 3 things that went well, or that you are grateful for, at the end of every day.",
          "Do not focus on the things you cannot change. Changing a difficult situation is not always possible, so concentrate on the things you do have control over, keep things in perspective, and do not be too hard on yourself.",
        ],
      },
      {
        heading: "Solve what you can, and avoid quick fixes",
        paragraphs: [
          "Ask whether a problem can be dealt with by doing something practical. If it can, set aside 5 or 10 minutes to think about possible solutions, then choose one and make a specific plan. If it cannot, it may be a worry that is out of your control.",
          "Do not rely on alcohol, smoking and caffeine as ways of coping. They might provide temporary relief, but in the long term they will not solve your problems, and they will just create new ones.",
        ],
      },
    ],
    helps: [
      "Identify the cause of your stress, then take control of the things you are able to.",
      "Break big tasks into smaller chunks, and give yourself credit when you finish one.",
      "Set aside a couple of nights a week for some me time.",
      "Write down 3 things that went well, or that you are grateful for, at the end of every day.",
      "Do not rely on alcohol, smoking and caffeine to cope.",
      CRISIS,
    ],
    tryThisWeek: [
      "Break one big task into chunks.",
      "Book a night of me time.",
      "Write down 3 good things each day.",
    ],
    ask: "I have tried some changes and still feel stressed: what else could help?",
    interactive: {
      kind: "scenarios",
      title: "Stressful moments",
      scenarios: [
        {
          id: "long-list",
          situation: "Your to do list feels impossible today.",
          options: [{ text: "Pick the tasks that make a real difference", best: true }, { text: "Try to do everything at once" }],
          why: "Do not try to do everything at once. Prioritise, leave the least important tasks to last, and accept you will not have time for everything.",
        },
        {
          id: "big-job",
          situation: "A big job feels overwhelming.",
          options: [{ text: "Break it into smaller chunks", best: true }, { text: "Put it off until later" }],
          why: "Breaking a task down into easier, more manageable chunks can help. Rethink Mental Illness also suggests not putting things off.",
        },
        {
          id: "drink",
          situation: "After a hard week, you reach for a drink to unwind.",
          options: [{ text: "Try a walk, or time with a friend", best: true }, { text: "Rely on a drink to cope" }],
          why: "Alcohol might give temporary relief, but in the long term it will not solve your problems. Being active and connecting with people can help.",
        },
        {
          id: "redundancies",
          situation: "Your company is making redundancies.",
          options: [{ text: "Focus on what you can control", best: true }, { text: "Dwell on what you cannot change" }],
          why: "If your company is making redundancies, you could focus on the things you can control, such as looking for a new job.",
        },
      ],
    },
    sources: [NHS_BUSTERS, NHS_STRESS, EMM_STRESS, MHF_STRESS, RETHINK_STRESS, EMM_PROBLEM, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does the NHS say is the first step to feeling better when you are stressed?",
      options: [{ text: "Identify the cause", right: true }, { text: "Work longer hours" }, { text: "Ignore it until it goes" }],
      why: "If you are stressed, the first step to feeling better is to identify the cause.",
    },
  },
  {
    id: "str-breathing",
    kicker: "Self-help",
    question: "Can breathing and relaxation really ease stress?",
    hook: "A few slow breaths can help slow your heart and relax your body. Practised every day, they become a tool you can use anywhere.",
    short: "Slow, deep breathing can help slow your heart rate and relax your body. The NHS calming breathing exercise takes just a few minutes and can be done anywhere, and you get the most benefit if you do it regularly. Mindfulness and relaxation techniques, such as yoga or tai chi, can help too.",
    sections: [
      {
        heading: "Why it helps",
        paragraphs: [
          "Taking a few slow, deep breaths can help you feel calmer. Slow deep breathing can help slow your heart rate and relax your body.",
          "The NHS calming breathing technique for stress, anxiety and panic takes just a few minutes and can be done anywhere. You will get the most benefit if you do it regularly, as part of your daily routine.",
        ],
      },
      {
        heading: "The calming breath",
        paragraphs: [
          "Get comfortable, standing, sitting in a chair that supports your back, or lying down, and loosen any clothes that restrict your breathing. Let your breath flow as deep down into your belly as is comfortable, without forcing it.",
          "Breathe in through your nose and out through your mouth. Breathe in gently and regularly, counting from 1 to 5 if it helps, then let it flow out gently, counting from 1 to 5 again. Repeat for at least 5 minutes.",
        ],
      },
      {
        heading: "Belly breathing before a big moment",
        paragraphs: [
          "Every Mind Matters suggests belly breathing. Sit or lie down if you can, with one hand on your tummy and one on your chest. Breathe in slowly through your nose and notice your tummy rise, then breathe out slowly through your mouth, and repeat this 3 times.",
          "You can also use slow breathing before situations that might make you feel anxious or nervous, like a meeting or an interview.",
        ],
      },
      {
        heading: "Mindfulness",
        paragraphs: [
          "Mindfulness means paying attention to what is going on inside and outside ourselves, moment by moment. It may help us notice signs of stress or anxiety earlier and deal with them better.",
          "You can practise it in everyday moments, such as noticing the warmth of the water while washing up. If you find your mind wanders, gently bring it back to now.",
          "Mindfulness and meditation may be difficult if you are having very distressing thoughts. If they are causing you difficulty, speak to your doctor about other options.",
        ],
      },
      {
        heading: "Other ways to relax",
        paragraphs: [
          "Relaxation can help you deal with stress. Rethink Mental Illness suggests gentle movement such as yoga or tai chi, a calming treatment such as a massage, or mindfulness and meditation, and trying another technique if one does not work for you.",
          "The more you practise relaxation, the more you will notice when your body is showing signs of tension or stress. Pausing for a few minutes to breathe can help you feel calmer.",
        ],
      },
    ],
    helps: [
      "Practise the calming breath for at least 5 minutes, as part of your daily routine.",
      "Breathe in through your nose and out through your mouth, counting from 1 to 5 if it helps.",
      "Try a few slow belly breaths before a meeting or an interview.",
      "Bring your attention back to the present moment, noticing what you see, hear and sense around you.",
      "Try a relaxation technique such as yoga or tai chi, and if one does not work, try another.",
      CRISIS,
    ],
    tryThisWeek: [
      "Breathe calmly for 5 minutes a day.",
      "Belly-breathe before a big moment.",
      "Try one relaxation technique.",
    ],
    ask: "Are there relaxation or mindfulness courses I could join near me?",
    interactive: {
      kind: "timeline",
      title: "Belly breathing, step by step",
      steps: [
        { id: "sit", when: "Step 1", title: "Get comfortable", points: ["Sit in a comfortable chair or lie down, if you can."] },
        { id: "hands", when: "Step 2", title: "Hands in place", points: ["One hand on your tummy.", "One hand on your chest."] },
        { id: "in", when: "Step 3", title: "Breathe in slowly", points: ["Close your mouth and breathe in through your nose.", "Notice your tummy gently rise."] },
        { id: "out", when: "Step 4", title: "Breathe out gently", points: ["Breathe out slowly and gently through your mouth."] },
        { id: "repeat", when: "Step 5", title: "Repeat", points: ["Repeat this 3 times.", "Try it before a meeting or an interview too."] },
      ],
    },
    sources: [NHS_BREATHING, EMM_WORK, NHS_MINDFULNESS, RETHINK_STRESS, EMM_STRESS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When do you get the most benefit from the NHS calming breathing exercise?",
      options: [{ text: "When you do it regularly, as part of your daily routine", right: true }, { text: "Only once a month" }, { text: "Only in an emergency" }],
      why: "You will get the most benefit if you do it regularly, as part of your daily routine.",
    },
  },
  {
    id: "str-talking",
    kicker: "Support",
    question: "Would talking to someone, or therapy, help my stress?",
    hook: "Telling someone how you feel can help you offload your worries. If stress keeps building, free NHS talking therapies can help, and you can usually refer yourself.",
    short: "Talking about your feelings to a friend, family member or health professional can help with stress. NHS talking therapies may be able to help with stress too, and if you are 18 or over (or 16 or over in some areas) you can refer yourself without seeing a GP. Therapies include guided self-help, cognitive behavioural therapy (CBT) and counselling.",
    sections: [
      {
        heading: "Start by talking",
        paragraphs: [
          "Telling someone how you are feeling may help with stress, as it can help to offload your worries. You may feel comfortable talking to someone you know, or you might prefer someone who does not know you.",
          "You can contact Samaritans by phone on 116 123 if you need someone to talk to. Calls are free, at any time, and people contact them about all sorts of things, including job-related stress, money worries and loneliness.",
        ],
      },
      {
        heading: "Free NHS talking therapies",
        paragraphs: [
          "NHS talking therapies for anxiety and depression may be able to help with stress. If you are 18 or over (or 16 or over in some areas) and registered with a GP, you can refer yourself directly without talking to a GP.",
          "You do not need to have a diagnosed mental health condition. Talking therapies are sometimes also available free through your employer, university or local charities.",
          "If you choose a private therapist, make sure they are registered with a professional organisation accredited by the Professional Standards Authority.",
        ],
      },
      {
        heading: "Types of therapy",
        paragraphs: [
          "You may be offered guided self-help first, going through a workbook or online course with a therapist's help. If your symptoms do not improve, you may be offered another type of therapy.",
          "Cognitive behavioural therapy, or CBT, can help reduce stress by changing the ways you think about stressful situations. You will usually have between 5 and 15 sessions, depending on what you are having it for, and practise what you learn between them.",
          "In counselling, a counsellor listens to you without judgement and helps you find your own solutions. It can help with difficult emotions such as stress, and sessions usually last 50 to 60 minutes.",
        ],
      },
      {
        heading: "It is not a failure",
        paragraphs: [
          "If you continue to feel overwhelmed by stress, do not be afraid to seek professional help. It does not mean you are a failure, and getting help as soon as possible is important so you can start feeling better.",
          "Your doctor may suggest talking therapies such as CBT, brief interpersonal counselling, which gives you the chance to talk about what causes your stress and develop coping strategies, or mindfulness-based approaches.",
        ],
      },
    ],
    helps: [
      "Talk about how you feel to someone you trust, or to someone who does not know you.",
      "Call Samaritans free on 116 123 if you need someone to talk to.",
      "If you are 18 or over, refer yourself to NHS talking therapies without seeing a GP.",
      "Ask your employer, university or a local charity whether they offer free talking therapy.",
      "Practise what you learn between CBT sessions: it is important for CBT to work.",
      CRISIS,
    ],
    tryThisWeek: [
      "Tell one person how you feel.",
      "Look up your local talking therapies.",
      "Ask about free therapy through work.",
    ],
    ask: "Could I be referred for talking therapy for stress, and which kind would suit me?",
    interactive: {
      kind: "flip-cards",
      title: "Talking therapies, card by card",
      intro: "Turn each card to see what each kind of talking therapy involves.",
      cards: [
        { id: "guided", front: "Guided self-help", when: "Often offered first", back: "A workbook or online course, with the help of a therapist, based on CBT principles." },
        { id: "cbt", front: "CBT", when: "Usually 5 to 15 sessions", back: "A therapist helps you change how you think and act. You practise what you learn between sessions." },
        { id: "counselling", front: "Counselling", when: "Sessions of 50 to 60 minutes", back: "A counsellor listens without judgement and helps you find your own solutions." },
        { id: "ipt", front: "Interpersonal therapy", when: "Problems in relationships", back: "You talk to a therapist about problems in your relationships and learn ways to deal with them." },
        { id: "mbct", front: "Mindfulness-based cognitive therapy", when: "Noticing thoughts as they happen", back: "You learn to notice thoughts and feelings in the moment, using meditation and breathing exercises." },
      ],
    },
    sources: [NHS_TT, NHS_CBT, NHS_COUNSELLING, MHF_STRESS, RETHINK_STRESS, NHS_STRESS, EMM_URGENT, SAMARITANS_CONTACT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do you need a GP referral for NHS talking therapies?",
      options: [{ text: "No, if you are 18 or over you can usually refer yourself", right: true }, { text: "Yes, always" }, { text: "Only after trying medicine" }],
      why: "If you are 18 or over (or 16 or over in some areas), you can refer yourself directly without talking to a GP.",
    },
  },
  {
    id: "str-gp",
    kicker: "Getting help",
    question: "When should I see a GP about stress?",
    hook: "If stress is wearing you down and the things you try are not helping, a GP is a good place to start.",
    short: "See a GP if you are struggling to cope with stress, the things you are trying are not helping, or you would prefer a referral from a GP. A GP could offer self-help advice, talking therapy, exercise on prescription, support groups or medicine. If you need help urgently but it is not an emergency, call NHS 111 or ask for an urgent GP appointment.",
    sections: [
      {
        heading: "When to go",
        paragraphs: [
          "See a GP if you are struggling to cope with stress, the things you are trying yourself are not helping, or you would prefer to get a referral from a GP.",
          "Rethink Mental Illness lists signs you may be struggling. They include finding it difficult to do everyday things, no longer looking after yourself, taking more time off work, using drugs or alcohol to cope, and having panic attacks.",
          "They also include feeling very low or hopeless for 2 weeks or more, no longer enjoying anything, and having thought that life is not worth living. If you are having thoughts like this, it is important to tell someone, and help is available right now.",
        ],
      },
      {
        heading: "Physical symptoms",
        paragraphs: [
          "Sometimes stress causes high blood pressure and chest pains, but these symptoms should stop when your stress goes. If you have any symptoms you are worried about, or feel your stress is more severe, see a GP.",
          "Carers UK says that over the long term, stress can affect your health, putting you at risk of high blood pressure, and that it is important to seek support straight away.",
        ],
      },
      {
        heading: "Getting ready",
        paragraphs: [
          "It may help to write down a list of the main points and questions you want to discuss with your GP, especially if you feel anxious about the appointment. If you have kept a stress diary, you could take it with you.",
        ],
      },
      {
        heading: "What a GP might offer",
        paragraphs: [
          "A GP could offer self-help advice, support through an NHS recovery college, talking therapy, exercise on prescription, medication, support groups in your area, or an appointment with a social prescriber.",
          "Your GP will have seen a lot of patients with stress-related problems. If stress is making you feel depressed, your GP may prescribe antidepressants. Ask about side effects, and let them know if you would prefer to try other treatments first.",
        ],
      },
      {
        heading: "If it is urgent",
        paragraphs: [
          "Call NHS 111 or ask for an urgent GP appointment if you need help urgently, but it is not an emergency. You can call 111 or get help from 111 online.",
          "Call 999 or go to A&E now if you or someone you know needs immediate help. Do not drive to A&E: ask someone to drive you, or call 999 and ask for an ambulance.",
        ],
      },
    ],
    helps: [
      "See a GP if you are struggling to cope, or the things you are trying are not helping.",
      "Write down the main points and questions you want to discuss before your appointment.",
      "Take your stress diary with you, if you have kept one.",
      "Tell your GP about any physical symptoms you are worried about.",
      "Ask about the side effects of any medicine, and say if you would prefer to try other treatments first.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book a GP appointment if struggling.",
      "List what you want to say.",
      "Bring your stress diary.",
    ],
    ask: "What support for stress is there here, and could I see a social prescriber?",
    interactive: {
      kind: "signs",
      title: "Before your GP appointment",
      intro: "Tick any that are true for you. Taking the list with you can make it easier to explain how you feel.",
      signs: ["Struggling to cope with stress", "Self-help is not helping", "Finding everyday things difficult", "Not looking after myself", "Taking more time off work", "Using alcohol or drugs to cope", "Feeling very low or hopeless for 2 weeks or more", "No longer enjoying anything", "Having panic attacks"],
      after: "These are signs you may be struggling. A GP can talk through options such as self-help, talking therapy, exercise on prescription or medicine.",
      copyHeading: "What I want to tell my GP",
    },
    sources: [NHS_STRESS, RETHINK_STRESS, CUK_STRESS, EMM_STRESS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What could a GP offer for stress?",
      options: [{ text: "Talking therapy, exercise on prescription or support groups", right: true }, { text: "Nothing: stress is not a GP's concern" }, { text: "Only a sick note" }],
      why: "A GP could offer self-help advice, talking therapy, exercise on prescription, medication, support groups or an appointment with a social prescriber.",
    },
  },
  {
    id: "str-work",
    kicker: "Work",
    question: "What can I do about stress at work?",
    hook: "Too much to do, too little say, a difficult colleague: work stress is common, and your employer has a legal duty to help tackle it.",
    short: "Many people experience work-related stress at some point. Working out what you find stressful, setting boundaries and talking to your manager can help. Employers have a legal duty to protect workers from stress at work, and support such as flexible working and Access to Work may help you stay in your job.",
    sections: [
      {
        heading: "Common, and not a weakness",
        paragraphs: [
          "Many people experience work-related stress at some point. The Health and Safety Executive counted 964,000 workers in Great Britain with work-related stress, depression or anxiety in 2024 to 2025.",
          "Many employees are unwilling to talk about stress at work because of the stigma it has. But stress is not a weakness, and it can happen to anyone.",
        ],
      },
      {
        heading: "Spotting it",
        paragraphs: [
          "Work stress can make you feel withdrawn, lose motivation or feel less confident. You might jump to conclusions, make problems feel much bigger than they are, or blame yourself when things go wrong.",
          "It can also change what you do: avoiding certain tasks, working longer hours or weekends, working during holidays, or taking more time off work.",
        ],
      },
      {
        heading: "What causes it",
        paragraphs: [
          "The Health and Safety Executive names six main areas of work that can lead to stress if they are not managed properly: demands, control, support, relationships, role and change.",
          "Employers have a legal duty to protect workers from stress at work by doing a risk assessment and acting on it, and to share the results with you. Stress affects people differently: what stresses one person may not affect another.",
        ],
      },
      {
        heading: "What you can do",
        paragraphs: [
          "Work out what you find stressful. Do you have too much to do, or not enough time? Is there a lot of change, or are relationships with colleagues difficult? Then think about what you can and cannot change.",
          "Talking to your manager as soon as possible gives them the chance to help and stop the situation getting worse, and they may be able to help you agree priorities or adjust your workload. If the pressure comes from your manager, you could talk to a trade union representative, HR, an employee assistance programme or your GP.",
          "Set boundaries: take breaks, finish work on time, say no when you already have too much to do, and switch off work notifications outside your working hours.",
        ],
      },
      {
        heading: "Your rights and support",
        paragraphs: [
          "All employees have the legal right to request flexible working from their first day in a job, such as changing their hours, their start and finish times, or where they work.",
          "If you are ill for more than 7 days in a row, you need to give your employer a fit note, which can say you may be fit for work with changes such as different hours. Access to Work can offer support to manage your mental health at work, such as a tailored plan and one-to-one sessions with a mental health professional.",
        ],
      },
    ],
    helps: [
      "Write down what was happening when you started to feel stressed, to see which situations, people or tasks affect you.",
      "Talk to your manager early, so they have the chance to help.",
      "Set boundaries: take breaks, finish on time and switch off work notifications outside working hours.",
      "Take proper breaks at work, and make sure you use all your annual leave.",
      "Ask about flexible working, or Access to Work mental health support, if it would help you stay in work.",
      CRISIS,
    ],
    tryThisWeek: [
      "Note what triggers stress at work.",
      "Take a proper lunch break.",
      "Switch off work notifications after hours.",
    ],
    ask: "Could stress at work be affecting my health, and would a fit note with changes help?",
    interactive: {
      kind: "flip-cards",
      title: "Six causes of work stress",
      intro: "The Health and Safety Executive names six areas of work that can cause stress if they are not managed well. Turn each card to see what it can look like.",
      cards: [
        { id: "demands", front: "Demands", when: "Too much to do", back: "Not being able to cope with the demands of the job." },
        { id: "control", front: "Control", when: "Little say", back: "Being unable to control the way you do your work." },
        { id: "support", front: "Support", when: "Left to cope alone", back: "Not receiving enough information and support." },
        { id: "relationships", front: "Relationships", when: "Conflict at work", back: "Having trouble with relationships at work, or being bullied." },
        { id: "role", front: "Role", when: "Unclear duties", back: "Not fully understanding your role and responsibilities." },
        { id: "change", front: "Change", when: "Kept out of it", back: "Not being engaged when a business is undergoing change." },
      ],
    },
    sources: [EMM_WORK, HSE_OVERVIEW, HSE_CAUSES, HSE_EMPLOYEE, MHF_WORK_LIFE, GOV_FLEXIBLE, GOV_SICK_LEAVE, GOV_ACCESS_TO_WORK, HSE_FIGURES, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Who has a legal duty to protect workers from stress at work?",
      options: [{ text: "Employers", right: true }, { text: "Only the worker" }, { text: "No one" }],
      why: "Employers have a legal duty to protect workers from stress at work by doing a risk assessment and acting on it.",
    },
  },
  {
    id: "str-caring",
    kicker: "Carers",
    question: "How can I cope with the stress of caring for someone?",
    hook: "Caring for someone can leave you so busy that you do not notice your own stress. Support and breaks are there for you too.",
    short: "The responsibilities of caring can make you more likely to feel stressed, especially if you are isolated. Talking to other carers, taking breaks and asking your council for a free carer's assessment can all help. A carer's assessment might recommend someone to take over caring so you can take a break.",
    sections: [
      {
        heading: "A common strain",
        paragraphs: [
          "Stress and depression can affect anyone, and the responsibilities of caring can make you more susceptible, particularly if you find yourself isolated or cut off from others socially.",
          "In the Carers UK State of Caring 2025 survey, 74% of carers said they had felt stressed or anxious. Caring for someone is also one of the family pressures the NHS lists as a cause of stress.",
        ],
      },
      {
        heading: "Noticing it",
        paragraphs: [
          "You may have so little time to yourself that you do not realise you are stressed at first. When you do start noticing the symptoms, it is important not to struggle on, hoping it will go away.",
          "Signs can include anxiety, racing thoughts, anger, sleeplessness, crying often, tiredness and difficulty concentrating. Physical signs can include muscle spasms, chest pains, dizziness and breathlessness.",
          "Over the long term, stress can affect your health, putting you at risk of high blood pressure. Carers UK says it is important to seek support straight away.",
        ],
      },
      {
        heading: "A carer's assessment",
        paragraphs: [
          "If you care for someone, you can ask your local council's adult social services for a carer's assessment. It is free, and anyone over 18 can ask for one.",
          "Someone will ask how you are coping, including how caring affects your physical and mental health, work, free time and relationships. It might recommend someone to take over caring so you can take a break, gym membership and exercise classes to relieve stress, or putting you in touch with local support groups.",
        ],
      },
      {
        heading: "Taking a break",
        paragraphs: [
          "Respite care means taking a break from caring while the person you care for is looked after by someone else. It helps stop you becoming exhausted and run down.",
          "Options range from a volunteer sitting with the person you look after for a few hours, to day care centres, help at home from a paid carer, or a short stay in a care home. Even taking a couple of hours each week to treat yourself to something you enjoy can make a considerable difference.",
        ],
      },
      {
        heading: "Support for you",
        paragraphs: [
          "Talking to other people in a similar situation can be a great help, such as at a local carers' group. If you can, talk to your family and friends too, as they may realise you need more help from them.",
          "If you are feeling tearful or angry, try going out of the room, or outside if you can, for at least five minutes. Do not drink or smoke too much, and watch your coffee intake, as caffeine can have similar effects on your body as stress.",
        ],
      },
    ],
    helps: [
      "Ask your council's adult social services for a free carer's assessment.",
      "Plan regular breaks, even a couple of hours a week doing something you enjoy.",
      "Join a local carers' group, or chat to other carers online.",
      "Talk to family and friends, so they know you need more help.",
      "Call Carers UK's free helpline on 0808 808 7777 to talk about carer's assessments.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask for a carer's assessment.",
      "Book two hours for yourself.",
      "Find a local carers' group.",
    ],
    ask: "I care for someone and feel worn out: what support is there for me as a carer?",
    interactive: {
      kind: "scenarios",
      title: "Caring moments",
      scenarios: [
        {
          id: "no-time",
          situation: "You realise you have had no time to yourself for weeks.",
          options: [{ text: "Ask your council for a carer's assessment", best: true }, { text: "Keep going and hope it passes" }],
          why: "When you notice the symptoms of stress, it is important not to struggle on. A carer's assessment might recommend someone to take over so you can take a break.",
        },
        {
          id: "tearful",
          situation: "You feel tearful and angry in the middle of a hard day.",
          options: [{ text: "Step outside for at least five minutes", best: true }, { text: "Push on without a pause" }],
          why: "Carers UK suggests going out of the room, or outside if you can, for at least five minutes, and taking a deep breath.",
        },
        {
          id: "friends",
          situation: "Friends ask how you are doing.",
          options: [{ text: "Tell them you need more help", best: true }, { text: "Say everything is fine" }],
          why: "Sharing your feelings with those close to you may mean they realise you need more help from them.",
        },
        {
          id: "holiday",
          situation: "You would love a short break but worry about cover.",
          options: [{ text: "Ask about respite care", best: true }, { text: "Never take a break" }],
          why: "Respite care lets you take a break while someone else looks after the person you care for, from a few hours to a short stay in a care home.",
        },
      ],
    },
    sources: [CUK_STRESS, NHS_CARER_ASSESSMENT, NHS_CARER_BREAKS, CUK_FACTS, NHS_STRESS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Who can ask for a free carer's assessment?",
      options: [{ text: "Anyone over 18 who cares for someone", right: true }, { text: "Only paid care workers" }, { text: "Only people over 65" }],
      why: "A carer's assessment is free and anyone over 18 can ask for one.",
    },
  },
  {
    id: "str-sleep-activity",
    kicker: "Daily life",
    question: "How do sleep, activity and alcohol affect stress?",
    hook: "Stress can keep you awake, a drink can seem to help, and exercise can feel like the last thing you want. Small changes to all three can make stress easier to carry.",
    short: "Stress is one of the most common causes of poor sleep, and poor sleep can lower your mood and concentration. Being active can reduce some of the emotional intensity of stress. Alcohol may seem to relax you, but the effect is short-lived and over time it can make everyday stress harder to cope with.",
    sections: [
      {
        heading: "Stress and sleep",
        paragraphs: [
          "Stress, anxiety or depression are among the most common causes of insomnia. When you feel stressed, your body may feel more alert and your mind may be full of worrying thoughts.",
          "If you do not get enough sleep, it can cause problems such as poor concentration and low mood. Most healthy adults need around 7 to 9 hours of sleep a night.",
        ],
      },
      {
        heading: "Better sleep habits",
        paragraphs: [
          "Wake up and get out of bed at the same time every day, and relax for at least 1 hour before bed, perhaps with a bath or a book. Keep your bedroom dark and quiet.",
          "Do not smoke or drink alcohol, tea or coffee for at least 6 hours before going to bed, and avoid using devices like smartphones right before bed. Writing a to do list for the next day, then putting it aside before bed, can help you prioritise.",
        ],
      },
      {
        heading: "Moving more",
        paragraphs: [
          "Exercise will not make your stress disappear, but it can reduce some of the emotional intensity you are feeling, clearing your thoughts and letting you deal with problems more calmly. Physical activity can also boost your mood, sleep quality and energy.",
          "Adults should aim for at least 150 minutes of moderate activity a week, or 75 minutes of vigorous activity. If that feels a lot, the Mental Health Foundation says even a little activity can make a difference, such as walking for 15 to 20 minutes three times a week.",
          "Pick something you enjoy: cycling, walking, running, team activities or the gym. Housework and gardening count too.",
        ],
      },
      {
        heading: "Alcohol is not a fix",
        paragraphs: [
          "Try not to use alcohol, cigarettes, gambling or drugs to relieve stress, as these can all contribute to poor mental health. They might give temporary relief, but in the long term they will not solve your problems.",
          "You might feel more relaxed after a drink, but the effect is short-lived. Over time, drinking too much can contribute to low mood and make it harder to cope with everyday stress, and it can disrupt your sleep patterns and stop you sleeping deeply.",
          "If you drink heavily, do not stop suddenly without medical advice. The NHS says that if you have become physically dependent on alcohol, stopping overnight could be harmful, and a GP is a good place to start.",
        ],
      },
    ],
    helps: [
      "Get up at the same time every day, and relax for an hour before bed.",
      "Do not drink alcohol, tea or coffee for at least 6 hours before bed.",
      "Be active in a way you enjoy: even a short walk a few times a week can help.",
      "Try not to use alcohol, cigarettes, gambling or drugs to relieve stress.",
      "If you drink heavily, do not stop suddenly: talk to a GP first, as stopping overnight could be harmful.",
      CRISIS,
    ],
    tryThisWeek: [
      "Keep the same wake-up time.",
      "No tea, coffee or alcohol 6 hours before bed.",
      "Take a short walk a few times.",
    ],
    ask: "Could stress be behind my poor sleep, and is my drinking something we should talk about?",
    interactive: {
      kind: "risk-check",
      title: "Habits that feed stress",
      intro: "Tick any that apply. Each one is something you can change, a little at a time.",
      items: [
        { id: "late-caffeine", label: "Tea or coffee late in the day", note: "Do not drink alcohol, tea or coffee for at least 6 hours before going to bed.", changeable: true },
        { id: "screens", label: "Phone right before bed", note: "The blue light from devices makes you more awake. Put them away before bed.", changeable: true },
        { id: "irregular", label: "Different wake-up times", note: "Waking up and getting out of bed at the same time every day helps.", changeable: true },
        { id: "inactive", label: "Little time to move", note: "Even a little activity helps, such as walking for 15 to 20 minutes three times a week.", changeable: true },
        { id: "drink", label: "A drink to unwind", note: "The relaxed feeling is short-lived, and over time drinking can make everyday stress harder to cope with.", changeable: true },
        { id: "heavy", label: "Drinking heavily most days", note: "Do not stop suddenly without medical advice: stopping overnight could be harmful. Talk to a GP.", changeable: true },
      ],
    },
    sources: [NHS_INSOMNIA, EMM_SLEEP, RETHINK_STRESS, NHS_BUSTERS, NHS_EXERCISE_BENEFITS, NHS_ACTIVITY_GUIDELINES, MHF_STRESS, NHS_STRESS, DRINKAWARE_MH, NHS_ALCOHOL_TIPS, NHS_ALCOHOL_SUPPORT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does the NHS say exercise does for stress?",
      options: [{ text: "It can reduce some of the emotional intensity", right: true }, { text: "It makes stress disappear completely" }, { text: "Nothing at all" }],
      why: "Exercise will not make your stress disappear, but it can reduce some of the emotional intensity you are feeling.",
    },
  },
  {
    id: "str-crisis",
    kicker: "Urgent help",
    question: "What should I do if it all feels too much?",
    hook: "If stress has become more than you can carry, you do not have to cope alone. Help is there right now, day and night.",
    short: "If you need help urgently, call 111 and select the mental health option, or ask for an urgent GP appointment. Samaritans listen any time on 116 123, and Shout is a free text line on 85258. Call 999 or go to A&E if you or someone else is in danger, or you do not feel you can keep yourself safe.",
    sections: [
      {
        heading: "You do not have to be in crisis to reach out",
        paragraphs: [
          "Struggling to cope with everyday life does not look or feel the same in everyone. Signs can include feeling exhausted all the time, finding it hard to think clearly, not wanting to be with people, using alcohol or drugs to cope, and experiencing burnout.",
          "You do not have to feel suicidal to get in touch with Samaritans. Only 1 person in 5 who calls them says that they feel suicidal.",
        ],
      },
      {
        heading: "Talk to someone now",
        paragraphs: [
          "Samaritans are there to listen at any time of the day or night, and you can talk about anything that is troubling you, no matter how difficult. Call free on 116 123 from any phone, and the number will not come up on your phone bill.",
          "If you do not want to talk on the phone, you can text SHOUT to 85258. It is free, confidential and open 24 hours a day, every day.",
          "You could also let family or friends know what is going on for you. They may be able to offer support and help keep you safe.",
        ],
      },
      {
        heading: "Urgent, but not an emergency",
        paragraphs: [
          "If you need urgent help for your mental health, get help from 111 online or call 111 and select the mental health option. 111 will tell you the right place to get help, and you may be able to speak to a trained mental health professional over the phone.",
          "You can also call a GP and ask for an emergency appointment, or contact your mental health crisis team if you have one.",
        ],
      },
      {
        heading: "In an emergency",
        paragraphs: [
          "Call 999 or go to A&E now if someone's life is at risk, or you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
          "Do not drive to A&E: ask someone to drive you, or call 999 and ask for an ambulance. At A&E, staff should treat you with respect and look after any immediate physical and mental health needs.",
        ],
      },
      {
        heading: "Getting through right now",
        paragraphs: [
          "Try not to think about the future, and just focus on getting through today. Stay away from drugs and alcohol, get yourself to a safe place like a friend's house, be around other people, and do something you usually enjoy.",
          "If you struggle with suicidal thoughts or are supporting someone else, it may help to make a safety plan to use if you need it. The Staying Safe website shows how, with video tutorials and online templates.",
        ],
      },
    ],
    helps: [
      "Call 111 and select the mental health option if you need urgent help, or ask for an urgent GP appointment.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "Text SHOUT to 85258 if you would rather not talk on the phone.",
      "Focus on getting through today, stay away from drugs and alcohol, and be around other people.",
      "Call 999 or go to A&E if you or someone else is in danger.",
      CRISIS,
    ],
    tryThisWeek: [
      "Call 111 for urgent mental health help.",
      "Call Samaritans on 116 123.",
      "Text SHOUT to 85258.",
    ],
    ask: "Who do I contact if things suddenly get worse, and is there a crisis team I can reach?",
    interactive: {
      kind: "flip-cards",
      title: "Who to contact",
      intro: "Turn each card to see when to use each route.",
      cards: [
        { id: "emergency", front: "999 or A&E", when: "A life at risk, or you cannot keep safe", back: "Call 999 or go to A&E now. A mental health emergency is as serious as a physical one." },
        { id: "nhs-111", front: "NHS 111, mental health option", when: "Urgent, but not an emergency", back: "Call 111 or use 111 online. They will tell you the right place to get help." },
        { id: "samaritans", front: "Samaritans, 116 123", when: "Any time you need to talk", back: "Free from any phone, day or night. You can talk about anything that is troubling you." },
        { id: "shout", front: "Shout, text 85258", when: "If you would rather not talk", back: "Text SHOUT to 85258. Free, confidential and open 24 hours a day, every day." },
        { id: "gp", front: "Your GP", when: "An emergency appointment", back: "Call a GP and ask for an emergency appointment." },
        { id: "crisis-team", front: "Your crisis team", when: "If you already have one", back: "Contact your mental health crisis team if you have one." },
      ],
    },
    sources: [NHS_URGENT, NHS_SUICIDAL, EMM_URGENT, SAMARITANS_CONTACT, SAMARITANS_STRUGGLING, NHS_STRESS, SHOUT],
    quiz: {
      question: "Do you have to feel suicidal to call Samaritans?",
      options: [{ text: "No, you can talk about anything that is troubling you", right: true }, { text: "Yes, only then" }, { text: "Only at night" }],
      why: "You do not have to feel suicidal to get in touch with Samaritans. Only 1 person in 5 who calls them says that they feel suicidal.",
    },
  },
];
