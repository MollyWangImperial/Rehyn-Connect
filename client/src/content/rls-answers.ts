import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Restless legs syndrome page's pieces (content/library-conditions/mind-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (nhs.uk and NHS inform),
// NICE's Clinical Knowledge Summary on restless legs syndrome, RLS-UK, The Sleep Charity and the Royal College of
// Psychiatrists. mind.org.uk could not be read today (it answers 403), so no Mind page is cited. Every answer ends
// its "What helps" list with the crisis routes exactly as the NHS gives them (111 mental health option, Samaritans
// 116 123, Shout 85258, 999 or A&E). No medicine doses are given, and no medicine should be stopped or changed
// without the doctor. General information only; it never replaces what a person's own GP or specialist says.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const emm = (label: string, path: string): LearnSource => ({ label: `NHS Every Mind Matters: ${label}`, url: `https://www.nhs.uk/every-mind-matters/${path}` });
const cks = (label: string, path: string): LearnSource => ({ label: `NICE CKS: Restless legs syndrome, ${label}`, url: `https://cks.nice.org.uk/topics/restless-legs-syndrome/${path}` });
const rlsuk = (label: string, path: string): LearnSource => ({ label: `RLS-UK: ${label}`, url: `https://www.rls-uk.org/${path}` });
const sleepCharity = (label: string, path: string): LearnSource => ({ label: `The Sleep Charity: ${label}`, url: `https://thesleepcharity.org.uk/${path}` });

