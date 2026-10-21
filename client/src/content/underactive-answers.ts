import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Underactive thyroid page's pieces (content/library-conditions/body.ts
// `learnId`). Every sentence was written from wording checked on 20 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, the
// British Thyroid Foundation, Thyroid UK and NICE's thyroid disease guideline (NG145). General information
// only; it never replaces what a person's own team tells them.

const btf = (label: string, path: string): LearnSource => ({ label: `British Thyroid Foundation: ${label}`, url: `https://www.btf-thyroid.org/${path}` });

const NHS_HYPO: LearnSource = { label: "NHS: Underactive thyroid (hypothyroidism)", url: "https://www.nhs.uk/conditions/underactive-thyroid-hypothyroidism/" };
const NHS_LEVO: LearnSource = { label: "NHS: Levothyroxine", url: "https://www.nhs.uk/medicines/levothyroxine/" };
const BTF_WHAT = btf("Your thyroid gland", "what-is-thyroid-disorder");
const BTF_HYPO = btf("Hypothyroidism", "hypothyroidism-leaflet");
const BTF_TFT = btf("Thyroid function tests", "thyroid-function-tests");
const BTF_ANTIBODIES = btf("Thyroid antibodies explained", "thyroid-antibodies-explained");
const BTF_LEVO = btf("About levothyroxine", "levothyroxine");
const BTF_LIVING = btf("Living better with hypothyroidism", "living-better-with-hypothyroidism");
const BTF_FATIGUE = btf("Coping with fatigue", "coping-with-fatigue");
const BTF_WEIGHT = btf("Thyroid and weight: the science", "thyroid-and-weight-the-science");
const BTF_WELLBEING = btf("Wellbeing and weight management", "wellbeing-and-weight-management");
const BTF_PSYCH = btf("Psychological symptoms and thyroid disorders", "psychological-symptoms-and-thyroid-disorders");
const BTF_PREGNANCY = btf("Pregnancy and fertility in thyroid disorders", "pregnancy-and-fertility-in-thyroid-disorders");
const BTF_EMERGENCIES = btf("Thyroid emergencies explained", "thyroid-emergencies-explained");
const TUK_FAQ: LearnSource = { label: "Thyroid UK: Frequently asked questions for hypothyroidism", url: "https://thyroiduk.org/if-you-are-hypothyroid/frequently-asked-questions-for-hypothyroidism/" };
const TUK_PREGNANT: LearnSource = { label: "Thyroid UK: Hypothyroid and pregnant", url: "https://thyroiduk.org/information/having-a-baby/hypothyroid-and-pregnant/" };
const NICE_NG145: LearnSource = { label: "NICE: Thyroid disease, assessment and management (NG145), recommendations", url: "https://www.nice.org.uk/guidance/ng145/chapter/Recommendations" };

