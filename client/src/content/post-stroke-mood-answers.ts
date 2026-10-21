import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Depression after stroke page's pieces (content/library-conditions/
// cancer-mind-digestion.ts, condition "after-stroke"). Every sentence was written from wording checked on
// 21 October 2026 on the pages listed under each answer's `sources`; nothing is added that those pages do
// not say. Most of it comes from the Stroke Association, the NHS, Mind, the Royal College of Psychiatrists
// and Samaritans. Written to safe-messaging guidance: hopeful and practical, no method details, and every
// answer gives the crisis routes exactly as the NHS lists them (999 or A&E, NHS 111, Samaritans on 116 123,
// text SHOUT to 85258). Nothing here suggests stopping or changing a medicine without the doctor. General
// information only; it never replaces what a person's own stroke team, GP or mental health team tells them.

const sa = (label: string, path: string): LearnSource => ({ label: `Stroke Association: ${label}`, url: `https://www.stroke.org.uk/${path}` });
const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mind = (label: string, path: string): LearnSource => ({ label: `Mind: ${label}`, url: `https://www.mind.org.uk/information-support/${path}` });

const SA_EMOTIONAL = sa("Emotional and behavioural changes", "stroke/effects/emotional-and-behavioural");
const SA_DEP_ANX = sa("Depression and anxiety", "stroke/effects/emotional-and-behavioural/depression-and-anxiety");
const SA_EMOTIONALISM = sa("Difficulty controlling emotions (emotionalism)", "stroke/effects/emotional-and-behavioural/emotionalism");
const SA_TREATMENTS = sa("Treatments for emotional changes", "stroke/effects/emotional-and-behavioural/treatments");
const SA_TIPS = sa("Tips for family and friends", "stroke/effects/emotional-and-behavioural/tips");
const SA_FATIGUE = sa("Post-stroke fatigue and tiredness", "stroke/effects/physical/tiredness-and-fatigue");
const SA_MANAGING_FATIGUE = sa("Managing post-stroke fatigue", "stroke/effects/physical/managing-fatigue");
const SA_GROUPS = sa("Stroke support groups", "stroke/support/groups");
const SA_ONLINE = sa("Online Community", "stroke/support/online-community");
const SA_CALLS = sa("Weekly Volunteer Calls", "stroke/support/weekly-volunteer-calls");
const SA_SELF_CARE = sa("Health and wellbeing: how can I look after myself?", "stroke/support/carers/self-care");
const SA_SUPPORTING = sa("Supporting someone after a stroke", "stroke/support/carers/supporting-someone");
const SA_COPING = sa("How to cope after someone close to you has a stroke", "stroke/support/carers/coping");
const SA_EXERCISE = sa("Getting active after stroke", "stroke/recovery/exercise");
const SA_GOALS = sa("How to set goals to support your stroke recovery", "stroke/recovery/goals");
const SA_RISK = sa("Reducing your risk of another stroke", "stroke/manage-risk");
const SA_WORK = sa("Work after stroke", "stroke/life-after/work");
const SA_CHANGING = sa("Changing careers, retraining and volunteering", "stroke/life-after/work/changing");
const SA_HOBBIES = sa("Hobbies and leisure activities", "stroke/life-after/hobbies-and-leisure-activities");
const SA_COMMS = sa("Communication problems after stroke", "stroke/effects/aphasia/communication-problems");
const SA_COMMS_TIPS = sa("Tips for aiding communication", "stroke/effects/aphasia/communication-problems/tips");
const SA_COMMS_TOOLS = sa("Communication tools", "stroke/effects/aphasia/communication-tools");

