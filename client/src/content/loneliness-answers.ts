import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Loneliness page's pieces (content/library-conditions/mind-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (including
// Every Mind Matters and NHS England), Age UK and its Silver Line Helpline, Re-engage, the National Academy for
// Social Prescribing, the Stroke Association, Chest Heart & Stroke Scotland, Samaritans, Shout and the Office for
// National Statistics. mind.org.uk could not be read today (it answers 403), so no Mind page is cited.
// Every answer ends its "What helps" list with the crisis routes exactly as the NHS gives them (999, 111,
// Samaritans 116 123, Shout 85258). General information only; it never replaces what a person's own GP or
// care team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const emm = (label: string, path: string): LearnSource => ({ label: `NHS Every Mind Matters: ${label}`, url: `https://www.nhs.uk/every-mind-matters/${path}` });
const ageUk = (label: string, path: string): LearnSource => ({ label: `Age UK: ${label}`, url: `https://www.ageuk.org.uk/${path}` });
const reengage = (label: string, path: string): LearnSource => ({ label: `Re-engage: ${label}`, url: `https://reengage.org.uk/${path}` });
const nasp = (label: string, path: string): LearnSource => ({ label: `National Academy for Social Prescribing: ${label}`, url: `https://socialprescribingacademy.org.uk/${path}` });

const NHS_LONELY = nhs("Feeling lonely", "mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/feeling-lonely/");
const NHS_OLDER_HELP = nhs("Loneliness in older people: how to help", "mental-health/advice-for-life-situations-and-events/loneliness-in-older-people-how-to-help/");
const NHS_5STEPS = nhs("5 steps to mental wellbeing", "mental-health/self-help/guides-tools-and-activities/five-steps-to-mental-wellbeing/");
const NHS_LOW_MOOD = nhs("Low mood, sadness and depression", "mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/low-mood-sadness-depression/");
const NHS_DEPRESSION = nhs("Depression in adults", "mental-health/conditions/depression-in-adults/overview/");
const NHS_TT = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const EMM_LONELY = emm("Dealing with loneliness", "lifes-challenges/loneliness/");

const NHSE_SP: LearnSource = { label: "NHS England: Social prescribing", url: "https://www.england.nhs.uk/personalisedcare/social-prescribing/" };
const NHSE_SP_FAQ: LearnSource = { label: "NHS England: Social prescribing frequently asked questions", url: "https://www.england.nhs.uk/personalisedcare/social-prescribing/faqs/" };

const NASP_WHAT = nasp("What is social prescribing?", "what-is-social-prescribing/");
const NASP_YOU = nasp("Supporting you and your loved ones", "how-we-can-support-you/supporting-you/");
const NASP_LTC = nasp("Social prescribing and long-term conditions", "what-is-social-prescribing/social-prescribing-and-long-term-conditions/");

const AGEUK_FEELING = ageUk("I'm feeling lonely", "information-advice/health-wellbeing/loneliness/how-to-overcome-loneliness/");
const AGEUK_THINGS = ageUk("Things to do to feel less lonely", "information-advice/health-wellbeing/loneliness/what-can-help-with-feelings-of-loneliness/");
const AGEUK_WORRIED = ageUk("I'm worried about someone feeling lonely", "information-advice/health-wellbeing/loneliness/caring-for-someone-whos-lonely/");
const AGEUK_FRIENDSHIP = ageUk("Friendship services for older people", "services/befriending-services/");
const AGEUK_TELEPHONE = ageUk("Telephone friendship", "services/befriending-services/sign-up-for-telephone-befriending/");
const AGEUK_SILVER = ageUk("The Silver Line Helpline", "services/silverline/");
const AGEUK_SOCIAL = ageUk("Social groups, clubs and activities", "services/in-your-area/social-activities/");
const AGEUK_VOLUNTEER = ageUk("Volunteer with older people", "get-involved/volunteer/");
const AGEUK_VIDEO = ageUk("How to make a video call", "information-advice/work-learning/technology-internet/video-calling/");
const AGEUK_SAFE_ONLINE = ageUk("Staying safe online", "information-advice/work-learning/technology-internet/internet-security/");
const AGEUK_CATFISH = ageUk("How to spot a catfish", "information-advice/money-legal/scams-fraud/how-to-spot-a-catfish/");

const REENGAGE_HOME = reengage("Reducing loneliness in later life", "");
const REENGAGE_CALL = reengage("Get a call companion", "join-a-group/get-a-call-companion/");
const REENGAGE_TEA = reengage("Tea parties", "join-a-group/tea-parties/");
const REENGAGE_GROUPS = reengage("Activity groups for people aged 75 and over", "join-a-group/social-activity-groups/");

