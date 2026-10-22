import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Torn meniscus page's pieces (content/library-conditions/body-more.ts). Every
// sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (nhs.uk's "Meniscus tear
// (knee cartilage damage)" page; the old torn-meniscus address now redirects there), NHS inform (NHS 24, Scotland),
// Arthritis UK (formerly Versus Arthritis), the Chartered Society of Physiotherapy, the Royal College of Surgeons of
// England's "Get Well Soon" leaflet, the Academy of Medical Royal Colleges' Evidence-Based Interventions leaflet and
// NHS physiotherapy and knee teams in Swansea Bay and Plymouth. Exercises are described only as the sources describe
// them. General information only; it never replaces what a person's own GP, physiotherapist or surgeon tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const inform = (label: string, path: string): LearnSource => ({ label: `NHS inform: ${label}`, url: `https://www.nhsinform.scot/illnesses-and-conditions/muscle-bone-and-joints/${path}` });
const au = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });
const csp = (label: string, path: string): LearnSource => ({ label: `Chartered Society of Physiotherapy: ${label}`, url: `https://www.csp.org.uk/conditions/knee-pain/${path}` });

const NHS_MENISCUS = nhs("Meniscus tear (knee cartilage damage)", "conditions/meniscus-tear/");
const NHS_KNEE_PAIN = nhs("Knee pain", "symptoms/knee-pain/");
const NHS_ARTHROSCOPY = nhs("Arthroscopy", "tests-and-treatments/arthroscopy/");
const NHS_MRI = nhs("MRI scan", "tests-and-treatments/mri-scan/");
const NHS_OA = nhs("Osteoarthritis", "conditions/osteoarthritis/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");
const NHS_WALKING = nhs("Walking for health", "live-well/exercise/walking-for-health/");
const NHS_RUNNING = nhs("Knee pain and other running injuries", "live-well/exercise/knee-pain-and-other-running-injuries/");

const INFORM_KNEE = inform("Knee problems", "leg-and-foot-problems-and-conditions/knee-problems");
const INFORM_KNEE_EX = inform("Exercises for knee problems", "leg-and-foot-problems-and-conditions/exercises-for-knee-problems");
const INFORM_SOFT = inform("Soft tissue injury advice", "soft-tissue-injury-advice");
const INFORM_PAINKILLERS = inform("When should I take painkillers?", "when-should-i-take-painkillers");
const INFORM_EX_INJURY = inform("How to reduce your risk of injury from exercise or physical activity", "how-to-reduce-your-risk-of-injury-from-exercise-or-physical-activity/");
const INFORM_WORK = inform("Returning to work after an injury", "returning-to-work-after-an-injury");
const INFORM_MENISCAL: LearnSource = { label: "NHS inform and NHS Tayside: Cartilage (meniscal) problems of the knee", url: "https://rightdecisions.scot.nhs.uk/media/40qd45go/nhs-inform-meniscal-injuries.pdf" };

const AU_KNEE = au("Knee pain", "understanding-arthritis/conditions/knee-pain/");
const AU_OA_KNEE = au("Osteoarthritis of the knee", "understanding-arthritis/conditions/osteoarthritis-of-the-knee/");
const AU_EX_KNEES = au("Exercises for the knees", "living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-knees/");

const CSP_HELP = csp("Getting help for knee pain", "getting-help-knee-pain");
const CSP_TREAT = csp("Treatment for knee pain", "treatment-knee-pain");
const CSP_VIDEO = csp("Video exercises for knee pain", "video-exercises-knee-pain");

const RCS_GWS: LearnSource = { label: "Royal College of Surgeons of England: Get Well Soon, arthroscopic operations on the knee for meniscal tears", url: "https://www.rcseng.ac.uk/-/media/Files/RCS/Patient-care/Recovering-from-surgery/GWSarthroscopicknee.pdf" };
const EBI: LearnSource = { label: "Academy of Medical Royal Colleges, Evidence-Based Interventions: Arthroscopic surgery for meniscal tear", url: "https://ebi.aomrc.org.uk/wp-content/uploads/2023/03/Arthroscopic_surgery_for_meniscal_tear_0421.pdf" };
const NICE_OA: LearnSource = { label: "NICE: Osteoarthritis in over 16s (NG226), recommendations", url: "https://www.nice.org.uk/guidance/ng226/chapter/Recommendations" };
const SBUHB_MENISCAL: LearnSource = { label: "Swansea Bay University Health Board physiotherapy: Meniscal injuries", url: "https://sbuhb.nhs.wales/hospitals/a-z-services/physiotherapy/musculoskeletal-physiotherapy/knee-pain/meniscal-injuries/" };
const SBUHB_SPORT: LearnSource = { label: "Swansea Bay University Health Board physiotherapy: Return to sport", url: "https://sbuhb.nhs.wales/hospitals/a-z-services/physiotherapy/musculoskeletal-physiotherapy/return-to-sport1/" };
const PLYMOUTH: LearnSource = { label: "University Hospitals Plymouth NHS Trust: Traumatic meniscal tears", url: "https://www.plymouthhospitals.nhs.uk/traumatic-meniscal-tears" };