const NHS_DEP = nhs("Depression in adults", "mental-health/conditions/depression-in-adults/overview/");
const NHS_DEP_SYMPTOMS = nhs("Symptoms of depression in adults", "mental-health/conditions/depression-in-adults/symptoms/");
const NHS_DEP_TREATMENT = nhs("Treatment for depression in adults", "mental-health/conditions/depression-in-adults/treatment/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_ANTIDEP = nhs("Antidepressants", "medicines/antidepressants/");
const NHS_SERTRALINE = nhs("Sertraline", "medicines/sertraline/");
const NHS_GAD = nhs("Generalised anxiety disorder (GAD)", "mental-health/conditions/generalised-anxiety-disorder-gad/");
const NHS_EXERCISE_DEP = nhs("Exercise for depression", "mental-health/self-help/guides-tools-and-activities/exercise-for-depression/");
const NHS_LOW_MOOD = nhs("Every Mind Matters: Low mood and depression", "every-mind-matters/mental-health-issues/low-mood/");
const NHS_STROKE_RECOVERY = nhs("Recovering from a stroke", "conditions/stroke/recovery/");
const NHS_APHASIA = nhs("Aphasia", "conditions/aphasia/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const MIND_SELF_CARE = mind("Self-care for depression", "types-of-mental-health-problems/depression/self-care/");
const MIND_PEER = mind("Is a support group right for me?", "guides-to-support-and-services/peer-support-groups/is-a-support-group-right-for-me/");
const MIND_CARERS = mind("How to look after yourself as a carer", "helping-someone-else/carers-friends-family-coping-support/looking-after-yourself/");

const RCPSYCH_DEP: LearnSource = { label: "Royal College of Psychiatrists: Depression", url: "https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/depression" };

/** The crisis routes, worded as the NHS "Help for suicidal thoughts" page gives them. Always the last `helps` line. */
const CRISIS = "If you feel you may be about to harm yourself, call 999 or go straight to A&E. For support at any hour, call NHS 111 or Samaritans on 116 123, or text SHOUT to 85258.";

export const postStrokeMoodAnswers: LearnArticle[] = [
  {
    id: "pds-why",
    kicker: "Understanding",
    question: "Why is depression so common after a stroke?",
    hook: "A stroke is sudden and shocking. Some low mood comes from the losses and the fright, and some from the injury to the brain itself.",
    short: "Depression is common after a stroke: around one in three stroke survivors will have some form of depression within the first year. Changes in mood can come from the psychological impact of the stroke, from damage to the parts of the brain that control emotions, or both. Depression is a real illness, not a weakness, and with the right treatment and support most people with depression can make a full recovery.",
    sections: [
      {
        heading: "Common, and not always straight away",
        paragraphs: [
          "Depression is common after a stroke. Around one in three stroke survivors will have some form of depression within the first year.",
          "But you may not have it straight away. Depression can appear months or even years later, and it can also return over and over again. Some people experience depression alongside anxiety.",
        ],
      },
      {
        heading: "The shock and the losses",
        paragraphs: [
          "A stroke is sudden and shocking. It can affect every part of your life, and for many people it may feel like they have lost the life they had before. Feelings of shock, denial, anger, grief and guilt are normal when you are faced with such a devastating change.",
          "Changes to how you feel can sometimes be due to the psychological impact of your stroke. You might feel anxious about having another stroke, or feel low if you cannot do some things you used to. Many people lose a lot of confidence, or feel lonely if they are spending more time at home as they recover.",
          "The NHS says life-changing events, such as bereavement or losing your job, can bring depression on. You can also become depressed for no obvious reason.",
        ],
      },
      {
        heading: "The injury itself",
        paragraphs: [
          "Sometimes, the damage to your brain from the stroke can cause emotional problems. Different parts of your brain control all aspects of your body and mind, including senses and emotions.",
          "If part of your brain controlling emotions is damaged, it can affect how you experience and express emotions. Other effects of stroke, such as pain or fatigue, can change how you feel and behave too.",
        ],
      },
      {
        heading: "Things that can look like it",
        paragraphs: [
          "Fatigue shares some of the signs of depression, such as feeling low, having anxiety, sleep problems and tiredness, but it is not the same thing. People can have both at the same time.",
          "Some physical illnesses can cause depression. So it is important to rule out possible physical causes, or side effects from any medicine you are taking.",
        ],
      },
      {
        heading: "Why it matters, and why there is hope",
        paragraphs: [
          "Emotional problems can also affect your recovery, for example if you are not feeling motivated to take part in rehabilitation. Noticing how you are feeling, and finding ways to get support, can help stop it becoming overwhelming.",
          "Depression is a real illness with real symptoms, not a sign of weakness. With the right treatment and support, most people with depression can make a full recovery. When emotions are overwhelming, it can be easy to think things will never get better, but they do.",
        ],
      },
    ],
    helps: [
      "Notice how you are feeling, and find ways to get support, which can help stop it becoming overwhelming.",
      "Talk to your GP or a member of your stroke team, and try to be honest about how you are feeling, even if it is hard to talk about.",
      "Ask your GP to rule out physical causes, or side effects from any medicine you take.",
      "Try to talk to your loved ones about how you are feeling.",
      "Call the Stroke Support Helpline on 0303 3033 100 if you need someone to talk to.",
      CRISIS,
    ],
    tryThisWeek: [
      "Notice how you are feeling.",
      "Tell your GP or stroke team.",
      "Talk to someone close to you.",
    ],
    ask: "Could what I'm feeling be depression rather than just the stroke?",
    interactive: {
      kind: "risk-check",
      title: "What can feed low mood?",
      intro: "Tick any that apply to you. Some you can change, and some you cannot.",
      items: [
        { id: "injury", label: "Damage to the brain's emotion areas", note: "If part of the brain controlling emotions is damaged, it can affect how you experience and express emotions.", changeable: false },
        { id: "losses", label: "Big changes and losses", note: "A stroke can bring sudden changes at home, at work and in relationships. Talking and getting support can help.", changeable: false },
        { id: "before", label: "Mental health problems before", note: "Some people had challenges with their mental health before a stroke as well as afterwards.", changeable: false },
        { id: "fear", label: "Fear of another stroke", note: "Feeling anxious about having another stroke is common. Support and treatment for anxiety can help.", changeable: true },
        { id: "fatigue", label: "Fatigue", note: "Fatigue may cause low mood and anxiety. Your GP or therapist may be able to suggest ways to manage it.", changeable: true },
        { id: "alone", label: "More time alone at home", note: "Many people feel lonely as they recover. Talking to others and support groups can help.", changeable: true },
        { id: "medical", label: "Other illnesses or medicines", note: "Some physical illnesses and medicine side effects can play a part, so ask your GP to check.", changeable: true },
      ],
    },
    sources: [SA_DEP_ANX, SA_EMOTIONAL, NHS_DEP, SA_FATIGUE, NHS_LOW_MOOD, SA_TREATMENTS, NHS_SUICIDAL],
    quiz: {
      question: "What can cause emotional problems after a stroke?",
      options: [{ text: "The impact of the stroke, the brain damage, or both", right: true }, { text: "A weak character" }, { text: "Not trying hard enough" }],
      why: "Changes in mood can come from the psychological impact of the stroke, from damage to the parts of the brain that control emotions, or both.",
    },
  },
  {
    id: "pds-emotionalism",
    kicker: "Emotionalism",
    question: "Why do I cry or laugh without meaning to?",
    hook: "It is called emotionalism. Changes in the brain after a stroke can bring tears or laughter with little warning, and it often eases with time.",
    short: "A stroke can affect your ability to control your emotions, so you may cry or laugh more, sometimes without much warning. This is called post-stroke emotionalism, and it is thought to be caused by changes in the brain. It is most common in the first few months, and many people find it improves or disappears altogether within the first six months.",
    sections: [
      {
        heading: "What emotionalism is",
        paragraphs: [
          "A stroke can affect your ability to control your emotions, which can mean you are more emotional than you used to be. This is called post-stroke emotionalism, sometimes known as emotional lability. It is thought that changes in your brain after a stroke cause it.",
          "People with emotionalism often find they cry more, sometimes without much warning or unexpectedly. Some people laugh more, sometimes at something inappropriate, though this is less common than crying.",
        ],
      },
      {
        heading: "How common it is, and how it feels",
        paragraphs: [
          "Emotionalism is most common in the first few months after a stroke, when about one in five people experience it.",
          "It can be distressing, especially if you were not an emotional person before your stroke. Some people feel embarrassed, so they stop going out or avoid meeting people. It can also be upsetting or confusing for people close to you.",
        ],
      },
      {
        heading: "Emotionalism or depression?",
        paragraphs: [
          "Feeling tearful or crying more can also be signs of depression. But depression is associated with persistent feelings of sadness over a long time, while emotionalism may involve short outbursts of sudden emotion.",
          "Emotionalism can happen on its own, or sometimes alongside depression. Speak to your doctor about what you are experiencing.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "Emotionalism can get better over time. Many people find it improves or disappears altogether within the first six months. Even if it lasts longer, there are treatments and techniques that may help.",
          "Telling new people about your emotionalism when you first meet them can make you less embarrassed if you become emotional in front of them. You may prefer people to ignore it and carry on as normal, or you may find a hug or reassurance comforting.",
          "Some people say distraction helps when they feel it starting. You could go into another room, change the topic of conversation or the TV channel, or recite some words in your head.",
        ],
      },
      {
        heading: "Treatment",
        paragraphs: [
          "Antidepressant medication may be prescribed for severe or persistent cases of emotionalism. This may help some people, but more research is needed into how effective medication may be for emotionalism.",
        ],
      },
    ],
    helps: [
      "Be open about it: tell people, especially new people, and say how they can help you.",
      "Tell people when you are genuinely upset, so they do not mistake it for emotionalism; you are still entitled to comfort and support.",
      "Try distraction, such as going into another room or changing the topic of conversation.",
      "Speak to your doctor if it lasts beyond the first six months, as there are treatments and techniques that may help.",
      "Call the Stroke Support Helpline on 0303 3033 100 for information and support.",
      CRISIS,
    ],
    tryThisWeek: [
      "Tell people how they can help.",
      "Say when you are really upset.",
      "Try a distraction that works.",
    ],
    ask: "Could this be emotionalism, depression, or both?",
    interactive: {
      kind: "scenarios",
      title: "Moments of emotionalism",
      scenarios: [
        {
          id: "new-people",
          situation: "You are meeting a new neighbour and worry you might cry.",
          options: [{ text: "Tell them about emotionalism early", best: true }, { text: "Avoid meeting new people" }],
          why: "Telling new people about your emotionalism when you first meet them can make you less embarrassed if you become emotional in front of them.",
        },
        {
          id: "tv",
          situation: "You feel tears starting while watching TV with your family.",
          options: [{ text: "Change the channel or leave the room", best: true }, { text: "Hold it in and say nothing" }],
          why: "Some people say distraction helps when they feel it starting. You could go into another room, change the topic of conversation or the TV channel, or recite some words in your head.",
        },
        {
          id: "real",
          situation: "You are genuinely upset about some bad news.",
          options: [{ text: "Say it is real, and ask for comfort", best: true }, { text: "Assume they will know" }],
          why: "Tell people when you are genuinely upset, so they do not mistake it for emotionalism; you are still entitled to comfort and support.",
        },
        {
          id: "months",
          situation: "Months on, it is still happening often.",
          options: [{ text: "Speak to your doctor about what may help", best: true }, { text: "Put up with it" }],
          why: "Even if it lasts longer, there are treatments and techniques that may help.",
        },
      ],
    },
    sources: [SA_EMOTIONALISM, SA_TREATMENTS, NHS_SUICIDAL],
    quiz: {
      question: "How is emotionalism different from depression?",
      options: [{ text: "Short outbursts, not long-lasting sadness", right: true }, { text: "It is always a sign of depression" }, { text: "It only ever involves laughing" }],
      why: "Feeling tearful or crying more can also be signs of depression. But depression is associated with persistent feelings of sadness over a long time, while emotionalism may involve short outbursts of sudden emotion.",
    },
  },
  {
    id: "pds-signs",
    kicker: "Signs",
    question: "How can I tell if it is depression, in me or someone I care for?",
    hook: "Low mood happens to everyone. When it lasts most of the time for weeks and stops you enjoying life, it is time to talk to someone.",
    short: "It is very common to feel sad about a stroke and the changes it brings. But if you feel low most of the time over several weeks or more, and it is affecting your ability to enjoy life, it could be a sign of depression. Depression can creep up on you, and sometimes a friend or family member notices first. Talk to your GP or stroke team.",
    sections: [
      {
        heading: "Sadness, or depression?",
        paragraphs: [
          "It is very common to feel sadness about your stroke and the changes to your life. You might also feel low, like you cannot cope, or not enjoy things like you usually do.",
          "A low mood can happen to anyone from time to time. But if you feel this way most of the time over several weeks or more, and it is affecting your ability to enjoy life, it could be a sign of depression.",
          "Doctors describe depression as mild, moderate or severe, based on the symptoms, how long it lasts and its impact on daily life. You will usually be asked a set of questions to help assess it.",
        ],
      },
      {
        heading: "Signs in how you feel",
        paragraphs: [
          "Common signs include feeling sad or down most of the time, feeling worthless, helpless or guilty, and feeling hopeless. You might lose confidence, lose interest in things you used to enjoy, or feel anxious and worry a lot.",
        ],
      },
      {
        heading: "Signs in the body and in daily life",
        paragraphs: [
          "Depression can show in the body too: lacking energy, problems sleeping or sleeping too much, losing your appetite or eating too much, and losing interest in sex. Some people move or speak more slowly than usual, or have unexplained aches and pains.",
          "People may stop going out, avoid friends and neglect their hobbies and interests. Finding it difficult to concentrate or make decisions is common too.",
        ],
      },
      {
        heading: "Noticing it in someone you care for",
        paragraphs: [
          "Depression can often come on gradually, so it can be difficult to notice something is wrong. Many people try to cope without realising they are unwell, and it can sometimes take a friend or family member to suggest something is wrong.",
          "If you are worried about someone, try to get them to talk to you, and ask open-ended questions about how they feel. Do not worry about having the answers: just listening and taking what they say seriously can be more helpful.",
        ],
      },
      {
        heading: "When it is urgent",
        paragraphs: [
          "Severe depression is a very serious condition, and it can sometimes lead to a mental health emergency. Some common signs of suicidal thoughts include hopelessness and despair, feeling there is no point in living, and thinking other people would be better off without you.",
          "Suicidal feelings are not permanent, and the sooner you tell someone, the sooner you can get help. Call 999 or go to A&E if someone's life is at risk, or if you do not feel you can keep yourself or someone else safe. Samaritans are free to call on 116 123, any time, day or night, and you can also call NHS 111 or text SHOUT to 85258.",
        ],
      },
    ],
    helps: [
      "See a GP if you have symptoms of depression for most of the day, every day, for more than 2 weeks.",
      "Take your feelings seriously, and talk to someone if you feel something is not right.",
      "Be honest with your GP or stroke team about how you feel and how it is affecting you, even if it is hard to talk about.",
      "If you are worried about someone, ask open-ended questions and listen, without worrying about having the answers.",
      "Call the Stroke Support Helpline on 0303 3033 100, for yourself or for the person you care for.",
      CRISIS,
    ],
    tryThisWeek: [
      "Note signs that last over 2 weeks.",
      "Talk to someone if something feels wrong.",
      "Ask someone close how they feel.",
    ],
    ask: "Could what I'm feeling be depression, and how would we check?",
    interactive: {
      kind: "signs",
      title: "Signs to mention",
      intro: "Tick any you have noticed, in yourself or someone you care for, for most of the time over several weeks.",
      signs: ["Feeling sad or down most of the time", "Feeling worthless, helpless or guilty", "Feeling hopeless", "Losing interest in things once enjoyed", "Lacking energy or motivation", "Sleeping badly, or too much", "Eating much less, or much more", "Avoiding people or not going out", "Finding it hard to concentrate or decide"],
      after: "Tell your GP or stroke team. If you feel you may be about to harm yourself, call 999 or go to A&E. Samaritans are on 116 123, any time.",
      copyHeading: "Signs I have noticed",
    },
    sources: [SA_DEP_ANX, NHS_DEP_SYMPTOMS, NHS_SUICIDAL],
    quiz: {
      question: "When could low mood be a sign of depression?",
      options: [{ text: "When it lasts most of the time for weeks", right: true }, { text: "Whenever you feel sad for an afternoon" }, { text: "Only if you cry every day" }],
      why: "A low mood can happen to anyone from time to time. But if you feel this way most of the time over several weeks or more, and it is affecting your ability to enjoy life, it could be a sign of depression.",
    },
  },
  {
    id: "pds-anxiety-too",
    kicker: "Anxiety",
    question: "Why am I so frightened of having another stroke?",
    hook: "Worry is very common after a stroke. Fears often ease with time, and help is there when anxiety starts to take over.",
    short: "It is very common to feel anxious after a stroke: around one in four people who have a stroke experience anxiety within the first five years. You may worry about having another stroke, getting around on your own, money or your family. Fears often ease over time, but if anxiety is stopping you doing things or causing distress, talking therapies, medicines and self-help can all help.",
    sections: [
      {
        heading: "A common worry",
        paragraphs: [
          "It is very common to feel anxious after a stroke. Around one in four people who have a stroke will experience anxiety within the first five years.",
          "You may worry you might have another stroke, and many stroke survivors say this is their biggest fear. You might also be frightened about getting around on your own, or stressed about money or your family.",
        ],
      },
      {
        heading: "What anxiety feels like",
        paragraphs: [
          "You might feel restless, tense or on edge, with a sense of dread or fearing the worst. Your heart may race, your breathing may get faster, and you may tremble or feel sick.",
          "Living with anxiety can lead to sleeping problems, tiredness and muscle tension. You might feel more irritable, or avoid things such as going out or meeting people.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "You may find your fears ease over time. But seek help if you are becoming anxious about a wide range of things, if anxiety is stopping you doing things you want or need to do, or if you feel anxious for no obvious reason.",
          "Getting support and treatment for anxiety can help you focus on rehabilitation, eating well and staying active. For generalised anxiety, a GP will usually suggest a talking therapy, usually cognitive behavioural therapy (CBT), before medicine, which is usually a type of antidepressant called an SSRI.",
        ],
      },
      {
        heading: "Panic, trauma and new symptoms",
        paragraphs: [
          "A panic attack is a sudden, intense rush of anxiety symptoms, such as a racing heartbeat, feeling faint, sweating or struggling to breathe. It is not always possible to tell a panic attack from something physical, such as a heart attack. If you suddenly have new symptoms, call 999.",
          "Some stroke survivors develop symptoms of post-traumatic stress disorder (PTSD), such as flashbacks or nightmares about the stroke, feeling constantly on edge, or avoiding reminders. There are treatments that can help, so speak to your stroke team or GP.",
        ],
      },
      {
        heading: "Lowering the risk, easing the fear",
        paragraphs: [
          "Although your risk is higher after a stroke or a TIA, you can reduce your risk of another stroke. It is important to take the medication you are prescribed and make any lifestyle changes you need.",
          "Sometimes people worry that being active could cause another stroke, but the opposite is true. Unless your doctor tells you otherwise, moving and being active is safe.",
        ],
      },
    ],
    helps: [
      "Share your feelings with someone you trust, or call the Stroke Support Helpline on 0303 3033 100.",
      "Try breathing techniques when you find yourself becoming anxious; some people find mindfulness helps too.",
      "Keep active, starting small with a short walk or chair-based exercises, unless your doctor tells you otherwise.",
      "Reduce caffeine and alcohol, which can alter your mood and affect your sleep.",
      "Take your prescribed medicines, and ask your GP or stroke nurse about lowering your risk of another stroke.",
      CRISIS,
    ],
    tryThisWeek: [
      "Share a worry with someone.",
      "Try a breathing technique.",
      "Take a short walk.",
    ],
    ask: "What can I do to lower my risk of another stroke, and could I have help with anxiety?",
    interactive: {
      kind: "scenarios",
      title: "Anxious moments",
      scenarios: [
        {
          id: "walk",
          situation: "You avoid walking to the shop in case it brings on another stroke.",
          options: [{ text: "Start small: moving is safe", best: true }, { text: "Stay in to be safe" }],
          why: "Sometimes people worry that being active could cause another stroke, but the opposite is true.",
        },
        {
          id: "new",
          situation: "You suddenly feel faint and breathless, and your heart races. This is new.",
          options: [{ text: "Call 999", best: true }, { text: "Wait for it to pass" }],
          why: "It is not always possible to tell a panic attack from something physical, such as a heart attack. If you suddenly have new symptoms, call 999.",
        },
        {
          id: "friends",
          situation: "Worry has stopped you seeing friends for weeks.",
          options: [{ text: "Talk to your GP about help with anxiety", best: true }, { text: "Keep avoiding them until it passes" }],
          why: "You may find your fears ease over time. But seek help if you are becoming anxious about a wide range of things, if anxiety is stopping you doing things you want or need to do, or if you feel anxious for no obvious reason.",
        },
        {
          id: "evening",
          situation: "You feel tense and on edge in the evening.",
          options: [{ text: "Try a breathing technique", best: true }, { text: "Have a strong coffee" }],
          why: "Try breathing techniques when you find yourself becoming anxious. Reduce caffeine and alcohol, which can alter your mood and affect your sleep.",
        },
      ],
    },
    sources: [SA_DEP_ANX, SA_GOALS, NHS_GAD, SA_RISK, SA_EXERCISE, NHS_SUICIDAL],
    quiz: {
      question: "Is being active likely to cause another stroke?",
      options: [{ text: "No: unless your doctor says otherwise, it is safe", right: true }, { text: "Yes, resting is safest" }, { text: "Only if you walk outdoors" }],
      why: "Sometimes people worry that being active could cause another stroke, but the opposite is true. Unless your doctor tells you otherwise, moving and being active is safe.",
    },
  },
  {
    id: "pds-talking",
    kicker: "Treatment",
    question: "Can talking therapy help after a stroke, even with aphasia?",
    hook: "Talking with a trained therapist helps many people after a stroke. Sessions can be one-to-one, with family, in a group, online or by phone.",
    short: "Talking therapies give you time and space to explore difficult feelings with a trained therapist. Cognitive behavioural therapy (CBT) is often used for depression and anxiety after a stroke. Your stroke team or GP can refer you, and in England you can refer yourself. If you have aphasia, talking therapies and support from your care team can still help, and communication tools can show people how you want them to communicate with you.",
    sections: [
      {
        heading: "What talking therapy is",
        paragraphs: [
          "Talking therapies give you time and space to talk about your problems and explore difficult feelings with a trained therapist. This could be a counsellor, psychotherapist, psychologist or psychiatrist.",
          "Therapists may work with you one-to-one or jointly with your partner or other family members, and group sessions are another option. Sessions might take place in person, online or over the phone.",
        ],
      },
      {
        heading: "CBT and the others",
        paragraphs: [
          "Cognitive behavioural therapy (CBT) can help with many of the emotions people experience after a stroke, and it is often used for depression and anxiety. In CBT, you learn to identify and challenge negative thought patterns and improve the way you feel.",
          "On the NHS, a course of CBT usually lasts between 8 and 16 sessions, once a week or once every 2 weeks. Other options include guided self-help, counselling, interpersonal therapy and behavioural activation.",
          "After a stroke, your home recovery plan may include CBT to help with anxiety, depression and tiredness.",
        ],
      },
      {
        heading: "How to get it",
        paragraphs: [
          "Your stroke team may have its own clinical psychologist or access to specialist services. Or you can ask your GP to refer you, wherever you live in the UK.",
          "In England, you can refer yourself to NHS talking therapies without speaking to a GP, if you are registered with a GP and aged 18 or over. Waiting times can be several weeks or months, so ask a GP what to do if things get worse while you wait.",
          "Some people pay for private therapy, which can cost from around £40 to over £100 a session. If you do, look for a qualified therapist on a professional register.",
        ],
      },
      {
        heading: "If you have aphasia",
        paragraphs: [
          "Aphasia can affect relationships and independence, and cause anxiety, low mood and depression, loneliness or isolation. The NHS says talking therapies and support from your care team can help with these problems.",
          "Communication tools, such as the Stroke Association's communication card, can be used with health professionals. Letting people know how you want them to communicate with you can help ease anxiety and help you feel more in control.",
          "Feeling tired or low can make it harder to communicate, and busy or noisy places make it harder to concentrate. A good moment, fewer distractions, a pen and paper, and time to listen all help a conversation.",
        ],
      },
    ],
    helps: [
      "Let your stroke team or GP know if you are struggling with your mood or emotions; they may be able to refer you.",
      "In England, refer yourself to NHS talking therapies if you are 18 or over and registered with a GP.",
      "If you have aphasia, take a communication tool or card to show how you want people to communicate with you.",
      "Pick a time when you have enough energy to talk, somewhere quiet, with a pen and paper to hand.",
      "Ask your GP how long the wait is, and what to do if things get worse in the meantime.",
      CRISIS,
    ],
    tryThisWeek: [
      "Tell your GP or stroke team.",
      "Look up NHS talking therapies.",
      "Pack a communication card.",
    ],
    ask: "Can I be referred for talking therapy, adapted if I have aphasia?",
    interactive: {
      kind: "flip-cards",
      title: "Talking therapies, card by card",
      intro: "Turn each card to see how each one works.",
      cards: [
        { id: "guided", front: "Guided self-help", when: "Often offered first", back: "You work through a workbook or online course with the help of a therapist, based on CBT." },
        { id: "cbt", front: "CBT", when: "Often used for depression and anxiety", back: "You learn to identify and challenge negative thought patterns. Usually 8 to 16 sessions." },
        { id: "counselling", front: "Counselling", when: "Talking things through", back: "A therapist listens and helps you find your own solutions to problems." },
        { id: "activation", front: "Behavioural activation", when: "If you have withdrawn from things", back: "Looks at links between your activities and your mood, and helps you make practical changes." },
        { id: "family", front: "Couples or family sessions", when: "With a partner or family members", back: "Therapists may work jointly with your partner or other family members." },
        { id: "slt", front: "Speech and language therapy", when: "For aphasia", back: "Aphasia is treated with it. It can help you find different ways to communicate." },
      ],
    },
    sources: [SA_TREATMENTS, NHS_DEP_TREATMENT, NHS_TALKING, NHS_STROKE_RECOVERY, NHS_APHASIA, SA_COMMS_TOOLS, SA_COMMS, SA_COMMS_TIPS, NHS_SUICIDAL],
    quiz: {
      question: "Who can refer you for NHS talking therapy?",
      options: [{ text: "Your stroke team or GP, or yourself in England", right: true }, { text: "Only a hospital consultant" }, { text: "No one: it is private only" }],
      why: "In England, you can refer yourself to NHS talking therapies without speaking to a GP, if you are registered with a GP and aged 18 or over.",
    },
  },
  {
    id: "pds-antidepressants",
    kicker: "Treatment",
    question: "What should I know about antidepressants after a stroke?",
    hook: "Antidepressants can ease the symptoms of depression and make life feel easier. They take a few weeks, and some do not mix well with blood thinners, so the doctor checks first.",
    short: "Antidepressants can help treat depression and sometimes anxiety after a stroke, often alongside a talking therapy. They usually take 1 to 2 weeks to start having an effect and up to 8 weeks to work fully. Some, such as sertraline, may not mix well with anticoagulants like warfarin and apixaban, or with aspirin, so your doctor needs to know everything you take. Never stop one suddenly or without talking to your doctor.",
    sections: [
      {
        heading: "What they do",
        paragraphs: [
          "There are different types of antidepressant, which alter the chemicals in your brain and lift your mood. They can help to treat depression and sometimes anxiety, and they are sometimes used alongside talking therapies.",
          "Antidepressants do not cure emotional problems, but they may help with the symptoms and make life feel easier. They do not work for everyone, and they are usually best for people with more severe problems.",
          "For more severe depression, a combination of an antidepressant and CBT usually works better than having just one of these treatments.",
        ],
      },
      {
        heading: "Which one, and why your other medicines matter",
        paragraphs: [
          "SSRIs, such as sertraline, citalopram and fluoxetine, are usually prescribed first, because their side effects are generally easier to manage. The different types work about as well as each other, but side effects vary.",
          "Your doctor will talk to you about which antidepressant may work best for you. This depends on whether you have taken them before, the other medicines you take, and any other physical health problems you may have.",
          "Some medicines may not mix well with sertraline, including anticoagulants such as warfarin and apixaban, and anti-inflammatory medicines such as aspirin and ibuprofen. Tell your doctor about every medicine, herbal remedy and supplement you take.",
        ],
      },
      {
        heading: "The first weeks",
        paragraphs: [
          "Antidepressants usually take 1 to 2 weeks to start having an effect, and can take up to 8 weeks to work fully. When you first start, you will be seen by a doctor every 1 to 2 weeks to check how it is working.",
          "Common side effects include feeling sick, headaches, a dry mouth, dizziness, difficulty sleeping and problems with sex. Many side effects ease after a couple of weeks as your body gets used to the medicine.",
          "It is not common, but some people have suicidal thoughts or an urge to self-harm when they start an antidepressant. Speak to your doctor straight away if this happens, and call 999 or go to A&E immediately if you do not feel you can keep yourself safe.",
        ],
      },
      {
        heading: "How long, and coming off",
        paragraphs: [
          "If they are working, you will usually carry on taking them for at least 6 months after you feel better. It can take time to find the right medicine at the right dose, so you may need to persevere and work with your doctor.",
          "Do not stop taking an antidepressant suddenly or without talking to your doctor first. They will help you agree a plan to reduce the dose gradually, usually over several weeks or months, to help with withdrawal symptoms.",
        ],
      },
      {
        heading: "Alcohol, remedies and tiredness",
        paragraphs: [
          "Alcohol can make your symptoms worse, or make you feel sleepy or dizzy. Do not use the herbal supplement St John's wort when taking sertraline.",
          "Some common medicines, including antidepressants, have fatigue as a possible side effect. If you think a medicine is making you tired, your GP or pharmacist can advise, and you may be able to try a different one. Do not stop taking it without speaking to them.",
        ],
      },
    ],
    helps: [
      "Tell your doctor about all your other medicines, herbal remedies and supplements before you start.",
      "Keep going for the first few weeks, as it can take several weeks until your symptoms start to improve.",
      "Talk to your doctor if you are finding side effects hard to manage, or feel the medicine is not helping.",
      "Do not stop suddenly; ask your doctor for a plan to reduce the dose gradually.",
      "If you are newly prescribed one, ask a pharmacist about the NHS New Medicine Service.",
      CRISIS,
    ],
    tryThisWeek: [
      "List all your medicines for the doctor.",
      "Give it a few weeks to work.",
      "Never stop without your doctor.",
    ],
    ask: "Would an antidepressant interfere with my stroke medicines?",
    interactive: {
      kind: "timeline",
      title: "Starting an antidepressant",
      steps: [
        { id: "before", when: "Before you start", title: "Check your other medicines", points: ["Tell your doctor about all medicines, remedies and supplements.", "Some do not mix well with anticoagulants or aspirin."] },
        { id: "early", when: "Weeks 1 to 2", title: "Early days", points: ["It usually starts having an effect.", "You will see a doctor every 1 to 2 weeks."] },
        { id: "settle", when: "The first few weeks", title: "Side effects settle", points: ["Many side effects ease after a couple of weeks.", "Speak to your doctor straight away about any suicidal thoughts."] },
        { id: "full", when: "Up to 8 weeks", title: "Working fully", points: ["It can take up to 8 weeks to work fully.", "Talk to your doctor if it does not seem to be helping."] },
        { id: "continue", when: "At least 6 months", title: "Keep going", points: ["Usually taken for at least 6 months after you feel better."] },
        { id: "stop", when: "Coming off", title: "Slowly, with your doctor", points: ["Never stop suddenly or on your own.", "The dose is reduced over several weeks or months."] },
      ],
    },
    sources: [SA_TREATMENTS, NHS_DEP_TREATMENT, NHS_ANTIDEP, RCPSYCH_DEP, NHS_SERTRALINE, SA_FATIGUE, NHS_SUICIDAL],
    quiz: {
      question: "What should you do if you want to stop an antidepressant?",
      options: [{ text: "Talk to your doctor and reduce it gradually", right: true }, { text: "Stop it the same day" }, { text: "Halve the dose yourself" }],
      why: "Do not stop taking an antidepressant suddenly or without talking to your doctor first.",
    },
  },
  {
    id: "pds-activity",
    kicker: "Self-help",
    question: "How can small steps and activity lift my mood?",
    hook: "Low mood makes you want to do less, and doing less can lower mood further. Small, planned, enjoyable steps can turn that round.",
    short: "Low mood can stop us doing important or enjoyable activities. Being physically active can help you feel more positive, and small steps count, such as a short walk outdoors or chair-based exercises. A talking therapy called behavioural activation looks at the links between your activities and your mood, and helps you make practical changes.",
    sections: [
      {
        heading: "Why doing a little helps",
        paragraphs: [
          "Although you may not feel like doing anything, being physically active can help you feel more positive. Exercise encourages your brain to release chemicals that lift your mood, and focusing on an activity can distract you from negative thoughts.",
          "There is evidence that exercise can help depression, and it is one of the main treatments for mild depression.",
        ],
      },
      {
        heading: "Start small",
        paragraphs: [
          "You could start small, such as a short walk outdoors or chair-based exercises. Whatever your abilities, even a small amount extra will make a difference.",
          "Low mood can stop us doing important or enjoyable activities. Try listing these things and doing some each day, starting with easier ones; as you progress, your mood should improve.",
        ],
      },
      {
        heading: "Behavioural activation",
        paragraphs: [
          "Behavioural activation is a talking therapy that focuses on links between your activities and your mood, rather than on thoughts and feelings. It can be useful if depression has led you to withdraw from social activities.",
          "It helps you make practical changes to your behaviour that may improve your mood, such as planning activities and doing constructive things you may usually avoid. It usually involves 12 to 16 sessions with a trained practitioner.",
        ],
      },
      {
        heading: "Building up safely",
        paragraphs: [
          "If you are not sure which activities are safe for you, ask your GP or therapist. Physiotherapists and occupational therapists can help you work out new ways of doing things.",
          "If you have fatigue, start slowly and build up over time, to avoid making it worse. You might need to build in extra rests during and after activities.",
          "To stay healthy, adults should do 150 minutes of moderate activity a week. If you have not exercised for a while, start gradually and build up towards it, and ask a GP about exercise on prescription.",
        ],
      },
      {
        heading: "Things you enjoy",
        paragraphs: [
          "Try to do something you enjoy regularly. A phone call with a friend could give you a boost and ease loneliness.",
          "Mind suggests trying something new, doing something creative, or spending time in nature. If you are struggling to leave the house, opening a window for fresh air and sunlight can make a difference. Try a few different things and see which works best for you.",
        ],
      },
    ],
    helps: [
      "List activities that matter to you or that you enjoy, and do some each day, starting with easier ones.",
      "Start small, with a short walk outdoors or chair-based exercises.",
      "Ask your GP or therapist which activities are safe for you.",
      "If you have fatigue, build up slowly and plan rests during and after activities.",
      "Ask your GP about behavioural activation, or about exercise on prescription.",
      CRISIS,
    ],
    tryThisWeek: [
      "List a few things to do each day.",
      "Take a short walk or try chair exercises.",
      "Plan a rest after each activity.",
    ],
    ask: "Could I be referred for behavioural activation, or for an exercise group?",
    interactive: {
      kind: "scenarios",
      title: "Small-step moments",
      scenarios: [
        {
          id: "morning",
          situation: "You feel too low to do anything this morning.",
          options: [{ text: "Pick one easy thing from your list", best: true }, { text: "Wait until you feel like it" }],
          why: "Try listing these things and doing some each day, starting with easier ones; as you progress, your mood should improve.",
        },
        {
          id: "indoors",
          situation: "You cannot get out of the house yet.",
          options: [{ text: "Try chair-based exercises", best: true }, { text: "Do nothing until you can walk outside" }],
          why: "You could start small, such as a short walk outdoors or chair-based exercises.",
        },
        {
          id: "good-day",
          situation: "You have more energy today and want to do everything.",
          options: [{ text: "Build up slowly, with rests", best: true }, { text: "Do as much as you can while it lasts" }],
          why: "If you have fatigue, start slowly and build up over time, to avoid making it worse.",
        },
        {
          id: "friends",
          situation: "You have not spoken to friends for a while.",
          options: [{ text: "Ring one friend today", best: true }, { text: "Wait for them to call" }],
          why: "A phone call with a friend could give you a boost and ease loneliness.",
        },
      ],
    },
    sources: [SA_DEP_ANX, NHS_DEP_TREATMENT, SA_EXERCISE, NHS_LOW_MOOD, RCPSYCH_DEP, NHS_EXERCISE_DEP, MIND_SELF_CARE, NHS_SUICIDAL],
    quiz: {
      question: "What does behavioural activation focus on?",
      options: [{ text: "Links between your activities and your mood", right: true }, { text: "Your childhood memories" }, { text: "Finding the right medicine" }],
      why: "Behavioural activation is a talking therapy that focuses on links between your activities and your mood, rather than on thoughts and feelings.",
    },
  },
  {
    id: "pds-peer-support",
    kicker: "Support",
    question: "Why does meeting other stroke survivors help?",
    hook: "People who have been there understand without needing it explained. Groups, an online community and weekly calls can connect you with them.",
    short: "Peer support brings together people with shared experiences to support each other. Many people find it helps them feel less alone, more confident and more hopeful. The Stroke Association has around 400 support groups across the UK, an online community and weekly volunteer calls, and you can try peer support alongside therapy or medicine, or on its own.",
    sections: [
      {
        heading: "What peer support is",
        paragraphs: [
          "Peer support is when people with similar experiences connect and support each other. It might be a local group, an online community, an activity group, or befriending.",
          "These groups can help you connect with others, build your self-esteem and confidence, find new ideas that others have found helpful, and feel more hopeful about the future. You can try a group alongside therapy or medication, or by itself.",
        ],
      },
      {
        heading: "Stroke support groups",
        paragraphs: [
          "There are around 400 stroke support groups across the UK, all run by friendly volunteers, and many of them have had a stroke themselves. They meet weekly, fortnightly or monthly, some in person and others online.",
          "Groups give you a safe space to feel listened to and understood. You can ask questions, share recovery tips and learn from each other, and many offer activities, from speakers and outings to communication and exercise sessions.",
        ],
      },
      {
        heading: "From home",
        paragraphs: [
          "The Stroke Association's Online Community is free for people over 18, and it is moderated to keep everyone safe. People say being part of it helps them feel more supported, confident and positive about the future. It is a public platform, so be mindful of the personal information you share.",
          "Weekly Volunteer Calls match you with a trained volunteer, who chats with you for around 30 minutes a week for eight weeks. Talking things through on the phone can build confidence and help you feel more connected.",
        ],
      },
      {
        heading: "Is it right for me?",
        paragraphs: [
          "It is common to feel nervous before joining a group. Only share what you feel comfortable sharing, take breaks if it becomes too much, and give yourself time.",
          "Not everyone finds groups helpful. If one does not suit you, try a different group or community, and do not blame yourself; it may suit you better at another time.",
          "The NHS says sharing your experiences with others in a similar situation can be very supportive.",
        ],
      },
    ],
    helps: [
      "Search for a local stroke support group by postcode, or ask the Stroke Support Helpline on 0303 3033 100.",
      "Try the Stroke Association's free Online Community if getting out is hard.",
      "Sign up for Weekly Volunteer Calls, for yourself or for someone else.",
      "Only share what you feel comfortable sharing, and take a break if it becomes too much.",
      "If a group does not suit you, try a different one.",
      CRISIS,
    ],
    tryThisWeek: [
      "Search for a local stroke group.",
      "Look at the Online Community.",
      "Sign up for a weekly call.",
    ],
    ask: "Is there a stroke group near me?",
    interactive: {
      kind: "flip-cards",
      title: "Ways to meet others",
      intro: "Turn each card to see what each kind of support offers.",
      cards: [
        { id: "local", front: "Local stroke support group", when: "Weekly, fortnightly or monthly", back: "Run by volunteers, many of them stroke survivors. A safe space to feel listened to and understood." },
        { id: "online-group", front: "Online support group", when: "If getting out is hard", back: "Some stroke groups meet online, so you can join from home." },
        { id: "community", front: "Online Community", when: "Free, for people over 18", back: "A moderated forum to talk, ask questions and hear how others are recovering." },
        { id: "calls", front: "Weekly Volunteer Calls", when: "Once a week for eight weeks", back: "A trained volunteer chats with you for around 30 minutes each time." },
        { id: "activity", front: "Activity groups", when: "Painting, gardening or walking", back: "Peer support can be doing things together, not only talking." },
      ],
    },
    sources: [MIND_PEER, SA_GROUPS, SA_HOBBIES, SA_ONLINE, SA_CALLS, NHS_DEP, NHS_SUICIDAL],
    quiz: {
      question: "Who runs the Stroke Association's support groups?",
      options: [{ text: "Volunteers, many of whom have had a stroke", right: true }, { text: "Hospital consultants" }, { text: "No one: they run themselves" }],
      why: "There are around 400 stroke support groups across the UK, all run by friendly volunteers, and many of them have had a stroke themselves.",
    },
  },
  {
    id: "pds-fatigue-mood",
    kicker: "Fatigue",
    question: "How are fatigue and low mood linked after a stroke?",
    hook: "Fatigue can lower your mood, and low mood can feel like fatigue. Getting both checked, and pacing your energy, can break the loop.",
    short: "Fatigue after a stroke is different from normal tiredness, as it does not seem to get better with rest. It shares some signs of depression but is not the same thing, and people can have both at once: fatigue may cause low mood and anxiety. Getting checked for treatable causes, pacing your energy and gentle exercise can help, and fatigue often gets better over time.",
    sections: [
      {
        heading: "Not ordinary tiredness",
        paragraphs: [
          "Fatigue is different from normal tiredness, as it does not seem to get better with rest. You may feel like you lack energy or strength and are constantly tired, physically and mentally, and find it harder to think clearly.",
          "Many people describe fatigue as the most difficult and upsetting problem after a stroke. It can happen after any type of stroke, big or small, and it can still be a problem even if your stroke was some time ago.",
        ],
      },
      {
        heading: "The loop",
        paragraphs: [
          "Fatigue shares some of the signs of depression, such as feeling low, having anxiety, sleep problems and tiredness, but it is not the same thing. It is not always easy to tell them apart, people can have both at the same time, and fatigue may cause low mood and anxiety.",
          "Low mood can make us feel tired, and tiredness can also have a bad impact on our mood.",
          "Fatigue can make you avoid social situations, or become irritable more easily. It can also affect relationships, as family and friends may not understand how exhausted you feel.",
        ],
      },
      {
        heading: "Get it checked",
        paragraphs: [
          "Speak to your GP or therapist. They may be able to find out if something like a medication or infection is causing the fatigue, or if it is more likely to be due to the stroke. Some common medicines, such as beta blockers and antidepressants, have fatigue as a possible side effect.",
          "Sleep problems such as insomnia and sleep apnoea can make you tired during the day, and so can pain and conditions such as anaemia, diabetes or an underactive thyroid. You can ask if there is a local fatigue management service, and if emotional changes play a part, you can ask about treatment for depression.",
        ],
      },
      {
        heading: "Pace, plan and prioritise",
        paragraphs: [
          "The Stroke Association suggests the three Ps. Pace: take things step by step at a manageable speed. Plan: work out what you want to do, and when and how. Prioritise: decide which activities are important, and which you can leave or get help with.",
          "It can be tempting to do too much on a better day, but this may leave you exhausted for the next day or two. Take proper breaks before or after doing things, as even talking with friends or eating a meal can be tiring.",
        ],
      },
      {
        heading: "Gently does it",
        paragraphs: [
          "Regular exercise can help give you more energy and better sleep, and make you feel less fatigued. Start slowly, such as with a very short walk, and build up over time.",
          "Keep a diary of what you do, even just a few notes or a photograph each day. Over time it reminds you of your progress and helps you see what triggers your fatigue. Fatigue often gets better over time.",
        ],
      },
    ],
    helps: [
      "Ask your GP to check for treatable causes, and for a review of your current medication.",
      "Do not stop taking any medication without speaking to your GP or pharmacist first.",
      "Use the three Ps: pace, plan and prioritise.",
      "Take proper breaks before or after activities, even gentle ones.",
      "Keep a simple diary to spot your fatigue triggers and see your progress.",
      CRISIS,
    ],
    tryThisWeek: [
      "Plan your day with the three Ps.",
      "Take a break after each task.",
      "Keep a short fatigue diary.",
    ],
    ask: "Could my tiredness be fatigue, depression, or both, and is there a fatigue service near me?",
    interactive: {
      kind: "risk-check",
      title: "What could add to the tiredness?",
      intro: "Tick any that apply. Many can be checked, treated or changed.",
      items: [
        { id: "stroke", label: "The stroke itself", note: "In the early weeks and months after a stroke, your brain and body are healing.", changeable: false },
        { id: "mood", label: "Low mood or anxiety", note: "Fatigue and depression can happen together. You can ask your GP about treatment for depression.", changeable: true },
        { id: "sleep", label: "Poor sleep or loud snoring", note: "Insomnia and sleep apnoea can make you tired during the day. Speak to your GP.", changeable: true },
        { id: "medicines", label: "Medicine side effects", note: "Some medicines list fatigue as a side effect. Ask for a review, and do not stop them yourself.", changeable: true },
        { id: "conditions", label: "Anaemia, diabetes or thyroid", note: "These conditions can make you feel tired. Your GP can check.", changeable: true },
        { id: "pain", label: "Pain", note: "Pain, such as muscle pain or headaches, can affect your energy levels.", changeable: true },
        { id: "overdoing", label: "Doing too much on good days", note: "This may leave you exhausted for the next day or two. Pace yourself.", changeable: true },
      ],
    },
    sources: [SA_FATIGUE, NHS_LOW_MOOD, SA_EMOTIONAL, SA_MANAGING_FATIGUE, SA_EXERCISE, NHS_SUICIDAL],
    quiz: {
      question: "Is post-stroke fatigue the same as depression?",
      options: [{ text: "No, but they share signs and can happen together", right: true }, { text: "Yes, always" }, { text: "No, and they are never linked" }],
      why: "Fatigue shares some of the signs of depression, such as feeling low, having anxiety, sleep problems and tiredness, but it is not the same thing.",
    },
  },
  {
    id: "pds-purpose",
    kicker: "Living well",
    question: "How do I find purpose when my old roles have changed?",
    hook: "A stroke can change work, home life and hobbies. Small milestones, adapted interests, volunteering and new roles can bring back a sense of purpose.",
    short: "A stroke can lead to sudden changes at home, at work and in relationships, and it may feel like you have lost the life you had before. But you can still achieve new things or find other ways of doing things. Small milestones, adapted or new hobbies, a planned return to work, volunteering and new roles at home can all bring a sense of purpose.",
    sections: [
      {
        heading: "When roles change",
        paragraphs: [
          "Stroke is a major life event. For many people it leads to sudden changes at home, at work and in relationships, and a stroke survivor might feel shock, grief, anger or sadness at these changes and losses.",
          "Life after a stroke can look very different, and it might be difficult to do things you used to. But you can still achieve new things or find other ways of doing things. This is all part of your recovery.",
        ],
      },
      {
        heading: "Milestones, step by step",
        paragraphs: [
          "Setting milestones can help you track progress and stay focused. Some stroke survivors prefer the word milestone to goal, because it feels like a step to work towards before moving on to the next.",
          "You are more likely to stick to an aim if it is important to you. Keep it specific, measurable, achievable, relevant and time-bound, write it down somewhere you look every day, and try not to compare yourself with others.",
          "Ask yourself what you can do this month that you could not do last month, and celebrate each success, however small.",
        ],
      },
      {
        heading: "Old interests, new ways",
        paragraphs: [
          "Hobbies can raise your confidence, improve anxiety or low mood, and help your recovery. If it is hard to return to a favourite hobby, an occupational therapist might help you adapt it, or you could do it with a partner.",
          "If you cannot return to an old hobby, think about your interests and abilities, and get friends and family involved for ideas. You might need to try a few different things before you find the right fit.",
        ],
      },
      {
        heading: "Work and volunteering",
        paragraphs: [
          "Many people find work helps their recovery, giving a sense of purpose and focus to the day, provided they can cope with the demands of the job. It helps not to rush back too quickly, and some people try voluntary work first to regain confidence.",
          "Volunteering can let you explore new interests, build skills, meet new people and give you a sense of purpose. It can be a good idea to start once a week and build up, and some organisations offer short shifts of an hour or two.",
        ],
      },
      {
        heading: "Roles at home",
        paragraphs: [
          "Family members can encourage you to take on family responsibilities from the start. You may need to find new roles that are manageable, which can boost your confidence and keep up your relationships with other family members.",
          "Trying something new can help boost your mood. Try to be realistic about what is possible, and avoid putting too much pressure on yourself.",
        ],
      },
    ],
    helps: [
      "Set one small, clear milestone, and write it where you will see it every day.",
      "Ask an occupational therapist about adapting a hobby you used to enjoy.",
      "Try a new interest through a local group, library or adult learning course.",
      "Talk to your doctors, nurses and therapists before going back to work, and plan your return with your employer.",
      "Consider volunteering, starting once a week and building up if you feel able.",
      CRISIS,
    ],
    tryThisWeek: [
      "Write down one small milestone.",
      "Ask about adapting a hobby.",
      "Look up one volunteering role.",
    ],
    ask: "Who can help me adapt my hobbies, or plan a return to work?",
    interactive: {
      kind: "scenarios",
      title: "New ways to find purpose",
      scenarios: [
        {
          id: "job",
          situation: "You cannot go back to your old job.",
          options: [{ text: "Explore retraining or volunteering", best: true }, { text: "Decide there is nothing left for you" }],
          why: "Volunteering can let you explore new interests, build skills, meet new people and give you a sense of purpose.",
        },
        {
          id: "garden",
          situation: "Gardening is much harder since your stroke.",
          options: [{ text: "Ask about adapting it", best: true }, { text: "Give it up for good" }],
          why: "If it is hard to return to a favourite hobby, an occupational therapist might help you adapt it, or you could do it with a partner.",
        },
        {
          id: "compare",
          situation: "Your progress feels slow next to other people's.",
          options: [{ text: "Notice what you can do now", best: true }, { text: "Keep comparing yourself" }],
          why: "Ask yourself what you can do this month that you could not do last month, and celebrate each success, however small.",
        },
        {
          id: "rush",
          situation: "You feel pressure to go back to work full-time straight away.",
          options: [{ text: "Go back when ready, with a plan", best: true }, { text: "Rush back as soon as possible" }],
          why: "It helps not to rush back too quickly, and some people try voluntary work first to regain confidence.",
        },
      ],
    },
    sources: [SA_EMOTIONAL, SA_GOALS, SA_HOBBIES, SA_WORK, SA_CHANGING, SA_SUPPORTING, MIND_SELF_CARE, NHS_SUICIDAL],
    quiz: {
      question: "What makes a milestone easier to stick to?",
      options: [{ text: "It matters to you, and you see it every day", right: true }, { text: "It matches what other people are doing" }, { text: "It is as big as possible" }],
      why: "You are more likely to stick to an aim if it is important to you.",
    },
  },
  {
    id: "pds-carers",
    kicker: "For carers",
    question: "I care for someone after a stroke: what about my own mood?",
    hook: "Caring takes time and energy. Looking after yourself is not selfish: it helps you keep going, and it helps the person you care for.",
    short: "Caring for someone after a stroke is a big responsibility and can feel overwhelming. Carers often feel exhausted, isolated or a loss of identity, and it is realistic, not selfish, to look after yourself. Check your own mood, take breaks, register as a carer with your GP, and talk to people who understand.",
    sections: [
      {
        heading: "A big change for you too",
        paragraphs: [
          "When someone has a stroke, it can have a huge impact on everyone close to them. It is common for someone to feel quite low on returning home and to need a lot of encouragement and emotional support, and all of this can be difficult to cope with.",
          "Carers say they sometimes feel overwhelmed, exhausted or isolated, and describe a loss of identity or confidence. You might feel confusion or a sense of loss, fear or anxiety about things like money and work, or loneliness.",
          "Looking after someone who has had a stroke can be difficult, frustrating and lonely. Try to make sure you get all the support and help you need.",
        ],
      },
      {
        heading: "Check your own mood",
        paragraphs: [
          "It is realistic and not selfish to think carefully about taking care of yourself. If you do not look after yourself, you risk becoming stressed or unwell, which could also affect the person you are caring for.",
          "When managing all your responsibilities, it can be easy to miss signs of fatigue and stress in yourself. If you are feeling very low, tearful, anxious or having trouble sleeping, it could be a sign to get help for yourself.",
          "Speaking to your GP is a good start, as they can refer you to local support services or treatment. Registering as a carer with your GP can also bring health check-ups and referrals to other support services.",
        ],
      },
      {
        heading: "Breaks and small things",
        paragraphs: [
          "Taking breaks or getting help with some of your tasks is important. If you cannot go out or have a long break, you could fit in 10 minutes of yoga or mindfulness, and a carer's assessment may recommend respite care.",
          "Try to be realistic about what you can do, and plan regular breaks into your routine. Eat as healthily as you can, do some regular activity, and try to get enough sleep.",
        ],
      },
      {
        heading: "Supporting them, without doing it all",
        paragraphs: [
          "It is better to support the person to do things on their own than to do everything for them. Let them know you are willing to listen, and encourage them to seek help if they need to.",
          "Being physically active helps lift mood, and it can help to do it together. Be patient, as it takes time for things to improve, and praise every sign of progress, however small.",
        ],
      },
      {
        heading: "You are not on your own",
        paragraphs: [
          "Many carers find it helps to talk to others in a similar situation, at a stroke group, a carers group or online. The Stroke Support Helpline is on 0303 3033 100, and the Carers UK helpline is on 0808 808 7777 from Monday to Friday.",
          "If you feel you cannot cope, Samaritans are there 24 hours a day on 116 123. You can also call NHS 111 or text SHOUT to 85258, and if you are in immediate danger, call 999.",
        ],
      },
    ],
    helps: [
      "Check your own mood, and see your GP if you feel very low, tearful or anxious, or are having trouble sleeping.",
      "Register as a carer with your GP.",
      "Plan regular breaks, even 10 minutes of yoga or mindfulness.",
      "Ask for a carer's assessment, which may recommend respite care.",
      "Talk to other carers at a group or online, or call the Stroke Support Helpline on 0303 3033 100.",
      CRISIS,
    ],
    tryThisWeek: [
      "Notice how you are feeling.",
      "Register as a carer with your GP.",
      "Plan a short break.",
    ],
    ask: "Can I have a carer's assessment, and support for my own mood?",
    interactive: {
      kind: "signs",
      title: "Signs to take seriously in yourself",
      intro: "Tick any you have noticed in yourself lately.",
      signs: ["Feeling very low", "Feeling tearful", "Feeling anxious", "Trouble sleeping", "Feeling exhausted", "Feeling isolated or lonely", "A loss of identity or confidence", "Feeling overwhelmed"],
      after: "Speak to your GP, who can refer you to local support services or treatment. If you feel you cannot cope, Samaritans are there 24 hours a day on 116 123.",
      copyHeading: "How I have been feeling as a carer",
    },
    sources: [SA_COPING, NHS_STROKE_RECOVERY, SA_SELF_CARE, MIND_CARERS, SA_TIPS, SA_SUPPORTING, NHS_SUICIDAL],
    quiz: {
      question: "Is it selfish for a carer to look after themselves?",
      options: [{ text: "No: it is realistic, and helps you both", right: true }, { text: "Yes: the survivor always comes first" }, { text: "Only once they have fully recovered" }],
      why: "It is realistic and not selfish to think carefully about taking care of yourself. If you do not look after yourself, you risk becoming stressed or unwell, which could also affect the person you are caring for.",
    },
  },
];
