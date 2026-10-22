import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Thyroid nodules and goitre page's pieces (content/library-conditions/metabolism-more.ts
// `learnId`). Every sentence was written from wording checked on 21 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS and the
// British Thyroid Foundation's leaflets, with NICE's thyroid disease guideline (NG145) for when treatment and
// repeat scans are offered. General information only; it never replaces what a person's own team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const btf = (label: string, path: string): LearnSource => ({ label: `British Thyroid Foundation: ${label}`, url: `https://www.btf-thyroid.org/${path}` });

const NHS_GOITRE = nhs("Goitre", "conditions/goitre/");
const NHS_TC_SYMPTOMS = nhs("Symptoms of thyroid cancer", "conditions/thyroid-cancer/symptoms/");
const NHS_TC_TESTS = nhs("Tests and next steps for thyroid cancer", "conditions/thyroid-cancer/tests-and-next-steps/");
const NHS_IODINE = nhs("Iodine", "conditions/vitamins-and-minerals/iodine/");
const NHS_ULTRASOUND = nhs("Ultrasound scan", "tests-and-treatments/ultrasound-scan/");
const NHS_HYPER_TREATMENT = nhs("Overactive thyroid (hyperthyroidism): treatment", "conditions/overactive-thyroid-hyperthyroidism/treatment/");
const NHS_HYPER_CAUSES = nhs("Overactive thyroid (hyperthyroidism): causes", "conditions/overactive-thyroid-hyperthyroidism/causes/");
const NHS_LEVO = nhs("Levothyroxine", "medicines/levothyroxine/");
const NHS_HYPOPARA = nhs("Hypoparathyroidism", "conditions/hypoparathyroidism/");
const NHS_DYSPHAGIA = nhs("Dysphagia (swallowing problems)", "symptoms/swallowing-problems-dysphagia/");
const NHS_GAD = nhs("Generalised anxiety disorder (GAD)", "mental-health/conditions/generalised-anxiety-disorder-gad/");
const NICE_NG145: LearnSource = { label: "NICE: Thyroid disease, assessment and management (NG145), recommendations", url: "https://www.nice.org.uk/guidance/ng145/chapter/Recommendations" };

const BTF_NODULES = btf("Thyroid nodules and swellings", "thyroid-nodules-and-swellingsleaflet");
const BTF_OVERVIEW = btf("Thyroid nodules and swellings overview", "thyroid-nodules-and-swellings-overview");
const BTF_INVESTIGATING = btf("Investigating thyroid nodules", "patient-leaflet-about-investigating-thyroid-nodules");
const BTF_MONITORING = btf("Does my thyroid nodule need follow-up monitoring?", "faqs/does-my-thyroid-nodule-need-follow-up-monitoring");
const BTF_WAIT = btf("How long should I have to wait for an ultrasound scan on a thyroid nodule?", "faqs/how-long-should-i-have-to-wait-for-an-ultrasound-scan-on-a-thyroid-nodule");
const BTF_CANCER_SIGNS = btf("What are the main signs of thyroid cancer?", "faqs/what-are-the-main-signs-of-thyroid-cancer");
const BTF_WEBINAR = btf("Q&As from webinar about thyroid nodules and goitre", "qas-from-webinar-about-thyroid-nodules-and-goitre");
const BTF_LESS_INVASIVE = btf("Less invasive treatment options for benign thyroid nodules", "less-invasive-treatment-options-for-benign-thyroid-nodules");
const BTF_SURGERY = btf("Thyroid surgery", "thyroid-surgery");
const BTF_ABOUT_SURGERY = btf("About thyroid surgery", "about-thyroid-surgery");
const BTF_RAI = btf("Treatment of an overactive or enlarged thyroid gland with radioactive iodine", "treatment-of-an-over-active-or-enlarged-thyroid-gland-with-radioactive-iodine");
const BTF_IODINE_DEAL = btf("What's the deal with iodine?", "whats-the-deal-with-iodine");
const BTF_IODINE = btf("Iodine and thyroid", "iodine-and-thyroid");
const BTF_IODINE_FAQ = btf("Is iodine important for thyroid health?", "faqs/is-iodine-important-for-thyroid-health");
const BTF_DIET_FAQ = btf("Is there a diet I should follow when diagnosed with a thyroid disorder?", "faqs/is-there-a-diet-i-should-follow-when-diagnosed-with-a-thyroid-disorder");
const BTF_PSYCH = btf("Psychological symptoms and thyroid disorders", "psychological-symptoms-and-thyroid-disorders");
const BTF_WHAT = btf("Your thyroid gland", "what-is-thyroid-disorder");
const BTF_PREGNANCY = btf("Managing thyroid nodules and/or thyroid cancer in pregnancy", "managing-thyroid-nodules-andor-thyroid-cancer-in-pregnancy");

