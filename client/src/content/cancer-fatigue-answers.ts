import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Tiredness after treatment page's pieces
// (content/library-conditions/cancer-mind-digestion.ts, `cancerFatigue`). Every sentence was written from
// wording checked on 21 October 2026 on the pages listed under each answer's `sources`; nothing is added
// that those pages do not say. Most of it comes from Macmillan Cancer Support, Cancer Research UK, the NHS,
// the government's pages on disability and Access to Work, and Samaritans. The NHS website has no single
// page on cancer-related fatigue, so its pages on radiotherapy, chemotherapy, tiredness, sleep, anaemia,
// the thyroid, mental health and carers are used alongside the charities' fatigue pages. The mood answer
// follows safe-messaging guidance and gives the crisis routes exactly as the NHS and Samaritans state them.
// General information only; it never replaces what a person's own cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/coping/physically/fatigue/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_TIRED = nhs("Tiredness and fatigue", "symptoms/tiredness-and-fatigue/");
const NHS_TIRED_TIPS = nhs("Self-help tips to fight tiredness", "live-well/sleep-and-tiredness/self-help-tips-to-fight-fatigue/");
const NHS_RADIO_SE = nhs("Radiotherapy: side effects", "tests-and-treatments/radiotherapy/side-effects/");
const NHS_CHEMO = nhs("Chemotherapy", "tests-and-treatments/chemotherapy/");
const NHS_IDA = nhs("Iron deficiency anaemia", "conditions/iron-deficiency-anaemia/");
const NHS_HYPO = nhs("Underactive thyroid (hypothyroidism)", "conditions/underactive-thyroid-hypothyroidism/");
const NHS_INSOMNIA = nhs("Insomnia", "conditions/insomnia/");
const NHS_WATER = nhs("Water, drinks and hydration", "live-well/eat-well/food-guidelines-and-food-labels/water-drinks-nutrition/");
const NHS_DEPRESSION = nhs("Depression in adults", "mental-health/conditions/depression-in-adults/overview/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");
const NHS_CARER_ASSESS = nhs("Carer's assessments", "social-care-and-support/support-and-benefits-for-carers/carer-assessments/");

const MAC_FATIGUE = mac("Tiredness (fatigue)", "impacts-of-cancer/tiredness");
const MAC_LATE = mac("Late effects of cancer treatment", "after-treatment/late-effects-of-treatment");
const MAC_RECOVER = mac("Beginning to recover", "after-treatment/beginning-to-recover");
const MAC_LIFESTYLE = mac("Lifestyle and well-being after treatment", "after-treatment/lifestyle-and-wellbeing-after-treatment");
const MAC_ACTIVE_AFTER = mac("Being physically active after treatment", "after-treatment/being-physically-active");
const MAC_ACTIVITY = mac("Physical activity and cancer", "treatment/preparing-for-treatment/physical-activity-and-cancer");
const MAC_EXERCISE_SAFE = mac("Exercising safely when you have cancer", "treatment/preparing-for-treatment/physical-activity-and-cancer/exercising-safely");
const MAC_ACTIVITY_TYPES = mac("Types of physical activity", "treatment/preparing-for-treatment/physical-activity-and-cancer/types");
const MAC_SLEEP = mac("Trouble sleeping (insomnia)", "impacts-of-cancer/trouble-sleeping");
const MAC_EATING = mac("Eating problems and cancer", "impacts-of-cancer/eating-problems");
const MAC_EATING_TIPS = mac("Tips for managing eating problems", "impacts-of-cancer/eating-problems/tips-for-managing-eating-problems");
const MAC_RETURNING = mac("Returning to work", "impacts-of-cancer/work-and-cancer/returning-to-work");
const MAC_ADJUSTMENTS = mac("Reasonable adjustments", "impacts-of-cancer/work-and-cancer/reasonable-adjustments");
const MAC_RIGHTS = mac("Cancer and employment rights", "impacts-of-cancer/work-and-cancer/cancer-and-employment-rights");
const MAC_WORK_DECISIONS = mac("Making decisions about work after treatment", "after-treatment/making-decisions-about-work-after-treatment");
const MAC_TELLING = mac("How to tell people you have cancer", "diagnosis/talking-about-cancer/how-to-tell-people-you-have-cancer");
const MAC_MENTAL_HEALTH = mac("Cancer and mental health support", "treatment/coping-with-treatment/cancer-and-mental-health-support");
const MAC_BUDDIES = mac("Get support from Macmillan Buddies", "get-help/emotional-help/macmillan-buddies");
const MAC_DEPRESSION = mac("Depression and cancer", "impacts-of-cancer/depression");
const MAC_SUPPORTING = mac("How to support someone with cancer", "supporting-someone/emotional-support-for-family-and-friends/how-to-support-someone-with-cancer");
const MAC_CARER_SELF = mac("Looking after yourself as a carer", "supporting-someone/emotional-support-for-carers/looking-after-yourself-as-a-carer");
const MAC_LOOKING_AFTER = mac("Looking after someone with cancer", "supporting-someone/looking-after-someone-with-cancer");

const CRUK_WHAT = cruk("What is cancer fatigue?", "what-is-cancer-fatigue");
const CRUK_CAUSES = cruk("Causes of cancer fatigue", "causes");
const CRUK_ASSESS = cruk("How is cancer fatigue assessed?", "how-fatigue-assessed");
const CRUK_MANAGE = cruk("Managing and treating cancer fatigue", "managing-treating-cancer-fatigue");

const GOV_DISABILITY = gov("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");
const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");

