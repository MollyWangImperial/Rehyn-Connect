import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Type 1 diabetes page's pieces (content/library-conditions/body.ts
// `learnId`). Every sentence was written from wording checked on 20 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS,
// Diabetes UK, Breakthrough T1D UK (formerly JDRF) and the government's diabetes and driving page.
// General information only; it never replaces what a person's own diabetes team tells them.

const nhsT1 = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/conditions/type-1-diabetes/${path}` });
const duk = (label: string, path: string): LearnSource => ({ label: `Diabetes UK: ${label}`, url: `https://www.diabetes.org.uk/${path}` });
const bt1d = (label: string, path: string): LearnSource => ({ label: `Breakthrough T1D UK: ${label}`, url: `https://breakthrought1d.org.uk/knowledge-support/${path}` });

const NHS_T1_WHAT = nhsT1("What is type 1 diabetes?", "what-is-type-1-diabetes/");
const NHS_T1_SYMPTOMS = nhsT1("Symptoms of type 1 diabetes", "symptoms/");
const NHS_T1_TREATMENT = nhsT1("Treatment for type 1 diabetes", "treatment/");
const NHS_T1_LIVING = nhsT1("Living with type 1 diabetes", "living-with/");
const NHS_T1_SUPPORT = nhsT1("Help and support for type 1 diabetes", "support/");
const NHS_HYPO: LearnSource = { label: "NHS: Low blood sugar (hypoglycaemia)", url: "https://www.nhs.uk/conditions/low-blood-sugar-hypoglycaemia/" };
const NHS_HYPER: LearnSource = { label: "NHS: High blood sugar (hyperglycaemia)", url: "https://www.nhs.uk/conditions/high-blood-sugar-hyperglycaemia/" };
const NHS_DKA: LearnSource = { label: "NHS: Diabetic ketoacidosis", url: "https://www.nhs.uk/conditions/diabetic-ketoacidosis/" };
const NHS_PREGNANCY: LearnSource = { label: "NHS: Diabetes and pregnancy", url: "https://www.nhs.uk/pregnancy/existing-health-conditions/diabetes/" };
const DUK_T1 = duk("Type 1 diabetes", "about-diabetes/type-1-diabetes");
const DUK_T1_TREATMENTS = duk("Type 1 diabetes treatments", "about-diabetes/type-1-diabetes/treatments");
const DUK_HYPOS = duk("Hypos", "about-diabetes/looking-after-diabetes/complications/hypos");
const DUK_HYPERS = duk("Hyperglycaemia (hypers)", "about-diabetes/looking-after-diabetes/complications/hypers");
const DUK_DKA = duk("Diabetic ketoacidosis (DKA)", "about-diabetes/looking-after-diabetes/complications/diabetic-ketoacidosis");
const DUK_KETONES = duk("What are ketones?", "about-diabetes/looking-after-diabetes/ketones-and-diabetes");
const DUK_HBA1C = duk("What is HbA1c?", "about-diabetes/looking-after-diabetes/hba1c");
const DUK_TIR = duk("Time in range for diabetes", "about-diabetes/looking-after-diabetes/time-in-range");
const DUK_INSULIN_TYPES = duk("Types of insulin", "about-diabetes/looking-after-diabetes/treatments/insulin/types");
const DUK_PUMPS = duk("What are insulin pumps?", "about-diabetes/looking-after-diabetes/technology/insulin-pumps");
const DUK_CLOSED_LOOP = duk("What are closed loop systems?", "about-diabetes/looking-after-diabetes/technology/closed-loop-systems");
const DUK_CGM = duk("What are continuous glucose monitors?", "about-diabetes/looking-after-diabetes/technology/flash-glucose-monitors-and-continuous-glucose-monitors");
const DUK_CARB = duk("Learn about carb counting", "living-with-diabetes/eating/carbohydrates-and-diabetes/learn-about-carb-counting");
const DUK_ILLNESS = duk("Diabetes and being ill", "living-with-diabetes/life-with-diabetes/illness");
const DUK_DRIVING = duk("Driving when you have diabetes", "living-with-diabetes/life-with-diabetes/driving");
const DUK_ALCOHOL = duk("Alcohol and diabetes", "living-with-diabetes/eating/what-to-drink-with-diabetes/alcohol-and-diabetes");
const DUK_BURNOUT = duk("What is diabetes distress and burnout?", "living-with-diabetes/emotional-wellbeing/diabetes-burnout");
const DUK_PREGNANCY = duk("Type 1 diabetes and pregnancy", "about-diabetes/type-1-diabetes/in-pregnancy");
const BT1D_WHAT = bt1d("What is type 1 diabetes?", "about-type-1-diabetes/what-is-type-1-diabetes/");
const BT1D_INSULIN = bt1d("Insulin", "about-type-1-diabetes/treatments-for-type-1-diabetes/insulin/");
const BT1D_EXERCISE = bt1d("Exercise and type 1 diabetes", "living-with-type-1-diabetes/everyday-life/exercise/");
const GOV_DRIVING: LearnSource = { label: "GOV.UK: Diabetes and driving", url: "https://www.gov.uk/diabetes-driving" };

