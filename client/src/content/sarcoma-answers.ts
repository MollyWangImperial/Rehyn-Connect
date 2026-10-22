import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Sarcoma page's pieces (content/library-conditions/cancer-more-2.ts,
// `sarcoma`). Every sentence was written from wording checked on 22 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. Most of it comes from Sarcoma UK,
// Macmillan Cancer Support, Cancer Research UK and the NHS, with the government's pages on disability and
// Access to Work and Samaritans. The answers describe treatment, recovery and living with after-effects;
// they give no survival or life-expectancy figures. Emergency guidance (the 24-hour chemotherapy number,
// 999, A&E and NHS 111) is worded as the sources give it, and the mood answer follows safe-messaging
// guidance with the crisis routes exactly as the NHS, Macmillan and Samaritans state them.
// General information only; it never replaces what a person's own sarcoma team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const suk = (label: string, path: string): LearnSource => ({ label: `Sarcoma UK: ${label}`, url: `https://sarcoma.org.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_STS_WHAT = nhs("What is soft tissue sarcoma?", "conditions/soft-tissue-sarcoma/what-is-soft-tissue-sarcoma/");
const NHS_STS_TREAT = nhs("Treatment for soft tissue sarcoma", "conditions/soft-tissue-sarcoma/treatment/");
const NHS_BC_WHAT = nhs("What is bone cancer?", "conditions/bone-cancer/what-is-bone-cancer/");
const NHS_SEPSIS = nhs("Sepsis", "conditions/sepsis/");
const NHS_DVT = nhs("DVT (deep vein thrombosis)", "conditions/deep-vein-thrombosis-dvt/");
const NHS_CELLULITIS = nhs("Cellulitis", "conditions/cellulitis/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const SUK_WHAT = suk("What is sarcoma?", "about-sarcoma/what-is-sarcoma/");
const SUK_TYPES = suk("Types of sarcoma", "about-sarcoma/what-is-sarcoma/types-of-sarcoma/");
const SUK_REFERRAL = suk("Your referral explained", "about-sarcoma/diagnosing-sarcoma/your-referral-explained/");
const SUK_CENTRES = suk("Sarcoma specialist centres", "support/sarcoma-specialist-centres/");
const SUK_MDT = suk("Multidisciplinary team (MDT)", "about-sarcoma/treating-sarcoma/multidisciplinary-team-mdt/");
const SUK_TREAT = suk("Treatment types", "about-sarcoma/treating-sarcoma/treatment-types/");
const SUK_COMES_BACK = suk("If sarcoma comes back", "about-sarcoma/what-is-sarcoma/if-sarcoma-comes-back/");
const SUK_BEYOND = suk("Living with and beyond sarcoma", "support/living-with-and-beyond-sarcoma/");
const SUK_REHAB_START = suk("Starting rehabilitation", "support/rehabilitation-hub/starting-rehabilitation/");
const SUK_REHAB_SURGERY = suk("Rehabilitation after surgery", "support/rehabilitation-hub/rehabilitation-after-surgery/");
const SUK_AMP = suk("Amputation", "support/rehabilitation-hub/rehabilitation-after-surgery/amputation/");
const SUK_EXCISION = suk("Tissue or bone excision", "support/rehabilitation-hub/rehabilitation-after-surgery/tissue-or-bone-excision/");
const SUK_FEMORAL = suk("Femoral or tibial replacement", "support/rehabilitation-hub/rehabilitation-after-surgery/femoral-or-tibial-replacement/");
const SUK_LYMPH = suk("Lymphoedema and sarcoma", "support/rehabilitation-hub/lymphoedema-and-sarcoma/");
const SUK_SELFCARE = suk("Looking after yourself after surgery", "support/rehabilitation-hub/looking-after-yourself-after-surgery/");
const SUK_WORK = suk("Back to work or school", "support/rehabilitation-hub/back-to-work-or-school/");
const SUK_ANXIETY = suk("Anxiety, low mood and loneliness", "support/emotional-support/anxiety-low-mood-loneliness/");
const SUK_ESTEEM = suk("Self-esteem and sarcoma", "support/emotional-support/self-esteem-and-sarcoma/");
const SUK_MEEK = suk("Q&A with a clinical psychologist", "support/emotional-support/qa-with-dr-chris-meek/");
const SUK_ORGS = suk("More support for your mental health", "support/emotional-support/useful-organisations/");
const SUK_LINE = suk("Sarcoma UK Support Line", "support/sarcoma-uk-support-line/");
const SUK_FIN = suk("Financial support", "support/practical-support/financial-support/");
const SUK_HEALTH_FIN = suk("Health-related financial support", "support/practical-support/financial-support/health-related-financial-support/");
const SUK_ADDL = suk("Additional benefit support", "support/practical-support/financial-support/additional-benefit-support/");

const MAC_STS = mac("Soft tissue sarcoma", "soft-tissue-sarcoma");
const MAC_BC = mac("Bone cancer", "bone-cancer");
const MAC_STS_SURG = mac("Surgery for soft tissue sarcoma", "treatments-and-drugs/surgery-for-soft-tissue-sarcoma");
const MAC_BC_SURG = mac("Surgery for bone cancer", "treatments-and-drugs/surgery-for-bone-cancer");
const MAC_STS_RADIO = mac("Radiotherapy for soft tissue sarcoma", "treatments-and-drugs/radiotherapy-for-soft-tissue-sarcoma");
const MAC_STS_CHEMO = mac("Chemotherapy for soft tissue sarcoma", "treatments-and-drugs/chemotherapy-for-soft-tissue-sarcoma");
const MAC_BC_CHEMO = mac("Chemotherapy for bone cancer", "treatments-and-drugs/chemotherapy-for-bone-cancer");
const MAC_LIMB = mac("Limb-sparing surgery", "treatments-and-drugs/limb-salvage-surgery");
const MAC_AMP = mac("Amputation", "treatments-and-drugs/amputation");
const MAC_AFTER_SURG = mac("What happens after surgery?", "treatment/types-of-treatment/surgery/what-happens-after-surgery");
const MAC_FATIGUE = mac("Tiredness (fatigue)", "impacts-of-cancer/tiredness");
const MAC_LATE = mac("Late effects of cancer treatment", "after-treatment/late-effects-of-treatment");
const MAC_ACTIVE = mac("Being physically active after treatment", "after-treatment/being-physically-active");
const MAC_BODY = mac("Changes to your appearance and body image", "impacts-of-cancer/changes-to-your-appearance-and-body-image");
const MAC_RETURN = mac("Returning to work", "impacts-of-cancer/work-and-cancer/returning-to-work");
const MAC_RIGHTS = mac("Cancer and employment rights", "impacts-of-cancer/work-and-cancer/cancer-and-employment-rights");
const MAC_DEPRESSION = mac("Depression and cancer", "impacts-of-cancer/depression");
const MAC_FEAR = mac("Coping with worries about cancer coming back", "after-treatment/coping-with-worries-about-cancer-coming-back");

const CRUK_FU = cruk("Follow up after treatment for soft tissue sarcoma", "soft-tissue-sarcoma/treatment/follow-up");
const CRUK_LIMB = cruk("Surgery to an arm or leg (limb)", "soft-tissue-sarcoma/treatment/surgery/surgery-to-an-arm-or-leg");
const CRUK_AFTER = cruk("After surgery for soft tissue sarcoma", "soft-tissue-sarcoma/treatment/surgery/after-operation");
const CRUK_COPING = cruk("Coping with soft tissue sarcoma", "soft-tissue-sarcoma/living-with/coping");
const CRUK_BC_AFTER = cruk("Life after bone cancer surgery", "bone-cancer/living-with/life-after-bone-surgery");

const GOV_DISABILITY = gov("Definition of disability under the Equality Act 2010", "definition-of-disability-under-equality-act-2010");
const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");

const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const sarcomaAnswers: LearnArticle[] = [
  {
    id: "sar-what-it-is",
    kicker: "Understanding",
    question: "What is sarcoma?",
    hook: "A rare cancer that can start almost anywhere in the body, in the soft tissues or in the bone.",
    short: "Sarcoma is a rare cancer that can develop in muscle, bone, nerves, cartilage, tendons, blood vessels, and fatty or fibrous tissue. There are two main types, soft tissue sarcoma and bone sarcoma, with around 100 subtypes between them. Your doctor or specialist nurse can tell you which type you had.",
    sections: [
      {
        heading: "Two main types",
        paragraphs: [
          "Sarcoma is a rare type of soft tissue or bone cancer. It can happen anywhere in the body within muscle, bone, nerves, cartilage, tendons, blood vessels, and fatty or fibrous tissue.",
          "There are two main types of sarcoma: soft tissue sarcoma and bone sarcoma, which is also known as primary bone cancer. Within these two types, there are around 100 subtypes.",
        ],
      },
      {
        heading: "Soft tissue sarcoma",
        paragraphs: [
          "Soft tissue sarcoma can start almost anywhere inside the soft tissue of the body. Soft tissues include muscles, fat, blood vessels, ligaments and tendons.",
          "The most common areas for soft tissue sarcoma to start are the arms and legs. But it can develop anywhere in the body, including the womb, the stomach, the bowel, the skin, and the head and neck.",
        ],
      },
      {
        heading: "Bone sarcoma",
        paragraphs: [
          "Cancer that starts in the bones is called primary bone cancer. It can affect any bone, but it most commonly affects the hips (pelvis), ribs and bones in the arms and legs.",
          "The most common types of primary bone cancer are osteosarcoma, chondrosarcoma and Ewing sarcoma. Primary bone cancer is not the same as secondary bone cancer, which starts in another part of the body and spreads to the bones.",
          "Sometimes it is hard to tell whether a sarcoma has started in soft tissue or bone. Some types, such as Ewing sarcoma, can start in either.",
        ],
      },
      {
        heading: "Named after the cell it looks like",
        paragraphs: [
          "A sarcoma is named after the type of cell it looks like, not after the part of the body where it started. For example, leiomyosarcoma develops from smooth muscle, and liposarcoma develops from fat cells.",
          "Different types of sarcoma behave differently, which is why treatment is tailored to you. Your doctor or specialist nurse can tell you more about which type you have.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "Sarcoma can affect anyone of any age. It is the third most common cancer in children, but it is more common in middle-aged or elderly people.",
          "It is not fully understood why sarcomas happen. Some people think injuries can cause sarcoma, but there is not currently any evidence to support this.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or specialist nurse which type of sarcoma you had.",
      "Ask your doctor whether it was a primary bone cancer or a secondary cancer in the bone.",
      "Call the Sarcoma UK Support Line free on 0808 801 0401, Monday to Friday, 10am to 3pm, with any questions.",
      "Order free booklets and factsheets from Sarcoma UK if you prefer your information in print.",
      "Talk to others affected by sarcoma on Macmillan's soft tissue sarcoma forum.",
    ],
    tryThisWeek: [
      "Ask which type of sarcoma you had.",
      "Call the Sarcoma UK Support Line.",
      "Order a free booklet in print.",
    ],
    ask: "What type and subtype of sarcoma did I have, and did it start in soft tissue or bone?",
    interactive: {
      kind: "flip-cards",
      title: "Some types of sarcoma",
      intro: "Turn a card to see where each type starts.",
      cards: [
        { id: "soft-tissue", front: "Soft tissue sarcoma", when: "Fat, muscle, nerves, blood vessels", back: "Can start almost anywhere in the soft tissue of the body. The arms and legs are the most common areas." },
        { id: "osteosarcoma", front: "Osteosarcoma", when: "Bone sarcoma", back: "A type of bone sarcoma mostly diagnosed in teenagers and young people." },
        { id: "chondrosarcoma", front: "Chondrosarcoma", when: "Bone sarcoma", back: "A bone sarcoma that develops in the cartilage cells." },
        { id: "ewing", front: "Ewing sarcoma", when: "Bone or soft tissue", back: "Can start in either the bone or the soft tissue. It is most common in teenagers." },
        { id: "liposarcoma", front: "Liposarcoma", when: "Soft tissue sarcoma", back: "Develops from the fat cells found all over the body." },
        { id: "gist", front: "GIST", when: "Soft tissue sarcoma", back: "A gastrointestinal stromal tumour develops in the digestive tract, usually in the stomach or small bowel." },
      ],
    },
    sources: [SUK_REFERRAL, SUK_WHAT, NHS_STS_WHAT, MAC_STS, NHS_BC_WHAT, SUK_TYPES, SUK_TREAT, MAC_BC, SUK_LINE],
    quiz: {
      question: "What are the two main types of sarcoma?",
      options: [{ text: "Soft tissue sarcoma and bone sarcoma", right: true }, { text: "Skin cancer and blood cancer" }, { text: "Lung cancer and liver cancer" }],
      why: "There are two main types of sarcoma: soft tissue sarcoma and bone sarcoma, which is also known as primary bone cancer.",
    },
  },
  {
    id: "sar-specialist-centres",
    kicker: "Your team",
    question: "Why is sarcoma treated at a specialist centre?",
    hook: "Sarcoma is rare, so it is treated by specialist teams at a small number of centres across the UK.",
    short: "Because sarcoma is rare, anyone with sarcoma or a suspected sarcoma should be seen at a sarcoma specialist centre. There, a multidisciplinary team (MDT) of experts works together to plan the treatment that is best for you. Your clinical nurse specialist or key worker is your main point of contact.",
    sections: [
      {
        heading: "A rare cancer, a specialist team",
        paragraphs: [
          "Because sarcoma is a rare cancer, you will be treated at a specialist sarcoma unit. Anyone who has sarcoma or a suspected sarcoma should be seen at a sarcoma specialist centre.",
          "If your doctor thinks you have soft tissue or bone sarcoma, you should be referred for diagnosis and treatment at a sarcoma specialist centre. You may also be seen under the direction of a specialist centre at a different hospital, or at a sarcoma specialist unit.",
        ],
      },
      {
        heading: "How many centres there are",
        paragraphs: [
          "There are 5 bone sarcoma specialist centres across the UK, and 17 soft tissue specialist centres. Depending on your treatment and type of sarcoma, you may be seen at a few different hospitals that fall under one sarcoma service.",
          "You might need to travel to a specialist centre to have your surgery. You may also have diagnostic and nursing support at other hospitals and centres.",
        ],
      },
      {
        heading: "The multidisciplinary team",
        paragraphs: [
          "A team of healthcare professionals will work together to plan the treatment that is best for you. This is called a multidisciplinary team, or MDT. They look at your medical details and your test and scan results, and make recommendations about your treatment.",
          "The MDT usually meets once a week. You may not meet every person in the team, but you will usually meet the members who are directly involved in your care.",
          "Your team may include sarcoma surgeons, medical and clinical oncologists, a radiologist and a pathologist. You may also meet a physiotherapist, an occupational therapist, a psychologist or counsellor, and a dietitian.",
        ],
      },
      {
        heading: "Your main point of contact",
        paragraphs: [
          "Your clinical nurse specialist (CNS) or key worker is your main point of contact. They support you through diagnosis and treatment, answer your questions, and help you understand your treatment plan.",
          "If you have not been given one, ask your hospital team who you should contact with questions.",
        ],
      },
      {
        heading: "Deciding together",
        paragraphs: [
          "You and your team will talk about your treatment options, and together you will decide which treatment to start.",
          "Your consultant, CNS or key worker should explain what the MDT has recommended. You can ask them any questions.",
        ],
      },
    ],
    helps: [
      "Ask your consultant, CNS or key worker to explain what the MDT has recommended.",
      "Keep your CNS or key worker's details, as they are your main point of contact.",
      "If you have not been given a CNS or key worker, ask your hospital team who to contact.",
      "Use Sarcoma UK's map of specialist centres to see which hospitals will treat you.",
      "Call the Sarcoma UK Support Line for help finding a sarcoma MDT that covers where you live.",
    ],
    tryThisWeek: [
      "Ask what the MDT recommended.",
      "Keep your CNS's details to hand.",
      "Find your sarcoma service on the map.",
    ],
    ask: "Which sarcoma service is looking after me, and who is my main point of contact?",
    interactive: {
      kind: "flip-cards",
      title: "Who is in your team",
      intro: "Turn a card to see what each person does.",
      cards: [
        { id: "surgeon", front: "Sarcoma surgeon", when: "If you need an operation", back: "Removes the tumour, explains the operation and its risks, and checks how you are recovering afterwards." },
        { id: "medical-oncologist", front: "Medical oncologist", when: "If you have cancer medicines", back: "Treats cancer with medicines such as chemotherapy, and monitors any side effects." },
        { id: "clinical-oncologist", front: "Clinical oncologist", when: "If you have radiotherapy", back: "Plans your radiotherapy, decides the dose and area to treat, and checks how well it is working." },
        { id: "radiologist", front: "Radiologist", when: "During diagnosis", back: "Looks at scans and X-rays to help diagnose sarcoma and show where the tumour is." },
        { id: "pathologist", front: "Pathologist", when: "During diagnosis", back: "Looks at cells or body tissue under a microscope to help diagnose sarcoma." },
        { id: "cns", front: "Clinical nurse specialist", when: "Throughout your care", back: "Your main point of contact, who supports you and answers your questions." },
        { id: "physio", front: "Physiotherapist", when: "Before and after treatment", back: "Gives advice about exercise and mobility." },
      ],
    },
    sources: [MAC_STS, SUK_WHAT, SUK_CENTRES, CRUK_LIMB, SUK_MDT, SUK_TREAT, SUK_LINE],
    quiz: {
      question: "What does the multidisciplinary team (MDT) do?",
      options: [{ text: "Works together to plan the treatment that is best for you", right: true }, { text: "Only carries out scans" }, { text: "Takes over from your GP for good" }],
      why: "A team of healthcare professionals will work together to plan the treatment that is best for you.",
    },
  },
  {
    id: "sar-treatments",
    kicker: "Treatment",
    question: "What do surgery, radiotherapy and chemotherapy each do for sarcoma?",
    hook: "Surgery is the main treatment for most sarcomas. Radiotherapy and chemotherapy may be added before or after, depending on the type.",
    short: "Surgery is the main treatment for most people with sarcoma, usually removing the tumour with a margin of healthy tissue around it. Radiotherapy may be given before or after surgery, and chemotherapy is mainly used for bone sarcomas and certain soft tissue types. During chemotherapy, a high or low temperature or feeling unwell means contacting the hospital straight away on the 24-hour number.",
    sections: [
      {
        heading: "Tailored to you",
        paragraphs: [
          "The type of treatment you have will depend on the stage and grade of your cancer, and the type of sarcoma you have. Different types of sarcoma behave differently, which is why your treatment is tailored to you.",
          "Most people need a combination of treatments. Your cancer doctor or specialist nurse will explain the different treatments and their side effects.",
        ],
      },
      {
        heading: "Surgery",
        paragraphs: [
          "Surgery is the main treatment for most people with sarcoma. It usually involves removing the tumour and some tissue around it, known as taking a margin, which can reduce the risk of the cancer coming back.",
          "After the operation, a pathologist examines the tissue from the margin. If there are cancer cells in the margin, you may need another operation to remove more tissue.",
          "If the sarcoma is in an arm or leg, the surgeon will try to remove it without removing the limb. This is known as limb sparing surgery.",
        ],
      },
      {
        heading: "Radiotherapy",
        paragraphs: [
          "Radiotherapy uses high-energy rays to destroy cancer cells. It may be given before surgery to shrink the tumour, or after surgery to destroy any remaining cancer cells and reduce the risk of the cancer coming back.",
          "It is usually given every day from Monday to Friday. A course for an early-stage cancer usually lasts about 6 weeks, and each treatment takes about 10 to 15 minutes.",
          "Side effects can include red, sore or itchy skin in the treatment area, and tiredness. They usually disappear over a few weeks or months after treatment finishes.",
        ],
      },
      {
        heading: "Chemotherapy and targeted medicines",
        paragraphs: [
          "Chemotherapy is mainly used for treating bone sarcomas, either before or after surgery. It is only used for certain types of soft tissue sarcoma.",
          "If you have osteosarcoma or Ewing sarcoma, you usually have chemotherapy before and after surgery. Each treatment session is followed by a rest period of a few weeks, to allow your body to recover.",
          "Targeted medicines are sometimes used to slow the growth of certain types of soft tissue sarcoma. Some clinical trials look at immunotherapy and targeted therapies, and your doctor or nurse can tell you about trials you may be able to take part in.",
        ],
      },
      {
        heading: "When to call straight away",
        paragraphs: [
          "An infection can be very serious when your white blood cell count is low. During chemotherapy, contact the hospital straight away on the 24-hour number if your temperature is above 37 and a half degrees or below 36 degrees, if you feel unwell even with a normal temperature, or if you have symptoms of an infection.",
          "Also contact the hospital straight away on the 24-hour number if you have any unexplained bruising or bleeding. Always call 999 if you have chest pain, pressure or tightness, or difficulty breathing.",
          "If you have any symptoms or side effects you are worried about, talk to your specialists. You do not need to wait for your next check-up.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor or specialist nurse to explain each treatment and its side effects.",
      "During chemotherapy, contact the hospital straight away on the 24-hour number if you have a high or low temperature or feel unwell.",
      "Tell your team about any side effects during or after radiotherapy, as there are often things that can help.",
      "Always call 999 if you have chest pain or difficulty breathing.",
      "Ask your doctor or nurse about clinical trials you may be able to take part in.",
      "Talk to your specialists about worrying symptoms without waiting for your next check-up.",
    ],
    tryThisWeek: [
      "Ask about each treatment's side effects.",
      "Call the 24-hour number if unwell.",
      "Ask about clinical trials.",
    ],
    ask: "Why have you recommended this combination of treatments for my type of sarcoma, and which side effects should I report?",
    interactive: {
      kind: "signs",
      title: "Call the 24-hour number straight away",
      intro: "During chemotherapy, tick any you have. Each one means contacting the hospital straight away on the 24-hour number.",
      signs: [
        "A temperature above 37 and a half degrees",
        "A temperature below 36 degrees",
        "Feeling unwell, even with a normal temperature",
        "Feeling shivery and shaking",
        "A sore throat or a cough",
        "Breathlessness",
        "Diarrhoea",
        "Unexplained bruising or bleeding",
      ],
      after: "Contact the hospital straight away on the 24-hour number. Always call 999 if you have chest pain or difficulty breathing.",
      copyHeading: "Symptoms to report to the 24-hour number",
    },
    sources: [SUK_TREAT, MAC_STS, MAC_STS_SURG, NHS_STS_TREAT, MAC_STS_RADIO, MAC_BC_CHEMO, MAC_STS_CHEMO],
    quiz: {
      question: "During chemotherapy, what should you do if your temperature is above 37 and a half degrees?",
      options: [{ text: "Contact the hospital straight away on the 24-hour number", right: true }, { text: "Wait until your next appointment" }, { text: "Go to bed and see how you feel tomorrow" }],
      why: "During chemotherapy, contact the hospital straight away on the 24-hour number if your temperature is above 37 and a half degrees or below 36 degrees, if you feel unwell even with a normal temperature, or if you have symptoms of an infection.",
    },
  },
  {
    id: "sar-follow-up",
    kicker: "Follow-up",
    question: "What happens at follow-up, and how long does it go on?",
    hook: "Check-ups start every few months and then spread out. They look for the sarcoma coming back, and for late effects of treatment.",
    short: "After treatment you have regular follow-up appointments for several years, usually with an examination and chest X-rays. At first they are every few months, and if all is well they gradually become less frequent. Between appointments, contact your specialist team about any new lumps, pain or a cough that does not go away.",
    sections: [
      {
        heading: "Why you have follow-up",
        paragraphs: [
          "Follow-up care, also known as surveillance, begins when you have completed your cancer treatment. Your team use it to look for signs of the sarcoma coming back, either where it was removed or in another part of the body.",
          "Follow-up appointments also check how you are, and give you the chance to raise any concerns about your progress.",
        ],
      },
      {
        heading: "What happens at an appointment",
        paragraphs: [
          "Your follow-up should include reviewing any new symptoms, examining areas for the sarcoma coming back, chest X-rays to check for spread to the lungs, and monitoring of late side effects from treatment.",
          "Depending on the type of sarcoma you had, you might also have MRI scans or ultrasound scans. If you had chemotherapy for a bone cancer, you may have regular scans to check your heart for a few years.",
          "You might have a video or telephone appointment instead of a face-to-face one. The surgeon and the oncologist might share your follow-up.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "At first, your check-ups will be every few months. If all is well, they gradually become less and less frequent.",
          "For an intermediate or high grade sarcoma, routine follow-up is usually every 3 to 4 months for the first 2 to 3 years, then every 6 months up to 5 years, then once a year. For a low grade sarcoma, it is usually every 4 to 6 months for the first 3 to 5 years, then once a year.",
          "Follow-up can last for many years and will depend on the type of sarcoma you had. Your cancer doctor and nurse will explain more about your own follow-up.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "It is important to check yourself for sarcoma coming back. Your doctor or sarcoma clinical nurse specialist can tell you what to look for.",
          "Signs can include new lumps or pain in the area where the sarcoma was removed, new lumps in other areas of your body, or a cough that does not go away. If you are worried, contact your sarcoma specialist team, who may bring your next appointment forward.",
          "You do not have to wait until your next visit to report new symptoms.",
        ],
      },
      {
        heading: "Scanxiety",
        paragraphs: [
          "For some people, regular scans can trigger anxiety, sometimes known as scanxiety. This is completely normal.",
          "Many people find follow-up appointments worrying. It can help to tell someone close to you how you are feeling, and many people find counselling helpful during or after cancer treatment.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or nurse how often you will have check-ups, and for how long.",
      "Ask your sarcoma clinical nurse specialist what signs to look out for.",
      "Contact your sarcoma specialist team about any new lumps, pain or a cough that does not go away.",
      "Use follow-up appointments to ask any questions you have.",
      "Tell someone close to you how you are feeling about appointments.",
    ],
    tryThisWeek: [
      "Ask how long follow-up will last.",
      "Learn the signs to look out for.",
      "Bring your questions to follow-up.",
    ],
    ask: "How often will I have check-ups and scans, and which signs should I report between them?",
    interactive: {
      kind: "timeline",
      title: "A typical follow-up pattern",
      steps: [
        { id: "end", when: "Treatment ends", title: "Follow-up begins", points: ["Follow-up care begins when you have completed treatment.", "It looks for the sarcoma coming back and for late effects."] },
        { id: "early", when: "First 2 to 3 years", title: "Every 3 to 4 months", points: ["Usual for an intermediate or high grade sarcoma.", "You may have a chest X-ray at your check-ups."] },
        { id: "middle", when: "Up to 5 years", title: "Every 6 months", points: ["If all is well, check-ups become less frequent."] },
        { id: "later", when: "After 5 years", title: "Once a year", points: ["Follow-up can last for many years, depending on the type.", "Low grade sarcomas follow a different pattern."] },
        { id: "between", when: "Between visits", title: "Check yourself", points: ["Look for new lumps or pain, or a cough that does not go away.", "Contact your specialist team; you do not have to wait."] },
      ],
    },
    sources: [SUK_COMES_BACK, CRUK_FU, MAC_BC, MAC_STS, SUK_BEYOND],
    quiz: {
      question: "What happens to check-ups over time if all is well?",
      options: [{ text: "They gradually become less frequent", right: true }, { text: "They become more frequent" }, { text: "They stop after the first month" }],
      why: "If all is well, they gradually become less and less frequent.",
    },
  },
  {
    id: "sar-physio",
    kicker: "Recovery",
    question: "How does physiotherapy help me get moving again?",
    hook: "Rehabilitation can start even before treatment, and for many people it carries on long after, helping muscles and joints recover.",
    short: "Physiotherapists help you return to being as active as possible, strengthening your muscles and helping your joints recover movement. With sarcoma it can help to start before treatment, which is called prehabilitation. Keep doing the exercises you are given at home, and ask for a referral if you have not had one.",
    sections: [
      {
        heading: "Start early",
        paragraphs: [
          "Rehabilitation usually starts after treatment. But with sarcoma you may find it helps to start earlier, which is sometimes called prehabilitation, or prehab.",
          "When you are first diagnosed, ask your specialist team to refer you to rehabilitation services. Rehabilitation can be done at home or at a hospital.",
        ],
      },
      {
        heading: "What a physiotherapist does",
        paragraphs: [
          "Physiotherapists help you return to being as active as possible. They help you strengthen your muscles and make sure your joints recover as much movement as possible.",
          "This may involve an exercise programme designed just for you, advice about managing fatigue, teaching you to use equipment to help you walk or support your joints, and increasing your ability to walk.",
          "An occupational therapist can help with everyday activities after surgery, such as personal care, tasks around the house, and returning to work or school.",
        ],
      },
      {
        heading: "Straight after surgery",
        paragraphs: [
          "After surgery, you will usually see a physiotherapist on the day of surgery or the day after. They will teach you exercises to help you move the affected area.",
          "Your nurses or physiotherapist will also teach you breathing and leg exercises. Breathing exercises help prevent a chest infection, and leg exercises help stop blood clots forming.",
          "If you have had surgery on your leg, your physiotherapist will tell you when you can start walking again, or if you need crutches or another walking aid first.",
        ],
      },
      {
        heading: "Keeping going at home",
        paragraphs: [
          "Your physiotherapist will give you exercises to do at home after you leave hospital. It is very important to do these regularly, to get the best possible function from the affected limb.",
          "You will also be referred to ongoing physiotherapy as an outpatient, as close as possible to where you live.",
          "Rehabilitation can sometimes take a long time, and it can be hard work and frustrating at times. It may take longer if you are also having chemotherapy or radiotherapy.",
        ],
      },
      {
        heading: "Staying active for the long term",
        paragraphs: [
          "Rehabilitation is not always short term. Many people benefit from ongoing rehabilitation, even years after their treatment has finished, so talk to your team at follow-up if you need more support.",
          "Many local councils offer an exercise on referral scheme at local gyms, and your physiotherapist or GP can refer you if it is available. Many hospices also run rehabilitation sessions for people living with and beyond cancer.",
          "Do not do too much too soon. Allow your body time to heal, and rest in between keeping active.",
        ],
      },
    ],
    helps: [
      "Ask your specialist team to refer you to rehabilitation services when you are first diagnosed.",
      "Do the exercises your physiotherapist gives you regularly at home.",
      "Ask for a physiotherapy referral if you have difficulty moving or joint stiffness.",
      "Ask your physiotherapist or GP about an exercise on referral scheme.",
      "Do not do too much too soon, and rest in between keeping active.",
      "Talk to your team at follow-up if you need more rehabilitation support.",
    ],
    tryThisWeek: [
      "Do your home exercises regularly.",
      "Ask about exercise on referral.",
      "Rest between keeping active.",
    ],
    ask: "Can I be referred for physiotherapy, and which exercises should I be doing now?",
    interactive: {
      kind: "scenarios",
      title: "Moments in rehab",
      scenarios: [
        {
          id: "skip",
          situation: "Your home exercises feel boring and you are tempted to skip them.",
          options: [{ text: "Keep doing them regularly", best: true }, { text: "Stop once you can walk" }],
          why: "It is very important to do these regularly, to get the best possible function from the affected limb.",
        },
        {
          id: "stiff",
          situation: "Your joint feels stiff after radiotherapy, but you have not seen a physiotherapist.",
          options: [{ text: "Ask for a referral", best: true }, { text: "Wait and hope it eases" }],
          why: "If you have not been referred to a physiotherapist and you're having difficulty moving or joint stiffness, you can ask for a referral.",
        },
        {
          id: "good-day",
          situation: "You feel great today and want to do as much as you can.",
          options: [{ text: "Build up, and rest in between", best: true }, { text: "Do it all while you feel good" }],
          why: "Do not do too much too soon. Allow your body time to heal, and rest in between keeping active.",
        },
        {
          id: "years-later",
          situation: "Years after treatment, you feel your movement could be better.",
          options: [{ text: "Mention it at your follow-up", best: true }, { text: "Assume it is too late" }],
          why: "Many people benefit from ongoing rehabilitation, even years after their treatment has finished.",
        },
      ],
    },
    sources: [SUK_REHAB_START, SUK_EXCISION, MAC_LIMB, SUK_SELFCARE],
    quiz: {
      question: "When can rehabilitation start with sarcoma?",
      options: [{ text: "It can help to start before treatment", right: true }, { text: "Only a year after surgery" }, { text: "Only once follow-up has ended" }],
      why: "But with sarcoma you may find it helps to start earlier, which is sometimes called prehabilitation, or prehab.",
    },
  },
  {
    id: "sar-limb-surgery",
    kicker: "Surgery",
    question: "What happens with limb surgery, and could I have an artificial limb?",
    hook: "Most sarcomas in an arm or leg are removed without losing the limb. When an amputation is needed, a whole team helps you prepare and recover.",
    short: "It is usually possible to remove a sarcoma in an arm or leg without removing the limb, which is called limb-sparing surgery; the bone may be replaced with a metal implant or a bone graft. Rarely, an amputation is the best option, and most people can then be fitted with an artificial limb. Rehabilitation can often last between 1 and 2 years.",
    sections: [
      {
        heading: "Limb-sparing surgery",
        paragraphs: [
          "Limb-sparing surgery is the most common type of surgery for a primary bone cancer or a soft tissue sarcoma in an arm or leg. It is sometimes called limb-salvage surgery.",
          "For a bone cancer, the surgeon removes the affected part of the bone and may replace it with a metal implant or with bone from another part of the body. If the cancer affects a bone in or near a joint, the surgeon can often replace the joint with an artificial one.",
          "After surgery to your hip or knee, you may have to wear a splint or brace for a few months, and after surgery to your arm or shoulder you may need a sling. You will use walking aids, such as a frame or elbow crutches, after an operation on your leg or pelvis.",
        ],
      },
      {
        heading: "Living with a replaced joint",
        paragraphs: [
          "After limb-sparing surgery, you can usually do most of the things you could before treatment, including exercise and sports. With a replaced knee you will be able to do low-impact exercise such as swimming or riding a bike, but your doctor might tell you not to do high-impact sports.",
          "After some hip and thigh bone replacements, you will need to limit how you move your hip. Do not bend it beyond a 90 degree angle, do not cross your legs, and do not twist your operated leg, and your occupational therapist will make sure you have the right equipment at home.",
          "You might need further operations in the future. Some prostheses are made to lengthen as a young person grows, and a false knee is likely to need further surgery at some point.",
        ],
      },
      {
        heading: "If an amputation is needed",
        paragraphs: [
          "Rarely, the surgeon may recommend removing all or part of the limb, which is called an amputation. This might be if the cancer has grown into the major nerves and blood vessels, if limb sparing surgery is not possible, or if the sarcoma comes back after it.",
          "Before an amputation, you may have an appointment with your rehabilitation team. It is a chance to ask questions, talk through what you will be able to do after surgery, and find out if you can have an artificial limb.",
          "It may help to talk to someone who has had the same operation. Your healthcare team or key worker may be able to arrange this.",
        ],
      },
      {
        heading: "Recovering after an amputation",
        paragraphs: [
          "After a leg amputation, you will see a physiotherapist the day after the operation. If you feel well and your pain is controlled, you will get out of bed on the first or second day, and your first mobility aid will be a wheelchair while you learn to walk again.",
          "Most people go home 10 to 14 days after the amputation, although it is different for everyone. Physiotherapy usually continues as an outpatient, often near your home.",
          "Some people feel pain that seems to come from the part of the limb that has been removed, called phantom pain. It is very real and usually fades over time, and your nurses and doctor can give you medicines to help control it.",
        ],
      },
      {
        heading: "An artificial limb",
        paragraphs: [
          "After an amputation, most people can be fitted with an artificial limb, called a prosthesis. If you can have one, you will be referred to a limb fitting centre for a full assessment, which can be a few weeks after the referral or after you finish chemotherapy.",
          "A prosthetist makes a cast of your stump to design a limb that fits, and keeps caring for you with adjustments and repairs. Your prosthetist, physiotherapist and occupational therapist will help you learn to use it.",
          "It can take many months before you can put a lot of weight comfortably on a false leg. Rehabilitation after sarcoma surgery can often last between 1 and 2 years, and it is important to keep going with your programme.",
        ],
      },
    ],
    helps: [
      "Ask your surgeon how the operation might affect you, and about the possible risks.",
      "Use the appointment before an amputation to ask questions and find out about an artificial limb.",
      "Ask your team if you can talk to someone who has had the same operation.",
      "Tell your nurses and doctor about any phantom pain.",
      "Follow all your surgeon's advice while your stump heals.",
      "Keep going with your rehabilitation programme.",
    ],
    tryThisWeek: [
      "Ask how surgery might affect you.",
      "Report any phantom pain.",
      "Keep up your rehab programme.",
    ],
    ask: "Is limb-sparing surgery possible for me, and what will my rehabilitation involve?",
    interactive: {
      kind: "timeline",
      title: "Recovering from a leg amputation",
      steps: [
        { id: "before", when: "Before surgery", title: "Meet the rehab team", points: ["A chance to ask questions and talk through any concerns.", "Find out if you can have an artificial limb."] },
        { id: "day-after", when: "The day after", title: "Physiotherapy starts", points: ["Simple exercises help prevent tight muscles and stiff joints.", "You may get out of bed on the first or second day."] },
        { id: "ward", when: "On the ward", title: "Learning to move", points: ["A wheelchair is your first mobility aid.", "A compression sock helps reduce swelling once dressings come off."] },
        { id: "home", when: "10 to 14 days", title: "Going home", points: ["Most people go home 10 to 14 days after the amputation.", "Physiotherapy continues as an outpatient."] },
        { id: "fitting", when: "Weeks later", title: "Limb fitting centre", points: ["A full assessment at a limb fitting centre.", "This can be a few weeks after referral or after chemotherapy."] },
        { id: "rehab", when: "1 to 2 years", title: "Rehabilitation", points: ["Rehabilitation can often last between 1 and 2 years.", "Keep going with your programme."] },
      ],
    },
    sources: [MAC_LIMB, SUK_FEMORAL, CRUK_BC_AFTER, CRUK_LIMB, NHS_STS_TREAT, SUK_AMP, MAC_AMP, CRUK_AFTER, SUK_REHAB_SURGERY, CRUK_COPING],
    quiz: {
      question: "What is the most common type of surgery for a sarcoma in an arm or leg?",
      options: [{ text: "Limb-sparing surgery", right: true }, { text: "Amputation" }, { text: "No surgery at all" }],
      why: "Limb-sparing surgery is the most common type of surgery for a primary bone cancer or a soft tissue sarcoma in an arm or leg.",
    },
  },
  {
    id: "sar-wound",
    kicker: "Healing",
    question: "How do I look after my wound and scar?",
    hook: "Most wounds heal well with simple care. Knowing the signs of infection, and of a blood clot, means you can act quickly.",
    short: "Before you go home, the nurses explain how to keep the wound clean and who to call if you are worried. Signs of infection, such as heat, swelling, redness, fluid from the wound or a temperature, mean contacting your doctor or nurse straight away. Scars usually flatten and fade over time, and your team can check them and suggest treatment if needed.",
    sections: [
      {
        heading: "In hospital",
        paragraphs: [
          "You may have tubes, called drains, to drain fluid from the wound. These are removed when fluid has stopped draining, which should take a few days.",
          "Sometimes fluid builds up around the wound, and the swelling should reduce over a few weeks. If a lot of fluid builds up, which is called a seroma, a doctor or nurse may need to drain it.",
          "It is normal to have pain for the first week or so. Tell your doctor or nurse as soon as you feel any pain, as painkillers work best when you take them regularly.",
        ],
      },
      {
        heading: "At home",
        paragraphs: [
          "The wound is closed with clips, stitches or a special medical glue. Clips or stitches are usually removed by a practice nurse at your GP surgery, and some surgeons use dissolving stitches that do not need to be removed.",
          "Before you go home, the nurses will explain how to keep the wound clean, give advice about baths and showers, and tell you who to call if you are worried. They may tell you not to remove the dressing yourself, as some dressings are only removed at a hospital appointment.",
        ],
      },
      {
        heading: "Signs of infection",
        paragraphs: [
          "Signs of infection can include heat, pain, swelling, redness or a darker change in skin colour around the wound, fluid coming from it, a temperature above 37 and a half degrees, feeling shivery and shaky, or feeling generally unwell. If you have any of these, contact your doctor or nurse straight away on the number you have been given.",
          "Infection is a particular risk for people also having chemotherapy. Infection in the bone after surgery needs urgent treatment, so call your doctor if you have pain, swelling, a fever or an open wound over the operation site.",
          "Call 999 or go to A&E if you might have sepsis, such as breathing very fast, being confused, having blue, pale or blotchy skin, or having a very high or very low temperature.",
        ],
      },
      {
        heading: "Blood clots",
        paragraphs: [
          "After surgery, you may wear compression stockings or have injections to help prevent blood clots. Moving around, and doing breathing and leg exercises, also reduce the risk.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you think you have a clot in your leg, such as throbbing pain and swelling in 1 leg. Call 999 or go to A&E if you have these symptoms and feel short of breath or have chest pain.",
        ],
      },
      {
        heading: "Scars",
        paragraphs: [
          "Scars are likely to be red on white skin or darker on black or brown skin, firm, slightly raised and itchy at first. Over time they flatten and fade, and everyone's skin heals differently.",
          "Limb sparing surgery may leave a long scar. Radiotherapy to the area can cause some tightness and discomfort, as it can make healthy tissues less stretchy over time.",
          "Speak to your healthcare team about treatment for your scar, such as scar massage or laser therapy. Rehabilitation may also include connective tissue massage to reduce tightness and help with scar healing.",
        ],
      },
    ],
    helps: [
      "Ask the nurses who to call if you are worried about your wound.",
      "Contact your doctor or nurse straight away if you notice signs of infection.",
      "Call 999 or go to A&E if you think you might have sepsis.",
      "Keep doing your breathing and leg exercises to help prevent blood clots.",
      "Tell your doctor or nurse as soon as you feel any pain.",
      "Ask your healthcare team whether scar massage or laser therapy may suit you.",
    ],
    tryThisWeek: [
      "Know who to call about your wound.",
      "Act straight away on infection signs.",
      "Ask about scar treatments.",
    ],
    ask: "Who should I call if I am worried about my wound, and is there anything that could help my scar?",
    interactive: {
      kind: "signs",
      title: "Signs of a wound infection",
      intro: "Tick any you notice. If you have any, contact your doctor or nurse straight away on the number you were given.",
      signs: [
        "Heat around the wound",
        "Pain or swelling around the wound",
        "Redness, or a darker change in skin colour",
        "Fluid coming from the wound",
        "A temperature above 37 and a half degrees",
        "Feeling shivery and shaky",
        "Feeling generally unwell, even with a normal temperature",
      ],
      after: "Call 999 or go to A&E if you are breathing very fast, are confused, or have blue, pale or blotchy skin.",
      copyHeading: "Wound changes I have noticed",
    },
    sources: [MAC_LIMB, CRUK_AFTER, MAC_AFTER_SURG, CRUK_LIMB, CRUK_BC_AFTER, NHS_SEPSIS, NHS_DVT, CRUK_COPING, SUK_ESTEEM, SUK_REHAB_START],
    quiz: {
      question: "What should you do if the skin around your wound becomes hot, red and swollen?",
      options: [{ text: "Contact your doctor or nurse straight away", right: true }, { text: "Wait for your next check-up" }, { text: "Change the dressing and ignore it" }],
      why: "If you have any of these, contact your doctor or nurse straight away on the number you have been given.",
    },
  },
  {
    id: "sar-fatigue",
    kicker: "Energy",
    question: "Why am I so tired, and what helps?",
    hook: "Surgery, radiotherapy and chemotherapy can each leave you exhausted. Pacing, gentle activity and your rehabilitation team can help.",
    short: "You are likely to feel very tired for several weeks and sometimes months after sarcoma surgery, and tiredness is a common side effect of radiotherapy and chemotherapy. For most people it gets better after treatment finishes. Pacing yourself, gentle activity and advice from a physiotherapist or occupational therapist can make it easier.",
    sections: [
      {
        heading: "Where the tiredness comes from",
        paragraphs: [
          "Fatigue is feeling very tired or exhausted most, or all, of the time. Most people who have cancer will experience it at some point.",
          "After sarcoma surgery, you are likely to feel very tired for several weeks and sometimes months. You will need to take plenty of time to rest at first.",
          "Tiredness is a common side effect of radiotherapy and may continue for months after treatment finishes. With chemotherapy, it is often worse towards the end of treatment and for some weeks after it ends.",
        ],
      },
      {
        heading: "How long it lasts",
        paragraphs: [
          "Fatigue affects everyone differently, and it can vary throughout the day. For most people it gets better after treatment finishes, but for some it may continue for months or sometimes years.",
          "Your healthcare team will regularly check how you are feeling, as fatigue can continue after treatment as a late effect. It is important to tell a member of your team if you have fatigue at any time.",
        ],
      },
      {
        heading: "Pacing and planning",
        paragraphs: [
          "Plan your day so that you have energy for the things that are most important to you. Pace yourself, and take short naps and rests, but balance them with some activity.",
          "A fatigue diary can help you record your energy levels at different times of the day and plan important activities for when you have more energy. It is a good idea to share it with your healthcare team.",
          "If you feel sleepy, do not drive or use machinery.",
        ],
      },
      {
        heading: "Moving helps",
        paragraphs: [
          "When muscles are not used regularly, they become weaker. There is good evidence that physical activity, such as walking quickly, is one of the best ways to help reduce fatigue.",
          "After surgery, it helps to do a bit more every day, such as sitting for less time, walking around the house a bit more, and building up to walking outside. Talk to the physiotherapist or your doctor if you are unsure what you should be doing.",
          "Physiotherapists can give advice about managing fatigue, and an occupational therapist can also help with cancer-related fatigue.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "During chemotherapy, a low number of red blood cells, called anaemia, can make you feel very low in energy, breathless, dizzy and light-headed. If you have these symptoms, contact the hospital straight away on the 24-hour number.",
          "Trouble sleeping is common in people having cancer treatment, and sleep is an important part of your rehabilitation. If you are struggling to sleep, speak to your GP about support.",
        ],
      },
    ],
    helps: [
      "Plan your day so you have energy for what matters most to you.",
      "Keep a fatigue diary and share it with your healthcare team.",
      "Do a bit more every day, building up to walking outside.",
      "Ask a physiotherapist or occupational therapist for advice on managing fatigue.",
      "Do not drive or use machinery if you feel sleepy.",
      "During chemotherapy, contact the hospital straight away on the 24-hour number if you feel very low in energy, breathless or dizzy.",
    ],
    tryThisWeek: [
      "Plan around what matters most.",
      "Keep a fatigue diary.",
      "Do a bit more each day.",
    ],
    ask: "Could anaemia or my treatment be adding to my tiredness, and could I see an occupational therapist?",
    interactive: {
      kind: "risk-check",
      title: "What could be adding to it?",
      intro: "Tick any that apply. Your team can help with many of them.",
      items: [
        { id: "surgery", label: "Recent surgery", note: "You are likely to feel very tired for several weeks and sometimes months after surgery.", changeable: false },
        { id: "radiotherapy", label: "Radiotherapy", note: "Tiredness is a common side effect and may continue for months after treatment finishes.", changeable: false },
        { id: "chemotherapy", label: "Chemotherapy", note: "Tiredness is often worse towards the end of treatment and for some weeks after it ends.", changeable: false },
        { id: "anaemia", label: "Breathless, dizzy or light-headed", note: "These can be signs of anaemia. During chemotherapy, contact the hospital straight away on the 24-hour number.", changeable: true },
        { id: "sleep", label: "Trouble sleeping", note: "Sleep is an important part of rehabilitation. Speak to your GP about support for insomnia.", changeable: true },
        { id: "inactive", label: "Moving much less than before", note: "Unused muscles become weaker. Physical activity is one of the best ways to help reduce fatigue.", changeable: true },
        { id: "mood", label: "Worry, low mood or stress", note: "Anxiety, depression, stress and tension can make fatigue worse.", changeable: true },
      ],
    },
    sources: [MAC_FATIGUE, CRUK_AFTER, MAC_STS_RADIO, MAC_STS_CHEMO, SUK_REHAB_START, SUK_SELFCARE],
    quiz: {
      question: "What is one of the best ways to help reduce fatigue?",
      options: [{ text: "Physical activity, such as walking", right: true }, { text: "Staying in bed all day" }, { text: "Avoiding all activity" }],
      why: "There is good evidence that physical activity, such as walking quickly, is one of the best ways to help reduce fatigue.",
    },
  },
  {
    id: "sar-work",
    kicker: "Work and money",
    question: "How do I manage work, study and money after sarcoma?",
    hook: "The law treats sarcoma as a disability, so you are allowed reasonable adjustments. Benefits, grants and help with costs may also be available.",
    short: "If you have sarcoma, the law in the UK treats it as a disability, so your school, university or workplace can make reasonable adjustments, such as a phased return or more breaks. Access to Work grants can help with practical support. If money is tight, ask whether your hospital has a benefits adviser, or use a Macmillan money adviser.",
    sections: [
      {
        heading: "Your rights",
        paragraphs: [
          "If you have sarcoma, the law in the UK says this is a disability. Because of this, you are allowed reasonable adjustments, which are changes your school, university or workplace can make to help you work as well as you can.",
          "Under the Equality Act 2010, you meet the definition of disability from the day you are diagnosed with cancer. In Northern Ireland, the Disability Discrimination Act 1995 protects you. This protection does not end when your treatment finishes.",
        ],
      },
      {
        heading: "Going back to work",
        paragraphs: [
          "When you feel ready to return, your employer should support you. You can ask for an occupational health assessment, and your employer might change your working pattern, give you more breaks spread through the day, offer flexible working, or give you a phased return.",
          "You and your manager can agree a return-to-work plan that is as flexible as possible, and meet regularly in case you need to change anything. It can help to write notes in meetings, or take someone with you.",
          "Access to Work can give a grant towards practical support, such as specialist equipment or the cost of travelling to work if you cannot use public transport. It will not affect other benefits, and you will not have to pay it back.",
        ],
      },
      {
        heading: "Going back to school or university",
        paragraphs: [
          "Before you return, it is a good idea to meet your teachers to discuss how they might help. You could ask about fewer hours to start with, help carrying your bags, classes on the ground floor, leaving classes early to get to the next one, or adapted PE lessons.",
          "If you are worried about how you will physically cope, speak to a member of your rehabilitation team for advice.",
        ],
      },
      {
        heading: "Driving",
        paragraphs: [
          "Speak to your surgical team about returning to driving after surgery. With some surgeries you may need a driving assessment.",
          "After bone surgery, you will not be able to drive until your bones have fully healed and you have enough muscle control to move your limb. If you have had a limb removed, you need to tell your car insurance company and the DVLA, or the DVA in Northern Ireland.",
          "You might be eligible for a Blue Badge, which helps you park closer to places such as supermarkets and hospitals.",
        ],
      },
      {
        heading: "Money",
        paragraphs: [
          "Sarcoma can affect your finances. Some people need to work less or stop working, and there may be extra costs, such as travelling to hospital appointments.",
          "Ask your clinical nurse specialist or key worker if your hospital has a welfare rights and benefits adviser. You can also use services such as Macmillan money advisers.",
          "If you live in England and have cancer, you can get free prescriptions for anything related to your cancer treatment, with a medical exemption certificate. If you are an employee, Statutory Sick Pay can be paid by your employer for up to 28 weeks if you are too ill to work.",
        ],
      },
    ],
    helps: [
      "Ask for an occupational health assessment to support your return to work.",
      "Agree a flexible return-to-work plan with your manager, and meet regularly to review it.",
      "Check whether an Access to Work grant could help with practical support.",
      "Meet your teachers before you go back to school or university.",
      "Speak to your surgical team before you start driving again.",
      "Ask your CNS or key worker whether your hospital has a benefits adviser.",
    ],
    tryThisWeek: [
      "Ask for an occupational health assessment.",
      "Check Access to Work.",
      "Ask about a benefits adviser.",
    ],
    ask: "When can I go back to work and to driving, and could I see a benefits adviser?",
    interactive: {
      kind: "scenarios",
      title: "Back to everyday life",
      scenarios: [
        {
          id: "breaks",
          situation: "Your energy runs out by mid-afternoon at work.",
          options: [{ text: "Ask for more breaks spread through the day", best: true }, { text: "Say nothing and push on" }],
          why: "Your employer might change your working pattern, give you more breaks spread through the day, offer flexible working, or give you a phased return.",
        },
        {
          id: "stairs",
          situation: "Your classes are upstairs, and stairs are hard since surgery.",
          options: [{ text: "Ask about classes on the ground floor", best: true }, { text: "Struggle on without saying anything" }],
          why: "You could ask about fewer hours to start with, help carrying your bags, classes on the ground floor, leaving classes early to get to the next one, or adapted PE lessons.",
        },
        {
          id: "driving",
          situation: "You feel ready to drive again after surgery on your leg.",
          options: [{ text: "Check with your surgical team first", best: true }, { text: "Just start driving" }],
          why: "Speak to your surgical team about returning to driving after surgery. With some surgeries you may need a driving assessment.",
        },
        {
          id: "money",
          situation: "Hospital trips are adding up and money is tight.",
          options: [{ text: "Ask if your hospital has a benefits adviser", best: true }, { text: "Keep it to yourself" }],
          why: "Ask your clinical nurse specialist or key worker if your hospital has a welfare rights and benefits adviser.",
        },
      ],
    },
    sources: [SUK_WORK, GOV_DISABILITY, MAC_RIGHTS, MAC_RETURN, GOV_ATW, MAC_LIMB, MAC_AMP, SUK_FIN, SUK_HEALTH_FIN, SUK_ADDL],
    quiz: {
      question: "When do you meet the Equality Act's definition of disability if you have cancer?",
      options: [{ text: "From the day you are diagnosed", right: true }, { text: "After a year off work" }, { text: "Only while you are having treatment" }],
      why: "Under the Equality Act 2010, you meet the definition of disability from the day you are diagnosed with cancer.",
    },
  },
  {
    id: "sar-late-effects",
    kicker: "Late effects",
    question: "What late effects can sarcoma treatment cause?",
    hook: "Some side effects linger, and a few appear months or years later. Knowing them helps you spot changes early and get help.",
    short: "Late effects are side effects that do not go away, or that develop months or years after treatment. After sarcoma treatment they can include lymphoedema, stiff joints, bone changes, wear on an implant, and effects on the heart, nerves or fertility. Always tell your team about new symptoms or side effects that are not improving.",
    sections: [
      {
        heading: "What late effects are",
        paragraphs: [
          "Late effects are side effects that do not improve, or that develop years after treatment has finished. Your doctor or nurse will explain any likely late effects of your treatment.",
          "Your follow-up includes monitoring for late side effects. Always tell your team if you have any new symptoms, or if side effects are not improving, as there is usually something they can do.",
        ],
      },
      {
        heading: "Lymphoedema",
        paragraphs: [
          "Lymphoedema is swelling caused by a build-up of fluid in the tissues under the skin. Radiotherapy and surgery for sarcoma can damage the lymphatic system and cause it, sometimes several weeks, months or even years after treatment.",
          "It is normal to have swelling after surgery or radiotherapy as part of healing. It might be lymphoedema if the swelling gets darker or more red, feels more tender or warm, or has lasted longer than 3 months.",
          "Protecting your skin in the area helps reduce the risk of infection. If you have signs of infection, such as redness or swelling in the treated area, see your GP straight away, and call 999 or go to A&E if you also have a very high temperature, a fast heartbeat or confusion.",
        ],
      },
      {
        heading: "Joints, bones and implants",
        paragraphs: [
          "Radiotherapy to a joint, such as the knee or elbow, may make it stiff. It is important to keep the joint moving with regular exercise, and a physiotherapist will give you exercises to do before, during and after treatment.",
          "Radiotherapy to a limb can increase the risk of breaking a bone in the area, but this is rare. Always tell your cancer doctor or nurse about pain or aching in the bones.",
          "Years after limb-sparing surgery, a replaced joint or bone may wear, loosen or cause pain, and might need more surgery. If your false joint feels unstable or makes a noise it has not made before, get it checked by your surgeon.",
        ],
      },
      {
        heading: "Heart, nerves and fertility",
        paragraphs: [
          "Some chemotherapy can affect how the heart works, and you may have heart checks before, during and after treatment. If you had chemotherapy for bone cancer, you may have regular scans to check your heart for a few years.",
          "Some chemotherapy can cause numbness, tingling or pain in the hands or feet. This usually improves slowly after treatment ends, but for some people it continues as a long-term side effect.",
          "Some cancer treatments can affect whether you can get pregnant or make someone pregnant, and chemotherapy sometimes causes an early menopause. Talk to your doctor if you are worried about this.",
        ],
      },
      {
        heading: "Lowering the risk",
        paragraphs: [
          "Your cancer doctor or nurse can tell you if anything could help reduce the risk of certain late effects. This could include not smoking, keeping to a healthy weight and being more physically active.",
          "You can arrange to see your cancer doctor or specialist nurse in between appointments, and you can contact your GP at any time.",
        ],
      },
    ],
    helps: [
      "Ask your cancer team which late effects your treatment might cause, and what to look out for.",
      "Tell your team about new symptoms, or side effects that are not improving.",
      "Protect the skin in the treated area to reduce the risk of infection.",
      "See your GP straight away if the treated area becomes red or swollen.",
      "Keep stiff joints moving with the exercises your physiotherapist gives you.",
      "Tell your cancer doctor or nurse about any pain or aching in your bones.",
    ],
    tryThisWeek: [
      "Ask which late effects to watch for.",
      "Protect the skin in the treated area.",
      "Report any bone pain or aching.",
    ],
    ask: "Which late effects could my treatment cause, and what should I look out for?",
    interactive: {
      kind: "flip-cards",
      title: "Possible late effects",
      intro: "Turn a card to see what to look out for.",
      cards: [
        { id: "lymphoedema", front: "Lymphoedema", when: "After surgery or radiotherapy", back: "Swelling that gets darker or more red, more tender, warm, or lasts longer than 3 months. Speak to your CNS or GP." },
        { id: "joints", front: "Stiff joints", when: "After radiotherapy to a joint", back: "Keep the joint moving with regular exercise. Your cancer doctor can prescribe painkillers to help." },
        { id: "bones", front: "Bone changes", when: "After radiotherapy to a limb", back: "A rare raised risk of a break. Always tell your team about pain or aching in the bones." },
        { id: "implant", front: "Implant wear", when: "Years after limb-sparing surgery", back: "A joint may loosen or cause pain. Get a new noise or an unstable feeling checked by your surgeon." },
        { id: "heart", front: "Heart effects", when: "After some chemotherapy", back: "You may have heart checks. Always call 999 for chest pain or difficulty breathing." },
        { id: "nerves", front: "Numb or tingling hands or feet", when: "After some chemotherapy", back: "Usually improves slowly, but can be long term. Always tell your doctor, nurse or pharmacist." },
      ],
    },
    sources: [MAC_STS, SUK_COMES_BACK, MAC_LATE, SUK_LYMPH, NHS_CELLULITIS, MAC_STS_RADIO, MAC_LIMB, CRUK_BC_AFTER, MAC_STS_CHEMO, MAC_BC],
    quiz: {
      question: "When might swelling after treatment be lymphoedema?",
      options: [{ text: "If it has lasted longer than 3 months", right: true }, { text: "If it goes down within a few days" }, { text: "Only if it is painless" }],
      why: "It might be lymphoedema if the swelling gets darker or more red, feels more tender or warm, or has lasted longer than 3 months.",
    },
  },
  {
    id: "sar-body-image",
    kicker: "Confidence",
    question: "How do I cope with changes to how my body looks and works?",
    hook: "Scars, a changed limb or hair loss can shake your confidence. Time, support and a few practical steps can help.",
    short: "Sarcoma treatment can change your appearance, and this can affect how you think and feel about your body. These feelings are common, and they usually improve as you adapt. Talking to people you trust, your nurse, or a psychologist or counsellor can help, and treatments for scars may be available.",
    sections: [
      {
        heading: "Why it matters",
        paragraphs: [
          "Body image is how we think and feel about how our body looks and works. If treatment has changed your appearance, you may have scars from surgery, or surgery to a limb may have changed how you move.",
          "It is not unusual for people who have had limb sparing surgery to feel confused and upset for some time after their operation. You may worry about how your friends and family see you, or feel that you are no longer as physically attractive.",
          "Limb-sparing surgery may change how your limb looks or works. This usually improves as you adapt to the change, but if you still have concerns, talk to your nurse or doctor.",
        ],
      },
      {
        heading: "Scars",
        paragraphs: [
          "Some people find that living with scars from surgery affects their mental health. The scar may be noticeable, and you may no longer feel confident wearing certain clothes, or worry about people staring.",
          "Speak to your healthcare team about treatment for your scar. They can explain whether treatments such as scar massage or laser therapy may be suitable.",
        ],
      },
      {
        heading: "After losing a limb",
        paragraphs: [
          "Losing an arm or a leg can feel like a bereavement. You will need time to grieve for your loss and start coping with the emotional and practical problems it can bring.",
          "At first you may find it hard to see people, but you and the people close to you will get used to the way you look. You may want to take someone with you when you first go out, to give you emotional support.",
          "Charities such as the Limbless Association help people to live well with limb loss by providing practical and emotional support.",
        ],
      },
      {
        heading: "Hair loss",
        paragraphs: [
          "Chemotherapy can cause hair loss, and for a lot of people hair is an important part of their identity. Hair loss is almost always temporary, and your hair will usually grow back after treatment ends.",
          "Ask whether scalp cooling is suitable for you. Some people qualify for help with the cost of wigs on the NHS.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "Talking to people you trust about how you are feeling can be a positive step. The people closest to you will not see you any differently as a person, and they can support you when they know how you feel.",
          "Changes to your body can affect your sex life, and talking to your partner can really help. You can also talk to your GP or clinical nurse specialist, who will treat what you tell them sensitively and confidentially.",
          "Your doctor or nurse can arrange for you to see a psychologist or counsellor if you feel you need more support.",
        ],
      },
    ],
    helps: [
      "Talk to people you trust about how you are feeling.",
      "Ask your healthcare team whether scar massage or laser therapy may suit you.",
      "Take someone with you the first time you go out after an amputation.",
      "Ask whether scalp cooling is suitable for you.",
      "Talk to your GP or clinical nurse specialist about sex and relationships.",
      "Ask your doctor or nurse about seeing a psychologist or counsellor.",
    ],
    tryThisWeek: [
      "Tell someone you trust how you feel.",
      "Ask about scar treatments.",
      "Ask about seeing a counsellor.",
    ],
    ask: "Is there a treatment that could help my scar, and could I see a psychologist or counsellor about the changes to my body?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        {
          id: "strong",
          situation: "A close friend keeps saying 'You're so strong!', but you don't feel it.",
          options: [{ text: "Tell them how you really feel", best: true }, { text: "Keep up a brave face" }],
          why: "For people you are closer to, your goal might be to help them understand how you really feel.",
        },
        {
          id: "clothes",
          situation: "You avoid clothes that show your scar.",
          options: [{ text: "Ask your team about treatment for the scar", best: true }, { text: "Hide it and say nothing" }],
          why: "Speak to your healthcare team about treatment for your scar. They can explain whether treatments such as scar massage or laser therapy may be suitable.",
        },
        {
          id: "first-outing",
          situation: "It is your first trip out since your amputation.",
          options: [{ text: "Take someone with you for support", best: true }, { text: "Stay in until you feel ready to go alone" }],
          why: "You may want to take someone with you when you first go out, to give you emotional support.",
        },
        {
          id: "partner",
          situation: "You worry your partner sees you differently now.",
          options: [{ text: "Talk openly with each other", best: true }, { text: "Avoid being close" }],
          why: "Talking openly with each other can have a positive effect on your relationship.",
        },
      ],
    },
    sources: [MAC_BODY, MAC_STS, CRUK_COPING, MAC_LIMB, SUK_ESTEEM, MAC_AMP, MAC_STS_CHEMO, MAC_BC_SURG, SUK_MEEK],
    quiz: {
      question: "What usually happens to concerns about a changed limb over time?",
      options: [{ text: "They usually improve as you adapt", right: true }, { text: "They always get worse" }, { text: "They never change" }],
      why: "This usually improves as you adapt to the change, but if you still have concerns, talk to your nurse or doctor.",
    },
  },
  {
    id: "sar-mood",
    kicker: "Mood",
    question: "How do I look after my mood after sarcoma?",
    hook: "Sarcoma can feel lonely, and worry about scans is common. Support is there, including right now if you need it.",
    short: "Low mood, worry about the cancer coming back and feeling alone are common after sarcoma. Talking, staying active, support groups and the Sarcoma UK Support Line can help, and your GP or nurse can refer you to talking therapies. If you ever feel you cannot keep yourself safe, call 999 or go to A&E, or call Samaritans free on 116 123.",
    sections: [
      {
        heading: "A lonely cancer",
        paragraphs: [
          "For some people, sarcoma can feel like a lonely cancer. Many people have never heard of it, and because it is rare there are fewer people to connect with and talk to about it.",
          "You are not alone. The Sarcoma UK Support Line, sarcoma support groups online and in person, and Macmillan's sarcoma forums can all help you feel less isolated.",
        ],
      },
      {
        heading: "Worry about it coming back",
        paragraphs: [
          "It is common to worry about sarcoma coming back, and waiting for scan results can be a stressful time. Feelings of uncertainty can be hard, but they often get better with time.",
          "Worry tends to grow when life is quieter and we are alone. Making plans with friends or family, moving more and sharing the pressure with other people can make it easier.",
          "Talk to your healthcare team about your worries. They can help by setting expectations about waiting times, and may be able to help you get talking therapies such as cognitive behavioural therapy.",
        ],
      },
      {
        heading: "Low mood and depression",
        paragraphs: [
          "Low mood and feeling sad are common after a cancer diagnosis. When this begins to take the joy out of things you used to love, it might be time to reach out for support.",
          "Signs to be aware of include feeling low, crying more often, feeling hopeless, losing interest in activities and feeling irritable. If feelings like these go on for more than 2 weeks, talk to your doctor or nurse.",
          "Help is available. Talk to your GP, nurse specialist or key worker about a referral to talking therapies, and ask about medicines such as antidepressants, which can help. You can also refer yourself to NHS talking therapies if you are registered with a GP.",
        ],
      },
      {
        heading: "Small things that help",
        paragraphs: [
          "Keeping a diary of how you feel each day, light exercise such as walking, and setting small, achievable daily goals can all help you focus on the present.",
          "Being physically active during and after treatment can help improve your mood and confidence.",
          "You can call the Sarcoma UK Support Line free on 0808 801 0401, Monday to Friday, 10am to 3pm, or the Macmillan Support Line free on 0808 808 00 00.",
        ],
      },
      {
        heading: "If you are struggling right now",
        paragraphs: [
          "If you have any thoughts about self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. You can call Samaritans free on 116 123, any time, day or night.",
          "For urgent help with your mental health, call 111 and select the mental health option, or ask for an urgent GP appointment. If you would rather not talk, you can text SHOUT to 85258, 24 hours a day.",
          "Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Call the Sarcoma UK Support Line free on 0808 801 0401, Monday to Friday, 10am to 3pm.",
      "Join a sarcoma support group, online or in person.",
      "Talk to your healthcare team about your worries while you wait for results.",
      "Talk to your doctor or nurse if low feelings go on for more than 2 weeks.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "If you do not feel you can keep yourself safe, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Call the Sarcoma UK Support Line.",
      "Look up a sarcoma support group.",
      "Tell your team about your worries.",
    ],
    ask: "Could my low mood be depression, and could you refer me for a talking therapy?",
    interactive: {
      kind: "signs",
      title: "Signs to talk to your team about",
      intro: "Tick any you have had most of the time. If they go on for more than 2 weeks, talk to your doctor or nurse.",
      signs: [
        "Feeling low",
        "Crying more often",
        "Feeling hopeless",
        "Losing interest in activities",
        "Feeling irritable",
        "Changes in my sleep, eating or concentration",
        "Problems starting or finishing tasks",
      ],
      after: "If you have thoughts of self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. Samaritans is free on 116 123, any time, day or night.",
      copyHeading: "How I have been feeling",
    },
    sources: [SUK_ANXIETY, MAC_FEAR, SUK_MEEK, MAC_DEPRESSION, NHS_TALKING, MAC_ACTIVE, SUK_ORGS, SAMARITANS, NHS_URGENT, NHS_SUICIDAL],
    quiz: {
      question: "When should you talk to your doctor or nurse about low feelings?",
      options: [{ text: "If they go on for more than 2 weeks", right: true }, { text: "Only if they last a year" }, { text: "Never, as they always pass" }],
      why: "If feelings like these go on for more than 2 weeks, talk to your doctor or nurse.",
    },
  },
];
