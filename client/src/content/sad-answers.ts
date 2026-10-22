import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Seasonal affective disorder (SAD) page's pieces
// (content/library-conditions/mind-more.ts). Every sentence was written from wording checked on 22 October 2026
// on the pages listed under each answer's `sources`; nothing is added that those pages do not say. Most of it
// comes from the NHS (including Every Mind Matters and NHS inform), Rethink Mental Illness, Change Mental Health,
// The Sleep Charity, Samaritans and Shout. mind.org.uk could not be read today (it answers with a bot check), and
// the Royal College of Psychiatrists has no SAD page at its usual address, so neither is cited. Every answer ends
// its "What helps" list with the crisis routes exactly as the NHS gives them (999 or A&E, 111, Samaritans 116 123,
// Shout 85258), and the "help" answer is built from them. Safe-messaging guidance is followed throughout: no
// method details, no amounts of alcohol, nothing about weight. Nothing here suggests stopping or changing a
// medicine without the doctor, and anyone who drinks heavily is told not to stop suddenly without medical advice.
// General information only; it never replaces what a person's own GP or mental health team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const emm = (label: string, path: string): LearnSource => ({ label: `NHS Every Mind Matters: ${label}`, url: `https://www.nhs.uk/every-mind-matters/${path}` });
const sleepCharity = (label: string, path: string): LearnSource => ({ label: `The Sleep Charity: ${label}`, url: `https://thesleepcharity.org.uk/${path}` });
const samaritans = (label: string, path: string): LearnSource => ({ label: `Samaritans: ${label}`, url: `https://www.samaritans.org/how-we-can-help/${path}` });

