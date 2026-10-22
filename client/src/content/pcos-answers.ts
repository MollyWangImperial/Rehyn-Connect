import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Polycystic ovary syndrome (PCOS) page's pieces
// (content/library-conditions/metabolism-more.ts). Every sentence was written from wording checked on
// 21 October 2026 on the pages listed under each answer's `sources`; nothing is added that those pages do
// not say. Most of it comes from the NHS, Verity (the UK PCOS charity), the Royal College of Obstetricians
// and Gynaecologists (RCOG) and NICE's Clinical Knowledge Summary. On 12 May 2026 PCOS was renamed
// polyendocrine metabolic ovarian syndrome (PMOS); the NHS and Verity now use the new name, and the answers
// say so. General information only; it never replaces what a person's own team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const verity = (label: string, path: string): LearnSource => ({ label: `Verity: ${label}`, url: `https://www.verity-pcos.org.uk/${path}` });
const cks = (label: string, path: string): LearnSource => ({ label: `NICE CKS: Polycystic ovary syndrome, ${label}`, url: `https://cks.nice.org.uk/topics/polycystic-ovary-syndrome/${path}` });

const NHS_PMOS = nhs("Polyendocrine metabolic ovarian syndrome (PMOS)", "conditions/polyendocrine-metabolic-ovarian-syndrome-pmos/");
const NHS_HIRSUTISM = nhs("Excessive hair growth (hirsutism)", "symptoms/hirsutism/");
const NHS_HAIR_LOSS = nhs("Hair loss", "symptoms/hair-loss/");
const NHS_ACNE = nhs("Acne", "conditions/acne/");
const NHS_IRREGULAR = nhs("Irregular periods", "symptoms/irregular-periods/");
const NHS_INFERTILITY = nhs("Infertility", "conditions/infertility/");
const NHS_INFERT_TREAT = nhs("Infertility: treatment", "conditions/infertility/treatment/");
const NHS_IVF = nhs("IVF", "tests-and-treatments/ivf/");
const NHS_TRYING = nhs("Trying to get pregnant", "pregnancy/trying-for-a-baby/trying-to-get-pregnant/");
const NHS_GD = nhs("Gestational diabetes", "conditions/gestational-diabetes/");
const NHS_METFORMIN = nhs("Metformin", "medicines/metformin/");
const NHS_SPIRO = nhs("Spironolactone", "medicines/spironolactone/");
const NHS_OBESITY = nhs("Overweight and obesity in adults", "conditions/overweight-and-obesity/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");
const NHS_TALKING = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };
const RCOG: LearnSource = { label: "RCOG: Polycystic ovary syndrome (PCOS): what it means for your long-term health", url: "https://www.rcog.org.uk/for-the-public/browse-our-patient-information/polycystic-ovary-syndrome-pcos-what-it-means-for-your-long-term-health/" };

const VERITY_HOME = verity("The UK PCOS charity", "");
const VERITY_ABOUT = verity("About us", "about-us.html");
const VERITY_WHAT = verity("What is PMOS?", "what-is-pmos.html");
const VERITY_SYMPTOMS = verity("What are the symptoms of PMOS?", "symptoms-of-pmos.html");
const VERITY_CAUSES = verity("What causes PMOS?", "what-causes-pmos.html");
const VERITY_LONG_TERM = verity("PMOS has serious long term health risks", "long-term-health.html");
const VERITY_DIAGNOSIS = verity("How do you get diagnosed with PMOS?", "diagnosing-pmos.html");
const VERITY_MYTHS = verity("PMOS myths", "pmos-myths.html");

const CKS_ADULTS = cks("management in adults", "management/management-adults/");
const CKS_COMPLICATIONS = cks("complications", "background-information/complications/");
const CKS_CAUSES = cks("causes", "background-information/causes/");
const CKS_DIAGNOSIS = cks("diagnosis", "diagnosis/diagnosis/");
const CKS_INVESTIGATIONS = cks("investigations", "diagnosis/investigations/");

