import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Type 2 diabetes page's pieces (content/library-conditions/body.ts
// `learnId`). Every sentence was written from wording checked on 20 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS,
// Diabetes UK, NHS England's Path to Remission Programme page and the government's diabetes and driving
// page. General information only; it never replaces what a person's own team tells them.

const duk = (label: string, path: string): LearnSource => ({ label: `Diabetes UK: ${label}`, url: `https://www.diabetes.org.uk/${path}` });
const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });

const NHS_T2_WHAT = nhs("What is type 2 diabetes?", "conditions/type-2-diabetes/what-is-type-2-diabetes/");
const NHS_T2_SYMPTOMS = nhs("Symptoms of type 2 diabetes and how it's diagnosed", "conditions/type-2-diabetes/symptoms/");
const NHS_T2_TREATMENT = nhs("Treatment for type 2 diabetes", "conditions/type-2-diabetes/treatment/");
const NHS_T2_COMPLICATIONS = nhs("Complications of type 2 diabetes", "conditions/type-2-diabetes/complications/");
const NHS_T2_SUPPORT = nhs("Help and support for type 2 diabetes", "conditions/type-2-diabetes/support/");
const NHS_HYPO = nhs("Low blood sugar (hypoglycaemia)", "conditions/low-blood-sugar-hypoglycaemia/");
const NHS_HYPER = nhs("High blood sugar (hyperglycaemia)", "conditions/high-blood-sugar-hyperglycaemia/");
const NHS_METFORMIN = nhs("Metformin", "medicines/metformin/");
const NHS_GLICLAZIDE = nhs("Gliclazide", "medicines/gliclazide/");
const NHS_INSULIN_T2 = nhs("Insulin for type 2 diabetes", "medicines/insulin/insulin-for-type-2-diabetes/");
const NHS_EYE_SCREENING = nhs("Diabetic eye screening", "tests-and-treatments/diabetic-eye-screening/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");
const NHSE_REMISSION: LearnSource = { label: "NHS England: NHS Type 2 Diabetes Path to Remission Programme", url: "https://www.england.nhs.uk/diabetes/treatment-care/diabetes-remission/" };
const GOV_DRIVING: LearnSource = { label: "GOV.UK: Diabetes and driving", url: "https://www.gov.uk/diabetes-driving" };

const DUK_T2 = duk("Type 2 diabetes", "about-diabetes/type-2-diabetes");
const DUK_CAUSES = duk("What causes type 2 diabetes?", "about-diabetes/type-2-diabetes/causes");
const DUK_SYMPTOMS = duk("Type 2 diabetes symptoms", "about-diabetes/type-2-diabetes/symptoms");
const DUK_MEDICINE = duk("Type 2 diabetes medicine", "about-diabetes/type-2-diabetes/medicine");
const DUK_RESISTANCE = duk("Insulin resistance", "about-diabetes/looking-after-diabetes/treatments/insulin/resistance");
const DUK_INSULIN = duk("What is insulin?", "about-diabetes/looking-after-diabetes/treatments/insulin/what-is-insulin");
const DUK_INSULIN_T2 = duk("Insulin and type 2 diabetes", "about-diabetes/looking-after-diabetes/treatments/insulin/type-2-diabetes");
const DUK_METFORMIN = duk("Metformin", "about-diabetes/looking-after-diabetes/treatments/tablets-and-medication/metformin");
const DUK_SGLT2 = duk("SGLT2 inhibitors", "about-diabetes/looking-after-diabetes/treatments/tablets-and-medication/sglt2-inhibitors");
const DUK_GLP1 = duk("GLP-1 agonists", "about-diabetes/looking-after-diabetes/treatments/tablets-and-medication/glp-1");
const DUK_HBA1C = duk("What is HbA1c?", "about-diabetes/looking-after-diabetes/hba1c");
const DUK_TESTING = duk("How to check your blood sugar levels", "about-diabetes/looking-after-diabetes/blood-sugar-levels");
const DUK_CGM_NHS = duk("Can I get continuous glucose monitoring on the NHS?", "about-diabetes/looking-after-diabetes/technology/continuous-glucose-monitors/can-i-get-cgm-on-the-nhs");
const DUK_CHECKS = duk("Diabetes health checks (annual review)", "about-diabetes/looking-after-diabetes/care-to-expect");
const DUK_COMPLICATIONS = duk("Complications of diabetes", "about-diabetes/looking-after-diabetes/complications");
const DUK_RETINOPATHY = duk("Diabetic retinopathy", "about-diabetes/looking-after-diabetes/complications/retinopathy");
const DUK_KIDNEYS = duk("Diabetic nephropathy (kidney disease)", "about-diabetes/looking-after-diabetes/complications/kidneys-nephropathy");
const DUK_HEART = duk("Diabetes and heart disease", "about-diabetes/looking-after-diabetes/complications/cardiovascular-disease");
const DUK_FEET = duk("Diabetes and foot problems", "about-diabetes/looking-after-diabetes/complications/feet");
const DUK_FEET_CARE = duk("How to look after your feet", "about-diabetes/looking-after-diabetes/complications/feet/taking-care-of-your-feet");
const DUK_FEET_SERIOUS = duk("Serious foot problems and diabetes", "about-diabetes/looking-after-diabetes/complications/feet/serious-foot-problem");
const DUK_FOOT_CHECK = duk("Your annual diabetes foot check", "about-diabetes/looking-after-diabetes/complications/feet/what-can-i-expect-at-my-annual-foot-check");
const DUK_TOUCH_TOES = duk("Testing for sensitivity in your feet", "about-diabetes/looking-after-diabetes/complications/feet/touch-the-toes");
const DUK_HYPOS = duk("What is a hypo (hypoglycaemia)?", "about-diabetes/looking-after-diabetes/complications/hypos");
const DUK_HYPO_UNAWARE = duk("Hypoglycaemia (hypo) unawareness", "about-diabetes/looking-after-diabetes/complications/hypos/hypo-unawareness");
const DUK_REMISSION_WHAT = duk("What is type 2 diabetes remission?", "about-diabetes/type-2-diabetes/remission/what-is-type-2-diabetes-remission");
const DUK_REMISSION_PROGRAMME = duk("The remission weight loss programme", "about-diabetes/type-2-diabetes/remission/the-remission-weight-loss-programme");
const DUK_REMISSION_HEALTHY = duk("Type 2 diabetes remission for people of a healthy weight", "about-diabetes/type-2-diabetes/remission/type-2-diabetes-remission-for-people-of-a-healthy-weight");
const DUK_REMISSION_SUPPORT = duk("Support for type 2 diabetes remission", "about-diabetes/type-2-diabetes/remission/support-for-type-2-diabetes-remission");
const DUK_EAT_T2 = duk("I have type 2 diabetes: what can I eat?", "living-with-diabetes/eating/i-have-type-2-diabetes");
const DUK_10_TIPS = duk("10 tips for healthy eating with diabetes", "living-with-diabetes/eating/10-ways-to-eat-well-with-diabetes");
const DUK_PORTIONS = duk("Portion sizes and diabetes", "living-with-diabetes/eating/portion-sizes");
const DUK_EXERCISE = duk("Exercise for diabetes", "living-with-diabetes/exercise");
const DUK_EXERCISE_SUGAR = duk("Does exercise lower blood sugar levels?", "living-with-diabetes/exercise/blood-sugar-levels");
const DUK_WALKING = duk("Walking when you have diabetes", "living-with-diabetes/exercise/walking-with-diabetes");
const DUK_ILLNESS = duk("Managing diabetes when you're unwell", "living-with-diabetes/life-with-diabetes/illness");
const DUK_DRIVING = duk("Driving and diabetes", "living-with-diabetes/life-with-diabetes/driving");
const DUK_LICENCE = duk("Diabetes and your driving licence", "living-with-diabetes/life-with-diabetes/driving/driving-licence");
const DUK_BURNOUT = duk("What is diabetes distress and burnout?", "living-with-diabetes/emotional-wellbeing/diabetes-burnout");
const DUK_DEPRESSION = duk("Depression and diabetes", "living-with-diabetes/emotional-wellbeing/depression");

