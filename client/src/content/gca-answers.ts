import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Giant cell arteritis page's pieces (content/library-conditions/body-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, PMRGCAuk
// (the charity for polymyalgia rheumatica and giant cell arteritis), Arthritis UK (the charity formerly called
// Versus Arthritis; its pages are on arthritis-uk.org), the Royal Osteoporosis Society and the government's
// Access to Work pages. Urgent advice keeps each source's own wording: an urgent GP appointment or NHS 111 if
// giant cell arteritis is suspected (NHS); the doctor straight away for sight changes or jaw pain, and A&E if an
// immediate appointment is not possible (Arthritis UK, PMRGCAuk); A&E or 999 if sight suddenly goes (NHS).
// General information only; it never replaces what a person's own GP or specialist team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const auk = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const pmrgca = (label: string, path: string): LearnSource => ({ label: `PMRGCAuk: ${label}`, url: `https://pmrgca.org.uk/${path}` });
const ros = (label: string, path: string): LearnSource => ({ label: `Royal Osteoporosis Society: ${label}`, url: `https://theros.org.uk/information-and-support/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_GCA = nhs("Temporal arteritis", "conditions/temporal-arteritis/");
const NHS_PMR = nhs("Polymyalgia rheumatica", "conditions/polymyalgia-rheumatica/");
const NHS_VISION_LOSS = nhs("Vision loss", "conditions/vision-loss/");
const NHS_PRED_ABOUT = nhs("About prednisolone tablets and liquid", "medicines/prednisolone/about-prednisolone-tablets-and-liquid/");
const NHS_PRED_HOW = nhs("How and when to take prednisolone tablets and liquid", "medicines/prednisolone/how-and-when-to-take-prednisolone-tablets-and-liquid/");
const NHS_PRED_SIDE = nhs("Side effects of prednisolone tablets and liquid", "medicines/prednisolone/side-effects-of-prednisolone-tablets-and-liquid/");
const NHS_PRED_QUESTIONS = nhs("Common questions about prednisolone tablets and liquid", "medicines/prednisolone/common-questions-about-prednisolone-tablets-and-liquid/");
const NHS_STEROIDS = nhs("Steroids", "medicines/steroids/");
const NHS_ASPIRIN = nhs("Aspirin", "medicines/aspirin/");
const NHS_OSTEO_PREVENTION = nhs("Preventing osteoporosis", "conditions/osteoporosis/prevention/");

const AUK_GCA = auk("Giant cell arteritis (GCA)", "understanding-arthritis/conditions/giant-cell-arteritis-gca/");
const AUK_STEROIDS = auk("Steroids", "understanding-arthritis/arthritis-treatments/drugs/steroids/");
const AUK_TOCILIZUMAB = auk("Tocilizumab", "understanding-arthritis/arthritis-treatments/drugs/tocilizumab/");
const AUK_METHOTREXATE = auk("Methotrexate", "understanding-arthritis/arthritis-treatments/drugs/methotrexate/");

const PMRGCA_GCA = pmrgca("What is GCA?", "information-and-advice/what-is-gca/");
const PMRGCA_PMR = pmrgca("What is PMR?", "information-and-advice/what-is-pmr/");
const PMRGCA_LIVING = pmrgca("Living with PMR/GCA", "information-and-advice/living-with-pmr-gca/");
const PMRGCA_EXERCISE = pmrgca("Exercise and nutrition", "information-and-advice/exercise-and-nutrition/");
const PMRGCA_FAQS = pmrgca("FAQs", "information-and-advice/faqs/");
const PMRGCA_ALSO_GCA = pmrgca("If you have PMR, you could also have GCA", "if-you-have-pmr-you-could-also-have-gca/");
const PMRGCA_HEAD = pmrgca("New or unusual head sensations? It could be giant cell arteritis", "new-or-unusual-head-sensations-it-could-be-giant-cell-arteritis/");
const PMRGCA_ALONE = pmrgca("You don't have to face GCA alone", "you-dont-have-to-face-gca-alone/");
const PMRGCA_CARD = pmrgca("NHS Steroid Emergency Card", "steroid-emergency-card/");
const PMRGCA_HELPLINE = pmrgca("Helpline", "get-support/helpline/");
const PMRGCA_GROUPS = pmrgca("Local support groups", "get-support/groups/");
const PMRGCA_ONLINE = pmrgca("Online support groups", "online-support/");
const PMRGCA_FORUM = pmrgca("Online health forum", "get-support/online-health-forum/");
const PMRGCA_INFO_PACK = pmrgca("Information pack", "get-support/information-pack/");

const ROS_STEROIDS = ros("Steroids (glucocorticoids) and bone health", "causes-and-risk-factors/medicines-that-increase-your-risk/steroids-glucocorticoids-and-bone-health/");

const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");

export const gcaAnswers: LearnArticle[] = [
  {
    id: "gca-what-it-is",
    kicker: "Understanding",
    question: "What is giant cell arteritis?",
    hook: "Inflamed arteries, often at the temples, in people over 50. It is serious, but very treatable when caught early.",
    short: "Giant cell arteritis (GCA) is where arteries, particularly those at the side of the head, become inflamed. It mostly affects people over 50 and is more common in women. It is serious and needs urgent treatment with steroids, which usually prevents complications such as sight loss.",
    sections: [
      {
        heading: "Inflamed arteries",
        paragraphs: [
          "Giant cell arteritis, often shortened to GCA, is where arteries, particularly those at the side of the head, become inflamed. It is serious and needs urgent treatment.",
          "It gets its name from the very large inflammatory cells found in the walls of the arteries. These cause the arteries to swell, and sometimes become blocked.",
        ],
      },
      {
        heading: "Which arteries it affects",
        paragraphs: [
          "It commonly affects arteries in the head and neck. When it affects the temples, the soft part at the side of the head between the eyes and ears, it can be called temporal arteritis.",
          "It can also affect other large arteries, including those of the upper limbs and the aorta, the main artery of the body. It is one of a group of conditions called vasculitis, which means inflammation in blood vessels.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "It typically affects people over 50, and it is very rare in younger people. The peak age for developing it is between 60 and 80.",
          "It is more common in women than men, and in people of northern European descent. It is not an inherited condition, and having it does not mean your children are likely to get it.",
        ],
      },
      {
        heading: "What causes it",
        paragraphs: [
          "It is an autoimmune condition, where the immune system mistakenly attacks healthy arteries. Scientists still do not know how it starts.",
          "People who get it have done nothing to get it. Whatever caused the immune system to go out of balance, there was nothing you could have done to avoid it.",
        ],
      },
      {
        heading: "Treatable, but urgent",
        paragraphs: [
          "It is treatable, usually with steroid tablets, but if it is left untreated it can be very serious and cause strokes or blindness. Urgent treatment with steroids will usually prevent serious complications such as eye problems.",
        ],
      },
    ],
    helps: [
      "Know the main symptoms: a new headache, a tender scalp, jaw pain when eating, and problems with your sight.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you think you might have giant cell arteritis.",
      "Share information about the condition with people close to you who can support you.",
      "Be kind to yourself: there was nothing you could have done to avoid it.",
    ],
    tryThisWeek: [
      "Learn the main symptoms.",
      "Know when to ask for an urgent appointment.",
      "Share information with people close to you.",
    ],
    ask: "Which arteries are affected in my case, and how sure are we that it is giant cell arteritis?",
    interactive: {
      kind: "risk-check",
      title: "Who is more likely to get it?",
      intro: "Tick any that apply. These are things nobody can change, and nobody does anything to cause it.",
      items: [
        { id: "age", label: "Being over 50", note: "It typically affects people over 50 and is very rare in younger people. The peak age is between 60 and 80.", changeable: false },
        { id: "woman", label: "Being a woman", note: "It is more common in women than men.", changeable: false },
        { id: "origin", label: "Northern European descent", note: "It is more common in people of northern European descent, and most common in Scandinavians.", changeable: false },
        { id: "pmr", label: "Having polymyalgia rheumatica", note: "It is often linked to polymyalgia rheumatica, and often people have both.", changeable: false },
      ],
    },
    sources: [NHS_GCA, AUK_GCA, PMRGCA_GCA, PMRGCA_FAQS, PMRGCA_LIVING],
    quiz: {
      question: "Which arteries does giant cell arteritis most commonly affect?",
      options: [{ text: "Arteries in the head and neck", right: true }, { text: "Arteries in the feet" }, { text: "Arteries in the lungs only" }],
      why: "It commonly affects arteries in the head and neck.",
    },
  },
  {
    id: "gca-symptoms",
    kicker: "Symptoms",
    question: "What does giant cell arteritis feel like?",
    hook: "A new kind of headache, a scalp too sore to brush, and a jaw that aches as you chew.",
    short: "The main symptoms are a new, often severe headache, pain or tenderness at the temples or on the scalp, jaw pain when eating or talking, and vision problems such as double vision. Many people also feel generally unwell, tired and lose weight. Get urgent help if you think you might have it.",
    sections: [
      {
        heading: "A new kind of headache",
        paragraphs: [
          "The symptoms depend on which arteries are affected. The main ones are frequent, severe headaches, and pain or tenderness at the temples or on the scalp.",
          "The headache is a new one, of a kind the person has not had before. It may sit over the temples but can be felt elsewhere on the head, and it does not always respond to the painkillers that normally help.",
        ],
      },
      {
        heading: "A tender scalp",
        paragraphs: [
          "It may be painful to brush your hair or to shave. Inflamed arteries run close to the surface of the scalp, so a hairbrush, a hat, a pillow or glasses can become uncomfortable.",
          "The blood vessels at the temples may look or feel prominent, thickened or tender.",
        ],
      },
      {
        heading: "Jaw pain when eating",
        paragraphs: [
          "Pain in the jaw or tongue when chewing or talking is another symptom. Typically it is chewy foods, like a piece of chicken or hard toast, that cause problems.",
          "The pain builds up as you eat, rather than hurting from the first bite, and eases with rest. It is often mistaken for a dental problem.",
        ],
      },
      {
        heading: "Eyes, and feeling unwell",
        paragraphs: [
          "Vision problems include double vision, blurred or dimmed vision, and loss of vision in one or both eyes. Very rarely, someone notices no early symptoms and has a sudden, painless loss of vision.",
          "More general symptoms are common too, including flu-like symptoms, tiredness, low mood, night sweats, loss of appetite and weight loss.",
          "Less commonly, it affects other large blood vessels, which can cause pain in the arm muscles when using them, or in the calves when walking.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you think you might have giant cell arteritis. If you have any changes or problems with your vision, or jaw pain while eating, see your doctor straight away.",
          "If you cannot get an immediate appointment, contact an out-of-hours doctor or go to the accident and emergency department at the nearest hospital straight away. Do not wait to see if it improves.",
        ],
      },
    ],
    helps: [
      "Ask for an urgent GP appointment or get help from NHS 111 if you think you might have giant cell arteritis.",
      "See your doctor straight away if you have changes in your vision or jaw pain while eating.",
      "If you cannot get an immediate appointment, go to A&E at the nearest hospital straight away.",
      "If something feels new or different around your head, jaw or vision, do not wait to see if it passes.",
    ],
    tryThisWeek: [
      "Know when to ask for an urgent appointment.",
      "See a doctor straight away about sight or jaw pain.",
      "Go to A&E if you cannot be seen.",
    ],
    ask: "Could my symptoms be giant cell arteritis, and how quickly do I need to be seen?",
    interactive: {
      kind: "signs",
      title: "Symptoms you may have noticed",
      intro: "Tick any you have. Get urgent help if you think it could be giant cell arteritis.",
      signs: ["A new kind of headache", "Tender temples or scalp", "Painful to brush my hair", "Prominent blood vessels at my temples", "Jaw pain that builds as I chew", "Double or blurred vision", "Sight going dim or dark", "Feeling tired or low", "Night sweats or a fever", "Loss of appetite or weight"],
      after: "Ask for an urgent GP appointment or get help from NHS 111. For sight changes or jaw pain when eating, see your doctor straight away, or go to A&E if you cannot get an immediate appointment.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_GCA, AUK_GCA, PMRGCA_GCA, PMRGCA_HEAD],
    quiz: {
      question: "How does jaw pain from giant cell arteritis typically feel?",
      options: [{ text: "It builds up as you chew and eases with rest", right: true }, { text: "It is sharpest on the very first bite" }, { text: "It only happens at night" }],
      why: "The pain builds up as you eat, rather than hurting from the first bite, and eases with rest.",
    },
  },
  {
    id: "gca-urgent",
    kicker: "Urgent",
    question: "What should I do if my sight changes?",
    hook: "Blurred, dim, double or lost vision needs help the same day, even if it lasts a few minutes.",
    short: "Changes in sight can mean the blood supply to the eye is under threat. See your doctor straight away, and if you cannot get an immediate appointment, go to A&E at the nearest hospital. If you suddenly cannot see from one or both eyes, go to A&E or call 999.",
    sections: [
      {
        heading: "Why sight matters most",
        paragraphs: [
          "Vision changes are the symptom PMRGCAuk worries about most, because they can signal that the blood supply to the eye is under threat. Blurred or dimmed vision, double vision, or brief episodes where sight goes dark are warning signs.",
          "Sight symptoms usually start in one eye but can move to affect both. Untreated, giant cell arteritis can lead to permanent sight loss or a stroke.",
        ],
      },
      {
        heading: "If your sight changes",
        paragraphs: [
          "If you have any changes or problems with your vision, see your doctor straight away. If you cannot get an immediate appointment, contact an out-of-hours doctor or go to the accident and emergency department at the nearest hospital straight away.",
          "Sudden changes in your sight need same-day attention, even if they last only a few minutes. If you cannot see your doctor, go to A&E.",
          "The NHS says to go to A&E or call 999 if you suddenly cannot see from one or both eyes. Do not drive yourself; ask someone to drive you or call 999 for an ambulance.",
        ],
      },
      {
        heading: "Other urgent signs",
        paragraphs: [
          "A new or unusual sensation in your head, or jaw pain when eating, also needs same-day medical attention. See a doctor immediately.",
          "If you think you might have giant cell arteritis, ask for an urgent GP appointment or get help from NHS 111. You can call 111 or get help from 111 online.",
          "If you have polymyalgia rheumatica and get a new headache, jaw pain or sight problems, contact a GP immediately, go to 111 online or call NHS 111.",
        ],
      },
      {
        heading: "Why speed matters",
        paragraphs: [
          "Treatment is started before giant cell arteritis is confirmed, because of the risk of vision loss. If you have problems with your vision, you should have a same-day appointment with an eye specialist at a hospital eye department.",
          "If you have visual symptoms, or pain in your jaw or tongue when eating, you may need to go to hospital urgently to have steroids through a drip into a vein.",
          "Blindness is rare after the first week of steroids, which is why immediate treatment is so important.",
        ],
      },
    ],
    helps: [
      "See your doctor straight away if your vision changes, even for a few minutes.",
      "If you cannot get an immediate appointment, go to A&E at the nearest hospital straight away.",
      "Go to A&E or call 999 if you suddenly cannot see from one or both eyes.",
      "Do not drive to A&E; ask someone to drive you or call 999.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you think you might have giant cell arteritis.",
    ],
    tryThisWeek: [
      "Know that sight changes need same-day help.",
      "Know when to go to A&E or call 999.",
      "Do not drive yourself to A&E.",
    ],
    ask: "If my sight changes, who should I contact first, and what should I tell them?",
    interactive: {
      kind: "scenarios",
      title: "What to do if...",
      scenarios: [
        {
          id: "dim",
          situation: "Your sight goes dim for a few minutes, then comes back. Your GP cannot see you today.",
          options: [{ text: "Go to A&E", best: true }, { text: "Wait to see if it happens again" }, { text: "Book an eye test for next month" }],
          why: "Sudden changes in your sight need same-day attention, even if they last only a few minutes. If you cannot see your doctor, go to A&E.",
        },
        {
          id: "cannot-see",
          situation: "You suddenly cannot see from one eye.",
          options: [{ text: "Go to A&E or call 999", best: true }, { text: "Drive yourself to the GP" }, { text: "Rest and check again tomorrow" }],
          why: "Go to A&E or call 999 if you suddenly cannot see from one or both eyes. Do not drive yourself.",
        },
        {
          id: "jaw",
          situation: "Your jaw aches more and more each time you chew.",
          options: [{ text: "See your doctor straight away", best: true }, { text: "Book a dentist for next week" }],
          why: "Jaw pain while eating needs same-day attention. If you cannot get an immediate appointment, go to A&E straight away.",
        },
        {
          id: "headache",
          situation: "A new kind of headache starts, unlike any you have had.",
          options: [{ text: "Ask for an urgent GP appointment or NHS 111", best: true }, { text: "Take painkillers and see how it goes" }],
          why: "If you think you might have giant cell arteritis, ask for an urgent GP appointment or get help from NHS 111.",
        },
      ],
    },
    sources: [NHS_GCA, AUK_GCA, PMRGCA_ALSO_GCA, PMRGCA_HEAD, NHS_VISION_LOSS, PMRGCA_GCA, NHS_PMR],
    quiz: {
      question: "Your vision goes dim for a few minutes and then returns. What should you do?",
      options: [{ text: "Get help the same day, at A&E if your doctor cannot see you", right: true }, { text: "Wait until it happens again" }, { text: "Mention it at your next routine review" }],
      why: "Sudden changes in your sight need same-day attention, even if they last only a few minutes. If you cannot see your doctor, go to A&E.",
    },
  },
  {
    id: "gca-diagnosis",
    kicker: "Diagnosis",
    question: "How is giant cell arteritis diagnosed?",
    hook: "Blood tests, a scan of the temples or a small biopsy, often after treatment has already started.",
    short: "A GP will ask about your symptoms, examine your temples and arrange blood tests, then refer you urgently to a specialist. An ultrasound scan of the arteries or a biopsy of the temporal artery can help confirm it. Steroids are usually started before the diagnosis is confirmed.",
    sections: [
      {
        heading: "Seeing a GP",
        paragraphs: [
          "A GP will ask about your symptoms and examine your temples. After some blood tests, you will be referred to a specialist.",
          "Treatment is started straight away if giant cell arteritis is suspected, and a GP can start it. You should also be referred promptly to a specialist to confirm the diagnosis and plan treatment.",
        ],
      },
      {
        heading: "Blood tests",
        paragraphs: [
          "Blood tests look for the level of inflammation in the body. Abnormal results do not confirm the diagnosis, but normal results make it less likely.",
          "Blood tests should be taken before steroids are started, even in an emergency, so the results are not affected by the treatment. The results do not need to be back before treatment begins.",
          "They will be repeated over time to check that the inflammation is controlled.",
        ],
      },
      {
        heading: "Scans",
        paragraphs: [
          "An ultrasound scan of the arteries around the temples, and sometimes in the armpit, can detect swelling in blood vessels. It helps confirm the diagnosis.",
          "You may have a chest X-ray to rule out other conditions, or a CT scan. A PET scan is not done routinely because it carries a large dose of radiation, but it may be used if other tests are negative or not possible.",
        ],
      },
      {
        heading: "Temporal artery biopsy",
        paragraphs: [
          "A biopsy may be done under local anaesthetic, where a small piece of the temporal artery is removed and checked for signs of inflammation. You can have it even if you have started treatment.",
          "Afterwards there is a wound about 3 to 4cm long, close to the hairline, covered with a dressing until a follow-up about a week later. You can wash your hair with care.",
          "Look out for signs of bleeding or infection, such as redness that spreads or a continuous discharge. Very rarely, the procedure damages nerves, causing numbness or a drooping brow.",
        ],
      },
      {
        heading: "Which specialist",
        paragraphs: [
          "Depending on your symptoms, the specialist could be a rheumatologist, an eye specialist called an ophthalmologist, a neurologist or an acute physician. Tests need to be done quickly, so you will probably get an urgent referral.",
        ],
      },
    ],
    helps: [
      "Ask for an urgent GP appointment or get help from NHS 111 if you think you might have giant cell arteritis.",
      "Blood tests are taken before steroids start, but the results do not need to be back first.",
      "After a biopsy, look out for redness that spreads or a continuous discharge.",
      "Discuss any concerns about the risks of a biopsy with your doctor beforehand.",
    ],
    tryThisWeek: [
      "Ask for an urgent appointment if worried.",
      "Watch a biopsy wound for spreading redness.",
      "Ask your doctor about biopsy risks.",
    ],
    ask: "Which tests will confirm the diagnosis, and how soon will I see a specialist?",
    interactive: {
      kind: "flip-cards",
      title: "The tests you may have",
      intro: "Tap each card to see what it shows.",
      cards: [
        { id: "blood", front: "Blood tests", when: "Before steroids start", back: "Look for inflammation. Normal results make giant cell arteritis less likely. Repeated later to check it is controlled." },
        { id: "ultrasound", front: "Ultrasound scan", when: "To help confirm it", back: "Uses sound waves to look at the arteries around the temples, and sometimes the armpit, for swelling." },
        { id: "biopsy", front: "Temporal artery biopsy", when: "To help confirm it", back: "Under local anaesthetic, a small piece of the artery is removed and checked. Possible even after treatment starts." },
        { id: "xray-ct", front: "Chest X-ray or CT scan", when: "To rule out other causes", back: "An X-ray can rule out other conditions. A CT scan can help diagnose it and look for complications." },
        { id: "pet", front: "PET scan", when: "If other tests are unclear", back: "Not routine, as it carries a large dose of radiation, but used if other tests are negative or not possible." },
      ],
    },
    sources: [NHS_GCA, AUK_GCA, PMRGCA_GCA, PMRGCA_FAQS],
    quiz: {
      question: "What does a normal blood test for inflammation mean?",
      options: [{ text: "Giant cell arteritis is less likely", right: true }, { text: "Giant cell arteritis is confirmed" }, { text: "No other tests are ever needed" }],
      why: "Abnormal results do not confirm the diagnosis, but normal results make it less likely.",
    },
  },
  {
    id: "gca-steroids",
    kicker: "Treatment",
    question: "Why are high-dose steroids started straight away?",
    hook: "Prednisolone protects your sight. It usually starts working within days.",
    short: "Giant cell arteritis is treated with a steroid called prednisolone, started straight away because of the risk of sight loss. The usual starting dose is 40mg to 60mg a day for three to four weeks. It is usually taken once a day with breakfast, and should never be stopped suddenly.",
    sections: [
      {
        heading: "The main treatment",
        paragraphs: [
          "Giant cell arteritis is treated with steroid medicine, usually prednisolone. There is no cure, but treatment with steroid tablets is very effective and usually starts to work within a few days.",
          "Steroid tablets slow down the activity of the immune system and reduce inflammation in blood vessels. Corticosteroids like prednisolone are not the same as anabolic steroids.",
        ],
      },
      {
        heading: "Starting straight away",
        paragraphs: [
          "Because of the risk of sight loss or a stroke, steroids are started straight away, before the diagnosis is confirmed. Blood tests are taken first, but the results do not need to be back.",
          "A delay in starting steroids can cause blindness or stroke in people with giant cell arteritis. Complications are less likely if treatment starts immediately after symptoms begin.",
        ],
      },
      {
        heading: "The starting dose",
        paragraphs: [
          "The usual starting dose is 40mg to 60mg of prednisolone a day, usually continued for three to four weeks. Very small or very large people may have a slightly lower or higher dose.",
          "PMRGCAuk says specialists have generally agreed 40mg as the starting dose, or 60mg for people with eye symptoms, as the lowest dose that gets symptoms under control.",
          "If you develop visual symptoms, or pain in your jaw or tongue when eating, you may need to go to hospital urgently for steroids through a drip into a vein.",
        ],
      },
      {
        heading: "How to take it",
        paragraphs: [
          "Unless your doctor or pharmacist says otherwise, it is best taken as a single dose once a day, with breakfast, so it does not upset your stomach and is less likely to affect your sleep. For a 40mg dose, that may mean 8 tablets taken at the same time.",
          "If you miss a dose, take it as soon as you remember. If you do not remember until the next day, skip the missed dose, and do not take a double dose.",
          "Do not eat real liquorice while taking prednisolone, as it is thought to increase the amount of prednisolone in the body.",
        ],
      },
      {
        heading: "Never stop suddenly",
        paragraphs: [
          "Do not suddenly stop taking steroids unless your doctor tells you to. Stopping a prescribed course could make you very ill.",
        ],
      },
    ],
    helps: [
      "Take prednisolone once a day with breakfast, unless your doctor or pharmacist says otherwise.",
      "If you forget doses often, set an alarm or ask your pharmacist about other ways to remember.",
      "Do not eat real liquorice while taking prednisolone.",
      "Do not suddenly stop taking steroids unless your doctor tells you to.",
      "If you develop sight problems or jaw pain when eating, get urgent help, as you may need steroids through a drip.",
    ],
    tryThisWeek: [
      "Take prednisolone with breakfast.",
      "Set an alarm for your daily dose.",
      "Avoid real liquorice.",
    ],
    ask: "What dose am I starting on, and what should I do if my sight changes while I am taking it?",
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
          why: "If you do not remember until the next day, skip the missed dose and take the next one at the usual time.",
        },
        {
          id: "feel-better",
          situation: "Your headache has gone and you want to stop the tablets.",
          options: [{ text: "Keep taking them and talk to your doctor", best: true }, { text: "Stop the tablets now" }],
          why: "Do not suddenly stop taking steroids unless your doctor tells you to. Stopping a prescribed course could make you very ill.",
        },
        {
          id: "sight",
          situation: "A week into treatment, your jaw hurts when you eat and your vision blurs.",
          options: [{ text: "Get urgent help today", best: true }, { text: "Wait for your next appointment" }],
          why: "If you develop visual symptoms, or pain in your jaw or tongue when eating, you may need to go to hospital urgently for steroids through a drip.",
        },
      ],
    },
    sources: [NHS_GCA, AUK_GCA, PMRGCA_GCA, PMRGCA_FAQS, NHS_PRED_HOW, NHS_PRED_QUESTIONS, NHS_PRED_ABOUT],
    quiz: {
      question: "Why are steroids started before giant cell arteritis is confirmed?",
      options: [{ text: "Because of the risk of sight loss or a stroke", right: true }, { text: "Because the tests need steroids to work" }, { text: "Because the dose is very low" }],
      why: "Because of the risk of sight loss or a stroke, steroids are started straight away, before the diagnosis is confirmed.",
    },
  },
  {
    id: "gca-reducing",
    kicker: "Treatment",
    question: "How is the steroid dose reduced over time?",
    hook: "A high dose for a few weeks, then a long, gentle step down that often takes years.",
    short: "After the first three to four weeks, if you are well, your doctor starts to reduce the dose gradually. It usually takes one to three years to come off steroids, mostly on a low dose, and some people need a low dose for longer. Do not change the dose yourself, because your body needs time to make its own steroid again.",
    sections: [
      {
        heading: "Two stages",
        paragraphs: [
          "Treatment has two stages: a high dose for a few weeks to bring symptoms under control, then a lower dose over a longer period, possibly several years.",
          "If you are well after the first three to four weeks, and blood tests show your condition has improved, your doctor will start reducing the dose. A specialist will want to see you regularly during this phase.",
        ],
      },
      {
        heading: "How long it takes",
        paragraphs: [
          "It usually takes one to three years to come off steroids altogether, and for most of this time you will be on a low dose. PMRGCAuk says coming off completely may take 2 years.",
          "It is not always possible to stop completely. Some people need a low dose for a long time, and a small number need steroids for the rest of their life.",
        ],
      },
      {
        heading: "A plan that fits you",
        paragraphs: [
          "Your specialist will make a plan for you to come off steroids gradually. Ideally the taper should be tailored to you, especially for giant cell arteritis.",
          "PMRGCAuk says that once you get to about 10mg, tapering should be very gentle, no more than 1 to 2mg at a time. People who reduce too quickly may have flares.",
          "Keeping a diary of your symptoms can help your doctor with decisions about tapering.",
        ],
      },
      {
        heading: "When some symptoms return",
        paragraphs: [
          "Some symptoms may return when you drop your dose. This does not necessarily mean you have dropped it too far, so give it a few days and discuss how your body reacts with your doctor.",
          "Steroids may have masked the natural aches and stiffness of getting older, which can be felt as the dose comes down. This usually gets better as the body adjusts.",
        ],
      },
      {
        heading: "Why not to stop suddenly",
        paragraphs: [
          "Your body stops producing its own steroid, cortisol, while you take steroid tablets, and needs time to start again as the dose is reduced. So do not stop or change the dose yourself, even if your symptoms have completely cleared.",
          "Stopping suddenly can cause withdrawal symptoms such as severe tiredness, weakness, body aches and joint pain.",
        ],
      },
    ],
    helps: [
      "Agree a tapering plan that is tailored to you with your specialist.",
      "Keep a diary of your symptoms to help with decisions about tapering.",
      "If symptoms return a little after a dose drop, give it a few days and discuss it with your doctor.",
      "Do not stop or change your dose unless your doctor advises it, even if you feel well.",
    ],
    tryThisWeek: [
      "Ask about your tapering plan.",
      "Start a symptom diary.",
      "Give a dose drop a few days.",
    ],
    ask: "What is my tapering plan, and how will we decide each step?",
    interactive: {
      kind: "timeline",
      title: "A typical course of prednisolone",
      steps: [
        { id: "start", when: "The first days", title: "A high starting dose", points: ["Usually 40mg to 60mg a day", "Usually starts to work within a few days"] },
        { id: "review", when: "3 to 4 weeks", title: "Checking you are well", points: ["Blood tests show if it has improved", "Your doctor starts reducing the dose"] },
        { id: "reduce", when: "The months after", title: "Reducing in stages", points: ["A plan tailored to you", "Regular visits to your specialist"] },
        { id: "gentle", when: "From about 10mg", title: "Very gentle steps", points: ["No more than 1 to 2mg at a time, says PMRGCAuk", "Give each drop a few days"] },
        { id: "finish", when: "1 to 3 years", title: "Coming off", points: ["Mostly on a low dose", "Some people need a low dose for longer"] },
      ],
    },
    sources: [NHS_GCA, AUK_GCA, PMRGCA_GCA, PMRGCA_FAQS, NHS_PRED_HOW, NHS_STEROIDS, PMRGCA_LIVING],
    quiz: {
      question: "How long does it usually take to come off steroids altogether?",
      options: [{ text: "One to three years", right: true }, { text: "About a week" }, { text: "Three to four weeks" }],
      why: "It usually takes one to three years to come off steroids altogether, and for most of this time you will be on a low dose.",
    },
  },
  {
    id: "gca-other-medicines",
    kicker: "Treatment",
    question: "Which other medicines help with giant cell arteritis?",
    hook: "Some medicines let the steroid dose come down; others protect your heart, stomach and bones.",
    short: "Steroids are the first treatment, but your doctor may add a medicine such as tocilizumab or methotrexate if symptoms come back or steroids are needed for a long time. Other medicines protect you while you take prednisolone, such as low-dose aspirin, a stomach-protecting tablet and a bone medicine.",
    sections: [
      {
        heading: "Why other medicines are used",
        paragraphs: [
          "Steroids are the first treatment, and there is not yet an alternative first-line treatment. Your doctor may suggest another medicine to help reduce the steroid dose.",
          "This may happen if your symptoms come back, if they do not improve despite steroids, or if you need steroids for a long time. For relapsing disease, PMRGCAuk says medicine in addition to steroids is needed, commonly methotrexate or tocilizumab.",
        ],
      },
      {
        heading: "Tocilizumab",
        paragraphs: [
          "Tocilizumab is a biological therapy that blocks a protein called IL-6, which can cause inflammation. For giant cell arteritis it is given as an injection under the skin once a week, in the thigh or upper arm.",
          "It is an option if the condition has not responded to steroids alone, or has come back after steroid treatment, and it is used with steroids that are gradually reduced. It should not be continued for more than one year in giant cell arteritis.",
          "It can increase the risk of infections and may hide the usual signs, such as a high temperature. Contact your rheumatology team or GP if you think you have an infection, and expect a blood test every four weeks.",
        ],
      },
      {
        heading: "Methotrexate and other DMARDs",
        paragraphs: [
          "Other options include disease-modifying drugs, called DMARDs, such as methotrexate, leflunomide, azathioprine and mycophenolate mofetil. They slow down an immune system that is misfiring.",
          "Methotrexate is taken on the same day once a week. It can take up to 12 weeks before you notice a difference, but keep taking it.",
        ],
      },
      {
        heading: "Medicines that protect you",
        paragraphs: [
          "Low-dose aspirin may be used to reduce the risk of a stroke or heart attack, and Arthritis UK says it helps protect against loss of vision. Discuss with your doctor whether aspirin is safe for you.",
          "Proton pump inhibitors lower the risk of indigestion or a stomach ulcer from prednisolone. Bisphosphonates reduce the risk of osteoporosis.",
          "Low-dose aspirin comes as 75mg tablets, usually taken once a day.",
        ],
      },
      {
        heading: "Trials of new treatments",
        paragraphs: [
          "You may be offered a new medicine as part of a clinical trial. Before agreeing, make sure you fully understand what it involves by talking to your doctor.",
        ],
      },
    ],
    helps: [
      "Ask your doctor whether another medicine could help if your symptoms keep coming back.",
      "Discuss with your doctor whether low-dose aspirin is safe for you.",
      "Contact your rheumatology team or GP if you think you have an infection while on tocilizumab.",
      "Carry a biological therapy alert card if you take tocilizumab.",
      "Tell anyone else who treats you that you take tocilizumab.",
    ],
    tryThisWeek: [
      "Ask about medicines that lower the steroid dose.",
      "Ask whether aspirin is safe for you.",
      "Get a biological therapy alert card.",
    ],
    ask: "Would tocilizumab or methotrexate help me, and do I need aspirin, a stomach tablet or bone protection?",
    interactive: {
      kind: "flip-cards",
      title: "Medicines alongside steroids",
      intro: "Tap each card to see what it does.",
      cards: [
        { id: "tocilizumab", front: "Tocilizumab", when: "If it relapses or steroids alone fail", back: "A weekly injection that blocks IL-6. Used with reducing steroids, for no more than one year." },
        { id: "methotrexate", front: "Methotrexate", when: "To help reduce steroids", back: "A DMARD taken once a week. It can take up to 12 weeks to notice a difference." },
        { id: "aspirin", front: "Low-dose aspirin", when: "If your doctor says it is safe", back: "Reduces the risk of a stroke or heart attack, and helps protect against loss of vision." },
        { id: "ppi", front: "Proton pump inhibitor", when: "While taking prednisolone", back: "Lowers the risk of indigestion or a stomach ulcer from prednisolone." },
        { id: "bisphosphonate", front: "Bisphosphonate", when: "While taking prednisolone", back: "Reduces the risk of osteoporosis by slowing the loss of bone." },
      ],
    },
    sources: [NHS_GCA, AUK_GCA, AUK_TOCILIZUMAB, PMRGCA_GCA, AUK_METHOTREXATE, NHS_ASPIRIN],
    quiz: {
      question: "For how long should tocilizumab be continued for giant cell arteritis?",
      options: [{ text: "No more than one year", right: true }, { text: "For life" }, { text: "Only one injection" }],
      why: "It should not be continued for more than one year in giant cell arteritis.",
    },
  },
  {
    id: "gca-side-effects",
    kicker: "Side effects",
    question: "What side effects can steroids cause, and how are my bones protected?",
    hook: "The benefits far outweigh the risks, and regular checks catch side effects early.",
    short: "The higher the dose and the longer you take prednisolone, the greater the chance of side effects. Common ones include indigestion, poor sleep, mood changes and some weight gain. Over months it can thin the bones and raise blood sugar and blood pressure, so you may be offered bone protection and regular checks.",
    sections: [
      {
        heading: "Benefits and risks",
        paragraphs: [
          "Giant cell arteritis is potentially very serious, so the benefits of steroids far outweigh the risks. Still, the higher the dose and the longer you take it, the greater the chance of side effects.",
          "The early high dose and later low dose can cause changes in appearance, facial flushing, poor sleep, indigestion, some weight gain, dizziness, difficulty concentrating and mood changes.",
        ],
      },
      {
        heading: "Mood changes",
        paragraphs: [
          "Talk to your doctor or contact 111 if you notice mood changes, such as feeling depressed, anxious, confused or high. The higher the dose, the more intense the mood changes can be.",
          "Call 999 or go to A&E if you have thoughts about harming yourself or ending your life.",
        ],
      },
      {
        heading: "Protecting your bones",
        paragraphs: [
          "Steroids can cause bone to break down faster than it is made, raising the risk of osteoporosis and broken bones. Steroid tablets are more likely to do this if taken for more than three months.",
          "If you are on steroids for longer than three months, you may need treatment to protect your bones, such as calcium and vitamin D supplements or bisphosphonates. Discuss your bone health with your doctor when steroids are first prescribed.",
          "Adults need 700mg of calcium a day, says the NHS, and Arthritis UK says to have between 700 and 1,200mg a day with this condition. Weight-bearing exercise such as walking, and not smoking, also help keep bones strong.",
        ],
      },
      {
        heading: "Blood sugar, blood pressure and eyes",
        paragraphs: [
          "Long-term steroids can lead to diabetes, high blood pressure, cataracts and glaucoma. Your doctor may invite you for regular blood sugar and blood pressure checks, and PMRGCAuk says these problems will be monitored.",
          "Visit an optometrist every 12 months to check for glaucoma and cataracts. Call a doctor or 111 straight away if your eyesight changes.",
        ],
      },
      {
        heading: "Infections, stomach and weight",
        paragraphs: [
          "Steroids can make infections more likely and more serious. Contact your doctor if you have not had chickenpox and come into contact with someone who has chickenpox or shingles, as you may need antiviral treatment.",
          "Take prednisolone with food to reduce stomach problems. A proton pump inhibitor can reduce the risk of indigestion.",
          "Try to eat well without increasing your portion sizes, and exercise regularly. Do not skip meals or crash diet to deal with weight gain from steroids.",
        ],
      },
    ],
    helps: [
      "Take prednisolone with food in the morning.",
      "Ask your doctor whether you need treatment to protect your bones.",
      "Go for regular blood sugar and blood pressure checks.",
      "Visit an optometrist every 12 months to check for glaucoma and cataracts.",
      "Tell your doctor if you come into contact with chickenpox or shingles.",
      "Report any suspected side effect using the Yellow Card safety scheme.",
    ],
    tryThisWeek: [
      "Take your tablets with breakfast.",
      "Ask about bone protection.",
      "Book an eye check with an optometrist.",
    ],
    ask: "Do I need bone protection, and how often will my blood sugar, blood pressure and eyes be checked?",
    interactive: {
      kind: "signs",
      title: "Side effects to report",
      intro: "Tick any you have noticed. Call a doctor or 111 straight away about these.",
      signs: ["A high temperature or feeling shivery", "A wound that will not heal", "Very thirsty and peeing more often", "Breath that smells like fruit", "A puffy, rounded face", "Muscle weakness or cramps", "Changes in your eyesight", "Swelling in your arms or legs", "Unusual bruising or bleeding", "Feeling low, anxious or confused"],
      after: "Call a doctor or call 111 straight away about these. Call 999 or go to A&E if you are vomiting blood, or have thoughts about harming yourself or ending your life.",
      copyHeading: "Side effects to tell my doctor",
    },
    sources: [AUK_GCA, NHS_PRED_SIDE, NHS_PRED_QUESTIONS, ROS_STEROIDS, NHS_STEROIDS, PMRGCA_GCA, PMRGCA_FAQS, NHS_OSTEO_PREVENTION, PMRGCA_EXERCISE],
    quiz: {
      question: "After how long on steroids may you need treatment to protect your bones?",
      options: [{ text: "Longer than three months", right: true }, { text: "After the first dose" }, { text: "Only after ten years" }],
      why: "If you are on steroids for longer than three months, you may need treatment to protect your bones.",
    },
  },
  {
    id: "gca-relapse",
    kicker: "Flares",
    question: "What happens if my symptoms come back?",
    hook: "A relapse is common, especially in the first 18 months, and it is treatable.",
    short: "If the inflammation returns, it is called a relapse, and your steroid dose may need to go up. Relapse is most common within the first 18 months. Every relapse that needs more steroid should be properly assessed, and new head, jaw or sight symptoms need urgent help.",
    sections: [
      {
        heading: "What a relapse is",
        paragraphs: [
          "If inflammation in the blood vessels returns, this is called a relapse, and your steroid dose may need to be increased. Relapse is most common within the first 18 months of treatment.",
          "Some people will relapse and need steroids for longer. Your dose may go up if your symptoms get worse.",
        ],
      },
      {
        heading: "Getting it checked",
        paragraphs: [
          "PMRGCAuk says every relapse that needs a rise in prednisolone should be formally diagnosed, with assessment from a rheumatologist. The tapering plan will also need to change.",
          "Going up and down repeatedly should be avoided unless a relapse has been formally diagnosed, because it is the total dose over time that needs to be kept low.",
          "You will have regular follow-ups to see how you are doing and check for side effects.",
        ],
      },
      {
        heading: "Not every ache is a relapse",
        paragraphs: [
          "Some symptoms may return when you drop your dose. This does not necessarily mean you have dropped it too far, so give it a few days and discuss it with your doctor.",
          "Taking paracetamol for a few days, if you can, is better than putting your steroid dose back up, says PMRGCAuk. Discuss pain relief with your doctor.",
        ],
      },
      {
        heading: "If it keeps coming back",
        paragraphs: [
          "For relapsing disease, medicine is needed in addition to steroids, commonly methotrexate or tocilizumab. Doing the same thing again is unlikely to produce a different result.",
          "If you have frequent flares despite steroids, your doctor may want more tests and scans to check other large blood vessels.",
        ],
      },
      {
        heading: "Signs that cannot wait",
        paragraphs: [
          "If you notice a new or unusual feeling in your head, jaw pain when eating, or any sudden change in your sight, do not wait to see if it passes. Speak to a GP urgently or go to A&E.",
        ],
      },
    ],
    helps: [
      "If your treatment is not working as expected, do not wait for your next routine appointment to mention it.",
      "Ask for every relapse that needs a higher dose to be assessed by a rheumatologist.",
      "Give a dose drop a few days, and discuss how your body reacts with your doctor.",
      "Discuss pain relief, such as paracetamol for a few days, with your doctor.",
      "Speak to a GP urgently or go to A&E for new head, jaw or sight symptoms.",
    ],
    tryThisWeek: [
      "Mention returning symptoms early.",
      "Ask about a rheumatology assessment.",
      "Discuss pain relief with your doctor.",
    ],
    ask: "If my symptoms come back, how will we tell whether it is a relapse, and what changes then?",
    interactive: {
      kind: "scenarios",
      title: "Is it a relapse?",
      scenarios: [
        {
          id: "after-drop",
          situation: "Some aches come back two days after a dose reduction.",
          options: [{ text: "Give it a few days and talk to your doctor", best: true }, { text: "Go back to your old dose yourself" }],
          why: "Some symptoms may return when you drop your dose. This does not necessarily mean you have dropped it too far.",
        },
        {
          id: "not-working",
          situation: "Your symptoms are creeping back, and your next review is in two months.",
          options: [{ text: "Mention it now", best: true }, { text: "Wait for the review" }],
          why: "If your treatment is not working as expected, do not wait for your next routine appointment to mention it.",
        },
        {
          id: "sight",
          situation: "Your vision blurs for a moment while you are reducing your dose.",
          options: [{ text: "Speak to a GP urgently or go to A&E", best: true }, { text: "See if it passes" }],
          why: "For any sudden change in your sight, do not wait to see if it passes. Speak to a GP urgently or go to A&E.",
        },
      ],
    },
    sources: [AUK_GCA, PMRGCA_GCA, PMRGCA_FAQS, NHS_GCA, PMRGCA_ALSO_GCA, PMRGCA_HEAD, NHS_PRED_HOW],
    quiz: {
      question: "When are relapses most common?",
      options: [{ text: "Within the first 18 months of treatment", right: true }, { text: "In the first week only" }, { text: "Only after steroids have stopped" }],
      why: "Relapse is most common within the first 18 months of treatment.",
    },
  },
  {
    id: "gca-pmr-link",
    kicker: "Related",
    question: "How is giant cell arteritis linked to polymyalgia rheumatica?",
    hook: "Two closely related conditions that often turn up together, with very different urgency.",
    short: "Polymyalgia rheumatica (PMR) causes pain and stiffness around the shoulders, neck and hips. Up to 1 in 5 people with it develop giant cell arteritis, and up to half of people with giant cell arteritis have PMR-like symptoms. If you have PMR, know the warning signs of giant cell arteritis.",
    sections: [
      {
        heading: "Two linked conditions",
        paragraphs: [
          "Polymyalgia rheumatica, or PMR, causes pain, stiffness and inflammation in the muscles around the shoulders, neck and hips. It is often worse in the morning.",
          "Giant cell arteritis and polymyalgia rheumatica are closely related inflammatory conditions. Often people have both, and some people with giant cell arteritis also develop polymyalgia rheumatica.",
        ],
      },
      {
        heading: "How often they overlap",
        paragraphs: [
          "Up to 1 in 5 people with polymyalgia rheumatica develop giant cell arteritis, says the NHS. People treated for polymyalgia rheumatica may develop it, possibly some years later.",
          "Up to half of people with giant cell arteritis have symptoms like polymyalgia rheumatica at some time.",
        ],
      },
      {
        heading: "Keeping it in mind",
        paragraphs: [
          "Polymyalgia rheumatica often improves dramatically within days of starting steroids. If yours does not, or improves and then slips away, it is worth asking whether it could also be giant cell arteritis.",
          "Talk to your GP about a referral to a rheumatologist if your polymyalgia rheumatica is not responding to steroids as it should, does not fit the usual pattern, needs unusually high or long-term doses, or relapses as you reduce.",
        ],
      },
      {
        heading: "Different urgency",
        paragraphs: [
          "Unlike polymyalgia rheumatica, giant cell arteritis needs immediate medical attention. If you have polymyalgia rheumatica and get a new or frequent headache, jaw pain when eating or talking, or problems with your sight, contact a GP immediately, go to 111 online or call NHS 111.",
          "Doses differ too. PMRGCAuk says the usual starting dose is 15mg a day for polymyalgia rheumatica, and 40mg to 60mg a day for giant cell arteritis.",
        ],
      },
    ],
    helps: [
      "If you have polymyalgia rheumatica, make sure you know the key symptoms of giant cell arteritis.",
      "Report any unusual headache or jaw pain to your GP immediately.",
      "Talk to your GP about a rheumatology referral if your polymyalgia rheumatica is not behaving as expected.",
      "If your treatment is not working as expected, do not wait for your next routine appointment to mention it.",
    ],
    tryThisWeek: [
      "Learn the key symptoms of giant cell arteritis.",
      "Report unusual headache or jaw pain.",
      "Ask about a rheumatology referral.",
    ],
    ask: "I have polymyalgia rheumatica: which signs of giant cell arteritis should I watch for, and who do I call?",
    interactive: {
      kind: "flip-cards",
      title: "Two related conditions",
      intro: "Tap each card to see how they differ and connect.",
      cards: [
        { id: "pmr", front: "Polymyalgia rheumatica", when: "Stiff shoulders, neck and hips", back: "Pain and stiffness, often worse in the morning. Usual starting dose 15mg a day, says PMRGCAuk." },
        { id: "gca", front: "Giant cell arteritis", when: "Headache, scalp, jaw, sight", back: "Inflamed arteries that need immediate medical attention. Usual starting dose 40mg to 60mg a day." },
        { id: "both", front: "Having both", when: "Common", back: "Up to 1 in 5 people with PMR develop GCA. Up to half of people with GCA have PMR-like symptoms." },
        { id: "referral", front: "Asking for a referral", when: "If PMR is not behaving as expected", back: "Talk to your GP about a rheumatologist if steroids are not working as they should, or it keeps relapsing." },
      ],
    },
    sources: [NHS_PMR, AUK_GCA, PMRGCA_GCA, PMRGCA_ALSO_GCA, PMRGCA_PMR, NHS_GCA, PMRGCA_LIVING],
    quiz: {
      question: "How many people with polymyalgia rheumatica develop giant cell arteritis, says the NHS?",
      options: [{ text: "Up to 1 in 5", right: true }, { text: "Everyone" }, { text: "Nobody" }],
      why: "Up to 1 in 5 people with polymyalgia rheumatica develop giant cell arteritis, says the NHS.",
    },
  },
  {
    id: "gca-steroid-card",
    kicker: "Safety",
    question: "Why carry a steroid card, and what if I am ill?",
    hook: "Long-term steroids change how your body copes with illness, injury and operations. The card tells doctors.",
    short: "If you take prednisolone for longer than 3 weeks, or more than 40mg a day, you will be given a blue steroid card, and you may also need a red steroid emergency card. Carry it and show it to anyone treating you. Being ill, injured or having an operation can be dangerous on steroids, so get advice early.",
    sections: [
      {
        heading: "The blue steroid card",
        paragraphs: [
          "If you take prednisolone for longer than 3 weeks, or on a high dose of more than 40mg a day, your doctor or pharmacist will give you a blue steroid treatment card. With giant cell arteritis you should always carry a card that says what dose you are on.",
          "The card is the size of a credit card. It gives details of your doctor, your dose and how long treatment will last, and tells you how to reduce the risk of side effects. Make sure any change to your dose is updated on it.",
        ],
      },
      {
        heading: "The red emergency card",
        paragraphs: [
          "Steroid medicines can mean your adrenal glands do not make enough of some hormones the body needs, such as cortisol. This is known as adrenal insufficiency.",
          "PMRGCAuk says prednisolone above 15mg for 15 days suppresses the body's natural cortisol, and the longer you have been on steroids, the less likely the adrenal glands are to recover.",
          "Your doctor or pharmacist will assess your risk, and may recommend a red steroid emergency card. In England, hard copies are available from community pharmacies, your GP or hospital teams.",
        ],
      },
      {
        heading: "When you are ill",
        paragraphs: [
          "Steroid treatment can stop the body producing natural hormones, which can be dangerous if you get ill, have an accident or need an operation. Keeping the card with you helps any doctor who treats you manage your care correctly.",
          "Prednisolone makes infections more likely, so tell your doctor if you get symptoms of an infection. Keep away from people with measles, chickenpox or shingles, and tell your doctor straight away if you come into contact with them.",
          "Call a doctor or 111 straight away if you have a very upset stomach or are being sick, very bad dizziness or fainting, muscle weakness or feeling very tired. These can be signs of adrenal gland problems.",
        ],
      },
      {
        heading: "Showing the card",
        paragraphs: [
          "If you need medical or dental treatment, surgery or a procedure, show your steroid emergency card, so the team knows you are on steroids and can give you extra steroids if needed.",
          "If you are rushed to hospital in an emergency, doctors there need to know you are on steroids, because steroids can affect the body's response to an injury.",
          "If you are having an operation, do not stop your steroids without speaking to your doctor or surgeon first. Your dose may need to change before it.",
        ],
      },
    ],
    helps: [
      "Ask for a blue steroid card if you take prednisolone for longer than 3 weeks or at a high dose.",
      "Always carry a steroid card that says what dose you are on.",
      "Ask your pharmacist or doctor whether you also need the red steroid emergency card.",
      "Show your card to any doctor, dentist or surgeon who treats you.",
      "Call a doctor or 111 straight away if you are being sick, very dizzy, or have muscle weakness.",
      "Make sure any change to your dose is updated on the card.",
    ],
    tryThisWeek: [
      "Put your steroid card in your wallet.",
      "Ask about the red emergency card.",
      "Update the card when your dose changes.",
    ],
    ask: "Do I need the red steroid emergency card, and what should I do if I am ill or need an operation?",
    interactive: {
      kind: "flip-cards",
      title: "Your steroid cards",
      intro: "Tap each card to see when it matters.",
      cards: [
        { id: "blue", front: "Blue steroid treatment card", when: "Over 3 weeks, or over 40mg a day", back: "Shows your doctor, your dose and how long treatment will last. Keep it updated when the dose changes." },
        { id: "red", front: "Red steroid emergency card", when: "If your doctor or pharmacist advises it", back: "For a risk of adrenal insufficiency. Show it before treatment or surgery so extra steroids can be given." },
        { id: "ill", front: "If you are ill", when: "Sickness, dizziness, weakness", back: "Call a doctor or 111 straight away. These can be signs of adrenal gland problems." },
        { id: "operation", front: "Operations and dentists", when: "Before any procedure", back: "Show your card. Do not stop steroids without your doctor or surgeon; your dose may need to change." },
      ],
    },
    sources: [NHS_PRED_QUESTIONS, NHS_PRED_ABOUT, AUK_GCA, AUK_STEROIDS, PMRGCA_CARD, NHS_PRED_SIDE, PMRGCA_FAQS, NHS_STEROIDS],
    quiz: {
      question: "When should you show your steroid emergency card?",
      options: [{ text: "Before medical or dental treatment, or surgery", right: true }, { text: "Only when you collect a prescription" }, { text: "Never, it stays at home" }],
      why: "If you need medical or dental treatment, surgery or a procedure, show your steroid emergency card, so the team knows you are on steroids and can give you extra steroids if needed.",
    },
  },
  {
    id: "gca-support",
    kicker: "Living well",
    question: "Where can I get support, and how do I manage everyday life?",
    hook: "You do not have to face it alone. Volunteers who have been there are a phone call away.",
    short: "A diagnosis of giant cell arteritis can feel overwhelming. PMRGCAuk runs a helpline, local and online support groups and an online forum. Most people can keep working with some adjustments, and staying active at a gentle pace, eating well and not smoking all help.",
    sections: [
      {
        heading: "It can feel overwhelming",
        paragraphs: [
          "Many people feel overwhelmed at first. Giant cell arteritis can be frightening, with sudden severe headaches and the possibility of losing sight.",
          "Living with it can affect relationships, hobbies, work, independence and wellbeing. Many people fear losing their sight or having a relapse, and it can be hard to know which symptoms come from the condition and which from steroids.",
        ],
      },
      {
        heading: "People who understand",
        paragraphs: [
          "The PMRGCAuk helpline is run by volunteers with experience of the conditions. It is open Monday to Friday, 9am to 5pm, on 0300 111 5090, but it cannot give medical advice.",
          "Local support groups are run by trained volunteers with lived experience, and some groups meet online on Zoom. The charity also hosts a free online forum, called HealthUnlocked, and offers a free information pack.",
        ],
      },
      {
        heading: "Work",
        paragraphs: [
          "PMRGCAuk says you can usually carry on working, depending on your job and the support from your employer. You may need adjustments, such as going part-time for a while, or some sick leave to give your body time to recover.",
          "Access to Work can help you get or stay in work if you have a health condition, including a grant towards practical support.",
        ],
      },
      {
        heading: "Everyday life",
        paragraphs: [
          "Keep as fit and active as you can, as this helps prevent osteoporosis and may help avoid weight gain and muscle weakness from steroids. Fatigue can be a problem, and pacing activities and setting realistic goals can help.",
          "When steroids work well, it is tempting to return to your old level of activity. The PMRGCAuk helpline suggests thinking of your earlier level, and then thinking of half of that.",
          "Eat a healthy, balanced diet, and do not skip meals or crash diet. It is especially important not to smoke, because people with giant cell arteritis already have a slightly higher risk of stroke.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "Do not drive, cycle or operate machinery if your eyesight is affected. Keep a diary of your symptoms to help your doctor understand your progress.",
          "Be kind to yourself. Something caused your immune system to go out of balance, and there was nothing you could have done to avoid it.",
        ],
      },
    ],
    helps: [
      "Call the PMRGCAuk helpline on 0300 111 5090, Monday to Friday, 9am to 5pm.",
      "Find a local or online support group, or join the HealthUnlocked forum.",
      "Talk things over with occupational health or your union about work, if you can.",
      "Aim for about half of your earlier level of activity.",
      "Do not drive if your eyesight is affected.",
      "Keep a diary of your symptoms.",
    ],
    tryThisWeek: [
      "Save the helpline number.",
      "Look for a support group near you.",
      "Start a symptom diary.",
    ],
    ask: "Is there a specialist nurse or support group you would recommend, and can I keep working as I am?",
    interactive: {
      kind: "flip-cards",
      title: "Where to find support",
      intro: "Tap each card to see what it offers.",
      cards: [
        { id: "helpline", front: "PMRGCAuk helpline", when: "Monday to Friday, 9am to 5pm", back: "Volunteers with experience of PMR or GCA, on 0300 111 5090. They cannot give medical advice." },
        { id: "groups", front: "Local support groups", when: "Meeting across the UK", back: "Run by trained volunteers with lived experience: a chance to share experiences and practical tips." },
        { id: "online", front: "Online groups and forum", when: "From home", back: "Zoom groups open to everyone, and the free HealthUnlocked forum to share your journey." },
        { id: "pack", front: "Information pack", when: "After diagnosis", back: "Free, by download or post: guidelines, support groups, the helpline and more." },
        { id: "atw", front: "Access to Work", when: "If your health affects your job", back: "A government grant that can help pay for practical support to get or stay in work." },
      ],
    },
    sources: [PMRGCA_HELPLINE, PMRGCA_GROUPS, PMRGCA_ONLINE, PMRGCA_FORUM, PMRGCA_INFO_PACK, PMRGCA_LIVING, PMRGCA_ALONE, PMRGCA_FAQS, PMRGCA_EXERCISE, AUK_GCA, GOV_ATW, NHS_PRED_QUESTIONS],
    quiz: {
      question: "What does the PMRGCAuk helpline suggest when getting active again?",
      options: [{ text: "About half of your earlier level of activity", right: true }, { text: "Go straight back to your old routine" }, { text: "Avoid all activity" }],
      why: "The PMRGCAuk helpline suggests thinking of your earlier level, and then thinking of half of that.",
    },
  },
];
