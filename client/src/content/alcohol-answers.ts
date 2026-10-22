import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Alcohol and your health page's pieces (content/library-conditions/mind-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (including Every Mind
// Matters and NHS Better Health), Drinkaware, the Royal College of Psychiatrists, the Stroke Association,
// Samaritans, Shout and the government's DVLA page. mind.org.uk was not needed and is not cited.
// Safe-messaging guidance is followed throughout: no method details, no amounts of alcohol or medicine taken in
// harm, hopeful and practical. Every answer ends its "What helps" list with the crisis routes exactly as the NHS
// gives them (999 or A&E, 111, Samaritans 116 123, Shout 85258), and the "urgent" answer is built from them.
// As the NHS says, anyone who drinks heavily is told not to stop suddenly without medical advice, and nothing here
// suggests stopping or changing a medicine without the doctor. General information only; it never replaces what a
// person's own GP, alcohol service or care team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const dw = (label: string, path: string): LearnSource => ({ label: `Drinkaware: ${label}`, url: `https://www.drinkaware.co.uk/${path}` });
const stroke = (label: string, path: string): LearnSource => ({ label: `Stroke Association: ${label}`, url: `https://www.stroke.org.uk/stroke/manage-risk/${path}` });

const NHS_UNITS = nhs("Alcohol units", "live-well/alcohol-advice/calculating-alcohol-units/");
const NHS_RISKS = nhs("The risks of drinking too much", "live-well/alcohol-advice/the-risks-of-drinking-too-much/");
const NHS_TIPS = nhs("Tips on cutting down on alcohol", "live-well/alcohol-advice/tips-on-cutting-down-alcohol/");
const NHS_SUPPORT = nhs("Alcohol support", "live-well/alcohol-advice/alcohol-support/");
const NHS_AUD = nhs("Alcohol-use disorder", "conditions/alcohol-use-disorder/");
const NHS_POISONING = nhs("Alcohol poisoning", "conditions/alcohol-poisoning/");
const NHS_ARLD = nhs("Alcohol-related liver disease (ARLD)", "conditions/alcohol-related-liver-disease-arld/");
const NHS_FIND = nhs("Find alcohol addiction support services", "nhs-services/find-alcohol-addiction-support-services/");
const NHS_DRINKLESS: LearnSource = { label: "NHS Better Health: Drink less alcohol", url: "https://www.nhs.uk/better-health/drink-less/" };
const NHS_ANTIBIOTICS = nhs("Antibiotics: interactions", "medicines/antibiotics/interactions/");
const NHS_ANTIDEP = nhs("Antidepressants", "medicines/antidepressants/");
const NHS_SERTRALINE = nhs("Sertraline", "medicines/sertraline/");
const NHS_STROKE_CAUSES = nhs("Causes of a stroke", "conditions/stroke/causes/");
const NHS_CHD_PREV = nhs("Coronary heart disease: prevention", "conditions/coronary-heart-disease/prevention/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");
const EMM_URGENT: LearnSource = { label: "NHS Every Mind Matters: Urgent support", url: "https://www.nhs.uk/every-mind-matters/urgent-support/" };

const RCP_ALCOHOL: LearnSource = { label: "Royal College of Psychiatrists: Alcohol, mental health and the brain", url: "https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/alcohol-mental-health-and-the-brain" };

const DW_GUIDE = dw("UK low risk drinking guidelines", "facts/information-about-alcohol/alcohol-and-the-facts/low-risk-drinking-guidelines");
const DW_UNIT = dw("What is an alcohol unit?", "facts/information-about-alcohol/alcoholic-drinks-and-units/what-is-an-alcohol-unit");
const DW_MH = dw("Alcohol and mental health", "facts/health-effects-of-alcohol/mental-health");
const DW_DEP = dw("Alcohol and depression", "facts/health-effects-of-alcohol/mental-health/alcohol-and-depression");
const DW_ANX = dw("Alcohol and anxiety", "facts/health-effects-of-alcohol/mental-health/alcohol-and-anxiety");
const DW_SLEEP = dw("Alcohol and sleep", "facts/health-effects-of-alcohol/lifestyle-effects/alcohol-and-sleep");
const DW_DEPEND = dw("Alcohol dependence", "facts/health-effects-of-alcohol/mental-health/alcohol-dependence");
const DW_AMIDEP = dw("Am I alcohol dependent?", "advice-and-support/help-to-reduce-drinking/am-i-alcohol-dependent");
const DW_WITHDRAW = dw("Alcohol withdrawal", "facts/health-effects-of-alcohol/general-health-effects/alcohol-withdrawal-symptoms");
const DW_CANCER = dw("Alcohol and cancer", "facts/health-effects-of-alcohol/alcohol-related-diseases-and-illnesses/alcohol-and-cancer");
const DW_HEART = dw("Alcohol and the heart", "facts/health-effects-of-alcohol/alcohol-related-diseases-and-illnesses/alcohol-and-the-heart");
const DW_BP = dw("Alcohol and blood pressure", "facts/health-effects-of-alcohol/general-health-effects/alcohol-and-blood-pressure");
const DW_MEDS = dw("Is it okay to drink while on medication?", "facts/health-effects-of-alcohol/lifestyle-effects/is-it-ok-to-drink-while-on-medication");
const DW_DFD = dw("Improve your health with drink-free days", "advice-and-support/help-to-reduce-drinking/health-benefits-of-drink-free-days");
const DW_REDUCE = dw("I would like to reduce my drinking", "advice-and-support/help-to-reduce-drinking/i-would-like-to-reduce-my-drinking");
const DW_TRIGGERS = dw("How to spot your triggers", "advice-and-support/help-to-reduce-drinking/how-to-spot-alcohol-triggers");
const DW_SLIP = dw("How to get things back on track after a slip-up", "advice-and-support/help-to-reduce-drinking/how-to-get-things-back-on-track-after-a-slip-up");
const DW_LINES = dw("Support lines", "advice-and-support/alcohol-support-services/support-lines");
const DW_NOW = dw("Get help now", "advice-and-support/alcohol-support-services/get-help-now");
const DW_PEER = dw("How to deal with peer pressure", "advice-and-support/help-to-reduce-drinking/navigating-social-situations/how-to-deal-with-peer-pressure");
const DW_AFTERWORK = dw("After work drinks survival guide", "advice-and-support/help-to-reduce-drinking/navigating-social-situations/after-work-drinks-survival-guide");
const DW_LOW_NO = dw("Cutting your drinking with alcohol-free and low alcohol drinks", "advice-and-support/alcohol-free-drinks/cutting-your-drinking-with-alcohol-free-or-low-alcohol-drinks");
const DW_WORRIED = dw("Worried about someone else's drinking?", "advice-and-support/help-to-support-someone-else/worried-about-someone-elses-drinking");
const DW_TALK = dw("How to talk to someone else about drinking", "advice-and-support/help-to-support-someone-else/how-to-talk-to-someone-else-about-drinking");
const DW_LOOK_AFTER = dw("How to look after yourself when supporting someone else", "advice-and-support/help-to-support-someone-else/how-to-look-after-yourself-when-supporting-someone-else");
const DW_PARENT = dw("Worried about a parent's drinking?", "advice-and-support/help-to-support-someone-else/worried-about-a-parents-drinking");

const SA_ALCOHOL = stroke("Alcohol and stroke", "alcohol");
const SA_RISKS = stroke("Risks of alcohol", "alcohol/risks");

const SAM_CONTACT: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };
const SHOUT: LearnSource = { label: "Shout: The UK's free, confidential, 24/7 mental health text service", url: "https://giveusashout.org/" };
const GOV_DVLA: LearnSource = { label: "GOV.UK: Alcohol problems and driving", url: "https://www.gov.uk/alcohol-problems-and-driving" };