export const t2dAnswers: LearnArticle[] = [
  {
    id: "t2d-hba1c",
    kicker: "Understanding",
    question: "What is an HbA1c number?",
    hook: "One blood test that shows your average blood sugar over the last two to three months.",
    short: "HbA1c is your average blood sugar level over the last two to three months, found by a blood test. If you have diabetes, Diabetes UK says an ideal level is 48 mmol/mol or below, though your team may set you an individual target. Most people have the test every three to six months.",
    sections: [
      {
        heading: "What it measures",
        paragraphs: [
          "HbA1c is your average blood glucose, or sugar, level for the last two to three months. It is also called glycated haemoglobin.",
          "It is made when glucose in your body sticks to your red blood cells. Red blood cells are active for around two to three months, which is why the reading is taken every quarter.",
        ],
      },
      {
        heading: "The target",
        paragraphs: [
          "If you have diabetes, an ideal HbA1c level is 48 mmol/mol or below. The NHS lists an HbA1c of 48 mmol/mol or over as high. There is a different target for people at risk of type 2 diabetes: below 42 mmol/mol.",
          "But everyone is different. Your healthcare team may give you an individual target, so you can bring your level down in stages rather than in a sudden big drop. As people age, their target may be raised, because the risk of harm from a fall during a low blood sugar can outweigh the benefits.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "Most people have the test every three to six months, and you are entitled to it at least once a year.",
          "You may need it more often if your treatment has recently changed, you are planning a baby, or you are having problems managing your blood sugar levels.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "A high HbA1c means you have too much sugar in your blood. This makes you more likely to develop complications, like serious problems with your eyes and feet.",
          "Your HbA1c can change for lots of reasons, including being unwell, taking other medicines such as steroids, changes in lifestyle, and feeling very stressed or depressed.",
        ],
      },
      {
        heading: "Not a finger-prick test",
        paragraphs: [
          "A finger-prick test is a snapshot of your blood sugar at one moment. HbA1c shows the average over two to three months.",
          "Conditions that affect the red blood cells, such as sickle cell anaemia and thalassaemia, can affect how accurate the HbA1c test is. If you have one, ask your doctor which test is more accurate for you.",
        ],
      },
    ],
    helps: [
      "If you have not had an HbA1c test in over a year, contact your healthcare team.",
      "Ask your healthcare team what your own target level is.",
      "Write your results down in a diary to keep track and spot any trends.",
      "Ask about local diabetes education courses, which can help you take practical steps to lower your HbA1c.",
      "Get more active, and get advice on balanced, healthy eating.",
      "If you smoke, stop: smoking makes it harder for blood to flow around your body.",
    ],
    tryThisWeek: [
      "Ask what your target is.",
      "Start a diary of your results.",
      "Ask about an education course.",
    ],
    ask: "What was my last HbA1c, and what target are we aiming for?",
    interactive: {
      kind: "scenarios",
      title: "Reading your result",
      scenarios: [
        {
          id: "ideal",
          situation: "Your HbA1c is 48 mmol/mol or below.",
          options: [{ text: "In the ideal range for most people", best: true }, { text: "Too high for anyone with diabetes" }],
          why: "If you have diabetes, an ideal HbA1c level is 48 mmol/mol or below.",
        },
        {
          id: "overdue",
          situation: "Your last HbA1c test was over a year ago.",
          options: [{ text: "Contact your healthcare team", best: true }, { text: "Wait until someone calls you" }],
          why: "You are entitled to the test at least once a year. If you have not had one in over a year, contact your healthcare team.",
        },
        {
          id: "older",
          situation: "Your target has been raised as you have got older.",
          options: [{ text: "Ask your team why at your next visit", best: true }, { text: "Assume something has gone wrong" }],
          why: "As people age, their target may be raised, because the risk of harm from a fall during a low blood sugar can outweigh the benefits.",
        },
        {
          id: "blood",
          situation: "You have thalassaemia.",
          options: [{ text: "Ask which test is more accurate for you", best: true }, { text: "Rely on HbA1c alone" }],
          why: "Conditions that affect the red blood cells, such as sickle cell anaemia and thalassaemia, can affect how accurate the HbA1c test is.",
        },
      ],
    },
    sources: [DUK_HBA1C, NHS_HYPER, NHS_T2_TREATMENT, DUK_TESTING],
    quiz: {
      question: "What does an HbA1c test show?",
      options: [{ text: "Your average blood sugar over two to three months", right: true }, { text: "Your blood sugar at this moment" }, { text: "How much sugar you ate yesterday" }],
      why: "HbA1c is your average blood glucose, or sugar, level for the last two to three months.",
    },
  },
  {
    id: "t2d-what-it-is",
    kicker: "Understanding",
    question: "What is type 2 diabetes?",
    hook: "Insulin is the key that lets sugar into your cells. In type 2 diabetes, there is not enough of it, or it does not work properly.",
    short: "Type 2 diabetes is a common condition where your body cannot make enough of a hormone called insulin, or the insulin it makes does not work properly. Without it, glucose builds up in the blood instead of fuelling your cells. It can be managed with diet and exercise, or medicines, and for some people it can be stopped (remission).",
    sections: [
      {
        heading: "Insulin, the key",
        paragraphs: [
          "Insulin is a hormone made in your body that helps manage blood sugar levels. It is like a key that helps unlock your cells, so glucose in your blood can move into them and be used for energy.",
          "You get the glucose from the carbohydrates you eat or drink, which your body breaks down.",
        ],
      },
      {
        heading: "What goes wrong",
        paragraphs: [
          "In type 2 diabetes, your body cannot make enough insulin, or the insulin it makes does not work properly. This is called insulin resistance.",
          "When that happens, the glucose in your blood cannot enter your cells to give you energy. It builds up in your blood instead, and your blood sugar levels keep rising.",
        ],
      },
      {
        heading: "Insulin resistance",
        paragraphs: [
          "Insulin resistance is when your body's cells do not respond properly to insulin. You are more likely to have it if you have too much fat stored in and around your liver and pancreas.",
          "It is linked to living with overweight or obesity, but it can affect some people of a healthy weight. For people living with overweight or obesity, weight loss can help improve how the body uses insulin, and being more active can help too.",
        ],
      },
      {
        heading: "Who is more at risk",
        paragraphs: [
          "You may be more at risk if you are White and over 40, or over 25 and from a South Asian, Chinese, Black African or Black Caribbean background. If you have a close blood relative with diabetes, you are two to six times more likely to develop type 2 diabetes.",
          "Being overweight and not very active, and having a condition such as high blood pressure, also raise the risk. But around 10% of people with type 2 diabetes have a healthy BMI.",
        ],
      },
      {
        heading: "Often found on a blood test",
        paragraphs: [
          "Type 2 diabetes can go undiagnosed for years if you do not have symptoms or your symptoms are missed. Not everyone with type 2 diabetes has symptoms, so it is important to get checked out.",
          "The most common symptoms are feeling very tired, peeing more than usual, feeling thirsty all the time and losing weight without trying to. It is diagnosed with a blood test that checks how high your blood glucose levels are.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you may have type 2 diabetes, or if you have a higher risk of it.",
      "Use Diabetes UK's Know Your Risk tool to find out your risk.",
      "If you are 40 to 74 and do not have an existing health condition, ask your GP surgery or pharmacy for a free NHS Health Check.",
      "Ask about a course to learn more about type 2 diabetes, such as DESMOND or X-PERT Health.",
      "Talk to your diabetes care team about any questions on treatment and what happens next.",
    ],
    tryThisWeek: [
      "See a GP if you are worried.",
      "Check your risk with the online tool.",
      "Ask about a diabetes course.",
    ],
    ask: "Is insulin resistance part of my type 2 diabetes, and what would help mine?",
    interactive: {
      kind: "risk-check",
      title: "What raises the risk?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "weight", label: "Living with overweight or obesity", note: "The biggest risk factor, because it can cause insulin resistance.", changeable: true },
        { id: "waist", label: "A large waist measurement", note: "A high waist measurement means you are more at risk of insulin resistance.", changeable: true },
        { id: "active", label: "Not active for most of the day", note: "Moving more will help reduce your risk of developing type 2 diabetes.", changeable: true },
        { id: "bp", label: "High blood pressure", note: "A condition that increases your risk. Salt, especially in processed food, raises blood pressure.", changeable: true },
        { id: "age", label: "Getting older", note: "Your risk goes up as you get older.", changeable: false },
        { id: "background", label: "South Asian, Chinese or Black heritage", note: "Risk is higher, and from a younger age: from 25 rather than 40.", changeable: false },
        { id: "family", label: "A parent, brother or sister with it", note: "A close blood relative with diabetes makes you two to six times more likely to develop it.", changeable: false },
      ],
    },
    sources: [NHS_T2_WHAT, DUK_T2, DUK_CAUSES, DUK_RESISTANCE, DUK_INSULIN, NHS_T2_SYMPTOMS, DUK_SYMPTOMS],
    quiz: {
      question: "What is insulin resistance?",
      options: [{ text: "When cells do not respond properly to insulin", right: true }, { text: "When the body makes no insulin at all" }, { text: "An allergy to sugar" }],
      why: "Insulin resistance is when your body's cells do not respond properly to insulin.",
    },
  },
  {
    id: "t2d-complications",
    kicker: "Complications",
    question: "Why do the eyes, feet, kidneys and heart need checking?",
    hook: "High blood sugar over time damages blood vessels and nerves, often before you notice anything. Checks catch it early.",
    short: "Over time, high blood sugar can damage blood vessels and nerves, which can lead to problems with the eyes, feet, kidneys and heart. Many of these problems cause no symptoms at first. Going to all your diabetes appointments helps find and treat them as soon as possible.",
    sections: [
      {
        heading: "How the damage happens",
        paragraphs: [
          "Long-term complications are caused by high blood sugar levels over time. They can damage the blood vessels and nerves, which reduces blood flow and changes the feeling in parts of the body, such as the feet.",
          "Having type 2 diabetes increases your chance of coronary heart disease and stroke, foot problems, sight problems, kidney problems and gum disease.",
        ],
      },
      {
        heading: "Eyes",
        paragraphs: [
          "Diabetic retinopathy happens when high blood sugar damages the retina, the seeing part at the back of the eye. In the early stages, it does not tend to have any obvious symptoms.",
          "Diabetic eye screening checks for signs of it, often before you notice any changes in your sight. Finding and treating it early can prevent or reduce damage to your eyes and sight loss.",
        ],
      },
      {
        heading: "Kidneys",
        paragraphs: [
          "High blood sugar can damage the small blood vessels and tiny filters in your kidneys. High blood pressure can do this too. Almost one in five people with diabetes will need treatment for kidney disease caused by diabetes.",
          "You may not have any symptoms in the early stages, which is why you should have tests for kidney disease every year. Spotting it early means you can have treatment to slow it down.",
        ],
      },
      {
        heading: "Heart and circulation",
        paragraphs: [
          "High blood sugar for a long time, even slightly high, can start to damage your blood vessels. With diabetes, you are also more at risk of high cholesterol and high blood pressure, which can damage blood vessels too.",
          "This raises the risk of heart attacks, angina and strokes. Diabetes UK estimates that every week, diabetes is a cause in over 700 heart attacks and 1,010 strokes in the UK. A heart attack can sometimes happen without symptoms, and this is more common in older people and people with diabetes.",
        ],
      },
      {
        heading: "Feet",
        paragraphs: [
          "Raised blood sugar can damage the nerves in your feet, so you may not feel things properly and can hurt your feet without noticing. Damaged blood vessels also mean cuts and sores may be slow to heal.",
          "Left untreated, foot problems can lead to ulcers, infections and, at worst, amputations. Most foot problems can be prevented by taking care of your feet and having them checked as part of your annual review.",
        ],
      },
    ],
    helps: [
      "Go to all your diabetes appointments, and make sure you do not miss any tests.",
      "Keep your blood sugar, blood pressure and cholesterol within your targets, with support from your healthcare team.",
      "If you smoke, get support to stop.",
      "See a GP or diabetes nurse if you have blisters or cracked skin on your feet, pain, tingling or numbness, or your vision gets worse.",
      "If you notice changes in your sight, make an appointment with your doctor straight away rather than waiting for your next screening.",
      "Call 999 straight away if you think you are having a heart attack.",
    ],
    tryThisWeek: [
      "Check when your next tests are due.",
      "Ask what your targets are.",
      "Report any change in sight or feet.",
    ],
    ask: "When are my next eye, foot and kidney checks, and what did the last ones show?",
    interactive: {
      kind: "signs",
      title: "Changes to mention",
      intro: "Tick any you have noticed. Some can be early signs of diabetes complications.",
      signs: ["Blisters or cracked skin on your feet", "Pain, tingling or numbness", "Problems having sex", "Constipation or diarrhoea", "Your vision getting worse", "Floaters or dimmer vision", "Struggling to see in the dark", "Swollen ankles, feet or hands"],
      after: "See a GP or diabetes nurse. Do not wait for your next eye screening if your sight changes. Call 999 for sudden chest pain that does not go away.",
      copyHeading: "Changes I have noticed",
    },
    sources: [NHS_T2_COMPLICATIONS, DUK_COMPLICATIONS, DUK_RETINOPATHY, DUK_KIDNEYS, DUK_HEART, DUK_FEET, NHS_EYE_SCREENING],
    quiz: {
      question: "Why do the checks matter even if you feel well?",
      options: [{ text: "Early damage often has no symptoms", right: true }, { text: "The checks lower blood sugar by themselves" }, { text: "They are only needed once symptoms start" }],
      why: "You may not have any symptoms in the early stages, which is why you should have tests for kidney disease every year.",
    },
  },
  {
    id: "t2d-remission",
    kicker: "Remission",
    question: "What does remission mean, and who is it possible for?",
    hook: "Blood sugar back below the diabetes range, without diabetes medicine. Weight loss is the strongest route, and timing matters.",
    short: "Type 2 diabetes remission is when your long-term blood sugars fall below the diabetes level and stay there for at least three months, without glucose-lowering medication. The strongest evidence says it is mainly reached through weight loss, and the chances are better the sooner you try after diagnosis. It may not be possible for everyone, and you still need your checks.",
    sections: [
      {
        heading: "What remission means",
        paragraphs: [
          "Remission is when your long-term blood sugars fall below the diabetes level and stay there for at least three months, without the need for glucose-lowering medication. In medical terms, this means an HbA1c below 48 mmol/mol.",
          "Many people say reversing their type 2 diabetes. Diabetes UK and the NHS say remission, because the diabetes has not gone away completely and blood sugar levels can rise again.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "The strongest evidence suggests type 2 diabetes is mainly put into remission by weight loss. In many cases, it is caused by a build-up of fat inside the liver and pancreas, which stops them keeping blood sugar in a safe range.",
          "Losing weight can reduce the fat stored in these organs and kickstart them into managing blood sugar again. In the Diabetes UK-funded DiRECT trial, almost half of those who went on a low-calorie diet were in remission after one year.",
        ],
      },
      {
        heading: "Who it is more likely for",
        paragraphs: [
          "The chances of remission are better the sooner you try after your diagnosis. If you are living with obesity or overweight, remission is more likely if you lose around 15kg as quickly and safely as possible after diagnosis.",
          "Around 10% of people with type 2 diabetes have a BMI that is not in the overweight or obesity range. Losing weight could be unsafe for them, so Diabetes UK does not recommend trying without speaking to the healthcare team first.",
        ],
      },
      {
        heading: "The NHS programme",
        paragraphs: [
          "In England, the NHS Type 2 Diabetes Path to Remission Programme replaces all normal meals with low-calorie soups and shakes, of 800 to 900 kilocalories a day, for 12 weeks. Support and monitoring then continue for 12 months, including help to reintroduce food.",
          "It is for people diagnosed within the last 6 years with a BMI over 27, or over 25 for people from Black, Asian and other ethnic groups. Early results show 32% of those who completed it, with two HbA1c results recorded, had put their type 2 diabetes into remission.",
        ],
      },
      {
        heading: "Staying in remission",
        paragraphs: [
          "Staying in remission can be hard. Some people stay in remission for years, while others find their blood sugars rise again if they regain weight.",
          "You still need your eye screening and kidney checks, because there may be damage from before remission. Any time spent below the diabetes range can have benefits, and working towards remission brings other health benefits whether you reach it or not.",
        ],
      },
    ],
    helps: [
      "Talk to your GP or diabetes team about remission and the support available where you live.",
      "Do not change to a very strict, low-calorie diet without talking to a health professional first, especially if you take insulin or other diabetes medicine.",
      "Ask whether you are eligible for the NHS Path to Remission Programme.",
      "If your BMI is in the healthy range, speak to your healthcare team before trying to lose weight.",
      "Keep going to your eye screening and kidney checks, even in remission.",
    ],
    tryThisWeek: [
      "Ask your team about remission.",
      "Check before any very low-calorie diet.",
      "Keep your checks going.",
    ],
    ask: "Is remission realistic for me, and what support could I get?",
    interactive: {
      kind: "timeline",
      title: "The Path to Remission year",
      steps: [
        { id: "shakes", when: "Weeks 1 to 12", title: "Soups and shakes", points: ["All normal meals are replaced with low-calorie soups and shakes.", "Around 800 to 900 calories a day."] },
        { id: "food", when: "About 6 weeks", title: "Food comes back", points: ["Nutritious food is slowly reintroduced.", "Healthy meals of around 1200 calories a day."] },
        { id: "maintain", when: "To the end of the year", title: "Keeping the weight off", points: ["Support with activity, sleep, stress and healthy habits.", "Help if the weight starts to come back."] },
        { id: "after", when: "Afterwards", title: "Checks carry on", points: ["Your doctor or nurse keeps an eye on your blood sugar.", "Eye screening and kidney checks still matter."] },
      ],
    },
    sources: [DUK_REMISSION_WHAT, NHSE_REMISSION, DUK_REMISSION_PROGRAMME, DUK_REMISSION_HEALTHY, NHS_T2_TREATMENT, DUK_REMISSION_SUPPORT],
    quiz: {
      question: "According to the strongest evidence, what mainly leads to remission?",
      options: [{ text: "Weight loss", right: true }, { text: "Taking more tablets" }, { text: "Cutting out fruit" }],
      why: "The strongest evidence suggests type 2 diabetes is mainly put into remission by weight loss.",
    },
  },
  {
    id: "t2d-hypos",
    kicker: "Hypos",
    question: "Low blood sugar: who gets it, and what should I do?",
    hook: "Not everyone with type 2 diabetes gets hypos. If your medicine can cause them, knowing the signs and the fix matters.",
    short: "A hypo is when your blood sugar drops too low, usually below 4mmol/L. It is common if you take insulin, and can happen with some other diabetes medicines, such as gliclazide. Treat it straight away with something sugary, check again after 10 to 15 minutes, then eat something that keeps your blood sugar up for longer.",
    sections: [
      {
        heading: "Who gets hypos",
        paragraphs: [
          "Low blood sugar usually affects people with diabetes who take insulin or some other diabetes medicines. It can happen with medicines such as gliclazide and glimepiride.",
          "Metformin does not usually cause hypos when taken on its own, but they can happen when it is taken with insulin or a sulphonylurea. Not everyone with diabetes will have hypos.",
        ],
      },
      {
        heading: "The signs",
        paragraphs: [
          "Signs include feeling hungry, dizzy, anxious or irritable, sweating, shaking, tingling lips, heart palpitations, feeling tired or weak, blurred vision and feeling confused. Everyone has different symptoms, and they may change over time.",
          "A severe hypo can cause a seizure or make someone unconscious.",
        ],
      },
      {
        heading: "Treating a hypo",
        paragraphs: [
          "If you have symptoms or your blood sugar is below 4mmol/L, have something that raises it quickly. This could be a small glass of fruit juice or sugary fizzy drink, 5 glucose or dextrose tablets, 4 large jelly babies or 2 tubes of glucose gel.",
          "Check your blood sugar after 10 to 15 minutes. If it is still below 4mmol/L, have another sugary drink or snack and check again after 10 minutes. Once it is above 4mmol/L, eat something that keeps it up for longer, such as some biscuits, a sandwich or your next meal.",
        ],
      },
      {
        heading: "If someone is unconscious",
        paragraphs: [
          "Do not give them any food or drink, as they will not be able to swallow safely. Put them into the recovery position, and give a glucagon injection straight away if one is available and you know how to use it.",
          "Call 999 if there is no glucagon or you do not know how to use it, if they have not recovered within 10 minutes of the injection, or if they have been drinking alcohol.",
        ],
      },
      {
        heading: "Making hypos less likely",
        paragraphs: [
          "Hypos are more likely if you miss or delay meals, drink a lot of alcohol, especially without eating, or do a lot of exercise without eating more carbohydrate. Sometimes it is not clear why one happens.",
          "If you have lots of hypos, you are more likely to stop noticing the symptoms over time. This is called hypo unawareness, and it can be dangerous.",
        ],
      },
    ],
    helps: [
      "Check with your diabetes healthcare team whether your treatment is likely to cause hypos.",
      "Carry something that raises your blood sugar quickly, such as sugary drinks, sweets or glucose tablets.",
      "Do not skip or delay meals.",
      "Make sure your family and friends know how to treat severe low blood sugar.",
      "See a GP if you get hypos often, have had a severe one, or do not always recognise the symptoms.",
    ],
    tryThisWeek: [
      "Ask if your medicine can cause hypos.",
      "Carry a quick sugar with you.",
      "Show family how to help.",
    ],
    ask: "Which of my medicines could cause a hypo, and what should I carry?",
    interactive: {
      kind: "scenarios",
      title: "Low sugar moments",
      scenarios: [
        {
          id: "shaky",
          situation: "You feel shaky and your meter reads below 4mmol/L.",
          options: [{ text: "Have a sugary drink or glucose tablets", best: true }, { text: "Wait and see if it passes" }],
          why: "If you have symptoms or your blood sugar is below 4mmol/L, have something that raises it quickly.",
        },
        {
          id: "recheck",
          situation: "15 minutes later, you are still below 4mmol/L.",
          options: [{ text: "Have another sugary drink or snack", best: true }, { text: "Stop checking and carry on" }],
          why: "If it is still below 4mmol/L, have another sugary drink or snack and check again after 10 minutes.",
        },
        {
          id: "better",
          situation: "You are back above 4mmol/L and feel better.",
          options: [{ text: "Eat a sandwich or your next meal", best: true }, { text: "Have nothing more" }],
          why: "Once it is above 4mmol/L, eat something that keeps it up for longer, such as some biscuits, a sandwich or your next meal.",
        },
        {
          id: "unconscious",
          situation: "A friend with diabetes is unconscious.",
          options: [{ text: "Recovery position, then glucagon or 999", best: true }, { text: "Give them a drink of juice" }],
          why: "Do not give them any food or drink, as they will not be able to swallow safely.",
        },
      ],
    },
    sources: [NHS_HYPO, DUK_HYPOS, NHS_GLICLAZIDE, DUK_HYPO_UNAWARE, DUK_METFORMIN],
    quiz: {
      question: "Below what level is low blood sugar usually called a hypo?",
      options: [{ text: "4mmol/L", right: true }, { text: "10mmol/L" }, { text: "48 mmol/mol" }],
      why: "If you have symptoms or your blood sugar is below 4mmol/L, have something that raises it quickly.",
    },
  },
  {
    id: "t2d-tablets",
    kicker: "Treatment",
    question: "What do metformin and the other tablets do?",
    hook: "Metformin helps your own insulin work better. The others work in different ways, and some protect the heart and kidneys too.",
    short: "Metformin is usually the first tablet for type 2 diabetes. It lowers blood sugar by improving the way your body handles insulin. Many people are offered an SGLT2 inhibitor alongside it, which lets extra sugar pass out in your pee and helps protect the heart and kidneys. Other tablets, such as gliclazide, help the pancreas make more insulin.",
    sections: [
      {
        heading: "Not a sign of failure",
        paragraphs: [
          "When you are first diagnosed, you may not need medicine. But at some point most people with type 2 diabetes need it to keep their blood sugar levels healthy.",
          "This does not mean you have done anything wrong. Your body just needs some help to keep blood sugar levels in a healthy range and reduce the risk of complications.",
        ],
      },
      {
        heading: "Metformin",
        paragraphs: [
          "Metformin reduces the amount of sugar the liver releases into your body and helps the insulin your body makes work better. Most people take it one to three times a day with food.",
          "Common side effects include feeling or being sick, diarrhoea, tummy pain and a metallic taste. Most ease after a couple of weeks as your body gets used to it, and the slow-release tablet is easier on the stomach.",
        ],
      },
      {
        heading: "SGLT2 inhibitors",
        paragraphs: [
          "If you need medicine and have no other serious health conditions, you will usually be offered metformin together with an SGLT2 inhibitor. These help lower blood sugar by allowing extra sugar to pass out of your body in your pee.",
          "As well as helping with blood sugar, SGLT2 inhibitors help protect the heart and kidneys from serious complications. They are also known as gliflozins, such as dapagliflozin and empagliflozin.",
        ],
      },
      {
        heading: "Other tablets",
        paragraphs: [
          "Sulphonylureas, such as gliclazide, work mainly by stimulating the pancreas to make more insulin. They can cause low blood sugar and may encourage weight gain.",
          "Gliptins, also called DPP-4 inhibitors, help your body produce more insulin and reduce the glucose made by the liver when it is not needed. Pioglitazone reduces insulin resistance, so your own insulin works more effectively.",
        ],
      },
      {
        heading: "Keep taking them",
        paragraphs: [
          "It is important to keep taking your medicine, because if you stop, your blood sugar level may start to rise again. Talk to your doctor if you are having problems with it.",
          "If you miss a dose of metformin, do not take two doses to make up for it.",
        ],
      },
    ],
    helps: [
      "Take metformin with food, swallowing tablets whole with water.",
      "Speak to a pharmacist or doctor about side effects that bother you or do not go away.",
      "Do not stop your medicine unless your healthcare professional recommends it.",
      "Ask your healthcare team why they are prescribing each medicine.",
      "In England, ask about a prescription exemption certificate so your diabetes medicines are free.",
      "Tell your doctor or pharmacist about any other medicines, herbal remedies, vitamins or supplements you take.",
    ],
    tryThisWeek: [
      "Take metformin with food.",
      "Ask why each medicine is prescribed.",
      "Check you have an exemption certificate.",
    ],
    ask: "What does each of my diabetes medicines do, and could any of them cause hypos?",
    interactive: {
      kind: "flip-cards",
      title: "Your tablets, card by card",
      intro: "Turn each card to see what that kind of tablet does.",
      cards: [
        { id: "metformin", front: "Metformin", when: "Usually the first tablet", back: "Reduces the sugar the liver releases and helps your own insulin work better. Taken with food." },
        { id: "sglt2", front: "SGLT2 inhibitors", when: "Gliflozins, such as dapagliflozin", back: "Let extra sugar pass out in your pee, and help protect the heart and kidneys." },
        { id: "sulphonylurea", front: "Sulphonylureas", when: "Such as gliclazide", back: "Stimulate the pancreas to make more insulin. Can cause low blood sugar and weight gain." },
        { id: "gliptins", front: "Gliptins", when: "Also called DPP-4 inhibitors", back: "Help your body produce more insulin, and reduce glucose made by the liver when it is not needed." },
        { id: "pioglitazone", front: "Pioglitazone", when: "The only glitazone used in the UK", back: "Reduces insulin resistance, so the insulin your body makes works more effectively." },
      ],
    },
    sources: [NHS_T2_TREATMENT, NHS_METFORMIN, DUK_METFORMIN, DUK_SGLT2, DUK_MEDICINE, NHS_GLICLAZIDE],
    quiz: {
      question: "How does metformin help?",
      options: [{ text: "It helps your own insulin work better", right: true }, { text: "It is a form of insulin" }, { text: "It stops you absorbing food" }],
      why: "Metformin reduces the amount of sugar the liver releases into your body and helps the insulin your body makes work better.",
    },
  },
  {
    id: "t2d-injections",
    kicker: "Treatment",
    question: "When do GLP-1 injections and insulin come in?",
    hook: "Neither means you have failed. They are extra help when tablets are not enough, or when there is another reason.",
    short: "GLP-1 medicines, such as semaglutide and dulaglutide, are usually injections given once a week. You are more likely to be offered one if you have heart disease, are living with obesity, or were diagnosed before 40. Insulin comes in if other medicines no longer keep blood sugar in a healthy range, and around one in four people with type 2 diabetes take it.",
    sections: [
      {
        heading: "GLP-1 medicines",
        paragraphs: [
          "GLP-1 is a hormone released in the gut after eating. GLP-1 medicines copy it, helping the body produce more insulin when it is needed and lowering blood sugar.",
          "They slow down how quickly food is digested, keep you full for longer and can reduce your appetite, so many people lose weight. They can also help protect the heart and kidneys.",
        ],
      },
      {
        heading: "Who is offered one",
        paragraphs: [
          "If you have a history of heart disease, you may be offered a GLP-1 medicine, usually given by injection once a week. You may also be offered one if you are living with obesity and other treatments cannot lower your blood sugar.",
          "Diabetes UK says you are more likely to be offered one if you were diagnosed before the age of 40, have cardiovascular disease or are living with obesity. Not everyone with type 2 diabetes will need one.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Common side effects include feeling or being sick, constipation and diarrhoea. On their own they do not usually cause hypos, but hypos can happen when they are taken with insulin or a sulphonylurea.",
          "Severe stomach pain that spreads to your back can be a sign of pancreatitis, which needs urgent medical help. If you have diabetic eye disease and use insulin, it could get worse when you start semaglutide, so tell your doctor.",
        ],
      },
      {
        heading: "When insulin comes in",
        paragraphs: [
          "You will need insulin for type 2 diabetes if other diabetes medicines no longer work well enough to keep your blood glucose within a healthy range. Sometimes it is only needed for a short time, such as during pregnancy or illness, or to bring blood glucose down when you are first diagnosed.",
          "Around one in four people with type 2 diabetes take insulin. You still have type 2 diabetes, and needing insulin is not your fault or a sign you have not managed well.",
        ],
      },
      {
        heading: "Taking insulin",
        paragraphs: [
          "Insulin is usually injected with an insulin pen. The needles are very small, and using a pen does not usually hurt. Your diabetes nurse will show you where to inject and how to use your pen.",
          "Taking too much insulin can make your blood glucose go too low. For some people, starting insulin can bring weight gain. Insulin is free on prescription, along with any pens or needles you need.",
        ],
      },
    ],
    helps: [
      "Ask your healthcare team whether a GLP-1 medicine would suit you.",
      "Get urgent medical help for severe stomach pain that spreads to your back.",
      "Tell your doctor if you have diabetic eye disease, or notice eye problems while taking semaglutide.",
      "Ask your diabetes nurse to show you where to inject and how to use your pen.",
      "Keep going to your appointments, staying active and eating healthily while you take insulin.",
      "In England, if you are under 60, ask your GP for a medical exemption certificate for free prescriptions.",
    ],
    tryThisWeek: [
      "Ask if a GLP-1 medicine would suit you.",
      "Ask your nurse to show you how to inject.",
      "Get an exemption certificate.",
    ],
    ask: "Would a GLP-1 medicine or insulin help me, and what would change day to day?",
    interactive: {
      kind: "flip-cards",
      title: "Injections, card by card",
      intro: "Turn each card to see what that injection does and when it is taken.",
      cards: [
        { id: "glp1", front: "GLP-1 medicines", when: "Such as semaglutide (Ozempic)", back: "Help the body make insulin when needed, slow digestion and can reduce appetite. Ozempic is once a week." },
        { id: "tirzepatide", front: "Tirzepatide (Mounjaro)", when: "A once-weekly injection", back: "Works in a similar way to a GLP-1 medicine, and also acts on another hormone called GIP." },
        { id: "long", front: "Long or intermediate-acting insulin", when: "Once or twice a day", back: "Intermediate-acting insulin is usually recommended. Long-acting may suit people who often get hypos." },
        { id: "rapid", front: "Rapid or short-acting insulin", when: "Before meals", back: "Added if a longer-acting insulin does not lower blood glucose enough on its own." },
        { id: "mixed", front: "Mixed (biphasic) insulin", when: "1 to 3 times a day before meals", back: "Less flexible than separate types, but it means fewer injections." },
      ],
    },
    sources: [NHS_T2_TREATMENT, DUK_GLP1, DUK_INSULIN_T2, NHS_INSULIN_T2, DUK_INSULIN],
    quiz: {
      question: "If you start insulin, do you now have type 1 diabetes?",
      options: [{ text: "No, you still have type 2", right: true }, { text: "Yes, it becomes type 1" }, { text: "Only if you inject every day" }],
      why: "You still have type 2 diabetes, and needing insulin is not your fault or a sign you have not managed well.",
    },
  },
  {
    id: "t2d-food",
    kicker: "Food",
    question: "What can I eat with type 2 diabetes?",
    hook: "There is no special diabetes diet. Healthier carbs, sensible portions and small swaps you can stick with.",
    short: "There is no special diet just for type 2 diabetes. Diabetes UK suggests healthier choices more often, with treats only occasionally and in small portions. All carbohydrates affect blood glucose, so choosing higher-fibre carbs and watching portion sizes helps, and losing weight if you need to can make a big difference.",
    sections: [
      {
        heading: "No special diet",
        paragraphs: [
          "There is no such thing as a special diet just for people with type 2 diabetes, and no one-size-fits-all way of eating. The advice is to make healthier choices more often, and have treats only occasionally and in small portions.",
          "It is best to avoid foods labelled diabetic. There is no evidence they offer a special benefit, and they can still affect your blood glucose levels.",
        ],
      },
      {
        heading: "Carbohydrates",
        paragraphs: [
          "Carbohydrates are broken down into glucose. The total amount you have makes the biggest difference to your glucose levels after eating, but everyone needs some carbohydrate-containing foods.",
          "Healthier sources include whole grains, fruit, vegetables, pulses such as chickpeas and lentils, and unsweetened yoghurt and milk. Choose high-fibre and wholegrain foods instead of refined carbs, such as white bread and white rice.",
        ],
      },
      {
        heading: "Portions",
        paragraphs: [
          "Larger portions can mean more calories, carbs, fat, sugar and salt, which makes blood sugar and weight harder to manage. Hand measures can help: a portion of cooked rice or pasta is about what fits in two cupped hands, and a jacket potato is about the size of your fist.",
          "Everybody's needs are different, and a dietitian can advise on the portions that are right for you.",
        ],
      },
      {
        heading: "Sugar, salt and fruit",
        paragraphs: [
          "Whole fruit is good for everyone, and having diabetes is no different. The sugar in fruit juice counts as free sugar, so whole fruit is the better choice.",
          "Swapping sugary drinks, energy drinks and fruit juices for water, plain milk, or tea and coffee without sugar is a good start. Adults should aim for no more than 6 grams of salt a day, about one teaspoon.",
        ],
      },
      {
        heading: "Weight and real life",
        paragraphs: [
          "If you are overweight, losing weight can help you manage your blood sugar, blood pressure and cholesterol. There is strong evidence that it can put type 2 diabetes into remission.",
          "Make changes that are realistic and achievable, so you stick with them. If you are finding it hard to change your diet, a GP or diabetes nurse may be able to find support in your local area.",
        ],
      },
    ],
    helps: [
      "Make healthier choices more often, and keep treats occasional and small.",
      "Choose wholegrain, high-fibre carbs, and be aware of your portion sizes.",
      "Swap sugary drinks for water, plain milk, or tea and coffee without sugar.",
      "Aim for two portions of oily fish a week, and eat less red and processed meat.",
      "Improve your diet slowly: a small change every week can make it easier.",
      "Speak to your GP or nurse before trying a low-calorie diet, especially if you use insulin.",
    ],
    tryThisWeek: [
      "Swap one sugary drink.",
      "Check one portion by hand.",
      "Make one small change this week.",
    ],
    ask: "Could I see a dietitian, and what way of eating would suit my goals?",
    interactive: {
      kind: "scenarios",
      title: "Everyday food choices",
      scenarios: [
        {
          id: "label",
          situation: "Biscuits are labelled suitable for diabetics.",
          options: [{ text: "Skip them: no special benefit", best: true }, { text: "Eat them freely" }],
          why: "It is best to avoid foods labelled diabetic. There is no evidence they offer a special benefit, and they can still affect your blood glucose levels.",
        },
        {
          id: "fruit",
          situation: "You fancy fruit but worry about the sugar.",
          options: [{ text: "Have a piece of whole fruit", best: true }, { text: "Have a fruit juice instead" }],
          why: "Whole fruit is good for everyone. The sugar in fruit juice counts as free sugar, so whole fruit is the better choice.",
        },
        {
          id: "rice",
          situation: "You are serving rice for dinner.",
          options: [{ text: "About two cupped hands", best: true }, { text: "Fill the plate" }],
          why: "A portion of cooked rice or pasta is about what fits in two cupped hands.",
        },
        {
          id: "snack",
          situation: "You want a snack between meals.",
          options: [{ text: "Unsalted nuts, or carrots and hummus", best: true }, { text: "Crisps or biscuits" }],
          why: "If you do feel like a snack, Diabetes UK suggests a healthier option like unsalted nuts or seeds, or carrot or cucumber sticks and hummus.",
        },
      ],
    },
    sources: [DUK_EAT_T2, DUK_10_TIPS, DUK_PORTIONS, NHS_T2_TREATMENT],
    quiz: {
      question: "What has the biggest effect on blood glucose after eating?",
      options: [{ text: "The total amount of carbohydrate", right: true }, { text: "The time of day" }, { text: "How much water you drink" }],
      why: "The total amount you have makes the biggest difference to your glucose levels after eating.",
    },
  },
  {
    id: "t2d-moving",
    kicker: "Exercise",
    question: "What kind of movement lowers blood sugar?",
    hook: "Steady activity like walking tends to bring blood sugar down. Even a 10-minute walk after a meal counts.",
    short: "Being active helps insulin work better, which helps keep blood sugar in range. Steady activity such as walking, cycling and swimming tends to lower blood sugar, while short, sharp bursts can push it up. The NHS suggests at least two and a half hours a week of activity that leaves you out of breath, built up gradually.",
    sections: [
      {
        heading: "Why it helps",
        paragraphs: [
          "Being physically active helps insulin work better in your body, whether it is the insulin you take or the insulin your body makes. This helps keep your blood sugar levels within target and helps prevent complications.",
          "Moving more can also improve your HbA1c, reduce blood pressure, help you lose weight, give you energy and help you sleep. It can help some people with type 2 diabetes put it into remission.",
        ],
      },
      {
        heading: "Which kind",
        paragraphs: [
          "Activity at a comfortable pace, such as walking, jogging, yoga, cycling or swimming, tends to lower blood sugar. Short, sharp bursts, such as sprinting, squash or high-intensity interval training, tend to raise it.",
          "Walking is often a good place to start. It is free, easy on your joints and suitable for all fitness levels and ages.",
        ],
      },
      {
        heading: "How much",
        paragraphs: [
          "The NHS suggests trying to spend at least two and a half hours across the week walking or doing another activity that leaves you out of breath. Diabetes UK suggests at least 150 minutes of moderate activity a week, which you can break into chunks of 10 minutes.",
          "Adults should also do strengthening activities on at least 2 days a week, and break up long periods of not moving.",
        ],
      },
      {
        heading: "Start small",
        paragraphs: [
          "If you have not been active for a while, set realistic targets, such as a 10-minute walk after a meal. Standing up every 30 to 45 minutes can also help lower your blood sugar.",
          "Check with your GP before trying new exercises. If you have complications, such as problems with your eyes, heart or feet, talk the activity through with your healthcare team.",
        ],
      },
      {
        heading: "If your medicine can cause hypos",
        paragraphs: [
          "If you use insulin or other medicine that lowers blood sugar, check your levels before and after exercise. Keep fast-acting carbohydrates, like sugary drinks and glucose tablets, to hand.",
          "Do not exercise if your blood sugar is 4mmol/L or lower. Your blood sugar can keep changing for up to 24 hours after activity, so keep checking.",
        ],
      },
    ],
    helps: [
      "Start with something you enjoy, such as a 10-minute walk after a meal.",
      "Stand up every 30 to 45 minutes, or make phone calls standing up.",
      "Build up to at least 150 minutes of moderate activity a week.",
      "Check with your GP before trying new exercises.",
      "Wear shoes that fit well, and check your feet after a walk.",
      "If your medicine can cause hypos, carry hypo treatment and check your levels before and after.",
    ],
    tryThisWeek: [
      "Walk for 10 minutes after a meal.",
      "Stand up every half hour or so.",
      "Check your feet after walking.",
    ],
    ask: "Is it safe for me to be more active, and do I need to check my sugar around exercise?",
    interactive: {
      kind: "scenarios",
      title: "Getting moving safely",
      scenarios: [
        {
          id: "start",
          situation: "You have not been active for years.",
          options: [{ text: "A 10-minute walk after a meal", best: true }, { text: "Try a high-intensity class tomorrow" }],
          why: "If you have not been active for a while, set realistic targets, such as a 10-minute walk after a meal.",
        },
        {
          id: "desk",
          situation: "You sit at a desk most of the day.",
          options: [{ text: "Stand up every 30 to 45 minutes", best: true }, { text: "Wait for the weekend" }],
          why: "Standing up every 30 to 45 minutes can also help lower your blood sugar.",
        },
        {
          id: "low",
          situation: "You take insulin and read 4mmol/L before a walk.",
          options: [{ text: "Do not exercise yet: treat it first", best: true }, { text: "Go anyway" }],
          why: "Do not exercise if your blood sugar is 4mmol/L or lower.",
        },
        {
          id: "feet",
          situation: "You have nerve damage in your feet.",
          options: [{ text: "Ask about swimming or chair exercises", best: true }, { text: "Take up jogging" }],
          why: "With nerve disease, Diabetes UK suggests mostly activities that keep weight off your feet, such as swimming or chair-based exercises.",
        },
      ],
    },
    sources: [DUK_EXERCISE, DUK_EXERCISE_SUGAR, DUK_WALKING, NHS_ACTIVITY, NHS_T2_TREATMENT, DUK_10_TIPS],
    quiz: {
      question: "Which kind of activity tends to lower blood sugar?",
      options: [{ text: "Walking at a comfortable pace", right: true }, { text: "Sprinting" }, { text: "Squash" }],
      why: "Activity at a comfortable pace, such as walking, jogging, yoga, cycling or swimming, tends to lower blood sugar.",
    },
  },
  {
    id: "t2d-monitoring",
    kicker: "Monitoring",
    question: "Do I need to check my own blood sugar?",
    hook: "Many people with type 2 diabetes do not. If you take insulin or certain tablets, it becomes part of daily life.",
    short: "Not everyone with diabetes needs to check their blood sugar at home. You will need to if you take certain medicines, such as insulin or sulphonylureas. Everyone with diabetes has the HbA1c blood test, which shows the average over the last three months.",
    sections: [
      {
        heading: "Who needs to",
        paragraphs: [
          "Not everyone with diabetes needs to check their levels at home. You will need to if you take certain diabetes medicines, such as insulin or sulphonylureas.",
          "Checking helps you know when you might be going too low or too high, and when to change your medicine, eat something or plan for activity. Your healthcare team will advise whether to check and how often.",
        ],
      },
      {
        heading: "Finger-prick tests",
        paragraphs: [
          "A finger-prick test uses a blood glucose meter and gives a snapshot of your blood sugar at that moment. Your healthcare team will show you how to do it properly, as doing it wrongly could affect your result.",
          "Wash and dry your hands first, without wet wipes, and prick the side of a finger rather than your thumb or index finger. Use a different finger each time, use each lancet only once, and note your readings down.",
        ],
      },
      {
        heading: "Sensors",
        paragraphs: [
          "A continuous glucose monitor, or CGM, is a small sensor you wear that reads your sugar levels without finger pricks. It measures the fluid around your cells, so readings can lag behind blood sugar by up to 15 minutes.",
          "In England, Wales and Northern Ireland, adults with type 2 diabetes who use insulin two or more times a day should be offered one if they have recurrent or severe hypos, or meet other criteria. Even with a sensor, it is important to still have a meter and strips for finger-prick checks.",
        ],
      },
      {
        heading: "Targets for type 2",
        paragraphs: [
          "There are currently no NICE recommendations for day-to-day blood sugar targets in type 2 diabetes, so speak to your healthcare team about yours.",
          "As a general guide, the NHS lists a home reading over 7 mmol/L on waking or before eating, or over 11 mmol/L at least 90 minutes after eating, as high. Below 4mmol/L is low.",
        ],
      },
      {
        heading: "HbA1c for everyone",
        paragraphs: [
          "Whatever you do at home, your healthcare team will ask you for an HbA1c blood test at least once a year, and most people have it every three to six months. It checks your average blood sugar over the last three months.",
        ],
      },
    ],
    helps: [
      "Ask your healthcare team whether you need to check your own blood sugar, and how often.",
      "Ask to be shown how to do a finger-prick test properly.",
      "Record your readings in a diary, a notebook or an app.",
      "If you use insulin, ask whether you are eligible for a CGM.",
      "Ask your healthcare team what your own blood sugar targets are.",
    ],
    tryThisWeek: [
      "Ask if you need to check at home.",
      "Keep a log of your readings.",
      "Ask about a CGM if you use insulin.",
    ],
    ask: "Do I need to check my own blood sugar, and what targets should I use?",
    interactive: {
      kind: "timeline",
      title: "One finger-prick test",
      steps: [
        { id: "wash", when: "First", title: "Clean, warm hands", points: ["Wash with soap and warm water, then dry well.", "Do not use wet wipes, which can affect the result."] },
        { id: "ready", when: "Next", title: "Get the kit ready", points: ["Put a new lancet in the finger-prick device.", "Slot a test strip into the meter to turn it on."] },
        { id: "prick", when: "The test", title: "Prick the side of a finger", points: ["Avoid your thumb and index finger.", "Use a different finger each time."] },
        { id: "read", when: "The reading", title: "Hold the strip to the blood", points: ["The meter draws the blood in, usually with a beep.", "Put the lancet in your sharps bin."] },
        { id: "note", when: "Afterwards", title: "Write it down", points: ["Note the result in a diary, notebook or app.", "Your team can look back to see if treatment needs changing."] },
      ],
    },
    sources: [DUK_TESTING, DUK_HBA1C, DUK_CGM_NHS, NHS_HYPER, NHS_HYPO],
    quiz: {
      question: "Who usually needs to check their blood sugar at home?",
      options: [{ text: "People taking insulin or sulphonylureas", right: true }, { text: "Everyone with type 2 diabetes" }, { text: "Only people in remission" }],
      why: "You will need to if you take certain diabetes medicines, such as insulin or sulphonylureas.",
    },
  },
  {
    id: "t2d-annual-checks",
    kicker: "Checks",
    question: "What are the yearly checks, and what is each one for?",
    hook: "Nine checks that can spot problems before you have symptoms, so they can be treated early.",
    short: "Your annual review includes 9 diabetes health checks, from HbA1c and blood pressure to your feet, kidneys and eyes. They can spot problems early, before you have symptoms, so they can be treated. If you are not invited, ring your GP surgery for an appointment.",
    sections: [
      {
        heading: "Nine checks",
        paragraphs: [
          "Diabetes health checks, known as your annual review, are part of your routine NHS treatment. There are 9 checks, and some may happen more than once a year.",
          "They can spot problems before you have symptoms, so you can get treatment early. That can help prevent sight loss, amputations, kidney disease, heart attack and stroke.",
        ],
      },
      {
        heading: "Blood and urine tests",
        paragraphs: [
          "A blood test checks your HbA1c, your cholesterol and how well your kidneys are working. A urine sample is sent to the lab to check for signs of kidney disease.",
          "The urine test, called ACR, looks for abnormal amounts of a protein called albumin. It can spot kidney disease in its early stages, so treatment can be started to stop it progressing.",
        ],
      },
      {
        heading: "At your appointment",
        paragraphs: [
          "You should have your blood pressure measured, your weight and height measured to work out your BMI, and a foot check. You will also be asked if you smoke, so you can be offered help to stop.",
          "At the foot check, a health professional looks at your bare feet, checks the blood supply and tests the feeling. You will be told whether your risk of a foot problem is low, moderate or high.",
        ],
      },
      {
        heading: "Eye screening",
        paragraphs: [
          "Diabetic eye screening usually happens at a separate appointment somewhere different. Photographs are taken of the back of your eyes to look for diabetic retinopathy.",
          "The eye drops can make your sight blurry for a few hours, so you will not be able to drive afterwards. You will get a letter with your results, usually within 3 weeks.",
        ],
      },
      {
        heading: "Making sure you get them",
        paragraphs: [
          "Your GP surgery should get in touch to arrange your annual review. If you do not hear from them, ring up for an appointment, and do not feel guilty about chasing it.",
          "The checks people most often miss out on are the urine check for kidney disease, the diabetic eye check and the foot check.",
        ],
      },
    ],
    helps: [
      "Set yourself a reminder each year, and ring your GP surgery if you are not invited.",
      "Wear socks and shoes that are quick to take off for your foot check.",
      "Ask for flexibility with the urine sample if it is difficult, such as taking the bottle home.",
      "Plan how you will get home from eye screening, and bring sunglasses.",
      "Take a notebook with questions, including any about your medicines.",
    ],
    tryThisWeek: [
      "Set a reminder for your review.",
      "Plan your trip home from eye screening.",
      "Write down questions to ask.",
    ],
    ask: "Have I had all 9 checks this year, and what did each one show?",
    interactive: {
      kind: "flip-cards",
      title: "The 9 checks",
      intro: "Turn each card to see what the check is for.",
      cards: [
        { id: "hba1c", front: "HbA1c", when: "Blood test", back: "Your average blood sugar levels over the past three months." },
        { id: "cholesterol", front: "Cholesterol", when: "Blood test", back: "How much fat is in your blood." },
        { id: "kidney-blood", front: "Kidney function", when: "Blood test", back: "How well your kidneys are working." },
        { id: "urine", front: "Kidney disease", when: "Urine test", back: "Looks for protein in your urine, an early sign of kidney disease." },
        { id: "bp", front: "Blood pressure", when: "At your appointment", back: "Keeping it at your target can help stop kidney disease getting worse." },
        { id: "bmi", front: "Weight and height", when: "At your appointment", back: "Used to work out your body mass index, or BMI." },
        { id: "feet", front: "Foot check", when: "At your appointment", back: "Checks the blood supply and feeling in your feet, and your level of risk." },
        { id: "smoking", front: "Smoking", when: "A question at your review", back: "So you can be offered help to stop." },
        { id: "eyes", front: "Diabetic eye check", when: "Usually somewhere else", back: "Photographs of the back of your eyes, to look for diabetic retinopathy." },
      ],
    },
    sources: [DUK_CHECKS, NHS_T2_TREATMENT, NHS_EYE_SCREENING, DUK_FOOT_CHECK, DUK_KIDNEYS],
    quiz: {
      question: "How many diabetes health checks are in the annual review?",
      options: [{ text: "9", right: true }, { text: "3" }, { text: "15" }],
      why: "There are 9 checks, and some may happen more than once a year.",
    },
  },
  {
    id: "t2d-feet",
    kicker: "Feet",
    question: "How do I look after my feet?",
    hook: "A quick look every day, nails cut carefully and shoes that fit. Most serious foot problems can be prevented.",
    short: "Diabetes can damage the nerves and blood vessels in your feet, so you may not feel an injury and it may be slow to heal. Checking your feet every day, wearing well-fitting shoes and going to your yearly foot check can prevent most problems. Get help straight away for any new cut, blister or change.",
    sections: [
      {
        heading: "Why feet need care",
        paragraphs: [
          "Over time, raised blood sugar can damage the small blood vessels that supply the nerves in your feet. You can lose the feeling in your feet, so you may damage them without noticing.",
          "Damaged blood vessels also reduce the blood supply, so cuts and sores may be slow to heal. But most problems, including amputations, can be prevented if you take care of your feet and check them regularly.",
        ],
      },
      {
        heading: "A daily check",
        paragraphs: [
          "Look at your feet before you put your socks on in the morning and before you go to bed. If you struggle to lift your feet, use a mirror while sitting or lying down, or ask someone to check them for you.",
          "The Touch the Toes test is a quick test you can do at home with a helper, to check for changes in the feeling in your feet. If you can feel only four or fewer of the six toes being touched, get an appointment at your GP surgery for a full examination.",
        ],
      },
      {
        heading: "Nails, skin and shoes",
        paragraphs: [
          "Cut your nails often but not too short or down the side, and file any corners with an emery board. Wash your feet every day with soap and warm water, checking the temperature with your wrist or elbow first, and avoid soaking them.",
          "Use moisturising cream every day, but not between your toes. Do not use blades or corn plasters. Choose wide-fitting shoes with a deep, rounded toe, a flat or low heel, and a lace or buckle.",
        ],
      },
      {
        heading: "When it is urgent",
        paragraphs: [
          "You are up to 20 times more likely to have an amputation if you have diabetes, so a foot problem needs help straight away. See your local foot team urgently, within 24 hours, if part of your foot is red, hot or swollen, feels much colder or hotter than usual, or has a new wound or blister.",
          "Sit or lie down, take the weight off your foot, and contact your GP or foot protection team straight away. If you have a foot infection and signs of sepsis, such as confusion or fast breathing, call 999 or go to A&E.",
        ],
      },
      {
        heading: "Your yearly foot check",
        paragraphs: [
          "Everyone with diabetes should have a foot check as part of their annual review. Diabetes UK says diabetes leads to 184 leg, toe or foot amputations a week, and going to your foot checks could help prevent this.",
          "The check tells you your risk of a foot problem. If your risk is moderate or high, you will be referred to the foot protection team to see a foot specialist.",
        ],
      },
    ],
    helps: [
      "Check your feet every day, using a mirror or a helper if you need to.",
      "Wear shoes that fit, and check inside them before you put them on.",
      "Use moisturising cream every day, but not between your toes.",
      "Do not use blades or corn plasters; see a podiatrist for corns or tough skin.",
      "Keep useful numbers nearby: your GP surgery, your foot specialist and your out-of-hours service.",
      "If you smoke, get help to stop.",
    ],
    tryThisWeek: [
      "Check your feet each morning.",
      "Check inside your shoes.",
      "Save your foot team's number.",
    ],
    ask: "What is my foot risk level, and who do I call if something changes?",
    interactive: {
      kind: "signs",
      title: "Foot changes to act on",
      intro: "Tick anything you notice. The first five need your local foot team within 24 hours.",
      signs: ["A red, hot or swollen toe or foot", "Part of the foot much colder or hotter", "A new blister, cut or wound", "A wound that smells or leaks", "New or unexplained foot pain", "Tingling, pins and needles or numbness", "Cramp in your calves", "Shiny skin or hair loss on your feet"],
      after: "Take the weight off your foot and contact your foot team or GP straight away. Call 999 if you have a foot infection and signs of sepsis.",
      copyHeading: "Foot changes I have noticed",
    },
    sources: [DUK_FEET_CARE, DUK_FEET, DUK_FEET_SERIOUS, DUK_FOOT_CHECK, DUK_TOUCH_TOES],
    quiz: {
      question: "How often should you check your own feet?",
      options: [{ text: "Every day", right: true }, { text: "Once a year" }, { text: "Only if they hurt" }],
      why: "Look at your feet before you put your socks on in the morning and before you go to bed.",
    },
  },
  {
    id: "t2d-sick-days",
    kicker: "When you are ill",
    question: "What are sick-day rules, and what should I do when I am ill?",
    hook: "Illness can push blood sugar up even when you eat less. A few rules, agreed in advance, help keep you safe.",
    short: "Illness and infection can raise your blood sugar, even when you are eating less, and vomiting, diarrhoea or a high temperature can make you dehydrated. Keep drinking, eat little and often, and check your blood sugar more often if you test at home. Some medicines, such as SGLT2 inhibitors, may need pausing, so speak to your team or a pharmacist as soon as you feel ill.",
    sections: [
      {
        heading: "Why illness matters",
        paragraphs: [
          "Illness and infections can raise your blood sugar to dangerously high levels. As the body fights illness, more glucose is released into the blood, even if you are eating less than usual.",
          "A temperature or being sick can lead to dehydration. Severe dehydration and very high blood sugar can sometimes mean you need to go into hospital.",
        ],
      },
      {
        heading: "The basic rules",
        paragraphs: [
          "Do not panic, and contact your diabetes team if you are unsure what to do. Keep taking your diabetes medicines even if you do not feel like eating, unless you are told otherwise.",
          "Stay hydrated with plenty of unsweetened drinks. If you are struggling to eat, eat little and often, and keep up your carbohydrate with snacks or drinks.",
        ],
      },
      {
        heading: "Medicines to ask about",
        paragraphs: [
          "If you have vomiting, diarrhoea or a very high temperature while taking diabetes medicine, ask for an urgent GP appointment or get help from NHS 111. They may tell you to stop a medicine temporarily, until you feel better, but do not stop unless they tell you to.",
          "If you take an SGLT2 inhibitor and become unwell, you should temporarily stop it, because taking it while ill could increase your risk of diabetic ketoacidosis. With metformin, being ill with vomiting, diarrhoea or a fever brings a risk of dehydration, so talk to a pharmacist or doctor.",
        ],
      },
      {
        heading: "Checking more often",
        paragraphs: [
          "If you check your blood sugar at home, you will probably need to check more often: at least every four hours, including during the night, or as your team advises.",
          "If you do not test at home, be aware of the signs of high blood sugar, such as feeling very thirsty, peeing a lot and feeling weak or tired.",
        ],
      },
      {
        heading: "When to get urgent help",
        paragraphs: [
          "Call 999 or go to A&E if you have high blood sugar and are being sick or have stomach pain, are breathing faster than usual, feel drowsy or confused, or your breath smells fruity.",
          "These could be signs of diabetic ketoacidosis or HHS, which can be life threatening if not treated quickly. Do not drive to A&E: ask someone to drive you, or call 999 for an ambulance.",
        ],
      },
    ],
    helps: [
      "Follow your care team's advice for when you are ill, and ask for it before you need it.",
      "Speak to your diabetes team or a pharmacist as soon as you start feeling ill.",
      "Drink plenty of unsweetened fluids, and eat little and often.",
      "Ask for an urgent GP appointment or contact NHS 111 if you have vomiting, diarrhoea or a very high temperature.",
      "Give your sick-day rules to a friend or family member, so they can help if you become unwell.",
      "Get your flu jab every year.",
    ],
    tryThisWeek: [
      "Ask your team for your sick-day rules.",
      "Share them with someone close.",
      "Book your flu jab.",
    ],
    ask: "What are my sick-day rules, and which of my medicines should I pause when I am ill?",
    interactive: {
      kind: "signs",
      title: "When illness needs urgent help",
      intro: "Tick any that apply while you are ill with high blood sugar.",
      signs: ["Being sick, or stomach pain", "Breathing faster than usual", "Heart beating faster than usual", "Drowsy or struggling to stay awake", "Breath that smells fruity", "Confused or hard to concentrate", "High ketones in your blood or pee"],
      after: "Call 999 or go to A&E. Do not drive yourself: ask someone to drive you, or call an ambulance. Bring any medicines you take.",
      copyHeading: "Signs while I am ill",
    },
    sources: [DUK_ILLNESS, NHS_T2_TREATMENT, NHS_METFORMIN, NHS_HYPER, NHS_T2_COMPLICATIONS],
    quiz: {
      question: "What should you usually do with your diabetes medicines when you are ill?",
      options: [{ text: "Keep taking them, unless told otherwise", right: true }, { text: "Stop all of them" }, { text: "Double the dose" }],
      why: "Keep taking your diabetes medicines even if you do not feel like eating, unless you are told otherwise.",
    },
  },
  {
    id: "t2d-driving",
    kicker: "Driving",
    question: "Can I drive with type 2 diabetes, and do I need to tell the DVLA?",
    hook: "For most people, driving is not a problem. What you need to do depends on how your diabetes is treated.",
    short: "For most people with diabetes, driving is not a problem. If your diabetes is treated by diet alone, you do not need to tell the DVLA; with tablets or non-insulin injections, check with your doctor or nurse; and for a car licence you need to tell them if insulin treatment will last over 3 months. If your treatment can cause hypos, check your blood sugar before driving and every two hours on long journeys.",
    sections: [
      {
        heading: "Most people can drive",
        paragraphs: [
          "For most people with diabetes, driving is not a problem, and you can hold a driving licence and carry on driving.",
          "Three things can affect driving safely: treatment that puts you at risk of hypos, not being able to recognise hypo warning signs, and complications that affect your eyes or nerves.",
        ],
      },
      {
        heading: "Telling the DVLA",
        paragraphs: [
          "If your diabetes is treated by diet, you do not need to tell the DVLA. If it is treated by tablets or non-insulin injections, check with your doctor or nurse whether you need to.",
          "If you take insulin, for a car or motorbike licence you need to tell the DVLA if the treatment lasts, or will last, over 3 months, or if you get disabling hypoglycaemia. You can be fined up to £1,000 if you do not tell the DVLA about a condition that affects your driving.",
        ],
      },
      {
        heading: "Larger vehicles",
        paragraphs: [
          "The rules are stricter for a bus, coach or lorry licence. You need to tell the DVLA if your diabetes is treated by tablets or non-insulin injections, and to stop driving and tell them when you start insulin.",
        ],
      },
      {
        heading: "Before you set off",
        paragraphs: [
          "If your treatment can cause hypos, check your blood sugar just before you drive, however short the trip, and at least every two hours on longer journeys. Diabetes UK calls it five to drive: your level should be 5mmol/L or above.",
          "Keep hypo treatments where you can easily reach them, take breaks on long journeys and do not delay meals. Keep your meter and spare strips in the car, even if you use a CGM.",
        ],
      },
      {
        heading: "If a hypo starts",
        paragraphs: [
          "Pull over safely, switch off the engine, take the keys out and move from the driver's seat. Take fast-acting carbs, like glucose tablets, and some longer-acting carbohydrate too.",
          "Do not drive until 45 minutes after your levels are back to 5mmol/L or above. If you develop hypo unawareness, you need to tell the DVLA and stop driving.",
        ],
      },
    ],
    helps: [
      "Check with your nurse or doctor what type of medicine you are on, and whether to tell the DVLA.",
      "If your treatment can cause hypos, check your blood sugar before every drive.",
      "Keep hypo treatments where you can easily reach them in the car.",
      "Take breaks on long journeys, and do not delay meals or snacks.",
      "If you start having problems with your eyes, let the DVLA know.",
      "Declare your diabetes when you apply for car insurance.",
    ],
    tryThisWeek: [
      "Check whether to tell the DVLA.",
      "Put hypo treatment in the car.",
      "Check your sugar before driving.",
    ],
    ask: "Does my treatment mean I need to tell the DVLA, or check my sugar before driving?",
    interactive: {
      kind: "flip-cards",
      title: "What the rules say for you",
      intro: "Turn the card for your treatment to see the DVLA rules for a car or motorbike licence.",
      cards: [
        { id: "diet", front: "Diet and exercise only", when: "No diabetes medicine", back: "No need to tell the DVLA or to check your blood sugar to drive." },
        { id: "other", front: "Other diabetes medicines", when: "Medicines that do not risk hypos", back: "No need to tell the DVLA or to check your blood sugar. Your licence usually lasts until you are 70." },
        { id: "sulphonylurea", front: "Sulphonylureas", when: "Medicines that can risk hypos", back: "Tell the DVLA only if you have had severe hypos. Ask your team whether to check before driving." },
        { id: "temporary", front: "Insulin for under 3 months", when: "Temporary insulin", back: "No need to tell the DVLA while you follow your team's advice. Check your sugar every two hours." },
        { id: "insulin", front: "Insulin", when: "Longer-term insulin", back: "Tell the DVLA and apply for a restricted licence. Follow the two-hour checking rule." },
      ],
    },
    sources: [GOV_DRIVING, DUK_DRIVING, DUK_LICENCE, NHS_HYPO, NHS_T2_TREATMENT],
    quiz: {
      question: "After a hypo, how long should you wait before driving?",
      options: [{ text: "45 minutes after your levels are back to 5mmol/L", right: true }, { text: "Five minutes" }, { text: "No wait is needed" }],
      why: "Do not drive until 45 minutes after your levels are back to 5mmol/L or above.",
    },
  },
  {
    id: "t2d-mood",
    kicker: "Feelings",
    question: "What are diabetes burnout and low mood?",
    hook: "Looking after diabetes every day is relentless. Feeling worn down is common, and there is help.",
    short: "Diabetes distress is what some people feel when they are overwhelmed by the relentlessness of diabetes, and one in five people with type 2 diabetes have high levels of it. Without support, it can lead to burnout or turn into depression. Talking to your healthcare team, family, friends or other people with diabetes can help.",
    sections: [
      {
        heading: "Diabetes distress",
        paragraphs: [
          "Diabetes distress is what some people feel when they are overwhelmed by the relentlessness of diabetes. You might feel frustrated, guilty, sad or worried, and that is a natural reaction to a long-term condition.",
          "It is really common. One in five people with type 2 diabetes have high levels of diabetes distress.",
        ],
      },
      {
        heading: "The signs",
        paragraphs: [
          "Signs include feeling angry about diabetes and frustrated about managing it, avoiding appointments or blood sugar checks, often making unhealthy food choices, and feeling alone and isolated.",
          "Having diabetes distress for a long stretch can lead to burnout. That can mean you stop taking care of yourself and your diabetes, such as skipping insulin doses or not taking your tablets.",
        ],
      },
      {
        heading: "Low mood and depression",
        paragraphs: [
          "Diabetes distress is not the same as depression, but it can turn into depression if the feelings do not go away. People with diabetes are at least twice as likely to have depression as people without diabetes, and as many as 40% say they have struggled with their psychological wellbeing since diagnosis.",
          "If you have symptoms of depression, such as feeling down often and for long periods, for two weeks or more, talk to your GP or another healthcare professional.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "Remember that your blood sugar levels are just a number, not a reflection of who you are. Set smaller, more realistic goals, and talk about high or low blood sugar rather than good or bad.",
          "Talk to your friends, family or other people with diabetes about how you feel. Being active can also really help with your mood.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "Being diagnosed can feel overwhelming, but there are doctors, nurses and other health professionals in your diabetes care team you can talk to. Emotional and psychological support should be part of your diabetes care, and it is free.",
          "You can ask your healthcare team to refer you to a psychological specialist, or in England contact NHS Talking Therapies directly. The Diabetes UK helpline is on 0345 123 2399.",
        ],
      },
    ],
    helps: [
      "Talk to your healthcare team if you are feeling any diabetes distress.",
      "Set smaller, more realistic goals.",
      "Say high or low blood sugar, rather than good or bad.",
      "Talk to friends, family or other people with diabetes about how you feel.",
      "See your GP if you have symptoms of depression for two weeks or more.",
      "Call the Diabetes UK helpline on 0345 123 2399.",
    ],
    tryThisWeek: [
      "Set one small, realistic goal.",
      "Tell someone how you feel.",
      "Save the helpline number.",
    ],
    ask: "Can I talk to someone about how diabetes is making me feel?",
    interactive: {
      kind: "signs",
      title: "Signs it is getting too much",
      intro: "Tick any that sound like you lately. Lots of people feel like this sometimes.",
      signs: ["Angry or frustrated about diabetes", "Worried, but not motivated to change", "Avoiding appointments or sugar checks", "Often making unhealthy food choices", "Feeling alone and isolated", "Skipping insulin or tablets", "Feeling down for long periods", "Not wanting to see anyone"],
      after: "Talk to your healthcare team, or call the Diabetes UK helpline. If low mood lasts two weeks or more, talk to your GP.",
      copyHeading: "How I have been feeling",
    },
    sources: [DUK_BURNOUT, DUK_DEPRESSION, NHS_T2_SYMPTOMS, NHS_T2_SUPPORT],
    quiz: {
      question: "Is diabetes distress the same as depression?",
      options: [{ text: "No, but it can turn into depression", right: true }, { text: "Yes, they are exactly the same" }, { text: "It only affects type 1 diabetes" }],
      why: "Diabetes distress is not the same as depression, but it can turn into depression if the feelings do not go away.",
    },
  },
];
