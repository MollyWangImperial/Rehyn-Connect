import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Osteoarthritis page's pieces (content/library-conditions/body.ts). Every
// sentence was written from wording checked on 21 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS and Arthritis UK
// (the charity formerly called Versus Arthritis; versusarthritis.org now redirects to arthritis-uk.org),
// with the National Rheumatoid Arthritis Society for the difference between the two arthritis types.
// Exercises are described only as the sources describe them. General information only; it never replaces
// what a person's own GP, physiotherapist or surgeon tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const au = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const nras = (label: string, path: string): LearnSource => ({ label: `National Rheumatoid Arthritis Society: ${label}`, url: `https://nras.org.uk/resource/${path}` });

const NHS_OA = nhs("Osteoarthritis", "conditions/osteoarthritis/");
const NHS_OA_SYMPTOMS = nhs("Symptoms of osteoarthritis", "conditions/osteoarthritis/symptoms/");
const NHS_OA_TREATMENT = nhs("Osteoarthritis: treatment and support", "conditions/osteoarthritis/treatment/");
const NHS_OA_LIVING = nhs("Living with osteoarthritis", "conditions/osteoarthritis/living-with/");
const NHS_ARTHRITIS = nhs("Arthritis", "conditions/arthritis/");
const NHS_RA = nhs("Rheumatoid arthritis", "conditions/rheumatoid-arthritis/");
const NHS_RA_SYMPTOMS = nhs("Symptoms of rheumatoid arthritis", "conditions/rheumatoid-arthritis/symptoms/");
const NHS_KNEE_WHAT = nhs("What is a knee replacement?", "tests-and-treatments/knee-replacement/what-is-a-knee-replacement/");
const NHS_KNEE_WHY = nhs("Why a knee replacement is done", "tests-and-treatments/knee-replacement/why-its-done/");
const NHS_KNEE_PREP = nhs("Preparing for a knee replacement", "tests-and-treatments/knee-replacement/preparation/");
const NHS_KNEE_RECOVERY = nhs("Recovering from a knee replacement", "tests-and-treatments/knee-replacement/recovery/");
const NHS_KNEE_COMPLICATIONS = nhs("Complications of a knee replacement", "tests-and-treatments/knee-replacement/complications/");
const NHS_HIP_WHAT = nhs("What is a hip replacement?", "tests-and-treatments/hip-replacement/what-is-a-hip-replacement/");
const NHS_HIP_WHY = nhs("Why a hip replacement is done", "tests-and-treatments/hip-replacement/why-a-hip-replacement-is-done/");
const NHS_HIP_RECOVERY = nhs("Recovering from a hip replacement", "tests-and-treatments/hip-replacement/recovering-from-a-hip-replacement/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_WALKING = nhs("Walking for health", "live-well/exercise/walking-for-health/");
const NHS_PAIN = nhs("10 ways to reduce pain", "live-well/pain/10-ways-to-ease-pain/");
const NHS_EQUIPMENT = nhs("Household gadgets and equipment to make life easier", "social-care-and-support/care-services-equipment-and-care-homes/household-gadgets-and-equipment-to-make-life-easier/");
const NHS_ADAPTATIONS = nhs("Home adaptations", "social-care-and-support/care-services-equipment-and-care-homes/home-adaptations/");

const AU_OA = au("Osteoarthritis", "understanding-arthritis/conditions/osteoarthritis/");
const AU_OA_PAIN = au("Osteoarthritis pain relief", "understanding-arthritis/conditions/osteoarthritis/osteoarthritis-pain-relief/");
const AU_OA_KNEE = au("Osteoarthritis of the knee", "understanding-arthritis/conditions/osteoarthritis-of-the-knee/");
const AU_OA_HIP = au("Osteoarthritis (OA) of the hip", "understanding-arthritis/conditions/osteoarthritis-oa-of-the-hip/");
const AU_OA_HAND = au("Osteoarthritis of the hand and wrist", "understanding-arthritis/conditions/osteoarthritis-of-the-hand-and-wrist/");
const AU_KNEE_SURGERY = au("Knee replacement surgery", "understanding-arthritis/arthritis-treatments/surgery/knee-replacement-surgery/");
const AU_STEROID = au("Steroid injections", "understanding-arthritis/arthritis-treatments/drugs/steroid-injections/");
const AU_SPLINTS = au("Splints", "understanding-arthritis/arthritis-treatments/splints/");
const AU_PAIN = au("Managing arthritis pain", "understanding-arthritis/managing-arthritis-symptoms/managing-arthritis-pain/");
const AU_SELFHELP = au("Self-help tips to relieve arthritis pain", "understanding-arthritis/managing-arthritis-symptoms/managing-arthritis-pain/self-help-tips-to-relieve-arthritis-pain/");
const AU_JOINT_CARE = au("Joint care", "understanding-arthritis/managing-arthritis-symptoms/joint-care/");
const AU_WEIGHT = au("Managing your weight", "living-with-arthritis/health-and-wellbeing/eating-well-with-arthritis/managing-your-weight/");
const AU_SLEEP = au("Overcoming sleep problems with arthritis", "living-with-arthritis/health-and-wellbeing/sleep/");
const AU_MENTAL = au("Mental health and arthritis", "living-with-arthritis/health-and-wellbeing/mental-health-and-arthritis/");
const AU_EX_KNEES = au("Exercises for the knees", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-knees/");
const AU_EX_HIPS = au("Exercises for the hips", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-hips/");
const AU_EX_HANDS = au("Exercises for the fingers, hands and wrists", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-fingers-hands-and-wrists/");
const AU_EX_TYPE = au("What type of exercise should I do?", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/what-type-of-exercise-should-i-do/");
const AU_EX_HOWMUCH = au("How much exercise should I do?", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/how-much-exercise-should-i-do/");
const AU_EX_START = au("Getting started with exercise", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/getting-started-with-exercise/");
const AU_STAIRS = au("Managing the stairs if you have arthritis", "living-with-arthritis/home-and-garden/managing-the-stairs-if-you-have-arthritis/");
const AU_CHAIR = au("Finding a chair", "living-with-arthritis/home-and-garden/finding-a-chair/");
const AU_AIDS = au("Aids and adaptations", "living-with-arthritis/home-and-garden/aids-and-adaptations/");

const NRAS_DIFF = nras("Osteoarthritis and rheumatoid arthritis: what's the difference?", "osteoarthritis-and-rheumatoid-arthritis-whats-the-difference/");
const NRAS_RA_OA = nras("Rheumatoid arthritis (RA) and osteoarthritis (OA)", "rheumatoid-arthritis-ra-and-osteoarthritis-oa/");

export const oaAnswers: LearnArticle[] = [
  {
    id: "oa-knee-week-three",
    kicker: "Recovery",
    question: "What does week three after a knee replacement really feel like?",
    hook: "Out of hospital, down to one crutch, but still sore, swollen and stiff. Week three is part of a recovery measured in months.",
    short: "It can take several months or longer to recover fully from a knee replacement. By around three weeks, many people are moving from crutches to a stick and walking outside. Pain from bruising, swelling and some stiffness are all normal in these early weeks, and keeping up the exercises makes a big difference.",
    sections: [
      {
        heading: "Where week three sits",
        paragraphs: [
          "It may take several months or longer to fully recover from a knee replacement. Recovery for a partial knee replacement should be shorter than for a total knee replacement.",
          "Most people leave hospital one to four days after the operation. A nurse takes out the stitches or clips after about 10 days, and there is a follow-up appointment about 6 weeks after the operation.",
        ],
      },
      {
        heading: "Walking",
        paragraphs: [
          "After two weeks, or sooner if you are confident, you can go down to one crutch and then a walking stick. You should be able to walk outside within three weeks of having surgery, in good supportive outdoor shoes.",
          "After three weeks, try to take longer strides so you can fully straighten your leg. Do not twist your knee as you turn around. Take several small steps instead.",
        ],
      },
      {
        heading: "Pain, swelling and stiffness",
        paragraphs: [
          "Pain caused by bruising from the operation is normal in the first two months. You will probably still need painkillers at six weeks to help you sleep through the night.",
          "Swelling is very common, particularly in the ankle and foot, and may last for up to three months. Sometimes the knee becomes very stiff in the weeks after the operation for no obvious reason, and it is very important to continue the exercises you were working on in hospital.",
        ],
      },
      {
        heading: "Still the early weeks",
        paragraphs: [
          "Most people have to wear compression stockings for at least 6 weeks. Do not sit with your legs crossed for the first 6 weeks, and do not sleep with a pillow under your knee.",
          "Avoid heavy household jobs, like vacuuming or carrying shopping, for the first three months. Wait at least 6 weeks to drive after a total knee replacement, or 3 weeks after a partial one, and check with your doctor that you are fit to drive.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have throbbing or cramping pain in your leg, a high temperature, oozing or pus from your wound, or redness, swelling or pain in your knee that is getting worse. These could be signs of an infection or a blood clot.",
          "Call 999 or go to A&E if you have pain and swelling in your leg and you are having difficulty breathing or have chest pains. This could be a blood clot in the lungs.",
        ],
      },
    ],
    helps: [
      "Follow the exercises your physiotherapist has recommended: they help your recovery and prevent complications.",
      "Keep your leg raised as much as possible to reduce swelling.",
      "With your foot raised, still get up and walk around for at least five minutes every hour to help reduce the risk of a blood clot.",
      "Wear your compression stockings at all times, and only take them off to wash them.",
      "Apply ice for up to 20 minutes at a time, protecting your skin from direct contact with the ice pack.",
      "If you still have pain after six months, speak to your physiotherapist or GP.",
    ],
    tryThisWeek: [
      "Do your physiotherapy exercises.",
      "Raise your leg to ease swelling.",
      "Walk around for five minutes every hour.",
    ],
    ask: "Is my swelling and stiffness normal for this stage, and which exercises should I be doing now?",
    interactive: {
      kind: "timeline",
      title: "The first months with a new knee",
      steps: [
        { id: "home", when: "Days 1 to 4", title: "Home from hospital", points: ["Most people leave hospital one to four days after.", "Crutches or a walking frame at first."] },
        { id: "stitches", when: "About 10 days", title: "Stitches out", points: ["A nurse takes out the stitches or clips.", "Keep the leg raised to reduce swelling."] },
        { id: "stick", when: "Weeks 2 to 3", title: "One crutch, then a stick", points: ["Down to one crutch, then a stick, when confident.", "Walking outside within three weeks, in supportive shoes."] },
        { id: "six", when: "About 6 weeks", title: "Follow-up appointment", points: ["A check that you are recovering well.", "Try walking without an aid if you feel ready."] },
        { id: "three-months", when: "Three months", title: "Heavier jobs", points: ["Swelling may last up to about now.", "Kneeling on a soft surface can be tried."] },
      ],
    },
    sources: [AU_KNEE_SURGERY, NHS_KNEE_RECOVERY, NHS_KNEE_COMPLICATIONS],
    quiz: {
      question: "Where is swelling after a knee replacement especially common?",
      options: [{ text: "The ankle and foot", right: true }, { text: "The other knee" }, { text: "The hands" }],
      why: "Swelling is very common, particularly in the ankle and foot, and may last for up to three months.",
    },
  },
  {
    id: "oa-what-it-is",
    kicker: "Understanding",
    question: "What is osteoarthritis, and what isn't it?",
    hook: "Not simply a joint wearing out. A joint that repairs itself less well than it used to, and that movement can help.",
    short: "Osteoarthritis is the most common type of arthritis in the UK. It happens when a joint can no longer repair itself as well as it once could: the cartilage thins, the surface becomes rougher and the joint can become painful and stiff. It does not necessarily get worse over time, and exercise can reduce pain.",
    sections: [
      {
        heading: "A joint that repairs less well",
        paragraphs: [
          "Osteoarthritis is a condition that causes joints to become painful and stiff. It is the most common type of arthritis in the UK.",
          "As part of normal life, your joints are exposed to a constant low level of damage, and in most cases your body repairs it without any symptoms. Arthritis UK describes osteoarthritis as what happens when a joint can no longer repair itself as well as it once could.",
        ],
      },
      {
        heading: "Cartilage and bone",
        paragraphs: [
          "In a healthy joint, a coating of tough but smooth and slippery tissue, called cartilage, covers the surface of the bones and helps them move freely against each other.",
          "In osteoarthritis, part of the cartilage thins and the surface becomes rougher, so the joint does not move as smoothly as it should. Bony spurs called osteophytes may form, and the joint can become swollen.",
        ],
      },
      {
        heading: "Not simply wear and tear",
        paragraphs: [
          "Osteoarthritis is often called wear and tear. Arthritis UK describes a normal cycle of wear and repair that everyone's joints go through, in which the shape and structure of a joint can change as it repairs itself.",
          "Almost all of us will have some changes in our joints as we get older, but we may not be aware of them. Joints can sometimes still work well even though the structure is altered.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "It tends to occur in people over the age of 45 and is most common in women over 45, but it can affect anyone. It most often develops in the hips, knees, spine, hand joints and big toes.",
          "Things thought to increase the risk include a joint injury, other joint conditions such as gout, getting older, a family history, and obesity, which puts extra strain on weight-bearing joints such as the knees and hips.",
        ],
      },
      {
        heading: "What it does not have to mean",
        paragraphs: [
          "Osteoarthritis cannot be cured, but it does not necessarily get any worse over time and it can sometimes gradually improve.",
          "Exercise can reduce pain and improve how well your joints work. Most people with arthritis do not need to have surgery.",
        ],
      },
    ],
    helps: [
      "See a GP if you have persistent symptoms, so they can confirm the diagnosis and prescribe any treatment you need.",
      "Keep active: exercise can reduce pain and improve how well your joints work.",
      "If you are overweight, losing even a small amount can improve your symptoms.",
      "If you are not sure which aids might help, ask your GP to refer you to a physiotherapist or occupational therapist.",
      "Do not be tempted to do too much on a good day. Pace yourself.",
    ],
    tryThisWeek: [
      "See a GP about persistent symptoms.",
      "Do a little exercise.",
      "Pace yourself on a good day.",
    ],
    ask: "Which of my joints are affected, and what can I do to keep them working well?",
    interactive: {
      kind: "risk-check",
      title: "What raises the chance?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "weight", label: "Being overweight", note: "Puts extra strain on joints that bear most of your weight, such as the knees and hips.", changeable: true },
        { id: "strain", label: "Exercise or work that strains joints", note: "Frequent strain and an excessive load on your joints can increase your risk.", changeable: true },
        { id: "injury", label: "A past joint injury", note: "Including a joint damaged in the past that did not heal properly.", changeable: false },
        { id: "condition", label: "Another joint condition", note: "Such as gout or rheumatoid arthritis.", changeable: false },
        { id: "age", label: "Getting older", note: "Your risk increases as you get older. It tends to occur over the age of 45.", changeable: false },
        { id: "woman", label: "Being a woman", note: "Osteoarthritis is more common in women than men.", changeable: false },
        { id: "family", label: "A family history", note: "Osteoarthritis may run in families, though no single gene has been found.", changeable: false },
      ],
    },
    sources: [AU_OA, NHS_OA, AU_OA_KNEE, AU_OA_HIP, NRAS_RA_OA],
    quiz: {
      question: "How does Arthritis UK describe osteoarthritis?",
      options: [{ text: "A joint that cannot repair itself as well as it once could", right: true }, { text: "An infection inside the joint" }, { text: "The immune system attacking the joint lining" }],
      why: "Arthritis UK describes osteoarthritis as what happens when a joint can no longer repair itself as well as it once could.",
    },
  },
  {
    id: "oa-flare",
    kicker: "Understanding",
    question: "Why does it flare up, and why doesn't an X-ray predict the pain?",
    hook: "Good days and bad days, weather and activity. And a scan that can look worse, or better, than the joint feels.",
    short: "Osteoarthritis symptoms often come and go, and can be linked to activity levels and even the weather. The amount of damage in a joint is not always a good gauge of the pain you are in. That is one reason X-rays are not usually needed to diagnose it.",
    sections: [
      {
        heading: "Symptoms that come and go",
        paragraphs: [
          "The symptoms may come and go in episodes, which can be related to your activity levels and even the weather. In more severe cases, the symptoms can be continuous.",
          "The pain may be worse first thing in the morning, after you have stayed still for a while, with changes in the weather, or when the joint is touched or pressed, for example when kneeling.",
        ],
      },
      {
        heading: "Good days and bad days",
        paragraphs: [
          "In most people with knee osteoarthritis, symptoms vary from day to day, with good days and bad days. The pain may feel worse at the end of the day or when you move your knee, and it may improve when you rest.",
          "Pressing on to get everything done when you are having a good day is likely to lead to more pain and fatigue the next day.",
        ],
      },
      {
        heading: "Damage and pain do not always match",
        paragraphs: [
          "The amount of damage in a joint is not always a good gauge of the level of pain you are in. In the knee, the level of change within the joint does not always match the level of pain people have.",
          "Changes to the joint do not always continue, and some people find that their symptoms improve over time.",
        ],
      },
      {
        heading: "Why X-rays are rarely needed",
        paragraphs: [
          "A GP will first ask about your symptoms and examine your joints. Further tests, such as X-rays or blood tests, are not usually necessary, but may be used to rule out other possible causes.",
          "A GP may suspect osteoarthritis if you are 45 or older, your joint pain gets worse the more you use the joint, and any morning stiffness lasts less than 30 minutes.",
        ],
      },
      {
        heading: "Settling a bad spell",
        paragraphs: [
          "If you feel you have overdone it, or a joint is hot and swollen, an ice pack or a bag of frozen peas wrapped in a damp tea towel may help, for around 15 to 20 minutes at a time. For pain without warmth or swelling, a heat pack or an ice pack can be used.",
          "If pain, heat and swelling continue for more than a few days, contact your GP or healthcare team. Ask for an urgent GP appointment or get help from NHS 111 if you have severe pain and swelling in just one joint that started suddenly.",
        ],
      },
    ],
    helps: [
      "Do a little exercise more often, rather than a lot on one day and needing a long time to recover.",
      "Try short breaks of 3 to 5 minutes every 30 to 45 minutes to sit and rest your joints.",
      "Cover heat or ice packs with a towel, and do not use them for more than 20 minutes at a time.",
      "Make a note of your daily activities and when pain caused difficulties, to spot any patterns.",
      "Get urgent advice for severe pain and swelling in just one joint that started suddenly.",
    ],
    tryThisWeek: [
      "Spread activity across the week.",
      "Take short breaks to rest your joints.",
      "Note when the pain is worse.",
    ],
    ask: "Do I need an X-ray, or can we decide on treatment from my symptoms?",
    interactive: {
      kind: "scenarios",
      title: "A bad day, or a good one",
      scenarios: [
        {
          id: "good-day",
          situation: "It is a good day and you want to do every job at once.",
          options: [{ text: "Spread the jobs out, with breaks", best: true }, { text: "Get everything done while you can" }],
          why: "Pressing on to get everything done when you are having a good day is likely to lead to more pain and fatigue the next day.",
        },
        {
          id: "ache",
          situation: "Your knee aches after a long walk, with no warmth or swelling.",
          options: [{ text: "A wrapped heat or ice pack, up to 20 minutes", best: true }, { text: "A hot pack straight on the skin" }],
          why: "For pain without warmth or swelling, a heat pack or an ice pack can be used. Cover the skin with a towel.",
        },
        {
          id: "sudden",
          situation: "One joint suddenly becomes very painful and swollen.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Wait for your next review" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if you have severe pain and swelling in just one joint that started suddenly.",
        },
        {
          id: "xray",
          situation: "A friend's X-ray looked worse than yours, but you hurt more.",
          options: [{ text: "Damage and pain do not always match", best: true }, { text: "One of the X-rays must be wrong" }],
          why: "The amount of damage in a joint is not always a good gauge of the level of pain you are in.",
        },
      ],
    },
    sources: [AU_OA_PAIN, NHS_OA_SYMPTOMS, AU_OA_KNEE, NHS_OA, AU_EX_HOWMUCH, AU_SELFHELP, NHS_ARTHRITIS],
    quiz: {
      question: "Does the amount of damage in a joint tell you how much it will hurt?",
      options: [{ text: "Not always", right: true }, { text: "Yes, exactly" }, { text: "Only in the hands" }],
      why: "The amount of damage in a joint is not always a good gauge of the level of pain you are in.",
    },
  },
  {
    id: "oa-rheumatoid-or-osteo",
    kicker: "Understanding",
    question: "Osteoarthritis or rheumatoid arthritis: what's the difference?",
    hook: "Same word, very different conditions. How long the morning stiffness lasts is one of the clues.",
    short: "Osteoarthritis happens when a joint's cartilage breaks down and the joint can no longer repair itself as well. Rheumatoid arthritis is an autoimmune disease, in which the immune system attacks the lining of the joints by mistake. Morning stiffness from osteoarthritis usually wears off within 30 minutes; in rheumatoid arthritis it often lasts longer.",
    sections: [
      {
        heading: "Two different conditions",
        paragraphs: [
          "Despite sharing the name arthritis, osteoarthritis and rheumatoid arthritis are very different. Understanding each is crucial for proper diagnosis and management.",
          "Osteoarthritis is the most common type of arthritis in the UK: the protective cartilage on the ends of the bones breaks down, causing pain, swelling and problems moving the joint. Rheumatoid arthritis is an autoimmune disease, in which the immune system attacks the cells that line the joints by mistake, making them swollen, stiff and painful.",
        ],
      },
      {
        heading: "Morning stiffness",
        paragraphs: [
          "Morning stiffness from osteoarthritis usually wears off within 30 minutes of getting up. Morning stiffness in rheumatoid arthritis often lasts longer than this.",
          "The National Rheumatoid Arthritis Society says that in osteoarthritis, stiffness often comes towards the end of the day, after using the affected joint. In rheumatoid arthritis it is worse after periods of inactivity, especially in the morning.",
        ],
      },
      {
        heading: "Which joints",
        paragraphs: [
          "Rheumatoid arthritis usually affects the hands, feet and wrists, and typically affects both sides of the body at the same time. Osteoarthritis most often causes problems in the knees, hips and small joints of the hands.",
          "The National Rheumatoid Arthritis Society says osteoarthritis can affect the lower parts of the spine and the finger joints closest to the nailbeds, areas rarely affected in rheumatoid arthritis.",
        ],
      },
      {
        heading: "Beyond the joints",
        paragraphs: [
          "Some people with rheumatoid arthritis have more general symptoms, such as tiredness, a high temperature, sweating, a poor appetite and weight loss. Osteoarthritis tends only to affect individual joints.",
          "Rheumatoid arthritis can also cause inflammation in other areas of the body, such as the lungs, heart and eyes.",
        ],
      },
      {
        heading: "Why the difference matters",
        paragraphs: [
          "Diagnosing rheumatoid arthritis quickly is important, because early treatment can prevent it getting worse and reduce the risk of joint damage. It tends to be treated in specialist care, while osteoarthritis is normally managed by the GP.",
          "There are lots of types of arthritis, so do not self-diagnose. See a GP if you are worried.",
        ],
      },
    ],
    helps: [
      "See a GP if you have unexplained pain, swelling or stiffness in your joints that does not go away in a few days.",
      "Be ready to tell the GP how and when your symptoms started, what makes the pain better or worse, and how it affects daily life.",
      "Ask for an urgent GP appointment or get help from NHS 111 if the skin around a joint is red or hot, or you have sore joints with a high temperature.",
      "In many areas you may be able to get help, such as physiotherapy, from NHS community musculoskeletal services without a GP referral.",
    ],
    tryThisWeek: [
      "See a GP about lasting joint symptoms.",
      "Note how and when symptoms started.",
      "Check if you can refer yourself to physio.",
    ],
    ask: "Could my symptoms be rheumatoid arthritis rather than osteoarthritis, and would a blood test help tell?",
    interactive: {
      kind: "flip-cards",
      title: "Two arthritis types, side by side",
      intro: "Turn each card to see how osteoarthritis and rheumatoid arthritis differ.",
      cards: [
        { id: "cause", front: "The cause", when: "Wear and repair, or the immune system?", back: "Osteoarthritis: cartilage breaks down. Rheumatoid arthritis: the immune system attacks the joint lining by mistake." },
        { id: "stiffness", front: "Morning stiffness", when: "How long it lasts after getting up", back: "In osteoarthritis it usually wears off within 30 minutes. In rheumatoid arthritis it often lasts longer." },
        { id: "joints", front: "Which joints", when: "Where it is usually felt", back: "Rheumatoid: hands, feet and wrists, often both sides. Osteoarthritis: knees, hips and small joints of the hands." },
        { id: "body", front: "The rest of the body", when: "More than the joints?", back: "Rheumatoid arthritis can cause tiredness, a high temperature and weight loss. Osteoarthritis tends only to affect joints." },
        { id: "care", front: "Who looks after it", when: "GP or specialist", back: "Osteoarthritis is normally managed by the GP. Rheumatoid arthritis tends to be treated in specialist care." },
      ],
    },
    sources: [NHS_ARTHRITIS, NHS_RA, NHS_RA_SYMPTOMS, NHS_OA, NRAS_DIFF, NRAS_RA_OA, AU_OA],
    quiz: {
      question: "Which of the two is an autoimmune disease?",
      options: [{ text: "Rheumatoid arthritis", right: true }, { text: "Osteoarthritis" }, { text: "Both of them" }],
      why: "Rheumatoid arthritis is an autoimmune disease, in which the immune system attacks the cells that line the joints by mistake.",
    },
  },
  {
    id: "oa-strength",
    kicker: "Exercise",
    question: "Which strength exercises help knees and hips?",
    hook: "Stronger muscles hold a joint steadier. Simple moves with a chair, a step or the floor, built up slowly.",
    short: "Exercise is one of the most important treatments for osteoarthritis, and strong muscles help keep joints stable and can reduce pain. Arthritis UK suggests strengthening exercises on at least two days a week, started slowly. Discuss any new exercise plan with your GP or physiotherapist before you start.",
    sections: [
      {
        heading: "Why strength matters",
        paragraphs: [
          "Exercise is one of the most important treatments for people with osteoarthritis, whatever your age or level of fitness. It should include exercises to strengthen your muscles and exercises to improve your general fitness.",
          "Having strong muscles helps keep joints stable and can reduce pain in the joints and the tissues around them. For the hip, strengthening exercises help to stabilise and protect the joint.",
        ],
      },
      {
        heading: "Check first",
        paragraphs: [
          "Discuss any new exercise plan with your GP or physiotherapist before you start. Doing too much exercise too quickly, or doing the wrong sort of exercise, may damage your joints.",
          "Your GP, or possibly a physiotherapist, will discuss the benefits you can expect and can give you an exercise plan to follow at home.",
        ],
      },
      {
        heading: "Two for the knees",
        paragraphs: [
          "Arthritis UK's knee exercises include a sitting straight-leg raise. Sit back in your chair with a straight back, straighten and raise one leg, hold for a slow count to 10, then slowly lower it.",
          "Another is sit to stands. Sit on a chair and, without using your hands for support, stand up and sit back down, slowly and with control. If the chair is too low, start by rising from a cushion on the seat.",
        ],
      },
      {
        heading: "Two for the hips",
        paragraphs: [
          "Arthritis UK's hip exercises include bridging. Lie on your back with your knees bent and feet flat, lift your pelvis and lower back, hold for five seconds and then lower down slowly.",
          "Another is standing hip abduction. Resting one hand on a chair or work surface, lift your leg straight out to the side, hold for five seconds and slowly lower it. Arthritis UK notes that one sitting hip stretch may not suit you after recent hip surgery.",
        ],
      },
      {
        heading: "How much, and how it should feel",
        paragraphs: [
          "Aim to do strengthening exercises on at least two days a week. Start with a low number of repetitions and add to this over time. Your muscles should feel tired, as if they have done some work.",
          "Mild discomfort while exercising and some soreness afterwards are normal, especially at first. If you have significantly more or severe pain during or after exercise, stop and talk to a healthcare professional.",
        ],
      },
    ],
    helps: [
      "Discuss any new exercise plan with your GP or physiotherapist before you start.",
      "Start slowly and build up gradually if you are new to exercise.",
      "Do strengthening exercises on at least two days a week.",
      "Keep up your exercises even when your symptoms improve, to stop them coming back.",
      "If your joints are hot or swollen, focus on stretching and leave strengthening exercises until they settle down.",
    ],
    tryThisWeek: [
      "Ask your GP or physio before starting.",
      "Start slowly and build up.",
      "Strengthen on two days this week.",
    ],
    ask: "Can I be referred to a physiotherapist for a strength programme that suits my knees or hips?",
    interactive: {
      kind: "flip-cards",
      title: "Five moves, card by card",
      intro: "Check with your GP or physiotherapist first. Turn each card to see how Arthritis UK describes it.",
      cards: [
        { id: "leg-raise", front: "Straight-leg raise", when: "Sitting, for the knees", back: "Straighten and raise one leg, hold for a slow count to 10, then slowly lower it. Repeat 10 times with each leg." },
        { id: "sit-stand", front: "Sit to stands", when: "With a chair, for the knees", back: "Without using your hands, stand up and sit back down, slowly and with control. Use a cushion if the chair is too low." },
        { id: "step-ups", front: "Step ups", when: "Bottom stair, for the knees", back: "Step up and down from the bottom step, holding the bannister if needed. Rest for one minute between sets." },
        { id: "bridging", front: "Bridging", when: "Lying down, for the hips", back: "With knees bent and feet flat, lift your pelvis and lower back, hold for five seconds, then lower down slowly." },
        { id: "abduction", front: "Hip abduction", when: "Standing, holding a chair", back: "Lift your leg straight out to the side, hold for five seconds and slowly lower it. Repeat five times on each side." },
      ],
    },
    sources: [NHS_OA_TREATMENT, AU_EX_KNEES, AU_EX_HIPS, AU_EX_TYPE, AU_EX_HOWMUCH, AU_OA_HIP, AU_OA_KNEE],
    quiz: {
      question: "How often does Arthritis UK suggest strengthening exercises?",
      options: [{ text: "On at least two days a week", right: true }, { text: "Once a month" }, { text: "Only on days without pain" }],
      why: "Aim to do strengthening exercises on at least two days a week.",
    },
  },
  {
    id: "oa-painkillers",
    kicker: "Treatment",
    question: "Which painkillers, gels and injections help osteoarthritis?",
    hook: "Gels and creams often come first. Tablets, capsaicin and injections each have a place, and limits.",
    short: "Medicines are unlikely to take the pain away completely, but they can ease pain and stiffness so you can keep active. Anti-inflammatory (NSAID) creams and gels can be particularly effective for knees and hands. Capsaicin cream and steroid injections are options when other treatments have not helped.",
    sections: [
      {
        heading: "What medicines can do",
        paragraphs: [
          "Medicines are unlikely to take the pain away completely. They are best used alongside self-help measures, to ease pain and stiffness so that you can keep active.",
          "The type of painkiller a GP may recommend depends on how severe your pain is and on other conditions or health problems you have.",
        ],
      },
      {
        heading: "Gels and creams",
        paragraphs: [
          "Non-steroidal anti-inflammatory drugs, or NSAIDs, are painkillers that work by reducing inflammation. Some come as creams you apply directly to the joint, and they can be particularly effective for osteoarthritis in the knees or hands.",
          "You are less likely to get side effects from ibuprofen gel or spray than from the tablets.",
        ],
      },
      {
        heading: "Tablets",
        paragraphs: [
          "NSAID tablets may be needed if gels are not easing the pain. They may not be suitable with conditions such as asthma, a stomach ulcer or angina, or after a heart attack or stroke, and a GP will usually prescribe a medicine to protect your stomach at the same time.",
          "Many people find paracetamol does not work very well, and it is normally only tried if you cannot take other medicines. Opioids such as codeine are usually only prescribed short term, because of side effects such as drowsiness, nausea and constipation.",
        ],
      },
      {
        heading: "Capsaicin cream",
        paragraphs: [
          "Capsaicin cream may be prescribed for osteoarthritis in the hands or knees if NSAID creams have not helped. It is made from chillies, and works by blocking the nerves that send pain messages.",
          "You should get some pain relief within the first 2 weeks, but it may take up to a month to work fully. Keep it away from your eyes, mouth, nose and genitals, and do not use it on broken or inflamed skin.",
        ],
      },
      {
        heading: "Steroid injections",
        paragraphs: [
          "Some people with osteoarthritis are offered a steroid injection when other treatments have not worked. Steroid injections work quickly and can ease pain for several weeks or months.",
          "Your doctor will probably recommend no more than three steroid injections into the same part of the body within a year. Hyaluronic acid injections are not available on the NHS, because the evidence for their long-term effectiveness is mixed.",
        ],
      },
    ],
    helps: [
      "Always use the dose a GP recommends, and do not exceed the maximum dose stated on the pack.",
      "Speak to a pharmacist or doctor if you are not sure whether ibuprofen is suitable for you.",
      "Make sure whoever is treating you knows all the medicines you are taking.",
      "Wash your hands after applying capsaicin cream, and avoid a hot bath or shower just before or after.",
      "Do not take ibuprofen at the same time as other NSAIDs, such as naproxen or aspirin.",
    ],
    tryThisWeek: [
      "Check the dose on the pack.",
      "Ask a pharmacist what suits you.",
      "List every medicine you take.",
    ],
    ask: "Which painkillers are safe for me to take regularly, and would a gel or an injection help?",
    interactive: {
      kind: "flip-cards",
      title: "Pain relief, card by card",
      intro: "Turn each card to see what that treatment does and when it is used.",
      cards: [
        { id: "gel", front: "NSAID creams and gels", when: "Rubbed on the joint", back: "Reduce inflammation. Can be particularly effective for knees and hands, with fewer side effects than tablets." },
        { id: "tablets", front: "NSAID tablets", when: "If gels are not easing the pain", back: "Not suitable for everyone. A GP will usually also prescribe a medicine to protect your stomach." },
        { id: "paracetamol", front: "Paracetamol", when: "Normally if other medicines cannot be taken", back: "Many people find it does not work very well. Never go over the maximum dose on the pack." },
        { id: "capsaicin", front: "Capsaicin cream", when: "Hands or knees, if NSAID creams have not helped", back: "Made from chillies. Blocks pain messages. May take up to a month to work fully." },
        { id: "steroid", front: "Steroid injection", when: "When other treatments have not worked", back: "Works quickly and can ease pain for several weeks or months. Usually no more than three a year in one place." },
      ],
    },
    sources: [NHS_OA_TREATMENT, AU_OA_PAIN, AU_OA, AU_STEROID, NHS_IBUPROFEN, AU_OA_KNEE],
    quiz: {
      question: "How long can capsaicin cream take to work fully?",
      options: [{ text: "Up to a month", right: true }, { text: "About ten minutes" }, { text: "It works straight away" }],
      why: "You should get some pain relief within the first 2 weeks, but it may take up to a month to work fully.",
    },
  },
  {
    id: "oa-weight",
    kicker: "Weight",
    question: "How much difference does weight make to my knees?",
    hook: "Every step loads the knee with more than your body weight. So even a small loss can be felt.",
    short: "Being overweight often makes osteoarthritis worse, because it puts extra strain on the joints. Arthritis UK says the force through your knees when walking can be two or three times your body weight, so losing even a small amount can make a difference. There is no special diet: a balanced, reduced-calorie diet with regular exercise is the advice.",
    sections: [
      {
        heading: "Why weight matters to joints",
        paragraphs: [
          "Being overweight or obese often makes osteoarthritis worse, as it places extra strain on some of your joints.",
          "The force put through your knees when walking can be two or three times your body weight, so losing even a small amount of weight can make a difference.",
        ],
      },
      {
        heading: "More than load",
        paragraphs: [
          "Being overweight can also increase inflammation in the body, which could cause you more pain.",
          "Arthritis UK says weight issues are linked to symptoms in nearly 1 in 4 people with knee pain. Being overweight increases the risk of osteoarthritis developing, and of it progressing.",
        ],
      },
      {
        heading: "A small loss helps",
        paragraphs: [
          "If you are overweight, losing even a small amount can improve your symptoms. It reduces the load on joints such as the hips and knees, and can also reduce pain caused by inflammation.",
          "For hip osteoarthritis too, losing weight if you are overweight could reduce your pain and other symptoms.",
        ],
      },
      {
        heading: "How to lose it",
        paragraphs: [
          "There is no special diet that will help with osteoarthritis. If you need to lose some weight, follow a balanced, reduced-calorie diet combined with regular exercise.",
          "Your GP and practice nurse can advise about how to lose weight slowly and safely. The NHS also has a free weight loss plan that you can follow over 12 weeks, with an app to download.",
        ],
      },
      {
        heading: "Knowing where you are",
        paragraphs: [
          "A BMI calculator is the easiest way to work out if you are a healthy weight. BMI is only a rough guide, and a healthcare professional will look at it along with other factors.",
          "Exercise is still important whatever your weight.",
        ],
      },
    ],
    helps: [
      "Use the NHS BMI healthy weight calculator to find out whether you are overweight.",
      "If you are overweight, try to lose weight by doing more physical activity and eating a healthier diet.",
      "Ask your GP and practice nurse how to lose weight slowly and safely.",
      "Discuss any new exercise plan with your GP or physiotherapist before you start.",
      "Try the free NHS 12-week weight loss plan.",
    ],
    tryThisWeek: [
      "Check your BMI.",
      "Ask your GP or nurse for advice.",
      "Look at the NHS weight loss plan.",
    ],
    ask: "Would losing weight help my joints, and what support could I get to do it?",
    interactive: {
      kind: "scenarios",
      title: "Weight and your joints",
      scenarios: [
        {
          id: "diet",
          situation: "You see a diet sold as special for osteoarthritis.",
          options: [{ text: "A balanced, reduced-calorie diet instead", best: true }, { text: "Buy it: it targets the joints" }],
          why: "There is no special diet that will help with osteoarthritis. If you need to lose some weight, follow a balanced, reduced-calorie diet combined with regular exercise.",
        },
        {
          id: "small",
          situation: "You can only see yourself losing a little weight.",
          options: [{ text: "Still worth it", best: true }, { text: "Not worth starting" }],
          why: "If you are overweight, losing even a small amount can improve your symptoms.",
        },
        {
          id: "how",
          situation: "You want to lose weight but are not sure how fast.",
          options: [{ text: "Ask your GP or practice nurse", best: true }, { text: "Cut out meals to lose it fast" }],
          why: "Your GP and practice nurse can advise about how to lose weight slowly and safely.",
        },
        {
          id: "healthy",
          situation: "Your weight is already healthy.",
          options: [{ text: "Keep exercising anyway", best: true }, { text: "Exercise no longer matters" }],
          why: "Exercise is still important whatever your weight.",
        },
      ],
    },
    sources: [NHS_OA_TREATMENT, AU_WEIGHT, AU_OA_KNEE, AU_OA, AU_OA_HIP, NHS_OA],
    quiz: {
      question: "When walking, what force can go through your knees?",
      options: [{ text: "Two or three times your body weight", right: true }, { text: "Half your body weight" }, { text: "Exactly your body weight" }],
      why: "The force put through your knees when walking can be two or three times your body weight.",
    },
  },
  {
    id: "oa-replacement",
    kicker: "Surgery",
    question: "Joint replacement: when is it worth it, and what should I expect?",
    hook: "For a badly worn knee or hip, a replacement can bring back a life with less pain. It comes after other treatments, and takes months to recover from.",
    short: "A knee or hip replacement may be recommended when pain and stiffness have a big effect on your life and other treatments have not worked. Most people who have one have osteoarthritis. Replacements are usually very successful: knees can last for 25 years and most hips at least 15, though recovery takes several months.",
    sections: [
      {
        heading: "When it is considered",
        paragraphs: [
          "A knee or hip replacement may be recommended if pain and stiffness are having a big effect on your life and other treatments have not worked. Most people who have a knee replacement have pain and movement problems caused by osteoarthritis.",
          "Joint replacement is usually only considered if you have severe pain and restricted movement, and there can be quite a wait for it on the NHS. Only about 1 in 10 people with knee osteoarthritis go on to have a knee replacement.",
        ],
      },
      {
        heading: "What is replaced",
        paragraphs: [
          "Knee replacement surgery replaces damaged parts of the knee joint with metal or plastic parts, either the whole joint or some of it. Hip replacement surgery replaces damaged parts of the hip joint with metal, plastic or ceramic parts.",
          "The earlier in life you have a joint replacement, the more likely you are to need further surgery. Replacements also tend to be less successful if a joint is in the very early stages of arthritis, or already very damaged.",
        ],
      },
      {
        heading: "Preparing while you wait",
        paragraphs: [
          "Your doctor may advise on exercises to do before and after, stopping smoking, a healthy diet and managing your weight. It is important to do these things while you wait, because waiting lists can be long.",
          "Think about asking for help at home, keeping things you use often within easy reach, stocking your freezer with cooked meals and arranging transport, as you will be unable to drive for several weeks.",
        ],
      },
      {
        heading: "Recovery",
        paragraphs: [
          "It can take several months to recover. Most people leave hospital between one and four days after a knee replacement, and around 1 to 3 days after a hip replacement if they are fit and the surgery went well.",
          "After a hip replacement, do not bend your hip more than 90 degrees or sit in a low chair, and wait at least 6 weeks to drive. Returning to work usually takes about 6 weeks, depending on the type of work you do.",
        ],
      },
      {
        heading: "How it turns out",
        paragraphs: [
          "Knee replacements are usually very successful, resulting in no pain in the knee and better movement, and they can last for 25 years. A hip replacement can last for at least 15 years.",
          "Arthritis UK says four out of five people who have had knee replacement surgery are happy with their new knees. Most people have no complications, but as with any operation there are risks, such as blood clots and wound infection, which your doctor will explain.",
        ],
      },
    ],
    helps: [
      "Expect to try non-surgical treatments first: most doctors recommend them before considering a knee replacement.",
      "Discuss with your healthcare team what you can expect to gain from surgery and what the possible risks are.",
      "While you wait, follow your doctor's advice on exercise, stopping smoking, a healthy diet and your weight.",
      "Have a dental check-up and get any problems dealt with well before a knee operation.",
      "Plan help at home and transport before the operation, as you will be unable to drive for several weeks.",
    ],
    tryThisWeek: [
      "Ask what surgery could gain me.",
      "Follow the advice while waiting.",
      "Plan help at home and transport.",
    ],
    ask: "When would a joint replacement be worth considering for me, and what are my risks?",
    interactive: {
      kind: "timeline",
      title: "From decision to recovery",
      steps: [
        { id: "first", when: "Before surgery is offered", title: "Other treatments first", points: ["Exercise, weight loss and pain relief come first.", "Surgery if pain and stiffness still have a big effect."] },
        { id: "wait", when: "While you wait", title: "Getting ready", points: ["Exercises, stopping smoking, a healthy diet.", "Plan help at home and transport."] },
        { id: "pre", when: "A few weeks before", title: "Pre-admission clinic", points: ["Tests such as a blood test and blood pressure.", "A chance to ask questions."] },
        { id: "home", when: "Days 1 to 4", title: "Home from hospital", points: ["Walking with crutches or a frame at first.", "Home exercises from the physiotherapist."] },
        { id: "six", when: "About 6 weeks", title: "Driving and work", points: ["At least 6 weeks before driving after most operations.", "Work after about 6 weeks, depending on the job."] },
      ],
    },
    sources: [NHS_KNEE_WHAT, NHS_KNEE_WHY, NHS_HIP_WHAT, NHS_HIP_WHY, AU_OA_PAIN, AU_KNEE_SURGERY, NHS_KNEE_PREP, NHS_HIP_RECOVERY, NHS_KNEE_COMPLICATIONS, AU_OA_KNEE],
    quiz: {
      question: "Roughly how many people with knee osteoarthritis go on to have a knee replacement?",
      options: [{ text: "About 1 in 10", right: true }, { text: "Almost everyone" }, { text: "About half" }],
      why: "Only about 1 in 10 people with knee osteoarthritis go on to have a knee replacement.",
    },
  },
  {
    id: "oa-stairs-chairs",
    kicker: "Everyday life",
    question: "How can I make stairs, chairs, baths and getting up easier?",
    hook: "Which leg goes first on the stairs, how high a chair should be, and where free help comes from.",
    short: "Using the handrail and leading with the right leg makes stairs easier: good leg first going up, bad leg first coming down. A higher, firm chair with good armrests helps you get up. Your local council offers a free needs assessment, and small adaptations are often free.",
    sections: [
      {
        heading: "On the stairs",
        paragraphs: [
          "Use the handrail for support when going up or down stairs. Go up stairs one at a time with your good leg first, but go downstairs with your bad leg first.",
          "A stair rail should ideally extend to just past the bottom or top of the stairs, so you have a steady anchor point. Grab rails, an extra stair rail or a stairlift can help, and an occupational therapist can advise on what you need.",
        ],
      },
      {
        heading: "Choosing a chair",
        paragraphs: [
          "Choose the highest chair you can, as this will make it easier to get up, but make sure you can place your feet flat on the floor. Good armrests can work just as well as a higher chair.",
          "With hip osteoarthritis, chairs should be firm and high enough that your hip is slightly higher than the knee. A chair you can tuck your feet back underneath also makes it easier to get up.",
        ],
      },
      {
        heading: "Getting up",
        paragraphs: [
          "Arthritis UK's knee exercises include sit to stands: without using your hands, stand up from a chair and sit back down, slowly and with control. If the chair is too low, start by rising from a cushion on the seat.",
          "Equipment that can help you get out of bed or a chair includes a grab rail you attach to the bed, straps to help lift your leg, things to raise your bed, and reclining chairs.",
        ],
      },
      {
        heading: "Baths and bathrooms",
        paragraphs: [
          "Bathroom equipment includes a non-slip mat for the bath or shower, a rail to help you get out, easy-to-turn tap handles and a raised toilet seat.",
          "Bigger home adaptations include a bath lift, a walk-in shower, or a grab rail to pull yourself out of the bath.",
        ],
      },
      {
        heading: "Help with the costs",
        paragraphs: [
          "Your local council offers a free needs assessment. An occupational therapist may visit to see what you struggle with, so tell them everything you find difficult, even small things such as opening a cupboard.",
          "Equipment and small adaptations will be provided for free if you are assessed as needing them, and your council should pay for each adaptation that costs less than £1,000. A Disabled Facilities Grant may help with bigger changes.",
        ],
      },
    ],
    helps: [
      "Use the handrail: good leg first going up, bad leg first coming down.",
      "Ask social services at your local council for a free needs assessment.",
      "Try out equipment before you buy it, and ask an occupational therapist for advice.",
      "Remove loose mats, and make sure your stairs, hall and landing are well lit.",
      "Keep exercising your joints: stopping regular movements can create stiffness and loss of movement.",
    ],
    tryThisWeek: [
      "Lead with the right leg on stairs.",
      "Ask your council for an assessment.",
      "Clear loose mats and light the stairs.",
    ],
    ask: "Could I be referred to an occupational therapist to look at my stairs, chairs and bathroom?",
    interactive: {
      kind: "scenarios",
      title: "Around the house",
      scenarios: [
        {
          id: "up",
          situation: "You are going upstairs with a painful hip.",
          options: [{ text: "Good leg first, using the handrail", best: true }, { text: "Bad leg first" }],
          why: "Go up stairs one at a time with your good leg first, but go downstairs with your bad leg first.",
        },
        {
          id: "down",
          situation: "Now you are coming back down.",
          options: [{ text: "Bad leg first", best: true }, { text: "Good leg first" }],
          why: "Go downstairs with your bad leg first, using the handrail for support.",
        },
        {
          id: "chair",
          situation: "Your armchair is so low it is hard to get out of.",
          options: [{ text: "A higher, firm chair with good armrests", best: true }, { text: "A deeper, softer chair" }],
          why: "Choose the highest chair you can, as this will make it easier to get up. Good armrests can work just as well as a higher chair.",
        },
        {
          id: "cost",
          situation: "You need a grab rail but worry about the cost.",
          options: [{ text: "Ask the council for a needs assessment", best: true }, { text: "Go without" }],
          why: "Equipment and small adaptations will be provided for free if you are assessed as needing them.",
        },
      ],
    },
    sources: [AU_STAIRS, AU_CHAIR, AU_AIDS, NHS_EQUIPMENT, NHS_ADAPTATIONS, AU_OA_HIP, AU_EX_KNEES],
    quiz: {
      question: "Going upstairs with a painful knee or hip, which leg goes first?",
      options: [{ text: "Your good leg", right: true }, { text: "Your bad leg" }, { text: "It makes no difference" }],
      why: "Go up stairs one at a time with your good leg first, but go downstairs with your bad leg first.",
    },
  },
  {
    id: "oa-hands",
    kicker: "Hands",
    question: "How can I manage hand arthritis: jars, keys and splints?",
    hook: "Thumbs and finger joints take the strain of everyday life. Gadgets, two-handed habits and a splint can share it.",
    short: "Osteoarthritis often affects the base of the thumb and the finger joints, which can make writing, opening jars or turning keys hard. Gadgets, using both hands and a thumb splint can help, and hand exercises can ease stiffness. The pain often improves after a few years, although the knobbly swellings stay.",
    sections: [
      {
        heading: "Where it shows",
        paragraphs: [
          "Osteoarthritis often affects the base of your thumb, the joints closest to your fingertips and the middle joints of your fingers. Your fingers may become stiff, painful and swollen, and you may develop bumps on your finger joints.",
          "A bump at the base of the thumb, where it joins your wrist, can be painful and can make tasks such as writing, opening jars or turning keys difficult.",
        ],
      },
      {
        heading: "It can settle",
        paragraphs: [
          "Hand osteoarthritis often tends to burn out after a time. It may be painful for a few years and then the pain may improve, but any firm, knobbly swellings will remain.",
          "Cold weather can make your symptoms worse. However, the weather will not affect the long-term outlook or how the condition progresses.",
        ],
      },
      {
        heading: "Jars, keys and taps",
        paragraphs: [
          "Gadgets such as electric tin openers, tools with softer, chunkier handles and key turners can ease the strain on your joints. Using both hands for tasks you normally do one-handed helps too.",
          "Special devices, such as tap turners, can make hand-operated tasks more manageable. An occupational therapist can give you help and advice about assistive devices in your home or workplace.",
        ],
      },
      {
        heading: "Splints",
        paragraphs: [
          "If you have osteoarthritis at the base of your thumb, a splint can be helpful. You may not notice the benefit straight away, but research shows a thumb splint may help with pain and function in the longer term.",
          "It is best not to wear a splint all the time, as this can increase stiffness in your joints. When you take it off, do some gentle wrist, finger and thumb exercises.",
        ],
      },
      {
        heading: "Warmth and movement",
        paragraphs: [
          "Putting your hands in warm water can help, especially if they feel stiff in the morning. Never leave heat or ice packs on your skin for longer than 20 minutes.",
          "Exercise can help ease stiffness and improve grip strength. Arthritis UK's hand exercises include a thumb stretch: hold your hand out as if saying stop, move your thumb across your palm, then back again.",
        ],
      },
    ],
    helps: [
      "Ask to be referred to an occupational therapist, physiotherapist or hand therapist.",
      "Pick up the kettle with two hands, and carry bags on your forearms rather than in your hands.",
      "Use a padded handle to widen your grip, and take frequent breaks to rest your hands.",
      "Practise hand exercises daily for short periods, building up over several weeks.",
      "See your GP if you regularly have weakness, numbness or pins and needles in your hand.",
    ],
    tryThisWeek: [
      "Use two hands for the kettle.",
      "Pad one handle you grip often.",
      "Do short hand exercises daily.",
    ],
    ask: "Would a thumb splint or a hand therapist help me, and how do I get one?",
    interactive: {
      kind: "scenarios",
      title: "Everyday hand jobs",
      scenarios: [
        {
          id: "kettle",
          situation: "Lifting the kettle hurts your hand.",
          options: [{ text: "Pick it up with two hands", best: true }, { text: "Grip it tighter with one" }],
          why: "Let's say your hands hurt when you are making a cup of tea. You could try to pick up the kettle with two hands instead of one.",
        },
        {
          id: "shopping",
          situation: "You have heavy shopping to carry home.",
          options: [{ text: "A backpack or shopping trolley", best: true }, { text: "Bags gripped in your fingers" }],
          why: "Using a backpack or shopping trolley avoids carrying heavy bags in your hands.",
        },
        {
          id: "splint",
          situation: "Your thumb splint helps, so you wear it all day and night.",
          options: [{ text: "Take breaks from it and exercise", best: true }, { text: "Never take it off" }],
          why: "It is best not to wear a splint all the time, as this can increase stiffness in your joints.",
        },
        {
          id: "morning",
          situation: "Your fingers are stiff first thing in the morning.",
          options: [{ text: "Warm water, then gentle exercises", best: true }, { text: "Keep them still all morning" }],
          why: "Putting your hands in warm water can help, especially if they feel stiff in the morning.",
        },
      ],
    },
    sources: [AU_OA_HAND, NHS_OA_SYMPTOMS, AU_JOINT_CARE, AU_SPLINTS, AU_EX_HANDS, AU_AIDS, NHS_OA_TREATMENT],
    quiz: {
      question: "Should you wear a hand splint all the time?",
      options: [{ text: "No, it can increase stiffness", right: true }, { text: "Yes, day and night" }, { text: "Only while sleeping, never by day" }],
      why: "It is best not to wear a splint all the time, as this can increase stiffness in your joints.",
    },
  },
  {
    id: "oa-walking",
    kicker: "Exercise",
    question: "Can I walk, cycle and swim with arthritis?",
    hook: "Yes. Low-impact activity builds muscle without straining the joint, and water takes your weight.",
    short: "Walking, cycling and swimming are all good, low-impact choices for osteoarthritis. Water takes the weight of your body, and cycling works the lower body without pounding the joints. Adults should aim for at least 150 minutes of moderate activity a week, built up gradually.",
    sections: [
      {
        heading: "Low impact is the aim",
        paragraphs: [
          "Low-impact exercises like cycling or swimming are good for knee osteoarthritis, because they help build muscles and improve the joint without straining the knee too much. For the hip, water-based exercises are particularly good, as the water takes the weight of your body.",
          "The best form of exercise for osteoarthritis is something you enjoy and will keep doing.",
        ],
      },
      {
        heading: "Walking",
        paragraphs: [
          "Walking is a good exercise for knee osteoarthritis. It is low impact, does not need any special equipment and can be done anywhere.",
          "A brisk 10-minute daily walk counts towards your 150 minutes of weekly exercise. If you are not very active but are able to walk, increase your walking distance gradually.",
        ],
      },
      {
        heading: "Swimming and water",
        paragraphs: [
          "Swimming works the whole body but puts less weight through your joints. Even walking in the pool will work your body, and water aerobics classes are done in water around waist height.",
          "If your joints are a problem, check whether your local swimming pool holds exercise classes. The water helps to support your joints while you move, and can help you strengthen your muscles.",
        ],
      },
      {
        heading: "Cycling",
        paragraphs: [
          "Cycling is a good exercise to work your lower body, and is low impact so should not cause more pain to your joints. It also gets you breathing quicker and your heart beating faster, so it is good for your heart and lungs.",
          "You can also use an exercise bike in a gym, or get one for your home.",
        ],
      },
      {
        heading: "How much",
        paragraphs: [
          "Adults should aim for at least 150 minutes a week of activity that makes them slightly short of breath, such as brisk walking, cycling or swimming. Lots of people break this into five 30-minute sessions a week, or shorter ones.",
          "Start off slowly and gradually build up how often you exercise, for how long, and how hard you try.",
        ],
      },
    ],
    helps: [
      "Choose something you enjoy and will keep doing.",
      "Wear comfortable shoes that give adequate support and do not cause blisters.",
      "If your joints are a problem, ask your local pool about exercise classes.",
      "Warm up before you exercise, and repeat some of the movements afterwards to cool down.",
      "If you have significantly more or severe pain during or after exercise, stop and talk to a healthcare professional.",
    ],
    tryThisWeek: [
      "Take a brisk 10-minute walk.",
      "Ask your pool about classes.",
      "Warm up and cool down.",
    ],
    ask: "Which activity would suit my joints best, and is there a local class I could join?",
    interactive: {
      kind: "scenarios",
      title: "Choosing your activity",
      scenarios: [
        {
          id: "start",
          situation: "You have not been active for a while but can walk.",
          options: [{ text: "Short walks, building up gradually", best: true }, { text: "A long hike straight away" }],
          why: "If you are not very active but are able to walk, increase your walking distance gradually.",
        },
        {
          id: "hip",
          situation: "Your hip hurts when you walk far.",
          options: [{ text: "Try water-based exercise", best: true }, { text: "Stop moving altogether" }],
          why: "For the hip, water-based exercises are particularly good, as the water takes the weight of your body.",
        },
        {
          id: "weather",
          situation: "It is raining and you planned to cycle.",
          options: [{ text: "Use an exercise bike indoors", best: true }, { text: "Skip the week" }],
          why: "You can also use an exercise bike in a gym, or get one for your home.",
        },
        {
          id: "time",
          situation: "You cannot fit in a long session.",
          options: [{ text: "Shorter sessions still count", best: true }, { text: "It is not worth doing" }],
          why: "Lots of people break this into five 30-minute sessions a week, or shorter ones.",
        },
      ],
    },
    sources: [AU_EX_TYPE, AU_OA_KNEE, AU_OA_HIP, AU_EX_HOWMUCH, NHS_WALKING, AU_EX_START],
    quiz: {
      question: "Why is swimming good for painful joints?",
      options: [{ text: "It puts less weight through them", right: true }, { text: "It rests the muscles completely" }, { text: "Cold water cures arthritis" }],
      why: "Swimming works the whole body but puts less weight through your joints.",
    },
  },
  {
    id: "oa-mood",
    kicker: "Wellbeing",
    question: "How are pain, sleep and mood connected?",
    hook: "Pain disturbs sleep, poor sleep makes pain feel worse, and both wear down your mood. Each link can be loosened.",
    short: "The effects of osteoarthritis can make people feel depressed or anxious, and can affect sleep. Poor sleep lowers the point at which you feel pain, so the pain seems worse. A regular sleep routine, staying active and talking to your doctor about low mood can all help.",
    sections: [
      {
        heading: "How they are linked",
        paragraphs: [
          "The effects of osteoarthritis can make people feel depressed or anxious, and it can affect relationships and sleep.",
          "Pain may make it difficult to get to sleep or may wake you. If you often lose sleep, this can make the pain seem worse, which in turn can disturb your sleep even more.",
        ],
      },
      {
        heading: "Sleep",
        paragraphs: [
          "Not getting enough good sleep can lower the point at which you feel pain, known as your pain threshold.",
          "Keep a sleep diary to spot patterns, sleep at regular times, and wind down before bed with a warm bath or a book. With hip osteoarthritis, a pillow between your legs when lying on your side, or under your knees on your back, may be more comfortable.",
        ],
      },
      {
        heading: "Mood",
        paragraphs: [
          "Depression is different from feeling low for a while: it goes on for weeks and interferes with your daily life. Having no energy and not sleeping well are other signs.",
          "Speak to your doctor if you are feeling low, as they may be able to recommend psychological therapies such as cognitive behavioural therapy. In a lot of places you can also refer yourself to NHS talking therapies.",
        ],
      },
      {
        heading: "Things that help",
        paragraphs: [
          "When we exercise, the body releases feel-good hormones called endorphins and serotonin, which improve our mood. Practising relaxation techniques regularly can help to reduce persistent pain.",
          "Keep in touch with friends and family, even with shorter visits. Many people find it helpful to talk to others who are in a similar position.",
        ],
      },
      {
        heading: "More support",
        paragraphs: [
          "Pain management programmes help you learn to live well with pain, covering things like pacing yourself, managing flare-ups and getting better sleep.",
          "If the feelings are so bad that you feel on the verge of harming yourself, this is an emergency. Talk to your doctor immediately, call 999 or go to A&E.",
        ],
      },
    ],
    helps: [
      "Keep a sleep diary to work out if there are any patterns to your sleep problems.",
      "Avoid caffeine after midday, as it can cause poor sleep.",
      "Make sure your healthcare team knows if pain is getting you down.",
      "Call the Arthritis UK helpline free on 0800 5200 520.",
      "Check whether you can refer yourself to NHS talking therapies where you live.",
    ],
    tryThisWeek: [
      "Start a sleep diary.",
      "No caffeine after midday.",
      "Tell your team if pain gets you down.",
    ],
    ask: "My pain is affecting my sleep and mood. What help is there, and could I see a pain management service?",
    interactive: {
      kind: "signs",
      title: "Things worth telling your GP",
      intro: "Tick any you have noticed. They are worth raising, because help is available.",
      signs: ["Feeling low for weeks", "Losing motivation or enjoyment", "Feeling hopeless or tearful", "Having no energy", "Not sleeping well", "Pain waking you in the night", "Feeling worried all the time"],
      after: "Speak to your doctor, who may recommend psychological therapies. If you feel on the verge of harming yourself, call 999 or go to A&E.",
      copyHeading: "Things I have noticed",
    },
    sources: [AU_OA_KNEE, AU_OA_HIP, AU_SLEEP, AU_SELFHELP, AU_MENTAL, NHS_PAIN, AU_PAIN, NHS_OA_LIVING],
    quiz: {
      question: "What can poor sleep do to pain?",
      options: [{ text: "Lower the point at which you feel it", right: true }, { text: "Nothing at all" }, { text: "Make joints heal faster" }],
      why: "Not getting enough good sleep can lower the point at which you feel pain, known as your pain threshold.",
    },
  },
];