const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const cancerFatigueAnswers: LearnArticle[] = [
  {
    id: "cf-why",
    kicker: "Understanding",
    question: "Why does cancer treatment leave me so tired?",
    hook: "The cancer, each treatment, the body's repair work and the worry that comes with it can all drain you at the same time.",
    short: "Fatigue means feeling very tired, exhausted and lacking energy, and it can come from the cancer itself or from treatment. Doctors think the body needs extra energy to repair and heal, and that surgery, radiotherapy, chemotherapy and hormone treatment each add to it in their own way. Side effects, pain and worry can make it worse.",
    sections: [
      {
        heading: "More than being tired",
        paragraphs: [
          "Fatigue means feeling very tired, exhausted and lacking energy. It can be a symptom of the cancer or a side effect of treatment.",
          "Fatigue in people with cancer can be more severe. You may get tired more quickly after less activity, and feel exhausted even when you are getting enough rest and sleep.",
          "It is very common. Research suggests cancer related fatigue affects almost 65 out of 100 people with cancer, and for many it is the most troubling symptom of treatment.",
        ],
      },
      {
        heading: "The body's repair work",
        paragraphs: [
          "Doctors do not fully understand what causes cancer-related fatigue, and there may be many reasons for it. It might be because the immune system is affected and the body needs extra energy to repair and heal. Or it could be caused by a build-up of chemicals as the cancer cells are destroyed.",
          "The cancer itself can play a part. Some cancers reduce the number of red blood cells, which is called anaemia, and some, such as breast and prostate cancer, can change hormone levels, which can cause fatigue.",
        ],
      },
      {
        heading: "Each treatment in its own way",
        paragraphs: [
          "After surgery, you are likely to feel some fatigue. It usually gets better with time, but it may last for a few weeks or months, and people often underestimate how long it takes to get over an operation.",
          "Most people having radiotherapy feel increasingly tired as treatment goes on, partly because the body is using energy to repair damage to healthy cells. The tiredness can continue for several weeks or months after treatment finishes.",
          "Most chemotherapy drugs make red blood cell levels drop between treatments, and the body is also using energy to repair itself. Hormone treatment, such as for breast or prostate cancer, can cause fatigue because it blocks or lowers the amount of hormones in the body.",
        ],
      },
      {
        heading: "Other things pile on",
        paragraphs: [
          "The side effects of treatment can make fatigue worse. Feeling sick, having trouble sleeping or generally feeling low can all leave you with less energy.",
          "Anxiety and depression are common in people with cancer, and they are often very draining emotions. Pain, eating problems and some medicines can add to it too.",
        ],
      },
      {
        heading: "Not a sign the cancer is worse",
        paragraphs: [
          "You might worry that feeling so tired all the time means your cancer could be getting worse. But it is more likely to be a side effect of treatment, or due to the fact that cancer can cause fatigue.",
          "Tell your doctor or nurse about any new or unusual symptoms. They can help work out the cause and how to manage it.",
        ],
      },
    ],
    helps: [
      "Tell your doctor or nurse about any new or unusual symptoms, so they can help work out the cause.",
      "Let your healthcare team know about side effects, as they can usually help treat them or find ways to help you cope.",
      "Speak to your doctor if you think your medicines are making you unnecessarily tired.",
      "Contact your care team if you suddenly feel very tired and out of breath, as this can be a sign of anaemia.",
      "Speak to your specialist nurse about any worries; they can answer questions and refer you to other specialists.",
    ],
    tryThisWeek: [
      "Note any new or unusual symptoms.",
      "Ask if a medicine adds to tiredness.",
      "Share one worry with your nurse.",
    ],
    ask: "Which of my treatments is most likely to be causing my tiredness, and could anything else be adding to it?",
    interactive: {
      kind: "flip-cards",
      title: "How each treatment tires you",
      intro: "Turn a card to see why each treatment can leave you tired.",
      cards: [
        { id: "surgery", front: "Surgery", when: "After an operation", back: "Fatigue usually gets better with time, over a few weeks or months. Pain, the anaesthetic and painkillers can add to it." },
        { id: "radiotherapy", front: "Radiotherapy", when: "During and after a course", back: "The body uses energy to repair damage to healthy cells. Tiredness can last several weeks or months after treatment." },
        { id: "chemotherapy", front: "Chemotherapy", when: "In cycles over several months", back: "Red blood cell levels drop between treatments, then usually start to recover within 2 weeks." },
        { id: "hormone", front: "Hormone treatment", when: "Often for breast or prostate cancer", back: "It blocks or lowers the amount of hormones in the body, which can cause fatigue." },
        { id: "immunotherapy", front: "Immunotherapy and targeted drugs", when: "During or some months after treatment", back: "Side effects can include general tiredness. Doctors are still looking at why these treatments cause fatigue." },
      ],
    },
    sources: [CRUK_WHAT, MAC_FATIGUE, CRUK_CAUSES, NHS_RADIO_SE, NHS_CHEMO],
    quiz: {
      question: "Why can radiotherapy leave you tired?",
      options: [{ text: "The body uses energy to repair healthy cells", right: true }, { text: "It always causes anaemia" }, { text: "It stops you sleeping at night" }],
      why: "Most people having radiotherapy feel increasingly tired as treatment goes on, partly because the body is using energy to repair damage to healthy cells.",
    },
  },
  {
    id: "cf-not-laziness",
    kicker: "Understanding",
    question: "Is it laziness, or is it all in my head?",
    hook: "Neither. Cancer fatigue is very real, and unlike ordinary tiredness it does not usually go away with sleep or rest.",
    short: "Cancer fatigue is very real and can have a big impact on your life. Unlike ordinary tiredness, it doesn't usually go away with sleep or rest, and it can make simple things feel like hard work. Telling your healthcare team how it affects you helps them help you.",
    sections: [
      {
        heading: "Real, not a weakness",
        paragraphs: [
          "Fatigue is very real and can have a big impact on your life. It can affect you physically, emotionally and mentally.",
          "It is different from tiredness, which is usually short term and gets better after you stop, sleep or rest. Cancer fatigue doesn't usually go away with sleep or rest.",
        ],
      },
      {
        heading: "Why it can look like not trying",
        paragraphs: [
          "Fatigue can mean needing to rest even when you've done little or no activity, finding it hard to get up in the morning, or feeling you just cannot be bothered to do much. It can make it hard to concentrate, even on watching TV or talking to a friend.",
          "Things that you used to find easy to do can feel like hard work. You might not have the energy to cook, clean, bathe or go shopping.",
          "It can make simple things, such as getting dressed, difficult, and leave you feeling weak, with no energy or strength.",
        ],
      },
      {
        heading: "When other people don't see it",
        paragraphs: [
          "Fatigue can be very frustrating. You and your relatives might underestimate how much it can affect daily life.",
          "You can feel very down and not want to go out or be with people, which can be hard for others to understand. Some people feel that fatigue is a constant reminder of their cancer, and this can be hard to accept.",
        ],
      },
      {
        heading: "Putting it into words",
        paragraphs: [
          "There are no medical tests to measure fatigue. Your specialist nurse may ask you to give it a score from 0 to 10, where 0 is no fatigue and 10 is the worst possible fatigue.",
          "It is very important that your fatigue is properly assessed, because it helps your healthcare team make the right decisions about treating you. If you are too tired to answer questions, family or friends may be able to help.",
        ],
      },
      {
        heading: "Go easy on yourself",
        paragraphs: [
          "Try not to expect too much of yourself too soon. Recovery is a gradual process and can have ups and downs, and some days you may feel better than others.",
          "On days when you feel less well, it is okay to be less active and to rest more.",
        ],
      },
    ],
    helps: [
      "Tell your healthcare team how you feel and whether fatigue is affecting your day-to-day activities.",
      "Use a score from 0 to 10 to describe how severe your fatigue is.",
      "Keep a daily diary of your energy levels, and share it with your healthcare team.",
      "Bring a family member or friend to help answer questions if you feel too tired.",
      "Try not to expect too much of yourself too soon.",
      "On days when you feel less well, let yourself be less active and rest more.",
    ],
    tryThisWeek: [
      "Score your fatigue from 0 to 10.",
      "Keep a daily energy diary.",
      "Rest more on a bad day.",
    ],
    ask: "Can you assess my fatigue properly, and tell me what might be causing it?",
    interactive: {
      kind: "scenarios",
      title: "When it feels like laziness",
      scenarios: [
        {
          id: "sleep",
          situation: "A friend says a good night's sleep will sort you out.",
          options: [{ text: "Explain cancer fatigue doesn't usually go away with sleep", best: true }, { text: "Agree, and feel you have failed" }],
          why: "Cancer fatigue doesn't usually go away with sleep or rest.",
        },
        {
          id: "bad-day",
          situation: "You feel guilty for resting on a day you feel unwell.",
          options: [{ text: "Let yourself rest more today", best: true }, { text: "Push through to prove you can" }],
          why: "On days when you feel less well, it is okay to be less active and to rest more.",
        },
        {
          id: "describe",
          situation: "Your nurse asks how bad your tiredness is, and you don't know how to describe it.",
          options: [{ text: "Give it a score from 0 to 10", best: true }, { text: "Say you're fine" }],
          why: "Your specialist nurse may ask you to give it a score from 0 to 10, where 0 is no fatigue and 10 is the worst possible fatigue.",
        },
      ],
    },
    sources: [CRUK_WHAT, MAC_FATIGUE, CRUK_ASSESS, MAC_RECOVER],
    quiz: {
      question: "How is cancer fatigue different from ordinary tiredness?",
      options: [{ text: "It doesn't usually go away with sleep or rest", right: true }, { text: "It only lasts a day or two" }, { text: "It is a sign of not trying hard enough" }],
      why: "Cancer fatigue doesn't usually go away with sleep or rest.",
    },
  },
  {
    id: "cf-other-causes",
    kicker: "Causes",
    question: "What else could be making my tiredness worse?",
    hook: "Fatigue rarely has one cause. Some of the extras, such as anaemia, a slow thyroid, poor sleep, pain or a medicine, can be checked and treated.",
    short: "Cancer fatigue is thought to come from several things at once. Anaemia, other conditions such as an underactive thyroid or diabetes, poor sleep, low mood, pain and some medicines can all make it worse. Treating the cause can improve how you feel, so it is worth telling your team about other symptoms.",
    sections: [
      {
        heading: "Usually more than one cause",
        paragraphs: [
          "Healthcare professionals don't fully understand what causes cancer related fatigue, but they think it may be a combination of factors. These include the type and stage of cancer, treatment and its side effects, other medical conditions, how you feel emotionally and poor nutrition.",
          "Your doctor will want to check for other medical conditions that may be causing your fatigue. You might have blood tests, for example to check for anaemia or diabetes, and a urine sample tested. Treating the cause and the symptoms can improve how you feel.",
        ],
      },
      {
        heading: "Anaemia",
        paragraphs: [
          "Anaemia is when you have a low number of red blood cells, so your body gets less oxygen. It can make you feel very tired, and you may also feel breathless, dizzy and light-headed.",
          "A blood test can easily check your red cell count and show if you're anaemic. The main treatment is a blood transfusion, and other treatments include a drug called erythropoietin or an iron infusion.",
        ],
      },
      {
        heading: "Thyroid and other conditions",
        paragraphs: [
          "Other health conditions, like diabetes, heart problems or low thyroid function, can also cause fatigue. Having them alongside cancer may make the fatigue worse.",
          "An underactive thyroid can make you feel extremely tired, feel the cold more than usual and put on weight. It can be caused by surgery or radiotherapy around the neck or thyroid, and blood tests can check it.",
          "Your doctor may also look for conditions such as sleep apnoea, when breathing stops and starts during sleep, depression, long term lung problems, or heart or liver failure.",
        ],
      },
      {
        heading: "Sleep, mood and pain",
        paragraphs: [
          "Trouble sleeping over a long period of time can lead to fatigue, low mood and difficulty concentrating. Anxiety, depression, stress and tension can make fatigue worse.",
          "If you have pain, it can cause fatigue, and the best way to deal with fatigue caused by pain is to manage the pain. Strong painkillers such as morphine can also cause fatigue.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "Painkillers, anti-sickness drugs, antidepressants, cough medicines, sleeping tablets and steroids can make you feel drowsy or tired. Fatigue can be worse if you are taking a combination of these.",
          "Some medicines for other health conditions can also make you feel tired. Speak to your doctor if you think your medicines are making you unnecessarily tired.",
        ],
      },
    ],
    helps: [
      "Let your doctor know about other symptoms, such as breathlessness or dizziness, so they can check for anaemia.",
      "Speak to your doctor if you think your medicines are making you unnecessarily tired.",
      "Talk to your GP, cancer doctor or specialist nurse about any pain, as managing pain helps with fatigue.",
      "Talk to your cancer doctor, specialist nurse or GP if you are having trouble sleeping.",
      "See a GP if you think you might have an underactive thyroid.",
      "Talk about how you feel with someone close, or a support group, if worry or low mood is adding to it.",
    ],
    tryThisWeek: [
      "Note symptoms besides tiredness.",
      "Ask about your medicines.",
      "Mention any pain or poor sleep.",
    ],
    ask: "Could anaemia, my thyroid or one of my medicines be adding to my tiredness?",
    interactive: {
      kind: "risk-check",
      title: "What could be adding to it?",
      intro: "Tick any that apply. Many of these can be checked or treated by your healthcare team.",
      items: [
        { id: "anaemia", label: "Breathless, dizzy or light-headed", note: "These can be signs of anaemia. A blood test can easily check your red cell count.", changeable: true },
        { id: "thyroid", label: "Feeling the cold and putting on weight", note: "These can be signs of an underactive thyroid, which blood tests can check and medicine can treat.", changeable: true },
        { id: "sleep", label: "Poor sleep for a long time", note: "Trouble sleeping over a long period can lead to fatigue, low mood and difficulty concentrating.", changeable: true },
        { id: "mood", label: "Worry, low mood or stress", note: "Anxiety, depression, stress and tension can make fatigue worse.", changeable: true },
        { id: "pain", label: "Pain", note: "The best way to deal with fatigue caused by pain is to manage the pain.", changeable: true },
        { id: "medicines", label: "Several medicines that cause drowsiness", note: "Fatigue can be worse with a combination. Speak to your doctor if you think medicines are adding to it.", changeable: true },
        { id: "combination", label: "A combination of cancer treatments", note: "Fatigue is often worse in people who are having a combination of treatments.", changeable: false },
      ],
    },
    sources: [CRUK_CAUSES, MAC_FATIGUE, CRUK_MANAGE, NHS_TIRED, NHS_IDA, NHS_HYPO, CRUK_ASSESS],
    quiz: {
      question: "What can easily show if you're anaemic?",
      options: [{ text: "A blood test", right: true }, { text: "How many hours you sleep" }, { text: "A chest X-ray" }],
      why: "A blood test can easily check your red cell count and show if you're anaemic.",
    },
  },
  {
    id: "cf-how-long",
    kicker: "Recovery",
    question: "How long will this tiredness last?",
    hook: "For most people it eases after treatment ends. For some it lingers for months or longer, and that is known as a late effect of treatment.",
    short: "For most people, fatigue gets better after treatment finishes, but for some it may continue for months or sometimes years. How long it lasts depends on what is causing it, and recovery has ups and downs. Your team can keep an eye on it, so tell them if it isn't improving.",
    sections: [
      {
        heading: "Most people improve",
        paragraphs: [
          "For most people, fatigue gets better after treatment finishes. But for some it may continue for months or sometimes years.",
          "How long it lasts, how severe it is and how often you have it is different from person to person. It depends on what is causing it.",
        ],
      },
      {
        heading: "It depends on the treatment",
        paragraphs: [
          "Fatigue after surgery usually gets better with time, though it may last for a few weeks or months, depending on the operation.",
          "With radiotherapy, tiredness usually starts during treatment and can continue for several weeks or months after it finishes.",
          "During chemotherapy, red blood cell levels usually start to recover within 2 weeks, depending on the type. You start to feel less tired and get some energy back before the next cycle.",
        ],
      },
      {
        heading: "When it lasts longer",
        paragraphs: [
          "Fatigue that goes on long after treatment is sometimes called long term or chronic fatigue, when symptoms last for at least 6 months. Things that can cause it include bone marrow transplants, treatment for brain tumours, and taking hormone therapy for several years, such as tamoxifen.",
          "Fatigue that continues months or years after treatment is called a late effect of treatment. Your healthcare team will regularly check how you are feeling, and your cancer team can tell you about the risk of late effects.",
        ],
      },
      {
        heading: "Ups and downs",
        paragraphs: [
          "Fatigue can vary throughout the day, and each day may be different. Recovery is a gradual process and can have ups and downs.",
          "How long it takes to get back to everyday things usually depends on the type of cancer, your treatment and your general health. It is normal to feel tired for several months.",
        ],
      },
      {
        heading: "Keeping your team in the loop",
        paragraphs: [
          "Tell your cancer team if your side effects do not improve after treatment, or if you get new symptoms. There is usually something they can do to improve them.",
          "You can arrange to see your cancer doctor or specialist nurse between appointments, and you can contact your GP at any time.",
        ],
      },
    ],
    helps: [
      "Tell your cancer team if your tiredness does not improve after treatment.",
      "Ask your cancer team about the risk of late effects from your treatment.",
      "Keep a fatigue diary to work out how treatment and everyday activities affect you.",
      "Think of recovery as a set of small, achievable goals, and be flexible with yourself.",
      "Contact your specialist nurse between appointments, or your GP at any time, if you are worried.",
    ],
    tryThisWeek: [
      "Track your energy in a diary.",
      "Set one small, achievable goal.",
      "Ask about late effects.",
    ],
    ask: "Is my tiredness improving as you would expect, or could it be a late effect of my treatment?",
    interactive: {
      kind: "timeline",
      title: "How fatigue can change over time",
      steps: [
        { id: "during", when: "During treatment", title: "It builds", points: ["Most people having radiotherapy feel more tired as treatment goes on.", "With chemotherapy, energy often comes back between cycles."] },
        { id: "weeks", when: "Weeks after", title: "Settling", points: ["Fatigue after surgery usually gets better with time.", "Radiotherapy tiredness can continue for several weeks or months."] },
        { id: "months", when: "Months after", title: "Most people improve", points: ["For most people, fatigue gets better after treatment finishes.", "It is normal to feel tired for several months."] },
        { id: "longer", when: "6 months or more", title: "If it lingers", points: ["Symptoms lasting at least 6 months are called long term fatigue.", "It is a late effect your team can check and help with."] },
      ],
    },
    sources: [MAC_FATIGUE, CRUK_WHAT, CRUK_CAUSES, NHS_RADIO_SE, MAC_LATE, MAC_RECOVER, MAC_SUPPORTING],
    quiz: {
      question: "What happens to fatigue for most people after treatment finishes?",
      options: [{ text: "It gets better", right: true }, { text: "It stays the same for life" }, { text: "It gets worse every year" }],
      why: "For most people, fatigue gets better after treatment finishes.",
    },
  },
  {
    id: "cf-pacing",
    kicker: "Pacing",
    question: "How do I pace my energy through the day?",
    hook: "Plan your day around what matters most, spread jobs out, and balance rest with some activity.",
    short: "Pacing means planning your day so you have energy for the things that matter most, spreading tasks out and balancing rest with some activity. A fatigue diary helps you see when your energy is highest. An occupational therapist can teach you ways to save energy.",
    sections: [
      {
        heading: "Plan around what matters",
        paragraphs: [
          "If you have fatigue, planning ahead can help. Try planning your day so that you have energy to do the things that are most important to you.",
          "Pace yourself. Take short naps and rests, but try to balance them with some activity or exercise.",
          "Try to prioritise tasks, so you can do the more important ones when you have the most energy.",
        ],
      },
      {
        heading: "Keep a fatigue diary",
        paragraphs: [
          "A daily diary can help you record your energy levels at different times of the day, find any patterns, and see whether anything makes your fatigue better or worse.",
          "Write down the times when you feel your best and when you feel most tired. This may help you plan what time of day is best for more tiring activities, and you can share the diary with your healthcare team.",
          "If you usually feel very tired at a certain time of day, avoid planning activity for that time.",
        ],
      },
      {
        heading: "Rest without giving up the day",
        paragraphs: [
          "Plan your day so you can rest a few times throughout it. You don't have to sleep while you rest: just sitting or lying down will help, and if you do sleep, keep it short so it doesn't affect your night.",
          "Try not to stay in bed or in your nightwear if you have no plans to go out. You usually feel better if you get up, have a wash, get dressed and go for a short walk if you can.",
          "It's important not to overdo it, even when you think you can. You'll be more tired later in the day and less able to cope.",
        ],
      },
      {
        heading: "Saving energy in everyday jobs",
        paragraphs: [
          "Make a list of things you want to do and put them in order of importance. Ask whether you could do things another way, such as shopping online, or spread them out over the week.",
          "Spread housework over the week and do a little each day, rather than lots at one time. Sit down for tasks when you can, and cook extra portions to freeze when you feel less tired.",
        ],
      },
      {
        heading: "Help with pacing",
        paragraphs: [
          "Your cancer doctor, specialist nurse or GP can refer you to an occupational therapist. They can advise you on how to pace yourself and manage tiredness, and teach you ways to conserve your energy.",
        ],
      },
    ],
    helps: [
      "Plan your day so you have energy for the things that matter most to you.",
      "Keep a fatigue diary of your energy levels at different times of the day.",
      "Put your jobs in order of importance, and spread them out over the week.",
      "Plan rests through the day; just sitting or lying down will help.",
      "Get up, have a wash and get dressed, even if you have no plans to go out.",
      "Ask to be referred to an occupational therapist.",
    ],
    tryThisWeek: [
      "Plan each day around what matters.",
      "Note your energy at different times.",
      "Spread one big job over the week.",
    ],
    ask: "Could I see an occupational therapist to help me pace my energy?",
    interactive: {
      kind: "scenarios",
      title: "Spending your energy",
      scenarios: [
        {
          id: "good-morning",
          situation: "You wake with energy and want to clean the whole house.",
          options: [{ text: "Do the most important job, then rest", best: true }, { text: "Do it all while you can" }],
          why: "It's important not to overdo it, even when you think you can. You'll be more tired later in the day and less able to cope.",
        },
        {
          id: "shopping",
          situation: "The weekly shop leaves you wiped out for the rest of the day.",
          options: [{ text: "Try shopping online", best: true }, { text: "Keep going in person every week" }],
          why: "Ask whether you could do things another way, such as shopping online, or spread them out over the week.",
        },
        {
          id: "no-plans",
          situation: "You have no plans today and want to stay in your nightwear.",
          options: [{ text: "Get up, wash, dress and walk if you can", best: true }, { text: "Stay in bed all day" }],
          why: "You usually feel better if you get up, have a wash, get dressed and go for a short walk if you can.",
        },
      ],
    },
    sources: [MAC_FATIGUE, CRUK_MANAGE, MAC_ACTIVITY, MAC_ACTIVE_AFTER, MAC_ACTIVITY_TYPES],
    quiz: {
      question: "What does pacing involve?",
      options: [{ text: "Spreading tasks out and planning rests", right: true }, { text: "Doing everything on good days" }, { text: "Resting in bed all day" }],
      why: "Spread housework over the week and do a little each day, rather than lots at one time.",
    },
  },
  {
    id: "cf-gentle-exercise",
    kicker: "Moving more",
    question: "Can gentle exercise really give me energy back?",
    hook: "It sounds backwards, but muscles that are not used become weaker. A little regular activity, built up slowly, is one of the best ways to ease fatigue.",
    short: "When you are less active, your muscles get weaker, which can make you more tired. There is good evidence that physical activity is one of the best ways to reduce fatigue. Check with your GP, nurse or physiotherapist first, then start small, such as a short daily walk, and build up gradually.",
    sections: [
      {
        heading: "Why moving helps",
        paragraphs: [
          "If you have fatigue, you may become less active over time. When your muscles are not being used regularly, they become weaker. This is called deconditioning.",
          "There is good evidence that physical activity, such as walking quickly, is one of the best ways to help reduce fatigue. Being active may also increase your appetite, improve sleep and help with mood.",
          "Research shows that doing some physical activity during and after cancer treatment can help reduce fatigue. Even going for a short walk can help.",
        ],
      },
      {
        heading: "Check first, then start small",
        paragraphs: [
          "Before starting any physical activity plan, it is important to talk to a healthcare professional first. Your doctor, nurse or physiotherapist can help you find a realistic goal, so you don't overdo things.",
          "To start with, you could go for a short walk each day, and increase the distance when you're ready. Even a single 15-minute walk can give you an energy boost.",
          "Increase your activity slowly. Doing too much too soon can make you feel more tired.",
        ],
      },
      {
        heading: "Building up over time",
        paragraphs: [
          "UK guidelines recommend that adults build up to at least 150 minutes of moderate activity a week. You could do 30 minutes on 5 days of the week, split into three 10-minute sessions.",
          "Doing something is better than doing nothing. Listen to your body, do what you feel able to do, and choose something you enjoy.",
          "Activities that improve muscle strength on at least 2 days of the week also help. Simple ones at home include moving from sitting to standing using a chair, or press-ups against a wall.",
        ],
      },
      {
        heading: "Staying safe",
        paragraphs: [
          "Do not exercise if you feel unwell. Stop if you get any sudden symptoms, such as feeling dizzy, chest pain, a racing heart or breathing problems, and speak to a doctor straight away.",
          "Some soreness or stiffness for 2 to 3 days after exercise, and being tired during it, is common. If you feel very sore or very tired, try to do a bit less the next time.",
          "If you have anaemia, you may only feel able to manage everyday activities. Listen to your body and rest when you need to until it has improved.",
        ],
      },
      {
        heading: "Help to get going",
        paragraphs: [
          "Some hospitals, cancer charities and leisure clubs have exercise programmes for people recovering from treatment. Your cancer team can tell you what is available in your area.",
          "Your GP, cancer doctor or specialist nurse can refer you to a physiotherapist. Some areas have cancer exercise specialists who can help you plan a programme that is safe for you.",
        ],
      },
    ],
    helps: [
      "Check with your GP, nurse or physiotherapist before starting a new activity plan.",
      "Start with a short walk each day and build up gradually.",
      "Choose an activity you enjoy.",
      "If you feel very sore or very tired afterwards, do a bit less the next time.",
      "Stop and speak to a doctor straight away if you feel dizzy or have chest pain while exercising.",
      "Ask your cancer team about exercise programmes in your area.",
    ],
    tryThisWeek: [
      "Ask your team what is safe.",
      "Take a short daily walk.",
      "Pick an activity you enjoy.",
    ],
    ask: "How much activity is safe for me right now, and is there an exercise programme I can be referred to?",
    interactive: {
      kind: "signs",
      title: "Stop and get advice",
      intro: "Stop exercising if you get any of these suddenly. Tick any that have happened to you.",
      signs: ["Feeling dizzy", "Chest pain", "A racing heart", "Breathing problems", "Feeling sick", "Unusual back or bone pain", "Unusual muscle pain", "A headache that does not go away"],
      after: "Speak to a doctor straight away if you notice any of these, or any other symptoms.",
      copyHeading: "Symptoms I had while exercising",
    },
    sources: [MAC_FATIGUE, CRUK_MANAGE, MAC_ACTIVITY, MAC_EXERCISE_SAFE, MAC_ACTIVE_AFTER, NHS_TIRED_TIPS, MAC_LIFESTYLE, MAC_ACTIVITY_TYPES],
    quiz: {
      question: "What is a good way to start being more active?",
      options: [{ text: "A short walk each day, built up gradually", right: true }, { text: "A long run straight away" }, { text: "Waiting until the tiredness has gone" }],
      why: "To start with, you could go for a short walk each day, and increase the distance when you're ready.",
    },
  },
  {
    id: "cf-sleep",
    kicker: "Sleep",
    question: "Why can't I sleep when I'm this exhausted?",
    hook: "Worry, pain, hot flushes and steroids can all keep you awake, even when your body is worn out. A steady routine helps both sleep and fatigue.",
    short: "Many people affected by cancer have trouble sleeping, because of worry, pain or treatment side effects such as hot flushes. Even though fatigue may make you feel like sleeping all the time, keeping a normal sleep routine helps. If it goes on, talk to your doctor or nurse, as there are treatments such as cognitive behavioural therapy for insomnia.",
    sections: [
      {
        heading: "Exhausted but awake",
        paragraphs: [
          "Insomnia means having trouble getting to sleep or staying asleep, or waking up still feeling tired. There are many reasons why people affected by cancer might have trouble sleeping.",
          "Worry, anxiety, pain and feeling unwell can keep you awake. Steroids can make you feel alert, and hormonal therapy for breast or prostate cancer can cause hot flushes and sweats that keep you awake.",
          "Trouble sleeping over a long period of time can lead to fatigue, low mood and difficulty concentrating.",
        ],
      },
      {
        heading: "Keep a routine",
        paragraphs: [
          "Even though fatigue may make you feel like sleeping all the time, try to keep to a normal sleep routine. Good quality sleep may help with fatigue, and reduce your need to sleep during the day.",
          "Go to bed and get up at the same time each day. Most adults need 7 to 9 hours of sleep a night, but you may be fine with less if you feel refreshed when you wake.",
        ],
      },
      {
        heading: "Short, early naps",
        paragraphs: [
          "Limit daytime naps to 20 to 30 minutes, or don't have them at all, so they don't stop you sleeping at night. Shorter naps earlier in the day are less likely to affect your sleep.",
          "Be aware of how naps affect you. Some people find that daytime naps help them sleep better at night, while others sleep less well after them.",
        ],
      },
      {
        heading: "Winding down",
        paragraphs: [
          "Spend time relaxing before bed, with a warm bath, a book or music. Stop caffeine and alcohol about 6 hours before bed, and avoid screens for at least an hour.",
          "A light snack may stop hunger waking you up. Writing down any worries before bed can help you put them aside until the next day.",
          "If you are awake for long periods, some people find getting out of bed for a 10-minute break helps. Gentle exercise in the day, such as walking, can help you feel naturally tired and ready for sleep.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "Talk to your cancer doctor, specialist nurse or GP if you are having trouble sleeping. Keeping a diary of your sleep pattern helps them build up a picture.",
          "Cognitive behavioural therapy for insomnia helps you change negative patterns, including negative thoughts about sleep. Sleepio, a digital programme for poor sleep, is available free through Macmillan.",
          "Sleeping tablets are usually only prescribed for a few days or weeks. Check with your healthcare team before making any changes to your medicines.",
        ],
      },
    ],
    helps: [
      "Go to bed and get up at the same time each day.",
      "Keep naps to 20 to 30 minutes, earlier in the day, or skip them.",
      "Stop caffeine and alcohol about 6 hours before bed.",
      "Avoid screens for at least an hour before bed.",
      "Write down any worries before you go to bed.",
      "Talk to your doctor or nurse if you are having trouble sleeping.",
    ],
    tryThisWeek: [
      "Keep the same wake-up time.",
      "Keep naps short and early.",
      "Screens off an hour before bed.",
    ],
    ask: "Could any of my medicines or side effects be keeping me awake, and could I try therapy for insomnia?",
    interactive: {
      kind: "timeline",
      title: "A day built for better sleep",
      steps: [
        { id: "morning", when: "Morning", title: "Up at the same time", points: ["Get up at about the same time every day.", "Try not to sleep late after a sleepless night."] },
        { id: "daytime", when: "Daytime", title: "Move a little", points: ["Gentle exercise like walking can help you feel naturally tired.", "Keep naps to 20 to 30 minutes, earlier in the day."] },
        { id: "evening", when: "Evening", title: "Wind down", points: ["Stop caffeine and alcohol about 6 hours before bed.", "Have a light snack rather than a large meal."] },
        { id: "bedtime", when: "Bedtime", title: "Screens off", points: ["Avoid screens for at least an hour before bed.", "Write down any worries before you go to bed."] },
        { id: "night", when: "In the night", title: "If you can't sleep", points: ["Get up for a 10-minute break if you are awake for long periods.", "Go back to bed when you feel sleepy."] },
      ],
    },
    sources: [MAC_SLEEP, CRUK_MANAGE, MAC_FATIGUE, NHS_INSOMNIA, MAC_LIFESTYLE],
    quiz: {
      question: "How long does Cancer Research UK suggest keeping daytime naps?",
      options: [{ text: "20 to 30 minutes, or none at all", right: true }, { text: "Two to three hours" }, { text: "As long as you need" }],
      why: "Limit daytime naps to 20 to 30 minutes, or don't have them at all, so they don't stop you sleeping at night.",
    },
  },
  {
    id: "cf-food",
    kicker: "Eating well",
    question: "What should I eat to have more energy?",
    hook: "Your body gets its energy from food, but cooking is hard when you are exhausted. Little and often, easy meals and enough to drink all help.",
    short: "Your body gets energy from the food you eat, so eating well can help you regain strength and energy. Small meals or snacks every 3 to 4 hours, easy food for tired days and enough fluids all help. A dietitian can give you more ideas.",
    sections: [
      {
        heading: "Food is where energy comes from",
        paragraphs: [
          "Our bodies get energy from the food we eat. You may get tired if your body does not get enough food, or if there are changes to the way your body is able to use it.",
          "Eating well and keeping to a healthy weight can help you maintain or regain your strength, and give you more energy. But eating enough can be hard when treatment makes you feel sick, or causes constipation or diarrhoea.",
        ],
      },
      {
        heading: "Little and often",
        paragraphs: [
          "A good way to keep up your energy through the day is to eat regular meals and healthy snacks every 3 to 4 hours, rather than a large meal less often.",
          "It may be easier to eat smaller meals more often, rather than 3 bigger meals. If a main meal is too much, have a snack meal, such as beans, eggs or cheese on toast, or a bowl of soup.",
          "Keep a diary of what you eat and when, to find out if you have more energy after certain meals.",
        ],
      },
      {
        heading: "A balanced plate",
        paragraphs: [
          "For most people, a healthy diet includes lots of fruit and vegetables, plenty of starchy foods, wholegrains, some protein-rich foods such as fish, eggs, nuts and beans, and some milk and dairy foods.",
          "If surgery to the bowel or radiotherapy to the pelvis has changed how your bowel works, a diet high in fibre may not suit you. Follow the advice of your cancer team or dietitian.",
        ],
      },
      {
        heading: "When you're too tired to cook",
        paragraphs: [
          "Frozen meals, tinned foods and ready meals can be a good option on tired days. When you feel less tired, make more than you need and freeze portions for later.",
          "If family or friends offer to help, ask them to do the shopping or cook for you. An online supermarket delivery or a local meal-delivery company can save a trip.",
          "If you really do not want to eat, try a nourishing drink, such as a smoothie made with soft fruit and milk or yoghurt.",
        ],
      },
      {
        heading: "Drinks, and getting help",
        paragraphs: [
          "Drink plenty of fluids. The government's Eatwell Guide suggests 6 to 8 cups or glasses a day, and more if you are ill or recovering from illness. Sometimes you feel tired simply because you're mildly dehydrated.",
          "You can ask your doctor to refer you to a dietitian for helpful ideas. They may prescribe or recommend supplement drinks.",
        ],
      },
    ],
    helps: [
      "Eat regular small meals or healthy snacks every 3 to 4 hours.",
      "Make extra food when you feel less tired, and freeze portions.",
      "Keep a diary of what you eat and when, to see which meals give you more energy.",
      "Drink plenty of fluids through the day.",
      "Ask family or friends to do the shopping or cook for you.",
      "Ask your doctor to refer you to a dietitian.",
    ],
    tryThisWeek: [
      "Eat a little every 3 to 4 hours.",
      "Freeze extra portions on a good day.",
      "Drink plenty through the day.",
    ],
    ask: "Could I see a dietitian about eating for energy?",
    interactive: {
      kind: "scenarios",
      title: "Tired-day meals",
      scenarios: [
        {
          id: "no-cook",
          situation: "It's teatime and you're too tired to cook.",
          options: [{ text: "Have a snack meal, such as beans on toast or soup", best: true }, { text: "Skip the meal" }],
          why: "If a main meal is too much, have a snack meal, such as beans, eggs or cheese on toast, or a bowl of soup.",
        },
        {
          id: "big-meals",
          situation: "Three big meals a day feel like too much.",
          options: [{ text: "Eat smaller meals more often", best: true }, { text: "Force down full portions" }],
          why: "It may be easier to eat smaller meals more often, rather than 3 bigger meals.",
        },
        {
          id: "flat",
          situation: "You feel flat in the afternoon and have hardly drunk anything.",
          options: [{ text: "Have a drink of water", best: true }, { text: "Ignore it until teatime" }],
          why: "Sometimes you feel tired simply because you're mildly dehydrated.",
        },
        {
          id: "offer",
          situation: "A friend asks how they can help.",
          options: [{ text: "Ask them to shop or cook for you", best: true }, { text: "Say you can manage" }],
          why: "If family or friends offer to help, ask them to do the shopping or cook for you.",
        },
      ],
    },
    sources: [MAC_FATIGUE, MAC_EATING_TIPS, CRUK_MANAGE, MAC_LIFESTYLE, NHS_TIRED_TIPS, NHS_WATER],
    quiz: {
      question: "How often does the NHS suggest eating to keep up your energy?",
      options: [{ text: "Regular meals and snacks every 3 to 4 hours", right: true }, { text: "One large meal a day" }, { text: "Only when you feel hungry" }],
      why: "A good way to keep up your energy through the day is to eat regular meals and healthy snacks every 3 to 4 hours, rather than a large meal less often.",
    },
  },
  {
    id: "cf-work",
    kicker: "Work",
    question: "How do I go back to work with fatigue?",
    hook: "Slowly, and with the law on your side. A phased return, flexible hours and extra breaks for tiredness are all reasonable adjustments.",
    short: "If you have or have had cancer, the law treats it as a disability, so your employer should consider reasonable adjustments, such as a phased return, flexible hours or extra breaks for tiredness. Agree a flexible return-to-work plan and review it regularly. Access to Work may help with costs such as travel.",
    sections: [
      {
        heading: "Your rights",
        paragraphs: [
          "If you have cancer, the law considers this a disability. Under the Equality Act 2010, you meet the definition from the day you are diagnosed. In Northern Ireland, the Disability Discrimination Act 1995 protects you.",
          "This protection does not end when treatment finishes. If you have been diagnosed with cancer in the past, you keep it, even if you move to another employer.",
        ],
      },
      {
        heading: "Fatigue at work",
        paragraphs: [
          "For many people, going back to work when they feel ready is a big step in recovery. It can help you get back into a routine and feel a sense of normality.",
          "But some people have fatigue for months or sometimes years after treatment. You may feel too well to stay at home, but not quite well enough to deal with work pressures.",
        ],
      },
      {
        heading: "Adjustments that help with tiredness",
        paragraphs: [
          "Your employer should consider reasonable adjustments, which are changes to the workplace or your job that let you keep working or return. They could include a phased return, part-time or flexible hours, or changing targets to allow for side effects such as fatigue.",
          "Practical adjustments could include extra breaks to help you cope with tiredness, a quiet place to rest, or a parking space near your work. Working from home can also help.",
          "You do not have to tell your employer you have cancer. But they do not have to make a reasonable adjustment unless they know, or should reasonably know, that you have cancer.",
        ],
      },
      {
        heading: "Planning your return",
        paragraphs: [
          "You and your manager can agree a return-to-work plan. It should be as flexible as possible, and you should meet regularly in case anything needs to change.",
          "It can help to write notes in meetings, or to take someone with you. You can also ask your doctor for a fit note, which explains how your health affects what you can do at work.",
          "Recovery may not always be straightforward, and you may have some setbacks. Try to stay flexible and talk to your employer if you need more support.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can give you a grant towards practical support, such as specialist equipment or the cost of travelling to work if you cannot use public transport. It will not affect other benefits, and you will not have to pay it back.",
          "It will not pay for reasonable adjustments, which your employer has to make. You build up annual leave while you are on sick leave, and could use it during a phased return if your employer does not pay full wages then.",
        ],
      },
    ],
    helps: [
      "Agree a flexible return-to-work plan with your manager, and meet regularly to review it.",
      "Ask about a phased return, flexible hours or extra breaks.",
      "Write notes in meetings, or take someone with you.",
      "Ask your doctor for a fit note that explains how your health affects your work.",
      "Check whether Access to Work could help with costs such as travel.",
      "Talk to your employer if you have a setback and need more support.",
    ],
    tryThisWeek: [
      "Ask about a phased return.",
      "Ask your doctor for a fit note.",
      "Check Access to Work.",
    ],
    ask: "Can you give me a fit note that explains how fatigue affects my work?",
    interactive: {
      kind: "scenarios",
      title: "Moments at work",
      scenarios: [
        {
          id: "afternoons",
          situation: "Your energy runs out every afternoon.",
          options: [{ text: "Ask for flexible hours or extra breaks", best: true }, { text: "Push on and say nothing" }],
          why: "Practical adjustments could include extra breaks to help you cope with tiredness, a quiet place to rest, or a parking space near your work.",
        },
        {
          id: "telling",
          situation: "You want adjustments but have not told your employer about the cancer.",
          options: [{ text: "Tell them, so they can make adjustments", best: true }, { text: "Expect changes without telling them" }],
          why: "They do not have to make a reasonable adjustment unless they know, or should reasonably know, that you have cancer.",
        },
        {
          id: "setback",
          situation: "Three weeks into a phased return, you have a setback.",
          options: [{ text: "Talk to your employer and stay flexible", best: true }, { text: "Hand in your notice" }],
          why: "Recovery may not always be straightforward, and you may have some setbacks. Try to stay flexible and talk to your employer if you need more support.",
        },
        {
          id: "travel",
          situation: "On bad days you cannot manage public transport.",
          options: [{ text: "Ask Access to Work about travel costs", best: true }, { text: "Give up the job" }],
          why: "Access to Work can give you a grant towards practical support, such as the cost of travelling to work if you cannot use public transport.",
        },
      ],
    },
    sources: [MAC_RETURNING, MAC_ADJUSTMENTS, MAC_RIGHTS, GOV_DISABILITY, GOV_ATW, CRUK_MANAGE, MAC_WORK_DECISIONS],
    quiz: {
      question: "When does someone with cancer meet the Equality Act's definition of disability?",
      options: [{ text: "From the day they are diagnosed", right: true }, { text: "After 12 months off work" }, { text: "Only while they are having treatment" }],
      why: "Under the Equality Act 2010, you meet the definition from the day you are diagnosed.",
    },
  },
  {
    id: "cf-asking-help",
    kicker: "Support",
    question: "How do I ask for help without feeling a burden?",
    hook: "Just about everyone needs support when they have cancer. Family and friends often offer; it helps to know what to ask for.",
    short: "Just about everyone needs support from someone else when they have cancer. Accepting offers, handing over practical jobs and telling people how you really feel all make it easier. If you would rather talk to someone outside the family, there are free services, such as Macmillan Buddies and the Macmillan Support Line.",
    sections: [
      {
        heading: "Everyone needs support",
        paragraphs: [
          "Just about everyone needs support from someone else when they have cancer. You can get it from family, friends, doctors, nurses and other members of your healthcare team.",
          "Accepting offers of help and asking people for support is one of the practical things that can help you cope.",
        ],
      },
      {
        heading: "Saying yes",
        paragraphs: [
          "Family or friends will often offer their support. If you cannot think of anything at that time, you can thank them and tell them you may ask them later.",
          "If they do not offer support and you would like some, ask them for it. Writing down what support you need can help you start the conversation.",
        ],
      },
      {
        heading: "Jobs others can take on",
        paragraphs: [
          "Ask other people to help with everyday tasks like shopping, housework or collecting children from school. If possible, ask other people to do hard work, such as hoovering, gardening or taking the rubbish out.",
          "Telling people about the cancer can be tiring. You can ask someone you trust to tell other people for you, and say what you want them to share.",
        ],
      },
      {
        heading: "Being honest about how you feel",
        paragraphs: [
          "You may want to sound positive and cheerful to make family or friends feel better. But it is important they know if you are worried, so they can support you.",
          "If you are staying in hospital, you can ask the nurses to tell visitors they can only stay for a short time. Don't feel bad about doing this, as you need a lot of rest and your friends and family will understand.",
        ],
      },
      {
        heading: "Support outside the family",
        paragraphs: [
          "Sharing your feelings with someone in a similar situation can make you feel less anxious, and show you that you are not alone. Your specialist nurse can tell you about support groups in your area.",
          "Macmillan Buddies is a free service of 8 weekly phone calls with the same trained volunteer. You can also call the Macmillan Support Line free on 0808 808 00 00.",
        ],
      },
    ],
    helps: [
      "When someone offers help, thank them and say you may ask later.",
      "Write down the support you need, to make it easier to ask.",
      "Ask others to help with shopping, housework or collecting children from school.",
      "Ask someone you trust to pass your news on to other people.",
      "Ask your specialist nurse about support groups in your area.",
      "Call the Macmillan Support Line free on 0808 808 00 00.",
    ],
    tryThisWeek: [
      "Write down the support you need.",
      "Hand shopping or housework to someone.",
      "Ask about local support groups.",
    ],
    ask: "Are there support groups or services near me for people living with fatigue after cancer?",
    interactive: {
      kind: "scenarios",
      title: "Asking without guilt",
      scenarios: [
        {
          id: "offer",
          situation: "A neighbour says 'let me know if you need anything', and your mind goes blank.",
          options: [{ text: "Thank them and say you may ask later", best: true }, { text: "Say you're fine and never ask" }],
          why: "If you cannot think of anything at that time, you can thank them and tell them you may ask them later.",
        },
        {
          id: "news",
          situation: "You are worn out from telling everyone your news.",
          options: [{ text: "Ask someone you trust to tell people for you", best: true }, { text: "Keep calling everyone yourself" }],
          why: "You can ask someone you trust to tell other people for you, and say what you want them to share.",
        },
        {
          id: "cheerful",
          situation: "You keep sounding cheerful at home, but you are worried.",
          options: [{ text: "Tell your family how you really feel", best: true }, { text: "Keep up a brave face" }],
          why: "It is important they know if you are worried, so they can support you.",
        },
      ],
    },
    sources: [MAC_TELLING, CRUK_MANAGE, MAC_FATIGUE, MAC_MENTAL_HEALTH, MAC_BUDDIES, NHS_RADIO_SE, CRUK_CAUSES],
    quiz: {
      question: "What can you do when someone offers help and you can't think of anything?",
      options: [{ text: "Thank them and say you may ask later", right: true }, { text: "Turn the offer down for good" }, { text: "Make up a job on the spot" }],
      why: "If you cannot think of anything at that time, you can thank them and tell them you may ask them later.",
    },
  },
  {
    id: "cf-mood",
    kicker: "Mood",
    question: "Why does fatigue pull my mood down, and what helps?",
    hook: "Tiredness and low mood can feed each other. The loop can be eased, and help is there, including right now if you need it.",
    short: "Fatigue and low mood can feed each other: anxiety, depression and stress can make fatigue worse, and fatigue can leave you feeling low. Talking, physical activity and talking therapies can help, and with the right treatment and support most people with depression make a full recovery. If you ever feel you cannot keep yourself safe, call 999 or go to A&E, or call Samaritans free on 116 123.",
    sections: [
      {
        heading: "The loop",
        paragraphs: [
          "Fatigue can leave you feeling low in mood and more emotional than usual. And anxiety, depression, stress and tension can make fatigue worse.",
          "Anxiety and depression are common in people with cancer, and they are often very draining emotions. People with depression often feel as if they have no energy at all.",
        ],
      },
      {
        heading: "Sadness or depression?",
        paragraphs: [
          "People often have feelings of sadness or loss after cancer treatment, and these often improve as you recover. But for some people, the low mood continues or gets worse, and may become depression.",
          "Signs can include feeling low most of the time, losing interest in things you used to enjoy, changes in sleep, eating or concentration, and feeling helpless. If these go on for more than 2 weeks, talk to your doctor or nurse.",
          "Depression is a real illness with real symptoms, not a sign of weakness. With the right treatment and support, most people with depression can make a full recovery.",
        ],
      },
      {
        heading: "Ways to ease the loop",
        paragraphs: [
          "Talking about how you feel with a partner, family member or close friend can help, and so can a support group, in person or online.",
          "Being physically active during and after treatment can help improve your mood and confidence. Several studies have shown that cognitive behavioural therapy can reduce levels of fatigue.",
          "You can refer yourself to NHS talking therapies for anxiety and depression without seeing a GP, if you are registered with a GP and aged 18 or over, or 16 or over in some areas.",
        ],
      },
      {
        heading: "Treatment from your team",
        paragraphs: [
          "Your GP or specialist nurse can listen, refer you to a counsellor or psychologist, and talk to you about medicine that can help treat depression.",
          "Antidepressants can take up to 4 weeks to start helping. They are not addictive, but they should not be stopped suddenly, and when you stop taking them it is important to follow your doctor's advice.",
        ],
      },
      {
        heading: "If you are struggling right now",
        paragraphs: [
          "If you have thoughts of suicide or self-harm, contact your GP or specialist nurse straight away, or go to A&E. You can call Samaritans free on 116 123, any time, day or night.",
          "For urgent help with your mental health, call 111 and choose the mental health option, or ask for an urgent GP appointment. If you would rather not talk on the phone, you can text SHOUT to 85258 at any time.",
          "Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Talk about how you feel with a partner, family member or close friend.",
      "Talk to your doctor or nurse if low feelings go on for more than 2 weeks.",
      "Refer yourself to NHS talking therapies, or ask your GP about counselling.",
      "Try some physical activity, which can help improve your mood.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "If you do not feel you can keep yourself safe, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Tell someone close how you feel.",
      "Look up NHS talking therapies.",
      "Try a little physical activity.",
    ],
    ask: "Could my low mood be depression, and can you refer me for a talking therapy?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your doctor or nurse",
      intro: "Tick any you have had most of the time. If they go on for more than 2 weeks, talk to your doctor or nurse.",
      signs: ["Feeling low or sad most of the time", "Losing interest in things I used to enjoy", "Changes in my sleep", "Changes in my eating", "Trouble concentrating", "Feeling helpless or vulnerable", "Problems starting or finishing tasks"],
      after: "If you have thoughts of self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. Samaritans is free on 116 123.",
      copyHeading: "How I have been feeling",
    },
    sources: [MAC_FATIGUE, CRUK_CAUSES, MAC_DEPRESSION, NHS_DEPRESSION, MAC_ACTIVE_AFTER, CRUK_MANAGE, NHS_TALKING, NHS_URGENT, NHS_SUICIDAL, SAMARITANS],
    quiz: {
      question: "When should you talk to your doctor or nurse about low feelings?",
      options: [{ text: "If they go on for more than 2 weeks", right: true }, { text: "Only if they last a year" }, { text: "Never, they always pass" }],
      why: "If these go on for more than 2 weeks, talk to your doctor or nurse.",
    },
  },
  {
    id: "cf-family",
    kicker: "For family",
    question: "How can family and friends help with fatigue?",
    hook: "Fatigue can be hard for others to see. A few practical habits help the person with fatigue, and the people caring for them.",
    short: "Relatives often underestimate how much fatigue affects daily life. Acknowledging it, offering practical help, planning together with a fatigue diary and going to appointments all help. Carers need looking after too, and can ask their council for a free carer's assessment.",
    sections: [
      {
        heading: "Seeing what fatigue takes",
        paragraphs: [
          "You and your relatives might underestimate how much fatigue can affect daily life. Acknowledge that fatigue is difficult to cope with.",
          "It can take time to recover from the effects of treatment, and it is normal to feel tired for several months. Keep offering support, and ask how they are and what you can do to help.",
        ],
      },
      {
        heading: "Practical help",
        paragraphs: [
          "Offer to help with things like gardening, shopping, cooking or housework. Ask how often they would like you to visit, as they will need time to rest.",
          "Use a fatigue diary to plan together. It will help you both see when the person has more or less energy to do things.",
          "Being active might help them feel better. Offer to do some gentle exercise with them, like going for a walk.",
        ],
      },
      {
        heading: "At appointments",
        paragraphs: [
          "You can go to hospital appointments with them and help explain how the fatigue is affecting them. It may help to show the team their fatigue diary and ask what else you can do to help.",
          "If they are too tired to answer questions when their fatigue is being assessed, family and friends may be able to help.",
        ],
      },
      {
        heading: "Food without pressure",
        paragraphs: [
          "The amount someone can eat may change each day. Try not to put pressure on them to eat, as this can be stressful for both of you.",
          "If you know when their appetite is at its best, make the most of it with their favourite foods. Offer smaller meals and snacks whenever they feel like eating.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "You are a carer if you give any unpaid help and support to someone with cancer who could not manage without it. Taking time for your own health and wellbeing will also benefit the person you look after.",
          "Tell your GP that you are a carer, accept help from others and take regular breaks. If your feelings become overwhelming, it is important to get professional help.",
          "Anyone over 18 who cares for someone can ask adult social services at their local council for a free carer's assessment, to see what might make life easier.",
        ],
      },
    ],
    helps: [
      "Acknowledge that fatigue is difficult to cope with.",
      "Offer specific help, such as shopping, cooking or housework.",
      "Use their fatigue diary together to plan.",
      "Go to appointments and help explain how the fatigue affects them.",
      "Try not to put pressure on them to eat.",
      "Ask adult social services at your local council for a carer's assessment.",
    ],
    tryThisWeek: [
      "Offer one specific job.",
      "Plan the week with their diary.",
      "Ask about a carer's assessment.",
    ],
    ask: "How can I best support my relative's fatigue, and what help is there for me as a carer?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        {
          id: "cancel",
          situation: "They cancel plans again because they are exhausted.",
          options: [{ text: "Acknowledge it is hard and plan around their energy", best: true }, { text: "Tell them to make more effort" }],
          why: "Acknowledge that fatigue is difficult to cope with. A fatigue diary will help you both see when the person has more or less energy to do things.",
        },
        {
          id: "meal",
          situation: "They have hardly touched the meal you cooked.",
          options: [{ text: "Leave it gently, without pressure", best: true }, { text: "Insist they finish it" }],
          why: "Try not to put pressure on them to eat, as this can be stressful for both of you.",
        },
        {
          id: "appointment",
          situation: "They have a hospital appointment next week.",
          options: [{ text: "Offer to go, and bring the fatigue diary", best: true }, { text: "Leave them to explain on their own" }],
          why: "It may help to show the team their fatigue diary and ask what else you can do to help.",
        },
        {
          id: "worn-out",
          situation: "You are worn out from caring.",
          options: [{ text: "Ask your council for a carer's assessment", best: true }, { text: "Keep going without help" }],
          why: "Anyone over 18 who cares for someone can ask adult social services at their local council for a free carer's assessment.",
        },
      ],
    },
    sources: [MAC_FATIGUE, MAC_SUPPORTING, CRUK_WHAT, MAC_CARER_SELF, NHS_CARER_ASSESS, MAC_LOOKING_AFTER, MAC_EATING, CRUK_ASSESS],
    quiz: {
      question: "What might relatives underestimate about cancer fatigue?",
      options: [{ text: "How much it affects daily life", right: true }, { text: "How quickly it goes away" }, { text: "How easy it is to see" }],
      why: "You and your relatives might underestimate how much fatigue can affect daily life.",
    },
  },
];
