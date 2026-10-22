import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Melanoma skin cancer page's pieces (content/library-conditions/cancer-more.ts,
// `melanoma`). Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, Macmillan
// Cancer Support and Cancer Research UK, with the Lymphoedema Support Network for swelling and Samaritans for the
// mood answer. The answers describe treatment, recovery and living with after-effects: there are no survival or
// life-expectancy figures, and nothing is a prediction for one person. Emergency guidance (the hospital's 24-hour
// number, 999, A&E and NHS 111) is given as the sources state it, and the mood answer follows safe-messaging
// guidance. General information only; it never replaces what a person's own skin cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/${path}` });

const NHS_WHAT = nhs("What is melanoma skin cancer?", "conditions/melanoma-skin-cancer/what-is-melanoma-skin-cancer/");
const NHS_SYMPTOMS = nhs("Symptoms of melanoma skin cancer", "conditions/melanoma-skin-cancer/symptoms/");
const NHS_CAUSES = nhs("Causes of melanoma skin cancer", "conditions/melanoma-skin-cancer/causes/");
const NHS_TESTS = nhs("Tests and next steps for melanoma skin cancer", "conditions/melanoma-skin-cancer/tests-and-next-steps/");
const NHS_TREAT = nhs("Treatment for melanoma skin cancer", "conditions/melanoma-skin-cancer/treatment/");
const NHS_HELP = nhs("Help and support for melanoma skin cancer", "conditions/melanoma-skin-cancer/help-and-support/");
const NHS_LYMPH = nhs("Lymphoedema", "conditions/lymphoedema/");
const NHS_LYMPH_PREV = nhs("Preventing lymphoedema", "conditions/lymphoedema/prevention/");
const NHS_CELLULITIS = nhs("Cellulitis", "conditions/cellulitis/");
const NHS_SUN = nhs("Sunscreen and sun safety", "live-well/seasonal-health/sunscreen-and-sun-safety/");
const NHS_VITD = nhs("Vitamin D", "conditions/vitamins-and-minerals/vitamin-d/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const MAC_MELANOMA = mac("Melanoma", "melanoma");
const MAC_STAGING = mac("Staging of melanoma", "melanoma/staging-of-melanoma");
const MAC_RECURRENT = mac("Recurrent melanoma", "melanoma/recurrent-melanoma");
const MAC_SIGNS = mac("Signs and symptoms of melanoma", "melanoma/signs-and-symptoms-of-melanoma");
const MAC_SUN = mac("Skincare in the sun after melanoma", "melanoma/sun-skincare-after-melanoma");
const MAC_SURGERY = mac("Surgery for melanoma", "treatments-and-drugs/surgery-for-melanoma");
const MAC_NODES = mac("Surgery to remove the lymph nodes for melanoma", "treatments-and-drugs/surgery-to-the-lymph-nodes-for-melanoma");
const MAC_IMMUNO = mac("Immunotherapy for melanoma", "treatments-and-drugs/immunotherapy-for-melanoma");
const MAC_TARGETED = mac("Targeted therapy for melanoma", "treatments-and-drugs/targeted-therapy-for-melanoma");
const MAC_PEMBRO = mac("Pembrolizumab (Keytruda)", "treatments-and-drugs/pembrolizumab");
const MAC_DAB = mac("Dabrafenib and trametinib", "treatments-and-drugs/dabrafenib-and-trametinib");
const MAC_LYMPH = mac("Lymphoedema", "impacts-of-cancer/lymphoedema");
const MAC_LYMPH_RISK = mac("Reducing your risk of lymphoedema", "impacts-of-cancer/lymphoedema/reducing-your-risk-of-lymphoedema");
const MAC_WORRIES = mac("Coping with worries about cancer coming back", "after-treatment/coping-with-worries-about-cancer-coming-back");
const MAC_EMOTIONS = mac("Cancer and your emotions", "treatment/coping-with-treatment/cancer-and-your-emotions");

const CRUK_MAIN = cruk("Melanoma skin cancer", "melanoma");
const CRUK_TYPES = cruk("Types of melanoma", "melanoma/stages-types/types");
const CRUK_BRESLOW = cruk("Breslow thickness of melanoma skin cancer", "melanoma/stages-types/breslow-thickness");
const CRUK_STAGE2 = cruk("Stage 2 melanoma skin cancer", "melanoma/stages-types/stage-2");
const CRUK_STAGE3 = cruk("Stage 3 melanoma skin cancer", "melanoma/stages-types/stage-3");
const CRUK_FOLLOW = cruk("Follow up after treatment for melanoma skin cancer", "melanoma/treatment/follow-up");
const CRUK_SURGERY = cruk("Surgery to remove melanoma skin cancer", "melanoma/treatment/surgery/surgery-remove-melanoma");
const CRUK_NODES = cruk("Surgery to remove lymph nodes for melanoma skin cancer", "melanoma/treatment/surgery/surgery-remove-lymph-nodes");
const CRUK_DRUGS = cruk("Targeted cancer drugs and immunotherapy for melanoma skin cancer", "melanoma/treatment/targeted-cancer-drugs-and-immunotherapy");
const CRUK_ADV_DRUGS = cruk("Targeted and immunotherapy drugs for advanced melanoma skin cancer", "melanoma/treatment/advanced-treatment/targeted-and-immunotherapy-drug-treatment");
const CRUK_PEMBRO = cruk("Pembrolizumab (Keytruda)", "treatment/drugs/pembrolizumab");
const CRUK_SKIN = cruk("Skin care after melanoma skin cancer", "melanoma/living-with/caring-for-your-skin");
const CRUK_COPING = cruk("Coping and support when you have melanoma skin cancer", "melanoma/living-with/coping");
const CRUK_VITD = cruk("Sun and vitamin D", "causes-of-cancer/sun-uv-and-cancer/sun-and-vitamin-d");
const CRUK_DEPRESSION = cruk("Depression", "coping/mental-health-cancer/how-cancer-make-you-feel/depression");

const LSN_RISK: LearnSource = { label: "Lymphoedema Support Network: Think you may be at risk?", url: "https://www.lymphoedema.org/information/think-you-may-be-at-risk/" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const melanomaAnswers: LearnArticle[] = [
  {
    id: "mel-what-it-is",
    kicker: "Melanoma",
    question: "What is melanoma, and why does finding it early matter?",
    hook: "Melanoma starts in the pigment cells that give skin its colour. Found early, it is often treated with surgery alone.",
    short: "Melanoma is a type of skin cancer that can spread to other areas of the body. It develops from skin cells called melanocytes, which make the pigment melanin, and the main cause is ultraviolet light from the sun and sunbeds. Finding a melanoma as early as possible can mean it is easier to treat, and surgery is the main treatment.",
    sections: [
      {
        heading: "Pigment cells",
        paragraphs: [
          "Melanoma, also called malignant melanoma, is a cancer that usually starts in the skin. It can start in a mole or in normal-looking skin.",
          "It develops from skin cells called melanocytes, which sit in the deep layer of the epidermis, the top layer of skin. They make a pigment called melanin, which helps protect the body from the sun and gives skin its colour.",
        ],
      },
      {
        heading: "What causes it",
        paragraphs: [
          "Ultraviolet light is the most common cause of melanoma. It comes from the sun and is used in sunbeds, and it can build up and damage the DNA in melanocytes so that they grow and divide more quickly than usual.",
          "Melanoma is more common in older people, but younger people can also get it. The chance is higher with pale skin that burns easily, red or blonde hair, a large number of freckles or moles, a lot of past sunburn or sunbed use, or a history of skin cancer in your family.",
          "People with black or brown skin have a lower chance of getting melanoma, but can still get it. They most often get it on the soles of the feet, the palms of the hands or under a nail.",
        ],
      },
      {
        heading: "The main types",
        paragraphs: [
          "Superficial spreading melanoma is the most common type: 70 to 80 out of every 100 people with melanoma have it. It tends to grow across the skin before growing deeper into it.",
          "Nodular melanoma is the second most common type and can grow more quickly. Lentigo maligna melanoma is usually found in older people on skin that has had a lot of sun, such as the face and neck, and acral lentiginous melanoma, on the palms, soles or under the nails, is not thought to be caused by sun exposure.",
        ],
      },
      {
        heading: "Why early matters",
        paragraphs: [
          "A new mole or a change in an existing mole may be a sign of melanoma. Finding a melanoma as early as possible can mean it is easier to treat.",
          "Surgery is the main treatment. For early melanoma, where the cancer cells are only in the skin and have not spread from where the mole started, it is often the only treatment needed.",
        ],
      },
    ],
    helps: [
      "Check your skin for any unusual changes, using a mirror or asking a partner or friend to check areas you cannot see.",
      "See a GP if a mole changes size, shape or colour, or if it is painful, itchy, inflamed, bleeding or crusty.",
      "Stay out of the sun during the hottest part of the day, from 11am to 3pm in the UK.",
      "Use sunscreen with an SPF of at least 30 and at least 4-star UVA protection, and reapply it regularly.",
      "Tell the GP if you or a member of your family has had skin cancer in the past.",
    ],
    tryThisWeek: [
      "Check your skin with a mirror.",
      "See a GP about any changing mole.",
      "Use SPF 30 or higher in the sun.",
    ],
    ask: "Which type of melanoma did I have, and where did it start?",
    interactive: {
      kind: "flip-cards",
      title: "The main types, card by card",
      intro: "Turn each card to see how each type of melanoma tends to look and grow.",
      cards: [
        { id: "superficial", front: "Superficial spreading", when: "The most common type", back: "Grows across the skin before growing deeper. Most often found on the arms, legs, chest and back." },
        { id: "nodular", front: "Nodular", when: "The second most common type", back: "Can grow more quickly, and may become red rather than black. More common on the chest, back, head or neck." },
        { id: "lentigo", front: "Lentigo maligna melanoma", when: "Usually in older people", back: "Found on skin with a lot of sun exposure, such as the face and neck. Usually slow-growing." },
        { id: "acral", front: "Acral lentiginous", when: "Palms, soles or under the nails", back: "Rare, and more common in people with black or brown skin. Not thought to be caused by sun exposure." },
      ],
    },
    sources: [MAC_MELANOMA, CRUK_MAIN, NHS_WHAT, CRUK_TYPES, NHS_CAUSES, NHS_SYMPTOMS],
    quiz: {
      question: "What is the most common cause of melanoma?",
      options: [{ text: "Ultraviolet light from the sun and sunbeds", right: true }, { text: "Scratching a mole" }, { text: "Eating too much sugar" }],
      why: "Ultraviolet light is the most common cause of melanoma.",
    },
  },
  {
    id: "mel-stage",
    kicker: "Your results",
    question: "What do my stage and Breslow thickness mean?",
    hook: "Your stage describes how deep the melanoma grew and whether it spread. Your team used it to plan your treatment and follow-up.",
    short: "The stage of a melanoma describes how thick, or deep, it is and whether it has spread from where it started. Doctors use number stages from 0 to 4, the Breslow thickness measured in millimetres, and the TNM system. Knowing the stage helps your doctors plan the best treatment for you, and your specialists can tell you more about your own.",
    sections: [
      {
        heading: "How the stage is worked out",
        paragraphs: [
          "To diagnose melanoma, the doctor removes the abnormal area with a small area of surrounding skin, called an excision biopsy. A pathologist looks at it under a microscope and, if there are melanoma cells, works out the stage.",
          "You may also have more tests, such as a CT or MRI scan, blood tests, and tests to see whether the melanoma has spread to your lymph nodes. Results of the excision biopsy should take about 2 weeks, though sometimes it might be longer.",
        ],
      },
      {
        heading: "Breslow thickness",
        paragraphs: [
          "The Breslow thickness measures, in millimetres, how far the melanoma cells have grown down into the layers of skin, from the surface to the deepest point. A pathologist measures it with a special small ruler and a microscope.",
          "It gives the T, or tumour, part of the stage. Tis means the cells are only in the very top layer of skin, T1 means 1mm thick or less, T2 between 1mm and 2mm, T3 between 2mm and 4mm, and T4 more than 4mm.",
        ],
      },
      {
        heading: "Stages 0 to 2",
        paragraphs: [
          "Stage 0, or melanoma in situ, is the earliest stage: the melanoma is only in the top layer of skin, and people with it do not usually have any risk of it spreading to other parts of the body.",
          "Stage 1 and stage 2 melanomas have not spread to other parts of the body. Stage 1 is 1mm or less thick, or 1 to 2mm with the skin over it unbroken, and stage 2 is thicker than 2mm, or 1 to 2mm with the outer layer of skin broken, which is called ulcerated.",
        ],
      },
      {
        heading: "Stages 3 and 4",
        paragraphs: [
          "Stage 3 means the melanoma has spread in the same area of the body, to nearby lymph nodes or to nearby areas of skin. Stage 4 means it has spread to other areas, such as other areas of the skin, the lungs, liver, bones or brain, and is also called advanced or metastatic melanoma.",
          "If you have stage 3 melanoma, a sample is sent for genetic testing, which looks for changes in genes such as BRAF. The results tell your cancer doctor which targeted or immunotherapy drugs are likely to work for you if you need them.",
        ],
      },
      {
        heading: "Taking it in",
        paragraphs: [
          "Cancer stages can be difficult to understand, and you might feel frightened or overwhelmed. It might help to have a relative or friend with you when you see your doctor, to support you, ask questions and take notes.",
          "Your specialists can give you more information about the stage of your melanoma. You might also want to talk with your specialist nurse about it once you have had a chance to take in what your doctor has said.",
        ],
      },
    ],
    helps: [
      "Take a relative or friend to your appointments to support you, ask questions and take notes.",
      "Ask your specialists to give you more information about your stage.",
      "Talk with your specialist nurse about your stage once you have taken in what your doctor said.",
      "If waiting to know your stage is worrying, call the Macmillan Support Line free on 0808 808 00 00.",
      "Call the hospital or GP if you are worried about your results taking longer than you expected.",
    ],
    tryThisWeek: [
      "Bring someone to appointments.",
      "Ask more about your stage.",
      "Call Macmillan if waiting is hard.",
    ],
    ask: "What was my Breslow thickness and stage, and how did they shape my treatment and follow-up?",
    interactive: {
      kind: "flip-cards",
      title: "The stages, card by card",
      intro: "Turn each card to see what each number stage means.",
      cards: [
        { id: "stage-0", front: "Stage 0", when: "Melanoma in situ", back: "Only in the top layer of skin. People with it do not usually have any risk of it spreading." },
        { id: "stage-1", front: "Stage 1", when: "Early stage, only in the skin", back: "1mm or less thick, or 1 to 2mm with the skin over it unbroken." },
        { id: "stage-2", front: "Stage 2", when: "Not spread to other parts", back: "Thicker than 2mm, or 1 to 2mm and ulcerated. Some people have immunotherapy after surgery." },
        { id: "stage-3", front: "Stage 3", when: "Spread in the same area", back: "To nearby lymph nodes or nearby areas of skin, but not to other parts of the body." },
        { id: "stage-4", front: "Stage 4", when: "Advanced or metastatic", back: "Spread to other areas, such as distant skin, the lungs, liver, bones or brain." },
      ],
    },
    sources: [MAC_STAGING, CRUK_BRESLOW, NHS_TESTS, MAC_MELANOMA, CRUK_STAGE2, CRUK_STAGE3],
    quiz: {
      question: "What does the Breslow thickness measure?",
      options: [{ text: "How far the melanoma grew down into the skin, in millimetres", right: true }, { text: "How wide the mole was across" }, { text: "How many moles you have" }],
      why: "The Breslow thickness measures, in millimetres, how far the melanoma cells have grown down into the layers of skin, from the surface to the deepest point.",
    },
  },
  {
    id: "mel-follow-up",
    kicker: "Follow-up",
    question: "What happens at follow-up, and how long does it go on?",
    hook: "Follow-up checks your skin, your scar and your lymph nodes. How often you go depends on your stage, and visits usually get fewer over time.",
    short: "After treatment you have regular follow-up appointments, and how often and for how long depends mainly on the stage of the melanoma. At each one your doctor examines your skin, your scar and the lymph nodes closest to where the melanoma was, and talks about sun safety and vitamin D. If there are no signs the cancer has come back, you will normally have fewer appointments each year, and you do not need to wait for one to report a new symptom.",
    sections: [
      {
        heading: "Why you go",
        paragraphs: [
          "Follow-up appointments let your doctor check the melanoma has not come back or spread, treat any symptoms or side effects, explain how to reduce your risk of getting another melanoma, and answer your questions.",
          "After a melanoma, you have a higher risk of getting another one. So your doctor or nurse examines your skin carefully, and may take photographs of your skin and measure some of your moles to check for changes.",
        ],
      },
      {
        heading: "What happens at an appointment",
        paragraphs: [
          "They check your scar and the area around it, and the lymph nodes closest to where the melanoma was. If you had surgery to remove these, they may also check lymph nodes elsewhere in your body.",
          "Your doctor or nurse will show you how to check your skin for new melanomas, and talk about staying safe in the sun, getting enough vitamin D and getting help to stop smoking if you smoke. If you need CT, MRI or ultrasound scans, you normally have separate appointments for them.",
        ],
      },
      {
        heading: "How often, by stage",
        paragraphs: [
          "In England, Wales and Northern Ireland, guidelines from NICE set the timing. After melanoma in situ you usually see your doctor once, and for stage 1A you generally have appointments every 6 months for 1 year.",
          "For stages 1B and 2A, it is usually every 6 months for the first 1 to 2 years, then once a year. For stages 2B and 2C, it is every 3 months for the first 2 years, 6 monthly in the third year, then once a year, and you may also have some scans.",
          "If stage 3 or 4 melanoma was removed, you usually have appointments every 3 months for the first 3 years and 6 monthly for the next 2 years, with CT or MRI scans. For stages 1B to 4 that were removed, if there are no signs the melanoma has come back at the end of 5 years, your doctor does not normally need to see you again.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "Contact your specialist nurse or doctor if you have any new symptoms or concerns. You do not need to wait until your next appointment.",
          "Guidelines in Scotland are different, and your doctor might want to see you more often than the guidelines suggest, for example if you have a higher risk of the melanoma coming back. Your doctor can tell you how often your appointments are going to be.",
        ],
      },
      {
        heading: "How you might feel",
        paragraphs: [
          "Many people get anxious about their follow-up appointments and scans. Talking about how you are feeling might help, whether with family and friends or through counselling, which your doctor or nurse can help set up.",
          "If you had a melanoma in situ, you will not need any further appointments. If you have questions or are worried about new symptoms later, your GP can help and can arrange for you to see a specialist again.",
        ],
      },
    ],
    helps: [
      "Contact your specialist nurse or doctor about any new symptoms or concerns; you do not need to wait for your next appointment.",
      "Ask your doctor how often your appointments are going to be, and which tests or scans they recommend.",
      "Write down your questions before each appointment, and take someone with you if it helps.",
      "Ask your doctor or nurse to show you how to check your skin for new melanomas.",
      "If you feel anxious about appointments and scans, talk to your doctor or nurse about counselling.",
    ],
    tryThisWeek: [
      "Report new symptoms now.",
      "Ask how often you will be seen.",
      "Write questions before visits.",
    ],
    ask: "How often will my follow-up be, for how long, and will I need any scans?",
    interactive: {
      kind: "timeline",
      title: "Follow-up over the years",
      steps: [
        { id: "plan", when: "After treatment", title: "Your follow-up plan", points: ["Your doctor or nurse explains the appointments you need.", "This depends on the stage of the melanoma."] },
        { id: "visit", when: "At each appointment", title: "A careful check", points: ["Your skin, your scar and nearby lymph nodes are examined.", "You talk about sun safety and vitamin D."] },
        { id: "between", when: "Between appointments", title: "Report changes", points: ["Contact your specialist nurse or doctor about new symptoms.", "You do not need to wait for your next appointment."] },
        { id: "fewer", when: "Over the years", title: "Fewer appointments", points: ["With no signs of it coming back, you have fewer each year.", "Some stages have scans as well."] },
        { id: "five", when: "After 5 years", title: "Usually no more visits", points: ["For stages 1B to 4 that were removed, with no signs of it coming back.", "This is the guidance in England, Wales and Northern Ireland."] },
      ],
    },
    sources: [CRUK_FOLLOW, MAC_MELANOMA, MAC_SURGERY, NHS_TREAT, CRUK_SURGERY],
    quiz: {
      question: "Do you need to wait for your next follow-up appointment to report a new symptom?",
      options: [{ text: "No, contact your specialist nurse or doctor", right: true }, { text: "Yes, always wait" }, { text: "Only if it lasts a year" }],
      why: "Contact your specialist nurse or doctor if you have any new symptoms or concerns. You do not need to wait until your next appointment.",
    },
  },
  {
    id: "mel-recurrence",
    kicker: "Recurrence",
    question: "Will it come back, and what should I look out for?",
    hook: "For many people who have surgery, melanoma never comes back. Knowing what to check, and who to call, can make the worry easier to carry.",
    short: "For many people who have surgery to remove a melanoma, the cancer never comes back, but worrying about it is common after treatment. If it does come back, it may be at the scar, in nearby skin, in the nearest lymph nodes or in another part of the body. Your team will explain your own risk and how to check, and if there are any signs, your doctor will arrange tests.",
    sections: [
      {
        heading: "A common worry",
        paragraphs: [
          "Worrying about cancer coming back is common after treatment. Many people struggle to cope with feelings of uncertainty, but these often get better with time.",
          "For many people who have surgery to remove a melanoma, the cancer never comes back. The aim of surgery is to prevent melanoma coming back by removing all the cancer cells.",
        ],
      },
      {
        heading: "Why it can come back",
        paragraphs: [
          "Sometimes a small number of cancer cells are left behind. They are too small to be seen with the naked eye or on scans, and it may be months or years before they develop into a tumour that can be seen or that causes symptoms.",
          "There is sometimes a higher risk that a melanoma will come back, for example if it was thick or in an area that was difficult to treat with surgery. Your specialist doctor or nurse will explain your own risk.",
        ],
      },
      {
        heading: "Where it may come back",
        paragraphs: [
          "Melanoma may come back in the same area, at your surgery scar, or in areas of skin near to where it started, called satellite or in-transit metastases. It may also come back in the lymph nodes closest to where it started, or in a different part of the body, which is called advanced melanoma.",
          "Having had melanoma also means a higher than average risk of getting another one in the future. That is why it is important to keep a close eye on your skin.",
        ],
      },
      {
        heading: "What to check",
        paragraphs: [
          "Your doctor or nurse will explain how to check your scar, the surrounding area and other areas of your body for signs of melanoma. They may also ask you to check your lymph nodes, and a good time to do this is in the shower or bath.",
          "Contact your specialist doctor or nurse if you have symptoms, between follow-up appointments if you need to. If there are any signs the melanoma might be coming back, your doctor will arrange tests to find out more.",
        ],
      },
      {
        heading: "Living with the uncertainty",
        paragraphs: [
          "Focusing on what you can control may help: getting involved in your recovery, talking about your feelings, finding ways of managing anxiety and knowing what your triggers are. Constantly checking for changes can make you feel anxious, so if you find yourself doing this, talk to someone from your cancer team.",
          "If melanoma has only come back at the scar or nearby, you usually have surgery to remove more tissue. Your team plans any treatment around where it has come back, the treatments you have already had, your general health and your preferences.",
        ],
      },
    ],
    helps: [
      "Ask your specialist doctor or nurse to explain your own risk and how to check for signs.",
      "Check your scar, the area around it and the rest of your skin, as your doctor or nurse has shown you.",
      "Contact your specialist doctor or nurse about symptoms; you can do this between follow-up appointments.",
      "If you are finding it difficult to cope, talk to your specialist doctor or nurse or your GP.",
      "Call the Macmillan Support Line free on 0808 808 00 00 if you would like to talk.",
    ],
    tryThisWeek: [
      "Ask how to check for signs.",
      "Check your scar and skin.",
      "Talk to someone about the worry.",
    ],
    ask: "What is my own risk of the melanoma coming back, and which signs should I look out for?",
    interactive: {
      kind: "signs",
      title: "Changes to tell your team",
      intro: "Tick any you have noticed. Your doctor or nurse will explain how to check, and you can contact them between appointments.",
      signs: ["A change at or around my scar", "A new mole", "A mole changing size, shape or colour", "A change anywhere else on my skin", "A lymph node that feels swollen", "Another new symptom that worries me"],
      after: "Tell your specialist doctor or nurse. If there are any signs the melanoma might be coming back, your doctor will arrange tests to find out more.",
      copyHeading: "Changes I have noticed",
    },
    sources: [MAC_RECURRENT, MAC_WORRIES, MAC_MELANOMA, CRUK_SKIN],
    quiz: {
      question: "What does Macmillan say about melanoma after surgery to remove it?",
      options: [{ text: "For many people, the cancer never comes back", right: true }, { text: "It always comes back" }, { text: "Checking your skin is no longer needed" }],
      why: "For many people who have surgery to remove a melanoma, the cancer never comes back.",
    },
  },
  {
    id: "mel-surgery",
    kicker: "Surgery",
    question: "How do wounds, scars and lymph node operations heal?",
    hook: "Most people have a second, small operation after the mole is removed. Scars fade with time, and lymph node surgery is a bigger operation with its own recovery.",
    short: "Most people diagnosed with melanoma have a wide local excision, which removes healthy skin and tissue around where the melanoma was to reduce the risk of it coming back. It is usually a small operation under local anaesthetic, and a few people need a skin graft or flap. If melanoma has spread to the lymph nodes, some people have an operation to remove them, which is a bigger operation and can raise the risk of lymphoedema.",
    sections: [
      {
        heading: "Wide local excision",
        paragraphs: [
          "You normally have a second operation to remove more tissue if you are diagnosed with melanoma. Your doctor removes a larger area of healthy skin and tissue around where the melanoma was, which helps to reduce the risk of it coming back.",
          "Generally, this is a small operation, usually done under local anaesthetic, so you are awake but the area is numbed. If all the melanoma cells are removed, you will not need any more treatment.",
        ],
      },
      {
        heading: "Grafts and flaps",
        paragraphs: [
          "Most people who have a wide local excision do not need a skin graft or flap. If a large area of skin is removed, skin may be taken from another part of your body to cover the area, which is called a skin graft.",
          "Try not to do too much in the first 2 weeks after skin graft surgery, and do not put pressure on the grafted area, such as rubbing or brushing against it. The graft takes about 5 to 7 days to connect with the blood supply.",
        ],
      },
      {
        heading: "Healing and wound problems",
        paragraphs: [
          "Stitches or clips that need removing are normally taken out 5 to 14 days after surgery. You might have some mild pain, and simple pain relief like paracetamol can help.",
          "Contact your GP or the department where you had surgery if you have a temperature, or if your wound looks red, is very sore and getting more painful, has fluid leaking from it or feels warm. If your wound continues to bleed or the bleeding gets worse, contact the department where you had surgery or go to A&E.",
        ],
      },
      {
        heading: "Your scar",
        paragraphs: [
          "Removing tissue will always leave a mark on the skin. Scars are quite noticeable and red to start with, but they get paler and less noticeable over time.",
          "If scars bother you or make you feel self-conscious, some skin clinics have a make-up specialist who can advise on the best way to cover them. Talk to your doctor about any worries you have about your scar.",
        ],
      },
      {
        heading: "Lymph node surgery",
        paragraphs: [
          "If melanoma has spread to your lymph nodes, your doctor may talk to you about removing them, called a lymph node dissection. It is quite a big operation, done under general anaesthetic, and it can leave a large scar and raise the risk of lymphoedema.",
          "Afterwards you may have a drain, and you may see a physiotherapist who will show you exercises to help you move normally again. Some people get a small collection of fluid near the scar, called a seroma, which usually goes away within a few weeks.",
        ],
      },
    ],
    helps: [
      "Follow your doctor or nurse's advice on looking after your wound and dressing.",
      "Contact your GP or surgery department if you have a temperature or your wound is red, very sore, leaking or warm.",
      "If your wound keeps bleeding or the bleeding gets worse, contact the department where you had surgery or go to A&E.",
      "Avoid strenuous exercise or activity after surgery for as long as your doctor or nurse advises.",
      "Ask whether your skin clinic has a make-up specialist if your scar makes you self-conscious.",
      "Let your doctor or specialist nurse know about any problems after lymph node surgery.",
    ],
    tryThisWeek: [
      "Check your wound for signs of infection.",
      "Avoid strenuous activity for now.",
      "Ask about make-up advice for scars.",
    ],
    ask: "Do I need any more surgery, and what should I watch for while my wound heals?",
    interactive: {
      kind: "scenarios",
      title: "Healing moments",
      scenarios: [
        {
          id: "red",
          situation: "Your wound looks red, feels warm and is getting more painful.",
          options: [{ text: "Contact your GP or the surgery department", best: true }, { text: "Wait for your next appointment" }],
          why: "Contact your GP or the department where you had surgery if you have a temperature, or if your wound looks red, is very sore and getting more painful, has fluid leaking from it or feels warm.",
        },
        {
          id: "bleeding",
          situation: "Your wound keeps bleeding, and it is getting worse.",
          options: [{ text: "Contact the surgery department or go to A&E", best: true }, { text: "Leave it until the morning" }],
          why: "If your wound continues to bleed or the bleeding gets worse, contact the department where you had surgery or go to A&E.",
        },
        {
          id: "graft",
          situation: "A week after a skin graft, you want to get back to the gym.",
          options: [{ text: "Take it easy and protect the graft", best: true }, { text: "Carry on as normal" }],
          why: "Try not to do too much in the first 2 weeks after skin graft surgery, and do not put pressure on the grafted area, such as rubbing or brushing against it.",
        },
        {
          id: "scar",
          situation: "Your scar makes you feel self-conscious.",
          options: [{ text: "Ask about a make-up specialist and talk to your doctor", best: true }, { text: "Keep it to yourself" }],
          why: "If scars bother you or make you feel self-conscious, some skin clinics have a make-up specialist who can advise on the best way to cover them.",
        },
      ],
    },
    sources: [MAC_SURGERY, CRUK_SURGERY, NHS_TREAT, MAC_NODES, CRUK_NODES],
    quiz: {
      question: "How do scars usually change over time?",
      options: [{ text: "They get paler and less noticeable", right: true }, { text: "They get redder" }, { text: "They never change" }],
      why: "Scars are quite noticeable and red to start with, but they get paler and less noticeable over time.",
    },
  },
  {
    id: "mel-immunotherapy",
    kicker: "Drug treatments",
    question: "What do immunotherapy and targeted drugs do, and why was I offered them?",
    hook: "Immunotherapy helps your immune system attack melanoma, and targeted drugs block what helps it grow. After surgery, they aim to stop it coming back.",
    short: "Immunotherapy uses the immune system to recognise and kill cancer cells, and targeted drugs block something in or around the cancer cell that helps it grow. They are used after surgery to reduce the risk of melanoma coming back, called adjuvant treatment, and to treat melanoma that cannot be removed or has spread. Which one you have depends on the stage, any changes in a gene called BRAF, and your general health.",
    sections: [
      {
        heading: "Two kinds of drug",
        paragraphs: [
          "Immunotherapy uses the body's immune system to recognise and kill cancer cells. Checkpoint inhibitors such as pembrolizumab, nivolumab and ipilimumab work by activating white blood cells called lymphocytes to attack cancer cells.",
          "Targeted therapy drugs target something in or around the cancer cell that is helping it grow and survive. For melanoma, you only have them if tests show a change in a gene called BRAF.",
        ],
      },
      {
        heading: "Why you might have them",
        paragraphs: [
          "Doctors use these drugs for melanomas that have been removed but have a high chance of coming back, or that have spread to an area near the melanoma or to the nearby lymph nodes. This is called adjuvant treatment, and it aims to reduce the risk of the melanoma coming back.",
          "They are also used to treat melanoma that cannot be removed with surgery or has spread to other parts of the body. The aim then is to control the cancer and help with any symptoms.",
        ],
      },
      {
        heading: "Stage and the BRAF test",
        paragraphs: [
          "If you have stage 2B or 2C melanoma that has been completely removed, you may have pembrolizumab as a drip into your bloodstream. You do not need targeted or immunotherapy drugs for stage 1 melanoma.",
          "If you have stage 3 melanoma, a sample is tested for changes in the BRAF gene. About 40 to 50 out of every 100 people with skin melanoma have a BRAF change, and if you do, you might have the targeted drugs dabrafenib and trametinib, or immunotherapy instead.",
        ],
      },
      {
        heading: "How you have them",
        paragraphs: [
          "Checkpoint inhibitors are given at a day unit as a drip into a vein, followed by a rest period of a few weeks, which together make a cycle. Pembrolizumab can also be given as an injection under the skin.",
          "Targeted therapy drugs are tablets or capsules taken every day. After surgery, you usually have treatment for up to 12 months, and for melanoma that has spread you usually keep having it as long as it is working and side effects are manageable.",
        ],
      },
      {
        heading: "Things to know",
        paragraphs: [
          "Your doctor may ask you to use contraception during and after some of these treatments, and some can affect fertility. If you are worried about this, talk to your doctor before your treatment starts.",
          "Always tell your cancer doctor, nurse or pharmacist about any other medicines, vitamins, supplements or herbal remedies. While taking dabrafenib and trametinib, do not have grapefruit or Seville oranges.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor to explain how your drug is given and its possible side effects.",
      "Take tablets or capsules exactly as your cancer team advises, at the same times every day.",
      "Tell your team about any other medicines, vitamins, supplements or herbal remedies you take.",
      "Talk to your doctor before treatment starts if you are worried about fertility.",
      "Do not stop taking your targeted treatment unless your doctor tells you to.",
    ],
    tryThisWeek: [
      "Ask how your drug is given.",
      "Take tablets at the same times.",
      "List your other medicines.",
    ],
    ask: "Why was I offered this treatment, what was my BRAF result, and how long will I have it?",
    interactive: {
      kind: "flip-cards",
      title: "Your drugs, card by card",
      intro: "Turn each card to see what each drug is and how it is given.",
      cards: [
        { id: "pembrolizumab", front: "Pembrolizumab", when: "Immunotherapy", back: "A checkpoint inhibitor, given as a drip or an injection under the skin, every 3 or 6 weeks." },
        { id: "nivolumab", front: "Nivolumab", when: "Immunotherapy", back: "A checkpoint inhibitor given as a drip into a vein. Sometimes given together with ipilimumab." },
        { id: "ipilimumab", front: "Ipilimumab", when: "Immunotherapy", back: "A checkpoint inhibitor, sometimes combined with nivolumab, for melanoma that cannot be removed or has spread." },
        { id: "dabrafenib-trametinib", front: "Dabrafenib and trametinib", when: "Targeted, for BRAF-positive melanoma", back: "Capsules and tablets taken every day. Up to 1 year after surgery for stage 3 melanoma." },
        { id: "t-vec", front: "T-VEC", when: "Injected into the melanoma", back: "A weakened cold sore virus that helps the immune system find and destroy the treated area of melanoma." },
      ],
    },
    sources: [CRUK_DRUGS, MAC_IMMUNO, MAC_TARGETED, CRUK_ADV_DRUGS, MAC_MELANOMA, NHS_TREAT, CRUK_PEMBRO, MAC_DAB],
    quiz: {
      question: "When are targeted drugs used for melanoma?",
      options: [{ text: "Only if tests show a change in the BRAF gene", right: true }, { text: "For every melanoma" }, { text: "Only for stage 0" }],
      why: "For melanoma, you only have them if tests show a change in a gene called BRAF.",
    },
  },
  {
    id: "mel-side-effects",
    kicker: "Side effects",
    question: "Which side effects should I report, and when is it urgent?",
    hook: "Immunotherapy and targeted drugs can cause side effects that are mild at first but become serious quickly. The 24-hour number is there for exactly this.",
    short: "Common side effects include tiredness, skin changes and rashes, diarrhoea and, with targeted drugs, high temperatures. Because immunotherapy affects the immune system, side effects can become serious very quickly if they are not treated, and they can start weeks, months or sometimes more than a year after treatment ends. Your team gives you a 24-hour number to call at any time, and you should always call 999 if you have chest pain, difficulty breathing or swelling that happens suddenly.",
    sections: [
      {
        heading: "Why reporting early matters",
        paragraphs: [
          "Immunotherapy can make the immune system too active, which can cause inflammation in different parts of the body. Side effects may be mild, but sometimes they can become serious very quickly if they are not treated.",
          "Side effects can start during treatment, or weeks, months, or sometimes more than a year after you finish. Do not try to treat side effects yourself: always tell your doctor, nurse or pharmacist.",
        ],
      },
      {
        heading: "Your 24-hour number and alert card",
        paragraphs: [
          "Your doctor, nurse or pharmacist will give you 24-hour contact numbers for the hospital. If you feel unwell or need advice, you can call at any time of the day or night, so save these numbers in your phone or keep them somewhere safe.",
          "You will also be given a card with information about your treatment. Keep it with you during treatment and after it ends, and show it to any doctor or healthcare professional caring for you.",
        ],
      },
      {
        heading: "Common side effects",
        paragraphs: [
          "Common side effects of checkpoint inhibitors include feeling tired, skin changes or rashes, diarrhoea and feeling short of breath. With targeted drugs, they include feeling sick, tiredness, an itchy rash or dry skin, sore and red palms and soles, and muscle or joint pain.",
          "Dabrafenib and trametinib can cause high temperatures, usually starting in the first month, with night sweats, feeling hot or cold, shivery or achy. Contact the hospital straight away if you have these symptoms.",
          "Immunotherapy can also affect glands that make hormones, such as the thyroid. You will have regular blood tests, and some people need to take tablets daily to correct their hormone levels.",
        ],
      },
      {
        heading: "When to call straight away",
        paragraphs: [
          "Contact the hospital straight away on the 24-hour number if you have a temperature above 37 and a half degrees or below 36 degrees, or you feel unwell, even with a normal temperature. Call it straight away too for passing more stools than is normal for you, stools at night, tummy cramps or pain, or blood or mucus in your stools.",
          "Call straight away as well for breathlessness, a cough that does not go away or wheezing, a rash that is spreading or swollen, blistering or peeling skin, yellow skin or eyes, dark urine, or unexplained bleeding or bruising.",
          "Always call 999 if you have chest pain, pressure, heaviness, tightness or squeezing across the chest, difficulty breathing, or swelling that happens suddenly. For weakness, numbness, confusion, fits or problems moving or speaking, contact the hospital straight away, go to the hospital straight away or call 999, and do not drive yourself.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "For tiredness, try to pace yourself and plan your day so you have time to rest, and gentle exercise, like short walks, can help. If you feel sleepy, do not drive or use machinery.",
          "For your skin, wash with lukewarm water and mild, unperfumed cleansers, moisturise regularly, and use sun cream of at least SPF 30 with clothing and a hat. If you need treatment for anything else, including at the dentist, always say you are having cancer treatment.",
        ],
      },
    ],
    helps: [
      "Save the hospital's 24-hour numbers in your phone, and call at any time if you feel unwell or need advice.",
      "Carry your treatment alert card during and after treatment, and show it to any doctor or healthcare professional.",
      "Tell your cancer doctor or nurse about any side effects as soon as possible, even after treatment has finished.",
      "Call the 24-hour number straight away if you have a high or low temperature, or feel unwell even with a normal one.",
      "Always call 999 for chest pain, difficulty breathing or swelling that happens suddenly.",
      "Do not try to treat side effects yourself.",
    ],
    tryThisWeek: [
      "Save the 24-hour number.",
      "Keep your alert card with you.",
      "Report any side effect early.",
    ],
    ask: "Which side effects should I call the 24-hour number about, and for how long after treatment should I watch for them?",
    interactive: {
      kind: "signs",
      title: "Call the 24-hour number straight away",
      intro: "Tick any you have, during treatment or after it ends. Contact the hospital straight away on the 24-hour number.",
      signs: ["Temperature over 37 and a half degrees", "Temperature below 36 degrees", "Unwell, even with a normal temperature", "More stools than usual, or at night", "Blood or mucus in my stools", "Breathless, wheezy or a lasting cough", "A spreading rash, or peeling skin", "Yellow skin or eyes, or dark urine", "Unexplained bleeding or bruising"],
      after: "Always call 999 if you have chest pain, difficulty breathing or swelling that happens suddenly.",
      copyHeading: "Side effects I need to report",
    },
    sources: [MAC_PEMBRO, MAC_IMMUNO, CRUK_DRUGS, MAC_DAB, MAC_TARGETED],
    quiz: {
      question: "When can immunotherapy side effects start?",
      options: [{ text: "During treatment, or weeks, months or more than a year after", right: true }, { text: "Only on the day of treatment" }, { text: "Never after treatment ends" }],
      why: "Side effects can start during treatment, or weeks, months, or sometimes more than a year after you finish.",
    },
  },
  {
    id: "mel-swelling",
    kicker: "Swelling",
    question: "Why might my arm or leg swell after lymph node surgery, and what helps?",
    hook: "Some swelling after surgery is normal and settles. Lymphoedema is different, and getting advice as soon as you notice it matters.",
    short: "Lymphoedema is swelling caused by a build-up of lymph fluid when the lymphatic system is not working properly, and having a group of lymph nodes removed raises the risk. It can develop months or even years after treatment, most often in an arm or leg. Skin care, keeping active, a healthy weight and spotting infection early can help lower the risk, and if it develops, the main symptoms can usually be controlled.",
    sections: [
      {
        heading: "What lymphoedema is",
        paragraphs: [
          "Lymphoedema is swelling that develops because of a build-up of lymph fluid in the body's tissues. It happens when the lymphatic system is not working properly, for example because it has been damaged by cancer treatment such as surgery or radiotherapy.",
          "Having all the lymph nodes in an area removed can cause it, because fluid can build up and cause swelling. People who have treatment for melanoma in the lymph nodes in the groin can get it, and it can also follow surgery or radiotherapy to the armpit.",
        ],
      },
      {
        heading: "Who is at risk",
        paragraphs: [
          "Anyone who has had surgery or radiotherapy affecting their lymph nodes is at risk. The risk is greater if lymph nodes in the armpit, groin or neck are affected, if you had both surgery and radiotherapy, or if you are overweight.",
          "If you had a sentinel lymph node biopsy, you are still at risk, but the risk is lower than after a complete group of nodes is removed. Not everyone who has lymph nodes removed will get lymphoedema.",
        ],
      },
      {
        heading: "Normal swelling, or lymphoedema?",
        paragraphs: [
          "Some swelling after surgery is normal, particularly around the scars, and usually settles around six weeks after the operation. Lymphoedema usually happens a few months or years later.",
          "Early signs include clothing, shoes or jewellery feeling tighter, a limb that feels heavy, tight, full or stiff, and aching. Ask your cancer doctor or specialist nurse for advice as soon as you notice any of these. Developing lymphoedema does not usually mean your cancer has come back.",
        ],
      },
      {
        heading: "Lowering the risk",
        paragraphs: [
          "Keep the skin in the area clean and well moisturised, and protect it from cuts, grazes, insect bites and sunburn, for example by wearing gloves for gardening. If possible, avoid blood pressure checks, injections and tight clothing or jewellery on the area at risk.",
          "Regular exercise and keeping active help the fluid to drain, so start gently and build up gradually. Keeping to a healthy weight matters too, because the risk increases if you are overweight.",
        ],
      },
      {
        heading: "Infection and treatment",
        paragraphs: [
          "Cellulitis, a skin infection, is the most common complication of lymphoedema. Contact your GP straight away if the area at risk becomes red or warm, has a new painful swelling, is painful or tender, or if you have a high temperature or flu-like symptoms.",
          "Call 999 or go to A&E if you have cellulitis with a very high temperature or feel hot, cold or shivery, a fast heartbeat or fast breathing, purple patches on your skin, feel dizzy or faint, are confused, or have cold, clammy or pale skin. There is no cure for lymphoedema, but compression, skin care, exercise and massage can usually control the main symptoms.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor or specialist nurse whether you are at risk, and how to check for changes.",
      "Keep the skin in the area clean and moisturised, and protect it from cuts, bites and sunburn.",
      "Keep active, starting gently and building up gradually, and try to stay a healthy weight.",
      "If possible, avoid tight clothing, jewellery, blood pressure checks and injections on the area at risk.",
      "Ask for advice as soon as you notice swelling, tightness or heaviness.",
      "Contact your GP straight away about redness, warmth, new swelling or a high temperature.",
    ],
    tryThisWeek: [
      "Moisturise the area every day.",
      "Keep active, gently at first.",
      "Report any new swelling.",
    ],
    ask: "Am I at risk of lymphoedema, and can you refer me to a lymphoedema service if I notice swelling?",
    interactive: {
      kind: "risk-check",
      title: "What raises the risk?",
      intro: "Tick any that apply. Some you can work on, and some you cannot.",
      items: [
        { id: "group", label: "A group of lymph nodes removed", note: "The risk is higher than after a sentinel lymph node biopsy alone. Ask your team how to check for changes.", changeable: false },
        { id: "both", label: "Surgery and radiotherapy to the nodes", note: "Having both raises the risk. Ask for advice as soon as you notice any swelling.", changeable: false },
        { id: "weight", label: "Being overweight", note: "The risk increases if you are overweight. Your GP, practice nurse or a dietitian can advise.", changeable: true },
        { id: "skin", label: "Cuts, bites or sunburn on the area", note: "Protect the skin, wear gloves for gardening, and keep it clean and moisturised.", changeable: true },
        { id: "infection", label: "A skin infection (cellulitis)", note: "Contact your GP straight away about redness, warmth or new swelling in the area.", changeable: true },
        { id: "tight", label: "Tight clothing or jewellery", note: "Pressure on the area can affect the flow of lymph fluid.", changeable: true },
        { id: "still", label: "Not moving much", note: "Regular exercise and keeping active help the fluid to drain.", changeable: true },
      ],
    },
    sources: [MAC_LYMPH, MAC_LYMPH_RISK, NHS_LYMPH, CRUK_NODES, LSN_RISK, NHS_CELLULITIS, NHS_LYMPH_PREV],
    quiz: {
      question: "Does developing lymphoedema usually mean the cancer has come back?",
      options: [{ text: "No, but report any change to your team", right: true }, { text: "Yes, always" }, { text: "Only if it is in the leg" }],
      why: "Developing lymphoedema does not usually mean your cancer has come back.",
    },
  },
  {
    id: "mel-sun",
    kicker: "Sun safety",
    question: "How do I protect my skin in the sun from now on?",
    hook: "You can still enjoy sunshine and sunny holidays. Shade, clothing and sunscreen, used together, help lower the risk of another melanoma.",
    short: "After melanoma, protecting your skin from the sun helps reduce the risk of further melanomas, and you can still enjoy sunshine and holidays. The best protection is to cover up and stay out of direct sunlight, especially between 11am and 3pm, with sun cream of at least SPF 30 and 4-star UVA protection on exposed skin. Never use a sunbed or sunlamp.",
    sections: [
      {
        heading: "Still enjoying the sun",
        paragraphs: [
          "After treatment for melanoma, your specialist doctor or nurse will give you information about protecting your skin. You can still enjoy sunshine or have holidays in sunny countries, but it is important to protect your skin to help reduce your risk of further melanomas.",
          "Having had melanoma means you have a higher than average risk of getting another one. Sunburn increases your risk of skin cancer, and you can burn in the UK, even when it is cloudy.",
        ],
      },
      {
        heading: "Shade and clothing first",
        paragraphs: [
          "Stay out of the sun when it is strongest, usually between 11am and 3pm. You can also check the UV index on a weather app or website, and if it is 3 or higher, consider protecting your skin.",
          "Wear close-weave clothing, long sleeves and trousers, a wide-brimmed hat to protect your face, neck and ears, and sunglasses. Do not use sun cream instead of covering up or staying in the shade, because the best protection is to cover up and stay out of direct sunlight.",
        ],
      },
      {
        heading: "Choosing sunscreen",
        paragraphs: [
          "Choose a sun cream with at least SPF 30 against UVB and at least 4 stars against UVA. Your skin cancer specialist may suggest SPF 50, but no sunscreen can protect you completely.",
          "Check it is not past its expiry date, and store the bottle out of sunlight, somewhere dry and cool.",
        ],
      },
      {
        heading: "Using enough, often enough",
        paragraphs: [
          "Most people do not apply enough sunscreen, and about 6 to 8 teaspoons is enough to cover most adults. Put it on 15 to 30 minutes before going in the sun, spread thickly and evenly.",
          "Reapply it regularly, especially after swimming, towel drying or sweating, and every 2 hours, as the sun can dry it off your skin.",
        ],
      },
      {
        heading: "No tanning, no sunbeds",
        paragraphs: [
          "There is no safe or healthy way to get a tan, and a tan does not protect your skin. Never use a sunbed or sunlamp, and if you prefer to look tanned, use fake tan.",
          "If you use a sunbed to treat a skin condition, your dermatologist may advise you to stop. Aim to strike a balance between protecting yourself from the sun and getting enough vitamin D.",
        ],
      },
    ],
    helps: [
      "Stay out of the sun when it is strongest, between 11am and 3pm.",
      "Cover up with long sleeves, trousers, a wide-brimmed hat and sunglasses.",
      "Use sun cream of at least SPF 30 and at least 4-star UVA protection on exposed skin.",
      "Use about 6 to 8 teaspoons to cover your body, and reapply regularly and after swimming.",
      "Never use a sunbed or sunlamp; use fake tan if you prefer to look tanned.",
    ],
    tryThisWeek: [
      "Plan shade from 11am to 3pm.",
      "Pack a wide-brimmed hat.",
      "Buy SPF 30, 4-star sun cream.",
    ],
    ask: "What sun protection do you recommend for me, and should I use SPF 50?",
    interactive: {
      kind: "scenarios",
      title: "Sunny moments",
      scenarios: [
        {
          id: "holiday",
          situation: "You have a holiday booked somewhere sunny.",
          options: [{ text: "Go, and protect your skin", best: true }, { text: "Cancel every sunny holiday" }],
          why: "You can still enjoy sunshine or have holidays in sunny countries, but it is important to protect your skin to help reduce your risk of further melanomas.",
        },
        {
          id: "cream",
          situation: "You have put on sun cream and want to stay out in the midday sun for longer.",
          options: [{ text: "Still cover up and find shade", best: true }, { text: "Stay out, the cream is enough" }],
          why: "Do not use sun cream instead of covering up or staying in the shade, because the best protection is to cover up and stay out of direct sunlight.",
        },
        {
          id: "swim",
          situation: "You have just come out of the pool and dried off.",
          options: [{ text: "Reapply sunscreen now", best: true }, { text: "Wait until it wears off" }],
          why: "Reapply it regularly, especially after swimming, towel drying or sweating, and every 2 hours, as the sun can dry it off your skin.",
        },
        {
          id: "tan",
          situation: "You want to look tanned for a party.",
          options: [{ text: "Use fake tan", best: true }, { text: "Book a sunbed session" }],
          why: "Never use a sunbed or sunlamp, and if you prefer to look tanned, use fake tan.",
        },
      ],
    },
    sources: [MAC_SUN, CRUK_SKIN, NHS_SUN],
    quiz: {
      question: "What is the best protection from the sun?",
      options: [{ text: "Covering up and staying out of direct sunlight", right: true }, { text: "Sun cream on its own" }, { text: "Building up a tan" }],
      why: "Do not use sun cream instead of covering up or staying in the shade, because the best protection is to cover up and stay out of direct sunlight.",
    },
  },
  {
    id: "mel-skin-checks",
    kicker: "Skin checks",
    question: "How do I check my skin each month, and what am I looking for?",
    hook: "A monthly check in good light, with the ABCDE list, helps you notice anything new or changing early.",
    short: "After melanoma, it is important to check yourself for signs of melanoma at least once a month, including your scar and the skin all over your body. The ABCDE checklist, for asymmetry, border, colour, diameter and evolving, helps you know what to look for. If another melanoma develops, there is a better chance of a cure if it is found early, so contact your specialist doctor or nurse about any changes.",
    sections: [
      {
        heading: "Why check every month",
        paragraphs: [
          "It is important to check yourself for any signs of melanoma at least once a month. If another melanoma develops, there is a better chance of a cure if it is found early.",
          "Your specialist doctor or nurse will ask you to check your scar and the area around it, and the skin all over your body for any new or changing moles. They may also ask you to check your lymph nodes, and a good time to do this is in the shower or bath.",
        ],
      },
      {
        heading: "The ABCDE checklist",
        paragraphs: [
          "A is for asymmetry: melanomas are often an uneven shape, while both halves of an ordinary mole look mostly the same. B is for border: the edges of a melanoma are more likely to be uneven, irregular or jagged.",
          "C is for colour: melanomas are usually more than one colour, such as brown mixed with black, red, pink, white or blue. D is for diameter: they are usually more than 6mm wide, while normal moles are about the size of the blunt end of a pencil or smaller.",
          "E is for evolving: look for changes in the size, shape or colour of a mole. Also notice the ugly duckling sign, a mole that stands out because it looks different to your other moles.",
        ],
      },
      {
        heading: "Other signs",
        paragraphs: [
          "Other signs include a mole that is swollen and sore, bleeding, itchy, crusty or tingling. Visit your GP straight away about any unusual mark that lasts more than a few weeks, something growing under a nail, or a new dark-coloured stripe along part of a nail.",
          "If you have black or brown skin, the signs of melanoma can be harder to see. Look for anything new, changing or unusual on sun-protected areas too, such as the palms of the hands, the soles of the feet and under the nails.",
        ],
      },
      {
        heading: "How to check",
        paragraphs: [
          "A good time to check is after a shower or bath, in plenty of light, using a full-length mirror and a small handheld mirror for hard-to-see areas. Ask a relative or friend to check your back, neck and other hard-to-see areas, and use a comb or a blow dryer to move your hair when checking your scalp.",
          "Check areas that are not exposed to the sun, such as the genitals, fingernails and toenails. Keep notes or take pictures of your moles so you can notice changes quickly.",
        ],
      },
      {
        heading: "If you notice a change",
        paragraphs: [
          "Contact your specialist doctor or nurse if you have symptoms, and remember you can contact them between your follow-up appointments. Also see your doctor if there are any changes where the original melanoma was.",
          "It is important to keep an eye on things, but try not to worry too much. Checking gets easier as you become more familiar with your skin and what your moles normally look like.",
        ],
      },
    ],
    helps: [
      "Check your skin, including your scar, at least once a month.",
      "Use the ABCDE checklist to know what to look for.",
      "Check in plenty of light with a full-length mirror and a small handheld mirror.",
      "Ask a relative or friend to check your back, neck and other hard-to-see areas.",
      "Keep notes or take pictures of your moles so you notice changes quickly.",
      "Contact your specialist doctor or nurse about changes; you can do this between appointments.",
    ],
    tryThisWeek: [
      "Do a full skin check this month.",
      "Ask someone to check your back.",
      "Take pictures of your moles.",
    ],
    ask: "Can you show me how to check my skin and lymph nodes, and which areas need the most attention?",
    interactive: {
      kind: "signs",
      title: "The ABCDE check",
      intro: "Tick anything you notice on a mole or patch of skin. Contact your specialist doctor or nurse about any of them.",
      signs: ["Asymmetry: an uneven shape", "Border: uneven or jagged edges", "Colour: more than one colour", "Diameter: more than 6mm wide", "Evolving: changing size, shape, colour", "A mole that looks different to the rest", "Bleeding, itching, crusting or tingling", "A new dark stripe along a nail"],
      after: "Contact your specialist doctor or nurse. You can contact them between your follow-up appointments.",
      copyHeading: "Skin changes I have noticed",
    },
    sources: [MAC_SIGNS, MAC_MELANOMA, NHS_SYMPTOMS, CRUK_SKIN],
    quiz: {
      question: "How often does Macmillan suggest checking your skin after melanoma?",
      options: [{ text: "At least once a month", right: true }, { text: "Once every 5 years" }, { text: "Only before a holiday" }],
      why: "It is important to check yourself for any signs of melanoma at least once a month.",
    },
  },
  {
    id: "mel-vitamin-d",
    kicker: "Vitamin D",
    question: "Do I need vitamin D tablets if I avoid the sun?",
    hook: "Covering up protects your skin but can lower your vitamin D. A blood test, food and perhaps a supplement can fill the gap.",
    short: "Sunlight is the main source of vitamin D for most people, so covering up and using sunscreen can reduce the amount in your body. NICE recommends that everyone diagnosed with melanoma has a blood test to measure their vitamin D level, and your skin specialist can tell you if you need a supplement. Vitamin D also comes from some foods, and the NHS says everyone should consider a daily 10 microgram supplement in autumn and winter.",
    sections: [
      {
        heading: "Why vitamin D matters",
        paragraphs: [
          "We all need vitamin D to help build and maintain strong bones, teeth and muscles. A lack of vitamin D could cause problems in the long term, such as a bone condition called osteoporosis in adults.",
          "Sunlight is the main source of vitamin D for most people. Covering up and using sunscreen helps reduce the risk of melanoma, but it can also reduce the amount of vitamin D in your body.",
        ],
      },
      {
        heading: "A blood test after melanoma",
        paragraphs: [
          "NICE recommends that everyone diagnosed with melanoma has a blood test to measure their vitamin D level. Your skin specialist can then tell you if you need to take a vitamin D supplement.",
          "Ask your skin specialist or GP if you have not had your vitamin D level tested, or if you do not know the result. If you are not often outdoors, ask your specialist doctor or GP to check your levels, as you may need supplements if they are low.",
        ],
      },
      {
        heading: "Food sources",
        paragraphs: [
          "Vitamin D is found in a small number of foods, such as oily fish like salmon, sardines and mackerel, red meat, egg yolks, and fortified foods such as some fat spreads and breakfast cereals.",
          "You do not need to sunbathe to get enough vitamin D. But it is difficult for people to get enough vitamin D from food alone.",
        ],
      },
      {
        heading: "Supplements",
        paragraphs: [
          "Between October and early March, we do not make enough vitamin D from sunlight, so everyone should consider taking a daily supplement containing 10 micrograms of vitamin D during the autumn and winter.",
          "People who are not often outdoors, or who usually wear clothes that cover up most of their skin when outdoors, are advised to take 10 micrograms a day throughout the year. Do not take more than 100 micrograms a day, as it could be harmful, and if your doctor recommends a different amount, follow their advice.",
        ],
      },
    ],
    helps: [
      "Ask your skin specialist or GP whether your vitamin D level has been tested, and what the result was.",
      "Ask your skin specialist whether you need to take a vitamin D supplement.",
      "Include foods with vitamin D, such as oily fish, egg yolks and fortified breakfast cereals.",
      "Consider a daily supplement of 10 micrograms of vitamin D during the autumn and winter.",
      "If your doctor recommends a different amount of vitamin D, follow their advice.",
    ],
    tryThisWeek: [
      "Ask about your vitamin D test.",
      "Add oily fish or eggs to meals.",
      "Consider a winter supplement.",
    ],
    ask: "Has my vitamin D level been checked, and do I need a supplement?",
    interactive: {
      kind: "scenarios",
      title: "Vitamin D moments",
      scenarios: [
        {
          id: "test",
          situation: "You do not know whether your vitamin D level has ever been tested.",
          options: [{ text: "Ask your skin specialist or GP", best: true }, { text: "Assume it is fine" }],
          why: "Ask your skin specialist or GP if you have not had your vitamin D level tested, or if you do not know the result.",
        },
        {
          id: "winter",
          situation: "It is November and you spend most days indoors.",
          options: [{ text: "Consider a daily 10 microgram supplement", best: true }, { text: "Sunbathe at lunchtime instead" }],
          why: "Between October and early March, we do not make enough vitamin D from sunlight, so everyone should consider taking a daily supplement containing 10 micrograms of vitamin D during the autumn and winter.",
        },
        {
          id: "more",
          situation: "You wonder whether taking extra tablets would work better.",
          options: [{ text: "Stick to the advised amount", best: true }, { text: "Take as many as you like" }],
          why: "Do not take more than 100 micrograms a day, as it could be harmful, and if your doctor recommends a different amount, follow their advice.",
        },
      ],
    },
    sources: [CRUK_SKIN, MAC_SUN, NHS_VITD, CRUK_VITD],
    quiz: {
      question: "What does NICE recommend for everyone diagnosed with melanoma?",
      options: [{ text: "A blood test to measure their vitamin D level", right: true }, { text: "Daily sunbathing" }, { text: "Avoiding all foods with vitamin D" }],
      why: "NICE recommends that everyone diagnosed with melanoma has a blood test to measure their vitamin D level.",
    },
  },
  {
    id: "mel-mood",
    kicker: "Mood",
    question: "How do I live with the worry between appointments?",
    hook: "Feeling anxious between check-ups is natural. Talking, support and a few practical habits help, and urgent help is there if you need it.",
    short: "It is natural to get anxious between appointments, and many people get anxious about follow-up visits and scans. Talking to family, friends, your specialist nurse or a counsellor can help, and you can refer yourself to NHS talking therapies. If you ever feel you cannot keep yourself safe, call 999 or go to A&E, or call Samaritans free on 116 123, any time, day or night.",
    sections: [
      {
        heading: "A natural feeling",
        paragraphs: [
          "You may get anxious between appointments, and this is natural. Many people also get anxious about their follow-up appointments and scans.",
          "Many people struggle to cope with feelings of uncertainty, but they often get better with time. Certain things can trigger them, such as going to the hospital for a test or hearing something about cancer in the news.",
        ],
      },
      {
        heading: "What can help",
        paragraphs: [
          "Focusing on what you can control may help, such as getting involved in your recovery, talking about your feelings, finding ways of managing anxiety and stress, knowing what your triggers are and doing activities you enjoy. Some people find it helps to write down how they are feeling, or to make time to relax.",
          "There is no evidence that feeling anxious or sad can affect your recovery. Talking about these feelings openly and getting the right support can help you feel more in control.",
        ],
      },
      {
        heading: "People to talk to",
        paragraphs: [
          "Talking about how you feel might help, with family or friends, or with a counsellor after cancer treatment, which your doctor or nurse can help set up. Specialist nurses can help if you are finding it difficult to cope, and can point you to support in your local area.",
          "You can refer yourself to NHS talking therapies for anxiety and depression without seeing a GP, if you are registered with a GP and aged 18 or over, or 16 or over in some areas. Melanoma Focus has a free helpline run by specialist skin cancer nurses on 0808 801 0777, and the Macmillan Support Line is free on 0808 808 00 00.",
        ],
      },
      {
        heading: "When worry becomes too much",
        paragraphs: [
          "If you are feeling worried or finding it difficult to cope, talk to your cancer team, GP or practice nurse. They can give you advice on ways to manage anxiety and refer you to any extra support you may need.",
          "Depression is different from feeling sad: it is an illness that needs treatment. Talking therapies and antidepressants are ways of treating it.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "For urgent help with your mental health, call 111 and select the mental health option, or ask for an urgent GP appointment. You can call Samaritans free on 116 123, any time, day or night, and if you would rather not talk on the phone, you can text SHOUT to 85258.",
          "Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Talk about how you feel with family, friends or your specialist nurse.",
      "Ask your doctor or nurse to help set up counselling after cancer treatment.",
      "Refer yourself to NHS talking therapies for anxiety and depression.",
      "Call the Macmillan Support Line free on 0808 808 00 00, or the Melanoma Focus helpline on 0808 801 0777.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "If you do not feel you can keep yourself safe, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Tell someone how you feel.",
      "Look up NHS talking therapies.",
      "Save the Macmillan Support Line.",
    ],
    ask: "Could I be referred for counselling or a talking therapy to help with the worry?",
    interactive: {
      kind: "scenarios",
      title: "Worrying moments",
      scenarios: [
        {
          id: "scan",
          situation: "A follow-up scan is coming up and you cannot stop worrying.",
          options: [{ text: "Talk to someone about how you feel", best: true }, { text: "Keep it to yourself" }],
          why: "Talking about how you feel might help, with family or friends, or with a counsellor after cancer treatment, which your doctor or nurse can help set up.",
        },
        {
          id: "checking",
          situation: "You find yourself checking your skin many times a day.",
          options: [{ text: "Talk to someone from your cancer team", best: true }, { text: "Check even more often" }],
          why: "Constantly checking for symptoms or changes can make you feel anxious. If you find yourself doing this, talk to someone from your cancer team or your primary care team.",
        },
        {
          id: "news",
          situation: "A news story about cancer brings the worry flooding back.",
          options: [{ text: "Notice it as a trigger, and do something you enjoy", best: true }, { text: "Read everything you can find online tonight" }],
          why: "Certain things can trigger these feelings, such as hearing something about cancer in the news. Knowing what your triggers are and doing activities you enjoy can help.",
        },
      ],
    },
    sources: [MAC_RECURRENT, MAC_WORRIES, CRUK_FOLLOW, CRUK_COPING, MAC_EMOTIONS, NHS_TALKING, NHS_URGENT, NHS_SUICIDAL, SAMARITANS, NHS_HELP, CRUK_DEPRESSION],
    quiz: {
      question: "Who can you call free, any time, day or night, if you need to talk?",
      options: [{ text: "Samaritans, on 116 123", right: true }, { text: "Nobody is available at night" }, { text: "Only your dentist" }],
      why: "Call Samaritans free on 116 123, any time, day or night.",
    },
  },
];
