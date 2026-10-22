import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Addison's disease page's pieces (content/library-conditions/metabolism-more.ts
// `learnId`). Every sentence was written from wording checked on 21 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, NHS
// inform, NICE's adrenal insufficiency guideline (NG243) and the Addison's Disease Self-Help Group. Emergency
// wording follows the NHS page: call 999, even after the emergency injection. General information only; it
// never replaces what a person's own team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const adshg = (label: string, path: string): LearnSource => ({ label: `Addison's Disease Self-Help Group: ${label}`, url: `https://www.addisonsdisease.org.uk/${path}` });

const NHS_ADDISONS = nhs("Addison's disease", "conditions/addisons-disease/");
const NHS_HC_ABOUT = nhs("About hydrocortisone tablets", "medicines/hydrocortisone-tablets/about-hydrocortisone-tablets/");
const NHS_HC_HOW = nhs("How and when to take hydrocortisone tablets", "medicines/hydrocortisone-tablets/how-and-when-to-take-hydrocortisone-tablets/");
const NHS_HC_SIDE = nhs("Side effects of hydrocortisone tablets", "medicines/hydrocortisone-tablets/side-effects-of-hydrocortisone-tablets/");
const NHS_HC_FAQ = nhs("Common questions about hydrocortisone tablets", "medicines/hydrocortisone-tablets/common-questions-about-hydrocortisone-tablets/");
const NHSI_ADDISONS: LearnSource = { label: "NHS inform: Addison's disease", url: "https://www.nhsinform.scot/illnesses-and-conditions/glands/addisons-disease/" };
const NICE_NG243: LearnSource = { label: "NICE: Adrenal insufficiency: identification and management (NG243)", url: "https://www.nice.org.uk/guidance/ng243/chapter/Recommendations" };
const NHSE_CARD: LearnSource = { label: "NHS England: National Patient Safety Alert, Steroid Emergency Card", url: "https://www.england.nhs.uk/publication/national-patient-safety-alert-steroid-emergency-card-to-support-early-recognition-and-treatment-of-adrenal-crisis-in-adults/" };
const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };

const ADSHG_WHAT = adshg("What are Addison's disease and adrenal insufficiency?", "what-is-addisons-disease");
const ADSHG_MEDICATION = adshg("Medication for Addison's and adrenal insufficiency", "medication");
const ADSHG_CORTISOL = adshg("Cortisol replacement medication", "cortisol-replacement-medication");
const ADSHG_SICK_DAY = adshg("Sick Day Rules", "newly-diagnosed-sick-day-rules");
const ADSHG_CRISIS = adshg("What is adrenal crisis", "newly-diagnosed-what-is-adrenal-crisis");
const ADSHG_EMERGENCY = adshg("Adrenal crisis: emergency help", "emergency");
const ADSHG_INJECTION = adshg("The emergency injection for the treatment of adrenal crisis", "the-emergency-injection-for-the-treatment-of-adrenal-crisis");
const ADSHG_TRAINING = adshg("Injection training", "injection-training");
const ADSHG_SURGERY = adshg("Surgical Guidelines", "surgery");
const ADSHG_SURGERY_FAQ = adshg("Surgical Guidelines FAQs", "leaflet-update-jan-2022-surgical-guidelines-faqs");
const ADSHG_DENTISTS = adshg("Advice for dentists", "addisons-disease-advice-for-dentists");
const ADSHG_GET_READY = adshg("Be prepared: resources to help you", "newly-diagnosed-get-ready");
const ADSHG_CARDS = adshg("Steroid emergency cards", "steroid-emergency-cards");
const ADSHG_EXERCISE = adshg("How to stay on top of exercise", "how-to-stay-on-top-of-exercise");
const ADSHG_HEAT = adshg("Hot weather", "hot-weather");
const ADSHG_SALT = adshg("Why salt?", "blog/why-salt");
const ADSHG_TRAVEL = adshg("Be prepared for travelling", "travelling");
const ADSHG_HOLIDAYS = adshg("Making the most of the holidays: tips and reminders", "making-the-most-of-the-holidays-tips-and-reminders");
const ADSHG_STRESS = adshg("Coping with psychological stress", "coping-with-psychological-stress");
const ADSHG_REDUCE_STRESS = adshg("Reducing the stress of a long-term condition", "reducing-the-stress-of-a-long-term-condition");
const ADSHG_EMPLOYEES = adshg("Guidance for employees", "guidance-for-employees");

