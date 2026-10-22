import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the De Quervain's tenosynovitis page's pieces (content/library-conditions/body-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. nhs.uk no longer has a page of its own for de Quervain's
// (it appears in the NHS wrist pain and thumb pain pages), so most of the detail comes from NHS hand therapy and
// physiotherapy leaflets (NHS trusts and NHS Scotland boards), NHS inform, the British Society for Surgery of the Hand
// and Arthritis UK (formerly Versus Arthritis). Exercises are described only as those leaflets describe them, and
// only as a therapist advises. General information only; it never replaces what a person's own GP, physiotherapist,
// hand therapist or surgeon tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const au = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/${path}` });

const NHS_WRIST = nhs("Wrist pain", "symptoms/hand-pain/wrist-pain/");
const NHS_THUMB = nhs("Thumb pain", "symptoms/hand-pain/thumb-pain/");
const NHS_TENDONITIS = nhs("Tendonitis", "conditions/tendonitis/");
const NHS_RSI = nhs("Repetitive strain injury (RSI)", "conditions/repetitive-strain-injury-rsi/");
const NHS_IBUPROFEN = nhs("Ibuprofen for adults", "medicines/ibuprofen-for-adults/");
const NHS_PARACETAMOL = nhs("Paracetamol for adults", "medicines/paracetamol-for-adults/");

const INFORM_LEAFLET: LearnSource = { label: "NHS inform: Wrist tendonitis (De Quervain's tenosynovitis)", url: "https://www.rightdecisions.scot.nhs.uk/media/ghhf12an/de-quervain-nhs-inform.pdf" };
const INFORM_EX: LearnSource = { label: "NHS inform: Exercises for wrist, hand and finger problems", url: "https://www.nhsinform.scot/illnesses-and-conditions/muscle-bone-and-joints/arm-shoulder-and-hand-problems-and-conditions/exercises-for-wrist-hand-and-finger-problems" };
const NHS_SCOT: LearnSource = { label: "NHS Scotland: Wrist tendonitis / De Quervain", url: "https://www.rightdecisions.scot.nhs.uk/media/lvnnuq5h/nhs-scotland-de-quervains-leaflet.pdf" };
const AYRSHIRE: LearnSource = { label: "NHS Ayrshire and Arran RefHelp: De Quervain's tenosynovitis", url: "https://www.rightdecisions.scot.nhs.uk/refhelp-nhs-ayrshire-and-arran/orthopaedicsmsk/forearm-wrist-and-hand/de-quervians-tenosynovitis/" };
const DG_SPLINT: LearnSource = { label: "NHS Dumfries and Galloway: Buying a combined wrist/thumb splint", url: "https://www.rightdecisions.scot.nhs.uk/media/2285/de-quervains-leaflet.pdf" };
const LOTHIAN: LearnSource = { label: "NHS Lothian: De Quervain's tenosynovitis", url: "https://policyonline.nhslothian.scot/wp-content/uploads/2023/03/De_Quervains_Tenosynovitis.pdf" };
const STG: LearnSource = { label: "St George's University Hospitals: De Quervain's syndrome", url: "https://www.stgeorges.nhs.uk/wp-content/uploads/2025/05/HAN_DEQ.pdf" };
const RUH: LearnSource = { label: "Royal United Hospitals Bath: De Quervain's syndrome", url: "https://ruh.nhs.uk/patients/patient_information/HTH008_De_Quervains.pdf" };
const UHCW: LearnSource = { label: "University Hospitals Coventry and Warwickshire: deQuervain's tenosynovitis", url: "https://www.uhcw.nhs.uk/download/clientfiles/files/Patient%20Information%20Leaflets/Trauma%20and%20Neuro%20services/Trauma%20and%20Orthopaedics/deQuervains%20Tenosynovitis.pdf" };
const TORBAY: LearnSource = { label: "Torbay and South Devon NHS Foundation Trust: De Quervain's tenosynovitis", url: "https://www.torbayandsouthdevon.nhs.uk/uploads/25904.pdf" };
const NTH: LearnSource = { label: "North Tees and Hartlepool NHS Foundation Trust: De Quervain's tenosynovitis", url: "https://www.nth.nhs.uk/resources/hand-therapy-de-quervains-tenosynovitis-inflammation-of-the-tendons-of-the-thumb/" };
const NEWCASTLE: LearnSource = { label: "Newcastle upon Tyne Hospitals: De Quervain's syndrome", url: "https://newcastle-hospitals.nhs.uk/wp-content/uploads/2023/02/2024-Newcastle-OHS-DeQuervains-Leaflet_PRINT_ONLY.pdf" };
const ESHT: LearnSource = { label: "East Sussex Healthcare NHS Trust: De Quervain's tenosynovitis", url: "https://www.esht.nhs.uk/wp-content/uploads/2022/08/0988.pdf" };
const GLOS: LearnSource = { label: "Gloucestershire Hospitals: De Quervain's syndrome of the wrist", url: "https://www.gloshospitals.nhs.uk/media/documents/De_Quervains_syndrome_of_the_wrist_GHPI1134_07_24.pdf" };
const WWL: LearnSource = { label: "Wrightington, Wigan and Leigh Teaching Hospitals: De Quervain's syndrome", url: "https://www.wwl.nhs.uk/pdfreader/accessiblePDF/cnv-manual-6a3e6a48556d06.61431183" };
const SBUHB: LearnSource = { label: "Swansea Bay University Health Board: De Quervain's tenosynovitis", url: "https://sbuhb.nhs.wales/hospitals/a-z-services/physiotherapy/musculoskeletal-physiotherapy/hand-wrist-pain/de-quervains-tenosynovitis/" };
const BSSH: LearnSource = { label: "British Society for Surgery of the Hand: De Quervain's syndrome", url: "https://www.bssh.ac.uk/patients/conditions/19/de_quervains_syndrome" };

const AU_HANDWRIST = au("Hand and wrist pain", "understanding-arthritis/conditions/hand-and-wrist-pain/");
const AU_SPLINTS = au("Splints", "understanding-arthritis/arthritis-treatments/splints/");
const AU_STEROID = au("Steroid injections", "understanding-arthritis/arthritis-treatments/drugs/steroid-injections/");
const AU_JOINTCARE = au("Joint care", "understanding-arthritis/managing-arthritis-symptoms/joint-care/");

const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };

