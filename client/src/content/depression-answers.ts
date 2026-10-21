import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Depression page's pieces (content/library-conditions/cancer-mind-digestion.ts).
// Every sentence was written from wording checked on 21 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS
// (including Every Mind Matters and NHS inform), the Royal College of Psychiatrists, Samaritans, Shout,
// Rethink Mental Illness, the Stroke Association and the government's pages on sick leave and Access to
// Work. Mind's pages could not be read today (the site answered with a bot check), so they are not cited.
// The "urgent" answer follows safe-messaging guidance: no method details, hopeful and practical, and the
// crisis routes exactly as the NHS, Samaritans and Shout give them. Nothing here suggests stopping or
// changing a medicine without the doctor. General information only; it never replaces what a person's
// own GP or mental health team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const emm = (label: string, path: string): LearnSource => ({ label: `NHS Every Mind Matters: ${label}`, url: `https://www.nhs.uk/every-mind-matters/${path}` });
const nhsInform = (label: string, path: string): LearnSource => ({ label: `NHS inform: ${label}`, url: `https://www.nhsinform.scot/illnesses-and-conditions/mental-health/${path}` });
const rcpsych = (label: string, path: string): LearnSource => ({ label: `Royal College of Psychiatrists: ${label}`, url: `https://www.rcpsych.ac.uk/mental-health/${path}` });
const samaritans = (label: string, path: string): LearnSource => ({ label: `Samaritans: ${label}`, url: `https://www.samaritans.org/how-we-can-help/${path}` });
const rethink = (label: string, path: string): LearnSource => ({ label: `Rethink Mental Illness: ${label}`, url: `https://www.rethink.org/advice-and-information/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_OVERVIEW = nhs("Depression in adults: overview", "mental-health/conditions/depression-in-adults/overview/");
const NHS_SYMPTOMS = nhs("Depression in adults: symptoms", "mental-health/conditions/depression-in-adults/symptoms/");
const NHS_CAUSES = nhs("Depression in adults: causes", "mental-health/conditions/depression-in-adults/causes/");
const NHS_DIAGNOSIS = nhs("Depression in adults: diagnosis", "mental-health/conditions/depression-in-adults/diagnosis/");
const NHS_TREATMENT = nhs("Depression in adults: treatment", "mental-health/conditions/depression-in-adults/treatment/");
const NHS_LIVING = nhs("Depression in adults: living with", "mental-health/conditions/depression-in-adults/living-with/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_ANTIDEP = nhs("Antidepressants", "medicines/antidepressants/");
const NHS_SERTRALINE = nhs("Sertraline", "medicines/sertraline/");
const NHS_EXERCISE = nhs("Exercise for depression", "mental-health/self-help/guides-tools-and-activities/exercise-for-depression/");
const NHS_INSOMNIA = nhs("Insomnia", "conditions/insomnia/");
const NHS_SAD = nhs("Seasonal affective disorder (SAD)", "mental-health/conditions/seasonal-affective-disorder-sad/");
const NHS_RETURN_WORK = nhs("Returning to work after mental health issues", "mental-health/advice-for-life-situations-and-events/return-to-work-after-mental-health-issues/");
const NHS_CARER_ASSESSMENT = nhs("Carer's assessments", "social-care-and-support/support-and-benefits-for-carers/carer-assessments/");

const EMM_LOW_MOOD = emm("Low mood and depression", "mental-health-issues/low-mood/");
const EMM_SLEEP = emm("Sleep problems", "mental-health-issues/sleep/");
const EMM_HELPING = emm("Helping others with mental health problems", "supporting-others/helping-others/");
const EMM_URGENT = emm("Urgent support", "urgent-support/");
const EMM_CBT = emm("Self-help CBT techniques", "mental-wellbeing-tips/self-help-cbt-techniques/");

const NHSI_DEPRESSION = nhsInform("Depression", "depression/");
const NHSI_GUIDE = nhsInform("Depression self-help guide", "mental-health-self-help-guides/depression-self-help-guide/");

const RCP_DEPRESSION = rcpsych("Depression in adults", "mental-illnesses-and-mental-health-problems/depression");
const RCP_PHYSICAL = rcpsych("Physical illness and mental health", "mental-illnesses-and-mental-health-problems/physical-illness-and-mental-health");
const RCP_ANTIDEP = rcpsych("Antidepressants", "treatments-and-wellbeing/antidepressants");

const SAM_CONTACT = samaritans("Contact a Samaritan", "contact-samaritan/");
const SAM_SIGNS = samaritans("Signs you may be struggling to cope", "if-youre-having-difficult-time/signs-you-may-be-struggling-cope/");
const SAM_SUPPORTING = samaritans("Supporting someone with suicidal thoughts", "if-youre-worried-about-someone-else/supporting-someone-suicidal-thoughts/");
const SHOUT: LearnSource = { label: "Shout: The UK's free, confidential, 24/7 mental health text service", url: "https://giveusashout.org/" };

const RETHINK_DEPRESSION = rethink("Depression", "about-mental-illness/mental-health-conditions/depression/");
const STROKE_DEPRESSION: LearnSource = { label: "Stroke Association: Depression and anxiety after stroke", url: "https://www.stroke.org.uk/stroke/effects/emotional-and-behavioural/depression-and-anxiety" };

const GOV_SICK_LEAVE = gov("Taking sick leave", "taking-sick-leave");
const GOV_SSP = gov("Statutory Sick Pay (SSP)", "statutory-sick-pay");
const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");

export const depressionAnswers: LearnArticle[] = [
  {
    id: "dep-what-it-is",
    kicker: "Understanding",
    question: "What is depression, and what isn't it?",
    hook: "More than a bad week. Depression is a real illness with real symptoms, and with the right treatment and support most people recover.",
    short: "Depression is more than feeling unhappy or fed up for a few days. When you are depressed, you feel persistently sad for weeks or months, and it gets in the way of work, social life and family life. It is a real illness, not a sign of weakness, and with the right treatment and support most people make a full recovery.",
    sections: [
      {
        heading: "More than feeling low",
        paragraphs: [
          "Depression is more than simply feeling unhappy or fed up for a few days. Most people go through periods of feeling down, but when you're depressed you feel persistently sad for weeks or months.",
          "Everyone has times when they feel fed up or miserable. It is usually for a particular reason, does not interfere too much with daily life and does not usually last longer than a week or two.",
        ],
      },
      {
        heading: "The two-week rule",
        paragraphs: [
          "A low mood should lift after a few days. If it lasts longer than about 2 weeks, it may be a sign of depression.",
          "See a GP if you have symptoms of depression for most of the day, every day, for more than 2 weeks. It is particularly important if your mood affects your work, interests and relationships, or if you have thoughts of suicide or self-harm.",
        ],
      },
      {
        heading: "What it can feel like",
        paragraphs: [
          "You may feel sad, hopeless and lose interest in things you used to enjoy. Many people with depression also have symptoms of anxiety, and there can be physical symptoms too, such as feeling constantly tired, sleeping badly and various aches and pains.",
          "Depression can often come on gradually, so it can be difficult to notice something is wrong. It can sometimes take a friend or family member to suggest something is wrong.",
        ],
      },
      {
        heading: "Not a weakness",
        paragraphs: [
          "Some people think depression is trivial and not a genuine health condition. They're wrong: it is a real illness with real symptoms. Depression is not a sign of weakness or something you can \"snap out of\" by \"pulling yourself together\".",
          "It can happen to the most determined of people. Depression is common, something anyone can experience, and treatable. It affects about 1 in 6 people.",
        ],
      },
      {
        heading: "Grief, and how severe it is",
        paragraphs: [
          "Grief is an entirely natural response to a loss, while depression is an illness. People who are grieving may have symptoms of depression, but they usually improve with time.",
          "Doctors describe depression as less severe (mild) or more severe (moderate or severe), based on your symptoms, how long it lasts and the impact on your daily life. With the right treatment and support, most people with depression can make a full recovery.",
        ],
      },
    ],
    helps: [
      "See a GP if you have symptoms of depression for most of the day, every day, for more than 2 weeks.",
      "Try not to delay: the sooner you see a doctor, the sooner you can be on the way to recovery.",
      "Be as open and honest as you can with the GP about your symptoms and how they are affecting you.",
      "It is particularly important to speak to a GP if you have thoughts of suicide or self-harm.",
      "If you live in England, you can refer yourself for free NHS talking therapies without seeing a GP.",
    ],
    tryThisWeek: [
      "See a GP after two weeks of symptoms.",
      "Be open with the GP.",
      "Look up NHS talking therapies.",
    ],
    ask: "Could what I'm feeling be depression, and how severe is it?",
    interactive: {
      kind: "scenarios",
      title: "Low mood or depression?",
      scenarios: [
        {
          id: "three-weeks",
          situation: "You have felt low most of the day, every day, for three weeks.",
          options: [{ text: "See a GP", best: true }, { text: "Wait for it to pass on its own" }],
          why: "See a GP if you have symptoms of depression for most of the day, every day, for more than 2 weeks.",
        },
        {
          id: "bad-news",
          situation: "You have felt down for a couple of days after some bad news.",
          options: [{ text: "Give it a few days, and talk to someone", best: true }, { text: "Decide it must be depression" }],
          why: "A low mood should lift after a few days. If it lasts longer than about 2 weeks, it may be a sign of depression.",
        },
        {
          id: "pull-together",
          situation: "Someone tells you to pull yourself together.",
          options: [{ text: "Remember it is a real illness", best: true }, { text: "Decide you are just weak" }],
          why: "Depression is not a sign of weakness or something you can \"snap out of\" by \"pulling yourself together\".",
        },
        {
          id: "grief",
          situation: "You are grieving after someone close to you died.",
          options: [{ text: "Allow time; get help if it doesn't ease", best: true }, { text: "Expect grief to vanish in a week" }],
          why: "People who are grieving may have symptoms of depression, but they usually improve with time. For some people, bereavement can lead to depression.",
        },
      ],
    },
    sources: [NHS_OVERVIEW, NHS_SYMPTOMS, NHS_DIAGNOSIS, RCP_DEPRESSION, RETHINK_DEPRESSION, EMM_LOW_MOOD],
    quiz: {
      question: "When does the NHS suggest seeing a GP about low mood?",
      options: [{ text: "After more than 2 weeks, most of the day, every day", right: true }, { text: "After a single bad day" }, { text: "Only after six months" }],
      why: "See a GP if you have symptoms of depression for most of the day, every day, for more than 2 weeks.",
    },
  },
  {
    id: "dep-illness-link",
    kicker: "Understanding",
    question: "Why does depression so often follow a physical illness?",
    hook: "A serious or long-term illness can change work, plans and how you see yourself. Low mood afterwards is understandable, and it still deserves help.",
    short: "People with ongoing physical health problems are two to three times more likely to have depression than people in good physical health. The stress of the illness, its treatment, pain and the things it takes away can all play a part. Your doctors will want to hear about your mental health as well as your physical health.",
    sections: [
      {
        heading: "A common pairing",
        paragraphs: [
          "You may have a higher risk of depression if you have a longstanding or life-threatening illness, such as coronary heart disease, cancer or a condition that causes long-term pain.",
          "People who have ongoing physical health problems are two to three times more likely to have depression than people who have good physical health. Research has shown a link with illnesses such as cancer, diabetes, asthma and high blood pressure.",
        ],
      },
      {
        heading: "How an illness can lead to depression",
        paragraphs: [
          "Having a physical illness can be very stressful, and stress can affect your mental health. Some illnesses also affect the way the brain works: people with an underactive thyroid are more likely to develop depression and anxiety.",
          "Some drug treatments can affect the way your brain works too. For example, steroids have been shown to cause mood changes. Some physical illnesses can cause depression, so it is important to rule out physical causes or side effects from any medicine you are taking.",
        ],
      },
      {
        heading: "The losses that come with it",
        paragraphs: [
          "An illness can mean working less or changing jobs, missing out on things you enjoy, and money worries. It can make you feel out of control of your body and your life, and lonely or cut off from friends and family.",
          "Different causes can often combine. For example, you may feel low after being ill and then go through a bereavement, which brings on depression.",
        ],
      },
      {
        heading: "The hardest times",
        paragraphs: [
          "You are most likely to struggle when you are first told about your illness, after major surgery or unpleasant side effects, if the illness comes back, or if it stops responding to treatment.",
          "After a stroke, around one in three survivors will have some form of depression within the first year. It may not come straight away, and can appear months or even years later.",
        ],
      },
      {
        heading: "It still deserves help",
        paragraphs: [
          "It is normal to think \"of course I feel depressed, I'm ill\", and that there is no point getting help. Feeling this way is understandable, but it does not mean you don't deserve help. Your mental and physical health are linked.",
          "Your doctors will want to hear about your mental health as well as your physical health. NHS talking therapies can help with coping with a long-term health condition, and you can refer yourself without speaking to a GP.",
        ],
      },
    ],
    helps: [
      "Tell your GP or the team treating your physical illness how you are feeling; they can help you get support.",
      "Share your fears and concerns with someone close to you who is a good listener.",
      "Ask whether a physical cause, or a side effect of a medicine, could be adding to how you feel.",
      "If you are already under the care of a mental health team, tell them about a new physical illness.",
      "Look for charities that support people with your illness; you may be able to talk to others living with it.",
      "Try to find the balance between pushing through and getting rest.",
    ],
    tryThisWeek: [
      "Tell your care team how you feel.",
      "Ask if a medicine could affect mood.",
      "Find a charity for your illness.",
    ],
    ask: "Could any of my other medicines or conditions be adding to this?",
    interactive: {
      kind: "risk-check",
      title: "When is it more likely?",
      intro: "Tick any that apply. Some of these can change, and some cannot.",
      items: [
        { id: "before", label: "Struggled with your mental health before", note: "Poor mental health is more likely during a physical illness if you have had mental health problems before.", changeable: false },
        { id: "no-one", label: "No one to talk to about your illness", note: "Sharing how you are feeling can have a positive impact on your mental health on its own.", changeable: true },
        { id: "stresses", label: "Other stresses at the same time", note: "Losing a job, a divorce or a death of a loved one on top of an illness make it more likely.", changeable: false },
        { id: "pain", label: "A lot of pain from your illness", note: "Pain makes poor mental health more likely. CBT has been shown to help people living with pain.", changeable: true },
        { id: "serious", label: "A terminal or life-threatening illness", note: "A life-threatening illness raises the chance of poor mental health. Your team can refer you for support.", changeable: false },
        { id: "self-care", label: "Illness stops you looking after yourself", note: "Support from friends, family or a professional service can help you do things again.", changeable: true },
      ],
    },
    sources: [RCP_PHYSICAL, NHS_CAUSES, STROKE_DEPRESSION, NHS_TALKING, EMM_LOW_MOOD],
    quiz: {
      question: "Who wants to hear about your mood while you are treated for an illness?",
      options: [{ text: "Your doctors and healthcare team", right: true }, { text: "No one; it distracts from treatment" }, { text: "Only a psychiatrist" }],
      why: "Your doctors will want to hear about your mental health as well as your physical health.",
    },
  },
  {
    id: "dep-body",
    kicker: "Symptoms",
    question: "How does depression show up in the body?",
    hook: "Tiredness, broken sleep, no appetite, aches with no clear cause. Sometimes the body shows depression before the mind admits it.",
    short: "Depression has physical symptoms as well as emotional ones. It can bring a lack of energy, disturbed sleep, changes in appetite or weight, constipation, unexplained aches and pains and a low sex drive, and it can make you move or speak more slowly. Some people are only aware of the physical symptoms at first.",
    sections: [
      {
        heading: "Physical symptoms are common",
        paragraphs: [
          "The physical symptoms of depression include moving or speaking more slowly than usual, changes in appetite or weight, constipation, unexplained aches and pains, lack of energy and low sex drive.",
          "Some people may only be aware of physical symptoms. You may think you have a physical illness because you feel very tired or have problems with sleep, but symptoms like these can be the first sign of depression.",
        ],
      },
      {
        heading: "Sleep",
        paragraphs: [
          "Disturbed sleep is common. You might find it difficult to fall asleep at night, or wake up very early in the morning.",
          "Some people can't get to sleep or sleep too much, and wake throughout the night. The low feeling can be worse at a particular time of day, often first thing in the morning.",
        ],
      },
      {
        heading: "Energy and appetite",
        paragraphs: [
          "You may feel exhausted and have no energy. Appetite and weight usually fall, but some people comfort eat more and put on weight.",
          "It's easy to lose weight and run low on vitamins when you are depressed, or to eat too much junk food. Try to eat regularly, even if you do not feel very hungry.",
        ],
      },
      {
        heading: "Aches, restlessness and focus",
        paragraphs: [
          "Depression can bring headaches or an upset stomach, and aches and pains that cannot be explained. You may feel restless, nervous or agitated.",
          "It can be hard to concentrate, make decisions or remember things. Other people may notice you seem quiet and withdrawn, or stop looking after yourself or your home.",
        ],
      },
      {
        heading: "Telling it apart from illness",
        paragraphs: [
          "Tiredness, poor sleep and a lost appetite can also be caused by a physical illness or its treatment, which can make it hard to tell what is normal. Talk to your doctor about how you are feeling; they can help you work out the cause.",
          "There are no physical tests for depression, but a GP may do blood or urine tests to rule out conditions with similar symptoms, such as an underactive thyroid.",
        ],
      },
    ],
    helps: [
      "Describe all your symptoms to the GP, including physical ones, and how they are affecting you.",
      "Try to eat regularly, with plenty of fruit and vegetables, even if you are not very hungry.",
      "Create a sleep routine: go to bed at the same time each night and get up at the same time each morning.",
      "If you are able to, get outside for some exercise, even if it's only a short walk.",
      "Avoid alcohol: it can make you feel better for a couple of hours, but makes depression worse in the long run.",
    ],
    tryThisWeek: [
      "List your physical symptoms for the GP.",
      "Eat at regular times.",
      "Keep the same bedtime.",
    ],
    ask: "Could my tiredness, sleep or aches be part of depression, or something else?",
    interactive: {
      kind: "signs",
      title: "Body signs to mention",
      intro: "Tick any you have noticed. The ones you tick make a list to take to your GP.",
      signs: ["Lack of energy", "Difficulty falling asleep", "Waking very early", "Sleeping too much", "Less appetite, or eating more", "Losing or gaining weight", "Constipation", "Unexplained aches and pains", "Headaches or an upset stomach", "Moving or speaking more slowly", "Low sex drive", "Trouble concentrating"],
      after: "Tell your GP. These can be signs of depression, and a GP may do tests to rule out conditions with similar symptoms.",
      copyHeading: "Physical symptoms I have noticed",
    },
    sources: [NHS_SYMPTOMS, RCP_DEPRESSION, NHSI_DEPRESSION, RCP_PHYSICAL, NHS_DIAGNOSIS],
    quiz: {
      question: "Can depression first show up as physical symptoms?",
      options: [{ text: "Yes, such as tiredness or poor sleep", right: true }, { text: "No, it only affects mood" }, { text: "Only in older people" }],
      why: "You may think you have a physical illness because you feel very tired or have problems with sleep, but symptoms like these can be the first sign of depression.",
    },
  },
  {
    id: "dep-urgent",
    kicker: "Urgent help",
    question: "What can I do if I'm thinking about ending my life?",
    hook: "You do not have to struggle with these feelings alone. Help is there right now, at any hour, and telling someone is the first step.",
    short: "If you're feeling like you want to end your life, it's important to tell someone. If your life is in danger or you cannot keep yourself safe, call 999 or go to A&E. For urgent help that is not an emergency, call 111 and select the mental health option. You can call Samaritans free on 116 123 at any time, or text SHOUT to 85258.",
    sections: [
      {
        heading: "Tell someone",
        paragraphs: [
          "If you're feeling like you want to end your life, it's important to tell someone. Help and support is available right now if you need it. You do not have to struggle with difficult feelings alone.",
          "Suicidal feelings are not permanent. The sooner you tell someone how you're feeling, the sooner you can get help.",
        ],
      },
      {
        heading: "If your life is in danger",
        paragraphs: [
          "If you have seriously harmed yourself, or you feel that you may be about to harm yourself, call 999 for an ambulance or go straight to A&E. Or ask someone else to call 999 or take you to A&E.",
          "Call 999 or go to A&E now if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one. You will not be wasting anyone's time.",
        ],
      },
      {
        heading: "Urgent help that is not an emergency",
        paragraphs: [
          "Get help from 111 online, or call 111 and select the mental health option. 111 will tell you the right place to get help, and you may be able to speak to a trained mental health professional over the phone.",
          "You can also call a GP and ask for an emergency appointment, or contact your mental health crisis team if you have one. If you don't know who they are, NHS 111 can help.",
        ],
      },
      {
        heading: "Someone to talk to, any hour",
        paragraphs: [
          "Samaritans are there to listen at any time of the day or night. Call free on 116 123 from any phone, and the number won't come up on your phone bill. They won't judge you or tell you what to do.",
          "If you do not want to talk to someone over the phone, text SHOUT to 85258. This text line is open 24 hours a day, every day.",
          "You don't have to feel suicidal to get in touch with Samaritans. Only 1 person in 5 who calls says they feel suicidal.",
        ],
      },
      {
        heading: "Getting through right now",
        paragraphs: [
          "Try not to think about the future: just focus on getting through today. Get yourself to a safe place, like a friend's house, and be around other people.",
          "Stay away from drugs and alcohol, and do something you usually enjoy, such as spending time with a pet. Let family or friends know what's going on for you; they may be able to offer support and help keep you safe.",
          "It may help to make a safety plan to use if you need it. Remind yourself that many other people have had depression and have got better, and you are entitled to the help you need to feel better.",
        ],
      },
    ],
    helps: [
      "If your life is in danger or you cannot keep yourself safe, call 999 or go to A&E.",
      "For urgent help that is not an emergency, call 111 and select the mental health option, or use 111 online.",
      "Call Samaritans free on 116 123, at any time of the day or night.",
      "If you would rather not talk on the phone, text SHOUT to 85258.",
      "Call a GP and ask for an emergency appointment, or contact your crisis team if you have one.",
      "Tell someone you trust how you are feeling.",
    ],
    tryThisWeek: [
      "Call 111 for urgent help.",
      "Call Samaritans on 116 123.",
      "Tell someone you trust.",
    ],
    ask: "Who do I contact if things get worse quickly?",
    interactive: {
      kind: "flip-cards",
      title: "Who to contact",
      intro: "Turn each card to see when to use it. All of these are free.",
      cards: [
        { id: "999", front: "999 or A&E", when: "If your life is in danger", back: "Call 999 or go to A&E if you cannot keep yourself safe. You will not be wasting anyone's time." },
        { id: "111", front: "NHS 111", when: "Urgent help, not an emergency", back: "Call 111 and select the mental health option, or use 111 online. They will tell you where to get help." },
        { id: "samaritans", front: "Samaritans: 116 123", when: "Any time, day or night", back: "Free from any phone. Trained volunteers listen, and will not judge you or tell you what to do." },
        { id: "shout", front: "Shout: text SHOUT to 85258", when: "If you would rather not talk", back: "A free, confidential text line, open 24 hours a day, every day." },
        { id: "gp", front: "A GP", when: "For an emergency appointment", back: "Call and ask for an emergency appointment. A GP can also help you get mental health care." },
        { id: "crisis", front: "Your crisis team", when: "If you already have one", back: "Contact your mental health crisis team. If you don't know who they are, NHS 111 can help." },
      ],
    },
    sources: [NHS_SUICIDAL, NHS_URGENT, SAM_CONTACT, EMM_URGENT, SHOUT, STROKE_DEPRESSION, SAM_SIGNS, RCP_DEPRESSION],
    quiz: {
      question: "What number can you call free, at any time, to talk to Samaritans?",
      options: [{ text: "116 123", right: true }, { text: "There is no free number" }, { text: "Only a daytime line" }],
      why: "Call free on 116 123 from any phone, and the number won't come up on your phone bill.",
    },
  },
  {
    id: "dep-talking",
    kicker: "Treatment",
    question: "What are talking therapies, and how do I get them?",
    hook: "CBT, counselling and the others are free on the NHS, and you can refer yourself without seeing a GP.",
    short: "Talking therapies involve talking to a trained professional about your thoughts, feelings and behaviours. For depression they include guided self-help, cognitive behavioural therapy (CBT), counselling and interpersonal therapy. A GP can refer you, or you can refer yourself directly to an NHS talking therapies service.",
    sections: [
      {
        heading: "What they are",
        paragraphs: [
          "Talking therapies involve talking to a trained professional about your thoughts, feelings and behaviours. They can be done in person, through a video or phone call, or as an online course, in a group or one-to-one.",
          "Talking therapies, such as CBT, may be used for mild depression. For moderate to severe depression, a combination of talking therapy and antidepressants is often recommended.",
        ],
      },
      {
        heading: "CBT",
        paragraphs: [
          "In CBT, a therapist helps you change how you think and act. It concentrates mostly on the present, and teaches you how to overcome negative thoughts, for example being able to challenge hopeless feelings.",
          "You'll usually be asked to practise what you've learned between sessions, and it's important to do this for CBT to work. For depression, a course usually lasts between 8 and 16 sessions, once a week or once every 2 weeks.",
        ],
      },
      {
        heading: "Guided self-help and the others",
        paragraphs: [
          "In guided self-help, you work through a workbook or online course with support from a therapist, usually over 6 to 8 sessions. You may be offered it first, and another type of therapy if your symptoms do not improve.",
          "Counselling helps you think about the problems in your life so you can find new ways of dealing with them. Interpersonal therapy focuses on your relationships, and behavioural couples therapy may help if relationship problems are part of the picture.",
        ],
      },
      {
        heading: "How to get them",
        paragraphs: [
          "A GP can refer you, or you can refer yourself directly to NHS talking therapies for anxiety and depression. You need to be registered with a GP and aged 18 or over, or 16 or over in some areas.",
          "You do not need a diagnosed mental health condition. Talking therapies are sometimes free through your employer, university or local charities, or you can pay privately with a therapist registered with an accredited professional organisation.",
        ],
      },
      {
        heading: "Waiting, and afterwards",
        paragraphs: [
          "Waiting times can be several weeks or months. A GP can tell you how long you might need to wait, and what to do if your condition gets worse or you need support during this time.",
          "After your course of CBT has finished, it's important to keep using the skills you've learned. If you are still having problems, speak to a GP about more sessions or a different treatment.",
        ],
      },
    ],
    helps: [
      "Refer yourself to an NHS talking therapies service, or ask a GP to refer you.",
      "Practise what you learn between sessions, and record your progress if you are asked to.",
      "Ask the GP how long the wait might be, and what to do if things get worse while you wait.",
      "If you pay privately, choose a therapist registered with an organisation accredited by the Professional Standards Authority.",
      "Keep using the skills you have learned after the course ends.",
    ],
    tryThisWeek: [
      "Refer yourself to talking therapies.",
      "Ask how long the wait is.",
      "Practise between sessions.",
    ],
    ask: "Can I be referred for talking therapy, and how long is the wait?",
    interactive: {
      kind: "flip-cards",
      title: "Talking therapies, card by card",
      intro: "Turn each card to see what each therapy involves.",
      cards: [
        { id: "guided", front: "Guided self-help", when: "Often offered first", back: "A workbook or online course with a therapist's support, based on CBT, usually over 6 to 8 sessions." },
        { id: "cbt", front: "CBT", when: "A main treatment for depression", back: "A therapist helps you change how you think and act. You practise what you learn between sessions." },
        { id: "counselling", front: "Counselling", when: "Coping with a current crisis", back: "You talk about your problems, and the counsellor helps you find your own solutions." },
        { id: "ipt", front: "Interpersonal therapy", when: "When relationships are hard", back: "Focuses on problems in your relationships, such as communication or coping with bereavement." },
        { id: "activation", front: "Behavioural activation", when: "If you have withdrawn from things", back: "Looks at the links between what you do and your mood, and helps you make practical changes." },
        { id: "couples", front: "Behavioural couples therapy", when: "If your relationship plays a part", back: "You and your partner see a therapist, usually 15 to 20 sessions over 5 to 6 months." },
      ],
    },
    sources: [NHS_TALKING, NHS_CBT, NHS_TREATMENT, RCP_DEPRESSION, NHS_OVERVIEW],
    quiz: {
      question: "Do you need a GP referral for NHS talking therapies for depression?",
      options: [{ text: "No, you can refer yourself", right: true }, { text: "Yes, always" }, { text: "Only after a hospital stay" }],
      why: "A GP can refer you, or you can refer yourself directly to NHS talking therapies for anxiety and depression.",
    },
  },
  {
    id: "dep-antidepressants",
    kicker: "Medicines",
    question: "What should I expect in the first weeks on an antidepressant?",
    hook: "They take time: usually 1 to 2 weeks to start working, and up to 8 weeks to work fully. Early side effects often ease.",
    short: "Antidepressants usually take 1 to 2 weeks to start having an effect and can take up to 8 weeks to work fully. Many side effects ease after a couple of weeks. You will be seen regularly at first, and you will usually keep taking them for at least 6 months after you feel better, then stop gradually with your doctor.",
    sections: [
      {
        heading: "What they do",
        paragraphs: [
          "Antidepressants are medicines that treat the symptoms of depression. It's thought they work by affecting chemicals in the brain called neurotransmitters, such as serotonin and noradrenaline, which are linked to mood and emotion.",
          "They are usually prescribed for depression that's moderate or severe. SSRIs, such as sertraline, will usually be the first type prescribed, because the side effects are generally easier to manage.",
        ],
      },
      {
        heading: "The first two weeks",
        paragraphs: [
          "Many side effects ease after a couple of weeks as your body gets used to the medicine. Common ones include feeling sick, headaches, a dry mouth, difficulty sleeping, and feeling agitated, shaky or anxious.",
          "Feeling agitated, shaky or anxious is often why people stop taking an antidepressant, especially if they have not been warned about it. It usually decreases a couple of weeks after starting.",
          "When you first start, you will be seen by a doctor every 1 to 2 weeks, to check how the medicine is working and how you are finding any side effects.",
        ],
      },
      {
        heading: "When it starts to help",
        paragraphs: [
          "Antidepressants usually take 1 to 2 weeks to start having an effect, and can take up to 8 weeks to work fully. It's important to continue, as it can take several weeks until your symptoms start to improve.",
          "You may need to try 2 or more treatments before you find one that works for you. If you're finding side effects hard to manage, or you do not feel it is helping, talk to your doctor.",
        ],
      },
      {
        heading: "Thoughts to report straight away",
        paragraphs: [
          "It's not common, but some people may have suicidal thoughts or an urge to self-harm when they start an antidepressant. Speak to your doctor straight away if this happens. People aged 24 or under, or who have had these thoughts before, may be most at risk.",
          "Call 999 or go to A&E immediately if you are in danger or do not feel you can keep yourself safe.",
        ],
      },
      {
        heading: "Keeping going, and stopping safely",
        paragraphs: [
          "You'll usually take them for at least 6 months after you feel better. If you stop taking them too soon, your depression could return.",
          "Antidepressants are not addictive, but you may get withdrawal symptoms if you stop them suddenly. Do not stop taking an antidepressant suddenly or without talking to your doctor first; they will help you agree a plan to reduce the dose gradually.",
        ],
      },
    ],
    helps: [
      "Take your antidepressant as prescribed, even if you start to feel better.",
      "Talk to your doctor if side effects are hard to manage, or you do not feel it is helping.",
      "Do not stop taking it suddenly or without talking to your doctor first.",
      "If you miss a dose, take your next dose as usual; do not take 2 doses to make up for it.",
      "Check the leaflet, and ask a pharmacist or doctor, before taking alcohol, other medicines or remedies such as St John's wort.",
      "If it makes you dizzy or drowsy, do not drive or use machinery until this passes.",
    ],
    tryThisWeek: [
      "Take it as prescribed.",
      "Tell your doctor about side effects.",
      "Never double up a missed dose.",
    ],
    ask: "Would an antidepressant help me, and what should I expect at first?",
    interactive: {
      kind: "timeline",
      title: "The first months on an antidepressant",
      steps: [
        { id: "start", when: "Starting", title: "Often a low dose", points: ["With sertraline, your doctor may start low and increase it after a week or more.", "Check the leaflet that comes with your medicine."] },
        { id: "weeks-1-2", when: "Weeks 1 to 2", title: "Side effects, then easing", points: ["Many side effects ease after a couple of weeks.", "You will see a doctor every 1 to 2 weeks."] },
        { id: "weeks-to-8", when: "Up to week 8", title: "Starting to help", points: ["It usually starts to have an effect in 1 to 2 weeks.", "It can take up to 8 weeks to work fully."] },
        { id: "any-time", when: "At any point", title: "Thoughts to report", points: ["Tell your doctor straight away about suicidal thoughts.", "If you cannot keep yourself safe, call 999 or go to A&E."] },
        { id: "six-months", when: "After you feel better", title: "Keep going", points: ["You'll usually carry on for at least 6 months.", "Stopping too soon can bring depression back."] },
        { id: "stopping", when: "When it is time to stop", title: "Slowly, with your doctor", points: ["Your doctor will help you reduce the dose gradually.", "Withdrawal symptoms often stop within a few weeks."] },
      ],
    },
    sources: [NHS_ANTIDEP, NHS_TREATMENT, NHS_SERTRALINE, RCP_ANTIDEP, NHS_LIVING],
    quiz: {
      question: "How long can an antidepressant take to work fully?",
      options: [{ text: "Up to 8 weeks", right: true }, { text: "One day" }, { text: "It works from the first tablet" }],
      why: "Antidepressants usually take 1 to 2 weeks to start having an effect, and can take up to 8 weeks to work fully.",
    },
  },
  {
    id: "dep-activity",
    kicker: "Self-help",
    question: "How can small steps and activities lift my mood?",
    hook: "Depression makes you stop doing things, and doing less can make you feel worse. Small, planned activities can start to turn that around.",
    short: "When you are low, you often stop doing things you used to enjoy, and that can keep depression going. Behavioural activation looks at the links between what you do and how you feel, and helps you make practical changes that may improve your mood. Starting with easier activities and planning a few days ahead can help.",
    sections: [
      {
        heading: "The cycle that keeps it going",
        paragraphs: [
          "The things you think, feel and do when you're depressed can keep depression going. You might end up staying in bed all day, leaving you feeling more tired and like you haven't achieved anything.",
          "Your thoughts, feelings and actions are connected. If you think no one wants to spend time with you, you may stop replying to friends, and feeling more alone can make the thought feel even more true.",
        ],
      },
      {
        heading: "What behavioural activation is",
        paragraphs: [
          "Behavioural activation therapy focuses on the links between your activities and your mood, rather than on thoughts and feelings. It can be useful if depression has led you to withdraw from social activities.",
          "It helps you make practical changes to your behaviour that may improve your mood. If it is recommended, you'll usually have 12 to 16 individual sessions with a trained practitioner.",
          "It encourages you to plan activities and do constructive things that you may usually avoid doing.",
        ],
      },
      {
        heading: "Start small",
        paragraphs: [
          "Low mood can stop us doing important or enjoyable activities. Try listing these things and doing some each day. Start with easier ones and, as you progress, your mood should improve.",
          "Doing little things every day to be more active, like taking the stairs instead of a lift, can lift your mood. Remember to pace yourself: you don't have to do everything at once.",
        ],
      },
      {
        heading: "Plan a few days ahead",
        paragraphs: [
          "Using a planner to plan your time in advance can help you do more of what you enjoy, or have enjoyed in the past. NHS inform suggests trying a plan for 3 days, and it's okay for plans to change.",
          "You could include one or two things you used to enjoy, something with other people, some exercise, the things you have to do, like meals and medical appointments, and a regular time to get up and go to bed.",
        ],
      },
      {
        heading: "Be kind to yourself",
        paragraphs: [
          "Self-care means focusing on yourself and your own happiness for a little while, and doing things that make you feel good, like going for a walk, taking a hot bath or watching your favourite film.",
          "Try to set yourself more realistic goals, and be kinder to yourself. Taking regular time for something you really enjoy, like a game, reading or another hobby, can help.",
        ],
      },
    ],
    helps: [
      "List important or enjoyable activities and do some each day, starting with the easier ones.",
      "Plan 3 days ahead, with something you used to enjoy and something with other people.",
      "Keep a regular time to get up and go to bed.",
      "Pace yourself: you don't have to do everything at once.",
      "If depression has made you withdraw from things, ask about behavioural activation.",
      "Try to keep seeing friends and family, rather than dealing with problems on your own.",
    ],
    tryThisWeek: [
      "Do one easy activity each day.",
      "Plan the next 3 days.",
      "Keep regular sleep times.",
    ],
    ask: "Could behavioural activation or guided self-help help me, and how do I get it?",
    interactive: {
      kind: "timeline",
      title: "Building a 3-day plan",
      steps: [
        { id: "list", when: "Step 1", title: "Make a list", points: ["List important or enjoyable things you have stopped doing.", "Put the easier ones first."] },
        { id: "enjoy", when: "Step 2", title: "Add something you enjoyed", points: ["One or two things you used to enjoy.", "Something with other people, like an activity with friends."] },
        { id: "move", when: "Step 3", title: "Add some movement", points: ["Exercise you have enjoyed in the past, like a class.", "Or little things, like taking the stairs."] },
        { id: "musts", when: "Step 4", title: "Add what you have to do", points: ["Looking after yourself, meals and medical appointments.", "A regular time to get up and go to bed."] },
        { id: "gently", when: "Step 5", title: "Go gently", points: ["You don't have to fill in every space.", "It's okay for plans to change."] },
      ],
    },
    sources: [NHS_TREATMENT, NHSI_GUIDE, EMM_LOW_MOOD, RCP_DEPRESSION, EMM_CBT, NHS_CAUSES],
    quiz: {
      question: "What does behavioural activation focus on?",
      options: [{ text: "The links between what you do and your mood", right: true }, { text: "Childhood memories" }, { text: "Resting until you feel better" }],
      why: "Behavioural activation therapy focuses on the links between your activities and your mood, rather than on thoughts and feelings.",
    },
  },
  {
    id: "dep-exercise-sleep",
    kicker: "Self-help",
    question: "How can exercise, daylight and sleep help with depression?",
    hook: "Moving a little more, getting outside in daylight and a steady sleep routine are some of the simplest things that help mood.",
    short: "There's evidence that exercise can help depression, and it's one of the main treatments for mild depression. Getting outside in daylight, keeping regular sleep times and avoiding caffeine, alcohol and screens before bed can help too. Start gradually: even a brisk 10-minute walk can clear your mind.",
    sections: [
      {
        heading: "Exercise as treatment",
        paragraphs: [
          "There's evidence that exercise can help depression, and it's one of the main treatments for mild depression. Being active can lift your mood, reduce stress and anxiety, release endorphins and improve self-esteem.",
          "Group exercise is recommended as an option for less severe depression, usually more than 1 session a week with a trained practitioner, for 10 weeks. Lots of GP surgeries prescribe exercise, sometimes free or at a reduced cost.",
        ],
      },
      {
        heading: "Start where you are",
        paragraphs: [
          "Adults should do 150 minutes of moderate activity every week. If you have not exercised for a while, start gradually and build up; even a brisk 10-minute walk can clear your mind and help you relax.",
          "Any type of exercise is useful, as long as it suits you. Choose something you enjoy, or it may be hard to keep going. If you are concerned about the effects of exercise on your health, ask a GP about exercise on prescription.",
        ],
      },
      {
        heading: "Daylight",
        paragraphs: [
          "If you are able to, get outside for some exercise, even if it's only a short walk. It can help you sleep better, and focus on other things rather than painful thoughts.",
          "Seasonal affective disorder is a type of depression that usually happens in winter, and is thought to be linked to reduced daylight. The NHS suggests getting as much natural daylight as you can, by going outside in the daytime every day.",
          "Light boxes are not usually available on the NHS, but many people find they help. Speak to a GP before trying light therapy.",
        ],
      },
      {
        heading: "Sleep and mood",
        paragraphs: [
          "Low moods can make us feel tired, and tiredness can also have a bad impact on our mood. Stress, anxiety and depression are among the most common causes of insomnia.",
          "Most healthy adults need around 7 to 9 hours of sleep a night. Try to go to bed and wake up at around the same time each day, and give yourself time to relax before bed.",
        ],
      },
      {
        heading: "A routine that helps",
        paragraphs: [
          "Do not smoke or drink alcohol, tea or coffee for at least 6 hours before going to bed, and avoid exercise in the 4 hours before bed. Avoid screens right before bed, and keep your bedroom dark and quiet.",
          "If you can't sleep, get out of bed and do something calming. If changing your sleeping habits has not helped, or you've had trouble sleeping for months, see a GP.",
        ],
      },
    ],
    helps: [
      "Start gradually, with something you enjoy, and build up towards 150 minutes a week.",
      "Ask a GP about exercise on prescription or a group exercise class.",
      "Get as much natural daylight as you can: try to go outside in the daytime every day.",
      "Go to bed and get up at the same times every day.",
      "Avoid caffeine and alcohol for 6 hours before bed, and exercise for 4 hours before bed.",
      "See a GP if changing your habits has not helped, or sleep problems have gone on for months.",
    ],
    tryThisWeek: [
      "Start gradually with exercise you enjoy.",
      "Go outside in daylight every day.",
      "Keep the same sleep times.",
    ],
    ask: "Could exercise on prescription or a group exercise class help my depression?",
    interactive: {
      kind: "timeline",
      title: "A day for mood and sleep",
      steps: [
        { id: "wake", when: "Morning", title: "Up at the same time", points: ["Wake up and get out of bed at the same time every day.", "Get outside in the daylight if you can."] },
        { id: "active", when: "Morning or early afternoon", title: "Be active", points: ["A walk, or something you enjoy.", "Even a brisk 10-minute walk can clear your mind."] },
        { id: "six", when: "6 hours before bed", title: "Last tea or coffee", points: ["No tea, coffee, alcohol or smoking from now.", "Try a warm milky drink or herbal tea instead."] },
        { id: "four", when: "4 hours before bed", title: "No more exercise", points: ["Avoid exercise from now.", "Do not eat a big meal late at night."] },
        { id: "hour", when: "An hour before bed", title: "Relax", points: ["Take a bath or read a book.", "Put your phone and screens away."] },
        { id: "bed", when: "Bedtime", title: "Only when sleepy", points: ["Keep the bedroom dark and quiet.", "If you can't sleep, get up and do something calming."] },
      ],
    },
    sources: [NHS_EXERCISE, NHS_TREATMENT, NHS_LIVING, NHS_SAD, NHS_INSOMNIA, EMM_SLEEP, RCP_DEPRESSION, EMM_LOW_MOOD],
    quiz: {
      question: "How much moderate activity a week should adults aim for?",
      options: [{ text: "150 minutes", right: true }, { text: "10 minutes" }, { text: "None while depressed" }],
      why: "Adults should do 150 minutes of moderate activity every week.",
    },
  },
  {
    id: "dep-telling-people",
    kicker: "Living with it",
    question: "How do I tell someone I'm depressed?",
    hook: "Saying it out loud can feel hard, but it often brings support and relief. Start with one person you trust.",
    short: "Sharing a problem with someone else can give you support and an insight into your own depression. Start with someone who has been supportive before and is a good listener. If talking feels too hard, writing down how you feel can help, and your GP and Samaritans are there too.",
    sections: [
      {
        heading: "Why it helps",
        paragraphs: [
          "Sharing a problem with someone else or with a group can give you support and an insight into your own depression. Often, sharing how you are feeling can have a positive impact on your mental health on its own.",
          "If you've had some bad news or a major upset, try not to bottle things up. It can help to tell someone close to you how you feel.",
        ],
      },
      {
        heading: "Choosing who to tell",
        paragraphs: [
          "Speak to someone who has been supportive in the past and is a good listener. Let family or friends know what's going on for you; they may be able to offer support.",
          "You might not want to share how you feel, to avoid worrying or upsetting people. Or you might want to, but feel they won't understand.",
        ],
      },
      {
        heading: "If they don't get it at first",
        paragraphs: [
          "Sometimes it can take a few goes to get other people to understand how you feel. Be persistent and don't give up: you can get the right help.",
          "If you are starting antidepressants, it may help to tell your friends or family. They can then support you if you get side effects.",
        ],
      },
      {
        heading: "If talking feels too hard",
        paragraphs: [
          "If you don't feel comfortable discussing your mental health, writing about how you feel, or expressing your emotions through poetry or art, are other ways to help your mood.",
          "Whatever you're going through, Samaritans will listen, free, at any time, on 116 123. They won't judge you or tell you what to do.",
        ],
      },
      {
        heading: "Your GP and your employer",
        paragraphs: [
          "Anything you discuss with a GP is confidential. That rule is only broken if there's a significant risk of harm to you or others, and telling a family member or carer would reduce that risk.",
          "At work, you do not usually have to answer health questions before you're offered a job. If you are going back after time off, you can talk to your employer or occupational health adviser about support such as flexible hours.",
        ],
      },
    ],
    helps: [
      "Tell someone close to you how you feel, rather than bottling things up.",
      "Choose someone who has been supportive in the past and is a good listener.",
      "If you can't talk to anyone, try writing down how you feel.",
      "Join a support group to share your experiences with others in a similar situation.",
      "Be as open and honest as you can with your GP; what you say is confidential.",
      "If you are starting antidepressants, think about telling your friends or family.",
    ],
    tryThisWeek: [
      "Tell one person how you feel.",
      "Write down how you feel.",
      "Look for a support group.",
    ],
    ask: "Is there a support group near me, and how do I join?",
    interactive: {
      kind: "scenarios",
      title: "Moments to share",
      scenarios: [
        {
          id: "partner",
          situation: "You don't want to worry your partner, so you keep it to yourself.",
          options: [{ text: "Tell them how you feel", best: true }, { text: "Keep it bottled up" }],
          why: "If you've had some bad news or a major upset, try not to bottle things up. It can help to tell someone close to you how you feel.",
        },
        {
          id: "friend",
          situation: "You told a friend, but they didn't seem to understand.",
          options: [{ text: "Try again, or try someone else", best: true }, { text: "Give up on telling anyone" }],
          why: "Sometimes it can take a few goes to get other people to understand how you feel. Be persistent and don't give up.",
        },
        {
          id: "no-words",
          situation: "Saying it out loud feels impossible right now.",
          options: [{ text: "Write down how you feel", best: true }, { text: "Say nothing to anyone" }],
          why: "Writing about how you feel, or expressing your emotions through poetry or art, are other ways to help your mood.",
        },
        {
          id: "night",
          situation: "It's the middle of the night and there's no one to talk to.",
          options: [{ text: "Call Samaritans on 116 123", best: true }, { text: "Wait it out alone" }],
          why: "Whatever you're going through, Samaritans will listen, free, at any time, on 116 123.",
        },
      ],
    },
    sources: [NHS_LIVING, RCP_DEPRESSION, RCP_PHYSICAL, NHS_SUICIDAL, NHS_DIAGNOSIS, RCP_ANTIDEP, NHS_RETURN_WORK, SAM_CONTACT, NHSI_DEPRESSION],
    quiz: {
      question: "Is what you tell your GP about your mood confidential?",
      options: [{ text: "Yes, unless there's a significant risk of harm", right: true }, { text: "No, it goes to your employer" }, { text: "Only if you ask in writing" }],
      why: "Anything you discuss with a GP is confidential. That rule is only broken if there's a significant risk of harm to you or others.",
    },
  },
  {
    id: "dep-work",
    kicker: "Work",
    question: "What about work, sick notes and going back?",
    hook: "Time off can be part of recovery. Fit notes, reasonable adjustments and Access to Work can help you back at a pace that works.",
    short: "If depression is affecting your ability to do your job, you may need time off to recover. If you are off sick for more than 7 days in a row, you'll need a fit note from a healthcare professional such as your GP. When you go back, you can ask about changes like flexible or shorter hours: employers must make reasonable adjustments, and Access to Work offers mental health support.",
    sections: [
      {
        heading: "Taking time off",
        paragraphs: [
          "If your depression is caused by working too much, or it's affecting your ability to do your job, you may need time off to recover. It's important to avoid too much stress, and this includes work-related stress.",
          "You can get Statutory Sick Pay from your employer for up to 28 weeks if you're too ill to work. You can get more if your company has its own sick pay scheme.",
        ],
      },
      {
        heading: "Fit notes",
        paragraphs: [
          "If you have been ill for more than 7 days in a row, including weekends and bank holidays, you need to give your employer a fit note, sometimes called a sick note. For 7 days or less, you can self-certify.",
          "A fit note can come from a GP or hospital doctor, a registered nurse, an occupational therapist, a pharmacist or a physiotherapist. It says you are either not fit for work, or may be fit for work with changes such as different hours or tasks.",
        ],
      },
      {
        heading: "Planning your return",
        paragraphs: [
          "If your job is still open for you, consider talking to a GP before going back. Then you can arrange a meeting with your employer or occupational health adviser, and discuss anything that concerns you.",
          "You might ask about returning part-time, starting later in the day if you're sleepy from medicine in the mornings, support from a colleague, or a place you can go for a break when needed.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "By law, employers must make reasonable adjustments for workers with disabilities or long-term physical or mental conditions. This can include people diagnosed with a mental illness, and could mean shorter hours or a more flexible way of working.",
          "It's illegal for employers to discriminate against people with any kind of disability. Mental health issues count if they have a substantial and long-term effect on your ability to do normal daily activities.",
        ],
      },
      {
        heading: "Extra help",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition. Its mental health support might include a tailored plan to help you get or stay in work, and one-to-one sessions with a mental health professional.",
          "Going back to work after a period of mental illness can be a positive experience if you have the right support. Work can give you a sense of identity and purpose, new friendships and better financial security.",
        ],
      },
    ],
    helps: [
      "Talk to a GP before going back, then meet your employer or occupational health adviser.",
      "Ask about returning part-time, flexible hours, or starting later if medicine makes you sleepy in the mornings.",
      "Get a fit note if you have been off sick for more than 7 days in a row.",
      "Ask your employer about reasonable adjustments.",
      "If you need more help than reasonable adjustments, apply for Access to Work mental health support.",
      "If you cannot work because of depression, check which benefits you may be eligible for.",
    ],
    tryThisWeek: [
      "Talk to your GP about going back.",
      "Ask about flexible hours.",
      "Look into Access to Work.",
    ],
    ask: "Could my fit note suggest changes, like shorter hours, to help me go back?",
    interactive: {
      kind: "flip-cards",
      title: "Work support, card by card",
      intro: "Turn each card to see when it applies and what it does.",
      cards: [
        { id: "fit-note", front: "Fit note", when: "Off sick more than 7 days in a row", back: "From a GP, nurse, pharmacist and others. Says not fit, or may be fit with changes." },
        { id: "self-cert", front: "Self-certification", when: "Off sick 7 days or less", back: "No fit note needed. Your employer may ask you to confirm you were off sick." },
        { id: "ssp", front: "Statutory Sick Pay", when: "Too ill to work", back: "Paid by your employer for up to 28 weeks. A company sick pay scheme may pay more." },
        { id: "meeting", front: "Return-to-work meeting", when: "Before you go back", back: "Meet your employer or occupational health adviser to talk through anything that concerns you." },
        { id: "adjustments", front: "Reasonable adjustments", when: "Once you are back", back: "Changes your employer must make, such as shorter hours or working more flexibly." },
        { id: "atw", front: "Access to Work", when: "If you need more help", back: "Mental health support, including a tailored plan and one-to-one sessions with a professional." },
      ],
    },
    sources: [NHS_LIVING, GOV_SICK_LEAVE, GOV_SSP, NHS_RETURN_WORK, GOV_ATW, RCP_PHYSICAL],
    quiz: {
      question: "When do you need to give your employer a fit note?",
      options: [{ text: "After more than 7 days off sick in a row", right: true }, { text: "After one day off" }, { text: "Never for mental health" }],
      why: "If you have been ill for more than 7 days in a row, including weekends and bank holidays, you need to give your employer a fit note, sometimes called a sick note.",
    },
  },
  {
    id: "dep-relapse",
    kicker: "Staying well",
    question: "How can I stay well, and spot a dip early?",
    hook: "Depression can come back, so knowing your early signs and acting on them is part of recovery, not a sign of failure.",
    short: "If this is your first time with depression, there's roughly a 50:50 chance of becoming depressed again, so it helps to know how to get help. Keeping up the treatment and skills that worked, looking after your general wellbeing and acting early on warning signs can all help you stay well.",
    sections: [
      {
        heading: "It can come back",
        paragraphs: [
          "If this is the first time you are experiencing depression, you have a roughly 50:50 chance of becoming depressed again, so it is important to know how to get help if you need it.",
          "Sometimes depression comes back, even if you have done everything you can to stay well. Some people need to take antidepressants for a long time to stay well, and this does not mean they have failed.",
        ],
      },
      {
        heading: "Keep up what works",
        paragraphs: [
          "Take your antidepressants as prescribed, even if you start to feel better. If you stop taking them too soon, your depression could return.",
          "If you have had episodes of depression in the past, you may need to take antidepressants long term. You'll be reviewed at least twice a year to see whether you need to keep taking them.",
          "After a course of CBT, it's important to keep using the skills you've learned. Your therapist will usually help you plan how you'll do this.",
        ],
      },
      {
        heading: "Look after your wellbeing",
        paragraphs: [
          "Things that can make you less likely to become depressed again include finding someone you can talk to, keeping physically active, drinking less alcohol, eating well and finding ways to solve the practical problems that brought the depression on.",
          "It is worth thinking about what might have contributed to you becoming unwell, such as money worries, loneliness or losing a job. Some stresses can't be avoided, but there might be things you can do to make it less likely you'll become unwell again.",
        ],
      },
      {
        heading: "Spotting a dip early",
        paragraphs: [
          "Depression can often come on gradually, so it can be difficult to notice something is wrong. Many people try to cope without realising they're unwell, and it can sometimes take a friend or family member to suggest something is wrong.",
          "Early signs can include sleeping more or less than usual, losing interest in things you enjoy, avoiding people, being more irritable than usual and finding it hard to concentrate.",
        ],
      },
      {
        heading: "Acting quickly",
        paragraphs: [
          "Get help if you have had depression before and think you are becoming unwell again, if you feel worse than you have before, or if your feelings are affecting your relationships, work or daily life.",
          "If depression comes back, you might start antidepressants again after talking to your GP, change your antidepressant, or try a talking therapy. Some withdrawal symptoms of coming off antidepressants can feel like your condition is coming back, and they often stop within a few weeks, so speak to your doctor.",
        ],
      },
    ],
    helps: [
      "Keep taking antidepressants as prescribed, even when you feel better.",
      "Keep using the skills you learned in therapy.",
      "Keep active, eat well, drink less alcohol and keep someone you can talk to.",
      "Make your own list of the strategies that help you most.",
      "Get help early if you think you are becoming unwell again.",
      "Do not stop an antidepressant suddenly; talk to your doctor about when and how to stop.",
    ],
    tryThisWeek: [
      "Keep taking medicines as prescribed.",
      "List the strategies that help you.",
      "Get help early if a dip starts.",
    ],
    ask: "What are my early warning signs, and who do I contact if they appear?",
    interactive: {
      kind: "signs",
      title: "Early signs to watch for",
      intro: "Tick any you notice. If they last, or you think you are becoming unwell again, speak to your GP.",
      signs: ["Sleeping more or less than usual", "Losing interest in things you enjoy", "Avoiding friends and family", "Being more irritable than usual", "Finding it hard to concentrate", "Feeling exhausted, with no energy", "Changes in appetite", "Drinking more to cope", "Feeling hopeless"],
      after: "Tell your GP early. If you are in danger or do not feel you can keep yourself safe, call 999 or go to A&E.",
      copyHeading: "Early signs I have noticed",
    },
    sources: [RCP_DEPRESSION, RCP_ANTIDEP, NHS_TREATMENT, NHS_LIVING, NHS_CBT, RCP_PHYSICAL, NHS_SYMPTOMS, NHS_ANTIDEP],
    quiz: {
      question: "After a first episode of depression, how likely is another?",
      options: [{ text: "Roughly a 50:50 chance", right: true }, { text: "It never comes back" }, { text: "It always comes back" }],
      why: "If this is the first time you are experiencing depression, you have a roughly 50:50 chance of becoming depressed again.",
    },
  },
  {
    id: "dep-carers",
    kicker: "Family and friends",
    question: "How can I support someone with depression?",
    hook: "Listening, spending time together and small practical help matter more than having the answers. Look after yourself too.",
    short: "You can help someone with depression by listening, spending time with them, reassuring them that they will get better and helping with practical things. Encourage them to get help from a GP or NHS talking therapies, take any talk of not wanting to live seriously, and look after your own wellbeing as well.",
    sections: [
      {
        heading: "Listen and be there",
        paragraphs: [
          "Listening can be harder than it sounds, and you may have to hear the same thing over and over again. It's usually best not to offer advice unless it's asked for.",
          "Spend time with them. Carry on as usual, as behaving differently can make someone feel more isolated, and ask open questions that start with how, what, where or when.",
        ],
      },
      {
        heading: "Reassure, and help practically",
        paragraphs: [
          "Someone who is depressed will find it hard to believe that they can ever get better. You can reassure them that they will, but you may have to repeat this over and over again.",
          "Little acts of kindness, like doing the shopping, cooking for them or going to appointments with them, can help. A chat may come more naturally if you are doing something together first.",
        ],
      },
      {
        heading: "Encouraging help",
        paragraphs: [
          "Encourage them to see their doctor, take their medicine or talk to their therapist. They could contact a GP, get help from NHS 111, or refer themselves for NHS talking therapies.",
          "Do not force someone to talk to you or get help, or go to a GP on their behalf. Gently explore their reasons and listen without judgement, as this might help them work out what to do.",
        ],
      },
      {
        heading: "Taking it seriously",
        paragraphs: [
          "If they are getting worse or start to talk of not wanting to live, take them seriously and make sure they tell their doctor. Asking someone if they are feeling suicidal will not put the idea into their head, and can protect them.",
          "Warning signs can include talking about death or suicide, making final arrangements such as giving away possessions or saying goodbye to friends, and a sudden lifting of mood.",
          "If you feel there's an immediate danger, call 999 or take them to A&E, and stay with them or have someone else stay with them. You can also call Samaritans on 116 123 for advice if you're worried about someone.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "It can be emotionally draining to support someone who is depressed, so look after your own mental health and wellbeing. Family life can become strained, and talking to others in a similar situation might help.",
          "If you care for someone regularly, you can ask your local council's adult social services for a free carer's assessment, to see what might make your life easier.",
        ],
      },
    ],
    helps: [
      "Listen, and avoid offering advice unless it's asked for.",
      "Offer practical help, like doing the shopping or going to appointments together.",
      "Encourage them to contact a GP or refer themselves for NHS talking therapies.",
      "Take any talk of not wanting to live seriously, and make sure they tell their doctor.",
      "If there's an immediate danger, call 999 or take them to A&E.",
      "Ask your council for a carer's assessment, and find a support group for yourself.",
    ],
    tryThisWeek: [
      "Listen without giving advice.",
      "Offer one piece of practical help.",
      "Ask about a carer's assessment.",
    ],
    ask: "How can I best support them, and what help is there for me as a carer?",
    interactive: {
      kind: "scenarios",
      title: "Supporting moments",
      scenarios: [
        {
          id: "same-worries",
          situation: "They tell you the same worries again.",
          options: [{ text: "Listen again, without advice", best: true }, { text: "Tell them what to do" }],
          why: "Listening can be harder than it sounds. It's usually best not to offer advice unless it's asked for.",
        },
        {
          id: "no-gp",
          situation: "They won't see a GP, and you're worried.",
          options: [{ text: "Gently explore why, and listen", best: true }, { text: "Book the appointment for them" }],
          why: "Do not force someone to talk to you or get help, or go to a GP on their behalf. Gently explore their reasons and listen without judgement.",
        },
        {
          id: "no-point",
          situation: "They say they can't see the point in living.",
          options: [{ text: "Take it seriously and ask about it", best: true }, { text: "Change the subject" }],
          why: "Asking someone if they are feeling suicidal will not put the idea into their head, and can protect them.",
        },
        {
          id: "worn-out",
          situation: "You feel worn out from supporting them.",
          options: [{ text: "Make time for yourself, and get support", best: true }, { text: "Keep going without a break" }],
          why: "It can be emotionally draining to support someone who is depressed, so look after your own mental health and wellbeing.",
        },
      ],
    },
    sources: [RCP_DEPRESSION, EMM_HELPING, NHS_LIVING, SAM_SUPPORTING, NHS_SUICIDAL, NHS_CARER_ASSESSMENT],
    quiz: {
      question: "Does asking someone if they feel suicidal put the idea into their head?",
      options: [{ text: "No, and it can protect them", right: true }, { text: "Yes, so it is best never to ask" }, { text: "Only if you ask twice" }],
      why: "Asking someone if they are feeling suicidal will not put the idea into their head, and can protect them.",
    },
  },
];