export const nodulesAnswers: LearnArticle[] = [
  {
    id: "tn-what-it-is",
    kicker: "Understanding",
    question: "What are thyroid nodules and a goitre?",
    hook: "A lump in the gland, or the whole gland growing. Most are harmless, but every one is worth having checked.",
    short: "A goitre is a lump or swelling at the front of the neck caused by a swollen thyroid. Nodules are lumps in the thyroid gland. Most are harmless, but the British Thyroid Foundation says to arrange an appointment with your doctor as soon as you find a lump or swelling.",
    sections: [
      {
        heading: "The thyroid gland",
        paragraphs: [
          "The thyroid is a small butterfly-shaped gland in the front of your neck, just below your Adam's apple. It makes hormones that all the cells in your body need to work normally.",
          "It has two lobes, each about the size of a plum cut in half, joined by a small bridge of thyroid tissue called the isthmus. The two lobes lie on either side of your windpipe.",
        ],
      },
      {
        heading: "Goitre and nodules",
        paragraphs: [
          "A goitre is a lump or swelling at the front of the neck caused by a swollen thyroid. It usually appears at the lower front of the neck, and may look and feel either smooth or lumpy.",
          "Nodules are lumps in the thyroid gland. Thyroid nodules are common, and more than 9 in 10 are found to be benign, which means not cancer.",
        ],
      },
      {
        heading: "The main types",
        paragraphs: [
          "A single nodule, also called a solitary nodule, is most commonly benign and very often can be left untreated. Several nodules make a multinodular goitre, which is common and usually does not need an operation unless it causes problems with swallowing or breathing, or you feel it is unsightly.",
          "Diffuse enlargement of the whole gland is often caused by autoimmune thyroid conditions such as Hashimoto's thyroiditis and Graves' disease. A retrosternal goitre grows down behind the breastbone, and most grow slowly over many years.",
          "A thyroid cyst is a swelling that contains fluid.",
        ],
      },
      {
        heading: "How the thyroid is working",
        paragraphs: [
          "A swollen thyroid can come with an overactive thyroid, an underactive thyroid, or harmless nodules. A nodule that produces too much thyroid hormone is called a hot nodule.",
          "Most goitres are small and do not cause any problems. They are not usually serious, but should be checked by a GP.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you have a goitre: it is not usually serious, but it is best to get it checked.",
      "Arrange an appointment with your doctor as soon as you find a lump or swelling in your neck.",
      "Thyroid problems often run in families, so encourage unwell family members to ask their own GP whether thyroid testing is warranted.",
      "Check with your doctor whether your prescription is exempt from charges.",
    ],
    tryThisWeek: [
      "Get any neck swelling checked.",
      "Tell family thyroid problems can run in families.",
      "Ask if your prescriptions are free.",
    ],
    ask: "Is my swelling a single nodule, several nodules or a goitre, and is my thyroid working normally?",
    interactive: {
      kind: "flip-cards",
      title: "Lumps and swellings, card by card",
      intro: "Turn each card to see what that kind of nodule or goitre is.",
      cards: [
        { id: "single", front: "Single nodule", when: "Also called a solitary nodule", back: "Most commonly benign, and very often can be left untreated." },
        { id: "multinodular", front: "Multinodular goitre", when: "Several nodules", back: "Common. Usually does not need an operation unless it causes problems with swallowing or breathing." },
        { id: "diffuse", front: "Diffuse goitre", when: "The whole gland enlarged", back: "Often caused by Hashimoto's thyroiditis or Graves' disease. Can come with an over or underactive thyroid." },
        { id: "retrosternal", front: "Retrosternal goitre", when: "Behind the breastbone", back: "Can squash the windpipe or gullet. Most grow slowly over many years, and surgery may be considered." },
        { id: "cyst", front: "Thyroid cyst", when: "A swelling that contains fluid", back: "Treated by removing the fluid through a needle. If this fails, surgery may be advised." },
      ],
    },
    sources: [NHS_GOITRE, BTF_NODULES, BTF_INVESTIGATING, BTF_WHAT, BTF_OVERVIEW],
    quiz: {
      question: "Are most thyroid nodules cancer?",
      options: [{ text: "No, more than 9 in 10 are benign", right: true }, { text: "Yes, most of them are" }, { text: "Only goitres are ever benign" }],
      why: "Thyroid nodules are common, and more than 9 in 10 are found to be benign, which means not cancer.",
    },
  },
  {
    id: "tn-causes",
    kicker: "Causes",
    question: "Why do nodules and goitres happen?",
    hook: "Often nobody knows. Being a woman, getting older, hormone changes and the immune system all play a part.",
    short: "The main cause of thyroid nodules is unknown, but they are more common in women and as people get older. A goitre can come from an overactive or underactive thyroid, harmless nodules, hormone changes, an inflamed thyroid or an immune system condition. Too little iodine is the most common cause worldwide, but a rare one in the UK.",
    sections: [
      {
        heading: "Often no clear cause",
        paragraphs: [
          "The main cause of thyroid nodules is unknown. They are more common in women than in men, and occur more frequently as people get older.",
          "Thyroid problems often run in families.",
        ],
      },
      {
        heading: "Why the thyroid swells",
        paragraphs: [
          "A goitre happens when your thyroid gland is swollen. Reasons include an overactive thyroid, an underactive thyroid, and harmless lumps, or nodules, on the thyroid.",
          "Hormone changes during puberty, pregnancy or the menopause can also cause it. Women often develop thyroid enlargement during pregnancy.",
        ],
      },
      {
        heading: "The immune system and inflammation",
        paragraphs: [
          "An inflamed thyroid gland, called thyroiditis, can cause a goitre. So can a condition with your immune system, like Graves' disease.",
          "Diffuse enlargement is often caused by autoimmune thyroid conditions such as Hashimoto's thyroiditis and Graves' disease. Goitre is very common in people with an underactive thyroid, and sometimes it goes away with levothyroxine treatment, but sometimes it does not.",
        ],
      },
      {
        heading: "Iodine",
        paragraphs: [
          "Iodine deficiency is the most common cause of thyroid enlargement worldwide. In the UK, not having enough iodine in your diet is a rare cause.",
          "With too little iodine, the thyroid increases in size to trap the iodine it needs to work properly. There is no evidence that iodine uptake scans or iodine used in surgery cause nodules or goitre.",
        ],
      },
      {
        heading: "Cancer is a rare cause",
        paragraphs: [
          "Thyroid cancer is a rare cause of a goitre. The British Thyroid Foundation says thyroid cancer is rare and has a high cure rate.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you have a goitre.",
      "If family members are unwell, encourage them to ask their own GP whether thyroid testing is warranted.",
      "Eat a well-balanced diet that includes good sources of iodine, such as milk, dairy products and white fish.",
      "Do not use kelp, sea moss or iodine drops to boost your thyroid.",
    ],
    tryThisWeek: [
      "Get a new swelling checked.",
      "Tell family thyroid problems can run in families.",
      "Skip kelp and sea moss supplements.",
    ],
    ask: "What do you think is causing my nodule or goitre?",
    interactive: {
      kind: "risk-check",
      title: "What is linked to nodules and goitre?",
      intro: "Tick any that apply. The main cause is often unknown, and most of these cannot be changed.",
      items: [
        { id: "woman", label: "Being a woman", note: "Thyroid nodules and enlargement are more common in women than men.", changeable: false },
        { id: "age", label: "Getting older", note: "Nodules occur more frequently as people get older.", changeable: false },
        { id: "hormones", label: "Puberty, pregnancy or the menopause", note: "Hormone changes at these times can make the thyroid swell.", changeable: false },
        { id: "autoimmune", label: "Hashimoto's or Graves' disease", note: "Autoimmune thyroid conditions often cause diffuse enlargement of the gland.", changeable: false },
        { id: "function", label: "An over or underactive thyroid", note: "Either can cause a goitre, and it can usually be treated with medicines.", changeable: true },
        { id: "family", label: "Thyroid problems in the family", note: "Thyroid problems often run in families.", changeable: false },
        { id: "iodine", label: "Very little iodine in your diet", note: "The most common cause worldwide, but rare in the UK. Milk, dairy and white fish are good sources.", changeable: true },
      ],
    },
    sources: [BTF_INVESTIGATING, NHS_GOITRE, BTF_NODULES, BTF_OVERVIEW, BTF_WEBINAR, BTF_IODINE_DEAL],
    quiz: {
      question: "What is the most common cause of thyroid enlargement worldwide?",
      options: [{ text: "Iodine deficiency", right: true }, { text: "Thyroid cancer" }, { text: "Eating too much dairy" }],
      why: "Iodine deficiency is the most common cause of thyroid enlargement worldwide.",
    },
  },
  {
    id: "tn-symptoms",
    kicker: "Symptoms",
    question: "What symptoms can a nodule or goitre cause?",
    hook: "Many cause none at all and are found by chance. A swelling, a hoarse voice or trouble swallowing are the ones to know.",
    short: "The main symptom of a goitre is a swelling at the front of the neck, which is usually painless. Some people also have a cough, a hoarse voice, a feeling that something is stuck in the throat, or find it hard to swallow or breathe. Many nodules cause no symptoms and are only picked up on scans for something else.",
    sections: [
      {
        heading: "Often no symptoms",
        paragraphs: [
          "Some thyroid nodules are noticeable and can be seen or felt in the neck, but many are only picked up during examinations or scans for other investigations.",
          "Most thyroid lumps do not cause symptoms.",
        ],
      },
      {
        heading: "The swelling",
        paragraphs: [
          "The main symptom of a goitre is a swelling at the front of the neck, which is usually painless. Goitres may look and feel either smooth or lumpy, and the swelling may sometimes just be on one side of your neck.",
        ],
      },
      {
        heading: "Other symptoms",
        paragraphs: [
          "You may also have a cough that does not go away, a hoarse voice or voice changes, or a feeling like something is stuck in your throat. Some people have a wheezing noise when they breathe, or find it hard to swallow or breathe.",
          "A goitre that grows down behind the breastbone can squash the windpipe, the large veins in the neck or the gullet, because it is in a fixed bony space.",
        ],
      },
      {
        heading: "When symptoms change",
        paragraphs: [
          "If you have a goitre, you may get symptoms like these regularly, and you might get used to them. The NHS says it is important to be checked by a GP if your symptoms change, get worse, or do not feel normal for you.",
          "Nodules can stop the thyroid gland from working properly, or simply be uncomfortable. Less commonly, nodules contain thyroid tissue that produces excess thyroid hormones, making the thyroid overactive.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you have a goitre.",
      "Call 999 or go to A&E if you are finding it hard to breathe or have a wheezing noise when you breathe.",
      "See a GP if you have a hoarse voice or difficulty swallowing that is not getting better.",
      "Get checked by a GP if your usual symptoms change, get worse or do not feel normal for you.",
    ],
    tryThisWeek: [
      "Book a GP check for a new swelling.",
      "Know that breathing trouble means 999.",
      "Report symptoms that change.",
    ],
    ask: "Could my symptoms be caused by my goitre, and what changes should I report?",
    interactive: {
      kind: "signs",
      title: "Symptoms to mention",
      intro: "Tick any you have noticed, to take to your GP.",
      signs: ["A swelling at the front of the neck", "A swelling on one side of the neck", "A cough that does not go away", "A hoarse voice or voice changes", "Something stuck in your throat", "Finding it hard to swallow", "A wheezing noise when you breathe", "Finding it hard to breathe"],
      after: "See a GP about these. Call 999 or go to A&E if you are finding it hard to breathe or have a wheezing noise when you breathe.",
      copyHeading: "Neck symptoms I have noticed",
    },
    sources: [NHS_GOITRE, BTF_INVESTIGATING, BTF_WEBINAR, BTF_NODULES, NHS_TC_SYMPTOMS, BTF_WHAT, NHS_HYPER_CAUSES],
    quiz: {
      question: "Is the swelling of a goitre usually painful?",
      options: [{ text: "No, it is usually painless", right: true }, { text: "Yes, always" }, { text: "Only at night" }],
      why: "The main symptom of a goitre is a swelling at the front of the neck, which is usually painless.",
    },
  },
  {
    id: "tn-tests",
    kicker: "Tests",
    question: "What tests will I have for a thyroid lump?",
    hook: "A blood test, a painless scan and sometimes a fine needle. Here is what each one does.",
    short: "A thyroid blood test is usually the first test, to check whether your thyroid is over or underactive. An ultrasound scan shows the number and size of nodules and how likely a nodule is to be benign. Some nodules then need a fine needle aspiration, where a few cells are taken to look at under a microscope.",
    sections: [
      {
        heading: "The blood test",
        paragraphs: [
          "You will usually need tests to find out what is causing a goitre, such as blood tests, an ultrasound scan, and a biopsy, where a small sample is taken from the thyroid using a small needle.",
          "A thyroid blood test is usually the first investigation. It measures the level of thyroid hormones in your blood, to make sure your thyroid is not over or underactive. It does not test for cancer.",
        ],
      },
      {
        heading: "The ultrasound scan",
        paragraphs: [
          "An ultrasound scan is painless. A small probe passes over your neck to examine the structure of your thyroid. It can show the number and size of nodules, and give important information on the likelihood that a nodule is benign or cancerous.",
          "Ultrasound scans do not use any radiation. A scan can take around 10 to 45 minutes, but it might take longer.",
        ],
      },
      {
        heading: "The needle test",
        paragraphs: [
          "In a fine needle aspiration, some cells are removed from a nodule using a fine needle and examined under a microscope. It is a type of biopsy. Local anaesthetic is often given, but you may still feel some discomfort or pressure on your neck.",
          "Not all nodules need one. Sometimes the result is not conclusive and the test needs repeating, or a core biopsy is used to collect a bigger sample.",
          "In pregnancy, fine needle aspiration is a safe procedure to have.",
        ],
      },
      {
        heading: "After the biopsy",
        paragraphs: [
          "Your neck may feel uncomfortable afterwards, especially when you swallow, but this will improve quickly and any symptoms should have gone after 48 hours. Simple painkillers such as paracetamol may help, and any bruising should clear within about a week.",
          "If a lump was mainly fluid and this is removed, it is not unusual for the fluid to collect again over one or more weeks. Contact your GP if it is painful and red.",
        ],
      },
      {
        heading: "Other scans, and results",
        paragraphs: [
          "A CT scan may check where a goitre behind the breastbone sits in relation to the windpipe and gullet. A nuclear medicine scan shows whether areas of the thyroid are overactive, called hot, or underactive, called cold.",
          "Reports can take up to three weeks to reach your doctor. If you have not been told after three weeks, contact the consultant's or doctor's secretary.",
        ],
      },
    ],
    helps: [
      "Ask your doctor any questions about which tests you will have, why, and when and how you will get the results.",
      "Make sure you are given contact details for your doctor's secretary.",
      "Simple painkillers such as paracetamol may help if your neck is sore after a biopsy.",
      "Contact your GP if fluid collects again and the area is painful and red.",
      "If you have not been told your results after three weeks, contact the consultant's or doctor's secretary.",
    ],
    tryThisWeek: [
      "Ask why each test is needed.",
      "Keep the secretary's contact details.",
      "Chase results after three weeks.",
    ],
    ask: "Does my nodule need a needle test, and when will I hear the results?",
    interactive: {
      kind: "flip-cards",
      title: "The tests, card by card",
      intro: "Turn each card to see what that test looks for.",
      cards: [
        { id: "blood", front: "Thyroid blood test", when: "Usually the first test", back: "Measures thyroid hormones, to check the thyroid is not over or underactive. It does not test for cancer." },
        { id: "ultrasound", front: "Ultrasound scan", when: "Painless, with no radiation", back: "Shows the number and size of nodules, and how likely a nodule is to be benign or cancerous." },
        { id: "fna", front: "Fine needle aspiration", when: "Not every nodule needs one", back: "A fine needle takes some cells to examine under a microscope. Local anaesthetic is often given." },
        { id: "core", front: "Core biopsy", when: "If the needle sample is not enough", back: "Collects a bigger sample. It is considered safe and rarely causes complications." },
        { id: "ct", front: "CT scan", when: "For a goitre behind the breastbone", back: "Checks its position in relation to the windpipe and gullet." },
        { id: "nuclear", front: "Nuclear medicine scan", when: "Sometimes", back: "Checks size, shape and position, and shows areas that are overactive (hot) or underactive (cold)." },
      ],
    },
    sources: [BTF_INVESTIGATING, BTF_NODULES, NHS_ULTRASOUND, BTF_PREGNANCY, NHS_GOITRE],
    quiz: {
      question: "What does the thyroid blood test check?",
      options: [{ text: "Whether the thyroid is over or underactive", right: true }, { text: "Whether a lump is cancer" }, { text: "How much iodine you eat" }],
      why: "It measures the level of thyroid hormones in your blood, to make sure your thyroid is not over or underactive. It does not test for cancer.",
    },
  },
  {
    id: "tn-watching",
    kicker: "Monitoring",
    question: "My nodule is benign. Will it just be watched?",
    hook: "For most benign nodules, no treatment is needed. Sometimes a follow-up scan, and a blood test every year or two.",
    short: "If tests are reassuring and the lump is not causing problems, no treatment may be needed. Sometimes the lump is monitored with follow-up scans, and your doctor may check your thyroid function every one to two years. Thyroid nodules grow very slowly, usually by millimetres over a year or two.",
    sections: [
      {
        heading: "Often no treatment",
        paragraphs: [
          "If investigations are reassuring and the thyroid swelling or lump is not causing any problems, then no treatment may be needed. Sometimes the lump may be monitored by follow-up scans.",
          "NICE says treatment should not be offered to adults with a non-cancerous enlarged thyroid, normal thyroid function and mild or no symptoms, unless they have breathing difficulty or there is clinical concern, such as marked narrowing of the airway.",
        ],
      },
      {
        heading: "After a benign result",
        paragraphs: [
          "If the results confirm your nodule is benign, your doctor will usually discharge you from the thyroid clinic.",
          "Where surgery is not needed, your doctor may decide to monitor the nodule to get further reassurance that it is benign. Typically this is a follow-up ultrasound scan, and your doctor will discuss the reasons, and how and when it will be done.",
          "A benign nodule with normal thyroid function that is not causing compression or breathing difficulty does not usually need further ultrasound monitoring.",
        ],
      },
      {
        heading: "Blood tests",
        paragraphs: [
          "Your doctor may wish to check your thyroid function every one to two years, to make sure your thyroid hormone levels are not changing.",
        ],
      },
      {
        heading: "How nodules change",
        paragraphs: [
          "Thyroid nodules grow very slowly, usually by millimetres over a year or two. Lumps in the thyroid rarely go away by themselves, although a cyst can sometimes burst and shrink down.",
          "Sometimes people feel their nodule has got a bit bigger, but a scan shows no change. If you are in any doubt, speak to your GP.",
        ],
      },
      {
        heading: "When a scan is repeated",
        paragraphs: [
          "A thyroid ultrasound and blood test will usually be repeated if the nodule is getting bigger or feels harder, a new lump appears, you develop difficulty swallowing or breathing, or your voice becomes hoarse.",
        ],
      },
    ],
    helps: [
      "Ask your doctor why your nodule is being monitored, and how and when.",
      "Keep up thyroid blood tests every one to two years if your doctor advises them.",
      "If you notice any change in the feel or look of your goitre, discuss it with your GP.",
      "Make an appointment with your GP if the nodule gets bigger or harder, a new lump appears, or your voice becomes hoarse.",
      "If you are waiting for a follow-up appointment, contact the hospital department to let them know you are still waiting.",
    ],
    tryThisWeek: [
      "Ask why and how it is watched.",
      "Keep up your blood tests.",
      "Report any change to your GP.",
    ],
    ask: "Does my nodule need a follow-up scan, and when is my next thyroid blood test?",
    interactive: {
      kind: "scenarios",
      title: "Living with a watched nodule",
      scenarios: [
        {
          id: "benign",
          situation: "Your biopsy confirms the nodule is benign.",
          options: [{ text: "Expect to be discharged from the clinic", best: true }, { text: "Expect a biopsy every year" }],
          why: "If the results confirm your nodule is benign, your doctor will usually discharge you from the thyroid clinic.",
        },
        {
          id: "bigger",
          situation: "Your nodule feels a little bigger, but nothing else has changed.",
          options: [{ text: "Speak to your GP if you are in doubt", best: true }, { text: "Ignore it for a year" }],
          why: "Sometimes people feel their nodule has got a bit bigger, but a scan shows no change. If you are in any doubt, speak to your GP.",
        },
        {
          id: "hoarse",
          situation: "Your voice has become hoarse.",
          options: [{ text: "Make an appointment with your GP", best: true }, { text: "Wait for your next blood test" }],
          why: "A scan and blood test will usually be repeated if your voice becomes hoarse.",
        },
        {
          id: "waiting",
          situation: "Your follow-up appointment has not come through.",
          options: [{ text: "Contact the hospital department", best: true }, { text: "Assume you are not needed" }],
          why: "If you are waiting for a follow-up appointment, contact the hospital department to let them know you are still waiting.",
        },
      ],
    },
    sources: [BTF_OVERVIEW, NICE_NG145, BTF_INVESTIGATING, BTF_MONITORING, BTF_WEBINAR],
    quiz: {
      question: "How fast do thyroid nodules usually grow?",
      options: [{ text: "Very slowly, by millimetres over a year or two", right: true }, { text: "Several centimetres a month" }, { text: "They never change at all" }],
      why: "Thyroid nodules grow very slowly, usually by millimetres over a year or two.",
    },
  },
  {
    id: "tn-treatments",
    kicker: "Treatment",
    question: "What treatments are there for nodules and goitre?",
    hook: "Medicines, radioactive iodine, draining a cyst, newer ablation treatments, or surgery. Which one depends on the lump.",
    short: "Benign nodules usually do not need treatment. A goitre caused by an underactive or overactive thyroid can usually be treated with medicines. Other options include radioactive iodine, draining a cyst with a needle, newer ablation treatments in some centres, and surgery.",
    sections: [
      {
        heading: "When treatment is needed",
        paragraphs: [
          "Benign thyroid nodules are common and usually do not need treatment. Treatment may be considered if they cause symptoms, such as pain or pressure, or cosmetic issues.",
          "If a goitre is caused by a condition like an underactive or overactive thyroid, it can usually be treated with medicines. If it makes breathing and swallowing difficult, you may have surgery to remove some or all of your thyroid.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "Antithyroid medicines stop an overactive thyroid producing excess hormones, and levothyroxine tablets treat an underactive thyroid. A goitre sometimes goes away with levothyroxine treatment, but sometimes it does not.",
          "A hot nodule, one that produces too much thyroid hormone, can be treated with drug therapy, radioactive iodine or sometimes surgery.",
        ],
      },
      {
        heading: "Radioactive iodine",
        paragraphs: [
          "Radioactive iodine is taken up by the thyroid and destroys the cells in the gland. This reduces the amount of thyroxine made, and may also reduce the size of the gland. It is taken as a capsule swallowed with water, or as a drink.",
          "It is not very good at shrinking a multinodular goitre when thyroid hormone levels are normal, but it is pretty good at shrinking a goitre in Graves' disease. Afterwards, keep babies, children under five and pregnant women at arm's length for two to three weeks, or longer if advised.",
          "It is not given in pregnancy or while breastfeeding. Over two-thirds of people who have it develop an underactive thyroid, so regular blood tests follow.",
        ],
      },
      {
        heading: "Draining a cyst, and ablation",
        paragraphs: [
          "A thyroid cyst is treated by removing the fluid through a needle. If the cyst fills again, ethanol ablation can be considered: the cyst is drained, then ethanol is injected back into it, which stops it recurring.",
          "Radiofrequency and microwave ablation use heat from a thin needle or wire, guided by ultrasound, to shrink a benign nodule. Not all nodules are suitable, there is a very small risk of stroke or damage to the voice box, and they are offered in a limited number of NHS hospitals.",
        ],
      },
      {
        heading: "Choosing together",
        paragraphs: [
          "Choosing between radioactive iodine and surgery is a very personal decision. You should never feel forced to have a treatment you do not want, and it is worth discussing whether another option is available with your healthcare professionals.",
        ],
      },
    ],
    helps: [
      "Ask your surgeon or doctor whether any less invasive options might be suitable for you.",
      "If you feel pushed towards one option, discuss with your healthcare professionals whether another is available.",
      "Make your doctor aware of any eye symptoms before radioactive iodine.",
      "Have a blood test four to six weeks after radioactive iodine, and do not miss later checks even if you feel well.",
      "If you travel within four months of radioactive iodine, carry a letter from your hospital explaining the treatment.",
    ],
    tryThisWeek: [
      "Ask about less invasive options.",
      "Talk through every option offered.",
      "Book blood tests after radioiodine.",
    ],
    ask: "Does my nodule or goitre need treatment, and which options would suit me?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments, card by card",
      intro: "Turn each card to see what that treatment does and when it is used.",
      cards: [
        { id: "none", front: "No treatment", when: "Reassuring tests, no problems", back: "If the lump is not causing problems, no treatment may be needed. Sometimes it is monitored by scans." },
        { id: "medicines", front: "Medicines", when: "An over or underactive thyroid", back: "A goitre caused by an over or underactive thyroid can usually be treated with medicines." },
        { id: "rai", front: "Radioactive iodine", when: "A capsule or a drink", back: "Destroys thyroid cells, reducing the thyroxine made, and may reduce the size of the gland." },
        { id: "aspiration", front: "Draining a cyst", when: "Lumps that contain fluid", back: "Fluid is removed through a needle. If it refills, ethanol ablation can be considered." },
        { id: "ablation", front: "Radiofrequency or microwave ablation", when: "Some NHS centres", back: "Heat from a thin needle or wire, guided by ultrasound, shrinks a benign nodule." },
        { id: "surgery", front: "Surgery", when: "Breathing or swallowing problems", back: "Removes some or all of the thyroid." },
      ],
    },
    sources: [BTF_LESS_INVASIVE, NHS_GOITRE, BTF_NODULES, BTF_WEBINAR, NHS_HYPER_TREATMENT, BTF_RAI, NICE_NG145, BTF_ABOUT_SURGERY, BTF_OVERVIEW],
    quiz: {
      question: "Do most benign thyroid nodules need treatment?",
      options: [{ text: "No, usually not", right: true }, { text: "Yes, always surgery" }, { text: "Yes, always radioactive iodine" }],
      why: "Benign thyroid nodules are common and usually do not need treatment.",
    },
  },
  {
    id: "tn-surgery",
    kicker: "Surgery",
    question: "What happens in thyroid surgery?",
    hook: "Half the gland or all of it, through a crease in the neck. Most people are in hospital for a day or two.",
    short: "Thyroid surgery removes half of the thyroid (a lobectomy or hemithyroidectomy), most of it, or all of it (a total thyroidectomy). It is done under a general anaesthetic, usually through a lower crease in the neck. Most people stay in hospital for one to two days, and it may take up to a month to get your energy back.",
    sections: [
      {
        heading: "Why surgery",
        paragraphs: [
          "Surgery may be considered for a large goitre or nodule that is causing breathing or swallowing difficulties, a nodule whose cells are classed as indeterminate, thyroid cancer, Graves' disease that keeps coming back or is not controlled, or a thyroid cyst that keeps returning.",
          "A multinodular goitre usually does not need an operation unless you have problems with swallowing or breathing, or you feel the goitre is unsightly.",
        ],
      },
      {
        heading: "Before the operation",
        paragraphs: [
          "At a pre-operative assessment you will have blood tests, including your thyroid function and calcium levels. Your vocal cords are likely to be checked before surgery.",
          "Do not hesitate to ask your surgeon how many thyroid operations they do each year, about possible complications, including their own complication rates, and about any alternatives. It is very important that you are involved in the decisions about your treatment.",
        ],
      },
      {
        heading: "The operation",
        paragraphs: [
          "It is done under a general anaesthetic. The main types are a total thyroidectomy, removing all of the gland, a lobectomy or hemithyroidectomy, removing half of it, and a near-total thyroidectomy, which leaves a little tissue on one side.",
          "The cut is usually made through a lower crease in your neck. The surgeon pays special attention to the nerves that supply your voice box, and to the blood supply to the parathyroid glands, which control calcium.",
        ],
      },
      {
        heading: "Going home and recovery",
        paragraphs: [
          "Most people stay in hospital for one to two days. After a hemithyroidectomy you may be ready to go home on the day of surgery, while after a total thyroidectomy you will almost always stay at least one night.",
          "Your neck can be quite sore, but this should not last for long. It is normal to feel tired, and it may take up to a month before you feel you have your energy levels back. For someone fit and well, a British Thyroid Foundation expert puts recovery at around two weeks.",
        ],
      },
      {
        heading: "The scar",
        paragraphs: [
          "Once it heals, the scar is usually hardly visible. It is often at its most noticeable at six to eight weeks, and usually settles to a white line after about six months to a year.",
          "In some people it becomes tender, red and thickened, which silicone tape, steroid tape and injections can help. If you have had problems with previous scars, discuss this with your surgeon.",
        ],
      },
    ],
    helps: [
      "Ask your surgeon how many thyroid operations they do, about their complication rates, and about any alternatives.",
      "Ask any questions you have, and feel they have been answered in a way you understand, before you give your consent.",
      "If you use your voice professionally, discuss this fully with your surgeon before the surgery.",
      "Ask your surgeon or doctor whether any less invasive options might be suitable for you.",
      "If you have had problems with previous scars, discuss this with your surgeon.",
    ],
    tryThisWeek: [
      "Ask your surgeon about their experience.",
      "Mention if you use your voice for work.",
      "Ask about less invasive options.",
    ],
    ask: "Which operation would I have, and how long will I be in hospital?",
    interactive: {
      kind: "timeline",
      title: "Thyroid surgery, step by step",
      steps: [
        { id: "before", when: "Before", title: "Pre-operative assessment", points: ["Blood tests, including thyroid function and calcium.", "Your vocal cords are likely to be checked."] },
        { id: "day", when: "The day", title: "The operation", points: ["Done under a general anaesthetic.", "The cut is usually in a lower crease of the neck."] },
        { id: "stay", when: "1 to 2 days", title: "In hospital", points: ["Some people go home on the day of surgery.", "After a total thyroidectomy, at least one night."] },
        { id: "month", when: "Up to a month", title: "Energy comes back", points: ["Feeling tired is normal.", "Recovery varies between people."] },
        { id: "checks", when: "6 to 8 weeks", title: "Follow-up", points: ["A blood test checks your thyroid function.", "The scar is often at its most noticeable."] },
        { id: "scar", when: "6 months to a year", title: "The scar settles", points: ["It usually becomes a white line that is hardly visible."] },
      ],
    },
    sources: [BTF_SURGERY, BTF_NODULES, BTF_WEBINAR, BTF_ABOUT_SURGERY],
    quiz: {
      question: "How long do most people stay in hospital after thyroid surgery?",
      options: [{ text: "One to two days", right: true }, { text: "Two weeks" }, { text: "A month" }],
      why: "Most people stay in hospital for one to two days.",
    },
  },
  {
    id: "tn-after-surgery",
    kicker: "After surgery",
    question: "After thyroid surgery, what about my voice, calcium and tablets?",
    hook: "A husky voice and low calcium are the two main things to watch, and they usually settle. Tablets depend on how much thyroid is left.",
    short: "The main complications of thyroid surgery are voice problems and low calcium, and these are usually temporary. Tingling in your hands, fingers or face after surgery needs telling to the medical staff straight away. After a total thyroidectomy you will need levothyroxine for life; after half the gland is removed, some people need a small top-up dose.",
    sections: [
      {
        heading: "Your voice",
        paragraphs: [
          "Your voice may sound a little hoarse after surgery, but this is usually temporary. If the main nerve to the voice box is damaged, your voice may sound husky or breathy, and usually this recovers within six months.",
          "Permanent problems happen in about one to two in every 100 cases. If you have voice problems after the operation, you should be offered a vocal cord assessment, and you can ask to be referred to a speech therapy unit.",
        ],
      },
      {
        heading: "Calcium",
        paragraphs: [
          "The parathyroids are four small glands, each the size of a small pea, next to the thyroid. They control the balance of calcium in your body, and surgery can affect them, causing low blood calcium that may be temporary or permanent.",
          "Tingling in your hands, fingers or around your mouth after surgery may be a sign that your calcium has dropped, so alert the medical staff straight away. Over 40 in every 100 people go home with calcium or vitamin D tablets, and most do not need to keep taking them once their levels return to normal.",
          "The parathyroid glands often recover within six to eight weeks. After a total thyroidectomy, up to about 10 in every 100 people have permanently low calcium and need calcium or vitamin D for life.",
        ],
      },
      {
        heading: "Thyroid tablets",
        paragraphs: [
          "After a total thyroidectomy, your body can no longer make thyroid hormones, so you will need levothyroxine tablets for the rest of your life. You usually start them immediately or very soon after surgery, and the dose may need adjusting over the following months.",
          "After a lobectomy or hemithyroidectomy, about 10 to 15 in every 100 people develop an underactive thyroid. If the remaining gland cannot keep up, a small amount of levothyroxine tops it up.",
          "Levothyroxine is taken on an empty stomach, 30 to 60 minutes before your first meal of the day, any drink with caffeine or any other medicine. Try to take it at the same time each day.",
        ],
      },
      {
        heading: "Follow-up",
        paragraphs: [
          "A blood test checks your thyroid function about six to eight weeks after surgery. If you notice symptoms of an underactive thyroid, such as lethargy, weight gain or mood changes, see your doctor and ask for a thyroid function test.",
          "If you recently had neck surgery, you should have been given details of who to contact in case of complications. The NHS says to try them first before talking to a GP.",
        ],
      },
    ],
    helps: [
      "Alert medical staff immediately if you have any tingling in your hands, fingers or face after surgery.",
      "If you have ongoing problems with your voice, ask to be referred to a speech therapy unit.",
      "Take levothyroxine on an empty stomach, 30 to 60 minutes before breakfast or any drink with caffeine.",
      "If you notice lethargy, weight gain or mood changes, see your doctor and ask for a thyroid function blood test.",
      "If you think you have a complication after neck surgery, try the contact you were given first.",
    ],
    tryThisWeek: [
      "Report any tingling straight away.",
      "Take levothyroxine before breakfast.",
      "Ask for a blood test if you feel sluggish.",
    ],
    ask: "Will I need levothyroxine or calcium tablets, and who do I call if something feels wrong?",
    interactive: {
      kind: "scenarios",
      title: "After the operation",
      scenarios: [
        {
          id: "tingle",
          situation: "Your fingers tingle the evening after surgery.",
          options: [{ text: "Tell the medical staff straight away", best: true }, { text: "Sleep it off and see" }],
          why: "Tingling in your hands, fingers or around your mouth after surgery may be a sign that your calcium has dropped.",
        },
        {
          id: "husky",
          situation: "Your voice still sounds husky a few weeks later.",
          options: [{ text: "Mention it: it usually recovers within six months", best: true }, { text: "Assume it is permanent" }],
          why: "If the main nerve to the voice box is damaged, your voice may sound husky or breathy, and usually this recovers within six months.",
        },
        {
          id: "sluggish",
          situation: "Months after a hemithyroidectomy, you feel lethargic and are gaining weight.",
          options: [{ text: "Ask your doctor for a thyroid blood test", best: true }, { text: "Put it down to getting older" }],
          why: "If you notice symptoms of an underactive thyroid, such as lethargy, weight gain or mood changes, see your doctor and ask for a thyroid function test.",
        },
        {
          id: "home",
          situation: "You think you have a complication after going home.",
          options: [{ text: "Try the contact your surgical team gave you", best: true }, { text: "Wait for your follow-up appointment" }],
          why: "If you recently had neck surgery, you should have been given details of who to contact in case of complications.",
        },
      ],
    },
    sources: [BTF_SURGERY, NHS_HYPOPARA, NHS_LEVO, BTF_ABOUT_SURGERY],
    quiz: {
      question: "What can tingling in the fingers after thyroid surgery be a sign of?",
      options: [{ text: "Low calcium", right: true }, { text: "A good recovery" }, { text: "Too much iodine" }],
      why: "Tingling in your hands, fingers or around your mouth after surgery may be a sign that your calcium has dropped.",
    },
  },
  {
    id: "tn-worry",
    kicker: "Feelings",
    question: "I am worried my lump is cancer. What helps?",
    hook: "Most thyroid lumps are not cancer. Knowing what happens next, and who to talk to, can make the waiting easier.",
    short: "Thyroid nodules and swellings are extremely common, and the British Thyroid Foundation says 95% are benign. Results can take a while, but a delay does not definitely mean anything is wrong. Bringing someone to appointments, asking your team questions and talking to people you trust can all help.",
    sections: [
      {
        heading: "Most lumps are not cancer",
        paragraphs: [
          "Thyroid nodules and swellings are extremely common, and 95% are benign, which means not cancer. Thyroid cancer is rare and has a high cure rate.",
          "Even so, it is important that all nodules on your thyroid are investigated by a specialist doctor without delay.",
        ],
      },
      {
        heading: "Waiting for results",
        paragraphs: [
          "Test results for thyroid cancer should take about two weeks, but sometimes longer. The NHS says to try not to worry if your results are taking a long time, as it does not definitely mean anything is wrong.",
          "You can call the hospital or GP if you are worried, and they should be able to update you. Reports on nodule tests can take up to three weeks, so if you have not heard after three weeks, contact the consultant's or doctor's secretary.",
        ],
      },
      {
        heading: "A benign result",
        paragraphs: [
          "If your nodule is confirmed as benign, you should be very reassured, as it means there is no evidence of thyroid cancer. Your risk of developing thyroid cancer in the future is very small and no different from anybody else's.",
        ],
      },
      {
        heading: "If the news is cancer",
        paragraphs: [
          "Being told you have thyroid cancer can feel overwhelming, and it is understandable to have an emotional reaction. A group of specialists will look after you, including a clinical nurse specialist who will be your main point of contact.",
          "Macmillan Cancer Support has a free helpline open every day from 8am to 8pm, on 0808 808 00 00.",
        ],
      },
      {
        heading: "Looking after your feelings",
        paragraphs: [
          "Confiding in a family member or close friend, or talking to someone who has been through a similar experience, can help. The British Thyroid Foundation has volunteer telephone contacts and online support groups.",
          "If you feel anxious most of the time and it affects your everyday life, see a GP. Adults can also refer themselves to NHS talking therapies, and you can call Samaritans on 116 123 if you need someone to talk to.",
        ],
      },
    ],
    helps: [
      "Bring someone with you to appointments for support.",
      "Call the hospital or GP if you are worried about your results; they should be able to update you.",
      "Ask as many questions as you need to understand what is happening to you.",
      "Confide in a family member or close friend, or talk to someone who has been through a similar experience.",
      "Call Samaritans on 116 123 if you need someone to talk to.",
      "Try calming breathing exercises, regular exercise and enough sleep.",
    ],
    tryThisWeek: [
      "Ask someone to come with you.",
      "Ask all the questions you need to.",
      "Talk to someone you trust.",
    ],
    ask: "When will I get my results, and who can I call while I wait?",
    interactive: {
      kind: "scenarios",
      title: "While you wait",
      scenarios: [
        {
          id: "silence",
          situation: "Three weeks have passed and you have heard nothing.",
          options: [{ text: "Contact the consultant's or doctor's secretary", best: true }, { text: "Assume the worst" }],
          why: "If you have not heard after three weeks, contact the consultant's or doctor's secretary.",
        },
        {
          id: "appointment",
          situation: "Your results appointment is next week.",
          options: [{ text: "Bring someone with you for support", best: true }, { text: "Go alone so no one worries" }],
          why: "A specialist will explain what the results mean. You may want to bring someone with you for support.",
        },
        {
          id: "benign",
          situation: "Your nodule is confirmed as benign.",
          options: [{ text: "Be reassured: your risk is like anyone else's", best: true }, { text: "Keep expecting the worst" }],
          why: "Your risk of developing thyroid cancer in the future is very small and no different from anybody else's.",
        },
        {
          id: "anxious",
          situation: "Worry is affecting your sleep and everyday life.",
          options: [{ text: "See a GP, or refer yourself to talking therapies", best: true }, { text: "Keep it to yourself" }],
          why: "If you feel anxious most of the time and it affects your everyday life, see a GP. Adults can also refer themselves to NHS talking therapies.",
        },
      ],
    },
    sources: [BTF_CANCER_SIGNS, BTF_NODULES, BTF_INVESTIGATING, NHS_TC_TESTS, BTF_PSYCH, NHS_GAD],
    quiz: {
      question: "How many thyroid nodules and swellings are benign?",
      options: [{ text: "95%", right: true }, { text: "50%" }, { text: "10%" }],
      why: "Thyroid nodules and swellings are extremely common, and 95% are benign, which means not cancer.",
    },
  },
  {
    id: "tn-urgent",
    kicker: "Getting help",
    question: "Which neck symptoms need checking quickly?",
    hook: "Breathing trouble with a goitre is an emergency. A changing lump, a hoarse voice or trouble swallowing need checking soon.",
    short: "Call 999 or go to A&E if you are finding it hard to breathe or have a wheezing noise when you breathe. Ask for an urgent GP appointment or get help from NHS 111 if you have difficulty swallowing. See a GP about a lump in your neck, or a hoarse voice that is not getting better.",
    sections: [
      {
        heading: "An emergency",
        paragraphs: [
          "Call 999 or go to A&E if you are finding it hard to breathe or have a wheezing noise when you breathe. Do not drive to A&E: ask someone to drive you, or call 999 and ask for an ambulance. Bring any medicines you take with you.",
        ],
      },
      {
        heading: "Urgent",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have difficulty swallowing, cough or choke while eating or drinking, or feel like something is stuck in your throat after eating.",
          "A high-pitched sound when breathing, called stridor, is a reason for a same-day referral. Urgent referrals include unexplained hoarseness or voice changes with a goitre, enlarged lymph glands in the neck with a thyroid lump, and a painless thyroid lump that grows quickly over weeks.",
          "NICE lists red flag symptoms to look out for, such as shortness of breath, rapid growth of nodules, a hoarse voice and swallowing difficulties.",
        ],
      },
      {
        heading: "See a GP",
        paragraphs: [
          "See a GP if you have a lump in your neck, a hoarse voice that is not getting better, difficulty swallowing that is not getting better, or pain or a feeling of pressure in the front of your neck.",
          "If you already have a nodule, do not ignore changes to your neck. See your GP if it gets bigger or feels harder, a new lump appears, or your voice becomes hoarse.",
          "These symptoms are very common and can be caused by many different conditions. Having them does not definitely mean cancer, but if they are caused by cancer, finding it early may mean it is easier to treat.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E if you are finding it hard to breathe or have a wheezing noise when you breathe.",
      "Do not drive yourself to A&E: ask someone to drive you, or call 999 and ask for an ambulance.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you have difficulty swallowing.",
      "See a GP if you have a lump in your neck, or a hoarse voice that is not getting better.",
      "Do not ignore changes to your neck after a nodule has been checked.",
    ],
    tryThisWeek: [
      "Know that breathing trouble means 999.",
      "Use 111 for swallowing trouble.",
      "Do not ignore neck changes.",
    ],
    ask: "Which signs should make me come back sooner?",
    interactive: {
      kind: "scenarios",
      title: "Which help, and when?",
      scenarios: [
        {
          id: "wheeze",
          situation: "You have a goitre and are now wheezing and finding it hard to breathe.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Book a routine GP appointment" }, { text: "Wait to see if it settles" }],
          why: "Call 999 or go to A&E if you are finding it hard to breathe or have a wheezing noise when you breathe.",
        },
        {
          id: "drive",
          situation: "You need A&E for breathing trouble and have a car outside.",
          options: [{ text: "Ask someone to drive you, or call 999", best: true }, { text: "Drive yourself" }],
          why: "Do not drive to A&E: ask someone to drive you, or call 999 and ask for an ambulance.",
        },
        {
          id: "swallow",
          situation: "Food keeps feeling stuck in your throat after eating.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Wait for your next check-up" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if you feel like something is stuck in your throat after eating.",
        },
        {
          id: "hoarse",
          situation: "Your voice has been hoarse for weeks and is not getting better.",
          options: [{ text: "See a GP", best: true }, { text: "Ignore it" }],
          why: "See a GP if you have a hoarse voice that is not getting better.",
        },
      ],
    },
    sources: [NHS_GOITRE, NHS_DYSPHAGIA, BTF_WAIT, NHS_TC_SYMPTOMS, BTF_INVESTIGATING, NICE_NG145],
    quiz: {
      question: "You have a goitre and find it hard to breathe. What should you do?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "See a GP next week" }, { text: "Drive yourself to A&E" }],
      why: "Call 999 or go to A&E if you are finding it hard to breathe or have a wheezing noise when you breathe. Do not drive to A&E.",
    },
  },
  {
    id: "tn-iodine",
    kicker: "Food",
    question: "Does iodine in food matter for my thyroid?",
    hook: "Too little and too much can both cause problems. A balanced diet is usually enough, and kelp is not the answer.",
    short: "The thyroid uses iodine to make its hormones. Milk, dairy products and fish are good sources, and most people can get all the iodine they need from a varied, balanced diet. Kelp, sea moss and iodine drops can contain far too much and are best avoided, and you only need a low-iodine diet if your doctor asks.",
    sections: [
      {
        heading: "Why iodine matters",
        paragraphs: [
          "The thyroid uses iodine to make hormones that help regulate heart rate, body temperature, metabolism, growth, bone health and brain development. With too little iodine, the thyroid can swell to trap the iodine it needs, although this is rare in the UK.",
          "Iodine works on the Goldilocks principle: both too little and too much can be harmful.",
        ],
      },
      {
        heading: "How much, and where from",
        paragraphs: [
          "The NHS says adults need 140 micrograms of iodine a day, and the British Thyroid Foundation gives 150 micrograms. This rises to 200 micrograms a day when trying to conceive, during pregnancy and while breastfeeding.",
          "Good sources include cows' milk and dairy products, eggs, sea fish and shellfish. Most people should be able to get all the iodine they need by eating a varied and balanced diet.",
          "If you follow a strict vegan diet, you may want to consider foods fortified with iodine or an iodine supplement. Some plant-based drinks are fortified, so check the label, and seek advice from a healthcare professional before taking a supplement.",
        ],
      },
      {
        heading: "Too much iodine",
        paragraphs: [
          "Kelp, sea moss and Lugol's iodine drops can contain very large amounts of iodine, and doctors strongly advise against using them to boost your thyroid. For people with a thyroid condition, iodine supplements or kelp should be avoided, because they can make it worse.",
          "Sea, rock and Himalayan salts are not a source of iodine, and salt in the UK is not iodised.",
        ],
      },
      {
        heading: "With a thyroid condition",
        paragraphs: [
          "There is no specific thyroid diet. Unless your doctor asks you to follow a low-iodine diet, you can have iodine-containing foods, such as milk, eggs, cheese and fish, within the recommended amount as part of a balanced diet.",
          "A low-iodine diet is normally only asked for just before radioactive iodine treatment for thyroid cancer. Multivitamins containing iodine are safe to take, as most contain 150 micrograms or less.",
        ],
      },
    ],
    helps: [
      "Eat a well-balanced diet with good sources of iodine, such as dairy foods and fish.",
      "If you do not eat dairy or fish, look for plant-based drinks that are fortified with iodine.",
      "Seek advice from a healthcare professional before taking an iodine supplement.",
      "Avoid kelp, sea moss and Lugol's iodine drops, whether you have a thyroid condition or not.",
      "Only follow a low-iodine diet if your doctor asks you to.",
    ],
    tryThisWeek: [
      "Include dairy foods or fish.",
      "Check plant drinks for added iodine.",
      "Skip kelp and sea moss.",
    ],
    ask: "Do I need to change anything about iodine in my diet?",
    interactive: {
      kind: "scenarios",
      title: "Iodine choices",
      scenarios: [
        {
          id: "kelp",
          situation: "A shop sells kelp tablets as a thyroid booster.",
          options: [{ text: "Avoid them", best: true }, { text: "Take one every day" }],
          why: "Doctors strongly advise against using kelp, sea moss or Lugol's iodine drops to boost your thyroid.",
        },
        {
          id: "vegan",
          situation: "You are vegan and drink oat milk.",
          options: [{ text: "Look for one fortified with iodine", best: true }, { text: "Nothing to think about" }],
          why: "Some plant-based drinks are fortified with iodine, so check the label.",
        },
        {
          id: "pregnancy",
          situation: "You are trying to conceive.",
          options: [{ text: "Your iodine need rises to 200 micrograms a day", best: true }, { text: "Cut iodine out completely" }],
          why: "The recommended intake rises to 200 micrograms a day when trying to conceive, during pregnancy and while breastfeeding.",
        },
        {
          id: "salt",
          situation: "You switch to Himalayan salt to get more iodine.",
          options: [{ text: "It is not a source of iodine", best: true }, { text: "It is a rich source" }],
          why: "Sea, rock and Himalayan salts are not a source of iodine, and salt in the UK is not iodised.",
        },
      ],
    },
    sources: [BTF_IODINE_DEAL, NHS_IODINE, BTF_IODINE_FAQ, BTF_IODINE, BTF_DIET_FAQ],
    quiz: {
      question: "Which of these is a good source of iodine?",
      options: [{ text: "Milk and dairy products", right: true }, { text: "Himalayan salt" }, { text: "Sea salt" }],
      why: "Good sources include cows' milk and dairy products, eggs, sea fish and shellfish.",
    },
  },
  {
    id: "tn-follow-up",
    kicker: "Check-ups",
    question: "What follow-up will I have, and for how long?",
    hook: "It depends on the lump and the treatment. Many benign nodules are discharged; after treatment, blood tests carry on.",
    short: "If your nodule is benign, you will usually be discharged from the thyroid clinic, though your doctor may check your thyroid function every one to two years. After surgery, a blood test follows about six to eight weeks later. After radioactive iodine, blood tests start four to six weeks later and carry on, then once a year.",
    sections: [
      {
        heading: "After a benign result",
        paragraphs: [
          "If the results confirm your nodule is benign, your doctor will usually discharge you from the thyroid clinic. A benign nodule with normal thyroid function that is not causing compression or breathing difficulty does not usually need more ultrasound scans.",
          "Your doctor may still wish to check your thyroid function every one to two years, to make sure your thyroid hormone levels are not changing.",
        ],
      },
      {
        heading: "After surgery",
        paragraphs: [
          "You will be given a follow-up appointment, and a blood test to check your thyroid function about six to eight weeks after surgery. If you need to start levothyroxine, it can take several months to find the right dose.",
          "While the dose is being found, you will have regular thyroid function tests, usually every three months.",
        ],
      },
      {
        heading: "After radioactive iodine",
        paragraphs: [
          "Follow-up after radioactive iodine is essential. You should have a blood test about four to six weeks after treatment, then every one to three months in the first year, usually at your hospital clinic.",
          "After that, see your GP for a yearly blood test, or sooner if symptoms of an underactive thyroid develop. It is very important not to miss these checks even if you feel well, as they can pick up an underactive thyroid before you have symptoms.",
        ],
      },
      {
        heading: "Changes to report",
        paragraphs: [
          "Sometimes thyroid nodules return, so do not ignore changes to your neck. See your GP if a nodule gets bigger or feels harder, a new lump appears, or your voice becomes hoarse.",
          "Call 999 or go to A&E if you are finding it hard to breathe or have a wheezing noise when you breathe.",
          "If you are waiting for a follow-up appointment, contact the hospital department to let them know you are still waiting.",
        ],
      },
    ],
    helps: [
      "Ask your doctor the reasons for any monitoring, and how and when it will be done.",
      "Do not miss thyroid blood tests after radioactive iodine, even if you feel well.",
      "If you notice lethargy, weight gain or mood changes, see your doctor and ask for a thyroid function blood test.",
      "See your GP if a nodule gets bigger or feels harder, a new lump appears, or your voice becomes hoarse.",
      "If you are still waiting for a follow-up appointment, contact the hospital department.",
    ],
    tryThisWeek: [
      "Ask how and when you will be checked.",
      "Keep every blood test, even if well.",
      "Chase a late follow-up appointment.",
    ],
    ask: "How often will I be checked, and who arranges it?",
    interactive: {
      kind: "flip-cards",
      title: "Your follow-up, by situation",
      intro: "Turn each card to see the usual checks after that result or treatment.",
      cards: [
        { id: "benign", front: "A benign nodule", when: "Usually discharged from clinic", back: "Your doctor may check your thyroid function every one to two years." },
        { id: "surgery", front: "After surgery", when: "About 6 to 8 weeks", back: "A follow-up appointment, and a blood test to check your thyroid function." },
        { id: "levothyroxine", front: "Starting levothyroxine", when: "Usually every 3 months", back: "Thyroid function tests while the dose is adjusted, which can take several months." },
        { id: "rai", front: "After radioactive iodine", when: "From 4 to 6 weeks", back: "Then every one to three months in the first year, then a yearly blood test with your GP." },
      ],
    },
    sources: [BTF_INVESTIGATING, BTF_MONITORING, BTF_SURGERY, BTF_ABOUT_SURGERY, BTF_RAI, BTF_WEBINAR, NHS_GOITRE],
    quiz: {
      question: "After radioactive iodine, can you skip blood tests if you feel well?",
      options: [{ text: "No, they can find an underactive thyroid before symptoms", right: true }, { text: "Yes, if you feel well" }, { text: "Only if your neck swells" }],
      why: "It is very important not to miss these checks even if you feel well, as they can pick up an underactive thyroid before you have symptoms.",
    },
  },
];
