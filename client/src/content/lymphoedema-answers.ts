import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Lymphoedema page's pieces (content/library-conditions/cancer-more.ts,
// `lymphoedema`). Every sentence was written from wording checked on 22 October 2026 on the pages listed
// under each answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS,
// Macmillan Cancer Support, Cancer Research UK and the Lymphoedema Support Network, with Breast Cancer Now for
// one point on causes and Samaritans for the mood answer. The cellulitis answer gives the urgent routes (GP, 111, a 24 hour advice line, 999 and A&E)
// exactly as the NHS, Macmillan and Cancer Research UK state them, and never suggests waiting. The mood
// answer follows safe-messaging guidance. No survival figures and no risk predictions appear anywhere.
// General information only; it never replaces what a person's own lymphoedema or cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/coping/physically/lymphoedema-and-cancer${path}` });
const lsn = (label: string, path: string): LearnSource => ({ label: `Lymphoedema Support Network: ${label}`, url: `https://www.lymphoedema.org/${path}` });

const NHS_LYMPH = nhs("Lymphoedema", "conditions/lymphoedema/");
const NHS_CAUSES = nhs("Lymphoedema: causes", "conditions/lymphoedema/causes/");
const NHS_DIAG = nhs("Lymphoedema: diagnosis", "conditions/lymphoedema/diagnosis/");
const NHS_TREAT = nhs("Lymphoedema: treatment", "conditions/lymphoedema/treatment/");
const NHS_PREVENT = nhs("Lymphoedema: prevention", "conditions/lymphoedema/prevention/");
const NHS_CELLULITIS = nhs("Cellulitis", "conditions/cellulitis/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHS_SUICIDAL = nhs("Help for suicidal thoughts", "mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/");

const MAC_LYMPH = mac("Lymphoedema", "impacts-of-cancer/lymphoedema");
const MAC_RISK = mac("Reducing your risk of lymphoedema", "impacts-of-cancer/lymphoedema/reducing-your-risk-of-lymphoedema");
const MAC_SKIN = mac("Skin care for lymphoedema", "impacts-of-cancer/lymphoedema/skin-care-for-lymphoedema");
const MAC_EXERCISE = mac("Managing lymphoedema with physical activity", "impacts-of-cancer/lymphoedema/managing-lymphoedema-with-exercise");
const MAC_MANAGING = mac("Managing and treating lymphoedema", "impacts-of-cancer/lymphoedema/managing-and-treating-lymphoedema");
const MAC_COMPRESSION = mac("Compression treatment for lymphoedema", "impacts-of-cancer/lymphoedema/compression-to-treat-lymphoedema");
const MAC_DRAINAGE = mac("Lymphatic drainage for lymphoedema", "impacts-of-cancer/lymphoedema/lymphatic-drainage-for-lymphoedema");
const MAC_BODY = mac("Changes to your appearance and body image", "impacts-of-cancer/changes-to-your-appearance-and-body-image");
const MAC_BODY_FEELINGS = mac("Managing your feelings about body changes", "impacts-of-cancer/changes-to-your-appearance-and-body-image/managing-your-feelings-about-body-changes");
const MAC_DEPRESSION = mac("Depression and cancer", "impacts-of-cancer/depression");

const CRUK_LYMPH = cruk("Lymphoedema and cancer", "");
const CRUK_SYMPTOMS = cruk("Symptoms of lymphoedema", "/symptoms");
const CRUK_RISK = cruk("Lowering your risk of lymphoedema", "/lowering-your-risk");
const CRUK_DIAGNOSING = cruk("Diagnosing lymphoedema", "/diagnosing-assessing/diagnosing-tests");
const CRUK_ASSESSING = cruk("Assessing lymphoedema", "/diagnosing-assessing/assessing");
const CRUK_INFECTION = cruk("Infection and lymphoedema", "/infection-lymphoedema");
const CRUK_COPING = cruk("Coping with lymphoedema", "/coping");
const CRUK_SKIN = cruk("Caring for your skin when you have lymphoedema", "/treating/caring-for-your-skin");
const CRUK_EXERCISE = cruk("Exercise, positioning and lymphoedema", "/treating/exercise");
const CRUK_COMPRESSION = cruk("Compression treatment for lymphoedema", "/treating/compression");
const CRUK_MLD = cruk("Manual lymphatic drainage (MLD) for lymphoedema", "/treating/massage-manual-lymphatic-drainage");

const LSN_WHAT = lsn("What is lymphoedema?", "information/what-is-lymphoedema/");
const LSN_RISK = lsn("Think you may be at risk?", "information/think-you-may-be-at-risk/");
const LSN_FAQ = lsn("Your questions answered", "information/your-questions-answered/");
const LSN_DIAGNOSED = lsn("Just diagnosed?", "information/just-diagnosed/");
const LSN_CELLULITIS = lsn("About cellulitis", "cellulitis/about-cellulitis/");

const BCN_LYMPH: LearnSource = { label: "Breast Cancer Now: Lymphoedema", url: "https://breastcancernow.org/about-breast-cancer/treatment/lymphoedema" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const lymphoedemaAnswers: LearnArticle[] = [
  {
    id: "lo-what-it-is",
    kicker: "Understanding",
    question: "What is lymphoedema?",
    hook: "A drainage system runs all through the body. When part of it cannot clear fluid away, the fluid collects and causes swelling.",
    short: "Lymphoedema is a long-term condition that causes swelling in the body's tissues, usually in an arm or leg. It develops when the lymphatic system, which drains excess fluid, does not work properly. It can't be cured, but it can usually be well controlled.",
    sections: [
      {
        heading: "A swelling that lasts",
        paragraphs: [
          "Lymphoedema is a long-term (chronic) condition that causes swelling in the body's tissues. It can affect any part of the body, but usually develops in the arms or legs.",
          "It can also develop in the chest, breast, armpit, back, tummy, genitals, or the head and neck.",
        ],
      },
      {
        heading: "The body's drainage system",
        paragraphs: [
          "The lymphatic system is a network of drainage tubes and small, bean-shaped lymph nodes that runs throughout the body. The lymph nodes you are most likely to know about are under your arm, in your neck and in your groin.",
          "Lymph fluid comes from the tiny blood vessels into the body tissues. It carries away proteins, waste and harmful things such as bacteria, and the lymph nodes filter it before it drains back into the bloodstream.",
          "It is a one-way system with no central pump like the heart. Instead, muscles press on the lymph vessels as they work, which pushes the fluid along.",
        ],
      },
      {
        heading: "Why fluid builds up",
        paragraphs: [
          "Swelling happens when the amount of fluid in an area is greater than the lymphatic system can carry away. The Lymphoedema Support Network likens it to a river that has been dammed, so that flooding occurs.",
          "Blocked, removed or damaged lymph vessels or lymph nodes cause this build-up. In some people it is due to the cancer itself, and in others to treatment such as surgery or radiotherapy to the lymph nodes.",
          "The fluid is in every cell of the area, more like a soaked sponge than a blister, which is why it cannot simply be drained off.",
        ],
      },
      {
        heading: "Primary and secondary",
        paragraphs: [
          "Primary lymphoedema is caused by faulty genes that affect how the lymphatic system develops, and it is rare. Secondary lymphoedema, which is much more common, comes from damage to a lymphatic system that used to work normally.",
          "Lymphoedema is thought to affect more than 200,000 people in the UK.",
        ],
      },
      {
        heading: "Controlled, not cured",
        paragraphs: [
          "Lymphoedema can't be cured, but it can usually be well controlled. Treatment uses ways to limit fluid build-up and help fluid flow through the lymphatic system.",
          "It is important that it is found and treated as soon as possible, because without treatment it can get worse. Most people who develop it go on to lead very full lives and learn to manage it.",
        ],
      },
    ],
    helps: [
      "Ask your cancer doctor or specialist nurse whether you are at risk of lymphoedema.",
      "Ask them to show you how to check for any changes.",
      "Get any swelling checked early, as lymphoedema is easier to control if treated early.",
      "Ask to be referred to your local lymphoedema service for assessment.",
      "Keep moving, as working muscles help push lymph fluid along.",
    ],
    tryThisWeek: [
      "Ask if you are at risk.",
      "Learn how to check for changes.",
      "Get new swelling checked early.",
    ],
    ask: "Am I at risk of lymphoedema, and what changes should I look out for?",
    interactive: {
      kind: "flip-cards",
      title: "The lymphatic system, piece by piece",
      intro: "Turn a card to see what each part does.",
      cards: [
        { id: "fluid", front: "Lymph fluid", when: "In all body tissues", back: "It comes from tiny blood vessels into the tissues, and drains back to the bloodstream through lymph vessels." },
        { id: "vessels", front: "Lymph vessels", when: "All through the body", back: "Tiny tubes in the tissues join up into bigger vessels in the chest and tummy. Some have valves, so lymph flows one way." },
        { id: "nodes", front: "Lymph nodes", when: "Under the arm, in the neck and groin", back: "Small bean-shaped nodes filter the lymph, and make and store white blood cells that help fight infection." },
        { id: "muscles", front: "Muscles", when: "Whenever you move", back: "Working muscles press on the lymph vessels and push the fluid along. This is why exercise matters." },
        { id: "ducts", front: "The main ducts", when: "In the chest", back: "Two main ducts carry lymph into the large blood vessels in the neck. The kidneys then remove the waste in urine." },
      ],
    },
    sources: [NHS_LYMPH, CRUK_LYMPH, MAC_LYMPH, LSN_WHAT, LSN_RISK, NHS_TREAT, NHS_CAUSES],
    quiz: {
      question: "What moves lymph fluid around the body?",
      options: [{ text: "Muscles pressing on the vessels as they work", right: true }, { text: "The heart pumping it" }, { text: "It does not move at all" }],
      why: "It is a one-way system with no central pump like the heart. Instead, muscles press on the lymph vessels as they work, which pushes the fluid along.",
    },
  },
  {
    id: "lo-causes",
    kicker: "Causes",
    question: "Why can lymphoedema follow cancer treatment?",
    hook: "Surgery and radiotherapy that reach the lymph nodes can interrupt the drainage system. Not everyone develops lymphoedema, but knowing the risk helps you spot it early.",
    short: "Lymphoedema can follow cancer treatment when lymph nodes are removed or damaged by surgery or radiotherapy, or when the cancer itself blocks lymph vessels. It can develop months or even years later. Not everyone who has this treatment gets lymphoedema, and doctors plan treatment to protect the lymph nodes where they can.",
    sections: [
      {
        heading: "How treatment interrupts the flow",
        paragraphs: [
          "Surgery to remove lymph nodes interrupts the normal flow of the lymphatic system, so fluid can build up in the area. Lymph nodes and vessels that are removed or damaged can't be replaced.",
          "Radiotherapy can cause the tissue in the treated area to harden, which blocks the flow of lymph fluid. Cancer cells spreading to the lymph nodes, or a cancer pressing on lymph vessels, can also cause a blockage.",
          "Chemotherapy, targeted cancer drugs and immunotherapy are also listed among the treatments that can cause lymphoedema.",
        ],
      },
      {
        heading: "Which treatments carry more risk",
        paragraphs: [
          "There is a particular risk after treatment for any cancer where lymph glands are removed. Cancers where this is more common include breast, head and neck, melanoma skin cancer, gynaecological cancers, prostate and penile cancer, bladder cancer and lymphoma.",
          "The risk is greater if the lymph nodes in the armpit, groin or neck are affected, or if you have had both surgery and radiotherapy to the lymph nodes.",
          "If only 1 or 2 lymph nodes are removed, called a sentinel lymph node biopsy, the risk is lower than if a whole group of nodes is removed. But there is still some risk.",
        ],
      },
      {
        heading: "Where it can appear",
        paragraphs: [
          "Lymphoedema can develop in an arm after surgery or radiotherapy to the armpit, for breast cancer or melanoma. It can develop in a leg if cancer or its treatment affects the lymph nodes in the pelvis or groin.",
          "It can also affect the breast or chest after breast cancer treatment, the pelvic area and genitals after treatment to lymph nodes in the pelvis, and the face, head and neck after treatment to lymph nodes in the neck.",
        ],
      },
      {
        heading: "Other things that add to the risk",
        paragraphs: [
          "Being overweight, or your weight regularly going up and down, can increase the risk. So can a skin infection such as cellulitis in a limb at risk, not being able to move around, an injury such as a deep burn, and blood clots.",
          "Doctors do not know why some people develop lymphoedema and others do not. It is sensible to do what you can to reduce the risk, but it is equally important to live your life fully and not to feel guilty if swelling develops.",
        ],
      },
      {
        heading: "When it can start",
        paragraphs: [
          "Lymphoedema can develop months or even years after cancer treatment. Swelling near the scar in the first few days after an operation is common, and is not the same as lymphoedema.",
          "Your treatment team will let you know if you are at risk from your cancer or its treatment. Wherever possible, doctors plan treatment to try to avoid damage to the lymph nodes.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or specialist nurse whether your cancer or treatment raises your risk.",
      "Try to keep to a healthy weight.",
      "Look after the skin in the area at risk, to lower the chance of infection.",
      "Keep active, as muscle activity helps lymph fluid flow.",
      "Talk to your cancer doctor or specialist nurse if you are worried about any swelling.",
    ],
    tryThisWeek: [
      "Ask about your own risk.",
      "Care for the skin at risk.",
      "Keep active each day.",
    ],
    ask: "Did my treatment affect my lymph nodes, and which part of my body is at risk?",
    interactive: {
      kind: "risk-check",
      title: "What can raise the risk?",
      intro: "Tick any that apply to you. Some can be changed and some cannot.",
      items: [
        { id: "group", label: "A group of lymph nodes removed", note: "Removing a complete group raises the risk. Having just 1 or 2 nodes removed carries a lower risk.", changeable: false },
        { id: "both", label: "Surgery and radiotherapy to the nodes", note: "The risk is greater after both treatments to the lymph nodes.", changeable: false },
        { id: "site", label: "Nodes in the armpit, groin or neck", note: "The risk is greater when these lymph nodes are affected.", changeable: false },
        { id: "weight", label: "Being overweight", note: "The risk increases if you are overweight. Keeping to a healthy weight may help.", changeable: true },
        { id: "infection", label: "A skin infection in the area at risk", note: "Cellulitis can cause swelling. Good skin care helps lower the risk of infection.", changeable: true },
        { id: "moving", label: "Not able to move around much", note: "Not moving makes it harder for lymph fluid to move. Keeping active helps it drain.", changeable: true },
      ],
    },
    sources: [CRUK_LYMPH, MAC_LYMPH, MAC_RISK, NHS_CAUSES, NHS_LYMPH, LSN_RISK, BCN_LYMPH],
    quiz: {
      question: "Which carries a lower risk of lymphoedema?",
      options: [{ text: "Removing just 1 or 2 lymph nodes", right: true }, { text: "Removing a whole group of nodes" }, { text: "Surgery and radiotherapy to the nodes" }],
      why: "If only 1 or 2 lymph nodes are removed, called a sentinel lymph node biopsy, the risk is lower than if a whole group of nodes is removed.",
    },
  },
  {
    id: "lo-signs",
    kicker: "Signs",
    question: "What are the early signs of lymphoedema?",
    hook: "Often the first clue is not swelling at all, but a ring, watch or sleeve that feels tighter than usual.",
    short: "The main sign is swelling in part of the body, which may come and go at first. Clothes, shoes or jewellery may feel tighter, and the area may feel heavy, tight, full or achy. If you know you are at risk and notice any of these, contact your doctor or specialist nurse, because early treatment helps stop it getting worse.",
    sections: [
      {
        heading: "Before you see swelling",
        paragraphs: [
          "Your clothing, shoes or jewellery, such as rings or watches, may feel tighter than usual, even before you notice any swelling. You might have marks or dents where clothes dig into the skin.",
          "The limb, or part of it, may feel heavy, tight, full or stiff. You may feel some discomfort or aching where the swelling is, or a tingling feeling.",
        ],
      },
      {
        heading: "How the swelling behaves",
        paragraphs: [
          "At first, the swelling may be soft and easy to push in, leaving a dent, and it may come and go. It may get worse during the day and go down overnight.",
          "The normal shape of the limb may be less noticeable. You may not be able to see the tendons or knuckles on your hand, or your ankle bone may look less prominent.",
          "The skin in the area may feel tight, stretched or thicker. It might also be dry, cracked and less stretchy.",
        ],
      },
      {
        heading: "In other parts of the body",
        paragraphs: [
          "In the head and neck, signs can include swelling or heaviness in the face, mouth or throat, and problems with swallowing and speech.",
          "In the genital area, lymphoedema can cause a feeling of heaviness and discomfort. Clothing may not fit like before, and the skin can feel itchy.",
        ],
      },
      {
        heading: "Swelling after surgery",
        paragraphs: [
          "It is usual to have some swelling around the surgical site after an operation. It is part of healing, and usually settles down around six weeks after surgery.",
          "Let your nurse or doctor know if the swelling does not go down, or goes down and then comes back.",
        ],
      },
      {
        heading: "What to do",
        paragraphs: [
          "If you know you are at risk and have any symptoms, contact your doctor or specialist nurse. Early treatment can help control swelling and stop it getting worse, and they can refer you to a lymphoedema specialist.",
          "If you no longer have follow-up appointments at the hospital, see your GP as soon as you notice any swelling. Developing lymphoedema does not usually mean the cancer has come back, but it is always important to report any change.",
          "Swelling, aching and redness in an arm or leg can also be signs of a blood clot. Tell your doctor or nurse straight away if you have these, and if you cannot speak to them, call the NHS urgent advice number, 111.",
        ],
      },
    ],
    helps: [
      "Notice if rings, watches, clothes or shoes start to feel tighter.",
      "Ask your nurse to show you how to check for changes.",
      "Contact your doctor or specialist nurse as soon as you notice any of the signs.",
      "See your GP about new swelling if you no longer have hospital follow-up.",
      "Tell your doctor or nurse straight away about swelling, aching and redness, or call 111 if you cannot speak to them.",
    ],
    tryThisWeek: [
      "Notice if rings or clothes feel tight.",
      "Learn how to check for changes.",
      "Report new swelling early.",
    ],
    ask: "Which signs should I look for in the part of my body at risk, and who do I contact if I notice them?",
    interactive: {
      kind: "signs",
      title: "Early signs to report",
      intro: "Tick any you have noticed in the area at risk. Contact your doctor or specialist nurse about them.",
      signs: [
        "Rings, watches or clothes feel tighter",
        "Marks or dents where clothes dig in",
        "A heavy, tight or full feeling",
        "Aching or discomfort",
        "A tingling feeling",
        "Skin that feels tight, thick or dry",
        "Swelling that comes and goes",
        "Swelling after surgery that does not settle",
      ],
      after: "Swelling, aching and redness can also be signs of a blood clot. Tell your doctor or nurse straight away, or call 111 if you cannot speak to them.",
      copyHeading: "Changes I have noticed",
    },
    sources: [MAC_LYMPH, CRUK_SYMPTOMS, NHS_LYMPH, LSN_RISK, CRUK_DIAGNOSING],
    quiz: {
      question: "What may be an early sign of lymphoedema, even before swelling?",
      options: [{ text: "A ring or watch feeling tighter than usual", right: true }, { text: "Feeling hungrier than usual" }, { text: "A sore throat" }],
      why: "Your clothing, shoes or jewellery, such as rings or watches, may feel tighter than usual, even before you notice any swelling.",
    },
  },
  {
    id: "lo-diagnosis",
    kicker: "Diagnosis",
    question: "How is lymphoedema diagnosed and measured?",
    hook: "Usually it takes a careful look, some questions and a tape measure. Scans are only needed if the cause is unclear.",
    short: "In many cases lymphoedema can be diagnosed from your symptoms, your medical history and an examination, including measuring around the limb. A lymphoedema specialist then does a full assessment to plan your treatment. Tests are sometimes used to rule out other causes of swelling, such as a blood clot.",
    sections: [
      {
        heading: "Getting checked",
        paragraphs: [
          "Speak to your doctor or specialist nurse if you have swelling that could be caused by cancer or its treatment. They will examine you, ask about other symptoms and go over your medical history.",
          "This helps rule out other causes of swelling, such as blood clots. For many people, an examination and medical history are all that is needed.",
          "If they think you have lymphoedema, they will refer you to a lymphoedema specialist. This may be a nurse, doctor, physiotherapist, occupational therapist or manual lymph drainage specialist. In a few centres, you can refer yourself.",
        ],
      },
      {
        heading: "A full assessment",
        paragraphs: [
          "The specialist will confirm the diagnosis and assess how much the lymphoedema is affecting you. They check your skin, the size and shape of the area, how the tissue feels under the skin, and your movement and ability to do everyday things.",
          "They may press a finger on the skin to see if it leaves a temporary dent, called pitting oedema. They usually describe how severe it is as a stage, from 0, when someone is at risk but has no swelling, to 3, when there is a lot of swelling.",
        ],
      },
      {
        heading: "Measuring the swelling",
        paragraphs: [
          "The most common way to measure is with a tape measure. The specialist measures around the limb at regular intervals and compares it with the other limb.",
          "Other ways include an infrared beam that measures the outline of the limb, called perometry, and placing the limb in water to measure how much water it displaces. In bioimpedance testing, small discs on the skin give a small, painless electric charge that can show fluid in the tissues.",
          "Photos may also be taken to compare before and after. It is more difficult to measure lymphoedema in the head, neck, chest, breast or genital areas.",
        ],
      },
      {
        heading: "Tests, and keeping track",
        paragraphs: [
          "Further tests are not usually needed. Scans such as ultrasound, CT or MRI may be used if the cause is uncertain, or to check that cancer is not causing the swelling, and blood tests can check your general health.",
          "The size of the swollen area can change from day to day, so one measurement does not necessarily show whether treatment is working. It can help to keep a progress chart of your measurements each time.",
        ],
      },
    ],
    helps: [
      "Speak to your doctor or specialist nurse about any swelling that could be linked to your cancer treatment.",
      "Ask to be referred to a lymphoedema specialist.",
      "Ask whether your local lymphoedema centre lets you refer yourself.",
      "Keep a progress chart of your measurements.",
      "Talk to your specialist about any changes, rather than focusing on single measurements.",
      "Call the Lymphoedema Support Network on 020 7351 4480 to find your nearest service.",
    ],
    tryThisWeek: [
      "Ask for a specialist referral.",
      "Start a measurement chart.",
      "Find your nearest service.",
    ],
    ask: "Can you refer me to a lymphoedema specialist, and how will my swelling be measured?",
    interactive: {
      kind: "flip-cards",
      title: "Ways to measure swelling",
      intro: "Turn a card to see how each way works.",
      cards: [
        { id: "tape", front: "Tape measure", when: "The most common way", back: "Measurements around the limb at regular intervals are compared with the other limb." },
        { id: "perometry", front: "Perometry", when: "For an arm or leg", back: "An infrared light measures the outline of the limb to work out the size of the swollen area." },
        { id: "bioimpedance", front: "Bioimpedance", when: "Small discs on the skin", back: "A small, painless electric charge measures resistance in the tissue, to work out the amount of swelling." },
        { id: "water", front: "Water displacement", when: "The limb in a bowl of water", back: "The water the limb displaces is measured to work out its size." },
        { id: "scans", front: "Ultrasound, CT or MRI", when: "If the cause is unclear", back: "Scans can help show what is causing swelling, and check for other causes such as a blood clot or cancer." },
      ],
    },
    sources: [NHS_DIAG, CRUK_DIAGNOSING, CRUK_ASSESSING, MAC_LYMPH, LSN_FAQ],
    quiz: {
      question: "What is the most common way to measure lymphoedema?",
      options: [{ text: "With a tape measure", right: true }, { text: "With a blood test" }, { text: "With an MRI scan" }],
      why: "The most common way to measure is with a tape measure.",
    },
  },
  {
    id: "lo-compression",
    kicker: "Treatment",
    question: "How do compression garments help, and how do I wear them?",
    hook: "A well-fitted sleeve or stocking gives your muscles something firm to work against, so fluid keeps moving out of the swollen area.",
    short: "Compression garments, such as sleeves, stockings, gloves or bras, put even, firm pressure on the swollen area. This limits fluid build-up and helps muscles pump fluid away. They need to be measured and fitted by a trained specialist, and should feel firm but never painful, numb or tingly.",
    sections: [
      {
        heading: "How compression works",
        paragraphs: [
          "Compression puts even but firm pressure on the swollen area. This limits lymph fluid build-up and helps the fluid move to an area that is draining well.",
          "The garment also acts as a counterforce for the muscles to work against. The combination of exercise and compression encourages fluid to move out of the affected limb.",
          "Compression garments help stop lymphoedema getting worse and can reduce mild to moderate swelling. With severe lymphoedema, a specialist will usually recommend multi-layered bandaging first.",
        ],
      },
      {
        heading: "Getting the right garment",
        paragraphs: [
          "Depending on where the swelling is, you may be fitted with a sleeve, stocking, glove or toe caps, a compression bra or vest, or a garment for the genital area. Velcro wraps can be used instead, and may be easier to put on.",
          "Garments come in different grades of pressure, and someone experienced measures and fits them. Do not be tempted to buy your own: a trained therapist first needs to assess and measure you.",
          "Your GP can prescribe garments, usually on the advice of your lymphoedema specialist. Some people are exempt from prescription charges, such as when lymphoedema is due to cancer or its treatment.",
        ],
      },
      {
        heading: "Putting it on",
        paragraphs: [
          "Put your garment on first thing in the morning, when the limb is at its smallest. Wait a short while after a bath or shower, as damp skin makes it harder to put on.",
          "Fold the garment back on itself, ease it up a bit at a time, and smooth out any creases. Wearing rubber gloves can make it easier. Do not pull it up by the top, or roll the top over.",
          "It is usually worn all day and taken off at night. Moisturise your skin at night after you take it off. You usually need to wear it when you exercise, but not when swimming.",
        ],
      },
      {
        heading: "When it is not right",
        paragraphs: [
          "Your garment should be comfortable and should not cause pain, numbness or tingling, or change the colour of your fingers or toes. If it does, take it off straight away and contact your lymphoedema specialist.",
          "You should usually avoid wearing one if the skin is fragile, damaged or leaking fluid, or if you have cellulitis in the area. Always take advice from your lymphoedema specialist.",
          "If it feels very uncomfortable at first, you could try wearing it when you are most active and build up the time. If you still find it difficult, ask your specialist to check the fit.",
        ],
      },
      {
        heading: "Looking after your garments",
        paragraphs: [
          "You will get at least 2 garments, so you can wear one while the other is in the wash. They usually last longer if you wash them by hand, and should be dried flat away from direct heat, without fabric softener.",
          "Each garment should last 3 to 6 months if worn every day, and your specialist will measure you again before you get replacements. If your weight changes, you will need measuring again, because a garment that is too loose will not control swelling and one that is too tight restricts blood flow.",
          "In hot weather, cotton-rich garments can help, and you can cool your spare garment in a plastic bag in the fridge, not the freezer.",
        ],
      },
    ],
    helps: [
      "Wear your garment as your specialist advises, usually all day.",
      "Put it on first thing in the morning, when the limb is at its smallest.",
      "Use rubber gloves to ease it on and smooth out creases.",
      "Take it off and contact your specialist if you get pain, numbness, tingling or colour changes.",
      "Ask to be measured again if your weight changes or the garment no longer fits.",
      "Keep 2 garments, so one can be washed while you wear the other.",
    ],
    tryThisWeek: [
      "Put it on first thing.",
      "Use rubber gloves to help.",
      "Check for numbness or tingling.",
    ],
    ask: "Is my garment the right fit and pressure, and when should it be replaced?",
    interactive: {
      kind: "scenarios",
      title: "Living with your garment",
      scenarios: [
        {
          id: "tingling",
          situation: "Your fingers start tingling and change colour while you wear your sleeve.",
          options: [{ text: "Take it off and contact your specialist", best: true }, { text: "Keep it on and hope it passes" }],
          why: "If it causes pain, numbness or tingling, or changes the colour of your fingers or toes, take it off straight away and contact your lymphoedema specialist.",
        },
        {
          id: "shower",
          situation: "You want to put your stocking on straight after a shower.",
          options: [{ text: "Wait a short while until your skin is dry", best: true }, { text: "Pull it on while your skin is damp" }],
          why: "Wait a short while after a bath or shower, as damp skin makes it harder to put on.",
        },
        {
          id: "hot",
          situation: "It is a hot summer day and your garment feels uncomfortable.",
          options: [{ text: "Cool your spare garment in the fridge", best: true }, { text: "Leave it off for the summer" }],
          why: "In hot weather, cotton-rich garments can help, and you can cool your spare garment in a plastic bag in the fridge, not the freezer.",
        },
        {
          id: "weight",
          situation: "You have lost weight and your sleeve now feels loose.",
          options: [{ text: "Ask to be measured again", best: true }, { text: "Keep wearing it as it is" }],
          why: "If your weight changes, you will need measuring again, because a garment that is too loose will not control swelling.",
        },
      ],
    },
    sources: [MAC_COMPRESSION, CRUK_COMPRESSION, NHS_TREAT, LSN_FAQ, LSN_DIAGNOSED, MAC_EXERCISE],
    quiz: {
      question: "When is the best time to put on a compression garment?",
      options: [{ text: "First thing in the morning", right: true }, { text: "Just before bed" }, { text: "Straight after a hot bath" }],
      why: "Put your garment on first thing in the morning, when the limb is at its smallest.",
    },
  },
  {
    id: "lo-skin-care",
    kicker: "Skin care",
    question: "Why does skin care matter so much with lymphoedema?",
    hook: "A tiny scratch can let in the bacteria that cause cellulitis, and infection can make swelling worse. A few minutes of care each day lowers the risk.",
    short: "The area affected by lymphoedema is more vulnerable to infection, and an infection such as cellulitis can damage the lymphatic system further and make swelling worse. Keeping the skin clean, moisturised and unbroken helps prevent this. Treat any cut or bite straight away, and contact your doctor about any sign of infection.",
    sections: [
      {
        heading: "Why skin matters",
        paragraphs: [
          "If you have lymphoedema or are at risk of it, you are at risk of a skin infection called cellulitis. Any cuts in the skin can let bacteria in.",
          "An injury or infection can make the swelling worse, because it can cause more damage to the lymphatic system. Keeping your skin healthy, unbroken and well moisturised helps prevent this.",
          "Lymphoedema can make your skin dry and itchy, which makes cracks and breaks in the skin more likely.",
        ],
      },
      {
        heading: "A simple daily routine",
        paragraphs: [
          "Wash your skin every day with warm water, and use a soap substitute if your skin is dry. Dry it gently and carefully, especially in skin folds and between your fingers and toes.",
          "Moisturise every day. You can usually apply moisturiser at night, after you take off your compression garment. When you put it on, make the last stroke downwards, in the direction of hair growth.",
          "Check your skin each day for redness or injury, such as scratches or bites. If your lower limbs are affected, treat fungal infections such as athlete's foot quickly.",
        ],
      },
      {
        heading: "Protecting against cuts, bites and burns",
        paragraphs: [
          "Wear gloves, long sleeves or long trousers for jobs such as gardening, cleaning, DIY or cooking, and oven gloves if your arm is affected. Take care around pets that might scratch.",
          "Use an insect repellent, and protect your skin from the sun with clothing, shade and a high-factor sunscreen. Use nail clippers rather than scissors, and an electric shaver rather than a razor, waxing or plucking.",
          "If your leg is affected, wear shoes that fit well and avoid going barefoot. Tell a chiropodist you have lymphoedema if you need help with your toenails.",
        ],
      },
      {
        heading: "If the skin is broken",
        paragraphs: [
          "Treat a cut, graze, burn or bite as soon as you can, even if it is small. Wash and dry the area thoroughly, put antiseptic cream on it and cover it if needed.",
          "Try not to scratch an insect bite. Speak to your GP if broken skin does not heal or shows any sign of infection.",
          "Contact your doctor or specialist nurse immediately if the area becomes swollen, sore, red and hot, or you feel unwell and have a temperature of 37 and a half degrees or above, or below 36 degrees. You might have an infection.",
        ],
      },
      {
        heading: "Heat, needles and tattoos",
        paragraphs: [
          "Very hot baths and showers, saunas, steam rooms and hot tubs may make swelling worse, so use them only for a short time and check the area for changes. Always test the water temperature first.",
          "Tell any healthcare professional about your lymphoedema, so they can try to avoid needles or blood pressure readings in the affected area. They may still need to use it in an emergency. It is best to avoid tattoos or acupuncture on the affected area.",
        ],
      },
    ],
    helps: [
      "Wash and dry your skin carefully every day, including skin folds and between fingers and toes.",
      "Moisturise the area every day.",
      "Check your skin each day for redness, scratches or bites.",
      "Wear gloves for gardening, cleaning and DIY.",
      "Clean any cut or bite straight away, apply antiseptic cream and cover it.",
      "Contact your doctor or specialist nurse immediately if the area becomes red, hot, sore or more swollen.",
    ],
    tryThisWeek: [
      "Moisturise every day.",
      "Check your skin each day.",
      "Wear gloves for chores.",
    ],
    ask: "Which moisturiser and soap substitute would suit my skin?",
    interactive: {
      kind: "timeline",
      title: "A day of skin care",
      steps: [
        { id: "morning", when: "Morning", title: "Wash and dry", points: ["Wash with warm water, and a soap substitute if your skin is dry.", "Dry carefully in skin folds and between fingers and toes."] },
        { id: "out", when: "Out and about", title: "Protect", points: ["Use insect repellent and a high-factor sunscreen.", "Wear gloves for gardening, cleaning and DIY."] },
        { id: "cut", when: "If you get a cut", title: "Treat it straight away", points: ["Wash and dry it, add antiseptic cream and cover it.", "Speak to your GP if it does not heal or looks infected."] },
        { id: "evening", when: "Evening", title: "Moisturise and check", points: ["Take off your compression garment and moisturise.", "Check your skin for redness, scratches or bites."] },
      ],
    },
    sources: [MAC_SKIN, CRUK_SKIN, NHS_PREVENT, CRUK_INFECTION, LSN_DIAGNOSED, CRUK_RISK],
    quiz: {
      question: "What should you do with a small cut on the affected area?",
      options: [{ text: "Wash, dry, add antiseptic cream and cover it", right: true }, { text: "Leave it, as it is only small" }, { text: "Cover it with your compression garment" }],
      why: "Treat a cut, graze, burn or bite as soon as you can, even if it is small.",
    },
  },
  {
    id: "lo-massage",
    kicker: "Treatment",
    question: "What is lymphatic drainage massage, and can I do it myself?",
    hook: "It is far gentler than an ordinary massage. The trick is to clear a path in the healthy area first, so fluid from the swelling has somewhere to go.",
    short: "Manual lymphatic drainage (MLD) is a specialised, gentle massage done by a trained therapist to move fluid from the swollen area into lymph nodes that work well. Simple lymphatic drainage (SLD) is a version you can learn to do yourself. Learn it from a lymphoedema specialist before you start, and do not have other types of massage on the affected area.",
    sections: [
      {
        heading: "A very gentle massage",
        paragraphs: [
          "Lymphatic drainage is a specialised, gentle type of medical massage. It aims to move lymph fluid away from the swollen area and through healthy lymph vessels, which helps control swelling.",
          "The skin movements are very light, slow and rhythmic, so you feel only a gentle pressure. You should not have other types of massage on the affected area.",
        ],
      },
      {
        heading: "Manual lymphatic drainage (MLD)",
        paragraphs: [
          "MLD should only be done by a specially trained therapist. They begin by treating lymph nodes that are not affected, which frees up space for fluid from the swollen area to drain into.",
          "It might seem strange to have skin movements on your chest and neck if your arm is swollen. But it means the fluid has somewhere to drain to when the therapist treats your arm.",
          "NHS lymphoedema clinics often give short courses of MLD, but it is not available at all centres. It can be particularly useful where compression is hard to use, such as the head and neck or genitals.",
        ],
      },
      {
        heading: "Simple lymphatic drainage (SLD)",
        paragraphs: [
          "SLD is a simpler version of MLD that you, or a carer, can learn to do at home and continue long term. Learn it from a lymphoedema specialist before you start.",
          "You usually massage only the areas where you do not have swelling, to make space for the fluid to drain into. You do not use oils or creams, and you always move the skin in the direction away from the swelling.",
          "The usual routine is twice a day, for about 20 minutes each time, though this can vary. If your skin is red when you have finished, the movement is too much.",
        ],
      },
      {
        heading: "Breathing first",
        paragraphs: [
          "Deep breathing exercises before and after MLD and SLD can help lymphatic drainage. They work by changing the pressure in your tummy and chest, which encourages lymph to flow back into the blood.",
          "Sit or lie comfortably, rest your hands on your ribs, and breathe in slowly so your tummy rises under your hands. Breathe out slowly as it relaxes. Do this five times, then rest briefly before getting up, to avoid feeling dizzy.",
        ],
      },
      {
        heading: "When not to have it",
        paragraphs: [
          "You might not be able to have MLD or SLD if you have an infection or inflammation in the swollen area, a blood clot, heart problems or cancer in the area. Your lymphoedema specialist will tell you, so always check with them if you are not sure.",
        ],
      },
    ],
    helps: [
      "Learn SLD from a lymphoedema specialist before you try it.",
      "Do your deep breathing exercises before you start.",
      "Use only light pressure, as your specialist taught you, and follow their instructions.",
      "Avoid other types of massage on the affected area.",
      "Check with your specialist before MLD or SLD if you have an infection, a blood clot or heart problems.",
      "Ask the Lymphoedema Support Network on 020 7351 4480 about finding a qualified MLD therapist.",
    ],
    tryThisWeek: [
      "Ask to learn SLD.",
      "Practise deep breathing first.",
      "Keep the pressure light.",
    ],
    ask: "Would MLD help me, and can you teach me or a relative simple lymphatic drainage?",
    interactive: {
      kind: "flip-cards",
      title: "Ways to help fluid drain",
      intro: "Turn a card to see who does it and how it helps.",
      cards: [
        { id: "mld", front: "Manual lymphatic drainage", when: "A course from a trained therapist", back: "Light, slow, rhythmic skin movements clear healthy areas first, so fluid has somewhere to drain." },
        { id: "sld", front: "Simple lymphatic drainage", when: "At home, usually twice a day", back: "A version you learn from a specialist. You move the skin away from the swelling, without oils or creams." },
        { id: "breathing", front: "Deep breathing", when: "Before and after MLD or SLD", back: "Slow breaths into the tummy change the pressure in the chest and tummy, which helps lymph flow." },
        { id: "after", front: "Compression afterwards", when: "After MLD", back: "Bandaging or a compression garment helps keep the swelling down after treatment." },
      ],
    },
    sources: [MAC_DRAINAGE, CRUK_MLD, NHS_TREAT, LSN_FAQ, CRUK_EXERCISE],
    quiz: {
      question: "Where do you usually massage when doing SLD?",
      options: [{ text: "The areas where you do not have swelling", right: true }, { text: "Firmly over the swollen area" }, { text: "Anywhere, with plenty of oil" }],
      why: "You usually massage only the areas where you do not have swelling, to make space for the fluid to drain into.",
    },
  },
  {
    id: "lo-exercise",
    kicker: "Moving more",
    question: "Is exercise safe with lymphoedema, and which exercises help?",
    hook: "Moving is one of the main treatments. Working muscles squeeze the lymph vessels and push fluid on its way.",
    short: "Movement and exercise help lymph move through the lymphatic system and can help reduce swelling, and the evidence suggests exercise doesn't cause or worsen lymphoedema. Talk to your doctor or lymphoedema specialist before you start, begin gently and wear your compression garment. Stop and get advice if the swelling changes.",
    sections: [
      {
        heading: "Why moving helps",
        paragraphs: [
          "Exercise makes the muscles contract, which pushes lymph through the lymph vessels and might help reduce swelling. It also helps you keep a full range of movement and keep to a healthy weight.",
          "NICE made recommendations about exercise for people who have, or are at risk of, lymphoedema after breast cancer. The evidence suggests that exercise doesn't cause or worsen lymphoedema.",
          "Physical activity can also help you feel better about yourself and reduce stress and anxiety.",
        ],
      },
      {
        heading: "Before you start",
        paragraphs: [
          "Talk to your doctor or lymphoedema specialist before you start any exercise. They can tell you what you should and shouldn't do, and your lymphoedema care team can help plan exercises for you.",
          "Start gently and build up slowly. Walking is a good way to begin, and swimming, aqua aerobics, yoga, Pilates, tai chi and cycling can all help.",
          "Wear your compression garment when you exercise, unless you are swimming. Let your instructor know about your lymphoedema, as you may need to adjust your programme.",
        ],
      },
      {
        heading: "Simple exercises",
        paragraphs: [
          "For an arm, sit with your arm supported on a cushion or pillow. Make a fist and then stretch your fingers out, bend and straighten your elbow, and slowly circle your shoulders forwards and then backwards.",
          "For a leg, sit with your leg supported. Pull your toes up and point them down, then slowly bend and straighten your knee. Cancer Research UK suggests repeating each exercise 5 to 10 times.",
          "These exercises shouldn't be painful, though a feeling of stretching is normal. Start with some deep breathing, which also helps lymph flow.",
        ],
      },
      {
        heading: "Resting in a helpful position",
        paragraphs: [
          "When you sit with arm lymphoedema, raise your arm to a comfortable level on a cushion or pillow. Try not to keep it in the same position for too long.",
          "With leg lymphoedema, try not to sit with your legs down. Lie up on the sofa or rest your leg on a stool, fully supported under the knee, and get up and move about at least once an hour if you can.",
          "With head and neck lymphoedema, sleeping with your head slightly raised, such as on 2 or 3 pillows, helps the fluid drain.",
        ],
      },
      {
        heading: "When to stop",
        paragraphs: [
          "Check the area during and after exercise. If you notice any changes or have any concerns, stop and contact your lymphoedema specialist.",
          "Swelling may increase if you exercise too quickly, too often or for too long, and your skin may become red, sticky and hot. If this happens, stop and rest, and next time try doing a little less, then build up gradually.",
          "Do not exercise if you have a skin infection such as cellulitis, until you feel better.",
        ],
      },
    ],
    helps: [
      "Talk to your doctor or lymphoedema specialist before you start.",
      "Start gently and build up slowly, with walking as a good first step.",
      "Wear your compression garment when you exercise, unless you are swimming.",
      "Raise a swollen arm or leg on a cushion or stool when you rest.",
      "Stop and contact your specialist if the area changes during or after exercise.",
      "Do not exercise while you have cellulitis.",
    ],
    tryThisWeek: [
      "Ask what exercise is safe.",
      "Take a gentle walk.",
      "Rest the limb raised.",
    ],
    ask: "Which exercises would help my lymphoedema, and is there anything I should avoid?",
    interactive: {
      kind: "signs",
      title: "Stop and check",
      intro: "Stop exercising if you notice any of these. Tick any that have happened to you.",
      signs: [
        "The swelling gets worse",
        "Pain or aching in the area",
        "Skin becomes red, sticky or hot",
        "More breathless than usual",
        "More uncomfortable than expected",
        "The limb takes longer to recover than usual",
      ],
      after: "Stop, rest and contact your lymphoedema specialist for advice. Do not exercise if you have a skin infection.",
      copyHeading: "What happened when I exercised",
    },
    sources: [MAC_EXERCISE, CRUK_EXERCISE, NHS_TREAT, LSN_FAQ, LSN_DIAGNOSED],
    quiz: {
      question: "What does the evidence suggest about exercise and lymphoedema?",
      options: [{ text: "It doesn't cause or worsen lymphoedema", right: true }, { text: "It always makes swelling worse" }, { text: "It should be avoided completely" }],
      why: "The evidence suggests that exercise doesn't cause or worsen lymphoedema.",
    },
  },
  {
    id: "lo-cellulitis",
    kicker: "Infection",
    question: "What is cellulitis, and what should I do if I think I have it?",
    hook: "It can start like flu, then the swollen area turns red, hot and painful. Getting antibiotics quickly matters, so do not wait.",
    short: "Cellulitis is a bacterial skin infection and the most common complication of lymphoedema. Signs include redness or heat in the skin, pain, more swelling and flu-like symptoms. Contact your GP straight away, or call 111 in the evening or at the weekend, and call 999 or go to A&E if you have signs of serious illness.",
    sections: [
      {
        heading: "Why lymphoedema raises the risk",
        paragraphs: [
          "Cellulitis is a bacterial infection of the deep layer of the skin, and it is the most common complication of lymphoedema. The build-up of fluid in the tissues makes you more vulnerable to infection.",
          "The infection can get in through a break in the skin, such as a scratch, an insect bite or athlete's foot. But it is not always possible to find the cause, and an attack may come without warning.",
          "Treating it quickly matters, not only because you may become very ill, but because the lymph drainage routes risk being damaged further, which can make the swelling worse.",
        ],
      },
      {
        heading: "The signs",
        paragraphs: [
          "You may feel unwell first, as if flu is starting, with a high temperature, shivers, aching muscles or a headache. The swollen area may then become red, hot, painful and more swollen.",
          "Redness may be harder to see on brown and black skin, where the area may look darker or purple instead. Red streaks or lines may spread up or down from the area.",
        ],
      },
      {
        heading: "What to do straight away",
        paragraphs: [
          "If you have any of these signs, contact your GP straight away. They will usually prescribe antibiotics, which you should start straight away. If it happens in the evening or at the weekend, do not wait to see your GP: call the NHS urgent advice number, 111.",
          "If you have a 24 hour advice line, contact it immediately if you think you might have an infection, as you may need treatment straight away.",
          "Also contact your lymphoedema specialist. They will usually tell you to stop lymphoedema treatment, such as massage and exercise, until the infection is treated.",
        ],
      },
      {
        heading: "When to call 999",
        paragraphs: [
          "Call 999 or go to A&E if you have cellulitis with a very high temperature or feel hot, cold or shivery, a fast heartbeat or fast breathing, or purple patches on your skin.",
          "Also call 999 or go to A&E if you feel dizzy or faint, are confused or disorientated, or have cold, clammy or pale skin. These are symptoms of serious complications, which can be life threatening.",
          "Do not drive yourself to A&E. Ask someone to drive you, or call 999 and ask for an ambulance, and bring any medicines you take with you.",
        ],
      },
      {
        heading: "While you recover",
        paragraphs: [
          "Take the full course of antibiotics, usually for 14 days, even when you feel better. Some people need antibiotics through a drip in hospital, especially if the cellulitis is severe or gets worse on tablets.",
          "Rest with the affected area raised in a comfortable position, and drink plenty of water. Take off your compression garment if it is painful, and put it back on as soon as it is comfortable again.",
          "If you have had cellulitis before, your doctor may give you antibiotics to keep with you, such as when you go on holiday, to start straight away if symptoms begin. You should then contact a doctor to be seen as soon as possible.",
        ],
      },
    ],
    helps: [
      "Know the signs: redness, heat, pain, more swelling and flu-like symptoms.",
      "Contact your GP straight away if you notice them, or call 111 in the evening or at the weekend.",
      "Call 999 or go to A&E if you have signs of serious illness, such as a fast heartbeat, confusion or feeling faint.",
      "Take the full course of antibiotics, even when you feel better.",
      "Rest with the area raised and drink plenty of water.",
      "Ask your doctor whether you should keep antibiotics with you.",
    ],
    tryThisWeek: [
      "Learn the signs of cellulitis.",
      "Know when to call 111 or 999.",
      "Ask about antibiotics to keep.",
    ],
    ask: "What should I do at the first sign of cellulitis, and should I have antibiotics to keep at home?",
    interactive: {
      kind: "signs",
      title: "Signs of cellulitis",
      intro: "Tick any you have now. Contact your GP straight away, or call 111 in the evening or at the weekend.",
      signs: [
        "Redness or heat in the skin",
        "Pain in the swollen area",
        "More swelling than usual",
        "Red streaks spreading from the area",
        "Feeling unwell, as if flu is starting",
        "A high temperature, or feeling shivery",
      ],
      after: "Call 999 or go to A&E if you also have a fast heartbeat or fast breathing, purple patches on your skin, feel dizzy, faint or confused, or have cold, clammy or pale skin.",
      copyHeading: "Cellulitis signs I have",
    },
    sources: [NHS_CELLULITIS, NHS_LYMPH, MAC_MANAGING, CRUK_INFECTION, LSN_CELLULITIS],
    quiz: {
      question: "Signs of cellulitis start on a Saturday evening. What does Macmillan advise?",
      options: [{ text: "Call 111 rather than wait for your GP", right: true }, { text: "Wait until Monday to see your GP" }, { text: "Massage the area to ease the swelling" }],
      why: "If it happens in the evening or at the weekend, do not wait to see your GP: call the NHS urgent advice number, 111.",
    },
  },
  {
    id: "lo-travel",
    kicker: "Travel",
    question: "Can I travel and fly with lymphoedema?",
    hook: "Lymphoedema should not stop you going on holiday. A little planning for the journey, and for your skin while you are away, goes a long way.",
    short: "Lymphoedema should not stop you going on holiday, though you may need to plan. Research suggests flying doesn't increase the risk of developing lymphoedema. If you have lymphoedema, wear your compression garment for the journey, keep moving and drink plenty of water, and ask your doctor about taking antibiotics with you.",
    sections: [
      {
        heading: "Planning ahead",
        paragraphs: [
          "Lymphoedema should not stop you from going on holiday, but you might need to plan your travels. Getting there and back can mean sitting still for long periods.",
          "Keep to your usual routine for managing your lymphoedema while you are away. Do the same amount of exercise as you normally would, and try not to overdo it.",
        ],
      },
      {
        heading: "On the journey",
        paragraphs: [
          "Avoid sitting in the same position for the whole journey. On a plane or train, move around often and do gentle stretching exercises, and on long car journeys make regular stops to get out and walk around.",
          "While sitting, circle your ankles and move your legs and arms. Deep breathing can also help, and drink water to stay hydrated.",
          "Wear comfortable, loose clothes and shoes, and use a suitcase on wheels to avoid extra strain on your muscles. Be careful carrying heavy luggage.",
        ],
      },
      {
        heading: "Flying and compression",
        paragraphs: [
          "Research suggests that flying doesn't increase the risk of developing lymphoedema. Some people say a long flight can cause a temporary increase in swelling.",
          "If you have lymphoedema, wear your compression garment before, during and after the journey. The Lymphoedema Support Network suggests one that is worn in rather than new, put on 2 hours before you fly and kept on for 2 hours after you land.",
          "If you have never had swelling, the evidence suggests not wearing a compression garment, as it might restrict the flow of lymph. You may still need travelling socks on a long flight to prevent a clot, so ask your doctor or pharmacist.",
        ],
      },
      {
        heading: "While you are away",
        paragraphs: [
          "Avoid extremes of temperature, and protect your skin from the sun with sunscreen, shade and clothing. Keep your skin clean and moisturised.",
          "Use insect repellent to avoid bites, and clean cuts and grazes with antiseptic and cover them.",
          "Ask your doctor about taking antibiotics with you in case you get an infection. If you have had cellulitis before, they may give you a course to start straight away if symptoms begin, and you should then contact a doctor to be seen as soon as possible.",
        ],
      },
    ],
    helps: [
      "Keep to your usual lymphoedema routine while you are away.",
      "Move around often on the journey, and make regular stops on long car trips.",
      "Wear your compression garment for the flight if you have lymphoedema.",
      "Drink plenty of water while travelling.",
      "Pack insect repellent, sunscreen and antiseptic cream.",
      "Ask your doctor about taking antibiotics with you.",
    ],
    tryThisWeek: [
      "Plan stops on long journeys.",
      "Pack repellent, sunscreen and antiseptic.",
      "Ask about antibiotics to take.",
    ],
    ask: "Should I wear my compression garment when I fly, and can I take antibiotics with me on holiday?",
    interactive: {
      kind: "scenarios",
      title: "On your way",
      scenarios: [
        {
          id: "flight",
          situation: "You have a long flight, and you wear a compression sleeve.",
          options: [{ text: "Put it on 2 hours before you fly", best: true }, { text: "Pack it in your suitcase" }],
          why: "The Lymphoedema Support Network suggests one that is worn in rather than new, put on 2 hours before you fly and kept on for 2 hours after you land.",
        },
        {
          id: "car",
          situation: "You have a long car journey ahead.",
          options: [{ text: "Stop regularly to get out and walk around", best: true }, { text: "Drive straight through without a break" }],
          why: "On long car journeys make regular stops to get out and walk around.",
        },
        {
          id: "luggage",
          situation: "Your suitcase is heavy.",
          options: [{ text: "Use a suitcase on wheels", best: true }, { text: "Carry it with your affected arm" }],
          why: "Use a suitcase on wheels to avoid extra strain on your muscles. Be careful carrying heavy luggage.",
        },
        {
          id: "antibiotics",
          situation: "You have had cellulitis before and are going away for two weeks.",
          options: [{ text: "Ask your doctor about antibiotics to take", best: true }, { text: "Plan to find a doctor abroad if it happens" }],
          why: "If you have had cellulitis before, they may give you a course to start straight away if symptoms begin.",
        },
      ],
    },
    sources: [CRUK_COPING, CRUK_RISK, MAC_RISK, MAC_COMPRESSION, LSN_FAQ, CRUK_INFECTION, MAC_LYMPH],
    quiz: {
      question: "What does research suggest about flying and lymphoedema?",
      options: [{ text: "Flying doesn't increase the risk of developing it", right: true }, { text: "Flying always causes lymphoedema" }, { text: "People at risk should never fly" }],
      why: "Research suggests that flying doesn't increase the risk of developing lymphoedema.",
    },
  },
  {
    id: "lo-everyday",
    kicker: "Everyday life",
    question: "How do I manage clothes, shoes and everyday life with lymphoedema?",
    hook: "Tight sleeves, waistbands and rings can slow the flow of fluid. Comfortable clothes, well-fitting shoes and a few small habits make daily life easier.",
    short: "Pressure from tight clothing and jewellery can affect the flow of lymph fluid, so comfortable clothes and well-fitting shoes help. Finding clothes and shoes to fit a swollen limb can be hard, but there are ways around it. Lymphoedema care can become part of your daily routine, and family, friends and your employer can help.",
    sections: [
      {
        heading: "Avoiding pressure",
        paragraphs: [
          "Your lymphoedema specialist will advise you to avoid pressure on the area, because it can affect the flow of lymph fluid. This depends on which part of the body is affected.",
          "If possible, avoid tight jewellery such as rings, watches and bracelets, and tight clothing such as tops with tight armholes, tight waistbands or tight bra straps.",
          "If possible, avoid having your blood pressure taken, injections or blood samples in the affected arm, unless it is an emergency. If both arms are affected, you can switch between them each time.",
        ],
      },
      {
        heading: "Bras and the chest",
        paragraphs: [
          "Try a well-fitting bra with wide, flexible shoulder straps and deep sides, which does not dig into your shoulders or under the arm. Your lymphoedema specialist can advise on getting measured for the right cup size.",
          "Some breast prostheses are very heavy and can make bra straps dig in. If you wear one, try to get a lightweight one, and ask your specialist or breast care nurse for advice.",
        ],
      },
      {
        heading: "Shoes and clothes that fit",
        paragraphs: [
          "If your leg or foot is affected, wear shoes that fit correctly and support the top of your feet, and avoid going barefoot.",
          "Finding shoes to fit a swollen foot can be frustrating. Some companies make extra wide, adjustable shoes, and some shops sell odd sizes or single shoes. Your local podiatry service can also advise.",
          "For clothes, some people find batwing tops or wide-leg trousers help, and a local tailor or alteration service can often adjust clothes for a reasonable cost. Online groups for people with lymphoedema are a good way to get tips.",
        ],
      },
      {
        heading: "Around the house and garden",
        paragraphs: [
          "Wear gardening gloves and oven gloves to protect your arms from injury. Try to avoid sitting or standing for long periods if you have leg swelling.",
          "Family or friends may be able to help with tasks you find difficult because of the swelling. They could also help with your compression garment or give you a simple lymphatic drainage massage.",
        ],
      },
      {
        heading: "Work and daily routine",
        paragraphs: [
          "Whether lymphoedema affects your work depends on your job and where the swelling is. Employers can often make changes, such as flexible hours, working from home, adapting your workstation, a footstool or frequent movement breaks.",
          "Lymphoedema usually can't be cured, but it can be well controlled, and there are ways of managing it so that it becomes part of your daily routine.",
        ],
      },
    ],
    helps: [
      "Avoid tight rings, watches, armholes, waistbands and bra straps.",
      "Choose a bra with wide, flexible straps that does not dig in.",
      "Wear well-fitting shoes and avoid going barefoot if your leg is affected.",
      "Ask your local podiatry service for advice if shoes are a problem.",
      "Wear gardening gloves and oven gloves to protect your arms.",
      "Talk to your employer about changes such as movement breaks or a footstool.",
    ],
    tryThisWeek: [
      "Swap tight rings or sleeves.",
      "Check your shoes fit well.",
      "Ask about movement breaks.",
    ],
    ask: "Is there anything about my clothes, shoes or work that could be adding to my swelling?",
    interactive: {
      kind: "scenarios",
      title: "Everyday choices",
      scenarios: [
        {
          id: "ring",
          situation: "A ring is starting to feel tight on your swollen hand.",
          options: [{ text: "Avoid wearing it tight, and tell your specialist", best: true }, { text: "Keep wearing it however tight it gets" }],
          why: "If possible, avoid tight jewellery such as rings, watches and bracelets.",
        },
        {
          id: "blood-pressure",
          situation: "A nurse is about to take your blood pressure from your affected arm.",
          options: [{ text: "Mention your lymphoedema first", best: true }, { text: "Say nothing" }],
          why: "If possible, avoid having your blood pressure taken in the affected arm, unless it is an emergency.",
        },
        {
          id: "barefoot",
          situation: "You fancy walking barefoot around the garden.",
          options: [{ text: "Wear shoes that fit well", best: true }, { text: "Go barefoot" }],
          why: "If your leg or foot is affected, wear shoes that fit correctly and support the top of your feet, and avoid going barefoot.",
        },
        {
          id: "desk",
          situation: "You sit at a desk all day, and your leg swells by the afternoon.",
          options: [{ text: "Ask about a footstool and movement breaks", best: true }, { text: "Keep sitting still and say nothing" }],
          why: "Employers can often make changes, such as flexible hours, working from home, adapting your workstation, a footstool or frequent movement breaks.",
        },
      ],
    },
    sources: [MAC_MANAGING, NHS_PREVENT, CRUK_SKIN, LSN_FAQ, CRUK_COPING],
    quiz: {
      question: "Why are tight clothes and jewellery best avoided?",
      options: [{ text: "Pressure can affect the flow of lymph fluid", right: true }, { text: "They make the skin too warm" }, { text: "They wear out compression garments" }],
      why: "Your lymphoedema specialist will advise you to avoid pressure on the area, because it can affect the flow of lymph fluid.",
    },
  },
  {
    id: "lo-mood",
    kicker: "Mood",
    question: "How do I cope with how lymphoedema makes me look and feel?",
    hook: "Swelling can change how you look and how you feel about yourself. Those feelings are normal, they often ease with time, and there is support, including right now if you need it.",
    short: "Lymphoedema is an ongoing change to your body, and it is normal to feel angry, sad, self-conscious or that it is unfair. Talking to people you trust, to others with lymphoedema or to your nurse can help, and there are effective treatments for depression. If you ever feel you cannot keep yourself safe, call 999 or go to A&E, or call Samaritans free on 116 123.",
    sections: [
      {
        heading: "A mix of feelings",
        paragraphs: [
          "Most people have a mix of feelings when they find they have lymphoedema. You might feel angry, frightened or sad. After treatment, it can feel very unfair to have to cope with a treatment side effect.",
          "Although it is not life-threatening, lymphoedema is an ongoing problem that changes your body. You may feel self-conscious and embarrassed, or responsible in some way. However you are feeling, it is okay to feel that way.",
          "Living with any long-term condition isn't easy. It's important to give yourself time to come to terms with it.",
        ],
      },
      {
        heading: "Changes to how you look",
        paragraphs: [
          "Swelling might change your appearance. Even if other people can't see it, it can affect how you feel about yourself, and some people feel less attractive or find it harder to go out and socialise.",
          "Over time, things get easier, though it doesn't always help to hear this at first. Think beforehand about what you want to say if someone asks about your lymphoedema. It's up to you how much you explain.",
          "If people look at you for longer, it is usually because they are curious and not because they want to upset you. Avoiding situations may feel like a relief at first, but it can make things more difficult in the long term.",
        ],
      },
      {
        heading: "Talking helps",
        paragraphs: [
          "Talking with people you trust about how you feel can help, whether that is family, friends, your nurse or a counsellor. Some people find it helpful to talk to others with similar experiences, and the Lymphoedema Support Network can put you in touch with a support group in your area.",
          "You can call the Macmillan Support Line free on 0808 808 00 00, or the Cancer Research UK nurses on 0808 800 4040, from 9am to 5pm on weekdays. If you continue with your treatment plan, your symptoms should eventually become less noticeable.",
        ],
      },
      {
        heading: "When low mood lingers",
        paragraphs: [
          "Feeling sad at times is natural, and for most people it lessens. But if you feel low most of the time, lose interest in things you used to enjoy, or notice changes in your sleep, eating or concentration for more than 2 weeks, talk to your doctor or nurse.",
          "Effective treatments are available for depression, so talk to a GP or a member of your lymphoedema team. Your doctor or nurse can often refer you to a counsellor or psychologist, and cognitive behavioural therapy can be a helpful therapy for people with body image concerns.",
          "You can also refer yourself to NHS talking therapies, which can help with coping with a long-term health condition. You need to be registered with a GP and aged 18 or over, or 16 or over in some areas.",
        ],
      },
      {
        heading: "If you are struggling right now",
        paragraphs: [
          "If you have thoughts of suicide or self-harm, contact your GP or specialist nurse straight away, or go to A&E. You can call Samaritans free on 116 123, any time, day or night.",
          "For urgent help with your mental health, call 111 and choose the mental health option, or ask for an urgent GP appointment. If you would rather not talk on the phone, you can text SHOUT to 85258 at any time.",
          "Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Give yourself time to come to terms with the changes.",
      "Think beforehand about what you want to say if someone asks about your lymphoedema.",
      "Talk to someone you trust, or to others with lymphoedema.",
      "Talk to your doctor or nurse if low feelings go on for more than 2 weeks.",
      "Refer yourself to NHS talking therapies, or ask your GP about counselling.",
      "Call Samaritans free on 116 123, any time, day or night.",
    ],
    tryThisWeek: [
      "Plan what to say if asked.",
      "Talk to someone you trust.",
      "Look up NHS talking therapies.",
    ],
    ask: "Could you refer me for support with how I feel about my lymphoedema, such as counselling or a support group?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your doctor or nurse",
      intro: "Tick any you have had most of the time. If they go on for more than 2 weeks, talk to your doctor or nurse.",
      signs: [
        "Feeling low or sad most of the time",
        "Losing interest in things I used to enjoy",
        "Changes in my sleep, eating or concentration",
        "Feeling helpless or vulnerable",
        "Avoiding going out or seeing people",
        "Finding it hard to look at myself",
      ],
      after: "If you have thoughts of self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. Samaritans is free on 116 123.",
      copyHeading: "How I have been feeling",
    },
    sources: [CRUK_COPING, MAC_LYMPH, NHS_LYMPH, MAC_BODY_FEELINGS, MAC_DEPRESSION, LSN_DIAGNOSED, NHS_TALKING, NHS_URGENT, NHS_SUICIDAL, SAMARITANS, MAC_BODY],
    quiz: {
      question: "When should you talk to your doctor or nurse about low feelings?",
      options: [{ text: "If they go on for more than 2 weeks", right: true }, { text: "Only if they last a year" }, { text: "Never, they always pass" }],
      why: "But if you feel low most of the time, lose interest in things you used to enjoy, or notice changes in your sleep, eating or concentration for more than 2 weeks, talk to your doctor or nurse.",
    },
  },
];
