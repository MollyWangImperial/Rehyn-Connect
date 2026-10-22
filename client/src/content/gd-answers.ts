import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Gestational diabetes page's pieces (content/library-conditions/metabolism-more.ts).
// Every sentence was written from wording checked on 21 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS gestational diabetes,
// pregnancy and medicine pages, Diabetes UK's gestational diabetes guide and NHS England's prevention programme
// page. General information only; it never replaces what a person's own maternity and diabetes team tells them.

const duk = (label: string, path: string): LearnSource => ({ label: `Diabetes UK: ${label}`, url: `https://www.diabetes.org.uk/${path}` });
const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });

const NHS_GD = nhs("Gestational diabetes", "conditions/gestational-diabetes/");
const NHS_GD_TREAT = nhs("Gestational diabetes: treatment", "conditions/gestational-diabetes/treatment/");
const NHS_METFORMIN = nhs("Metformin", "medicines/metformin/");
const NHS_HYPO = nhs("Low blood sugar (hypoglycaemia)", "conditions/low-blood-sugar-hypoglycaemia/");
const NHS_EXERCISE_PREG = nhs("Exercise in pregnancy", "pregnancy/keeping-well/exercise/");
const NHS_MOVEMENTS = nhs("Your baby's movements", "pregnancy/keeping-well/your-babys-movements/");
const NHS_INDUCTION = nhs("Inducing labour", "pregnancy/labour-and-birth/inducing-labour/");
const NHS_POSTNATAL_CHECK = nhs("Your 6-week postnatal check", "baby/support-and-services/your-6-week-postnatal-check/");
const NHS_MENTAL_PREG = nhs("Mental health in pregnancy", "pregnancy/mental-health-in-pregnancy-and-after-the-birth/mental-health/");
const NHS_PND = nhs("Postnatal depression", "mental-health/conditions/postnatal-depression/");
const NHS_URGENT_MH = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHSE_PREVENTION: LearnSource = { label: "NHS England: Healthier You NHS Diabetes Prevention Programme", url: "https://www.england.nhs.uk/diabetes/diabetes-prevention/" };

const DUK_GD = duk("Gestational diabetes", "about-diabetes/gestational-diabetes");
const DUK_CAUSES = duk("Gestational diabetes causes", "about-diabetes/gestational-diabetes/causes");
const DUK_SYMPTOMS = duk("Gestational diabetes symptoms", "about-diabetes/gestational-diabetes/symptoms");
const DUK_TEST = duk("Gestational diabetes tests", "about-diabetes/gestational-diabetes/test");
const DUK_CARE = duk("Gestational diabetes care", "about-diabetes/gestational-diabetes/care");
const DUK_COMPLICATIONS = duk("Complications of gestational diabetes", "about-diabetes/gestational-diabetes/complications");
const DUK_REDUCE = duk("How to reduce your risk of gestational diabetes", "about-diabetes/gestational-diabetes/reduce-your-risk");
const DUK_TREATMENTS = duk("Treatments for gestational diabetes", "about-diabetes/gestational-diabetes/treatments");
const DUK_EAT = duk("What can I eat with gestational diabetes?", "living-with-diabetes/eating/gestational-diabetes");
const DUK_TESTING = duk("How to check your blood sugar levels", "about-diabetes/looking-after-diabetes/blood-sugar-levels");
const DUK_PREVENT_T2 = duk("Preventing type 2 diabetes after gestational diabetes", "about-diabetes/type-2-diabetes/prevention/preventing-type-2-after-gestational-diabetes");

