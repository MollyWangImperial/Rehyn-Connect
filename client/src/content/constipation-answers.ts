import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Constipation page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, NHS
// inform, Guts UK and the British Dietetic Association, with the NICE Clinical Knowledge Summary on
// constipation for a few background points. General information only; it never replaces what a person's
// own GP, nurse or pharmacist tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const guts = (label: string, path: string): LearnSource => ({ label: `Guts UK: ${label}`, url: `https://gutscharity.org.uk/${path}` });
const cks = (label: string, path: string): LearnSource => ({ label: `NICE CKS: Constipation, ${label}`, url: `https://cks.nice.org.uk/topics/constipation/${path}` });

const NHS_CON = nhs("Constipation", "conditions/constipation/");
const NHS_LAX = nhs("Laxatives", "medicines/laxatives/");
const NHS_LACTULOSE = nhs("Lactulose", "medicines/lactulose/");
const NHS_MACROGOL = nhs("Macrogol", "medicines/macrogol/");
const NHS_SENNA = nhs("Senna", "medicines/senna/");
const NHS_DOCUSATE = nhs("About docusate", "medicines/docusate/about-docusate/");
const NHS_BISACODYL = nhs("About bisacodyl", "medicines/bisacodyl/about-bisacodyl/");
const NHS_CODEINE = nhs("Codeine", "medicines/codeine/");
const NHS_MORPHINE = nhs("Morphine", "medicines/morphine/");
const NHS_FERROUS = nhs("Side effects of ferrous sulfate", "medicines/ferrous-sulfate/side-effects-of-ferrous-sulfate/");
const NHS_FIBRE = nhs("How to get more fibre into your diet", "live-well/eat-well/digestive-health/how-to-get-more-fibre-into-your-diet/");
const NHS_DIGESTION = nhs("Good foods to help your digestion", "live-well/eat-well/digestive-health/good-foods-to-help-your-digestion/");
const NHS_WATER = nhs("Water, drinks and hydration", "live-well/eat-well/food-guidelines-and-food-labels/water-drinks-nutrition/");
const NHS_DEHYDRATION = nhs("Dehydration", "conditions/dehydration/");
const NHS_BOWEL_CANCER = nhs("Symptoms of bowel cancer", "conditions/bowel-cancer/symptoms/");
const NHS_BLEEDING = nhs("Bleeding from the bottom (rectal bleeding)", "symptoms/bleeding-from-the-bottom-rectal-bleeding/");
const NHS_BOWEL_INC = nhs("Bowel incontinence", "conditions/bowel-incontinence/");
const NHS_PILES = nhs("Piles (haemorrhoids)", "conditions/piles-haemorrhoids/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");
const NHS_ACTIVITY_OLDER = nhs("Physical activity guidelines for older adults", "live-well/exercise/physical-activity-guidelines-older-adults/");

const INFORM_CON: LearnSource = { label: "NHS inform: Constipation", url: "https://www.nhsinform.scot/illnesses-and-conditions/stomach-liver-and-gastrointestinal-tract/constipation/" };

const GUTS_CON = guts("Constipation", "advice-and-information/symptoms/constipation/");
const GUTS_FIBRE = guts("Fibre", "advice-and-information/health-and-lifestyle/fibre-information/");
const GUTS_TRAVEL = guts("Five tips for travelling with grumpy guts", "2025/06/gut-tips-for-travel/");
const GUTS_FESTIVE = guts("Understanding your guts at Christmas", "2021/12/understanding-your-guts-at-christmas/");

const BDA_FIBRE: LearnSource = { label: "British Dietetic Association: Fibre food fact sheet", url: "https://www.bda.uk.com/resource/fibre.html" };

const CKS_DEF = cks("definition", "background-information/definition/");
const CKS_RISK = cks("risk factors", "background-information/risk-factors/");
const CKS_SECONDARY = cks("secondary causes", "background-information/secondary-causes/");
const CKS_PROGNOSIS = cks("prognosis", "background-information/prognosis/");
const CKS_ADULTS = cks("management in adults", "management/adults/");

