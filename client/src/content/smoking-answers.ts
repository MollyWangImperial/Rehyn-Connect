import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Quitting smoking page's pieces (content/library-conditions/mind-extra.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS website (its Quit smoking
// pages, the varenicline medicine pages and NHS Better Health's quit smoking guides) and Rethink Mental Illness.
// mind.org.uk was not tried (it blocks automated reading) and the Royal College of Psychiatrists has no public
// smoking page today, so neither is cited. Safe messaging throughout: neutral, kind and non-judgemental, with no
// blame for slips. Every answer ends its "What helps" list with the crisis routes exactly as the NHS gives them
// (111 mental health option, Samaritans 116 123, Shout 85258, 999 or A&E). Nothing here suggests stopping or
// changing a medicine without the doctor: people who take antidepressants or antipsychotics are told, as the NHS
// and Rethink say, to talk to their GP or psychiatrist before they stop smoking. General information only; it never
// replaces what a person's own GP, pharmacist or stop smoking adviser tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const bh = (label: string, path: string): LearnSource => ({ label: `NHS Better Health: ${label}`, url: `https://www.nhs.uk/better-health/quit-smoking/${path}` });

const NHS_SERVICES = nhs("NHS stop smoking services help you quit", "live-well/quit-smoking/nhs-stop-smoking-services-help-you-quit/");
const NHS_ECIG = nhs("Using e-cigarettes to stop smoking", "live-well/quit-smoking/using-e-cigarettes-to-stop-smoking/");
const NHS_MH = nhs("Stopping smoking for your mental health", "live-well/quit-smoking/stopping-smoking-mental-health-benefits/");
const NHS_PASSIVE = nhs("Passive smoking", "live-well/quit-smoking/passive-smoking-protect-your-family-and-friends/");
const V_ABOUT = nhs("About varenicline", "medicines/varenicline/about-varenicline/");
const V_WHO = nhs("Who can and cannot take varenicline", "medicines/varenicline/who-can-and-cannot-take-varenicline/");
const V_HOW = nhs("How and when to take varenicline", "medicines/varenicline/how-and-when-to-take-varenicline/");
const V_SIDE = nhs("Side effects of varenicline", "medicines/varenicline/side-effects-of-varenicline/");
const V_OTHER = nhs("Taking varenicline with other medicines and herbal supplements", "medicines/varenicline/taking-varenicline-with-other-medicines-and-herbal-supplements/");
const V_Q = nhs("Common questions about varenicline", "medicines/varenicline/common-questions-about-varenicline/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const BH_QUIT = bh("Quit smoking", "");
const BH_BENEFITS = bh("Benefits of quitting smoking", "why-quit-smoking/benefits-of-quitting-smoking/");
const BH_STRESS = bh("The truth about smoking, stress and mental health", "why-quit-smoking/the-truth-about-smoking-stress-and-mental-health/");
const BH_IMPACT = bh("Understanding the true impact of smoking", "why-quit-smoking/understanding-the-true-impact-of-smoking/");
const BH_READY = bh("Ready to quit smoking", "ready-to-quit-smoking/");
const BH_WHAT = bh("What could happen when you quit smoking", "ready-to-quit-smoking/what-could-happen-when-you-quit-smoking/");
const BH_COLD = bh("Should I quit smoking cold turkey?", "ready-to-quit-smoking/should-i-quit-smoking-cold-turkey/");
const BH_OPTIONS = bh("Explore your support options", "ready-to-quit-smoking/explore-your-support-options/");
const BH_LOCAL = bh("Find your local Stop Smoking Service", "ready-to-quit-smoking/find-your-local-stop-smoking-service/");
const BH_PRODUCTS = bh("Find the best stop-smoking products for you", "ready-to-quit-smoking/find-the-best-stop-smoking-products-for-you/");
const BH_NRT = bh("Quit smoking with nicotine replacement therapies (NRTs)", "ready-to-quit-smoking/quit-with-nicotine-replacement-therapies-nrt/");
const BH_MEDS = bh("Quit smoking with nicotine-free medicines", "ready-to-quit-smoking/quit-with-nicotine-free-medicines/");
const BH_VAPE = bh("Vaping to quit smoking", "ready-to-quit-smoking/vaping-to-quit-smoking/");
const BH_VAPE_MYTHS = bh("Vaping myths and facts", "ready-to-quit-smoking/vaping-to-quit-smoking/vaping-myths-and-the-facts/");
const BH_QUIT_VAPE = bh("How to quit vaping", "ready-to-quit-smoking/vaping-to-quit-smoking/how-to-quit-vaping/");
const BH_WITHDRAWAL = bh("Managing nicotine withdrawal symptoms", "staying-smoke-free/managing-nicotine-withdrawal-symptoms/");
const BH_TRIGGERS = bh("Understand your smoking triggers and cravings", "staying-smoke-free/understand-your-smoking-triggers-and-cravings/");
const BH_RELAPSE = bh("Get back on track after a smoking relapse", "staying-smoke-free/get-back-on-track-after-a-smoking-relapse/");
const BH_HELP = bh("How to help someone quit smoking", "help-others-quit/how-to-help-someone-quit-smoking/");
const BH_UK = bh("UK quit smoking services", "uk-quit-smoking-services/");

const RETHINK: LearnSource = { label: "Rethink Mental Illness: Smoking and mental health", url: "https://www.rethink.org/advice-and-information/living-with-mental-illness/health-wellbeing-and-neurodiversity/smoking-and-mental-health-understanding-the-link-and-finding-support/" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you do not feel you can keep yourself safe.";

export const smokingAnswers: LearnArticle[] = [
  {
    id: "smoke-why-quit",
    kicker: "Your body",
    question: "What happens to my body when I stop smoking?",
    hook: "Within 20 minutes your pulse starts to settle. Within a year your risk of heart attack has halved. It is never too late to quit.",
    short: "Your body starts to repair itself from the day you stop. Within days your taste and smell improve and breathing gets easier, and over the years your risks of cancer, lung disease, heart disease and stroke fall a long way. Quitting will improve your health whatever your age and no matter how long you have smoked.",
    sections: [
      {
        heading: "The first hours and days",
        paragraphs: [
          "Every time you smoke a cigarette, your body is flooded with thousands of chemicals, many of which are poisonous. The day you stop, your body starts clearing itself of them and the repair process begins.",
          "After 20 minutes, your pulse rate is already starting to return to normal. After 8 hours, your oxygen levels are recovering, and the harmful carbon monoxide level in your blood has halved.",
          "After 48 hours, your carbon monoxide level has dropped to that of a non-smoker, your lungs are clearing out mucus and your senses of taste and smell are improving. After 72 hours, breathing may feel easier as your bronchial tubes start to relax, and your energy is increasing.",
        ],
      },
      {
        heading: "The first weeks and months",
        paragraphs: [
          "After 2 to 12 weeks, blood is pumping through to your heart and muscles much better, because your circulation has improved. That makes physical activity easier.",
          "After 3 to 9 months, coughs, wheezing and breathing problems improve as your lung function increases by up to 10%.",
        ],
      },
      {
        heading: "The years ahead",
        paragraphs: [
          "Your longer-term risks of cancer, lung disease, heart disease and stroke will be significantly reduced. After 1 year, your risk of heart attack halves compared with a smoker's. After 10 years, your risk of death from lung cancer falls to half that of a smoker.",
          "After 15 years, your risk of heart attack falls to the same as someone who has never smoked. You will also be less likely to develop type 2 diabetes, bone disease including osteoporosis, eye disease and dementia.",
        ],
      },
      {
        heading: "Skin, teeth and money",
        paragraphs: [
          "More oxygen gets to your skin, making it brighter, and your teeth will no longer be stained by tar.",
          "The NHS says the average smoker can save around £49 a week by quitting. That is over £2,500 a year.",
        ],
      },
      {
        heading: "A few changes to expect",
        paragraphs: [
          "As your lungs clear out the toxins and mucus built up from smoking, you may cough more or have more phlegm for a while. This is a good sign that your body is cleaning out your airways.",
          "Some people also get constipation, dizziness or mouth ulcers after quitting, though these are less common and only temporary. Rethink suggests speaking to your GP if you are concerned about any side effects.",
        ],
      },
    ],
    helps: [
      "Remember that it is never too late: quitting improves your health whatever your age and however long you have smoked.",
      "Notice the early changes, such as better taste and smell, easier breathing and more energy.",
      "Use the free NHS Quit Smoking app to track your progress and see how much you are saving.",
      "Speak to your GP if you are concerned about any side effects after you stop.",
      CRISIS,
    ],
    tryThisWeek: [
      "Remind yourself it is never too late.",
      "Notice one early change in your body.",
      "Download the NHS Quit Smoking app.",
    ],
    ask: "What health changes could I expect if I stopped smoking now?",
    interactive: {
      kind: "timeline",
      title: "What changes when you quit",
      steps: [
        { id: "20-minutes", when: "20 minutes", title: "Your pulse settles", points: ["Your pulse rate starts to return to normal."] },
        { id: "8-hours", when: "8 hours", title: "Oxygen recovers", points: ["Carbon monoxide in your blood has halved.", "Your oxygen levels are recovering."] },
        { id: "48-hours", when: "48 hours", title: "Taste and smell return", points: ["Carbon monoxide drops to a non-smoker's level.", "Your lungs are clearing out mucus."] },
        { id: "72-hours", when: "72 hours", title: "Easier breathing", points: ["Your bronchial tubes start to relax.", "Your energy is increasing."] },
        { id: "2-12-weeks", when: "2 to 12 weeks", title: "Better circulation", points: ["Blood reaches your heart and muscles better.", "Physical activity gets easier."] },
        { id: "3-9-months", when: "3 to 9 months", title: "Stronger lungs", points: ["Coughs and wheezing improve.", "Lung function rises by up to 10%."] },
        { id: "1-year", when: "1 year", title: "Heart attack risk halves", points: ["Compared with a smoker's risk."] },
        { id: "10-years", when: "10 years", title: "Lung cancer risk halves", points: ["Your risk of death from lung cancer is half a smoker's."] },
      ],
    },
    sources: [BH_WHAT, BH_BENEFITS, BH_QUIT, BH_IMPACT, RETHINK, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How soon does your pulse rate start to return to normal after you stop?",
      options: [{ text: "After 20 minutes", right: true }, { text: "After a year" }, { text: "It never fully recovers" }],
      why: "After 20 minutes, your pulse rate is already starting to return to normal.",
    },
  },
  {
    id: "smoke-nicotine",
    kicker: "Nicotine",
    question: "Why is it so hard to stop, and what will withdrawal feel like?",
    hook: "Nicotine is what keeps you smoking, but it is not what does most of the damage. Withdrawal is real, and it passes.",
    short: "Nicotine is an addictive drug and your body gets used to having it, so stopping can leave you irritable, restless, low or craving a cigarette. These withdrawal symptoms are usually strongest in the first week and last 3 to 4 weeks on average. Nicotine itself is not what causes most of the harm from smoking, which is why nicotine products can be used safely to help you quit.",
    sections: [
      {
        heading: "How nicotine hooks you",
        paragraphs: [
          "Nicotine is a drug that changes how your brain works. Over time, your brain becomes dependent on it to feel normal, which is why quitting can be so hard.",
          "Dependence also develops when smoking becomes linked to your daily routines. Your body and mind may start expecting a cigarette at certain times, like when you wake up or wait for the bus.",
        ],
      },
      {
        heading: "Nicotine is not the main harm",
        paragraphs: [
          "Nicotine is highly addictive, but it is the many other toxic chemicals in cigarettes, such as tar, that cause almost all the harm from smoking.",
          "Nicotine itself does not cause cancer, lung disease, heart disease or stroke. It has been used safely for many years in medicines like nicotine replacement therapy.",
        ],
      },
      {
        heading: "What withdrawal feels like",
        paragraphs: [
          "Common withdrawal symptoms include strong urges to smoke, trouble concentrating, feeling restless, trouble sleeping, and feeling irritable, anxious, tense or low in mood.",
          "They can be mild for some people and more difficult for others. They are also a sign that your body is starting to heal and recover from the effects of smoking.",
        ],
      },
      {
        heading: "How long it lasts",
        paragraphs: [
          "Withdrawal can start within a few hours of your last cigarette. Symptoms are usually strongest during the first week, especially in the first 3 days.",
          "On average, symptoms last 3 to 4 weeks, though some people feel them for longer, sometimes a few months. Cravings are hardest in the first 28 days, and after that they often start to get easier.",
        ],
      },
      {
        heading: "Why willpower alone is tough",
        paragraphs: [
          "Going cold turkey, with willpower alone, can be really tough because your body may have become dependent on nicotine. If you smoke within 30 minutes of waking, it could mean you have a stronger dependence.",
          "Stop smoking products and expert support can help you stay on track. Even 1 cigarette can get you stuck in the cycle of cravings and withdrawal again.",
        ],
      },
    ],
    helps: [
      "Remember that withdrawal symptoms do not last forever, and the first few days are usually the hardest.",
      "Use stop smoking products to ease cravings and withdrawal, rather than relying on willpower alone.",
      "Keep reminding yourself why you want to quit.",
      "Avoid even a single puff, as 1 cigarette can restart the cycle of cravings and withdrawal.",
      CRISIS,
    ],
    tryThisWeek: [
      "Write down why you want to quit.",
      "Ask about stop smoking products.",
      "Avoid even a single puff.",
    ],
    ask: "How dependent on nicotine am I, and which products would help with withdrawal?",
    interactive: {
      kind: "signs",
      title: "Withdrawal signs you may notice",
      intro: "Tick any you notice. They are common nicotine withdrawal symptoms, and they pass.",
      signs: ["Strong urges to smoke", "Trouble concentrating", "Feeling restless", "Trouble sleeping", "Feeling irritable or easily upset", "Feeling anxious or tense", "Feeling low in mood", "Feeling hungrier than usual"],
      after: "Symptoms are usually strongest in the first week and last 3 to 4 weeks on average. A GP or local Stop Smoking Service can tell you about products that ease them.",
      copyHeading: "Withdrawal symptoms I have noticed",
    },
    sources: [BH_WITHDRAWAL, BH_COLD, BH_MEDS, BH_VAPE_MYTHS, BH_TRIGGERS, BH_WHAT, NHS_ECIG, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "On average, how long do nicotine withdrawal symptoms last?",
      options: [{ text: "3 to 4 weeks", right: true }, { text: "A day or two" }, { text: "For the rest of your life" }],
      why: "On average, symptoms last 3 to 4 weeks, though some people feel them for longer, sometimes a few months.",
    },
  },
  {
    id: "smoke-mental-health",
    kicker: "Mind and mood",
    question: "Does smoking really help with stress, and will quitting make my mood worse?",
    hook: "A cigarette seems to ease stress, but mostly it eases the craving it caused. After the first weeks, most people feel calmer.",
    short: "Smoking can feel relaxing, but the relief mostly comes from easing the craving for nicotine, and smoking actually increases anxiety and tension. After the withdrawal stage, people who quit have lower anxiety, depression and stress, and a better mood. If you take medicines for your mental health, talk to your GP or psychiatrist before you stop, as the dose may need checking.",
    sections: [
      {
        heading: "Why it feels like smoking helps",
        paragraphs: [
          "Smoking interferes with certain chemicals in the brain. When smokers have not had a cigarette for a while, the craving for another makes them feel irritable and anxious.",
          "Lighting up relieves these feelings for a short time, so smokers link the better mood with smoking. In fact, it is the effects of smoking itself that are likely to have caused the anxiety in the first place.",
          "Many smokers mistake withdrawal symptoms for everyday stress and smoke another cigarette. This cycle keeps you hooked and makes stress harder to manage in the long run.",
        ],
      },
      {
        heading: "What changes when you stop",
        paragraphs: [
          "Studies show that when people stop smoking, anxiety, depression and stress levels are lower, and quality of life and positive mood improve.",
          "Evidence suggests the effect of stopping smoking on symptoms of anxiety and depression can equal that of taking antidepressants. It can take as little as 6 weeks to start feeling the mental health benefits.",
        ],
      },
      {
        heading: "The first few weeks",
        paragraphs: [
          "In the first few weeks after stopping, you could feel more irritable, find it hard to concentrate or feel restless. But studies have shown that you are not likely to have a worsening in your mood long term.",
          "It usually takes 28 days for cravings to subside. People who quit often feel less anxious once they get past the nicotine cravings.",
        ],
      },
      {
        heading: "If you have a mental health condition",
        paragraphs: [
          "People with mental health problems, including anxiety, depression or schizophrenia, are much more likely to smoke and tend to smoke more heavily. On average they live 10 to 20 years less than people without mental health problems, and smoking plays a major role in this difference.",
          "Stopping can feel harder, and things like boredom or smoking being common in some groups can make it tougher. But many people with mental health conditions have quit.",
        ],
      },
      {
        heading: "Your medicines",
        paragraphs: [
          "Smoking interferes with the way some antipsychotic medicines and antidepressants work, so people who smoke may need higher doses. If you take these medicines, talk to your GP or psychiatrist before you stop smoking.",
          "The dose may need to be monitored, and the amount you need could be reduced. Your doctor can check whether your medication needs to be changed or monitored.",
        ],
      },
    ],
    helps: [
      "Remember that the calm a cigarette brings mostly comes from easing the craving for nicotine.",
      "Use nicotine products or nicotine-free medicines to help manage anxiety, irritability and low mood when you quit.",
      "Try deep breathing, mindfulness or light physical activity, and let friends and family know you are quitting.",
      "If you take antipsychotics or antidepressants, talk to your GP or psychiatrist before you stop smoking.",
      "Visit your local Stop Smoking Service for free, expert support.",
      CRISIS,
    ],
    tryThisWeek: [
      "Notice when a craving feels like stress.",
      "Try a deep breathing exercise.",
      "Tell someone you are quitting.",
    ],
    ask: "Will stopping smoking affect the dose of my mental health medicines?",
    interactive: {
      kind: "scenarios",
      title: "When stress and smoking collide",
      scenarios: [
        {
          id: "stressful-day",
          situation: "Work is stressful and you feel the urge to light up.",
          options: [{ text: "Remember it may be the craving talking", best: true }, { text: "Have one to calm down" }],
          why: "Many smokers mistake withdrawal symptoms for everyday stress. The cycle keeps you hooked and makes stress harder to manage in the long run.",
        },
        {
          id: "medicines",
          situation: "You take an antidepressant and plan to quit next week.",
          options: [{ text: "Talk to your GP or psychiatrist first", best: true }, { text: "Stop smoking and say nothing" }],
          why: "Smoking interferes with how some antidepressants and antipsychotics work, so the dose may need to be monitored and could be reduced.",
        },
        {
          id: "low-week",
          situation: "A week in, you feel low and irritable.",
          options: [{ text: "Remember these feelings usually pass", best: true }, { text: "Decide quitting has made you worse" }],
          why: "In the first few weeks you could feel irritable or restless, but you are not likely to have a worsening in your mood long term.",
        },
        {
          id: "anxious",
          situation: "You feel anxious about how you will cope with cravings.",
          options: [{ text: "Use nicotine products or medicines", best: true }, { text: "Rely on willpower alone" }],
          why: "You can use nicotine products or nicotine-free medicines to help manage anxiety, irritability and depression when you quit.",
        },
      ],
    },
    sources: [NHS_MH, BH_STRESS, BH_BENEFITS, RETHINK, BH_IMPACT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What happens to anxiety and stress after people stop smoking?",
      options: [{ text: "They are lower", right: true }, { text: "They get worse for good" }, { text: "Nothing changes" }],
      why: "Studies show that when people stop smoking, anxiety, depression and stress levels are lower, and quality of life and positive mood improve.",
    },
  },
  {
    id: "smoke-myths",
    kicker: "Worries",
    question: "Will I put on weight, and is it too late for me anyway?",
    hook: "Weight, stress, a lifetime of smoking, attempts that did not stick: the worries are common. The facts are more hopeful.",
    short: "Most people gain some weight after quitting, but the health benefits of quitting are far greater than the risks of gaining some weight. Smoking does not really ease stress, and it is never too late to quit. Nicotine is not what causes most of the harm, and a past relapse does not mean you cannot quit.",
    sections: [
      {
        heading: "Will I gain weight?",
        paragraphs: [
          "Nicotine helps suppress your appetite, so when you quit, your appetite may increase. Food might taste nicer too, as your taste and smell get better after 48 hours.",
          "The National Centre for Smoking Cessation and Training says most people gain some weight after quitting. This is normal, and the health benefits of quitting are far greater than the risks of gaining some weight.",
          "If you want to manage weight changes, balanced meals and gentle activity like walking can help. Some stop smoking products, like nicotine replacement therapy, can also help control weight gain.",
        ],
      },
      {
        heading: "Is it too late for me?",
        paragraphs: [
          "It is never too late. Quitting will improve your health whatever your age and no matter how long you have smoked, though the earlier you quit, the more you are likely to benefit.",
        ],
      },
      {
        heading: "Will I be more stressed?",
        paragraphs: [
          "Many people think smoking helps with stress, but it actually makes things worse over time. Quitting can boost your mood and lower anxiety.",
        ],
      },
      {
        heading: "Is nicotine the dangerous part?",
        paragraphs: [
          "Nicotine is highly addictive, but it does not cause cancer, lung disease, heart disease or stroke. It is the many other toxic chemicals in cigarettes that cause almost all the harm.",
          "Switching to a vape is not just swapping one harmful addiction for another. Vaping exposes users to fewer toxins, and at lower levels, than smoking cigarettes.",
        ],
      },
      {
        heading: "I have tried before",
        paragraphs: [
          "Relapsing is part of the process for most people, and it is not a sign of failure. Every attempt brings you closer to a smoke-free life.",
          "Willpower alone can be really tough. Getting expert support and using stop smoking products will boost your chances, and research shows that with professional help you are 3 times more likely to quit for good.",
        ],
      },
    ],
    helps: [
      "Try not to let weight worries stop you; the health benefits of quitting are far greater than the risks of gaining some weight.",
      "Eat balanced meals and try gentle activity like walking if you want to manage weight changes.",
      "Remember it is never too late to quit, whatever your age.",
      "Get expert support and use stop smoking products, rather than relying on willpower alone.",
      CRISIS,
    ],
    tryThisWeek: [
      "Plan balanced meals and a walk.",
      "Remind yourself it is never too late.",
      "Ask about expert support.",
    ],
    ask: "Could quitting affect my weight, and what would help?",
    interactive: {
      kind: "flip-cards",
      title: "Worries, card by card",
      intro: "Turn each card to see what the NHS says about each common worry.",
      cards: [
        { id: "weight", front: "I will put on weight", when: "A very common worry", back: "Most people gain some weight, and that is normal. The health benefits of quitting are far greater than the risks." },
        { id: "too-late", front: "It is too late for me", when: "After years of smoking", back: "It is never too late. Quitting improves your health whatever your age and however long you have smoked." },
        { id: "stress", front: "Smoking calms me down", when: "When life feels stressful", back: "Smoking makes stress worse over time. Quitting can boost your mood and lower anxiety." },
        { id: "nicotine", front: "Nicotine is the danger", when: "Thinking about NRT or vaping", back: "Nicotine is addictive but does not cause cancer, lung disease, heart disease or stroke. Other chemicals cause almost all the harm." },
        { id: "cough", front: "I am coughing more", when: "In the first days and weeks", back: "Your lungs are clearing out toxins and mucus. It is short term, and a good sign your body is cleaning your airways." },
        { id: "failed", front: "I have failed before", when: "After a relapse", back: "Relapsing is part of the process for most people. Every attempt brings you closer to a smoke-free life." },
      ],
    },
    sources: [BH_WHAT, BH_STRESS, BH_VAPE_MYTHS, BH_COLD, BH_BENEFITS, BH_RELAPSE, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does the NHS say about weight gain after quitting?",
      options: [{ text: "The health benefits of quitting are far greater", right: true }, { text: "It is a good reason to keep smoking" }, { text: "Nobody gains any weight" }],
      why: "Most people gain some weight after quitting. This is normal, and the health benefits of quitting are far greater than the risks of gaining some weight.",
    },
  },
  {
    id: "smoke-services",
    kicker: "Getting help",
    question: "What does a free NHS stop smoking service actually do?",
    hook: "Free, one-to-one or in a group, in person, online or by phone. With expert help, you are 3 times more likely to quit for good.",
    short: "Local stop smoking services are free and improve your chances of quitting for good. An adviser helps you set a quit date and choose stop smoking treatments, and supports you, usually for up to 12 weeks. You can contact your local service yourself, or your GP, pharmacist or health visitor can refer you.",
    sections: [
      {
        heading: "Free help that works",
        paragraphs: [
          "Local stop smoking services are free and can improve your chances of quitting for good. With professional or expert help, you are 3 times more likely to quit for good.",
          "The services are developed by experts and ex-smokers and delivered by trained advisers. Even if you are not yet ready to quit, they can help.",
        ],
      },
      {
        heading: "How sessions work",
        paragraphs: [
          "You will normally be offered a one-to-one appointment with an adviser, but many areas also offer group and drop-in services. The venue could be a GP surgery, pharmacy, high street shop or even a mobile bus clinic.",
          "Sessions can be online, face-to-face or on the phone, at different times and days to suit you. Some services can even help you set up a group with your friends.",
        ],
      },
      {
        heading: "Your first session",
        paragraphs: [
          "At your first meeting, you talk about why you smoke, why you want to quit, and any attempts you have made in the past. You can also decide on a quit date.",
          "You will be offered a breath test, which shows the level of carbon monoxide in your body. Your carbon monoxide level drops to the same as a non-smoker's just 48 hours after your last cigarette.",
          "You will also talk about stop smoking treatments: nicotine replacement products, and the tablets varenicline, cytisinicline or bupropion. Your adviser can support you if you use your own vape to quit, and some services offer a free vape starter pack.",
        ],
      },
      {
        heading: "Staying smoke-free",
        paragraphs: [
          "Services usually offer support for up to 12 weeks. At each meeting you get a supply of, or prescription for, your treatment, and your carbon monoxide level is measured.",
          "You will have an emergency number for out-of-hours times to help you cope with cravings. Advisers can also help you spot difficult situations and plan ways to cope with them.",
        ],
      },
      {
        heading: "How to get in touch",
        paragraphs: [
          "Your GP, pharmacist or health visitor can refer you, or you can contact your local service yourself. In England, you can also call the free National Smokefree Helpline on 0300 123 1044.",
          "In Scotland, call Quit Your Way Scotland free on 0800 84 84 84. In Wales, call Help Me Quit free on 0800 085 2219. Northern Ireland has its own stop smoking services.",
        ],
      },
    ],
    helps: [
      "Find your local stop smoking service, or in England call the National Smokefree Helpline on 0300 123 1044.",
      "Ask your GP, pharmacist or health visitor to refer you.",
      "Choose the support that suits you: one-to-one or group, in person, online or by phone.",
      "Contact your local service even if you are not yet ready to quit.",
      CRISIS,
    ],
    tryThisWeek: [
      "Find your local stop smoking service.",
      "Ask your GP or pharmacist to refer you.",
      "Pick the kind of support that suits you.",
    ],
    ask: "Can you refer me to the local stop smoking service?",
    interactive: {
      kind: "timeline",
      title: "A course of stop smoking support",
      steps: [
        { id: "first", when: "First session", title: "Getting to know you", points: ["Talk about why you smoke and want to quit.", "Take a carbon monoxide breath test."] },
        { id: "before", when: "Before your quit date", title: "Getting ready", points: ["Support starts a few weeks before you quit.", "Choose the treatments that suit you."] },
        { id: "quit-day", when: "Quit day", title: "Your quit date", points: ["The day of your last cigarette.", "Your treatments help ease cravings."] },
        { id: "48-hours", when: "48 hours", title: "Carbon monoxide falls", points: ["Your level drops to a non-smoker's."] },
        { id: "4-weeks", when: "4 weeks", title: "28 days smoke-free", points: ["Weekly support for 4 weeks after you stop.", "28 days makes quitting forever more likely."] },
        { id: "12-weeks", when: "Up to 12 weeks", title: "Staying smoke-free", points: ["Support usually lasts up to 12 weeks.", "An out-of-hours number helps with cravings."] },
      ],
    },
    sources: [NHS_SERVICES, BH_LOCAL, BH_OPTIONS, BH_UK, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How much more likely are you to quit for good with expert help?",
      options: [{ text: "3 times more likely", right: true }, { text: "No more likely" }, { text: "Less likely" }],
      why: "Local stop smoking services are free and can improve your chances of quitting for good. With professional or expert help, you are 3 times more likely to quit for good.",
    },
  },
  {
    id: "smoke-nrt",
    kicker: "Treatment",
    question: "How do nicotine patches, gum and sprays help, and how should I use them?",
    hook: "Patches give steady support; gum, lozenges and sprays deal with sudden cravings. NRT can double your chances of quitting.",
    short: "Nicotine replacement therapy gives your body lower amounts of nicotine without the dangerous chemicals in cigarettes, to ease cravings and withdrawal. It is safe, proven to work and can double your chances of quitting for good, especially when you combine a slow-acting patch with a fast-acting product. Use it for about 12 weeks, or for as long as you need.",
    sections: [
      {
        heading: "What NRT is",
        paragraphs: [
          "Nicotine replacement therapies give your body lower amounts of nicotine, but without the dangerous chemicals in cigarettes. They come as patches, gum, lozenges, inhalers or sprays.",
          "They are the most widely used and well-established stop smoking products. They are safe, proven to work and can double your chances of quitting for good.",
        ],
      },
      {
        heading: "Slow-acting and fast-acting",
        paragraphs: [
          "A nicotine patch is slow-acting, giving a steady dose of nicotine through your skin. You can wear a 24-hour patch to help with cravings when you wake up, or a 16-hour patch for while you are awake.",
          "Gum, lozenges, microtabs, inhalers and mouth or nasal sprays act fast, giving short bursts of nicotine for sudden cravings. The nasal spray is the fastest way nicotine can enter the bloodstream.",
        ],
      },
      {
        heading: "Combine them",
        paragraphs: [
          "Using a slow-acting patch for steady support with a fast-acting product for sudden cravings gives the best results. Use as many NRTs as you need to manage your cravings.",
          "NRT works even better combined with a nicotine-free medicine. Together, this makes you over 5 times more likely to quit for good.",
        ],
      },
      {
        heading: "How long to use it",
        paragraphs: [
          "It is recommended to use NRT for about 12 weeks, or for as long as you need to stop you smoking again. Many people do not use stop smoking products for long enough, which can cause cravings to return.",
          "When you feel ready, you can reduce your dose gradually and eventually stop. If you feel unsure about your ability to stay quit, do not stop using your support products.",
        ],
      },
      {
        heading: "Where to get it, and pregnancy",
        paragraphs: [
          "You can buy NRT from pharmacies, supermarkets and some other shops. It may also be prescribed by a GP or your free local stop smoking service.",
          "NRT is safe to use in pregnancy, and licensed products like patches and gum are the recommended option. Speak to a healthcare professional first so you can choose the right product, and avoid liquorice flavoured nicotine products.",
        ],
      },
    ],
    helps: [
      "Combine a slow-acting patch with a fast-acting product such as gum, a spray or lozenges.",
      "Use as much NRT as you need to manage your cravings.",
      "Keep using it for about 12 weeks, or longer if you need to.",
      "Ask a GP, pharmacist or your local stop smoking service which products suit you.",
      CRISIS,
    ],
    tryThisWeek: [
      "Pair a patch with a fast-acting product.",
      "Use enough to manage your cravings.",
      "Ask a pharmacist which products suit you.",
    ],
    ask: "Which combination of nicotine replacement products would suit me?",
    interactive: {
      kind: "flip-cards",
      title: "Nicotine replacement, card by card",
      intro: "Turn each card to see when each product is used and how it works. Combining slow-acting and fast-acting products works best.",
      cards: [
        { id: "patch", front: "Patch", when: "Steady support all day", back: "Slow-acting: a steady dose through your skin. A 24-hour patch helps with cravings on waking; a 16-hour patch is for while you are awake." },
        { id: "gum", front: "Gum", when: "For sudden cravings", back: "Chew, then rest it inside your cheek. Gives short bursts of nicotine fast through the lining of your mouth." },
        { id: "lozenge", front: "Lozenge", when: "For sudden cravings", back: "Suck, then rest it inside your cheek. Comes in different strengths and works fast." },
        { id: "microtab", front: "Microtab", when: "For sudden cravings", back: "A small tablet that dissolves quickly under your tongue." },
        { id: "inhaler", front: "Inhaler", when: "If you miss hand-to-mouth", back: "Mimics the hand-to-mouth habit of smoking. Works faster than gum and lozenges." },
        { id: "mouth-spray", front: "Mouth spray", when: "For fast relief", back: "Delivers nicotine through the lining of the mouth and throat. Very fast acting." },
        { id: "nasal-spray", front: "Nasal spray", when: "For the fastest relief", back: "The fastest way nicotine can enter the bloodstream, closest to the rush from smoking." },
      ],
    },
    sources: [BH_NRT, BH_PRODUCTS, NHS_ECIG, NHS_SERVICES, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What gives the best results with nicotine replacement therapy?",
      options: [{ text: "A slow-acting patch with a fast-acting product", right: true }, { text: "One lozenge a day, no more" }, { text: "Stopping after the first week" }],
      why: "Using a slow-acting patch for steady support with a fast-acting product for sudden cravings gives the best results.",
    },
  },
  {
    id: "smoke-vaping",
    kicker: "Vaping",
    question: "Is vaping a safe way to stop smoking?",
    hook: "Not risk-free, but a small fraction of the risk of smoking, and one of the most effective ways to quit. For adult smokers only.",
    short: "Nicotine vaping is less harmful than smoking and is one of the most effective tools for quitting. It is not completely harmless and the long-term effects are not yet known, so children and non-smokers should never vape. You only get the full benefit if you stop smoking completely, and the aim is to stop vaping too in time.",
    sections: [
      {
        heading: "Less harmful, not harmless",
        paragraphs: [
          "A vape lets you inhale nicotine in a vapour instead of smoke. Vapes do not burn tobacco and do not produce tar or carbon monoxide, 2 of the most damaging elements in tobacco smoke.",
          "In 2022, UK experts reviewed the evidence and found that in the short and medium term, vaping poses a small fraction of the risks of smoking. But vaping is not completely risk-free, and the long-term risks are not yet clear.",
        ],
      },
      {
        heading: "Does it help people quit?",
        paragraphs: [
          "You are roughly twice as likely to quit smoking with a nicotine vape as with other nicotine replacement products, like patches or gum. Almost two-thirds of people who use a vape with support from a local stop smoking service successfully quit.",
          "Some people find it helps because the hand-to-mouth action is like smoking, and you get similar sensations, like a throat hit.",
        ],
      },
      {
        heading: "Making the switch",
        paragraphs: [
          "Get advice on the right kit and nicotine strength from a specialist vape shop or your local stop smoking service. Choose an e-liquid with enough nicotine to reduce withdrawal symptoms and urges to smoke.",
          "Use your vape as much as you need to manage cravings, and do not worry if you vape more often than you used to smoke. You will only get the full benefits if you stop smoking completely.",
          "Vapes are not available on prescription, but your local stop smoking service may offer a free starter pack. Disposable vapes can no longer be sold in the UK, but you can still buy reusable and refillable vapes.",
        ],
      },
      {
        heading: "Side effects and safety",
        paragraphs: [
          "Common side effects include coughing, a dry mouth and throat, mouth and throat irritation, shortness of breath and headaches. Small changes to your vape products or how you vape should help.",
          "Keep vapes and e-liquid out of reach of children and pets, use the right charger, and never leave a vape charging unattended or overnight. As a precaution, it is best not to vape around babies and children if you can avoid it.",
        ],
      },
      {
        heading: "Stopping vaping later",
        paragraphs: [
          "The healthiest option is not to smoke or vape, so aim to stop vaping too once you feel sure you will not go back to smoking. You can gradually lower the nicotine strength in your e-liquid and how often you vape.",
          "Only quit vaping if you are confident you can do it without smoking cigarettes. Going back to vaping is much better than starting to smoke again.",
        ],
      },
    ],
    helps: [
      "Get advice on kit and nicotine strength from a specialist vape shop or your local stop smoking service.",
      "Vape as much as you need to manage cravings, and stop smoking cigarettes completely.",
      "Buy from a reputable retailer, so products are covered by UK safety and quality rules.",
      "Aim to stop vaping too, once you are sure you will not go back to smoking.",
      CRISIS,
    ],
    tryThisWeek: [
      "Get advice on kit and strength.",
      "Vape as much as you need.",
      "Stop cigarettes completely.",
    ],
    ask: "Would vaping, with support from the stop smoking service, be a good option for me?",
    interactive: {
      kind: "scenarios",
      title: "Switching to a vape",
      scenarios: [
        {
          id: "dual",
          situation: "You vape, but still have a few cigarettes a day.",
          options: [{ text: "Aim to stop cigarettes completely", best: true }, { text: "Carry on with both" }],
          why: "Any smoking is harmful, and you will only get the full benefits of vaping if you stop smoking completely.",
        },
        {
          id: "more-often",
          situation: "You find you vape more often than you used to smoke.",
          options: [{ text: "Keep using it as much as you need", best: true }, { text: "Cut right down straight away" }],
          why: "It is normal to vape more often than you used to smoke, and this is not more harmful. Use your vape as much as you need to stay quit.",
        },
        {
          id: "dry-throat",
          situation: "Your new vape gives you a dry, irritated throat.",
          options: [{ text: "Ask an adviser or vape shop for advice", best: true }, { text: "Go back to cigarettes" }],
          why: "Side effects are usually easily managed and should not stop you from vaping as a way to quit smoking.",
        },
        {
          id: "children",
          situation: "Your baby is in the room and you want to vape.",
          options: [{ text: "Vape away from them if you can", best: true }, { text: "It makes no difference" }],
          why: "As a precaution, it is best not to vape around babies and children if you can avoid it. Young children often copy what adults do.",
        },
      ],
    },
    sources: [BH_VAPE, NHS_ECIG, BH_VAPE_MYTHS, BH_QUIT_VAPE, NHS_SERVICES, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Compared with patches or gum, how likely are you to quit with a nicotine vape?",
      options: [{ text: "Roughly twice as likely", right: true }, { text: "Less likely" }, { text: "No different" }],
      why: "You are roughly twice as likely to quit smoking with a nicotine vape as with other nicotine replacement products, like patches or gum.",
    },
  },
  {
    id: "smoke-medicines",
    kicker: "Treatment",
    question: "Which stop smoking tablets are there, and how do they work?",
    hook: "Three nicotine-free medicines can make smoking less enjoyable and cravings easier. Paired with nicotine products, they work best of all.",
    short: "There are 3 main nicotine-free medicines to help you quit: varenicline, cytisine (also called cytisinicline) and bupropion. You may be able to get them from your GP or local stop smoking service. Combined with nicotine products such as patches or vapes, they make you over 5 times more likely to quit for good.",
    sections: [
      {
        heading: "Three medicines without nicotine",
        paragraphs: [
          "There are 3 main medicines proven to help people quit smoking, and none of them contains nicotine. You may be able to get them from your local stop smoking service or your GP.",
          "Varenicline, formerly available as Champix, blocks nicotine's effects in your brain, making smoking less enjoyable and reducing cravings. Cytisine, also called cytisinicline, comes from plants and works in the same way.",
          "Bupropion, sometimes called Zyban, changes chemicals in your brain to reduce cravings and withdrawal symptoms. It was originally used as an antidepressant.",
        ],
      },
      {
        heading: "Taking varenicline",
        paragraphs: [
          "Varenicline is only available on prescription and comes as tablets. You decide on a date to stop smoking and start the tablets 1 to 2 weeks before it, building up the dose over the first week.",
          "A course lasts 12 weeks. Complete the full course even if you have already stopped smoking, as finishing it can increase the chance of stopping for good.",
          "After several days of taking it, you will usually notice that you are craving fewer cigarettes each day.",
        ],
      },
      {
        heading: "Side effects to know about",
        paragraphs: [
          "Common side effects include headaches, feeling sick and feeling dizzy. If varenicline makes you dizzy or sleepy, do not drive, cycle or use tools or machinery until you feel better.",
          "Call a doctor or 111 if you start to feel irritable, aggressive, anxious or depressed, or a mental health condition gets worse. Call 999 or go to A&E if you have thoughts about harming yourself or ending your life.",
        ],
      },
      {
        heading: "Talk to your doctor first",
        paragraphs: [
          "Tell your doctor before starting varenicline if you have kidney problems, have ever had heart problems or a seizure, or are pregnant or breastfeeding. It can also make depression and other mental health conditions worse, though this is not common.",
          "Rethink advises speaking to your doctor before starting any of these medicines if you have a mental health condition. They might affect your mental health or interact with other medicines you take.",
          "When you stop smoking, with or without varenicline, your doctor may need to change the dose of some other medicines, such as warfarin, insulin, and olanzapine and clozapine, which are used to treat psychosis.",
        ],
      },
      {
        heading: "Best in combination",
        paragraphs: [
          "Varenicline and cytisine work on their own, but combining them with nicotine products, like vapes or patches, gives the best chance of success. Together, this makes you over 5 times more likely to quit for good.",
          "Varenicline alone is unlikely to stop you smoking. Getting support from a local stop smoking service may help.",
        ],
      },
    ],
    helps: [
      "Ask your GP or local stop smoking service whether a nicotine-free medicine would suit you.",
      "Combine it with nicotine products, such as patches or a vape, for the best chance of success.",
      "If you take varenicline, finish the full 12-week course, even if you have already stopped smoking.",
      "Tell your doctor about any mental health condition and other medicines you take before you start.",
      "Call a doctor or 111 if you start to feel irritable, aggressive, anxious or depressed while taking it.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask your GP about stop smoking tablets.",
      "Pair them with patches or a vape.",
      "Finish the full course.",
    ],
    ask: "Would varenicline, cytisine or bupropion suit me, given my health and my other medicines?",
    interactive: {
      kind: "flip-cards",
      title: "Stop smoking medicines, card by card",
      intro: "Turn each card to see what each medicine does. None contains nicotine. Always talk to your doctor before starting one.",
      cards: [
        { id: "varenicline", front: "Varenicline", when: "Start 1 to 2 weeks before quitting", back: "Blocks nicotine's effects in your brain, making smoking less enjoyable and reducing cravings. A course lasts 12 weeks." },
        { id: "cytisine", front: "Cytisine (cytisinicline)", when: "New to the UK", back: "Comes from plants and works like varenicline, blocking nicotine's effects to reduce cravings." },
        { id: "bupropion", front: "Bupropion (Zyban)", when: "Another nicotine-free option", back: "Changes chemicals in your brain to reduce cravings and withdrawal. It was first used as an antidepressant." },
        { id: "combination", front: "Medicine with nicotine products", when: "For the best chance", back: "Combining a nicotine-free medicine with patches or a vape makes you over 5 times more likely to quit for good." },
      ],
    },
    sources: [BH_MEDS, NHS_SERVICES, V_ABOUT, V_HOW, V_WHO, V_SIDE, V_OTHER, V_Q, RETHINK, NHS_MH, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How long does a course of varenicline last?",
      options: [{ text: "12 weeks", right: true }, { text: "3 days" }, { text: "Only until you stop smoking" }],
      why: "A course lasts 12 weeks. Complete the full course even if you have already stopped smoking, as finishing it can increase the chance of stopping for good.",
    },
  },
  {
    id: "smoke-cravings",
    kicker: "Staying smoke-free",
    question: "How do I get through a craving without lighting up?",
    hook: "A craving can feel like it will last for ever. It usually passes within minutes, and there are ways to ride it out.",
    short: "Cravings come from your body adjusting to life without nicotine, and from triggers like coffee, stress or other smokers. They only last up to 15 minutes and are hardest in the first 28 days. Having a distraction ready, knowing your triggers and using stop smoking products all help.",
    sections: [
      {
        heading: "Why cravings happen",
        paragraphs: [
          "A craving is a strong urge to smoke. Some cravings come from your body adjusting to life without nicotine, and others are linked to your smoking habits and routines.",
          "Cravings are hardest in the first 28 days, as your body adjusts to no nicotine. After that, they often start to get easier.",
        ],
      },
      {
        heading: "Know your triggers",
        paragraphs: [
          "Routine triggers include drinking coffee, a break at work, finishing a meal or being on the phone. Emotional triggers include stress, boredom, anger, sadness and loneliness, and even feeling excited or happy.",
          "Situations count too, such as being offered a cigarette, drinking alcohol or seeing other people smoke. Most smokers have triggers like these, and once you know yours, you can plan how to deal with them.",
        ],
      },
      {
        heading: "Ride it out",
        paragraphs: [
          "Cravings only last up to 15 minutes, so have a distraction ready. Going for a walk, chewing sugar-free gum or doing a deep breathing exercise can all help.",
          "Try 4-5-6 breathing: breathe in through your nose for 4 seconds, hold for 5 seconds, and breathe out through your mouth for 6 seconds.",
          "Keep your mouth busy with carrots, celery sticks or sugar-free gum, and your hands busy with a fidget spinner. A quick burst of activity is a good distraction, and it will help you feel better too.",
        ],
      },
      {
        heading: "Change your habits",
        paragraphs: [
          "Break habits tied to smoking, like swapping coffee for juice in the morning, or chewing minty gum or brushing your teeth after a meal. For the first 28 days, stay away from places or situations that make you want to smoke.",
          "Alcohol weakens self-control and makes cravings harder to resist. Try non-alcoholic drinks when you are out, especially in the first 28 days.",
        ],
      },
      {
        heading: "Products and people",
        paragraphs: [
          "Stop smoking products can reduce cravings. Combining a fast-acting source of nicotine, like a mouth spray or vape, with a slow-acting patch eases you out of dependence without tipping you into withdrawal.",
          "Ask friends and family to keep you distracted, or call a friend when a craving is strong. A quit buddy who shares the journey can keep you motivated.",
        ],
      },
    ],
    helps: [
      "Have a distraction ready, as cravings usually only last a few minutes.",
      "Try the 4-5-6 breathing exercise when a craving hits.",
      "Spot your triggers and plan what you will do instead.",
      "Choose non-alcoholic drinks, especially in the first 28 days.",
      "Use a fast-acting nicotine product for sudden cravings, alongside a slow-acting patch.",
      CRISIS,
    ],
    tryThisWeek: [
      "Plan a distraction for cravings.",
      "Try 4-5-6 breathing.",
      "Write down your triggers.",
    ],
    ask: "What could I use for sudden cravings on top of a patch?",
    interactive: {
      kind: "risk-check",
      title: "Your smoking triggers",
      intro: "Tick the triggers you recognise. Most smokers have triggers like these, and each one can be planned for.",
      items: [
        { id: "coffee", label: "Drinking coffee", note: "Break the habit tied to smoking, for example by swapping coffee for juice in the morning.", changeable: true },
        { id: "work-break", label: "A break at work", note: "Take your break at a different time, go for a walk instead, or vape if that is part of your plan.", changeable: true },
        { id: "after-meal", label: "Finishing a meal", note: "Instead of smoking after a meal, try chewing minty gum or brushing your teeth.", changeable: true },
        { id: "stress", label: "Feeling stressed", note: "Try the 4-5-6 breathing exercise to calm yourself when a craving hits.", changeable: true },
        { id: "boredom", label: "Feeling bored or restless", note: "Have a distraction ready: a game, a riddle, a few push-ups or some music.", changeable: true },
        { id: "alcohol", label: "Drinking alcohol", note: "Alcohol makes cravings harder to resist. Try non-alcoholic drinks, especially in the first 28 days.", changeable: true },
        { id: "smokers", label: "Being around smokers", note: "Spend more time with friends who do not smoke, especially in the early days.", changeable: true },
        { id: "offered", label: "Being offered a cigarette", note: "Have a response ready, like \"No thanks, I don't smoke anymore\".", changeable: true },
      ],
    },
    sources: [BH_TRIGGERS, BH_WITHDRAWAL, BH_WHAT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How long do cravings usually last?",
      options: [{ text: "Up to 15 minutes", right: true }, { text: "Several hours" }, { text: "All day" }],
      why: "Cravings only last up to 15 minutes, so have a distraction ready.",
    },
  },
  {
    id: "smoke-plan",
    kicker: "Planning",
    question: "How do I make a quit plan that works?",
    hook: "A date, your reasons, your triggers and the right support. A little planning makes quitting far more likely to stick.",
    short: "Quitting is easier with a plan and the right support. Pick a quit date, ideally within the next 2 weeks, write down your reasons, plan for your triggers, and have stop smoking products and support ready before the day. The free NHS Personal Quit Plan can guide you step by step.",
    sections: [
      {
        heading: "Why plan",
        paragraphs: [
          "Many people try to quit with willpower alone, but going cold turkey can be tough. By preparing ahead and using stop smoking products or getting expert help, you can really boost your chances of quitting for good.",
          "The free NHS Personal Quit Plan gives you a personalised 8-step plan. It helps you prepare for your quit date, shows how much money you could save, and gives tips for managing smoking triggers.",
        ],
      },
      {
        heading: "Choose a quit date",
        paragraphs: [
          "Set a day within the next 2 weeks of deciding to stop, when you do not have too much stress going on. This gives you time to plan.",
          "At your first stop smoking service session, an adviser can help you decide on a quit date.",
        ],
      },
      {
        heading: "Know your reasons",
        paragraphs: [
          "Whatever your reasons, write them down and keep them where you can see them. The most common include your children and family, fitness and wellbeing, an important milestone, and saving money.",
          "If you have tried to quit before, think about what worked and what did not. This will help you build a stronger plan.",
        ],
      },
      {
        heading: "Get ready before the day",
        paragraphs: [
          "Think ahead about moments that may make you want to smoke, like a break at work, and plan what you will do instead. Have a response ready if someone offers you a cigarette.",
          "Throw away your cigarettes, lighters and ashtrays, and make sure your stop smoking products are ready.",
          "Make a list of distractions, like a walk, music, sugar-free mints or calling a friend, and keep it in the kitchen or on your phone.",
        ],
      },
      {
        heading: "Track your progress",
        paragraphs: [
          "Mark each smoke-free day on a calendar or habit tracker, and celebrate small victories. The free NHS Quit Smoking app tracks your progress and shows how much you are saving.",
          "If you can make it to 28 days smoke-free, you are 5 times more likely to quit for good.",
        ],
      },
    ],
    helps: [
      "Pick a quit date within the next 2 weeks, at a time without too much stress.",
      "Write down your reasons for quitting and keep them where you can see them.",
      "Plan for your triggers, and have a response ready if you are offered a cigarette.",
      "Get your stop smoking products ready, and throw away cigarettes, lighters and ashtrays.",
      "Mark each smoke-free day and celebrate small victories.",
      CRISIS,
    ],
    tryThisWeek: [
      "Choose a quit date.",
      "Write down your reasons.",
      "Throw away lighters and ashtrays.",
    ],
    ask: "Can you help me plan my quit date and the support I will need?",
    interactive: {
      kind: "timeline",
      title: "From deciding to 28 days",
      steps: [
        { id: "decide", when: "Today", title: "Decide, and note why", points: ["Write down your reasons.", "Think about what worked before."] },
        { id: "date", when: "Within 2 weeks", title: "Set your quit date", points: ["Choose a time without too much stress.", "A Personal Quit Plan can help you prepare."] },
        { id: "ready", when: "Before the day", title: "Get ready", points: ["Have your stop smoking products ready.", "Throw away cigarettes, lighters and ashtrays."] },
        { id: "quit", when: "Quit day", title: "Your first smoke-free day", points: ["Use your distraction list.", "Have a response ready if offered a cigarette."] },
        { id: "daily", when: "Every day", title: "Track your progress", points: ["Mark each smoke-free day.", "Celebrate small victories."] },
        { id: "28-days", when: "28 days", title: "A big milestone", points: ["You are 5 times more likely to quit for good."] },
      ],
    },
    sources: [BH_READY, BH_QUIT, BH_HELP, BH_RELAPSE, BH_TRIGGERS, BH_WITHDRAWAL, BH_STRESS, NHS_SERVICES, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When is a good time to set your quit date?",
      options: [{ text: "Within the next 2 weeks, without too much stress", right: true }, { text: "A year from now" }, { text: "In your most stressful week" }],
      why: "Set a day within the next 2 weeks of deciding to stop, when you do not have too much stress going on.",
    },
  },
  {
    id: "smoke-slips",
    kicker: "Slips",
    question: "I had a cigarette. Have I blown it?",
    hook: "A slip is not the end. Most people try to quit more than once before they succeed, and every attempt teaches you something.",
    short: "Relapsing is part of the process for most people and is not a sign of failure. One puff or a single cigarette is a lapse, not a relapse: shrug it off and keep going. If you are back to smoking regularly, learn from what happened, set a new quit date and get more support.",
    sections: [
      {
        heading: "A slip is not a failure",
        paragraphs: [
          "A relapse means going back to smoking after you have tried to quit. It happens to many people, and it is part of the process for most.",
          "Most smokers try to quit several times before they succeed. The time you spent smoke-free was an achievement, and you can start again as soon as you feel ready.",
        ],
      },
      {
        heading: "A lapse or a relapse?",
        paragraphs: [
          "If you have had just one puff or a single cigarette, that is a lapse, not a relapse. Shrug it off and keep going.",
          "If you are back to smoking regularly, take stock and set a new quit date, ideally within the next 2 weeks. Even 1 cigarette can get you stuck in the cycle of cravings again, so avoiding even a single puff helps you stay smoke-free.",
        ],
      },
      {
        heading: "Why slips happen",
        paragraphs: [
          "Relapses can happen because of stress, tough situations, or trying to quit using willpower alone. Smoking is a strong addiction, and cravings and withdrawal can be tough to handle without help.",
        ],
      },
      {
        heading: "Learn and try again",
        paragraphs: [
          "Think about what made you want to smoke: stress, other smokers or a particular feeling. Write down how you will handle that trigger next time, and put it somewhere you can see it.",
          "If vaping or nicotine replacement did not work before, try switching or combining approaches. Combining a nicotine-free medicine with nicotine replacement makes you over 5 times more likely to quit for good.",
          "The NHS says that if you are not as successful as you want to be, you will still have learnt something to help you next time.",
        ],
      },
      {
        heading: "Get more support",
        paragraphs: [
          "Advisers at your local stop smoking service can recommend products and give advice and encouragement. With professional help, you are 3 times more likely to quit for good.",
          "If you have been using a vape to stop smoking, going back to vaping is much better than starting to smoke again.",
        ],
      },
    ],
    helps: [
      "Treat a single cigarette as a lapse: shrug it off and keep going.",
      "If you are smoking regularly again, set a new quit date within the next 2 weeks.",
      "Write down what triggered the slip and how you will handle it next time.",
      "Try a different product, or combine products, if what you used before did not work.",
      "Get expert help from your local stop smoking service.",
      CRISIS,
    ],
    tryThisWeek: [
      "Shrug off a single slip.",
      "Write down what triggered it.",
      "Get help from a stop smoking service.",
    ],
    ask: "What could I do differently this time, and would a different product help?",
    interactive: {
      kind: "scenarios",
      title: "After a slip",
      scenarios: [
        {
          id: "one-cigarette",
          situation: "At a party, you had one cigarette.",
          options: [{ text: "Treat it as a lapse and keep going", best: true }, { text: "Decide you have failed" }],
          why: "Just one puff or a single cigarette is a lapse, not a relapse. A lapse is a minor slip-up, so shrug it off and keep going.",
        },
        {
          id: "daily-again",
          situation: "You have been smoking every day again for a week.",
          options: [{ text: "Set a new quit date", best: true }, { text: "Give up on quitting" }],
          why: "If you are back to smoking regularly, take stock and set a new quit date, ideally within the next 2 weeks.",
        },
        {
          id: "patches",
          situation: "Patches on their own did not work for you last time.",
          options: [{ text: "Try combining products", best: true }, { text: "Assume nothing will work" }],
          why: "Changing your strategy or combining methods can make the difference. A nicotine-free medicine with NRT makes you over 5 times more likely to quit.",
        },
        {
          id: "let-down",
          situation: "You feel you have let your family down.",
          options: [{ text: "Remember most people need several tries", best: true }, { text: "Keep it to yourself" }],
          why: "Relapsing is part of the process for most people, and it is not a sign of failure. Support from friends, family or professionals makes a real difference.",
        },
      ],
    },
    sources: [BH_RELAPSE, BH_HELP, BH_WITHDRAWAL, NHS_MH, BH_QUIT_VAPE, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What is one puff or a single cigarette after quitting?",
      options: [{ text: "A lapse, not a relapse", right: true }, { text: "The end of your quit attempt" }, { text: "Proof that you cannot quit" }],
      why: "If you have had just one puff or a single cigarette, that is a lapse, not a relapse. Shrug it off and keep going.",
    },
  },
  {
    id: "smoke-others",
    kicker: "Family",
    question: "How does my smoking affect my family, and how can they help me quit?",
    hook: "Most of the smoke from a cigarette goes into the air others breathe. A smoke-free home protects them, and family can help you quit.",
    short: "Secondhand smoke is dangerous, especially for children, and opening a window does not protect people. The best way to protect loved ones is to quit; at the very least, keep your home and car smoke-free. People who have someone to help them are more likely to quit for good.",
    sections: [
      {
        heading: "Where the smoke goes",
        paragraphs: [
          "When you smoke, most of the smoke does not go into your lungs. It goes into the air around you, where anyone nearby can breathe it in.",
          "People who breathe in secondhand smoke regularly are more likely to get the same diseases as smokers, including lung cancer and heart disease. Secondhand smoke is especially harmful to children and pregnant women.",
        ],
      },
      {
        heading: "Why a window is not enough",
        paragraphs: [
          "Secondhand smoke contains more than 5,000 irritants, toxins and cancer-causing substances, and most of it is invisible and odourless. It can linger in the air for hours, even with a window open, and spreads from one room to the rest of the house.",
          "The best way to protect your family is to quit completely. If you are not ready, always smoke outside, ask visitors to smoke outside, and do not smoke in the car or let anyone else.",
          "Even if you smoke outside, chemicals from the smoke can stay on your clothes and affect the people around you.",
        ],
      },
      {
        heading: "Children",
        paragraphs: [
          "Children who live with a smoker are more likely to develop asthma, chest infections, meningitis, ear infections, and coughs and colds. It is against the law to smoke in a private vehicle if anyone under 18 is present.",
          "Teens whose parents or caregivers smoke are 4 times as likely to take up smoking. Becoming a smoke-free role model means your children are much less likely to start.",
        ],
      },
      {
        heading: "Vaping around others",
        paragraphs: [
          "Vaping does not produce tobacco smoke, and any risk from passive vaping seems small compared with cigarettes. But as a precaution, it is best not to vape around babies and children if you can avoid it, as young children often copy adults.",
        ],
      },
      {
        heading: "How family and friends can help",
        paragraphs: [
          "Smokers who have someone to help them are more likely to quit for good. Rather than nagging or lecturing, helpers can ask how the person wants them to help.",
          "If you smoke, try not to smoke around someone who is quitting, and help remove triggers like lighters and ashtrays. Celebrate milestones, like a smoke-free day or week, and if they slip, reassure them that they have not failed.",
        ],
      },
    ],
    helps: [
      "Keep your home and car completely smoke-free.",
      "If you are not ready to quit, always smoke outside, away from other people.",
      "Avoid vaping around babies and children if you can.",
      "Talk with family and friends about how you would like them to help.",
      "If you are helping someone quit, encourage rather than nag, and celebrate their milestones.",
      CRISIS,
    ],
    tryThisWeek: [
      "Make your home and car smoke-free.",
      "Talk to family about how to help.",
      "Celebrate a smoke-free milestone.",
    ],
    ask: "What support is there to help me keep my home smoke-free?",
    interactive: {
      kind: "risk-check",
      title: "Does your smoke reach others?",
      intro: "Tick any that apply at home. Each one can change, and quitting completely protects everyone.",
      items: [
        { id: "indoors", label: "Smoking indoors", note: "Smoke spreads from one room to the rest of the house. Always smoke outside, and ask visitors to as well.", changeable: true },
        { id: "window", label: "Smoking by an open window", note: "Opening windows does not protect people. Smoke can linger in the air for hours.", changeable: true },
        { id: "car", label: "Smoking in the car", note: "Do not smoke in the car or let anyone else. It is against the law with anyone under 18 present.", changeable: true },
        { id: "clothes", label: "Smoke on your clothes", note: "Even if you smoke outside, chemicals from the smoke can stay on your clothes and affect others.", changeable: true },
        { id: "children", label: "Children see you smoke", note: "Teens whose parents smoke are 4 times as likely to start. A smoke-free role model helps.", changeable: true },
        { id: "vaping", label: "Vaping near babies or children", note: "Any risk seems small, but as a precaution it is best not to vape around them if you can avoid it.", changeable: true },
      ],
    },
    sources: [NHS_PASSIVE, BH_IMPACT, BH_BENEFITS, BH_HELP, BH_VAPE, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Does opening a window protect people from secondhand smoke?",
      options: [{ text: "No, smoke can linger for hours", right: true }, { text: "Yes, completely" }, { text: "Yes, if the door is shut" }],
      why: "Opening windows and doors or smoking in another room does not protect people. Smoke can linger in the air for hours after you have finished a cigarette, even with a window open.",
    },
  },
];
