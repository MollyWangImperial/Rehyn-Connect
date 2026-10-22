import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Knee ligament injury page's pieces (content/library-conditions/body-more.ts). Every
// sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's `sources`;
// nothing is added that those pages do not say. Most of it comes from the NHS (its ACL surgery guide, knee pain,
// sprains and strains, dislocated kneecap, MRI scan and arthroscopy pages) and NHS inform, with Arthritis UK (the
// charity formerly called Versus Arthritis), the Chartered Society of Physiotherapy, South Tees Hospitals' knee
// injury leaflet and the Wrightington, Wigan and Leigh hospitals' ACL reconstruction leaflet. Exercises are described
// only as the sources describe them. General information only; it never replaces what a person's own GP,
// physiotherapist or surgeon tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const inform = (label: string, path: string): LearnSource => ({ label: `NHS inform: ${label}`, url: `https://www.nhsinform.scot/illnesses-and-conditions/muscle-bone-and-joints/${path}` });
const au = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const csp = (label: string, path: string): LearnSource => ({ label: `Chartered Society of Physiotherapy: ${label}`, url: `https://www.csp.org.uk/conditions/knee-pain/${path}` });

const NHS_ACL_WHAT = nhs("What is ACL (anterior cruciate ligament) surgery?", "tests-and-treatments/acl-anterior-cruciate-ligament-surgery/what-it-is/");
const NHS_ACL_WHY = nhs("Why ACL surgery is done", "tests-and-treatments/acl-anterior-cruciate-ligament-surgery/why-its-done/");
const NHS_ACL_ALT = nhs("Alternatives to ACL surgery", "tests-and-treatments/acl-anterior-cruciate-ligament-surgery/alternatives/");
const NHS_ACL_PREP = nhs("Preparing for ACL surgery", "tests-and-treatments/acl-anterior-cruciate-ligament-surgery/preparing/");
const NHS_ACL_HOW = nhs("How ACL surgery is done", "tests-and-treatments/acl-anterior-cruciate-ligament-surgery/how-its-done/");
const NHS_ACL_RECOVER = nhs("Recovering from ACL surgery", "tests-and-treatments/acl-anterior-cruciate-ligament-surgery/recovering/");
const NHS_ACL_COMPLICATIONS = nhs("Complications of ACL surgery", "tests-and-treatments/acl-anterior-cruciate-ligament-surgery/complications/");
const NHS_KNEE_PAIN = nhs("Knee pain", "symptoms/knee-pain/");
const NHS_SPRAINS = nhs("Sprains and strains", "conditions/sprains-and-strains/");
const NHS_KNEECAP = nhs("Dislocated kneecap", "conditions/dislocated-kneecap/");
const NHS_MRI = nhs("MRI scan", "tests-and-treatments/mri-scan/");
const NHS_ARTHROSCOPY = nhs("Arthroscopy", "tests-and-treatments/arthroscopy/");
const NHS_PHYSIO = nhs("Physiotherapy", "tests-and-treatments/physiotherapy/");
const NHS_DVT = nhs("DVT (deep vein thrombosis)", "conditions/deep-vein-thrombosis-dvt/");
const NHS_OA = nhs("Osteoarthritis", "conditions/osteoarthritis/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");

const INFORM_KNEE = inform("Knee problems", "leg-and-foot-problems-and-conditions/knee-problems");
const INFORM_KNEE_EX = inform("Exercises for knee problems", "leg-and-foot-problems-and-conditions/exercises-for-knee-problems");
const INFORM_SOFT = inform("Soft tissue injury advice", "soft-tissue-injury-advice");
const INFORM_PAINKILLERS = inform("When should I take painkillers?", "when-should-i-take-painkillers");
const INFORM_INJURY_RISK = inform("How to reduce your risk of injury from exercise or physical activity", "how-to-reduce-your-risk-of-injury-from-exercise-or-physical-activity/");
const INFORM_WORK = inform("Returning to work after an injury", "returning-to-work-after-an-injury");

const AU_KNEE_PAIN = au("Knee pain", "understanding-arthritis/conditions/knee-pain/");
const AU_OA_KNEE = au("Osteoarthritis of the knee", "understanding-arthritis/conditions/osteoarthritis-of-the-knee/");
const AU_EX_KNEES = au("Exercises for the knees", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-knees/");

const CSP_TREATMENT = csp("Treatment for knee pain", "treatment-knee-pain");
const CSP_HELP = csp("Getting help for knee pain", "getting-help-knee-pain");

const SOUTH_TEES_KNEE: LearnSource = { label: "South Tees Hospitals NHS Foundation Trust: Knee injury", url: "https://www.southtees.nhs.uk/resources/knee-injury/" };
const WWL_ACL: LearnSource = { label: "Wrightington, Wigan and Leigh NHS: Anterior cruciate ligament (ACL) reconstruction surgery", url: "https://www.wwl.nhs.uk/pdfreader/accessiblePDF/cnv-wwl-68ca8bccc84b67.41037955" };
const GOV_ACCESS_TO_WORK: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };

export const kneeLigamentAnswers: LearnArticle[] = [
  {
    id: "acl-what-it-is",
    kicker: "Understanding",
    question: "What are the knee's ligaments, and what does the ACL do?",
    hook: "Four strong ropes hold the knee together. Two run down the sides, and two cross inside the joint.",
    short: "Ligaments join bone to bone. The knee has four main ligaments: two collateral ligaments on the sides, which control sideways movement, and two cruciate ligaments that cross inside the joint, which control backwards and forwards movement. The anterior cruciate ligament (ACL) helps the knee move and stay stable, and is often injured in sport.",
    sections: [
      {
        heading: "Four strong ropes",
        paragraphs: [
          "The knee is the largest joint in your body. It is formed where three bones meet: the thighbone, the shinbone and the kneecap.",
          "Ligaments join bones to other bones. There are four main ligaments in the knee, and they act like strong ropes to hold the bones together and keep the knee in place.",
        ],
      },
      {
        heading: "Two on the sides, two crossing inside",
        paragraphs: [
          "The collateral ligaments are found on the sides of the knee, one on the inside and one on the outside. They control the sideways movement of the knee.",
          "The cruciate ligaments are found inside the knee joint. They cross each other to form an X shape, and they control how the knee moves backwards and forwards.",
        ],
      },
      {
        heading: "The anterior cruciate ligament",
        paragraphs: [
          "The ACL, or anterior cruciate ligament, is a band of tissue inside your knee. It helps your knee move and stay stable.",
          "It stops the shinbone sliding forward on the thighbone, and resists twisting, especially when the knee is slightly bent. It also gives the muscles around the knee information that helps them work together.",
        ],
      },
      {
        heading: "How a ligament gets hurt",
        paragraphs: [
          "During an injury, a knee ligament may be stretched, which is a sprain, or sometimes torn, which is called a rupture. The cartilage cushions in the knee, called the menisci, can be injured at the same time.",
          "You can injure your ACL doing sports, or if you hit your knee, twist your knee, or quickly change direction or speed when running or walking.",
          "The Wrightington, Wigan and Leigh hospitals' leaflet says ACL tears most often happen in sports such as rugby, football, netball and skiing, often without contact, such as landing from a jump. People who do not play sport can tear it too, usually by twisting on a fixed foot.",
        ],
      },
      {
        heading: "Not every injury needs an operation",
        paragraphs: [
          "Sprains are torn or twisted ligaments, and they are most common in wrists, ankles, thumbs and knees. After 2 weeks, most sprains and strains will feel better, but severe ones can take months to get back to normal.",
          "Not all ACL injuries need surgery. Some people can manage quite well without an ACL by working on a programme of intensive rehabilitation.",
        ],
      },
    ],
    helps: [
      "For the first 2 to 3 days after a sprain, follow PRICE: protection, rest, ice, compression and elevation.",
      "Avoid strenuous exercise such as running for up to 8 weeks after a sprain, as there is a risk of further damage.",
      "See a doctor if your knee locks, clicks painfully or gives way. Painless clicking is not unusual.",
      "It is important not to misdiagnose yourself: if you are worried, see a doctor.",
    ],
    tryThisWeek: [
      "Use PRICE for the first few days.",
      "Hold off running after a sprain.",
      "See a doctor if you are worried.",
    ],
    ask: "Which ligament have I injured, and is it stretched or torn?",
    interactive: {
      kind: "flip-cards",
      title: "Inside the knee, card by card",
      intro: "Turn each card to see where each part sits and what it does.",
      cards: [
        { id: "acl", front: "Anterior cruciate ligament", when: "Inside the knee, crossing", back: "Stops the shinbone sliding forward on the thighbone and resists twisting. Often injured in sport." },
        { id: "other-cruciate", front: "The other cruciate ligament", when: "Inside the knee, crossing", back: "The two cruciates cross in an X and control how the knee moves backwards and forwards." },
        { id: "inner", front: "Inner collateral ligament", when: "On the inside of the knee", back: "Controls the sideways movement of the knee, with its partner on the outside." },
        { id: "outer", front: "Outer collateral ligament", when: "On the outside of the knee", back: "Controls the sideways movement of the knee, with its partner on the inside." },
        { id: "menisci", front: "The menisci", when: "Between thighbone and shinbone", back: "Two wedge-shaped pieces of cartilage that act as shock absorbers. They can be hurt in the same injury." },
      ],
    },
    sources: [AU_KNEE_PAIN, NHS_ACL_WHAT, WWL_ACL, SOUTH_TEES_KNEE, NHS_SPRAINS],
    quiz: {
      question: "How many main ligaments hold the knee together?",
      options: [{ text: "Four", right: true }, { text: "Two" }, { text: "Ten" }],
      why: "There are four main ligaments in the knee, and they act like strong ropes to hold the bones together and keep the knee in place.",
    },
  },
  {
    id: "acl-symptoms",
    kicker: "Symptoms",
    question: "What does a knee ligament injury feel like?",
    hook: "A pop, a knee that swells fast, a joint that gives way on the stairs. What each sign can mean.",
    short: "A knee ligament injury can cause severe pain, swelling, instability and difficulty straightening the leg, and the knee may lock or give way. A popping sound at the time of injury and a knee that swells very quickly are signs to get checked straight away. Most knee injuries settle in 2 to 3 weeks, but some take up to 6.",
    sections: [
      {
        heading: "What people notice",
        paragraphs: [
          "After a knee ligament injury, you may have severe pain in your knee, swelling, and instability, which means you cannot put much weight on it, especially when going up or down stairs.",
          "You may not have the full range of movement in your knee, and in particular you may not be able to straighten your leg completely. The knee may also lock or give way.",
        ],
      },
      {
        heading: "A pop and fast swelling",
        paragraphs: [
          "The NHS lists a knee that is unstable, gives way when you try to stand or cannot straighten, sometimes with a popping sound during the injury, as possible signs of a torn ligament, tendon or meniscus, or cartilage damage.",
          "The NHS says to go to A&E if you have injured your knee and it becomes very swollen very quickly, or you felt a pop or snap in your knee. In Scotland, NHS inform says to phone 111 if your knee becomes immediately swollen after a twisting injury.",
        ],
      },
      {
        heading: "Giving way later on",
        paragraphs: [
          "The NHS says to get advice from 111 if your knee locks, gives way or painfully clicks. Painless clicking is normal.",
          "The Wrightington, Wigan and Leigh leaflet says that if symptoms such as repeated episodes of giving way persist after an ACL tear, a reconstruction of the ligament is often necessary.",
        ],
      },
      {
        heading: "Sprain, or something more",
        paragraphs: [
          "A sprain usually causes pain, tenderness or weakness, swelling or bruising, and you may not be able to put weight on the injury or use it normally.",
          "Most knee injuries take 2 to 3 weeks to recover, but sometimes may take up to 6 weeks to be completely comfortable.",
        ],
      },
    ],
    helps: [
      "Get advice from 111 if your knee is very painful, or you cannot move it or put any weight on it.",
      "Get advice from 111 if your knee locks, gives way or painfully clicks.",
      "Go to A&E if your knee becomes very swollen very quickly or you felt a pop or snap in it after an injury.",
      "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
      "For the first 48 to 72 hours, think of PRICE: protect, rest, ice, compression and elevation.",
    ],
    tryThisWeek: [
      "Know when to get advice from 111.",
      "Know the signs that mean A&E.",
      "Use PRICE for the first few days.",
    ],
    ask: "Do my symptoms suggest a torn ligament, and do I need a scan?",
    interactive: {
      kind: "signs",
      title: "What has the knee done?",
      intro: "Tick what you have noticed since the injury. The ticked list is ready to show your doctor or physiotherapist.",
      signs: [
        "I heard or felt a pop or snap",
        "It swelled up very quickly",
        "It gives way when I try to stand",
        "I cannot straighten my leg fully",
        "It locks or catches",
        "It feels unstable on the stairs",
        "I cannot put weight on it",
        "It has changed shape",
      ],
      after: "Go to A&E if the knee swelled very quickly, you felt a pop or snap, or it has changed shape. Get advice from 111 if it locks, gives way or you cannot put weight on it.",
      copyHeading: "What my knee did after the injury",
    },
    sources: [NHS_KNEE_PAIN, SOUTH_TEES_KNEE, NHS_KNEECAP, NHS_SPRAINS, INFORM_KNEE, WWL_ACL],
    quiz: {
      question: "Which of these after a knee injury is a reason to go to A&E?",
      options: [{ text: "It swelled very quickly after a pop", right: true }, { text: "Painless clicking" }, { text: "A little stiffness the next day" }],
      why: "The NHS says to go to A&E if you have injured your knee and it becomes very swollen very quickly, or you felt a pop or snap in your knee.",
    },
  },
  {
    id: "acl-diagnosis",
    kicker: "Tests",
    question: "How is a knee ligament injury diagnosed?",
    hook: "Usually by questions and a careful look at how the knee moves. A scan comes in when more is needed.",
    short: "A doctor or physiotherapist can often diagnose a knee problem from your symptoms and an examination. If the knee is not improving after 4 to 6 weeks of physiotherapy, you may be referred for an MRI scan, which takes detailed pictures of the inside of the knee. Results usually take 1 to 2 weeks.",
    sections: [
      {
        heading: "Questions and an examination",
        paragraphs: [
          "Your doctor will often be able to diagnose a knee problem from your symptoms along with a physical examination of your knee. Occasionally they may suggest tests or a scan, especially if more specialised treatment may be needed.",
          "A physiotherapist will take a detailed history of your pain, then do a physical assessment to see how you move and how your muscles, nerves and joints are working.",
        ],
      },
      {
        heading: "When a scan is ordered",
        paragraphs: [
          "If there is no improvement in your symptoms after 4 to 6 weeks of physiotherapy, you may be referred for further investigation or treatment, such as an MRI scan or surgery.",
          "After a sprain or strain you may need an X-ray, which can sometimes be done at an urgent treatment centre, or you may be referred to hospital.",
        ],
      },
      {
        heading: "What an MRI scan is like",
        paragraphs: [
          "An MRI scan takes detailed pictures of the inside of your body. It is done in hospital by a radiographer and usually takes between 15 minutes and 1 hour, but can take longer.",
          "You lie flat on a bed that moves through a short tunnel, with ear plugs or headphones, because the scanner makes loud bangs and clicks. You need to lie still so the scanner can take clear images.",
          "You will be asked about any metal in your body, such as surgical clips or a pacemaker. Talk to the hospital before your appointment if you feel anxious about the scan or have a fear of small spaces.",
        ],
      },
      {
        heading: "Getting the results",
        paragraphs: [
          "It usually takes between 1 and 2 weeks to get MRI scan results. A radiologist looks at the images and writes to the doctor who referred you.",
          "If you have not heard anything after a few weeks, contact the doctor who referred you for the scan.",
        ],
      },
      {
        heading: "A camera inside the joint",
        paragraphs: [
          "An arthroscopy is a type of keyhole surgery for checking or repairing joints, and a knee arthroscopy is the most common type. It can be used to check for damage such as a sports injury.",
          "During ACL surgery, the surgeon first puts a thin tube with a light and a camera into the knee to check the ACL and look for damage to other parts of the knee.",
        ],
      },
    ],
    helps: [
      "Tell the hospital before an MRI scan if you have any metal in your body, such as surgical clips or a pacemaker.",
      "On the day, avoid wearing anything with metal in it, such as jewellery or hair clips, and empty coins and keys from your pockets.",
      "Talk to a healthcare professional before your appointment if you feel anxious about the scan or have a fear of small spaces.",
      "In many areas you can get physiotherapy from NHS community musculoskeletal services without a GP referral.",
      "If you have not heard about your results after a few weeks, contact the doctor who referred you.",
    ],
    tryThisWeek: [
      "List any metal in your body.",
      "Mention any fear of small spaces.",
      "Check if you can refer yourself to physio.",
    ],
    ask: "Do I need an MRI scan, or can we decide on treatment from the examination?",
    interactive: {
      kind: "flip-cards",
      title: "Finding out what is injured",
      intro: "Turn each card to see when each check is used and what it does.",
      cards: [
        { id: "exam", front: "Examination", when: "First, at the GP or clinic", back: "A doctor can often diagnose a knee problem from your symptoms and a physical examination of the knee." },
        { id: "physio", front: "Physiotherapy assessment", when: "Often the first appointment", back: "A detailed history of your pain, then a check of how you move and how your muscles, nerves and joints work." },
        { id: "xray", front: "X-ray", when: "If a broken bone is possible", back: "After a sprain or strain you may need an X-ray, sometimes done at an urgent treatment centre." },
        { id: "mri", front: "MRI scan", when: "If the knee is not improving", back: "Detailed pictures of the inside of the knee. Takes 15 minutes to 1 hour, with results in 1 to 2 weeks." },
        { id: "arthroscopy", front: "Arthroscopy", when: "A keyhole check or repair", back: "A tiny camera looks inside the joint. It can check for damage such as a sports injury." },
      ],
    },
    sources: [AU_KNEE_PAIN, CSP_HELP, SOUTH_TEES_KNEE, NHS_MRI, NHS_ARTHROSCOPY, NHS_ACL_HOW, NHS_SPRAINS, NHS_PHYSIO],
    quiz: {
      question: "How long does it usually take to get MRI scan results?",
      options: [{ text: "Between 1 and 2 weeks", right: true }, { text: "The same day" }, { text: "Six months" }],
      why: "It usually takes between 1 and 2 weeks to get MRI scan results.",
    },
  },
  {
    id: "acl-urgent",
    kicker: "Urgent help",
    question: "When should I go to A&E with a knee injury?",
    hook: "A crack, a knee out of shape, a pop with fast swelling. Some signs mean A&E now, and some mean NHS 111.",
    short: "Call 999 or go to A&E if you heard a crack, the knee has changed shape or is at an odd angle, it becomes very swollen very quickly, you felt a pop or snap, or the leg is numb, cold or a different colour. Do not drive yourself. For a knee that locks, gives way or will not take your weight, get advice from NHS 111.",
    sections: [
      {
        heading: "Signs of a broken bone",
        paragraphs: [
          "Call 999 or go to A&E if you heard a crack when you had your injury, or the injured part has changed shape or is pointing at an odd angle. You may have broken a bone and will need an X-ray.",
          "Also call 999 or go to A&E if the injured part is numb, tingling or has pins and needles, or the skin around it has changed colour, such as looking blue or grey, or is cold to touch.",
        ],
      },
      {
        heading: "Signs in the knee itself",
        paragraphs: [
          "The NHS says to go to A&E if you have injured your knee and it has changed shape, becomes very swollen very quickly, or you felt a pop or snap in your knee. Go too if you can see bone sticking out of your skin or it is bleeding heavily.",
          "Call 999 if you cannot get to A&E because you are unable to move your injured leg due to the pain. Do not drive to A&E: ask someone to drive you or call 999 and ask for an ambulance.",
        ],
      },
      {
        heading: "While you wait for help",
        paragraphs: [
          "If you think you have dislocated your kneecap, keep the knee still and supported with padding while sitting or lying down, such as rolled-up clothing, towels or cushions.",
          "Do not raise the knee, do not try to stand or walk on the leg, and do not try to put the kneecap back into place yourself.",
        ],
      },
      {
        heading: "When NHS 111 is the place to start",
        paragraphs: [
          "Get advice from 111 now if your knee is very painful, you cannot move it or put any weight on it, or it locks, gives way or painfully clicks. Get advice too if you have a very high temperature, or feel hot, cold or shivery, with redness or heat around the knee, which can be a sign of infection.",
          "111 will tell you what to do, and can tell you the right place to get help. You can also go to an urgent treatment centre, sometimes called a walk-in centre or minor injuries unit.",
          "In Scotland, NHS inform says to phone 111 if there has been new significant trauma within the last 7 days, your knee is misshapen after a new injury, you cannot put any weight at all through your leg, or it becomes immediately swollen after a twisting injury.",
        ],
      },
      {
        heading: "After ACL surgery",
        paragraphs: [
          "If you have recently had ACL surgery, call 999 or go to A&E if you have pain and swelling in your leg and you are having difficulty breathing or have chest pains. This could be a blood clot in the lungs, which needs to be treated immediately.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E if you heard a crack, or the knee has changed shape or is pointing at an odd angle.",
      "Go to A&E if your knee becomes very swollen very quickly or you felt a pop or snap.",
      "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
      "Bring any medicines you take with you.",
      "Get advice from 111 if your knee locks, gives way or you cannot put any weight on it.",
    ],
    tryThisWeek: [
      "Learn the signs that mean A&E.",
      "Arrange a lift rather than drive.",
      "Bring your medicines with you.",
    ],
    ask: "Which signs after this injury mean I should come straight back or go to A&E?",
    interactive: {
      kind: "scenarios",
      title: "A&E, 111, or neither?",
      scenarios: [
        {
          id: "crack",
          situation: "You heard a crack and the knee looks a different shape.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Rest it and see tomorrow" }],
          why: "Call 999 or go to A&E if you heard a crack when you had your injury, or the injured part has changed shape. You may have broken a bone.",
        },
        {
          id: "pop",
          situation: "The knee swelled up very quickly after a pop.",
          options: [{ text: "Go to A&E", best: true }, { text: "Wait for a GP appointment" }],
          why: "The NHS says to go to A&E if you have injured your knee and it becomes very swollen very quickly, or you felt a pop or snap in your knee.",
        },
        {
          id: "drive",
          situation: "You need A&E, and you are alone with your car.",
          options: [{ text: "Call 999 for an ambulance", best: true }, { text: "Drive yourself carefully" }],
          why: "Do not drive to A&E: ask someone to drive you or call 999 and ask for an ambulance.",
        },
        {
          id: "kneecap",
          situation: "Your kneecap seems to have slipped out of place.",
          options: [{ text: "Keep it still and supported", best: true }, { text: "Push it back into place" }],
          why: "Keep the knee still and supported with padding. Do not try to put the kneecap back into place yourself.",
        },
        {
          id: "gives-way",
          situation: "A week later, the knee keeps giving way.",
          options: [{ text: "Get advice from 111", best: true }, { text: "Ignore it" }],
          why: "Get advice from 111 now if your knee locks, gives way or painfully clicks.",
        },
      ],
    },
    sources: [NHS_SPRAINS, NHS_KNEECAP, NHS_KNEE_PAIN, INFORM_KNEE, NHS_ACL_COMPLICATIONS],
    quiz: {
      question: "Should you drive yourself to A&E with a knee injury?",
      options: [{ text: "No: get a lift or call 999", right: true }, { text: "Yes, if you drive slowly" }, { text: "Only at night" }],
      why: "Do not drive to A&E: ask someone to drive you or call 999 and ask for an ambulance.",
    },
  },
  {
    id: "acl-first-days",
    kicker: "First aid",
    question: "What should I do in the first days after hurting my knee?",
    hook: "Protect, rest, ice, compress, raise. Then start moving it again, little and often.",
    short: "For the first 2 to 3 days, the NHS suggests PRICE: protection, rest, ice, compression and elevation, and avoiding heat, alcohol and massage. Rest the knee but do not keep it completely still: move it gently every hour while awake. Paracetamol and ibuprofen gel can help, and a pharmacist can advise.",
    sections: [
      {
        heading: "PRICE for the first few days",
        paragraphs: [
          "For the first 2 to 3 days after a sprain, the NHS suggests five steps known as PRICE: protection, rest, ice, compression and elevation. Protect the injury, stop exercise and try not to put weight on it.",
          "Apply an ice pack, or a bag of frozen vegetables wrapped in a tea towel, for up to 20 minutes every 2 to 3 hours. Wrap a bandage around the injury to support it during the day, and keep it raised on a pillow as much as possible.",
        ],
      },
      {
        heading: "Do no harm",
        paragraphs: [
          "South Tees Hospitals' knee injury advice adds do no HARM for the first 48 to 72 hours: no heat, alcohol, running or massage. Depending on the injury, you may be given a special brace to support the knee while the ligament heals.",
          "The NHS also says to try to avoid heat, such as hot baths and heat packs, alcohol and massages for the first couple of days, to help prevent swelling.",
        ],
      },
      {
        heading: "Rest, but keep it moving",
        paragraphs: [
          "In the first 24 to 48 hours, rest your knee but avoid long periods where you do not move at all. When you are awake, move your knee gently for 10 to 20 seconds every hour.",
          "Too much rest can slow down recovery, so as soon as you can, start moving and using the injured area. When you can move it without pain stopping you, keep moving it so the joint does not become stiff.",
          "Supports or walking aids, such as crutches, can help in the early stages. Unless a healthcare professional advises a set time, try to become less reliant on them as time goes on.",
        ],
      },
      {
        heading: "Pain relief",
        paragraphs: [
          "Speak to a pharmacist about the best treatment for you. At first, the NHS suggests painkillers like paracetamol, and ibuprofen gel, mousse or spray to bring down swelling.",
          "NHS inform in Scotland says anti-inflammatory medicines should only be considered 48 hours after an injury, because used earlier they may affect healing in some conditions. If you take other medicines or have other health problems, check with a pharmacist before taking painkillers.",
        ],
      },
      {
        heading: "Two simple exercises",
        paragraphs: [
          "South Tees Hospitals suggests lying on your back and bending and straightening your leg, 10 times.",
          "Then, lying on your back with your legs straight, bend your ankles and push your knees down firmly against the bed. Hold for 5 seconds, then relax, and repeat 10 times.",
        ],
      },
    ],
    helps: [
      "Follow PRICE for the first 2 to 3 days: protect, rest, ice, compress and elevate.",
      "Use ice for up to 20 minutes every 2 to 3 hours, wrapped in a tea towel and never directly on the skin.",
      "Avoid heat, alcohol, running and massage for the first 48 to 72 hours.",
      "When you are awake, move your knee gently for 10 to 20 seconds every hour.",
      "Check with a pharmacist before taking painkillers if you take other medicines or have other health problems.",
    ],
    tryThisWeek: [
      "Follow PRICE for two or three days.",
      "Ice for up to 20 minutes at a time.",
      "Move the knee gently every hour.",
    ],
    ask: "Do I need a brace or crutches, and for how long?",
    interactive: {
      kind: "timeline",
      title: "The first days and weeks",
      steps: [
        { id: "day-one", when: "First 24 to 48 hours", title: "Protect and rest", points: ["Rest, but avoid long periods without moving.", "Move the knee gently for 10 to 20 seconds every hour."] },
        { id: "price", when: "First 2 to 3 days", title: "Ice, compress, raise", points: ["Ice for up to 20 minutes every 2 to 3 hours.", "No heat, alcohol, running or massage."] },
        { id: "after-48", when: "After 48 hours", title: "Use the leg more", points: ["Try to use your leg more: exercise helps the knee.", "Keep to your normal routine if you can."] },
        { id: "weeks", when: "2 to 3 weeks", title: "Most injuries settle", points: ["Most knee injuries take 2 to 3 weeks to recover.", "Some take up to 6 weeks to be completely comfortable."] },
        { id: "not-better", when: "After 4 to 6 weeks of physio", title: "If it is not improving", points: ["You may be referred for an MRI scan or surgery."] },
      ],
    },
    sources: [NHS_SPRAINS, SOUTH_TEES_KNEE, AU_KNEE_PAIN, INFORM_KNEE, INFORM_SOFT, INFORM_PAINKILLERS],
    quiz: {
      question: "How long should an ice pack stay on at a time, according to the NHS?",
      options: [{ text: "Up to 20 minutes", right: true }, { text: "About an hour" }, { text: "Overnight" }],
      why: "Apply an ice pack, or a bag of frozen vegetables wrapped in a tea towel, for up to 20 minutes every 2 to 3 hours.",
    },
  },
  {
    id: "acl-physio",
    kicker: "Rehabilitation",
    question: "How does physiotherapy help a knee ligament injury?",
    hook: "A plan that starts with protection and builds to strength and balance, with or without an operation.",
    short: "A physiotherapist assesses which part of the knee is causing the problem, then builds up exercises for movement, strength and balance as pain settles. For many ACL injuries, physiotherapy is tried before surgery, and some people manage well with intensive rehabilitation alone. Home exercises between sessions matter.",
    sections: [
      {
        heading: "What physiotherapy is",
        paragraphs: [
          "Physiotherapy is a treatment that can ease pain and improve movement after an injury. It uses exercise, massage and other techniques, and it is used for sports injuries such as a sprain or strain.",
          "If a sprain or strain is taking longer than usual to get better, physiotherapy may help. NHS physiotherapy might not be available everywhere and waiting times can be long, but in many areas you can refer yourself.",
        ],
      },
      {
        heading: "What the physiotherapist does",
        paragraphs: [
          "Your physiotherapist will carry out a thorough assessment to find out which part of your knee is the main cause of the problem. Protection, rest and ice may be used at first, in the form of crutches, a knee support or ice therapy.",
          "As your range of movement increases and your pain settles, your physiotherapist will advance your exercises, working on your strength and balance to get you back to full fitness.",
          "Treatment may include a home exercise programme for strength and mobility, advice on pain management, and hands-on treatment.",
        ],
      },
      {
        heading: "Physiotherapy instead of surgery",
        paragraphs: [
          "Before ACL surgery, your doctor will talk to you about non-surgical treatments. These may include physiotherapy to help strengthen the knee, a knee brace during exercise, and pain relief medicines, gels or creams.",
          "Some people can manage quite well without an ACL by working on a programme of intensive rehabilitation. Surgery is usually recommended if physiotherapy and lifestyle changes have not helped, or the knee gives way a lot.",
        ],
      },
      {
        heading: "Exercising at the right level",
        paragraphs: [
          "NHS inform says that anyone diagnosed with a knee condition, or who has had recent knee surgery, should follow the advice of their own healthcare professional. For new knee problems, it suggests keeping pain during exercise within 0 to 5 out of 10.",
          "If the pain goes higher, do fewer repetitions, move more slowly or rest longer between movements. Exercise should not make your knee pain worse overall, and your pain should be no worse the morning after.",
          "Start with 2 to 3 repetitions at a time, little and often through the day. As it gets easier, add 1 or 2 repetitions every few days.",
        ],
      },
      {
        heading: "Keeping it going",
        paragraphs: [
          "After each session you may be given exercises to do at home before your next appointment. It is important to do them regularly to help with your recovery.",
          "After ACL reconstruction, physiotherapy appointments can continue for several months, until you are able to return to your normal activities.",
        ],
      },
    ],
    helps: [
      "Check whether you can refer yourself to NHS physiotherapy in your area.",
      "If you choose private physiotherapy, check the physiotherapist is chartered and registered with the Health and Care Professions Council.",
      "Do the exercises your physiotherapist gives you regularly between sessions.",
      "Keep exercise pain within 0 to 5 out of 10, and ease off if it goes higher.",
      "Take painkillers regularly at the recommended dose so you can keep exercising, rather than waiting until the pain is severe.",
    ],
    tryThisWeek: [
      "Check if you can refer yourself.",
      "Do your home exercises regularly.",
      "Keep exercise pain at 5 or under.",
    ],
    ask: "Could physiotherapy alone be enough for my knee, and how will we know if it is working?",
    interactive: {
      kind: "scenarios",
      title: "Getting the level right",
      scenarios: [
        {
          id: "too-much",
          situation: "An exercise pushes your pain up to 7 out of 10.",
          options: [{ text: "Fewer, slower, with more rest", best: true }, { text: "Push through it" }],
          why: "Keep pain during exercise within 0 to 5 out of 10. If it goes higher, do fewer repetitions, move more slowly or rest longer between movements.",
        },
        {
          id: "morning",
          situation: "Your knee is worse the morning after your exercises.",
          options: [{ text: "Ease back and tell your physio", best: true }, { text: "Double the exercises" }],
          why: "Exercise should not make your knee pain worse overall, and your pain should be no worse the morning after.",
        },
        {
          id: "waiting",
          situation: "You are waiting to see a physiotherapist.",
          options: [{ text: "Check if you can refer yourself", best: true }, { text: "Wait for a letter" }],
          why: "In many areas you may be able to get physiotherapy from NHS community musculoskeletal services without needing a referral from a GP.",
        },
        {
          id: "painkillers",
          situation: "The knee is sore and you want to keep exercising.",
          options: [{ text: "Painkillers regularly, at the dose", best: true }, { text: "Wait until the pain is severe" }],
          why: "Take painkillers regularly at the recommended dose so you can keep exercising. Do not wait until your pain is severe.",
        },
      ],
    },
    sources: [NHS_PHYSIO, CSP_TREATMENT, CSP_HELP, NHS_ACL_ALT, NHS_ACL_WHY, WWL_ACL, INFORM_KNEE_EX, NHS_SPRAINS],
    quiz: {
      question: "How much pain does NHS inform suggest is acceptable during exercises for a new knee problem?",
      options: [{ text: "Up to 5 out of 10", right: true }, { text: "None at all" }, { text: "Any amount" }],
      why: "For new knee problems, it suggests keeping pain during exercise within 0 to 5 out of 10.",
    },
  },
  {
    id: "acl-surgery",
    kicker: "Surgery",
    question: "What is ACL reconstruction surgery, and who needs it?",
    hook: "The torn ligament is replaced with a graft, usually from your own hamstring, through keyhole cuts.",
    short: "ACL surgery replaces the torn ligament with a graft, usually taken from your hamstring. It is usually recommended if physiotherapy has not helped, you want to keep doing lots of sport, you have a very physical job, or the knee gives way a lot. It usually takes 1 to 3 hours by keyhole surgery, and most people go home the same day.",
    sections: [
      {
        heading: "Who it is for",
        paragraphs: [
          "ACL surgery is a type of knee ligament surgery that replaces the ACL in your knee. Not all ACL injuries need it, and sometimes physiotherapy and lifestyle changes can help your symptoms.",
          "Surgery is usually recommended if physiotherapy and lifestyle changes have not helped, you plan to keep doing lots of sport or intense exercise, you have a very physical job, your knee gives way a lot, or other parts of your knee are also damaged.",
        ],
      },
      {
        heading: "The graft",
        paragraphs: [
          "The ACL is usually replaced with a graft taken from another part of your body, such as the hamstring.",
          "The Wrightington, Wigan and Leigh leaflet describes two grafts: part of the hamstring tendons from the back of the knee, or the middle third of the patella tendon, just below the kneecap. Which is used depends on things such as your sex, your build and the sport you play.",
        ],
      },
      {
        heading: "On the day",
        paragraphs: [
          "You will usually go into hospital on the day of the operation, and may be asked not to eat or drink for several hours before. You will have either a general anaesthetic, or a local anaesthetic in your spine so that you are awake but have no feeling from the waist down.",
          "The operation normally takes between 1 and 3 hours, and you can usually leave hospital on the same day.",
        ],
      },
      {
        heading: "Keyhole steps",
        paragraphs: [
          "ACL surgery is usually done by keyhole surgery, through small cuts. The surgeon checks inside the knee with a camera, then puts the graft in the same place as the damaged ACL and holds it with screws or staples, which stay in permanently.",
          "The surgeon checks that the knee moves properly and the repair is strong enough, then closes the cut with stitches or clips and covers it with a dressing.",
        ],
      },
      {
        heading: "The risks",
        paragraphs: [
          "Most people who have ACL surgery have no complications, and any are usually minor and can be treated. Possible problems include blood clots, a wound infection, damage to nerves or tissue, and ongoing problems with the knee.",
          "You may need to have more surgery if you tear the graft in your knee.",
        ],
      },
    ],
    helps: [
      "Ask your doctor about non-surgical treatments first, such as physiotherapy, a brace during exercise and pain relief.",
      "Do the exercises you are given before surgery: they help with your recovery afterwards.",
      "While you wait, the advice may include stopping smoking, a healthy diet and managing your weight.",
      "Arrange transport, as you will be unable to drive for several weeks after the operation.",
      "Keep floors clear and remove loose rugs and cables, to make it easier to get around on crutches.",
      "Speak to your employer and make a plan for returning to work.",
    ],
    tryThisWeek: [
      "Start your pre-surgery exercises.",
      "Arrange transport home.",
      "Clear rugs and cables at home.",
    ],
    ask: "Do I need a reconstruction, which graft would you use, and why?",
    interactive: {
      kind: "timeline",
      title: "From decision to home",
      steps: [
        { id: "first", when: "Before surgery is offered", title: "Other treatments first", points: ["Physiotherapy, a brace during exercise, pain relief.", "Surgery if these have not helped."] },
        { id: "wait", when: "While you wait", title: "Getting ready", points: ["Exercises to strengthen your muscles.", "Stopping smoking and a healthy diet."] },
        { id: "clinic", when: "A few weeks before", title: "Pre-admission clinic", points: ["Tests such as a blood test and blood pressure.", "A chance to ask questions."] },
        { id: "op", when: "The day", title: "The operation", points: ["Normally 1 to 3 hours, by keyhole surgery.", "A graft, usually from the hamstring."] },
        { id: "home", when: "Usually the same day", title: "Home", points: ["Most people leave hospital the same day.", "Crutches and maybe a knee brace at first."] },
      ],
    },
    sources: [NHS_ACL_WHAT, NHS_ACL_WHY, NHS_ACL_HOW, NHS_ACL_PREP, NHS_ACL_COMPLICATIONS, WWL_ACL, NHS_ACL_ALT, NHS_ACL_RECOVER],
    quiz: {
      question: "Where is the new ACL usually taken from?",
      options: [{ text: "Another part of your body, such as the hamstring", right: true }, { text: "A metal implant" }, { text: "A plastic band" }],
      why: "The ACL is usually replaced with a graft taken from another part of your body, such as the hamstring.",
    },
  },
  {
    id: "acl-after-surgery",
    kicker: "Recovery",
    question: "What is recovery like after ACL reconstruction?",
    hook: "Home the same day, crutches and ice for a while, and physiotherapy for months.",
    short: "It may take several months or longer to recover from ACL surgery. Most people go home the same day with crutches, and sometimes a brace, and have regular physiotherapy for a few months. Ice, a raised leg and gentle walking help, and warning signs of a clot or infection need urgent help.",
    sections: [
      {
        heading: "A recovery of months",
        paragraphs: [
          "It may take several months or longer to recover from ACL surgery, depending on your age and general health. You will usually be able to do most activities again within a few months, but it can take up to a year to be able to play sport again.",
          "Before you leave hospital, a physiotherapist will talk to you about managing daily activities and home exercises. You may be given crutches and a knee brace to wear at first.",
        ],
      },
      {
        heading: "The first weeks at home",
        paragraphs: [
          "You will have regular physiotherapy for a few months, and a follow-up appointment about 2 to 3 weeks after the operation. Following the exercises early on helps the long-term strength and movement in your knee.",
          "The Wrightington, Wigan and Leigh leaflet says stitches, clips or strips that need removing are usually taken out between 10 and 14 days after the operation.",
        ],
      },
      {
        heading: "Swelling and pain",
        paragraphs: [
          "Gently hold an ice pack wrapped in a tea towel on your knee for 15 to 20 minutes every 2 to 3 hours to reduce swelling and ease pain. Stop icing if you have any numbness or loss of feeling.",
          "Keep your leg raised when resting, but do not put a pillow under your knee. Do not stand for long periods, as this could cause swelling, and do not keep your leg straight when you are sitting down.",
        ],
      },
      {
        heading: "Protecting the new ligament",
        paragraphs: [
          "Use crutches and a brace if you have been given them, and stop when your physiotherapist or surgeon says you can. Try to avoid twisting your knee, bending down and reaching up as much as possible.",
          "Get up and walk around as your physiotherapist advises, to prevent blood clots. Do not get the wound wet, and follow the hospital's advice about showering or bathing.",
        ],
      },
      {
        heading: "Warning signs",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have a throbbing or cramping pain in your leg, a high temperature, or feel hot and cold. The same applies to oozing or pus from your wound, or tenderness, swelling, pain or redness in your knee that is not getting better or is getting worse. These could be signs of an infection or a blood clot.",
          "Call 999 or go to A&E if you have pain and swelling in your leg and you are having difficulty breathing or have chest pains. This could be a blood clot in the lungs, which needs to be treated immediately.",
        ],
      },
    ],
    helps: [
      "Take the painkillers you have been prescribed to help control your pain.",
      "Use ice for 15 to 20 minutes every 2 to 3 hours, wrapped in a tea towel, and stop if you have any numbness.",
      "Keep your leg raised when resting, without a pillow under your knee.",
      "Get up and walk around as your physiotherapist advises, to prevent blood clots.",
      "Ask for an urgent GP appointment or call 111 for throbbing or cramping leg pain, a high temperature or an oozing wound.",
      "Call 999 or go to A&E for leg pain and swelling with difficulty breathing or chest pains.",
    ],
    tryThisWeek: [
      "Take your prescribed painkillers.",
      "Raise your leg, with no pillow under the knee.",
      "Walk around as your physio advises.",
    ],
    ask: "Which exercises should I do this week, and when can I stop using crutches?",
    interactive: {
      kind: "signs",
      title: "Since my operation",
      intro: "Tick anything you have noticed. The ticked list is ready to share with your GP, NHS 111 or the hospital team.",
      signs: [
        "Throbbing or cramping pain in my leg",
        "A high temperature",
        "Feeling hot and cold",
        "Oozing or pus from the wound",
        "Knee redness or swelling getting worse",
        "Leg pain and swelling with breathlessness",
        "Chest pains",
      ],
      after: "Call 999 or go to A&E for leg pain and swelling with difficulty breathing or chest pains. For the other signs, ask for an urgent GP appointment or get help from NHS 111.",
      copyHeading: "Things I have noticed since my ACL surgery",
    },
    sources: [NHS_ACL_RECOVER, NHS_ACL_COMPLICATIONS, WWL_ACL, NHS_DVT],
    quiz: {
      question: "When is the follow-up appointment after ACL surgery usually?",
      options: [{ text: "About 2 to 3 weeks after", right: true }, { text: "The next morning" }, { text: "After a year" }],
      why: "You will have regular physiotherapy for a few months, and a follow-up appointment about 2 to 3 weeks after the operation.",
    },
  },
  {
    id: "acl-return-to-sport",
    kicker: "Sport",
    question: "When can I get back to sport?",
    hook: "Most activities come back within months. Sport after a reconstruction can take up to a year, and goes by goals, not dates.",
    short: "After ACL surgery, it can take up to a year to play sport again, and one NHS hospital leaflet gives 6 months as the earliest. Your physiotherapist guides the return by the goals you reach, because going back too early raises the chance of the reconstruction failing. A proper warm-up and building up gradually help protect the knee.",
    sections: [
      {
        heading: "How long it can take",
        paragraphs: [
          "After ACL surgery, you will usually be able to do most activities again within a few months, but it can take up to a year to be able to play sport again.",
          "The Wrightington, Wigan and Leigh leaflet says the earliest return to sport is 6 months after the operation, but this will vary depending on your progress.",
        ],
      },
      {
        heading: "Goals, not the calendar",
        paragraphs: [
          "Your return to leisure activities is guided by your physiotherapist, and depends on how you are progressing and whether you are reaching certain goals. Your therapist will advise when you are physically capable of different activities.",
          "If you return too early, you may not get a good outcome from your surgery, and you have a greater chance of the reconstruction failing.",
        ],
      },
      {
        heading: "Without an operation",
        paragraphs: [
          "After a sprain, avoid strenuous exercise such as running for up to 8 weeks, as there is a risk of further damage.",
          "Avoid sports or heavy lifting until you have less discomfort and good movement. Remember to warm up fully before you start sporting activities.",
        ],
      },
      {
        heading: "Warming up",
        paragraphs: [
          "NHS inform says a warm-up should take around 10 to 15 minutes. It includes raising your heart rate, dynamic stretching, strength and balance exercises, and movements for your sport.",
          "Strength and balance exercises it suggests include single-leg squats, with the knee moving forward over the middle of the foot, single-leg heel raises and single-leg balancing. Sport-specific warm-ups include FIFA 11+ for football, Activate in rugby and The KNEE Programme for netball.",
        ],
      },
      {
        heading: "Building back up",
        paragraphs: [
          "When building up running, NHS inform suggests increasing the amount you run by 10 per cent or less a week, and having at least one rest day a week from training.",
          "It also suggests 2 resistance training sessions a week. If muscles and tendons are strong, they have more capacity to handle the demands of exercise.",
        ],
      },
    ],
    helps: [
      "Let your physiotherapist guide when you return to sport, based on the goals you reach.",
      "Avoid strenuous exercise such as running for up to 8 weeks after a sprain.",
      "Warm up for around 10 to 15 minutes before sport.",
      "Increase the amount you run by 10 per cent or less each week.",
      "Have at least one rest day a week from training.",
    ],
    tryThisWeek: [
      "Ask your physio about your goals.",
      "Warm up for 10 to 15 minutes.",
      "Plan a rest day this week.",
    ],
    ask: "Which goals do I need to reach before I go back to my sport?",
    interactive: {
      kind: "timeline",
      title: "From operation to sport",
      steps: [
        { id: "early", when: "The first weeks", title: "Walking", points: ["Crutches at first, stopped when your physio says.", "Avoid twisting your knee."] },
        { id: "work", when: "About 4 to 6 weeks", title: "Back to work", points: ["Usually after about 4 to 6 weeks.", "It depends on the type of work you do."] },
        { id: "months", when: "A few months", title: "Most activities", points: ["Most activities again within a few months.", "Regular physiotherapy continues."] },
        { id: "six", when: "6 months at the earliest", title: "Sport can be considered", points: ["The earliest return, says one NHS hospital leaflet.", "Only when your physiotherapist says you are ready."] },
        { id: "year", when: "Up to a year", title: "Playing sport again", points: ["It can take up to a year to play sport again."] },
      ],
    },
    sources: [NHS_ACL_RECOVER, WWL_ACL, INFORM_INJURY_RISK, NHS_SPRAINS, INFORM_KNEE],
    quiz: {
      question: "What can happen if you return to sport too early after ACL surgery?",
      options: [{ text: "A greater chance of the reconstruction failing", right: true }, { text: "The knee heals faster" }, { text: "Nothing at all" }],
      why: "If you return too early, you may not get a good outcome from your surgery, and you have a greater chance of the reconstruction failing.",
    },
  },
  {
    id: "acl-daily-life",
    kicker: "Everyday life",
    question: "How do I manage work, stairs and driving with an injured knee?",
    hook: "Which leg leads on the stairs, when the car keys come back, and how long work might wait.",
    short: "On stairs, lead with your good leg going up and your sore leg coming down, using the handrail. After ACL surgery, do not drive until your medical team says you are fit to, and tell your insurer. Most people return to work after about 4 to 6 weeks, depending on the job.",
    sections: [
      {
        heading: "Stairs",
        paragraphs: [
          "When going upstairs, lead with your good leg, and when going downstairs, lead with your sore leg. Use a handrail if there is one.",
          "After ACL surgery you may be using crutches at first. Stop using them when your physiotherapist says you can.",
        ],
      },
      {
        heading: "Around the house",
        paragraphs: [
          "Before surgery, it helps to keep floors clear for crutches, remove loose rugs and cables you could trip on, keep things you use often within easy reach, and stock the freezer with cooked meals.",
          "Avoid standing for long periods, as this could cause swelling, and try to avoid twisting your knee, bending down and reaching up as much as possible.",
        ],
      },
      {
        heading: "Driving",
        paragraphs: [
          "After ACL surgery, do not drive until your medical team says you are fit to drive, and make sure to tell your insurer.",
          "The Wrightington, Wigan and Leigh leaflet says you should have stopped using crutches, be able to sit comfortably, and have enough power and bend in your knee to do an emergency stop. It suggests asking your physiotherapist for advice.",
        ],
      },
      {
        heading: "Work",
        paragraphs: [
          "Return to work when you feel ready. After ACL surgery this is usually after about 4 to 6 weeks, but it will depend on the type of work you do.",
          "The Wrightington, Wigan and Leigh leaflet says a desk job may need about 2 to 3 weeks off, and a heavy manual job, or one that involves twisting, turning and running, up to 12 to 16 weeks. It suggests talking to your employer about a phased return.",
        ],
      },
      {
        heading: "Talking to your employer",
        paragraphs: [
          "You do not need to be completely free of symptoms before you consider returning to work, and getting back can help your recovery. Discuss returning with your employer as early as you can, so you can agree a timetable together.",
          "Access to Work can help you get or stay in work if you have a physical health condition. It could give a grant towards things like specialist equipment, or the cost of travelling to work if you cannot use public transport.",
        ],
      },
    ],
    helps: [
      "Going upstairs, lead with your good leg; going downstairs, lead with your sore leg, using the handrail.",
      "Do not drive until your medical team says you are fit to drive, and tell your insurer.",
      "Before surgery, speak to your employer and make a plan for returning to work.",
      "Ask your employer about a phased return.",
      "Look at Access to Work if you need help with equipment or travel to work.",
    ],
    tryThisWeek: [
      "Lead with the right leg on stairs.",
      "Tell your insurer before driving.",
      "Talk to your employer about a plan.",
    ],
    ask: "When will I be safe to drive, and how much time off work should I plan for?",
    interactive: {
      kind: "scenarios",
      title: "Stairs, car and work",
      scenarios: [
        {
          id: "up",
          situation: "You are going upstairs on a sore knee.",
          options: [{ text: "Good leg first, using the rail", best: true }, { text: "Sore leg first" }],
          why: "When going upstairs, lead with your good leg, and when going downstairs, lead with your sore leg. Use a handrail if there is one.",
        },
        {
          id: "down",
          situation: "Now you are coming back down.",
          options: [{ text: "Sore leg first", best: true }, { text: "Good leg first" }],
          why: "When going downstairs, lead with your sore leg. Use a handrail if there is one.",
        },
        {
          id: "drive",
          situation: "Two weeks after surgery, you feel ready to drive.",
          options: [{ text: "Check with your medical team first", best: true }, { text: "Drive if it feels fine" }],
          why: "Do not drive until your medical team says you are fit to drive, and make sure to tell your insurer.",
        },
        {
          id: "desk",
          situation: "You work at a desk and feel ready to go back.",
          options: [{ text: "Go back, and ask about a phased return", best: true }, { text: "Wait until every symptom has gone" }],
          why: "Return to work when you feel ready. You do not need to be completely free of symptoms before you consider returning to work.",
        },
      ],
    },
    sources: [NHS_ACL_RECOVER, WWL_ACL, AU_KNEE_PAIN, INFORM_KNEE, NHS_ACL_PREP, INFORM_WORK, GOV_ACCESS_TO_WORK],
    quiz: {
      question: "When do people usually return to work after ACL surgery, according to the NHS?",
      options: [{ text: "After about 4 to 6 weeks", right: true }, { text: "The next day" }, { text: "After a year" }],
      why: "Return to work when you feel ready. After ACL surgery this is usually after about 4 to 6 weeks, but it will depend on the type of work you do.",
    },
  },
  {
    id: "acl-confidence",
    kicker: "Confidence",
    question: "How do I learn to trust my knee again?",
    hook: "A knee that once gave way can feel hard to rely on. Strength, steady steps and support help rebuild it.",
    short: "After a ligament injury the knee can feel unstable, and that can affect how you move and how you feel. Physiotherapy and exercise help, and a gradual return to normal activities gives the best results. You do not need to be pain free to do a little more, and if you feel low or anxious, talking to someone helps.",
    sections: [
      {
        heading: "When the knee feels unreliable",
        paragraphs: [
          "After a knee ligament injury, the knee can feel unstable, especially when going up or down stairs, and it may give way. Some people who have ACL surgery still have a knee that feels unstable when they stand up or walk, and physiotherapy and certain exercises may help.",
          "Some people can manage quite well without an ACL by working on a programme of intensive rehabilitation. If giving way keeps happening, a reconstruction is often necessary.",
        ],
      },
      {
        heading: "Building back gradually",
        paragraphs: [
          "Improvements may be slow to start with, but a gradual return to normal activities is the best way to get good short and long term results after a knee problem.",
          "You do not need to be pain free. Stay within acceptable pain limits, and aim to do a little bit more each day or every few days.",
        ],
      },
      {
        heading: "Walking normally again",
        paragraphs: [
          "After ACL surgery, it is important to avoid walking with a limp. Use crutches if needed, put your heel down first, and avoid walking on a bent knee.",
          "As your range of movement increases and your pain settles, your physiotherapist will advance your exercises, working on your strength and balance to get you back to full fitness.",
        ],
      },
      {
        heading: "Mood matters too",
        paragraphs: [
          "Knee pain can affect your mood, especially if it lasts a long time, and feeling low can make your pain worse. If you are feeling low or anxious, it is important to talk to someone, such as a friend, relative, partner or doctor.",
          "Talking therapies can be useful for some people, and counselling on the NHS usually consists of 6 to 12 sessions. NHS inform adds that looking after your mental wellbeing can affect your recovery.",
        ],
      },
    ],
    helps: [
      "Keep to the exercise programme you are given and follow your physiotherapist's instructions carefully.",
      "Aim to do a little more each day or every few days, within acceptable pain limits.",
      "Avoid walking with a limp: put your heel down first, and use crutches if needed.",
      "If you are feeling low or anxious, talk to someone: a friend, relative, partner or doctor.",
      "Tell your physiotherapist if the knee still feels unstable: physiotherapy and certain exercises may help.",
    ],
    tryThisWeek: [
      "Do your exercises as instructed.",
      "Do a little more every few days.",
      "Talk to someone if you feel low.",
    ],
    ask: "My knee still feels unreliable. What can we work on to make it feel steadier?",
    interactive: {
      kind: "scenarios",
      title: "Moments of doubt",
      scenarios: [
        {
          id: "wobbly",
          situation: "Weeks later, the knee still feels wobbly on the stairs.",
          options: [{ text: "Tell your physiotherapist", best: true }, { text: "Stop using stairs altogether" }],
          why: "Some people still have a knee that feels unstable, and physiotherapy and certain exercises may help.",
        },
        {
          id: "pain-free",
          situation: "It still aches a little, but you want to do more.",
          options: [{ text: "A little more every few days", best: true }, { text: "Wait until it is pain free" }],
          why: "You do not need to be pain free. Stay within acceptable pain limits, and aim to do a little bit more each day or every few days.",
        },
        {
          id: "limp",
          situation: "You notice you limp to protect the knee.",
          options: [{ text: "Use crutches, heel down first", best: true }, { text: "Keep limping" }],
          why: "It is important to avoid walking with a limp. Use crutches if needed, put your heel down first, and avoid walking on a bent knee.",
        },
        {
          id: "low",
          situation: "You have felt low since the injury.",
          options: [{ text: "Talk to someone", best: true }, { text: "Keep it to yourself" }],
          why: "Feeling low can make your pain worse. If you are feeling low or anxious, it is important to talk to someone.",
        },
      ],
    },
    sources: [SOUTH_TEES_KNEE, NHS_ACL_COMPLICATIONS, WWL_ACL, INFORM_KNEE_EX, INFORM_SOFT, CSP_TREATMENT, AU_KNEE_PAIN, INFORM_KNEE],
    quiz: {
      question: "Do you need to be pain free before doing a little more?",
      options: [{ text: "No", right: true }, { text: "Yes, completely" }, { text: "Only after a scan" }],
      why: "You do not need to be pain free. Stay within acceptable pain limits, and aim to do a little bit more each day or every few days.",
    },
  },
  {
    id: "acl-long-term",
    kicker: "Later years",
    question: "Will a knee ligament injury cause problems later in life?",
    hook: "An old knee injury is one of the things linked to osteoarthritis. It raises the chance; it does not decide it.",
    short: "A past joint injury is one of the things thought to raise the risk of osteoarthritis in the knee, but it is not a certainty, and osteoarthritis does not always get worse. Most people find daily life improves after ACL surgery. Staying active, keeping the leg muscles strong and a healthy lifestyle all help look after the knee.",
    sections: [
      {
        heading: "Injury and arthritis",
        paragraphs: [
          "The NHS lists joint injury among the things thought to increase the risk of osteoarthritis, in particular overusing a joint when it has not had enough time to heal after an injury or operation.",
          "Arthritis UK lists previous injuries to the joint as one factor in osteoarthritis of the knee, and says it may affect one knee, especially if you have injured it in the past.",
          "Arthritis UK is supporting research at the University of Oxford into whether it is possible to predict the risk of knee pain and painful osteoarthritis after a knee joint injury.",
        ],
      },
      {
        heading: "Not a certainty",
        paragraphs: [
          "Knee pain is most often not due to arthritis. Osteoarthritis does not necessarily get any worse over time, and it can sometimes gradually improve.",
          "Changes to the joint do not always continue, and the level of change within the joint does not always match the level of pain people have.",
        ],
      },
      {
        heading: "After a reconstruction",
        paragraphs: [
          "Most people find their daily life improves after ACL surgery. Some have ongoing pain and stiffness, a knee that feels unstable, or problems where the graft was taken from, and physiotherapy and certain exercises may help.",
          "You may need more surgery if you tear the graft in your knee.",
        ],
      },
      {
        heading: "Looking after the knee",
        paragraphs: [
          "You may be able to lower your risk of osteoarthritis by avoiding injury and living a healthy lifestyle. The NHS suggests at least 150 minutes of moderate activity a week, such as cycling or fast walking, plus strength exercises on 2 or more days.",
          "Strengthening the muscles around the knee helps it cope with daily activities. Arthritis UK's knee exercises include a sitting straight-leg raise and sit to stands from a chair, started slowly and built up gradually.",
          "Carrying extra body weight makes joint pain more likely, and can make existing pain worse. Losing even a small amount of weight can make a big difference to knee pain.",
        ],
      },
    ],
    helps: [
      "Aim for at least 150 minutes of moderate activity a week, plus strength exercises on 2 or more days.",
      "Keep up your knee exercises even when your symptoms improve, to stop them coming back.",
      "If you are new to exercise, start slowly and build up gradually.",
      "See a GP if you have persistent joint symptoms, so they can confirm the diagnosis.",
      "If you are carrying extra weight, losing even a small amount can make a big difference to knee pain.",
    ],
    tryThisWeek: [
      "Build towards 150 minutes of activity.",
      "Do strength exercises on two days.",
      "Keep up your knee exercises.",
    ],
    ask: "What can I do to protect this knee for the long term?",
    interactive: {
      kind: "risk-check",
      title: "What affects the knee later on?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "injury", label: "A past knee injury", note: "Previous injuries to the joint are one factor in osteoarthritis of the knee.", changeable: false },
        { id: "too-soon", label: "Hard use before it has healed", note: "Overusing a joint when it has not had enough time to heal after an injury or operation.", changeable: true },
        { id: "weight", label: "Carrying extra weight", note: "Makes joint pain more likely. Losing even a small amount can make a big difference to knee pain.", changeable: true },
        { id: "muscles", label: "Weak muscles around the knee", note: "Strengthening the muscles around the knee helps it cope with daily activities.", changeable: true },
        { id: "age", label: "Getting older", note: "The risk of osteoarthritis increases as you get older.", changeable: false },
        { id: "family", label: "A family history", note: "Osteoarthritis may run in families, though no single gene has been found.", changeable: false },
      ],
    },
    sources: [NHS_OA, AU_OA_KNEE, AU_KNEE_PAIN, NHS_ACL_COMPLICATIONS, NHS_ACTIVITY, AU_EX_KNEES],
    quiz: {
      question: "Does a knee injury mean you will definitely get osteoarthritis?",
      options: [{ text: "No: it raises the risk, but is not a certainty", right: true }, { text: "Yes, always" }, { text: "Only after surgery" }],
      why: "The NHS lists joint injury among the things thought to increase the risk of osteoarthritis. Osteoarthritis does not necessarily get any worse over time, and it can sometimes gradually improve.",
    },
  },
];
