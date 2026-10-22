import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Self-harm page's pieces (content/library-conditions/mind-extra.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, the Royal
// College of Psychiatrists, Rethink Mental Illness, Samaritans and Harmless, with NICE's information for the
// public. mind.org.uk was not read (it blocks automated reading), so no Mind page is cited; Mind's helpline
// appears only as the NHS gives it. Strict safe messaging throughout: no ways of self-harming are named or
// described, no injuries are described, and the "safer alternatives" some pages list are left out. Every answer
// ends its "What helps" list with the crisis routes exactly as the NHS gives them (999 or A&E, 111 mental health
// option, Samaritans 116 123, Shout 85258). General information only; it never replaces what a person's own GP
// or mental health team tells them, and no medicine should be stopped or changed without the doctor.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const sam = (label: string, path: string): LearnSource => ({ label: `Samaritans: ${label}`, url: `https://www.samaritans.org/how-we-can-help/${path}` });
const harmless = (label: string, path: string): LearnSource => ({ label: `Harmless: ${label}`, url: `https://harmless.org.uk/${path}` });

const SH = "mental-health/feelings-symptoms-behaviours/behaviours/self-harm/";
const NHS_SH = nhs("Self-harm", SH);
const NHS_HELP = nhs("Where to get help for self-harm", `${SH}getting-help/`);
const NHS_WHY = nhs("Why people self-harm", `${SH}why-people-self-harm/`);
const NHS_AVOID = nhs("Ways to help avoid self-harm", `${SH}ways-help-avoid-self-harm/`);
const NHS_TELL = nhs("How to tell someone about self-harm", `${SH}how-tell-someone-about-self-harm/`);
const NHS_TREAT = nhs("Self-harm: assessment and treatments", `${SH}assessment-and-treatments/`);
const NHS_OTHERS = nhs("Self-harm: how to help someone else", `${SH}how-to-help-someone-else/`);
const NHS_CARER = nhs("Carer's assessments", "social-care-and-support/support-and-benefits-for-carers/carer-assessments/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const RCPSYCH_SH: LearnSource = { label: "Royal College of Psychiatrists: Self-harm", url: "https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/self-harm" };
const RCPSYCH_YP: LearnSource = { label: "Royal College of Psychiatrists: Self-harm in children and young people", url: "https://www.rcpsych.ac.uk/mental-health/children-and-young-people/self-harm-in-children-and-young-people" };
const RETHINK_SH: LearnSource = { label: "Rethink Mental Illness: Self-harm", url: "https://www.rethink.org/advice-and-information/about-mental-illness/mental-health-symptoms/self-harm/" };
const RETHINK_URGE: LearnSource = { label: "Rethink Mental Illness: How do I manage thoughts of self-harm?", url: "https://www.rethink.org/advice-and-information/get-help-now/self-help-guides-for-urgent-help/how-do-i-manage-thoughts-of-self-harm/" };
const NICE_PUBLIC: LearnSource = { label: "NICE: Self-harm, information for the public (NG225)", url: "https://www.nice.org.uk/guidance/ng225/informationforpublic" };

const SAM_SH = sam("If you want to self-harm", "if-youre-having-difficult-time/if-you-want-self-harm/");
const SAM_EMMA = sam("Emma's story", "if-youre-having-difficult-time/if-you-want-self-harm/emmas-story/");
const SAM_CONTACT = sam("Contact Samaritans", "contact-samaritan/");
const SAM_STRUGGLING = sam("Signs you may be struggling to cope", "if-youre-having-difficult-time/signs-you-may-be-struggling-cope/");
const SAM_COPE = sam("Practical ways to help yourself cope", "if-youre-having-difficult-time/signs-you-may-be-struggling-cope/practical-ways-help-yourself-cope/");
const SAM_SIGNS = sam("Signs that someone may not be OK", "if-youre-worried-about-someone-else/how-support-someone-youre-worried-about/");
const SAM_LISTEN = sam("What to do if you think someone is struggling", "if-youre-worried-about-someone-else/how-support-someone-youre-worried-about/what-do-if-you-think-someone-struggling/");
const SAM_YOURSELF = sam("Looking after yourself", "if-youre-worried-about-someone-else/how-support-someone-youre-worried-about/looking-after-yourself/");
const SAM_EMERGENCY = sam("If you think it's an emergency", "if-youre-worried-about-someone-else/if-you-think-its-emergency/");
const SHOUT: LearnSource = { label: "Shout 85258: Get help", url: "https://giveusashout.org/get-help/" };

const HARMLESS_HOME = harmless("Self harm and suicide prevention", "");
const HARMLESS_PEOPLE = harmless("People that self harm", "our-services/people-that-self-harm/");
const HARMLESS_FAMILY = harmless("Family and friends", "our-services/family-friends/");

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you do not feel you can keep yourself safe.";

export const selfHarmAnswers: LearnArticle[] = [
  {
    id: "sh-what-it-is",
    kicker: "Understanding",
    question: "What is self-harm, and why is it so hard to talk about?",
    hook: "For many people it is a way of coping with feelings that feel too big to bear. It is more common than many think, and support is there.",
    short: "Self-harm is when somebody intentionally damages or injures their body. When someone self-harms, they are usually feeling very emotional and distressed, and many describe it as a way to release overwhelming emotions. Support is available for anyone who self-harms or thinks about self-harm, as well as their friends and family.",
    sections: [
      {
        heading: "A way of coping",
        paragraphs: [
          "Self-harm is when somebody intentionally damages or injures their body. The Royal College of Psychiatrists describes it as hurting or harming yourself on purpose, for any reason and in any situation.",
          "When someone self-harms, they are usually feeling very emotional and distressed. Many describe their self-harm as a way to release overwhelming emotions.",
        ],
      },
      {
        heading: "Not an illness, but a sign of distress",
        paragraphs: [
          "Self-harm is not a mental health condition, but it is often linked to mental distress. Everyone has their own reasons, and the reasons can change over time.",
          "Some people self-harm only once or twice, while others do it regularly, and it can become hard to stop. Self-harm only gives temporary relief, because the underlying issue is still there.",
        ],
      },
      {
        heading: "More common than many think",
        paragraphs: [
          "The Royal College of Psychiatrists says about 1 in 10 young people will self-harm at some point, but it can happen at any age. Research suggests that between 1 in 10 and 1 in 4 young people have self-harmed.",
          "It is common for people to self-harm in secret, and many people do not seek help afterwards. NICE says most people do not go to hospital after they have self-harmed.",
        ],
      },
      {
        heading: "Words matter",
        paragraphs: [
          "The Royal College of Psychiatrists no longer uses the word deliberate. It makes it sound as though the person is to blame, rather than acting out of emotional anguish or intense distress.",
          "Whatever the reason for self-harming, it is not your fault. All self-harm is serious and important, and everyone who self-harms deserves help.",
        ],
      },
      {
        heading: "Help is there",
        paragraphs: [
          "Support is available for anyone who self-harms or thinks about self-harm, as well as their friends and family. Rethink says there is professional help to stop self-harming, and many people do learn to cope and recover.",
        ],
      },
    ],
    helps: [
      "Remember that whatever the reason for self-harming, it is not your fault, and everyone who self-harms deserves help.",
      "Speak to a GP if you are harming yourself or having thoughts about harming yourself.",
      "If you just need to talk, call Samaritans on 116 123, any time of day or night.",
      "If someone you care about self-harms, remember that support is there for friends and family too.",
      CRISIS,
    ],
    tryThisWeek: [
      "Remind yourself it is not your fault.",
      "Book a GP appointment to talk.",
      "Keep Samaritans' number: 116 123.",
    ],
    ask: "Can you help me find support for self-harm?",
    interactive: {
      kind: "flip-cards",
      title: "Common beliefs, card by card",
      intro: "Turn each card to see what the NHS, the Royal College of Psychiatrists and Rethink say.",
      cards: [
        { id: "attention", front: "\"It is attention-seeking\"", when: "A common misunderstanding", back: "Most people try to hide their self-harm from family and friends." },
        { id: "suicide", front: "\"It means they want to die\"", when: "Not usually", back: "People who self-harm are not usually trying to die. But anyone who self-harms should be taken seriously and offered help." },
        { id: "illness", front: "\"It is a mental illness\"", when: "Not in itself", back: "Self-harm is not a mental health condition, but it is often linked to mental distress." },
        { id: "young", front: "\"Only teenagers do it\"", when: "It can happen at any age", back: "About 1 in 10 young people will self-harm at some point, but it can happen at any age." },
        { id: "fault", front: "\"It is their own fault\"", when: "Never", back: "Whatever the reason for self-harming, it is not your fault, and everyone who self-harms deserves help." },
      ],
    },
    sources: [NHS_SH, RCPSYCH_SH, RETHINK_SH, RCPSYCH_YP, NHS_WHY, NICE_PUBLIC, NHS_HELP, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How do many people describe their self-harm?",
      options: [{ text: "As a way to release overwhelming emotions", right: true }, { text: "As a way to get attention" }, { text: "As something they enjoy" }],
      why: "When someone self-harms, they are usually feeling very emotional and distressed. Many describe their self-harm as a way to release overwhelming emotions.",
    },
  },
  {
    id: "sh-why",
    kicker: "Reasons",
    question: "Why do people self-harm?",
    hook: "There is rarely one reason. Often it is a build-up of smaller things, and the reasons can change over time.",
    short: "Self-harm is most often described as a way to express or cope with emotional distress. It is often a build-up of many smaller things that leads people to think about self-harm, and sometimes the reason is unknown. Whatever the reason, it is important to find support that helps with the underlying cause in a less harmful way.",
    sections: [
      {
        heading: "Many different reasons",
        paragraphs: [
          "Self-harm is most often described as a way to express or cope with emotional distress. People may also self-harm to try to feel in control, to punish themselves, to relieve unbearable distress, as a cry for help, or in response to intrusive thoughts.",
          "The reasons can change over time and will not be the same for everybody. Sometimes the reason is unknown.",
        ],
      },
      {
        heading: "When feelings become too much",
        paragraphs: [
          "Being overwhelmed by feelings such as sadness, guilt and hopelessness is a common reason. Some people find it hard to put their feelings into words, or feel their emotions are unmanageable.",
          "Before self-harm, a person may feel a build-up of emotions so strong that they feel completely overwhelmed. Self-harm can bring a temporary feeling of relief, and this creates a cycle that can make it hard to stop.",
        ],
      },
      {
        heading: "What can build up",
        paragraphs: [
          "It is often a build-up of many smaller things that leads people to think about self-harm. These can include being bullied, pressure at school or work, family arguments or relationship problems, money worries and low self-esteem.",
          "Other causes of distress include stress, anxiety or depression, grief after a loss, and abuse. ADHD and autism do not cause self-harm, but not getting the support you need for them can cause distress that might contribute to it.",
        ],
      },
      {
        heading: "Feeling alone or unheard",
        paragraphs: [
          "The Royal College of Psychiatrists says you are more likely to harm yourself if you feel hopeless, isolated and alone, that people do not understand or listen to you, or that you have no power or control over your life.",
          "Some people think self-harm is attention-seeking, but this is a common misunderstanding. Most people try to hide their self-harm from family and friends.",
        ],
      },
      {
        heading: "Self-harm and suicide",
        paragraphs: [
          "Not everyone who self-harms wants to end their life. Some people describe their self-harm as a way of staying alive by coping with severe emotional distress.",
          "There is still a clear link between self-harm and suicidal thoughts, so anyone who self-harms should be taken seriously and offered help. If you have feelings of wanting to die, it is important to speak to someone you trust as soon as possible.",
        ],
      },
    ],
    helps: [
      "When the urge has gone and you feel safe, think about what was happening and what you were feeling before it began.",
      "Be honest with a GP, even if you do not know why you self-harm.",
      "If self-harm gives you a sense of escape, relief or control, try to work out something that might give the same result without harming you.",
      "If you have feelings of wanting to die, speak to someone you trust as soon as possible.",
      CRISIS,
    ],
    tryThisWeek: [
      "Notice what came before an urge.",
      "Be honest with your GP, even if unsure why.",
      "Speak to someone you trust soon.",
    ],
    ask: "Can you help me understand what might be behind my self-harm?",
    interactive: {
      kind: "signs",
      title: "What has been building up?",
      intro: "Tick anything that has been building up for you. It is often a combination of smaller things, and the reasons can change over time.",
      signs: ["Being bullied", "Pressure at school or work", "Family or relationship problems", "Money worries", "Low self-esteem", "Stress, anxiety or depression", "Grief after a loss", "Feeling isolated and alone", "Feeling no one listens to me", "Feeling I have no control"],
      after: "These are among the causes of distress the NHS and the Royal College of Psychiatrists describe. Sharing them with a GP can help, even if you do not know why you self-harm.",
      copyHeading: "Things that have been building up for me",
    },
    sources: [NHS_WHY, RCPSYCH_SH, RETHINK_SH, RCPSYCH_YP, NHS_HELP, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What often leads people to think about self-harm?",
      options: [{ text: "A build-up of many smaller things", right: true }, { text: "Always one single big event" }, { text: "Wanting attention" }],
      why: "It is often a build-up of many smaller things that leads people to think about self-harm.",
    },
  },
  {
    id: "sh-signs",
    kicker: "Family and friends",
    question: "How can I tell if someone I care about is self-harming?",
    hook: "It can be hard to spot, because many people keep it hidden. Changes in mood and behaviour can be a clue, and a calm, caring approach matters most.",
    short: "It can be hard to recognise when someone has started to self-harm, as they may not want anyone else to know. Signs can include keeping covered up even in hot weather, unexplained injuries, becoming withdrawn, and signs of low mood or low self-esteem. If you are worried, approach the subject with care and understanding, and let them know they are not alone.",
    sections: [
      {
        heading: "Often kept hidden",
        paragraphs: [
          "It can be hard to recognise when someone has started to self-harm, as they may not want anyone else to know. It is common for people to self-harm in secret, sometimes because they feel their thoughts and feelings are not acceptable to other people.",
        ],
      },
      {
        heading: "Physical signs",
        paragraphs: [
          "The NHS says physical signs can include someone keeping themselves fully covered at all times, even in hot weather. There may also be injuries they do not explain.",
        ],
      },
      {
        heading: "Emotional signs",
        paragraphs: [
          "Emotional signs can include becoming very withdrawn and not speaking to others, signs of depression such as low mood, tearfulness or a lack of interest in anything, and signs of low self-esteem, such as thinking they are not good enough.",
          "Samaritans lists other general signs that someone may not be OK, such as not wanting to do things they usually enjoy, using alcohol or drugs to cope with feelings, and a change in routine, like sleeping or eating more or less than normal.",
          "Someone talking about ending things or not wanting to go on is another sign the NHS lists. Anyone who self-harms should be taken seriously and offered help.",
        ],
      },
      {
        heading: "Situations to look out for",
        paragraphs: [
          "Some situations can make it hard for someone to cope. These include bereavement, relationship and family problems, money worries, job or study pressures, bullying, and loneliness and isolation.",
          "You might not always be able to spot the signs. For some people several signs apply, and for others just one or two, or none.",
        ],
      },
      {
        heading: "If you notice something",
        paragraphs: [
          "If you think someone has started to self-harm, approach the subject with care and understanding. It can be very helpful just to be there and let them know they are not alone.",
          "Try to stay calm, and ask calm, simple questions, such as whether something is happening that is making them feel this way. Consider that any amount of self-harm might be a sign they are feeling extremely distressed.",
        ],
      },
    ],
    helps: [
      "Approach the subject with care and understanding, and let them know they are not alone.",
      "Stay calm, and ask calm, simple questions about how they are feeling.",
      "Try to understand their emotions and experiences without judging them, rather than focusing on the self-harm.",
      "Encourage them to speak to a GP or a free listening service.",
      CRISIS,
    ],
    tryThisWeek: [
      "Let them know they are not alone.",
      "Listen without judging.",
      "Suggest a GP or listening service.",
    ],
    ask: "I am worried someone close to me is self-harming. How can I best help them get support?",
    interactive: {
      kind: "signs",
      title: "Signs you may have noticed",
      intro: "Tick any you have noticed. Many people hide self-harm, so you may see only one or two, or none.",
      signs: ["Covered up, even in hot weather", "Injuries they do not explain", "Very withdrawn, not talking", "Low mood or tearfulness", "Lost interest in everything", "Thinks they are not good enough", "Using alcohol or drugs to cope", "Sleeping or eating more or less", "Talks of not wanting to go on"],
      after: "These are signs the NHS and Samaritans describe. If you are worried, approach them with care, and encourage them to speak to a GP or a free listening service. If they talk about ending things, the crisis routes below can help.",
      copyHeading: "Signs I have noticed",
    },
    sources: [NHS_OTHERS, SAM_SIGNS, RETHINK_SH, RCPSYCH_YP, RCPSYCH_SH, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Why can self-harm be hard to recognise?",
      options: [{ text: "The person may not want anyone else to know", right: true }, { text: "There are never any signs" }, { text: "It only happens to teenagers" }],
      why: "It can be hard to recognise when someone has started to self-harm, as they may not want anyone else to know.",
    },
  },
  {
    id: "sh-urgent",
    kicker: "Urgent help",
    question: "I need help right now. Who can I contact?",
    hook: "Help is there at any hour of the day or night. A mental health emergency should be taken as seriously as a physical one.",
    short: "If you have seriously harmed yourself, or you do not feel you can keep yourself safe, call 999 or go to A&E. For urgent help that is not an emergency, call 111 and select the mental health option. If you need to talk, call Samaritans on 116 123 or text \"SHOUT\" to 85258, at any time.",
    sections: [
      {
        heading: "In an emergency",
        paragraphs: [
          "If you have seriously harmed yourself, or you feel that you may be about to harm yourself, call 999 for an ambulance or go straight to A&E. Or ask someone else to call 999 or take you to A&E.",
          "Call 999 or go to A&E if someone's life is at risk, or you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one. You will not be wasting anyone's time.",
        ],
      },
      {
        heading: "Urgent, but not an emergency",
        paragraphs: [
          "If you need urgent help for your mental health, get help from 111 online or call 111 and select the mental health option. 111 will tell you the right place to get help, and you may be able to speak to a trained mental health professional over the phone.",
          "You can also ask for an urgent GP appointment, or contact your mental health crisis team if you have one.",
        ],
      },
      {
        heading: "If you just need to talk",
        paragraphs: [
          "Free listening services offer confidential support from trained volunteers, and you can talk about anything that is troubling you, no matter how difficult. Call 116 123 to talk to Samaritans, or text \"SHOUT\" to 85258 to contact the Shout Crisis Text Line.",
          "Samaritans is free to call from any phone, 24 hours a day, 365 days a year, and the number will not come up on your phone bill. Many people call because they want to avoid harming themselves in that moment.",
          "Shout is a free, confidential text service, open 24 hours a day, for anyone in the UK who needs support. If you are under 19, you can also call Childline on 0800 1111.",
        ],
      },
      {
        heading: "What happens in A&E",
        paragraphs: [
          "If you go to A&E, the staff should treat you with respect and look after any immediate physical and mental health needs. They should also refer you to a liaison psychiatry service or a local crisis resolution and home treatment team.",
          "You have a right to seek help, and you should never feel shamed or judged for this. You have done the right thing in going to A&E.",
        ],
      },
      {
        heading: "Getting through the next few hours",
        paragraphs: [
          "Try not to think about the future, and just focus on getting through today. Stay away from drugs and alcohol, get yourself to a safe place like a friend's house, and be around other people.",
          "If you have hurt yourself and need immediate medical attention, the quickest way to get support is to call 999 for an ambulance. Samaritans can call an ambulance for you, if you want them to.",
        ],
      },
    ],
    helps: [
      "Call 999 or go straight to A&E if you have seriously harmed yourself, or feel you may be about to.",
      "Call 111 and select the mental health option if you need urgent help for your mental health.",
      "Call Samaritans on 116 123, or text \"SHOUT\" to 85258, any time of day or night.",
      "If someone else has hurt themselves and you think their injuries are life-threatening, call 999, whether you are with them or not.",
      CRISIS,
    ],
    tryThisWeek: [
      "Know when to call 999 or go to A&E.",
      "Remember 111, mental health option.",
      "Keep Samaritans' number: 116 123.",
    ],
    ask: "Who should I contact if I am in crisis, and do I have a crisis team?",
    interactive: {
      kind: "scenarios",
      title: "Who to contact, and when",
      scenarios: [
        {
          id: "harmed",
          situation: "You have hurt yourself and think you need medical help now.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait and see" }],
          why: "If you have seriously harmed yourself, call 999 for an ambulance or go straight to A&E. Or ask someone else to call 999 for you.",
        },
        {
          id: "unsafe",
          situation: "You feel you may not be able to keep yourself safe tonight.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Keep it to yourself" }],
          why: "Call 999 or go to A&E if you do not feel you can keep yourself safe. You will not be wasting anyone's time.",
        },
        {
          id: "urgent",
          situation: "You need urgent mental health help, but you are safe right now.",
          options: [{ text: "Call 111, mental health option", best: true }, { text: "Wait for a routine appointment" }],
          why: "111 will tell you the right place to get help, and you may be able to speak to a trained mental health professional over the phone.",
        },
        {
          id: "talk",
          situation: "It is the middle of the night and you need to talk.",
          options: [{ text: "Call Samaritans on 116 123", best: true }, { text: "Stay alone with it" }],
          why: "Samaritans is free to call from any phone, 24 hours a day, 365 days a year.",
        },
        {
          id: "text",
          situation: "You do not feel able to talk on the phone.",
          options: [{ text: "Text SHOUT to 85258", best: true }, { text: "Do nothing" }],
          why: "Shout is a free, confidential text service, open 24 hours a day, for anyone in the UK who needs support.",
        },
      ],
    },
    sources: [NHS_URGENT, NHS_SUICIDAL, NHS_HELP, SAM_SH, SAM_CONTACT, SHOUT, RCPSYCH_YP, SAM_EMERGENCY],
    quiz: {
      question: "If you do not feel you can keep yourself safe, what is the right step?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Wait until the morning" }, { text: "Send an email" }],
      why: "Call 999 or go to A&E if someone's life is at risk, or you do not feel you can keep yourself or someone else safe.",
    },
  },
  {
    id: "sh-talking-first",
    kicker: "Telling someone",
    question: "How do I tell someone I self-harm?",
    hook: "It can feel like a huge step. Many people feel more supported and less alone afterwards, and you get to choose who, when and how.",
    short: "It can be difficult to know how to talk to friends, family or a health professional about self-harm, but many people feel more supported and less alone after talking to someone. Choose someone you trust, and a time and place that suits you both. You only need to share what you are comfortable with, and you do not have to tell someone in person.",
    sections: [
      {
        heading: "Why telling someone helps",
        paragraphs: [
          "Many people feel more supported and less alone after talking to someone. Sharing your feelings with someone you trust can help you to self-harm less.",
          "A lot of people who self-harm do not ask for help, and it can sometimes feel as though self-harm is not a major problem, just a way to cope with life. If you think you may harm yourself, do not suffer in silence: tell someone how you feel.",
        ],
      },
      {
        heading: "Who to tell",
        paragraphs: [
          "Find someone you can trust, such as a close friend, family member, trained volunteer or health professional. You could also tell a work colleague, a peer support group member, your GP, or someone on a helpline, where you can stay anonymous if you prefer.",
          "Samaritans says that for every 10 calls it answers, one is about self-harm. You do not have to feel suicidal to get in touch.",
        ],
      },
      {
        heading: "How to say it",
        paragraphs: [
          "You only need to share things you are comfortable with. It can help to think about what you will say, practise saying it out loud, or write some notes first.",
          "You do not have to tell someone in person. You can write a letter, an email or a text message, or make a video or audio recording for them.",
          "Let the person know that what you are sharing may be a shock to them, but you are looking for help. Be clear about how you are feeling, why you are asking for help, and things they may be able to do.",
        ],
      },
      {
        heading: "Choosing the moment",
        paragraphs: [
          "Choose a time and place that suits you both, when you feel able to cope with the conversation and the other person is not distracted. If they become distressed or you are interrupted, you can ask to continue another time.",
          "Let them ask questions, but do not feel you have to answer them all straight away. If you are talking to a health professional, they may want to check whether you need treatment.",
        ],
      },
      {
        heading: "If they find it hard to understand",
        paragraphs: [
          "Other people may find it hard to understand why you self-harm, even some professionals. This does not mean they do not care or do not want to help.",
          "Try to be patient and answer their questions, as this can help them find the best way to support you. Some people find a code word helps others know when things are getting hard, without going into detail.",
        ],
      },
    ],
    helps: [
      "Find someone you trust, such as a friend, family member, trained volunteer or health professional.",
      "Think about what you want to say, and practise it or write notes first.",
      "If speaking feels too hard, write a letter, send a text, or record a message instead.",
      "Let them ask questions, but do not feel you have to answer them all right now.",
      "If you would rather stay anonymous, call Samaritans on 116 123.",
      CRISIS,
    ],
    tryThisWeek: [
      "Choose one person you trust.",
      "Jot down what you want to say.",
      "Write it if speaking feels too hard.",
    ],
    ask: "I have not told anyone about my self-harm before. What happens after I tell you?",
    interactive: {
      kind: "timeline",
      title: "Planning the conversation",
      steps: [
        { id: "who", when: "Step 1", title: "Choose who", points: ["Someone you trust and feel comfortable with.", "A helpline lets you stay anonymous if you prefer."] },
        { id: "how", when: "Step 2", title: "Choose how", points: ["In person, or by letter, email or text.", "Or make a video or audio recording for them."] },
        { id: "when", when: "Step 3", title: "Choose when", points: ["A time and place that suits you both.", "When you feel able to cope with the conversation."] },
        { id: "say", when: "Step 4", title: "Say what you need", points: ["Explain it may be a shock, but you are looking for help.", "Be clear about how you feel and what might help."] },
        { id: "pace", when: "Step 5", title: "Go at your own pace", points: ["Let them ask questions.", "You do not have to answer them all right now."] },
      ],
    },
    sources: [NHS_TELL, RETHINK_SH, RCPSYCH_YP, SAM_SH, SAM_STRUGGLING, RCPSYCH_SH, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do you have to tell someone face to face?",
      options: [{ text: "No, you can write, text or record it", right: true }, { text: "Yes, it always has to be in person" }, { text: "Only a doctor can be told" }],
      why: "You do not have to tell someone in person. You can write a letter, an email or a text message, or make a video or audio recording for them.",
    },
  },
  {
    id: "sh-gp-therapy",
    kicker: "Treatment",
    question: "What can a GP do, and what treatment might help?",
    hook: "A GP will listen and help you find the right support. Talking therapies can help you find other ways to manage the distress behind self-harm.",
    short: "It is best to speak to a GP about self-harm. A GP will listen and discuss the best options for you, and may refer you for an assessment with a local community mental health team. Your care plan may include a talking therapy, such as cognitive behavioural therapy (CBT), to help you find ways to reduce the distress that leads to self-harm.",
    sections: [
      {
        heading: "Starting with a GP",
        paragraphs: [
          "It is best to speak to a GP about self-harm. A GP will listen and discuss the best options for you, which could include self-help or support groups, and can give advice and treatment for minor injuries.",
          "They may ask you detailed questions to understand the cause of your self-harm. It is important to be honest, even if you do not know why you self-harm. GPs are used to talking about mental health: Mind says 4 out of 10 GP appointments involve it.",
        ],
      },
      {
        heading: "An assessment",
        paragraphs: [
          "If needed, a GP may refer you for an assessment with a local community mental health team. This helps your care team work out a treatment plan with you.",
          "You may be asked about what may have led to your self-harm, how you feel afterwards, your relationships and living arrangements, and anything you have tried to help. You may also be asked whether you have thoughts of ending your life, and about alcohol, drugs and any medicines.",
          "NICE says people who self-harm should be treated with kindness, dignity and respect, and always feel listened to and supported.",
        ],
      },
      {
        heading: "Your care plan",
        paragraphs: [
          "After your assessment, your care team will develop a care plan with you, explaining the support and treatment you need and how it will be provided. You should be given a copy, and your care team should give you emergency contact details.",
          "If you are under 18, you may be referred to your local children and young people's mental health services.",
        ],
      },
      {
        heading: "Talking therapies",
        paragraphs: [
          "Your care plan may include a talking therapy, such as cognitive behavioural therapy (CBT) or dialectical behaviour therapy (DBT). All types involve working with a trained therapist who will keep your feelings and experiences confidential.",
          "Rethink says therapy should start as soon as possible, and be between 4 and 10 sessions, though more can be offered if needed. Your therapist should work with you to find ways to reduce the distress that leads to self-harm.",
          "The Royal College of Psychiatrists says CBT seems to be useful, as is a combination of problem-solving therapy and CBT.",
        ],
      },
      {
        heading: "Medicine, and your choices",
        paragraphs: [
          "Medicine should not be offered to treat self-harm itself. Your care team may suggest it alongside talking therapy if you have been diagnosed with a condition such as depression.",
          "If the first treatment you try does not work for you, it is best to try other options, as other treatments might work better. You can ask for a second opinion, or speak to a second doctor if you feel you are not being offered the support you need.",
        ],
      },
    ],
    helps: [
      "Speak to a GP if you are harming yourself or having thoughts about harming yourself.",
      "Be honest with your GP, even if you do not know why you self-harm.",
      "Ask a friend or family member to come to the appointment with you for extra support.",
      "Ask for a copy of your care plan, and your care team's emergency contact details.",
      "If a treatment does not work for you, ask about other options or a second opinion.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Ask someone to come with you.",
      "Ask for a copy of your care plan.",
    ],
    ask: "Can I be referred to talking therapy, and how long is the wait here?",
    interactive: {
      kind: "flip-cards",
      title: "Who and what can help",
      intro: "Turn each card to see when each kind of help is used and what it does.",
      cards: [
        { id: "gp", front: "Your GP", when: "Usually the first step", back: "Listens, discusses the best options with you, can treat minor injuries, and may refer you for an assessment." },
        { id: "cmht", front: "Community mental health team", when: "If more support is needed", back: "Assesses what may have led to your self-harm, and works out a care plan with you." },
        { id: "cbt", front: "CBT", when: "A talking therapy often offered", back: "A trained therapist works with you to find ways to reduce the distress that leads to self-harm." },
        { id: "dbt", front: "DBT", when: "Another talking therapy", back: "Dialectical behaviour therapy is one of the talking therapies a care plan may include." },
        { id: "medicine", front: "Medicine", when: "For a linked condition", back: "Not offered to treat self-harm itself, but may be suggested for a condition such as depression." },
        { id: "groups", front: "Self-help groups", when: "Alongside other help", back: "People meet regularly to give each other practical and emotional support, and to feel less alone." },
      ],
    },
    sources: [NHS_HELP, NHS_TREAT, RETHINK_SH, RCPSYCH_SH, NICE_PUBLIC, SAM_SH, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What should you do if you do not know why you self-harm?",
      options: [{ text: "Be honest with your GP anyway", right: true }, { text: "Wait until you know why" }, { text: "Avoid seeing a GP" }],
      why: "It is important to be honest, even if you do not know why you self-harm.",
    },
  },
  {
    id: "sh-injuries",
    kicker: "Physical care",
    question: "What should I do if I have hurt myself?",
    hook: "Any harm deserves care, however small. You have the right to be treated with respect, and no one should make you feel judged.",
    short: "If you have hurt yourself badly, call 999 or go to A&E, and if you are not sure what kind of help you need, call 111. A GP can give advice and treatment for minor injuries, as without treatment there is a risk of infection. You have the right to be treated with courtesy and respect, and health professionals should offer treatment for your injuries even if you do not want mental health support.",
    sections: [
      {
        heading: "When to get help straight away",
        paragraphs: [
          "If you have hurt yourself or are thinking about hurting yourself, call 999 or go to A&E immediately. If you are not sure what kind of help you need, you can call 111 or use NHS 111 online.",
          "If you need immediate medical attention, the quickest way to get support is to call 999 for an ambulance. Go to A&E if you have any concerns that you have harmed yourself badly in a way that cannot be treated at home.",
          "A mental health emergency should be taken as seriously as a physical one. You will not be wasting anyone's time.",
        ],
      },
      {
        heading: "Minor injuries",
        paragraphs: [
          "Speak to a GP if you are worried about minor injuries, because without treatment there is a risk of infection. A GP can give you advice and treatment.",
          "It is important to get help however big or small the harm is. Self-harm can become more dangerous as time goes on, and asking for help as soon as possible can stop things from getting more serious.",
          "Rethink suggests making sure you are up to date with your tetanus jab, and contacting your GP surgery if you are not sure.",
        ],
      },
      {
        heading: "Being treated with respect",
        paragraphs: [
          "You have the right to be treated with courtesy and respect by the doctors and nurses in the emergency department. Many emergency departments now have easy access to a professional who is familiar with self-harm.",
          "Health professionals should offer you treatment for your injuries, even if you do not want mental health support. In A&E, you should also be offered a referral to a specialist mental health service as soon as possible.",
          "You have a right to seek help, and you should never feel shamed or judged for this.",
        ],
      },
      {
        heading: "Scars",
        paragraphs: [
          "You may feel embarrassed, ashamed or guilty about scars. Accepting them can be an important part of recovery, and this can take time.",
          "There is no right way to answer questions about scars. You can tell people as much or as little as you want, or say you would rather not talk about it. You do not have to explain or justify your scars to anyone.",
          "Most scars will fade over time. If your scars are an issue for you, you can talk to your doctor about them.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E if you think you have harmed yourself badly, or you feel you cannot keep yourself safe.",
      "Call 111 or use NHS 111 online if you are not sure what kind of help you need.",
      "See a GP about minor injuries, as without treatment there is a risk of infection.",
      "Check you are up to date with your tetanus jab, and ask your GP surgery if you are not sure.",
      "Talk to your doctor if scars are an issue for you.",
      CRISIS,
    ],
    tryThisWeek: [
      "Know when to call 999 or go to A&E.",
      "See a GP about minor injuries.",
      "Check your tetanus jab is up to date.",
    ],
    ask: "What should I do if I hurt myself badly?",
    interactive: {
      kind: "scenarios",
      title: "Getting the right care",
      scenarios: [
        {
          id: "badly",
          situation: "You are worried you have harmed yourself badly.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Hope it settles at home" }],
          why: "Go to A&E if you have any concerns that you have harmed yourself badly in a way that cannot be treated at home.",
        },
        {
          id: "minor",
          situation: "You have a minor injury and you are worried about it.",
          options: [{ text: "See a GP", best: true }, { text: "Ignore it" }],
          why: "A GP can give advice and treatment for minor injuries. Without treatment there is a risk of infection.",
        },
        {
          id: "unsure",
          situation: "You are not sure what kind of help you need.",
          options: [{ text: "Call 111 or use 111 online", best: true }, { text: "Do nothing" }],
          why: "If you are not sure what kind of help you need, you can call 111 or use NHS 111 online.",
        },
        {
          id: "scars",
          situation: "Someone asks you about your scars.",
          options: [{ text: "Say only what you want to", best: true }, { text: "Feel you owe a full answer" }],
          why: "There is no right way to respond. You do not have to explain or justify your scars to anyone.",
        },
      ],
    },
    sources: [NHS_HELP, SAM_SH, RETHINK_SH, RCPSYCH_SH, RCPSYCH_YP, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Why does the NHS suggest seeing a GP about minor injuries?",
      options: [{ text: "Without treatment there is a risk of infection", right: true }, { text: "They never need checking" }, { text: "Only A&E can help with them" }],
      why: "Speak to a GP if you are worried about minor injuries, because without treatment there is a risk of infection.",
    },
  },
  {
    id: "sh-distraction",
    kicker: "Coping",
    question: "What can I do when the urge to self-harm is strong?",
    hook: "Urges rise, and they also pass. Small things, done in the moment, can help you get through it.",
    short: "Finding ways to prevent or distract yourself from self-harm may help you get through a difficult moment, and the urge may begin to pass over time. Talking to someone, calming breathing, writing down your feelings or doing something you enjoy can all help. These are for the moment: getting support for the underlying cause matters too.",
    sections: [
      {
        heading: "The urge can pass",
        paragraphs: [
          "Remember that the feelings of self-harm will go away after a while. If you can cope with your distress without self-harming for a time, it may get easier over the next few hours.",
          "Finding ways to prevent or distract yourself from self-harm may help you get through a difficult moment. But it is very important to get the support and treatment you need for the underlying cause too.",
        ],
      },
      {
        heading: "Try to wait",
        paragraphs: [
          "Try waiting before you consider self-harm, and distract yourself in the meantime. Rethink suggests giving yourself an aim, like waiting 5 minutes, and gradually increasing the time you wait.",
          "With this technique, you might not self-harm as badly, as often, or at all, and the urge might pass.",
        ],
      },
      {
        heading: "Distract yourself",
        paragraphs: [
          "Talk to someone: phone a friend, or call Samaritans on 116 123. Just reaching out to a trusted friend can distract you for long enough that the urge goes away.",
          "Go out for a walk or run, listen to music, or do something creative such as writing, painting, knitting or baking. Some people make a self-soothe box of things that comfort them, such as fidget toys or comforting pieces of fabric.",
          "If you are somewhere that is making you feel worse, try to find a way to distance yourself from it.",
        ],
      },
      {
        heading: "Calm your body and mind",
        paragraphs: [
          "Try calming breathing exercises. Samaritans suggests breathing in for four seconds, holding for four, breathing out for four, and waiting four seconds before repeating, until you start to feel calmer.",
          "Grounding can help too. Focus on 3 things you can see, 3 things you can hear and 3 things you can touch.",
          "Write down your feelings, as no one else needs to see it. Some people find it helps to write them down and then rip the page up, or to scream into a pillow.",
        ],
      },
      {
        heading: "Plan ahead",
        paragraphs: [
          "A safety plan can help when times get tough. It is best written when you are calm, with a healthcare professional and someone you trust, and kept up to date.",
          "Apps such as Calm Harm can help you resist or manage the urge to self-harm. Avoid alcohol and drugs, as these can increase the risk of self-harm.",
        ],
      },
    ],
    helps: [
      "Try waiting before you consider self-harm, and distract yourself while you wait.",
      "Talk about your feelings to someone you trust, or call Samaritans on 116 123.",
      "Go for a walk, listen to music, or do something creative.",
      "Try calming breathing, or focus on things you can see, hear and touch.",
      "Write down your feelings; no one else needs to see it.",
      CRISIS,
    ],
    tryThisWeek: [
      "Wait, and distract yourself.",
      "Try slow, calming breathing.",
      "Write down how you feel.",
    ],
    ask: "Can you help me make a safety plan for when the urges are strong?",
    interactive: {
      kind: "flip-cards",
      title: "Things to try in the moment",
      intro: "Turn each card for an idea to try. Everybody is different, so keep the ones that help and drop the ones that do not.",
      cards: [
        { id: "wait", front: "Wait", when: "When the urge first comes", back: "Set an aim, like waiting 5 minutes, and distract yourself. The urge might pass." },
        { id: "talk", front: "Talk", when: "If you feel alone with it", back: "Phone a friend, or call Samaritans on 116 123, any time of day or night." },
        { id: "move", front: "Move", when: "If you feel restless", back: "Go out for a walk or run, or do exercise that makes you feel out of breath." },
        { id: "breathe", front: "Breathe", when: "If you feel anxious", back: "In for four seconds, hold for four, out for four, wait for four. Repeat until you feel calmer." },
        { id: "ground", front: "Ground yourself", when: "If you feel overwhelmed", back: "Focus on 3 things you can see, 3 things you can hear and 3 things you can touch." },
        { id: "write", front: "Write it down", when: "If feelings are hard to say", back: "Write how you feel. No one else needs to see it, and you can rip it up afterwards." },
        { id: "app", front: "Use an app", when: "To have help to hand", back: "Calm Harm can help you resist or manage the urge to self-harm." },
      ],
    },
    sources: [NHS_AVOID, RETHINK_URGE, RETHINK_SH, RCPSYCH_SH, RCPSYCH_YP, SAM_COPE, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What may help when an urge to self-harm comes?",
      options: [{ text: "Waiting, and distracting yourself meanwhile", right: true }, { text: "Acting on it straight away" }, { text: "Staying alone with it" }],
      why: "Try waiting before you consider self-harm, and distract yourself in the meantime.",
    },
  },
  {
    id: "sh-triggers",
    kicker: "Patterns",
    question: "How can I work out what sets off my urges?",
    hook: "Urges often follow a pattern. Spotting it, when you feel calm, gives you a chance to plan something different.",
    short: "Triggers are the feelings, situations, people or even times of day that lead you to feel like self-harming. Keeping a journal, and thinking back calmly to the last time you wanted to self-harm, can help you spot patterns. Once you know them, you can work with someone you trust on safer ways to respond.",
    sections: [
      {
        heading: "What a trigger is",
        paragraphs: [
          "Triggers are things that lead to you feeling like you want to self-harm. They might be feelings, situations, people or even times of day.",
          "Samaritans says that when you are finding it hard to cope, it is often due to a combination of things, such as relationship and family problems, loss, money worries, job or study stress, and loneliness.",
        ],
      },
      {
        heading: "Looking back, when you feel safe",
        paragraphs: [
          "When the urge has gone and you feel safe, think about the times you have self-harmed. Go back in your mind to the last time you wanted to, and think about where you were, who you were with and what you were feeling.",
          "Try to work out why you began to want to harm yourself. If self-harm gave you a sense of escape, relief or control, try to work out something that might give you the same result without harming you.",
        ],
      },
      {
        heading: "Keep a journal",
        paragraphs: [
          "Write down or draw how you are feeling. This can help you identify patterns or triggers, and come up with ways to distract yourself.",
          "Try working out if feeling a certain way leads to your self-harm. For example, when you feel sad or anxious, you could try expressing that emotion in a safer way.",
        ],
      },
      {
        heading: "Plan a different response",
        paragraphs: [
          "Work with someone you trust to come up with ways to respond to your triggers. For example, when you feel sad you might call a trusted friend, or when you feel overwhelmed you might go to a safe space.",
          "If you know what triggers your difficult thoughts and feelings, Samaritans suggests trying controlled breathing when you know you will meet that trigger, or straight after.",
        ],
      },
      {
        heading: "Online, and other triggers",
        paragraphs: [
          "Avoid websites or accounts that encourage self-harm. You can change your settings, restrict or block content that triggers your self-harm, and follow accounts that make you feel good about yourself.",
          "Drinking a lot of alcohol or taking drugs can increase the risk of self-harm, and they can affect your judgement.",
        ],
      },
    ],
    helps: [
      "Keep a journal of how you feel, to help you spot patterns or triggers.",
      "When you feel safe, think back to where you were, who you were with and what you were feeling.",
      "Work with someone you trust on ways to respond to each trigger.",
      "Restrict or block online content that triggers your self-harm.",
      "Try controlled breathing when you know you will meet a trigger.",
      CRISIS,
    ],
    tryThisWeek: [
      "Start a feelings journal.",
      "Think back calmly to the last urge.",
      "Block content that triggers you.",
    ],
    ask: "Can you help me understand my triggers and plan what to do about them?",
    interactive: {
      kind: "risk-check",
      title: "Triggers you may notice",
      intro: "Tick any that seem to come before your urges. Each one has something you can try.",
      items: [
        { id: "feelings", label: "Strong feelings, like sadness", note: "When you feel sad or anxious, you could try expressing that emotion in a safer way.", changeable: true },
        { id: "overwhelmed", label: "Feeling overwhelmed", note: "You might go to a safe space, or try controlled breathing.", changeable: true },
        { id: "people", label: "Arguments or relationship problems", note: "Plan with someone you trust how to respond, such as calling a trusted friend.", changeable: true },
        { id: "alone", label: "Feeling lonely or isolated", note: "Just reaching out to a trusted friend can distract you for long enough that the urge goes away.", changeable: true },
        { id: "online", label: "Upsetting content online", note: "Avoid accounts that encourage self-harm, and restrict or block content that triggers it.", changeable: true },
        { id: "time", label: "A certain time of day", note: "Note it in your journal. This can help you come up with ways to distract yourself.", changeable: true },
        { id: "alcohol", label: "Alcohol or drugs", note: "They can affect your judgement and increase the risk of self-harm.", changeable: true },
      ],
    },
    sources: [RCPSYCH_YP, RCPSYCH_SH, NHS_AVOID, SAM_COPE, RETHINK_SH, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When is a good time to think about your triggers?",
      options: [{ text: "When the urge has gone and you feel safe", right: true }, { text: "In the middle of an urge" }, { text: "Never, it is best not to" }],
      why: "When the urge has gone and you feel safe, think about the times you have self-harmed.",
    },
  },
  {
    id: "sh-support",
    kicker: "Support",
    question: "Which charities and helplines can help with self-harm?",
    hook: "You do not have to face it alone. Some lines are there to listen at any hour, and some charities specialise in self-harm.",
    short: "Free listening services such as Samaritans (116 123) and Shout (text \"SHOUT\" to 85258) offer confidential support at any time. Charities such as Harmless, Self Injury Support and Mind offer information and support for anyone who self-harms, and for their friends and family. It is still best to speak to a GP too.",
    sections: [
      {
        heading: "Someone to listen, any time",
        paragraphs: [
          "Free listening services offer confidential support from trained volunteers, and you can talk about anything that is troubling you. Call 116 123 to talk to Samaritans, or text \"SHOUT\" to 85258 to contact the Shout Crisis Text Line.",
          "Samaritans is free from any phone, 24 hours a day, and listens without judgement or pressure. Your number is not shown to the volunteer, and you do not have to give your name.",
          "These services will only share your information if they are very worried about you or think you are in immediate danger.",
        ],
      },
      {
        heading: "Text instead of talk",
        paragraphs: [
          "Shout is a free, confidential, 24/7 text service for anyone in the UK who needs support, including with self-harm. You only need to share what you feel comfortable with.",
          "If you are under 19, you can call Childline on 0800 1111, and the number will not appear on your phone bill.",
        ],
      },
      {
        heading: "Self-harm charities",
        paragraphs: [
          "Harmless is a national centre for self-harm and suicide prevention, set up by people who understand self-harm. It supports people of any age who self-harm, and their friends and families, and you can email it for information and support.",
          "Self Injury Support has a helpline on 0808 800 8088 and a textline. It offers confidential, anonymous, non-judgemental support to anyone affected by self-injury, their own or someone else's.",
          "Mind offers information and support on 0300 123 3393, or by text on 86463, on weekdays. The National Self Harm Network has online forums.",
        ],
      },
      {
        heading: "For parents and young people",
        paragraphs: [
          "The YoungMinds Parents Helpline is on 0808 802 5544 on weekdays. Health for Teens has self-harm information and advice for young people.",
        ],
      },
      {
        heading: "Alongside your GP",
        paragraphs: [
          "It is best to speak to a GP about self-harm, but you may also find it helpful to speak to a free listening service or support organisation.",
          "If you struggle with suicidal thoughts, the Staying Safe website explains how to make a safety plan, with video tutorials and online templates.",
        ],
      },
    ],
    helps: [
      "Call Samaritans on 116 123, any time of day or night.",
      "Text \"SHOUT\" to 85258 if you would rather not talk on the phone.",
      "Contact a self-harm charity such as Harmless or Self Injury Support for information and support.",
      "If you are under 19, call Childline on 0800 1111.",
      "Keep speaking to a GP alongside any listening service.",
      CRISIS,
    ],
    tryThisWeek: [
      "Keep Samaritans' number, 116 123.",
      "Remember SHOUT to 85258.",
      "Look up a self-harm charity.",
    ],
    ask: "Is there support for self-harm in this area, and is there support for my family too?",
    interactive: {
      kind: "flip-cards",
      title: "Who to contact",
      intro: "Turn each card to see when each service can help and what it offers.",
      cards: [
        { id: "samaritans", front: "Samaritans: 116 123", when: "Any time, day or night", back: "Free from any phone. Trained volunteers listen without judgement or pressure." },
        { id: "shout", front: "Shout: text SHOUT to 85258", when: "If you would rather text", back: "A free, confidential, 24/7 text service for anyone in the UK, including for self-harm." },
        { id: "childline", front: "Childline: 0800 1111", when: "If you are under 19", back: "Free, and the number will not appear on your phone bill." },
        { id: "harmless", front: "Harmless", when: "Self-harm support for all ages", back: "Set up by people who understand self-harm. Supports people who self-harm, and their friends and families." },
        { id: "sis", front: "Self Injury Support", when: "Helpline 0808 800 8088", back: "Confidential, anonymous, non-judgemental support for anyone affected by self-injury." },
        { id: "mind", front: "Mind: 0300 123 3393", when: "On weekdays", back: "Information and support for anyone who self-harms or thinks about self-harm, or their friends and family." },
      ],
    },
    sources: [NHS_HELP, SAM_SH, SAM_CONTACT, SHOUT, HARMLESS_HOME, HARMLESS_PEOPLE, RETHINK_SH, NICE_PUBLIC, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When will a free listening service share what you tell them?",
      options: [{ text: "Only if very worried you are in immediate danger", right: true }, { text: "Always, with your GP" }, { text: "Always, with your family" }],
      why: "These services will only share your information if they are very worried about you or think you are in immediate danger.",
    },
  },
  {
    id: "sh-carers",
    kicker: "Family and friends",
    question: "How can I support someone who self-harms, and look after myself?",
    hook: "Finding out someone you love is hurting themselves is frightening. Staying calm, listening and not judging helps more than having all the answers.",
    short: "The most important thing is to listen without judgement and not be critical. Let them know you are there for them, encourage them to speak to a GP or a free listening service, and let them stay in control of their decisions, while getting them medical attention if needed. Supporting someone can be very hard, so make sure you get support for yourself too.",
    sections: [
      {
        heading: "Your own feelings",
        paragraphs: [
          "Knowing someone you care about is in emotional distress can bring fear, anger, frustration, helplessness and sadness. It is totally normal to feel this way.",
          "Try not to react straight away with anger or blame. Remember that the person you are supporting is in distress, and their actions are not intended to make you suffer.",
        ],
      },
      {
        heading: "Listening without judging",
        paragraphs: [
          "The most important thing is to listen without judgement and to not be critical. Try to understand their emotions and experiences, rather than focusing on the self-harm.",
          "Samaritans suggests giving your full attention, having patience, and using open questions, and says you do not have to fill every silence. You do not need to give advice or solutions: you can simply ask them what help they want.",
          "Help them to see their self-harm as an ordinary problem that needs support and understanding, not as something secret and shameful.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "Let them know you are there for them, tell them about their positive qualities, and ask how they would like to be supported. Encourage them to speak to a GP or a free listening service, and offer to go with them.",
          "Let them be in control of their decisions, but get them medical attention if needed. Consider that any amount of self-harm might be a sign they are feeling extremely distressed.",
        ],
      },
      {
        heading: "What to avoid",
        paragraphs: [
          "Do not try to force them to change, threaten to take away their control, or call them attention-seeking. Do not make them promise not to do it again, or say you will not see them unless they stop.",
          "Do not expect them to stop overnight, because it usually takes time and effort. Try not to be their therapist; you can help most by being their friend, relative or partner.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "Do not feel responsible for their self-harm. Make sure you have someone to talk to as well, so you get the support you need, and take a break if you need one.",
          "If you care for someone with a mental health condition who is 18 or over, you can ask the local authority for a carer's assessment. It is free, and anyone over 18 can ask for one.",
          "Harmless supports friends and family members as well as people who self-harm, and Samaritans is there to listen on 116 123 if supporting someone is affecting you.",
        ],
      },
    ],
    helps: [
      "Listen without judgement, and focus on them rather than on the self-harm.",
      "Let them know you are there for them, and ask how they would like to be supported.",
      "Encourage them to speak to a GP or a free listening service, and offer to go with them.",
      "Avoid forcing change, making them promise to stop, or calling them attention-seeking.",
      "Look after yourself: find someone to talk to, and ask for a carer's assessment if you need support.",
      CRISIS,
    ],
    tryThisWeek: [
      "Listen without judging.",
      "Ask how they want to be supported.",
      "Find someone to talk to yourself.",
    ],
    ask: "Is there support for me as someone caring for a person who self-harms?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        {
          id: "find-out",
          situation: "You find out your partner has been self-harming.",
          options: [{ text: "Stay calm and listen", best: true }, { text: "React with anger" }],
          why: "Reacting strongly with anger, hurt or upset will probably make them feel even worse. Listening without judgement matters most.",
        },
        {
          id: "promise",
          situation: "You want them to promise it will never happen again.",
          options: [{ text: "Ask how you can support them", best: true }, { text: "Make them promise" }],
          why: "Do not make them promise not to do it again. Ask how they would like to be supported.",
        },
        {
          id: "doctor",
          situation: "They are not ready to see a doctor.",
          options: [{ text: "Gently encourage, without pushing", best: true }, { text: "Force them to go" }],
          why: "Discuss possibilities for treatment without being pushy, and let them be in control of their decisions.",
        },
        {
          id: "exhausted",
          situation: "You feel worn out and alone with it all.",
          options: [{ text: "Get support for yourself", best: true }, { text: "Keep going without help" }],
          why: "Make sure you have someone to talk to as well. You can ask for a carer's assessment, and Samaritans listens on 116 123.",
        },
      ],
    },
    sources: [NHS_OTHERS, RCPSYCH_SH, RETHINK_SH, RCPSYCH_YP, HARMLESS_FAMILY, SAM_LISTEN, SAM_YOURSELF, NHS_CARER, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What is the most important thing when someone tells you they self-harm?",
      options: [{ text: "Listen without judgement", right: true }, { text: "Make them promise to stop" }, { text: "Tell them how dangerous it is" }],
      why: "The most important thing is to listen without judgement and to not be critical.",
    },
  },
  {
    id: "sh-recovery",
    kicker: "Recovery",
    question: "Can I stop self-harming, and how long does it take?",
    hook: "Recovery is possible. It usually takes time and effort, but many people do learn to cope and recover.",
    short: "It is possible to stop self-harming. People who have self-harmed for many years can find it difficult to stop, but many people do learn to cope and recover. It usually takes time and effort, and trying different approaches and getting support for the underlying cause can help.",
    sections: [
      {
        heading: "Recovery is possible",
        paragraphs: [
          "People who have self-harmed for many years can find it difficult to stop. But it is important to know that many people do learn to cope and recover.",
          "Samaritans says it is possible to stop self-harming. Harmless, which was set up by people who understand self-harm, says that with the right support and help, life can get better.",
        ],
      },
      {
        heading: "It takes time",
        paragraphs: [
          "Stopping usually takes time and effort, so it is not something to expect overnight. Everybody is different, and what works for someone else may not work for you, so give yourself time.",
          "There is no single approach that works for everyone. Be open to trying new coping strategies and throwing out ideas that do not work, and congratulate yourself for trying them anyway.",
        ],
      },
      {
        heading: "Signs you may be ready",
        paragraphs: [
          "The Royal College of Psychiatrists suggests some questions to ask yourself. Is there someone who knows about your self-harm who you can contact if you get desperate, and a professional who can support you in a crisis?",
          "Have you found at least two safe ways to reduce the feelings that lead you to self-harm? Can you tell yourself, and believe, that you want to stop? If you can say yes to half or more, it might be time to try stopping.",
        ],
      },
      {
        heading: "Help with the cause",
        paragraphs: [
          "With support, it may feel easier to make changes that help reduce or stop self-harm. If you have a condition such as depression, treating it might help you to reduce or stop self-harming.",
          "Emma, who shared her story with Samaritans, found that talking therapy helped her recognise what triggered her. She now manages her emotions with reading, breathing exercises and mindfulness.",
        ],
      },
      {
        heading: "Keep going",
        paragraphs: [
          "Accepting scars can be an important part of recovery, and this can take time. You are likely to start feeling better once you have stopped or reduced how much you self-harm.",
          "These feelings may not last forever. Talking about how you are feeling can help put things into perspective and help you feel more positive about the future.",
          "Review your safety plan regularly and keep it up to date, because the things you find hard and the things you find helpful might change over time.",
        ],
      },
    ],
    helps: [
      "Remember that many people do learn to cope and recover.",
      "Give yourself time, and keep trying different coping strategies until you find what works.",
      "Get support and treatment for the underlying cause, such as depression.",
      "Keep your safety plan up to date, as what helps can change over time.",
      "Talk about how you are feeling, to help put things into perspective.",
      CRISIS,
    ],
    tryThisWeek: [
      "Remind yourself recovery is possible.",
      "Try one new coping strategy.",
      "Review your safety plan.",
    ],
    ask: "What support can help me reduce or stop self-harming, and keep going if things get harder?",
    interactive: {
      kind: "timeline",
      title: "Steps along the way",
      steps: [
        { id: "tell", when: "Step 1", title: "Tell someone", points: ["Someone you can contact if you get desperate.", "A friend, family member or professional."] },
        { id: "support", when: "Step 2", title: "Get support", points: ["A GP, a talking therapy or a charity.", "Help for the underlying cause matters too."] },
        { id: "cope", when: "Step 3", title: "Find safer ways to cope", points: ["At least two safe ways to ease the feelings.", "Keep the ones that work, drop the ones that do not."] },
        { id: "plan", when: "Step 4", title: "Make a safety plan", points: ["Write it when calm, with someone you trust.", "Review it, as what helps can change."] },
        { id: "time", when: "Step 5", title: "Give it time", points: ["It usually takes time and effort.", "Many people do learn to cope and recover."] },
      ],
    },
    sources: [RETHINK_SH, RCPSYCH_SH, RCPSYCH_YP, SAM_EMMA, HARMLESS_PEOPLE, NHS_AVOID, SAM_COPE, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does Rethink say about stopping self-harm?",
      options: [{ text: "Many people do learn to cope and recover", right: true }, { text: "No one is ever able to stop" }, { text: "It always stops overnight" }],
      why: "People who have self-harmed for many years can find it difficult to stop. But it is important to know that many people do learn to cope and recover.",
    },
  },
];