export const deQuervainsAnswers: LearnArticle[] = [
  {
    id: "dq-what-it-is",
    kicker: "Understanding",
    question: "What is de Quervain's tenosynovitis?",
    hook: "Two thumb tendons share one narrow tunnel at the wrist. When that tunnel thickens, every thumb movement can hurt.",
    short: "De Quervain's tenosynovitis is a problem with the two tendons that move the thumb, where they run through a tunnel on the thumb side of the wrist. When the tunnel thickens, the tendons cannot slide smoothly, which causes pain and swelling. It is not harmful, and it gets better on its own, though it can take weeks or months.",
    sections: [
      {
        heading: "Two tendons in a tight tunnel",
        paragraphs: [
          "De Quervain's tenosynovitis is a problem with tendons around the thumb side of the wrist. Tendons attach muscles to bone.",
          "Two tendons that help to move the thumb run through a tunnel between the thumb and the wrist, called a sheath. These two tendons run side by side and both move the thumb away from the hand.",
        ],
      },
      {
        heading: "What goes wrong",
        paragraphs: [
          "The sheath normally acts as a tunnel that holds the tendons in place, so they can slide up and down freely when the wrist or thumb moves. When the sheath thickens, the tunnel becomes narrower and it is more difficult for the tendons to slide through.",
          "Thickening or narrowing of the sheath restricts the glide of the tendons, causing pain and swelling.",
        ],
      },
      {
        heading: "Several names, one problem",
        paragraphs: [
          "It is also called de Quervain's syndrome, de Quervain's tendinitis or de Quervain's tendinopathy. St George's hand therapy team describes it as a set of symptoms that result from tendon degeneration, not from inflammation.",
        ],
      },
      {
        heading: "Not harmful, though painful",
        paragraphs: [
          "De Quervain's syndrome is not harmful, but it can be a really painful nuisance. Some mild cases recover over a few weeks without treatment.",
          "It is a condition that gets better on its own, but it may take several weeks or months to settle.",
        ],
      },
    ],
    helps: [
      "Rest the wrist: the first treatment is to rest it.",
      "Avoid activities that cause pain, if possible.",
      "Applying ice wrapped in a damp towel and taking an NSAID can help.",
      "If it is not improving and is affecting your quality of life, steroid injections, splints, hand therapy or surgery might also help.",
    ],
    tryThisWeek: [
      "Rest the wrist.",
      "Avoid activities that cause pain.",
      "Try ice wrapped in a damp towel.",
    ],
    ask: "Is this de Quervain's, and which treatment would you suggest trying first?",
    interactive: {
      kind: "flip-cards",
      title: "The parts involved",
      intro: "Turn each card to see what the part does.",
      cards: [
        { id: "tendons", front: "Tendons", when: "Attach muscles to bone", back: "Two tendons on the thumb side of the wrist both move the thumb away from the hand." },
        { id: "sheath", front: "The sheath", when: "The tunnel at the wrist", back: "Holds the tendons in place so they can slide up and down freely when the wrist or thumb moves." },
        { id: "thickened", front: "A thickened sheath", when: "In de Quervain's", back: "The tunnel becomes narrower, so it is harder for the tendons to slide through, causing pain and swelling." },
        { id: "names", front: "The tendons' names", when: "On a clinic letter", back: "Extensor pollicis brevis and abductor pollicis longus: the two thumb muscles' tendons in the tunnel." },
      ],
    },
    sources: [INFORM_LEAFLET, RUH, STG, BSSH, AU_HANDWRIST, NEWCASTLE],
    quiz: {
      question: "What do the two affected tendons do?",
      options: [{ text: "Move the thumb away from the hand", right: true }, { text: "Bend the fingers into a fist" }, { text: "Turn the forearm over" }],
      why: "These two tendons run side by side and both move the thumb away from the hand.",
    },
  },
  {
    id: "dq-symptoms",
    kicker: "Understanding",
    question: "What does de Quervain's feel like?",
    hook: "A thumbs up, a pair of scissors, a tap that needs turning: the pain shows up in the smallest everyday movements.",
    short: "The main symptom is pain over the thumb side of the wrist, worse when grasping, pinching or twisting, and especially when lifting the thumb. There may be swelling, tenderness and clicking. The NHS suggests seeing a GP if the pain has not improved after 2 weeks of treating it at home.",
    sections: [
      {
        heading: "Pain on the thumb side",
        paragraphs: [
          "The main symptom is pain over the thumb side of the wrist. It may develop suddenly or gradually.",
          "It is worse with use of the hand and thumb, especially grasping, pinching and twisting. Pain is aggravated especially by lifting the thumb, as in the hitchhiker position, or when using scissors, turning a door handle, turning a tap, texting and gaming.",
        ],
      },
      {
        heading: "Swelling, tenderness and clicking",
        paragraphs: [
          "There may be swelling at the thumb side of the wrist. It can help to compare it with the same spot on the opposite wrist.",
          "It is often tender to touch at the thumb side of the wrist. Some people experience clicking or snapping of the tendons.",
          "Due to pain and swelling, movement of the thumb may be less, and there may be weakness in pinch or grip.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "The NHS suggests seeing a GP if the pain is stopping you doing normal activities, is getting worse or keeps coming back, or has not improved after treating it at home for 2 weeks.",
          "It also suggests seeing a GP if you have any tingling or loss of sensation in your hand, or if you have diabetes, because hand problems can be more serious if you have diabetes.",
        ],
      },
      {
        heading: "When it is urgent",
        paragraphs: [
          "Contact NHS 111 if you have severe wrist pain, if you are not able to move your wrist or hold things, or if you have a lump on your wrist that is very painful, hot or red. These might be signs of a broken wrist or an infection.",
          "For the thumb, the NHS says to go to an urgent treatment centre or A&E if you have severe pain, heard a snap, grinding or popping noise at the time of an injury, or have lost the feeling in part or all of your hand.",
        ],
      },
    ],
    helps: [
      "Rest your thumb when you can.",
      "Take off any jewellery if your thumb looks swollen.",
      "Stop or cut down activities that are causing the pain, such as typing, using vibrating tools for work, or playing an instrument.",
      "See a GP if the pain does not get better in 2 weeks.",
      "Do not try to diagnose the cause of the pain yourself.",
    ],
    tryThisWeek: [
      "Rest your thumb when you can.",
      "Cut down activities causing the pain.",
      "See a GP if no better in 2 weeks.",
    ],
    ask: "Do my symptoms fit de Quervain's, or could it be something else, such as arthritis?",
    interactive: {
      kind: "signs",
      title: "What have you noticed?",
      intro: "Tick what you have noticed, to share with your GP or physiotherapist.",
      signs: [
        "Pain on the thumb side of the wrist",
        "Pain worse when gripping, pinching or twisting",
        "Pain on lifting the thumb, as in a thumbs up",
        "Swelling at the thumb side of the wrist",
        "Tender to touch at the thumb side of the wrist",
        "Clicking or snapping when the thumb moves",
        "Weakness in pinch or grip",
        "Tingling or loss of feeling in the hand",
      ],
      after: "See a GP if the pain has not improved after 2 weeks of treating it at home, or if you have tingling or loss of sensation in your hand.",
      copyHeading: "Things I have noticed",
    },
    sources: [INFORM_LEAFLET, LOTHIAN, RUH, NEWCASTLE, NHS_WRIST, NHS_THUMB, BSSH],
    quiz: {
      question: "Which movement especially aggravates the pain?",
      options: [{ text: "Lifting the thumb, as in a hitchhiker position", right: true }, { text: "Bending the little finger" }, { text: "Shrugging the shoulders" }],
      why: "Pain is aggravated especially by lifting the thumb, as in the hitchhiker position, or when using scissors, turning a door handle, turning a tap, texting and gaming.",
    },
  },
  {
    id: "dq-causes",
    kicker: "Understanding",
    question: "Why did I get de Quervain's?",
    hook: "Often there is no clear reason. Repeated gripping, a new hobby and a young baby all turn up in the story.",
    short: "In many cases it appears without an obvious cause. Prolonged repetitive use of the thumb and wrist can play a part, and it is particularly common in new mothers, though whether that is hormones or lifting the baby is not known. It is most common between 30 and 50 or 55, and in women.",
    sections: [
      {
        heading: "Often no clear reason",
        paragraphs: [
          "It appears without obvious cause in many cases. It can be due to trauma, overuse or inflammation, but often the cause is unknown.",
          "Significant anatomical differences exist in the compartment containing these tendons, so symptoms can affect people in varying ways.",
        ],
      },
      {
        heading: "Overuse and repeated movements",
        paragraphs: [
          "Problems often occur after prolonged repetitive activity that may irritate the tendons. It can also be caused by rapid, repeated movements of the thumb or wrist for long periods, or by gripping for long periods with the wrist bent forwards or to one side.",
          "North Tees and Hartlepool's hand therapists list an increase or change in activity, such as DIY, gardening, a new sport or a new job, as a possible risk factor, along with thumb injuries or strain and inflammatory conditions.",
          "There is little evidence that it is caused by work activities, but the pain can certainly be aggravated by hand use at work, at home, in the garden or at sport.",
        ],
      },
      {
        heading: "Pregnancy and a young baby",
        paragraphs: [
          "Mothers of small babies seem particularly prone to it. Whether this is due to hormonal changes after pregnancy or to lifting the baby repeatedly is not known.",
          "It is more common during pregnancy, and Newcastle's leaflet says it is more common in women who are breastfeeding. Torbay's hand therapists say it often occurs in women during times of hormone change, such as pregnancy or the menopause.",
        ],
      },
      {
        heading: "Who gets it most",
        paragraphs: [
          "NHS inform says it occurs most often between 30 and 50 years of age, while other NHS leaflets give 30 to 55. It can happen at any age.",
          "Women are affected more often than men. Leaflets differ on how much more: NHS inform says 10 times, Newcastle says six times and Gloucestershire says 3 times.",
        ],
      },
    ],
    helps: [
      "Try to reduce repetitive tasks that may be aggravating the tendon, such as using scissors or secateurs, lifting, or racket sports.",
      "Avoid activities that cause pain, if possible.",
      "Take regular breaks during gripping activities.",
      "Change the position of your hand and wrist during work and leisure if needed.",
    ],
    tryThisWeek: [
      "Cut down on repetitive tasks.",
      "Take regular breaks when gripping.",
      "Change your hand position.",
    ],
    ask: "Is anything I do every day likely to be aggravating it, and how could I do it differently?",
    interactive: {
      kind: "risk-check",
      title: "What may play a part?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "repetitive", label: "Repeated thumb or wrist movements", note: "Problems often occur after prolonged repetitive activity that may irritate the tendons.", changeable: true },
        { id: "gripping", label: "Long periods of gripping", note: "Gripping for long periods with the wrist bent forwards or to one side can cause it.", changeable: true },
        { id: "new-activity", label: "A new or increased activity", note: "Such as DIY, gardening, a new sport or a new job.", changeable: true },
        { id: "baby", label: "Pregnancy or a young baby", note: "It is not known whether this is hormonal changes or lifting the baby repeatedly.", changeable: false },
        { id: "injury", label: "A thumb injury or strain", note: "A possible risk factor. It sometimes starts after a blow to the outside of the wrist.", changeable: false },
        { id: "inflammatory", label: "An inflammatory condition", note: "Listed by North Tees and Hartlepool's hand therapists as a possible risk factor.", changeable: false },
      ],
    },
    sources: [INFORM_LEAFLET, BSSH, LOTHIAN, RUH, NTH, UHCW, GLOS, NEWCASTLE, TORBAY],
    quiz: {
      question: "Is it known whether hormones or lifting a baby causes it in new mothers?",
      options: [{ text: "No, it is not known", right: true }, { text: "Yes, it is always the lifting" }, { text: "Yes, it is always hormones" }],
      why: "Whether this is due to hormonal changes after pregnancy or to lifting the baby repeatedly is not known.",
    },
  },
  {
    id: "dq-diagnosis",
    kicker: "Understanding",
    question: "How will a doctor or physiotherapist know it is de Quervain's?",
    hook: "No scan, no blood test: usually your story and a few movements of the thumb and wrist are enough.",
    short: "De Quervain's is usually diagnosed from your symptoms and an examination, including simple tests that move the thumb and wrist to reproduce the pain. Advanced imaging is not usually needed, though an X-ray or ultrasound is occasionally used to rule out conditions that can look similar.",
    sections: [
      {
        heading: "Your story and an examination",
        paragraphs: [
          "The main way de Quervain's is diagnosed is through what you tell the healthcare professional and by examining your wrist and thumb.",
          "The diagnosis is usually made based on the symptom history and examination. It is normally based on the history of your symptoms, plus some simple clinical tests that put your hand and wrist in different positions to reproduce your symptoms.",
        ],
      },
      {
        heading: "What they may check",
        paragraphs: [
          "NHS Ayrshire and Arran's guidance for GPs lists checking the range of wrist movement and general hand function, feeling for pain and swelling on the thumb side of the wrist, and testing the thumb as it straightens against resistance.",
          "The same guidance names Finkelstein's test. Gloucestershire Hospitals describes diagnosis by simple tests involving movements of the wrist and thumb.",
        ],
      },
      {
        heading: "Scans are not usually needed",
        paragraphs: [
          "Advanced imaging is not necessary for diagnosis, according to Newcastle's leaflet. Occasionally an X-ray or ultrasound may be needed to rule out other conditions that can mimic the symptoms.",
          "Possible look-alikes in the GP guidance include osteoarthritis at the base of the thumb and osteoarthritis of the wrist joint. The NHS lists pain, swelling and stiffness at the base of the thumb that lasts a long time as a sign of either tendonitis or arthritis.",
        ],
      },
      {
        heading: "Getting seen",
        paragraphs: [
          "In many areas you may be able to get help, such as physiotherapy, from NHS community musculoskeletal services without needing a referral from a GP.",
          "A hand therapist has expertise in treating conditions affecting the hand and wrist. Your GP, rheumatology department or orthopaedic department could refer you to one.",
        ],
      },
    ],
    helps: [
      "Do not try to diagnose the cause of the pain yourself.",
      "Tell the healthcare professional what symptoms you have had and how long you have had them.",
      "Check whether you can refer yourself to NHS community musculoskeletal services in your area.",
      "Ask about seeing a hand therapist if the pain is ongoing.",
    ],
    tryThisWeek: [
      "Note your symptoms and how long.",
      "Check if you can self-refer.",
      "Ask about a hand therapist.",
    ],
    ask: "What did the examination show, and do I need any scan to rule out something else?",
    interactive: {
      kind: "flip-cards",
      title: "What the checks are for",
      intro: "Turn each card to see what it looks for.",
      cards: [
        { id: "history", front: "Your story", when: "At the first appointment", back: "What symptoms you have had and how long you have had them." },
        { id: "exam", front: "Examination", when: "Wrist and thumb", back: "Feeling for pain and swelling on the thumb side, and checking wrist movement and hand function." },
        { id: "tests", front: "Movement tests", when: "Such as Finkelstein's test", back: "Simple tests that put the hand and wrist in different positions to reproduce your symptoms." },
        { id: "scan", front: "X-ray or ultrasound", when: "Only occasionally", back: "To rule out other conditions that can mimic de Quervain's. Advanced imaging is not usually necessary." },
      ],
    },
    sources: [NEWCASTLE, NHS_SCOT, GLOS, SBUHB, AYRSHIRE, AU_HANDWRIST, NHS_WRIST, WWL],
    quiz: {
      question: "How is de Quervain's usually diagnosed?",
      options: [{ text: "From your symptom history and an examination", right: true }, { text: "With an MRI scan" }, { text: "With a blood test" }],
      why: "The diagnosis is usually made based on the symptom history and examination.",
    },
  },
  {
    id: "dq-self-care",
    kicker: "Recovery",
    question: "What can I do myself to ease it?",
    hook: "Rest, a wrapped ice pack and the right painkiller: the first steps a GP would suggest can start at home today.",
    short: "Most symptoms settle with rest and changing the activities that cause pain. A wrapped ice pack for up to 20 minutes every 2 to 3 hours can help, as can paracetamol or ibuprofen gel, though ibuprofen is not suitable for everyone. Avoid heat if the thumb is swollen, and ask a pharmacist for advice.",
    sections: [
      {
        heading: "Rest and change what you do",
        paragraphs: [
          "If you see a GP about thumb pain, they will usually suggest resting your thumb when you can, and stopping or cutting down activities that are causing the pain.",
          "The majority of symptoms will settle with rest and activity modification, according to North Tees and Hartlepool's hand therapists. Some conditions affecting the hand and wrist will not get better until you stop doing certain tasks.",
          "If it is not possible to stop doing a particular activity altogether, reduce the amount done at one time and take regular micro breaks.",
        ],
      },
      {
        heading: "Ice, not heat",
        paragraphs: [
          "Put an ice pack, or a bag of frozen peas, in a towel and place it on your thumb for up to 20 minutes every 2 to 3 hours. Never put ice directly on your skin, as this can burn or irritate it.",
          "Do not use heat packs or have hot baths for a few days after an injury or if your thumb is swollen, as this can make it worse.",
          "Swansea Bay's physiotherapists advise not using ice if you have sensitivity to cold or numbness in the area, or high blood pressure.",
        ],
      },
      {
        heading: "Painkillers",
        paragraphs: [
          "Painkillers such as paracetamol or ibuprofen gel, or ibuprofen tablets if needed, can be used. Ibuprofen is not suitable for everyone, such as older people who have a higher chance of getting stomach ulcers and kidney problems.",
          "Be careful not to take too much by combining gels and tablets, as both get into your bloodstream. You are less likely to get side effects from ibuprofen gel or spray.",
          "NHS Lothian's leaflet notes that painkillers are generally ineffective in treating de Quervain's, although some people get relief from ice packs or anti-inflammatory medicine.",
        ],
      },
      {
        heading: "A pharmacist can help",
        paragraphs: [
          "A pharmacist can advise on the best painkiller to take, the best splint to support your thumb, and whether you need to see a GP.",
          "Ibuprofen should be avoided during pregnancy unless a doctor or pharmacist advises it. Paracetamol is usually the best painkiller to take if you are pregnant.",
        ],
      },
    ],
    helps: [
      "Rest your thumb when you can.",
      "Put an ice pack in a towel on your thumb for up to 20 minutes every 2 to 3 hours.",
      "Use painkillers such as paracetamol or ibuprofen gel, or ibuprofen tablets if needed.",
      "Do not lift heavy objects or grip anything too tightly.",
      "Ask a pharmacist about the best painkiller to take.",
    ],
    tryThisWeek: [
      "Rest your thumb when you can.",
      "Ice for up to 20 minutes.",
      "Avoid heavy lifting and tight grips.",
    ],
    ask: "Which painkiller is right for me, and is ibuprofen gel suitable?",
    interactive: {
      kind: "scenarios",
      title: "Everyday choices",
      scenarios: [
        { id: "bath", situation: "Your thumb is swollen and a hot bath sounds soothing.", options: [{ text: "Have the hot bath" }, { text: "Use a wrapped ice pack instead", best: true }, { text: "Use a heat pack" }], why: "Do not use heat packs or have hot baths if your thumb is swollen, as this can make it worse." },
        { id: "gel-tablets", situation: "You use ibuprofen gel and wonder about adding tablets.", options: [{ text: "Use both as much as you like" }, { text: "Check with a pharmacist first", best: true }], why: "Be careful not to take too much by combining gels and tablets, as both get into your bloodstream." },
        { id: "pregnant", situation: "You are pregnant and your wrist hurts.", options: [{ text: "Take ibuprofen tablets" }, { text: "Ask about paracetamol, usually the best choice", best: true }], why: "Ibuprofen should be avoided during pregnancy unless a doctor or pharmacist advises it. Paracetamol is usually the best painkiller to take if you are pregnant." },
      ],
    },
    sources: [NHS_THUMB, NHS_WRIST, AU_HANDWRIST, NEWCASTLE, LOTHIAN, NHS_IBUPROFEN, NTH, NHS_SCOT, SBUHB],
    quiz: {
      question: "How long can a wrapped ice pack stay on the thumb at a time?",
      options: [{ text: "Up to 20 minutes", right: true }, { text: "Up to 2 hours" }, { text: "All night" }],
      why: "Put an ice pack, or a bag of frozen peas, in a towel and place it on your thumb for up to 20 minutes every 2 to 3 hours.",
    },
  },
  {
    id: "dq-splint",
    kicker: "Recovery",
    question: "Will a splint help, and how long should I wear it?",
    hook: "The right splint holds the thumb and the wrist still. Worn too much, it can leave the thumb stiff and weak.",
    short: "A splint that holds both the thumb and the wrist can rest the tendons and help manage pain. NHS services give different advice on how long to wear it, from a few weeks to longer, so follow your therapist's advice. Wearing it all the time is not advised, and it should come off for exercises.",
    sections: [
      {
        heading: "A splint that covers thumb and wrist",
        paragraphs: [
          "Splints may help position and rest the thumb to help manage pain. The splint needs to immobilise the thumb as well as the wrist.",
          "NHS Dumfries and Galloway's leaflet says a wrist and thumb splint should have a metal bar in it to limit wrist movement. It should not limit finger movement, and you should still be able to bend the top joint of your thumb.",
        ],
      },
      {
        heading: "Where to get one",
        paragraphs: [
          "Splints can often be bought from pharmacies, sports shops and online, or obtained from a physiotherapist. Some hand therapy services make a customised plastic splint.",
          "Before you buy one, it is a good idea to get advice from a healthcare professional, such as an occupational therapist, physiotherapist or hand therapist. You should not borrow or use other people's splints.",
        ],
      },
      {
        heading: "How long to wear it",
        paragraphs: [
          "Advice differs between NHS services. NHS Lothian says you may need to wear it continuously for 2 to 3 weeks before starting exercises, Torbay's hand therapists suggest 3 to 4 weeks, and North Tees and Hartlepool say a minimum of 6 weeks.",
          "The Royal United Hospitals Bath says you may need to wear it for a minimum of 3 weeks or as long as 3 months, depending on how severe your symptoms are. Your therapist will discuss how much to wear it.",
        ],
      },
      {
        heading: "Not all the time",
        paragraphs: [
          "Prolonged use of splints may not be indicated, as this may cause further tendon damage. If a splint is worn too much, it can cause the thumb to get stiff and weak.",
          "If you have been told to wear a splint, remove it for the exercises. When you take a splint off, do some gentle wrist, finger and thumb exercises to help stop your joints stiffening.",
          "Stop wearing a splint if it rubs or causes pain, does not fit any more, or leaves red marks or makes your fingers tingle.",
        ],
      },
    ],
    helps: [
      "Choose a splint that includes both the thumb and the wrist.",
      "Ask a hand therapist, physiotherapist or occupational therapist which type would suit you.",
      "Remove the splint for your exercises.",
      "Stop wearing it if it rubs, causes pain or leaves red marks.",
      "If you want to wear a working splint while driving, contact your insurance company first.",
    ],
    tryThisWeek: [
      "Check it covers thumb and wrist.",
      "Take it off for your exercises.",
      "Stop if it rubs or leaves red marks.",
    ],
    ask: "Which splint should I wear, for how long each day, and for how many weeks?",
    interactive: {
      kind: "scenarios",
      title: "Getting the splint right",
      scenarios: [
        { id: "shop", situation: "You are choosing a splint at the pharmacy.", options: [{ text: "A soft wrist wrap only" }, { text: "One that holds the thumb and the wrist", best: true }], why: "The splint needs to immobilise the thumb as well as the wrist." },
        { id: "all-day", situation: "The splint feels comfortable and you are tempted to wear it all day, every day.", options: [{ text: "Wear it constantly for months" }, { text: "Follow your therapist's advice on how long", best: true }], why: "Prolonged use may cause further tendon damage, and a splint worn too much can make the thumb stiff and weak." },
        { id: "red-marks", situation: "The splint leaves red marks and your fingers tingle.", options: [{ text: "Tighten the straps" }, { text: "Stop wearing it and contact your therapist", best: true }], why: "Stop wearing a splint if it leaves red marks or makes your fingers tingle, and contact the therapist who issued it." },
      ],
    },
    sources: [RUH, BSSH, DG_SPLINT, AU_SPLINTS, STG, NEWCASTLE, NTH, LOTHIAN, TORBAY, NHS_THUMB],
    quiz: {
      question: "What should a de Quervain's splint hold still?",
      options: [{ text: "The thumb and the wrist", right: true }, { text: "Only the fingers" }, { text: "Only the elbow" }],
      why: "The splint needs to immobilise the thumb as well as the wrist.",
    },
  },
  {
    id: "dq-injection",
    kicker: "Recovery",
    question: "Would a steroid injection help my wrist?",
    hook: "One injection into the tendon tunnel helps the pain in most cases. It takes a few weeks, and two quiet weeks afterwards.",
    short: "If self-care does not help, a steroid injection into the tendon sheath can reduce pain and swelling. The British Society for Surgery of the Hand says it relieves the pain in about 70% of cases. It can take weeks to work, the risks are small, and it is important not to overdo it for two weeks afterwards.",
    sections: [
      {
        heading: "When an injection is offered",
        paragraphs: [
          "If symptoms do not respond to self-management, you may be offered a steroid injection to reduce pain and swelling. The steroid is injected into the tendon sheath, sometimes combined with a local anaesthetic.",
          "A steroid is a strong anti-inflammatory that helps reduce the swelling. Steroid injections cannot treat the underlying cause of a condition, but they can treat the symptoms.",
        ],
      },
      {
        heading: "How well it works",
        paragraphs: [
          "The British Society for Surgery of the Hand says a steroid injection relieves the pain in about 70% of cases. NHS leaflets give figures from 50 to 70% up to about 80%.",
          "It usually takes 3 to 4 weeks to be effective, according to NHS Scotland's leaflet, and up to 6 weeks according to North Tees and Hartlepool. If the first injection gives only temporary relief, a repeat injection may be offered, though further injections may generally be less effective than the first.",
        ],
      },
      {
        heading: "Risks",
        paragraphs: [
          "The risks of injection are small, but it very occasionally causes some thinning or colour change in the skin at the site of injection. Other small risks include infection, tendon weakening and nerve damage.",
          "If you have diabetes, a steroid injection can raise your blood sugar for a few days afterwards, so it is important to monitor it. Your doctor will probably recommend no more than three steroid injections into the same part of the body within a year.",
          "Very rarely, an infection can follow an injection. Arthritis UK says that if the joint becomes more painful and hot, see your doctor immediately, especially if you feel unwell.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "It is important not to overdo it for the first two weeks after a steroid injection, as there is a small risk of damaging a tendon. North Tees and Hartlepool give a wrist and thumb splint to wear for 2 weeks after the injection to rest the thumb.",
          "Occasionally pain flares up within the first 24 hours. This usually settles by itself within a couple of days, and simple painkillers like paracetamol will help.",
        ],
      },
    ],
    helps: [
      "Speak to your physiotherapist about an injection if your symptoms do not settle.",
      "Tell the person giving the injection if you take a blood thinner.",
      "Do not overdo it for the first two weeks after the injection.",
      "Monitor your blood sugar after the injection if you have diabetes.",
      "See your doctor immediately if the joint becomes more painful and hot, especially if you feel unwell.",
    ],
    tryThisWeek: [
      "Ask about an injection if not settling.",
      "Take it easy for two weeks after.",
      "Watch for heat and worsening pain.",
    ],
    ask: "Is an injection right for me now, and what should I avoid in the two weeks afterwards?",
    interactive: {
      kind: "timeline",
      title: "After a steroid injection",
      steps: [
        { id: "day", when: "The day itself", title: "The injection", points: ["Into the tendon sheath, sometimes with local anaesthetic.", "You may be asked to wait 10 to 15 minutes afterwards."] },
        { id: "first-day", when: "First 24 hours", title: "A possible flare", points: ["Pain occasionally flares up.", "It usually settles within a couple of days."] },
        { id: "two-weeks", when: "First 2 weeks", title: "Take it easy", points: ["Do not overdo it, to protect the tendon.", "A splint may be worn to rest the thumb."] },
        { id: "working", when: "3 to 6 weeks", title: "Starting to work", points: ["It can take 3 to 4 weeks, or up to 6, to work.", "A repeat may be offered if relief is only short."] },
      ],
    },
    sources: [BSSH, NTH, NHS_SCOT, NEWCASTLE, AU_STEROID, SBUHB, ESHT, LOTHIAN],
    quiz: {
      question: "For how long after a steroid injection should you take care not to overdo it?",
      options: [{ text: "The first two weeks", right: true }, { text: "Only the first hour" }, { text: "There is no need to take care" }],
      why: "It is important not to overdo it for the first two weeks after a steroid injection, as there is a small risk of damaging a tendon.",
    },
  },
  {
    id: "dq-surgery",
    kicker: "Recovery",
    question: "What does de Quervain's surgery involve?",
    hook: "A short day-case operation widens the tendon tunnel. Pain relief is usually quick; the scar takes longer.",
    short: "Surgery is only for the unusual cases where other treatments have not controlled the symptoms. It is usually a day case under local anaesthetic: the surgeon opens the tendon sheath so the tendons can glide freely. Stitches come out at 10 to 14 days, and light work may be possible at 2 to 3 weeks.",
    sections: [
      {
        heading: "When surgery is considered",
        paragraphs: [
          "Surgery is recommended only in unusual cases where all non-surgical treatments do not control symptoms adequately. The Royal United Hospitals Bath says it is only advised for people with severe pain and dysfunction.",
          "NHS Scotland's leaflet says surgery may be offered if you have had the problem for over a year, have pain when your arm is resting, have had physiotherapy and at least one steroid injection with no improvement, or if your everyday life is affected in a significant way.",
        ],
      },
      {
        heading: "The operation",
        paragraphs: [
          "It is usually a day case, so you can go home the same day. It is usually done under local anaesthetic, though other forms of anaesthetic, such as a regional block or a general anaesthetic, are also used.",
          "Through a small cut on the thumb side of the wrist, the surgeon opens up the tendon sheath so the tendons can move freely and comfortably. North Tees and Hartlepool say the cut is about 2 cm long and the surgery lasts about 30 minutes.",
          "The tunnel roof forms again as the split heals, but it is wider and the tendons have enough room to move without pain.",
        ],
      },
      {
        heading: "Recovery",
        paragraphs: [
          "The hand will be bandaged for the first few days, or for 48 hours. After this you can move your wrist, fingers and thumb more freely to regain movement.",
          "Stitches are removed in 10 to 14 days, unless dissolvable stitches have been used. Avoid heavy lifting or pulling until the stitches are removed.",
          "Light manual or desk work may be possible at 2 to 3 weeks, and heavy manual work may only be possible after 4 to 6 weeks. North Tees and Hartlepool say you will not be able to drive for 2 weeks.",
        ],
      },
      {
        heading: "Risks and getting help",
        paragraphs: [
          "Pain relief is usually rapid. The scar may be sore and unsightly for several weeks, and temporary numbness can occur on the back of the hand or thumb because nerve branches were gently moved.",
          "Other risks include infection, which the British Society for Surgery of the Hand puts at less than one in 100, stiffness, swelling, and rarely a pain syndrome. If you have any problems after surgery, contact your surgeon's secretary, the day surgery unit or your GP.",
        ],
      },
    ],
    helps: [
      "Bring someone with you, to avoid driving home yourself after the procedure.",
      "Wait until you can grip the steering wheel tightly without distracting pain before driving.",
      "Do gentle exercises to restore movement as pain allows in the first days.",
      "Do not resume sport until you are told it is safe.",
      "Contact your surgeon's secretary, the day surgery unit or your GP if you have any problems.",
    ],
    tryThisWeek: [
      "Arrange a lift home.",
      "Do gentle movements as pain allows.",
      "Hold off sport until told it is safe.",
    ],
    ask: "What anaesthetic will I have, and when can I go back to work and drive?",
    interactive: {
      kind: "timeline",
      title: "Recovering from the operation",
      steps: [
        { id: "day", when: "Day of surgery", title: "Home the same day", points: ["Usually under local anaesthetic.", "The surgery lasts about 30 minutes."] },
        { id: "bandage", when: "First 2 days", title: "Bandaged", points: ["The hand is bandaged for 48 hours or a few days.", "Then move the wrist and fingers more freely."] },
        { id: "stitches", when: "10 to 14 days", title: "Stitches out", points: ["Unless dissolvable stitches were used.", "Avoid heavy lifting until they are removed."] },
        { id: "light", when: "2 to 3 weeks", title: "Lighter work", points: ["Light manual or desk work may be possible.", "Drive once you can grip the wheel without distracting pain."] },
        { id: "heavy", when: "4 to 6 weeks", title: "Heavier work", points: ["Heavy manual work may be possible.", "Ask before returning to sport."] },
      ],
    },
    sources: [BSSH, UHCW, NTH, NHS_SCOT, SBUHB, ESHT, RUH],
    quiz: {
      question: "How does the operation help?",
      options: [{ text: "It opens the tendon sheath so the tendons can move freely", right: true }, { text: "It removes the thumb tendons" }, { text: "It fixes the wrist so it cannot bend" }],
      why: "Through a small cut on the thumb side of the wrist, the surgeon opens up the tendon sheath so the tendons can move freely and comfortably.",
    },
  },
  {
    id: "dq-lifting",
    kicker: "Living well",
    question: "How can I lift my baby, and other things, without making it worse?",
    hook: "New parents lift, carry and feed all day. Small changes to how you grip can take some strain off the thumb.",
    short: "De Quervain's is common in new mothers, though whether hormones or lifting the baby are to blame is not known. NHS leaflets advise adapting the way you grip and do tasks; Arthritis UK suggests carrying things close to your body and avoiding gripping with your thumbs. If you are breastfeeding, paracetamol is usually the best painkiller.",
    sections: [
      {
        heading: "Why new parents get it",
        paragraphs: [
          "De Quervain's is common in new mothers after pregnancy. It is not known if this is due to hormonal changes or repetitive lifting of the baby.",
          "New mothers are prone to developing it because of the positions adopted when caring for a baby, and it is sometimes called mummy thumb. Newcastle's leaflet says it is more common in women who are breastfeeding, and that it is not known whether lifting, carrying or feeding the baby plays a part.",
        ],
      },
      {
        heading: "Lifting with less strain",
        paragraphs: [
          "NHS leaflets advise resting the thumb by adapting your activities, and if possible altering how you grip and adapting how you do certain tasks.",
          "Arthritis UK's general joint care advice suggests using larger joints where possible and hugging larger objects close to your body as you carry them, so the weight is supported by larger, stronger joints. It also suggests using two hands, avoiding gripping with your thumbs, and using a grip that keeps your wrists straight.",
          "It suggests avoiding lifting heavy objects with your wrists bent downwards, and avoiding pushing your fingers over towards your little finger while putting pressure on your thumb.",
        ],
      },
      {
        heading: "Painkillers while breastfeeding",
        paragraphs: [
          "Paracetamol is usually the best painkiller to take if you are breastfeeding. Ibuprofen can often be used if needed, but check with a pharmacist or doctor before using it.",
          "If you use ibuprofen gel or spray, use it on the smallest area of skin you need to, and try to avoid your baby's skin touching the area where you applied it.",
        ],
      },
      {
        heading: "Injections, pregnancy and breastfeeding",
        paragraphs: [
          "Arthritis UK says single steroid injections should not affect pregnancy or breastfeeding, but to discuss it with your doctor first if you are pregnant or breastfeeding.",
          "North Tees and Hartlepool refer people for whom an injection or surgery is not an option, such as those who are pregnant or breastfeeding, to hand therapy instead.",
        ],
      },
    ],
    helps: [
      "Rest your thumb by adapting your activities and avoiding the activities that cause pain.",
      "Hug larger objects close to your body as you carry them.",
      "Use two hands and avoid gripping with your thumbs.",
      "Do not lift heavy objects or grip anything too tightly.",
      "Check with a pharmacist or doctor before using ibuprofen if you are breastfeeding.",
    ],
    tryThisWeek: [
      "Adapt tasks that cause pain.",
      "Carry things close to your body.",
      "Use two hands, not your thumbs.",
    ],
    ask: "How could I lift, carry and feed my baby with less strain on my thumb, and which painkiller suits me while breastfeeding?",
    interactive: {
      kind: "scenarios",
      title: "Moments with a young baby",
      scenarios: [
        { id: "feeding", situation: "You are breastfeeding and your wrist aches.", options: [{ text: "Take ibuprofen without asking" }, { text: "Ask a pharmacist; paracetamol is usually best", best: true }], why: "Paracetamol is usually the best painkiller to take if you are breastfeeding. Check with a pharmacist or doctor before using ibuprofen." },
        { id: "gel", situation: "You have rubbed ibuprofen gel on your wrist before a cuddle.", options: [{ text: "Let your baby rest on that spot" }, { text: "Keep your baby's skin off that area", best: true }], why: "Try to avoid your baby's skin touching the area where you applied the gel or spray." },
        { id: "carrying", situation: "You are carrying a heavy changing bag.", options: [{ text: "Grip the handles tightly in one hand" }, { text: "Hug it close, using both arms", best: true }], why: "Hugging larger objects close to your body lets larger, stronger joints take the weight, and using two hands spreads the load." },
      ],
    },
    sources: [LOTHIAN, NEWCASTLE, UHCW, AU_JOINTCARE, NHS_IBUPROFEN, NHS_PARACETAMOL, AU_STEROID, NTH, NHS_THUMB, ESHT],
    quiz: {
      question: "Which painkiller is usually best if you are breastfeeding?",
      options: [{ text: "Paracetamol", right: true }, { text: "Ibuprofen tablets" }, { text: "None at all" }],
      why: "Paracetamol is usually the best painkiller to take if you are breastfeeding.",
    },
  },
  {
    id: "dq-daily-tasks",
    kicker: "Living well",
    question: "How do I manage my phone, keyboard and everyday jobs?",
    hook: "Texting, turning a tap, chopping vegetables: the trick is to spot the jobs that bite, then do them differently.",
    short: "Texting, gaming, scissors, taps and door handles can all aggravate the pain. Keep the wrist straight in line with the forearm, take regular micro breaks, stop if the pain starts to rise, and use gadgets for difficult jobs. At work, an employer, an occupational therapist or Access to Work may be able to help.",
    sections: [
      {
        heading: "The jobs that hurt",
        paragraphs: [
          "Pain is aggravated especially by lifting the thumb, as in the hitchhiker position, or when using scissors, turning a door handle, turning a tap, texting and gaming.",
          "Torbay's hand therapists suggest trying to reduce repetitive tasks that may be aggravating the tendon, such as scissors, secateurs, lifting and racket sports.",
        ],
      },
      {
        heading: "At a desk",
        paragraphs: [
          "Check your wrist position when you do activities at work and home. You may need to change your posture and workstation, and keep your wrist in a straight line with your forearm.",
          "If you work at a computer, try to take a break and stand up every 30 minutes or so, and keep your wrists relaxed if you are typing.",
        ],
      },
      {
        heading: "Pace and plan",
        paragraphs: [
          "Stop doing an activity if your pain starts to increase, and do not push through increasing pain. If you cannot stop an activity altogether, reduce the amount done at one time, take regular micro breaks, and prioritise and plan daily tasks.",
          "Think about using gadgets or tools to make difficult or painful tasks easier, such as opening jars or chopping vegetables.",
          "When gripping tightly, take frequent breaks, try to loosen your grip, and use a padded handle to widen your grip.",
        ],
      },
      {
        heading: "Work",
        paragraphs: [
          "Speak to your employer about ways they can help you keep working, like changing the way you work or reducing your hours. An occupational therapist can suggest exercises, equipment or changes to your workspace.",
          "Maintaining normal activities, including work, keeps you moving and helps prevent your hand and wrist getting weak. Newcastle's leaflet notes that you do not have to be pain free to return to or stay at work.",
          "Access to Work can help you get or stay in work if you have a physical health condition. It could give a grant to help pay for things like specialist equipment or physical changes to your workplace.",
        ],
      },
    ],
    helps: [
      "Stop doing an activity if your pain starts to increase.",
      "Take regular micro breaks if you cannot stop an activity.",
      "Keep your wrist in a straight line with your forearm.",
      "Use gadgets or tools to make difficult tasks easier, such as opening jars.",
      "Talk to your employer about changing the way you work.",
    ],
    tryThisWeek: [
      "Stop if the pain starts to increase.",
      "Take regular micro breaks.",
      "Keep your wrist straight.",
    ],
    ask: "Which of my daily jobs are most likely to be aggravating it, and would an occupational therapist help?",
    interactive: {
      kind: "risk-check",
      title: "Which everyday jobs set it off?",
      intro: "Tick the jobs that bring on your pain. Each says what may help.",
      items: [
        { id: "texting", label: "Texting or gaming", note: "Both can aggravate the pain. Reduce the amount done at one time and take micro breaks.", changeable: true },
        { id: "typing", label: "Typing at a computer", note: "Keep your wrists relaxed, and take a break and stand up every 30 minutes or so.", changeable: true },
        { id: "scissors", label: "Scissors or secateurs", note: "Try to reduce repetitive tasks that may be aggravating the tendon.", changeable: true },
        { id: "taps", label: "Turning taps or door handles", note: "Both can aggravate it. Stop and think how you could do it differently.", changeable: true },
        { id: "jars", label: "Opening jars or chopping", note: "Gadgets or tools can make difficult or painful tasks easier.", changeable: true },
        { id: "wringing", label: "Wringing out a cloth", note: "Avoid repetitive hand movements such as wringing, turning or twisting.", changeable: true },
      ],
    },
    sources: [NEWCASTLE, NHS_SCOT, AU_JOINTCARE, NHS_RSI, GOV_ATW, NHS_WRIST, TORBAY],
    quiz: {
      question: "What wrist position does NHS Scotland's leaflet suggest?",
      options: [{ text: "In a straight line with your forearm", right: true }, { text: "Bent towards the little finger" }, { text: "Bent back as far as it goes" }],
      why: "Check your wrist position when you do activities at work and home, and keep your wrist in a straight line with your forearm.",
    },
  },
  {
    id: "dq-exercises",
    kicker: "Living well",
    question: "Which exercises help as de Quervain's improves?",
    hook: "Small thumb lifts and slides first, then gentle strength. The rule from every leaflet: never exercise into pain.",
    short: "Once the pain starts to settle, NHS hand therapy leaflets introduce gentle thumb and wrist movements, then resisted exercises and grip strength, always within pain limits and as a therapist advises. Remove the splint to exercise, and stop and speak to your physiotherapist if pain increases and lasts.",
    sections: [
      {
        heading: "Check first, then start gently",
        paragraphs: [
          "Once the pain has started to settle, exercises to strengthen the muscles around the wrist and thumb should be gradually introduced, and your hand therapist will advise you. Your therapist will guide you on which exercises to do and when to progress them.",
          "You may need to wear a splint continuously for 2 to 3 weeks before starting. If you have been told to wear a splint, remove it for the exercises.",
        ],
      },
      {
        heading: "Early movements",
        paragraphs: [
          "Start with your hand flat on the table. Using your other hand, lift your thumb up and away from your index finger, then slowly lower it back down. Bath's hand therapists suggest doing this 10 times.",
          "Place your hand on a table, thumb facing upwards, and use your other hand to lift your thumb upwards. Once you can do this without pain, try moving your thumb up on its own.",
          "Gently glide your thumb across the tips of each finger, towards the bottom of the little finger, only as far as is comfortable.",
        ],
      },
      {
        heading: "Later, as it settles",
        paragraphs: [
          "Support your forearm on a table with your wrist on the edge, thumb facing upwards. Slowly lower your wrist downwards, little fingers leading, and use your other hand to help it back up to the start.",
          "Resisted exercises come later in some leaflets. Bend the tip of your thumb and use your other index finger to resist as you try to lift the thumb up, or to move it out to the side.",
          "When symptoms have settled and you no longer need the splint, Torbay's hand therapists suggest gently building grip strength as pain allows.",
        ],
      },
      {
        heading: "How much is too much",
        paragraphs: [
          "Do not exercise into pain. If you have a lasting increase in pain, stop and speak to your physiotherapist.",
          "NHS inform suggests rating pain out of 10 and aiming to keep it between 0 and 5 during exercise. Exercise should not make your pain worse overall, and your pain should be no worse the morning after.",
        ],
      },
    ],
    helps: [
      "Remove your splint for the exercises, if you have been told to wear one.",
      "Do not exercise into pain.",
      "Try the exercises 2 to 3 times a day.",
      "Keep your pain between 0 and 5 out of 10 during exercise.",
      "Stop and speak to your physiotherapist if you have a lasting increase in pain.",
    ],
    tryThisWeek: [
      "Take the splint off to exercise.",
      "Keep pain at 5 out of 10 or less.",
      "Exercise 2 to 3 times a day.",
    ],
    ask: "Which of these exercises should I do now, how often, and when should I move on to the next stage?",
    interactive: {
      kind: "flip-cards",
      title: "Exercises from NHS hand therapy leaflets",
      intro: "Only as your therapist advises, and never into pain.",
      cards: [
        { id: "lift", front: "Thumb lift", when: "Early, with help", back: "Hand flat on a table. Your other hand lifts the thumb away from the index finger, then lower it slowly." },
        { id: "up", front: "Thumb up", when: "Early, thumb facing up", back: "Use your other hand to lift the thumb upwards. Once that is pain free, try it on its own." },
        { id: "glide", front: "Fingertip glide", when: "Early", back: "Glide your thumb across the tips of each finger towards the bottom of the little finger, only as far as is comfortable." },
        { id: "wrist", front: "Wrist lower", when: "Later", back: "Wrist on a table edge, thumb up. Slowly lower the wrist, little fingers leading, then help it back up." },
        { id: "resist", front: "Resisted thumb", when: "Later", back: "Bend the thumb tip and resist with your other index finger as you try to lift it up or out to the side." },
      ],
    },
    sources: [RUH, LOTHIAN, UHCW, STG, TORBAY, INFORM_EX, GLOS],
    quiz: {
      question: "What should you do if an exercise causes a lasting increase in pain?",
      options: [{ text: "Stop and speak to your physiotherapist", right: true }, { text: "Push through it" }, { text: "Do more repetitions" }],
      why: "If you have a lasting increase in pain, stop and speak to your physiotherapist.",
    },
  },
  {
    id: "dq-coming-back",
    kicker: "Living well",
    question: "Can I stop de Quervain's coming back?",
    hook: "Settle it, get moving, build strength back: and treat a twinge as a warning rather than something to push through.",
    short: "Most symptoms settle with time. Moving from settling the pain to restoring movement and strength, avoiding long rests and long repetitive spells, and treating pain as a warning can all help. If it returns, a GP can advise; a further injection may help, though repeat injections may work less well.",
    sections: [
      {
        heading: "Settling, then getting strong again",
        paragraphs: [
          "Most symptoms do settle with time, and there is a lot you can do to help yourself.",
          "East Sussex Healthcare describes the path as settling pain and swelling, then restoring movement, then returning to normal function. Avoid or adapt the activities that aggravate your symptoms at first, then work with your clinician to make those movements progressively stronger.",
        ],
      },
      {
        heading: "Keep moving",
        paragraphs: [
          "Do not rest the affected area for more than a few days, because resting for too long can make it weaker and less flexible. Keep active, limiting the amount you do at first before gradually increasing it.",
          "You cannot always prevent tendon problems, but the NHS suggests warming up before exercising and gently stretching afterwards, taking regular breaks from repetitive exercises, and not doing the same repetitive exercises.",
        ],
      },
      {
        heading: "Protect your hands day to day",
        paragraphs: [
          "Arthritis UK's joint care advice suggests noticing any pain and using it as a warning, avoiding repeated or prolonged activities, and stopping to think about how you could do something differently if it hurts.",
          "It is better to do a little at a time, with plenty of rest, rather than give up something you enjoy.",
        ],
      },
      {
        heading: "If it comes back",
        paragraphs: [
          "A steroid injection may be of benefit if symptoms persist or recur, though further injections may generally be less effective than the first. Your doctor will probably recommend no more than three steroid injections into the same part of the body within a year.",
          "See a GP if the pain is getting worse or keeps coming back, or if it is stopping you doing normal activities. Recurrence of pain and symptoms is also listed among the possible risks of surgery.",
        ],
      },
    ],
    helps: [
      "Use pain as a warning, and avoid repeated or prolonged activities.",
      "Warm up before exercising and gently stretch afterwards.",
      "Take regular breaks from repetitive exercises.",
      "Do a little at a time, with plenty of rest, rather than give up something you enjoy.",
      "See a GP if the pain keeps coming back.",
    ],
    tryThisWeek: [
      "Treat pain as a warning.",
      "Warm up and stretch gently.",
      "Take regular breaks.",
    ],
    ask: "What can I keep doing to stop it coming back, and what would we try if it does?",
    interactive: {
      kind: "signs",
      title: "Has it come back?",
      intro: "Tick what you have noticed, to take to your GP or physiotherapist.",
      signs: [
        "Pain on the thumb side of the wrist again",
        "Pain that keeps coming back",
        "Pain that is getting worse",
        "Pain stopping normal activities",
        "No better after 2 weeks of home treatment",
        "Tingling or loss of feeling in the hand",
        "Wrist painful, warm, swollen and stiff",
      ],
      after: "The NHS suggests seeing a GP if the pain is getting worse or keeps coming back.",
      copyHeading: "To tell my GP",
    },
    sources: [AU_JOINTCARE, NHS_TENDONITIS, NHS_RSI, AU_STEROID, ESHT, SBUHB, NHS_WRIST, NHS_SCOT],
    quiz: {
      question: "Why not rest the wrist for more than a few days?",
      options: [{ text: "It can become weaker and less flexible", right: true }, { text: "It heals too quickly" }, { text: "Splints stop fitting" }],
      why: "Do not rest the affected area for more than a few days, because resting for too long can make it weaker and less flexible.",
    },
  },
];