export const t1dAnswers: LearnArticle[] = [
  {
    id: "t1d-what-it-is",
    kicker: "Understanding",
    question: "What is type 1 diabetes?",
    hook: "The body cannot make insulin, because the immune system has attacked the cells that make it. Nobody caused it.",
    short: "Type 1 diabetes is a condition where your body cannot make a hormone called insulin, so your blood glucose rises too high. It is an autoimmune condition: the immune system attacks the insulin-producing beta cells in the pancreas. It is not caused by poor diet or an unhealthy lifestyle, and insulin is the main treatment.",
    sections: [
      {
        heading: "No insulin",
        paragraphs: [
          "Type 1 diabetes is a condition where your body cannot make a hormone called insulin. Insulin helps the body use glucose for energy. Without it, the level of glucose in your blood rises too high.",
        ],
      },
      {
        heading: "The immune system",
        paragraphs: [
          "Type 1 diabetes is an autoimmune condition. The immune system malfunctions and begins attacking and destroying the insulin-producing beta cells in the pancreas.",
          "When the beta cells stop working, the body stops producing insulin and glucose builds up in the blood. The body cannot function unless the insulin is replaced.",
        ],
      },
      {
        heading: "Nobody's fault",
        paragraphs: [
          "Type 1 diabetes is not caused by poor diet or an unhealthy lifestyle. The exact causes are not known, and scientists are still looking at genetic and environmental triggers.",
          "It is not possible to prevent type 1 diabetes. You are at a slightly higher risk if your mother, father, brother or sister has it.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "Type 1 diabetes often starts in children and young adults, but it can happen at any age. It is different from type 2 diabetes, which is more common in older people and people who are overweight.",
          "Fewer than one in 10 people in the UK who have diabetes have type 1. Breakthrough T1D says over 400,000 people in the UK live with it.",
        ],
      },
      {
        heading: "The signs",
        paragraphs: [
          "The main symptoms are often remembered as the 4 Ts: toilet, thirsty, tired and thinner. They tend to come on over a few days or weeks.",
          "If you think you or your child has type 1 diabetes, get an urgent GP appointment or contact NHS 111.",
        ],
      },
    ],
    helps: [
      "Get an urgent GP appointment or contact NHS 111 if you think you or your child has type 1 diabetes.",
      "Learn the 4 Ts: toilet, thirsty, tired and thinner.",
      "Call 999 or go to A&E if symptoms get worse quickly, or come with vomiting, drowsiness or fast, deep breathing.",
      "Ask about the free group diabetes course offered within a year of diagnosis.",
      "Contact a charity such as Diabetes UK or Breakthrough T1D for information and support.",
    ],
    tryThisWeek: [
      "Learn the 4 Ts.",
      "Ask about a diabetes course.",
      "Look up a diabetes charity for support.",
    ],
    ask: "What does type 1 diabetes mean for my treatment, and who do I contact with questions?",
    interactive: {
      kind: "signs",
      title: "The 4 Ts, and other signs",
      intro: "Tick any you or your child has noticed.",
      signs: ["Peeing more than usual, especially at night", "Very thirsty, drinking more than usual", "Feeling very tired", "Losing weight without trying", "Blurred vision", "Sweet or fruity-smelling breath", "Wounds that heal slowly", "Infections that keep coming back"],
      after: "Get an urgent GP appointment or contact NHS 111. Call 999 or go to A&E if symptoms are getting worse quickly. Do not drive yourself.",
      copyHeading: "Signs I have noticed",
    },
    sources: [NHS_T1_WHAT, BT1D_WHAT, DUK_T1, NHS_T1_SYMPTOMS, NHS_T1_TREATMENT, NHS_T1_SUPPORT],
    quiz: {
      question: "Is type 1 diabetes caused by diet or lifestyle?",
      options: [{ text: "No: it is an autoimmune condition", right: true }, { text: "Yes: too much sugar causes it" }, { text: "Yes: it comes from being overweight" }],
      why: "Type 1 diabetes is not caused by poor diet or an unhealthy lifestyle.",
    },
  },
  {
    id: "t1d-hypos-hypers",
    kicker: "Hypos and hypers",
    question: "What are hypos and hypers, and what do I do?",
    hook: "Too low needs fast-acting sugar straight away. Too high needs fluids, checks and sometimes a ketone test.",
    short: "A hypo is when your blood sugar is too low, usually below 4mmol/l, and it needs treating straight away with fast-acting carbohydrate. A hyper is when your blood sugar is too high. A brief, slight rise usually does not need emergency treatment, but a level that keeps rising needs quick action.",
    sections: [
      {
        heading: "What a hypo is",
        paragraphs: [
          "A hypo is when your blood sugar is too low, usually below 4mmol/l. It is mainly a risk for people who take insulin or certain other diabetes medicines.",
          "Common signs include feeling hungry, sweating, shaking, tingling lips, a racing heart, tiredness, blurred vision and confusion. Everyone has different symptoms. Some people have no warning signs at all, which is called hypo unawareness, and it can be dangerous.",
        ],
      },
      {
        heading: "Treating a hypo",
        paragraphs: [
          "Stop what you are doing and treat the hypo straight away with 15 to 20g of fast-acting carbohydrate. That could be five glucose tablets, four jelly babies, 200ml of pure fruit juice or two tubes of glucose gel.",
          "Rest for 10 to 15 minutes, then test again. If you are still below 4mmol/l, have more fast-acting carbohydrate and test again after 10 minutes. Once you are back above 4mmol/l, eat a slower-acting carbohydrate, such as biscuits, a sandwich or your next meal.",
        ],
      },
      {
        heading: "A severe hypo",
        paragraphs: [
          "If someone is unconscious, do not give them food or drink, because they will not be able to swallow. Put them in the recovery position and give a glucagon injection if one is available and you know how to use it.",
          "Call 999 if there is no glucagon, if they have not recovered 10 minutes after the injection, or if they have been drinking alcohol.",
        ],
      },
      {
        heading: "What a hyper is",
        paragraphs: [
          "A hyper is when your blood sugar is too high. Causes include missing insulin, eating more carbohydrate than your body or insulin can handle, stress, infection and over-treating a hypo.",
          "Signs can build up slowly. They include needing the toilet more, especially at night, feeling very thirsty, tiredness, headaches and blurred vision.",
        ],
      },
      {
        heading: "Treating a hyper",
        paragraphs: [
          "A brief, slight rise usually does not need emergency treatment. If your level keeps rising, act quickly. Drink water or other sugar-free fluids, take your insulin as prescribed, and follow your sick-day rules if you are unwell.",
          "Check for ketones if your blood sugar is usually above 13 or 14mmol/l. If your blood sugar is regularly above 10mmol/l, contact your diabetes team or GP so they can review your treatment.",
        ],
      },
    ],
    helps: [
      "Carry fast-acting sugar, and a glucagon kit if you have one.",
      "Treat a hypo straight away, then test again after 10 to 15 minutes.",
      "Keep hypo treatment by the bed, as hypos can happen at night.",
      "See your GP or diabetes team if you have frequent, severe or night-time hypos, or do not always notice the signs.",
      "Drink sugar-free fluids and check for ketones if your blood sugar keeps rising.",
    ],
    tryThisWeek: [
      "Carry fast-acting sugar.",
      "Keep hypo treatment by the bed.",
      "Check ketones if sugar keeps rising.",
    ],
    ask: "What should I do about hypos at night, and when should I check for ketones?",
    interactive: {
      kind: "timeline",
      title: "Treating a hypo, step by step",
      steps: [
        { id: "treat", when: "Below 4mmol/l", title: "Stop and treat", points: ["Stop what you are doing.", "Have 15 to 20g of fast-acting carbohydrate."] },
        { id: "retest", when: "10 to 15 minutes later", title: "Test again", points: ["Rest, then check your blood sugar.", "Still below 4? Have more, and test after 10 minutes."] },
        { id: "slower", when: "Back above 4mmol/l", title: "Something slower", points: ["Eat a slower-acting carbohydrate.", "Biscuits, a sandwich or your next meal."] },
        { id: "severe", when: "If someone is unconscious", title: "No food or drink", points: ["Recovery position, and glucagon if available.", "Call 999 if there is no glucagon or no recovery in 10 minutes."] },
      ],
    },
    sources: [DUK_HYPOS, NHS_HYPO, DUK_HYPERS, NHS_HYPER],
    quiz: {
      question: "What should you do first when you have a hypo?",
      options: [{ text: "Treat it straight away with fast-acting carbs", right: true }, { text: "Wait an hour to see what happens" }, { text: "Take some more insulin" }],
      why: "Stop what you are doing and treat the hypo straight away with 15 to 20g of fast-acting carbohydrate.",
    },
  },
  {
    id: "t1d-dka",
    kicker: "Emergency",
    question: "What is DKA, and when is it an emergency?",
    hook: "Without enough insulin, the body burns fat and makes ketones. Too many make the blood acidic, and that needs hospital care.",
    short: "Diabetic ketoacidosis, known as DKA, is a life-threatening complication caused by a lack of insulin, which lets ketones build up in the blood. Signs include thirst, needing to wee more, stomach pain, vomiting, fruity-smelling breath and fast, deep breathing. If you suspect DKA, get medical help straight away.",
    sections: [
      {
        heading: "What happens",
        paragraphs: [
          "Diabetic ketoacidosis, known as DKA, is a life-threatening diabetes complication. Without enough insulin, the body cannot use glucose for energy and starts to break down fat instead.",
          "This releases chemicals called ketones. When they build up, they make the blood acidic. DKA needs urgent treatment in hospital.",
        ],
      },
      {
        heading: "What sets it off",
        paragraphs: [
          "DKA mostly affects people with type 1 diabetes. Triggers include illness such as flu or a urinary tract infection, missed insulin, surgery or injury, a growth spurt and periods. An insulin pump that stops working or comes out can also cause it.",
          "Sometimes DKA is the first sign of type 1 diabetes, particularly in children.",
        ],
      },
      {
        heading: "The signs",
        paragraphs: [
          "Signs include feeling very thirsty, needing to wee more, stomach pain, feeling or being sick, deep or fast breathing, fruity-smelling breath, tiredness, confusion and blurred vision.",
          "They usually develop over about 24 hours, but they can come on faster, especially in children and in people using an insulin pump.",
        ],
      },
      {
        heading: "Checking ketones",
        paragraphs: [
          "If your blood sugar is high, usually above 13mmol/l, or you feel very unwell, check your ketones. People with type 1 diabetes can get a blood ketone meter free from the NHS.",
          "A blood test shows your ketones now. A urine test shows what they were a few hours ago. Your diabetes team can tell you which levels to watch for.",
        ],
      },
      {
        heading: "When to call 999",
        paragraphs: [
          "Call 999 or go to A&E if your blood ketones are over 3mmol/l, if you have signs of DKA and do not know your ketone level, or if you have signs of DKA and have not been diagnosed with diabetes. Do not drive yourself.",
          "In hospital, DKA is treated with insulin, fluids and nutrients through a drip. You can usually go home once your ketones are at a safe level and you can eat and drink normally.",
        ],
      },
    ],
    helps: [
      "Never stop taking insulin, even if you are not eating.",
      "Test for ketones when your blood sugar is high and when you are ill.",
      "Get a ketone test kit free from the NHS, or buy one from a pharmacy.",
      "Follow your sick-day rules.",
      "Ask your team about a continuous or flash glucose monitor.",
      "Call 999 or go to A&E if your blood ketones are over 3mmol/l.",
    ],
    tryThisWeek: [
      "Never skip insulin, even when not eating.",
      "Make sure you have a ketone test kit.",
      "Test ketones when high or ill.",
    ],
    ask: "Which ketone levels should I watch for, and who do I call out of hours?",
    interactive: {
      kind: "signs",
      title: "Signs of DKA",
      intro: "Tick any you notice, especially alongside high blood sugar.",
      signs: ["Very thirsty", "Needing to wee more often", "Stomach pain", "Feeling or being sick", "Deep or fast breathing", "Fruity-smelling breath", "Very tired or sleepy", "Confused", "Blurred vision"],
      after: "Check your ketones. Call 999 or go to A&E if blood ketones are over 3mmol/l, or if you have these signs and do not know your level. Do not drive yourself.",
      copyHeading: "DKA signs I have now",
    },
    sources: [NHS_DKA, DUK_DKA, DUK_KETONES, DUK_HYPERS],
    quiz: {
      question: "What should you do if your blood ketones are over 3mmol/l?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Wait until the morning" }, { text: "Drive yourself to hospital" }],
      why: "Call 999 or go to A&E if your blood ketones are over 3mmol/l. Do not drive yourself.",
    },
  },
  {
    id: "t1d-hba1c",
    kicker: "Numbers",
    question: "What do HbA1c and time in range mean?",
    hook: "One number looks back over two to three months. The other shows how much of each day you spend in range.",
    short: "HbA1c is your average blood sugar level over the last two to three months. For people with diabetes, the ideal is 48mmol/mol or below, though your team may set your own target. Time in range, from a glucose monitor, is the share of the day your sugar is in your target range, and most experts recommend at least 70%.",
    sections: [
      {
        heading: "HbA1c",
        paragraphs: [
          "HbA1c is your average blood glucose level for the last two to three months. Glucose sticks to red blood cells, and these cells last about two to three months, so the test looks back over that time.",
          "It is a blood test done by a doctor or nurse. Results are given in mmol/mol.",
        ],
      },
      {
        heading: "The target",
        paragraphs: [
          "For people with diabetes, the ideal HbA1c is 48mmol/mol or below. Your team may set a different target for you.",
          "A high HbA1c means you have too much sugar in your blood. This raises the risk of complications, such as serious eye and foot problems.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "Most people have the test every three to six months. You are entitled to it at least once a year. If you have not had one for over a year, contact your healthcare team.",
        ],
      },
      {
        heading: "Time in range",
        paragraphs: [
          "Time in range is the percentage of time your blood sugar is within a target range. You can see it on a continuous glucose monitor. The range is agreed with your healthcare team and varies from person to person.",
          "Most experts recommend aiming to be in range for at least 70% of the day. The NHS gives adult targets of 5 to 7mmol/l when you wake up and before eating, and 5 to 9mmol/l at least 90 minutes after meals.",
        ],
      },
      {
        heading: "Using both",
        paragraphs: [
          "Time in range does not replace HbA1c. Used together, they help your team review your care. Generally, if your time in range is high, your HbA1c is more likely to be in the target range too.",
          "A finger-prick test is different again. It is a snapshot of your blood sugar at one moment.",
        ],
      },
    ],
    helps: [
      "Ask your team what your own HbA1c target is.",
      "Contact your team if you have not had an HbA1c test in over a year.",
      "Use your glucose monitor's charts to spot patterns, such as overnight hypos.",
      "Be active: even walking on the spot at home can make a difference.",
      "Talk to your team about reducing overnight insulin if your monitor shows regular overnight hypos.",
    ],
    tryThisWeek: [
      "Ask what your HbA1c target is.",
      "Look at your monitor's charts for patterns.",
      "Try walking on the spot at home.",
    ],
    ask: "What are my HbA1c and time in range, and what should we aim for?",
    interactive: {
      kind: "flip-cards",
      title: "Three ways to read your sugar",
      intro: "Turn each card to see what each number tells you.",
      cards: [
        { id: "hba1c", front: "HbA1c", when: "A blood test, every three to six months", back: "Your average blood sugar over the last two to three months. The ideal is 48mmol/mol or below." },
        { id: "time-in-range", front: "Time in range", when: "From a continuous glucose monitor", back: "The percentage of time your blood sugar is in your target range. Most experts recommend at least 70% of the day." },
        { id: "finger-prick", front: "Finger-prick test", when: "Checks through the day", back: "A snapshot of your blood sugar at one moment." },
      ],
    },
    sources: [DUK_HBA1C, DUK_TIR, NHS_T1_TREATMENT, NHS_T1_LIVING],
    quiz: {
      question: "What does HbA1c measure?",
      options: [{ text: "Average blood sugar over two to three months", right: true }, { text: "Your blood sugar at one moment" }, { text: "Your ketone level" }],
      why: "HbA1c is your average blood glucose level for the last two to three months.",
    },
  },
  {
    id: "t1d-insulin",
    kicker: "Treatment",
    question: "How do basal and bolus insulin fit together?",
    hook: "One works quietly in the background all day. The other is a quick burst for the carbohydrate you eat.",
    short: "Most people with type 1 diabetes in the UK take two kinds of insulin each day: a slow-acting background (basal) insulin and a fast-acting mealtime (bolus) insulin. Combining them is often called a basal-bolus regime, and it usually means four to eight injections a day. An insulin pump does both jobs with fast-acting insulin alone.",
    sections: [
      {
        heading: "Insulin is the main treatment",
        paragraphs: [
          "The main treatment for type 1 diabetes is insulin. You cannot live without it, so you need daily insulin injections or an insulin pump.",
          "There are different types of insulin, taken at different times.",
        ],
      },
      {
        heading: "Basal: the background",
        paragraphs: [
          "Basal insulin is slower-acting. You usually take it once or twice a day. Through the day, it deals with the sugar your body is making or moving.",
          "Long-acting insulin is usually taken once a day at the same time each day. Breakthrough T1D says slow-acting insulin can last up to 24 hours.",
        ],
      },
      {
        heading: "Bolus: the mealtime burst",
        paragraphs: [
          "Bolus insulin gives you a quick burst of insulin to deal with the carbohydrate in food and drink. You take it with meals, and sometimes snacks.",
          "Rapid-acting insulin starts to work within a few minutes and lasts three to five hours, depending on the brand. You take it shortly before or after meals.",
        ],
      },
      {
        heading: "Putting them together",
        paragraphs: [
          "Combining the two is often called a basal-bolus regime. It usually means taking four to eight injections a day. It is flexible, because you can inject whenever you eat.",
          "Around 90% of people with type 1 diabetes in the UK inject several times a day. Mixed insulins combine two types in one dose, so there are fewer injections each day, but less flexibility.",
        ],
      },
      {
        heading: "Pumps and pens",
        paragraphs: [
          "An insulin pump uses only fast-acting insulin. It releases small amounts all the time, which does the job of basal insulin, and you tell it what bolus dose you want when you eat.",
          "Connected pens record how much insulin you inject and when you inject it.",
        ],
      },
    ],
    helps: [
      "Take your insulin as prescribed, and do not skip or change doses without advice.",
      "Learn how to match your insulin dose to what you eat and drink.",
      "Take long-acting insulin at the same time each day.",
      "Ask your team whether a pump or a connected pen might suit you.",
      "Ask about a free diabetes course, where you learn to adjust your doses.",
    ],
    tryThisWeek: [
      "Take long-acting insulin at the same time daily.",
      "Do not skip or change doses without advice.",
      "Ask about a diabetes course.",
    ],
    ask: "Which of my insulins is basal and which is bolus, and when should I take each?",
    interactive: {
      kind: "flip-cards",
      title: "Your insulins, card by card",
      intro: "Turn each card to see what that kind of insulin does.",
      cards: [
        { id: "basal", front: "Basal insulin", when: "Once or twice a day", back: "Background insulin that deals with the sugar your body is making or moving through the day." },
        { id: "rapid", front: "Rapid-acting bolus", when: "Shortly before or after meals", back: "Starts to work within a few minutes and lasts three to five hours, depending on the brand." },
        { id: "short", front: "Short-acting bolus", when: "Around 25 minutes before you eat", back: "Takes about 30 to 60 minutes to start working and lasts 5 to 8 hours." },
        { id: "mixed", front: "Mixed insulin", when: "Two types in one dose", back: "Means fewer injections each day, but less flexibility." },
        { id: "pump", front: "Insulin pump", when: "Fast-acting insulin only", back: "Releases small amounts all the time as basal insulin, plus a bolus dose when you eat." },
      ],
    },
    sources: [NHS_T1_TREATMENT, DUK_T1_TREATMENTS, DUK_INSULIN_TYPES, BT1D_INSULIN, DUK_PUMPS, NHS_HYPER],
    quiz: {
      question: "What does bolus insulin do?",
      options: [{ text: "Gives a quick burst for the carbs you eat", right: true }, { text: "Works quietly all day in the background" }, { text: "Treats a hypo" }],
      why: "Bolus insulin gives you a quick burst of insulin to deal with the carbohydrate in food and drink.",
    },
  },
  {
    id: "t1d-carb-counting",
    kicker: "Food",
    question: "How does carb counting work in real life?",
    hook: "Know the carbohydrate in a meal, and you can match your insulin to it. That means more freedom in what you eat.",
    short: "Carb counting means matching your insulin dose to the amount of carbohydrate you eat and drink. Your diabetes team helps you work out an insulin-to-carb ratio, such as 1 unit for every 10g of carbohydrate. Food labels, scales, apps and courses such as DAFNE all help you count.",
    sections: [
      {
        heading: "Why count",
        paragraphs: [
          "Knowing how many carbohydrates you are eating and drinking helps you manage your blood glucose levels. Your insulin dose can be matched to your food, so you can be more flexible in what you eat.",
          "Carbohydrate can be counted in grams or in portions. One portion is usually 10g of carbohydrate.",
        ],
      },
      {
        heading: "Your ratio",
        paragraphs: [
          "An insulin-to-carb ratio is how much bolus insulin you need for a set amount of carbohydrate. It is different from person to person, depending on things like your age, weight, activity and how sensitive you are to insulin.",
          "Your diabetes team usually starts with an estimated ratio, then fine-tunes it using your blood sugar levels.",
        ],
      },
      {
        heading: "A worked example",
        paragraphs: [
          "Say your ratio is 1 unit of bolus insulin for every 10g of carbohydrate. A meal with 70g of carbohydrate would need 7 units.",
          "The dose you actually take can also depend on your blood sugar level, illness or exercise.",
        ],
      },
      {
        heading: "Counting on the day",
        paragraphs: [
          "Food labels help. Count the total carbohydrate, not just the figure for sugars. If a label gives carbohydrate per 100g, work out the amount for the portion you will actually eat.",
          "Digital scales that can be zeroed make weighing easier. Portions vary a lot: a small and a large banana can differ by up to 20g of carbohydrate. Books and apps such as Carbs & Cals can help when there is no label.",
        ],
      },
      {
        heading: "Learning it",
        paragraphs: [
          "Courses teach carb counting. DAFNE, which stands for dose adjustment for normal eating, is an NHS course for people with type 1 diabetes. The NHS says you should be offered a free group course within a year of diagnosis.",
          "Apps, insulin pumps and closed-loop systems can do many of the calculations for you.",
        ],
      },
    ],
    helps: [
      "Ask your diabetes team to help you work out your insulin-to-carb ratio.",
      "Count the total carbohydrate on a label, not just the sugars.",
      "Weigh food with digital scales that can be zeroed.",
      "Use a carb counting book or app when there is no label.",
      "Ask about a course such as DAFNE.",
    ],
    tryThisWeek: [
      "Read the total carbs on a label.",
      "Weigh the carbs in one meal.",
      "Try a carb counting app.",
    ],
    ask: "What is my insulin-to-carb ratio, and can I go on a course such as DAFNE?",
    interactive: {
      kind: "scenarios",
      title: "Counting in everyday moments",
      scenarios: [
        {
          id: "ratio",
          situation: "Your ratio is 1 unit per 10g. A meal has 70g of carbohydrate.",
          options: [{ text: "7 units", best: true }, { text: "70 units" }, { text: "1 unit" }],
          why: "A meal with 70g of carbohydrate would need 7 units, on a ratio of 1 unit for every 10g.",
        },
        {
          id: "sugars",
          situation: "A label lists carbohydrate, and 'of which sugars'.",
          options: [{ text: "Count the total carbohydrate", best: true }, { text: "Count only the sugars" }],
          why: "Count the total carbohydrate, not just the figure for sugars.",
        },
        {
          id: "per-100g",
          situation: "The label gives carbohydrate per 100g, but you will eat 80g.",
          options: [{ text: "Work it out for 80g", best: true }, { text: "Use the per 100g figure" }],
          why: "If a label gives carbohydrate per 100g, work out the amount for the portion you will actually eat.",
        },
        {
          id: "banana",
          situation: "Two bananas: one small, one large.",
          options: [{ text: "Weigh it or check a guide", best: true }, { text: "Count them the same" }],
          why: "A small and a large banana can differ by up to 20g of carbohydrate.",
        },
      ],
    },
    sources: [NHS_T1_LIVING, DUK_CARB, NHS_T1_TREATMENT, DUK_T1_TREATMENTS],
    quiz: {
      question: "On a ratio of 1 unit per 10g, how much insulin would 70g of carbohydrate need?",
      options: [{ text: "7 units", right: true }, { text: "70 units" }, { text: "1 unit" }],
      why: "Say your ratio is 1 unit of bolus insulin for every 10g of carbohydrate. A meal with 70g of carbohydrate would need 7 units.",
    },
  },
  {
    id: "t1d-sensors-pumps",
    kicker: "Technology",
    question: "What are sensors, pumps and closed loops?",
    hook: "A sensor reads your sugar day and night. A pump delivers insulin. Linked together, they can adjust background insulin by themselves.",
    short: "A continuous glucose monitor, or CGM, is a small sensor under your skin that reads your sugar day and night, and people with type 1 diabetes should generally be offered one. An insulin pump releases insulin through the day and night. A hybrid closed loop links the two, so background insulin is adjusted automatically, though you still enter the carbohydrate you eat.",
    sections: [
      {
        heading: "Glucose sensors",
        paragraphs: [
          "A continuous glucose monitor, or CGM, is a small sensor that sits under your skin, day and night. It sends readings to a phone or another device, and you can set an alarm for when your sugar goes too low or too high.",
          "Scanning a sensor to get a reading is called flash glucose monitoring. Generally, people with type 1 diabetes should be offered a CGM.",
        ],
      },
      {
        heading: "Keep a finger-prick kit",
        paragraphs: [
          "A CGM measures the fluid around your cells, so it can lag behind your blood sugar by up to 15 minutes. Keep getting your finger-prick kit on prescription, for when symptoms do not match a reading or when you are treating a hypo.",
        ],
      },
      {
        heading: "Insulin pumps",
        paragraphs: [
          "An insulin pump is a small electronic device that releases insulin through the day and night. A tethered pump is joined to your cannula by a small tube. A patch pump sits directly on your skin, with no extra tubing.",
          "The cannula is a tiny tube just under the skin, changed every two or three days. With a pump, blood sugar is more often in range, but it is attached all the time, and a blocked or loose tube risks high blood sugar and DKA.",
        ],
      },
      {
        heading: "Hybrid closed loops",
        paragraphs: [
          "A hybrid closed loop lets your pump talk to your CGM. It continuously monitors your blood sugar and automatically adjusts your background insulin. It is sometimes called an artificial pancreas.",
          "You still count the carbohydrate in your food and drink and enter it on the pump, which works out your mealtime dose. You also enter exercise, change sensors and sets, and carry back-up insulin and a finger-prick kit in case the system fails.",
        ],
      },
      {
        heading: "Getting one",
        paragraphs: [
          "Hybrid closed loop systems are gradually being made available on the NHS. In 2024, NHS England began a five-year plan, with children, young people and pregnant people first.",
          "On the NHS, pumps on their own are generally only offered to some children and adults with type 1 diabetes.",
        ],
      },
    ],
    helps: [
      "Ask your diabetes team whether you can have a CGM or a hybrid closed loop.",
      "Set your CGM alarm for lows and highs.",
      "Keep getting your finger-prick kit on prescription.",
      "Change your cannula every two or three days, moving the site each time.",
      "Carry back-up insulin and a way to inject in case the system fails.",
    ],
    tryThisWeek: [
      "Check your CGM alarms are set.",
      "Keep a finger-prick kit handy.",
      "Pack back-up insulin.",
    ],
    ask: "Am I eligible for a CGM, a pump or a hybrid closed loop?",
    interactive: {
      kind: "flip-cards",
      title: "The kit, card by card",
      intro: "Turn each card to see what each device does.",
      cards: [
        { id: "cgm", front: "CGM", when: "A sensor under the skin, day and night", back: "Sends readings to a phone or device, and can sound an alarm if sugar goes too low or too high." },
        { id: "flash", front: "Flash monitoring", when: "Scanning the sensor", back: "You get a reading when you scan your sensor." },
        { id: "tethered", front: "Tethered pump", when: "Joined by a small tube", back: "Releases insulin through the day and night, through a cannula just under the skin." },
        { id: "patch", front: "Patch pump", when: "No extra tubing", back: "Sits directly on your skin. You replace the whole device when it alerts you." },
        { id: "loop", front: "Hybrid closed loop", when: "Pump and CGM linked", back: "Adjusts background insulin automatically. You still enter the carbohydrate you eat." },
      ],
    },
    sources: [DUK_CGM, DUK_PUMPS, DUK_CLOSED_LOOP, NHS_T1_TREATMENT],
    quiz: {
      question: "What do you still do yourself with a hybrid closed loop?",
      options: [{ text: "Enter the carbohydrate you eat", right: true }, { text: "Nothing at all" }, { text: "Inject background insulin by hand" }],
      why: "You still count the carbohydrate in your food and drink and enter it on the pump, which works out your mealtime dose.",
    },
  },
  {
    id: "t1d-sick-days",
    kicker: "When you are ill",
    question: "What are sick-day rules, and why do ketones matter?",
    hook: "Illness can push blood sugar up even when you are not eating. Keep taking insulin, check more often, and test for ketones.",
    short: "When you are ill, keep taking your insulin, even if you do not feel like eating, because illness is one of the triggers for DKA. Check your blood sugar at least every four hours, including at night, and test for ketones whatever your sugar level. Get medical help urgently if you cannot keep fluids down.",
    sections: [
      {
        heading: "Why illness matters",
        paragraphs: [
          "Illness is one of the triggers for DKA, a serious complication caused by a lack of insulin. Your care team can give you guidelines for what to do when you are ill, including how to adjust your insulin dose. These are called sick-day rules.",
        ],
      },
      {
        heading: "Keep taking insulin",
        paragraphs: [
          "Keep taking your diabetes medicines, even if you do not feel like eating. You may need to increase, or sometimes decrease, your insulin when you are unwell, so get guidance from your diabetes team.",
          "Never stop taking insulin, even if you are not eating.",
        ],
      },
      {
        heading: "Check more often",
        paragraphs: [
          "Check your blood sugar at least every four hours, or as your healthcare team advises, including during the night.",
          "If you are sick, test for ketones whatever your blood sugar level is. Check them too if your blood sugar is above your target range, usually above 14mmol/l. If you find ketones, contact your healthcare team.",
        ],
      },
      {
        heading: "Food and drink",
        paragraphs: [
          "Stay hydrated with plenty of unsweetened drinks. If you cannot keep food down, try eating little and often. The important thing is to keep up your carbohydrate.",
          "If you are being sick, letting fizzy drinks go flat may help you keep them down.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "If you still cannot keep any fluids down, get medical help urgently. Call 999 or go to A&E if your blood ketones are over 3mmol/l, or if you have signs of DKA and do not know your ketone level.",
          "Contact your diabetes care team or NHS 111 if your blood sugar is high and insulin is not bringing it down, even if your ketones are normal.",
        ],
      },
    ],
    helps: [
      "Plan your sick-day rules in advance with your care team.",
      "Share your sick-day rules with a friend or family member, so they can help.",
      "Keep taking insulin, even if you do not feel like eating.",
      "Check your blood sugar at least every four hours, including at night.",
      "Test for ketones whenever you are sick.",
      "Drink plenty of unsweetened fluids.",
    ],
    tryThisWeek: [
      "Plan your sick-day rules.",
      "Share them with someone close.",
      "Remember to test ketones when sick.",
    ],
    ask: "What are my sick-day rules, written down, and who do I call out of hours?",
    interactive: {
      kind: "scenarios",
      title: "Ill with type 1",
      scenarios: [
        {
          id: "not-eating",
          situation: "You have flu and do not feel like eating.",
          options: [{ text: "Keep taking insulin and check often", best: true }, { text: "Skip insulin until you eat" }],
          why: "Never stop taking insulin, even if you are not eating.",
        },
        {
          id: "in-range",
          situation: "You are being sick, but your sugar is in range.",
          options: [{ text: "Test for ketones anyway", best: true }, { text: "No need to test for ketones" }],
          why: "If you are sick, test for ketones whatever your blood sugar level is.",
        },
        {
          id: "fluids",
          situation: "You cannot keep any fluids down.",
          options: [{ text: "Get medical help urgently", best: true }, { text: "Wait until tomorrow" }],
          why: "If you still cannot keep any fluids down, get medical help urgently.",
        },
        {
          id: "fizzy",
          situation: "Fizzy drinks keep coming back up.",
          options: [{ text: "Let them go flat first", best: true }, { text: "Stop drinking altogether" }],
          why: "If you are being sick, letting fizzy drinks go flat may help you keep them down.",
        },
      ],
    },
    sources: [DUK_ILLNESS, NHS_DKA, NHS_T1_LIVING, DUK_DKA],
    quiz: {
      question: "If you are sick but your blood sugar is in range, should you test for ketones?",
      options: [{ text: "Yes, test anyway", right: true }, { text: "No, only if sugar is high" }, { text: "Only after a week" }],
      why: "If you are sick, test for ketones whatever your blood sugar level is.",
    },
  },
  {
    id: "t1d-exercise",
    kicker: "Exercise",
    question: "How does exercise affect blood sugar and insulin?",
    hook: "Some exercise pulls sugar down, some pushes it up, and the effect can last into the night.",
    short: "Some exercise makes blood sugar go low and other exercise makes it rise: aerobic exercise like swimming or running is likely to lower it, while sprinting and weightlifting are likely to raise it. A low can also come hours later. Check before, during and after, and you may need more carbohydrate or less insulin.",
    sections: [
      {
        heading: "Different exercise, different effects",
        paragraphs: [
          "Some exercise can make your blood sugar go low, and other exercise can make it rise. Flexibility exercise like yoga, tai chi and pilates has a minimal effect.",
          "Aerobic exercise like swimming, cycling or running is likely to lower your blood sugar. Anaerobic exercise like sprinting and weightlifting is likely to make it rise, because adrenaline triggers the liver to release stored glucose.",
        ],
      },
      {
        heading: "Before and during",
        paragraphs: [
          "Check your blood glucose before, during and after exercise. You may need to eat more carbohydrate and reduce your insulin dose to prevent hypos.",
          "If you are exercising hard or for a long time, you are likely to need extra carbohydrate. If you can, check your levels every 20 to 30 minutes.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "Check your blood glucose as soon as you finish, and then every few hours. Around 8 to 12 hours after exercise, your blood glucose could drop too low.",
          "Exercising late in the evening may increase the risk of a hypo overnight, often around 2 to 3am. Taking less evening insulin or eating a low GI snack before bed may help, and pump users can reduce their basal rate.",
        ],
      },
      {
        heading: "Why it is worth it",
        paragraphs: [
          "Exercise can help keep blood glucose more stable over the long term. It can make you more sensitive to insulin, so you may need less. Regular activity can help prevent long-term complications, particularly heart disease.",
          "Exercise affects everyone differently. Keep a log of what exercise you do and how it affects your glucose levels.",
        ],
      },
    ],
    helps: [
      "Check your blood glucose before, during and after exercise.",
      "Carry extra carbohydrate for long or hard sessions.",
      "Keep a log of your exercise and how it affects your glucose.",
      "After late evening exercise, think about less evening insulin or a low GI snack before bed.",
      "Ask your diabetes team about reducing your insulin dose around exercise.",
    ],
    tryThisWeek: [
      "Check before, during and after.",
      "Carry extra carbs.",
      "Start an exercise log.",
    ],
    ask: "How should I adjust my insulin and food for the exercise I do?",
    interactive: {
      kind: "timeline",
      title: "One workout, and the hours after",
      steps: [
        { id: "before", when: "Before", title: "Check your level", points: ["Test your blood glucose.", "Decide whether to eat carbohydrate first."] },
        { id: "during", when: "During", title: "Every 20 to 30 minutes", points: ["Check your levels if you can.", "Long or hard exercise may need extra carbohydrate."] },
        { id: "after", when: "Straight after", title: "Check again", points: ["Check as soon as you finish.", "Then check every few hours."] },
        { id: "later", when: "8 to 12 hours later", title: "A late low", points: ["Blood glucose could drop too low.", "Low GI foods can help keep it up."] },
        { id: "night", when: "Overnight", title: "Around 2 to 3am", points: ["Late evening exercise may raise the risk of a night hypo.", "Less evening insulin or a low GI snack may help."] },
      ],
    },
    sources: [BT1D_EXERCISE, NHS_T1_LIVING, DUK_TIR],
    quiz: {
      question: "Which kind of exercise is likely to make blood sugar rise?",
      options: [{ text: "Sprinting and weightlifting", right: true }, { text: "Yoga" }, { text: "Tai chi" }],
      why: "Anaerobic exercise like sprinting and weightlifting is likely to make it rise, because adrenaline triggers the liver to release stored glucose.",
    },
  },
  {
    id: "t1d-driving",
    kicker: "Driving",
    question: "Can I drive with type 1 diabetes?",
    hook: "Most people with diabetes keep driving. It means telling the DVLA, checking before you set off, and knowing what to do about a hypo.",
    short: "If you drive, you need to tell the DVLA you have diabetes and take insulin. The DVLA will not usually stop you driving, but you need to show you can manage hypos safely. Check your glucose before you set off and every two hours on long journeys, and do not drive below 5mmol/l.",
    sections: [
      {
        heading: "Telling the DVLA",
        paragraphs: [
          "If you drive, you need to tell the DVLA you have diabetes and take insulin. The DVLA will not usually stop you driving, but you need to show you can manage hypos safely.",
          "For a car or motorbike licence, tell the DVLA if your insulin treatment lasts, or will last, over 3 months, or if you get disabling hypos. For a bus, coach or lorry licence, stop driving and tell the DVLA when you start insulin. You can be fined up to £1,000 if you do not tell the DVLA about a condition that affects your driving.",
        ],
      },
      {
        heading: "Five to drive",
        paragraphs: [
          "Diabetes UK's rule is five to drive: your blood glucose should be 5mmol/l or above before you drive. If it is between 4 and 5mmol/l, eat some carbohydrate before setting off. If it is under 4mmol/l, treat the hypo and check again.",
          "Check before you set off and every two hours on long journeys. It is fine to use a CGM to check before you drive, if it is approved for making treatment decisions.",
        ],
      },
      {
        heading: "A hypo at the wheel",
        paragraphs: [
          "If you feel your glucose is low, pull over safely as soon as you can. Switch off the engine, take the keys out and move from the driver's seat. Take fast-acting carbohydrate, then some longer-acting carbohydrate.",
          "Do not drive until 45 minutes after your glucose has gone back to 5mmol/l or above.",
        ],
      },
      {
        heading: "In the car",
        paragraphs: [
          "Keep hypo treatment where you can easily reach it in the car. Keep spare test strips in the car and bring your meter, even if you use a CGM.",
          "Most car insurers will not charge more because you have diabetes, but you will have to declare it when you apply.",
        ],
      },
    ],
    helps: [
      "Tell the DVLA you have diabetes and take insulin.",
      "Check your glucose before you drive and every two hours on long journeys.",
      "Do not drive if your glucose is below 5mmol/l.",
      "Keep hypo treatment within easy reach in the car.",
      "Keep spare test strips and your meter in the car.",
      "Declare your diabetes to your car insurer.",
    ],
    tryThisWeek: [
      "Put hypo treatment in the car.",
      "Check before every journey.",
      "Pack spare strips and your meter.",
    ],
    ask: "Does my CGM count for checking before I drive, and what do I need to tell the DVLA?",
    interactive: {
      kind: "scenarios",
      title: "Before and behind the wheel",
      scenarios: [
        {
          id: "four-to-five",
          situation: "Your reading is between 4 and 5mmol/l before a drive.",
          options: [{ text: "Eat some carbs before setting off", best: true }, { text: "Drive straight away" }],
          why: "If it is between 4 and 5mmol/l, eat some carbohydrate before setting off.",
        },
        {
          id: "low-driving",
          situation: "You feel low while driving.",
          options: [{ text: "Pull over, engine off, leave the seat", best: true }, { text: "Keep going to get home" }],
          why: "Pull over safely as soon as you can. Switch off the engine, take the keys out and move from the driver's seat.",
        },
        {
          id: "wait",
          situation: "After a hypo, your reading is back to 5mmol/l.",
          options: [{ text: "Wait 45 minutes before driving", best: true }, { text: "Drive on straight away" }],
          why: "Do not drive until 45 minutes after your glucose has gone back to 5mmol/l or above.",
        },
        {
          id: "long",
          situation: "You have a four-hour journey ahead.",
          options: [{ text: "Check every two hours", best: true }, { text: "Check once at the start" }],
          why: "Check before you set off and every two hours on long journeys.",
        },
      ],
    },
    sources: [NHS_T1_LIVING, GOV_DRIVING, DUK_DRIVING, NHS_HYPO],
    quiz: {
      question: "What does 'five to drive' mean?",
      options: [{ text: "Glucose of 5mmol/l or above before driving", right: true }, { text: "Drive for five hours at most" }, { text: "Check five times a journey" }],
      why: "Diabetes UK's rule is five to drive: your blood glucose should be 5mmol/l or above before you drive.",
    },
  },
  {
    id: "t1d-alcohol",
    kicker: "Alcohol",
    question: "How does alcohol affect type 1 diabetes?",
    hook: "Alcohol makes hypos more likely, and the risk lasts into the next day.",
    short: "Alcohol reduces your body's ability to recover when blood sugar is dropping, so a hypo is more likely. The risk does not go away when you stop drinking, and can last up to 24 hours. Keep to no more than 14 units a week, spread over three days or more, and avoid drinking on an empty stomach.",
    sections: [
      {
        heading: "Why hypos are more likely",
        paragraphs: [
          "Alcohol reduces your body's ability to recover when blood sugar levels are dropping. If you use insulin, you are more likely to have a hypo, and drinking adds to this risk.",
          "Your risk of a hypo does not go away after you stop drinking. It increases, and can last up to 24 hours. Drinking a lot, or on an empty stomach, makes a hypo even more likely.",
        ],
      },
      {
        heading: "How much",
        paragraphs: [
          "It is safest not to regularly drink more than 14 units a week, spread over three days or more, with some alcohol-free days. That is no more than six pints of lager or six medium glasses of wine a week.",
          "Avoid drinking on an empty stomach.",
        ],
      },
      {
        heading: "Hypo or drunk?",
        paragraphs: [
          "It is not uncommon for people to mistake a hypo for being drunk. Hypo symptoms can also feel like a hangover, so check your blood sugar and treat a hypo straight away.",
          "Make sure the people you are with know you have diabetes and know how to help with a hypo. Always wear some medical ID and carry hypo treatment.",
        ],
      },
      {
        heading: "The next day",
        paragraphs: [
          "Drink a pint of water before bed, always have breakfast, and check your blood sugar regularly the next day.",
          "Alcohol can make carb counting trickier, because you may not need your usual mealtime insulin. Talk to your healthcare team before adjusting insulin for alcohol.",
        ],
      },
      {
        heading: "In an emergency",
        paragraphs: [
          "If someone with very low blood sugar is not responding normally or is unconscious, and they have been drinking alcohol, call 999.",
        ],
      },
    ],
    helps: [
      "Keep to no more than 14 units a week, spread over three days or more.",
      "Do not drink on an empty stomach.",
      "Tell the people you are with that you have diabetes and how to help with a hypo.",
      "Wear medical ID and carry hypo treatment.",
      "Have breakfast, and check your blood sugar regularly the next day.",
      "Talk to your team before adjusting insulin for alcohol.",
    ],
    tryThisWeek: [
      "Do not drink on an empty stomach.",
      "Tell a friend how to help with a hypo.",
      "Have breakfast the morning after.",
    ],
    ask: "How should I adjust my insulin and food when I drink?",
    interactive: {
      kind: "scenarios",
      title: "A night out",
      scenarios: [
        {
          id: "empty",
          situation: "You are heading out straight from work, without eating.",
          options: [{ text: "Eat something first", best: true }, { text: "Drink now, eat later" }],
          why: "Drinking a lot, or on an empty stomach, makes a hypo even more likely.",
        },
        {
          id: "friends",
          situation: "Your friends do not know you have type 1.",
          options: [{ text: "Tell them how to help with a hypo", best: true }, { text: "Keep it to yourself" }],
          why: "Make sure the people you are with know you have diabetes and know how to help with a hypo.",
        },
        {
          id: "shaky",
          situation: "You feel shaky and muddled at the bar.",
          options: [{ text: "Check your sugar and treat a hypo", best: true }, { text: "Assume it is the drink" }],
          why: "It is not uncommon for people to mistake a hypo for being drunk.",
        },
        {
          id: "morning",
          situation: "The morning after, you feel rough.",
          options: [{ text: "Have breakfast and check your sugar", best: true }, { text: "Skip breakfast" }],
          why: "Always have breakfast, and check your blood sugar regularly the next day.",
        },
      ],
    },
    sources: [DUK_ALCOHOL, NHS_T1_LIVING, NHS_HYPO],
    quiz: {
      question: "How long can the raised hypo risk last after drinking?",
      options: [{ text: "Up to 24 hours", right: true }, { text: "Only while you are drinking" }, { text: "About ten minutes" }],
      why: "Your risk of a hypo does not go away after you stop drinking. It increases, and can last up to 24 hours.",
    },
  },
  {
    id: "t1d-burnout",
    kicker: "Wellbeing",
    question: "What is diabetes burnout, and who can help?",
    hook: "Type 1 never takes a day off. Feeling worn down by it is common, and there is help.",
    short: "Diabetes distress is what some people feel when they are overwhelmed by the relentlessness of diabetes, and one in four people with type 1 have high levels of it. If it lasts, it can lead to burnout, where people stop caring for themselves and their diabetes. Your healthcare team, talking therapies and other people with type 1 can all help.",
    sections: [
      {
        heading: "Distress and burnout",
        paragraphs: [
          "Diabetes distress is what some people feel when they are overwhelmed by the relentlessness of diabetes. The NHS says constantly trying to meet blood glucose targets can lead to a feeling of burnout.",
          "Distress that lasts a long time can lead to burnout. Burnout can mean you stop caring for yourself and your diabetes, which sometimes means skipping insulin.",
        ],
      },
      {
        heading: "How common it is",
        paragraphs: [
          "One in four people with type 1 diabetes have high levels of diabetes distress. A lot of people go through it more than once. The most common cause is worry about future complications, or anxiety when managing diabetes goes off track.",
        ],
      },
      {
        heading: "The signs",
        paragraphs: [
          "Signs include feeling angry and frustrated about the demands of diabetes, worrying about it without feeling motivated to change, avoiding appointments or blood sugar checks, regularly making unhealthy food choices, and feeling alone and isolated.",
          "Diabetes distress is not the same as depression. But it can turn into depression if the feelings last and do not go away.",
        ],
      },
      {
        heading: "Who can help",
        paragraphs: [
          "Your healthcare team is there to support the emotional side of diabetes as well as the physical side. Your diabetes team may have a mental health specialist, or your GP can refer you. Talking therapies are free on the NHS, in person, by video, by phone or as an online course.",
          "Other people with type 1 understand. Local support groups and online communities can help, and charities such as Diabetes UK and Breakthrough T1D offer information and support.",
        ],
      },
      {
        heading: "Being kinder to yourself",
        paragraphs: [
          "Setting smaller, more realistic goals can help. Remember that your blood sugar levels are just a number, and try saying high and low instead of good and bad.",
        ],
      },
    ],
    helps: [
      "Talk to your healthcare team about how you feel.",
      "Ask about talking therapies, which are free on the NHS.",
      "Set smaller, more realistic goals.",
      "Find a local support group or online community for people with type 1.",
      "Call the Diabetes UK helpline on 0345 123 2399 to talk things through.",
      "Say high and low, not good and bad.",
    ],
    tryThisWeek: [
      "Tell your team how you feel.",
      "Set one small, realistic goal.",
      "Look up a type 1 support group.",
    ],
    ask: "Can I be referred to someone who understands the emotional side of diabetes?",
    interactive: {
      kind: "signs",
      title: "Signs of diabetes distress",
      intro: "Tick any that sound like you lately.",
      signs: ["Angry or frustrated about diabetes", "Worried, but not motivated to change", "Avoiding appointments", "Avoiding blood sugar checks", "Often making unhealthy food choices", "Feeling alone and isolated", "Skipping insulin"],
      after: "Talk to your diabetes team or GP. Talking therapies are free on the NHS, and other people with type 1 can help.",
      copyHeading: "How diabetes has been feeling lately",
    },
    sources: [DUK_BURNOUT, NHS_T1_LIVING, NHS_T1_SUPPORT],
    quiz: {
      question: "Is diabetes distress the same as depression?",
      options: [{ text: "No, though it can turn into depression", right: true }, { text: "Yes, exactly the same" }, { text: "It only affects type 2" }],
      why: "Diabetes distress is not the same as depression. But it can turn into depression if the feelings last and do not go away.",
    },
  },
  {
    id: "t1d-pregnancy",
    kicker: "Pregnancy",
    question: "Can I have a healthy pregnancy with type 1 diabetes?",
    hook: "Yes. Planning ahead, high-dose folic acid and extra care all help.",
    short: "You can have a healthy pregnancy if you have type 1 diabetes, and planning ahead can reduce the chance of problems for you and your baby. It is best if your HbA1c is no more than 48mmol/mol before you get pregnant, and you take 5mg of folic acid a day until 12 weeks. Expect extra appointments, scans and checks.",
    sections: [
      {
        heading: "Planning ahead",
        paragraphs: [
          "You can have a healthy pregnancy if you have type 1 diabetes. Planning a pregnancy can reduce the chance of problems for you and your baby.",
          "Diabetes UK suggests seeing your healthcare team at least 6 to 12 months before stopping contraception. If a pregnancy is unplanned, contact your diabetes team as soon as you find out.",
        ],
      },
      {
        heading: "Your HbA1c",
        paragraphs: [
          "It is best if your HbA1c is no more than 48mmol/mol before you get pregnant. If it is above 86mmol/mol, your care team should strongly advise you not to try for a baby until it comes down.",
          "The first 6 to 8 weeks, when the baby's organs form, are a key time for blood glucose. Pregnancy hormones can make it harder to keep your blood sugar in range.",
        ],
      },
      {
        heading: "Folic acid",
        paragraphs: [
          "Take 5mg of folic acid each day until you are 12 weeks pregnant. A doctor will have to prescribe it, because you cannot buy 5mg tablets without a prescription.",
        ],
      },
      {
        heading: "During pregnancy",
        paragraphs: [
          "You should be seen by your healthcare team every two weeks, with extra checks and scans. You will be offered regular eye screening, because the risk of serious eye problems is greater in pregnancy.",
          "Pregnancy can bring more hypos, which may be more severe. DKA can happen even when blood sugar levels are in the normal range, so keep a blood ketone meter. You should qualify for a CGM on the NHS in England, Wales and Scotland, and for a hybrid closed loop in England and Wales.",
        ],
      },
      {
        heading: "Birth and after",
        paragraphs: [
          "Your doctors may recommend starting labour early. Your blood glucose is checked every hour during labour and birth.",
          "Feed your baby as soon as possible after the birth, within 30 minutes, to help keep their blood glucose at a safe level. Your insulin needs usually fall after pregnancy.",
        ],
      },
    ],
    helps: [
      "Talk to your diabetes team before you stop contraception.",
      "Ask your doctor to prescribe 5mg of folic acid.",
      "Keep using contraception until your levels are under control.",
      "Go to every appointment, so your care team can monitor your condition.",
      "Keep a blood ketone meter, and get urgent help if ketones are raised or you feel unwell.",
      "Ask your team about a CGM or a hybrid closed loop.",
    ],
    tryThisWeek: [
      "Talk to your team before stopping contraception.",
      "Ask about 5mg folic acid.",
      "Check you have a ketone meter.",
    ],
    ask: "What should my HbA1c be before I try for a baby, and when should I start folic acid?",
    interactive: {
      kind: "timeline",
      title: "Pregnancy with type 1, step by step",
      steps: [
        { id: "plan", when: "6 to 12 months before", title: "Start planning", points: ["See your team before stopping contraception.", "Aim for an HbA1c of 48mmol/mol or below."] },
        { id: "folic", when: "Trying, until 12 weeks", title: "5mg folic acid daily", points: ["A doctor needs to prescribe it.", "The first weeks are key for blood glucose."] },
        { id: "during", when: "During pregnancy", title: "Seen every two weeks", points: ["Extra checks, scans and eye screening.", "Keep a blood ketone meter."] },
        { id: "birth", when: "Labour and birth", title: "Hourly glucose checks", points: ["Labour may be started early.", "Blood glucose is checked every hour."] },
        { id: "after", when: "After the birth", title: "Feed within 30 minutes", points: ["This helps keep your baby's blood glucose safe.", "Your insulin needs usually fall."] },
      ],
    },
    sources: [NHS_T1_LIVING, NHS_PREGNANCY, DUK_PREGNANCY],
    quiz: {
      question: "How much folic acid is advised, and until when?",
      options: [{ text: "5mg a day until 12 weeks", right: true }, { text: "None is needed" }, { text: "Only after the birth" }],
      why: "Take 5mg of folic acid each day until you are 12 weeks pregnant.",
    },
  },
];
