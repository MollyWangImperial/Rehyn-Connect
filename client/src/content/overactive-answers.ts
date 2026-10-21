import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Overactive thyroid page's pieces (content/library-conditions/body.ts
// `learnId`). Every sentence was written from wording checked on 20 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS
// (overactive thyroid, carbimazole and propranolol pages), the British Thyroid Foundation and NICE's thyroid
// disease guideline (NG145). General information only; it never replaces what a person's own team tells them.

const nhsHyper = (label: string, path: string): LearnSource => ({ label: `NHS: Overactive thyroid, ${label}`, url: `https://www.nhs.uk/conditions/overactive-thyroid-hyperthyroidism/${path}` });
const nhsMedicine = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/medicines/${path}` });
const btf = (label: string, path: string): LearnSource => ({ label: `British Thyroid Foundation: ${label}`, url: `https://www.btf-thyroid.org/${path}` });

const NHS_HYPER: LearnSource = { label: "NHS: Overactive thyroid (hyperthyroidism)", url: "https://www.nhs.uk/conditions/overactive-thyroid-hyperthyroidism/" };
const NHS_SYMPTOMS = nhsHyper("symptoms", "symptoms/");
const NHS_CAUSES = nhsHyper("causes", "causes/");
const NHS_DIAGNOSIS = nhsHyper("diagnosis", "diagnosis/");
const NHS_TREATMENT = nhsHyper("treatment", "treatment/");
const NHS_COMPLICATIONS = nhsHyper("complications", "complications/");
const NHS_BULGING: LearnSource = { label: "NHS: Bulging eyes (exophthalmos)", url: "https://www.nhs.uk/conditions/bulging-eyes/" };
const NHS_CARB_ABOUT = nhsMedicine("About carbimazole", "carbimazole/about-carbimazole/");
const NHS_CARB_HOW = nhsMedicine("How and when to take carbimazole", "carbimazole/how-and-when-to-take-carbimazole/");
const NHS_CARB_SIDE = nhsMedicine("Side effects of carbimazole", "carbimazole/side-effects-of-carbimazole/");
const NHS_CARB_QUESTIONS = nhsMedicine("Common questions about carbimazole", "carbimazole/common-questions-about-carbimazole/");
const NHS_CARB_PREGNANCY = nhsMedicine("Pregnancy, breastfeeding and fertility while taking carbimazole", "carbimazole/pregnancy-breastfeeding-and-fertility-while-taking-carbimazole/");
const NHS_PROP_ABOUT = nhsMedicine("About propranolol", "propranolol/about-propranolol/");
const NHS_PROP_HOW = nhsMedicine("How and when to take propranolol", "propranolol/how-and-when-to-take-propranolol/");
const NHS_PROP_SIDE = nhsMedicine("Side effects of propranolol", "propranolol/side-effects-of-propranolol/");
const NHS_PROP_QUESTIONS = nhsMedicine("Common questions about propranolol", "propranolol/common-questions-about-propranolol/");
const BTF_WHAT = btf("Your thyroid gland", "what-is-thyroid-disorder");
const BTF_HYPER = btf("Hyperthyroidism", "hyperthyroidism-leaflet");
const BTF_DRUGS = btf("Antithyroid drug therapy to treat hyperthyroidism", "antithyroid-drug-therapy-to-treat-hyperthyroidismleaflet");
const BTF_RAI = btf("Radioactive iodine (RAI) treatment", "radioactive-iodine-rai-treatment");
const BTF_SURGERY = btf("About thyroid surgery", "about-thyroid-surgery");
const BTF_TFT = btf("Thyroid function tests", "thyroid-function-tests");
const BTF_ANTIBODIES = btf("Thyroid antibodies explained", "thyroid-antibodies-explained");
const BTF_TED = btf("Thyroid eye disease", "thyroid-eye-disease-leaflet");
const BTF_TED_SMOKING = btf("TED and smoking: information for patients", "ted-and-smoking-information-for-patients");
const BTF_PSYCH = btf("Psychological symptoms and thyroid disorders", "psychological-symptoms-and-thyroid-disorders");
const BTF_FATIGUE = btf("Coping with fatigue", "coping-with-fatigue");
const BTF_PREGNANCY = btf("Pregnancy and fertility in thyroid disorders", "pregnancy-and-fertility-in-thyroid-disorders");
const NICE_NG145: LearnSource = { label: "NICE: Thyroid disease, assessment and management (NG145), recommendations", url: "https://www.nice.org.uk/guidance/ng145/chapter/Recommendations" };