export const underactiveAnswers: LearnArticle[] = [
  {
    id: "hypo-what-it-does",
    kicker: "Understanding",
    question: "What does the thyroid do, and what does too little feel like?",
    hook: "A small gland in the neck sets the pace for the whole body. When it makes too little hormone, everything slows.",
    short: "The thyroid is a gland in the neck that makes hormones which set how fast the body's cells work. An underactive thyroid does not make enough, so the body slows down, causing symptoms like tiredness, feeling cold and weight gain. It is common, and it can be managed with treatment.",
    sections: [
      {
        heading: "A small gland with a big job",
        paragraphs: [
          "The thyroid gland lies in the front of the neck, just below the Adam's apple. It is made up of two lobes, one on either side of the windpipe.",
          "It makes two hormones, thyroxine, often called T4, and triiodothyronine, often called T3. These hormones are needed for all the cells in the body to work normally.",
        ],
      },
      {
        heading: "The body's pace-setter",
        paragraphs: [
          "Thyroid hormones regulate the speed with which the body's cells work. If too little is made, the cells and organs of the body slow down.",
          "The heart rate may be slower than normal, and the intestines may work sluggishly, causing constipation.",
        ],
      },
      {
        heading: "A thermostat in the brain",
        paragraphs: [
          "The pituitary gland, underneath the brain, works like a thermostat. When thyroid hormone levels drop a little, it releases thyroid-stimulating hormone, or TSH, which tells the thyroid to make more.",
        ],
      },
      {
        heading: "What too little feels like",
        paragraphs: [
          "Common symptoms include feeling extremely tired, feeling cold more than usual, putting on weight and constipation. Others are difficulty concentrating, low mood, dry skin or hair, a croaky voice, and irregular or heavy periods.",
          "Symptoms may be mild and not easy to notice. They usually develop slowly and get worse over time.",
        ],
      },
      {
        heading: "Common and treatable",
        paragraphs: [
          "An underactive thyroid is common, and it is the most common thyroid disorder. It can be managed with treatment.",
          "Some of the symptoms are common and can be caused by other conditions, so it is important to get them checked by a GP.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you might have an underactive thyroid.",
      "Tell the GP if anyone in your family has had a thyroid condition or an autoimmune condition.",
      "Mention it if you have recently been pregnant.",
      "Expect a blood test to check your TSH and T4 levels.",
    ],
    tryThisWeek: [
      "See a GP about your symptoms.",
      "Ask family about thyroid conditions.",
      "Ask about a TSH and T4 test.",
    ],
    ask: "Could my symptoms be my thyroid, and should my TSH and T4 be checked?",
    interactive: {
      kind: "signs",
      title: "Signs of a slow thyroid",
      intro: "Tick any you have noticed. They often creep up slowly.",
      signs: ["Feeling extremely tired", "Feeling cold more than usual", "Putting on weight", "Constipation", "Difficulty concentrating", "Low mood", "Dry skin, dry hair or hair loss", "A croaky voice", "Irregular or heavy periods"],
      after: "Some of these are common and can have other causes. Get them checked by a GP, who may arrange a blood test.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [BTF_WHAT, NHS_HYPO, BTF_HYPO, BTF_TFT],
    quiz: {
      question: "What happens to the body when the thyroid makes too little hormone?",
      options: [{ text: "The cells and organs slow down", right: true }, { text: "Everything speeds up" }, { text: "Nothing changes at all" }],
      why: "Thyroid hormones regulate the speed with which the body's cells work. If too little is made, the cells and organs of the body slow down.",
    },
  },
  {
    id: "hypo-causes",
    kicker: "Causes",
    question: "Why does the thyroid become underactive?",
    hook: "Most often, the body's own immune system attacks the gland. Treatments and some medicines can also be the cause.",
    short: "In the UK, the main cause is Hashimoto's disease, where the immune system attacks the thyroid so it cannot make enough hormone. It can also follow treatment for an overactive thyroid, surgery or radiotherapy to the neck, or some medicines. It is more likely if others in your family have had a thyroid condition.",
    sections: [
      {
        heading: "The immune system, mostly",
        paragraphs: [
          "In the UK, the main cause of an underactive thyroid is an autoimmune condition called Hashimoto's disease. The immune system attacks the thyroid gland, so it cannot make enough thyroid hormone.",
          "Thyroid antibodies develop when the immune system mistakenly attacks the thyroid cells. A blood test for these antibodies can confirm that the cause is autoimmune.",
        ],
      },
      {
        heading: "Who it affects",
        paragraphs: [
          "Hashimoto's disease is most common in women, and usually starts between the ages of 30 and 50. But anyone can get an underactive thyroid.",
          "You are more likely to have an underactive thyroid if others in your family have had a thyroid condition. Other family members may also have another autoimmune disorder.",
        ],
      },
      {
        heading: "Treatments and medicines",
        paragraphs: [
          "It can follow treatment for an overactive thyroid, such as radioactive iodine or surgery to remove the thyroid. Surgery or radiotherapy around the neck can also cause it.",
          "Some medicines can cause it. These include lithium, used for certain mental health problems, and amiodarone, used for particular heart problems.",
        ],
      },
      {
        heading: "Less common causes",
        paragraphs: [
          "Other causes include thyroiditis, a problem with the pituitary gland, and taking too much of some health foods, such as kelp. Not getting enough iodine in the diet is rare in the UK.",
          "In a few babies, the thyroid does not develop or does not make thyroid hormone properly. This is called congenital hypothyroidism.",
        ],
      },
    ],
    helps: [
      "Tell your GP if someone in your family has had a thyroid condition or an autoimmune condition.",
      "Tell your doctor about any medicines you take, prescribed or over the counter, as some can affect results.",
      "Encourage family members who are unwell to ask their own GP whether thyroid testing is needed.",
      "Avoid taking health foods such as kelp in excess.",
    ],
    tryThisWeek: [
      "Share your family's thyroid history.",
      "List your medicines for your doctor.",
      "Tell unwell relatives about testing.",
    ],
    ask: "What caused my underactive thyroid, and should my antibodies be checked?",
    interactive: {
      kind: "risk-check",
      title: "What might be behind it?",
      intro: "Tick any that apply. Most cannot be changed, but they help your team understand the cause.",
      items: [
        { id: "family", label: "Family with a thyroid condition", note: "You are more likely to have an underactive thyroid if others in your family have had a thyroid condition.", changeable: false },
        { id: "family-autoimmune", label: "Family with an autoimmune disorder", note: "Other family members may have thyroid problems or another autoimmune disorder.", changeable: false },
        { id: "woman", label: "A woman aged 30 to 50", note: "Hashimoto's disease is most common in women, and usually starts between the ages of 30 and 50.", changeable: false },
        { id: "overactive", label: "Treatment for an overactive thyroid", note: "Radioactive iodine or surgery for an overactive thyroid can lead to an underactive one.", changeable: false },
        { id: "neck", label: "Surgery or radiotherapy to the neck", note: "Surgery or radiotherapy around the neck or thyroid can cause an underactive thyroid.", changeable: false },
        { id: "medicines", label: "Lithium or amiodarone", note: "Some medicines can cause it. Tell your doctor about any medicines you take.", changeable: false },
        { id: "kelp", label: "Taking a lot of kelp", note: "Some health foods taken in excess, such as kelp (seaweed), can cause it.", changeable: true },
      ],
    },
    sources: [NHS_HYPO, BTF_HYPO, BTF_ANTIBODIES, BTF_WHAT],
    quiz: {
      question: "What is the main cause of an underactive thyroid in the UK?",
      options: [{ text: "Hashimoto's disease, an autoimmune condition", right: true }, { text: "Too much exercise" }, { text: "Eating too much fruit" }],
      why: "In the UK, the main cause of an underactive thyroid is an autoimmune condition called Hashimoto's disease.",
    },
  },
  {
    id: "hypo-tests",
    kicker: "Tests",
    question: "What do the TSH and T4 blood tests mean?",
    hook: "A high TSH is the body asking for more hormone. A low T4 shows the thyroid is not keeping up.",
    short: "TSH is made by the pituitary gland to tell the thyroid to work, and T4 is the main hormone the thyroid makes. An underactive thyroid is typically linked with a TSH above the reference range and a T4 below it. A slightly raised TSH with a normal T4 is called subclinical hypothyroidism.",
    sections: [
      {
        heading: "Two numbers that talk to each other",
        paragraphs: [
          "TSH stands for thyroid-stimulating hormone. It is made by the pituitary gland and activates the thyroid to produce more T4.",
          "When thyroid hormone levels drop, the pituitary releases more TSH. When they rise above normal, it stops releasing TSH.",
        ],
      },
      {
        heading: "What an underactive thyroid looks like",
        paragraphs: [
          "An underactive thyroid is typically linked with a TSH level above the reference range and a T4 level below it.",
          "Laboratories compare results with ranges from healthy people. These ranges are only a guide and vary between laboratories.",
        ],
      },
      {
        heading: "Often TSH comes first",
        paragraphs: [
          "In most cases, TSH is measured first, because if it is normal, the thyroid is very likely to be working normally. Many laboratories then measure T4 if the TSH is above the range.",
          "Your doctor reads the results together with your symptoms and how you feel.",
        ],
      },
      {
        heading: "Mild thyroid failure",
        paragraphs: [
          "A slightly raised TSH with a normal T4 is called subclinical hypothyroidism, or mild thyroid failure. It may have no obvious symptoms and be found only by a blood test.",
          "It may slowly develop into an underactive thyroid over many years. A test for thyroid antibodies helps show the risk.",
        ],
      },
      {
        heading: "Things that affect results",
        paragraphs: [
          "Common illnesses can alter results for a while. Some medicines, and supplements containing iodine or biotin, can also affect them.",
          "Tell the person taking your blood about anything that might affect the readings.",
        ],
      },
    ],
    helps: [
      "Ask your doctor to explain what your thyroid function tests mean.",
      "Tell your doctor about any medicines or supplements you take, especially biotin.",
      "Tell the person taking your blood about any recent serious illness.",
      "If your TSH is slightly raised, ask how often it should be rechecked.",
    ],
    tryThisWeek: [
      "Ask what your results mean.",
      "Mention biotin or other supplements.",
      "Ask when to recheck a raised TSH.",
    ],
    ask: "What are my TSH and T4, and are they in range?",
    interactive: {
      kind: "flip-cards",
      title: "What each test tells you",
      intro: "Turn each card to see what the test looks at.",
      cards: [
        { id: "tsh", front: "TSH", when: "Usually measured first", back: "Made by the pituitary to push the thyroid. Above the range usually points to an underactive thyroid." },
        { id: "ft4", front: "Free T4 (FT4)", when: "If TSH is outside the range", back: "The main thyroid hormone. Below the range, with a high TSH, suggests an underactive thyroid." },
        { id: "ft3", front: "Free T3 (FT3)", when: "Mainly for an overactive thyroid", back: "Usually only used in testing for an overactive thyroid or how severe it is." },
        { id: "tpo", front: "TPO antibodies", when: "To find the cause", back: "Raised in Hashimoto's thyroiditis. Rarely useful to repeat." },
      ],
    },
    sources: [BTF_TFT, BTF_HYPO, NICE_NG145, BTF_ANTIBODIES],
    quiz: {
      question: "Which pattern usually points to an underactive thyroid?",
      options: [{ text: "A high TSH and a low T4", right: true }, { text: "A low TSH and a high T4" }, { text: "A normal TSH and a normal T4" }],
      why: "An underactive thyroid is typically linked with a TSH level above the reference range and a T4 level below it.",
    },
  },
  {
    id: "hypo-still-tired",
    kicker: "Still tired",
    question: "Still tired on the tablets? What else should be checked?",
    hook: "Levothyroxine works slowly. If you still feel unwell, there is often something that can be checked or changed.",
    short: "It can take several months to feel better on levothyroxine. If you still feel unwell despite normal results, your doctor may look at your dose, how you take your tablets, and other causes such as low iron, low vitamin B12, low vitamin D or coeliac disease. If these are ruled out, a referral to a thyroid specialist may help.",
    sections: [
      {
        heading: "It takes time",
        paragraphs: [
          "Levothyroxine is a slow-acting medicine, so it may take several months for symptoms to ease. If your TSH was very high before treatment, it may take longer.",
          "Symptoms may lag behind treatment changes for several weeks to months.",
          "Most people feel better on levothyroxine. Thyroid UK says some 5 to 10% continue to have symptoms.",
        ],
      },
      {
        heading: "How you take it matters",
        paragraphs: [
          "Forgetting tablets is one of the main reasons people do not feel well. Missed doses can also make blood tests look as if you are on the wrong dose.",
          "Calcium, iron, some cholesterol medicines, multivitamins, soya and caffeine can all reduce how well levothyroxine is absorbed.",
        ],
      },
      {
        heading: "Fine-tuning the dose",
        paragraphs: [
          "If your results are normal but you still do not feel entirely well, ask whether there is room for a slight change in dose. This can be considered if your TSH can be kept within the reference range.",
          "Do not change your dose without discussing it with your doctor.",
        ],
      },
      {
        heading: "Other causes to check",
        paragraphs: [
          "Your doctor may look into other possible causes, such as low iron, low vitamin B12, low vitamin D and coeliac disease.",
          "If these are ruled out, ask your GP about referral to a thyroid specialist. A specialist may consider adding liothyronine where it is clinically appropriate, but NICE says it should not be offered routinely, as there is not enough evidence of benefit.",
        ],
      },
      {
        heading: "Fatigue is not ordinary tiredness",
        paragraphs: [
          "A good night's sleep will usually resolve tiredness, but fatigue will not just go away overnight.",
          "Exercise, which does not need to be vigorous, building rest into your day and a regular bedtime routine can all help. If fatigue persists, see your GP.",
        ],
      },
    ],
    helps: [
      "Take your tablets every day, using a phone reminder or a pill box.",
      "Keep levothyroxine at least four hours apart from calcium, iron and multivitamins.",
      "Keep a diary of your results, your dose and how you feel.",
      "Ask your doctor to check for low iron, vitamin B12, vitamin D or coeliac disease.",
      "Ask about a referral to a thyroid specialist if other causes are ruled out.",
    ],
    tryThisWeek: [
      "Set a daily tablet reminder.",
      "Start a symptom diary.",
      "Ask about iron, B12 and vitamin D.",
    ],
    ask: "Could something other than my thyroid be making me tired?",
    interactive: {
      kind: "risk-check",
      title: "What else could be in the way?",
      intro: "Tick any that apply. Many can be changed or checked with your doctor.",
      items: [
        { id: "missed", label: "Missing tablets sometimes", note: "One of the main reasons people do not feel well. A phone reminder or pill box can help.", changeable: true },
        { id: "breakfast", label: "Taking it with breakfast or coffee", note: "Take it on an empty stomach, at least half an hour before eating or caffeine.", changeable: true },
        { id: "calcium", label: "Calcium, iron or multivitamins", note: "Keep these at least four hours apart from levothyroxine.", changeable: true },
        { id: "brand", label: "A change of tablet brand", note: "Some people report feeling better on one brand than another. Talk to your doctor.", changeable: true },
        { id: "other", label: "Low iron, B12 or vitamin D", note: "Your doctor may look into these, and coeliac disease, as other causes.", changeable: true },
        { id: "recent", label: "A recent change of dose", note: "It may take a little while to feel the benefits, so a little patience is needed.", changeable: false },
        { id: "high-tsh", label: "A very high TSH before treatment", note: "It may take longer for you to feel well again.", changeable: false },
      ],
    },
    sources: [BTF_LIVING, BTF_FATIGUE, BTF_TFT, NICE_NG145, BTF_HYPO, TUK_FAQ],
    quiz: {
      question: "How long can it take to feel better on levothyroxine?",
      options: [{ text: "Several months", right: true }, { text: "A few hours" }, { text: "One day" }],
      why: "Levothyroxine is a slow-acting medicine, so it may take several months for symptoms to ease.",
    },
  },
  {
    id: "hypo-levothyroxine",
    kicker: "Treatment",
    question: "How should I take levothyroxine so it works?",
    hook: "One tablet, every day, on an empty stomach. When you take it matters as much as taking it.",
    short: "Levothyroxine replaces the thyroid hormone your body cannot make, and is usually taken once a day for life. Take it on an empty stomach with water, 30 to 60 minutes before breakfast, caffeine or other medicines, at the same time each day. If you miss a dose, take it when you remember unless the next one is nearly due, and never take two together.",
    sections: [
      {
        heading: "What it does",
        paragraphs: [
          "Levothyroxine replaces the thyroid hormone your body cannot produce. It is a synthetic version of thyroxine, the hormone made by the thyroid.",
          "You will usually need to take it for the rest of your life to stop symptoms returning. You should be able to live a normal life.",
        ],
      },
      {
        heading: "When and how",
        paragraphs: [
          "Take it on an empty stomach, 30 to 60 minutes before your first meal of the day, any drink with caffeine, or any other medicine.",
          "Try to take it at the same time each day. Swallow tablets whole with a glass of water.",
        ],
      },
      {
        heading: "Every day counts",
        paragraphs: [
          "It is easy to miss a tablet, and because the body has a big reservoir of thyroxine, you will not notice a difference straight away. But taking it every day matters for your blood test results and your health.",
          "A regular reminder on your phone or a pill box can help.",
        ],
      },
      {
        heading: "If you miss a dose",
        paragraphs: [
          "Take it as soon as you remember, unless it is nearly time for your next dose. In that case, skip the missed dose.",
          "Do not take 2 doses at the same time to make up for a missed one.",
        ],
      },
      {
        heading: "Side effects and storage",
        paragraphs: [
          "Most side effects happen when the dose is too high, and often improve when the dose is changed. They include difficulty sleeping, headaches, feeling anxious, sweating and hair loss.",
          "Store levothyroxine at room temperature, away from moisture, heat and direct sunlight.",
        ],
      },
    ],
    helps: [
      "Take it with water on an empty stomach, 30 to 60 minutes before breakfast or caffeine.",
      "Take it at the same time each day.",
      "Use a phone reminder or a pill box.",
      "Never take 2 doses together to make up for a missed one.",
      "Speak to a doctor or pharmacist about side effects that bother you, and keep taking it unless advised to stop.",
      "Ask about free prescriptions: in England, people treated for an underactive thyroid are entitled to them.",
    ],
    tryThisWeek: [
      "Take it before breakfast with water.",
      "Set a phone reminder.",
      "Ask about free prescriptions.",
    ],
    ask: "When should I take my tablet, and with what?",
    interactive: {
      kind: "timeline",
      title: "A levothyroxine morning",
      steps: [
        { id: "wake", when: "On waking", title: "Tablet first", points: ["Swallow it whole with a glass of water.", "Try to take it at the same time each day."] },
        { id: "wait", when: "The next 30 to 60 minutes", title: "Wait before food", points: ["No breakfast, tea or coffee yet.", "No other medicines yet."] },
        { id: "breakfast", when: "After that", title: "Breakfast and coffee", points: ["Eat and drink as usual."] },
        { id: "later", when: "Four hours later", title: "Calcium and iron", points: ["Take calcium, iron or multivitamins at least four hours apart from levothyroxine."] },
      ],
    },
    sources: [NHS_LEVO, BTF_LEVO, BTF_LIVING, NHS_HYPO],
    quiz: {
      question: "You missed a dose and the next one is nearly due. What do you do?",
      options: [{ text: "Skip the missed dose and carry on", right: true }, { text: "Take two together" }, { text: "Stop for a week" }],
      why: "Take it as soon as you remember, unless it is nearly time for your next dose. In that case, skip the missed dose.",
    },
  },
  {
    id: "hypo-dose",
    kicker: "Dose",
    question: "How is the right levothyroxine dose found?",
    hook: "Start low, test, adjust, repeat. It can take a few months to land on the dose that suits you.",
    short: "The dose depends on your body weight, your blood tests, your age and any other conditions. Doctors often start low and increase it gradually, with a blood test about every three months until levels settle. Most people need between 100 and 150 micrograms a day, but some need much less or more.",
    sections: [
      {
        heading: "What sets the dose",
        paragraphs: [
          "How much you need depends on your thyroid hormone levels, any other conditions you may have and your age. It also depends on your body weight.",
          "Most people need between 100 and 150 micrograms a day. But the dose can be lower than 50 or up to 300 micrograms a day.",
        ],
      },
      {
        heading: "Starting carefully",
        paragraphs: [
          "Your doctor may prescribe a low dose to start with and increase it gradually. This is expected if you have severe hypothyroidism or are at risk of heart problems.",
          "NICE suggests a starting dose based on body weight for adults under 65 with no heart disease, and 25 to 50 micrograms a day for those aged 65 and over or with heart disease.",
        ],
      },
      {
        heading: "Testing and adjusting",
        paragraphs: [
          "Blood tests are not usually offered until three months after starting or changing a dose, as levels are still adjusting. TSH is usually measured every three months until it is stable.",
          "Patience is needed, as it can take several months to feel better and for tests to settle.",
        ],
      },
      {
        heading: "The aim",
        paragraphs: [
          "The aim is to keep TSH within the reference range. Too much levothyroxine causes symptoms of an overactive thyroid, and too little will not completely resolve the symptoms.",
          "Being overtreated or undertreated over the long term carries a small increased risk of health problems. You and your doctor can set targets that suit you.",
        ],
      },
      {
        heading: "When it may change",
        paragraphs: [
          "Once the right dose is found it is unlikely to vary. But it may need changing after a significant change in weight, around the menopause, or in pregnancy.",
        ],
      },
    ],
    helps: [
      "Have your blood tests as planned while the dose is being adjusted.",
      "Do not change your dose without talking to your doctor.",
      "Ask for a blood test if your weight changes significantly.",
      "Tell your doctor if you become pregnant.",
      "Keep a note of your results and doses.",
    ],
    tryThisWeek: [
      "Keep your next blood test date.",
      "Note your dose and results.",
      "Ask for a test if your weight changes.",
    ],
    ask: "Is my dose right yet, and when is my next blood test?",
    interactive: {
      kind: "timeline",
      title: "Finding your dose",
      steps: [
        { id: "start", when: "At diagnosis", title: "A starting dose", points: ["Based on weight, age, other conditions and blood tests.", "Often low at first, then increased gradually."] },
        { id: "three", when: "About three months on", title: "The first check", points: ["TSH is measured, and the dose adjusted if needed."] },
        { id: "repeat", when: "Every three months", title: "Fine-tuning", points: ["Until two similar results within the range, three months apart."] },
        { id: "stable", when: "Once stable", title: "A yearly test", points: ["The dose is unlikely to vary.", "A blood test once a year makes sure."] },
      ],
    },
    sources: [BTF_HYPO, NHS_LEVO, NICE_NG145, BTF_LIVING, BTF_TFT],
    quiz: {
      question: "What is the aim when the dose is adjusted?",
      options: [{ text: "To keep TSH within the reference range", right: true }, { text: "To push TSH as low as possible" }, { text: "To take as much as feels good" }],
      why: "The aim is to keep TSH within the reference range.",
    },
  },
  {
    id: "hypo-interactions",
    kicker: "Food and medicines",
    question: "Calcium, iron, coffee: what gets in the way of levothyroxine?",
    hook: "Some foods, drinks and tablets stop levothyroxine being absorbed. Timing is usually the fix.",
    short: "Food, caffeine and some medicines can affect how levothyroxine works. Take it 30 to 60 minutes before breakfast, tea or coffee, and at least four hours apart from calcium, iron, multivitamins and soya. Always tell your doctor or pharmacist about other medicines and supplements.",
    sections: [
      {
        heading: "Food and caffeine",
        paragraphs: [
          "Taking levothyroxine with some foods can affect how it works. It is best taken 30 to 60 minutes before your first meal, or any drink with caffeine, such as tea or coffee.",
          "Caffeine can stop the body absorbing levothyroxine properly, so wait at least 30 minutes before tea or coffee.",
        ],
      },
      {
        heading: "Four hours apart",
        paragraphs: [
          "Calcium, iron, some cholesterol-lowering medicines and multivitamins can decrease absorption. Take levothyroxine at least four hours apart from them.",
          "Some calcium-rich foods and soya can also get in the way, so keep these four hours apart too.",
        ],
      },
      {
        heading: "Other medicines",
        paragraphs: [
          "Some medicines may not mix well with levothyroxine. These include medicines for epilepsy, stomach acid medicines such as omeprazole, antacids, semaglutide, antidepressants such as sertraline, and some heart medicines.",
          "The herbal supplement St John's wort may not mix well either. Biotin, or vitamin B7, can affect your thyroid tests.",
        ],
      },
      {
        heading: "Foods to know about",
        paragraphs: [
          "Kelp is very rich in iodine and should be avoided. Nori, the seaweed found in sushi, is fine.",
          "Cabbage, cauliflower and kale are fine to eat in moderation. You would need to eat huge amounts, generally raw, to affect the thyroid.",
        ],
      },
    ],
    helps: [
      "Take levothyroxine 30 to 60 minutes before breakfast, tea or coffee.",
      "Keep calcium, iron and multivitamins at least four hours apart.",
      "Tell your doctor about any other medicines, herbal remedies, vitamins or supplements.",
      "Let your doctor know if you take biotin when you go for a blood test.",
      "Avoid kelp.",
    ],
    tryThisWeek: [
      "Wait before your morning coffee.",
      "Move calcium or iron later.",
      "Tell your doctor your supplements.",
    ],
    ask: "Do any of my other medicines or supplements clash with levothyroxine?",
    interactive: {
      kind: "scenarios",
      title: "Getting the timing right",
      scenarios: [
        {
          id: "coffee",
          situation: "You usually have coffee as soon as you wake.",
          options: [{ text: "Take the tablet first, then wait", best: true }, { text: "Take the tablet with the coffee" }],
          why: "Caffeine can stop the body absorbing levothyroxine properly, so wait at least 30 minutes before tea or coffee.",
        },
        {
          id: "iron",
          situation: "You have been prescribed iron tablets.",
          options: [{ text: "Take them four hours apart", best: true }, { text: "Take them with the levothyroxine" }],
          why: "Calcium, iron, some cholesterol-lowering medicines and multivitamins can decrease absorption. Take levothyroxine at least four hours apart from them.",
        },
        {
          id: "biotin",
          situation: "You take a hair supplement with biotin.",
          options: [{ text: "Tell your doctor at your blood test", best: true }, { text: "Say nothing: it is only a vitamin" }],
          why: "Biotin, or vitamin B7, can affect your thyroid tests.",
        },
        {
          id: "kale",
          situation: "A friend says to cut out cabbage and kale.",
          options: [{ text: "They are fine in moderation", best: true }, { text: "Cut them out completely" }],
          why: "Cabbage, cauliflower and kale are fine to eat in moderation.",
        },
      ],
    },
    sources: [NHS_LEVO, BTF_LEVO, BTF_LIVING, BTF_FATIGUE],
    quiz: {
      question: "How far apart should levothyroxine and iron tablets be?",
      options: [{ text: "At least four hours", right: true }, { text: "No gap is needed" }, { text: "Ten minutes" }],
      why: "Calcium, iron, some cholesterol-lowering medicines and multivitamins can decrease absorption. Take levothyroxine at least four hours apart from them.",
    },
  },
  {
    id: "hypo-weight",
    kicker: "Weight",
    question: "What is the honest story on the thyroid and weight?",
    hook: "An underactive thyroid does add some weight, but usually less than people expect, and much of it is salt and water.",
    short: "An underactive thyroid is generally linked with some weight gain, more so when it is severe. Most of the extra weight is salt and water rather than fat, so treatment usually brings only a small loss. Once levels are back in range, gaining or losing weight works the same as for anyone else.",
    sections: [
      {
        heading: "Why weight goes up",
        paragraphs: [
          "Thyroid hormone regulates metabolism. With an underactive thyroid, the basal metabolic rate, the energy used at rest, is lower, so it is generally linked with some weight gain.",
          "The gain is often greater when the condition is more severe. Massive weight gain is rarely caused by an underactive thyroid.",
        ],
      },
      {
        heading: "Mostly salt and water",
        paragraphs: [
          "Most of the extra weight is due to a build-up of salt and water, not always fat. The British Thyroid Foundation says that, in general, 5 to 10 pounds may be due to the thyroid.",
          "If weight gain is the only symptom, it is less likely to be caused only by the thyroid.",
        ],
      },
      {
        heading: "What treatment changes",
        paragraphs: [
          "Levothyroxine can help with symptoms including weight gain. Once treated, expect a small weight loss, usually less than 10% of body weight.",
          "Because an underactive thyroid usually develops slowly, it is fairly common to find no significant weight loss after treatment.",
        ],
      },
      {
        heading: "After that, the same as anyone",
        paragraphs: [
          "Once levels are back in the normal range, the ability to gain or lose weight is the same as for people without thyroid problems.",
          "Taking extra thyroid hormone to lose weight is unlikely to change weight much, and can cause other problems, such as loss of muscle.",
          "If your weight changes significantly, it is worth having a blood test, as your dose may need to change.",
        ],
      },
    ],
    helps: [
      "Ask for a blood test if your weight changes significantly.",
      "Do not take extra levothyroxine to lose weight.",
      "Look for free, evidence-based advice on food and exercise, as there is no single thyroid diet.",
      "Remember that if weight gain is your only symptom, the thyroid is less likely to be the whole cause.",
    ],
    tryThisWeek: [
      "Ask about a test if your weight shifts.",
      "Keep to your prescribed dose.",
      "Find free, evidence-based advice.",
    ],
    ask: "How much of my weight change could be my thyroid?",
    interactive: {
      kind: "scenarios",
      title: "Weight, honestly",
      scenarios: [
        {
          id: "no-loss",
          situation: "You started levothyroxine but have not lost weight.",
          options: [{ text: "This is fairly common", best: true }, { text: "The tablets are not working" }],
          why: "Because an underactive thyroid usually develops slowly, it is fairly common to find no significant weight loss after treatment.",
        },
        {
          id: "extra",
          situation: "You wonder about taking extra tablets to lose weight.",
          options: [{ text: "Keep to your prescribed dose", best: true }, { text: "Take a little extra" }],
          why: "Taking extra thyroid hormone to lose weight is unlikely to change weight much, and can cause other problems, such as loss of muscle.",
        },
        {
          id: "change",
          situation: "Your weight has changed a lot this year.",
          options: [{ text: "Ask for a blood test", best: true }, { text: "Wait for next year's test" }],
          why: "If your weight changes significantly, it is worth having a blood test, as your dose may need to change.",
        },
      ],
    },
    sources: [BTF_WEIGHT, NHS_HYPO, NHS_LEVO, BTF_LIVING, BTF_WELLBEING],
    quiz: {
      question: "What is most of the extra weight with an underactive thyroid?",
      options: [{ text: "Salt and water", right: true }, { text: "Muscle" }, { text: "Bone" }],
      why: "Most of the extra weight is due to a build-up of salt and water, not always fat.",
    },
  },
  {
    id: "hypo-mood",
    kicker: "Mind",
    question: "Why do mood, memory and brain fog change?",
    hook: "Low mood and fog are common with an underactive thyroid. They usually improve as levels settle, though not always as fast as hoped.",
    short: "Low mood, difficulty concentrating, brain fog and memory lapses are common with an underactive thyroid. They usually improve as the thyroid is brought under control, but it is common to feel not quite right for some time after blood tests return to normal. Talking to your doctor, and to people who understand, can help.",
    sections: [
      {
        heading: "Common, and real",
        paragraphs: [
          "People with thyroid disorders often have emotional or mental health symptoms as well as physical ones. Low mood or depression is a common symptom of an underactive thyroid.",
          "Difficulty concentrating, or brain fog, short-term memory lapses and a lack of mental alertness can happen, most often with an underactive thyroid. Slow thoughts and memory problems are among its common symptoms.",
        ],
      },
      {
        heading: "Not dementia",
        paragraphs: [
          "These symptoms can make some people worry about permanent memory failure. In fact, they are rarely as severe as in dementia.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "Abnormal thyroid hormone levels can cause these symptoms, and rapid changes in levels can unsettle your emotions.",
          "It can take a while for medication to become properly balanced, and coping with fatigue in that time can affect your wellbeing. Taking tablets irregularly can also upset your hormone balance.",
        ],
      },
      {
        heading: "Getting better",
        paragraphs: [
          "In the great majority of cases, symptoms improve as the thyroid is brought under control. But it is common to feel not quite right for some time after blood tests return to normal.",
          "Anxiety or depression sometimes need treatment in their own right, and talking therapies can help. If symptoms do not settle, something other than the thyroid may be the cause.",
        ],
      },
    ],
    helps: [
      "Talk to your doctor about mood or memory symptoms.",
      "Confide in a family member or close friend.",
      "Talk to others who have been through it, through support groups or helplines.",
      "Take your tablets every day, as irregular doses can upset your hormone balance.",
      "Try managing your energy, gentle exercise and relaxation.",
      "Ask for a referral if symptoms are severe or continue after a fair trial of treatment.",
    ],
    tryThisWeek: [
      "Tell your doctor about mood changes.",
      "Talk to someone close.",
      "Try gentle exercise or relaxation.",
    ],
    ask: "Could my thyroid be affecting my mood and memory, and what else might help?",
    interactive: {
      kind: "signs",
      title: "Mood and memory changes",
      intro: "Tick any you have noticed. Showing the list to your doctor can help.",
      signs: ["Low mood or tearfulness", "Difficulty enjoying things", "Feeling anxious or nervous", "Irritability or snappiness", "Difficulty concentrating", "Short-term memory lapses", "Slow thoughts"],
      after: "These can be linked to thyroid levels and usually improve with treatment. Talk to your doctor, and ask for more help if they continue.",
      copyHeading: "Mood and memory changes I have noticed",
    },
    sources: [BTF_PSYCH, NHS_HYPO, BTF_HYPO, BTF_LIVING],
    quiz: {
      question: "Is thyroid brain fog usually as severe as dementia?",
      options: [{ text: "No, it is rarely that severe", right: true }, { text: "Yes, it is the same" }, { text: "It always gets worse" }],
      why: "These symptoms can make some people worry about permanent memory failure. In fact, they are rarely as severe as in dementia.",
    },
  },
  {
    id: "hypo-pregnancy",
    kicker: "Pregnancy",
    question: "How does an underactive thyroid affect pregnancy?",
    hook: "A baby relies on its mother's thyroid hormone early on. The dose usually goes up as soon as pregnancy is confirmed.",
    short: "If you have an underactive thyroid and are pregnant or planning to be, tell your GP. The levothyroxine dose usually needs to go up as soon as you know you are pregnant, with regular blood tests through pregnancy. Treatment usually helps prevent complications, and it is safe to breastfeed on levothyroxine.",
    sections: [
      {
        heading: "Before pregnancy",
        paragraphs: [
          "An untreated or undertreated underactive thyroid can make it harder to conceive. Once levels are back to normal on levothyroxine, the chances of pregnancy should improve dramatically.",
          "If you are planning a pregnancy, let your doctor know and ideally have a blood test before you conceive.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "In the first 12 weeks, the baby depends on its mother's thyroid hormones for normal brain development.",
          "If it is not treated, an underactive thyroid can increase the chance of serious complications, including pre-eclampsia, premature birth or miscarriage. Treatment usually helps prevent these.",
        ],
      },
      {
        heading: "As soon as you know",
        paragraphs: [
          "As soon as you know you are pregnant, it is generally recommended that the dose is increased straight away. The British Thyroid Foundation suggests doubling your current dose on two days each week, then contacting your GP for a blood test.",
          "You will need regular blood tests throughout pregnancy so the dose can be adjusted.",
          "Take iron, calcium or Gaviscon several hours before or after levothyroxine.",
        ],
      },
      {
        heading: "After the birth",
        paragraphs: [
          "After the birth, you will probably go back to your pre-pregnancy dose, with a blood test a few weeks later. It is safe to breastfeed while taking levothyroxine.",
          "In the UK, all babies have a heel-prick blood test shortly after birth that screens for an underactive thyroid.",
        ],
      },
      {
        heading: "Postpartum thyroiditis",
        paragraphs: [
          "Postpartum thyroiditis is a temporary inflammation of the thyroid that follows 5 to 10% of pregnancies. It usually shows up within six to twelve months after the birth.",
          "Most women can stop treatment after six to twelve months, but around a third develop a permanent underactive thyroid.",
        ],
      },
    ],
    helps: [
      "Tell your GP if you are pregnant or planning a pregnancy.",
      "Ask for a blood test before you try to conceive.",
      "Once pregnant, ask about increasing your dose straight away.",
      "Tell your midwife or obstetrician about your thyroid condition.",
      "Have a blood test a few weeks after the birth.",
    ],
    tryThisWeek: [
      "Tell your GP your plans.",
      "Ask about a test before trying.",
      "Tell your midwife about your thyroid.",
    ],
    ask: "How should my dose change if I become pregnant?",
    interactive: {
      kind: "timeline",
      title: "From planning to after the birth",
      steps: [
        { id: "plan", when: "Planning", title: "Tell your doctor", points: ["Ideally have a blood test before you conceive."] },
        { id: "positive", when: "A positive test", title: "Increase the dose", points: ["Often by doubling it on two days each week.", "Then contact your GP for a blood test."] },
        { id: "during", when: "Through pregnancy", title: "Regular blood tests", points: ["The dose can be adjusted as needed."] },
        { id: "after", when: "After the birth", title: "Back to your usual dose", points: ["A blood test a few weeks later.", "Breastfeeding is safe on levothyroxine."] },
      ],
    },
    sources: [NHS_HYPO, BTF_PREGNANCY, BTF_HYPO, NHS_LEVO, TUK_PREGNANT],
    quiz: {
      question: "What usually happens to the dose once pregnancy is confirmed?",
      options: [{ text: "It goes up straight away", right: true }, { text: "It stops" }, { text: "It stays the same until the birth" }],
      why: "As soon as you know you are pregnant, it is generally recommended that the dose is increased straight away.",
    },
  },
  {
    id: "hypo-checks",
    kicker: "Check-ups",
    question: "How often should my thyroid be tested?",
    hook: "Every few months while the dose settles, then once a year. And sooner if something changes.",
    short: "After starting or changing a dose, TSH is usually checked every three months until it is stable. Once stable, a blood test once a year makes sure the dose is still right. Not all surgeries call people in, so it helps to keep track of your last test.",
    sections: [
      {
        heading: "While the dose settles",
        paragraphs: [
          "NICE suggests measuring TSH every 3 months until it has stabilised. That means two similar results within the reference range, 3 months apart.",
          "Blood tests are not usually offered until three months after a dose change, as levels are still adjusting.",
        ],
      },
      {
        heading: "Once stable",
        paragraphs: [
          "Once stable, you should have a blood test once a year to check your thyroid hormone levels.",
          "Not all GP surgeries call people for blood tests. Keep a record of your last test, and ask for one if you have not been called.",
        ],
      },
      {
        heading: "Sooner if things change",
        paragraphs: [
          "Tests may be more frequent if your results have been abnormal, after a change of dose, or if you are feeling unwell.",
          "Tell your doctor about any change in your health between tests. A test is also advised if you are planning a pregnancy or in early pregnancy.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Taking your medicine as prescribed and having regular tests is the best way to prevent myxoedema coma. This is an extremely rare emergency linked to severe, poorly controlled hypothyroidism.",
          "Ask for your results, so you can keep track of your levels.",
        ],
      },
    ],
    helps: [
      "Keep a record of your last blood test date.",
      "Ask for a test if your surgery has not called you within a year.",
      "Ask for your results to keep track of your levels.",
      "Tell your doctor about any change in your health between tests.",
    ],
    tryThisWeek: [
      "Find your last test date.",
      "Ask for your latest results.",
      "Book a test if you are due.",
    ],
    ask: "How often do I need a blood test now?",
    interactive: {
      kind: "flip-cards",
      title: "When to test",
      intro: "Turn each card to see how often tests usually happen.",
      cards: [
        { id: "start", front: "Starting or changing a dose", when: "Until levels settle", back: "TSH about every 3 months, until two similar results in range." },
        { id: "stable", front: "Stable on treatment", when: "Most people, most of the time", back: "A blood test once a year." },
        { id: "unwell", front: "Feeling unwell", when: "Or after abnormal results", back: "Tests may be more frequent. Tell your doctor about changes." },
        { id: "pregnancy", front: "Planning or early pregnancy", when: "With a thyroid condition", back: "Have a blood test before conceiving and in early pregnancy." },
      ],
    },
    sources: [NICE_NG145, BTF_LIVING, BTF_HYPO, BTF_TFT, BTF_EMERGENCIES],
    quiz: {
      question: "Once your dose is stable, how often is a blood test usually advised?",
      options: [{ text: "Once a year", right: true }, { text: "Every week" }, { text: "Never again" }],
      why: "Once stable, you should have a blood test once a year to check your thyroid hormone levels.",
    },
  },
];