export const pcosAnswers: LearnArticle[] = [
  {
    id: "pcos-what-it-is",
    kicker: "Understanding",
    question: "What is PCOS?",
    hook: "A common hormone condition that affects how the ovaries work, and how the body responds to insulin.",
    short: "Polycystic ovary syndrome (PCOS) is a hormone condition that can affect hair growth, periods, fertility and mood. On 12 May 2026 it was renamed polyendocrine metabolic ovarian syndrome (PMOS). The cause is unknown, but it may be to do with hormones such as insulin and testosterone not working properly. There is no cure, but treatments and lifestyle changes can help.",
    sections: [
      {
        heading: "A hormone condition",
        paragraphs: [
          "Polycystic ovary syndrome, or PCOS, is a hormone condition that can affect hair growth, periods, fertility and mood. It can affect anyone who has ovaries.",
          "Verity, the UK PCOS charity, says it affects 1 in 8 women in the UK. It is much more than a condition affecting periods or fertility, and symptoms vary considerably from person to person.",
        ],
      },
      {
        heading: "A new name: PMOS",
        paragraphs: [
          "On 12 May 2026, the name was changed to polyendocrine metabolic ovarian syndrome, or PMOS. The NHS now uses the new name, and Verity is using both names during a three-year transition.",
          "Verity says the old name was misleading. You do not need to have ovarian cysts to have it, and what is commonly seen on an ultrasound are immature follicles rather than true cysts.",
        ],
      },
      {
        heading: "Insulin and testosterone",
        paragraphs: [
          "Insulin is a hormone that controls the level of glucose, a type of sugar, in the blood. If you have PCOS, your body may not respond to insulin. This is known as insulin resistance, and to stop glucose levels rising, the body produces even more insulin.",
          "High levels of insulin can lead to weight gain, irregular periods, fertility problems and higher levels of testosterone. Testosterone is produced in small amounts by the ovaries in all women, and women with PCOS have slightly higher than normal levels.",
          "NICE's clinical summary says insulin resistance is present in around 65 to 80% of women with PCOS, whether or not they are living with obesity, though excess weight can make it worse.",
        ],
      },
      {
        heading: "What causes it",
        paragraphs: [
          "The cause is unknown, but it may be to do with hormones such as insulin and testosterone not working properly.",
          "It sometimes runs in families. If your mother, aunts or sisters have PCOS, your risk may be increased. You may also be more likely to have it if you are from an Asian background.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you might have PCOS, or your symptoms are affecting your everyday life, work and relationships.",
      "Look to evidence-based information, such as Verity, the international PCOS guidelines and NICE, as there is a lot of misinformation on social media.",
      "Eat a healthy, balanced diet and exercise regularly, which can help your symptoms.",
      "Talk to your doctor if you are worried about the long-term risks.",
    ],
    tryThisWeek: [
      "See a GP if symptoms affect your life.",
      "Use evidence-based sources.",
      "Ask your doctor about long-term risks.",
    ],
    ask: "Do I have insulin resistance, and what would help with mine?",
    interactive: {
      kind: "flip-cards",
      title: "The hormones involved",
      intro: "Turn each card to see what the hormone does, and how it can differ in PCOS.",
      cards: [
        { id: "insulin", front: "Insulin", when: "Made by the pancreas", back: "Regulates glucose in the blood. Many with PCOS have insulin resistance, so the body makes more insulin." },
        { id: "testosterone", front: "Testosterone", when: "Made in small amounts by the ovaries", back: "Slightly higher than normal in PCOS. High insulin can cause the ovaries to make too much." },
        { id: "lh", front: "LH", when: "Luteinising hormone", back: "Stimulates ovulation. For some with PCOS, levels are higher than normal." },
        { id: "fsh", front: "FSH", when: "Follicle stimulating hormone", back: "Develops follicles for ovulation. For some with PCOS, levels are below normal." },
        { id: "progesterone", front: "Progesterone", when: "A hormone of the menstrual cycle", back: "Regulates the thickness of the womb lining. For some with PCOS, levels are below normal." },
      ],
    },
    sources: [NHS_PMOS, VERITY_HOME, VERITY_WHAT, RCOG, CKS_CAUSES, VERITY_CAUSES],
    quiz: {
      question: "Do you need cysts on your ovaries to have PCOS?",
      options: [{ text: "No", right: true }, { text: "Yes, always" }, { text: "Only after the age of 40" }],
      why: "You do not need to have ovarian cysts to have it, and what is commonly seen on an ultrasound are immature follicles rather than true cysts.",
    },
  },
  {
    id: "pcos-symptoms",
    kicker: "Understanding",
    question: "What are the symptoms of PCOS?",
    hook: "Periods, hair, skin, weight and mood. Not everyone has all of them, and some people have none.",
    short: "The main symptoms include irregular periods, extra hair growth or hair loss, oily skin and acne, weight gain or difficulty losing weight, difficulty getting pregnant, and depression or anxiety. Symptoms usually start at puberty and can be mild or severe. Some people have no symptoms at all.",
    sections: [
      {
        heading: "The main symptoms",
        paragraphs: [
          "The main symptoms include irregular periods or long gaps between periods, excessive hair growth or hair loss, weight gain or difficulty losing weight, and difficulty getting pregnant.",
          "Other symptoms include oily skin and acne, feeling very tired, mental health problems such as depression or anxiety, and thick, dark patches of skin on the neck or armpits, called acanthosis nigricans.",
        ],
      },
      {
        heading: "Different for everyone",
        paragraphs: [
          "Symptoms can be mild or severe, or you may have no symptoms at all. Not everyone will have all of them, and some have a wider range of more severe symptoms.",
          "Women with PCOS often have symptoms that come and go, particularly if their weight goes up and down.",
        ],
      },
      {
        heading: "When they start",
        paragraphs: [
          "Symptoms usually start in girls and young women under the age of 18, at puberty, and continue until menopause. Some people do not develop them until their early to mid twenties.",
          "Many people do not recognise the early symptoms as part of PCOS. After menopause, some symptoms will stop or may change.",
        ],
      },
      {
        heading: "Hair and periods",
        paragraphs: [
          "Hirsutism is thick, dark hair on the face, neck, chest, tummy, lower back, buttocks or thighs. Its most common cause is PCOS, which the NHS now calls PMOS.",
          "The average gap between periods starting is around 28 days. Periods are irregular if the gap is less than 21 days or more than 35 days, and conditions like PCOS can cause this.",
        ],
      },
      {
        heading: "Getting it checked",
        paragraphs: [
          "Some of these symptoms are common and can be caused by many different conditions. Having them does not definitely mean you have PCOS, but it is important to get them checked.",
          "Ask for an urgent GP appointment if new thick, dark hair suddenly starts growing on your face and body, your voice is getting lower, or your muscles are getting bigger.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you might have PCOS, or your symptoms are affecting your everyday life, work and relationships.",
      "Use an app or a diary to keep track of your periods.",
      "See a GP if you have irregular periods and other symptoms like weight gain, tiredness, hair growth on your face, and dry or oily skin.",
      "Ask for an urgent GP appointment if new thick, dark hair suddenly starts growing, your voice is getting lower or your muscles are getting bigger.",
    ],
    tryThisWeek: [
      "Track your periods in an app or diary.",
      "See a GP about irregular periods plus other symptoms.",
      "See a GP if symptoms affect your life.",
    ],
    ask: "Could my symptoms be PCOS, and what else could cause them?",
    interactive: {
      kind: "signs",
      title: "Symptoms to mention",
      intro: "Tick any you have noticed. Having them does not definitely mean you have PCOS, but it is important to get them checked.",
      signs: [
        "Irregular periods or long gaps",
        "Excessive hair growth",
        "Hair loss from the scalp",
        "Weight gain or difficulty losing weight",
        "Difficulty getting pregnant",
        "Oily skin and acne",
        "Feeling very tired",
        "Depression or anxiety",
        "Thick, dark skin on neck or armpits",
      ],
      after: "See a GP. Ask for an urgent appointment if new thick, dark hair suddenly starts growing, your voice is getting lower or your muscles are getting bigger.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_PMOS, VERITY_SYMPTOMS, RCOG, VERITY_DIAGNOSIS, NHS_HIRSUTISM, NHS_IRREGULAR],
    quiz: {
      question: "Can you have PCOS with no symptoms?",
      options: [{ text: "Yes, some people have none", right: true }, { text: "No, everyone has every symptom" }, { text: "Only after menopause" }],
      why: "Symptoms can be mild or severe, or you may have no symptoms at all.",
    },
  },
  {
    id: "pcos-diagnosis",
    kicker: "Diagnosis",
    question: "How is PCOS diagnosed?",
    hook: "Usually two out of three features, once other causes have been ruled out. A scan is not always needed.",
    short: "A GP may arrange blood tests to check hormone levels and insulin resistance, and an ultrasound scan of the ovaries if you are over 18. A diagnosis generally needs 2 out of 3 features: irregular or absent ovulation, signs of too much androgen such as testosterone, and polycystic ovaries on a scan. It can take a while, because symptoms often come and go.",
    sections: [
      {
        heading: "The tests",
        paragraphs: [
          "If a GP thinks you have PCOS, they may arrange tests with a hormone or reproduction specialist, a gynaecologist or endocrinologist. Tests include blood tests to check hormone levels and insulin resistance, and an ultrasound scan to look at your ovaries.",
          "An ultrasound scan will only be done if you are over 18.",
        ],
      },
      {
        heading: "Two out of three",
        paragraphs: [
          "Generally, a diagnosis needs 2 out of 3 features, after other possible causes have been ruled out: irregular or absent ovulation, signs of too much androgen such as testosterone, and polycystic ovaries on an ultrasound scan.",
          "Irregular ovulation is usually found through irregular or absent periods. In adults, cycles of more than 36 days, or fewer than 8 cycles a year, are considered irregular.",
          "Signs of too much androgen can be excess facial or body hair, or blood tests showing raised testosterone. Acne and thinning scalp hair can also be features, though on their own they are less reliable signs.",
        ],
      },
      {
        heading: "A scan is not always needed",
        paragraphs: [
          "Polycystic ovaries do not have to be present for a diagnosis, and having them does not on its own mean you have PCOS. NICE's clinical summary defines them as 20 or more follicles in at least one ovary.",
          "If you already have irregular or absent cycles and signs of too much androgen, you do not need an ultrasound to be diagnosed.",
        ],
      },
      {
        heading: "Ruling out other causes",
        paragraphs: [
          "Blood tests for other hormones, including thyroid-stimulating hormone and prolactin, help rule out other causes of irregular or missing periods, such as an underactive thyroid.",
          "Hormonal contraception affects testosterone blood tests. If these need checking, NICE's clinical summary says hormonal contraception should be stopped for at least 3 months first, with another method of contraception considered.",
        ],
      },
      {
        heading: "Why it can take time",
        paragraphs: [
          "Women with PCOS often have symptoms that come and go, particularly if their weight goes up and down. This can make it a difficult condition to diagnose, so it may take a while to get a diagnosis.",
          "In teenagers, both irregular periods and signs of too much androgen are needed, because some features are a normal part of puberty.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you might have PCOS.",
      "Use an app or a diary to keep track of your periods, to help you see if they are irregular.",
      "Write a list of the questions you want answered and take it to your appointment.",
      "Ask: what are my options, and what are the pros and cons of each option for me?",
    ],
    tryThisWeek: [
      "Track your periods.",
      "Write down your questions.",
      "Ask about your options.",
    ],
    ask: "Which of the three features do I have, and do I need a scan?",
    interactive: {
      kind: "flip-cards",
      title: "The three features, and the tests",
      intro: "Turn each card to see what is looked for. Generally, 2 out of 3 features are needed.",
      cards: [
        { id: "ovulation", front: "Irregular or absent ovulation", when: "Feature 1", back: "Usually found through periods. In adults, cycles of more than 36 days, or fewer than 8 a year." },
        { id: "androgen", front: "Too much androgen", when: "Feature 2", back: "Excess facial or body hair, or blood tests showing raised testosterone." },
        { id: "ovaries", front: "Polycystic ovaries", when: "Feature 3, on an ultrasound scan", back: "Not needed for a diagnosis, and not enough on its own. A scan is only done if you are over 18." },
        { id: "bloods", front: "Other blood tests", when: "To rule out other causes", back: "Hormones such as thyroid-stimulating hormone and prolactin, to rule out other causes of irregular periods." },
      ],
    },
    sources: [NHS_PMOS, VERITY_DIAGNOSIS, RCOG, CKS_INVESTIGATIONS, CKS_DIAGNOSIS, NHS_IRREGULAR],
    quiz: {
      question: "How many of the three features are generally needed for a diagnosis?",
      options: [{ text: "Two", right: true }, { text: "All three" }, { text: "Just a scan" }],
      why: "Generally, a diagnosis needs 2 out of 3 features, after other possible causes have been ruled out.",
    },
  },
  {
    id: "pcos-long-term",
    kicker: "Long-term health",
    question: "What does PCOS mean for my long-term health?",
    hook: "A higher chance of type 2 diabetes, heart problems and womb cancer. Knowing early means it can be checked and managed.",
    short: "PCOS can increase the risk of type 2 diabetes, high blood pressure, cardiovascular disease, fatty liver disease and womb cancer. The RCOG says one or two in every ten women with PCOS go on to develop diabetes. Regular check-ups and a healthy lifestyle can reduce these risks.",
    sections: [
      {
        heading: "The risks",
        paragraphs: [
          "PCOS can sometimes increase the risk of serious conditions, including type 2 diabetes, high blood pressure, cardiovascular disease, non-alcoholic fatty liver disease and womb cancer.",
          "Verity says it is a condition for life, not only something to worry about in your fertile years. Obstructive sleep apnoea, where breathing stops and starts during sleep, is also more common.",
        ],
      },
      {
        heading: "Diabetes",
        paragraphs: [
          "Insulin resistance is common in PCOS. One or two in every ten women with PCOS go on to develop diabetes at some point, and this increased risk can occur regardless of body weight.",
          "Your risk of diabetes is increased further if you are over 40, have relatives with diabetes, developed diabetes during a pregnancy, or have a BMI over 30.",
        ],
      },
      {
        heading: "Heart and blood pressure",
        paragraphs: [
          "Women with PCOS tend to have high blood pressure. The RCOG says this is likely to be related to insulin resistance and to being overweight, rather than to PCOS itself.",
          "High blood pressure can lead to heart problems and should be treated. Regular checks of blood pressure, cholesterol and blood glucose, alongside a healthy lifestyle and treatment, can help manage the risk.",
        ],
      },
      {
        heading: "The womb lining",
        paragraphs: [
          "If you have fewer than three periods a year, the lining of the womb can thicken, and this may lead to womb cancer in a small number of women. The overall likelihood remains relatively low.",
          "There are ways to protect the lining of the womb using the hormone progestogen. PCOS does not increase your chance of breast or ovarian cancer.",
        ],
      },
      {
        heading: "Lowering the risks",
        paragraphs: [
          "You can reduce the risk of developing these conditions by getting regular check-ups.",
          "Medication alone has not been shown to be any better than healthy lifestyle changes. Many women with PCOS manage their symptoms and long-term health risks by eating a healthy diet, exercising regularly and keeping a healthy lifestyle.",
        ],
      },
    ],
    helps: [
      "Get regular check-ups, and talk to your doctor if you are worried.",
      "Ask how often you should be tested for diabetes: depending on your risk factors, it may be every 1 to 3 years.",
      "Discuss with your doctor how often to check your blood pressure, and whether you need cholesterol tests.",
      "Contact your GP if you have concerns about any of these risks.",
      "If you have not had a period for over 4 months, you may need hormone tablets to make you have a period.",
      "Eat a healthy, balanced diet and exercise regularly.",
    ],
    tryThisWeek: [
      "Book a check-up.",
      "Ask when your diabetes test is due.",
      "Ask about blood pressure checks.",
    ],
    ask: "Which of these risks apply most to me, and how often should I be checked?",
    interactive: {
      kind: "risk-check",
      title: "What adds to the diabetes risk?",
      intro: "With PCOS, these raise the risk of diabetes further. Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "age", label: "Being over 40", note: "Your risk of diabetes is increased further if you are over 40.", changeable: false },
        { id: "family", label: "Relatives with diabetes", note: "Having relatives with diabetes increases the risk further.", changeable: false },
        { id: "gd", label: "Diabetes during a pregnancy", note: "Gestational diabetes in the past raises the risk further. Testing may be offered every 1 to 3 years.", changeable: false },
        { id: "bmi", label: "A BMI over 30", note: "The RCOG lists a lower risk of insulin resistance and diabetes among the benefits of losing weight.", changeable: true },
        { id: "exercise", label: "Little regular exercise", note: "Exercising regularly is one of the main ways to reduce long-term health risks, says the RCOG.", changeable: true },
      ],
    },
    sources: [NHS_PMOS, VERITY_LONG_TERM, RCOG, CKS_COMPLICATIONS],
    quiz: {
      question: "Does PCOS raise the chance of breast or ovarian cancer?",
      options: [{ text: "No", right: true }, { text: "Yes, both" }, { text: "Only ovarian cancer" }],
      why: "PCOS does not increase your chance of breast or ovarian cancer.",
    },
  },
  {
    id: "pcos-periods",
    kicker: "Treatment",
    question: "How are irregular periods treated?",
    hook: "Hormone treatments can make periods more regular, and protect the lining of the womb.",
    short: "The combined pill, the progestogen-only pill or an intrauterine system (IUS) can help with irregular periods. Having a period every 3 to 4 months reduces the risk of the womb lining thickening too much. If you have not had a period for over 4 months, you may need hormone tablets to make you have one.",
    sections: [
      {
        heading: "Treatments",
        paragraphs: [
          "Irregular periods in PCOS are sometimes treated with the combined pill, the progestogen-only pill or an intrauterine system, known as an IUS.",
          "If PCOS is causing irregular periods, the combined pill may help make your periods more regular. It can also help with acne and excess hair, though it is more effective for acne than for hair.",
        ],
      },
      {
        heading: "Protecting the womb lining",
        paragraphs: [
          "It is important to have a period every 3 to 4 months, to reduce the risk of the womb lining thickening too much. Without regular periods, the lining grows but is not shed.",
          "If you have not had a period for over 4 months, you may need hormone tablets to make you have a period. You may also be offered tests, such as an ultrasound scan of your womb.",
        ],
      },
      {
        heading: "The options",
        paragraphs: [
          "Ways to protect the lining with the hormone progestogen include a course of progestogen tablets every three or four months, a contraceptive pill, or the intrauterine system called Mirena.",
          "The options depend on whether you are trying for a baby, and your doctor will discuss them with you.",
        ],
      },
      {
        heading: "Things to know",
        paragraphs: [
          "You may still become pregnant even if you do not have periods. If you do not want to become pregnant, ask your GP about contraception.",
          "For some women, weight loss can improve the regularity of periods, but it does not work for all women with PCOS.",
        ],
      },
      {
        heading: "Bleeding to get checked",
        paragraphs: [
          "See a GP if your periods last longer than 7 days, you have bleeding between periods, or your normal pattern of periods changes.",
          "Verity says investigating persistent abnormal bleeding is an important part of PCOS care.",
        ],
      },
    ],
    helps: [
      "Ask your GP which treatment could help your periods: the combined pill, the progestogen-only pill or an IUS.",
      "Make sure you have a bleed every few months, especially if your periods are heavy when they come.",
      "If you have not had a period for over 4 months, talk to your doctor: you may need hormone tablets to bring one on.",
      "Ask your GP about contraception if you do not want to become pregnant, even without periods.",
      "See a GP about bleeding between periods, or periods that last longer than 7 days.",
    ],
    tryThisWeek: [
      "Ask which treatment could suit you.",
      "Talk to your doctor after 4 months without a period.",
      "Report bleeding between periods.",
    ],
    ask: "How can we protect my womb lining, and which option fits my plans for pregnancy?",
    interactive: {
      kind: "scenarios",
      title: "Period moments",
      scenarios: [
        {
          id: "gap",
          situation: "It has been 5 months since your last period.",
          options: [{ text: "Talk to your doctor", best: true }, { text: "Wait for it to come back" }],
          why: "If you have not had a period for over 4 months, you may need hormone tablets to make you have a period.",
        },
        {
          id: "contraception",
          situation: "Your periods are irregular and you do not want to get pregnant.",
          options: [{ text: "Ask your GP about contraception", best: true }, { text: "Assume you cannot get pregnant" }],
          why: "You may still become pregnant even if you do not have periods.",
        },
        {
          id: "between",
          situation: "You notice bleeding between periods.",
          options: [{ text: "See a GP", best: true }, { text: "Ignore it" }],
          why: "See a GP if you have bleeding between periods. Investigating persistent abnormal bleeding is an important part of PCOS care.",
        },
        {
          id: "baby",
          situation: "You are trying for a baby and need womb protection.",
          options: [{ text: "Ask which option fits your plans", best: true }, { text: "Start the pill on your own" }],
          why: "The options depend on whether you are trying for a baby, and your doctor will discuss them with you.",
        },
      ],
    },
    sources: [NHS_PMOS, NHS_IRREGULAR, CKS_ADULTS, RCOG, VERITY_MYTHS, VERITY_LONG_TERM],
    quiz: {
      question: "How often is it important to have a period, to protect the womb lining?",
      options: [{ text: "Every 3 to 4 months", right: true }, { text: "Once a year" }, { text: "It does not matter" }],
      why: "It is important to have a period every 3 to 4 months, to reduce the risk of the womb lining thickening too much.",
    },
  },
  {
    id: "pcos-hair-skin",
    kicker: "Treatment",
    question: "What helps with extra hair, hair loss and acne?",
    hook: "Hair removal at home, prescription creams and tablets, and acne treatments. There are several options.",
    short: "Unwanted hair can be removed or lightened at home, and a GP may suggest eflornithine cream for the face, a contraceptive pill, or spironolactone. Acne can be helped by skin creams or tablets, including the combined pill. Hair loss can be upsetting, and a GP can talk through what may help.",
    sections: [
      {
        heading: "Unwanted hair",
        paragraphs: [
          "Excess hair, called hirsutism, is usually linked to changes in androgen levels, sometimes called male hormones. Its most common cause is PCOS.",
          "A GP may suggest ways to remove or lighten hair at home, such as shaving, waxing, plucking, hair removal creams or bleaching. They may also suggest a prescription cream to slow hair growth on the face, called eflornithine, or a contraceptive pill if you have not been through the menopause.",
          "Spironolactone or eflornithine may be used to help reduce hair growth on the face and body.",
        ],
      },
      {
        heading: "Longer-lasting removal",
        paragraphs: [
          "Electrolysis and laser hair removal can get rid of unwanted hair for longer than home methods, but they are not usually permanent. They are not usually available on the NHS and can be expensive.",
          "Both have risks, and the results are not the same for everyone, so research them before trying them.",
        ],
      },
      {
        heading: "Acne",
        paragraphs: [
          "PCOS can cause acne. Washing your skin twice a day with a gentle cleanser and using products that will not clog pores can help. Picking or squeezing spots can cause scars.",
          "A GP can prescribe stronger treatments, including creams, gels and tablets. The combined pill can help manage hormone levels that contribute to acne.",
        ],
      },
      {
        heading: "Hair loss",
        paragraphs: [
          "Thinning hair or hair loss from the scalp, called alopecia, is one of the symptoms of PCOS. It is normal to lose between 50 and 100 hairs a day, often without noticing.",
          "Minoxidil can be used to treat female pattern hair loss. It does not work for everyone, only works for as long as it is used, and is not always available on the NHS.",
          "Losing hair can be upsetting. If it is causing you distress, your GP may be able to help you get some counselling.",
        ],
      },
      {
        heading: "Things to know",
        paragraphs: [
          "Spironolactone is not usually recommended during pregnancy, because it can potentially affect a baby's development.",
          "For some women, weight loss brings an improvement in excess hair growth and acne, but it does not work for everyone with PCOS.",
        ],
      },
    ],
    helps: [
      "See a GP if unwanted hair is a problem for you, particularly if you have other symptoms such as irregular periods.",
      "Wash your skin twice a day with a gentle cleanser, and do not pick or squeeze spots.",
      "Ask a pharmacist about acne treatments you put on your skin, such as salicylic acid or benzoyl peroxide.",
      "See a GP if acne is not getting better after treating it yourself, is causing scars, or is affecting your mental health.",
      "Research electrolysis or laser treatment before trying them.",
      "Tell your GP if hair loss is affecting your wellbeing, and ask what treatments are available.",
    ],
    tryThisWeek: [
      "Wash twice a day with a gentle cleanser.",
      "Ask a pharmacist about acne creams.",
      "Tell your GP how hair loss affects you.",
    ],
    ask: "Which treatment would help my skin or hair most, and how long until I see a change?",
    interactive: {
      kind: "flip-cards",
      title: "Options, card by card",
      intro: "Turn each card to see what the option does and what to know.",
      cards: [
        { id: "home", front: "Home hair removal", when: "Shaving, waxing, plucking, creams", back: "Removes or lightens unwanted hair. Bleaching is another option." },
        { id: "eflornithine", front: "Eflornithine cream", when: "On prescription", back: "A cream to slow hair growth on the face." },
        { id: "pill", front: "Contraceptive pill", when: "Before the menopause", back: "Can help control hormone levels. More effective for acne than for hair." },
        { id: "spironolactone", front: "Spironolactone", when: "Tablets", back: "Can help reduce hair growth on the face and body. Not usually recommended in pregnancy." },
        { id: "laser", front: "Laser or electrolysis", when: "Longer-lasting", back: "Not usually permanent or on the NHS. Both have risks, so research them first." },
        { id: "minoxidil", front: "Minoxidil", when: "For female pattern hair loss", back: "Does not work for everyone, and only works for as long as it is used." },
      ],
    },
    sources: [NHS_HIRSUTISM, NHS_PMOS, NHS_ACNE, VERITY_SYMPTOMS, NHS_HAIR_LOSS, NHS_SPIRO, VERITY_MYTHS, CKS_ADULTS],
    quiz: {
      question: "Is laser hair removal usually permanent?",
      options: [{ text: "No, it lasts longer but is not usually permanent", right: true }, { text: "Yes, always" }, { text: "Only on the NHS" }],
      why: "Electrolysis and laser hair removal can get rid of unwanted hair for longer than home methods, but they are not usually permanent.",
    },
  },
  {
    id: "pcos-fertility",
    kicker: "Fertility",
    question: "Can I get pregnant with PCOS?",
    hook: "It can make things harder, but there are treatments that help the ovaries release an egg.",
    short: "PCOS can sometimes cause problems getting pregnant, usually because the ovaries do not release an egg each month. Medicines such as clomifene and metformin can help, and if they do not work, a minor operation or IVF may be offered. An expert quoted by Verity says more women with PCOS manage to have children than not.",
    sections: [
      {
        heading: "Why it can be harder",
        paragraphs: [
          "PCOS can sometimes cause problems getting pregnant. This is usually because the ovaries do not release an egg each month.",
          "Getting pregnant can be more difficult with irregular periods, because you might not release an egg regularly. It can help to have sex every 2 or 3 days throughout your cycle without using contraception.",
          "An expert quoted by Verity says there are lots of treatments now, and more women with PCOS manage to have children than not.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "It is a good idea to see a GP if you have not conceived after a year of trying. Anyone who already knows they may have fertility problems should see their GP sooner.",
          "Speak to a GP if you take prescribed medicine and want to get pregnant. Do not stop taking any prescribed medicine until you have talked to your GP or specialist.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "Clomifene encourages the monthly release of an egg in women who do not ovulate regularly or cannot ovulate at all. Metformin is particularly beneficial for women with PCOS.",
          "Some fertility medicines can cause side effects, such as nausea, vomiting, headaches and hot flushes.",
        ],
      },
      {
        heading: "Surgery and IVF",
        paragraphs: [
          "If ovulation medicine has not worked, a minor procedure called laparoscopic ovarian drilling can be used. It uses heat or a laser on the ovaries, and can sometimes increase the chance of getting pregnant.",
          "In IVF, an egg is fertilised outside the body and returned to the womb. Medicine that stimulates the ovaries carries a small chance of too many eggs developing, called ovarian hyperstimulation syndrome, and IVF units take all possible precautions to try to avoid it.",
        ],
      },
      {
        heading: "Weight and access",
        paragraphs: [
          "In women, being overweight or severely underweight can affect ovulation. For women who are overweight, the RCOG lists an increased chance of becoming pregnant among the benefits of losing weight.",
          "Fertility treatment funded by the NHS varies across the UK, and waiting lists can be long in some areas. A GP can advise about your eligibility.",
        ],
      },
    ],
    helps: [
      "See a GP if you have not conceived after a year of trying, or sooner if you know you may have fertility problems.",
      "Do not stop taking any prescribed medicine until you have talked to your GP or specialist.",
      "Take vitamins and supplements before and while trying, including folic acid and vitamin D.",
      "If you go private, choose a clinic licensed by the Human Fertilisation and Embryology Authority.",
      "During fertility treatment, contact your clinic or NHS 111 as soon as possible if you have pain and bloating in your tummy, are feeling or being sick, or feel faint.",
      "Call 999 or go to A&E if you have difficulty breathing, pain in your chest or upper back, or swelling in any part of your body.",
    ],
    tryThisWeek: [
      "Start folic acid and vitamin D.",
      "See a GP after a year of trying.",
      "Keep taking prescribed medicine until you ask.",
    ],
    ask: "What are my options if I want to get pregnant, and what is available near me?",
    interactive: {
      kind: "timeline",
      title: "A possible path to pregnancy",
      steps: [
        { id: "before", when: "Before trying", title: "Getting ready", points: ["Take folic acid and vitamin D.", "Speak to a GP if you take prescribed medicine."] },
        { id: "year", when: "After a year of trying", title: "See a GP", points: ["Or sooner if you know you may have fertility problems.", "A GP can check for common causes."] },
        { id: "medicines", when: "First treatments", title: "Medicines", points: ["Clomifene encourages the release of an egg.", "Metformin is particularly beneficial in PCOS."] },
        { id: "drilling", when: "If medicine has not worked", title: "Ovarian drilling", points: ["A minor procedure using heat or a laser.", "It can sometimes increase the chance of pregnancy."] },
        { id: "ivf", when: "Assisted conception", title: "IUI or IVF", points: ["Depends on the cause and what your area offers.", "Clinics take precautions against overstimulation."] },
      ],
    },
    sources: [NHS_PMOS, NHS_IRREGULAR, NHS_INFERTILITY, NHS_TRYING, NHS_INFERT_TREAT, NHS_IVF, VERITY_MYTHS, RCOG, CKS_COMPLICATIONS],
    quiz: {
      question: "Why can PCOS make it harder to get pregnant?",
      options: [{ text: "The ovaries may not release an egg each month", right: true }, { text: "It blocks the fallopian tubes" }, { text: "It stops periods for good" }],
      why: "This is usually because the ovaries do not release an egg each month.",
    },
  },
  {
    id: "pcos-weight",
    kicker: "Lifestyle",
    question: "How do food, activity and weight affect PCOS?",
    hook: "Healthy habits help hormones and long-term health. Lasting changes matter more than a diet.",
    short: "A healthy, balanced diet and regular exercise can help PCOS symptoms. For those who are overweight, losing as little as 5% of body weight has been shown to reduce insulin resistance and testosterone. Plenty of women with PCOS are a healthy weight, and a GP can refer you to an NHS dietitian or other support.",
    sections: [
      {
        heading: "Why it matters",
        paragraphs: [
          "Eating a healthy, balanced diet and exercising regularly can help PCOS symptoms. Healthy habits help achieve or keep a healthy weight, help hormone levels, and improve general health and quality of life.",
          "Many women with PCOS find it difficult to lose weight, as the hormone changes can encourage weight gain. But there are lots of women with PCOS who are a healthy weight.",
        ],
      },
      {
        heading: "A small change can help",
        paragraphs: [
          "For women who are overweight, a reduction of as little as 5% of body weight has been shown to reduce insulin resistance and testosterone levels.",
          "The RCOG lists the benefits of losing weight as a lower risk of diabetes, heart problems and womb cancer, more regular periods, a better chance of pregnancy, less acne and hair growth over time, and improved mood and self-esteem.",
          "But weight loss does not work for all women with PCOS, especially if they do not have much weight to lose.",
        ],
      },
      {
        heading: "Food",
        paragraphs: [
          "The RCOG suggests a healthy balanced diet with fruit and vegetables, whole foods such as wholemeal bread and brown rice, and lean meat, fish and chicken, with less sugar, salt and caffeine. Eating meals regularly, especially breakfast, also helps.",
          "It is often more useful to make changes you can stick to long term than to think of yourself as on a diet. Going on a diet does not address the emotional side of PCOS, and can put more pressure on you.",
        ],
      },
      {
        heading: "Activity",
        paragraphs: [
          "The RCOG suggests regular exercise, of 30 minutes at least three times a week. The benefits of exercise for body, mind and stress levels are well recognised.",
          "The NHS guidelines for adults are at least 150 minutes of moderate activity a week, or 75 minutes of vigorous activity, plus strengthening activities on at least 2 days a week.",
        ],
      },
      {
        heading: "Extra support",
        paragraphs: [
          "There is no one answer to weight with PCOS, and different approaches work for different people. A GP can refer you to an NHS dietitian, or to a weight management programme with coaching, group support and healthy eating advice.",
          "Depending on your BMI and other health conditions, weight loss medicines may be an option, alongside diet and activity. Metformin is sometimes used in PCOS to help tiredness and weight problems.",
        ],
      },
    ],
    helps: [
      "Eat a healthy, balanced diet and exercise regularly.",
      "Make changes you can stick to long term, rather than going on a diet.",
      "Eat meals regularly, especially breakfast.",
      "Ask your GP about a referral to an NHS dietitian.",
      "Be kind to yourself: changing habits is not easy and takes time.",
      "See a GP if you have, or think you may have, an eating disorder, such as binge eating.",
    ],
    tryThisWeek: [
      "Pick one change you can keep up.",
      "Eat meals at regular times.",
      "Ask about seeing a dietitian.",
    ],
    ask: "Could I see a dietitian, and would any medicine help me alongside lifestyle changes?",
    interactive: {
      kind: "scenarios",
      title: "Everyday choices",
      scenarios: [
        {
          id: "diet",
          situation: "You are thinking about a strict diet to fix your PCOS.",
          options: [{ text: "Choose changes you can keep up", best: true }, { text: "Try a crash diet" }],
          why: "It is often more useful to make changes you can stick to long term than to think of yourself as on a diet.",
        },
        {
          id: "healthy-weight",
          situation: "You are a healthy weight and still have symptoms.",
          options: [{ text: "Ask about other treatments", best: true }, { text: "Try to lose more weight" }],
          why: "Weight loss does not work for all women with PCOS, especially if they do not have much weight to lose. Cosmetic measures and medication are other options.",
        },
        {
          id: "unsure",
          situation: "You are not sure what to eat.",
          options: [{ text: "Ask your GP about a dietitian", best: true }, { text: "Follow advice from social media" }],
          why: "Getting guidance from a qualified dietitian can make a big difference. Your GP can refer you to an NHS dietitian.",
        },
        {
          id: "binge",
          situation: "You often feel out of control around food.",
          options: [{ text: "Talk to a GP", best: true }, { text: "Keep it to yourself" }],
          why: "See a GP if you have, or think you may have, an eating disorder, such as binge eating.",
        },
      ],
    },
    sources: [NHS_PMOS, CKS_ADULTS, VERITY_MYTHS, RCOG, NHS_ACTIVITY, NHS_OBESITY],
    quiz: {
      question: "How much weight loss has been shown to reduce insulin resistance and testosterone?",
      options: [{ text: "As little as 5% of body weight", right: true }, { text: "At least half of body weight" }, { text: "None: weight makes no difference" }],
      why: "For women who are overweight, a reduction of as little as 5% of body weight has been shown to reduce insulin resistance and testosterone levels.",
    },
  },
  {
    id: "pcos-checks",
    kicker: "Living with PCOS",
    question: "Which regular checks should I keep up?",
    hook: "Blood sugar, blood pressure, cholesterol, the womb lining and your mood. Checks find problems early.",
    short: "Once you have a diagnosis of PCOS, you should be monitored for any early signs of health problems. Depending on your risk factors, you may be offered testing for diabetes every 1 to 3 years. Blood pressure, cholesterol, the womb lining and your mood are worth keeping an eye on too.",
    sections: [
      {
        heading: "Why checks matter",
        paragraphs: [
          "Once you have a diagnosis of PCOS, you should be monitored to check for any early signs of health problems. You can reduce the risk of serious conditions by getting regular check-ups.",
        ],
      },
      {
        heading: "Diabetes",
        paragraphs: [
          "Depending on your risk factors, you may be offered testing for diabetes every 1 to 3 years.",
          "NICE's clinical summary says blood glucose should be checked for all women when PCOS is diagnosed, and that a glucose tolerance test is recommended for those at higher risk.",
        ],
      },
      {
        heading: "Blood pressure and cholesterol",
        paragraphs: [
          "Discuss with your doctor how often you should have your blood pressure checked, and whether you should have blood tests to check your cholesterol.",
          "NICE's clinical summary suggests blood pressure checks once a year, or more often depending on heart risk, and a cholesterol test at diagnosis for all women with PCOS, whatever their age or weight.",
        ],
      },
      {
        heading: "The womb lining and mood",
        paragraphs: [
          "It is important to have a period every 3 to 4 months. If you have not had one for over 4 months, you may need hormone tablets to make you have a period, and you may be offered an ultrasound scan of your womb.",
          "If you have depression or other psychological problems, you can be referred to a counsellor or trained specialist. Doctors are also advised to ask about snoring and daytime tiredness, which can be signs of sleep apnoea.",
        ],
      },
    ],
    helps: [
      "Ask how often you should be tested for diabetes.",
      "Discuss with your doctor how often to check your blood pressure and cholesterol.",
      "Aim for a period every 3 to 4 months, and talk to your doctor if it has been over 4 months.",
      "Ask about a referral to a counsellor if PCOS is affecting your mood.",
      "Get regular check-ups, and talk to your doctor if you are worried.",
    ],
    tryThisWeek: [
      "Ask when your diabetes test is due.",
      "Ask about a blood pressure check.",
      "Keep an eye on the gap between periods.",
    ],
    ask: "When are my next diabetes, blood pressure and cholesterol checks due?",
    interactive: {
      kind: "flip-cards",
      title: "Your checks, card by card",
      intro: "Turn each card to see how often the check may happen and why.",
      cards: [
        { id: "diabetes", front: "Diabetes test", when: "Every 1 to 3 years", back: "Depending on your risk factors. A glucose tolerance test is recommended for those at higher risk." },
        { id: "bp", front: "Blood pressure", when: "At least once a year", back: "High blood pressure can lead to heart problems and should be treated." },
        { id: "cholesterol", front: "Cholesterol", when: "At diagnosis", back: "For all women with PCOS, whatever their age or weight. Then as your doctor advises." },
        { id: "womb", front: "Womb lining", when: "A period every 3 to 4 months", back: "Over 4 months without one, you may need hormone tablets and an ultrasound scan." },
        { id: "mood", front: "Mood and sleep", when: "At any time", back: "You can be referred to a counsellor. Snoring and daytime tiredness are worth mentioning." },
      ],
    },
    sources: [RCOG, NHS_PMOS, CKS_ADULTS],
    quiz: {
      question: "How often may you be offered a diabetes test?",
      options: [{ text: "Every 1 to 3 years, depending on your risk", right: true }, { text: "Only once, at diagnosis" }, { text: "Only if you feel unwell" }],
      why: "Depending on your risk factors, you may be offered testing for diabetes every 1 to 3 years.",
    },
  },
  {
    id: "pcos-mood",
    kicker: "Wellbeing",
    question: "How can PCOS affect mood and body image?",
    hook: "Symptoms you can see can change how you feel about yourself. Support and talking therapies can help.",
    short: "PCOS can affect how you see yourself and lower your self-esteem, and depression and anxiety are among its symptoms. Talking therapy can help, and you can refer yourself to NHS talking therapies. If you need urgent help, call 111, call Samaritans on 116 123, or call 999 if someone's life is at risk.",
    sections: [
      {
        heading: "How it can feel",
        paragraphs: [
          "PCOS can be a difficult condition to live with, both physically and emotionally. The symptoms may affect how you see yourself and how you think others see you, and can lower your self-esteem.",
          "Verity says the symptoms can have a devastating effect on a person's self-esteem, sense of identity and quality of life.",
        ],
      },
      {
        heading: "Mood, anxiety and body image",
        paragraphs: [
          "Mental health problems such as depression or anxiety are among the main symptoms. NICE's clinical summary says PCOS is linked with a higher risk of depression and anxiety symptoms, even when weight is taken into account.",
          "Women with PCOS may feel less physically attractive, and less satisfied with their body size. Eating disorders, such as binge eating, are also more common.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "Talking therapy can help if some symptoms are causing depression or anxiety. You can refer yourself to NHS talking therapies for anxiety and depression without seeing a GP, if you are registered with a GP and aged 18 or over, or 16 or over in some areas.",
          "You can also be referred to a counsellor or trained specialist. Acne and hair loss can affect mental health too, and a GP can help with both.",
        ],
      },
      {
        heading: "Other support",
        paragraphs: [
          "Support from charities, organisations and other people with PCOS can help. Verity runs a private online group where people with PCOS give and receive peer support.",
          "Mood swings are not a certain part of PCOS. An expert quoted by Verity says many women with PCOS do not have them.",
        ],
      },
      {
        heading: "If you need help now",
        paragraphs: [
          "If you need urgent help for your mental health, get help from 111 online, call 111 and select the mental health option, or ask for an urgent GP appointment. You can call Samaritans free on 116 123, any time, day or night.",
          "Call 999 or go to A&E now if someone's life is at risk, or you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one.",
        ],
      },
    ],
    helps: [
      "Try talking therapy if symptoms are causing depression or anxiety.",
      "Refer yourself to NHS talking therapies for anxiety and depression, or ask a GP.",
      "Tell your GP if hair loss or acne is affecting your wellbeing or mental health.",
      "Get support from charities, organisations and other people with PCOS.",
      "Call Samaritans on 116 123 to talk, any time, day or night.",
      "Call 999 or go to A&E now if someone's life is at risk.",
    ],
    tryThisWeek: [
      "Look up NHS talking therapies.",
      "Tell your GP how your skin or hair affects you.",
      "Reach out to others with PCOS.",
    ],
    ask: "Could talking therapy help me, and how do I get it here?",
    interactive: {
      kind: "scenarios",
      title: "When it weighs on you",
      scenarios: [
        {
          id: "low",
          situation: "Your mood has been low for weeks and it is affecting daily life.",
          options: [{ text: "Refer yourself to talking therapies, or see a GP", best: true }, { text: "Wait for it to pass on its own" }],
          why: "You can refer yourself to NHS talking therapies for anxiety and depression without seeing a GP.",
        },
        {
          id: "hair",
          situation: "Facial hair is making you avoid seeing people.",
          options: [{ text: "Tell your GP how it affects you", best: true }, { text: "Put up with it" }],
          why: "See a GP if unwanted hair is a problem for you. Treatments and hair removal can help.",
        },
        {
          id: "urgent",
          situation: "You need urgent help for your mental health.",
          options: [{ text: "Call 111 and select the mental health option", best: true }, { text: "Wait for your next routine appointment" }],
          why: "Get help from 111 online, call 111 and select the mental health option, or ask for an urgent GP appointment.",
        },
        {
          id: "emergency",
          situation: "Someone's life is at risk.",
          options: [{ text: "Call 999 or go to A&E now", best: true }, { text: "Call in the morning" }],
          why: "A mental health emergency should be taken as seriously as a physical one. You will not be wasting anyone's time.",
        },
      ],
    },
    sources: [NHS_PMOS, RCOG, VERITY_WHAT, CKS_COMPLICATIONS, CKS_ADULTS, NHS_TALKING, NHS_ACNE, NHS_HAIR_LOSS, VERITY_HOME, VERITY_MYTHS, NHS_URGENT, SAMARITANS, NHS_HIRSUTISM],
    quiz: {
      question: "Do you need a GP referral for NHS talking therapies for anxiety and depression?",
      options: [{ text: "No, you can refer yourself", right: true }, { text: "Yes, always" }, { text: "Only with a diagnosis" }],
      why: "You can refer yourself to NHS talking therapies for anxiety and depression without seeing a GP.",
    },
  },
  {
    id: "pcos-pregnancy",
    kicker: "Pregnancy",
    question: "What should I know about pregnancy with PCOS?",
    hook: "PCOS does not mean a pregnancy will be complicated. Extra checks, such as for diabetes, find problems early.",
    short: "PCOS raises the chance of some pregnancy complications, including gestational diabetes, high blood pressure, pre-eclampsia and preterm birth. Having PCOS does not mean a pregnancy will be complicated, but advice before pregnancy and checks during it are particularly important. You will be offered a blood test for diabetes between 24 and 28 weeks.",
    sections: [
      {
        heading: "The risks",
        paragraphs: [
          "People with PCOS have an increased risk of several pregnancy complications, including gestational diabetes, high blood pressure and pre-eclampsia, and preterm birth.",
          "Having PCOS does not mean that a pregnancy will be complicated. But advice before pregnancy and monitoring during it can be particularly important, to find and manage any risks early.",
        ],
      },
      {
        heading: "Before pregnancy",
        paragraphs: [
          "Things that can help before and while you are trying for a baby include taking vitamins and supplements, including folic acid and vitamin D, and getting support to stop smoking.",
          "Speak to a GP if you take prescribed medicine, and do not stop taking it until you have talked to your GP or specialist.",
          "Spironolactone is not usually recommended during pregnancy, because it can potentially affect a baby's development. Metformin can be taken during pregnancy, but check with a doctor first.",
        ],
      },
      {
        heading: "Checking for diabetes",
        paragraphs: [
          "You are at higher risk of developing diabetes in pregnancy, and will be offered a blood test for it between 24 and 28 weeks.",
          "NICE's clinical summary says a glucose tolerance test should also be offered before pregnancy, or before 20 weeks if it was not done earlier.",
          "The test, an oral glucose tolerance test, takes about 2 hours. You have a blood test after not eating or drinking for 8 to 10 hours, then a glucose drink, then another blood test 2 hours later.",
        ],
      },
      {
        heading: "If you get gestational diabetes",
        paragraphs: [
          "Gestational diabetes usually disappears after giving birth. Blood sugar may be brought down by changing your diet and being more active, and if that is not enough, by tablets or insulin injections.",
          "Women who have had it are more likely to develop type 2 diabetes later. A blood test for diabetes is advised 6 to 13 weeks after giving birth, and once every year after that if the result is normal.",
        ],
      },
    ],
    helps: [
      "If you have a health condition, talk to your GP about planning a pregnancy.",
      "Take folic acid and vitamin D before and while trying to get pregnant.",
      "Do not stop taking any prescribed medicine until you have talked to your GP or specialist.",
      "Tell your doctor if you are pregnant, or get pregnant, while taking metformin.",
      "Have the blood test for diabetes you are offered between 24 and 28 weeks.",
      "Speak to your midwife or doctor if you are worried about any symptoms.",
    ],
    tryThisWeek: [
      "Start folic acid if planning a baby.",
      "Talk to your GP about your medicines.",
      "Note your 24 to 28 week test.",
    ],
    ask: "What extra checks will I have in pregnancy, and are my medicines safe?",
    interactive: {
      kind: "timeline",
      title: "Checks through pregnancy",
      steps: [
        { id: "before", when: "Before pregnancy", title: "Planning", points: ["Take folic acid and vitamin D.", "Talk to your GP about any prescribed medicine."] },
        { id: "early", when: "Before 20 weeks", title: "An early glucose test", points: ["Offered if it was not done before pregnancy, says NICE's clinical summary."] },
        { id: "mid", when: "24 to 28 weeks", title: "Glucose tolerance test", points: ["A test for diabetes in pregnancy.", "It takes about 2 hours."] },
        { id: "after", when: "6 to 13 weeks after birth", title: "If you had gestational diabetes", points: ["A blood test for diabetes.", "Then once a year if the result is normal."] },
      ],
    },
    sources: [VERITY_LONG_TERM, NHS_TRYING, NHS_SPIRO, NHS_METFORMIN, RCOG, CKS_ADULTS, NHS_GD, CKS_COMPLICATIONS],
    quiz: {
      question: "When are women with PCOS offered a blood test for diabetes in pregnancy?",
      options: [{ text: "Between 24 and 28 weeks", right: true }, { text: "Only after the birth" }, { text: "Never" }],
      why: "You are at higher risk of developing diabetes in pregnancy, and will be offered a blood test for it between 24 and 28 weeks.",
    },
  },
  {
    id: "pcos-support",
    kicker: "Support",
    question: "Where can I get support for PCOS?",
    hook: "Your GP and specialists, charities, and other people living with PCOS.",
    short: "As well as your doctor, support from charities, organisations and other people with PCOS can help. Verity, the UK PCOS charity, offers information and runs a private peer support group with over 12,000 members. The NHS also points to The Lowdown and the British Fertility Society.",
    sections: [
      {
        heading: "You are not alone",
        paragraphs: [
          "PCOS can be a difficult condition to live with, both physically and emotionally. As well as support from your doctor, you may find it helpful to get support from charities, organisations and other people with PCOS.",
          "Your healthcare team is there to support you in making decisions that are right for you. It can help to write a list of the questions you want answered and take it to your appointment.",
        ],
      },
      {
        heading: "Verity",
        paragraphs: [
          "Verity is a charity that offers information and support to anyone living with PCOS. It was set up in 1997 and became a charity in 2003.",
          "Verity runs a private Facebook group where over 12,000 people with PCOS give and receive peer support. It also has evidence-based information booklets and hosts free online webinars with experts.",
          "Verity is run by people with PCOS who are not medically qualified, so it cannot offer specific medical advice.",
        ],
      },
      {
        heading: "Other organisations",
        paragraphs: [
          "The NHS also lists The Lowdown, which has information about women's health conditions including PCOS, and the British Fertility Society, which has information about fertility.",
          "If you are having fertility treatment, Fertility Network UK offers an online community, a free support line, events and group meetings.",
        ],
      },
      {
        heading: "Trusted information",
        paragraphs: [
          "There is a lot of misinformation about PCOS on social media. Verity urges people to look to evidence-based resources, such as Verity itself, the international PCOS guidelines and NICE.",
        ],
      },
    ],
    helps: [
      "Get support from charities, organisations and other people with PCOS.",
      "Join Verity's private online group for peer support.",
      "Look to evidence-based resources rather than social media.",
      "Write a list of questions and take it to your appointment.",
      "If you are having IVF, take up the chance to speak to a counsellor before, during and after treatment.",
    ],
    tryThisWeek: [
      "Look at Verity's website.",
      "Write down your questions.",
      "Check where your information comes from.",
    ],
    ask: "Is there a local service or group you would recommend for PCOS?",
    interactive: {
      kind: "flip-cards",
      title: "Where to turn",
      intro: "Turn each card to see what each one offers.",
      cards: [
        { id: "verity", front: "Verity", when: "The UK PCOS charity", back: "Information, booklets, webinars and a private peer support group. It cannot give medical advice." },
        { id: "lowdown", front: "The Lowdown", when: "Listed by the NHS", back: "Information about women's health conditions, including PCOS experiences." },
        { id: "bfs", front: "British Fertility Society", when: "Listed by the NHS", back: "An organisation with information about fertility." },
        { id: "fnuk", front: "Fertility Network UK", when: "During fertility treatment", back: "An online community, a free support line, events and group meetings." },
        { id: "talking", front: "NHS talking therapies", when: "For anxiety and depression", back: "You can refer yourself without seeing a GP." },
        { id: "samaritans", front: "Samaritans", when: "Any time, day or night", back: "Call 116 123 free to talk about anything that is troubling you." },
      ],
    },
    sources: [NHS_PMOS, RCOG, VERITY_ABOUT, VERITY_HOME, NHS_IVF, NHS_TALKING, SAMARITANS],
    quiz: {
      question: "Can Verity give specific medical advice?",
      options: [{ text: "No, it is run by people who are not medically qualified", right: true }, { text: "Yes, it replaces your GP" }, { text: "Only about fertility" }],
      why: "Verity is run by people with PCOS who are not medically qualified, so it cannot offer specific medical advice.",
    },
  },
];