export const meniscusAnswers: LearnArticle[] = [
  {
    id: "men-what-it-is",
    kicker: "Understanding",
    question: "What is the meniscus, and what does it do?",
    hook: "Two tough, rubbery cushions sit between the thighbone and the shinbone. When people talk about torn knee cartilage, this is usually what they mean.",
    short: "The menisci are two wedge-shaped pieces of cartilage in the knee that act as shock absorbers between the thighbone and the shinbone. One sits on the inner side of the knee and one on the outer side. A meniscus tear is a common type of damage to cartilage in the knee.",
    sections: [
      {
        heading: "Two cushions inside the knee",
        paragraphs: [
          "The knee is the largest joint in your body. It is formed where three bones meet: the thighbone, the shinbone and the kneecap.",
          "Between the shinbone and the thighbone sit two wedge-shaped pieces of cartilage called the menisci, which act as shock absorbers. The medial meniscus is on the inner side of the knee, and the lateral meniscus is on the outer side.",
        ],
      },
      {
        heading: "What the meniscus does",
        paragraphs: [
          "The meniscus helps to cushion and stabilise the joint, which is why it is tough and rubbery. The menisci also help to spread weight evenly across the knee joint.",
          "They help to improve smooth movement and stability of the knee. Each one is crescent or horseshoe shaped.",
        ],
      },
      {
        heading: "Two kinds of cartilage",
        paragraphs: [
          "There are two types of cartilage in the knee. Articular cartilage covers the ends of the thighbone and shinbone and the back of the kneecap, and helps the bones glide smoothly as you bend or straighten your leg.",
          "When people say they have torn cartilage in the knee, they are usually talking about a torn meniscus. The NHS describes a meniscus tear as a common type of damage to cartilage in the knee.",
        ],
      },
      {
        heading: "What a tear is like",
        paragraphs: [
          "A tear can be like a flap that moves in and out and gets wedged between the bones. The cartilage usually gets damaged because of an injury.",
          "Menisci are present in other joints, but they are most commonly affected in the knee. Many people have meniscal tears without any pain or limitations.",
        ],
      },
    ],
    helps: [
      "See a GP if knee pain is stopping you doing normal activities or affecting your sleep.",
      "In many areas you may be able to get help, such as physiotherapy, from NHS community musculoskeletal services without a GP referral.",
      "Keep the knee moving as much as possible and keep the thigh muscles strong.",
      "It is important not to misdiagnose yourself. If you are worried, see a doctor.",
    ],
    tryThisWeek: [
      "See a GP if pain stops normal life.",
      "Check if you can refer yourself to physio.",
      "Keep the knee moving.",
    ],
    ask: "Which meniscus is torn, and what does that mean for how my knee will recover?",
    interactive: {
      kind: "flip-cards",
      title: "Inside the knee",
      intro: "Turn each card to see what that part of the knee does.",
      cards: [
        { id: "medial", front: "Medial meniscus", when: "The inner side of the knee", back: "A wedge-shaped shock absorber between the shinbone and the thighbone." },
        { id: "lateral", front: "Lateral meniscus", when: "The outer side of the knee", back: "The second shock absorber. Together they cushion and stabilise the joint." },
        { id: "articular", front: "Articular cartilage", when: "The ends of the bones", back: "A slippery surface that helps the bones glide smoothly as you bend or straighten your leg." },
        { id: "ligaments", front: "Ligaments", when: "Four main ones", back: "They act like strong ropes to hold the bones together and keep your knee in place." },
        { id: "tendons", front: "Tendons", when: "Muscle to bone", back: "These connect muscles to your bones." },
      ],
    },
    sources: [AU_KNEE, NHS_MENISCUS, INFORM_MENISCAL, SBUHB_MENISCAL, AU_OA_KNEE],
    quiz: {
      question: "Where is the lateral meniscus?",
      options: [{ text: "On the outer side of the knee", right: true }, { text: "Behind the kneecap" }, { text: "In the hip" }],
      why: "The medial meniscus is on the inner side of the knee, and the lateral meniscus is on the outer side.",
    },
  },
  {
    id: "men-symptoms",
    kicker: "Symptoms",
    question: "What does a torn meniscus feel like?",
    hook: "Pain at the side of the knee, swelling that arrives hours later, and a knee that clicks, catches or gives way.",
    short: "A torn meniscus can cause knee pain or tenderness, stiffness or swelling, difficulty bending or straightening the knee, the knee giving way, and a crunching or clicking feeling. The swelling may not start for a few hours or days. The symptoms can be similar to sprains, and some tears cause no symptoms at all.",
    sections: [
      {
        heading: "The common symptoms",
        paragraphs: [
          "Symptoms of a meniscus tear include knee pain or tenderness, stiffness or swelling around the knee, and difficulty bending, straightening or moving the knee.",
          "The knee may give way when you try to stand, and you may have a crunching or clicking feeling when you move it. The symptoms can be similar to sprains.",
        ],
      },
      {
        heading: "Where it hurts",
        paragraphs: [
          "Pain is often at the sides of the knee along the joint, usually at a specific point. It can be worse if you straighten the leg fully.",
          "Pain standing or walking is common, especially when changing direction and turning, and on stairs or when squatting or kneeling. Some people describe a deep pain like toothache.",
        ],
      },
      {
        heading: "Swelling that comes later",
        paragraphs: [
          "The swelling may not start for a few hours or days. It is often mild, coming on within a day or two of the injury.",
          "Swelling that builds over the course of the day or night is more typical of a meniscal injury than instant swelling. NHS inform advises phoning 111 if your knee becomes immediately swollen after a twisting injury.",
        ],
      },
      {
        heading: "Clicking, locking and giving way",
        paragraphs: [
          "Painful clicking, knee locking and buckling or giving way are all symptoms of a meniscal tear.",
          "Painless clicking is normal. Get advice from NHS 111 now if your knee locks, gives way or painfully clicks.",
        ],
      },
      {
        heading: "Tears without symptoms",
        paragraphs: [
          "In many people a meniscal tear will produce no symptoms. Tears are common even in knees that cause no pain or limitations.",
        ],
      },
    ],
    helps: [
      "Put an ice pack or bag of frozen peas wrapped in a towel on your knee for up to 20 minutes every 2 to 3 hours.",
      "See a GP if your symptoms have not improved after treating it at home, or the pain is getting worse or keeps coming back.",
      "See a GP if your knee is stiff for more than 30 minutes after waking up.",
      "Get advice from NHS 111 if your knee locks, gives way or painfully clicks.",
      "Go to A&E if your knee has moved out of place, changed shape or is pointing at an odd angle.",
    ],
    tryThisWeek: [
      "Ice the knee, wrapped, up to 20 minutes.",
      "See a GP if it is not improving.",
      "Call 111 if it locks or gives way.",
    ],
    ask: "Do my symptoms sound like a meniscus tear, a sprain or something else?",
    interactive: {
      kind: "signs",
      title: "What is your knee doing?",
      intro: "Tick what you have noticed. The list is ready to take to your GP or physiotherapist.",
      signs: [
        "Pain or tenderness at the side of the knee",
        "Swelling that came on hours or days later",
        "Stiffness, or difficulty bending or straightening",
        "Pain on stairs, squatting or kneeling",
        "Pain when twisting or changing direction",
        "The knee giving way when I stand",
        "Painful clicking or a crunching feeling",
        "The knee locking so I cannot move it",
      ],
      after: "Get advice from NHS 111 if your knee locks, gives way or painfully clicks. Go to A&E if your knee has changed shape or you have no feeling in your knee, leg or toes.",
      copyHeading: "Knee symptoms to mention",
    },
    sources: [NHS_MENISCUS, INFORM_MENISCAL, SBUHB_MENISCAL, PLYMOUTH, NHS_KNEE_PAIN, EBI, INFORM_KNEE],
    quiz: {
      question: "When might the swelling from a meniscus tear start?",
      options: [{ text: "After a few hours or days", right: true }, { text: "Only after several weeks" }, { text: "It never swells" }],
      why: "The swelling may not start for a few hours or days.",
    },
  },
  {
    id: "men-causes",
    kicker: "Causes",
    question: "How does a meniscus tear happen?",
    hook: "A twist on a bent knee in sport, or a small twist getting up from a chair. Younger knees tear; older knees wear.",
    short: "A meniscus tear usually happens when you twist your knee while playing sport, but it can also happen from minor injuries such as twisting when standing up. Acute tears from injury tend to be in people under 50, and degenerative tears, from wear and tear over the years, in people over 50.",
    sections: [
      {
        heading: "A twist",
        paragraphs: [
          "A meniscus tear usually happens when you twist your knee while playing sport. But it can also happen from more minor injuries, such as twisting when standing up.",
          "The typical way it happens is a twisting injury on a bent knee while it is bearing weight.",
        ],
      },
      {
        heading: "Two kinds of tear",
        paragraphs: [
          "Meniscal tears can be acute, usually due to trauma and twisting movements. They can also be due to wear and tear over the years, which is called degenerative.",
          "Acute tears due to trauma tend to be in people under 50, and degenerative tears in people over 50. Injuries commonly come from high trauma in a younger person, or from degeneration or low grade trauma in older people.",
        ],
      },
      {
        heading: "Who it affects",
        paragraphs: [
          "Traumatic meniscal injuries are commonly sporting injuries. They can happen at any age, but more often between the ages of 15 and 40.",
          "Most commonly there is quite a sporting injury, or a significant twisting injury associated with a slip or trip.",
        ],
      },
      {
        heading: "Wear with age",
        paragraphs: [
          "Tearing of the meniscus is one of the most common forms of knee injury. It can occur during sports or can be due to age-related wear and tear.",
          "As you get older, normal age-related changes can cause a knee problem to flare up now and again, often for no reason. You do not have to be sporty to have a knee injury.",
        ],
      },
    ],
    helps: [
      "Avoid twisting and turning activities or sports, as these are likely to make the problem more painful.",
      "If the problem does not settle within a few weeks, see your GP.",
      "Remember to warm up fully before you start sporting activities.",
      "Avoid sports or heavy lifting until you have less discomfort and good movement.",
    ],
    tryThisWeek: [
      "Avoid twisting and turning sports.",
      "See a GP if it has not settled in weeks.",
      "Warm up fully before sport.",
    ],
    ask: "Is my tear more likely to be from the injury itself or from wear over the years, and does that change my treatment?",
    interactive: {
      kind: "flip-cards",
      title: "Twists and wear",
      intro: "Turn each card to see how meniscal tears happen.",
      cards: [
        { id: "acute", front: "An acute tear", when: "Tends to be under 50", back: "Usually due to trauma and twisting movements, often a sporting injury." },
        { id: "degenerative", front: "A degenerative tear", when: "Tends to be over 50", back: "Due to wear and tear over the years, or low grade trauma." },
        { id: "twist", front: "The typical twist", when: "How it often happens", back: "A twisting injury on a bent knee while it is bearing weight." },
        { id: "minor", front: "A minor twist", when: "Not only in sport", back: "It can also happen from twisting when standing up." },
        { id: "silent", front: "A tear with no symptoms", when: "Found by chance", back: "In many people a meniscal tear will produce no symptoms." },
      ],
    },
    sources: [NHS_MENISCUS, INFORM_MENISCAL, SBUHB_MENISCAL, PLYMOUTH, EBI, INFORM_KNEE, AU_KNEE],
    quiz: {
      question: "Degenerative meniscal tears tend to happen in people of what age?",
      options: [{ text: "Over 50", right: true }, { text: "Under 20" }, { text: "Only children" }],
      why: "Acute tears due to trauma tend to be in people under 50, and degenerative tears in people over 50.",
    },
  },
  {
    id: "men-diagnosis",
    kicker: "Diagnosis",
    question: "How is a torn meniscus diagnosed, and do I need an MRI?",
    hook: "Your story and an examination tell the knee team most of what they need. A scan is not always the answer.",
    short: "A doctor or physiotherapist can often diagnose a knee problem from your symptoms and an examination. Many people do not need an MRI scan, and because tears are common in knees with no symptoms, a scan can show changes that are not causing any problem. An X-ray or MRI may be offered if more specialised treatment may be needed.",
    sections: [
      {
        heading: "Your story comes first",
        paragraphs: [
          "A doctor will often be able to diagnose a knee problem from your symptoms along with a physical examination of your knee.",
          "One NHS knee team says the most important thing they do is listen carefully to the problem you are describing. Your symptoms tell them much more than pulling and pushing your knee about.",
        ],
      },
      {
        heading: "The examination",
        paragraphs: [
          "A healthcare professional will ask you questions and carry out a clinical examination to help find the cause of your problem. A physiotherapist will take a detailed history and do a physical assessment to see how your muscles, nerves and joints are working.",
          "Tenderness around the sides of the knee, called joint line tenderness, is a common symptom of a meniscal injury.",
        ],
      },
      {
        heading: "Do you need a scan?",
        paragraphs: [
          "Not necessarily. Many people who come to see a knee team do not need an MRI scan to decide what happens next.",
          "Occasionally a doctor may suggest tests or a scan to help confirm a diagnosis, especially if more specialised treatment may be needed. An X-ray or MRI scan may be offered.",
        ],
      },
      {
        heading: "Why scans can mislead",
        paragraphs: [
          "Meniscal tears are common even in knees with no symptoms. For this reason not all knee injuries are scanned, as people may have findings on an MRI that were not causing them any issue.",
          "Such findings can muddy the waters and could lead to treatment that is not right for you.",
        ],
      },
      {
        heading: "If you have an MRI",
        paragraphs: [
          "An MRI scan takes detailed pictures of the inside of your body. It usually takes between 15 minutes and 1 hour, and the scanner makes loud bangs and clicks, so you will be given ear plugs or headphones.",
          "It usually takes between 1 and 2 weeks to get the results. If you feel anxious or have a fear of small spaces, talk to the hospital before your appointment.",
        ],
      },
    ],
    helps: [
      "In many areas you can get help, such as physiotherapy, from NHS community musculoskeletal services without a GP referral.",
      "Before an MRI, take off anything with metal in it, such as jewellery or hair clips, and empty coins and keys from your pockets.",
      "Talk to the hospital before your scan if you are anxious or have a fear of small spaces.",
      "If you have not heard about your MRI results after a few weeks, contact the doctor who referred you.",
      "Tell the doctor if you have questions about your results, or do not understand them.",
    ],
    tryThisWeek: [
      "Check if you can self-refer to physio.",
      "Take off metal before an MRI.",
      "Chase results after a few weeks.",
    ],
    ask: "Do I need a scan, and how would the result change what we do?",
    interactive: {
      kind: "timeline",
      title: "From first visit to a plan",
      steps: [
        { id: "history", when: "First appointment", title: "Your story", points: ["How the injury happened and what the knee does.", "Symptoms tell the team the most."] },
        { id: "exam", when: "Same visit", title: "Examination", points: ["A hands-on check of how the knee moves.", "Tenderness along the sides of the knee."] },
        { id: "scan", when: "Only sometimes", title: "X-ray or MRI", points: ["If more specialised treatment may be needed.", "An MRI takes 15 minutes to 1 hour."] },
        { id: "results", when: "1 to 2 weeks later", title: "Results", points: ["A radiologist looks at the images.", "Contact the doctor if you hear nothing after a few weeks."] },
        { id: "plan", when: "Next", title: "A plan together", points: ["Often exercise and physiotherapy first.", "Ask about anything you do not understand."] },
      ],
    },
    sources: [AU_KNEE, PLYMOUTH, SBUHB_MENISCAL, INFORM_MENISCAL, NHS_MRI, CSP_HELP, NHS_KNEE_PAIN],
    quiz: {
      question: "Does everyone with a suspected meniscal tear need an MRI scan?",
      options: [{ text: "Not necessarily", right: true }, { text: "Yes, always" }, { text: "Only children do" }],
      why: "Not necessarily. Many people who come to see a knee team do not need an MRI scan to decide what happens next.",
    },
  },
  {
    id: "men-self-care",
    kicker: "Self-care",
    question: "What should I do in the first few days after hurting my knee?",
    hook: "Rest it, cool it, raise it, support it. And keep it gently moving.",
    short: "In the first few days, rest the knee when you can, use a wrapped ice pack for up to 20 minutes every 2 to 3 hours, keep the leg raised and wear a bandage or knee support. Paracetamol or ibuprofen gel or tablets can ease the pain. Avoid heat, alcohol, massage and heavy lifting, but do not stop moving the knee completely.",
    sections: [
      {
        heading: "The first few days",
        paragraphs: [
          "Stop any exercise or activities and rest your knee when you can during the first few days. Keep your leg raised on a pillow as much as possible.",
          "Do not completely stop moving your knee. Arthritis UK suggests moving it gently for 10 to 20 seconds every hour when you are awake, and avoiding long periods where you do not move at all.",
        ],
      },
      {
        heading: "Ice, not heat",
        paragraphs: [
          "Put an ice pack, or a bag of frozen peas, wrapped in a towel on your knee for up to 20 minutes every 2 to 3 hours.",
          "Do not use heat packs and avoid hot baths. Heat should not be used on a new injury, as it might increase bleeding under the skin and make the problem worse.",
        ],
      },
      {
        heading: "Support, and what to avoid",
        paragraphs: [
          "Wrap a bandage around your knee or wear a knee support, and remove it when you sleep. A pharmacist can tell you about the types of knee supports you can get.",
          "Do not drink alcohol, do not massage your knee and do not carry anything heavy.",
        ],
      },
      {
        heading: "Painkillers",
        paragraphs: [
          "Paracetamol or ibuprofen gel or tablets can ease the pain. The Chartered Society of Physiotherapy advises taking painkillers regularly and at the recommended dose, rather than waiting until the pain is severe.",
          "NHS inform says anti-inflammatory medicines such as ibuprofen should only be considered 48 hours after an injury, as earlier use may affect healing in some conditions. If you still need pain relief after 4 days, speak to your pharmacist.",
        ],
      },
      {
        heading: "After 48 hours",
        paragraphs: [
          "After 48 hours, try to use your leg more, as exercise can help with long-term pain. Too much rest can slow down your recovery.",
          "When going upstairs, lead with your good leg, and when going downstairs, lead with your sore leg. Use the handrail if there is one.",
        ],
      },
    ],
    helps: [
      "Rest your knee when you can in the first few days, but after a few days try some gentle movements.",
      "Wrap an ice pack in a towel and use it for up to 20 minutes every 2 to 3 hours.",
      "Keep your leg raised on a pillow as much as possible.",
      "Ask a pharmacist about painkillers and the types of knee supports you can get.",
      "If you already take medicines for something else or have other health problems, check with a pharmacist before taking painkillers.",
      "See a GP if your symptoms have not improved after treating it at home.",
    ],
    tryThisWeek: [
      "Ice the knee for up to 20 minutes.",
      "Raise the leg on a pillow.",
      "Ask a pharmacist about painkillers.",
    ],
    ask: "Which painkillers are right for me, and should I wear a knee support?",
    interactive: {
      kind: "scenarios",
      title: "The first few days",
      scenarios: [
        {
          id: "heat",
          situation: "Your knee is newly swollen and a hot water bottle is to hand.",
          options: [{ text: "Use a wrapped ice pack instead", best: true }, { text: "Use the hot water bottle" }],
          why: "Do not use heat packs and avoid hot baths. Heat should not be used on a new injury.",
        },
        {
          id: "still",
          situation: "Day four, and you have barely moved your knee.",
          options: [{ text: "Try some gentle movements", best: true }, { text: "Keep it completely still" }],
          why: "Do not completely stop moving your knee. After a few days of resting, try to do some gentle movements.",
        },
        {
          id: "massage",
          situation: "A friend offers to massage the sore knee.",
          options: [{ text: "Thank them, but skip it", best: true }, { text: "A firm massage will help" }],
          why: "Do not drink alcohol, do not massage your knee and do not carry anything heavy.",
        },
        {
          id: "pain",
          situation: "After 4 days you still need pain relief.",
          options: [{ text: "Speak to your pharmacist", best: true }, { text: "Take a bigger dose" }],
          why: "If you still need pain relief after 4 days, speak to your pharmacist.",
        },
      ],
    },
    sources: [NHS_MENISCUS, NHS_KNEE_PAIN, AU_KNEE, INFORM_PAINKILLERS, INFORM_SOFT, CSP_TREAT, INFORM_KNEE],
    quiz: {
      question: "Should you use a heat pack on a newly torn meniscus?",
      options: [{ text: "No, use a wrapped ice pack", right: true }, { text: "Yes, as hot as possible" }, { text: "Only overnight" }],
      why: "Do not use heat packs and avoid hot baths. Heat should not be used on a new injury, as it might increase bleeding under the skin.",
    },
  },
  {
    id: "men-exercises",
    kicker: "Exercise",
    question: "Which exercises help a torn meniscus?",
    hook: "Movement first, then strength. Small amounts often, guided by how the knee answers back.",
    short: "After a knee injury it is important to get movement and strength back, and keeping the thigh muscles strong matters in every case. Physiotherapy may be recommended to reduce pain and improve movement and strength. Check with a physiotherapist or healthcare professional before starting new exercises, start small and build up gradually.",
    sections: [
      {
        heading: "Why exercise matters",
        paragraphs: [
          "After any knee problem, it is important to get movement and strength back. This supports tissue healing and will help you get moving again.",
          "In all cases it is very important to keep the knee moving and to keep the thigh muscles strong. If movement or strength gets worse, other problems can develop, such as kneecap pain.",
        ],
      },
      {
        heading: "Check first",
        paragraphs: [
          "The Chartered Society of Physiotherapy recommends seeking advice from a physiotherapist or healthcare professional before starting any new exercise regime. If any of the exercises worsen your pain, seek urgent medical advice.",
          "Physiotherapy may be recommended to help reduce pain and improve movement and strength in the knee. A physiotherapist can give you a home exercise programme for strength and mobility.",
        ],
      },
      {
        heading: "Early exercises, lying down",
        paragraphs: [
          "NHS inform's knee exercises include bending and straightening the knee. Lying on your bed, slowly slide your foot towards you as far as is comfortable, hold for 2 seconds and straighten your leg.",
          "Another is tightening your thigh muscle and gently pushing the back of your knee into the bed. Hold for 10 seconds and then relax your leg.",
        ],
      },
      {
        heading: "Building strength",
        paragraphs: [
          "When the swelling has started to settle, strengthening the muscles around the knee helps it spread and absorb forces and gives the meniscus more chance to heal. Cycling or exercise in water is recommended to promote circulation and healing.",
          "Exercises the Chartered Society of Physiotherapy shows include sit to stand from a chair placed against a wall, stepping up and down on a stair, and a partial squat holding on to a counter.",
        ],
      },
      {
        heading: "How much, and how it should feel",
        paragraphs: [
          "Rate your pain out of 10 and aim to keep it between 0 and 5 during exercise. If it goes higher, do fewer repetitions, move more slowly or rest longer between movements.",
          "Start with 2 to 3 repetitions at a time and build up gradually, towards a maximum of 2 sets of 15. Stop the exercises if they make your symptoms worse or cause new pain.",
        ],
      },
    ],
    helps: [
      "Seek advice from a physiotherapist or healthcare professional before starting any new exercise regime.",
      "Do small amounts throughout the day, and add 1 or 2 repetitions every few days as it gets easier.",
      "Keep your pain within a rating of 0 to 5 out of 10 while exercising.",
      "Your pain should be no worse the morning after you have exercised.",
      "If your knee pain has not improved within 6 weeks, talk to a healthcare professional.",
    ],
    tryThisWeek: [
      "Ask a physio before starting.",
      "Do small amounts through the day.",
      "Keep pain at 5 out of 10 or less.",
    ],
    ask: "Can I be referred to a physiotherapist, and which exercises suit my knee right now?",
    interactive: {
      kind: "flip-cards",
      title: "Five knee exercises, card by card",
      intro: "Check with your GP or physiotherapist first. Turn each card to see how NHS inform, Arthritis UK or the Chartered Society of Physiotherapy describe it.",
      cards: [
        { id: "bend", front: "Knee bend", when: "Lying on your bed", back: "Slide your foot towards you as far as is comfortable, hold for 2 seconds, then straighten your leg." },
        { id: "thigh", front: "Thigh tighten", when: "Lying on your bed", back: "Tighten your thigh muscle and gently push the back of your knee into the bed. Hold for 10 seconds." },
        { id: "leg-raise", front: "Straight-leg raise", when: "Lying, one knee bent", back: "Keep the other leg straight and lift it just off the bed. Hold for a slow count of five, then lower." },
        { id: "sit-stand", front: "Sit to stand", when: "A chair against a wall", back: "Lean forward from the hips, press through your heels to stand, then slowly lower back to sitting." },
        { id: "step", front: "Step up and down", when: "At the bottom stair", back: "Right up, left up, right down, left down. Then switch feet and repeat." },
      ],
    },
    sources: [INFORM_KNEE_EX, CSP_VIDEO, AU_EX_KNEES, INFORM_MENISCAL, SBUHB_MENISCAL, CSP_HELP, NHS_MENISCUS],
    quiz: {
      question: "During knee exercises, what pain level does NHS inform suggest aiming for?",
      options: [{ text: "Between 0 and 5 out of 10", right: true }, { text: "As much as you can bear" }, { text: "No feeling at all" }],
      why: "Rate your pain out of 10 and aim to keep it between 0 and 5 during exercise.",
    },
  },
  {
    id: "men-surgery",
    kicker: "Surgery",
    question: "Keyhole surgery for a torn meniscus: who does it help?",
    hook: "For most people the knee improves without an operation. For a few, repairing or trimming the tear can help.",
    short: "Surgery for meniscal tears should only be carried out for a few clinical reasons, because for most people the symptoms and the knee's function improve without an operation. If the damage is severe, or a tear keeps causing troublesome symptoms, keyhole surgery (arthroscopy) may be advised to repair or remove the damaged cartilage.",
    sections: [
      {
        heading: "Most tears do not need an operation",
        paragraphs: [
          "Surgery for meniscal tears should only be carried out for a few clinical reasons. For most people with meniscal tears, their symptoms and the function of the knee will improve without an operation.",
          "Where a meniscal injury is causing problems, a non-surgical programme can improve symptoms just as well as surgery, and often better. Surgery or injections are not recommended for most types of knee pain, because people often recover as well, or better, without them.",
        ],
      },
      {
        heading: "When it may help",
        paragraphs: [
          "If the damage is severe, you may need arthroscopy surgery to repair or remove the damaged cartilage. If a tear causes persistent troublesome symptoms, an operation may be advised.",
          "In a very few cases, surgery to repair or cut out the bit of torn meniscus may help to improve knee symptoms. Other injuries, such as ligament damage, may be repaired at the same time.",
        ],
      },
      {
        heading: "What keyhole surgery involves",
        paragraphs: [
          "An arthroscopy is a type of keyhole surgery. The surgeon makes one or more small cuts, around 2mm to 3mm wide, and puts in a tiny camera with a light that sends pictures of the inside of the joint to a screen.",
          "The operation may include a partial meniscectomy or a meniscal repair. An arthroscopy can take 30 minutes to 3 hours, and most patients having this operation are in and out of hospital on the same day.",
        ],
      },
      {
        heading: "Risks and alternatives",
        paragraphs: [
          "The operation may not work to improve your symptoms. There are also the risks of any surgery, which include bleeding, infection, pain and how the anaesthetic may affect you.",
          "For some people physiotherapy, exercises to strengthen the muscles, losing weight or painkillers can help. Doing nothing is unlikely to cause harm, and most knee symptoms improve with time.",
        ],
      },
      {
        heading: "Arthritis and keyhole washouts",
        paragraphs: [
          "NICE advises that arthroscopic lavage or debridement should not be offered to people with osteoarthritis.",
          "Arthritis UK says this keyhole washout is not usually available for knee osteoarthritis unless there are clear mechanical problems, such as the knee locking.",
        ],
      },
    ],
    helps: [
      "Discuss the alternatives, and what is best for you, with your doctor.",
      "Ask your healthcare team what you can expect to gain from surgery and what the possible risks are.",
      "For some people physiotherapy and exercises to strengthen the muscles can improve symptoms.",
      "If you are referred for an arthroscopy, read the letter or email about eating, medicines and recovery.",
      "Have a shower or bath the morning of the operation, or the night before, to reduce the risk of infection.",
    ],
    tryThisWeek: [
      "Ask about alternatives to surgery.",
      "Ask what surgery could gain me.",
      "Read the hospital's letter carefully.",
    ],
    ask: "Is my tear one of the few that surgery helps, and what would happen if I waited?",
    interactive: {
      kind: "flip-cards",
      title: "The options, card by card",
      intro: "Turn each card to see what each option is and when it is used.",
      cards: [
        { id: "physio", front: "Physiotherapy and exercise", when: "Most people, first", back: "Can improve symptoms just as well as surgery, and often better, where a tear is causing problems." },
        { id: "meniscectomy", front: "Partial meniscectomy", when: "Keyhole surgery", back: "Cutting out the bit of torn meniscus. Helps in a very few cases." },
        { id: "repair", front: "Meniscal repair", when: "Keyhole surgery", back: "Repairing the torn meniscus. Other injuries, such as ligament damage, may be repaired too." },
        { id: "wait", front: "Doing nothing", when: "Watch and wait", back: "Most knee symptoms improve with time. Doing nothing is unlikely to cause harm." },
        { id: "washout", front: "Arthroscopic washout", when: "With osteoarthritis", back: "NICE advises it should not be offered to people with osteoarthritis." },
      ],
    },
    sources: [EBI, NHS_MENISCUS, NHS_ARTHROSCOPY, SBUHB_MENISCAL, INFORM_MENISCAL, RCS_GWS, AU_KNEE, NICE_OA, AU_OA_KNEE],
    quiz: {
      question: "For most people with a meniscal tear, what happens without an operation?",
      options: [{ text: "Symptoms and knee function improve", right: true }, { text: "The knee always gets worse" }, { text: "The tear spreads to the hip" }],
      why: "For most people with meniscal tears, their symptoms and the function of the knee will improve without an operation.",
    },
  },
  {
    id: "men-after-surgery",
    kicker: "Recovery",
    question: "What is recovery like after keyhole knee surgery?",
    hook: "Home the same day, short walks by day three, and for many people back at a desk within a fortnight.",
    short: "Most people go home the same day after keyhole surgery for a meniscal tear. The knee is sore and swollen at first, and walking, ice, raising the leg and the physiotherapy exercises all help. People with office jobs may return within days, but the average is 10 to 14 days. Full recovery can take from around a week to several months.",
    sections: [
      {
        heading: "The first days",
        paragraphs: [
          "Most patients who have this operation are in and out of hospital on the same day. Someone will need to pick you up from hospital and take you home, as you cannot drive after a general anaesthetic.",
          "Your knee will be sore and swollen at first, with pain around the scars, and you will feel more tired than normal. Get up, get dressed and move around the house, and do the exercises your physiotherapist has taught you.",
        ],
      },
      {
        heading: "Scars, stitches and swelling",
        paragraphs: [
          "You will have between 2 and 4 small scars around the kneecap. Keep them covered for the first 48 hours and then leave them uncovered. Stitches that need removing can usually be taken out by the practice nurse 7 to 14 days after the operation.",
          "Apply an ice pack wrapped in a tea towel for 20 minutes every 2 to 3 hours, and keep your leg raised when sitting, to help reduce swelling. Wear a compression stocking if you have been given one.",
        ],
      },
      {
        heading: "Building up",
        paragraphs: [
          "From about day 3, go for a short walk of no more than 5 to 10 minutes, rest, and go for another later in the day. From about a week, walking, swimming, cycling and light exercise are allowed, as long as the wound is comfortable.",
          "If you feel pain, you have probably just overdone it a little. Ease back for a day or two and then gradually build up again.",
        ],
      },
      {
        heading: "Work and driving",
        paragraphs: [
          "In an office job, it is possible to return to work within 2 to 3 days, but in most cases the average is 10 to 14 days after the operation. A more physically demanding job may need up to 6 weeks off.",
          "The NHS says you should be able to drive again when you have fully recovered and can do an emergency stop, usually at least 2 weeks after the operation. Your insurance company should be told about the operation.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Contact NHS 111, or the hospital where you had your arthroscopy, if you have a high temperature or feel hot, cold or shivery, severe or increasing joint pain, or smelly liquid leaking from the cut.",
          "Do the same for severe swelling or redness in or around the joint that may get worse, or numbness or tingling in or around the joint. Seek advice too if your knee starts to bleed.",
        ],
      },
    ],
    helps: [
      "Continue the exercises your physiotherapist taught you for as long as you are advised.",
      "Get up at your normal time, get dressed and move about the house. If you get tired, rest later.",
      "Wear a compression stocking if you have been given one.",
      "Painkillers can cause constipation, so eat plenty of fibre and drink plenty of water.",
      "Before driving, sit in the driving seat in a safe place, without the keys in the ignition, and practise pressing firmly on the pedals.",
      "Contact NHS 111 or the hospital if you have a high temperature or increasing pain after surgery.",
    ],
    tryThisWeek: [
      "Keep up the physio exercises.",
      "Get up, dress and move about.",
      "Call 111 for fever or rising pain.",
    ],
    ask: "When can I go back to work, drive and exercise after my operation?",
    interactive: {
      kind: "timeline",
      title: "The first weeks after keyhole surgery",
      steps: [
        { id: "days-1-2", when: "Days 1 to 2", title: "Sore, swollen and tired", points: ["Get up, get dressed, move around the house.", "Do the physiotherapy exercises."] },
        { id: "day-3", when: "Day 3", title: "Short walks", points: ["Walks of no more than 5 to 10 minutes.", "Ice packs for the swelling."] },
        { id: "days-4-6", when: "Days 4 to 6", title: "A little more each day", points: ["Slightly longer walks.", "Flying is best avoided."] },
        { id: "week-2", when: "Days 7 to 13", title: "Most things, most of the time", points: ["Walking, swimming, cycling, light exercise.", "Often back to work after day 10."] },
        { id: "weeks-2-4", when: "2 to 4 weeks", title: "Back at work", points: ["Most people are back at work by now.", "Impact sports wait for up to 6 weeks."] },
      ],
    },
    sources: [RCS_GWS, NHS_ARTHROSCOPY],
    quiz: {
      question: "On average, how long after the operation do people go back to work?",
      options: [{ text: "10 to 14 days", right: true }, { text: "Six months" }, { text: "The same afternoon" }],
      why: "In an office job, it is possible to return to work within 2 to 3 days, but in most cases the average is 10 to 14 days after the operation.",
    },
  },
  {
    id: "men-activity",
    kicker: "Living well",
    question: "How can I stay active with a torn meniscus?",
    hook: "Rest slows recovery. Cycling, swimming and walking keep the knee working while it settles.",
    short: "Keeping your body moving is an essential part of recovery, and after the first 48 hours using the leg more can help. Low-impact exercise such as cycling and swimming is useful after a knee injury, and walking can be built up gradually. You do not need to be pain free, and staying at or returning to work can help.",
    sections: [
      {
        heading: "Moving helps",
        paragraphs: [
          "Keeping your body moving is an essential part of treatment and recovery. After 48 hours, try to use your leg more, as exercise really helps your knee and can relieve pain.",
          "Too much rest can slow down your recovery. A little activity is better than nothing, and you do not need to be pain free.",
        ],
      },
      {
        heading: "Gentle ways to stay active",
        paragraphs: [
          "Low-impact exercise, such as cycling and swimming, can be useful when recovering from a knee injury.",
          "If your joints are a problem, check whether your local swimming pool holds exercise classes. The water helps to support your joints while you move and can help you strengthen your muscles.",
        ],
      },
      {
        heading: "Walking",
        paragraphs: [
          "Walking is simple, free and one of the easiest ways to get more active. A brisk 10-minute daily walk has lots of health benefits.",
          "If you are not very active but are able to walk, increase your walking distance gradually.",
        ],
      },
      {
        heading: "Everyday life and work",
        paragraphs: [
          "Try to stick to your normal routine if you can, as this can help your recovery, including staying at or returning to work. You do not need to be symptom free before you consider returning to work.",
          "Avoid heavy lifting until your pain has gone down and you have good movement in your knee. If your work involves heavy lifting, you might need lighter duties or fewer hours for a while.",
        ],
      },
      {
        heading: "The weekly picture",
        paragraphs: [
          "Adults should aim for at least 150 minutes of moderate intensity activity a week, and strengthening activities on at least 2 days a week. Speak to your GP first if you have not exercised for some time or have medical conditions or concerns.",
          "Being active can keep your other muscles and joints strong, help prevent the problem coming back and help you aim for a healthy body weight.",
        ],
      },
    ],
    helps: [
      "Move as much as your symptoms allow, and try to use your leg more after 48 hours.",
      "Try low-impact exercise, such as cycling and swimming.",
      "If you are able to walk, increase your walking distance gradually.",
      "Aim to do a little bit more each day or every few days.",
      "Discuss returning to work with your employer at the earliest opportunity.",
    ],
    tryThisWeek: [
      "Use the leg more after 48 hours.",
      "Try cycling or swimming.",
      "Walk a little further, gradually.",
    ],
    ask: "Which activities are safe for my knee now, and how quickly can I build them up?",
    interactive: {
      kind: "scenarios",
      title: "Staying active",
      scenarios: [
        {
          id: "pain-free",
          situation: "Your knee still aches a little. Should you wait until it is pain free?",
          options: [{ text: "No, a little activity helps", best: true }, { text: "Yes, rest until it stops" }],
          why: "Too much rest can slow down your recovery. A little activity is better than nothing, and you do not need to be pain free.",
        },
        {
          id: "which",
          situation: "You want some exercise that is kind to the knee.",
          options: [{ text: "Cycling or swimming", best: true }, { text: "Heavy lifting" }],
          why: "Low-impact exercise, such as cycling and swimming, can be useful when recovering from a knee injury.",
        },
        {
          id: "walking",
          situation: "You have not walked far for weeks.",
          options: [{ text: "Build the distance up gradually", best: true }, { text: "Start with a long hike" }],
          why: "If you are not very active but are able to walk, increase your walking distance gradually.",
        },
        {
          id: "work",
          situation: "Your knee is better but not perfect, and work is waiting.",
          options: [{ text: "Talk to your employer about returning", best: true }, { text: "Stay off until fully healed" }],
          why: "You do not need to be symptom free before you consider returning to work.",
        },
      ],
    },
    sources: [AU_KNEE, INFORM_KNEE, NHS_ACTIVITY, NHS_WALKING, INFORM_SOFT, INFORM_WORK],
    quiz: {
      question: "Do you need to be pain free before being more active again?",
      options: [{ text: "No", right: true }, { text: "Yes, completely" }, { text: "Only for walking" }],
      why: "A little activity is better than nothing, and you do not need to be pain free.",
    },
  },
  {
    id: "men-sport",
    kicker: "Sport",
    question: "When can I get back to sport after a meniscus tear?",
    hook: "Rush back and the knee may pay for it. Small milestones, a proper warm-up and a graded plan bring you back for good.",
    short: "Returning to sport without a graded approach can often lead to re-injury. A meniscus can take 3 to 6 months or more to heal, so strengthening and small milestones matter. After keyhole surgery, many surgeons suggest an exercise bike at 2 weeks, a cross trainer at 4, the treadmill at 6 and, for most people, sport by 8 weeks.",
    sections: [
      {
        heading: "Not too soon",
        paragraphs: [
          "Returning to your previous level without a graded approach can often result in re-injury, so you spend longer away from the activity you love. Set small milestones that match your goal and build on them.",
          "Avoid twisting and turning activities or sports while the knee is troublesome, as these are likely to make it more painful. Do not run if you have pain in your knee.",
        ],
      },
      {
        heading: "Healing takes time",
        paragraphs: [
          "Meniscal healing can often take 3 to 6 months or more, as most of the meniscus has a poor blood supply. Strengthening the muscles around the knee gives it more chance to heal.",
          "Avoid sports or heavy lifting until you have less discomfort and good movement, and remember to warm up fully before you start.",
        ],
      },
      {
        heading: "After keyhole surgery",
        paragraphs: [
          "If you enjoy sport and are fit enough, many surgeons suggest a simple programme: an exercise bike at 2 weeks, a cross trainer at 4 weeks and the treadmill at 6 weeks, as you are able. By 8 weeks, most people can be back to sport.",
          "Impact sports should typically be avoided for up to 6 weeks after the operation.",
        ],
      },
      {
        heading: "Graded programmes",
        paragraphs: [
          "One NHS physiotherapy service publishes graded return programmes for rugby, netball, football and running. They are not set in stone, so discuss whether they suit your injury with your physiotherapist.",
          "Your physiotherapist is there to help you with exercise selection and load management.",
        ],
      },
      {
        heading: "Protecting the knee",
        paragraphs: [
          "A warm-up should take around 10 to 15 minutes, including strength and balance exercises. FIFA 11+ for football, Activate in rugby and the KNEE Programme for netball are examples of sport specific warm-ups.",
          "When you go back to running, do not increase your pace or distance too quickly. Do a similar run at least 3 or 4 times before you increase either.",
        ],
      },
    ],
    helps: [
      "Set small milestones that replicate your goal, and build on them.",
      "Discuss a graded return programme with your physiotherapist.",
      "Warm up for around 10 to 15 minutes before sport.",
      "Build in at least one rest day a week from training.",
      "Do not run with knee pain. If you still feel pain after a week's rest, see a GP or physiotherapist.",
    ],
    tryThisWeek: [
      "Set one small milestone.",
      "Warm up for 10 to 15 minutes.",
      "Take a rest day each week.",
    ],
    ask: "What milestones should I reach before going back to my sport?",
    interactive: {
      kind: "timeline",
      title: "Back to sport after keyhole surgery",
      steps: [
        { id: "bike", when: "2 weeks", title: "Exercise bike", points: ["If you enjoy sport and are fit enough.", "Walking, swimming and light exercise too."] },
        { id: "cross", when: "4 weeks", title: "Cross trainer", points: ["Build up gradually.", "Impact sports still wait."] },
        { id: "treadmill", when: "6 weeks", title: "Treadmill", points: ["As you are able.", "Impact sports avoided up to about now."] },
        { id: "sport", when: "By 8 weeks", title: "Back to sport", points: ["For most people.", "Warm up for 10 to 15 minutes first."] },
      ],
    },
    sources: [RCS_GWS, SBUHB_SPORT, SBUHB_MENISCAL, PLYMOUTH, INFORM_EX_INJURY, NHS_RUNNING, INFORM_KNEE],
    quiz: {
      question: "After keyhole surgery, by when can most people be back to sport?",
      options: [{ text: "By 8 weeks", right: true }, { text: "The next day" }, { text: "Never again" }],
      why: "By 8 weeks, most people can be back to sport.",
    },
  },
  {
    id: "men-locking",
    kicker: "When to get help",
    question: "What should I do if my knee locks?",
    hook: "A knee that locks, gives way or clicks painfully needs advice now, not at the next routine appointment.",
    short: "Locking is one of the symptoms of a torn meniscus. Get advice from NHS 111 now if your knee locks, gives way or painfully clicks. Get an urgent GP appointment or help from NHS 111 if you cannot bend or straighten your leg, and go to A&E if the knee has changed shape or you have tingling or no feeling in your knee, leg or toes.",
    sections: [
      {
        heading: "What locking is",
        paragraphs: [
          "Locking of the knee is one of the symptoms of a torn meniscus, along with pain, swelling and an unstable knee.",
          "A tear can be like a flap that moves in and out and gets wedged between the bones.",
        ],
      },
      {
        heading: "Get advice",
        paragraphs: [
          "Get advice from NHS 111 now if your knee locks, gives way or painfully clicks. Painless clicking is normal.",
          "If you have injured your knee and are getting locking episodes where you cannot move it, or it is giving way, seek medical advice as soon as possible. NHS inform advises contacting your GP if your knee locks or gives way, and phoning 111 if your GP practice is closed.",
        ],
      },
      {
        heading: "When it is urgent",
        paragraphs: [
          "Get an urgent GP appointment or help from NHS 111 if you cannot bend or straighten your leg, you are unable to walk or put weight on your knee, or you have very bad knee pain after a fall or injury.",
          "Go to A&E if your knee has moved out of place, changed shape or is pointing at an odd angle, or you have any tingling or no feeling in your knee, leg or toes. Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
        ],
      },
      {
        heading: "What may follow",
        paragraphs: [
          "You might be referred for an arthroscopy to check what is causing symptoms such as joints locking, or to repair joint damage.",
          "If a tear causes persistent troublesome symptoms, an operation may be advised.",
        ],
      },
    ],
    helps: [
      "Get advice from NHS 111 now if your knee locks, gives way or painfully clicks.",
      "Contact your GP if your knee locks or gives way, and phone 111 if the practice is closed.",
      "Go to A&E if your knee has changed shape, or you have tingling or no feeling in your knee, leg or toes.",
      "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
      "Bring any medicines you take with you.",
    ],
    tryThisWeek: [
      "Call 111 if the knee locks.",
      "Do not drive yourself to A&E.",
      "Bring your medicines with you.",
    ],
    ask: "My knee has locked before. What should I do if it happens again?",
    interactive: {
      kind: "scenarios",
      title: "Which help, and how fast?",
      scenarios: [
        {
          id: "locks",
          situation: "Your knee locks and painfully clicks when you get up.",
          options: [{ text: "Get advice from NHS 111 now", best: true }, { text: "Wait for a routine appointment" }],
          why: "Get advice from NHS 111 now if your knee locks, gives way or painfully clicks.",
        },
        {
          id: "click",
          situation: "Your knee clicks now and then, but it does not hurt.",
          options: [{ text: "Painless clicking is normal", best: true }, { text: "Go to A&E" }],
          why: "Painless clicking is normal.",
        },
        {
          id: "straighten",
          situation: "You cannot straighten your leg after twisting it.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Wait a week and see" }],
          why: "Get an urgent GP appointment or help from NHS 111 if you cannot bend or straighten your leg.",
        },
        {
          id: "shape",
          situation: "After a fall your knee looks out of place and your toes feel numb.",
          options: [{ text: "A&E, with someone else driving or 999", best: true }, { text: "Drive yourself to the GP" }],
          why: "Go to A&E if your knee has moved out of place or you have no feeling in your knee, leg or toes. Do not drive to A&E.",
        },
      ],
    },
    sources: [NHS_KNEE_PAIN, NHS_MENISCUS, INFORM_KNEE, SBUHB_MENISCAL, INFORM_MENISCAL, EBI, NHS_ARTHROSCOPY],
    quiz: {
      question: "Your knee locks and painfully clicks. What does the NHS advise?",
      options: [{ text: "Get advice from NHS 111 now", right: true }, { text: "Ignore it" }, { text: "Massage it hard" }],
      why: "Get advice from NHS 111 now if your knee locks, gives way or painfully clicks.",
    },
  },
  {
    id: "men-long-term",
    kicker: "The years ahead",
    question: "Will a torn meniscus affect my knee in later years?",
    hook: "Many tears settle for good. Others come and go. Strong muscles and steady activity help the knee whichever way it goes.",
    short: "Meniscal tears can heal slowly, keep causing problems that come and go, or gradually get worse, but most knee symptoms improve with time. A past joint injury is one of several things that can play a part in osteoarthritis of the knee, so keeping the thigh muscles strong, staying active and keeping up exercises all help.",
    sections: [
      {
        heading: "How a tear can go",
        paragraphs: [
          "Meniscal tears can do one of three things: heal slowly over several months, keep causing problems that come and go, or gradually get worse.",
          "For some people the symptoms go away on their own after around 6 weeks. For others they persist long-term or flare up from time to time.",
        ],
      },
      {
        heading: "Most knees settle",
        paragraphs: [
          "Most knee symptoms improve with time, and many people find that the injury does not affect their day to day activities.",
          "As you get older, normal age-related changes can cause a knee problem to flare up now and again, often for no reason.",
        ],
      },
      {
        heading: "The link with osteoarthritis",
        paragraphs: [
          "Previous injuries to the joint are one of several factors that can play a part in osteoarthritis of the knee. It may affect one knee, especially if you have injured it in the past.",
          "The NHS lists joint injury as a risk factor: overusing a joint when it has not had enough time to heal after an injury or operation.",
        ],
      },
      {
        heading: "What you can do",
        paragraphs: [
          "You may be able to lower your risk of osteoarthritis by avoiding injury and living a healthy lifestyle. The NHS suggests at least 150 minutes of moderate activity a week, plus strength exercises on 2 or more days.",
          "Keeping up your exercises is important, even when your symptoms improve, to prevent them coming back.",
        ],
      },
      {
        heading: "Weight and the knee",
        paragraphs: [
          "Carrying extra body weight makes joint pain more likely, and if you have joint pain already, being overweight can make it worse.",
          "Losing even a small amount of weight can make a big difference to knee pain. There is no special diet: a balanced, reduced-calorie diet with regular exercise is the advice, and your doctor or healthcare team can help.",
        ],
      },
    ],
    helps: [
      "Keep the knee moving as much as possible and keep the thigh muscles strong.",
      "Keep up your exercises even when your symptoms improve.",
      "If you are overweight, losing even a small amount of weight can make a big difference to knee pain.",
      "Try to do at least 150 minutes of moderate activity a week.",
      "Avoid overusing a joint before it has had enough time to heal after an injury or operation.",
    ],
    tryThisWeek: [
      "Keep the thigh muscles strong.",
      "Keep up exercises when better.",
      "Build towards 150 active minutes.",
    ],
    ask: "Is there anything about my tear that makes arthritis more likely, and what can I do about it?",
    interactive: {
      kind: "risk-check",
      title: "What plays a part in knee osteoarthritis?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "overuse", label: "Overusing a joint before it heals", note: "Overusing a joint when it has not had enough time to heal after an injury or operation.", changeable: true },
        { id: "weight", label: "Being overweight", note: "Losing even a small amount of weight can make a big difference to knee pain.", changeable: true },
        { id: "inactive", label: "Not keeping active", note: "Strengthening the muscles around the knee can improve symptoms and pain.", changeable: true },
        { id: "injury", label: "A previous knee injury", note: "Previous injuries to the joint are one of the factors that can play a part.", changeable: false },
        { id: "genes", label: "Family history", note: "The genes we inherit from our parents can play a part.", changeable: false },
        { id: "condition", label: "Another joint condition", note: "Such as rheumatoid arthritis or gout.", changeable: false },
      ],
    },
    sources: [NHS_OA, AU_OA_KNEE, INFORM_MENISCAL, EBI, AU_KNEE, INFORM_KNEE],
    quiz: {
      question: "Which of these can play a part in osteoarthritis of the knee?",
      options: [{ text: "A previous injury to the joint", right: true }, { text: "Cold weather" }, { text: "Wearing a knee support" }],
      why: "Previous injuries to the joint are one of several factors that can play a part in osteoarthritis of the knee.",
    },
  },
];