const NHS_SAD = nhs("Seasonal affective disorder (SAD)", "mental-health/conditions/seasonal-affective-disorder-sad/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_FIND_TALKING = nhs("Find NHS talking therapies for anxiety and depression", "nhs-services/mental-health-services/find-nhs-talking-therapies-for-anxiety-and-depression/");
const NHS_ANTIDEP = nhs("Antidepressants", "medicines/antidepressants/");
const NHS_EXERCISE_DEP = nhs("Exercise for depression", "mental-health/self-help/guides-tools-and-activities/exercise-for-depression/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");
const NHS_HAPPIER = nhs("How to be happier", "mental-health/self-help/tips-and-support/how-to-be-happier/");
const NHS_EATWELL = nhs("The Eatwell Guide", "live-well/eat-well/food-guidelines-and-food-labels/the-eatwell-guide/");
const NHS_VITAMIN_D = nhs("Vitamin D", "conditions/vitamins-and-minerals/vitamin-d/");
const NHS_ALCOHOL = nhs("Alcohol-use disorder", "conditions/alcohol-use-disorder/");
const NHS_CUTTING_DOWN = nhs("Tips on cutting down on alcohol", "live-well/alcohol-advice/tips-on-cutting-down-alcohol/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const EMM_LOW_MOOD = emm("Low mood and depression", "mental-health-issues/low-mood/");
const EMM_SLEEP = emm("Sleep problems", "mental-health-issues/sleep/");
const EMM_SLEEP_BETTER = emm("How to fall asleep faster and sleep better", "mental-wellbeing-tips/how-to-fall-asleep-faster-and-sleep-better/");
const EMM_URGENT = emm("Urgent support", "urgent-support/");

const NHSI_SAD: LearnSource = { label: "NHS inform: Seasonal affective disorder (SAD)", url: "https://www.nhsinform.scot/illnesses-and-conditions/mental-health/seasonal-affective-disorder-sad/" };
const RETHINK_SAD: LearnSource = { label: "Rethink Mental Illness: Seasonal affective disorder (SAD)", url: "https://www.rethink.org/advice-and-information/about-mental-illness/mental-health-conditions/seasonal-affective-disorder-sad-symptoms-causes-and-treatments/" };
const CHANGE_SAD: LearnSource = { label: "Change Mental Health: Seasonal affective disorder (SAD)", url: "https://changemh.org/conditions/seasonal-affective-disorder-sad/" };
const SC_SAD = sleepCharity("Do you have the winter blues or seasonal affective disorder?", "do-you-have-the-winter-blues-or-seasonal-affective-disorder/");
const SC_CLOCK = sleepCharity("Prepare for the October clock change and protect your sleep this winter", "how-to-prepare-for-the-october-clock-change-and-protect-your-sleep-this-winter/");

const SAM_CONTACT = samaritans("Contact a Samaritan", "contact-samaritan/");
const SAM_SIGNS = samaritans("Signs you may be struggling to cope", "if-youre-having-difficult-time/signs-you-may-be-struggling-cope/");
const SHOUT: LearnSource = { label: "Shout: The UK's free, confidential, 24/7 mental health text service", url: "https://giveusashout.org/" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer but "help". */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you cannot keep yourself safe.";

export const sadAnswers: LearnArticle[] = [
  {
    id: "sad-what-it-is",
    kicker: "Understanding",
    question: "What is seasonal affective disorder?",
    hook: "For some people, mood drops every autumn and lifts in the spring. When that pattern is depression, it has a name, and it can be treated.",
    short: "Seasonal affective disorder (SAD) is a type of depression that comes and goes with the seasons. It usually happens in the winter and improves in the spring, although some people have it in summer instead. It is a recognised form of depression, not just the winter blues, and treatment can help manage the symptoms.",
    sections: [
      {
        heading: "Depression with a seasonal pattern",
        paragraphs: [
          "Seasonal affective disorder, or SAD, is a type of depression that usually happens in the winter. It is sometimes known as winter depression.",
          "The symptoms often begin in the autumn as the days start getting shorter. They are most severe during December, January and February, and in most cases they begin to improve in the spring before disappearing.",
        ],
      },
      {
        heading: "More than the winter blues",
        paragraphs: [
          "Many of us notice a change in mood during the cold, dark winter months. The Sleep Charity says the winter blues are very common, but they should not stop you enjoying life.",
          "SAD is different. It is a clinically recognised form of depression with distinct symptoms, and it affects how you feel, think and behave. For many people it has a significant effect on day-to-day life.",
        ],
      },
      {
        heading: "Winter for most, summer for some",
        paragraphs: [
          "Most people are affected in the winter, when there is less daylight. Some people have depression symptoms in summer instead, but this is less common.",
          "Some people also have a period of feeling more energetic than usual at the start of spring or summer.",
        ],
      },
      {
        heading: "How common it is",
        paragraphs: [
          "Rethink Mental Illness says some studies show about 1 in 15 people in the UK experience SAD each winter. About 3 in every 100 people are severely affected.",
          "Symptoms can go from mild to severe. Women and young people are more likely to experience it, but SAD can affect anyone.",
        ],
      },
      {
        heading: "Help is there",
        paragraphs: [
          "SAD can be difficult to deal with, but treatment can help manage your symptoms. Treatments include antidepressants, talking therapies and light therapy.",
          "See a GP if you think you might have SAD. If you are 18 or over, or 16 or over in some areas, you can also refer yourself directly to an NHS talking therapies service.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you might have seasonal affective disorder.",
      "If you are 18 or over, you can refer yourself to an NHS talking therapies service without a referral from a GP.",
      "Get as much natural daylight as you can, and try to go outside in the daytime every day.",
      "Stay in contact with friends and family, and keep up with your usual activities.",
      CRISIS,
    ],
    tryThisWeek: [
      "See a GP about your winter mood.",
      "Get outside in daylight every day.",
      "Keep in touch with friends and family.",
    ],
    ask: "Could my low mood each winter be SAD?",
    interactive: {
      kind: "timeline",
      title: "The SAD year",
      steps: [
        { id: "autumn", when: "Autumn", title: "Symptoms often begin", points: ["As the days start getting shorter.", "See a GP if you think it might be SAD."] },
        { id: "winter", when: "December to February", title: "Usually at its worst", points: ["Symptoms are most severe in these months.", "Treatment can help manage them."] },
        { id: "spring", when: "Spring", title: "Symptoms begin to improve", points: ["In most cases they improve, then disappear.", "Some people feel more energetic than usual."] },
        { id: "summer", when: "Summer", title: "A break, for most", points: ["Most people are affected in winter.", "Some have symptoms in summer instead, but this is less common."] },
        { id: "next", when: "Each year", title: "Planning for next winter", points: ["Many people need treatment every winter.", "It helps stop symptoms from coming back."] },
      ],
    },
    sources: [NHS_SAD, NHSI_SAD, RETHINK_SAD, CHANGE_SAD, SC_SAD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When are SAD symptoms usually most severe?",
      options: [{ text: "December, January and February", right: true }, { text: "In the middle of summer" }, { text: "Only on rainy days" }],
      why: "The symptoms often begin in the autumn. They are most severe during December, January and February.",
    },
  },
  {
    id: "sad-symptoms",
    kicker: "Symptoms",
    question: "What are the signs of SAD, and how is it different from the winter blues?",
    hook: "Feeling a bit flat in January is common. Feeling low, worn out and uninterested for weeks, winter after winter, may be something more.",
    short: "The main symptom of SAD is depression that happens in the winter and goes away in the summer. Signs include low mood, losing interest in things you usually enjoy, feeling guilty or hopeless, and being more tired, sleeping more and eating more than usual. The winter blues should not stop you enjoying life; if your mood affects all parts of your life, see a GP.",
    sections: [
      {
        heading: "The main signs",
        paragraphs: [
          "The main symptom of SAD is depression that happens in the winter and goes away in the summer. Symptoms include low mood, a lack of interest in things you usually enjoy, and feeling guilty, hopeless or worthless.",
          "You may feel restless or irritable, find it difficult to concentrate, be more hungry and eat more than usual, and be more tired and sleep more than usual.",
        ],
      },
      {
        heading: "Other changes people notice",
        paragraphs: [
          "NHS inform also lists low self-esteem, indecisiveness, tearfulness, stress, anxiety and a reduced sex drive. You may be less active than normal and feel lethargic, lacking energy.",
          "You might want to be alone more, and little things might annoy you. Some people sleep for longer than normal and find it hard to get up in the morning.",
        ],
      },
      {
        heading: "Winter blues or SAD?",
        paragraphs: [
          "Winter blues are very common, with people reporting feelings of lethargy and gloomier moods. But the winter blues should not affect your ability to enjoy life.",
          "If your mood and tiredness affect all parts of your life, from work to relationships, you may be experiencing SAD. It is important to recognise when the symptoms are more severe and more than just the winter blues.",
          "A low mood should lift after a few days. If it lasts longer than about 2 weeks, it may be a sign of depression.",
        ],
      },
      {
        heading: "Summer SAD",
        paragraphs: [
          "With winter SAD, you might sleep much more than usual and have a hard time getting out of bed. With summer SAD it can be the opposite, with insomnia or waking often during the night.",
        ],
      },
      {
        heading: "If dark thoughts come",
        paragraphs: [
          "Symptoms of SAD can include thoughts of suicide or self-harm. If you have thoughts like these, it is important to tell someone. You do not have to struggle alone, and help is available right now.",
          "Contact your GP practice if your mental health is affecting your daily life, you are not looking after yourself, or you are finding it hard to manage your responsibilities.",
        ],
      },
    ],
    helps: [
      "Contact your GP practice if your mental health is affecting your daily life.",
      "See a GP if you think you might have SAD, or you have been diagnosed and treatment is not helping.",
      "If a low mood lasts longer than about 2 weeks, find out what support is available.",
      "If you are having thoughts of suicide or self-harm, tell someone.",
      CRISIS,
    ],
    tryThisWeek: [
      "Contact your GP practice if mood affects daily life.",
      "Look for support if low mood lasts 2 weeks.",
      "Tell someone about dark thoughts.",
    ],
    ask: "Could my low mood each winter be SAD, or could something else explain it?",
    interactive: {
      kind: "signs",
      title: "Signs you have noticed",
      intro: "Tick any you notice in the darker months. The list can go with you to a GP.",
      signs: ["Low mood", "Losing interest in things I usually enjoy", "Feeling guilty, hopeless or worthless", "Feeling restless or irritable", "Difficulty concentrating", "Being more hungry and eating more", "Being more tired and sleeping more", "Wanting to be alone more"],
      after: "These can be signs of SAD, but other kinds of depression have similar symptoms. Take your list to a GP. If you have thoughts of suicide or self-harm, tell someone and get help now.",
      copyHeading: "Signs I have noticed in winter",
    },
    sources: [NHS_SAD, NHSI_SAD, RETHINK_SAD, CHANGE_SAD, SC_SAD, EMM_LOW_MOOD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How long can a low mood last before it may be a sign of depression?",
      options: [{ text: "Longer than about 2 weeks", right: true }, { text: "A single afternoon" }, { text: "Only a whole winter counts" }],
      why: "A low mood should lift after a few days. If it lasts longer than about 2 weeks, it may be a sign of depression.",
    },
  },
  {
    id: "sad-causes",
    kicker: "Causes",
    question: "Why do light and the seasons affect mood?",
    hook: "Shorter days do more than change the view from the window. Less daylight may nudge the body clock and the chemicals that steer mood and sleep.",
    short: "It is not known exactly what causes SAD, but it is thought to be linked to reduced daylight in winter. This may change brain chemicals like melatonin and serotonin, which affect your mood and your sleeping patterns. Family history, past stress and other mental health conditions may play a part too.",
    sections: [
      {
        heading: "Less daylight",
        paragraphs: [
          "It is not known exactly what causes SAD, but it is thought to be linked to reduced levels of daylight in winter. One theory is that a lack of light in the winter months affects your mood, sleep and appetite.",
          "Change Mental Health says lower levels of daylight in the north matter: around 1 in 10 people in Scotland are affected by SAD each year.",
        ],
      },
      {
        heading: "Melatonin and serotonin",
        paragraphs: [
          "Less daylight may cause changes to brain chemicals like melatonin and serotonin, which affect your mood and your sleeping patterns.",
          "The Sleep Charity explains that low light and darkness increase the production of melatonin, the hormone that makes you sleepy, and decrease serotonin, which regulates mood.",
        ],
      },
      {
        heading: "The body clock",
        paragraphs: [
          "Your sleeping pattern is also called your circadian rhythm, the body's internal clock. Seasonal changes in light exposure can affect this internal clock, leading to changes in mood.",
          "The October clock change can disrupt body clocks too. Even a one-hour difference can lead to temporary sleep disruption, similar to mild jet lag.",
        ],
      },
      {
        heading: "Other things that may play a part",
        paragraphs: [
          "Some people have SAD in summer, so other factors could be important too. If a family member has had SAD, depression or another mood disorder, you may be more likely to experience it.",
          "Past trauma, stress or big life changes may make people more vulnerable. Existing conditions, such as depression or bipolar disorder, can interact with seasonal changes and make SAD worse.",
        ],
      },
      {
        heading: "What you can change",
        paragraphs: [
          "You cannot change the season, but getting outdoors into natural light, even when it is not sunny, can help. Morning light is especially helpful for resetting your body clock.",
          "More sunlight can help reduce symptoms, but it is not a cure on its own. Managing SAD often involves a combination of light therapy, counselling and lifestyle changes.",
        ],
      },
    ],
    helps: [
      "Go outside in the daytime every day, to get as much natural daylight as you can.",
      "Let as much light as possible into your home.",
      "Try to spend at least 20 minutes outdoors each morning, even on cloudy days.",
      "Keep regular sleep and wake times to help steady your body clock.",
      "If you see a GP, expect questions about your family history and any seasonal changes.",
      CRISIS,
    ],
    tryThisWeek: [
      "Get outside in daylight every day.",
      "Spend 20 minutes outdoors each morning.",
      "Keep regular sleep and wake times.",
    ],
    ask: "Could anything else, such as another condition, be adding to my low mood in winter?",
    interactive: {
      kind: "risk-check",
      title: "What may be playing a part",
      intro: "Tick any that apply. Some you can work on; others are worth telling a GP about.",
      items: [
        { id: "daylight", label: "Little daylight in winter", note: "Thought to be the main link. Try to go outside in the daytime every day.", changeable: true },
        { id: "indoors", label: "Spending most days indoors", note: "Getting outdoors into natural light helps, even when it is not sunny.", changeable: true },
        { id: "sleep", label: "Irregular sleep and wake times", note: "Regular sleep and wake times help steady your internal body clock.", changeable: true },
        { id: "family", label: "Family history of SAD or depression", note: "Family history may play a role. A GP may ask about it.", changeable: false },
        { id: "stress", label: "Recent stress or big life changes", note: "These may make people more vulnerable. A GP or mental health professional can help you find ways to cope.", changeable: false },
        { id: "conditions", label: "Depression or bipolar disorder", note: "Existing conditions can interact with the seasons and make SAD worse.", changeable: false },
      ],
    },
    sources: [NHS_SAD, NHSI_SAD, RETHINK_SAD, CHANGE_SAD, SC_SAD, SC_CLOCK, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Which brain chemicals may change with less daylight?",
      options: [{ text: "Melatonin and serotonin", right: true }, { text: "Insulin and glucose" }, { text: "Adrenaline only" }],
      why: "Less daylight may cause changes to brain chemicals like melatonin and serotonin, which affect your mood and your sleeping patterns.",
    },
  },
  {
    id: "sad-diagnosis",
    kicker: "Diagnosis",
    question: "How is SAD recognised and diagnosed?",
    hook: "There is no single test. A GP looks for a pattern, and it can take a few winters before the pattern is clear.",
    short: "A GP will usually ask about your moods and how they change over time, and you may fill in a questionnaire. You may be diagnosed with SAD if you have had depression symptoms at a particular time of year for 2 years or longer. You do not need a diagnosis to get help: you can refer yourself to NHS talking therapies.",
    sections: [
      {
        heading: "Why it can take time",
        paragraphs: [
          "SAD is often difficult to diagnose, because many other types of depression have similar symptoms. It may take several years before you and your GP realise that your symptoms are forming a regular pattern.",
        ],
      },
      {
        heading: "Seeing a GP",
        paragraphs: [
          "If you see a GP about SAD symptoms, they will usually ask about your moods and how they change over time. You may also be asked to fill in a questionnaire about your symptoms.",
          "The GP may ask about your lifestyle, your eating and sleeping patterns, any seasonal changes in your thoughts and behaviour, and your personal and family history. They may also do a brief physical examination to check for any other reasons for your symptoms.",
        ],
      },
      {
        heading: "What the GP looks for",
        paragraphs: [
          "You may be diagnosed with SAD if you have had depression symptoms at a particular time of year for 2 years or longer.",
          "NHS inform says a diagnosis depends on whether you have had symptoms in the same seasons for 2 or more years in a row, whether periods of depression are followed by periods without depression, and whether there are any other reasons for your seasonal mood changes.",
        ],
      },
      {
        heading: "A pattern, not a separate label",
        paragraphs: [
          "Rethink Mental Illness explains that SAD is not a standalone diagnosis in the two manuals medical professionals use. Instead, they consider whether depression is linked to the seasons.",
          "Your GP might assess your symptoms and offer advice and treatment. If your symptoms are very challenging, they might refer you for an assessment with a specialist NHS mental health team.",
        ],
      },
      {
        heading: "You do not have to wait",
        paragraphs: [
          "You do not need a diagnosed mental health condition to refer yourself to NHS talking therapies for anxiety and depression. In England you can do this if you are 18 or over, or 16 or over in some areas.",
          "See a GP if you have been diagnosed with SAD and treatment is not helping.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you might have SAD.",
      "Be ready to talk about your moods and how they change over time.",
      "Expect questions about your sleep, eating, lifestyle and family history.",
      "Refer yourself to NHS talking therapies if you wish: you do not need a diagnosis.",
      "Go back to a GP if you have been diagnosed and treatment is not helping.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Think about how your mood changes over time.",
      "Look up NHS talking therapies.",
    ],
    ask: "Could my symptoms follow a seasonal pattern, or could something else explain them?",
    interactive: {
      kind: "timeline",
      title: "Getting it recognised",
      steps: [
        { id: "notice", when: "Over the years", title: "A pattern appears", points: ["Symptoms at the same time each year.", "It can take several years to see it."] },
        { id: "gp", when: "At the GP", title: "Talking about your moods", points: ["How they change over time.", "You may fill in a questionnaire."] },
        { id: "questions", when: "During the assessment", title: "Questions and a check", points: ["Sleep, eating, lifestyle and family history.", "Perhaps a brief physical examination."] },
        { id: "pattern", when: "2 years or more", title: "A seasonal pattern", points: ["Symptoms at a particular time of year for 2 years or longer.", "With periods without depression in between."] },
        { id: "next", when: "Next", title: "Treatment and support", points: ["Advice and treatment from the GP.", "Or a specialist team, if symptoms are very challenging."] },
      ],
    },
    sources: [NHS_SAD, NHSI_SAD, RETHINK_SAD, NHS_FIND_TALKING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How long do symptoms usually need to follow a seasonal pattern for a diagnosis of SAD?",
      options: [{ text: "2 years or longer", right: true }, { text: "One bad week" }, { text: "At least ten years" }],
      why: "You may be diagnosed with SAD if you have had depression symptoms at a particular time of year for 2 years or longer.",
    },
  },
  {
    id: "sad-daylight",
    kicker: "Self-help",
    question: "How much does daylight help, and how do I get more of it in winter?",
    hook: "Winter light is short and often grey, but it still counts. A walk in the morning may be one of the simplest things to try.",
    short: "Getting as much natural daylight as you can is one of the things the NHS suggests for SAD: try to go outside in the daytime every day. Morning light is especially helpful for the body clock, and a brisk walk adds exercise too. Daylight helps, but it is not a cure on its own.",
    sections: [
      {
        heading: "Why daylight matters",
        paragraphs: [
          "SAD is thought to be linked to reduced levels of daylight in winter. Getting as much natural daylight as you can is one of the things that can help your symptoms.",
          "The Sleep Charity says that, whether it is the winter blues or SAD, getting as much natural daylight as possible is key.",
        ],
      },
      {
        heading: "Get outside every day",
        paragraphs: [
          "Try to go outside in the daytime every day. Getting outdoors into natural light helps, even if it is not sunny.",
          "Spend time outdoors during daylight hours, especially in the morning. Morning light is especially helpful for resetting your body clock, so try to spend at least 20 minutes outdoors each morning, even on cloudy days.",
        ],
      },
      {
        heading: "Walk while you are out",
        paragraphs: [
          "A brisk walk in the morning can help wake you up. Regular exercise matters for mental health too, and even a brisk 10-minute walk can clear your mind and help you relax.",
          "Doing physical activity and going to green spaces are among the self-help options Rethink Mental Illness lists for SAD.",
        ],
      },
      {
        heading: "Indoors too",
        paragraphs: [
          "Let as much light as possible into your home.",
          "Some people also use a light box, a bright light that simulates daylight in winter. Speak to a GP before trying light therapy.",
        ],
      },
      {
        heading: "Part of the picture",
        paragraphs: [
          "More sunlight can help reduce SAD symptoms, but it is not a cure on its own. Managing SAD often involves a combination of light therapy, counselling and lifestyle changes.",
          "See a GP if you think you might have SAD, or if you have been diagnosed and treatment is not helping.",
        ],
      },
    ],
    helps: [
      "Try to go outside in the daytime every day.",
      "Spend at least 20 minutes outdoors each morning, even on cloudy days.",
      "Take a brisk walk in the morning to help wake you up.",
      "Let as much light as possible into your home.",
      "See a GP if you think you might have SAD, or treatment is not helping.",
      CRISIS,
    ],
    tryThisWeek: [
      "Go outside in daylight every day.",
      "Spend 20 minutes outdoors each morning.",
      "Let more light into your home.",
    ],
    ask: "Is getting more daylight enough for me, or should I try other treatments too?",
    interactive: {
      kind: "scenarios",
      title: "Finding the light",
      scenarios: [
        {
          id: "grey",
          situation: "It is grey and cloudy outside.",
          options: [{ text: "Go out anyway", best: true }, { text: "Wait for a sunny day" }],
          why: "Getting outdoors into natural light helps, even if it is not sunny. Morning light helps even on cloudy days.",
        },
        {
          id: "morning",
          situation: "You have half an hour free in the morning.",
          options: [{ text: "A brisk walk outside", best: true }, { text: "Another half hour in bed" }],
          why: "A brisk walk in the morning can help wake you up, and morning light helps reset your body clock.",
        },
        {
          id: "curtains",
          situation: "Your curtains stay closed most of the day.",
          options: [{ text: "Open them and let light in", best: true }, { text: "Keep them shut" }],
          why: "Let as much light as possible into your home.",
        },
        {
          id: "still-low",
          situation: "You get out every day but still feel low for weeks.",
          options: [{ text: "See a GP", best: true }, { text: "Just try harder on your own" }],
          why: "Daylight helps but is not a cure on its own. See a GP if you think you might have SAD.",
        },
      ],
    },
    sources: [NHS_SAD, RETHINK_SAD, CHANGE_SAD, SC_SAD, SC_CLOCK, NHS_EXERCISE_DEP, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Does daylight still help on a cloudy day?",
      options: [{ text: "Yes, natural light helps even if it is not sunny", right: true }, { text: "No, only sunshine counts" }, { text: "Only in summer" }],
      why: "Getting outdoors into natural light helps, even if it is not sunny.",
    },
  },
  {
    id: "sad-light-therapy",
    kicker: "Treatment",
    question: "Do light therapy boxes work, and how do I choose one?",
    hook: "A SAD lamp mimics daylight on dark mornings. The evidence is mixed, but many people find it helps. Check with a GP first, and buy carefully.",
    short: "Light therapy uses a bright light, sometimes called a SAD lamp or light box, to simulate daylight in winter. It is not usually available on the NHS, as there is not enough evidence to tell whether it works, but many people find it helps. Speak to a GP before trying it, and if you buy one, check it is bright enough, UV-free and has a UKCA or CE mark.",
    sections: [
      {
        heading: "What light therapy is",
        paragraphs: [
          "Light therapy involves using a bright light, sometimes called a SAD lamp or light box, to simulate daylight in winter. It simulates the sunlight that is missing during the darker winter months.",
        ],
      },
      {
        heading: "What the evidence says",
        paragraphs: [
          "Light therapy is not usually available on the NHS, as there is not enough evidence to tell whether it is effective. But many people find it helps their symptoms.",
          "NHS inform says there is mixed evidence about how well it works. Light therapy produces short-term results: it may help relieve your current symptoms, but you may still be affected by SAD next winter.",
        ],
      },
      {
        heading: "Check with a GP first",
        paragraphs: [
          "Speak to a GP before trying light therapy. It might not be suitable if you have certain eye conditions, or are taking some medicines that increase your sensitivity to light.",
          "Very bright light may also not suit you if your eyes are particularly sensitive to light, if you have epilepsy, or if you take certain medicines, such as antidepressants. If you have eye or skin problems, get medical advice before using a light box.",
        ],
      },
      {
        heading: "Choosing a light box",
        paragraphs: [
          "If you buy a light box or SAD lamp, make sure it is bright enough, UV-free and has a UKCA or CE mark. The NHS says 10,000 lux is standard.",
          "NHS inform suggests choosing one made by a fully certified manufacturer and medically proven to treat SAD. Speak to your GP if you are unsure about a particular product.",
        ],
      },
      {
        heading: "Using it",
        paragraphs: [
          "Follow the manufacturer's instructions for using your light. Light therapy may be more effective if it is used first thing in the morning, and The Sleep Charity says you would sit in front of one for around 30 minutes a day.",
          "Some people find looking at a very bright light uncomfortable. Speak to your GP if you have any side effects while using light therapy.",
        ],
      },
    ],
    helps: [
      "Speak to a GP before trying light therapy.",
      "If you buy one, check it is bright enough, UV-free and has a UKCA or CE mark.",
      "Follow the manufacturer's instructions for using your light.",
      "Try using it first thing in the morning, when it may be more effective.",
      "Speak to your GP if you get any side effects while using it.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask a GP before buying a light box.",
      "Check for UV-free and a UKCA or CE mark.",
      "Try it first thing in the morning.",
    ],
    ask: "Is a light box worth trying, and is it safe with my eyes and my medicines?",
    interactive: {
      kind: "flip-cards",
      title: "Before you buy a light box",
      intro: "Turn each card to see what to check, and when.",
      cards: [
        { id: "gp", front: "Ask a GP first", when: "Before you start", back: "It may not suit some eye conditions, epilepsy, or medicines that increase sensitivity to light." },
        { id: "bright", front: "Bright enough", when: "When choosing", back: "The NHS says 10,000 lux is standard." },
        { id: "uv", front: "UV-free", when: "When choosing", back: "Make sure the light box or SAD lamp is UV-free." },
        { id: "mark", front: "UKCA or CE mark", when: "When choosing", back: "Check for the mark. NHS inform suggests a fully certified manufacturer." },
        { id: "morning", front: "First thing in the morning", when: "When using it", back: "It may be more effective then. Follow the manufacturer's instructions." },
        { id: "side-effects", front: "Side effects", when: "If they happen", back: "Some people find very bright light uncomfortable. Speak to your GP about any side effects." },
      ],
    },
    sources: [NHS_SAD, NHSI_SAD, RETHINK_SAD, SC_SAD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Is light therapy usually available on the NHS?",
      options: [{ text: "No, there is not enough evidence to tell whether it works", right: true }, { text: "Yes, from every pharmacy" }, { text: "Only for children" }],
      why: "Light therapy is not usually available on the NHS, as there is not enough evidence to tell whether it is effective. But many people find it helps their symptoms.",
    },
  },
  {
    id: "sad-talking",
    kicker: "Treatment",
    question: "Can talking therapy help SAD, and how do I get it?",
    hook: "CBT and other talking therapies are free on the NHS, and in England you can refer yourself without seeing a GP.",
    short: "Talking therapies, such as cognitive behavioural therapy (CBT), are one of the NHS treatments for SAD. CBT helps you change how you think and act. If you are 18 or over, or 16 or over in some areas, you can refer yourself to NHS talking therapies, or a GP can refer you.",
    sections: [
      {
        heading: "A treatment for SAD",
        paragraphs: [
          "Treatments for SAD include talking therapies, such as cognitive behavioural therapy, or CBT. The Sleep Charity says CBT can be looked at as a long term treatment for SAD.",
          "Talking therapies involve talking to a trained professional about your thoughts, feelings and behaviours. You do not need to have a diagnosed mental health condition to get them.",
        ],
      },
      {
        heading: "CBT and counselling",
        paragraphs: [
          "CBT helps you change how you think and react to situations that are making you unhappy. Counselling is another type of talking therapy, where you talk to a trained counsellor about your worries and problems.",
          "You may be offered guided self-help first, working through a workbook or online course with a therapist's help. If your symptoms do not improve, you may be offered another type of therapy.",
        ],
      },
      {
        heading: "How to get it",
        paragraphs: [
          "If you live in England and are 18 or over, or 16 or over in some areas, you can refer yourself to NHS talking therapies without a referral from a GP. Or you can ask your GP to refer you.",
          "When you refer yourself, the service will contact you. If they can help, they will tell you how long you may need to wait for your first therapy session.",
        ],
      },
      {
        heading: "What happens in CBT",
        paragraphs: [
          "First you have an assessment with a therapist, in person, online or on the phone. You will usually have between 5 and 15 sessions of CBT, depending on what you are having it for.",
          "In sessions you talk about situations you find difficult, and how they make you think, feel and act. You will usually be asked to practise what you have learned between sessions, and it is important to do this for CBT to work.",
        ],
      },
      {
        heading: "Other routes",
        paragraphs: [
          "Talking therapies are sometimes available for free through your employer, university or local charities, or you can pay privately. Before choosing a private therapist, make sure they are registered with a professional organisation accredited by the Professional Standards Authority.",
          "Talking to someone you trust, or to an emotional support line, is also among the self-help options Rethink Mental Illness lists for SAD.",
        ],
      },
    ],
    helps: [
      "Refer yourself to NHS talking therapies if you are 18 or over and live in England.",
      "Speak to a GP if you are not sure about referring yourself.",
      "Practise what you learn between sessions: it matters for CBT to work.",
      "Keep using the skills you have learned after the course has finished.",
      "If you go private, check the therapist is registered with an accredited professional organisation.",
      CRISIS,
    ],
    tryThisWeek: [
      "Refer yourself to talking therapies.",
      "Ask a GP if you are unsure.",
      "Practise between sessions.",
    ],
    ask: "Would CBT or counselling suit me, and how long is the wait here?",
    interactive: {
      kind: "timeline",
      title: "Your path into talking therapy",
      steps: [
        { id: "refer", when: "Getting started", title: "Refer yourself or ask a GP", points: ["Refer yourself if you are 18 or over and live in England.", "Or ask your GP to refer you."] },
        { id: "contact", when: "After you refer", title: "The service contacts you", points: ["They tell you how long you may need to wait.", "And what information is shared with your GP."] },
        { id: "assess", when: "First appointment", title: "An assessment", points: ["In person, online or on the phone.", "The therapist recommends a type of therapy."] },
        { id: "sessions", when: "Usually 5 to 15 sessions", title: "Working on it together", points: ["Talk about situations you find difficult.", "Practise between sessions."] },
        { id: "after", when: "When it ends", title: "Keep using the skills", points: ["Your therapist will usually help you plan how.", "Speak to a GP if problems carry on."] },
      ],
    },
    sources: [NHS_SAD, NHS_TALKING, NHS_CBT, NHS_FIND_TALKING, NHSI_SAD, RETHINK_SAD, SC_SAD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do you need a GP referral for NHS talking therapies?",
      options: [{ text: "No, you can usually refer yourself", right: true }, { text: "Yes, always" }, { text: "Only after medicine has not worked" }],
      why: "If you are 18 or over, or 16 or over in some areas, you can refer yourself directly to an NHS talking therapies service without a referral from a GP.",
    },
  },
  {
    id: "sad-medicines",
    kicker: "Treatment",
    question: "Can antidepressants help SAD?",
    hook: "Antidepressants are one of the treatments for SAD. They take a few weeks to work, timing matters, and they should never be stopped suddenly without your doctor.",
    short: "Antidepressants are one of the treatments for SAD, and NHS inform says they are often only prescribed for it when symptoms are severe. They are thought to work best if started at the start of winter and continued until spring. They usually take 1 to 2 weeks to start having an effect, and should not be stopped suddenly or without talking to your doctor.",
    sections: [
      {
        heading: "Where medicine fits",
        paragraphs: [
          "Treatments for SAD include antidepressants, talking therapies and light therapy. Your GP will recommend the most suitable treatment for you, which may involve a combination of treatments.",
          "NHS inform says antidepressants are often only prescribed for SAD when the symptoms are severe. This is because there is limited evidence that they are effective.",
        ],
      },
      {
        heading: "Timing",
        paragraphs: [
          "It is thought antidepressants are most effective for SAD if they are taken at the start of winter, before the symptoms appear, and continued until spring.",
          "Many people need treatment every winter to stop symptoms from coming back. It is important to continue taking the medicine as prescribed, even if you start to feel better.",
        ],
      },
      {
        heading: "How they work, and how long they take",
        paragraphs: [
          "It is thought antidepressants work by affecting the activity of brain chemicals called neurotransmitters, such as serotonin. SSRIs are the most widely used type, and usually the first prescribed, because their side effects are generally easier to manage.",
          "Antidepressants usually take 1 to 2 weeks to start having an effect and can take up to 8 weeks to work fully. It is important to continue treatment, as it can take several weeks until your symptoms start to improve.",
        ],
      },
      {
        heading: "Side effects and checks",
        paragraphs: [
          "Many side effects may ease after a couple of weeks. When you first start, you will be seen by a doctor every 1 to 2 weeks to check how the medicine is working. Talk to your doctor if you are finding side effects hard to manage.",
          "It is not common, but some people have suicidal thoughts or an urge to self-harm when they start an antidepressant. Speak to your doctor straight away if this happens, and call 999 or go to A&E immediately if you are in danger or do not feel you can keep yourself safe.",
        ],
      },
      {
        heading: "Stopping safely",
        paragraphs: [
          "Do not stop taking an antidepressant suddenly or without talking to your doctor first. They will help you agree a plan to reduce your dose gradually.",
          "Taking some antidepressants with alcohol, some other medicines or St John's wort can cause problems. Check the leaflet that comes with your medicine, and ask a pharmacist or your doctor if you are unsure.",
        ],
      },
    ],
    helps: [
      "Keep taking your antidepressant as prescribed, even if you start to feel better.",
      "Talk to your doctor if side effects are hard to manage, or the medicine does not seem to help.",
      "Never stop an antidepressant suddenly; agree a plan with your doctor to reduce it gradually.",
      "Ask a pharmacist or your doctor before taking other medicines or herbal remedies with it.",
      "Speak to your doctor straight away if you have suicidal thoughts after starting.",
      CRISIS,
    ],
    tryThisWeek: [
      "Take it as prescribed.",
      "Note side effects for your doctor.",
      "Ask a pharmacist before other remedies.",
    ],
    ask: "Would an antidepressant help me, and when in the year should I take it?",
    interactive: {
      kind: "scenarios",
      title: "Antidepressant moments",
      scenarios: [
        {
          id: "slow",
          situation: "After a week, you notice no change.",
          options: [{ text: "Keep taking it, and talk to your doctor", best: true }, { text: "Give up on it" }],
          why: "Antidepressants usually take 1 to 2 weeks to start having an effect and up to 8 weeks to work fully.",
        },
        {
          id: "better",
          situation: "You have felt better for a few weeks.",
          options: [{ text: "Keep taking it as prescribed", best: true }, { text: "Stop it straight away" }],
          why: "Continue to take the medicine as prescribed, even if you start to feel better. Do not stop suddenly without your doctor.",
        },
        {
          id: "remedy",
          situation: "You would like to try St John's wort as well.",
          options: [{ text: "Ask a pharmacist or doctor first", best: true }, { text: "Just add it" }],
          why: "Taking St John's wort with antidepressants can cause problems. Ask a pharmacist or your doctor if you are unsure.",
        },
        {
          id: "thoughts",
          situation: "You have suicidal thoughts after starting.",
          options: [{ text: "Speak to your doctor straight away", best: true }, { text: "Keep it to yourself" }],
          why: "Speak to your doctor straight away. Call 999 or go to A&E if you do not feel you can keep yourself safe.",
        },
        {
          id: "spring",
          situation: "Spring comes and you would like to stop.",
          options: [{ text: "Agree a plan with your doctor", best: true }, { text: "Stop suddenly" }],
          why: "Do not stop suddenly. Your doctor will help you agree a plan to reduce your dose gradually.",
        },
      ],
    },
    sources: [NHS_SAD, NHSI_SAD, NHS_ANTIDEP, RETHINK_SAD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When are antidepressants thought to work best for SAD?",
      options: [{ text: "Started at the start of winter and continued until spring", right: true }, { text: "Only in midsummer" }, { text: "Only on bad days" }],
      why: "It is thought antidepressants are most effective for SAD if they are taken at the start of winter, before the symptoms appear, and continued until spring.",
    },
  },
  {
    id: "sad-routine",
    kicker: "Daily life",
    question: "What kind of winter routine helps with SAD?",
    hook: "When the mornings are dark and the evenings long, a steady routine gives the day a shape and helps your body clock keep time.",
    short: "A consistent daily routine, with regular sleep, meals and activity, can help steady your body clock and give the day some structure. The NHS suggests going to bed and waking up at the same time every day, getting outside in daylight, keeping up your usual activities and staying in touch with people. Avoid screens right before bed, and do not drink too much alcohol.",
    sections: [
      {
        heading: "Why routine helps",
        paragraphs: [
          "A daily schedule that includes regular sleep, meals and activity times can help stabilise your circadian rhythm, or body clock. It can also give a sense of structure and predictability.",
          "The NHS suggests keeping up with your usual activities and staying in contact with friends and family.",
        ],
      },
      {
        heading: "Sleep at the same times",
        paragraphs: [
          "Try to go to bed and wake up at the same time every day. Keep your routine the same when you can, even on days when you are not working.",
          "Most healthy adults need around 7 to 9 hours of sleep a night. With winter SAD, you might sleep much more than usual and have a hard time getting out of bed.",
        ],
      },
      {
        heading: "Light in the morning, calm at night",
        paragraphs: [
          "Morning light is especially helpful for resetting your body clock. Try to go outside in the daytime every day.",
          "Do not use electronic devices, such as smartphones, right before going to bed. Try not to use screens for an hour before bed, and relax with reading, breathing exercises or calming music instead.",
        ],
      },
      {
        heading: "Drinks in the evening",
        paragraphs: [
          "Do not drink too much alcohol or use illegal drugs. Alcohol can make you feel sleepy at first, but it can lead to poor sleep later in the night.",
          "The NHS recommends not smoking or drinking alcohol, tea or coffee for at least 6 hours before going to bed. If you drink heavily, do not stop suddenly without medical advice: the NHS says it can be very dangerous to stop drinking suddenly if you are dependent on alcohol.",
        ],
      },
      {
        heading: "Active and connected",
        paragraphs: [
          "Spending time with others, physical activity and time in green spaces are among the things Rethink Mental Illness lists for SAD.",
          "Try to be active in the morning or early afternoon. The NHS advises avoiding exercise in the 4 hours before bed.",
        ],
      },
    ],
    helps: [
      "Go to bed and wake up at the same time every day.",
      "Get outside in daylight every day, especially in the morning.",
      "Keep up your usual activities and stay in contact with friends and family.",
      "Put phones, tablets and computers away for an hour before bed.",
      "Do not drink too much alcohol; if you drink heavily, get medical advice before stopping.",
      CRISIS,
    ],
    tryThisWeek: [
      "Keep the same bed and wake times.",
      "Get daylight every morning.",
      "No screens for an hour before bed.",
    ],
    ask: "Could my sleep pattern be making my mood worse in winter?",
    interactive: {
      kind: "timeline",
      title: "A day that helps in winter",
      steps: [
        { id: "wake", when: "Waking", title: "The same time every day", points: ["Even on days when you are not working.", "Let as much light into your home as you can."] },
        { id: "morning", when: "Morning", title: "Get outside", points: ["Morning light helps reset your body clock.", "It helps even on cloudy days."] },
        { id: "day", when: "Daytime", title: "Keep active and connected", points: ["Keep up your usual activities.", "Stay in contact with friends and family."] },
        { id: "afternoon", when: "Afternoon", title: "Plan the evening", points: ["Avoid exercise in the 4 hours before bed.", "No tea, coffee or alcohol for 6 hours before bed."] },
        { id: "evening", when: "The last hour", title: "Wind down", points: ["Put phones and tablets away.", "Read, breathe slowly or listen to calming music."] },
        { id: "night", when: "Bedtime", title: "The same time each night", points: ["Most adults need around 7 to 9 hours.", "A quiet, dark, cool room can help."] },
      ],
    },
    sources: [NHS_SAD, CHANGE_SAD, RETHINK_SAD, EMM_SLEEP, EMM_SLEEP_BETTER, SC_CLOCK, NHS_ALCOHOL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does the NHS suggest for sleep if you have SAD?",
      options: [{ text: "Go to bed and wake up at the same time every day", right: true }, { text: "Sleep in as late as you can" }, { text: "Use your phone in bed to relax" }],
      why: "Try to go to bed and wake up at the same time every day.",
    },
  },
  {
    id: "sad-planning",
    kicker: "Planning",
    question: "How can I plan ahead before autumn comes?",
    hook: "SAD tends to come back at the same time each year. That makes it something you can plan for.",
    short: "Many people need treatment every winter to stop SAD symptoms from coming back. Talking to a GP about the right treatment, and about timing if you take antidepressants, can help. Getting ready for the October clock change, keeping a steady routine and considering vitamin D for autumn and winter are other ways to prepare.",
    sections: [
      {
        heading: "It tends to come back",
        paragraphs: [
          "SAD follows a pattern: symptoms often begin in the autumn as the days get shorter, and improve in the spring. Many people need treatment every winter to stop symptoms from coming back.",
          "Light therapy produces short-term results. It may help relieve your current symptoms, but you may still be affected by SAD next winter.",
        ],
      },
      {
        heading: "Talk to a GP",
        paragraphs: [
          "Your GP will recommend the most suitable treatment for you, which may be a combination of treatments. See a GP if you have been diagnosed with SAD and treatment is not helping.",
          "If antidepressants are part of your treatment, NHS inform says they are thought to be most effective if taken at the start of winter, before the symptoms appear, and continued until spring. Do not stop taking an antidepressant suddenly or without talking to your doctor first.",
        ],
      },
      {
        heading: "Before the clocks go back",
        paragraphs: [
          "The October clock change can disrupt body clocks, and shorter days can affect mood, energy and sleep. In the week before the clocks go back, try going to bed and getting up 10 to 15 minutes later each day.",
          "Even after the change, keep regular sleep and wake times. Avoid extra-long lie-ins, as oversleeping can make it harder to adjust.",
        ],
      },
      {
        heading: "Get the basics ready",
        paragraphs: [
          "If you are thinking about a light box, speak to a GP first. Check that it is bright enough, UV-free and has a UKCA or CE mark.",
          "Between October and early March we do not make enough vitamin D from sunlight. Government advice is that everyone should consider taking a daily supplement containing 10 micrograms of vitamin D during the autumn and winter.",
          "A daily schedule with regular sleep, meals and activity times can give a sense of structure through the darker months.",
        ],
      },
      {
        heading: "Through the winter and into spring",
        paragraphs: [
          "Plan to get outside in daylight every day, keep up with your usual activities and stay in contact with friends and family.",
          "Some people have a period of feeling more energetic than usual at the start of spring or summer.",
        ],
      },
    ],
    helps: [
      "Talk to a GP about which treatment, or combination of treatments, suits you best.",
      "If you take antidepressants, ask about timing: they may work best started at the start of winter.",
      "In the week before the clocks go back, go to bed and get up 10 to 15 minutes later each day.",
      "Keep regular sleep and wake times, and avoid extra-long lie-ins.",
      "Consider a daily vitamin D supplement during the autumn and winter.",
      CRISIS,
    ],
    tryThisWeek: [
      "Talk to a GP about treatment.",
      "Shift bedtime 10 to 15 minutes later.",
      "Consider vitamin D for winter.",
    ],
    ask: "Should I start treatment before my symptoms usually begin this year?",
    interactive: {
      kind: "timeline",
      title: "Getting ready for winter",
      steps: [
        { id: "gp", when: "Ahead of winter", title: "Talk to a GP", points: ["Ask which treatment, or combination, suits you.", "Antidepressants may work best started at the start of winter."] },
        { id: "clocks", when: "The week before the clocks go back", title: "Shift your bedtime", points: ["Go to bed and get up 10 to 15 minutes later each day.", "Avoid extra-long lie-ins afterwards."] },
        { id: "autumn", when: "Autumn and winter", title: "Light and vitamin D", points: ["Get outside in daylight every day.", "Consider a daily vitamin D supplement."] },
        { id: "deep-winter", when: "December to February", title: "Keep going", points: ["Symptoms are usually most severe now.", "Keep up activities and stay in contact with people."] },
        { id: "spring", when: "Spring", title: "Symptoms usually improve", points: ["Some people feel more energetic than usual.", "Do not stop an antidepressant without your doctor."] },
      ],
    },
    sources: [NHS_SAD, NHSI_SAD, SC_CLOCK, NHS_ANTIDEP, CHANGE_SAD, NHS_VITAMIN_D, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does The Sleep Charity suggest in the week before the clocks go back?",
      options: [{ text: "Going to bed and getting up 10 to 15 minutes later each day", right: true }, { text: "Staying up all night" }, { text: "A long lie-in afterwards" }],
      why: "In the week before the clocks go back, try going to bed and getting up 10 to 15 minutes later each day.",
    },
  },
  {
    id: "sad-food-activity",
    kicker: "Daily life",
    question: "Do food and exercise make a difference to SAD?",
    hook: "Low energy makes moving harder, and moving helps energy. Small amounts of activity, balanced meals and less alcohol can all play a part.",
    short: "Regular exercise is one of the things the NHS suggests for SAD, and it is especially useful for people with less severe depression. Even a brisk 10-minute walk can clear your mind and help you relax. A balanced diet helps your brain and body work well, and cutting down on alcohol may put you in a better mood.",
    sections: [
      {
        heading: "Why moving helps",
        paragraphs: [
          "Getting regular exercise is one of the things that can help SAD symptoms. Regular exercise can boost your mood if you have depression, and it is especially useful for people with less severe depression.",
          "Even moderate exercise releases chemicals in your brain that lift your mood, and it can help you sleep better and have more energy. The Sleep Charity says exercise has a strong connection with helping mental health.",
        ],
      },
      {
        heading: "Start small",
        paragraphs: [
          "Any type of exercise is useful, as long as it suits you. If you have not exercised for a while, start gradually and aim to build up towards 150 minutes of moderate activity a week.",
          "Any exercise is better than none, and even a brisk 10-minute walk can clear your mind and help you relax. Change Mental Health suggests outdoor walks, or exercise classes with a social side.",
          "If you have not exercised for a long time, or are worried about how exercise might affect your health, ask a GP about exercise on prescription.",
        ],
      },
      {
        heading: "Eating well",
        paragraphs: [
          "With SAD you may be more hungry and eat more than usual. Aim for a balanced diet that includes all the main food groups: a good diet helps your brain and body work efficiently, and healthy choices can help you feel emotionally stronger.",
          "The Eatwell Guide suggests at least 5 portions of a variety of fruit and vegetables a day, and choosing higher fibre or wholegrain starchy foods. Change Mental Health says fruits, vegetables and whole grains provide nutrients that can help stabilise mood and energy levels.",
        ],
      },
      {
        heading: "Vitamin D in winter",
        paragraphs: [
          "Between October and early March we do not make enough vitamin D from sunlight. Everyone should consider taking a daily supplement containing 10 micrograms of vitamin D during the autumn and winter.",
        ],
      },
      {
        heading: "Go easy on alcohol",
        paragraphs: [
          "Do not drink too much alcohol or use illegal drugs. When times are hard it is tempting to drink because it numbs painful feelings, but it can also make you feel more depressed.",
          "There is a strong link between heavy drinking and depression, so cutting down may put you in a better mood generally. If you drink heavily, do not stop suddenly without medical advice: the NHS says it can be very dangerous to stop drinking suddenly if you are dependent on alcohol.",
        ],
      },
    ],
    helps: [
      "Get regular exercise, starting gradually if you have not been active for a while.",
      "Try a brisk 10-minute walk to clear your mind and help you relax.",
      "Aim for a balanced diet, with at least 5 portions of fruit and vegetables a day.",
      "Consider a daily vitamin D supplement during the autumn and winter.",
      "Cut down on alcohol; if you drink heavily, get medical advice before stopping.",
      CRISIS,
    ],
    tryThisWeek: [
      "Take a brisk 10-minute walk.",
      "Add fruit and vegetables to your meals.",
      "Consider vitamin D this winter.",
    ],
    ask: "Could exercise on prescription help me this winter?",
    interactive: {
      kind: "risk-check",
      title: "Winter habits that drain energy",
      intro: "Tick any that sound like your winter. Each is something you can change, a little at a time.",
      items: [
        { id: "still", label: "Long periods sitting still", note: "Break up long periods of not moving with some activity. Any exercise is better than none.", changeable: true },
        { id: "no-walk", label: "Rarely going out for a walk", note: "Even a brisk 10-minute walk can clear your mind and help you relax.", changeable: true },
        { id: "fruit-veg", label: "Few fruit and vegetables", note: "Aim for at least 5 portions of a variety of fruit and vegetables a day.", changeable: true },
        { id: "alcohol", label: "Drinking to cope", note: "Alcohol can make you feel more depressed. If you drink heavily, get medical advice before stopping.", changeable: true },
        { id: "vitamin-d", label: "No vitamin D in winter", note: "Everyone should consider a daily vitamin D supplement in the autumn and winter.", changeable: true },
        { id: "alone", label: "Exercising alone, without motivation", note: "Try outdoor walks or classes with a social side, or exercise with a friend.", changeable: true },
      ],
    },
    sources: [NHS_SAD, NHS_EXERCISE_DEP, NHS_ACTIVITY, NHS_HAPPIER, NHS_EATWELL, CHANGE_SAD, SC_SAD, NHS_ALCOHOL, NHS_CUTTING_DOWN, NHS_VITAMIN_D, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Which kind of exercise helps?",
      options: [{ text: "Any type, as long as it suits you", right: true }, { text: "Only hours in a gym" }, { text: "None until spring" }],
      why: "Any type of exercise is useful, as long as it suits you and you do enough of it.",
    },
  },
  {
    id: "sad-help",
    kicker: "Urgent help",
    question: "What should I do if SAD gets worse?",
    hook: "Winter can feel very long when you are low. If things get worse, help is there at any hour, and you do not have to wait to use it.",
    short: "If SAD is getting worse or treatment is not helping, see a GP. For urgent help that is not an emergency, call 111 and select the mental health option. You can call Samaritans free on 116 123 at any time, or text SHOUT to 85258. If your life is at risk or you cannot keep yourself safe, call 999 or go to A&E.",
    sections: [
      {
        heading: "When treatment is not helping",
        paragraphs: [
          "See a GP if you have been diagnosed with SAD and treatment is not helping. A GP can advise you about helpful treatments and help you access mental health services.",
          "Symptoms of SAD can include thoughts of suicide or self-harm. If you're feeling like you want to end your life, it's important to tell someone. You do not have to struggle with difficult feelings alone.",
        ],
      },
      {
        heading: "Signs you may be struggling",
        paragraphs: [
          "Samaritans describe signs such as lacking energy, feeling exhausted all the time, finding it hard to concentrate, feeling tearful, not wanting to be with people, and using alcohol or drugs to cope with feelings.",
          "You don't have to feel suicidal to get in touch with Samaritans. Only 1 person in 5 who calls says they feel suicidal.",
        ],
      },
      {
        heading: "Urgent help that is not an emergency",
        paragraphs: [
          "Get help from 111 online, or call 111 and select the mental health option. 111 will tell you the right place to get help, and you may be able to speak to a trained mental health professional over the phone.",
          "You can also call a GP and ask for an emergency appointment, or contact your mental health crisis team if you have one.",
        ],
      },
      {
        heading: "Someone to talk to, any hour",
        paragraphs: [
          "Samaritans are there to listen at any time of the day or night. Call free on 116 123 from any phone. They won't judge you or tell you what to do.",
          "If you do not want to talk to someone over the phone, text SHOUT to 85258. This text line is open 24 hours a day, every day.",
        ],
      },
      {
        heading: "If your life is in danger",
        paragraphs: [
          "Call 999 or go to A&E now if someone's life is at risk, or you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one. You will not be wasting anyone's time.",
          "Try to focus on getting through today. Get yourself to a safe place, like a friend's house, be around other people, and stay away from drugs and alcohol. It may help to make a safety plan to use if you need it.",
        ],
      },
    ],
    helps: [
      "If your life is at risk or you cannot keep yourself safe, call 999 or go to A&E.",
      "For urgent help that is not an emergency, call 111 and select the mental health option, or use 111 online.",
      "Call Samaritans free on 116 123, at any time of the day or night.",
      "If you would rather not talk on the phone, text SHOUT to 85258.",
      "Call a GP and ask for an emergency appointment, or contact your crisis team if you have one.",
      "Let family or friends know what's going on for you.",
    ],
    tryThisWeek: [
      "Call 111 for urgent help.",
      "Call Samaritans on 116 123.",
      "Tell family or friends how you feel.",
    ],
    ask: "Who do I contact if things get worse quickly?",
    interactive: {
      kind: "flip-cards",
      title: "Who to contact",
      intro: "Turn each card to see when to use it. All of these are free.",
      cards: [
        { id: "999", front: "999 or A&E", when: "If a life is at risk", back: "Call 999 or go to A&E if you cannot keep yourself safe. You will not be wasting anyone's time." },
        { id: "111", front: "NHS 111", when: "Urgent help, not an emergency", back: "Call 111 and select the mental health option, or use 111 online. They will tell you where to get help." },
        { id: "samaritans", front: "Samaritans: 116 123", when: "Any time, day or night", back: "Free from any phone. Trained volunteers listen, and will not judge you or tell you what to do." },
        { id: "shout", front: "Shout: text SHOUT to 85258", when: "If you would rather not talk", back: "A free, confidential text line, open 24 hours a day, every day." },
        { id: "gp", front: "A GP", when: "For an emergency appointment", back: "Call and ask for an emergency appointment. A GP can also help you access mental health services." },
        { id: "crisis-team", front: "Your crisis team", when: "If you already have one", back: "Contact your mental health crisis team. NHS 111 can help you find the support you need." },
      ],
    },
    sources: [NHS_URGENT, NHS_SUICIDAL, EMM_URGENT, SAM_CONTACT, SAM_SIGNS, SHOUT, NHS_SAD],
    quiz: {
      question: "What number can you call free, at any time, to talk to Samaritans?",
      options: [{ text: "116 123", right: true }, { text: "There is no free number" }, { text: "Only a daytime line" }],
      why: "Samaritans are there to listen at any time of the day or night. Call free on 116 123 from any phone.",
    },
  },
];
