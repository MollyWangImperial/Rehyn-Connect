import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Fibromyalgia page's pieces (content/library-conditions/body-more.ts). Every
// sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, Arthritis UK (the
// charity formerly called Versus Arthritis; versusarthritis.org now redirects to arthritis-uk.org) and
// Fibromyalgia Action UK, with NICE's chronic pain guideline (NG193), the Chartered Society of Physiotherapy,
// Samaritans and the government's pages on Access to Work, reasonable adjustments and the Equality Act.
// Exercises are described only as the sources describe them. The mood answer follows safe-messaging guidance:
// no method details, and the crisis routes exactly as the NHS, Samaritans and Fibromyalgia Action UK give them.
// General information only; it never replaces what a person's own GP or healthcare team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const auk = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const fma = (label: string, path: string): LearnSource => ({ label: `Fibromyalgia Action UK: ${label}`, url: `https://www.fmauk.org/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_FM = nhs("Fibromyalgia", "conditions/fibromyalgia/");
const NHS_FM_SYMPTOMS = nhs("Fibromyalgia symptoms", "conditions/fibromyalgia/symptoms/");
const NHS_FM_CAUSES = nhs("Fibromyalgia causes", "conditions/fibromyalgia/causes/");
const NHS_FM_DIAGNOSIS = nhs("Fibromyalgia diagnosis", "conditions/fibromyalgia/diagnosis/");
const NHS_FM_TREATMENT = nhs("Fibromyalgia treatment", "conditions/fibromyalgia/treatment/");
const NHS_FM_SELFHELP = nhs("Fibromyalgia self-help", "conditions/fibromyalgia/self-help/");
const NHS_AMI_ABOUT = nhs("About amitriptyline for pain and migraine", "medicines/amitriptyline-for-pain/about-amitriptyline-for-pain-and-migraine/");
const NHS_AMI_HOW = nhs("How and when to take amitriptyline for pain and migraine", "medicines/amitriptyline-for-pain/how-and-when-to-take-amitriptyline-for-pain-and-migraine/");
const NHS_AMI_SIDE = nhs("Side effects of amitriptyline for pain and migraine", "medicines/amitriptyline-for-pain/side-effects-of-amitriptyline-for-pain-and-migraine/");
const NHS_AMI_QUESTIONS = nhs("Common questions about amitriptyline for pain and migraine", "medicines/amitriptyline-for-pain/common-questions-about-amitriptyline-for-pain-and-migraine/");
const NHS_DULOXETINE = nhs("Duloxetine", "medicines/duloxetine/");
const NHS_CBT = nhs("Cognitive behavioural therapy (CBT)", "tests-and-treatments/cognitive-behavioural-therapy-cbt/");
const NHS_TALKING = nhs("Find NHS talking therapies for anxiety and depression", "nhs-services/mental-health-services/find-nhs-talking-therapies-for-anxiety-and-depression/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_INSOMNIA = nhs("Insomnia", "conditions/insomnia/");
const NHS_PAIN = nhs("10 ways to reduce pain", "live-well/pain/10-ways-to-ease-pain/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");

const AUK_FM = auk("Fibromyalgia", "understanding-arthritis/conditions/fibromyalgia/");
const AUK_FATIGUE = auk("Coping with and managing arthritis fatigue", "understanding-arthritis/managing-arthritis-symptoms/managing-fatigue/");
const AUK_FATIGUE_TIPS = auk("Self-help tips to fight fatigue", "understanding-arthritis/managing-arthritis-symptoms/managing-fatigue/self-help-tips-to-fight-fatigue/");
const AUK_4PS = auk("The 4 Ps: strategies you can use to cope with fatigue", "understanding-arthritis/managing-arthritis-symptoms/managing-fatigue/the-4-ps-strategies-you-can-use-to-cope-with-fatigue/");
const AUK_SLEEP = auk("Overcoming sleep problems with arthritis", "living-with-arthritis/health-and-wellbeing/sleep/");
const AUK_MENTAL = auk("Mental health and arthritis", "living-with-arthritis/health-and-wellbeing/mental-health-and-arthritis/");
const AUK_DISCLOSING = auk("Disclosing your condition", "living-with-arthritis/work-benefits-and-finances/work-and-arthritis/disclosing-your-condition/");
const AUK_ADJUSTMENTS = auk("Applying for reasonable adjustments", "living-with-arthritis/work-benefits-and-finances/work-and-arthritis/applying-for-reasonable-adjustments/");

const FMA_ABOUT = fma("About fibromyalgia", "fibromyalgia.html");
const FMA_START = fma("Start here", "starthere.html");

const GOV_ATW = gov("Access to Work", "access-to-work");
const GOV_ATW_ELIGIBILITY = gov("Access to Work: eligibility", "access-to-work/eligibility");
const GOV_ADJUSTMENTS = gov("Reasonable adjustments for workers with disabilities or health conditions", "reasonable-adjustments-for-disabled-workers");
const GOV_DISABILITY = gov("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");

const NICE_NG193: LearnSource = { label: "NICE: Chronic pain (primary and secondary) in over 16s (NG193), recommendations", url: "https://www.nice.org.uk/guidance/ng193/chapter/Recommendations" };
const CSP_PAIN: LearnSource = { label: "Chartered Society of Physiotherapy: Chronic pain", url: "https://www.csp.org.uk/conditions/chronic-pain" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const fibroAnswers: LearnArticle[] = [
  {
    id: "fm-what-it-is",
    kicker: "Understanding",
    question: "What is fibromyalgia?",
    hook: "Pain all over the body that is real, but not caused by damage. The way the nervous system handles pain signals seems to change.",
    short: "Fibromyalgia is a long-term condition that causes pain all over the body. It is thought to be linked to changes in the way the brain, spinal cord and nerves process pain messages. There is no cure, but treatments can ease symptoms and make the condition easier to live with.",
    sections: [
      {
        heading: "Pain all over",
        paragraphs: [
          "Fibromyalgia, also called fibromyalgia syndrome, is a long-term condition that causes pain all over the body. As well as widespread pain, it can bring tiredness, poor sleep and problems with memory and concentration, known as fibro fog.",
          "The name comes from fibro, for fibrous tissues such as tendons and ligaments, my, for muscles, and algia, meaning pain. It is known as a syndrome because it is a collection of symptoms.",
        ],
      },
      {
        heading: "A nervous system turned up",
        paragraphs: [
          "The exact cause is unknown. One of the main theories is that the central nervous system, which is the brain, spinal cord and nerves, changes the way it processes the pain messages carried around the body.",
          "Studies have shown that parts of the brain that register pain react differently in fibromyalgia. This means you feel pain when other people just feel uncomfortable or stiff.",
        ],
      },
      {
        heading: "Real pain, without damage",
        paragraphs: [
          "Unlike arthritis, the pain is not caused by problems with your joints, bones or muscles, or by visible inflammation or damage. But this does not mean the symptoms are unreal or all in your mind.",
          "Fibromyalgia Action UK says it is not a life-threatening illness, but it is often life changing. It is often invisible to others.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "Anyone can develop fibromyalgia, but it is more common in women than men. It typically develops between the ages of 25 and 55, but people of any age can get it, including children and older people.",
          "Some estimates suggest nearly 1 in 20 people may be affected to some degree. Some people may be more likely to develop it because of genes inherited from their parents.",
        ],
      },
      {
        heading: "What can help",
        paragraphs: [
          "There is currently no cure, but there are treatments to help relieve some of the symptoms and make the condition easier to live with. Treatment tends to combine lifestyle changes such as exercise and relaxation, talking therapies, and medicine.",
          "Fibromyalgia does not seem to cause long-term damage to your body. But it is important to keep your muscles and joints strong through activity.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you have fibromyalgia.",
      "Learn about fibromyalgia: understanding your condition can help reduce your fears and anxiety.",
      "Keep your muscles and joints strong through activity.",
      "Encourage family and friends to learn about the condition, so they understand how your pain affects you even if you look well.",
      "Call the Fibromyalgia Action UK helpline on 0300 999 3333 if you have any questions.",
    ],
    tryThisWeek: [
      "See a GP about your symptoms.",
      "Read up on fibromyalgia.",
      "Share what you learn with family.",
    ],
    ask: "Could my symptoms be fibromyalgia, and which treatments are available where I live?",
    interactive: {
      kind: "flip-cards",
      title: "Words you may hear",
      intro: "Turn each card to see what it means.",
      cards: [
        { id: "fms", front: "Fibromyalgia syndrome", when: "The full name", back: "A long-term condition that causes pain all over the body. A syndrome is a collection of symptoms." },
        { id: "cns", front: "Central nervous system", when: "When the cause is explained", back: "The brain, spinal cord and nerves. Changes in how it processes pain messages are thought to play a part." },
        { id: "hyperalgesia", front: "Hyperalgesia", when: "When pain feels stronger", back: "Being extremely sensitive to pain." },
        { id: "allodynia", front: "Allodynia", when: "When a light touch hurts", back: "Feeling pain from something that should not be painful at all, such as a very light touch." },
        { id: "fog", front: "Fibro fog", when: "When thinking feels hard", back: "Problems with mental processes, such as difficulty concentrating or remembering things." },
      ],
    },
    sources: [NHS_FM, NHS_FM_CAUSES, AUK_FM, FMA_ABOUT, NHS_FM_SYMPTOMS],
    quiz: {
      question: "What is thought to lie behind fibromyalgia pain?",
      options: [{ text: "Changes in how the nervous system processes pain", right: true }, { text: "Damage to the joints" }, { text: "An infection in the muscles" }],
      why: "One of the main theories is that the central nervous system, which is the brain, spinal cord and nerves, changes the way it processes the pain messages carried around the body.",
    },
  },
  {
    id: "fm-symptoms",
    kicker: "Symptoms",
    question: "What does fibromyalgia feel like?",
    hook: "Widespread pain is the main symptom, but tiredness, unrefreshing sleep and fibro fog can be just as hard.",
    short: "The main symptom is widespread pain, which may feel like an ache, a burning sensation, or a sharp, stabbing pain. Many people also have extreme sensitivity to pain, stiffness, tiredness, poor sleep and problems with memory and concentration, known as fibro fog. Symptoms vary from person to person and can get better or worse.",
    sections: [
      {
        heading: "Widespread pain",
        paragraphs: [
          "The main symptom is widespread pain. It may be felt throughout your body, but could be worse in particular areas, such as your back or neck.",
          "The pain is likely to be continuous, although it may be better or more severe at different times. It could feel like an ache, a burning sensation, or a sharp, stabbing pain.",
          "Fibromyalgia Action UK describes four core symptoms: widespread pain, profound fatigue, fibro fog, and non-refreshing sleep.",
        ],
      },
      {
        heading: "Extra sensitive",
        paragraphs: [
          "Fibromyalgia can make you extremely sensitive to pain all over your body, and even the slightest touch may hurt. If you hurt yourself, such as stubbing your toe, the pain may last much longer than it normally would.",
          "You may also be sensitive to things like smoke, certain foods and bright lights. Being exposed to something you are sensitive to can make your other symptoms flare up.",
        ],
      },
      {
        heading: "Tiredness and sleep",
        paragraphs: [
          "Tiredness can range from feeling mildly tired to the exhaustion of a flu-like illness. Severe tiredness may come on suddenly and drain you of all your energy.",
          "You may often wake up tired, even after plenty of sleep, because the condition can stop you sleeping deeply enough to refresh you. This is sometimes called non-restorative sleep.",
          "Stiffness may be worst when you have been in the same position for a long time, such as when you first wake up.",
        ],
      },
      {
        heading: "Fibro fog",
        paragraphs: [
          "Fibro fog means problems with thinking and learning. You may have trouble remembering and learning new things, problems with attention and concentration, or slowed or confused speech.",
          "People often say that besides the pain, fatigue is the worst part of fibromyalgia, and it can be linked to fibro fog.",
        ],
      },
      {
        heading: "Other symptoms",
        paragraphs: [
          "Other symptoms can include headaches, irritable bowel syndrome, dizziness and clumsiness, feeling too hot or too cold, restless legs, pins and needles in the hands and feet, and unusually painful periods.",
          "Fibromyalgia can also bring feelings of frustration, worry or low mood, and in some cases it can lead to depression. If you think you may be depressed, it is important to get help from a GP or your fibromyalgia healthcare professional.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you have fibromyalgia.",
      "Make a list of any physical or psychological problems you have had, to help your doctor understand.",
      "Pick your best time of day for anything needing concentration, and explain to others if fibromyalgia affects your memory.",
      "For fibro fog, some people find mental exercises like crosswords or jigsaw puzzles help.",
      "Get help from a GP or your fibromyalgia healthcare professional if you think you may be depressed.",
    ],
    tryThisWeek: [
      "List your symptoms for your GP.",
      "Do focused tasks at your best time.",
      "Try a crossword or jigsaw.",
    ],
    ask: "Could any of my symptoms be caused by something other than fibromyalgia?",
    interactive: {
      kind: "signs",
      title: "Symptoms to mention",
      intro: "Tick the ones you have. Your list can help your GP understand how fibromyalgia affects you.",
      signs: ["Pain all over the body", "Even a light touch hurts", "Stiffness after keeping still", "Waking up tired", "Sudden, draining tiredness", "Trouble remembering or concentrating", "Headaches", "Stomach pain or bloating", "Pins and needles", "Feeling low or worried"],
      after: "Take your list to your GP. If you think you may be depressed, it is important to get help from a GP or your fibromyalgia healthcare professional.",
      copyHeading: "My symptoms",
    },
    sources: [NHS_FM_SYMPTOMS, NHS_FM, AUK_FM, FMA_START],
    quiz: {
      question: "What is non-restorative sleep?",
      options: [{ text: "Waking up tired even after plenty of sleep", right: true }, { text: "Sleeping too deeply" }, { text: "Never feeling sleepy" }],
      why: "You may often wake up tired, even after plenty of sleep, because the condition can stop you sleeping deeply enough to refresh you.",
    },
  },
  {
    id: "fm-diagnosis",
    kicker: "Diagnosis",
    question: "How is fibromyalgia diagnosed?",
    hook: "There is no single test. A diagnosis comes from your symptoms, an examination, and checks for other conditions.",
    short: "There is no specific test for fibromyalgia, and its symptoms are similar to several other conditions. The GP will ask how your symptoms affect your daily life, may examine you, and may arrange blood or urine tests to check for other conditions. Diagnosis can take time, but identifying all possible conditions helps guide treatment.",
    sections: [
      {
        heading: "No single test",
        paragraphs: [
          "Diagnosing fibromyalgia can be difficult, as there is no specific test for the condition. The symptoms vary from person to person and are similar to those of several other conditions.",
          "There are no specific blood tests, X-rays or scans to confirm it. But you might have blood tests to check for other conditions.",
        ],
      },
      {
        heading: "What the GP looks for",
        paragraphs: [
          "The GP will ask how your symptoms are affecting your daily life. Common symptoms doctors look for include severe pain that has lasted three months or more, fatigue, regularly waking up unrefreshed, and problems with memory and understanding.",
          "It may help to make a list of any physical or psychological problems you have had. The GP may also examine you to check for signs of other conditions: for example, swollen joints may suggest arthritis rather than fibromyalgia.",
        ],
      },
      {
        heading: "Checking for other conditions",
        paragraphs: [
          "Tests to check for other conditions include urine and blood tests, and you may also have X-rays and other scans. Conditions with similar symptoms include rheumatoid arthritis, Sjögren disease and an underactive thyroid gland.",
          "If you are found to have another condition, you could still have fibromyalgia as well. It is also possible to have depression, anxiety or irritable bowel syndrome alongside it, and identifying all possible conditions will help guide your treatment.",
        ],
      },
      {
        heading: "Who you might see",
        paragraphs: [
          "In many cases, fibromyalgia can be diagnosed and treated by your GP, without the need to see a specialist. Your doctor may suggest a referral to a rheumatologist, who may confirm your diagnosis.",
          "Other referrals might be to a physiotherapist, a clinical psychologist or counsellor, an occupational therapist, or a specialist pain clinic or chronic fatigue service.",
        ],
      },
      {
        heading: "When it takes a while",
        paragraphs: [
          "Fibromyalgia Action UK says it can take around 3 years to be diagnosed from first consultation, with many people taking much longer. Short appointments and symptoms that change can add to the difficulty.",
          "NICE guidance asks doctors sharing normal or negative test results to be sensitive to the risk of invalidating the person's experience of chronic pain.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you have fibromyalgia.",
      "Make a list of any physical or psychological problems you have had before your appointment.",
      "Tell the GP how your symptoms are affecting your daily life.",
      "If you have any of the core symptoms or are not feeling right, contact your GP and talk to them.",
      "Ask your doctor whether a referral could help, such as to a rheumatologist, physiotherapist or pain clinic.",
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "List your symptoms.",
      "Note how they affect your day.",
    ],
    ask: "Have other causes of my symptoms been ruled out, and would a referral help me?",
    interactive: {
      kind: "timeline",
      title: "The road to a diagnosis",
      steps: [
        { id: "gp", when: "First", title: "Seeing a GP", points: ["Bring a list of your symptoms.", "The GP asks how they affect your daily life."] },
        { id: "exam", when: "Next", title: "An examination", points: ["A check for signs of other conditions.", "Swollen joints may suggest arthritis instead."] },
        { id: "tests", when: "Then", title: "Tests for other conditions", points: ["Blood and urine tests.", "Sometimes X-rays and other scans."] },
        { id: "diagnosis", when: "After that", title: "A diagnosis", points: ["Often made by your GP.", "A rheumatologist may confirm it."] },
        { id: "support", when: "Ongoing", title: "Support and referrals", points: ["Physiotherapy, talking therapies or a pain clinic.", "Other conditions found can be treated too."] },
      ],
    },
    sources: [NHS_FM_DIAGNOSIS, AUK_FM, FMA_ABOUT, NICE_NG193],
    quiz: {
      question: "Is there a blood test that confirms fibromyalgia?",
      options: [{ text: "No, tests check for other conditions", right: true }, { text: "Yes, a single blood test" }, { text: "Only an X-ray can show it" }],
      why: "There are no specific blood tests, X-rays or scans to confirm it. But you might have blood tests to check for other conditions.",
    },
  },
  {
    id: "fm-triggers",
    kicker: "Triggers",
    question: "What can make fibromyalgia worse?",
    hook: "Stress, weather and how active you are can all turn symptoms up. Knowing your own patterns helps.",
    short: "Fibromyalgia symptoms can get better or worse depending on things like stress, changes in the weather and how physically active you are. The condition often starts after physical or emotional stress, such as an injury, an infection, an operation or trauma. Understanding your own triggers can help you manage them.",
    sections: [
      {
        heading: "Ups and downs",
        paragraphs: [
          "There may be periods when your symptoms get better or worse. This can depend on your stress levels, changes in the weather, and how physically active you are.",
          "Some people say their pain gets worse in extreme temperatures, such as very hot, cold or damp weather. Aching and stiffness often feel worse during or after being active.",
        ],
      },
      {
        heading: "Stress, sleep and mood",
        paragraphs: [
          "Stress can make your symptoms worse or cause them to flare up more often. It could also increase your chances of developing depression.",
          "Lack of good quality sleep can make pain worse. When you are low or depressed, pain can also feel worse, and pain can make you feel more stressed.",
        ],
      },
      {
        heading: "Sensitivities",
        paragraphs: [
          "You may be sensitive to things like smoke, certain foods and bright lights. Being exposed to something you are sensitive to can make your other symptoms flare up.",
          "Fibromyalgia Action UK lists sensitivity to changes in the weather and to noise, bright lights, smoke and other environmental factors.",
        ],
      },
      {
        heading: "What can start it",
        paragraphs: [
          "Fibromyalgia is often triggered by an event that causes physical or emotional stress. Possible triggers include a serious injury, an infection, a major operation, or significant emotional trauma.",
          "Sometimes it does not develop after any obvious trigger. Genetics may play a small part, with some people perhaps more likely than others to develop it.",
        ],
      },
      {
        heading: "Finding your patterns",
        paragraphs: [
          "Fibromyalgia Action UK says understanding any triggers, such as stress or foods you may have an intolerance to, can be significant in improving symptoms.",
          "Try to find time each day to do something that relaxes you. On a good day, pace yourself, as overdoing it may simply make matters worse.",
        ],
      },
    ],
    helps: [
      "Try to find time each day to do something that relaxes you.",
      "Address what is making you stressed or unhappy, as these can make the pain feel worse.",
      "Learn your own triggers, such as stress or foods you may have an intolerance to.",
      "Pace yourself on a good day, because overdoing it may make matters worse.",
      "Use heat, such as a hot water bottle or a hot bath or shower, to help pain and morning stiffness.",
    ],
    tryThisWeek: [
      "Make time to relax each day.",
      "Note what sets off your symptoms.",
      "Pace yourself on a good day.",
    ],
    ask: "Which of my triggers can I change, and what would help me manage stress?",
    interactive: {
      kind: "risk-check",
      title: "What turns your symptoms up?",
      intro: "Tick any that apply. Some you can work on, and some you cannot change.",
      items: [
        { id: "stress", label: "Stress", note: "Stress can make symptoms worse or cause them to flare up more often. Relaxing each day may help.", changeable: true },
        { id: "sleep", label: "Poor sleep", note: "Lack of good quality sleep can make pain worse. Better sleep habits can help.", changeable: true },
        { id: "overdoing", label: "Doing too much on a good day", note: "Overdoing it may simply make matters worse. Pacing yourself can help.", changeable: true },
        { id: "activity", label: "How active you are", note: "Symptoms can change with how physically active you are.", changeable: true },
        { id: "sensitive", label: "Smoke, certain foods or bright lights", note: "Being exposed to something you are sensitive to can make other symptoms flare up.", changeable: true },
        { id: "mood", label: "Feeling low", note: "When you are low or depressed, pain can feel worse. Talking about your feelings can help.", changeable: true },
        { id: "weather", label: "Changes in the weather", note: "Some people find very hot, cold or damp weather makes their pain worse.", changeable: false },
      ],
    },
    sources: [NHS_FM_SYMPTOMS, NHS_FM_CAUSES, AUK_FM, NHS_FM_SELFHELP, FMA_ABOUT],
    quiz: {
      question: "Which of these can make fibromyalgia flare up more often?",
      options: [{ text: "Stress", right: true }, { text: "Drinking water" }, { text: "Wearing glasses" }],
      why: "Stress can make your symptoms worse or cause them to flare up more often.",
    },
  },
  {
    id: "fm-exercise",
    kicker: "Exercise",
    question: "How do I start exercising when everything hurts?",
    hook: "Moving can feel like the last thing to do. But exercise is one of the main treatments, and starting gently is the key.",
    short: "Regular exercise has been shown to help reduce pain and improve quality of life in fibromyalgia. A mix of aerobic exercise, such as swimming or walking, and movements that build strength and flexibility can help. Start slowly, build up gradually, and speak to your GP first if you have not exercised for some time.",
    sections: [
      {
        heading: "Why it matters",
        paragraphs: [
          "It is important to be physically active if you have fibromyalgia. This can be difficult if you are in pain, but regular exercise has been shown to help reduce pain and improve overall quality of life.",
          "Exercise has been proven to improve fatigue and our ability to control pain. Keeping active can also prevent other health problems.",
        ],
      },
      {
        heading: "Getting a plan",
        paragraphs: [
          "Your GP may offer you an exercise programme, depending on what is available in your area. It may be a supervised programme, either on your own or in a group.",
          "Your GP or physiotherapist may be able to refer you to a health professional who specialises in helping people with fibromyalgia work out an exercise plan. The type of exercise should be something you enjoy and can keep doing long term.",
        ],
      },
      {
        heading: "Kinds of exercise",
        paragraphs: [
          "Aerobic exercise is anything that makes you a little out of breath and your heart beat faster. Swimming is recommended for people with fibromyalgia, and a brisk walk or cycling can also help.",
          "Strengthening exercises help build the muscles that move and protect your joints. Ask a GP or physiotherapist for examples you could do at home.",
          "Stretching exercises can increase your flexibility, and some people with fibromyalgia have found tai chi and yoga help.",
        ],
      },
      {
        heading: "Starting gently",
        paragraphs: [
          "Start slowly, perhaps with a 5 to 10 minute walk or some gentle stretching, and gradually build up. Generally, the best way to build fitness is to do a little exercise as often as you can.",
          "If you become more active gradually, it is unlikely you will cause any damage or harm. Pace yourself, take breaks when needed, and find activities that feel right for you.",
        ],
      },
      {
        heading: "Before you start",
        paragraphs: [
          "Speak to your GP first if you have not exercised for some time, or if you have medical conditions or concerns. Make sure your activity and its intensity are right for your fitness.",
          "Adults are advised to aim for at least 150 minutes of moderate activity a week, plus strengthening activities on at least 2 days. On days when you feel more fatigued, lighter exercise such as light stretching and gentle walking may suit you better.",
        ],
      },
    ],
    helps: [
      "Speak to your GP first if you have not exercised for some time, or have medical conditions or concerns.",
      "Ask your GP or physiotherapist about an exercise plan or programme for fibromyalgia.",
      "Start with a 5 to 10 minute walk or some gentle stretching, then build up gradually.",
      "Try swimming, a brisk walk or cycling for aerobic exercise.",
      "Choose exercise you enjoy and can keep doing long term.",
      "On days when you feel more fatigued, try lighter exercise such as light stretching and gentle walking.",
    ],
    tryThisWeek: [
      "Check with your GP first.",
      "Take a 5 to 10 minute walk.",
      "Pick an exercise you enjoy.",
    ],
    ask: "Which kind of exercise should I start with, and is there an exercise programme near me?",
    interactive: {
      kind: "scenarios",
      title: "Moving with fibromyalgia",
      scenarios: [
        {
          id: "start",
          situation: "You have not exercised for a long time and want to begin.",
          options: [{ text: "Speak to your GP, then start gently", best: true }, { text: "Start with a long, hard workout" }],
          why: "Speak to your GP first if you have not exercised for some time, or if you have medical conditions or concerns.",
        },
        {
          id: "bad-day",
          situation: "Today you feel more fatigued than usual.",
          options: [{ text: "Try lighter exercise, like a walk", best: true }, { text: "Push through your usual routine" }],
          why: "On days when you feel more fatigued, lighter exercise such as light stretching and gentle walking may suit you better.",
        },
        {
          id: "choose",
          situation: "You are choosing an activity to stick with.",
          options: [{ text: "Something you enjoy, like swimming", best: true }, { text: "Whatever you dislike most" }],
          why: "The type of exercise should be something you enjoy and can keep doing long term.",
        },
      ],
    },
    sources: [NHS_FM_TREATMENT, NHS_FM_SELFHELP, AUK_FM, AUK_FATIGUE_TIPS, NHS_ACTIVITY, NICE_NG193, NHS_PAIN],
    quiz: {
      question: "Which aerobic exercise is recommended for people with fibromyalgia?",
      options: [{ text: "Swimming", right: true }, { text: "Lifting heavy weights" }, { text: "Sprinting up hills" }],
      why: "Swimming is recommended for people with fibromyalgia, and a brisk walk or cycling can also help.",
    },
  },
  {
    id: "fm-medicines",
    kicker: "Medicines",
    question: "Which medicines can help with fibromyalgia?",
    hook: "Antidepressants, often at low doses, are the main medicines now used: for pain and sleep as much as for mood. They take weeks to work.",
    short: "Antidepressants are sometimes used to help relieve the pain of fibromyalgia, and can also help sleep, emotional health and quality of life. Those often used include amitriptyline and duloxetine, and for pain they are usually given at lower doses than for depression. Your doctor should discuss the advantages and disadvantages first, and they should not be stopped suddenly without talking to your doctor.",
    sections: [
      {
        heading: "Why an antidepressant",
        paragraphs: [
          "Antidepressants are sometimes used to help relieve the pain of fibromyalgia. They can also help improve your sleep, emotional health and overall quality of life.",
          "When they are used to treat pain, they are usually prescribed at a lower dose than for depression. NICE says they may help with quality of life, pain, sleep and distress, even when there is no diagnosis of depression.",
        ],
      },
      {
        heading: "The ones often used",
        paragraphs: [
          "The antidepressants often used for fibromyalgia are amitriptyline, citalopram, duloxetine, fluoxetine, paroxetine and sertraline. They are usually only recommended for long-term pain in people aged 18 or over, and your doctor should discuss the advantages and disadvantages with you first.",
          "Amitriptyline is thought to change the way your nerves receive pain signals, and many people sleep better while taking it. Duloxetine reduces the pain messages nerves send to your brain.",
        ],
      },
      {
        heading: "Giving it time",
        paragraphs: [
          "With amitriptyline, you may find you are sleeping better straight away, but it usually takes 1 or 2 weeks for pain to begin to wear off. It can take 4 to 6 weeks to feel the full benefits, so allow at least 6 weeks to see if it works for you.",
          "It is best taken in the evening or before you go to bed, because it can make you sleepy. Do not drive, cycle or operate heavy machinery if it makes you feel sleepy.",
        ],
      },
      {
        heading: "Side effects and stopping",
        paragraphs: [
          "All drugs have potential side effects. At pain doses, the common side effects of amitriptyline tend to be milder, and include constipation, dizziness, a dry mouth and feeling sleepy. Talk to your doctor about the best balance between pain relief and side effects.",
          "Do not stop taking amitriptyline or duloxetine suddenly without talking to your doctor. Your doctor will usually reduce the dose gradually.",
          "Call a doctor or 111 now if you get a fast or irregular heartbeat while taking amitriptyline. Call 999 or go to A&E if you have thoughts about harming yourself or ending your life.",
        ],
      },
      {
        heading: "Medicines used less now",
        paragraphs: [
          "In the past, people with fibromyalgia have been prescribed other drugs, such as gabapentin and pregabalin, opioid painkillers, paracetamol and anti-inflammatories. The NHS says there is little or no evidence that other types of medicine help reduce long-term pain.",
          "NICE guidance on chronic primary pain, where fibromyalgia is a main example, advises doctors not to start these medicines for it.",
          "If you already take one and it helps, Fibromyalgia Action UK says any change should be a shared decision, and a working treatment should not be stopped without discussion. Your doctor is likely to want to talk about whether your condition could be treated differently.",
        ],
      },
    ],
    helps: [
      "Talk to your doctor about the advantages and disadvantages before starting an antidepressant.",
      "Take amitriptyline in the evening or before bed, as it can make you sleepy.",
      "Allow at least 6 weeks to see if amitriptyline works for you.",
      "Make sure your doctor knows about any other medicines you already take.",
      "Never stop taking amitriptyline or duloxetine suddenly without talking to your doctor.",
      "If you feel a treatment is not helping you, talk to your doctor.",
    ],
    tryThisWeek: [
      "Take amitriptyline in the evening.",
      "Give it at least 6 weeks.",
      "List your other medicines.",
    ],
    ask: "Would an antidepressant help my pain or sleep, and which side effects should I look out for?",
    interactive: {
      kind: "flip-cards",
      title: "Medicines you may hear about",
      intro: "Turn each card to see what it is used for.",
      cards: [
        { id: "amitriptyline", front: "Amitriptyline", when: "Usually taken before bed", back: "An antidepressant used at lower doses for long-term pain. Many people sleep better on it. Full benefit can take 4 to 6 weeks." },
        { id: "duloxetine", front: "Duloxetine", when: "Capsules once or twice a day", back: "An antidepressant also used for nerve pain, such as fibromyalgia. It reduces the pain messages nerves send to the brain." },
        { id: "others", front: "Other antidepressants", when: "Citalopram, sertraline and others", back: "Citalopram, fluoxetine, paroxetine and sertraline are also often used, usually for people aged 18 or over." },
        { id: "older", front: "Pregabalin, opioids and others", when: "Used more in the past", back: "NICE advises not starting these for this kind of pain. If you take one, your doctor will want to discuss it with you." },
      ],
    },
    sources: [NHS_FM_TREATMENT, AUK_FM, NHS_AMI_ABOUT, NHS_AMI_QUESTIONS, NHS_DULOXETINE, NICE_NG193, FMA_ABOUT, NHS_AMI_SIDE, NHS_AMI_HOW],
    quiz: {
      question: "How long can amitriptyline take to give its full benefit for pain?",
      options: [{ text: "4 to 6 weeks", right: true }, { text: "One day" }, { text: "A year" }],
      why: "It can take 4 to 6 weeks to feel the full benefits, so allow at least 6 weeks to see if it works for you.",
    },
  },
  {
    id: "fm-talking",
    kicker: "Therapies",
    question: "Can talking therapies and pain programmes really help pain?",
    hook: "Pain is never just physical. Therapies like CBT and ACT do not deny the pain; they help change how much it runs your life.",
    short: "Two talking therapies may help reduce pain caused by fibromyalgia: acceptance and commitment therapy (ACT) and cognitive behavioural therapy (CBT). Pain management programmes, often led by psychologists, help people manage long-term pain better and reduce its impact. They do not take the pain away, but they can improve quality of life.",
    sections: [
      {
        heading: "Two therapies",
        paragraphs: [
          "There are 2 talking therapies that may help reduce pain caused by fibromyalgia. In acceptance and commitment therapy, or ACT, you learn to accept what is out of your control and commit to making changes that will improve your life.",
          "Cognitive behavioural therapy, or CBT, can help you manage your problems by changing the way you think and behave. ACT has been shown to improve sleep quality, reduce pain and help deal with negative thoughts and feelings, and CBT can help improve quality of life for people with long-term pain.",
        ],
      },
      {
        heading: "Not just in the mind",
        paragraphs: [
          "Pain is never just a physical experience, especially if it lasts a long time. Pain can affect your mood and behaviour.",
          "The Chartered Society of Physiotherapy says pain can affect our emotions, and our emotions can affect our pain. Pain is never just in the mind or just in the body, but a complex mix.",
        ],
      },
      {
        heading: "What sessions involve",
        paragraphs: [
          "CBT aims to help you understand how you react to problems by breaking them down into smaller, more manageable chunks. It encourages you not to be too hard on yourself, and to accept that sometimes there are limits to what you can do.",
          "You will usually have between 5 and 15 sessions of CBT. It can be one-to-one, in a group, or guided self-help, in person, online or by phone, and you will usually practise what you learn between sessions.",
        ],
      },
      {
        heading: "Pain management programmes",
        paragraphs: [
          "A pain specialist may suggest a pain management programme, which brings together people with different long-term pain conditions. It will not take away your pain, but it can help you manage it better and reduce its impact on your life.",
          "Sessions are often led by psychologists, held in an outpatient clinic and run over several days or weeks. Pain clinic teams can include physiotherapists and occupational therapists, but pain clinics are not available in every area.",
        ],
      },
      {
        heading: "How to get help",
        paragraphs: [
          "Your GP can refer you for counselling or CBT. NICE guidance says doctors should consider ACT or CBT for pain for people aged 16 and over with this kind of long-term pain.",
          "In England, you can refer yourself to NHS talking therapies for anxiety and depression if you are 18 or over, or 16 or over in some areas. They may help if you have anxiety or depression alongside a long-term condition.",
        ],
      },
    ],
    helps: [
      "Ask your GP whether ACT or CBT could help with your pain.",
      "Ask whether a pain clinic or pain management programme is available in your area.",
      "Practise what you learn between CBT sessions: it is important for CBT to work.",
      "Refer yourself to NHS talking therapies if you live in England and feel anxious or low.",
      "Try not to be too hard on yourself, even when you feel frustrated.",
    ],
    tryThisWeek: [
      "Ask your GP about CBT or ACT.",
      "Ask about a pain programme.",
      "Go easier on yourself.",
    ],
    ask: "Can I be referred to a pain management programme, or for CBT or ACT?",
    interactive: {
      kind: "flip-cards",
      title: "Therapies for long-term pain",
      intro: "Turn each card to see what it is.",
      cards: [
        { id: "act", front: "ACT", when: "Acceptance and commitment therapy", back: "You learn to accept what is out of your control and commit to changes that will improve your life." },
        { id: "cbt", front: "CBT", when: "Cognitive behavioural therapy", back: "A talking therapy that helps you manage problems by changing the way you think and behave. Usually 5 to 15 sessions." },
        { id: "programme", front: "Pain management programme", when: "Over several days or weeks", back: "Sessions, often led by psychologists, to help you manage pain better and reduce its impact on your life." },
        { id: "self-referral", front: "NHS talking therapies", when: "Self-referral in England", back: "Psychological treatments for anxiety and depression that you can refer yourself to, from 18, or 16 in some areas." },
      ],
    },
    sources: [NHS_FM_TREATMENT, AUK_FM, NHS_CBT, NHS_TALKING, NICE_NG193, CSP_PAIN],
    quiz: {
      question: "What does a pain management programme aim to do?",
      options: [{ text: "Help you manage pain and reduce its impact", right: true }, { text: "Take the pain away completely" }, { text: "Replace all other treatment" }],
      why: "It will not take away your pain, but it can help you manage it better and reduce its impact on your life.",
    },
  },
  {
    id: "fm-sleep",
    kicker: "Sleep",
    question: "Why do I wake up exhausted, and how can I sleep better?",
    hook: "Fibromyalgia can stop sleep from going deep enough to refresh you. Good habits will not fix it overnight, but they help.",
    short: "Fibromyalgia can make it hard to fall or stay asleep, and can stop you sleeping deeply enough to wake refreshed. Poor sleep can make pain worse, so better sleep may help pain as well as tiredness. A regular routine, a calm bedroom, regular activity and CBT can help; sleeping tablets are not normally recommended.",
    sections: [
      {
        heading: "Sleep that does not refresh",
        paragraphs: [
          "Fibromyalgia can make it difficult to fall asleep or stay asleep. You may often wake up tired even after plenty of sleep, because the condition can stop you sleeping deeply enough to refresh you.",
          "People with fibromyalgia very often have poor sleep patterns, and many say they had disturbed sleep before the pain and stiffness began.",
        ],
      },
      {
        heading: "Sleep and pain",
        paragraphs: [
          "Research shows that a lack of good quality sleep can make pain worse. Not getting enough good sleep can lower the point at which you feel pain, known as your pain threshold.",
          "So getting enough good-quality sleep is an important part of treatment. It helps with tiredness and fatigue, and it may also improve your pain.",
        ],
      },
      {
        heading: "A steady routine",
        paragraphs: [
          "Get up at the same time every morning, and keep a regular routine where you go to bed and get up at similar times. Try to relax before bed, for example with a warm bath.",
          "Make sure your bedroom is dark, quiet and a comfortable temperature. Avoid screens in the bedroom, and try not to sleep during the day.",
        ],
      },
      {
        heading: "Habits that help",
        paragraphs: [
          "Avoid caffeine in the eight hours before bed, and do not drink alcohol or eat a main meal close to bedtime. If you smoke, try to stop, or at least do not smoke close to bedtime.",
          "Regular activity, especially aerobic exercise, can help sleep, but avoid energetic exercise too close to bedtime. Keep a notepad by your bed to write down anything on your mind, and do not keep checking the time.",
        ],
      },
      {
        heading: "If it carries on",
        paragraphs: [
          "Sleeping tablets are not normally recommended, as the body can become tolerant to them, and this can lead to the effects wearing off and even addiction. Regular activity and CBT have proven effective for people with disrupted sleep.",
          "See a GP if changing your sleeping habits has not helped, you have had trouble sleeping for months, or it is making it hard to cope.",
        ],
      },
    ],
    helps: [
      "Get up at the same time every morning.",
      "Take time to relax before bed, such as with a warm bath.",
      "Keep your bedroom dark, quiet and a comfortable temperature.",
      "Avoid caffeine in the eight hours before bed.",
      "Do not keep checking the time during the night.",
      "See a GP if changing your sleeping habits has not helped.",
    ],
    tryThisWeek: [
      "Get up at the same time daily.",
      "Have a warm bath before bed.",
      "Stop checking the clock at night.",
    ],
    ask: "Could CBT help my sleep, and should I take any of my medicines at a different time?",
    interactive: {
      kind: "scenarios",
      title: "Night-time moments",
      scenarios: [
        {
          id: "clock",
          situation: "You wake at 3am and want to check the time.",
          options: [{ text: "Leave the clock alone", best: true }, { text: "Check it every half hour" }],
          why: "Do not look at a clock during the night, as this can make you anxious.",
        },
        {
          id: "nap",
          situation: "You slept badly and feel like a long nap after lunch.",
          options: [{ text: "Try to stay up until bedtime", best: true }, { text: "Have a long nap" }],
          why: "Try not to sleep during the day.",
        },
        {
          id: "coffee",
          situation: "It is late afternoon and you fancy a strong coffee.",
          options: [{ text: "Choose a caffeine-free drink", best: true }, { text: "Have the coffee" }],
          why: "Avoid caffeine in the eight hours before bed.",
        },
        {
          id: "worry",
          situation: "Tomorrow's jobs keep running through your head.",
          options: [{ text: "Write them on a notepad by the bed", best: true }, { text: "Go over them again and again" }],
          why: "Keep a notepad by your bed to write down anything on your mind.",
        },
      ],
    },
    sources: [NHS_FM_SELFHELP, NHS_FM_SYMPTOMS, AUK_FM, AUK_SLEEP, NHS_INSOMNIA],
    quiz: {
      question: "What can poor sleep do to fibromyalgia pain?",
      options: [{ text: "Make it worse", right: true }, { text: "Cure it" }, { text: "Nothing at all" }],
      why: "Research shows that a lack of good quality sleep can make pain worse.",
    },
  },
  {
    id: "fm-pacing",
    kicker: "Energy",
    question: "How do I pace myself without giving up the things I enjoy?",
    hook: "Do too much on a good day and pay for it on the next. Pacing breaks that boom and bust cycle.",
    short: "Pacing means balancing activity and rest so you do not overdo it on good days or feel worse after doing too much. Arthritis UK suggests the four Ps: problem solving, planning, prioritising and pacing. Breaking tasks into smaller chunks, resting in between and planning things you enjoy can help your energy go further.",
    sections: [
      {
        heading: "Boom and bust",
        paragraphs: [
          "Pacing means balancing activity and rest so you do not overdo it on good days or feel worse after doing too much. Fibromyalgia Action UK describes it as doing less to be able to accomplish more, to avoid a boom and bust cycle.",
          "Boom and bust is when you carry on with your tasks, ignoring pain or tiredness, until you physically and mentally cannot continue. It can leave you unable to do anything the next day.",
        ],
      },
      {
        heading: "The four Ps",
        paragraphs: [
          "Arthritis UK suggests four Ps: problem solving, planning, prioritising and pacing. Think of them at the beginning of each day or week to help manage your energy.",
          "Problem solving means working out what is adding to your fatigue and finding ways around it. For example, if a weekly supermarket shop is tough, could you shop online?",
        ],
      },
      {
        heading: "Planning and priorities",
        paragraphs: [
          "Break a big job into achievable tasks spread through your day or week. Plan bigger tasks for when you tend to have more energy, with lighter activities and rest breaks around them.",
          "When prioritising, ask whether something needs doing today, or at all, and whether someone else could help. Plan activities you enjoy into your day too, as they can improve your mood and energy.",
        ],
      },
      {
        heading: "Spreading the load",
        paragraphs: [
          "Instead of doing all your cleaning in one go, you could spread it out over a week or a fortnight, room by room. Break tasks into smaller chunks, giving yourself time to rest in between.",
          "Listen to your body and take breaks when needed. On a good day, it is important to pace yourself, as overdoing it may simply make matters worse.",
        ],
      },
      {
        heading: "Tracking your energy",
        paragraphs: [
          "A list or fatigue chart can show how you use your energy. Note when you wake, how you slept, your main activities and how you feel after each, your rest times, and how you feel by bedtime.",
          "Try it over a couple of weeks to spot trends, then change the way you do things to save energy. As you get better at the four Ps, you should see a noticeable difference in your energy levels.",
        ],
      },
    ],
    helps: [
      "Think of the four Ps at the beginning of each day or week.",
      "Break big jobs into smaller tasks, with time to rest in between.",
      "Plan bigger tasks for when you tend to have more energy.",
      "Plan activities you enjoy into your day, not just chores.",
      "Pace yourself on a good day rather than overdoing it.",
      "Keep a fatigue chart for a couple of weeks to spot patterns.",
    ],
    tryThisWeek: [
      "Plan your week with the four Ps.",
      "Split one big job into parts.",
      "Keep a fatigue chart.",
    ],
    ask: "Could an occupational therapist help me find easier ways to do my daily activities?",
    interactive: {
      kind: "timeline",
      title: "The four Ps, step by step",
      steps: [
        { id: "problem", when: "Step 1", title: "Problem solve", points: ["What is using up your energy?", "Find a way round it, like shopping online."] },
        { id: "plan", when: "Step 2", title: "Plan", points: ["Break big jobs into smaller tasks.", "Do bigger tasks when you have more energy."] },
        { id: "prioritise", when: "Step 3", title: "Prioritise", points: ["Does it need doing today, or at all?", "Could someone else help?"] },
        { id: "pace", when: "Step 4", title: "Pace", points: ["Spread tasks over the day or week.", "Rest in between."] },
        { id: "review", when: "Over two weeks", title: "Review", points: ["Keep a fatigue chart.", "Spot trends and adjust."] },
      ],
    },
    sources: [AUK_FM, AUK_4PS, AUK_FATIGUE, FMA_ABOUT],
    quiz: {
      question: "What is pacing?",
      options: [{ text: "Balancing activity and rest", right: true }, { text: "Doing everything on good days" }, { text: "Resting all the time" }],
      why: "Pacing means balancing activity and rest so you do not overdo it on good days or feel worse after doing too much.",
    },
  },
  {
    id: "fm-flares",
    kicker: "Flare-ups",
    question: "What should I do when fibromyalgia flares up?",
    hook: "Flare-ups are part of fibromyalgia, and they are usually temporary. Knowing what helps makes them easier to ride out.",
    short: "Everyone with fibromyalgia has times when their pain gets worse; this is known as a flare-up and is usually temporary. Sometimes the cause is clear, such as stress or overdoing it, and sometimes it is not. Heat, rest, relaxation and pacing can help, and any new symptoms should be checked by your own medical professionals.",
    sections: [
      {
        heading: "Part of the condition",
        paragraphs: [
          "Everyone with fibromyalgia will have their pain get worse from time to time. This is usually temporary and is known as a flare-up. Some people have frequent flare-ups, and others do not.",
          "It is common for fibromyalgia to flare up, making symptoms suddenly worse. The pain can change from day to day, and even from hour to hour.",
        ],
      },
      {
        heading: "Why they happen",
        paragraphs: [
          "Symptoms can get worse with stress, changes in the weather or how physically active you are. Being exposed to something you are sensitive to, such as smoke or bright lights, can also make them flare up.",
          "Usually the cause of the extra pain can be found, but sometimes flare-ups happen even when you have taken care with everything you do. NICE notes that a cause for a flare-up may not be identified.",
        ],
      },
      {
        heading: "Riding it out",
        paragraphs: [
          "Heat can help. A hot water bottle, or a hot bath or shower, can help pain and improve morning stiffness.",
          "Relaxation works really well for almost everybody with fibromyalgia, reducing tension in the mind and body. Rest is also important, so listen to your body when it tells you to slow down.",
          "Stress can make symptoms flare up more often, so try to find time each day to do something that relaxes you.",
        ],
      },
      {
        heading: "Learning from it",
        paragraphs: [
          "Fibromyalgia Action UK says a flare-up is not something to be afraid of, but something to be learned from. Working out how much activity you can do before symptoms flare can help you do more without exhausting yourself.",
          "NICE guidance says that after a flare-up, your care and support plan can be reviewed, any new symptoms looked into, and what might have contributed to it discussed.",
        ],
      },
      {
        heading: "When it might be something else",
        paragraphs: [
          "Never assume that everything you feel is because of fibromyalgia. Acute pains, shortness of breath and high fevers are warning signs that should not be ignored.",
          "Get any new symptoms checked by your own medical professionals. If your treatments are not helping you manage the condition, discuss this with them too.",
        ],
      },
    ],
    helps: [
      "Use heat, such as a hot water bottle or a hot bath or shower.",
      "Practise relaxation, and rest when your body tells you to slow down.",
      "Pace yourself on good days, as overdoing it may make matters worse.",
      "After a flare-up, think about what might have contributed to it.",
      "Get any new symptoms checked by your own medical professionals.",
    ],
    tryThisWeek: [
      "Keep a hot water bottle handy.",
      "Rest when your body says slow down.",
      "Note what set off a flare.",
    ],
    ask: "What should my plan be for flare-ups, and which symptoms should I get checked?",
    interactive: {
      kind: "scenarios",
      title: "When a flare comes",
      scenarios: [
        {
          id: "good-day",
          situation: "You feel great today and want to catch up on everything.",
          options: [{ text: "Pace yourself and save some energy", best: true }, { text: "Do it all while you can" }],
          why: "Pace yourself on good days, as overdoing it may make matters worse.",
        },
        {
          id: "morning",
          situation: "You wake up stiff and sore during a flare-up.",
          options: [{ text: "Try a hot shower or hot water bottle", best: true }, { text: "Rush out without warming up" }],
          why: "A hot water bottle, or a hot bath or shower, can help pain and improve morning stiffness.",
        },
        {
          id: "new",
          situation: "You notice a new kind of pain and a high temperature.",
          options: [{ text: "Get it checked by a professional", best: true }, { text: "Assume it is fibromyalgia" }],
          why: "Never assume that everything you feel is because of fibromyalgia. Acute pains, shortness of breath and high fevers are warning signs that should not be ignored.",
        },
      ],
    },
    sources: [FMA_ABOUT, AUK_FM, NHS_FM_SYMPTOMS, NHS_FM_SELFHELP, NICE_NG193, FMA_START],
    quiz: {
      question: "How does Fibromyalgia Action UK suggest seeing a flare-up?",
      options: [{ text: "As something to learn from", right: true }, { text: "As a sign it will never get better" }, { text: "As always your own fault" }],
      why: "Fibromyalgia Action UK says a flare-up is not something to be afraid of, but something to be learned from.",
    },
  },
  {
    id: "fm-work",
    kicker: "Work",
    question: "How can I keep working with fibromyalgia?",
    hook: "Symptoms that change from day to day can make work hard. The right adjustments and support can make it workable.",
    short: "Because fibromyalgia symptoms can vary from day to day, keeping a steady level of work can be hard. Employers must make reasonable adjustments, such as longer breaks, changed hours or ergonomic equipment, and the government's Access to Work scheme can help pay for support beyond that. Talking to your manager early usually helps.",
    sections: [
      {
        heading: "How it can affect work",
        paragraphs: [
          "Fibromyalgia affects everyone differently, and symptoms can vary from day to day. This can make it difficult to keep a consistent level of working.",
          "Barriers can include needing time off during a flare-up or getting to and from work. Fibromyalgia Action UK says that people who are able to work are more likely to have better self-esteem, which can reduce levels of depression, pain and isolation.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Under the Equality Act 2010, you are disabled if you have a physical or mental impairment with a substantial and long-term negative effect on your ability to do normal daily activities. Long-term means 12 months or more, and there are special rules for conditions that come and go.",
          "Employers must make reasonable adjustments so that workers with disabilities or health conditions are not substantially disadvantaged when doing their jobs.",
        ],
      },
      {
        heading: "Telling your employer",
        paragraphs: [
          "There are no rules that say you have to tell your employer about your condition. But if it is causing problems at work, telling them can help you work together to find the adjustments you need.",
          "People with arthritis have told Arthritis UK that talking to a line manager about a problem early on is much better than letting it reach a crisis point. Writing down what you agree can help if your manager changes.",
        ],
      },
      {
        heading: "Adjustments that can help",
        paragraphs: [
          "Adjustments for fibromyalgia can include longer breaks, changed working times for an easier commute, and an ergonomic seat, mouse or keyboard. Memory aids like notepads, voice recorders or whiteboards can also help.",
          "Think about times when your condition flares or you start new treatment, as you may need extra support then. Working shorter hours, and adapting your desk, chair and computer for comfort, can all help.",
        ],
      },
      {
        heading: "Access to Work and advice",
        paragraphs: [
          "Access to Work can give you a grant towards things like specialist equipment, support workers, travel to work if you cannot use public transport, and changes to your workplace. It does not pay for reasonable adjustments, which your employer has to make.",
          "You need to be 16 or over, in paid work or about to start or return within 12 weeks, and live and work in England, Scotland or Wales. An occupational therapist, your local Jobcentre Plus office or Citizens Advice can also give advice.",
        ],
      },
    ],
    helps: [
      "Talk to your line manager early, before a problem reaches a crisis point.",
      "Ask about longer breaks, changed working times or ergonomic equipment.",
      "Plan for times when your condition flares or you start new treatment, when you may need extra support.",
      "Write down any adjustments you agree.",
      "Apply for Access to Work if you need support beyond reasonable adjustments.",
      "Ask an occupational therapist, Jobcentre Plus or Citizens Advice for advice.",
    ],
    tryThisWeek: [
      "Talk to your manager early.",
      "Write down agreed adjustments.",
      "Check Access to Work.",
    ],
    ask: "Could I see an occupational therapist about adjustments at work?",
    interactive: {
      kind: "scenarios",
      title: "Moments at work",
      scenarios: [
        {
          id: "tell",
          situation: "A flare-up means you need time off, and your manager does not know about your condition.",
          options: [{ text: "Talk to your manager about adjustments", best: true }, { text: "Keep it to yourself and struggle on" }],
          why: "If it is causing problems at work, telling them can help you work together to find the adjustments you need.",
        },
        {
          id: "commute",
          situation: "The rush-hour commute leaves you exhausted.",
          options: [{ text: "Ask about changing your working times", best: true }, { text: "Assume nothing can change" }],
          why: "Adjustments for fibromyalgia can include longer breaks, changed working times for an easier commute, and an ergonomic seat, mouse or keyboard.",
        },
        {
          id: "fog",
          situation: "Fibro fog makes it hard to keep track of tasks.",
          options: [{ text: "Ask about memory aids, like notepads", best: true }, { text: "Hope you remember everything" }],
          why: "Memory aids like notepads, voice recorders or whiteboards can also help.",
        },
        {
          id: "travel",
          situation: "Some days you cannot use public transport to get to work.",
          options: [{ text: "Ask Access to Work about travel costs", best: true }, { text: "Give up the job" }],
          why: "Access to Work can give you a grant towards travel to work if you cannot use public transport.",
        },
      ],
    },
    sources: [FMA_START, GOV_DISABILITY, GOV_ADJUSTMENTS, AUK_DISCLOSING, AUK_ADJUSTMENTS, GOV_ATW, GOV_ATW_ELIGIBILITY, AUK_FM],
    quiz: {
      question: "Who pays for reasonable adjustments at work?",
      options: [{ text: "Your employer", right: true }, { text: "Access to Work" }, { text: "You" }],
      why: "It does not pay for reasonable adjustments, which your employer has to make.",
    },
  },
  {
    id: "fm-mood",
    kicker: "Wellbeing",
    question: "How do I cope with the worry and low mood that can come with fibromyalgia?",
    hook: "Living with long-term pain is hard, and low feelings are common. They are not a weakness, and help is there.",
    short: "Fibromyalgia can bring feelings of frustration, worry or low mood, and sometimes it can lead to depression. Pain and mood affect each other, so looking after your mood can help with pain too. Talk to your GP, a support group or someone you trust; if you need help urgently, call 111 and select the mental health option, and if a life is at risk, call 999.",
    sections: [
      {
        heading: "Common, and understandable",
        paragraphs: [
          "Living with a long-term condition affects your mental health as well as your physical health. It is not uncommon to feel low, isolated or a bit overwhelmed when you are dealing with pain and fatigue. These emotions are normal, but that does not make them any less difficult.",
          "When you are low or depressed, your pain can also feel worse. At the same time, your pain can make you feel more stressed.",
        ],
      },
      {
        heading: "Knowing the signs",
        paragraphs: [
          "In some cases, having fibromyalgia can lead to depression. Depression can mean constantly feeling low, feeling hopeless and helpless, and losing interest in the things you usually enjoy.",
          "If you think you may be depressed, it is important to get help from a GP or your fibromyalgia healthcare professional. Counselling or CBT can help, and your GP will be able to refer you.",
        ],
      },
      {
        heading: "Small steps",
        paragraphs: [
          "Where possible, keep up the activities you enjoy, adapting them if you need to. Find ways to talk about your feelings, such as anxiety, low mood or anger.",
          "Notice how you talk to yourself about yourself through the day. Would you speak to a friend like that?",
        ],
      },
      {
        heading: "You are not alone",
        paragraphs: [
          "Just talking to someone who knows what you are going through can make you feel better. Fibromyalgia Action UK has a helpline on 0300 999 3333, Monday to Friday, 10am to 4pm.",
          "In England, you can refer yourself to NHS talking therapies for anxiety and depression, or ask your GP to refer you. They may help if you have anxiety or depression alongside a long-term health condition.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "If you need urgent help for your mental health, get help from 111 online or call 111 and select the mental health option, or ask for an urgent GP appointment. You can call Samaritans free on 116 123 at any time, day or night, or text SHOUT to 85258.",
          "Call 999 or go to A&E now if someone's life is at risk, or you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one.",
        ],
      },
    ],
    helps: [
      "Get help from a GP if you think you may be depressed.",
      "Find ways to talk about your feelings: counselling or CBT can help.",
      "Keep up activities you enjoy where possible, adapting them if you need to.",
      "Call the Fibromyalgia Action UK helpline on 0300 999 3333.",
      "For urgent help, call 111 and select the mental health option.",
      "Call Samaritans free on 116 123, at any time, day or night.",
    ],
    tryThisWeek: [
      "Talk to someone about how you feel.",
      "Do one thing you enjoy.",
      "Save the helpline numbers.",
    ],
    ask: "My mood has been low. Could I be referred for counselling, CBT or another talking therapy?",
    interactive: {
      kind: "signs",
      title: "Things worth telling your GP",
      intro: "Tick any you have noticed. They are worth raising, because help is available.",
      signs: ["Constantly feeling low", "Feeling hopeless or helpless", "Losing interest in things you enjoy", "Feeling worried a lot of the time", "Feeling isolated or overwhelmed", "Pain feels worse when you are low"],
      after: "Talk to your GP or fibromyalgia healthcare professional. For urgent help, call 111 and select the mental health option, or call Samaritans on 116 123. If you cannot keep yourself safe, call 999 or go to A&E.",
      copyHeading: "How I have been feeling",
    },
    sources: [NHS_FM_SYMPTOMS, AUK_FM, AUK_MENTAL, NHS_URGENT, SAMARITANS, FMA_START, NHS_FM_SELFHELP, NHS_TALKING],
    quiz: {
      question: "How can low mood affect fibromyalgia pain?",
      options: [{ text: "It can make pain feel worse", right: true }, { text: "It has no effect" }, { text: "It makes pain go away" }],
      why: "When you are low or depressed, your pain can also feel worse.",
    },
  },
];