/** The crisis routes as the NHS gives them; the last line of every "What helps" list. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans free on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you cannot keep yourself safe.";

export const alcoholAnswers: LearnArticle[] = [
  {
    id: "alc-units",
    kicker: "Understanding",
    question: "What is a unit, and how much is in my drink?",
    hook: "One unit is about what an adult body can process in an hour. A pint of strong lager or a large glass of wine holds three.",
    short: "Units are a simple way of expressing the quantity of pure alcohol in a drink. To keep health risks low, men and women are advised not to drink more than 14 units a week on a regular basis, spread over 3 or more days. It is called low risk rather than safe, because there is no safe drinking level.",
    sections: [
      {
        heading: "What a unit is",
        paragraphs: [
          "Units are a simple way of expressing the quantity of pure alcohol in a drink. One unit equals 10ml or 8g of pure alcohol, which is around the amount the average adult can process in an hour.",
          "The number of units in a drink is based on its size and its strength. Strength is shown on the label as ABV, alcohol by volume, sometimes written as \"vol\".",
        ],
      },
      {
        heading: "How drinks add up",
        paragraphs: [
          "A single small shot of spirits is 1 unit. A pint of lower-strength lager, beer or cider is about 2 units, and a pint of higher-strength lager is 3 units.",
          "A large glass of wine is 3 units, and a 750ml bottle of wine contains 10 units. A large glass of stronger wine is likely to contain three and a half units.",
        ],
      },
      {
        heading: "The weekly guidelines",
        paragraphs: [
          "To keep health risks from alcohol low, men and women are advised not to drink more than 14 units a week on a regular basis. If you regularly drink as much as 14 units a week, spread it over 3 or more days.",
          "14 units is equivalent to six pints of average-strength beer or six medium glasses of average-strength wine. If you want to cut down, try to have several drink-free days each week.",
        ],
      },
      {
        heading: "Low risk, not safe",
        paragraphs: [
          "Drinking less than 14 units a week is called \"low risk\" rather than \"safe\", because there's no safe drinking level. The less you drink, the lower the health risks.",
          "Drinking too much too quickly on a single occasion is called binge drinking: more than 8 units in a single session for men, or more than 6 for women. To lower the risk on one occasion, drink more slowly, drink with food and alternate with water or non-alcoholic drinks.",
          "If you're pregnant or think you could become pregnant, the safest approach is not to drink alcohol at all.",
        ],
      },
    ],
    helps: [
      "Check the ABV on the label, or ask bar staff, to know how strong a drink is.",
      "Keep to no more than 14 units a week, spread over 3 or more days.",
      "Have several drink-free days each week.",
      "On a single occasion, drink more slowly, drink with food and alternate with water.",
      "Choose a smaller glass of wine, or a bottle of beer instead of a pint.",
      CRISIS,
    ],
    tryThisWeek: [
      "Check the ABV on your drinks.",
      "Plan some drink-free days.",
      "Pick a smaller glass.",
    ],
    ask: "How many units do I drink, and is it affecting my health?",
    interactive: {
      kind: "flip-cards",
      title: "Units in a drink",
      intro: "Turn each card to see roughly how many units it holds. Size and strength change the number.",
      cards: [
        { id: "shot", front: "Single shot of spirits", when: "25ml, 40% ABV", back: "1 unit. A double (50ml) is about 2 units." },
        { id: "pint-lower", front: "Pint of lower-strength beer", when: "Lager, beer or cider", back: "About 2 units, says the NHS." },
        { id: "pint-higher", front: "Pint of higher-strength beer", when: "Lager, beer or cider", back: "3 units, says the NHS." },
        { id: "large-wine", front: "Large glass of wine", when: "250ml, 12% ABV", back: "3 units. A stronger wine is likely to hold three and a half." },
        { id: "bottle", front: "Bottle of wine", when: "750ml", back: "About 10 units, says the NHS." },
        { id: "week", front: "14 units a week", when: "The low-risk guideline", back: "About six pints of average-strength beer or six medium glasses of wine, over 3 or more days." },
      ],
    },
    sources: [NHS_UNITS, NHS_RISKS, DW_GUIDE, DW_UNIT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What is the weekly low-risk guideline for men and women?",
      options: [{ text: "No more than 14 units, over 3 or more days", right: true }, { text: "14 units a day" }, { text: "It is different for men and women" }],
      why: "Men and women are advised not to drink more than 14 units a week on a regular basis.",
    },
  },
  {
    id: "alc-mood-sleep",
    kicker: "Mind and sleep",
    question: "How does alcohol affect mood, anxiety and sleep?",
    hook: "A drink can feel calming for a while. Over time it can feed low mood, anxiety and broken sleep.",
    short: "Alcohol is a depressant. While you might feel more relaxed after a drink, the effects are short-lived, and drinking too much over time can contribute to low mood, depression and anxiety. It may help you fall asleep, but it disrupts your sleep. Cutting down often helps mood and sleep within a few weeks.",
    sections: [
      {
        heading: "Why the calm doesn't last",
        paragraphs: [
          "Alcohol is a depressant that can interfere with the chemicals in the brain that are vital for good mental health. While you might feel more relaxed after a drink, these effects are short-lived.",
          "Over time, drinking too much can contribute to low mood, increase feelings of depression and anxiety, and make it harder to cope with everyday stress.",
        ],
      },
      {
        heading: "Anxiety and the morning after",
        paragraphs: [
          "If you regularly drink heavily, your body gets used to alcohol's calming effect. When the alcohol leaves your system, you can go straight into \"fight or flight\" mode, the same reaction as an anxiety disorder.",
          "A hangover can make you feel ill, anxious and jittery, and if this happens all the time, it can affect your mental health. You may want to drink again to ease the anxiety, but that only starts the cycle again.",
        ],
      },
      {
        heading: "Low mood and depression",
        paragraphs: [
          "Drinking heavily and regularly is associated with depression. If you rely on alcohol to mask feelings of depression, you may find you become reliant on it.",
          "If you already have a mental health problem, drinking can make it much worse. There's a strong link between heavy drinking and depression, and if you already feel anxious or sad, drinking can make this worse.",
          "Research has found strong links between drinking too much alcohol and self-harming, including suicide. If you feel unable to keep yourself safe, it's a mental health emergency: call 999 or go to A&E.",
        ],
      },
      {
        heading: "Sleep",
        paragraphs: [
          "Alcohol might help you fall asleep, but it disrupts your sleep cycle. You spend less time in the important REM stage of sleep, so you wake up feeling less refreshed. Even a couple of drinks will have an effect.",
          "Alcohol can also mean getting up in the night to go to the toilet, and it can make you snore. If you choose to drink, try to avoid it too close to bedtime.",
        ],
      },
      {
        heading: "When you cut down",
        paragraphs: [
          "The good news is that reducing or stopping drinking can improve your mood and mental health. People who are depressed often find that cutting out alcohol for four weeks makes a clear difference to how they feel.",
          "Most people can expect their anxiety to improve within a couple of weeks of cutting down, as the brain's balance settles and sleep gets better. If you still feel low or anxious after a few weeks, contact your GP surgery and tell them how much you drink.",
        ],
      },
    ],
    helps: [
      "Find other ways to unwind, such as a walk, breathing exercises or talking to someone you trust.",
      "Try not to drink again to ease next-day anxiety: it only starts the cycle again.",
      "If you choose to drink, avoid it too close to bedtime.",
      "If low mood or anxiety lasts a few weeks after cutting down, see your GP and say how much you drink.",
      "If you drink heavily, do not stop suddenly: get medical help before you try to stop.",
      CRISIS,
    ],
    tryThisWeek: [
      "Find a way to unwind without alcohol.",
      "Avoid drinking close to bedtime.",
      "See your GP if low mood lasts.",
    ],
    ask: "Could my drinking be making my mood, anxiety or sleep worse?",
    interactive: {
      kind: "scenarios",
      title: "Mood, sleep and a drink",
      scenarios: [
        {
          id: "morning",
          situation: "You feel on edge and low the morning after drinking.",
          options: [{ text: "Rest, drink water and notice the link", best: true }, { text: "Have a drink to take the edge off" }],
          why: "You may want to drink again to ease the anxiety, but that only starts the cycle again.",
        },
        {
          id: "nightcap",
          situation: "You have a drink most nights to help you nod off.",
          options: [{ text: "Try some drink-free nights", best: true }, { text: "Have a bigger drink to sleep longer" }],
          why: "Alcohol might help you fall asleep, but it disrupts your sleep cycle, so you wake up feeling less refreshed.",
        },
        {
          id: "still-low",
          situation: "You've cut down for a few weeks but still feel low.",
          options: [{ text: "Contact your GP and mention your drinking", best: true }, { text: "Decide it will never lift" }],
          why: "If you still feel low or anxious after a few weeks, contact your GP surgery and tell them how much you drink.",
        },
      ],
    },
    sources: [RCP_ALCOHOL, DW_MH, DW_DEP, DW_ANX, DW_SLEEP, NHS_TIPS, NHS_RISKS, NHS_AUD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does alcohol do to sleep?",
      options: [{ text: "It may help you fall asleep, but disrupts your sleep", right: true }, { text: "It gives deeper, more refreshing sleep" }, { text: "One drink has no effect at all" }],
      why: "Alcohol might help you fall asleep, but it disrupts your sleep cycle.",
    },
  },
  {
    id: "alc-health",
    kicker: "Your body",
    question: "What does drinking do to long-term health?",
    hook: "Liver, heart, blood pressure and at least seven cancers. The less you drink, the lower the risk.",
    short: "Regularly drinking more than 14 units a week risks damaging your health. Over many years it can raise the risk of several cancers, stroke, heart disease, liver disease and brain damage. The less you drink, the lower the health risks, and cutting down can help lower them.",
    sections: [
      {
        heading: "Less is lower risk",
        paragraphs: [
          "Regularly drinking more than 14 units of alcohol a week risks damaging your health. There's now a better understanding of the link between drinking and some illnesses, including a range of cancers.",
          "The idea that some alcohol was good for the heart has been revised. The effects of alcohol on your health depend on how much you drink: the less you drink, the lower the health risks.",
        ],
      },
      {
        heading: "Cancer",
        paragraphs: [
          "Drinking alcohol causes at least seven types of cancer, including breast, bowel, mouth and throat cancers. The risk starts to increase even at low levels of drinking, so the less you drink, the more you reduce your risk.",
          "Drinking and smoking together raise the risk of throat, mouth, food pipe and bowel cancers more than doing either on their own. If you're having cancer treatment, drinking could interfere with it, so ask the team treating you.",
        ],
      },
      {
        heading: "Heart and blood pressure",
        paragraphs: [
          "Drinking alcohol increases your blood pressure, and repeated drinking causes sustained high blood pressure. You can't usually feel high blood pressure, so the best way to know is to have it measured.",
          "Long-term heavy drinking can damage your heart and blood vessels, and may weaken the heart muscle, called cardiomyopathy. Binge drinking can make your heart beat irregularly.",
        ],
      },
      {
        heading: "Liver",
        paragraphs: [
          "Drinking alcohol is the most common cause of liver disease in the UK, accounting for six in 10 cases. Alcohol-related liver disease does not always cause symptoms in the early stages.",
          "It develops over months or years. At the first stage, fat builds up in the liver, and the liver can usually recover if you stop drinking. At the most serious stage, cirrhosis, the damage cannot usually be reversed.",
        ],
      },
      {
        heading: "Brain, mood and more",
        paragraphs: [
          "Drinking more than 14 units a week over many years can increase your risk of brain damage, which may cause memory loss and changes in your behaviour. Drinking a lot for a long time also raises the risk of pancreatitis, sexual problems and infertility.",
          "Cutting down can help lower your risk of cancer, diabetes, dementia, stroke, and heart, liver and kidney problems. With mild alcohol-related brain damage, memory and thinking often improve after stopping drinking, though this can take some time.",
        ],
      },
    ],
    helps: [
      "Keep to no more than 14 units a week, with several drink-free days.",
      "Have your blood pressure measured at your GP surgery or a pharmacy.",
      "Try not to smoke as well: drinking and smoking together raise cancer risk more than either alone.",
      "See a GP if you have symptoms of liver disease or are worried about your drinking.",
      "If you're having cancer treatment, ask the team whether alcohol could interfere with it.",
      CRISIS,
    ],
    tryThisWeek: [
      "Count your units this week.",
      "Get your blood pressure checked.",
      "See a GP if you're worried.",
    ],
    ask: "Is my drinking affecting my liver, heart or blood pressure?",
    interactive: {
      kind: "risk-check",
      title: "What adds to the risk?",
      intro: "Tick any that apply. Some of these can change, and some cannot.",
      items: [
        { id: "over-14", label: "Often drinking over 14 units a week", note: "Over many years this can raise the risk of stroke, heart disease, liver disease and some cancers.", changeable: true },
        { id: "binge", label: "Drinking a lot in one go", note: "Binge drinking can make your heart beat irregularly. Drinking more slowly, with food, lowers the risk.", changeable: true },
        { id: "smoking", label: "Smoking as well as drinking", note: "Together they raise the risk of mouth, throat, food pipe and bowel cancers more than either alone.", changeable: true },
        { id: "blood-pressure", label: "High blood pressure", note: "Drinking raises blood pressure. Cutting down on alcohol is one way to lower it.", changeable: true },
        { id: "family", label: "Family history of alcohol-related disease", note: "This makes alcohol-related liver disease more likely if you drink too much.", changeable: false },
        { id: "women", label: "Being a woman", note: "Alcohol-related liver disease develops more quickly, and at lower drinking levels, in women than in men.", changeable: false },
      ],
    },
    sources: [NHS_RISKS, NHS_AUD, RCP_ALCOHOL, DW_CANCER, DW_HEART, DW_BP, NHS_ARLD, DW_DEPEND, NHS_TIPS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "At least how many types of cancer does alcohol cause?",
      options: [{ text: "Seven", right: true }, { text: "One" }, { text: "None" }],
      why: "Drinking alcohol causes at least seven types of cancer, including breast, bowel, mouth and throat cancers.",
    },
  },
  {
    id: "alc-dependence",
    kicker: "Understanding",
    question: "How do I know if drinking is getting hard to control?",
    hook: "You don't have to drink a certain amount, or every day, to become dependent. Noticing the signs early makes change easier.",
    short: "Signs include regularly drinking more than you mean to, finding it hard to cut down, needing more to get the same effect, and getting withdrawal symptoms when you stop. Dependence runs from mild to severe. If you might be dependent, get medical help before you stop, because stopping suddenly can be very dangerous.",
    sections: [
      {
        heading: "What dependence means",
        paragraphs: [
          "If you are dependent on alcohol, you might feel a strong urge to drink, struggle to control how much you drink, and carry on even when it has a negative effect on your life. Around 1 in 100 adults in the UK are dependent on alcohol.",
          "You don't have to drink a certain amount of alcohol or drink all the time to be dependent. Dependence operates on a spectrum, from mild to moderate or severe.",
        ],
      },
      {
        heading: "Signs to look out for",
        paragraphs: [
          "Signs include regularly drinking more than you mean to, finding it hard to stop or cut down even if you want to, and feeling guilty after drinking. People you know may be concerned about your drinking.",
          "You might carry on drinking when it's causing problems for your health, work or relationships, crave alcohol, or need a drink when you wake up. Needing more alcohol to get the same effect is an early sign.",
          "If you find it very difficult to enjoy yourself or relax without having a drink, you could have become dependent on alcohol.",
        ],
      },
      {
        heading: "Withdrawal is a warning",
        paragraphs: [
          "If you get withdrawal symptoms when you stop or cut down, this is a sign your body is dependent on alcohol. Symptoms include anxiety, difficulty sleeping, feeling sick, sweating and shaking.",
          "It can be very dangerous to stop drinking suddenly if you're dependent on alcohol. If you get withdrawal symptoms, get medical help before you try to stop drinking.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "Usually several things play a part, such as how easily available alcohol is, pressure from people around you, and your family's genes and attitudes. Stressful events, such as bereavement or losing a job, can trigger heavy drinking in some people.",
          "People often drink to try to ease anxiety or depression, but in the long term alcohol makes them worse. The first step is acknowledging there is a problem; the second is talking to a health professional, usually at your GP surgery.",
        ],
      },
      {
        heading: "Getting help, and driving",
        paragraphs: [
          "A GP or alcohol support service will ask about your drinking and how it's affecting your life, and may offer a questionnaire and blood tests. You can also refer yourself to a local alcohol service.",
          "If you have an alcohol problem, the DVLA needs to be told. You can be fined up to £1,000 if you do not tell the DVLA about a medical condition that affects your driving.",
        ],
      },
    ],
    helps: [
      "Ask yourself honestly whether you often feel the need to drink, or put drinking before work or family.",
      "Be accurate and honest with a GP about how much you drink.",
      "If you get shaky, sweaty or sick before your first drink of the day, get medical help before stopping.",
      "Take regular drink-free days: finding them hard can be a sign of some dependence.",
      "Tell the DVLA if you have an alcohol problem.",
      CRISIS,
    ],
    tryThisWeek: [
      "Answer the questions honestly.",
      "Be honest with your GP.",
      "Try a drink-free day.",
    ],
    ask: "Am I dependent on alcohol, and is it safe for me to stop suddenly?",
    interactive: {
      kind: "signs",
      title: "Signs to talk about",
      intro: "Tick any you recognise. The ones you tick make a list to take to your GP or an alcohol service.",
      signs: ["Drinking more than I mean to", "Finding it hard to cut down", "Feeling guilty after drinking", "People are worried about my drinking", "Drinking despite the problems it causes", "Needing a drink when I wake up", "Needing more for the same effect", "Shaking, sweating or sickness when I stop", "Finding it hard to relax without a drink"],
      after: "Tell your GP or an alcohol service. If you get withdrawal symptoms, get medical help before you try to stop drinking.",
      copyHeading: "Drinking signs I have noticed",
    },
    sources: [NHS_AUD, RCP_ALCOHOL, DW_DEPEND, DW_AMIDEP, NHS_SUPPORT, GOV_DVLA, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do you have to drink every day to be dependent?",
      options: [{ text: "No, it can happen without drinking all the time", right: true }, { text: "Yes, only daily drinkers" }, { text: "Only people who drink spirits" }],
      why: "You don't have to drink a certain amount of alcohol or drink all the time to be dependent.",
    },
  },
  {
    id: "alc-cutting-down",
    kicker: "Self-help",
    question: "What actually helps when cutting down?",
    hook: "A plan, a few drink-free days and smaller, weaker drinks. Small steps add up, and a slip is not the end.",
    short: "Set a limit before you start drinking, tell friends and family, choose smaller or lower-strength drinks and have several drink-free days each week. Knowing your triggers helps you plan around them. If you get physical withdrawal symptoms, get medical advice before you stop.",
    sections: [
      {
        heading: "First, a safety check",
        paragraphs: [
          "Get medical advice before you stop drinking if you have physical withdrawal symptoms, like shaking, sweating or feeling anxious until you have your first drink of the day. It can be dangerous to stop drinking too quickly without proper help.",
          "Otherwise, you do not necessarily need to go teetotal to feel the benefits of drinking less. Even setting a few drink-free days a week, or swapping to lower-strength drinks, are great steps in the right direction.",
        ],
      },
      {
        heading: "Make a plan",
        paragraphs: [
          "Before you start drinking, set a limit on how much you're going to drink, and only take a fixed amount of money to spend on alcohol. Keep a daily diary of how much you drink, or try a drink tracking app such as NHS Drink Free Days.",
          "Let your friends and family know you're cutting down and that it's important to you. Goals work best when they are specific, easy to measure, achievable and realistic, with a timeframe.",
        ],
      },
      {
        heading: "Smaller, weaker, slower",
        paragraphs: [
          "Go for smaller sizes, like bottled beer instead of pints, or a small glass of wine instead of a large one. Swap strong beers or wines for ones with a lower strength; the ABV is on the bottle.",
          "Try to have something to eat, and a glass of water, before you have alcohol. Alternate alcoholic drinks with water or other non-alcoholic drinks, and try to avoid rounds.",
        ],
      },
      {
        heading: "Know your triggers",
        paragraphs: [
          "Triggers are feelings or circumstances that set off drinking, like stress, boredom or loneliness, the end of the working day, or being offered a drink. Making a list of yours helps you know what to look out for.",
          "Find different things to do when you'd usually drink, such as a new hobby, exercise, or meeting friends for a film or a walk. Avoiding your triggers can be an effective first step.",
        ],
      },
      {
        heading: "If you slip up",
        paragraphs: [
          "Most people who are trying to reduce their drinking have the odd blip along the way. If one week you go over your limit, don't stop trying: next week is a fresh start.",
          "Think about why it happened, and plan how you'll react next time. Notice the benefits as they come, such as feeling better in the mornings and more energetic, and reward yourself for each milestone.",
        ],
      },
    ],
    helps: [
      "Set a limit before you start drinking, and a budget for alcohol.",
      "Have several drink-free days each week.",
      "Choose smaller sizes and lower-strength drinks.",
      "Alternate alcoholic drinks with water or other non-alcoholic drinks.",
      "List your triggers, and plan something else to do at those times.",
      CRISIS,
    ],
    tryThisWeek: [
      "Set a limit before drinking.",
      "Plan your drink-free days.",
      "Swap to smaller, weaker drinks.",
    ],
    ask: "Is it safe for me to cut down on my own, or do I need support?",
    interactive: {
      kind: "timeline",
      title: "Cutting down, step by step",
      steps: [
        { id: "check", when: "Step 1", title: "A safety check", points: ["Shaky or sweaty before your first drink? Get medical advice first.", "Otherwise, you can start cutting down."] },
        { id: "plan", when: "Step 2", title: "Make a plan", points: ["Set a limit and a budget before you drink.", "Tell friends and family you're cutting down."] },
        { id: "swap", when: "Step 3", title: "Smaller and weaker", points: ["Smaller sizes and lower-strength drinks.", "Alternate with water or soft drinks."] },
        { id: "days", when: "Step 4", title: "Drink-free days", points: ["Have several drink-free days each week.", "Fill the gap with a hobby, a walk or a film."] },
        { id: "track", when: "Step 5", title: "Track and notice", points: ["Keep a diary or use an app.", "Notice better mornings and more energy."] },
        { id: "slip", when: "If you slip", title: "Start again", points: ["Most people have the odd blip.", "Next week is a fresh start."] },
      ],
    },
    sources: [NHS_TIPS, NHS_AUD, NHS_DRINKLESS, DW_REDUCE, DW_TRIGGERS, DW_SLIP, RCP_ALCOHOL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What if one week you go over your limit?",
      options: [{ text: "Keep going: next week is a fresh start", right: true }, { text: "Give up on cutting down" }, { text: "Decide it isn't worth trying" }],
      why: "If one week you go over your limit, don't stop trying: next week is a fresh start.",
    },
  },
  {
    id: "alc-support",
    kicker: "Treatment",
    question: "What free help is there for drinking?",
    hook: "Your GP, local alcohol services, helplines and groups. Much of it is free, confidential and open without a referral.",
    short: "A good place to start is a GP, who can suggest support such as local community alcohol services. You can also refer yourself to a local alcohol service. Drinkline is a free, confidential national helpline on 0300 123 1110, and groups such as AA and SMART Recovery meet in most areas.",
    sections: [
      {
        heading: "Where to start",
        paragraphs: [
          "Realising you have a problem with alcohol is the first big step to getting help. A good place to start is with a GP: try to be accurate and honest about how much you drink and any problems it may be causing.",
          "You can also refer yourself to a local alcohol service, without a GP referral. If you feel nervous talking about your drinking, you could take someone along with you, or ask for a telephone appointment.",
        ],
      },
      {
        heading: "What services offer",
        paragraphs: [
          "Alcohol addiction services can help you reduce or stop your drinking. They include support to help you stop, rehabilitation, counselling and CBT, group therapy and self-help.",
          "Treatment can include talking therapies, medical help for withdrawal, medicines to reduce cravings, and help with other parts of life, such as relationships, work or housing. If you're not ready to stop, you'll be supported to reduce your drinking to a safer level.",
        ],
      },
      {
        heading: "Helplines and chat",
        paragraphs: [
          "Drinkline is the national alcohol helpline. If you're worried about your own or someone else's drinking, you can call free in complete confidence on 0300 123 1110, weekdays 9am to 8pm and weekends 11am to 4pm.",
          "Drinkchat is a free online chat with trained advisers, on weekdays from 9am to 2pm. In Wales, DAN is a free bilingual helpline, open 24 hours a day, on 0808 808 2234.",
        ],
      },
      {
        heading: "Groups and longer-term help",
        paragraphs: [
          "Most people will need some help or a long-term plan to stay in control or alcohol-free. Self-help groups such as Alcoholics Anonymous and SMART Recovery are accessible in most areas.",
          "Some people need intensive rehabilitation, in their local community or in a residential service. It is usually for people with medium or high levels of dependence, or for whom other help has not worked.",
        ],
      },
      {
        heading: "Stopping safely",
        paragraphs: [
          "If you have become physically dependent and need to stop drinking completely, stopping overnight could be harmful. Get advice about this, and about any medicine you may need to do it safely.",
          "Most people get support to stop drinking in the community, and medicine can often be taken at home. Some people need a short stay in a medically supported unit.",
        ],
      },
    ],
    helps: [
      "Start with a GP, and be honest about how much you drink.",
      "Refer yourself to a local alcohol service; in England, the NHS service finder can help.",
      "Call Drinkline free on 0300 123 1110 for confidential advice.",
      "Ask about free local support groups, such as AA or SMART Recovery.",
      "If you are physically dependent, get advice before you stop.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Find your local alcohol service.",
      "Call Drinkline for a chat.",
    ],
    ask: "Can I be referred to a local alcohol service?",
    interactive: {
      kind: "flip-cards",
      title: "Where to get help",
      intro: "Turn each card to see when it fits and what it offers.",
      cards: [
        { id: "gp", front: "Your GP", when: "A good place to start", back: "Ask about local alcohol services, support groups and counselling. Be honest about how much you drink." },
        { id: "service", front: "Local alcohol service", when: "You can refer yourself", back: "Support to cut down or stop, counselling, CBT, group therapy and help with withdrawal." },
        { id: "drinkline", front: "Drinkline: 0300 123 1110", when: "Worried about anyone's drinking", back: "Free and confidential. Weekdays 9am to 8pm, weekends 11am to 4pm." },
        { id: "drinkchat", front: "Drinkchat", when: "If you'd rather type", back: "A free online chat with trained advisers, weekdays 9am to 2pm." },
        { id: "aa", front: "Alcoholics Anonymous", when: "Support to get sober", back: "A free self-help group, with a 12-step programme and regular support groups." },
        { id: "smart", front: "SMART Recovery", when: "Building motivation to change", back: "Groups that help you decide if you have a problem, with tools to support recovery." },
        { id: "al-anon", front: "Al-Anon", when: "For family and friends", back: "Support for families and friends of people who drink, whether they're still drinking or not." },
      ],
    },
    sources: [NHS_SUPPORT, NHS_AUD, NHS_FIND, RCP_ALCOHOL, DW_LINES, DW_NOW, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do you need a GP referral to contact a local alcohol service?",
      options: [{ text: "No, you can refer yourself", right: true }, { text: "Yes, always" }, { text: "Only after a hospital stay" }],
      why: "You can also refer yourself to a local alcohol service, without a GP referral.",
    },
  },
  {
    id: "alc-stopping-safely",
    kicker: "Safety",
    question: "How do I stop safely if I drink heavily?",
    hook: "If your body is used to alcohol, stopping overnight can be dangerous. With medical help, it can be done safely.",
    short: "If you drink heavily or are dependent on alcohol, do not stop suddenly without medical advice: it can be very dangerous. A GP or alcohol service can help you plan, and may offer medicine for withdrawal, often taken at home. Call 999 for severe withdrawal symptoms, such as a seizure or seeing things that are not there.",
    sections: [
      {
        heading: "Why stopping suddenly is risky",
        paragraphs: [
          "It can be very dangerous to stop drinking suddenly if you're dependent on alcohol. If you have become physically dependent, stopping overnight could be harmful.",
          "Dependence changes the balance of chemicals in your brain. If you suddenly stop or cut down, your brain overreacts, which can make you anxious, irritable, shaky and sweaty.",
        ],
      },
      {
        heading: "Signs you may need medical help",
        paragraphs: [
          "Mild or moderate withdrawal symptoms that suggest you may need medicine include anxiety after waking, sweating and mild tremors, nausea or retching in the morning, and vomiting.",
          "Withdrawal symptoms begin within 6 to 12 hours of your last drink, and usually last from 3 to 7 days. Some symptoms, such as low mood, anxiety or sleep problems, can last longer.",
        ],
      },
      {
        heading: "What help looks like",
        paragraphs: [
          "Get advice from a GP or alcohol service, including about any medicine you may need to stop safely. If you need medicine, it can often be taken at home or when attending a local service daily.",
          "Some people need a short stay in a medically supported unit, such as an NHS inpatient unit. It is important to slowly reduce your drinking, and safest to do this with help.",
        ],
      },
      {
        heading: "Getting through the first days",
        paragraphs: [
          "Most people feel better within a week of stopping drinking, and the first 48 hours are likely to be the worst. Keep hydrated with plenty of non-alcoholic drinks, but avoid caffeine, and try to eat regularly.",
          "Find ways to relax, like reading, a walk or music, and spend time with friends and family who support you. If you have been prescribed medicine, take it as directed.",
          "Sleep can be hard at first. Try not to drink to help you sleep: your sleep patterns will almost certainly improve as your brain recovers.",
        ],
      },
      {
        heading: "When it is an emergency",
        paragraphs: [
          "Call 999 or go to A&E if you or someone else has severe withdrawal symptoms after stopping drinking, such as shaking visibly, confusion, seeing, hearing or feeling things that are not there, or having a seizure.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance, and bring any medicines you take with you.",
        ],
      },
    ],
    helps: [
      "If you drink heavily, do not stop suddenly: get medical advice first.",
      "Talk to a GP or alcohol service about a safe plan and any medicine you need.",
      "Reduce your drinking slowly, and with help.",
      "In the first days, drink plenty of non-alcoholic drinks, avoid caffeine and eat regularly.",
      "Call 999 for severe withdrawal, such as a seizure, confusion or hallucinations.",
      CRISIS,
    ],
    tryThisWeek: [
      "Talk to your GP before stopping.",
      "Plan the first days with help.",
      "Know when to call 999.",
    ],
    ask: "Is it safe for me to stop suddenly, and will I need medicine?",
    interactive: {
      kind: "scenarios",
      title: "Stopping: what to do?",
      scenarios: [
        {
          id: "morning-shakes",
          situation: "You feel shaky and sick each morning until your first drink, and you want to stop.",
          options: [{ text: "Get medical advice before stopping", best: true }, { text: "Stop completely tonight" }],
          why: "It can be very dangerous to stop drinking suddenly if you're dependent on alcohol. If you get withdrawal symptoms, get medical help before you try to stop drinking.",
        },
        {
          id: "confused",
          situation: "Two days after stopping, someone becomes confused and sees things that are not there.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait for it to pass" }],
          why: "Call 999 or go to A&E if you or someone else has severe withdrawal symptoms after stopping drinking.",
        },
        {
          id: "no-sleep",
          situation: "You've stopped with your doctor's help, and you can't sleep.",
          options: [{ text: "Stick with it: sleep improves", best: true }, { text: "Have a drink to get to sleep" }],
          why: "Try not to drink to help you sleep: your sleep patterns will almost certainly improve as your brain recovers.",
        },
        {
          id: "drive",
          situation: "Someone needs to get to A&E with withdrawal symptoms.",
          options: [{ text: "Ask someone to drive, or call 999", best: true }, { text: "Drive themselves" }],
          why: "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
        },
      ],
    },
    sources: [NHS_AUD, NHS_SUPPORT, RCP_ALCOHOL, DW_WITHDRAW, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "If you drink heavily and want to stop, what comes first?",
      options: [{ text: "Get medical advice", right: true }, { text: "Stop suddenly tonight" }, { text: "Wait until symptoms appear" }],
      why: "It can be very dangerous to stop drinking suddenly if you're dependent on alcohol.",
    },
  },
  {
    id: "alc-medicines",
    kicker: "Medicines",
    question: "Can I drink alcohol with my medicines?",
    hook: "Some medicines and alcohol mix badly. A pharmacist can tell you about yours.",
    short: "Alcohol interacts with some medicines: it can make them less effective or cause dangerous side effects. Always read the leaflet and check with your doctor or pharmacist. Some, such as metronidazole, are best taken with no alcohol at all. Do not stop taking a prescribed medicine without talking to your doctor first.",
    sections: [
      {
        heading: "Why it matters",
        paragraphs: [
          "Alcohol interacts with some medicines. Depending on what you're taking and your health, drinking can make a medicine less effective or lead to dangerous health consequences.",
          "Anyone taking long-term medicine should be careful about drinking. Older adults are particularly vulnerable to side effects from alcohol alongside their medicines.",
        ],
      },
      {
        heading: "Antibiotics",
        paragraphs: [
          "It's unlikely that drinking in moderation will cause problems with the most common antibiotics, but it's a good idea to avoid alcohol when taking medicine or feeling unwell. Some antibiotics cause side effects such as feeling sick or dizzy, which alcohol might make worse.",
          "Avoid alcohol completely while taking metronidazole or tinidazole, and for 48 hours after you stop taking metronidazole, or 72 hours after tinidazole. Together they can cause very unpleasant effects, such as being sick, stomach pain, hot flushes and a fast heartbeat.",
        ],
      },
      {
        heading: "Medicines for mood",
        paragraphs: [
          "Taking some antidepressants with alcohol can make your symptoms worse, or make you feel sleepy or dizzy. With sertraline, it's best not to drink alcohol because it can stop the medicine working properly.",
          "If you are prescribed an antidepressant, check with your doctor or pharmacist before drinking any alcohol. People taking sedative medicines, such as benzodiazepines, should avoid alcohol altogether.",
        ],
      },
      {
        heading: "Painkillers, statins and blood thinners",
        paragraphs: [
          "Drinking within the low-risk guidelines with a standard dose of most over-the-counter painkillers, such as paracetamol and ibuprofen, is unlikely to cause problems. Alcohol should be avoided with prescription painkillers such as tramadol, gabapentin and codeine.",
          "Drinking more than the recommended limits, or binge drinking, while on blood-thinning medicine can raise your risk of bleeding. Your doctor will ask about your drinking before prescribing statins.",
        ],
      },
      {
        heading: "Check, and keep taking it",
        paragraphs: [
          "Always read the patient information leaflet, and ask your GP or pharmacist if you're unsure whether you can drink. Let them know if you notice side effects.",
          "Do not stop taking a prescribed medicine, such as for blood pressure, without talking to your doctor first. If you take medicine for a mental health condition, your GP can advise whether to avoid alcohol.",
        ],
      },
    ],
    helps: [
      "Read the leaflet that comes with every medicine.",
      "Ask your pharmacist or doctor whether you can drink with your medicines.",
      "Avoid alcohol with metronidazole or tinidazole, and for a while afterwards.",
      "If you take an antidepressant, check before drinking any alcohol.",
      "Do not stop a prescribed medicine without talking to your doctor first.",
      CRISIS,
    ],
    tryThisWeek: [
      "Read your medicine leaflets.",
      "Ask your pharmacist about alcohol.",
      "Keep taking your medicines.",
    ],
    ask: "Is it safe for me to drink alcohol with the medicines I take?",
    interactive: {
      kind: "flip-cards",
      title: "Medicines and alcohol",
      intro: "Turn each card to see what the sources say. Always check your own medicines with a pharmacist.",
      cards: [
        { id: "common-antibiotics", front: "Most common antibiotics", when: "A short course", back: "Drinking in moderation is unlikely to cause problems, but it's best to avoid alcohol when unwell." },
        { id: "metronidazole", front: "Metronidazole or tinidazole", when: "Antibiotics", back: "Avoid alcohol completely, and for 48 or 72 hours after you stop taking them." },
        { id: "antidepressants", front: "Antidepressants", when: "For depression or anxiety", back: "Alcohol can make symptoms worse or make you sleepy or dizzy. Check before drinking." },
        { id: "sedatives", front: "Sedative medicines", when: "Such as benzodiazepines", back: "Avoid alcohol altogether." },
        { id: "otc", front: "Paracetamol or ibuprofen", when: "A standard dose", back: "Within the low-risk guidelines, unlikely to cause problems. Read the leaflet." },
        { id: "prescription-pain", front: "Prescription painkillers", when: "Such as tramadol or codeine", back: "Alcohol should be avoided: together they can cause severe drowsiness." },
        { id: "blood-thinners", front: "Blood thinners", when: "Such as after a stroke", back: "Drinking over the limits, or binge drinking, can raise your risk of bleeding." },
      ],
    },
    sources: [DW_MEDS, NHS_ANTIBIOTICS, NHS_ANTIDEP, NHS_SERTRALINE, RCP_ALCOHOL, SA_RISKS, DW_DEP, DW_DFD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How long after stopping metronidazole should you still avoid alcohol?",
      options: [{ text: "48 hours", right: true }, { text: "No time at all" }, { text: "One hour" }],
      why: "Avoid alcohol completely while taking metronidazole or tinidazole, and for 48 hours after you stop taking metronidazole.",
    },
  },
  {
    id: "alc-social",
    kicker: "Living well",
    question: "How do I enjoy a social life while drinking less?",
    hook: "You don't need to drink to take part. A plan, a ready answer and a good alcohol-free drink make it easier.",
    short: "Pressure to drink can be subtle: a top-up you didn't ask for, a round, a friend asking you to stay for one more. Setting a limit before you go, buying your own drinks and choosing low or alcohol-free options can help. Saying no firmly, and planning what to say, gets easier with practice.",
    sections: [
      {
        heading: "Spotting the pressure",
        paragraphs: [
          "Any situation where you feel pressured to drink, or to drink more than you intended, is peer pressure, and it can affect us at any age. It is often subtle, and subtle pressure tends to lead people to drink more.",
          "Common examples are being in a round and feeling you need to keep up, a friend pleading with you to stay for one more, drinks being topped up without asking, or being teased for not drinking.",
        ],
      },
      {
        heading: "Plan before you go",
        paragraphs: [
          "Decide how much you're comfortable drinking before you go, and remind yourself why. Eat something first: when you haven't eaten, alcohol enters your bloodstream more quickly.",
          "If a partner or friend tends to encourage you, talk to them before the situation comes up. If people know beforehand that you're not drinking, they may be less likely to pressure you.",
        ],
      },
      {
        heading: "In the moment",
        paragraphs: [
          "Thinking ahead and preparing a response can help. There's no need to be impolite, but being firm works better, and the first few times are usually the hardest.",
          "Buy your own drinks, one at a time, rather than joining rounds. A simple line, such as \"I'm just taking it easy tonight\", is usually enough, and you don't owe anyone an explanation.",
        ],
      },
      {
        heading: "Low and alcohol-free drinks",
        paragraphs: [
          "There are more alcohol-free and low-alcohol beers, wines and spirits than ever, so you can join in and not feel left out. Swap rather than add: they only cut your units if they replace a usual drink.",
          "They aren't for everyone. Most still contain a little alcohol, so they are not recommended in pregnancy, for under-18s, or for anyone advised to avoid alcohol completely.",
        ],
      },
      {
        heading: "Other ways to meet",
        paragraphs: [
          "Going for drinks is not the only way to see friends. You could watch a film, meet up for breakfast, grab a coffee and go for a walk, or sign up for a class together.",
          "Choosing not to drink, or to drink less, doesn't mean you're missing out. It can help you be more present in the moment and more energised the next day.",
        ],
      },
    ],
    helps: [
      "Set a limit before you go, and eat first.",
      "Buy your own drinks rather than joining rounds.",
      "Prepare what you'll say, and say no firmly and politely.",
      "Alternate with water, soft drinks or alcohol-free options.",
      "Suggest plans that aren't built around drinking, like a film or a walk.",
      CRISIS,
    ],
    tryThisWeek: [
      "Set a limit before you go.",
      "Skip the rounds.",
      "Plan a drink-free meet-up.",
    ],
    ask: "Would cutting down help my health, and what should I aim for?",
    interactive: {
      kind: "scenarios",
      title: "Saying no, kindly",
      scenarios: [
        {
          id: "top-up",
          situation: "A friend tops up your glass without asking.",
          options: [{ text: "Say a firm, polite no", best: true }, { text: "Drink it to be polite" }],
          why: "There's no need to be impolite, but being firm works better, and the first few times are usually the hardest.",
        },
        {
          id: "rounds",
          situation: "Your colleagues are buying rounds.",
          options: [{ text: "Buy your own drinks, one at a time", best: true }, { text: "Keep pace with the round" }],
          why: "Buy your own drinks, one at a time, rather than joining rounds.",
        },
        {
          id: "hungry",
          situation: "You're heading straight out after work, and you're hungry.",
          options: [{ text: "Eat something first", best: true }, { text: "Start drinking straight away" }],
          why: "When you haven't eaten, alcohol enters your bloodstream more quickly.",
        },
        {
          id: "friends",
          situation: "You want to see friends but not drink.",
          options: [{ text: "Suggest a film, breakfast or a walk", best: true }, { text: "Stay in on your own" }],
          why: "Going for drinks is not the only way to see friends.",
        },
      ],
    },
    sources: [DW_PEER, DW_AFTERWORK, DW_LOW_NO, NHS_DRINKLESS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When do low or alcohol-free drinks cut your units?",
      options: [{ text: "When they replace a usual drink", right: true }, { text: "When added on top of your usual drinks" }, { text: "Always, whatever else you drink" }],
      why: "Swap rather than add: they only cut your units if they replace a usual drink.",
    },
  },
  {
    id: "alc-family",
    kicker: "Family and friends",
    question: "What can I do if I'm worried about someone's drinking?",
    hook: "You can't make someone change, but you can listen, offer help and look after yourself. There is support for you too.",
    short: "Pick a calm time when neither of you has been drinking, listen without judgement and have information about support ready if they ask. They need to want to change, and it can take time. Look after yourself too: Al-Anon, Adfam and Drinkline support families and friends.",
    sections: [
      {
        heading: "Signs to notice",
        paragraphs: [
          "Signs include being secretive about how much alcohol they drink or buy, not being able to stop at one or two drinks, appearing drunk more often, and losing interest in regular activities. They may seem tired, unwell or irritable, feel anxious or low, or have trouble sleeping.",
          "If you're worried, you're not alone: in 2024, almost three in ten UK adults felt concerned about someone else's drinking in the last year.",
        ],
      },
      {
        heading: "Having the conversation",
        paragraphs: [
          "Choose a time when you're both calm and neither of you has been drinking, somewhere quiet. Listen without judgement and ask open questions: the more you listen, the more comfortable someone will feel to open up.",
          "Focus on how you feel, rather than labels like \"alcoholic\" or making demands. If it goes off track, try not to raise your voice; it may be best to leave it for that day and return to it later.",
        ],
      },
      {
        heading: "What you can and can't do",
        paragraphs: [
          "The person has to want to stop or reduce their drinking, and change can take time. It's common for someone to stop for a long time and then start again; it doesn't mean they or you have failed.",
          "If someone has withdrawal symptoms, like shaking, sweating or nausea, before their first drink of the day, it can be dangerous to stop too quickly. They should get medical help before they stop.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "You might feel angry, embarrassed or upset, and it's a natural way to feel. Talking to someone you trust, or a confidential support line, can help, and so can making time for things you enjoy.",
          "Decide in advance what help you're comfortable giving, and stick to it. If someone's drinking is putting you or someone you know in danger, speak to someone you trust, and call 999 if you are in immediate danger.",
        ],
      },
      {
        heading: "Support for families",
        paragraphs: [
          "Al-Anon Family Groups support the families and friends of people who drink, whether they're still drinking or not. Adfam is a national charity working with families affected by drugs and alcohol.",
          "Drinkline, on 0300 123 1110, also helps people worried about someone else's drinking. The Nacoa helpline, on 0800 358 3456, supports children of alcohol-dependent parents.",
        ],
      },
    ],
    helps: [
      "Pick a calm moment when neither of you has been drinking.",
      "Listen without judgement and ask open questions.",
      "Have information about support ready in case they ask.",
      "Set boundaries, and make time for yourself.",
      "Contact Al-Anon, Adfam or Drinkline for support for you.",
      CRISIS,
    ],
    tryThisWeek: [
      "Plan a calm time to talk.",
      "Have support details ready.",
      "Make time for yourself.",
    ],
    ask: "What support is there for my family?",
    interactive: {
      kind: "scenarios",
      title: "Talking about it",
      scenarios: [
        {
          id: "drunk-now",
          situation: "They come home drunk, and you want to raise it right now.",
          options: [{ text: "Wait for a calm time when no one's drinking", best: true }, { text: "Have it out tonight" }],
          why: "Choose a time when you're both calm and neither of you has been drinking.",
        },
        {
          id: "defensive",
          situation: "They get defensive and angry.",
          options: [{ text: "Stay calm and come back to it later", best: true }, { text: "Raise your voice to be heard" }],
          why: "If it goes off track, try not to raise your voice; it may be best to leave it for that day and return to it later.",
        },
        {
          id: "shaky",
          situation: "They want to stop, but they shake each morning before a drink.",
          options: [{ text: "Encourage them to get medical help first", best: true }, { text: "Urge them to stop tonight" }],
          why: "It can be dangerous to stop too quickly. They should get medical help before they stop.",
        },
        {
          id: "worn-out",
          situation: "You feel worn out by worrying.",
          options: [{ text: "Talk to someone, or contact Al-Anon", best: true }, { text: "Keep it all to yourself" }],
          why: "Talking to someone you trust, or a confidential support line, can help.",
        },
      ],
    },
    sources: [DW_WORRIED, DW_TALK, DW_LOOK_AFTER, DW_PARENT, RCP_ALCOHOL, NHS_SUPPORT, NHS_AUD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When is the best time to talk about someone's drinking?",
      options: [{ text: "When you're both calm and no one has been drinking", right: true }, { text: "While they are drunk" }, { text: "In a pub" }],
      why: "Choose a time when you're both calm and neither of you has been drinking.",
    },
  },
  {
    id: "alc-after-illness",
    kicker: "After an illness",
    question: "Can I drink after a stroke, heart problem or other illness?",
    hook: "After a serious illness, alcohol can slow recovery and mix badly with new medicines. Ask your team what is right for you.",
    short: "After a stroke or TIA, get individual advice about alcohol from a healthcare professional; many people can drink, but staying within the guidelines may matter more. Cutting down on alcohol helps lower the risk of another stroke and of heart problems. Some people, such as those with a liver condition, may be advised to drink less or not at all.",
    sections: [
      {
        heading: "Ask for your own advice",
        paragraphs: [
          "If you have had a stroke or TIA, it's a good idea to get individual advice about alcohol from a healthcare professional. Your doctor can advise you if and when you can drink alcohol again.",
          "Some people may be advised by their doctor to drink less than the guidelines or not at all, such as people with a liver condition. Some medicines interact with alcohol, so ask your pharmacist or doctor.",
        ],
      },
      {
        heading: "Lowering the risk of it happening again",
        paragraphs: [
          "After a stroke or TIA you're more at risk of another stroke, but there are things you can do to lower the risk, including cutting down on alcohol, quitting smoking, eating a balanced diet and exercising.",
          "Drinking too much raises your blood pressure, which contributes to around half of all strokes in the UK, and can raise cholesterol and trigger atrial fibrillation. Always avoid binge drinking, as this increases the risk of a heart attack.",
        ],
      },
      {
        heading: "How alcohol can slow recovery",
        paragraphs: [
          "After a stroke, alcohol could make fatigue, poor balance or speech problems worse. It can also affect memory and thinking, make sleep problems worse and make falls more likely.",
          "Low mood is common after a stroke and is often a reason people drink, but alcohol can make you feel worse. Talking to someone, and other ways to unwind such as exercise or relaxation, can help instead.",
        ],
      },
      {
        heading: "Other illnesses",
        paragraphs: [
          "If you're having treatment for cancer, drinking alcohol could interfere with it. Speak to the health professional providing your treatment.",
          "With alcohol-related liver disease, the aim of treatment is usually to stop drinking completely, whatever the stage. If you regularly drink too much, it can be very dangerous to stop suddenly, so get medical help before you try.",
        ],
      },
      {
        heading: "Medicines after an illness",
        paragraphs: [
          "Drinking more than the recommended limits, or binge drinking, while on blood-thinning medicine can raise your risk of bleeding. Check with your GP or pharmacist whether you can drink with your medicines, and read the leaflet.",
          "Never stop taking prescribed medicine, such as for blood pressure, without consulting your doctor. Keep taking medicines for conditions such as high blood pressure or diabetes, and talk to a GP if you have any problems with them.",
        ],
      },
    ],
    helps: [
      "Ask your stroke nurse, practice nurse or GP for advice about alcohol.",
      "Keep within the low-risk guidelines, and avoid binge drinking.",
      "Check with a pharmacist whether alcohol mixes with your medicines.",
      "If you feel low, talk to someone or your GP rather than drinking.",
      "If you drink heavily, get medical help before you stop.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask your team about alcohol.",
      "Check your medicines with a pharmacist.",
      "Talk to someone if you feel low.",
    ],
    ask: "Is it safe for me to drink after my illness, and how much?",
    interactive: {
      kind: "scenarios",
      title: "After an illness",
      scenarios: [
        {
          id: "family-meal",
          situation: "You've had a stroke and wonder about a drink at a family meal.",
          options: [{ text: "Ask your doctor first", best: true }, { text: "Assume it's fine now you're home" }],
          why: "Your doctor can advise you if and when you can drink alcohol again.",
        },
        {
          id: "blood-thinner",
          situation: "You take a blood thinner and are going to a party.",
          options: [{ text: "Stay within the guidelines; no binge drinking", best: true }, { text: "Make up for the weeks you missed" }],
          why: "Drinking more than the recommended limits, or binge drinking, while on blood-thinning medicine can raise your risk of bleeding.",
        },
        {
          id: "low",
          situation: "You've felt low since your illness and want a drink to cope.",
          options: [{ text: "Talk to someone, or your GP", best: true }, { text: "Drink to lift your mood" }],
          why: "Low mood is common after a stroke and is often a reason people drink, but alcohol can make you feel worse.",
        },
        {
          id: "cancer",
          situation: "You're having cancer treatment.",
          options: [{ text: "Ask your treatment team about alcohol", best: true }, { text: "Carry on as before without asking" }],
          why: "If you're having treatment for cancer, drinking alcohol could interfere with it.",
        },
      ],
    },
    sources: [SA_ALCOHOL, SA_RISKS, NHS_STROKE_CAUSES, NHS_CHD_PREV, DW_CANCER, NHS_ARLD, DW_DFD, NHS_AUD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "After a stroke, who is best placed to advise you about drinking?",
      options: [{ text: "A healthcare professional, such as your doctor", right: true }, { text: "No one; it makes no difference" }, { text: "Only a friend" }],
      why: "If you have had a stroke or TIA, it's a good idea to get individual advice about alcohol from a healthcare professional.",
    },
  },
  {
    id: "alc-urgent",
    kicker: "Urgent help",
    question: "When is drinking an emergency?",
    hook: "Severe withdrawal, alcohol poisoning and some liver signs need 999. So does feeling you cannot keep yourself safe.",
    short: "Call 999 or go to A&E for severe alcohol withdrawal, such as a seizure, confusion or seeing things that are not there, or if you think someone has alcohol poisoning. For urgent mental health help, call 111 and select the mental health option, call Samaritans free on 116 123, or text SHOUT to 85258. Call 999 or go to A&E if you cannot keep yourself safe.",
    sections: [
      {
        heading: "Severe withdrawal",
        paragraphs: [
          "Call 999 or go to A&E if you or someone else has severe withdrawal symptoms after stopping drinking. These include shaking visibly, being unusually restless or upset, confusion, seeing, hearing or feeling things that are not there, and having a seizure.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance, and bring any medicines you take with you.",
        ],
      },
      {
        heading: "Alcohol poisoning",
        paragraphs: [
          "Call 999 if you think someone has alcohol poisoning, has had a seizure, has lost consciousness or has stopped breathing. Signs include confusion, slurring or being unable to speak, being unable to stand, being sick, slow or irregular breathing, and pale or blue-tinged skin.",
          "Stay with them, sit them up if they're awake, or put them in the recovery position if they've passed out, and keep them warm. Do not give them more alcohol, food or coffee, and do not try to make them sick.",
        ],
      },
      {
        heading: "Liver warning signs",
        paragraphs: [
          "If you're worried alcohol may be affecting your liver, call 999 or go to A&E if you vomit blood or your poo is black and sticky, or you have tummy pain, difficulty breathing, sudden confusion or difficulty staying awake.",
        ],
      },
      {
        heading: "If you're struggling to cope",
        paragraphs: [
          "A mental health emergency should be taken as seriously as a physical one. You will not be wasting anyone's time. Call 999 or go to A&E if you do not feel you can keep yourself or someone else safe.",
          "For urgent help that is not an emergency, get help from 111 online or call 111 and select the mental health option. You can also call a GP and ask for an emergency appointment, or contact your mental health crisis team if you have one.",
          "Samaritans are there any time, day or night: call free on 116 123. If you'd rather not talk, text \"SHOUT\" to 85258, 24 hours a day. Stay away from drugs and alcohol, and be around other people.",
        ],
      },
      {
        heading: "Not urgent, but important",
        paragraphs: [
          "See a GP or an alcohol support service if you're worried about your drinking, or get anxiety, difficulty sleeping, sweating or sickness when you try to stop. If you drink heavily, do not stop suddenly without medical advice.",
          "If someone else's drinking is putting you or someone you know in danger, speak to someone you trust, and call 999 if you are in immediate danger.",
        ],
      },
    ],
    helps: [
      "Call 999 for severe withdrawal, suspected alcohol poisoning, a seizure or loss of consciousness.",
      "Do not drive yourself to A&E: ask someone to drive you, or call an ambulance.",
      "Stay with someone who has drunk too much, and keep them warm.",
      "For urgent mental health help, call 111 and select the mental health option.",
      "Call Samaritans free on 116 123, or text \"SHOUT\" to 85258.",
      "If you cannot keep yourself safe, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Know when to call 999.",
      "Use 111 for urgent mental health help.",
      "Call Samaritans on 116 123.",
    ],
    ask: "What should I do if I get withdrawal symptoms?",
    interactive: {
      kind: "flip-cards",
      title: "Who to call",
      intro: "Turn each card to see when to use it. All of these are free.",
      cards: [
        { id: "999-body", front: "999 or A&E", when: "Severe withdrawal or alcohol poisoning", back: "A seizure, confusion, hallucinations, loss of consciousness or slow breathing. Do not drive yourself." },
        { id: "999-mind", front: "999 or A&E", when: "If you cannot keep yourself safe", back: "A mental health emergency is as serious as a physical one. You will not be wasting anyone's time." },
        { id: "111", front: "NHS 111", when: "Urgent help, not an emergency", back: "Call 111 and select the mental health option, or use 111 online." },
        { id: "samaritans", front: "Samaritans: 116 123", when: "Any time, day or night", back: "Free from any phone. They listen, and won't judge you or tell you what to do." },
        { id: "shout", front: "Shout: text SHOUT to 85258", when: "If you'd rather not talk", back: "A free, confidential text service, open 24 hours a day." },
        { id: "gp", front: "GP or alcohol service", when: "Worried, but not urgent", back: "Help to cut down or stop safely, and with withdrawal symptoms." },
      ],
    },
    sources: [NHS_AUD, NHS_POISONING, NHS_ARLD, NHS_URGENT, NHS_SUICIDAL, EMM_URGENT, SAM_CONTACT, SHOUT, RCP_ALCOHOL, NHS_SUPPORT],
    quiz: {
      question: "What should you do if someone has a seizure after stopping drinking?",
      options: [{ text: "Call 999", right: true }, { text: "Let them sleep it off" }, { text: "Give them a drink" }],
      why: "Call 999 or go to A&E if you or someone else has severe withdrawal symptoms after stopping drinking.",
    },
  },
];