const NHS_RLS = nhs("Restless legs syndrome", "conditions/restless-legs-syndrome/");
const NHSI_RLS: LearnSource = { label: "NHS inform: Restless legs syndrome", url: "https://www.nhsinform.scot/illnesses-and-conditions/brain-nerves-and-spinal-cord/restless-legs-syndrome/" };
const NHS_IDA = nhs("Iron deficiency anaemia", "conditions/iron-deficiency-anaemia/");
const NHS_INSOMNIA = nhs("Insomnia", "conditions/insomnia/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_BREATHING = nhs("Breathing exercises for stress", "mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/");
const NHS_ROPINIROLE = nhs("About ropinirole", "medicines/ropinirole/about-ropinirole/");
const NHS_ROPINIROLE_SE = nhs("Side effects of ropinirole", "medicines/ropinirole/side-effects-of-ropinirole/");
const NHS_ROPINIROLE_CQ = nhs("Common questions about ropinirole", "medicines/ropinirole/common-questions-about-ropinirole/");
const NHS_PREGABALIN = nhs("About pregabalin", "medicines/pregabalin/about-pregabalin/");
const NHS_GABAPENTIN = nhs("About gabapentin", "medicines/gabapentin/about-gabapentin/");
const NHS_PREG_TIRED = nhs("Tiredness and sleep problems in pregnancy", "pregnancy/common-symptoms/tiredness/");
const NHS_ALCOHOL = nhs("Alcohol-use disorder", "conditions/alcohol-use-disorder/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const EMM_SLEEP = emm("Sleep problems", "mental-health-issues/sleep/");
const EMM_FALL_ASLEEP = emm("How to fall asleep faster and sleep better", "mental-wellbeing-tips/how-to-fall-asleep-faster-and-sleep-better/");

const CKS_SUMMARY: LearnSource = { label: "NICE CKS: Restless legs syndrome", url: "https://cks.nice.org.uk/topics/restless-legs-syndrome/" };
const CKS_CAUSES = cks("causes", "background-information/causes/");
const CKS_COMPLICATIONS = cks("complications", "background-information/complications/");
const CKS_PREVALENCE = cks("prevalence", "background-information/prevalence/");
const CKS_INVESTIGATIONS = cks("investigations", "diagnosis/investigations/");
const CKS_MANAGEMENT = cks("management", "management/management/");

const RLSUK_HOME = rlsuk("Supporting people with restless legs syndrome", "");
const RLSUK_WHAT = rlsuk("What is RLS?", "what-is-rls");
const RLSUK_SYMPTOMS = rlsuk("Symptoms & diagnosis", "symptoms-diagnosis");
const RLSUK_LIVING = rlsuk("Living with RLS", "living-with-rls");
const RLSUK_MEDICAL = rlsuk("Managing your RLS with medication", "medical-treatments");
const RLSUK_AVOID = rlsuk("Medications to avoid", "medications-avoid");
const RLSUK_SELF = rlsuk("Self-management of RLS", "non-medical-treatments");
const RLSUK_PLMD = rlsuk("Periodic limb movement disorder", "periodic-leg-movement");
const RLSUK_PREGNANCY = rlsuk("RLS in pregnancy", "rls-in-pregnancy");
const RLSUK_AUGMENTATION = rlsuk("Augmentation & rebound", "augmentation-rebound");
const RLSUK_FAQS = rlsuk("Frequently asked questions", "faqs");
const RLSUK_CONTACT = rlsuk("Contact us", "contact");
const RLSUK_MEMBERSHIP = rlsuk("Membership", "rls-uk-membership");
const RLSUK_VIDEOS = rlsuk("Video stories", "video-stories");

const SC_RLS = sleepCharity("Restless leg syndrome", "adults/sleep-disorders/restless-leg-syndrome/");
const SC_HELPLINE = sleepCharity("National Sleep Helpline", "national-sleep-helpline/");

const RCPSYCH_SLEEP: LearnSource = { label: "Royal College of Psychiatrists: Sleeping well", url: "https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/sleeping-well" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

/** The crisis routes, worded as the NHS gives them (NHS_URGENT and NHS_SUICIDAL); the last "What helps" line of every answer. */
const CRISIS = "If you need urgent help, call 111 and select the mental health option, call Samaritans on 116 123, or text \"SHOUT\" to 85258. Call 999 or go to A&E if you cannot keep yourself safe.";

export const rlsAnswers: LearnArticle[] = [
  {
    id: "rls-what-it-is",
    kicker: "Understanding",
    question: "What is restless legs syndrome?",
    hook: "An urge to move your legs that arrives just as you sit down or settle into bed. Moving eases it, but only for a while.",
    short: "Restless legs syndrome (RLS) is a common condition of the nervous system that causes an overwhelming urge to move the legs, often with uncomfortable feelings such as tingling, burning or throbbing. Symptoms are usually worse in the evening and at night when resting, and they can affect sleep. Moving or rubbing the legs eases them for a while, and treatment depends on what is causing it.",
    sections: [
      {
        heading: "An urge to move",
        paragraphs: [
          "Restless legs syndrome, also known as Willis-Ekbom disease, is a common condition of the nervous system. It causes an overwhelming, irresistible urge to move the legs.",
          "Many people also have uncomfortable feelings in their legs, such as tingling, throbbing or itching, and some have pain. Some people have symptoms in other parts of the body too, such as the arms.",
        ],
      },
      {
        heading: "What it feels like",
        paragraphs: [
          "The feeling has been described as tingling, burning, itching or throbbing, a creepy-crawly feeling, or like fizzy water inside the blood vessels in the legs. Some people feel a painful, cramping sensation, particularly in the calves.",
          "RLS-UK says the sensations are most often compared to an itch you cannot scratch, or a tickle that will not stop.",
        ],
      },
      {
        heading: "Worse at rest and at night",
        paragraphs: [
          "Symptoms are usually worse in the evening and at night, and they come on or get worse when you are resting, sitting or lying still. Moving, walking, stretching or rubbing the legs usually eases them, but they tend to come back soon after resting again.",
          "Symptoms tend to be worse in a confined space, such as a cinema seat, a car or an aeroplane. You may find it difficult to sit for long periods of time, like on a long train journey.",
        ],
      },
      {
        heading: "Mild for some, severe for others",
        paragraphs: [
          "Some people have symptoms occasionally, while others have them every day. RLS-UK describes it as a spectrum: for some it is a minor annoyance, while for others it causes major disruption to sleep and quality of life.",
          "It can start at any age, including childhood, but it is more common in middle age, and women are twice as likely to get it as men. As many as 1 in 10 people are affected at some point in their life.",
        ],
      },
      {
        heading: "Not dangerous, and often treatable",
        paragraphs: [
          "Restless legs syndrome is not life threatening, but severe cases can disrupt sleep and trigger anxiety and depression.",
          "Where another condition is causing it, treating that may help. RLS-UK says that once it is correctly diagnosed, RLS can often be treated successfully.",
        ],
      },
    ],
    helps: [
      "See a GP if restless legs are stopping you sleeping, affecting your mental health, or not helped by things you have tried yourself.",
      "Try walking, stretching or massaging your legs when you have symptoms.",
      "Go to bed and wake up at the same time every day, and keep your bedroom dark and quiet.",
      "Be ready to tell the GP about the pattern of your symptoms, as they will ask about it.",
      CRISIS,
    ],
    tryThisWeek: [
      "Walk or stretch when it starts.",
      "Keep regular sleep times.",
      "Note the pattern of your symptoms.",
    ],
    ask: "Could this be restless legs syndrome, and could something like low iron be causing it?",
    interactive: {
      kind: "signs",
      title: "What you might notice",
      intro: "Tick any that sound familiar. Restless legs usually show up at rest, in the evening or at night.",
      signs: ["A strong urge to move your legs", "Tingling, burning, itching or throbbing", "A creepy-crawly feeling in the legs", "Pain or cramping, often in the calves", "Worse when sitting or lying still", "Worse in the evening or at night", "Eased for a while by moving or rubbing", "Similar feelings in the arms"],
      after: "Some conditions, such as leg cramps and peripheral neuropathy, can cause similar symptoms. See a GP if it is stopping you sleeping or affecting your mental health.",
      copyHeading: "Restless legs symptoms I notice",
    },
    sources: [NHS_RLS, NHSI_RLS, RLSUK_WHAT, SC_RLS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When are symptoms of restless legs syndrome usually worse?",
      options: [{ text: "In the evening and at night, when resting", right: true }, { text: "First thing in the morning, when walking" }, { text: "Only during exercise" }],
      why: "Symptoms are usually worse in the evening and at night, and they come on or get worse when you are resting, sitting or lying still.",
    },
  },
  {
    id: "rls-causes",
    kicker: "Causes",
    question: "What causes restless legs, and could it be my iron or my medicines?",
    hook: "Often there is no clear cause. But low iron, pregnancy, kidney disease and some medicines can bring it on or make it worse, and those can be looked at.",
    short: "Restless legs syndrome is thought to be linked to the levels of iron and the brain chemical dopamine. There is usually no clear cause, and it can run in families, but it can also be linked to pregnancy, iron deficiency anaemia, kidney disease and some medicines. Treating a cause such as low iron may help.",
    sections: [
      {
        heading: "Iron and dopamine",
        paragraphs: [
          "Restless legs syndrome is thought to be linked to the levels of iron and the brain chemical dopamine in your body. Dopamine helps control muscle activity and movement.",
          "Dopamine levels naturally fall towards the end of the day, which may explain why symptoms are often worse in the evening and at night. Iron is known to have a crucial role in how the brain handles dopamine.",
        ],
      },
      {
        heading: "Primary: no clear cause, often in families",
        paragraphs: [
          "There is usually no clear cause, but you are more likely to get it if someone in your family also has it. This is called primary or idiopathic restless legs syndrome, and it is the more common type.",
          "When it runs in families, symptoms usually start before the age of 40. NICE's clinical knowledge summary says up to half of people affected have a family history of it.",
        ],
      },
      {
        heading: "Secondary: linked to another condition",
        paragraphs: [
          "Secondary restless legs syndrome happens as a complication of another health condition. It can be linked to iron deficiency anaemia, chronic kidney disease, diabetes, Parkinson's disease, rheumatoid arthritis, an underactive thyroid gland and fibromyalgia.",
          "It is also linked to pregnancy, when symptoms usually go away after giving birth. RLS-UK says almost half of people with kidney disease also have restless legs.",
        ],
      },
      {
        heading: "Medicines and other triggers",
        paragraphs: [
          "Some medicines can make symptoms worse. These include some antidepressants, antipsychotics, lithium, calcium channel blockers, some antihistamines and metoclopramide, a medicine for sickness.",
          "RLS-UK says antihistamines, including those in some cold and allergy remedies, can make symptoms worse for some people, and suggests always choosing non-drowsy options.",
          "Other possible triggers include smoking, too much caffeine or alcohol, being overweight, stress and lack of exercise.",
        ],
      },
      {
        heading: "Do not stop a medicine on your own",
        paragraphs: [
          "Do not stop taking any medicine you have been prescribed without checking with your GP first, as suddenly stopping can make you unwell. Let your doctor know if your symptoms get worse after starting a new medicine, as a change of dose or a different medicine may help.",
          "For people whose restless legs are caused by a medical condition, treating that condition can relieve or improve the symptoms.",
        ],
      },
    ],
    helps: [
      "Ask your GP whether any of your medicines could be making your symptoms worse.",
      "Never stop a prescribed medicine without checking with your GP first.",
      "Choose non-drowsy options when buying cold, flu or allergy remedies.",
      "If you have low iron in your blood, iron supplements may help, so ask about blood tests.",
      "Get help to stop smoking, and cut down on caffeine and alcohol.",
      CRISIS,
    ],
    tryThisWeek: [
      "List your medicines for the GP.",
      "Pick non-drowsy cold remedies.",
      "Cut down on caffeine.",
    ],
    ask: "Could any of my medicines, my iron levels or another condition be causing my restless legs?",
    interactive: {
      kind: "risk-check",
      title: "What could be adding to it?",
      intro: "Tick any that apply. Some can be treated or changed with your doctor's help.",
      items: [
        { id: "family", label: "Someone in your family has it", note: "Restless legs often run in families. This cannot be changed, but restless legs can often be treated.", changeable: false },
        { id: "iron", label: "Low iron or anaemia", note: "If you have low iron in your blood, iron supplements may help. Ask about blood tests.", changeable: true },
        { id: "pregnancy", label: "Being pregnant", note: "Symptoms usually go away after giving birth.", changeable: false },
        { id: "kidney", label: "Kidney disease", note: "If another condition is causing restless legs, treating that may help.", changeable: false },
        { id: "medicines", label: "Some antidepressants or antihistamines", note: "Some medicines make symptoms worse. Talk to your GP, and do not stop a prescribed medicine on your own.", changeable: true },
        { id: "habits", label: "Smoking, caffeine or alcohol", note: "These can make symptoms worse. Get help to stop smoking, and cut down on caffeine and alcohol.", changeable: true },
      ],
    },
    sources: [NHS_RLS, NHSI_RLS, CKS_CAUSES, RLSUK_AVOID, RLSUK_WHAT, RLSUK_FAQS, RLSUK_SELF, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What should you do if you think a medicine is making your restless legs worse?",
      options: [{ text: "Talk to your GP before changing anything", right: true }, { text: "Stop taking it straight away" }, { text: "Take a drowsy cold remedy to sleep" }],
      why: "Do not stop taking any medicine you have been prescribed without checking with your GP first, as suddenly stopping can make you unwell.",
    },
  },
  {
    id: "rls-sleep",
    kicker: "Sleep",
    question: "Why do restless legs ruin my sleep, and what are the leg jerks at night?",
    hook: "The urge often starts just as you settle down to sleep. Many people also have leg jerks in the night that can wake them, or their partner.",
    short: "Restless legs syndrome usually interferes with sleep, because symptoms tend to start or get worse when you lie down in the evening. Up to 80% of people with it also have periodic limb movements in sleep: brief, repeated jerks of the legs at night. Together they can lead to long nights and tiredness the next day.",
    sections: [
      {
        heading: "Just as you settle down",
        paragraphs: [
          "In many cases, symptoms begin when a person goes to bed. Just as they start to relax, the symptoms appear and they have to get out of bed to stretch, sometimes many times in one night.",
          "Because it usually interferes with sleep, RLS-UK says it is also considered a sleep disorder. Restless legs syndrome is one of the conditions the NHS lists as a cause of insomnia.",
        ],
      },
      {
        heading: "Leg jerks in the night",
        paragraphs: [
          "Up to 80% of people with restless legs syndrome also have periodic limb movements in sleep. The leg jerks or twitches uncontrollably, usually at night while you are asleep.",
          "The movements are brief and repetitive, usually happening every 10 to 60 seconds. They can be severe enough to wake both you and your partner, and they can also happen when you are awake and resting.",
        ],
      },
      {
        heading: "Tired the next day",
        paragraphs: [
          "Restless legs can lead to long sleepless nights and daytime tiredness. People in work can find it hard to concentrate because of lack of sleep.",
          "RLS-UK says it is common to wake up tired after only light sleep, and that this is treatable. Many people find symptoms affect the first part of the night, so RLS-UK suggests going to bed later and sleeping a little longer in the morning, where possible.",
        ],
      },
      {
        heading: "Better sleep habits",
        paragraphs: [
          "The NHS advises going to bed and waking up at the same time every day, and keeping your bedroom dark and quiet, with curtains, blinds, an eye mask or ear plugs if needed.",
          "Do not have caffeine after midday, do not drink alcohol for at least 2 hours before bed, and do not use electronic devices right before going to bed. Try not to nap during the day.",
          "If you are still awake after around 20 minutes, Every Mind Matters suggests getting up and doing something relaxing, then going back to bed when you feel sleepy.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "See a GP if restless legs are stopping you sleeping or affecting your mental health. If they are disrupting your sleep, you may be sent for sleep tests, which show exactly what happens while you are asleep.",
        ],
      },
    ],
    helps: [
      "Go to bed and wake up at the same time every day.",
      "Have no caffeine after midday, and no alcohol for at least 2 hours before bed.",
      "Do not use phones or other devices right before going to bed.",
      "If you cannot sleep, get up and do something relaxing, then go back to bed when you feel sleepy.",
      "See a GP if restless legs are stopping you sleeping.",
      CRISIS,
    ],
    tryThisWeek: [
      "Keep the same bed and wake times.",
      "No caffeine after midday.",
      "Get up if you cannot sleep.",
    ],
    ask: "Could a sleep test help show what is happening to my legs at night?",
    interactive: {
      kind: "timeline",
      title: "A night with restless legs",
      steps: [
        { id: "evening", when: "Evening", title: "Symptoms build", points: ["Symptoms are usually worse in the evening.", "Sitting still can bring them on."] },
        { id: "bed", when: "Going to bed", title: "Just as you relax", points: ["The urge to move often starts as you settle.", "Getting up to stretch eases it for a while."] },
        { id: "night", when: "In the night", title: "Leg jerks in sleep", points: ["Up to 80% also have leg jerks while asleep.", "They can wake you and your partner."] },
        { id: "morning", when: "Next day", title: "Tired and unrefreshed", points: ["Broken sleep can leave you tired.", "It can be hard to concentrate."] },
        { id: "help", when: "If it keeps happening", title: "See a GP", points: ["Especially if it is stopping you sleeping.", "You may be sent for sleep tests."] },
      ],
    },
    sources: [NHS_RLS, NHSI_RLS, RLSUK_WHAT, RLSUK_PLMD, RLSUK_LIVING, RLSUK_FAQS, NHS_INSOMNIA, EMM_FALL_ASLEEP, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What are periodic limb movements in sleep?",
      options: [{ text: "Brief, repeated leg jerks while you sleep", right: true }, { text: "Sleepwalking" }, { text: "Cramp after exercise" }],
      why: "The movements are brief and repetitive, usually happening every 10 to 60 seconds.",
    },
  },
  {
    id: "rls-diagnosis",
    kicker: "Diagnosis",
    question: "How is restless legs syndrome diagnosed?",
    hook: "There is no single test. A GP diagnoses it from what you describe, and blood tests look for a cause such as low iron.",
    short: "There is no single test for restless legs syndrome. A GP can usually diagnose it from your symptoms, medical and family history and an examination, and may arrange blood tests to look for a cause, such as low iron. Sleep tests are sometimes used if sleep is badly disrupted or the diagnosis is unclear.",
    sections: [
      {
        heading: "No single test",
        paragraphs: [
          "There is no single test for diagnosing restless legs syndrome. A diagnosis is based on your symptoms, medical history, family history, a physical examination and test results.",
          "Your GP should be able to diagnose it. You will be asked about the pattern of your symptoms to help assess how severe they are.",
        ],
      },
      {
        heading: "What doctors look for",
        paragraphs: [
          "Doctors look for an urge to move the legs, usually with unpleasant feelings, that starts or gets worse when you rest, such as lying or sitting.",
          "The urge is partly or fully eased by moving, such as walking or stretching, for as long as you keep moving. It is worse, or only happens, in the evening or at night.",
          "Finally, the symptoms are not explained by something else, such as leg cramps, leg swelling, arthritis or the position you are in.",
        ],
      },
      {
        heading: "Blood tests for a cause",
        paragraphs: [
          "You may be referred for blood tests to find out whether your restless legs are primary or secondary. RLS-UK recommends that tests include ferritin, because restless legs are often linked to iron deficiency, and kidney function.",
          "Other tests may check your blood count, thyroid, blood sugar, folic acid and vitamin B12, guided by your history and examination. NICE advises that iron is best measured in the early morning after an overnight fast.",
        ],
      },
      {
        heading: "Sleep tests and specialists",
        paragraphs: [
          "Usually a sleep study is not needed. But if restless legs are disrupting your sleep, or the diagnosis is in doubt, you may be sent for sleep tests, which show exactly what happens while you are asleep.",
          "If your symptoms get worse or do not improve, you may be referred to a specialist, such as a neurologist or sleep specialist, for more tests and treatment.",
        ],
      },
      {
        heading: "Why it can take time",
        paragraphs: [
          "Restless legs syndrome is often unrecognised or misdiagnosed. RLS-UK says many people are not diagnosed until 10 to 20 years after their symptoms begin, but once it is correctly diagnosed it can often be treated successfully.",
          "In children, it is often wrongly called growing pains.",
        ],
      },
    ],
    helps: [
      "See a GP if your symptoms are stopping you sleeping or affecting your mental health.",
      "Be ready to describe the pattern of your symptoms: when they start, and what eases them.",
      "Ask whether blood tests, including ferritin, could help find a cause.",
      "Mention any family history of restless legs.",
      CRISIS,
    ],
    tryThisWeek: [
      "Note when symptoms start.",
      "Note what eases them.",
      "Ask about a ferritin test.",
    ],
    ask: "Could my blood tests include ferritin and kidney function, to look for a cause?",
    interactive: {
      kind: "flip-cards",
      title: "Checks you might have",
      intro: "Turn each card to see what each check is for.",
      cards: [
        { id: "history", front: "Questions about your symptoms", when: "At the first appointment", back: "The pattern of your symptoms helps the GP diagnose it and judge how severe it is." },
        { id: "ferritin", front: "Ferritin blood test", when: "To check your iron stores", back: "Restless legs are often linked to iron deficiency. Iron is best measured early in the morning, after an overnight fast." },
        { id: "kidney", front: "Kidney function test", when: "To look for a cause", back: "Restless legs may be linked to kidney problems." },
        { id: "other", front: "Blood count, thyroid, sugar, B12", when: "Guided by your history", back: "These look for other causes of secondary restless legs syndrome." },
        { id: "sleep", front: "Sleep tests", when: "If sleep is badly disrupted", back: "They let professionals see exactly what happens while you are asleep." },
      ],
    },
    sources: [NHSI_RLS, NHS_RLS, RLSUK_SYMPTOMS, CKS_INVESTIGATIONS, CKS_SUMMARY, RLSUK_WHAT, RCPSYCH_SLEEP, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Is there a single test that confirms restless legs syndrome?",
      options: [{ text: "No, it is diagnosed from symptoms and history", right: true }, { text: "Yes, a brain scan" }, { text: "Yes, an X-ray of the legs" }],
      why: "There is no single test for diagnosing restless legs syndrome. A diagnosis is based on your symptoms, medical history, family history, a physical examination and test results.",
    },
  },
  {
    id: "rls-self-help",
    kicker: "Self-help",
    question: "Which everyday habits can ease restless legs?",
    hook: "Small changes to caffeine, alcohol, smoking, exercise and bedtime can make a real difference, especially when symptoms are mild.",
    short: "If symptoms are mild, a few lifestyle changes may be enough to ease restless legs. The NHS advises exercising during the day, keeping regular sleep times, avoiding caffeine after midday and alcohol for at least 2 hours before bed, and getting help to stop smoking. RLS-UK says there is no known cure, but lifestyle changes can make it easier to manage.",
    sections: [
      {
        heading: "Where to start",
        paragraphs: [
          "If your symptoms are mild, you may find that making a few lifestyle changes improves them. NICE's clinical knowledge summary says that for people with mild symptoms, explanation, reassurance and self-help may be enough.",
          "RLS-UK says there is currently no known cure, but lifestyle changes and medicines can make restless legs easier to manage.",
        ],
      },
      {
        heading: "Caffeine, alcohol and smoking",
        paragraphs: [
          "The NHS advises not having caffeine, such as tea, coffee or energy drinks, after midday, and not drinking alcohol for at least 2 hours before going to bed. Get help to stop smoking.",
          "RLS-UK suggests avoiding or limiting alcohol, caffeine and nicotine completely, or at least for several hours before bed.",
          "If you drink heavily, do not stop suddenly without medical advice. The NHS says it can be very dangerous to stop drinking suddenly if you are dependent on alcohol.",
        ],
      },
      {
        heading: "Move during the day",
        paragraphs: [
          "Exercise during the day, and take regular, moderate exercise. Some people find that a gentle walk early in the evening helps.",
          "Do not do strenuous exercise or eat a big meal late at night.",
        ],
      },
      {
        heading: "A steady bedtime routine",
        paragraphs: [
          "Try to go to bed and wake up at the same time every day, and take time to relax before bed. A warm bath in the evening, or heat pads on your legs before bed, may help.",
          "Keep your bedroom dark and quiet, and as cool as possible. Do not use electronic devices, like smartphones, right before going to bed.",
        ],
      },
      {
        heading: "Beware of quick fixes",
        paragraphs: [
          "Many websites promise cures for restless legs in the form of gadgets, bracelets or leg wraps. RLS-UK says none of these has proven to be a cure, and advises caution.",
          "Always check with a doctor before taking any supplements. If the things you have tried yourself have not helped, see a GP.",
        ],
      },
    ],
    helps: [
      "Have no caffeine after midday, including tea, coffee and energy drinks.",
      "Do not drink alcohol for at least 2 hours before bed; if you drink heavily, get medical advice before stopping.",
      "Get help to stop smoking.",
      "Exercise during the day, but not strenuously late at night.",
      "Keep regular sleep times, and try a warm bath or heat pads on your legs before bed.",
      CRISIS,
    ],
    tryThisWeek: [
      "No caffeine after midday.",
      "Take a walk during the day.",
      "Try a warm bath before bed.",
    ],
    ask: "Which of my habits might be making my restless legs worse, and can I get help to stop smoking?",
    interactive: {
      kind: "risk-check",
      title: "Habits that can make it worse",
      intro: "Tick any that apply. Each one is something you can change.",
      items: [
        { id: "caffeine", label: "Caffeine after midday", note: "The NHS advises no caffeine, such as tea, coffee or energy drinks, after midday.", changeable: true },
        { id: "alcohol", label: "Alcohol close to bedtime", note: "Do not drink alcohol for at least 2 hours before bed. If you drink heavily, get medical advice before stopping.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Smoking can make symptoms worse. Get help to stop smoking.", changeable: true },
        { id: "late", label: "A big meal or hard exercise late on", note: "The NHS advises not eating a big meal or doing strenuous exercise late at night.", changeable: true },
        { id: "screens", label: "Phone or tablet right before bed", note: "Do not use electronic devices, like smartphones, right before going to bed.", changeable: true },
        { id: "naps", label: "Napping during the day", note: "The NHS advises not napping during the day.", changeable: true },
      ],
    },
    sources: [NHS_RLS, NHSI_RLS, RLSUK_SELF, SC_RLS, CKS_SUMMARY, NHS_ALCOHOL, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "After what time does the NHS advise avoiding caffeine if you have restless legs?",
      options: [{ text: "Midday", right: true }, { text: "Bedtime" }, { text: "Midnight" }],
      why: "The NHS advises not having caffeine, such as tea, coffee or energy drinks, after midday.",
    },
  },
  {
    id: "rls-iron",
    kicker: "Iron",
    question: "What has iron got to do with restless legs?",
    hook: "Low iron is one of the causes that can be treated. A blood test for ferritin shows how much iron your body has stored.",
    short: "Restless legs syndrome is thought to be linked to iron levels, and low iron can bring it on or make it worse. A blood test can check your stored iron, measured by a protein called ferritin. If your iron is low, your doctor may recommend iron supplements, which may ease symptoms.",
    sections: [
      {
        heading: "Why iron matters",
        paragraphs: [
          "Restless legs syndrome is thought to be linked to the levels of iron and the brain chemical dopamine. In the brain, iron helps dopamine to work.",
          "In the evening and at night, when symptoms are worst, both iron and dopamine levels dip. NICE's clinical knowledge summary says iron deficiency is present in about 24% of people with restless legs, although most people with iron deficiency do not have it.",
        ],
      },
      {
        heading: "Ferritin, not just iron",
        paragraphs: [
          "A simple blood iron level is not enough. Ferritin is a protein that iron binds to, so measuring it gives a useful picture of how much iron your body has in store.",
          "RLS-UK says iron in the blood can go up and down with diet, stress and sleep, so ferritin is more accurate. NICE advises a full iron check, measured in the early morning after an overnight fast.",
          "What counts as a normal ferritin level varies from one laboratory to another.",
        ],
      },
      {
        heading: "Treating low iron",
        paragraphs: [
          "If you have low levels of iron in your blood, you may need iron supplements. If restless legs are linked to low iron, iron supplements can be taken on the advice of your GP.",
          "RLS-UK says that if ferritin is low or at the lower end of normal, it is reasonable to try iron tablets and then recheck ferritin. It says iron can help even in people who are not anaemic.",
          "Too much iron is not good either, so ferritin levels need to be monitored.",
        ],
      },
      {
        heading: "Taking iron tablets",
        paragraphs: [
          "For iron deficiency anaemia, iron tablets are usually taken for about 6 months. Drinking orange juice after a tablet may help your body absorb the iron, and taking tablets with or soon after food may reduce side effects.",
          "Side effects can include constipation or diarrhoea, tummy pain, heartburn, feeling sick and darker poo. Keep iron tablets out of the reach of children.",
        ],
      },
      {
        heading: "Food, and finding a cause",
        paragraphs: [
          "Iron-rich foods include dark-green leafy vegetables, fortified cereals and bread, meat, dried fruit and pulses. Large amounts of tea, coffee, milk and dairy make it harder for your body to absorb iron.",
          "Heavy periods and pregnancy are very common causes of iron deficiency anaemia. If the reason is not clear, the GP may do other tests to find out why.",
        ],
      },
    ],
    helps: [
      "Ask your GP whether your ferritin should be checked.",
      "If iron tablets are recommended, follow the GP's advice on how to take them.",
      "Take iron tablets with or soon after food to reduce side effects.",
      "Eat more iron-rich foods, such as dark-green leafy vegetables, pulses and fortified cereals.",
      "Do not take extra iron without advice, as too much iron is not good either.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask about a ferritin test.",
      "Add an iron-rich food.",
      "Take iron tablets with food.",
    ],
    ask: "Could you check my ferritin, and is it low enough that iron might help my restless legs?",
    interactive: {
      kind: "timeline",
      title: "From blood test to iron treatment",
      steps: [
        { id: "test", when: "First", title: "A ferritin blood test", points: ["Shows how much iron your body has stored.", "Best taken early morning, after an overnight fast."] },
        { id: "cause", when: "If it is low", title: "Finding the reason", points: ["Heavy periods and pregnancy are common causes.", "The GP may do other tests if it is not clear."] },
        { id: "tablets", when: "Treatment", title: "Iron tablets", points: ["Take them with or soon after food.", "For anaemia, usually for about 6 months."] },
        { id: "recheck", when: "Over the next months", title: "Checking again", points: ["Repeat blood tests check your iron is rising.", "Too much iron is not good either."] },
      ],
    },
    sources: [NHS_RLS, RLSUK_FAQS, CKS_INVESTIGATIONS, CKS_CAUSES, NHS_IDA, RLSUK_MEDICAL, SC_RLS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Which blood test shows how much iron your body has stored?",
      options: [{ text: "Ferritin", right: true }, { text: "Cholesterol" }, { text: "Blood sugar" }],
      why: "Ferritin is a protein that iron binds to, so measuring it gives a useful picture of how much iron your body has in store.",
    },
  },
  {
    id: "rls-medicines",
    kicker: "Treatment",
    question: "Which medicines help restless legs, and what are the risks?",
    hook: "Medicines can help when self-help is not enough. The first choice has changed, because some older medicines can make restless legs worse over time.",
    short: "For more troublesome symptoms, a doctor may suggest pregabalin or gabapentin, now the recommended first medicines, a painkiller such as codeine or tramadol, or short-term help with sleep. Medicines that increase dopamine, such as ropinirole, were once used first, but they can make symptoms worse over time, so they are now for occasional use or when other medicines have not worked. Never stop or change a medicine without your doctor.",
    sections: [
      {
        heading: "When medicines are used",
        paragraphs: [
          "Treatment depends on what is causing restless legs. If another condition is causing it, treating that may help, and your doctor might check your other medicines, as some can make symptoms worse.",
          "For people with moderate or severe symptoms, NICE's clinical knowledge summary says to consider medicine. Treatment for restless legs with no clear cause aims to control symptoms, and is likely to be lifelong.",
          "RLS-UK says you should always speak to your doctor about medication.",
        ],
      },
      {
        heading: "Pregabalin and gabapentin",
        paragraphs: [
          "Pregabalin or gabapentin are now the recommended first medicines for people with frequent or daily symptoms. Both are used off-label for restless legs.",
          "They are usually taken in the evening, when symptoms are worse. The NHS says it takes at least a few weeks for them to work, and common side effects include feeling sleepy and dizzy.",
          "Some people can become addicted to them, so when stopping, the dose needs to be reduced gradually. RLS-UK says side effects can include depression and suicidal thoughts, which should be watched for.",
        ],
      },
      {
        heading: "Painkillers and sleep medicines",
        paragraphs: [
          "A painkiller such as codeine or tramadol is an alternative, particularly for painful symptoms, but the risk of dependence should always be considered. For significant sleep disturbance, a short or occasional course of a sleep medicine may be considered.",
        ],
      },
      {
        heading: "Dopamine medicines and augmentation",
        paragraphs: [
          "Medicines that increase dopamine, such as ropinirole, are used occasionally or if other medicines have not worked. They were once the first choice, but there is a high rate of augmentation, which means the medicine itself makes restless legs worse over time.",
          "Signs of augmentation include symptoms starting earlier in the day, coming on more quickly at rest, spreading to the arms or body, or your usual dose no longer working. RLS-UK says anyone taking these medicines should arrange a review with their doctor.",
          "Call a doctor or 111 if, while taking ropinirole, you start binge eating, gambling or shopping uncontrollably, or have an unusually high sex drive. Do the same if you feel unusually sleepy or suddenly fall asleep during the day.",
        ],
      },
      {
        heading: "Never stop suddenly",
        paragraphs: [
          "Do not stop taking ropinirole suddenly, as this can lead to serious withdrawal symptoms, such as changes in mood, tiredness, sweating and pain. If you need to stop, your doctor or specialist nurse will reduce the dose gradually.",
          "If your symptoms get worse or do not improve, you may be referred to a specialist for more tests and treatment.",
        ],
      },
    ],
    helps: [
      "Talk to your doctor before starting, stopping or changing any medicine for restless legs.",
      "If you take ropinirole, pramipexole or rotigotine, arrange a review with your doctor about augmentation.",
      "Tell your doctor if your symptoms start earlier, spread, or your usual dose stops working.",
      "Call a doctor or 111 if you notice uncontrollable gambling, shopping or binge eating while taking ropinirole.",
      "Do not drive, cycle or use machinery if a medicine makes you feel dizzy or sleepy.",
      CRISIS,
    ],
    tryThisWeek: [
      "Note any change in your symptoms.",
      "Ask for a medicine review.",
      "Never stop a medicine suddenly.",
    ],
    ask: "Is my medicine still the right one for me, and could augmentation be making my symptoms worse?",
    interactive: {
      kind: "flip-cards",
      title: "Restless legs medicines, card by card",
      intro: "Turn each card to see when each medicine is used and what to know.",
      cards: [
        { id: "iron", front: "Iron supplements", when: "If your iron is low", back: "Treating low iron may help. Follow your GP's advice on how to take them." },
        { id: "a2d", front: "Pregabalin or gabapentin", when: "Now the usual first medicine", back: "Usually taken in the evening. They take at least a few weeks to work, and must be reduced gradually when stopping." },
        { id: "opioid", front: "Codeine or tramadol", when: "An alternative, especially for pain", back: "Can help painful symptoms. The risk of dependence should always be considered." },
        { id: "sleep", front: "Sleep medicines", when: "Short-term, if sleep is badly hit", back: "A short or occasional course may be considered for significant sleep disturbance." },
        { id: "dopamine", front: "Ropinirole and similar medicines", when: "Occasionally, or if others fail", back: "Can make restless legs worse over time (augmentation). Never stop suddenly: your doctor will reduce the dose gradually." },
      ],
    },
    sources: [NHS_RLS, CKS_MANAGEMENT, RLSUK_MEDICAL, RLSUK_AUGMENTATION, NHS_ROPINIROLE_SE, NHS_ROPINIROLE_CQ, NHS_PREGABALIN, NHS_GABAPENTIN, NHS_ROPINIROLE, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "What is augmentation?",
      options: [{ text: "When a medicine makes restless legs worse over time", right: true }, { text: "A type of iron tablet" }, { text: "A kind of sleep test" }],
      why: "There is a high rate of augmentation, which means the medicine itself makes restless legs worse over time.",
    },
  },
  {
    id: "rls-in-the-moment",
    kicker: "In the moment",
    question: "What can I do when restless legs strike?",
    hook: "When the urge takes hold, moving is often the quickest relief. Warmth, massage and a busy mind can help too.",
    short: "During an episode, walking, stretching or massaging your legs can ease symptoms, as can a warm bath, heat pads, or a hot or cold compress. Keeping your mind busy, with reading, a game or a puzzle, and relaxation exercises can also help.",
    sections: [
      {
        heading: "Move",
        paragraphs: [
          "Try walking, stretching or massaging your legs when you are having symptoms. Moving the affected part of the body can ease the sensations for a while.",
          "RLS-UK says daily stretching and meditation can promote a sense of relaxation and help ease symptoms.",
        ],
      },
      {
        heading: "Warmth or cold",
        paragraphs: [
          "Try having a warm bath or using heat pads on your legs before you go to bed. During an episode, a hot or cold compress on your leg muscles may help.",
          "Some people find a hot or cool bath before bedtime helps.",
        ],
      },
      {
        heading: "Keep your mind busy",
        paragraphs: [
          "Try doing things to distract yourself from your symptoms, such as reading, or doing a game or puzzle. NHS inform also suggests watching television.",
        ],
      },
      {
        heading: "Relax",
        paragraphs: [
          "Relaxation exercises, like yoga or tai chi, may help relieve symptoms during an episode. NICE's clinical knowledge summary also lists relaxation exercises and distraction among the ways to relieve an attack.",
          "The NHS calming breathing exercise takes just a few minutes and can be done anywhere. Breathe gently into your belly, in through your nose and out through your mouth, counting from 1 to 5 if it helps, for at least 5 minutes.",
        ],
      },
      {
        heading: "If attacks keep coming",
        paragraphs: [
          "If you have tried things you can do yourself and they have not helped, see a GP.",
        ],
      },
    ],
    helps: [
      "Walk, stretch or massage your legs when symptoms start.",
      "Try a warm bath or heat pads on your legs before bed.",
      "Use a hot or cold compress on your leg muscles during an episode.",
      "Distract yourself with reading, a game or a puzzle.",
      "Try relaxation exercises, such as yoga or a calming breathing exercise.",
      CRISIS,
    ],
    tryThisWeek: [
      "Walk or stretch when it starts.",
      "Try heat pads before bed.",
      "Distract yourself with a puzzle.",
    ],
    ask: "Which of these is most likely to help me, and when should I think about other treatment?",
    interactive: {
      kind: "flip-cards",
      title: "Ways to ease an attack",
      intro: "Turn each card to see when each one can help.",
      cards: [
        { id: "move", front: "Walk and stretch", when: "As soon as symptoms start", back: "Moving eases the sensations for a while, though they can come back when you rest again." },
        { id: "massage", front: "Massage", when: "During an episode", back: "Massaging your legs is one of the things the NHS suggests when you are having symptoms." },
        { id: "heat", front: "Warm bath or heat pads", when: "Before bed", back: "Warmth on your legs before you go to bed may help." },
        { id: "compress", front: "Hot or cold compress", when: "During an episode", back: "Applied to your leg muscles, it may help relieve symptoms." },
        { id: "distract", front: "A book, game or puzzle", when: "At times of rest", back: "Distraction can take your mind off your symptoms." },
        { id: "relax", front: "Yoga, tai chi or breathing", when: "To calm body and mind", back: "Relaxation exercises may help relieve symptoms during an episode." },
      ],
    },
    sources: [NHS_RLS, NHSI_RLS, CKS_MANAGEMENT, RLSUK_SELF, RLSUK_WHAT, NHS_BREATHING, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Which of these may help during an episode of restless legs?",
      options: [{ text: "Walking, stretching or massaging your legs", right: true }, { text: "Lying completely still" }, { text: "Drinking a strong coffee" }],
      why: "Try walking, stretching or massaging your legs when you are having symptoms.",
    },
  },
  {
    id: "rls-evenings",
    kicker: "Daily life",
    question: "How do I cope with evenings, travel and long spells of sitting?",
    hook: "Cinemas, long flights and car journeys can be hard when your legs will not keep still. A little planning helps.",
    short: "Restless legs are usually worse when sitting still, especially in a confined space such as a cinema seat, a car or a plane. RLS-UK suggests asking for an aisle seat so you can get up and move, and stopping regularly on car journeys for a good stretch. Calm evenings without late caffeine, alcohol or big meals help too.",
    sections: [
      {
        heading: "Why sitting is hard",
        paragraphs: [
          "Symptoms tend to be worse in a confined space, such as a cinema seat, a car or an aeroplane, or when you are relaxing and sitting down. You may find it difficult to sit for long periods, like on a long train journey.",
          "RLS-UK says social events such as going to the cinema or going on a long flight are often avoided because of it.",
        ],
      },
      {
        heading: "Choosing where you sit",
        paragraphs: [
          "When travelling by train or plane, try to choose a seat where you can easily get up and move. Ask for an aisle seat when checking in for a flight, or going to the cinema or a restaurant.",
          "RLS-UK members get a medical alert card that can be shown at restaurants, cinemas and airports when asking for a seat.",
          "If you are sitting at a desk or table, make sure your feet can rest flat on the ground.",
        ],
      },
      {
        heading: "On the road",
        paragraphs: [
          "If you are travelling by car, as a driver or passenger, stop regularly for a good stretch.",
          "Some medicines for restless legs, such as ropinirole, can make people fall asleep suddenly. Do not drive, cycle or use machinery until you know how the medicine affects you.",
        ],
      },
      {
        heading: "Calmer evenings",
        paragraphs: [
          "The NHS advises no caffeine after midday, no alcohol for at least 2 hours before bed, and no big meal or strenuous exercise late at night.",
          "Many cold and flu remedies and cough syrups contain antihistamines, which can make restless legs worse for some people. RLS-UK suggests always choosing non-drowsy options.",
          "When you do have to sit still, distraction such as reading, a game or a puzzle can help.",
        ],
      },
      {
        heading: "Before an operation",
        paragraphs: [
          "Many anti-sickness medicines can trigger restless legs during and after surgery. RLS-UK suggests discussing anti-sickness medicines with your doctors before an operation, as there are alternatives.",
        ],
      },
    ],
    helps: [
      "Ask for an aisle seat on flights, at the cinema or in restaurants.",
      "Stop regularly for a good stretch on car journeys.",
      "Make sure your feet can rest flat on the ground when sitting at a desk.",
      "Choose non-drowsy cold and flu remedies.",
      "Talk to your doctors about anti-sickness medicines before an operation.",
      CRISIS,
    ],
    tryThisWeek: [
      "Ask for an aisle seat.",
      "Plan stretch stops on long drives.",
      "Pick non-drowsy cold remedies.",
    ],
    ask: "Is there anything that could help me through a long flight or journey?",
    interactive: {
      kind: "scenarios",
      title: "Out and about",
      scenarios: [
        {
          id: "cinema",
          situation: "You are booking tickets for an evening film.",
          options: [{ text: "Ask for an aisle seat", best: true }, { text: "Pick the middle of a row" }],
          why: "RLS-UK suggests requesting an aisle seat at the cinema, so you can easily get up and move.",
        },
        {
          id: "drive",
          situation: "You have a long drive ahead.",
          options: [{ text: "Plan regular stops for a good stretch", best: true }, { text: "Drive straight through" }],
          why: "If you are travelling by car, as a driver or passenger, stop regularly for a good stretch.",
        },
        {
          id: "cold",
          situation: "You have a cold and want a remedy from the pharmacy.",
          options: [{ text: "Look for a non-drowsy option", best: true }, { text: "Choose a night-time remedy" }],
          why: "Many cold and flu remedies contain antihistamines, which can make restless legs worse. Always try to choose non-drowsy options.",
        },
        {
          id: "surgery",
          situation: "You have an operation coming up.",
          options: [{ text: "Talk to your doctors about anti-sickness medicines", best: true }, { text: "Say nothing about your restless legs" }],
          why: "Many anti-sickness medicines can trigger restless legs during and after surgery. RLS-UK suggests discussing them beforehand.",
        },
      ],
    },
    sources: [RLSUK_WHAT, RLSUK_SELF, NHS_RLS, NHSI_RLS, RLSUK_MEMBERSHIP, RLSUK_LIVING, RLSUK_AVOID, CKS_MANAGEMENT, NHS_ROPINIROLE, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Where does RLS-UK suggest sitting at the cinema or on a plane?",
      options: [{ text: "An aisle seat", right: true }, { text: "A window seat" }, { text: "The middle of a row" }],
      why: "Ask for an aisle seat when checking in for a flight, or going to the cinema or a restaurant.",
    },
  },
  {
    id: "rls-pregnancy",
    kicker: "Pregnancy",
    question: "Why have I got restless legs in pregnancy, and will they go away?",
    hook: "Restless legs are common in pregnancy, especially in the last few months. For most women, they fade soon after the baby arrives.",
    short: "Restless legs are common in pregnancy, affecting around 1 in 5 pregnant women in the last trimester. They usually stop within 4 weeks of giving birth. Medicines for restless legs are not usually recommended in pregnancy, so gentle self-help comes first, and your midwife or doctor can advise on supplements such as iron.",
    sections: [
      {
        heading: "Common, and usually temporary",
        paragraphs: [
          "Some women develop restless legs during pregnancy. It is most common from 27 weeks onwards, and it usually stops within 4 weeks of giving birth.",
          "Around 1 in 5 pregnant women have restless legs in the last trimester. NICE's clinical knowledge summary says it becomes more frequent as pregnancy goes on.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "No one knows exactly why, but RLS-UK says iron deficiency, low folate, hormonal changes and changes in circulation are possible causes.",
          "Pregnancy is a very common cause of iron deficiency anaemia, most often because of a lack of iron in the diet.",
          "If you already had restless legs before pregnancy, it usually gets worse during pregnancy.",
        ],
      },
      {
        heading: "Medicines and supplements",
        paragraphs: [
          "Most medicines used for restless legs have not been studied much in pregnant women, and NICE's clinical knowledge summary says drug treatment is not recommended during pregnancy or breastfeeding.",
          "Ask your doctor or midwife before taking supplements such as iron, magnesium, vitamin B12 or folate, or any over-the-counter medicines. If you already take a prescribed medicine, do not stop it without checking with your doctor first.",
        ],
      },
      {
        heading: "Gentle ways to ease it",
        paragraphs: [
          "Some women find it helps to stretch their legs, have a massage, use hot or cold packs, take a warm bath, but not a hot one, or practise relaxation techniques. A partner may be able to massage or rub your legs until you fall asleep.",
          "Smoking and alcohol should be avoided. As well as their known harms to the baby, both have been linked to more sleep disturbance and restless legs in pregnancy.",
          "Exercise can help you feel less tired, so try some activity, such as a walk at lunchtime or going swimming. Avoid tea, coffee or cola in the evening, as caffeine can make it harder to sleep.",
        ],
      },
      {
        heading: "Sleep, mood and support",
        paragraphs: [
          "If lack of sleep is bothering you, talk to your partner, a friend, your doctor or midwife. Occasionally, sleeplessness alongside other symptoms, such as feeling hopeless or losing interest in things, can be a sign of depression, and there is treatment that can help.",
          "Restless legs in pregnancy usually go after the birth, but having them can make restless legs more likely later in life.",
        ],
      },
    ],
    helps: [
      "Ask your midwife or doctor before taking any supplements or over-the-counter medicines.",
      "Try stretching, massage, hot or cold packs, or a warm (not hot) bath.",
      "Avoid smoking and alcohol.",
      "Avoid tea, coffee or cola in the evening.",
      "Talk to your midwife or doctor if lack of sleep or low mood is bothering you.",
      CRISIS,
    ],
    tryThisWeek: [
      "Stretch your legs before bed.",
      "Try a warm, not hot, bath.",
      "Skip caffeine in the evening.",
    ],
    ask: "Could my iron be checked, and is anything safe to try for restless legs while I am pregnant?",
    interactive: {
      kind: "timeline",
      title: "Restless legs through pregnancy",
      steps: [
        { id: "first", when: "First trimester", title: "Less common", points: ["Around 8 in 100 pregnant women, says NICE.", "Rest as much as you can if you feel tired."] },
        { id: "second", when: "Second trimester", title: "More common", points: ["Around 16 in 100, says NICE.", "Gentle exercise can help you feel less tired."] },
        { id: "third", when: "Third trimester", title: "Most common", points: ["Around 22 in 100, most often from 27 weeks.", "Try stretching, massage or a warm bath."] },
        { id: "after", when: "After the birth", title: "Usually fades", points: ["It usually stops within 4 weeks of giving birth.", "For some, symptoms carry on afterwards."] },
      ],
    },
    sources: [NHSI_RLS, NHS_RLS, CKS_PREVALENCE, RLSUK_PREGNANCY, CKS_MANAGEMENT, SC_RLS, NHS_PREG_TIRED, NHS_IDA, RLSUK_WHAT, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When do restless legs in pregnancy usually go away?",
      options: [{ text: "Within 4 weeks of giving birth", right: true }, { text: "Never" }, { text: "Only after a year" }],
      why: "It usually stops within 4 weeks of giving birth.",
    },
  },
  {
    id: "rls-mood",
    kicker: "Mood",
    question: "Restless legs are wearing me down: how do I cope with the tiredness and low mood?",
    hook: "Night after night of broken sleep can leave anyone tired, low or anxious. That is common with restless legs, and there is help for both.",
    short: "Restless legs syndrome can be hard to live with, and people with it have higher rates of anxiety and depression. Poor sleep can leave you tired, unable to concentrate and low. If restless legs are affecting your mental health, see a GP: talking therapies may help, and you can refer yourself.",
    sections: [
      {
        heading: "A hidden strain",
        paragraphs: [
          "Restless legs syndrome can be hard to live with. RLS-UK calls it a hidden disease, and says some people struggle so much that it has a significant effect on their quality of life.",
          "People with restless legs have higher rates of anxiety and depression than the general population. RLS-UK says depression and anxiety commonly result from it.",
        ],
      },
      {
        heading: "What poor sleep does",
        paragraphs: [
          "After several sleepless nights, you may feel tired all the time, find it difficult to concentrate or make decisions, and start to feel low and anxious. Over time, poor sleep can be a factor in developing depression.",
          "Longer-term sleep problems can make daily tasks feel harder, and may affect your mood, appetite, relationships and social life.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "See a GP if restless legs are affecting your mental health, or stopping you sleeping. RLS-UK says it is time to talk to your doctor if you are losing sleep often, feeling depressed or anxious, or having trouble concentrating.",
          "Changes or combinations of medicines are often needed to control symptoms, so RLS-UK suggests working with your doctor.",
        ],
      },
      {
        heading: "Talking therapies",
        paragraphs: [
          "If restless legs are affecting your mental health, treatments such as talking therapies may help. You can refer yourself to NHS talking therapies for difficult feelings, such as low mood and worry, and for coping with a long-term health condition.",
          "To refer yourself, you need to be registered with a GP and aged 18 or over, or 16 or over in some areas.",
        ],
      },
      {
        heading: "Ways to take control",
        paragraphs: [
          "RLS-UK suggests working with your doctor, joining a support group, and, if you feel overwhelmed, speaking with a mental health professional.",
          "If you ever feel you cannot cope or keep yourself safe, help and support is available right now. You will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "See a GP if restless legs are affecting your mental health.",
      "Refer yourself to NHS talking therapies if you are 18 or over and registered with a GP.",
      "Join a support group, such as RLS-UK.",
      "Let family or friends know what is going on for you.",
      "Keep working with your doctor on treatment, as changes are often needed.",
      CRISIS,
    ],
    tryThisWeek: [
      "Tell your GP how you feel.",
      "Look up talking therapies.",
      "Talk to someone you trust.",
    ],
    ask: "Restless legs are affecting my mood: could talking therapy or a change in treatment help?",
    interactive: {
      kind: "signs",
      title: "How it is affecting you",
      intro: "Tick any that apply. Taking this list to your GP can help them see the whole picture.",
      signs: ["Losing sleep often", "Feeling tired all the time", "Finding it hard to concentrate", "Feeling low or depressed", "Feeling anxious", "Worrying about not being able to sleep", "Avoiding the cinema or long flights", "Finding work harder"],
      after: "If restless legs are affecting your mental health, see a GP. Talking therapies may help, and you can refer yourself.",
      copyHeading: "How restless legs are affecting me",
    },
    sources: [NHS_RLS, CKS_COMPLICATIONS, RLSUK_FAQS, RLSUK_LIVING, RCPSYCH_SLEEP, NHS_TALKING, NHSI_RLS, EMM_SLEEP, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Can you refer yourself to NHS talking therapies?",
      options: [{ text: "Yes, if you are 18 or over and registered with a GP", right: true }, { text: "No, only a specialist can refer you" }, { text: "Only after a diagnosis" }],
      why: "To refer yourself, you need to be registered with a GP and aged 18 or over, or 16 or over in some areas.",
    },
  },
  {
    id: "rls-support",
    kicker: "Support",
    question: "Where can I find support for restless legs?",
    hook: "You are not on your own. A UK charity, an online community and a sleep helpline all understand what restless legs are like.",
    short: "RLS-UK is the UK charity for people with restless legs syndrome and periodic limb movement disorder, run by volunteers. It offers information, an online discussion forum and membership. The Sleep Charity runs the National Sleep Helpline for help with sleep, and urgent help for your mental health is always available.",
    sections: [
      {
        heading: "RLS-UK",
        paragraphs: [
          "RLS-UK is a registered charity providing help and support to people living with restless legs syndrome and periodic limb movement disorder. It was set up as a support group almost twenty years ago, and is still run by a team of volunteers.",
          "It aims to raise awareness of restless legs, to provide information and support, and to improve the quality of restless legs care in the UK. RLS-UK says it is there to lend an ear, offer advice and provide a community of people who understand.",
        ],
      },
      {
        heading: "Asking questions",
        paragraphs: [
          "For questions about restless legs, RLS-UK asks people to visit its discussion forum on Health Unlocked first, as this lets its volunteers help as many people as possible. For a specific query, you can contact the charity through the form on its website.",
          "Members receive a twice-yearly newsletter, an invitation to the annual general meeting where specialists talk about restless legs, and a medical alert card to show when asking for seating at restaurants, cinemas and airports.",
        ],
      },
      {
        heading: "Other people's stories",
        paragraphs: [
          "It can be hard to explain restless legs to people who do not live with it. RLS-UK shares video stories from people living with restless legs, and says it is sure their stories will strike a chord with many.",
        ],
      },
      {
        heading: "Help with sleep",
        paragraphs: [
          "The Sleep Charity runs the National Sleep Helpline on 03303 530 541, where trained sleep advisors can talk through your sleep problems and offer practical strategies. It is open between 9am and 11am on Mondays and Wednesdays and between 7pm and 9pm on Tuesdays and Thursdays.",
          "The helpline cannot give medical advice and is not a crisis service. If restless legs are stopping you sleeping or affecting your mental health, see a GP.",
        ],
      },
      {
        heading: "If you are struggling to cope",
        paragraphs: [
          "If you need urgent help for your mental health, call 111 and select the mental health option. You can call Samaritans free, any time, from any phone, on 116 123.",
          "If you do not want to talk on the phone, you can text SHOUT to 85258. Call 999 or go to A&E if you do not feel you can keep yourself safe.",
        ],
      },
    ],
    helps: [
      "Visit RLS-UK's website and its Health Unlocked forum for information and support.",
      "Consider joining RLS-UK for its newsletter and medical alert card.",
      "Call the National Sleep Helpline on 03303 530 541 to talk through sleep problems.",
      "See a GP if restless legs are stopping you sleeping or affecting your mental health.",
      CRISIS,
    ],
    tryThisWeek: [
      "Visit the RLS-UK website.",
      "Note the sleep helpline's hours.",
      "See a GP if it is affecting you.",
    ],
    ask: "Could I be referred to a specialist, such as a neurologist or sleep specialist?",
    interactive: {
      kind: "scenarios",
      title: "Who to turn to",
      scenarios: [
        {
          id: "medicine",
          situation: "You have a question about a restless legs medicine.",
          options: [{ text: "Ask your doctor, and read RLS-UK's information", best: true }, { text: "Change the dose yourself" }],
          why: "RLS-UK says you should always speak to your doctor about medication. Its website and forum answer many common questions.",
        },
        {
          id: "sleep",
          situation: "You want to talk through ways to sleep better.",
          options: [{ text: "Call the National Sleep Helpline", best: true }, { text: "Wait and hope it passes" }],
          why: "The helpline's trained sleep advisors can talk through your issues and offer practical strategies.",
        },
        {
          id: "alone",
          situation: "You feel nobody understands what it is like.",
          options: [{ text: "Look at RLS-UK's forum and video stories", best: true }, { text: "Keep it to yourself" }],
          why: "RLS-UK is there to lend an ear, offer advice and provide a community of people who understand.",
        },
        {
          id: "crisis",
          situation: "You feel you cannot cope and are worried about your safety.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait for the sleep helpline to open" }],
          why: "The sleep helpline is not a crisis service. Call 999 or go to A&E if you do not feel you can keep yourself safe.",
        },
      ],
    },
    sources: [RLSUK_HOME, RLSUK_CONTACT, RLSUK_MEMBERSHIP, RLSUK_VIDEOS, SC_HELPLINE, NHS_RLS, SAMARITANS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "Is the National Sleep Helpline a crisis service?",
      options: [{ text: "No, it helps with sleep problems", right: true }, { text: "Yes, it is open all night" }, { text: "Yes, it gives medical advice" }],
      why: "The helpline cannot give medical advice and is not a crisis service.",
    },
  },
];
