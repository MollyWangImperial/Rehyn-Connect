import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Panic disorder page's pieces (content/library-conditions/mind-extra.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (including
// Every Mind Matters and the NHS agoraphobia pages, which cover panic disorder), No Panic, Anxiety UK and
// Rethink Mental Illness, with the Royal College of Psychiatrists and Triumph Over Phobia UK. mind.org.uk was
// not read (it answers automated readers with a bot check), so no Mind page is cited. Safe messaging
// throughout: no method details, and every answer ends its "What helps" list with the crisis routes exactly as
// the NHS gives them (999 or A&E, 111 mental health option, Samaritans 116 123, Shout 85258). General
// information only; it never replaces what a person's own GP, therapist or mental health team tells them, and
// no medicine should be stopped or changed without the doctor.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const emm = (label: string, path: string): LearnSource => ({ label: `NHS Every Mind Matters: ${label}`, url: `https://www.nhs.uk/every-mind-matters/${path}` });
const np = (label: string, path: string): LearnSource => ({ label: `No Panic: ${label}`, url: `https://nopanic.org.uk/${path}` });
const auk = (label: string, path: string): LearnSource => ({ label: `Anxiety UK: ${label}`, url: `https://www.anxietyuk.org.uk/${path}` });

const NHS_PANIC = nhs("Panic disorder", "mental-health/conditions/panic-disorder/");
const NHS_AFP = nhs("Anxiety, fear and panic", "mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/anxiety-fear-panic/");
const NHS_AGO_OVERVIEW = nhs("Agoraphobia: overview", "mental-health/conditions/agoraphobia/overview/");
const NHS_AGO_SYMPTOMS = nhs("Agoraphobia: symptoms", "mental-health/conditions/agoraphobia/symptoms/");
const NHS_AGO_CAUSES = nhs("Agoraphobia: causes", "mental-health/conditions/agoraphobia/causes/");
const NHS_AGO_DIAGNOSIS = nhs("Agoraphobia: diagnosis", "mental-health/conditions/agoraphobia/diagnosis/");
const NHS_AGO_TREATMENT = nhs("Agoraphobia: treatment", "mental-health/conditions/agoraphobia/treatment/");
const NHS_TT = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_FIND_TT = nhs("Find NHS talking therapies for anxiety and depression", "nhs-services/mental-health-services/find-nhs-talking-therapies-for-anxiety-and-depression/");
const NHS_BREATHING = nhs("Breathing exercises for stress", "mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/");
const NHS_AUDIO = nhs("Mental wellbeing audio guides", "mental-health/self-help/guides-tools-and-activities/mental-wellbeing-audio-guides/");
const NHS_ANTIDEPRESSANTS = nhs("Antidepressants", "medicines/antidepressants/");
const NHS_SERTRALINE = nhs("Sertraline", "medicines/sertraline/");
const NHS_CLON_ABOUT = nhs("About clonazepam", "medicines/clonazepam/about-clonazepam/");
const NHS_CLON_Q = nhs("Common questions about clonazepam", "medicines/clonazepam/common-questions-about-clonazepam/");
const NHS_PREGABALIN = nhs("About pregabalin", "medicines/pregabalin/about-pregabalin/");
const NHS_CHEST_PAIN = nhs("Chest pain", "symptoms/chest-pain/");
const NHS_HEART_ATTACK = nhs("Heart attack", "conditions/heart-attack/");
const NHS_PALPITATIONS = nhs("Heart palpitations", "symptoms/heart-palpitations/");
const NHS_INSOMNIA = nhs("Insomnia", "conditions/insomnia/");
const NHS_EXERCISE = nhs("Benefits of exercise", "live-well/exercise/exercise-health-benefits/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const EMM_FEARS = emm("Facing your fears", "mental-wellbeing-tips/self-help-cbt-techniques/facing-your-fears/");
const EMM_CBT = emm("Self-help CBT techniques", "mental-wellbeing-tips/self-help-cbt-techniques/");
const EMM_MIND_PLAN = emm("Your Mind Plan", "mental-wellbeing-tips/your-mind-plan-quiz/");
const EMM_SLEEP = emm("Sleep problems", "mental-health-issues/sleep/");

const RETHINK_ANXIETY: LearnSource = { label: "Rethink Mental Illness: Anxiety disorders", url: "https://www.rethink.org/advice-and-information/about-mental-illness/mental-health-conditions/anxiety-disorders/" };
const RETHINK_PANIC: LearnSource = { label: "Rethink Mental Illness: How do I manage a panic attack?", url: "https://www.rethink.org/advice-and-information/get-help-now/self-help-guides-for-urgent-help/how-do-i-manage-a-panic-attack/" };
const RCPSYCH_GAD: LearnSource = { label: "Royal College of Psychiatrists: Anxiety and generalised anxiety disorder (GAD)", url: "https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/anxiety-and-generalised-anxiety-disorder-(gad)" };
const TOP_UK: LearnSource = { label: "Triumph Over Phobia UK", url: "https://www.topuk.org/" };

const NP_WHAT_IS = np("What is a panic attack", "what-is-a-panic-attack/");
const NP_PANIC_ATTACK = np("Are you having a panic attack right now?", "panic-attack/");
const NP_BREATHING = np("Correct breathing animation", "correct-breathing/");
const NP_SELF_HELP = np("Self-help tips", "self-help/");
const NP_HELPLINE = np("No Panic helplines", "the-no-panic-helpline/");
const NP_SERVICES = np("Recovery programmes and support services", "support-services/");
const NP_MEMBER = np("Become a member of No Panic", "what-do-i-get-as-a-member/");
const NP_CHAT = np("Anxiety Support Chat", "anxiety-support-chat/");
const NP_STRATEGIES = np("Strategies for coping with panic", "strategies-coping-panic/");
const NP_HEART = np("Do panic attacks cause heart attacks?", "panic-and-heart-attacks/");
const NP_SPONTANEOUS = np("Spontaneous panic", "spontaneous-panic-professor-kevin-gournay/");

const AUK_PANIC = auk("Panic disorder", "anxiety-type/panic-disorder/");
const AUK_AGORAPHOBIA = auk("Agoraphobia", "anxiety-type/agoraphobia/");
const AUK_CBT = auk("Cognitive behavioural therapy (CBT)", "get-help/cognitive-behavioural-therapy-cbt/");
const AUK_COURSES = auk("Anxiety UK courses and groups", "get-help/anxiety-uk-courses-and-groups/");
const AUK_GROUPS = auk("Anxiety support groups", "anxiety-support-groups-2/");
const AUK_MEMBER = auk("Become a member", "become-a-member/");
const AUK_CONTACT = auk("Contact us", "contact-us/");

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you cannot keep yourself safe.";

export const panicAnswers: LearnArticle[] = [
  {
    id: "pnc-what-it-is",
    kicker: "Understanding",
    question: "What is panic disorder?",
    hook: "Many people have a panic attack at some point. In panic disorder the attacks keep coming, often out of the blue, and the fear of the next one starts to shape life.",
    short: "Panic disorder is an anxiety disorder where you regularly have sudden attacks of panic or fear, often for no apparent reason. The attacks are frightening but not dangerous, and worry about the next one can lead to avoiding places. It is treatable, mainly with talking therapy and sometimes medicine.",
    sections: [
      {
        heading: "A natural alarm, going off too often",
        paragraphs: [
          "Everyone experiences feelings of anxiety and panic at certain times. It is a natural response to stressful or dangerous situations, and panic is the most severe form of anxiety.",
          "Someone with panic disorder has feelings of anxiety, stress and panic regularly and at any time, often for no apparent reason.",
        ],
      },
      {
        heading: "Out of the blue",
        paragraphs: [
          "Anxiety UK says the panic attack is the common thread between most anxiety disorders. When attacks come out of the blue, without an apparent trigger, this is classified as panic disorder.",
          "People with panic disorder often feel fine one minute and in the grips of a panic attack the next. Certain situations can cause a panic attack for anyone, and having one in a lift, for example, does not mean you have panic disorder.",
        ],
      },
      {
        heading: "Living in fear of fear",
        paragraphs: [
          "You may start to avoid certain situations because you fear they will trigger another attack. This can create a cycle of living in fear of fear, which can add to your sense of panic and may cause more attacks.",
          "Some people have attacks once or twice a month, while others have them several times a week. Agoraphobia can develop as a complication of panic disorder, when people link attacks with the places they happened and then avoid them.",
        ],
      },
      {
        heading: "Treatable, and worth getting help early",
        paragraphs: [
          "Panic disorder is treatable, so it is best to get medical help as soon as you can. Without help, it can escalate and become very difficult to cope with.",
          "Treatment aims to reduce the number of panic attacks and ease your symptoms. Talking therapies and medicine are the main treatments, and you can refer yourself to an NHS talking therapies service.",
        ],
      },
    ],
    helps: [
      "See a GP if you have been having symptoms of panic disorder.",
      "If you are 18 or over (or 16 or over in some areas), refer yourself to an NHS talking therapies service.",
      "Try not to avoid situations that make you anxious; slowly build up the time you spend in them.",
      "Try not to tell yourself you are alone: most people experience anxiety or fear at some point in their life.",
      CRISIS,
    ],
    tryThisWeek: [
      "See a GP about your symptoms.",
      "Refer yourself to talking therapies.",
      "Build up time in a worrying place slowly.",
    ],
    ask: "Could my symptoms be panic disorder, and what would you suggest first?",
    interactive: {
      kind: "timeline",
      title: "The fear of fear cycle",
      steps: [
        { id: "attack", when: "It starts", title: "A sudden attack", points: ["A rush of intense mental and physical symptoms.", "It can come on quickly, for no apparent reason."] },
        { id: "worry", when: "Afterwards", title: "Worry about the next one", points: ["You start to dread having another attack.", "Anxiety UK calls this living in fear of fear."] },
        { id: "avoid", when: "Over time", title: "Avoiding places", points: ["You avoid situations you fear will trigger an attack.", "This can add to panic and cause more attacks."] },
        { id: "help", when: "Breaking the cycle", title: "Getting help", points: ["Talking therapies and medicine are the main treatments.", "You can refer yourself to NHS talking therapies."] },
      ],
    },
    sources: [NHS_PANIC, AUK_PANIC, NHS_AFP, RETHINK_ANXIETY, NHS_AGO_OVERVIEW, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What is panic disorder?",
      options: [{ text: "Regular sudden attacks of panic, often for no apparent reason", right: true }, { text: "Having one panic attack in a lift" }, { text: "A type of heart condition" }],
      why: "Panic disorder is an anxiety disorder where you regularly have sudden attacks of panic or fear, often for no apparent reason.",
    },
  },
  {
    id: "pnc-attack",
    kicker: "The attack",
    question: "What happens in my body during a panic attack?",
    hook: "A racing heart, breathlessness, a sense of doom. It feels like an emergency, but it is the body's fear response firing at the wrong time.",
    short: "During a panic attack you get a rush of intense mental and physical symptoms, such as a racing heartbeat, sweating, shortness of breath and a feeling of dread. Most attacks last between 5 and 20 minutes. They are frightening, but they are not dangerous and should not harm you.",
    sections: [
      {
        heading: "A rush of symptoms",
        paragraphs: [
          "During a panic attack you get a rush of intense mental and physical symptoms. It can come on very quickly and for no apparent reason, and it can be very frightening and distressing.",
          "No Panic describes a panic attack as an exaggeration of the body's normal response to fear. Your heart beats faster, you have trouble breathing, and you may feel you are going to faint, have a heart attack or even die.",
        ],
      },
      {
        heading: "What you might feel in your body",
        paragraphs: [
          "Symptoms include a racing heartbeat, feeling faint, sweating, nausea, chest pain, shortness of breath, trembling, hot flushes, chills and shaky limbs.",
          "Some people have a choking sensation, dizziness, numbness or pins and needles, a dry mouth, a churning stomach or a tingling in the fingers. Some feel as if they are not connected to their body.",
        ],
      },
      {
        heading: "What you might feel in your mind",
        paragraphs: [
          "Many people have a feeling of dread or a fear of dying. Others feel they are losing control, that they cannot cope, or that they are trapped.",
          "Some people fear that an attack will make them lose control in public, or that they would be unable to escape from a place if one happened.",
        ],
      },
      {
        heading: "Why your breathing changes",
        paragraphs: [
          "In an attack the body goes into fight or flight mode and releases adrenaline, which speeds up the heart. No Panic says many people start over-breathing, and that about 60 in every 100 panic attacks come with hyperventilation.",
          "When you over-breathe, it can feel as if you do not have enough oxygen, but the opposite is true: you breathe out more than you breathe in. No Panic teaches calm, rhythmic breathing through the diaphragm to restore the balance.",
        ],
      },
      {
        heading: "How long it lasts",
        paragraphs: [
          "Most panic attacks last between 5 and 20 minutes, and some have been reported to last up to an hour. No Panic says an attack usually reaches its peak within 5 to 10 minutes.",
          "Although panic attacks are frightening, they are not dangerous. An attack will not cause you any physical harm, and it is unlikely you will be admitted to hospital if you have one.",
        ],
      },
    ],
    helps: [
      "Remind yourself that the attack will pass and is not life threatening.",
      "Breathe slowly and deeply.",
      "Learn calm breathing through the diaphragm, in and out through the nose, at times when you are not panicking.",
      "Get medical help if chest pains or a very quick or irregular heartbeat continue after an attack.",
      CRISIS,
    ],
    tryThisWeek: [
      "Remind yourself it will pass.",
      "Practise slow, deep breaths.",
      "Learn calm diaphragm breathing.",
    ],
    ask: "Could any of my symptoms be something other than panic, and should anything be checked?",
    interactive: {
      kind: "signs",
      title: "What your body is doing",
      intro: "Tick any you have noticed during an attack. They are the body's fear response at work.",
      signs: ["A racing heartbeat", "Feeling faint or dizzy", "Sweating, trembling or shaking", "Shortness of breath or breathing very quickly", "Chest pain", "Feeling sick or a churning stomach", "Tingling in the fingers or lips", "A feeling of dread or losing control"],
      after: "Most of these can also be symptoms of other conditions, so you may not always be having a panic attack. Take your list to a GP.",
      copyHeading: "Symptoms I notice during an attack",
    },
    sources: [NHS_PANIC, NHS_AFP, NP_WHAT_IS, NP_BREATHING, RETHINK_PANIC, NHS_AGO_SYMPTOMS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How long do most panic attacks last?",
      options: [{ text: "Between 5 and 20 minutes", right: true }, { text: "Several hours" }, { text: "A few seconds" }],
      why: "Most panic attacks last between 5 and 20 minutes, and some have been reported to last up to an hour.",
    },
  },
  {
    id: "pnc-causes",
    kicker: "Causes",
    question: "Why do I get panic attacks?",
    hook: "There is rarely one single cause. Stressful events, family history and the body's own alarm system all seem to play a part.",
    short: "The exact cause of panic disorder is not fully understood. It is thought to be linked to a combination of things, including a traumatic or very stressful life experience, having a close family member with panic disorder, and an imbalance of chemical messengers in the brain. Everyday things, such as caffeine, alcohol and tiredness, can make attacks more likely.",
    sections: [
      {
        heading: "A mix of things",
        paragraphs: [
          "As with many mental health conditions, the exact cause of panic disorder is not fully understood. Most experts think a combination of biological and psychological factors may be involved.",
          "It is thought to be linked to a traumatic or very stressful life experience, such as bereavement, to having a close family member with panic disorder, and to an imbalance of neurotransmitters, the chemical messengers in the brain.",
        ],
      },
      {
        heading: "An alarm that is too sensitive",
        paragraphs: [
          "Panic disorder is closely linked to the body's natural fight or flight response. Anxiety and fear make the body release hormones such as adrenaline, and your breathing and heart rate increase.",
          "In people with panic disorder, it is thought this response is more intense, resulting in a panic attack. No Panic says that, over time, people can learn to link the fight or flight response to a situation, activity or place as if they were in real danger.",
        ],
      },
      {
        heading: "Life events and pressures",
        paragraphs: [
          "Things that can bring on anxiety, fear or panic include pressure at work, relationship difficulties, money problems, illness and losing someone. Even big life events, such as having a baby or planning a wedding, can lead to stress and anxiety.",
          "Rethink Mental Illness says some people seem to be born more anxious than others. Bad experiences, such as abuse or losing a loved one, and big changes, such as moving home, can also play a part.",
        ],
      },
      {
        heading: "Things that can make attacks more likely",
        paragraphs: [
          "Sugary food and drinks, caffeine, alcohol and smoking can all make attacks worse. Rethink says caffeine in coffee, and alcohol, can make you feel anxious, and street drugs can also have an effect.",
          "No Panic's president, Professor Kevin Gournay, says being hungry or tired can be a factor, and some people are more prone to attacks the day after drinking alcohol. He also says attacks that seem to come from nowhere sometimes have a cause that keeping a diary can help to find.",
        ],
      },
    ],
    helps: [
      "Keep a diary of when attacks happen and what came before them, including what you ate and drank.",
      "Eat regularly and try to get plenty of sleep.",
      "Avoid sugary food and drinks, caffeine and alcohol, and stop smoking.",
      "Do not self-diagnose: speak to a GP if you are worried about how you are feeling.",
      CRISIS,
    ],
    tryThisWeek: [
      "Keep a simple panic diary.",
      "Eat regularly and rest well.",
      "Cut down on caffeine and alcohol.",
    ],
    ask: "Could anything in my life or health be adding to my panic attacks?",
    interactive: {
      kind: "risk-check",
      title: "What might be adding to it?",
      intro: "Tick any that apply. Some can be changed and some cannot, and none of them is your fault.",
      items: [
        { id: "stress", label: "A very stressful event", note: "A traumatic or very stressful experience, such as bereavement, is thought to be linked to panic disorder.", changeable: false },
        { id: "family", label: "A close relative with panic disorder", note: "Having a close family member with panic disorder is thought to be one of the links.", changeable: false },
        { id: "caffeine", label: "Lots of coffee, tea or cola", note: "Caffeine can make attacks worse. Cutting down may help.", changeable: true },
        { id: "alcohol", label: "Drinking alcohol", note: "Alcohol can make attacks worse, and some people are more prone to attacks the day after drinking.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Smoking can make attacks worse. The NHS advises stopping.", changeable: true },
        { id: "tired", label: "Being hungry or tired", note: "Eating regularly and getting plenty of sleep can help, says No Panic.", changeable: true },
      ],
    },
    sources: [NHS_PANIC, NHS_AGO_CAUSES, NHS_AFP, RETHINK_ANXIETY, NP_SPONTANEOUS, NP_WHAT_IS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Is the exact cause of panic disorder known?",
      options: [{ text: "No, it is thought to be a mix of things", right: true }, { text: "Yes, it is always caused by caffeine" }, { text: "Yes, it is purely in the genes" }],
      why: "The exact cause of panic disorder is not fully understood. It is thought to be linked to a combination of things.",
    },
  },
  {
    id: "pnc-diagnosis",
    kicker: "Diagnosis",
    question: "How is panic disorder diagnosed?",
    hook: "There is no single test. A GP listens to what happens, checks for other causes, and looks at how long the worry has gone on.",
    short: "See a GP if you have been having symptoms of panic disorder. They will ask about your symptoms, how often you get them and how long you have had them, and may examine you to rule out other conditions. Panic disorder may be diagnosed if you have regular, unexpected attacks followed by at least a month of continuous worry about having more.",
    sections: [
      {
        heading: "Talking to a GP",
        paragraphs: [
          "See a GP if you have been experiencing symptoms of panic disorder. They will ask you to describe your symptoms, how often you get them, and how long you have had them.",
          "It can sometimes be difficult to talk about your feelings, emotions and personal life, but try not to feel anxious or embarrassed. A GP needs to know as much as possible about your symptoms to make the correct diagnosis.",
        ],
      },
      {
        heading: "Ruling out other causes",
        paragraphs: [
          "The GP may carry out a physical examination to rule out other conditions that could be causing your symptoms. Most panic symptoms can also be symptoms of other conditions, and a racing heartbeat, for example, can happen with very low blood pressure.",
          "In some cases a GP may arrange blood tests. An overactive thyroid gland, for example, can sometimes cause symptoms like those of a panic attack.",
        ],
      },
      {
        heading: "What the diagnosis is based on",
        paragraphs: [
          "You may be diagnosed with panic disorder if you have regular and unexpected panic attacks followed by at least a month of continuous worry or concern about having further attacks.",
          "Anxiety UK's self-check asks whether, over the past 2 weeks, you have had sudden attacks of intense fear, worried about more attacks, changed what you do to avoid situations, or worried about the physical symptoms. It strongly advises seeing a GP, who can make a formal diagnosis.",
        ],
      },
      {
        heading: "If leaving home is hard",
        paragraphs: [
          "If attacks make it hard to leave the house, it should be possible to arrange a telephone consultation. The GP may ask whether leaving the house is stressful, and whether you avoid certain places or rely on others to shop for you.",
          "If there is any doubt about the diagnosis, you may be referred to a psychiatrist for a more detailed assessment. You do not need a diagnosis to refer yourself to NHS talking therapies.",
        ],
      },
    ],
    helps: [
      "See a GP if you have been having symptoms of panic disorder.",
      "Tell the GP how often attacks happen, how long you have had them, and how they affect your daily life.",
      "Ask for a telephone appointment if it is hard to leave the house.",
      "Try to be open about your feelings, even if it feels difficult or embarrassing.",
      CRISIS,
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Note how often attacks happen.",
      "Ask for a phone appointment if needed.",
    ],
    ask: "Could you check whether something physical, such as my thyroid, is causing my symptoms?",
    interactive: {
      kind: "scenarios",
      title: "Getting a diagnosis",
      scenarios: [
        {
          id: "embarrassed",
          situation: "You feel embarrassed describing your attacks to the GP.",
          options: [{ text: "Describe them as fully as you can", best: true }, { text: "Play them down" }],
          why: "Try not to feel anxious or embarrassed. A GP needs to know as much as possible about your symptoms to make the correct diagnosis.",
        },
        {
          id: "leaving-home",
          situation: "Getting to the surgery feels impossible right now.",
          options: [{ text: "Ask for a telephone consultation", best: true }, { text: "Wait until it passes" }],
          why: "If attacks make it hard to leave the house, it should be possible to arrange a telephone consultation.",
        },
        {
          id: "physical",
          situation: "You wonder whether something physical is making your heart race.",
          options: [{ text: "Ask the GP to rule out other causes", best: true }, { text: "Assume it is panic" }],
          why: "The GP may carry out a physical examination to rule out other conditions that could be causing your symptoms.",
        },
        {
          id: "no-diagnosis",
          situation: "You want talking therapy but have no diagnosis yet.",
          options: [{ text: "Refer yourself to NHS talking therapies", best: true }, { text: "Wait for a diagnosis first" }],
          why: "You do not need a diagnosis to refer yourself to NHS talking therapies.",
        },
      ],
    },
    sources: [NHS_PANIC, AUK_PANIC, NHS_AGO_DIAGNOSIS, NHS_AGO_OVERVIEW, RETHINK_ANXIETY, NHS_FIND_TT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Panic disorder may be diagnosed after regular, unexpected attacks and how long of continuous worry about more?",
      options: [{ text: "At least a month", right: true }, { text: "At least a day" }, { text: "At least five years" }],
      why: "You may be diagnosed with panic disorder if you have regular and unexpected panic attacks followed by at least a month of continuous worry or concern about having further attacks.",
    },
  },
  {
    id: "pnc-cbt",
    kicker: "Treatment",
    question: "How does CBT help with panic?",
    hook: "CBT works on the thoughts that turn a racing heart into a catastrophe, and helps you face the situations you have started to avoid.",
    short: "Cognitive behavioural therapy (CBT) is a talking therapy where a therapist helps you change how you think and act. For panic, a therapist may talk with you about how you react during an attack and what you think, and teach you ways to keep calm. You can refer yourself to an NHS talking therapies service, or a GP can refer you.",
    sections: [
      {
        heading: "What CBT is",
        paragraphs: [
          "CBT is a type of talking therapy where a therapist helps you to change how you think and act. Anxiety UK says it looks at how your thoughts, feelings and behaviours are linked, and helps you break out of patterns that keep anxiety going.",
          "Anxiety UK says NICE recommends CBT as a first-line psychological treatment for all the main anxiety disorders, ahead of medication in most cases.",
        ],
      },
      {
        heading: "CBT for panic",
        paragraphs: [
          "Your therapist may discuss with you how you react when you have a panic attack and what you think about. They can teach you ways of changing your behaviour to help you keep calm during an attack.",
          "Many people with agoraphobia believe a panic attack might kill them. A CBT therapist encourages a more balanced way of thinking: an attack may be unpleasant, but it is not fatal and will pass.",
          "CBT is usually combined with exposure therapy. A therapist sets modest goals at first, such as going to a local corner shop, and more challenging ones as your confidence grows.",
        ],
      },
      {
        heading: "How to get it",
        paragraphs: [
          "You can refer yourself directly to an NHS talking therapies service for treatment based on CBT, or a GP can refer you. To refer yourself, you need to be 18 or over, or 16 or over in some areas.",
          "You do not need a diagnosed mental health condition. When you refer yourself, the service will contact you and tell you how long you may need to wait for your first session.",
        ],
      },
      {
        heading: "What happens",
        paragraphs: [
          "First you have an assessment with a therapist, in person, online or on the phone. You may be offered guided self-help first, working through a CBT-based workbook or online course with a therapist's support.",
          "You will usually have between 5 and 15 sessions of CBT. For agoraphobia and related panic, the NHS says a course usually has 12 to 15 weekly sessions, each lasting about an hour.",
          "You will usually be asked to practise what you have learned between sessions, and it is important to do this for CBT to work. You may need to see a GP regularly during CBT so they can assess your progress.",
        ],
      },
      {
        heading: "After CBT, and other therapies",
        paragraphs: [
          "After the course, it is important to keep using the skills you have learned. If your symptoms do not improve, you may be given more sessions, and a GP can suggest more CBT or a different treatment.",
          "Applied relaxation is another option. It teaches you to spot tension, relax your muscles and use these skills in stressful situations, usually over 12 to 15 weekly sessions.",
        ],
      },
    ],
    helps: [
      "Refer yourself to NHS talking therapies if you are 18 or over (16 or over in some areas).",
      "Or ask a GP to refer you, if you prefer.",
      "Practise what you learn between sessions; it is important for CBT to work.",
      "Keep using your CBT skills after the course ends.",
      "If you pay privately, check the therapist is registered with an organisation accredited by the Professional Standards Authority.",
      CRISIS,
    ],
    tryThisWeek: [
      "Refer yourself to talking therapies.",
      "Practise between sessions.",
      "Keep using your skills afterwards.",
    ],
    ask: "Can I refer myself for CBT for panic here, and how long is the wait?",
    interactive: {
      kind: "timeline",
      title: "Your path through CBT for panic",
      steps: [
        { id: "refer", when: "Getting started", title: "Refer yourself or see a GP", points: ["Refer yourself to NHS talking therapies.", "Or ask a GP to refer you."] },
        { id: "assess", when: "First contact", title: "An assessment", points: ["In person, online or on the phone.", "The therapist recommends a type of therapy."] },
        { id: "guided", when: "Often first", title: "Guided self-help", points: ["A CBT-based workbook or online course.", "With a therapist's support."] },
        { id: "sessions", when: "Usually 5 to 15 sessions", title: "Working on panic", points: ["How you react and what you think in an attack.", "Practise between sessions."] },
        { id: "exposure", when: "As confidence grows", title: "Facing feared places", points: ["Modest goals first, like a corner shop.", "Then more challenging ones."] },
        { id: "after", when: "When it ends", title: "Keep using the skills", points: ["Your therapist helps you plan how.", "See a GP if problems carry on."] },
      ],
    },
    sources: [NHS_PANIC, NHS_CBT, NHS_TT, NHS_AGO_TREATMENT, AUK_CBT, NHS_FIND_TT, RETHINK_ANXIETY, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Can you refer yourself for CBT for panic disorder on the NHS?",
      options: [{ text: "Yes, to an NHS talking therapies service", right: true }, { text: "No, only a psychiatrist can refer you" }, { text: "Only after trying medicine" }],
      why: "You can refer yourself directly to an NHS talking therapies service for treatment based on CBT, or a GP can refer you.",
    },
  },
  {
    id: "pnc-during",
    kicker: "In the moment",
    question: "What can I do during a panic attack?",
    hook: "You cannot always stop an attack, but you can ride it out. Staying put, slowing your breath and reminding yourself it will pass all help.",
    short: "When you feel an attack coming on, stay where you are if possible, breathe slowly and deeply, and remind yourself that it will pass and is not life threatening. Focusing on something calm, or on what is around you, can help. Trying to fight the attack often makes things worse.",
    sections: [
      {
        heading: "Stay where you are",
        paragraphs: [
          "The next time you feel a panic attack coming on, stay where you are, if possible. Try to resist the urge to run to a place of safety, and if you are driving, pull over and park where it is safe to do so.",
          "Do not fight the attack. Trying to fight the symptoms can often make things worse, so accept that, although the symptoms are difficult, the attack is not life threatening.",
        ],
      },
      {
        heading: "Slow your breathing",
        paragraphs: [
          "Breathe slowly and deeply. Feelings of panic can get worse if you breathe too quickly, so the NHS suggests focusing on slow, deep breathing while counting slowly to 3 on each breath in and out.",
          "No Panic suggests breathing through your nose, slowly in and out to the count of four. Rethink Mental Illness describes a 4-5-8 method: breathe in for 4 seconds, hold for 5, and breathe out slowly for 8, changing the counts to suit you.",
          "If breathing exercises are not working for you, or are causing you difficulty, stop using them and try other ways to relax.",
        ],
      },
      {
        heading: "Ground yourself",
        paragraphs: [
          "Focus on something non-threatening and visible, such as the time passing on your watch or items in a supermarket. Rethink suggests noticing 3 things you can see, 3 things you can hear and 3 things you can touch.",
          "You can also focus on positive, peaceful and relaxing images, such as a place where you feel at ease.",
        ],
      },
      {
        heading: "Remind yourself what is happening",
        paragraphs: [
          "Remind yourself that the attack will pass and that it is not life threatening. The frightening thoughts and sensations are a sign of panic.",
          "No Panic suggests telling yourself that these are just symptoms caused by adrenaline, which will soon start to decrease, and dropping your shoulders as you breathe out. Afterwards, tell yourself how well you are doing.",
        ],
      },
      {
        heading: "A voice to follow, and when to get help",
        paragraphs: [
          "No Panic has a recorded crisis message, a breathing exercise to help you through an attack, which you can hear 24 hours a day on 01952 680835. Its helpline, 0300 772 9844, is open from 10am to 10pm every day.",
          "Get medical help if chest pains or a very quick or irregular heartbeat continue after an attack, if it lasts longer than 20 minutes despite slow breathing, or if you still feel unwell once your breathing is back to normal. If you think you need urgent help, call 999.",
        ],
      },
    ],
    helps: [
      "Stay where you are, if possible, and do not fight the attack.",
      "Breathe slowly and deeply, counting slowly in and out.",
      "Focus on something you can see, hear or touch.",
      "Remind yourself that the attack will pass and is not life threatening.",
      "Call No Panic's 24-hour crisis message on 01952 680835 for a breathing exercise to follow.",
      CRISIS,
    ],
    tryThisWeek: [
      "Practise slow, counted breathing.",
      "Notice what you can see, hear and touch.",
      "Save No Panic's crisis message number.",
    ],
    ask: "Could someone teach me breathing or relaxation techniques for panic attacks?",
    interactive: {
      kind: "timeline",
      title: "Riding out an attack",
      steps: [
        { id: "stay", when: "First", title: "Stay where you are", points: ["Resist the urge to run to a place of safety.", "If driving, pull over where it is safe."] },
        { id: "breathe", when: "Next", title: "Slow your breathing", points: ["Breathe slowly and deeply.", "Count slowly in and out."] },
        { id: "ground", when: "Then", title: "Ground yourself", points: ["Notice 3 things you can see, hear and touch.", "Or focus on a calm, peaceful image."] },
        { id: "accept", when: "Throughout", title: "Let it pass", points: ["Do not fight the symptoms.", "Remind yourself it is not life threatening."] },
        { id: "after", when: "Afterwards", title: "Check how you feel", points: ["Tell yourself how well you did.", "Get medical help if chest pain or a racing heart carry on."] },
      ],
    },
    sources: [NHS_PANIC, NHS_AGO_TREATMENT, RETHINK_PANIC, NP_STRATEGIES, NP_PANIC_ATTACK, NP_HELPLINE, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What does the NHS suggest when you feel an attack coming on?",
      options: [{ text: "Stay where you are and breathe slowly and deeply", right: true }, { text: "Run to a safe place as fast as you can" }, { text: "Hold your breath until it stops" }],
      why: "The next time you feel a panic attack coming on, stay where you are, if possible. Breathe slowly and deeply.",
    },
  },
  {
    id: "pnc-medicines",
    kicker: "Treatment",
    question: "Can medicine help with panic disorder?",
    hook: "Medicine is one of the two main treatments for panic disorder. It takes time to work, and it should never be stopped suddenly without your doctor.",
    short: "If you and your doctor think it might help, you may be prescribed an antidepressant called an SSRI, such as sertraline. Antidepressants can take 2 to 4 weeks to start working and up to 8 weeks to work fully. Other options include a tricyclic antidepressant, pregabalin or, if anxiety is severe, clonazepam.",
    sections: [
      {
        heading: "Where medicine fits",
        paragraphs: [
          "Talking therapies and medicine are the main treatments for panic disorder, and your treatment will depend on your symptoms. You may be prescribed a medicine if you and your doctor think it might be helpful.",
          "In more severe cases, medicine can be used in combination with CBT or applied relaxation therapy.",
        ],
      },
      {
        heading: "SSRIs, usually first",
        paragraphs: [
          "The medicine usually offered is a type of antidepressant called a selective serotonin reuptake inhibitor, or SSRI. SSRIs will usually be the first type prescribed, because their side effects are generally easier to manage.",
          "Sertraline is an SSRI used for panic disorder. It is thought to work by increasing the level of serotonin, a chemical in the brain linked to mood. Your doctor may start with a low dose and increase it after a week or more.",
          "If SSRIs are not suitable, you may be offered a tricyclic antidepressant, usually imipramine or clomipramine.",
        ],
      },
      {
        heading: "Slow to start",
        paragraphs: [
          "Antidepressants can take 2 to 4 weeks before they start to work, and up to 8 weeks to work fully. Keep taking your medicine, even if you feel it is not working, and only stop if your GP advises you to.",
          "Most side effects ease after a couple of weeks. Common ones with sertraline include headaches, feeling sick, dizziness, a dry mouth, diarrhoea, problems sleeping and sexual problems.",
          "It is not common, but some people have suicidal thoughts or an urge to self-harm when they start an antidepressant. Speak to your doctor straight away if this happens, and call 999 or go to A&E immediately if you are in danger or do not feel you can keep yourself safe.",
        ],
      },
      {
        heading: "Other medicines",
        paragraphs: [
          "You may be offered an anti-epilepsy medicine such as pregabalin or, if your anxiety is severe, clonazepam. Pregabalin takes at least a few weeks to work, and some people can become addicted to it.",
          "Clonazepam is a benzodiazepine. For panic disorder it should take around 1 hour to start working. It is not likely to be addictive if taken for a short time of 2 to 4 weeks, and it is important not to drink alcohol while taking it.",
        ],
      },
      {
        heading: "Stopping safely",
        paragraphs: [
          "Do not stop taking an antidepressant suddenly or without talking to your doctor first. They will help you agree a plan to reduce your dose gradually, usually over several weeks or months.",
          "Some people take SSRIs for 6 to 12 months or more. Do not stop clonazepam without talking to a doctor either: if you have taken it for more than 2 to 4 weeks, your dose will be reduced gradually, because stopping suddenly can cause side effects such as confusion or seizures.",
        ],
      },
    ],
    helps: [
      "Keep taking your medicine even if it seems not to be working at first, and only stop if your GP advises it.",
      "Talk to your doctor if side effects are hard to manage, or you feel your medicine is not helping.",
      "Never stop an antidepressant or clonazepam suddenly; agree a plan with your doctor.",
      "Do not drink alcohol while taking clonazepam, and do not use St John's wort with sertraline.",
      "Tell your doctor about any other medicines, herbal remedies or supplements before you start.",
      CRISIS,
    ],
    tryThisWeek: [
      "Keep taking it as prescribed.",
      "Note side effects for your doctor.",
      "List your other medicines and remedies.",
    ],
    ask: "Would a medicine help my panic attacks, and what are the side effects?",
    interactive: {
      kind: "flip-cards",
      title: "Panic medicines, card by card",
      intro: "Turn each card to see when each medicine is used and what to know.",
      cards: [
        { id: "ssri", front: "SSRIs, such as sertraline", when: "Usually the first medicine offered", back: "Thought to increase serotonin. Can take 2 to 4 weeks to start working, and up to 8 weeks to work fully." },
        { id: "tricyclic", front: "Tricyclic antidepressants", when: "If SSRIs are not suitable", back: "Usually imipramine or clomipramine, says the NHS." },
        { id: "pregabalin", front: "Pregabalin", when: "An anti-epilepsy medicine also used for anxiety", back: "Takes at least a few weeks to work. Some people can become addicted, so the dose is reduced gradually when stopping." },
        { id: "clonazepam", front: "Clonazepam", when: "If anxiety is severe", back: "A benzodiazepine. For panic it starts working in around 1 hour, and is not likely to be addictive if taken for 2 to 4 weeks." },
      ],
    },
    sources: [NHS_PANIC, NHS_ANTIDEPRESSANTS, NHS_SERTRALINE, NHS_AGO_TREATMENT, NHS_CLON_ABOUT, NHS_CLON_Q, NHS_PREGABALIN, RETHINK_ANXIETY, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How long can antidepressants take to work fully?",
      options: [{ text: "Up to 8 weeks", right: true }, { text: "A few hours" }, { text: "One day" }],
      why: "Antidepressants can take 2 to 4 weeks before they start to work, and up to 8 weeks to work fully.",
    },
  },
  {
    id: "pnc-self-help",
    kicker: "Self-help",
    question: "Can self-help courses and apps help with panic?",
    hook: "Self-help is often the first step for panic, and some of the best tools are free: a book your GP recommends, an online plan, a course with a therapist's support.",
    short: "A stepped approach is usually recommended: learning about panic and using self-help techniques first, then a guided self-help programme, then more intensive treatment such as CBT. The NHS suggests reading a CBT-based self-help book, and there are free NHS tools such as Every Mind Matters and audio guides. Charities such as No Panic and Anxiety UK run courses too.",
    sections: [
      {
        heading: "A stepped approach",
        paragraphs: [
          "A stepped approach is usually recommended for treating agoraphobia and any underlying panic disorder. The first step is finding out more about your condition, and the lifestyle changes and self-help techniques that can relieve symptoms.",
          "The next step is a guided self-help programme, and then more intensive treatments, such as CBT, or medicine.",
        ],
      },
      {
        heading: "Books and guided self-help",
        paragraphs: [
          "The NHS suggests reading a self-help book for anxiety based on the principles of CBT, and asking your GP to recommend one.",
          "With guided self-help, you work through a CBT-based workbook or computer course with the support of a therapist. You may be offered it first through NHS talking therapies, and if your symptoms do not improve, you may be offered another type of therapy.",
        ],
      },
      {
        heading: "Free NHS tools",
        paragraphs: [
          "Every Mind Matters has short videos and practical guides to CBT techniques, which can help you deal with worries, anxiety and unhelpful thoughts. CBT is usually done with a therapist, but you can practise many of the same ideas on your own.",
          "Its free Mind Plan asks 5 questions about how you have felt over the past 2 weeks, then gives you a plan with practical tips. It is for general wellbeing and is not meant to replace advice from a doctor or therapist.",
          "The NHS also has free mental wellbeing audio guides, including a relaxation technique for anxiety, and a calming breathing exercise for stress, anxiety and panic that takes just a few minutes.",
        ],
      },
      {
        heading: "Apps and charity courses",
        paragraphs: [
          "The Royal College of Psychiatrists says self-help tools include meditation or mindfulness apps, and books or apps that let you practise CBT on your own.",
          "No Panic offers CBT-focused mentoring over the phone, in six one-hour sessions over six weeks, and an email recovery programme. These are for No Panic members and there is a charge. No Panic says its mentors are not cognitive behavioural therapists, but its self-help approach uses relaxation and CBT strategies.",
          "Anxiety UK runs a six-week, therapist-led online anxiety management course, based on CBT and other approaches, for people aged 18 and over.",
        ],
      },
      {
        heading: "Making it work",
        paragraphs: [
          "No Panic suggests learning what anxiety is, keeping a journal of thoughts and feelings to spot what triggers your anxiety, and practising breathing and relaxation. It also reminds people that thoughts are just thoughts, not facts.",
        ],
      },
    ],
    helps: [
      "Ask your GP to recommend a CBT-based self-help book for anxiety.",
      "Try the free Every Mind Matters CBT guides and Mind Plan.",
      "Listen to the free NHS mental wellbeing audio guides.",
      "Ask about guided self-help through NHS talking therapies.",
      "Keep a journal of thoughts and feelings to spot what triggers your anxiety.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask your GP about a self-help book.",
      "Make a free Mind Plan.",
      "Listen to an NHS audio guide.",
    ],
    ask: "Is there a self-help book or guided self-help programme you would recommend for panic?",
    interactive: {
      kind: "flip-cards",
      title: "Self-help options, card by card",
      intro: "Turn each card to see when each option fits and what it involves.",
      cards: [
        { id: "book", front: "A CBT self-help book", when: "A first step, at your own pace", back: "The NHS suggests a self-help book for anxiety based on CBT. Ask your GP to recommend one." },
        { id: "guided", front: "Guided self-help", when: "Through NHS talking therapies", back: "A CBT-based workbook or computer course, with a therapist's support." },
        { id: "emm", front: "Every Mind Matters", when: "Free and online", back: "Short videos and guides to CBT techniques, and a Mind Plan built from 5 questions." },
        { id: "audio", front: "NHS audio guides", when: "Free, to listen to privately", back: "Mental wellbeing audio guides, including a relaxation technique for anxiety." },
        { id: "no-panic", front: "No Panic mentoring", when: "For No Panic members", back: "CBT-focused mentoring by phone: six one-hour sessions over six weeks." },
        { id: "anxiety-uk", front: "Anxiety UK course", when: "Online, for ages 18 and over", back: "A six-week, therapist-led anxiety management course, 1 hour a week." },
      ],
    },
    sources: [NHS_PANIC, NHS_AGO_TREATMENT, NHS_TT, EMM_CBT, EMM_MIND_PLAN, NHS_AUDIO, NHS_BREATHING, RCPSYCH_GAD, NP_SERVICES, AUK_COURSES, NP_SELF_HELP, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What kind of book does the NHS suggest for panic?",
      options: [{ text: "A CBT-based self-help book your GP recommends", right: true }, { text: "Any book about rare illnesses" }, { text: "None: reading makes panic worse" }],
      why: "The NHS suggests reading a self-help book for anxiety based on the principles of CBT, and asking your GP to recommend one.",
    },
  },
  {
    id: "pnc-avoidance",
    kicker: "Daily life",
    question: "How can I go back to places I have started to avoid?",
    hook: "Avoiding the shop where an attack happened brings relief today, but the list of no-go places can grow. Small, planned steps can win them back.",
    short: "Avoiding situations because you fear another attack can create a cycle of living in fear of fear, and over time it can lead to agoraphobia. Facing feared situations gradually, starting with the easiest, can help you overcome them and feel more in control. This is sometimes called exposure therapy, and CBT for panic often includes it.",
    sections: [
      {
        heading: "Why avoiding keeps the fear going",
        paragraphs: [
          "You may start to avoid certain situations because you fear they will trigger another attack. This can create a cycle of living in fear of fear, which can add to your sense of panic.",
          "Avoiding situations might bring relief in the short term, but it can make them harder to face up to and mean that your fears grow.",
        ],
      },
      {
        heading: "When avoiding becomes agoraphobia",
        paragraphs: [
          "Agoraphobia is a fear of being in situations where escape might be difficult, or where help would not be available if things go wrong. It can develop as a complication of panic disorder.",
          "People may avoid crowded places, public transport and queues, or only go out with someone they trust. Anxiety UK says having a trusted person along can make travel easier, but can quickly lead to depending on them.",
        ],
      },
      {
        heading: "Facing fears in small steps",
        paragraphs: [
          "When you feel more relaxed, think about how you feel and behave when you are afraid. Then rate the situations you fear from 0 to 100, and list them from the least to the most difficult.",
          "Start with the easiest. Stay in the situation until your fear has fallen by half, then move on to the next one. The more times you face a fear, the less scary it becomes.",
          "Try to let yourself feel the fear without distractions, such as your phone or asking others for reassurance. This can help prove to yourself that you are able to cope.",
        ],
      },
      {
        heading: "With a therapist's help",
        paragraphs: [
          "CBT is usually combined with exposure therapy. A therapist sets modest goals at first, such as going to a local corner shop, and more challenging ones as you grow in confidence, such as a large supermarket or a meal in a busy restaurant.",
          "If leaving home is hard, it should be possible to arrange a telephone consultation with your GP. You can also refer yourself directly for talking therapies, including CBT.",
        ],
      },
    ],
    helps: [
      "Try slowly building up the time you spend in situations that make you anxious.",
      "Rate feared situations from 0 to 100 and start with the easiest.",
      "Stay in each situation until your fear has fallen by half before moving on.",
      "Do not rush: some steps will take longer than others.",
      "Ask about CBT with exposure therapy, through a GP or by referring yourself.",
      CRISIS,
    ],
    tryThisWeek: [
      "List and rate the places you avoid.",
      "Start with the easiest one.",
      "Stay until your fear halves.",
    ],
    ask: "Could CBT with exposure therapy help me get back to the places I avoid?",
    interactive: {
      kind: "timeline",
      title: "Your ladder back",
      steps: [
        { id: "notice", when: "Step 1", title: "Notice the pattern", points: ["How you feel and act when afraid.", "Think about it when you feel more relaxed."] },
        { id: "rate", when: "Step 2", title: "Rate each situation", points: ["Score them from 0 to 100.", "List them from easiest to hardest."] },
        { id: "start", when: "Step 3", title: "Start with the easiest", points: ["Stay until your fear halves.", "Try it without distractions."] },
        { id: "climb", when: "Step 4", title: "Move up a rung", points: ["Go on to the next situation.", "Do not rush: some take longer."] },
      ],
    },
    sources: [NHS_PANIC, NHS_AGO_OVERVIEW, NHS_AGO_SYMPTOMS, EMM_FEARS, NHS_AGO_TREATMENT, AUK_AGORAPHOBIA, NHS_AFP, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When should you move on to the next situation on your list?",
      options: [{ text: "When your fear has fallen by half", right: true }, { text: "As soon as you feel any fear" }, { text: "Only when you feel no fear at all" }],
      why: "Stay in the situation until your fear has fallen by half, then move on to the next one.",
    },
  },
  {
    id: "pnc-lifestyle",
    kicker: "Daily life",
    question: "Do caffeine, alcohol, exercise and sleep affect panic attacks?",
    hook: "A strong coffee, a heavy night or a run of poor sleep can all leave the body closer to its alarm point. Small daily changes can help.",
    short: "Sugary food and drinks, caffeine, alcohol and smoking can all make panic attacks worse. Regular exercise can help reduce stress and tension, and a regular sleep routine helps too. These changes support treatment rather than replace it.",
    sections: [
      {
        heading: "Caffeine",
        paragraphs: [
          "Caffeine has a stimulant effect and can make your symptoms worse. It is in drinks such as tea, coffee and cola, and the NHS advises avoiding them.",
          "Caffeine is also a common cause of heart palpitations, along with alcohol, nicotine and recreational drugs. Professor Kevin Gournay of No Panic says that in some cases panic may be triggered by lots of strong black coffee.",
        ],
      },
      {
        heading: "Alcohol, smoking and drugs",
        paragraphs: [
          "Avoid sugary food and drinks, caffeine and alcohol, and stop smoking, as they can all make attacks worse. Drugs and alcohol may give short-term relief, but in the long term they can make symptoms worse.",
          "Try not to use alcohol, cigarettes, gambling or drugs to relieve anxiety, as these can all contribute to poor mental health. Some people are more prone to panic attacks the day after drinking alcohol.",
        ],
      },
      {
        heading: "Exercise",
        paragraphs: [
          "Regular physical exercise can reduce stress and tension, and activities like yoga and pilates can help you relax.",
          "Adults should try to be active every day and aim for at least 150 minutes of activity over a week. Professor Gournay says regular exercise of at least 20 minutes, 3 times a week, can reduce states of high arousal.",
        ],
      },
      {
        heading: "Sleep and regular meals",
        paragraphs: [
          "Being hungry or tired can make attacks more likely, so eating regularly and getting plenty of sleep can help. The NHS also advises a healthy diet with regular meals to keep your energy levels stable.",
          "Most healthy adults need around 7 to 9 hours of sleep a night. Stress, anxiety or depression are among the most common causes of insomnia.",
          "Go to bed and wake up at around the same time each day, and relax for at least an hour before bed. Do not have caffeine or alcohol for at least 6 hours before bed, and avoid exercise in the 4 hours before bed.",
        ],
      },
    ],
    helps: [
      "Cut down on drinks that contain caffeine, such as tea, coffee and cola.",
      "Avoid sugary food and drinks and alcohol, and stop smoking.",
      "Do regular physical exercise, and try yoga or pilates to help you relax.",
      "Eat regular meals to keep your energy levels stable.",
      "Keep the same bedtime and wake-up time, and avoid caffeine and alcohol for at least 6 hours before bed.",
      CRISIS,
    ],
    tryThisWeek: [
      "Cut down on caffeinated drinks.",
      "Move a little every day.",
      "Keep a regular bedtime.",
    ],
    ask: "Could caffeine, alcohol or my sleep be making my panic attacks worse?",
    interactive: {
      kind: "risk-check",
      title: "What might be winding you up?",
      intro: "Tick any that apply. Each one is something you can change, a little at a time.",
      items: [
        { id: "caffeine", label: "Coffee, tea, cola or energy drinks", note: "Caffeine has a stimulant effect and can make symptoms worse.", changeable: true },
        { id: "alcohol", label: "Alcohol to unwind", note: "It may give short-term relief, but in the long term it can make symptoms worse.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Smoking can make attacks worse. The NHS advises stopping.", changeable: true },
        { id: "sugar", label: "Sugary food and drinks", note: "These can make attacks worse, says the NHS.", changeable: true },
        { id: "exercise", label: "Little or no exercise", note: "Regular exercise can reduce stress and tension.", changeable: true },
        { id: "sleep", label: "Poor or irregular sleep", note: "Being tired can be a factor. Keep a regular bedtime and wake-up time.", changeable: true },
        { id: "meals", label: "Skipping meals", note: "Being hungry can be a factor. Eat regular meals.", changeable: true },
      ],
    },
    sources: [NHS_PANIC, NHS_AGO_TREATMENT, NHS_AFP, NHS_INSOMNIA, EMM_SLEEP, NHS_EXERCISE, NP_SPONTANEOUS, NHS_PALPITATIONS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "How long before bed does the NHS advise avoiding caffeine and alcohol?",
      options: [{ text: "At least 6 hours", right: true }, { text: "Ten minutes" }, { text: "It makes no difference" }],
      why: "Do not have caffeine or alcohol for at least 6 hours before bed.",
    },
  },
  {
    id: "pnc-chest-pain",
    kicker: "Safety",
    question: "How do I know if it is panic or something else, like a heart attack?",
    hook: "Chest pain and a racing heart are common in panic, but they can also be signs of something serious. When in doubt, it is right to get checked.",
    short: "Most panic symptoms can also be symptoms of other conditions, so you may not always be having a panic attack. Call 999 if you have sudden chest pain that does not go away, pain that spreads to your arms, neck, jaw, stomach or back, or chest pain with sweating, sickness, light-headedness or breathlessness. Most chest pain is not a sign of anything serious, but get medical advice just in case.",
    sections: [
      {
        heading: "Why it can be hard to tell",
        paragraphs: [
          "Most panic attack symptoms can also be symptoms of other conditions or problems, so you may not always be having a panic attack. For example, you may have a racing heartbeat if you have very low blood pressure.",
          "The NHS lists an often sharp, continuous chest pain triggered by worries or stress, with a faster heartbeat, sweating and dizziness, as a possible sign of anxiety or a panic attack. In most cases chest pain is not caused by a heart problem, but do not self-diagnose.",
        ],
      },
      {
        heading: "When to call 999",
        paragraphs: [
          "Call 999 if you get sudden pain or discomfort in your chest that does not go away. It can feel like squeezing or pressure inside your chest, burning or indigestion.",
          "Call 999 if the pain spreads to your left or right arm, or your neck, jaw, stomach or back, or if you have chest pain and feel sweaty, sick, light-headed or short of breath. You could be having a heart attack.",
          "Do not drive yourself to A&E. The person you speak to at 999 will give you advice about what to do.",
        ],
      },
      {
        heading: "After an attack",
        paragraphs: [
          "Rethink Mental Illness says to get medical help if, after a panic attack, you have chest pains or a heartbeat that is very quick or not regular. Get help too if an attack goes on longer than 20 minutes despite slow breathing, or you still feel unwell once your breathing is back to normal.",
          "Call 999 or go to A&E if you have heart palpitations that do not go away, or palpitations with chest pain, shortness of breath or fainting. If these symptoms have stopped, ask your GP surgery for an urgent appointment, or call 111.",
        ],
      },
      {
        heading: "Getting your heart and health checked",
        paragraphs: [
          "See a GP if you have chest pain that comes and goes, or that goes away quickly but you are still worried. See a GP too if palpitations keep coming back or last longer than a few minutes.",
          "A GP may examine you to rule out other conditions, and may arrange tests. An overactive thyroid, for example, can cause symptoms like a panic attack, and an ECG can check the electrical signals coming from your heart.",
          "Professor Kevin Gournay of No Panic says that although chest pain and shortness of breath may be part of panic attacks, they should be properly checked by a GP.",
        ],
      },
    ],
    helps: [
      "Call 999 if you have sudden chest pain that does not go away, or pain spreading to your arms, neck, jaw, stomach or back.",
      "Call 999 if you have chest pain and feel sweaty, sick, light-headed or short of breath.",
      "Get medical help if chest pains or a very quick or irregular heartbeat continue after a panic attack.",
      "See a GP about chest pain that comes and goes, or palpitations that keep coming back.",
      CRISIS,
    ],
    tryThisWeek: [
      "Learn the chest pain signs for 999.",
      "Know when to get help after an attack.",
      "See a GP about pain that comes and goes.",
    ],
    ask: "Should my heart be checked, and which symptoms mean I should call 999?",
    interactive: {
      kind: "scenarios",
      title: "Panic, or call 999?",
      scenarios: [
        {
          id: "squeezing",
          situation: "Sudden squeezing pain in your chest that is not going away.",
          options: [{ text: "Call 999", best: true }, { text: "Wait to see if it is panic" }],
          why: "Call 999 if you get sudden pain or discomfort in your chest that does not go away. You could be having a heart attack.",
        },
        {
          id: "spreading",
          situation: "Chest pain spreading to your left arm and jaw.",
          options: [{ text: "Call 999", best: true }, { text: "Try a breathing exercise first" }],
          why: "Call 999 if the pain spreads to your left or right arm, or your neck, jaw, stomach or back.",
        },
        {
          id: "after",
          situation: "The attack is over, but your heart is still racing unevenly.",
          options: [{ text: "Get medical help", best: true }, { text: "Ignore it" }],
          why: "Get medical help if, after a panic attack, you have chest pains or a heartbeat that is very quick or not regular.",
        },
        {
          id: "comes-goes",
          situation: "Chest pain that comes and goes, and you are worried.",
          options: [{ text: "See a GP", best: true }, { text: "Search your symptoms online" }],
          why: "See a GP if you have chest pain that comes and goes, or that goes away quickly but you are still worried.",
        },
        {
          id: "driving",
          situation: "You think you need A&E for chest pain.",
          options: [{ text: "Call 999 for advice", best: true }, { text: "Drive yourself there" }],
          why: "Do not drive yourself to A&E. The person you speak to at 999 will give you advice about what to do.",
        },
      ],
    },
    sources: [NHS_PANIC, NHS_CHEST_PAIN, NHS_HEART_ATTACK, NHS_PALPITATIONS, RETHINK_PANIC, NHS_AGO_DIAGNOSIS, NP_HEART, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Should you drive yourself to A&E with possible heart attack symptoms?",
      options: [{ text: "No, call 999", right: true }, { text: "Yes, it is quicker" }, { text: "Only if the pain eases" }],
      why: "Do not drive yourself to A&E. The person you speak to at 999 will give you advice about what to do.",
    },
  },
  {
    id: "pnc-support",
    kicker: "Support",
    question: "Where can I find support groups for panic?",
    hook: "Talking to people who know what a panic attack feels like can make it less lonely. UK charities run helplines, chats and groups.",
    short: "Panic disorder can have a big impact on your life, but support is available. It might help to speak to other people with the same condition, or to connect with a charity such as No Panic, Anxiety UK or Triumph Over Phobia. You can also ask your GP about support groups near you.",
    sections: [
      {
        heading: "Why a group can help",
        paragraphs: [
          "It might help to speak to other people with the same condition, or to connect with a charity. Ask your GP about support groups for panic disorder near you.",
          "Rethink Mental Illness says hearing about the experiences of others can help you feel understood, less alone and more confident. The Royal College of Psychiatrists says a self-help group lets you find out how other people manage their anxiety.",
        ],
      },
      {
        heading: "No Panic",
        paragraphs: [
          "The No Panic helpline, 0300 772 9844, is open from 10am to 10pm every day of the year and is staffed by trained volunteers. Calls cost no more than a national rate call to an 01 or 02 number.",
          "No Panic members can join Anxiety Support Chat, a weekly online text chat on Monday evenings, where regular topics include agoraphobia and health anxiety. Membership has a yearly charge.",
        ],
      },
      {
        heading: "Anxiety UK",
        paragraphs: [
          "Anxiety UK runs online, peer-led anxiety support groups, facilitated by staff with lived experience of anxiety. They are free for members, and some groups are open to non-members too.",
          "Anxiety UK is not a crisis service. If you need immediate mental health support, it points to the NHS on 111, option 2, or Samaritans on 116 123.",
        ],
      },
      {
        heading: "Triumph Over Phobia",
        paragraphs: [
          "Triumph Over Phobia UK runs online self-help groups, led by trained volunteers, many of whom have lived with OCD or phobias themselves. It says it is not accepting new referrals at the moment, but its groups are still running and you can register your interest.",
        ],
      },
      {
        heading: "You are not alone",
        paragraphs: [
          "Try not to tell yourself that you are alone: most people experience anxiety or fear at some point in their life. You can contact Samaritans on 116 123 if you need someone to talk to at any time, day or night.",
        ],
      },
    ],
    helps: [
      "Ask your GP about support groups for panic disorder near you.",
      "Call the No Panic helpline on 0300 772 9844, from 10am to 10pm every day.",
      "Look at Anxiety UK's online support groups, run by people with lived experience of anxiety.",
      "Talk about your feelings to a friend, family member, health professional or counsellor.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask your GP about local groups.",
      "Save the No Panic helpline number.",
      "Talk to someone you trust.",
    ],
    ask: "Are there support groups for panic disorder near here?",
    interactive: {
      kind: "flip-cards",
      title: "Where to find support",
      intro: "Turn each card to see when each one is there and what it offers.",
      cards: [
        { id: "gp", front: "Your GP", when: "To find groups near you", back: "Ask your GP about support groups for panic disorder near you." },
        { id: "no-panic", front: "No Panic helpline", when: "10am to 10pm, every day", back: "Trained volunteers on 0300 772 9844. Calls cost no more than a national rate call." },
        { id: "crisis-message", front: "No Panic crisis message", when: "Any time, day or night", back: "A recorded breathing exercise to help you through an attack, on 01952 680835." },
        { id: "chat", front: "Anxiety Support Chat", when: "Monday evenings, for No Panic members", back: "A weekly online text chat where members support each other and share tips." },
        { id: "anxiety-uk", front: "Anxiety UK groups", when: "Online and peer-led", back: "Facilitated by staff with lived experience of anxiety. Free for Anxiety UK members." },
        { id: "samaritans", front: "Samaritans", when: "Any time, day or night", back: "Call 116 123 if you need someone to talk to." },
      ],
    },
    sources: [NHS_PANIC, NP_HELPLINE, NP_CHAT, NP_MEMBER, AUK_CONTACT, AUK_GROUPS, AUK_MEMBER, TOP_UK, RCPSYCH_GAD, RETHINK_ANXIETY, NHS_AFP, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When is the No Panic helpline open?",
      options: [{ text: "10am to 10pm, every day of the year", right: true }, { text: "Weekdays only, office hours" }, { text: "Only at night" }],
      why: "The No Panic helpline, 0300 772 9844, is open from 10am to 10pm every day of the year.",
    },
  },
];
