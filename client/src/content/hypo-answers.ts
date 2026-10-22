import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Hypos (low blood sugar) page's pieces (content/library-conditions/metabolism-more.ts
// `hypoglycaemia`). Every sentence was written from wording checked on 21 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, Diabetes UK
// and the DVLA's own pages and leaflet on the government's website. General information only; it never replaces
// what a person's own team tells them.

const duk = (label: string, path: string): LearnSource => ({ label: `Diabetes UK: ${label}`, url: `https://www.diabetes.org.uk/${path}` });
const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });

const NHS_HYPO = nhs("Low blood sugar (hypoglycaemia)", "conditions/low-blood-sugar-hypoglycaemia/");
const NHS_T1_LIVING = nhs("Living with type 1 diabetes", "conditions/type-1-diabetes/living-with/");
const NHS_T1_TREATMENT = nhs("Treatment for type 1 diabetes", "conditions/type-1-diabetes/treatment/");
const NHS_INSULIN_T1 = nhs("Insulin for type 1 diabetes", "medicines/insulin/insulin-for-type-1-diabetes/");
const NHS_INSULIN_T2 = nhs("Insulin for type 2 diabetes", "medicines/insulin/insulin-for-type-2-diabetes/");
const NHS_GLICLAZIDE = nhs("Gliclazide", "medicines/gliclazide/");
const NHS_CGM = nhs("Continuous glucose monitoring and hybrid closed loop for diabetes", "tests-and-treatments/cgm-and-hcl-for-diabetes/");

const DUK_HYPOS = duk("What is a hypo (hypoglycaemia)?", "about-diabetes/looking-after-diabetes/complications/hypos");
const DUK_UNAWARE = duk("Hypoglycaemia (hypo) unawareness", "about-diabetes/looking-after-diabetes/complications/hypos/hypo-unawareness");
const DUK_ANXIETY = duk("What is hypo anxiety?", "living-with-diabetes/emotional-wellbeing/hypo-anxiety");
const DUK_SULPH = duk("Sulphonylureas", "about-diabetes/looking-after-diabetes/treatments/tablets-and-medication/sulphonylureas");
const DUK_ALCOHOL = duk("Alcohol and diabetes", "living-with-diabetes/eating/what-to-drink-with-diabetes/alcohol-and-diabetes");
const DUK_EXERCISE_SUGAR = duk("Does exercise lower blood sugar levels?", "living-with-diabetes/exercise/blood-sugar-levels");
const DUK_COSTS = duk("Half of people living with type 1 diabetes are concerned about hypo treatment costs", "about-us/news-and-views/half-people-living-type-1-diabetes-are-concerned-about-hypo-treatment-costs");
const DUK_TRAVEL = duk("Travelling with diabetes", "living-with-diabetes/life-with-diabetes/travel");
const DUK_WORK = duk("Work and diabetes", "living-with-diabetes/life-with-diabetes/work-and-diabetes");

const GOV_DRIVING: LearnSource = { label: "GOV.UK: Diabetes and driving", url: "https://www.gov.uk/diabetes-driving" };
const GOV_INF294: LearnSource = { label: "GOV.UK (DVLA): A guide to insulin treated diabetes and driving (INF294)", url: "https://assets.publishing.service.gov.uk/media/690b2d50c22e4ed8b05184bd/inf294-a-guide-to-insulin-treated-diabetes-and-driving.pdf" };
const GOV_DVLA_MED: LearnSource = { label: "GOV.UK (DVLA): Diabetes mellitus: assessing fitness to drive", url: "https://www.gov.uk/guidance/diabetes-mellitus-assessing-fitness-to-drive" };
const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };

export const hypoAnswers: LearnArticle[] = [
  {
    id: "hypogly-what-it-is",
    kicker: "Understanding",
    question: "What is a hypo?",
    hook: "Blood sugar that drops too low, usually below 4mmol/L. It can happen quickly, and you can usually treat it yourself.",
    short: "A hypo, or hypoglycaemia, is when your blood sugar drops too low, usually below 4mmol/L. It usually affects people with diabetes who take insulin or some other diabetes medicines, and it is rare in people without diabetes. It needs to be treated quickly to stop it getting worse, but you can usually treat it yourself.",
    sections: [
      {
        heading: "Too little sugar in the blood",
        paragraphs: [
          "Hypoglycaemia, also known as a hypo, is the medical term for a low blood glucose, or sugar, level. It usually means a level below 4mmol/L.",
          "A hypo can happen quickly. So it is important to always have hypo treatments with you, and to know what the signs are and how to treat a hypo if you have one.",
        ],
      },
      {
        heading: "Why it happens with diabetes",
        paragraphs: [
          "Diabetes causes high blood sugar. Diabetes medicines treat it by lowering your blood sugar, but they can sometimes make it go too low.",
          "This is common if you take insulin. It can also happen with some other diabetes medicines, such as gliclazide and glimepiride, which are types of sulphonylurea. Not everyone with diabetes will have hypos.",
        ],
      },
      {
        heading: "Mild and severe",
        paragraphs: [
          "The NHS type 1 diabetes pages say mild hypos are common and do not usually cause any lasting problems. But if you do not act quickly, your symptoms could get worse and you could start feeling confused and drowsy.",
          "You could also become unconscious or have a fit. This is called a severe hypo, and you would need help to treat it. The DVLA describes a severe hypo in the same way: a drop in blood glucose that needs help from another person.",
        ],
      },
      {
        heading: "Without diabetes",
        paragraphs: [
          "It is rare to get low blood sugar if you do not have diabetes. It can sometimes be caused by conditions including malnutrition, Addison's disease or a growth, called a tumour, in your pancreas.",
          "If you do not have diabetes and you get symptoms of low blood sugar, such as shaking, sweating, a fast heartbeat and feeling confused, see a GP.",
        ],
      },
    ],
    helps: [
      "Always have hypo treatments with you, because a hypo can happen quickly.",
      "Check with your diabetes healthcare team if you are not sure whether your treatment is likely to cause hypos.",
      "If you have diabetes and get any symptoms of low blood sugar, check your blood sugar if you can.",
      "Know what the signs of a hypo are, and how to treat one.",
      "See a GP if you do not have diabetes and get symptoms of low blood sugar.",
    ],
    tryThisWeek: [
      "Keep hypo treatments with you.",
      "Ask if your treatment can cause hypos.",
      "Learn the signs and how to treat one.",
    ],
    ask: "Is my treatment likely to cause hypos, and at what level should I treat one?",
    interactive: {
      kind: "flip-cards",
      title: "Four words, card by card",
      intro: "Turn each card to see what the word means.",
      cards: [
        { id: "hypo", front: "Hypo (hypoglycaemia)", when: "Usually below 4mmol/L", back: "Blood sugar that is too low. It needs treating quickly, but you can usually treat it yourself." },
        { id: "severe", front: "Severe hypo", when: "When you need help to treat it", back: "You could become confused and drowsy, become unconscious or have a fit." },
        { id: "unaware", front: "Hypo unawareness", when: "When the warning signs go", back: "You cannot spot the signs that you are having a hypo. It can be dangerous." },
        { id: "hyper", front: "Hyperglycaemia", when: "Blood sugar that is too high", back: "Diabetes causes high blood sugar. Diabetes medicines lower it, but can sometimes make it go too low." },
      ],
    },
    sources: [NHS_HYPO, DUK_HYPOS, GOV_INF294, NHS_T1_LIVING, DUK_SULPH, DUK_UNAWARE],
    quiz: {
      question: "Below what blood sugar level is it usually called a hypo?",
      options: [{ text: "4mmol/L", right: true }, { text: "7mmol/L" }, { text: "10mmol/L" }],
      why: "Hypoglycaemia is the medical term for a low blood glucose level. It usually means a level below 4mmol/L.",
    },
  },
  {
    id: "hypogly-signs",
    kicker: "Signs",
    question: "What are the signs of a hypo, early and late?",
    hook: "Shaky, sweaty and hungry first. Confused, slurred or drowsy if it goes untreated. Your own signs can change over time.",
    short: "Early signs of a hypo include sweating, shaking, feeling hungry, a fast pulse, anxiety and tingling lips. If it is not treated, it may lead to slurred speech, confusion and behaviour that can look like being drunk, and then to unconsciousness. Everyone has different symptoms, and they may change over time.",
    sections: [
      {
        heading: "Early warning signs",
        paragraphs: [
          "Most people get warning signs when their blood glucose drops below 4mmol/L. Early signs include sweating, shakiness or trembling, feeling hungry, a fast pulse or palpitations, anxiety and tingling lips.",
          "Other common signs include feeling dizzy, irritable or tearful, going pale, blurred vision, tiredness, a headache and a lack of concentration.",
        ],
      },
      {
        heading: "If it is not treated",
        paragraphs: [
          "If you do not treat it, it may lead to more severe symptoms. These include slurred speech, difficulty concentrating, confusion, and disorderly or irrational behaviour that may look like drunkenness.",
          "If you have severe low blood sugar, you may have a seizure or fit, or become unconscious.",
        ],
      },
      {
        heading: "Signs change over time",
        paragraphs: [
          "Everyone has different symptoms. Be aware that your symptoms may change over time.",
          "Signs may fade with age or long use of insulin. If you have lots of hypos, you are more likely to stop noticing the symptoms over time.",
        ],
      },
      {
        heading: "Easy to mistake",
        paragraphs: [
          "Hypo symptoms are sometimes called a diabetic attack, but that term is also used for other serious conditions. It is not uncommon for some people to mistake a hypo for being drunk.",
          "The symptoms of a hypo are also similar to the feelings of a hangover. If you have symptoms, check your blood sugar if you can, and if it is below 4mmol/L, take steps to treat it.",
        ],
      },
    ],
    helps: [
      "If you have diabetes and get any symptoms of low blood sugar, check your blood sugar if you can.",
      "Do something as soon as you notice the symptoms of a hypo, before they get worse.",
      "Never ignore warning signs while driving: stop safely as soon as possible.",
      "Wear some medical ID, as a hypo can be mistaken for being drunk.",
      "See a GP if you do not always recognise the symptoms when you have low blood sugar.",
    ],
    tryThisWeek: [
      "Check your sugar when you feel signs.",
      "Act on symptoms straight away.",
      "Wear some medical ID.",
    ],
    ask: "Have my hypo signs changed, and how would I know if I am losing them?",
    interactive: {
      kind: "signs",
      title: "Signs you have noticed",
      intro: "Tick any you have had during a hypo. Everyone's signs are different, and they can change.",
      signs: ["Sweating", "Shaking or trembling", "Feeling hungry", "A fast pulse or palpitations", "Feeling anxious or irritable", "Tingling lips", "Blurred vision", "Feeling tearful", "Going pale", "A headache", "Difficulty concentrating", "Feeling confused"],
      after: "Check your blood sugar if you can, and treat a hypo straight away. See a GP if you do not always recognise your symptoms. Call 999 if someone is unconscious and glucagon is not available.",
      copyHeading: "My hypo signs",
    },
    sources: [NHS_HYPO, DUK_HYPOS, GOV_INF294, DUK_UNAWARE, DUK_ALCOHOL],
    quiz: {
      question: "Which of these is an early warning sign of a hypo?",
      options: [{ text: "Sweating or shaking", right: true }, { text: "Feeling thirsty all the time" }, { text: "Peeing more than usual" }],
      why: "Early signs include sweating, shakiness or trembling, feeling hungry, a fast pulse or palpitations, anxiety and tingling lips.",
    },
  },
  {
    id: "hypogly-causes",
    kicker: "Causes",
    question: "Why do hypos happen?",
    hook: "Too much insulin, a missed meal, more exercise or a drink. Sometimes there is no clear reason at all.",
    short: "Hypos can happen when the balance between the food you eat, the activity you do and your diabetes medicine, especially insulin, is not right. Missing meals, a lot of exercise, alcohol and too much insulin all make them more likely. Sometimes it is not clear why one happens, but understanding why you get hypos can help you prevent them.",
    sections: [
      {
        heading: "A balance that tips",
        paragraphs: [
          "Hypos can happen if the balance of the food you eat, the physical activity you do and the diabetes medicine you take, especially insulin, is not right. Insulin and some other diabetes medicines can make you more likely to have a hypo.",
          "Diabetes UK says it does not always know why hypos happen, but some things make them more likely. Understanding why you get hypos can help you prevent them from happening as often.",
        ],
      },
      {
        heading: "Medicine and injections",
        paragraphs: [
          "You are more likely to get low blood sugar if you take too much insulin, or have problems with the way you inject it, such as injecting in the same place too often.",
          "One of the most common side effects of sulphonylureas, such as gliclazide, is low blood sugar. Taking more insulin or certain diabetes medicine than you needed also makes a hypo more likely.",
        ],
      },
      {
        heading: "Food, exercise and alcohol",
        paragraphs: [
          "Missing or delaying a meal or snack, or not having enough carbohydrate at your last meal, makes a hypo more likely. So does doing a lot of exercise without having extra carbohydrate or reducing your insulin dose.",
          "Drinking a lot of alcohol, particularly without eating, also raises the risk. Usually the liver releases stored glucose when blood sugar drops, but alcohol stands in the way of this.",
        ],
      },
      {
        heading: "Illness, stress and weather",
        paragraphs: [
          "Being unwell, experiencing stress or anxiety, and extreme changes in weather can also make hypos more likely.",
          "In hot weather, insulin may be absorbed more quickly from the injection site, which increases the risk of hypos. In cold weather, it may be absorbed slowly at first, then suddenly when you warm up later in the day.",
        ],
      },
    ],
    helps: [
      "Do not skip or delay meals.",
      "Plan ahead when exercising, and check your blood glucose before, during and after it.",
      "Keep to no more than 14 units of alcohol a week, spread over 3 days or more, and do not drink alcohol without eating.",
      "Change where you inject each time, and use the right technique.",
      "Check your blood glucose more often in hot weather or during your period.",
      "Record your hypos, to see if there are any trends or patterns your healthcare team can use.",
    ],
    tryThisWeek: [
      "Do not skip or delay meals.",
      "Change your injection site each time.",
      "Write down each hypo.",
    ],
    ask: "Looking at my hypos, can we work out what is causing them?",
    interactive: {
      kind: "risk-check",
      title: "What could be tipping the balance?",
      intro: "Tick any that applied before your last hypo. Some you can change, and some you cannot.",
      items: [
        { id: "meal", label: "A missed or delayed meal", note: "Missing or delaying a meal or snack makes a hypo more likely.", changeable: true },
        { id: "carbs", label: "Not enough carbohydrate", note: "Not having enough carbohydrate at your last meal can lead to a hypo.", changeable: true },
        { id: "exercise", label: "A lot of exercise", note: "Exercise without extra carbohydrate or a lower insulin dose raises the risk.", changeable: true },
        { id: "alcohol", label: "Alcohol, especially without food", note: "Alcohol stands in the way of the liver releasing stored glucose.", changeable: true },
        { id: "insulin", label: "More insulin than you needed", note: "Too much insulin, or injecting in the same place too often, raises the risk.", changeable: true },
        { id: "unwell", label: "Being unwell, stressed or anxious", note: "Illness, stress and anxiety can all make hypos more likely.", changeable: false },
        { id: "weather", label: "Very hot or very cold weather", note: "Insulin can be absorbed more quickly in the heat, and suddenly as you warm up after the cold.", changeable: false },
      ],
    },
    sources: [DUK_HYPOS, NHS_HYPO, DUK_SULPH, DUK_ALCOHOL, DUK_TRAVEL, NHS_T1_LIVING],
    quiz: {
      question: "Which of these makes a hypo more likely?",
      options: [{ text: "Missing or delaying a meal", right: true }, { text: "Drinking a glass of water" }, { text: "Eating your usual carbohydrate" }],
      why: "Missing or delaying a meal or snack, or not having enough carbohydrate at your last meal, makes a hypo more likely.",
    },
  },
  {
    id: "hypogly-unawareness",
    kicker: "Warning signs",
    question: "What if I stop noticing the warning signs?",
    hook: "Hypo unawareness means a low can arrive with no warning. It can be dangerous, but awareness can come back.",
    short: "Hypo unawareness is when you cannot spot the signs that you are having a hypo, so you only know your blood sugar is low by checking it. It is more likely if you have lots of hypos or have had diabetes for a long time. If you can avoid hypos for a few weeks, your awareness may return, and a continuous glucose monitor can warn you with an alarm.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Hypo unawareness is when you cannot spot the signs that you are having a hypo. It can happen in people who treat their diabetes with insulin or sulphonylureas, and you will only know your blood sugar is low by checking your level.",
          "If you are unaware of your blood sugar dropping, you cannot treat the hypo quickly. This increases the risk of a severe hypo, and it can affect your work, social life and home life.",
        ],
      },
      {
        heading: "Who is more likely to get it",
        paragraphs: [
          "If you have lots of hypos, you are more likely to stop noticing the symptoms over time. Why some people become unaware of hypos is not yet fully understood.",
          "You are more likely to be unaware of hypos if you have type 1 diabetes, have had diabetes for a long time, or are trying to keep your blood sugar within a very tight range, especially at the lower end. Signs may also fade with age or long use of insulin.",
        ],
      },
      {
        heading: "Getting your awareness back",
        paragraphs: [
          "If you think you are losing your hypo awareness, speak to your diabetes team. If you can avoid hypos for a few weeks, your awareness may return.",
          "Your team may suggest checking your blood sugar more often, adjusting your medicine, or relaxing your blood sugar targets for a while. Do not raise your levels without speaking to your team, who can advise what level to aim for and for how long.",
        ],
      },
      {
        heading: "Monitors and alarms",
        paragraphs: [
          "A continuous glucose monitor lets you check your sugar levels more often, without having to prick your fingers. You can set an alarm to sound if your levels are dropping too low, at any time of the day or night.",
          "If you have type 2 diabetes and take insulin at least twice a day, you should be offered a flash monitor on the NHS if you do not always recognise the symptoms of a hypo. A small number of people with severe hypos and hypo unawareness can be referred for an islet transplant.",
        ],
      },
      {
        heading: "Driving",
        paragraphs: [
          "For car and motorcycle drivers, the DVLA describes impaired awareness as being unable to recognise when your glucose is low or starting to fall, because of a total absence of warning symptoms. Its rule is not to drive, and to tell the DVLA.",
          "Driving may start again once a report from a GP or consultant diabetes specialist confirms your awareness has come back. Alarms on glucose monitors should support your own awareness of low blood glucose, not replace it.",
        ],
      },
    ],
    helps: [
      "If you think you are losing your hypo awareness, speak to your diabetes team.",
      "Check your blood sugar regularly, as checking may be the only way to know it is low.",
      "Do not raise your blood sugar targets without speaking to your team first.",
      "Ask your team about a continuous glucose monitor with an alarm, if you do not already have one.",
      "See a GP if you do not always recognise the symptoms when you have low blood sugar.",
      "Tell the DVLA if you develop difficulty recognising the signs of low blood glucose.",
    ],
    tryThisWeek: [
      "Tell your team if your signs are fading.",
      "Check your blood sugar regularly.",
      "Ask about a monitor with an alarm.",
    ],
    ask: "Could I be losing my hypo awareness, and would a monitor with alarms help?",
    interactive: {
      kind: "scenarios",
      title: "When the warning signs fade",
      scenarios: [
        {
          id: "fading",
          situation: "You keep finding low readings you did not feel.",
          options: [{ text: "Speak to your diabetes team", best: true }, { text: "Wait for the symptoms to come back" }],
          why: "If you think you are losing your hypo awareness, speak to your diabetes team.",
        },
        {
          id: "higher",
          situation: "You want to run your levels higher to avoid hypos.",
          options: [{ text: "Agree a target with your team first", best: true }, { text: "Just start running higher" }],
          why: "Do not raise your levels without speaking to your team, who can advise what level to aim for and for how long.",
        },
        {
          id: "alarm",
          situation: "You have no monitor that can alarm.",
          options: [{ text: "Ask your team about a CGM", best: true }, { text: "Rely on how you feel" }],
          why: "You can set an alarm to sound if your levels are dropping too low, at any time of the day or night.",
        },
        {
          id: "drive",
          situation: "Your warning signs have gone, and you drive a car.",
          options: [{ text: "Stop driving and tell the DVLA", best: true }, { text: "Keep driving with a CGM alarm on" }],
          why: "Alarms on glucose monitors should support your own awareness of low blood glucose, not replace it. The DVLA's rule is not to drive, and to tell them.",
        },
      ],
    },
    sources: [DUK_UNAWARE, GOV_INF294, NHS_CGM, GOV_DVLA_MED, NHS_HYPO],
    quiz: {
      question: "What may help hypo awareness come back?",
      options: [{ text: "Avoiding hypos for a few weeks", right: true }, { text: "Keeping your sugar as low as possible" }, { text: "Checking your blood sugar less often" }],
      why: "If you can avoid hypos for a few weeks, your awareness may return.",
    },
  },
  {
    id: "hypogly-treating",
    kicker: "Treat",
    question: "How do I treat a hypo?",
    hook: "15 to 20g of fast-acting sugar, rest for 10 to 15 minutes, check again. Then something more filling.",
    short: "Treat a hypo straight away with 15 to 20g of a fast-acting carbohydrate, such as 5 glucose tablets, 4 jelly babies or a small glass of fruit juice or non-diet fizzy drink. Check your blood sugar again after 10 to 15 minutes, and treat again if it is still below 4mmol/L. Once it is back above 4mmol/L, eat something that will keep it up for longer.",
    sections: [
      {
        heading: "Act straight away",
        paragraphs: [
          "Stop what you are doing and treat the hypo immediately. If you have diabetes and get symptoms of a hypo, or your blood sugar is below 4mmol/L, eat or drink something that will raise your blood sugar quickly.",
          "Diabetes UK suggests 15 to 20g of a fast-acting carbohydrate. Children need less than this, and if you use an insulin pump your treatment may be different, so talk to your diabetes team.",
        ],
      },
      {
        heading: "What counts as fast-acting",
        paragraphs: [
          "Examples include five glucose or dextrose tablets, four jelly babies, a small glass of a sugary, non-diet drink of 150 to 200ml, a small carton of pure fruit juice of 200ml, or two tubes of glucose gel.",
          "These are just a guide, and your needs may vary. Check the food label often, as ingredients can change, and ask your diabetes team whether glucose gel or tablets are available on prescription.",
        ],
      },
      {
        heading: "Check again",
        paragraphs: [
          "Rest for 10 to 15 minutes, then check your blood sugar again. If it is still below 4mmol/L, have another sugary drink or snack, and check again after 10 minutes.",
          "Your blood sugar should return to normal after about 15 minutes, but this may vary. Continue to rest until you have recovered from your hypo.",
        ],
      },
      {
        heading: "Then something more filling",
        paragraphs: [
          "Once your symptoms have improved and your blood sugar is above 4mmol/L, eat something that will keep it up for longer. This could be a sandwich, a piece of toast, a piece of fruit, a small bowl of cereal, a glass of milk, or your next meal if it is due.",
          "Diabetes UK suggests 15 to 20g of a slower-acting carbohydrate. Some people on insulin pumps or hybrid closed loop pumps do not usually need it, so ask your diabetes team if you are unsure.",
        ],
      },
    ],
    helps: [
      "Treat a hypo quickly, before it gets worse.",
      "Have 15 to 20g of a fast-acting carbohydrate, such as glucose tablets, jelly babies or a sugary drink.",
      "Check your blood sugar after 10 to 15 minutes, and treat again if it is still below 4mmol/L.",
      "Follow it with a slower-acting carbohydrate, such as a sandwich or your next meal if it is due.",
      "If you are too drowsy or confused to eat or drink, ask someone for help or get medical assistance.",
      "If you change to a cheaper treatment, check it still contains 15 to 20g of fast-acting carbohydrate.",
    ],
    tryThisWeek: [
      "Treat a hypo straight away.",
      "Check again after 10 to 15 minutes.",
      "Follow up with a slower carb.",
    ],
    ask: "How much hypo treatment should I take, and do I need a slower carb afterwards?",
    interactive: {
      kind: "timeline",
      title: "A hypo, step by step",
      steps: [
        { id: "treat", when: "Straight away", title: "Stop and treat", points: ["Stop what you are doing.", "Have 15 to 20g of a fast-acting carbohydrate."] },
        { id: "check", when: "After 10 to 15 minutes", title: "Rest, then check", points: ["Rest, then check your blood sugar again.", "It should be back above 4mmol/L."] },
        { id: "again", when: "If still below 4mmol/L", title: "Treat again", points: ["Have another sugary drink or snack.", "Check again after 10 minutes."] },
        { id: "after", when: "Once above 4mmol/L", title: "Something more filling", points: ["A sandwich, toast, fruit, cereal or milk.", "Or your next meal, if it is due."] },
      ],
    },
    sources: [DUK_HYPOS, NHS_HYPO, DUK_COSTS, NHS_T1_LIVING],
    quiz: {
      question: "After treating a hypo, when should you check your blood sugar again?",
      options: [{ text: "After 10 to 15 minutes", right: true }, { text: "After 2 hours" }, { text: "The next morning" }],
      why: "Rest for 10 to 15 minutes, then check your blood sugar again.",
    },
  },
  {
    id: "hypogly-severe",
    kicker: "Emergency",
    question: "What happens in a severe hypo, and what is glucagon?",
    hook: "When someone cannot treat a hypo themselves, the people around them need three things: no food, the recovery position, then glucagon or 999.",
    short: "A severe hypo is one where you need help from someone else to treat it, because you become confused and drowsy, unconscious or have a fit. If someone is unconscious, do not give them food or drink. Put them in the recovery position, give a glucagon injection if one is available and you know how, and call 999 if there is no glucagon, they have not recovered within 10 minutes of it, or they have been drinking alcohol.",
    sections: [
      {
        heading: "What makes a hypo severe",
        paragraphs: [
          "If a hypo is not treated quickly, the symptoms could get worse. You could start feeling confused and drowsy, become unconscious or have a fit.",
          "This is called a severe hypo, and you would need help to treat it. The DVLA uses the same idea: a severe hypo is a drop in blood glucose that needs help from another person.",
        ],
      },
      {
        heading: "If someone is unconscious",
        paragraphs: [
          "Do not give them any food or drink, as they will not be able to swallow safely. Put them into the recovery position, on their side with the head tilted back and knees bent.",
          "Give them a glucagon injection straight away, if one is available and you know how to use it. Stay with them until they are fully recovered.",
        ],
      },
      {
        heading: "When to call 999",
        paragraphs: [
          "Call 999 if you think someone has very low blood sugar and they are not responding normally or they are unconscious, and a glucagon injection is not available or you do not know how to use it.",
          "Also call 999 if you have given a glucagon injection and they have not recovered within 10 minutes, or if they have been drinking alcohol.",
        ],
      },
      {
        heading: "After glucagon",
        paragraphs: [
          "If they start to recover within 10 minutes of the glucagon injection and can swallow safely, give them some food or drink that will raise their blood sugar.",
          "There is one type of glucagon injection available to treat severe hypos. It is a kit with glucagon powder and water, which need to be mixed before it is injected. A ready-mixed pen called Ogluo was discontinued in September 2025.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "See a GP if you have had a severe hypo, and you can also speak to your diabetes care team for advice. Recording your hypos can show trends or patterns that help your team find a better way to manage your blood sugar.",
          "All drivers need to tell the DVLA if they have a severe hypo while driving.",
        ],
      },
    ],
    helps: [
      "Make sure your family and friends know how to treat severe low blood sugar.",
      "Carry a glucagon injection kit and medical ID with you.",
      "Never give food or drink to someone who is unconscious from a hypo.",
      "Call 999 if there is no glucagon, it has not worked within 10 minutes, or the person has been drinking alcohol.",
      "See a GP if you have had a severe hypo.",
      "Record your hypos, so your healthcare team can look for trends or patterns.",
    ],
    tryThisWeek: [
      "Show family what to do.",
      "Carry glucagon and medical ID.",
      "Learn when to call 999.",
    ],
    ask: "Should I have glucagon at home, and who should learn how to use it?",
    interactive: {
      kind: "scenarios",
      title: "If someone collapses with a hypo",
      scenarios: [
        {
          id: "drink",
          situation: "Your partner with diabetes is unconscious.",
          options: [{ text: "Recovery position, no food or drink", best: true }, { text: "Try to give them some juice" }],
          why: "Do not give them any food or drink, as they will not be able to swallow safely.",
        },
        {
          id: "glucagon",
          situation: "There is a glucagon kit and you know how to use it.",
          options: [{ text: "Give it straight away", best: true }, { text: "Wait to see if they wake up" }],
          why: "Give them a glucagon injection straight away, if one is available and you know how to use it.",
        },
        {
          id: "none",
          situation: "There is no glucagon in the house.",
          options: [{ text: "Call 999", best: true }, { text: "Wait 10 minutes first" }],
          why: "Call 999 if they are unconscious and a glucagon injection is not available or you do not know how to use it.",
        },
        {
          id: "ten",
          situation: "10 minutes after glucagon, they have not come round.",
          options: [{ text: "Call 999", best: true }, { text: "Keep waiting" }],
          why: "Call 999 if you have given a glucagon injection and they have not recovered within 10 minutes.",
        },
        {
          id: "awake",
          situation: "They come round within 10 minutes and can swallow.",
          options: [{ text: "Give food or drink, and stay with them", best: true }, { text: "Leave them to sleep it off" }],
          why: "If they can swallow safely, give them some food or drink that will raise their blood sugar. Stay with them until they are fully recovered.",
        },
      ],
    },
    sources: [NHS_HYPO, DUK_HYPOS, GOV_INF294],
    quiz: {
      question: "What should you never give someone who is unconscious from a hypo?",
      options: [{ text: "Food or drink", right: true }, { text: "The recovery position" }, { text: "A call to 999" }],
      why: "Do not give them any food or drink, as they will not be able to swallow safely.",
    },
  },
  {
    id: "hypogly-night",
    kicker: "Night",
    question: "Can hypos happen at night?",
    hook: "They can, and you may sleep through the warning signs. A headache or tiredness the next morning can be the clue.",
    short: "Hypos can happen at night, and some people do not notice the symptoms and wake up straight away, so the hypo may be more severe. Feeling very tired or having a headache the next morning can be a sign. If you think you are having hypos at night, check your levels before bed and during the night, and talk to your team, as your insulin dose may need to change.",
    sections: [
      {
        heading: "Why night is different",
        paragraphs: [
          "Low blood sugar can happen at night. Some people do not always notice the symptoms and wake up straight away, so their blood sugar may drop further and the hypo may be more severe.",
          "Even if you are alone when you have a hypo and you become unconscious, your body will slowly respond by naturally increasing your blood sugar.",
        ],
      },
      {
        heading: "Clues the next morning",
        paragraphs: [
          "You may realise you have had a hypo in the night if you feel very tired or have a headache the next morning. Night sweats are another common symptom of a hypo.",
          "When you test your sugar levels, they may be higher than expected.",
        ],
      },
      {
        heading: "Checking and monitors",
        paragraphs: [
          "If you think you might be having hypos at night, check your sugar levels before you go to sleep and during the night. If the tests suggest you are, you may need to change your insulin dose.",
          "A continuous glucose monitor can help you and your diabetes team see what happens to your levels when you are asleep. Most types have optional alarms to alert you if your levels go too low.",
        ],
      },
      {
        heading: "Things that raise the risk overnight",
        paragraphs: [
          "Your risk of having a hypo does not go away after you stop drinking alcohol. It increases, and can last up to 24 hours.",
          "Your body can respond better to insulin for up to 24 hours after exercise, so you may need to keep checking your levels for that long.",
        ],
      },
      {
        heading: "Talking to your team",
        paragraphs: [
          "See a GP if you have had hypos at night, or speak to your diabetes care team. For type 1 diabetes, the team may recommend a longer-lasting insulin called insulin degludec if you get hypos at night.",
          "Frequent hypos during sleep should be discussed with your healthcare professional. For a car or motorcycle licence, they do not usually affect your application unless your awareness is impaired.",
        ],
      },
    ],
    helps: [
      "Keep hypo treatments by your bed, just in case.",
      "If you think you are having hypos at night, check your levels before you sleep and during the night.",
      "After drinking alcohol, always have breakfast and check your levels regularly the next day.",
      "Keep checking your levels for up to 24 hours after exercise.",
      "See a GP or your diabetes team if you have had hypos at night.",
    ],
    tryThisWeek: [
      "Keep hypo treatment by your bed.",
      "Check before you go to sleep.",
      "Have breakfast after a night out.",
    ],
    ask: "Could I be having hypos at night, and should my insulin or monitor change?",
    interactive: {
      kind: "timeline",
      title: "From bedtime to breakfast",
      steps: [
        { id: "bed", when: "Before bed", title: "Check and prepare", points: ["Check your sugar levels before you go to sleep.", "Keep hypo treatments by your bed."] },
        { id: "night", when: "During the night", title: "Check if you suspect lows", points: ["Check during the night if you think you are having hypos.", "A monitor alarm can alert you if levels go too low."] },
        { id: "morning", when: "On waking", title: "Look for the clues", points: ["Feeling very tired or a headache can be signs.", "A reading higher than expected can be another."] },
        { id: "team", when: "Afterwards", title: "Tell your team", points: ["You may need to change your insulin dose.", "See a GP if you have had hypos at night."] },
      ],
    },
    sources: [DUK_HYPOS, NHS_CGM, DUK_ALCOHOL, DUK_EXERCISE_SUGAR, NHS_HYPO, NHS_INSULIN_T1, GOV_INF294],
    quiz: {
      question: "Which can be a clue that you had a hypo in the night?",
      options: [{ text: "Waking very tired or with a headache", right: true }, { text: "Feeling thirsty at lunchtime" }, { text: "Sleeping longer at the weekend" }],
      why: "You may realise you have had a hypo in the night if you feel very tired or have a headache the next morning.",
    },
  },
  {
    id: "hypogly-medicines-review",
    kicker: "Treatment",
    question: "Should my insulin or tablets be reviewed if I keep having hypos?",
    hook: "Frequent hypos are a reason to talk to your team. The dose, the type of insulin or the technology can change.",
    short: "Hypos are common if you take insulin, and can happen with sulphonylureas such as gliclazide. If you get hypos often, have had a severe one or have them at night, see a GP or your diabetes team. They may change your dose or type of insulin, or suggest a monitor or, for type 1 diabetes, an insulin pump.",
    sections: [
      {
        heading: "Which medicines cause hypos",
        paragraphs: [
          "Low blood sugar is common if you take insulin. It can also happen with some other diabetes medicines, such as gliclazide and glimepiride.",
          "These are sulphonylureas, which work by helping your pancreas make more insulin. One of their most common side effects is low blood sugar.",
        ],
      },
      {
        heading: "When to ask for a review",
        paragraphs: [
          "See a GP if you have diabetes and get hypos often, have had severe hypos or have had hypos at night. You can also speak to your diabetes care team for advice.",
          "If you take gliclazide and get symptoms of a hypo often, see your GP. Do not stop taking it unless your doctor tells you to.",
        ],
      },
      {
        heading: "What might change",
        paragraphs: [
          "Your team may suggest checking your blood sugar more often, adjusting your medicine, or relaxing your blood sugar targets for a while. If tests suggest you are having hypos at night, you may need to change your insulin dose.",
          "For type 2 diabetes, a long-acting insulin may be recommended if you often get hypos. For type 1 diabetes, a longer-lasting insulin called insulin degludec may be recommended if you get hypos at night.",
        ],
      },
      {
        heading: "Technology that can help",
        paragraphs: [
          "An insulin pump gives you tiny amounts of insulin throughout the day and night, and can reduce hypos compared with injections. You may be able to get one on the NHS if you cannot reach your target HbA1c without serious problems with hypos.",
          "A hybrid closed loop system lets a continuous glucose monitor work with an insulin pump, and can reduce the risk of hypos. It is being introduced gradually on the NHS for some people with type 1 diabetes, over 5 years from April 2024.",
        ],
      },
      {
        heading: "Your part",
        paragraphs: [
          "Follow the treatment plan agreed with your diabetes care team, including adjusting your insulin dose when you need to. Recording your hypos can show trends or patterns that help your team.",
          "Tell your doctor about any other medicines, herbal remedies, vitamins or supplements you take. Some medicines, including other medicines for high blood sugar, may not mix well with gliclazide.",
        ],
      },
    ],
    helps: [
      "Check with your diabetes team whether your treatment is likely to cause hypos.",
      "See a GP or your diabetes team if you get hypos often, have had a severe one, or have them at night.",
      "Record your hypos, to see if there are any trends or patterns.",
      "Do not stop taking gliclazide unless your doctor tells you to.",
      "Ask your care team about a continuous glucose monitor or flash monitor, if you do not already have one.",
      "If you have type 1 diabetes and often have problems with low blood sugar, ask about switching to an insulin pump.",
    ],
    tryThisWeek: [
      "Ask if your medicine can cause hypos.",
      "Bring your hypo record to clinic.",
      "Ask about a monitor or pump.",
    ],
    ask: "Why am I having hypos, and should my medicines change?",
    interactive: {
      kind: "flip-cards",
      title: "Medicines and kit, card by card",
      intro: "Turn each card to see how it relates to hypos.",
      cards: [
        { id: "insulin", front: "Insulin", when: "Type 1, and some type 2", back: "Too much insulin causes hypos. You will be taught how to recognise the symptoms and how to treat a hypo." },
        { id: "sulph", front: "Sulphonylureas", when: "Such as gliclazide", back: "Help your pancreas make more insulin. Low blood sugar is one of their most common side effects." },
        { id: "long", front: "Long-acting insulin", when: "If hypos are frequent", back: "May be recommended for type 2 diabetes if you often get hypos. Degludec may be advised for night hypos in type 1." },
        { id: "pump", front: "Insulin pump", when: "Type 1 diabetes, on the NHS", back: "Gives tiny amounts of insulin day and night, and can reduce hypos compared with injections." },
        { id: "cgm", front: "Continuous glucose monitor", when: "Readings at any time", back: "Shows patterns so you can act quickly. Most types have optional alarms for low levels." },
        { id: "loop", front: "Hybrid closed loop", when: "A pump and a monitor together", back: "Works out and gives the insulin you need automatically, and can reduce the risk of hypos." },
      ],
    },
    sources: [NHS_HYPO, DUK_SULPH, NHS_GLICLAZIDE, DUK_UNAWARE, DUK_HYPOS, NHS_INSULIN_T2, NHS_INSULIN_T1, NHS_T1_TREATMENT, NHS_CGM],
    quiz: {
      question: "Which kind of tablet lists low blood sugar as a common side effect?",
      options: [{ text: "Sulphonylureas, such as gliclazide", right: true }, { text: "Glucose tablets" }, { text: "None: only insulin can cause hypos" }],
      why: "One of the most common side effects of sulphonylureas is low blood sugar.",
    },
  },
  {
    id: "hypogly-driving",
    kicker: "Driving",
    question: "What are the driving rules if I can have hypos?",
    hook: "Check before you set off and at least every 2 hours. Do not drive at 4mmol/L or below. If a hypo comes on, stop, keys out, wait 45 minutes.",
    short: "The DVLA says low blood glucose is the greatest risk to safe driving. If you take insulin, check your glucose just before driving and at least every 2 hours on the journey, and do not drive if it is 4mmol/L or below. If a hypo starts, stop safely and wait at least 45 minutes after your level is back to 5mmol/L or above. You need to tell the DVLA in some situations, such as a severe hypo while driving.",
    sections: [
      {
        heading: "Why hypos matter at the wheel",
        paragraphs: [
          "Low blood glucose is the greatest risk to safe driving. When it falls below 4mmol/L, your reaction time slows, your judgement is affected, and driving may become erratic.",
          "Even if you have never had a low reading, the risk increases the longer you have been on insulin. Never ignore warning signs while driving: stop safely as soon as possible.",
        ],
      },
      {
        heading: "Checking before and during a journey",
        paragraphs: [
          "If you take insulin, check your glucose just before you start driving, and at least every 2 hours during your journey. No more than 2 hours should pass between checks at any time.",
          "Car and lorry drivers can now use a continuous glucose monitor that is approved for making treatment decisions. Keep a finger-prick meter as a backup, and pull over safely before testing or checking your device.",
        ],
      },
      {
        heading: "The numbers to know",
        paragraphs: [
          "Do not drive if your glucose is 4mmol/L or below. If it is between 4mmol/L and 5mmol/L, eat a fast-acting carbohydrate snack, such as glucose tablets, sweets or a sugary drink.",
          "If your glucose goes low while driving, stop the vehicle safely as soon as possible, switch off the engine and remove the keys. Wait at least 45 minutes after your glucose is back to 5mmol/L or above, to let your brain function and reaction time fully recover.",
        ],
      },
      {
        heading: "When to tell the DVLA",
        paragraphs: [
          "On a car or motorbike licence, you need to tell the DVLA if your insulin treatment lasts, or will last, over 3 months. You also need to tell them if you get disabling hypoglycaemia, or a medical professional has told you that you are at risk of it.",
          "All drivers need to tell the DVLA about a severe hypo while driving. Car and motorcycle drivers also need to tell them about 2 or more severe hypos while awake within 12 months, or if they develop difficulty recognising the signs of low blood glucose.",
        ],
      },
      {
        heading: "Tablets, and larger vehicles",
        paragraphs: [
          "If your diabetes is treated by tablets or non-insulin injections, check with your doctor or nurse whether your treatment means you need to tell the DVLA. You can be fined up to £1,000 if you do not tell the DVLA about a medical condition that affects your driving.",
          "There are separate rules for bus, coach and lorry licences. If you start insulin treatment, the government's guidance is to stop driving these vehicles and tell the DVLA, who will tell you when you can start driving again.",
        ],
      },
    ],
    helps: [
      "Check your glucose just before driving, and at least every 2 hours on the journey.",
      "Do not drive if your glucose is 4mmol/L or below, and eat a fast-acting snack if it is between 4 and 5mmol/L.",
      "Carry your monitor, spare test strips and identification that shows you have diabetes.",
      "Eat regular meals or snacks, and take breaks on long journeys.",
      "If a hypo starts, stop safely, take the keys out, and wait at least 45 minutes after you are back to 5mmol/L or above.",
      "Check with your nurse or doctor if you do not know what type of medicine you are on, or whether to tell the DVLA.",
    ],
    tryThisWeek: [
      "Check your glucose before every drive.",
      "Carry your monitor and ID.",
      "Take breaks on long journeys.",
    ],
    ask: "What do I need to check before driving, and do I need to tell the DVLA?",
    interactive: {
      kind: "scenarios",
      title: "Before and behind the wheel",
      scenarios: [
        {
          id: "four",
          situation: "Your reading is 4mmol/L before a drive.",
          options: [{ text: "Do not drive: treat it first", best: true }, { text: "Drive slowly instead" }],
          why: "Do not drive if your glucose is 4mmol/L or below.",
        },
        {
          id: "between",
          situation: "Your reading is between 4 and 5mmol/L.",
          options: [{ text: "Eat a fast-acting snack first", best: true }, { text: "Set off straight away" }],
          why: "If it is between 4mmol/L and 5mmol/L, eat a fast-acting carbohydrate snack, such as glucose tablets, sweets or a sugary drink.",
        },
        {
          id: "shaky",
          situation: "You start to feel shaky on the motorway.",
          options: [{ text: "Stop safely as soon as possible", best: true }, { text: "Drive on to the next town" }],
          why: "Never ignore warning signs while driving: stop safely as soon as possible.",
        },
        {
          id: "wait",
          situation: "You treated a hypo and are back above 5mmol/L.",
          options: [{ text: "Wait at least 45 minutes", best: true }, { text: "Drive off now" }],
          why: "Wait at least 45 minutes after your glucose is back to 5mmol/L or above, to let your brain function and reaction time fully recover.",
        },
        {
          id: "long",
          situation: "You are 2 hours into a long journey.",
          options: [{ text: "Pull over safely and check", best: true }, { text: "Check when you arrive" }],
          why: "Check at least every 2 hours during your journey, and pull over safely before testing.",
        },
      ],
    },
    sources: [GOV_INF294, GOV_DRIVING, GOV_DVLA_MED, NHS_HYPO],
    quiz: {
      question: "After a hypo, when can you drive again?",
      options: [{ text: "45 minutes after you are back to 5mmol/L or above", right: true }, { text: "As soon as you feel better" }, { text: "After 10 minutes" }],
      why: "Wait at least 45 minutes after your glucose is back to 5mmol/L or above, to let your brain function and reaction time fully recover.",
    },
  },
  {
    id: "hypogly-exercise-alcohol",
    kicker: "Everyday life",
    question: "How do exercise and alcohol affect hypos?",
    hook: "Both can push blood sugar down, sometimes for up to a day afterwards. Planning ahead keeps them safe.",
    short: "Steady exercise such as walking, cycling or swimming tends to lower blood sugar, and a lot of exercise without extra carbohydrate or less insulin can bring on a hypo. Alcohol makes hypos more likely too, because it stops the liver releasing its stored glucose properly. With both, the effect can last up to 24 hours, so keep checking your levels.",
    sections: [
      {
        heading: "How exercise affects blood sugar",
        paragraphs: [
          "Anything you do at a comfortable pace, such as walking, jogging, yoga, cycling or swimming, tends to lower blood sugar. Short, sharp bursts, such as sprinting or squash, tend to raise it.",
          "Being more active can increase how well your body uses insulin. If you use insulin, you may need to adjust your dose before, during or after exercise, so speak to your healthcare team.",
        ],
      },
      {
        heading: "Before you start",
        paragraphs: [
          "Do not exercise if your blood sugar is 4mmol/L or lower. Have your usual hypo treatment, followed by some starchy carbs, then wait 15 minutes and check your blood sugar again.",
          "If you are between 4 and 7mmol/L, you may need a snack with starchy carbs before you start. If you have had a severe hypo in the last 24 hours, do not do any physical activity.",
        ],
      },
      {
        heading: "During and after",
        paragraphs: [
          "If you are at risk of hypos, keep hypo treatments handy, as well as a snack with some carbs in, and wear your diabetes ID. Check your blood glucose before, during and after exercise.",
          "Your body can respond better to insulin for up to 24 hours after activity, so you may need to keep checking your levels for that long.",
        ],
      },
      {
        heading: "Alcohol and hypos",
        paragraphs: [
          "If you use insulin or sulphonylureas, drinking alcohol adds to your risk of a hypo. Usually the liver releases stored glucose when blood sugar drops, but alcohol stands in the way of this.",
          "If you drink a lot or on an empty stomach, you are even more likely to have a hypo. Your risk does not go away after you stop drinking: it increases, and can last up to 24 hours.",
        ],
      },
      {
        heading: "Drinking more safely",
        paragraphs: [
          "The NHS advises no more than 14 units of alcohol a week, spread over 3 days or more, and not drinking alcohol without eating. A hypo can be mistaken for being drunk, so carry hypo treatments and wear some medical ID.",
          "Make sure whoever you are with knows you have diabetes and how to help with a hypo. Always have breakfast the next morning, and check your levels regularly the next day.",
        ],
      },
    ],
    helps: [
      "Check your blood glucose before, during and after exercise.",
      "Do not start exercise if your blood sugar is 4mmol/L or lower: treat it first.",
      "Keep hypo treatments and a snack with carbs in handy when you are active, and wear your diabetes ID.",
      "Talk to your healthcare team before adjusting your insulin for exercise or alcohol.",
      "Keep to no more than 14 units a week, spread over 3 days or more, and do not drink alcohol without eating.",
      "After drinking, always have breakfast and check your levels regularly the next day.",
    ],
    tryThisWeek: [
      "Check before and after exercise.",
      "Carry a snack and hypo treatment.",
      "Eat when you drink.",
    ],
    ask: "How should I change my insulin or food around exercise and alcohol?",
    interactive: {
      kind: "scenarios",
      title: "Active days and nights out",
      scenarios: [
        {
          id: "swim",
          situation: "Your reading is 4mmol/L before a swim.",
          options: [{ text: "Treat it, wait 15 minutes, check again", best: true }, { text: "Swim anyway" }],
          why: "Do not exercise if your blood sugar is 4mmol/L or lower.",
        },
        {
          id: "severe",
          situation: "You had a severe hypo yesterday.",
          options: [{ text: "No physical activity today", best: true }, { text: "Go for your usual run" }],
          why: "If you have had a severe hypo in the last 24 hours, do not do any physical activity.",
        },
        {
          id: "walk",
          situation: "You feel fine after a long walk.",
          options: [{ text: "Keep checking for up to 24 hours", best: true }, { text: "Stop checking for today" }],
          why: "Your body can respond better to insulin for up to 24 hours after activity.",
        },
        {
          id: "empty",
          situation: "Drinks after work, and no food yet.",
          options: [{ text: "Eat something as well", best: true }, { text: "Drink now, eat later" }],
          why: "If you drink a lot or on an empty stomach, you are even more likely to have a hypo.",
        },
        {
          id: "hangover",
          situation: "You wake up with what feels like a hangover.",
          options: [{ text: "Check your blood sugar", best: true }, { text: "Sleep it off" }],
          why: "The symptoms of a hypo are similar to feelings of a hangover, so check your levels, and treat a hypo straight away.",
        },
      ],
    },
    sources: [DUK_EXERCISE_SUGAR, DUK_ALCOHOL, NHS_HYPO, NHS_T1_LIVING],
    quiz: {
      question: "How long can the raised risk of a hypo last after drinking alcohol?",
      options: [{ text: "Up to 24 hours", right: true }, { text: "About 10 minutes" }, { text: "It ends when you stop drinking" }],
      why: "Your risk does not go away after you stop drinking: it increases, and can last up to 24 hours.",
    },
  },
  {
    id: "hypogly-telling-others",
    kicker: "Support",
    question: "What should the people around me know?",
    hook: "A severe hypo means needing someone's help. A few minutes showing family, friends and colleagues what to do makes that help possible.",
    short: "If your medicine can cause hypos, make sure your family and friends know how to recognise a hypo and how to treat severe low blood sugar. At work, it can help to tell colleagues the signs, where your hypo treatments are and when to call for help. It is your decision who to tell, but if people do not know, they may not be able to give you the support you need.",
    sections: [
      {
        heading: "Family and friends",
        paragraphs: [
          "Make sure your family and friends know how to recognise a hypo and what to do, including how to treat severe low blood sugar.",
          "If you have a severe hypo and become unconscious, they should not try to give you food or drink. They need to put you in the recovery position, give you glucagon if there is some and someone knows how to use it, and call an ambulance if there is no glucagon or you have not recovered 10 minutes after it.",
        ],
      },
      {
        heading: "When you are out",
        paragraphs: [
          "It is not uncommon for some people to mistake a hypo for being drunk. When you are drinking, make sure whoever you are with knows you have diabetes, and knows how to help with a hypo.",
          "Carry medical ID, such as a bracelet or a card that lets people know you have diabetes. Wearing your diabetes ID means people around you can help if they need to.",
        ],
      },
      {
        heading: "At work",
        paragraphs: [
          "If you are at risk of hypos, tell your colleagues how to spot the symptoms and how to treat a hypo. Talk to your first aider so that they know what to do in an emergency.",
          "A workplace diabetes checklist could include how to recognise the signs of a hypo, where hypo treatments are stored, when to call for emergency help, and your emergency contact details.",
        ],
      },
      {
        heading: "Your rights and choices",
        paragraphs: [
          "It is your decision whether or not to tell your employer that you have diabetes. But if they do not know about it, they may not be able to give you the support you need.",
          "A reasonable adjustment at work might include flexibility to test your blood sugar or treat a low blood sugar when you need to. Access to Work, a government programme, can help you get or stay in work if you have a health condition.",
        ],
      },
      {
        heading: "If hypos worry you",
        paragraphs: [
          "Worrying about your diabetes and having hypos is completely normal. One study found that 25% of people with diabetes said worrying about hypos was a serious problem for them.",
          "It can help to make a plan for a hypo, such as in a work meeting: quietly excusing yourself to treat it, or taking a sugary drink out of your bag. If you are struggling with hypo anxiety, talking to a member of your diabetes team will really help.",
        ],
      },
    ],
    helps: [
      "Make sure your family and friends know how to recognise a hypo and what to do.",
      "Make sure they know how to treat severe low blood sugar, and when to call 999.",
      "Carry medical ID, such as a bracelet or a card.",
      "Tell colleagues how to spot and treat a hypo, and talk to your first aider.",
      "Keep hypo treatment at work, and ask if there is a space to keep it.",
      "If hypos worry you, talk to a member of your diabetes team.",
    ],
    tryThisWeek: [
      "Show one person what to do.",
      "Wear or carry medical ID.",
      "Talk to your first aider at work.",
    ],
    ask: "Who should learn to use my glucagon, and what should my hypo plan say?",
    interactive: {
      kind: "signs",
      title: "Your hypo plan for others",
      intro: "Tick what you want the people around you to know. The ticked items become a list you can share.",
      signs: ["How to recognise the signs of a hypo", "How to treat a hypo", "Where my hypo treatments are kept", "No food or drink if I am unconscious", "How to put me in the recovery position", "How to use my glucagon, if I have it", "When to call 999", "My emergency contact details"],
      after: "Share this with family, friends and your first aider at work. If you are unconscious and there is no glucagon, or it has not worked within 10 minutes, they should call 999.",
      copyHeading: "My hypo plan",
    },
    sources: [NHS_T1_LIVING, NHS_HYPO, DUK_HYPOS, DUK_ALCOHOL, DUK_EXERCISE_SUGAR, DUK_WORK, GOV_ATW, DUK_ANXIETY],
    quiz: {
      question: "If you become unconscious from a hypo, what should people not do?",
      options: [{ text: "Try to give you food or drink", right: true }, { text: "Put you in the recovery position" }, { text: "Call an ambulance" }],
      why: "If you have a severe hypo and become unconscious, they should not try to give you food or drink.",
    },
  },
  {
    id: "hypogly-kit",
    kicker: "Be prepared",
    question: "What should be in a hypo kit?",
    hook: "Fast-acting sugar, something slower to follow, your meter and your ID. Glucagon too, if you have it.",
    short: "A hypo can happen quickly, so always carry something that will raise your blood sugar quickly, such as sugary drinks, sweets or glucose tablets. The NHS also suggests carrying a glucagon injection kit and medical ID. The price of a hypo treatment does not affect how well it works, as long as it contains 15 to 20g of fast-acting carbohydrate.",
    sections: [
      {
        heading: "Fast-acting sugar",
        paragraphs: [
          "Always carry something with you that will raise your blood sugar quickly, such as sugary drinks, sweets or glucose tablets. A hypo can happen quickly, so it is important to always have hypo treatments with you.",
          "One treatment could be five glucose or dextrose tablets, four jelly babies, a small glass of a sugary, non-diet drink, a small carton of pure fruit juice, or two tubes of glucose gel. Which you choose is up to you, and might depend on your taste or how easy it is to store or carry around.",
        ],
      },
      {
        heading: "Something slower, and your checks",
        paragraphs: [
          "If you are at risk of hypos, Diabetes UK suggests keeping a snack with some carbs in it handy when you are active, such as a sandwich, a piece of fruit or a cereal bar. After a hypo, something to eat can stop your blood sugar from dropping again.",
          "If you drive, the DVLA asks you to carry your monitor at all times. If you use a continuous glucose monitor, it also advises keeping a finger-prick monitor as a backup, with spare test strips, lancets and batteries.",
        ],
      },
      {
        heading: "Glucagon and ID",
        paragraphs: [
          "The NHS suggests carrying a glucagon injection kit and medical ID with you. Medical ID, such as a bracelet or a card, lets people know you have diabetes.",
          "Glucagon is given by someone else if you have a severe hypo and become unconscious, as long as there is some and they know how to use it.",
        ],
      },
      {
        heading: "Cost and prescriptions",
        paragraphs: [
          "You might be able to get things like glucose gel, glucose tablets and dextrose tablets on prescription. Talk to your diabetes team about this.",
          "The price of a hypo treatment does not affect how well it works, as long as it contains 15 to 20g of fast-acting carbohydrate. Check the food label, as manufacturers change their products from time to time.",
        ],
      },
      {
        heading: "Where to keep it",
        paragraphs: [
          "Keep hypo treatments by your bed in case of a hypo at night, and make sure you have hypo treatment at work.",
          "When you travel, carry hypo treatments, diabetes medicine and other diabetes supplies in your hand luggage, with extra snacks in case of delays.",
        ],
      },
    ],
    helps: [
      "Always carry something that will raise your blood sugar quickly.",
      "Carry a glucagon injection kit and medical ID with you.",
      "Keep hypo treatments by your bed and at work.",
      "Ask your diabetes team whether you can get glucose gel or tablets on prescription.",
      "If you switch to a cheaper treatment, check it contains 15 to 20g of fast-acting carbohydrate.",
      "When travelling, keep hypo treatments in your hand luggage.",
    ],
    tryThisWeek: [
      "Pack a hypo treatment today.",
      "Put one by your bed.",
      "Ask about prescriptions.",
    ],
    ask: "Can I get my hypo treatments or glucagon on prescription?",
    interactive: {
      kind: "flip-cards",
      title: "What goes in the kit",
      intro: "Turn each card to see what it is for.",
      cards: [
        { id: "tablets", front: "Glucose or dextrose tablets", when: "Fast-acting", back: "Five tablets is one treatment. You may be able to get them on prescription." },
        { id: "jelly", front: "Jelly babies", when: "Fast-acting", back: "Four jelly babies is one treatment." },
        { id: "drink", front: "Sugary drink or juice", when: "Fast-acting", back: "A small glass of a non-diet drink, 150 to 200ml, or a small 200ml carton of pure fruit juice." },
        { id: "gel", front: "Glucose gel", when: "Fast-acting", back: "Two tubes is one treatment. Ask your team about getting it on prescription." },
        { id: "snack", front: "A slower carb", when: "To follow", back: "A sandwich, a piece of fruit or a cereal bar can stop your blood sugar dropping again." },
        { id: "glucagon", front: "Glucagon kit", when: "For a severe hypo", back: "Given by someone who knows how to use it, if you become unconscious." },
        { id: "id", front: "Medical ID", when: "Always", back: "A bracelet or card that lets people know you have diabetes." },
      ],
    },
    sources: [NHS_HYPO, DUK_HYPOS, DUK_EXERCISE_SUGAR, GOV_INF294, NHS_T1_LIVING, DUK_COSTS, DUK_WORK, DUK_TRAVEL],
    quiz: {
      question: "What makes a hypo treatment effective?",
      options: [{ text: "It contains 15 to 20g of fast-acting carbohydrate", right: true }, { text: "It is the most expensive brand" }, { text: "It is a diet drink" }],
      why: "The price of a hypo treatment does not affect how well it works, as long as it contains 15 to 20g of fast-acting carbohydrate.",
    },
  },
];
