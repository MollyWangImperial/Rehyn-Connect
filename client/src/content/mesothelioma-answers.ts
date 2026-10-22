import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Mesothelioma page's pieces
// (content/library-conditions/cancer-more-2.ts, `mesothelioma`). Every sentence was written from wording
// checked on 22 October 2026 on the pages listed under each answer's `sources`; nothing is added that those
// pages do not say. Most of it comes from the NHS, Macmillan Cancer Support, Cancer Research UK, Mesothelioma
// UK, Asthma + Lung UK, Marie Curie and the government's pages on benefits and mesothelioma payments, worded
// as those pages word them. There are no survival or life-expectancy figures anywhere. Emergency guidance
// (side effects of immunotherapy and chemotherapy, sudden breathlessness, chest pain) says exactly what the
// sources say. The mood answer follows safe-messaging guidance and gives the crisis routes as the NHS,
// Macmillan and Samaritans state them. General information only; it never replaces what a person's own
// cancer team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const mac = (label: string, path: string): LearnSource => ({ label: `Macmillan: ${label}`, url: `https://www.macmillan.org.uk/cancer-information-and-support/${path}` });
const cruk = (label: string, path: string): LearnSource => ({ label: `Cancer Research UK: ${label}`, url: `https://www.cancerresearchuk.org/about-cancer/mesothelioma${path ? `/${path}` : ""}` });
const muk = (label: string, path: string): LearnSource => ({ label: `Mesothelioma UK: ${label}`, url: `https://www.mesothelioma.uk.com/${path}/` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });
const aluk = (label: string, path: string): LearnSource => ({ label: `Asthma + Lung UK: ${label}`, url: `https://www.asthmaandlung.org.uk/conditions/mesothelioma/${path}` });

