import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Vitamin D deficiency page's pieces (content/library-conditions/metabolism-more.ts
// `learnId`). Every sentence was written from wording checked on 21 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (the
// Vitamin D, Rickets and osteomalacia, colecalciferol, sun safety, pregnancy and children's vitamins pages), the
// Royal Osteoporosis Society, the British Dietetic Association's food fact sheet, the government's vitamin D
// advice and NICE's summary for GPs on vitamin D deficiency in adults. General information only; it never
// replaces what a person's own team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const ros = (label: string, path: string): LearnSource => ({ label: `Royal Osteoporosis Society: ${label}`, url: `https://theros.org.uk/information-and-support/${path}` });
const cks = (label: string, path: string): LearnSource => ({ label: `NICE CKS: Vitamin D deficiency in adults, ${label}`, url: `https://cks.nice.org.uk/topics/vitamin-d-deficiency-in-adults/${path}` });

const NHS_VITD = nhs("Vitamin D", "conditions/vitamins-and-minerals/vitamin-d/");
const NHS_RICKETS = nhs("Rickets and osteomalacia", "conditions/rickets-and-osteomalacia/");
const NHS_COLE_ABOUT = nhs("About colecalciferol", "medicines/colecalciferol/about-colecalciferol/");
const NHS_COLE_WHO = nhs("Who can and cannot take colecalciferol", "medicines/colecalciferol/who-can-and-cannot-take-colecalciferol/");
const NHS_COLE_HOW = nhs("How and when to take colecalciferol", "medicines/colecalciferol/how-and-when-to-take-colecalciferol/");
const NHS_COLE_SIDE = nhs("Side effects of colecalciferol", "medicines/colecalciferol/side-effects-of-colecalciferol/");
const NHS_COLE_PREG = nhs("Pregnancy, breastfeeding and fertility while taking colecalciferol", "medicines/colecalciferol/pregnancy-breastfeeding-and-fertility-while-taking-colecalciferol/");
const NHS_COLE_OTHER = nhs("Taking colecalciferol with other medicines and herbal supplements", "medicines/colecalciferol/taking-colecalciferol-with-other-medicines-and-herbal-supplements/");
const NHS_COLE_QA = nhs("Common questions about colecalciferol", "medicines/colecalciferol/common-questions-about-colecalciferol/");
const NHS_SUN = nhs("Sunscreen and sun safety", "live-well/seasonal-health/sunscreen-and-sun-safety/");
const NHS_CHILD_VIT = nhs("Vitamins for children", "baby/weaning-and-feeding/vitamins-for-children/");
const NHS_PREG_VIT = nhs("Pregnancy vitamins and supplements", "pregnancy/keeping-well/pregnancy-vitamins-and-supplements/");
const NHS_PREG_FOODS = nhs("Foods to avoid in pregnancy", "pregnancy/keeping-well/foods-to-avoid/");
const NHS_OSTEO_PREV = nhs("Osteoporosis: prevention", "conditions/osteoporosis/prevention/");
const NHS_BONES_65 = nhs("Keep bones healthy over 65", "live-well/bone-health/keep-your-bones-strong-over-65/");
const NHS_FALLS = nhs("Falls", "conditions/falls/");
const NHS_CALCIUM = nhs("Calcium", "conditions/vitamins-and-minerals/calcium/");

const ROS_VITD = ros("Vitamin D", "food-and-supplements/vitamin-d/");
const ROS_CALCIUM = ros("Calcium", "food-and-supplements/calcium/");
const BDA_VITD: LearnSource = { label: "British Dietetic Association: Vitamin D food fact sheet", url: "https://www.bda.uk.com/resource/vitamin-d.html" };
const GOV_PHE: LearnSource = { label: "GOV.UK: PHE publishes new advice on vitamin D", url: "https://www.gov.uk/government/news/phe-publishes-new-advice-on-vitamin-d" };

const CKS_DEF = cks("what is it?", "background-information/definition/");
const CKS_CAUSES = cks("what causes it?", "background-information/causes/");
const CKS_PREVALENCE = cks("how common is it?", "background-information/prevalence/");
const CKS_COMPLICATIONS = cks("what are the complications?", "background-information/complications/");
const CKS_DIAG = cks("when should I suspect or test for it?", "diagnosis/diagnosis/");
const CKS_INVEST = cks("additional investigations", "diagnosis/additional-investigations/");
const CKS_MGMT = cks("management", "management/management/");
const CKS_PREV = cks("prevention", "management/prevention/");

