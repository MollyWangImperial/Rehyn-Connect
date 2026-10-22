import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Non-melanoma skin cancer page's pieces (content/library-conditions/cancer-more-2.ts,
// `skinCancer`). Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, Macmillan Cancer
// Support, Cancer Research UK and the British Association of Dermatologists' patient leaflets, with the Health and
// Safety Executive for outdoor work, Changing Faces for skin camouflage and Samaritans for the mood answer. The answers
// describe treatment, recovery and living with after-effects: there are no survival figures, and nothing is a
// prediction for one person. Wound, infection and blood clot guidance (the surgery department, a doctor, 999 and A&E)
// is given as the sources state it, and the mood answer follows safe-messaging guidance. General information only; it
// never replaces what a person's own skin cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/${path}` });
const bad = (label: string, path: string): LearnSource => ({ label: `British Association of Dermatologists: ${label}`, url: `https://www.bad.org.uk/pils/${path}` });

const NHS_WHAT = nhs("What is non-melanoma skin cancer?", "conditions/non-melanoma-skin-cancer/what-is-non-melanoma-skin-cancer/");
const NHS_SYMPTOMS = nhs("Symptoms of non-melanoma skin cancer", "conditions/non-melanoma-skin-cancer/symptoms/");
const NHS_CAUSES = nhs("Causes of non-melanoma skin cancer", "conditions/non-melanoma-skin-cancer/causes/");
const NHS_TESTS = nhs("Tests and next steps for non-melanoma skin cancer", "conditions/non-melanoma-skin-cancer/tests-and-next-steps/");
const NHS_TREAT = nhs("Treatment for non-melanoma skin cancer", "conditions/non-melanoma-skin-cancer/treatment/");
const NHS_SUN = nhs("Sunscreen and sun safety", "live-well/seasonal-health/sunscreen-and-sun-safety/");
const NHS_VITD = nhs("Vitamin D", "conditions/vitamins-and-minerals/vitamin-d/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const MAC_SKIN = mac("Skin cancer", "skin-cancer");
const MAC_TYPES = mac("Types of skin cancer", "skin-cancer/types-of-skin-cancer");
const MAC_SIGNS = mac("Signs and symptoms of skin cancer", "skin-cancer/signs-and-symptoms-of-skin-cancer");
const MAC_CAUSES = mac("Causes and risk factors of skin cancer", "skin-cancer/causes-and-risk-factors-of-skin-cancer");
const MAC_TREAT = mac("Treatment overview for non-melanoma skin cancer", "skin-cancer/treatment");
const MAC_SURGERY = mac("Surgery for skin cancer", "treatments-and-drugs/surgery-for-skin-cancer");
const MAC_SUN = mac("Sun safety and cancer treatment", "impacts-of-cancer/sun-safety");
const MAC_BODY = mac("Changes to your appearance and body image", "impacts-of-cancer/changes-to-your-appearance-and-body-image");
const MAC_WORRIES = mac("Coping with worries about cancer coming back", "after-treatment/coping-with-worries-about-cancer-coming-back");
const MAC_WORK = mac("Work and cancer", "impacts-of-cancer/work-and-cancer");

const CRUK_ABOUT = cruk("What is skin cancer?", "skin-cancer/about-skin-cancer");
const CRUK_BCC = cruk("Basal cell carcinoma (BCC)", "skin-cancer/types/basal-cell-carcinoma");
const CRUK_SCC = cruk("Squamous cell carcinoma (SCC)", "skin-cancer/types/squamous-cell-carcinoma");
const CRUK_SYMPTOMS = cruk("Non melanoma skin cancer symptoms", "skin-cancer/symptoms");
const CRUK_TREAT = cruk("Treatment for non melanoma skin cancer", "skin-cancer/treatment");
const CRUK_FOLLOW = cruk("Follow up after non melanoma skin cancer treatment", "skin-cancer/treatment/follow-up-appointments");
const CRUK_SKINCARE = cruk("Skin care after non melanoma skin cancer", "skin-cancer/living-with/skin-care-after-skin-cancer");
const CRUK_COPING = cruk("Coping with non melanoma skin cancer", "skin-cancer/living-with/coping");
const CRUK_AFTER = cruk("After non melanoma skin cancer surgery", "skin-cancer/treatment/surgery/after-surgery");
const CRUK_PROBLEMS = cruk("Problems after surgery for non melanoma skin cancer", "skin-cancer/treatment/surgery/problems-after-surgery");
const CRUK_CHEMO_CREAM = cruk("Chemotherapy cream for non melanoma skin cancer", "skin-cancer/treatment/chemotherapy-cream");
const CRUK_IMIQ = cruk("Imiquimod cream (Aldara)", "treatment/drugs/imiquimod");
const CRUK_PDT = cruk("Photodynamic therapy (PDT) for non melanoma skin cancer", "skin-cancer/treatment/photodynamic-therapy");
const CRUK_RADIO = cruk("Having radiotherapy for non melanoma skin cancer", "skin-cancer/treatment/radiotherapy/radiotherapy-skin-cancer");
const CRUK_SUNSAFE = cruk("Sun safety", "causes-of-cancer/sun-uv-and-cancer/sun-safety");
const CRUK_VITD = cruk("Sun and vitamin D", "causes-of-cancer/sun-uv-and-cancer/sun-and-vitamin-d");

const BAD_BCC = bad("Basal cell carcinoma", "basal-cell-carcinoma");
const BAD_SCC = bad("Squamous cell carcinoma", "squamous-cell-carcinoma");
const BAD_IMIQ = bad("Imiquimod cream", "imiquimod-cream");
const BAD_5FU = bad("5-fluorouracil cream", "5-fluorouracil-cream");
const BAD_CRYO = bad("Cryotherapy", "cryotherapy");
const BAD_MOHS = bad("Mohs micrographic surgery", "mohs-micrographic-surgery");

const HSE_OUTDOOR: LearnSource = { label: "Health and Safety Executive: Outdoor workers and sun exposure", url: "https://www.hse.gov.uk/skin/sunprotect.htm" };
const CHANGING_FACES: LearnSource = { label: "Changing Faces: What is skin camouflage", url: "https://www.changingfaces.org.uk/services-support/skin-camouflage-service/what-is-skin-camouflage/" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const skinCancerAnswers: LearnArticle[] = [
  {
    id: "nmsc-what-it-is",
    kicker: "Skin cancer",
    question: "What are basal cell and squamous cell skin cancer, and how do they differ?",
    hook: "Both start in the top layer of skin and are linked to the sun. One almost never spreads; the other occasionally can.",
    short: "Non-melanoma skin cancer is a common type of cancer that starts in the top layer of skin, and the main types are basal cell carcinoma (BCC) and squamous cell carcinoma (SCC). BCC is the most common type of skin cancer in the UK and almost never spreads; SCC is the second most common and spread is unusual. Most non-melanoma skin cancers are treated successfully.",
    sections: [
      {
        heading: "The top layer of skin",
        paragraphs: [
          "Non-melanoma skin cancer is a common type of cancer that starts in the top layer of skin, called the epidermis. The two main types are basal cell carcinoma, or BCC, and squamous cell carcinoma, or SCC.",
          "Both start in skin cells called keratinocytes. Basal cells sit at the bottom of the epidermis, and squamous cell skin cancer develops from the cells in the layers above them.",
          "Melanoma is a different type of skin cancer that starts in cells called melanocytes. It is less common, usually more serious and treated differently.",
        ],
      },
      {
        heading: "Basal cell carcinoma",
        paragraphs: [
          "BCC is the most common type of skin cancer in the UK, and around 75 out of every 100 non-melanoma skin cancers are BCCs. BCCs sometimes used to be called rodent ulcers.",
          "Most BCCs are very slow-growing and almost never spread to other parts of the body, and nearly everyone who has treatment for a BCC is completely cured. They most often appear on skin exposed to the sun, especially the face, head and neck, and there are different types, such as nodular and superficial BCC.",
          "A BCC might be a smooth, firm lump that may be pearly, pink, red, brown or black, a flat patch of scaly or crusty skin, or a scar-like area of pale, shiny skin. On black or brown skin, it is more likely to be pearly, brown or black.",
        ],
      },
      {
        heading: "Squamous cell carcinoma",
        paragraphs: [
          "SCC is the second most common type of skin cancer in the UK, and it is generally faster growing than BCC. It usually develops on skin damaged by the sun, such as the face, neck, scalp, backs of the hands and lower legs.",
          "An SCC might be a scaly, raised, rough area of skin, a pink or red lump, or a hard, crusty scab, and it may feel tender or bleed easily. On black or brown skin, it is more likely to be brown or black.",
          "SCCs do not often spread, and if they do, it is usually to the deeper layers of the skin; spread to nearby lymph nodes and other parts of the body is unusual. Most people treated for SCC of the skin are completely cured.",
        ],
      },
      {
        heading: "What causes them",
        paragraphs: [
          "Ultraviolet light is the most common cause of non-melanoma skin cancer. It comes from the sun and is used in sunbeds.",
          "Non-melanoma skin cancer is more common in older people, but younger people can also get it. The chance is higher with pale skin that burns easily, red or fair hair, blue or green eyes, a lot of past sunburn or sunbed use, or a history of skin cancer in you or your family.",
          "If you have brown or black skin, you have a lower chance of getting non-melanoma skin cancer, but you can still get it.",
        ],
      },
    ],
    helps: [
      "See a GP if you have a growth on your skin that is getting bigger or has changed colour or texture.",
      "See a GP about a growth or area of skin that hurts, itches, bleeds, crusts or scabs for more than 4 weeks.",
      "Take a photograph of anything unusual on your skin, so you can check for any changes.",
      "Stay out of the sun during the hottest part of the day, from 11am to 3pm in the UK.",
      "Use sunscreen with an SPF of at least 30 and at least 4-star UVA protection, and reapply it regularly.",
    ],
    tryThisWeek: [
      "See a GP about a changing growth.",
      "Photograph anything unusual.",
      "Use SPF 30 or higher in the sun.",
    ],
    ask: "What type of skin cancer did I have, and has it all been removed?",
    interactive: {
      kind: "flip-cards",
      title: "The types, card by card",
      intro: "Turn each card to see where each type starts and how it tends to behave.",
      cards: [
        { id: "bcc", front: "Basal cell carcinoma", when: "The most common type in the UK", back: "Starts in basal cells. Most are very slow-growing and almost never spread to other parts of the body." },
        { id: "scc", front: "Squamous cell carcinoma", when: "The second most common type", back: "Develops higher in the epidermis, often on sun-damaged skin. Spread to lymph nodes or other parts is unusual." },
        { id: "bowens", front: "Bowen's disease", when: "Also called SCC in situ", back: "Abnormal cells in the outer layer of skin. If it is not treated, it can sometimes develop into SCC." },
        { id: "melanoma", front: "Melanoma", when: "A different type of skin cancer", back: "Starts in melanocytes. Less common, usually more serious, and treated differently." },
      ],
    },
    sources: [MAC_TYPES, CRUK_BCC, CRUK_SCC, NHS_WHAT, CRUK_ABOUT, MAC_SIGNS, NHS_CAUSES, NHS_SYMPTOMS],
    quiz: {
      question: "What is the most common cause of non-melanoma skin cancer?",
      options: [{ text: "Ultraviolet light from the sun and sunbeds", right: true }, { text: "Scratching the skin" }, { text: "Catching it from someone else" }],
      why: "Ultraviolet light is the most common cause of non-melanoma skin cancer. It comes from the sun and is used in sunbeds.",
    },
  },
  {
    id: "nmsc-treatments",
    kicker: "Treatment",
    question: "What do surgery, creams and the other treatments involve?",
    hook: "Most people need only a small operation. When surgery is not the best choice, freezing, creams, light or radiotherapy can be used instead.",
    short: "Surgery is the main treatment for non-melanoma skin cancer, and most people only have surgery and do not need further treatment. Other treatments include freezing (cryotherapy), creams, photodynamic therapy and radiotherapy, and targeted or immunotherapy drugs are sometimes used if the cancer has spread. The choice depends on the type of skin cancer, its size, where it is and your general health.",
    sections: [
      {
        heading: "How treatment is chosen",
        paragraphs: [
          "The treatment you are offered depends on the type of skin cancer, its size, where it is on the body, the biopsy results, whether you have had skin cancer before and your general health. Your personal wishes matter too.",
          "A team of specialists, called a multidisciplinary team, discusses the best treatment for you. For skin cancer it usually includes a dermatologist, a plastic surgeon, cancer doctors and a skin cancer clinical nurse specialist.",
          "Some GPs have had special training and can diagnose and treat some skin cancers themselves. You may not need any more treatment if an excision biopsy has already removed all the cancer cells.",
        ],
      },
      {
        heading: "Surgery",
        paragraphs: [
          "Surgery is often the first and only treatment needed. Most small skin cancers are removed in a minor operation called an excision, usually under local anaesthetic, and you can go home the same day.",
          "The surgeon removes the cancer and some normal-looking skin around it, which is checked under a microscope to make sure the cancer has been completely removed. If a large area of skin is removed, it may be covered with a skin graft or skin flap.",
          "Curettage and cautery scrapes away a small cancer and uses heat or electricity to stop any bleeding. Cryotherapy freezes the affected skin with liquid nitrogen, which forms a scab that drops off a few weeks later.",
        ],
      },
      {
        heading: "Mohs surgery",
        paragraphs: [
          "Mohs micrographic surgery removes the cancer in thin layers, one at a time, and looks at each layer under a microscope during the operation until no cancer cells can be seen. It makes sure all the cancer is removed, with only a very small amount of healthy tissue.",
          "It may be used for skin cancers on the face, larger ones, ones whose edges are hard to see, or ones that have come back. It takes longer than a standard excision, half a day on average, and waiting lists are usually longer.",
        ],
      },
      {
        heading: "Treatments without surgery",
        paragraphs: [
          "Creams can treat skin cancers that only affect the top layer of skin, such as early superficial BCC: imiquimod, a type of immunotherapy, and fluorouracil, a chemotherapy cream. Photodynamic therapy uses a light-sensitive cream and a bright light to destroy thin skin cancers, and your doctor might suggest it if surgery could cause changes to your appearance.",
          "Radiotherapy uses high-energy x-rays. It may be used instead of surgery if an operation would be difficult or would affect a very visible part of the body, such as the face, or after surgery to reduce the chance of the cancer coming back.",
          "For BCC, non-surgical treatments may not be quite as effective as surgery, and the BCC may be more likely to come back. Your doctor will discuss your options with you, with their benefits and possible side effects.",
        ],
      },
      {
        heading: "If the cancer has spread",
        paragraphs: [
          "Targeted and immunotherapy drugs might be an option for skin cancer that has spread to deeper layers of the skin, nearby lymph nodes or other parts of the body. Cemiplimab is an immunotherapy drug for some locally advanced or advanced SCCs, given as a drip into your bloodstream.",
          "A small number of people with an SCC have surgery to remove some nearby lymph nodes. This is a large operation, and removing lymph nodes can sometimes cause permanent swelling in the area, called lymphoedema.",
        ],
      },
    ],
    helps: [
      "Ask your specialist team to explain the treatments, their benefits and side effects, and to make a treatment plan with you.",
      "Talk to your specialists about any symptoms or side effects that worry you; you do not need to wait for your next check-up.",
      "Before you go home, make sure you know how to look after the wound as it heals.",
      "After a skin graft or skin flap, try to rest for the first 2 weeks, so it has time to heal properly.",
    ],
    tryThisWeek: [
      "Ask for your treatment plan.",
      "Report worrying side effects.",
      "Rest after a graft or flap.",
    ],
    ask: "Why was this treatment chosen for me, and what other options were there?",
    interactive: {
      kind: "flip-cards",
      title: "The treatments, card by card",
      intro: "Turn each card to see when each treatment is used and what it does.",
      cards: [
        { id: "excision", front: "Excision", when: "Most small skin cancers", back: "The cancer and some normal-looking skin around it are cut out, usually under local anaesthetic, on a day visit." },
        { id: "curettage", front: "Curettage and cautery", when: "Small skin cancers", back: "The cancer is scraped away, and heat or electricity stops the bleeding and destroys any cancer cells left." },
        { id: "cryotherapy", front: "Cryotherapy", when: "Small, low-risk skin cancers", back: "Liquid nitrogen freezes the cancer. A scab forms and drops off a few weeks later." },
        { id: "mohs", front: "Mohs surgery", when: "The face, larger or returning cancers", back: "Thin layers are removed and checked under a microscope until no cancer cells can be seen." },
        { id: "creams", front: "Imiquimod or fluorouracil cream", when: "Cancers in the top layer of skin", back: "You put the cream on at home. The skin gets red and sore before it heals." },
        { id: "pdt", front: "Photodynamic therapy", when: "Thin skin cancers", back: "A light-sensitive cream is put on, then a bright light destroys the cancer cells." },
        { id: "radiotherapy", front: "Radiotherapy", when: "When surgery would be difficult", back: "High-energy x-rays, sometimes as a single treatment, or daily on weekdays for a few weeks." },
      ],
    },
    sources: [NHS_TREAT, MAC_TREAT, MAC_SURGERY, CRUK_TREAT, BAD_BCC, BAD_SCC, CRUK_SCC, BAD_MOHS, CRUK_RADIO, CRUK_PDT],
    quiz: {
      question: "How many treatments do most people with non-melanoma skin cancer need?",
      options: [{ text: "Often just surgery", right: true }, { text: "Always several treatments" }, { text: "Always radiotherapy as well" }],
      why: "Surgery is often the first and only treatment needed.",
    },
  },
  {
    id: "nmsc-follow-up",
    kicker: "Follow-up",
    question: "Will I have follow-up appointments, and what happens at them?",
    hook: "Some people have one check-up and are discharged; others are seen for years. It depends on how likely the cancer is to come back.",
    short: "Many people who have surgery for a BCC or an early-stage SCC do not need long-term follow-up at the hospital, and some have a single appointment. People with a higher risk of the cancer coming back have more regular check-ups. Whatever your follow-up, checking your own skin matters, and you do not have to wait for your next visit to report new symptoms.",
    sections: [
      {
        heading: "Why follow-up varies",
        paragraphs: [
          "How often you see your specialist depends on how likely it is for your cancer to come back. Your doctor works this out from the size, depth, type and grade of the cancer, whether you have a weakened immune system and how many skin cancers you have had.",
          "Many people who have surgery for BCCs and early-stage SCCs do not need long-term follow-up hospital appointments. But your doctor may want you to have regular check-ups for a time, to make sure treatment has been successful.",
        ],
      },
      {
        heading: "Lower and higher risk",
        paragraphs: [
          "If you had an early-stage BCC or a low-risk SCC, you might have a single follow-up appointment and then no more. People are usually discharged if their BCC has been treated and the risk of it coming back is low.",
          "If you had an SCC with a high risk of coming back, you might have appointments every 4 to 6 months for at least 5 years, with your GP or specialist. Follow-up may also be offered to people at high risk of several skin cancers, such as people with a weakened immune system.",
        ],
      },
      {
        heading: "At an appointment",
        paragraphs: [
          "At each appointment your doctor examines your skin, and may do a full body skin check. They look for signs of the cancer coming back, which is rare for many early-stage skin cancers, and for any new skin cancer.",
          "They also check for problems after treatment, make sure you know what to look out for and how to protect your skin in the sun, and ask how you are. Sometimes you might have tests, such as a skin biopsy, an ultrasound scan or a CT scan.",
        ],
      },
      {
        heading: "Between appointments",
        paragraphs: [
          "Contact your doctor or specialist nurse if you have any concerns or notice any new symptoms. You do not have to wait until your next visit.",
          "Your clinical nurse specialist is your main point of contact during and after treatment. Your specialist team may also advise you to have regular skin checks with your GP.",
          "If you have been discharged, see your GP if you notice any moles, marks or scabs that are growing, changing, bleeding or not healing, or changes where a BCC was treated before.",
        ],
      },
      {
        heading: "If appointments feel worrying",
        paragraphs: [
          "Many people find their follow-up appointments quite worrying, as a hospital appointment can bring back anxiety about the cancer. It can help to tell someone close to you how you are feeling, and many people find counselling helpful.",
          "You can also call the Cancer Research UK nurses on freephone 0808 800 4040, from 9am to 5pm, Monday to Friday.",
        ],
      },
    ],
    helps: [
      "Ask your doctor how often your check-ups will be, and whether they will be with your GP or a specialist.",
      "Contact your doctor or specialist nurse about any new symptoms; you do not have to wait until your next visit.",
      "Check your skin regularly, using a mirror or asking someone to look at areas you cannot see easily.",
      "See your GP about any changes where your skin cancer was treated.",
      "If follow-up appointments make you anxious, tell someone close to you how you feel.",
    ],
    tryThisWeek: [
      "Ask how often you will be seen.",
      "Report new symptoms now.",
      "Check your skin with a mirror.",
    ],
    ask: "Will I have follow-up appointments, how often, and with whom?",
    interactive: {
      kind: "timeline",
      title: "Follow-up, step by step",
      steps: [
        { id: "plan", when: "After treatment", title: "Your follow-up plan", points: ["How often you are seen depends on how likely the cancer is to come back.", "Some people have a single appointment, then no more."] },
        { id: "visit", when: "At an appointment", title: "A skin check", points: ["Your doctor examines your skin, sometimes all over.", "They check you know what to look for and how to protect your skin."] },
        { id: "between", when: "Between appointments", title: "Report changes", points: ["Contact your doctor or specialist nurse about new symptoms.", "You do not have to wait until your next visit."] },
        { id: "higher", when: "After a higher-risk SCC", title: "Regular check-ups", points: ["Appointments every 4 to 6 months for at least 5 years.", "These may be with your GP or specialist."] },
        { id: "discharged", when: "Once discharged", title: "Keep checking", points: ["See your GP about marks that grow, change, bleed or do not heal.", "Also about changes where a skin cancer was treated."] },
      ],
    },
    sources: [CRUK_FOLLOW, MAC_SKIN, BAD_BCC, BAD_SCC, NHS_TREAT, CRUK_SKINCARE, NHS_TESTS],
    quiz: {
      question: "Do you need to wait for your next appointment to report a new symptom?",
      options: [{ text: "No, contact your doctor or specialist nurse", right: true }, { text: "Yes, always wait" }, { text: "Only if it lasts a year" }],
      why: "Contact your doctor or specialist nurse if you have any concerns or notice any new symptoms. You do not have to wait until your next visit.",
    },
  },
  {
    id: "nmsc-another-one",
    kicker: "Another skin cancer",
    question: "Why can another skin cancer appear, and what lowers the chance?",
    hook: "Sun damage builds up over a lifetime, so one skin cancer can be followed by another. Checking and protecting your skin helps catch any new one early.",
    short: "Once you have had a skin cancer, you have a higher risk of it coming back in the same area, called a recurrence, and of getting another one somewhere else on your skin. This is partly because the sun damage that causes skin cancer takes time to build up. It is rare for early-stage skin cancers to come back, and checking your skin and protecting it from the sun help any new one to be found early.",
    sections: [
      {
        heading: "Two kinds of risk",
        paragraphs: [
          "Once you have had a skin cancer, you have a higher risk of developing it again in the same area. This is called a recurrence, and you are also more at risk of developing another one somewhere else on your skin.",
          "It is possible to have more than one BCC at a time, and having had a BCC in the past increases your risk of getting another. But most non-melanoma skin cancers are treated successfully, and it is rare for early-stage skin cancers to come back.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "UV light from the sun damages the genetic material, or DNA, in skin cells, and over time this damage can cause skin cancer to develop. BCC and SCC are linked to long-term, ongoing sun exposure, for example working outdoors for many years.",
          "The risk of skin cancer increases as you get older, because the cell damage that eventually causes it takes time to build up. Sunbeds and sunlamps use artificial UV rays that also damage the DNA in your skin.",
        ],
      },
      {
        heading: "Who has a higher risk",
        paragraphs: [
          "People with a weakened immune system have a higher risk, including people who take drugs called immunosuppressants after transplant surgery, people with HIV, and people with some blood cancers, such as chronic lymphocytic leukaemia.",
          "Skin that burns easily, past radiotherapy, long-term scarring and some rare genetic conditions, such as Gorlin syndrome, can also raise the risk. If left untreated, actinic keratosis and Bowen's disease may develop into SCC.",
          "If you take drugs that suppress your immune system, the benefit of taking them usually outweighs the risk of developing skin cancer. But it is important to check your skin regularly, tell your GP about any skin changes and protect your skin from the sun.",
        ],
      },
      {
        heading: "What you can do",
        paragraphs: [
          "Treatment of all skin cancers is more straightforward if they are found early, so it is advisable to check your skin for changes once a month. Also see your doctor if there are any changes where you had your original skin cancer.",
          "After treatment for skin cancer, it is even more important to protect yourself from the sun. Never use a sunbed or sunlamp, and if you want to look tanned, use fake tan.",
          "Treating areas of scaly sun damage, such as actinic keratosis and Bowen's disease, may reduce your risk of an SCC. Your specialist will have more information about this.",
        ],
      },
      {
        heading: "Keeping the worry in proportion",
        paragraphs: [
          "Worrying about cancer coming back is common after treatment. Keep an eye on things, but try not to worry too much, and if you are finding it difficult to cope, talk to your cancer team, GP or practice nurse.",
        ],
      },
    ],
    helps: [
      "Check your skin for changes once a month, with a friend or family member helping with areas you cannot easily see.",
      "See your doctor if there are any changes where you had your original skin cancer.",
      "Protect your skin with shade, clothing and sunscreen, and never use a sunbed.",
      "If you take immunosuppressants, check your skin regularly and tell your GP about any changes.",
      "Ask your doctor or specialist nurse to explain the risks in your situation.",
    ],
    tryThisWeek: [
      "Plan a monthly skin check.",
      "Look at your scar for changes.",
      "Use shade, clothing and sunscreen.",
    ],
    ask: "What is my own risk of another skin cancer, and how should I check for one?",
    interactive: {
      kind: "risk-check",
      title: "What raises the risk?",
      intro: "Tick any that apply. Some you can work on, and some you cannot.",
      items: [
        { id: "before", label: "Having had skin cancer before", note: "It could come back in the same place, or develop somewhere else. Check your skin once a month.", changeable: false },
        { id: "age", label: "Getting older", note: "The cell damage that causes skin cancer takes time to build up. Keep checking your skin.", changeable: false },
        { id: "burns", label: "Skin that burns easily", note: "Fair skin, freckles, red or blonde hair, or blue or green eyes. Protect your skin from the sun.", changeable: false },
        { id: "immune", label: "A weakened immune system", note: "Such as after a transplant. Check your skin regularly and tell your GP about changes.", changeable: false },
        { id: "sun", label: "Long-term sun exposure", note: "Use shade, clothing and sunscreen together, especially between 11am and 3pm.", changeable: true },
        { id: "sunbeds", label: "Using sunbeds or sunlamps", note: "They damage the DNA in your skin. Never use one; use fake tan instead.", changeable: true },
        { id: "damage", label: "Untreated scaly sun damage", note: "Treating actinic keratosis and Bowen's disease may reduce your risk of an SCC.", changeable: true },
      ],
    },
    sources: [MAC_SKIN, MAC_CAUSES, CRUK_SKINCARE, CRUK_BCC, BAD_BCC, MAC_SUN, BAD_SCC, MAC_WORRIES],
    quiz: {
      question: "Once you have had a skin cancer, what is true?",
      options: [{ text: "You have a higher risk of getting another one", right: true }, { text: "You can never get another one" }, { text: "Checking your skin no longer matters" }],
      why: "Once you have had a skin cancer, you have a higher risk of developing it again in the same area. This is called a recurrence, and you are also more at risk of developing another one somewhere else on your skin.",
    },
  },
  {
    id: "nmsc-wound-care",
    kicker: "Healing",
    question: "How do I look after the wound and scar while it heals?",
    hook: "Most wounds heal well with a little care. Knowing what is normal, and when to call, makes the first weeks easier.",
    short: "Before you go home, your team explains how to look after your wound and dressing, and stitches that need removing usually come out 5 to 14 days after the operation. Some bleeding, bruising and swelling is normal at first, but tell your doctor or nurse about signs of infection, and if the wound keeps bleeding or the bleeding gets worse, contact the department where you had surgery or go to A&E. Scars are red and noticeable at first, then get paler and less noticeable over time.",
    sections: [
      {
        heading: "Before you go home",
        paragraphs: [
          "Your hospital team will explain how to take care of the wound and the dressing. If necessary, a district nurse can change your dressing at home, or you may go to your GP surgery or back to the hospital to have it changed.",
          "You may have stitches that need to be removed 5 to 14 days after your operation, or once the wound has healed. Sometimes surgeons use dissolvable stitches that do not need to be removed.",
          "If you had a skin graft or skin flap, try to rest for the first 2 weeks after surgery, to give it time to heal properly. Your nurse will give you the phone numbers to contact if you have problems at home.",
        ],
      },
      {
        heading: "The first days",
        paragraphs: [
          "It is important to keep your dressings dry. After Mohs surgery, wait at least 48 hours before having a shower, and if you have a bath, try to keep the dressing out of the water.",
          "A little bleeding and bruising for a few days is normal, and painkillers such as paracetamol and rest help for the first week or so. Avoid strenuous exercise or activity, for as long as your doctor or nurse tells you, to reduce the risk of bleeding.",
          "After a local anaesthetic to the middle or lower part of your face, avoid hot food and drink until the feeling has returned, as there is a risk of burns. Smoking can delay healing after surgery.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Tell your doctor or nurse if you have signs of infection, such as a high temperature, shivering, feeling hot and cold or generally unwell, or swelling, redness, heat, a strong smell or liquid oozing from your wound. Contact your doctor or nurse if swelling gets worse.",
          "If your wound continues to bleed or the bleeding gets worse, contact the department where you had surgery or go to your local A&E department.",
          "After a larger operation, a blood clot can cause a swollen, hot, red or sore area in the leg, or shortness of breath, chest pain, coughing up blood or feeling dizzy. If you have any symptoms of a blood clot at home, contact a doctor immediately, which might be your emergency GP service, or call 999 or go to A&E.",
        ],
      },
      {
        heading: "After freezing treatment",
        paragraphs: [
          "After cryotherapy, the skin may look red, swell or blister, and after a few days a scab forms that takes a few weeks to fall off. Keep the treated area dry for 24 hours, then wash it gently and pat it dry with a soft towel or tissue.",
          "It is important not to pick the scab, as this encourages scarring. Petroleum jelly applied daily can help the area heal and prevent crusting.",
        ],
      },
      {
        heading: "Your scar",
        paragraphs: [
          "You will have a scar, and its size and shape depend on how big the skin cancer was and whether you needed a skin graft or flap. Scars are quite noticeable and red to start with, but they get paler and less noticeable over time.",
          "Some scars can be quite thick and raised, called keloid, and you may have some numbness or tingling in the area, which may get better with time. Talk to your doctor about any worries you have about your scar.",
        ],
      },
    ],
    helps: [
      "Follow your team's advice on looking after your wound and dressing, and keep the dressing dry.",
      "Avoid strenuous exercise or activity for as long as your doctor or nurse tells you.",
      "Tell your doctor or nurse about signs of infection, such as redness, heat, oozing or a high temperature.",
      "If your wound keeps bleeding or the bleeding gets worse, contact the department where you had surgery or go to A&E.",
      "Do not pick a scab after freezing treatment, as this encourages scarring.",
      "Talk to your doctor about any worries you have about your scar.",
    ],
    tryThisWeek: [
      "Keep your dressing dry.",
      "Skip strenuous activity for now.",
      "Leave scabs alone.",
    ],
    ask: "How should I look after my wound, and when will my stitches come out?",
    interactive: {
      kind: "scenarios",
      title: "Healing moments",
      scenarios: [
        {
          id: "infection",
          situation: "Your wound looks red, feels hot and has started to ooze.",
          options: [{ text: "Tell your doctor or nurse", best: true }, { text: "Wait to see if it clears" }],
          why: "Tell your doctor or nurse if you have signs of infection, such as swelling, redness, heat, a strong smell or liquid oozing from your wound.",
        },
        {
          id: "bleeding",
          situation: "Your wound keeps bleeding, and it is getting worse.",
          options: [{ text: "Contact the surgery department or go to A&E", best: true }, { text: "Leave it until your next appointment" }],
          why: "If your wound continues to bleed or the bleeding gets worse, contact the department where you had surgery or go to your local A&E department.",
        },
        {
          id: "shower",
          situation: "It is the morning after your Mohs surgery and you want a shower.",
          options: [{ text: "Wait at least 48 hours and keep the dressing dry", best: true }, { text: "Shower as normal" }],
          why: "It is important to keep your dressings dry. After Mohs surgery, wait at least 48 hours before having a shower.",
        },
        {
          id: "scab",
          situation: "The scab after freezing treatment is itchy and you want to pick it.",
          options: [{ text: "Leave it, and use petroleum jelly", best: true }, { text: "Pick it off to speed things up" }],
          why: "It is important not to pick the scab, as this encourages scarring. Petroleum jelly applied daily can help the area heal.",
        },
      ],
    },
    sources: [MAC_SURGERY, CRUK_PROBLEMS, CRUK_AFTER, BAD_MOHS, BAD_CRYO],
    quiz: {
      question: "How do scars usually change over time?",
      options: [{ text: "They get paler and less noticeable", right: true }, { text: "They get redder" }, { text: "They never change" }],
      why: "Scars are quite noticeable and red to start with, but they get paler and less noticeable over time.",
    },
  },
  {
    id: "nmsc-skin-checks",
    kicker: "Skin checks",
    question: "How do I check my skin each month, and what am I looking for?",
    hook: "A monthly look, a mirror and a few photos help you notice anything new or changing while it is still easy to treat.",
    short: "After a skin cancer, checking your skin for changes once a month is advisable, because treatment of all skin cancers is more straightforward when they are found early. Look for new or changing spots, lumps or patches, sores that bleed, scab or do not heal, and anything itchy, crusty, scaly or painful. A mirror, a friend and photos with a ruler beside them can all help.",
    sections: [
      {
        heading: "Why check",
        paragraphs: [
          "People who have had a BCC have an increased risk of further skin cancers, and treatment of all skin cancers is more straightforward if they are found early. Because of this, it is advisable to check your skin for changes once a month.",
          "To spot skin cancer early, it helps to know how your skin normally looks, so you notice changes more easily. This is very important if you are regularly outside in the sun for work or leisure.",
        ],
      },
      {
        heading: "What to look for",
        paragraphs: [
          "Non-melanoma skin cancers can look very different. They might be a new or changing spot, growth or lump, a sore or area of broken skin, or a red or dark patch.",
          "A lump might be shiny, red, pink or pearly white, sometimes with a pale shiny edge around a dip in the middle like a crater, and small blood vessels on its surface. On brown or black skin, it is more likely to be pearly, brown or black, and a patch might be darker than the skin around it rather than red.",
          "Look out for scaly, red and raised areas that are new, getting bigger, changing, not healing as expected or forming a scab that keeps coming back. A new mole, or a change to a mole or freckle, can be a sign of melanoma.",
        ],
      },
      {
        heading: "How to check",
        paragraphs: [
          "To look at areas you cannot easily see, use a handheld mirror to reflect your skin onto another mirror. Or ask your partner, a friend or a family member to look, for example at your back.",
          "Take a photo of anything that does not look quite right, with a ruler or tape measure next to it. This gives a more accurate idea of its size and can help you tell if it is changing, and you can show the photos to your doctor.",
        ],
      },
      {
        heading: "When to see a doctor",
        paragraphs: [
          "Speak to your GP as soon as possible about an unexplained skin change that grows or bleeds, forms a scab that falls off and grows again, is itchy, crusty, scaly or painful, or does not heal.",
          "Also see a GP if a growth or area of skin hurts, itches, bleeds, crusts or scabs for more than 4 weeks, or if you are concerned about changes where a skin cancer was treated before.",
          "There are many other skin conditions that are not cancer, especially in older people. If it is nothing serious, your GP can reassure you.",
        ],
      },
    ],
    helps: [
      "Check your skin for changes once a month.",
      "Use two mirrors, or ask a partner or friend to check your back and other areas you cannot easily see.",
      "Photograph anything unusual with a ruler beside it, and show the photos to your doctor.",
      "Speak to your GP as soon as possible about a skin change that grows, bleeds, keeps scabbing or does not heal.",
      "See your GP if you are concerned about changes where a skin cancer was treated before.",
    ],
    tryThisWeek: [
      "Do a full skin check this month.",
      "Ask someone to check your back.",
      "Photograph spots with a ruler.",
    ],
    ask: "Can you show me how to check my skin, and which areas need the most attention?",
    interactive: {
      kind: "signs",
      title: "Changes to look for",
      intro: "Tick anything you notice on your skin. Speak to your GP as soon as possible about any of them.",
      signs: ["A new or changing spot, growth or lump", "A sore that bleeds or does not heal", "A scab that falls off and grows again", "A red or dark patch", "Itchy, crusty, scaly or painful skin", "A change where I had skin cancer", "A new mole, or a changing mole"],
      after: "Speak to your GP as soon as possible. A photo with a ruler beside it can help your doctor tell if it is changing.",
      copyHeading: "Skin changes I have noticed",
    },
    sources: [CRUK_SYMPTOMS, BAD_BCC, BAD_SCC, MAC_SIGNS, NHS_SYMPTOMS, MAC_SUN],
    quiz: {
      question: "How often is it advisable to check your skin after a BCC?",
      options: [{ text: "Once a month", right: true }, { text: "Once every 5 years" }, { text: "Only before a holiday" }],
      why: "Because of this, it is advisable to check your skin for changes once a month.",
    },
  },
  {
    id: "nmsc-creams",
    kicker: "Creams",
    question: "What is it like to use imiquimod or fluorouracil cream?",
    hook: "The treated skin gets red and sore before it gets better. That reaction is usually a sign the cream is working.",
    short: "Imiquimod and fluorouracil (5FU) creams can treat skin cancers in the top layer of skin, such as superficial BCC, and you put them on yourself at home. The treated skin usually becomes red, sore and inflamed before it gets better, and it settles in the weeks after the course ends. Protect the area from the sun, and contact your healthcare team if side effects are severe, not improving or getting worse.",
    sections: [
      {
        heading: "Two kinds of cream",
        paragraphs: [
          "Imiquimod cream is a type of immunotherapy: it uses your own immune system to help kill the skin cancer cells. Fluorouracil, or 5FU, is a chemotherapy cream that treats the cancer cells where you spread it, and the rest of your body absorbs very little of the drug.",
          "Doctors only use these creams for cancers affecting the top layer of skin, such as low-risk, thin or superficial BCCs, and also for Bowen's disease and actinic keratosis. They might be an option if you have a low-risk BCC and cannot or do not want to have surgery.",
        ],
      },
      {
        heading: "How you use them",
        paragraphs: [
          "For BCC, you usually put imiquimod on once a day, 5 days a week for 6 weeks, before going to bed. Wash and dry the area, rub in enough cream to cover the cancer and about 1cm around it, and wash it off 8 hours later.",
          "Fluorouracil is usually applied once or twice a day for 3 to 4 weeks, or for 6 weeks when treating superficial BCC. Wash your hands thoroughly after applying it, and avoid skin-to-skin contact of the treated area with other people.",
          "Only cover the area with a plaster or dressing if your healthcare professional tells you to. Hospital staff will show you how to put the cream on, and your team will give you a treatment schedule.",
        ],
      },
      {
        heading: "The skin reaction",
        paragraphs: [
          "Within 3 to 5 days of starting imiquimod, the skin can get red and sore, and it may weep, peel, crack or blister, then scab, itch or burn. This is caused by the abnormal cells dying and shows that the treatment is working, and it tends to be worst in weeks 2 to 3.",
          "Redness and crusting usually settle about 2 weeks after imiquimod is stopped, and skin treated with fluorouracil should heal completely after one to two months. Your doctor or specialist nurse can give you a steroid cream to ease the discomfort if needed.",
          "Some people get flu-like symptoms with imiquimod, such as aches and pains, a mild fever and feeling unwell, and paracetamol can help. If the reaction becomes too much, you can stop the cream for a week or so and restart once the skin is more comfortable.",
        ],
      },
      {
        heading: "When to contact your team",
        paragraphs: [
          "Contact your advice line as soon as possible if side effects are severe, are not getting better or are getting worse. Get in touch with your healthcare professional if you are unsure about the skin reaction or worried about infection.",
          "Stop using imiquimod and contact your healthcare professional immediately if red spots turn into a dot with a circle around it, like a shooting target, or if you have shortness of breath, burning or painful eyes, or mouth sores.",
        ],
      },
      {
        heading: "Other things to know",
        paragraphs: [
          "Both creams make the treated skin more sensitive to sunlight, so protect it with clothing, a hat and sunscreen. Do not use imiquimod if you are spending time in strong sunlight or using sunbeds.",
          "These creams are not used if you are pregnant or breastfeeding. With fluorouracil, use effective contraception during treatment and for some months afterwards, and keep the cream out of reach of children and pets.",
        ],
      },
    ],
    helps: [
      "Follow the treatment schedule your healthcare professional gives you, and ask them to show you how to use the cream.",
      "Wash your hands after putting the cream on.",
      "Protect the treated skin from the sun with clothing, a hat and sunscreen.",
      "Contact your advice line if side effects are severe, are not getting better or are getting worse.",
      "Stop imiquimod and contact your healthcare professional immediately for target-like spots, breathlessness, painful eyes or mouth sores.",
      "Keep fluorouracil cream out of reach of children and pets.",
    ],
    tryThisWeek: [
      "Write down your cream schedule.",
      "Wash your hands after each use.",
      "Cover treated skin in the sun.",
    ],
    ask: "How long should I use my cream, and what reaction should I expect?",
    interactive: {
      kind: "timeline",
      title: "An imiquimod course for BCC",
      steps: [
        { id: "night", when: "Each treatment night", title: "Put the cream on", points: ["Usually 5 nights a week for 6 weeks.", "Cover the cancer and about 1cm around it."] },
        { id: "morning", when: "8 hours later", title: "Wash it off", points: ["Do not shower or bathe while the cream is on.", "Do not put anything else on the skin in that time."] },
        { id: "days", when: "Within 3 to 5 days", title: "The skin reacts", points: ["It can get red and sore, weep, peel or scab.", "This shows the treatment is working."] },
        { id: "worst", when: "Weeks 2 to 3", title: "The reaction peaks", points: ["Paracetamol can help with flu-like symptoms.", "You can pause for a week if it becomes too much."] },
        { id: "after", when: "After the course", title: "The skin settles", points: ["Redness and crusting usually settle in about 2 weeks.", "Moisturiser can soothe the skin if needed."] },
      ],
    },
    sources: [BAD_IMIQ, BAD_5FU, CRUK_IMIQ, CRUK_CHEMO_CREAM, CRUK_BCC, MAC_TREAT],
    quiz: {
      question: "What does redness and soreness from imiquimod usually show?",
      options: [{ text: "That the treatment is working", right: true }, { text: "That the cream has failed" }, { text: "That the cancer has spread" }],
      why: "This is caused by the abnormal cells dying and shows that the treatment is working.",
    },
  },
  {
    id: "nmsc-appearance",
    kicker: "Appearance",
    question: "How might a scar change how I look and feel, and what helps?",
    hook: "Many people have only a small scar. When the change is more visible, there are ways to cover it and people to talk to.",
    short: "Doctors try to minimise the effects of skin cancer treatment on your appearance, and many people have only minor scarring. For some the change is more obvious, such as a scar on the face, and it can affect how you feel about yourself. The effects often improve with time, and talking, camouflage make-up and support from your team can all help.",
    sections: [
      {
        heading: "How treatment can change your skin",
        paragraphs: [
          "Doctors will try to minimise the effects of skin cancer treatments on your appearance, and many people have only minor scarring after treatment. For some people it may be more obvious, such as a skin graft or a scar on a very visible part of the body.",
          "The aim of surgery is to remove the skin cancer safely and with the least amount of scarring. Scars are quite noticeable and red to start with, but they get paler and less noticeable over time.",
          "Some treatments help limit the effect on how you look. Mohs surgery removes only a very small amount of healthy tissue, and photodynamic therapy might be suggested if surgery could cause changes to your appearance.",
        ],
      },
      {
        heading: "How you might feel",
        paragraphs: [
          "If treatment has changed the way you look, you may feel differently about yourself and your body image. Everyone's reactions are different: you may feel more self-conscious but find it manageable, or your concerns may be on your mind a lot of the time.",
          "These changes may affect your self-esteem and how you relate to family, friends and other people. The effects will often improve with time.",
        ],
      },
      {
        heading: "Things that can help",
        paragraphs: [
          "Talking with people you trust can help, such as family, friends, your cancer doctor or nurse, or another person who has been through something similar. If you feel anxious or upset a lot of the time, or think you might be depressed, it is important to talk to someone from your cancer team.",
          "You may want to consider camouflage make-up to cover a scar, and you can talk to your doctor or specialist nurse about it. Skin camouflage uses specialist creams and powders that give heavier coverage than high-street make-up, last longer and come in shades for all skin tones.",
          "Skin camouflage cannot be used on infected, inflamed or broken skin, and it cannot level out raised scars. The charity Changing Faces has information on skin camouflage products and practitioners, and can help with questions through its support line.",
        ],
      },
      {
        heading: "Getting back to things",
        paragraphs: [
          "If you have visible changes, some people may look at you for longer, usually because they are curious and not because they want to upset you. Learning how to cope with social situations in advance will build up your confidence and help you get back to things like work, sports or hobbies.",
          "Take time regularly to do nice things for yourself. Eating healthily, getting enough sleep and being more active are ways of taking care of your body, and even if it looks different, you can feel proud of it getting you through treatment.",
        ],
      },
    ],
    helps: [
      "Talk to your doctor or specialist nurse about any worries you have about your scar.",
      "Ask your doctor or specialist nurse about camouflage make-up to cover a scar.",
      "Talk with people you trust, or with someone who has been through something similar.",
      "If you feel anxious or upset a lot of the time, talk to someone from your cancer team.",
      "Think in advance about how to cope with social situations, to build up your confidence.",
    ],
    tryThisWeek: [
      "Mention scar worries to your nurse.",
      "Ask about camouflage make-up.",
      "Talk to someone you trust.",
    ],
    ask: "What can I expect my scar to look like, and could camouflage make-up help?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        {
          id: "stare",
          situation: "Someone in a shop keeps looking at the scar on your face.",
          options: [{ text: "Remember it is usually curiosity", best: true }, { text: "Stop going out" }],
          why: "Some people may look at you for longer, usually because they are curious and not because they want to upset you. Learning how to cope with social situations in advance will build up your confidence.",
        },
        {
          id: "cover",
          situation: "You would like to cover your scar for a family event.",
          options: [{ text: "Ask your nurse about camouflage make-up", best: true }, { text: "Use it on the wound before it heals" }],
          why: "You may want to consider camouflage make-up to cover a scar. Skin camouflage cannot be used on infected, inflamed or broken skin.",
        },
        {
          id: "mind",
          situation: "Weeks later, worry about how you look is on your mind most of the day.",
          options: [{ text: "Talk to someone from your cancer team", best: true }, { text: "Keep it to yourself" }],
          why: "If you feel anxious or upset a lot of the time, or think you might be depressed, it is important to talk to someone from your cancer team.",
        },
      ],
    },
    sources: [MAC_SKIN, MAC_BODY, CRUK_COPING, CRUK_PROBLEMS, CHANGING_FACES, CRUK_PDT, MAC_SURGERY],
    quiz: {
      question: "How do scars usually change over time?",
      options: [{ text: "They get paler and less noticeable", right: true }, { text: "They get darker and bigger" }, { text: "They never change" }],
      why: "Scars are quite noticeable and red to start with, but they get paler and less noticeable over time.",
    },
  },
  {
    id: "nmsc-sun",
    kicker: "Sun safety",
    question: "How do I protect my skin in the sun from now on?",
    hook: "Shade, clothing and sunscreen work best together. You can still enjoy being outside and going on holiday.",
    short: "After skin cancer it is even more important to protect your skin from the sun, because you have a higher risk of getting another one. Use shade, clothing and sunscreen together: stay in the shade between 11am and 3pm, cover up with a wide-brimmed hat and sunglasses, and use sunscreen of at least SPF 30 with 4 or 5 stars. Never use a sunbed.",
    sections: [
      {
        heading: "Why it matters now",
        paragraphs: [
          "Exposure to UV light from the sun is the main cause of skin cancer. When you have had skin cancer, you are more at risk of developing another, so you should avoid spending too long in the sun.",
          "In the UK, the sun is often strong enough to cause damage between mid-March and mid-October, even when it is cold or cloudy. You can check the UV index on a weather app or website, and if it is 3 or higher, consider protecting your skin.",
        ],
      },
      {
        heading: "Shade and clothing first",
        paragraphs: [
          "The best protection is to cover up and to stay out of direct sunlight, and there is no such thing as a safe suntan. Stay in the shade when you can, especially between 11am and 3pm, when the sun is strongest.",
          "Wear close-weave clothing with long sleeves and trousers, a hat with a wide brim that shades your face and neck, and sunglasses that give 100% UV protection.",
        ],
      },
      {
        heading: "Choosing and using sunscreen",
        paragraphs: [
          "Use a sunscreen with at least SPF 30 and 4 or 5 stars, and your skin cancer specialist might suggest SPF 50. No sunscreen can give 100% protection, and using it does not mean you can safely sunbathe.",
          "Most people do not apply enough: about 6 to 8 teaspoons is enough to cover most adults. Apply it 30 minutes before going out and again just before you go, then reapply every 2 hours and straight after swimming, sweating or towel drying.",
        ],
      },
      {
        heading: "No sunbeds, no tanning",
        paragraphs: [
          "Never use a sunbed or sunlamp. These indoor tanning devices use high levels of the same harmful UV radiation found in sunlight, which damages the DNA in your skin.",
          "A tan does not protect your skin from the sun's harmful effects, and it is a sign of skin damage. If you want to look tanned, use fake tan.",
        ],
      },
      {
        heading: "Holidays and treatment",
        paragraphs: [
          "Wherever you go on holiday, it is always important to protect your skin from the sun, and to check the UV forecast if it is available. Be especially careful if cancer treatment has made your skin more sensitive, because you may burn more easily.",
          "After radiotherapy, protect the skin in the treated area from strong sunshine. Longer term, it may be more sensitive and burn more easily.",
        ],
      },
    ],
    helps: [
      "Stay in the shade between 11am and 3pm, when the sun is strongest.",
      "Cover up with long sleeves, trousers, a wide-brimmed hat and sunglasses.",
      "Use sunscreen of at least SPF 30 with 4 or 5 stars, and reapply it regularly.",
      "Use about 6 to 8 teaspoons of sunscreen to cover your body.",
      "Never use a sunbed or sunlamp; use fake tan if you want to look tanned.",
      "Check the UV index, and protect your skin when it is 3 or higher.",
    ],
    tryThisWeek: [
      "Plan shade from 11am to 3pm.",
      "Pack a wide-brimmed hat.",
      "Buy SPF 30, 4-star sunscreen.",
    ],
    ask: "What sun protection do you recommend for me, and should I use SPF 50?",
    interactive: {
      kind: "scenarios",
      title: "Sunny moments",
      scenarios: [
        {
          id: "cloudy",
          situation: "It is a cloudy day in May and you are gardening all afternoon.",
          options: [{ text: "Still cover up and use sunscreen", best: true }, { text: "Skip it, there is no sun" }],
          why: "In the UK, the sun is often strong enough to cause damage between mid-March and mid-October, even when it is cold or cloudy.",
        },
        {
          id: "cream",
          situation: "You have put on SPF 50 and want to sunbathe at midday.",
          options: [{ text: "Find shade and cover up as well", best: true }, { text: "Stay out, the sunscreen is enough" }],
          why: "No sunscreen can give 100% protection, and using it does not mean you can safely sunbathe.",
        },
        {
          id: "swim",
          situation: "You have just come out of the pool and towelled dry.",
          options: [{ text: "Reapply sunscreen now", best: true }, { text: "Wait until this evening" }],
          why: "Reapply every 2 hours and straight after swimming, sweating or towel drying.",
        },
        {
          id: "tan",
          situation: "You want to look tanned for a wedding.",
          options: [{ text: "Use fake tan", best: true }, { text: "Book a sunbed session" }],
          why: "Never use a sunbed or sunlamp. If you want to look tanned, use fake tan.",
        },
      ],
    },
    sources: [MAC_SUN, CRUK_SKINCARE, NHS_SUN, CRUK_SUNSAFE],
    quiz: {
      question: "What is the best protection from the sun?",
      options: [{ text: "Covering up and staying out of direct sunlight", right: true }, { text: "Sunscreen on its own" }, { text: "Building up a tan" }],
      why: "The best protection is to cover up and to stay out of direct sunlight, and there is no such thing as a safe suntan.",
    },
  },
  {
    id: "nmsc-vitamin-d",
    kicker: "Vitamin D",
    question: "Do I need vitamin D tablets if I avoid the sun?",
    hook: "Covering up protects your skin but can lower your vitamin D. A check, some food and perhaps a supplement can fill the gap.",
    short: "Sunlight is the main source of vitamin D, so covering up and using sunscreen can reduce the amount in your body. If you are not often outdoors or in the sun, ask your specialist doctor or GP to check your vitamin D levels, as you may need supplements if they are low. Everyone should consider a daily 10 microgram supplement during the autumn and winter.",
    sections: [
      {
        heading: "Why it matters",
        paragraphs: [
          "We all need vitamin D to help build and maintain strong bones, teeth and muscles. A lack of vitamin D could cause problems in the long term, such as a bone condition called osteoporosis in adults.",
          "Sunlight is the main source of vitamin D. Avoiding direct sunlight by covering up and using sunscreen can help reduce the risk of skin cancer, but it can also reduce the amount of vitamin D in your body.",
        ],
      },
      {
        heading: "Getting checked",
        paragraphs: [
          "If you are not often outdoors or in the sun, ask your specialist doctor or GP to check your vitamin D levels. You may need to take vitamin D supplements if your levels are low.",
          "People who avoid sun exposure may be at risk of vitamin D deficiency and should have their vitamin D levels checked. Dosing advice can be obtained from your GP.",
        ],
      },
      {
        heading: "Food",
        paragraphs: [
          "You can also get vitamin D from some foods, including oily fish such as mackerel, sardines and salmon, eggs, red meat, and fortified margarine and cereals.",
          "You do not need to sunbathe to get enough vitamin D. But it is difficult for people to get enough vitamin D from food alone.",
        ],
      },
      {
        heading: "Supplements",
        paragraphs: [
          "Between October and early March we do not make enough vitamin D from sunlight, so everyone should consider taking a daily supplement containing 10 micrograms of vitamin D during the autumn and winter.",
          "People who are not often outdoors, or who usually wear clothes that cover up most of their skin when outdoors, are advised to take 10 micrograms a day throughout the year. If you have black or brown skin, you may also not make enough vitamin D from sunlight in the UK.",
          "Do not take more than 100 micrograms of vitamin D a day, as it could be harmful. If your doctor has recommended a different amount, follow their advice.",
        ],
      },
    ],
    helps: [
      "If you are not often outdoors or in the sun, ask your specialist doctor or GP to check your vitamin D levels.",
      "Ask your skin specialist or GP whether you should be taking a supplement.",
      "Include foods with vitamin D, such as oily fish, eggs and fortified cereals.",
      "Consider a daily supplement of 10 micrograms of vitamin D during the autumn and winter.",
      "Do not take more than 100 micrograms a day, and follow your doctor's advice if they recommend a different amount.",
    ],
    tryThisWeek: [
      "Ask about a vitamin D check.",
      "Add oily fish or eggs to meals.",
      "Consider a winter supplement.",
    ],
    ask: "Do I need vitamin D tablets, and could you check my level?",
    interactive: {
      kind: "scenarios",
      title: "Vitamin D moments",
      scenarios: [
        {
          id: "check",
          situation: "You now stay out of the sun most of the time and wonder about vitamin D.",
          options: [{ text: "Ask your specialist doctor or GP to check your levels", best: true }, { text: "Sunbathe now and then to top up" }],
          why: "If you are not often outdoors or in the sun, ask your specialist doctor or GP to check your vitamin D levels.",
        },
        {
          id: "winter",
          situation: "It is November and the days are short.",
          options: [{ text: "Consider a daily 10 microgram supplement", best: true }, { text: "Rely on sunlight" }],
          why: "Between October and early March we do not make enough vitamin D from sunlight, so everyone should consider taking a daily supplement containing 10 micrograms of vitamin D during the autumn and winter.",
        },
        {
          id: "more",
          situation: "You wonder whether taking a lot more would work better.",
          options: [{ text: "Stick to the advised amount", best: true }, { text: "Take as many as you like" }],
          why: "Do not take more than 100 micrograms of vitamin D a day, as it could be harmful. If your doctor has recommended a different amount, follow their advice.",
        },
      ],
    },
    sources: [CRUK_SKINCARE, MAC_SKIN, BAD_BCC, NHS_VITD, CRUK_VITD, MAC_SUN],
    quiz: {
      question: "Do you need to sunbathe to get enough vitamin D?",
      options: [{ text: "No", right: true }, { text: "Yes, every day" }, { text: "Yes, in winter" }],
      why: "You do not need to sunbathe to get enough vitamin D.",
    },
  },
  {
    id: "nmsc-work-outdoors",
    kicker: "Outdoors",
    question: "How do I protect my skin if I work or spend a lot of time outdoors?",
    hook: "Years of sun on the job add up. A few habits at work, and a word with your employer, make a real difference.",
    short: "Basal cell and squamous cell skin cancers are linked to long-term sun exposure, such as working outdoors for many years, so outdoor work and hobbies call for extra care. Keep your top on, wear a hat that covers your ears and neck, take breaks in the shade and use sunscreen of at least SPF 30. Check your skin regularly, and talk to your employer about time off for appointments.",
    sections: [
      {
        heading: "Why outdoor time matters",
        paragraphs: [
          "BCC and SCC are linked to long-term, ongoing sun exposure, for example working outdoors for many years. Outdoor workers, such as builders and farmers, are among the people at greater risk of SCC.",
          "If work keeps you outdoors for a long time, your skin could be exposed to more sun than is healthy for you. People who spend a lot of time in the sun, whether for work or play, are at increased risk of skin cancer if they do not take the right precautions.",
        ],
      },
      {
        heading: "Protecting your skin at work",
        paragraphs: [
          "Keep your top on, and wear a hat with a brim or a flap that covers the ears and the back of the neck. Stay in the shade whenever possible, during your breaks and especially at lunchtime.",
          "Use a high factor sunscreen of at least SPF 30 on any exposed skin, and reapply it regularly, as it can rub, sweat or wash off. Drink plenty of water to avoid dehydration.",
          "Even mild reddening of the skin from the sun is a sign of damage, and a tan is a sign that the skin has been damaged. The sun moves across the sky during the day, so shady spots move too.",
        ],
      },
      {
        heading: "Checking your skin",
        paragraphs: [
          "Check your skin regularly for any unusual moles or spots. See a doctor promptly if you find anything that is changing in shape, size or colour, itching or bleeding.",
          "Getting a partner or friend to look at areas you cannot easily see is very important if you are regularly outside in the sun for work or leisure.",
        ],
      },
      {
        heading: "Work and treatment",
        paragraphs: [
          "You may need time off work for tests, appointments and treatment. If you talk to your employer as soon as possible, you can both agree on what to do, and your manager or HR department can explain the sickness policy.",
          "After Mohs surgery, you can generally go back to work as soon as you feel comfortable, though a week or two off may be desirable after bigger procedures with a skin flap or graft. You can discuss this with your dermatologist and your workplace.",
          "If you have cancer, the law considers this a disability, which protects you from discrimination at work. Your employer may make reasonable adjustments, and the government's Access to Work scheme offers grants and advice to help people keep working.",
        ],
      },
    ],
    helps: [
      "Keep your top on, and wear a hat that covers your ears and the back of your neck.",
      "Take your breaks in the shade whenever possible, especially at lunchtime.",
      "Use sunscreen of at least SPF 30 on any exposed skin, and reapply it regularly.",
      "Drink plenty of water to avoid dehydration.",
      "Check your skin regularly, and see a doctor promptly about anything changing, itching or bleeding.",
      "Talk to your employer as soon as possible about time off for appointments and treatment.",
    ],
    tryThisWeek: [
      "Keep your top on outdoors.",
      "Take breaks in the shade.",
      "Pack SPF 30 for work.",
    ],
    ask: "Is there anything about my job or hobbies that changes how I should protect and check my skin?",
    interactive: {
      kind: "risk-check",
      title: "Outdoors: what adds up?",
      intro: "Tick any that apply to your work or hobbies. Some you can change, and some you cannot.",
      items: [
        { id: "years", label: "Years of working outdoors", note: "BCC and SCC are linked to long-term sun exposure. Check your skin regularly from now on.", changeable: false },
        { id: "skin", label: "Fair or freckled skin that burns", note: "Take particular care, especially if you go red or burn before you tan.", changeable: false },
        { id: "moles", label: "A large number of moles", note: "Take particular care, and check your skin for any unusual moles or spots.", changeable: false },
        { id: "top", label: "Working with your top off", note: "Keep your top on, and wear a hat with a brim or flap over your ears and neck.", changeable: true },
        { id: "breaks", label: "Taking breaks in the sun", note: "Stay in the shade whenever possible, during breaks and especially at lunchtime.", changeable: true },
        { id: "sunscreen", label: "Skipping sunscreen", note: "Use at least SPF 30 on any exposed skin, and reapply it regularly.", changeable: true },
      ],
    },
    sources: [HSE_OUTDOOR, MAC_CAUSES, BAD_SCC, NHS_SUN, CRUK_SYMPTOMS, MAC_WORK, CRUK_SUNSAFE, BAD_MOHS],
    quiz: {
      question: "What does the Health and Safety Executive say a tan is?",
      options: [{ text: "A sign that the skin has been damaged", right: true }, { text: "Protection from skin cancer" }, { text: "A sign of healthy skin" }],
      why: "Even mild reddening of the skin from the sun is a sign of damage, and a tan is a sign that the skin has been damaged.",
    },
  },
  {
    id: "nmsc-mood",
    kicker: "Mood",
    question: "How do I live with the worry after skin cancer?",
    hook: "Feeling anxious is natural, even when the cancer is likely to be cured. Talking, support and a few practical habits help, and urgent help is there if you need it.",
    short: "It is natural to feel anxious or upset after a skin cancer diagnosis, even one that is likely to be cured, and many people find follow-up appointments worrying. Talking to family, friends, your team or a counsellor can help, and you can refer yourself to NHS talking therapies. If you ever feel you cannot keep yourself safe, call 999 or go to A&E, or call Samaritans free on 116 123, any time, day or night.",
    sections: [
      {
        heading: "A natural reaction",
        paragraphs: [
          "There is no right or wrong way to feel about a skin cancer diagnosis. Even if you were diagnosed with a skin cancer that is likely to be cured, you may feel anxious or upset for a while.",
          "You might feel shocked, numb, frightened and uncertain, confused, angry or guilty, or something quite different. Feelings are a natural part of coming to terms with cancer, and they are likely to come and go.",
        ],
      },
      {
        heading: "Worry about another one",
        paragraphs: [
          "Worrying about cancer coming back is common after treatment, and many people find their follow-up appointments quite worrying. Certain things can trigger these feelings, such as going to the hospital for a test or hearing about cancer in the news, but they often get better with time.",
          "Most non-melanoma skin cancers are treated successfully, and it is rare for early-stage skin cancers to come back. So keep an eye on things, but try not to worry too much.",
          "Constantly checking for symptoms or changes can make you feel anxious. If you find yourself doing this, talk to someone from your cancer team or your primary care team.",
        ],
      },
      {
        heading: "What can help",
        paragraphs: [
          "Focusing on what you can control may help, such as getting involved in your recovery, talking about your feelings, finding ways of managing anxiety and stress, knowing what your triggers are and doing activities you enjoy.",
          "Make a list of questions before your appointment, take someone with you, and ask your healthcare team to explain things again if you need them to. Planning enjoyable things around weeks that might be emotionally difficult can help too.",
        ],
      },
      {
        heading: "People to talk to",
        paragraphs: [
          "Talking about your feelings with family, friends, your doctor or nurse can help, and sometimes it is easier to talk to someone who is not directly involved. If you are finding it difficult to cope, your cancer doctor, specialist nurse or GP may be able to refer you to a counsellor.",
          "The Macmillan Support Line is free on 0808 808 00 00, from 8am to 8pm, 7 days a week. The Cancer Research UK information nurses are on freephone 0808 800 4040, Monday to Friday, 9am to 5pm.",
          "You can refer yourself to NHS talking therapies for anxiety and depression without seeing a GP, if you are registered with a GP and aged 18 or over, or 16 or over in some areas.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "For urgent help with your mental health, call 111 and select the mental health option, or ask for an urgent GP appointment. You can call Samaritans free on 116 123, any time, day or night, and you can also text SHOUT to 85258.",
          "Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Talk about how you feel with family, friends, your doctor or nurse.",
      "If you are finding it difficult to cope, ask your cancer doctor, specialist nurse or GP about a counsellor.",
      "Refer yourself to NHS talking therapies for anxiety and depression.",
      "Call the Macmillan Support Line free on 0808 808 00 00.",
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
          id: "appointment",
          situation: "A follow-up appointment is coming up and you cannot stop worrying.",
          options: [{ text: "Tell someone close to you how you feel", best: true }, { text: "Keep it to yourself" }],
          why: "Talking about your feelings with family, friends, your doctor or nurse can help, and sometimes it is easier to talk to someone who is not directly involved.",
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
          why: "Certain things can trigger these feelings, such as hearing about cancer in the news. Knowing what your triggers are and doing activities you enjoy can help.",
        },
      ],
    },
    sources: [MAC_SKIN, CRUK_COPING, MAC_WORRIES, CRUK_FOLLOW, CRUK_SKINCARE, NHS_TESTS, NHS_TALKING, NHS_URGENT, SAMARITANS, NHS_SUICIDAL],
    quiz: {
      question: "Who can you call free, any time, day or night, if you need to talk?",
      options: [{ text: "Samaritans, on 116 123", right: true }, { text: "Nobody is available at night" }, { text: "Only your dentist" }],
      why: "You can call Samaritans free on 116 123, any time, day or night.",
    },
  },
];