const NHS_WHAT = nhs("What is mesothelioma?", "conditions/mesothelioma/what-is-mesothelioma/");
const NHS_SYMPTOMS = nhs("Symptoms of mesothelioma", "conditions/mesothelioma/symptoms-of-mesothelioma/");
const NHS_CAUSES = nhs("Causes of mesothelioma", "conditions/mesothelioma/causes-of-mesothelioma/");
const NHS_TESTS = nhs("Tests and next steps for mesothelioma", "conditions/mesothelioma/tests-and-next-steps-for-mesothelioma/");
const NHS_TREATMENT = nhs("Treatment for mesothelioma", "conditions/mesothelioma/treatment-for-mesothelioma/");
const NHS_SUPPORT = nhs("Help and support for mesothelioma", "conditions/mesothelioma/help-and-support-for-mesothelioma/");
const NHS_CHEMO = nhs("Chemotherapy", "tests-and-treatments/chemotherapy/");
const NHS_EOL = nhs("What end of life care involves", "tests-and-treatments/end-of-life-care/what-it-involves-and-when-it-starts/");
const NHS_CARER_ASSESS = nhs("Carer's assessments", "social-care-and-support/support-and-benefits-for-carers/carer-assessments/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const MAC_OVERVIEW = mac("Mesothelioma", "mesothelioma");
const MAC_TYPES = mac("Types of mesothelioma", "mesothelioma/types");
const MAC_CAUSES = mac("Causes and risk factors of mesothelioma", "mesothelioma/causes-and-risk-factors");
const MAC_DIAGNOSIS = mac("Mesothelioma diagnosis", "mesothelioma/diagnosis");
const MAC_MDT = mac("Multidisciplinary team (MDT) for mesothelioma", "mesothelioma/mdt");
const MAC_IMMUNO = mac("Immunotherapy for mesothelioma", "treatments-and-drugs/immunotherapy-for-mesothelioma");
const MAC_CHEMO = mac("Chemotherapy for mesothelioma", "treatments-and-drugs/chemotherapy-for-mesothelioma");
const MAC_RADIO = mac("Radiotherapy for pleural mesothelioma", "treatments-and-drugs/radiotherapy-for-mesothelioma");
const MAC_PERI_SURGERY = mac("Surgery for peritoneal mesothelioma", "treatments-and-drugs/peritoneal-mesothelioma-surgery");
const MAC_SYMPTOMS = mac("Treating mesothelioma symptoms", "impacts-of-cancer/treating-mesothelioma-symptoms");
const MAC_EFFUSION = mac("Pleural effusion", "impacts-of-cancer/pleural-effusion");
const MAC_BREATHLESS = mac("Breathlessness", "impacts-of-cancer/breathlessness");
const MAC_PAIN = mac("Pain", "impacts-of-cancer/pain");
const MAC_PAINKILLERS = mac("Ways of taking cancer painkillers", "impacts-of-cancer/pain/painkillers");
const MAC_TIREDNESS = mac("Tiredness (fatigue)", "impacts-of-cancer/tiredness");
const MAC_EATING = mac("Eating problems and cancer", "impacts-of-cancer/eating-problems");
const MAC_EATING_TIPS = mac("Tips for managing eating problems", "impacts-of-cancer/eating-problems/tips-for-managing-eating-problems");
const MAC_COMP = mac("Compensation and benefits for mesothelioma", "impacts-of-cancer/mesothelioma-compensation");
const MAC_CARERS = mac("Caring for someone with mesothelioma", "mesothelioma/carers");
const MAC_DEPRESSION = mac("Depression and cancer", "impacts-of-cancer/depression");

const CRUK_OVERVIEW = cruk("Mesothelioma", "");
const CRUK_RISKS = cruk("Asbestos and other risks of mesothelioma", "risks-causes");
const CRUK_TESTS = cruk("Tests for mesothelioma", "getting-diagnosed/tests-to-diagnose");
const CRUK_PLEURAL = cruk("Treatment options for pleural mesothelioma", "treatment/decisions-pleural");
const CRUK_IMMUNO = cruk("Immunotherapy for mesothelioma", "treatment/immunotherapy");
const CRUK_PLEURODESIS = cruk("Treatment for fluid on the lung (pleurodesis)", "treatment/fluid-lung-pleurodesis");
const CRUK_COPING = cruk("Coping with mesothelioma", "living-with/coping-mesothelioma");
const CRUK_ADVANCED = cruk("Living with advanced mesothelioma", "living-with/advanced");

const MUK_WHAT = muk("What is mesothelioma?", "what-is-mesothelioma");
const MUK_PLEURAL = muk("Pleural mesothelioma", "pleural-mesothelioma");
const MUK_PALLIATIVE = muk("Palliative care", "palliative-care");
const MUK_PLANNING = muk("Planning for end of life", "planning-for-end-of-life");
const MUK_EMOTIONAL = muk("Emotional well being", "emotional-well-being");
const MUK_FREEPHONE = muk("Freephone support line", "freephone-support-line");
const MUK_BENEFITS = muk("Benefits advice", "benefits-advice");
const MUK_LEGAL = muk("Legal advice", "legal-advice");
const MUK_CARERS = muk("For carers", "for-carers");

const GOV_IIDB = gov("Industrial Injuries Disablement Benefit", "industrial-injuries-disablement-benefit");
const GOV_DMP = gov("Diffuse mesothelioma payments", "diffuse-mesothelioma-payment");
const GOV_CARERS = gov("Carer's Allowance", "carers-allowance");

const ALUK_TREATMENT = aluk("Mesothelioma treatment", "mesothelioma-treatment");
const ALUK_SUPPORT = aluk("Support for you", "support-for-you");

const MARIE_CURIE: LearnSource = { label: "Marie Curie: What is palliative care?", url: "https://www.mariecurie.org.uk/information/getting-care/palliative-care" };
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const mesotheliomaAnswers: LearnArticle[] = [
  {
    id: "meso-what-it-is",
    kicker: "Understanding",
    question: "What is mesothelioma?",
    hook: "A rare cancer of the thin lining that covers the lungs and the organs in the tummy, most often linked to asbestos.",
    short: "Mesothelioma is a rare type of cancer that starts in the lining of the body's organs, called the mesothelium. It usually affects the lining of the lungs, and sometimes the lining of the tummy. Breathing in asbestos over a long period of time is the most common cause.",
    sections: [
      {
        heading: "A thin lining",
        paragraphs: [
          "Mesothelioma is a cancer of the mesothelium. The mesothelium is a thin lining that covers the outer surface of many organs in the body, and lines spaces within the body such as the chest and abdominal cavity.",
          "The mesothelium in the chest is called the pleura, and the mesothelium in the tummy is called the peritoneum. If mesothelial cells develop abnormally, they can develop into cancer called malignant mesothelioma, which is usually just called mesothelioma.",
        ],
      },
      {
        heading: "In the chest: pleural mesothelioma",
        paragraphs: [
          "The lungs are covered by the pleura, which has 2 layers. The space between them has a small amount of fluid that lets the lungs move in and out smoothly, so you can breathe easily.",
          "Pleural mesothelioma starts as small lumps that grow and spread through the pleura. As they grow together, the pleura becomes thicker, the lungs cannot move as easily and you become breathless. Fluid may also collect between the layers, which is called a pleural effusion.",
        ],
      },
      {
        heading: "In the tummy: peritoneal mesothelioma",
        paragraphs: [
          "The organs in the tummy are covered by a lining called the peritoneum, which helps protect them and keep them in place.",
          "Mesothelioma can cause the layers of the peritoneum to thicken, and fluid to build up between them. This is called ascites.",
          "Pleural mesothelioma is much more common. In the UK, 95 out of 100 mesotheliomas are in the chest and 4 out of 100 are in the tummy.",
        ],
      },
      {
        heading: "How common it is",
        paragraphs: [
          "In the UK, more than 2,700 people are diagnosed with mesothelioma each year.",
          "It is more common in men than women, probably because it is often caused by exposure to asbestos at work. It is also more common in older people.",
          "Very rarely, mesothelioma develops in the outer lining of other organs, such as the heart or the testes.",
        ],
      },
      {
        heading: "Symptoms it can cause",
        paragraphs: [
          "Symptoms of pleural mesothelioma include chest pain, shortness of breath, a cough that does not go away, a high temperature, sweating heavily at night, feeling very tired and losing weight without trying.",
          "Symptoms of peritoneal mesothelioma include tummy pain, a swollen tummy, feeling or being sick, loss of appetite, and diarrhoea or constipation. Some of these symptoms are very common and can be caused by other conditions.",
        ],
      },
    ],
    helps: [
      "Ask which type and cell type of mesothelioma you have, as it can give your doctors more information about the best treatment for you.",
      "Bring someone with you to appointments for support.",
      "Ask your clinical nurse specialist any questions you have; they will be your main point of contact.",
      "Call Mesothelioma UK's support line on 0800 169 2409 for information and support.",
      "Call the Macmillan Support Line free on 0808 808 00 00.",
    ],
    tryThisWeek: [
      "Ask which type you have.",
      "Bring someone to appointments.",
      "Save the Mesothelioma UK number.",
    ],
    ask: "Is my mesothelioma pleural or peritoneal, and what does the cell type mean for my treatment?",
    interactive: {
      kind: "flip-cards",
      title: "The linings and the types",
      intro: "Turn a card to see where each type starts and what it does.",
      cards: [
        { id: "pleural", front: "Pleural mesothelioma", when: "In the lining of the lungs", back: "The most common type. The pleura thickens, so the lungs cannot move as easily, and fluid may collect around them." },
        { id: "peritoneal", front: "Peritoneal mesothelioma", when: "In the lining of the tummy", back: "The peritoneum can thicken, and fluid called ascites can build up between its layers." },
        { id: "epithelioid", front: "Epithelioid", when: "A cell type", back: "The most common cell type, seen when the cells are looked at under a microscope." },
        { id: "sarcomatoid", front: "Sarcomatoid and mixed", when: "Other cell types", back: "Mixed, or biphasic, mesothelioma has both epithelioid and sarcomatoid cells." },
        { id: "rare", front: "Rare types", when: "Other linings", back: "Very rarely, mesothelioma develops in the outer lining of the heart or the testes." },
      ],
    },
    sources: [NHS_WHAT, MAC_OVERVIEW, MAC_TYPES, CRUK_OVERVIEW, MUK_WHAT, NHS_SYMPTOMS, NHS_TESTS, NHS_SUPPORT],
    quiz: {
      question: "Where does mesothelioma most often start?",
      options: [{ text: "In the lining of the lungs", right: true }, { text: "In the bones" }, { text: "In the liver" }],
      why: "It usually affects the lining of the lungs, and sometimes the lining of the tummy.",
    },
  },
  {
    id: "meso-asbestos",
    kicker: "Causes",
    question: "How does asbestos cause mesothelioma?",
    hook: "Tiny fibres breathed in or swallowed long ago can lodge in the linings. It can take 15 to 60 years for mesothelioma to develop.",
    short: "Over 9 out of 10 cases of mesothelioma are caused by exposure to asbestos fibres. When asbestos is disturbed, it releases tiny fibres that can be breathed in and settle in the lining of the lung, or be swallowed and reach the lining of the tummy. It can take 15 to 60 years to develop, and it is not infectious.",
    sections: [
      {
        heading: "What asbestos is",
        paragraphs: [
          "Asbestos is a natural mineral that is heat and fire resistant. It was widely used in the building industry, shipbuilding, power stations, the motor industry and in making household appliances.",
          "Asbestos was used in the UK from the 1950s until it was banned in 1999. There are three main types, blue, brown and white, and exposure to all three is linked with mesothelioma.",
        ],
      },
      {
        heading: "How the fibres do harm",
        paragraphs: [
          "When asbestos is damaged or disturbed, it releases tiny fibres that can be breathed into the lungs. The fibres can travel through the lung tissue and settle in the pleura, where over many years they can cause pleural mesothelioma.",
          "The fibres irritate the pleura and may cause gene changes that lead to the growth of cancer. Some of the fibres can be coughed up and swallowed, which is probably the cause of peritoneal mesothelioma.",
        ],
      },
      {
        heading: "Who was most likely to be exposed",
        paragraphs: [
          "People most likely to have been exposed at work include joiners and construction workers, plumbers, electricians, boilermakers, painters, dock workers and shipbuilders, power station workers and people who served on warships.",
          "People who have not worked directly with asbestos can also develop mesothelioma. This includes family members of people who worked with asbestos, who may have brought dust fibres home on their clothes, and people who lived near asbestos factories.",
          "Sometimes, mesothelioma develops in people who do not know, or perhaps cannot remember, that they have been exposed to asbestos.",
        ],
      },
      {
        heading: "A long delay",
        paragraphs: [
          "Mesothelioma does not usually develop until many years after exposure to asbestos. It can take 15 to 60 years, and the average time for pleural mesothelioma is about 30 to 50 years.",
          "This is why the specialist may ask about jobs you have had, places you have worked and whether anyone in your family worked with asbestos. You may have to think back to your childhood or early working years.",
        ],
      },
      {
        heading: "What it does not mean",
        paragraphs: [
          "Mesothelioma is not infectious and cannot be passed on to other people. Doctors do not know why some people who are exposed to asbestos get mesothelioma and others do not.",
          "If you develop an asbestos-related illness, you may be entitled to certain benefits and compensation. Talk to a solicitor about this as early as possible.",
        ],
      },
    ],
    helps: [
      "Think back through the jobs you have had and the places you have worked, as the specialist may ask about them.",
      "Tell your team if anyone in your family worked with asbestos.",
      "Talk to a solicitor about compensation as early as possible.",
      "Ask your specialist doctor or nurse what they can tell you about claiming.",
      "Call Mesothelioma UK on 0800 169 2409 for advice about legal help.",
    ],
    tryThisWeek: [
      "Think back through past jobs.",
      "Mention family asbestos work.",
      "Ask about a specialist solicitor.",
    ],
    ask: "Could my mesothelioma be linked to asbestos at work, and who can advise me about a claim?",
    interactive: {
      kind: "timeline",
      title: "From exposure to diagnosis",
      steps: [
        { id: "use", when: "From the 1950s", title: "Asbestos in use", points: ["Asbestos was used in UK buildings from the 1950s.", "It was widely used in shipbuilding and power stations."] },
        { id: "first-ban", when: "The 1980s", title: "Blue and brown banned", points: ["Imports of blue and brown asbestos were banned in the 1980s."] },
        { id: "full-ban", when: "1999", title: "All types banned", points: ["All types of asbestos were banned in the UK in 1999."] },
        { id: "later", when: "15 to 60 years later", title: "Mesothelioma can develop", points: ["It can take 15 to 60 years to develop after exposure.", "For pleural mesothelioma, about 30 to 50 years on average."] },
      ],
    },
    sources: [NHS_CAUSES, MAC_CAUSES, CRUK_RISKS, MAC_DIAGNOSIS, MUK_LEGAL],
    quiz: {
      question: "How long can mesothelioma take to develop after asbestos exposure?",
      options: [{ text: "15 to 60 years", right: true }, { text: "A few weeks" }, { text: "About a year" }],
      why: "It can take 15 to 60 years, and the average time for pleural mesothelioma is about 30 to 50 years.",
    },
  },
  {
    id: "meso-treatments",
    kicker: "Treatment",
    question: "What do the treatments for mesothelioma aim to do?",
    hook: "For most people the aim is to slow the cancer and control symptoms. Immunotherapy is now the most common treatment.",
    short: "Mesothelioma can be difficult to treat, so for most people the aim of treatment is to slow the growth of the cancer, which can help improve symptoms and quality of life. Immunotherapy is the most common treatment, and chemotherapy, radiotherapy and supportive treatments may also help. Surgery is rarely used.",
    sections: [
      {
        heading: "Planning your treatment",
        paragraphs: [
          "A team of specialists, called a multidisciplinary team or MDT, meets to discuss the best treatment for you. The treatment depends on the type of mesothelioma, where it is, whether it has spread, your general health and your personal wishes.",
          "For most people with pleural and peritoneal mesothelioma, the aim of treatment is to slow the growth of the cancer. This can help improve symptoms and may help improve quality of life.",
        ],
      },
      {
        heading: "Immunotherapy",
        paragraphs: [
          "Immunotherapy uses medicines to help your immune system find and attack the cancer. It is the most common treatment for mesothelioma.",
          "For pleural mesothelioma, you usually have 2 drugs together, nivolumab and ipilimumab, as a drip into a vein. You have nivolumab once every 3 weeks and ipilimumab once every 6 weeks, usually for up to 2 years if it is controlling the mesothelioma and side effects are not too severe.",
          "Immunotherapy drugs can attack healthy tissue. If you think you have one of these side effects, contact the hospital straight away on the 24-hour number you have been given, and do not try to treat it yourself.",
        ],
      },
      {
        heading: "Chemotherapy and radiotherapy",
        paragraphs: [
          "Chemotherapy may be offered to help slow the growth of mesothelioma, and it may help with symptoms such as pain and breathlessness. The most commonly used drugs are pemetrexed together with cisplatin or carboplatin, given into a vein.",
          "Radiotherapy for pleural mesothelioma may be given to help relieve symptoms, such as pain or swelling. You may only need 1 or 2 treatments, or a course of 5, and the side effects are usually mild.",
        ],
      },
      {
        heading: "Surgery and supportive care",
        paragraphs: [
          "Surgery is not often used, because removing all the cancer can be difficult. A small number of people with peritoneal mesothelioma may be offered surgery with heated chemotherapy into the tummy, called HIPEC, at a specialist centre.",
          "Even if you are too ill for some treatments, you can still have treatment to relieve symptoms such as pain or breathing problems. For pleural mesothelioma, the most common procedure is placing a drain for fluid that has built up around the lung.",
        ],
      },
      {
        heading: "Getting help quickly",
        paragraphs: [
          "During chemotherapy, call your care team now if you have a high temperature, other signs of an infection, or sudden breathlessness with sharp chest pain. Call NHS 111 if you're not sure how to contact your care team.",
          "If you have any symptoms or side effects you're worried about, talk to your specialists; you do not need to wait for your next check-up. You can stop a treatment whenever you want to if you find it too much to cope with.",
        ],
      },
    ],
    helps: [
      "Ask your team to explain each treatment, its benefits and its side effects.",
      "Save the hospital's 24-hour numbers in your phone, and call straight away about immunotherapy side effects.",
      "Always have your patient alert card with you during and after immunotherapy.",
      "Call your care team now if you have a high temperature or signs of infection during chemotherapy.",
      "Ask whether you could have some treatment as part of a clinical trial.",
      "Bring a family member or friend when treatment is explained, and make a list of questions.",
    ],
    tryThisWeek: [
      "Save the 24-hour number.",
      "Carry your alert card.",
      "List your questions.",
    ],
    ask: "What is the aim of my treatment, and which side effects should I call about straight away?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments and their aims",
      intro: "Turn a card to see what each treatment does.",
      cards: [
        { id: "immunotherapy", front: "Immunotherapy", when: "Usually the first treatment for pleural", back: "Nivolumab and ipilimumab help your immune system find and attack the cancer. You have them as a drip into a vein." },
        { id: "chemotherapy", front: "Chemotherapy", when: "To slow growth and ease symptoms", back: "Pemetrexed with cisplatin or carboplatin, into a vein, followed by a rest period of a few weeks." },
        { id: "radiotherapy", front: "Radiotherapy", when: "For symptoms such as pain or swelling", back: "You may only need 1 or 2 treatments, or a course of 5. The side effects are usually mild." },
        { id: "surgery", front: "Surgery", when: "Rarely, and for a small number", back: "A small number of people with peritoneal mesothelioma have surgery with heated chemotherapy, called HIPEC." },
        { id: "drain", front: "A drain for fluid", when: "For breathlessness", back: "The most common procedure for pleural mesothelioma. It drains fluid that has built up around the lung." },
      ],
    },
    sources: [NHS_TREATMENT, MAC_OVERVIEW, CRUK_PLEURAL, CRUK_IMMUNO, MAC_IMMUNO, MAC_CHEMO, MAC_RADIO, MAC_PERI_SURGERY, NHS_CHEMO, MAC_MDT],
    quiz: {
      question: "What should you do if you think you have an immunotherapy side effect?",
      options: [{ text: "Contact the hospital straight away on the 24-hour number", right: true }, { text: "Wait for your next appointment" }, { text: "Treat it yourself at home" }],
      why: "If you think you have one of these side effects, contact the hospital straight away on the 24-hour number you have been given, and do not try to treat it yourself.",
    },
  },
  {
    id: "meso-tests",
    kicker: "Diagnosis",
    question: "Which tests show if it is mesothelioma?",
    hook: "Usually a chest x-ray first, then scans, a sample of fluid or a biopsy. It can take several weeks, and a few hospital visits.",
    short: "Most people start by seeing their GP, who may arrange a chest or tummy x-ray. A specialist may then arrange scans such as a CT scan, drain fluid to check for cancer cells, or take a biopsy of the lining. It can take several weeks to get results, and a specialist will explain what they mean.",
    sections: [
      {
        heading: "Seeing your GP",
        paragraphs: [
          "The GP will ask about your symptoms and work history, and may ask if you have been exposed to asbestos. They may gently feel any areas that are painful or swollen, and listen to your lungs.",
          "You may have blood tests and a chest x-ray. If the GP thinks you have symptoms that could be cancer, you may get an urgent referral, which does not definitely mean you have cancer.",
        ],
      },
      {
        heading: "Seeing a specialist",
        paragraphs: [
          "If your lungs are affected, you'll see a respiratory specialist. If you have abdominal symptoms, you'll see a gastroenterologist.",
          "A CT scan makes a detailed picture of the inside of the body. It is painless and usually takes 5 to 10 minutes.",
          "Not everyone needs a PET-CT scan. Your doctors might organise one if it is difficult to diagnose your mesothelioma with other tests.",
        ],
      },
      {
        heading: "Fluid samples and biopsies",
        paragraphs: [
          "Fluid may be drained from your lungs or tummy using a small tube and checked for cancer cells. Draining the fluid from around the lung may also help with your breathing.",
          "A pleural biopsy is more likely to confirm mesothelioma than a sample of fluid. In a thoracoscopy, the doctor makes a small cut in the chest wall and uses a thin tube with a camera to look at the pleura and take biopsies.",
          "For peritoneal mesothelioma, a biopsy may be taken during keyhole surgery called a laparoscopy, or with a needle guided by an ultrasound or CT scan.",
        ],
      },
      {
        heading: "Why it can take time",
        paragraphs: [
          "Mesothelioma is not an easy disease to diagnose. Sometimes, even after a biopsy, doctors are not sure, and the samples may be sent to specialist laboratories or a test may need to be done again.",
          "It can take several weeks to get the results of your tests. Try not to worry if your results are taking a long time, as it does not definitely mean anything is wrong, and you can call the hospital or GP if you're worried.",
        ],
      },
      {
        heading: "After the results",
        paragraphs: [
          "The results help show if the cancer has spread and how far, which is called the stage. The specialists will use them to work with you to decide on the best treatment plan.",
          "A group of specialists will look after you, including a clinical nurse specialist who will be your main point of contact. It can help to bring someone with you to any appointments you have.",
        ],
      },
    ],
    helps: [
      "Tell the doctor about your work history and any contact with asbestos.",
      "Tell your doctor if you are allergic to iodine or have asthma before a scan with contrast dye.",
      "Tell your doctor or nurse if you have any pain during or after a biopsy.",
      "Call the hospital or GP if you're worried about how long your results are taking.",
      "Bring someone with you for support when you get your results.",
      "Call the Macmillan helpline free on 0808 808 00 00, open every day from 8am to 8pm.",
    ],
    tryThisWeek: [
      "Note your work history.",
      "Mention iodine allergy or asthma.",
      "Bring someone to your results.",
    ],
    ask: "Which tests will I need, and when should I expect the results?",
    interactive: {
      kind: "timeline",
      title: "The usual path to a diagnosis",
      steps: [
        { id: "gp", when: "Step 1", title: "Seeing your GP", points: ["Your GP asks about your symptoms and work history.", "You may have blood tests and a chest x-ray."] },
        { id: "specialist", when: "Step 2", title: "A specialist", points: ["A respiratory specialist if your lungs are affected.", "A gastroenterologist for tummy symptoms."] },
        { id: "scans", when: "Step 3", title: "Scans and fluid", points: ["A CT scan is painless and takes 5 to 10 minutes.", "Fluid may be drained and checked for cancer cells."] },
        { id: "biopsy", when: "Step 4", title: "A biopsy", points: ["A pleural biopsy is more likely to confirm it.", "Samples may go to specialist laboratories."] },
        { id: "results", when: "Several weeks", title: "Results and stage", points: ["The stage shows if and how far it has spread.", "The specialists plan treatment with you."] },
      ],
    },
    sources: [NHS_SYMPTOMS, NHS_TESTS, MAC_DIAGNOSIS, CRUK_TESTS, MUK_PLEURAL],
    quiz: {
      question: "Which test is more likely to confirm pleural mesothelioma?",
      options: [{ text: "A pleural biopsy", right: true }, { text: "A sample of fluid" }, { text: "A blood test" }],
      why: "A pleural biopsy is more likely to confirm mesothelioma than a sample of fluid.",
    },
  },
  {
    id: "meso-breathlessness",
    kicker: "Breathing",
    question: "What can help with breathlessness and fluid around the lung?",
    hook: "Fluid around the lung is a common cause, and it can be drained. A fan, how you sit and breathing techniques can help too.",
    short: "Breathlessness is a common symptom of pleural mesothelioma, often caused by fluid building up around the lung, called a pleural effusion. The fluid can be drained, and talc pleurodesis or a drain you can use at home can stop it building up again. Breathing techniques, a fan and medicines can also help.",
    sections: [
      {
        heading: "Why it happens",
        paragraphs: [
          "Breathlessness is often caused by a build-up of fluid between the 2 layers of the pleura. The fluid presses on the lung, making it difficult for it to expand fully, and can make you more breathless, even when resting.",
          "There can be other causes too, such as anaemia, a chest infection, pain or anxiety. Your cancer doctor will look at your symptoms to find out what may be causing it.",
        ],
      },
      {
        heading: "Draining the fluid",
        paragraphs: [
          "The fluid is usually drained through a tube put into the side of your chest. You have an injection of local anaesthetic first, and you will not feel any pain during the procedure.",
          "The fluid is usually drained slowly, because a sudden release of pressure in the chest can cause your blood pressure to drop. Tell your doctor or nurse if you feel dizzy, sick or light-headed.",
        ],
      },
      {
        heading: "Stopping it coming back",
        paragraphs: [
          "In talc pleurodesis, sterile talc is put between the 2 layers of the pleura to stick them together, so there is no space for the fluid to collect. It does not treat the cancer, but it should be easier for you to breathe afterwards.",
          "An indwelling pleural catheter is a soft tube about the size of a straw that can stay in place when you go home. You can drain the fluid whenever it starts to build up again, and the nurses will show you how.",
        ],
      },
      {
        heading: "Things you can do",
        paragraphs: [
          "Breathing techniques, relaxation and coping strategies can help reduce the distress of breathlessness. Even how you sit or stand can help, and so can a fan or cool air from an open window on your face.",
          "When you are walking outside, go slowly and use relaxed tummy breathing. It may help to breathe in on 1 step and out on the next 2 steps.",
          "Your doctor may give you a low dose of morphine, or drugs to help the anxiety and panic that breathlessness can cause. Some people may benefit from using oxygen at home.",
        ],
      },
      {
        heading: "When to get help straight away",
        paragraphs: [
          "Contact your doctor straight away if breathlessness is a new symptom, you have pain when you breathe, or it gets worse quickly. If you cannot speak to your doctor and it continues to get worse, go straight to your nearest A&E.",
          "Always call 999 if you have chest pain or difficulty breathing. After a pleurodesis, tell your doctor or nurse straight away if you have any signs of an infection, such as a high temperature or feeling unwell.",
        ],
      },
    ],
    helps: [
      "Use a handheld fan, or sit by an open window with cool air on your face.",
      "Keep a diary of when breathlessness is difficult and what makes it worse.",
      "Write down a simple action plan for what you will do when you are breathless.",
      "Ask your cancer doctor or nurse who to contact, including at night, at weekends and on bank holidays.",
      "Ask whether a breathlessness clinic, physiotherapist or occupational therapist could help.",
      "Contact your doctor straight away if breathlessness is new or gets worse quickly.",
    ],
    tryThisWeek: [
      "Keep a fan to hand.",
      "Note when breathing is hardest.",
      "Write a breathless action plan.",
    ],
    ask: "What is causing my breathlessness, and would a pleurodesis or an indwelling pleural catheter help me?",
    interactive: {
      kind: "scenarios",
      title: "Breathless moments",
      scenarios: [
        {
          id: "chest-pain",
          situation: "You suddenly find it hard to breathe and have chest pain.",
          options: [{ text: "Call 999", best: true }, { text: "Lie down and wait for it to pass" }],
          why: "Always call 999 if you have chest pain or difficulty breathing.",
        },
        {
          id: "worse",
          situation: "Your breathlessness has got worse quickly over the day.",
          options: [{ text: "Contact your doctor straight away", best: true }, { text: "Wait for your next appointment" }],
          why: "Contact your doctor straight away if breathlessness is a new symptom, you have pain when you breathe, or it gets worse quickly.",
        },
        {
          id: "stuffy",
          situation: "You feel breathless sitting in a warm, stuffy room.",
          options: [{ text: "Use a fan or sit by an open window", best: true }, { text: "Try to breathe faster" }],
          why: "Even how you sit or stand can help, and so can a fan or cool air from an open window on your face.",
        },
        {
          id: "walking",
          situation: "Walking to the shops leaves you short of breath.",
          options: [{ text: "Go slowly and match your breathing to your steps", best: true }, { text: "Hurry to get it over with" }],
          why: "When you are walking outside, go slowly and use relaxed tummy breathing. It may help to breathe in on 1 step and out on the next 2 steps.",
        },
      ],
    },
    sources: [MAC_SYMPTOMS, MAC_EFFUSION, MAC_BREATHLESS, CRUK_PLEURODESIS],
    quiz: {
      question: "What does talc pleurodesis do?",
      options: [{ text: "Sticks the pleura together so fluid cannot collect", right: true }, { text: "Treats the cancer itself" }, { text: "Strengthens the breathing muscles" }],
      why: "In talc pleurodesis, sterile talc is put between the 2 layers of the pleura to stick them together, so there is no space for the fluid to collect.",
    },
  },
  {
    id: "meso-pain",
    kicker: "Symptoms",
    question: "How can pain from mesothelioma be managed?",
    hook: "Pain is common, but there are many ways to treat it. Telling your team early, and taking painkillers regularly, make a difference.",
    short: "Pain is a common symptom of mesothelioma, and there are different ways to manage it depending on the cause. Tell your doctors or specialist nurse early so they can treat it. Painkillers work best taken regularly, and radiotherapy, a nerve block or a short hospice stay can also help.",
    sections: [
      {
        heading: "Tell your team early",
        paragraphs: [
          "Pain is a common symptom of mesothelioma. Tell your doctors or specialist nurse if you have pain, so they can treat it early.",
          "Some people do not want to talk about pain. They may worry that it means the cancer has got worse, or be anxious about becoming addicted to painkillers. But controlling pain is an important part of your care, and it means you can do more of the things you want to do.",
        ],
      },
      {
        heading: "Describing it",
        paragraphs: [
          "Your doctor or nurse will ask you about the pain, where it is and how it affects your life. This is called a pain assessment.",
          "Keeping a record of the pain may show a pattern, even if you have notes for only a few days. It can also help to keep a record of the painkillers you take, and when you have taken them.",
        ],
      },
      {
        heading: "Painkillers",
        paragraphs: [
          "There are many drugs to treat pain, including paracetamol, codeine and morphine, anti-inflammatory drugs, steroids and patches. You may need a combination of painkillers to get the best pain control.",
          "Some people have nerve pain, which happens when mesothelioma presses on nerves. This type of pain is best treated with painkillers such as gabapentin, pregabalin or amitriptyline.",
          "Always take your painkillers at regular intervals as prescribed. Delaying them can make your pain worse, and if you have painkillers for breakthrough pain, do not wait for the pain to get bad before taking them.",
        ],
      },
      {
        heading: "Other ways to take them",
        paragraphs: [
          "If tablets are hard to swallow, many painkillers are available as liquids, skin patches or medicines that are absorbed through the lining of the mouth. A syringe pump can give painkillers continuously through a thin tube under the skin.",
          "Having a syringe pump does not stop you moving around as usual. You can carry it in a pocket or bag.",
        ],
      },
      {
        heading: "When pain is hard to control",
        paragraphs: [
          "Radiotherapy can also be used to help manage pain in some situations. Your doctor may refer you to a pain clinic, or suggest a nerve block for nerve pain that has been more difficult to control.",
          "Sometimes your doctor or nurse may suggest a short stay in hospital or a hospice, which may be for 1 to 2 weeks. In a hospice, they can often get your pain under control more quickly than at home, and once it is controlled, you can go home again.",
        ],
      },
    ],
    helps: [
      "Tell your doctors or specialist nurse about pain early, so they can treat it.",
      "Keep a record of your pain, even for only a few days.",
      "Keep a record of the painkillers you take, and when you took them.",
      "Take your painkillers at regular intervals, as prescribed.",
      "Tell your doctor or nurse if your pain gets worse.",
      "Tell your pharmacist about any medicines you buy over the counter.",
    ],
    tryThisWeek: [
      "Keep a pain diary.",
      "Log each painkiller you take.",
      "Take painkillers on time.",
    ],
    ask: "Could some of my pain be nerve pain, and would a different painkiller or a pain clinic help?",
    interactive: {
      kind: "flip-cards",
      title: "Ways pain can be treated",
      intro: "Turn a card to see how each one helps.",
      cards: [
        { id: "regular", front: "Regular painkillers", when: "For ongoing pain", back: "Paracetamol, codeine or morphine, taken at regular intervals as prescribed, so you are not in pain when the next dose is due." },
        { id: "nerve", front: "Nerve pain medicines", when: "When mesothelioma presses on nerves", back: "Painkillers such as gabapentin, pregabalin or amitriptyline treat this type of pain best." },
        { id: "pump", front: "A syringe pump", when: "If swallowing tablets is hard", back: "Gives painkillers continuously through a thin tube under the skin. You can carry it in a pocket or bag." },
        { id: "radiotherapy", front: "Radiotherapy", when: "In some situations", back: "Radiotherapy can also be used to help manage pain." },
        { id: "block", front: "A nerve block or pain clinic", when: "Pain that is hard to control", back: "A doctor or nurse who specialises in pain control can suggest other ways, such as a nerve block." },
        { id: "hospice", front: "A short hospice stay", when: "To get pain under control", back: "Doctors and nurses can adjust your medicines, often more quickly than at home. Then you can go home again." },
      ],
    },
    sources: [MAC_SYMPTOMS, MAC_PAIN, MAC_PAINKILLERS],
    quiz: {
      question: "How should painkillers for ongoing pain be taken?",
      options: [{ text: "At regular intervals, as prescribed", right: true }, { text: "Only when the pain is very bad" }, { text: "Once a week" }],
      why: "Always take your painkillers at regular intervals as prescribed.",
    },
  },
  {
    id: "meso-fatigue",
    kicker: "Energy",
    question: "Why am I so tired, and what helps?",
    hook: "Many people with mesothelioma feel tired and low on energy. Some causes can be treated, and balancing rest with gentle activity helps.",
    short: "Many people with mesothelioma feel tired and have less energy, because of the cancer or as a side effect of treatment. Some causes, such as anaemia, can be treated. Balancing rest with gentle exercise, setting small goals and planning your day around your energy can help.",
    sections: [
      {
        heading: "Tired in a different way",
        paragraphs: [
          "Many people with mesothelioma feel tired and have less energy. This may be because of the cancer, or a side effect of treatment.",
          "Fatigue in people with cancer can be more severe. They may get tired more quickly after less activity, and feel exhausted even if they are getting enough rest and sleep.",
        ],
      },
      {
        heading: "Causes that can be treated",
        paragraphs: [
          "Some causes of tiredness can be treated, for example anaemia. Your doctor can take a blood sample to check, and you may need a blood transfusion if you are very anaemic.",
          "Pain, difficulty sleeping and low mood can all add to tiredness. Tiredness is also a common symptom of depression, so if you think you are depressed, talk to your doctor or nurse.",
          "Feeling tired is a common side effect of radiotherapy. Gentle exercise like short walks, if you are able to, can give you more energy.",
        ],
      },
      {
        heading: "Balancing rest and activity",
        paragraphs: [
          "It is important not to do too much. Try to balance rest with gentle exercise, such as walking.",
          "Some people find it helpful to set some goals, such as cooking a simple meal, going for a short walk or meeting a friend.",
          "On days when you feel less well, it is okay to be less active and to rest more.",
        ],
      },
      {
        heading: "Planning your day",
        paragraphs: [
          "Try planning your day so that you have energy to do the things that are most important to you. Spread tasks out over the week, and ask other people to do hard work, such as hoovering or gardening.",
          "A fatigue diary can help you see the times when you feel your best and when you feel most tired. It is a good idea to share it with your healthcare team.",
        ],
      },
      {
        heading: "Help from your team",
        paragraphs: [
          "There are no medical tests to measure fatigue. Your specialist nurse may ask you to give it a score from 0 to 10, where 0 is no fatigue and 10 is the worst possible fatigue.",
          "Your cancer doctor, specialist nurse or GP can refer you to an occupational therapist, who can help you find ways to do everyday tasks more easily.",
        ],
      },
    ],
    helps: [
      "Ask your doctor about a blood test to check for anaemia.",
      "Balance rest with gentle exercise, such as walking.",
      "Set small goals, like cooking a simple meal or meeting a friend.",
      "Keep a fatigue diary and share it with your healthcare team.",
      "Ask other people to do hard work, such as hoovering or gardening.",
      "Ask to be referred to an occupational therapist.",
    ],
    tryThisWeek: [
      "Ask about an anaemia test.",
      "Set one small goal.",
      "Start a fatigue diary.",
    ],
    ask: "Could anaemia, my sleep or my mood be adding to my tiredness?",
    interactive: {
      kind: "risk-check",
      title: "What could be adding to it?",
      intro: "Tick any that apply. Many of these can be checked or helped by your healthcare team.",
      items: [
        { id: "anaemia", label: "Breathless, dizzy or light-headed", note: "These can be signs of anaemia. Your doctor can check with a blood test, and you may need a transfusion.", changeable: true },
        { id: "pain", label: "Pain", note: "If you have pain, it can cause fatigue. The best way to deal with this is to manage the pain.", changeable: true },
        { id: "sleep", label: "Poor sleep for a long time", note: "Trouble sleeping over a long period can lead to fatigue, low mood and difficulty concentrating.", changeable: true },
        { id: "mood", label: "Feeling low or depressed", note: "Tiredness is a common symptom of depression. Talk to your doctor or nurse.", changeable: true },
        { id: "food", label: "Eating very little", note: "You may get tired if your body does not get enough food. A dietitian can help.", changeable: true },
        { id: "treatment", label: "Having radiotherapy or other treatment", note: "Feeling tired is a common side effect. Pace yourself and plan time to rest.", changeable: false },
      ],
    },
    sources: [MAC_SYMPTOMS, MAC_TIREDNESS, MAC_RADIO],
    quiz: {
      question: "What is one cause of tiredness that can be treated?",
      options: [{ text: "Anaemia", right: true }, { text: "Getting older" }, { text: "The weather" }],
      why: "Some causes of tiredness can be treated, for example anaemia.",
    },
  },
  {
    id: "meso-palliative",
    kicker: "Care",
    question: "Why is palliative care offered from early on?",
    hook: "Palliative care is not only about the end of life. It is about managing symptoms, getting support and living as well as you can.",
    short: "Palliative care manages symptoms and gives emotional and practical support to you and your family. It can help right from when you are first diagnosed, and you can have it alongside treatments such as chemotherapy and immunotherapy. If it has not been offered, you can ask your team about it.",
    sections: [
      {
        heading: "More than end of life",
        paragraphs: [
          "It can feel uncomfortable talking about palliative care because of its link with end of life. But palliative care is far wider than this; it is about living well.",
          "Palliative care is not just for the end stages of mesothelioma. It can be helpful right from when you are first diagnosed.",
        ],
      },
      {
        heading: "What it covers",
        paragraphs: [
          "Palliative care teams specialise in managing symptoms and giving emotional support to you and your family. They have specialist nurses who can sometimes visit you at home.",
          "It can also include help with personal care, practical aids and equipment, advice on benefits or claiming compensation, and support for your family and carers.",
        ],
      },
      {
        heading: "Alongside other treatment",
        paragraphs: [
          "Receiving palliative care does not mean you have to give up other types of treatment such as chemotherapy and immunotherapy.",
          "Having palliative care does not necessarily mean that you're likely to die soon. You can still see the specialists who have been treating your illness.",
        ],
      },
      {
        heading: "How to get it",
        paragraphs: [
          "Your cancer doctor, specialist nurse or GP can refer you to a palliative care team. If your healthcare team has not raised palliative care and it is something you would like to talk about, ask about it.",
          "You can also call Mesothelioma UK free on 0800 169 2409 and ask for a call back from a mesothelioma clinical nurse specialist. The majority have received training or education in palliative care.",
          "You can have palliative care at home, in a hospital, a care home or a hospice. Many parts of palliative care are offered through the NHS.",
        ],
      },
      {
        heading: "Planning ahead, when you are ready",
        paragraphs: [
          "Thinking about your priorities and planning what you want to do can help you to feel more in control. You can talk to your doctor about managing your treatment around your plans.",
          "Making decisions and plans early, such as a will or a lasting power of attorney, can help you and your family feel less overwhelmed. Mesothelioma UK has a free will writing service.",
        ],
      },
    ],
    helps: [
      "Ask your healthcare team about palliative care if it has not been raised.",
      "Ask Mesothelioma UK for a call back from a mesothelioma nurse on 0800 169 2409.",
      "Tell the doctors or nurses looking after you if you think you need extra help at home.",
      "Think about your priorities and what is important to you.",
      "Think about a lasting power of attorney, so people you choose can make decisions if you cannot.",
      "Call the Marie Curie helpline on 0800 090 2309 for care and support.",
    ],
    tryThisWeek: [
      "Ask about palliative care.",
      "Note what matters most to you.",
      "Save the Marie Curie number.",
    ],
    ask: "Can I be referred to the palliative care team now, alongside my other treatment?",
    interactive: {
      kind: "scenarios",
      title: "Questions about palliative care",
      scenarios: [
        {
          id: "stop-treatment",
          situation: "Your nurse mentions palliative care, and you worry it means stopping immunotherapy.",
          options: [{ text: "Ask how it can work alongside your treatment", best: true }, { text: "Turn it down" }],
          why: "Receiving palliative care does not mean you have to give up other types of treatment such as chemotherapy and immunotherapy.",
        },
        {
          id: "not-offered",
          situation: "No one has mentioned palliative care, but your symptoms are hard to manage.",
          options: [{ text: "Ask your team about it", best: true }, { text: "Wait until someone offers it" }],
          why: "If your healthcare team has not raised palliative care and it is something you would like to talk about, ask about it.",
        },
        {
          id: "home",
          situation: "Managing at home is getting harder.",
          options: [{ text: "Tell the doctors or nurses looking after you", best: true }, { text: "Keep struggling on your own" }],
          why: "If you think you need extra help at home, tell the doctors or nurses looking after you. They can look at your needs and organise extra support.",
        },
        {
          id: "family",
          situation: "Your family wants to know what support there is for them.",
          options: [{ text: "Ask the palliative care team", best: true }, { text: "Assume there is nothing for them" }],
          why: "Palliative care teams specialise in managing symptoms and giving emotional support to you and your family.",
        },
      ],
    },
    sources: [MUK_PALLIATIVE, ALUK_TREATMENT, MAC_SYMPTOMS, MARIE_CURIE, CRUK_ADVANCED, MUK_PLANNING, NHS_EOL, MAC_OVERVIEW, NHS_SUPPORT],
    quiz: {
      question: "Does palliative care mean giving up treatments such as immunotherapy?",
      options: [{ text: "No, you can have both", right: true }, { text: "Yes, always" }, { text: "Only after a year" }],
      why: "Receiving palliative care does not mean you have to give up other types of treatment such as chemotherapy and immunotherapy.",
    },
  },
  {
    id: "meso-compensation",
    kicker: "Money",
    question: "What compensation and benefits can I claim?",
    hook: "Most people with mesothelioma can get financial help. A specialist solicitor and the time limits matter, so ask early.",
    short: "Most people diagnosed with mesothelioma can get financial help, through government benefits, government lump sums or compensation from an employer or their insurer. Get advice from a specialist solicitor before you claim, because there are time limits. Many of the benefits are not means tested.",
    sections: [
      {
        heading: "Two main kinds of help",
        paragraphs: [
          "Most people who have been diagnosed with mesothelioma can get financial help. This may be through benefits paid by the Department for Work and Pensions, or compensation because of asbestos exposure.",
          "Many of these benefits are not means tested, so it does not matter how much income or savings you have. Mesothelioma UK funds specialist benefits advisers who can explain what you may be entitled to and help complete the forms.",
        ],
      },
      {
        heading: "Industrial Injuries Disablement Benefit",
        paragraphs: [
          "You might get Industrial Injuries Disablement Benefit if you became ill because of a disease caused by your work. The scheme covers diffuse mesothelioma.",
          "You do not need to have worked with asbestos to get this benefit, only to have been exposed to asbestos dust while working for an employer. You cannot usually claim it if you were self-employed.",
          "You will not need to attend a face to face assessment if you have diffuse mesothelioma. If you already get means-tested benefits, get advice before applying, as it may reduce them.",
        ],
      },
      {
        heading: "Government lump sums",
        paragraphs: [
          "If you get Industrial Injuries Disablement Benefit and your former employer has stopped trading, you may get a lump sum under the 1979 Pneumoconiosis Act. Claims must be made within 12 months of the decision awarding the benefit.",
          "The 2008 scheme gives one payment if you came into contact with asbestos in the UK in other ways, such as through a relative's clothes, while self-employed or in the environment. Claims must be made within 12 months of diagnosis.",
          "The Diffuse Mesothelioma Payment Scheme is for people exposed to asbestos while working in the UK who cannot trace the employer or their insurers. Claims must be made within 3 years of diagnosis.",
        ],
      },
      {
        heading: "A civil claim",
        paragraphs: [
          "You may be able to claim compensation from an employer, or their insurer, if you were exposed to asbestos at work. You may also be able to claim if you were exposed in other ways, such as handling work clothes with asbestos on them.",
          "Court proceedings must be started within 3 years of the date you were diagnosed. Sometimes this time limit can be extended, so you can ask a specialist solicitor for advice even if you think it may be too late.",
          "If you were in the armed forces and came into contact with asbestos, you may be able to make a claim. You can call the Veterans UK helpline on 0808 1914 218 for more information.",
        ],
      },
      {
        heading: "Choosing a solicitor",
        paragraphs: [
          "Make sure the solicitor has experience of both asbestos-related disease and mesothelioma claims. Advertisements and websites offering legal advice may be misleading.",
          "Your specialist nurse or doctor, the Association of Personal Injury Lawyers or a local asbestos support group can help you find one. A specialist solicitor will see you at home or in hospital and go through your work history.",
        ],
      },
    ],
    helps: [
      "Speak to a specialist solicitor straight away, so they can advise you about time limits.",
      "Get advice before filling in benefit forms, as incorrect information may affect a claim.",
      "Call Mesothelioma UK on 0800 169 2409 to speak to a benefits adviser.",
      "Call the Macmillan Support Line on 0808 808 00 00 to speak to a money adviser.",
      "Ask your specialist nurse or doctor if they have a list of specialist solicitors.",
      "Ask a solicitor whether they specialise in mesothelioma and asbestos-related disease cases.",
    ],
    tryThisWeek: [
      "Call a benefits adviser.",
      "Ask for a list of solicitors.",
      "Check the time limits.",
    ],
    ask: "Can you provide medical reports to support a claim, and do you have a list of specialist solicitors?",
    interactive: {
      kind: "flip-cards",
      title: "The main kinds of financial help",
      intro: "Turn a card to see who each one is for. A specialist solicitor or benefits adviser can tell you which apply.",
      cards: [
        { id: "iidb", front: "Industrial Injuries Disablement Benefit", when: "Exposed while working for an employer", back: "A benefit for diseases caused by work, including diffuse mesothelioma. You cannot usually claim it if you were self-employed." },
        { id: "act-1979", front: "1979 Pneumoconiosis Act lump sum", when: "If your employer has stopped trading", back: "A lump sum if you get Industrial Injuries Disablement Benefit. Claim within 12 months of the decision awarding it." },
        { id: "scheme-2008", front: "The 2008 scheme", when: "Other contact with asbestos in the UK", back: "One payment, for example after contact through a relative, while self-employed or in the environment. Claim within 12 months of diagnosis." },
        { id: "dmps", front: "Diffuse Mesothelioma Payment Scheme", when: "Employer and insurer cannot be traced", back: "For people exposed at work in the UK and diagnosed on or after 25 July 2012. Claim within 3 years of diagnosis." },
        { id: "civil", front: "A civil compensation claim", when: "Through a specialist solicitor", back: "From an employer or their insurer. Court proceedings must be started within 3 years of diagnosis." },
        { id: "forces", front: "Armed forces", when: "Exposure while serving", back: "You may be able to make a claim. The Veterans UK helpline is 0808 1914 218." },
      ],
    },
    sources: [MAC_COMP, MUK_BENEFITS, GOV_IIDB, GOV_DMP, MUK_LEGAL, ALUK_SUPPORT, CRUK_COPING],
    quiz: {
      question: "Who should you get advice from before making a claim?",
      options: [{ text: "A specialist solicitor", right: true }, { text: "Nobody, just fill in the forms" }, { text: "An advert on a website" }],
      why: "Get advice from a specialist solicitor before you claim, because there are time limits.",
    },
  },
  {
    id: "meso-eating",
    kicker: "Eating well",
    question: "How can I keep eating well and keep my weight up?",
    hook: "Mesothelioma and its treatments can take away your appetite. Small, frequent meals, extra energy in food and a dietitian can help.",
    short: "Mesothelioma and some treatments can cause problems with eating, and loss of appetite and weight loss are common symptoms. Smaller meals more often, high-protein powders and high-calorie drinks can help. Your GP or nurse can refer you to a dietitian, and medicines such as steroids may help your appetite.",
    sections: [
      {
        heading: "Why eating gets harder",
        paragraphs: [
          "Mesothelioma and some cancer treatments can cause problems with eating and digestion. Loss of appetite and losing weight without trying are symptoms of both pleural and peritoneal mesothelioma.",
          "Fluid in the tummy, called ascites, can make your tummy swollen and make you feel sick. Breathlessness can also cause problems with eating.",
        ],
      },
      {
        heading: "Little and often",
        paragraphs: [
          "If you do not have much of an appetite, try having smaller meals more often. Use a smaller plate and make your food look attractive to eat.",
          "Keep snacks handy between meals, such as nuts, dried fruit or cheese and crackers. Eat at the times that work best for you, even if it is at different times to other people.",
        ],
      },
      {
        heading: "Adding energy",
        paragraphs: [
          "You can add high-protein powders to your normal food, or boost your meals with nutritious, high-calorie drinks. These are available from most pharmacies, or your GP may prescribe them for you.",
          "On days when making food feels too difficult, ready meals can help. When you are feeling less tired, make more than you need and freeze portions for later.",
        ],
      },
      {
        heading: "Eating when breathless",
        paragraphs: [
          "If you can, sit up at a table to eat, as breathing may feel less restricted. Smaller meals on a smaller plate are easier to manage.",
          "Try to avoid chewy food, eat slowly and take smaller mouthfuls. Adding sauces or gravies can make food easier to eat, and it helps to take sips of fluid often.",
        ],
      },
      {
        heading: "Help from your team",
        paragraphs: [
          "If you have lost your appetite, medicines such as steroids may help. You can ask your GP or nurse to refer you to a dietitian, who can advise you on which foods are best and whether any supplements would help.",
          "Sometimes peritoneal mesothelioma causes the bowel to become blocked. If you have pain that comes on suddenly, cannot poo, feel bloated or are being sick, tell your doctor straight away.",
        ],
      },
    ],
    helps: [
      "Have smaller meals more often.",
      "Keep snacks handy between meals.",
      "Add high-protein powders to your food, or try high-calorie drinks.",
      "Sit up at a table to eat if you are breathless.",
      "Ask your GP or nurse to refer you to a dietitian.",
      "Tell your doctor straight away about signs of a blocked bowel.",
    ],
    tryThisWeek: [
      "Eat smaller meals more often.",
      "Keep snacks within reach.",
      "Ask about a dietitian.",
    ],
    ask: "Could a dietitian help me, and would a medicine to help my appetite be suitable?",
    interactive: {
      kind: "scenarios",
      title: "Mealtime moments",
      scenarios: [
        {
          id: "big-plate",
          situation: "A full plate of food puts you off eating.",
          options: [{ text: "Have a smaller meal on a smaller plate", best: true }, { text: "Skip the meal" }],
          why: "If you do not have much of an appetite, try having smaller meals more often. Use a smaller plate and make your food look attractive to eat.",
        },
        {
          id: "breathless",
          situation: "You get breathless while you eat.",
          options: [{ text: "Sit up at a table, eat slowly and take small mouthfuls", best: true }, { text: "Eat quickly to get it done" }],
          why: "If you can, sit up at a table to eat, as breathing may feel less restricted. Try to avoid chewy food, eat slowly and take smaller mouthfuls.",
        },
        {
          id: "tired",
          situation: "You are too tired to make a meal tonight.",
          options: [{ text: "Have a ready meal", best: true }, { text: "Go without" }],
          why: "On days when making food feels too difficult, ready meals can help.",
        },
        {
          id: "bowel",
          situation: "You have sudden tummy pain, feel bloated and cannot poo.",
          options: [{ text: "Tell your doctor straight away", best: true }, { text: "Wait a few days to see" }],
          why: "If you have pain that comes on suddenly, cannot poo, feel bloated or are being sick, tell your doctor straight away.",
        },
      ],
    },
    sources: [MAC_SYMPTOMS, MAC_EATING_TIPS, MAC_BREATHLESS, NHS_SYMPTOMS],
    quiz: {
      question: "What can help if you have little appetite?",
      options: [{ text: "Smaller meals more often", right: true }, { text: "Three large meals a day" }, { text: "Eating only in the evening" }],
      why: "If you do not have much of an appetite, try having smaller meals more often.",
    },
  },
  {
    id: "meso-family",
    kicker: "For family",
    question: "How can family and carers get support?",
    hook: "Mesothelioma affects the people close to you too. Carers can get breaks, money advice, a carer's assessment and groups of their own.",
    short: "If you help a family member or friend with mesothelioma, you may be a carer, and there may be times when you need extra support. Talking about how you feel, taking breaks and looking after your own health all help. Carers can ask their council for a free carer's assessment, may be able to get Carer's Allowance, and can join Mesothelioma UK's groups.",
    sections: [
      {
        heading: "You may be a carer",
        paragraphs: [
          "A diagnosis of mesothelioma does not just affect the person with the disease; those close to them are affected too. Being a carer can mean emotional support, helping with daily tasks, driving them to appointments or helping with personal care.",
          "Caring for someone you love can be emotionally and physically difficult, and you may start to feel tired. It can help to talk about how you are feeling with a friend or other family member.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "It is important to take a break sometimes, by letting someone else care for the person you look after for a while. This is called respite care.",
          "Try to make sure you eat well and keep active. When you get time off from caring, doing something you enjoy can help give you more energy and help you cope.",
          "You can speak to your GP, or the specialist nurse involved in your relative's care. They can help make sure you are both getting the support you need.",
        ],
      },
      {
        heading: "Practical and money help",
        paragraphs: [
          "Anyone over 18 who cares for someone can ask adult social services at their local council for a free carer's assessment. It might recommend things like someone to take over caring so you can take a break, or help with housework.",
          "If you care for someone for at least 35 hours a week, you may be able to claim Carer's Allowance. You do not have to be related to, or live with, the person you care for.",
          "If your relative is making a compensation claim, it may be possible to get a short-term payment to help pay for some of their care. They should discuss this with a solicitor.",
        ],
      },
      {
        heading: "Groups for carers",
        paragraphs: [
          "Mesothelioma UK runs a monthly online Carers' Hour, led by one of its nurses, for anyone who knows someone living with mesothelioma. It also runs a free six-week carers' course, and a group for patients and carers under 55.",
          "Local support groups are usually open to carers, partners and families as well. Mesothelioma UK keeps an up to date list of support groups.",
        ],
      },
      {
        heading: "Food, and knowing what to expect",
        paragraphs: [
          "The amount someone can eat may change each day. Try not to put pressure on them to eat, as this can be stressful for both of you.",
          "When a person with mesothelioma dies, the doctor must inform the coroner, who will carry out an inquest. At such a difficult time, it can be even harder if you did not expect this.",
        ],
      },
    ],
    helps: [
      "Talk about how you are feeling with a friend or other family member.",
      "Take a break sometimes, and ask about respite care.",
      "Ask adult social services at your local council for a free carer's assessment.",
      "Check whether you could claim Carer's Allowance.",
      "Join Mesothelioma UK's monthly online Carers' Hour.",
      "Try not to put pressure on the person you care for to eat.",
    ],
    tryThisWeek: [
      "Plan one break.",
      "Ask for a carer's assessment.",
      "Look up the Carers' Hour.",
    ],
    ask: "What support is there for me as a carer, and can respite care be arranged?",
    interactive: {
      kind: "scenarios",
      title: "Caring moments",
      scenarios: [
        {
          id: "exhausted",
          situation: "You are worn out after weeks of caring.",
          options: [{ text: "Arrange a break through respite care", best: true }, { text: "Keep going without a break" }],
          why: "It is important to take a break sometimes, by letting someone else care for the person you look after for a while.",
        },
        {
          id: "meal",
          situation: "They have hardly touched the meal you made.",
          options: [{ text: "Leave it gently, without pressure", best: true }, { text: "Insist they finish it" }],
          why: "Try not to put pressure on them to eat, as this can be stressful for both of you.",
        },
        {
          id: "talk",
          situation: "You want to talk to people who know how it feels.",
          options: [{ text: "Join Mesothelioma UK's Carers' Hour", best: true }, { text: "Keep it all to yourself" }],
          why: "Mesothelioma UK runs a monthly online Carers' Hour, led by one of its nurses, for anyone who knows someone living with mesothelioma.",
        },
        {
          id: "money",
          situation: "You now spend most of the week caring, and money is tight.",
          options: [{ text: "Check whether you can claim Carer's Allowance", best: true }, { text: "Assume there is no help" }],
          why: "If you care for someone for at least 35 hours a week, you may be able to claim Carer's Allowance.",
        },
      ],
    },
    sources: [MUK_CARERS, MAC_CARERS, NHS_CARER_ASSESS, GOV_CARERS, MUK_BENEFITS, MUK_EMOTIONAL, MAC_EATING],
    quiz: {
      question: "Who can ask for a free carer's assessment?",
      options: [{ text: "Anyone over 18 who cares for someone", right: true }, { text: "Only paid care workers" }, { text: "Only the person with mesothelioma" }],
      why: "Anyone over 18 who cares for someone can ask adult social services at their local council for a free carer's assessment.",
    },
  },
  {
    id: "meso-mood",
    kicker: "Mood",
    question: "How can I cope with my feelings, and where is support?",
    hook: "Shock, fear, anger and sadness are all common. Talking helps, support is there, and help is available right now if you need it.",
    short: "Being diagnosed with mesothelioma can feel overwhelming, and there is no right or wrong way to react. Talking to people close to you, your nurse, a counsellor or a support group can help. If low feelings go on for more than 2 weeks, talk to your doctor or nurse; if you ever feel you cannot keep yourself safe, call 999 or go to A&E, or call Samaritans free on 116 123.",
    sections: [
      {
        heading: "Feelings you might have",
        paragraphs: [
          "When you are told you have cancer, you may feel shocked, upset, numb, frightened, uncertain, angry or sad. Everyone reacts in their own way.",
          "For many people, having a diagnosis of mesothelioma can be overwhelming. There is no right or wrong way to react, and that reaction will be individual to you.",
        ],
      },
      {
        heading: "Talking helps",
        paragraphs: [
          "Talking about how you feel, and what worries or frightens you, is usually a good place to start. For some people, talking to a professional is easier and feels safer.",
          "If you need more support, your cancer nurse specialist can help you find a counsellor or psychologist. Support groups, where you can share your feelings with other people living with mesothelioma, can be very helpful.",
        ],
      },
      {
        heading: "When it might be depression",
        paragraphs: [
          "Signs of depression can include feeling low most of the time, losing interest in things you used to enjoy, and changes in sleeping, eating or concentration. If these go on for more than 2 weeks, talk to your doctor or nurse.",
          "Depression is common, and there are many things that can help. Your GP or specialist nurse can listen, refer you to a counsellor or psychologist, or talk to you about medication.",
          "Anti-depressants can take up to 4 weeks to start helping. They are not addictive, but you should not stop taking them suddenly, and it is important to follow your doctor's advice.",
        ],
      },
      {
        heading: "People to talk to",
        paragraphs: [
          "You can call the Mesothelioma UK support line free on 0800 169 2409, the Macmillan Support Line free on 0808 808 00 00, or the Cancer Research UK nurses free on 0808 800 4040.",
          "Local support groups are often run by Asbestos Victim Support Groups and specialist mesothelioma nurses. There is also an online group specifically for peritoneal mesothelioma.",
        ],
      },
      {
        heading: "If you are struggling right now",
        paragraphs: [
          "If you have any thoughts about self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. You can call Samaritans free on 116 123, any time, day or night.",
          "For urgent help with your mental health, call 111 and select the mental health option, or ask for an urgent GP appointment.",
          "Call 999 or go to A&E if you do not feel you can keep yourself safe. A mental health emergency should be taken as seriously as a physical one, and you will not be wasting anyone's time.",
        ],
      },
    ],
    helps: [
      "Talk about how you feel with someone you trust.",
      "Ask your cancer nurse specialist about a counsellor or psychologist.",
      "Ask your nurse about local mesothelioma support groups.",
      "Talk to your doctor or nurse if low feelings go on for more than 2 weeks.",
      "Call Samaritans free on 116 123, any time, day or night.",
      "If you do not feel you can keep yourself safe, call 999 or go to A&E.",
    ],
    tryThisWeek: [
      "Tell someone how you feel.",
      "Ask about a support group.",
      "Save the Samaritans number.",
    ],
    ask: "Could my low mood be depression, and can you refer me to a counsellor or psychologist?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your doctor or nurse",
      intro: "Tick any you have had most of the time. If they go on for more than 2 weeks, talk to your doctor or nurse.",
      signs: ["Feeling low or sad most of the time", "Losing interest in things I used to enjoy", "Changes in my sleep", "Changes in my eating", "Trouble concentrating", "Feeling helpless or vulnerable", "Problems starting or finishing tasks"],
      after: "If you have thoughts of self-harm or suicide, contact your GP or specialist nurse straight away, or go to A&E. Samaritans is free on 116 123.",
      copyHeading: "How I have been feeling",
    },
    sources: [CRUK_COPING, MUK_EMOTIONAL, ALUK_SUPPORT, MAC_DEPRESSION, MUK_FREEPHONE, MAC_OVERVIEW, NHS_URGENT, SAMARITANS],
    quiz: {
      question: "When should you talk to your doctor or nurse about low feelings?",
      options: [{ text: "If they go on for more than 2 weeks", right: true }, { text: "Only if they last a year" }, { text: "Never, they always pass" }],
      why: "If these go on for more than 2 weeks, talk to your doctor or nurse.",
    },
  },
];