export const vitaminDAnswers: LearnArticle[] = [
  {
    id: "vitd-what-it-is",
    kicker: "Understanding",
    question: "What does vitamin D do, and where does it come from?",
    hook: "Most of it is made in your skin by summer sunlight. Your body then uses it to take in the calcium that keeps bones strong.",
    short: "Vitamin D helps control the amount of calcium and phosphate in the body, which keep bones, teeth and muscles healthy. The body makes it from direct sunlight on the skin, but in the UK the sun is not strong enough to do this between October and early March. A lack of it can lead to rickets in children and bone pain from osteomalacia in adults.",
    sections: [
      {
        heading: "Calcium, phosphate and strong bones",
        paragraphs: [
          "Vitamin D helps regulate the amount of calcium and phosphate in the body. These nutrients are needed to keep bones, teeth and muscles healthy.",
          "The Royal Osteoporosis Society puts it simply: vitamin D helps your body absorb and use calcium, and this helps keep your bones and muscles strong.",
        ],
      },
      {
        heading: "Made in the skin",
        paragraphs: [
          "The body creates vitamin D from direct sunlight on the skin when outdoors. From about late March or early April to the end of September, most people should be able to make all the vitamin D they need this way.",
          "But between October and early March, we do not make enough vitamin D from sunlight. The British Dietetic Association points out that vitamin D is actually a hormone, rather than a vitamin, because it is made under your skin in response to sunlight.",
        ],
      },
      {
        heading: "How the body uses it",
        paragraphs: [
          "Vitamin D does not work straight away. The liver and the kidneys change it into a form the body can use, called calcitriol.",
          "This helps your body take in more calcium and phosphorus from the food you eat. It also gets your kidneys to keep more calcium in the body instead of peeing it out. Having the right amount of calcium and phosphorus is important for building bones and keeping them strong.",
        ],
      },
      {
        heading: "When there is not enough",
        paragraphs: [
          "A lack of vitamin D can lead to bone deformities such as rickets in children, and bone pain caused by a condition called osteomalacia in adults.",
          "Long-term vitamin D deficiency can cause bone loss, muscle weakness, falls and fractures in older people.",
        ],
      },
      {
        heading: "What it has not been shown to do",
        paragraphs: [
          "There have been reports about vitamin D reducing the risk of COVID-19. The NHS says there is currently not enough evidence to support taking vitamin D only to prevent or treat it.",
          "When the government's nutrition experts reviewed vitamin D, they also looked at cancer, type 1 diabetes, multiple sclerosis and heart disease. They found too little evidence to draw any firm conclusions.",
        ],
      },
    ],
    helps: [
      "Consider taking a daily supplement containing 10 micrograms of vitamin D during the autumn and winter.",
      "From late March or early April to the end of September, spend short spells outdoors with sunlight on your skin, taking care not to burn.",
      "Include foods that contain vitamin D, such as oily fish, red meat, egg yolks and fortified foods.",
      "See a GP if you think you or your child might have rickets or osteomalacia.",
    ],
    tryThisWeek: [
      "Consider a 10 microgram supplement.",
      "Get short spells of sun, without burning.",
      "Add one food that contains vitamin D.",
    ],
    ask: "Do I need a vitamin D supplement, and should I take it all year or just in winter?",
    interactive: {
      kind: "flip-cards",
      title: "From sunlight to bone",
      intro: "Turn each card to follow vitamin D through the body.",
      cards: [
        { id: "sun", front: "Sunlight on the skin", when: "Late March or April to September", back: "The body creates vitamin D from direct sunlight on the skin when outdoors." },
        { id: "food", front: "Food and supplements", when: "All year, and most of all in winter", back: "A small number of foods contain it. In autumn and winter, the sun is not strong enough, so it has to come from your diet." },
        { id: "liver", front: "Liver and kidneys", when: "After it is made or eaten", back: "They change vitamin D into calcitriol, the form your body can use." },
        { id: "gut", front: "The gut", when: "Every time you eat", back: "Vitamin D helps your body take in more calcium and phosphorus from the food you eat." },
        { id: "bones", front: "Bones, teeth and muscles", when: "Throughout life", back: "Calcium and phosphate are needed to keep bones, teeth and muscles healthy." },
      ],
    },
    sources: [NHS_VITD, ROS_VITD, BDA_VITD, NHS_COLE_QA, NHS_COLE_ABOUT, GOV_PHE, NHS_RICKETS],
    quiz: {
      question: "Where does the body get most of its vitamin D?",
      options: [{ text: "Sunlight on the skin", right: true }, { text: "Cows' milk" }, { text: "Fruit and vegetables" }],
      why: "The body creates vitamin D from direct sunlight on the skin when outdoors.",
    },
  },
  {
    id: "vitd-risk",
    kicker: "Risk",
    question: "Who is more likely to be low in vitamin D?",
    hook: "Everyone in the UK runs short of winter sun. Some people run short all year round.",
    short: "In autumn and winter, everyone in the UK relies on food and supplements for vitamin D. People who are rarely outdoors, live in a care home, cover most of their skin outside or have dark skin may not make enough even in summer. Age, pregnancy, some bowel, liver and kidney conditions and some medicines also raise the risk.",
    sections: [
      {
        heading: "Little sun on the skin",
        paragraphs: [
          "Some people will not make enough vitamin D from sunlight because they have very little or no sunshine exposure. This includes people who are not often outdoors, such as people who are frail or housebound.",
          "It also includes people in an institution like a care home, and people who usually wear clothes that cover up most of their skin when outdoors.",
        ],
      },
      {
        heading: "Darker skin",
        paragraphs: [
          "If you have dark skin, for example if you have an African, African-Caribbean or south Asian background, you may not make enough vitamin D from sunlight.",
          "People with naturally brown or black skin may need more time in sunlight to produce the same amount of vitamin D as people with lighter skin.",
        ],
      },
      {
        heading: "Age, pregnancy and babies",
        paragraphs: [
          "You may be at higher risk if you are aged 65 or older, or if you are pregnant or breastfeeding. The British Dietetic Association says people over 65 and people with a darker skin tone may not be able to make enough vitamin D.",
          "Children aged one to four, and all babies, are also at risk, unless the baby is having more than 500ml of infant formula a day.",
        ],
      },
      {
        heading: "Health conditions and medicines",
        paragraphs: [
          "Some conditions may prevent the body taking in vitamin D, such as Crohn's disease, coeliac disease and short bowel syndrome, or having had weight loss surgery. Severe liver disease and end-stage chronic kidney disease affect the way the body handles it.",
          "Taking certain medicines can also affect your vitamin D levels. Having a high body mass index (BMI) is listed as a risk factor too.",
        ],
      },
      {
        heading: "How common low levels are",
        paragraphs: [
          "A national diet survey found that between 2019 and 2023, 18% of adults aged 19 to 64, and 12% of adults aged 65 and over, had low vitamin D levels in their blood.",
          "Low levels were most common from January to March. Having low levels is not the same as having a deficiency, but it means a greater risk of developing one.",
        ],
      },
    ],
    helps: [
      "If you are not often outdoors, live in a care home or usually cover most of your skin, take a daily supplement containing 10 micrograms of vitamin D throughout the year.",
      "If you have dark skin, consider taking a daily 10 microgram supplement throughout the year.",
      "Give babies and children aged 1 to 4 a daily vitamin D supplement, unless a baby has more than 500ml of formula a day.",
      "Talk to your doctor if you have severe liver or kidney disease, a condition that affects how you absorb food, or take long-term anti-epileptic medicines.",
      "Everyone else should consider a daily 10 microgram supplement in the autumn and winter.",
    ],
    tryThisWeek: [
      "Check whether you need it all year.",
      "Ask about your conditions or medicines.",
      "Check supplements for the children.",
    ],
    ask: "Do any of my health conditions or medicines put me at risk of low vitamin D?",
    interactive: {
      kind: "scenarios",
      title: "Winter only, or all year?",
      scenarios: [
        {
          id: "care-home",
          situation: "Your mum lives in a care home and rarely goes outside.",
          options: [{ text: "A 10 microgram supplement all year", best: true }, { text: "Only in winter" }],
          why: "Adults in an institution like a care home should take a daily supplement containing 10 micrograms of vitamin D throughout the year.",
        },
        {
          id: "dark-skin",
          situation: "You have dark skin and spend summers outdoors.",
          options: [{ text: "Consider taking it all year", best: true }, { text: "Summer sun is always enough" }],
          why: "If you have dark skin, you may not make enough vitamin D from sunlight, so consider a daily 10 microgram supplement throughout the year.",
        },
        {
          id: "covered",
          situation: "You usually wear clothes that cover most of your skin outside.",
          options: [{ text: "Take a supplement throughout the year", best: true }, { text: "Rely on the sun on your face" }],
          why: "People who usually wear clothes that cover up most of their skin when outdoors are advised to take 10 micrograms daily throughout the year.",
        },
        {
          id: "office",
          situation: "You are healthy and get outdoors in summer.",
          options: [{ text: "Consider one in autumn and winter", best: true }, { text: "You never need one" }],
          why: "Everyone should consider taking a daily supplement containing 10 micrograms of vitamin D during the autumn and winter.",
        },
      ],
    },
    sources: [NHS_VITD, NHS_SUN, NHS_COLE_QA, BDA_VITD, CKS_PREVALENCE, GOV_PHE, ROS_VITD],
    quiz: {
      question: "Which of these makes low vitamin D more likely all year round?",
      options: [{ text: "Living in a care home", right: true }, { text: "Drinking tea" }, { text: "Being tall" }],
      why: "Adults in an institution like a care home should take a daily supplement containing 10 micrograms of vitamin D throughout the year.",
    },
  },
  {
    id: "vitd-symptoms",
    kicker: "Symptoms",
    question: "What does low vitamin D feel like?",
    hook: "Aching bones, weak muscles and bones that break too easily. In children, legs that bow outwards.",
    short: "A long-term lack of vitamin D can make bones weak and soft: rickets in children and osteomalacia in adults. Signs include pain in the back, ribs, pelvis or legs, weak muscles that make stairs or chairs hard, and bones that break easily. Pain usually gets better a few weeks or months after vitamin D levels are back to normal.",
    sections: [
      {
        heading: "Soft, weak bones",
        paragraphs: [
          "Rickets is where a child's bones become weak and soft. It is usually caused by not getting enough vitamin D or calcium. In adults, it is called osteomalacia.",
          "Vitamin D deficiency in adults can also lead to weak bones (osteoporosis), which can easily break.",
        ],
      },
      {
        heading: "Signs in adults",
        paragraphs: [
          "Symptoms include pain in your back, shoulder, ribs, pelvis or legs, and swollen, painful wrists. You may notice changes in the way you walk, not wanting to walk much, or getting tired more easily when walking.",
          "Weak muscles can make it hard to climb stairs or get out of a chair. Muscles may tingle, cramp or twitch, and bones may break more often or after a minor accident, especially the hips, lower back and feet.",
        ],
      },
      {
        heading: "Signs in children",
        paragraphs: [
          "The main symptom of rickets is bowed legs. This is when the legs curve outward, so there is a large gap between the knees when standing with the feet together.",
          "Children with rickets may be small for their age, and their teeth may come through later than usual. Rickets can also cause weak muscles and poor growth.",
        ],
      },
      {
        heading: "Over the longer term",
        paragraphs: [
          "Long-term vitamin D deficiency can cause bone loss, muscle weakness, falls and fractures in older people.",
          "The risk of these bone and muscle problems rises when the vitamin D level in the blood is below 25 nmol/L.",
        ],
      },
      {
        heading: "Getting better",
        paragraphs: [
          "If you have been getting bone, muscle or joint pain, your symptoms are likely to get better when your vitamin D levels are normal again. This is usually after a few weeks or months.",
          "If symptoms carry on even though vitamin D levels are back to normal, UK guidance for GPs says the doctor should consider another cause.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you or your child might have rickets or osteomalacia.",
      "Tell the GP about pain in your back, ribs, pelvis or legs, weak muscles, or bones that break easily.",
      "Keep taking any vitamin D you are prescribed, as stopping can bring symptoms back.",
      "See a GP if you are worried about your balance or mobility, or you have had a fall.",
    ],
    tryThisWeek: [
      "Book a GP visit if you notice the signs.",
      "List your aches and where they are.",
      "Mention any falls or balance worries.",
    ],
    ask: "Could my aches or weak muscles be caused by low vitamin D?",
    interactive: {
      kind: "signs",
      title: "Signs to mention",
      intro: "Tick any you have noticed. They can be signs of rickets or osteomalacia, and are worth telling a GP.",
      signs: [
        "Pain in my back, shoulder, ribs, pelvis or legs",
        "Swollen, painful wrists",
        "Getting tired more easily when walking",
        "Trouble climbing stairs or getting out of a chair",
        "Tingling, cramping or twitching muscles",
        "Breaking a bone after a minor accident",
        "My child's legs curve outwards",
        "My child is small for their age, or teeth are late",
      ],
      after: "See a GP if you think you or your child might have rickets or osteomalacia. They may check your vitamin D and calcium levels.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_RICKETS, BDA_VITD, NHS_COLE_ABOUT, CKS_COMPLICATIONS, NHS_COLE_QA, CKS_MGMT, NHS_COLE_HOW, NHS_FALLS],
    quiz: {
      question: "What is the main symptom of rickets in children?",
      options: [{ text: "Bowed legs", right: true }, { text: "A rash" }, { text: "A high temperature" }],
      why: "The main symptom of rickets is bowed legs.",
    },
  },
  {
    id: "vitd-tests",
    kicker: "Tests",
    question: "Do I need a vitamin D blood test, and what does it show?",
    hook: "Most people do not need one. If you have symptoms, one number shows how much vitamin D you have had over recent weeks.",
    short: "Most people do not need a test: if you are unsure, the Royal Osteoporosis Society suggests simply starting a supplement. A GP may test you if you have bone pain, weak muscles or suspected bone disease, or before some osteoporosis medicines. Below 25 nmol/L means a higher risk of deficiency; above 50 nmol/L is enough for most people.",
    sections: [
      {
        heading: "Not usually needed",
        paragraphs: [
          "You do not normally need a blood test to check if you are getting enough vitamin D. If you are unsure whether you get enough from sunlight, it is a good idea to start taking a vitamin D supplement.",
          "UK guidance for GPs says people without symptoms should not be routinely tested. People at higher risk should be advised to take a daily supplement instead.",
        ],
      },
      {
        heading: "When a test is done",
        paragraphs: [
          "A test may be arranged if you have bone pain, muscle aches or general weakness that could be caused by low vitamin D. It may also be done if bone disease such as osteomalacia or osteoporosis is suspected.",
          "If you are starting the osteoporosis medicines zoledronate or denosumab, you will often have a vitamin D test. If your level is low, it will be treated before you start the medicine.",
        ],
      },
      {
        heading: "Reading the number",
        paragraphs: [
          "The test measures a form of vitamin D in the blood called 25-hydroxyvitamin D. It gives an idea of how much vitamin D has been available over recent weeks.",
          "In the UK, the risk of deficiency rises when the level is below 25 nmol/L. Between 25 and 50 nmol/L, levels may not be enough for some people. Above 50 nmol/L, levels are enough for most people.",
        ],
      },
      {
        heading: "Other checks alongside",
        paragraphs: [
          "If a GP thinks you or your child may have rickets or osteomalacia, they will check your vitamin D and calcium levels. This may include blood tests and a sample of your pee, and you may be referred for X-rays and bone scans.",
          "If vitamin D is low, other blood tests may look at calcium, phosphate and parathyroid hormone. Kidney, liver and thyroid tests, or a test for coeliac disease, may help find a cause.",
        ],
      },
      {
        heading: "After treatment",
        paragraphs: [
          "After a high-dose course, the NHS says you will usually have a blood test 1 month after starting treatment, and again after 3 to 6 months to check your levels.",
        ],
      },
    ],
    helps: [
      "If you are unsure whether you get enough vitamin D from sunlight, it is a good idea to start taking a supplement.",
      "If you take a supplement, you should get all the vitamin D you need.",
      "See a GP if you think you or your child might have rickets or osteomalacia.",
      "If you are starting zoledronate or denosumab, expect a vitamin D test first, so low levels can be treated.",
    ],
    tryThisWeek: [
      "Start a supplement if unsure.",
      "See a GP if you suspect osteomalacia.",
      "Expect a test before some bone medicines.",
    ],
    ask: "What was my vitamin D level, and does it need treating?",
    interactive: {
      kind: "flip-cards",
      title: "The tests, card by card",
      intro: "Turn each card to see when a test is used and what it shows.",
      cards: [
        { id: "vitd", front: "Vitamin D blood test", when: "Bone pain, weakness or bone disease", back: "Measures 25-hydroxyvitamin D. Below 25 nmol/L, the risk of deficiency rises. Above 50 nmol/L is enough for most." },
        { id: "bone-profile", front: "Calcium and phosphate", when: "If vitamin D is low", back: "Part of a bone profile, used with a parathyroid hormone test to look for soft bones (osteomalacia)." },
        { id: "pee", front: "Pee sample", when: "If rickets or osteomalacia is suspected", back: "A GP may test a sample of your pee as well as your blood." },
        { id: "scans", front: "X-rays and bone scans", when: "After a referral to a specialist", back: "A GP may refer you or your child for more tests, such as X-rays and bone scans." },
        { id: "cause", front: "Tests for a cause", when: "Depending on the doctor's judgement", back: "Kidney, liver and thyroid blood tests, or a coeliac disease test, can look for an underlying cause." },
      ],
    },
    sources: [ROS_VITD, CKS_DIAG, CKS_DEF, NHS_RICKETS, CKS_INVEST, NHS_COLE_ABOUT],
    quiz: {
      question: "Above what blood level is vitamin D enough for most people?",
      options: [{ text: "50 nmol/L", right: true }, { text: "5 nmol/L" }, { text: "500 nmol/L" }],
      why: "Above 50 nmol/L, levels are enough for most people.",
    },
  },
  {
    id: "vitd-supplements",
    kicker: "Supplements",
    question: "Who should take a daily vitamin D supplement, and how much?",
    hook: "One small daily dose, 10 micrograms, is enough for most people. The question is whether you need it in winter or all year.",
    short: "Everyone in the UK, including pregnant and breastfeeding women, should consider a daily supplement of 10 micrograms (400 IU) in autumn and winter. People who are rarely outdoors, live in a care home or cover most of their skin should take it all year, and people with dark skin should consider it. Taking more than the advised amount is unlikely to make bones any stronger.",
    sections: [
      {
        heading: "Autumn and winter, for everyone",
        paragraphs: [
          "During the autumn and winter, the sun is not strong enough for the body to make vitamin D. Since it is difficult to get enough from food alone, everyone, including pregnant and breastfeeding women, should consider taking a daily supplement containing 10 micrograms of vitamin D.",
          "Between late March or early April and the end of September, most people can make all the vitamin D they need through sunlight on their skin and a balanced diet. You may choose not to take a supplement during these months.",
        ],
      },
      {
        heading: "All year, for some",
        paragraphs: [
          "Adults and children over 4 should take a daily 10 microgram supplement throughout the year if they are not often outdoors, are in an institution like a care home, or usually wear clothes that cover most of their skin outdoors.",
          "If you have dark skin, for example an African, African-Caribbean or south Asian background, consider taking it all year. The Royal Osteoporosis Society also recommends it all year if you use sunscreen most of the time.",
        ],
      },
      {
        heading: "How much",
        paragraphs: [
          "Most adults need 10 micrograms of vitamin D a day. Vitamin D is sometimes measured in international units (IU), and 1 microgram is the same as 40 IU, so 10 micrograms is 400 IU.",
          "If you are at risk of osteoporosis or take an osteoporosis medicine, your doctor may advise a 20 microgram supplement a day. Taking more than the recommended amount is unlikely to improve your bone strength.",
        ],
      },
      {
        heading: "Choosing one",
        paragraphs: [
          "You can buy lower-dose vitamin D from pharmacies, supermarkets and shops. It comes as tablets, capsules, chewable or dissolvable tablets, a syrup and drops.",
          "Supplements contain vitamin D3 or vitamin D2. Vitamin D3 is thought to be slightly more effective, but some is made using lamb's wool. Vitamin D2 is a plant-based alternative suitable for vegetarians and vegans, and capsules may contain gelatine.",
        ],
      },
      {
        heading: "Taking it",
        paragraphs: [
          "Swallow capsules and tablets whole with some water, with your main meal of the day. If you forget a dose, take it as soon as you remember, unless it is nearly time for the next one.",
          "Never take 2 doses at the same time. Women and children who qualify for the Healthy Start scheme can get free supplements containing vitamin D.",
        ],
      },
    ],
    helps: [
      "Consider a daily supplement containing 10 micrograms of vitamin D during the autumn and winter.",
      "Take it throughout the year if you are not often outdoors, live in a care home or usually cover most of your skin outside.",
      "If you have dark skin, consider taking it all year round.",
      "Check the packaging on all your supplements, so you know how much vitamin D they add up to.",
      "If you follow a vegan diet, check the type: some vitamin D3 is made using lamb's wool, and vitamin D2 is plant-based.",
      "If you qualify for Healthy Start, get your free vitamins.",
    ],
    tryThisWeek: [
      "Start a 10 microgram supplement.",
      "Check all your supplement labels.",
      "See if you qualify for Healthy Start.",
    ],
    ask: "Should I take vitamin D all year, and is 10 micrograms the right amount for me?",
    interactive: {
      kind: "timeline",
      title: "A year of vitamin D",
      steps: [
        { id: "winter", when: "October to early March", title: "Sun too weak", points: ["The sun is not strong enough for the body to make vitamin D.", "Consider a daily 10 microgram supplement."] },
        { id: "summer", when: "Late March or April to September", title: "Sunlight season", points: ["Most people can make all they need from sunlight and a balanced diet.", "You may choose not to take a supplement."] },
        { id: "all-year", when: "All year round", title: "If you are at higher risk", points: ["Rarely outdoors, in a care home, or covering most of your skin: take 10 micrograms a day.", "Dark skin: consider taking it all year."] },
        { id: "daily", when: "Every day", title: "Taking it", points: ["Swallow capsules and tablets whole with water, with your main meal.", "Never take 2 doses at the same time."] },
      ],
    },
    sources: [NHS_VITD, ROS_VITD, NHS_COLE_ABOUT, BDA_VITD, NHS_COLE_HOW, NHS_COLE_WHO],
    quiz: {
      question: "How much vitamin D is in the daily supplement most people are advised to consider?",
      options: [{ text: "10 micrograms (400 IU)", right: true }, { text: "100 micrograms" }, { text: "1 microgram" }],
      why: "Everyone should consider taking a daily supplement containing 10 micrograms of vitamin D during the autumn and winter.",
    },
  },
  {
    id: "vitd-treatment",
    kicker: "Treatment",
    question: "How is a vitamin D deficiency treated?",
    hook: "A short course of high-strength vitamin D, then a lower daily dose to keep levels up. Feeling better takes weeks, not days.",
    short: "If your levels are severely low, a doctor may prescribe a loading dose: a high-strength course, usually taken daily or weekly for 6 to 10 weeks. After that, most people take a lower maintenance dose long term. It can take a few weeks or months to raise vitamin D levels, and you will usually have blood tests to check.",
    sections: [
      {
        heading: "A loading dose",
        paragraphs: [
          "If your levels are severely low, your doctor may prescribe a loading dose course of vitamin D. This is a high-strength dose that is only available on prescription.",
          "It is usually taken for a short time, often a few weeks, to raise low levels of vitamin D quickly. UK guidance for GPs says vitamin D3, taken by mouth, is the first choice for treating a deficiency.",
        ],
      },
      {
        heading: "How it is taken",
        paragraphs: [
          "For adults with severe deficiency, a loading dose of up to 300,000IU may be taken in different ways. For example, it might be 50,000IU once a week for 6 weeks, or 800IU five times a day for 10 weeks.",
          "Adults usually take it daily or weekly for 6 to 10 weeks. Children with severe deficiency usually take a loading dose for 8 to 12 weeks, at a dose that depends on their age.",
        ],
      },
      {
        heading: "Before you start",
        paragraphs: [
          "Tell your doctor if you have a peanut or soya allergy, high calcium levels, kidney problems or kidney stones, or a rare condition called sarcoidosis. Capsules may contain gelatine, which may not suit a vegan, vegetarian, kosher or halal diet.",
          "Your doctor may also check how much calcium you get from food. If it is less than 700mg a day, they may suggest eating more calcium or taking a supplement.",
        ],
      },
      {
        heading: "When you will feel better",
        paragraphs: [
          "Vitamin D does not work straight away, because it has to change into its active form first. Higher doses work more quickly.",
          "It may take a few weeks or months to raise your levels after a loading dose, and you may not feel any different. You will usually have a blood test 1 month after starting treatment, and again after 3 to 6 months.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "If you need to keep your levels up after a loading dose, your doctor may prescribe a maintenance dose of 800IU to 2,000IU a day. To maintain your levels or prevent deficiency, you will usually take colecalciferol long term.",
          "If you stop taking it, your symptoms may come back and your bone health may be affected. If rickets or osteomalacia has changed the shape of the bones, such as bowed legs, more treatment may be needed.",
        ],
      },
    ],
    helps: [
      "Take your vitamin D exactly as your doctor or pharmacist advises.",
      "Swallow capsules and tablets whole with water, with your main meal of the day.",
      "If you forget a dose, take it when you remember, unless your next dose is nearly due. Never take 2 doses at once.",
      "Set an alarm or make a note in your diary if you often forget doses.",
      "Do not take other supplements containing calcium or vitamin D without talking to your doctor first.",
      "Call your doctor or 111 if you are sick, feel confused, get bone or joint pain or an irregular heartbeat, as these could be signs of too much calcium.",
    ],
    tryThisWeek: [
      "Take it with your main meal.",
      "Set a reminder for your doses.",
      "Check other supplements with your doctor.",
    ],
    ask: "How long will my loading dose last, and what dose should I take afterwards?",
    interactive: {
      kind: "timeline",
      title: "A typical course of treatment",
      steps: [
        { id: "loading", when: "Weeks 1 to 10", title: "Loading dose", points: ["A high-strength course, taken daily or weekly for 6 to 10 weeks.", "Up to 300,000IU in all, on prescription."] },
        { id: "first-test", when: "About 1 month in", title: "First blood test", points: ["You will usually have a blood test 1 month after starting treatment."] },
        { id: "second-test", when: "3 to 6 months", title: "Checking again", points: ["Levels are checked again.", "It can take a few weeks or months to feel any different."] },
        { id: "maintenance", when: "Long term", title: "Maintenance dose", points: ["Often 800IU to 2,000IU a day.", "Stopping can bring symptoms back."] },
      ],
    },
    sources: [NHS_COLE_ABOUT, NHS_COLE_HOW, NHS_COLE_WHO, CKS_MGMT, NHS_COLE_QA, NHS_RICKETS, NHS_COLE_OTHER, NHS_COLE_SIDE],
    quiz: {
      question: "What is a loading dose of vitamin D for?",
      options: [{ text: "Raising low levels quickly", right: true }, { text: "Preventing sunburn" }, { text: "Replacing a balanced diet" }],
      why: "It is usually taken for a short time, often a few weeks, to raise low levels of vitamin D quickly.",
    },
  },
  {
    id: "vitd-food",
    kicker: "Food",
    question: "Which foods contain vitamin D?",
    hook: "Oily fish, egg yolks, red meat and fortified foods all help. But even a well-balanced diet is unlikely to give you enough on its own.",
    short: "Vitamin D is found in a small number of foods: oily fish, red meat, egg yolks, liver, some mushrooms and fortified foods such as some fat spreads and breakfast cereals. In the UK, cows' milk is generally not a good source. Food alone rarely gives enough, so food and a supplement work together.",
    sections: [
      {
        heading: "Only a few foods",
        paragraphs: [
          "Vitamin D is found in a small number of foods. The British Dietetic Association says sunshine, not food, is your best source, and that even a well-balanced diet is unlikely to contain enough.",
          "It is a good idea to include foods with vitamin D in your diet, but they do not provide enough on their own to meet your needs.",
        ],
      },
      {
        heading: "Where to find it",
        paragraphs: [
          "Sources include oily fish, such as salmon, sardines, trout, herring or mackerel, as well as red meat, egg yolks and liver. Some mushrooms also contain vitamin D.",
          "Some foods have vitamin D added to them. These fortified foods include some fat spreads and breakfast cereals, some bread and yoghurt, and unsweetened soya drinks.",
        ],
      },
      {
        heading: "Milk and labels",
        paragraphs: [
          "In the UK, cows' milk is generally not a good source of vitamin D, because it is not fortified, as it is in some other countries.",
          "Check the packaging of fortified foods to find out how much vitamin D has been added.",
        ],
      },
      {
        heading: "Oily fish, and pregnancy",
        paragraphs: [
          "The Royal Osteoporosis Society suggests trying to eat one portion of oily fish a week. Oily fish has higher levels of pollutants than other seafood, so if you are pregnant, trying to conceive or breastfeeding, have no more than two portions a week.",
          "Avoid liver and liver products if you are pregnant. They have high levels of vitamin A, which can be harmful to your baby.",
        ],
      },
      {
        heading: "Food and a supplement together",
        paragraphs: [
          "You can only get a small amount of vitamin D from food. This means you can eat a healthy, balanced diet and carry on with your supplement.",
          "When you take a vitamin D supplement, you can still eat food sources of vitamin D. But do not take other supplements that also contain vitamin D, such as cod liver oil or multivitamins.",
        ],
      },
    ],
    helps: [
      "Include foods with vitamin D, such as oily fish, eggs, red meat and fortified foods, as part of a balanced diet.",
      "Try to eat one portion of oily fish a week.",
      "Check the labels on cereals, spreads, yoghurts and plant drinks to see if vitamin D has been added.",
      "If you are pregnant, avoid liver and have no more than two portions of oily fish a week.",
      "Keep taking your supplement as well, but do not add cod liver oil or multivitamins that also contain vitamin D.",
    ],
    tryThisWeek: [
      "Have one portion of oily fish.",
      "Check one label for added vitamin D.",
      "Keep taking your supplement too.",
    ],
    ask: "Could a dietitian help me get more vitamin D and calcium from my food?",
    interactive: {
      kind: "flip-cards",
      title: "Foods with vitamin D",
      intro: "Turn each card to see what that food offers, and anything to watch.",
      cards: [
        { id: "fish", front: "Oily fish", when: "Salmon, sardines, trout, herring, mackerel", back: "One of the few foods that naturally contains vitamin D. Aim for one portion a week." },
        { id: "eggs", front: "Egg yolks", when: "Any day", back: "Egg yolks contain a small amount of vitamin D." },
        { id: "fortified", front: "Fortified foods", when: "Spreads, cereals, yoghurt, soya drinks", back: "Vitamin D has been added. Check the packaging to see how much." },
        { id: "milk", front: "Cows' milk", when: "In the UK", back: "Generally not a good source, because it is not fortified here, as it is in some other countries." },
        { id: "liver", front: "Liver", when: "Not in pregnancy", back: "Contains vitamin D, but avoid it if you are pregnant: its vitamin A can harm your baby." },
      ],
    },
    sources: [NHS_VITD, BDA_VITD, ROS_VITD, NHS_PREG_FOODS],
    quiz: {
      question: "Why is cows' milk in the UK not a good source of vitamin D?",
      options: [{ text: "It is not fortified here", right: true }, { text: "Cows make no vitamin D" }, { text: "Boiling it removes the vitamin D" }],
      why: "In the UK, cows' milk is generally not a good source of vitamin D, because it is not fortified, as it is in some other countries.",
    },
  },
  {
    id: "vitd-sunlight",
    kicker: "Sunlight",
    question: "How much sun do I need, and how do I stay safe?",
    hook: "Short spells of summer sun do the job. Burning never helps your bones, and there is no safe way to tan.",
    short: "From about April to September, short spells of sun on uncovered skin let most people make the vitamin D they need. Longer spells, enough to burn or tan, add no benefit and raise the risk of skin cancer. Spend time in the shade from 11am to 3pm, use at least factor 30 sunscreen and never use sunbeds.",
    sections: [
      {
        heading: "When the sun can help",
        paragraphs: [
          "In the UK, your skin can only make vitamin D from sunlight from about the beginning of April to the end of September. It may vary depending on where you live, and on cloudy days it can take longer.",
          "How much you make also depends on how strong the sunlight is, how much of your skin is uncovered and for how long, your age and your skin tone.",
        ],
      },
      {
        heading: "Short spells, not long ones",
        paragraphs: [
          "The Royal Osteoporosis Society suggests uncovering the skin on your face and arms in direct sunlight, without sunscreen, for around 10 minutes once or twice a day. The NHS suggests trying to get outside in the sun without sunscreen for 15 minutes 2 or 3 times a week between late March and September.",
          "Long spells in strong sun, enough to burn or tan, are unlikely to add any benefit. Having more than the recommended amount of sunlight may do more damage to your skin than good for your bones.",
        ],
      },
      {
        heading: "Never burn",
        paragraphs: [
          "Sunburn increases your risk of skin cancer, and you can burn in the UK even when it is cloudy. There is no safe or healthy way to get a tan.",
          "Spend time in the shade when the sun is strongest, which in the UK is between 11am and 3pm from March to October. Put on sunscreen if you are in sunlight for more than 10 minutes, and use at least factor 30 with at least 4-star UVA protection.",
        ],
      },
      {
        heading: "Darker skin, babies and children",
        paragraphs: [
          "If you have brown or black skin, you may need more time in sunlight to make the same amount of vitamin D, and the NHS says this may mean getting outside more often. But you should still avoid burning, as people of all skin tones can get skin cancer.",
          "Babies under 6 months should be kept out of direct strong sunlight, as their skin is very sensitive. To make sure they get enough vitamin D, all children under 5 are advised to take vitamin D supplements.",
        ],
      },
      {
        heading: "Sunbeds are not the answer",
        paragraphs: [
          "Sunbeds and lamps can be more dangerous than natural sunlight, because they use a concentrated source of UV radiation. UK guidance for GPs says sunbeds should not be used to keep vitamin D levels up, as they increase the risk of skin cancer.",
          "You cannot overdose on vitamin D through sunlight. But always cover up or protect your skin if you are out in the sun for long periods.",
        ],
      },
    ],
    helps: [
      "Between late March and September, spend short spells outside with your face and arms uncovered, taking care not to burn.",
      "Spend time in the shade between 11am and 3pm.",
      "Use at least factor 30 sunscreen with at least 4-star UVA protection if you are out for longer.",
      "Cover up with suitable clothing, a wide-brimmed hat and sunglasses.",
      "Keep babies under 6 months out of direct strong sunlight.",
      "Do not use sunbeds or sunlamps.",
    ],
    tryThisWeek: [
      "Take a short walk outdoors in summer.",
      "Head for the shade from 11am to 3pm.",
      "Check your sunscreen is factor 30.",
    ],
    ask: "With my skin type, how can I balance getting vitamin D and protecting my skin?",
    interactive: {
      kind: "scenarios",
      title: "Sun-sense moments",
      scenarios: [
        {
          id: "june",
          situation: "It is a sunny June lunchtime and you plan to sit out for an hour.",
          options: [{ text: "Find shade and use factor 30", best: true }, { text: "Stay out unprotected for more vitamin D" }],
          why: "Spend time in the shade between 11am and 3pm. Long spells in strong sun are unlikely to add any benefit.",
        },
        {
          id: "december",
          situation: "It is December and you want to boost your vitamin D.",
          options: [{ text: "Consider a 10 microgram supplement", best: true }, { text: "Rely on a winter walk" }],
          why: "Between October and early March, we do not make enough vitamin D from sunlight.",
        },
        {
          id: "baby",
          situation: "Your 4-month-old is with you on a bright day.",
          options: [{ text: "Keep them out of direct sun", best: true }, { text: "A little sun will help their vitamin D" }],
          why: "Babies under 6 months should be kept out of direct strong sunlight. All children under 5 are advised to take vitamin D supplements.",
        },
        {
          id: "sunbed",
          situation: "A friend suggests a sunbed to top up vitamin D.",
          options: [{ text: "Say no: take a supplement instead", best: true }, { text: "Try a few short sessions" }],
          why: "Sunbeds should not be used to keep vitamin D levels up, as they increase the risk of skin cancer.",
        },
      ],
    },
    sources: [ROS_VITD, BDA_VITD, NHS_RICKETS, CKS_PREV, NHS_SUN, NHS_VITD],
    quiz: {
      question: "In the UK, when is the sun at its strongest?",
      options: [{ text: "Between 11am and 3pm", right: true }, { text: "Before 9am" }, { text: "After 6pm" }],
      why: "Spend time in the shade when the sun is strongest, which in the UK is between 11am and 3pm from March to October.",
    },
  },
  {
    id: "vitd-too-much",
    kicker: "Safety",
    question: "Can you take too much vitamin D?",
    hook: "Yes, from supplements, though never from sunlight. Over time, too much can raise calcium and harm the kidneys and heart.",
    short: "Taking too many vitamin D supplements over a long time can make calcium build up in the body, which can weaken bones and damage the kidneys and heart. Adults should not take more than 100 micrograms (4,000 IU) a day unless a doctor advises it, and the limits for children are lower. Contact 111 for advice if someone has taken more than these amounts in a day.",
    sections: [
      {
        heading: "What too much does",
        paragraphs: [
          "Taking too many vitamin D supplements over a long period of time can cause too much calcium to build up in the body. This is called hypercalcaemia. It can weaken the bones and damage the kidneys and the heart.",
          "You cannot overdose on vitamin D through exposure to sunlight. If you choose to take vitamin D supplements, 10 micrograms a day will be enough for most people.",
        ],
      },
      {
        heading: "The daily limits",
        paragraphs: [
          "Do not take more than 100 micrograms (4,000 IU) of vitamin D a day, as it could be harmful. This applies to adults, including pregnant and breastfeeding women and older people, and to children aged 11 to 17.",
          "Children aged 1 to 10 should not have more than 50 micrograms (2,000 IU) a day, and babies under 12 months no more than 25 micrograms (1,000 IU). Some medical conditions mean people cannot safely take as much, and if your doctor has advised a different amount, follow their advice.",
        ],
      },
      {
        heading: "Counting every supplement",
        paragraphs: [
          "Check the packaging on your vitamin D supplement and any other supplements you take, as other supplements may also contain vitamin D.",
          "Do not give a child 2 supplements at the same time, such as cod liver oil and vitamin drops. One supplement on its own is enough, as long as it contains the recommended dose of vitamin D.",
        ],
      },
      {
        heading: "If you take too much",
        paragraphs: [
          "Unless you are taking a loading dose prescribed by your doctor, taking an extra dose is unlikely to harm you. Contact 111 for advice now if you have taken more than 4,000IU in 1 day, a child aged 1 to 10 has had more than 2,000IU, or a baby under 12 months has had more than 1,000IU.",
          "Signs of too much include feeling weak or having muscle or bone pain, needing to pee more often, feeling thirsty, tired or sick, constipation, headaches, and feeling confused or drowsy. Pain in the abdomen could be a sign of kidney stones.",
        ],
      },
    ],
    helps: [
      "Stick to 10 micrograms a day unless your doctor advises a different amount.",
      "Add up the vitamin D in all your supplements, including multivitamins and cod liver oil.",
      "Give a child only one supplement at a time, at the dose on the label.",
      "Contact 111 for advice now if someone has taken more than the daily limit for their age. Call 111 if you are asking about a child under 5.",
      "If you need to go to A&E, do not drive. Ask someone to drive you, or call 999 for an ambulance.",
      "Call 999 if your lips, mouth, throat or tongue suddenly swell, or you are struggling to breathe after taking vitamin D.",
    ],
    tryThisWeek: [
      "Add up the vitamin D in your supplements.",
      "Give children one supplement only.",
      "Save 111 for an overdose worry.",
    ],
    ask: "Is the dose I am taking safe alongside my other supplements and conditions?",
    interactive: {
      kind: "scenarios",
      title: "Dose worries",
      scenarios: [
        {
          id: "extra",
          situation: "You took two of your 10 microgram tablets by mistake.",
          options: [{ text: "An extra dose is unlikely to harm you", best: true }, { text: "Go straight to A&E" }],
          why: "Unless you are taking a loading dose prescribed by your doctor, taking an extra dose is unlikely to harm you.",
        },
        {
          id: "over-limit",
          situation: "You realise you have taken more than 4,000IU today.",
          options: [{ text: "Contact 111 for advice now", best: true }, { text: "Wait to see if you feel unwell" }],
          why: "Contact 111 for advice now if you have taken more than 4,000IU in 1 day.",
        },
        {
          id: "child",
          situation: "Your 3-year-old has swallowed several 1,000IU tablets.",
          options: [{ text: "Call 111 now", best: true }, { text: "Wait and watch at home" }],
          why: "Contact 111 if a child aged 1 to 10 has had more than 2,000IU in 1 day. Call 111 if you are asking about a child under 5.",
        },
        {
          id: "stack",
          situation: "You take vitamin D, a multivitamin and cod liver oil.",
          options: [{ text: "Check every label for vitamin D", best: true }, { text: "More is better for bones" }],
          why: "Other supplements may also contain vitamin D. Taking more than the recommended amount is unlikely to improve your bone strength.",
        },
      ],
    },
    sources: [NHS_VITD, NHS_COLE_HOW, ROS_VITD, NHS_CHILD_VIT, NHS_COLE_SIDE, BDA_VITD],
    quiz: {
      question: "Can you get too much vitamin D from sunlight?",
      options: [{ text: "No, only from supplements", right: true }, { text: "Yes, after an hour outside" }, { text: "Yes, on cloudy days" }],
      why: "You cannot overdose on vitamin D through exposure to sunlight.",
    },
  },
  {
    id: "vitd-bones",
    kicker: "Bones",
    question: "How do vitamin D and calcium keep bones strong?",
    hook: "Calcium builds bone, and vitamin D lets your body absorb it. Add movement, and you have the three things bones need most.",
    short: "Vitamin D helps your body absorb calcium, which keeps bones and teeth healthy. Most adults need 700mg of calcium a day, which usually comes from food, and 10 micrograms of vitamin D. Regular weight-bearing and strengthening exercise, not smoking and drinking less all help prevent osteoporosis, falls and fractures.",
    sections: [
      {
        heading: "Why bones need it",
        paragraphs: [
          "Calcium keeps our bones and teeth healthy, and vitamin D helps our bodies to absorb calcium. Protein is important for keeping muscles strong.",
          "Long-term vitamin D deficiency can cause bone loss, muscle weakness, falls and fractures in older people. Vitamin D also helps maintain muscle strength to prevent falls.",
        ],
      },
      {
        heading: "Calcium too",
        paragraphs: [
          "Most adults need 700mg of calcium a day, which you should be able to get from your daily diet. Calcium-rich foods include milk, cheese and yoghurt, leafy green vegetables such as broccoli and cabbage, and fish where you eat the bones, such as sardines.",
          "If you are at risk of osteoporosis or take an osteoporosis medicine, your doctor may advise around 1,000mg of calcium a day, and 20 micrograms of vitamin D. If you have osteoporosis, your GP may prescribe a calcium supplement.",
        ],
      },
      {
        heading: "More is not better",
        paragraphs: [
          "Taking more than the recommended amount of vitamin D or calcium is unlikely to improve your bone strength. Taking more than 1,500mg of calcium supplements a day can cause stomach pain, diarrhoea and kidney stones.",
          "UK guidance for GPs notes that the evidence that vitamin D supplements improve bone density, prevent fractures or reduce falls is not consistent.",
        ],
      },
      {
        heading: "Moving keeps bones strong",
        paragraphs: [
          "Weight-bearing exercise, where your feet and legs support your weight, and resistance exercise are particularly important for bone density. People over 65 should try to get 150 minutes of moderate-intensity exercise every week.",
          "Try to do activities to improve muscle strength at least twice a week. Balance activities twice a week, such as yoga or tai chi, can reduce your risk of falling. If you have been diagnosed with osteoporosis, talk to your GP before starting a new exercise programme.",
        ],
      },
      {
        heading: "Before osteoporosis medicines",
        paragraphs: [
          "If you are starting the osteoporosis medicines zoledronate or denosumab, you will often have a vitamin D test. If your level is low, it will be treated before you start the medicine.",
          "Quitting smoking and drinking no more than 14 units of alcohol a week also help prevent osteoporosis.",
        ],
      },
    ],
    helps: [
      "Eat calcium-rich foods every day, and consider a daily 10 microgram vitamin D supplement, especially in autumn and winter.",
      "Do weight-bearing and strengthening activities, and balance activities twice a week.",
      "Ask your doctor whether you need more calcium or vitamin D if you are at risk of osteoporosis or take a medicine for it.",
      "Do not take more than 1,500mg of calcium supplements a day.",
      "If you smoke, try to stop, and keep alcohol to no more than 14 units a week.",
      "See a GP if you are worried about your balance, or you have had a fall.",
    ],
    tryThisWeek: [
      "Add one calcium-rich food each day.",
      "Try a balance activity twice this week.",
      "Ask about your calcium and vitamin D.",
    ],
    ask: "Do I need extra calcium or vitamin D for my bones, and is a bone check worth doing?",
    interactive: {
      kind: "risk-check",
      title: "What affects your bones?",
      intro: "Tick any that apply. Most can be changed, and the ones that cannot still have help.",
      items: [
        { id: "vitd", label: "No vitamin D supplement in winter", note: "Consider a daily 10 microgram supplement during the autumn and winter.", changeable: true },
        { id: "calcium", label: "Little calcium in your diet", note: "Most adults need 700mg a day, from foods such as dairy, leafy greens and sardines.", changeable: true },
        { id: "active", label: "Not very active", note: "Weight-bearing and resistance exercise are particularly important for bone density.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Smoking is associated with an increased risk of osteoporosis.", changeable: true },
        { id: "alcohol", label: "More than 14 units of alcohol a week", note: "Limiting alcohol helps prevent osteoporosis.", changeable: true },
        { id: "age", label: "Being over 65", note: "Bones tend to lose strength with age, but there is plenty you can do to prevent falls and fractures.", changeable: false },
        { id: "fall", label: "Having had a fall", note: "See a GP. A falls service can help with strength and balance training.", changeable: false },
      ],
    },
    sources: [NHS_BONES_65, NHS_COLE_ABOUT, BDA_VITD, ROS_CALCIUM, ROS_VITD, NHS_OSTEO_PREV, NHS_CALCIUM, CKS_COMPLICATIONS, NHS_FALLS],
    quiz: {
      question: "How much calcium do most adults need a day?",
      options: [{ text: "700mg", right: true }, { text: "70mg" }, { text: "7,000mg" }],
      why: "Most adults need 700mg of calcium a day, which you should be able to get from your daily diet.",
    },
  },
  {
    id: "vitd-groups",
    kicker: "Life stages",
    question: "What do babies, children, pregnant women and older people need?",
    hook: "Breastfed babies need drops from birth, under-5s need daily vitamins, and pregnancy and later life bring their own advice.",
    short: "Breastfed babies need a daily vitamin D supplement from birth, and children aged 1 to 4 need 10 micrograms a day. In pregnancy, 10 micrograms every day is advised between early October and late March, and all year for some. Older people who are frail, housebound or in a care home should take vitamin D all year.",
    sections: [
      {
        heading: "Babies",
        paragraphs: [
          "Babies who are breastfed should be given a daily supplement of eight and a half to 10 micrograms of vitamin D from birth. This is whether or not the mother is taking a supplement containing vitamin D herself.",
          "Babies having more than 500ml, about a pint, of infant formula a day should not be given a vitamin D supplement. This is because infant formula is already fortified with vitamin D and other nutrients.",
        ],
      },
      {
        heading: "Young children",
        paragraphs: [
          "Children aged 1 to 4 should be given a daily supplement containing 10 micrograms of vitamin D. The government recommends that all children aged 6 months to 5 years have vitamins A, C and D every day.",
          "Young children should still have vitamin drops even if they get out in the sun. Do not give two supplements at once, such as cod liver oil and vitamin drops, and your health visitor can tell you where to get drops.",
        ],
      },
      {
        heading: "Pregnancy and breastfeeding",
        paragraphs: [
          "Vitamin D helps your baby's bones and teeth develop. If you are pregnant, 10 micrograms of vitamin D every day is recommended between early October and late March, and all year if you usually cover most of your skin or spend a lot of time indoors.",
          "Many pregnancy multivitamins already contain 10 micrograms, so check the packet before taking any more. Do not take cod liver oil or supplements containing vitamin A in pregnancy. Vitamin D passes into breast milk in low amounts, and breastfed babies still need their own drops.",
        ],
      },
      {
        heading: "Fertility",
        paragraphs: [
          "There is no evidence to suggest that taking colecalciferol, a form of vitamin D, reduces fertility in men or women. If you are trying to get pregnant, are pregnant or breastfeeding, tell your doctor if you take vitamin D treatment.",
        ],
      },
      {
        heading: "Older people",
        paragraphs: [
          "People aged 65 or older are at higher risk of vitamin D deficiency. People who are frail, housebound or in a care home should take a daily vitamin D supplement throughout the year.",
          "Some people find their appetite drops as they get older, which makes it harder to get the nutrients needed for muscles and bones. A supplement containing calcium and vitamin D may help, and a GP or pharmacist can help choose one.",
        ],
      },
    ],
    helps: [
      "Give breastfed babies a daily vitamin D supplement from birth.",
      "Give children aged 1 to 4 a daily 10 microgram vitamin D supplement, and only one supplement at a time.",
      "In pregnancy, take 10 micrograms a day from early October to late March, and all year if you cover up or are often indoors.",
      "Check whether your pregnancy multivitamin already contains vitamin D.",
      "If you are older and rarely outdoors, take a daily supplement throughout the year.",
      "Ask your health visitor about Healthy Start vitamins, which are free if you qualify.",
    ],
    tryThisWeek: [
      "Check the children's vitamin drops.",
      "Read your pregnancy vitamin label.",
      "Ask about Healthy Start vitamins.",
    ],
    ask: "What vitamin D should my baby, child or I be taking at this stage of life?",
    interactive: {
      kind: "scenarios",
      title: "Who needs what?",
      scenarios: [
        {
          id: "breastfed",
          situation: "Your newborn is breastfed and you take vitamin D yourself.",
          options: [{ text: "Give your baby daily vitamin D too", best: true }, { text: "Your supplement covers the baby" }],
          why: "Breastfed babies should be given a daily vitamin D supplement from birth, whether or not the mother is taking one herself.",
        },
        {
          id: "formula",
          situation: "Your baby has more than 500ml of formula a day.",
          options: [{ text: "No extra vitamin D is needed", best: true }, { text: "Add vitamin D drops as well" }],
          why: "Infant formula is already fortified with vitamin D, so these babies should not be given a vitamin D supplement.",
        },
        {
          id: "pregnant",
          situation: "You are pregnant and already take a pregnancy multivitamin.",
          options: [{ text: "Check it for 10 micrograms of vitamin D", best: true }, { text: "Add cod liver oil" }],
          why: "Many pregnancy multivitamins already contain 10 micrograms. Do not take cod liver oil or vitamin A supplements in pregnancy.",
        },
        {
          id: "older",
          situation: "Your grandfather is housebound.",
          options: [{ text: "A daily supplement all year", best: true }, { text: "Only when the clocks go back" }],
          why: "People who are frail, housebound or in a care home should take a daily vitamin D supplement throughout the year.",
        },
      ],
    },
    sources: [NHS_CHILD_VIT, NHS_VITD, NHS_PREG_VIT, NHS_COLE_PREG, NHS_COLE_QA, NHS_BONES_65, BDA_VITD],
    quiz: {
      question: "When should a breastfed baby start vitamin D drops?",
      options: [{ text: "From birth", right: true }, { text: "At their first birthday" }, { text: "Only in summer" }],
      why: "Babies who are breastfed should be given a daily supplement of vitamin D from birth.",
    },
  },
  {
    id: "vitd-medicines",
    kicker: "Medicines",
    question: "Which medicines and conditions affect vitamin D?",
    hook: "Some conditions stop you absorbing it, and some medicines lower it or clash with it. A quick check with a pharmacist sorts most of it.",
    short: "Bowel conditions such as coeliac disease and Crohn's disease, weight loss surgery, severe liver disease and end-stage kidney disease can all lower vitamin D. Some medicines, including some for epilepsy, cholesterol and infections, and steroids, can lower it or stop it working. Others, such as digoxin and some water tablets, can raise calcium when taken with vitamin D.",
    sections: [
      {
        heading: "Conditions that lower it",
        paragraphs: [
          "Conditions that stop the body absorbing food properly, such as coeliac disease, Crohn's disease and short bowel syndrome, or weight loss surgery, can reduce how much vitamin D the body absorbs from food.",
          "Severe liver disease and end-stage chronic kidney disease affect the way the body handles vitamin D. The liver and the kidneys are needed to turn it into its active form.",
        ],
      },
      {
        heading: "Medicines that can lower it",
        paragraphs: [
          "Medicines for epilepsy, such as phenytoin, carbamazepine and phenobarbital, can lower vitamin D, and you may need a larger dose. Some anti-viral medicines and rifampicin are also listed.",
          "Laxatives such as paraffin oil, and cholestyramine, a medicine to lower cholesterol, can stop vitamin D entering the blood as usual. Steroids such as prednisolone may reduce its effects, and orlistat, which reduces fat absorption, can lower it too.",
        ],
      },
      {
        heading: "Medicines that do not mix well",
        paragraphs: [
          "Digoxin, a medicine for heart problems, taken with vitamin D may cause too much calcium in the blood and an abnormal heartbeat. Some water tablets, such as bendroflumethiazide or indapamide, may also cause too much calcium.",
          "Antifungal medicines such as ketoconazole, and actinomycin, a cancer medicine, may affect the way vitamin D is broken down.",
        ],
      },
      {
        heading: "Kidney disease and other forms",
        paragraphs: [
          "There are different types of vitamin D medicine, including alfacalcidol and calcitriol. Alfacalcidol does not need the kidneys to turn it into its active form, so it can be useful for chronic kidney disease.",
          "Tell your doctor before starting vitamin D if you have kidney problems or have had kidney stones, high calcium levels, or a rare condition called sarcoidosis. Your doctor will decide which type of vitamin D suits your condition.",
        ],
      },
      {
        heading: "What does not change",
        paragraphs: [
          "Vitamin D will not stop any type of contraception from working, including the combined pill and emergency contraception. There are no foods or drinks you need to avoid, and you can drink alcohol while taking it.",
        ],
      },
    ],
    helps: [
      "Tell your doctor or pharmacist about every medicine you take, including herbal remedies, vitamins and supplements.",
      "Do not take other supplements containing calcium or vitamin D without talking to your doctor first.",
      "Talk to your doctor if you have severe liver or kidney disease, a condition that affects how you absorb food, or take long-term anti-epileptic medicines.",
      "Check with your doctor or pharmacist before starting a supplement if you have been told you have high calcium levels, or you take medicine for liver or kidney disease, cancer, epilepsy, fungal infections or heart disease, or steroids.",
    ],
    tryThisWeek: [
      "List your medicines and supplements.",
      "Ask your pharmacist about vitamin D.",
      "Check before adding any calcium.",
    ],
    ask: "Could any of my medicines or conditions be lowering my vitamin D, or clash with a supplement?",
    interactive: {
      kind: "flip-cards",
      title: "Medicines to mention",
      intro: "Turn each card to see how that medicine and vitamin D affect each other.",
      cards: [
        { id: "digoxin", front: "Digoxin", when: "For heart problems", back: "You may get too much calcium in your blood, which may cause an abnormal heartbeat." },
        { id: "diuretics", front: "Some water tablets", when: "Bendroflumethiazide, indapamide", back: "You may get too much calcium in your blood." },
        { id: "epilepsy", front: "Epilepsy medicines", when: "Phenytoin, carbamazepine, phenobarbital", back: "You may need a larger dose of vitamin D." },
        { id: "cholestyramine", front: "Cholestyramine or paraffin oil", when: "For cholesterol, or a laxative", back: "Your vitamin D may not enter your blood as usual." },
        { id: "steroids", front: "Steroids", when: "Prednisolone, hydrocortisone", back: "These may reduce the effects of vitamin D." },
        { id: "antifungals", front: "Some antifungals", when: "Ketoconazole, clotrimazole", back: "These may affect the way vitamin D is broken down." },
      ],
    },
    sources: [NHS_COLE_OTHER, NHS_COLE_QA, BDA_VITD, CKS_CAUSES, ROS_VITD, NHS_COLE_WHO],
    quiz: {
      question: "Which medicine can cause too much calcium when taken with vitamin D?",
      options: [{ text: "Digoxin", right: true }, { text: "The combined pill" }, { text: "Paracetamol" }],
      why: "Digoxin, a medicine for heart problems, taken with vitamin D may cause too much calcium in the blood and an abnormal heartbeat.",
    },
  },
];
