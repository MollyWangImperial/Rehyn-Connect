import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Postnatal depression page's pieces (content/library-conditions/mind-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (the
// postnatal depression, postpartum psychosis, pregnancy, baby and medicine pages, and Best Start in Life),
// the Royal College of Psychiatrists, the PANDAS Foundation and Samaritans. Mind's pages could not be read
// today (the site answered 403 with a bot check), so they are not cited.
// Safe messaging throughout: no method details, kind and never blaming, hopeful and practical, and every
// answer gives the crisis routes as the NHS words them (call 111 and select the mental health option;
// Samaritans 116 123; text "SHOUT" to 85258; 999 or A&E). Postpartum psychosis is described as a medical
// emergency in the NHS's own words. Nothing here suggests stopping or changing a medicine without the
// doctor. General information only; it never replaces what a person's own GP, midwife, health visitor or
// mental health team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const rcpsych = (label: string, path: string): LearnSource => ({ label: `Royal College of Psychiatrists: ${label}`, url: `https://www.rcpsych.ac.uk/mental-health/${path}` });
const pandas = (label: string, path: string): LearnSource => ({ label: `PANDAS Foundation: ${label}`, url: `https://pandasfoundation.org.uk/${path}` });

const NHS_PND = nhs("Postnatal depression", "mental-health/conditions/postnatal-depression/");
const NHS_PP = nhs("Postpartum psychosis", "mental-health/conditions/post-partum-psychosis/");
const NHS_MH_PREG = nhs("Mental health in pregnancy", "pregnancy/mental-health-in-pregnancy-and-after-the-birth/mental-health/");
const NHS_ANTIDEP = nhs("Antidepressants", "medicines/antidepressants/");
const NHS_SERTRALINE = nhs("Sertraline", "medicines/sertraline/");
const NHS_SLEEP = nhs("Sleep and tiredness after having a baby", "baby/support-and-services/sleep-and-tiredness-after-having-a-baby/");
const NHS_FIT = nhs("Keeping fit and healthy with a baby", "baby/support-and-services/keeping-fit-and-healthy-with-a-baby/");
const NHS_CHECK = nhs("Your 6-week postnatal check", "baby/support-and-services/your-6-week-postnatal-check/");
const NHS_SERVICES = nhs("Services and support for parents", "baby/support-and-services/services-and-support-for-parents/");
const NHS_RELATIONSHIPS = nhs("Relationships after having a baby", "baby/support-and-services/relationships-after-having-a-baby/");
const NHS_BOND = nhs("Building a close relationship with your baby", "best-start-in-life/baby/baby-basics/bonding-with-your-baby/building-a-close-relationship-with-your-baby/");
const NHS_YOUR_MH = nhs("Best Start in Life: Your mental health", "best-start-in-life/baby/your-mental-health/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_ALCOHOL = nhs("Alcohol-use disorder", "conditions/alcohol-use-disorder/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const RCP_PND = rcpsych("Postnatal depression", "mental-illnesses-and-mental-health-problems/postnatal-depression");
const RCP_KEY = rcpsych("Postnatal depression: key facts", "mental-illnesses-and-mental-health-problems/postnatal-depression-key-facts");
const RCP_CARERS = rcpsych("Postnatal depression for carers", "mental-illnesses-and-mental-health-problems/postnatal-depression-for-carers");
const RCP_PREG = rcpsych("Mental health in pregnancy", "treatments-and-wellbeing/mental-health-in-pregnancy");
const RCP_PERINATAL = rcpsych("What are perinatal mental health services?", "treatments-and-wellbeing/what-are-perinatal-mental-health-services");
const RCP_PLANNING = rcpsych("Planning a pregnancy", "treatments-and-wellbeing/planning-a-pregnancy");

const PANDAS_SERVICES = pandas("Our support", "our-services/");
const PANDAS_PERINATAL = pandas("Perinatal mental health", "what-is-pnd/perinatal-mental-health/");
const PANDAS_DADS_MH = pandas("Dads' mental health", "what-is-pnd/dads-mental-health/");
const PANDAS_DADS = pandas("Support for dads and carers", "our-services/support-for-dads/");

const SAM_CONTACT: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

/** The crisis routes, worded as NHS "Where to get urgent help" and "Help for suicidal thoughts" give them. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you cannot keep yourself or someone else safe.";

export const pndAnswers: LearnArticle[] = [
  {
    id: "pnd-what-it-is",
    kicker: "Understanding",
    question: "What is postnatal depression?",
    hook: "A common illness after having a baby, not a sign of being a bad parent. It usually gets better with treatment.",
    short: "Postnatal depression is a common mental health condition that can happen after having a baby. Symptoms can begin while you're pregnant, soon after birth, or up to a year after your baby is born. It can happen to anyone, it is not your fault, and it usually gets better with treatment.",
    sections: [
      {
        heading: "A common illness after birth",
        paragraphs: [
          "Postnatal depression (PND), also called postpartum depression, is a common mental health condition that can happen after having a baby. It usually gets better with treatment.",
          "It is a depressive illness which affects between 10 and 15 in every 100 women having a baby. The symptoms are similar to those in depression at other times, including low mood and other symptoms lasting at least two weeks.",
        ],
      },
      {
        heading: "When it starts",
        paragraphs: [
          "Symptoms can begin while you're pregnant, soon after birth, or up to a year after your baby is born.",
          "It often starts within one or two months of giving birth, but it can start several months after having a baby. About a third of women with PND have symptoms which started in pregnancy and continue after birth.",
        ],
      },
      {
        heading: "Not your fault",
        paragraphs: [
          "Sometimes there is an obvious reason for PND, but not always. You may feel distressed, or guilty for feeling like this, because you expected to be happy about having a baby. PND can happen to anyone and it is not your fault.",
          "Fathers and partners can also have depression after having a baby.",
        ],
      },
      {
        heading: "It gets better",
        paragraphs: [
          "Postnatal depression usually gets better in 3 to 6 months, but it can sometimes last for much longer. It's more likely to get better with treatment.",
          "It's never too late to seek help. Even if you have been depressed for a while, you can get better.",
        ],
      },
    ],
    helps: [
      "Speak to your GP, midwife or health visitor if you think you might have postnatal depression.",
      "Get help even if you only have some of the signs: you're more likely to get better with treatment.",
      "If you're 18 or over (or 16 or over in some areas), you can refer yourself to NHS talking therapies without seeing a GP.",
      "Tell someone how you feel: your partner, a relative, a friend, your health visitor or your GP.",
      CRISIS,
    ],
    tryThisWeek: [
      "Speak to your GP, midwife or health visitor.",
      "Look up NHS talking therapies.",
      "Tell someone how you feel.",
    ],
    ask: "Could what I am feeling be postnatal depression?",
    interactive: {
      kind: "scenarios",
      title: "Is it time to ask for help?",
      scenarios: [
        {
          id: "some-signs",
          situation: "You have some of the signs, but not all of them.",
          options: [{ text: "Get help anyway", best: true }, { text: "Wait until you have them all" }],
          why: "Get help even if you only have some of the signs: you're more likely to get better with treatment.",
        },
        {
          id: "too-late",
          situation: "You have felt this way for months and think it's too late.",
          options: [{ text: "Ask for help now", best: true }, { text: "Decide it's too late to change" }],
          why: "It's never too late to seek help. Even if you have been depressed for a while, you can get better.",
        },
        {
          id: "guilty",
          situation: "You feel guilty for not being happy about the baby.",
          options: [{ text: "Remember it is not your fault", best: true }, { text: "Decide you are a bad parent" }],
          why: "PND can happen to anyone and it is not your fault.",
        },
        {
          id: "partner",
          situation: "Your partner has seemed low since the birth.",
          options: [{ text: "Encourage them to talk to a GP", best: true }, { text: "Assume it only affects mothers" }],
          why: "Fathers and partners can also have depression after having a baby.",
        },
      ],
    },
    sources: [NHS_PND, RCP_PND, RCP_KEY, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When can symptoms of postnatal depression begin?",
      options: [{ text: "In pregnancy, soon after birth, or up to a year after", right: true }, { text: "Only in the first week" }, { text: "Only after the baby's first birthday" }],
      why: "Symptoms can begin while you're pregnant, soon after birth, or up to a year after your baby is born.",
    },
  },
  {
    id: "pnd-baby-blues",
    kicker: "Understanding",
    question: "Is it the baby blues, or postnatal depression?",
    hook: "Tears and mood swings in the first days are very common and pass quickly. If they last beyond two weeks, it's time to talk to someone.",
    short: "Feeling down, anxious or irritable for a few days after your baby is born is very common, and is sometimes called the baby blues. It usually goes away within 2 weeks of the birth. If it continues, gets worse or you're struggling to cope, it's important to get help.",
    sections: [
      {
        heading: "The baby blues",
        paragraphs: [
          "Feeling down, anxious or irritable for a few days after your baby is born is very common. This is sometimes called the baby blues, and it usually goes away within 2 weeks of the birth.",
          "Over half of new mothers will experience the baby blues. It usually starts 3 to 4 days after birth. You may have mood swings, burst into tears easily, feel irritable, low and anxious at times, or over-react to things.",
        ],
      },
      {
        heading: "Why it is different",
        paragraphs: [
          "The baby blues usually stop by the time your baby is about 10 days old. Women with baby blues do not need treatment.",
          "Having a baby is a time of huge change, and it is common to feel many different emotions. Not everyone gets a depressive illness.",
        ],
      },
      {
        heading: "When it might be more",
        paragraphs: [
          "If the low feelings continue, get worse, or you're struggling to cope, it's important to get help. If they continue for more than 2 weeks, tell your health visitor or GP. They can check whether you have PND.",
          "Postnatal depression means low mood and other symptoms lasting at least two weeks. Don't dismiss it as the baby blues, and don't assume it's normal to feel like this when coping with a baby.",
        ],
      },
      {
        heading: "Postpartum psychosis is different again",
        paragraphs: [
          "Postpartum psychosis is very different from the baby blues. It's a serious mental illness and should be treated as a medical emergency. It affects around 1 in 1,000 mothers after giving birth.",
          "Symptoms usually start suddenly within the first 2 weeks after giving birth, often within hours or days. See a GP immediately if you think you, or someone you know, may have symptoms, and request an urgent assessment on the same day.",
        ],
      },
    ],
    helps: [
      "If low feelings last more than 2 weeks after the birth, tell your health visitor or GP.",
      "Get help sooner if the feelings get worse or you're struggling to cope.",
      "Answer your midwife's or health visitor's questions about your mood honestly, so you can be offered help if you need it.",
      "If you think someone may have postpartum psychosis, see a GP immediately and request an urgent assessment on the same day.",
      CRISIS,
    ],
    tryThisWeek: [
      "Tell your health visitor after 2 weeks.",
      "Answer mood questions honestly.",
      "Get same-day help for psychosis signs.",
    ],
    ask: "Are these the baby blues, or could it be postnatal depression?",
    interactive: {
      kind: "timeline",
      title: "The weeks after the birth",
      steps: [
        { id: "days-3-4", when: "Days 3 to 4", title: "Baby blues may start", points: ["Mood swings, tears, feeling irritable or anxious.", "Over half of new mothers have the baby blues."] },
        { id: "first-2-weeks", when: "The first 2 weeks", title: "A sudden, severe change", points: ["Postpartum psychosis usually starts suddenly in this time.", "It should be treated as a medical emergency."] },
        { id: "day-10", when: "By about day 10", title: "Blues usually easing", points: ["The baby blues usually stop by about 10 days.", "They do not need treatment."] },
        { id: "after-2-weeks", when: "After 2 weeks", title: "Still low? Tell someone", points: ["Tell your health visitor or GP.", "They can check whether you have PND."] },
        { id: "first-year", when: "Up to a year", title: "PND can start later", points: ["It often starts within one or two months of birth.", "It can start several months after having a baby."] },
      ],
    },
    sources: [NHS_PND, RCP_PND, NHS_PP, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How long do the baby blues usually last?",
      options: [{ text: "They usually go within 2 weeks of the birth", right: true }, { text: "Around six months" }, { text: "They never pass without medicine" }],
      why: "This is sometimes called the baby blues, and it usually goes away within 2 weeks of the birth.",
    },
  },
  {
    id: "pnd-symptoms",
    kicker: "Symptoms",
    question: "What are the signs, in me or in my partner?",
    hook: "Low mood, no joy, guilt, worry, and sleepless nights even when the baby sleeps. Knowing the signs helps you, or someone close to you, get help sooner.",
    short: "Symptoms of postnatal depression include low mood, finding it hard to enjoy anything, feeling hopeless or guilty, worrying all the time, and difficulty sleeping even when you get time to rest. It is important for you and those around you to be aware of these feelings lasting. Fathers and partners can also have depression after having a baby.",
    sections: [
      {
        heading: "The main signs",
        paragraphs: [
          "Symptoms of postnatal depression include low mood, finding it hard to enjoy anything, and feeling hopeless or that you cannot cope. You may feel guilty or worthless, or that you're a bad parent.",
          "You may feel fearful, anxious, or worry all the time, or feel restless or irritable. Some people have difficulty concentrating or making decisions, or difficult feelings about bonding with their baby.",
        ],
      },
      {
        heading: "Tired, but cannot sleep",
        paragraphs: [
          "All new mothers get pretty tired, but depression can make you feel utterly exhausted and lacking in energy. Even though you are tired, you may not be able to fall asleep, or you may wake during the night even when your baby is asleep.",
          "If you cannot sleep at night even when your baby is asleep, or you feel tired all the time, these could be signs of postnatal depression. You may also lose your appetite and forget to eat, or eat for comfort.",
        ],
      },
      {
        heading: "Worry and guilt",
        paragraphs: [
          "Most new mothers worry about their babies' health. With PND, the anxiety can be overwhelming, and you may worry that your baby is very ill, or that your PND will never get better.",
          "Depression changes your thinking. You might think you are not a good mother, feel guilty for feeling like this, or lose your confidence. You may not want to see friends and family.",
        ],
      },
      {
        heading: "Signs in a partner",
        paragraphs: [
          "Fathers and partners can also have depression after having a baby. Signs PANDAS lists for dads include feeling low most of the time, irritability and outbursts, avoiding social situations, struggling to bond with the baby, and drinking more alcohol.",
          "New fathers are often so involved in caring for their newborn and supporting their partner's recovery that their own mental health declines over time, sometimes without notice.",
        ],
      },
      {
        heading: "Thoughts to tell someone about",
        paragraphs: [
          "Some people have thoughts of suicide, or of harming themselves or their baby. Depressed mothers often worry that they might harm their baby, but it is very rare, and most never act on these feelings. If you feel like this, tell someone.",
          "If you have thoughts about harming yourself, ask your doctor for help. If you have a strong urge to harm yourself, seek urgent help.",
        ],
      },
    ],
    helps: [
      "Speak to your GP, midwife or health visitor, even if you only have some of the signs.",
      "If you cannot sleep even when your baby is asleep, or feel tired all the time, talk to a GP or health visitor.",
      "Help the people around you to be aware of these feelings lasting: PND is a very treatable condition.",
      "If you are a father and think you may have depression, talk to your GP.",
      CRISIS,
    ],
    tryThisWeek: [
      "Speak up, even with only some signs.",
      "Mention sleeping badly when baby sleeps.",
      "Dads: talk to your GP too.",
    ],
    ask: "Could my sleep, worry or low mood be signs of postnatal depression?",
    interactive: {
      kind: "signs",
      title: "Signs to mention",
      intro: "Tick any you have noticed in yourself or your partner. The ones you tick make a list to take to your GP, midwife or health visitor.",
      signs: ["Low mood", "Finding it hard to enjoy anything", "Feeling hopeless or unable to cope", "Feeling guilty or like a bad parent", "Worrying all the time", "Restless or irritable", "Can't sleep even when the baby sleeps", "Exhausted and lacking energy", "Losing appetite, or comfort eating", "Hard to concentrate or decide", "Difficult feelings about the baby", "Avoiding friends and family"],
      after: "Tell your GP, midwife or health visitor. It's important to get help even if you only have some of the signs.",
      copyHeading: "Signs I have noticed",
    },
    sources: [NHS_PND, RCP_PND, NHS_SLEEP, PANDAS_DADS_MH, RCP_KEY, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Can fathers and partners get depression after a baby?",
      options: [{ text: "Yes, fathers and partners can too", right: true }, { text: "No, only mothers" }, { text: "Only if the baby is unwell" }],
      why: "Fathers and partners can also have depression after having a baby.",
    },
  },
  {
    id: "pnd-causes",
    kicker: "Causes",
    question: "Why does it happen, and who is more likely to get it?",
    hook: "There is rarely one reason. Stress, lack of sleep, hormones and what is happening in your life can add up, and it can also start for no obvious reason.",
    short: "It's not known exactly what causes postnatal depression. The stress of taking care of a new baby, lack of sleep and hormonal changes in pregnancy may all be involved. It is more likely if you have had mental health problems before, have little support or have been through difficult life events, but it can happen to anyone.",
    sections: [
      {
        heading: "No single cause",
        paragraphs: [
          "It's not known what exactly causes postnatal depression. The stress of taking care of a new baby, lack of sleep, and hormonal changes in pregnancy may all be involved.",
          "There is probably no single reason, but a number of different stresses may add up to cause it. PND can start for no obvious reason, and having risk factors does not mean you will definitely have it.",
        ],
      },
      {
        heading: "Your health before and during pregnancy",
        paragraphs: [
          "It is more likely if you have had depression or another mental health condition before or during your pregnancy.",
          "There may be a physical cause for your depression, such as an underactive thyroid or low levels of vitamin B12. These can be easily treated.",
        ],
      },
      {
        heading: "What is happening around you",
        paragraphs: [
          "Recent difficult life events, such as losing a job or the death of someone close to you, can increase your risk. So can relationship problems, not having enough social support, and experiencing domestic violence or abuse.",
          "Having a premature or unwell baby, or twins or multiples, can also make it more likely. The Royal College of Psychiatrists adds having arrived in a developed country as a refugee or to seek asylum.",
        ],
      },
      {
        heading: "Other things that can play a part",
        paragraphs: [
          "PANDAS lists other risk factors, including birth trauma, a previous miscarriage or baby loss, money or housing worries, and childhood trauma. These do not guarantee you will become unwell, but they can add stress and worry.",
          "Nobody has to put up with domestic abuse. It puts your health and the health of your baby at risk. Talk to your doctor, health visitor or midwife, or call 999 if you're in immediate danger.",
        ],
      },
    ],
    helps: [
      "If you have had depression before, keep in touch with your GP or health visitor, so signs can be recognised early.",
      "A physical cause, such as an underactive thyroid or low vitamin B12, may play a part, and can be easily treated.",
      "Accept offers of help from friends and family.",
      "If you are experiencing domestic abuse, talk to your doctor, health visitor or midwife; women can call the 24-hour National Domestic Abuse Helpline on 0808 2000 247.",
      CRISIS,
    ],
    tryThisWeek: [
      "Keep in touch with your GP and health visitor.",
      "Accept offers of help.",
      "Get help if you're experiencing abuse.",
    ],
    ask: "Could anything physical, like my thyroid, be adding to how I feel?",
    interactive: {
      kind: "risk-check",
      title: "What can make it more likely?",
      intro: "Tick any that apply. Some of these can change, and some cannot. None of them means you will definitely get PND.",
      items: [
        { id: "before", label: "Mental health problems before", note: "Depression or another condition before or during pregnancy raises the risk. Your GP or health visitor can watch for early signs.", changeable: false },
        { id: "support", label: "Not enough support", note: "Not having enough social support raises the risk. Accept offers of help from friends and family.", changeable: true },
        { id: "events", label: "A recent difficult life event", note: "Such as losing a job, or the death of someone close to you.", changeable: false },
        { id: "baby", label: "A premature or unwell baby, or twins", note: "Having a premature or unwell baby, or twins or multiples, can increase your risk.", changeable: false },
        { id: "relationship", label: "Relationship problems", note: "You can contact a relationship counsellor, some for free. Relate offers many types of relationship counselling.", changeable: true },
        { id: "abuse", label: "Domestic violence or abuse", note: "Nobody has to put up with domestic abuse. Talk to your doctor, health visitor or midwife.", changeable: true },
        { id: "physical", label: "A physical cause", note: "An underactive thyroid or low vitamin B12 can cause depression. These can be easily treated.", changeable: true },
      ],
    },
    sources: [NHS_PND, RCP_PND, PANDAS_PERINATAL, NHS_RELATIONSHIPS, RCP_KEY, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Does having a risk factor mean you will definitely get PND?",
      options: [{ text: "No, it does not", right: true }, { text: "Yes, always" }, { text: "Only if you have two or more" }],
      why: "PND can start for no obvious reason, and having risk factors does not mean you will definitely have it.",
    },
  },
  {
    id: "pnd-getting-help",
    kicker: "Getting help",
    question: "How do I tell my health visitor, midwife or GP?",
    hook: "Saying it out loud is the first step. They ask because they want to help, and having your baby taken away is very rare.",
    short: "Speak to your GP, midwife or health visitor if you think you might have postnatal depression, even if you only have some of the signs. They will ask how you've been feeling, and may ask you to fill in a questionnaire. You may be scared that your baby will be taken away if you ask for help, but this is very rare.",
    sections: [
      {
        heading: "Who to tell",
        paragraphs: [
          "Speak to your GP, midwife or health visitor if you think you might have postnatal depression. It's important to get help even if you only have some of the signs.",
          "Your health visitor will usually do a new baby review at home around 10 days after your baby is born. Talk to them if you're struggling with your mental health: they can give you advice and suggest where to find help.",
        ],
      },
      {
        heading: "What they will ask",
        paragraphs: [
          "They will ask you questions about how you've been feeling, and you may be asked to fill in a questionnaire about your symptoms. If they think you have postnatal depression, they'll talk to you about the treatment and support available.",
          "They may ask whether, during the last month, you have been bothered by feeling down, depressed or hopeless, or by having little interest or pleasure in doing things. It is important to answer honestly so that you can be offered help if you need it.",
        ],
      },
      {
        heading: "Your 6-week check",
        paragraphs: [
          "You should have your postnatal check 6 to 8 weeks after your baby's birth. You'll be asked how you're feeling as part of a general discussion about your mental health and wellbeing.",
          "Tell your doctor if you're feeling sad or anxious. Do not feel you have to struggle alone or put on a brave face. It's not a sign that you're a bad parent.",
        ],
      },
      {
        heading: "Worried your baby will be taken away?",
        paragraphs: [
          "You may be scared that your baby will be taken away if you ask for help or share how you're feeling, but this is very rare. Your care team will give you the support you need to care for your baby.",
          "In fact, you are doing what is best for your baby and for yourself by getting help. If you don't get the help you think you need straight away, you can ask for a second opinion or see a different GP.",
        ],
      },
      {
        heading: "Other ways in",
        paragraphs: [
          "If you're 18 or over, or 16 or over in some areas, you can refer yourself directly to an NHS talking therapies service without a referral from a GP.",
          "PANDAS offers a free and confidential WhatsApp support service with trained volunteers, a free callback service, and a toolkit to help you talk to your GP, health visitor or midwife about how you are feeling.",
        ],
      },
    ],
    helps: [
      "Speak to your GP, midwife or health visitor, even if you only have some of the signs.",
      "Answer questions about your mood honestly, so you can be offered help if you need it.",
      "At your 6-week postnatal check, tell your doctor if you're feeling sad or anxious.",
      "If you don't get the help you need straight away, ask for a second opinion or see a different GP.",
      "Book a free callback with PANDAS, or use their toolkit for talking to your GP.",
      CRISIS,
    ],
    tryThisWeek: [
      "Tell your GP, midwife or health visitor.",
      "Answer mood questions honestly.",
      "Book a PANDAS callback.",
    ],
    ask: "Can I be referred for talking therapy or a perinatal mental health team?",
    interactive: {
      kind: "scenarios",
      title: "Getting the words out",
      scenarios: [
        {
          id: "fine",
          situation: "Your health visitor asks how you are, and you want to say \"fine\".",
          options: [{ text: "Tell them how you really feel", best: true }, { text: "Put on a brave face" }],
          why: "Do not feel you have to struggle alone or put on a brave face. It's not a sign that you're a bad parent.",
        },
        {
          id: "taken-away",
          situation: "You worry your baby will be taken away if you speak up.",
          options: [{ text: "Speak up anyway", best: true }, { text: "Keep it to yourself" }],
          why: "You may be scared that your baby will be taken away if you ask for help or share how you're feeling, but this is very rare.",
        },
        {
          id: "not-heard",
          situation: "You don't feel you got the help you needed from your GP.",
          options: [{ text: "Ask for a second opinion", best: true }, { text: "Give up asking" }],
          why: "If you don't get the help you think you need straight away, you can ask for a second opinion or see a different GP.",
        },
        {
          id: "no-words",
          situation: "You don't know how to start the conversation.",
          options: [{ text: "Use the PANDAS toolkit", best: true }, { text: "Say nothing" }],
          why: "PANDAS offers a free and confidential WhatsApp support service with trained volunteers, a free callback service, and a toolkit to help you talk to your GP, health visitor or midwife about how you are feeling.",
        },
      ],
    },
    sources: [NHS_PND, NHS_SERVICES, RCP_PND, NHS_CHECK, PANDAS_SERVICES, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "If you ask for help with postnatal depression, how often is a baby taken away?",
      options: [{ text: "This is very rare", right: true }, { text: "Usually" }, { text: "Always, for a few weeks" }],
      why: "You may be scared that your baby will be taken away if you ask for help or share how you're feeling, but this is very rare.",
    },
  },
  {
    id: "pnd-talking",
    kicker: "Treatment",
    question: "Which talking therapies and support groups can help?",
    hook: "Talking helps, however depressed you are. NHS talking therapies usually give priority to new parents, and you can often bring your baby.",
    short: "Talking therapies such as cognitive behavioural therapy (CBT) are a main treatment for postnatal depression. You can refer yourself to NHS talking therapies, and women who are pregnant or have recently had a baby are usually given priority. Support groups, and charities such as PANDAS, can help you feel less alone.",
    sections: [
      {
        heading: "Talking helps",
        paragraphs: [
          "Talking about your feelings can be helpful, however depressed you are. Talking to a trained counsellor or therapist can be easier than talking to someone close to you, and it can help you make sense of your difficulties.",
          "Treatments for postnatal depression include talking therapies such as cognitive behavioural therapy (CBT). You may get treatment from your GP, a talking therapies service, or a specialist community perinatal mental health team.",
        ],
      },
      {
        heading: "CBT and other therapies",
        paragraphs: [
          "In CBT, a therapist helps you to change how you think and act. You'll usually have between 5 and 15 sessions, in person, online or on the phone, one-to-one or as part of a group.",
          "Other options include guided self-help, counselling, interpersonal therapy, which looks at problems in your relationships, and couples therapy with your partner.",
        ],
      },
      {
        heading: "Getting it on the NHS",
        paragraphs: [
          "You can refer yourself to NHS talking therapies without speaking to a GP, or your GP, midwife or health visitor can refer you. You need to be registered with a GP and aged 18 or over, or 16 or over in some areas.",
          "Women who are pregnant or have recently had a baby are usually given priority, and you can often bring your baby to appointments. Some services have groups just for pregnant women or new mums.",
        ],
      },
      {
        heading: "Support groups",
        paragraphs: [
          "Going to a local support group or parent and baby group can help. You may not feel like going if you are depressed, so see if someone can go with you. You may find some women who feel the same way as you do.",
          "PANDAS runs face-to-face group support tailored around your mental health, and a drop-in support call you can join and leave at any time.",
        ],
      },
      {
        heading: "If it is hard to get",
        paragraphs: [
          "Talking therapies are still hard to get in some areas. National guidelines state that women with PND should be seen within a month, but sometimes there are long waiting lists.",
          "Talking treatments are usually very safe, but talking about things may bring up bad memories. Make sure you can trust your therapist and that they have the necessary training.",
        ],
      },
    ],
    helps: [
      "Refer yourself to NHS talking therapies, or ask your GP, midwife or health visitor to refer you.",
      "Women who are pregnant or have recently had a baby are usually given priority, and can often bring their baby.",
      "Try a local support group or parent and baby group; see if someone can go with you.",
      "Find a PANDAS group, or join their drop-in support call.",
      "Make sure you can trust your therapist and that they have the necessary training.",
      CRISIS,
    ],
    tryThisWeek: [
      "Refer yourself to talking therapies.",
      "Try a parent and baby group.",
      "Join a PANDAS support call.",
    ],
    ask: "Can I be referred for talking therapy, and can I bring my baby?",
    interactive: {
      kind: "flip-cards",
      title: "Support, card by card",
      intro: "Turn each card to see when it might suit you and what it involves.",
      cards: [
        { id: "cbt", front: "CBT", when: "A main talking therapy for PND", back: "A therapist helps you change how you think and act. Usually 5 to 15 sessions." },
        { id: "guided", front: "Guided self-help", when: "Often offered first", back: "A workbook or online course with a therapist's help, based on CBT." },
        { id: "counselling", front: "Counselling", when: "To talk things through", back: "A therapist listens to your thoughts and feelings and helps you find your own solutions." },
        { id: "ipt", front: "Interpersonal therapy", when: "When relationships are hard", back: "You talk about problems in your relationships and learn ways to deal with them." },
        { id: "couples", front: "Couples therapy", when: "With your partner", back: "You and your partner talk to a therapist who helps you deal with problems in your relationship." },
        { id: "groups", front: "Support groups", when: "To meet others who understand", back: "Local parent and baby groups, or PANDAS groups tailored around your mental health." },
      ],
    },
    sources: [RCP_PND, NHS_PND, NHS_CBT, NHS_TALKING, PANDAS_SERVICES, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Who is usually given priority by NHS talking therapies?",
      options: [{ text: "Women who are pregnant or have recently had a baby", right: true }, { text: "Only people referred by a hospital" }, { text: "No one; it is first come, first served" }],
      why: "Women who are pregnant or have recently had a baby are usually given priority, and you can often bring your baby to appointments.",
    },
  },
  {
    id: "pnd-medicines",
    kicker: "Medicines",
    question: "Can I take antidepressants while breastfeeding?",
    hook: "Many antidepressants are safe to use while breastfeeding. Your doctor will help you weigh up what is right for you and your baby.",
    short: "Many antidepressants are safe to use while breastfeeding: tell your doctor if you're breastfeeding and they will prescribe one that's suitable for you. Antidepressants take at least 2 weeks to start working, and you'll usually take them for around 6 months after you start to feel better. Do not stop taking one suddenly or without talking to your doctor first.",
    sections: [
      {
        heading: "When they are used",
        paragraphs: [
          "If you have a more severe depression, or it has not improved with support or a talking therapy, an antidepressant will probably help. For more severe depression, you may need medication, with or without talking therapy.",
          "There are several types of antidepressants. They all work equally well but have different side effects, and they are not addictive. Some are safer than others if you are breastfeeding.",
        ],
      },
      {
        heading: "Breastfeeding",
        paragraphs: [
          "Many antidepressants are safe to use while breastfeeding. Tell your doctor if you're breastfeeding and they will prescribe a medicine that's suitable for you.",
          "For many antidepressants, there is no evidence that they cause problems for breastfed babies, so breastfeeding is usually possible. If your baby is unwell or premature the advice may change, and you can talk to the doctor looking after your baby about this.",
          "Sertraline, for example, can often be used while breastfeeding. It passes into breast milk in small amounts, and it's rare for breastfed babies to get side effects of medicines you're using.",
        ],
      },
      {
        heading: "Weighing it up",
        paragraphs: [
          "The decision is an individual one. You and your doctor can think about how severe your illness is, treatments that have helped before, side effects, the benefits of breastfeeding, and the impact of untreated illness on your baby.",
          "Sometimes women feel guilty if they can't breastfeed. If you are unable to, you should not worry: it is more important for your baby that you are well, and you will still develop a close bond if you bottle feed.",
        ],
      },
      {
        heading: "The first weeks",
        paragraphs: [
          "Antidepressants take at least 2 weeks to start working, and can take up to 8 weeks to work fully. Many side effects ease after a couple of weeks as your body gets used to the medicine.",
          "When you first start, you will be seen by a doctor every 1 to 2 weeks. It's not common, but if you have suicidal thoughts or an urge to self-harm when you start, speak to your doctor straight away.",
        ],
      },
      {
        heading: "Keeping going, and stopping safely",
        paragraphs: [
          "You'll usually take them for around 6 months after you start to feel better. Do not stop taking an antidepressant suddenly or without talking to your doctor first; they will help you reduce the dose gradually.",
          "St John's wort can interfere with other medicines, including the contraceptive pill, and there is not enough information to say that it is safe in breastfeeding. Discuss it with your doctor.",
        ],
      },
    ],
    helps: [
      "Tell your doctor if you're breastfeeding, so they can prescribe a medicine that's suitable for you.",
      "Keep taking your antidepressant: it can take several weeks until your symptoms start to improve.",
      "Talk to your doctor if side effects are hard to manage, or you do not feel it is helping.",
      "Do not stop taking it suddenly or without talking to your doctor first.",
      "Speak to a healthcare professional or call NHS 111 if you have any concerns about your baby.",
      CRISIS,
    ],
    tryThisWeek: [
      "Tell your doctor you're breastfeeding.",
      "Report side effects to your doctor.",
      "Never stop suddenly on your own.",
    ],
    ask: "Which medicines are safe while breastfeeding?",
    interactive: {
      kind: "timeline",
      title: "Starting an antidepressant after a baby",
      steps: [
        { id: "before", when: "Before starting", title: "Say you're breastfeeding", points: ["Your doctor will prescribe one that's suitable for you.", "If your baby is unwell or premature, the advice may change."] },
        { id: "weeks-1-2", when: "Weeks 1 to 2", title: "Check-ins and side effects", points: ["You will see a doctor every 1 to 2 weeks.", "Many side effects ease after a couple of weeks."] },
        { id: "weeks-2-8", when: "From 2 weeks", title: "Starting to help", points: ["They take at least 2 weeks to start working.", "They can take up to 8 weeks to work fully."] },
        { id: "any-time", when: "At any point", title: "Thoughts to report", points: ["Tell your doctor straight away about suicidal thoughts.", "If you cannot keep yourself safe, call 999 or go to A&E."] },
        { id: "six-months", when: "After you feel better", title: "Keep going", points: ["You'll usually carry on for around 6 months.", "Stop only with your doctor, reducing gradually."] },
      ],
    },
    sources: [RCP_PND, NHS_PND, NHS_SERTRALINE, NHS_ANTIDEP, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Can you take antidepressants while breastfeeding?",
      options: [{ text: "Many are safe; tell your doctor you're breastfeeding", right: true }, { text: "No, never" }, { text: "Only herbal remedies are safe" }],
      why: "Many antidepressants are safe to use while breastfeeding. Tell your doctor if you're breastfeeding and they will prescribe a medicine that's suitable for you.",
    },
  },
  {
    id: "pnd-self-care",
    kicker: "Self-help",
    question: "What can I do for myself: rest, food and small breaks?",
    hook: "Looking after a baby is hard work, and depression makes it harder. Small things, like rest, regular meals and letting others help, all count.",
    short: "Coping with postnatal depression while looking after a baby can be very hard work, but there are things you can do to support your mental health. Try to get as much sleep and rest as you can, eat regularly, get some gentle exercise and ask for help with practical things. Do not use alcohol or drugs to manage your symptoms.",
    sections: [
      {
        heading: "Rest whenever you can",
        paragraphs: [
          "Take every opportunity to get some sleep or rest, during the day or night. Try to rest when your baby sleeps: it might be tempting to catch up with chores, but sometimes getting rest is more important.",
          "If you have a partner, ask them to help at night. If you're formula feeding they could share the feeds, and once breastfeeding is going well, they could occasionally give a bottle of expressed breast milk.",
        ],
      },
      {
        heading: "Food and movement",
        paragraphs: [
          "Try to eat regularly, even if you don't feel like eating, and eat healthy food. Cooking more than you need and freezing the extra portions can save time on other days.",
          "Regular exercise can boost your mood. Walking with your baby in the pram is good exercise, and your health visitor may know of mother and baby exercise classes in your area.",
        ],
      },
      {
        heading: "Let others help",
        paragraphs: [
          "Ask for help with practical things like shopping, chores and childcare. Let others help with housework, shopping and looking after other children.",
          "Don't try to be \"superwoman\". Try to do less and make sure that you don't get over-tired.",
        ],
      },
      {
        heading: "Small breaks",
        paragraphs: [
          "Make time to do things you enjoy, however small, like going for a walk, reading a magazine or listening to music.",
          "If you have a partner, try to enjoy some time together. If you are a single mother, try to do something enjoyable with a friend or family member.",
        ],
      },
      {
        heading: "Alcohol and drugs",
        paragraphs: [
          "Do not use illegal drugs or alcohol to manage your symptoms. They may make you feel better for a short time, but it doesn't last, and they can make depression worse.",
          "If you're dependent on alcohol, it can be very dangerous to stop drinking suddenly. If you get withdrawal symptoms, get medical help before you try to stop drinking.",
        ],
      },
    ],
    helps: [
      "Try to get as much sleep and rest as you can, and rest when your baby sleeps.",
      "Ask for help with practical things like shopping, chores and childcare.",
      "Try to eat regularly, even if you don't feel like eating.",
      "Try to get regular exercise, even if it's just a short daily walk.",
      "Make time to do things you enjoy, however small.",
      CRISIS,
    ],
    tryThisWeek: [
      "Rest when your baby sleeps.",
      "Ask for help with chores.",
      "Take a short daily walk.",
    ],
    ask: "Is there a mother and baby exercise class or support group near me?",
    interactive: {
      kind: "timeline",
      title: "A gentler day with a baby",
      steps: [
        { id: "morning", when: "Morning", title: "Accept help", points: ["A partner could help with nappies or dressing so you can go back to sleep.", "Ask for help with shopping and chores."] },
        { id: "daytime", when: "Daytime", title: "Get outside", points: ["Try to get out for a walk every day with your baby.", "Even if it's just to the shops."] },
        { id: "meals", when: "Mealtimes", title: "Eat regularly", points: ["Even if you don't feel like eating.", "Take up offers of a home-cooked dinner."] },
        { id: "naps", when: "When your baby naps", title: "Rest", points: ["Rest, rather than catch up on chores.", "Set an alarm if you're worried about sleeping too long."] },
        { id: "anytime", when: "Any time", title: "Something you enjoy", points: ["A walk, a magazine, or some music.", "However small."] },
        { id: "night", when: "Night", title: "Share the nights", points: ["A partner could share feeds if you formula feed.", "On your own, a friend could stay for a few days."] },
      ],
    },
    sources: [RCP_PND, NHS_SLEEP, NHS_FIT, NHS_PND, NHS_ALCOHOL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does the NHS suggest when your baby naps?",
      options: [{ text: "Try to rest, rather than catch up on chores", right: true }, { text: "Do all the housework" }, { text: "Stay awake in case they wake" }],
      why: "Try to rest when your baby sleeps: it might be tempting to catch up with chores, but sometimes getting rest is more important.",
    },
  },
  {
    id: "pnd-partners",
    kicker: "Partners",
    question: "What about partners, dads and other parents?",
    hook: "Partners can get depressed too, and they are also the people best placed to help. Both deserve support.",
    short: "Fathers and partners can also have depression after having a baby, and it may be more likely if the mother also has postnatal depression. Partners can help most by listening, taking the illness seriously and doing practical things. They need support for themselves too.",
    sections: [
      {
        heading: "Partners can get it too",
        paragraphs: [
          "Fathers and partners can also have depression after having a baby. This may be more likely if the mother also has postnatal depression.",
          "Up to 1 in 5 women and 1 in 10 men develop mental health problems such as depression or anxiety during pregnancy, or in the first year after childbirth.",
        ],
      },
      {
        heading: "Why dads can be missed",
        paragraphs: [
          "Pregnancy, labour and the newborn stage are demanding times for both parents. New fathers are often so involved in caring for their newborn and supporting their partner's recovery that their own mental health declines, sometimes without notice.",
          "Pressures can include limited paternity leave, changing relationships, money worries, and a focus on the mother and baby rather than you. There is no shame in struggling, and there is support out there.",
        ],
      },
      {
        heading: "How to help her",
        paragraphs: [
          "Take time to listen, offer encouragement and support, and reassure her that she will get better. Be mindful of the language you use: this is an illness, not something someone can \"snap out of\" or cure by \"thinking positively\".",
          "Do all you can to help with practical things, such as feeding and changing the baby, shopping, cooking or housework. Encourage her to get the help and treatment she needs.",
          "Take it seriously if she talks about not wanting to live or about harming herself, and make sure she seeks help urgently.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "It can be very stressful looking after someone with PND and the baby, and partners of women with PND have an increased risk of depression and anxiety. Don't be afraid to ask for help, and share your worries with trusted friends or family.",
          "If you are a father and think you may have depression, talk to your GP. It is important for you and your family that you get the help you need.",
        ],
      },
      {
        heading: "Support for dads and partners",
        paragraphs: [
          "If you live in England and are aged 18 or over, you can refer yourself to NHS talking therapies. PANDAS runs a monthly support call for dads and non-birthing parents, with male volunteers who have lived experience.",
          "You can ask your partner if you can stay for part of her appointments. Questions to ask the doctor include the treatment options, the care plan and the crisis plan, and an out-of-hours emergency telephone number.",
        ],
      },
    ],
    helps: [
      "Listen, offer encouragement, and reassure her that she will get better.",
      "Help with feeding and changing the baby, shopping, cooking and housework.",
      "Take talk of not wanting to live seriously, and make sure she seeks help urgently.",
      "If you are a father and think you may have depression, talk to your GP.",
      "Ask the doctor about the crisis plan and an out-of-hours emergency number.",
      CRISIS,
    ],
    tryThisWeek: [
      "Listen and reassure her.",
      "Take on feeds, shopping or cooking.",
      "Ask about the crisis plan.",
    ],
    ask: "What support is there for me as a partner, and what is the crisis plan?",
    interactive: {
      kind: "scenarios",
      title: "Moments for partners",
      scenarios: [
        {
          id: "bad-mother",
          situation: "She says she feels like a bad mother.",
          options: [{ text: "Listen, and reassure her she'll get better", best: true }, { text: "Tell her to think positively" }],
          why: "Take time to listen, offer encouragement and support, and reassure her that she will get better.",
        },
        {
          id: "pushed-aside",
          situation: "You feel pushed to one side and worn out.",
          options: [{ text: "Share your worries with someone you trust", best: true }, { text: "Keep it all to yourself" }],
          why: "Don't be afraid to ask for help, and share your worries with trusted friends or family.",
        },
        {
          id: "not-wanting-to-live",
          situation: "She mentions not wanting to live.",
          options: [{ text: "Take it seriously and get help urgently", best: true }, { text: "Wait to see if it passes" }],
          why: "Take it seriously if she talks about not wanting to live or about harming herself, and make sure she seeks help urgently.",
        },
        {
          id: "low-yourself",
          situation: "You have felt low for weeks yourself.",
          options: [{ text: "Talk to your GP", best: true }, { text: "Push through alone" }],
          why: "If you are a father and think you may have depression, talk to your GP.",
        },
      ],
    },
    sources: [NHS_PND, RCP_PND, NHS_YOUR_MH, PANDAS_DADS_MH, RCP_CARERS, PANDAS_DADS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do partners of women with PND have a higher risk of depression?",
      options: [{ text: "Yes, of depression and anxiety", right: true }, { text: "No, partners are protected" }, { text: "Only if they were depressed before" }],
      why: "It can be very stressful looking after someone with PND and the baby, and partners of women with PND have an increased risk of depression and anxiety.",
    },
  },
  {
    id: "pnd-bonding",
    kicker: "Your baby",
    question: "What if I'm finding it hard to bond with my baby?",
    hook: "Some parents feel close straight away; for others, the bond grows over time. Finding it hard is common, and help is there.",
    short: "For some parents a bond with their baby happens in pregnancy or soon after birth; for others it takes some time, and that's okay. Postnatal depression can make you feel less close to your baby, or guilty that you don't feel as you expected. If you're worried the bond isn't developing, talk to your midwife, health visitor or doctor.",
    sections: [
      {
        heading: "Every parent bonds at their own pace",
        paragraphs: [
          "For some parents and carers, a bond may happen in pregnancy or soon after birth. For others, it can take some time for a bond to grow. This is okay, and every parent or carer will bond at their own pace.",
          "It's not unusual for parents and carers to struggle, and there is help available if you need it.",
        ],
      },
      {
        heading: "How depression can affect it",
        paragraphs: [
          "With PND, you may feel guilty that you don't feel the way you expected to. You may not feel close to your baby, or find it hard to work out what your baby is feeling or needs.",
          "Difficult feelings about, or difficulty bonding with, your baby are among the symptoms of postnatal depression. Mental health difficulties, stress, and difficult experiences with pregnancy or earlier in life can all make bonding harder.",
        ],
      },
      {
        heading: "Small everyday moments",
        paragraphs: [
          "Each time you talk to your baby, sing to them, look into their eyes or respond to sadness with warmth, you are meeting their needs. Being touched, rocked, fed, cuddled and comforted all help too.",
          "You could try holding your baby when they reach for you, with skin-to-skin contact when you can, responding to the noises they make, and talking, reading or singing to them.",
        ],
      },
      {
        heading: "When things are tough",
        paragraphs: [
          "We might not always be as patient and warm as we would like, especially when we are tired. What is important is trying to reconnect with your baby when you can.",
          "You are doing what is best for your baby and for yourself by getting help for your PND.",
        ],
      },
      {
        heading: "Where to get help",
        paragraphs: [
          "If you are concerned that the bond with your baby isn't developing, talk to your midwife, health visitor or doctor. You can also find support at your local family hub.",
          "Some perinatal mental health services offer parent-infant therapies to help bonding, and support to build a positive relationship with your baby and confidence as a parent.",
        ],
      },
    ],
    helps: [
      "If you're worried the bond isn't developing, talk to your midwife, health visitor or doctor.",
      "Talk, read and sing to your baby, and make eye contact with them.",
      "Hold your baby when they reach for you; skin-to-skin contact is best when you can.",
      "After a hard moment, try to reconnect with your baby when you can.",
      "Some perinatal mental health services offer parent-infant therapies to help bonding.",
      CRISIS,
    ],
    tryThisWeek: [
      "Tell your health visitor if you're worried.",
      "Talk, read or sing to your baby.",
      "Reconnect after a hard moment.",
    ],
    ask: "Could a parent-infant therapy or a family hub help us bond?",
    interactive: {
      kind: "scenarios",
      title: "Everyday bonding moments",
      scenarios: [
        {
          id: "no-rush",
          situation: "You don't feel the rush of love you expected.",
          options: [{ text: "Remember bonds grow at their own pace", best: true }, { text: "Decide something is wrong with you" }],
          why: "For others, it can take some time for a bond to grow. This is okay, and every parent or carer will bond at their own pace.",
        },
        {
          id: "crying",
          situation: "Your baby is crying and you feel at a loss.",
          options: [{ text: "Try cuddling and comforting them", best: true }, { text: "Decide you are getting it wrong" }],
          why: "Being touched, rocked, fed, cuddled and comforted all help too.",
        },
        {
          id: "snapped",
          situation: "You lost patience when you were exhausted.",
          options: [{ text: "Reconnect when you can", best: true }, { text: "Believe the bond is ruined" }],
          why: "We might not always be as patient and warm as we would like, especially when we are tired. What is important is trying to reconnect with your baby when you can.",
        },
        {
          id: "distant",
          situation: "Weeks pass and you still feel distant.",
          options: [{ text: "Tell your health visitor", best: true }, { text: "Hide how you feel" }],
          why: "If you are concerned that the bond with your baby isn't developing, talk to your midwife, health visitor or doctor.",
        },
      ],
    },
    sources: [NHS_BOND, RCP_PND, NHS_PND, RCP_PERINATAL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Is it normal for a bond with your baby to take time?",
      options: [{ text: "Yes, every parent bonds at their own pace", right: true }, { text: "No, it always happens at birth" }, { text: "Only with bottle feeding" }],
      why: "This is okay, and every parent or carer will bond at their own pace.",
    },
  },
  {
    id: "pnd-urgent",
    kicker: "Urgent help",
    question: "When should I get help straight away?",
    hook: "Some signs cannot wait for a routine appointment. Knowing who to call, and when, keeps you and your baby safe.",
    short: "If you cannot look after yourself or your baby, or you have plans to harm yourself, get help urgently. Postpartum psychosis is a serious mental illness that should be treated as a medical emergency. Call 999 or go to A&E if someone's life is at risk; for urgent help, call 111 and select the mental health option, or call Samaritans free on 116 123.",
    sections: [
      {
        heading: "When to get urgent help",
        paragraphs: [
          "If you cannot look after yourself or your baby, or if you have plans to harm yourself, you should be seen urgently by your GP, a mental health service, or your local emergency department, which is open 24 hours.",
          "Get help from 111 online or call 111 and select the mental health option. 111 will tell you the right place to get help, and you may be able to speak to a trained mental health professional over the phone.",
        ],
      },
      {
        heading: "If a life is at risk",
        paragraphs: [
          "Call 999 or go to A&E now if someone's life is at risk, or you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one. You will not be wasting anyone's time.",
          "If you already have a crisis number from your mental health service, you can call it.",
        ],
      },
      {
        heading: "Postpartum psychosis is an emergency",
        paragraphs: [
          "Postpartum psychosis is a serious mental illness that should be treated as a medical emergency. It can get worse rapidly and the illness can risk the safety of the mother and baby.",
          "Symptoms usually start suddenly within the first 2 weeks after giving birth. They can include hearing or seeing things that are not there, beliefs that are unlikely to be true, feeling very high or overactive, a low mood, rapidly changing moods, or feeling very confused.",
          "If you have postpartum psychosis, you may not realise you're ill. Your partner, family or friends may spot the signs and have to take action.",
        ],
      },
      {
        heading: "Who to contact for postpartum psychosis",
        paragraphs: [
          "See a GP immediately if you think you, or someone you know, may have developed symptoms of postpartum psychosis, and request an urgent assessment on the same day. You can call 111 if you cannot speak to a GP or do not know what to do next.",
          "Call your crisis team if you already have a care plan because you've been assessed as being at high risk. Go to A&E or call 999 if you think you, or someone you know, may be in danger of imminent harm.",
        ],
      },
      {
        heading: "Someone to talk to, any hour",
        paragraphs: [
          "Samaritans are there to listen any time, day or night. Call free on 116 123 from any phone; they won't judge or tell you what to do. If you do not want to talk on the phone, text \"SHOUT\" to 85258, any time.",
          "Most people with postpartum psychosis make a full recovery as long as they receive the right treatment. Postnatal depression usually gets better with treatment too.",
        ],
      },
    ],
    helps: [
      "If your life, or someone else's, is in danger, call 999 or go to A&E.",
      "For urgent help, call 111 and select the mental health option, or use 111 online.",
      "If you think someone may have postpartum psychosis, see a GP immediately and request an urgent assessment on the same day.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "If you would rather not talk, text \"SHOUT\" to 85258.",
      "If you have a care plan because you are at high risk, call your crisis team.",
    ],
    tryThisWeek: [
      "Call 111 for urgent help.",
      "Call Samaritans on 116 123.",
      "Get same-day help for psychosis signs.",
    ],
    ask: "Who do I contact if things get worse quickly?",
    interactive: {
      kind: "flip-cards",
      title: "Who to contact",
      intro: "Turn each card to see when to use it.",
      cards: [
        { id: "999", front: "999 or A&E", when: "If a life is at risk", back: "Call 999 or go to A&E if you cannot keep yourself or someone else safe. You will not be wasting anyone's time." },
        { id: "111", front: "NHS 111", when: "Urgent help, not an emergency", back: "Call 111 and select the mental health option, or use 111 online. They will tell you where to get help." },
        { id: "gp", front: "A GP, the same day", when: "Signs of postpartum psychosis", back: "See a GP immediately and request an urgent assessment on the same day." },
        { id: "crisis", front: "Your crisis team", when: "If you have a care plan", back: "Call your crisis team if you have been assessed as being at high risk of postpartum psychosis." },
        { id: "samaritans", front: "Samaritans: 116 123", when: "Any time, day or night", back: "Free from any phone. They listen, and won't judge or tell you what to do." },
        { id: "shout", front: "Shout: text SHOUT to 85258", when: "If you would rather not talk", back: "A text line open 24 hours a day, every day." },
      ],
    },
    sources: [RCP_PND, NHS_URGENT, NHS_PP, SAM_CONTACT, NHS_SUICIDAL, NHS_PND],
    quiz: {
      question: "How should postpartum psychosis be treated?",
      options: [{ text: "As a medical emergency", right: true }, { text: "Wait and see for a few weeks" }, { text: "Like the baby blues" }],
      why: "Postpartum psychosis is a serious mental illness that should be treated as a medical emergency.",
    },
  },
  {
    id: "pnd-next-pregnancy",
    kicker: "Looking ahead",
    question: "What about a future pregnancy?",
    hook: "Having had postnatal depression is a reason to plan ahead, not to give up hope. The right care can help you stay well.",
    short: "If you have had depression before, keep in touch with your GP or health visitor in a future pregnancy, so any signs can be recognised early. If you have had severe postnatal depression or postpartum psychosis, you should be referred to a mental health service when pregnant, even if you are well. Do not stop a prescribed medicine until you have spoken to your doctor.",
    sections: [
      {
        heading: "Talk to your GP early",
        paragraphs: [
          "Even if you are just thinking about having a baby in the future, it's worth talking to your GP or psychiatrist. Planning gives you time to find out how pregnancy may affect your mental health, get information about medication, and consider the support you will need after birth.",
          "Keep in touch with your GP or health visitor if you have had depression before. They can recognise any signs of depression early.",
        ],
      },
      {
        heading: "If your illness was severe",
        paragraphs: [
          "You should be referred to a mental health service if you are pregnant and have ever had postpartum psychosis or severe postnatal depression. It is important to get specialist advice even if you are well during this pregnancy.",
          "Your midwife or GP can refer you to a perinatal mental health service if there is one in your area, or otherwise to a community mental health team.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "If you are already taking a prescribed medicine when you find out you're pregnant, tell your doctor or specialist as soon as possible. Do not stop taking the medicine until you have spoken to them.",
          "You are more likely to become unwell again if you stop your medication or reduce the dose suddenly without advice. Your GP or psychiatrist can help you weigh up the risks and benefits for you and your baby.",
        ],
      },
      {
        heading: "Ways to stay well",
        paragraphs: [
          "Several things have been shown to help prevent postnatal depression, including telephone support from other women who have had it, home visits by health professionals, interpersonal therapy and CBT.",
          "Try not to be \"superwoman\", make friends with other pregnant women or new mums, go to antenatal classes, and accept offers of help. Making a wellbeing plan can help you think about the support you might need in pregnancy and after the birth.",
        ],
      },
      {
        heading: "If you had postpartum psychosis",
        paragraphs: [
          "Many people who've had postpartum psychosis go on to have more children. There is about a 1 in 2 chance of another episode after a future pregnancy, but you should be able to get help quickly with the right care, and the risks can be reduced.",
          "If you're at high risk, you should have specialist care during or before pregnancy, and a pre-birth planning meeting at around 32 weeks with everyone involved in your care. You'll get a written care plan explaining how you and your family can get help quickly.",
        ],
      },
    ],
    helps: [
      "Talk to your GP or psychiatrist before you get pregnant, or as soon as you can if you already are.",
      "Tell your midwife if you have had postnatal depression or other mental health problems.",
      "Do not stop or reduce a medicine suddenly; talk to your doctor first.",
      "Keep in touch with your GP or health visitor, so signs can be recognised early.",
      "Make a wellbeing plan for the support you might need in pregnancy and after the birth.",
      CRISIS,
    ],
    tryThisWeek: [
      "Talk to your GP about planning ahead.",
      "Tell your midwife your history.",
      "Make a wellbeing plan.",
    ],
    ask: "How can we plan my care for a future pregnancy?",
    interactive: {
      kind: "timeline",
      title: "Planning another pregnancy",
      steps: [
        { id: "before", when: "Before pregnancy", title: "Talk to your GP", points: ["Find out how pregnancy may affect your mental health.", "Get information about medication."] },
        { id: "early", when: "Early pregnancy", title: "Tell your midwife", points: ["Let your midwife know about past mental health problems.", "Do not stop a medicine before speaking to your doctor."] },
        { id: "during", when: "During pregnancy", title: "Specialist care if needed", points: ["After severe PND or psychosis, you should be referred.", "Make a wellbeing plan."] },
        { id: "week-32", when: "Around 32 weeks", title: "Pre-birth planning", points: ["If you are at high risk of postpartum psychosis.", "A written care plan, agreed with everyone involved."] },
        { id: "after", when: "After the birth", title: "Support at home", points: ["Accept offers of help from friends and family.", "Keep in touch with your GP or health visitor."] },
      ],
    },
    sources: [RCP_PLANNING, RCP_KEY, RCP_PREG, NHS_MH_PREG, RCP_PND, NHS_PP, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "If you're taking a prescribed medicine and find out you're pregnant, what should you do?",
      options: [{ text: "Tell your doctor; don't stop it until you've spoken to them", right: true }, { text: "Stop it straight away" }, { text: "Carry on without telling anyone" }],
      why: "If you are already taking a prescribed medicine when you find out you're pregnant, tell your doctor or specialist as soon as possible. Do not stop taking the medicine until you have spoken to them.",
    },
  },
];
