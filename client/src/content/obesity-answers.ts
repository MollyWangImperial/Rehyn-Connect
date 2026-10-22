import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Obesity page's pieces (content/library-conditions/metabolism-more.ts).
// Every sentence was written from wording checked on 21 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (the
// overweight and obesity page, its medicine and weight loss surgery pages, and NHS Better Health), NHS
// England's Digital Weight Management Programme pages, Diabetes UK and the British Heart Foundation.
// Weight is written about neutrally and without blame. General information only; it never replaces what
// a person's own team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const duk = (label: string, path: string): LearnSource => ({ label: `Diabetes UK: ${label}`, url: `https://www.diabetes.org.uk/${path}` });
const bhf = (label: string, path: string): LearnSource => ({ label: `British Heart Foundation: ${label}`, url: `https://www.bhf.org.uk/informationsupport/${path}` });

const NHS_OB = nhs("Overweight and obesity in adults", "conditions/overweight-and-obesity/");
const NHS_BMI_ADULT = nhs("Calculate your body mass index (BMI) for adults", "health-assessment-tools/calculate-your-body-mass-index/calculate-bmi-for-adults");
const NHS_WHR = nhs("Calculate your waist to height ratio", "health-assessment-tools/calculate-your-waist-to-height-ratio");
const NHS_TIPS = nhs("Tips to help you lose weight", "live-well/healthy-weight/managing-your-weight/tips-to-help-you-lose-weight/");
const NHS_WHEELCHAIR = nhs("How to lose weight in a wheelchair", "live-well/healthy-weight/managing-your-weight/how-to-lose-weight-in-a-wheelchair/");
const NHS_PA = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");
const NHS_BH_LOSE = nhs("Better Health: How to lose weight", "better-health/lose-weight/");
const NHS_BH_EAT = nhs("Better Health: Healthy eating when trying to lose weight", "better-health/lose-weight/healthy-eating-when-trying-to-lose-weight/");
const NHS_BH_CAL = nhs("Better Health: Calories and weight loss", "better-health/lose-weight/calorie-counting/");
const NHS_BH_PROGS = nhs("Better Health: Free and discounted weight loss plans", "better-health/lose-weight/free-discounted-weight-loss-programmes/");
const NHS_BH_SUPPORT = nhs("Better Health: Support for weight-related health conditions", "better-health/lose-weight/support-for-weight-related-health-conditions/");
const NHS_BH_ACTIVE = nhs("Better Health: How to be more active", "better-health/get-active/how-to-be-more-active/");
const NHS_SEMA = nhs("Semaglutide", "medicines/semaglutide/");
const NHS_TIRZ = nhs("Tirzepatide", "medicines/tirzepatide/");
const NHS_LIRA = nhs("Liraglutide", "medicines/liraglutide/");
const NHS_ORL = nhs("Orlistat", "medicines/orlistat/");
const NHS_WLS_WHAT = nhs("What is weight loss surgery?", "tests-and-treatments/weight-loss-surgery/what-is-weight-loss-surgery/");
const NHS_WLS_WHY = nhs("Why weight loss surgery is done", "tests-and-treatments/weight-loss-surgery/why-its-done/");
const NHS_WLS_PREP = nhs("Preparing for weight loss surgery", "tests-and-treatments/weight-loss-surgery/preparing/");
const NHS_WLS_HOW = nhs("How weight loss surgery is done", "tests-and-treatments/weight-loss-surgery/how-its-done/");
const NHS_WLS_REC = nhs("Recovering from weight loss surgery", "tests-and-treatments/weight-loss-surgery/recovering/");
const NHS_WLS_COMP = nhs("Complications of weight loss surgery", "tests-and-treatments/weight-loss-surgery/complications/");
const NHS_BINGE = nhs("Binge eating disorder", "mental-health/conditions/binge-eating/overview/");
const NHS_STRESS = nhs("Every Mind Matters: Dealing with stress", "every-mind-matters/mental-health-issues/stress/");
const NHS_TALK = nhs("Talking therapies", "tests-and-treatments/talking-therapies/");
const NHS_URGENT = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");
const NHSE_DWMP: LearnSource = { label: "NHS England: NHS Digital Weight Management Programme", url: "https://www.england.nhs.uk/digital-weight-management/" };
const NHSE_DWMP_ACCESS: LearnSource = { label: "NHS England: How to access the programme", url: "https://www.england.nhs.uk/digital-weight-management/how-to-access-the-programme/" };

const DUK_HW = duk("What's a healthy weight for diabetes?", "living-with-diabetes/eating/whats-your-healthy-weight");
const DUK_LOSE = duk("Weight loss and diabetes", "living-with-diabetes/eating/whats-your-healthy-weight/lose-weight");
const DUK_EMO = duk("Emotional eating, sugar cravings and feasting", "living-with-diabetes/eating/food-psychology/emotional-eating-and-feasting");
const DUK_FEELINGS = duk("Your feelings about food and diabetes", "living-with-diabetes/emotional-wellbeing/your-feelings-about-food-and-diabetes");
const DUK_WLS = duk("Weight loss surgery for type 2 diabetes", "about-diabetes/type-2-diabetes/remission/weight-loss-surgery");
const DUK_WMS = duk("Weight Management Services for preventing and managing type 2 diabetes", "about-us/about-the-charity/our-strategy/position-statements/treatment-of-obesity");
const DUK_STIGMA_REPORT = duk("New Report from the Women and Equalities Committee on Weight Stigma", "about-us/news-and-views/weight-stigma-report");
const DUK_OB_STIGMA = duk("It's time to end the social stigma of obesity", "about-us/news-and-views/ending-obesity-stigma");

const BHF_OB = bhf("Obesity", "risk-factors/obesity");
const BHF_MANAGE = bhf("Managing your weight", "support/healthy-living/managing-your-weight");
const BHF_ACTIVE = bhf("Staying active", "support/healthy-living/staying-active");
const BHF_STEPS = bhf("5 steps to sustainable weight loss", "heart-matters-magazine/nutrition/weight/steps-to-sustainable-weight-loss");
const BHF_NOTLOSING = bhf("Why am I not losing weight?", "heart-matters-magazine/nutrition/why-am-i-not-losing-weight");
const BHF_PLATEAU = bhf("Weight loss plateau: why have I stopped losing weight?", "heart-matters-magazine/nutrition/weight-loss-plateau");
const BHF_MVW = bhf("Mounjaro vs Wegovy: which is better for weight loss?", "heart-matters-magazine/news/behind-the-headlines/mounjaro-vs-wegovy");

