import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Anxiety page's pieces (content/library-conditions/cancer-mind-digestion.ts).
// Every sentence was written from wording checked on 21 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (including
// Every Mind Matters), the Royal College of Psychiatrists, Anxiety UK, The Sleep Charity and the Stroke
// Association. mind.org.uk could not be read today (it answers with a bot check), so no Mind page is cited.
// Every answer ends its "What helps" list with the crisis routes exactly as the NHS gives them (999, 111,
// Samaritans 116 123, Shout 85258). General information only; it never replaces what a person's own GP,
// therapist or mental health team tells them, and no medicine should be stopped or changed without the doctor.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const emm = (label: string, path: string): LearnSource => ({ label: `NHS Every Mind Matters: ${label}`, url: `https://www.nhs.uk/every-mind-matters/${path}` });
const auk = (label: string, path: string): LearnSource => ({ label: `Anxiety UK: ${label}`, url: `https://www.anxietyuk.org.uk/${path}` });
const sleepCharity = (label: string, path: string): LearnSource => ({ label: `The Sleep Charity: ${label}`, url: `https://thesleepcharity.org.uk/${path}` });

const NHS_GAD = nhs("Generalised anxiety disorder (GAD)", "mental-health/conditions/generalised-anxiety-disorder-gad/");
const NHS_AFP = nhs("Anxiety, fear and panic", "mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/anxiety-fear-panic/");
const NHS_PANIC = nhs("Panic disorder", "mental-health/conditions/panic-disorder/");
const NHS_HEALTH = nhs("Health anxiety", "mental-health/conditions/health-anxiety/");
const NHS_SOCIAL = nhs("Social anxiety (social phobia)", "mental-health/conditions/social-anxiety/");
const NHS_PHOBIAS = nhs("Phobias", "mental-health/conditions/phobias/");
const NHS_TT = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_BREATHING = nhs("Breathing exercises for stress", "mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/");
const NHS_MINDFULNESS = nhs("Mindfulness", "mental-health/self-help/tips-and-support/mindfulness/");
const NHS_HAPPIER = nhs("How to be happier", "mental-health/self-help/tips-and-support/how-to-be-happier/");
const NHS_SERTRALINE = nhs("Sertraline", "medicines/sertraline/");
const NHS_ANTIDEPRESSANTS = nhs("Antidepressants", "medicines/antidepressants/");
const NHS_PREGABALIN = nhs("About pregabalin", "medicines/pregabalin/about-pregabalin/");
const NHS_PROPRANOLOL = nhs("About propranolol", "medicines/propranolol/about-propranolol/");
const NHS_INSOMNIA = nhs("Insomnia", "conditions/insomnia/");
const NHS_EXERCISE_BENEFITS = nhs("Benefits of exercise", "live-well/exercise/exercise-health-benefits/");
const NHS_ACTIVITY_GUIDELINES = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");
const NHS_EXERCISE_DEPRESSION = nhs("Exercise for depression", "mental-health/self-help/guides-tools-and-activities/exercise-for-depression/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const EMM_ANXIETY = emm("Managing anxiety", "mental-health-issues/anxiety/");
const EMM_SLEEP = emm("Sleep problems", "mental-health-issues/sleep/");
const EMM_CBT = emm("Self-help CBT techniques", "mental-wellbeing-tips/self-help-cbt-techniques/");
const EMM_WORRIES = emm("Tackling your worries", "mental-wellbeing-tips/self-help-cbt-techniques/tackling-your-worries/");
const EMM_FEARS = emm("Facing your fears", "mental-wellbeing-tips/self-help-cbt-techniques/facing-your-fears/");
const EMM_REFRAME = emm("Reframing unhelpful thoughts", "mental-wellbeing-tips/self-help-cbt-techniques/reframing-unhelpful-thoughts/");
const EMM_HELPING = emm("Helping others with mental health problems", "supporting-others/helping-others/");

const RCPSYCH_GAD: LearnSource = { label: "Royal College of Psychiatrists: Anxiety and generalised anxiety disorder (GAD)", url: "https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/anxiety-and-generalised-anxiety-disorder-(gad)" };

const AUK_ABOUT = auk("About anxiety", "get-help/about-anxiety-and-anxiety-disorders/");
const AUK_HEALTH = auk("Health anxiety", "anxiety-type/health-anxiety/");
const AUK_GAD = auk("Generalised anxiety disorder (GAD)", "anxiety-type/generalised-anxiety-disorder/");
const AUK_SOCIAL = auk("Social phobia / social anxiety", "anxiety-type/social-anxiety/");
const AUK_PHOBIAS = auk("Phobias", "anxiety-type/phobias/");
const AUK_AGORAPHOBIA = auk("Agoraphobia", "anxiety-type/agoraphobia/");
const AUK_CBT = auk("Cognitive behavioural therapy (CBT)", "get-help/cognitive-behavioural-therapy-cbt/");
const AUK_SUPPORTING = auk("Supporting others", "get-help/supporting-others/");
const AUK_SELF_CARE = auk("Self-care tools", "self-care-tools/");

const SC_CAFFEINE = sleepCharity("Caffeine and sleep", "adults/caffeine-and-sleep/");
const SC_ALCOHOL = sleepCharity("Alcohol and sleep", "adults/alcohol-and-sleep/");
const SC_MENTAL_HEALTH = sleepCharity("Mental health", "adults/mental-health/");
const SC_EXERCISE = sleepCharity("Exercise and sleep", "adults/exercise-and-sleep/");

const STROKE_DEPRESSION_ANXIETY: LearnSource = { label: "Stroke Association: Depression and anxiety", url: "https://www.stroke.org.uk/stroke/effects/emotional-and-behavioural/depression-and-anxiety" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you cannot keep yourself safe.";

export const anxietyAnswers: LearnArticle[] = [
  {
    id: "anx-what-it-is",
    kicker: "Understanding",
    question: "What is anxiety doing in my body?",
    hook: "Anxiety is the body's alarm system. It can help in danger, but sometimes it goes off when nothing is wrong.",
    short: "Anxiety is a natural response to pressure, or to feeling afraid or threatened. Your body releases stress hormones, such as adrenaline and cortisol, which can make your heart beat faster and make you sweat. It becomes a problem when it is very strong, goes on most of the time or affects your daily life, and it is both treatable and manageable.",
    sections: [
      {
        heading: "An alarm that is meant to help",
        paragraphs: [
          "Anxiety is the unpleasant feeling we get when we are in a stressful, threatening or difficult situation. Most of us will feel it at some point, and it usually goes away when the situation changes.",
          "In difficult situations, anxiety tells us that something is wrong and keeps us alert. Its physical feelings prepare the body to run away from danger or to protect ourselves. This is called the fight or flight response.",
        ],
      },
      {
        heading: "Adrenaline and a racing heart",
        paragraphs: [
          "When you feel anxious or scared, your body releases stress hormones, such as adrenaline and cortisol. This can be helpful in some situations, but it can also cause physical symptoms, such as an increased heart rate and more sweating.",
          "For some people, the fight or flight response is heightened or over-sensitive. That can lead to fear in situations that are not really dangerous, such as taking public transport or travelling in a lift. In some people, it might cause a panic attack.",
        ],
      },
      {
        heading: "What it can feel like",
        paragraphs: [
          "Anxiety can affect how you feel physically, mentally and how you behave. In the body, it can cause a faster, irregular or more noticeable heartbeat, feeling light-headed and dizzy, headaches, chest pains, sweating, breathlessness and shaking.",
          "It can also cause indigestion, stomach cramps, feeling sick, a dry mouth, muscle tension and pain, and numbness or tingling in the fingers, toes or lips. In the mind, people describe feeling tense, being unable to relax or concentrate, and fearing the worst.",
          "It is not always easy to recognise when anxiety is the reason you are feeling or acting differently. Some people worry that their symptoms are a sign of physical illness, and this can make their anxiety even worse.",
        ],
      },
      {
        heading: "When the alarm gets stuck",
        paragraphs: [
          "Anxiety can become a problem when it is very strong, you feel anxious all or most of the time, there is no obvious reason for it, or it affects your daily life.",
          "It is more likely to be generalised anxiety disorder if you feel anxious most of the time and it affects your everyday life. When anxiety goes on for a long time, it is easy to start to feel depressed.",
        ],
      },
      {
        heading: "Getting it checked",
        paragraphs: [
          "Regular anxiety, fear or panic can also be the main symptom of several health conditions. Do not self-diagnose: speak to a GP if you are worried about how you are feeling.",
          "If you cannot tell whether shortness of breath is from anxiety, or you are worried about any other symptoms, see a GP. The good news is that anxiety is both treatable and manageable.",
        ],
      },
    ],
    helps: [
      "See a GP if you are struggling to cope with anxiety, or the things you are trying are not helping.",
      "Keep a diary of what you are doing and how you feel at different times, to help you understand why you are anxious.",
      "Try calming breathing exercises, and regular exercise such as running, walking, swimming or yoga.",
      "Talk about your feelings to a friend, family member, health professional or counsellor.",
      "If you are 18 or over, you can refer yourself to an NHS talking therapies service without talking to a GP.",
      CRISIS,
    ],
    tryThisWeek: [
      "Keep a short feelings diary.",
      "Try a calming breathing exercise.",
      "Talk to someone you trust.",
    ],
    ask: "Could anything else, such as my heart or thyroid, be adding to these symptoms?",
    interactive: {
      kind: "signs",
      title: "What your body is doing",
      intro: "Tick any you notice when you feel anxious. Many of them are the body's alarm system at work.",
      signs: ["A faster or more noticeable heartbeat", "Feeling light-headed or dizzy", "Chest pains", "Breathlessness", "Sweating or shaking", "Feeling sick or stomach cramps", "Headaches", "Tingling in the fingers, toes or lips"],
      after: "Anxiety can cause all of these, but so can other conditions. Do not self-diagnose: speak to a GP, especially if you cannot tell whether breathlessness is from anxiety.",
      copyHeading: "Symptoms I notice when I feel anxious",
    },
    sources: [NHS_AFP, RCPSYCH_GAD, EMM_ANXIETY, EMM_FEARS, NHS_GAD, AUK_ABOUT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does the body release when you feel anxious or scared?",
      options: [{ text: "Stress hormones, such as adrenaline and cortisol", right: true }, { text: "Insulin, to lower blood sugar" }, { text: "Nothing: it is all in the mind" }],
      why: "When you feel anxious or scared, your body releases stress hormones, such as adrenaline and cortisol.",
    },
  },
  {
    id: "anx-panic",
    kicker: "Panic",
    question: "What is a panic attack, and is it dangerous?",
    hook: "A panic attack can feel as if your body is failing. It is frightening, but it is not dangerous, and it passes.",
    short: "A panic attack is a rush of intense mental and physical symptoms, such as a racing heart, breathlessness and a feeling of dread. Most last between 5 and 20 minutes. They are frightening but not dangerous, although new symptoms that could be something physical need checking straight away.",
    sections: [
      {
        heading: "A sudden rush",
        paragraphs: [
          "During a panic attack you get a rush of intense mental and physical symptoms. It can come on very quickly and for no apparent reason.",
          "Panic is the most severe form of anxiety. Everyone experiences feelings of anxiety and panic at certain times, and it is a natural response to stressful or dangerous situations.",
        ],
      },
      {
        heading: "What it feels like",
        paragraphs: [
          "Symptoms include a racing heartbeat, feeling faint, sweating, nausea, chest pain, shortness of breath, trembling, hot flushes or chills, and a choking sensation.",
          "Some people feel numbness or pins and needles, a dry mouth, a churning stomach, or as if they are not connected to their body. Many have a feeling of dread or a fear of dying.",
        ],
      },
      {
        heading: "What it is not",
        paragraphs: [
          "Although panic attacks are frightening, they are not dangerous. An attack will not cause you any physical harm, and it is unlikely you will be admitted to hospital if you have one.",
          "Most panic attacks last between 5 and 20 minutes. Some have been reported to last up to an hour.",
        ],
      },
      {
        heading: "When to get it checked",
        paragraphs: [
          "Most of these symptoms can also be symptoms of other conditions, so you may not always be having a panic attack. It is not always possible to tell if someone is having a panic attack or something physical, such as a heart attack.",
          "If you suddenly have new symptoms, or you spot new symptoms in someone else, call 999. If you have been having symptoms of panic disorder, see a GP, who may examine you to rule out other conditions.",
        ],
      },
      {
        heading: "The fear of fear",
        paragraphs: [
          "You may start to avoid situations because you fear they will trigger another attack. This can create a cycle of living in fear of fear, which can add to your panic and may cause more attacks.",
          "Panic disorder may be diagnosed if you have regular and unexpected panic attacks followed by at least a month of continuous worry about having more. It is treatable, and you can refer yourself to a talking therapies service for treatment based on cognitive behavioural therapy.",
        ],
      },
    ],
    helps: [
      "When you feel an attack coming on, stay where you are if possible, and breathe slowly and deeply.",
      "Remind yourself that the attack will pass, and that it is not life threatening.",
      "Focus on positive, peaceful and relaxing images.",
      "Avoid sugary food and drinks, caffeine and alcohol, and stop smoking, as they can all make attacks worse.",
      "Call 999 if you suddenly have new symptoms, as it is not always possible to tell panic from something physical.",
      CRISIS,
    ],
    tryThisWeek: [
      "Practise slow, deep breathing.",
      "Remind yourself an attack will pass.",
      "Cut down on caffeine and alcohol.",
    ],
    ask: "Could you check whether something physical is causing my symptoms, and can I be referred for CBT?",
    interactive: {
      kind: "scenarios",
      title: "Panic moments",
      scenarios: [
        {
          id: "quiet-room",
          situation: "Your heart races and you feel dizzy, sitting in a quiet room.",
          options: [{ text: "Stay where you are and breathe slowly", best: true }, { text: "Rush outside as fast as you can" }],
          why: "When you feel a panic attack coming on, stay where you are, if possible, and breathe slowly and deeply.",
        },
        {
          id: "never-end",
          situation: "Your thoughts tell you this feeling will never end.",
          options: [{ text: "Remind yourself it will pass", best: true }, { text: "Search your symptoms online" }],
          why: "Remind yourself that the attack will pass. Most panic attacks last between 5 and 20 minutes.",
        },
        {
          id: "new-pain",
          situation: "You have sudden chest pain that feels new and different.",
          options: [{ text: "Call 999", best: true }, { text: "Assume it is panic and wait" }],
          why: "It is not always possible to tell a panic attack from something physical. If you suddenly have new symptoms, call 999.",
        },
        {
          id: "avoiding",
          situation: "You have started avoiding the shop where an attack happened.",
          options: [{ text: "Ask about CBT to break the cycle", best: true }, { text: "Keep avoiding it" }],
          why: "Avoiding situations can create a cycle of living in fear of fear. You can refer yourself for treatment based on CBT.",
        },
      ],
    },
    sources: [NHS_PANIC, NHS_AFP, STROKE_DEPRESSION_ANXIETY, auk("Panic disorder", "anxiety-type/panic-disorder/"), NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How long do most panic attacks last?",
      options: [{ text: "Between 5 and 20 minutes", right: true }, { text: "Several days" }, { text: "Less than ten seconds" }],
      why: "Most panic attacks last between 5 and 20 minutes. Some have been reported to last up to an hour.",
    },
  },
  {
    id: "anx-health-anxiety",
    kicker: "Health anxiety",
    question: "Why can't I stop worrying about my health since the scare?",
    hook: "After a health scare, every twinge can feel like a warning. Checking brings brief relief, then the worry comes back.",
    short: "Health anxiety is when you spend so much time worrying you are ill, or going to get ill, that it starts to take over your life. Worries are common after something like a stroke, and they may ease over time. Gradually cutting down on checking and reassurance, and a talking therapy such as CBT, can help.",
    sections: [
      {
        heading: "When worry takes over",
        paragraphs: [
          "Health anxiety is when you spend so much time worrying you are ill, or going to get ill, that it starts to take over your life. It is related to obsessive compulsive disorder.",
          "People with health anxiety may be convinced that harmless physical symptoms are signs of serious disease. For example, if their chest feels tight, they may believe they are having a heart attack.",
        ],
      },
      {
        heading: "After a scare",
        paragraphs: [
          "It is very common to feel anxious after a stroke. Around one in four people who have a stroke will experience anxiety within the first five years.",
          "Some worries are common. You may worry you might have another stroke, be frightened about getting around on your own, or feel stressed about money or your family.",
          "You may find your fears ease over time. But it is worth getting help if you are becoming anxious about a wide range of things, if anxiety is stopping you doing what you want or need to do, or if you feel anxious for no obvious reason.",
        ],
      },
      {
        heading: "The checking trap",
        paragraphs: [
          "You may have health anxiety if you constantly worry about your health, frequently check your body for signs of illness such as lumps, tingling or pain, or keep asking people for reassurance that you are not ill.",
          "Other signs are worrying that a doctor or tests have missed something, looking at health information a lot, and avoiding anything to do with serious illness. Anxiety itself can cause symptoms like headaches or a racing heartbeat, and you may mistake these for signs of illness.",
        ],
      },
      {
        heading: "Things to try yourself",
        paragraphs: [
          "Keep a diary of how often you check your body, ask people for reassurance, or look at health information. Then try to gradually reduce how often you do these things over a week.",
          "Draw a table with two columns. Write your health worries in the first and more balanced thoughts in the second, such as noting that headaches can often be a sign of stress.",
          "When you get the urge to check your body, distract yourself by going for a walk or calling a friend. Gradually start doing things you have been avoiding because of your health worries, such as sports or socialising.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "See a GP if worries about your health are stopping you leading a normal life, or self-help is not working. They may refer you for a talking therapy, such as cognitive behavioural therapy, or offer you a medicine for anxiety.",
          "You can also refer yourself directly to an NHS talking therapies service without a referral from a GP. Anxiety UK strongly advises getting guidance from a GP, who will be able to make a formal diagnosis.",
        ],
      },
    ],
    helps: [
      "Keep a diary of checking and reassurance-seeking, and try to cut it down gradually over a week.",
      "Write your health worries in one column and more balanced thoughts in another.",
      "When the urge to check comes, go for a walk or call a friend instead.",
      "Gradually start doing things you have avoided, such as sports or socialising.",
      "See a GP if your worries stop you leading a normal life, or self-help is not working.",
      CRISIS,
    ],
    tryThisWeek: [
      "Count your checks in a diary.",
      "Write one balanced thought.",
      "Swap one check for a walk.",
    ],
    ask: "Could my worries be health anxiety, and can I be referred for CBT?",
    interactive: {
      kind: "risk-check",
      title: "Habits that keep it going",
      intro: "Tick any you recognise. Each one is something you can change, a little at a time.",
      items: [
        { id: "checking", label: "Checking your body often", note: "Note how often you check, then try to gradually reduce it over a week.", changeable: true },
        { id: "reassurance", label: "Asking others if you are ill", note: "Asking for reassurance is a sign of health anxiety. Try to gradually ask less often.", changeable: true },
        { id: "searching", label: "Looking up symptoms a lot", note: "Note how often you look at health information, then try to gradually reduce it over a week.", changeable: true },
        { id: "avoiding", label: "Avoiding sport or going out", note: "Try to gradually start doing things you have avoided, such as sports or socialising.", changeable: true },
        { id: "doubting", label: "Doubting doctors and tests", note: "Worrying that a doctor or test missed something is a sign of health anxiety. CBT can help.", changeable: true },
      ],
    },
    sources: [NHS_HEALTH, AUK_HEALTH, STROKE_DEPRESSION_ANXIETY, RCPSYCH_GAD, NHS_TT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What is one self-help step for health anxiety?",
      options: [{ text: "Gradually reduce how often you check your body", right: true }, { text: "Check more often, to be sure" }, { text: "Avoid all exercise" }],
      why: "Keep a diary of how often you check your body, ask people for reassurance, or look at health information. Then try to gradually reduce how often you do these things over a week.",
    },
  },
  {
    id: "anx-types",
    kicker: "Types",
    question: "What are the different types of anxiety?",
    hook: "Worry about everything, fear of being judged, or dread of one particular thing: anxiety comes in several forms, and it is common to have more than one.",
    short: "There are several anxiety disorders. Generalised anxiety disorder means often feeling very anxious about lots of different things, panic disorder means regular sudden attacks of panic, social anxiety is an overwhelming fear of social situations, and phobias are fears of a particular thing or situation. All can be treated, usually with a talking therapy first.",
    sections: [
      {
        heading: "Generalised anxiety disorder",
        paragraphs: [
          "Generalised anxiety disorder, or GAD, is a common condition where you often feel very anxious about lots of different things. People may worry about health, money, work and relationships, and find their worries particularly difficult to control.",
          "A GP may diagnose it if you have felt anxious a lot of the time for at least 6 months and it is affecting your daily life. The Royal College of Psychiatrists says it affects 1 in every 25 people in the UK.",
        ],
      },
      {
        heading: "Panic disorder",
        paragraphs: [
          "Panic disorder is when you regularly have sudden attacks of panic or fear, often for no apparent reason. You may start to avoid certain situations because you fear they will trigger another attack.",
        ],
      },
      {
        heading: "Social anxiety",
        paragraphs: [
          "Social anxiety, also called social phobia, is a long-term and overwhelming fear of social situations. It usually starts during the teenage years, and it is more than shyness.",
          "Someone with social anxiety feels overly worried before, during and after social situations. They may feel they are being watched and judged, or worry about blushing, sweating or appearing incompetent.",
        ],
      },
      {
        heading: "Phobias",
        paragraphs: [
          "Phobias are usually caused by a particular object or situation, such as animals, heights, flying, being in a small space, or blood. Some are only triggered when you come into contact with the thing you fear.",
          "Others have more of an impact on your life, such as agoraphobia, which is most commonly a fear of leaving a safe place, usually the home. Many people with phobias enter a pattern of avoidance.",
        ],
      },
      {
        heading: "More than one, and all treatable",
        paragraphs: [
          "It is common to have more than one type of anxiety disorder at the same time. Health anxiety, where worry about being ill starts to take over your life, is related to obsessive compulsive disorder.",
          "Talking therapies such as cognitive behavioural therapy are a main treatment for each type, and medicines can help too. You can refer yourself to an NHS talking therapies service without a referral from a GP.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you have an anxiety disorder and it is affecting your life.",
      "Try to be honest with the GP about your worries and physical symptoms, even if it is difficult to talk about.",
      "If you are 18 or over, refer yourself to an NHS talking therapies service.",
      "Join a self-help group online or in person, as meeting others with similar experiences can help.",
      "Try relaxation techniques, such as breathing exercises for stress.",
      CRISIS,
    ],
    tryThisWeek: [
      "See a GP about your anxiety.",
      "Look up a self-help group.",
      "Try a breathing exercise.",
    ],
    ask: "Which type of anxiety do you think I have, and which treatment would you suggest first?",
    interactive: {
      kind: "flip-cards",
      title: "The main types, card by card",
      intro: "Turn each card to see what each type means.",
      cards: [
        { id: "gad", front: "Generalised anxiety disorder", when: "Worry about lots of things", back: "Feeling very anxious about many different things, often, and finding the worry hard to control." },
        { id: "panic", front: "Panic disorder", when: "Sudden attacks of panic", back: "Regular, sudden attacks of panic or fear, often for no apparent reason." },
        { id: "social", front: "Social anxiety", when: "Fear of social situations", back: "An overwhelming fear of social situations, with worry before, during and after them." },
        { id: "phobia", front: "Specific phobias", when: "Fear of one thing", back: "Caused by a particular object or situation, such as heights, flying or blood." },
        { id: "agoraphobia", front: "Agoraphobia", when: "Fear of leaving a safe place", back: "Most commonly a fear of leaving a safe place, usually the home." },
        { id: "health", front: "Health anxiety", when: "Worry about being ill", back: "So much worry about being ill, or getting ill, that it starts to take over your life." },
      ],
    },
    sources: [NHS_GAD, NHS_PANIC, NHS_SOCIAL, NHS_PHOBIAS, RCPSYCH_GAD, AUK_GAD, AUK_SOCIAL, AUK_PHOBIAS, AUK_AGORAPHOBIA, NHS_HEALTH, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Is it unusual to have more than one type of anxiety?",
      options: [{ text: "No, it is common to have more than one", right: true }, { text: "Yes, people only ever have one" }, { text: "It only happens in children" }],
      why: "It is common to have more than one type of anxiety disorder at the same time.",
    },
  },
  {
    id: "anx-cbt",
    kicker: "Treatment",
    question: "What is CBT, and how do I get it?",
    hook: "CBT works on the links between what you think, feel and do. On the NHS you can often refer yourself, without seeing a GP.",
    short: "Cognitive behavioural therapy (CBT) is a talking therapy where a therapist helps you change how you think and act. It is a main treatment for anxiety, and a GP will usually suggest trying a talking therapy before medicine. You can get it free on the NHS, and if you are 18 or over you can usually refer yourself.",
    sections: [
      {
        heading: "What CBT is",
        paragraphs: [
          "CBT is a type of talking therapy where a therapist helps you to change how you think and act. It is based on the idea that your thoughts, feelings and actions are connected, and that getting stuck in a cycle of unhelpful thoughts can make you feel worse.",
          "Anxiety UK says NICE recommends CBT as a first-line psychological treatment for all the main anxiety disorders, ahead of medication in most cases. A GP will usually advise you to try talking therapies before they prescribe medicine.",
        ],
      },
      {
        heading: "How to get it",
        paragraphs: [
          "You can get CBT for free on the NHS, and you do not need to have a diagnosed mental health condition. For anxiety and depression, you can refer yourself to NHS talking therapies without speaking to a GP.",
          "To refer yourself, you need to be registered with a GP and aged 18 or over, or 16 or over in some areas. Waiting times vary depending on where you live.",
          "You may also be able to get CBT for free through your employer, university or local charities, or you can pay privately. Before choosing a private therapist, check they are registered with a professional organisation accredited by the Professional Standards Authority.",
        ],
      },
      {
        heading: "What happens",
        paragraphs: [
          "First you have an assessment with a therapist, in person, online or on the phone. They ask about your symptoms and what you hope to get from treatment, then recommend a type of therapy.",
          "You may be offered guided self-help first, working through a workbook or online course with a therapist's help. CBT can also be one-to-one or in a group, and you will usually have between 5 and 15 sessions.",
        ],
      },
      {
        heading: "Inside a session",
        paragraphs: [
          "You talk about situations you find difficult, and how they make you think, feel and act. Together you work out different approaches, such as questioning unhelpful thoughts, noticing emotions and physical feelings without reacting to them, and doing activities you have been avoiding.",
          "You will usually be asked to practise what you have learned between sessions, and it is important to do this for CBT to work. For anxiety, CBT can help you test out your fears and tolerate your anxiety.",
        ],
      },
      {
        heading: "After CBT",
        paragraphs: [
          "When the course ends, it is important to keep using the skills you have learned, and your therapist will usually help you plan how. If your symptoms do not improve after your first course, you may be given more sessions.",
          "Speak to a GP if you are still having problems after your CBT has finished. They might suggest more CBT or a different type of treatment.",
        ],
      },
    ],
    helps: [
      "Refer yourself to NHS talking therapies if you are 18 or over and registered with a GP.",
      "Speak to a GP if you are not sure about referring yourself; they can help you find out what is available in your area.",
      "Practise what you learn between sessions, and record your progress in a worksheet or diary if asked.",
      "Keep using your CBT skills after the course has finished.",
      "If you go private, check your therapist is registered with a professional organisation accredited by the Professional Standards Authority.",
      CRISIS,
    ],
    tryThisWeek: [
      "Refer yourself to talking therapies.",
      "Practise between sessions.",
      "Keep using your skills afterwards.",
    ],
    ask: "Can I refer myself for CBT here, and how long is the wait?",
    interactive: {
      kind: "timeline",
      title: "Your path through CBT",
      steps: [
        { id: "refer", when: "Getting started", title: "Refer yourself or see a GP", points: ["Refer yourself to NHS talking therapies if you are 18 or over.", "Or ask a GP, who can refer you."] },
        { id: "assess", when: "First contact", title: "An assessment", points: ["In person, online or on the phone.", "The therapist asks what you hope to get from treatment."] },
        { id: "start", when: "Often first", title: "Guided self-help", points: ["A workbook or online course, with a therapist's help.", "If it does not help enough, you may be offered another therapy."] },
        { id: "sessions", when: "Usually 5 to 15 sessions", title: "Working on it together", points: ["Talk about situations you find difficult.", "Practise between sessions: it matters for CBT to work."] },
        { id: "after", when: "When it ends", title: "Keep using the skills", points: ["Your therapist will usually help you plan how.", "Speak to a GP if problems carry on."] },
      ],
    },
    sources: [NHS_CBT, NHS_TT, AUK_CBT, RCPSYCH_GAD, NHS_GAD, EMM_CBT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do you need a GP referral for NHS talking therapies for anxiety?",
      options: [{ text: "No, you can usually refer yourself", right: true }, { text: "Yes, always" }, { text: "Only after medicine has failed" }],
      why: "For anxiety and depression, you can refer yourself to NHS talking therapies without speaking to a GP.",
    },
  },
  {
    id: "anx-breathing",
    kicker: "Self-help",
    question: "What can I do in the moment anxiety hits?",
    hook: "Slow breathing and turning your attention to the here and now can take the edge off. They work best when practised on calmer days too.",
    short: "A calming breathing technique takes just a few minutes and can be done anywhere: breathe gently into your belly, in through your nose and out through your mouth, counting to five. Bringing your attention back to the present moment can help too. You will get the most benefit if you practise regularly, even when you feel OK.",
    sections: [
      {
        heading: "Why breathing helps",
        paragraphs: [
          "Breathing techniques can be especially helpful when you find yourself becoming anxious. The NHS calming breathing technique for stress, anxiety and panic takes just a few minutes and can be done anywhere.",
          "You will get the most benefit if you do it regularly, as part of your daily routine. Anxiety UK suggests practising breathing and relaxation even when you feel OK, so you have tools ready when you start to feel overwhelmed.",
        ],
      },
      {
        heading: "Getting comfortable",
        paragraphs: [
          "You can do it standing up, sitting in a chair that supports your back, or lying on a bed or yoga mat on the floor. If you can, loosen any clothes that restrict your breathing.",
          "If you are sitting or standing, place both feet flat on the ground, roughly hip-width apart. If you are lying down, place your arms a little bit away from your sides, with the palms up.",
        ],
      },
      {
        heading: "The breathing itself",
        paragraphs: [
          "Let your breath flow as deep down into your belly as is comfortable, without forcing it. Try breathing in through your nose and out through your mouth.",
          "Breathe in gently and regularly, counting steadily from 1 to 5 if it helps. Then let the breath flow out gently, counting from 1 to 5 again. You may not be able to reach 5 at first, and you can repeat this for at least 5 minutes.",
        ],
      },
      {
        heading: "Back to the present moment",
        paragraphs: [
          "Mindfulness means paying attention to the present moment, including the sights, sounds, smells and tastes around you. It can be something as simple as the feel of a banister as you walk upstairs.",
          "Some people find it helps to silently name what is happening, such as telling themselves that this is anxiety. The aim is not to make thoughts go away, but to see them as mental events that come and go.",
          "Go-to strategies like breathing, mindfulness or meditation can help calm you down and bring you back to the present moment when anxiety creeps in. They can take time and practice to get used to.",
        ],
      },
      {
        heading: "During a panic attack",
        paragraphs: [
          "If you feel a panic attack coming on, stay where you are if possible, breathe slowly and deeply, and remind yourself that the attack will pass. Focus on positive, peaceful and relaxing images.",
          "Learning breathing exercises for stress can also help prevent a further attack, along with regular physical exercise and activities like yoga and pilates.",
        ],
      },
    ],
    helps: [
      "Practise the calming breath for at least 5 minutes, as part of your daily routine.",
      "Breathe in through your nose and out through your mouth, counting from 1 to 5 if it helps.",
      "Practise breathing and relaxation even when you feel OK, so the tools are ready when you need them.",
      "Notice the sights, sounds and sensations around you to come back to the present moment.",
      "In a panic attack, stay where you are, breathe slowly and deeply, and remind yourself it will pass.",
      CRISIS,
    ],
    tryThisWeek: [
      "Breathe calmly for 5 minutes a day.",
      "Count to five in and out.",
      "Notice what is around you.",
    ],
    ask: "Could I be taught relaxation or breathing techniques as part of my treatment?",
    interactive: {
      kind: "timeline",
      title: "Five minutes of calm breathing",
      steps: [
        { id: "position", when: "Step 1", title: "Get comfortable", points: ["Sit, stand or lie down, whichever suits you.", "Loosen any clothes that restrict your breathing."] },
        { id: "settle", when: "Step 2", title: "Settle your body", points: ["Feet flat on the ground, about hip-width apart.", "Lying down: arms a little away from your sides, palms up."] },
        { id: "belly", when: "Step 3", title: "Breathe low", points: ["Let your breath flow down into your belly.", "Do not force it."] },
        { id: "count", when: "Step 4", title: "Count it in and out", points: ["In through your nose, counting 1 to 5.", "Out through your mouth, counting 1 to 5 again."] },
        { id: "repeat", when: "Step 5", title: "Keep going", points: ["Repeat for at least 5 minutes.", "Do it regularly for the most benefit."] },
      ],
    },
    sources: [NHS_BREATHING, NHS_PANIC, NHS_MINDFULNESS, EMM_WORRIES, AUK_SELF_CARE, STROKE_DEPRESSION_ANXIETY, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When do you get the most benefit from the calming breathing technique?",
      options: [{ text: "When you do it regularly, as part of your routine", right: true }, { text: "Only once, in a crisis" }, { text: "Only when lying down" }],
      why: "You will get the most benefit if you do it regularly, as part of your daily routine.",
    },
  },
  {
    id: "anx-medicines",
    kicker: "Treatment",
    question: "Can medicine help my anxiety, and what are the trade-offs?",
    hook: "Medicines can ease anxiety, but they take weeks to work and are not usually the first step. Never stop one suddenly without your doctor.",
    short: "The medicine usually offered for anxiety is a type of antidepressant called an SSRI, such as sertraline. A GP will usually suggest a talking therapy first, and medicine may be offered if that has not helped or you would prefer not to have it. Antidepressants take a few weeks to work, can cause side effects at first, and should never be stopped suddenly without talking to your doctor.",
    sections: [
      {
        heading: "Where medicine fits",
        paragraphs: [
          "A GP will usually advise you to try talking therapies before they prescribe medicine. If psychological treatments have not helped, or you would prefer not to have them, you might be offered medication.",
          "Your doctor might offer medication and talking therapy together, because having both at the same time can be more effective for some people than either on its own.",
        ],
      },
      {
        heading: "SSRIs, the usual first choice",
        paragraphs: [
          "The medicine usually offered is a type of antidepressant called a selective serotonin reuptake inhibitor, or SSRI. Even though SSRIs are called antidepressants, they can be used to treat generalised anxiety disorder, panic disorder and social anxiety.",
          "Sertraline is an SSRI. It is thought to work by increasing the level of serotonin, a chemical in the brain linked to mood. It is taken once a day at the same time, and your doctor may start with a low dose and increase it after a week or more.",
        ],
      },
      {
        heading: "Slow to start",
        paragraphs: [
          "Antidepressants usually take 1 to 2 weeks to start having an effect, and can take up to 8 weeks to work fully. Keep taking them, even if you feel they are not working, and only stop if your GP advises you to.",
          "Most side effects ease after a couple of weeks. Common ones with sertraline include headaches, feeling sick, dizziness, a dry mouth, diarrhoea, problems sleeping and sexual problems.",
          "It is not common, but some people have suicidal thoughts or an urge to self-harm when they start an antidepressant. Speak to your doctor straight away if this happens, and call 999 or go to A&E immediately if you are in danger or do not feel you can keep yourself safe.",
        ],
      },
      {
        heading: "Other medicines",
        paragraphs: [
          "If SSRIs do not work, you might be offered an SNRI, another type of antidepressant. If neither works, you might be offered pregabalin, which is thought to stop the brain releasing the chemicals that make you feel anxious. Pregabalin can be addictive.",
          "Benzodiazepines are sedatives that may be offered for a short time if your anxiety feels out of control, but they can become addictive if used for too long. Propranolol, a beta blocker, can help with physical symptoms of anxiety, like sweating and shaking.",
        ],
      },
      {
        heading: "Stopping safely",
        paragraphs: [
          "Do not stop taking an antidepressant suddenly or without talking to your doctor first. They will help you agree a plan to reduce your dose gradually, usually over several weeks or months.",
          "You will usually keep taking it for at least 6 months after you feel better. Herbal remedies can cause serious problems when taken with other medicines, so speak to your doctor first: St John's wort, for example, should not be used with sertraline.",
        ],
      },
    ],
    helps: [
      "Keep taking your medicine even if it seems not to work at first, and only stop if your doctor advises it.",
      "Talk to your doctor if side effects are hard to manage, or you feel your medicine is not helping.",
      "Never stop an antidepressant suddenly; agree a plan with your doctor to reduce it gradually.",
      "Tell your doctor about any other medicines, herbal remedies or supplements before you start.",
      "Speak to your doctor straight away if you feel you are becoming dependent on pregabalin or benzodiazepines.",
      CRISIS,
    ],
    tryThisWeek: [
      "Keep taking it as prescribed.",
      "Note side effects for your doctor.",
      "List your other medicines and remedies.",
    ],
    ask: "Would a medicine help me, and what are the side effects and trade-offs?",
    interactive: {
      kind: "flip-cards",
      title: "Anxiety medicines, card by card",
      intro: "Turn each card to see when each medicine is used and what to know.",
      cards: [
        { id: "ssri", front: "SSRIs, such as sertraline", when: "Usually the first medicine offered", back: "Thought to increase serotonin. Take up to 8 weeks to work fully; most side effects ease after a couple of weeks." },
        { id: "snri", front: "SNRIs", when: "If SSRIs do not work", back: "Another type of antidepressant, similar to SSRIs but working slightly differently." },
        { id: "pregabalin", front: "Pregabalin", when: "If SSRIs and SNRIs do not work", back: "Also used for epilepsy and nerve pain. Takes at least a few weeks to work, and can be addictive." },
        { id: "benzodiazepines", front: "Benzodiazepines", when: "For a short time, if anxiety feels out of control", back: "Sedatives that can become addictive if they are used for too long." },
        { id: "beta-blockers", front: "Beta blockers, such as propranolol", when: "Rarely, for the physical feelings", back: "Slow the heart, helping with sweating and shaking. Propranolol usually starts to work in a few hours." },
      ],
    },
    sources: [NHS_GAD, NHS_PANIC, RCPSYCH_GAD, NHS_ANTIDEPRESSANTS, NHS_SERTRALINE, NHS_PREGABALIN, NHS_PROPRANOLOL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How should an antidepressant be stopped?",
      options: [{ text: "Gradually, with a plan agreed with your doctor", right: true }, { text: "Suddenly, as soon as you feel better" }, { text: "Whenever side effects start" }],
      why: "Do not stop taking an antidepressant suddenly or without talking to your doctor first. They will help you agree a plan to reduce your dose gradually.",
    },
  },
  {
    id: "anx-worry-time",
    kicker: "Self-help",
    question: "What is worry time, and what else helps with constant worrying?",
    hook: "Giving worries a set slot each day can stop them taking over the rest of it. A few simple CBT techniques help too.",
    short: "Worry time means setting aside a short period, say 10 or 15 minutes a day, to write down your worries and try to find solutions. When a worry pops up at other times, you set it aside for later. Sorting the worries you can act on from those you cannot, and checking unhelpful thoughts, can also help.",
    sections: [
      {
        heading: "Write them down",
        paragraphs: [
          "Getting worries out of your head and down onto paper, or a notes app on your phone, can help clear your mind and make it easier to work through them one by one. Anxiety UK says seeing things on paper helps put concerns into perspective.",
        ],
      },
      {
        heading: "Set aside worry time",
        paragraphs: [
          "If worries are taking over your day, set yourself some worry time, a short period of say 10 or 15 minutes, every day or so before bed. Use it to write things down and try to find solutions.",
          "When a worry enters your mind during the day, tell yourself you will set it aside for your worry time, and shift your focus back to the here and now. It might feel difficult at first, but it should get easier as you settle into the habit.",
        ],
      },
      {
        heading: "Sort what you can and cannot change",
        paragraphs: [
          "A technique called the worry tree helps you tell the difference between problems you can solve and hypothetical worries that are beyond your control. For worries you can do something about, write down a plan: what you would do, how, and when.",
          "For worries you cannot do anything about, try to acknowledge and accept this. Try not to dwell on one worry for too long, and either move on or find ways to shift your focus, relax or clear your mind.",
        ],
      },
      {
        heading: "Catch it, check it, change it",
        paragraphs: [
          "Unhelpful thoughts include always expecting the worst outcome, and focusing only on the bad side of a situation. Once you have caught one, take a step back and check it.",
          "Ask yourself how likely the outcome really is, whether there is good evidence for it, and what you would say to a friend thinking this way. Then see if you can change it for a more neutral or positive thought.",
        ],
      },
      {
        heading: "Come back to the present",
        paragraphs: [
          "Go-to strategies like exercise, yoga, breathing, mindfulness or meditation can help calm you down and bring you back to the present moment. They take practice, but they really can help you feel more in control.",
          "Writing a to do list for the next day before bed can help organise your thoughts and clear your mind. Keeping busy with hobbies, reading or chatting to friends and family can help too.",
        ],
      },
    ],
    helps: [
      "Set a daily worry time of 10 or 15 minutes to write worries down and look for solutions.",
      "When a worry comes up at another time, set it aside for your worry time.",
      "For worries you can act on, write a specific plan: what, how and when.",
      "Check unhelpful thoughts: how likely is it, and what would you say to a friend?",
      "Write a to do list for the next day before bed to clear your mind.",
      CRISIS,
    ],
    tryThisWeek: [
      "Set a daily 15-minute worry time.",
      "Park other worries until then.",
      "Write tomorrow's list before bed.",
    ],
    ask: "My worries still take over: could a talking therapy help?",
    interactive: {
      kind: "scenarios",
      title: "Worry moments",
      scenarios: [
        {
          id: "at-work",
          situation: "A worry about a bill pops into your head at work.",
          options: [{ text: "Note it for your worry time", best: true }, { text: "Stop everything and go over it" }],
          why: "When a worry enters your mind, set it aside for your worry time and shift your focus back to the here and now.",
        },
        {
          id: "can-act",
          situation: "In worry time, you see that the bill could be paid next week.",
          options: [{ text: "Write a plan: what, how and when", best: true }, { text: "Keep turning it over" }],
          why: "For worries you can do something about, write down a plan of action, as specific as possible.",
        },
        {
          id: "cannot-act",
          situation: "A worry is about something you cannot control.",
          options: [{ text: "Acknowledge it, then shift your focus", best: true }, { text: "Keep thinking until it is solved" }],
          why: "For worries you cannot do anything about, try to acknowledge and accept this, then find ways to shift your focus.",
        },
        {
          id: "worst",
          situation: "You are sure tomorrow's meeting will go badly.",
          options: [{ text: "Ask what you would tell a friend", best: true }, { text: "Accept the thought as fact" }],
          why: "Check the thought: how likely is it, is there good evidence for it, and what would you say to a friend thinking this way?",
        },
      ],
    },
    sources: [EMM_WORRIES, EMM_ANXIETY, EMM_REFRAME, AUK_SELF_CARE, NHS_HAPPIER, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How long a worry time does Every Mind Matters suggest?",
      options: [{ text: "A short period, say 10 or 15 minutes", right: true }, { text: "The whole evening" }, { text: "Whenever a worry appears" }],
      why: "Set yourself some worry time, a short period of say 10 or 15 minutes, every day or so before bed.",
    },
  },
  {
    id: "anx-caffeine-sleep",
    kicker: "Daily life",
    question: "Do caffeine, alcohol and sleep affect my anxiety?",
    hook: "Coffee can wind the alarm up, a drink can spoil sleep later in the night, and poor sleep feeds anxiety. Small changes help.",
    short: "Caffeine in coffee, tea, cola and energy drinks can disrupt your sleep and make anxiety harder to control. Alcohol may make you feel sleepy at first but often makes sleep worse, and using it to relieve anxiety can contribute to poor mental health. Sleep and mental health are closely linked, so a regular routine is worth building.",
    sections: [
      {
        heading: "Caffeine winds you up",
        paragraphs: [
          "Drinking lots of coffee, tea, cola or energy drinks can disrupt your sleep and make it harder to control your anxiety. The Sleep Charity says caffeine increases adrenaline production, and in large quantities it can cause anxiety, headaches and dizziness.",
          "Its effects kick in around 15 minutes after you have it. It has an average half-life of five to seven hours, so if you drink a cup of coffee around 8pm, half of it is still being processed at 2am.",
          "Caffeine is also in chocolate and fizzy drinks. If you cut down, do it gradually, as going cold turkey can cause headaches and insomnia.",
        ],
      },
      {
        heading: "Alcohol is not a fix",
        paragraphs: [
          "Do not use alcohol, cigarettes, gambling or drugs to relieve anxiety, as these can all contribute to poor mental health. When times are hard, it is tempting to drink because it numbs painful feelings, but it can also make you feel more depressed.",
          "Alcohol can make you feel sleepy at first, but it often disrupts sleep later in the night, with many short awakenings you will not remember. Caffeine and alcohol can also make panic attacks worse.",
        ],
      },
      {
        heading: "Sleep and anxiety feed each other",
        paragraphs: [
          "Sleep and mental health are closely linked. Anxiety can cause thoughts to race, making it difficult to sleep, and ongoing sleep problems can increase the risk of low mood and anxiety.",
          "Most healthy adults need around 7 to 9 hours of sleep a night. Stress, anxiety or depression are among the most common causes of insomnia, and enough sleep can give you the energy you need to cope with difficult feelings.",
        ],
      },
      {
        heading: "A routine that helps",
        paragraphs: [
          "Do not drink alcohol, tea or coffee for at least 6 hours before going to bed, and the NHS advice on phobias is to avoid caffeine after 3pm. Try a warm milky drink or herbal tea instead.",
          "Go to bed and wake up at around the same time each day, and relax for at least an hour before bed, perhaps with a bath or a book. Keep your bedroom dark and quiet, and avoid screens right before bed.",
          "Avoid exercise in the 4 hours before bed, a big meal late at night, and napping during the day. If you use alcohol to unwind, try a warm bath, reading, meditating or relaxation exercises instead.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "See a GP if changing your sleeping habits has not helped, you have had trouble sleeping for months, or it is making it hard for you to cope. A GP may offer cognitive behavioural therapy, face to face or through an online self-help programme.",
        ],
      },
    ],
    helps: [
      "Cut down gradually on coffee, tea, cola and energy drinks, especially later in the day.",
      "Do not drink alcohol, tea or coffee for at least 6 hours before bed.",
      "Do not use alcohol, cigarettes, gambling or drugs to relieve anxiety.",
      "Go to bed and wake up at around the same time each day.",
      "Relax for an hour before bed, with a bath or a book, and put your phone away.",
      CRISIS,
    ],
    tryThisWeek: [
      "Cut down caffeine gradually.",
      "No caffeine or alcohol 6 hours before bed.",
      "Keep the same wake-up time.",
    ],
    ask: "Could my sleep or caffeine be making my anxiety worse, and could CBT for sleep help?",
    interactive: {
      kind: "risk-check",
      title: "What is keeping you up?",
      intro: "Tick any that apply. Each is something you can change.",
      items: [
        { id: "caffeine", label: "Coffee, tea or cola late on", note: "Caffeine can disrupt sleep and make anxiety harder to control. Avoid it for at least 6 hours before bed.", changeable: true },
        { id: "alcohol", label: "A drink to help you sleep", note: "Alcohol may make you sleepy at first, but it often disrupts sleep later in the night.", changeable: true },
        { id: "screens", label: "Phone or TV right before bed", note: "The blue light from screens makes you more awake. Put devices away before bed.", changeable: true },
        { id: "meal", label: "A big meal late at night", note: "Heavy meals can affect sleep. The NHS advises not eating a big meal late at night.", changeable: true },
        { id: "naps", label: "Napping in the day", note: "The NHS advises not napping during the day, and sticking to your regular sleeping hours.", changeable: true },
        { id: "racing", label: "Racing thoughts at bedtime", note: "Anxiety can make thoughts race. Writing a to do list before bed can help clear your mind.", changeable: true },
      ],
    },
    sources: [NHS_GAD, NHS_INSOMNIA, EMM_SLEEP, SC_CAFFEINE, SC_ALCOHOL, SC_MENTAL_HEALTH, NHS_PANIC, NHS_PHOBIAS, NHS_HAPPIER, STROKE_DEPRESSION_ANXIETY, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How long before bed does the NHS advise not drinking tea or coffee?",
      options: [{ text: "At least 6 hours", right: true }, { text: "Ten minutes" }, { text: "It makes no difference" }],
      why: "Do not drink alcohol, tea or coffee for at least 6 hours before going to bed.",
    },
  },
  {
    id: "anx-avoidance",
    kicker: "Daily life",
    question: "Why does avoiding things make anxiety worse?",
    hook: "Avoiding what you fear brings relief today, but it can make the fear bigger tomorrow. Facing it in small steps shrinks it.",
    short: "When we are afraid of something, avoiding it can bring relief in the short term, but it can make situations harder to face and mean our fears grow. Facing fears gradually, starting with the easiest step, can help you overcome them and feel more in control. This is sometimes called exposure therapy.",
    sections: [
      {
        heading: "Relief now, bigger fear later",
        paragraphs: [
          "When we are afraid of something, it can be tempting to avoid it. Although this might bring relief in the short term, avoiding situations can make them harder to face up to and mean that our fears grow.",
          "Relying on habits we think will keep us safe might also make anxiety worse. With panic, avoiding places in case they trigger an attack can create a cycle of living in fear of fear.",
        ],
      },
      {
        heading: "What avoidance can look like",
        paragraphs: [
          "Anxiety UK lists things like making excuses not to go out with family or friends, avoiding going out alone, always taking someone with you, and rushing out of situations where you feel anxious. Others include only shopping when it is quiet, or crossing the street to avoid people.",
          "With some phobias, the pattern of avoidance can grow until even a picture of the feared thing has to be avoided. That shows how much even a simple phobia can affect someone's life.",
        ],
      },
      {
        heading: "Facing fears, step by step",
        paragraphs: [
          "When you are feeling more relaxed, think about how you feel physically when you are afraid and how this makes you behave. Then list the situations involving your fear and rate each from 0 to 100, from not difficult at all to the most fear. Taking the bus for a couple of stops with a friend might be a 10, and on your own a 50.",
          "Start with the easiest one and put yourself in that situation. Keep going until your fear rating has reduced by half, then move on to the next one.",
          "Try to allow yourself to feel the fear without relying on distractions, such as your phone or seeking reassurance from others. This can help prove to yourself that you are able to cope.",
        ],
      },
      {
        heading: "Do not rush it",
        paragraphs: [
          "This may take some time, especially as you reach the more difficult situations, so do not be discouraged if some take longer. Every time you face a situation you find difficult, however small, it is a step towards reducing your anxiety.",
          "The NHS advice is the same: do not avoid situations that make you anxious, but try slowly building up the time you spend in them to gradually reduce anxiety.",
        ],
      },
      {
        heading: "Help with it",
        paragraphs: [
          "Changing what you do, such as doing activities you have been avoiding, is part of cognitive behavioural therapy. You can refer yourself to an NHS talking therapies service without a referral from a GP.",
        ],
      },
    ],
    helps: [
      "Make a list of the situations you fear and rate each from 0 to 100.",
      "Start with the easiest, and stay with it until your fear has reduced by half.",
      "Face the situation without distractions or reassurance where you can.",
      "Slowly build up the time you spend in worrying situations.",
      "Do not be discouraged if the harder steps take longer.",
      CRISIS,
    ],
    tryThisWeek: [
      "List and rate your feared situations.",
      "Try the easiest one.",
      "Stay until the fear halves.",
    ],
    ask: "Could CBT help me face the things I have started avoiding?",
    interactive: {
      kind: "timeline",
      title: "Facing a fear, a step at a time",
      steps: [
        { id: "notice", when: "Step 1", title: "Notice what fear does", points: ["When calmer, think how fear feels in your body.", "Notice what it makes you do, such as getting off the bus early."] },
        { id: "see", when: "Step 2", title: "See fear differently", points: ["The fight or flight response can be over-sensitive.", "The way through is gradual exposure, not avoidance."] },
        { id: "rate", when: "Step 3", title: "Rate your situations", points: ["Score each from 0 to 100.", "List them from least to most difficult."] },
        { id: "start", when: "Step 4", title: "Start with the easiest", points: ["Stay with it until the fear has reduced by half.", "The more times you face a fear, the less scary it becomes."] },
        { id: "feel", when: "Step 5", title: "Let yourself feel it", points: ["Try not to use your phone or seek reassurance.", "This helps prove to yourself that you can cope."] },
        { id: "climb", when: "Step 6", title: "Work up, but do not rush", points: ["Move on once the fear has halved.", "Do not be discouraged if harder steps take longer."] },
      ],
    },
    sources: [EMM_FEARS, EMM_ANXIETY, NHS_GAD, NHS_PANIC, AUK_ABOUT, AUK_PHOBIAS, NHS_CBT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does avoiding feared situations tend to do over time?",
      options: [{ text: "Make the fear grow", right: true }, { text: "Make the fear disappear" }, { text: "Have no effect at all" }],
      why: "Avoiding situations can make them harder to face up to and mean that our fears grow.",
    },
  },
  {
    id: "anx-telling-people",
    kicker: "Relationships",
    question: "How do I tell the people around me, and how can they help?",
    hook: "Other people cannot always tell what you are going through. Telling someone you trust is often the first step to feeling less alone.",
    short: "Other people cannot always see anxiety, so it can help to share how you feel with someone you trust. Many people put off asking for help, worried what others will think, but you might be surprised how many understand. The people around you can help by listening, being patient and taking your feelings seriously.",
    sections: [
      {
        heading: "Why telling helps",
        paragraphs: [
          "Other people cannot always tell what you are going through, so it can help to share your feelings with someone you trust. Talking things through can help you release tension, rather than keeping it inside, and can strengthen your relationships.",
          "Try talking about your feelings to a friend, family member, health professional or counsellor. If your anxiety started because of something happening in your life, speak to someone you trust and respect, and who is a good listener.",
        ],
      },
      {
        heading: "The thoughts that hold us back",
        paragraphs: [
          "It is normal to put off getting help. You might think you should try to manage on your own, but no one should have to struggle alone, and everyone deserves support.",
          "You might worry about what people will think if you ask for help. You might be surprised by how many people will understand what you are going through, and may have had similar challenges themselves.",
        ],
      },
      {
        heading: "What you can ask of them",
        paragraphs: [
          "The Royal College of Psychiatrists suggests three things that help: listening, being patient, and taking the person seriously. Sometimes just sharing anxious feelings with another person can help to ease them.",
          "Anxiety affects people in very different ways, so Anxiety UK suggests that people ask what they can do rather than simply giving advice. Knowing there is someone reliable to depend on can be very reassuring.",
        ],
      },
      {
        heading: "Ideas to share with family and friends",
        paragraphs: [
          "Every Mind Matters suggests carrying on as usual, as behaving differently can make someone feel more isolated. Little acts of kindness, like offering to do the shopping or going to appointments together, can help.",
          "Try to make sure anxiety is not the only thing you talk about. Doing things you enjoy together, such as exercising or spending time outdoors, can help, and a chat may come more naturally when you are doing something together first.",
        ],
      },
      {
        heading: "If you need more support",
        paragraphs: [
          "If anxiety is affecting your daily life, the people around you can encourage you to contact a GP, get help from NHS 111, or refer yourself to NHS talking therapies.",
          "If you ever feel you cannot keep yourself safe, let family or friends know what is going on. You can also call Samaritans on 116 123, text \"SHOUT\" to 85258, call 111, or call 999 in an emergency.",
        ],
      },
    ],
    helps: [
      "Share how you feel with someone you trust and who is a good listener.",
      "Tell people how they can help, as what helps one person may not help another.",
      "Ask those close to you to listen, be patient and take your feelings seriously.",
      "Keep doing things you enjoy together, so anxiety is not the only thing you talk about.",
      "Look for a self-help or peer support group, where you can meet people with similar experiences.",
      CRISIS,
    ],
    tryThisWeek: [
      "Tell one person you trust.",
      "Say what helps you.",
      "Plan something you enjoy together.",
    ],
    ask: "Is there support for my family, and a local support group I could join?",
    interactive: {
      kind: "flip-cards",
      title: "What helps from the people around you",
      intro: "Turn each card to see why it helps. You could share these with family and friends.",
      cards: [
        { id: "listen", front: "Listen", when: "When you want to talk", back: "Sometimes just sharing anxious feelings with another person can help to ease them." },
        { id: "patient", front: "Be patient", when: "When plans are hard to keep", back: "Plans can be hard to stick to, and people may seem irritable or distracted. It is important not to take it personally." },
        { id: "serious", front: "Take it seriously", when: "When a worry seems irrational", back: "The feelings are very real. People can reassure you that your feelings are valid and you deserve support." },
        { id: "ask", front: "Ask how to help", when: "Instead of giving advice", back: "Anxiety affects people differently, so it helps to ask what to do rather than simply giving advice." },
        { id: "usual", front: "Carry on as usual", when: "Day to day", back: "Behaving differently can make someone feel more isolated." },
        { id: "practical", front: "Offer practical help", when: "With chores and appointments", back: "Little acts of kindness, like doing the shopping or going to appointments together, can help." },
      ],
    },
    sources: [RCPSYCH_GAD, AUK_SUPPORTING, EMM_HELPING, NHS_HAPPIER, STROKE_DEPRESSION_ANXIETY, NHS_GAD, NHS_SUICIDAL, NHS_URGENT],
    quiz: {
      question: "What does the Royal College of Psychiatrists suggest helps someone with anxiety?",
      options: [{ text: "Listening, being patient and taking them seriously", right: true }, { text: "Telling them their worries are silly" }, { text: "Leaving them alone until it passes" }],
      why: "The Royal College of Psychiatrists suggests three things that help: listening, being patient, and taking the person seriously.",
    },
  },
  {
    id: "anx-exercise",
    kicker: "Living well",
    question: "Does exercise help with anxiety?",
    hook: "Running, walking, swimming and yoga can reduce anxiety and stress and help you sleep. Any amount is better than none.",
    short: "Regular exercise, such as running, walking, swimming and yoga, can reduce anxiety and stress and help you sleep better. Even moderate exercise releases chemicals in your brain that lift your mood. Adults should aim for at least 150 minutes a week, but even a brisk 10-minute walk can clear your mind and help you relax.",
    sections: [
      {
        heading: "Why it helps",
        paragraphs: [
          "Activities such as running, walking, swimming and yoga can reduce anxiety and stress and help you sleep better. Regular physical exercise to reduce stress and tension may also help prevent a further panic attack.",
          "Even moderate exercise releases chemicals in your brain that lift your mood. It can help you sleep better, have more energy and feel more confident, and focusing on an activity can distract you from negative thoughts.",
        ],
      },
      {
        heading: "How much to aim for",
        paragraphs: [
          "Adults should try to be active every day and aim for at least 150 minutes of moderate intensity activity a week, or 75 minutes of vigorous activity. Strengthening activities on at least 2 days a week are recommended too.",
          "Moderate activity raises your heart rate, and makes you breathe faster and feel warmer. You can still talk, but not sing. Brisk walking, riding a bike and dancing all count.",
        ],
      },
      {
        heading: "Starting small",
        paragraphs: [
          "If you have not exercised for a while, start gradually and aim to build up towards 150 minutes a week. Any exercise is better than none, and even a brisk 10-minute walk can clear your mind and help you relax.",
          "Speak to your GP first if you have not exercised for some time, or if you have medical conditions or concerns. You could also ask a GP about exercise on prescription.",
        ],
      },
      {
        heading: "Finding what you enjoy",
        paragraphs: [
          "Choose an exercise that you enjoy, as otherwise it may be hard to find the motivation to do it regularly. If it helps, do it with a friend or listen to music.",
          "Exercise is something you can do with someone else, with both of you feeling the benefits. Walking groups can support people who have health problems, including mental health conditions.",
        ],
      },
      {
        heading: "Exercise and sleep",
        paragraphs: [
          "People who exercise regularly tend to sleep better, and releasing tension through exercise can help banish stress before bedtime. Exercising in the morning or afternoon is ideal.",
          "The NHS advises avoiding exercise in the 4 hours before bed. A gentle stroll or yoga can be part of winding down.",
        ],
      },
    ],
    helps: [
      "Exercise regularly: running, walking, swimming and yoga can reduce anxiety and stress.",
      "Build up gradually towards at least 150 minutes of moderate activity a week.",
      "Start with a brisk 10-minute walk if that is what you can manage.",
      "Choose something you enjoy, and do it with a friend if it helps.",
      "Speak to your GP first if you have not exercised for a while or have medical conditions or concerns.",
      CRISIS,
    ],
    tryThisWeek: [
      "Take a brisk 10-minute walk.",
      "Choose an activity you enjoy.",
      "Ask a friend to join you.",
    ],
    ask: "Is it safe for me to build up my exercise, and is exercise on prescription available here?",
    interactive: {
      kind: "scenarios",
      title: "Getting moving",
      scenarios: [
        {
          id: "long-break",
          situation: "You have not exercised for years and have a heart condition.",
          options: [{ text: "Speak to your GP first", best: true }, { text: "Start with a hard run" }],
          why: "Speak to your GP first if you have not exercised for some time, or if you have medical conditions or concerns.",
        },
        {
          id: "ten-minutes",
          situation: "You only have ten minutes today.",
          options: [{ text: "Take a brisk 10-minute walk", best: true }, { text: "Skip it: it is not worth it" }],
          why: "Any exercise is better than none, and even a brisk 10-minute walk can clear your mind and help you relax.",
        },
        {
          id: "late",
          situation: "You plan a hard workout just before bed.",
          options: [{ text: "Move it to the morning or afternoon", best: true }, { text: "Do it right before sleep" }],
          why: "The NHS advises avoiding exercise in the 4 hours before bed. Exercising in the morning or afternoon is ideal.",
        },
        {
          id: "giving-up",
          situation: "You keep giving up on the gym.",
          options: [{ text: "Try something you enjoy, with a friend", best: true }, { text: "Force yourself to keep going alone" }],
          why: "Choose an exercise that you enjoy, as otherwise it may be hard to find the motivation. If it helps, do it with a friend.",
        },
      ],
    },
    sources: [NHS_GAD, NHS_PANIC, NHS_EXERCISE_BENEFITS, NHS_ACTIVITY_GUIDELINES, NHS_EXERCISE_DEPRESSION, NHS_HAPPIER, SC_EXERCISE, STROKE_DEPRESSION_ANXIETY, AUK_SUPPORTING, EMM_SLEEP, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How much activity a week should adults aim for?",
      options: [{ text: "At least 150 minutes of moderate activity", right: true }, { text: "Ten minutes in total" }, { text: "None, if you feel anxious" }],
      why: "Adults should try to be active every day and aim for at least 150 minutes of moderate intensity activity a week, or 75 minutes of vigorous activity.",
    },
  },
];
