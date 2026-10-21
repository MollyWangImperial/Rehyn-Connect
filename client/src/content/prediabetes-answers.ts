import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Prediabetes page's pieces (content/library-conditions/body.ts
// `learnId`). Every sentence was written from wording checked on 20 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. Most of it comes from Diabetes UK,
// the NHS and NHS England's Healthier You programme. General information only; it never replaces what a
// person's own team tells them.

const duk = (label: string, path: string): LearnSource => ({ label: `Diabetes UK: ${label}`, url: `https://www.diabetes.org.uk/${path}` });

const DUK_PRE = duk("Prediabetes", "about-diabetes/type-2-diabetes/prediabetes");
const DUK_CAUSES = duk("What causes prediabetes?", "about-diabetes/type-2-diabetes/prediabetes/causes");
const DUK_SYMPTOMS = duk("Prediabetes symptoms", "about-diabetes/type-2-diabetes/prediabetes/symptoms");
const DUK_TREATMENTS = duk("Prediabetes treatments", "about-diabetes/type-2-diabetes/prediabetes/treatments");
const DUK_REVERSING = duk("How to reverse prediabetes", "about-diabetes/type-2-diabetes/prediabetes/reversing");
const DUK_LOSE_WEIGHT = duk("How to lose weight for prediabetes and lowering type 2 risk", "about-diabetes/type-2-diabetes/prediabetes/how-to-lose-weight");
const DUK_PREVENT = duk("How to prevent type 2 diabetes", "about-diabetes/type-2-diabetes/prevention/how-to-prevent-type-2-diabetes");
const DUK_COURSES = duk("NHS type 2 diabetes prevention courses", "about-diabetes/type-2-diabetes/prevention/nhs-type-2-prevention-courses");
const DUK_EATING = duk("Healthy eating tips for prediabetes and lowering type 2 risk", "about-diabetes/type-2-diabetes/prevention/healthy-eating-tips-to-lower-type-2-risk");
const DUK_TEST = duk("Diabetes test: how to test for diabetes", "about-diabetes/test-for-diabetes");
const DUK_HBA1C = duk("What is HbA1c?", "about-diabetes/looking-after-diabetes/hba1c");
const DUK_INSULIN = duk("Insulin resistance", "about-diabetes/looking-after-diabetes/treatments/insulin/resistance");
const DUK_EXERCISE = duk("Exercise for diabetes", "living-with-diabetes/exercise");
const DUK_SLEEP = duk("Sleep and diabetes", "living-with-diabetes/life-with-diabetes/sleep-and-diabetes");
const DUK_STRESS = duk("Stress and diabetes", "living-with-diabetes/emotional-wellbeing/stress");
const DUK_ALCOHOL = duk("Alcohol and diabetes", "living-with-diabetes/eating/what-to-drink-with-diabetes/alcohol-and-diabetes");
const DUK_PORTIONS = duk("Portion sizes and diabetes", "living-with-diabetes/eating/portion-sizes");
const DUK_SUPPORTING = duk("Supporting someone with diabetes", "living-with-diabetes/supporting-someone-with-diabetes");
const DUK_CHILDREN = duk("Children and type 2 diabetes", "living-with-diabetes/life-with-diabetes/children-and-diabetes/type-2");
const NHS_DIABETES: LearnSource = { label: "NHS: Diabetes", url: "https://www.nhs.uk/conditions/diabetes/" };
const NHS_T2_SYMPTOMS: LearnSource = { label: "NHS: Symptoms of type 2 diabetes and how it's diagnosed", url: "https://www.nhs.uk/conditions/type-2-diabetes/symptoms/" };
const NHS_ACTIVITY: LearnSource = { label: "NHS: Physical activity guidelines for adults aged 19 to 64", url: "https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/" };
const NHS_EXERCISE: LearnSource = { label: "NHS: Benefits of exercise", url: "https://www.nhs.uk/live-well/exercise/exercise-health-benefits/" };
const NHS_UNITS: LearnSource = { label: "NHS: Alcohol units", url: "https://www.nhs.uk/live-well/alcohol-advice/calculating-alcohol-units/" };
const NHS_LOSE_WEIGHT: LearnSource = { label: "NHS Better Health: How to lose weight", url: "https://www.nhs.uk/better-health/lose-weight/" };
const NHS_STRESS: LearnSource = { label: "NHS: 10 stress busters", url: "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/tips-to-reduce-stress/" };
const NHS_FAMILIES: LearnSource = { label: "NHS: Healthier Families", url: "https://www.nhs.uk/healthier-families/" };
const NHSE_DPP: LearnSource = { label: "NHS England: NHS Diabetes Prevention Programme (NHS DPP)", url: "https://www.england.nhs.uk/diabetes/diabetes-prevention/" };