const STROKE_CALLS: LearnSource = { label: "Stroke Association: Weekly Volunteer Calls", url: "https://www.stroke.org.uk/finding-support/here-for-you" };
const CHSS_LONELY: LearnSource = { label: "Chest Heart & Stroke Scotland: The power of a good blether, reducing loneliness in the community", url: "https://www.chss.org.uk/health-defence-blog/reducing-loneliness/" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };
const SHOUT: LearnSource = { label: "Shout: Get help", url: "https://giveusashout.org/get-help/" };
const ONS_LONELY: LearnSource = { label: "Office for National Statistics: Public opinions and social trends, Great Britain: January 2026", url: "https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/publicopinionsandsocialtrendsgreatbritain/january2026" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you cannot keep yourself safe.";

export const lonelinessAnswers: LearnArticle[] = [
  {
    id: "lone-what-it-is",
    kicker: "Understanding",
    question: "What is loneliness, if I am not always on my own?",
    hook: "Loneliness is not the same as being alone. It is about whether the contact you have with others feels right for you.",
    short: "Loneliness is a personal feeling, and everyone's experience of it is different. You can feel lonely in a relationship or with friends and family, and you can enjoy time on your own without feeling lonely. Lots of people feel this way at times, and the feelings can pass.",
    sections: [
      {
        heading: "A feeling, not a head count",
        paragraphs: [
          "Everyone's experiences of loneliness are different. It is very subjective and personal to us.",
          "You do not have to be on your own all the time to feel lonely. Many people feel lonely in a relationship or while spending time with friends or family.",
          "Lots of us also enjoy having time to ourselves, and that does not necessarily mean we feel lonely. What matters is that the amount and type of social contact you have works for you.",
        ],
      },
      {
        heading: "Different kinds of loneliness",
        paragraphs: [
          "Every Mind Matters describes some of the ways loneliness can be experienced. Emotional loneliness is a lack of emotional attachment to someone like a close friend or partner. Social loneliness is a lack of friends to go out with, or who share your hobbies or interests.",
          "Existential loneliness is a sense of being in a room of people you know and still feeling alone. Some people feel lonely only at certain times, like Sundays or Christmas, while others feel lonely all the time, which is sometimes called chronic loneliness.",
        ],
      },
      {
        heading: "Far from the only one",
        paragraphs: [
          "Most people feel lonely sometimes, for many different reasons. In January 2026, the Office for National Statistics found that almost a quarter of adults in Great Britain, 23 in every 100, felt lonely often, always or some of the time.",
          "A further 27 in every 100 felt lonely occasionally, and just under half said they hardly ever or never felt lonely.",
        ],
      },
      {
        heading: "Feelings that can pass",
        paragraphs: [
          "Admitting we feel lonely can be hard. Try not to feel embarrassed or ashamed, and do not blame yourself for feeling lonely now or at any other time.",
          "Feeling lonely now and then is normal, and it often passes on its own. Understanding your own reasons for feeling lonely can help you identify and manage these feelings.",
        ],
      },
    ],
    helps: [
      "Try not to blame yourself: many people feel lonely at some point in their life, and support is available.",
      "Think about your own reasons for feeling lonely, as understanding them can help you manage the feelings.",
      "Try talking about your feelings to a friend, family member, healthcare professional or counsellor.",
      "If loneliness is starting to affect your day-to-day life, get in touch with an organisation such as Age UK for help and support.",
      CRISIS,
    ],
    tryThisWeek: [
      "Remind yourself many people feel this.",
      "Notice your own reasons for feeling lonely.",
      "Tell one person how you feel.",
    ],
    ask: "Could the way I have been feeling be loneliness, and what support is there near me?",
    interactive: {
      kind: "flip-cards",
      title: "Kinds of loneliness",
      intro: "Turn each card to see what each kind of loneliness means.",
      cards: [
        { id: "emotional", front: "Emotional loneliness", when: "Missing someone close", back: "A lack of emotional attachment to someone like a close friend or partner." },
        { id: "social", front: "Social loneliness", when: "Missing people to do things with", back: "A lack of friends to go out with, or who share your hobbies or interests." },
        { id: "existential", front: "Existential loneliness", when: "Alone in a full room", back: "A sense of being in a room of people you know and still feeling alone." },
        { id: "occasional", front: "Now and then", when: "At certain times", back: "Feeling lonely only at certain times, like Sundays or Christmas." },
        { id: "chronic", front: "Chronic loneliness", when: "All the time", back: "Feeling lonely all the time. Support is available, and the feelings can pass." },
      ],
    },
    sources: [EMM_LONELY, NHS_LONELY, AGEUK_FEELING, ONS_LONELY, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do you have to be on your own to feel lonely?",
      options: [{ text: "No, many people feel lonely with others around", right: true }, { text: "Yes, only people who live alone feel lonely" }, { text: "Only older people ever feel lonely" }],
      why: "You do not have to be on your own all the time to feel lonely. Many people feel lonely in a relationship or while spending time with friends or family.",
    },
  },
  {
    id: "lone-causes",
    kicker: "Causes",
    question: "Why do I feel lonely now: is it the illness, the move, the loss?",
    hook: "Loneliness often follows a change: a loss, a move, retirement or an illness. Sometimes there is no obvious cause at all.",
    short: "Loneliness has many different causes and can affect people of all ages. It is often linked with things that stop you spending time with others, such as living alone, retirement, illness or disability, bereavement or a move. Sometimes there is no obvious reason, and it is just how you feel.",
    sections: [
      {
        heading: "Things that can keep us apart",
        paragraphs: [
          "Loneliness is often linked with things that could prevent you spending time with other people. These include living or working alone, retirement, illness or disability, bereavement, moving to a new area, job, school or university, and social anxiety.",
          "Losing a loved one, perhaps through a bereavement or break-up, can make us feel lonely. So can life changes that take us away from home or leave us more socially isolated, such as becoming a full-time carer for someone we live with.",
        ],
      },
      {
        heading: "When health changes",
        paragraphs: [
          "A long-term health condition that results in long stays in hospital, or being unable to leave home, can make people feel lonely. Health conditions can also stop you doing some of the things you used to.",
          "Leaving work or changes in health can affect daily routines, relationships and our sense of connection. Your confidence can change too, so that you feel less able to get out and about and do the things you enjoy.",
        ],
      },
      {
        heading: "Even happy changes",
        paragraphs: [
          "Other significant life events, such as buying a house, having a baby or planning a wedding, could also lead to feelings of loneliness. Staying at home to look after a newborn baby is one of the life changes Every Mind Matters lists.",
          "After retiring, it can be hard to adjust to less socialising and less structure in your week.",
        ],
      },
      {
        heading: "It can happen at any age",
        paragraphs: [
          "Loneliness can affect people of any age, but older people are particularly at risk if they live alone or do not have regular contact with others.",
          "Young people are affected too. Every Mind Matters says people aged 16 to 34 are one of the most at-risk groups, and the Office for National Statistics found that younger adults were more likely to report feeling lonely often, always or some of the time than older adults.",
        ],
      },
      {
        heading: "Sometimes there is no clear reason",
        paragraphs: [
          "Sometimes there is no obvious cause, and it is just how we feel. You might find it hard to explain to people why you feel this way, but talking to someone could help you find a solution.",
        ],
      },
    ],
    helps: [
      "Talk to someone about how you feel, even if you cannot explain why: it could help you find a solution.",
      "Focus your time and energy on helping yourself feel better, rather than on the things you cannot change.",
      "If you are struggling to cope with stress, anxiety or a low mood, see a GP or refer yourself to an NHS talking therapies service.",
      "If you are older and live alone, look for support and befriending services from organisations like Age UK, The Silver Line or Re-engage.",
      CRISIS,
    ],
    tryThisWeek: [
      "Talk to someone about how you feel.",
      "Focus on what you can change.",
      "Look up a befriending service.",
    ],
    ask: "Could my illness or the changes in my life be making me lonely, and what support is there locally?",
    interactive: {
      kind: "risk-check",
      title: "What has changed for you?",
      intro: "Tick any that apply. Some cannot be changed, but for each one there is something that can help.",
      items: [
        { id: "alone", label: "Living or working alone", note: "Older people living alone are particularly at risk. Befriending services from Age UK, The Silver Line or Re-engage can help.", changeable: false },
        { id: "retirement", label: "Retiring from work", note: "It can be hard to adjust to less socialising and structure. A new activity, an old hobby or a club can help.", changeable: false },
        { id: "illness", label: "An illness or disability", note: "Health conditions can stop you doing things you used to. A local support group may help.", changeable: false },
        { id: "loss", label: "Losing someone close", note: "Bereavement can make us feel lonely. Talking to someone could help you find a solution.", changeable: false },
        { id: "move", label: "Moving somewhere new", note: "Getting to know people in your area can help with social isolation, especially after a move.", changeable: false },
        { id: "caring", label: "Becoming a full-time carer", note: "Caring for someone you live with can leave you more socially isolated. Talking about it can help.", changeable: false },
        { id: "confidence", label: "Less confidence to go out", note: "Start small. You could ask to go along to a group and just watch first if you feel nervous.", changeable: true },
      ],
    },
    sources: [NHS_LONELY, EMM_LONELY, AGEUK_FEELING, ONS_LONELY, REENGAGE_HOME, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Which age group does Every Mind Matters call one of the most at risk of loneliness?",
      options: [{ text: "People aged 16 to 34", right: true }, { text: "Nobody under 60" }, { text: "Only people over 90" }],
      why: "Every Mind Matters says people aged 16 to 34 are one of the most at-risk groups.",
    },
  },
  {
    id: "lone-health",
    kicker: "Mood & health",
    question: "Can loneliness affect my mood and my health?",
    hook: "Loneliness is a feeling, but it can show up in your sleep, your routines and your mood. Staying connected is good for body and mind.",
    short: "If loneliness is very severe or lasts a long time, it might increase the risk of some physical conditions such as dementia, and of mental health conditions such as anxiety, low mood or depression. It can leave you feeling low, short of energy and not looking after yourself as well as usual. Being socially connected is good for both physical and mental health.",
    sections: [
      {
        heading: "More than a feeling",
        paragraphs: [
          "We often talk about the feelings of loneliness, such as feeling isolated or not feeling connected. But loneliness can also cause physical symptoms and affect how we behave.",
          "You may get nervous about or avoid going to social events, stop cooking for yourself or caring about your appearance, or find it difficult to get to sleep or stay asleep.",
        ],
      },
      {
        heading: "When it lasts",
        paragraphs: [
          "If loneliness is very severe or lasts a long time, it might increase the risk of some physical conditions such as dementia. It might also increase the risk of mental health conditions such as stress, anxiety, low mood or depression.",
          "Chest Heart & Stroke Scotland says persistent loneliness has been shown to be harmful to health. It increases the risk of low mood and depression, and has negative effects on both the immune and cardiovascular systems.",
        ],
      },
      {
        heading: "How it can change daily habits",
        paragraphs: [
          "Loneliness can leave you feeling low or out of sorts, or struggling to work up the energy to do anything. It can be easy to slip into not taking care of yourself as well as you normally would.",
          "It can lead to habits that affect long-term wellbeing, such as over-eating, drinking too much alcohol, or avoiding the things we used to enjoy. Some people notice they drink more alcohol when they are feeling down.",
        ],
      },
      {
        heading: "Connection is good for you",
        paragraphs: [
          "Being socially connected does not just help us feel less lonely. It is also great for our physical and mental health.",
          "Good relationships can help you build a sense of belonging and self-worth, give you a chance to share positive experiences, and provide emotional support. Age UK says taking part in social activities is shown to help us stay sharp in later life.",
        ],
      },
    ],
    helps: [
      "If you can, get out of the house to help break up the day.",
      "A bit of exercise, even just a walk to the shops, can boost your mood, especially in green space.",
      "Eat and drink healthily; if cooking feels hard, look up a new recipe or a cooking class in your area.",
      "Try not to use alcohol, cigarettes, gambling or drugs to relieve loneliness, as they can all contribute to poor mental health.",
      "See a GP if you are struggling to cope with stress, anxiety or a low mood.",
      CRISIS,
    ],
    tryThisWeek: [
      "Get out of the house each day.",
      "Walk to the shops.",
      "Try a new recipe.",
    ],
    ask: "Could loneliness be affecting my sleep, mood or health, and what could help?",
    interactive: {
      kind: "risk-check",
      title: "Habits loneliness can bring",
      intro: "Tick any you recognise. Each is something you can change, a little at a time.",
      items: [
        { id: "events", label: "Avoiding social events", note: "Look for a group that focuses on something you enjoy. You could ask to just watch first.", changeable: true },
        { id: "cooking", label: "Not cooking for yourself", note: "If it is hard to find the motivation, try a new recipe or see if there is a cooking class nearby.", changeable: true },
        { id: "staying-in", label: "Staying in all day", note: "If you can, getting out of the house can help break up the day.", changeable: true },
        { id: "hobbies", label: "Dropping things you enjoyed", note: "Filling your time with things you like might stop you focusing on your loneliness.", changeable: true },
        { id: "drinking", label: "Drinking more when low", note: "Alcohol can contribute to poor mental health. Organisations like Drinkaware offer support if you need it.", changeable: true },
        { id: "sleep", label: "Trouble getting to sleep", note: "Loneliness can affect sleep. See a GP if you are struggling to cope.", changeable: true },
      ],
    },
    sources: [EMM_LONELY, CHSS_LONELY, AGEUK_FEELING, AGEUK_THINGS, NHS_5STEPS, NHS_LONELY, AGEUK_SOCIAL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What might happen if loneliness is very severe or lasts a long time?",
      options: [{ text: "It might increase the risk of some health conditions", right: true }, { text: "Nothing: it only ever affects feelings" }, { text: "It always clears within a day" }],
      why: "If loneliness is very severe or lasts a long time, it might increase the risk of some physical conditions such as dementia, and of mental health conditions such as stress, anxiety, low mood or depression.",
    },
  },
  {
    id: "lone-signs",
    kicker: "Family & friends",
    question: "How can I tell if someone I care about is lonely?",
    hook: "People rarely say they are lonely. The clues are often in small changes to their routine, their mood or how they look after themselves.",
    short: "It can be tricky to know whether someone is lonely: they might not recognise it, or might not want to admit it. Signs include letting their routine slide, caring less about their appearance, not eating properly, being negative about themselves and withdrawing from things they used to enjoy. A big upheaval, such as losing a partner, can be a clue too.",
    sections: [
      {
        heading: "Why people do not say",
        paragraphs: [
          "There are lots of reasons why someone might not have told anyone they feel lonely. They might not even recognise it, or if they do, they might not want to admit it.",
          "Often people are too embarrassed to say that they would like some company, or do not want to bother others who seem busy with their own lives.",
        ],
      },
      {
        heading: "Changes to look out for",
        paragraphs: [
          "Perhaps they do not seem their usual self, whether that is a recent change or something you have noticed over time. There may have been a big upheaval lately, such as the death of their partner.",
          "You might notice they are letting their routine slide, such as getting up a lot later than usual. They may care less about their appearance or personal hygiene, not eat properly, be negative about themselves or withdraw from things they used to enjoy.",
          "Loneliness can also make people nervous about social events, change their daily routines, or make it hard to sleep.",
        ],
      },
      {
        heading: "Who may be more at risk",
        paragraphs: [
          "Think about older people who live alone, rarely leave the house, have recently been bereaved, are in poor health or disabled, have sight or hearing loss, or do not seem to have close family nearby.",
          "When someone is lonely, they can feel misunderstood and be irritable at times. It can be easier said than done, but try not to take it too personally.",
        ],
      },
      {
        heading: "If you are worried",
        paragraphs: [
          "Encourage them to talk about how they are feeling, to you or to someone else, such as a healthcare professional or an organisation. If they are not ready, do not push too hard, but let them know you are there if and when they want to talk.",
          "If you are worried someone may be thinking about suicide, try to get them to talk to you, and ask open-ended questions. You do not need to have the answers: listening and taking them seriously can be more helpful.",
        ],
      },
    ],
    helps: [
      "Simply talk to them: ask how they are, and ask about their day.",
      "Do not be afraid to ask how they are feeling, or if there is anything you can do to support them.",
      "Suggest meeting for lunch, going for a walk, or trying a new club or activity together.",
      "Remember it is not your responsibility to find the solution: they may need to make a change when they are ready.",
      "You can call the helplines, such as Samaritans on 116 123 or NHS 111, for advice if you are worried about someone else.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask someone about their day.",
      "Suggest lunch or a walk together.",
      "Let them know you are there.",
    ],
    ask: "Who could help someone I am worried about who seems lonely?",
    interactive: {
      kind: "signs",
      title: "Signs you might notice",
      intro: "Tick any you have noticed in the person you care about. The list can help you talk to them, or to someone who can help.",
      signs: ["Letting their routine slide", "Getting up a lot later than usual", "Caring less about their appearance", "Not eating properly", "Being negative about themselves", "Withdrawing from things they enjoyed", "Avoiding social events", "Finding it hard to sleep", "Seeming irritable or misunderstood"],
      after: "These can be signs of loneliness. Encourage them to talk, to you or someone else, and let them know you are there when they are ready.",
      copyHeading: "Signs I have noticed",
    },
    sources: [AGEUK_WORRIED, EMM_LONELY, CHSS_LONELY, NHS_OLDER_HELP, NHS_SUICIDAL, NHS_URGENT],
    quiz: {
      question: "What is the best thing you can do for someone you think is lonely?",
      options: [{ text: "Encourage them to talk about how they are feeling", right: true }, { text: "Find the solution for them straight away" }, { text: "Say nothing, in case it is awkward" }],
      why: "Encourage them to talk about how they are feeling, to you or to someone else, such as a healthcare professional or an organisation.",
    },
  },
  {
    id: "lone-small-steps",
    kicker: "First steps",
    question: "Where do I start when I feel lonely?",
    hook: "You do not have to change everything at once. A message, a hello or one plan in the diary is a start.",
    short: "Set small targets you can easily achieve, rather than trying to do everything at once. Regular chats with friends and family, a message to an old friend, or simply being around other people in a park or café can help. Making a change can feel daunting, but deciding to make one can help you feel more positive and in control.",
    sections: [
      {
        heading: "Start small",
        paragraphs: [
          "Do not try to do everything at once. Set small targets you can easily achieve, and focus your time and energy on helping yourself feel better rather than on the things you cannot change.",
          "Making changes can feel daunting, especially if you are feeling low. But deciding to make an active change can help you feel more positive and in control.",
        ],
      },
      {
        heading: "Keep in touch",
        paragraphs: [
          "Regular chats with friends and family can help to combat loneliness. Just talking to someone in that moment can really help when you feel alone, and it can help the person you contact too.",
          "Messaging old friends and colleagues, or creating a group chat, are good ways to feel more connected. Try to do this regularly, as most of us love hearing from others.",
        ],
      },
      {
        heading: "Be around people",
        paragraphs: [
          "Visit places where you can just be around other people, such as a park, the cinema or a café. If you pass someone you recognise, try smiling and saying hello, and start small conversations when you are out, in shops or the GP waiting room.",
          "You could invite someone over, even for a short visit, or invite someone out for a walk or a cup of tea or coffee.",
        ],
      },
      {
        heading: "Plan things to look forward to",
        paragraphs: [
          "Plan ahead and put things in your diary to look forward to, such as a walk, a visit to family or friends, or a trip to the cinema. One person told Age UK that planning things makes you feel like there is something important in your life again.",
          "Filling your time with things you enjoy, such as time outdoors in green spaces, exercise, reading, podcasts or the radio, might stop you focusing on your loneliness and can boost your mood.",
        ],
      },
      {
        heading: "Talk about it",
        paragraphs: [
          "Being upfront about your feelings, with yourself and with others, can make a big difference straight away. You can choose when and where to talk: on a walk, by text or on the phone.",
          "Try not to compare yourself to others. On social media, people usually only share the good things happening to them.",
        ],
      },
    ],
    helps: [
      "Set small targets that you can easily achieve.",
      "Message an old friend or colleague, or start a group chat.",
      "Visit a park, café or cinema, just to be around other people.",
      "Put something in your diary to look forward to, such as a walk or a visit.",
      "Talk about your feelings to a friend, family member, healthcare professional or counsellor.",
      CRISIS,
    ],
    tryThisWeek: [
      "Set one small target.",
      "Message an old friend.",
      "Put a plan in your diary.",
    ],
    ask: "What could help me reconnect with people after a hard time?",
    interactive: {
      kind: "scenarios",
      title: "Small steps, everyday moments",
      scenarios: [
        {
          id: "sunday",
          situation: "Sunday afternoon feels long and quiet.",
          options: [{ text: "Message a friend or family member", best: true }, { text: "Scroll through other people's photos" }],
          why: "Just talking to someone can really help when you feel alone. Comparing yourself to others on social media can make you feel lonelier.",
        },
        {
          id: "neighbour",
          situation: "You pass a neighbour you recognise.",
          options: [{ text: "Smile and say hello", best: true }, { text: "Look away and hurry on" }],
          why: "If you pass someone you recognise, try smiling and saying hello. If you start chatting, you could swap phone numbers.",
        },
        {
          id: "everything",
          situation: "You want to fix everything this week.",
          options: [{ text: "Set one small target", best: true }, { text: "Fill every day with plans" }],
          why: "Do not try to do everything at once. Set small targets that you can easily achieve.",
        },
        {
          id: "empty-week",
          situation: "The week ahead looks empty.",
          options: [{ text: "Put a walk or visit in your diary", best: true }, { text: "Wait and see what happens" }],
          why: "Planning ahead and putting things in your diary gives you something to look forward to.",
        },
      ],
    },
    sources: [NHS_LONELY, EMM_LONELY, AGEUK_FEELING, AGEUK_THINGS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does the NHS suggest when you start trying to feel less lonely?",
      options: [{ text: "Set small targets you can easily achieve", right: true }, { text: "Try to do everything at once" }, { text: "Wait until you feel completely ready" }],
      why: "Do not try to do everything at once. Set small targets you can easily achieve.",
    },
  },
  {
    id: "lone-groups",
    kicker: "Getting involved",
    question: "How do I find a group, class or volunteering role that suits me?",
    hook: "A shared interest makes it easier to meet people. If walking in feels hard, you can ask to just watch first.",
    short: "Being part of a group or club is a great way to meet people, and there are activities for all sorts of interests, in person and online. Volunteering is a good way to meet people too, and acts of kindness can improve your own wellbeing. If you feel nervous, you could ask to go along and just watch first.",
    sections: [
      {
        heading: "Find something you enjoy",
        paragraphs: [
          "Being part of a group or club is a great way to connect with and meet people. Look for groups, in person or online, that focus on things you like or activities you would like to try.",
          "You could try something active like walking, swimming or yoga, something artistic like a painting class or choir, or something educational like a U3A learning group.",
          "If you are feeling nervous, you could ask to go along and just watch first.",
        ],
      },
      {
        heading: "What is out there",
        paragraphs: [
          "Local Age UKs run all sorts of clubs and activities, from coffee mornings and lunch clubs to exercise classes, quizzes, arts and crafts and Men in Sheds. You may need to book, and you will usually pay a small amount to take part.",
          "Re-engage runs free monthly tea parties for people aged 75 and over who feel lonely, isolated or in need of companionship, usually on a Sunday afternoon. A volunteer driver collects you and takes you home again.",
          "Re-engage also runs free activity groups for people aged 75 and over, such as chair yoga, gardening, tai chi or boules, with time afterwards for refreshments and a chat. There are online groups too, for anyone who prefers to join in from home.",
        ],
      },
      {
        heading: "Groups for people going through the same thing",
        paragraphs: [
          "Sometimes loneliness is linked to a particular experience, such as a health condition or losing a loved one. There may be specialist support groups near you, and just being in a space with people going through something similar can be reassuring.",
          "You could also consider peer support, where people use their experiences to help each other.",
        ],
      },
      {
        heading: "Volunteering",
        paragraphs: [
          "Volunteering is a great way to meet people, and seeing the benefits of your actions can boost your mental wellbeing. Acts of giving and kindness can create positive feelings, give a sense of purpose and self-worth, and help you connect with other people.",
          "You could volunteer with a charity or organisation in your local area, at a school, hospital or community group, or in a charity shop. Age UK also needs volunteers to be telephone friends and to help on The Silver Line Helpline.",
        ],
      },
    ],
    helps: [
      "Join a group or class that focuses on something you enjoy.",
      "Ask to go along and just watch first if you feel nervous.",
      "Find out what social events and activities your local Age UK runs.",
      "Look for a support group for people going through something similar.",
      "Volunteer with a charity or organisation in your local area.",
      CRISIS,
    ],
    tryThisWeek: [
      "Pick one group that suits you.",
      "Ask to watch first if nervous.",
      "Look up a volunteering role.",
    ],
    ask: "Are there groups, peer support or volunteering roles near me that would suit me?",
    interactive: {
      kind: "flip-cards",
      title: "Ways to meet people",
      intro: "Turn each card to see what each one involves.",
      cards: [
        { id: "club", front: "A club or class", when: "If you have an interest to share", back: "Active, artistic or educational, from walking or a choir to a U3A learning group." },
        { id: "age-uk", front: "Local Age UK activities", when: "From coffee mornings to quizzes", back: "Clubs, lunch clubs and classes. You may need to book, and usually pay a small amount." },
        { id: "tea", front: "Re-engage tea parties", when: "If you are 75 or over", back: "Free monthly gatherings, usually on a Sunday afternoon, with a volunteer driver to take you." },
        { id: "activity", front: "Re-engage activity groups", when: "75 or over, in person or online", back: "Gentle activities such as chair yoga or tai chi, then refreshments and a chat." },
        { id: "support", front: "A support group", when: "Linked to a health condition or a loss", back: "Being with people going through something similar can be reassuring." },
        { id: "volunteer", front: "Volunteering", when: "If you would like to help others", back: "A great way to meet people, and it can boost your own mental wellbeing." },
      ],
    },
    sources: [NHS_LONELY, EMM_LONELY, AGEUK_THINGS, AGEUK_SOCIAL, REENGAGE_TEA, REENGAGE_GROUPS, NHS_5STEPS, AGEUK_VOLUNTEER, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What can you do if you feel nervous about joining a group?",
      options: [{ text: "Ask to go along and just watch first", right: true }, { text: "Avoid groups altogether" }, { text: "Only join if you already know everyone" }],
      why: "If you are feeling nervous, you could ask to go along and just watch first.",
    },
  },
  {
    id: "lone-befriending",
    kicker: "Someone to talk to",
    question: "Is there someone I can just talk to, by phone or at home?",
    hook: "A friendly voice once a week, or in the middle of the night, can make a real difference. Several free services exist for exactly this.",
    short: "Befriending services match you with a volunteer for a regular chat on the phone or a visit at home. The Silver Line Helpline, run by Age UK, is free and open 24 hours a day for people aged 55 and over, and Age UK's Telephone Friendship Service offers a free weekly call for people over 60. Samaritans and Shout are there for anyone who is struggling to cope.",
    sections: [
      {
        heading: "A helpline that is always open",
        paragraphs: [
          "The Silver Line Helpline is a free, confidential telephone service for people aged 55 and over, run by Age UK. Lines are open 24 hours a day, 365 days a year, on 0800 4 70 80 90.",
          "Some people call to say good morning or good night, or to chat about how their day has been. Others call to get help accessing support. Loneliness can strike at any time of day or night, and calls are always free.",
        ],
      },
      {
        heading: "A weekly friendship call",
        paragraphs: [
          "Age UK's Telephone Friendship Service matches people over 60 with a volunteer for a weekly phone call at a set time. You do not need to be feeling lonely or live on your own, and you are matched on shared interests.",
          "About 30 minutes is a guide for each call, and you do not need to give out your personal phone number. Because so many people are asking, the wait to be contacted after a referral is currently about 8 to 10 weeks.",
          "Re-engage runs call companions, a free service for older people who are lonely, isolated or in need of companionship and would enjoy a friendly phone call every week or two.",
        ],
      },
      {
        heading: "Someone at your door",
        paragraphs: [
          "Many local Age UKs run face-to-face befriending. A volunteer may visit you at home for a cup of tea and a chat, or go with you to an activity, such as a trip to a café or the theatre.",
          "Befriending Networks has an online directory of UK befriending services that you can refer yourself or someone else to.",
        ],
      },
      {
        heading: "If you are struggling to cope",
        paragraphs: [
          "Samaritans is free to call on 116 123, any time, day or night, from any phone. Loneliness and isolation are among the common reasons people contact them, and they will not judge or tell you what to do.",
          "Shout is a free, confidential text service, open 24 hours a day, for anyone in the UK who is struggling to cope. To start a conversation, text the word SHOUT to 85258.",
        ],
      },
    ],
    helps: [
      "If you are 55 or over, call The Silver Line Helpline free on 0800 4 70 80 90, at any time.",
      "If you are over 60 and would like a weekly call, sign up for Age UK's Telephone Friendship Service.",
      "Ask your local Age UK about face-to-face befriending.",
      "Look for support and befriending services from organisations like Age UK, The Silver Line or Re-engage.",
      "Call Samaritans free on 116 123 if you need someone to listen.",
      CRISIS,
    ],
    tryThisWeek: [
      "Save the Silver Line number.",
      "Sign up for a weekly call.",
      "Ask about home visits.",
    ],
    ask: "Can you refer me to a befriending service, or tell me what runs locally?",
    interactive: {
      kind: "flip-cards",
      title: "Phone and befriending services",
      intro: "Turn each card to see who each service is for and what it offers.",
      cards: [
        { id: "silver-line", front: "The Silver Line Helpline", when: "Aged 55 and over, any time", back: "Free and confidential, 24 hours a day, 365 days a year, on 0800 4 70 80 90." },
        { id: "telephone-friendship", front: "Age UK Telephone Friendship", when: "Over 60, a weekly call", back: "A volunteer matched on shared interests calls at the same time each week." },
        { id: "local", front: "Local Age UK befriending", when: "If you would like a visit", back: "A volunteer may visit for a cup of tea and a chat, or go with you to an activity." },
        { id: "companion", front: "Re-engage call companions", when: "A call every week or two", back: "A free, friendly phone call for older people who are lonely or isolated." },
        { id: "samaritans", front: "Samaritans", when: "If you are struggling to cope", back: "Free on 116 123, any time, day or night. They will not judge or tell you what to do." },
        { id: "shout", front: "Shout", when: "If you would rather text", back: "A free, confidential text service, open 24 hours a day. Text SHOUT to 85258." },
      ],
    },
    sources: [AGEUK_SILVER, AGEUK_TELEPHONE, AGEUK_FRIENDSHIP, REENGAGE_CALL, EMM_LONELY, NHS_LONELY, SAMARITANS, SHOUT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When is The Silver Line Helpline open?",
      options: [{ text: "24 hours a day, 365 days a year", right: true }, { text: "Weekdays only, in office hours" }, { text: "Only at Christmas" }],
      why: "Lines are open 24 hours a day, 365 days a year, on 0800 4 70 80 90.",
    },
  },
  {
    id: "lone-online",
    kicker: "Online",
    question: "Can video calls and staying in touch online really help?",
    hook: "Seeing a familiar face on a screen can make someone feel less far away. A few simple safety habits keep it a good place to be.",
    short: "Video calls let you see the person you are talking to, so you will probably feel closer than on an ordinary phone call. Group chats, social media and online groups can help you stay connected, especially if getting out is hard. Technology works best alongside other contact, and it is worth knowing how to stay safe online.",
    sections: [
      {
        heading: "Seeing each other",
        paragraphs: [
          "Video calling lets you and the person you are calling see one another while you chat, so you will probably feel closer to them than on an ordinary phone call. You can even set up video calls with several people at once.",
          "Video calls use the internet, so on a Wi-Fi connection you can call people who live abroad at no extra cost. That can help you stay in touch with friends and family who live far away.",
        ],
      },
      {
        heading: "Other ways to connect",
        paragraphs: [
          "Keeping in touch with friends or family by phone or video chat, using services such as Teams, Zoom, FaceTime or Viber, is one of the things the NHS suggests if you are older and feeling lonely. Social media and group chats on apps like WhatsApp can help you feel more connected too.",
          "If you have difficulty getting out and about, or socialising in person feels a little overwhelming for now, you could make social connections online. Some people find it easier to talk about how they feel under an anonymous username, and Re-engage runs free online activity sessions for people aged 75 and over.",
        ],
      },
      {
        heading: "Your first video call",
        paragraphs: [
          "If you have a group call planned, you could ask a trusted friend or family member to have a test call with you first. Make sure you are connected to Wi-Fi with a strong connection, and check that your microphone and camera are switched on.",
          "On a smartphone or tablet, connect to Wi-Fi before making a video call. Video calling uses a lot of data, and going over your data allowance could mean extra charges. Many local Age UKs offer computer and IT training to help you get started.",
        ],
      },
      {
        heading: "Staying safe",
        paragraphs: [
          "Not everyone online is who they say they are. Use the privacy features on social networking sites to choose who can see your profile and posts, and avoid publishing your telephone number, address or date of birth.",
          "Be wary of someone you have met online who asks for money, often with an emotional story, or who asks you to keep the relationship secret. Never send money to someone you have never met in person, and talk to a friend or relative, especially if things seem to be moving fast.",
        ],
      },
      {
        heading: "Alongside, not instead",
        paragraphs: [
          "Do not rely on technology or social media alone to build relationships. It is easy to get into the habit of only ever texting, messaging or emailing people.",
          "Try not to compare yourself with others online. Some people only share the good things happening to them, so comparing yourself to them can make you feel lonelier.",
        ],
      },
    ],
    helps: [
      "Ask a trusted friend or family member to have a test video call with you first.",
      "Connect to Wi-Fi before making a video call on a smartphone or tablet.",
      "Ask your local Age UK about computer and IT training.",
      "Never send money to someone you have never met in person.",
      "Do not rely on technology or social media alone to build relationships.",
      CRISIS,
    ],
    tryThisWeek: [
      "Have a test video call.",
      "Ask about IT training nearby.",
      "Mix calls with meeting people.",
    ],
    ask: "Is there IT training or online support near me to help me stay in touch?",
    interactive: {
      kind: "timeline",
      title: "Your first video call",
      steps: [
        { id: "wifi", when: "Before", title: "Get connected", points: ["Connect to Wi-Fi with a strong connection.", "Move nearer to the router if it is slow."] },
        { id: "test", when: "Practice", title: "Try a test call", points: ["Ask a trusted friend or family member to help.", "Get used to the technology first."] },
        { id: "check", when: "Just before", title: "Check sound and picture", points: ["Make sure your microphone and camera are on.", "A line across the symbol means it is off."] },
        { id: "call", when: "The call", title: "Start and chat", points: ["On WhatsApp, open calls, choose a contact and tap the camera icon.", "To end the call, tap the red phone icon."] },
        { id: "safe", when: "Every time", title: "Stay safe", points: ["Only click call links from people you know and trust.", "Do not share your bank details."] },
      ],
    },
    sources: [AGEUK_VIDEO, AGEUK_THINGS, NHS_LONELY, NHS_5STEPS, EMM_LONELY, AGEUK_SAFE_ONLINE, AGEUK_CATFISH, REENGAGE_GROUPS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Why might a video call feel different from an ordinary phone call?",
      options: [{ text: "You can see each other, so you may feel closer", right: true }, { text: "It always costs more" }, { text: "Only two people can ever join" }],
      why: "Video calling lets you and the person you are calling see one another while you chat, so you will probably feel closer to them than on an ordinary phone call.",
    },
  },
  {
    id: "lone-after-illness",
    kicker: "After illness",
    question: "Why do I feel so cut off since my illness?",
    hook: "An illness can shrink your world: fewer outings, a changed routine, less confidence. Support exists for exactly this stage.",
    short: "Illness or disability is one of the things that can stop you spending time with others, and long hospital stays or being unable to leave home can leave people feeling lonely. People living with long-term conditions, such as heart or chest illness or the effects of a stroke, are very susceptible to loneliness. Support groups, weekly volunteer calls, social prescribing and talking therapies can all help.",
    sections: [
      {
        heading: "How illness can isolate",
        paragraphs: [
          "Loneliness is often linked with things that could prevent you spending time with other people, and illness or disability is one of them. A long-term health condition that results in long stays in hospital, or being unable to leave home, can make people feel lonely.",
          "Health conditions can stop you doing some of the things you used to, and your confidence can change too. Changes in health can affect daily routines, relationships and our sense of connection.",
        ],
      },
      {
        heading: "You are not imagining it",
        paragraphs: [
          "Chest Heart & Stroke Scotland says older people living with long-term conditions such as chest or heart illness, or disabilities such as those caused by a stroke, are very susceptible to loneliness. For some people, loneliness is a greater source of distress than the medical condition itself.",
          "It might feel like other people do not understand the impact of your health condition. Just being in a space with people who are going through something similar can be reassuring.",
        ],
      },
      {
        heading: "Support for this stage",
        paragraphs: [
          "There may be specialist support groups near you. Chest Heart & Stroke Scotland's peer support groups, for example, let people talk with others who understand what they are going through, share ideas on living with their condition, and take part in exercise and social activities.",
          "The Stroke Association offers weekly volunteer calls for people affected by stroke. For eight weeks, a volunteer chats with you for around 30 minutes, which can build confidence and help you feel more connected.",
        ],
      },
      {
        heading: "Help through your GP",
        paragraphs: [
          "Speak to a GP about social prescribing. They may be able to refer you to a link worker who can help find local support and activities, and social prescribing has been shown to help people manage conditions such as diabetes, heart and circulation problems, dementia and cancer.",
          "NHS talking therapies can help with coping with a long-term health condition, and you can refer yourself without speaking to a GP.",
        ],
      },
      {
        heading: "Getting out again",
        paragraphs: [
          "If getting out is hard, neighbours or volunteers may be able to give you a lift to activities or to doctors' and hospital appointments. If you can, getting out of the house can help break up the day, and a bit of exercise, even a walk to the shops, can boost your mood.",
        ],
      },
    ],
    helps: [
      "Look for a support group for people with your condition.",
      "If you have had a stroke, ask the Stroke Association about weekly volunteer calls.",
      "Speak to a GP about social prescribing and a link worker.",
      "Refer yourself to NHS talking therapies for help coping with a long-term condition.",
      "If you can, get out of the house to help break up the day.",
      CRISIS,
    ],
    tryThisWeek: [
      "Look up a support group.",
      "Ask your GP about a link worker.",
      "Get out of the house once.",
    ],
    ask: "Is there a support group, link worker or talking therapy that could help me since my illness?",
    interactive: {
      kind: "scenarios",
      title: "Moments after an illness",
      scenarios: [
        {
          id: "understand",
          situation: "Friends do not seem to understand what your illness is like.",
          options: [{ text: "Look for a support group", best: true }, { text: "Stop seeing anyone" }],
          why: "Just being in a space with people who are going through something similar can be reassuring.",
        },
        {
          id: "stroke",
          situation: "Since your stroke, you feel cut off at home.",
          options: [{ text: "Sign up for weekly volunteer calls", best: true }, { text: "Wait until you feel fully recovered" }],
          why: "Stroke Association volunteers call weekly for eight weeks, which can build confidence and help you feel more connected.",
        },
        {
          id: "gp",
          situation: "Your GP asks how you are coping.",
          options: [{ text: "Ask about social prescribing", best: true }, { text: "Say everything is fine" }],
          why: "A GP may be able to refer you to a link worker, who can help find local support and activities.",
        },
        {
          id: "low",
          situation: "You feel low and worried about your condition.",
          options: [{ text: "Refer yourself to talking therapies", best: true }, { text: "Keep it to yourself" }],
          why: "NHS talking therapies can help with coping with a long-term health condition, and you can refer yourself.",
        },
      ],
    },
    sources: [EMM_LONELY, NHS_LONELY, AGEUK_FEELING, AGEUK_THINGS, CHSS_LONELY, STROKE_CALLS, NHS_TT, NASP_LTC, NHS_OLDER_HELP, REENGAGE_HOME, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does the Stroke Association's weekly call service offer?",
      options: [{ text: "A chat with a volunteer of around 30 minutes, weekly for eight weeks", right: true }, { text: "A daily visit from a nurse" }, { text: "Medicine reviews by phone" }],
      why: "For eight weeks, a volunteer chats with you for around 30 minutes, which can build confidence and help you feel more connected.",
    },
  },
  {
    id: "lone-social-prescribing",
    kicker: "Social prescribing",
    question: "What is social prescribing, and how do I see a link worker?",
    hook: "Some things that affect health, like loneliness, cannot be fixed with a prescription. A link worker helps you find what can help.",
    short: "Social prescribing connects people to activities, groups and services in their community that meet practical, social and emotional needs. A social prescribing link worker takes time to understand what matters to you and helps you make a plan. Most GP practices across England can put you in touch with one, and in some areas you can refer yourself.",
    sections: [
      {
        heading: "Help that is not a medicine",
        paragraphs: [
          "Many things that affect our health cannot be treated by doctors or medicine alone, such as loneliness, debt or stress caused by money or housing worries. Social prescribing connects people to non-medical support for these needs.",
          "NHS England says it works particularly well for people who have one or more long-term conditions, need support with low-level mental health issues, are lonely or isolated, or have complex social needs that affect their wellbeing.",
        ],
      },
      {
        heading: "What a link worker does",
        paragraphs: [
          "A link worker, sometimes called a social prescriber or community connector, takes time to understand your situation and what matters to you. They may speak to you on the phone, or meet you at a GP surgery or somewhere else in your community.",
          "They listen, find out what is important to you, including your likes and dislikes, and help you make a simple plan. Then they connect you with activities and services that can help.",
        ],
      },
      {
        heading: "What it might link you to",
        paragraphs: [
          "For someone who is isolated, that could mean joining a befriending group, an art class or a community gardening project, based on what works for them. It could also mean help with debt, benefits or housing.",
          "Social prescribing can work alongside medical treatment. For some people, it can be an alternative to medication.",
        ],
      },
      {
        heading: "How to get one",
        paragraphs: [
          "Speak to your GP about social prescribing. Most GP practices across England can put you in touch with a link worker, who can help find local support and activities near you.",
          "Referrals can also come from pharmacies, hospital discharge teams, social care services, housing associations and charities, and self-referral is encouraged. In some areas, there is a local website or helpline you can contact directly.",
        ],
      },
      {
        heading: "Finding things yourself",
        paragraphs: [
          "If social prescribing is not available near you, there is nothing to stop you finding activities yourself. Search online, look in local directories and newspapers, or ask at your library, place of worship, leisure centre, community centre or local shop.",
        ],
      },
    ],
    helps: [
      "Speak to your GP about social prescribing and a link worker.",
      "Ask whether your area has a social prescribing service you can contact directly.",
      "Tell the link worker what matters to you, including your likes and dislikes.",
      "Look for notices at your library, community centre or local shop.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask your GP about a link worker.",
      "Check for a local service.",
      "Look at a library noticeboard.",
    ],
    ask: "Is there a social prescriber or link worker at my practice?",
    interactive: {
      kind: "timeline",
      title: "From GP to group",
      steps: [
        { id: "ask", when: "Step 1", title: "Ask about it", points: ["Ask your GP practice about social prescribing.", "In some areas, you can refer yourself."] },
        { id: "meet", when: "Step 2", title: "Meet a link worker", points: ["By phone, at the surgery or in your community.", "They take time to understand your situation."] },
        { id: "matters", when: "Step 3", title: "What matters to you", points: ["Your likes, dislikes and what is important to you.", "Together you make a simple plan."] },
        { id: "connect", when: "Step 4", title: "Getting connected", points: ["A befriending group, an art class or a gardening project.", "Or help with money or housing worries."] },
        { id: "yourself", when: "Any time", title: "Finding things yourself", points: ["Search online or in local newspapers.", "Ask at the library or community centre."] },
      ],
    },
    sources: [NHS_LONELY, NHSE_SP, NHSE_SP_FAQ, NASP_WHAT, NASP_YOU, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does a social prescribing link worker do?",
      options: [{ text: "Connects you to activities and support based on what matters to you", right: true }, { text: "Prescribes medicines for loneliness" }, { text: "Only helps people in hospital" }],
      why: "They listen, find out what is important to you, and help you make a simple plan. Then they connect you with activities and services that can help.",
    },
  },
  {
    id: "lone-helping-others",
    kicker: "Helping others",
    question: "How can I help someone who is lonely?",
    hook: "A chat on the doorstep, a lift or a spare plate of dinner can matter more than you think, and it is likely to help you too.",
    short: "A simple friendly chat or phone call can make all the difference to someone who is lonely. Practical help, sharing a meal, making plans together or volunteering with an organisation that supports older people are all ways to help. Giving your time in this way could be as valuable to you as to the person you support.",
    sections: [
      {
        heading: "Start with hello",
        paragraphs: [
          "A good start is simply to stop and talk to an older neighbour if you pass them on the street. If you think someone may have trouble hearing or memory problems, speak clearly without shouting, pause between sentences and allow a little extra time for them to respond.",
          "Think about people you know who might be feeling lonely and try to connect with them. It might be harder for people who have been lonely for a while to be open to connecting, so give them time to respond.",
        ],
      },
      {
        heading: "Practical help",
        paragraphs: [
          "Ask if they need help with tasks such as shopping, posting letters, picking up prescriptions or walking the dog. You could offer to go with them, or give them a lift, to activities, doctors' and hospital appointments, the library, the hairdresser or faith services.",
          "Help with simple jobs around the house, such as taking out the rubbish or changing light bulbs, is often really appreciated. Taking round an extra plate of home-cooked food is practical, and a nice way to share your time with a neighbour.",
        ],
      },
      {
        heading: "Talking about it",
        paragraphs: [
          "Encourage them to talk about how they are feeling, to you or to someone else. There is no right way to have this conversation: you might go for a walk together, or start it by text or on the phone.",
          "If they do not want to talk, let them know you are there, make plans together, and reassure them that it is possible to feel better with the right help. While you can be there for them, it is not your responsibility to find the solution.",
        ],
      },
      {
        heading: "Give your time",
        paragraphs: [
          "Organisations that support older people often run befriending schemes, and rely on volunteers as telephone buddies, visitors or drivers. Your help could be as simple as a weekly phone call, and Age UK says just 30 minutes of your time a week as a telephone friend could make a huge difference.",
          "Evidence suggests giving your time could be as valuable to you as to the person you support. Acts of kindness can create positive feelings, give you a sense of purpose and self-worth, and help you connect with other people.",
        ],
      },
      {
        heading: "If you are worried",
        paragraphs: [
          "In winter, look out for signs of serious illness in an older neighbour, such as drowsiness, slurred speech, or not complaining of feeling cold even in a bitterly cold room. If you are worried, ask if there is a relative or close friend you can phone, or call their doctor or NHS 111.",
          "If you are worried someone may be thinking about suicide, try to get them to talk to you. You do not need to have the answers, and you can call helplines such as Samaritans for advice if you are worried about someone else.",
        ],
      },
    ],
    helps: [
      "Stop and talk to an older neighbour, and give them a little extra time to respond.",
      "Offer help with shopping, picking up prescriptions, or a lift to appointments.",
      "Suggest meeting for lunch, going for a walk, or trying a new club together.",
      "Volunteer as a telephone friend: just 30 minutes a week could make a huge difference.",
      "If you are worried about someone's health, ask about a relative you can phone, or call their doctor or NHS 111.",
      CRISIS,
    ],
    tryThisWeek: [
      "Say hello to a neighbour.",
      "Offer to help with shopping.",
      "Suggest a walk together.",
    ],
    ask: "How can I help a lonely relative or neighbour find support near them?",
    interactive: {
      kind: "flip-cards",
      title: "Ways to help",
      intro: "Turn each card to see what you could do.",
      cards: [
        { id: "chat", front: "A friendly chat", when: "When you pass a neighbour", back: "Speak clearly, pause between sentences and allow a little extra time for them to respond." },
        { id: "tasks", front: "Practical help", when: "If they rarely get out", back: "Shopping, posting letters, picking up prescriptions or walking the dog." },
        { id: "lift", front: "A lift", when: "For activities or appointments", back: "Offer to go with them to the doctor, the library, the hairdresser or faith services." },
        { id: "meal", front: "Share a meal", when: "If cooking is hard", back: "Take round an extra plate, in a container you do not need back." },
        { id: "plans", front: "Make plans together", when: "If they do not want to talk", back: "Suggest lunch, a walk, or trying a new club or activity together." },
        { id: "volunteer", front: "Volunteer", when: "If you can give regular time", back: "Be a telephone buddy, a visitor or a driver for a befriending scheme." },
      ],
    },
    sources: [NHS_OLDER_HELP, AGEUK_WORRIED, EMM_LONELY, NHS_5STEPS, AGEUK_VOLUNTEER, NHS_SUICIDAL, NHS_URGENT],
    quiz: {
      question: "How can you help an older neighbour who may have trouble hearing?",
      options: [{ text: "Speak clearly, pause, and give them time to respond", right: true }, { text: "Shout so they can hear you" }, { text: "Avoid talking to them" }],
      why: "Speak clearly without shouting, pause between sentences and allow a little extra time for them to respond.",
    },
  },
  {
    id: "lone-low-mood",
    kicker: "Getting help",
    question: "What if my loneliness is turning into depression?",
    hook: "Lonely days can slide into low weeks. Knowing the signs, and where to turn, makes it easier to act early.",
    short: "Loneliness that is very severe or lasts a long time might increase the risk of low mood and depression. If your low mood has lasted more than 2 weeks, you are struggling to cope, or self-help is not working, see a GP or refer yourself to NHS talking therapies. With the right treatment and support, most people with depression can make a full recovery.",
    sections: [
      {
        heading: "When loneliness weighs on mood",
        paragraphs: [
          "If loneliness is very severe or lasts a long time, it might increase the risk of mental health conditions such as stress, anxiety, low mood or depression.",
          "A low mood can make you feel sad, anxious or panicky, angry or frustrated, or low on confidence and self-esteem. It often gets better after a few days or weeks.",
        ],
      },
      {
        heading: "Signs it may be more",
        paragraphs: [
          "A low mood that lasts 2 weeks or more could be a sign of depression. Other symptoms include not getting any enjoyment out of life, feeling hopeless, and not being able to concentrate on everyday things.",
          "Depression can also bring physical symptoms, such as feeling constantly tired, sleeping badly, having no appetite and various aches and pains. It is a real illness with real symptoms, not a sign of weakness, and not something you can snap out of.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "See a GP if you have had a low mood for more than 2 weeks, you are struggling to cope, or things you are trying yourself are not helping. Many people wait a long time before seeking help, but the sooner you see a doctor, the sooner you can be on the way to recovery.",
          "You can get free talking therapies, like cognitive behavioural therapy, on the NHS. If you are 18 or over, or 16 or over in some areas, you can refer yourself to an NHS talking therapies service without talking to a GP.",
          "With the right treatment and support, most people with depression can make a full recovery.",
        ],
      },
      {
        heading: "If things feel very hard",
        paragraphs: [
          "Depression can sometimes bring suicidal thoughts. If you are feeling like you want to end your life, it is important to tell someone, and help and support is available right now.",
          "Call 111 and select the mental health option, or call a GP and ask for an emergency appointment. Samaritans is free on 116 123, any time, and Shout is a free text line: text SHOUT to 85258. If you do not feel you can keep yourself safe, call 999 or go to A&E.",
          "Try to focus on getting through today rather than the future. Get yourself to a safe place, like a friend's house, and be around other people.",
        ],
      },
    ],
    helps: [
      "Try talking about your feelings to a friend, family member, healthcare professional or counsellor.",
      "Get regular exercise, and eat regular meals to keep your energy levels stable.",
      "See a GP if your low mood has lasted more than 2 weeks.",
      "If you are 18 or over, refer yourself to an NHS talking therapies service.",
      "Try not to use alcohol, cigarettes, gambling or drugs to relieve a low mood.",
      CRISIS,
    ],
    tryThisWeek: [
      "Talk to someone about how you feel.",
      "Eat regular meals and move more.",
      "See a GP if it has been 2 weeks.",
    ],
    ask: "Could my low mood be more than loneliness?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your GP",
      intro: "Tick any you have noticed. You can copy the list to take to a GP or talking therapist.",
      signs: ["Low mood for 2 weeks or more", "No enjoyment out of life", "Feeling hopeless", "Hard to concentrate on everyday things", "Feeling constantly tired", "Sleeping badly", "No appetite", "Aches and pains"],
      after: "If these have lasted 2 weeks or more, see a GP or refer yourself to talking therapies. If you are having thoughts of ending your life, tell someone and get urgent help now.",
      copyHeading: "How I have been feeling",
    },
    sources: [NHS_LONELY, NHS_LOW_MOOD, NHS_DEPRESSION, NHS_TT, EMM_LONELY, NHS_URGENT, NHS_SUICIDAL, SAMARITANS, SHOUT],
    quiz: {
      question: "How long can a low mood last before it could be a sign of depression?",
      options: [{ text: "2 weeks or more", right: true }, { text: "A single afternoon" }, { text: "Only if it lasts a whole year" }],
      why: "A low mood that lasts 2 weeks or more could be a sign of depression.",
    },
  },
];
