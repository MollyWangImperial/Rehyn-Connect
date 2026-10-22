import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Grief and bereavement page's pieces (content/library-conditions/mind-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, Cruse Bereavement
// Support, the Royal College of Psychiatrists, Age UK, Samaritans, Shout and the government's pages on what to
// do after a death. mind.org.uk could not be read today (it answers with a bot check), so no Mind page is cited.
// Safe messaging: no method details, hopeful and practical, and every answer gives the crisis routes as the
// NHS words them (999 or A&E, 111 and the mental health option, Samaritans 116 123, Shout 85258). Nothing here
// suggests stopping or changing a medicine without the doctor. General information only; it never replaces
// what a person's own GP, counsellor or mental health team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const cruse = (label: string, path: string): LearnSource => ({ label: `Cruse Bereavement Support: ${label}`, url: `https://www.cruse.org.uk/${path}` });
const rcpsych = (label: string, path: string): LearnSource => ({ label: `Royal College of Psychiatrists: ${label}`, url: `https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_GRIEF = nhs("Grief after bereavement or loss", "mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/grief-bereavement-loss/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_CHILDREN = nhs("Children and bereavement", "mental-health/children-and-young-adults/advice-for-parents/children-and-bereavement/");
const NHS_ALCOHOL = nhs("Alcohol use disorder", "conditions/alcohol-use-disorder/");

const CRUSE_FEELINGS = cruse("What does grief feel like?", "understanding-grief/effects-of-grief/feelings-when-someone-dies/");
const CRUSE_STAGES = cruse("Understanding the five stages of grief", "understanding-grief/effects-of-grief/five-stages-of-grief/");
const CRUSE_NORMAL = cruse("Am I normal?", "understanding-grief/effects-of-grief/is-this-normal/");
const CRUSE_HOW_LONG = cruse("How long does grief last?", "understanding-grief/effects-of-grief/how-long-does-grief-last/");
const CRUSE_GROWING = cruse("Growing around grief", "understanding-grief/effects-of-grief/growing-around-grief/");
const CRUSE_PHYSICAL = cruse("Physical effects of grief", "understanding-grief/effects-of-grief/physical-effects-of-grief/");
const CRUSE_DEPRESSION = cruse("Grief and depression", "understanding-grief/effects-of-grief/grief-and-depression/");
const CRUSE_MENTAL = cruse("Grief and mental health", "understanding-grief/effects-of-grief/grief-and-mental-health/");
const CRUSE_ANXIETY = cruse("Grief and anxiety", "understanding-grief/effects-of-grief/grief-and-anxiety/");
const CRUSE_ANTICIPATORY = cruse("Anticipatory grief", "understanding-grief/effects-of-grief/anticipatory-grief/");
const CRUSE_COMPLICATED = cruse("Complicated and prolonged grief", "understanding-grief/effects-of-grief/complicated-grief/");
const CRUSE_SUICIDAL = cruse("Grief and suicidal thoughts", "grief-and-suicidal-thoughts/");
const CRUSE_DEMENTIA = cruse("Dementia and grief", "understanding-grief/grief-experiences/dementia-and-grief/");
const CRUSE_CRYING = cruse("Crying and grief", "understanding-grief/managing-grief/crying-and-grief/");
const CRUSE_ANNIVERSARIES = cruse("Coping with anniversaries and reminders", "understanding-grief/managing-grief/coping-with-anniversaries-and-reminders/");
const CRUSE_CHRISTMAS = cruse("Coping with grief at Christmas", "understanding-grief/managing-grief/christmas/");
const CRUSE_BIRTHDAYS = cruse("Coping with birthdays", "understanding-grief/managing-grief/coping-with-birthdays/");
const CRUSE_REMEMBER = cruse("Ways to remember", "understanding-grief/managing-grief/ways-to-remember-someone-who-has-died/");
const CRUSE_JOURNAL = cruse("Keeping a grief journal", "understanding-grief/managing-grief/grief-journal/");
const CRUSE_WALKING = cruse("Walking and nature for grief", "understanding-grief/managing-grief/walking-nature-for-grief/");
const CRUSE_HELPLINE = cruse("Helpline", "get-support/helpline/");
const CRUSE_ONE_TO_ONE = cruse("One to one support", "get-support/one-to-one/");
const CRUSE_LOCAL = cruse("Our local support services", "get-support/local-services/");
const CRUSE_PRACTICAL = cruse("What to do after someone dies", "get-support/what-to-do-after-someone-dies/");
const CRUSE_CHILD_SUPPORT = cruse("Supporting children and young people after someone dies", "understanding-grief/grief-experiences/children-young-people/supporting-children-and-young-people-after-someone-dies/");
const CRUSE_CHILD_AGES = cruse("Experiences of grief at different ages", "understanding-grief/grief-experiences/children-young-people/parent-guardian/experiences-of-grief-at-different-ages/");
const CRUSE_CHILD_SIGNS = cruse("Signs of grief in a child", "understanding-grief/grief-experiences/children-young-people/signs-of-grief/");
const CRUSE_CHILD_UNDERSTANDING = cruse("What children understand about death", "understanding-grief/grief-experiences/children-young-people/children-understanding-death/");
const CRUSE_CHILD_FUNERALS = cruse("Children and funerals", "understanding-grief/grief-experiences/children-young-people/funerals/");
const CRUSE_TEENAGERS = cruse("Helping teenagers cope with death", "understanding-grief/grief-experiences/children-young-people/helping-teenagers-cope-grief/");
const CRUSE_JUST_DIED = cruse("Someone has just died: how to help", "understanding-grief/how-to-help-someone-with-grief/someone-has-just-died-how-to-help/");
const CRUSE_WHAT_TO_SAY = cruse("What to say when someone is grieving", "understanding-grief/how-to-help-someone-with-grief/what-to-say-when-someone-is-grieving/");
const CRUSE_TIME_PASSES = cruse("Helping someone as time passes", "understanding-grief/how-to-help-someone-with-grief/helping-someone-as-time-passes/");
const CRUSE_SUPPORT_YOURSELF = cruse("Supporting yourself to help someone grieving", "understanding-grief/how-to-help-someone-with-grief/supporting-yourself-to-help-someone-grieving/");

const RCP_BEREAVEMENT = rcpsych("Bereavement", "bereavement");
const RCP_PHYSICAL = rcpsych("Physical illness and mental health", "physical-illness-and-mental-health");

const AGEUK_GRIEF: LearnSource = { label: "Age UK: How to deal with grief after a bereavement", url: "https://www.ageuk.org.uk/information-advice/health-wellbeing/relationships-family/bereavement/" };

const GOV_STEPS = gov("What to do when someone dies: step by step", "when-someone-dies");
const GOV_REGISTER = gov("What to do after someone dies: register the death", "after-a-death");
const GOV_TELL_US_ONCE = gov("What to do after someone dies: Tell Us Once", "after-a-death/organisations-you-need-to-contact-and-tell-us-once");
const GOV_BSP = gov("Bereavement Support Payment", "bereavement-support-payment");

const SAM_CONTACT: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };
const SHOUT: LearnSource = { label: "Shout: The UK's free, confidential, 24/7 mental health text service", url: "https://giveusashout.org/" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer but the crisis one. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you cannot keep yourself safe.";

export const griefAnswers: LearnArticle[] = [
  {
    id: "grief-what-it-is",
    kicker: "Understanding",
    question: "What does grief feel like?",
    hook: "Grief is not one feeling but a whole succession of them. They can arrive without warning, and all of them are normal.",
    short: "Most people experience grief when they lose something or someone important to them. It can bring shock and numbness, deep sadness, tiredness, anger and guilt, and these feelings can appear unexpectedly. Grieving is natural and normal: it is not an illness, although it can make you feel ill, and the feelings usually become less intense over time.",
    sections: [
      {
        heading: "Natural, and not an illness",
        paragraphs: [
          "Most people experience grief when they lose something or someone important to them. Bereavement, grief and loss affect people in different ways, and there is no right or wrong way to feel.",
          "Grieving is natural and normal. It is not an illness, although it can make you feel ill. Grief is not just one feeling but a whole succession of feelings, and each person lives through them at their own pace.",
        ],
      },
      {
        heading: "Shock and numbness",
        paragraphs: [
          "Shock and numbness are usually the first reaction to loss, and people often talk about being in a daze. You might carry on as if nothing has changed, because it can take a long time to process what has happened.",
          "Most people feel this shock even if the death was expected. You may also feel disorientated, as if you have lost your place in the world.",
        ],
      },
      {
        heading: "Sadness, anger and guilt",
        paragraphs: [
          "There can be overwhelming sadness, with lots of crying, and tiredness or exhaustion. Feelings of emptiness and sadness often come in waves.",
          "It is normal to feel angry when someone dies, at the person who died, at others or at yourself. Guilt is common too, about something you said or did not say, or about not being able to stop your loved one dying.",
          "You can even feel guilty if you feel relieved that someone has died after a painful or distressing illness. That relief is natural, understandable and very common.",
        ],
      },
      {
        heading: "Feelings that take you by surprise",
        paragraphs: [
          "People sometimes think they see or hear the person who has died, or sense their presence. This can happen because your brain is trying to process the death and accept that it is final, and it is normal.",
          "These feelings may not be there all the time, and powerful feelings may appear unexpectedly. It is not always easy to recognise when grief is the reason you are acting or feeling differently.",
        ],
      },
      {
        heading: "When it begins to ease",
        paragraphs: [
          "Your grief might feel chaotic and out of control, but these feelings will eventually become less intense over time. Healing comes slowly, but it does come.",
          "Gradually most people find they are able to carry on with life and feel happy at times, while remembering the person who died. See a GP if you have had a low mood for more than 2 weeks, or you are struggling to cope.",
        ],
      },
    ],
    helps: [
      "Try talking about your feelings to a friend, family member, healthcare professional or counsellor.",
      "Remind yourself that these feelings are not bad or wrong: they are a normal part of bereavement.",
      "Try not to be hard on yourself about guilt: it is very unlikely you could have done anything to prevent the death.",
      "See a GP if you have had a low mood for more than 2 weeks, or the things you try yourself are not helping.",
      CRISIS,
    ],
    tryThisWeek: [
      "Talk to someone about your feelings.",
      "Go easy on yourself about guilt.",
      "See a GP if low for over 2 weeks.",
    ],
    ask: "Is what I am feeling a normal part of grief?",
    interactive: {
      kind: "signs",
      title: "Feelings you may notice",
      intro: "Tick any you have noticed since your loss. All of them are common in grief.",
      signs: ["Shock or numbness, like being in a daze", "Overwhelming sadness and crying", "Tiredness or exhaustion", "Anger, at the person, others or yourself", "Guilt about things said or not said", "Relief, after a long illness", "Seeing or hearing the person who died", "Feeling lost or disorientated"],
      after: "All of these are normal reactions to grief. If you have had a low mood for more than 2 weeks, or you are struggling to cope, see a GP.",
      copyHeading: "Feelings I have noticed since my loss",
    },
    sources: [NHS_GRIEF, CRUSE_FEELINGS, RCP_BEREAVEMENT, CRUSE_NORMAL, AGEUK_GRIEF, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Is grief an illness?",
      options: [{ text: "No, it is natural and normal, though it can make you feel ill", right: true }, { text: "Yes, it always needs treatment" }, { text: "Only if you cry a lot" }],
      why: "Grieving is natural and normal. It is not an illness, although it can make you feel ill.",
    },
  },
  {
    id: "grief-no-right-way",
    kicker: "Understanding",
    question: "Is there a right way to grieve, and do the five stages apply to me?",
    hook: "Denial, anger, bargaining, depression, acceptance: the five stages are well known, but grief rarely follows a neat order.",
    short: "There is no right or wrong way to grieve, and we each react in our own way. People often talk about five stages of grief, but you may not feel all of them, they may not come in order, and you may not move smoothly between them. Another helpful idea is that grief does not shrink, but your life slowly grows around it.",
    sections: [
      {
        heading: "Where the five stages come from",
        paragraphs: [
          "The five stages of grief model was developed by Elisabeth Kübler-Ross, to describe people with terminal illness facing their own death. It was soon adapted as a way of thinking about grief in general.",
          "The five stages are denial, anger, bargaining, depression and acceptance. They are useful for understanding some of the different reactions you might have, but every grief journey is unique.",
        ],
      },
      {
        heading: "Not a set order",
        paragraphs: [
          "You may not experience all of the stages, they may not happen in a particular order, and you may not move smoothly between them. Kübler-Ross herself made it clear that the stages are non-linear.",
          "It does not mean something is wrong if you experience a whole mess of different stages and emotions, or never pass through some of them. A feeling will sometimes come back after you thought it was over.",
        ],
      },
      {
        heading: "What each stage can feel like",
        paragraphs: [
          "Denial can mean feelings of shock, disbelief, panic or confusion. Anger can mean blaming yourself or others. Bargaining often brings guilty questions, such as wishing you had done more.",
          "Depression can mean feeling tired, hopeless or helpless. Acceptance does not mean that you like the situation: it is about accepting your loss and being ready to move forward.",
        ],
      },
      {
        heading: "Growing around grief",
        paragraphs: [
          "Grief counsellor Lois Tonkin described a woman who felt grief filled every part of her life. She had expected it to shrink over time. Instead the grief stayed just as big, but her life grew around it.",
          "This idea does not promise that grief will go away. There will be days when it feels as strong as at first, and days when you live in other parts of your life. Sometimes people feel guilty about this, as if it were disloyal to the person who died.",
        ],
      },
      {
        heading: "No timetable",
        paragraphs: [
          "There are no set stages or time limits to grief. Some people feel a strong range of emotions from the start, while for others these feelings take a while to develop.",
          "People react in very different ways. Some cry very often, while others feel numb or unable to cry. All of these reactions are normal, and the amount you cry is not a reflection of how much you care about the person who died.",
        ],
      },
    ],
    helps: [
      "Try not to judge your feelings against the five stages: every grief journey is unique.",
      "Remember that the amount you cry does not reflect how much you care about the person who died.",
      "Remember you can still grieve your loss while carrying on with your own life.",
      "Try not to tell yourself that you are alone: most people feel grief after a loss, and support is available.",
      CRISIS,
    ],
    tryThisWeek: [
      "Let go of judging by the stages.",
      "Remember tears do not measure love.",
      "Grieve and keep living your life.",
    ],
    ask: "My feelings do not fit the stages I have read about: is that normal?",
    interactive: {
      kind: "flip-cards",
      title: "The five stages, card by card",
      intro: "Turn each card. You may feel some, all or none of these, in any order.",
      cards: [
        { id: "denial", front: "Denial", when: "Often in the early days", back: "Shock, disbelief, panic or confusion. Feeling numb is common at first." },
        { id: "anger", front: "Anger", when: "Very natural after a death", back: "Blaming yourself or others. Death can seem cruel and unfair." },
        { id: "bargaining", front: "Bargaining", when: "When it is hard to accept", back: "Going over the past, asking 'what if', wishing you could change things." },
        { id: "depression", front: "Depression", when: "Can come in waves", back: "Feeling tired, hopeless or helpless. Sadness and longing can be very intense." },
        { id: "acceptance", front: "Acceptance", when: "Gradually, for most people", back: "Not liking what happened, but accepting your loss and being ready to move forward." },
        { id: "growing", front: "Growing around grief", when: "Another way to think of it", back: "The grief stays just as big, but your life slowly grows around it." },
      ],
    },
    sources: [CRUSE_STAGES, NHS_GRIEF, CRUSE_GROWING, CRUSE_NORMAL, CRUSE_HOW_LONG, CRUSE_CRYING, RCP_BEREAVEMENT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do the five stages of grief always happen in order?",
      options: [{ text: "No, they can come in any order, or not at all", right: true }, { text: "Yes, always in the same order" }, { text: "Only after the first year" }],
      why: "You may not experience all of the stages, they may not happen in a particular order, and you may not move smoothly between them.",
    },
  },
  {
    id: "grief-body",
    kicker: "Your body",
    question: "Why do I feel so physically unwell since they died?",
    hook: "Grief can be felt as a real pain. Sleep, appetite, energy and even your heartbeat can all be affected.",
    short: "It is common to feel physically ill after someone dies: the pain of grief can be felt as a real pain, and every part of your health can be affected. Trouble sleeping, changes in appetite, exhaustion, anxiety and aches are normal reactions. Most ease with time, but speak to a GP if they carry on after several weeks.",
    sections: [
      {
        heading: "A real pain",
        paragraphs: [
          "It is common to feel physically ill after someone dies. The pain of grief can be felt as a real pain, and every part of your health can be affected.",
          "You might have aches, pains, nausea and other symptoms of illness. Grief can also reduce your ability to fight off minor infections. These are normal reactions, but they can be very distressing.",
        ],
      },
      {
        heading: "Sleep",
        paragraphs: [
          "It is normal to have trouble sleeping after someone dies. You might be frightened to sleep because of bad nightmares, find your mind racing, or dream that the person is still alive and find waking up painful.",
          "Try to slowly get back into a night-time routine. A bath or shower before bed can help you relax, and walking or yoga are gentle ways to tire your body out. Try not to get into bed until you feel ready to sleep.",
        ],
      },
      {
        heading: "Appetite",
        paragraphs: [
          "You may not feel like eating in the early days. It may feel hard to swallow and food can taste strange, or you might eat a lot more than usual, or only foods you find comforting. This is very normal.",
          "If you do not feel like eating, try small, manageable portions, or a ready meal if cooking feels too much. Eating anything is better than eating nothing, and slowly getting back to eating at the same times can help.",
        ],
      },
      {
        heading: "Exhaustion and anxiety",
        paragraphs: [
          "You are likely to feel exhausted, especially if you were caring for the person who died. Strong emotions and all the practical things that need doing can leave you tired and drained.",
          "Grief can make you feel very anxious, with breathlessness, palpitations or even a panic attack. Exercise can help your body reduce tension and use up the adrenaline that is making you anxious, but a gentle walk is enough.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "Normally, physical pain eases with time. Try to get as much rest as possible and listen to what your body needs. If you are still in pain, or still worried about eating, after several weeks, speak to your GP.",
          "If you start to have palpitations or panic attacks regularly, it is a good idea to contact your doctor. If sleepless nights go on for so long that they become a serious problem, a doctor can help with that too.",
        ],
      },
    ],
    helps: [
      "Slowly get back into a night-time routine, with a bath or shower before bed.",
      "If you do not feel like eating, serve yourself small portions, and try to eat at the same times.",
      "Try gentle movement, such as walking or yoga, to ease tension and help you sleep.",
      "Sleep and rest when you can, and be kind to yourself.",
      "Speak to a GP if pain or eating problems carry on after several weeks, or palpitations happen regularly.",
      CRISIS,
    ],
    tryThisWeek: [
      "Start a calm bedtime routine.",
      "Eat small, regular meals.",
      "Take a gentle walk.",
    ],
    ask: "I am not sleeping or eating: what could help?",
    interactive: {
      kind: "risk-check",
      title: "What is your body telling you?",
      intro: "Tick any you have noticed. Each one has something that can help.",
      items: [
        { id: "sleep", label: "Trouble sleeping or nightmares", note: "Slowly get back into a night-time routine. A bath or shower before bed can help you relax.", changeable: true },
        { id: "appetite", label: "Not eating, or eating much more", note: "Try small, manageable portions. If you are still worried after several weeks, speak to your GP.", changeable: true },
        { id: "exhaustion", label: "Feeling exhausted and drained", note: "Grief is tiring. Sleep and rest when you can, and be kind to yourself.", changeable: true },
        { id: "anxiety", label: "Palpitations or breathlessness", note: "Gentle exercise helps use up adrenaline. If it happens regularly, contact your doctor.", changeable: true },
        { id: "pain", label: "Aches and pains", note: "Pain usually eases with time. Rest, and speak to your GP if it lasts several weeks.", changeable: true },
        { id: "infections", label: "Catching minor infections", note: "Grief can reduce your ability to fight off minor infections. Rest and listen to your body.", changeable: true },
      ],
    },
    sources: [CRUSE_PHYSICAL, CRUSE_FEELINGS, CRUSE_NORMAL, AGEUK_GRIEF, CRUSE_ANXIETY, RCP_BEREAVEMENT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When does Cruse suggest speaking to a GP about physical pain in grief?",
      options: [{ text: "If you are still in pain after several weeks", right: true }, { text: "Never, as it always passes" }, { text: "Only after a year" }],
      why: "If you are still in pain, or still worried about eating, after several weeks, speak to your GP.",
    },
  },
  {
    id: "grief-other-losses",
    kicker: "Other losses",
    question: "Can I grieve for my health, or the life I had before?",
    hook: "Grief is not only for a death. An illness, a lost job or a changed role can bring the same feelings.",
    short: "Grief and bereavement are natural responses to loss, and they can be triggered by many things, not just a death. A serious illness can change work, daily life, money and relationships, and it is completely understandable to feel worried, distressed or upset. Help is available if it starts to affect your mental health.",
    sections: [
      {
        heading: "Many kinds of loss",
        paragraphs: [
          "Grief and bereavement are natural responses to loss, and can be triggered by many things, not just the death of a loved one. The NHS lists the end of a relationship, losing a job, moving to a new home, and someone close to you becoming seriously ill.",
          "We grieve after any sort of loss, though most powerfully after the death of someone we love.",
        ],
      },
      {
        heading: "When illness changes your life",
        paragraphs: [
          "Having or developing a physical illness can affect every area of your life. You might have to stop or change work, find it hard to do things you enjoy, or need support to do things you used to do on your own.",
          "Illness can make you feel out of control of your body and your life, and lonely or isolated from friends and family. Some people find it makes them question what is fair and right, or affects their beliefs.",
          "People who have ongoing physical health problems are two to three times more likely to have depression than people who have good physical health.",
        ],
      },
      {
        heading: "Grieving someone who is still here",
        paragraphs: [
          "Anticipatory grief is a feeling of loss before someone dies, for example when a relative has dementia, cancer or another illness. Some days may be really hard, and other days you may not feel grief at all.",
          "With dementia, changes can feel like a series of small losses over time: of memories, personality or abilities. This grief is valid and very real, even if the person is still physically present.",
        ],
      },
      {
        heading: "When to ask for help",
        paragraphs: [
          "It is completely understandable to feel worried, distressed or upset when you develop a physical illness. There is no normal way to react to difficult situations or uncertainty.",
          "Get help if you feel worse than you have before, do not seem to be getting better with time, or notice your feelings affecting your relationships, work or daily life. Your doctors will want to hear about your mental health as well as your physical health.",
          "Talking therapies can help with coping with a long-term health condition, and you can refer yourself to an NHS talking therapies service without speaking to a GP.",
        ],
      },
    ],
    helps: [
      "Share your fears and concerns with someone close to you who is a good listener.",
      "Tell your GP or the team treating your illness how you are feeling; they can help you get support.",
      "Look for a charity for your condition, where you may find information and peer support.",
      "Try to find the balance between pushing through and getting rest.",
      "If you care for someone who is ill, take breaks where you can and ask for help.",
      CRISIS,
    ],
    tryThisWeek: [
      "Share one worry with a good listener.",
      "Tell your care team how you feel.",
      "Balance pushing on with resting.",
    ],
    ask: "Could my low mood be grief for the life I had, and what support is there?",
    interactive: {
      kind: "scenarios",
      title: "Thoughts that hold people back",
      scenarios: [
        {
          id: "physical-first",
          situation: "You think: I have to focus on my physical health, my mood can wait.",
          options: [{ text: "Remember the two are linked", best: true }, { text: "Keep your feelings to yourself" }],
          why: "Your mental and physical health are linked. Being mentally well can have a positive impact on your physical health.",
        },
        {
          id: "no-point",
          situation: "You think: of course I feel low, I am ill, so there is no point getting help.",
          options: [{ text: "Remember you still deserve help", best: true }, { text: "Wait for it to pass on its own" }],
          why: "It is understandable that you are struggling, but that does not mean you do not deserve help. Everyone deserves to feel supported.",
        },
        {
          id: "ungrateful",
          situation: "You do not want to seem ungrateful to the team treating you.",
          options: [{ text: "Tell them how you are feeling", best: true }, { text: "Say nothing about your mood" }],
          why: "Your doctors will want to hear about your mental health as well as your physical health. They will not think you are ungrateful.",
        },
        {
          id: "still-here",
          situation: "Your partner's dementia means they no longer recall memories you shared.",
          options: [{ text: "Recognise your grief and talk to someone", best: true }, { text: "Tell yourself it is not real grief" }],
          why: "This type of grief is valid and very real, even if the person is still physically present.",
        },
      ],
    },
    sources: [NHS_GRIEF, RCP_BEREAVEMENT, RCP_PHYSICAL, CRUSE_ANTICIPATORY, CRUSE_DEMENTIA, NHS_TALKING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Can you grieve for something other than a death?",
      options: [{ text: "Yes, grief can follow many kinds of loss", right: true }, { text: "No, only after a death" }, { text: "Only if a doctor says so" }],
      why: "Grief and bereavement are natural responses to loss, and can be triggered by many things, not just the death of a loved one.",
    },
  },
  {
    id: "grief-support",
    kicker: "Support",
    question: "Where can I get bereavement support or counselling?",
    hook: "Not everyone needs counselling, but nobody has to grieve alone. Free helplines, local groups and NHS talking therapies are all there.",
    short: "Talking to friends and family helps many people, and peer support and bereavement groups can too. Cruse Bereavement Support has a free helpline on 0808 808 1677 and offers one to one support, and NHS talking therapies can help if you feel low or anxious. A GP can help if grief does not lift, and many hospices offer bereavement support.",
    sections: [
      {
        heading: "Does everyone need counselling?",
        paragraphs: [
          "If you are struggling with grief, you might have been told you need counselling. But a range of things can help: reading about what you are going through, a one-off call to a helpline, or joining a support group or a new group activity.",
          "Try talking about your feelings to a friend, family member, healthcare professional or counsellor. You could also consider peer support, where people use their experiences to help each other.",
        ],
      },
      {
        heading: "A free helpline",
        paragraphs: [
          "Cruse Bereavement Support runs a free helpline on 0808 808 1677, answered by trained bereavement volunteers. It offers emotional support to anyone in the UK affected by grief, and there is no minimum age.",
          "You can talk about how you are feeling, how the person died, how you are coping, or how to talk to children about death. Volunteers will not tell you what to do, and they will not share what you tell them unless you are in danger.",
        ],
      },
      {
        heading: "One to one support and groups",
        paragraphs: [
          "Cruse offers one to one sessions with a trained bereavement supporter, on the phone, by video or in person. You will usually have between one and six sessions, and your supporter uses counselling skills to help you understand what you are going through.",
          "Cruse has over 80 local branches across England, Wales and Northern Ireland. Many offer peer support groups, including walking groups, and group sessions that explain the different ideas about grief.",
          "Demand is high, so there may be a waiting list. If you are struggling while you wait, call Samaritans on 116 123.",
        ],
      },
      {
        heading: "Your GP and NHS talking therapies",
        paragraphs: [
          "See a GP if you are struggling to cope with stress, anxiety or a low mood, or you have had a low mood for more than 2 weeks. If you are 18 or over, or 16 or over in some areas, you can refer yourself to an NHS talking therapies service without talking to a GP.",
          "If grief just does not lift after a few months, a GP can help. Some people need to see a bereavement counsellor or psychotherapist, in a group or on their own. Many hospices offer a free bereavement service to people who lost someone through a terminal illness.",
        ],
      },
      {
        heading: "Other places to look",
        paragraphs: [
          "There might be a bereavement support group in your area. Try asking your local Age UK, doctor's surgery, local library or place of worship, or search online for local services.",
          "Talking therapies are sometimes free through your employer, university or local charities. If you choose to pay privately, check the therapist is registered with a professional organisation accredited by the Professional Standards Authority.",
        ],
      },
    ],
    helps: [
      "Call the Cruse helpline free on 0808 808 1677 to talk about how you are feeling.",
      "Contact your local Cruse branch about one to one support or a group.",
      "Refer yourself to NHS talking therapies if you are 18 or over and feeling low or anxious.",
      "Ask your doctor's surgery, library or place of worship about a local bereavement group.",
      "If you are struggling while you wait for support, call Samaritans on 116 123.",
      CRISIS,
    ],
    tryThisWeek: [
      "Call the Cruse helpline.",
      "Ask about a local group.",
      "Refer yourself to talking therapies.",
    ],
    ask: "Can I be referred for bereavement counselling?",
    interactive: {
      kind: "flip-cards",
      title: "Kinds of support, card by card",
      intro: "Turn each card to see when each kind of support might suit you.",
      cards: [
        { id: "helpline", front: "Cruse helpline: 0808 808 1677", when: "To talk to someone now", back: "Free from UK landlines and mobiles. Trained volunteers listen and help you find ways to cope." },
        { id: "one-to-one", front: "One to one support", when: "If you are in a lot of distress", back: "Usually one to six sessions with a trained bereavement supporter, by phone, video or in person." },
        { id: "groups", front: "Peer support groups", when: "To meet others who understand", back: "Many Cruse branches run groups, including walking groups." },
        { id: "talking", front: "NHS talking therapies", when: "If you feel low or anxious", back: "Refer yourself if you are 18 or over, or 16 in some areas, and registered with a GP." },
        { id: "gp", front: "Your GP", when: "If grief does not lift", back: "A GP can help if grief does not lift after a few months, including with counselling." },
        { id: "hospice", front: "A hospice", when: "After a terminal illness", back: "Many hospices offer a free bereavement service and support." },
      ],
    },
    sources: [NHS_GRIEF, CRUSE_HELPLINE, CRUSE_ONE_TO_ONE, CRUSE_LOCAL, NHS_TALKING, RCP_BEREAVEMENT, AGEUK_GRIEF, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How many one to one sessions does Cruse usually offer?",
      options: [{ text: "Between one and six", right: true }, { text: "At least twenty" }, { text: "Only ever one" }],
      why: "You will usually have between one and six sessions, and your supporter uses counselling skills to help you understand what you are going through.",
    },
  },
  {
    id: "grief-practical",
    kicker: "Practical",
    question: "What do I need to do after someone dies?",
    hook: "Registering the death, telling organisations and arranging a funeral can feel endless. One step at a time, with help, makes it easier.",
    short: "After a death, a doctor and a medical examiner confirm the cause, and you then register the death within 5 days, or 8 days in Scotland. The Tell Us Once service lets you report the death to most government organisations in one go. Then come the funeral, any bereavement benefits and the estate; making a list and asking for help can make it feel less daunting.",
    sections: [
      {
        heading: "Registering the death",
        paragraphs: [
          "After someone dies, their doctor confirms the death before contacting the medical examiner. The medical examiner, a senior doctor not involved in the person's care, checks the cause of death, and their office will contact you to explain it and answer your questions.",
          "Once the medical examiner's office confirms you can, register the death within 5 days, or 8 days in Scotland. This includes weekends and bank holidays. You will then get a certificate for burial or cremation to give to the funeral director.",
          "Registering a death can make it feel more real. It can help to ask a close friend or family member to come along, and the registrar will know you are grieving.",
        ],
      },
      {
        heading: "Telling organisations",
        paragraphs: [
          "The Tell Us Once service lets you report a death to most government organisations in one go, if the person lived in England, Scotland or Wales. The registrar will explain it, and you need to use it within 28 days of getting your reference number.",
          "You will still need to contact others yourself, such as banks, insurance and utility companies, employers and private pension providers. Making a list and breaking it into small steps can help.",
        ],
      },
      {
        heading: "The funeral and money",
        paragraphs: [
          "You need to register the death before you can arrange a funeral date. Check first whether the person left any plans or notes about their funeral.",
          "If you receive certain benefits, you may be able to get help with funeral costs. If your partner has died, you may be able to get Bereavement Support Payment, which is not means-tested.",
          "Later steps include valuing the estate, checking whether you need to apply for probate, and dealing with the estate. Your own tax, benefits and pension might also change.",
        ],
      },
      {
        heading: "Getting help with it all",
        paragraphs: [
          "People often struggle to concentrate or take things in when they are grieving. Someone who can explain things clearly and simply can be very helpful, and friends may be glad to help you work through what needs doing.",
          "If a coroner holds an inquest, it is a special court hearing that looks into how someone died. If you are struggling to cope while waiting for answers, bereavement services can help.",
        ],
      },
    ],
    helps: [
      "Wait for the medical examiner's office, then register the death within 5 days, or 8 days in Scotland.",
      "Ask a close friend or family member to come with you to register the death.",
      "Use Tell Us Once to tell most government organisations in one go.",
      "Make a list of who to tell, and break it into small steps.",
      "Check whether you can get Bereavement Support Payment or help with funeral costs.",
      CRISIS,
    ],
    tryThisWeek: [
      "Take someone with you to register.",
      "Use Tell Us Once.",
      "Make a step-by-step list.",
    ],
    ask: "Who can help me with the practical things that need doing after the death?",
    interactive: {
      kind: "timeline",
      title: "The first steps, one at a time",
      steps: [
        { id: "confirm", when: "The first few days", title: "The cause of death is confirmed", points: ["A doctor confirms the death, then a medical examiner checks the cause.", "Their office can explain it and answer your questions."] },
        { id: "register", when: "Within 5 days, 8 in Scotland", title: "Register the death", points: ["Wait until the medical examiner's office says you can.", "Take a friend or family member for support."] },
        { id: "tell", when: "Within 28 days of your number", title: "Tell Us Once", points: ["Report the death to most government organisations in one go.", "Then contact banks, utilities and employers yourself."] },
        { id: "funeral", when: "After registering", title: "Arrange the funeral", points: ["Check for any plans or notes the person left.", "Ask about help with costs if you get certain benefits."] },
        { id: "benefits", when: "Alongside", title: "Check bereavement benefits", points: ["Bereavement Support Payment if your partner has died.", "Your own tax, benefits and pension might change."] },
        { id: "estate", when: "Later on", title: "Deal with the estate", points: ["Value the estate and check if Inheritance Tax is due.", "Check whether you need to apply for probate."] },
      ],
    },
    sources: [GOV_REGISTER, GOV_STEPS, GOV_TELL_US_ONCE, CRUSE_PRACTICAL, GOV_BSP, AGEUK_GRIEF, CRUSE_JUST_DIED, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does the Tell Us Once service do?",
      options: [{ text: "Reports a death to most government organisations in one go", right: true }, { text: "Arranges the funeral for you" }, { text: "Registers the death for you" }],
      why: "The Tell Us Once service lets you report a death to most government organisations in one go.",
    },
  },
  {
    id: "grief-looking-after",
    kicker: "Self-care",
    question: "How do I look after myself while I'm grieving?",
    hook: "Grief is exhausting. Small, steady things, like regular meals, a short walk and someone to talk to, can make each day a little easier.",
    short: "Grief can leave you exhausted and unmotivated, so small acts of care matter. Try to keep a routine with regular meals and rest, get gentle exercise and fresh air, talk to people, and set small targets rather than doing everything at once. Try not to use alcohol or drugs to cope, as they can make things worse.",
    sections: [
      {
        heading: "Small steps, not everything at once",
        paragraphs: [
          "Try not to do everything at once. Set small targets that you can easily achieve, and focus your time and energy on helping yourself feel better rather than on things you cannot change.",
          "Be kind to yourself, and give yourself permission to feel what you are feeling. Even small acts, like getting dressed, having regular meals or going for a walk, can bring a sense of normality to your day.",
        ],
      },
      {
        heading: "Eating, sleeping and self-care",
        paragraphs: [
          "Try to eat and drink regularly, even if you have lost your appetite. Eating anything is better than eating nothing, and regular meals help keep your energy levels stable.",
          "Grief is tiring, so sleep when you can. It can feel hard to keep up with washing, taking your medication or going to doctor's appointments, but it is important to keep doing those things.",
          "If the person who died used to help you with things like washing, cooking or getting to the shops, contact your local council about a care needs assessment.",
        ],
      },
      {
        heading: "Moving and getting outside",
        paragraphs: [
          "Regular exercise can improve your mood and may help you sleep better. Take things slowly: try a five minute walk one day, and slowly increase it until you reach your comfort level.",
          "Being in nature can help you feel connected to the present. Walking side by side with someone can also make a difficult conversation feel easier than talking face to face.",
        ],
      },
      {
        heading: "Words and people",
        paragraphs: [
          "Talking to someone, whether a friend, family member or bereavement volunteer, can help you feel less alone. If you can, try to stay connected with friends and family.",
          "Writing can help you work through things. Start small, with a sentence or two a day, and write about anything, from memories to what you need to remember to do tomorrow.",
          "If you feel very anxious, try square breathing: breathe in through your nose for a count of 4, hold for a count of 4, and breathe out slowly for a count of 4.",
        ],
      },
      {
        heading: "Alcohol and drugs",
        paragraphs: [
          "Try not to use alcohol, cigarettes, gambling or drugs to relieve grief, as these can all contribute to poor mental health. Drinking can become an escape from a difficult time, so it is good to be mindful of how much you are having.",
          "If you are worried about your drinking, specialist organisations can support you. It can be very dangerous to stop drinking suddenly if you are dependent on alcohol, so get medical help before you try to stop.",
        ],
      },
    ],
    helps: [
      "Set small targets you can easily achieve, rather than doing everything at once.",
      "Keep a simple routine: get dressed, eat regular meals and rest when you can.",
      "Start with a five minute walk, outside if you can, and build up slowly.",
      "Write a sentence or two a day in a journal.",
      "Try not to use alcohol or drugs to cope; if you are dependent on alcohol, get medical help before you stop.",
      CRISIS,
    ],
    tryThisWeek: [
      "Set one small target a day.",
      "Take a five minute walk.",
      "Write a line in a journal.",
    ],
    ask: "Is there support near me to help me look after myself day to day?",
    interactive: {
      kind: "risk-check",
      title: "Your week, gently",
      intro: "Tick any that sound like you at the moment. Each is something small you can change.",
      items: [
        { id: "meals", label: "Skipping meals", note: "Eating anything is better than eating nothing. Regular meals help keep your energy levels stable.", changeable: true },
        { id: "indoors", label: "Not getting outside", note: "Try a five minute walk, and slowly increase it until you reach your comfort level.", changeable: true },
        { id: "alone", label: "Not talking to anyone", note: "Talking to a friend, family member or bereavement volunteer can help you feel less alone.", changeable: true },
        { id: "drinking", label: "Drinking more to cope", note: "Alcohol can add to poor mental health. If you are dependent on it, get medical help before you stop.", changeable: true },
        { id: "everything", label: "Trying to do everything", note: "Set small targets that you can easily achieve.", changeable: true },
        { id: "self-care", label: "Missing medicines or appointments", note: "It can feel hard after a loss, but it is important to keep taking your medication and going to appointments.", changeable: true },
      ],
    },
    sources: [NHS_GRIEF, CRUSE_MENTAL, AGEUK_GRIEF, CRUSE_WALKING, CRUSE_JOURNAL, CRUSE_ANXIETY, NHS_ALCOHOL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How does Cruse suggest getting back into walking after a death?",
      options: [{ text: "A five minute walk, then build up slowly", right: true }, { text: "Long walks straight away" }, { text: "Wait until you feel completely better" }],
      why: "Take things slowly: try a five minute walk one day, and slowly increase it until you reach your comfort level.",
    },
  },
  {
    id: "grief-stuck",
    kicker: "Getting help",
    question: "What if my grief isn't getting any easier?",
    hook: "For most people the pain slowly becomes more manageable. When it stays the same for many months, extra help can make a real difference.",
    short: "For most people grief becomes less intense over time. For some, very difficult feelings do not ease for many months or years, which is known as prolonged grief disorder or complicated grief. It is more likely after a death that was traumatic, or sudden and unexpected. See a GP if you have symptoms; bereavement support and therapy can help.",
    sections: [
      {
        heading: "When grief gets stuck",
        paragraphs: [
          "For most people, grief after the death of a loved one becomes less intense over time. But for some people, it lasts many months or years. This is known as prolonged grief disorder or complicated grief.",
          "Cruse describes it as intense, long-lasting grief, together with ongoing difficulty coping with life, that goes on for more than six months after someone dies. In the UK, people are not usually given it as a diagnosis by a doctor.",
        ],
      },
      {
        heading: "Signs to look out for",
        paragraphs: [
          "Symptoms include very difficult feelings, such as sadness or guilt, that do not get any easier as the months go by. You may spend a lot of time thinking about the person who died, find it hard to accept the death, or be unable to return to everyday activities.",
          "Other warning signs are feeling stuck one way for many months, struggling to feed yourself, shop or return to work after several months, and finding no enjoyment in anything. Some people feel there is no meaning in life and no hope for the future.",
          "Suicidal thoughts can also be a symptom. If you have them, it is important to tell someone, and help is available right now.",
        ],
      },
      {
        heading: "Who is more likely to be affected",
        paragraphs: [
          "You are more likely to have prolonged grief disorder if the death was traumatic, or sudden and unexpected. The death of a child, family conflict, earlier losses and an existing mental health condition can also make grieving harder.",
          "It is normal to keep replaying the details of a sudden death. But sometimes people become very disturbed by mental images, which in a severe form can become post-traumatic stress disorder. This is when it might be time to ask for help.",
        ],
      },
      {
        heading: "Grief or depression?",
        paragraphs: [
          "Sadness and hopelessness are really common after someone dies, and it is possible to be depressed while you are grieving. If your feelings do not change, or grief stops you getting to work or out of bed, it might be time to reach out for help.",
          "If grief just does not lift after a few months, a GP can help. If depression deepens, affecting appetite, energy and sleep, antidepressants may help, and a GP may arrange for you to see a psychiatrist.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "Some bereaved people who have struggled with prolonged grief have found a steady routine helps, with rest and meals at regular times. Try to treat yourself kindly: it is OK to experience a bit of happiness, even if it is tiny to start with.",
          "Talking to people you feel safe with can really help, as can a support group, Cruse, or therapy through the NHS or privately. Age UK suggests that if feelings carry on for over 6 months, you might speak to a healthcare professional or bereavement counsellor.",
        ],
      },
    ],
    helps: [
      "See a GP if you have symptoms of prolonged grief disorder.",
      "Keep a steady routine, resting and eating at regular times.",
      "Let yourself enjoy small things, like a nice walk or an old activity.",
      "Talk to people you feel safe with, or find a support group.",
      "Ask about therapy, through the NHS or privately.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Rest and eat at regular times.",
      "Do one small thing you enjoy.",
    ],
    ask: "Could this be prolonged grief, and what help is there for it?",
    interactive: {
      kind: "signs",
      title: "Signs grief may be stuck",
      intro: "Tick any that have lasted for many months. They are worth talking to a GP about.",
      signs: ["Sadness or guilt not getting easier", "Thinking of the person most of the time", "Finding it hard to accept the death", "Unable to return to everyday activities", "Struggling to eat, shop or work", "No enjoyment in anything", "Feeling there is no hope for the future", "Rest and sleep are very difficult"],
      after: "If these have gone on for many months, see a GP. If you have suicidal thoughts, get help now: call 111 and select the mental health option, or call Samaritans on 116 123.",
      copyHeading: "Grief signs I want to talk to my GP about",
    },
    sources: [NHS_GRIEF, CRUSE_COMPLICATED, CRUSE_DEPRESSION, RCP_BEREAVEMENT, AGEUK_GRIEF, CRUSE_NORMAL, NHS_TALKING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Which kind of death makes prolonged grief more likely?",
      options: [{ text: "One that was traumatic, or sudden and unexpected", right: true }, { text: "One that was expected" }, { text: "Grief is never prolonged" }],
      why: "You are more likely to have prolonged grief disorder if the death was traumatic, or sudden and unexpected.",
    },
  },
  {
    id: "grief-anniversaries",
    kicker: "Living with loss",
    question: "How do I cope with anniversaries, birthdays and Christmas?",
    hook: "A date on the calendar, a song or a smell can bring grief flooding back. Planning a little ahead can help.",
    short: "Anniversaries, birthdays, Christmas and other special days can bring back powerful memories and feelings, even years later. Planning ahead how you would like to spend the day, while leaving room to change your mind, can help. You might mark the day, or ignore it altogether: what matters is doing what is right for you.",
    sections: [
      {
        heading: "Reminders, expected and unexpected",
        paragraphs: [
          "Many events will remind you of the person who died. Some are obvious, like the day they died or their birthday. Others are unpredictable, like a piece of music, a smell or a particular TV programme.",
          "Dates like anniversaries, birthdays, Christmas and other religious festivals can be very painful. Even after a year has passed, you might feel the emotions as strongly as when the person first died.",
          "It is common to find the second year just as difficult as the first, or even harder. People around you may have gone back to normal, and you might feel there is less space to talk about your feelings.",
        ],
      },
      {
        heading: "Plan ahead, stay flexible",
        paragraphs: [
          "If there is a date you are dreading, spend some time working out in advance how you would like to spend it. You might stay at home and watch favourite films, or organise an event in their honour.",
          "Leave in a bit of flexibility. It is fine to change your mind about what you want to do, as how you are feeling might change on the day.",
        ],
      },
      {
        heading: "Birthdays and Christmas",
        paragraphs: [
          "On your own birthday, do what is right for you. If you want to ignore the day, especially if your loss was recent, that is fine. It is also normal to want happy times; it does not mean you care less about the person who died.",
          "At Christmas you might keep some traditions to pay tribute to the person, or ignore the day altogether. If happy images of families celebrating get too much, try a break from films, TV and social media, and get some fresh air.",
          "Keep regular patterns of sleeping and eating where you can. Alcohol only gives temporary relief, and if you find yourself drinking to cope, it might be time to seek help. If you are dependent on alcohol, get medical help before you try to stop.",
        ],
      },
      {
        heading: "Ways to remember",
        paragraphs: [
          "As time passes, anniversaries can help you begin to focus on happy memories. You might visit a place that was special to them, look through old photos, make their favourite food, or write them a letter.",
          "People remember in their own ways, and families can have different ideas about how to grieve. Try to be sensitive to each other's needs, and talk openly about what will be best for you all.",
        ],
      },
    ],
    helps: [
      "Work out in advance how you would like to spend a date you are dreading.",
      "Leave room to change your mind on the day.",
      "Find a way to remember them, such as a special place, old photos or their favourite food.",
      "If a reminder leaves you overwhelmed, write down why, in a journal or a letter.",
      "If you are struggling over Christmas, call the Cruse helpline on 0808 808 1677.",
      CRISIS,
    ],
    tryThisWeek: [
      "Plan a hard date ahead.",
      "Allow yourself to change plans.",
      "Choose one way to remember them.",
    ],
    ask: "Anniversaries are bringing my grief back: is that normal, and who can I talk to?",
    interactive: {
      kind: "scenarios",
      title: "Special days",
      scenarios: [
        {
          id: "birthday",
          situation: "Friends want to celebrate your birthday, but you would rather forget it this year.",
          options: [{ text: "Do what is right for you", best: true }, { text: "Go along with it anyway" }],
          why: "It is your birthday, and you should do what is right for you. If you want to ignore the day, that is fine.",
        },
        {
          id: "family",
          situation: "Your family wants to spend the anniversary differently from you.",
          options: [{ text: "Talk openly about what suits you all", best: true }, { text: "Insist on doing it your way" }],
          why: "People remember in their own ways. Try to be sensitive to each other's needs, and talk openly about what will be best for you all.",
        },
        {
          id: "adverts",
          situation: "Christmas adverts full of happy families are getting too much.",
          options: [{ text: "Take a break from TV and get some fresh air", best: true }, { text: "Keep watching and push through" }],
          why: "If it is getting too much, consider taking a break from films, TV and social media and getting some fresh air instead.",
        },
        {
          id: "song",
          situation: "A song on the radio brings your grief flooding back.",
          options: [{ text: "Write down how you feel", best: true }, { text: "Tell yourself you should be over it" }],
          why: "If you find yourself overwhelmed with grief after a reminder, writing down why can be really helpful.",
        },
      ],
    },
    sources: [CRUSE_ANNIVERSARIES, CRUSE_HOW_LONG, CRUSE_CHRISTMAS, CRUSE_BIRTHDAYS, CRUSE_REMEMBER, RCP_BEREAVEMENT, NHS_ALCOHOL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does Cruse suggest if there is a date you are dreading?",
      options: [{ text: "Work out in advance how you would like to spend it", right: true }, { text: "Pretend it is a normal day" }, { text: "Always spend it alone" }],
      why: "If there is a date you are dreading, spend some time working out in advance how you would like to spend it.",
    },
  },
  {
    id: "grief-children",
    kicker: "Children",
    question: "How can I help a child who is grieving?",
    hook: "Children grieve as adults do, but they may show it differently, moving in and out of sadness and play. Honest, simple words help most.",
    short: "Children and teenagers grieve just as adults do, but they may show it differently. Tell them what has happened clearly and honestly, in words suited to their age, and avoid phrases like 'gone to sleep'. Reassure them it was not their fault and that they will be looked after, let them see you are sad too, and keep routines going.",
    sections: [
      {
        heading: "Tell them clearly and honestly",
        paragraphs: [
          "Even very young children pick up on what is going on around them. It can be frightening not to know, and children sometimes assume they are to blame, so it is better to be clear and open, using words suited to their age.",
          "Tell them what has happened as clearly as possible, and let them talk and ask questions. Avoid phrases like 'gone to sleep' or 'gone on a long journey', which can confuse a young child or make them afraid of falling asleep.",
          "Direct, honest and open communication is more helpful than trying to protect a child by hiding the truth.",
        ],
      },
      {
        heading: "What children understand at different ages",
        paragraphs: [
          "Babies and toddlers do not understand death, but they sense change and may become clingy, unsettled or quiet. Children aged 3 to 5 may think death is temporary, and can switch quickly between sadness and play.",
          "From around 6 to 8, children begin to grasp that death is final, and may feel responsible. By 9 to 12 they understand it is permanent, and may hide their feelings to protect others. Teenagers understand death like adults, but their emotions can be intense and unpredictable.",
        ],
      },
      {
        heading: "Signs of grief in a child",
        paragraphs: [
          "Children cannot sustain emotional pain in the way adults can, and tend to move in and out of grief quite quickly. Do not worry if a child does not look affected: it is part of how children grieve.",
          "Signs can include anger and tantrums, worry that others will die, changes in sleep and appetite, going back to younger behaviour such as bedwetting, or saying they have a headache or upset tummy. Regressive behaviour should go away once they begin to feel secure again.",
        ],
      },
      {
        heading: "How to help",
        paragraphs: [
          "Let them know they are loved, and that whatever happens someone will be there to look after them. Reassure them that nothing they said or did caused the death. It is OK to let them see that you are sad, or to cry with them.",
          "Keep routines and normal life going, and give them time to play. Talking, picture books, sharing memories and making a memory box can all help, and make sure the school knows what has happened.",
          "When it comes to funerals, be led by the child. Explain what will happen, let them know they can change their mind, and if they do not want to go, reassure them that this is okay.",
        ],
      },
      {
        heading: "Teenagers, and getting more help",
        paragraphs: [
          "Teenagers are not grown ups, even if they seem to grieve like adults. Make sure they are not burdened with tasks a responsible adult can do, and let them know it is okay to talk to friends instead.",
          "If you are worried about a child's welfare, or regressive behaviour goes on for a long time, contact your GP. Children and young people under 19 can call Childline free on 0800 1111, and Child Bereavement UK's helpline is 0800 028 8840.",
        ],
      },
    ],
    helps: [
      "Tell them clearly and honestly what has happened, in words suited to their age.",
      "Avoid phrases like 'gone to sleep' that can confuse a young child.",
      "Reassure them the death was not their fault, and that someone will look after them.",
      "Keep routines going, and give them time to play and see friends.",
      "Make a memory box together, and let the school know what has happened.",
      CRISIS,
    ],
    tryThisWeek: [
      "Use clear, honest words.",
      "Reassure them it was not their fault.",
      "Make a memory box together.",
    ],
    ask: "I am worried about how a child in my family is coping: where can we get support?",
    interactive: {
      kind: "timeline",
      title: "Grief at different ages",
      steps: [
        { id: "baby", when: "0 to 2 years", title: "Sensing change", points: ["May become clingy, unsettled or quiet.", "Keep routines steady; comfort with warmth, voice and touch."] },
        { id: "young", when: "3 to 5 years", title: "Death may seem temporary", points: ["Can switch quickly between sadness and play.", "Use clear language, and be ready to repeat it."] },
        { id: "school", when: "6 to 8 years", title: "Beginning to grasp it is final", points: ["May have lots of 'why' questions, or feel responsible.", "Reassure them the death was not their fault."] },
        { id: "older", when: "9 to 12 years", title: "Knowing death is permanent", points: ["Might hide feelings to protect others.", "Give space to talk, perhaps on a walk or in the car."] },
        { id: "teen", when: "13 to 18 years", title: "Understanding like adults", points: ["Emotions can be intense and unpredictable.", "Listen without judgement."] },
      ],
    },
    sources: [CRUSE_CHILD_SUPPORT, NHS_CHILDREN, CRUSE_CHILD_AGES, CRUSE_CHILD_SIGNS, CRUSE_CHILD_UNDERSTANDING, CRUSE_CHILD_FUNERALS, CRUSE_TEENAGERS, RCP_BEREAVEMENT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Which phrase does Cruse suggest avoiding with a young child?",
      options: [{ text: "'They've gone to sleep'", right: true }, { text: "'They have died'" }, { text: "'I'm sad too'" }],
      why: "Avoid phrases like 'gone to sleep' or 'gone on a long journey', which can confuse a young child or make them afraid of falling asleep.",
    },
  },
  {
    id: "grief-helping-others",
    kicker: "Supporting others",
    question: "How can I support someone who is grieving?",
    hook: "Worrying about saying the wrong thing stops many people saying anything. A few honest words and a specific offer of help mean a lot.",
    short: "It is better to say something than nothing: most people notice those who did not say anything. Listen more than you talk, talk about the person who died, and make specific offers of help rather than 'let me know'. Keep in touch over the months, remember the hard dates, and look after yourself too.",
    sections: [
      {
        heading: "Say something",
        paragraphs: [
          "It is normal and human to worry about saying the wrong thing. But most people are more likely to notice those who did not say anything than those who did.",
          "Tell them how sorry you are to hear the news. If you knew the person who died, share a memory; if you did not, ask what they were like. If you do not know what to say, be honest and say so.",
        ],
      },
      {
        heading: "Listen more than you talk",
        paragraphs: [
          "When you listen to someone who is grieving, your role is not to fix their problem. Concentrate on what they are saying, try not to rush in with your own experiences, and only offer advice if they ask for it.",
          "People sometimes need to tell the story many times to process what has happened. A bereaved person should be able to cry and talk about their pain without being told to pull themselves together.",
        ],
      },
      {
        heading: "Be specific with help",
        paragraphs: [
          "People often wait to be told what is needed, but planning and asking take energy. Instead of saying 'let me know if I can do anything', offer something specific, like picking the children up on Tuesday.",
          "Practical help with cleaning, shopping, cooking or looking after children can ease the burden, as can help with the long list of admin after a death. Be honest about what you can do, and do not promise help you cannot give.",
        ],
      },
      {
        heading: "Keep going as time passes",
        paragraphs: [
          "Many grieving people find support fades after the funeral, yet the grief may only just be starting. Keep checking in, even when it seems a lot of time has passed, and keep the person who died in the conversation.",
          "Remember the hard dates: the anniversary of the death, birthdays, wedding anniversaries, Christmas and other festivals, and Mother's Day and Father's Day. You could offer to help them plan how to get through the day, or to be with them.",
        ],
      },
      {
        heading: "Look after yourself too",
        paragraphs: [
          "Supporting someone who is grieving can be emotional and draining. Try to protect your sleep, eat regular meals, and find your own support. You cannot pour from an empty cup.",
          "If you are worried someone may be thinking about suicide, try to get them to talk to you, and take what they say seriously. You do not need to have the answers, and you can call the helplines for advice if you are worried about someone else.",
        ],
      },
    ],
    helps: [
      "Say something, even if it is simply that you are sorry to hear the news.",
      "Listen without trying to fix things, and only offer advice if asked.",
      "Make a specific offer of help, like collecting the children on a set day.",
      "Keep in touch for months, and remember anniversaries and birthdays.",
      "Look after your own sleep, meals and support.",
      CRISIS,
    ],
    tryThisWeek: [
      "Send a short, personal message.",
      "Make one specific offer of help.",
      "Note their hard dates.",
    ],
    ask: "How can I best support someone in my family who is grieving?",
    interactive: {
      kind: "scenarios",
      title: "What could you say?",
      scenarios: [
        {
          id: "offer",
          situation: "You are about to say 'let me know if I can do anything'.",
          options: [{ text: "Offer something specific, like tea on Tuesday", best: true }, { text: "Leave it to them to ask" }],
          why: "Planning and asking take energy. It is better to make specific suggestions, like picking the children up on Tuesday and giving them tea.",
        },
        {
          id: "sorry",
          situation: "Your friend's dad has died, and you are not sure whether to mention it.",
          options: [{ text: "Say you are so sorry to hear about their dad", best: true }, { text: "Say nothing, in case it upsets them" }],
          why: "Most people are more likely to notice those who did not say anything. Making it personal can really help.",
        },
        {
          id: "long-life",
          situation: "You are tempted to say 'at least they had a long, happy life'.",
          options: [{ text: "Say you would love to hear more about their life", best: true }, { text: "Say it anyway" }],
          why: "It is best not to guess how someone feels. Instead, try saying you would love to hear more about their life.",
        },
        {
          id: "a-year-on",
          situation: "It has been a year, and you worry that mentioning their mum will upset them.",
          options: [{ text: "Mention her, and that you remember too", best: true }, { text: "Avoid saying her name" }],
          why: "They have not forgotten. It can be very comforting to know someone else remembers too.",
        },
      ],
    },
    sources: [CRUSE_WHAT_TO_SAY, CRUSE_JUST_DIED, CRUSE_TIME_PASSES, CRUSE_SUPPORT_YOURSELF, RCP_BEREAVEMENT, NHS_SUICIDAL, NHS_URGENT],
    quiz: {
      question: "If you do not know what to say to someone who is grieving, what does Cruse suggest?",
      options: [{ text: "Say something, rather than nothing", right: true }, { text: "Avoid them until they feel better" }, { text: "Never mention the person who died" }],
      why: "Most people are more likely to notice those who did not say anything than those who did.",
    },
  },
  {
    id: "grief-crisis",
    kicker: "Urgent help",
    question: "What can I do if grief feels too much to bear?",
    hook: "When grief feels overwhelming, some people have thoughts of not wanting to go on. You are not alone, and help is there right now, at any hour.",
    short: "If grief feels too much, or you are having thoughts of suicide, it is important to tell someone. If your life is in danger or you cannot keep yourself safe, call 999 or go to A&E. For urgent help, call 111 and select the mental health option, call Samaritans free on 116 123 at any time, or text SHOUT to 85258.",
    sections: [
      {
        heading: "You are not alone",
        paragraphs: [
          "Grief can feel overwhelming, and some people find themselves struggling with dark thoughts, including thoughts of suicide. Suicidal thoughts during grief are more common than many people realise.",
          "Talking about your thoughts and feelings is not a sign of weakness. For most of us, thoughts of suicide go away after a time, when we look after ourselves and with the right support.",
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
        heading: "Urgent help, any hour",
        paragraphs: [
          "Get help from 111 online, or call 111 and select the mental health option. 111 will tell you the right place to get help, and you can also call a GP and ask for an emergency appointment.",
          "Samaritans are there to listen, day or night. Call free on 116 123 from any phone; they will not judge you or tell you what to do. If you do not want to talk on the phone, text SHOUT to 85258, which is open 24 hours a day, every day.",
          "Children and young people under 19 can also call Childline on 0800 1111. The number will not show up on your phone bill.",
        ],
      },
      {
        heading: "Getting through today",
        paragraphs: [
          "Try not to think about the future: just focus on getting through today. Get yourself to a safe place, like a friend's house, be around other people, and stay away from drugs and alcohol.",
          "Find someone you trust to talk to about how you feel, and speak to your GP, who can help you get other support. Keep a routine that is good for you, with rest, activity, going outside and regular meals, and be gentle with yourself.",
        ],
      },
      {
        heading: "Help with the grief itself",
        paragraphs: [
          "The Cruse helpline on 0808 808 1677 offers emotional support to anyone in the UK affected by grief. Your GP can also tell you about mental health support in your area.",
          "If you are worried about someone else, try to get them to talk to you, and take what they say seriously. You can also call these helplines for advice.",
        ],
      },
    ],
    helps: [
      "If your life is in danger or you cannot keep yourself safe, call 999 or go to A&E.",
      "For urgent help, call 111 and select the mental health option, or use 111 online.",
      "Call Samaritans free on 116 123, day or night.",
      "If you would rather not talk on the phone, text SHOUT to 85258.",
      "Tell someone you trust how you are feeling, and speak to your GP.",
      "Focus on getting through today, in a safe place, around other people.",
    ],
    tryThisWeek: [
      "Call Samaritans on 116 123.",
      "Tell someone you trust.",
      "Focus on getting through today.",
    ],
    ask: "Who do I contact if I feel unable to cope?",
    interactive: {
      kind: "flip-cards",
      title: "Who to contact",
      intro: "Turn each card to see when to use it. All of these are free.",
      cards: [
        { id: "999", front: "999 or A&E", when: "If your life is in danger", back: "Call 999 or go to A&E if you cannot keep yourself safe. You will not be wasting anyone's time." },
        { id: "111", front: "NHS 111", when: "Urgent help, not an emergency", back: "Call 111 and select the mental health option, or use 111 online. They will tell you where to get help." },
        { id: "samaritans", front: "Samaritans: 116 123", when: "Any time, day or night", back: "Free from any phone. Volunteers listen, and will not judge you or tell you what to do." },
        { id: "shout", front: "Shout: text SHOUT to 85258", when: "If you would rather not talk", back: "A free, confidential text line, open 24 hours a day, every day." },
        { id: "gp", front: "A GP", when: "For an emergency appointment", back: "Call and ask for an emergency appointment. A GP can help you get other support." },
        { id: "cruse", front: "Cruse helpline: 0808 808 1677", when: "To talk about your grief", back: "Free emotional support from trained bereavement volunteers, for anyone in the UK." },
      ],
    },
    sources: [CRUSE_SUICIDAL, NHS_SUICIDAL, NHS_URGENT, SAM_CONTACT, SHOUT, CRUSE_FEELINGS, CRUSE_HELPLINE],
    quiz: {
      question: "Are suicidal thoughts during grief unusual?",
      options: [{ text: "No, they are more common than many people realise", right: true }, { text: "Yes, they are very rare" }, { text: "They only happen after the first year" }],
      why: "Suicidal thoughts during grief are more common than many people realise.",
    },
  },
];