export const gdAnswers: LearnArticle[] = [
  {
    id: "gd-what-it-is",
    kicker: "Understanding",
    question: "What is gestational diabetes?",
    hook: "Pregnancy hormones make insulin harder to use. When the body cannot make enough extra, blood sugar rises.",
    short: "Gestational diabetes is high blood sugar that develops during pregnancy and usually disappears after giving birth. It happens when your body cannot produce enough insulin to meet your extra needs in pregnancy. It is not your fault, and the risks can be reduced if it is found early and well managed.",
    sections: [
      {
        heading: "High blood sugar in pregnancy",
        paragraphs: [
          "Gestational diabetes is high blood sugar, or glucose, that develops during pregnancy and usually disappears after giving birth. It affects women who do not already have another type of diabetes.",
          "It can happen at any stage of pregnancy, but is more common in the second or third trimester.",
        ],
      },
      {
        heading: "Why pregnancy raises blood sugar",
        paragraphs: [
          "Lots of changes happen to your body during pregnancy. The hormones you produce can make it hard for your body to use insulin properly, the hormone that helps control blood sugar levels.",
          "This puts you at an increased risk of insulin resistance, when your body's cells do not respond properly to the insulin your body makes. Some women cannot produce enough insulin to overcome it, so glucose stays in the blood and blood sugar levels rise.",
        ],
      },
      {
        heading: "Not caused by eating sugar",
        paragraphs: [
          "Gestational diabetes is not directly caused by eating too much sugar, and there is no known link between particular foods and a higher risk.",
          "If you are diagnosed, it is important to remember it is not your fault. There is a lot happening in the body during pregnancy.",
        ],
      },
      {
        heading: "Often no symptoms",
        paragraphs: [
          "Gestational diabetes does not usually cause any symptoms. Most cases are only found when blood sugar is tested during screening.",
          "If blood sugar gets too high, some women notice more thirst, needing to pee more often, a dry mouth, tiredness, blurred eyesight, or genital itching or thrush. Some of these are common in pregnancy anyway, so speak to your midwife or doctor if you are worried.",
        ],
      },
      {
        heading: "Usually gone after the birth",
        paragraphs: [
          "Gestational diabetes normally goes away after birth. But women who have had it are more likely to develop type 2 diabetes in the future, so you should have a blood test after the birth.",
          "Most women with gestational diabetes have otherwise normal pregnancies with healthy babies.",
        ],
      },
    ],
    helps: [
      "Speak to your midwife or doctor if you are worried about any symptoms.",
      "If you notice symptoms, talk to your midwife or GP, as it is important that gestational diabetes is picked up as early as possible.",
      "If a test shows you do not have it but symptoms develop later, tell your healthcare professional, as it can develop at any time.",
      "Remember it is not your fault, and ask for support if you feel shocked or guilty.",
      "Call the Diabetes UK helpline on 0345 123 2399 with any questions or worries.",
    ],
    tryThisWeek: [
      "Mention any symptoms to your midwife.",
      "Report new symptoms after a clear test.",
      "Ask for support if you feel guilty.",
    ],
    ask: "What do my results show, and what happens next in my care?",
    interactive: {
      kind: "timeline",
      title: "How it happens",
      steps: [
        { id: "hormones", when: "During pregnancy", title: "Hormones change", points: ["The hormones you produce can make it hard to use insulin properly."] },
        { id: "resistance", when: "Often second or third trimester", title: "Insulin resistance", points: ["Cells do not respond properly to insulin.", "Some women cannot make enough insulin to overcome it."] },
        { id: "rise", when: "Then", title: "Blood sugar rises", points: ["Glucose stays in the blood instead of being used for energy.", "It often has no symptoms, so most cases are found at screening."] },
        { id: "after", when: "After the birth", title: "It usually goes away", points: ["Blood sugar usually returns to normal.", "Type 2 diabetes is more likely later, so a blood test follows."] },
      ],
    },
    sources: [NHS_GD, DUK_GD, DUK_CAUSES, DUK_SYMPTOMS, DUK_TEST, DUK_COMPLICATIONS],
    quiz: {
      question: "Is gestational diabetes caused by eating too much sugar?",
      options: [{ text: "No, pregnancy hormones make insulin harder to use", right: true }, { text: "Yes, it is caused by sugar" }, { text: "Only by eating fruit" }],
      why: "Gestational diabetes is not directly caused by eating too much sugar, and there is no known link between particular foods and a higher risk.",
    },
  },
  {
    id: "gd-risk",
    kicker: "Risk",
    question: "Who is more likely to get gestational diabetes?",
    hook: "Any woman can develop it in pregnancy. Some things raise the chance, and they decide who is offered the test.",
    short: "Any woman can develop gestational diabetes during pregnancy, but some things raise the risk, such as having had it before, a parent or sibling with diabetes, or a South Asian, Black, African-Caribbean or Middle Eastern background. If any apply, you should be offered screening. Some women of a healthy weight develop it too, and it is not always possible to prevent.",
    sections: [
      {
        heading: "Anyone can develop it",
        paragraphs: [
          "Any woman can develop gestational diabetes during pregnancy. The condition is estimated to affect one in eight women during pregnancy, and it is becoming more common.",
        ],
      },
      {
        heading: "What raises the risk",
        paragraphs: [
          "You are at an increased risk if you are over 40, if your body mass index is above 30, or if you previously had a baby who weighed 10lb or more at birth.",
          "The risk is also higher if you had gestational diabetes in a previous pregnancy, if one of your parents or siblings has diabetes, or if you have had a gastric bypass or other weight-loss surgery.",
          "Being of South Asian, Black, African-Caribbean or Middle Eastern origin raises the risk, even if you were born in the UK.",
        ],
      },
      {
        heading: "Why the risk factors matter",
        paragraphs: [
          "If any of these apply to you, you should be offered screening for gestational diabetes during your pregnancy. At your first antenatal appointment, at around week 8 to 12, your midwife or doctor will ask some questions to find out whether you are at an increased risk.",
        ],
      },
      {
        heading: "Weight, without blame",
        paragraphs: [
          "Your risk is increased if you are living with overweight or obesity, just as with type 2 diabetes. But some women who are already a healthy weight develop gestational diabetes too.",
          "You should not try to lose weight while you are pregnant. If you are underweight, it is not safe to lose weight and it will not help prevent gestational diabetes.",
        ],
      },
      {
        heading: "Can it be prevented?",
        paragraphs: [
          "It is not always possible to prevent gestational diabetes. The best way to reduce your risk is to try to be as healthy as possible before you get pregnant, with support to eat healthily and keep active.",
          "Regular exercise has many benefits, and Diabetes UK suggests keeping active for at least 150 minutes a week.",
        ],
      },
    ],
    helps: [
      "If you have had gestational diabetes before, tell your healthcare team in any future pregnancy.",
      "If any risk factors apply to you, you should be offered screening during your pregnancy.",
      "Before pregnancy, get support to manage your weight, eat healthily and keep active.",
      "Swap fizzy and sugary drinks for water, and drink a glass with meals.",
      "If you are underweight, speak to your GP.",
    ],
    tryThisWeek: [
      "Tell your team about past gestational diabetes.",
      "Swap one sugary drink for water.",
      "Keep active, at least 150 minutes a week.",
    ],
    ask: "Do any of my risk factors mean I should be tested, and when?",
    interactive: {
      kind: "risk-check",
      title: "What raises the risk?",
      intro: "Tick any that apply. If any do, you should be offered screening.",
      items: [
        { id: "age", label: "Being over 40", note: "Your risk is increased if you are over 40.", changeable: false },
        { id: "bmi", label: "A BMI above 30", note: "Support before pregnancy can help. Diabetes UK says not to try to lose weight while you are pregnant.", changeable: true },
        { id: "before", label: "Gestational diabetes before", note: "You will be offered testing earlier in pregnancy.", changeable: false },
        { id: "baby", label: "A previous baby of 10lb or more", note: "A very large baby in a previous pregnancy raises the risk.", changeable: false },
        { id: "family", label: "A parent or sibling with diabetes", note: "A family history means at least one parent or sibling.", changeable: false },
        { id: "background", label: "South Asian, Black, Middle Eastern", note: "Also African-Caribbean origin, even if you were born in the UK.", changeable: false },
        { id: "surgery", label: "Weight-loss surgery", note: "A gastric bypass or other weight-loss surgery raises the risk.", changeable: false },
      ],
    },
    sources: [NHS_GD, DUK_CAUSES, DUK_REDUCE, DUK_CARE],
    quiz: {
      question: "If a risk factor applies to you, what should happen?",
      options: [{ text: "You should be offered screening", right: true }, { text: "You will definitely get it" }, { text: "Nothing until symptoms appear" }],
      why: "If any of these apply to you, you should be offered screening for gestational diabetes during your pregnancy.",
    },
  },
  {
    id: "gd-tests",
    kicker: "Testing",
    question: "What happens at the glucose test in pregnancy?",
    hook: "A fasting blood test, a sugary drink, two hours of rest, then a second blood test.",
    short: "The test for gestational diabetes is the oral glucose tolerance test, or OGTT. You have a blood test after 8 to 10 hours without food, then a glucose drink, and another blood test two hours later. It is usually done between 24 and 28 weeks, or earlier if you have had gestational diabetes before.",
    sections: [
      {
        heading: "Who is offered it",
        paragraphs: [
          "At your first antenatal appointment, at around week 8 to 12, your midwife or doctor will ask questions to find out whether you are at an increased risk. If you have one or more risk factors, you should be offered a screening test.",
          "The test is usually done when you are between 24 and 28 weeks pregnant. If you have had gestational diabetes before, you will be offered a test soon after your booking appointment, then another at 24 to 28 weeks if the first is normal.",
        ],
      },
      {
        heading: "How the test works",
        paragraphs: [
          "The oral glucose tolerance test takes about 2 hours. It is a simple test that does not harm you or your baby.",
          "You have a blood test in the morning, when you have not had any food or drink for 8 to 10 hours, though you can usually drink water. You are then given a glucose drink.",
          "After resting for 2 hours, another blood sample is taken to see how your body is dealing with the glucose.",
        ],
      },
      {
        heading: "Getting ready",
        paragraphs: [
          "Apart from fasting, you do not need to do anything different to prepare. Check the leaflet you are given so you know what to expect from your clinic.",
          "It is a good idea to bring a snack to have afterwards, as you will probably be hungry. You can have sips of water before and during the test.",
        ],
      },
      {
        heading: "After the test",
        paragraphs: [
          "You will not always get the results on the same day. If you are diagnosed, you should be referred to a joint diabetes and antenatal clinic within one week, and to a dietitian.",
          "If the test shows you do not have gestational diabetes, it can still develop at any time. If you notice symptoms later, tell your healthcare professional.",
        ],
      },
    ],
    helps: [
      "Fast for 8 to 10 hours before the test, and check with the hospital if you are unsure about drinking water.",
      "Read the leaflet you are given about the test.",
      "Bring a snack to have afterwards.",
      "If you are diagnosed and have not been referred to a dietitian, ask your maternity care team to refer you.",
      "If you develop symptoms after a normal result, trust your instincts and tell your healthcare professional.",
    ],
    tryThisWeek: [
      "Read your test leaflet.",
      "Pack a snack for afterwards.",
      "Report new symptoms after a clear result.",
    ],
    ask: "When is my glucose test, and when and how will I get the result?",
    interactive: {
      kind: "timeline",
      title: "Test day, step by step",
      steps: [
        { id: "fast", when: "The night before", title: "Fasting begins", points: ["No food or drink for 8 to 10 hours.", "You can usually drink water, but check with the hospital."] },
        { id: "first", when: "In the morning", title: "First blood test", points: ["A blood test measures your blood glucose level."] },
        { id: "drink", when: "Straight after", title: "The glucose drink", points: ["You are given a sugary glucose drink."] },
        { id: "second", when: "2 hours later", title: "Second blood test", points: ["After resting, another blood sample is taken.", "Then have the snack you brought with you."] },
      ],
    },
    sources: [NHS_GD, DUK_TEST, DUK_SYMPTOMS, DUK_EAT],
    quiz: {
      question: "When is the glucose test usually done?",
      options: [{ text: "Between 24 and 28 weeks", right: true }, { text: "In the first week of pregnancy" }, { text: "After the birth" }],
      why: "The test is usually done when you are between 24 and 28 weeks pregnant.",
    },
  },
  {
    id: "gd-baby",
    kicker: "Your baby",
    question: "What can gestational diabetes mean for me and my baby?",
    hook: "Most women with it have healthy babies. Keeping blood sugar in range, and the extra checks, lower the risks.",
    short: "Most women with gestational diabetes have otherwise normal pregnancies with healthy babies. It can cause problems such as a larger baby, too much fluid around the baby, early birth or pre-eclampsia, and the baby may have low blood sugar after birth. Keeping your blood sugar in your target range, with extra scans and checks, lowers the chance of these problems.",
    sections: [
      {
        heading: "Most babies are healthy",
        paragraphs: [
          "Most women with gestational diabetes have otherwise normal pregnancies with healthy babies. The risks can be reduced if the condition is found early and well managed.",
        ],
      },
      {
        heading: "Possible problems",
        paragraphs: [
          "Your baby may grow larger than usual, which can make the birth more difficult and makes induced labour or a caesarean section more likely. There may be too much amniotic fluid in the womb, called polyhydramnios, which can cause premature labour or problems at delivery.",
          "Gestational diabetes can also lead to premature birth, before the 37th week, and to pre-eclampsia, a condition that causes high blood pressure in pregnancy.",
          "After birth, your baby may have low blood sugar or yellowing of the skin and eyes, called jaundice, which may need treatment in hospital. Rarely, it can lead to the loss of a baby, called stillbirth.",
        ],
      },
      {
        heading: "Later in life",
        paragraphs: [
          "Your child will not automatically develop diabetes because you had gestational diabetes. Some research suggests children whose mothers had it are more likely to develop type 2 diabetes or obesity later in life.",
          "Encouraging your child to exercise regularly, eat a healthy diet and keep a healthy weight can help reduce this risk.",
        ],
      },
      {
        heading: "Extra checks",
        paragraphs: [
          "You will be offered extra antenatal appointments so your baby can be monitored. These include a scan at around week 18 to 20, then scans at weeks 28, 32 and 36 to check your baby's growth and the amount of amniotic fluid, with regular checks from week 38.",
          "Working with your healthcare team to keep your blood sugar in your target range lowers the chance of these problems.",
        ],
      },
      {
        heading: "Your baby's movements",
        paragraphs: [
          "Gestational diabetes can affect how well the placenta works, which can make your baby unwell and affect their movements.",
          "Call your midwife or maternity unit immediately if your baby is moving less than usual, you cannot feel them moving anymore, or their usual pattern changes. Do not wait until the next day, even if it is the middle of the night.",
        ],
      },
    ],
    helps: [
      "Go to your appointments with your healthcare team, including the extra scans.",
      "Work with your team to keep your blood sugar in your target range.",
      "Get to know your baby's usual pattern of movements.",
      "Call your midwife or maternity unit immediately if movements slow down, stop or change.",
      "Do not use a home doppler to check your baby's heartbeat yourself.",
      "Call the Diabetes UK helpline on 0345 123 2399 if you are worried about the risks.",
    ],
    tryThisWeek: [
      "Note the date of your next scan.",
      "Get to know your baby's usual pattern.",
      "Call at once if movements change.",
    ],
    ask: "How is my baby growing, and when are my next scans?",
    interactive: {
      kind: "signs",
      title: "Movement changes to act on",
      intro: "Tick any you notice. Any one of these means calling your midwife or maternity unit straight away.",
      signs: ["Moving less than usual", "You cannot feel your baby moving", "A change to the usual pattern"],
      after: "Call your midwife or maternity unit immediately. Do not wait until the next day, even if it is the middle of the night.",
      copyHeading: "Movement changes I noticed",
    },
    sources: [NHS_GD, NHS_GD_TREAT, DUK_COMPLICATIONS, DUK_CARE, NHS_MOVEMENTS],
    quiz: {
      question: "Your baby is moving less than usual late at night. What should you do?",
      options: [{ text: "Call your midwife or maternity unit now", right: true }, { text: "Wait until the morning" }, { text: "Check with a home doppler" }],
      why: "Do not wait until the next day, even if it is the middle of the night.",
    },
  },
  {
    id: "gd-checking",
    kicker: "Monitoring",
    question: "How do I check my blood sugar at home?",
    hook: "A finger-prick and a drop of blood on a strip, usually before breakfast and an hour after each meal.",
    short: "You will be given a testing kit to check your blood sugar with a finger-prick and a test strip. You will usually be advised to test before breakfast and 1 hour after each meal, and your team will agree target levels with you. Sharing your readings helps your team give you the right advice and treatment.",
    sections: [
      {
        heading: "Your testing kit",
        paragraphs: [
          "You will be given a testing kit that you can use to check your blood sugar. You prick the side of your finger with a device called a lancet, and put a drop of blood on a test strip, which is read by a blood glucose meter.",
          "If you do not have a meter, ask your care team for one straight away.",
        ],
      },
      {
        heading: "When to check",
        paragraphs: [
          "You will usually be advised to test before breakfast and 1 hour after each meal. If you have two or more insulin injections a day, you are likely to be told to check before meals, one hour after meals and at bedtime.",
          "Your team will tell you what level to aim for, measured in millimoles of glucose per litre of blood, or mmol/l. They should agree a level that is right for you and manageable without causing low blood sugar.",
        ],
      },
      {
        heading: "Doing the test",
        paragraphs: [
          "Wash your hands with soap and warm water and dry them well. Do not use wet wipes, as they may affect the result.",
          "Avoid your thumb and index finger, and use the side of a different finger each time. Use each lancet only once, and write your readings down.",
        ],
      },
      {
        heading: "Sharing your results",
        paragraphs: [
          "You will be advised how to share your readings with your care team, to help you get the right advice and treatment.",
          "Taking your blood sugar results to appointments can help. Diabetes UK has a downloadable resource to keep all your results in one place.",
        ],
      },
      {
        heading: "Continuous glucose monitors",
        paragraphs: [
          "If you take insulin and have problems with low blood sugar, or your blood sugar is not stable, your care team might offer a continuous glucose monitor. This is a small sensor worn on the skin that sends readings to a receiver or mobile phone.",
          "Pregnant women with any form of diabetes should aim to keep blood sugar levels above 4 mmol/l, to reduce the risk of a hypo.",
        ],
      },
    ],
    helps: [
      "Ask your care team for a meter straight away if you do not have one.",
      "Agree your blood sugar targets with your care team.",
      "Wash and dry your hands before testing, without wet wipes.",
      "Note your readings in a diary, a notebook or your phone.",
      "Take your blood sugar results to your appointments.",
    ],
    tryThisWeek: [
      "Agree your targets with your team.",
      "Wash and dry your hands first.",
      "Write each reading down.",
    ],
    ask: "What levels should I aim for, and how should I share my readings?",
    interactive: {
      kind: "scenarios",
      title: "Testing, day to day",
      scenarios: [
        {
          id: "morning",
          situation: "It is morning and you have not eaten yet.",
          options: [{ text: "Test before breakfast", best: true }, { text: "Wait until lunch" }],
          why: "You will usually be advised to test before breakfast and 1 hour after each meal.",
        },
        {
          id: "lunch",
          situation: "You have just finished lunch.",
          options: [{ text: "Test 1 hour after the meal", best: true }, { text: "Skip it if you feel fine" }],
          why: "You will usually be advised to test before breakfast and 1 hour after each meal.",
        },
        {
          id: "hands",
          situation: "Your hands are sticky from fruit.",
          options: [{ text: "Wash with soap and warm water, then dry", best: true }, { text: "Use a wet wipe" }],
          why: "Do not use wet wipes, as they may affect the result.",
        },
        {
          id: "lows",
          situation: "You take insulin and keep having low readings.",
          options: [{ text: "Tell your care team", best: true }, { text: "Keep it to yourself" }],
          why: "If you take insulin and have problems with low blood sugar, your care team might offer a continuous glucose monitor.",
        },
      ],
    },
    sources: [NHS_GD_TREAT, DUK_TREATMENTS, DUK_TESTING, DUK_CARE],
    quiz: {
      question: "When are you usually advised to check your blood sugar?",
      options: [{ text: "Before breakfast and 1 hour after each meal", right: true }, { text: "Once a week" }, { text: "Only when you feel unwell" }],
      why: "You will usually be advised to test before breakfast and 1 hour after each meal.",
    },
  },
  {
    id: "gd-food",
    kicker: "Food",
    question: "What can I eat with gestational diabetes?",
    hook: "Not a sugar-free diet. Regular meals, slower carbs, and carbs spread across the day.",
    short: "Changing what you eat can help control your blood sugar, and you should be referred to a dietitian for advice. The amount of carbohydrate makes the biggest difference, so choosing slow-release carbs and spreading them through the day helps. You do not need a completely sugar-free diet, and pregnancy is not the time for a strict diet.",
    sections: [
      {
        heading: "A dietitian first",
        paragraphs: [
          "Making changes to your diet can help control your blood sugar levels. You should be referred to a dietitian, who can advise you about your diet and how to plan healthy meals.",
          "If this has not happened, ask your maternity care team to refer you.",
        ],
      },
      {
        heading: "Carbohydrates",
        paragraphs: [
          "All carbs affect your blood sugar levels, and the amount makes the biggest difference. Your dietitian will advise on the portion sizes that are right for you.",
          "Eat regularly, usually three meals a day, and avoid skipping meals. Choose starchy foods that release sugar slowly, such as wholewheat pasta, brown rice, granary bread, pulses, beans, lentils and plain porridge.",
        ],
      },
      {
        heading: "Breakfast and snacks",
        paragraphs: [
          "Many care teams suggest limiting carbs at breakfast to 15 to 20g, then having another 15 to 20g a few hours later. In practice, this can mean one slice of toast at one sitting and the other a few hours afterwards.",
          "If you need a snack, swap cake, biscuits, crisps and chocolate for options like Greek yoghurt with nuts or fruit, unsalted nuts and seeds, or two oatcakes with a little cream cheese.",
        ],
      },
      {
        heading: "Sugar and drinks",
        paragraphs: [
          "You do not need a completely sugar-free diet. But swap sugary snacks for fruit, nuts and seeds, and choose diet or sugar-free drinks over sugary versions.",
          "Fruit juices, smoothies and some no added sugar drinks can also be high in sugar, so check the label. It is best to eat fruit between meals.",
        ],
      },
      {
        heading: "Weight and safety",
        paragraphs: [
          "Pregnancy is not the time to be on a really strict diet, and you should not aim to lose weight. Talk to your care team about what weight gain is right for you.",
          "Aim for at least 5 portions of fruit and vegetables a day, and eat lean protein such as fish. It is also important to know the foods to avoid in pregnancy, such as certain types of fish and cheese.",
        ],
      },
    ],
    helps: [
      "Ask to be referred to a dietitian if this has not happened.",
      "Eat regularly, usually three meals a day, and do not skip meals.",
      "Choose slow-release carbs, such as brown rice, wholewheat pasta and plain porridge.",
      "Split your breakfast carbs into two smaller sittings.",
      "Swap sugary drinks, energy drinks and fruit juices for water or decaffeinated tea and coffee.",
      "Learn the other names for sugar on food labels.",
    ],
    tryThisWeek: [
      "Ask for a dietitian referral.",
      "Split breakfast into two sittings.",
      "Swap one sugary drink for water.",
    ],
    ask: "Could I see a dietitian, and how much carbohydrate suits me at each meal?",
    interactive: {
      kind: "scenarios",
      title: "Everyday food choices",
      scenarios: [
        {
          id: "toast",
          situation: "You usually have two slices of toast at breakfast.",
          options: [{ text: "One slice now, one a few hours later", best: true }, { text: "Add a third slice" }],
          why: "In practice, this can mean one slice of toast at one sitting and the other a few hours afterwards.",
        },
        {
          id: "snack",
          situation: "You want a mid-afternoon snack.",
          options: [{ text: "Greek yoghurt with nuts", best: true }, { text: "A slice of cake" }],
          why: "If you need a snack, swap cake, biscuits, crisps and chocolate for options like Greek yoghurt with nuts or fruit.",
        },
        {
          id: "smoothie",
          situation: "A smoothie says no added sugar.",
          options: [{ text: "Check the label first", best: true }, { text: "Assume it is sugar-free" }],
          why: "Fruit juices, smoothies and some no added sugar drinks can also be high in sugar, so check the label.",
        },
        {
          id: "busy",
          situation: "You are too busy for lunch.",
          options: [{ text: "Still eat: avoid skipping meals", best: true }, { text: "Skip it to keep your sugar down" }],
          why: "Eat regularly, usually three meals a day, and avoid skipping meals.",
        },
      ],
    },
    sources: [NHS_GD_TREAT, DUK_EAT],
    quiz: {
      question: "What makes the biggest difference to your blood sugar after eating?",
      options: [{ text: "The amount of carbs", right: true }, { text: "The colour of the food" }, { text: "Drinking water with meals" }],
      why: "All carbs affect your blood sugar levels, and the amount makes the biggest difference.",
    },
  },
  {
    id: "gd-medicines",
    kicker: "Treatment",
    question: "Will I need metformin or insulin?",
    hook: "Many women manage with food and activity. If not, tablets or insulin are extra help, not a failure.",
    short: "You may be given medicine if your blood sugar is still not stable 1 to 2 weeks after changing your diet and exercising, or if it is very high when you are first diagnosed. This is usually metformin tablets, or insulin injections. Needing medicine does not mean you have failed, and you can usually stop after the birth.",
    sections: [
      {
        heading: "When medicine comes in",
        paragraphs: [
          "Many women start with changes to their diet and activity. You may be given medicine if your blood sugar is still not stable 1 to 2 weeks after changing your diet and exercising regularly, or if it is very high when you are first diagnosed.",
          "This does not mean you have failed. It just means you need a bit of extra help to manage your blood sugar and keep you and your baby safe.",
          "Blood sugar can rise as pregnancy goes on, so even if it improves at first, you may need medicine later in pregnancy.",
        ],
      },
      {
        heading: "Metformin",
        paragraphs: [
          "Metformin helps reduce the amount of glucose the liver produces and helps your insulin work more effectively. It is taken as a tablet up to 3 times a day, usually with or after meals.",
          "Side effects can include feeling or being sick, stomach cramps, diarrhoea and loss of appetite. The leaflet may say it should not be used in pregnancy, but Diabetes UK says it is used in the UK to help manage diabetes in pregnancy, with strong evidence for its effectiveness and safety.",
          "The NHS says you can take metformin during pregnancy, but check with a doctor first.",
        ],
      },
      {
        heading: "Insulin",
        paragraphs: [
          "Insulin may be recommended if you cannot take metformin or it causes side effects, if metformin does not lower your blood sugar enough, if your blood sugar is very high, or if your baby is very large or there is too much fluid in the womb.",
          "You inject insulin with an insulin pen. It does not usually hurt, as the needles are very small, and you will be shown where to inject and how to use your pen. Your dose may need to go up over time.",
        ],
      },
      {
        heading: "Low blood sugar on insulin",
        paragraphs: [
          "Insulin can make your blood sugar fall too low. Signs include feeling shaky, sweaty or hungry, turning paler than usual, or finding it hard to concentrate.",
          "If this happens, test your blood sugar and treat it straight away if it is low. If it is below 4mmol/L, have something sugary, such as a small glass of fruit juice or 5 glucose tablets, and check again after 10 to 15 minutes.",
          "Call 999 if you think someone has very low blood sugar and they are not responding normally or are unconscious. This applies if a glucagon injection is not available or you do not know how to use it, if they have not recovered within 10 minutes of one, or if they have been drinking alcohol.",
        ],
      },
      {
        heading: "After the birth",
        paragraphs: [
          "You can usually stop taking these medicines after you give birth. In some cases, pregnancy uncovers diabetes that was already there, and treatment carries on.",
          "Even when medicines are needed, you will still need to make changes to your diet and physical activity.",
        ],
      },
    ],
    helps: [
      "Keep up the changes to your diet and activity, even if you take medicine.",
      "Take metformin with or after meals.",
      "Talk to your diabetes care team if you have any worries about your medicine in pregnancy.",
      "If you take insulin, learn the signs of low blood sugar and how to treat it straight away.",
      "Make sure you have a Maternity Exemption Certificate, so your prescriptions are free.",
      "Speak to a pharmacist or doctor about side effects that bother you or do not go away.",
    ],
    tryThisWeek: [
      "Take metformin with or after meals.",
      "Learn the signs of a hypo.",
      "Check your exemption certificate.",
    ],
    ask: "Do I need medicine yet, and is it safe for my baby?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments, card by card",
      intro: "Turn each card to see what each treatment does.",
      cards: [
        { id: "lifestyle", front: "Diet and activity", when: "Usually the first treatment", back: "Many women start here. The changes still matter if medicine is added." },
        { id: "metformin", front: "Metformin", when: "A tablet, up to 3 times a day", back: "Reduces the glucose the liver makes and helps your insulin work. Taken with or after meals." },
        { id: "glibenclamide", front: "Glibenclamide", when: "A different tablet", back: "Occasionally prescribed instead of metformin." },
        { id: "insulin", front: "Insulin", when: "Injected with a pen", back: "Used if metformin is not suitable or not enough. Taken before meals, at bedtime or on waking, depending on the type." },
        { id: "cgm", front: "Continuous glucose monitor", when: "If on insulin with unstable levels", back: "A small sensor on the skin that sends your blood sugar level to a receiver or phone." },
      ],
    },
    sources: [NHS_GD_TREAT, DUK_TREATMENTS, NHS_METFORMIN, NHS_HYPO, DUK_CARE],
    quiz: {
      question: "Does needing medicine mean you have failed?",
      options: [{ text: "No, it is a bit of extra help", right: true }, { text: "Yes, the diet did not work" }, { text: "Only if you need insulin" }],
      why: "This does not mean you have failed. It just means you need a bit of extra help to manage your blood sugar and keep you and your baby safe.",
    },
  },
  {
    id: "gd-activity",
    kicker: "Exercise",
    question: "How can I stay active with gestational diabetes?",
    hook: "Activity helps muscles use up sugar. A walk after lunch or dinner, swimming or pregnancy yoga all count.",
    short: "Physical activity lowers blood glucose, so regular exercise can help manage gestational diabetes. Gentle activities such as walking, swimming and pregnancy yoga can help, and a common aim is 150 minutes of moderate activity a week. Tell your midwife or doctor before starting something new, and start gently.",
    sections: [
      {
        heading: "Why it helps",
        paragraphs: [
          "Physical activity increases the amount of glucose your muscles use for energy, so it helps lower blood sugar. It also helps the body use insulin more efficiently, and regular activity can reduce the amount of insulin you need.",
          "Keeping active in pregnancy can also help with fitness, sleep, mood and preparing your body for giving birth.",
        ],
      },
      {
        heading: "After meals",
        paragraphs: [
          "Try not to sit after a meal. Diabetes UK says being active for 15 to 20 minutes within 30 minutes of a meal will help get your after-meal sugar level into your target range.",
          "Ideas include regular walks after lunch or dinner, pregnancy yoga, swimming or water aerobics, and dancing in the kitchen.",
        ],
      },
      {
        heading: "How much",
        paragraphs: [
          "A common aim is at least 150 minutes of moderate activity a week, plus strength exercises on 2 or more days. You do not have to do it all at once, and if you cannot manage 150 minutes, do what you can.",
          "Moderate activity raises your heart rate and makes you breathe faster and feel warmer. You should be able to talk but not sing.",
        ],
      },
      {
        heading: "Starting gently",
        paragraphs: [
          "Tell your midwife or doctor before starting an activity you have not done before. If you were not active before pregnancy, do not suddenly take on strenuous exercise.",
          "Start gradually, such as a regular 15-minute walk that becomes a 30-minute walk when you feel ready. It is not recommended to start a new vigorous activity, such as running.",
        ],
      },
      {
        heading: "Staying safe",
        paragraphs: [
          "Do not exercise on an empty stomach, as this could make you faint. Drink water, try to keep cool, and stop if you feel uncomfortable, too hot or unwell.",
          "Avoid sports with a risk of falling or bumping your tummy. In later pregnancy, avoid lying flat on your back for more than a few minutes.",
        ],
      },
    ],
    helps: [
      "Go for a walk after lunch or dinner.",
      "Tell your midwife or doctor before starting an activity you have not done before.",
      "Build up slowly, from a regular 15-minute walk to a 30-minute walk.",
      "Tell any exercise instructor that you are pregnant and how many weeks along you are.",
      "Stop if you feel uncomfortable, too hot or unwell.",
    ],
    tryThisWeek: [
      "Walk after lunch or dinner.",
      "Mention new activities to your midwife.",
      "Stop if you feel unwell.",
    ],
    ask: "Which activities are safe for me, and how much should I aim for?",
    interactive: {
      kind: "scenarios",
      title: "Moving safely in pregnancy",
      scenarios: [
        {
          id: "dinner",
          situation: "You have just finished dinner.",
          options: [{ text: "A 15 to 20 minute walk", best: true }, { text: "Sit on the sofa straight away" }],
          why: "Being active for 15 to 20 minutes within 30 minutes of a meal will help get your after-meal sugar level into your target range.",
        },
        {
          id: "new",
          situation: "You were not active before pregnancy.",
          options: [{ text: "Start with a regular 15-minute walk", best: true }, { text: "Take up running" }],
          why: "If you were not active before pregnancy, do not suddenly take on strenuous exercise.",
        },
        {
          id: "empty",
          situation: "You have not eaten for hours and want to swim.",
          options: [{ text: "Eat something first", best: true }, { text: "Swim on an empty stomach" }],
          why: "Do not exercise on an empty stomach, as this could make you faint.",
        },
        {
          id: "hot",
          situation: "You feel too hot during an exercise class.",
          options: [{ text: "Stop", best: true }, { text: "Push through to the end" }],
          why: "Stop if you feel uncomfortable, too hot or unwell.",
        },
      ],
    },
    sources: [DUK_TREATMENTS, NHS_EXERCISE_PREG, NHS_GD_TREAT, NHS_GD],
    quiz: {
      question: "How does activity help with gestational diabetes?",
      options: [{ text: "Your muscles use more glucose for energy", right: true }, { text: "It removes sugar from food" }, { text: "It replaces blood sugar checks" }],
      why: "Physical activity increases the amount of glucose your muscles use for energy, so it helps lower blood sugar.",
    },
  },
  {
    id: "gd-birth",
    kicker: "Birth",
    question: "What happens at labour, birth and in the first days?",
    hook: "Usually a hospital birth around weeks 38 to 40, blood sugar watched closely, and an early first feed.",
    short: "The ideal time to give birth with gestational diabetes is usually around weeks 38 to 40, in a hospital. You will usually be offered induction or a caesarean if you have not given birth by 40 weeks and 6 days, but a vaginal birth is likely if that is what you choose. Your baby will be fed soon after birth and have blood sugar checks, and you can normally go home after 24 hours if you are both well.",
    sections: [
      {
        heading: "When and where",
        paragraphs: [
          "The ideal time to give birth if you have gestational diabetes is usually around weeks 38 to 40. If your blood sugar is within normal levels and there are no concerns, you may be able to wait for labour to start naturally.",
          "You will usually be offered induction of labour or a caesarean section if you have not given birth by 40 weeks and 6 days. Earlier delivery may be recommended if there are concerns about you or your baby, or if your blood sugar has not been well controlled.",
          "You should give birth at a hospital where specially trained staff can care for your baby.",
        ],
      },
      {
        heading: "Induction and choice",
        paragraphs: [
          "Many women worry that they will have to have a caesarean, but that is not the case. It is likely you will be able to have a vaginal birth if that is what you choose.",
          "Induction is usually planned in advance, and you can discuss the advantages and disadvantages with your doctor and midwife. It is your choice whether to have your labour induced or not.",
        ],
      },
      {
        heading: "During labour",
        paragraphs: [
          "Take your blood sugar testing kit and any medicines with you to hospital. Usually you keep testing and taking your medicines until you are in established labour, or until you are told to stop eating before a caesarean.",
          "During labour and birth, your blood sugar will be monitored and kept under control. You may need insulin through a drip.",
        ],
      },
      {
        heading: "Your baby's first hours",
        paragraphs: [
          "It is important to feed your baby as soon as possible after birth, within 30 minutes, and then every 2 to 3 hours until their blood sugar is stable.",
          "Your baby's blood sugar will be tested starting 2 to 4 hours after birth. If it is low, they may need to be fed through a tube or a drip for a while, and some babies are looked after in a neonatal unit.",
          "Your healthcare team may talk to you about collecting and freezing early breast milk, called colostrum, from 36 weeks of pregnancy. This may take the pressure off if you are worried about breastfeeding.",
        ],
      },
      {
        heading: "Going home",
        paragraphs: [
          "Any medicines you were taking for your blood sugar will usually be stopped after the birth. You will usually be advised to keep checking your blood sugar for 1 or 2 days.",
          "If you are both well, you and your baby will normally be able to go home after 24 hours.",
        ],
      },
    ],
    helps: [
      "Talk about the timing of the birth with your team after your 32 and 36 week scans.",
      "Pack your blood sugar testing kit and medicines for the hospital.",
      "Ask your team about collecting colostrum from 36 weeks.",
      "Feed your baby within 30 minutes of the birth, then every 2 to 3 hours.",
      "Ask your doctor and midwife about the advantages and disadvantages of induction.",
    ],
    tryThisWeek: [
      "Pack your testing kit and medicines.",
      "Ask about collecting colostrum.",
      "Plan a first feed within 30 minutes.",
    ],
    ask: "How will my birth be planned, and what happens if labour does not start?",
    interactive: {
      kind: "timeline",
      title: "From labour to home",
      steps: [
        { id: "timing", when: "Weeks 38 to 40", title: "The usual time to give birth", points: ["You may be able to wait for labour to start naturally.", "Induction or a caesarean is usually offered by 40 weeks and 6 days."] },
        { id: "labour", when: "In labour", title: "Blood sugar watched", points: ["Bring your testing kit and medicines.", "You may need insulin through a drip."] },
        { id: "feed", when: "Within 30 minutes", title: "The first feed", points: ["Then every 2 to 3 hours until your baby's blood sugar is stable."] },
        { id: "test", when: "2 to 4 hours after birth", title: "Your baby's blood sugar test", points: ["If it is low, a tube or drip feed may help for a while."] },
        { id: "home", when: "After 24 hours", title: "Going home", points: ["If you and your baby are both well.", "Keep checking your own blood sugar for 1 or 2 days."] },
      ],
    },
    sources: [NHS_GD_TREAT, DUK_CARE, NHS_INDUCTION],
    quiz: {
      question: "Does gestational diabetes mean you will need a caesarean?",
      options: [{ text: "No, a vaginal birth is likely if you choose it", right: true }, { text: "Yes, always" }, { text: "Only if you take metformin" }],
      why: "It is likely you will be able to have a vaginal birth if that is what you choose.",
    },
  },
  {
    id: "gd-after",
    kicker: "After the birth",
    question: "What checks follow after the birth?",
    hook: "Gestational diabetes usually goes, but type 2 diabetes becomes more likely. A blood test at 6 to 13 weeks, then every year.",
    short: "Gestational diabetes normally goes away after birth, but Diabetes UK says your risk of type 2 diabetes is now 10 times higher. You should have a blood test 6 to 13 weeks after giving birth, and once a year after that if it is normal. Healthy habits and a prevention programme can help delay or prevent type 2 diabetes.",
    sections: [
      {
        heading: "Why the checks matter",
        paragraphs: [
          "Most women's blood sugar goes back to normal after the birth. But women who have had gestational diabetes are more likely to develop type 2 diabetes, and Diabetes UK says up to half develop it within five years.",
          "You should have the tests even if you feel well, as many people with diabetes do not have any symptoms.",
        ],
      },
      {
        heading: "The blood tests",
        paragraphs: [
          "You should have a blood test to check for diabetes 6 to 13 weeks after giving birth, and once every year after that if the result is normal. If you have not been offered an appointment, Diabetes UK suggests booking one.",
          "If your levels are still high, you will be diagnosed with prediabetes or type 2 diabetes, and you should be offered support. If that happens, try not to blame yourself, as these conditions develop because of a mix of different factors.",
          "See your GP if you develop symptoms of high blood sugar, such as increased thirst, needing to pee more often and a dry mouth. Do not wait until your next test.",
        ],
      },
      {
        heading: "Prevention support",
        paragraphs: [
          "If you have had gestational diabetes, the NHS Diabetes Prevention Programme can support you with diet, exercise and your weight. In England, you can sign yourself up to the Healthier You course, which runs over nine months, or ask your GP to refer you.",
          "NHS England says the programme cuts the risk of type 2 diabetes by more than a third for people who complete it. You can even book your place during pregnancy.",
          "In Wales, Scotland and Northern Ireland, ask your GP what prevention support is available where you live.",
        ],
      },
      {
        heading: "Habits that help",
        paragraphs: [
          "Keep up some of the healthy habits you learned in pregnancy. When your healthcare team say it is safe and you feel ready, small changes can help you lose any excess weight, but do not try to lose weight too quickly, particularly if you are breastfeeding.",
          "Try to do more physical activity each day. Anything that gets you slightly out of breath, such as hoovering or going up and down the stairs, can be particularly helpful.",
          "Breastfeeding, including expressing colostrum, can also help reduce your risk of type 2 diabetes, though it is not yet fully understood why.",
        ],
      },
      {
        heading: "Your postnatal check",
        paragraphs: [
          "You should have your postnatal check 6 to 8 weeks after the birth, to make sure you feel well and are recovering properly. You will be asked how you are feeling, and about contraception.",
          "Your emotional health is a priority. If you are struggling after the birth, reach out to your GP, midwife or health visitor.",
        ],
      },
    ],
    helps: [
      "Book a blood test 6 to 13 weeks after the birth if you have not been offered one.",
      "Have a diabetes blood test every year after that, even if you feel well.",
      "Ask your GP about a type 2 prevention course, or sign yourself up to Healthier You in England.",
      "See your GP if you get symptoms of high blood sugar, rather than waiting for your next test.",
      "Include your family in healthy eating and regular activity.",
      "Speak to your GP first if you are thinking of changing your diet, losing weight or trying a new activity.",
    ],
    tryThisWeek: [
      "Book your 6 to 13 week blood test.",
      "Ask about a prevention course.",
      "Make activity a family habit.",
    ],
    ask: "When is my diabetes blood test after the birth, and can you refer me to a prevention course?",
    interactive: {
      kind: "timeline",
      title: "The checks after the birth",
      steps: [
        { id: "days", when: "The first 1 or 2 days", title: "In hospital", points: ["Blood sugar medicines are usually stopped.", "Keep checking your blood sugar for 1 or 2 days."] },
        { id: "postnatal", when: "6 to 8 weeks", title: "Your postnatal check", points: ["How you are feeling, and contraception."] },
        { id: "test", when: "6 to 13 weeks", title: "Diabetes blood test", points: ["Book it if you have not been offered one."] },
        { id: "yearly", when: "Every year", title: "Annual blood test", points: ["Even if you feel well.", "Type 2 diabetes often has no symptoms."] },
        { id: "course", when: "From pregnancy onwards", title: "Prevention course", points: ["In England, Healthier You runs over nine months.", "You can book your place during pregnancy."] },
      ],
    },
    sources: [NHS_GD, DUK_PREVENT_T2, NHSE_PREVENTION, DUK_CARE, NHS_POSTNATAL_CHECK, NHS_GD_TREAT],
    quiz: {
      question: "When should the first diabetes blood test be after the birth?",
      options: [{ text: "6 to 13 weeks after giving birth", right: true }, { text: "Only if you feel unwell" }, { text: "Five years later" }],
      why: "You should have a blood test to check for diabetes 6 to 13 weeks after giving birth, and once every year after that if the result is normal.",
    },
  },
  {
    id: "gd-next-pregnancy",
    kicker: "Planning",
    question: "What about a future pregnancy?",
    hook: "Gestational diabetes can come back. A check before trying again, and earlier testing, help.",
    short: "If you have had gestational diabetes, you are more likely to have it again in a future pregnancy. If you are planning to get pregnant, get checked for diabetes first, which your GP can arrange. Tell your team about your history early, so you can be offered testing soon after your first midwife appointment.",
    sections: [
      {
        heading: "It can come back",
        paragraphs: [
          "Women who have had gestational diabetes are more likely to develop it again in future pregnancies.",
          "The best way to reduce your risk is to try to be as healthy as possible before you get pregnant. Support to manage your weight, eat healthily and keep active can help.",
        ],
      },
      {
        heading: "Before trying again",
        paragraphs: [
          "If you are planning to get pregnant, make sure you get checked for diabetes first. Your GP can arrange this.",
          "If you do have diabetes, you should be referred to a diabetes pre-conception clinic for support, so your condition is well controlled before you get pregnant.",
          "You and your maternity team should discuss contraception before you give birth.",
        ],
      },
      {
        heading: "Earlier testing",
        paragraphs: [
          "In any future pregnancy, tell your GP or healthcare team straight away that you have had gestational diabetes, so testing is offered early on.",
          "If tests show you do not have diabetes, you will be offered screening soon after your first midwife appointment, and another test at 24 to 28 weeks if the first is normal. Or your midwife or doctor may suggest you test your blood sugar yourself with a finger-prick, as you did before.",
        ],
      },
      {
        heading: "If the pregnancy is unplanned",
        paragraphs: [
          "If you have an unplanned pregnancy, talk to your GP and tell them you had gestational diabetes in your previous pregnancy.",
        ],
      },
    ],
    helps: [
      "Ask your GP to check you for diabetes before trying for another baby.",
      "In any new pregnancy, tell your team straight away that you have had gestational diabetes.",
      "Keep having your annual blood test.",
      "Discuss contraception with your maternity team before the birth.",
      "Try to be as healthy as possible before you get pregnant.",
    ],
    tryThisWeek: [
      "Ask your GP for a diabetes check first.",
      "Tell your team early next time.",
      "Keep your yearly blood test.",
    ],
    ask: "Should I be checked for diabetes before trying again, and how early will I be tested?",
    interactive: {
      kind: "scenarios",
      title: "Planning ahead",
      scenarios: [
        {
          id: "planning",
          situation: "You are thinking about trying for another baby.",
          options: [{ text: "Ask your GP to check for diabetes", best: true }, { text: "Wait for the 24-week test" }],
          why: "If you are planning to get pregnant, make sure you get checked for diabetes first. Your GP can arrange this.",
        },
        {
          id: "unplanned",
          situation: "You find out you are pregnant unexpectedly.",
          options: [{ text: "Tell your GP about your history", best: true }, { text: "Mention it later in pregnancy" }],
          why: "If you have an unplanned pregnancy, talk to your GP and tell them you had gestational diabetes in your previous pregnancy.",
        },
        {
          id: "diabetes",
          situation: "Your check before pregnancy shows diabetes.",
          options: [{ text: "Ask about a pre-conception clinic", best: true }, { text: "Carry on as before" }],
          why: "If you do have diabetes, you should be referred to a diabetes pre-conception clinic for support.",
        },
        {
          id: "clear",
          situation: "Your early test in pregnancy is normal.",
          options: [{ text: "Expect another test at 24 to 28 weeks", best: true }, { text: "No more testing is needed" }],
          why: "You will be offered another test at 24 to 28 weeks if the first is normal.",
        },
      ],
    },
    sources: [NHS_GD, DUK_REDUCE, DUK_CARE, DUK_PREVENT_T2],
    quiz: {
      question: "In a future pregnancy, when can testing start?",
      options: [{ text: "Soon after your first midwife appointment", right: true }, { text: "Only after 28 weeks" }, { text: "Only if you have symptoms" }],
      why: "If tests show you do not have diabetes, you will be offered screening soon after your first midwife appointment.",
    },
  },
  {
    id: "gd-feelings",
    kicker: "Wellbeing",
    question: "How do I cope with the worry and feelings?",
    hook: "Shock, guilt and worry are common after the diagnosis. It is not your fault, and support is there.",
    short: "Being diagnosed with gestational diabetes can be a scary and confusing time, and some women feel shocked or guilty. It is not your fault, and talking about how you feel can really help. If low feelings last longer than two weeks after the birth, or start later, talk to your doctor, midwife or health visitor straight away.",
    sections: [
      {
        heading: "Not your fault",
        paragraphs: [
          "Being diagnosed with gestational diabetes can be a scary and confusing time. You might feel shocked or guilty, and wonder if you caused it somehow, but this is not the case.",
          "Most women with gestational diabetes have otherwise normal pregnancies with healthy babies.",
        ],
      },
      {
        heading: "Talking helps",
        paragraphs: [
          "Your midwife and care team should ask if you have ever had problems with your mental health, and check in on how you are now. Do not be afraid to be open and ask for support.",
          "Talk about your feelings to a friend, family member, midwife or doctor, and try to make time to do something you enjoy. Regular exercise in pregnancy helps boost mood and improves sleep.",
          "Diabetes UK has a helpline on 0345 123 2399, and a forum where you can ask questions and share experiences safely.",
        ],
      },
      {
        heading: "After the birth",
        paragraphs: [
          "Feeling down, anxious or irritable for a few days after the birth is very common, and is sometimes called the baby blues. It usually goes away within 2 weeks.",
          "If your feelings last longer than two weeks or start later, you could have postnatal depression. Talk to your doctor, midwife or health visitor straight away, as with the right support most people make a full recovery.",
          "You may be scared that your baby will be taken away if you ask for help, but this is very rare. Your care team will give you the support you need to care for your baby.",
        ],
      },
      {
        heading: "Treatment and support",
        paragraphs: [
          "Depression and anxiety in pregnancy, and postnatal depression, can often be helped with a talking therapy such as cognitive behavioural therapy. Sometimes a medicine, such as an antidepressant, is offered too.",
          "If you already take a prescribed medicine when you find out you are pregnant, tell your doctor as soon as possible. Do not stop taking it until you have spoken to them.",
          "If you are 18 or over, or 16 or over in some areas, you can refer yourself to an NHS talking therapies service without a GP referral.",
        ],
      },
      {
        heading: "Urgent help",
        paragraphs: [
          "If you need urgent help for your mental health, get advice from 111 online or call 111 and select the mental health option, or ask for an urgent GP appointment. You can also call Samaritans on 116 123 to talk to someone.",
          "Call 999 or go to A&E now if someone's life is at risk, or if you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one.",
        ],
      },
    ],
    helps: [
      "Remember that gestational diabetes is not your fault.",
      "Be honest with your midwife, GP or anyone caring for you about how you really feel.",
      "Talk about your feelings to a friend, family member, midwife or doctor.",
      "After the birth, ask for help with practical things like shopping, chores and childcare.",
      "Call the Diabetes UK helpline on 0345 123 2399 to talk things through confidentially.",
      "For urgent help, call 111 and select the mental health option, or call 999 if a life is at risk.",
    ],
    tryThisWeek: [
      "Tell your midwife how you really feel.",
      "Talk to someone you trust.",
      "Ask for help with chores.",
    ],
    ask: "Who can I talk to about how I am feeling, during pregnancy and after the birth?",
    interactive: {
      kind: "signs",
      title: "Feelings to mention",
      intro: "Tick any you have noticed. They can be signs of depression, which can begin in pregnancy or up to a year after the birth.",
      signs: ["Low mood", "Finding it hard to enjoy anything", "Feeling hopeless or unable to cope", "Feeling guilty or worthless", "Worrying all the time", "Feeling restless or irritable", "Difficulty sleeping, even when resting", "Difficulty concentrating", "Difficulty bonding with your baby", "Thoughts of suicide or self-harm"],
      after: "Speak to your GP, midwife or health visitor. For urgent help, call 111 and select the mental health option. Call 999 or go to A&E if a life is at risk. Samaritans: 116 123.",
      copyHeading: "How I have been feeling",
    },
    sources: [DUK_TEST, DUK_COMPLICATIONS, NHS_GD, NHS_MENTAL_PREG, DUK_CARE, NHS_PND, NHS_URGENT_MH],
    quiz: {
      question: "How long do the baby blues usually last?",
      options: [{ text: "They usually go within 2 weeks", right: true }, { text: "About six months" }, { text: "They never go away" }],
      why: "It usually goes away within 2 weeks.",
    },
  },
];
