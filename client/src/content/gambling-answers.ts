import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Gambling page's pieces (content/library-conditions/mind-extra.ts, prefix "gamb-").
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (its gambling page, the
// NHS gambling clinics and the urgent help pages), the Royal College of Psychiatrists, NICE (NG248), GambleAware,
// the Gambling Commission, GAMSTOP, Citizens Advice, National Debtline, Gamblers Anonymous, Gam-Anon and Samaritans.
// GamCare's own site and mind.org.uk could not be read today (bot checks), so neither is cited as a page; GamCare is
// named only as the NHS and GambleAware name it. Wording follows GambleAware's advice on non-stigmatising language
// ("a person who gambles", never labels). Every answer ends its "What helps" list with the crisis routes exactly as
// the NHS gives them (111 mental health option, Samaritans 116 123, Shout 85258, 999 or A&E). General information
// only; it never replaces what a person's own GP or gambling service tells them, and no medicine should be started,
// stopped or changed without the doctor.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const gaw = (label: string, path: string): LearnSource => ({ label: `GambleAware: ${label}`, url: `https://www.gambleaware.org/${path}` });
const gc = (label: string, path: string): LearnSource => ({ label: `Gambling Commission: ${label}`, url: `https://www.gamblingcommission.gov.uk/public-and-players/${path}` });

const NHS_GAMBLING = nhs("Help for problems with gambling", "live-well/addiction-support/gambling-addiction/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const RCPSYCH: LearnSource = { label: "Royal College of Psychiatrists: Gambling disorder", url: "https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/gambling-disorder" };
const NICE: LearnSource = { label: "NICE: Gambling-related harms: identification, assessment and management (NG248), recommendations", url: "https://www.nice.org.uk/guidance/ng248/chapter/Recommendations" };

const NGC: LearnSource = { label: "CNWL NHS Foundation Trust: National Gambling Clinic", url: "https://www.cnwl.nhs.uk/services/addictions/national-gambling-clinic" };
const NGC_EXPLAINED: LearnSource = { label: "National Gambling Clinic: Gambling explained", url: "https://www.cnwl.nhs.uk/services/addictions/national-gambling-clinic/what-gambling" };
const EOE_CONTROL: LearnSource = { label: "NHS East of England Gambling Service: Taking control of your gambling", url: "https://www.cnwl.nhs.uk/eofegamblingservice/taking-control-your-gambling" };
const EOE_HARMS: LearnSource = { label: "NHS East of England Gambling Service: Impact and harms of gambling", url: "https://www.cnwl.nhs.uk/eofegamblingservice/understanding-your-gambling" };
const NGS_REFERRAL: LearnSource = { label: "NHS Northern Gambling Service: Referral", url: "https://www.northerngamblingservice.nhs.uk/i-am-looking-for-help/lfhreferral/" };

const GAW_SIGNS = gaw("The signs of gambling harms", "advice/for-your-gambling/the-signs-of-gambling-harms/");
const GAW_ADVICE = gaw("Advice to consider if you're gambling", "advice/for-your-gambling/advice-to-consider-if-you-re-gambling/");
const GAW_EVERYDAY = gaw("Help if gambling is affecting everyday life", "advice/for-your-gambling/help-if-gambling-is-affecting-everyday-life/");
const GAW_RISKS = gaw("Understanding the risks of gambling", "advice/for-your-gambling/understanding-the-risks-of-gambling/");
const GAW_BUDGET = gaw("Help with budgeting and finances", "advice/for-your-gambling/help-with-budgeting-and-finances/");
const GAW_TALKING = gaw("Talking about gambling", "advice/for-your-gambling/talking-about-gambling/");
const GAW_BLOCKING = gaw("Gambling blocking and self-exclusion", "tools-and-support/gambling-blocking-and-self-exclusion/");
const GAW_GETHELP = gaw("Get help now", "get-help-now/");
const GAW_FF_AFFECTED = gaw("Advice if you're affected by someone's gambling", "advice/for-family-and-friends/advice-if-youre-affected-by-someone-s-gambling/");
const GAW_FF_HELPING = gaw("Helping someone who gambles", "advice/for-family-and-friends/helping-someone-who-gambles/");

const GC_SELFEX = gc("Self-exclusion", "page/self-exclusion");
const GC_SCHEMES = gc("Free multi operator and national self-exclusion schemes", "page/free-multi-operator-and-national-self-exclusion-schemes");
const GC_BANK = gc("Block gambling payments with your bank", "page/i-want-to-know-how-to-block-gambling-transactions");

const GAMSTOP_HOME: LearnSource = { label: "GAMSTOP: Block yourself from online gambling", url: "https://www.gamstop.co.uk/" };
const GAMSTOP_FAMILY: LearnSource = { label: "GAMSTOP: Support for families and friends", url: "https://www.gamstop.co.uk/support-family" };
const GAMSTOP_DEBT: LearnSource = { label: "GAMSTOP: Get help with your finances", url: "https://www.gamstop.co.uk/support-debt" };

const GAMBLERS_ANON: LearnSource = { label: "Gamblers Anonymous (England, Wales and Ulster)", url: "https://gamblersanonymous.org.uk/" };
const GAMBLERS_ANON_FAQS: LearnSource = { label: "Gamblers Anonymous: FAQs", url: "https://gamblersanonymous.org.uk/faqs/" };
const GAMBLERS_ANON_20Q: LearnSource = { label: "Gamblers Anonymous: Twenty Questions", url: "https://gamblersanonymous.org.uk/twenty-questions/" };
const GAMANON: LearnSource = { label: "Gam-Anon UK & Ireland: About", url: "https://gamanon.org.uk/about/" };

const CA_GAMBLING: LearnSource = { label: "Citizens Advice: Get help with gambling problems", url: "https://www.citizensadvice.org.uk/debt-and-money/gambling-problems/get-help-with-gambling-problems/" };
const NATIONAL_DEBTLINE: LearnSource = { label: "National Debtline: Free, impartial debt advice and support", url: "https://nationaldebtline.org/" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you cannot keep yourself safe.";

export const gamblingAnswers: LearnArticle[] = [
  {
    id: "gamb-what-it-is",
    kicker: "Understanding",
    question: "When does gambling become a problem?",
    hook: "A bet to win back a loss can feel like the way out. More often, it leads further in.",
    short: "Gambling disorder is a repeated pattern of gambling where someone feels they have lost control, keeps gambling despite the harm, and lets gambling take priority over other things. Chasing losses, trying to win back money already lost, often leads to even bigger losses. It is a recognised condition, and free, confidential help is available.",
    sections: [
      {
        heading: "A recognised condition",
        paragraphs: [
          "Gambling disorder is a repeated pattern of gambling where someone feels they have lost control over it, keeps gambling or gambles more despite negative consequences, and lets gambling take priority over other interests. It is also sometimes called gambling addiction, problem gambling or compulsive gambling.",
          "It can have a big impact on personal and family life, work and education, and the things you enjoy. Gambling harms can include money problems, mental health problems, relationship problems, trouble at work and feeling isolated or alone.",
        ],
      },
      {
        heading: "More common than many think",
        paragraphs: [
          "The Royal College of Psychiatrists says roughly 2 to 3 in every 100 people have gambling disorder, and 8 to 12 in every 100 gamble in ways that are harmful or at risk of becoming harmful.",
          "Anyone can develop a gambling disorder. Men are four times more likely to have one, although the rate in women is steadily rising. Heavy drinking, other mental health conditions, money worries and working in a gambling premises can all make it more likely.",
        ],
      },
      {
        heading: "The chase",
        paragraphs: [
          "Chasing losses means trying to win back money that has been lost through gambling. It can be tempting, especially straight after a large loss, but it often leads to even bigger losses.",
          "People with a gambling disorder often think differently about gambling. They may believe they are more likely to win than others, that two wins in a row mean a winning streak, that rituals can bring luck, or that having lost, they can win back their losses by gambling more.",
          "Shame can lead people to keep their gambling secret, out of a fear of being judged. But this often makes it easier to lose track of time and money.",
        ],
      },
      {
        heading: "Why it can be hard to stop",
        paragraphs: [
          "NICE says people should be told about the addictive nature of gambling, its effects on the reward system in the brain, and how the gambling industry and advertising may encourage people to keep gambling.",
          "Some types of gambling carry more risk than others. In general, lotteries are less likely to be linked with harm, gambling games are more commonly linked with it, and machines in bookmakers are the most harmful type.",
          "A lot of people use gambling as a distraction from difficult thoughts, life situations or feelings. But over time, it can make things worse.",
        ],
      },
      {
        heading: "Help works",
        paragraphs: [
          "About 1 in 3 people with a gambling disorder recover on their own, without treatment. About 2 in 3 continue to have problems, which tend to get worse.",
          "If you think you might have a gambling disorder, the best first step is to get help. There are free NHS gambling clinics you can refer yourself to, and charities and support groups that offer free, confidential support.",
        ],
      },
    ],
    helps: [
      "Answer the NHS questions on gambling to see whether it is causing you problems.",
      "If you have lost the money you set as your limit, walk away rather than trying to win it back.",
      "Notice how you feel when you decide to gamble, and why you are doing it.",
      "Talk to someone you trust about what is happening.",
      "Refer yourself to an NHS gambling clinic, or call the National Gambling Helpline free on 0808 8020 133, 24 hours a day.",
      CRISIS,
    ],
    tryThisWeek: [
      "Answer the NHS gambling questions.",
      "Walk away instead of chasing.",
      "Tell someone you trust.",
    ],
    ask: "Could my gambling be a gambling disorder, and can you refer me to an NHS gambling clinic?",
    interactive: {
      kind: "timeline",
      title: "The chasing cycle",
      steps: [
        { id: "loss", when: "Step 1", title: "A loss", points: ["It can be tempting to win it back straight away.", "Especially just after a large loss."] },
        { id: "chase", when: "Step 2", title: "Betting more to win it back", points: ["Chasing losses often leads to even bigger losses.", "Believing you can win back losses is a common thinking trap."] },
        { id: "secret", when: "Step 3", title: "Keeping it secret", points: ["Shame can lead people to hide their gambling.", "That makes it easier to lose track of time and money."] },
        { id: "harms", when: "Step 4", title: "Harms build up", points: ["Money, mood, relationships and work can all suffer.", "Without help, problems tend to get worse."] },
        { id: "way-out", when: "Step 5", title: "Breaking the cycle", points: ["Walk away once you reach your limit.", "Get help: NHS clinics and the helpline are free."] },
      ],
    },
    sources: [RCPSYCH, GAW_SIGNS, GAW_RISKS, GAW_ADVICE, NICE, NHS_GAMBLING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does chasing losses usually lead to?",
      options: [{ text: "Even bigger losses", right: true }, { text: "Winning the money back" }, { text: "A winning streak" }],
      why: "Chasing losses means trying to win back money that has been lost through gambling. It often leads to even bigger losses.",
    },
  },
  {
    id: "gamb-signs",
    kicker: "Signs",
    question: "How do I know if my gambling is a problem?",
    hook: "There is no single line to cross. A few honest questions can show whether gambling has started to cost more than money.",
    short: "Signs include betting more than you can afford, needing bigger bets for the same feeling, chasing losses, borrowing to gamble, and hiding or feeling guilty about it. The NHS has nine short questions to help you check. Harm can show early or later, and support is there at any stage.",
    sections: [
      {
        heading: "Nine questions from the NHS",
        paragraphs: [
          "The NHS suggests asking yourself whether you bet more than you can afford to lose, need to gamble with larger amounts to get the same feeling, or try to win back money you have lost.",
          "Have you borrowed money or sold anything to gamble, wondered whether you have a problem, or had health problems such as stress or anxiety from gambling? Have other people criticised your betting, has it caused money problems for your household, and have you felt guilty about it?",
          "Score 0 for never, 1 for sometimes, 2 for most of the time and 3 for almost always. The NHS says a total of 8 or higher means you, or those closest to you, are likely to be experiencing gambling-related harms, and a total between 1 and 7 can still mean gambling is having a negative impact.",
        ],
      },
      {
        heading: "Signs others may notice",
        paragraphs: [
          "People experiencing gambling harms may find it hard to stop or cut down, and spend more time and money than they can afford. They may think or talk about gambling more than other parts of life, struggle to concentrate, lose interest in other activities and neglect responsibilities.",
          "They may seem distant or quieter than normal, or act in ways that feel out of character. Gambling can also bring guilt, shame, low self-esteem, anxiety, mood swings and changes in sleep.",
        ],
      },
      {
        heading: "Early and later signs",
        paragraphs: [
          "An NHS gambling service describes early signs as having less time or money for fun and family, reduced savings, drinking more alcohol, feelings of guilt or regret, and lying to cover up time or money spent.",
          "Later signs can include conflict in relationships, missing work or study, debts, going without basics like food, utilities and clothing, changes in sleeping and eating, and feelings of anger, shame, hopelessness or loneliness. If these go unnoticed, they can get worse.",
        ],
      },
      {
        heading: "Two quick questions",
        paragraphs: [
          "The National Gambling Clinic says that if you answer yes to either of two questions, you may want to think about changing your relationship with gambling: do you ever lie to people close to you about gambling, and have you ever bet more than you could afford?",
          "Gamblers Anonymous has its own twenty questions, such as whether you gamble longer than you planned, gamble to escape worry, or feel an urge to gamble after arguments or disappointments.",
        ],
      },
      {
        heading: "Recognising it is a step",
        paragraphs: [
          "People often struggle to recognise their gambling as a problem, or focus on the positives, such as winning money or socialising. Stigma, embarrassment, not wanting others to find out and worry about debt can all get in the way of asking for help.",
          "If you recognise these harms in yourself, the Royal College of Psychiatrists says to try to seek help. Support and treatment are available if you need them.",
        ],
      },
    ],
    helps: [
      "Answer the NHS's nine questions honestly, scoring each from never to almost always.",
      "Ask yourself whether you ever lie to people close to you about gambling.",
      "Notice whether you are spending more time or money gambling than you can afford.",
      "If you recognise these signs, talk to someone and try to seek help.",
      CRISIS,
    ],
    tryThisWeek: [
      "Do the NHS nine-question check.",
      "Notice if you hide your gambling.",
      "Talk to someone if the signs fit.",
    ],
    ask: "My answers to the NHS gambling questions worry me: what support is there near me?",
    interactive: {
      kind: "signs",
      title: "Signs you might notice",
      intro: "Tick any that fit, for yourself or for someone close to you.",
      signs: ["Betting more than you can afford", "Bigger bets for the same feeling", "Trying to win back losses", "Borrowing or selling things to gamble", "Hiding or lying about gambling", "Feeling guilty about gambling", "Money problems at home", "Stress, anxiety or poor sleep"],
      after: "Any of these can be a sign of gambling harm. Support is free and confidential: you can refer yourself to an NHS gambling clinic or call the National Gambling Helpline.",
      copyHeading: "Gambling signs I have noticed",
    },
    sources: [NHS_GAMBLING, GAW_SIGNS, EOE_HARMS, NGC_EXPLAINED, GAMBLERS_ANON_20Q, RCPSYCH, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "In the NHS check, what does a total of 8 or higher suggest?",
      options: [{ text: "Gambling-related harms are likely", right: true }, { text: "There is nothing to worry about" }, { text: "You are on a winning streak" }],
      why: "The NHS says a total of 8 or higher means you, or those closest to you, are likely to be experiencing gambling-related harms.",
    },
  },
  {
    id: "gamb-mental-health",
    kicker: "Mood",
    question: "Is my gambling linked to how low or anxious I feel?",
    hook: "Gambling can start as an escape from worry, then become a source of it. Mood and gambling often need help together.",
    short: "Gambling harms can include anxiety, depression, mood swings, poor sleep, shame and low self-worth. Some people gamble to escape difficult feelings, and other mental health conditions can make a gambling disorder more likely. Treating both helps, and if you ever feel unable to cope, urgent help is there day and night.",
    sections: [
      {
        heading: "How gambling can affect mood",
        paragraphs: [
          "Whatever the amount of money or time spent, gambling can cause many feelings, including shame, lack of self-worth, anxiety or depression, mood swings and problems sleeping.",
          "People experiencing gambling harms may feel they have little or no control over it. This can lead to guilt, shame or low self-esteem, and to worry about how their gambling is affecting others.",
        ],
      },
      {
        heading: "A two-way link",
        paragraphs: [
          "Having other mental health conditions, such as a mood disorder, an anxiety disorder or another addiction, can make a gambling disorder more likely. Citizens Advice notes that a lot of people with gambling problems have mental health problems.",
          "A lot of people use gambling as a distraction from difficult thoughts, life situations or feelings. But over time, it can make things worse.",
          "Some medicines that affect dopamine, a chemical in the brain, can also make a gambling disorder more likely. If you take one and are worried about your gambling, talk to your doctor.",
        ],
      },
      {
        heading: "Alcohol and drugs",
        paragraphs: [
          "Heavy drinking or using illegal drugs can make a gambling disorder more likely, and drugs and alcohol make it harder to stick to limits. If you drink or use drugs, GambleAware suggests telling someone you trust about your gambling and your limits.",
          "Asking for support for drug or alcohol use can feel difficult, but there are ways to get treatment. Addressing drug and alcohol use can support you on your gambling journey.",
        ],
      },
      {
        heading: "Treating both",
        paragraphs: [
          "NICE says some mental health conditions may be a result of gambling and may improve with successful treatment for it. Others come before or alongside gambling and need treating at the same time.",
          "Other mental health conditions are common in people with a gambling disorder, and medicines such as antidepressants can be prescribed. Once the mental health condition is better managed, the gambling disorder can also improve.",
        ],
      },
      {
        heading: "When it feels too much",
        paragraphs: [
          "Gambling harms can include suicidal thoughts. If you have suicidal thoughts, it is important to get help as soon as possible from your GP, the NHS or Samaritans.",
          "NICE asks professionals to explain the known link between gambling harms and suicide, that the risk may be highest immediately after a gambling episode, and to help put a safety plan in place.",
          "If you struggle with suicidal thoughts, the NHS says it may help to make a safety plan to use if you need it. You can call Samaritans on 116 123 at any time.",
        ],
      },
    ],
    helps: [
      "Notice how you feel when you decide to gamble, and why you are doing it.",
      "If gambling is affecting your mental health, get support from NHS mental health services or your GP.",
      "If you drink or use drugs, tell someone you trust about your gambling and your limits.",
      "Ask about treating your mood and your gambling together.",
      "Make a safety plan if you struggle with suicidal thoughts.",
      CRISIS,
    ],
    tryThisWeek: [
      "Note your feelings before you gamble.",
      "Share your limits with someone.",
      "Ask about treating mood and gambling.",
    ],
    ask: "Could my low mood or anxiety be linked to my gambling, and can they be treated together?",
    interactive: {
      kind: "scenarios",
      title: "Moments that matter",
      scenarios: [
        {
          id: "low",
          situation: "You feel low and want a bet to take your mind off it.",
          options: [{ text: "Notice the feeling and do something else", best: true }, { text: "Gamble to escape it" }],
          why: "A lot of people use gambling as a distraction from difficult feelings, but over time it can make things worse.",
        },
        {
          id: "drink",
          situation: "You are going out drinking and might gamble later.",
          options: [{ text: "Tell someone you trust your limits", best: true }, { text: "Keep it to yourself" }],
          why: "Drugs and alcohol make it harder to stick to your limits. Telling someone you trust can help you stick to what you have decided.",
        },
        {
          id: "after-loss",
          situation: "After a big loss, you feel desperate and alone.",
          options: [{ text: "Call Samaritans on 116 123, or 111", best: true }, { text: "Stay alone with it" }],
          why: "The risk may be highest straight after a gambling episode. Samaritans are there any time on 116 123, and 111 has a mental health option.",
        },
        {
          id: "medicine",
          situation: "You wonder if a medicine you take is adding to your urge to gamble.",
          options: [{ text: "Talk to your doctor about it", best: true }, { text: "Stop taking it yourself" }],
          why: "Some medicines that affect dopamine can make a gambling disorder more likely. Talk to your doctor, and do not stop or change a medicine without them.",
        },
      ],
    },
    sources: [RCPSYCH, GAW_EVERYDAY, GAW_SIGNS, GAW_ADVICE, NICE, CA_GAMBLING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What can happen once another mental health condition is better managed?",
      options: [{ text: "The gambling disorder can also improve", right: true }, { text: "Gambling always gets worse" }, { text: "Nothing changes" }],
      why: "Once the mental health condition is better managed, the gambling disorder can also improve.",
    },
  },
  {
    id: "gamb-affected-others",
    kicker: "Family",
    question: "How does one person's gambling affect the people around them?",
    hook: "Gambling harm rarely stays with one person. Partners, children, parents and friends can feel it too, and they deserve support of their own.",
    short: "For every person with a gambling problem, around seven others are affected, mostly family members. They can face money worries, arguments, mistrust and worry about the future. Support is there for them too, whether or not the person who gambles is getting help.",
    sections: [
      {
        heading: "More than one person",
        paragraphs: [
          "Gambling can harm not only the person who gambles but the people around them too. In the UK, around seven people are affected for every one person who has a gambling problem, mainly parents, partners and children, but also friends, colleagues and communities.",
          "One in four people think they know someone who has experienced gambling harms. NICE recognises that gambling harms, including stigma, may have a severe impact on family members and others close to the person.",
        ],
      },
      {
        heading: "At home",
        paragraphs: [
          "Family life can become difficult when someone is preoccupied with gambling. There may be more arguments over money and debts, relationship problems, and sometimes separation or divorce.",
          "Children may show signs of distress and have difficulties at school. Gambling has also been linked to domestic abuse, especially when household finances are being affected.",
        ],
      },
      {
        heading: "How it can feel",
        paragraphs: [
          "Being close to someone with a gambling disorder can be very difficult. You might feel hurt, mistrust, sadness and worry about the future, and you may have been affected financially too.",
          "You might feel angry or betrayed if they have lied or tried to hide their gambling. These feelings are completely normal, and it is important not to blame yourself or the other person.",
        ],
      },
      {
        heading: "Money that is not yours to owe",
        paragraphs: [
          "If the person who gambles has borrowed money in your name without your permission, this is illegal, and you do not need to pay it back yourself. Citizens Advice can help you find out if you are responsible for a debt.",
        ],
      },
      {
        heading: "Support for you",
        paragraphs: [
          "NHS gambling treatment clinics can support family and friends. GamAnon holds meetings, GamFam is a lived experience support network, and Gambling with Lives supports people bereaved by gambling-related suicide.",
          "If you are experiencing domestic abuse, you are not alone. Refuge's advisers can help you find specialist support, whether you have left your partner or not.",
        ],
      },
    ],
    helps: [
      "Remember the feelings you have are normal, and try not to blame yourself.",
      "Talk to someone you trust, or someone independent, about what you are going through.",
      "Protect your finances, and get support if you are struggling financially.",
      "Contact an NHS gambling clinic, GamAnon or GamFam for support for yourself.",
      "If you are experiencing domestic abuse, contact Refuge for specialist support.",
      CRISIS,
    ],
    tryThisWeek: [
      "Talk to someone about how you feel.",
      "Check your own finances are protected.",
      "Look up GamAnon or GamFam.",
    ],
    ask: "Is there support for me as a family member, and can I be seen on my own?",
    interactive: {
      kind: "risk-check",
      title: "How it might be reaching you",
      intro: "Tick any that apply. Each one is something you can get support with.",
      items: [
        { id: "money", label: "Worry about money or debts", note: "Protect your finances and get support. Money borrowed in your name without permission is not yours to repay.", changeable: true },
        { id: "feelings", label: "Feeling hurt, angry or mistrustful", note: "These feelings are completely normal. Talking to someone you trust can help you see your situation more clearly.", changeable: true },
        { id: "arguments", label: "More arguments at home", note: "Arguments over money and debts are a common family harm. Family and couples therapy can help.", changeable: true },
        { id: "children", label: "Children upset or struggling at school", note: "Children can show signs of distress. Support is there for other family members too, such as children.", changeable: true },
        { id: "safety", label: "Feeling unsafe at home", note: "Gambling has been linked to domestic abuse. Refuge can help you find specialist support.", changeable: true },
      ],
    },
    sources: [EOE_HARMS, RCPSYCH, GAW_SIGNS, NICE, GAW_FF_AFFECTED, GAW_EVERYDAY, NHS_GAMBLING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Roughly how many people are affected for every one person with a gambling problem?",
      options: [{ text: "Around seven", right: true }, { text: "None" }, { text: "Only one" }],
      why: "In the UK, around seven people are affected for every one person who has a gambling problem.",
    },
  },
  {
    id: "gamb-getting-help",
    kicker: "Getting help",
    question: "Where can I get free help for gambling?",
    hook: "You do not need a GP letter or a crisis to ask for help. NHS gambling clinics take self-referrals, and the helpline never closes.",
    short: "In England there are specialist NHS gambling clinics you can refer yourself to, with teams of psychiatrists and psychologists. The National Gambling Helpline is free, confidential and open 24 hours a day, every day. Charities, peer support and Gamblers Anonymous offer free support too.",
    sections: [
      {
        heading: "NHS gambling clinics",
        paragraphs: [
          "You can go to a specialist NHS gambling treatment clinic in England. Their teams of psychiatrists and psychologists can treat you, support your recovery, help with complex health needs related to gambling, and support your family or friends.",
          "You can refer yourself to a clinic near you, or ask a GP about services in your area. The NHS lists the National Problem Gambling Clinic and the Northern, Southern, West Midlands, East Midlands, East of England and South West gambling services.",
          "Each service covers its own area and ages. The National Gambling Clinic, for example, sees people aged 13 to 18 from anywhere in England, and adults living in Greater London.",
        ],
      },
      {
        heading: "After you refer yourself",
        paragraphs: [
          "Referral is usually a short online form, and staff can help you complete it over the phone. The Northern Gambling Service says it will contact you with next steps within one to three days.",
          "At the National Gambling Clinic, you are sent a questionnaire shortly before your assessment. A plan for treatment is agreed at the assessment and usually starts straight away, online, by phone or in person.",
        ],
      },
      {
        heading: "The National Gambling Helpline",
        paragraphs: [
          "The National Gambling Helpline, run by GamCare, is free on 0808 8020 133, 24 hours a day, 7 days a week, for information, support and counselling. In England and Scotland there is also a live chat, and you can contact it anonymously.",
          "If you live in Wales, a free NHS Wales helpline is available on 0808 2819 265, 24 hours a day, 7 days a week.",
        ],
      },
      {
        heading: "Other free support",
        paragraphs: [
          "Charities and support groups offer free, confidential support to people who gamble and their friends and family. The NHS lists GambleAware's support network, the Primary Care Gambling Service, GamLearn, ChapterOne and Citizens Advice.",
          "Gamblers Anonymous holds meetings every day of the week across England, Wales and Ulster. No appointment is needed, it does not charge for meetings, and members only share their first name.",
          "NICE recommends offering peer support as part of treatment for people who want it, as a chance to hear what has worked for other people.",
        ],
      },
      {
        heading: "Taking the first step",
        paragraphs: [
          "Do not wait until things get worse. Stigma, embarrassment and worry about debt can get in the way, but by reaching out for help you can start to feel more in control.",
          "If you are not sure what to say, you could start by telling a trusted friend or family member that you feel you may be losing control of how often you gamble.",
        ],
      },
    ],
    helps: [
      "Refer yourself to your local NHS gambling clinic, or ask a GP about services in your area.",
      "Call the National Gambling Helpline free on 0808 8020 133, any time, or use its live chat.",
      "Go along to a Gamblers Anonymous meeting: no appointment is needed.",
      "Use GambleAware's service finder to find free support near you.",
      "Talk to a trusted friend or family member as a first step.",
      CRISIS,
    ],
    tryThisWeek: [
      "Fill in a clinic self-referral form.",
      "Call the National Gambling Helpline.",
      "Find a Gamblers Anonymous meeting.",
    ],
    ask: "Can you refer me to the NHS gambling service for my area, or should I refer myself?",
    interactive: {
      kind: "timeline",
      title: "From first step to treatment",
      steps: [
        { id: "reach-out", when: "Day one", title: "Reach out", points: ["Refer yourself to a clinic, or ask a GP.", "Or call the helpline on 0808 8020 133, any time."] },
        { id: "contact", when: "Within days", title: "They get in touch", points: ["Some services contact you within one to three days.", "Staff can help you complete the form by phone."] },
        { id: "assess", when: "Assessment", title: "Talking it through", points: ["You may be sent a questionnaire first.", "A treatment plan is agreed with you."] },
        { id: "treat", when: "Treatment", title: "Working on it", points: ["Online, by phone or in person.", "Support for family and friends too."] },
        { id: "after", when: "Afterwards", title: "Ongoing support", points: ["Peer support and groups can help.", "Support and quick re-entry to therapy can continue."] },
      ],
    },
    sources: [NHS_GAMBLING, RCPSYCH, NGC, NGS_REFERRAL, GAW_GETHELP, GAW_TALKING, NICE, GAMBLERS_ANON, GAMBLERS_ANON_FAQS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do you need a GP referral for an NHS gambling clinic?",
      options: [{ text: "No, you can refer yourself", right: true }, { text: "Yes, always" }, { text: "Only after a crisis" }],
      why: "You can refer yourself to a clinic near you, or ask a GP about services in your area.",
    },
  },
  {
    id: "gamb-blocking",
    kicker: "Treat & manage",
    question: "How can I block gambling and exclude myself?",
    hook: "Willpower is hard at midnight with a phone in your hand. Blocks put a wall between you and the bet, and each one adds another layer.",
    short: "You can register with GAMSTOP to block online gambling accounts, install blocking software, ask your bank to block gambling payments, and self-exclude from betting shops, casinos, bingo halls and arcades. Each step adds another layer of protection, and doing even one today is already a great step.",
    sections: [
      {
        heading: "Online gambling: GAMSTOP",
        paragraphs: [
          "GAMSTOP is a free national self-exclusion scheme for online gambling in Great Britain, and registration takes around five minutes. Once registered, you cannot open or use accounts with any online gambling company licensed in Great Britain for the period you choose.",
          "The NHS says GAMSTOP stops you using gambling websites and apps for 6 months, 1 year or 5 years. You can extend your registration through your account.",
        ],
      },
      {
        heading: "Blocking software",
        paragraphs: [
          "Blocking software stops gambling websites and apps from loading on your phone, tablet or computer. This can help reduce unplanned gambling and create space to think more clearly.",
          "BetBlocker is a free app, and you choose how long the block lasts. Gamban blocks thousands of gambling websites and apps worldwide, with a seven-day free trial followed by a paid subscription.",
          "Many mobile networks can block gambling sites on your phone, and gambling sites can also be blocked through your home WiFi router.",
        ],
      },
      {
        heading: "Bank blocks",
        paragraphs: [
          "Many banks let you block gambling payments on your debit or credit card. It does not close your bank account or affect your credit score.",
          "Look in your banking app for a gambling block or card controls, or ask your bank if it offers one. Some banks have a cooling-off period before a block can be removed.",
        ],
      },
      {
        heading: "Betting shops, casinos, bingo and arcades",
        paragraphs: [
          "Free multi operator schemes let you make a single request to self-exclude from the same type of venue in your area. You can call the GAMSTOP betting shops line free on 0800 294 2060, use SENSE for casinos, and the Bingo Industry Self-Exclusion Scheme for bingo halls.",
          "For arcades and adult gaming centres, you can self-exclude in person at the venue, or call 01482 441 142 and select option 1 for advice.",
        ],
      },
      {
        heading: "What self-exclusion means",
        paragraphs: [
          "Self-exclusion is a formal agreement not to gamble, and it is up to you to stick to it. The gambling business must close your account, return any money in it, and remove your details from its marketing databases.",
          "If you try to gamble during that time, the business must take reasonable steps to stop you. If you were allowed to gamble while self-excluded, let the business know, and you can complain to the Gambling Commission.",
          "Alongside self-exclusion, you should also seek support. NICE also suggests ways to limit access to money, such as agreeing that a family member will take control of finances.",
        ],
      },
    ],
    helps: [
      "Register with GAMSTOP to block your online gambling accounts.",
      "Install blocking software, such as Gamban or BetBlocker, on your devices.",
      "Ask your bank to block any money going to gambling websites and apps.",
      "Self-exclude from betting shops, casinos and bingo halls near you.",
      "Combine steps: each one adds another layer of protection.",
      CRISIS,
    ],
    tryThisWeek: [
      "Register with GAMSTOP.",
      "Turn on your bank's gambling block.",
      "Install blocking software.",
    ],
    ask: "Which blocks and self-exclusions would suit the way I gamble?",
    interactive: {
      kind: "flip-cards",
      title: "Your blocking toolkit",
      intro: "Turn each card to see what each block covers.",
      cards: [
        { id: "gamstop", front: "GAMSTOP", when: "Online gambling accounts", back: "Free. Blocks accounts with online gambling companies licensed in Great Britain, for 6 months, 1 year or 5 years." },
        { id: "software", front: "Blocking software", when: "Websites and apps on your devices", back: "Stops gambling sites loading. BetBlocker is free; Gamban has a free trial, then a subscription." },
        { id: "bank", front: "Bank gambling block", when: "Card payments", back: "Gambling payments are declined. It does not close your account or affect your credit score." },
        { id: "shops", front: "GAMSTOP betting shops", when: "Bookmakers in your area", back: "One free call on 0800 294 2060 to self-exclude from multiple bookmakers." },
        { id: "sense", front: "SENSE", when: "Casinos", back: "Self-exclusion from all licensed land-based casinos in Great Britain." },
        { id: "bingo", front: "Bingo Industry Self-Exclusion", when: "Bingo halls", back: "Covers all licensed land-based bingo premises. Register in person or by phone." },
      ],
    },
    sources: [NHS_GAMBLING, GAW_BLOCKING, GC_SELFEX, GC_SCHEMES, GC_BANK, GAMSTOP_HOME, EOE_CONTROL, CA_GAMBLING, NICE, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does registering with GAMSTOP do?",
      options: [{ text: "Blocks your online gambling accounts for the period you choose", right: true }, { text: "Blocks one website only" }, { text: "Pays back your losses" }],
      why: "Once registered, you cannot open or use accounts with any online gambling company licensed in Great Britain for the period you choose.",
    },
  },
  {
    id: "gamb-therapy",
    kicker: "Treatment",
    question: "What happens in CBT and other treatments for gambling?",
    hook: "Gambling disorder can be treated. CBT works on the thoughts that keep the bets coming, and a medicine can help when urges stay strong.",
    short: "The main treatment is cognitive behavioural therapy (CBT), often in a group, which helps you find more helpful ways to think and behave around gambling. It can reduce the days you gamble and the money you lose, and help you stay away from gambling for longer. A specialist may offer a medicine called naltrexone if therapy has not been enough.",
    sections: [
      {
        heading: "CBT for gambling",
        paragraphs: [
          "CBT is a type of talking therapy that helps people find more helpful ways of thinking and behaving. Research shows it can reduce the number of days you spend gambling and the amount of money you lose, and help you stay away from gambling for longer once you have stopped.",
          "NICE recommends group CBT, started as soon as possible, with one-to-one CBT if a group is not possible or not suitable. A course usually has 8 to 10 sessions in a group or 6 to 8 one-to-one, and includes how to deal with triggers and how to respond to a relapse.",
        ],
      },
      {
        heading: "What you work on",
        paragraphs: [
          "In CBT you learn ways to reduce your opportunities to gamble, manage cravings and triggers, and challenge gambling-related thoughts, such as believing you can win back losses by gambling more. There are often tasks to complete between sessions.",
          "Therapy can include motivational interviewing, which helps you find and act on your own reasons for change, and imaginal desensitisation, where you imagine being exposed to gambling triggers without acting on them.",
        ],
      },
      {
        heading: "Inside an NHS clinic",
        paragraphs: [
          "At the National Gambling Clinic, treatment starts with short regular sessions to boost motivation and put practical barriers in place to reduce access to gambling. CBT follows, one-to-one or in a group, and some people go on to psychodynamic therapy and a group for support after treatment.",
          "Treatment can be online, by phone or in person, and the team can work jointly with mental health teams if you need other support too.",
        ],
      },
      {
        heading: "Naltrexone",
        paragraphs: [
          "Naltrexone is a medicine commonly used for alcohol and opioid addiction, and there is good evidence it can help with gambling disorder. NICE says it may be considered if therapy has not worked well enough, or after repeated relapses despite therapy.",
          "It is usually started by a specialist, such as a psychiatrist in an NHS gambling service, rather than by a GP. Before starting, liver and kidney function are checked, a plan is agreed to monitor how it is working, and therapy can continue alongside it.",
        ],
      },
      {
        heading: "Support around therapy",
        paragraphs: [
          "You may also need practical help, such as with debts, family problems or other psychological problems, and support from people who have experienced gambling problems themselves. NICE recommends offering peer support as part of treatment for people who want it.",
          "After therapy, it is important to keep using the skills you have learned. NICE says support, follow-up and quick re-entry to therapy should continue after a course of treatment, according to your needs.",
        ],
      },
    ],
    helps: [
      "Ask your local NHS gambling service about group or one-to-one CBT.",
      "Complete the tasks between sessions to build on what you cover in therapy.",
      "Put practical barriers in place to reduce your access to gambling.",
      "Ask a specialist whether naltrexone could help if urges stay strong after therapy.",
      "Keep using your skills after the course has finished.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask about CBT for gambling.",
      "Do your between-session tasks.",
      "Keep using your skills.",
    ],
    ask: "Would group or one-to-one CBT suit me, and when might naltrexone be considered?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments, card by card",
      intro: "Turn each card to see when each one is used and what it does.",
      cards: [
        { id: "cbt", front: "Cognitive behavioural therapy", when: "The main treatment, often in a group", back: "Helps you find more helpful ways to think and behave, and manage cravings and triggers." },
        { id: "mi", front: "Motivational interviewing", when: "If you are unsure about starting", back: "Helps you find and act on your own reasons for wishing to change." },
        { id: "imaginal", front: "Imaginal desensitisation", when: "Part of some therapy", back: "Imagining being exposed to gambling triggers, but not acting on them." },
        { id: "restructuring", front: "Cognitive restructuring", when: "Part of CBT", back: "Spotting and changing inaccurate or unhelpful thinking about gambling." },
        { id: "naltrexone", front: "Naltrexone", when: "If therapy has not been enough", back: "A medicine started by a specialist. It can help people reduce gambling and stay away from it." },
        { id: "peer", front: "Peer support", when: "Alongside treatment", back: "A chance to hear what has worked for others who have been through it." },
      ],
    },
    sources: [RCPSYCH, NICE, NGC, NHS_CBT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How many sessions does a group CBT course for gambling usually have?",
      options: [{ text: "8 to 10", right: true }, { text: "Just 1" }, { text: "More than 50" }],
      why: "A course usually has 8 to 10 sessions in a group or 6 to 8 one-to-one.",
    },
  },
  {
    id: "gamb-money",
    kicker: "Money",
    question: "How do I get help with money and debt from gambling?",
    hook: "Debt can feel like a reason to keep gambling. Free, confidential debt advice is a better way out, and it helps to start early.",
    short: "Deal with debts rather than ignoring them: free debt charities such as National Debtline, StepChange and Citizens Advice can help you work out what to deal with first. Paying important bills on payday, limiting access to cash and asking others not to lend you money can protect what you have. If a lender let you borrow when it should have known you gamble, you may be able to complain.",
    sections: [
      {
        heading: "You do not have to face debt alone",
        paragraphs: [
          "Money struggles can feel overwhelming, but you are not alone. The NHS advises dealing with your debts rather than ignoring them, and Citizens Advice says to start as soon as you can.",
          "National Debtline gives free, confidential and independent debt advice on 0808 808 4000, or by webchat. StepChange also gives free debt advice on 0800 138 1111, and Citizens Advice can help you work out which debts to deal with first.",
        ],
      },
      {
        heading: "Protect the money you have",
        paragraphs: [
          "Pay important bills, such as your mortgage, on payday before you gamble; direct debits or standing orders can do this for you. Set aside money for all essential expenses, such as utility bills, food shopping, rent and mortgage payments.",
          "Leave credit and cash cards at home when you go out, set withdrawal limits on your bank account, and move money into a savings account on payday. Ask friends and family not to lend you money, even if you ask them.",
          "If you cannot manage this, you could consider allowing someone else to handle your money for an agreed period.",
        ],
      },
      {
        heading: "Lenders, banks and loan sharks",
        paragraphs: [
          "If you used borrowed money to gamble, and your lender should have known you gamble before lending, you can complain. If the complaint is successful, the lender should remove or refund charges and interest, although you will usually still have to repay what you borrowed.",
          "Your bank will not refund money you have lost gambling, but speaking to it might help if you are having financial difficulties. If you owe money to a loan shark, contact the police as soon as possible, as these are illegal lenders.",
        ],
      },
      {
        heading: "Not a way to make money",
        paragraphs: [
          "The NHS says not to view gambling as a way to make money. If you win, it will happen by chance, and savings or investments should never be spent on gambling.",
          "If you are not sure how to start, you could ask a bank or adviser how to clear your gambling debt, or how to protect your family from gambling-related debt.",
        ],
      },
    ],
    helps: [
      "Pay important bills on payday, before you gamble, with direct debits or standing orders.",
      "Get free debt advice from National Debtline on 0808 808 4000, or from StepChange or Citizens Advice.",
      "Leave credit and cash cards at home, and set withdrawal limits on your account.",
      "Ask friends and family not to lend you money, even if you ask them.",
      "Complain to a lender if it let you borrow to gamble when it should have known.",
      CRISIS,
    ],
    tryThisWeek: [
      "Set up direct debits for key bills.",
      "Call a free debt adviser.",
      "Ask family not to lend you money.",
    ],
    ask: "Is there help for my debt, and who can I talk to about it?",
    interactive: {
      kind: "scenarios",
      title: "Money moments",
      scenarios: [
        {
          id: "payday",
          situation: "It is payday and you feel the pull to gamble.",
          options: [{ text: "Pay your important bills first", best: true }, { text: "Gamble first, pay bills later" }],
          why: "Pay important bills, such as your mortgage, on payday before you gamble. Direct debits or standing orders can do it for you.",
        },
        {
          id: "letters",
          situation: "Letters about debts keep arriving.",
          options: [{ text: "Get free debt advice", best: true }, { text: "Leave them unopened" }],
          why: "Deal with your debts rather than ignoring them. National Debtline gives free, confidential debt advice.",
        },
        {
          id: "lender",
          situation: "A lender gave you a loan when your statements showed gambling.",
          options: [{ text: "Look into complaining to the lender", best: true }, { text: "Do nothing about it" }],
          why: "If your lender should have known you gamble before lending, you can complain, and charges or interest may be removed.",
        },
        {
          id: "borrow",
          situation: "You want to ask a friend for money to gamble.",
          options: [{ text: "Remember you asked them not to lend", best: true }, { text: "Promise to repay it after a win" }],
          why: "Ask friends and family not to lend you money, even if you ask them. If you win, it happens by chance.",
        },
      ],
    },
    sources: [NHS_GAMBLING, RCPSYCH, GAW_BUDGET, CA_GAMBLING, NATIONAL_DEBTLINE, GAMSTOP_DEBT, EOE_CONTROL, GAW_TALKING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Will your bank refund money you have lost gambling?",
      options: [{ text: "No, but speaking to it might still help", right: true }, { text: "Yes, always" }, { text: "Only if you ask twice" }],
      why: "Your bank will not refund money you have lost gambling, but speaking to it might help if you are having financial difficulties.",
    },
  },
  {
    id: "gamb-urges",
    kicker: "Daily life",
    question: "How can I cope with the urge to gamble?",
    hook: "Urges often follow a pattern: a place, a feeling, an advert. Knowing yours makes it easier to step around them.",
    short: "Urges can be set off by triggers such as passing a betting shop, gambling adverts, alcohol, or difficult feelings after an argument or disappointment. Planning around them, filling time with other activities and talking to someone can help. Treatment such as CBT, and sometimes a medicine, can help with strong cravings.",
    sections: [
      {
        heading: "Know your triggers",
        paragraphs: [
          "Arguments, disappointments or frustrations can create an urge to gamble, and so can wanting to celebrate good fortune or escape worry. These are among the questions Gamblers Anonymous asks people to think about.",
          "Ask yourself how you feel when you decide to gamble and why you are doing it. Many people use gambling as a distraction from difficult thoughts or feelings, but over time it can make things worse.",
        ],
      },
      {
        heading: "Avoid gambling settings",
        paragraphs: [
          "Change your route home so you do not pass gambling venues, and plan alternatives to going to the races. Avoid the slot machines at pubs, arcades and bowling alleys, and if your local pub has fruit machines, do not go on your own when you could be tempted.",
          "If a friend wants you to go to the casino, suggest something different to do together. When a challenging event is coming up, plan ahead: think of ways to leave, and someone you can ask for support.",
        ],
      },
      {
        heading: "Cut down the adverts",
        paragraphs: [
          "Blocking apps give some protection from gambling adverts. Social media platforms let you change the types of adverts you see, Google lets you mute similar adverts, and you can switch TV channels when gambling adverts come on.",
          "NICE says understanding your triggers, including exposure to advertising and marketing, may help prevent relapse.",
        ],
      },
      {
        heading: "Fill the time",
        paragraphs: [
          "Spend more quality time with family or friends, take up a new hobby or return to one you enjoyed before gambling took over, and join a social group or plan events with friends who do not gamble.",
          "If you are still gambling while you get help, set a limit on how often, avoid quick go moments, and set an alarm to remind you to stop. Drugs and alcohol make it harder to stick to your limits.",
        ],
      },
      {
        heading: "Help with strong urges",
        paragraphs: [
          "CBT helps you manage cravings and triggers, and can include imagining facing a trigger without acting on it. At the National Gambling Clinic, naltrexone can be used alongside treatment to reduce urges.",
          "Talking to others about your worries can help. The National Gambling Helpline is free on 0808 8020 133, 24 hours a day, 7 days a week.",
        ],
      },
    ],
    helps: [
      "Notice what sets off your urges, such as arguments, disappointments or adverts.",
      "Change your route home so you do not pass gambling venues.",
      "Change your social media advert settings, and switch channels when gambling adverts come on.",
      "Plan time with friends who do not gamble, or take up a hobby.",
      "Talk to someone, or call the National Gambling Helpline free on 0808 8020 133.",
      CRISIS,
    ],
    tryThisWeek: [
      "Notice what sets off your urges.",
      "Take a route that avoids venues.",
      "Mute gambling adverts.",
    ],
    ask: "My urges are strong: could CBT or naltrexone help me manage them?",
    interactive: {
      kind: "risk-check",
      title: "Your triggers",
      intro: "Tick any that apply to you. Each one is something you can plan around.",
      items: [
        { id: "route", label: "Passing betting shops or arcades", note: "Change your route home so you do not pass any gambling venues.", changeable: true },
        { id: "adverts", label: "Gambling adverts and offers", note: "Change your social media advert settings, use blocking apps, and switch TV channels.", changeable: true },
        { id: "pub", label: "Fruit machines at the pub", note: "Do not go on your own when you could be tempted to use them.", changeable: true },
        { id: "feelings", label: "Arguments or disappointments", note: "These can create an urge to gamble. Talking to others about your worries can help.", changeable: true },
        { id: "friends", label: "Friends who want to gamble", note: "Suggest something different to do together, or spend time with friends who do not gamble.", changeable: true },
        { id: "drink", label: "Drinking or using drugs", note: "Drugs and alcohol make it harder to stick to limits. Tell someone you trust about your plan.", changeable: true },
      ],
    },
    sources: [RCPSYCH, EOE_CONTROL, GAW_ADVICE, GAMBLERS_ANON_20Q, NGC, NICE, NHS_GAMBLING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What can you do if a friend wants you to go to the casino with them?",
      options: [{ text: "Suggest something different to do together", right: true }, { text: "Go, but only for a quick go" }, { text: "Never see that friend again" }],
      why: "If a friend wants you to go to the casino, suggest something different to do together.",
    },
  },
  {
    id: "gamb-relapse",
    kicker: "Recovery",
    question: "What if I slip up and gamble again?",
    hook: "A slip is not the end of recovery. It can be part of it, and a plan to get back on track makes the next step easier.",
    short: "Relapse is not shameful and does not mean you have failed: NICE says it may be part of a recovery journey. Having a plan in place to recover quickly increases confidence and reduces shame. Getting back in touch with your treatment service, support group or the helpline quickly can help.",
    sections: [
      {
        heading: "Not a failure",
        paragraphs: [
          "NICE says relapse is not shameful, and it may be part of a recovery journey or a learning event. It does not mean individual failure, and having a plan in place to recover quickly increases confidence and reduces shame.",
          "Once gambling becomes a problem, it can be hard to keep control and not return to gambling problematically. This is similar to other addictive behaviours, such as alcohol use.",
        ],
      },
      {
        heading: "Why slips happen",
        paragraphs: [
          "Relapse can happen because of individual or environmental factors. Understanding the causes and triggers, including exposure to advertising and marketing, may help.",
          "Even after a period without gambling, a short spell of less intense gambling can lead to severe harms in some people. One risky time is after debts have been paid off, when someone may convince themselves that occasional gambling will not affect them.",
        ],
      },
      {
        heading: "Getting back on track",
        paragraphs: [
          "If you slip, it can help to write down what led to it, so you can understand more about why it happened and what to watch out for in the future.",
          "NICE says support, follow-up and quick re-entry to therapy should continue after treatment. Extra help could include more sessions of CBT, peer support or support groups, and help with money, work, housing or relationships.",
          "The National Gambling Clinic offers a three-session relapse prevention course for people who have already had a period away from gambling, and a group for support after treatment.",
        ],
      },
      {
        heading: "Keeping the barriers up",
        paragraphs: [
          "Skills taught in treatment, such as using blocking tools and ways of coping with high-risk situations, can reduce the chance of relapse.",
          "If you have gambled while self-excluded, let the gambling business know, as it helps them find where their procedures could be improved.",
          "Gamblers Anonymous groups hold open meetings where members gather with friends and family to be recognised for staying away from gambling for a number of years.",
        ],
      },
      {
        heading: "When a slip feels overwhelming",
        paragraphs: [
          "NICE recognises that relapse after treatment can be very distressing. If you need urgent help, call 111 and select the mental health option, or call Samaritans on 116 123, at any time.",
        ],
      },
    ],
    helps: [
      "Remember a slip is not a failure: get back in touch with your support quickly.",
      "Write down what led to the slip and what to watch out for next time.",
      "Ask your treatment service about extra sessions or a relapse prevention course.",
      "Keep using blocking tools and your plans for high-risk situations.",
      "Go back to a support group, such as Gamblers Anonymous.",
      CRISIS,
    ],
    tryThisWeek: [
      "Get back in touch with your support.",
      "Write down what led to the slip.",
      "Keep your blocking tools on.",
    ],
    ask: "If I slip, how quickly can I get back into treatment or have extra sessions?",
    interactive: {
      kind: "scenarios",
      title: "After a slip",
      scenarios: [
        {
          id: "last-night",
          situation: "You gambled last night after months away from it.",
          options: [{ text: "Tell your support team or group", best: true }, { text: "Hide it and hope it passes" }],
          why: "Relapse is not shameful. Support and quick re-entry to therapy should continue after treatment.",
        },
        {
          id: "debts-paid",
          situation: "Your debts are paid off and you think one bet would not hurt.",
          options: [{ text: "Remember this is a risky time", best: true }, { text: "Have just one" }],
          why: "When debts are paid off, people may convince themselves occasional gambling will not affect them. A short spell can still lead to severe harms.",
        },
        {
          id: "why",
          situation: "You want to understand what happened.",
          options: [{ text: "Write down what led to it", best: true }, { text: "Try not to think about it" }],
          why: "Writing down what led to a relapse can help you understand why it happened and what to watch out for.",
        },
        {
          id: "self-excluded",
          situation: "A site let you gamble while you were self-excluded.",
          options: [{ text: "Let the business know", best: true }, { text: "Keep using the account" }],
          why: "If you have gambled while self-excluded, let the gambling business know, as it helps them improve their procedures.",
        },
      ],
    },
    sources: [NICE, GAW_FF_HELPING, RCPSYCH, NGC, GC_SELFEX, GAMBLERS_ANON, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How does NICE describe relapse?",
      options: [{ text: "Not shameful, and possibly part of a recovery journey", right: true }, { text: "Proof that treatment has failed" }, { text: "A reason to stop getting support" }],
      why: "NICE says relapse is not shameful, and it may be part of a recovery journey or a learning event.",
    },
  },
  {
    id: "gamb-family",
    kicker: "Family & friends",
    question: "How can I help someone whose gambling worries me?",
    hook: "You cannot make someone stop. But a kind conversation, care for yourself and the right support can change a lot.",
    short: "Start with kindness: tell them you are worried because you care, listen without judging, and avoid confrontation. Look after your own wellbeing and finances, and get support for yourself from NHS gambling clinics, GamAnon, GamFam or the National Gambling Helpline. Celebrate progress, and if they slip, keep offering support.",
    sections: [
      {
        heading: "Starting the conversation",
        paragraphs: [
          "Let them know the reason you are concerned is because you care and want to help. If they feel safe and supported, they are more likely to talk openly and honestly.",
          "Keep calm and positive, avoid saying anything that might come across as judgemental or confrontational, and listen patiently without interrupting. You could ask whether they want to talk about how they are feeling about their gambling.",
          "Words matter. Try not to use terms that reduce someone's identity to their behaviour, and say a person who gambles instead.",
        ],
      },
      {
        heading: "Look after yourself",
        paragraphs: [
          "When you are focused on someone else's gambling, it can be easy to overlook your own needs. You can only take care of someone else when you are looking after yourself too.",
          "Take time out for yourself, spend time with friends and family, and make time for things you find relaxing. You might not always be able to help the other person, but you can set limits and clear boundaries for yourself.",
        ],
      },
      {
        heading: "Protecting money and home",
        paragraphs: [
          "Protect your finances, and get support if you are struggling financially. If you live with someone experiencing gambling harms, you may want to block gambling on all the devices in your home.",
          "Some partners register with GAMSTOP themselves so their details cannot be used to gamble online. If someone has borrowed money in your name without your permission, this is illegal, and you do not need to pay it back yourself.",
        ],
      },
      {
        heading: "Support for you",
        paragraphs: [
          "NHS gambling treatment clinics can support family and friends. NICE says families and others close to the person should be offered help on their own, or together with the person who gambles if both agree.",
          "GamAnon runs meetings for anyone affected by someone else's gambling, usually on the same nights as Gamblers Anonymous but in separate rooms. GamFam offers help and support, and the National Gambling Helpline on 0808 8020 133 is there for anyone worried about someone else's gambling.",
          "Gambling with Lives supports people bereaved by gambling-related suicide.",
        ],
      },
      {
        heading: "Progress and setbacks",
        paragraphs: [
          "Celebrate progress: if someone is doing well with reducing or stopping their gambling, tell them. If they start gambling again, try not to be too disappointed, and continue to offer them support.",
          "If someone makes threats to their own life, contact emergency services immediately: call 999, or contact Samaritans.",
        ],
      },
    ],
    helps: [
      "Tell them you are worried because you care, and listen without judging.",
      "Use kind words, such as a person who gambles, rather than labels.",
      "Look after your own wellbeing, and take time out for yourself.",
      "Protect your finances, and block gambling on the devices in your home.",
      "Get support for yourself from GamAnon, GamFam, an NHS clinic or the National Gambling Helpline.",
      CRISIS,
    ],
    tryThisWeek: [
      "Start one kind, calm conversation.",
      "Take time out for yourself.",
      "Contact GamAnon or GamFam.",
    ],
    ask: "Is there support for my partner or family, and can we be seen together or separately?",
    interactive: {
      kind: "scenarios",
      title: "What to say, what to do",
      scenarios: [
        {
          id: "start",
          situation: "You want to raise their gambling for the first time.",
          options: [{ text: "Say you are worried because you care", best: true }, { text: "List everything they have done wrong" }],
          why: "Let them know you are concerned because you care. Avoid anything that might come across as judgemental or confrontational.",
        },
        {
          id: "words",
          situation: "You are talking with family about what is happening.",
          options: [{ text: "Say a person who gambles", best: true }, { text: "Use a label for them" }],
          why: "Try not to use terms that reduce someone's identity to their behaviour. Use respectful, compassionate language.",
        },
        {
          id: "loan",
          situation: "You find a loan in your name that you did not agree to.",
          options: [{ text: "Get advice: you do not have to repay it", best: true }, { text: "Pay it off quietly" }],
          why: "If someone has borrowed money in your name without your permission, this is illegal. You do not need to pay it back yourself.",
        },
        {
          id: "slip",
          situation: "They gamble again after doing well.",
          options: [{ text: "Keep offering support", best: true }, { text: "Give up on them" }],
          why: "If they start gambling again, try not to be too disappointed. Continue to offer them support.",
        },
      ],
    },
    sources: [GAW_FF_HELPING, GAW_TALKING, GAW_FF_AFFECTED, RCPSYCH, NHS_GAMBLING, GAMANON, GAMSTOP_FAMILY, NICE, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What is the best way to start a conversation about someone's gambling?",
      options: [{ text: "Show kindness and listen", right: true }, { text: "Confront them in front of others" }, { text: "Wait until things get worse" }],
      why: "To make them feel more comfortable about opening up, the best way to start a conversation is to show kindness and listen to them.",
    },
  },
  {
    id: "gamb-crisis",
    kicker: "Urgent help",
    question: "What can I do if I feel I cannot cope?",
    hook: "If gambling has left you feeling desperate, you do not have to wait until morning or work it out alone. Help is there right now.",
    short: "If you need urgent help for your mental health, call 111 and select the mental health option, or ask for an urgent GP appointment. Samaritans are free on 116 123, any time, and you can text SHOUT to 85258. If a life is at risk, or you cannot keep yourself safe, call 999 or go to A&E.",
    sections: [
      {
        heading: "Right now",
        paragraphs: [
          "If you need urgent help for your mental health, get help from 111 online or call 111 and select the mental health option. You may be able to speak to a trained mental health professional, or you can ask for an urgent GP appointment.",
          "Call 999 or go to A&E now if someone's life is at risk, or you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
      {
        heading: "Someone to talk to",
        paragraphs: [
          "Samaritans listen, and will not judge or tell you what to do. You can call them free on 116 123, any time, day or night, from any phone, and the number will not come up on your phone bill.",
          "If you do not want to talk on the phone, you can text SHOUT to 85258, 24 hours a day, every day. If you are under 19, you can also call Childline on 0800 1111.",
        ],
      },
      {
        heading: "Gambling and these feelings",
        paragraphs: [
          "Gambling harms can include anxiety, depression and suicidal thoughts. NICE says the risk may be highest immediately after a gambling episode.",
          "The National Gambling Clinic says it supports people with gambling harm but cannot offer crisis interventions. In a crisis, it suggests contacting your GP, community mental health team, A&E or the police.",
          "The National Gambling Helpline is also free on 0808 8020 133, 24 hours a day, every day of the year.",
        ],
      },
      {
        heading: "Getting through today",
        paragraphs: [
          "Try not to think about the future: just focus on getting through today. Stay away from drugs and alcohol, get yourself to a safe place like a friend's house, and be around other people.",
          "Let family or friends know what is going on for you. There is no right or wrong way to talk about suicidal feelings: starting the conversation is what is important.",
        ],
      },
      {
        heading: "A plan for hard moments",
        paragraphs: [
          "If you struggle with suicidal thoughts, or are supporting someone else, it may help to make a safety plan to use if you need it. The Staying Safe website has video tutorials and online templates to guide you.",
        ],
      },
    ],
    helps: [
      "Call 111 and select the mental health option, or ask for an urgent GP appointment.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "Text SHOUT to 85258 if you would rather not talk.",
      "Focus on getting through today, and get to a safe place with other people.",
      "Make a safety plan to use in hard moments.",
      "Call 999 or go to A&E if a life is at risk or you cannot keep yourself safe.",
    ],
    tryThisWeek: [
      "Know the 111 mental health option.",
      "Keep Samaritans' 116 123 to hand.",
      "Make a safety plan.",
    ],
    ask: "Can you help me make a safety plan, and who should I contact if I feel this way again?",
    interactive: {
      kind: "flip-cards",
      title: "Who to contact",
      intro: "Turn each card to see when to use each one.",
      cards: [
        { id: "999", front: "999 or A&E", when: "If a life is at risk", back: "Or if you cannot keep yourself or someone else safe. You will not be wasting anyone's time." },
        { id: "111", front: "NHS 111, mental health option", when: "Urgent help, any hour", back: "Call 111 and select the mental health option, or use 111 online." },
        { id: "samaritans", front: "Samaritans, 116 123", when: "To talk, day or night", back: "Free from any phone. They listen and will not judge or tell you what to do." },
        { id: "shout", front: "Shout, 85258", when: "If you would rather text", back: "Text SHOUT to 85258, 24 hours a day, every day." },
        { id: "helpline", front: "National Gambling Helpline", when: "Gambling worries, any time", back: "Free on 0808 8020 133, 24 hours a day, every day." },
        { id: "gp", front: "Your GP", when: "Urgent, but not an emergency", back: "Ask for an urgent appointment. A GP can also help you access mental health services." },
      ],
    },
    sources: [NHS_URGENT, NHS_SUICIDAL, SAMARITANS, RCPSYCH, NICE, NGC, GAW_GETHELP],
    quiz: {
      question: "When should you call 999 or go to A&E?",
      options: [{ text: "If a life is at risk or you cannot keep yourself safe", right: true }, { text: "Only after trying every helpline" }, { text: "Never for mental health" }],
      why: "Call 999 or go to A&E now if someone's life is at risk, or you do not feel you can keep yourself or someone else safe.",
    },
  },
];
