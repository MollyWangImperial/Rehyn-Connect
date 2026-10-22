import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Polymyalgia rheumatica page's pieces (content/library-conditions/body-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, PMRGCAuk
// (the charity for polymyalgia rheumatica and giant cell arteritis), Arthritis UK (the charity formerly called
// Versus Arthritis; its pages are on arthritis-uk.org), the Royal Osteoporosis Society and the government's
// Access to Work pages. Urgent advice about giant cell arteritis keeps each source's own wording (a GP or NHS 111
// immediately; A&E if a doctor cannot be seen straight away). General information only; it never replaces what
// a person's own GP or rheumatology team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const auk = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const pmrgca = (label: string, path: string): LearnSource => ({ label: `PMRGCAuk: ${label}`, url: `https://pmrgca.org.uk/${path}` });
const ros = (label: string, path: string): LearnSource => ({ label: `Royal Osteoporosis Society: ${label}`, url: `https://theros.org.uk/information-and-support/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_PMR = nhs("Polymyalgia rheumatica", "conditions/polymyalgia-rheumatica/");
const NHS_PMR_SYMPTOMS = nhs("Symptoms of polymyalgia rheumatica", "conditions/polymyalgia-rheumatica/symptoms/");
const NHS_PMR_DIAGNOSIS = nhs("Diagnosing polymyalgia rheumatica", "conditions/polymyalgia-rheumatica/diagnosis/");
const NHS_PMR_TREATMENT = nhs("Treating polymyalgia rheumatica", "conditions/polymyalgia-rheumatica/treatment/");
const NHS_GCA = nhs("Temporal arteritis", "conditions/temporal-arteritis/");
const NHS_PRED_ABOUT = nhs("About prednisolone tablets and liquid", "medicines/prednisolone/about-prednisolone-tablets-and-liquid/");
const NHS_PRED_HOW = nhs("How and when to take prednisolone tablets and liquid", "medicines/prednisolone/how-and-when-to-take-prednisolone-tablets-and-liquid/");
const NHS_PRED_SIDE = nhs("Side effects of prednisolone tablets and liquid", "medicines/prednisolone/side-effects-of-prednisolone-tablets-and-liquid/");
const NHS_PRED_QUESTIONS = nhs("Common questions about prednisolone tablets and liquid", "medicines/prednisolone/common-questions-about-prednisolone-tablets-and-liquid/");
const NHS_STEROIDS = nhs("Steroids", "medicines/steroids/");
const NHS_OSTEO_PREVENTION = nhs("Preventing osteoporosis", "conditions/osteoporosis/prevention/");
const NHS_OSTEO_CAUSES = nhs("Causes of osteoporosis", "conditions/osteoporosis/causes/");
const NHS_ACTIVITY_OLDER = nhs("Physical activity guidelines for older adults", "live-well/exercise/physical-activity-guidelines-older-adults/");

const AUK_PMR = auk("Polymyalgia rheumatica (PMR)", "understanding-arthritis/conditions/polymyalgia-rheumatica-pmr/");
const AUK_GCA = auk("Giant cell arteritis (GCA)", "understanding-arthritis/conditions/giant-cell-arteritis-gca/");
const AUK_STEROIDS = auk("Steroids", "understanding-arthritis/arthritis-treatments/drugs/steroids/");
const AUK_BISPHOSPHONATES = auk("Bisphosphonates", "understanding-arthritis/arthritis-treatments/drugs/bisphosphonates/");

const PMRGCA_PMR = pmrgca("What is PMR?", "information-and-advice/what-is-pmr/");
const PMRGCA_GCA = pmrgca("What is GCA?", "information-and-advice/what-is-gca/");
const PMRGCA_LIVING = pmrgca("Living with PMR/GCA", "information-and-advice/living-with-pmr-gca/");
const PMRGCA_EXERCISE = pmrgca("Exercise and nutrition", "information-and-advice/exercise-and-nutrition/");
const PMRGCA_FAQS = pmrgca("FAQs", "information-and-advice/faqs/");
const PMRGCA_ALSO_GCA = pmrgca("If you have PMR, you could also have GCA", "if-you-have-pmr-you-could-also-have-gca/");
const PMRGCA_SUPPORT = pmrgca("Help and support when you need it", "get-support/");
const PMRGCA_HELPLINE = pmrgca("Helpline", "get-support/helpline/");
const PMRGCA_GROUPS = pmrgca("Local support groups", "get-support/groups/");
const PMRGCA_FORUM = pmrgca("Online health forum", "get-support/online-health-forum/");
const PMRGCA_INFO_PACK = pmrgca("Information pack", "get-support/information-pack/");

const ROS_STEROIDS = ros("Steroids (glucocorticoids) and bone health", "causes-and-risk-factors/medicines-that-increase-your-risk/steroids-glucocorticoids-and-bone-health/");

const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");

export const pmrAnswers: LearnArticle[] = [
  {
    id: "pmr-what-it-is",
    kicker: "Understanding",
    question: "What is polymyalgia rheumatica?",
    hook: "Aching, stiff muscles around the shoulders, neck and hips, mostly in people over 50. Steroids usually bring quick relief.",
    short: "Polymyalgia rheumatica (PMR) is a condition that causes pain, stiffness and inflammation in the muscles around the shoulders, neck and hips. It mainly affects people over 50 and is more common in women. A steroid medicine called prednisolone is the main treatment, and it relieves the symptoms.",
    sections: [
      {
        heading: "An inflammatory condition",
        paragraphs: [
          "Polymyalgia rheumatica, often shortened to PMR, is a condition that causes pain, stiffness and inflammation in the muscles around the shoulders, neck and hips. The word poly means many, and myalgia means muscle pain.",
          "It is an inflammatory condition of unknown cause, but it is recognised to be an autoimmune illness. A combination of genetic and environmental factors is thought to be responsible.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "Polymyalgia rheumatica is an age-related condition. Most people diagnosed with it are over 65, and it is very rare in people younger than 50. It is more common in women than men.",
          "It is not an inherited condition. But it is commoner in people of Northern European origin, which suggests genetics probably plays a part. Having it does not mean your brothers, sisters or children are likely to get it.",
        ],
      },
      {
        heading: "How it starts",
        paragraphs: [
          "It often comes on quickly, perhaps over a week or two, and it can start just after a flu-like illness. The stiffness may be so severe that dressing, washing, climbing stairs or even getting out of bed is difficult.",
          "The symptoms are similar to those of many other conditions, including rheumatoid arthritis. These need to be ruled out before polymyalgia rheumatica is diagnosed.",
        ],
      },
      {
        heading: "Treatment and outlook",
        paragraphs: [
          "A steroid medicine called prednisolone is the main treatment. It does not cure polymyalgia rheumatica, but it can help relieve the symptoms.",
          "Most people need a course of steroid treatment lasting 12 months to 2 years to stop their symptoms returning. Some people need steroids for longer, but most people make a full recovery.",
        ],
      },
      {
        heading: "Linked to giant cell arteritis",
        paragraphs: [
          "Up to 1 in 5 people with polymyalgia rheumatica develop a more serious condition called giant cell arteritis, also known as temporal arteritis, where the arteries in the head and neck become inflamed. Unlike polymyalgia rheumatica, it needs immediate medical attention.",
        ],
      },
    ],
    helps: [
      "See a GP if you have pain and stiffness for more than a week.",
      "Know the key symptoms of giant cell arteritis, and report any unusual headache or jaw pain to your GP immediately.",
      "Find out about the condition, and share the information with people close to you who can support you.",
      "Keep a diary of your symptoms, to help your doctor understand the progress of your condition.",
    ],
    tryThisWeek: [
      "See a GP about pain lasting over a week.",
      "Learn the warning signs of giant cell arteritis.",
      "Start a diary of your symptoms.",
    ],
    ask: "What else could be causing my symptoms, and how sure are we that it is polymyalgia rheumatica?",
    interactive: {
      kind: "risk-check",
      title: "Who is more likely to get it?",
      intro: "Tick any that apply. These are things nobody can change.",
      items: [
        { id: "age", label: "Being over 50", note: "It is very rare in people younger than 50, and most people diagnosed with it are over 65.", changeable: false },
        { id: "woman", label: "Being a woman", note: "It is more common in women than men.", changeable: false },
        { id: "origin", label: "Northern European origin", note: "It is commoner in people of Northern European origin, so genetics probably plays a part.", changeable: false },
      ],
    },
    sources: [NHS_PMR, AUK_PMR, PMRGCA_PMR, PMRGCA_FAQS, NHS_PMR_TREATMENT, PMRGCA_LIVING],
    quiz: {
      question: "Where does polymyalgia rheumatica mainly cause pain and stiffness?",
      options: [{ text: "The shoulders, neck and hips", right: true }, { text: "The small joints of the hands and feet" }, { text: "The lower back only" }],
      why: "Polymyalgia rheumatica, often shortened to PMR, is a condition that causes pain, stiffness and inflammation in the muscles around the shoulders, neck and hips.",
    },
  },
  {
    id: "pmr-symptoms",
    kicker: "Symptoms",
    question: "What does polymyalgia rheumatica feel like?",
    hook: "Stiff, painful shoulders that make it hard to get out of bed, easing as the morning goes on.",
    short: "The most common symptom is pain and stiffness in the shoulders, neck and hips, usually on both sides. It is often worst first thing in the morning and starts to ease after about 45 minutes as you get moving. Some people also feel very tired, lose their appetite or weight, or feel low.",
    sections: [
      {
        heading: "Pain and stiffness",
        paragraphs: [
          "The most common symptom is pain and stiffness in the shoulders, neck and hips, which develops quickly over a few days or weeks. Both sides of the body are usually affected.",
          "It can affect the thighs too. Some people also develop neck and back pain, and pain in both hips.",
        ],
      },
      {
        heading: "Worse in the morning",
        paragraphs: [
          "The stiffness is often worse first thing in the morning after you wake up. It usually starts to improve after about 45 minutes as you become more active.",
          "It is worse when resting or after rest, and it can improve with activity or as the day goes on. The pain may also wake you at night.",
        ],
      },
      {
        heading: "Everyday tasks",
        paragraphs: [
          "Typically, people find it difficult to get out of bed in the morning. Tasks that mean raising the arms above shoulder level, like washing hair or reaching into overhead cupboards, become difficult.",
          "The symptoms are different from the ache you may feel after exercise your body is not used to. The pain and stiffness are often widespread.",
        ],
      },
      {
        heading: "Feeling unwell too",
        paragraphs: [
          "Some people also feel very tired, lose their appetite, lose weight or have depression. Night sweats and a fever can happen too.",
          "At times, tiredness can be overwhelming, and this is known as fatigue. The condition can also make you feel low and anxious.",
        ],
      },
      {
        heading: "When to get advice",
        paragraphs: [
          "See a GP if you have pain and stiffness that lasts longer than a week. They will investigate the cause.",
          "If you have been diagnosed with polymyalgia rheumatica, or it is suspected, contact a GP or call NHS 111 immediately if you get a new or frequent headache, pain in your jaw muscles or tongue when eating or talking, or problems with your sight. These symptoms may mean a more serious condition called giant cell arteritis.",
        ],
      },
    ],
    helps: [
      "See a GP if pain and stiffness last longer than a week.",
      "Keep a diary of your symptoms, to help your doctor understand the progress of your condition.",
      "A hot bath or shower can help ease pain and stiffness first thing in the morning.",
      "Contact a GP or call NHS 111 immediately if you get a new headache, jaw pain when eating or talking, or problems with your sight.",
    ],
    tryThisWeek: [
      "See a GP if stiffness lasts over a week.",
      "Note your symptoms in a diary.",
      "Try a hot shower in the morning.",
    ],
    ask: "Could my symptoms be polymyalgia rheumatica, and which tests do I need?",
    interactive: {
      kind: "signs",
      title: "Symptoms you may have noticed",
      intro: "Tick any you have. They can help the GP find the cause.",
      signs: ["Pain in both shoulders", "A stiff neck or stiff hips", "Morning stiffness over 45 minutes", "Hard to get out of bed", "Hard to lift my arms above my shoulders", "Pain that wakes me at night", "Feeling very tired", "Loss of appetite or weight", "Feeling low or anxious", "Night sweats or a fever"],
      after: "See a GP if pain and stiffness last longer than a week. Contact a GP or call NHS 111 immediately if you also have a new headache, jaw pain when eating or talking, or problems with your sight.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_PMR_SYMPTOMS, AUK_PMR, PMRGCA_PMR, NHS_PMR, PMRGCA_LIVING],
    quiz: {
      question: "When does morning stiffness usually start to improve?",
      options: [{ text: "After about 45 minutes, as you get moving", right: true }, { text: "Within a few seconds of waking" }, { text: "Never during the day" }],
      why: "The stiffness usually starts to improve after about 45 minutes as you become more active.",
    },
  },
  {
    id: "pmr-diagnosis",
    kicker: "Diagnosis",
    question: "How is polymyalgia rheumatica diagnosed?",
    hook: "There is no single test. Blood tests, a checklist and a quick response to steroids build the picture.",
    short: "There is no specific test for polymyalgia rheumatica. Doctors use blood tests for inflammation, rule out conditions with similar symptoms such as rheumatoid arthritis, and check your symptoms against a checklist. A quick improvement with steroids is part of that checklist.",
    sections: [
      {
        heading: "No single test",
        paragraphs: [
          "Diagnosing polymyalgia rheumatica can often be quite a lengthy process involving several different tests. This is because it shares many symptoms with more common conditions, such as rheumatoid arthritis, which need to be ruled out first.",
          "Your doctor will listen to the history of your symptoms and carry out a physical examination. You will also have blood tests to check for inflammation in your body and to rule out other conditions.",
        ],
      },
      {
        heading: "Blood tests for inflammation",
        paragraphs: [
          "Erythrocyte sedimentation rate (ESR) and C-reactive protein (CRP) are blood tests that check the levels of inflammation in your body. If both are normal, it is unlikely that polymyalgia rheumatica will be diagnosed.",
          "Sometimes ESR is normal and CRP is raised, which is more likely to point to polymyalgia rheumatica, so both tests are usually done at the same time. Inflammation is a feature of many conditions, so high levels do not automatically mean you have it.",
        ],
      },
      {
        heading: "Ruling other things out",
        paragraphs: [
          "A test for rheumatoid factor and anti-CCP antibodies may be done to rule out rheumatoid arthritis. Blood tests can also check for a blood infection, how well your kidneys and other organs are working, and whether your thyroid is overactive or underactive.",
          "You may have a urine test, and X-rays or ultrasound scans may be used to look at your bones and joints. Anaemia, a lack of red blood cells, is quite common in polymyalgia rheumatica, so your doctor may test for it.",
          "Tests matter before steroids are started. Steroids can make the symptoms of several conditions better while making the diagnosis more difficult.",
        ],
      },
      {
        heading: "The symptom checklist",
        paragraphs: [
          "Once other causes are ruled out, a checklist can be used. Polymyalgia rheumatica can usually be confidently diagnosed if you are over 50, have pain in your shoulders or hips, have morning stiffness lasting longer than 45 minutes, and have had symptoms for more than 2 weeks.",
          "Blood tests also need to show raised levels of inflammation, and your symptoms need to improve rapidly after treatment with steroids.",
        ],
      },
      {
        heading: "Seeing a specialist",
        paragraphs: [
          "You may be referred to a rheumatologist if there is any doubt about the diagnosis, if your symptoms do not improve with steroids, or if you have side effects from the treatment.",
          "PMRGCAuk says the specialist could be anyone with a lot of experience of treating it successfully. Usually this is a rheumatologist, but your GP, a geriatrician, a neurologist or an ophthalmologist may also be expert in it.",
        ],
      },
    ],
    helps: [
      "See a GP if pain and stiffness last longer than a week.",
      "Keep a diary of your symptoms, to help your doctor understand the progress of your condition.",
      "Talk to your GP about a referral to a rheumatologist if your symptoms are not responding to steroids the way they should.",
    ],
    tryThisWeek: [
      "See a GP about stiffness over a week.",
      "Keep a diary of your symptoms.",
      "Ask about a referral if steroids are not helping.",
    ],
    ask: "Which other conditions have been ruled out, and do I need to see a rheumatologist?",
    interactive: {
      kind: "flip-cards",
      title: "The tests you may have",
      intro: "Tap each card to see what it shows.",
      cards: [
        { id: "esr", front: "ESR blood test", when: "When the cause is being found", back: "Checks the level of inflammation in your body. Usually done at the same time as CRP." },
        { id: "crp", front: "CRP blood test", when: "When the cause is being found", back: "Also checks inflammation. A raised CRP with a normal ESR is more likely to point to polymyalgia rheumatica." },
        { id: "rf", front: "Rheumatoid factor and anti-CCP", when: "To rule out rheumatoid arthritis", back: "Blood tests that help rule out rheumatoid arthritis, which shares many symptoms." },
        { id: "other", front: "Other blood and urine tests", when: "To rule out other causes", back: "Check for a blood infection, how well your kidneys work, and thyroid problems that can cause muscle pain." },
        { id: "scans", front: "X-ray or ultrasound", when: "To look at bones and joints", back: "Show the condition of your bones and joints." },
      ],
    },
    sources: [NHS_PMR_DIAGNOSIS, AUK_PMR, PMRGCA_PMR, PMRGCA_FAQS, NHS_PMR_SYMPTOMS, PMRGCA_LIVING, PMRGCA_ALSO_GCA],
    quiz: {
      question: "Which of these is part of the checklist for diagnosing polymyalgia rheumatica?",
      options: [{ text: "Symptoms improve rapidly with steroids", right: true }, { text: "One positive blood test on its own" }, { text: "Being under 40" }],
      why: "Blood tests also need to show raised levels of inflammation, and your symptoms need to improve rapidly after treatment with steroids.",
    },
  },
  {
    id: "pmr-gca",
    kicker: "Urgent",
    question: "What are the urgent signs of giant cell arteritis?",
    hook: "A new headache, jaw pain when chewing or any change in sight needs help straight away. Do not wait.",
    short: "Giant cell arteritis is a related condition where arteries, particularly at the temples, become inflamed. It can lead to stroke or blindness if not treated quickly. If you have polymyalgia rheumatica and get a new headache, jaw pain when eating or talking, or problems with your sight, contact a GP or call NHS 111 immediately.",
    sections: [
      {
        heading: "A related condition",
        paragraphs: [
          "Giant cell arteritis, also called temporal arteritis, is where the arteries, particularly those at the side of the head, become inflamed. It is serious and needs urgent treatment.",
          "Up to 1 in 5 people with polymyalgia rheumatica develop it. People who have been treated for polymyalgia rheumatica may also develop it, possibly some years later.",
        ],
      },
      {
        heading: "The warning signs",
        paragraphs: [
          "One sign is a new or frequent headache that usually develops suddenly, and your scalp may also feel sore or tender. Another is pain in the jaw muscles or tongue when eating or talking.",
          "Problems with sight are another sign, such as double vision or loss of vision in one or both eyes. Some people notice tender or thickened blood vessels at the temples, or find brushing their hair painful.",
          "Flu-like symptoms, weight loss, night sweats and tiredness are also common.",
        ],
      },
      {
        heading: "What to do straight away",
        paragraphs: [
          "If you have polymyalgia rheumatica, or it is suspected, and you get any of these symptoms, contact a GP or call NHS 111 immediately. You can call 111 or get help from 111 online.",
          "If you have any changes or problems with your vision, or jaw pain while eating, see your doctor straight away. If you cannot get an immediate appointment, contact an out-of-hours doctor or go to the accident and emergency department at the nearest hospital straight away.",
          "Sudden changes in your sight need attention even if they last only a few minutes. If you cannot see your doctor, go to A&E.",
        ],
      },
      {
        heading: "Why speed matters",
        paragraphs: [
          "Giant cell arteritis can lead to serious problems like stroke and blindness if it is not treated quickly. Serious problems can usually be avoided with prompt steroid treatment.",
          "Treatment is started before giant cell arteritis is confirmed, because of the risk of vision loss. If you have problems with your vision, you should have a same-day appointment with an eye specialist at a hospital eye department.",
        ],
      },
      {
        heading: "Tests and treatment",
        paragraphs: [
          "After some blood tests you will be referred to a specialist. You may have an ultrasound scan of your temples, or a biopsy under local anaesthetic, where a small piece of the temporal artery is removed and checked.",
          "It is treated with steroid medicine, usually prednisolone: a high dose for a few weeks, then a lower dose over a longer period, possibly several years.",
        ],
      },
    ],
    helps: [
      "Know the key symptoms of giant cell arteritis, and report any unusual headache or jaw pain to your GP immediately.",
      "Contact a GP or call NHS 111 immediately if you get a new headache, jaw pain when eating or talking, or problems with your sight.",
      "If you have sight problems or jaw pain and cannot get an immediate appointment, go to A&E at the nearest hospital straight away.",
      "Talk to your GP if your polymyalgia rheumatica is not responding to steroids the way it should.",
      "Do not suddenly stop taking steroids unless your doctor tells you to.",
    ],
    tryThisWeek: [
      "Learn the key symptoms of giant cell arteritis.",
      "Know when to call a GP or NHS 111.",
      "Know when to go to A&E.",
    ],
    ask: "Which symptoms of giant cell arteritis should make me call straight away, and who should I call?",
    interactive: {
      kind: "scenarios",
      title: "What to do if...",
      scenarios: [
        {
          id: "headache",
          situation: "You have PMR and a sudden new headache starts, with a tender scalp.",
          options: [{ text: "Contact a GP or call NHS 111 immediately", best: true }, { text: "Wait for your next routine appointment" }, { text: "Take painkillers and see how it goes" }],
          why: "A new or frequent headache that develops suddenly may mean giant cell arteritis. Contact a GP or call NHS 111 immediately.",
        },
        {
          id: "sight",
          situation: "Your sight goes blurred for a few minutes, and your GP cannot see you today.",
          options: [{ text: "Go to A&E", best: true }, { text: "Wait to see if it happens again" }, { text: "Book an eye test for next month" }],
          why: "Sudden changes in your sight need attention even if they last only a few minutes. If you cannot see your doctor, go to A&E.",
        },
        {
          id: "jaw",
          situation: "Your jaw aches more and more as you chew.",
          options: [{ text: "See your doctor straight away", best: true }, { text: "Switch to soft food and wait" }],
          why: "Jaw pain while eating is a sign of giant cell arteritis. See your doctor straight away, or go to A&E if you cannot get an immediate appointment.",
        },
      ],
    },
    sources: [NHS_PMR_SYMPTOMS, NHS_GCA, AUK_GCA, PMRGCA_ALSO_GCA, PMRGCA_GCA, NHS_PMR, AUK_PMR, PMRGCA_LIVING],
    quiz: {
      question: "You have PMR, develop jaw pain when eating, and cannot get an immediate GP appointment. What should you do?",
      options: [{ text: "Go to A&E at the nearest hospital straight away", right: true }, { text: "Wait a week to see if it passes" }, { text: "Lower your steroid dose" }],
      why: "If you cannot get an immediate appointment, contact an out-of-hours doctor or go to the accident and emergency department at the nearest hospital straight away.",
    },
  },
  {
    id: "pmr-steroids",
    kicker: "Treatment",
    question: "How do steroid tablets treat polymyalgia rheumatica?",
    hook: "Prednisolone damps down the inflammation, and many people feel much better within days.",
    short: "A steroid called prednisolone is the main treatment. It blocks chemicals that cause inflammation, and symptoms should improve within a few days of starting. It does not cure the condition, so it is taken for a long time at a slowly reducing dose, usually once a day with breakfast.",
    sections: [
      {
        heading: "What prednisolone does",
        paragraphs: [
          "Steroid medicine is the main treatment for polymyalgia rheumatica, and a type called prednisolone is usually prescribed. It works by blocking the effects of certain chemicals that cause inflammation inside your body.",
          "It does not cure polymyalgia rheumatica, but it can help relieve the symptoms. Corticosteroids like prednisolone are not the same as anabolic steroids.",
        ],
      },
      {
        heading: "How quickly it works",
        paragraphs: [
          "Your symptoms should improve within a few days of starting treatment. They improve significantly within two weeks, and may almost disappear after four weeks.",
          "Symptoms can improve spectacularly once treatment starts. A rapid improvement with steroids is one of the things that helps confirm the diagnosis.",
        ],
      },
      {
        heading: "The starting dose",
        paragraphs: [
          "To start with, you may be prescribed a moderate dose. PMRGCAuk says the usual recommended starting dose is 15mg a day, which is then tapered down slowly with a view to stopping completely.",
          "It is the dose specialists have generally agreed as the lowest that gets the symptoms under control. Very large and very small people may need a bit more or a bit less.",
        ],
      },
      {
        heading: "How to take it",
        paragraphs: [
          "Most people take several tablets once a day. Unless your doctor or pharmacist says otherwise, it is best taken as a single dose with breakfast, so it does not upset your stomach and is less likely to affect your sleep.",
          "If you miss a dose, take it as soon as you remember. If you do not remember until the next day, skip the missed dose, and do not take a double dose to make up for it.",
        ],
      },
      {
        heading: "Things to know",
        paragraphs: [
          "Do not eat real liquorice while taking prednisolone. It is thought to increase the amount of prednisolone in the body.",
          "Do not suddenly stop taking steroid medicine unless your doctor tells you it is safe to stop. Stopping suddenly can make you very unwell.",
        ],
      },
    ],
    helps: [
      "Take prednisolone once a day with breakfast, unless your doctor or pharmacist says otherwise.",
      "If you forget doses often, set an alarm, or ask your pharmacist about other ways to remember.",
      "Do not eat real liquorice while taking prednisolone.",
      "Never stop taking steroids suddenly unless your doctor says it is safe to stop.",
      "Your doctor may recommend paracetamol for pain and stiffness while your dose is reduced, so discuss pain relief with them.",
    ],
    tryThisWeek: [
      "Take prednisolone with breakfast.",
      "Set an alarm for your daily dose.",
      "Avoid real liquorice.",
    ],
    ask: "What dose am I starting on, and how will we know it is working?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments with prednisolone",
      scenarios: [
        {
          id: "missed",
          situation: "At lunchtime you realise you missed this morning's dose.",
          options: [{ text: "Take it as soon as you remember", best: true }, { text: "Take two tomorrow instead" }],
          why: "If you miss a dose, take it as soon as you remember. Do not take a double dose to make up for a forgotten one.",
        },
        {
          id: "next-day",
          situation: "You only remember the missed dose the next morning.",
          options: [{ text: "Skip it and take today's dose as usual", best: true }, { text: "Take yesterday's and today's together" }],
          why: "If you do not remember until the following day, skip the missed dose and take the next one at the usual time.",
        },
        {
          id: "feel-better",
          situation: "You feel so much better that you want to stop the tablets.",
          options: [{ text: "Keep taking them and talk to your doctor", best: true }, { text: "Stop the tablets now" }],
          why: "Do not suddenly stop taking steroid medicine unless your doctor tells you it is safe to stop. Stopping suddenly can make you very unwell.",
        },
        {
          id: "liquorice",
          situation: "A friend offers you some real liquorice.",
          options: [{ text: "Say no, thank you", best: true }, { text: "Have some" }],
          why: "Do not eat real liquorice while taking prednisolone. It is thought to increase the amount of prednisolone in the body.",
        },
      ],
    },
    sources: [NHS_PMR_TREATMENT, AUK_PMR, NHS_PRED_HOW, NHS_PRED_QUESTIONS, PMRGCA_PMR, PMRGCA_FAQS, NHS_PRED_ABOUT, NHS_PMR_DIAGNOSIS],
    quiz: {
      question: "When is it usually best to take prednisolone?",
      options: [{ text: "Once a day, with breakfast", right: true }, { text: "Last thing at night" }, { text: "Only when the pain is bad" }],
      why: "Unless your doctor or pharmacist says otherwise, it is best taken as a single dose with breakfast, so it does not upset your stomach and is less likely to affect your sleep.",
    },
  },
  {
    id: "pmr-reducing",
    kicker: "Treatment",
    question: "How is the steroid dose reduced?",
    hook: "Slowly, in small steps, over a year or two. Going too fast can bring the symptoms back.",
    short: "After the first few weeks, the dose is usually reduced gradually, every 1 to 2 months if your symptoms are well controlled. Most people need treatment for 12 months to 2 years, and some need longer. Do not reduce or stop the dose yourself, because your body needs time to make its own steroid again.",
    sections: [
      {
        heading: "When reducing starts",
        paragraphs: [
          "After two to four weeks, your doctor will gradually reduce the dose of steroids. The dose will usually be reduced every 1 to 2 months if you are responding well and your symptoms are well controlled.",
          "The reduction is made in stages, guided mainly by your symptoms and helped by repeated blood tests that look for inflammation.",
        ],
      },
      {
        heading: "How long it takes",
        paragraphs: [
          "Most people need a course of steroid treatment lasting 12 months to 2 years to stop their symptoms returning. You will probably need to keep taking a low dose for about 2 years.",
          "It takes some people about 2 years to come off steroids, and others longer. PMRGCAuk says research shows that 25% of people with polymyalgia rheumatica are still on steroids after 4 years.",
        ],
      },
      {
        heading: "Small steps",
        paragraphs: [
          "Guidelines say you should have a treatment plan tailored to you. It should include your starting dose and a schedule for when, and by how much, the dose will ideally be reduced.",
          "PMRGCAuk says that, in its experience, once you get to about 10mg, tapering should be very gentle, no more than 1 to 2mg at a time. People who reduce too rapidly may experience flares.",
        ],
      },
      {
        heading: "Some aches are expected",
        paragraphs: [
          "It is not unusual for some pains to return as the dose comes down. Often this is the natural wear and tear of joints, which the steroids had been masking, and it does not need treating with steroids.",
          "A return of symptoms when you drop your dose does not necessarily mean you have dropped it too far. Give it a few days, notice how your body reacts, and discuss it with your doctor.",
        ],
      },
      {
        heading: "Why not to stop suddenly",
        paragraphs: [
          "Your body stops producing its own steroid, called cortisol, while you take steroid tablets. It needs time to make it normally again when the medicine is reduced or stopped.",
          "Stopping suddenly can cause withdrawal symptoms such as severe tiredness, weakness, body aches and joint pain. Do not stop taking prednisolone without talking to your doctor.",
        ],
      },
    ],
    helps: [
      "Agree a tapering plan that is tailored to you with your rheumatologist.",
      "Keep a diary of your symptoms, to help with decisions about tapering.",
      "If aches return after a dose drop, give it a few days and discuss it with your doctor.",
      "Do not stop or change your dose unless your doctor advises it, even if you feel completely well.",
      "Contact a GP if your symptoms return during any part of your treatment.",
    ],
    tryThisWeek: [
      "Agree a tapering plan with your doctor.",
      "Keep a diary of your symptoms.",
      "Give a dose drop a few days.",
    ],
    ask: "What is my tapering plan, and what should I do if symptoms return after a reduction?",
    interactive: {
      kind: "timeline",
      title: "A typical course of prednisolone",
      steps: [
        { id: "start", when: "The first few days", title: "Starting treatment", points: ["Often a moderate starting dose", "Symptoms should improve within a few days"] },
        { id: "settle", when: "2 to 4 weeks", title: "Symptoms settle", points: ["Symptoms may almost disappear by four weeks", "Your doctor starts to reduce the dose"] },
        { id: "reduce", when: "Every 1 to 2 months", title: "Reducing in stages", points: ["If your symptoms stay well controlled", "Guided by symptoms and blood tests"] },
        { id: "gentle", when: "From about 10mg", title: "Very gentle steps", points: ["No more than 1 to 2mg at a time, says PMRGCAuk", "Give each drop a few days"] },
        { id: "finish", when: "12 months to 2 years", title: "Coming off", points: ["Most people need treatment this long", "Some need longer, or a long-term low dose"] },
      ],
    },
    sources: [NHS_PMR_TREATMENT, AUK_PMR, PMRGCA_FAQS, PMRGCA_PMR, NHS_PRED_HOW, NHS_STEROIDS, NHS_PMR, PMRGCA_LIVING],
    quiz: {
      question: "Why should steroids not be stopped suddenly?",
      options: [{ text: "Your body needs time to make its own cortisol again", right: true }, { text: "The tablets stop working if you pause them" }, { text: "It makes the next tablets stronger" }],
      why: "Your body stops producing its own steroid, called cortisol, while you take steroid tablets. It needs time to make it normally again when the medicine is reduced or stopped.",
    },
  },
  {
    id: "pmr-side-effects",
    kicker: "Side effects",
    question: "What side effects can steroids cause, and how are they managed?",
    hook: "Weight gain, mood changes, thinner bones and higher blood sugar are the ones to know about.",
    short: "The higher the dose and the longer you take prednisolone, the greater the chance of side effects. Common ones include weight gain, indigestion and trouble sleeping. Over months it can thin the bones, raise blood sugar and blood pressure, and affect the eyes, so regular checks are part of treatment. The risk should improve as the dose comes down.",
    sections: [
      {
        heading: "Dose and time matter",
        paragraphs: [
          "The higher the dose of prednisolone and the longer you take it, the greater the chance of side effects. The risk of these side effects should improve as your dose is reduced.",
          "Common side effects include an increased appetite that often leads to weight gain, indigestion, problems sleeping, sweating a lot and mild mood changes.",
        ],
      },
      {
        heading: "Mood changes",
        paragraphs: [
          "About 1 in 20 people experience changes in their mental state when they take prednisolone. You may feel depressed, or have mood changes such as becoming anxious, confused or irritable with people.",
          "Contact a GP as soon as possible if you notice changes to your mental state. Call 999 or go to A&E if you have thoughts about harming yourself or ending your life.",
        ],
      },
      {
        heading: "Bones, blood sugar and eyes",
        paragraphs: [
          "Taking prednisolone for a long time can lead to thinner bones (osteoporosis), poorly controlled diabetes, eyesight problems and high blood pressure. Steroids can sometimes cause diabetes or raised blood sugar in people who did not have it before.",
          "Your doctor may want to check your blood pressure, blood sugar and cholesterol, and you may be asked to have a bone density scan. If you have diabetes, you may need to check your blood glucose more often.",
          "To reduce the chances of eyesight problems, visit an optometrist every 12 months to check for high pressure in your eye (glaucoma) and cataracts.",
        ],
      },
      {
        heading: "Infections",
        paragraphs: [
          "Prednisolone increases the risk of infection, particularly with the virus that causes chickenpox and shingles. Get immediate medical advice if you think you have been exposed to it, or someone in your household develops chickenpox or shingles.",
          "Live vaccines are not suitable while you take prednisolone. Non-live versions of vaccines, including flu and shingles, are safe to have.",
        ],
      },
      {
        heading: "Managing them",
        paragraphs: [
          "Try to eat well without increasing your portion sizes, and exercise regularly to help keep your weight stable. Taking prednisolone with food, in the morning, can help with indigestion and sleep.",
          "Do not skip meals or crash diet to deal with weight gain from steroids. Your doctor may also suggest a medicine to protect your stomach.",
        ],
      },
    ],
    helps: [
      "Take prednisolone with food in the morning, to protect your stomach and your sleep.",
      "Eat well without increasing your portion sizes, and exercise regularly.",
      "Go for regular checks of your blood sugar and blood pressure.",
      "Visit an optometrist every 12 months to check for glaucoma and cataracts.",
      "Tell your doctor straight away if you come into contact with measles, chickenpox or shingles.",
      "Report any suspected side effect using the Yellow Card safety scheme.",
    ],
    tryThisWeek: [
      "Take your tablets with breakfast.",
      "Book an eye check with an optometrist.",
      "Ask about blood sugar and blood pressure checks.",
    ],
    ask: "Which side effects should I watch for, and how often will my blood sugar, blood pressure and bones be checked?",
    interactive: {
      kind: "signs",
      title: "Side effects to report",
      intro: "Tick any you have noticed. Call a doctor or NHS 111 straight away about these.",
      signs: ["A high temperature or feeling shivery", "A wound that will not heal", "Very thirsty and peeing more often", "Breath that smells like fruit", "A puffy, rounded face", "Muscle weakness or cramps", "Changes in your eyesight", "Swelling in your arms or legs", "Unusual bruising or bleeding", "Feeling low, anxious or confused"],
      after: "Call a doctor or call 111 straight away about these. Call 999 or go to A&E if you are vomiting blood, or have thoughts about harming yourself or ending your life.",
      copyHeading: "Side effects to tell my doctor",
    },
    sources: [NHS_PMR_TREATMENT, NHS_PRED_SIDE, NHS_PRED_QUESTIONS, AUK_PMR, PMRGCA_FAQS, AUK_STEROIDS, NHS_STEROIDS, PMRGCA_EXERCISE],
    quiz: {
      question: "What makes side effects from prednisolone more likely?",
      options: [{ text: "A higher dose, taken for longer", right: true }, { text: "Taking it with breakfast" }, { text: "Staying active" }],
      why: "The higher the dose of prednisolone and the longer you take it, the greater the chance of side effects.",
    },
  },
  {
    id: "pmr-relapse",
    kicker: "Flares",
    question: "What happens if my symptoms come back?",
    hook: "A relapse is common and treatable. Contact your GP, and do not change your dose on your own.",
    short: "Polymyalgia rheumatica can come back as the dose is reduced or after treatment stops. This is called a relapse. Contact a GP if your symptoms return, as your dose may need adjusting for a while. Not every ache is a relapse, so it should be properly assessed.",
    sections: [
      {
        heading: "What a relapse is",
        paragraphs: [
          "Polymyalgia rheumatica often improves on its own after about 2 years of treatment. However, there is a chance it will return after treatment stops, and this is known as a relapse.",
          "Symptoms may also return when the dose is reduced. If they do, your doctor may increase the dose for a short time, possibly several weeks, and then try to reduce it again.",
        ],
      },
      {
        heading: "Contact your GP",
        paragraphs: [
          "Contact a GP if your symptoms return during any part of your treatment, as your dosage may need to be adjusted. Do not change your dose unless your doctor advises it, even if you feel completely well.",
          "PMRGCAuk says every relapse that needs a rise in prednisolone should be formally diagnosed, with assessment from a rheumatologist, and the tapering plan will need to change.",
          "Follow-up appointments are usually every few weeks for the first 3 months, and then at least every 3 months during the first year. They check how you are responding and whether your dose needs adjusting.",
        ],
      },
      {
        heading: "Not every ache is a relapse",
        paragraphs: [
          "Steroids may have masked the natural aches and stiffness of getting older, so some pains can return as the dose comes down. This usually gets better as the body adjusts.",
          "In some people, the body's own steroid production stops and causes symptoms very like polymyalgia rheumatica. When a relapse is suspected, your doctor may run tests to check your natural cortisol is normal.",
        ],
      },
      {
        heading: "Other treatment options",
        paragraphs: [
          "Some people are prescribed an immunosuppressant medicine, such as methotrexate. It may help people who have frequent relapses or who do not respond to normal steroid treatment.",
          "These medicines, called DMARDs, allow a lower dose of steroid to be used. You may need to see a specialist to be prescribed one, and you will need regular check-ups and blood tests.",
        ],
      },
      {
        heading: "Keep giant cell arteritis in mind",
        paragraphs: [
          "Talk to your GP about a rheumatology referral if your polymyalgia rheumatica keeps relapsing as you reduce your steroids, or is not responding as it should. If your treatment is not working as expected, do not wait for your next routine appointment to mention it.",
          "Contact a GP or call NHS 111 immediately if you get a new headache, pain in your jaw or tongue when eating or talking, or problems with your sight.",
        ],
      },
    ],
    helps: [
      "Contact a GP if your symptoms return during any part of your treatment.",
      "Do not change your steroid dose unless your doctor advises it.",
      "If aches return after a dose drop, give it a few days and discuss how your body reacts with your doctor.",
      "Talk to your GP about a rheumatology referral if your symptoms keep coming back as the dose is reduced.",
      "Paracetamol for a few days, if you can take it, may be better than putting your steroid dose back up, but discuss pain relief with your doctor.",
    ],
    tryThisWeek: [
      "Call your GP if symptoms return.",
      "Keep to your dose as prescribed.",
      "Ask about a rheumatology referral.",
    ],
    ask: "If my symptoms come back, how will we tell whether it is a relapse, and what is the plan?",
    interactive: {
      kind: "scenarios",
      title: "Is it a relapse?",
      scenarios: [
        {
          id: "after-drop",
          situation: "Some aches come back two days after a dose reduction.",
          options: [{ text: "Give it a few days and talk to your doctor", best: true }, { text: "Go back to your old dose yourself" }],
          why: "A return of symptoms when you drop your dose does not necessarily mean you have dropped it too far. Give it a few days and discuss it with your doctor.",
        },
        {
          id: "all-back",
          situation: "Your shoulder and hip stiffness is back, as bad as before.",
          options: [{ text: "Contact a GP", best: true }, { text: "Double your tablets" }, { text: "Stop the tablets" }],
          why: "Contact a GP if your symptoms return during any part of your treatment. Your dosage may need to be adjusted.",
        },
        {
          id: "headache",
          situation: "A new headache starts along with the stiffness.",
          options: [{ text: "Contact a GP or NHS 111 immediately", best: true }, { text: "Wait for your next review" }],
          why: "A new headache may mean giant cell arteritis. Contact a GP or call NHS 111 immediately.",
        },
      ],
    },
    sources: [NHS_PMR_TREATMENT, AUK_PMR, PMRGCA_FAQS, PMRGCA_PMR, PMRGCA_ALSO_GCA, NHS_PMR_SYMPTOMS],
    quiz: {
      question: "What should you do if your symptoms return during treatment?",
      options: [{ text: "Contact a GP", right: true }, { text: "Stop your tablets" }, { text: "Double your dose" }],
      why: "Contact a GP if your symptoms return during any part of your treatment, as your dosage may need to be adjusted.",
    },
  },
  {
    id: "pmr-steroid-card",
    kicker: "Safety",
    question: "Why carry a steroid card?",
    hook: "If you are ill, injured or need an operation, the card tells doctors you are taking steroids.",
    short: "If you take steroids for longer than 3 weeks, or on a high dose, you should be given a steroid card. It shows that you regularly take steroids and that your dose should not be stopped suddenly. Carry it at all times, and show it to any doctor, dentist or other professional treating you.",
    sections: [
      {
        heading: "Who gets one",
        paragraphs: [
          "If you need to take steroids for longer than 3 weeks or you have been prescribed a high dose, your GP or pharmacist should arrange for you to be given a steroid card.",
          "For prednisolone, a high dose means more than 40mg a day. Steroid cards are also available from most pharmacies.",
        ],
      },
      {
        heading: "What it says",
        paragraphs: [
          "The card explains that you are regularly taking steroids and your dose should not be stopped suddenly. It shows what dose you are on and how long you have been taking it.",
          "The blue steroid treatment card is the size of a credit card. It tells you how to reduce the risk of side effects, and gives details of your doctor, your dose and how long the treatment will last.",
          "Make sure any change to your dose is updated on the card.",
        ],
      },
      {
        heading: "The red emergency card",
        paragraphs: [
          "Taking steroid medicines can mean your adrenal glands do not make as much of some hormones your body needs, such as cortisol. This is known as adrenal insufficiency.",
          "Your doctor or pharmacist will assess your risk, and may recommend that you also carry a steroid emergency card, which is red. Ask your pharmacist or doctor about both cards.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Steroid treatment can stop the body producing natural hormones, which can be dangerous if you get ill, have an accident or need an operation. Keeping the card with you helps any other doctor who treats you to manage your care correctly.",
          "If you are rushed to hospital in an emergency, doctors there need to know you are on steroids, because steroids can affect the body's response to an injury.",
        ],
      },
      {
        heading: "When to show it",
        paragraphs: [
          "Carry the card with you at all times. If you have the emergency card, show it if you need medical or dental treatment, or surgery, so the team know you are on steroids and can give you extra steroids if needed.",
          "It also helps if you see another doctor while you are away from home. Depending on the treatment you need, your steroid dose may need to be adjusted.",
        ],
      },
    ],
    helps: [
      "Ask your GP or pharmacist for a steroid card if you take steroids for longer than 3 weeks or at a high dose.",
      "Carry the card with you at all times.",
      "Show the card to any doctor, dentist or surgeon who treats you.",
      "Ask your pharmacist or doctor whether you also need the red steroid emergency card.",
      "Make sure any change to your dose is updated on the card.",
    ],
    tryThisWeek: [
      "Put your steroid card in your wallet.",
      "Ask about the red emergency card.",
      "Update the card when your dose changes.",
    ],
    ask: "Do I need the red steroid emergency card as well as the blue card?",
    interactive: {
      kind: "flip-cards",
      title: "Two steroid cards",
      intro: "Tap each card to see what it is for.",
      cards: [
        { id: "blue", front: "Blue steroid treatment card", when: "Over 3 weeks, or a high dose", back: "Shows your dose and how long treatment will last, and how to reduce the risk of side effects." },
        { id: "red", front: "Red steroid emergency card", when: "If your doctor or pharmacist advises it", back: "For a risk of adrenal insufficiency. Show it before medical or dental treatment, so extra steroids can be given." },
        { id: "show", front: "Showing your card", when: "Dentist, surgery, hospital or travel", back: "Tells the team you are on steroids. Your dose may need adjusting for the treatment you need." },
      ],
    },
    sources: [NHS_PMR_TREATMENT, NHS_PRED_QUESTIONS, NHS_PRED_ABOUT, AUK_PMR, AUK_STEROIDS, AUK_GCA],
    quiz: {
      question: "When should you be given a steroid card?",
      options: [{ text: "After 3 weeks on steroids, or on a high dose", right: true }, { text: "Only if you feel unwell" }, { text: "Only for steroid injections" }],
      why: "If you need to take steroids for longer than 3 weeks or you have been prescribed a high dose, your GP or pharmacist should arrange for you to be given a steroid card.",
    },
  },
  {
    id: "pmr-activity",
    kicker: "Activity",
    question: "How can I stay active with polymyalgia rheumatica?",
    hook: "Gentle, regular movement helps the stiffness. Think of half of what you used to do.",
    short: "Activity usually helps ease pain and stiffness, but too much can make symptoms worse, so the aim is a balance between rest and activity. Increase what you do gently, and ask a physiotherapist about stretching and strengthening exercises. Walking is usually the most suitable weight-bearing exercise.",
    sections: [
      {
        heading: "Finding the balance",
        paragraphs: [
          "You will need to find the right balance between rest and activity. Too much exercise is likely to make your symptoms worse, but activity usually helps ease pain and stiffness in the muscles of the shoulders, hips and thighs.",
          "Steroids can work so well that it is easy to go back to your old level of activity, but almost everyone who does this feels rough the next day. The PMRGCAuk helpline suggests thinking of your earlier level of activity, and then thinking of half of that.",
        ],
      },
      {
        heading: "Start gently",
        paragraphs: [
          "Increase your level of physical activity gently. It could be just walking around the house, and many people find swimming particularly good.",
          "A consultant physiotherapist on the PMRGCAuk advisory panel suggests thinking of exercise as a sequence: stretch, move, strengthen, balance and rest. Rest is the most important, so aim for the best sleep you can.",
          "If you walk, try a brisker pace for just a few minutes, to raise your heart rate.",
        ],
      },
      {
        heading: "Help from a physiotherapist",
        paragraphs: [
          "Physiotherapy, including range of movement exercises for the shoulders, can help reduce pain and maintain mobility. A physiotherapist can advise on stretching and strengthening exercises that improve mobility as you move towards recovery.",
          "In the early days, pressure or massage may feel unpleasant. Steroids can reduce your muscle mass, so some resistance exercise helps keep your muscles working.",
        ],
      },
      {
        heading: "Weight-bearing exercise for bones",
        paragraphs: [
          "Weight-bearing exercise is good for keeping bones strong and reducing the risk of osteoporosis. Walking is usually the most suitable weight-bearing exercise for people with polymyalgia rheumatica.",
          "Keeping as fit and active as you can may also help avoid the weight gain and muscle weakness that steroids can cause.",
        ],
      },
      {
        heading: "Everyday stiffness",
        paragraphs: [
          "Sitting for any length of time may cause stiffness. On a long journey, stop from time to time to stretch your shoulders, arms and legs.",
          "A hot bath or shower can help ease pain and stiffness, first thing in the morning or after exercise. Speak to a GP first if you have not exercised for some time, or if you have medical conditions or concerns.",
        ],
      },
    ],
    helps: [
      "Increase your activity gently, aiming for about half of what you did before.",
      "Ask a physiotherapist about stretching and strengthening exercises.",
      "Walk regularly, as walking is usually the most suitable weight-bearing exercise.",
      "On long journeys, stop from time to time to stretch your shoulders, arms and legs.",
      "Try a hot bath or shower first thing in the morning or after exercise.",
      "Speak to a GP first if you have not exercised for some time.",
    ],
    tryThisWeek: [
      "Do about half your old activity.",
      "Take a short daily walk.",
      "Stretch on long journeys.",
    ],
    ask: "Can I see a physiotherapist, and which exercises suit me now?",
    interactive: {
      kind: "scenarios",
      title: "Pacing yourself",
      scenarios: [
        {
          id: "golf",
          situation: "The steroids have worked, and you feel ready for a full round of golf.",
          options: [{ text: "Do about half of what you used to", best: true }, { text: "Go straight back to your old routine" }],
          why: "Almost everyone who goes back to their old level feels rough the next day. Think of your earlier level of activity, and then think of half of that.",
        },
        {
          id: "drive",
          situation: "You have a long drive ahead.",
          options: [{ text: "Stop from time to time to stretch", best: true }, { text: "Drive straight through" }],
          why: "Sitting for any length of time may cause stiffness. On a long journey, stop from time to time to stretch your shoulders, arms and legs.",
        },
        {
          id: "morning",
          situation: "You wake up stiff and sore.",
          options: [{ text: "Try a hot bath or shower", best: true }, { text: "Stay in bed all day" }],
          why: "A hot bath or shower can help ease pain and stiffness first thing in the morning, and activity usually helps ease stiffness.",
        },
      ],
    },
    sources: [AUK_PMR, PMRGCA_EXERCISE, PMRGCA_FAQS, NHS_ACTIVITY_OLDER, AUK_GCA],
    quiz: {
      question: "Which weight-bearing exercise is usually most suitable with polymyalgia rheumatica?",
      options: [{ text: "Walking", right: true }, { text: "Swimming" }, { text: "Heavy weightlifting" }],
      why: "Walking is usually the most suitable weight-bearing exercise for people with polymyalgia rheumatica.",
    },
  },
  {
    id: "pmr-bones",
    kicker: "Bones",
    question: "How can I protect my bones while taking steroids?",
    hook: "Steroid tablets can thin the bones. Calcium, vitamin D, walking and sometimes a bone medicine help.",
    short: "Steroid tablets can make bone break down faster than it is made, raising the risk of osteoporosis and broken bones, especially over more than three months. Your doctor may suggest a bone density scan, calcium and vitamin D, or a bone-strengthening medicine. Weight-bearing exercise, not smoking and keeping alcohol low also help.",
    sections: [
      {
        heading: "How steroids affect bone",
        paragraphs: [
          "Steroid medicines can cause bone to break down faster than it is made. This can weaken bones and make osteoporosis and broken bones more likely.",
          "This is most likely with a high dose, with steroid tablets, and with treatment lasting longer than three months. But not everyone gets weaker bones, and for most people the benefits of steroids outweigh any harm to their bones.",
        ],
      },
      {
        heading: "Checks and bone medicines",
        paragraphs: [
          "It is important to discuss your bone health with your doctor when you are first prescribed a steroid. You may be asked to have a bone density scan, called a DEXA or DXA scan, to check the strength of your bones.",
          "Medicines called bisphosphonates, such as alendronate and risedronate, can slow down or prevent bone loss and reduce the risk of hip and spine fractures. Arthritis UK says they are the nationally recommended treatment, and you can ask your doctor about them.",
          "Do not stop or reduce your steroids to protect your bones. Keep taking them until your doctor says it is safe to stop.",
        ],
      },
      {
        heading: "Calcium and vitamin D",
        paragraphs: [
          "Steroid treatment reduces the amount of calcium in the body. If you are on steroids, Arthritis UK recommends aiming for 700 to 1,200mg of calcium a day, and a pint of milk a day with other foods containing calcium should be enough.",
          "Calcium-rich foods include milk, cheese, yoghurt, leafy green vegetables, tofu and sardines eaten with their bones. Vitamin D helps the body absorb calcium, and the NHS suggests considering a daily supplement containing 10 micrograms.",
        ],
      },
      {
        heading: "Exercise and lifestyle",
        paragraphs: [
          "Regular physical activity, including weight-bearing exercise such as walking, helps keep bones strong. Try to keep a good posture and avoid trips and falls.",
          "Smoking or drinking a lot of alcohol increases your risk of osteoporosis. The NHS recommends not drinking more than 14 units of alcohol a week.",
        ],
      },
    ],
    helps: [
      "Discuss your bone health with your doctor when you start steroids.",
      "Ask your doctor about bone protection, such as bisphosphonates.",
      "Get enough calcium each day from foods such as milk, cheese and leafy greens.",
      "Consider a daily vitamin D supplement containing 10 micrograms.",
      "Walk regularly, and take care to avoid trips and falls.",
      "Avoid smoking, and keep alcohol to no more than 14 units a week.",
    ],
    tryThisWeek: [
      "Ask your doctor about bone protection.",
      "Add a calcium-rich food each day.",
      "Take a regular walk.",
    ],
    ask: "Do I need a bone density scan or a bone-protecting medicine while I am on steroids?",
    interactive: {
      kind: "risk-check",
      title: "What affects your bones on steroids?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "tablets", label: "Steroid tablets for over 3 months", note: "Bone loss is more likely with tablets taken for more than three months, or at a high dose.", changeable: false },
        { id: "age", label: "Being over 75", note: "Your doctor may advise a bone-strengthening medicine if you are older, usually over 75.", changeable: false },
        { id: "broken", label: "Having broken a bone easily", note: "If you have broken bones easily, your doctor may advise a bone-strengthening medicine.", changeable: false },
        { id: "smoking", label: "Smoking", note: "Smoking increases your risk of osteoporosis.", changeable: true },
        { id: "alcohol", label: "Drinking a lot of alcohol", note: "It raises the risk. The NHS recommends no more than 14 units a week.", changeable: true },
        { id: "calcium", label: "Too little calcium or vitamin D", note: "Steroids reduce calcium in the body. Calcium-rich foods and vitamin D help.", changeable: true },
        { id: "inactive", label: "Long periods of inactivity", note: "They raise the risk. Weight-bearing exercise such as walking helps keep bones strong.", changeable: true },
      ],
    },
    sources: [ROS_STEROIDS, AUK_PMR, NHS_OSTEO_PREVENTION, NHS_PRED_QUESTIONS, AUK_STEROIDS, AUK_BISPHOSPHONATES, NHS_OSTEO_CAUSES],
    quiz: {
      question: "Which medicines does Arthritis UK say are the nationally recommended treatment to protect bones on steroids?",
      options: [{ text: "Bisphosphonates", right: true }, { text: "Extra painkillers" }, { text: "A lower steroid dose chosen yourself" }],
      why: "Medicines called bisphosphonates, such as alendronate and risedronate, can slow down or prevent bone loss. Arthritis UK says they are the nationally recommended treatment.",
    },
  },
  {
    id: "pmr-daily-life",
    kicker: "Support",
    question: "How do I cope day to day, and where can I find support?",
    hook: "Few people have heard of PMR, so many feel alone. A helpline, local groups and an online forum can help.",
    short: "A diagnosis of polymyalgia rheumatica can be a shock, and few people have heard of it. PMRGCAuk runs a helpline staffed by volunteers with experience of the condition, local support groups and an online forum. Many people keep working, sometimes with changes to their working pattern, and Access to Work may help.",
    sections: [
      {
        heading: "A new diagnosis",
        paragraphs: [
          "Your diagnosis may be the first time you have faced the prospect of a long-term illness. As well as the shock of having something you had never heard of, you have to come to terms with taking medication for several months at least.",
          "Polymyalgia rheumatica is relatively unheard of, and people diagnosed usually know of no one else who has it. PMRGCAuk encourages people to be kind to themselves, because whatever caused it, there was nothing they could have done to avoid it.",
        ],
      },
      {
        heading: "Talking to someone",
        paragraphs: [
          "PMRGCAuk runs a telephone helpline, where volunteers with experience of polymyalgia rheumatica or giant cell arteritis can talk with you and offer support. You can call 0300 111 5090, Monday to Friday, from 9am to 5pm.",
          "The volunteers cannot give medical advice, and they always advise talking to your doctor. If your call is not answered, leave a short message with your contact details.",
        ],
      },
      {
        heading: "Groups and the forum",
        paragraphs: [
          "Local support groups are run by trained volunteers who have had the condition themselves. They offer a chance to share experiences, emotional support and practical tips, and some groups meet online.",
          "There is also a free online forum, HealthUnlocked, where you can share your journey and concerns with others going through the same. A free information pack, by post or download, includes guidelines and details of local groups and the helpline.",
        ],
      },
      {
        heading: "Work",
        paragraphs: [
          "Many people can carry on working, but it depends on the kind of work you do and the support your employer can give. You may need to change your working pattern, for instance going part-time for a while.",
          "In the early days it can be tempting to act as if nothing has happened, but this is not a good idea, and you may need sick leave to give your body time and rest. Access to Work can help you get or stay in work, with a grant towards things like specialist equipment, or the cost of travelling to work if you cannot use public transport.",
        ],
      },
      {
        heading: "Day to day",
        paragraphs: [
          "Sitting for any length of time may cause stiffness, making activities such as driving more difficult, so stop on long journeys to stretch. Prednisolone does not make you sleepy, but do not drive, cycle or use machinery if your eyesight is affected.",
          "Keeping a diary of your symptoms can help your doctor understand your progress. Do not put up with chronic pain in silence, and talk it over with your doctor.",
        ],
      },
    ],
    helps: [
      "Call the PMRGCAuk helpline on 0300 111 5090, Monday to Friday, 9am to 5pm.",
      "Find out whether there is a support group near you, in person or online.",
      "Join the HealthUnlocked forum to share your experiences with others.",
      "Send for an information pack, and share it with people close to you.",
      "Talk things over with occupational health or your union about work, if you can.",
      "Check whether Access to Work could help you stay in work.",
    ],
    tryThisWeek: [
      "Call the PMRGCAuk helpline.",
      "Look for a support group near you.",
      "Send for an information pack.",
    ],
    ask: "Who can I talk to about work and everyday life while I am on treatment?",
    interactive: {
      kind: "flip-cards",
      title: "Where to find support",
      intro: "Tap each card to see what it offers.",
      cards: [
        { id: "helpline", front: "Helpline: 0300 111 5090", when: "Monday to Friday, 9am to 5pm", back: "Volunteers with experience of PMR or GCA listen and offer support. They cannot give medical advice." },
        { id: "groups", front: "Local support groups", when: "Meeting regularly, some online", back: "Run by trained volunteers who have had the condition. Shared experiences, reassurance and practical tips." },
        { id: "forum", front: "HealthUnlocked forum", when: "Online and free", back: "Share your journey, your concerns and experiences with others going through the same." },
        { id: "pack", front: "Information pack", when: "By post or download", back: "Guidelines, local groups, the helpline and more. Share it with people close to you." },
        { id: "atw", front: "Access to Work", when: "If your condition affects your job", back: "A grant towards practical support, like specialist equipment, or travel to work if you cannot use public transport." },
      ],
    },
    sources: [PMRGCA_LIVING, PMRGCA_HELPLINE, PMRGCA_GROUPS, PMRGCA_FORUM, PMRGCA_FAQS, GOV_ATW, AUK_PMR, PMRGCA_INFO_PACK, NHS_PRED_QUESTIONS, PMRGCA_SUPPORT],
    quiz: {
      question: "Who answers the PMRGCAuk helpline?",
      options: [{ text: "Volunteers with experience of PMR or GCA", right: true }, { text: "Doctors who can change your dose" }, { text: "A pharmacy ordering service" }],
      why: "PMRGCAuk runs a telephone helpline, where volunteers with experience of polymyalgia rheumatica or giant cell arteritis can talk with you and offer support.",
    },
  },
];
