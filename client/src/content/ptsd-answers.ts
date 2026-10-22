import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the PTSD page's pieces (content/library-conditions/mind-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS
// (including Every Mind Matters and NHS inform), the Royal College of Psychiatrists, PTSD UK, Rethink
// Mental Illness, Samaritans, Shout and the government's page on PTSD and driving. mind.org.uk could not
// be read today (it answered 403 with a bot check), so no Mind page is cited. Safe-messaging guidance is
// followed throughout: no method details, hopeful and practical, and every answer ends its "What helps"
// list with the crisis routes as the NHS gives them (999 or A&E, 111 mental health option, Samaritans
// 116 123, Shout 85258). Nothing here suggests stopping or changing a medicine without the doctor, and
// wherever alcohol is mentioned the NHS warning about stopping suddenly is given. General information
// only; it never replaces what a person's own GP, therapist or mental health team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const emm = (label: string, path: string): LearnSource => ({ label: `NHS Every Mind Matters: ${label}`, url: `https://www.nhs.uk/every-mind-matters/${path}` });
const rcpsych = (label: string, path: string): LearnSource => ({ label: `Royal College of Psychiatrists: ${label}`, url: `https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/${path}` });
const ptsdUk = (label: string, path: string): LearnSource => ({ label: `PTSD UK: ${label}`, url: `https://www.ptsduk.org/${path}` });
const rethink = (label: string, path: string): LearnSource => ({ label: `Rethink Mental Illness: ${label}`, url: `https://www.rethink.org/advice-and-information/about-mental-illness/mental-health-conditions/post-traumatic-stress-disorder-ptsd-multipage/${path}` });
const samaritans = (label: string, path: string): LearnSource => ({ label: `Samaritans: ${label}`, url: `https://www.samaritans.org/how-we-can-help/${path}` });