export const constipationAnswers: LearnArticle[] = [
  {
    id: "con-what-it-is",
    kicker: "Understanding",
    question: "What is constipation, and what counts as normal?",
    hook: "Not everyone needs to go every day. What matters is a change from what is normal for you, and how hard it is to go.",
    short: "Constipation is where you have changes to how you poo, including not pooing as often or finding it hard to poo. It is common, it affects people of all ages, and it does not usually mean anything is seriously wrong. Healthy bowels can open anywhere from three times a day to three times a week.",
    sections: [
      {
        heading: "What it means",
        paragraphs: [
          "Constipation is where you have changes to how you poo, including not pooing as often or finding it hard to poo. It is common and it affects people of all ages.",
          "Guts UK says it is a symptom that can mean different things to different people. The usual meaning is having difficulty opening your bowels, or not opening them very often.",
        ],
      },
      {
        heading: "What is normal",
        paragraphs: [
          "There is a common belief that people need to open their bowels every day, but this is not the case. In healthy people, it can vary from three times a day to three times a week.",
          "Some adults go to the toilet more than once a day, while others may only go every 3 or 4 days. In practice, constipation is often described as passing stools less often than your own normal pattern.",
        ],
      },
      {
        heading: "The signs",
        paragraphs: [
          "It is likely to be constipation if you have not had a poo at least 3 times during the last week, or you are pooing less often than usual. The poo may be unusually large or small, and dry, hard or lumpy.",
          "You may be straining or in pain when you poo, or feel that you have not fully emptied your bowels. You may also have a stomach ache and feel bloated or sick.",
        ],
      },
      {
        heading: "Reading your poo",
        paragraphs: [
          "The Bristol Stool Chart is a way of identifying constipation. Constipation generally means poo that is type 1 or type 2 on the chart, which is often hard and difficult to pass.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "Constipation usually happens when stools stay in the colon, the large intestine, for too long. The colon absorbs too much water from them, so they become hard and dry.",
          "It does not usually mean that anything is seriously wrong. Most people's constipation is temporary and clears up with simple lifestyle measures.",
        ],
      },
    ],
    helps: [
      "Eat a healthy balanced diet and gradually increase the fibre in your diet.",
      "Drink plenty of water and other fluids, and avoid alcohol.",
      "Keep to a regular time and place for the toilet, and do not delay if you feel the urge to poo.",
      "Go for a daily walk or run, which can help you poo more regularly.",
      "Speak to a pharmacist if diet and lifestyle changes are not helping.",
    ],
    tryThisWeek: [
      "Add fibre to your diet gradually.",
      "Do not delay when you feel the urge.",
      "Go for a daily walk.",
    ],
    ask: "Is what I am noticing constipation, and what is a normal pattern for me?",
    interactive: {
      kind: "signs",
      title: "Is it constipation?",
      intro: "Tick what you have noticed. The ones you tick make a short list to take to a pharmacist or GP.",
      signs: [
        "Fewer than 3 poos in the last week",
        "Pooing less often than usual",
        "Poo that is dry, hard or lumpy",
        "Poo that is unusually large or small",
        "Straining or pain when I poo",
        "Feeling I have not fully emptied",
        "Stomach ache",
        "Feeling bloated or sick",
      ],
      after: "Simple changes to your diet and lifestyle can usually help. Speak to a pharmacist if they are not helping.",
      copyHeading: "What I have noticed about my bowels",
    },
    sources: [NHS_CON, GUTS_CON, INFORM_CON, CKS_DEF],
    quiz: {
      question: "Do you need to poo every day for your bowels to be normal?",
      options: [{ text: "No, it can vary from person to person", right: true }, { text: "Yes, at least once a day" }, { text: "Yes, at least twice a day" }],
      why: "There is a common belief that people need to open their bowels every day, but this is not the case.",
    },
  },
  {
    id: "con-causes",
    kicker: "Causes",
    question: "Why do I get constipated?",
    hook: "Usually everyday things: not enough fibre or fluid, sitting still, holding on, a change of routine or a medicine.",
    short: "Constipation has many possible causes, and sometimes there is no obvious reason. The most common are not eating enough fibre, not drinking enough fluids, not moving enough, ignoring the urge to go, a change in diet or routine, a side effect of medicine, and stress, anxiety or depression. Rarely, it is caused by a medical condition.",
    sections: [
      {
        heading: "Often no single reason",
        paragraphs: [
          "Constipation in adults has many possible causes. Sometimes there is no obvious reason.",
          "Most cases are not caused by a specific condition, and it can be difficult to find the exact cause. Several things can make it more likely, though.",
        ],
      },
      {
        heading: "Food, drink and moving",
        paragraphs: [
          "The most common causes include not eating enough fibre, which is found in fruits, vegetables and cereals, and not drinking enough fluids.",
          "Not moving enough, spending long periods sitting or lying down, and being less active can all play a part. Fibre acts like a sponge, absorbing water, and without fluid it cannot do its job.",
        ],
      },
      {
        heading: "Routine, urges and privacy",
        paragraphs: [
          "Often ignoring the urge to go to the toilet, and changing your diet or daily routine, are common causes too. Having limited privacy when using the toilet can also make it more likely.",
          "Ignoring the urge can change how the bowel muscles work and your pattern of going. Guts UK says this can happen because of a lack of time, a dislike of public toilets, or pain or fear of pain when pooing, for example from piles or a small tear.",
        ],
      },
      {
        heading: "Mood, medicines and other conditions",
        paragraphs: [
          "Stress, anxiety or depression, and the side effects of medicines, are among the most common causes. There is a strong connection between the brain and the gut, and being upset or depressed can make the bowel slow down or speed up.",
          "Constipation can also be caused by a medical condition such as diverticular disease or bowel cancer, but this is rare.",
        ],
      },
      {
        heading: "Who gets it more",
        paragraphs: [
          "Constipation affects twice as many women as men. It is also more common in older adults, during pregnancy and after giving birth.",
          "A family history of constipation, low levels of physical activity and recent surgery are other things that may make it more likely.",
        ],
      },
    ],
    helps: [
      "Gradually increase the fibre in your diet, and add some wheat bran, oats or linseed.",
      "Drink plenty of water and other fluids.",
      "Do not delay if you feel the urge to poo.",
      "Give yourself enough time and privacy to pass stools comfortably.",
      "Talk to your doctor if you feel your constipation started or got worse with a medicine, and do not stop taking it without medical advice.",
    ],
    tryThisWeek: [
      "Add bran, oats or linseed.",
      "Make time and privacy for the toilet.",
      "Ask if a medicine could be the cause.",
    ],
    ask: "Could something in my diet, routine or medicines be causing my constipation?",
    interactive: {
      kind: "risk-check",
      title: "What might be playing a part?",
      intro: "Tick what applies to you. Each one says what the sources suggest.",
      items: [
        { id: "fibre", label: "Not much fibre in my diet", note: "Gradually increase the fibre in your diet, and add some wheat bran, oats or linseed.", changeable: true },
        { id: "fluids", label: "Not drinking much", note: "Drink plenty of water and other fluids. Without fluid, fibre cannot do its job.", changeable: true },
        { id: "sitting", label: "Sitting or lying down a lot", note: "Not moving enough is a common cause. A daily walk or run can help you poo more regularly.", changeable: true },
        { id: "urge", label: "Holding on when I need to go", note: "Ignoring the urge can change how the bowel muscles work. Do not delay if you feel the urge.", changeable: true },
        { id: "routine", label: "A change in diet or routine", note: "A common cause. Keep to a regular time and place for the toilet where you can.", changeable: true },
        { id: "medicine", label: "Taking a medicine", note: "Constipation can be a side effect. Talk to your doctor, and do not stop a medicine without medical advice.", changeable: true },
        { id: "mood", label: "Stress, anxiety or low mood", note: "The brain and gut are closely linked. Being upset or depressed can make the bowel slow down.", changeable: true },
        { id: "family", label: "Constipation runs in my family", note: "A family history of constipation is a possible risk factor.", changeable: false },
      ],
    },
    sources: [NHS_CON, INFORM_CON, GUTS_CON, CKS_RISK, NHS_DIGESTION],
    quiz: {
      question: "Which of these is one of the most common causes of constipation?",
      options: [{ text: "Not eating enough fibre", right: true }, { text: "Drinking too much water" }, { text: "Going to the toilet too often" }],
      why: "The most common causes include not eating enough fibre, which is found in fruits, vegetables and cereals, and not drinking enough fluids.",
    },
  },
  {
    id: "con-older",
    kicker: "Understanding",
    question: "Why is constipation more common as we get older?",
    hook: "More medicines, less moving, and a problem that is easy to miss in someone you care for.",
    short: "Constipation is more common if you are over 65. Medicines, moving less, and eating less fibre can all play a part, and in an older person, or someone with dementia, it can be easily missed. A change in behaviour, such as confusion, might mean they are in pain or discomfort.",
    sections: [
      {
        heading: "More common after 65",
        paragraphs: [
          "Constipation is more common if you are over 65 years old. Guts UK says older people are one of the two groups most likely to have constipation.",
          "It is not normally life-threatening, but it does affect quality of life.",
        ],
      },
      {
        heading: "Easily missed",
        paragraphs: [
          "If you are caring for an older person, or someone with dementia or a learning disability, constipation may be easily missed.",
          "Look out for any behaviour changes, such as confusion, as it might mean they are in pain or discomfort.",
        ],
      },
      {
        heading: "Medicines and moving less",
        paragraphs: [
          "Common medicines that can cause constipation include iron and calcium supplements, water tablets, and opiate painkillers such as codeine and morphine. Reducing or stopping a medicine that may be playing a part can be harder for some older people who have several conditions and take several medicines.",
          "Adults aged 65 and over are advised to be physically active every day, even if it is just light activity. Light activity means moving rather than sitting or lying down, such as getting up to make a cup of tea or moving around your home.",
        ],
      },
      {
        heading: "Food and drink",
        paragraphs: [
          "Many people in the UK do not eat enough fibre. Adults are advised to have at least 30g a day, and Guts UK says people over 65 eat slightly less on average than younger adults.",
          "Babies, children and older adults are more at risk of dehydration. Not drinking enough fluids is one of the most common causes of constipation.",
        ],
      },
      {
        heading: "Help on the toilet",
        paragraphs: [
          "People with limited mobility should have help to reach the toilet and enough privacy, and supported seating if they are unsteady on the toilet.",
          "Faecal impaction is a build-up of poo in the rectum that can happen in people who are older or immobile. It needs prompt treatment by a GP or hospital. Check with a pharmacist or doctor before taking laxatives if you have a heart condition, such as heart failure, or difficulty swallowing.",
        ],
      },
    ],
    helps: [
      "Look out for behaviour changes, such as confusion, in someone you care for, as it might mean they are in pain or discomfort.",
      "Be physically active every day, even if it is just light activity.",
      "Reduce time spent sitting or lying down, and break up long periods of not moving with some activity.",
      "Make sure people with limited mobility have help to reach the toilet, and enough privacy.",
      "Ask whether any of your medicines could be causing constipation, and whether there is an alternative.",
      "Check with a pharmacist or doctor before taking laxatives if you have a heart condition or difficulty swallowing.",
    ],
    tryThisWeek: [
      "Move a little every day.",
      "Break up long spells of sitting.",
      "Ask if a medicine could be the cause.",
    ],
    ask: "Could any of my medicines be causing this, and is there an alternative?",
    interactive: {
      kind: "scenarios",
      title: "Caring for someone older",
      scenarios: [
        {
          id: "confused",
          situation: "Your mum, who has dementia, seems more confused than usual.",
          options: [{ text: "Think about pain or discomfort, such as constipation", best: true }, { text: "Assume it is just her dementia" }],
          why: "Look out for any behaviour changes, such as confusion, as it might mean they are in pain or discomfort.",
        },
        {
          id: "chair",
          situation: "Your dad spends most of the day in his chair.",
          options: [{ text: "Break up the sitting with light activity", best: true }, { text: "Let him rest all day" }],
          why: "Adults aged 65 and over are advised to be physically active every day, even if it is just light activity.",
        },
        {
          id: "laxative",
          situation: "He has heart failure and wants to buy a laxative.",
          options: [{ text: "Check with a pharmacist or doctor first", best: true }, { text: "Pick any laxative off the shelf" }],
          why: "Check with a pharmacist or doctor before taking laxatives if you have a heart condition, such as heart failure.",
        },
        {
          id: "toilet",
          situation: "Getting to the toilet has become hard for her.",
          options: [{ text: "Arrange help to reach it, and privacy", best: true }, { text: "Suggest she waits until later" }],
          why: "People with limited mobility should have help to reach the toilet and enough privacy.",
        },
      ],
    },
    sources: [NHS_CON, INFORM_CON, GUTS_CON, CKS_ADULTS, GUTS_FIBRE, NHS_ACTIVITY_OLDER, CKS_PROGNOSIS, NHS_LAX, NHS_DEHYDRATION],
    quiz: {
      question: "In someone with dementia, what might be a sign of constipation?",
      options: [{ text: "A change in behaviour, such as confusion", right: true }, { text: "Feeling hungrier than usual" }, { text: "Sleeping more soundly" }],
      why: "Look out for any behaviour changes, such as confusion, as it might mean they are in pain or discomfort.",
    },
  },
  {
    id: "con-checks",
    kicker: "Understanding",
    question: "Which bowel changes need checking?",
    hook: "Most constipation is nothing serious. A few changes are worth showing a GP, and a few need help the same day.",
    short: "See a GP if constipation is not getting better with treatment, keeps coming back, or comes with blood in your poo, weight loss without trying, tiredness all the time, tummy pain or a sudden change in your bowel habits. If your poo is black or dark red, or you have bloody diarrhoea, ask for an urgent GP appointment or get help from NHS 111. Call 999 or go to A&E if you are bleeding non-stop or there is a lot of blood.",
    sections: [
      {
        heading: "When to see a GP",
        paragraphs: [
          "See a GP if you are constipated and it is not getting better with treatment, or if you are regularly constipated or regularly bloated.",
          "Also see a GP if you have blood in your poo, have lost weight without trying, feel tired all the time, have tummy pain, or notice sudden changes in how you poo. NHS inform also says to see a GP if your constipation lasts longer than 14 days without improvement.",
        ],
      },
      {
        heading: "Changes not usual for you",
        paragraphs: [
          "Guts UK says to report any sudden slowing up of your bowel to your GP, especially if you are over 40. If you also have unexplained weight loss, bleeding in the stool or pain in your bottom, it says to see your GP immediately.",
          "Changes in your poo that are not usual for you, needing to poo more or less often than usual, and blood in your poo can be symptoms of bowel cancer. If it is bowel cancer, finding it early can make it easier to treat.",
        ],
      },
      {
        heading: "When to get urgent help",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if your poo is black or dark red, or you have bloody diarrhoea.",
          "Call 999 or go to A&E if you are bleeding non-stop, or there is a lot of blood, for example the toilet water turns red or you see large blood clots. Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
          "Severe constipation with bloating and pain can sometimes mean a blockage that needs hospital treatment. Guts UK says to contact your doctor if you have these severe symptoms, are unable to pass wind and are being sick.",
        ],
      },
      {
        heading: "At the appointment",
        paragraphs: [
          "The doctor will ask about your symptoms and may feel your tummy and ask to do a rectal examination, where they put a gloved finger inside your bottom. You can ask for a male or female doctor or nurse, and for someone else to be in the room.",
          "You may be given a home test kit called a FIT to collect a small sample of poo, which checks for bleeding from your bowel. Further tests are usually not needed, depending on your symptoms, age and whether you have a family history of bowel problems.",
        ],
      },
      {
        heading: "Try not to be embarrassed",
        paragraphs: [
          "Some of these symptoms are very common and can be caused by other conditions. The doctor or nurse will be used to talking about them.",
          "Guts UK says there is no convincing evidence that long-term constipation increases the chance of bowel cancer.",
        ],
      },
    ],
    helps: [
      "See a GP if you are constipated and it is not getting better with treatment.",
      "Report any sudden slowing up of your bowel to your GP, especially if you are over 40.",
      "See a GP if you have blood in your poo or have lost weight without trying.",
      "Ask for an urgent GP appointment or get help from NHS 111 if your poo is black or dark red, or you have bloody diarrhoea.",
      "Call 999 or go to A&E if you are bleeding non-stop or there is a lot of blood.",
    ],
    tryThisWeek: [
      "Note any change that is not usual for you.",
      "Book a GP visit if treatment is not working.",
      "Know when to call 111 or 999.",
    ],
    ask: "Do my symptoms need any tests, and which changes should I report?",
    interactive: {
      kind: "signs",
      title: "Changes to show a GP",
      intro: "Tick anything you have noticed. The list you make can be taken to your GP appointment.",
      signs: [
        "Not getting better with treatment",
        "Constipated regularly",
        "Bloated regularly",
        "Blood in my poo",
        "Lost weight without trying",
        "Tired all the time",
        "Tummy pain",
        "A sudden change in how I poo",
        "Lasted longer than 14 days",
      ],
      after: "If your poo is black or dark red, or you have bloody diarrhoea, ask for an urgent GP appointment or get help from NHS 111. If you are bleeding non-stop or there is a lot of blood, call 999 or go to A&E.",
      copyHeading: "Bowel changes to mention to my GP",
    },
    sources: [NHS_CON, NHS_BOWEL_CANCER, NHS_BLEEDING, GUTS_CON, INFORM_CON],
    quiz: {
      question: "Your poo is black or dark red. What does the NHS say to do?",
      options: [{ text: "Ask for an urgent GP appointment or get help from NHS 111", right: true }, { text: "Wait a month to see if it settles" }, { text: "Take a laxative and see" }],
      why: "Ask for an urgent GP appointment or get help from NHS 111 if your poo is black or dark red, or you have bloody diarrhoea.",
    },
  },
  {
    id: "con-fibre-fluids",
    kicker: "Treatment",
    question: "How do fibre, fluids and moving more help?",
    hook: "Fibre makes poo bigger and softer, fluid lets it do its job, and a daily walk keeps things moving.",
    short: "Fibre makes poo bigger and softer, but it acts like a sponge and needs fluid to work. Adults are advised to have 30g of fibre a day, while most eat about 20g. Increase it slowly, drink plenty of water and other fluids, and try a daily walk or run. You may notice a difference within a few days, though sometimes it takes a few weeks.",
    sections: [
      {
        heading: "Why fibre helps",
        paragraphs: [
          "Fibre is the part of plant foods, such as fruits, vegetables, grains, beans, nuts and seeds, that you do not digest. It ends up in your large bowel, and can make your poo bigger and softer.",
          "Fibre acts like a sponge, absorbing water. Without fluid, the fibre cannot do its job and you get constipation.",
        ],
      },
      {
        heading: "How much",
        paragraphs: [
          "Government guidelines say adults should have 30g of fibre a day, as part of a healthy balanced diet. Most adults are only eating an average of about 20g a day.",
          "High-fibre foods have 6g or more of fibre in every 100g, which you can check on the nutrition label. Good choices include wholemeal bread, brown rice, fruit and vegetables, beans and oats.",
        ],
      },
      {
        heading: "Go slowly",
        paragraphs: [
          "Including more fibre may lead to bloating and can make discomfort worse at first, so it is important to increase it slowly. This lets your gut adjust to the higher intake.",
          "Fibre is most helpful for mild constipation. If your constipation is severe, Guts UK says to talk to your doctor before increasing your fibre further, as it can occasionally make symptoms worse.",
        ],
      },
      {
        heading: "Drinking enough",
        paragraphs: [
          "Most people should aim to drink enough during the day so their pee is a clear pale yellow colour. The Eatwell Guide suggests 6 to 8 cups or glasses of fluid a day, and water, lower-fat milk, tea and coffee all count.",
          "Guts UK says some people find that drinks with caffeine, particularly coffee, can help the bowel open. A good way to get enough fluid is to drink a glass of water with every meal.",
        ],
      },
      {
        heading: "Moving more",
        paragraphs: [
          "A daily walk or run can help you poo more regularly. Keeping active and mobile greatly reduces your risk of constipation, and adults are advised to do at least 150 minutes of physical activity every week.",
          "You may notice a difference within a few days. Sometimes it takes a few weeks before your symptoms improve.",
        ],
      },
    ],
    helps: [
      "Gradually increase the fibre in your diet.",
      "Add some wheat bran, oats or linseed to your diet.",
      "Eat fruits that contain sorbitol, such as apples, apricots, grapes, raisins, raspberries and strawberries.",
      "Drink plenty of water and other fluids, and avoid alcohol.",
      "Drink a glass of water with every meal.",
      "Go for a daily walk or run.",
    ],
    tryThisWeek: [
      "Add oats or linseed, slowly.",
      "Drink a glass of water with each meal.",
      "Walk every day.",
    ],
    ask: "How much fibre should I aim for, and how quickly should I increase it?",
    interactive: {
      kind: "scenarios",
      title: "Fibre and fluid, day to day",
      scenarios: [
        {
          id: "breakfast",
          situation: "You want more fibre at breakfast.",
          options: [{ text: "Porridge or a wholewheat cereal", best: true }, { text: "White toast with jam" }],
          why: "Choose a higher-fibre breakfast cereal such as plain wholewheat biscuits, or porridge, as oats are also a good source of fibre.",
        },
        {
          id: "bloated",
          situation: "You doubled your fibre overnight and now feel bloated.",
          options: [{ text: "Build it up more slowly", best: true }, { text: "Add even more fibre" }],
          why: "Including more fibre may lead to bloating, so it is important to increase it slowly.",
        },
        {
          id: "pee",
          situation: "Your pee is dark yellow by the afternoon.",
          options: [{ text: "Drink more through the day", best: true }, { text: "Drink less to go less" }],
          why: "Most people should aim to drink enough during the day so their pee is a clear pale yellow colour.",
        },
        {
          id: "label",
          situation: "A cereal label says 7g of fibre per 100g.",
          options: [{ text: "That counts as high fibre", best: true }, { text: "That is a low-fibre food" }],
          why: "High-fibre foods have 6g or more of fibre in every 100g.",
        },
      ],
    },
    sources: [NHS_CON, NHS_FIBRE, NHS_DIGESTION, GUTS_CON, GUTS_FIBRE, BDA_FIBRE, NHS_WATER, INFORM_CON],
    quiz: {
      question: "Why do you need to drink enough when you eat more fibre?",
      options: [{ text: "Fibre absorbs water and cannot work without fluid", right: true }, { text: "Fluid stops fibre being digested" }, { text: "You do not need to drink more" }],
      why: "Fibre acts like a sponge, absorbing water. Without fluid, the fibre cannot do its job and you get constipation.",
    },
  },
  {
    id: "con-toilet-routine",
    kicker: "Treatment",
    question: "Does how and when I sit on the toilet matter?",
    hook: "A regular time, no holding on, and your feet on a low stool with your knees above your hips.",
    short: "Yes. Keep to a regular time and place, give yourself plenty of time, and do not delay if you feel the urge to poo. Resting your feet on a low stool, so your knees are above your hips, can make it easier to go. Try not to push too hard, or spend longer on the toilet than you need to.",
    sections: [
      {
        heading: "A regular time and place",
        paragraphs: [
          "Keep to a regular time and place, and give yourself plenty of time to use the toilet.",
          "Guts UK says a good bowel routine is important. Plan a place and time of day when you are comfortably able to spend time in the toilet.",
        ],
      },
      {
        heading: "Do not hold on",
        paragraphs: [
          "Do not delay if you feel the urge to poo. Never ignore the urge to go to the toilet, because it can significantly increase your chances of having constipation.",
          "Guts UK says to respond to your bowel's natural pattern, so when you feel the urge, do not delay.",
        ],
      },
      {
        heading: "Feet up, knees high",
        paragraphs: [
          "To make it easier to poo, try resting your feet on a low stool while going to the toilet. If possible, raise your knees above your hips.",
          "On its bowel incontinence page, the NHS also suggests leaning forward slightly while you sit with your feet on a footstool.",
        ],
      },
      {
        heading: "Do not strain or linger",
        paragraphs: [
          "Do not push too hard when pooing, and do not spend more time than you need to on the toilet.",
          "Constipation and pushing too hard when pooing both make piles more likely. Piles are lumps inside and around your bottom.",
        ],
      },
      {
        heading: "Time, privacy and support",
        paragraphs: [
          "Make sure you have enough time and privacy to pass stools comfortably. An unhurried routine gives time for the bowel to empty fully.",
          "People who are unsteady on the toilet may need supported seating, and people with limited mobility may need help to reach the toilet.",
        ],
      },
    ],
    helps: [
      "Keep to a regular time and place for the toilet.",
      "Give yourself plenty of time to use the toilet.",
      "Do not delay if you feel the urge to poo.",
      "Rest your feet on a low stool so your knees are above your hips.",
      "Lean forward slightly while you sit.",
      "Try not to push too hard when pooing.",
    ],
    tryThisWeek: [
      "Pick a regular toilet time.",
      "Go when you feel the urge.",
      "Put a low stool by the toilet.",
    ],
    ask: "Would a bowel routine or a change in position help me?",
    interactive: {
      kind: "timeline",
      title: "A calmer trip to the toilet",
      steps: [
        { id: "urge", when: "When you feel it", title: "Do not delay", points: ["Do not delay if you feel the urge to poo.", "Ignoring it can make constipation more likely."] },
        { id: "time", when: "Your usual time", title: "Make time and privacy", points: ["Keep to a regular time and place.", "Give yourself plenty of time."] },
        { id: "sit", when: "Sitting down", title: "Feet up, knees high", points: ["Rest your feet on a low stool.", "Raise your knees above your hips, and lean forward slightly."] },
        { id: "push", when: "While you go", title: "Do not strain", points: ["Do not push too hard when pooing.", "Pushing too hard makes piles more likely."] },
        { id: "done", when: "Afterwards", title: "Do not linger", points: ["Do not spend more time than you need to on the toilet."] },
      ],
    },
    sources: [NHS_CON, INFORM_CON, GUTS_CON, NHS_BOWEL_INC, NHS_PILES, CKS_ADULTS],
    quiz: {
      question: "Which position can make it easier to poo?",
      options: [{ text: "Feet on a low stool, knees above hips", right: true }, { text: "Leaning far back" }, { text: "Sitting with legs straight out" }],
      why: "Try resting your feet on a low stool while going to the toilet. If possible, raise your knees above your hips.",
    },
  },
  {
    id: "con-laxatives",
    kicker: "Treatment",
    question: "Which laxative, and how do I use it?",
    hook: "Four main types that work in different ways and at different speeds. Most work within 3 days.",
    short: "Laxatives are medicines that help you poo. Try diet and lifestyle changes first, then ask a pharmacist. There are 4 main types: bulk-forming, osmotic, stool softeners and stimulants. If you are buying one, a bulk-forming laxative is usually best to try first. Stop when your constipation improves, and do not take a laxative you bought for longer than 7 days.",
    sections: [
      {
        heading: "Lifestyle first, then a pharmacist",
        paragraphs: [
          "For most adults with constipation, it is usually recommended you try lifestyle changes first, before using laxatives.",
          "Speak to a pharmacist if diet and lifestyle changes are not helping. They can suggest a suitable laxative, and most laxatives work within 3 days. Try not to be embarrassed: they will be used to talking about these symptoms.",
        ],
      },
      {
        heading: "Four main types",
        paragraphs: [
          "Bulk-forming laxatives, such as Fybogel, increase the fibre in poo to make it bigger and softer, and take up to 3 days to work. Osmotic laxatives, such as lactulose and macrogol, bring more water into your bowel so poo is softer, and take 2 to 3 days.",
          "Stool softeners, such as docusate, let more water and fat into poo so it is softer and more slippery, and take 12 hours to 3 days. Stimulant laxatives, such as senna and bisacodyl, trigger your bowel muscles to push poo out, and take 6 to 12 hours.",
        ],
      },
      {
        heading: "Which to try first",
        paragraphs: [
          "If you are buying laxatives without a prescription, it is usually best to try a bulk-forming laxative first. If this does not work, or you are not sure what to try, a pharmacist can help.",
          "If your stools stay hard after a bulk-forming laxative, an osmotic laxative may be suggested instead. If your stools are soft but still hard to pass, a stimulant laxative may be recommended.",
        ],
      },
      {
        heading: "Using them safely",
        paragraphs: [
          "If you are taking bulk-forming or osmotic laxatives, it is important to drink plenty of fluids to avoid dehydration. If you take other medicines with macrogol, take them at least 1 hour before or 1 hour after it.",
          "If you bought laxatives without a prescription, stop taking them when your constipation improves, and do not take them for longer than 7 days. If you have used laxatives for 3 days and they have not helped, speak to a doctor or pharmacist.",
        ],
      },
      {
        heading: "Side effects and myths",
        paragraphs: [
          "Common side effects include farting, bloating, stomach pain and cramps, feeling sick and diarrhoea. These are usually mild and should stop once you stop taking the laxative. Senna can turn pee yellow-brown or red-brown, which is harmless.",
          "Guts UK says occasional use is not harmful, and the evidence suggests laxatives prescribed by a doctor do not cause long-term damage to the bowel. Taking laxatives does not result in weight loss.",
        ],
      },
    ],
    helps: [
      "Try lifestyle changes first, before using laxatives.",
      "If you are buying a laxative, try a bulk-forming laxative first.",
      "Drink plenty of fluids with bulk-forming or osmotic laxatives.",
      "If you bought a laxative, stop when your constipation improves, and do not take it for longer than 7 days.",
      "Speak to a doctor or pharmacist if a laxative has not helped after 3 days.",
      "Check with a pharmacist or doctor first if you are pregnant or breastfeeding, have a heart condition, or take opioid painkillers.",
    ],
    tryThisWeek: [
      "Ask a pharmacist which type suits you.",
      "Drink plenty with your laxative.",
      "Stop once things improve.",
    ],
    ask: "Which laxative is right for me, and for how long?",
    interactive: {
      kind: "flip-cards",
      title: "The four main types",
      intro: "Turn each card to see how that type of laxative works.",
      cards: [
        { id: "bulk", front: "Bulk-forming", when: "Fybogel. Up to 3 days", back: "Increases the fibre in poo to make it bigger and softer. Usually best to try first. Drink plenty of fluids." },
        { id: "osmotic", front: "Osmotic", when: "Lactulose, macrogol. 2 to 3 days", back: "Brings more water into your bowel so poo is softer and easier to push out. Drink plenty of fluids." },
        { id: "softener", front: "Stool softeners", when: "Docusate. 12 hours to 3 days", back: "Lets more water and fat into poo so it is softer and more slippery, making it easier to push out." },
        { id: "stimulant", front: "Stimulant", when: "Senna, bisacodyl. 6 to 12 hours", back: "Triggers your bowel muscles to push poo out. Used when stools are soft but still hard to pass." },
      ],
    },
    sources: [NHS_LAX, NHS_CON, INFORM_CON, NHS_LACTULOSE, NHS_MACROGOL, NHS_SENNA, NHS_DOCUSATE, NHS_BISACODYL, GUTS_CON],
    quiz: {
      question: "If you are buying a laxative, which type is usually best to try first?",
      options: [{ text: "A bulk-forming laxative", right: true }, { text: "A stimulant laxative" }, { text: "An enema" }],
      why: "If you are buying laxatives without a prescription, it is usually best to try a bulk-forming laxative first.",
    },
  },
  {
    id: "con-medicines",
    kicker: "Treatment",
    question: "Could my medicines be causing it?",
    hook: "Strong painkillers, iron tablets and several other medicines can slow the bowel. Never just stop them.",
    short: "Medicines often cause constipation as a side effect, and opioid painkillers such as codeine and morphine are among the commonest. Iron and calcium supplements, some antidepressants and water tablets can do it too. Speak to a pharmacist or GP, who may suggest how to treat it or an alternative, but do not stop a prescribed medicine without speaking to the GP first.",
    sections: [
      {
        heading: "A common side effect",
        paragraphs: [
          "Medicines can often cause constipation as a side effect, and opioids are one of the commonest types.",
          "Common types include aluminium antacids for indigestion, antidepressants, medicines for epilepsy, antipsychotics, calcium supplements, opiate painkillers such as codeine and morphine, diuretics, which are water tablets, and iron supplements. Some antihistamines, anti-inflammatory painkillers (NSAIDs) and calcium-channel blockers such as verapamil can also play a part.",
        ],
      },
      {
        heading: "Strong painkillers",
        paragraphs: [
          "Codeine is a strong painkiller called an opioid, used for pain after an operation or an injury. Constipation is one of its common side effects, and it is a common side effect of morphine too.",
          "The NHS advises not taking painkillers that contain codeine if you have piles, as they can cause constipation.",
        ],
      },
      {
        heading: "Iron tablets",
        paragraphs: [
          "To help with constipation from iron tablets, get more fibre into your diet by eating fresh fruit, vegetables and cereals, and drink plenty of water. Try to exercise more regularly, for example by going for a daily walk or run.",
          "Darker than usual poo is common when taking iron and is usually nothing to worry about. But talk to a doctor or call 111 straight away if your poo is black, tar-like or red, or has blood in or on it, or if you also feel unwell in any other way.",
        ],
      },
      {
        heading: "Do not just stop",
        paragraphs: [
          "Speak to the GP before you stop taking any prescribed medicine. If a medicine is the cause, constipation will usually ease once you stop it, but only stop if your GP advises you to.",
          "Speak to your pharmacist if you have constipation caused by a medicine. They may advise you on how to treat it, or suggest you see your GP about an alternative medicine.",
        ],
      },
      {
        heading: "Laxatives with opioids",
        paragraphs: [
          "Check with a pharmacist or doctor before taking laxatives if you are taking opioid painkillers, such as codeine or morphine. You can usually still use laxatives, but some types might not be suitable.",
          "Bulk-forming laxatives are not recommended for constipation caused by opioids. An osmotic or a stimulant laxative is offered instead.",
        ],
      },
    ],
    helps: [
      "Talk to your doctor if you feel your constipation started or got worse with a medicine.",
      "Speak to the GP before you stop taking any prescribed medicine.",
      "With iron tablets, eat more fibre, drink plenty of water, and try a daily walk or run.",
      "Check with a pharmacist or doctor before taking laxatives with opioid painkillers.",
      "See a GP if you are taking medicine that is causing constipation, such as opioid painkillers.",
    ],
    tryThisWeek: [
      "List your medicines for a pharmacist.",
      "Keep taking prescribed medicines.",
      "Ask which laxative suits opioids.",
    ],
    ask: "Could any of my medicines be causing my constipation, and if so is there an alternative?",
    interactive: {
      kind: "signs",
      title: "Medicines I take",
      intro: "Tick any you take. The list you make can be shown to a pharmacist or GP. Do not stop a prescribed medicine yourself.",
      signs: [
        "Codeine or co-codamol",
        "Morphine or another opioid",
        "Iron tablets",
        "Calcium supplements",
        "Aluminium antacids for indigestion",
        "Antidepressants",
        "Medicines for epilepsy",
        "Antipsychotics",
        "Water tablets (diuretics)",
        "Antihistamines",
      ],
      after: "Speak to the GP before you stop taking any prescribed medicine. A pharmacist can advise on treating constipation caused by a medicine.",
      copyHeading: "Medicines to ask my pharmacist or GP about",
    },
    sources: [INFORM_CON, CKS_SECONDARY, NHS_CON, GUTS_CON, NHS_CODEINE, NHS_MORPHINE, NHS_FERROUS, CKS_ADULTS, NHS_LAX, NHS_PILES],
    quiz: {
      question: "You think your prescribed painkiller is causing constipation. What should you do?",
      options: [{ text: "Speak to the GP before stopping it", right: true }, { text: "Stop taking it straight away" }, { text: "Take twice the dose of a laxative" }],
      why: "Speak to the GP before you stop taking any prescribed medicine.",
    },
  },
  {
    id: "con-long-term",
    kicker: "Living with",
    question: "What if my constipation keeps coming back?",
    hook: "For some people it lasts months or years. Treatment works, though it can take time, and there are further options.",
    short: "For some people, constipation is a long-term, or chronic, condition. It usually means symptoms that have lasted at least 3 months. Treatment is effective, although it can take several months to get a regular pattern back, and some people need laxatives for a long time. If laxatives and diet changes have not helped, a doctor can talk about newer medicines and other treatments.",
    sections: [
      {
        heading: "When it lasts",
        paragraphs: [
          "Many people only have constipation for a short time. For others, it can be a long-term, or chronic, condition that causes significant pain and discomfort and affects quality of life.",
          "Chronic constipation usually describes symptoms that have been there for at least 3 months.",
        ],
      },
      {
        heading: "Three main types",
        paragraphs: [
          "In slow transit constipation, the muscles lining the gut wall do not work properly, so contents move sluggishly through the bowel. People feel the urge less often, and poo is hard.",
          "Normal transit constipation is the most common type: the muscles work, but people still have symptoms, and it overlaps a lot with IBS with constipation. In a defaecatory disorder, a problem with the pelvic floor muscles makes it hard to empty the bowel despite straining.",
        ],
      },
      {
        heading: "Treatment over time",
        paragraphs: [
          "Treatment for constipation is effective, although in some cases it can take several months before a regular bowel pattern is re-established.",
          "If constipation is caused by an underlying condition or a medicine, your GP may advise taking laxatives for much longer, possibly many months or even years. When stopping, you may need to reduce the dose gradually, one laxative at a time, and this can take several months. Your GP will advise you about when it is best to stop.",
        ],
      },
      {
        heading: "Further options",
        paragraphs: [
          "If you have tried laxatives and diet changes and are still constipated, Guts UK suggests asking your doctor about newer medicines such as prucalopride and linaclotide, or biofeedback, which trains the muscles to help the bowel empty more effectively.",
          "Transanal irrigation, which flushes water into the rectum to help emptying, may help some people, with training from a healthcare practitioner. Do not try irrigation by yourself without training. Surgery is very rarely considered.",
          "A specialist referral may be arranged if symptoms keep going or come back despite treatment, and a continence service or dietitian may help.",
        ],
      },
      {
        heading: "Living with it",
        paragraphs: [
          "Constipation is not normally life-threatening, but it does affect quality of life. Guts UK says there is no evidence that toxins leak from the bowel into the rest of the body.",
          "If you are struggling with your diet, ask your GP for a referral to a dietitian. Any sudden change in your symptoms should be reported to your doctor.",
        ],
      },
    ],
    helps: [
      "Keep a good bowel routine, and when you feel the urge, do not delay.",
      "Do not stop long-term laxatives suddenly; reduce them as your GP advises.",
      "Ask your doctor about newer medicines or biofeedback if laxatives and diet changes have not worked.",
      "Ask your GP for a referral to a dietitian if you are struggling with your diet.",
      "See a GP if you are regularly constipated.",
      "Report any sudden change in your symptoms to your doctor.",
    ],
    tryThisWeek: [
      "Keep to your bowel routine.",
      "Ask before stopping laxatives.",
      "Ask about a dietitian if needed.",
    ],
    ask: "What else could help if laxatives and diet changes have not worked?",
    interactive: {
      kind: "flip-cards",
      title: "If simple treatments have not worked",
      intro: "Turn each card to see what the option involves. Ask your doctor which might suit you.",
      cards: [
        { id: "prucalopride", front: "Prucalopride", when: "A newer medicine", back: "Improves the movement of the bowel. For people who do not respond to, or tolerate, simple laxatives." },
        { id: "linaclotide", front: "Linaclotide", when: "A newer medicine", back: "Increases the water in the bowel and reduces how sensitive it is." },
        { id: "biofeedback", front: "Biofeedback", when: "At some hospital centres", back: "Training to help co-ordinate the rectal and tummy muscles, so the bowel empties more effectively." },
        { id: "irrigation", front: "Transanal irrigation", when: "With training first", back: "Flushes water into the rectum to help emptying. Do not try it by yourself without training." },
        { id: "surgery", front: "Surgery", when: "Very rarely", back: "Very rarely considered. It needs a specialist assessment from a surgeon." },
      ],
    },
    sources: [INFORM_CON, CKS_DEF, GUTS_CON, CKS_ADULTS, CKS_PROGNOSIS, NHS_CON],
    quiz: {
      question: "How long have symptoms usually lasted for constipation to be called chronic?",
      options: [{ text: "At least 3 months", right: true }, { text: "At least 3 days" }, { text: "At least 3 years" }],
      why: "Chronic constipation usually describes symptoms that have been there for at least 3 months.",
    },
  },
  {
    id: "con-impaction",
    kicker: "Living with",
    question: "What is faecal impaction?",
    hook: "When hard poo builds up and gets stuck, runny poo can leak around it and look like diarrhoea.",
    short: "Long-term constipation can lead to faecal impaction, where poo builds up in the rectum, the last part of the large intestine. The main symptom is diarrhoea that leaks around the build-up of solid poo. It needs prompt treatment from a GP or hospital, with stronger laxatives, a suppository or a mini enema. Never try to remove the poo yourself.",
    sections: [
      {
        heading: "A build-up of poo",
        paragraphs: [
          "Long-term constipation can lead to faecal impaction. This is where poo has built up in the last part of the large intestine, called the rectum.",
          "Once you have faecal impaction, it is very unlikely that you will be able to get rid of the stools naturally. The blockage also makes constipation worse.",
        ],
      },
      {
        heading: "Leaks that look like diarrhoea",
        paragraphs: [
          "The main symptom is diarrhoea, which leaks through the build-up of solid poo. You may have difficulty controlling this overflow diarrhoea.",
          "Constipation is one of the health conditions that can lead to bowel incontinence. It is common, so try not to be embarrassed, and see a GP if you think you have it.",
        ],
      },
      {
        heading: "Who is more at risk",
        paragraphs: [
          "Faecal impaction can happen in people who are older, immobile or have a severe problem with bowel movements. It needs prompt treatment by a GP or hospital.",
          "It can sometimes lead to swelling of the rectum, a loss of feeling in and around the anus, bowel incontinence, bleeding from the anus, or rectal prolapse.",
        ],
      },
      {
        heading: "How it is treated",
        paragraphs: [
          "Faecal impaction may be treated with stronger laxatives prescribed by a GP, a suppository, which is medicine you place in your bottom, or a mini enema, where fluid is passed through your bottom into your bowel.",
          "Treatment often starts with a high dose of the laxative macrogol, sometimes with a stimulant laxative added after a few days. Bisacodyl suppositories take 10 to 45 minutes to work, and docusate enemas usually work within 20 minutes, so it is best to stay close to a toilet.",
          "A healthcare professional may need to remove some of the poo. This is not something you should do yourself.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "More fibre, fluids and activity help keep bowel movements regular and stop the build-up coming back. Some people need regular laxatives to keep things moving.",
          "See a doctor for advice if you have taken macrogol for 2 weeks and still have constipation.",
        ],
      },
    ],
    helps: [
      "Get prompt treatment from a GP if you think poo has built up.",
      "Do not try to remove poo yourself; a healthcare professional can do this.",
      "Stay close to a toilet after a suppository or mini enema.",
      "See a doctor if you have taken macrogol for 2 weeks and still have constipation.",
      "Keep up fibre, fluids and activity afterwards to help keep bowel movements regular.",
    ],
    tryThisWeek: [
      "See a GP about leaks with constipation.",
      "Never remove poo yourself.",
      "Keep up fibre, fluids and activity.",
    ],
    ask: "Could my diarrhoea be leaking around a build-up, and how will it be treated?",
    interactive: {
      kind: "signs",
      title: "Signs to tell a GP about",
      intro: "Tick what you, or the person you care for, have noticed. Take the list to a GP.",
      signs: [
        "Constipation for a long time",
        "Runny poo leaking, hard to control",
        "Feeling poo is stuck",
        "Stomach ache or bloating",
        "Bleeding from the bottom",
        "Less feeling around the bottom",
        "Confusion or a change in behaviour",
      ],
      after: "Faecal impaction needs prompt treatment by a GP or hospital. Do not try to remove the poo yourself.",
      copyHeading: "Bowel signs to tell the GP about",
    },
    sources: [NHS_CON, INFORM_CON, GUTS_CON, NHS_MACROGOL, NHS_BOWEL_INC, NHS_BISACODYL, NHS_DOCUSATE, CKS_ADULTS],
    quiz: {
      question: "What is the main symptom of faecal impaction?",
      options: [{ text: "Diarrhoea leaking around the build-up of poo", right: true }, { text: "Going to the toilet more easily" }, { text: "Hard poo every day" }],
      why: "The main symptom is diarrhoea, which leaks through the build-up of solid poo.",
    },
  },
  {
    id: "con-travel",
    kicker: "Living with",
    question: "How do I stay regular when I travel or my routine changes?",
    hook: "New foods, time zones and long journeys can slow things down. A little planning helps.",
    short: "Changing your diet or daily routine is one of the most common causes of constipation, and holidays can mean less activity and less fibre. Pack your medicines and foods that suit you, keep drinking, keep moving with short walks, and know where the toilets are. A change over a holiday is usually short term, but see a doctor if it lasts longer than 2 to 3 weeks or warning signs appear.",
    sections: [
      {
        heading: "Why routine matters",
        paragraphs: [
          "Changing your diet or daily routine is one of the most common causes of constipation. Travel can shake up your gut through new foods, new time zones and new routines.",
          "Guts UK says holidays can mean less activity and possibly lower fibre intake for a while, and that short-term constipation can happen with a change in daily routine.",
        ],
      },
      {
        heading: "Before you go",
        paragraphs: [
          "Pack your prescribed medicines, in your hand luggage if you are flying, and check whether you need a doctor's note if you are going abroad. You may want to talk to a pharmacist about over-the-counter medicines that may help settle your gut while you are away.",
          "Long journeys can mean unpredictable mealtimes. Bring food that you know sits well with your gut, and try to keep to your normal eating and drinking routine where possible.",
        ],
      },
      {
        heading: "While you are away",
        paragraphs: [
          "Staying hydrated is key. Take a refillable water bottle, and check local advice on drinking tap water if you are travelling abroad. You may need to drink more if you are somewhere hot.",
          "If movement helps your digestion, plan short walks, and set reminders if you take medicines at certain times. Keep including fruit, vegetables and wholegrain starchy foods where you can, to keep your fibre intake up.",
        ],
      },
      {
        heading: "Knowing where the toilets are",
        paragraphs: [
          "Not knowing where the nearest toilet is can be stressful. Look up public toilets on maps or apps, choose an aisle seat if you are flying, and plan stops at service stations if you are driving.",
          "Give yourself enough time and privacy to pass stools comfortably, and do not ignore the urge to go.",
        ],
      },
      {
        heading: "If it does not settle",
        paragraphs: [
          "A change in bowel habit over a holiday is usually short term. But if symptoms last longer than 2 to 3 weeks, or warning signs such as weight loss, blood in your poo or swallowing problems appear, see your doctor.",
          "If you buy a laxative, stop taking it when your constipation improves, and do not take it for longer than 7 days.",
        ],
      },
    ],
    helps: [
      "Pack your prescribed medicines in your hand luggage if you are flying.",
      "Bring food that sits well with your gut, and keep to your normal eating and drinking routine where possible.",
      "Take a refillable water bottle and stay hydrated.",
      "Plan short walks if movement helps your digestion.",
      "Keep including fruit, vegetables and wholegrain starchy foods where you can.",
      "Do not ignore the urge to go to the toilet.",
    ],
    tryThisWeek: [
      "Pack a refillable water bottle.",
      "Plan a short walk each day.",
      "Keep your usual mealtimes.",
    ],
    ask: "Should I take anything with me in case I get constipated while I am away?",
    interactive: {
      kind: "scenarios",
      title: "On the move",
      scenarios: [
        {
          id: "flight",
          situation: "You have a long flight tomorrow.",
          options: [{ text: "Pack a water bottle and familiar snacks", best: true }, { text: "Skip drinks so you need the toilet less" }],
          why: "Staying hydrated is key. Bring food that you know sits well with your gut.",
        },
        {
          id: "buffet",
          situation: "The hotel breakfast is mostly pastries.",
          options: [{ text: "Add fruit and wholegrain options where you can", best: true }, { text: "Give fibre a rest for the week" }],
          why: "Keep including fruit, vegetables and wholegrain starchy foods where you can, to keep your fibre intake up.",
        },
        {
          id: "urge",
          situation: "You feel the urge, but the queue is long.",
          options: [{ text: "Find another toilet, rather than hold on", best: true }, { text: "Hold on until you get back" }],
          why: "Do not ignore the urge to go to the toilet.",
        },
        {
          id: "weeks",
          situation: "You are home and still constipated after 3 weeks.",
          options: [{ text: "See your doctor", best: true }, { text: "Keep waiting for it to pass" }],
          why: "If symptoms last longer than 2 to 3 weeks, or warning signs appear, see your doctor.",
        },
      ],
    },
    sources: [NHS_CON, INFORM_CON, GUTS_TRAVEL, GUTS_FESTIVE, NHS_WATER, NHS_LAX],
    quiz: {
      question: "Which of these is one of the most common causes of constipation?",
      options: [{ text: "A change in your diet or daily routine", right: true }, { text: "Drinking from a water bottle" }, { text: "Taking short walks" }],
      why: "Changing your diet or daily routine is one of the most common causes of constipation.",
    },
  },
  {
    id: "con-after-illness",
    kicker: "Living with",
    question: "Why do I get constipated after illness or surgery?",
    hook: "Painkillers, an anaesthetic, lying still and drinking less can all slow the bowel for a while.",
    short: "Recent surgery can make constipation more likely, because of medicines such as anaesthetics and opioid painkillers, and because you are less active afterwards. Being unwell, with a high temperature or spending long periods lying down, can do the same. Drinking enough, moving when you can and asking about your painkillers can help, and a GP can advise if it is not getting better.",
    sections: [
      {
        heading: "A common time for it",
        paragraphs: [
          "Recent surgery is a possible risk factor for constipation. This may be linked to medicines, including general anaesthetics and opioid painkillers, and to being less active after surgery.",
          "Not moving enough and spending long periods sitting or lying down are among the most common causes of constipation. Having a high temperature, or fever, can also make it more likely.",
        ],
      },
      {
        heading: "Painkillers",
        paragraphs: [
          "Codeine is used for pain after an operation or an injury, and morphine for severe pain, such as after an operation. Constipation is a common side effect of both.",
          "See a GP if you are taking medicine that is causing constipation, such as opioid painkillers, and speak to the GP before you stop taking any prescribed medicine. If you are taking a medicine that can cause difficulty pooing, you might be prescribed laxatives to make this less likely.",
        ],
      },
      {
        heading: "Drinking enough",
        paragraphs: [
          "You may need to drink more fluids if you are ill or recovering from illness. Dehydration can happen more easily if you have been sick, have diarrhoea or have a high temperature.",
          "Most people should aim to drink enough during the day so their pee is a clear pale yellow colour.",
        ],
      },
      {
        heading: "Getting moving again",
        paragraphs: [
          "Try to reduce time spent sitting or lying down, and break up long periods of not moving with some activity. A daily walk can help you poo more regularly.",
          "Speak to your GP first if you have not exercised for some time, or if you have medical conditions or concerns. Make sure your activity is right for your fitness.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "See a GP if you are constipated and it is not getting better with treatment, or you have tummy pain.",
          "Severe constipation with bloating and pain can sometimes mean a blockage that needs hospital treatment. Guts UK says to contact your doctor if you have these severe symptoms, are unable to pass wind and are being sick.",
        ],
      },
    ],
    helps: [
      "Ask whether your painkillers could cause constipation, and whether you need a laxative with them.",
      "Speak to the GP before you stop taking any prescribed medicine.",
      "Drink more fluids while you are ill or recovering from illness.",
      "Break up long periods of sitting or lying down with some activity.",
      "See a GP if constipation is not getting better with treatment, or you have tummy pain.",
    ],
    tryThisWeek: [
      "Ask about laxatives with painkillers.",
      "Drink more while you recover.",
      "Move a little, often.",
    ],
    ask: "Will my painkillers cause constipation, and should I take a laxative with them?",
    interactive: {
      kind: "scenarios",
      title: "Recovering at home",
      scenarios: [
        {
          id: "codeine",
          situation: "You are home after an operation, taking codeine, and have not been for days.",
          options: [{ text: "Speak to a GP or pharmacist", best: true }, { text: "Stop the codeine yourself" }],
          why: "See a GP if you are taking medicine that is causing constipation, such as opioid painkillers. Speak to the GP before you stop it.",
        },
        {
          id: "fever",
          situation: "You have had a fever and have not felt like drinking.",
          options: [{ text: "Sip more fluids through the day", best: true }, { text: "Wait until you feel thirsty" }],
          why: "You may need to drink more fluids if you are ill or recovering from illness.",
        },
        {
          id: "bed",
          situation: "You have been in bed most of the week.",
          options: [{ text: "Break up the lying down with some activity", best: true }, { text: "Stay in bed until you feel fully better" }],
          why: "Not moving enough and spending long periods sitting or lying down are among the most common causes of constipation.",
        },
        {
          id: "severe",
          situation: "Your tummy is swollen and painful, you cannot pass wind and you are being sick.",
          options: [{ text: "Contact your doctor now", best: true }, { text: "Try more fibre and wait" }],
          why: "Guts UK says to contact your doctor if you have these severe symptoms, are unable to pass wind and are being sick.",
        },
      ],
    },
    sources: [CKS_RISK, NHS_CON, INFORM_CON, NHS_CODEINE, NHS_MORPHINE, NHS_WATER, NHS_DEHYDRATION, NHS_ACTIVITY, NHS_LAX, GUTS_CON],
    quiz: {
      question: "Why can surgery make constipation more likely?",
      options: [{ text: "Anaesthetics, opioid painkillers and being less active", right: true }, { text: "Hospital food has too much fibre" }, { text: "Surgery always damages the bowel" }],
      why: "This may be linked to medicines, including general anaesthetics and opioid painkillers, and to being less active after surgery.",
    },
  },
];
