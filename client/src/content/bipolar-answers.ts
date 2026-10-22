import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Bipolar disorder page's pieces (content/library-conditions/mind-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (the
// bipolar disorder page and the medicine pages), the Royal College of Psychiatrists, Bipolar UK, Rethink
// Mental Illness, Samaritans, Shout and the government's pages on driving and Access to Work. mind.org.uk
// could not be read today (it answers with a bot check), so no Mind page is cited.
// Safe messaging (Samaritans media guidelines): no method details, hopeful and practical, and every answer ends
// its "What helps" list with the crisis routes as the NHS gives them (999 or A&E, 111 and the mental health
// option, Samaritans 116 123, Shout 85258). Nothing here suggests stopping or changing a medicine without the
// doctor. General information only; it never replaces what a person's own GP or mental health team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const emm = (label: string, path: string): LearnSource => ({ label: `NHS Every Mind Matters: ${label}`, url: `https://www.nhs.uk/every-mind-matters/${path}` });
const buk = (label: string, path: string): LearnSource => ({ label: `Bipolar UK: ${label}`, url: `https://www.bipolaruk.org/${path}` });
const rethink = (label: string, path: string): LearnSource => ({ label: `Rethink Mental Illness: ${label}`, url: `https://www.rethink.org/advice-and-information/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_BIPOLAR = nhs("Bipolar disorder", "mental-health/conditions/bipolar-disorder/");
const NHS_LITHIUM_ABOUT = nhs("About lithium", "medicines/lithium/about-lithium/");
const NHS_LITHIUM_HOW = nhs("How and when to take lithium", "medicines/lithium/how-and-when-to-take-lithium/");
const NHS_LITHIUM_SIDE = nhs("Side effects of lithium", "medicines/lithium/side-effects-of-lithium/");
const NHS_LITHIUM_QS = nhs("Common questions about lithium", "medicines/lithium/common-questions-about-lithium/");
const NHS_LITHIUM_OTHER = nhs("Taking lithium with other medicines and herbal supplements", "medicines/lithium/taking-lithium-with-other-medicines-and-herbal-supplements/");
const NHS_VALPROATE = nhs("About sodium valproate", "medicines/sodium-valproate/about-sodium-valproate/");
const NHS_LAMOTRIGINE = nhs("Lamotrigine", "medicines/lamotrigine/");
const NHS_QUETIAPINE = nhs("Quetiapine", "medicines/quetiapine/");
const NHS_OLANZAPINE = nhs("About olanzapine", "medicines/olanzapine/about-olanzapine/");
const NHS_OLANZAPINE_SIDE = nhs("Side effects of olanzapine", "medicines/olanzapine/side-effects-of-olanzapine/");
const NHS_ARIPIPRAZOLE = nhs("About aripiprazole", "medicines/aripiprazole/about-aripiprazole/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_RETURN_WORK = nhs("Returning to work after mental health issues", "mental-health/advice-for-life-situations-and-events/return-to-work-after-mental-health-issues/");
const NHS_CARER_ASSESSMENT = nhs("Carer's assessments", "social-care-and-support/support-and-benefits-for-carers/carer-assessments/");
const NHS_ALCOHOL = nhs("Alcohol use disorder", "conditions/alcohol-use-disorder/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const EMM_HELPING = emm("Helping others with mental health problems", "supporting-others/helping-others/");

const RCP_BIPOLAR: LearnSource = { label: "Royal College of Psychiatrists: Bipolar disorder", url: "https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/bipolar-disorder" };

const BUK_WHAT = buk("What is bipolar?", "about-bipolar/what-is-bipolar/");
const BUK_TYPES = buk("Types of bipolar", "about-bipolar/types-of-bipolar/");
const BUK_SIGNS = buk("Bipolar signs and symptoms", "about-bipolar/signs-symptoms/");
const BUK_DIAGNOSIS = buk("Diagnosing bipolar", "about-bipolar/diagnosing-bipolar/");
const BUK_TREATMENT = buk("Bipolar treatment", "about-bipolar/treatment/");
const BUK_LITHIUM = buk("Lithium for bipolar", "about-bipolar/treatment/lithium/");
const BUK_MEDICATION = buk("Medication for bipolar", "about-bipolar/treatment/medication/");
const BUK_THERAPY = buk("Therapy for bipolar", "about-bipolar/treatment/therapy/");
const BUK_PSYCHOED = buk("Psychoeducation for bipolar", "about-bipolar/treatment/psychoeducation/");
const BUK_COURSES = buk("Self-management courses", "get-support/self-management-courses/");
const BUK_SLEEP = buk("Bipolar and sleep", "about-bipolar/living-with-bipolar/sleep/");
const BUK_STRESS = buk("Bipolar and stress", "about-bipolar/living-with-bipolar/stress/");
const BUK_MONEY = buk("Bipolar and money", "about-bipolar/living-with-bipolar/money/");
const BUK_DRIVING = buk("Bipolar and driving", "about-bipolar/living-with-bipolar/driving/");
const BUK_STIGMA = buk("Bipolar and stigma", "about-bipolar/living-with-bipolar/stigma/");
const BUK_SUICIDE = buk("Bipolar and suicide prevention", "about-bipolar/living-with-bipolar/suicide-prevention/");
const BUK_SUPPORTING = buk("Supporting someone with bipolar", "about-bipolar/supporting-someone/");
const BUK_CRISIS = buk("Get urgent help", "get-support/crisis-support/");
const BUK_TRACK = buk("Track your mood", "get-support/track-your-mood/");
const BUK_MOOD_SCALE = buk("Mood Scale", "get-support/track-your-mood/mood-scale/");
const BUK_APP = buk("Mood Tracker app", "get-support/track-your-mood/mood-tracker-app/");
const BUK_GROUPS = buk("Peer Support Group FAQs", "get-support/peer-support-group-faqs/");

const RETHINK_BIPOLAR = rethink("Bipolar disorder", "about-mental-illness/mental-health-conditions/bipolar-disorder/");
const RETHINK_MOOD_STABILISERS = rethink("Mood stabilisers", "living-with-mental-illness/medications/mood-stabilisers-uses-types-side-effects-pregnancy-risks-and-stopping-treatment/");
const RETHINK_TEAMS = rethink("NHS mental health teams", "living-with-mental-illness/treatment-and-support/nhs-mental-health-teams-community-crisis-and-early-intervention-support/");
const RETHINK_ADVANCE = rethink("Advance statements and advance decisions", "rights-laws-and-criminal-justice/your-rights/advance-statements-and-advance-decisions-planning-your-future-care/");
const RETHINK_CRISIS_CARERS = rethink("Getting help for someone in a mental health crisis", "carers-hub/getting-help-for-someone-in-crisis/getting-help-for-someone-in-a-mental-health-crisis/");

const SAM_CONTACT: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };
const SHOUT: LearnSource = { label: "Shout: The UK's free, confidential, 24/7 mental health text service", url: "https://giveusashout.org/" };

const GOV_DRIVING = gov("Bipolar disorder (manic depression) and driving", "bipolar-disorder-and-driving");
const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans free on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you do not feel you can keep yourself or someone else safe.";

export const bipolarAnswers: LearnArticle[] = [
  {
    id: "bpd-what-it-is",
    kicker: "Understanding",
    question: "What is bipolar disorder?",
    hook: "Episodes of very high and very low mood, often with calmer times between. It is lifelong, and with the right treatment and support many people live and function well.",
    short: "Bipolar disorder is a mental health condition where you have extreme mood changes: high moods (mania or hypomania) and low moods (depression). Between episodes, many people have times when their mood is stable. It cannot be cured, but medicines and talking therapy can help manage it.",
    sections: [
      {
        heading: "Extreme changes in mood",
        paragraphs: [
          "Bipolar disorder is a mental health condition where you have extreme mood changes. It used to be called manic depression.",
          "You sometimes have high moods, called mania or hypomania, and sometimes low moods, called depression. Each episode can last anything from several days to several weeks or months.",
        ],
      },
      {
        heading: "Far beyond everyday ups and downs",
        paragraphs: [
          "Bipolar mood swings are more extreme than most people's everyday experiences of feeling a bit down or happy. They are far beyond the emotional ups and downs that most of us have.",
          "Some people have both at once. In a mixed state, you may feel very depressed but also have the restlessness and overactivity of mania.",
        ],
      },
      {
        heading: "The time between",
        paragraphs: [
          "If you have bipolar disorder, you will usually have times where your mood is stable and you do not have any symptoms. This can last for weeks, months or years.",
          "Some people feel they recover completely between mood swings, but many do not. You can go on feeling low and having problems with thinking, even when you seem better to other people.",
        ],
      },
      {
        heading: "A scale from 0 to 10",
        paragraphs: [
          "Bipolar UK uses a Mood Scale, where 0 is low and 10 is high, to help explain bipolar mood swings. People without a mood disorder sit in the middle of the scale, from 4 to 6.",
          "People with bipolar have a much wider range of moods. The high symptoms of hypomania and mania sit at 7 to 10, and the low symptoms of depression sit at 0 to 3.",
        ],
      },
      {
        heading: "Who it affects, and what helps",
        paragraphs: [
          "About 1 in every 50 adults will have bipolar disorder at some point in their life. It usually starts between the ages of 15 and 25, and rarely after 50. Bipolar UK estimates that more than one million people in the UK have bipolar.",
          "Bipolar disorder cannot be cured, but there are treatments that can help manage it. If someone gets the right treatment and support, their mood swings can be managed, and they can live and function well.",
        ],
      },
    ],
    helps: [
      "See a GP if you have extreme changes in your moods that last a long time or affect your everyday life.",
      "If you are worried about someone else, encourage them to speak to their GP.",
      "Keep a record of your moods; it can help you and your GP understand your mood swings.",
      "Find information and support from charities such as Bipolar UK and Rethink Mental Illness.",
      CRISIS,
    ],
    tryThisWeek: [
      "See a GP about long mood changes.",
      "Keep a simple record of your moods.",
      "Read one charity's guide to bipolar.",
    ],
    ask: "Could my mood changes be bipolar disorder, and what happens next?",
    interactive: {
      kind: "flip-cards",
      title: "The moods of bipolar",
      intro: "Turn each card to see what each mood state is like. The numbers are Bipolar UK's Mood Scale.",
      cards: [
        { id: "depression", front: "Depression", when: "0 to 3 on the Mood Scale", back: "Feeling intensely low, sad, tired or hopeless, and losing interest in things you usually enjoy." },
        { id: "hypomania", front: "Hypomania", when: "7 and 8 on the Mood Scale", back: "Mood is high, but not as extreme as mania. It can still affect judgement and how you get on with others." },
        { id: "mania", front: "Mania", when: "9 and 10 on the Mood Scale", back: "Feeling extremely happy, elated and overactive, in a way that affects thinking and judgement." },
        { id: "mixed", front: "Mixed state", when: "High and low at the same time", back: "Feeling very depressed, but also having the restlessness and overactivity of mania." },
        { id: "stable", front: "Stable times", when: "Between episodes", back: "Times when mood is stable and there are no symptoms. These can last weeks, months or years." },
      ],
    },
    sources: [NHS_BIPOLAR, RCP_BIPOLAR, BUK_WHAT, RETHINK_BIPOLAR, BUK_SIGNS, BUK_MOOD_SCALE, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How many adults will have bipolar disorder at some point in their life?",
      options: [{ text: "About 1 in every 50", right: true }, { text: "About 1 in 2" }, { text: "Only 1 in a million" }],
      why: "About 1 in every 50 adults will have bipolar disorder at some point in their life.",
    },
  },
  {
    id: "bpd-mania",
    kicker: "Symptoms",
    question: "What are mania and hypomania?",
    hook: "A high can feel wonderful at first: energy, ideas, confidence. Knowing the signs early is one of the main skills of living with bipolar.",
    short: "Mania and hypomania are the high moods of bipolar disorder. Hypomania is milder; mania is severe and can include losing touch with reality. You may feel very happy or irritable, need little sleep, talk fast and act on impulse. Mania is a psychiatric emergency and needs urgent help.",
    sections: [
      {
        heading: "Two levels of high",
        paragraphs: [
          "High moods in bipolar disorder can be severe, called mania, or mild, called hypomania. Hypomania is the stage between a balanced, happy mood and mania.",
          "Hypomania can still affect your judgement and how you get on with other people. If it is left untreated, it can become more intense and lead to mania.",
        ],
      },
      {
        heading: "How a high can feel",
        paragraphs: [
          "You may feel very happy and excited, or very irritable or aggressive. You may have a lot of energy, feel restless or not need much sleep.",
          "Thoughts can race, and you may move quickly from one idea to another. You may talk so quickly that other people find it hard to follow, and feel overly confident or adventurous.",
        ],
      },
      {
        heading: "What people may do",
        paragraphs: [
          "You may make impulsive decisions or spend lots of money, and say or do things that are rude, inappropriate or not usual for you. You may make plans that are grandiose and unrealistic.",
          "People living with bipolar tell Bipolar UK that hypomania can sometimes feel very pleasurable and productive. Noticing and managing it before it turns into mania is one of the main challenges of living with bipolar.",
        ],
      },
      {
        heading: "When it becomes severe",
        paragraphs: [
          "If an episode becomes very severe, you may develop delusional ideas, such as grandiose beliefs that you have special powers. You may also hear, see or feel things that are not there.",
          "In a first manic episode, you may not realise anything is wrong, although friends, family or colleagues usually will. You may even feel annoyed if someone points it out.",
          "Untreated, a manic episode will generally last 3 to 6 months.",
        ],
      },
      {
        heading: "Getting help quickly",
        paragraphs: [
          "Bipolar UK describes symptoms of mania as a psychiatric emergency. Treatment and support may be needed urgently to keep the person safe.",
          "For urgent help, call 111 and select the mental health option, or contact your local crisis team. Call 999 or go to A&E if you do not feel you can keep yourself or someone else safe. You can also call Samaritans free on 116 123.",
        ],
      },
    ],
    helps: [
      "Learn how to recognise the signs that your mood is swinging, so you can get help early.",
      "When you are well, explain the illness to people who are important to you, so they know what happens and what they can do.",
      "Get plenty of sleep, and keep a regular routine.",
      "See a GP if your mood changes last a long time or affect everyday life, or speak to your mental health specialist if treatment is not helping.",
      CRISIS,
    ],
    tryThisWeek: [
      "Write down your early signs of a high.",
      "Explain your signs to someone close.",
      "Keep regular sleep times.",
    ],
    ask: "What are my own early signs of a high, and who do I contact when I notice them?",
    interactive: {
      kind: "signs",
      title: "Signs of a high",
      intro: "Tick any you have noticed. The ones you tick make a list to share with your GP or mental health team.",
      signs: ["Feeling very happy and excited", "Feeling very irritable", "A lot of energy, or restless", "Not needing much sleep", "Racing thoughts", "Talking fast or a lot", "Feeling overly confident", "Spending lots of money", "Making impulsive decisions", "Saying things not usual for you"],
      after: "Tell your GP or mental health team. If someone has symptoms of mania, treatment and support may be needed urgently.",
      copyHeading: "High-mood signs I have noticed",
    },
    sources: [NHS_BIPOLAR, RCP_BIPOLAR, BUK_SIGNS, RETHINK_BIPOLAR, BUK_TYPES, BUK_CRISIS, NHS_URGENT, NHS_SUICIDAL, SAM_CONTACT],
    quiz: {
      question: "What is hypomania?",
      options: [{ text: "A milder high than mania", right: true }, { text: "A kind of low mood" }, { text: "A side effect of lithium" }],
      why: "High moods in bipolar disorder can be severe, called mania, or mild, called hypomania.",
    },
  },
  {
    id: "bpd-depression",
    kicker: "Symptoms",
    question: "What are the low, depressive episodes like?",
    hook: "Bipolar lows can last longer than the highs, and they can be hidden even from the people closest to you. Help is there, at any hour.",
    short: "In bipolar depression, low feelings are much more intense than everyday sadness and make it hard to deal with normal life. You may feel hopeless, very tired and lose interest in things. Suicidal thoughts can be a symptom of the illness, not a weakness. If you feel this way, tell someone: call 111, Samaritans on 116 123, or 999 if you cannot keep yourself safe.",
    sections: [
      {
        heading: "More than feeling down",
        paragraphs: [
          "We all have feelings of depression from time to time. In bipolar depression, these feelings are much more intense, go on for longer and make it difficult or impossible to deal with the normal things of life.",
          "Depressive episodes tend to last longer than manic ones. Without treatment, they generally last 6 to 12 months.",
        ],
      },
      {
        heading: "How it can feel",
        paragraphs: [
          "Symptoms include feeling sad or upset, not being interested in things you usually enjoy, low energy or feeling very tired, low confidence and feeling worthless or hopeless.",
          "It can be hard to concentrate or make even simple decisions. You may sleep a lot or have difficulty sleeping, eat too much or too little, and avoid seeing other people.",
        ],
      },
      {
        heading: "Lows that are hidden",
        paragraphs: [
          "People living with bipolar tell Bipolar UK they can sometimes hide a mild episode of depression even from their closest loved ones, which is exhausting.",
          "If symptoms get worse, someone may struggle with self-care and become unable to work, look after their family or socialise.",
        ],
      },
      {
        heading: "When it becomes severe",
        paragraphs: [
          "If depression becomes very severe, you can feel that you are uniquely guilty, that you are worse than anybody else, or even that you don't exist.",
          "Some people hear, smell, feel or see things that are not there. This needs urgent treatment and support.",
        ],
      },
      {
        heading: "Suicidal thoughts, and getting help",
        paragraphs: [
          "Suicidal thoughts can be a symptom of low mood in bipolar. They are a symptom of the illness, not a personal weakness, and there are lots of practical ways to help manage them.",
          "If you're feeling like you want to end your life, it's important to tell someone. Call 111 and select the mental health option, call Samaritans free on 116 123 at any time, or text SHOUT to 85258.",
          "If you have seriously harmed yourself, or feel you may be about to, call 999 or go straight to A&E. A mental health emergency should be taken as seriously as a physical one. You will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Speak to your GP or mental health specialist if your treatment is not helping.",
      "Let a trusted friend or family member know what's going on; it can ease the loneliness.",
      "Ask your healthcare team to help you create a safety plan.",
      "When you are really struggling, take whatever small acts of self-care you can, and don't try to do everything at once.",
      CRISIS,
    ],
    tryThisWeek: [
      "Tell one trusted person how you feel.",
      "Ask your team about a safety plan.",
      "Do one small act of self-care.",
    ],
    ask: "Can you help me make a safety plan for when my mood is very low?",
    interactive: {
      kind: "flip-cards",
      title: "Who to contact",
      intro: "Turn each card to see when to use it. All of these are free.",
      cards: [
        { id: "999", front: "999 or A&E", when: "If your life is in danger", back: "Call 999 or go to A&E if you cannot keep yourself safe. You will not be wasting anyone's time." },
        { id: "111", front: "NHS 111", when: "Urgent help, not an emergency", back: "Call 111 and select the mental health option, or use 111 online. They will tell you where to get help." },
        { id: "samaritans", front: "Samaritans: 116 123", when: "Any time, day or night", back: "Free from any phone. Volunteers listen, and will not judge you or tell you what to do." },
        { id: "shout", front: "Shout: text SHOUT to 85258", when: "If you would rather not talk", back: "A free, confidential text line, open 24 hours a day, every day." },
        { id: "gp", front: "A GP", when: "For an emergency appointment", back: "Call and ask for an emergency appointment." },
        { id: "crisis", front: "Your crisis team", when: "If you already have one", back: "Contact your mental health crisis team, if you have one. NHS 111 can also help you find support." },
      ],
    },
    sources: [NHS_BIPOLAR, RCP_BIPOLAR, BUK_SIGNS, RETHINK_BIPOLAR, BUK_TYPES, BUK_SUICIDE, NHS_URGENT, NHS_SUICIDAL, SAM_CONTACT, SHOUT],
    quiz: {
      question: "Who can you call free, at any time of the day or night, to talk?",
      options: [{ text: "Samaritans, on 116 123", right: true }, { text: "No one until the morning" }, { text: "Only your psychiatrist" }],
      why: "Call Samaritans free on 116 123 at any time, or text SHOUT to 85258.",
    },
  },
  {
    id: "bpd-types",
    kicker: "Types",
    question: "What is the difference between bipolar I, bipolar II and cyclothymia?",
    hook: "The type depends on how high the highs go and how long the lows last. Type 2 is not simply a milder type 1.",
    short: "Bipolar I means at least one manic episode lasting longer than a week. Bipolar II means at least one period of severe depression and at least one period of hypomania, but no mania. Cyclothymia means milder highs and lows over at least two years, which can sometimes develop into bipolar disorder.",
    sections: [
      {
        heading: "Why there are types",
        paragraphs: [
          "Psychiatrists sometimes diagnose a type of bipolar disorder, depending on a person's moods, patterns and symptoms. Not all doctors and researchers agree on how to group the types, and some people are not told which type they have.",
          "Only a psychiatrist can make a formal diagnosis. It can take time, because bipolar affects everyone differently and the symptoms are similar to other mental health conditions.",
        ],
      },
      {
        heading: "Bipolar I",
        paragraphs: [
          "Bipolar I means you have had at least one manic episode that lasted longer than a week. Someone with symptoms of mania is seriously unwell and often needs treatment in hospital.",
          "Nine in ten people with bipolar type 1 also have periods of depression. Without treatment, manic episodes generally last 3 to 6 months, and depressive episodes 6 to 12 months.",
        ],
      },
      {
        heading: "Bipolar II",
        paragraphs: [
          "Bipolar II means at least one period of severe depression and at least one period of hypomania lasting longer than four days, but no mania. People with hypomania usually do not need hospital treatment.",
          "Many people think bipolar type 2 is just a milder form of type 1, but Bipolar UK calls this a myth. People with type 2 tend to have more frequent and longer episodes of low mood. About two in five people with bipolar have type 2.",
        ],
      },
      {
        heading: "Cyclothymia",
        paragraphs: [
          "In cyclothymia, the mood swings are less severe than in full bipolar disorder but can last longer. Bipolar UK describes regular periods of hypomania and depression for at least two years.",
          "People with cyclothymia are on the bipolar spectrum but do not have a bipolar diagnosis. In time, it can develop into bipolar disorder.",
        ],
      },
      {
        heading: "Patterns within the types",
        paragraphs: [
          "Rapid cycling means four or more episodes in a 12-month period. It affects around 1 in 10 people with bipolar, and can happen with types 1 and 2.",
          "Mixed features means having high and low symptoms at the same time. A seasonal pattern means moods change the same way with the seasons, such as a lower mood each winter.",
        ],
      },
    ],
    helps: [
      "Before appointments, record your daily mood and sleep, so you can show your doctor what has been happening.",
      "Explain the problems your moods cause, at work, with chores, socially and in your relationships.",
      "Think about family history: bipolar used to be called manic depression, and this can help your doctor build a fuller picture.",
      "Take someone with you to appointments if you would like to, and ask the doctor to go over anything you have not understood.",
      CRISIS,
    ],
    tryThisWeek: [
      "Record your mood and sleep each day.",
      "Note how your moods affect daily life.",
      "Ask about anything you don't understand.",
    ],
    ask: "What type of bipolar disorder do I have, and what does that mean for my treatment?",
    interactive: {
      kind: "flip-cards",
      title: "The types, card by card",
      intro: "Turn each card to see what each type or pattern means.",
      cards: [
        { id: "type-1", front: "Bipolar I", when: "At least one manic episode", back: "Mania lasting longer than a week. Nine in ten also have periods of depression." },
        { id: "type-2", front: "Bipolar II", when: "Severe lows and hypomania", back: "Hypomania lasting over four days, but no mania. Lows tend to be more frequent and longer." },
        { id: "cyclothymia", front: "Cyclothymia", when: "Milder highs and lows", back: "Regular hypomania and depression for at least two years. It can develop into bipolar disorder." },
        { id: "rapid", front: "Rapid cycling", when: "Four or more episodes a year", back: "Affects around 1 in 10 people with bipolar, with type 1 or type 2." },
        { id: "mixed", front: "Mixed features", when: "High and low together", back: "Symptoms of mania or hypomania and depression at the same time." },
        { id: "seasonal", front: "Seasonal pattern", when: "Moods follow the seasons", back: "For example, a lower mood each winter and a higher mood each spring." },
      ],
    },
    sources: [BUK_TYPES, RCP_BIPOLAR, RETHINK_BIPOLAR, NHS_BIPOLAR, BUK_DIAGNOSIS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Is bipolar type 2 just a milder form of type 1?",
      options: [{ text: "No, Bipolar UK calls that a myth", right: true }, { text: "Yes, always" }, { text: "Yes, and it needs no treatment" }],
      why: "Many people think bipolar type 2 is just a milder form of type 1, but Bipolar UK calls this a myth.",
    },
  },
  {
    id: "bpd-mood-stabilisers",
    kicker: "Medicines",
    question: "How do lithium and other mood stabilisers work, and how do I take them safely?",
    hook: "Lithium is still the first choice for long-term treatment. Getting the level right means regular blood tests, plenty of fluids and an alert card in your pocket.",
    short: "Mood stabilisers help to even out the highs and lows. Lithium is the first choice for long-term treatment of bipolar disorder; it is started by a psychiatrist and checked with regular blood tests. Drinking plenty of fluids keeps the level steady. Signs the level is too high are an emergency, and lithium should never be stopped suddenly without your doctor.",
    sections: [
      {
        heading: "What a mood stabiliser does",
        paragraphs: [
          "Mood stabilisers help to control and even out mood swings such as mania, hypomania and depression. Some are also used to treat epilepsy.",
          "Lithium has been used as a mood stabiliser for decades. It is still the first choice for long-term treatment of bipolar disorder, and can be used for both manic and depressive episodes.",
          "The Royal College of Psychiatrists says lithium reduces the chance of a relapse, but the more manic episodes someone has had, the more likely they are to have another.",
        ],
      },
      {
        heading: "Starting, and blood tests",
        paragraphs: [
          "Treatment with lithium should be started by a psychiatrist. It may take several weeks or months to work, so it's best to carry on even if your mood swings continue at first.",
          "At first you'll have a blood test every week, to check the level is not too high or too low. Once your doctor is happy, you'll have one every 3 to 6 months, and tests of your kidneys and thyroid too.",
          "You'll get a treatment pack with a record booklet and a lithium alert card. Carry the card with you all the time; in an emergency it tells health professionals you're taking lithium.",
        ],
      },
      {
        heading: "Keeping the level steady",
        paragraphs: [
          "The amount of lithium in your blood is very sensitive to how much water is in your body. If you become dehydrated, the level can rise. Drink plenty of fluids, especially in hot weather or when you exercise.",
          "Try to avoid a low-salt diet, and do not cut your salt suddenly. Some medicines, including anti-inflammatory painkillers such as ibuprofen, can change your lithium level, so check with your doctor or pharmacist first.",
          "Call 111 if you have an illness that causes severe diarrhoea, vomiting, a high temperature or sweating, or if you are not eating and drinking much.",
        ],
      },
      {
        heading: "Side effects, and signs the level is too high",
        paragraphs: [
          "Common side effects, such as feeling sick, a dry mouth, a metallic taste or slight shaking of the hands, are usually mild and more likely at the start. Talk to your doctor if they bother you or do not go away.",
          "Signs of lithium toxicity include stomach ache with feeling sick and diarrhoea, blurred vision, feeling very thirsty and peeing more, drowsiness, confusion, muscle twitches and difficulty speaking. This is an emergency: call 999 or go to A&E now, and do not drive yourself there.",
        ],
      },
      {
        heading: "Other mood stabilisers, and never stopping suddenly",
        paragraphs: [
          "If lithium does not work or is not suitable, valproate may be offered. Lamotrigine can help when depression is the main problem, but it is not used for mania.",
          "Sodium valproate can harm a baby's development if taken in pregnancy. It is not recommended if there's a chance you could become pregnant, and if it is needed you will be enrolled on a pregnancy prevention programme.",
          "Do not stop taking lithium suddenly, even if you feel better: you could become unwell again very quickly. If it is to be stopped, your doctor will reduce it gradually over weeks or months.",
        ],
      },
    ],
    helps: [
      "Go to every blood test your doctor arranges, and take your record booklet.",
      "Carry your lithium alert card with you at all times.",
      "Drink plenty of fluids, especially in hot weather or when you exercise.",
      "Tell any doctor or pharmacist that you take lithium before you take any new medicine.",
      "Talk to your doctor if you are pregnant or planning a pregnancy, as some medicines for bipolar are not safe in pregnancy.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book your next blood test.",
      "Put your alert card in your wallet.",
      "Drink plenty of fluids each day.",
    ],
    ask: "What blood tests do I need on my medicine, and how often?",
    interactive: {
      kind: "scenarios",
      title: "Staying safe on lithium",
      scenarios: [
        {
          id: "hot-day",
          situation: "It's a hot day and you've been out walking for hours.",
          options: [{ text: "Drink plenty of fluids", best: true }, { text: "Drink less, so you pee less" }],
          why: "If you become dehydrated, the level of lithium in your blood will rise. Drink plenty of fluids, especially in hot weather.",
        },
        {
          id: "stomach-bug",
          situation: "You have a stomach bug with vomiting and diarrhoea.",
          options: [{ text: "Call 111", best: true }, { text: "Wait a week and see" }],
          why: "Call 111 if you have an illness that causes severe diarrhoea, vomiting, a high temperature or sweating.",
        },
        {
          id: "painkiller",
          situation: "Your back hurts and you want to take ibuprofen.",
          options: [{ text: "Check with a doctor or pharmacist first", best: true }, { text: "Take it without asking" }],
          why: "Anti-inflammatory painkillers such as ibuprofen can affect the way lithium works and change its level in your blood.",
        },
        {
          id: "toxicity",
          situation: "You feel very confused and thirsty, and your muscles are twitching.",
          options: [{ text: "Call 999 or go to A&E now", best: true }, { text: "Sleep it off" }],
          why: "These are signs of lithium toxicity, which is an emergency. Do not drive yourself to A&E.",
        },
        {
          id: "feeling-better",
          situation: "You feel well and wonder whether you still need lithium.",
          options: [{ text: "Talk to your doctor first", best: true }, { text: "Stop taking it today" }],
          why: "Do not stop taking lithium suddenly or change your dose without speaking to your doctor first.",
        },
      ],
    },
    sources: [NHS_BIPOLAR, RCP_BIPOLAR, NHS_LITHIUM_ABOUT, NHS_LITHIUM_HOW, NHS_LITHIUM_SIDE, NHS_LITHIUM_QS, BUK_LITHIUM, RETHINK_MOOD_STABILISERS, NHS_VALPROATE, NHS_LITHIUM_OTHER, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What can make the level of lithium in your blood rise?",
      options: [{ text: "Becoming dehydrated", right: true }, { text: "Drinking plenty of fluids" }, { text: "Taking it at the same time each day" }],
      why: "If you become dehydrated, the level can rise. Drink plenty of fluids, especially in hot weather or when you exercise.",
    },
  },
  {
    id: "bpd-other-medicines",
    kicker: "Medicines",
    question: "What other medicines are used for bipolar disorder?",
    hook: "Antipsychotics, antidepressants used with care, and short-term help with sleep or anxiety. Finding the right mix can take time.",
    short: "Bipolar medication is not one size fits all. Antipsychotics such as olanzapine and quetiapine can treat mania and help prevent episodes; antidepressants are used carefully because they can sometimes trigger a high; and short-term medicines may help with sleep or anxiety. Keep taking your medicines even when you feel better, and talk to your doctor before any change.",
    sections: [
      {
        heading: "Not one size fits all",
        paragraphs: [
          "Bipolar medication is not a one size fits all solution. The medicine you take depends on your symptoms, how severe they are and the phase of the illness you are in.",
          "Some medicines you need to take all the time, and others you only take when your symptoms get worse. Your psychiatrist may need more than one medicine to control mood swings.",
        ],
      },
      {
        heading: "Antipsychotics",
        paragraphs: [
          "Antipsychotics such as haloperidol, olanzapine, quetiapine and risperidone can be used to treat a manic episode. You will usually be offered an antipsychotic first for mania or hypomania.",
          "Once treatment starts, symptoms usually improve within a few days, but a full recovery may take several weeks. Some antipsychotics come as a long-acting injection, usually for people who find it hard to take tablets regularly.",
          "Quetiapine can treat or prevent both low and high moods. Olanzapine can also stop mania symptoms coming back.",
        ],
      },
      {
        heading: "Antidepressants, used with care",
        paragraphs: [
          "Antidepressants can be prescribed for depressive episodes. Because they can sometimes trigger manic or hypomanic episodes, it's crucial to work closely with your doctor on the right medicine and dose.",
          "For depression in bipolar, you may be offered fluoxetine with olanzapine, quetiapine, olanzapine or lamotrigine. Lamotrigine is not recommended for people with bipolar disorder under 18.",
        ],
      },
      {
        heading: "Side effects to know about",
        paragraphs: [
          "Common side effects of olanzapine include feeling sleepy, feeling dizzy, constipation and putting on weight. Quetiapine can cause a dry mouth, dizziness, drowsiness and weight gain.",
          "Aripiprazole can affect impulse control, so you may have urges to gamble, spend or eat too much. Speak to your doctor if you notice changes like these.",
          "If a medicine makes you feel sleepy, dizzy or drowsy, do not drive, ride a bike or use machinery until this passes.",
        ],
      },
      {
        heading: "Checks, and keeping going",
        paragraphs: [
          "Physical health checks should be done at least once a year, including your weight, blood and urine tests, and your pulse and blood pressure.",
          "Keep taking your medicine even if you feel better. Do not stop it suddenly; if your doctor advises stopping, the dose will usually be reduced gradually.",
          "Call 111 if you think you might be having serious side effects, or if you're having thoughts about harming yourself.",
        ],
      },
    ],
    helps: [
      "Ask your doctor the best time of day to take your medicine, and whether to take it with food.",
      "Ask which side effects to tell them about, and what to do if you miss a dose.",
      "Tell your doctor about any other medicines, herbal remedies, vitamins or supplements you take.",
      "If your usual medicine is out of stock, speak to your GP or pharmacist; do not stop taking it without advice.",
      "Ask whether you can drive, drink alcohol or plan a pregnancy on this medicine.",
      CRISIS,
    ],
    tryThisWeek: [
      "Write down questions for your doctor.",
      "List every medicine and supplement you take.",
      "Ask what to do about a missed dose.",
    ],
    ask: "Which side effects should I tell you about, and what should I do if I miss a dose?",
    interactive: {
      kind: "flip-cards",
      title: "Medicines, card by card",
      intro: "Turn each card to see when it is used and what it does.",
      cards: [
        { id: "antipsychotic", front: "Antipsychotic tablets", when: "Treating mania or hypomania", back: "Such as olanzapine, quetiapine or risperidone. Symptoms usually improve within a few days." },
        { id: "injection", front: "Long-acting injection", when: "If tablets are hard to take regularly", back: "Some antipsychotics come as a long-acting injection, also known as a depot injection." },
        { id: "antidepressant", front: "Antidepressants", when: "For depressive episodes", back: "Used with care, as they can sometimes trigger a high. Regular follow-up appointments are essential." },
        { id: "lamotrigine", front: "Lamotrigine", when: "When depression is the main problem", back: "Helps low mood in bipolar. It is not used for mania, or for people with bipolar under 18." },
        { id: "anxiety", front: "Anti-anxiety tablets", when: "Anxiety around an episode", back: "Anxiety is common in bipolar, and often happens before, during or after a mood episode." },
        { id: "sedation", front: "Night sedation", when: "Sleep problems for more than a few days", back: "Talk to your doctor about short-term use of sleeping tablets." },
      ],
    },
    sources: [NHS_BIPOLAR, RCP_BIPOLAR, RETHINK_BIPOLAR, BUK_MEDICATION, NHS_QUETIAPINE, NHS_OLANZAPINE, NHS_ARIPIPRAZOLE, NHS_LAMOTRIGINE, NHS_OLANZAPINE_SIDE, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Why are antidepressants used with care in bipolar disorder?",
      options: [{ text: "They can sometimes trigger a high", right: true }, { text: "They never help low mood" }, { text: "They must be taken by injection" }],
      why: "Because they can sometimes trigger manic or hypomanic episodes, it's crucial to work closely with your doctor on the right medicine and dose.",
    },
  },
  {
    id: "bpd-talking",
    kicker: "Treatment",
    question: "How can talking therapy and learning about bipolar help?",
    hook: "Therapy alongside medicine helps people recover faster and stay well for longer. Learning about the condition is a treatment in its own right.",
    short: "Medication, therapy and psychoeducation are the three main treatments for bipolar, and using them together is often best. Everyone diagnosed with bipolar is entitled to free therapy on the NHS, through a GP referral. CBT, therapies built for bipolar and family therapy can help you spot early signs and stay well.",
    sections: [
      {
        heading: "Therapy alongside medicine",
        paragraphs: [
          "Bipolar UK describes three main treatments: medication, therapy and psychoeducation. Each helps on its own, but using them together is often the best way to manage bipolar in the long term.",
          "Studies show that combining therapy with medication often leads to faster recovery and helps people stay well for longer. Bipolar UK says it nearly halves the number of relapses, compared with medication alone.",
        ],
      },
      {
        heading: "Getting therapy",
        paragraphs: [
          "For bipolar disorder, you'll need a GP to refer you for talking therapy such as CBT.",
          "Everyone diagnosed with bipolar is entitled to free therapy, but NHS waiting lists can be long. If you're on medicine for bipolar and therapy hasn't been offered, it's worth asking for it.",
        ],
      },
      {
        heading: "CBT and other therapies",
        paragraphs: [
          "CBT helps you understand how your thoughts, feelings and actions are connected. For bipolar, it can help you spot triggers and early warning signs, and manage the condition to prevent relapse. People usually have 5 to 20 sessions.",
          "Interpersonal and social rhythm therapy was created specifically for bipolar. It looks at sleep and daily routines as well as relationships.",
          "Family-focused therapy helps families learn about the condition, spot early signs of mood episodes and support their loved one.",
        ],
      },
      {
        heading: "Learning about bipolar",
        paragraphs: [
          "Psychoeducation means learning about bipolar disorder, including ways to manage it yourself, to reduce the risk of relapse. It can be one-to-one, in group workshops, or through leaflets and online guides.",
          "NICE recommends psychoeducation for bipolar, especially group sessions, which have been shown to help reduce relapses and hospital stays. Your GP or mental health team should be able to refer you.",
          "Bipolar UK also runs free eight-week online self-management courses for people with a diagnosis of bipolar.",
        ],
      },
      {
        heading: "What therapy can help you do",
        paragraphs: [
          "Therapy designed for bipolar aims to stop you becoming unwell again. It can help you understand your condition, monitor your mood, and make plans to stay well and plans to follow if you start to become unwell.",
          "Therapy isn't a quick fix, and finding the right approach can take time. If one type doesn't work for you, don't give up.",
        ],
      },
    ],
    helps: [
      "Ask your GP or mental health team what therapy is available near you.",
      "If you're on medicine for bipolar and haven't been offered therapy, ask for it.",
      "Ask about psychoeducation, especially group sessions.",
      "Practise what you learn between CBT sessions; it's important for CBT to work.",
      "If you pay privately, check your therapist is registered with a trusted professional body.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask your GP what therapy is available.",
      "Ask about a psychoeducation group.",
      "Practise between sessions.",
    ],
    ask: "Can I be referred for talking therapy or psychoeducation for bipolar?",
    interactive: {
      kind: "flip-cards",
      title: "Therapies, card by card",
      intro: "Turn each card to see what each one involves.",
      cards: [
        { id: "cbt", front: "CBT", when: "One-to-one sessions", back: "Links thoughts, feelings and actions. Helps you spot triggers and early warning signs." },
        { id: "ipsrt", front: "Interpersonal and social rhythm therapy", when: "Made for bipolar", back: "Works on sleep, daily routines and relationships, to steady mood." },
        { id: "fft", front: "Family-focused therapy", when: "With your family", back: "Helps families understand bipolar, spot early signs and support their loved one." },
        { id: "ipt", front: "Interpersonal therapy", when: "When relationships are hard", back: "Helps with relationship difficulties that can add to depression. Usually 16 to 20 sessions." },
        { id: "psychoed", front: "Psychoeducation", when: "Often in a group", back: "Learning about bipolar and how to manage it, to reduce relapses and hospital stays." },
        { id: "course", front: "Self-management course", when: "Free, online, eight weeks", back: "Bipolar UK's course for people with a diagnosis, with tools and coping strategies." },
      ],
    },
    sources: [NHS_BIPOLAR, BUK_TREATMENT, BUK_THERAPY, BUK_PSYCHOED, RCP_BIPOLAR, RETHINK_BIPOLAR, NHS_CBT, BUK_COURSES, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How do you usually get NHS talking therapy for bipolar disorder?",
      options: [{ text: "A GP refers you", right: true }, { text: "Only by paying privately" }, { text: "It is not offered for bipolar" }],
      why: "For bipolar disorder, you'll need a GP to refer you for talking therapy such as CBT.",
    },
  },
  {
    id: "bpd-care-team",
    kicker: "Support",
    question: "Who is in my care team, and what goes in a crisis plan?",
    hook: "A psychiatrist, a community team and your GP, with a plan agreed while you are well. It means everyone knows what to do if things change.",
    short: "Bipolar disorder is usually managed by a psychiatrist and a community mental health team, with your GP taking over much of your care once things are stable. Your team should help you make a recovery plan with your early warning signs, ways of coping and who to call. An advance statement sets out how you want to be treated if you become unwell.",
    sections: [
      {
        heading: "Who is in your team",
        paragraphs: [
          "If a GP thinks you may have bipolar disorder, they will refer you to a psychiatrist. When you see a psychiatrist, you will also meet other members of the community mental health team.",
          "The team can include psychiatrists, mental health nurses, psychologists, social workers and occupational therapists. You might have a care coordinator, who organises and monitors your care.",
          "Once your medicine seems to be working, your GP can take over most of your care, though they will usually want you to stay in touch with a psychiatrist and the team.",
        ],
      },
      {
        heading: "A recovery plan",
        paragraphs: [
          "Your healthcare team should help you make a recovery plan. It should help you identify early warning signs and triggers, ways of coping, and people you can call if you become very distressed.",
          "You should be involved in planning your care, and your wishes should be listened to. You can also involve carers, friends or family.",
        ],
      },
      {
        heading: "Saying what you want in advance",
        paragraphs: [
          "An advance statement sets out how you would like to be treated if you become ill again and cannot decide for yourself. It is not legally binding, but professionals should make a practical effort to follow it.",
          "It can include the signs that you are becoming unwell, treatments that have worked, and your personal preferences.",
          "An advance decision lets you refuse specific treatments in future, and is legally binding, though health professionals do not legally have to follow it if you are in hospital under the Mental Health Act. You can only make either while you have the mental capacity to decide.",
        ],
      },
      {
        heading: "Crisis teams",
        paragraphs: [
          "A crisis team can support you during a mental health crisis in the community. They offer short-term support to help prevent a hospital stay, and can arrange hospital care if you are very unwell.",
          "If doctors are worried you're at risk of self-harm, suicide or harming someone else, you may need to stay in hospital or have support from a crisis team at home.",
        ],
      },
      {
        heading: "When you need help now",
        paragraphs: [
          "For urgent help that is not an emergency, get help from 111 online or call 111 and select the mental health option. You can also contact your crisis team or ask for an urgent GP appointment.",
          "Call 999 or go to A&E if someone's life is at risk or you do not feel you can keep yourself or someone else safe. A&E departments will have a psychiatrist available 24 hours a day.",
          "Samaritans are there to listen any time, day or night, free on 116 123.",
        ],
      },
    ],
    helps: [
      "Ask your team to help you make a recovery plan, with your early warning signs, ways of coping and who to call.",
      "Keep the name and phone number of a trusted professional to hand for an emergency.",
      "While you are well, write an advance statement, and talk it over with your doctor and family.",
      "Ask your healthcare team to help you create a safety plan.",
      "Before you are discharged by a team, ask how you can be referred back if you need them.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask your team about a recovery plan.",
      "Save a trusted professional's number.",
      "Start an advance statement.",
    ],
    ask: "What should go in my crisis plan, and who do I contact if I notice warning signs?",
    interactive: {
      kind: "timeline",
      title: "From a calm plan to urgent help",
      steps: [
        { id: "plan", when: "While you are well", title: "Make the plan", points: ["Ask your team to help you make a recovery plan.", "Note your early warning signs and triggers."] },
        { id: "advance", when: "While you are well", title: "Say what you want", points: ["Write an advance statement.", "Talk it over with your doctor and family."] },
        { id: "early", when: "Early signs", title: "Act early", points: ["Use the ways of coping in your plan.", "Contact your care team or GP."] },
        { id: "urgent", when: "Urgent, not an emergency", title: "Call 111", points: ["Select the mental health option.", "Or contact your crisis team."] },
        { id: "emergency", when: "If you cannot keep safe", title: "999 or A&E", points: ["Call 999 or go to A&E.", "You will not be wasting anyone's time."] },
      ],
    },
    sources: [NHS_BIPOLAR, RCP_BIPOLAR, RETHINK_BIPOLAR, RETHINK_TEAMS, RETHINK_ADVANCE, BUK_CRISIS, BUK_SUICIDE, NHS_URGENT, NHS_SUICIDAL, SAM_CONTACT],
    quiz: {
      question: "Is an advance statement legally binding?",
      options: [{ text: "No, but professionals should try to follow it", right: true }, { text: "Yes, in every situation" }, { text: "It has no effect at all" }],
      why: "It is not legally binding, but professionals should make a practical effort to follow it.",
    },
  },
  {
    id: "bpd-warning-signs",
    kicker: "Staying well",
    question: "How can I spot the early warning signs of an episode?",
    hook: "Changes in sleep, spending or plans can come before a high or a low. Noticing the mild signs gives you time to act.",
    short: "Learning your own early warning signs means you can get help early, and may avoid full episodes and hospital stays. Tracking your mood and sleep every day helps you see patterns. Disturbed sleep is a common early sign, and stress, even from happy events, can be a trigger.",
    sections: [
      {
        heading: "Why early signs matter",
        paragraphs: [
          "Learn how to recognise the signs that your mood is swinging out of control, so you can get help early. You may be able to avoid both full-blown episodes and hospital admissions.",
          "The key to staying well is noticing the mild symptoms, so you can take action to prevent the severe symptoms that disrupt daily life.",
        ],
      },
      {
        heading: "Tracking your mood",
        paragraphs: [
          "Tracking mood helps you recognise patterns, spot early warning signs of an episode, prevent relapse and gather information to share with your healthcare team.",
          "Bipolar UK's free Mood Scale, Mood Diary and Mood Tracker app let you record your daily mood and sleep. The app takes about two minutes a day, and keeps your data on your own device.",
          "Keeping a mood diary can also help you identify the things in your life that help you, and those that don't.",
        ],
      },
      {
        heading: "Sleep as a sign",
        paragraphs: [
          "Disturbed sleep patterns can be an early warning sign of a mood episode. In a Bipolar UK survey of 2000 people, 80% said lack of regular quality sleep was the biggest trigger for a first episode or relapse.",
          "Sleeping too much or too little is common in depression. Not needing, or not getting, enough sleep is common in hypomania and mania.",
        ],
      },
      {
        heading: "Stress and other triggers",
        paragraphs: [
          "Many people with bipolar say stressful life events, such as bereavement, job loss or money worries, can trigger bipolar symptoms.",
          "Happy events can be triggers too. In a Bipolar UK survey, one in five people said the stress of events like a holiday, a new partner or a promotion had triggered a mood episode.",
          "Signs of stress can also signal the move into a mood episode, so keeping an eye on your stress levels can help you notice early warning signs.",
        ],
      },
      {
        heading: "Acting on what you notice",
        paragraphs: [
          "Your recovery plan should list your early warning signs and triggers, ways of coping, and people you can call if you become very distressed.",
          "When big changes are coming up, you can increase your protective factors in advance: prioritise sleep, healthy eating and exercise, say no to commitments if you need to, and book a medication review.",
        ],
      },
    ],
    helps: [
      "Record your mood and sleep every day, with a diary or an app.",
      "Share your mood records with your healthcare team.",
      "Ask your team to put your early warning signs into a recovery plan.",
      "Before big changes, prioritise sleep and say no to extra commitments if you need to.",
      "Ask someone close to you to help notice if your mood is changing.",
      CRISIS,
    ],
    tryThisWeek: [
      "Record your mood and sleep daily.",
      "List your own early warning signs.",
      "Share the list with your team.",
    ],
    ask: "Can we write my early warning signs and triggers into my care plan?",
    interactive: {
      kind: "signs",
      title: "My early warning signs",
      intro: "Tick any you have noticed before a high or a low. The ones you tick make a list for your recovery plan.",
      signs: ["Sleeping less, or needing less sleep", "Sleeping much more than usual", "Racing thoughts", "Talking a lot or interrupting", "Spending more than usual", "Drinking more tea, coffee or alcohol", "Feeling irritable", "Cancelling plans and social activities", "Feeling anxious or overwhelmed", "Finding it hard to make decisions"],
      after: "Share these with your care team and put them in your recovery plan, so you and the people close to you can act early.",
      copyHeading: "Early warning signs I have noticed",
    },
    sources: [RCP_BIPOLAR, BUK_TRACK, BUK_MOOD_SCALE, BUK_APP, BUK_SLEEP, BUK_STRESS, RETHINK_BIPOLAR, BUK_SUPPORTING, BUK_SIGNS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What can be an early warning sign of a mood episode?",
      options: [{ text: "Disturbed sleep patterns", right: true }, { text: "Having a regular routine" }, { text: "Taking medicine as prescribed" }],
      why: "Disturbed sleep patterns can be an early warning sign of a mood episode.",
    },
  },
  {
    id: "bpd-routine",
    kicker: "Living with it",
    question: "How do sleep and routine help keep my mood steady?",
    hook: "Regular bedtimes, mealtimes and daylight help set the body clock, and a steady body clock helps steady mood.",
    short: "A regular routine, plenty of sleep, a healthy diet, regular exercise and managing stress can all help keep moods stable. People with bipolar may be more sensitive to things that disrupt the body clock, so regular sleep and wake times are key. Cutting down caffeine, alcohol and recreational drugs helps too.",
    sections: [
      {
        heading: "Why routine protects mood",
        paragraphs: [
          "There are some things you can do to help keep your moods stable: try to have a regular routine, get plenty of sleep, eat a healthy diet, exercise regularly, and try to avoid and manage stress.",
          "A routine gives structure to your day. It could be simple, such as eating at the same time each day, going to bed at the same time each day, and buying food once a week.",
        ],
      },
      {
        heading: "Sleep and the body clock",
        paragraphs: [
          "If you live with bipolar, good quality sleep is one of your key protective factors. Research suggests people with bipolar are more sensitive to things that disrupt the body clock.",
          "Eating times, waking times, socialising and physical activity times all affect your body clock. Try to eat breakfast soon after you wake, and avoid late evening meals and snacking if you can.",
        ],
      },
      {
        heading: "Building a sleep routine",
        paragraphs: [
          "Set a regular time to go to sleep and to wake up, and keep to it at weekends and on holidays as much as you can. If you're not in a routine, change your times by no more than an hour a day.",
          "Get out in daylight in the morning, even in winter or on a cloudy day. Limit digital devices in the hour before bed, and wind down with soft music, a warm bath or a good book.",
          "If you can't sleep after 15 minutes, get up and do something gentle in dim light, then go back to bed. If sleep problems go on for more than a few days, speak to your doctor.",
        ],
      },
      {
        heading: "Things that can unsettle mood",
        paragraphs: [
          "The NHS suggests not taking recreational drugs, not smoking, and not drinking too much alcohol. Avoid shift work, very long hours and flying at night or across time zones if you can.",
          "Do not drink lots of caffeinated drinks such as coffee, tea or cola. Caffeine delays sleepiness, and alcohol before bed means you're more likely to wake a lot.",
          "If you are dependent on alcohol, it can be very dangerous to stop drinking suddenly. Get medical help before you try to stop.",
        ],
      },
      {
        heading: "Activity, balance and enjoyment",
        paragraphs: [
          "Reasonably intense exercise for about 20 minutes, three times a week, seems to improve mood. Exercising in the morning rather than the late afternoon or evening can help with sleep.",
          "Try to balance work, leisure and time with family and friends. If you get too busy, you may bring on a manic episode, so make time to relax, and regularly do things you enjoy.",
        ],
      },
    ],
    helps: [
      "Go to bed and get up at the same times each day, including weekends.",
      "Get outside in daylight in the morning.",
      "Limit screens in the hour before bed.",
      "Cut down on caffeinated drinks, and do not take recreational drugs.",
      "Speak to your doctor if sleep problems go on for more than a few days.",
      CRISIS,
    ],
    tryThisWeek: [
      "Keep the same sleep and wake times.",
      "Get morning daylight.",
      "Put screens away an hour before bed.",
    ],
    ask: "Could my sleep, or anything in my routine, be affecting my mood?",
    interactive: {
      kind: "timeline",
      title: "A steady day",
      steps: [
        { id: "wake", when: "Morning", title: "Up at your usual time", points: ["Wake at the same time, even after a late night.", "Get out in daylight, even on a cloudy day."] },
        { id: "breakfast", when: "Soon after waking", title: "Breakfast", points: ["Eat breakfast as soon as you wake up.", "Keep meals at regular times."] },
        { id: "move", when: "Earlier in the day", title: "Exercise", points: ["Exercise in the morning if you can.", "Avoid exercise in the late afternoon or evening."] },
        { id: "evening", when: "Evening", title: "Keep it light", points: ["Avoid late meals and snacking.", "Avoid caffeine, alcohol and nicotine."] },
        { id: "wind-down", when: "An hour before bed", title: "Wind down", points: ["Put devices away.", "Try soft music, a warm bath or a book."] },
        { id: "bed", when: "Bedtime", title: "The same time each night", points: ["If you can't sleep after 15 minutes, get up.", "Do something gentle in dim light, then try again."] },
      ],
    },
    sources: [NHS_BIPOLAR, BUK_SLEEP, RCP_BIPOLAR, RETHINK_BIPOLAR, NHS_ALCOHOL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "If you can't sleep after 15 minutes in bed, what does Bipolar UK suggest?",
      options: [{ text: "Get up and do something gentle in dim light", right: true }, { text: "Look at your phone in bed" }, { text: "Have a cup of coffee" }],
      why: "If you can't sleep after 15 minutes, get up and do something gentle in dim light, then go back to bed.",
    },
  },
  {
    id: "bpd-work-money",
    kicker: "Work and money",
    question: "How can I protect my money and my job?",
    hook: "Spending in a high and comfort spending in a low are common. Plans made while you are well, and support at work, can protect you.",
    short: "Impulsive spending is a common symptom of hypomania and mania, and comfort spending is common in depression. Putting limits in place while you are well, and getting free debt advice, can help. At work, employers must make reasonable adjustments, Access to Work offers mental health support, and you need to tell the DVLA that you have bipolar disorder.",
    sections: [
      {
        heading: "Why money worries are common",
        paragraphs: [
          "Impulsive spending and giving money away are common symptoms of hypomania and mania. Comfort spending, buying things to feel better, is a common symptom of bipolar depression.",
          "In a Bipolar Commission survey, 1 in 2 people with bipolar had some form of debt because of their bipolar, and 1 in 5 had mounting debt that was out of their control. 2 in 5 said worrying about money had triggered a relapse.",
        ],
      },
      {
        heading: "Protecting your money while you are well",
        paragraphs: [
          "You may find it helpful to put changes in place when you're well, to help you avoid overspending if you become unwell. Bipolar UK suggests having no credit card or one with a low limit, and moving savings to an account that needs notice before a withdrawal.",
          "You can work with your carer and mental health team on an action plan for what they can do if you start to make poor financial decisions during a high. A Lasting Power of Attorney lets someone you trust manage your finances if you lack the mental capacity to.",
        ],
      },
      {
        heading: "If you are already in debt",
        paragraphs: [
          "Telling someone you trust can help you feel less alone, and is often the first step. If you're in debt, you're entitled to free professional help to manage your finances.",
          "If you run into trouble from spending too much when you are manic, your mental health team should help you negotiate with your bank or the people you owe.",
        ],
      },
      {
        heading: "Going back to work",
        paragraphs: [
          "If your job is still open, consider talking to a GP before going back. Then you can meet your employer or occupational health adviser, and ask about flexible hours, support from a colleague or a place to take a break.",
          "By law, employers must make reasonable adjustments for workers with long-term physical or mental conditions. If you want to return to work, your mental health team should offer you support with that.",
          "Access to Work can help you get or stay in work with a mental health condition, through a tailored plan and one-to-one sessions with a mental health professional.",
        ],
      },
      {
        heading: "Telling people, and driving",
        paragraphs: [
          "Think carefully about who you share your diagnosis with, and when. In a Bipolar UK survey, nearly a quarter of people had not told anyone at work about their diagnosis.",
          "You need to tell the DVLA if you have bipolar disorder. You can be fined up to £1,000 if you do not tell them about a medical condition that affects your driving.",
          "Bipolar UK says not to drive during an episode of depression, hypomania or mania, and to talk to your doctors about when it is safe to drive again.",
        ],
      },
    ],
    helps: [
      "While you are well, put limits on cards, overdrafts and savings to protect you if you become unwell.",
      "If you're in debt, get free professional help to manage your finances.",
      "Talk to a GP before going back to work, then meet your employer or occupational health adviser.",
      "Ask your employer about reasonable adjustments, and look into Access to Work.",
      "Tell the DVLA that you have bipolar disorder.",
      CRISIS,
    ],
    tryThisWeek: [
      "Set one spending limit while you're well.",
      "Get free debt advice if you need it.",
      "Look into Access to Work.",
    ],
    ask: "Could my team help me make a plan for money if my mood starts to rise?",
    interactive: {
      kind: "scenarios",
      title: "Money and work moments",
      scenarios: [
        {
          id: "big-buy",
          situation: "Your mood is rising and you want to buy something expensive today.",
          options: [{ text: "Use the plan you made while well", best: true }, { text: "Buy it straight away" }],
          why: "You may find it helpful to put changes in place when you're well, to help you avoid overspending if you become unwell.",
        },
        {
          id: "statements",
          situation: "Bank statements are piling up unopened.",
          options: [{ text: "Tell someone; get free debt advice", best: true }, { text: "Keep ignoring them" }],
          why: "Telling someone you trust can help you feel less alone. If you're in debt, you're entitled to free professional help.",
        },
        {
          id: "back-to-work",
          situation: "You feel ready to go back to work after time off.",
          options: [{ text: "Talk to a GP, then meet your employer", best: true }, { text: "Go back without telling anyone" }],
          why: "Consider talking to a GP before going back. Then you can meet your employer or occupational health adviser.",
        },
        {
          id: "dvla",
          situation: "You have just been diagnosed and you hold a driving licence.",
          options: [{ text: "Tell the DVLA", best: true }, { text: "Say nothing" }],
          why: "You need to tell the DVLA if you have bipolar disorder.",
        },
      ],
    },
    sources: [BUK_MONEY, RCP_BIPOLAR, RETHINK_BIPOLAR, NHS_RETURN_WORK, GOV_ATW, BUK_STIGMA, GOV_DRIVING, BUK_DRIVING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Who do you need to tell if you have bipolar disorder and drive?",
      options: [{ text: "The DVLA", right: true }, { text: "No one" }, { text: "Only your employer" }],
      why: "You need to tell the DVLA if you have bipolar disorder.",
    },
  },
  {
    id: "bpd-family",
    kicker: "Family and friends",
    question: "How can I support someone with bipolar disorder, and look after myself?",
    hook: "Your support really does make a difference. So does knowing when to get help, and when to take a break.",
    short: "Support from family and friends can help someone's recovery and build their resilience. Learn about the condition, be patient during lows, help with practical things during highs, and know what to do in a crisis. Look after yourself too: it's okay to take a break, and you can ask for a free carer's assessment.",
    sections: [
      {
        heading: "Your support makes a difference",
        paragraphs: [
          "Whether you're a partner, parent, child, friend or colleague, your support really does make a difference. A strong support network can help someone's recovery and build their resilience.",
          "Mania or depression can be distressing and exhausting for family and friends. It helps to try to understand the symptoms, treatment and self-management skills of the person you support.",
        ],
      },
      {
        heading: "During a low or a high",
        paragraphs: [
          "Someone who is very depressed may see everything in a negative light and not be able to say what they want you to do. Try to be as patient and understanding as possible.",
          "At the start of a manic mood swing, the person may seem happy and energetic. You can try to persuade them to get help, and make sure everyday tasks, like paying bills, are not forgotten.",
          "When unwell, people with bipolar can sometimes say and do things they don't mean. Try not to take things personally, but make sure your own needs are met too.",
        ],
      },
      {
        heading: "Practical ways to help",
        paragraphs: [
          "You could be their emergency contact, go with them to appointments if they would like you there, pick up prescriptions, and encourage routines around sleep, activity and eating.",
          "Find out if they have a crisis plan, and help them make one if they haven't. It helps to know the contact details of their mental health team or GP.",
        ],
      },
      {
        heading: "If you're worried it's a crisis",
        paragraphs: [
          "Get medical help immediately if someone is seriously neglecting themselves by not eating or drinking, behaving in a way that puts them or others at risk, or talking of harming or killing themselves.",
          "In an emergency, call 999 or go to A&E. For urgent advice, you can call NHS 111 for yourself or the person you care for, or ring their crisis team if they have one.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "Give yourself space and time to recharge. It's okay to say no, take a break and get support for yourself.",
          "If you care for someone, you can ask your local council for a free carer's assessment. Bipolar UK runs support groups for family and friends, as well as for people with bipolar.",
        ],
      },
    ],
    helps: [
      "Learn about bipolar: its symptoms, triggers and treatments.",
      "Offer to be their emergency contact.",
      "Help them make a crisis plan if they do not have one.",
      "Check in regularly, even when they seem well.",
      "Ask your local council for a free carer's assessment.",
      CRISIS,
    ],
    tryThisWeek: [
      "Learn one new thing about bipolar.",
      "Agree to be their emergency contact.",
      "Ask about a carer's assessment.",
    ],
    ask: "How can I be involved in my loved one's care plan, and what should I do in a crisis?",
    interactive: {
      kind: "scenarios",
      title: "Moments as a supporter",
      scenarios: [
        {
          id: "rising",
          situation: "Your partner is talking fast, sleeping little and planning big purchases.",
          options: [{ text: "Encourage help; keep bills on track", best: true }, { text: "Join in with the plans" }],
          why: "You can try to persuade them to get help, and make sure everyday tasks, like paying bills, are not forgotten.",
        },
        {
          id: "very-low",
          situation: "Your friend is very low and can't say what they need.",
          options: [{ text: "Be patient and understanding", best: true }, { text: "Tell them to cheer up" }],
          why: "They may not be able to say what they want you to do. Try to be as patient and understanding as possible.",
        },
        {
          id: "hurtful",
          situation: "They said something hurtful while they were unwell.",
          options: [{ text: "Try not to take it personally", best: true }, { text: "Keep it all to yourself" }],
          why: "When unwell, people with bipolar can sometimes say and do things they don't mean. Make sure your own needs are met too.",
        },
        {
          id: "harm",
          situation: "They are talking about harming themselves.",
          options: [{ text: "Get medical help immediately", best: true }, { text: "Wait to see if it passes" }],
          why: "Get medical help immediately if someone is talking of harming or killing themselves. In an emergency, call 999 or go to A&E.",
        },
        {
          id: "exhausted",
          situation: "You feel worn out from caring.",
          options: [{ text: "Take a break; ask for an assessment", best: true }, { text: "Keep going without help" }],
          why: "It's okay to say no, take a break and get support for yourself. A carer's assessment is free.",
        },
      ],
    },
    sources: [BUK_SUPPORTING, RCP_BIPOLAR, RETHINK_BIPOLAR, NHS_CARER_ASSESSMENT, EMM_HELPING, RETHINK_CRISIS_CARERS, NHS_BIPOLAR, BUK_GROUPS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What should you do if someone you support is talking of harming themselves?",
      options: [{ text: "Get medical help immediately", right: true }, { text: "Wait a few days" }, { text: "Keep it secret" }],
      why: "Get medical help immediately if someone is talking of harming or killing themselves.",
    },
  },
];
