import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Systemic sclerosis (scleroderma) page's pieces (content/library-conditions/body-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from Scleroderma & Raynaud's UK (SRUK),
// the NHS and Arthritis UK (the charity formerly called Versus Arthritis; its systemic sclerosis page now lives at
// arthritis-uk.org). Urgent and emergency wording is copied from the SRUK and NHS pages named. General information
// only; it never replaces what a person's own rheumatology team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const sruk = (label: string, path: string): LearnSource => ({ label: `SRUK: ${label}`, url: `https://www.sruk.co.uk/${path}` });
const auk = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/information-and-support/understanding-arthritis/${path}` });

const NHS_SCLERO = nhs("Scleroderma", "conditions/scleroderma/");
const NHS_RAYNAUDS = nhs("Raynaud's", "conditions/raynauds/");
const NHS_NIFEDIPINE = nhs("Nifedipine", "medicines/nifedipine/");
const NHS_PH = nhs("Pulmonary hypertension", "conditions/pulmonary-hypertension/");
const NHS_ECHO = nhs("Echocardiogram", "tests-and-treatments/echocardiogram/");
const NHS_SPIRO = nhs("Spirometry test", "tests-and-treatments/spirometry/");
const NHS_REFLUX = nhs("Heartburn and acid reflux", "conditions/heartburn-and-acid-reflux/");
const NHS_DYSPHAGIA = nhs("Dysphagia (swallowing problems)", "symptoms/swallowing-problems-dysphagia/");
const NHS_URGENT_MENTAL = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const SS = "about-scleroderma/signs-symptoms-of-scleroderma";
const SRUK_WHAT = sruk("What is scleroderma?", "about-scleroderma/what-is-scleroderma/");
const SRUK_TYPES = sruk("Types of scleroderma", "about-scleroderma/what-is-scleroderma/types-of-scleroderma/");
const SRUK_SSC = sruk("Systemic sclerosis", "about-scleroderma/what-is-scleroderma/types-of-scleroderma/systemic-sclerosis/");
const SRUK_CAUSES = sruk("What causes scleroderma?", "about-scleroderma/what-is-scleroderma/what-causes-scleroderma/");
const SRUK_FAQ = sruk("FAQs about scleroderma", "about-scleroderma/what-is-scleroderma/faqs-about-scleroderma/");
const SRUK_WHO = sruk("Who is more likely to get scleroderma", "about-scleroderma/diagnosing-scleroderma/who-is-more-likely-to-get-scleroderma/");
const SRUK_NEWLY = sruk("Newly diagnosed with systemic sclerosis", "about-scleroderma/newly-diagnosed-with-scleroderma/newly-diagnosed-with-systemic-sclerosis/");
const SRUK_EARLY_SIGNS = sruk("Recognising early signs and symptoms", `${SS}/recognising-early-signs-and-symptoms/`);
const SRUK_SIGNS = sruk("Signs and symptoms of scleroderma", `${SS}/`);
const SRUK_EFFECTS = sruk("Effects of scleroderma on the body", `${SS}/effects-of-scleroderma-on-the-body/`);
const SRUK_SKIN = sruk("Skin in systemic sclerosis", `${SS}/effects-of-scleroderma-on-the-body/skin-in-systemic-sclerosis/`);
const SRUK_HANDS_FEET = sruk("Hands and feet in systemic sclerosis", `${SS}/effects-of-scleroderma-on-the-body/hands-and-feet-in-systemic-sclerosis/`);
const SRUK_MOUTH = sruk("Mouth in systemic sclerosis", `${SS}/effects-of-scleroderma-on-the-body/mouth-in-systemic-sclerosis/`);
const ORG = `${SS}/effects-of-scleroderma-on-the-body/organ-involvement-in-systemic-sclerosis`;
const SRUK_LUNG = sruk("Lung involvement in systemic sclerosis", `${ORG}/lung-involvement-in-systemic-sclerosis-ssc/`);
const SRUK_HEART = sruk("Heart involvement in systemic sclerosis", `${ORG}/heart-involvement-in-systemic-sclerosis-ssc/`);
const SRUK_GI = sruk("Gastrointestinal tract involvement in systemic sclerosis", `${ORG}/gastrointestinal-tract-involvement-in-systemic-sclerosis-ssc/`);
const SRUK_KIDNEY = sruk("Kidney involvement in systemic sclerosis", `${ORG}/kidney-involvement-in-systemic-sclerosis-ssc/`);
const SRUK_TREATMENTS = sruk("Systemic sclerosis treatments", "about-scleroderma/scleroderma-treatments/systemic-sclerosis-treatments/");
const SRUK_DRUGS = sruk("Drugs and medications", "about-scleroderma/scleroderma-treatments/drugs-and-medications/");
const MS = `${SS}/managing-your-scleroderma-symptoms`;
const SRUK_PHYSIO = sruk("Physiotherapy and scleroderma", `${MS}/physiotherapy-and-scleroderma/`);
const SRUK_OT = sruk("Occupational therapy for scleroderma", `${MS}/occupational-therapy-for-scleroderma/`);
const SRUK_NUTRITION = sruk("Nutrition and scleroderma", `${MS}/nutrition-and-scleroderma/`);
const SRUK_EMOTIONAL = sruk("Emotional impact of scleroderma", `${MS}/emotional-impact-of-scleroderma/`);
const SRUK_WORK = sruk("Scleroderma at work", `${MS}/scleroderma-at-work/`);
const SRUK_RAY_WHAT = sruk("What is Raynaud's?", "about-raynauds/what-is-raynauds/");
const SRUK_RAY_LINK = sruk("Link between Raynaud's and scleroderma", "about-raynauds/what-is-raynauds/link-between-raynauds-and-scleroderma/");
const SRUK_RAY_CAUSES = sruk("What causes Raynaud's?", "about-raynauds/what-is-raynauds/what-causes-raynauds/");
const SRUK_RAY_MANAGE = sruk("Managing your Raynaud's symptoms", "about-raynauds/signs-symptoms-of-raynauds/managing-your-raynauds-symptoms/");
const SRUK_RAY_DRUGS = sruk("Prescribed drug treatments", "about-raynauds/raynauds-treatments/prescribed-drug-treatments/");
const SRUK_RAY_PROCEDURES = sruk("Medical procedures", "about-raynauds/raynauds-treatments/medical-procedures/");
const SRUK_ILOPROST = sruk("Iloprost", "iloprost/");
const SRUK_HELPLINE = sruk("Helpline", "get-support/support-for-you/helpline/");
const SRUK_GROUPS = sruk("Support groups", "get-support/support-for-you/support-groups/");
const SRUK_COMMUNITY = sruk("Our online community and social media", "get-support/support-for-you/our-online-community/");
const SRUK_BENEFITS = sruk("UK welfare benefits", "get-support/support-for-you/uk-welfare-benefits/");

const AUK_SSC = auk("Systemic sclerosis (scleroderma)", "conditions/systemic-sclerosis-scleroderma/");
const AUK_MYCOPHENOLATE = auk("Mycophenolate", "arthritis-treatments/drugs/mycophenolate/");

export const sscAnswers: LearnArticle[] = [
  {
    id: "ssc-what-it-is",
    kicker: "Understanding",
    question: "What is systemic sclerosis?",
    hook: "The body makes too much collagen, so skin and other tissues thicken and tighten. It affects everyone differently, and there is a range of treatments.",
    short: "Systemic sclerosis is a rare, long-term autoimmune condition, and a type of scleroderma. The body produces too much collagen, which can make the skin and connective tissues thick, hard and tight, and can affect blood vessels and internal organs. There is no cure, but there is a range of treatments to manage it.",
    sections: [
      {
        heading: "Too much collagen",
        paragraphs: [
          "Scleroderma is one word that describes a group of different conditions. Systemic sclerosis, sometimes known as SSc, is a type of scleroderma, so you might hear some people calling it systemic scleroderma.",
          "When you have scleroderma, your body produces too much collagen. This is a strong, fibre-like protein that supports the skin and the body's connective tissues, a bit like scaffolding.",
          "As the extra collagen builds up in the skin and organs, it causes scar-like tissue, called fibrosis, that affects how these parts of the body can work.",
        ],
      },
      {
        heading: "An autoimmune condition",
        paragraphs: [
          "Systemic sclerosis is an autoimmune condition. This means that the immune system, which protects you from illness and infection, gets confused and attacks the body's own cells.",
          "It is thought scleroderma occurs because part of the immune system has become overactive and out of control. It is not clear why this happens.",
          "Scleroderma is not contagious, so you cannot catch it or give it to anyone else. There is some evidence of a genetic link, although most people will not have a family member with the condition.",
        ],
      },
      {
        heading: "What it can affect",
        paragraphs: [
          "Blood vessels can become over-reactive, narrow and damaged. This makes it harder for your circulation to get round the body.",
          "Skin and muscles can become thicker, harder and tighter, causing stiffness and sometimes restricting movement, for example in the hands or mouth. Tissues in the digestive tract or lungs can become thicker and stiffer too.",
          "Symptoms vary widely between people. Some people have relatively mild symptoms, while others develop more serious problems affecting the skin or internal organs such as the lungs, heart or digestive system.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "Scleroderma is rare: it affects around 19,000 people in the UK. Systemic sclerosis mostly affects women, with around 4 to 5 women for every man diagnosed.",
          "It usually develops between 30 and 50 years of age, although it can come on at any age. Children are rarely affected.",
        ],
      },
      {
        heading: "Living with it",
        paragraphs: [
          "There is no cure, but there is a range of treatments available to manage it. It is important to have regular monitoring and treatment from specialist healthcare teams.",
          "For the majority of people, systemic sclerosis can be managed with treatments. Some people can carry on living lives very close to what they were already doing, by sticking to treatments, self care and annual healthcare checks.",
        ],
      },
    ],
    helps: [
      "Have regular check-ups with your doctor, preferably once a year.",
      "Stick to your treatments, self care and annual healthcare checks.",
      "Have open conversations with your healthcare professionals about how the condition may affect you.",
      "Read up on the condition and talk to other people who are affected.",
      "If you smoke, stop, to help keep blood pressure under control and improve your circulation.",
    ],
    tryThisWeek: [
      "Book your yearly check-up.",
      "Read up on the condition.",
      "If you smoke, plan to stop.",
    ],
    ask: "Which type of systemic sclerosis do I have, and which parts of my body does it affect?",
    interactive: {
      kind: "risk-check",
      title: "What is linked with systemic sclerosis?",
      intro: "Tick any that apply. Scleroderma can affect anyone, and none of these means you will get it.",
      items: [
        { id: "woman", label: "Being a woman", note: "There are thought to be around 4 to 5 women for every man diagnosed.", changeable: false },
        { id: "age", label: "Being aged 30 to 50", note: "It usually develops between 30 and 50 years of age, but can come on at any age.", changeable: false },
        { id: "family", label: "A close relative with scleroderma", note: "First-degree relatives are at slightly higher risk, but it does not get passed from parents to children.", changeable: false },
        { id: "autoimmune", label: "Autoimmune conditions in the family", note: "Autoimmune conditions tend to run in families, such as thyroid disease or lupus.", changeable: false },
        { id: "silica", label: "Work with silica dust", note: "Systemic sclerosis is linked with exposure to silica dust, in jobs such as mining.", changeable: false },
      ],
    },
    sources: [NHS_SCLERO, SRUK_SSC, SRUK_WHAT, AUK_SSC, SRUK_CAUSES, SRUK_WHO],
    quiz: {
      question: "What does the body make too much of in systemic sclerosis?",
      options: [{ text: "Collagen", right: true }, { text: "Insulin" }, { text: "Red blood cells" }],
      why: "When you have scleroderma, your body produces too much collagen.",
    },
  },
  {
    id: "ssc-raynauds",
    kicker: "Raynaud's",
    question: "What is Raynaud's, and how is it linked to systemic sclerosis?",
    hook: "Fingers that turn pale, then blue, then red in the cold. Most people with Raynaud's never get scleroderma, but it is often the first sign of it.",
    short: "Raynaud's is a common condition where blood flow to the fingers and toes is temporarily reduced, usually in response to cold or stress. More than 9 out of 10 people with systemic sclerosis have it, and it is often the first sign. But if you have Raynaud's, you only have a very small chance of getting scleroderma.",
    sections: [
      {
        heading: "What happens in an attack",
        paragraphs: [
          "Raynaud's is a common condition where blood flow to your fingers and toes is temporarily reduced, usually in response to cold temperatures or stress. Around 10 million people in the UK are thought to have it.",
          "During an attack you might have numbness and colour changes, going paler, then darker or blue, then red or purple as the blood flow returns. It can feel very painful, especially when the blood flow is returning to normal.",
          "Raynaud's may make your fingertips appear paler if you have brown or black skin. Some people also find that their ears, nose, lips or nipples are affected.",
        ],
      },
      {
        heading: "What sets it off",
        paragraphs: [
          "The most common triggers are being cold, a change in temperature from hot to cold, and emotional stress. Just walking into a cold room or reaching into a fridge or freezer can make it happen.",
          "An attack can be as short as a few minutes or it may last for hours. You might have long gaps between attacks, or you may have one or more attacks every day.",
        ],
      },
      {
        heading: "Primary and secondary",
        paragraphs: [
          "Primary Raynaud's happens on its own and is not linked to any other condition. Around 80% to 90% of people with Raynaud's have this type, and it is usually milder.",
          "Secondary Raynaud's happens because of another underlying cause, such as systemic sclerosis. People with secondary Raynaud's often have more severe symptoms, and it can cause problems like finger or toe ulcers.",
        ],
      },
      {
        heading: "The link with systemic sclerosis",
        paragraphs: [
          "More than 9 out of 10 people with systemic sclerosis have Raynaud's. It is often the first sign, and it can sometimes appear years before the onset of systemic sclerosis.",
          "But if you have Raynaud's, you only have a very small chance of getting scleroderma. It is thought less than 2 in 100 women, and less than 6 in 100 men, with Raynaud's get scleroderma.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "See a GP if your symptoms are very bad or getting worse, if they are only on one side of your body, or if you also have joint pain, skin rashes or muscle weakness. See a GP too if you are over 30 and get symptoms of Raynaud's for the first time.",
          "Raynaud's in your thumb as well as other fingers, or in just one or two fingers, is a good clue to mention to your doctor. So are puffy fingers, and reflux or heartburn.",
        ],
      },
    ],
    helps: [
      "Keep your home warm, and wear warm clothes in cold weather, especially on your hands and feet.",
      "Try to avoid sudden changes in temperature.",
      "Try breathing exercises or yoga to help you relax.",
      "Do not smoke: quitting improves your circulation.",
      "See a GP if your Raynaud's is very bad, getting worse or affecting your daily life.",
    ],
    tryThisWeek: [
      "Keep your hands and feet warm.",
      "Avoid sudden temperature changes.",
      "Try a breathing exercise to relax.",
    ],
    ask: "Is my Raynaud's primary or secondary, and what can I do about my attacks?",
    interactive: {
      kind: "signs",
      title: "Raynaud's signs to mention",
      intro: "Tick any you have noticed. Some can be clues that Raynaud's is linked to another condition.",
      signs: ["Fingers or toes turning pale, then blue, then red", "Numbness or pins and needles", "Pain as the blood flow returns", "Attacks in your thumb as well", "Symptoms on one side of your body only", "Raynaud's starting after the age of 30", "Puffy or swollen fingers", "Ulcers on your fingers or toes"],
      after: "Tell your GP or rheumatology team, especially if your Raynaud's is very bad or getting worse.",
      copyHeading: "Raynaud's signs I have noticed",
    },
    sources: [SRUK_RAY_WHAT, SRUK_RAY_LINK, NHS_RAYNAUDS, AUK_SSC, SRUK_RAY_CAUSES, SRUK_EARLY_SIGNS],
    quiz: {
      question: "Do most people with Raynaud's go on to get scleroderma?",
      options: [{ text: "No, there is only a very small chance", right: true }, { text: "Yes, almost always" }, { text: "Only if it affects the toes" }],
      why: "But if you have Raynaud's, you only have a very small chance of getting scleroderma.",
    },
  },
  {
    id: "ssc-types",
    kicker: "Types",
    question: "What is the difference between limited and diffuse systemic sclerosis?",
    hook: "Limited comes on gradually and affects less of the skin. Diffuse comes on suddenly and is more likely to affect the organs.",
    short: "There are two main types of systemic sclerosis: limited and diffuse. Limited usually affects the skin on the hands, lower arms, feet, lower legs and face, and gets worse gradually. Diffuse comes on suddenly, can affect skin all over the body, and is more likely to affect internal organs.",
    sections: [
      {
        heading: "Two main groups of scleroderma",
        paragraphs: [
          "There are two main types of scleroderma: localised and systemic. Localised scleroderma, also known as morphoea, mostly only affects the skin.",
          "Systemic sclerosis more often affects blood vessels, tissues such as muscles, and internal organs such as the lungs, heart or kidneys, as well as the skin. There are two main types, limited and diffuse, and one far more rare one.",
        ],
      },
      {
        heading: "Limited systemic sclerosis",
        paragraphs: [
          "Limited cutaneous systemic sclerosis usually only affects skin on the hands, lower arms, feet, lower legs and face. It often starts as Raynaud's.",
          "Other typical symptoms include thickening of the skin over the hands, feet and face, red spots on the skin, hard lumps under the skin, heartburn and problems swallowing.",
          "It tends to get gradually worse over time, but it is generally less severe than diffuse systemic sclerosis and can often be controlled with treatment. It can later affect organs such as the lungs and digestive system.",
        ],
      },
      {
        heading: "Diffuse systemic sclerosis",
        paragraphs: [
          "Diffuse cutaneous systemic sclerosis comes on suddenly. It causes skin changes that can affect the whole body.",
          "It is more likely to affect internal organs, such as the digestive tract, lungs, heart or kidneys. Other symptoms can include weight loss, fatigue, and joint pain and stiffness.",
          "Especially in the diffuse type, skin thickening often reduces after a number of years.",
        ],
      },
      {
        heading: "A rarer type",
        paragraphs: [
          "Sine sclerosis is a rarer type of this already rare condition. It creates very few skin symptoms, but it still affects organs such as the digestive tract and lungs.",
        ],
      },
      {
        heading: "Why the type matters",
        paragraphs: [
          "Each type can cause different kinds of symptoms and challenges, so no two people have exactly the same experience. A range of treatments is often needed to manage symptoms.",
          "SRUK no longer uses the older term CREST. One reason is that it can give a way to diagnose systemic sclerosis without working out if it is limited or diffuse, and that means treatment might not be right.",
        ],
      },
    ],
    helps: [
      "Discuss with your doctor or nurse specialist how your type of systemic sclerosis may affect your life.",
      "Report any new symptoms to your doctor.",
      "Have regular checks of your heart and lungs at the hospital.",
      "Ask your doctor about the different treatments available.",
    ],
    tryThisWeek: [
      "Ask your nurse about your type.",
      "Note any new symptoms.",
      "Check your heart and lung tests are booked.",
    ],
    ask: "Do I have limited or diffuse systemic sclerosis, and what does that mean for my checks?",
    interactive: {
      kind: "flip-cards",
      title: "The types, card by card",
      intro: "Turn each card to see what each type usually affects.",
      cards: [
        { id: "localised", front: "Localised scleroderma", when: "Also known as morphoea", back: "Mostly only affects the skin, causing one or more patches of hardened or thicker skin." },
        { id: "limited", front: "Limited systemic sclerosis", when: "Comes on gradually", back: "Usually affects skin on the hands, lower arms, feet, lower legs and face. It can later affect the lungs and gut." },
        { id: "diffuse", front: "Diffuse systemic sclerosis", when: "Comes on suddenly", back: "Skin changes can affect the whole body. More likely to affect the gut, lungs, heart or kidneys." },
        { id: "sine", front: "Sine sclerosis", when: "A rarer type", back: "Very few skin symptoms, but it still affects organs such as the digestive tract and lungs." },
      ],
    },
    sources: [NHS_SCLERO, SRUK_SSC, AUK_SSC, SRUK_TYPES, SRUK_NEWLY],
    quiz: {
      question: "Which type is more likely to affect the internal organs?",
      options: [{ text: "Diffuse systemic sclerosis", right: true }, { text: "Limited systemic sclerosis" }, { text: "Localised scleroderma" }],
      why: "It is more likely to affect internal organs, such as the digestive tract, lungs, heart or kidneys.",
    },
  },
  {
    id: "ssc-organs",
    kicker: "Organs",
    question: "How can systemic sclerosis affect the lungs, heart, gut and kidneys?",
    hook: "The gut is affected in up to 9 in 10 people, and the lungs in up to half. Many changes stay mild, and regular checks catch them early.",
    short: "Systemic sclerosis can affect tissues inside the organs as well as the skin. Up to 90% of people have some gut involvement, and up to half have some lung involvement. Heart and kidney problems are less common but can be serious, which is why regular checks matter.",
    sections: [
      {
        heading: "Why organs can be affected",
        paragraphs: [
          "If you have systemic sclerosis, it can affect tissues inside your body's organs as well as your skin. If these thicken and harden, it can affect how your body works.",
          "In some cases, organs such as the heart, lungs or kidneys are affected. This can cause a range of potentially serious problems, such as shortness of breath, high blood pressure and pulmonary hypertension.",
        ],
      },
      {
        heading: "The gut",
        paragraphs: [
          "Up to 90% of people will have some form of gut involvement, which can occur at any point and may progress over time. The gullet is affected in most people with systemic sclerosis, although this will not always cause any symptoms.",
          "Symptoms include reflux and heartburn, difficulty swallowing, loss of appetite, bloating, nausea, diarrhoea and constipation. Effective treatments are available to help keep these under control.",
        ],
      },
      {
        heading: "The lungs",
        paragraphs: [
          "Up to half of people living with systemic sclerosis will have some form of lung involvement. In many cases it is limited and remains stable, causing symptoms only on exertion.",
          "The most common form is interstitial lung disease, also called pulmonary fibrosis, where there is scarring within the lungs. Breathlessness is the most common symptom, and you may also have a persistent cough.",
          "There will often be a much better outlook if the condition is diagnosed at an early stage.",
        ],
      },
      {
        heading: "The heart",
        paragraphs: [
          "For most people with systemic sclerosis, any involvement of the heart is so mild that it is very difficult to be sure whether it is present or not.",
          "Around one in ten people with scleroderma may develop pulmonary arterial hypertension, high blood pressure in the arteries of the lungs that strains the right side of the heart. Early signs include persistent breathlessness that may be so mild at first that you barely notice it.",
        ],
      },
      {
        heading: "The kidneys",
        paragraphs: [
          "Although it is quite common for kidney function to be mildly reduced in scleroderma, this is not usually a major issue.",
          "About 5 to 10% of people with systemic sclerosis develop severe, uncontrolled high blood pressure from blood vessel changes within the kidney. This is called a scleroderma renal crisis, and it needs expert medical attention as soon as possible.",
        ],
      },
    ],
    helps: [
      "Tell your doctor if you notice changes in your gut, as untreated problems may get worse.",
      "Tell your doctor about breathlessness, especially on exertion.",
      "Go to your annual tests, which detect changes early.",
      "Have your blood pressure and kidney function monitored at regular intervals.",
      "If you are at risk of kidney problems, learn how to measure your blood pressure.",
    ],
    tryThisWeek: [
      "Note any changes in your gut.",
      "Note breathlessness on stairs or hills.",
      "Check your annual tests are booked.",
    ],
    ask: "Which of my organs are being checked, and is anything showing up?",
    interactive: {
      kind: "signs",
      title: "Organ changes to report",
      intro: "Tick any you have noticed. Some can be early signs that systemic sclerosis is affecting an organ.",
      signs: ["Heartburn or reflux", "Difficulty swallowing", "Bloating, diarrhoea or constipation", "Breathlessness on stairs or hills", "A persistent cough", "Swollen feet or ankles", "Dizziness or lightheadedness", "Severe headaches or blurred vision"],
      after: "Tell your rheumatology team. A scleroderma renal crisis needs expert medical attention as soon as possible.",
      copyHeading: "Changes I have noticed",
    },
    sources: [SRUK_SIGNS, SRUK_LUNG, SRUK_HEART, SRUK_GI, SRUK_KIDNEY, NHS_SCLERO],
    quiz: {
      question: "How many people with systemic sclerosis have some gut involvement?",
      options: [{ text: "Up to 90%", right: true }, { text: "Almost none" }, { text: "Only people with the limited type" }],
      why: "Up to 90% of people will have some form of gut involvement, which can occur at any point and may progress over time.",
    },
  },
  {
    id: "ssc-medicines",
    kicker: "Treatment",
    question: "Which medicines calm the immune system in systemic sclerosis?",
    hook: "Immunosuppressants such as mycophenolate slow the condition down. They take time to work, and they need regular blood tests.",
    short: "Medicines that reduce the activity of the immune system can slow the progression of systemic sclerosis. They include mycophenolate, methotrexate, cyclophosphamide and azathioprine, and sometimes the biological therapy rituximab. They are used especially where the skin or lung disease is more extensive, and they need regular blood tests.",
    sections: [
      {
        heading: "Treatment matched to you",
        paragraphs: [
          "There is currently no cure, but there are drugs that can help to control symptoms and treat any complications. The treatment you need will depend on how the condition affects you.",
          "Your treatment should follow a clear plan agreed between you and your doctor, reflecting your goals and wishes as far as possible. Because scleroderma is rare and treatment can be complex, your care should be managed by a specialist team.",
        ],
      },
      {
        heading: "Immunosuppressants",
        paragraphs: [
          "Immunosuppressive drugs target the immune system. They may be used in more severe cases, especially where the skin or lung disease is more extensive.",
          "They include methotrexate, ciclosporin, cyclophosphamide, mycophenolate and azathioprine. Whether you are prescribed any of these depends on how systemic sclerosis affects you.",
          "The biological therapy rituximab is sometimes used to treat severe cases. Biological therapies are newer drugs that have a more targeted approach.",
        ],
      },
      {
        heading: "Mycophenolate",
        paragraphs: [
          "Mycophenolate is used for lupus and other connective tissue disorders, including scleroderma. It works by reducing the activity of your body's immune system.",
          "It does not work immediately, and it may be up to four months before you notice any benefit. Keep taking it even if it does not seem to be working at first.",
          "It can affect the blood count and can sometimes cause liver or kidney problems. You will have a blood test before you start treatment and regular blood tests while you are taking it.",
        ],
      },
      {
        heading: "Steroids",
        paragraphs: [
          "Steroid tablets can be used in the early stages, when the skin is starting to look puffy, or later on if the muscles or lungs are affected.",
          "They are usually given in low doses, because high doses can raise blood pressure and increase the risk of kidney problems.",
        ],
      },
      {
        heading: "Infections and side effects",
        paragraphs: [
          "All medicines can have side effects. Your doctor will talk you through the risks and benefits, and your team can adjust your medicines or manage side effects if they happen.",
          "On mycophenolate, tell your doctor, rheumatology nurse or pharmacist straight away about a sore throat, a fever or flu-like symptoms. See your doctor as soon as possible if you come into contact with anyone with shingles or chickenpox.",
          "Regular flu and pneumonia vaccinations can help protect lungs that have been damaged by scleroderma.",
        ],
      },
    ],
    helps: [
      "Keep taking mycophenolate even if it does not seem to be working at first.",
      "Keep a note of when your blood tests are due, and remind your doctor about them.",
      "Tell your team straight away about a sore throat, a fever or flu-like symptoms.",
      "See your doctor as soon as possible after contact with shingles or chickenpox.",
      "Ask about your yearly flu vaccine and the pneumococcal vaccine.",
      "Talk to your doctor before you try a complementary medicine.",
    ],
    tryThisWeek: [
      "Note your next blood test date.",
      "Learn the signs of infection to report.",
      "Ask about your flu vaccine.",
    ],
    ask: "Would a medicine to calm my immune system help me, and how will we check it is working?",
    interactive: {
      kind: "flip-cards",
      title: "Medicines, card by card",
      intro: "Turn each card to see what each kind of medicine does.",
      cards: [
        { id: "immunosuppressants", front: "Immunosuppressants", when: "Methotrexate, azathioprine and others", back: "Target the immune system, especially where the skin or lung disease is more extensive." },
        { id: "mycophenolate", front: "Mycophenolate", when: "Capsules or tablets, with food", back: "Reduces the activity of the immune system. It may be up to four months before you notice any benefit." },
        { id: "rituximab", front: "Rituximab", when: "Sometimes, for severe cases", back: "A biological therapy with a more targeted approach to key cells in the immune system." },
        { id: "steroids", front: "Steroid tablets", when: "Early on, or for muscles or lungs", back: "Usually given in low doses, because high doses can raise blood pressure and affect the kidneys." },
        { id: "painkillers", front: "Painkillers and NSAIDs", when: "For painful, swollen joints", back: "Should help to relieve joint pain and swelling. A doctor can prescribe stronger ones if needed." },
      ],
    },
    sources: [AUK_SSC, SRUK_TREATMENTS, NHS_SCLERO, AUK_MYCOPHENOLATE, SRUK_DRUGS],
    quiz: {
      question: "How long can mycophenolate take to help?",
      options: [{ text: "Up to four months", right: true }, { text: "A few hours" }, { text: "It works from the first dose" }],
      why: "It does not work immediately, and it may be up to four months before you notice any benefit.",
    },
  },
  {
    id: "ssc-raynauds-care",
    kicker: "Treatment",
    question: "How are Raynaud's and finger ulcers treated?",
    hook: "Medicines that open up the blood vessels can ease attacks and help ulcers heal. An ulcer that looks infected needs treatment quickly.",
    short: "Medicines that improve circulation, such as nifedipine, can make Raynaud's attacks less frequent and help treat and prevent finger ulcers. Iloprost, given through a drip in hospital, is used for more severe cases. Ulcers need dressing, and signs of infection mean getting treatment quickly.",
    sections: [
      {
        heading: "Medicines that open blood vessels",
        paragraphs: [
          "These treatments help improve circulation, so Raynaud's attacks should improve, or the length between attacks should improve. They can also treat and help prevent ulcers on the fingers and toes, known as digital ulcers.",
          "Nifedipine is the only medicine licensed to treat Raynaud's in the UK. It is a calcium channel blocker that works by relaxing and widening your blood vessels.",
          "Some people need to take it every day. Others only use it to prevent Raynaud's, for example during cold weather.",
        ],
      },
      {
        heading: "Other options and side effects",
        paragraphs: [
          "Other medicines include diltiazem and sildenafil. You may have to try several until you find the one that works best for you, and some can take up to three weeks to take full effect.",
          "Side effects may include headaches, dizziness, flushing or low blood pressure. To try to avoid them, starting on a lower dose for a few days and going up gradually is recommended.",
          "Common side effects of nifedipine include headaches, flushing, constipation and swollen ankles. Do not eat grapefruit or drink grapefruit juice while taking it.",
        ],
      },
      {
        heading: "Iloprost for severe cases",
        paragraphs: [
          "In more severe cases, particularly where there are painful ulcers that will not heal, iloprost can be given as an infusion, a drip into a vein, usually in a hospital.",
          "It is usually given for about six hours a day for 3 to 5 days in a row. Ulcers may begin to improve within a few days, and the benefits may carry on for weeks and sometimes even months.",
        ],
      },
      {
        heading: "Caring for ulcers",
        paragraphs: [
          "Around 45% of people with systemic sclerosis develop ulcers, most commonly on the fingers and toes. For ulcers on the fingers and toes, a dry dressing is often all that is needed.",
          "Dressings ease pain, contain any discharge, and stop dirt and infection getting into the wound. Antibiotic ointment, cleaning and protection from the cold may help prevent infection of fingertip ulcers.",
          "Signs that an ulcer has become infected are increasing pain, redness, discharge and smell. Digital ulcers can get infected, so it is important to get treatment quickly.",
        ],
      },
      {
        heading: "Procedures",
        paragraphs: [
          "For some cases of severe Raynaud's, approaches other than medicines may be an option. Doctors can inject local anaesthetics or Botox to block the nerves in affected hands or feet, and this may need repeating.",
          "Surgery to strip away tiny nerves around the blood vessels may reduce how often attacks happen and how long they last, but it is not always successful.",
        ],
      },
    ],
    helps: [
      "Tell your GP, pharmacist and consultant about all the natural and prescription medicines you take.",
      "Give a new Raynaud's medicine time, as some take up to three weeks to work fully.",
      "Keep ulcers dressed, clean and protected from the cold.",
      "Get treatment quickly if an ulcer shows increasing pain, redness, discharge or smell.",
      "Speak to a pharmacist or doctor about side effects that bother you or do not go away.",
      "Call NHS 111 if you take nifedipine and think you might be having serious side effects.",
    ],
    tryThisWeek: [
      "List every medicine you take.",
      "Keep any ulcer dressed and warm.",
      "Learn the signs of an infected ulcer.",
    ],
    ask: "Which medicine would suit my Raynaud's, and what should I do if I get an ulcer?",
    interactive: {
      kind: "scenarios",
      title: "Raynaud's and ulcer moments",
      scenarios: [
        {
          id: "ulcer",
          situation: "A fingertip ulcer is getting more painful, red and smelly.",
          options: [{ text: "Get treatment quickly", best: true }, { text: "Wait to see if it clears" }],
          why: "Signs that an ulcer has become infected are increasing pain, redness, discharge and smell. Digital ulcers can get infected, so it is important to get treatment quickly.",
        },
        {
          id: "headache",
          situation: "You get headaches in the first days on nifedipine.",
          options: [{ text: "Speak to a pharmacist or doctor", best: true }, { text: "Stop taking it yourself" }],
          why: "Speak to a pharmacist or doctor if you have side effects that bother you or do not go away, and keep taking your medicine unless you are advised to stop.",
        },
        {
          id: "breakfast",
          situation: "You fancy grapefruit juice with breakfast while on nifedipine.",
          options: [{ text: "Choose a different drink", best: true }, { text: "A small glass is fine" }],
          why: "Do not eat grapefruit or drink grapefruit juice while taking it.",
        },
        {
          id: "slow",
          situation: "A new Raynaud's medicine has not helped after a week.",
          options: [{ text: "Give it time, then talk to your doctor", best: true }, { text: "Decide it will never work" }],
          why: "Some can take up to three weeks to take full effect.",
        },
      ],
    },
    sources: [SRUK_RAY_DRUGS, NHS_NIFEDIPINE, SRUK_SKIN, SRUK_ILOPROST, AUK_SSC, SRUK_RAY_PROCEDURES, SRUK_RAY_CAUSES, SRUK_DRUGS, NHS_RAYNAUDS],
    quiz: {
      question: "Which of these are signs that an ulcer has become infected?",
      options: [{ text: "Increasing pain, redness, discharge and smell", right: true }, { text: "Feeling cold in the fingers" }, { text: "Slow healing alone" }],
      why: "Signs that an ulcer has become infected are increasing pain, redness, discharge and smell.",
    },
  },
  {
    id: "ssc-checks",
    kicker: "Check-ups",
    question: "Why do I need regular checks of my lungs and heart?",
    hook: "Lung and heart problems can start with no symptoms at all. Yearly tests catch changes early, while treatment can do the most.",
    short: "Regular checks and annual testing help your specialist spot changes early and start treatment quickly. Breathing tests and a heart scan called an echocardiogram are used to check the lungs and heart, and your blood pressure and kidney function are checked too. Arthritis UK says check-ups are best once a year.",
    sections: [
      {
        heading: "Why checks matter",
        paragraphs: [
          "Regular checks and annual testing are a critical part of managing scleroderma. They help your specialist spot any changes early and start any necessary treatment as quickly as possible.",
          "It is important that potentially serious complications are spotted early. You should therefore have regular check-ups with your doctor, preferably once a year.",
        ],
      },
      {
        heading: "Lung tests",
        paragraphs: [
          "Lung involvement may cause no obvious symptoms, so it is essential that it is identified as early as possible. Testing can detect signs of lung involvement at an early stage.",
          "A spirometry test measures how much air you can breathe out in one breath, and is also called a lung function test. It can be used to monitor a lung condition, for example to see how well treatment is working.",
          "Other tests can include x-rays and CT scans. Low oxygen levels during exercise can be tested in hospital during a standard six-minute walk test.",
        ],
      },
      {
        heading: "Heart tests",
        paragraphs: [
          "Because there are effective treatments for pulmonary arterial hypertension, early detection is vital. If you have systemic sclerosis, you should be offered these tests routinely, so ask your doctor if they are not being carried out.",
          "Tests may include an ultrasound of the heart, called an echocardiogram, breathing tests, exercise tests and x-rays.",
          "An echocardiogram uses soundwaves to create an image of your heart. The most common type takes around 30 to 40 minutes.",
        ],
      },
      {
        heading: "Blood pressure and kidneys",
        paragraphs: [
          "People with scleroderma are advised to have their blood pressure and kidney function monitored at regular intervals. High blood pressure has no symptoms, but it can increase your risk of kidney and heart problems.",
          "You can get a simple, quick and painless blood pressure check free of charge at your GP surgery and many high street pharmacies.",
        ],
      },
      {
        heading: "Between check-ups",
        paragraphs: [
          "Breathlessness is worth contacting your treatment team about. Check whether you can still do as much as you could 6 months before, such as climbing a flight of stairs or walking a certain distance.",
        ],
      },
    ],
    helps: [
      "Have check-ups with your doctor, preferably once a year.",
      "Ask your doctor if your routine heart and lung tests are not being carried out.",
      "Have your blood pressure and kidney function monitored at regular intervals.",
      "Contact your treatment team about breathlessness.",
      "Compare what you can do now with 6 months before, such as climbing stairs.",
    ],
    tryThisWeek: [
      "Book your yearly check-up.",
      "Ask when your next heart and lung tests are.",
      "Get a blood pressure check.",
    ],
    ask: "When are my next breathing tests and heart scan, and how often will I have them?",
    interactive: {
      kind: "flip-cards",
      title: "Your regular checks",
      intro: "Turn each card to see what each check looks for.",
      cards: [
        { id: "spirometry", front: "Spirometry", when: "A breathing test", back: "Measures how much air you can breathe out in one breath, to check how well your lungs are working." },
        { id: "walk", front: "Six-minute walk test", when: "In hospital", back: "Tests whether blood oxygen levels drop too low when you exercise." },
        { id: "scans", front: "X-rays and CT scans", when: "To look at the lungs", back: "Help find out whether other parts of the body, such as the lungs, are affected." },
        { id: "echo", front: "Echocardiogram", when: "A heart scan, around 30 to 40 minutes", back: "Uses soundwaves to create an image of your heart and see how well it is working." },
        { id: "bp", front: "Blood pressure check", when: "At regular intervals", back: "High blood pressure has no symptoms, but it can increase your risk of kidney and heart problems." },
        { id: "urine", front: "Urine test", when: "At check-ups", back: "Protein in the urine can be an early sign of kidney involvement." },
      ],
    },
    sources: [AUK_SSC, SRUK_EFFECTS, SRUK_HEART, SRUK_LUNG, NHS_ECHO, NHS_SPIRO, SRUK_KIDNEY, SRUK_FAQ],
    quiz: {
      question: "How often does Arthritis UK suggest check-ups with your doctor?",
      options: [{ text: "Preferably once a year", right: true }, { text: "Only when you feel unwell" }, { text: "Once every ten years" }],
      why: "You should therefore have regular check-ups with your doctor, preferably once a year.",
    },
  },
  {
    id: "ssc-therapy",
    kicker: "Therapy",
    question: "How can physiotherapy, hand exercises and skin care help?",
    hook: "Stretching keeps tight skin and joints moving, and daily moisturising keeps skin supple. Therapists can show you how.",
    short: "A regular exercise programme keeps the skin flexible, reduces tightening in the joints and keeps the blood moving. A physiotherapist or specialist hand therapist can teach the best exercises, and an occupational therapist can help with daily tasks. Moisturising every day helps with dry skin.",
    sections: [
      {
        heading: "Why keep moving",
        paragraphs: [
          "A regular exercise programme will keep your skin flexible, reduce any tightening in your joints and keep your blood moving freely. Although you may need to rest if your joints become swollen, it is generally helpful to keep moving as much as possible.",
          "A physiotherapist should be able to advise you on a home exercise programme to keep you as active and mobile as possible. Exercise can increase strength, flexibility and balance, aid digestion and sleep, and lift your mood.",
        ],
      },
      {
        heading: "Hand exercises",
        paragraphs: [
          "Regular stretching and range of movement exercises should help to reduce tightness around the joints, particularly in the hands and wrist. A physiotherapist or specialist hand therapist can teach you the best exercises, and may suggest splints.",
          "SRUK suggests practising making a fist and then stretching all your fingers out like a star. Touch each one of your fingertips with your thumb tip, then gently slide your thumb tip down the side of each finger.",
          "With your hands face down on a table, lift each finger up in turn. Warm paraffin wax baths can relieve tight, painful hands and make exercising easier, but do not use a wax bath if you have any open finger ulcers.",
        ],
      },
      {
        heading: "Face and mouth",
        paragraphs: [
          "A physiotherapist might be able to give you special exercises to help keep mobility in the muscles, connective tissue and skin in your face.",
          "Mouth stretching exercises may be useful for some people with a smaller mouth opening, done once or twice a day. Warm up first by massaging around your mouth or with a warm flannel, and the exercises should not be painful.",
        ],
      },
      {
        heading: "Skin care",
        paragraphs: [
          "Regular daily use of moisturisers can help dry skin. Ointments form a barrier that traps in your skin's natural moisture, while creams soak in well but are not usually as effective.",
          "Do not use strong detergents or anything else that irritates your skin, and avoid soaps that contain lanolin. If your hands are prone to dry skin, put cream on them whenever they have been in water.",
          "Moisturise your feet as often as you can, being careful not to leave any cream between your toes, and inspect your feet daily.",
        ],
      },
      {
        heading: "Occupational therapy",
        paragraphs: [
          "An occupational therapist can help you adapt to any movement difficulties, by suggesting changes to your home and advising you on equipment to make daily life easier.",
          "They may assess your hands, provide splints, and help you plan, prioritise and pace activities to reduce fatigue. You can usually ask your consultant rheumatologist or your GP to refer you.",
        ],
      },
    ],
    helps: [
      "Ask a physiotherapist for a home exercise programme.",
      "Do regular stretching and range of movement exercises for your hands and wrists.",
      "Use a moisturiser every day.",
      "Put cream on your hands whenever they have been in water.",
      "Inspect your feet daily, and ask to be referred to NHS podiatry services.",
      "Ask your rheumatologist or GP about a referral to an occupational therapist.",
    ],
    tryThisWeek: [
      "Do your hand stretches each day.",
      "Moisturise every day.",
      "Check your feet daily.",
    ],
    ask: "Can I see a physiotherapist or hand therapist, and which exercises suit me?",
    interactive: {
      kind: "timeline",
      title: "A daily hand routine",
      steps: [
        { id: "warm", when: "Step 1", title: "Warm up", points: ["Warm paraffin wax can ease tight, painful hands.", "Do not use a wax bath with open finger ulcers."] },
        { id: "fist", when: "Step 2", title: "Fist and star", points: ["Make a fist, then stretch all your fingers out like a star."] },
        { id: "thumb", when: "Step 3", title: "Thumb touches", points: ["Touch each fingertip with your thumb tip.", "Gently slide your thumb tip down the side of each finger."] },
        { id: "lift", when: "Step 4", title: "Finger lifts", points: ["With your hands face down on a table, lift each finger up in turn."] },
        { id: "cream", when: "Step 5", title: "Moisturise", points: ["Put cream on your hands, especially after they have been in water."] },
      ],
    },
    sources: [AUK_SSC, SRUK_PHYSIO, SRUK_HANDS_FEET, SRUK_SKIN, SRUK_OT, NHS_SCLERO, SRUK_MOUTH],
    quiz: {
      question: "What does a regular exercise programme do for systemic sclerosis?",
      options: [{ text: "Keeps skin flexible and joints moving", right: true }, { text: "Cures the condition" }, { text: "Nothing, rest is better" }],
      why: "A regular exercise programme will keep your skin flexible, reduce any tightening in your joints and keep your blood moving freely.",
    },
  },
  {
    id: "ssc-warmth",
    kicker: "Warmth",
    question: "How do I keep warm with systemic sclerosis?",
    hook: "Planning ahead is the key to preventing a Raynaud's attack. Thin layers, warm hands and feet, and a warm home all help.",
    short: "The key to managing Raynaud's is to try to prevent an attack, so planning ahead is vital. Wear thin layers, a hat and gloves, avoid sudden changes in temperature, and heat the rooms you use a lot to 18 degrees if you can. Eating regularly, moving around and not smoking help too.",
    sections: [
      {
        heading: "Why warmth matters",
        paragraphs: [
          "The key to managing Raynaud's is to try to prevent an attack, so planning ahead is vital. Keeping your body warm keeps your circulation working well and reduces the chance that your blood vessels go into spasm.",
          "Keeping warm from top to toe helps open the blood vessels to your arms, hands, legs and feet. SRUK also says caution with cold exposure may reduce the risk of a kidney crisis.",
          "Cold might be a driver of tightening of the face, so cover your face during cold spells, with a scarf or a neck gaiter.",
        ],
      },
      {
        heading: "Clothes and accessories",
        paragraphs: [
          "Wear lots of thin layers and loose clothing, which trap warm air and let you adjust your temperature. Layers of clothing keep you warmer than thick clothes.",
          "Wear a hat when it is cold. Use mittens or gloves, hand and foot warmers, and warm socks indoors rather than going barefoot.",
          "Thermal clothes and electrically heated gloves and socks can also help.",
        ],
      },
      {
        heading: "Out and about",
        paragraphs: [
          "Avoid sudden changes of temperature without preparing, such as going from a hot summer day into an air-conditioned car. Keep a pair of gloves and an extra layer in your car boot, work locker or desk.",
          "Avoid touching cold surfaces and objects without insulated gloves, such as an ice-cold drink from the fridge or food from the freezer.",
          "On a cold day, breathe in through your nose and out through your mouth. Take an insulated flask of something hot on a car journey or walk.",
        ],
      },
      {
        heading: "At home",
        paragraphs: [
          "Heat rooms you use a lot to 18 degrees if you can, and reduce draughts with draught excluders. Keep doors closed, and keep your bedroom windows closed at night.",
          "Use a hot water bottle if you are sitting for a while. A hot bath or shower before bed can increase blood flow to the hands and feet.",
        ],
      },
      {
        heading: "Eating, moving and not smoking",
        paragraphs: [
          "Have at least one hot meal a day and stay hydrated. Move around regularly, and try not to sit still for more than an hour or so indoors.",
          "If you smoke, stopping is one of the best things you can do. Just one cigarette can reduce your body temperature by up to one degree for up to 20 minutes.",
        ],
      },
    ],
    helps: [
      "Wear thin layers, a hat, and gloves or mittens in the cold.",
      "Keep gloves and an extra layer in your car, work locker or desk.",
      "Heat rooms you use a lot to 18 degrees if you can.",
      "Have at least one hot meal a day.",
      "Try to avoid sudden changes in temperature.",
      "Do not smoke.",
    ],
    tryThisWeek: [
      "Pack spare gloves for the car or work.",
      "Have one hot meal a day.",
      "Block a draught at home.",
    ],
    ask: "Is there anything else I can do to prevent Raynaud's attacks in winter?",
    interactive: {
      kind: "scenarios",
      title: "Cold moments",
      scenarios: [
        {
          id: "freezer",
          situation: "You need something from the freezer aisle.",
          options: [{ text: "Put on insulated gloves first", best: true }, { text: "Grab it quickly with bare hands" }],
          why: "Avoid touching cold surfaces and objects without insulated gloves, such as an ice-cold drink from the fridge or food from the freezer.",
        },
        {
          id: "car",
          situation: "It is a hot day and the car air conditioning is on full.",
          options: [{ text: "Have an extra layer ready", best: true }, { text: "Go straight in wearing just a T-shirt" }],
          why: "Avoid sudden changes of temperature without preparing, such as going from a hot summer day into an air-conditioned car.",
        },
        {
          id: "sofa",
          situation: "You are settling down to watch a film.",
          options: [{ text: "Use a hot water bottle", best: true }, { text: "Sit still for hours without warmth" }],
          why: "Use a hot water bottle if you are sitting for a while.",
        },
        {
          id: "walk",
          situation: "You are going for a walk on a frosty morning.",
          options: [{ text: "Take a flask and breathe in through your nose", best: true }, { text: "Breathe the cold air in through your mouth" }],
          why: "On a cold day, breathe in through your nose and out through your mouth. Take an insulated flask of something hot on a car journey or walk.",
        },
      ],
    },
    sources: [SRUK_RAY_MANAGE, AUK_SSC, NHS_RAYNAUDS, SRUK_KIDNEY, SRUK_MOUTH],
    quiz: {
      question: "How warm should the rooms you use a lot be, if you can manage it?",
      options: [{ text: "18 degrees", right: true }, { text: "10 degrees" }, { text: "It does not matter" }],
      why: "Heat rooms you use a lot to 18 degrees if you can, and reduce draughts with draught excluders.",
    },
  },
  {
    id: "ssc-eating",
    kicker: "Eating",
    question: "How can I manage eating, swallowing and reflux?",
    hook: "Most people with systemic sclerosis have some swallowing problems or heartburn. Small meals, chewing well and medicines can help.",
    short: "Systemic sclerosis can weaken the muscles of the gullet, which can make swallowing difficult and let stomach acid leak upwards. Eating six small meals a day, chewing well, having your largest meal in the middle of the day and raising the head of the bed can help. Your doctor may prescribe medicines that reduce stomach acid.",
    sections: [
      {
        heading: "Why it happens",
        paragraphs: [
          "Systemic sclerosis can cause the muscles in the gullet to weaken, which can make swallowing difficult. It can also cause stomach acid to leak upwards, causing heartburn.",
          "Most people with systemic sclerosis have some problems with swallowing or heartburn. Less often, other parts of the digestive system may be affected, leading to bloating, diarrhoea or constipation.",
          "The gullet is affected in most people with systemic sclerosis, around 80 to 90%, although this will not always cause any symptoms.",
        ],
      },
      {
        heading: "Eating tips",
        paragraphs: [
          "Eat six small meals a day instead of three larger ones. Eat slowly, chew thoroughly and drink plenty of water with meals.",
          "Eating your largest meal in the middle of the day can help to avoid heartburn. Do not eat too much in the evening, so you have time for digestion before you go to bed.",
          "Spicy and hot foods may make heartburn worse. There is no specific diet recommended, but many people describe improvement in symptoms with changes to their diet.",
        ],
      },
      {
        heading: "At night",
        paragraphs: [
          "Raise the head of your bed a few inches to stop acid coming back up from your stomach while you sleep. The NHS suggests raising it by around 10 to 20cm with wood, bricks or books, rather than using extra pillows.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "Your doctor may recommend antacids, which neutralise stomach acid, or a proton pump inhibitor, which reduces the amount of acid your stomach makes. You may need to take them for months or years.",
          "If you have swallowing difficulties, nausea or vomiting because the gut muscles are not working as they should, prokinetic medicines can help.",
        ],
      },
      {
        heading: "Keeping well nourished",
        paragraphs: [
          "Many people have symptoms that lead to a poor appetite and weight loss, so it is important to keep up a good diet. If weight loss is severe, advice from a dietitian may help.",
          "A smaller mouth opening and a dry mouth can make eating harder. Sipping water regularly is often the simplest way to keep the mouth moist.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you have difficulty swallowing, cough or choke while eating or drinking, or feel like something is stuck in your throat after eating.",
        ],
      },
    ],
    helps: [
      "Eat six small meals a day instead of three larger ones.",
      "Eat slowly, chew thoroughly and drink plenty of water with meals.",
      "Have your largest meal in the middle of the day.",
      "Raise the head of your bed by around 10 to 20cm.",
      "Discuss any new or severe gut symptoms with your clinical team.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you have difficulty swallowing or choke while eating.",
    ],
    tryThisWeek: [
      "Try six small meals a day.",
      "Make lunch your largest meal.",
      "Raise the head of your bed.",
    ],
    ask: "Would a medicine for reflux help me, and should I see a dietitian?",
    interactive: {
      kind: "risk-check",
      title: "What makes your reflux worse?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "muscles", label: "Weaker gullet muscles", note: "Systemic sclerosis can weaken them. Medicines can reduce stomach acid.", changeable: false },
        { id: "big-meals", label: "Three large meals", note: "Six small meals a day instead of three larger ones helps digestion.", changeable: true },
        { id: "evening", label: "Eating a lot in the evening", note: "Leave time for digestion before bed, and have your largest meal at midday.", changeable: true },
        { id: "spicy", label: "Spicy and hot foods", note: "Spicy and hot foods may make heartburn worse.", changeable: true },
        { id: "flat", label: "Lying flat at night", note: "Raise the head of your bed by around 10 to 20cm.", changeable: true },
        { id: "smoking", label: "Smoking", note: "The NHS lists smoking as something that can cause or worsen heartburn.", changeable: true },
      ],
    },
    sources: [SRUK_GI, AUK_SSC, SRUK_FAQ, NHS_REFLUX, NHS_DYSPHAGIA, SRUK_NUTRITION, SRUK_MOUTH],
    quiz: {
      question: "Which eating pattern can help with heartburn?",
      options: [{ text: "Six small meals, with the largest at midday", right: true }, { text: "One large meal late at night" }, { text: "Skipping meals" }],
      why: "Eat six small meals a day instead of three larger ones.",
    },
  },
  {
    id: "ssc-urgent",
    kicker: "Urgent",
    question: "Which symptoms should I report quickly?",
    hook: "Very high blood pressure with severe headaches or blurred vision can mean a kidney crisis. Recognised and treated quickly, people can recover.",
    short: "A scleroderma renal crisis causes very high blood pressure, severe headaches or blurred vision, breathlessness, nausea and vomiting, and it needs expert medical attention as soon as possible. Changes in your breathing and infected finger ulcers also need reporting quickly. For sudden chest pain that does not stop after a few minutes, call 999 or go to A&E.",
    sections: [
      {
        heading: "Kidney crisis",
        paragraphs: [
          "About 5 to 10% of people with systemic sclerosis develop severe, uncontrolled high blood pressure, usually but not only those whose skin is worsening fast. This is called a scleroderma renal crisis, and it needs expert medical attention as soon as possible.",
          "The symptoms are very high blood pressure, severe headaches or blurred vision, breathlessness, nausea and vomiting, heart palpitations and, in some cases, seizures.",
          "A person having a renal crisis needs urgent admission to hospital. People may recover successfully, but only if the problem is recognised and treated quickly.",
        ],
      },
      {
        heading: "Watching your blood pressure",
        paragraphs: [
          "If you are at risk, learn how to measure your blood pressure and do so at least every other day. People with scleroderma are advised to have their blood pressure and kidney function monitored at regular intervals.",
          "A renal crisis can be treated or prevented with drugs that help to control the blood pressure, especially ACE inhibitors.",
        ],
      },
      {
        heading: "Breathlessness and chest pain",
        paragraphs: [
          "Shortness of breath, or breathlessness on exertion, are common signs of lung involvement. It is important to tell your doctor if you notice any changes.",
          "Call 999 or go to A&E if you get sudden chest pain that does not stop after a few minutes, or you have heart palpitations with chest pain, shortness of breath or feeling faint. These could be a sign of a blood clot in your lungs or a serious heart problem.",
        ],
      },
      {
        heading: "Finger ulcers",
        paragraphs: [
          "Digital ulcers can be very painful, take a long time to heal and get infected, so it is important to get treatment quickly.",
          "Signs that an ulcer has become infected are increasing pain, redness, discharge and smell. Infected ulcers may need a course of antibiotics.",
        ],
      },
      {
        heading: "Other changes",
        paragraphs: [
          "It is important to report any new symptoms to your doctor. If symptoms get worse, seek medical advice to check things out further.",
          "The SRUK helpline volunteers are not medically qualified and will not give medical advice. If you need emergency assistance, telephone 999.",
        ],
      },
    ],
    helps: [
      "Get expert medical attention as soon as possible for very high blood pressure, severe headaches or blurred vision.",
      "If you are at risk, measure your blood pressure at least every other day.",
      "Tell your doctor about any changes in your breathing.",
      "Call 999 or go to A&E for sudden chest pain that does not stop after a few minutes.",
      "Get treatment quickly for an ulcer with increasing pain, redness, discharge or smell.",
      "Report any new symptoms to your doctor.",
    ],
    tryThisWeek: [
      "Learn to measure your blood pressure.",
      "Learn the signs of a kidney crisis.",
      "Note any new symptoms to report.",
    ],
    ask: "Am I at risk of a renal crisis, and should I be checking my blood pressure at home?",
    interactive: {
      kind: "signs",
      title: "Symptoms to act on",
      intro: "Tick any you have now. Some need expert medical attention as soon as possible.",
      signs: ["Very high blood pressure", "Severe headaches or blurred vision", "Breathlessness", "Nausea and vomiting", "Heart palpitations", "Sudden chest pain that does not stop", "An ulcer with more pain, redness, discharge or smell", "Any new symptom"],
      after: "A scleroderma renal crisis needs expert medical attention as soon as possible. For sudden chest pain that does not stop after a few minutes, call 999 or go to A&E.",
      copyHeading: "Symptoms I have now",
    },
    sources: [SRUK_KIDNEY, NHS_PH, SRUK_SKIN, SRUK_RAY_CAUSES, SRUK_LUNG, SRUK_HELPLINE, AUK_SSC, SRUK_NEWLY],
    quiz: {
      question: "What does a scleroderma renal crisis need?",
      options: [{ text: "Expert medical attention as soon as possible", right: true }, { text: "Rest at home for a week" }, { text: "Nothing, it passes" }],
      why: "This is called a scleroderma renal crisis, and it needs expert medical attention as soon as possible.",
    },
  },
  {
    id: "ssc-support",
    kicker: "Support",
    question: "Where can I find support, and how can I look after my mood?",
    hook: "Relief, worry, frustration and grief are all common. Talking to people who understand can greatly help, and support is there.",
    short: "Living with systemic sclerosis can bring many feelings, and changes in appearance can be upsetting. Talking to family, friends, a healthcare professional or others with the condition can greatly help, and SRUK runs a free helpline, support groups and an online community. If you need urgent help for your mental health, contact NHS 111 or call Samaritans on 116 123, and in an emergency call 999.",
    sections: [
      {
        heading: "Many feelings",
        paragraphs: [
          "People talk about all sorts of feelings. Some feel relieved to have a diagnosis, worried about how well treatments will work, or frustrated at how their daily lives and routines have to change.",
          "Some feel low when symptoms are bad, or a sense of loss at changing appearance. Being able to share these feelings with others going through a similar situation can be helpful.",
          "Stress can also reduce the blood flow to some parts of your body, so it can affect your condition, particularly if you have Raynaud's.",
        ],
      },
      {
        heading: "Looking after your mood",
        paragraphs: [
          "Talk about any feelings of stress or depression with your family, friends or a healthcare professional. Your doctor may be able to help, or can refer you for specialist counselling.",
          "Treatments available on the NHS include counselling, cognitive behavioural therapies and medicines such as antidepressants. At least 30% of people with a long-term physical health condition also have a mental health condition, so if you are struggling, you are not alone.",
          "You can also speak to a nurse in the rheumatology clinic. Many clinics have nurses who specialise in systemic sclerosis or have a special interest in it.",
        ],
      },
      {
        heading: "Support from SRUK",
        paragraphs: [
          "The SRUK freephone helpline, 0800 311 2756, is open 365 days a year from 9am to 7pm. It is run by volunteers who may have scleroderma or Raynaud's themselves, and it offers listening, support and practical information.",
          "SRUK support groups across the UK, online and in person, bring together people affected by scleroderma and Raynaud's, including families, partners and carers. There is also an online community hosted on Health Unlocked.",
        ],
      },
      {
        heading: "Work and money",
        paragraphs: [
          "In most cases, reasonable adjustments can be made at work, such as rest periods during the day or adjusted start or finish times. A small change can make a big difference.",
          "People with scleroderma are often entitled to welfare support, such as Personal Independence Payment, which helps with the extra costs of living with a long-term illness or disability.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "If you need urgent help for your mental health, get advice from NHS 111, choosing the mental health option, or ask for an urgent GP appointment. You can call Samaritans on 116 123 to talk about anything that is troubling you.",
          "Call 999 or go to A&E now if you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one.",
        ],
      },
    ],
    helps: [
      "Talk about feelings of stress or depression with family, friends or a healthcare professional.",
      "Ask your doctor about counselling or talking therapies.",
      "Call the SRUK helpline on 0800 311 2756, open every day from 9am to 7pm.",
      "Join an SRUK support group or the online community.",
      "Talk to your employer about reasonable adjustments at work.",
      "For urgent help, contact NHS 111 or call Samaritans on 116 123; in an emergency, call 999.",
    ],
    tryThisWeek: [
      "Talk to someone about how you feel.",
      "Save the SRUK helpline number.",
      "Look for a support group near you.",
    ],
    ask: "Can you refer me for counselling, and is there a specialist nurse I can talk to?",
    interactive: {
      kind: "signs",
      title: "Feelings to talk about",
      intro: "Tick any you have noticed. People living with systemic sclerosis talk about all sorts of feelings.",
      signs: ["Worry about how well treatments will work", "Frustration at changing routines", "Feeling low when symptoms are bad", "A sense of loss at changing appearance", "Worry about being a burden", "Feeling stressed", "Struggling at work"],
      after: "Talk to your GP or rheumatology team. For urgent help, contact NHS 111 or call Samaritans on 116 123. In an emergency, call 999.",
      copyHeading: "Feelings I would like to talk about",
    },
    sources: [SRUK_SSC, AUK_SSC, SRUK_EMOTIONAL, SRUK_HELPLINE, SRUK_GROUPS, SRUK_COMMUNITY, NHS_URGENT_MENTAL, SRUK_WORK, SRUK_BENEFITS],
    quiz: {
      question: "When is the SRUK helpline open?",
      options: [{ text: "Every day, from 9am to 7pm", right: true }, { text: "Weekdays only, mornings" }, { text: "Only by appointment" }],
      why: "The SRUK freephone helpline, 0800 311 2756, is open 365 days a year from 9am to 7pm.",
    },
  },
];
