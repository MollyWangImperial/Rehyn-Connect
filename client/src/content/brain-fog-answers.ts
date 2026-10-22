import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Brain fog after cancer (chemo brain) page's pieces
// (content/library-conditions/cancer-more-2.ts, `brainFog`). Every sentence was written from wording checked
// on 22 October 2026 on the pages listed under each answer's `sources`; nothing is added that those pages do
// not say. Most of it comes from Macmillan Cancer Support, Cancer Research UK and Breast Cancer Now, with the
// NHS (chemotherapy, memory loss, sleep, anaemia, the thyroid, menopause and mental health), the government's
// pages on disability, Access to Work and driving, and Samaritans. The emergency lines during chemotherapy are
// given exactly as Macmillan and the NHS state them, and the mood answer follows safe-messaging guidance with
// the crisis routes as the NHS, Macmillan and Samaritans give them. General information only; it never
// replaces what a person's own cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/${path}` });
const bcn = (label: string, path: string): LearnSource => ({ label: `Breast Cancer Now: ${label}`, url: `https://breastcancernow.org/about-breast-cancer/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const MAC_CRCC = mac("Cognitive changes (chemo brain)", "impacts-of-cancer/chemo-brain");
const MAC_CHEMO_SE = mac("Side effects of chemotherapy", "treatment/types-of-treatment/chemotherapy/side-effects-of-chemotherapy");
const MAC_FATIGUE = mac("Tiredness (fatigue)", "impacts-of-cancer/tiredness");
const MAC_SLEEP = mac("Trouble sleeping (insomnia)", "impacts-of-cancer/trouble-sleeping");
const MAC_ACTIVITY = mac("Physical activity and cancer", "treatment/preparing-for-treatment/physical-activity-and-cancer");
const MAC_ACTIVE_AFTER = mac("Being physically active after treatment", "after-treatment/being-physically-active");
const MAC_MENTAL_HEALTH = mac("Cancer and mental health support", "treatment/coping-with-treatment/cancer-and-mental-health-support");
const MAC_DEPRESSION = mac("Depression and cancer", "impacts-of-cancer/depression");
const MAC_RETURNING = mac("Returning to work", "impacts-of-cancer/work-and-cancer/returning-to-work");
const MAC_ADJUSTMENTS = mac("Reasonable adjustments", "impacts-of-cancer/work-and-cancer/reasonable-adjustments");
const MAC_RIGHTS = mac("Cancer and employment rights", "impacts-of-cancer/work-and-cancer/cancer-and-employment-rights");
const MAC_TELLING = mac("How to tell people you have cancer", "diagnosis/talking-about-cancer/how-to-tell-people-you-have-cancer");

const CRUK_CB = cruk("Cognitive changes (chemo brain)", "treatment/cancer-drugs/side-effects/chemo-brain");
const CRUK_COPING = cruk("Coping with cognitive changes (chemo brain)", "treatment/cancer-drugs/side-effects/chemo-brain/treatment-coping");
const CRUK_RESEARCH = cruk("Research looking at cognitive changes (chemo brain)", "treatment/cancer-drugs/side-effects/chemo-brain/research");

const BCN_CI = bcn("Cognitive impairment (chemo brain)", "treatment/chemotherapy/chemotherapy-side-effects/cognitive-impairment-chemo-brain");
const BCN_CHEMO_SE = bcn("Chemotherapy side effects", "treatment/chemotherapy/chemotherapy-side-effects");

const NHS_CHEMO = nhs("Chemotherapy", "tests-and-treatments/chemotherapy/");
const NHS_MEMORY = nhs("Memory loss (amnesia)", "symptoms/memory-loss-amnesia/");
const NHS_IDA = nhs("Iron deficiency anaemia", "conditions/iron-deficiency-anaemia/");
const NHS_HYPO = nhs("Underactive thyroid (hypothyroidism)", "conditions/underactive-thyroid-hypothyroidism/");
const NHS_INSOMNIA = nhs("Insomnia", "conditions/insomnia/");
const NHS_MENOPAUSE = nhs("Symptoms of menopause and perimenopause", "conditions/menopause-and-perimenopause/symptoms/");
const NHS_DEPRESSION = nhs("Depression in adults", "mental-health/conditions/depression-in-adults/overview/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const GOV_DISABILITY = gov("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");
const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");
const GOV_DRUG_DRIVING = gov("Drugs and driving: the law", "drug-driving-law");
const GOV_HEALTH_DRIVING = gov("Check if a health condition affects your driving", "health-conditions-and-driving");
const GOV_MEDICAL_DRIVING = gov("Medical conditions, disabilities and driving", "driving-medical-conditions");

const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const brainFogAnswers: LearnArticle[] = [
  {
    id: "bfog-what-it-is",
    kicker: "Understanding",
    question: "What is brain fog after cancer?",
    hook: "Forgetting words, losing track, struggling to juggle things: changes in memory and thinking are a recognised effect of cancer and its treatment.",
    short: "During or after cancer treatment, some people notice changes in their memory, concentration or ability to think clearly. These are called cancer-related cognitive changes, and are often known as chemo brain, though they can happen without chemotherapy. They are usually mild, but they can be frustrating, so it is worth telling your team.",
    sections: [
      {
        heading: "Changes in memory and thinking",
        paragraphs: [
          "During cancer treatment, you may notice changes in your memory, concentration or your ability to think clearly. These are called cancer-related cognitive changes.",
          "Cognition means the mental processes that take place in the brain. It includes thinking, attention, language, learning, memory and perception.",
          "Your treatment team may call it cognitive impairment. You may also hear it called chemo brain, chemo fog or brain fog.",
        ],
      },
      {
        heading: "Not only after chemotherapy",
        paragraphs: [
          "These changes were first reported after chemotherapy treatment, so they used to be called chemo brain. But changes in memory and concentration can affect people with cancer who have not had chemotherapy.",
          "Doctors now think these problems could be due to various reasons. This includes the different cancer treatments and the cancer itself.",
          "Some people find that chemotherapy makes them forgetful or unable to concentrate during or after treatment. If this happens, it is usually mild.",
        ],
      },
      {
        heading: "What it can feel like",
        paragraphs: [
          "Common symptoms include feeling like you can't think clearly, finding it hard to remember things and being unusually disorganised. You may find it difficult to do more than one thing at a time, or get distracted more easily.",
          "Some people have trouble finding the right words or finishing sentences, or remembering a conversation. Things can take longer to do than before.",
          "Most people who have cognitive changes can do everyday things. But they may notice they aren't able to do some things quite as well as before they had cancer.",
        ],
      },
      {
        heading: "How common it is",
        paragraphs: [
          "It's uncertain how many people with cancer have these changes, and studies have reported a wide range of figures. It is thought that up to 75 out of every 100 people experience cognitive changes during treatment, and up to 35 in every 100 have symptoms after treatment.",
          "It can affect men and women of all ages, and people with different types of cancer. People might notice changes at diagnosis, during treatment or after treatment.",
        ],
      },
      {
        heading: "Usually mild, still worth mentioning",
        paragraphs: [
          "Any problems with concentration or memory are usually temporary and mild. But they can be frustrating and interfere with your normal activities.",
          "If you have these symptoms, talk to your doctor or treatment team. They can assess you and provide support, and it can help to keep a record of your symptoms to show them.",
        ],
      },
    ],
    helps: [
      "Talk to your treatment team if you notice these symptoms; they can assess you and support you.",
      "Keep a record of your symptoms to show your doctor.",
      "Let your care team know about any side effects, as they may be able to help ease them.",
      "Call the Macmillan Support Line free on 0808 808 0000, 8am to 8pm, 7 days a week.",
    ],
    tryThisWeek: [
      "Tell your team what you notice.",
      "Keep a record of your symptoms.",
      "Report any side effects.",
    ],
    ask: "Could my treatment be causing the changes in my memory and concentration?",
    interactive: {
      kind: "signs",
      title: "Changes to tell your team about",
      intro: "Tick any you have noticed. A record of your symptoms can help your doctor.",
      signs: ["Finding it hard to remember things", "Feeling I can't think clearly", "Being unusually disorganised", "Finding it hard to do more than one thing at a time", "Getting distracted more easily", "Trouble finding the right words", "Things taking longer than before", "Extreme tiredness", "Feeling low in mood"],
      after: "Talk to your doctor or treatment team about any of these. They can assess you and help manage your symptoms.",
      copyHeading: "Changes in my memory and thinking",
    },
    sources: [MAC_CRCC, CRUK_CB, BCN_CI, NHS_CHEMO, BCN_CHEMO_SE, MAC_CHEMO_SE],
    quiz: {
      question: "Who can get chemo brain?",
      options: [{ text: "People with cancer, including some who have not had chemotherapy", right: true }, { text: "Only people having chemotherapy" }, { text: "Only older people" }],
      why: "But changes in memory and concentration can affect people with cancer who have not had chemotherapy.",
    },
  },
  {
    id: "bfog-causes",
    kicker: "Causes",
    question: "What causes chemo brain?",
    hook: "Not just chemotherapy. Researchers think it is a mix of the cancer, its treatments, side effects and the stress that comes with them.",
    short: "It's not exactly clear what causes these changes. Research suggests a combination of factors, including the cancer itself, treatments such as chemotherapy, hormone therapy and radiotherapy, side effects like fatigue and poor sleep, and the stress of a diagnosis. The benefits of treatment will usually outweigh the risk.",
    sections: [
      {
        heading: "No single cause",
        paragraphs: [
          "It's not exactly clear what causes these changes in people with cancer. Research suggests that it may be caused by a combination of factors.",
          "Researchers think that treatments may cause changes and inflammation in brain cells.",
        ],
      },
      {
        heading: "Cancer treatments",
        paragraphs: [
          "Treatments linked to it include chemotherapy, hormone therapy, radiotherapy, immunotherapy, steroids and some targeted drugs. Surgery may play a part too.",
          "Treatment to the brain, such as intrathecal chemotherapy or radiotherapy to the brain, can be a risk factor. So can very intensive treatment, such as high dose chemotherapy followed by a stem cell transplant.",
          "Some experts think chemotherapy may speed up the normal ageing process. There's some evidence hormone therapies, such as letrozole, can also cause symptoms, but the evidence is mixed and more research is needed.",
        ],
      },
      {
        heading: "The cancer, and what comes with it",
        paragraphs: [
          "The cancer itself can play a part, and certain cancer types, such as brain tumours, are a risk factor. Some people notice changes at diagnosis, before treatment starts.",
          "A diagnosis of cancer brings a lot of stress and emotion. Low mood, stress and anxiety may all be part of the mix.",
          "Side effects of treatment, such as fatigue, anaemia, sleep problems, poor nutrition, hormonal changes and menopause, can add to it.",
        ],
      },
      {
        heading: "Who may be more likely to get it",
        paragraphs: [
          "Some people might be more likely to have cognitive changes after a cancer diagnosis and treatment. Risk factors include older age, lifestyle and genetics.",
          "Anxiety, depression, post traumatic stress disorder, fatigue and insomnia related to a cancer diagnosis and treatment are also risk factors.",
        ],
      },
      {
        heading: "Weighing it up",
        paragraphs: [
          "The benefits of your cancer treatment will usually outweigh the risk of developing these changes. Your doctor or nurse will talk with you about your treatment if you are worried.",
          "Research is going on to find out which chemotherapy drugs affect thinking, how other cancer treatments affect it and what can be done to reduce the risk. One study is looking at hormone therapies for prostate cancer, such as abiraterone and enzalutamide.",
          "You may be asked to take part in a research trial. You do not have to take part if you do not want to, and you do not have to give a reason why.",
        ],
      },
    ],
    helps: [
      "Talk to your doctor or nurse about your treatment if you are worried.",
      "Keep a record of the brand of hormone therapy you are prescribed and the symptoms you notice.",
      "Ask your GP if they can prescribe the brand you feel suits you best.",
      "Talk to your treatment team about managing sleep problems or stress, which can make symptoms worse.",
      "Ask your doctor or nurse to explain fully any research trial you are offered.",
    ],
    tryThisWeek: [
      "Share your worries about treatment.",
      "Note your hormone therapy brand.",
      "Mention poor sleep or stress.",
    ],
    ask: "Which of my treatments could be affecting my memory and concentration?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments linked to it",
      intro: "Turn a card to see what the charities say about each one.",
      cards: [
        { id: "chemotherapy", front: "Chemotherapy", when: "Where the name chemo brain came from", back: "The changes were first reported after chemotherapy. Some experts think it may speed up the normal ageing process." },
        { id: "hormone", front: "Hormone therapy", when: "Such as letrozole", back: "There's some evidence it can cause symptoms, but the evidence is mixed. Some people find different brands make it better or worse." },
        { id: "brain", front: "Treatment to the brain", when: "Intrathecal chemotherapy or brain radiotherapy", back: "Treatment to the brain is one of the risk factors for these changes." },
        { id: "intensive", front: "Very intensive treatment", when: "Such as a stem cell transplant", back: "High-dose treatment with chemotherapy or radiotherapy is a risk factor." },
        { id: "other", front: "Immunotherapy, targeted drugs and steroids", when: "During cancer treatment", back: "These are among the cancer treatments researchers think may play a part." },
      ],
    },
    sources: [MAC_CRCC, CRUK_CB, BCN_CI, CRUK_RESEARCH],
    quiz: {
      question: "What does research suggest causes chemo brain?",
      options: [{ text: "A combination of factors", right: true }, { text: "Chemotherapy alone" }, { text: "Not trying hard enough" }],
      why: "Research suggests that it may be caused by a combination of factors.",
    },
  },
  {
    id: "bfog-how-long",
    kicker: "Recovery",
    question: "How long does brain fog last?",
    hook: "For most people it lifts, often within a year of finishing treatment. For some it lingers longer, and it can come and go.",
    short: "Problems with memory and concentration are often mild and get better with time. For most people, the symptoms have gone or improved a lot within a year of ending treatment, but for some they can continue for years. They can come and go, and tiredness usually makes them worse.",
    sections: [
      {
        heading: "Most people get better",
        paragraphs: [
          "Problems with concentration or memory are often mild and get better with time.",
          "For most people, the symptoms have either gone or improved a lot within a year of ending treatment.",
        ],
      },
      {
        heading: "When it lasts longer",
        paragraphs: [
          "For some people, the symptoms can be long term. They may continue for years after treatment has finished.",
          "For some people it can continue, especially if the treatment causing it is ongoing.",
        ],
      },
      {
        heading: "It comes and goes",
        paragraphs: [
          "The symptoms can come and go. How much you notice them seems to depend on what you're doing.",
          "If you juggle several things as part of your normal day, you might notice it more. People often notice it more when they go back to work, and tiredness usually makes the symptoms worse.",
        ],
      },
      {
        heading: "Watching how it changes",
        paragraphs: [
          "Keeping a diary can help you notice if things improve over time. It may also show whether symptoms are worse at certain times, such as first thing in the morning or when you are tired or hungry.",
          "Talk to your doctor or nurse if you have cognitive changes and are finding it difficult. They might be able to refer you to a specialist to help you.",
        ],
      },
    ],
    helps: [
      "Keep a diary to see if things improve over time.",
      "Rest when you need to, and try to avoid becoming over tired.",
      "Talk to your doctor or nurse if you are finding the changes difficult.",
      "Let family and friends know that these changes usually get better with time.",
    ],
    tryThisWeek: [
      "Start a symptom diary.",
      "Rest before you get over tired.",
      "Tell your nurse if it is hard.",
    ],
    ask: "Is the way my memory and concentration are changing what you would expect after my treatment?",
    interactive: {
      kind: "timeline",
      title: "How it can change over time",
      steps: [
        { id: "diagnosis", when: "At diagnosis", title: "Before treatment starts", points: ["Some people notice changes at diagnosis.", "The stress and emotion of a diagnosis can play a part."] },
        { id: "during", when: "During treatment", title: "Most often noticed", points: ["Up to 75 in 100 people are thought to have changes during treatment.", "Tiredness usually makes the symptoms worse."] },
        { id: "year", when: "Within a year", title: "Most people improve", points: ["For most people, symptoms have gone or improved a lot within a year of ending treatment."] },
        { id: "longer", when: "Years after", title: "For some, longer", points: ["For some people, symptoms continue for years.", "Your doctor or nurse may refer you to a specialist."] },
      ],
    },
    sources: [CRUK_CB, MAC_CRCC, BCN_CI, CRUK_COPING, BCN_CHEMO_SE],
    quiz: {
      question: "For most people, when have the symptoms gone or improved a lot?",
      options: [{ text: "Within a year of ending treatment", right: true }, { text: "Within a week of the last treatment" }, { text: "Never" }],
      why: "For most people, the symptoms have either gone or improved a lot within a year of ending treatment.",
    },
  },
  {
    id: "bfog-other-causes",
    kicker: "Causes",
    question: "What else could be making my brain fog worse?",
    hook: "Tiredness, poor sleep, anaemia, the menopause, stress and some medicines can all cloud thinking, and several of them can be checked and treated.",
    short: "Fatigue, poor sleep, menopausal symptoms, poor diet, anaemia, stress, low mood and some medicines can all add to memory and concentration problems. Some, like anaemia or an underactive thyroid, can be checked with blood tests. During chemotherapy, a high temperature or suddenly feeling unwell needs a call to your 24-hour number straight away.",
    sections: [
      {
        heading: "Things that pile on",
        paragraphs: [
          "Other things can add to memory and concentration problems. These include fatigue, difficulty sleeping, menopausal symptoms and poor diet.",
          "Infection, a low number of red blood cells (anaemia), anxiety and depression can play a part too. Tiredness usually makes the symptoms worse.",
        ],
      },
      {
        heading: "Anaemia and an underactive thyroid",
        paragraphs: [
          "Symptoms of iron deficiency anaemia can include tiredness and lack of energy, shortness of breath and headaches. A GP will usually do a blood test called a full blood count to check your red blood cells.",
          "An underactive thyroid can cause difficulty concentrating or thinking clearly, as well as extreme tiredness and feeling cold more than usual. It can be caused by surgery or radiotherapy around your neck or thyroid, and blood tests can check it.",
        ],
      },
      {
        heading: "Sleep and menopause",
        paragraphs: [
          "Insomnia can make it difficult to concentrate during the day because you're tired. Most adults need 7 to 9 hours of sleep each night.",
          "Chemotherapy may cause an early menopause. In menopause you may notice problems with your memory or concentration, and these may feel worse if you have sleep problems and feel very tired.",
        ],
      },
      {
        heading: "Mood, stress and medicines",
        paragraphs: [
          "Stress can affect your memory. Memory loss is sometimes caused by something common and treatable, like stress, anxiety, depression or sleeping problems.",
          "Some medicines can add to it, such as painkillers or anti-sickness medicines. Common side effects of sleeping tablets include difficulty concentrating or thinking clearly.",
          "Your doctor may check for symptoms or side effects that could be contributing, and whether any of your medicines could be making symptoms worse.",
        ],
      },
      {
        heading: "If you feel unwell during chemotherapy",
        paragraphs: [
          "Chemotherapy can weaken your immune system, which can mean you're more likely to get infections. Call your care team now if you have a high temperature or other signs of an infection, such as a sore throat, cough or pain when peeing.",
          "Contact the hospital straight away on the 24-hour contact number you have been given if your temperature goes over 37 and a half degrees Celsius or below 36 degrees Celsius. Do the same if you suddenly feel unwell, even with a normal temperature.",
          "Call NHS 111 if you're not sure how to contact your care team.",
        ],
      },
    ],
    helps: [
      "Ask your doctor to check for symptoms or side effects that could be adding to it.",
      "Ask whether any of your medicines could be making symptoms worse.",
      "See a GP if you think you might have anaemia or an underactive thyroid.",
      "Talk to your treatment team about sleep problems or stress.",
      "During chemotherapy, contact the hospital straight away on your 24-hour number if you have a high temperature or suddenly feel unwell.",
    ],
    tryThisWeek: [
      "Ask for a side-effect check.",
      "Ask about your medicines.",
      "Mention poor sleep or stress.",
    ],
    ask: "Could anaemia, my thyroid, poor sleep or one of my medicines be adding to my memory problems?",
    interactive: {
      kind: "risk-check",
      title: "What could be adding to it?",
      intro: "Tick any that apply. Many of these can be checked or treated by your team or GP.",
      items: [
        { id: "anaemia", label: "Tired, short of breath or headaches", note: "These can be signs of anaemia. A blood test can check your red blood cells.", changeable: true },
        { id: "thyroid", label: "Feeling cold and extremely tired", note: "An underactive thyroid can also cause difficulty concentrating. Blood tests can check it.", changeable: true },
        { id: "sleep", label: "Poor sleep", note: "Insomnia can make it difficult to concentrate during the day because you're tired.", changeable: true },
        { id: "menopause", label: "Menopausal symptoms", note: "Memory or concentration problems in menopause may feel worse with poor sleep.", changeable: true },
        { id: "stress", label: "Stress, worry or low mood", note: "Stress can affect your memory. Memory loss is sometimes caused by something treatable, like stress, anxiety or depression.", changeable: true },
        { id: "medicines", label: "Painkillers, anti-sickness or sleeping tablets", note: "Your doctor can check whether any medicines could be making symptoms worse.", changeable: true },
        { id: "ongoing", label: "Cancer treatment that is still going on", note: "It can continue for longer if the treatment causing it is ongoing.", changeable: false },
      ],
    },
    sources: [MAC_CRCC, CRUK_CB, BCN_CI, NHS_IDA, NHS_HYPO, NHS_INSOMNIA, NHS_MENOPAUSE, NHS_MEMORY, MAC_SLEEP, MAC_CHEMO_SE, NHS_CHEMO],
    quiz: {
      question: "What may make memory problems in menopause feel worse?",
      options: [{ text: "Sleep problems and feeling very tired", right: true }, { text: "Eating fruit and vegetables" }, { text: "Gentle exercise" }],
      why: "In menopause you may notice problems with your memory or concentration, and these may feel worse if you have sleep problems and feel very tired.",
    },
  },
  {
    id: "bfog-strategies",
    kicker: "Everyday life",
    question: "What everyday tricks help with brain fog?",
    hook: "Lists, a diary, one task at a time and a plan for the week take some of the load off a tired memory.",
    short: "Keeping a diary can show when your memory is better or worse, so you can plan harder tasks for your best times. Writing things down, using your phone for reminders, doing one thing at a time and planning ahead all help. Lists of questions make appointments easier.",
    sections: [
      {
        heading: "Keep a diary",
        paragraphs: [
          "Keeping a record of your symptoms may help you work out if certain things make your memory worse. You may notice that symptoms seem worse first thing in the morning, or when you are tired or hungry.",
          "A diary can help you plan your day so that you do more difficult tasks when you feel at your best. It may help to do the most difficult tasks earlier in the day.",
        ],
      },
      {
        heading: "Write it down",
        paragraphs: [
          "Writing down information at the time can help you remember important things later. Make lists, such as shopping lists or to-do lists, and put notes where you can easily see them.",
          "Write down where you have left important things. When away from home, carry a notebook or put things in your phone.",
          "Keep a calendar on your wall, or use the calendar on your phone. Phone alarms and voice assistants can help with reminders, and a pill box organiser can help if you take regular medicines.",
        ],
      },
      {
        heading: "One thing at a time",
        paragraphs: [
          "Keep things simple and try to do one thing at a time. Avoid trying to do too many things at the same time.",
          "Have a daily routine and try to keep to it. Avoid distractions, such as by turning off the TV or radio when you need to concentrate, and try to talk to people somewhere quiet.",
        ],
      },
      {
        heading: "Plan ahead",
        paragraphs: [
          "Meal plan for the week ahead, and prepare for big events or busy days in advance.",
          "When arranging to meet someone or organising an event, it may help to write the details down and tell someone else.",
          "Before an appointment, write a list of questions. Keep a record of past and planned hospital appointments, and ask if you can record conversations so you can listen again.",
        ],
      },
    ],
    helps: [
      "Keep a diary to spot when your memory is better or worse.",
      "Try to do the most difficult tasks earlier in the day.",
      "Make lists and put notes where you can easily see them.",
      "Use the calendar and alarms on your phone for reminders.",
      "Focus on one task at a time and avoid distractions.",
      "Write a list of questions before an appointment.",
    ],
    tryThisWeek: [
      "Note when your memory is worse.",
      "Make a list each day.",
      "Do one task at a time.",
    ],
    ask: "Is there anyone who could teach me ways to cope with memory and concentration problems?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        {
          id: "keys",
          situation: "You keep losing your keys and glasses.",
          options: [{ text: "Write down where you leave important things", best: true }, { text: "Hope you remember next time" }],
          why: "Write lists about what you need to do, things you need to buy and where you have left important things.",
        },
        {
          id: "form",
          situation: "You have a tricky form to fill in.",
          options: [{ text: "Do it earlier in the day", best: true }, { text: "Leave it until late evening" }],
          why: "Try to do the most difficult tasks earlier in the day.",
        },
        {
          id: "call",
          situation: "You lose track of a conversation with the TV on.",
          options: [{ text: "Find somewhere quiet to talk", best: true }, { text: "Try harder over the noise" }],
          why: "Try to talk to people somewhere quiet with few distractions.",
        },
        {
          id: "appointment",
          situation: "You forget what you meant to ask at appointments.",
          options: [{ text: "Write a list of questions beforehand", best: true }, { text: "Trust you'll remember on the day" }],
          why: "Before an appointment write a list of questions and things you want to talk about.",
        },
      ],
    },
    sources: [MAC_CRCC, CRUK_COPING, BCN_CI],
    quiz: {
      question: "When does Cancer Research UK suggest doing the most difficult tasks?",
      options: [{ text: "Earlier in the day", right: true }, { text: "Late at night" }, { text: "All at once" }],
      why: "It may help to do the most difficult tasks earlier in the day.",
    },
  },
  {
    id: "bfog-activity",
    kicker: "Activity",
    question: "Can activity, sleep and rest help clear the fog?",
    hook: "Moving more, sleeping well and resting before you are worn out may help you feel more alert, though research is still going on.",
    short: "Being more physically active can help you feel more alert and reduce tiredness, and there is some research that exercise can help with cognitive changes. Check with a healthcare professional first and build up slowly. A good night's sleep, regular breaks, relaxing and a balanced diet all help too.",
    sections: [
      {
        heading: "Why moving helps",
        paragraphs: [
          "Being more physically active can help you feel more alert and reduce tiredness.",
          "There is some research that shows exercise can help with cognitive changes, though more research is needed on the best type and amount. Some physical activity each day can help you sleep and lift your mood.",
          "Choose exercise you enjoy, such as walking, swimming or yoga.",
        ],
      },
      {
        heading: "Start slowly",
        paragraphs: [
          "Being active before, during and after cancer treatment is safe. But before starting any physical activity plan, it is important to talk to a healthcare professional first.",
          "After cancer treatment ends, try to increase your activity slowly. Doing something is better than doing nothing, so listen to your body and do what you feel able to do.",
          "UK guidelines suggest building up to 150 minutes of moderate activity a week. You could do 30 minutes on 5 days of the week, split into three 10-minute sessions.",
        ],
      },
      {
        heading: "Sleep",
        paragraphs: [
          "Aim to get a good night's sleep, and rest in the day when you need to. Try to avoid becoming over tired.",
          "Most adults need 7 to 9 hours of sleep each night. Some people find their sleep is better when they go to bed and get up at a similar time every day.",
          "Relax for at least 1 hour before bed, and avoid screens such as phones and tablets, which can make your brain more active. Sleep apps such as Sleepio may also help.",
        ],
      },
      {
        heading: "Breaks and relaxing",
        paragraphs: [
          "Take regular breaks and get plenty of rest. Stress can affect your memory, and relaxation may help to improve your memory and concentration.",
          "Do some activities that help you relax, such as listening to music, going for a walk or doing yoga. Many people find mindfulness or relaxation techniques help.",
        ],
      },
      {
        heading: "Eating and drinking",
        paragraphs: [
          "Eat a healthy, well-balanced diet, with lots of fresh fruit and vegetables, and keep yourself hydrated.",
        ],
      },
    ],
    helps: [
      "Check with a healthcare professional before starting a new activity plan.",
      "Try to do some physical activity each day, if possible.",
      "Go to bed and get up at a similar time every day.",
      "Take regular breaks and rest before you become over tired.",
      "Make time for something relaxing, such as music or a walk.",
      "Eat a balanced diet and keep yourself hydrated.",
    ],
    tryThisWeek: [
      "Ask what activity is safe.",
      "Move a little every day.",
      "Keep regular sleep times.",
    ],
    ask: "How much activity is safe for me right now, and could it help my concentration?",
    interactive: {
      kind: "timeline",
      title: "A day that helps your thinking",
      steps: [
        { id: "morning", when: "Morning", title: "Up at a similar time", points: ["Get up at a similar time every day.", "Try harder tasks earlier in the day."] },
        { id: "daytime", when: "Daytime", title: "Move and take breaks", points: ["Some physical activity each day can lift your mood.", "Take regular breaks and rest when you need to."] },
        { id: "evening", when: "Evening", title: "Wind down", points: ["Relax for at least 1 hour before bed.", "Listening to music can help you relax."] },
        { id: "bedtime", when: "Bedtime", title: "Screens away", points: ["Avoid screens such as phones and tablets in bed.", "Most adults need 7 to 9 hours of sleep."] },
      ],
    },
    sources: [MAC_CRCC, CRUK_COPING, BCN_CI, MAC_ACTIVITY, MAC_ACTIVE_AFTER, MAC_SLEEP, NHS_INSOMNIA, MAC_MENTAL_HEALTH],
    quiz: {
      question: "What can being more physically active help with?",
      options: [{ text: "Feeling more alert and less tired", right: true }, { text: "Needing less sleep" }, { text: "Nothing at all" }],
      why: "Being more physically active can help you feel more alert and reduce tiredness.",
    },
  },
  {
    id: "bfog-brain-exercises",
    kicker: "Mind",
    question: "Can puzzles and brain training help?",
    hook: "Keeping your mind busy with something you enjoy may help, and researchers are testing memory training programmes.",
    short: "Memory exercises may help to train your brain, and puzzles, learning something new or starting a hobby keep your mind active. There are no established treatments yet, but cognitive training is being researched. Choose things you enjoy, and set aside tasks that feel too stressful for now.",
    sections: [
      {
        heading: "Keeping the mind active",
        paragraphs: [
          "Memory exercises may help to train your brain and improve your memory and concentration. You can help keep your mind active by learning something new or starting a hobby.",
          "Keeping your mind active may help, for example by doing crosswords, sudoku and puzzles. Some people use brain training games and apps.",
        ],
      },
      {
        heading: "Cognitive training",
        paragraphs: [
          "There are no established treatments for cognitive changes, but cognitive training is one of the treatments being researched. It means regularly practising skills to improve your attention, your memory and the speed at which you do things.",
          "It can also work on executive functioning, meaning your ability to plan, focus attention, remember and juggle multiple tasks. Your doctor or specialist nurse might be able to refer you to a specialist who can teach you skills to cope better.",
        ],
      },
      {
        heading: "What research is testing",
        paragraphs: [
          "Researchers are testing a memory training programme for people with breast cancer who have memory problems after chemotherapy.",
          "Another study is looking at an online programme called Memory and Attention Adaptation Training, a type of cognitive behavioural therapy, for people who have had breast cancer.",
        ],
      },
      {
        heading: "Keep it enjoyable",
        paragraphs: [
          "Making time for activities you enjoy can help you relax. You may want to start a new hobby or try an activity you have always wanted to do.",
          "You might find some activities or tasks too stressful right now, and it might help to avoid them for a while. You may only have to do this for a short time until you feel more able to cope.",
        ],
      },
    ],
    helps: [
      "Try crosswords, sudoku or puzzles.",
      "Learn something new or start a hobby.",
      "Try brain training games and apps.",
      "Ask your doctor or specialist nurse about a referral to a specialist.",
      "Set aside tasks that feel too stressful for now.",
    ],
    tryThisWeek: [
      "Do a puzzle.",
      "Try something new.",
      "Ask about a specialist.",
    ],
    ask: "Could I be referred to a specialist who can teach me skills to cope with memory and concentration changes?",
    interactive: {
      kind: "flip-cards",
      title: "Ways to work your mind",
      intro: "Turn a card to see what each one involves.",
      cards: [
        { id: "puzzles", front: "Puzzles", when: "At home, any time", back: "Keeping your mind active may help, for example with crosswords, sudoku and puzzles." },
        { id: "new", front: "Something new", when: "A hobby or a new skill", back: "You can help keep your mind active by learning something new or starting a hobby." },
        { id: "apps", front: "Brain training apps", when: "On a phone or tablet", back: "Brain training games and apps can help keep your brain active." },
        { id: "training", front: "Cognitive training", when: "With a specialist, if referred", back: "Regularly practising skills to improve attention, speed, memory and planning." },
        { id: "research", front: "Programmes in research", when: "In studies", back: "Memory training and online programmes are being tested for people who have had breast cancer." },
      ],
    },
    sources: [MAC_CRCC, CRUK_COPING, BCN_CI, CRUK_RESEARCH, MAC_MENTAL_HEALTH],
    quiz: {
      question: "Which of these may help keep your mind active?",
      options: [{ text: "Crosswords, sudoku and puzzles", right: true }, { text: "Doing many things at once" }, { text: "Avoiding anything new" }],
      why: "Keeping your mind active may help, for example by doing crosswords, sudoku and puzzles.",
    },
  },
  {
    id: "bfog-getting-help",
    kicker: "Support",
    question: "Who can help with my memory and concentration?",
    hook: "Your doctor or nurse can look for other causes and refer you on, and there are free helplines staffed by cancer nurses and specialists.",
    short: "Speak to your doctor or specialist nurse if you have symptoms. They may check for other causes, review your medicines and refer you for an assessment or support. There are no established treatments yet, but there are free helplines and forums, such as the Macmillan Support Line on 0808 808 0000.",
    sections: [
      {
        heading: "Telling your doctor or nurse",
        paragraphs: [
          "Speak to your doctor or specialist nurse if you have symptoms of cognitive changes. They will want to understand more about your symptoms and what is going on.",
          "See a GP if memory problems are affecting your day-to-day life. It could be caused by something that can be treated.",
        ],
      },
      {
        heading: "Making the most of appointments",
        paragraphs: [
          "Write down how these changes are affecting you before you see your doctor. If your memory is bad, it may help to take someone with you.",
          "You could also ask the doctor for permission to record the conversation, so you can listen to it again.",
        ],
      },
      {
        heading: "Checks you might have",
        paragraphs: [
          "You might have blood tests or a scan to rule out other possible causes first. You might be asked to fill out a questionnaire.",
          "You might be referred to a specialist for a neuropsychological assessment, to check how your brain is working. It involves an interview and different tasks, and the specialist then goes over their findings and suggestions.",
          "Your doctor may also check if any of your medicines could be making symptoms worse, and refer you for specialist help, such as a counsellor or support group.",
        ],
      },
      {
        heading: "Treatments",
        paragraphs: [
          "There are no established treatments for cognitive changes, and research is ongoing. Unless you are taking part in a clinical trial, it's unlikely you will be prescribed any medicine.",
          "Treatments being researched include cognitive training, physical activity, meditation, mindfulness and cognitive behavioural therapy. Speak to your doctor or specialist nurse before trying any of these.",
        ],
      },
      {
        heading: "Someone to talk to",
        paragraphs: [
          "You can call the Macmillan Support Line free on 0808 808 0000, 8am to 8pm, 7 days a week. Cancer Research UK's nurses are on freephone 0808 800 40 40, 9 to 5, Monday to Friday.",
          "Breast Cancer Now's specialist nurses are on 0808 800 6000, and its online forum connects people experiencing cognitive impairment. Macmillan's Online Community is open all day, every day.",
        ],
      },
    ],
    helps: [
      "Speak to your doctor or specialist nurse about your symptoms.",
      "Write down how the changes affect you before your appointment.",
      "Take someone with you if your memory is bad.",
      "Ask if you can record the conversation.",
      "Call the Macmillan Support Line free on 0808 808 0000.",
    ],
    tryThisWeek: [
      "Tell your nurse about your symptoms.",
      "Write down how it affects you.",
      "Bring someone to appointments.",
    ],
    ask: "Is there support for memory and concentration, and could I be referred for an assessment?",
    interactive: {
      kind: "flip-cards",
      title: "Who can help",
      intro: "Turn a card to see how each one can help.",
      cards: [
        { id: "gp", front: "GP", when: "If memory problems affect daily life", back: "A GP will ask questions to find the cause, and may refer you to a memory specialist." },
        { id: "nurse", front: "Doctor or specialist nurse", when: "During and after treatment", back: "They want to understand your symptoms, and may refer you to a specialist to help." },
        { id: "assessment", front: "Neuropsychological assessment", when: "If you are referred", back: "An interview and tasks to check how your brain is working, then findings and suggestions." },
        { id: "counsellor", front: "Counsellor", when: "If you feel anxious or low", back: "Counselling might help with anxiety and depression. Your GP might be able to refer you." },
        { id: "helpline", front: "Macmillan Support Line", when: "8am to 8pm, 7 days a week", back: "Free on 0808 808 0000. You can talk to cancer specialists about anything." },
      ],
    },
    sources: [CRUK_COPING, MAC_CRCC, NHS_MEMORY, BCN_CI, CRUK_CB, MAC_MENTAL_HEALTH],
    quiz: {
      question: "What may help at an appointment if your memory is bad?",
      options: [{ text: "Taking someone with you", right: true }, { text: "Trying not to mention it" }, { text: "Waiting until it is worse" }],
      why: "If your memory is bad, it may help to take someone with you.",
    },
  },
  {
    id: "bfog-work",
    kicker: "Work",
    question: "How do I manage brain fog at work?",
    hook: "Work is often where it shows most. The law is on your side, and small changes such as notes, breaks and altered hours can help.",
    short: "People often notice cognitive changes more when they go back to work. If you have or have had cancer, the law treats it as a disability, so your employer should consider reasonable adjustments, such as changed hours or more regular breaks. A flexible return-to-work plan, notes in meetings and a fit note can all help.",
    sections: [
      {
        heading: "Why work can show it up",
        paragraphs: [
          "People often notice cognitive changes more when they go back to work. If you need to juggle several things as part of your day, you might notice them more.",
          "Cognitive impairment can make it difficult to carry out your usual role at work. This can lead to you feeling stressed, which can make the symptoms worse.",
          "Problems with memory and concentration may delay some people from going back to work.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "If you have cancer, the law considers this a disability. Under the Equality Act 2010, you meet the definition from the day you are diagnosed, and in Northern Ireland the Disability Discrimination Act 1995 protects you.",
          "This protection does not end when your treatment finishes. If you have been diagnosed with cancer in the past, you keep it, even if you move to another employer.",
        ],
      },
      {
        heading: "Adjustments that can help",
        paragraphs: [
          "If you're worried about work, or returning to work, speak to your employer about reasonable adjustments. These could be a temporary change to your work hours or more regular breaks.",
          "Other adjustments could include a phased return, changing your job description to remove tasks that are particularly difficult for you, or changing performance targets to allow for side effects. A quiet place to rest, or apps and software that make things easier, may also help.",
          "You do not have to tell your employer you have cancer. But they do not have to make a reasonable adjustment unless they know, or should reasonably know, that you have cancer.",
        ],
      },
      {
        heading: "Planning your return",
        paragraphs: [
          "You and your manager can agree a return-to-work plan. It should be as flexible as possible, and you should meet regularly in case anything needs to change.",
          "It can help to write notes in your meetings, or to take someone with you who can help you remember what is said. Occupational health services might also help, and your manager or human resources team can tell you about them.",
          "You can ask your doctor for a fit note, which explains how your health affects what you can do at work.",
        ],
      },
      {
        heading: "Extra support",
        paragraphs: [
          "Access to Work could give you a grant towards practical support, such as specialist equipment and assistive software. It will not affect other benefits, and you will not have to pay it back.",
          "Access to Work will not pay for reasonable adjustments, which your employer has to make. If you're self-employed, you can call Macmillan on 0808 808 00 00 to find out what support is available.",
        ],
      },
    ],
    helps: [
      "Speak to your employer about reasonable adjustments, such as changed hours or more regular breaks.",
      "Agree a flexible return-to-work plan, and meet regularly to review it.",
      "Write notes in meetings, or take someone with you.",
      "Ask about occupational health support.",
      "Ask your doctor for a fit note.",
      "Check whether Access to Work could help with equipment or software.",
    ],
    tryThisWeek: [
      "Ask about adjustments.",
      "Take notes in meetings.",
      "Check Access to Work.",
    ],
    ask: "What adjustments could help me at work, and can you give me a fit note that explains them?",
    interactive: {
      kind: "scenarios",
      title: "Moments at work",
      scenarios: [
        {
          id: "meetings",
          situation: "You leave meetings unsure what was agreed.",
          options: [{ text: "Write notes, or bring someone along", best: true }, { text: "Hope you remember later" }],
          why: "It can be helpful to write notes in your meetings. You may also want someone to come to the meetings with you.",
        },
        {
          id: "afternoons",
          situation: "Your concentration fades by the afternoon.",
          options: [{ text: "Ask about changed hours or more breaks", best: true }, { text: "Push on and say nothing" }],
          why: "These could be a temporary change to your work hours or more regular breaks.",
        },
        {
          id: "telling",
          situation: "You want adjustments but have not mentioned the cancer.",
          options: [{ text: "Tell them, so they can make adjustments", best: true }, { text: "Expect changes without telling them" }],
          why: "They do not have to make a reasonable adjustment unless they know or should reasonably know that you have cancer.",
        },
        {
          id: "writing",
          situation: "Writing things down has become hard.",
          options: [{ text: "Ask about apps or software that help", best: true }, { text: "Struggle on alone" }],
          why: "If you have difficulty writing, a voice recognition app may be helpful.",
        },
      ],
    },
    sources: [BCN_CI, CRUK_CB, MAC_ADJUSTMENTS, MAC_RIGHTS, GOV_DISABILITY, MAC_RETURNING, GOV_ATW, MAC_CRCC],
    quiz: {
      question: "When does someone with cancer meet the Equality Act's definition of disability?",
      options: [{ text: "From the day they are diagnosed", right: true }, { text: "After 12 months off work" }, { text: "Only while having treatment" }],
      why: "Under the Equality Act 2010, you meet the definition from the day you are diagnosed, and in Northern Ireland the Disability Discrimination Act 1995 protects you.",
    },
  },
  {
    id: "bfog-driving",
    kicker: "Driving",
    question: "Is it safe to drive with brain fog?",
    hook: "Tiredness makes concentration worse, and some medicines can too. Planning trips around your energy, or letting someone else drive, can help.",
    short: "Brain fog can mean trouble concentrating, and tiredness usually makes it worse. Do not drive if you feel very tired or sleepy; ask someone else to drive, or ask about hospital transport. If you are not sure whether a medicine affects your driving, talk to your doctor or pharmacist.",
    sections: [
      {
        heading: "Concentration and tiredness",
        paragraphs: [
          "Symptoms can include trouble concentrating, difficulty doing more than one thing at a time and things taking longer to do than before. Tiredness usually makes the symptoms worse.",
          "Do not drive if you feel very tired. If you feel sleepy, do not drive or operate machinery.",
        ],
      },
      {
        heading: "Planning around your energy",
        paragraphs: [
          "If possible, ask a family member or friend to drive you. For hospital appointments, ask your nurse or doctor if there is any hospital transport available, so you do not have to drive.",
          "If you do have to drive, plan your trip for when you usually feel more alert. Try to avoid driving at times when the roads are busiest.",
        ],
      },
      {
        heading: "Medicines and driving",
        paragraphs: [
          "Some medicines, such as sleeping tablets, can cause difficulty concentrating or thinking clearly. You should not drive if you feel sleepy, dizzy or unable to concentrate.",
          "Sleep aids from a pharmacy may make you drowsy, which could make it difficult to drive.",
          "It's illegal to drive if you're unfit to do so because of legal or illegal drugs. Legal drugs include prescription and over-the-counter medicines, and if you're not sure whether you should drive, talk to your doctor, pharmacist or healthcare professional.",
        ],
      },
      {
        heading: "Telling DVLA",
        paragraphs: [
          "Drivers need to tell DVLA about some medical conditions, as they can affect driving. If you have a car or motorcycle licence, you can check and report your condition online, and you can contact DVLA if you're not sure what to do.",
          "You can be fined up to £1,000 if you do not tell DVLA about a medical condition that affects your driving. In Northern Ireland, the Driver and Vehicle Agency deals with this.",
        ],
      },
    ],
    helps: [
      "Do not drive if you feel very tired or sleepy.",
      "Ask a family member or friend to drive you, if possible.",
      "Ask your nurse or doctor about hospital transport for appointments.",
      "Plan trips for when you feel more alert, and avoid the busiest times.",
      "Talk to your doctor or pharmacist if you're not sure whether a medicine affects your driving.",
      "Check online whether a medical condition needs reporting to DVLA.",
    ],
    tryThisWeek: [
      "Skip driving when very tired.",
      "Ask about hospital transport.",
      "Drive when you feel most alert.",
    ],
    ask: "Could my treatment or medicines affect my driving, and is there hospital transport I can use?",
    interactive: {
      kind: "scenarios",
      title: "Behind the wheel",
      scenarios: [
        {
          id: "tired",
          situation: "You feel very tired but have errands to run.",
          options: [{ text: "Ask a friend or family member to drive", best: true }, { text: "Drive anyway" }],
          why: "Do not drive if you feel very tired. If possible, ask a family member or friend to drive you.",
        },
        {
          id: "hospital",
          situation: "You dread the drive to a hospital appointment.",
          options: [{ text: "Ask about hospital transport", best: true }, { text: "Drive while exhausted" }],
          why: "Ask your nurse or doctor if there is any hospital transport available so that you do not have to drive.",
        },
        {
          id: "timing",
          situation: "You have to drive, and you think more clearly in the morning.",
          options: [{ text: "Go when you feel alert and roads are quieter", best: true }, { text: "Go at rush hour after a long day" }],
          why: "If you do have to drive, plan your trip for when you usually feel more alert. Try to avoid driving at times when the roads are busiest.",
        },
        {
          id: "medicine",
          situation: "A new medicine makes you feel drowsy.",
          options: [{ text: "Ask your doctor or pharmacist before driving", best: true }, { text: "Drive and see how it goes" }],
          why: "If you're taking them and not sure if you should drive, talk to your doctor, pharmacist or healthcare professional.",
        },
      ],
    },
    sources: [MAC_FATIGUE, MAC_SLEEP, MAC_CHEMO_SE, NHS_INSOMNIA, GOV_DRUG_DRIVING, GOV_HEALTH_DRIVING, GOV_MEDICAL_DRIVING, CRUK_CB],
    quiz: {
      question: "If you do have to drive, when is it best to go?",
      options: [{ text: "When you usually feel more alert", right: true }, { text: "At the busiest times" }, { text: "When you feel very tired" }],
      why: "If you do have to drive, plan your trip for when you usually feel more alert.",
    },
  },
  {
    id: "bfog-family",
    kicker: "Family",
    question: "How do I explain brain fog to the people around me?",
    hook: "It is a side effect no one can see. Telling people what is going on lets them understand, and help.",
    short: "Changes in memory or concentration are often less obvious than other side effects, and family and friends may not know they can be caused by treatment. Explaining how it affects you, and that it usually gets better with time, helps them understand. They can help in practical ways, such as with shopping, meal planning and reminders.",
    sections: [
      {
        heading: "A side effect others can't see",
        paragraphs: [
          "Changes in memory or concentration are often less obvious than other side effects of treatment. You may need to explain how you are feeling and how it is affecting you.",
          "Your family and friends may not be aware these problems can be a side effect of treatment.",
        ],
      },
      {
        heading: "Telling the people around you",
        paragraphs: [
          "It might help to tell those around you about your problems with thinking and concentration. They might have noticed some changes already.",
          "If they have noticed any symptoms, they may be relieved to know that these usually get better with time.",
          "If family and friends are aware, they can help you with some of the ways of coping.",
        ],
      },
      {
        heading: "Help they can give",
        paragraphs: [
          "Family and friends may be able to offer support and practical help, such as food shopping and meal planning.",
          "When you arrange to meet someone or organise an event, it may help to write the details down and tell someone else.",
          "If some tasks feel too stressful right now, your family and friends can help you avoid them for a while.",
        ],
      },
      {
        heading: "Making it easier to talk",
        paragraphs: [
          "Many people find that talking to family and friends can help. If you find it hard, you can tell them you might not feel able to share everything.",
          "Telling people can be tiring. You can ask someone you trust to tell other people for you, and say what you want them to share.",
          "You can take a family member or friend to appointments. They can help you remember everything you want to discuss, and remind you afterwards what the doctor said.",
        ],
      },
    ],
    helps: [
      "Explain how you are feeling and how the changes affect you.",
      "Let family and friends know these changes usually get better with time.",
      "Ask for practical help, such as food shopping and meal planning.",
      "Write down plans and tell someone else the details.",
      "Ask someone you trust to pass your news on for you.",
      "Take a family member or friend to appointments.",
    ],
    tryThisWeek: [
      "Explain it to one person.",
      "Ask for help with meal planning.",
      "Share your plans with someone.",
    ],
    ask: "Is there information I could share with my family to help them understand these changes?",
    interactive: {
      kind: "scenarios",
      title: "Everyday conversations",
      scenarios: [
        {
          id: "birthday",
          situation: "A friend is hurt that you forgot their birthday.",
          options: [{ text: "Explain it can be a side effect of treatment", best: true }, { text: "Say nothing and feel guilty" }],
          why: "Your family and friends may not be aware these problems can be a side effect of treatment.",
        },
        {
          id: "worried",
          situation: "Your partner has noticed you losing track and looks worried.",
          options: [{ text: "Tell them it usually gets better with time", best: true }, { text: "Brush it off" }],
          why: "If they have noticed any symptoms, they may be relieved to know that these usually get better with time.",
        },
        {
          id: "dates",
          situation: "You keep mixing up the dates of family plans.",
          options: [{ text: "Write the details down and tell someone else", best: true }, { text: "Rely on memory" }],
          why: "When arranging to meet someone or organising an event, it may be helpful to write the details down and tell someone else.",
        },
        {
          id: "meals",
          situation: "Planning the week's meals feels overwhelming.",
          options: [{ text: "Ask family to help with meal planning", best: true }, { text: "Struggle on alone" }],
          why: "They may be able to offer support and practical help, such as food shopping and meal planning.",
        },
      ],
    },
    sources: [MAC_CRCC, CRUK_COPING, BCN_CI, MAC_TELLING, MAC_MENTAL_HEALTH],
    quiz: {
      question: "Why might family and friends not understand brain fog?",
      options: [{ text: "It is often less obvious than other side effects", right: true }, { text: "It only happens to a few people" }, { text: "It always goes away in a day" }],
      why: "Changes in memory or concentration are often less obvious than other side effects of treatment.",
    },
  },
  {
    id: "bfog-mood",
    kicker: "Mood",
    question: "Why does brain fog get me down, and what helps?",
    hook: "Frustration is understandable, and stress can make the fog worse. There are ways to ease both, and help is there, including right now if you need it.",
    short: "Many people feel frustrated by changes in memory and concentration, and stress can make the symptoms worse. Relaxation, talking and therapies such as counselling and cognitive behavioural therapy can help, and with the right treatment and support most people with depression make a full recovery. If you ever feel you cannot keep yourself safe, call 999 or go to A&E, or call Samaritans free on 116 123.",
    sections: [
      {
        heading: "Frustration is common",
        paragraphs: [
          "Cognitive impairment can be difficult to cope with, and many people feel frustrated. Problems with memory or concentration can interfere with your normal activities.",
          "Feeling low in mood is also among the common symptoms.",
        ],
      },
      {
        heading: "Stress and the fog",
        paragraphs: [
          "Stress can make the symptoms worse. Relaxation can help to reduce stress and may help to improve your memory and concentration.",
          "If everything feels too much, try to be kind to yourself. Making time to relax, and doing things you enjoy with family or friends, can help distract you from worries.",
          "Mindfulness uses techniques like meditation, breathing exercises and yoga, and can help reduce stress and anxiety.",
        ],
      },
      {
        heading: "Sadness or depression?",
        paragraphs: [
          "People with cognitive problems might also experience anxiety and depression. Signs of depression can include feeling low most of the time, losing interest in things you used to enjoy, changes in sleep, eating or concentration, and feeling helpless.",
          "It is normal to have these feelings sometimes. But if they go on for more than 2 weeks, talk to your doctor or nurse.",
          "Depression is a real illness with real symptoms, not a sign of weakness. With the right treatment and support, most people with depression can make a full recovery.",
        ],
      },
      {
        heading: "Help that can work",
        paragraphs: [
          "Counselling might help with anxiety and depression, and your GP might be able to refer you. Some people find cognitive behavioural therapy helpful, as it can help you change patterns of thinking and behaviour.",
          "You can refer yourself to NHS talking therapies for anxiety and depression without speaking to a GP, if you are registered with a GP and aged 18 or over, or 16 or over in some areas.",
          "Talking to others can help too, through Breast Cancer Now's forum, Macmillan's Online Community or a local support group.",
        ],
      },
      {
        heading: "If you are struggling right now",
        paragraphs: [
          "If you have any thoughts about self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. You can call Samaritans free on 116 123, any time, day or night.",
          "For urgent help with your mental health, call 111 and choose the mental health option, or ask for an urgent GP appointment. If you would rather not talk on the phone, you can text SHOUT to 85258.",
          "Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Make time to relax and do things you enjoy.",
      "Try mindfulness or relaxation techniques.",
      "Talk to your doctor or nurse if low feelings go on for more than 2 weeks.",
      "Refer yourself to NHS talking therapies, or ask your GP about counselling.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "If you do not feel you can keep yourself safe, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Make time to relax.",
      "Try a mindfulness exercise.",
      "Look up NHS talking therapies.",
    ],
    ask: "Could my low mood be depression, and can you refer me for counselling or a talking therapy?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your doctor or nurse",
      intro: "Tick any you have had most of the time. If they go on for more than 2 weeks, talk to your doctor or nurse.",
      signs: ["Feeling low or sad most of the time", "Losing interest in things I used to enjoy", "Changes in my sleep", "Changes in my eating", "Changes in my concentration", "Feeling helpless or vulnerable", "Problems starting or finishing tasks"],
      after: "If you have thoughts of self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. Samaritans is free on 116 123.",
      copyHeading: "How I have been feeling",
    },
    sources: [MAC_CRCC, BCN_CI, CRUK_COPING, MAC_DEPRESSION, NHS_DEPRESSION, MAC_MENTAL_HEALTH, NHS_TALKING, NHS_URGENT, NHS_SUICIDAL, SAMARITANS],
    quiz: {
      question: "When should you talk to your doctor or nurse about low feelings?",
      options: [{ text: "If they go on for more than 2 weeks", right: true }, { text: "Only if they last a year" }, { text: "Never, they always pass" }],
      why: "But if they go on for more than 2 weeks, talk to your doctor or nurse.",
    },
  },
];