const NHS_PTSD = nhs("PTSD (post-traumatic stress disorder)", "mental-health/conditions/ptsd-post-traumatic-stress-disorder/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_ANTIDEP = nhs("Antidepressants", "medicines/antidepressants/");
const NHS_SERTRALINE = nhs("Sertraline", "medicines/sertraline/");
const NHS_PAROXETINE = nhs("Paroxetine", "medicines/paroxetine/");
const NHS_INSOMNIA = nhs("Insomnia", "conditions/insomnia/");
const NHS_BREATHING = nhs("Breathing exercises for stress", "mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/");
const NHS_MINDFULNESS = nhs("Mindfulness", "mental-health/self-help/tips-and-support/mindfulness/");
const NHS_ALCOHOL = nhs("Alcohol-use disorder", "conditions/alcohol-use-disorder/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const EMM_SLEEP = emm("Sleep problems", "mental-health-issues/sleep/");
const EMM_URGENT = emm("Urgent support", "urgent-support/");

const NHSI_PTSD: LearnSource = { label: "NHS inform: Post-traumatic stress disorder (PTSD)", url: "https://www.nhsinform.scot/illnesses-and-conditions/mental-health/post-traumatic-stress-disorder-ptsd/" };

const RCP_PTSD = rcpsych("Post-traumatic stress disorder (PTSD)", "post-traumatic-stress-disorder");
const RCP_COPING = rcpsych("Coping after a traumatic event", "coping-after-a-traumatic-event");
const RCP_SLEEP = rcpsych("Sleeping well", "sleeping-well");

const PTSDUK_SYMPTOMS = ptsdUk("Symptoms of PTSD", "what-is-ptsd/symptoms-of-ptsd/");
const PTSDUK_CAUSES = ptsdUk("Causes of PTSD", "what-is-ptsd/causes-of-ptsd/");
const PTSDUK_FLASHBACKS = ptsdUk("Understanding PTSD flashbacks and triggers", "what-is-ptsd/understanding-ptsd-flashbacks-and-triggers/");
const PTSDUK_CPTSD = ptsdUk("Complex PTSD", "what-is-ptsd/complex-ptsd/");
const PTSDUK_CPTSD_DIFF = ptsdUk("PTSD and C-PTSD: the similarities and the differences", "ptsd-and-c-ptsd-the-similarities-and-the-differences/");
const PTSDUK_EMDR = ptsdUk("What is EMDR?", "what-is-eye-movement-desensitisation-reprocessing-emdr/");
const PTSDUK_EMDR_SESSION = ptsdUk("What happens in an EMDR therapy session?", "what-happens-in-an-emdr-therapy-session/");
const PTSDUK_THINK = ptsdUk("I think I have PTSD: what should I do?", "treatment-help/i-think-i-have-ptsd/");
const PTSDUK_RECOVERY = ptsdUk("Understanding the recovery process of PTSD", "treatment-help/understanding-their-recovery-process/");
const PTSDUK_MOST = ptsdUk("Getting the most from your PTSD treatment", "treatment-help/getting-the-most-from-your-ptsd-treatment/");
const PTSDUK_GROUNDING = ptsdUk("Grounding techniques for PTSD and C-PTSD", "grounding-techniques/");
const PTSDUK_HYPER = ptsdUk("Hypervigilance and PTSD", "hypervigilance-and-ptsd/");
const PTSDUK_SUPPORTING = ptsdUk("Supporting someone with PTSD", "friends-family/supporting-someone-with-ptsd/");
const PTSDUK_LOVED_ONE = ptsdUk("I think my loved one has PTSD: what can I do?", "friends-family/loved-one/");
const PTSDUK_SELF_CARE = ptsdUk("Self-care for carers and loved ones", "friends-family/self-care-for-loved-ones/");

const RETHINK_WHAT = rethink("What is PTSD?", "what-is-ptsd/");
const RETHINK_SYMPTOMS = rethink("The symptoms of PTSD", "the-symptoms-of-ptsd/");
const RETHINK_CAUSES = rethink("What causes PTSD?", "what-causes-ptsd/");
const RETHINK_COMPLEX = rethink("What is complex PTSD?", "what-is-complex-ptsd/");
const RETHINK_DIAGNOSED = rethink("How is PTSD diagnosed?", "how-is-ptsd-diagnosed/");
const RETHINK_TREATMENT = rethink("Treatment for PTSD", "treatment-for-ptsd/");
const RETHINK_RISKS = rethink("Potential risks with PTSD", "potential-risks-with-ptsd/");
const RETHINK_SUPPORTING = rethink("Supporting someone with PTSD", "supporting-someone-with-ptsd/");

const SAM_CONTACT = samaritans("Contact a Samaritan", "contact-samaritan/");
const SAM_SIGNS = samaritans("Signs you may be struggling to cope", "if-youre-having-difficult-time/signs-you-may-be-struggling-cope/");
const SHOUT: LearnSource = { label: "Shout: The UK's free, confidential, 24/7 mental health text service", url: "https://giveusashout.org/" };

const GOV_DRIVING: LearnSource = { label: "GOV.UK: Post traumatic stress disorder (PTSD) and driving", url: "https://www.gov.uk/post-traumatic-stress-disorder-and-driving" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer but the crisis one. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you cannot keep yourself safe.";

export const ptsdAnswers: LearnArticle[] = [
  {
    id: "ptsd-what-it-is",
    kicker: "Understanding",
    question: "What is PTSD, and why does my body stay on alert?",
    hook: "Something terrible happened, and part of you is still living it. PTSD is an understandable response, not a weakness, and it usually gets better.",
    short: "PTSD (post-traumatic stress disorder) is a mental health condition caused by very stressful, frightening or distressing events. The mind keeps replaying the event, and the body can stay stuck in survival mode after the danger has passed. It is not a sign of weakness, and it usually gets better for most people, with treatment and support.",
    sections: [
      {
        heading: "A memory that will not settle",
        paragraphs: [
          "PTSD (post-traumatic stress disorder) is a mental health condition caused by very stressful, frightening or distressing events. It can develop when someone experiences or witnesses a traumatic event.",
          "Many people who go through a traumatic event have difficult emotions, thoughts and memories afterwards. For many, these improve with time and support. When they do not go away, and get in the way of daily life, it might be PTSD.",
        ],
      },
      {
        heading: "Why the alarm stays on",
        paragraphs: [
          "It is completely normal to replay a difficult experience in your head. The brain does this to help us understand what happened. In PTSD, this response becomes too extreme, and the event is re-experienced again and again through intrusive thoughts or flashbacks.",
          "Adrenaline is a hormone the body makes under stress. For people with PTSD, vivid memories of the event can keep adrenaline levels high, which can make them tense, irritable and unable to relax or sleep well. We can become stuck in survival mode even after the real danger has passed.",
          "PTSD UK describes PTSD as a memory filing error. During trauma, the brain puts getting ready to run or fight ahead of processing what is happening, so the memory is not stored in the normal way. When something brings it back, the mind can present it as if it is happening right now.",
        ],
      },
      {
        heading: "Not a sign of weakness",
        paragraphs: [
          "People with PTSD often do not have these responses consciously or on purpose. They are automatic responses caused by trauma.",
          "PTSD is not a sign of weakness. It is an understandable consequence of experiencing something overwhelming and traumatic. It can happen to anyone, and every experience of PTSD is valid.",
        ],
      },
      {
        heading: "How common it is",
        paragraphs: [
          "Around 1 in 3 adults in England report having experienced at least one major traumatic event in their lifetime. But not everyone who goes through something traumatic develops PTSD.",
          "A national survey found that around one in 20 adults in England screened positive for PTSD. This means their answers to a symptoms questionnaire suggested they were likely to have it.",
        ],
      },
      {
        heading: "It can get better",
        paragraphs: [
          "Symptoms can start straight after the traumatic event, or many months or even years later. PTSD usually gets better for most people, although for some the symptoms can be more severe and last longer.",
          "Treatment can help you recover fully from PTSD or manage the symptoms better. See a GP if you think you have symptoms of PTSD.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you have symptoms of PTSD.",
      "If you are 18 or over, or 16 or over in some areas, you can refer yourself to NHS talking therapies without seeing a GP.",
      "Talk to someone you trust about how you are feeling.",
      "Try to hold onto the belief that recovery is possible, and be kind to yourself.",
      "Try to keep to your usual routine as much as you can.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Talk to someone you trust.",
      "Keep to your usual routine.",
    ],
    ask: "Could what I am going through be PTSD, and what treatment would you suggest?",
    interactive: {
      kind: "timeline",
      title: "After a traumatic event",
      steps: [
        { id: "first-weeks", when: "The first weeks", title: "Normal reactions", points: ["Many people have some trauma symptoms for the first month or so.", "Most process what happened over a few weeks."] },
        { id: "first-month", when: "The first month", title: "Too early to call it PTSD", points: ["PTSD should not be diagnosed in the first month.", "Severe symptoms straight away may be an acute stress reaction."] },
        { id: "one-month", when: "After one month", title: "Notice how you are", points: ["Slowly improving: there is a good chance you will get better.", "Significant distress, not improving at all: you might need extra support."] },
        { id: "three-months", when: "After three months", title: "Still there? Ask for help", points: ["Distress still present after more than three months may need extra support.", "Speak to your GP."] },
        { id: "later", when: "Months or years later", title: "It can start late", points: ["Symptoms can start many months, or even years, later.", "PTSD can be treated even if it develops many years after the event."] },
      ],
    },
    sources: [RCP_PTSD, NHS_PTSD, PTSDUK_FLASHBACKS, RCP_COPING, RETHINK_WHAT, NHSI_PTSD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Is PTSD a sign of weakness?",
      options: [{ text: "No: it is an understandable response to trauma", right: true }, { text: "Yes, strong people do not get it" }, { text: "It only affects soldiers" }],
      why: "PTSD is not a sign of weakness. It is an understandable consequence of experiencing something overwhelming and traumatic.",
    },
  },
  {
    id: "ptsd-symptoms",
    kicker: "Symptoms",
    question: "What do flashbacks, nightmares and feeling on edge have in common?",
    hook: "Reliving it, avoiding reminders, and never quite switching off. These are the signs of a mind still guarding against the danger.",
    short: "The main symptom of PTSD is having distressing thoughts about the traumatic event again and again, as flashbacks, intrusive images or nightmares. Many people also avoid reminders, feel on edge and look for danger all the time, and notice changes in mood and sleep. Symptoms can start straight away or many months, or even years, later.",
    sections: [
      {
        heading: "Reliving it",
        paragraphs: [
          "The main symptom of PTSD is when you keep having distressing thoughts about a traumatic event or experience. You may have this as flashbacks, vivid or intrusive images or thoughts, and recurring dreams or nightmares.",
          "A flashback is feeling or acting as if the traumatic event is happening again in real time. You might stop being aware of what is happening around you. Some people have physical sensations too, like pain, sweating, feeling sick or trembling.",
        ],
      },
      {
        heading: "Avoiding reminders",
        paragraphs: [
          "Many people avoid people or places that remind them of the event, or avoid talking about it. Some feel they need to keep busy all the time, or cannot remember parts of what happened.",
          "Some people feel numb or cut off from their feelings, or disconnected from themselves and the world around them. This is called dissociation.",
          "Some people use alcohol or drugs to avoid memories or to manage their feelings. If you drink heavily and depend on alcohol, do not stop suddenly without medical advice, as the NHS says this can be very dangerous.",
        ],
      },
      {
        heading: "On edge",
        paragraphs: [
          "You may feel very anxious and look for danger all the time. This is called hypervigilance. You might be jumpy and easily startled, irritable or angry, and find it hard to concentrate.",
          "Hypervigilance is stressful and exhausting. Many people scan their surroundings for threats, and overreact to loud sounds or unexpected noises. It often affects sleep too.",
        ],
      },
      {
        heading: "Mood, beliefs and the body",
        paragraphs: [
          "PTSD can change how you think about yourself and others. You may feel you cannot trust anyone, that nowhere is safe, or that you are to blame for what happened. Some people have overwhelming feelings of anger, sadness, guilt or shame.",
          "Some people have repeated headaches, tummy problems or pain anywhere in the body that has no physical cause. Problems with relationships, low mood and difficulty sleeping are common too.",
        ],
      },
      {
        heading: "When it starts, and when to get help",
        paragraphs: [
          "Symptoms can start straight after the traumatic event or many months, or even years, later. They can vary in intensity over time, and some people have long periods when they are less noticeable.",
          "It is normal to have upsetting and confusing thoughts after a traumatic event, and in most cases this improves after a few weeks. Contact your GP practice if you are still having problems about 4 weeks after the experience, or the symptoms are particularly troublesome.",
        ],
      },
    ],
    helps: [
      "Contact your GP practice if you are still having problems about 4 weeks after the event, or the symptoms are troublesome.",
      "Tick or note the symptoms you have been having, to help you remember them at the appointment.",
      "If you feel able, tell the GP you have been through a traumatic event, and describe your symptoms since.",
      "Keep a diary to help spot the things that can trigger flashbacks, such as certain smells or sounds.",
      "If you use alcohol or drugs to cope, get help; if you depend on alcohol, do not stop suddenly without medical advice.",
      CRISIS,
    ],
    tryThisWeek: [
      "Note the symptoms you have had.",
      "Keep a short trigger diary.",
      "Contact your GP practice.",
    ],
    ask: "Could my symptoms be PTSD, and could anything else be adding to them?",
    interactive: {
      kind: "signs",
      title: "What you have noticed",
      intro: "Tick any you have noticed since the event. The ones you tick become a list to take to your GP.",
      signs: ["Flashbacks or intrusive images", "Nightmares", "Avoiding people or places", "Feeling numb or cut off", "Looking for danger all the time", "Jumpy or easily startled", "Irritable or angry outbursts", "Trouble concentrating", "Difficulty sleeping", "Guilt, shame or blaming yourself", "Headaches, tummy problems or pain"],
      after: "Many of these are common after trauma. If problems carry on about 4 weeks after the event, or are troublesome, contact your GP practice.",
      copyHeading: "Symptoms I have noticed since the event",
    },
    sources: [NHS_PTSD, RCP_PTSD, PTSDUK_SYMPTOMS, NHSI_PTSD, RETHINK_SYMPTOMS, PTSDUK_HYPER, NHS_ALCOHOL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What is the main symptom of PTSD?",
      options: [{ text: "Distressing thoughts about the event that keep coming back", right: true }, { text: "A high temperature" }, { text: "Forgetting everyday names" }],
      why: "The main symptom of PTSD is when you keep having distressing thoughts about a traumatic event or experience.",
    },
  },
  {
    id: "ptsd-causes",
    kicker: "Causes",
    question: "What kinds of events can lead to PTSD, including illness?",
    hook: "Not only war or violence. A serious illness, a stay in intensive care or a difficult birth can all leave a mark.",
    short: "PTSD is caused by going through, seeing or hearing about a traumatic event. That includes serious accidents, assault and abuse, and war, and also serious health problems such as being in intensive care, a life-changing diagnosis or a difficult birth. Not everyone who goes through trauma develops PTSD, and good support can lower the risk.",
    sections: [
      {
        heading: "Many kinds of trauma",
        paragraphs: [
          "PTSD is caused by experiencing a traumatic event. Examples include a serious or life-threatening accident, physical or sexual assault, abuse including childhood or domestic abuse, and war.",
          "You may have gone through the event yourself, seen it happen to someone else, or heard about it happening to someone you are close to. If your experience is not on any list, it is still valid, and you deserve help and support.",
        ],
      },
      {
        heading: "When illness is the trauma",
        paragraphs: [
          "Serious health problems can be traumatic too. The NHS lists being in intensive care, and a difficult birth or the death of your baby. The Royal College of Psychiatrists adds being diagnosed with a life-threatening or life-changing illness, and other traumatic healthcare experiences.",
          "Being told you have a life-threatening illness, and admission to an intensive care unit, are both on PTSD UK's list of traumatic events. Traumatic childbirth is on it too, for people who give birth and for birth partners.",
        ],
      },
      {
        heading: "Some jobs carry more risk",
        paragraphs: [
          "Some jobs mean people are more likely to go through traumatic events. These include police officers, paramedics and firefighters, and healthcare workers such as intensive care staff and midwives.",
        ],
      },
      {
        heading: "Why some people develop it and others do not",
        paragraphs: [
          "It is still not clear why some people develop PTSD and others who have been through something similar do not. PTSD UK estimates that around 20% of people who go through a trauma go on to develop it.",
          "It is more likely if the event is sudden and unexpected, goes on for a long time, traps you, is caused by people, causes many deaths or severe injury, or involves children. Repeated trauma, past trauma, depression or anxiety, and little support from family or friends can also raise the risk.",
        ],
      },
      {
        heading: "What can help protect you",
        paragraphs: [
          "The risk is lower if someone can get good social support and recover in a lower stress environment. Family, friends and workplaces can help by giving extra support, and by protecting the person from further stress for a little while.",
          "Seeking support from family, friends or support groups, and seeking help to process the trauma, may also help. These will not always prevent PTSD, but they can help in some cases.",
        ],
      },
    ],
    helps: [
      "Spend time with people you trust, even if you do not want to talk about what happened.",
      "Ask family, friends or your workplace for support, and try to avoid further stress while you recover.",
      "Look for a charity or peer support group for people who have been through similar things.",
      "See a GP if you think you have symptoms of PTSD, whatever the event was.",
      "Avoid watching or reading lots of media about the event, especially if it causes you distress.",
      CRISIS,
    ],
    tryThisWeek: [
      "Spend time with someone you trust.",
      "Look up a peer support group.",
      "Limit news about the event.",
    ],
    ask: "Could what happened to me in hospital have led to these symptoms?",
    interactive: {
      kind: "risk-check",
      title: "What can raise or lower the risk",
      intro: "Tick any that apply to you. Some you cannot change; others are worth working on.",
      items: [
        { id: "sudden", label: "The event was sudden", note: "Sudden, unexpected events make PTSD more likely, but most people do not go on to develop it.", changeable: false },
        { id: "long", label: "It went on for a long time", note: "Events that go on for a long time, or that you cannot get away from, make PTSD more likely.", changeable: false },
        { id: "illness", label: "A stay in intensive care", note: "Serious health problems, such as being in intensive care, are among the events that can cause PTSD.", changeable: false },
        { id: "past", label: "Trauma in the past", note: "People with a history of trauma, such as abuse in childhood, are at increased risk.", changeable: false },
        { id: "support", label: "Little support around you", note: "Good social support lowers the risk. A charity or peer support group can help.", changeable: true },
        { id: "stress", label: "Ongoing stress as you recover", note: "Ongoing stress can make recovery harder. A lower stress environment helps.", changeable: true },
      ],
    },
    sources: [NHS_PTSD, RCP_PTSD, PTSDUK_CAUSES, RETHINK_CAUSES, NHSI_PTSD, RCP_COPING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Can a serious illness or a stay in intensive care lead to PTSD?",
      options: [{ text: "Yes, serious health problems can be traumatic", right: true }, { text: "No, only war and violence can" }, { text: "Only if you were badly injured" }],
      why: "PTSD is caused by experiencing a traumatic event, including serious health problems, such as being in intensive care.",
    },
  },
  {
    id: "ptsd-complex",
    kicker: "Complex PTSD",
    question: "What is complex PTSD, and how is it different?",
    hook: "When trauma went on and on, and there was no way out, the effects can run deeper. Healing can take longer, but it happens.",
    short: "Complex PTSD (CPTSD) can develop after trauma that was ongoing or repeated and hard to escape, such as child abuse or neglect, or ongoing domestic abuse. As well as the symptoms of PTSD, people have great difficulty controlling emotions, a deep sense of worthlessness, and trouble feeling close to others. Treatment often takes longer and happens in stages, and people with complex PTSD can heal.",
    sections: [
      {
        heading: "PTSD, and more",
        paragraphs: [
          "Symptoms of complex PTSD are largely the same as PTSD but have different causes. As well as the symptoms of PTSD, people with complex PTSD have some additional ones.",
          "These include severe difficulty controlling emotions, an ongoing belief that you are worthless with deep feelings of shame, guilt or failure, and ongoing difficulty keeping relationships and feeling close to others.",
        ],
      },
      {
        heading: "What can cause it",
        paragraphs: [
          "The types of trauma that can cause complex PTSD include child abuse or neglect, ongoing domestic violence or abuse, and repeatedly witnessing violence or abuse.",
          "It is often the result of a sustained event, or series of events, that was extremely threatening and difficult or impossible to escape. These events can happen in childhood or as an adult.",
          "PTSD UK notes that some people who go through one trauma develop complex PTSD, and some who go through many develop PTSD. This is one reason diagnosis can be confusing.",
        ],
      },
      {
        heading: "Treatment in stages",
        paragraphs: [
          "Lack of trust in other people and the world is common in complex PTSD, so treatment often takes longer, to allow a secure relationship with a therapist to develop. The work often happens in three stages, though you might not need them all, or do them in order.",
          "The first stage, stabilisation, helps you regain control over anxiety and flashbacks. You learn to trust your therapist, and learn grounding techniques that remind you that you are living in the present and not the past. Sometimes this is the only help that is needed.",
          "Next come trauma-focused therapies, usually trauma-focused CBT or EMDR, without pushing you too fast. The last stage helps you gradually return to a more routine way of life, and re-engage in friendships, relationships and activities.",
        ],
      },
      {
        heading: "Extra support",
        paragraphs: [
          "NICE guidelines say people with complex PTSD may be offered more or longer therapy sessions to help build trust, and help with anything that might stop them taking part. Any ongoing support after treatment should be planned too.",
          "Antidepressants or other medicines can also be used: alongside therapy, instead of it, while waiting for it, or if it is not working.",
        ],
      },
      {
        heading: "Healing is possible",
        paragraphs: [
          "People with PTSD and with complex PTSD can both heal, although the journey for those with complex PTSD may be longer. For many people, treatment can get rid of complex PTSD altogether, and for others it makes symptoms less intense.",
        ],
      },
    ],
    helps: [
      "See your GP or another mental health professional if you recognise these symptoms in yourself.",
      "Write down your symptoms, feelings and thoughts as often as you can, to help professionals make the right diagnosis.",
      "Give yourself time to build trust with your therapist; it is part of the treatment.",
      "Learn grounding techniques that remind you that you are in the present, not the past.",
      "Ask about more or longer sessions if you need them to build trust.",
      CRISIS,
    ],
    tryThisWeek: [
      "Note your symptoms as they happen.",
      "Practise one grounding technique.",
      "Ask about longer sessions.",
    ],
    ask: "Could I have complex PTSD, and how would treatment be paced for me?",
    interactive: {
      kind: "flip-cards",
      title: "Recovery, stage by stage",
      intro: "Turn each card to see what each stage involves. You might not need every stage, or take them in order.",
      cards: [
        { id: "stabilise", front: "Stage 1: Stabilisation", when: "First, to feel safer", back: "Regain control over anxiety and flashbacks, build trust with your therapist, and learn grounding." },
        { id: "trauma", front: "Stage 2: Trauma-focused therapy", when: "Once trust has grown", back: "Usually trauma-focused CBT or EMDR, to process what happened, without being pushed too fast." },
        { id: "reconnect", front: "Stage 3: Reconnection", when: "As symptoms improve", back: "Gradually return to a more routine life, and re-engage in friendships, relationships and activities." },
        { id: "medicine", front: "Medicines", when: "Alongside or instead of therapy", back: "Antidepressants or other medicines may be used, including while you wait for therapy." },
      ],
    },
    sources: [NHS_PTSD, RCP_PTSD, RETHINK_COMPLEX, PTSDUK_CPTSD, PTSDUK_CPTSD_DIFF, RETHINK_TREATMENT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Why does treatment for complex PTSD often take longer?",
      options: [{ text: "To allow trust with a therapist to develop", right: true }, { text: "Because it cannot be treated" }, { text: "Because medicine is the only option" }],
      why: "Treatment for complex PTSD often takes longer to allow people to develop a secure relationship with a therapist.",
    },
  },
  {
    id: "ptsd-therapy",
    kicker: "Treatment",
    question: "What are trauma-focused CBT and EMDR, and what happens in them?",
    hook: "The two talking therapies with the best evidence for PTSD. Neither is a quick fix, but both help many people.",
    short: "Trauma-focused cognitive behavioural therapy (CBT) and eye movement desensitisation and reprocessing (EMDR) are the most effective psychological therapies for PTSD, and should be offered before medicine wherever possible. You will usually have 8 to 12 sessions with the same therapist, each lasting between one hour and 90 minutes.",
    sections: [
      {
        heading: "The first choice",
        paragraphs: [
          "There is evidence that trauma-focused CBT and EMDR are the best first-line therapies for PTSD. They should be offered before medicine wherever possible, according to guidelines from the National Institute for Health and Care Excellence (NICE).",
          "Therapy can help you remember what happened without being overwhelmed, put your experience into words, and feel more in control and safer. Any talking therapy for PTSD should be given by someone trained and accredited in trauma-focused therapy.",
        ],
      },
      {
        heading: "Trauma-focused CBT",
        paragraphs: [
          "Trauma-focused CBT uses a range of techniques to help you come to terms with the traumatic event. Your therapist may ask you to think about your traumatic memories in detail, and will help you cope with any distress you feel.",
          "They will also help you spot unhelpful thoughts about the experience, such as feeling you are to blame, or feeling scared that it will happen again. Types include cognitive processing therapy, narrative exposure therapy and prolonged exposure therapy.",
        ],
      },
      {
        heading: "EMDR",
        paragraphs: [
          "In EMDR, you recall the traumatic event while moving your focus between the left and right side of your body. This is usually done with eye movements, but hand tapping or alternating sounds can be used. It helps the brain process traumatic memories so they become less distressing.",
          "Before any processing, your therapist does an assessment and helps you find a safe place in your mind, imagined or real, where you feel calm. You are awake, alert and in control throughout, and you can stop the therapist at any point.",
          "Many people like that you do not need to talk about your trauma in EMDR. At first you are asked only to think about it.",
        ],
      },
      {
        heading: "How many sessions",
        paragraphs: [
          "Sessions are usually at least weekly, with the same therapist. You will usually have 8 to 12 sessions, but you might need more if your PTSD is particularly complex. Each session usually lasts between one hour and 90 minutes.",
          "It can take some time to get talking therapy on the NHS, depending on where you live. In the meantime, self-help materials may help: ask your GP what they recommend.",
        ],
      },
      {
        heading: "When it feels harder at first",
        paragraphs: [
          "It is very common for the start of therapy to feel intense, as memories and feelings that were avoided come to the surface. PTSD UK says this stage is often a vital part of healing, and setbacks are a normal part of the process.",
          "Let your therapist know when therapy feels like too much, so they can help you pace it.",
        ],
      },
    ],
    helps: [
      "Refer yourself to NHS talking therapies if you are 18 or over, or 16 or over in some areas.",
      "Ask your GP for self-help materials while you wait for therapy.",
      "Make sure any therapist is trained and accredited in trauma-focused therapy.",
      "Tell your therapist when sessions feel like too much, so they can help you pace them.",
      "Set clear goals, such as being able to go out alone or sleep a whole night through.",
      CRISIS,
    ],
    tryThisWeek: [
      "Refer yourself to talking therapies.",
      "Ask your GP for self-help materials.",
      "Write down one clear goal.",
    ],
    ask: "Can I be referred for trauma-focused CBT or EMDR, and how long is the wait?",
    interactive: {
      kind: "flip-cards",
      title: "Trauma-focused therapies, card by card",
      intro: "Turn each card to see when each therapy is used and what it does.",
      cards: [
        { id: "tf-cbt", front: "Trauma-focused CBT", when: "A first-choice therapy", back: "Helps you come to terms with the event and change unhelpful thoughts, such as blaming yourself." },
        { id: "emdr", front: "EMDR", when: "A first-choice therapy", back: "You recall the event while moving your eyes side to side, or with taps or tones, so the memory is less distressing." },
        { id: "cpt", front: "Cognitive processing therapy", when: "A type of trauma-focused CBT", back: "Helps people who are stuck in their thoughts about a trauma, with activities such as writing about it." },
        { id: "net", front: "Narrative exposure therapy", when: "For complex or many traumas", back: "Puts traumatic experiences into context by recreating the story of your life, and brings in positive events." },
        { id: "exposure", front: "Prolonged exposure therapy", when: "A type of trauma-focused CBT", back: "Helps you gradually approach memories and reminders, and learn they are not dangerous." },
        { id: "computer", front: "Computerised CBT, with support", when: "If symptoms are not severe", back: "Therapy through a computer programme, supported by a trained professional." },
      ],
    },
    sources: [NHS_PTSD, RCP_PTSD, NHSI_PTSD, PTSDUK_EMDR, PTSDUK_EMDR_SESSION, RETHINK_TREATMENT, NHS_TALKING, PTSDUK_RECOVERY, PTSDUK_MOST, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Which therapies have the best evidence for PTSD?",
      options: [{ text: "Trauma-focused CBT and EMDR", right: true }, { text: "Hypnotherapy" }, { text: "Sleeping pills" }],
      why: "There is evidence that trauma-focused CBT and EMDR are the best first-line therapies for PTSD.",
    },
  },
  {
    id: "ptsd-medicines",
    kicker: "Treatment",
    question: "Can medicine help PTSD, and what should I know before starting?",
    hook: "Medicine is not usually the first treatment, but it can help, especially while you wait for therapy. Never stop it without your doctor.",
    short: "Medicine is not a first-line treatment for PTSD, but your doctor might suggest an antidepressant, usually an SSRI such as sertraline or paroxetine, if you are waiting for therapy, therapy has not worked, or you do not want it. Antidepressants usually take 1 to 2 weeks to start working and up to 8 weeks to work fully. Do not stop taking a PTSD medicine unless a doctor tells you to, even if you feel better.",
    sections: [
      {
        heading: "Where medicine fits",
        paragraphs: [
          "Medication is not a first-line treatment for PTSD. But the right medicine can make it easier to engage with other treatment and support, like psychological therapies.",
          "Your doctor might suggest an antidepressant if you are waiting for psychological therapy, if therapy has not worked, or if you do not want it. It may also be recommended if you have depression too, or sleep problems caused by PTSD.",
        ],
      },
      {
        heading: "The usual choices",
        paragraphs: [
          "Selective serotonin reuptake inhibitors, or SSRIs, are a type of antidepressant that can help reduce PTSD symptoms. Sertraline and paroxetine are SSRIs that can be used to treat PTSD.",
          "Venlafaxine is another option. If SSRIs do not work, you may be offered a different medicine, such as another antidepressant or an antipsychotic. Being offered an antipsychotic for PTSD does not mean you have psychosis.",
        ],
      },
      {
        heading: "The first weeks",
        paragraphs: [
          "Antidepressants usually take 1 to 2 weeks to start having an effect, and can take up to 8 weeks to work fully. When you first start, you will be seen by a doctor every 1 to 2 weeks.",
          "Many side effects ease after a couple of weeks. Common ones with sertraline include headaches, feeling sick, dizziness, a dry mouth, diarrhoea, problems sleeping and sexual problems.",
          "It is not common, but some people have suicidal thoughts or an urge to self-harm when they start an antidepressant. Speak to your doctor straight away if this happens, and call 999 or go to A&E immediately if you are in danger or do not feel you can keep yourself safe.",
        ],
      },
      {
        heading: "Pregnancy and other medicines",
        paragraphs: [
          "Some medicines for PTSD are not safe to take if you are pregnant. Talk to your doctor if you are pregnant or planning a pregnancy.",
          "Tell your doctor about any other medicines, herbal remedies, vitamins or supplements you take. Do not use the herbal supplement St John's wort with sertraline or paroxetine.",
        ],
      },
      {
        heading: "Stopping safely",
        paragraphs: [
          "Do not stop taking your PTSD medicine unless you are told to by a doctor, even if you feel better. You will usually keep taking an antidepressant for at least 6 months after you feel better.",
          "When it is time to stop, your doctor will help you agree a plan to reduce your dose gradually, usually over several weeks or months. Withdrawal symptoms are less likely if the medicine is reduced slowly.",
        ],
      },
    ],
    helps: [
      "Keep taking your medicine even if it seems not to work at first; it can take several weeks.",
      "Talk to your doctor if side effects are hard to manage, or you feel your medicine is not helping.",
      "Never stop your PTSD medicine unless a doctor tells you to, even if you feel better.",
      "Talk to your doctor if you are pregnant or planning a pregnancy.",
      "Tell your doctor about any other medicines, herbal remedies or supplements you take.",
      CRISIS,
    ],
    tryThisWeek: [
      "Take it as prescribed.",
      "Note side effects for your doctor.",
      "List your other medicines.",
    ],
    ask: "Would a medicine help me while I wait for therapy, and what are the side effects?",
    interactive: {
      kind: "scenarios",
      title: "Medicine moments",
      scenarios: [
        {
          id: "two-weeks",
          situation: "Two weeks in, you do not feel any different.",
          options: [{ text: "Keep taking it, and talk to your doctor", best: true }, { text: "Stop taking it" }],
          why: "Antidepressants can take up to 8 weeks to work fully. Talk to your doctor if you feel your medicine is not helping.",
        },
        {
          id: "feel-better",
          situation: "You feel much better and want to stop.",
          options: [{ text: "Talk to your doctor first", best: true }, { text: "Stop today" }],
          why: "Do not stop taking your PTSD medicine unless you are told to by a doctor, even if you feel better.",
        },
        {
          id: "pregnancy",
          situation: "You are planning a pregnancy.",
          options: [{ text: "Talk to your doctor", best: true }, { text: "Say nothing for now" }],
          why: "Some medicines for PTSD are not safe to take if you are pregnant. Talk to your doctor if you are planning a pregnancy.",
        },
        {
          id: "dark-thoughts",
          situation: "Soon after starting, you have thoughts of harming yourself.",
          options: [{ text: "Speak to your doctor straight away", best: true }, { text: "Wait and see if it passes" }],
          why: "Speak to your doctor straight away. Call 999 or go to A&E if you do not feel you can keep yourself safe.",
        },
      ],
    },
    sources: [NHS_PTSD, RCP_PTSD, NHSI_PTSD, RETHINK_TREATMENT, NHS_ANTIDEP, NHS_SERTRALINE, NHS_PAROXETINE, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When should you stop taking a PTSD medicine?",
      options: [{ text: "Only when a doctor tells you to", right: true }, { text: "As soon as you feel better" }, { text: "After the first week" }],
      why: "Do not stop taking your PTSD medicine unless you are told to by a doctor, even if you feel better.",
    },
  },
  {
    id: "ptsd-getting-help",
    kicker: "Getting help",
    question: "How do I get help for PTSD, and what happens next?",
    hook: "Asking for help is often the hardest step. Knowing what happens next can make it a little easier.",
    short: "See a GP if you think you have symptoms of PTSD: they will ask about your symptoms and can refer you to a mental health specialist. If you are 18 or over, or 16 or over in some areas, you can also refer yourself to NHS talking therapies. If symptoms are mild or began less than 4 weeks ago, your GP may suggest watchful waiting first, with a follow-up within a month.",
    sections: [
      {
        heading: "When to ask",
        paragraphs: [
          "It is normal to have upsetting and confusing thoughts after a traumatic event, and in most cases this improves after a few weeks. Contact your GP practice if you are still having problems about 4 weeks after the event, or the symptoms are particularly troublesome.",
          "See a GP too if you have been diagnosed with PTSD and treatments are not helping. If you are worried about someone else, encourage them to speak to their GP.",
        ],
      },
      {
        heading: "Seeing a GP",
        paragraphs: [
          "The GP will ask about your symptoms. If you feel able, tell them you have been through a traumatic event, and describe the symptoms you have had since.",
          "They may refer you to a mental health specialist, such as a talking therapies service or a psychiatrist. The specialist will ask about things like your mood, behaviour, health and family history. The assessment is not a test or an exam: it is about finding the right diagnosis and help for you.",
        ],
      },
      {
        heading: "Referring yourself",
        paragraphs: [
          "NHS talking therapies for anxiety and depression can help with PTSD. If you are 18 or over, or 16 or over in some areas, you can refer yourself without a referral from a GP.",
          "You need to be registered with a GP. You do not need to have a diagnosed mental health condition.",
        ],
      },
      {
        heading: "Watchful waiting, then treatment",
        paragraphs: [
          "If you have had symptoms for less than 4 weeks, or they are mild, your GP may suggest watchful waiting. This means they monitor your symptoms to see if they improve or get worse, with a follow-up appointment within one month.",
          "A GP and mental health specialist will work with you to create a treatment plan. You will usually have appointments at a GP surgery, clinic or hospital. You can choose whether to have treatment, and ask about anything you are unsure of.",
          "NICE guidelines say you should not be excluded from PTSD treatment if you have a drug or alcohol issue. If you depend on alcohol, do not stop drinking suddenly without medical advice: the NHS says it can be very dangerous.",
        ],
      },
      {
        heading: "It is never too late",
        paragraphs: [
          "PTSD can be treated even if it develops many years after a traumatic event. Not wanting to think about the trauma, or about treatment, can itself be a symptom, so you may never feel completely ready.",
        ],
      },
    ],
    helps: [
      "Contact your GP practice if problems carry on about 4 weeks after the event, or are troublesome.",
      "Refer yourself to NHS talking therapies if you are 18 or over, or 16 or over in some areas.",
      "If you feel able, tell the GP you have been through a traumatic event, and list your symptoms.",
      "Be as open and honest as you can at the specialist assessment.",
      "Ask your GP about anything you are unsure of, such as the benefits of treatment.",
      CRISIS,
    ],
    tryThisWeek: [
      "Contact your GP practice.",
      "List your symptoms to take along.",
      "Look up NHS talking therapies.",
    ],
    ask: "Can you refer me to a specialist, or should I refer myself to talking therapies?",
    interactive: {
      kind: "timeline",
      title: "From first step to treatment",
      steps: [
        { id: "first", when: "Step 1", title: "A GP, or refer yourself", points: ["See a GP if you think you have symptoms of PTSD.", "Or refer yourself to NHS talking therapies."] },
        { id: "waiting", when: "If symptoms are mild or recent", title: "Watchful waiting", points: ["Your GP monitors how your symptoms change.", "A follow-up appointment within one month."] },
        { id: "assessment", when: "Step 2", title: "A specialist assessment", points: ["Questions about your mood, behaviour, health and family history.", "It is not a test or an exam."] },
        { id: "plan", when: "Step 3", title: "A treatment plan", points: ["Made with your GP and mental health specialist.", "You can choose whether to have treatment."] },
        { id: "treatment", when: "Step 4", title: "Treatment begins", points: ["Such as trauma-focused CBT or EMDR.", "At a GP surgery, clinic or hospital."] },
      ],
    },
    sources: [NHS_PTSD, NHSI_PTSD, RETHINK_DIAGNOSED, RETHINK_TREATMENT, NHS_TALKING, PTSDUK_THINK, NHS_ALCOHOL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Do you need a GP referral for NHS talking therapies for PTSD?",
      options: [{ text: "No, you can usually refer yourself", right: true }, { text: "Yes, always" }, { text: "Only after trying medicine" }],
      why: "If you're 18 or over (or 16 or over in some areas), you can refer yourself directly to an NHS talking therapies service without a referral from a GP.",
    },
  },
  {
    id: "ptsd-grounding",
    kicker: "Self-help",
    question: "What can I do when a flashback or panic starts?",
    hook: "Grounding and slow breathing can help bring you back to the here and now. They work best alongside treatment, not instead of it.",
    short: "Grounding techniques help you pull away from flashbacks and unwanted memories and refocus on the present moment, for example by using your senses to describe what you see, hear, smell, taste and feel. Slow, deep breathing can help calm your body and mind. A mental health professional can help you learn and practise these skills.",
    sections: [
      {
        heading: "Skills you can learn",
        paragraphs: [
          "There are things you can do yourself that help with some of the symptoms of PTSD, such as flashbacks. A mental health professional will help you learn and practise skills that can help manage it.",
          "Relaxation techniques are not a cure. They should be part of a wider range of support and skills you use to recover, and it is best to speak to your therapist about what might work for you.",
        ],
      },
      {
        heading: "Grounding",
        paragraphs: [
          "Grounding is a practice that can help you pull away from flashbacks, unwanted memories and difficult emotions, and refocus on what is happening in the present moment.",
          "Examples include focusing on your surroundings, using your senses to describe what you see, hear, smell, taste and feel, or repeating a calming phrase to yourself. One tip shared on PTSD UK's page is to find 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell and 1 you can taste.",
          "Other tips people with PTSD have shared include feeling the surface under your feet, carrying something with a strong smell, and telling yourself that you are safe and in the present.",
        ],
      },
      {
        heading: "Slow breathing",
        paragraphs: [
          "When a flashback starts, take slow, deep breaths to help calm your body and mind. This can help reduce its intensity and help you regain control.",
          "The NHS calming breath can be done anywhere. Breathe gently into your belly, in through your nose and out through your mouth, counting steadily from 1 to 5 if it helps. Repeat for at least 5 minutes, and do it regularly for the most benefit.",
        ],
      },
      {
        heading: "A safe space, and a plan",
        paragraphs: [
          "It can help to create a safe and calming space at home to go to if you feel a flashback coming on. A self-care plan with things that help you relax, such as exercise, meditation or time in nature, can help too.",
          "For hypervigilance, try being in the moment for a few minutes: breathe slowly, and notice your feet on the floor and your body on the chair. Writing down negative thoughts can help you see patterns.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "Reach out to friends, family or a mental health professional when you are having flashbacks. Knowing when they may happen, and what helped or did not help, is key.",
          "Mindfulness means paying attention to the present moment. Many people find it helpful, but it is not right for everyone, and some find it makes them feel worse.",
        ],
      },
    ],
    helps: [
      "Practise a grounding technique, such as noticing what you can see, hear, smell, taste and feel.",
      "Take slow, deep breaths when a flashback starts.",
      "Practise the NHS calming breath for at least 5 minutes, as part of your daily routine.",
      "Create a safe, calming space at home to go to if you feel a flashback coming on.",
      "Ask your therapist which relaxation skills might work for you.",
      CRISIS,
    ],
    tryThisWeek: [
      "Try 5, 4, 3, 2, 1 grounding.",
      "Breathe calmly for 5 minutes a day.",
      "Set up a calm space at home.",
    ],
    ask: "Can you help me learn grounding and breathing skills for flashbacks?",
    interactive: {
      kind: "timeline",
      title: "5, 4, 3, 2, 1: grounding with your senses",
      steps: [
        { id: "see", when: "5", title: "Things you can see", points: ["Look around and name them."] },
        { id: "touch", when: "4", title: "Things you can touch", points: ["Feel the surface under your feet, or the chair beneath you."] },
        { id: "hear", when: "3", title: "Things you can hear", points: ["Listen to the sounds around you."] },
        { id: "smell", when: "2", title: "Things you can smell", points: ["A strong smell can help bring you back."] },
        { id: "taste", when: "1", title: "Something you can taste", points: ["Swap the senses around if you need to."] },
        { id: "breathe", when: "Then", title: "Breathe, and remind yourself", points: ["Take slow, deep breaths.", "Tell yourself you are safe, here and now."] },
      ],
    },
    sources: [NHS_PTSD, PTSDUK_FLASHBACKS, PTSDUK_GROUNDING, RCP_PTSD, NHS_BREATHING, PTSDUK_HYPER, NHS_MINDFULNESS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What is grounding meant to do?",
      options: [{ text: "Bring you back to the present moment", right: true }, { text: "Make you relive the memory" }, { text: "Replace treatment" }],
      why: "These techniques may help distract you from what you're experiencing and refocus on what's happening in the present moment.",
    },
  },
  {
    id: "ptsd-sleep",
    kicker: "Daily life",
    question: "Why is sleep so hard with PTSD, and what helps with nightmares?",
    hook: "Nightmares, a mind on guard, and waking at the smallest noise. Sleep often suffers, but there are things that help.",
    short: "Difficulty sleeping and nightmares are common in PTSD, and hypervigilance can mean the smallest noise wakes you fully. Psychological therapies can help with nightmares caused by PTSD, and relaxing before bed can help reduce them. A regular routine, a wind-down before bed, and avoiding caffeine and alcohol late in the day all help sleep.",
    sections: [
      {
        heading: "Why sleep suffers",
        paragraphs: [
          "Difficulty sleeping is a common symptom of PTSD. You might find it hard to fall asleep and stay asleep, and when you do sleep it may be poor or broken, with nightmares.",
          "Hypervigilance often affects sleep. Someone may be too afraid to fall asleep, and when they do, the smallest noise can wake them fully, with a surge of adrenaline that makes it hard to get back to sleep.",
        ],
      },
      {
        heading: "Nightmares",
        paragraphs: [
          "Nightmares are one of the common symptoms of PTSD. They might not start straight after the traumatic event, and their theme is often closely related to the trauma.",
          "If nightmares are caused by PTSD, psychological therapies can be helpful. Worrying about nightmares can make them worse, so relaxing before you go to bed can help reduce them.",
        ],
      },
      {
        heading: "A routine that helps",
        paragraphs: [
          "Set an alarm for the same time every day, even at weekends. Have a wind-down period before bed, away from work and things that make you think a lot, and leave your phone outside your room if you can.",
          "Only go to bed when you feel sleepy. If you cannot sleep, leave the bedroom and do something relaxing in another room, then go back when you feel sleepy.",
          "Progressive muscle relaxation can help you fall asleep. You tense a group of muscles for about 5 seconds, then stop and notice how it feels, moving through your body.",
        ],
      },
      {
        heading: "Caffeine, alcohol and screens",
        paragraphs: [
          "Do not smoke or drink alcohol, tea or coffee for at least 6 hours before going to bed, and do not use devices right before bed. Alcohol may help you fall asleep, but you will probably wake up during the night.",
          "The NHS advice for PTSD is not to drink too much alcohol. If you drink heavily and depend on alcohol, do not stop suddenly without medical advice, as the NHS says this can be very dangerous.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Most healthy adults need around 7 to 9 hours of sleep a night. See a GP if changing your sleeping habits has not helped, you have had trouble sleeping for months, or it is making it hard to cope.",
          "Medicine may be recommended if you have sleep problems caused by PTSD. Some talking therapies also target specific symptoms, such as poor sleep.",
        ],
      },
    ],
    helps: [
      "Get up at the same time every day, even at weekends.",
      "Wind down before bed, and leave your phone outside the bedroom if you can.",
      "Try progressive muscle relaxation when you get into bed.",
      "Avoid alcohol, tea and coffee for at least 6 hours before bed.",
      "Tell your GP or therapist about nightmares, as psychological therapies can help.",
      CRISIS,
    ],
    tryThisWeek: [
      "Keep the same wake-up time.",
      "Wind down without your phone.",
      "Try muscle relaxation in bed.",
    ],
    ask: "Could treatment help with my nightmares and broken sleep?",
    interactive: {
      kind: "risk-check",
      title: "What is keeping you awake?",
      intro: "Tick any that apply. Each is something you can work on.",
      items: [
        { id: "nightmares", label: "Nightmares about the trauma", note: "If nightmares are caused by PTSD, psychological therapies can help. Relaxing before bed can help too.", changeable: true },
        { id: "noises", label: "Waking at every small noise", note: "Hypervigilance often disturbs sleep. It is important to get treatment for PTSD.", changeable: true },
        { id: "caffeine", label: "Tea or coffee late in the day", note: "Avoid tea and coffee for at least 6 hours before bed.", changeable: true },
        { id: "alcohol", label: "A drink to help you sleep", note: "Alcohol may help you fall asleep, but you will probably wake in the night.", changeable: true },
        { id: "screens", label: "Your phone in bed", note: "Do not use devices right before bed: the blue light makes you more awake.", changeable: true },
        { id: "lying-awake", label: "Lying awake for a long time", note: "Leave the bedroom and do something relaxing, then go back when you feel sleepy.", changeable: true },
      ],
    },
    sources: [NHS_PTSD, RCP_SLEEP, RCP_PTSD, PTSDUK_HYPER, NHS_INSOMNIA, EMM_SLEEP, NHSI_PTSD, NHS_ALCOHOL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What can help reduce nightmares, says the Royal College of Psychiatrists?",
      options: [{ text: "Relaxing before you go to bed", right: true }, { text: "Staying up as late as possible" }, { text: "A drink at bedtime" }],
      why: "Worrying about nightmares also seems to make them worse or keep them going. So, relaxing before you go to bed can help to reduce the nightmares.",
    },
  },
  {
    id: "ptsd-relationships",
    kicker: "Family and friends",
    question: "How does PTSD affect the people around me, and how can they help?",
    hook: "PTSD can make you pull away from the people you love. Small, steady kinds of support make a real difference, on both sides.",
    short: "PTSD can cause problems in relationships, such as communicating less or feeling detached from people you were close to. Spending time with people you care about, even without talking about what happened, can help. Family and friends can help by being there, listening without pressure and offering practical help, and by looking after themselves too.",
    sections: [
      {
        heading: "How it can affect relationships",
        paragraphs: [
          "PTSD can cause problems with relationships, such as communicating less with other people. You may feel detached from, or no longer close to, people you felt close to before.",
          "Relationship problems can develop because people with PTSD may be irritable, on guard, jumpy or worried. They may also feel a greater need to protect the people they love, and come across as tense or demanding.",
        ],
      },
      {
        heading: "Staying connected",
        paragraphs: [
          "Being with the people you care about can give you a sense of support. It is worth being around other people even if you do not want to talk about what happened. Even a phone call or text message can help you feel connected.",
          "You do not have to talk about what happened with just anyone. Talking to someone you trust can help you process your feelings in a safe space, and people who care for you will want to help if they can.",
        ],
      },
      {
        heading: "For family and friends: things that help",
        paragraphs: [
          "Offer to spend time with them, and let them know you will still be there if they change their mind. Try not to pressure them to share what happened. If they do want to talk, listen without interrupting or sharing your own experiences.",
          "If you ask questions, keep them general and non-judgemental, such as asking whether they have spoken to anyone else about it. You could also offer practical help, such as cleaning or preparing a meal.",
          "Keeping to routines and promises, and letting them know where you are, can help rebuild a sense of trust and safety. Encourage them to see a GP if you are worried about their mental health.",
        ],
      },
      {
        heading: "Things to avoid",
        paragraphs: [
          "Try not to tell them you know how they feel, or that they are lucky to be alive or uninjured. Avoid suggesting it could have been worse, and avoid making suggestions unless they want them.",
          "Pushing someone into treatment is very unlikely to help. Instead, be encouraging, acknowledge any worries they have about treatment, and help in practical ways, such as with making appointments.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "Supporting someone after a traumatic event can be emotionally challenging, so look after yourself too. Try to get enough sleep, eat healthy meals and do some exercise.",
          "Speak to your GP if your own mental health is affecting your day-to-day life. You can ask your local social services for a carer's assessment, and join a carers support group.",
        ],
      },
    ],
    helps: [
      "Spend time with people you care about, even if you do not talk about what happened.",
      "Talk to someone you trust, when you feel ready.",
      "For family and friends: be there, listen without pressure, and offer practical help.",
      "For family and friends: keep to routines and promises, to help rebuild a sense of safety.",
      "For carers: look after your own health, and ask for a carer's assessment.",
      CRISIS,
    ],
    tryThisWeek: [
      "Send one message to someone you trust.",
      "Offer one piece of practical help.",
      "Carers: make time for your own health.",
    ],
    ask: "How can my family support me, and is there support for them too?",
    interactive: {
      kind: "scenarios",
      title: "Being there",
      scenarios: [
        {
          id: "not-talking",
          situation: "Your partner does not want to talk about what happened.",
          options: [{ text: "Let them know you are there when they are ready", best: true }, { text: "Keep asking until they talk" }],
          why: "Try not to pressure them into sharing. Let them know you will still be there if they change their mind.",
        },
        {
          id: "lucky",
          situation: "You want to comfort a friend who survived a serious accident.",
          options: [{ text: "Listen, without comparing", best: true }, { text: "Tell them they were lucky" }],
          why: "People who have been through traumatic events often do not feel lucky, and some feel guilty for not being injured.",
        },
        {
          id: "late",
          situation: "You will be home later than you said.",
          options: [{ text: "Call to let them know", best: true }, { text: "Say nothing" }],
          why: "Coming home when you said you would, or calling as soon as you know you will be late, helps rebuild a sense of safety.",
        },
        {
          id: "worn-out",
          situation: "You feel worn out from supporting them.",
          options: [{ text: "Take time to look after yourself", best: true }, { text: "Keep going without a break" }],
          why: "Supporting someone who has been through a traumatic event can be emotionally challenging. Make sure you look after yourself too.",
        },
      ],
    },
    sources: [RCP_PTSD, PTSDUK_SUPPORTING, PTSDUK_LOVED_ONE, PTSDUK_SELF_CARE, RETHINK_SUPPORTING, NHS_PTSD, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does the Royal College of Psychiatrists suggest avoiding when supporting someone?",
      options: [{ text: "Telling them they are lucky to be alive", right: true }, { text: "Offering to spend time with them" }, { text: "Offering practical help" }],
      why: "Telling them they have been lucky can encourage them to make comparisons between themselves and others, or cause them to feel ashamed.",
    },
  },
  {
    id: "ptsd-triggers",
    kicker: "Daily life",
    question: "Why do certain sounds, smells or places bring it all back?",
    hook: "A song, a smell, a loud bang. A trigger can bring the trauma back as if it is happening now. Knowing yours is a first step.",
    short: "Triggers are reminders that can set off flashbacks: sights, sounds, smells or places, and also thoughts, emotions and body sensations. Keeping a diary can help you spot yours. Avoiding reminders can feel safer, but avoiding thinking about the event can make the memories stronger, and treatment can help you approach them safely.",
    sections: [
      {
        heading: "What a trigger is",
        paragraphs: [
          "Flashbacks are often set off by things that remind you of the traumatic event. These can be outside you, such as sights, sounds, smells or places, or inside you, such as thoughts, emotions or physical sensations.",
          "Common triggers include loud noises, crowds, physical contact and the anniversary of the event. Triggers vary from person to person, and can even affect the same person differently at different times.",
          "You might not always realise when your emotions have been triggered, or what triggered them.",
        ],
      },
      {
        heading: "Why they hit so hard",
        paragraphs: [
          "PTSD UK explains that a trauma memory may not have been filed as a memory in the normal way. So when something reminds you of it, the mind can present it as if it is happening now, rather than as something in the past.",
        ],
      },
      {
        heading: "Spotting your triggers",
        paragraphs: [
          "Keep a diary to help spot the things that can trigger flashbacks, such as certain smells or sounds. Over time, you may notice patterns.",
          "Some triggers are easy to spot. Others take time, such as a song that was playing during the trauma. A therapist or counsellor can help you identify and work through them.",
        ],
      },
      {
        heading: "Avoiding, and approaching",
        paragraphs: [
          "Avoiding memories, people and places linked to the event is a common symptom. But if we avoid thinking about the event, the memories can become stronger and more distressing when we do think of them.",
          "Research has shown that talking about the event and your feelings can help, and that avoiding memories and feelings makes people feel worse. Prolonged exposure therapy helps you gradually approach reminders and learn that they are not dangerous.",
          "You might find it helpful to go back to, or near, where the event happened. Only do this when you feel ready, plan it carefully, and talk to your therapist or doctor first; going with someone you trust can help.",
        ],
      },
      {
        heading: "Taking care on the road",
        paragraphs: [
          "After a traumatic event, people are more likely to have accidents, possibly because it can be hard to concentrate and you may be startled easily. Take extra care around the home and when you are driving.",
          "If you are diagnosed with PTSD and it affects your ability to drive safely, you need to tell the DVLA. Ask your doctor if you are unsure. You can be fined up to £1,000 if you do not tell them.",
        ],
      },
    ],
    helps: [
      "Keep a diary of what sets off flashbacks, such as certain smells or sounds.",
      "Work with a therapist or counsellor to identify your triggers and plan how to manage them.",
      "Avoid watching or reading lots of media about the event, especially if it causes you distress.",
      "Only go back to where the event happened when you feel ready, with a plan and support.",
      "Tell the DVLA if PTSD affects your ability to drive safely, and ask your doctor if you are unsure.",
      CRISIS,
    ],
    tryThisWeek: [
      "Start a trigger diary.",
      "Limit media about the event.",
      "Talk your triggers through with a therapist.",
    ],
    ask: "Can treatment help me cope with my triggers instead of avoiding them?",
    interactive: {
      kind: "signs",
      title: "Your triggers",
      intro: "Tick any that bring the trauma back for you. The ones you tick become a list to share with your therapist.",
      signs: ["Loud noises", "Crowds", "Physical contact", "The anniversary of the event", "Certain smells", "A song or type of music", "A place linked to the event", "Feeling stressed or overwhelmed", "Certain thoughts or body sensations"],
      after: "Triggers vary from person to person, and can change over time. A diary can help you spot patterns, and a therapist can help you work through them.",
      copyHeading: "Triggers I have noticed",
    },
    sources: [PTSDUK_FLASHBACKS, NHS_PTSD, RCP_PTSD, RCP_COPING, GOV_DRIVING, RETHINK_TREATMENT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What can happen if you avoid thinking about the event?",
      options: [{ text: "The memories can become stronger and more distressing", right: true }, { text: "The memories fade for good" }, { text: "Nothing changes" }],
      why: "If we avoid thinking about the event, the memories can become stronger and more distressing when we do think of them.",
    },
  },
  {
    id: "ptsd-crisis",
    kicker: "Urgent help",
    question: "What can I do if I am struggling to cope?",
    hook: "You do not have to struggle with these feelings alone. Help is there right now, at any hour, and telling someone is the first step.",
    short: "If you're feeling like you want to end your life, it's important to tell someone. If your life is in danger or you cannot keep yourself safe, call 999 or go to A&E. For urgent help that is not an emergency, call 111 and select the mental health option. You can call Samaritans free on 116 123 at any time, or text SHOUT to 85258.",
    sections: [
      {
        heading: "Tell someone",
        paragraphs: [
          "Sometimes PTSD symptoms can last a long time and have a big impact on day-to-day life. This can sometimes lead to suicidal thoughts.",
          "If you're feeling like you want to end your life, it's important to tell someone. Help and support is available right now if you need it. You do not have to struggle with difficult feelings alone.",
        ],
      },
      {
        heading: "If your life is in danger",
        paragraphs: [
          "If you have seriously harmed yourself, or you feel that you may be about to harm yourself, call 999 for an ambulance or go straight to A&E. Or ask someone else to call 999 or take you to A&E.",
          "A mental health emergency should be taken as seriously as a physical one. You will not be wasting anyone's time.",
        ],
      },
      {
        heading: "Urgent help that is not an emergency",
        paragraphs: [
          "Get help from 111 online, or call 111 and select the mental health option. 111 will tell you the right place to get help, and you may be able to speak to a trained mental health professional over the phone.",
          "You can also call a GP and ask for an emergency appointment, or contact your mental health crisis team if you have one.",
        ],
      },
      {
        heading: "Someone to listen, any hour",
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
          "Do something you usually enjoy, such as spending time with a pet. Let family or friends know what's going on for you; they may be able to offer support and help keep you safe. It may help to make a safety plan to use if you need it.",
        ],
      },
    ],
    helps: [
      "If your life is in danger or you cannot keep yourself safe, call 999 or go to A&E.",
      "For urgent help that is not an emergency, call 111 and select the mental health option, or use 111 online.",
      "Call Samaritans free on 116 123, at any time of the day or night.",
      "If you would rather not talk on the phone, text SHOUT to 85258.",
      "Call a GP and ask for an emergency appointment, or contact your crisis team if you have one.",
      "Tell family or friends what is going on for you.",
    ],
    tryThisWeek: [
      "Call 111 for urgent help.",
      "Call Samaritans on 116 123.",
      "Tell someone you trust.",
    ],
    ask: "Who do I contact if I feel unable to cope?",
    interactive: {
      kind: "flip-cards",
      title: "Who to contact",
      intro: "Turn each card to see when to use it. All of these are free.",
      cards: [
        { id: "999", front: "999 or A&E", when: "If your life is in danger", back: "Call 999 or go to A&E if you cannot keep yourself safe. You will not be wasting anyone's time." },
        { id: "111", front: "NHS 111", when: "Urgent help, not an emergency", back: "Call 111 and select the mental health option, or use 111 online. They will tell you where to get help." },
        { id: "samaritans", front: "Samaritans: 116 123", when: "Any time, day or night", back: "Free from any phone. They listen, and will not judge you or tell you what to do." },
        { id: "shout", front: "Shout: text SHOUT to 85258", when: "If you would rather not talk", back: "A free, confidential text line, open 24 hours a day, every day." },
        { id: "gp", front: "A GP", when: "For an emergency appointment", back: "Call and ask for an emergency appointment. A GP can also help you get mental health care." },
        { id: "crisis-team", front: "Your crisis team", when: "If you already have one", back: "Contact your mental health crisis team. If you are not sure who they are, NHS 111 can help you find support." },
      ],
    },
    sources: [NHS_SUICIDAL, NHS_URGENT, SAM_CONTACT, EMM_URGENT, SHOUT, SAM_SIGNS, RETHINK_RISKS],
    quiz: {
      question: "What number can you call free, at any time, to talk to Samaritans?",
      options: [{ text: "116 123", right: true }, { text: "There is no free number" }, { text: "Only a daytime line" }],
      why: "Call free on 116 123 from any phone, and the number won't come up on your phone bill.",
    },
  },
];
