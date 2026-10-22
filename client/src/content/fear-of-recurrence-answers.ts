import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Fear of cancer coming back page's pieces
// (content/library-conditions/cancer-more-2.ts, `fearOfRecurrence`). Every sentence was written from
// wording checked on 22 October 2026 on the pages listed under each answer's `sources`; nothing is added
// that those pages do not say. Most of it comes from Macmillan Cancer Support, Cancer Research UK,
// Breast Cancer Now and the NHS (NHS Talking Therapies, mindfulness, breathing and urgent mental health
// help), with Samaritans for the crisis line. No survival or recurrence figures are given, and nothing is
// written as a prediction for the reader. The answers about worry follow safe-messaging guidance and give
// the crisis routes exactly as the NHS and Samaritans state them. General information only; it never
// replaces what a person's own cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/coping/mental-health-cancer/${path}` });
const bcn = (label: string, path: string): LearnSource => ({ label: `Breast Cancer Now: ${label}`, url: `https://breastcancernow.org/${path}` });

const MAC_WORRIES = mac("Coping with worries about cancer coming back", "after-treatment/coping-with-worries-about-cancer-coming-back");
const MAC_UNCERTAINTY = mac("Uncertainty and cancer", "impacts-of-cancer/uncertainty");
const MAC_ANXIETY = mac("Anxiety and cancer", "impacts-of-cancer/anxiety");
const MAC_FOLLOWUP = mac("Follow-up care after cancer treatment", "after-treatment/follow-up-care-after-treatment");
const MAC_FINISHING = mac("Finishing cancer treatment", "after-treatment/finishing-treatment");
const MAC_RECOVER = mac("Beginning to recover", "after-treatment/beginning-to-recover");
const MAC_LIFESTYLE = mac("Lifestyle and well-being after treatment", "after-treatment/lifestyle-and-wellbeing-after-treatment");
const MAC_ACTIVE = mac("Being physically active after treatment", "after-treatment/being-physically-active");
const MAC_LATE = mac("Late effects of cancer treatment", "after-treatment/late-effects-of-treatment");
const MAC_TALKING = mac("Talking, counselling and support groups", "treatment/coping-with-treatment/talking-therapies");
const MAC_MENTAL = mac("Cancer and mental health support", "treatment/coping-with-treatment/cancer-and-mental-health-support");
const MAC_BUDDIES = mac("Get support from Macmillan Buddies", "get-help/emotional-help/macmillan-buddies");
const MAC_COMMUNITY = mac("Macmillan Online Community", "get-help/emotional-help/online-community");
const MAC_RELATIONSHIPS = mac("Cancer and relationships", "diagnosis/talking-about-cancer/cancer-diagnosis-and-your-relationships");
const MAC_SUPPORTING = mac("How to support someone with cancer", "supporting-someone/emotional-support-for-family-and-friends/how-to-support-someone-with-cancer");

const CRUK_DURING = cruk("Mental health during and after cancer treatment", "during-and-after-cancer-treatment");
const CRUK_MANAGE = cruk("Managing your emotions", "how-cancer-make-you-feel/managing-your-emotions");
const CRUK_FEAR = cruk("Fear, anxiety, panic and cancer", "how-cancer-make-you-feel/fear-anxiety-panic/fear-anxiety-panic-cancer");
const CRUK_COPE = cruk("How to cope with fear, anxiety and panic", "how-cancer-make-you-feel/fear-anxiety-panic/how-cope-fear-anxiety-panic");
const CRUK_SPECIAL = cruk("Coping with special occasions", "special-occasions");
const CRUK_COUNS_TYPES = cruk("Types of counselling", "counselling/types-of-counselling");
const CRUK_COUNS_NEED = cruk("How do I know if I need counselling?", "counselling/how-do-i-know-if-i-need-counselling");
const CRUK_CARING = cruk("Mental health when caring for someone with cancer", "when-caring-someone-cancer");
const CRUK_SYMPTOMS: LearnSource = { label: "Cancer Research UK: Signs and symptoms of cancer", url: "https://www.cancerresearchuk.org/about-cancer/spot-cancer-early/cancer-symptoms" };

const BCN_RECUR = bcn("Breast cancer recurrence symptoms", "about-breast-cancer/diagnosis/breast-cancer-recurrence/breast-cancer-recurrence-symptoms");
const BCN_COPING = bcn("Coping with breast cancer emotionally", "about-breast-cancer/life-after-treatment/coping-with-breast-cancer-emotionally");
const BCN_STRESS = bcn("Stress and anxiety after a breast cancer diagnosis", "about-breast-cancer/life-after-treatment/coping-with-breast-cancer-emotionally/stress-and-anxiety-after-a-breast-cancer-diagnosis");
const BCN_MOVING = bcn("Moving Forward", "all-services/moving-forward");
const BCN_SOMEONE = bcn("Someone Like Me", "all-services/someone-like-me");

const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");
const NHS_MINDFUL = nhs("Mindfulness", "mental-health/self-help/tips-and-support/mindfulness/");
const NHS_BREATHING = nhs("Breathing exercises for stress", "mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/");
const NHS_EXERCISE = nhs("Exercise for depression", "mental-health/self-help/guides-tools-and-activities/exercise-for-depression/");
const NHS_WELLBEING = nhs("5 steps to mental wellbeing", "mental-health/self-help/guides-tools-and-activities/five-steps-to-mental-wellbeing/");
const NHS_EVERYMIND: LearnSource = { label: "NHS Every Mind Matters: Managing anxiety", url: "https://www.nhs.uk/every-mind-matters/mental-health-issues/anxiety/" };