export const obesityAnswers: LearnArticle[] = [
  {
    id: "ob-what-it-is",
    kicker: "Understanding",
    question: "What does obesity mean, and what does BMI tell me?",
    hook: "BMI is a useful starting point. Your waist measurement fills in more of the picture.",
    short: "Overweight and obesity are when you have more body fat than your body needs. Body mass index (BMI) uses your height and weight to show whether you are a healthy weight, and for most adults a BMI of 30 or more is in the obese range. BMI cannot tell muscle from fat, so measuring your waist helps too.",
    sections: [
      {
        heading: "More body fat than the body needs",
        paragraphs: [
          "Overweight and obesity are when you have more body fat than your body needs. This can lead to serious health problems, but there are lifestyle changes and treatments that can help.",
          "Body mass index, or BMI, is worked out by dividing an adult's weight in kilograms by their height in metres squared. The result falls into one of four groups: underweight, a healthy weight, overweight or obese.",
        ],
      },
      {
        heading: "The BMI ranges",
        paragraphs: [
          "For most adults, a BMI from 25 to just under 30 is overweight, and a BMI of 30 or more is obese.",
          "People from a South Asian, Chinese, other Asian, Middle Eastern, Black African or African-Caribbean background are at risk of health problems at a slightly lower BMI. For them, a BMI from 23 is overweight, and a BMI of 27 and a half or higher is obese.",
        ],
      },
      {
        heading: "What BMI cannot tell you",
        paragraphs: [
          "BMI cannot tell the difference between muscle and fat. If you have a lot of muscle, you may be classed as overweight or obese despite having low body fat.",
          "It also does not consider age, gender or different body shapes. It might not be accurate if you are pregnant, very muscly or athletic, or an older person who has lost some muscle.",
        ],
      },
      {
        heading: "Your waist",
        paragraphs: [
          "If your BMI is under 35, the waist to height ratio can help you understand if you are carrying too much fat around your tummy. Try to keep your waist size to less than half your height.",
          "A larger waist is often a sign of visceral fat, the hidden fat in and around organs such as the liver and pancreas. You can have a high waist size even if your BMI is in the healthy weight range.",
          "To measure your waist, place a tape measure around your middle, halfway between the bottom of your ribs and the top of your hips, just above the belly button. It will not be the same as the size you use when buying jeans or trousers.",
        ],
      },
      {
        heading: "A starting point",
        paragraphs: [
          "If you are living with obesity, it may not be possible or easy to reach a healthy weight BMI. There may be a difference between a healthy weight BMI and a reasonable target for you, and that is something to talk about with your healthcare professional.",
        ],
      },
    ],
    helps: [
      "Use the NHS BMI calculator, then the waist to height ratio calculator if your BMI is under 35.",
      "Measure your waist halfway between the bottom of your ribs and the top of your hips, just above the belly button.",
      "Do not use these calculators if you are pregnant, or have or think you may have an eating disorder.",
      "If you are worried about your weight or waist size, contact your local pharmacist or GP surgery.",
      "Ask your GP or practice nurse to help work out your BMI if you cannot do it at home.",
    ],
    tryThisWeek: [
      "Check your BMI online.",
      "Measure your waist.",
      "Ask your GP surgery if you are worried.",
    ],
    ask: "What do my BMI and waist measurement mean for my health, and what is a realistic target for me?",
    interactive: {
      kind: "flip-cards",
      title: "Two measures, card by card",
      intro: "Turn each card to see what each measure tells you, and what it cannot.",
      cards: [
        { id: "bmi", front: "BMI", when: "Your weight and height", back: "Shows if you are a healthy weight for your height. It cannot tell the difference between muscle and fat." },
        { id: "ranges", front: "Lower BMI ranges", when: "Some ethnic backgrounds", back: "South Asian, Chinese, other Asian, Middle Eastern, Black African or African-Caribbean people are at risk at a lower BMI." },
        { id: "waist", front: "Waist to height ratio", when: "If your BMI is under 35", back: "Shows if you carry too much fat around your tummy. Keep your waist to less than half your height." },
        { id: "visceral", front: "Visceral fat", when: "The fat you cannot see", back: "Fat in and around organs like the liver and pancreas. You can have it even with a healthy BMI." },
      ],
    },
    sources: [NHS_OB, NHS_BMI_ADULT, NHS_WHR, BHF_OB, DUK_HW],
    quiz: {
      question: "What can BMI not tell you?",
      options: [{ text: "The difference between muscle and fat", right: true }, { text: "Your height" }, { text: "Your weight" }],
      why: "BMI cannot tell the difference between muscle and fat.",
    },
  },
  {
    id: "ob-causes",
    kicker: "Causes",
    question: "Why does weight build up?",
    hook: "It is not about willpower. Genes, medicines, sleep, stress and the world around you all play a part.",
    short: "You put on weight when your body turns extra calories from food and drink into fat. But many things affect that balance, from genes, health conditions and some medicines to sleep, stress and the food around you. The BHF says obesity is not caused by a lack of willpower.",
    sections: [
      {
        heading: "The energy balance",
        paragraphs: [
          "You put on weight when your body turns extra calories from food and drink into fat. This is often caused by not doing enough physical activity to use up those calories, and eating and drinking more than your body needs, especially foods and drinks high in fat and sugar.",
          "The BHF lists portion sizes, medical conditions and medicines, our genes, and stress and lack of sleep among the causes of obesity.",
        ],
      },
      {
        heading: "Not a lack of willpower",
        paragraphs: [
          "Obesity is not caused by a lack of willpower. Many things around food and activity influence weight gain.",
          "Obesity is a complex condition. Family history, and social and environmental factors such as your living situation, can contribute to it, and these are not always within your control. Diabetes UK says socioeconomic status, genetics and the wider food environment all play a strong role in a person's weight.",
        ],
      },
      {
        heading: "Health conditions and medicines",
        paragraphs: [
          "It can be harder to stay a healthy weight if you have a health condition that causes weight gain, such as an underactive thyroid gland or Cushing's syndrome. Some medicines can play a part too, including some steroids, antidepressants and beta blockers.",
          "It can also be harder if you have an eating disorder or another mental health condition such as depression, a health condition or disability that makes it difficult to be active, or a learning disability.",
        ],
      },
      {
        heading: "Genes, age and life changes",
        paragraphs: [
          "Some people have genes that make them more likely to gain weight. Being over 55, or being menopausal or perimenopausal, can also make it harder to stay a healthy weight.",
          "Life changes matter too. Being busy at work or with family can make healthy food choices harder, and caring responsibilities can cut back your free time.",
        ],
      },
      {
        heading: "Sleep and stress",
        paragraphs: [
          "Not getting enough sleep can make it harder to lose weight. Poor sleep may make you more likely to choose high-calorie foods, or too tired to exercise or cook healthy meals.",
          "Stress can lead us to eat more, or change the types of foods we eat.",
        ],
      },
    ],
    helps: [
      "Speak to a GP for advice if you have a condition that makes it harder to stay a healthy weight.",
      "Think about why you might have put on weight: is it a recent change or part of a long-term pattern?",
      "If you have been consistent with changes but are still struggling, talk to your GP, as there can be medical reasons.",
      "Have a wind-down routine that helps you relax before sleep.",
      "If stress makes you snack, try doing something with your hands, such as writing, drawing or a crossword.",
    ],
    tryThisWeek: [
      "Notice when the weight started to change.",
      "Ask a GP about conditions that affect weight.",
      "Try a wind-down routine before bed.",
    ],
    ask: "Could any of my medicines or health conditions be affecting my weight?",
    interactive: {
      kind: "risk-check",
      title: "What can play a part?",
      intro: "Tick any that apply to you. Some you can change, and some you cannot.",
      items: [
        { id: "genes", label: "Genes or family history", note: "Some people have genes that make them more likely to gain weight.", changeable: false },
        { id: "age", label: "Being over 55", note: "Age can make it harder to stay a healthy weight.", changeable: false },
        { id: "menopause", label: "Menopause or perimenopause", note: "This can make it harder to stay a healthy weight.", changeable: false },
        { id: "condition", label: "A condition that causes weight gain", note: "Such as an underactive thyroid gland or Cushing's syndrome. Speak to a GP for advice.", changeable: true },
        { id: "medicines", label: "Some medicines", note: "Such as some steroids, antidepressants and beta blockers. Speak to a GP for advice.", changeable: true },
        { id: "sleep", label: "Not enough sleep", note: "Poor sleep may make you choose high-calorie foods, or feel too tired to exercise or cook.", changeable: true },
        { id: "stress", label: "Stress", note: "Stress can lead us to eat more, or change the types of foods we eat.", changeable: true },
        { id: "active", label: "Not much physical activity", note: "Not using up the calories from food and drink is a common cause.", changeable: true },
      ],
    },
    sources: [NHS_OB, BHF_OB, BHF_STEPS, DUK_HW, DUK_WMS, NHS_BH_LOSE, BHF_NOTLOSING],
    quiz: {
      question: "According to the BHF, what is obesity not caused by?",
      options: [{ text: "A lack of willpower", right: true }, { text: "Genes" }, { text: "Medical conditions and medicines" }],
      why: "Obesity is not caused by a lack of willpower. Many things around food and activity influence weight gain.",
    },
  },
  {
    id: "ob-health",
    kicker: "Health",
    question: "How can carrying extra weight affect my health?",
    hook: "It raises the risk of type 2 diabetes, heart disease and more. It can also affect sleep, joints and mood day to day.",
    short: "Living with overweight and obesity raises the risk of many serious conditions, including type 2 diabetes, heart disease, stroke, high blood pressure, some cancers, osteoarthritis and fatty liver disease. It can also bring day-to-day problems such as breathlessness, joint pain, snoring and tiredness. Losing even a small amount of weight can improve your health.",
    sections: [
      {
        heading: "Longer-term risks",
        paragraphs: [
          "Living with overweight and obesity increases your risk of many other serious health conditions. These include type 2 diabetes, heart disease, stroke, high blood pressure, osteoarthritis and fatty liver disease.",
          "It also raises the risk of some cancers, such as breast cancer, womb cancer and bowel cancer.",
        ],
      },
      {
        heading: "Your heart and blood vessels",
        paragraphs: [
          "Excess weight, especially round your waist, can lead to fatty material building up in your arteries, the blood vessels that carry blood to your organs. This is known as atherosclerosis.",
          "It can also increase your risk of high blood pressure, high cholesterol and type 2 diabetes. If the arteries to the heart become damaged and clogged, it can lead to a heart attack. In the arteries to the brain, it can lead to a stroke or vascular dementia.",
        ],
      },
      {
        heading: "The fat you cannot see",
        paragraphs: [
          "Many people worry about the fat they can feel, which sits under the skin. But the bigger health risk comes from visceral fat, which sits around internal organs such as the heart and liver.",
          "Having too much visceral fat can raise your blood cholesterol and blood pressure, and increase your risk of type 2 diabetes.",
        ],
      },
      {
        heading: "Type 2 diabetes",
        paragraphs: [
          "Living with overweight or obesity is the most significant risk factor for type 2 diabetes that can be changed. Around 90% of people with newly diagnosed type 2 diabetes are living with overweight or obesity.",
          "Extra weight around your waist means fat can build up around organs like the liver and pancreas. This can cause insulin resistance, and losing this weight could help insulin work properly.",
        ],
      },
      {
        heading: "Day to day",
        paragraphs: [
          "It can also cause day-to-day problems such as breathlessness, difficulty moving around, feeling very tired, joint and back pain, snoring, and low mood.",
          "You can reduce your risk of many serious health conditions by losing weight. Just losing a small amount, 5 to 10% of your body weight, can improve your health.",
        ],
      },
    ],
    helps: [
      "See a GP if your BMI is in the overweight or obese range and you want help to lose weight.",
      "See a GP if, alongside a high BMI, your waist is more than half your height, or you have pre-diabetes, diabetes, high blood pressure, joint pain, high cholesterol, sleep apnoea or cardiovascular disease.",
      "See a GP if you have a family history of obesity, or think you may have an eating disorder such as binge eating.",
      "Speak to the BHF's cardiac nurses on the Heart Helpline, Monday to Friday, 9am to 5pm.",
    ],
    tryThisWeek: [
      "See a GP if you want help.",
      "Mention any related conditions.",
      "Call the Heart Helpline with questions.",
    ],
    ask: "Which health risks matter most for me, and what checks would help?",
    interactive: {
      kind: "signs",
      title: "Day-to-day effects to mention",
      intro: "Tick any you have noticed. They are worth raising with a GP.",
      signs: ["Breathlessness", "Difficulty moving around", "Feeling very tired", "Joint or back pain", "Snoring or poor sleep", "Low mood or low energy"],
      after: "Mention these to a GP. Losing even a small amount of weight, 5 to 10% of your body weight, can improve your health.",
      copyHeading: "Things I have noticed",
    },
    sources: [NHS_OB, BHF_OB, DUK_WMS, DUK_LOSE],
    quiz: {
      question: "Which kind of fat carries the bigger health risk, says the BHF?",
      options: [{ text: "Visceral fat, around the organs", right: true }, { text: "The fat you can feel under the skin" }, { text: "All fat carries the same risk" }],
      why: "The bigger health risk comes from visceral fat, which sits around internal organs such as the heart and liver.",
    },
  },
  {
    id: "ob-small-loss",
    kicker: "Weight loss",
    question: "Does losing a little weight really help?",
    hook: "You do not need to reach a perfect number. Losing 5 to 10% of your body weight can already improve your health.",
    short: "Yes. The NHS says losing just a small amount of weight, 5 to 10% of your body weight, can improve your health. Diabetes UK says even 5% helps improve blood pressure and cholesterol, and many people feel better in their mood, have more energy and sleep better.",
    sections: [
      {
        heading: "Small numbers, real benefits",
        paragraphs: [
          "You can reduce your risk of many serious health conditions by losing weight. Just losing a small amount, 5 to 10% of your body weight, can improve your health.",
          "Diabetes UK says losing even 5% of your weight helps improve blood pressure and cholesterol levels. This can go a long way to reducing the risk of complications such as heart disease and stroke.",
        ],
      },
      {
        heading: "A first goal",
        paragraphs: [
          "If you have a lot of excess weight, the BHF suggests starting by aiming to lose 10% of your body weight. This will feel more achievable, and still has big health benefits even if your BMI is still classed as overweight afterwards.",
          "Research shows that the more weight you lose, the greater the health benefits, but even losing 5% of extra weight will improve your health.",
        ],
      },
      {
        heading: "How you might feel",
        paragraphs: [
          "Losing weight can give you more energy and help you feel better about yourself. Most people say they also feel better in their mood and sleep better.",
          "If you have type 2 diabetes, losing weight can help with your diabetes control too, and for some people it can mean going into remission.",
        ],
      },
      {
        heading: "One step at a time",
        paragraphs: [
          "The NHS suggests aiming to lose 1 to 2lbs, or half a kilo to 1kg, a week. You do not have to do everything at once: try one thing at a time and find what works for you.",
          "Try not to be disheartened if it takes a long time to reach your ideal weight. It probably took a long time to gain the weight too, and even small amounts of weight loss can be good for your health.",
        ],
      },
    ],
    helps: [
      "Set a realistic weight loss target, such as 5 to 10% of your body weight.",
      "Break your weight loss down into small goals and focus on each step at a time.",
      "Check how you are getting on by weighing yourself regularly.",
      "Be kind to yourself: changing habits and losing weight is not easy and takes time.",
      "Ask your healthcare team for help and advice.",
    ],
    tryThisWeek: [
      "Set a 5 to 10% goal.",
      "Pick one small step.",
      "Be kind to yourself.",
    ],
    ask: "What would a realistic first goal be for me, and how will we know it is helping?",
    interactive: {
      kind: "scenarios",
      title: "Measuring progress",
      scenarios: [
        {
          id: "bmi",
          situation: "You have lost 10% of your weight, but your BMI is still overweight.",
          options: [{ text: "Your health has still benefited", best: true }, { text: "It did not count" }],
          why: "Losing 10% of your body weight still has big health benefits, even if your BMI is still classed as overweight afterwards.",
        },
        {
          id: "pace",
          situation: "You are losing about 1lb a week.",
          options: [{ text: "That is within the NHS aim", best: true }, { text: "Too slow to matter" }],
          why: "The NHS suggests aiming to lose 1 to 2lbs, or half a kilo to 1kg, a week.",
        },
        {
          id: "stuck",
          situation: "The scales are slow to move, though you have kept going.",
          options: [{ text: "Keep going: it still helps your health", best: true }, { text: "Stop the changes" }],
          why: "Keep going with healthy changes. Even if you are not losing weight as quickly as you like, you will still improve your health.",
        },
        {
          id: "everything",
          situation: "You feel you have to change everything at once.",
          options: [{ text: "Try one thing at a time", best: true }, { text: "Change it all tomorrow" }],
          why: "You do not have to do everything at once: try one thing at a time and find what works for you.",
        },
      ],
    },
    sources: [NHS_OB, DUK_LOSE, BHF_STEPS, NHS_TIPS, NHS_BH_LOSE, DUK_HW, BHF_NOTLOSING],
    quiz: {
      question: "How much weight loss can improve your health, says the NHS?",
      options: [{ text: "5 to 10% of your body weight", right: true }, { text: "Only reaching a healthy BMI" }, { text: "At least half your body weight" }],
      why: "Just losing a small amount, 5 to 10% of your body weight, can improve your health.",
    },
  },
  {
    id: "ob-programmes",
    kicker: "Support",
    question: "What weight management programmes can I get?",
    hook: "Coaching, group support, online plans: some you can join yourself, others through your GP.",
    short: "Weight management programmes support you to lose weight safely and keep it off, with things like 1 to 1 coaching, group support, exercise classes and healthy eating advice. You can refer yourself to some, and a GP can refer you to others, including specialist services. If you live with obesity and have diabetes or high blood pressure, you may be able to join the free 12-week NHS Digital Weight Management Programme.",
    sections: [
      {
        heading: "What they offer",
        paragraphs: [
          "Weight management programmes can help support you to lose weight safely and keep the weight off. They might include 1 to 1 coaching, cognitive behavioural therapy (CBT), group support, online exercise classes, and healthy eating advice and recipes.",
          "Group support works well for some people. There's some evidence that joining a weight loss group leads to more successful weight loss than doing it alone.",
        ],
      },
      {
        heading: "Referring yourself",
        paragraphs: [
          "You might be able to refer yourself to local weight loss services without seeing a GP. To find out, check your GP surgery website or ask the reception staff, check your integrated care board (ICB) website, or search online for NHS weight management services near you.",
          "NHS Better Health also lists free and discounted plans, from free health programmes at local football clubs to discounted commercial plans.",
        ],
      },
      {
        heading: "Through your GP",
        paragraphs: [
          "A GP can give you advice about losing weight safely and refer you for treatment. If you need a lot of extra support, you may be referred to a specialist weight management service.",
          "You may also be able to get support from a dietitian to follow a very low calorie diet. These diets are not suitable or safe for everyone, and are usually only recommended if your weight is affecting other health conditions and you need to lose weight quickly.",
          "Your GP or practice nurse may also be able to tell you about local groups, or offer exercise on prescription, where you are referred for sessions with a qualified trainer.",
        ],
      },
      {
        heading: "The NHS Digital Weight Management Programme",
        paragraphs: [
          "This is a free, 12-week online programme for adults living with obesity who also have diabetes, high blood pressure or both. You use it on a smartphone or computer, in your own time, and choose a plan with recipes, nutrition advice, wellbeing support and activity tips.",
          "You can be referred if you are 18 or over, have a BMI of 30 or more, or 27 and a half or more for people from Black, Asian and ethnic minority backgrounds, and have diabetes, high blood pressure or both. Your GP surgery or pharmacist can refer you.",
        ],
      },
      {
        heading: "Choosing a commercial programme",
        paragraphs: [
          "If you are thinking about a commercial programme, Diabetes UK suggests asking questions first. Has a healthcare professional been involved? Are you getting all the nutrition you need? Does it give support and education?",
          "If you have diabetes, talk any new eating plan through with your diabetes team first. Starting a new diet will affect your medication or blood sugar levels.",
        ],
      },
    ],
    helps: [
      "Check your GP surgery website or ask reception about local weight management services you can refer yourself to.",
      "Ask a GP about a referral if you need more support to lose weight.",
      "If you live with obesity and have diabetes or high blood pressure, ask your GP surgery or pharmacist about the NHS Digital Weight Management Programme.",
      "Ask lots of questions about any commercial programme before you join.",
      "Ask your GP or practice nurse about local groups or exercise on prescription.",
    ],
    tryThisWeek: [
      "Check your GP surgery website.",
      "Ask about the digital programme.",
      "Ask questions before joining a plan.",
    ],
    ask: "Can I be referred to a weight management programme, and which one would suit me?",
    interactive: {
      kind: "flip-cards",
      title: "Kinds of support, card by card",
      intro: "Turn each card to see who it is for and what it offers.",
      cards: [
        { id: "self", front: "Local services", when: "Some you can join yourself", back: "Check your GP surgery website, ask reception, or search for NHS weight management services near you." },
        { id: "specialist", front: "Specialist service", when: "Through a GP referral", back: "For people who need a lot of extra support. It can include help from a dietitian." },
        { id: "digital", front: "NHS Digital Weight Management Programme", when: "With diabetes or high blood pressure", back: "Free, 12 weeks and online, on a smartphone or computer, in your own time." },
        { id: "plans", front: "Free and discounted plans", when: "Listed by NHS Better Health", back: "From free health programmes at local football clubs to discounted commercial plans." },
        { id: "group", front: "Group support", when: "Ask your GP or practice nurse", back: "Some evidence shows joining a weight loss group leads to more successful weight loss than going alone." },
      ],
    },
    sources: [NHS_OB, NHS_TIPS, NHSE_DWMP, NHSE_DWMP_ACCESS, NHS_BH_PROGS, NHS_BH_SUPPORT, BHF_STEPS, DUK_LOSE],
    quiz: {
      question: "Can you refer yourself to some weight management services?",
      options: [{ text: "Yes, some without seeing a GP", right: true }, { text: "No, only a hospital can refer you" }, { text: "Only if you pay privately" }],
      why: "You might be able to refer yourself to local weight loss services without seeing a GP.",
    },
  },
  {
    id: "ob-food",
    kicker: "Food",
    question: "What eating changes help weight loss last?",
    hook: "There is no single perfect diet. Find a way of eating you can keep doing, with fewer calories and plenty of veg.",
    short: "There is no single perfect way to lose weight. What matters most is finding a way of eating that helps you have fewer calories, stay healthy and fit into everyday life. The NHS suggests cutting around 600 calories a day, filling half your plate with vegetables and watching portion sizes.",
    sections: [
      {
        heading: "No single perfect diet",
        paragraphs: [
          "There is no single perfect way to lose weight. What matters most is finding a way of eating that helps you reduce calories, stay healthy and fit into your everyday life.",
          "Evidence shows the best approach is the one you are likely to stick to. Some people find eating less fat or carbohydrates works, some count calories, and others lower their calories on certain days.",
        ],
      },
      {
        heading: "Calories",
        paragraphs: [
          "If we regularly eat and drink more calories than the body needs, the extra energy is stored as fat over time. To lose weight, you need to eat and drink fewer calories than you do now.",
          "Aim to reduce your intake by around 600 calories a day, which the NHS calls a safe and sustainable way to lose weight. You do not have to change everything at once, and can split that into smaller steps through the day.",
        ],
      },
      {
        heading: "Building a plate",
        paragraphs: [
          "Try to include 2 or more portions of vegetables in your main meal, filling about half your plate. Most vegetables are high in fibre, low in calories, and help you feel fuller for longer.",
          "Include some protein in each meal, like beans, pulses, fish, eggs or lean meat. Keep starchy foods like potatoes, bread, rice and pasta to no more than a third of what you eat each day, and choose wholegrain versions when you can.",
        ],
      },
      {
        heading: "Portions and drinks",
        paragraphs: [
          "Large portions make it easier to eat more than we need. Smaller plates and bowls, serving yourself once, and eating without the TV on can help you notice when you are full.",
          "Drinks count too. Fruit juice and smoothies should be limited to 150ml a day in total, and alcohol can be high in calories and make you feel hungrier.",
        ],
      },
      {
        heading: "Balanced, not restrictive",
        paragraphs: [
          "Some plans suggest cutting out entire food groups, but this means you miss out on essential nutrients. The BHF suggests focusing on eating more fruit and vegetables, beans, wholegrains and oily fish instead.",
          "Do not skip meals, as you might end up snacking more because you feel hungry. If you have a medical condition, a special diet for your health, or an eating disorder now or in the past, talk to a GP before making changes.",
        ],
      },
    ],
    helps: [
      "Fill about half your plate with vegetables at your main meal.",
      "Aim to cut around 600 calories a day, in smaller steps across the day.",
      "Swap sugary drinks for water, and add slices of lemon or lime if you do not like the taste.",
      "Put snacks into a bowl or onto a plate rather than eating from the packet.",
      "Do not skip meals, and do not finish your plate if you are full.",
      "Talk to a GP first if you have a medical condition, a special diet for your health, or an eating disorder now or in the past.",
    ],
    tryThisWeek: [
      "Fill half your plate with veg.",
      "Swap one sugary drink for water.",
      "Put snacks in a bowl.",
    ],
    ask: "Could I see a dietitian, and what way of eating would suit me and my health?",
    interactive: {
      kind: "scenarios",
      title: "Everyday food moments",
      scenarios: [
        {
          id: "pasta",
          situation: "You are cooking pasta for dinner.",
          options: [{ text: "Weigh it before cooking", best: true }, { text: "Guess by eye" }],
          why: "Pasta and rice expand as they cook, so weighing them first will help you keep to portion sizes.",
        },
        {
          id: "crisps",
          situation: "You fancy a snack from a big bag of crisps.",
          options: [{ text: "Put some in a bowl", best: true }, { text: "Eat from the packet" }],
          why: "Do not eat straight from the packet. Put snacks into a bowl, so you can see how much you are having.",
        },
        {
          id: "full",
          situation: "You are full, but there is food left on your plate.",
          options: [{ text: "Save it for the next day", best: true }, { text: "Finish your plate" }],
          why: "Do not finish your plate if you are full. You can save leftover food for the next day.",
        },
        {
          id: "cut-out",
          situation: "A diet tells you to cut out a whole food group.",
          options: [{ text: "Choose a balanced way of eating", best: true }, { text: "Try it anyway" }],
          why: "Cutting out entire food groups means you miss out on essential nutrients.",
        },
      ],
    },
    sources: [NHS_BH_EAT, NHS_BH_CAL, NHS_TIPS, BHF_STEPS, BHF_MANAGE, DUK_LOSE],
    quiz: {
      question: "How many calories a day does the NHS suggest cutting to lose weight?",
      options: [{ text: "Around 600", right: true }, { text: "Around 60" }, { text: "Around 2,000" }],
      why: "Aim to reduce your intake by around 600 calories a day, which the NHS calls a safe and sustainable way to lose weight.",
    },
  },
  {
    id: "ob-medicines",
    kicker: "Treatment",
    question: "How do weight loss medicines work, and who can have them?",
    hook: "Injections that reduce appetite, and a capsule that stops some fat being absorbed. All work alongside food and activity changes.",
    short: "Depending on your BMI and any health conditions affected by your weight, you may be able to have a medicine to help you lose weight. Injections such as semaglutide (Wegovy), tirzepatide (Mounjaro) and liraglutide reduce appetite and help you feel fuller for longer, while orlistat stops your body absorbing as much fat. They are prescribed alongside diet and lifestyle advice.",
    sections: [
      {
        heading: "Who they are for",
        paragraphs: [
          "Depending on your BMI, and if you have other health conditions affected by your weight, you may be able to have medicines to help you lose weight. On the NHS they are only suitable for some people.",
          "Who can have one depends on things like your BMI, any weight-related health conditions, and whether a healthcare professional thinks the medicine is right for you. Only take a weight loss medicine if it has been prescribed for you, as these medicines can cause serious side effects.",
        ],
      },
      {
        heading: "The injections",
        paragraphs: [
          "Semaglutide (Wegovy), tirzepatide (Mounjaro) and liraglutide (Saxenda) reduce your appetite and help you feel fuller for longer. Semaglutide and liraglutide are GLP-1 agonists, and tirzepatide also acts on a second gut hormone, GIP.",
          "Semaglutide and tirzepatide are injected once a week, and liraglutide once a day, into the fatty areas of the thigh, tummy or upper arm.",
          "In a study reported by the BHF, people with obesity lost just over 20% of their body weight on tirzepatide and nearly 14% on semaglutide, over around a year and a half.",
        ],
      },
      {
        heading: "Orlistat",
        paragraphs: [
          "Orlistat works by reducing how much fat is absorbed into your body. A third of the fat from your food is passed out in your poo.",
          "It comes as capsules taken 3 times a day with a meal. You'll only be prescribed it if you have a BMI of 30 or more, or 28 or more with a weight-related condition such as type 2 diabetes or high blood pressure.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Common side effects of the injections include feeling or being sick, constipation, diarrhoea and feeling tired. Orlistat can cause fatty or oily poo, needing to poo urgently or more often, and farting.",
          "Serious side effects can happen, but most are rare. They include an inflamed pancreas, which can cause severe pain in your stomach or back that does not go away. Call NHS 111 if you think you might be having serious side effects.",
        ],
      },
      {
        heading: "Alongside other changes",
        paragraphs: [
          "Weight loss medicines are usually prescribed alongside diet and lifestyle advice. You'll need to eat a balanced diet with fewer calories and do regular physical activity while taking them.",
          "After you stop taking the medicines, you should be offered support to help you stay a healthy weight. Talk to your doctor if you want to stop an injection, and do not stop suddenly.",
          "If you get one privately, buy it from a registered pharmacy. Some websites sell fake weight loss medicines.",
        ],
      },
    ],
    helps: [
      "Ask your GP whether a weight loss medicine could be right for you, and about the side effects, benefits and limits.",
      "If you get a private prescription, buy it from a registered pharmacy.",
      "Speak to a pharmacist or doctor about side effects that bother you or do not go away.",
      "Call NHS 111 if you think you might be having serious side effects.",
      "Tell your doctor if you are pregnant, breastfeeding or planning a pregnancy, as these medicines are not used in pregnancy.",
      "Avoid alcohol while using the injections, as it can make feeling or being sick worse.",
    ],
    tryThisWeek: [
      "Ask your GP if a medicine could suit you.",
      "Use only a registered pharmacy.",
      "Know when to call 111.",
    ],
    ask: "Would a weight loss medicine be an option for me, and what support comes with it?",
    interactive: {
      kind: "flip-cards",
      title: "The medicines, card by card",
      intro: "Turn each card to see how often it is taken and how it works.",
      cards: [
        { id: "semaglutide", front: "Semaglutide (Wegovy)", when: "An injection once a week", back: "A GLP-1 agonist. Reduces your appetite and helps you feel fuller for longer." },
        { id: "tirzepatide", front: "Tirzepatide (Mounjaro)", when: "An injection once a week", back: "Acts on two gut hormones, GLP-1 and GIP, to reduce appetite and help you feel fuller." },
        { id: "liraglutide", front: "Liraglutide (Saxenda)", when: "An injection once a day", back: "A GLP-1 agonist. Reduces your appetite and helps you feel fuller for longer." },
        { id: "orlistat", front: "Orlistat", when: "Capsules 3 times a day with a meal", back: "Reduces how much fat is absorbed. A third of the fat from food passes out in your poo." },
      ],
    },
    sources: [NHS_OB, NHS_SEMA, NHS_TIRZ, NHS_LIRA, NHS_ORL, NHS_BH_LOSE, BHF_MVW, BHF_MANAGE],
    quiz: {
      question: "How does orlistat work?",
      options: [{ text: "It reduces how much fat your body absorbs", right: true }, { text: "It speeds up your heart rate" }, { text: "It replaces meals" }],
      why: "Orlistat works by reducing how much fat is absorbed into your body.",
    },
  },
  {
    id: "ob-surgery",
    kicker: "Surgery",
    question: "What does weight loss surgery involve?",
    hook: "A smaller stomach, so you feel full sooner. It is a big step, with check-ups for life.",
    short: "Weight loss surgery, also called bariatric surgery, makes the stomach smaller so it feels fuller sooner and less food is eaten. On the NHS you'll usually need a BMI of 40 or more, or 35 to 40 with a condition that might improve with weight loss, and to have tried other ways to lose weight. Afterwards there are changes to how you eat and follow-up appointments for the rest of your life.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Weight loss surgery, sometimes called bariatric surgery, is a treatment for people living with severe obesity. It makes the stomach smaller so it feels fuller sooner and less food is eaten.",
          "The main types are gastric bypass, gastric band, gastric balloon and sleeve gastrectomy. Gastric bypass, gastric band and sleeve gastrectomy are done by keyhole surgery while you are asleep under general anaesthetic.",
          "For people with type 2 diabetes, Diabetes UK says surgery is now seen as a treatment for the diabetes itself. It can put type 2 diabetes into remission for some people.",
        ],
      },
      {
        heading: "Who it is for",
        paragraphs: [
          "Weight loss surgery may be available on the NHS if you have a BMI of 40 or more, or a BMI between 35 and 40 and a condition that might improve if you lost weight, such as high blood pressure, diabetes, arthritis or breathing problems. You'll usually need to have tried to lose weight through a healthy diet, exercise and medicine, and to agree to lifestyle changes and regular check-ups.",
          "If you have a South Asian, Chinese, other Asian, Middle Eastern, Black African or African-Caribbean family background, surgery may be considered at a lower BMI. Availability varies across the UK.",
        ],
      },
      {
        heading: "The types",
        paragraphs: [
          "In a gastric bypass, the stomach is divided with staples to make a small pouch at the top, which is joined to the lower part of the small intestine. In a sleeve gastrectomy, around 80% of the stomach is removed to make it much smaller.",
          "A gastric band is a silicone band placed around the top of the stomach and tightened to create 2 smaller stomach areas. A gastric balloon is swallowed empty and then filled with salt water once it is in the stomach.",
        ],
      },
      {
        heading: "Before and after",
        paragraphs: [
          "Before surgery, your GP will refer you to a team of specialists who check your physical health, your mental wellbeing and your eating patterns. These checks help decide whether surgery is suitable and which type would be recommended.",
          "You'll usually go home 1 to 3 days after surgery, and recovery usually takes 4 to 6 weeks. A typical plan moves from fluids in the first 2 weeks, to runny food, then soft food, then gradually back to a healthy, balanced diet from week 8.",
          "You'll need to eat slowly, chew carefully, eat small amounts at a time and take vitamin and mineral supplements. Follow-up appointments continue for the rest of your life.",
        ],
      },
      {
        heading: "Getting help quickly",
        paragraphs: [
          "Weight loss surgery is a common and safe procedure, but as with any operation there are risks, such as blood clots, wound infection and a stomach leak. Your doctor will explain these to you.",
          "Call 999 or go to A&E if you have difficulty breathing or chest pains with pain and swelling in your leg, severe tummy pain, or you are vomiting blood. Ask for an urgent GP appointment or get help from NHS 111 if you have a high temperature, a fast heartbeat, tummy pain, difficulty swallowing or regular vomiting after surgery.",
        ],
      },
    ],
    helps: [
      "Speak to your GP if you think weight loss surgery might be an option for you.",
      "After surgery, eat slowly, chew carefully and eat small amounts at a time.",
      "Take the vitamin and mineral supplements you are given, and go to your blood tests and appointments.",
      "Avoid pregnancy for 12 to 18 months after surgery, until your weight has stabilised, and remember your fertility may increase.",
      "Call 999 or go to A&E for severe tummy pain, or for leg pain and swelling with chest pains or difficulty breathing.",
      "Ask for an urgent GP appointment or get help from NHS 111 for a high temperature, a fast heartbeat, tummy pain, difficulty swallowing or regular vomiting.",
    ],
    tryThisWeek: [
      "Ask your GP if surgery is an option.",
      "Learn the 999 and 111 signs.",
      "Keep up your blood tests.",
    ],
    ask: "Would weight loss surgery be an option for me, and what would the assessment involve?",
    interactive: {
      kind: "timeline",
      title: "Eating after surgery",
      steps: [
        { id: "fluids", when: "First 2 weeks", title: "Water and fluids", points: ["Such as thin soup.", "Eat slowly and only small amounts."] },
        { id: "runny", when: "Weeks 3 and 4", title: "Runny food", points: ["Such as yoghurt or puréed food."] },
        { id: "soft", when: "Weeks 5 to 8", title: "Soft food", points: ["Such as mashed potato.", "Start to return to normal activities after 4 to 6 weeks."] },
        { id: "balanced", when: "Week 8 onwards", title: "A balanced diet", points: ["Gradually return to a healthy, balanced diet.", "Keep taking vitamin and mineral supplements."] },
        { id: "follow-up", when: "For life", title: "Check-ups", points: ["A weight loss surgery clinic for at least 2 years.", "Then usually a GP check-up once a year."] },
      ],
    },
    sources: [NHS_WLS_WHAT, NHS_WLS_WHY, NHS_WLS_PREP, NHS_WLS_HOW, NHS_WLS_REC, NHS_WLS_COMP, DUK_WLS],
    quiz: {
      question: "How much of the stomach is removed in a sleeve gastrectomy?",
      options: [{ text: "Around 80%", right: true }, { text: "Around 10%" }, { text: "None of it" }],
      why: "In a sleeve gastrectomy, around 80% of the stomach is removed to make it much smaller.",
    },
  },
  {
    id: "ob-activity",
    kicker: "Activity",
    question: "How can I get more active, starting from where I am?",
    hook: "Start small, even 5 or 10 minutes. Every bit of extra movement counts.",
    short: "Being active helps you manage your weight, and people who move more alongside improving their diet are often more successful at losing weight and keeping it off. Adults are advised to build up to at least 150 minutes of moderate activity a week, but every minute counts. Start small, find something you enjoy and build up gradually.",
    sections: [
      {
        heading: "Why it helps",
        paragraphs: [
          "Changing what you eat can help you lose weight, but moving more can help you keep the weight off. People who increase their activity alongside improving their diet are often more successful at losing weight and keeping it off.",
          "Being active can also give you more energy, lower anxiety and stress, help you sleep better and boost your mood.",
        ],
      },
      {
        heading: "How much",
        paragraphs: [
          "Adults should aim for at least 150 minutes of moderate activity a week, around 20 to 30 minutes a day, and strengthening activities on at least 2 days a week.",
          "Moderate activity raises your heart rate and makes you breathe faster and feel warmer. One way to tell is that you can still talk, but not sing.",
        ],
      },
      {
        heading: "Start small",
        paragraphs: [
          "Being active does not need to be intense exercise. It can be as simple as a 15-minute walk in the morning, and a session could be as little as 5 or 10 minutes.",
          "Stand rather than sit when you can, get off the bus a stop early, or take the stairs instead of the lift. Everyday activities like housework and gardening count too.",
        ],
      },
      {
        heading: "At your own pace",
        paragraphs: [
          "Speak to your GP first if you have not exercised for some time, or if you have medical conditions or concerns. Make sure your activity, and how hard you work, suit your fitness.",
          "Whatever your level of physical ability, there will be an activity or sport for you. If you use a wheelchair, options include adapted gym equipment, swimming and wheelchair sports.",
        ],
      },
      {
        heading: "Keep it going",
        paragraphs: [
          "You are far more likely to stick with something you enjoy. Tracking your steps or active minutes, being active with friends, and setting a reminder to move every 30 minutes can all help.",
          "If you miss a day, do not worry. Just make sure you start again when you can.",
        ],
      },
    ],
    helps: [
      "Start with 5 or 10 minutes and build up gradually.",
      "Find an activity you enjoy, and make it social by meeting a friend.",
      "Set a reminder to get up and move every 30 minutes during the day.",
      "Try a free plan for beginners, such as the NHS Active 10 app or Couch to 5K.",
      "Speak to your GP first if you have not exercised for some time or have a medical condition.",
    ],
    tryThisWeek: [
      "Take a 10-minute walk.",
      "Set a reminder to move.",
      "Invite a friend along.",
    ],
    ask: "What kind of activity is safe and realistic for me to start with?",
    interactive: {
      kind: "scenarios",
      title: "Moving more, your way",
      scenarios: [
        {
          id: "start",
          situation: "You have not been active for years.",
          options: [{ text: "Start with a 5 or 10 minute walk", best: true }, { text: "Book the hardest class you can find" }],
          why: "Being active does not need to be intense exercise. A session could be as little as 5 or 10 minutes.",
        },
        {
          id: "wheelchair",
          situation: "You use a wheelchair.",
          options: [{ text: "Try adapted gyms or wheelchair sports", best: true }, { text: "Assume activity is not for you" }],
          why: "Whatever your level of physical ability, there will be an activity or sport for you.",
        },
        {
          id: "missed",
          situation: "You missed a few days of activity.",
          options: [{ text: "Start again when you can", best: true }, { text: "Give up for good" }],
          why: "If you miss a day, do not worry. Just make sure you start again when you can.",
        },
        {
          id: "effort",
          situation: "You are not sure if you are working hard enough.",
          options: [{ text: "Try the talk test", best: true }, { text: "Keep going until it hurts" }],
          why: "Moderate activity raises your heart rate. One way to tell is that you can still talk, but not sing.",
        },
      ],
    },
    sources: [NHS_PA, NHS_BH_ACTIVE, BHF_MANAGE, BHF_ACTIVE, NHS_WHEELCHAIR, NHS_BH_LOSE],
    quiz: {
      question: "How can you tell activity is at a moderate level?",
      options: [{ text: "You can still talk, but not sing", right: true }, { text: "You cannot say a word" }, { text: "You are not breathing any faster" }],
      why: "One way to tell is that you can still talk, but not sing.",
    },
  },
  {
    id: "ob-stigma",
    kicker: "Support",
    question: "What is weight stigma, and how can I talk to my doctor about weight?",
    hook: "Blame does not help anyone get well. Care that sees the whole person does.",
    short: "Diabetes UK says weight-related stigma can cause physical and psychological harm, and people affected by stigma are less likely to receive adequate health care. Blaming people who have obesity fuels stigma. If you would like help with your weight, you can raise it with your GP, and a realistic target for you is something to talk through together.",
    sections: [
      {
        heading: "What stigma does",
        paragraphs: [
          "Weight-related stigma can lead to physical and psychological harm. Research shows that people affected by stigma are less likely to receive adequate health care, which Diabetes UK calls unacceptable.",
          "Diabetes UK says that blaming people who have obesity fuels stigma and isolates those who need help the most. It has joined more than 100 medical and scientific organisations in a pledge to end obesity stigma.",
        ],
      },
      {
        heading: "Not a personal failing",
        paragraphs: [
          "Obesity is a complex condition. Family history, and social and environmental factors such as your living situation, can contribute to it, and these are not always within your control.",
          "If you think you are living with excess weight or obesity, remember you are not alone. If you have struggled with weight loss before, you are not alone in that either.",
        ],
      },
      {
        heading: "What good care looks like",
        paragraphs: [
          "Diabetes UK says healthcare professionals should take a person-centred approach to discussing weight and health, and use appropriate language.",
          "Your healthcare professional should support you, and can tell you what other NHS support is available, such as referral to a dietitian or weight management services. A realistic target for you is something you can talk through together.",
        ],
      },
      {
        heading: "Raising it with your GP",
        paragraphs: [
          "If you are concerned about your weight and would like help to start managing it, you can speak to your GP. A GP can give you advice about losing weight safely and refer you for treatment.",
          "A GP can also help you get support for any other conditions that might be affecting your weight, such as mental health conditions.",
          "If you have kept a food and activity diary, you can take it with you. Your GP can see if you need any further tests or other options.",
        ],
      },
    ],
    helps: [
      "Speak to your GP if you would like help to start managing your weight.",
      "Ask what NHS support is available, such as a dietitian or a weight management service.",
      "Talk to your healthcare professional about what a realistic target is for you.",
      "Ask about support for any other conditions that might be affecting your weight, including your mental health.",
      "Take a food and activity diary to your appointment if you have kept one.",
    ],
    tryThisWeek: [
      "Book a GP chat when you are ready.",
      "Ask what support is available.",
      "Take your diary along.",
    ],
    ask: "What support is available for me, and what would a realistic target look like?",
    interactive: {
      kind: "scenarios",
      title: "Conversations about weight",
      scenarios: [
        {
          id: "blame",
          situation: "You feel you are to blame for your weight.",
          options: [{ text: "Remember it is a complex condition", best: true }, { text: "Keep it to yourself" }],
          why: "Obesity is a complex condition, and some of the factors that contribute to it are not always within your control.",
        },
        {
          id: "awkward",
          situation: "You would like help, but feel awkward raising it.",
          options: [{ text: "Tell your GP you would like help", best: true }, { text: "Wait until someone asks" }],
          why: "If you are concerned about your weight and would like help to start managing it, you can speak to your GP.",
        },
        {
          id: "target",
          situation: "A healthy weight BMI feels out of reach.",
          options: [{ text: "Talk about a realistic target for you", best: true }, { text: "Decide nothing is worth trying" }],
          why: "There may be a difference between a healthy weight BMI and a reasonable target for you. You can talk this through with your healthcare professional.",
        },
        {
          id: "mood",
          situation: "You think low mood is affecting your eating.",
          options: [{ text: "Mention it: a GP can help with that too", best: true }, { text: "Leave it out of the conversation" }],
          why: "A GP can also help you get support for any other conditions that might be affecting your weight, such as mental health conditions.",
        },
      ],
    },
    sources: [DUK_STIGMA_REPORT, DUK_OB_STIGMA, DUK_HW, NHS_OB, BHF_MANAGE, NHS_BH_LOSE, BHF_NOTLOSING],
    quiz: {
      question: "What does Diabetes UK say people affected by weight stigma are less likely to get?",
      options: [{ text: "Adequate health care", right: true }, { text: "Food labels" }, { text: "A BMI result" }],
      why: "Research shows that people affected by stigma are less likely to receive adequate health care.",
    },
  },
  {
    id: "ob-mood",
    kicker: "Wellbeing",
    question: "How are mood, stress and eating connected?",
    hook: "Eating in response to feelings is human. Noticing why can be the first step.",
    short: "It is part of being human to eat in response to feelings, and there is nothing wrong with using food to cope some of the time. Stress can change how much we eat, and overweight and obesity can be difficult to live with emotionally. If eating feels out of your control, or your mood is low, talk to a GP: support and talking therapies can help.",
    sections: [
      {
        heading: "Eating and feelings",
        paragraphs: [
          "It's part of being human to eat in response to our feelings, from frustration and worry to celebration. There's nothing wrong with using food to cope with feelings some of the time.",
          "It becomes a problem when, rather than noticing a feeling, we find ourselves eating instead. Sometimes it can help to find ways to identify, express and manage emotions, rather than dull them with food.",
        ],
      },
      {
        heading: "Stress",
        paragraphs: [
          "Stress can make us behave differently, including how much we eat or exercise. You might snack more, or eat more than usual because you are less mindful at mealtimes.",
          "Overweight and obesity can be difficult to live with, both physically and emotionally.",
        ],
      },
      {
        heading: "Noticing what is going on",
        paragraphs: [
          "Diabetes UK describes stomach hunger, the body's signal that it needs to be fed, and heart hunger, a desire for food that comes from an emotion, memory or thought. Before reaching for food, it can help to ask yourself whether you are actually hungry.",
          "A food and mood diary can track what you eat and how you feel before and after. Even just spotting the reason you are eating is an important first step.",
        ],
      },
      {
        heading: "Binge eating disorder",
        paragraphs: [
          "Binge eating disorder involves regularly eating a lot of food over a short time until you are uncomfortably full, without feeling in control. It's a serious mental health condition, and people may feel guilty or ashamed afterwards.",
          "If you think you may have it, see a GP as soon as you can. Most people recover with the right support and treatment, such as guided self-help or cognitive behavioural therapy (CBT).",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "You can refer yourself to NHS talking therapies for low mood, worry, depression and anxiety without seeing a GP. A GP can refer you for help with an eating disorder.",
          "If you need urgent help for your mental health, get help from 111 online or call 111 and select the mental health option, or ask for an urgent GP appointment. You can call Samaritans on 116 123. Call 999 or go to A&E now if you do not feel you can keep yourself safe.",
        ],
      },
    ],
    helps: [
      "Try a food and mood diary to see how eating and feelings link up.",
      "Before reaching for food, ask yourself whether you are actually hungry.",
      "Find other ways to express feelings, such as talking to a friend, writing it down or being active.",
      "If you think you may have binge eating disorder, see a GP as soon as you can, or call Beat's adult helpline on 0808 801 0677.",
      "Refer yourself to NHS talking therapies if you have low mood or worry.",
      "For urgent help, call 111 and select the mental health option, or call Samaritans on 116 123. Call 999 if you cannot keep yourself safe.",
    ],
    tryThisWeek: [
      "Start a food and mood diary.",
      "Ask: am I actually hungry?",
      "Talk to a friend or write it down.",
    ],
    ask: "Could support for my mood or eating help, and how do I get it?",
    interactive: {
      kind: "signs",
      title: "Worth talking to a GP about",
      intro: "Tick any that sound familiar. They are worth raising with a GP.",
      signs: ["Eating a lot of food in a short time", "Not being able to stop when full", "Eating when not hungry", "Eating alone or secretly", "Feeling guilty or ashamed after eating", "Feeling worried, overwhelmed or low"],
      after: "See a GP. For urgent help, call 111 and select the mental health option, or call Samaritans on 116 123. Call 999 if you cannot keep yourself safe.",
      copyHeading: "What I would like to talk about",
    },
    sources: [DUK_EMO, DUK_FEELINGS, NHS_BINGE, NHS_STRESS, NHS_TALK, NHS_URGENT, BHF_NOTLOSING, NHS_OB],
    quiz: {
      question: "What does Diabetes UK call a desire for food that comes from an emotion, memory or thought?",
      options: [{ text: "Heart hunger", right: true }, { text: "Stomach hunger" }, { text: "Mouth hunger" }],
      why: "Heart hunger is a desire for food that comes from an emotion, memory or thought.",
    },
  },
  {
    id: "ob-keeping-off",
    kicker: "Living well",
    question: "How can I keep the weight off once I have lost it?",
    hook: "Holding steady is a success too. Habits you can live with matter more than a perfect plan.",
    short: "Keeping to a healthy weight after losing weight can be difficult, but your healthcare professional can help. Diabetes UK and the NHS suggest staying active for 60 to 90 minutes a day, eating a balanced diet and checking your weight and waist regularly. If a few pounds come back, try not to panic or give yourself a hard time.",
    sections: [
      {
        heading: "Why it can be hard",
        paragraphs: [
          "Keeping to a healthy weight and avoiding weight gain after losing weight can be difficult. When you lose weight, you need less energy to maintain a smaller body, which is one reason weight loss can slow down or stop.",
          "Holidays, life events and religious festivals can also halt progress. If you can keep the weight you have already lost through these times, and start losing again afterwards, you are doing well.",
        ],
      },
      {
        heading: "Stay active",
        paragraphs: [
          "To help keep the weight off, try to stay active for 60 to 90 minutes a day. This does not need to be intense exercise: taking the stairs, gardening, housework, walking and swimming all count.",
          "Avoid sitting down for long periods. People who increase their activity alongside improving their diet are often more successful at losing weight and keeping it off.",
        ],
      },
      {
        heading: "Habits you can keep",
        paragraphs: [
          "Once you reach a weight that is healthy for you, you can stop recording every meal. The goal now is to learn which habits help you stay at that weight.",
          "To keep the weight from coming back, make changes you can stick with in the long run. It can help not to think about a diet, but rather a lifestyle approach you can keep to over a long time.",
        ],
      },
      {
        heading: "Keep an eye on it",
        paragraphs: [
          "Get into the habit of measuring your waist and weighing yourself regularly. This helps you spot changes and get back on track if you have recently put weight on.",
          "You can also notice how your body feels, such as your clothes feeling looser or walking feeling easier.",
        ],
      },
      {
        heading: "If weight comes back",
        paragraphs: [
          "If you put on a few pounds, do not panic or give yourself a hard time. Look at what may have caused it, and ask your healthcare professional for support to get back on track.",
          "After you stop taking a weight loss medicine, you should be offered support to help you stay a healthy weight.",
        ],
      },
    ],
    helps: [
      "Aim for 60 to 90 minutes of activity a day, including everyday things like gardening and housework.",
      "Weigh yourself and measure your waist regularly.",
      "Plan ahead for celebrations, holidays and busy days, and write the plan down.",
      "If a few pounds come back, look at what may have caused it and ask your healthcare professional for support.",
      "Keep a food and activity diary for a few days to find small, sustainable changes that work for you.",
    ],
    tryThisWeek: [
      "Add a little more daily activity.",
      "Check your weight and waist.",
      "Write a plan for a busy day.",
    ],
    ask: "What support can I get to keep the weight off, and how often should we check in?",
    interactive: {
      kind: "timeline",
      title: "After the weight comes off",
      steps: [
        { id: "early", when: "First few weeks", title: "Quick early losses", points: ["You can lose a lot at first as the body uses stored energy.", "Water is lost from the body too."] },
        { id: "steady", when: "After that", title: "A steadier pace", points: ["Weight loss tends to settle at a slower rate.", "Around 1lb to 2lb a week at most."] },
        { id: "events", when: "Holidays and festivals", title: "Holding steady counts", points: ["Progress may pause.", "Keeping the weight you have lost means you are doing well."] },
        { id: "healthy", when: "At a healthy weight for you", title: "New habits", points: ["You can stop recording every meal.", "Stay active for 60 to 90 minutes a day."] },
        { id: "regain", when: "If a few pounds return", title: "No need to panic", points: ["Look at what may have caused it.", "Ask your healthcare professional for support."] },
      ],
    },
    sources: [DUK_HW, NHS_BH_CAL, BHF_PLATEAU, BHF_NOTLOSING, NHS_OB, NHS_BH_ACTIVE, BHF_STEPS],
    quiz: {
      question: "How much daily activity can help keep weight off after losing it?",
      options: [{ text: "60 to 90 minutes", right: true }, { text: "5 minutes" }, { text: "None at all" }],
      why: "To help keep the weight off, try to stay active for 60 to 90 minutes a day.",
    },
  },
];
