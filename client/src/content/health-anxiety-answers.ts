import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Health anxiety page's pieces (content/library-conditions/mind-extra.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (including
// Every Mind Matters and two NHS trusts: the Cumbria, Northumberland, Tyne and Wear self-help guide and Oxford
// Health), Anxiety UK, No Panic, the Royal College of Psychiatrists and Rethink Mental Illness, with Macmillan
// and the Stroke Association for worry after a real illness. mind.org.uk was not read (it blocks automated
// reading), so no Mind page is cited. Every answer ends its "What helps" list with the crisis routes exactly as
// the NHS gives them (111 mental health option, Samaritans 116 123, Shout 85258, 999 or A&E). General
// information only; it never replaces what a person's own GP, therapist or care team tells them, no medicine
// should be stopped or changed without the doctor, and a new or worrying symptom should still be checked.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const emm = (label: string, path: string): LearnSource => ({ label: `NHS Every Mind Matters: ${label}`, url: `https://www.nhs.uk/every-mind-matters/${path}` });
const auk = (label: string, path: string): LearnSource => ({ label: `Anxiety UK: ${label}`, url: `https://www.anxietyuk.org.uk/${path}` });

const NHS_HA = nhs("Health anxiety", "mental-health/conditions/health-anxiety/");
const NHS_TT = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_FIND_TT = nhs("Find NHS talking therapies for anxiety and depression", "nhs-services/mental-health-services/find-nhs-talking-therapies-for-anxiety-and-depression/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_GAD = nhs("Generalised anxiety disorder (GAD)", "mental-health/conditions/generalised-anxiety-disorder-gad/");
const NHS_ANTIDEPRESSANTS = nhs("Antidepressants", "medicines/antidepressants/");
const NHS_SERTRALINE = nhs("Sertraline", "medicines/sertraline/");
const NHS_BREATHING = nhs("Breathing exercises for stress", "mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/");
const NHS_MINDFULNESS = nhs("Mindfulness", "mental-health/self-help/tips-and-support/mindfulness/");
const NHS_CHEST = nhs("Chest pain", "symptoms/chest-pain/");
const NHS_STROKE = nhs("Symptoms of a stroke", "conditions/stroke/symptoms/");
const NHS_999 = nhs("When to call 999", "nhs-services/urgent-and-emergency-care-services/when-to-call-999/");
const NHS_111 = nhs("When to use NHS 111 online or call 111", "nhs-services/urgent-and-emergency-care-services/when-to-use-111/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const EMM_ANXIETY = emm("Managing anxiety", "mental-health-issues/anxiety/");
const EMM_WORRIES = emm("Tackling your worries", "mental-wellbeing-tips/self-help-cbt-techniques/tackling-your-worries/");
const EMM_REFRAME = emm("Reframing unhelpful thoughts", "mental-wellbeing-tips/self-help-cbt-techniques/reframing-unhelpful-thoughts/");
const EMM_HELPING = emm("Helping others with mental health problems", "supporting-others/helping-others/");

/** The NHS trust self-help guide; its sections load inside this one page. */
const CNTW: LearnSource = { label: "Cumbria, Northumberland, Tyne and Wear NHS Foundation Trust: Health anxiety self-help guide", url: "https://selfhelp.cntw.nhs.uk/self-help-guides/health-anxiety" };
const OXFORD: LearnSource = { label: "Oxford Health NHS Foundation Trust: What is health anxiety?", url: "https://oxfordhealth.nhs.uk/ohspic/problems/health-anxiety/" };
const NIDIRECT: LearnSource = { label: "nidirect: Health anxiety (hypochondria)", url: "https://www.nidirect.gov.uk/conditions/health-anxiety-hypochondria" };

const AUK_HA = auk("Health anxiety", "anxiety-type/health-anxiety/");
const AUK_SUPPORTING = auk("Supporting others", "get-help/supporting-others/");
const AUK_GASLIGHTING = auk("Medical gaslighting, diagnostic overshadowing and anxiety", "medical-gaslighting-and-diagnostic-overshadowing/");
const AUK_TOOLKIT = auk("Helping people with anxiety to receive the best from their GP (toolkit)", "wp-content/uploads/2024/05/Toolkit-for-people-with-anxiety.pdf");

const NO_PANIC: LearnSource = { label: "No Panic: Health anxiety", url: "https://nopanic.org.uk/health-anxiety/" };
const RCPSYCH_GAD: LearnSource = { label: "Royal College of Psychiatrists: Anxiety and generalised anxiety disorder (GAD)", url: "https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/anxiety-and-generalised-anxiety-disorder-(gad)" };
const RETHINK_GP: LearnSource = { label: "Rethink Mental Illness: How can your GP help with your mental health?", url: "https://www.rethink.org/advice-and-information/living-with-mental-illness/treatment-and-support/how-can-your-gp-help-with-your-mental-health-getting-appointments-treatment-and-support/" };
const MACMILLAN_WORRIES: LearnSource = { label: "Macmillan Cancer Support: Coping with worries about cancer coming back", url: "https://www.macmillan.org.uk/cancer-information-and-support/after-treatment/coping-with-worries-about-cancer-coming-back" };
const STROKE_ANXIETY: LearnSource = { label: "Stroke Association: Depression and anxiety", url: "https://www.stroke.org.uk/stroke/effects/emotional-and-behavioural/depression-and-anxiety" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you do not feel you can keep yourself safe.";

export const healthAnxietyAnswers: LearnArticle[] = [
  {
    id: "hanx-what-it-is",
    kicker: "Understanding",
    question: "What is health anxiety?",
    hook: "Everyone worries about their health sometimes. In health anxiety the worry takes over, and reassurance never seems to last.",
    short: "Health anxiety is when you spend so much time worrying you are ill, or going to get ill, that it starts to take over your life. Anxiety itself can cause symptoms like headaches or a racing heartbeat, which are easy to mistake for signs of illness. It is more common than many people think, and CBT is the evidence-based treatment.",
    sections: [
      {
        heading: "When worry takes over",
        paragraphs: [
          "Health anxiety is when you spend so much time worrying you are ill, or going to get ill, that it starts to take over your life. It is related to obsessive compulsive disorder (OCD).",
          "Anxiety UK describes a preoccupation with the idea of having, or going to have, a physical illness. A person may fix on any type of illness, and a common example is a fear of cancer.",
        ],
      },
      {
        heading: "Ordinary worry, and when it becomes a problem",
        paragraphs: [
          "We all worry about our health from time to time, such as before an operation or when called back after tests. Looking after our health, with regular checks and an awareness of changes in our body, is very important.",
          "Health worries become a problem when they get in the way of normal life, even though any serious physical cause for symptoms has been ruled out. It can also affect people who do have a physical health problem but find they worry too much about it.",
        ],
      },
      {
        heading: "Anxiety in the body",
        paragraphs: [
          "Anxiety affects the way we feel, the way we think, the way we behave and the way our body works. It can bring a pounding heart, a tight chest, dizziness, tingling, headaches and a churning stomach.",
          "Anxiety itself can cause symptoms like headaches or a racing heartbeat, and you may mistake these for signs of illness. If a person with health anxiety feels their chest getting tight, they may believe they are having a heart attack.",
        ],
      },
      {
        heading: "More common than you might think",
        paragraphs: [
          "Everyone worries about their health now and then. No Panic says many people would be surprised how common health anxiety is, and estimates that one in four doctor's appointments are the result of it.",
          "In the past, health anxiety was called hypochondriasis, and it is still sometimes called hypochondria.",
        ],
      },
      {
        heading: "It can be treated",
        paragraphs: [
          "The evidence-based treatment for health anxiety is cognitive behavioural therapy (CBT). A GP can refer you, or you can refer yourself directly to an NHS talking therapies service.",
          "Severe health anxiety can also be a sign of serious depression. If you also feel very low, speak to your GP about this.",
        ],
      },
    ],
    helps: [
      "See a GP if worries about your health are stopping you leading a normal life, or self-help is not working.",
      "Refer yourself directly to an NHS talking therapies service; you do not need a referral from a GP.",
      "Remember that anxiety itself can cause symptoms like headaches or a racing heartbeat.",
      "Speak to your GP if you also feel very low or depressed.",
      CRISIS,
    ],
    tryThisWeek: [
      "See a GP if worry stops normal life.",
      "Find your local talking therapies service.",
      "Notice symptoms anxiety itself can cause.",
    ],
    ask: "Could my worries about my health be health anxiety, and can I be referred for CBT?",
    interactive: {
      kind: "flip-cards",
      title: "Four ways anxiety can show up",
      intro: "Turn each card to see how anxiety, including health anxiety, can affect you. Most people notice more than one.",
      cards: [
        { id: "feel", front: "How you feel", when: "Your emotions", back: "Anxious, tense or on edge, a feeling of dread, or panicky. You may also feel tired or unwell." },
        { id: "think", front: "How you think", when: "Your thoughts", back: "Constantly worrying about health, imagining the worst, and worrying that the doctor may have missed something." },
        { id: "body", front: "How your body works", when: "Your body", back: "A pounding or racing heart, a tight chest, dizziness, tingling or numbness, headaches and a churning stomach." },
        { id: "do", front: "What you do", when: "Your behaviour", back: "Checking your body, asking for reassurance, looking up illnesses, or acting as if you were ill." },
      ],
    },
    sources: [NHS_HA, NIDIRECT, AUK_HA, CNTW, NO_PANIC, OXFORD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What can anxiety itself cause?",
      options: [{ text: "Symptoms like headaches or a racing heartbeat", right: true }, { text: "No physical symptoms at all" }, { text: "Only bad dreams" }],
      why: "Anxiety itself can cause symptoms like headaches or a racing heartbeat, and you may mistake these for signs of illness.",
    },
  },
  {
    id: "hanx-cycle",
    kicker: "The cycle",
    question: "Why do checking and reassurance make my health worries worse?",
    hook: "Checking brings relief for a moment. Then the worry comes back, and the urge to check comes with it.",
    short: "In health anxiety, a vicious cycle keeps the problem going. A trigger, such as a body sensation or a story in the news, leads to worrying thoughts and anxiety, and the anxiety brings more symptoms. Checking, searching and asking for reassurance ease the worry in the short term, but keep it going in the long term.",
    sections: [
      {
        heading: "How the cycle turns",
        paragraphs: [
          "An NHS self-help guide describes a vicious cycle. Triggers include illness or death in the family, being ill, noticing normal body sensations, stress, and health stories in the papers or on TV.",
          "These lead to tension and a focus on body symptoms. Anxiety then brings more symptoms, such as shakiness, breathlessness, headaches or tingling, which feed worrying thoughts and the urge to check, ask or avoid.",
        ],
      },
      {
        heading: "The more you look, the more you find",
        paragraphs: [
          "When we focus on one part of the body, we notice sensations, bumps and lumps we were not aware of before. The more you focus on one area or symptom, the more you notice it.",
          "Squeezing, prodding, scratching and mirror gazing can make symptoms worse. No Panic says the more you focus on bodily sensations, the more they are amplified.",
        ],
      },
      {
        heading: "Why reassurance does not last",
        paragraphs: [
          "Reassurance works at first, and you feel a little less worried. But it does not last, the worry is soon back, and asking often keeps the symptoms very much in your mind.",
          "If reassurance does not work the first or second time, it may actually be keeping your worry going. People with health anxiety can remain convinced they are seriously ill, and that professionals have missed something.",
        ],
      },
      {
        heading: "Searching and avoiding",
        paragraphs: [
          "Finding out too much about illness, from books, magazines and especially the internet, can increase worries and draw your attention to new symptoms or body areas.",
          "Some people avoid anything to do with illness, or stop exercising in case it brings on illness. This can keep worries going, and loss of fitness can lower mood and add to symptoms.",
          "Others avoid medical visits completely, just in case something is really wrong. No Panic says this can make things a lot worse, because the feared illness is never ruled out.",
        ],
      },
      {
        heading: "Breaking the cycle",
        paragraphs: [
          "No Panic says it is not the symptoms that are the problem, but how you react to them. Worrying about health is something learnt that has become a habit, and the brain can be retrained.",
          "CBT for health anxiety explores ways to change reassurance-seeking and checking, and to go about day-to-day life without a frightening preoccupation with illness.",
        ],
      },
    ],
    helps: [
      "Notice when checking, searching or asking for reassurance gives only short-term relief.",
      "Keep a diary of how often you check your body, ask for reassurance or look at health information.",
      "Try to reduce how often you do these things, gradually, over a week.",
      "Gradually start doing things you have been avoiding because of your health worries.",
      CRISIS,
    ],
    tryThisWeek: [
      "Spot one time relief did not last.",
      "Count your checks in a diary.",
      "Cut back gradually over the week.",
    ],
    ask: "Could checking and reassurance be keeping my health worries going, and can CBT help me change them?",
    interactive: {
      kind: "timeline",
      title: "How the cycle keeps going",
      steps: [
        { id: "trigger", when: "Step 1", title: "A trigger", points: ["A body sensation, stress, or a health story in the news.", "Or being ill, or illness in the family."] },
        { id: "thoughts", when: "Step 2", title: "Worrying thoughts", points: ["Thoughts like: is my heart failing?", "Tension builds, and you focus on your body."] },
        { id: "symptoms", when: "Step 3", title: "More symptoms", points: ["Anxiety brings shakiness, headaches or tingling.", "The more you focus, the more you notice."] },
        { id: "checking", when: "Step 4", title: "Checking and asking", points: ["Checking your body or searching online.", "Asking a doctor, family or a friend."] },
        { id: "relief", when: "Step 5", title: "Short relief, then back again", points: ["The worry eases for a short time.", "It soon returns, and the cycle starts again."] },
      ],
    },
    sources: [CNTW, NO_PANIC, OXFORD, NHS_HA, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does reassurance usually do in health anxiety?",
      options: [{ text: "It helps at first, but the worry is soon back", right: true }, { text: "It ends the worry for good" }, { text: "It makes no difference at all" }],
      why: "Reassurance works at first, and you feel a little less worried. But it does not last, the worry is soon back, and asking often keeps the symptoms very much in your mind.",
    },
  },
  {
    id: "hanx-after-illness",
    kicker: "After a scare",
    question: "Why do I worry so much about my health since I was ill?",
    hook: "After a real illness or a frightening scare, every new ache can feel like a warning. That is common, and it often eases with time.",
    short: "A period of ill health or a serious health problem can leave you fearing the worst, and that can make health anxiety more likely. Worries about an illness coming back are very common after treatment, and they often get better with time. If worry and checking start to take over, your GP or care team can help.",
    sections: [
      {
        heading: "Why it can start",
        paragraphs: [
          "There can be many reasons why someone starts worrying too much about their health. You may have had a period of ill health or a serious health problem that has left you fearing the worst.",
          "It can also follow a very stressful time, illness or death in the family where early symptoms were missed, or growing up with someone who worried a lot about health.",
          "Some people with health anxiety have had their concerns dismissed by others, or have had a medical problem missed or misdiagnosed.",
        ],
      },
      {
        heading: "Common after a stroke or cancer",
        paragraphs: [
          "It is very common to feel anxious after a stroke. Around one in four people who have a stroke will experience anxiety within the first five years, and many worry they might have another stroke.",
          "After cancer treatment, it is common to worry that every symptom is linked to cancer. You will still be getting used to what is now normal for you, and you will get the same aches and pains as most other people.",
        ],
      },
      {
        heading: "Worry often eases",
        paragraphs: [
          "Worrying about cancer coming back is common after treatment, and the feelings often get better with time. Going to hospital for a test, or hearing about cancer in the news, can bring them back.",
          "After a stroke, you may find your fears ease over time. But seek help if you become anxious about a wide range of things, if anxiety stops you doing what you want or need to do, or if you feel anxious for no obvious reason.",
        ],
      },
      {
        heading: "Know what to look out for",
        paragraphs: [
          "Macmillan suggests asking your cancer team about any symptoms to look out for, and about possible late effects of treatment. Knowing more can help you manage any worries.",
          "Tell your team if you have new symptoms, or symptoms like those you had when you were diagnosed. You do not have to wait for your follow-up appointment, and if you have been discharged, you can contact your GP.",
        ],
      },
      {
        heading: "When checking takes over",
        paragraphs: [
          "It is important to be aware of changes in your body, but constantly checking for symptoms can make you feel anxious. If you find yourself doing this, talk to your care team or your GP practice, who can get you the support you need.",
          "Focusing on what you can control can help. That includes your recovery and wellbeing, talking about your feelings, knowing your triggers, and doing activities you enjoyed before.",
        ],
      },
    ],
    helps: [
      "Ask your care team which symptoms to look out for, and about possible late effects of treatment.",
      "Tell your team or GP about new symptoms, or symptoms like those you had before.",
      "If you are checking your body constantly, talk to your care team or GP practice.",
      "Focus on what you can control: your recovery, your wellbeing and activities you enjoy.",
      "Seek help if anxiety spreads to a wide range of things or stops you doing what you want or need to do.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask which symptoms to look out for.",
      "Do one activity you enjoyed before.",
      "Talk to your team about constant checking.",
    ],
    ask: "Which symptoms should I look out for after my illness, and can I get support with my worries?",
    interactive: {
      kind: "risk-check",
      title: "What can make health anxiety more likely",
      intro: "Tick any that fit you. Most cannot be changed, but knowing them can help make sense of your worries.",
      items: [
        { id: "ill-health", label: "A period of ill health", note: "A serious health problem can leave you fearing the worst.", changeable: false },
        { id: "stress", label: "A very stressful time", note: "A difficult period can bring stress-related symptoms, which can be worrying.", changeable: false },
        { id: "family-illness", label: "Illness or death in the family", note: "Especially where early symptoms were missed.", changeable: false },
        { id: "worried-family", label: "A family member who worried a lot", note: "Someone who worried about their health, or yours, when you were young.", changeable: false },
        { id: "dismissed", label: "Concerns dismissed or missed", note: "Some people with health anxiety have had concerns dismissed, or a problem missed or misdiagnosed.", changeable: false },
        { id: "checking", label: "Checking your body constantly", note: "Being aware of changes matters, but constant checking can make you anxious. Your care team or GP can help.", changeable: true },
      ],
    },
    sources: [CNTW, OXFORD, STROKE_ANXIETY, MACMILLAN_WORRIES, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What often happens to worries about cancer coming back after treatment?",
      options: [{ text: "They often get better with time", right: true }, { text: "They always get worse" }, { text: "They never change" }],
      why: "Worrying about cancer coming back is common after treatment, and the feelings often get better with time.",
    },
  },
  {
    id: "hanx-signs",
    kicker: "Signs",
    question: "How do I know if my health worries have become a problem?",
    hook: "Worrying about a symptom now and then is normal. When worry, checking and searching shape your days, it may be health anxiety.",
    short: "You may have health anxiety if you constantly worry about your health, check your body often, keep asking for reassurance, or worry that doctors or tests have missed something. It becomes a problem when it gets in the way of everyday life. Anxiety UK strongly advises seeing a GP, who can make a formal diagnosis.",
    sections: [
      {
        heading: "Common signs",
        paragraphs: [
          "You may have health anxiety if you constantly worry about your health, often check your body for signs of illness such as lumps, tingling or pain, or are always asking people for reassurance that you are not ill.",
          "Other signs are worrying that a doctor or medical tests may have missed something, looking at health information a lot, avoiding anything to do with serious illness, and acting as if you were ill, such as avoiding physical activities.",
        ],
      },
      {
        heading: "Two opposite patterns",
        paragraphs: [
          "Some people avoid anything to do with illness, such as medical programmes on TV. Others are drawn to any information about illness, and begin to notice the signs of it in themselves.",
          "Some seek medical examinations to rule illnesses out, while others avoid medical visits completely, just in case something is really wrong.",
        ],
      },
      {
        heading: "Anxiety UK's questions",
        paragraphs: [
          "Anxiety UK asks about the last 6 months. Have you been preoccupied with having a serious illness for at least six months, and has it caused distress and affected family life, social life and work?",
          "Have you felt a need for constant online searches and self-examination, doubted your doctor's reassurance, or needed reassurance from doctors, family and friends even when you do not really believe it? If you answer yes to most, it is likely you are affected by health anxiety.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "See a GP if worries about your health are preventing you leading a normal life, or if self-help is not working. Anxiety UK strongly advises getting guidance from a GP, who will be able to make a formal diagnosis.",
          "Severe health anxiety can also be a sign of serious depression. If you also feel very low, speak to your GP about this.",
        ],
      },
    ],
    helps: [
      "Notice how often you check, search and ask for reassurance, and how it affects your days.",
      "See a GP if your worries stop you leading a normal life, or self-help is not working.",
      "Ask your GP for a formal diagnosis rather than relying on self-diagnosis.",
      "Tell your GP if you also feel very low or depressed.",
      CRISIS,
    ],
    tryThisWeek: [
      "Note how often you check or search.",
      "Book a GP if it stops normal life.",
      "Mention low mood to your GP.",
    ],
    ask: "Could these signs be health anxiety, and what treatment would you suggest?",
    interactive: {
      kind: "signs",
      title: "Signs you may notice",
      intro: "Tick any that fit you on most days. You can take the list to your GP to help explain what is going on.",
      signs: ["Constantly worrying about my health", "Checking my body for lumps, tingling or pain", "Asking people if I am ill", "Worrying a doctor or test missed something", "Looking up health information a lot", "Avoiding anything to do with serious illness", "Avoiding activity in case I am ill", "Mistaking anxiety symptoms for illness"],
      after: "These are common signs of health anxiety. A GP can make a formal diagnosis and talk to you about treatment, such as CBT.",
      copyHeading: "Health worries I have noticed",
    },
    sources: [NHS_HA, CNTW, NO_PANIC, AUK_HA, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When should you see a GP about health worries?",
      options: [{ text: "When they stop you leading a normal life", right: true }, { text: "Only after a year" }, { text: "Never, they always pass" }],
      why: "See a GP if worries about your health are preventing you leading a normal life, or if self-help is not working.",
    },
  },
  {
    id: "hanx-cbt",
    kicker: "Treatment",
    question: "How does CBT help with health anxiety?",
    hook: "CBT does not argue you out of your fears. It helps you see the cycle, change what keeps it going and take back the time worry uses up.",
    short: "Cognitive behavioural therapy (CBT) is the evidence-based treatment for health anxiety. A therapist helps you change how you think and act, including cutting down reassurance-seeking and checking, and getting back to everyday life. You can refer yourself to NHS talking therapies, and CBT usually takes between 5 and 15 sessions.",
    sections: [
      {
        heading: "What CBT is",
        paragraphs: [
          "CBT is a type of talking therapy where a therapist helps you to change how you think and act. The evidence-based treatment for health anxiety is CBT.",
          "NHS talking therapies may help if you worry constantly about your health. Brief, focused CBT may be effective, but some people need a longer or more intensive course.",
        ],
      },
      {
        heading: "What CBT for health anxiety involves",
        paragraphs: [
          "Oxford Health NHS Foundation Trust describes building a strong working relationship with the therapist, and a shared understanding of the problem, with a focus on what keeps the belief that a serious illness is present.",
          "It explores ways to change reassurance-seeking and checking for symptoms, and to go about day-to-day life without a frightening preoccupation with illness. It then plans activities to restart a less anxious, less restricted life and work towards longer-term goals.",
        ],
      },
      {
        heading: "In a typical session",
        paragraphs: [
          "You talk about situations you find difficult, and how they make you think, feel and act. This could include questioning unhelpful thoughts, noticing physical feelings without reacting to them, and doing activities you have been avoiding.",
          "You will usually be asked to practise what you have learned between sessions, and it is important to do this for CBT to work. You may also be asked to record your progress in a worksheet or diary.",
        ],
      },
      {
        heading: "Getting CBT",
        paragraphs: [
          "You can refer yourself to NHS talking therapies without speaking to a GP, if you are registered with a GP and aged 18 or over, or 16 or over in some areas. You do not need a diagnosed mental health condition.",
          "You will have an assessment first, in person, online or on the phone. You will usually have between 5 and 15 sessions of CBT, depending on what you are having it for.",
          "If you can afford it, you can pay for therapy privately, and sessions can cost from £35 upwards. Before choosing a private therapist, make sure they are registered with a professional organisation accredited by the Professional Standards Authority.",
        ],
      },
      {
        heading: "After CBT",
        paragraphs: [
          "After your course of CBT has finished, it is important to keep using the skills you have learned. Speak to a GP if you are still having problems; they might suggest more CBT or a different type of treatment.",
        ],
      },
    ],
    helps: [
      "Refer yourself to NHS talking therapies, or ask your GP to refer you.",
      "Practise what you learn between sessions; it is important for CBT to work.",
      "Record your progress in a worksheet or diary if you are asked to.",
      "Keep using your skills after therapy ends.",
      "If you choose a private therapist, check they are registered with a professional organisation accredited by the Professional Standards Authority.",
      CRISIS,
    ],
    tryThisWeek: [
      "Refer yourself to talking therapies.",
      "Practise between sessions.",
      "Keep a progress diary.",
    ],
    ask: "Can I be referred for CBT for health anxiety, and how long is the wait here?",
    interactive: {
      kind: "timeline",
      title: "A course of CBT, step by step",
      steps: [
        { id: "refer", when: "Start", title: "Referral", points: ["Refer yourself, or ask your GP.", "You do not need a diagnosis."] },
        { id: "assess", when: "Next", title: "Assessment", points: ["A therapist asks about your symptoms and goals.", "In person, online or on the phone."] },
        { id: "understand", when: "Early sessions", title: "Understanding the cycle", points: ["Building a shared picture of what keeps it going.", "Spotting checking and reassurance-seeking."] },
        { id: "change", when: "Later sessions", title: "Making changes", points: ["Questioning unhelpful thoughts.", "Doing things you have been avoiding."] },
        { id: "after", when: "After", title: "Keeping it going", points: ["Keep using the skills you have learned.", "See a GP if problems continue."] },
      ],
    },
    sources: [NHS_CBT, OXFORD, NHS_FIND_TT, NHS_TT, NHS_HA, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What is the evidence-based treatment for health anxiety?",
      options: [{ text: "Cognitive behavioural therapy (CBT)", right: true }, { text: "Repeated scans" }, { text: "Avoiding all health news" }],
      why: "The evidence-based treatment for health anxiety is CBT.",
    },
  },
  {
    id: "hanx-checking-less",
    kicker: "Self-help",
    question: "How can I cut down on checking my body and searching symptoms?",
    hook: "Every check promises certainty, and never quite delivers. Cutting back slowly, day by day, is how the worry starts to loosen its grip.",
    short: "Checking your body, searching online and asking for reassurance feel helpful, but they keep health anxiety going. Keep a record of how often you do them, then reduce them gradually over a week. As you cut down, you should begin to feel less anxious about your health.",
    sections: [
      {
        heading: "Start with a record",
        paragraphs: [
          "Note how often you check your body, ask people for reassurance, or look at health information. Then try to gradually reduce how often you do these things over a week.",
          "An NHS self-help guide suggests also noting how worried you felt each day. In its example, John asked for reassurance 10 times a day at the start of the week and once by the end, and his worry fell too.",
        ],
      },
      {
        heading: "Cutting down body checks",
        paragraphs: [
          "Squeezing, prodding, scratching and mirror gazing can increase symptoms and make you feel very anxious. If you start prodding or pressing an area, you may cause yourself pain and discomfort.",
          "Make a plan to gradually reduce the number of checks you allow yourself each day. In the guide's example, Mary, who checked her skin for lumps 30 to 40 times a day, planned to cut down step by step to 2 checks a day by the end of the week.",
        ],
      },
      {
        heading: "Stepping back from searching",
        paragraphs: [
          "Too much focus on illness can lead people to focus on their own body and symptoms. You could try not reading medical books or websites, not searching lists of symptoms for a diagnosis, and not watching medical programmes.",
          "No Panic says searching symptoms online is one of the worst things you can do, as the diagnoses are notoriously inaccurate. Checking your blood pressure, pulse and heart rate again and again can also lead to unnecessary anxiety.",
        ],
      },
      {
        heading: "When the urge comes",
        paragraphs: [
          "When you get the urge to check your body, distract yourself, for example by going for a walk or calling a friend. Keep busy, and try to delay asking for reassurance.",
          "No Panic suggests telling yourself to stop, then focusing on your surroundings: what you can hear, see and feel. Try to break the habit by doing something completely different.",
        ],
      },
      {
        heading: "What to expect",
        paragraphs: [
          "As you reduce the number of checks, you should begin to feel less anxious about your health. Reducing the number of times you ask for reassurance will make you less anxious in the long term.",
          "Family or friends can support you in cutting down. If self-help is not working, see a GP.",
        ],
      },
    ],
    helps: [
      "Keep a diary of how often you check, search and ask for reassurance.",
      "Reduce these gradually over a week, a little less each day.",
      "Plan a daily limit on body checks, and lower it step by step.",
      "Try not to search lists of symptoms online for a diagnosis.",
      "When the urge comes, go for a walk or call a friend instead.",
      CRISIS,
    ],
    tryThisWeek: [
      "Count your checks in a diary.",
      "Lower your daily limit a little.",
      "Swap one search for a walk.",
    ],
    ask: "Can you help me make a plan to cut down on checking and searching, and is CBT available if I need it?",
    interactive: {
      kind: "timeline",
      title: "A week of cutting down",
      steps: [
        { id: "count", when: "Day 1", title: "Count", points: ["Note every check, search and request for reassurance.", "Note how worried you feel, too."] },
        { id: "limit", when: "Day 2", title: "Set a limit", points: ["Choose how many checks you will allow today.", "Make it a little lower than yesterday."] },
        { id: "delay", when: "Days 3 to 5", title: "Delay and distract", points: ["When the urge comes, try to delay.", "Go for a walk or call a friend."] },
        { id: "lower", when: "Days 6 and 7", title: "Lower it again", points: ["Keep reducing a little each day.", "Ask family or friends to support you."] },
        { id: "notice", when: "After a week", title: "Notice the change", points: ["As checks fall, anxiety should start to ease.", "See a GP if self-help is not working."] },
      ],
    },
    sources: [NHS_HA, CNTW, NO_PANIC, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does the NHS suggest once you have kept a diary of checking?",
      options: [{ text: "Gradually reduce how often you check, over a week", right: true }, { text: "Check more often, to be sure" }, { text: "Stop everything at once, forever" }],
      why: "Note how often you check your body, ask people for reassurance, or look at health information. Then try to gradually reduce how often you do these things over a week.",
    },
  },
  {
    id: "hanx-medicines",
    kicker: "Treatment",
    question: "Can medicine help with health anxiety?",
    hook: "Talking therapy usually comes first. For some people a medicine for anxiety is offered too, and it takes a few weeks to work.",
    short: "If a GP diagnoses health anxiety, they may refer you for a talking therapy such as CBT, or offer you a medicine for anxiety. Medicines for anxiety are usually a type of antidepressant called an SSRI, which can take a few weeks to work. Never stop an antidepressant suddenly or without talking to your doctor first.",
    sections: [
      {
        heading: "Therapy, medicine or both",
        paragraphs: [
          "If a GP diagnoses you with health anxiety, they may refer you for a talking therapy, such as cognitive behavioural therapy (CBT), or offer you a medicine for anxiety.",
          "For anxiety, a GP will usually advise trying talking therapies before medicine. The Royal College of Psychiatrists says a combination of medicine and talking therapy can be more effective for some people than either on its own.",
        ],
      },
      {
        heading: "SSRIs",
        paragraphs: [
          "Medicines that help treat anxiety are usually a type of antidepressant called an SSRI. Even though they are called antidepressants, they can be used to treat anxiety.",
          "SSRIs are the most widely used antidepressants, and are usually prescribed first because their side effects are generally easier to manage. Sertraline is one example, taken once a day at the same time.",
        ],
      },
      {
        heading: "Give it time",
        paragraphs: [
          "Antidepressants usually take 1 to 2 weeks to start having an effect, and can take up to 8 weeks to work fully. When you first start taking them, you will be seen by a doctor every 1 to 2 weeks.",
          "Common side effects include feeling agitated, shaky or anxious, feeling sick, headaches and difficulty sleeping. Many ease after a couple of weeks as your body gets used to the medicine.",
          "It is not common, but some people have suicidal thoughts or an urge to self-harm when they start an antidepressant. Speak to your doctor straight away if this happens.",
        ],
      },
      {
        heading: "Other medicines for anxiety",
        paragraphs: [
          "If SSRIs do not work for you, you might be offered another antidepressant called an SNRI. If neither works, you might be offered pregabalin, which can be addictive, so speak to your doctor straight away if you feel you are becoming dependent.",
          "Benzodiazepines are sometimes offered for a short time if anxiety feels out of control, as they can become addictive if used for too long. There is no strong evidence that herbal remedies work, so speak to your doctor before using them.",
        ],
      },
      {
        heading: "Staying on it, and stopping safely",
        paragraphs: [
          "You will usually take an antidepressant for at least 6 months after you feel better. Do not stop taking it suddenly or without talking to your doctor first.",
          "Your doctor will help you agree a plan to reduce the dose gradually, usually over several weeks or months. Ask a pharmacist or your doctor before taking other medicines or remedies, such as St John's wort.",
        ],
      },
    ],
    helps: [
      "Ask your GP whether talking therapy, medicine or both would suit you.",
      "Keep taking your medicine as prescribed; it can take up to 8 weeks to work fully.",
      "Talk to your doctor if side effects are hard to manage or the medicine is not helping.",
      "Never stop an antidepressant suddenly; your doctor will help you reduce it gradually.",
      "Check with a pharmacist or doctor before taking other medicines or herbal remedies.",
      CRISIS,
    ],
    tryThisWeek: [
      "Take it as prescribed each day.",
      "Note side effects for your doctor.",
      "Check remedies with a pharmacist.",
    ],
    ask: "Would a medicine help my health anxiety alongside CBT, and what side effects should I look out for?",
    interactive: {
      kind: "flip-cards",
      title: "Medicines for anxiety, card by card",
      intro: "Turn each card to see when each may be offered. Always talk to your doctor before changing or stopping anything.",
      cards: [
        { id: "ssri", front: "SSRIs, such as sertraline", when: "Usually the first medicine", back: "Antidepressants that can treat anxiety. They usually start to work in 1 to 2 weeks, and can take up to 8 weeks to work fully." },
        { id: "snri", front: "SNRIs", when: "If SSRIs do not work", back: "Another type of antidepressant, similar to SSRIs but working slightly differently." },
        { id: "pregabalin", front: "Pregabalin", when: "If SSRIs and SNRIs do not work", back: "Shown to help people with anxiety. It can be addictive, so tell your doctor straight away if you feel dependent." },
        { id: "benzodiazepines", front: "Benzodiazepines", when: "For a short time only", back: "Sedatives sometimes offered if anxiety feels out of control. They can become addictive if used for too long." },
        { id: "beta-blockers", front: "Beta-blockers", when: "Rarely", back: "They slow the heart, which can help stop the physical feelings of anxiety." },
        { id: "herbal", front: "Herbal remedies", when: "Ask your doctor first", back: "No strong evidence that any of them work, and they can cause serious problems with other medicines." },
      ],
    },
    sources: [NHS_HA, NHS_GAD, RCPSYCH_GAD, NHS_ANTIDEPRESSANTS, NHS_SERTRALINE, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How long can antidepressants take to work fully?",
      options: [{ text: "Up to 8 weeks", right: true }, { text: "A few hours" }, { text: "They work straight away" }],
      why: "Antidepressants usually take 1 to 2 weeks to start having an effect, and can take up to 8 weeks to work fully.",
    },
  },
  {
    id: "hanx-gp-plan",
    kicker: "Your GP",
    question: "How can my GP and I agree a plan for my health worries?",
    hook: "Going back again and again rarely brings the reassurance you need. A prepared conversation and a shared plan can do more.",
    short: "Going to the doctor for tests and reassurance can make you feel better for a while, but tends to keep you thinking about your health. Preparing for appointments, talking openly about your anxiety and agreeing a plan with your GP can help. Your GP can also refer you for CBT and tell you about local services.",
    sections: [
      {
        heading: "Why repeat visits do not settle it",
        paragraphs: [
          "Asking for reassurance, including going to the doctor for tests, makes you feel better in the short term. But it tends to make you think more about your health and become more anxious in the longer term.",
          "People with health anxiety can remain convinced that they are seriously ill and that medical professionals have missed something.",
        ],
      },
      {
        heading: "What a good appointment looks like",
        paragraphs: [
          "Anxiety UK describes a successful consultation as one where you share your concerns, the GP uses their skills and knowledge to address them, and together you agree a plan for your health and wellbeing.",
          "Discussing your overall health, including how your anxiety is being managed, gives your GP a fuller picture. It can help them tell the difference between symptoms of anxiety and other health issues.",
        ],
      },
      {
        heading: "Preparing",
        paragraphs: [
          "Write down or think about what you want to talk about, the questions you want to ask, and what you want to get from the appointment. This can help if you are feeling anxious.",
          "GP appointments usually last no longer than 10 minutes, so you can ask for a double appointment. You can also ask to see the same GP you saw last time, and take a loved one with you.",
        ],
      },
      {
        heading: "Questions to ask",
        paragraphs: [
          "Anxiety UK suggests questions such as what might be causing your symptoms, what you should do if they persist or get worse, and how to get advice if you have more questions.",
          "If there is anything you do not understand, ask your GP to explain. Feel free to take notes during the appointment.",
        ],
      },
      {
        heading: "Treatment and support",
        paragraphs: [
          "Your GP may refer you for a talking therapy, such as CBT, or offer you a medicine for anxiety. If you feel you need more help, your GP can tell you about other treatments and local services.",
        ],
      },
    ],
    helps: [
      "Write down your symptoms, your questions and what you want from the appointment.",
      "Ask for a double appointment, or to see the same GP you saw last time.",
      "Talk openly about your anxiety and how it is being managed.",
      "Agree a plan with your GP, including what to do if symptoms persist or get worse.",
      "Ask your GP about CBT and other local services.",
      CRISIS,
    ],
    tryThisWeek: [
      "Write down your questions.",
      "Ask for a double appointment.",
      "Agree what to do if things change.",
    ],
    ask: "Can we agree a plan for my health worries, including what to do if a symptom persists or gets worse?",
    interactive: {
      kind: "signs",
      title: "What to take to your appointment",
      intro: "Tick what you want to cover. The ticked items are copied as a list you can take with you.",
      signs: ["The symptoms I have noticed, and when", "What makes them better or worse", "Any medicines I take", "How my anxiety is affecting daily life", "How often I check or ask for reassurance", "What I want from this appointment", "What to do if symptoms persist or worsen", "Whether CBT could help me"],
      after: "Preparing like this can help if you are feeling anxious, and helps you and your GP agree a plan together.",
      copyHeading: "For my GP appointment",
    },
    sources: [CNTW, OXFORD, AUK_TOOLKIT, RETHINK_GP, NHS_HA, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does going to the doctor for reassurance tend to do in the longer term?",
      options: [{ text: "Make you think more about your health and feel more anxious", right: true }, { text: "End health anxiety for good" }, { text: "Nothing at all" }],
      why: "Asking for reassurance, including going to the doctor for tests, makes you feel better in the short term. But it tends to make you think more about your health and become more anxious in the longer term.",
    },
  },
  {
    id: "hanx-uncertainty",
    kicker: "Living well",
    question: "How can I live with not knowing for certain that I am well?",
    hook: "No test can promise perfect health. Making room for some uncertainty frees up the time that worry has been taking.",
    short: "You can never be completely sure that your health is perfect, and living with some uncertainty is normal and healthy. Trying to remove all doubt with checking and tests keeps health anxiety going. Worry time, more balanced thoughts and mindfulness can help you make room for uncertainty.",
    sections: [
      {
        heading: "Complete certainty is not possible",
        paragraphs: [
          "We all need to take good care of our health and seek help where appropriate. But you can never be completely sure that your health is perfect, and living with some uncertainty is normal and healthy.",
          "Lots of tests are not the only way to know you are well. You cannot have tests all of the time, and there is no way to be completely sure, so it is better not to waste time worrying about it.",
        ],
      },
      {
        heading: "What worry costs",
        paragraphs: [
          "You can waste a lot of time worrying that something is seriously wrong and picturing the outcome. An NHS self-help guide asks what good things you could do if you were not worrying about your health.",
          "It suggests listing the advantages and disadvantages of carrying on worrying. Reassurance may bring relief in the short term, but in the longer term you may need to ask again and again, and feel very tense.",
        ],
      },
      {
        heading: "Set aside worry time",
        paragraphs: [
          "If worries are taking over your day, try setting aside a short worry time, say 10 or 15 minutes every day, to write things down and try to find solutions. When a worry comes at other times, think: I will set that aside for my worry time.",
          "Ask whether there is anything practical you can do about each worry. For worries you cannot do anything about, try to acknowledge and accept this, then shift your focus.",
        ],
      },
      {
        heading: "Catch it, check it, change it",
        paragraphs: [
          "Unhelpful thoughts include always expecting the worst outcome. When you catch one, check it: how likely is the outcome, is there good evidence for it, and what would you say to a friend thinking this way?",
          "If you have health anxiety, you will tend to see any information, however neutral, as a sign that something is seriously wrong. Watch out for this habit and challenge it.",
        ],
      },
      {
        heading: "Coming back to the present",
        paragraphs: [
          "Mindfulness means paying attention to the present moment. It can help you see thoughts as mental events that come and go, and notice when you are caught up in worries about the future.",
          "You can accept that you tend to have worrying thoughts, but they do not mean these worries will come true. Try to distance yourself from the thought, and bring your attention back to the here and now.",
        ],
      },
    ],
    helps: [
      "Remind yourself that living with some uncertainty is normal and healthy.",
      "List the advantages and disadvantages of carrying on worrying about your health.",
      "Set a daily worry time of 10 or 15 minutes, and save worries for it.",
      "Catch, check and change thoughts that expect the worst.",
      "Bring your thoughts back to the here and now, using mindfulness.",
      CRISIS,
    ],
    tryThisWeek: [
      "Set a 15-minute worry time.",
      "Check one worst-case thought.",
      "Try one mindful moment a day.",
    ],
    ask: "Could CBT help me cope with uncertainty about my health?",
    interactive: {
      kind: "scenarios",
      title: "When uncertainty bites",
      scenarios: [
        {
          id: "at-work",
          situation: "A health worry pops into your head while you are busy at work.",
          options: [{ text: "Save it for your worry time", best: true }, { text: "Search it online straight away" }],
          why: "When a worry enters your mind, think: I will set that aside for my worry time. This can help you shift your focus back to the here and now.",
        },
        {
          id: "certain",
          situation: "You think: unless I am completely sure, I could be ill.",
          options: [{ text: "Accept that some uncertainty is normal", best: true }, { text: "Ask for another test" }],
          why: "You can never be completely sure that your health is perfect. Living with some uncertainty is normal and healthy.",
        },
        {
          id: "news",
          situation: "A neutral news story leaves you sure something is wrong with you.",
          options: [{ text: "Notice the habit and challenge it", best: true }, { text: "Take it as a sign" }],
          why: "Health anxiety tends to make you see any information, however neutral, as a sign that something is seriously wrong. Watch out for this and challenge it.",
        },
        {
          id: "prepared",
          situation: "You keep picturing the worst, to be prepared.",
          options: [{ text: "Bring your thoughts back to now", best: true }, { text: "Keep picturing it" }],
          why: "Believing that worry prepares you for the worst is one of the beliefs that keeps health anxiety going. Try to bring your thoughts back to the here and now.",
        },
      ],
    },
    sources: [CNTW, EMM_WORRIES, EMM_REFRAME, NHS_MINDFULNESS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does the NHS self-help guide say about uncertainty?",
      options: [{ text: "Living with some uncertainty is normal and healthy", right: true }, { text: "Enough tests will remove it" }, { text: "It means you are ill" }],
      why: "You can never be completely sure that your health is perfect, and living with some uncertainty is normal and healthy.",
    },
  },
  {
    id: "hanx-family",
    kicker: "Family and friends",
    question: "How can my family help without feeding the worry?",
    hook: "Saying \"you are fine\" feels kind, and it helps for a moment. Support that lasts looks a little different.",
    short: "Families are often asked for reassurance, and it is natural to give it. But reassurance soon wears off, and asking often keeps health worries going. Family and friends can help by listening, taking the feelings seriously, supporting less checking and searching, and encouraging help.",
    sections: [
      {
        heading: "Why reassurance wears off",
        paragraphs: [
          "People with health anxiety often seek comfort from friends and family. Reassurance works at first, but it does not last, and the worry is soon back.",
          "Anxiety UK says that simply explaining that anxious thoughts are unfounded will not always reassure someone. In an NHS self-help guide's example, someone felt relief when their husband said it did not feel like a lump to him, but then had to ask again and again, grew very tense, and he got cross.",
        ],
      },
      {
        heading: "Take the feelings seriously",
        paragraphs: [
          "Even if someone's worries do not seem rational to you, the way they are feeling will be very real to them. You do not have to encourage their anxious thoughts, but you can reassure them that their feelings are valid and they deserve support.",
          "Listening is an important skill. Ask open questions that start with how, what, where or when, and listen without judgement.",
        ],
      },
      {
        heading: "Helping with change",
        paragraphs: [
          "The NHS self-help guide suggests asking family or friends to support you in cutting down on looking for illness information. Reducing the number of times you ask for reassurance will make you less anxious in the long term.",
          "Anxiety UK suggests asking the person how you can help, rather than simply giving advice. Being reliable, so they know they can depend on you, can make a world of difference.",
        ],
      },
      {
        heading: "Life beyond the worry",
        paragraphs: [
          "Try to make sure anxiety is not the only thing your relationship focuses on. Encourage things they enjoy, such as exercising, time outdoors and socialising, or something new you could do together.",
          "Encourage them to explore support, such as self-help resources, support groups or therapy. Do not force someone to talk to you or get help, or go to a GP on their behalf.",
        ],
      },
      {
        heading: "Look after yourself too",
        paragraphs: [
          "It can be upsetting to hear someone you care about in distress. Be kind to yourself, and take some time to relax or do something you enjoy.",
          "If someone needs more help, suggest they contact a GP, get help from NHS 111, or refer themselves to NHS talking therapies.",
        ],
      },
    ],
    helps: [
      "Listen without judgement, and take the person's feelings seriously.",
      "Support them in asking for reassurance and looking up illness less often.",
      "Ask how you can help, rather than simply giving advice.",
      "Make sure anxiety is not the only thing you talk about; do enjoyable things together.",
      "Look after yourself, and take time to relax.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask how you can help.",
      "Plan one enjoyable thing together.",
      "Take some time for yourself.",
    ],
    ask: "How can our family support treatment for health anxiety without adding to the reassurance cycle?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments at home",
      scenarios: [
        {
          id: "lump",
          situation: "Your partner asks, again, whether a lump feels normal to you.",
          options: [{ text: "Acknowledge the worry, and support asking less", best: true }, { text: "Check it for them once more" }],
          why: "Reassurance works at first, but it does not last. Reducing how often they ask for reassurance will make them less anxious in the long term.",
        },
        {
          id: "searching",
          situation: "They are reading about a frightening illness online late at night.",
          options: [{ text: "Offer to do something together instead", best: true }, { text: "Read it through with them" }],
          why: "Too much information about illness can increase worries. Family can support cutting down, and doing something together can help.",
        },
        {
          id: "rational",
          situation: "Their worries do not seem rational to you.",
          options: [{ text: "Take their feelings seriously", best: true }, { text: "Tell them it is all in their head" }],
          why: "Even if someone's worries do not seem rational to you, the way they are feeling will be very real to them.",
        },
        {
          id: "worn-out",
          situation: "You feel worn out by it all.",
          options: [{ text: "Take some time to look after yourself", best: true }, { text: "Keep going without a break" }],
          why: "It can be upsetting to hear someone you care about in distress. Be kind to yourself, and take some time to relax or do something you enjoy.",
        },
      ],
    },
    sources: [CNTW, AUK_SUPPORTING, RCPSYCH_GAD, EMM_HELPING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Why can giving reassurance keep health anxiety going?",
      options: [{ text: "It helps at first, but the worry soon comes back", right: true }, { text: "It solves the worry for good" }, { text: "It has no effect at all" }],
      why: "Reassurance works at first, but it does not last, and the worry is soon back.",
    },
  },
  {
    id: "hanx-new-symptoms",
    kicker: "Staying safe",
    question: "How do I know when a new symptom does need checking?",
    hook: "Health anxiety does not mean ignoring your body. Knowing the real warning signs, and where to go, can make the other days calmer.",
    short: "Being aware of changes in your body is important, and health anxiety does not mean every symptom should be ignored. Call 999 for signs of a heart attack or stroke, use NHS 111 if you are not sure what to do, and see a GP about chest pain that comes and goes or symptoms that worry you. Agreeing with your GP or care team what to look out for can help.",
    sections: [
      {
        heading: "Being aware is still important",
        paragraphs: [
          "Looking after our health, by having regular health checks and being aware of changes in our body, is very important. Some people are so anxious about their health that they avoid routine screening or specialist appointments.",
          "No Panic says avoiding medical visits completely, just in case something is wrong, can make things a lot worse, because the feared illness is never ruled out.",
        ],
      },
      {
        heading: "When to call 999",
        paragraphs: [
          "Call 999 if you get sudden chest pain or discomfort that does not go away, pain that spreads to your arms, neck, jaw, stomach or back, or chest pain with sweating, feeling sick, light-headed or short of breath. Most chest pain is not a sign of anything serious, but get medical advice just in case.",
          "Call 999 if you think you or someone else is having a stroke, even if the symptoms stop. FAST stands for face weakness, arm weakness, speech problems and time to call 999.",
        ],
      },
      {
        heading: "When you are not sure",
        paragraphs: [
          "NHS 111 can check your symptoms and tell you what to do if you are not sure whether you need to call 999. You can use 111 online, the NHS App, or call 111.",
          "See a GP if you have chest pain that comes and goes, or that goes away quickly but you are still worried. The NHS says not to self-diagnose, and to see a GP if you are worried.",
        ],
      },
      {
        heading: "New symptoms and anxiety",
        paragraphs: [
          "Anxiety can cause chest pain, often triggered by worries or stress, with a faster heartbeat, sweating and dizziness. If you cannot tell whether shortness of breath is from anxiety, or you are worried about any other symptoms, see a GP.",
          "In an Anxiety UK survey, some people with anxiety said their physical symptoms had been put down to their anxiety. Anxiety UK suggests noting symptoms down for several days before an appointment, and being clear if a symptom is new or unusual.",
        ],
      },
      {
        heading: "Know your own warning signs",
        paragraphs: [
          "If you have had an illness such as cancer, ask your team about any symptoms to look out for. Tell them if you have new symptoms, or symptoms like those you had when you were diagnosed.",
          "Anxiety UK suggests asking your GP what you should do if symptoms persist or get worse.",
        ],
      },
    ],
    helps: [
      "Call 999 for chest pain that does not go away or spreads, or for signs of a stroke.",
      "Use NHS 111 online, the NHS App or call 111 if you are not sure what to do.",
      "See a GP about chest pain that comes and goes, or any symptom that worries you.",
      "Keep up regular health checks; looking after your health is very important.",
      "Ask your GP or care team which symptoms to look out for, and what to do if they persist or get worse.",
      CRISIS,
    ],
    tryThisWeek: [
      "Learn the FAST signs of a stroke.",
      "Use 111 when you are not sure.",
      "Ask your team what to look out for.",
    ],
    ask: "Which symptoms should I act on straight away, and what should I do if a symptom persists or gets worse?",
    interactive: {
      kind: "scenarios",
      title: "Act now, ask soon, or follow your plan?",
      scenarios: [
        {
          id: "chest",
          situation: "Sudden chest pain that does not go away, and you feel sweaty and sick.",
          options: [{ text: "Call 999 straight away", best: true }, { text: "Wait and search online" }],
          why: "Chest pain that does not go away, or comes with sweating, feeling sick, light-headedness or breathlessness, could be a heart attack. Call 999 straight away.",
        },
        {
          id: "stroke",
          situation: "Someone's face droops on one side and their speech is slurred.",
          options: [{ text: "Call 999", best: true }, { text: "Wait to see if it passes" }],
          why: "FAST: face, arms, speech, time to call 999. Get medical help straight away, even if the symptoms stop.",
        },
        {
          id: "unsure",
          situation: "You are not sure whether a symptom needs a 999 call.",
          options: [{ text: "Use NHS 111", best: true }, { text: "Ask on social media" }],
          why: "NHS 111 can check your symptoms and tell you what to do.",
        },
        {
          id: "brief",
          situation: "A brief chest pain came and went, but you are still worried.",
          options: [{ text: "Book a GP appointment", best: true }, { text: "Check your pulse all evening" }],
          why: "See a GP if you have chest pain that goes away quickly but you are still worried. Checking your pulse again and again can lead to unnecessary anxiety.",
        },
        {
          id: "plan",
          situation: "A familiar ache your GP has already checked comes back.",
          options: [{ text: "Follow the plan you agreed with your GP", best: true }, { text: "Search for new causes online" }],
          why: "Agreeing with your GP what to do if symptoms persist or get worse gives you a plan. Searching lists of symptoms online can increase worries.",
        },
      ],
    },
    sources: [CNTW, OXFORD, NO_PANIC, NHS_CHEST, NHS_STROKE, NHS_999, NHS_111, EMM_ANXIETY, AUK_GASLIGHTING, AUK_TOOLKIT, MACMILLAN_WORRIES, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does FAST stand for?",
      options: [{ text: "Face, arms, speech, time to call 999", right: true }, { text: "Feel, act, sleep, talk" }, { text: "Fever, ache, sweat, tiredness" }],
      why: "The easiest way to remember the main symptoms of a stroke is the word FAST: face, arms, speech and time to call 999.",
    },
  },
  {
    id: "hanx-self-help",
    kicker: "Self-help",
    question: "What self-help works for health anxiety?",
    hook: "Small, steady steps at home use the same ideas as CBT, and many people find they make a real difference.",
    short: "The NHS suggests keeping a diary of checking, challenging worried thoughts with balanced ones, keeping busy, getting back to normal activities and learning to relax. Self-help books based on CBT, such as Overcoming Health Anxiety, can help too. See a GP if self-help is not working.",
    sections: [
      {
        heading: "Five NHS steps",
        paragraphs: [
          "Keep a diary of how often you check your body, ask people for reassurance or look at health information, and try to gradually reduce these over a week.",
          "Draw a table with 2 columns: your health worries in the first, and more balanced thoughts in the second. Next to a worry about headaches, you might write that headaches can often be a sign of stress.",
          "When you get the urge to check your body, go for a walk or call a friend. Gradually start doing things you have avoided because of your health worries, such as sports or socialising, and try breathing exercises to relax.",
        ],
      },
      {
        heading: "Get active again",
        paragraphs: [
          "Some people stop doing things in case it brings on illness. This makes you less healthy and fit, and in the long run it will lower your mood, so it is important to return to normal activities.",
          "Start by listing the things you have avoided because of health anxiety. Then make a step-by-step plan to bring them back, adding a little more each week.",
        ],
      },
      {
        heading: "Calming the body",
        paragraphs: [
          "A calming breathing exercise can help with stress, anxiety and panic, and takes just a few minutes. Breathe in gently through your nose and out through your mouth, counting from 1 to 5 if it helps, and repeat for at least 5 minutes.",
          "Mindfulness and relaxation training can help you reduce your focus on health anxiety and the distress it brings.",
        ],
      },
      {
        heading: "Books and online help",
        paragraphs: [
          "Overcoming Health Anxiety is a self-help book based on CBT, with techniques for the thoughts and behaviours that keep health anxiety going. Anxiety UK and an NHS self-help guide both recommend it.",
          "NHS Every Mind Matters has free self-help CBT techniques, such as tackling your worries, reframing unhelpful thoughts and facing your fears.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "Try to get enough sleep, exercise regularly and eat a healthy diet with regular meals. Avoid lots of caffeine, and do not use alcohol, cigarettes, gambling or drugs to relieve anxiety.",
          "See a GP if self-help is not working, or if your worries are stopping you leading a normal life. You can also refer yourself to NHS talking therapies.",
        ],
      },
    ],
    helps: [
      "Keep a diary of checking and reassurance-seeking, and reduce it gradually.",
      "Write each health worry next to a more balanced thought.",
      "Make a step-by-step plan to get back to activities you have avoided.",
      "Practise a calming breathing exercise for at least 5 minutes, regularly.",
      "Try a self-help book based on CBT, such as Overcoming Health Anxiety.",
      CRISIS,
    ],
    tryThisWeek: [
      "Start a two-column thought table.",
      "Do one thing you have avoided.",
      "Breathe calmly for 5 minutes.",
    ],
    ask: "Is there a self-help book or course you would recommend for health anxiety?",
    interactive: {
      kind: "flip-cards",
      title: "Self-help tools, card by card",
      intro: "Turn each card to see how each tool works. Try one at a time.",
      cards: [
        { id: "diary", front: "A checking diary", when: "To see the pattern", back: "Note how often you check, ask for reassurance or look things up, then gradually reduce it over a week." },
        { id: "table", front: "A two-column table", when: "When a worry takes hold", back: "Write the health worry on one side and a more balanced thought on the other." },
        { id: "busy", front: "Keeping busy", when: "When the urge to check comes", back: "Go for a walk or call a friend instead of checking." },
        { id: "steps", front: "An activity plan", when: "If you have stopped doing things", back: "List what you have avoided, then bring it back step by step, week by week." },
        { id: "breathing", front: "Calm breathing", when: "Regularly, and when tense", back: "Breathe gently in through your nose and out through your mouth, for at least 5 minutes." },
        { id: "worry-time", front: "Worry time", when: "If worries fill the day", back: "Set aside 10 or 15 minutes a day to write worries down and look for solutions." },
      ],
    },
    sources: [NHS_HA, CNTW, NHS_BREATHING, AUK_HA, EMM_ANXIETY, EMM_WORRIES, NHS_GAD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What goes in the second column of the NHS worry table?",
      options: [{ text: "A more balanced thought", right: true }, { text: "Another symptom" }, { text: "A diagnosis from the internet" }],
      why: "Draw a table with 2 columns: your health worries in the first, and more balanced thoughts in the second.",
    },
  },
];