export const prediabetesAnswers: LearnArticle[] = [
  {
    id: "pre-what-it-is",
    kicker: "Understanding",
    question: "What does prediabetes actually mean?",
    hook: "Blood sugar above the normal range, but not yet diabetes. A warning most people only find on a blood test.",
    short: "Prediabetes means your blood sugar levels are higher than they should be, but not high enough to be diagnosed as diabetes. On the HbA1c blood test, it is a result between 42 and 47 mmol/mol. It usually has no symptoms, and making health changes can often prevent type 2 diabetes and even bring blood sugar back to a normal level.",
    sections: [
      {
        heading: "Higher than it should be",
        paragraphs: [
          "Some people have blood glucose, or sugar, levels above the normal range but not high enough to be diagnosed as having diabetes. This is known as pre-diabetes or non-diabetic hyperglycaemia.",
          "It is sometimes called borderline diabetes. It is diagnosed by a blood test.",
        ],
      },
      {
        heading: "The numbers",
        paragraphs: [
          "The HbA1c blood test shows your average blood sugar levels for the last two to three months. It is the main test used to diagnose type 2 diabetes, and it is also used to keep an eye on your levels if you have prediabetes.",
          "A result below 42 mmol/mol is in the normal range. Between 42 and 47 mmol/mol is prediabetes. At 48 mmol/mol or above, it is type 2 diabetes.",
        ],
      },
      {
        heading: "Usually no symptoms",
        paragraphs: [
          "There are not usually any symptoms of prediabetes. So it may not be picked up unless your GP does a routine blood test, or an NHS Health Check, which is offered to some people in England.",
          "Prediabetes is estimated to affect around one in 12 people. It is more common in people living with overweight and obesity, but it can also affect people of a healthy weight.",
        ],
      },
      {
        heading: "If nothing changes",
        paragraphs: [
          "People with prediabetes are at greater risk of developing type 2 diabetes, which can bring serious health problems. Prediabetes does not go away on its own.",
          "Diabetes can increase your chance of other health problems, including heart attack and stroke, kidney problems, nerve damage and sight problems.",
        ],
      },
      {
        heading: "A warning you can act on",
        paragraphs: [
          "By making health changes, it is often possible to prevent type 2 diabetes. It may even be possible to bring your blood sugar back to a normal level, below 42 mmol/mol.",
          "To support you to make changes, your GP should refer you to a type 2 prevention course or advice.",
        ],
      },
    ],
    helps: [
      "Ask your GP about a type 2 prevention course or advice to support you to make changes.",
      "Talk to your care team about how eating more healthily, exercise and other lifestyle changes can help prevent type 2 diabetes.",
      "Ask for an urgent GP appointment, or get help from NHS 111, if you have any symptoms of diabetes.",
      "If you have a condition that affects your red blood cells, talk to your doctor about which test will be more accurate for you.",
    ],
    tryThisWeek: [
      "Ask your GP about a prevention course.",
      "Talk to your care team about changes.",
      "Get help if you have symptoms of diabetes.",
    ],
    ask: "What is my HbA1c, and how far is it from the diabetes range?",
    interactive: {
      kind: "scenarios",
      title: "Read the result",
      scenarios: [
        {
          id: "44",
          situation: "Your HbA1c result is 44 mmol/mol.",
          options: [{ text: "Prediabetes: between 42 and 47", best: true }, { text: "Type 2 diabetes" }, { text: "The normal range" }],
          why: "Between 42 and 47 mmol/mol is prediabetes. At 48 mmol/mol or above, it is type 2 diabetes.",
        },
        {
          id: "40",
          situation: "A later result comes back at 40 mmol/mol.",
          options: [{ text: "Back in the normal range, below 42", best: true }, { text: "Still prediabetes" }],
          why: "A result below 42 mmol/mol is in the normal range.",
        },
        {
          id: "no-symptoms",
          situation: "You feel well, with no symptoms at all.",
          options: [{ text: "Prediabetes can still be there", best: true }, { text: "No symptoms means no prediabetes" }],
          why: "There are not usually any symptoms of prediabetes. So it may not be picked up unless your GP does a routine blood test.",
        },
      ],
    },
    sources: [DUK_PRE, NHS_DIABETES, DUK_TEST, DUK_HBA1C, DUK_REVERSING, DUK_SYMPTOMS, NHS_T2_SYMPTOMS],
    quiz: {
      question: "Which HbA1c range is prediabetes?",
      options: [{ text: "42 to 47 mmol/mol", right: true }, { text: "48 mmol/mol or above" }, { text: "Below 42 mmol/mol" }],
      why: "Between 42 and 47 mmol/mol is prediabetes. At 48 mmol/mol or above, it is type 2 diabetes.",
    },
  },
  {
    id: "pre-why",
    kicker: "Causes",
    question: "Why does prediabetes happen?",
    hook: "Not one cause but a mix: age, family, weight, where the body stores fat, and the life you are living.",
    short: "Prediabetes happens when your body does not make enough insulin, or the insulin does not work very well. It is triggered by a combination of factors, such as age, family history, weight, ethnicity, poor sleep and smoking. Weight alone does not cause it, and you are not to blame.",
    sections: [
      {
        heading: "Insulin that is not working well",
        paragraphs: [
          "Insulin is a hormone that helps your body use glucose, or sugar, for energy. It helps keep blood sugar levels in a healthy range.",
          "With prediabetes, your body is not making enough insulin, or the insulin is not working very well. This is known as insulin resistance: the body's cells do not respond properly to insulin, so blood sugar levels can rise.",
        ],
      },
      {
        heading: "A mix of factors",
        paragraphs: [
          "Prediabetes is triggered by a combination of factors. These include your age, your family history, living with overweight or obesity, and having more fat stored in and around your organs.",
          "Your ethnicity, other medical conditions, poor quality sleep and smoking can play a part too. Statins and steroids can also increase the risk.",
        ],
      },
      {
        heading: "Not just weight",
        paragraphs: [
          "Weight alone does not cause prediabetes. How and where the body stores fat matters too. Fat stored in and around organs such as the liver and pancreas, which some people call hidden fat, can cause insulin resistance.",
          "Even people of a healthy weight can have this kind of fat, and a high waist measurement can be a sign of it. Around one in 10 people living with type 2 diabetes are a healthy weight.",
        ],
      },
      {
        heading: "Family and background",
        paragraphs: [
          "A family history of diabetes puts you at risk. But even when prediabetes runs in a family, some members may develop it and others may not, because their weight, diet, activity and age are different.",
          "If you are from a Black African, African Caribbean or South Asian background, your risk is higher, and it can come at a younger age and a lower body weight. The NHS says you may be more at risk of type 2 diabetes if you are white and over 40, or over 25 and from a South Asian, Chinese, Black African or Black Caribbean background.",
        ],
      },
      {
        heading: "The life around you",
        paragraphs: [
          "Living in a deprived community, poor quality housing and being on a limited income can all play an indirect part in raising the risk.",
          "Prediabetes may also follow a change in circumstances, such as a job loss, a bereavement or taking on caring. These can make it harder to keep up habits like sleeping well, eating well and staying active. It can be a shock to be diagnosed, but you are not to blame.",
        ],
      },
    ],
    helps: [
      "Check whether your waist is a healthy size for your height with the NHS waist to height ratio calculator.",
      "If you smoke, get NHS support to stop.",
      "Aim for good quality sleep.",
      "Call the Diabetes UK helpline on 0345 123 2399 if you want to chat things through.",
      "See a GP if you have a higher risk of developing diabetes.",
    ],
    tryThisWeek: [
      "Measure your waist against your height.",
      "Ask about NHS support to stop smoking.",
      "Call the helpline to talk things through.",
    ],
    ask: "Which of my risk factors can I change, and where should I start?",
    interactive: {
      kind: "risk-check",
      title: "What might be raising yours?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "weight", label: "Living with overweight or obesity", note: "Makes it harder for your body to manage blood sugar. Weight alone does not cause prediabetes.", changeable: true },
        { id: "waist", label: "A high waist measurement", note: "Can be a sign of hidden fat around the organs, which can cause insulin resistance.", changeable: true },
        { id: "sleep", label: "Poor quality sleep", note: "One of the factors behind prediabetes. Good quality sleep is linked to a lower risk.", changeable: true },
        { id: "smoking", label: "Smoking", note: "One of the factors behind prediabetes. NHS support to stop is available.", changeable: true },
        { id: "age", label: "Getting older", note: "Prediabetes risk increases as you get older.", changeable: false },
        { id: "family", label: "Diabetes in the family", note: "Puts you at risk, but not everyone in a family develops it.", changeable: false },
        { id: "background", label: "A higher-risk ethnic background", note: "Black African, African Caribbean or South Asian: risk is higher, and can come younger and at a lower body weight.", changeable: false },
        { id: "medicines", label: "Taking statins or steroids", note: "These can increase the risk of prediabetes and type 2 diabetes.", changeable: false },
        { id: "life", label: "A big change, like a bereavement", note: "Can make healthy habits harder to keep up. You are not to blame.", changeable: false },
      ],
    },
    sources: [DUK_CAUSES, NHS_DIABETES, DUK_PREVENT, NHS_T2_SYMPTOMS, DUK_INSULIN],
    quiz: {
      question: "Does weight alone cause prediabetes?",
      options: [{ text: "No: it is a mix of factors", right: true }, { text: "Yes, always" }, { text: "Only in older people" }],
      why: "Weight alone does not cause prediabetes. Prediabetes is triggered by a combination of factors.",
    },
  },
  {
    id: "pre-odds",
    kicker: "The odds",
    question: "Will my prediabetes turn into type 2 diabetes?",
    hook: "Not necessarily. The risk is high, but getting support to make changes can cut it in half.",
    short: "Prediabetes means a high risk of type 2 diabetes, but it is not certain. Getting support through your GP to make health changes can help cut the risk in half. Prediabetes does not go away on its own, and there is no guarantee, but any reduction in blood sugar helps.",
    sections: [
      {
        heading: "A high risk",
        paragraphs: [
          "If you have prediabetes, you have a high risk of type 2 diabetes. People with prediabetes, and women who have had gestational diabetes, have the highest risk.",
          "NHS England says there are currently two million people in England at high risk of developing type 2 diabetes.",
        ],
      },
      {
        heading: "Not a certainty",
        paragraphs: [
          "Type 2 diabetes is caused by a combination of factors that is individual to you. This explains why not everyone in a family develops it.",
          "The risk can be reduced through lifestyle changes. You can sometimes prevent or delay type 2 diabetes, even if there is a history of it in your family.",
        ],
      },
      {
        heading: "What support does",
        paragraphs: [
          "Getting support through your GP to make health changes can help cut your risk of type 2 diabetes in half.",
          "NHS England says its Healthier You programme cuts the risk of developing type 2 diabetes by more than a third for people who complete it. In NHS England figures from 2023 to 2025, people with prediabetes who had this support were 20% less likely to develop type 2 diabetes than those who did not.",
        ],
      },
      {
        heading: "No guarantee, but it helps",
        paragraphs: [
          "Prediabetes does not go away on its own, and there is no guarantee you can reverse it. But even if your blood sugar does not return to a normal level, any reduction helps keep you healthier.",
          "That includes lowering your cholesterol and blood pressure, and helping stop your HbA1c creeping up into the type 2 range, at 48 mmol/mol or above.",
        ],
      },
      {
        heading: "It can creep back",
        paragraphs: [
          "Your blood sugar levels can creep back up, even after they have returned to normal. Your GP should be offering you a blood test to check your average blood sugar levels at least once a year.",
        ],
      },
    ],
    helps: [
      "Ask your GP for a place on a type 2 prevention course, or for prevention advice.",
      "Focus on small goals that help you make long-term changes.",
      "Have the blood test your GP should offer at least once a year.",
      "Call the Diabetes UK helpline on 0345 123 2399 for support and advice.",
    ],
    tryThisWeek: [
      "Ask about a prevention course.",
      "Set one small goal.",
      "Book your yearly blood test.",
    ],
    ask: "Based on my results, how likely am I to develop type 2 diabetes?",
    interactive: {
      kind: "scenarios",
      title: "Reading the odds",
      scenarios: [
        {
          id: "parent",
          situation: "Your parent had type 2 diabetes.",
          options: [{ text: "Your risk is higher, but not certain", best: true }, { text: "You will definitely get it" }],
          why: "You can sometimes prevent or delay type 2 diabetes, even if there is a history of it in your family.",
        },
        {
          id: "still-over",
          situation: "Your HbA1c fell, but it is still above 42.",
          options: [{ text: "Keep going: any reduction helps", best: true }, { text: "Give up: it did not work" }],
          why: "Even if your blood sugar does not return to a normal level, any reduction helps keep you healthier.",
        },
        {
          id: "normal",
          situation: "Your blood sugar is back in the normal range.",
          options: [{ text: "Keep having the yearly test", best: true }, { text: "Stop testing: it has gone for good" }],
          why: "Your blood sugar levels can creep back up, even after they have returned to normal.",
        },
      ],
    },
    sources: [DUK_PRE, NHS_DIABETES, DUK_PREVENT, NHSE_DPP, DUK_COURSES, DUK_REVERSING, DUK_TREATMENTS],
    quiz: {
      question: "How much can support to make changes cut the risk of type 2 diabetes?",
      options: [{ text: "By about half", right: true }, { text: "Not at all" }, { text: "It removes the risk completely" }],
      why: "Getting support through your GP to make health changes can help cut your risk of type 2 diabetes in half.",
    },
  },
  {
    id: "pre-tests",
    kicker: "Tests",
    question: "How often should my blood sugar be tested?",
    hook: "At least once a year, with a simple blood test that needs no preparation.",
    short: "If you have prediabetes, your GP should offer you a blood test to check your average blood sugar levels at least once a year. The HbA1c test needs no preparation and shows your average over the last two to three months. Home kits and glucose sensors cannot diagnose prediabetes or diabetes.",
    sections: [
      {
        heading: "Once a year, at least",
        paragraphs: [
          "If you have prediabetes, your GP should offer you a blood test to check your average blood sugar levels, also called HbA1c or fasting glucose, at least once a year. They should also offer to check your weight.",
          "Your blood sugar levels can creep back up, even after prediabetes has gone away. If you have had gestational diabetes, it is important to keep going for your yearly HbA1c test.",
        ],
      },
      {
        heading: "The HbA1c test",
        paragraphs: [
          "The HbA1c test shows your average blood sugar levels for the last two to three months. You do not need to prepare for it. A small amount of blood is taken from a vein in your arm, and you will normally get the results in a few days.",
          "Some conditions that affect the red blood cells, such as sickle cell anaemia and thalassaemia, can affect how accurate the test is. If you have one, talk to your doctor about which test will be more accurate for you.",
        ],
      },
      {
        heading: "After a prevention course",
        paragraphs: [
          "At some point after a type 2 prevention course, you should be referred back to your GP for another HbA1c test, to see if anything has changed. If you are not referred back, make a follow-up appointment with your GP.",
        ],
      },
      {
        heading: "Home kits and sensors",
        paragraphs: [
          "A finger-prick test using a home kit, or data from a continuous glucose monitor, may show high blood sugar, but it will not confirm diabetes. Diagnosis can only be made by blood tests, which your GP can arrange.",
        ],
      },
      {
        heading: "Between tests",
        paragraphs: [
          "Watch for symptoms that can mean type 2 diabetes has developed. These include going to the toilet more often, especially at night, feeling more tired than usual, losing weight without trying, and feeling extremely thirsty.",
          "Genital itching or thrush, cuts and wounds that take longer to heal, and blurred vision can be signs too. Ask for an urgent GP appointment, or get help from NHS 111, if you have any symptoms of diabetes.",
        ],
      },
    ],
    helps: [
      "Have an HbA1c blood test at least once a year.",
      "If you are not referred back after a prevention course, make a follow-up appointment with your GP.",
      "Talk to your doctor about the right test if you have a condition that affects your red blood cells.",
      "Ask for an urgent GP appointment, or get help from NHS 111, if you have any symptoms of diabetes.",
    ],
    tryThisWeek: [
      "Have your yearly HbA1c test.",
      "Book a follow-up after a course.",
      "Know when to contact NHS 111.",
    ],
    ask: "When is my next HbA1c test due, and who will arrange it?",
    interactive: {
      kind: "signs",
      title: "Symptoms to mention",
      intro: "Tick any you have noticed. They can mean type 2 diabetes has developed.",
      signs: [
        "Toilet more often, especially at night",
        "Feeling more tired than usual",
        "Losing weight without trying",
        "Feeling extremely thirsty",
        "Genital itching or thrush",
        "Cuts and wounds taking longer to heal",
        "Blurred vision",
      ],
      after: "Ask for an urgent GP appointment, or get help from NHS 111, if you have any symptoms of diabetes.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [DUK_TREATMENTS, DUK_TEST, DUK_HBA1C, DUK_COURSES, DUK_SYMPTOMS, NHS_DIABETES],
    quiz: {
      question: "How often should your GP offer a blood test if you have prediabetes?",
      options: [{ text: "At least once a year", right: true }, { text: "Only if you feel unwell" }, { text: "Every ten years" }],
      why: "If you have prediabetes, your GP should offer you a blood test to check your average blood sugar levels at least once a year.",
    },
  },
  {
    id: "pre-programme",
    kicker: "Support",
    question: "What is the NHS Diabetes Prevention Programme?",
    hook: "A free nine-month course on food, weight and activity for people with prediabetes, in a group or on your phone.",
    short: "In England it is called Healthier You. It refers people at risk of type 2 diabetes to a nine-month lifestyle change programme, face to face in a group or digitally. Northern Ireland, Scotland and Wales have their own support. It is usually up to you to ask your GP for a referral.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "If you have prediabetes, you may be eligible for the NHS Diabetes Prevention Programme. It helps people make lifestyle changes and has been shown to help prevent type 2 diabetes.",
          "In England it is called Healthier You. It refers people at risk of type 2 diabetes to a nine-month, evidence-based lifestyle change programme.",
        ],
      },
      {
        heading: "Face to face or digital",
        paragraphs: [
          "The programme is available as a face-to-face group service and as a digital service, and people are free to choose between the two. The group course is 16 hours, run over different sessions. The digital course delivers 15-minute sessions to your mobile.",
          "The digital service can include wearable technology that monitors exercise, apps with health coaches, and online peer support groups.",
        ],
      },
      {
        heading: "What you learn",
        paragraphs: [
          "Topics cover the things that can help bring your blood sugar down. These include making different food choices, weight management, exercise, managing stress and getting enough sleep.",
          "You learn what will help you keep your HbA1c below the diabetes range, which is 48 mmol/mol or above.",
        ],
      },
      {
        heading: "Who can go, and how",
        paragraphs: [
          "In England, the course is for people aged 18 to 80 with prediabetes, or women with a history of gestational diabetes. Prediabetes here means an HbA1c of 42 to 47 mmol/mol.",
          "Although GPs may automatically refer you, it is usually up to you to ask for a referral. If you are not sure whether you are eligible, ask your GP surgery.",
        ],
      },
      {
        heading: "Elsewhere in the UK",
        paragraphs: [
          "In Northern Ireland, each Health and Social Care Trust runs a prevention programme, so ask your GP about a referral. In Scotland, all health boards offer access to courses, and there is a free online course called T2D Prevention e-Learning.",
          "In Wales, people diagnosed with prediabetes should be automatically referred to the All Wales Prevention Programme, where it is available. It is a half-hour chat by video or phone, with a follow-up a year later.",
        ],
      },
    ],
    helps: [
      "Ask your GP for a referral, as it is usually up to you to ask.",
      "Choose between the face-to-face group course and the digital course.",
      "If there is no course near you, ask your GP for prevention advice and about any weight loss services.",
      "After the course, make a follow-up appointment for an HbA1c test if you are not referred back.",
      "If English is not your first language, ask whether group sessions are offered in your language.",
    ],
    tryThisWeek: [
      "Ask your GP for a referral.",
      "Choose group or digital.",
      "Book a follow-up HbA1c test.",
    ],
    ask: "Can I be referred to the Diabetes Prevention Programme, and which format would suit me?",
    interactive: {
      kind: "flip-cards",
      title: "Courses across the UK",
      intro: "Turn each card to see what is on offer. Ask your GP surgery what is available where you live.",
      cards: [
        { id: "england-group", front: "England: group course", when: "Healthier You, face to face", back: "A nine-month group course, 16 hours in all, run over different sessions." },
        { id: "england-digital", front: "England: digital course", when: "Healthier You, on your phone", back: "A nine-month digital course delivering 15-minute sessions to your mobile." },
        { id: "northern-ireland", front: "Northern Ireland", when: "Health and Social Care Trusts", back: "Each trust runs a prevention programme. Ask your GP for a referral. Waiting lists can sometimes be long." },
        { id: "scotland", front: "Scotland", when: "All health boards", back: "Courses vary by area. A free online course, T2D Prevention e-Learning, is open to anyone who would like it." },
        { id: "wales", front: "Wales", when: "All Wales Prevention Programme", back: "A half-hour chat by video or phone, with a follow-up a year later. It covers around 80% of Wales." },
      ],
    },
    sources: [NHSE_DPP, DUK_COURSES, NHS_DIABETES, DUK_PREVENT],
    quiz: {
      question: "How long is the Healthier You programme in England?",
      options: [{ text: "Nine months", right: true }, { text: "One afternoon" }, { text: "Five years" }],
      why: "It refers people at risk of type 2 diabetes to a nine-month, evidence-based lifestyle change programme.",
    },
  },
  {
    id: "pre-weight",
    kicker: "Weight",
    question: "How much weight do I need to lose, and what actually works?",
    hook: "Less than many people think: losing 1% to 9% of your body weight can help. Not everyone needs to lose any.",
    short: "If you are living with overweight or obesity, even losing 1% to 9% of your body weight can help insulin work better. Not everyone with prediabetes needs to lose weight. There is no set way to do it: the most effective diet is a safe one you can stick to, ideally with support.",
    sections: [
      {
        heading: "Why weight loss helps",
        paragraphs: [
          "If you are living with overweight or obesity, losing weight is one of the most important ways you can help manage prediabetes. It is likely to have the biggest impact on reversing it.",
          "Losing weight can reduce levels of hidden fat in the liver and pancreas. This can help these organs work properly again and manage your blood sugar levels.",
        ],
      },
      {
        heading: "How much",
        paragraphs: [
          "Even small amounts of weight loss, between 1% and 9% of your body weight, can help insulin work better to manage blood sugar levels.",
          "For someone who weighs 75kg, just under 12 stone, that is a loss of between about one and a half pounds and around one stone.",
        ],
      },
      {
        heading: "Not everyone needs to",
        paragraphs: [
          "Not everyone with prediabetes needs to lose weight. But if you have gained weight as you have got older, even within a healthy BMI, it may be heavier than is healthy for you, and this can make your blood sugar rise.",
          "If your BMI is in the underweight category, losing more weight is not safe and will not help. Speak to your GP, as you may be malnourished.",
          "Even if you do not need to lose weight, or find it too hard, changes to your diet and more physical activity can help insulin work better.",
        ],
      },
      {
        heading: "What works",
        paragraphs: [
          "There is no set way to lose weight. The most effective diet is a safe diet that you can stick to, and it is much easier with the right support. Speak to your GP before changing your diet or trying to lose weight.",
          "As a general guide, government recommendations are that men need around 2,500 kcal a day to keep a healthy weight, and women around 2,000 kcal. Diabetes UK's meal plans contain fewer calories, which should help you lose weight.",
          "Exercise helps you keep off any weight you have lost, and can help preserve muscle. Poor sleep can increase your appetite and make weight loss harder.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "If you have prediabetes, you should be offered a place on a type 2 prevention course if one is available where you live. It can include support on regular eating and understanding triggers for overeating.",
          "If changes to your diet and activity have not helped you lose extra weight, your GP may recommend weight loss medication, depending on your BMI. A local pharmacist can also give advice and point you to NHS apps, such as the free NHS Weight Loss Plan app, which gives a 12-week plan.",
        ],
      },
    ],
    helps: [
      "Check your weight category with the NHS BMI tool, and your waist with the waist to height ratio calculator.",
      "Speak to your GP before changing your diet or trying to lose weight.",
      "Choose a safe way of eating that you can stick to.",
      "Focus on small goals, such as trying diet versions of sugary fizzy drinks for the next month.",
      "Ask your GP or pharmacist about support with weight loss.",
      "If there is a lot going on in your life, it may not be the right time; come back to it when you are ready.",
    ],
    tryThisWeek: [
      "Check your BMI and waist.",
      "Pick a way of eating you can keep.",
      "Try diet drinks for a month.",
    ],
    ask: "How much weight would make a difference for me, and what support is there?",
    interactive: {
      kind: "scenarios",
      title: "Does weight apply to you?",
      scenarios: [
        {
          id: "gained",
          situation: "You are a healthy weight but have gained some with age.",
          options: [{ text: "You may want to lose the extra pounds", best: true }, { text: "Weight cannot matter at a healthy BMI" }],
          why: "If you have gained weight as you have got older, even within a healthy BMI, it may be heavier than is healthy for you.",
        },
        {
          id: "underweight",
          situation: "Your BMI is in the underweight range.",
          options: [{ text: "Do not lose more; see your GP", best: true }, { text: "Lose a little more to be safe" }],
          why: "If your BMI is in the underweight category, losing more weight is not safe and will not help. Speak to your GP.",
        },
        {
          id: "too-hard",
          situation: "Losing weight feels too hard right now.",
          options: [{ text: "Eat better and move more anyway", best: true }, { text: "Do nothing until you can diet" }],
          why: "Even if you do not need to lose weight, or find it too hard, changes to your diet and more physical activity can help insulin work better.",
        },
      ],
    },
    sources: [DUK_LOSE_WEIGHT, DUK_TREATMENTS, DUK_PREVENT, DUK_REVERSING, NHS_LOSE_WEIGHT],
    quiz: {
      question: "How much weight loss can help insulin work better?",
      options: [{ text: "1% to 9% of body weight", right: true }, { text: "At least half your body weight" }, { text: "None: weight makes no difference" }],
      why: "Even small amounts of weight loss, between 1% and 9% of your body weight, can help insulin work better to manage blood sugar levels.",
    },
  },
  {
    id: "pre-moving",
    kicker: "Exercise",
    question: "What kind of movement lowers blood sugar?",
    hook: "Anything that leaves you slightly out of breath, plus getting up every half hour or so. Small steps count.",
    short: "Being active helps insulin work better, which helps keep blood sugar levels in range. Anything that makes you slightly out of breath, like a brisk walk, is particularly useful, and so is breaking up long periods of sitting. Adults should aim for at least 150 minutes of moderate activity a week, but starting small is sensible.",
    sections: [
      {
        heading: "Why it helps",
        paragraphs: [
          "Being physically active helps insulin work better in your body. That helps keep your blood sugar levels within range.",
          "Increasing physical activity has been shown to help lower blood sugar levels so they return to a normal range.",
        ],
      },
      {
        heading: "Slightly out of breath",
        paragraphs: [
          "Anything that makes you slightly out of breath, such as a brisk walk, is particularly good if you carry extra weight around your middle. In adults living with overweight or obesity, regular aerobic exercise may modestly reduce the hidden fat around the organs.",
          "Moderate activity raises your heart rate and makes you breathe faster and feel warmer. You can still talk, but not sing.",
        ],
      },
      {
        heading: "How much",
        paragraphs: [
          "Adults should aim for at least 150 minutes of moderate activity a week, or 75 minutes of vigorous activity. Strengthening activities on at least 2 days a week are recommended too.",
          "There is no one best activity. What matters is that it gets you moving more, that you enjoy it, and that it fits into your life.",
        ],
      },
      {
        heading: "Break up sitting",
        paragraphs: [
          "Sitting or lying down for long periods is linked with type 2 diabetes, even if you do the recommended amount of activity. So it is important to break up long periods of not moving.",
          "Try standing up every 30 to 45 minutes, or making phone calls standing up. Standing uses more than twice as much energy as sitting.",
        ],
      },
      {
        heading: "Start small",
        paragraphs: [
          "If you have not been active for a while, set realistic targets, such as a 10-minute walk after a meal. Walking is often a good place to start, and each step you take to move more can help prevent type 2 diabetes.",
          "Check with your GP before trying any new exercise. They can help you decide what is safe.",
        ],
      },
    ],
    helps: [
      "Check with your GP before trying a new activity.",
      "Take a 10-minute walk after a meal.",
      "Stand up and move around every 30 to 45 minutes.",
      "Walk on the spot during TV ad breaks or while the kettle boils.",
      "Get off the bus one stop early, or take the stairs instead of the lift.",
      "Get moving with family, friends or neighbours.",
    ],
    tryThisWeek: [
      "Walk for 10 minutes after a meal.",
      "Stand up every 30 to 45 minutes.",
      "Walk on the spot in the ad breaks.",
    ],
    ask: "Is there any activity I should avoid, and how should I build up?",
    interactive: {
      kind: "timeline",
      title: "A more active day",
      steps: [
        { id: "out", when: "Getting about", title: "One stop early", points: ["Get off the bus one stop earlier, or park further away.", "Take the stairs instead of the lift."] },
        { id: "sitting", when: "At work or at home", title: "Break up sitting", points: ["Stand up every 30 to 45 minutes.", "Make phone calls standing up."] },
        { id: "meal", when: "After a meal", title: "A 10-minute walk", points: ["A realistic target if you have not been active for a while."] },
        { id: "evening", when: "In the evening", title: "Move in the ad breaks", points: ["Walk on the spot during TV ad breaks.", "Put some music on and have a dance."] },
        { id: "week", when: "Over the week", title: "Build up to 150 minutes", points: ["At least 150 minutes of moderate activity.", "Strengthening activities on at least 2 days."] },
      ],
    },
    sources: [DUK_EXERCISE, NHS_ACTIVITY, DUK_PREVENT, DUK_TREATMENTS, NHS_EXERCISE],
    quiz: {
      question: "Which kind of activity is particularly helpful?",
      options: [{ text: "Anything that makes you slightly out of breath", right: true }, { text: "Only gym classes" }, { text: "None: sitting is fine" }],
      why: "Anything that makes you slightly out of breath, such as a brisk walk, is particularly good if you carry extra weight around your middle.",
    },
  },
  {
    id: "pre-food",
    kicker: "Food",
    question: "Which food swaps make the biggest difference?",
    hook: "No food is banned. Start with sugary drinks, white carbs and processed meat, one swap at a time.",
    short: "There is no food you cannot eat with prediabetes; it is about choosing healthier foods more often. Sugary drinks, refined carbs such as white bread and rice, and red and processed meats are linked with a higher risk. Swapping them for water or diet drinks, wholegrains, pulses, fish, fruit and vegetables can help.",
    sections: [
      {
        heading: "No banned foods",
        paragraphs: [
          "There is no food you cannot eat if you want to help manage prediabetes. It is a question of choosing healthier foods more often.",
          "Pick one or two tips to focus on, to help you start making long-term changes. Your portion sizes are important too.",
        ],
      },
      {
        heading: "Drinks first",
        paragraphs: [
          "Sugary drinks are linked with a higher risk of prediabetes. Swap cola or lemonade for diet or no added sugar versions, or better still, water.",
          "Limit fruit juice or smoothies to one small glass, 150ml, a day. Eat whole fruit or vegetables instead.",
        ],
      },
      {
        heading: "Brown, not white",
        paragraphs: [
          "Refined carbs such as white bread, white rice and sugary breakfast cereals are linked with a higher risk. They raise blood sugar levels more quickly than wholegrain carbs.",
          "As a general guide, go for brown rather than white: brown rice, wholemeal pasta, wholemeal bread and wholemeal chapatis.",
        ],
      },
      {
        heading: "Less red and processed meat",
        paragraphs: [
          "Limit or avoid red and processed meats such as bacon, ham, sausages, pork, beef and lamb.",
          "Instead, get your protein from pulses such as beans, chickpeas and lentils, or from eggs, fish, lean white meat, unsalted nuts and tofu.",
        ],
      },
      {
        heading: "More fruit, veg and better snacks",
        paragraphs: [
          "Eating more fruit and veg has been shown to help reduce the risk of type 2 diabetes. Aim for at least five a day. You can eat any fruit, but check your portion sizes.",
          "Choose snacks such as fruit, unsalted nuts, seeds and yoghurt instead of crisps, biscuits, cake and sweets.",
          "It takes about 20 minutes for your brain to register that you are full, so eat slowly.",
        ],
      },
    ],
    helps: [
      "Swap sugary drinks for diet versions or water.",
      "Choose wholegrain carbs over white ones.",
      "Get protein from pulses, eggs, fish or lean white meat instead of red and processed meat.",
      "Aim for at least five portions of fruit and veg a day.",
      "Use smaller plates and bowls, and eat slowly.",
      "Speak to your GP before changing your diet.",
    ],
    tryThisWeek: [
      "Swap one sugary drink for water.",
      "Choose brown over white carbs.",
      "Use a smaller plate.",
    ],
    ask: "Could I get support with changing what I eat?",
    interactive: {
      kind: "scenarios",
      title: "Pick the swap",
      scenarios: [
        {
          id: "cola",
          situation: "You usually have a can of cola with lunch.",
          options: [{ text: "Diet cola or water", best: true }, { text: "A big glass of fruit juice" }],
          why: "Swap cola or lemonade for diet or no added sugar versions, or better still, water. Limit fruit juice to one small glass a day.",
        },
        {
          id: "bread",
          situation: "You are choosing bread for sandwiches.",
          options: [{ text: "Wholemeal bread", best: true }, { text: "White bread" }],
          why: "Refined carbs raise blood sugar levels more quickly than wholegrain carbs.",
        },
        {
          id: "snack",
          situation: "You want a mid-afternoon snack.",
          options: [{ text: "Fruit or unsalted nuts", best: true }, { text: "A bag of crisps" }],
          why: "Choose snacks such as fruit, unsalted nuts, seeds and yoghurt instead of crisps, biscuits, cake and sweets.",
        },
        {
          id: "dinner",
          situation: "You are planning a weeknight dinner.",
          options: [{ text: "Lentils, chickpeas or fish", best: true }, { text: "Sausages or bacon" }],
          why: "Limit or avoid red and processed meats. Get your protein from pulses, eggs, fish, lean white meat, unsalted nuts and tofu.",
        },
      ],
    },
    sources: [DUK_EATING, DUK_CAUSES, DUK_TREATMENTS, DUK_PORTIONS],
    quiz: {
      question: "Is any food completely banned with prediabetes?",
      options: [{ text: "No: choose healthier foods more often", right: true }, { text: "Yes, all fruit" }, { text: "Yes, all carbs" }],
      why: "There is no food you cannot eat if you want to help manage prediabetes. It is a question of choosing healthier foods more often.",
    },
  },
  {
    id: "pre-sleep-stress",
    kicker: "Sleep and stress",
    question: "How do sleep and stress affect blood sugar?",
    hook: "Short nights raise appetite, and stress hormones make insulin work less well. Both are worth looking after.",
    short: "Poor quality sleep is linked with prediabetes. A lack of sleep increases appetite, and trouble falling or staying asleep raises the risk of type 2 diabetes. Stress hormones make it harder for insulin to work, so blood sugar rises, and stress can make healthy habits harder to keep up.",
    sections: [
      {
        heading: "Sleep and appetite",
        paragraphs: [
          "A lack of sleep is a known factor for weight gain. Not having enough sleep leads to hormonal changes that increase your appetite, and weight gain can cause insulin resistance.",
          "Poor quality sleep can also affect blood sugar levels. Research led by the University of Bristol, and funded by Diabetes UK, found that difficulty falling or staying asleep, known as insomnia, increases the risk of type 2 diabetes.",
          "Poor sleep may make you more likely to choose high-calorie foods, or too tired to exercise or cook healthy meals.",
        ],
      },
      {
        heading: "Sleep apnoea",
        paragraphs: [
          "Sleep apnoea is where breathing stops and starts, or repeatedly becomes shallow, overnight. It disturbs sleep and can increase the risk of prediabetes and type 2 diabetes.",
          "It can be serious, so if you think you have it, speak to your healthcare team. Smoking and drinking alcohol can make it worse.",
        ],
      },
      {
        heading: "How much sleep",
        paragraphs: [
          "Most experts recommend that adults get seven to nine hours of quality sleep a night. Regularly sleeping less than seven hours can increase the risk of poor health, such as high blood pressure, heart disease and stroke.",
        ],
      },
      {
        heading: "Stress hormones",
        paragraphs: [
          "When you are stressed, your body releases hormones such as cortisol and adrenaline. These make it harder for insulin to work properly, so blood sugar levels rise.",
          "Stress alone does not cause diabetes, but there may be a link with the risk of type 2. Some people react to stress by eating more, which can lead to weight gain.",
          "Prediabetes may also follow a change in circumstances, such as a job loss or a bereavement. This can make it harder to sleep well, eat well and stay active.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "Going to bed and getting up at the same time every day can help you sleep better. Try to relax for at least an hour before bed, avoid alcohol before bed, and turn off screens.",
          "For stress, being active can reduce some of its emotional intensity. Connecting with people and taking some time for yourself can help too. Try not to rely on alcohol, smoking and caffeine to cope.",
        ],
      },
    ],
    helps: [
      "Go to bed and get up at the same time every day.",
      "Relax for at least an hour before bed, and turn off screens.",
      "Avoid alcohol before bed.",
      "Speak to your healthcare team if you think you have sleep apnoea.",
      "Be active, and connect with people, to help with stress.",
      "Speak to your GP if you have tried these tips and are still struggling to sleep.",
    ],
    tryThisWeek: [
      "Keep the same bedtime and wake-up time.",
      "Switch off screens before bed.",
      "Connect with someone when stressed.",
    ],
    ask: "Could my sleep or stress be affecting my blood sugar, and what help is there?",
    interactive: {
      kind: "timeline",
      title: "A day that helps sleep",
      steps: [
        { id: "day", when: "In the day", title: "Get active", points: ["Try to be more active during the day.", "Activity can ease the intensity of stress."] },
        { id: "wind-down", when: "An hour before bed", title: "Wind down", points: ["Relax for at least an hour before bed.", "Avoid alcohol before bed."] },
        { id: "bedtime", when: "At bedtime", title: "Screens off", points: ["Turn off artificial lights and screens.", "Turn down the heating or use a fan."] },
        { id: "night", when: "Overnight", title: "Seven to nine hours", points: ["Most experts recommend seven to nine hours of quality sleep for adults."] },
        { id: "morning", when: "Every morning", title: "Same time up", points: ["Getting up at the same time every day helps."] },
      ],
    },
    sources: [DUK_SLEEP, DUK_STRESS, DUK_CAUSES, NHS_LOSE_WEIGHT, NHS_STRESS],
    quiz: {
      question: "What do stress hormones do to insulin?",
      options: [{ text: "Make it harder for insulin to work", right: true }, { text: "Help insulin work better" }, { text: "Nothing at all" }],
      why: "When you are stressed, your body releases hormones such as cortisol and adrenaline. These make it harder for insulin to work properly, so blood sugar levels rise.",
    },
  },
  {
    id: "pre-alcohol",
    kicker: "Alcohol",
    question: "Does alcohol affect prediabetes?",
    hook: "Alcohol does not cause diabetes, but drinking too much raises the risk, largely through calories and weight.",
    short: "Alcohol does not cause diabetes, but drinking to excess can increase your risk of type 2 diabetes, partly because of the calories. The guide for men and women is no more than 14 units a week on a regular basis, spread over three or more days, with some drink-free days. Alcohol can also make you hungrier and disturb your sleep.",
    sections: [
      {
        heading: "Alcohol and type 2 risk",
        paragraphs: [
          "Alcohol does not cause diabetes, but drinking to excess can increase your risk of type 2 diabetes.",
          "That is partly because alcohol contains a lot of calories, which can lead to weight gain. Living with overweight or obesity is one of the risk factors for type 2 diabetes.",
        ],
      },
      {
        heading: "The guidelines",
        paragraphs: [
          "Men and women are advised not to drink more than 14 units a week on a regular basis. If you regularly drink as much as 14 units, spread it over three or more days. Try to have several drink-free days each week.",
          "14 units is the same as six pints of average-strength beer, or 10 small glasses of lower-strength wine.",
        ],
      },
      {
        heading: "Hunger and weight",
        paragraphs: [
          "Alcohol stops your body burning fat while it deals with the alcohol, which makes weight loss harder. It also reduces a hormone called leptin, which tells your brain you are full, so you may feel hungrier.",
          "Drinking also reduces your willpower, so you are less likely to choose the healthier option, and the effects can last into the next day.",
        ],
      },
      {
        heading: "Sleep",
        paragraphs: [
          "Alcohol dehydrates your body and stops you sleeping properly. Try to avoid alcohol before bed, as it can disrupt your sleep-wake pattern and interfere with your sleep cycle.",
        ],
      },
      {
        heading: "Healthier choices",
        paragraphs: [
          "Use smaller wine and beer glasses, measure drinks out at home, and have a glass of water between alcoholic drinks.",
          "Have diet or sugar-free mixers with spirits. Avoid low-sugar beers and ciders, sometimes called diabetic drinks: they may have less sugar, but they contain more alcohol.",
        ],
      },
    ],
    helps: [
      "Keep to no more than 14 units a week, spread over three or more days.",
      "Have several drink-free days each week.",
      "Use smaller glasses, and measure drinks at home.",
      "Alternate alcoholic drinks with water or soft drinks.",
      "Choose diet or sugar-free mixers.",
      "Check the units in a drink with Alcohol Change UK's unit calculator.",
    ],
    tryThisWeek: [
      "Plan some drink-free days.",
      "Use smaller glasses.",
      "Have water between drinks.",
    ],
    ask: "Is the amount I drink affecting my blood sugar or my weight?",
    interactive: {
      kind: "flip-cards",
      title: "How many units?",
      intro: "Turn each card to see the units in a typical drink. The weekly guide is no more than 14.",
      cards: [
        { id: "spirits", front: "A single shot of spirits", when: "25ml at 40%", back: "1 unit." },
        { id: "lower-pint", front: "A pint of lower-strength lager", when: "Lower-strength lager, beer or cider", back: "2 units." },
        { id: "higher-pint", front: "A pint of higher-strength lager", when: "Higher-strength lager, beer or cider", back: "3 units." },
        { id: "large-wine", front: "A large glass of wine", when: "250ml at 12%", back: "3 units." },
        { id: "bottle", front: "A bottle of wine", when: "750ml of red, white or rosé", back: "10 units." },
      ],
    },
    sources: [DUK_ALCOHOL, DUK_EATING, NHS_UNITS, DUK_SLEEP],
    quiz: {
      question: "What is the weekly guide for men and women?",
      options: [{ text: "No more than 14 units", right: true }, { text: "28 units for men" }, { text: "There is no guide" }],
      why: "Men and women are advised not to drink more than 14 units a week on a regular basis.",
    },
  },
  {
    id: "pre-family",
    kicker: "Family",
    question: "How can we change things as a household?",
    hook: "Changes are easiest to stick to when the whole family is involved: the shopping, the cooking and the moving.",
    short: "Evidence suggests lifestyle changes are easiest to stick to when the whole family gets involved. A family history of diabetes raises the risk, but family members do not all go the same way, because their weight, diet, activity and age differ. Shopping, cooking and getting active together can help.",
    sections: [
      {
        heading: "A family matter",
        paragraphs: [
          "If your family has a history of diabetes, this puts you at risk of prediabetes and type 2 diabetes.",
          "But even when it runs in a family, some members may develop it and others may not. Family members share the same genes, but their weight, diet, physical activity and age are different.",
        ],
      },
      {
        heading: "Easier together",
        paragraphs: [
          "Evidence suggests that lifestyle changes are easiest to stick to if the whole family gets involved. Eating a healthy, balanced diet with more fruit and vegetables, and getting active, is the best way to prevent type 2 diabetes in adults and under-18s.",
          "Diabetes UK's healthy eating tips can be printed off and shared with family or friends.",
        ],
      },
      {
        heading: "Shopping and cooking",
        paragraphs: [
          "When shopping together, check the food labels. Picking food with green and amber labels rather than red means it is lower in sugar, salt, fat and saturated fat.",
          "If you rely on ready meals, add a serving of frozen or tinned vegetables. It is a quick, easy, cheap and healthy choice. Cooking together can be a nice way to support someone too.",
        ],
      },
      {
        heading: "Moving together",
        paragraphs: [
          "Taking up an activity together is one way to support someone. Getting moving with family, friends or neighbours can help both physical and mental health.",
          "Exercise can be as simple as kicking a ball around the park with your child or grandchild.",
        ],
      },
      {
        heading: "Support for each other",
        paragraphs: [
          "Offering to go along to healthcare appointments is a good way to show support, and to help someone remember what has been said.",
          "When people find out about a diagnosis, it can take them a while to accept it and start making changes. Let them know you are there for them and will listen when they are ready.",
          "If you are worried a child is at risk of type 2 diabetes, speak to your GP about getting them support.",
        ],
      },
    ],
    helps: [
      "Get the whole family involved in healthy eating and getting active.",
      "Check food labels together, and choose green and amber over red.",
      "Add frozen or tinned vegetables to ready meals.",
      "Take up an activity together.",
      "Offer to go along to appointments.",
      "Find recipes, food swaps and family activity ideas on the NHS Healthier Families website.",
    ],
    tryThisWeek: [
      "Involve the whole family.",
      "Check labels together.",
      "Try an activity together.",
    ],
    ask: "Should anyone else in my family be checked for prediabetes?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments at home",
      scenarios: [
        {
          id: "shop",
          situation: "You are doing the weekly shop together.",
          options: [{ text: "Compare labels: green and amber", best: true }, { text: "Buy whatever is on offer" }],
          why: "Picking food with green and amber labels rather than red means it is lower in sugar, salt, fat and saturated fat.",
        },
        {
          id: "ready-meal",
          situation: "It is a busy night, and dinner is a ready meal.",
          options: [{ text: "Add some frozen or tinned veg", best: true }, { text: "Skip vegetables tonight" }],
          why: "If you rely on ready meals, add a serving of frozen or tinned vegetables. It is a quick, easy, cheap and healthy choice.",
        },
        {
          id: "not-ready",
          situation: "Your partner is not ready to talk about it.",
          options: [{ text: "Say you are there to listen", best: true }, { text: "Push them to talk now" }],
          why: "It can take a while to accept a diagnosis. Let them know you are there for them and will listen when they are ready.",
        },
        {
          id: "child",
          situation: "You are worried your child is at risk.",
          options: [{ text: "Speak to your GP about support", best: true }, { text: "Wait and see" }],
          why: "If you are worried a child is at risk of type 2 diabetes, speak to your GP about getting them support.",
        },
      ],
    },
    sources: [DUK_CHILDREN, DUK_SUPPORTING, DUK_CAUSES, DUK_EXERCISE, NHS_FAMILIES, DUK_TEST, DUK_EATING],
    quiz: {
      question: "When are lifestyle changes easiest to stick to?",
      options: [{ text: "When the whole family gets involved", right: true }, { text: "When one person does it alone" }, { text: "Only on special diets" }],
      why: "Evidence suggests that lifestyle changes are easiest to stick to if the whole family gets involved.",
    },
  },
];