const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const fearOfRecurrenceAnswers: LearnArticle[] = [
  {
    id: "fcr-what-it-is",
    kicker: "Understanding",
    question: "Why can't I stop worrying that the cancer will come back?",
    hook: "Almost everyone who finishes treatment wonders whether it worked. The worry is common, it comes and goes, and it often eases with time.",
    short: "Worrying about cancer coming back is very common after treatment, and many people struggle with the uncertainty. Doctors may not use the word cured, because some cancers do come back, and that can make the worry hard to put down. These feelings often get better with time, and help is there if they become overwhelming.",
    sections: [
      {
        heading: "A very common feeling",
        paragraphs: [
          "Worrying about the cancer coming back is common after treatment. Many people struggle to cope with feelings of uncertainty.",
          "You might feel relieved when you finish cancer treatment. But you may also worry whether treatment has worked and what might happen in the future.",
          "Most people who have been through cancer treatment live with some worry and uncertainty. This does not mean they are not coping with life after treatment.",
        ],
      },
      {
        heading: "Why doctors may not say cured",
        paragraphs: [
          "Sometimes the aim of treatment is to cure the cancer. But doctors may not use the word cure, because some cancers do come back.",
          "Even if your cancer has been cured by your treatment, your doctor may not be able to be sure about that for some years. You may never be told you are cured.",
          "It is not usually possible for doctors to say for certain that your cancer has been cured. Remember, they will not hide any information they have from you.",
        ],
      },
      {
        heading: "Why it can feel stronger after treatment",
        paragraphs: [
          "Seeing a healthcare professional regularly can be reassuring. But once treatment has finished, you might see them less often, and this might increase your worries about your cancer.",
          "You might also have more time and space now to reflect on your experience, because you are no longer in survival mode. It is not unusual for others to think you're OK once treatment has finished.",
        ],
      },
      {
        heading: "It comes and goes",
        paragraphs: [
          "Feeling anxious is a natural reaction when you have or have had cancer. It may come and go depending on what is happening at the time.",
          "Everyone copes with this in a different way. Some people can put it behind them more easily than others, while others find themselves thinking about it again and again.",
        ],
      },
      {
        heading: "It often eases",
        paragraphs: [
          "It can be hard to deal with these feelings, but they often get better with time. For many people, anxiety will gradually get less over time.",
          "Your worries may never go away completely, and at times they may feel overwhelming. It is important to talk to someone if you feel like this. It is still possible to live a full life with the right help and support.",
        ],
      },
    ],
    helps: [
      "Remember that feelings of worry and uncertainty after treatment are normal.",
      "Focus on what you can control right now, such as talking about your feelings and getting support.",
      "Ask your cancer team about symptoms to look out for, as knowing more can help you manage your worries.",
      "Speak to your specialist nurse or cancer team if you struggle with worries about the cancer coming back.",
      "Call the Macmillan Support Line free on 0808 808 00 00 if you would like to talk.",
    ],
    tryThisWeek: [
      "Remind yourself the worry is normal.",
      "Focus on one thing you can control.",
      "Ask which symptoms to look out for.",
    ],
    ask: "What follow-up will I have, and who can I talk to if the worry about the cancer coming back gets hard to manage?",
    interactive: {
      kind: "flip-cards",
      title: "Worries many people share",
      intro: "Turn a card to see what the cancer charities say about each worry.",
      cards: [
        { id: "cured", front: "No one has said I'm cured", when: "After treatment ends", back: "Doctors may not use the word cure, because some cancers do come back. They will not hide any information they have from you." },
        { id: "still", front: "I still worry, months later", when: "Life after treatment", back: "Most people who have been through treatment live with some worry. This does not mean they are not coping." },
        { id: "fewer", front: "It got worse after treatment", when: "Fewer appointments", back: "Once treatment has finished, you might see your team less often, and this might increase your worries." },
        { id: "others", front: "Everyone thinks I'm fine", when: "Family, friends and work", back: "It is not unusual for others to think you're OK once treatment has finished." },
        { id: "forever", front: "Will it ever go away?", when: "Looking ahead", back: "These feelings often get better with time. It is still possible to live a full life with the right help and support." },
      ],
    },
    sources: [MAC_WORRIES, MAC_UNCERTAINTY, CRUK_MANAGE, CRUK_FEAR, CRUK_DURING, MAC_ANXIETY],
    quiz: {
      question: "Why may doctors not use the word cure?",
      options: [{ text: "Because some cancers do come back", right: true }, { text: "Because treatment never works" }, { text: "Because they are hiding information" }],
      why: "Doctors may not use the word cure, because some cancers do come back.",
    },
  },
  {
    id: "fcr-triggers",
    kicker: "Triggers",
    question: "Why does the worry flare up at certain times?",
    hook: "A hospital test, a news story, a new ache or a big family occasion can all bring the fear back. Knowing your triggers helps.",
    short: "Certain things can trigger worry about cancer coming back, such as going to the hospital for a test, waiting for results or hearing about cancer in the news. New aches and pains, special occasions and seeing your team less often can set it off too. Knowing what your triggers are is one of the things that can help.",
    sections: [
      {
        heading: "Common triggers",
        paragraphs: [
          "Certain things may trigger these feelings, such as going to the hospital for a test or hearing something about cancer in the news.",
          "You might feel anxious just before treatment, after treatment, when you go to the hospital, or before a check-up and while waiting for results.",
          "People with cancer said that waiting for the results of tests, or for upcoming appointments, could affect their mental health.",
        ],
      },
      {
        heading: "Aches, pains and new symptoms",
        paragraphs: [
          "When treatment has finished, it is common to worry that every symptom you have is linked to cancer. You will also get the same aches and pains as most other people, which can make it hard to know what you need to pay attention to.",
          "Some late effects of treatment may be similar to symptoms you had when you were diagnosed. It can be frightening to have symptoms after treatment ends, and you may worry that the cancer has come back.",
        ],
      },
      {
        heading: "Special occasions and big events",
        paragraphs: [
          "Religious holidays and other big events are often an emotional time. If you have cancer, they can be a reminder that you aren't as healthy as you once were or would like to be.",
          "Some people need time to think about what they have been through and what may happen in the future. There is no right or wrong way to feel, and you might feel very differently once the event is over.",
        ],
      },
      {
        heading: "Less contact, and others moving on",
        paragraphs: [
          "Once treatment has finished, you might see your healthcare team less often, and this might increase your worries about your cancer. At first, you might also miss your contact with your doctors and nurses.",
          "It is not unusual for others to think you're OK once treatment has finished. If you look well, people around you can forget that you have been through a very demanding experience.",
        ],
      },
      {
        heading: "Knowing your triggers",
        paragraphs: [
          "Knowing what your triggers are is one of the ways to manage worry and uncertainty. Keeping a diary or journal can help you recognise the things that trigger your anxiety.",
          "Anxiety can make you start avoiding things or people that trigger it. But avoiding situations might actually make anxiety worse, and slowly facing up to a situation might help.",
        ],
      },
    ],
    helps: [
      "Keep a diary or journal to help you recognise what triggers your anxiety.",
      "Ask your cancer team about possible late effects of treatment and their symptoms.",
      "Before a bank holiday, find out who to contact if you have a problem.",
      "If you have tests before a holiday, check with your doctor when you will get your results.",
      "Talk through how you feel with someone close.",
    ],
    tryThisWeek: [
      "Note what sets the worry off.",
      "Ask about late effects.",
      "Check who to call over holidays.",
    ],
    ask: "Which late effects of my treatment might feel like the cancer coming back, and how will I know the difference?",
    interactive: {
      kind: "risk-check",
      title: "What sets your worry off?",
      intro: "Tick any that bring the worry back for you. Each has something that can help.",
      items: [
        { id: "test", label: "A hospital test or check-up", note: "Relaxation exercises such as deep breathing before and during a stressful situation can help.", changeable: true },
        { id: "results", label: "Waiting for results", note: "Waiting for results is often very difficult. Knowing when to expect them might make waiting easier.", changeable: true },
        { id: "news", label: "Hearing about cancer in the news", note: "Hearing something about cancer in the news can trigger these feelings. A diary can help you spot it.", changeable: true },
        { id: "aches", label: "A new ache or pain", note: "Ask your cancer team which symptoms to look out for. You will also get the same aches as most people.", changeable: true },
        { id: "occasions", label: "Holidays and big events", note: "Talking through how you feel with someone close can help.", changeable: true },
        { id: "contact", label: "Seeing my team less often", note: "You do not have to wait for your follow-up appointment to contact your cancer team.", changeable: true },
      ],
    },
    sources: [MAC_WORRIES, CRUK_COPE, CRUK_DURING, MAC_LATE, CRUK_SPECIAL, CRUK_MANAGE, MAC_ANXIETY, NHS_EVERYMIND],
    quiz: {
      question: "What does Macmillan say may trigger worry about cancer coming back?",
      options: [{ text: "Going to the hospital for a test", right: true }, { text: "Eating a healthy meal" }, { text: "Going for a short walk" }],
      why: "Certain things may trigger these feelings, such as going to the hospital for a test or hearing something about cancer in the news.",
    },
  },
  {
    id: "fcr-signs-to-report",
    kicker: "Symptoms",
    question: "Which symptoms should I report, and who do I tell?",
    hook: "Being aware of your body matters, but checking all the time can feed the fear. Knowing what to report, and who to call, helps with both.",
    short: "Ask your cancer team which symptoms to look out for, and tell them about anything new, or like the symptoms you had when you were diagnosed. You do not have to wait for your follow-up appointment to get in touch. If you find yourself checking your body all the time, talk to your team, as they can get you support.",
    sections: [
      {
        heading: "Ask what to look out for",
        paragraphs: [
          "Ask your cancer team about any symptoms you should look out for, and about possible late effects of treatment and their symptoms. Knowing more can help you manage any worries you may have.",
          "A treatment summary from your cancer team may list any symptoms to look out for, and contact details for your team. Your primary care team can also help you understand which symptoms to look out for.",
        ],
      },
      {
        heading: "What to report",
        paragraphs: [
          "Tell your cancer team if you have any new symptoms, or symptoms like those you had when you were diagnosed.",
          "Breast Cancer Now's advice is to report any symptoms that are new or unusual for you, don't have an obvious cause, or don't go away.",
          "Always let your cancer doctor or nurse know if the side effects of treatment do not go away.",
        ],
      },
      {
        heading: "General symptoms worth checking",
        paragraphs: [
          "Cancer Research UK lists some general symptoms that are worth speaking to a doctor about. They include unexplained bleeding or bruising, unexplained pain that is getting worse, unexplained weight loss, and an unusual lump or swelling anywhere.",
          "Most of the time these symptoms will be caused by something less serious than cancer. But it is still important to get checked out, and you're never wasting a doctor's time.",
        ],
      },
      {
        heading: "Who to contact",
        paragraphs: [
          "You do not have to wait until your follow-up appointment to contact your cancer team. Make sure you have their contact numbers so you can get in touch with them if you need to.",
          "If your symptoms are most likely to be from your treatment, your cancer team can reassure you. They can arrange to meet you if needed, and you may need tests to check for other causes.",
          "If you have been fully discharged by your cancer team, you can contact your GP about any concerns. Breast Cancer Now advises making sure your GP knows about your previous cancer, particularly if you were diagnosed some time ago.",
        ],
      },
      {
        heading: "Aware, not always checking",
        paragraphs: [
          "It is important to be aware of changes in your body. But constantly checking for symptoms or changes can make you feel anxious.",
          "You may do this if you are finding it hard to cope with uncertainty about the cancer coming back. If you find yourself doing this, talk to someone from your cancer team or your primary care team. They can get you the support you need.",
        ],
      },
    ],
    helps: [
      "Ask your cancer team which symptoms you should look out for.",
      "Keep your cancer team's contact details in your phone or somewhere safe.",
      "Report symptoms that are new or unusual, have no obvious cause, or don't go away.",
      "Contact your team between appointments; you do not have to wait for your follow-up.",
      "If you have been discharged, contact your GP about any concerns.",
      "If you find yourself constantly checking, talk to your cancer or primary care team.",
    ],
    tryThisWeek: [
      "Ask which symptoms to watch for.",
      "Save your team's contact details.",
      "Report anything new that won't go away.",
    ],
    ask: "Which symptoms should I look out for after my treatment, and who do I contact if I notice one?",
    interactive: {
      kind: "signs",
      title: "Changes to tell your team about",
      intro: "Tick any that apply to you. Your cancer team can tell you which symptoms matter most for your cancer.",
      signs: ["A new symptom", "A symptom like I had at diagnosis", "A side effect that has not gone away", "Something that has no obvious cause", "Unexplained bleeding or bruising", "Unexplained pain that is getting worse", "Unexplained weight loss", "An unusual lump or swelling"],
      after: "You do not have to wait for your follow-up appointment. Contact your cancer team, or your GP if you have been discharged.",
      copyHeading: "Symptoms to tell my team about",
    },
    sources: [MAC_WORRIES, MAC_FINISHING, MAC_FOLLOWUP, BCN_RECUR, MAC_LATE, CRUK_SYMPTOMS],
    quiz: {
      question: "Do you have to wait for your follow-up appointment to report a symptom?",
      options: [{ text: "No, you can contact your team before then", right: true }, { text: "Yes, always wait for the appointment" }, { text: "Only if it has lasted a year" }],
      why: "You do not have to wait until your follow-up appointment to contact your cancer team.",
    },
  },
  {
    id: "fcr-when-help",
    kicker: "Getting help",
    question: "How do I know when the worry needs more help?",
    hook: "Some worry is normal. When it starts to take over your days, help is there, and asking early is a strength, not a weakness.",
    short: "Worry can become a problem when it interferes with your day-to-day life, your motivation or your treatment. If anxiety is affecting your daily life, talk to your GP, cancer doctor or specialist nurse, and you can ask for support at any time. If you ever feel you cannot keep yourself safe, call 999 or go to A&E, or call Samaritans free on 116 123.",
    sections: [
      {
        heading: "When worry gets in the way",
        paragraphs: [
          "There is no right or wrong way to feel. But mental health symptoms can become a problem when they interfere with your normal day-to-day activities, your motivation, or how well you cope with treatment.",
          "If anxiety is affecting your daily life, you may need extra help and support. You can talk to your GP, cancer doctor or specialist nurse.",
        ],
      },
      {
        heading: "Signs of anxiety",
        paragraphs: [
          "Symptoms of anxiety include racing thoughts, finding it hard to concentrate, feeling irritable, jumpy or restless, sleep problems, changes in appetite and a constant feeling of dread or panic.",
          "If anxiety becomes a long term problem, you may constantly feel that something bad is about to happen. You may also feel unable to stop thinking about your worries over and over.",
          "Physical symptoms can include breathing quickly, feeling faint, dizzy or shaky, a dry mouth and a tummy ache. If you cannot tell if shortness of breath is from anxiety, or you are worried about any other symptoms, see a GP.",
        ],
      },
      {
        heading: "Asking early is not weakness",
        paragraphs: [
          "You can ask for mental health support at any time. You don't have to wait until you feel really bad to ask for help.",
          "Seeing a counsellor is not a sign of weakness. It takes a lot of courage to seek help, and it shows that you're taking control.",
          "Some people with anxiety also have depression. Speaking to your healthcare team is the best way to get the help you need.",
        ],
      },
      {
        heading: "Where to start",
        paragraphs: [
          "If anxiety is affecting your daily life, you can contact NHS 111 or talk to a GP. If you live in England, you can refer yourself for free NHS talking therapies without seeing a GP.",
          "You can call the Macmillan Support Line free on 0808 808 00 00. The Cancer Research UK information nurses are on freephone 0808 800 4040, Monday to Friday, 9am to 5pm.",
        ],
      },
      {
        heading: "If you are struggling right now",
        paragraphs: [
          "If you need urgent help for your mental health, call 111 and select the mental health option, or ask for an urgent GP appointment.",
          "You can call Samaritans free on 116 123, any time, day or night. If you do not want to talk to someone over the phone, you can text SHOUT to 85258, 24 hours a day, every day.",
          "Call 999 or go to A&E if you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Talk to your GP, cancer doctor or specialist nurse if anxiety is affecting your daily life.",
      "Ask for mental health support early; you don't have to wait until you feel really bad.",
      "If you live in England, refer yourself for free NHS talking therapies.",
      "For urgent help, call 111 and select the mental health option.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "If you do not feel you can keep yourself safe, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Talk to your GP or nurse.",
      "Ask for support early.",
      "Look up NHS talking therapies.",
    ],
    ask: "My worry about the cancer coming back is affecting my daily life. Can you refer me for support?",
    interactive: {
      kind: "signs",
      title: "Signs worry needs more help",
      intro: "Tick any you have most of the time. If anxiety is affecting your daily life, talk to your GP, cancer doctor or specialist nurse.",
      signs: ["Racing thoughts", "Finding it hard to concentrate", "Feeling irritable, jumpy or restless", "Sleep problems", "Changes in appetite", "A constant feeling of dread or panic", "Going over my worries again and again", "Worry stops my day-to-day activities"],
      after: "If you do not feel you can keep yourself safe, call 999 or go to A&E. Samaritans is free on 116 123, any time, day or night.",
      copyHeading: "How worry has been affecting me",
    },
    sources: [CRUK_DURING, MAC_ANXIETY, CRUK_FEAR, NHS_EVERYMIND, CRUK_COUNS_NEED, NHS_URGENT, NHS_SUICIDAL, SAMARITANS],
    quiz: {
      question: "When can you ask for mental health support?",
      options: [{ text: "At any time, before you feel really bad", right: true }, { text: "Only once you cannot cope at all" }, { text: "Only during treatment" }],
      why: "You can ask for mental health support at any time. You don't have to wait until you feel really bad to ask for help.",
    },
  },
  {
    id: "fcr-coping",
    kicker: "Coping",
    question: "What actually helps me manage the worry?",
    hook: "You cannot control whether the cancer comes back. You can control a lot about today, and that is where the charities suggest putting your energy.",
    short: "Try not to worry about things that may never happen, and focus on what you can control and do now. Reliable information, a set daily worry time, writing worries down, a simple routine and slow breathing all help some people. There are no right or wrong ways to cope, so find what works for you.",
    sections: [
      {
        heading: "Focus on what you can control",
        paragraphs: [
          "You can manage worry and uncertainty in different ways. Try not to worry about things that may never happen. Instead, focusing on what you can control and do now can help.",
          "This could include getting involved in your recovery, talking about your feelings and getting support, and finding ways of managing anxiety and stress. Doing activities you enjoyed before treatment, or starting new ones, can help too.",
        ],
      },
      {
        heading: "Get the right information",
        paragraphs: [
          "Learning about the cancer and its treatment can make you feel more in control. Some people want a lot of information, while others prefer to leave the details to their doctor, and it is okay to do what is best for you.",
          "Some information online can be wrong or misleading. If you are not sure whether something you have read is reliable, check with your nurse or doctor.",
          "If you want to know more about the chances of the cancer coming back, talk to your specialist nurse or cancer doctor. Statistics are based on large numbers of people, so they cannot predict what will happen to you as an individual.",
        ],
      },
      {
        heading: "Make time for worries",
        paragraphs: [
          "If anxiety or worry is taking over your day, try setting a daily worry time to go through your concerns. Doing this at a set time every day can help you to focus on other things.",
          "Some people find it helps to write down how they are feeling. Writing down any worries before you go to bed can help you forget about them until the next day.",
        ],
      },
      {
        heading: "One day at a time",
        paragraphs: [
          "It can help to take things one day at a time and not look too far ahead. Having a routine can sometimes help, such as getting up and dressed every day and planning things you enjoy.",
          "Set small goals for yourself and build them up slowly. Feeling better takes time and happens gradually.",
        ],
      },
      {
        heading: "Calming the body",
        paragraphs: [
          "Focusing on your breathing can help. Breathe in slowly and deeply through your nose and slowly out through your mouth.",
          "Moving, especially outdoors, can help, and even a short walk can help with anxiety. Trying to dull your emotions with alcohol may help for a short time, but it will make you feel worse once the effects wear off.",
        ],
      },
    ],
    helps: [
      "Focus on what you can control and do now.",
      "Check with your nurse or doctor if you are not sure whether information is reliable.",
      "Try setting a daily worry time to go through your concerns.",
      "Write down any worries before you go to bed.",
      "Take things one day at a time, with a simple daily routine.",
      "Breathe slowly and deeply, and try a short walk.",
    ],
    tryThisWeek: [
      "Set a daily worry time.",
      "Write worries down before bed.",
      "Take a short walk.",
    ],
    ask: "Can you recommend reliable information about my type of cancer, so I am not searching online?",
    interactive: {
      kind: "scenarios",
      title: "Moments when the worry bites",
      scenarios: [
        {
          id: "search",
          situation: "It's late and you're reading online about cancer coming back.",
          options: [{ text: "Stop, and ask your nurse or doctor what is reliable", best: true }, { text: "Keep reading until you feel sure" }],
          why: "Some information online can be wrong or misleading. If you are not sure whether something you have read is reliable, check with your nurse or doctor.",
        },
        {
          id: "all-day",
          situation: "The worry keeps coming back all day long.",
          options: [{ text: "Set a daily worry time for it", best: true }, { text: "Try to push it away every time" }],
          why: "Try setting a daily worry time to go through your concerns. Doing this at a set time every day can help you to focus on other things.",
        },
        {
          id: "statistic",
          situation: "You read a statistic that frightens you.",
          options: [{ text: "Talk it through with your cancer doctor or nurse", best: true }, { text: "Assume it describes you" }],
          why: "Statistics are based on large numbers of people, so they cannot predict what will happen to you as an individual.",
        },
        {
          id: "drink",
          situation: "You're tempted to have a few drinks to dull the worry.",
          options: [{ text: "Try slow breathing or a short walk instead", best: true }, { text: "Have the drinks" }],
          why: "Trying to dull your emotions with alcohol may help for a short time, but it will make you feel worse once the effects wear off.",
        },
      ],
    },
    sources: [MAC_WORRIES, MAC_UNCERTAINTY, NHS_EVERYMIND, MAC_MENTAL, MAC_LIFESTYLE, CRUK_MANAGE, MAC_ANXIETY],
    quiz: {
      question: "Why can't statistics tell you what will happen to you?",
      options: [{ text: "They are based on large numbers of people", right: true }, { text: "They are always out of date" }, { text: "Doctors keep the real ones secret" }],
      why: "Statistics are based on large numbers of people, so they cannot predict what will happen to you as an individual.",
    },
  },
  {
    id: "fcr-check-ups",
    kicker: "Check-ups",
    question: "How do I cope with the worry before a check-up or scan?",
    hook: "Feeling anxious before a follow-up scan is so common it has a nickname. A little planning makes the days around it easier.",
    short: "Many people are especially anxious before follow-up scans, and this is a normal and common response. Writing down questions, taking someone with you, using relaxation techniques and knowing when to expect results all help. For many people, the anxiety gradually gets less over time.",
    sections: [
      {
        heading: "Why check-ups can be hard",
        paragraphs: [
          "You might be especially anxious before your follow-up scans. This is a normal and common response, and for many people, anxiety will gradually get less over time.",
          "You may feel worried before an appointment. For some people, going back to hospital can be difficult, but for others it can be a positive reminder that they are returning to everyday life. You may feel reassured after your visit.",
        ],
      },
      {
        heading: "What follow-up is for",
        paragraphs: [
          "After your main treatment ends, your cancer team will usually arrange for you to have check-ups or any scans you may need. The appointment is a chance to talk about any concerns, and it helps your cancer team notice any possible problems early.",
          "In the first year after your treatment, the appointments may happen every few months. As time goes on, the appointments will happen less often.",
          "Some people have supported self-management follow-up instead. You will have direct access to your cancer team if you need it.",
        ],
      },
      {
        heading: "Getting ready",
        paragraphs: [
          "Write down any questions before your appointment, and you can write down the answers to help you remember them. Take someone with you, as they can support you and help you remember what was said.",
          "Tell your cancer team how you are coping with your feelings. They can give you advice or direct you to the right place for support.",
          "Using relaxation exercises such as deep breathing, mindfulness or visualisation before and during a stressful situation can help.",
        ],
      },
      {
        heading: "Waiting for results",
        paragraphs: [
          "Waiting for results is often very difficult emotionally. If you have tests before a bank holiday, check with your doctor when you will get your results, as knowing when to expect them might make waiting easier.",
          "Some people find focusing on taking it one day at a time helps them.",
        ],
      },
      {
        heading: "Family can help",
        paragraphs: [
          "If someone is nervous about check-ups or appointments, family and friends can offer to go with them for support. People close to you may also become anxious before routine scans, and for many people this usually gets less over time.",
        ],
      },
    ],
    helps: [
      "Write down your questions before the appointment.",
      "Take someone with you to support you and help you remember.",
      "Tell your cancer team how you are coping with your feelings.",
      "Try deep breathing, mindfulness or visualisation before and during the appointment.",
      "Check with your doctor when you will get your results.",
      "Speak to your specialist nurse or cancer team if worries about the cancer coming back are hard to manage.",
    ],
    tryThisWeek: [
      "Write your questions down.",
      "Ask someone to come with you.",
      "Ask when your results will come.",
    ],
    ask: "When will I get the results of this scan, and who will tell me?",
    interactive: {
      kind: "timeline",
      title: "Around a check-up",
      steps: [
        { id: "before", when: "The week before", title: "Get ready", points: ["Write down any questions you want to ask.", "Ask someone to come with you for support."] },
        { id: "day", when: "On the day", title: "Breathe and be honest", points: ["Try deep breathing, mindfulness or visualisation before and during.", "Tell your team how you are coping with your feelings."] },
        { id: "waiting", when: "Waiting for results", title: "One day at a time", points: ["Check with your doctor when you will get your results.", "Some people find taking it one day at a time helps."] },
        { id: "after", when: "Afterwards", title: "Over time", points: ["You may feel reassured after your visit.", "For many people, anxiety will gradually get less over time."] },
      ],
    },
    sources: [CRUK_DURING, MAC_FOLLOWUP, CRUK_COPE, CRUK_SPECIAL, MAC_SUPPORTING, CRUK_CARING],
    quiz: {
      question: "What does Cancer Research UK say about anxiety before follow-up scans?",
      options: [{ text: "It is a normal and common response", right: true }, { text: "It means something is wrong" }, { text: "It only happens to a few people" }],
      why: "You might be especially anxious before your follow-up scans. This is a normal and common response.",
    },
  },
  {
    id: "fcr-talking",
    kicker: "Therapy",
    question: "Could talking therapy help with fear of recurrence?",
    hook: "Talking therapies can help with the anxiety that worry about cancer coming back brings, and in England you can refer yourself.",
    short: "Talking therapies, such as counselling and cognitive behavioural therapy, involve talking to a trained therapist and can help with anxiety and depression. In England you can refer yourself to NHS talking therapies without seeing a GP, and there are routes in Scotland, Wales and Northern Ireland too. Counselling may help even years after treatment, if living with uncertainty is very hard.",
    sections: [
      {
        heading: "What talking therapies are",
        paragraphs: [
          "Talking therapies involve talking to a trained therapist about your thoughts and feelings. They can help with anxiety and depression.",
          "A therapist may be a counsellor or psychologist. You usually have an assessment first, and therapy may be one-to-one or in a group, online or over the phone.",
        ],
      },
      {
        heading: "CBT and counselling",
        paragraphs: [
          "Cognitive behavioural therapy, or CBT, can help you manage your problems better by changing the way you think and behave. The therapist will help you recognise negative thoughts and find ways to change them.",
          "In counselling, you talk to a trained counsellor who will listen and support you without judging you. Counsellors will not usually tell you what to do, but they can help you find new ways of coping.",
          "If you find living with uncertainty very difficult, it may help to have some counselling, even years after your treatment. Your counsellor can help you explore your feelings and find a way to cope with them.",
        ],
      },
      {
        heading: "Getting it on the NHS",
        paragraphs: [
          "In England, you can refer yourself to NHS talking therapies for anxiety and depression without speaking to a GP. To use this service, you need to be registered with a GP and aged 18 or over, or 16 or over in some areas.",
          "In Scotland, you can call the Living Life service on 0800 328 9655. In Wales, there is no self-referral scheme, so you visit your GP for referral. In Northern Ireland, you can call Lifeline on 0808 808 8000.",
          "Your GP or a member of your healthcare team may also be able to refer you. Some GPs, hospitals and cancer treatment centres have their own counsellors.",
        ],
      },
      {
        heading: "Finding the right fit",
        paragraphs: [
          "It's okay to try different counsellors. If you don't feel that you're getting on very well with your counsellor, you can always try someone else.",
          "Not all areas offer the same services, and waiting times can be long. While you wait, you can use things that helped you cope in the past and keep a diary of your feelings. If you start to feel worse, talk to your GP, cancer doctor or specialist nurse.",
        ],
      },
      {
        heading: "Talking to people you know, or someone you don't",
        paragraphs: [
          "You may find that it helps to talk openly with your family and friends. Talking about your worries can be a huge relief and make you feel better.",
          "Sometimes it is easier to talk to someone who doesn't know you. With a counsellor, you don't have to worry about upsetting them, and anything you say is completely confidential.",
        ],
      },
    ],
    helps: [
      "If you live in England, refer yourself to NHS talking therapies.",
      "Ask your GP, cancer doctor or specialist nurse about counselling or CBT.",
      "Try a different counsellor if one is not a good fit.",
      "Keep a diary of your feelings while you wait for therapy.",
      "Call the Macmillan Support Line free on 0808 808 00 00 for help finding a counsellor.",
    ],
    tryThisWeek: [
      "Look up NHS talking therapies.",
      "Ask your GP about counselling.",
      "Keep a feelings diary.",
    ],
    ask: "Can I be referred for talking therapy, and is there a counsellor at the hospital who works with people after cancer?",
    interactive: {
      kind: "flip-cards",
      title: "Types of talking therapy",
      intro: "Turn a card to see how each one works.",
      cards: [
        { id: "guided", front: "Guided self-help", when: "Often offered first on the NHS", back: "You go through a workbook or online course with the help of a therapist. It is based on CBT." },
        { id: "cbt", front: "CBT", when: "For anxiety, panic or low mood", back: "A therapist helps you change how you think and act. You practise what you learn between sessions." },
        { id: "counselling", front: "Counselling", when: "To talk things through", back: "A trained counsellor listens without judging you and helps you find your own ways of coping." },
        { id: "mbct", front: "Mindfulness-based therapy", when: "Learning to notice thoughts", back: "You learn to notice your thoughts and feelings as they happen, using meditation and breathing exercises." },
        { id: "group", front: "Group counselling", when: "With others facing similar problems", back: "Everyone in the group discusses their problems together. Some people find it helpful to learn they are not alone." },
      ],
    },
    sources: [MAC_TALKING, CRUK_MANAGE, NHS_TALKING, CRUK_COUNS_TYPES, CRUK_COUNS_NEED],
    quiz: {
      question: "Do you need to see a GP to get NHS talking therapies for anxiety in England?",
      options: [{ text: "No, you can refer yourself", right: true }, { text: "Yes, only a GP can refer you" }, { text: "Only your cancer doctor can refer you" }],
      why: "You can refer yourself to NHS talking therapies without speaking to a GP.",
    },
  },
  {
    id: "fcr-mindfulness",
    kicker: "Calm",
    question: "Can mindfulness or relaxation calm the worry?",
    hook: "Mindfulness does not make worrying thoughts disappear. It helps you see them as thoughts that come and go, which can loosen their grip.",
    short: "Mindfulness means being aware of your thoughts and feelings in the present moment, and it can help reduce stress and anxiety. A simple breathing exercise, relaxation, yoga and courses such as mindfulness-based cognitive therapy can all help. It is not right for everyone, and that is fine too.",
    sections: [
      {
        heading: "What mindfulness is",
        paragraphs: [
          "Mindfulness is being aware of your thoughts and feelings in the present moment. It uses techniques like meditation, breathing exercises and yoga, and can help reduce stress and anxiety.",
          "Mindfulness is not about making worrying thoughts go away, but about seeing them as mental events that come and go. It can be especially helpful if you realise you have been trapped in pre-living future worries.",
        ],
      },
      {
        heading: "A breathing exercise",
        paragraphs: [
          "This calming breathing technique for stress, anxiety and panic takes just a few minutes and can be done anywhere. Let your breath flow as deep down into your belly as is comfortable, without forcing it, breathing in through your nose and out through your mouth.",
          "Breathe in gently and regularly. Some people find it helpful to count steadily from 1 to 5, then let the breath flow out gently, counting from 1 to 5 again. Repeat for at least 5 minutes, and you will get the most benefit if you do it regularly.",
        ],
      },
      {
        heading: "Other ways to relax",
        paragraphs: [
          "Relaxation techniques such as meditation, yoga, breathing exercises and visualisation may help with episodes of anxiety and fear. Having a massage or reflexology may also help you feel better.",
          "Doing things you enjoy and being with family or friends can help distract you from things you are worrying about.",
          "Ask your cancer doctor or specialist nurse whether complementary therapies are suitable for you. Make sure you use properly trained and qualified practitioners.",
        ],
      },
      {
        heading: "Courses and apps",
        paragraphs: [
          "Mindfulness-based cognitive therapy uses mindfulness with some CBT, and is usually taught as an 8-week course. Some centres in the UK offer classes from the NHS, so ask your doctor what is available in your area or at your hospital.",
          "Free apps such as Healthy Minds Program can help you practise mindfulness. Every Mind Matters has a free Mind Plan, with tips to help deal with stress and anxiety.",
        ],
      },
      {
        heading: "If it doesn't suit you",
        paragraphs: [
          "Many people find mindfulness helpful, but it's not right for everyone. Some people find that it does not help them, or that it can make them feel worse.",
          "Some people find it easier to cope with an over-busy mind if they are doing gentle yoga or walking. There are no right or wrong ways to cope.",
        ],
      },
    ],
    helps: [
      "Try the NHS breathing exercise for at least 5 minutes, as part of your daily routine.",
      "Notice worrying thoughts as mental events that come and go.",
      "Ask your doctor about mindfulness courses in your area or at your hospital.",
      "Ask your cancer doctor or specialist nurse whether a complementary therapy is suitable for you.",
      "Try gentle yoga or walking if sitting still with your thoughts is hard.",
    ],
    tryThisWeek: [
      "Do the breathing exercise daily.",
      "Notice a worry as just a thought.",
      "Ask about a mindfulness course.",
    ],
    ask: "Are there mindfulness or relaxation classes at the hospital or nearby for people after cancer treatment?",
    interactive: {
      kind: "timeline",
      title: "Five minutes of calm breathing",
      steps: [
        { id: "settle", when: "First", title: "Get comfortable", points: ["Stand, sit in a chair that supports your back, or lie down.", "If you can, loosen any clothes that restrict your breathing."] },
        { id: "in", when: "Breathe in", title: "Into your belly", points: ["Breathe in through your nose, gently and regularly.", "Count steadily from 1 to 5 if you find it helpful."] },
        { id: "out", when: "Breathe out", title: "Let it flow", points: ["Let the breath flow out gently through your mouth.", "Count from 1 to 5 again, if this helps."] },
        { id: "repeat", when: "Keep going", title: "At least 5 minutes", points: ["Repeat for at least 5 minutes.", "You will get the most benefit if you do it regularly."] },
      ],
    },
    sources: [MAC_MENTAL, NHS_MINDFUL, NHS_BREATHING, CRUK_MANAGE, MAC_ANXIETY, MAC_UNCERTAINTY],
    quiz: {
      question: "What is mindfulness about, according to the NHS?",
      options: [{ text: "Seeing thoughts as mental events that come and go", right: true }, { text: "Making every worry disappear" }, { text: "Thinking only positive thoughts" }],
      why: "Mindfulness is not about making worrying thoughts go away, but about seeing them as mental events that come and go.",
    },
  },
  {
    id: "fcr-plans",
    kicker: "Looking ahead",
    question: "How do I make plans when I'm afraid it will come back?",
    hook: "Uncertainty makes the future feel fragile. Small goals, things to look forward to and a few practical checks help many people start planning again.",
    short: "Uncertainty can make it hard to make plans, and these feelings are normal. Small, achievable goals, hobbies, volunteering and things to look forward to can move your focus away from the cancer. Over time, other things start taking over and cancer becomes less of a focus.",
    sections: [
      {
        heading: "When the future feels uncertain",
        paragraphs: [
          "Uncertainty can be stressful. You might find it difficult to make plans when you are not sure about the future.",
          "It can help to know these feelings of worry and uncertainty are normal. You may always have some of these feelings after a cancer diagnosis, but there is help and support available.",
        ],
      },
      {
        heading: "Small goals first",
        paragraphs: [
          "Try not to rush things. Think about your recovery as a set of small, achievable goals that you can work towards, such as going for a walk when you feel able.",
          "To start, you may want to set short-term goals, then think about longer-term goals once you are ready. As you achieve a goal, your confidence will grow. Try not to be upset if you miss some of your goals, because what is important is that you are trying.",
        ],
      },
      {
        heading: "Plans can shift the focus",
        paragraphs: [
          "Having plans can help move your focus away from the cancer. Doing something new can help distract and relax you, and some hobbies, such as painting or learning a musical instrument, help you express your feelings.",
          "When you feel ready, you may decide to do some volunteer work. You could try to find something that matters to you or makes you feel part of your community.",
          "Going back to work or starting to do the things you did before are important steps forward.",
        ],
      },
      {
        heading: "Life coming back",
        paragraphs: [
          "Over time, other things will start taking over and cancer will become less of a focus for you. As time passes, you may go out more, see friends, go on holiday and start doing hobbies again.",
          "Your cancer experience may change your outlook on life, and you might change your priorities. People with cancer said their diagnosis helped them know what matters most in life.",
        ],
      },
      {
        heading: "Practical planning",
        paragraphs: [
          "Before holidays and big events, it's good to plan ahead and find out who to contact if you have a problem. Make sure you have enough of any prescription medicines you need.",
          "If you are taking any ongoing cancer drugs, such as hormonal therapy, take them exactly as your cancer team explains. Do not stop taking them without getting advice from your cancer doctor.",
        ],
      },
    ],
    helps: [
      "Set small, achievable goals, and build up to longer-term ones.",
      "Plan things you enjoy, so you have something to look forward to.",
      "Try a new hobby, or one that helps you express your feelings.",
      "When you feel ready, think about volunteer work that matters to you.",
      "Before a holiday, find out who to contact and check you have enough medicines.",
    ],
    tryThisWeek: [
      "Set one small goal.",
      "Plan something to look forward to.",
      "Try a new hobby.",
    ],
    ask: "Is there anything I should plan around, such as follow-up dates or medicines, before I book time away?",
    interactive: {
      kind: "scenarios",
      title: "Planning again",
      scenarios: [
        {
          id: "invite",
          situation: "Friends invite you on a trip, and you hesitate because of the worry.",
          options: [{ text: "Say yes and plan ahead", best: true }, { text: "Turn it down in case" }],
          why: "Having plans can help move your focus away from the cancer.",
        },
        {
          id: "missed",
          situation: "You missed a goal you set yourself this week.",
          options: [{ text: "Keep trying; that is what matters", best: true }, { text: "Give up on goals" }],
          why: "Try not to be upset if you miss some of your goals. What is important is that you are trying.",
        },
        {
          id: "part-of",
          situation: "You want to feel part of things again.",
          options: [{ text: "Look into volunteering when you feel ready", best: true }, { text: "Wait until the worry has gone" }],
          why: "When you feel ready, you may decide to do some volunteer work. You could try to find something that matters to you or makes you feel part of your community.",
        },
        {
          id: "holiday",
          situation: "A bank holiday weekend is coming up.",
          options: [{ text: "Find out who to contact and check your medicines", best: true }, { text: "Hope nothing comes up" }],
          why: "It's good to plan ahead and find out who to contact if you have a problem. Make sure you have enough of any prescription medicines you need.",
        },
      ],
    },
    sources: [MAC_UNCERTAINTY, MAC_RECOVER, CRUK_DURING, CRUK_SPECIAL, MAC_FINISHING, MAC_MENTAL],
    quiz: {
      question: "How does Macmillan suggest thinking about recovery?",
      options: [{ text: "As a set of small, achievable goals", right: true }, { text: "As one big target to hit quickly" }, { text: "As something to put off until the worry goes" }],
      why: "Think about your recovery as a set of small, achievable goals that you can work towards.",
    },
  },
  {
    id: "fcr-family",
    kicker: "Family",
    question: "How do I talk to my family about the fear?",
    hook: "Families often protect each other by keeping quiet. Talking, even awkwardly, usually brings people closer.",
    short: "Talking about your worries can be a huge relief, and people close to you may be waiting for you to start. Partners often hide their fears to protect each other, but talking can help you understand each other and feel closer. Your family may worry too, and support is there for them as well.",
    sections: [
      {
        heading: "Why it helps to talk",
        paragraphs: [
          "Talking about your worries can be a huge relief and make you feel better. Many people will be sympathetic, and they may be waiting for you to tell them when you are ready to talk.",
          "Often partners try to protect each other by hiding their fears and worries. Talking may help you understand each other and feel closer.",
        ],
      },
      {
        heading: "When others think you're fine",
        paragraphs: [
          "It is not unusual for others to think you're OK once treatment has finished. They may not understand your current emotional state and the psychological recovery that you are about to begin.",
          "Other people telling you everything will be okay can make anxiety worse. You may feel that they are not listening, or that they do not understand your worries.",
        ],
      },
      {
        heading: "Ways to start",
        paragraphs: [
          "You could try writing down your feelings and sharing them with your partner. Spend time together and plan fun activities, keeping to your normal routine as much as possible.",
          "Choose someone you trust and let them be a listening ear. If someone is not able to be there for you, focus on the people you can rely on and form a reliable support network.",
        ],
      },
      {
        heading: "Your family may worry too",
        paragraphs: [
          "People close to you may also feel anxious that the cancer might return, and may become anxious before your routine scans. For many people, this usually gets less over time.",
          "Family members may be too worried to express how they feel. Seeing a counsellor together gives you all a set time to listen to each other's worries, and it can bring you closer together.",
        ],
      },
      {
        heading: "How family can help",
        paragraphs: [
          "Family and friends can keep offering support, ask how you are and what they can do to help, and offer to go with you to check-ups if you are nervous.",
          "If they find it hard to talk, it is okay for them to say, 'I don't know what to say'. Not talking about a fear or worry can make it feel bigger.",
          "Support is there for them too, from the Macmillan Support Line on 0808 808 0000, the Online Community, or a counsellor. Their GP can give them more information.",
        ],
      },
    ],
    helps: [
      "Choose someone you trust and let them be a listening ear.",
      "Try writing down your feelings and sharing them with your partner.",
      "Ask someone close to come with you to check-ups if you are nervous.",
      "Think about family counselling if everyone is finding it hard to talk.",
      "Contact a relationship support organisation, such as Relate or Relationships Scotland.",
      "Call the Macmillan Support Line free on 0808 808 00 00.",
    ],
    tryThisWeek: [
      "Choose someone to confide in.",
      "Write your feelings down to share.",
      "Ask someone to come to a check-up.",
    ],
    ask: "Is there support, or counselling, for my partner and family as well as me?",
    interactive: {
      kind: "scenarios",
      title: "Conversations at home",
      scenarios: [
        {
          id: "reassure",
          situation: "Your partner keeps saying 'it'll be fine, don't worry'.",
          options: [{ text: "Tell them you need them to listen", best: true }, { text: "Stop mentioning your worries" }],
          why: "Other people telling you everything will be okay can make anxiety worse. You may feel that they are not listening.",
        },
        {
          id: "protect",
          situation: "You and your partner both hide your fears to protect each other.",
          options: [{ text: "Talk openly about how you both feel", best: true }, { text: "Keep protecting each other" }],
          why: "Often partners try to protect each other by hiding their fears and worries. Talking may help you understand each other and feel closer.",
        },
        {
          id: "no-words",
          situation: "A friend says they don't know what to say.",
          options: [{ text: "Tell them that's okay, and that listening helps", best: true }, { text: "Change the subject" }],
          why: "It is okay to say, 'I don't know what to say'. Not talking about a fear or worry can make it feel bigger.",
        },
        {
          id: "scan",
          situation: "Your next scan is coming up and you feel nervous.",
          options: [{ text: "Ask someone close to come with you", best: true }, { text: "Go alone and tell no one" }],
          why: "If you are nervous about check-ups or appointments, family and friends can offer to go with you for support.",
        },
      ],
    },
    sources: [CRUK_MANAGE, MAC_RELATIONSHIPS, CRUK_DURING, MAC_ANXIETY, CRUK_CARING, CRUK_COUNS_TYPES, MAC_SUPPORTING],
    quiz: {
      question: "Why do partners often avoid talking about their fears?",
      options: [{ text: "To protect each other", right: true }, { text: "Because the fears are not real" }, { text: "Because talking makes it worse" }],
      why: "Often partners try to protect each other by hiding their fears and worries. Talking may help you understand each other and feel closer.",
    },
  },
  {
    id: "fcr-activity",
    kicker: "Wellbeing",
    question: "Can being active help with the worry?",
    hook: "Moving your body is one of the simplest things you can do for your mood. Start gently, and check with your team first.",
    short: "Being physically active during and after treatment can help improve your mood and confidence, and even a short walk can help with anxiety. Get advice from a healthcare professional first, start slowly and build up. Connecting with people, learning new things and good sleep help your wellbeing too.",
    sections: [
      {
        heading: "Moving and mood",
        paragraphs: [
          "Research has shown that being physically active during and after treatment can help improve your mood and confidence. Doing something positive for yourself can help with anxiety and low mood.",
          "Physical activity increases the body's level of chemicals called endorphins, which help us feel good. Even a short walk can help with anxiety.",
        ],
      },
      {
        heading: "Check first, start gently",
        paragraphs: [
          "Physical activity is usually safe after cancer treatment, but it is important to get advice from a healthcare professional. There may be some types of activity you need to avoid or be careful with.",
          "After cancer treatment ends, try to increase your activity slowly. Doing too much too soon can make you feel more tired.",
          "Don't push yourself too much if you feel ill. Listen to your body, but try something gentle, such as yoga or a short walk each day.",
        ],
      },
      {
        heading: "Building up",
        paragraphs: [
          "To stay healthy, adults should do 150 minutes of moderate-intensity activity every week. If you have not exercised for a while, start gradually and aim to build up towards it.",
          "Any exercise is better than none, and even a brisk 10-minute walk can clear your mind and help you relax. Exercise should be something you enjoy, or it may be hard to keep going.",
          "Some hospitals, cancer charities and leisure clubs have exercise programmes for people recovering from treatment. Your cancer team can tell you what is available in your area.",
        ],
      },
      {
        heading: "Activity and the cancer coming back",
        paragraphs: [
          "There is some emerging evidence that being physically active at the recommended levels can reduce the risk of some cancers coming back, including breast and bowel cancer. More evidence is needed to know how much and what kind of exercise is needed.",
          "You can ask your key worker whether there is anything you can do to help reduce the risk of cancer coming back.",
        ],
      },
      {
        heading: "Other steps for wellbeing",
        paragraphs: [
          "Connecting with other people, learning new skills, helping others and paying attention to the present moment can also improve your mental wellbeing.",
          "Eating healthily, limiting alcohol and avoiding smoking can help improve your overall wellbeing. They can also have a positive impact on your mood and reduce stress and anxiety.",
          "Sleeping well can help with recovery after cancer treatment. Try to go to bed and get up at about the same time every day.",
        ],
      },
    ],
    helps: [
      "Ask a healthcare professional what activity is safe for you.",
      "Start gently, such as a short walk each day, and build up slowly.",
      "Choose an activity you enjoy.",
      "Ask your cancer team about exercise programmes in your area.",
      "Ask your key worker if there is anything you can do to help reduce the risk of cancer coming back.",
      "Try connecting with people, learning something new or helping others.",
    ],
    tryThisWeek: [
      "Ask what activity is safe for you.",
      "Take a short walk each day.",
      "Try one of the 5 steps to wellbeing.",
    ],
    ask: "What kind of activity is safe for me now, and is there an exercise programme I could join?",
    interactive: {
      kind: "flip-cards",
      title: "5 steps to mental wellbeing",
      intro: "Turn a card to see how each step can help, as the NHS describes it.",
      cards: [
        { id: "connect", front: "Connect with other people", when: "Family, friends, colleagues", back: "Good relationships can build a sense of belonging and self-worth, and give emotional support." },
        { id: "active", front: "Be physically active", when: "Walking, strength or flexibility", back: "Being active can raise your self-esteem and cause chemical changes in your brain that help your mood." },
        { id: "learn", front: "Learn new skills", when: "Cooking, a course, a new hobby", back: "Learning new skills can boost self-confidence and help you build a sense of purpose." },
        { id: "give", front: "Help other people", when: "Small kindnesses or volunteering", back: "Acts of giving and kindness can create positive feelings and give you a feeling of purpose." },
        { id: "present", front: "Pay attention to the present", when: "Mindfulness, every day", back: "Paying more attention to the present moment can help you enjoy life more and understand yourself better." },
      ],
    },
    sources: [MAC_ACTIVE, CRUK_MANAGE, MAC_ANXIETY, MAC_LIFESTYLE, NHS_EXERCISE, MAC_FINISHING, NHS_WELLBEING, BCN_STRESS],
    quiz: {
      question: "How much moderate activity a week does the NHS say adults should build up to?",
      options: [{ text: "150 minutes", right: true }, { text: "15 minutes" }, { text: "10 hours" }],
      why: "To stay healthy, adults should do 150 minutes of moderate-intensity activity every week.",
    },
  },
  {
    id: "fcr-support",
    kicker: "Support",
    question: "Where can I find people who understand?",
    hook: "Talking to someone who has felt the same fear can make you feel far less alone. There are groups, forums, phone buddies and courses.",
    short: "Many people find it helps to join a support group, in person or online, and to learn from how others have coped. Macmillan Buddies, the Macmillan Online Community, Cancer Chat and courses such as Breast Cancer Now's Moving Forward are all options. Your healthcare team or the Macmillan Support Line can help you find what is near you.",
    sections: [
      {
        heading: "Why it helps",
        paragraphs: [
          "Many people find it helpful to join a self-help or support group. It can help you feel less alone, and you can learn from the experiences of other people and how they have coped.",
          "Connecting with others who are in a similar situation can help reduce feelings of isolation, as well as anxiety or fear.",
        ],
      },
      {
        heading: "What a group is like",
        paragraphs: [
          "Each cancer support group is different. You can expect a warm welcome, and you do not have to talk about anything you do not want to talk about. It can take a few visits before you feel comfortable.",
          "Some groups are for people with a specific type of cancer. It may help to go along to see what the group is like before you decide to join, and you might want to take someone with you.",
          "Most groups are free. You can search for groups in your area or ask someone from your healthcare team.",
        ],
      },
      {
        heading: "Online and by phone",
        paragraphs: [
          "The Macmillan Online Community is a free online support network, available 24 hours a day, with groups for all cancer types and treatments. Cancer Chat is Cancer Research UK's online forum for people affected by cancer.",
          "Macmillan Buddies is a free support service of 8 weekly telephone calls with the same trained volunteer. You can talk about how you're feeling or simply chat.",
        ],
      },
      {
        heading: "Courses after treatment",
        paragraphs: [
          "Some charities run programmes on helping people with fear of recurrence.",
          "Breast Cancer Now's Moving Forward course is for people who have finished hospital treatment for primary breast cancer. It runs over 2 half-days, in person or online, with resources on topics including managing worries of the cancer coming back.",
          "The HOPE course, developed with Macmillan, is a 6-week self-management course run online to help people after cancer treatment.",
        ],
      },
      {
        heading: "Someone who has been there",
        paragraphs: [
          "If you have had primary breast cancer, Breast Cancer Now's Someone Like Me service can match you with a trained volunteer who has had a similar experience, by phone or email.",
          "Some cancer hospitals are linked with Macmillan Information and Support Services or Maggie's Centres. These can be a place to start when looking for support.",
          "You can call the Macmillan Support Line free on 0808 808 0000, from 8am to 8pm, 7 days a week.",
        ],
      },
    ],
    helps: [
      "Ask someone from your healthcare team about support groups in your area.",
      "Go along to see what a group is like before you decide to join.",
      "Join the Macmillan Online Community or Cancer Chat.",
      "Sign up for 8 weekly calls with a Macmillan Buddy.",
      "Ask about courses for life after treatment, such as Moving Forward or HOPE.",
      "Call the Macmillan Support Line free on 0808 808 00 00.",
    ],
    tryThisWeek: [
      "Search for a local support group.",
      "Look at an online forum.",
      "Sign up for a Macmillan Buddy.",
    ],
    ask: "Is there a support group or course near me for people living with worry after cancer?",
    interactive: {
      kind: "flip-cards",
      title: "Ways to connect",
      intro: "Turn a card to see what each one offers.",
      cards: [
        { id: "group", front: "A local support group", when: "In person, near you", back: "A warm welcome, and you do not have to talk about anything you do not want to. Most groups are free." },
        { id: "community", front: "Macmillan Online Community", when: "Any time, day or night", back: "A free online support network with groups for all cancer types and treatments." },
        { id: "buddy", front: "Macmillan Buddies", when: "By phone, for 8 weeks", back: "8 weekly calls with the same trained volunteer. Talk about how you're feeling or simply chat." },
        { id: "chat", front: "Cancer Chat", when: "Online forum", back: "Cancer Research UK's online forum for people affected by cancer." },
        { id: "moving", front: "Moving Forward", when: "After primary breast cancer", back: "A Breast Cancer Now course over 2 half-days, in person or online, with tools for life after treatment." },
        { id: "someone", front: "Someone Like Me", when: "After primary breast cancer", back: "Breast Cancer Now matches you with a trained volunteer who has had a similar experience." },
      ],
    },
    sources: [MAC_TALKING, BCN_COPING, MAC_MENTAL, MAC_COMMUNITY, CRUK_DURING, MAC_BUDDIES, MAC_WORRIES, BCN_MOVING, MAC_RECOVER, BCN_SOMEONE],
    quiz: {
      question: "What does Macmillan Buddies offer?",
      options: [{ text: "8 weekly phone calls with the same volunteer", right: true }, { text: "A daily visit from a nurse" }, { text: "A one-off email" }],
      why: "Macmillan Buddies is a free support service of 8 weekly telephone calls with the same trained volunteer.",
    },
  },
];