export const overactiveAnswers: LearnArticle[] = [
  {
    id: "hyper-what-it-does",
    kicker: "Understanding",
    question: "What does too much thyroid hormone feel like?",
    hook: "The body's pace-setter stuck on fast: a racing heart, heat, shaky hands, and weight loss despite eating more.",
    short: "An overactive thyroid makes too much thyroid hormone, so the body's cells work faster than normal. Common symptoms include nervousness, a fast or irregular heartbeat, feeling hot, trembling and weight loss. It can affect anyone, but it is about 10 times more common in women than men.",
    sections: [
      {
        heading: "Stuck on fast",
        paragraphs: [
          "An overactive thyroid, also called hyperthyroidism or thyrotoxicosis, is where the thyroid gland produces too much of the thyroid hormones.",
          "These hormones affect things such as heart rate and body temperature. With too much, the body's cells work faster than normal.",
        ],
      },
      {
        heading: "How it feels",
        paragraphs: [
          "Symptoms can include nervousness, anxiety and irritability, mood swings, difficulty sleeping, feeling tired all the time and sensitivity to heat.",
          "You may find it hard to stay still, and have a lot of nervous energy. Diarrhoea, needing to pee more often than usual and persistent thirst can happen too.",
        ],
      },
      {
        heading: "What others may see",
        paragraphs: [
          "Physical signs include a swelling in the neck, called a goitre, a fast or irregular heartbeat, twitching or trembling, and warm skin with excessive sweating.",
          "Weight loss is common, often despite an increased appetite, although a few people gain weight.",
        ],
      },
      {
        heading: "Gradual or sudden",
        paragraphs: [
          "Symptoms may develop gradually or suddenly. For some people they are mild, but for others they can be severe.",
          "It can affect anyone, but it is about 10 times more common in women than men, and typically happens between 20 and 40 years of age.",
        ],
      },
      {
        heading: "Getting checked",
        paragraphs: [
          "These signs can have a number of causes, but a blood test can often show whether they come from the thyroid.",
          "Many of the symptoms start to clear up when treatment takes effect.",
        ],
      },
    ],
    helps: [
      "See a GP if you have symptoms or signs of an overactive thyroid.",
      "Make a list of all your symptoms to show the GP.",
      "Ask about a blood test to check how well your thyroid is working.",
      "Mention any eye redness, dryness or vision problems.",
    ],
    tryThisWeek: [
      "Write a list of your symptoms.",
      "Book a GP appointment.",
      "Mention any eye changes.",
    ],
    ask: "Could my symptoms be an overactive thyroid?",
    interactive: {
      kind: "signs",
      title: "Signs of a fast thyroid",
      intro: "Tick any you have noticed. Showing the list to a GP can help.",
      signs: ["Nervousness, anxiety or irritability", "Difficulty sleeping", "Feeling hot, or sweating a lot", "A fast or irregular heartbeat", "Twitching or trembling", "Weight loss despite eating more", "Diarrhoea or needing to pee more", "A swelling in the neck", "Red, dry or sore eyes"],
      after: "These can have other causes, but a blood test can often tell. See a GP and show them your list.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_HYPER, NHS_SYMPTOMS, BTF_WHAT, BTF_HYPER],
    quiz: {
      question: "What happens to the body's cells with too much thyroid hormone?",
      options: [{ text: "They work faster than normal", right: true }, { text: "They slow down" }, { text: "They stop working" }],
      why: "These hormones affect things such as heart rate and body temperature. With too much, the body's cells work faster than normal.",
    },
  },
  {
    id: "hyper-causes",
    kicker: "Causes",
    question: "What causes an overactive thyroid?",
    hook: "Graves' disease is behind most cases. Lumps on the thyroid, some medicines and inflammation account for many of the rest.",
    short: "About 4 in every 5 people with an overactive thyroid have Graves' disease, where the immune system makes antibodies that push the thyroid to make too much hormone. Lumps called nodules, some medicines such as amiodarone, and thyroiditis are other causes. Graves' disease often runs in families, and smoking raises the risk.",
    sections: [
      {
        heading: "Graves' disease",
        paragraphs: [
          "About 4 in every 5 people with an overactive thyroid have Graves' disease. It is an autoimmune condition: the immune system produces antibodies that cause the thyroid to make too much hormone.",
          "Its cause is unknown, but it mostly affects young or middle-aged women and often runs in families.",
        ],
      },
      {
        heading: "Smoking and stress",
        paragraphs: [
          "Smoking can increase the risk of getting Graves' disease. Some chemicals in smoke can stimulate the immune system to react against the thyroid.",
          "Stress also seems to play a role. Some people have had major stresses a year or so before Graves' disease is diagnosed.",
        ],
      },
      {
        heading: "Lumps on the thyroid",
        paragraphs: [
          "Less commonly, lumps called nodules develop on the thyroid. They are usually not cancer, but they may contain thyroid tissue that makes extra hormone.",
          "It is not known why some people develop nodules, but they usually affect people over 60.",
        ],
      },
      {
        heading: "Medicines and inflammation",
        paragraphs: [
          "Medicines that contain iodine, such as amiodarone, sometimes used for an irregular heartbeat, can occasionally cause it. It usually improves once that medicine is stopped, although this may take several months.",
          "Thyroiditis, a swelling of the thyroid, can cause extra thyroid hormone to be produced. The overactivity it causes is temporary and settles without specific treatment.",
          "Taking too much levothyroxine for an underactive thyroid can also cause it.",
        ],
      },
    ],
    helps: [
      "Ask your doctor what is causing your overactive thyroid.",
      "If you smoke, ask your GP surgery or pharmacist about help to stop.",
      "Tell your doctor about all your medicines, even ones bought over the counter.",
      "Encourage unwell family members to ask their own GP whether thyroid testing is needed.",
    ],
    tryThisWeek: [
      "Ask what is causing it.",
      "Ask about help to stop smoking.",
      "List all your medicines.",
    ],
    ask: "What is causing my overactive thyroid?",
    interactive: {
      kind: "flip-cards",
      title: "The main causes",
      intro: "Turn each card to see how each cause works.",
      cards: [
        { id: "graves", front: "Graves' disease", when: "About 4 in every 5 people", back: "Antibodies cause the thyroid to make too much hormone. It often runs in families." },
        { id: "nodules", front: "Nodules", when: "Usually over 60", back: "Lumps that may contain thyroid tissue making extra hormone. Usually not cancer." },
        { id: "medicine", front: "Medicines with iodine", when: "Such as amiodarone", back: "Usually improves once the medicine is stopped, though it may take months." },
        { id: "thyroiditis", front: "Thyroiditis", when: "A swelling of the thyroid", back: "Can cause extra hormone. It is temporary and settles without specific treatment." },
        { id: "levothyroxine", front: "Too much levothyroxine", when: "When treating an underactive thyroid", back: "Taking too much replacement hormone can cause an overactive thyroid." },
      ],
    },
    sources: [NHS_CAUSES, BTF_HYPER, NHS_HYPER, BTF_TED_SMOKING],
    quiz: {
      question: "How many people with an overactive thyroid have Graves' disease?",
      options: [{ text: "About 4 in every 5", right: true }, { text: "About 1 in 100" }, { text: "None at all" }],
      why: "About 4 in every 5 people with an overactive thyroid have Graves' disease.",
    },
  },
  {
    id: "hyper-tests",
    kicker: "Tests",
    question: "Which blood tests and scans find an overactive thyroid?",
    hook: "A low TSH with a high T3 or T4 points to an overactive thyroid. Antibodies and scans then find the cause.",
    short: "A thyroid function blood test checks TSH, T3 and T4. A low TSH with a high T3 or T4 usually means an overactive thyroid. Further tests, such as antibodies and sometimes a thyroid scan, help find out what is causing it.",
    sections: [
      {
        heading: "The first blood test",
        paragraphs: [
          "A thyroid function test checks the levels of TSH, made by the pituitary gland, and the two main thyroid hormones, T3 and T4.",
          "A low level of TSH and high levels of T3 or T4 usually means an overactive thyroid. Doctors may call these free T3 and T4.",
        ],
      },
      {
        heading: "What counts as normal",
        paragraphs: [
          "Results are compared with what is normal for a healthy person of your age. What is normal also varies with the testing technique used by the laboratory.",
        ],
      },
      {
        heading: "Finding the cause",
        paragraphs: [
          "If levels are high, you may be referred to a specialist for further tests. A blood test for TSH receptor antibodies can show whether it is Graves' disease.",
          "About 95% of people with Graves' disease have raised TSH receptor antibodies. Very high levels make long-term remission after antithyroid tablets less likely.",
        ],
      },
      {
        heading: "Inflammation and scans",
        paragraphs: [
          "A blood test called ESR may check for inflammation. If there are signs of inflammation, the extra hormone is caused by thyroiditis.",
          "A thyroid scan can look for lumps. You swallow, or are injected with, a small amount of a slightly radioactive substance that the thyroid absorbs. The scan shows how much is absorbed, and the size and shape of the thyroid.",
        ],
      },
      {
        heading: "Things that affect results",
        paragraphs: [
          "Some medicines can affect thyroid tests, so tell your doctor about all your medicines, even ones bought over the counter. Supplements containing iodine or biotin can affect results too.",
        ],
      },
    ],
    helps: [
      "Tell your doctor about all your medicines, even over-the-counter ones.",
      "Mention any supplements, especially ones containing iodine or biotin.",
      "Ask whether your TSH receptor antibodies have been checked.",
      "Ask what the further tests found about the cause.",
    ],
    tryThisWeek: [
      "List all your medicines.",
      "Mention any supplements.",
      "Ask about your antibody result.",
    ],
    ask: "Do I have Graves' disease, and do I need a scan?",
    interactive: {
      kind: "flip-cards",
      title: "Tests, card by card",
      intro: "Turn each card to see what the test looks for.",
      cards: [
        { id: "tft", front: "Thyroid function test", when: "The first blood test", back: "Checks TSH, T3 and T4. A low TSH with a high T3 or T4 usually means an overactive thyroid." },
        { id: "trab", front: "TSH receptor antibodies", when: "To check for Graves' disease", back: "Raised in about 95% of people with Graves' disease." },
        { id: "esr", front: "ESR blood test", when: "To check for inflammation", back: "Signs of inflammation point to thyroiditis as the cause." },
        { id: "scan", front: "Thyroid scan", when: "To look for lumps", back: "A slightly radioactive substance shows how much the thyroid absorbs, and its size and shape." },
      ],
    },
    sources: [NHS_DIAGNOSIS, BTF_HYPER, BTF_TFT, BTF_ANTIBODIES, NICE_NG145],
    quiz: {
      question: "Which pattern usually means an overactive thyroid?",
      options: [{ text: "A low TSH, with a high T3 or T4", right: true }, { text: "A high TSH, with a low T4" }, { text: "A normal TSH and a normal T4" }],
      why: "A low level of TSH and high levels of T3 or T4 usually means an overactive thyroid.",
    },
  },
  {
    id: "hyper-eyes",
    kicker: "Eyes",
    question: "What is thyroid eye disease, and what should I watch for?",
    hook: "Gritty, red or bulging eyes can come with Graves' disease. Most cases are mild, but some changes need a specialist quickly.",
    short: "Thyroid eye disease is an autoimmune condition where the tissues around and behind the eyes become inflamed. It affects some people with Graves' disease, causing gritty, red, watery or bulging eyes and sometimes double vision. Most cases are mild, but worsening symptoms, blurred vision or double vision need a doctor without delay.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Thyroid eye disease is a condition where the eye muscles, eyelids, tear glands and fatty tissues behind the eye become inflamed. It is an autoimmune condition.",
          "It affects around 1 in 4 people with an overactive thyroid caused by Graves' disease. It can also occur when the thyroid is underactive or working normally, and after treatment.",
        ],
      },
      {
        heading: "Signs to look for",
        paragraphs: [
          "Problems can include eyes feeling dry and gritty, sensitivity to light, watering eyes, red eyes, and red, swollen or pulled back eyelids.",
          "The eyes may bulge or look staring. Pain in or behind the eye, especially when looking up or sideways, and blurred or double vision are other signs.",
        ],
      },
      {
        heading: "Not hay fever",
        paragraphs: [
          "Thyroid eye disease is sometimes mistaken for conjunctivitis, allergy or hay fever. Allergies usually cause itchy eyes, whereas thyroid eye disease does not.",
          "Thyroid eye disease often brings an ache or pain behind the eye, and sometimes double vision, which the other conditions do not.",
        ],
      },
      {
        heading: "Treatment",
        paragraphs: [
          "Many people have mild eye symptoms that get better as the overactive thyroid is treated. Artificial tear drops, gels and ointments can help the eyes feel more comfortable.",
          "Symptoms may worsen for the first 6 to 12 months, then become stable or improve. Steroids may be needed for significant inflammation, and surgery may help once it has settled.",
        ],
      },
      {
        heading: "When it is urgent",
        paragraphs: [
          "In less than 5% of people it becomes very severe, and vision can be affected. If these problems are found early, treatment can be successful.",
          "See your doctor without delay if symptoms get worse over days or weeks, or if blurred vision does not improve by blinking. The same applies if colours look less bright, or you see double.",
          "Call 999 or go to A&E if your eyes start bulging and you have any changes to your vision.",
        ],
      },
    ],
    helps: [
      "If you smoke, stop, and ask your doctor for advice on how.",
      "Have regular thyroid blood tests and take your medicine as advised, to keep levels steady.",
      "Use artificial tear drops if your eyes feel gritty or uncomfortable.",
      "Wear sunglasses if your eyes are sensitive to bright light.",
      "Use pillows to keep your head raised when lying down.",
      "Ask for a referral to a specialist eye centre if symptoms get worse.",
    ],
    tryThisWeek: [
      "Try artificial tear drops.",
      "Wear sunglasses in bright light.",
      "Sleep with your head raised.",
    ],
    ask: "Are my eyes affected, and who should check them?",
    interactive: {
      kind: "signs",
      title: "Eye changes to report",
      intro: "Tick any you have noticed. Some need a specialist quickly.",
      signs: ["Gritty or dry eyes", "Watery eyes", "Sensitivity to bright light", "Red or swollen eyelids", "Eyes that look staring or bulging", "Pain behind the eye when looking up or sideways", "Blurred vision that does not clear by blinking", "Colours looking less bright", "Double vision"],
      after: "See your doctor and ask if it could be thyroid eye disease. If vision is changing or you see double, ask for referral to a specialist eye centre without delay.",
      copyHeading: "Eye changes I have noticed",
    },
    sources: [NHS_COMPLICATIONS, BTF_TED, NHS_BULGING],
    quiz: {
      question: "Which sign points to thyroid eye disease rather than an allergy?",
      options: [{ text: "An ache behind the eye when looking sideways", right: true }, { text: "Very itchy eyes" }, { text: "Sticky eyes" }],
      why: "Thyroid eye disease often brings an ache or pain behind the eye, and sometimes double vision, which the other conditions do not.",
    },
  },
  {
    id: "hyper-tablets",
    kicker: "Treatment",
    question: "How does carbimazole work, and what is the sore-throat rule?",
    hook: "Carbimazole calms the thyroid within weeks. One rare side effect means a sore throat or fever needs checking straight away.",
    short: "Carbimazole reduces the amount of hormone the thyroid makes, and people may start to feel better after 1 to 3 weeks. A course often lasts 12 to 18 months, with regular blood tests. Rarely, it lowers white blood cells, so a sore throat, mouth ulcers, high temperature or flu-like symptoms mean stopping it and calling a doctor or 111 straight away.",
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "The thyroid uses iodine to make its hormones. Carbimazole blocks the way the body processes iodine, so less thyroid hormone is made.",
          "It starts working straight away. You may start to feel better after 1 to 3 weeks, but it can take 1 to 2 months to work fully.",
        ],
      },
      {
        heading: "The course",
        paragraphs: [
          "At first you take it 2 or 3 times a day. When levels are stable, you can usually go onto a lower dose, taken once a day.",
          "You may need to take it for 12 to 18 months, though some people need it for several years. Blood tests are done every 6 weeks or so at first, then every 3 months.",
          "With Graves' disease, there is about a 30 to 50% chance of no further thyroid problems after a single course.",
        ],
      },
      {
        heading: "Common side effects",
        paragraphs: [
          "Side effects usually happen in the first 8 weeks and tend not to last long. They include feeling sick, headaches, painful joints, an itchy rash and thinning hair.",
          "A rash affects about 5 in 100 people taking these drugs. It clears up if the drug is stopped, and the other antithyroid drug may then be used.",
        ],
      },
      {
        heading: "The sore-throat rule",
        paragraphs: [
          "One rare side effect is a sudden drop in white blood cells, which makes it harder to fight infections.",
          "Stop taking carbimazole and call your doctor or 111 now if you have a high temperature, sore throat, mouth ulcers, severe tiredness or flu-like symptoms. Do the same if you feel generally unwell, or bruise or bleed more easily.",
          "Sore throats and mouth ulcers are common, and the blood test may well be normal, but it is better to be safe.",
        ],
      },
      {
        heading: "Other things to know",
        paragraphs: [
          "Use reliable contraception while taking carbimazole, as it can harm an unborn baby. Tell your doctor straight away if you become pregnant.",
          "If you forget a dose, take it as soon as you remember. If it is time for your next dose, take both doses together.",
          "Do not stop taking it without speaking to your doctor first, as your symptoms can come back.",
        ],
      },
    ],
    helps: [
      "Stop carbimazole and call your doctor or 111 at once with a sore throat, mouth ulcers or a high temperature.",
      "Tell the doctor you are taking it, and ask for a white blood cell count.",
      "Keep your blood test appointments.",
      "Use reliable contraception while taking it.",
      "Do not stop taking it without speaking to your doctor first.",
      "Set an alarm if you often forget doses.",
    ],
    tryThisWeek: [
      "Learn the sore-throat rule.",
      "Book your next blood test.",
      "Set a dose alarm.",
    ],
    ask: "What should I do if I get a sore throat or fever on the tablets?",
    interactive: {
      kind: "scenarios",
      title: "Carbimazole moments",
      scenarios: [
        {
          id: "throat",
          situation: "You wake with a sore throat and a high temperature.",
          options: [{ text: "Stop it and call your doctor or 111", best: true }, { text: "Carry on and wait a week" }],
          why: "Stop taking carbimazole and call your doctor or 111 now if you have a high temperature, sore throat, mouth ulcers, severe tiredness or flu-like symptoms.",
        },
        {
          id: "missed",
          situation: "You forgot a dose, and the next one is due.",
          options: [{ text: "Take both doses together", best: true }, { text: "Skip both doses" }],
          why: "If you forget a dose, take it as soon as you remember. If it is time for your next dose, take both doses together.",
        },
        {
          id: "better",
          situation: "You feel much better after a few weeks.",
          options: [{ text: "Keep taking it, and keep your blood tests", best: true }, { text: "Stop taking it" }],
          why: "Do not stop taking it without speaking to your doctor first, as your symptoms can come back.",
        },
      ],
    },
    sources: [NHS_CARB_ABOUT, NHS_CARB_HOW, NHS_CARB_SIDE, NHS_CARB_QUESTIONS, BTF_DRUGS, NHS_TREATMENT],
    quiz: {
      question: "On carbimazole, what do you do about a sore throat and a high temperature?",
      options: [{ text: "Stop it and call your doctor or 111", right: true }, { text: "Take a double dose" }, { text: "Ignore it" }],
      why: "Stop taking carbimazole and call your doctor or 111 now if you have a high temperature, sore throat, mouth ulcers, severe tiredness or flu-like symptoms.",
    },
  },
  {
    id: "hyper-radioiodine",
    kicker: "Treatment",
    question: "What does radioiodine treatment involve?",
    hook: "A single capsule or drink, a few weeks of keeping your distance, and often a daily tablet afterwards.",
    short: "Radioactive iodine is a drink or capsule that the thyroid absorbs, destroying some of its cells so it makes less hormone. It is highly effective, and most people need only one treatment. Afterwards you avoid close contact with children and pregnant women for a few weeks, and many people later need levothyroxine for life.",
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "Radioactive iodine treatment is a type of radiotherapy. It destroys cells in the thyroid gland, reducing the amount of hormone it can make, and may also shrink the gland.",
          "It is a highly effective treatment that can cure an overactive thyroid. It has been used since the early 1940s.",
        ],
      },
      {
        heading: "On the day",
        paragraphs: [
          "You are given a drink or capsule containing iodine and a low dose of radiation, which the thyroid absorbs. Most people only need a single treatment.",
          "Antithyroid tablets are usually stopped at least one week before the treatment, and not taken for at least one week afterwards. You will be told when.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "The radiation dose is very low, but some precautions are needed. Avoid prolonged close contact with children and pregnant women for about 3 weeks.",
          "Women should avoid getting pregnant for at least 6 months, and men should not father a child for at least 4 months.",
          "It can take a few weeks or months to feel the full benefit, so you may take tablets such as carbimazole for a short time.",
        ],
      },
      {
        heading: "Who it is not for",
        paragraphs: [
          "It is not suitable during pregnancy or breastfeeding. It is also not suitable if your overactive thyroid is causing eye problems, as it may make thyroid eye disease worse.",
        ],
      },
      {
        heading: "The long term",
        paragraphs: [
          "Radioactive iodine often causes hormone levels to become too low, which is an underactive thyroid. With Graves' disease, you usually need levothyroxine for life afterwards.",
          "Frequent blood tests are needed until you are stable, and then once a year.",
        ],
      },
    ],
    helps: [
      "Ask when to stop and restart your antithyroid tablets.",
      "Keep at arm's length from babies, children under five and pregnant women for as long as you are told.",
      "Avoid a pregnancy for at least 6 months as a woman, or fathering a child for 4 months as a man.",
      "Tell your doctor about any eye problems before treatment.",
      "Have your blood tests afterwards, and once a year after that.",
    ],
    tryThisWeek: [
      "Ask about stopping your tablets.",
      "Plan time apart from young children.",
      "Book your follow-up blood tests.",
    ],
    ask: "Is radioiodine right for me, and what precautions will I need?",
    interactive: {
      kind: "timeline",
      title: "A radioiodine journey",
      steps: [
        { id: "before", when: "A week before", title: "Stop the tablets", points: ["Antithyroid tablets are usually stopped at least one week before.", "You will be told when."] },
        { id: "day", when: "Treatment day", title: "A drink or capsule", points: ["It contains iodine and a low dose of radiation.", "Most people need only one treatment."] },
        { id: "weeks", when: "The next few weeks", title: "Keep your distance", points: ["Avoid prolonged close contact with children and pregnant women for about 3 weeks."] },
        { id: "months", when: "The months after", title: "The effect builds", points: ["The full benefit can take weeks or months.", "Women avoid pregnancy for at least 6 months; men avoid fathering a child for 4."] },
        { id: "long", when: "Long term", title: "Checks for an underactive thyroid", points: ["Hormone levels often become too low.", "Blood tests until stable, then once a year."] },
      ],
    },
    sources: [NHS_TREATMENT, BTF_RAI, BTF_HYPER, NICE_NG145, NHS_COMPLICATIONS],
    quiz: {
      question: "How many radioiodine treatments do most people need?",
      options: [{ text: "Just one", right: true }, { text: "One every week" }, { text: "One a year for life" }],
      why: "Most people only need a single treatment.",
    },
  },
  {
    id: "hyper-surgery",
    kicker: "Treatment",
    question: "When is thyroid surgery the right choice?",
    hook: "Removing the thyroid stops an overactive thyroid coming back, at the cost of a daily tablet for life.",
    short: "Surgery to remove all or part of the thyroid may be best for a large goitre, severe eye problems, when other treatments are not possible, or if symptoms return after them. Removing the whole gland stops the overactivity coming back, but means taking levothyroxine for life. It is normal to feel tired afterwards, and energy can take up to a month to return.",
    sections: [
      {
        heading: "When it may be best",
        paragraphs: [
          "Surgery may be the best option if the thyroid is severely swollen with a large goitre, or if you have severe eye problems caused by an overactive thyroid.",
          "It may also suit people who cannot have other, less invasive treatments, or whose symptoms return after trying them.",
          "Surgery offers rapid relief of symptoms, and there is no need to delay pregnancy or fathering a child.",
        ],
      },
      {
        heading: "Types of operation",
        paragraphs: [
          "A total thyroidectomy removes all of the thyroid. A hemithyroidectomy removes half, and a near-total thyroidectomy leaves a little tissue on one side.",
          "Removing all of the gland is usually recommended, because it stops the symptoms coming back.",
        ],
      },
      {
        heading: "Questions to ask",
        paragraphs: [
          "Ask your doctor or surgeon to explain the purpose of the operation and all of the risks, however small. You can ask your surgeon about their personal complication rate.",
          "Possible complications include voice changes, low calcium levels, bleeding after the operation, neck numbness, swallowing difficulties and a scar.",
        ],
      },
      {
        heading: "After the operation",
        paragraphs: [
          "It is not usually a painful operation, but it is normal to feel tired, and it may take up to a month to get your energy back.",
          "Without a thyroid, the body cannot make thyroid hormones, so you will need levothyroxine for the rest of your life.",
        ],
      },
    ],
    helps: [
      "Ask your surgeon to explain the purpose and all the risks of the operation.",
      "Ask your surgeon about their personal complication rate.",
      "Expect to feel tired, and allow up to a month for your energy to return.",
      "Take levothyroxine every day afterwards, as prescribed.",
    ],
    tryThisWeek: [
      "Write your questions for the surgeon.",
      "Ask about the risks.",
      "Plan rest after the operation.",
    ],
    ask: "Why do you recommend surgery for me, and what are the risks?",
    interactive: {
      kind: "flip-cards",
      title: "Surgery, card by card",
      intro: "Turn each card to see what each option means.",
      cards: [
        { id: "total", front: "Total thyroidectomy", when: "Usually recommended", back: "Removes all of the thyroid. Stops symptoms coming back, with levothyroxine for life." },
        { id: "hemi", front: "Hemithyroidectomy", when: "Removes half the gland", back: "Levothyroxine may be needed if the remaining part cannot make enough." },
        { id: "near-total", front: "Near-total thyroidectomy", when: "Removes most of the gland", back: "Leaves a little tissue on one side." },
        { id: "recovery", front: "Recovery", when: "After the operation", back: "Not usually painful, but tiring. Energy can take up to a month to return." },
      ],
    },
    sources: [NHS_TREATMENT, BTF_SURGERY, BTF_HYPER, NICE_NG145],
    quiz: {
      question: "Why is removing the whole thyroid usually recommended?",
      options: [{ text: "It stops the symptoms coming back", right: true }, { text: "It means no tablets afterwards" }, { text: "It needs no recovery time" }],
      why: "Removing all of the gland is usually recommended, because it stops the symptoms coming back.",
    },
  },
  {
    id: "hyper-beta-blockers",
    kicker: "Treatment",
    question: "How do beta blockers help a racing heart?",
    hook: "They do not fix the thyroid, but they calm the racing heart, shaking and sweating while other treatment takes effect.",
    short: "Beta blockers such as propranolol slow the heart rate and help with symptoms like a fast heartbeat, shaking and anxiety. They are sometimes used in the first few weeks, while antithyroid tablets or radioiodine take effect. Propranolol usually starts to work in a few hours, and should not be stopped without talking to a doctor.",
    sections: [
      {
        heading: "What they do",
        paragraphs: [
          "Propranolol is a beta blocker. It slows down the heart rate and makes it easier for the heart to pump blood around the body.",
          "It can help reduce symptoms if you have too much thyroid hormone. It usually starts to work in a few hours.",
        ],
      },
      {
        heading: "A bridge while other treatment works",
        paragraphs: [
          "Beta blockers are sometimes used in the first few weeks after diagnosis. They relieve some symptoms while waiting for radioactive iodine or antithyroid tablets to take effect.",
          "Carbimazole is sometimes prescribed with a beta blocker. This can help if you have a fast heartbeat, or feel irritable or anxious.",
        ],
      },
      {
        heading: "How it is taken",
        paragraphs: [
          "For too much thyroid hormone, the usual adult dose is 10mg to 40mg, taken 3 or 4 times a day.",
          "The first dose may make you feel dizzy, so it may be taken at bedtime. If you forget a dose, take it when you remember, unless the next one is nearly due. Never take 2 doses at the same time.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Many people have no side effects or only minor ones. The main ones are feeling dizzy or tired, cold hands or feet, difficulty sleeping and nightmares.",
          "Contact a doctor or call 111 straight away if you are short of breath with a cough that gets worse when you exercise, or have swollen ankles or an irregular heartbeat.",
        ],
      },
      {
        heading: "Stopping",
        paragraphs: [
          "Stopping propranolol suddenly may make your health problem worse. Your doctor will usually reduce the dose gradually over 1 to 2 weeks.",
        ],
      },
    ],
    helps: [
      "Take your first dose at bedtime if your doctor advises it.",
      "Sit or lie down if you feel dizzy, and do not drive until you feel better.",
      "Try mittens and warm socks for cold fingers or toes.",
      "Never take 2 doses at the same time.",
      "Talk to your doctor before you stop.",
    ],
    tryThisWeek: [
      "Take the first dose at bedtime.",
      "Keep hands and feet warm.",
      "Talk to your doctor before stopping.",
    ],
    ask: "How long will I need a beta blocker, and how will I come off it?",
    interactive: {
      kind: "scenarios",
      title: "Living with a beta blocker",
      scenarios: [
        {
          id: "dizzy",
          situation: "You feel dizzy after your first dose.",
          options: [{ text: "Sit or lie down until it passes", best: true }, { text: "Drive to the pharmacy" }],
          why: "If propranolol makes you feel dizzy, sit or lie down until you feel better. Do not drive until you feel better.",
        },
        {
          id: "missed",
          situation: "You missed a dose and the next is nearly due.",
          options: [{ text: "Leave it out and take the next as usual", best: true }, { text: "Take two at once" }],
          why: "Never take 2 doses at the same time.",
        },
        {
          id: "stop",
          situation: "Your heart has calmed and you want to stop.",
          options: [{ text: "Talk to your doctor first", best: true }, { text: "Stop today" }],
          why: "Stopping propranolol suddenly may make your health problem worse. Your doctor will usually reduce the dose gradually over 1 to 2 weeks.",
        },
        {
          id: "cold",
          situation: "Your fingers feel cold.",
          options: [{ text: "Warm them and try mittens", best: true }, { text: "Have a strong coffee" }],
          why: "Put your hands under warm running water and try mittens. Drinks with caffeine can narrow blood vessels and further restrict blood flow.",
        },
      ],
    },
    sources: [NHS_PROP_ABOUT, NHS_PROP_HOW, NHS_PROP_SIDE, NHS_TREATMENT, BTF_HYPER, NHS_CARB_ABOUT],
    quiz: {
      question: "Why are beta blockers used with an overactive thyroid?",
      options: [{ text: "They ease symptoms while other treatment works", right: true }, { text: "They cure the thyroid" }, { text: "They replace thyroid hormone" }],
      why: "They relieve some symptoms while waiting for radioactive iodine or antithyroid tablets to take effect.",
    },
  },
  {
    id: "hyper-anxiety",
    kicker: "Mind",
    question: "Is this anxiety the thyroid, not me?",
    hook: "Nervousness, irritability and mood swings are classic symptoms of too much thyroid hormone. They usually ease as levels come under control.",
    short: "Nervousness, anxiety, irritability and mood swings are common symptoms of an overactive thyroid. Getting thyroid levels under control quickly is essential to stabilise mood. Most people find these feelings improve with treatment, though it can take longer than hoped.",
    sections: [
      {
        heading: "A symptom, not a failing",
        paragraphs: [
          "An overactive thyroid can cause nervousness, anxiety and irritability, mood swings and difficulty sleeping. You may find it hard to stay still, with a lot of nervous energy.",
          "Anxiety can feel like nervousness, a racing heart and trembling. It can also come from worries about managing daily life while coping with fatigue.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "Abnormal thyroid hormone levels can cause these symptoms, and rapid changes can unsettle your emotions. With an overactive thyroid especially, rapid and effective control of levels is essential to stabilise mood.",
          "Stress can make symptoms worse and take longer to settle. Some treatments can affect mood too: beta blockers can make some people feel tired or low, and steroids can make depression worse.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "Regular exercise and managing stress can help with anxiety, irritability, difficulty sleeping and hyperactivity.",
          "Propranolol helps block the effects of adrenaline and noradrenaline, reducing physical signs of anxiety such as a fast heartbeat.",
          "Anxiety sometimes needs treatment in its own right, and relaxation or talking therapies can help.",
        ],
      },
      {
        heading: "Relationships and recovery",
        paragraphs: [
          "An overactive thyroid may put a strain on relationships. Once it is treated, your emotional state and relationships are likely to improve.",
          "Most people make a full recovery. If symptoms do not settle, something other than the thyroid may be the cause.",
        ],
      },
    ],
    helps: [
      "Talk to your doctor about anxiety or mood swings.",
      "Take your tablets regularly, as missed doses can upset your hormone balance.",
      "Exercise regularly and find ways to manage stress.",
      "Confide in a family member or close friend.",
      "Give family, friends and colleagues the chance to understand what is happening.",
      "Keep a bedtime routine, and turn off screens an hour before bed.",
    ],
    tryThisWeek: [
      "Tell your doctor how you feel.",
      "Try some regular exercise.",
      "Switch off screens before bed.",
    ],
    ask: "Could my anxiety be my thyroid, and what can help while levels settle?",
    interactive: {
      kind: "risk-check",
      title: "What might be stirring it up?",
      intro: "Tick any that apply. Some you can change, and some ease as treatment works.",
      items: [
        { id: "levels", label: "Thyroid levels not yet controlled", note: "Rapid and effective control of levels is essential to stabilise mood.", changeable: false },
        { id: "missed", label: "Missing tablets", note: "Taking tablets irregularly can upset your hormone balance.", changeable: true },
        { id: "stress", label: "A lot of stress", note: "Stress can make symptoms worse. Regular exercise and managing stress can help.", changeable: true },
        { id: "sleep", label: "Poor sleep", note: "A bedtime routine, and turning off screens an hour before bed, may help.", changeable: true },
        { id: "beta", label: "Feeling low on beta blockers", note: "Beta blockers can make some people feel tired or low. Talk to your doctor.", changeable: true },
        { id: "alone", label: "Feeling misunderstood or isolated", note: "Talking to others who have been through a similar experience can help.", changeable: true },
      ],
    },
    sources: [NHS_SYMPTOMS, BTF_PSYCH, NHS_CARB_QUESTIONS, NHS_PROP_QUESTIONS, BTF_FATIGUE],
    quiz: {
      question: "With an overactive thyroid, what is essential to settle mood?",
      options: [{ text: "Getting thyroid levels under control", right: true }, { text: "Ignoring the symptoms" }, { text: "Stopping all medicines" }],
      why: "With an overactive thyroid especially, rapid and effective control of levels is essential to stabilise mood.",
    },
  },
  {
    id: "hyper-smoking",
    kicker: "Smoking",
    question: "How does smoking affect thyroid eye disease?",
    hook: "Smoking doubles the chance of thyroid eye disease, and heavy smoking makes it eight times more likely. Stopping helps quickly.",
    short: "Smoking is strongly linked to thyroid eye disease: smokers with Graves' disease are about twice as likely to develop it, and heavy smokers eight times as likely. People with eye disease who keep smoking respond less well to treatment, but this seems to disappear soon after stopping. Smoking also lowers the chance of a cure from antithyroid tablets.",
    sections: [
      {
        heading: "A strong link",
        paragraphs: [
          "Cigarette smoking has a major influence on Graves' disease and on thyroid eye disease. Smoking can also increase the risk of getting Graves' disease.",
          "Smoking reduces the oxygen in tissues, and low oxygen makes the tissues behind the eye prone to inflammation.",
        ],
      },
      {
        heading: "How much more likely",
        paragraphs: [
          "If you smoke, the chance of developing thyroid eye disease is doubled. Heavy smokers are eight times more likely to develop it than non-smokers.",
          "Smokers who have radioactive iodine treatment are four times more likely to develop it.",
        ],
      },
      {
        heading: "Treatment works less well",
        paragraphs: [
          "People with thyroid eye disease who keep smoking respond less well to treatments, but this seems to disappear soon after stopping.",
          "Smoking also reduces the chance of a cure after a course of antithyroid tablets. Smokers are up to three times more likely to relapse.",
        ],
      },
      {
        heading: "Stopping helps",
        paragraphs: [
          "The risk seems to decline very rapidly after quitting. Nicotine replacement is considered as appropriate for smokers with thyroid eye disease as for other smokers.",
          "There is very little research on vaping and thyroid eye disease. The safest thing is to stop both.",
          "People are four times more likely to stop for good using support services and treatment than trying alone. Avoiding second-hand smoke is also likely to help.",
        ],
      },
    ],
    helps: [
      "Stop smoking, and ask your doctor for advice on how.",
      "Use your local NHS stop smoking service.",
      "Ask about nicotine replacement to help you quit.",
      "Avoid second-hand smoke, especially around children.",
      "Avoid smoky, dry or dusty places if your eyes bulge.",
    ],
    tryThisWeek: [
      "Contact a stop smoking service.",
      "Ask about nicotine replacement.",
      "Keep your home smoke-free.",
    ],
    ask: "Are my eyes at risk, and what help is there to stop smoking?",
    interactive: {
      kind: "scenarios",
      title: "Smoke-free choices",
      scenarios: [
        {
          id: "quit",
          situation: "You want to stop smoking.",
          options: [{ text: "Use a stop smoking service", best: true }, { text: "Try alone, with no support" }],
          why: "People are four times more likely to stop for good using support services and treatment than trying alone.",
        },
        {
          id: "vape",
          situation: "You are thinking of switching to vaping.",
          options: [{ text: "Aim to stop both in time", best: true }, { text: "Vaping is known to be safe for the eyes" }],
          why: "There is very little research on vaping and thyroid eye disease. The safest thing is to stop both.",
        },
        {
          id: "patches",
          situation: "You wonder whether nicotine patches are allowed.",
          options: [{ text: "They are considered appropriate", best: true }, { text: "They make eye disease worse" }],
          why: "Nicotine replacement is considered as appropriate for smokers with thyroid eye disease as for other smokers.",
        },
        {
          id: "home",
          situation: "Someone in your home smokes indoors.",
          options: [{ text: "Ask them to keep the home smoke-free", best: true }, { text: "It makes no difference" }],
          why: "Avoiding second-hand smoke is also likely to help.",
        },
      ],
    },
    sources: [BTF_TED_SMOKING, BTF_TED, BTF_HYPER, BTF_DRUGS, NHS_CAUSES, NHS_BULGING],
    quiz: {
      question: "How much more likely are heavy smokers to develop thyroid eye disease?",
      options: [{ text: "Eight times more likely", right: true }, { text: "No more likely" }, { text: "Half as likely" }],
      why: "Heavy smokers are eight times more likely to develop it than non-smokers.",
    },
  },
  {
    id: "hyper-pregnancy",
    kicker: "Pregnancy",
    question: "How does an overactive thyroid affect pregnancy?",
    hook: "Plan ahead: some treatments need contraception, and the tablets may change before or early in pregnancy.",
    short: "An overactive thyroid that is not well controlled raises the risk of pre-eclampsia, miscarriage and premature birth. Contraception matters while taking carbimazole and for 6 months after radioiodine, and carbimazole is usually switched to propylthiouracil in pregnancy. Do not stop antithyroid tablets without speaking to your doctor: an untreated overactive thyroid is the greater risk.",
    sections: [
      {
        heading: "Planning ahead",
        paragraphs: [
          "Use contraception while taking carbimazole, and for 6 months after radioactive iodine treatment. Both treatments can harm an unborn baby.",
          "If you are planning a pregnancy, see your doctor. Have a thyroid test before pregnancy and very early in it, as your medicine may need to change.",
          "Normal fertility can return extremely quickly after treatment.",
        ],
      },
      {
        heading: "Why control matters",
        paragraphs: [
          "If the condition is not well controlled in pregnancy, it can increase the risk of pre-eclampsia, miscarriage, premature birth and a low birthweight.",
          "Do not stop antithyroid tablets before speaking to your doctor. There is greater risk to the pregnancy from an untreated overactive thyroid than from the tablets.",
        ],
      },
      {
        heading: "Medicines in pregnancy",
        paragraphs: [
          "Carbimazole is not often recommended during pregnancy. You will usually be switched to another medicine called propylthiouracil, or PTU.",
          "If you become pregnant while taking carbimazole, keep taking it and speak to your doctor as soon as possible. Regular blood tests check you are on the right dose.",
          "Radioactive iodine should never be used in pregnancy. Surgery is rarely needed, and is ideally done in the middle three months.",
        ],
      },
      {
        heading: "Antibodies and the baby",
        paragraphs: [
          "Graves' antibodies can stay in the blood even after treatment. Tell your obstetrician if you have, or have had, Graves' disease.",
          "Rarely, these antibodies cross the placenta and cause a temporary overactive thyroid in the baby, which is treatable.",
        ],
      },
      {
        heading: "After the birth",
        paragraphs: [
          "The risk of Graves' disease coming back rises after giving birth and stays high for a year. A blood test around three months after delivery is advised.",
          "Carbimazole gets into breast milk in small amounts, and if your baby is healthy it is usually fine to breastfeed.",
        ],
      },
    ],
    helps: [
      "Use reliable contraception while on carbimazole, and for 6 months after radioiodine.",
      "Tell your doctor if you are trying for a baby, pregnant or breastfeeding.",
      "Do not stop antithyroid tablets without speaking to your doctor.",
      "Tell your midwife or obstetrician about your thyroid history.",
      "Have a blood test around three months after the birth.",
    ],
    tryThisWeek: [
      "Check your contraception.",
      "Tell your doctor your plans.",
      "Tell your midwife your history.",
    ],
    ask: "Which treatment suits me best if I want a baby?",
    interactive: {
      kind: "timeline",
      title: "From planning to after the birth",
      steps: [
        { id: "plan", when: "Planning", title: "See your doctor", points: ["Have a thyroid test before you conceive.", "Use contraception on carbimazole, and for 6 months after radioiodine."] },
        { id: "early", when: "Early pregnancy", title: "A change of tablet", points: ["Carbimazole is usually switched to PTU.", "Keep taking it until you have spoken to your doctor."] },
        { id: "during", when: "Through pregnancy", title: "Regular checks", points: ["Blood tests check the dose.", "Tell your obstetrician about Graves' disease."] },
        { id: "after", when: "After the birth", title: "Watch for a relapse", points: ["The risk stays high for a year.", "A blood test about three months after delivery."] },
      ],
    },
    sources: [NHS_COMPLICATIONS, BTF_PREGNANCY, NHS_CARB_PREGNANCY, BTF_HYPER],
    quiz: {
      question: "Which is the greater risk to a pregnancy?",
      options: [{ text: "An untreated overactive thyroid", right: true }, { text: "Antithyroid tablets taken as advised" }, { text: "Neither carries any risk" }],
      why: "There is greater risk to the pregnancy from an untreated overactive thyroid than from the tablets.",
    },
  },
  {
    id: "hyper-after",
    kicker: "After treatment",
    question: "After treatment, what if the thyroid swings underactive?",
    hook: "Radioiodine and surgery often leave the thyroid making too little. A daily tablet and a yearly test usually put that right.",
    short: "Radioactive iodine often causes an underactive thyroid, and removing the thyroid means levothyroxine for life. After treatment, blood tests are frequent until levels are stable, then once a year. Watch for signs of an underactive thyroid, such as tiredness, feeling the cold and weight gain.",
    sections: [
      {
        heading: "Why it happens",
        paragraphs: [
          "Radioactive iodine treatment often causes hormone levels to become too low. This is an underactive thyroid.",
          "It is sometimes only temporary, but often it is permanent and long-term treatment with thyroid hormone medicine is needed.",
          "After surgery to remove the thyroid, you are likely to need levothyroxine for the rest of your life.",
        ],
      },
      {
        heading: "Signs to watch for",
        paragraphs: [
          "Symptoms of an underactive thyroid include weight gain, feeling the cold, dry skin and hair, pins and needles in the fingers, lack of energy and a puffy face. Constipation and depression can happen too.",
        ],
      },
      {
        heading: "Blood tests afterwards",
        paragraphs: [
          "After radioactive iodine or surgery, have frequent blood tests until you are stable, then once a year, as there is a long-term risk of an underactive thyroid.",
          "NICE suggests tests every 6 weeks for the first 6 months after radioactive iodine. Levothyroxine is offered if the thyroid becomes underactive.",
        ],
      },
      {
        heading: "After a course of tablets",
        paragraphs: [
          "After tablets for Graves' disease, the overactivity may come back. After 12 months the risk of a relapse is low, but relapses can happen many months or years later.",
          "See your GP and ask for a blood test if you notice symptoms of an overactive thyroid again.",
        ],
      },
      {
        heading: "Adjusting to normal",
        paragraphs: [
          "Once your metabolism is back to normal, you may need to eat less to avoid unwanted weight gain.",
          "After many months of an overactive thyroid, it can take a considerable time to feel normal again, even with good test results.",
        ],
      },
    ],
    helps: [
      "Have your blood tests as planned, then once a year.",
      "Tell your doctor about signs of an underactive thyroid, such as tiredness or feeling the cold.",
      "Ask for a blood test if overactive symptoms come back.",
      "Take your tablets every day, as forgetting them affects your blood tests and your health.",
      "Watch how much you eat once your metabolism settles.",
    ],
    tryThisWeek: [
      "Book your next blood test.",
      "Note any new tiredness or cold.",
      "Watch your portion sizes.",
    ],
    ask: "Is my thyroid becoming underactive, and how often should I be tested?",
    interactive: {
      kind: "signs",
      title: "Signs of a slowing thyroid",
      intro: "After treatment, tick any you notice.",
      signs: ["Weight gain", "Feeling the cold", "Dry skin and hair", "Pins and needles in the fingers", "Lack of energy", "A puffy face", "Constipation", "Low mood"],
      after: "Tell your doctor. A blood test can show whether your thyroid has become underactive, and levothyroxine can replace the hormone.",
      copyHeading: "Signs I have noticed since treatment",
    },
    sources: [NHS_COMPLICATIONS, BTF_HYPER, NICE_NG145, BTF_TFT, BTF_DRUGS],
    quiz: {
      question: "What does radioactive iodine treatment often lead to?",
      options: [{ text: "An underactive thyroid", right: true }, { text: "A more overactive thyroid" }, { text: "Nothing at all" }],
      why: "Radioactive iodine treatment often causes hormone levels to become too low. This is an underactive thyroid.",
    },
  },
];
