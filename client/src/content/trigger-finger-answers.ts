import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Trigger finger page's pieces (content/library-conditions/body-more.ts). Every
// sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (the trigger finger,
// finger pain and hydrocortisone injection pages), Arthritis UK (the charity formerly called Versus Arthritis), the
// British Society for Surgery of the Hand, nidirect (Northern Ireland's official health information, adapted from
// the NHS website), and NHS hospital patient leaflets from Gateshead, Gloucestershire and North Tees and Hartlepool,
// with NHS Greater Glasgow and Clyde's guidance for clinicians. The Chartered Society of Physiotherapy's site was
// unavailable (503) when checked, so it is not used. Exercises are described only as the sources describe them.
// General information only; it never replaces what a person's own GP, hand therapist or surgeon tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const au = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_TF = nhs("Trigger finger", "conditions/trigger-finger/");
const NHS_FINGER = nhs("Finger pain", "symptoms/hand-pain/finger-pain/");
const NHS_PALM = nhs("Pain in the palm of the hand", "symptoms/hand-pain/pain-in-the-palm-of-the-hand/");
const NHS_RSI = nhs("Repetitive strain injury (RSI)", "conditions/repetitive-strain-injury-rsi/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_HC_ABOUT = nhs("About hydrocortisone injections", "medicines/hydrocortisone-injections/about-hydrocortisone-injections/");
const NHS_HC_WHO = nhs("Who can and cannot have hydrocortisone injections", "medicines/hydrocortisone-injections/who-can-and-cannot-have-hydrocortisone-injections/");
const NHS_HC_HOW = nhs("How and when to have hydrocortisone injections", "medicines/hydrocortisone-injections/how-and-when-to-have-hydrocortisone-injections/");
const NHS_HC_SIDE = nhs("Side effects of hydrocortisone injections", "medicines/hydrocortisone-injections/side-effects-of-hydrocortisone-injections/");
const NHS_HC_QUESTIONS = nhs("Common questions about hydrocortisone injections", "medicines/hydrocortisone-injections/common-questions-about-hydrocortisone-injections/");

const AU_HAND = au("Hand and wrist pain", "understanding-arthritis/conditions/hand-and-wrist-pain/");
const AU_EX_HAND = au("Exercises for the fingers, hands and wrists", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-fingers-hands-and-wrists/");

const NIDIRECT: LearnSource = { label: "nidirect (Northern Ireland): Trigger finger", url: "https://www.nidirect.gov.uk/conditions/trigger-finger" };
const BSSH: LearnSource = { label: "British Society for Surgery of the Hand: Trigger finger/thumb", url: "https://www.bssh.ac.uk/patients/conditions/18/trigger_fingerthumb" };
const GATESHEAD: LearnSource = { label: "Gateshead Health NHS Foundation Trust: Trigger finger/thumb release surgery", url: "https://www.gatesheadhealth.nhs.uk/resources/trigger-finger-thumb-release-surgery/" };
const GLOS: LearnSource = { label: "Gloucestershire Hospitals NHS Foundation Trust: Having a trigger finger release", url: "https://www.gloshospitals.nhs.uk/our-services/services-we-offer/trauma-orthopaedics/hand-clinic/having-an-operation/having-a-trigger-finger-release/" };
const NTH: LearnSource = { label: "North Tees and Hartlepool NHS Foundation Trust: Hand therapy, trigger finger", url: "https://www.nth.nhs.uk/resources/hand-therapy-trigger-finger/" };
const GGC: LearnSource = { label: "NHS Greater Glasgow and Clyde (Right Decision Service): Trigger finger", url: "https://www.rightdecisions.scot.nhs.uk/ggc-msk-index/hand/trigger-finger" };

const GOV_ACCESS = gov("Access to Work", "access-to-work");
const GOV_ADJUSTMENTS = gov("Reasonable adjustments for workers with disabilities or health conditions", "reasonable-adjustments-for-disabled-workers");

export const triggerFingerAnswers: LearnArticle[] = [
  {
    id: "trf-what-it-is",
    kicker: "Understanding",
    question: "What is trigger finger?",
    hook: "A finger that sticks when it bends, then snaps straight. The cause is a tendon that catches in its tunnel.",
    short: "Trigger finger is where a finger or thumb gets stuck in a bent position, then clicks or pops as it straightens. It happens when a tendon in the finger thickens and catches as it slides through its tunnel. It can get better on its own, but sometimes needs treatment.",
    sections: [
      {
        heading: "A finger that sticks",
        paragraphs: [
          "Trigger finger is where your finger or thumb gets stuck in a bent position. It can get better on its own, but sometimes may need treatment.",
          "It is a painful condition in which a finger or thumb clicks or locks as it is bent towards the palm. If it gets worse, the finger may get stuck in a bent position and then suddenly pop straight.",
        ],
      },
      {
        heading: "Tendons and their tunnels",
        paragraphs: [
          "Muscles are attached to bones by tendons. These are small but very tough pieces of connective tissue.",
          "The tendons in your fingers and thumb are covered by a protective sheath. They usually glide freely through tight tunnels called pulleys, and the A1 pulley is in the palm near the base of the finger or thumb.",
        ],
      },
      {
        heading: "Where the catch happens",
        paragraphs: [
          "It happens when a tendon inside your finger or thumb becomes thickened. This can stop the tendon from moving normally, and can cause it to get trapped when you bend your fingers.",
          "Swelling can make the tendon bunch up to form a small lump, called a nodule. The British Society for Surgery of the Hand describes thickening at the mouth of the tendon tunnel, which roughens the tendon so that it catches there.",
        ],
      },
      {
        heading: "Which fingers",
        paragraphs: [
          "It most often affects the thumb or the ring finger, but it can affect any finger. More than one finger can be affected at the same time, and it can develop in both hands.",
          "Around 2 to 3% of people develop trigger finger.",
        ],
      },
      {
        heading: "Not usually harmful",
        paragraphs: [
          "Trigger finger and trigger thumb are not harmful, but they can be a really painful nuisance. Some mild cases recover over a few weeks without treatment.",
          "If it does not get better on its own and is not treated, it is possible for an affected finger or thumb to become permanently bent. Treatment can include a splint, steroid injections and, if other treatments have not worked, surgery.",
        ],
      },
    ],
    helps: [
      "Avoid or reduce activities that make your symptoms worse, until your symptoms improve.",
      "Take painkillers such as ibuprofen to help with pain.",
      "See a GP if your symptoms do not get better, or if they stop you doing your usual daily activities.",
      "In many areas, you may be able to refer yourself to NHS community musculoskeletal services without seeing a GP.",
    ],
    tryThisWeek: [
      "Cut back on what makes it worse.",
      "Ease the pain with ibuprofen.",
      "See a GP if it is not improving.",
    ],
    ask: "Is this trigger finger, and does it need treating or could it settle on its own?",
    interactive: {
      kind: "flip-cards",
      title: "Inside a trigger finger",
      intro: "Turn each card to see what each part does.",
      cards: [
        { id: "tendon", front: "Tendon", when: "Connects muscle to bone", back: "Small but very tough connective tissue. In trigger finger it thickens and can get trapped when you bend your fingers." },
        { id: "sheath", front: "Tendon sheath", when: "A protective covering", back: "Covers the tendons in the fingers and thumb. Swelling in it means the tendon can no longer slide easily." },
        { id: "pulley", front: "A1 pulley", when: "In the palm, near the base of the finger", back: "One of the tight tunnels the tendon glides through. This is where the tendon catches." },
        { id: "nodule", front: "Nodule", when: "A small lump", back: "Swelling can make the tendon bunch up into a small lump, which catches on the pulley." },
      ],
    },
    sources: [NHS_TF, AU_HAND, NIDIRECT, BSSH, GATESHEAD],
    quiz: {
      question: "What happens to the tendon in trigger finger?",
      options: [{ text: "It thickens and gets trapped when the finger bends", right: true }, { text: "It snaps in two" }, { text: "It squeezes a nerve" }],
      why: "It happens when a tendon inside your finger or thumb becomes thickened. This can stop the tendon from moving normally, and can cause it to get trapped when you bend your fingers.",
    },
  },
  {
    id: "trf-symptoms",
    kicker: "Symptoms",
    question: "What does trigger finger feel like: catching, clicking and locking?",
    hook: "A click on the way out, pain at the base of the finger, and mornings that are the worst.",
    short: "The main symptom is a finger or thumb that gets stuck bent, then clicks or pops as it straightens. There may be pain in the palm at the base of the finger, stiffness, and a small bump, and it is often worse in the morning. A finger locked bent that you cannot open needs an urgent review.",
    sections: [
      {
        heading: "Stuck, then a click",
        paragraphs: [
          "The main symptom of trigger finger is your finger or thumb getting stuck in a bent position, and feeling a clicking or popping when it straightens.",
          "You might need to use your other hand to straighten it. Very occasionally, a finger may become too painful to straighten and may stay stuck in the same position.",
        ],
      },
      {
        heading: "Pain, stiffness and a lump",
        paragraphs: [
          "Other symptoms may include pain in your finger, thumb or the palm of your hand, and stiffness in the affected finger or thumb.",
          "The pain is usually in the palm, below the base of the finger or thumb that is triggering. It may be tender if you press there, and you may feel a bump where the tendon is catching.",
          "In trigger thumb, stiffness can reduce movement at the end joint.",
        ],
      },
      {
        heading: "Often worse in the morning",
        paragraphs: [
          "Your symptoms may be worse in the morning, and when doing activities using your hands, such as preparing food, using tools or playing sport.",
          "The clicking or locking is often worse on waking. If the condition gets worse, the finger may get stuck bent and then suddenly pop straight, and eventually it may not fully bend or straighten.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "See a GP if you think you have trigger finger and your symptoms do not get better, or if they stop you doing your usual daily activities.",
          "The NHS also advises seeing a GP about finger pain if it keeps coming back, if your hand is tingling or starting to feel numb, or if you have diabetes, as hand problems can be more serious with diabetes.",
        ],
      },
      {
        heading: "When it is more urgent",
        paragraphs: [
          "In more severe cases the finger may become locked in a bent position so that you cannot open it. Gateshead Health's leaflet says this needs an urgent review by the medical team.",
          "Contact NHS 111 if you have finger pain that is severe, you cannot move your finger or hold things, your finger has changed shape or colour, or you also have a very high temperature.",
        ],
      },
    ],
    helps: [
      "See a GP if your symptoms do not get better or stop you doing your usual daily activities.",
      "See a GP if you have tingling or numbness in your hand, or if you have diabetes.",
      "Get an urgent review if your finger is locked bent and you cannot open it.",
      "Contact NHS 111 if the pain is severe or you cannot move your finger or hold things.",
    ],
    tryThisWeek: [
      "See a GP if it is not improving.",
      "Mention tingling, numbness or diabetes.",
      "Get urgent help if it locks bent.",
    ],
    ask: "Do my symptoms sound like trigger finger, and what should make me come back sooner?",
    interactive: {
      kind: "signs",
      title: "What to tell the GP",
      intro: "Tick what you have noticed, to take to your appointment.",
      signs: [
        "My finger or thumb gets stuck bent",
        "A click or pop when it straightens",
        "Pain in my palm at the base of the finger",
        "Stiffness in the finger or thumb",
        "I need my other hand to straighten it",
        "A small bump in my palm",
        "It is worse in the morning",
        "Tingling or numbness in my hand",
      ],
      after: "If your finger is locked bent and you cannot open it, it needs an urgent review. Contact NHS 111 if the pain is severe or you cannot move your finger or hold things.",
      copyHeading: "My finger symptoms",
    },
    sources: [NHS_TF, AU_HAND, BSSH, NIDIRECT, GATESHEAD, NHS_FINGER],
    quiz: {
      question: "When are trigger finger symptoms often worse?",
      options: [{ text: "In the morning", right: true }, { text: "Only at night" }, { text: "Only in hot weather" }],
      why: "Your symptoms may be worse in the morning, and when doing activities using your hands, such as preparing food, using tools or playing sport.",
    },
  },
  {
    id: "trf-who",
    kicker: "Risk",
    question: "Who gets trigger finger, and why me?",
    hook: "Often there is no clear reason. But age, being a woman and some health conditions make it more likely.",
    short: "It is not always known what causes trigger finger. You may be more likely to get it if you are over 40, a woman, or have diabetes or rheumatoid arthritis. Hand use at work, at home or at sport can make the pain worse, though there is little evidence that work causes it.",
    sections: [
      {
        heading: "Often no clear reason",
        paragraphs: [
          "It is not always known what causes trigger finger, but sometimes it may be caused by an injury.",
          "Trigger finger can happen to otherwise healthy people for no clear reason.",
        ],
      },
      {
        heading: "Age and sex",
        paragraphs: [
          "You may be more likely to get it if you are aged over 40. It is more common in women.",
          "Arthritis UK says it is more common among women over the age of 40.",
        ],
      },
      {
        heading: "Other health conditions",
        paragraphs: [
          "You may be more likely to get it if you have diabetes or rheumatoid arthritis. Arthritis UK adds gout and an underactive thyroid as conditions that may increase the risk.",
          "Dupuytren's contracture, where tissue in the palm thickens and bends one or more fingers into the palm, can also increase your risk.",
          "In people known to have rheumatoid arthritis, triggering is sometimes due to tendon nodules. It is not caused by osteoarthritis.",
        ],
      },
      {
        heading: "Injury and hand use",
        paragraphs: [
          "It is more likely if you have had a previous injury to the palm of the hand. Triggering occasionally seems to start after an injury such as a knock on the hand.",
          "The British Society for Surgery of the Hand says there is little evidence that it is caused by work activities, but the pain can certainly be made worse by hand use at work, at home, in the garden or at sport. Gateshead Health lists manual work that uses the hands forcefully as one factor that makes it more likely.",
        ],
      },
      {
        heading: "In young children",
        paragraphs: [
          "Trigger finger is less common in children than in adults, but sometimes young children aged between six months and two years develop it. It is rarely painful and usually gets better without treatment.",
        ],
      },
    ],
    helps: [
      "Avoid or reduce activities that make your symptoms worse, until your symptoms improve.",
      "Avoid activities that cause pain, if possible.",
      "See a GP if your symptoms do not get better.",
    ],
    tryThisWeek: [
      "Cut back on what makes it worse.",
      "Avoid what causes pain, if you can.",
      "See a GP if it is not improving.",
    ],
    ask: "Could a condition like diabetes or arthritis be behind my trigger finger?",
    interactive: {
      kind: "risk-check",
      title: "What makes it more likely?",
      intro: "Tick any that apply. Most cannot be changed, and it can also happen for no clear reason.",
      items: [
        { id: "over-40", label: "Being over 40", note: "You may be more likely to get trigger finger if you are aged over 40.", changeable: false },
        { id: "woman", label: "Being a woman", note: "It is more common in women.", changeable: false },
        { id: "diabetes", label: "Diabetes", note: "People with insulin-dependent diabetes are especially prone, but most trigger fingers happen in people without diabetes.", changeable: false },
        { id: "ra", label: "Rheumatoid arthritis", note: "Triggering is sometimes due to tendon nodules in people with rheumatoid arthritis.", changeable: false },
        { id: "gout-thyroid", label: "Gout or an underactive thyroid", note: "Arthritis UK says these may also increase the risk.", changeable: false },
        { id: "dupuytren", label: "Dupuytren's contracture", note: "This hand condition can also increase your risk.", changeable: false },
        { id: "injury", label: "An earlier injury to the palm", note: "It is more likely if you have had a previous injury to the palm of the hand.", changeable: false },
        { id: "hand-use", label: "Forceful hand use", note: "Little evidence it causes it, but hand use can make the pain worse. Avoiding activities that cause pain may help.", changeable: true },
      ],
    },
    sources: [NHS_TF, AU_HAND, NIDIRECT, BSSH, GATESHEAD],
    quiz: {
      question: "Which condition makes trigger finger more likely, according to the NHS?",
      options: [{ text: "Diabetes", right: true }, { text: "Osteoarthritis" }, { text: "Asthma" }],
      why: "You may be more likely to get it if you have diabetes or rheumatoid arthritis.",
    },
  },
  {
    id: "trf-diagnosis",
    kicker: "Diagnosis",
    question: "How is trigger finger diagnosed?",
    hook: "No scanner needed, usually. A look at your hand, a press on the palm, and a watch as the finger bends.",
    short: "Trigger finger is usually diagnosed from your symptoms and an examination of your hand. The doctor may press along the tendon in the palm and watch the finger move. Other conditions can cause finger pain, so it is best not to diagnose it yourself.",
    sections: [
      {
        heading: "An examination, usually",
        paragraphs: [
          "See your GP if you think you may have trigger finger. They will examine your hand and advise you about treatments.",
          "Guidance for NHS clinicians in Greater Glasgow and Clyde says the diagnosis is first made from your symptoms and a physical examination.",
        ],
      },
      {
        heading: "What the doctor looks for",
        paragraphs: [
          "To diagnose a hand problem, a doctor, or possibly a specialised physiotherapist, will want to hear what symptoms you have had and how long you have had them. They will examine your hand and may check range of movement, feeling and strength.",
          "Pressing along the tendon in the palm may show tenderness, swelling or a small lump. A grinding feeling or swelling may be felt as the finger moves, and the triggering may happen during the examination.",
        ],
      },
      {
        heading: "Tests are sometimes used",
        paragraphs: [
          "For hand and wrist problems in general, you might be asked to have blood tests to look for inflammation. X-rays, ultrasound, CT and MRI scans are sometimes used to look more closely inside the hand and wrist.",
        ],
      },
      {
        heading: "Other causes of finger pain",
        paragraphs: [
          "Do not try to diagnose the cause of your finger pain yourself. There are lots of possible causes.",
          "The NHS links pain or tenderness in the palm at the base of a finger, stiffness and clicking with trigger finger. An ache, numbness, tingling or weakness in the fingers points more to carpal tunnel syndrome, and a fingertip you cannot straighten after catching it may be mallet finger.",
          "Conditions that clinicians consider alongside trigger finger include Dupuytren's contracture and a ganglion.",
        ],
      },
      {
        heading: "Getting seen",
        paragraphs: [
          "In many areas you may be able to get help, such as physiotherapy, from NHS community musculoskeletal services without needing a referral from a GP.",
          "Arthritis UK advises visiting your GP surgery if hand pain is not getting better after two weeks of treatment at home, is getting worse, keeps returning, or stops you doing everyday activities.",
        ],
      },
    ],
    helps: [
      "See your GP if you think you may have trigger finger.",
      "Do not try to diagnose the cause of your finger pain yourself.",
      "Check whether you can refer yourself to NHS community musculoskeletal services in your area.",
      "Visit your GP surgery if hand pain is not better after two weeks of treatment at home.",
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Leave the diagnosis to a professional.",
      "Check if you can refer yourself.",
    ],
    ask: "How can you tell this is trigger finger and not something else?",
    interactive: {
      kind: "flip-cards",
      title: "Trigger finger or something else?",
      intro: "Turn each card to see how the NHS describes each cause of finger pain. Do not try to diagnose yourself.",
      cards: [
        { id: "trigger", front: "Trigger finger", when: "Pain at the base of the finger", back: "Pain or tenderness in the palm at the base of the finger, stiffness, clicking when you move your finger." },
        { id: "carpal", front: "Carpal tunnel syndrome", when: "Tingling or numbness", back: "Ache, numbness, tingling or weakness in your fingers or hands." },
        { id: "mallet", front: "Mallet finger", when: "Often after catching the finger", back: "Pain, swelling, and you cannot straighten the end of your finger." },
        { id: "arthritis", front: "Arthritis", when: "Swelling that lasts", back: "Pain, swelling and stiffness that lasts a long time. It may be hard to move your fingers, and there may be a lump." },
        { id: "broken", front: "Broken finger", when: "After an injury", back: "Sudden, sharp pain, swelling, a popping or snapping sound during the injury. Contact NHS 111 to find out what to do." },
      ],
    },
    sources: [NIDIRECT, AU_HAND, GGC, NHS_FINGER, NHS_PALM, NHS_TF],
    quiz: {
      question: "How is trigger finger usually diagnosed?",
      options: [{ text: "From your symptoms and an examination", right: true }, { text: "Always with an MRI scan" }, { text: "With a blood test alone" }],
      why: "Guidance for NHS clinicians in Greater Glasgow and Clyde says the diagnosis is first made from your symptoms and a physical examination.",
    },
  },
  {
    id: "trf-rest-splint",
    kicker: "Treatment",
    question: "Will rest and a splint help my trigger finger?",
    hook: "Less of what hurts by day, a straight finger by night. Sometimes that is all it takes.",
    short: "Trigger finger can get better on its own, and avoiding the activities that make it worse can help. A small splint that holds the finger straight at night keeps the tendon in its tunnel so it can smooth out. Painkillers, a wrapped ice pack and gentle movement can ease the pain.",
    sections: [
      {
        heading: "Less of what makes it worse",
        paragraphs: [
          "Trigger finger can sometimes get better on its own without any treatment. You can try to avoid or reduce activities that make your symptoms worse, until your symptoms improve.",
          "Some mild cases recover over a few weeks without treatment.",
        ],
      },
      {
        heading: "A splint at night",
        paragraphs: [
          "Splinting is where the affected finger is strapped to a plastic splint to keep it straight and reduce movement.",
          "A small splint can hold the finger or thumb straight at night. Holding the finger straight at night keeps the roughened part of the tendon in the tunnel and makes it smoother.",
          "A splint can be fitted by a hand therapist, but even a lollipop stick held on with tape can be used as a temporary splint. NHS guidance in Glasgow also mentions ice lolly sticks.",
        ],
      },
      {
        heading: "Looking after a splint",
        paragraphs: [
          "Wear your splint as advised by your therapist, keep it clean and dry, and do not try to alter it. Keep it away from sources of heat.",
          "Wearing a splint continuously can irritate the skin. If your skin becomes red, dry or blistered, or the splint rubs or digs in, contact your hand therapist.",
        ],
      },
      {
        heading: "Painkillers, ice and gentle movement",
        paragraphs: [
          "Painkillers such as ibuprofen can help with the pain. Do not take ibuprofen tablets for more than 10 days unless a doctor advises it, and speak to a pharmacist or doctor if you are not sure you can take it. Glasgow's guidance for clinicians notes that the evidence for anti-inflammatory painkillers in trigger finger is limited.",
          "For finger pain, the NHS suggests an ice pack, or a bag of frozen peas, in a towel on your finger for up to 20 minutes every 2 to 3 hours. Do not stop using your finger completely: after a few days, gentle hand and finger exercises help ease stiffness.",
        ],
      },
      {
        heading: "How long it can take",
        paragraphs: [
          "North Tees and Hartlepool's hand therapy leaflet says that if you follow the advice and exercises, it is very likely your symptoms will improve, but this may take up to 12 weeks.",
          "Its exercises, done 4 to 5 times a day, move the fingers from straight to a hook and then to a full fist, and from straight to a flat table top with the fingertips kept straight.",
        ],
      },
    ],
    helps: [
      "Avoid or reduce activities that make your symptoms worse, until your symptoms improve.",
      "Use a small splint to hold the finger or thumb straight at night.",
      "Keep your splint clean and dry, and contact your hand therapist if it rubs.",
      "Put an ice pack in a towel on your finger for up to 20 minutes every 2 to 3 hours.",
      "Take painkillers such as ibuprofen to help with pain.",
      "Ask a hand therapist, physiotherapist or occupational therapist whether a splint could help, and how to use it.",
    ],
    tryThisWeek: [
      "Cut back on what makes it worse.",
      "Wear a splint at night.",
      "Try a wrapped ice pack.",
    ],
    ask: "Would a night splint help me, and who can fit one?",
    interactive: {
      kind: "scenarios",
      title: "Splints and self-care",
      scenarios: [
        {
          id: "rubbing",
          situation: "Your splint has started rubbing and the skin underneath looks red.",
          options: [{ text: "Contact your hand therapist", best: true }, { text: "Trim the splint yourself" }],
          why: "Do not try to alter it. If your skin becomes red, dry or blistered, or the splint rubs or digs in, contact your hand therapist.",
        },
        {
          id: "morning",
          situation: "Your finger locks most when you wake up.",
          options: [{ text: "Ask about a night splint to keep it straight", best: true }, { text: "Sleep with the finger curled" }],
          why: "A small splint can hold the finger or thumb straight at night. Holding the finger straight at night keeps the roughened part of the tendon in the tunnel and makes it smoother.",
        },
        {
          id: "still",
          situation: "It hurts, so you plan to stop using the finger completely.",
          options: [{ text: "Keep it moving gently after a few days", best: true }, { text: "Keep it still for weeks" }],
          why: "Do not stop using your finger completely: after a few days, gentle hand and finger exercises help ease stiffness.",
        },
      ],
    },
    sources: [NHS_TF, BSSH, NTH, AU_HAND, NHS_FINGER, NHS_IBUPROFEN, GGC],
    quiz: {
      question: "Why does a night splint help trigger finger?",
      options: [{ text: "It keeps the roughened tendon in its tunnel so it smooths out", right: true }, { text: "It stretches the bone" }, { text: "It numbs the nerve" }],
      why: "Holding the finger straight at night keeps the roughened part of the tendon in the tunnel and makes it smoother.",
    },
  },
  {
    id: "trf-injection",
    kicker: "Treatment",
    question: "Will a steroid injection fix my trigger finger?",
    hook: "One small injection works for most people. Here is what to expect, and what to watch for.",
    short: "A steroid injection into the tendon sheath can reduce swelling so the tendon moves freely again. The British Society for Surgery of the Hand says it relieves pain and triggering in about 70% of cases, though less often in people with diabetes. Improvement may come within days or take several weeks.",
    sections: [
      {
        heading: "What the injection does",
        paragraphs: [
          "Treatment may include steroid injections into your finger or thumb to reduce swelling and pain.",
          "The injection goes into the tendon sheath around the painful nodule. It is thought to work by reducing swelling of the tendon, so that it can move freely again.",
        ],
      },
      {
        heading: "How well it works",
        paragraphs: [
          "The British Society for Surgery of the Hand says a steroid injection relieves the pain and triggering in about 70% of cases. The success rate is lower in people with diabetes.",
          "Gloucestershire Hospitals says steroid injections usually result in around 90% of patients needing no further treatment. A second injection is sometimes helpful, but surgery may be needed if triggering persists.",
          "Guidance for clinicians in Glasgow says the injection can be repeated, with a maximum of 2 injections in total.",
        ],
      },
      {
        heading: "Having it",
        paragraphs: [
          "Steroid injections are usually given by a specially trained doctor in a GP surgery or hospital clinic. A local anaesthetic is sometimes given to numb the skin first.",
          "The injection can be a little uncomfortable. You can go home afterwards, and the NHS suggests resting the area for 24 hours and avoiding heavy exercise.",
        ],
      },
      {
        heading: "When it starts to help",
        paragraphs: [
          "Improvement may come within a few days of the injection, but it may take several weeks.",
          "Pain and swelling may feel worse straight after an injection. This usually gets better after a few days, and it is safe to take painkillers such as paracetamol or ibuprofen.",
        ],
      },
      {
        heading: "Side effects and safety",
        paragraphs: [
          "The risks of injection are small, but it very occasionally causes some thinning or colour change in the skin where it was given. Gateshead Health notes a small risk of the tendon rupturing.",
          "Tell your doctor first if you have an infection, or are pregnant or breastfeeding, and make sure they know if you have diabetes. If you check your own blood sugar, you will need to do this more often, as these injections can affect blood sugar control.",
          "Call a doctor or 111 now if you get signs of an infection, such as a high temperature or chills, after an injection. Call 999 if your lips, mouth, throat or tongue suddenly swell or you are struggling to breathe.",
        ],
      },
    ],
    helps: [
      "Ask about a steroid injection if your trigger finger does not go away.",
      "Rest the area for 24 hours after the injection and avoid heavy exercise.",
      "Tell your doctor before the injection if you have diabetes or an infection.",
      "If you have diabetes, check your blood sugar more often after the injection.",
      "Call a doctor or 111 now if you get signs of an infection.",
    ],
    tryThisWeek: [
      "Ask whether an injection would help.",
      "Rest it for 24 hours afterwards.",
      "Check blood sugar more often.",
    ],
    ask: "Would a steroid injection suit me, and what if it does not work?",
    interactive: {
      kind: "timeline",
      title: "After a steroid injection",
      steps: [
        { id: "day", when: "The day", title: "The injection", points: ["A local anaesthetic is sometimes given first.", "You can go home afterwards."] },
        { id: "rest", when: "First 24 hours", title: "Rest", points: ["Rest the area and avoid heavy exercise."] },
        { id: "days", when: "First few days", title: "It may feel worse", points: ["Pain and swelling may feel worse, then usually ease.", "Paracetamol or ibuprofen are safe to take."] },
        { id: "weeks", when: "Days to weeks", title: "Easing", points: ["Improvement may come within days, or take several weeks."] },
        { id: "later", when: "If triggering persists", title: "Next steps", points: ["A second injection is sometimes helpful.", "Surgery may be needed if triggering persists."] },
      ],
    },
    sources: [NHS_TF, BSSH, GLOS, GATESHEAD, NHS_HC_ABOUT, NHS_HC_HOW, NHS_HC_SIDE, NHS_HC_QUESTIONS, GGC, NHS_HC_WHO],
    quiz: {
      question: "Who may find a steroid injection works less well?",
      options: [{ text: "People with diabetes", right: true }, { text: "People over 40" }, { text: "People who are right-handed" }],
      why: "The success rate is lower in people with diabetes.",
    },
  },
  {
    id: "trf-surgery",
    kicker: "Surgery",
    question: "What is trigger finger release surgery?",
    hook: "A small cut in the palm, a tight band released, and usually home within the hour.",
    short: "Surgery is only done if other treatments have not worked, or for a finger locked in a bent position. Through a small cut in the palm, the surgeon releases the tight band that catches the tendon. It is usually a day case under local anaesthetic, taking less than 30 minutes.",
    sections: [
      {
        heading: "When surgery is offered",
        paragraphs: [
          "Surgery helps your finger or thumb move properly. It is only done if other treatments have not worked.",
          "Gateshead Health says it is offered when other treatments fail, and for a locked trigger finger that is stuck in a bent position. Gloucestershire Hospitals says it is your choice, and that it is very safe to live with a trigger finger, which very rarely causes harm.",
        ],
      },
      {
        heading: "What the operation does",
        paragraphs: [
          "Surgery releases the affected sheath so that the tendon can move freely again. Through a small cut in the palm, the surgeon releases the tight band, the A1 pulley, that is catching the tendon.",
          "It is usually done under local anaesthetic as a day case, and usually takes less than 30 minutes. The wound is closed with stitches.",
          "Some surgeons release the tunnel with a needle under local anaesthetic instead, while others feel open surgery is more effective. The needle method is not suitable for all cases and all fingers.",
        ],
      },
      {
        heading: "How well it works",
        paragraphs: [
          "Pain relief is usually rapid, and triggering coming back after surgery is uncommon. Northern Ireland's health information says the operation can be up to 100 per cent effective.",
          "The scar is usually around 2 to 3 cm long and tender to begin with. It may be red and tender for several weeks, but it is seldom troublesome in the longer term.",
        ],
      },
      {
        heading: "Possible complications",
        paragraphs: [
          "All operations carry some risk. Gateshead Health gives wound infection as fewer than 1 in 100, and scar tenderness, ongoing pain and swelling as fewer than 5 in 100.",
          "Other risks include stiffness, injury to a nerve or blood vessel, complex regional pain syndrome, and triggering that continues if the release is incomplete, which may need further surgery.",
        ],
      },
      {
        heading: "Before you go in",
        paragraphs: [
          "Plan how you will manage at home, such as stocking up on easy meals, and take all rings off your hand before coming in. You will need someone to take you home.",
          "Smoking has been shown to delay wound healing and increase complications after surgery. Your GP can advise on stopping.",
        ],
      },
    ],
    helps: [
      "Ask whether surgery is right for you if other treatments have not worked.",
      "Plan ahead and stock up on easy meals before the operation.",
      "Take all rings and jewellery off your hand before coming in.",
      "Arrange for someone to take you home.",
      "Speak to your GP if you would like help to stop smoking.",
    ],
    tryThisWeek: [
      "Stock up on easy meals.",
      "Take your rings off.",
      "Arrange a lift home.",
    ],
    ask: "Is surgery right for me now, and would it be open surgery or a needle release?",
    interactive: {
      kind: "flip-cards",
      title: "Your options, side by side",
      intro: "Turn each card to see what the sources say. Your hand team can tell you which suits you.",
      cards: [
        { id: "nothing", front: "Doing nothing", when: "It is your choice", back: "Very safe overall. It often settles on its own, though sometimes it becomes fixed in a bent position." },
        { id: "splint", front: "Night splint", when: "For a few months", back: "Wearing a trigger finger splint overnight may help resolve the triggering." },
        { id: "injection", front: "Steroid injection", when: "Often tried first", back: "Relieves pain and triggering in about 70% of cases, says the BSSH, though less often with diabetes." },
        { id: "needle", front: "Needle release", when: "Under local anaesthetic", back: "Releases the tight tunnel with a needle. Not suitable for all cases and all fingers." },
        { id: "open", front: "Open release", when: "If other treatments fail", back: "A small cut in the palm frees the tendon. A day case, usually under 30 minutes." },
      ],
    },
    sources: [NHS_TF, BSSH, GATESHEAD, GLOS, NIDIRECT],
    quiz: {
      question: "When is surgery for trigger finger usually done?",
      options: [{ text: "If other treatments have not worked", right: true }, { text: "As the first treatment for everyone" }, { text: "Only for children" }],
      why: "It is only done if other treatments have not worked.",
    },
  },
  {
    id: "trf-after-surgery",
    kicker: "Recovery",
    question: "What is recovery like after trigger finger release?",
    hook: "Fingers moving on day one, a healed wound by two weeks, and a hand back to normal in about three months.",
    short: "You should be able to move your fingers straight away, and light use of the hand is possible from the day of surgery. Keep the hand raised for 48 hours and the wound dry until it is checked, usually after 10 to 14 days. Grip can feel weaker for some weeks, and hand function is usually back to normal by 3 months.",
    sections: [
      {
        heading: "Straight after",
        paragraphs: [
          "You will have a dressing over the wound and a light bandage, and you should be able to move your fingers straight away. You may be given a sling to keep your hand raised and reduce swelling.",
          "You will not be able to drive yourself home. Keep your hand raised and bandaged for 48 hours to control the swelling.",
        ],
      },
      {
        heading: "The wound",
        paragraphs: [
          "You will be told when to remove the bulky bandage, usually after 48 to 72 hours. Keep the wound and dressing dry until your wound check, usually 10 to 14 days after the operation at your GP practice.",
          "Gloucestershire Hospitals says it is usually safe to shower with the wound at 2 weeks, but to wait until around 4 weeks before soaking it in a bath. Do not put rings back on until the swelling has settled.",
        ],
      },
      {
        heading: "Keep it moving",
        paragraphs: [
          "Light use of the hand is possible from the day of surgery, and using the finger helps movement come back. It is important to gently exercise your fingers, thumb, elbow and shoulder to prevent stiffness.",
          "Gloucestershire Hospitals suggests touching your thumb to each fingertip in turn, fully straightening your fingers, then making a full fist with no power in it, around 10 times every half hour until your hand works normally. It is important to follow your own team's instructions about movement.",
          "Once the wound is healed and dry, massage the scar with an unscented moisturising cream for a few minutes, 3 to 4 times a day. This can reduce tenderness and flatten the scar.",
        ],
      },
      {
        heading: "A rough timeline",
        paragraphs: [
          "At 2 weeks the wound has healed. At 6 weeks the scar is still red and tender, and grip still feels weaker than normal.",
          "Usually by 3 months hand function is back to normal, and by 6 months the scar should be a thin white line.",
          "Avoid heavy lifting, repetitive gripping and putting a lot of weight through the hand and wrist for 6 weeks. It may take longer if more than one finger was released.",
        ],
      },
      {
        heading: "When to get in touch",
        paragraphs: [
          "Contact the surgeon if you get a temperature, notice discharge from the wound, feel unwell, or the wound becomes red, sore or painful.",
          "Also get in touch if you have ongoing pain, swelling or scar sensitivity, a lot of stiffness, a finger that stays locked bent, or you cannot use the hand for daily tasks.",
        ],
      },
    ],
    helps: [
      "Keep your hand raised and bandaged for 48 hours.",
      "Keep the wound clean and dry until it is checked or the stitches are out.",
      "Gently exercise your fingers, thumb, elbow and shoulder to prevent stiffness.",
      "Massage the healed scar with unscented cream 3 to 4 times a day.",
      "Contact the surgeon if you get a temperature, discharge, or a red, sore wound.",
    ],
    tryThisWeek: [
      "Keep the hand raised.",
      "Keep the wound dry.",
      "Move your fingers gently.",
    ],
    ask: "What exercises should I do after the operation, and who checks my wound?",
    interactive: {
      kind: "timeline",
      title: "Healing week by week",
      steps: [
        { id: "day", when: "Day of surgery", title: "Home the same day", points: ["Move your fingers straight away.", "Someone needs to take you home."] },
        { id: "two-days", when: "48 to 72 hours", title: "Bandage off", points: ["Keep the hand raised for 48 hours.", "The bulky bandage usually comes off now."] },
        { id: "two-weeks", when: "10 to 14 days", title: "Wound check", points: ["Usually at your GP practice.", "It is usually safe to shower at 2 weeks."] },
        { id: "six-weeks", when: "6 weeks", title: "Still tender", points: ["Grip still feels weaker than normal.", "Avoid heavy lifting and repetitive gripping until now."] },
        { id: "three-months", when: "3 months", title: "Back to normal", points: ["Hand function is usually back to normal.", "By 6 months the scar is a thin white line."] },
      ],
    },
    sources: [GATESHEAD, GLOS, BSSH],
    quiz: {
      question: "When is hand function usually back to normal after the operation, according to Gloucestershire Hospitals?",
      options: [{ text: "By about 3 months", right: true }, { text: "The next day" }, { text: "After 2 years" }],
      why: "Usually by 3 months hand function is back to normal, and by 6 months the scar should be a thin white line.",
    },
  },
  {
    id: "trf-hand-use",
    kicker: "Everyday life",
    question: "How can I ease the strain on my hand?",
    hook: "A jar opener, a looser grip, a ring taken off. Small changes that spare a sore finger.",
    short: "Avoid or reduce the activities that make symptoms worse, and change how you do tasks to take the strain off your hands. Do not grip too tightly, and use gadgets for jobs like opening jars. Keep the hand moving gently rather than stopping completely.",
    sections: [
      {
        heading: "Ease off the tasks that hurt",
        paragraphs: [
          "Avoid or reduce activities that make your symptoms worse, until your symptoms improve. Symptoms may be worse when you use your hands, such as preparing food, using tools or playing sport.",
          "Hand use at work, at home, in the garden or at sport can certainly make the pain worse.",
        ],
      },
      {
        heading: "Doing things differently",
        paragraphs: [
          "You might be able to change the way you do some tasks to take the strain off your hands and wrists. Some hand conditions will not get better until you stop doing certain tasks.",
          "The NHS suggests not lifting heavy objects or gripping anything too tightly, and thinking about gadgets or tools that make difficult tasks easier, such as opening jars or chopping vegetables.",
        ],
      },
      {
        heading: "Small comforts",
        paragraphs: [
          "Remove any jewellery on the painful finger. A pharmacist can tell you about the best painkiller, and about splints to support your finger.",
          "Wrapping a bandage around your hand can support it, and a splint can support your palm and ease pain, especially at night.",
          "Do not use heat packs or have hot baths for the first 2 to 3 days after an injury. Heat can help hands that are painful and stiff, but do not apply heat if the hand is swollen or you have just injured it.",
        ],
      },
      {
        heading: "Keep the hand moving",
        paragraphs: [
          "Moving your hands, wrists and fingers as much as possible can help ease pain and stiffness. It also keeps up range of movement, function and strength.",
          "Arthritis UK's finger tendon glide stretch starts with the fingers straight, then makes a hook fist, a full fist and a straight fist, returning to a straight hand each time. Start slowly and build up, and get advice from a healthcare professional if you have any concerns.",
        ],
      },
      {
        heading: "Do not stop completely",
        paragraphs: [
          "Do not stop using your finger completely. After a few days, gentle hand and finger exercises help ease any stiffness.",
          "Keep active, though you may need to limit how much you do to start with, before gradually increasing it.",
        ],
      },
    ],
    helps: [
      "Avoid or reduce activities that make your symptoms worse.",
      "Change the way you do tasks to take the strain off your hands.",
      "Use gadgets or tools to make difficult tasks, like opening jars, easier.",
      "Do not lift heavy objects or grip anything too tightly.",
      "Remove any jewellery on the painful finger.",
      "Keep your hands and fingers moving with gentle exercises.",
    ],
    tryThisWeek: [
      "Change how you do painful tasks.",
      "Try a jar opener or other gadget.",
      "Take off rings on that finger.",
    ],
    ask: "Could a hand therapist or occupational therapist look at how I use my hands?",
    interactive: {
      kind: "scenarios",
      title: "Everyday hand jobs",
      scenarios: [
        {
          id: "jar",
          situation: "You need to open a stiff jar.",
          options: [{ text: "Use a gadget to help", best: true }, { text: "Grip it as hard as you can" }],
          why: "The NHS suggests not gripping anything too tightly, and thinking about gadgets or tools that make difficult tasks easier, such as opening jars.",
        },
        {
          id: "ring",
          situation: "Your sore finger has a ring on it.",
          options: [{ text: "Take the ring off", best: true }, { text: "Leave it on" }],
          why: "Remove any jewellery on the painful finger.",
        },
        {
          id: "stiff",
          situation: "Your hand feels stiff when you get up.",
          options: [{ text: "Move your fingers gently", best: true }, { text: "Keep the hand completely still" }],
          why: "Moving your hands, wrists and fingers as much as possible can help ease pain and stiffness.",
        },
      ],
    },
    sources: [NHS_TF, AU_HAND, NHS_FINGER, BSSH, NHS_PALM, AU_EX_HAND, NHS_RSI],
    quiz: {
      question: "What does the NHS suggest about gripping when you have finger pain?",
      options: [{ text: "Do not grip anything too tightly", right: true }, { text: "Grip harder to strengthen it" }, { text: "Never use the hand at all" }],
      why: "The NHS suggests not lifting heavy objects or gripping anything too tightly.",
    },
  },
  {
    id: "trf-diabetes",
    kicker: "Diabetes",
    question: "What does diabetes have to do with trigger finger?",
    hook: "Diabetes makes trigger finger more likely, and it changes how an injection works and what to watch for.",
    short: "You may be more likely to get trigger finger if you have diabetes, though most people with it do not have diabetes. Steroid injections work less often in people with diabetes, and they can affect blood sugar control. The NHS advises seeing a GP about hand pain if you have diabetes.",
    sections: [
      {
        heading: "A known link",
        paragraphs: [
          "You may be more likely to get trigger finger if you have diabetes. Northern Ireland's health information calls diabetes one of the long-term conditions sometimes associated with it.",
          "People with insulin-dependent diabetes are especially prone to triggering, but most trigger fingers happen in people without diabetes.",
        ],
      },
      {
        heading: "Hand problems and diabetes",
        paragraphs: [
          "The NHS advises seeing a GP if you have finger or palm pain and you have diabetes, because hand problems can be more serious if you have diabetes.",
          "Other conditions that Arthritis UK says may increase the risk include gout, rheumatoid arthritis and an underactive thyroid.",
        ],
      },
      {
        heading: "Injections and blood sugar",
        paragraphs: [
          "A steroid injection relieves the pain and triggering in about 70% of cases, but the success rate is lower in people with diabetes.",
          "Make sure your doctor knows if you have type 1 or type 2 diabetes before a steroid injection. If you monitor your own blood sugar, you will need to do this more often, as the injection can affect your blood sugar control.",
          "Call a doctor or 111 now if, after an injection, you feel sleepy or confused, very thirsty or hungry, need to pee more often, are flushed, breathe quickly or have breath that smells like fruit. These can be signs of diabetes or its complications.",
        ],
      },
      {
        heading: "If an injection does not work",
        paragraphs: [
          "A second injection is sometimes helpful, but surgery may be needed if triggering persists.",
          "Surgery is offered when other treatments fail, and for a locked trigger finger that is stuck in a bent position.",
        ],
      },
    ],
    helps: [
      "See a GP about finger or palm pain if you have diabetes.",
      "Tell your doctor you have diabetes before a steroid injection.",
      "Check your blood sugar more often after an injection if you monitor it yourself.",
      "Call a doctor or 111 now if you get signs of diabetes complications, such as feeling very thirsty or confused.",
    ],
    tryThisWeek: [
      "See a GP about hand pain.",
      "Tell the doctor about your diabetes.",
      "Check blood sugar more often.",
    ],
    ask: "With my diabetes, which treatment is most likely to help, and how should I watch my blood sugar?",
    interactive: {
      kind: "scenarios",
      title: "Diabetes and a trigger finger",
      scenarios: [
        {
          id: "see-gp",
          situation: "You have diabetes and a finger that clicks and hurts.",
          options: [{ text: "See a GP about it", best: true }, { text: "Leave it for months" }],
          why: "The NHS advises seeing a GP if you have finger or palm pain and you have diabetes, because hand problems can be more serious if you have diabetes.",
        },
        {
          id: "tell",
          situation: "You are booked for a steroid injection.",
          options: [{ text: "Tell the doctor you have diabetes", best: true }, { text: "No need to mention it" }],
          why: "Make sure your doctor knows if you have type 1 or type 2 diabetes before a steroid injection.",
        },
        {
          id: "monitor",
          situation: "You check your own blood sugar and have just had the injection.",
          options: [{ text: "Check it more often", best: true }, { text: "Check it less often" }],
          why: "If you monitor your own blood sugar, you will need to do this more often, as the injection can affect your blood sugar control.",
        },
      ],
    },
    sources: [NHS_TF, BSSH, NHS_FINGER, NHS_HC_WHO, GATESHEAD, AU_HAND, NHS_HC_SIDE, NIDIRECT, NHS_PALM],
    quiz: {
      question: "How does diabetes affect steroid injections for trigger finger?",
      options: [{ text: "They work less often", right: true }, { text: "They always work" }, { text: "They cannot be given at all" }],
      why: "A steroid injection relieves the pain and triggering in about 70% of cases, but the success rate is lower in people with diabetes.",
    },
  },
  {
    id: "trf-work",
    kicker: "Work",
    question: "What about work and hobbies?",
    hook: "Work rarely causes it, but it can make it hurt. Small changes, and a plan for time off after surgery.",
    short: "There is little evidence that work causes trigger finger, but hand use at work and in hobbies can make the pain worse. Doing tasks differently, rotating tasks or working reduced hours for a time may help. After surgery, desk workers may go back straight away, while manual jobs may need a few weeks off.",
    sections: [
      {
        heading: "Work and hobbies can make it worse",
        paragraphs: [
          "There is little evidence that trigger finger is caused by work activities, but the pain can be made worse by hand use at work, at home, in the garden or at sport.",
          "Symptoms may be worse when doing activities using your hands, such as preparing food, using tools or playing sport.",
        ],
      },
      {
        heading: "Adjusting what you do",
        paragraphs: [
          "If there are tasks that make your pain worse, try to do them slightly differently to take the strain off your hands. Could you avoid them for at least a short while, or get help with them?",
          "You might find it easier to do reduced hours, or rotate some of your tasks, at least for a time. Talk to your manager or HR department if you are struggling with any part of your job.",
          "If you have an occupational health adviser at work, they can help advise what work you are fit to do and arrange simple adjustments.",
        ],
      },
      {
        heading: "Help from the government",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition or disability. It could give a grant towards things like specialist equipment or physical changes to your workplace.",
          "Employers must make reasonable adjustments so that workers with disabilities, or physical or mental health conditions, are not substantially disadvantaged when doing their jobs.",
        ],
      },
      {
        heading: "Time off after an operation",
        paragraphs: [
          "If you have a desk job, you may be able to go back to work straight away. Most people with light manual jobs go back at around 2 weeks, and heavy manual workers might need longer.",
          "Gateshead Health says a manual job may need 4 to 6 weeks off. Glasgow's guidance for clinicians suggests 2 to 3 weeks for light manual work and 4 to 6 weeks for heavy manual work.",
          "Northern Ireland's health information says you may need two to four weeks off work to fully recover.",
        ],
      },
      {
        heading: "Driving after surgery",
        paragraphs: [
          "It is your responsibility to make sure you are safe to drive. Most people return to driving at around 2 to 3 weeks after the operation.",
          "Generally you are safe to drive when the wound is healed, you are free of dressings and you can grip the steering wheel. It is wise to discuss this with your insurance company first.",
        ],
      },
    ],
    helps: [
      "Do painful tasks slightly differently to take the strain off your hands.",
      "Ask about reduced hours or rotating tasks for a time.",
      "Talk to your manager, HR or occupational health if you are struggling.",
      "Apply for Access to Work if you need equipment or other support.",
      "After surgery, check with your insurance company before driving again.",
    ],
    tryThisWeek: [
      "Change how you do painful tasks.",
      "Ask about rotating tasks.",
      "Talk to your manager or HR.",
    ],
    ask: "How long should I plan to be off work, and what could I change at work meanwhile?",
    interactive: {
      kind: "scenarios",
      title: "At work",
      scenarios: [
        {
          id: "tools",
          situation: "Your job means hours of gripping tools.",
          options: [{ text: "Ask about rotating tasks for a time", best: true }, { text: "Push on without a break" }],
          why: "You might find it easier to do reduced hours, or rotate some of your tasks, at least for a time.",
        },
        {
          id: "desk",
          situation: "You have a desk job and are booked for surgery.",
          options: [{ text: "You may be able to go back straight away", best: true }, { text: "Plan on three months off" }],
          why: "If you have a desk job, you may be able to go back to work straight away.",
        },
        {
          id: "drive",
          situation: "Two weeks after the operation, you want to drive.",
          options: [{ text: "Check your grip and ask your insurer", best: true }, { text: "Drive while still in dressings" }],
          why: "Generally you are safe to drive when the wound is healed, you are free of dressings and you can grip the steering wheel. It is wise to discuss this with your insurance company first.",
        },
      ],
    },
    sources: [AU_HAND, GATESHEAD, GLOS, GGC, NIDIRECT, NHS_RSI, BSSH, GOV_ACCESS, GOV_ADJUSTMENTS, NHS_TF],
    quiz: {
      question: "When do most people with light manual jobs go back after the operation, according to Gloucestershire Hospitals?",
      options: [{ text: "At around 2 weeks", right: true }, { text: "The same afternoon" }, { text: "After 6 months" }],
      why: "Most people with light manual jobs go back at around 2 weeks, and heavy manual workers might need longer.",
    },
  },
  {
    id: "trf-coming-back",
    kicker: "Long term",
    question: "What if my trigger finger comes back?",
    hook: "Back after an injection? There are next steps. Back after surgery? That is uncommon.",
    short: "If triggering persists after a steroid injection, a second injection is sometimes helpful, but surgery may be needed. Coming back after surgery is uncommon. Exercises and a night splint help keep the finger moving, and a GP can look again if it keeps returning.",
    sections: [
      {
        heading: "It can return",
        paragraphs: [
          "A steroid injection relieves the pain and triggering in about 70% of cases. A second injection is sometimes helpful, but surgery may be needed if triggering persists.",
          "Glasgow's guidance for clinicians says a steroid injection can be repeated, with a maximum of 2 injections in total.",
          "Arthritis UK advises visiting your GP surgery if hand pain keeps returning or is getting worse.",
        ],
      },
      {
        heading: "Keeping the finger moving",
        paragraphs: [
          "Exercises can help to keep your finger moving and prevent stiffness, and splints worn at night can stop the finger locking.",
          "North Tees and Hartlepool's hand therapy leaflet says that if you follow the advice and exercises, it is very likely your symptoms will improve, though this may take up to 12 weeks.",
        ],
      },
      {
        heading: "After an operation",
        paragraphs: [
          "Recurrence of triggering after surgery is uncommon.",
          "Triggering can continue if the release was incomplete, and further surgery may then be needed. Get in touch if the finger stays locked in a bent position and you cannot fully straighten it.",
        ],
      },
      {
        heading: "If it is not treated",
        paragraphs: [
          "If it does not get better and is not treated, it is possible for an affected finger or thumb to become permanently bent, which would make everyday tasks difficult.",
          "Gloucestershire Hospitals says it is very safe to live with a trigger finger, which very rarely causes harm, though sometimes it becomes fixed in a bent position.",
        ],
      },
      {
        heading: "Getting it looked at again",
        paragraphs: [
          "See a GP if your symptoms do not get better, or stop you doing your usual daily activities. In many areas you can refer yourself to NHS community musculoskeletal services.",
          "If triggering is severe, or other treatment is not helping, Glasgow's guidance for clinicians suggests a review by a surgeon.",
        ],
      },
    ],
    helps: [
      "Keep doing your exercises to keep the finger moving.",
      "Wear your night splint as advised to stop the finger locking.",
      "Visit your GP surgery if the pain keeps returning or is getting worse.",
      "Ask about a second injection or surgery if triggering persists.",
    ],
    tryThisWeek: [
      "Keep up your exercises.",
      "Wear the night splint.",
      "See a GP if it keeps returning.",
    ],
    ask: "It has come back: what is the next step for me?",
    interactive: {
      kind: "signs",
      title: "Worth raising at your appointment",
      intro: "Tick any that apply, to talk through with your GP or hand team.",
      signs: [
        "It came back after an injection",
        "I have had more than one injection",
        "It came back after an operation",
        "My finger stays locked bent",
        "It stops me doing daily tasks",
        "More than one finger is affected",
        "I have diabetes",
      ],
      after: "See a GP if your symptoms do not get better. A second injection, or surgery, may be options if triggering persists.",
      copyHeading: "About my trigger finger",
    },
    sources: [BSSH, GLOS, GATESHEAD, GGC, NHS_TF, AU_HAND, NTH, NIDIRECT],
    quiz: {
      question: "How often does triggering come back after surgery?",
      options: [{ text: "It is uncommon", right: true }, { text: "It always comes back" }, { text: "Usually within a week" }],
      why: "Recurrence of triggering after surgery is uncommon.",
    },
  },
];