export const addisonsAnswers: LearnArticle[] = [
  {
    id: "add-what-it-is",
    kicker: "Understanding",
    question: "What is Addison's disease?",
    hook: "Two small glands on top of the kidneys stop making hormones the body cannot live without.",
    short: "Addison's disease is a rare condition where the adrenal glands, which sit on top of the kidneys, do not work properly. They stop making enough of the hormones cortisol and aldosterone. There is no cure, but with daily medicine people can have a good quality of life with a normal life expectancy.",
    sections: [
      {
        heading: "Two small glands above the kidneys",
        paragraphs: [
          "Addison's disease, also called primary adrenal insufficiency, is a rare condition where the adrenal glands do not work properly. These are two small glands that sit on top of the kidneys.",
          "Their job is to make steroid hormones that keep the body working properly. In Addison's disease the glands are damaged, and not enough of the hormones cortisol and aldosterone are made.",
        ],
      },
      {
        heading: "What the missing hormones do",
        paragraphs: [
          "Cortisol helps to control appetite, blood sugar and how the body uses food. It is often called the stress hormone, because the body also makes it in response to illness. It is essential for life.",
          "Aldosterone controls sodium, the balance of fluid and blood pressure. It works on the kidneys to tell them to keep salt in the body.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "The most common cause is the immune system mistakenly attacking and damaging the adrenal glands. In the UK this is behind 70% to 90% of cases. It is not clear why it happens, although it can run in families.",
          "Symptoms start once most of the outer layer of the glands is lost. NHS inform says that when 90% of it is destroyed, the glands cannot make enough cortisol and aldosterone.",
          "Other causes include infections such as tuberculosis, which can damage the glands, and surgery to remove both adrenal glands. Tuberculosis is the most common cause worldwide, but it is rare in the UK.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "About 8,400 people in the UK have Addison's disease. It most commonly affects adults between the ages of 30 and 50, but it can sometimes affect children.",
          "Around two to three times more women than men get it, because autoimmunity is more common in women. People with another autoimmune condition, such as type 1 diabetes, an underactive thyroid or vitiligo, have a greater chance of developing it.",
        ],
      },
      {
        heading: "Primary and secondary",
        paragraphs: [
          "Addison's disease is primary adrenal insufficiency, where the adrenal glands themselves stop working. In secondary adrenal insufficiency the problem lies in the pituitary gland, a small gland in the head that tells the adrenal glands what to do.",
          "People with the secondary kind usually still make aldosterone. People with Addison's disease have lost it too, which is why they also take a medicine called fludrocortisone.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you might have Addison's disease.",
      "Take your medicine every day: there is no cure, but medicines help manage the condition.",
      "Always have enough medicine, so you do not run out.",
      "Carry a steroid emergency card with you at all times.",
      "Get support from other people with Addison's disease, such as through the Addison's Disease Self-Help Group.",
    ],
    tryThisWeek: [
      "Check you have enough medicine.",
      "Put your steroid card in your wallet.",
      "Look up the self-help group.",
    ],
    ask: "What caused my Addison's disease, and should I be checked for other autoimmune conditions?",
    interactive: {
      kind: "flip-cards",
      title: "The glands and their hormones",
      intro: "Turn each card to see what it does.",
      cards: [
        { id: "adrenal", front: "Adrenal glands", when: "Two small glands on the kidneys", back: "They make steroid hormones that keep the body working properly. In Addison's disease they are damaged." },
        { id: "cortisol", front: "Cortisol", when: "Replaced by hydrocortisone", back: "Helps control appetite, blood sugar and how the body uses food. The body also makes it in response to illness." },
        { id: "aldosterone", front: "Aldosterone", when: "Replaced by fludrocortisone", back: "Controls sodium, fluid balance and blood pressure, and tells the kidneys to keep salt in the body." },
        { id: "pituitary", front: "Pituitary gland", when: "Secondary adrenal insufficiency", back: "A small gland in the head that tells the adrenal glands what to do. In secondary adrenal insufficiency the problem is here." },
      ],
    },
    sources: [NHS_ADDISONS, NHSI_ADDISONS, ADSHG_WHAT, ADSHG_MEDICATION],
    quiz: {
      question: "What is the most common cause of Addison's disease?",
      options: [{ text: "The immune system attacking the adrenal glands", right: true }, { text: "Eating too much salt" }, { text: "An injury to the kidneys" }],
      why: "The most common cause is the immune system mistakenly attacking and damaging the adrenal glands.",
    },
  },
  {
    id: "add-symptoms",
    kicker: "Understanding",
    question: "What are the symptoms, and why do they come on so slowly?",
    hook: "Tiredness, dizziness and a craving for salt can creep up over months before anyone thinks of the adrenal glands.",
    short: "Early symptoms of Addison's disease, such as tiredness, weakness, low mood and loss of appetite, are like those of many other conditions. Further symptoms tend to develop gradually over months or years, but illness or an accident can make them suddenly worse. See a GP if you think you might have it.",
    sections: [
      {
        heading: "Easy to miss at first",
        paragraphs: [
          "Many of the symptoms of Addison's disease are the same as the symptoms of other conditions. Early on, they can be similar to depression or flu.",
          "Early symptoms can include extreme tiredness, muscle weakness, low mood, loss of appetite, weight loss and feeling thirsty. Some people need to pee a lot or crave salty foods.",
        ],
      },
      {
        heading: "How slowly they come",
        paragraphs: [
          "Further symptoms tend to develop gradually over months or years. But extra stress, caused by another illness or an accident, can make symptoms suddenly get worse.",
          "Later symptoms can include dizziness when standing up, feeling or being sick, tummy, joint or back pain, muscle cramps and exhaustion. Some people have headaches, difficulty concentrating, or anxiety and depression.",
        ],
      },
      {
        heading: "Changes in the skin",
        paragraphs: [
          "Areas of skin can become darker than the skin around them. This often shows in the creases of the palms, on scars, and on the lips and gums.",
          "Darker skin may be harder to see on brown or black skin. The self-help group says it is vital to check inside the mouth and the gums, and NICE asks doctors to ask whether you have noticed a change in your skin colour.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "See a GP if you think you might have Addison's disease. The symptoms usually improve with the right treatment.",
          "If you have Addison's disease and the symptoms suddenly get worse, call 999. This includes a fast heart rate, feeling very dizzy, severe tummy pain, being sick, feeling very drowsy or confused, a seizure or losing consciousness. These could be signs of adrenal crisis.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you might have Addison's disease.",
      "Mention any change in your skin colour, including inside your mouth and on your gums.",
      "Tell your GP if anyone in your family has an autoimmune condition.",
      "If you have Addison's disease and your symptoms suddenly get worse, call 999.",
    ],
    tryThisWeek: [
      "Book a GP appointment if worried.",
      "Check your gums and skin creases.",
      "Note any family autoimmune conditions.",
    ],
    ask: "Could my tiredness, dizziness or salt cravings be linked to my adrenal glands?",
    interactive: {
      kind: "signs",
      title: "Symptoms to mention",
      intro: "Tick any you have noticed. Many are the same as the symptoms of other conditions.",
      signs: [
        "Extreme tiredness",
        "Darker patches of skin, lips or gums",
        "Loss of appetite or weight loss",
        "Feeling or being sick, or tummy pain",
        "Craving salty foods",
        "Dizzy or light-headed when standing up",
        "Muscle weakness, cramps or joint pain",
        "Feeling thirsty and peeing a lot",
        "Difficulty concentrating",
        "Low mood or anxiety",
      ],
      after: "See a GP if you think you might have Addison's disease. If you have it and symptoms suddenly get worse, call 999.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_ADDISONS, NHSI_ADDISONS, ADSHG_WHAT, NICE_NG243],
    quiz: {
      question: "How do the symptoms of Addison's disease usually develop?",
      options: [{ text: "Gradually, over months or years", right: true }, { text: "All at once, in a single day" }, { text: "Only after an accident" }],
      why: "Further symptoms tend to develop gradually over months or years.",
    },
  },
  {
    id: "add-diagnosis",
    kicker: "Understanding",
    question: "How is Addison's disease diagnosed?",
    hook: "A blood test before and after one injection shows whether the adrenal glands can answer a call for cortisol.",
    short: "Your GP looks for signs such as darker skin and low blood pressure on standing, and arranges blood tests. A hormone specialist then does the short Synacthen test, which checks how well your adrenal glands are working. Other tests can show the cause.",
    sections: [
      {
        heading: "At the GP",
        paragraphs: [
          "Your GP will ask about your symptoms and your medical history, and whether anyone in your family has an autoimmune condition.",
          "They will look at your skin for darker areas, such as in the creases of your palms, on scars and on your lips and gums. Your blood pressure is checked lying down and again shortly after you stand up.",
        ],
      },
      {
        heading: "First blood tests",
        paragraphs: [
          "Blood tests measure sodium, potassium and cortisol. A low sodium, high potassium or low cortisol level may point to Addison's disease.",
          "NICE recommends a cortisol blood test taken between 8am and 9am for people with suspected adrenal insufficiency. For adults, a level below 150 nmol/L means it may be present, and above 300 nmol/L means it is very unlikely.",
        ],
      },
      {
        heading: "The Synacthen test",
        paragraphs: [
          "If a GP thinks you might have Addison's disease, they will refer you to a hormone specialist, called an endocrinologist. Children are often referred to a paediatrician.",
          "The main test is the short Synacthen test, which checks how well your adrenal glands are working. A blood sample is taken, then you have an injection of Synacthen, a man-made copy of the hormone that tells the adrenal glands to work. More blood is taken after 30 and 60 minutes.",
          "Healthy adrenal glands respond by making more cortisol, commonly above 500 to 550 nmol/L in the second sample. Glands that are not working properly cannot make this much.",
        ],
      },
      {
        heading: "Other tests",
        paragraphs: [
          "The specialist may also test your aldosterone, a hormone called ACTH, your blood sugar and adrenal antibodies. An antibody test helps to find the cause.",
          "Your thyroid may be tested too, because people with Addison's disease often have an underactive thyroid. Some people have a CT or MRI scan of the adrenal glands.",
        ],
      },
      {
        heading: "If you are very unwell",
        paragraphs: [
          "During an adrenal crisis there is not enough time for a Synacthen test. Blood may be taken, and treatment with steroid injections and fluids can start while the results are awaited.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you might have Addison's disease.",
      "Tell your GP if anyone in your family has an autoimmune condition.",
      "Tell the team if you take oral oestrogen, such as some contraceptive pills or HRT: NICE notes it can make cortisol results falsely high.",
      "Get support from other people with Addison's disease, or parents of children with the condition.",
    ],
    tryThisWeek: [
      "Write down your family history.",
      "Mention any oestrogen you take.",
      "Look up the self-help group.",
    ],
    ask: "Which tests am I having, and what will each one show?",
    interactive: {
      kind: "flip-cards",
      title: "The tests",
      intro: "Turn each card to see what the test looks for.",
      cards: [
        { id: "gp", front: "Skin and blood pressure", when: "At the GP", back: "The GP looks for darker skin, and checks blood pressure lying down and after you stand up." },
        { id: "salts", front: "Sodium and potassium", when: "First blood tests", back: "A low sodium, high potassium or low cortisol level may point to Addison's disease." },
        { id: "morning", front: "8am to 9am cortisol", when: "Suspected adrenal insufficiency", back: "A morning blood test. For adults, NICE says below 150 nmol/L it may be present; above 300 nmol/L it is very unlikely." },
        { id: "synacthen", front: "Short Synacthen test", when: "With a specialist", back: "Blood is taken before and after a Synacthen injection to check how well the adrenal glands are working." },
        { id: "antibodies", front: "Adrenal antibodies", when: "Finding the cause", back: "Antibodies that attack the adrenal gland can show the immune system is the cause." },
        { id: "thyroid", front: "Thyroid test", when: "Alongside the Synacthen test", back: "People with Addison's disease often have an underactive thyroid, so it may be checked too." },
      ],
    },
    sources: [NHS_ADDISONS, NHSI_ADDISONS, ADSHG_WHAT, NICE_NG243],
    quiz: {
      question: "What does the short Synacthen test check?",
      options: [{ text: "How well your adrenal glands are working", right: true }, { text: "How fast your heart beats" }, { text: "How much salt you eat" }],
      why: "The main test is the short Synacthen test, which checks how well your adrenal glands are working.",
    },
  },
  {
    id: "add-crisis",
    kicker: "Emergency",
    question: "What is an adrenal crisis, and what should happen?",
    hook: "When the body needs more cortisol than it has, symptoms get worse very quickly. Knowing the steps can save a life.",
    short: "An adrenal crisis is a medical emergency where symptoms of Addison's disease get worse very quickly. If you have an emergency kit, inject 100mg of hydrocortisone, and call 999. The NHS says to call 999 even if you have already given yourself the injection.",
    sections: [
      {
        heading: "The most serious complication",
        paragraphs: [
          "Adrenal crisis is the most serious complication of Addison's disease. Symptoms get worse very quickly, because the body's need for cortisol is greater than your medicine can meet.",
          "It can be triggered by things like an infection, an accident or injury, or surgery. Grief and other emotional stress can trigger it too.",
        ],
      },
      {
        heading: "The signs",
        paragraphs: [
          "Signs include extreme weakness and feeling terrible, being sick, a headache, and feeling dizzy or light-headed on sitting or standing up. Some people feel very cold and shake, have pain in the back, limbs or tummy, or become confused, drowsy or unconscious.",
          "It can cause severe dehydration, low blood pressure, seizures, loss of consciousness, a stroke or the heart suddenly stopping. If it is left untreated, it can be fatal.",
        ],
      },
      {
        heading: "What to do",
        paragraphs: [
          "If you have an emergency injection kit, inject 100mg of hydrocortisone straight away, or have someone inject it for you. Then call 999.",
          "The NHS says it is important to call 999 even if you have given yourself an emergency steroid injection. When you call, use the words “steroid-dependent” and “adrenal crisis”, and describe the symptoms.",
          "While you wait, sit or lie down somewhere safe, warm and easy to reach, and leave the door unlocked for the paramedics. Have your steroid emergency card ready to hand to them.",
        ],
      },
      {
        heading: "If in doubt",
        paragraphs: [
          "If you are not sure whether it is an adrenal crisis, the self-help group says to inject. NICE says there is no risk of overdose from hydrocortisone in an emergency.",
          "After the injection, you need to go to hospital for monitoring, as you may need more hydrocortisone and fluids.",
        ],
      },
      {
        heading: "How often it happens",
        paragraphs: [
          "Around 8 in every 100 people with Addison's disease have an adrenal crisis each year, some more often than others. The self-help group says to learn the signs and what to do, and to educate those around you so they can help you.",
        ],
      },
    ],
    helps: [
      "Keep your emergency injection kit, extra tablets and steroid emergency card with you.",
      "In an emergency, inject 100mg of hydrocortisone if you have a kit, then call 999.",
      "Call 999 even if you have already given yourself the injection.",
      "Use the words “steroid-dependent” and “adrenal crisis” when you call.",
      "Teach the people around you the signs and how to help.",
      "Keep a symptom diary to learn your own low cortisol signs.",
    ],
    tryThisWeek: [
      "Show someone where your kit is.",
      "Learn the two words to say on 999.",
      "Start a symptom diary.",
    ],
    ask: "What should I and my family do if I start to show signs of an adrenal crisis?",
    interactive: {
      kind: "timeline",
      title: "In an adrenal crisis",
      steps: [
        { id: "inject", when: "First", title: "Inject hydrocortisone", points: ["Inject 100mg of hydrocortisone if you have a kit.", "Anyone can give it, including you.", "If in doubt, inject."] },
        { id: "call", when: "Straight away", title: "Call 999", points: ["Call 999 even after the injection.", "Say “steroid-dependent” and “adrenal crisis”.", "Describe the symptoms."] },
        { id: "wait", when: "While waiting", title: "Wait safely", points: ["Sit or lie down somewhere safe and warm.", "Leave the door unlocked.", "Have your steroid emergency card ready."] },
        { id: "hospital", when: "Afterwards", title: "Hospital", points: ["Go to hospital for monitoring.", "You may need more hydrocortisone and fluids."] },
      ],
    },
    sources: [NHS_ADDISONS, ADSHG_EMERGENCY, ADSHG_CRISIS, NHSI_ADDISONS, NICE_NG243],
    quiz: {
      question: "You have given yourself the emergency injection. What next?",
      options: [{ text: "Call 999", right: true }, { text: "Wait to see if you feel better" }, { text: "Have a sleep" }],
      why: "The NHS says it is important to call 999 even if you have given yourself an emergency steroid injection.",
    },
  },
  {
    id: "add-tablets",
    kicker: "Treatment",
    question: "How do hydrocortisone and fludrocortisone work?",
    hook: "Tablets taken at the right times through the day stand in for the hormones the adrenal glands no longer make.",
    short: "Hydrocortisone replaces cortisol and is usually taken 2 or 3 times a day, with the biggest dose on waking. Fludrocortisone replaces aldosterone, which helps the body keep salt. Both are usually taken every day for life, and should never be stopped suddenly.",
    sections: [
      {
        heading: "Replacing what is missing",
        paragraphs: [
          "There is currently no cure for Addison's disease, but there are medicines that can help manage it. The main treatment is steroid medicine to replace the missing hormones, usually taken every day for the rest of your life.",
          "Hydrocortisone replaces cortisol. Fludrocortisone replaces aldosterone, and is only taken by people with Addison's disease rather than other kinds of adrenal insufficiency. Some people take prednisolone instead of hydrocortisone.",
        ],
      },
      {
        heading: "Hydrocortisone through the day",
        paragraphs: [
          "In a healthy body, cortisol starts to rise at around 3am and is very low by 10pm. Hydrocortisone is spaced out to copy this curve, with the largest dose first thing in the morning and smaller doses later.",
          "Standard tablets are usually taken 2 or 3 times a day, with or just after a snack or meal so they do not upset your stomach. It takes 20 to 30 minutes for a tablet to start to be absorbed.",
          "Slow-release tablets are usually taken once a day, about half an hour before breakfast. Do not eat grapefruit or drink grapefruit juice while taking hydrocortisone, as it can change the way it works.",
        ],
      },
      {
        heading: "Fludrocortisone and salt",
        paragraphs: [
          "Aldosterone acts on the kidneys to tell them to keep salt in the body. Fludrocortisone does this job, and is usually taken in one or two doses a day.",
          "A blood test called plasma renin is used to check the dose. Swollen feet and ankles can be a sign of too much salt or fludrocortisone, and liquorice is best avoided because it makes the body keep salt in the same way.",
        ],
      },
      {
        heading: "Finding the right dose",
        paragraphs: [
          "Doses vary a lot from person to person. Your medicine can be fine-tuned over weeks and months, and it can take several months or longer to find what works for you.",
          "The most common side effects of hydrocortisone tablets are feeling dizzy, headaches, swollen ankles and feeling weak or tired. Taking a higher dose than needed for a long time can lead to problems such as weakened bones, mood swings and difficulty sleeping.",
        ],
      },
      {
        heading: "Never stop suddenly",
        paragraphs: [
          "Do not stop taking hydrocortisone without talking to your doctor. Stopping suddenly can bring your symptoms back and cause severe tiredness, weakness, dizziness and pain.",
          "People with Addison's disease are entitled to free NHS prescriptions. In England you need a prescription exemption certificate unless you are 60 or over.",
        ],
      },
    ],
    helps: [
      "Take your medicine every day, and always have enough so you do not run out.",
      "Take standard tablets with or just after a snack or meal.",
      "If you often forget doses, set an alarm or ask your pharmacist about other ways to remember.",
      "Do not eat grapefruit or drink grapefruit juice.",
      "Tell your endocrinologist how you feel on your medicine, so the dose and timing can be adjusted.",
      "If you live in England and are under 60, get a prescription exemption certificate.",
    ],
    tryThisWeek: [
      "Set an alarm for each dose.",
      "Check your prescription supply.",
      "Note how you feel on your doses.",
    ],
    ask: "Is my dose and timing right for me, and when will my renin be checked?",
    interactive: {
      kind: "flip-cards",
      title: "Your daily medicines",
      intro: "Turn each card to see what the medicine does.",
      cards: [
        { id: "hydrocortisone", front: "Hydrocortisone", when: "Usually 2 or 3 times a day", back: "Replaces cortisol. The largest dose is taken first thing in the morning, with smaller doses later." },
        { id: "fludrocortisone", front: "Fludrocortisone", when: "Usually once or twice a day", back: "Replaces aldosterone, which tells the kidneys to keep salt. Only taken by people with Addison's disease." },
        { id: "prednisolone", front: "Prednisolone", when: "Most often once, on waking", back: "Lasts longer in the body than hydrocortisone. Sometimes used when taking doses 3 times a day is hard." },
        { id: "slow", front: "Slow-release hydrocortisone", when: "Once a day, before breakfast", back: "Releases the medicine gradually through the day. Swallow whole; do not break or crush the tablets." },
      ],
    },
    sources: [NHS_ADDISONS, NHS_HC_HOW, ADSHG_MEDICATION, ADSHG_CORTISOL, NHS_HC_ABOUT, NICE_NG243, ADSHG_SALT, NHSI_ADDISONS],
    quiz: {
      question: "Why is the largest hydrocortisone dose taken in the morning?",
      options: [{ text: "To copy the body's natural cortisol curve", right: true }, { text: "So later doses can be skipped" }, { text: "Because it works only in daylight" }],
      why: "Hydrocortisone is spaced out to copy this curve, with the largest dose first thing in the morning and smaller doses later.",
    },
  },
  {
    id: "add-sick-day-rules",
    kicker: "Treatment",
    question: "What are the sick day rules?",
    hook: "A cold or a stomach bug that others shrug off can tip someone with Addison's into a crisis. Extra doses help.",
    short: "When you are ill or injured your body needs more cortisol, so the sick day rules tell you when to take extra medicine. The self-help group says to start straight away and keep it up for 48 hours. If you vomit a dose and then vomit again, use your emergency injection and go to the emergency department.",
    sections: [
      {
        heading: "Why illness needs more",
        paragraphs: [
          "When the body has an illness, an injury or great strain, it needs more cortisol than usual. Your normal dose may not be enough, or being sick may stop you absorbing your tablets.",
          "The sick day rules help keep you safe and lower the chance of an adrenal crisis. They are guidance rather than fixed rules, so listen to your body, and your specialist will advise you.",
        ],
      },
      {
        heading: "When to use them",
        paragraphs: [
          "The self-help group says to use them if you have vomiting or diarrhoea but can still keep food and drink down, an illness that needs bed rest or antibiotics, a broken bone or other injury, or a fever over 37 and a half degrees.",
          "You may also need extra medicine before surgery or during stressful times such as exams. NICE says extra doses can be considered for 1 or 2 days during psychological stress.",
        ],
      },
      {
        heading: "How they work",
        paragraphs: [
          "Start by taking extra medicine straight away, and keep the higher dose for 48 hours. If you feel better, go back to your usual dose.",
          "If you do not feel better after 48 hours, keep taking the extra dose and speak to your GP or endocrine nurse or doctor. If you are taking antibiotics, keep the higher dose until you finish the course or feel completely back to normal.",
          "Come back down gradually as you feel better, rather than dropping to your usual dose in one go.",
        ],
      },
      {
        heading: "If you are being sick",
        paragraphs: [
          "If you vomit within 30 minutes of taking a dose, take a double dose once the vomiting stops. If you vomit again within 30 minutes, use your emergency injection and go to the emergency department.",
          "If you keep on vomiting you will become dehydrated, and you will need to go to hospital for a drip to prevent an adrenal crisis. A temperature over 39 degrees can mean a severe infection or the start of an adrenal crisis, so seek medical advice straight away.",
        ],
      },
      {
        heading: "Be ready before you are ill",
        paragraphs: [
          "Always keep three months' reserve of your steroid medicine, so you have enough for extra doses or a shortage. Rest, and drink regularly: dark yellow pee means you need more fluids.",
          "The self-help group strongly recommends the free NHS flu jab, to lower the risk of an adrenal crisis from flu.",
        ],
      },
    ],
    helps: [
      "When you are ill, start extra medicine straight away and keep it up for 48 hours.",
      "If you vomit a dose within 30 minutes, take a double dose once the vomiting stops.",
      "Ask your endocrine nurse or doctor how to bring an increased dose down safely.",
      "Keep three months' reserve of your steroid medicine.",
      "Drink regularly, and use the colour of your pee as a guide.",
      "Get your free NHS flu jab.",
    ],
    tryThisWeek: [
      "Check you have three months' supply.",
      "Book your flu jab.",
      "Ask how to bring doses down safely.",
    ],
    ask: "What are my sick day rules, written down?",
    interactive: {
      kind: "scenarios",
      title: "What would you do?",
      scenarios: [
        {
          id: "fever",
          situation: "You have flu and a temperature over 37 and a half degrees.",
          options: [{ text: "Start extra medicine straight away", best: true }, { text: "Wait a few days to see" }],
          why: "Start by taking extra medicine straight away, and keep the higher dose for 48 hours.",
        },
        {
          id: "vomit",
          situation: "You are sick 20 minutes after your morning tablets.",
          options: [{ text: "Double dose once the vomiting stops", best: true }, { text: "Skip that dose" }],
          why: "If you vomit within 30 minutes of taking a dose, take a double dose once the vomiting stops.",
        },
        {
          id: "again",
          situation: "You are sick again within 30 minutes of the double dose.",
          options: [{ text: "Use your injection and go to A&E", best: true }, { text: "Try another tablet later" }],
          why: "If you vomit again within 30 minutes, use your emergency injection and go to the emergency department.",
        },
        {
          id: "antibiotics",
          situation: "You start a course of antibiotics.",
          options: [{ text: "Keep it up until the course ends", best: true }, { text: "Take extra for one day only" }],
          why: "If you are taking antibiotics, keep the higher dose until you finish the course or feel completely back to normal.",
        },
        {
          id: "better",
          situation: "After 48 hours of extra doses you feel better.",
          options: [{ text: "Come back down gradually", best: true }, { text: "Keep the extra dose for weeks" }],
          why: "If you feel better, go back to your usual dose. Come back down gradually as you feel better.",
        },
      ],
    },
    sources: [ADSHG_SICK_DAY, NICE_NG243, NHS_ADDISONS, NHSI_ADDISONS, ADSHG_MEDICATION],
    quiz: {
      question: "How long does the self-help group say to keep extra doses going at first?",
      options: [{ text: "48 hours", right: true }, { text: "Two weeks" }, { text: "One dose only" }],
      why: "Start by taking extra medicine straight away, and keep the higher dose for 48 hours.",
    },
  },
  {
    id: "add-injection",
    kicker: "Treatment",
    question: "What is the emergency injection, and when is it used?",
    hook: "One injection of hydrocortisone into a muscle keeps you safe until help arrives. Anyone is allowed to give it.",
    short: "The emergency kit holds hydrocortisone to inject into a muscle if you are being sick and cannot keep tablets down, or are showing signs of an adrenal crisis. You, or anyone with you, can give it. Afterwards, call 999.",
    sections: [
      {
        heading: "What it is for",
        paragraphs: [
          "Adrenal crisis is a medical emergency and can usually be treated with an injection of steroid medicine. You should be given an emergency kit so you can give the injection yourself if needed.",
          "The kit holds hydrocortisone that you or someone with you can inject if you are being sick and cannot absorb your tablets, or are showing other signs of severe illness. If there is a delay in getting an ambulance, or in a busy A&E, the injection keeps you safe from the adrenal point of view until you get more care.",
        ],
      },
      {
        heading: "What is in a kit",
        paragraphs: [
          "NICE says people with Addison's disease should be given 2 or 3 emergency kits. Each holds a hydrocortisone injection, two needles, two syringes, easy-to-follow written instructions with pictures, and steroid emergency cards.",
          "New prescriptions are for hydrocortisone powder, which is mixed with water before it is injected. Liquid hydrocortisone was discontinued in the UK in 2026. The powder is more stable in hot weather above 25°C.",
          "Your GP or endocrinology team can prescribe the medicine for the kit. If you are not offered one, ask your GP.",
        ],
      },
      {
        heading: "Giving it",
        paragraphs: [
          "The injection goes into a muscle, usually in the upper arm or thigh. You can give it yourself, or someone close by can give it.",
          "By law, anyone who recognises that someone is in adrenal crisis may give their prescribed emergency injection to save their life. That is why it helps to train the people you spend time with.",
          "After an injection, call 999. The NHS says to call 999 even if you have given yourself the injection, and you will need to go to hospital for monitoring.",
        ],
      },
      {
        heading: "Practice makes a difference",
        paragraphs: [
          "In one study, the share of people who would inject themselves rose from 68% to 91% after an education programme. Research also found that 38% of people who injected themselves were admitted to hospital, against 73% of those who waited for a healthcare professional.",
          "The self-help group suggests practising at least twice a year, on 1 March and 1 September. You can practise at home by injecting into an orange, and with videos and picture leaflets.",
        ],
      },
      {
        heading: "Look after your kit",
        paragraphs: [
          "Check the expiry dates on the hydrocortisone, needles and syringes, and replace them as needed. Taping the expiry date to the box is a good reminder.",
          "Keep spare kits in different places, and check them before travelling in case a vial has broken.",
        ],
      },
    ],
    helps: [
      "Ask your GP for an emergency kit if you have not been offered one.",
      "Learn how to give the injection, and teach family, friends or colleagues too.",
      "Practise on 1 March and 1 September each year.",
      "Check the expiry dates and replace anything out of date.",
      "Keep the picture instructions inside your kit.",
      "After using the injection, call 999.",
    ],
    tryThisWeek: [
      "Check your kit's expiry dates.",
      "Show someone how to use it.",
      "Put the practice days in your diary.",
    ],
    ask: "Can I have an emergency injection kit and be shown how to use it?",
    interactive: {
      kind: "scenarios",
      title: "When to use the injection",
      scenarios: [
        {
          id: "vomiting",
          situation: "You are being sick and cannot keep your tablets down.",
          options: [{ text: "Use your emergency injection", best: true }, { text: "Wait until tomorrow" }],
          why: "The kit holds hydrocortisone that you or someone with you can inject if you are being sick and cannot absorb your tablets.",
        },
        {
          id: "unsure",
          situation: "You feel very unwell and are not sure it is a crisis.",
          options: [{ text: "If in doubt, inject", best: true }, { text: "Hold off in case it is too much" }],
          why: "The self-help group says if in doubt, inject. There is no known toxic dose of hydrocortisone in an emergency.",
        },
        {
          id: "after",
          situation: "You have injected and feel a little better.",
          options: [{ text: "Call 999 anyway", best: true }, { text: "No need to call now" }],
          why: "The NHS says to call 999 even if you have given yourself the injection.",
        },
        {
          id: "friend",
          situation: "A friend asks if they are allowed to inject you.",
          options: [{ text: "Yes, the law allows anyone to", best: true }, { text: "Only a nurse can" }],
          why: "By law, anyone who recognises that someone is in adrenal crisis may give their prescribed emergency injection to save their life.",
        },
      ],
    },
    sources: [ADSHG_INJECTION, NICE_NG243, ADSHG_EMERGENCY, NHS_ADDISONS, ADSHG_TRAINING, ADSHG_CRISIS],
    quiz: {
      question: "Who can give the emergency hydrocortisone injection?",
      options: [{ text: "Anyone, including you", right: true }, { text: "Only a doctor" }, { text: "Only a paramedic" }],
      why: "You can give it yourself, or someone close by can give it.",
    },
  },
  {
    id: "add-operations",
    kicker: "Treatment",
    question: "What happens with operations, dental work and tests?",
    hook: "A filling or a planned operation puts strain on the body, so the steroid plan needs to change for the day.",
    short: "Surgery, dental work and some medical procedures put physical stress on the body, so you may need a higher dose of hydrocortisone for a while. Tell everyone treating you about your diagnosis, show your steroid emergency card, and plan treatment ahead.",
    sections: [
      {
        heading: "Why procedures need extra",
        paragraphs: [
          "The body needs more cortisol at times of physical stress, so any kind of surgery means adjusting your medicine. You may need a bigger dose of hydrocortisone for a while if you need an operation or dental treatment.",
          "This also applies to medical procedures such as an endoscopy, and to dental work such as a filling.",
        ],
      },
      {
        heading: "Before an operation",
        paragraphs: [
          "For a planned operation, make sure everyone in your team, from the anaesthetist and surgeon to the nurses, knows about your diagnosis before you go into hospital. The self-help group's Surgical Guidelines tell you and your team how to manage your medicine before, during and after surgery. They still recommend an extra dose by mouth 60 minutes before a minor procedure.",
          "Show your red steroid emergency card to your doctor before surgery or an invasive procedure, so they know you take steroids and can give you extra as needed.",
          "In hospital, staff need to know you need your steroid replacement throughout your stay. This still applies if you are told not to eat or drink.",
        ],
      },
      {
        heading: "At the dentist",
        paragraphs: [
          "Tell your dentist or hygienist about your diagnosis, and remind them at every appointment. Carry your steroid card and emergency kit, and plan treatment ahead rather than having it on the spot.",
          "Most people do not need extra medicine for check-ups or hygienist visits, although being very nervous of the dentist can be an exception. A filling, a tooth taken out or treatment for an abscess does need extra.",
          "In a 2013 survey by the self-help group, 8% of steroid-dependent people said a dental procedure had triggered an adrenal crisis. Dental anaesthetic containing adrenaline is suitable.",
        ],
      },
      {
        heading: "If you feel unwell",
        paragraphs: [
          "If you feel unwell during or after a dental appointment, take an extra dose and see how your body responds. Tell the dentist where your emergency kit is, so they can give the injection if needed.",
          "Tell anyone giving you medical or dental treatment that you take hydrocortisone.",
        ],
      },
    ],
    helps: [
      "Tell anyone giving you medical or dental treatment that you take hydrocortisone.",
      "Share the Surgical Guidelines with your hospital team before a planned operation.",
      "Show your red steroid emergency card before surgery or an invasive procedure.",
      "Plan dental work ahead rather than having it on the spot.",
      "Ask your dentist to keep the guidelines and a list of your steroid medicines in your notes.",
      "For planned major dental work, check with your endocrinology team about extra medicine.",
    ],
    tryThisWeek: [
      "Remind your dentist of your diagnosis.",
      "Download the Surgical Guidelines.",
      "Ask about cover for planned work.",
    ],
    ask: "What should I do before an operation or dental work?",
    interactive: {
      kind: "scenarios",
      title: "Planning ahead",
      scenarios: [
        {
          id: "checkup",
          situation: "You have a routine dental check-up.",
          options: [{ text: "Usually no extra medicine is needed", best: true }, { text: "Always double your dose" }],
          why: "Most people do not need extra medicine for check-ups or hygienist visits, although being very nervous of the dentist can be an exception.",
        },
        {
          id: "filling",
          situation: "You need a filling.",
          options: [{ text: "Plan extra medicine with your dentist", best: true }, { text: "No change is needed" }],
          why: "A filling, a tooth taken out or treatment for an abscess does need extra.",
        },
        {
          id: "planned",
          situation: "You have a planned operation next month.",
          options: [{ text: "Tell the whole team before you go in", best: true }, { text: "Mention it on the day if asked" }],
          why: "Make sure everyone in your team, from the anaesthetist and surgeon to the nurses, knows about your diagnosis before you go into hospital.",
        },
        {
          id: "nil",
          situation: "You are told not to eat or drink before surgery.",
          options: [{ text: "Staff still need to give your steroids", best: true }, { text: "Skip your steroids that day" }],
          why: "Staff need to know you need your steroid replacement throughout your stay. This still applies if you are told not to eat or drink.",
        },
      ],
    },
    sources: [NHS_HC_HOW, NHS_HC_FAQ, NHSI_ADDISONS, ADSHG_SURGERY, ADSHG_SURGERY_FAQ, ADSHG_DENTISTS, NHS_HC_ABOUT],
    quiz: {
      question: "Do you need extra medicine for a tooth filling?",
      options: [{ text: "Yes, so plan it ahead", right: true }, { text: "No, never" }, { text: "Only if it hurts afterwards" }],
      why: "A filling, a tooth taken out or treatment for an abscess does need extra.",
    },
  },
  {
    id: "add-card",
    kicker: "Living well",
    question: "What are the steroid emergency card and medical ID for?",
    hook: "If you cannot speak for yourself, a card in your wallet and a band on your wrist can tell staff what to do.",
    short: "Carry a steroid emergency card at all times: it tells healthcare professionals you have Addison's disease and take steroids that should not be stopped suddenly. Medical ID jewellery engraved with your condition prompts staff to look for the card.",
    sections: [
      {
        heading: "Why carry a card",
        paragraphs: [
          "If you take steroids for Addison's disease, carry a steroid emergency card with you at all times. It tells healthcare professionals you have Addison's disease and take steroid medicine that should not be stopped suddenly.",
          "If you need emergency treatment, it tells medical staff about your condition and how to treat you. It gives life-saving information if you become seriously ill or unconscious and cannot explain your health problems.",
        ],
      },
      {
        heading: "Which card",
        paragraphs: [
          "Adults carry the red NHS steroid emergency card, which is the size of a credit card. Children have a similar adrenal insufficiency card from the British Society for Paediatric Endocrinology and Diabetes.",
          "The NHS card was released in August 2020, with a National Patient Safety Alert, to support early recognition and treatment of adrenal crisis. It has a QR code that links to more specialist advice.",
          "You can also keep a copy of the NHS card on your phone. Show the card before any medical or dental treatment, surgery or invasive procedure.",
        ],
      },
      {
        heading: "Medical ID",
        paragraphs: [
          "You can also get jewellery and wristbands with details of your condition and medicine engraved or printed on them. The self-help group suggests the wording “Adrenal insufficiency (Addison's disease). Steroid-dependent”.",
          "Some healthcare professionals know the term “adrenal insufficiency” better than “Addison's”, and the ID prompts them to look for your card. Choose a design that is easy to recognise as a medical alert.",
          "Medical tattoos can be a helpful prompt, but they are not a reliable form of medical ID on their own.",
        ],
      },
      {
        heading: "Phone and records",
        paragraphs: [
          "NICE says people should be told how to get the card and medical alert jewellery, and how to set up medical alerts, medical IDs and apps on their phones.",
          "You can also register with your local ambulance service, so they have a record that you need a steroid injection or tablets.",
        ],
      },
    ],
    helps: [
      "Carry your steroid emergency card at all times.",
      "Keep a copy of the NHS card on your phone.",
      "Wear medical ID with the words “Adrenal insufficiency” and “Steroid-dependent”.",
      "Show your card before any medical or dental treatment.",
      "Register with your local ambulance service.",
    ],
    tryThisWeek: [
      "Put the card in your wallet.",
      "Save the card on your phone.",
      "Ask your ambulance service to register you.",
    ],
    ask: "Can I have an NHS steroid emergency card, and how do I register with the ambulance service?",
    interactive: {
      kind: "flip-cards",
      title: "Cards and ID",
      intro: "Turn each card to see who it is for and what it does.",
      cards: [
        { id: "red", front: "Red NHS steroid card", when: "Adults", back: "Tells staff you take steroids that should not be stopped suddenly, and how to treat you in an emergency." },
        { id: "child", front: "Adrenal insufficiency card", when: "Children", back: "A similar card for children, from the British Society for Paediatric Endocrinology and Diabetes." },
        { id: "blue", front: "Blue steroid card", when: "Steroids for over 3 weeks", back: "Explains how to reduce the risk of side effects, with details of your doctor, your dose and how long treatment lasts." },
        { id: "jewellery", front: "Medical ID jewellery", when: "Worn every day", back: "Engraved with your condition and medicine. Suggested wording includes “Steroid-dependent”." },
        { id: "phone", front: "Phone copy", when: "Always with you", back: "A copy of the NHS card can be kept on your phone." },
      ],
    },
    sources: [NHS_ADDISONS, NHS_HC_FAQ, NHS_HC_HOW, ADSHG_GET_READY, ADSHG_CARDS, NHSE_CARD, NICE_NG243, NHSI_ADDISONS],
    quiz: {
      question: "What does the steroid emergency card tell healthcare professionals?",
      options: [{ text: "That your steroids should not be stopped suddenly", right: true }, { text: "Your blood group" }, { text: "Your GP's opening hours" }],
      why: "It tells healthcare professionals you have Addison's disease and take steroid medicine that should not be stopped suddenly.",
    },
  },
  {
    id: "add-exercise-heat",
    kicker: "Living well",
    question: "How do exercise, heat and salt affect Addison's?",
    hook: "Sweat carries salt away, and bodies without aldosterone feel it. A little planning keeps you active.",
    short: "Most everyday exercise does not need extra medicine if you stay hydrated and within your limits, but hard, long or unfamiliar exercise may. In hot weather people with Addison's disease lose salt more easily, so drink water and eat salty foods. If you crave salt, eat something salty.",
    sections: [
      {
        heading: "Staying active",
        paragraphs: [
          "Many people with Addison's disease carry on with their normal diet and exercise routines. The same basic rules of sensible exercise apply: warm up, warm down, drink plenty and build up gradually.",
          "Extra hydrocortisone or fludrocortisone is not usually needed for most exercise, as long as you keep well hydrated and exercise within your own limits. Very intense or prolonged exercise, or harsh conditions such as hot weather, may need more.",
        ],
      },
      {
        heading: "Before and after",
        paragraphs: [
          "The self-help group advises a small extra dose before any strenuous, prolonged or unaccustomed exercise, and more if you begin to feel symptoms of low cortisol. If you feel unwell during or after exercise, take an extra dose straight away.",
          "NICE says the dose may need adjusting for things like endurance exercise or an unusually long day.",
          "Wind down sensibly afterwards with something sugary and something salty, and rest properly. Have your emergency kit to hand, especially somewhere remote, and make sure the people you exercise with know what you need.",
        ],
      },
      {
        heading: "Hot weather",
        paragraphs: [
          "In the heat you lose water and salt through sweat. People with Addison's disease are more likely to become dehydrated or short of salt, because their bodies do not make aldosterone.",
          "Be guided by your thirst and drink plenty of water. Signs of dehydration include light-headedness, feeling washed out, muscle cramps and headaches that will not go away, and salty foods such as soup, or rehydration salts, help quickly.",
          "A higher fludrocortisone dose takes at least a couple of days to work, so it is not a quick fix. Ideally talk to your endocrinologist before changing it, especially if you have high blood pressure or a heart condition.",
        ],
      },
      {
        heading: "Listen to salt cravings",
        paragraphs: [
          "Unlike most people, if you feel the urge to eat something salty, then eat it. Normal advice to avoid too much salt does not apply to people with Addison's disease.",
          "The self-help group says the 6 grams of salt a day recommended for healthy people is too little for people with Addison's disease. Use real table salt rather than low-salt products, which contain potassium instead.",
          "Puffy feet and ankles can be a sign of too much salt or fludrocortisone, and liquorice is best avoided.",
        ],
      },
    ],
    helps: [
      "Take a small extra dose before strenuous, prolonged or unaccustomed exercise.",
      "Drink plenty of fluids and pay attention to salt, especially during hard events.",
      "Carry your emergency kit and steroid card when you exercise.",
      "In hot weather, drink water and eat salty foods such as soup or salty snacks.",
      "Talk to your endocrinologist before changing your fludrocortisone dose.",
      "Listen to salt cravings, and use real table salt.",
    ],
    tryThisWeek: [
      "Pack a salty snack for exercise.",
      "Tell exercise partners about your kit.",
      "Ask about your fludrocortisone dose.",
    ],
    ask: "Is my dose right for my energy and activity, including in hot weather?",
    interactive: {
      kind: "scenarios",
      title: "Activity and heat",
      scenarios: [
        {
          id: "run",
          situation: "You plan a long, hard run you are not used to.",
          options: [{ text: "Small extra dose before, plenty to drink", best: true }, { text: "Push on and see how you feel" }],
          why: "The self-help group advises a small extra dose before any strenuous, prolonged or unaccustomed exercise.",
        },
        {
          id: "heat",
          situation: "On a hot day you feel light-headed and have cramps.",
          options: [{ text: "Drink water and have something salty", best: true }, { text: "Just drink a little less" }],
          why: "Signs of dehydration include light-headedness and muscle cramps, and salty foods such as soup, or rehydration salts, help quickly.",
        },
        {
          id: "crave",
          situation: "You suddenly crave salty crisps.",
          options: [{ text: "Have something salty", best: true }, { text: "Ignore the craving" }],
          why: "Unlike most people, if you feel the urge to eat something salty, then eat it.",
        },
        {
          id: "losalt",
          situation: "The only salt at home is a low-salt product.",
          options: [{ text: "Get real table salt", best: true }, { text: "Low-salt works the same" }],
          why: "Use real table salt rather than low-salt products, which contain potassium instead.",
        },
      ],
    },
    sources: [ADSHG_EXERCISE, ADSHG_HEAT, ADSHG_SALT, NHSI_ADDISONS, NICE_NG243],
    quiz: {
      question: "Does most everyday exercise need extra hydrocortisone?",
      options: [{ text: "Not usually, if you stay hydrated and within your limits", right: true }, { text: "Yes, always double your dose" }, { text: "Exercise should be avoided" }],
      why: "Extra hydrocortisone or fludrocortisone is not usually needed for most exercise, as long as you keep well hydrated and exercise within your own limits.",
    },
  },
  {
    id: "add-travel",
    kicker: "Living well",
    question: "How do I travel safely with Addison's?",
    hook: "Double the tablets, the kit in your hand luggage and the crisis guidelines in the local language.",
    short: "Pack extra medicine, usually double what you would normally need, plus your injection kit, and carry them in your hand luggage with a doctor's letter. Take your steroid card and the adrenal crisis guidelines in the local language. Vomiting abroad is always an emergency.",
    sections: [
      {
        heading: "Before you go",
        paragraphs: [
          "Take enough medicine to follow the sick day rules while you are away. NHS inform says to pack extra medication, usually double what you would normally need, plus your injection kit.",
          "Order your repeat prescription well ahead, and keep a copy of it with you in case you need an emergency supply. Check that your travel insurance covers medical expenses and that you have declared all your conditions.",
          "Find the nearest hospital with an emergency department before you leave, and ask a travel companion to learn how to give your injection.",
        ],
      },
      {
        heading: "Paperwork",
        paragraphs: [
          "Get a letter from your GP explaining that you need to carry medicine, needles and syringes. Carry your steroid emergency card and the adrenal crisis guidelines, which the self-help group offers in more than 20 languages.",
          "If you are going to Europe, also get a Global Health Insurance Card. It is not an alternative to travel insurance.",
        ],
      },
      {
        heading: "On the journey",
        paragraphs: [
          "Carry your medicine and injection kit in your hand luggage, with your doctor's note. Split spares between separate bags, so you still have some if luggage is lost.",
          "There is no limit on the number of tablets you can take through airport security, but you need a prescription or documents from a medical professional. Rules can change, so check with the airline before you travel.",
          "NICE says your team should explain how to adjust the timing of your doses when travelling through time zones.",
        ],
      },
      {
        heading: "While you are away",
        paragraphs: [
          "Keep tablets and injections out of direct sunlight. Hydrocortisone powder for injection is more stable in hot weather above 25°C.",
          "Drink plenty, especially in the heat or on a plane, and carry salty snacks, as bottled water is often low in sodium. Take care with food to avoid stomach bugs.",
        ],
      },
      {
        heading: "If you are sick abroad",
        paragraphs: [
          "Vomiting in someone who depends on steroids is always a medical emergency. The self-help group advises using your injection within 30 minutes of starting to vomit, then seeking medical advice or calling the local emergency number.",
          "That is 999 in the UK and 112 in much of Europe and Turkey.",
        ],
      },
    ],
    helps: [
      "Pack double your usual medicine, plus your injection kit.",
      "Keep your medicine and kit in hand luggage, with a letter from your doctor.",
      "Carry the adrenal crisis guidelines in the local language.",
      "Find the nearest emergency department before you go.",
      "Ask your team how to time your doses across time zones.",
      "Get travel insurance that covers all your conditions.",
    ],
    tryThisWeek: [
      "Order your repeat prescription early.",
      "Download the crisis guidelines.",
      "Ask your GP for a travel letter.",
    ],
    ask: "How should I time my doses across time zones, and can I have extra supplies for my trip?",
    interactive: {
      kind: "timeline",
      title: "Getting ready for a trip",
      steps: [
        { id: "plan", when: "Weeks before", title: "Plan", points: ["Order your repeat prescription early.", "Check your insurance covers your conditions.", "Get a letter from your GP."] },
        { id: "pack", when: "Packing", title: "Pack", points: ["Double your usual medicine.", "Your injection kit, in date.", "Steroid card and crisis guidelines."] },
        { id: "journey", when: "Travelling", title: "Keep it close", points: ["Medicine and kit in hand luggage.", "Spares in a different bag."] },
        { id: "away", when: "While away", title: "Stay well", points: ["Drink plenty and have salty snacks.", "If you vomit, inject within 30 minutes and get help."] },
      ],
    },
    sources: [ADSHG_TRAVEL, ADSHG_HOLIDAYS, NHSI_ADDISONS, NICE_NG243],
    quiz: {
      question: "How much medicine does NHS inform suggest packing for a trip?",
      options: [{ text: "Usually double what you would normally need", right: true }, { text: "Exactly what you need" }, { text: "Half, to save space" }],
      why: "NHS inform says to pack extra medication, usually double what you would normally need, plus your injection kit.",
    },
  },
  {
    id: "add-energy",
    kicker: "Living well",
    question: "How do energy, mood and everyday life go with Addison's?",
    hook: "Low-energy days are common, and they are worth talking about: the dose, the timing and support can all help.",
    short: "With treatment, people with Addison's disease can have a good quality of life with a normal life expectancy, but bouts of tiredness are common. Your dose can affect energy and mood, so tell your team how you feel. Emotional stress matters too, and support is there at home and at work.",
    sections: [
      {
        heading: "A condition you live with",
        paragraphs: [
          "Addison's disease is a serious condition that can be challenging to live with. You need to remember your medicine every day, and there may be times when your symptoms get worse.",
          "But with treatment, you can have a good quality of life with a normal life expectancy. Bouts of tiredness are common, and it can take some time to learn how to manage these periods of low energy.",
        ],
      },
      {
        heading: "Energy and your dose",
        paragraphs: [
          "People with adrenal insufficiency say the dose of their medicine affects appetite, energy levels, mood and mental health. Missing a dose, or taking it late, can lead to exhaustion or difficulty sleeping.",
          "If your dose does not seem to last until the next tablet, talk to your endocrinologist about changing the dose or the timing. You will usually see an endocrinologist every 6 to 12 months, and appointments are a chance to talk about your symptoms, how well your medicine is working and how confident you feel.",
        ],
      },
      {
        heading: "Mood and stress",
        paragraphs: [
          "Anxiety and depression can be symptoms of Addison's disease, and some people find that taking regular medicine affects their emotional health. Depression shares some symptoms with it, such as being tired and having difficulty concentrating, so it can be hard to tell them apart.",
          "Emotional stress has been reported as the trigger in up to 1 in 6 adrenal crises. NICE says extra doses can be considered for 1 or 2 days during psychological stress, such as a bereavement or exams.",
          "If you have had symptoms of anxiety or depression for two weeks or more, talk to your GP. NICE says you may be referred, or can refer yourself, to NHS talking therapies. If you have thoughts about harming yourself or ending your life, call 999 or go to A&E.",
        ],
      },
      {
        heading: "Work and everyday life",
        paragraphs: [
          "People with Addison's disease are covered by the definition of disability under the Equality Act 2010, or the Disability Discrimination Act 1995 in Northern Ireland. You do not have to share your diagnosis at work, but because of the risk of adrenal crisis it is strongly recommended to tell someone there.",
          "Reasonable adjustments might include flexible working hours, time off for appointments, a quiet space to rest or take medicine, and a plan for an adrenal crisis. Access to Work can give a grant for practical support at work, but it does not pay for the reasonable adjustments that employers are legally required to make.",
        ],
      },
    ],
    helps: [
      "Tell your endocrinologist how you feel, including whether each dose lasts.",
      "Keep a log of your low cortisol symptoms to spot patterns.",
      "Talk to people who understand, such as on the self-help group's online forum.",
      "Try relaxation techniques such as mindful breathing.",
      "Talk to your GP if you have felt anxious or low for two weeks or more.",
      "Explore reasonable adjustments with your employer.",
    ],
    tryThisWeek: [
      "Start a symptom log on your phone.",
      "Try some mindful breathing.",
      "Note whether each dose lasts.",
    ],
    ask: "Is my dose right for my energy and activity?",
    interactive: {
      kind: "signs",
      title: "Is my dose right?",
      intro: "NICE lists signs that replacement may be too low or too high. Tick any you have noticed.",
      signs: [
        "Weight loss or poor appetite",
        "Feeling full quickly",
        "Feeling sick",
        "Tiredness that stops daily activities",
        "Skin getting darker",
        "Muscle weakness",
        "Weight gain or a bigger appetite",
        "Disturbed sleep",
        "Light-headedness or salt craving",
        "Swollen ankles",
      ],
      after: "Take these to your next review, so your endocrinologist can look at the dose or the timing.",
      copyHeading: "To discuss at my next review",
    },
    sources: [NHS_ADDISONS, NHSI_ADDISONS, ADSHG_CORTISOL, ADSHG_STRESS, ADSHG_REDUCE_STRESS, NICE_NG243, ADSHG_EMPLOYEES, GOV_ATW, NHS_HC_SIDE],
    quiz: {
      question: "What can the dose of your medicine affect?",
      options: [{ text: "Appetite, energy levels, mood and mental health", right: true }, { text: "Only your blood pressure" }, { text: "Nothing you would notice" }],
      why: "People with adrenal insufficiency say the dose of their medicine affects appetite, energy levels, mood and mental health.",
    },
  },
];
