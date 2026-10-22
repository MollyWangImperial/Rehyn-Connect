import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the OCD page's pieces (content/library-conditions/mind-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, OCD-UK,
// the Royal College of Psychiatrists, Rethink Mental Illness and OCD Action, with GOV.UK for work and study.
// mind.org.uk could not be read today (it answers with a bot check), so no Mind page is cited. Safe messaging
// throughout: intrusive thoughts are described only in general terms, with no examples that could be copied.
// Every answer ends its "What helps" list with the crisis routes exactly as the NHS gives them (999 or A&E,
// 111 mental health option, Samaritans 116 123, Shout 85258). General information only; it never replaces what
// a person's own GP, therapist or mental health team tells them, and no medicine should be stopped or changed
// without the doctor.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const ocduk = (label: string, path: string): LearnSource => ({ label: `OCD-UK: ${label}`, url: `https://www.ocduk.org/${path}` });
const ocdAction = (label: string, path: string): LearnSource => ({ label: `OCD Action: ${label}`, url: `https://ocdaction.org.uk/${path}` });
const govuk = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_OCD = nhs("Obsessive compulsive disorder (OCD): overview", "mental-health/conditions/obsessive-compulsive-disorder-ocd/overview/");
const NHS_SYMPTOMS = nhs("Obsessive compulsive disorder (OCD): symptoms", "mental-health/conditions/obsessive-compulsive-disorder-ocd/symptoms/");
const NHS_TREATMENT = nhs("Obsessive compulsive disorder (OCD): treatment", "mental-health/conditions/obsessive-compulsive-disorder-ocd/treatment/");
const NHS_TT = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_FIND_TT = nhs("Find NHS talking therapies for anxiety and depression", "nhs-services/mental-health-services/find-nhs-talking-therapies-for-anxiety-and-depression/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_ANTIDEPRESSANTS = nhs("Antidepressants", "medicines/antidepressants/");
const NHS_SERTRALINE = nhs("Sertraline", "medicines/sertraline/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const RCPSYCH_OCD: LearnSource = { label: "Royal College of Psychiatrists: Obsessive-compulsive disorder (OCD)", url: "https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/obsessive-compulsive-disorder" };
const RETHINK_OCD: LearnSource = { label: "Rethink Mental Illness: Obsessive compulsive disorder (OCD)", url: "https://www.rethink.org/advice-and-information/about-mental-illness/mental-health-conditions/obsessive-compulsive-disorder-ocd-symptoms-causes-and-treatment/" };

const OCDUK_INTRO = ocduk("Introduction to OCD", "ocd/introduction-to-ocd/");
const OCDUK_OBSESSIONS = ocduk("What are obsessions?", "ocd/obsessions/");
const OCDUK_COMPULSIONS = ocduk("What are compulsions?", "ocd/compulsions/");
const OCDUK_TYPES = ocduk("Types of OCD", "ocd/types/");
const OCDUK_UNDERSTANDING = ocduk("Understanding OCD", "ocd/understanding-ocd/");
const OCDUK_COMMON = ocduk("How common is OCD?", "ocd/how-common-is-ocd/");
const OCDUK_NOT_OCD = ocduk("What's not OCD!", "ocd/whats-not-ocd/");
const OCDUK_PURE_O = ocduk("Does Pure O exist?", "ocd/pure-o/");
const OCDUK_IMPACT = ocduk("The impact of OCD", "ocd/impact-of-ocd/");
const OCDUK_FAQ = ocduk("Frequently asked questions about OCD", "ocd/faq/");
const OCDUK_TREATMENT = ocduk("OCD treatment: an overview", "overcoming-ocd/ocd-treatment/");
const OCDUK_CBT = ocduk("What is cognitive behavioural therapy (CBT)?", "overcoming-ocd/cognitive-behavioural-therapy/");
const OCDUK_ERP = ocduk("What is exposure and response prevention (ERP)?", "overcoming-ocd/accessing-ocd-treatment/exposure-response-prevention/");
const OCDUK_MEDICATION = ocduk("Medication for OCD", "overcoming-ocd/medication/");
const OCDUK_ACCESS = ocduk("Accessing OCD treatment", "overcoming-ocd/accessing-ocd-treatment/");
const OCDUK_MOST = ocduk("Getting the most from therapy", "overcoming-ocd/getting-the-most-from-therapy/");
const OCDUK_SELF_HELP = ocduk("OCD and self-help resources", "overcoming-ocd/self-help/");
const OCDUK_RECOVERY = ocduk("What is recovery?", "overcoming-ocd/what-is-recovery/");
const OCDUK_GP = ocduk("GP Ice Breaker", "gp-ice-breaker/");
const OCDUK_GROUPS = ocduk("Online support groups", "support-groups/online/");
const OCDUK_CONTACT = ocduk("Contact us", "ocduk-contact/");

const OCDA_CARERS = ocdAction("Carers", "i-need-support/carers/");
const OCDA_HELPLINE = ocdAction("Helpline", "i-need-support/helpline/");
const OCDA_GROUPS = ocdAction("Support groups", "online-support-groups/");

const GOV_DISABILITY = govuk("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");
const GOV_ADJUSTMENTS = govuk("Reasonable adjustments for workers with disabilities or health conditions", "reasonable-adjustments-for-disabled-workers");
const GOV_ATW = govuk("Access to Work: get support if you have a disability or health condition", "access-to-work");
const GOV_ATW_ELIGIBILITY = govuk("Access to Work: eligibility", "access-to-work/eligibility");
const GOV_DSA = govuk("Help if you're a student with a learning difficulty, health problem or disability", "disabled-students-allowance-dsa");

const SAMARITANS: LearnSource = { label: "Samaritans: Contact Samaritans", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };
const SHOUT: LearnSource = { label: "Shout 85258: Get help", url: "https://giveusashout.org/get-help/" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you do not feel you can keep yourself safe.";

export const ocdAnswers: LearnArticle[] = [
  {
    id: "ocd-what-it-is",
    kicker: "Understanding",
    question: "What is OCD, and why does it get stuck?",
    hook: "Unwanted thoughts and repeated actions feed each other in a loop. OCD is common, it is not your fault, and it can be treated.",
    short: "Obsessive compulsive disorder (OCD) is a mental health condition where a person has obsessive thoughts and compulsive behaviours. A compulsion brings brief relief from the anxiety an obsession causes, but the obsession soon returns and the cycle begins again. It is unlikely to get better without treatment, but treatment can help you keep it under control.",
    sections: [
      {
        heading: "Three main parts",
        paragraphs: [
          "OCD has 3 main elements. An obsession is an unwanted, intrusive and often distressing thought, image or urge that repeatedly enters your mind, and it causes a feeling of intense anxiety or distress.",
          "A compulsion is a repetitive behaviour or mental act that you feel driven to do as a result. Most people with OCD have both obsessive thoughts and compulsions, but one may be less obvious than the other.",
        ],
      },
      {
        heading: "A loop that keeps itself going",
        paragraphs: [
          "The compulsive behaviour temporarily relieves the anxiety, but the obsession and anxiety soon return, causing the cycle to begin again.",
          "Every time you carry out a ritual, check or seek reassurance, you strengthen your belief that it stops bad things from happening. So you feel more pressure to do it again. OCD-UK quotes Professor Paul Salkovskis: the solution becomes the problem.",
        ],
      },
      {
        heading: "Who it affects",
        paragraphs: [
          "OCD can affect men, women and children. Symptoms can start from as early as 6 years old, but it often begins around puberty and early adulthood.",
          "The Royal College of Psychiatrists says about 1 in every 50 people have OCD at some point in their lives, men and women equally. OCD-UK estimates that around three quarters of a million people in the UK are living with it at any one time.",
        ],
      },
      {
        heading: "Why it starts",
        paragraphs: [
          "It is not clear what causes OCD. Family history, differences in the brain, life events such as bullying, abuse or a bereavement, and personality may all play a part.",
          "People who are neat, meticulous and methodical, with high personal standards, may be more likely to develop it. So may people who are generally quite anxious, or who have a very strong sense of responsibility for themselves and others.",
        ],
      },
      {
        heading: "Nothing to be ashamed of",
        paragraphs: [
          "People with OCD are sometimes reluctant to seek help because they feel ashamed or embarrassed. OCD is a health condition like any other: having it does not mean you are mad, and it is not your fault.",
          "OCD is unlikely to get better on its own, but there are effective treatments. You can refer yourself directly to an NHS talking therapies service, or see a GP.",
        ],
      },
    ],
    helps: [
      "Remember that OCD is not your fault, and having it does not mean you are going mad.",
      "Refer yourself directly to an NHS talking therapies service, or see a GP.",
      "If you think a friend or family member may have OCD, talk to them about your concerns and suggest they get help.",
      "Contact a support group, such as OCD-UK, OCD Action or TOP UK, for information and advice.",
      CRISIS,
    ],
    tryThisWeek: [
      "Remind yourself it is not your fault.",
      "Find your local talking therapies service.",
      "Look up an OCD support group.",
    ],
    ask: "Could what I am going through be OCD, and how can I get treatment?",
    interactive: {
      kind: "timeline",
      title: "How the OCD loop works",
      steps: [
        { id: "obsession", when: "Step 1", title: "An unwanted thought", points: ["A thought, image or urge enters your mind.", "It keeps coming back, again and again."] },
        { id: "anxiety", when: "Step 2", title: "Anxiety or distress", points: ["The obsession brings intense anxiety or distress.", "It can also bring feelings of disgust or unease."] },
        { id: "compulsion", when: "Step 3", title: "A compulsion", points: ["You feel driven to do something to ease it.", "It may be an action, or done in your head."] },
        { id: "relief", when: "Step 4", title: "Brief relief", points: ["The anxiety eases for a short time.", "Each time, the belief that it keeps you safe grows stronger."] },
        { id: "again", when: "Step 5", title: "Back to the start", points: ["The obsession and anxiety soon return.", "Treatment helps you break the loop."] },
      ],
    },
    sources: [NHS_SYMPTOMS, NHS_OCD, RCPSYCH_OCD, OCDUK_UNDERSTANDING, OCDUK_COMMON, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What happens after a compulsion eases the anxiety?",
      options: [{ text: "The obsession and anxiety soon return", right: true }, { text: "The obsession goes away for good" }, { text: "Nothing changes at all" }],
      why: "The compulsive behaviour temporarily relieves the anxiety, but the obsession and anxiety soon return, causing the cycle to begin again.",
    },
  },
  {
    id: "ocd-obsessions",
    kicker: "Intrusive thoughts",
    question: "Does having a terrible thought mean I want it to happen?",
    hook: "Almost everyone has unwanted thoughts. In OCD they stick, but they are just thoughts, and having them does not mean you will act on them.",
    short: "Almost everyone has unpleasant or unwanted thoughts at some point. An obsession is when such a thought keeps coming back, dominates your thinking and causes intense anxiety or distress. Thoughts of a violent or sexual nature can be frightening, but they are just thoughts, and having them does not mean you will act on them.",
    sections: [
      {
        heading: "Everyone has them",
        paragraphs: [
          "Almost everyone has unpleasant or unwanted thoughts at some point, such as thinking they may have forgotten to lock the door, or even sudden unwelcome violent or offensive mental images.",
          "OCD-UK says research in the US, UK and Canada has shown that up to 80% of people report unwanted intrusive thoughts. Their content is often identical to the obsessions found in OCD.",
        ],
      },
      {
        heading: "When a thought becomes an obsession",
        paragraphs: [
          "If a persistent, unpleasant thought dominates your thinking to the extent it interrupts other thoughts, you may have an obsession. These thoughts are classed as OCD if they cause you distress or have an impact on the quality of your life.",
          "Obsessions can be thoughts, images, impulses, worries, fears or doubts. People with OCD report obsessions that are more intense, frequent and difficult to control.",
        ],
      },
      {
        heading: "Common themes",
        paragraphs: [
          "Common obsessions include fear of harming yourself or others, deliberately or by mistake, fear of contamination by disease, infection or an unpleasant substance, and a need for symmetry or orderliness.",
          "Others include doubts about whether you might have caused an accident, endlessly arguing with yourself over a decision, and thoughts that feel completely out of character.",
        ],
      },
      {
        heading: "Just thoughts",
        paragraphs: [
          "You may have obsessive thoughts of a violent or sexual nature that you find repulsive or frightening. But they are just thoughts, and having them does not mean you will act on them.",
          "The Royal College of Psychiatrists says people with obsessions do not act on these thoughts, even though they fear they will. A person with OCD is at no greater risk of causing harm than any other member of the public.",
          "OCD-UK puts it simply: it is not the thoughts themselves that are the problem, but the way people with OCD respond to them.",
        ],
      },
      {
        heading: "Why pushing them away backfires",
        paragraphs: [
          "Trying to push unpleasant thoughts out of your mind usually only makes them return. Try not to think of a pink elephant for the next minute, and you will probably find it difficult to think of anything else.",
          "Cognitive therapy helps you change your reaction to the thoughts, instead of trying to get rid of them. You can learn to treat them with mild curiosity, and such thoughts will often fade away when you stop trying to make them go away.",
        ],
      },
    ],
    helps: [
      "Remind yourself that intrusive thoughts are just thoughts, and having them does not mean you will act on them.",
      "Try not to push the thoughts out of your mind, as that usually only makes them return.",
      "Resist the compulsive behaviour, but not the obsessional thought.",
      "If you are worried about telling a health professional, know that they can diagnose OCD without the details of your thoughts.",
      "If your thoughts are about harm, see a mental health professional with specialist experience in treating OCD.",
      CRISIS,
    ],
    tryThisWeek: [
      "Tell yourself: it is just a thought.",
      "Let a thought come without pushing it away.",
      "Resist the ritual, not the thought.",
    ],
    ask: "Could my unwanted thoughts be OCD, and can I see someone experienced in treating it?",
    interactive: {
      kind: "scenarios",
      title: "When an unwanted thought pops up",
      scenarios: [
        {
          id: "shocking",
          situation: "A shocking thought about someone you love flashes into your mind.",
          options: [{ text: "Remind yourself it is just a thought", best: true }, { text: "Decide it must say something about you" }],
          why: "Such thoughts can feel repulsive or frightening. But they are just thoughts, and having them does not mean you will act on them.",
        },
        {
          id: "push",
          situation: "You try harder and harder to stop the thought coming back.",
          options: [{ text: "Let it come and go", best: true }, { text: "Push it away with all your effort" }],
          why: "Trying to push unpleasant thoughts out of your mind usually only makes them return.",
        },
        {
          id: "cancel",
          situation: "You feel the urge to cancel the thought with a safe one.",
          options: [{ text: "Resist the urge, not the thought", best: true }, { text: "Repeat the safe thought" }],
          why: "Putting right a disturbing thought with another thought can keep OCD going. Resist the compulsive behaviour, but not the obsessional thought.",
        },
        {
          id: "telling",
          situation: "You are afraid to tell your GP what your thoughts are about.",
          options: [{ text: "Describe how they affect your life", best: true }, { text: "Say nothing at all" }],
          why: "Health professionals can diagnose OCD without knowing details about your intrusive thoughts. What matters is describing your symptoms clearly.",
        },
      ],
    },
    sources: [NHS_SYMPTOMS, OCDUK_OBSESSIONS, RCPSYCH_OCD, OCDUK_CBT, RETHINK_OCD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Does having an unwanted violent thought mean you will act on it?",
      options: [{ text: "No, they are just thoughts", right: true }, { text: "Yes, thoughts show what you want" }, { text: "Only if it keeps coming back" }],
      why: "You may have obsessive thoughts of a violent or sexual nature that you find repulsive or frightening. But they are just thoughts, and having them does not mean you will act on them.",
    },
  },
  {
    id: "ocd-compulsions",
    kicker: "Compulsions",
    question: "Why can't I stop checking, even when I know it makes no sense?",
    hook: "A compulsion promises relief, and for a moment it delivers. Then the doubt comes back, stronger than before.",
    short: "A compulsion is a repetitive behaviour or mental act that you feel driven to do to ease the anxiety an obsession brings. Most people with OCD know it makes no logical sense, but feel they need to do it just in case. The relief is short-lived, and each compulsion can make the obsession stronger.",
    sections: [
      {
        heading: "What a compulsion is",
        paragraphs: [
          "Compulsions start as a way of trying to reduce or prevent anxiety caused by the obsessive thought. In reality, this behaviour is either excessive or not realistically connected.",
          "Most people with OCD realise that such compulsive behaviour is irrational and makes no logical sense. But they cannot stop acting on it and feel they need to do it just in case.",
        ],
      },
      {
        heading: "What compulsions can look like",
        paragraphs: [
          "Common compulsions include cleaning and hand washing, checking that doors are locked or the gas is off, counting, ordering and arranging, hoarding, and asking for reassurance.",
          "Some happen in the head, such as repeating words or thinking neutralising thoughts to counter the obsession. Avoiding places and situations that could trigger the thoughts is a compulsion too, and not all compulsive behaviours will be obvious to other people.",
        ],
      },
      {
        heading: "Why the relief does not last",
        paragraphs: [
          "When you carry out a compulsion, your relief usually does not last long, and this can make your original obsession stronger. Over time, compulsions may happen more often or take longer to complete.",
          "OCD-UK says the relief compulsions bring is only temporary and short lived. They reinforce the original obsession and the need to carry out the compulsion, creating a gradually worsening cycle.",
        ],
      },
      {
        heading: "Reassurance and the just right feeling",
        paragraphs: [
          "Seeking reassurance is a key compulsion, particularly when living with another person. Asking a loved one whether the door is locked brings relief at first, but the doubts return and the need to ask again follows.",
          "Someone with OCD may keep washing until their hands feel clean, rather than until they see they are clean. Sometimes, over time, the original fear is forgotten, and compulsions are done to feel just right.",
        ],
      },
      {
        heading: "Breaking the cycle",
        paragraphs: [
          "Treatment helps you face your fears and obsessive thoughts without putting them right through compulsions. The treatment may be hard work, but many people find that when they confront their obsessions, the anxiety eventually improves or goes away.",
        ],
      },
    ],
    helps: [
      "Learn to recognise your compulsions, including ones done in your head and seeking reassurance.",
      "Resist the compulsive behaviour, but not the obsessional thought.",
      "Remember that rituals, checking, avoiding and seeking reassurance only ease anxiety for a short time.",
      "Describe your symptoms clearly to a health professional, and say how they affect your daily life.",
      "Refer yourself to an NHS talking therapies service, or see a GP.",
      CRISIS,
    ],
    tryThisWeek: [
      "Spot one compulsion done in your head.",
      "Resist one compulsion, not the thought.",
      "Note how compulsions affect your day.",
    ],
    ask: "Could my checking or rituals be compulsions, and can I be referred for CBT with exposure and response prevention?",
    interactive: {
      kind: "signs",
      title: "Compulsions you may notice",
      intro: "Tick any you notice. Some happen in your head, and not all of them are obvious to other people.",
      signs: ["Cleaning or hand washing", "Checking doors, locks or the gas", "Counting", "Ordering and arranging", "Asking for reassurance", "Repeating words in your head", "Thinking neutralising thoughts", "Avoiding places or situations", "Keeping things you cannot throw away"],
      after: "These are common compulsions in OCD. When you see a GP or therapist, describe them clearly and say how they affect your daily life.",
      copyHeading: "Compulsions I have noticed",
    },
    sources: [NHS_SYMPTOMS, OCDUK_COMPULSIONS, RETHINK_OCD, OCDUK_INTRO, NHS_OCD, NHS_TREATMENT, RCPSYCH_OCD, OCDUK_CBT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What usually happens to the relief a compulsion brings?",
      options: [{ text: "It does not last, and can make the obsession stronger", right: true }, { text: "It cures the obsession" }, { text: "It lasts for weeks" }],
      why: "When you carry out a compulsion, your relief usually does not last long, and this can make your original obsession stronger.",
    },
  },
  {
    id: "ocd-types",
    kicker: "Types",
    question: "Is my OCD a different kind from the usual?",
    hook: "Checking, cleaning, ordering, unwanted thoughts: OCD wears many disguises. Every form is treated in the same way.",
    short: "OCD can fix on almost any thought or fear, and often on what matters most in a person's life. Its forms are usually grouped as checking, contamination, symmetry and ordering, ruminations and intrusive thoughts, and hoarding. Whatever form it takes, it involves both obsessions and compulsions, and the treatment approach is the same.",
    sections: [
      {
        heading: "Five broad groups",
        paragraphs: [
          "OCD-UK says there are infinite forms of OCD, but it has traditionally been thought to fall into five main categories: checking, contamination, symmetry and ordering, ruminations and intrusive thoughts, and hoarding. Themes often overlap between them.",
          "OCD frequently fixes on what is important in a person's life. If religion matters to someone, it may fix on unwanted thoughts about religion, and in a new relationship it can make a person question their feelings.",
        ],
      },
      {
        heading: "Checking and contamination",
        paragraphs: [
          "With checking, you might worry that something bad will happen if you do not check things like lights, appliances, windows or locks. Even if you know this is illogical, you feel the need to do it just in case.",
          "With contamination, the obsessive thought is usually that contamination will harm you or a loved one. You might fear shaking hands, using public toilets or touching door handles, and feel the need to clean things that others already see as very clean.",
        ],
      },
      {
        heading: "Order, symmetry and just right",
        paragraphs: [
          "You might worry that something bad will happen if things are not symmetrical or orderly, and this can grow into a need to have everything just right. Examples include making sure tins face the same way on a shelf, or counting to a particular number.",
        ],
      },
      {
        heading: "Intrusive thoughts and rumination",
        paragraphs: [
          "Some people have repeated, disturbing thoughts about relationships, sexuality, religion or harm. Because of the nature of the thoughts, many are reluctant to seek help, fearing they may be labelled.",
          "In OCD, a rumination is a long train of thinking about a question or theme that never leads to a satisfactory answer. Some people call these forms Pure O, but OCD-UK says they still involve compulsions, such as mental rituals, checking and seeking reassurance.",
          "Women can sometimes have OCD during pregnancy or after their baby is born. If these thoughts keep coming and affect daily life, a GP or health visitor can support you or refer you to a specialist mental health team.",
        ],
      },
      {
        heading: "Hoarding, and what is not OCD",
        paragraphs: [
          "Hoarding can sometimes be part of OCD, when it is done for obsessive reasons, such as fear that someone will be harmed if something is thrown away. For other people, it is diagnosed as a separate condition.",
          "Being keen on football or shopping, or collecting things you enjoy, is not OCD. The compulsions in OCD never give pleasure: they are always felt as an unpleasant demand or burden.",
        ],
      },
    ],
    helps: [
      "Remember that all forms of OCD have the same treatment approach, working on both the obsessions and the compulsions.",
      "If your theme is not on any list but OCD significantly affects your everyday life, see a doctor for a formal diagnosis.",
      "Look for a therapist who knows and understands OCD, rather than one who specialises in a single type.",
      "If you have OCD during pregnancy or after a birth, speak to your GP or health visitor.",
      CRISIS,
    ],
    tryThisWeek: [
      "Note which themes fit your OCD.",
      "See a doctor if it affects daily life.",
      "Ask for a therapist who knows OCD.",
    ],
    ask: "Which form of OCD do you think I have, and will the treatment be the same?",
    interactive: {
      kind: "flip-cards",
      title: "The main forms, card by card",
      intro: "Turn each card to see what each form can involve. Many people have more than one.",
      cards: [
        { id: "checking", front: "Checking", when: "Fear something bad will happen", back: "Checking lights, appliances, windows or locks, again and again, just in case, even when you know it is illogical." },
        { id: "contamination", front: "Contamination", when: "Fear of germs, dirt or disease", back: "The fear that contamination will harm you or a loved one, leading to cleaning, washing or avoiding things." },
        { id: "symmetry", front: "Symmetry and ordering", when: "Things must be just right", back: "A need for things to be symmetrical or orderly, or for counting, to prevent discomfort or something bad." },
        { id: "intrusive", front: "Intrusive thoughts", when: "Repeated, disturbing thoughts", back: "Unwanted thoughts about relationships, religion, sexuality or harm. They still come with compulsions, such as checking." },
        { id: "rumination", front: "Rumination", when: "Endless questioning", back: "A long train of thinking about a question or theme that never leads to a satisfactory answer." },
        { id: "hoarding", front: "Hoarding", when: "Hard to throw things away", back: "Part of OCD when done for obsessive reasons. For other people it is a separate condition." },
      ],
    },
    sources: [OCDUK_TYPES, RETHINK_OCD, NHS_SYMPTOMS, OCDUK_PURE_O, NHS_OCD, OCDUK_FAQ, OCDUK_NOT_OCD, RCPSYCH_OCD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do different forms of OCD need different treatments?",
      options: [{ text: "No, they share the same treatment approach", right: true }, { text: "Yes, each needs its own specialist" }, { text: "Some forms cannot be treated" }],
      why: "All forms of OCD have the same treatment approach, working on both the obsessions and the compulsions.",
    },
  },
  {
    id: "ocd-cbt-erp",
    kicker: "Treatment",
    question: "What is CBT with exposure and response prevention, and does it work?",
    hook: "Facing a fear without the ritual sounds frightening. Done in small steps, with support, it is how many people take back control.",
    short: "Therapy for OCD is usually cognitive behavioural therapy (CBT) with exposure and response prevention (ERP). You gradually face situations that make you anxious, starting with the easiest, without neutralising them with compulsions. It may be hard work, but many people find that their anxiety eventually improves or goes away.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Therapy for OCD is usually a type of CBT with exposure and response prevention. It involves breaking your problems down into thoughts, physical feelings and actions, and facing your fears without neutralising them with compulsive behaviours.",
          "You start with situations that cause the least anxiety, before moving on to more difficult thoughts. OCD-UK says CBT remains the treatment of choice for OCD in the UK, because it adds work on what you make of your thoughts to the behavioural part.",
        ],
      },
      {
        heading: "Step by step",
        paragraphs: [
          "Make a list of all the things you fear or avoid, with the ones you fear least at the bottom and the worst at the top. Then start at the bottom and work up, tackling one at a time, and do not move on until you have overcome the last one.",
          "Each time, stay with it long enough for your anxiety to fall to less than half of what it is at its worst. This may take between 10 and 90 minutes to start with.",
          "Your anxiety is unpleasant but will not do you any harm. It will go away eventually, and it will be easier to face with regular practice.",
        ],
      },
      {
        heading: "Why it works",
        paragraphs: [
          "Compulsions prevent someone with OCD from finding out that what they fear will not happen. In CBT, behavioural experiments help you find out what happens when you do not check or perform your rituals.",
          "After the first few times, your anxiety does not climb as high and does not last as long. Generally, people find that exposure exercises are not as difficult as they thought they would be.",
        ],
      },
      {
        heading: "How long it takes",
        paragraphs: [
          "People with fairly mild OCD usually need about 8 to 20 sessions of therapist treatment, with exercises done at home between sessions. If you have more severe OCD, you may need a longer course of treatment.",
          "CBT will usually have an effect quite quickly. The Royal College of Psychiatrists says about 3 out of 4 people who complete ERP are helped a lot.",
        ],
      },
      {
        heading: "If a step feels too hard",
        paragraphs: [
          "If an exercise is too hard to do, talk to your therapist and ask them to make it a little easier. Sideways steps that still move towards your goal can help, but backwards steps would be more of an avoidance.",
          "Do not settle for doing an exposure exercise just once. Repeating it every day until the anxiety has gone may take a few days, or a week or two.",
        ],
      },
    ],
    helps: [
      "List the things you fear or avoid, and rank them from least to most feared.",
      "Start with the easiest step, and stay with it until your anxiety falls to less than half.",
      "Practise often, and do the exercises set between sessions.",
      "Ask your therapist to make an exercise a little easier if it is too hard.",
      "Refer yourself to an NHS talking therapies service, or ask a GP to refer you.",
      CRISIS,
    ],
    tryThisWeek: [
      "List what you fear or avoid.",
      "Rank it, easiest at the bottom.",
      "Do this week's exercises.",
    ],
    ask: "Can I be referred for CBT with exposure and response prevention, ideally with a therapist who knows OCD?",
    interactive: {
      kind: "timeline",
      title: "Climbing the ladder, one rung at a time",
      steps: [
        { id: "list", when: "Step 1", title: "List your fears", points: ["Write down the things you fear or avoid.", "You can start this before therapy begins."] },
        { id: "rank", when: "Step 2", title: "Put them in order", points: ["Least feared at the bottom, worst at the top.", "This is your hierarchy."] },
        { id: "start", when: "Step 3", title: "Start at the bottom", points: ["Face the easiest situation without the compulsion.", "Stay until your anxiety falls to less than half."] },
        { id: "repeat", when: "Step 4", title: "Repeat it", points: ["Practise often, every day if you can.", "Each time, the anxiety does not climb as high."] },
        { id: "up", when: "Step 5", title: "Move up a rung", points: ["Only once you have overcome the last step.", "If it is too hard, ask your therapist for a smaller step."] },
      ],
    },
    sources: [NHS_TREATMENT, OCDUK_CBT, OCDUK_ERP, RCPSYCH_OCD, OCDUK_UNDERSTANDING, NHS_OCD, OCDUK_SELF_HELP, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Where does exposure and response prevention usually start?",
      options: [{ text: "With the situations that cause the least anxiety", right: true }, { text: "With your very worst fear" }, { text: "With stopping every ritual at once" }],
      why: "You start with situations that cause the least anxiety, before moving on to more difficult thoughts.",
    },
  },
  {
    id: "ocd-medicines",
    kicker: "Treatment",
    question: "Can medicine help my OCD, and how long does it take?",
    hook: "An SSRI can take the edge off the anxiety OCD brings and make therapy easier to face. It takes patience, and it is never stopped suddenly.",
    short: "The main medicines for OCD are a type of antidepressant called SSRIs, which can help by increasing serotonin in the brain. You may need medicine if talking therapy has not helped or your OCD is fairly severe. It can take up to 12 weeks to notice a benefit, most people need treatment for at least a year, and an SSRI should never be stopped without speaking to your doctor first.",
    sections: [
      {
        heading: "When medicine is offered",
        paragraphs: [
          "You may need medicine if talking therapy does not help treat your OCD, or if your OCD is fairly severe. If you have more severe OCD, you may need a longer course of combined therapy and medicine.",
          "OCD-UK says medicine can be used alongside CBT to ease the anxiety and make therapy a little easier to face. It should be your choice whether to try it, and your own preference is important.",
        ],
      },
      {
        heading: "SSRIs, the main medicines",
        paragraphs: [
          "The main medicines prescribed are SSRIs, which can improve OCD symptoms by increasing the levels of a chemical called serotonin in your brain. Examples include sertraline, fluoxetine, paroxetine, escitalopram and fluvoxamine.",
          "SSRIs can help to reduce obsessions and compulsions, even if you are not depressed. Sertraline is taken once a day, and your doctor may start with a low dose and increase it after a week or more.",
        ],
      },
      {
        heading: "Give it time",
        paragraphs: [
          "You may need to take an SSRI for up to 12 weeks before you notice any benefit, but most people will eventually benefit. The Royal College of Psychiatrists says about 6 out of 10 people improve with medication.",
          "Possible side effects include feeling agitated, shaky or anxious, feeling sick, diarrhoea or constipation, dizziness, sleeping problems, headaches and changes to your sex life. Most improve after a few weeks as your body gets used to the medicine.",
          "There is a very small chance that SSRIs could cause suicidal thoughts or a wish to self-harm. If this happens, contact a GP or go to your nearest A&E.",
        ],
      },
      {
        heading: "If the first medicine does not help",
        paragraphs: [
          "If an SSRI has not helped at all after 3 months, the next step is to change to a different SSRI or to a medicine called clomipramine. A combination of an SSRI and CBT may also be offered.",
          "Some people are referred to a specialist mental health service. People with severe, long-term OCD that has not responded to local treatment may be referred to a national specialist OCD service.",
        ],
      },
      {
        heading: "Staying on it, and stopping safely",
        paragraphs: [
          "Most people need treatment for at least a year. Do not stop taking an SSRI without speaking to your doctor first, because suddenly stopping can cause unpleasant side effects.",
          "Treatment will be stopped gradually to reduce the chance of side effects. The Royal College of Psychiatrists says these medicines are not addictive, but should be cut down slowly over several weeks.",
          "SSRIs can be prescribed in pregnancy if your GP thinks the benefits outweigh the risks. Talk to them to help you decide what treatment is best for you.",
        ],
      },
    ],
    helps: [
      "Keep taking your medicine long enough for it to work, as it can take up to 12 weeks to notice a benefit.",
      "Ask your doctor to talk through possible side effects, so you can make an informed choice.",
      "Talk to your doctor if side effects are hard to manage, or you feel your medicine is not helping.",
      "Never stop an SSRI suddenly; your doctor will help you reduce it gradually.",
      "Ask a pharmacist or doctor before taking other medicines or remedies, such as St John's wort.",
      CRISIS,
    ],
    tryThisWeek: [
      "Keep taking it as prescribed.",
      "Ask your doctor about side effects.",
      "Check other remedies with a pharmacist.",
    ],
    ask: "Would an SSRI help me alongside CBT, and what side effects should I look out for?",
    interactive: {
      kind: "flip-cards",
      title: "OCD medicines, card by card",
      intro: "Turn each card to see when each option is used and what to know. Always discuss changes with your doctor.",
      cards: [
        { id: "ssri", front: "SSRIs, such as sertraline", when: "Usually the first medicine", back: "Thought to increase serotonin. It can take up to 12 weeks to notice a benefit; most side effects ease after a few weeks." },
        { id: "combined", front: "An SSRI with CBT", when: "For more severe OCD", back: "Medicine can ease anxiety enough to make therapy easier to start, and eventually succeed in." },
        { id: "switch", front: "A different SSRI", when: "If the first has not helped after 3 months", back: "Finding the right medicine is often trial and error. Never change your dose or medicine without your doctor." },
        { id: "clomipramine", front: "Clomipramine", when: "If at least one SSRI has not worked or suited you", back: "A tricyclic antidepressant with more side effects than SSRIs, so it is usually not a first choice." },
        { id: "specialist", front: "Specialist OCD services", when: "If therapy and medicine have not controlled it", back: "Assessment and treatment for people whose OCD has not responded to local services." },
      ],
    },
    sources: [NHS_TREATMENT, OCDUK_MEDICATION, OCDUK_TREATMENT, RCPSYCH_OCD, NHS_SERTRALINE, NHS_OCD, NHS_ANTIDEPRESSANTS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How long might an SSRI take before you notice a benefit for OCD?",
      options: [{ text: "Up to 12 weeks", right: true }, { text: "A day or two" }, { text: "It works straight away" }],
      why: "You may need to take an SSRI for up to 12 weeks before you notice any benefit, but most people will eventually benefit.",
    },
  },
  {
    id: "ocd-getting-help",
    kicker: "Getting help",
    question: "How do I get help for OCD, and can I refer myself?",
    hook: "Many people once waited years before asking. Today you can refer yourself to NHS talking therapies, without seeing a GP first.",
    short: "There are 2 main ways to get help: refer yourself directly to an NHS talking therapies service, or see a GP. You need to be 18 or over, or 16 or over in some areas, and you do not need a diagnosis. There is nothing to be ashamed of, and OCD is unlikely to get better without treatment.",
    sections: [
      {
        heading: "Two ways in",
        paragraphs: [
          "There are 2 main ways to get help for OCD. You can refer yourself directly to an NHS talking therapies service, or see a GP, who can prescribe medicine or refer you to a local talking therapies service.",
          "To refer yourself, you need to be registered with a GP and aged 18 or over, or 16 or over in some areas. You do not need to have a diagnosed mental health condition.",
        ],
      },
      {
        heading: "What happens next",
        paragraphs: [
          "When you refer yourself, the talking therapies service will contact you. If they can help, they will tell you how long you may need to wait for your first session, and explain what information will be shared with your GP.",
          "You will have an assessment with a therapist, in person, online or on the phone. They will ask about your symptoms and what you hope to get from treatment.",
        ],
      },
      {
        heading: "If you feel ashamed",
        paragraphs: [
          "People with OCD are sometimes reluctant to seek help because they feel ashamed or embarrassed. OCD-UK says people once waited an average of 10 to 15 years between symptoms developing and seeking treatment.",
          "Health professionals can diagnose OCD without knowing details about your intrusive thoughts. What matters is describing your symptoms clearly, and how they affect your daily life.",
          "OCD-UK has a free GP Ice Breaker to print and pass to your GP, with tick boxes to show how OCD affects you. There is also a version for thoughts of a violent or sexual nature.",
        ],
      },
      {
        heading: "Your choices",
        paragraphs: [
          "OCD-UK says you should be offered a choice of CBT and medication. If you are only offered group CBT, you can ask for individual CBT, although the wait may be longer.",
          "If you choose a private therapist, make sure they are registered with a professional organisation accredited by the Professional Standards Authority. You can find an accredited CBT therapist on the UK CBT register.",
        ],
      },
      {
        heading: "Children and young people",
        paragraphs: [
          "If you are under 18, or want to get help for someone under 18, the NHS has information on mental health support for children and young people. If you think a friend or family member may have OCD, talk to them about your concerns and suggest they get help.",
        ],
      },
    ],
    helps: [
      "Refer yourself to NHS talking therapies if you are 18 or over and registered with a GP.",
      "See a GP if you are not sure whether talking therapies is right for you.",
      "Take OCD-UK's free GP Ice Breaker to your appointment if OCD is hard to explain.",
      "Describe your symptoms and how they affect your daily life; you do not have to give every detail of your thoughts.",
      "Ask for individual CBT if group therapy does not suit you.",
      CRISIS,
    ],
    tryThisWeek: [
      "Find your local talking therapies service.",
      "Print the GP Ice Breaker.",
      "Note how OCD affects your day.",
    ],
    ask: "Can you refer me for CBT for OCD, and how long is the wait here?",
    interactive: {
      kind: "scenarios",
      title: "Taking the first step",
      scenarios: [
        {
          id: "no-diagnosis",
          situation: "You think you have OCD, but nobody has diagnosed it.",
          options: [{ text: "Refer yourself to talking therapies", best: true }, { text: "Wait until you have a diagnosis" }],
          why: "You do not need to have a diagnosed mental health condition to refer yourself to NHS talking therapies.",
        },
        {
          id: "unsure",
          situation: "You are not sure talking therapies is right for you.",
          options: [{ text: "See a GP for advice", best: true }, { text: "Do nothing for now" }],
          why: "See a GP if you want help with your mental health but are not sure if NHS talking therapies is right for you.",
        },
        {
          id: "words",
          situation: "You cannot find the words to explain your OCD to a GP.",
          options: [{ text: "Take OCD-UK's GP Ice Breaker", best: true }, { text: "Cancel the appointment" }],
          why: "The free GP Ice Breaker can be printed and passed to your GP, with tick boxes to show how OCD affects you.",
        },
        {
          id: "group",
          situation: "You are offered group CBT, but you would rather be seen alone.",
          options: [{ text: "Ask for individual CBT", best: true }, { text: "Turn down treatment" }],
          why: "You can ask to be referred for individual CBT if that is your preference, although the wait may be longer.",
        },
      ],
    },
    sources: [NHS_SYMPTOMS, NHS_OCD, NHS_TT, NHS_FIND_TT, NHS_CBT, OCDUK_ACCESS, RETHINK_OCD, OCDUK_GP, OCDUK_TREATMENT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do you need a diagnosis to refer yourself to NHS talking therapies?",
      options: [{ text: "No", right: true }, { text: "Yes, from a GP" }, { text: "Yes, from a psychiatrist" }],
      why: "To refer yourself, you need to be registered with a GP and aged 18 or over, or 16 or over in some areas. You do not need to have a diagnosed mental health condition.",
    },
  },
  {
    id: "ocd-self-help",
    kicker: "Self-help",
    question: "What can I do myself while I wait for therapy?",
    hook: "Self-help rarely replaces therapy, but learning how OCD works and taking small first steps can help treatment go further.",
    short: "While you wait, you can learn about OCD and CBT, list your fears from most to least anxiety-provoking, and try a small exposure exercise if you feel up to it. A good self-help book, a support group and looking after your general health can help too. OCD-UK says people generally do not recover with self-help alone, but it can help you make better use of therapy.",
    sections: [
      {
        heading: "Start while you wait",
        paragraphs: [
          "Waiting for therapy can be frustrating, but there are parts of it you can make a start on. OCD-UK suggests learning about OCD and how CBT works, creating your OCD hierarchy, and trying one of your least anxiety-provoking situations if you feel up to it.",
          "A hierarchy is a list of situations that cause you anxiety, with the most anxiety-provoking at the top and the least at the bottom.",
          "OCD-UK says people generally do not recover with self-help alone. But the more you understand OCD, the better use you can make of your therapy once it starts.",
        ],
      },
      {
        heading: "Things that help",
        paragraphs: [
          "The Royal College of Psychiatrists suggests remembering that it is not your fault and you are not going mad. Resist the compulsive behaviour, but not the obsessional thought.",
          "Do not use alcohol or street drugs to control your anxiety. If your thoughts involve worries about your faith, it can sometimes help to speak to a religious leader to work out if this is an OCD problem.",
        ],
      },
      {
        heading: "Things that keep it going",
        paragraphs: [
          "Some ways of coping can keep OCD going. Pushing unpleasant thoughts out of your mind usually only makes them return, and putting a disturbing thought right with a safe thought keeps the cycle turning.",
          "Rituals, checking, avoiding and seeking reassurance make you less anxious for a short time. But every time you do them, you strengthen your belief that they stop bad things from happening.",
        ],
      },
      {
        heading: "Books and online help",
        paragraphs: [
          "OCD-UK's favoured self-help book is Break Free from OCD, because it focuses on the thinking side of CBT, not just exposure. It is one of the Reading Well books on prescription, which a GP can recommend and you can borrow from your local library.",
          "Choose carefully, as material online is not always helpful or accurate. Online OCD tests are notoriously unreliable, so always see a trained health professional for a diagnosis.",
        ],
      },
      {
        heading: "Look after the basics",
        paragraphs: [
          "Good physical health can have a positive effect on mood, which can help reduce the anxiety caused by OCD. That includes a healthy balanced diet, regular exercise and regular sleep patterns.",
          "OCD-UK says many people with OCD find running and physical exercise, even gardening, improves their general feeling of wellbeing. It does not recommend alternative therapies such as hypnotherapy as treatments for OCD.",
        ],
      },
    ],
    helps: [
      "Learn about OCD and how CBT works while you wait for therapy.",
      "Write your OCD hierarchy, from most to least anxiety-provoking.",
      "If you feel up to it, try facing one of your least anxiety-provoking situations.",
      "Do not use alcohol or street drugs to control your anxiety.",
      "Eat a healthy balanced diet, exercise regularly and keep regular sleep patterns.",
      CRISIS,
    ],
    tryThisWeek: [
      "Read about how CBT works.",
      "Start your hierarchy list.",
      "Exercise and keep regular sleep.",
    ],
    ask: "Is there a self-help book or course you would recommend while I wait for therapy?",
    interactive: {
      kind: "risk-check",
      title: "Habits that keep OCD going",
      intro: "Tick any you recognise. Each one eases anxiety for a moment but keeps the cycle turning, and each can change.",
      items: [
        { id: "pushing", label: "Pushing thoughts away", note: "Trying to push unpleasant thoughts out of your mind usually only makes them return.", changeable: true },
        { id: "safe-thoughts", label: "Putting thoughts right", note: "Correcting a disturbing thought with a safe thought or picture keeps OCD going. Resist the behaviour, not the thought.", changeable: true },
        { id: "reassurance", label: "Asking for reassurance", note: "Reassurance brings relief at first, but the doubts return and the need to ask again follows.", changeable: true },
        { id: "checking", label: "Checking again and again", note: "Every check strengthens the belief that it stops bad things happening, so the pressure to check grows.", changeable: true },
        { id: "avoiding", label: "Avoiding triggers", note: "Avoiding situations means you never find out what would really happen.", changeable: true },
        { id: "alcohol", label: "Using alcohol to cope", note: "Do not use alcohol or street drugs to control your anxiety.", changeable: true },
      ],
    },
    sources: [OCDUK_SELF_HELP, RCPSYCH_OCD, OCDUK_TREATMENT, OCDUK_COMPULSIONS, OCDUK_CBT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does OCD-UK say about self-help on its own?",
      options: [{ text: "People generally do not recover with it alone, but it helps", right: true }, { text: "It always replaces therapy" }, { text: "It makes OCD worse" }],
      why: "OCD-UK says people generally do not recover with self-help alone. But the more you understand OCD, the better use you can make of your therapy once it starts.",
    },
  },
  {
    id: "ocd-family",
    kicker: "Family and friends",
    question: "How can my family help without joining in?",
    hook: "Answering \"did I lock the door?\" feels kind. In OCD it can feed the cycle. Families help more by gently stepping back.",
    short: "Families often get drawn into OCD by giving reassurance, avoiding triggers or carrying out rituals. Though it comes from love, reassurance works like a compulsion and keeps OCD going. Family and friends can help by learning about OCD, gently declining to take part in rituals, encouraging treatment, and getting support for themselves too.",
    sections: [
      {
        heading: "How families get drawn in",
        paragraphs: [
          "Loved ones often become entwined in OCD without meaning to. They may offer reassurance, avoid objects or places for fear of triggering it, or carry out compulsions for the person.",
          "OCD Action says more than 80% of families have suffered disruption to their personal life and family social life. For many, the burden of care falls mostly to one family member.",
        ],
      },
      {
        heading: "Why reassurance backfires",
        paragraphs: [
          "When you love someone, it is natural to try to relieve their anxiety by answering their questions. But like any OCD compulsion, once is never enough, and it reinforces the need to keep seeking reassurance.",
          "Reassurance seeking ends up strengthening the belief behind the fear, keeping the anxiety high and driving the OCD cycle. That is why CBT encourages people not to ask for reassurance.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "The Royal College of Psychiatrists suggests finding out more about OCD, and remembering the person is not trying to be difficult: they are coping the best they can. You can help treatment by encouraging them to tackle fearful situations, saying no to taking part in rituals or checking, and not reassuring them that things are alright.",
          "It is best not to try to physically prevent someone from carrying out a ritual. Do not worry that someone with an obsessional fear of being violent will actually do it, because the Royal College says this does not happen.",
          "Rethink suggests going at their pace, being patient and keeping an open mind. As frustrating as it is for you, it is even more frustrating for them.",
        ],
      },
      {
        heading: "Being part of treatment",
        paragraphs: [
          "OCD-UK suggests that the person in therapy tells loved ones what their homework is, and asks for motivational support rather than reassurance. A therapist can write a letter for loved ones about what to do and not do, or invite them to a joint session.",
          "It may take a while for someone to accept they need help. Encourage them to read about OCD and talk it over with a professional, and ask if you can go with them to see their GP.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "Caring can be extremely stressful, and family members may neglect their own needs and struggle with guilt, helplessness and hopelessness. When carers get together, they often find they share many of the same feelings.",
          "OCD Action's helpline supports friends, family members, partners and carers. OCD-UK runs free online groups for family members and friends who support an adult with OCD.",
        ],
      },
    ],
    helps: [
      "Find out more about OCD, and remember the person is coping the best they can.",
      "Gently say no to taking part in rituals or checking.",
      "Try not to reassure them that things are alright; offer motivational support instead.",
      "Encourage them to talk to a professional, and offer to go with them to see their GP.",
      "Get support for yourself from OCD Action's helpline or a family support group.",
      CRISIS,
    ],
    tryThisWeek: [
      "Read about how OCD works.",
      "Swap reassurance for encouragement.",
      "Find a family support group.",
    ],
    ask: "How can our family support treatment, and is there support for us as carers?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments at home",
      scenarios: [
        {
          id: "door",
          situation: "Your partner asks, for the fifth time, whether the door is locked.",
          options: [{ text: "Kindly decline to reassure them", best: true }, { text: "Check it for them again" }],
          why: "Like any OCD compulsion, once is never enough. Answering reinforces the need to keep seeking reassurance.",
        },
        {
          id: "ritual",
          situation: "You are asked to wash your hands in a set way before coming in.",
          options: [{ text: "Gently say no to joining the ritual", best: true }, { text: "Go along with it to keep the peace" }],
          why: "Saying no to taking part in rituals or checking can help exposure treatment.",
        },
        {
          id: "frustrated",
          situation: "You feel frustrated as a ritual makes you late again.",
          options: [{ text: "Remember they are doing their best", best: true }, { text: "Physically stop the ritual" }],
          why: "The person is not trying to be difficult. It is best not to try to physically prevent someone from carrying out a ritual.",
        },
        {
          id: "exhausted",
          situation: "You feel worn out and alone with it all.",
          options: [{ text: "Contact a carers' helpline or group", best: true }, { text: "Keep it to yourself" }],
          why: "OCD Action's helpline supports family members and carers, and when carers get together they often find they share the same feelings.",
        },
      ],
    },
    sources: [OCDUK_IMPACT, OCDA_CARERS, OCDUK_COMPULSIONS, OCDUK_CBT, RCPSYCH_OCD, RETHINK_OCD, OCDUK_MOST, OCDUK_GROUPS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Why can answering reassurance questions keep OCD going?",
      options: [{ text: "Once is never enough, and it reinforces the need", right: true }, { text: "It cures the fear for good" }, { text: "It makes no difference" }],
      why: "Like any OCD compulsion, once is never enough, and it reinforces the need to keep seeking reassurance.",
    },
  },
  {
    id: "ocd-work",
    kicker: "Work and study",
    question: "How can I manage OCD at work or while studying?",
    hook: "OCD can make you late, slow or exhausted, and colleagues may not see why. There are rights and support that can help.",
    short: "OCD can affect education and work, from being late because of checking to taking longer over tasks. If it has a substantial, long-term effect on daily life, it may count as a disability, and employers must make reasonable adjustments. Access to Work and Disabled Students' Allowance can give extra support.",
    sections: [
      {
        heading: "How OCD can affect work and study",
        paragraphs: [
          "OCD can affect education, employment and career development. Checking, or getting things just right, can take so long that people are late for school, work and appointments.",
          "People may not be aware of the compulsions going on in your head. This may mean they do not understand why you may be slow to complete a task.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Under the Equality Act 2010, you are disabled if you have a physical or mental impairment that has a substantial and long-term negative effect on your ability to do normal daily activities. Long-term means 12 months or more, and the Act does not apply to Northern Ireland.",
          "Employers must make reasonable adjustments so that workers with physical or mental health conditions are not substantially disadvantaged. These can include doing things another way, or a phased return to work with flexible hours or part-time working.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition. Its mental health support might include a tailored plan to help you get or stay in work, and one-to-one sessions with a mental health professional.",
          "You need to be 16 or over and in paid work, or about to start or return to it, and you do not need to be diagnosed to apply. A grant will not affect other benefits, and you will not have to pay it back.",
        ],
      },
      {
        heading: "If you are studying",
        paragraphs: [
          "Disabled Students' Allowance covers study-related costs you have because of a mental health problem, long-term illness or other disability. It depends on your needs, not your household income, and you do not need to pay it back.",
          "You will have an informal needs assessment to work out what support you can get for your studies. It is not a test.",
        ],
      },
      {
        heading: "Getting advice",
        paragraphs: [
          "You can get advice on reasonable adjustments from the Disability Employment Adviser at your local Jobcentre Plus. OCD Action's helpline can also give information about your rights, including reasonable adjustments and protection from discrimination.",
          "Severe OCD can make it impossible to work regularly. The Royal College of Psychiatrists says work, relationships and family life are all more productive and satisfying when you are not constantly having to cope with OCD, and treatment will usually help.",
        ],
      },
    ],
    helps: [
      "Talk to your employer about reasonable adjustments, such as doing things another way or flexible hours.",
      "Apply to Access to Work for support with managing your mental health at work.",
      "If you are a student, ask about Disabled Students' Allowance.",
      "Get advice from a Disability Employment Adviser at Jobcentre Plus, or from OCD Action's helpline.",
      CRISIS,
    ],
    tryThisWeek: [
      "List adjustments that would help.",
      "Check whether Access to Work fits.",
      "Ask an adviser about your rights.",
    ],
    ask: "Could you note how OCD affects my work, so I can ask my employer about adjustments?",
    interactive: {
      kind: "flip-cards",
      title: "Support at work and in study",
      intro: "Turn each card to see what each kind of support is and when it can help.",
      cards: [
        { id: "equality", front: "The Equality Act 2010", when: "A long-term effect on daily life", back: "A mental impairment with a substantial effect for 12 months or more can count as a disability. Not in Northern Ireland." },
        { id: "adjustments", front: "Reasonable adjustments", when: "From your employer", back: "Changes so you are not substantially disadvantaged, such as doing things another way or flexible hours." },
        { id: "atw-mental", front: "Access to Work mental health support", when: "To get or stay in work", back: "A tailored plan and one-to-one sessions with a mental health professional. You can only claim it once." },
        { id: "atw-grant", front: "An Access to Work grant", when: "For practical support", back: "Helps pay for practical support with your work. It will not affect other benefits and is not paid back." },
        { id: "dsa", front: "Disabled Students' Allowance", when: "If you are studying", back: "Covers study-related costs from a mental health problem. Based on your needs, not household income." },
        { id: "helpline", front: "OCD Action's helpline", when: "When you want advice", back: "Information about your rights, including reasonable adjustments and protection from discrimination." },
      ],
    },
    sources: [OCDUK_IMPACT, OCDUK_TYPES, RETHINK_OCD, GOV_DISABILITY, GOV_ADJUSTMENTS, GOV_ATW, GOV_ATW_ELIGIBILITY, GOV_DSA, OCDA_HELPLINE, RCPSYCH_OCD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do you need a diagnosis to apply for Access to Work?",
      options: [{ text: "No", right: true }, { text: "Yes, always" }, { text: "Only from a psychiatrist" }],
      why: "You need to be 16 or over and in paid work, or about to start or return to it, and you do not need to be diagnosed to apply.",
    },
  },
  {
    id: "ocd-setbacks",
    kicker: "Staying well",
    question: "What if OCD comes back after treatment?",
    hook: "A blip after therapy is normal, not a failure. Keeping your skills going, and a plan for setbacks, helps you get back on track.",
    short: "OCD symptoms may improve or go away for a time, and sometimes return, often when people are stressed or low. OCD-UK says a blip is perfectly normal, and planning for it with your therapist helps. Keep using what you learned, keep taking any medicine as agreed with your doctor, and remember that CBT can be tried again.",
    sections: [
      {
        heading: "Ups and downs are normal",
        paragraphs: [
          "OCD symptoms may improve or go away for a time, but they do often return. For some people, the symptoms get worse when they are stressed or depressed.",
          "OCD-UK says the inevitable blip or relapse is perfectly normal, and should not need more therapy time if you are prepared. Recovery is very individual: for some people it is an ongoing journey, and for others a destination.",
        ],
      },
      {
        heading: "Plan before therapy ends",
        paragraphs: [
          "Before you are discharged, your therapist should spend time with you on relapse prevention, perhaps a whole final session. It helps you make the most of what you learned, and prepares you to look out for signs of OCD returning.",
          "After your course of CBT has finished, it is important to keep using the skills you have learned. Your therapist will usually help you plan how you will do this.",
        ],
      },
      {
        heading: "Keeping your skills sharp",
        paragraphs: [
          "You may need top-up exposure sessions once every few weeks, just to stay on top of OCD. When exposures are repeated over time, the anxiety shrinks until it is barely noticeable or even fades entirely.",
          "The Royal College of Psychiatrists says that of those who get better with ERP, about 1 in 5 will develop symptoms in the future and need extra treatment. OCD-UK says there is no limit to how many times you can try CBT, and another therapist can bring a completely different experience.",
        ],
      },
      {
        heading: "Medicine and relapse",
        paragraphs: [
          "If medicine has helped, it is best to continue it for at least 12 months. Anti-obsessional medicine helps to prevent OCD coming back for as long as it is taken.",
          "About 1 in 3 people who stop medication get symptoms again in the months after stopping, and this is much less likely when it is combined with CBT. Do not stop an SSRI without speaking to your doctor, and your dose may need to be increased again if symptoms return.",
        ],
      },
      {
        heading: "Getting help again",
        paragraphs: [
          "Speak to a GP if you are still having problems after your CBT has finished. They might suggest having more CBT or a different type of treatment.",
          "If you have tried talking therapy and medicine and your OCD is still not under control, further treatment by a specialist team may sometimes be needed.",
        ],
      },
    ],
    helps: [
      "Plan relapse prevention with your therapist before treatment ends.",
      "Keep using your CBT skills, and repeat exposure exercises when you need to.",
      "See a blip as perfectly normal, not as failure.",
      "Keep taking any medicine as prescribed, and only stop with your doctor's help.",
      "Speak to a GP if problems carry on after CBT; more CBT may help.",
      CRISIS,
    ],
    tryThisWeek: [
      "Write down your relapse plan.",
      "Repeat one exposure exercise.",
      "Treat a blip as normal.",
    ],
    ask: "Can we make a relapse prevention plan, and who do I contact if OCD comes back?",
    interactive: {
      kind: "scenarios",
      title: "When OCD tries to creep back",
      scenarios: [
        {
          id: "urge",
          situation: "Months after therapy, an old urge to check comes back.",
          options: [{ text: "Use your skills and repeat an exposure", best: true }, { text: "Give in, as therapy has failed" }],
          why: "A blip is perfectly normal. Repeating exposures over time shrinks the anxiety until it is barely noticeable.",
        },
        {
          id: "stop-meds",
          situation: "You feel better and want to stop your SSRI.",
          options: [{ text: "Talk to your doctor first", best: true }, { text: "Stop it today" }],
          why: "Most people need treatment for at least a year. Do not stop an SSRI without speaking to your doctor, as suddenly stopping can cause side effects.",
        },
        {
          id: "stress",
          situation: "A stressful time at work, and the thoughts are getting louder.",
          options: [{ text: "Turn to your relapse plan", best: true }, { text: "Wait and hope it passes" }],
          why: "Symptoms can get worse when people are stressed. Relapse prevention prepares you to spot OCD returning and handle it.",
        },
        {
          id: "after-cbt",
          situation: "Your CBT has finished, but problems keep going.",
          options: [{ text: "Speak to a GP about more CBT", best: true }, { text: "Assume nothing more can help" }],
          why: "Speak to a GP if you are still having problems after CBT. They might suggest more CBT or a different type of treatment.",
        },
      ],
    },
    sources: [RCPSYCH_OCD, OCDUK_MOST, OCDUK_RECOVERY, NHS_CBT, OCDUK_ERP, OCDUK_CBT, OCDUK_MEDICATION, NHS_TREATMENT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does OCD-UK say about a blip after therapy?",
      options: [{ text: "It is perfectly normal", right: true }, { text: "It means therapy has failed" }, { text: "It means starting from scratch" }],
      why: "OCD-UK says the inevitable blip or relapse is perfectly normal, and should not need more therapy time if you are prepared.",
    },
  },
  {
    id: "ocd-support",
    kicker: "Support",
    question: "Where can I find support groups and charities for OCD?",
    hook: "Talking to people who understand can ease the isolation OCD brings. Free groups, forums and helplines are there for you and your family.",
    short: "Many people with OCD find support groups helpful: they can offer coping advice, reduce isolation and help families too. OCD-UK and OCD Action run free online groups, and both offer helplines or forums. If you need someone now, Samaritans, Shout and NHS 111 are there.",
    sections: [
      {
        heading: "Why groups help",
        paragraphs: [
          "Many people with OCD find support groups helpful. They can provide reassurance and coping advice, reduce feelings of isolation, offer a chance to socialise with others, and give information and advice to family members and friends.",
          "The national charities OCD Action, OCD-UK and TOP UK can tell you about support groups in your area.",
        ],
      },
      {
        heading: "OCD-UK",
        paragraphs: [
          "OCD-UK runs free online support groups on Zoom, for people with OCD and their family members, partners and friends. There are open groups on Tuesdays and Thursdays, monthly groups for over 50s, teenagers and young adults, and groups for parents and families.",
          "OCD-UK also has free discussion forums, with separate forums for people with OCD and for family members, where you can use an alias to stay anonymous. Its helpline is only open at certain times, so it recommends emailing your questions.",
        ],
      },
      {
        heading: "OCD Action",
        paragraphs: [
          "OCD Action runs free online support groups, led by trained volunteers, for anyone in the UK affected by OCD, and no formal diagnosis is needed. There are groups by age and theme, and for parents, partners and loved ones, with your camera on or off.",
          "Its helpline is mostly run by trained volunteers, many with personal experience of OCD. If no one answers, you can leave a message, and calls and emails are usually returned within a few days.",
        ],
      },
      {
        heading: "Choosing support wisely",
        paragraphs: [
          "Not all groups are led with a positive recovery focus, so OCD-UK only lists groups run to approved standards. Just as anyone can call themselves a therapist, anyone can start a support group.",
          "If you choose a private therapist, make sure they are registered with a professional organisation accredited by the Professional Standards Authority.",
        ],
      },
      {
        heading: "When you need someone now",
        paragraphs: [
          "You can call Samaritans free, any time, from any phone, on 116 123, and they will not judge or tell you what to do. Shout is a free, confidential text service: text SHOUT to 85258.",
          "You can also call 111 and select the mental health option, or ask for an urgent GP appointment. Call 999 or go to A&E if you do not feel you can keep yourself or someone else safe.",
        ],
      },
    ],
    helps: [
      "Join a free online support group run by OCD-UK or OCD Action.",
      "Use the OCD-UK forums, where you can stay anonymous with an alias.",
      "Contact OCD Action's helpline, or email OCD-UK, for information and support.",
      "Choose groups run to approved standards, with a recovery focus.",
      CRISIS,
    ],
    tryThisWeek: [
      "Sign up for an online group.",
      "Browse the OCD-UK forums.",
      "Contact a charity helpline.",
    ],
    ask: "Are there OCD support groups you would recommend for me or my family?",
    interactive: {
      kind: "flip-cards",
      title: "Where to turn",
      intro: "Turn each card to see who each service is for and what it offers.",
      cards: [
        { id: "ocduk-groups", front: "OCD-UK online groups", when: "To share with people who understand", back: "Free Zoom groups for people with OCD and their families, plus groups for over 50s, teens and young adults." },
        { id: "ocda-groups", front: "OCD Action online groups", when: "No diagnosis needed", back: "Free peer-led groups by age and theme, and for parents, partners and loved ones. Camera on or off." },
        { id: "forums", front: "OCD-UK forums", when: "Even through the night", back: "Free forums for people with OCD and for family members, where you can use an alias to stay anonymous." },
        { id: "helpline", front: "OCD Action helpline", when: "For information and support", back: "Run by trained volunteers, many with personal experience. Leave a message if no one answers." },
        { id: "samaritans", front: "Samaritans: 116 123", when: "Any time, day or night", back: "Free from any phone. They will listen, and will not judge or tell you what to do." },
        { id: "shout", front: "Shout: text SHOUT to 85258", when: "If you would rather text", back: "A free, confidential text service, 24 hours a day, for anyone in the UK who needs support." },
      ],
    },
    sources: [NHS_TREATMENT, NHS_OCD, OCDUK_GROUPS, OCDUK_SELF_HELP, OCDUK_CONTACT, OCDA_GROUPS, OCDA_HELPLINE, NHS_TT, SAMARITANS, SHOUT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do you need a formal diagnosis to join an OCD Action support group?",
      options: [{ text: "No", right: true }, { text: "Yes, from a GP" }, { text: "Yes, from a therapist" }],
      why: "OCD Action runs free online support groups for anyone in the UK affected by OCD, and no formal diagnosis is needed.",
    },
  },
];
