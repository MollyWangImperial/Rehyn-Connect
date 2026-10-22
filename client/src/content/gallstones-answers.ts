import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Gallstones page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS
// (the gallstones page and the gallbladder removal pages), NHS inform (NHS 24, Scotland) and Guts UK,
// the national charity for the digestive system, with the Cambridge University Hospitals dietitians'
// leaflet for food. Where the sources give different figures (how long the pain lasts, for example),
// the answer says who says what. General information only; it never replaces what a person's own GP,
// surgeon or care team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const nhsInform = (label: string, path: string): LearnSource => ({ label: `NHS inform: ${label}`, url: `https://www.nhsinform.scot/illnesses-and-conditions/stomach-liver-and-gastrointestinal-tract/${path}` });
const gutsUk = (label: string, path: string): LearnSource => ({ label: `Guts UK: ${label}`, url: `https://gutscharity.org.uk/advice-and-information/conditions/${path}` });

const GBR = "tests-and-treatments/gallbladder-removal";
const NHS_GS = nhs("Gallstones", "conditions/gallstones/");
const NHS_GBR_WHAT = nhs("What is gallbladder removal?", `${GBR}/what-is-gallbladder-removal/`);
const NHS_GBR_WHY = nhs("Why gallbladder removal is done", `${GBR}/why-its-done/`);
const NHS_GBR_PREP = nhs("Preparing for gallbladder removal", `${GBR}/preparation/`);
const NHS_GBR_HOW = nhs("How gallbladder removal is done", `${GBR}/how-its-done/`);
const NHS_GBR_RECOVERY = nhs("Recovering from gallbladder removal", `${GBR}/recovery/`);
const NHS_GBR_COMPLICATIONS = nhs("Complications of gallbladder removal", `${GBR}/complications/`);
const NHS_CHOL = nhs("Acute cholecystitis", "conditions/acute-cholecystitis/");
const NHS_PANC = nhs("Acute pancreatitis", "conditions/acute-pancreatitis/");
const NHS_JAUNDICE = nhs("Jaundice", "conditions/jaundice/");
const NHS_ULTRASOUND = nhs("Ultrasound scan", "tests-and-treatments/ultrasound-scan/");
const NHS_OBESITY = nhs("Overweight and obesity in adults", "conditions/overweight-and-obesity/");
const NHS_LOSE = nhs("How to lose weight (Better Health)", "better-health/lose-weight/");

const NHSI_GS = nhsInform("Gallstones", "gallstones/");

const GUTS_GS = gutsUk("Gallstones", "gallstones/");
const GUTS_BAD = gutsUk("Bile acid diarrhoea", "bile-acid-diarrhoea/");

const CUH_DIET: LearnSource = {
  label: "Cambridge University Hospitals: Dietary advice for patients with gallstones or inflammation of the gallbladder",
  url: "https://www.cuh.nhs.uk/patient-information/dietary-advice-for-patients-with-gallstones/",
};

export const gallstonesAnswers: LearnArticle[] = [
  {
    id: "gs-what-it-is",
    kicker: "Understanding",
    question: "What are gallstones, and where do they come from?",
    hook: "Small stones that grow, often over years, in a pouch most people never think about.",
    short: "Gallstones are small stones that form in the gallbladder, a small pouch under the liver that stores bile. Most are made of cholesterol. They are common, and most people who have them never get symptoms.",
    sections: [
      {
        heading: "A small pouch under the liver",
        paragraphs: [
          "Gall is an old-fashioned word for bile. The gallbladder is a small organ in the top part of your tummy that helps you digest your food. It sits just under the liver, has the shape of a pear, and is about 9cm long when full.",
          "Bile is a liquid made by the liver to help digest fats. It passes through channels called bile ducts into the gallbladder, where it is stored between meals and becomes more concentrated. When we eat, the gallbladder releases bile into the small bowel.",
        ],
      },
      {
        heading: "How stones form",
        paragraphs: [
          "Gallstones are small stones that form in the gallbladder. They are thought to develop because of an imbalance in the chemical make-up of bile. In most cases the levels of cholesterol in bile become too high, and the extra cholesterol forms into stones.",
          "Gallstones begin as tiny crystals, grow to resemble gravel, and can eventually grow to the size of pebbles. This often happens over many years. Sometimes only one stone forms, but there are often several at the same time.",
        ],
      },
      {
        heading: "Two main kinds",
        paragraphs: [
          "About 4 in every 5 gallstones are made up of cholesterol. About 1 in every 5 is made up of bilirubin, a waste product from the turnover of red blood cells. These are called pigment stones, and some stones are mixed.",
          "Stones can also be formed of calcium deposits. Cholesterol can harden into stones when the gallbladder empties less often than it should.",
        ],
      },
      {
        heading: "Common, and often silent",
        paragraphs: [
          "Gallstones may be found in the gallbladder or the bile ducts. The bile ducts are small tubes that connect the gallbladder to organs such as the liver and pancreas.",
          "Gallstones are common and often do not cause symptoms. It's estimated that more than 1 in every 10 adults in the UK has gallstones, although only a minority of people develop symptoms.",
        ],
      },
    ],
    helps: [
      "Ask for an urgent GP appointment or get help from NHS 111 if you have pain in your tummy that lasts longer than 30 minutes.",
      "Eat a healthy, balanced diet, with plenty of fresh fruit and vegetables and wholegrains.",
      "If you're overweight, choose a gradual weight loss plan rather than a low-calorie, rapid weight loss diet.",
      "Have regular meals, including breakfast.",
      "Ask your doctor whether your gallstones are dangerous, and what the risks and benefits of treatment are.",
    ],
    tryThisWeek: [
      "Know when to call NHS 111.",
      "Eat regular meals, with breakfast.",
      "Ask if your gallstones are dangerous.",
    ],
    ask: "Where are my gallstones, and are they likely to cause problems?",
    interactive: {
      kind: "flip-cards",
      title: "The parts, card by card",
      intro: "Turn each card to see what each part is, and what stones are made of.",
      cards: [
        { id: "gallbladder", front: "Gallbladder", when: "Just under the liver", back: "A small pear-shaped pouch that stores and concentrates bile between meals." },
        { id: "bile", front: "Bile", when: "Made by the liver", back: "A liquid that helps digest fats. Gall is an old-fashioned word for it." },
        { id: "ducts", front: "Bile ducts", when: "Linking the organs", back: "Small tubes that connect the gallbladder to organs such as the liver and pancreas." },
        { id: "cholesterol", front: "Cholesterol stones", when: "About 4 in every 5", back: "Form when the levels of cholesterol in bile become too high." },
        { id: "pigment", front: "Pigment stones", when: "About 1 in every 5", back: "Made up of bilirubin, a waste product from the turnover of red blood cells." },
        { id: "sludge", front: "Biliary sludge", when: "Can block the gallbladder", back: "A mixture of bile and small cholesterol and salt crystals." },
      ],
    },
    sources: [NHS_GS, GUTS_GS, NHSI_GS, NHS_CHOL, CUH_DIET],
    quiz: {
      question: "What are most gallstones made of?",
      options: [{ text: "Cholesterol", right: true }, { text: "Calcium from milk" }, { text: "Salt from food" }],
      why: "In most cases the levels of cholesterol in bile become too high, and the extra cholesterol forms into stones.",
    },
  },
  {
    id: "gs-symptoms",
    kicker: "Symptoms",
    question: "What does gallstone pain feel like?",
    hook: "Most stones stay quiet. When one blocks a duct, the pain is hard to mistake.",
    short: "Most people with gallstones have no symptoms. If a stone blocks a bile duct it can cause biliary colic: a severe, constant pain in the middle of the tummy or under the right ribs, often with feeling sick. A high temperature, yellow skin or pain that will not settle are signs of something more serious.",
    sections: [
      {
        heading: "Often no symptoms at all",
        paragraphs: [
          "Gallstones are common and often do not cause symptoms. About two out of every three people who have gallstones have no symptoms and are usually unaware they have them.",
          "Gallstones typically only cause symptoms if the gallbladder becomes inflamed, or if the stones travel from the gallbladder into one of the bile ducts.",
        ],
      },
      {
        heading: "What the pain is like",
        paragraphs: [
          "If a gallstone blocks a bile duct, it can cause tummy pain. The pain may feel severe and be constant. It may be in the middle of your tummy, or just under your ribs on the right side, and it can make you feel sick or vomit. This tummy pain is called biliary colic.",
          "The pain may spread to your side or shoulder blade. It is not relieved when you go to the toilet, pass wind or are sick.",
          "Guts UK describes it as a cramping pain that is usually rather more severe than indigestion. It is generally a continuous pain but may come in waves.",
        ],
      },
      {
        heading: "How long it lasts",
        paragraphs: [
          "The NHS says the pain may last longer than 30 minutes, and up to several hours. NHS inform says it usually lasts 1 to 5 hours, although it can sometimes last just a few minutes.",
          "The pain often follows a meal and may be noticed most often in the evenings. It is sometimes triggered by eating fatty foods, but may occur at any time of day, and it may wake you up during the night.",
          "Biliary colic does not happen often. After an episode of pain, it may be several weeks or months before you have another.",
        ],
      },
      {
        heading: "Signs of something more serious",
        paragraphs: [
          "In a small number of people, gallstones block the flow of bile for longer or move into other organs. Then there may be a high temperature of 38C or above, more persistent pain, a rapid heartbeat, yellowing of the skin and whites of the eyes, itchy skin, chills or shivering, confusion or a loss of appetite.",
          "The pain of an inflamed gallbladder is usually persistent and does not go away within a few hours. Breathing deeply can make the pain worse.",
        ],
      },
    ],
    helps: [
      "Ask for an urgent GP appointment or get help from NHS 111 if you have pain in your tummy that lasts longer than 30 minutes.",
      "Call 999 or go to A&E if you have sudden, severe pain in your tummy.",
      "Call 999 or go to A&E if you have pain that spreads from your tummy to your back, and are being sick.",
      "Call 999 or go to A&E if your temperature is very high, you feel hot, cold or shivery, or your skin or the white part of your eyes looks yellow.",
      "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
    ],
    tryThisWeek: [
      "Know when pain needs NHS 111.",
      "Know the signs that need 999.",
      "Plan who would drive you to A&E.",
    ],
    ask: "Is my pain likely to be biliary colic, and what should I do if it comes back?",
    interactive: {
      kind: "signs",
      title: "Keep track of the pain",
      intro: "Tick what you have noticed. Your list is ready to share with a GP or NHS 111.",
      signs: [
        "Pain in the middle of my tummy",
        "Pain just under my ribs on the right",
        "Pain spreading to my shoulder blade",
        "Pain lasting longer than 30 minutes",
        "Pain after a meal or in the evening",
        "Pain waking me in the night",
        "Feeling sick or being sick",
        "Sweating a lot with the pain",
      ],
      after: "Sudden, severe tummy pain needs 999 or A&E. Tummy pain lasting longer than 30 minutes needs an urgent GP appointment or NHS 111.",
      copyHeading: "My tummy pain",
    },
    sources: [NHS_GS, NHSI_GS, GUTS_GS, NHS_CHOL],
    quiz: {
      question: "What is the pain called when a gallstone blocks a bile duct?",
      options: [{ text: "Biliary colic", right: true }, { text: "Heartburn" }, { text: "Renal colic" }],
      why: "This tummy pain is called biliary colic.",
    },
  },
  {
    id: "gs-causes",
    kicker: "Causes",
    question: "Why do some people get gallstones?",
    hook: "Age, sex, weight and family all play a part. A few of them can be changed.",
    short: "Gallstones become more likely with age, and they are three times more common in women. Living with obesity, a diet high in fat and low in fibre, losing weight quickly and some health conditions also raise the risk. Gradual weight loss, a balanced diet and regular meals can help.",
    sections: [
      {
        heading: "Common, and more so with age",
        paragraphs: [
          "Gallstones are common. There are usually no symptoms, so you may not know you have them. The risk increases as you get older.",
          "Guts UK says gallstones are three times more common in women than men. Nearly a quarter of women, and fewer men, have symptoms from gallstones by the age of 60.",
        ],
      },
      {
        heading: "What raises the chances",
        paragraphs: [
          "You may be more likely to get gallstones if you're over 40, if you're a woman, or if you're living with obesity. A diet that's high in fat and low in fibre, losing weight quickly, and conditions such as diabetes or Crohn's disease also play a part.",
          "NHS inform adds being female, particularly if you've had children, are taking the combined Pill or are having high-dose oestrogen therapy. Having a close family member who has had gallstones, and conditions that affect the flow of bile, such as cirrhosis, also raise the risk.",
          "Pregnancy also increases the risk of developing gallstones.",
        ],
      },
      {
        heading: "Weight and waist",
        paragraphs: [
          "Being overweight, particularly being obese, increases the amount of cholesterol in your bile, which increases your risk of developing gallstones.",
          "The risk is also higher with a bigger waist measurement, which is a sign of tummy fat, even among people who have a healthy weight.",
          "Losing weight quickly raises the risk too, including through weight loss surgery. But for people who are overweight, the health advantages of weight loss far outweigh the risk of gallstones.",
        ],
      },
      {
        heading: "Other conditions and habits",
        paragraphs: [
          "People with the hereditary conditions sickle cell disease and hereditary spherocytosis have an increased risk, and in these conditions gallstones may run in families. People with inflammatory bowel disease are also more likely to develop them.",
          "Missing meals and fasting reduce gallbladder emptying, which increases the risk of stones forming or getting bigger.",
        ],
      },
    ],
    helps: [
      "Eat a healthy, balanced diet, and avoid eating too many foods with a high saturated fat content.",
      "If you're overweight, control your weight by eating a healthy diet and taking plenty of regular exercise.",
      "Avoid low-calorie, rapid weight loss diets: a more gradual weight loss plan is recommended.",
      "Try to eat regular meals, including breakfast soon after you wake up.",
      "Aim for 150 minutes a week of moderate intensity exercise, and spend less time sitting.",
    ],
    tryThisWeek: [
      "Cut back on one high saturated fat food.",
      "Eat breakfast soon after waking.",
      "Fit in some moderate exercise.",
    ],
    ask: "Which of my risk factors can I change, and what would help most?",
    interactive: {
      kind: "risk-check",
      title: "What makes gallstones more likely?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "age", label: "Being over 40", note: "The risk increases as you get older.", changeable: false },
        { id: "female", label: "Being a woman", note: "Gallstones are three times more common in women than men, says Guts UK.", changeable: false },
        { id: "family", label: "A close family member with gallstones", note: "Having a close family member who has had gallstones raises the risk.", changeable: false },
        { id: "conditions", label: "Diabetes or Crohn's disease", note: "Conditions such as diabetes or Crohn's disease make gallstones more likely.", changeable: false },
        { id: "weight", label: "Living with obesity", note: "Extra weight increases the cholesterol in bile. A gradual weight loss plan can help.", changeable: true },
        { id: "fast", label: "Losing weight quickly", note: "Rapid weight loss diets can disrupt bile chemistry. A more gradual plan is recommended.", changeable: true },
        { id: "diet", label: "A diet high in fat and low in fibre", note: "A healthy, balanced diet with fruit, vegetables and wholegrains is recommended.", changeable: true },
        { id: "meals", label: "Missing meals", note: "Missing meals and fasting reduce gallbladder emptying. Regular meals help.", changeable: true },
      ],
    },
    sources: [NHS_GS, NHSI_GS, GUTS_GS, CUH_DIET],
    quiz: {
      question: "How does extra weight raise the risk of gallstones?",
      options: [{ text: "It increases the cholesterol in bile", right: true }, { text: "It thins the bile" }, { text: "It stops the liver making bile" }],
      why: "Being overweight, particularly being obese, increases the amount of cholesterol in your bile, which increases your risk of developing gallstones.",
    },
  },
  {
    id: "gs-complications",
    kicker: "Complications",
    question: "What happens if a gallstone causes infection, jaundice or pancreatitis?",
    hook: "Complications are rare. Knowing the names, and the signs, helps you act quickly.",
    short: "Complications of gallstones are rare, but a stone can cause a blockage that inflames the gallbladder or pancreas, causes jaundice, or lets bile become infected. These need treatment in hospital, and the gallbladder is usually removed afterwards.",
    sections: [
      {
        heading: "Rare, but serious",
        paragraphs: [
          "Complications of gallstones are rare. But sometimes gallstones cause a blockage that leads to serious complications, such as inflammation of the gallbladder or pancreas, or jaundice.",
          "Treatment for complications caused by gallstones is usually pain relief and surgery to remove the gallbladder.",
        ],
      },
      {
        heading: "An inflamed gallbladder",
        paragraphs: [
          "Acute cholecystitis is inflammation of the gallbladder. It usually happens when a gallstone blocks the cystic duct, the main opening of the gallbladder. Bile builds up, the pressure inside rises, and the gallbladder becomes inflamed and can sometimes become infected. Around 95% of cases are caused by a gallstone or biliary sludge.",
          "The main symptom is a sudden, sharp pain in the upper right-hand side of your tummy that spreads towards your right shoulder. Unlike other types of tummy pain, it is usually persistent and does not go away within a few hours. It usually needs to be treated in hospital with rest, fluids through a drip and antibiotics.",
          "Without treatment, it can sometimes lead to life-threatening complications, such as gallbladder tissue dying or the gallbladder splitting open.",
        ],
      },
      {
        heading: "Jaundice and infected bile ducts",
        paragraphs: [
          "If a gallstone passes out of the gallbladder into the bile duct and blocks the flow of bile, jaundice occurs. Your skin or the whites of your eyes turn yellow, and you may have itchy skin, darker pee and paler poo than usual. Yellow skin may be less noticeable if you have brown or black skin.",
          "If the stone stays stuck in the bile duct, the blocked bile can become infected. This serious condition is called cholangitis. The person becomes feverish and often develops shivering, and Guts UK says this is a medical emergency.",
          "Antibiotics treat the infection, and a procedure called ERCP helps the bile from the liver to drain.",
        ],
      },
      {
        heading: "Pancreatitis",
        paragraphs: [
          "Acute pancreatitis may develop when a gallstone moves out of the gallbladder and blocks the opening of the pancreas, causing it to become inflamed. Gallstones are one of the most common causes.",
          "Acute pancreatitis is a serious condition that needs urgent treatment in hospital. Most people start to get better within a week and can leave hospital in 5 to 10 days.",
        ],
      },
      {
        heading: "Rarer problems",
        paragraphs: [
          "Gallstone ileus is a rare but serious complication, where a gallstone blocks the bowel. Symptoms include tummy pain, being sick, a swollen tummy and constipation, and a blocked bowel needs immediate medical treatment.",
          "Gallbladder cancer is a rare but serious complication. A history of gallstones increases the risk, but people with a history of gallstones have a less than 1 in 10,000 chance of developing it.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E if your skin or the white part of your eyes looks yellow, your temperature is very high, or you feel hot, cold or shivery.",
      "Call 999 or go to A&E if you have pain that spreads from your tummy to your back, and are being sick.",
      "See a GP as soon as possible if you develop sudden and severe tummy pain, particularly if it lasts longer than a few hours or comes with jaundice or a high temperature.",
      "If you're unable to contact a GP immediately, phone your local out-of-hours service or call NHS 111.",
      "If you have had acute pancreatitis, drink less alcohol or none at all, stop smoking and eat a healthy, low-fat diet to help stop it coming back.",
    ],
    tryThisWeek: [
      "Learn the signs that need 999.",
      "Know your out-of-hours number.",
      "After pancreatitis, eat low-fat.",
    ],
    ask: "Which complications could my gallstones cause, and what signs should I watch for?",
    interactive: {
      kind: "flip-cards",
      title: "Complications, card by card",
      intro: "Turn each card to see what happens and what it needs.",
      cards: [
        { id: "cholecystitis", front: "Acute cholecystitis", when: "A stone blocks the gallbladder", back: "Inflammation of the gallbladder. Sharp pain on the upper right that spreads to the shoulder. Treated in hospital." },
        { id: "jaundice", front: "Jaundice", when: "A stone blocks the bile duct", back: "Yellow skin or whites of the eyes, itchy skin, darker pee and paler poo than usual." },
        { id: "cholangitis", front: "Cholangitis", when: "Blocked bile becomes infected", back: "Fever and shivering. Guts UK says this is a medical emergency." },
        { id: "pancreatitis", front: "Acute pancreatitis", when: "A stone blocks the pancreas", back: "Inflammation of the pancreas. A serious condition that needs urgent treatment in hospital." },
        { id: "ileus", front: "Gallstone ileus", when: "A stone blocks the bowel", back: "Tummy pain, being sick, a swollen tummy and constipation. Needs immediate treatment." },
      ],
    },
    sources: [NHS_GS, NHS_CHOL, NHSI_GS, GUTS_GS, NHS_PANC, NHS_JAUNDICE],
    quiz: {
      question: "How common are complications of gallstones?",
      options: [{ text: "Rare", right: true }, { text: "Most people get one" }, { text: "Everyone gets one in time" }],
      why: "Complications of gallstones are rare.",
    },
  },
  {
    id: "gs-tests",
    kicker: "Tests",
    question: "How are gallstones found?",
    hook: "Often by chance. When there are symptoms, a painless ultrasound scan usually settles it.",
    short: "Gallstones are often found by chance on a scan for something else. With symptoms, a GP examines your tummy and arranges blood tests, and an ultrasound scan usually confirms the stones. An MRI scan or other tests may follow if a stone may be in the bile duct.",
    sections: [
      {
        heading: "Often found by chance",
        paragraphs: [
          "If you do not have symptoms, gallstones may be found by chance at a scan or X-ray for another health issue. If you have symptoms of gallstones, you may have an ultrasound scan and a blood test.",
        ],
      },
      {
        heading: "Seeing your GP",
        paragraphs: [
          "Your GP will ask about your symptoms in detail. They may do a test called Murphy's sign: you breathe in deeply while their hand is pressed on your tummy, just below the rib cage. If this is painful, it usually means your gallbladder is inflamed and you may need urgent treatment.",
          "Blood tests look for signs of infection or inflammation, and check whether your liver is working normally. If gallstones have moved into your bile duct, the liver may not be able to work properly.",
        ],
      },
      {
        heading: "The ultrasound scan",
        paragraphs: [
          "Gallstones can usually be confirmed using an ultrasound scan. A small handheld device is moved over your upper tummy, and sound waves bounce back to form a picture on a screen. It is painless and usually takes about 10 to 15 minutes.",
          "Most gallstones reflect ultrasound very well. It is important not to eat or drink before the scan, so that the gallbladder is as full of bile as possible.",
          "The sound waves used in ultrasound scans are safe, and the scans do not use any radiation. Your result will be sent to the doctor who referred you.",
        ],
      },
      {
        heading: "When more tests are needed",
        paragraphs: [
          "Sometimes it is not clear whether any stones have passed into the bile duct. Then you may need an MRI scan, which uses strong magnetic fields and radio waves, or a cholangiography, which uses a dye that shows up on X-rays.",
          "A CT scan may be done to look for complications, such as acute pancreatitis. If a blockage is found during a cholangiography, your doctor may try to remove it using an endoscope. This is known as ERCP.",
        ],
      },
    ],
    helps: [
      "Follow the instructions you're given about eating and drinking before your ultrasound scan.",
      "Let the person doing the scan know if you'd like someone else to be in the room with you.",
      "If you have not heard about your results after a few weeks, contact the specialist or your GP surgery.",
      "Talk to a healthcare professional if you have questions about your results or do not understand them.",
      "Ask your doctor whether the tests will be uncomfortable for you.",
    ],
    tryThisWeek: [
      "Check your scan letter about eating.",
      "Ask for a chaperone if you want one.",
      "Chase results after a few weeks.",
    ],
    ask: "What did my scan show, and do I need any more tests?",
    interactive: {
      kind: "flip-cards",
      title: "Your tests, card by card",
      intro: "Turn each card to see what each test looks for.",
      cards: [
        { id: "murphy", front: "Murphy's sign", when: "At the GP", back: "You breathe in with the GP's hand on your tummy. Pain usually means the gallbladder is inflamed." },
        { id: "blood", front: "Blood tests", when: "Usually early on", back: "Look for signs of infection or inflammation, and check whether the liver is working normally." },
        { id: "ultrasound", front: "Ultrasound scan", when: "The main scan", back: "Sound waves make a picture. Most gallstones show up very well. Painless, about 10 to 15 minutes." },
        { id: "mri", front: "MRI scan", when: "If the bile duct may be affected", back: "Strong magnetic fields and radio waves make detailed pictures, to look for stones in the bile ducts." },
        { id: "cholangiography", front: "Cholangiography", when: "For more detail", back: "A dye that shows up on X-rays reveals any abnormality in the bile or pancreatic systems." },
        { id: "ct", front: "CT scan", when: "To look for complications", back: "A series of X-rays from many angles, often done in an emergency for severe tummy pain." },
      ],
    },
    sources: [NHS_GS, NHSI_GS, GUTS_GS, NHS_ULTRASOUND, NHS_CHOL],
    quiz: {
      question: "Why should you not eat or drink before a gallbladder ultrasound scan?",
      options: [{ text: "So the gallbladder is full of bile", right: true }, { text: "So the scan is shorter" }, { text: "So no dye is needed" }],
      why: "It is important not to eat or drink before the scan, so that the gallbladder is as full of bile as possible.",
    },
  },
  {
    id: "gs-surgery",
    kicker: "Treatment",
    question: "What happens when the gallbladder is removed?",
    hook: "One of the most common operations in the NHS, usually done by keyhole in about an hour.",
    short: "The main treatment for gallstones that cause problems is an operation to remove the gallbladder, called a cholecystectomy. Most people have keyhole surgery under a general anaesthetic and go home the same day. Stones in the bile duct can be cleared with a procedure called ERCP.",
    sections: [
      {
        heading: "Why it is offered",
        paragraphs: [
          "Gallbladder removal, also known as a cholecystectomy, is an operation to remove your gallbladder. It is often recommended if you have gallstones that are causing problems like severe or frequent tummy pain.",
          "Your gallbladder may not need to be removed if you have gallstones that are not causing any symptoms. You can live without a gallbladder and continue to eat a normal, healthy diet after it's been removed.",
          "The operation is extremely common, with more than 60,000 done on the NHS every year.",
        ],
      },
      {
        heading: "Getting ready",
        paragraphs: [
          "Before having your gallbladder removed, try to lose weight if you're overweight. If you smoke, you should stop at least 6 weeks before having surgery.",
          "A few weeks before your operation, you'll usually go to a pre-admission clinic. Your doctor or nurse may ask about your medical history and medicines, and do some tests, such as blood tests, an X-ray and a test that records your heart's electrical activity, called an ECG. They'll also ask how you'll get home and who will look after you.",
        ],
      },
      {
        heading: "Keyhole surgery",
        paragraphs: [
          "Most people have keyhole surgery, called a laparoscopic cholecystectomy. You'll have a general anaesthetic, so you'll be asleep and unable to feel any pain. The operation usually takes about 1 hour.",
          "The surgeon makes a small cut, usually just below your belly button, and a few other small cuts on the right-hand side of your tummy. Air is pumped in so the surgeon can see inside, and a thin tube with a camera shows video images on a screen. Small surgical tools passed through the cuts are used to remove the gallbladder.",
          "If there may be gallstones in the bile duct, an X-ray or ultrasound scan of the duct is also taken during the operation. If stones are found, they may be removed during the keyhole surgery.",
        ],
      },
      {
        heading: "Open surgery and other options",
        paragraphs: [
          "Open surgery is only used if the gallbladder is very inflamed, or if it's not possible to remove it using keyhole surgery. A single larger cut is made, which means you may have more pain afterwards and take longer to recover.",
          "If gallstones are found in your common bile duct, you may have a procedure called ERCP to clear it. A long, thin tube with a small camera is passed into your stomach through your mouth, and the opening of the bile duct is widened so the stones can pass through.",
          "Tablets called ursodeoxycholic acid can sometimes dissolve small stones that do not contain calcium. They are not prescribed very often, because they are rarely very effective, need to be taken for up to 2 years, and stones can come back once treatment stops.",
        ],
      },
      {
        heading: "Weighing up the risks",
        paragraphs: [
          "Gallbladder removal is a common and safe procedure. But as with any operation there are risks, including blood clots, wound infection, damage to the bile ducts, bile leaking into the tummy and gallstones left behind. Your doctor will explain the risks to you in more detail.",
          "Guts UK says surgery may very occasionally damage the bile ducts, up to a 1 in 200 chance, and a stone gets stuck in the ducts during surgery in 1 in 100 people. Any risks should be weighed up against the risks of not having surgery.",
        ],
      },
    ],
    helps: [
      "If you're overweight, try to lose weight before the operation.",
      "If you smoke, stop at least 6 weeks before having surgery.",
      "Think about how you'll get home, who will look after you for the first day or so, and talk to your employer about returning to work.",
      "Follow any instructions you're given about how long before your operation you should not eat or drink.",
      "Ask your surgeon about the benefits of surgery and the risk of complications.",
    ],
    tryThisWeek: [
      "Plan your lift home.",
      "Make a plan to stop smoking.",
      "List questions for your surgeon.",
    ],
    ask: "Will I have keyhole surgery, and what are the risks for me?",
    interactive: {
      kind: "timeline",
      title: "From clinic to home",
      steps: [
        { id: "clinic", when: "A few weeks before", title: "Pre-admission clinic", points: ["Questions about your health and medicines", "Tests such as blood tests, an X-ray and an ECG", "How you'll get home and who will help"] },
        { id: "before", when: "Before the day", title: "Getting ready", points: ["Stop smoking at least 6 weeks before", "Try to lose weight if you're overweight", "Talk to your employer about returning to work"] },
        { id: "day", when: "On the day", title: "In hospital", points: ["Nothing to eat or drink, as instructed", "Routine checks before the operating theatre", "A general anaesthetic, so you're asleep"] },
        { id: "operation", when: "About 1 hour", title: "The operation", points: ["Usually keyhole surgery through small cuts", "Open surgery if keyhole is not possible"] },
        { id: "home", when: "Usually the same day", title: "Going home", points: ["You should be able to go home the same day", "It can take several weeks to recover"] },
      ],
    },
    sources: [NHS_GBR_WHAT, NHS_GBR_WHY, NHS_GBR_PREP, NHS_GBR_HOW, NHSI_GS, GUTS_GS, NHS_GS, NHS_GBR_COMPLICATIONS],
    quiz: {
      question: "How do most people have their gallbladder removed?",
      options: [{ text: "By keyhole surgery", right: true }, { text: "Through the mouth" }, { text: "With tablets alone" }],
      why: "Most people have keyhole surgery, called a laparoscopic cholecystectomy.",
    },
  },
  {
    id: "gs-after-surgery",
    kicker: "Recovery",
    question: "What is recovery like after gallbladder removal?",
    hook: "Home the same day for most people, back to work in a week or two for many.",
    short: "Most people go home the same day, with someone to drive them and stay for the first 24 hours. Wounds are sore for a few days; light activity and normal, healthy food help. Many people return to work in 1 to 2 weeks, and lasting tummy symptoms or diarrhoea are worth reporting.",
    sections: [
      {
        heading: "Going home",
        paragraphs: [
          "You can usually go home on the same day as having your gallbladder removed, but some people may need to stay in hospital overnight. Before you leave, a member of your care team will check you're ready.",
          "Ask a friend or relative to drive you home from the hospital, and to stay with you for the first 24 hours to look after you.",
        ],
      },
      {
        heading: "The first few days",
        paragraphs: [
          "Your wounds will be painful for a few days, and you should be given painkillers to take. Follow the advice from your care team about caring for your wound. You may be able to remove your dressing a few days after surgery.",
          "Eat a normal, healthy diet. You may find it easier to eat small meals for the first few days.",
          "You'll be told if you need a follow-up appointment to have your stitches removed. Some types of stitches dissolve over time and do not need to be removed.",
        ],
      },
      {
        heading: "Building back up",
        paragraphs: [
          "Start doing some light activity, but build up gradually and avoid strenuous exercise. The NHS says it can take several weeks to recover. NHS inform says full recovery after keyhole surgery typically takes around 10 days, and around 6 weeks after open surgery.",
          "Do not drive until you're able to do an emergency stop without any pain or discomfort. Check your insurance policy to see if there are any rules about driving after surgery.",
        ],
      },
      {
        heading: "Back to work",
        paragraphs: [
          "You may be able to return to work 1 to 2 weeks after having your gallbladder removed, depending on the type of work you do and the type of surgery you've had. If your job involves heavy lifting or standing for long periods, you might not be able to go back as soon.",
        ],
      },
      {
        heading: "Symptoms after the operation",
        paragraphs: [
          "Some people feel sick, are sick, or have indigestion, tummy pain or diarrhoea after the operation. This is sometimes called post-cholecystectomy syndrome. These symptoms usually improve soon after the operation, but contact your GP or care team if you continue to have them.",
          "Around 13 in 100 people may develop diarrhoea after gallbladder surgery, and it may not come on until up to 3 months after the operation. If you develop diarrhoea within 3 months of your operation, discuss it with your doctor.",
        ],
      },
    ],
    helps: [
      "Ask a friend or relative to drive you home and to stay with you for the first 24 hours.",
      "Take painkillers to help ease the pain: your wounds will be painful for a few days.",
      "Eat a normal, healthy diet; you may find small meals easier for the first few days.",
      "Start doing some light activity, but build up gradually and avoid strenuous exercise.",
      "Do not drive until you're able to do an emergency stop without any pain or discomfort.",
      "Contact your GP or care team if feeling sick, indigestion, tummy pain or diarrhoea carry on.",
    ],
    tryThisWeek: [
      "Arrange someone to stay 24 hours.",
      "Eat small meals at first.",
      "Build up light activity gradually.",
    ],
    ask: "When can I drive, exercise and go back to work after my operation?",
    interactive: {
      kind: "timeline",
      title: "Your recovery, step by step",
      steps: [
        { id: "same-day", when: "Same day", title: "Going home", points: ["A friend or relative drives you home", "Someone stays with you for the first 24 hours", "Painkillers for the wound pain"] },
        { id: "days", when: "First few days", title: "Taking it easy", points: ["Small meals may be easier", "Light activity, built up gradually", "You may be able to remove your dressing"] },
        { id: "weeks", when: "1 to 2 weeks", title: "Back to work, for many", points: ["Depends on your job and your surgery", "Longer for heavy lifting or standing for long periods"] },
        { id: "driving", when: "When it is pain-free", title: "Driving again", points: ["When you can do an emergency stop without pain", "Check your insurance policy"] },
        { id: "months", when: "Up to 3 months", title: "Watch for diarrhoea", points: ["Around 13 in 100 people may get diarrhoea", "Discuss it with your doctor"] },
      ],
    },
    sources: [NHS_GBR_RECOVERY, NHS_GBR_WHAT, NHSI_GS, NHS_GBR_COMPLICATIONS, GUTS_GS, CUH_DIET],
    quiz: {
      question: "When can you drive again after gallbladder removal?",
      options: [{ text: "When you can do an emergency stop without pain", right: true }, { text: "The next morning" }, { text: "Only after 6 months" }],
      why: "Do not drive until you're able to do an emergency stop without any pain or discomfort.",
    },
  },
  {
    id: "gs-urgent",
    kicker: "Urgent help",
    question: "When is gallstone pain an emergency?",
    hook: "Sudden severe pain, a fever or yellow eyes do not wait. Here is who to call, and when.",
    short: "Call 999 or go to A&E for sudden, severe tummy pain, pain spreading to your back with being sick, a very high temperature or shivers, or yellow skin or eyes. Tummy pain lasting longer than 30 minutes needs an urgent GP appointment or NHS 111. After surgery, there are other signs to know.",
    sections: [
      {
        heading: "Call 999 or go to A&E",
        paragraphs: [
          "The NHS says to call 999 or go to A&E if you have sudden, severe pain in your tummy, or pain that spreads from your tummy to your back and you are being sick.",
          "Also call 999 or go to A&E if your temperature is very high, or you feel hot, cold or shivery, or if your skin or the white part of your eyes looks yellow.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance. Bring any medicines you take with you.",
        ],
      },
      {
        heading: "An urgent GP appointment or NHS 111",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have pain in your tummy that lasts longer than 30 minutes. You can call 111 or get help from 111 online.",
          "In Scotland, NHS inform says to contact your GP immediately if you develop jaundice, tummy pain lasting longer than eight hours, a high temperature and chills, or pain so intense that you cannot find a position to relieve it. If you cannot contact your GP immediately, phone your local out-of-hours service or NHS 24's 111 service.",
        ],
      },
      {
        heading: "Why fever and yellow skin matter",
        paragraphs: [
          "If a gallstone stays stuck in the bile duct, the blocked bile can become infected. This is called cholangitis. The person becomes feverish and often develops shivering, and Guts UK says this is a medical emergency.",
          "Jaundice can be a sign of something serious, so you need to get urgent medical help. Gallstones are one of its possible causes.",
        ],
      },
      {
        heading: "After the operation",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have severe or worsening pain that does not go away, pus oozing from your wounds, or pain, swelling or redness around them. The same goes if your skin or the whites of your eyes are yellow, your leg is swollen, tender or painful, or your temperature is very high.",
          "Call 999 or go to A&E if you have pain and swelling in your leg and you're having difficulty breathing or chest pains. This could be a blood clot in the lungs, which needs to be treated immediately.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E if you have sudden, severe pain in your tummy.",
      "Call 999 or go to A&E if your skin or the white part of your eyes looks yellow, or you feel hot, cold or shivery.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you have tummy pain that lasts longer than 30 minutes.",
      "Do not drive to A&E: ask someone to drive you or call 999 for an ambulance, and bring any medicines you take.",
      "After surgery, call 999 or go to A&E if you have pain and swelling in your leg with difficulty breathing or chest pains.",
    ],
    tryThisWeek: [
      "Know which signs need 999.",
      "Know when to call NHS 111.",
      "Keep your medicines ready to bring.",
    ],
    ask: "Which symptoms mean I should call 999, and which mean NHS 111?",
    interactive: {
      kind: "scenarios",
      title: "Which help, and how fast?",
      scenarios: [
        {
          id: "severe",
          situation: "Sudden, severe pain starts in your tummy.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait to see if it settles" }, { text: "Book a routine GP appointment" }],
          why: "Call 999 or go to A&E if you have sudden, severe pain in your tummy.",
        },
        {
          id: "half-hour",
          situation: "Your tummy pain has lasted longer than 30 minutes.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Ignore it until next week" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if you have pain in your tummy that lasts longer than 30 minutes.",
        },
        {
          id: "yellow",
          situation: "Someone notices the whites of your eyes look yellow.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait for your next check-up" }],
          why: "The NHS says to call 999 or go to A&E if your skin or the white part of your eyes looks yellow.",
        },
        {
          id: "driving",
          situation: "You need A&E, and your car is outside.",
          options: [{ text: "Ask someone to drive you, or call 999", best: true }, { text: "Drive yourself" }],
          why: "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
        },
        {
          id: "wound",
          situation: "A few days after surgery, pus is oozing from a wound.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Leave it and see" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if pus is oozing from your wounds.",
        },
      ],
    },
    sources: [NHS_GS, NHS_GBR_COMPLICATIONS, NHSI_GS, GUTS_GS, NHS_JAUNDICE],
    quiz: {
      question: "What should you do for sudden, severe tummy pain?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Wait until the morning" }, { text: "Drive yourself to the GP" }],
      why: "The NHS says to call 999 or go to A&E if you have sudden, severe pain in your tummy.",
    },
  },
  {
    id: "gs-food",
    kicker: "Living well",
    question: "What should I eat before and after gallbladder surgery?",
    hook: "Not necessarily low fat. Regular, balanced meals matter more than cutting out whole foods.",
    short: "While you wait for surgery, avoiding foods that cause symptoms can help, and you may be advised to cut down on fat. Hospital dietitians recommend a balanced diet with moderate fat and regular meals rather than cutting fat out. After the operation, there is no need for a low-fat diet.",
    sections: [
      {
        heading: "While you wait for surgery",
        paragraphs: [
          "While you're waiting for surgery, the NHS says you may want to avoid foods that cause symptoms, and you may be advised to eat a low-fat diet.",
          "Food tolerance varies between people, and sometimes having smaller meals more regularly through the day can help. There is no research to suggest that gluten-free or dairy-free diets help gallstone symptoms.",
        ],
      },
      {
        heading: "Not necessarily low fat",
        paragraphs: [
          "Cambridge University Hospitals says a low-fat diet is not right for all patients, and there is little evidence to support it. Removing fats from your diet can also lead to rapid weight loss or nutritional deficiencies.",
          "Instead, it recommends a healthy, varied diet in line with the Eatwell Guide, including moderate amounts of fat, as fat is an essential part of a balanced diet.",
          "If you find a link between fat and your symptoms, try reducing your fat intake to see if this helps. If other foods seem to trigger your symptoms, you could try avoiding them.",
        ],
      },
      {
        heading: "A balanced plate",
        paragraphs: [
          "Eat at least five portions of fruit and vegetables a day, and base meals on starchy foods, choosing wholegrains whenever you can. Include a variety of proteins, such as beans, pulses, tofu, fish, eggs and lean meats.",
          "Limit foods and drinks high in fat, sugar or salt, such as deep-fried foods, pastries, pies and fried snacks. Foods high in saturated fat include meat pies, sausages, fatty cuts of meat, butter, cream, hard cheeses, cakes and biscuits.",
          "There's also evidence that regularly eating nuts, such as peanuts or cashews, can help reduce your risk of developing gallstones.",
        ],
      },
      {
        heading: "Regular meals",
        paragraphs: [
          "Try to eat regular meals, as missing meals and fasting reduce gallbladder emptying. Eat breakfast soon after you wake up, as cholesterol levels are highest in bile produced overnight.",
          "If eating large meals causes discomfort, try smaller portions more often. Drink plenty of non-alcoholic fluids: the government recommends 6 to 8 cups or glasses a day.",
        ],
      },
      {
        heading: "After the operation",
        paragraphs: [
          "After surgery, eat a normal, healthy diet. You may find it easier to eat small meals for the first few days.",
          "You do not need to follow a low-fat diet after gallbladder removal, and there is no evidence to suggest it is needed. If you lose weight or struggle to eat, contact your GP straight away.",
        ],
      },
    ],
    helps: [
      "While you wait for surgery, avoid foods that cause symptoms.",
      "Try smaller meals more regularly through the day if large meals cause discomfort.",
      "Eat regular meals, with breakfast soon after you wake up.",
      "If fat seems to trigger symptoms, try microwaving, steaming, poaching, boiling or grilling instead of roasting or frying.",
      "Check labels: foods with less than 3g of total fat per 100g are green in the traffic light system.",
      "Ask your doctor to refer you to a dietitian if you need more tailored advice.",
    ],
    tryThisWeek: [
      "Eat breakfast soon after waking.",
      "Try grilling instead of frying.",
      "Check labels for green on fat.",
    ],
    ask: "Should I change what I eat while I wait for my operation?",
    interactive: {
      kind: "scenarios",
      title: "Everyday food choices",
      scenarios: [
        {
          id: "skip",
          situation: "You're busy and thinking of skipping lunch.",
          options: [{ text: "Have a regular meal", best: true }, { text: "Skip it and eat a big dinner" }],
          why: "Try to eat regular meals, as missing meals and fasting reduce gallbladder emptying.",
        },
        {
          id: "fried",
          situation: "Fatty food seems to set off your symptoms.",
          options: [{ text: "Try grilling instead of frying", best: true }, { text: "Cut out all fat completely" }],
          why: "If you find a link between fat and your symptoms, try reducing your fat intake. Fat is still an essential part of a balanced diet.",
        },
        {
          id: "gluten",
          situation: "A friend suggests going gluten-free for gallstones.",
          options: [{ text: "Skip it: there's no research it helps", best: true }, { text: "Try it for a month" }],
          why: "There is no research to suggest that gluten-free or dairy-free diets help gallstone symptoms.",
        },
        {
          id: "after",
          situation: "Your gallbladder was removed last month.",
          options: [{ text: "Eat a healthy, balanced diet", best: true }, { text: "Keep to a strict low-fat diet for life" }],
          why: "You do not need to follow a low-fat diet after gallbladder removal, and there is no evidence to suggest it is needed.",
        },
      ],
    },
    sources: [NHS_GS, CUH_DIET, GUTS_GS, NHSI_GS, NHS_GBR_RECOVERY],
    quiz: {
      question: "Do you need a low-fat diet after gallbladder removal?",
      options: [{ text: "No, a healthy, balanced diet is advised", right: true }, { text: "Yes, for life" }, { text: "Yes, for a year" }],
      why: "You do not need to follow a low-fat diet after gallbladder removal, and there is no evidence to suggest it is needed.",
    },
  },
  {
    id: "gs-without-gallbladder",
    kicker: "Living well",
    question: "Can I live normally without a gallbladder?",
    hook: "Yes. Bile still flows; it just no longer waits in storage between meals.",
    short: "Yes. The gallbladder is useful but not essential: the liver still makes the same amount of bile, which simply drips into the bowel all the time. Most people have no lasting after-effects, but diarrhoea that carries on can be bile acid diarrhoea, which is treatable.",
    sections: [
      {
        heading: "Useful, not essential",
        paragraphs: [
          "You can live without a gallbladder and continue to eat a normal, healthy diet after it's been removed. The organ can be useful, but it's not essential, as your liver will still produce bile to digest food.",
          "Without a gallbladder, bile just drips continuously into the small bowel, rather than being stored between meals. The liver produces the same level of bile as it did before, so bile supplements are not needed.",
        ],
      },
      {
        heading: "Settling down",
        paragraphs: [
          "Most people do not have any longer-term after-effects. Some people feel sick, have indigestion, tummy pain or diarrhoea after the operation. This is sometimes called post-cholecystectomy syndrome, and it usually improves soon after the operation.",
          "Some people have bloating and diarrhoea after eating fatty or spicy food. If certain foods do trigger symptoms, you may wish to avoid them.",
        ],
      },
      {
        heading: "When diarrhoea carries on",
        paragraphs: [
          "Around 13 in 100 people may develop diarrhoea after gallbladder surgery. If it persists, it should be checked for a condition called bile acid diarrhoea, also known as bile acid malabsorption. It is readily treatable if it is recognised.",
          "The main test is a SeHCAT scan, which needs a referral to a gastroenterologist. Medicines called bile acid binders can help reduce how often and how urgently you need to go, and give more formed stools.",
          "Keeping a food and symptom diary can help highlight trigger foods or drinks. Let your GP know about any unplanned weight loss.",
        ],
      },
      {
        heading: "If the old pain comes back",
        paragraphs: [
          "In some people the original symptoms carry on or come back after treatment. If so, it is quite possible they were not due to gallstones. Sometimes other conditions, such as irritable bowel syndrome, cause pains that seem to come from the gallbladder.",
          "People at high risk of stones may, after some time, develop further stones in the bile ducts and get symptoms again. If this happens, they are usually offered an ERCP. Continuing symptoms should be reported to your GP, so the cause can be found and treatment offered.",
        ],
      },
    ],
    helps: [
      "If you have no symptoms, there is no need to keep changing your diet: eat a normal, healthy diet.",
      "If certain foods trigger bloating or diarrhoea, you may wish to avoid them.",
      "If you develop diarrhoea within 3 months of your operation, discuss it with your doctor.",
      "Keep a food and symptom diary to help highlight trigger foods or drinks.",
      "Report any continuing symptoms to your GP, so the cause can be identified and treatment offered.",
    ],
    tryThisWeek: [
      "Note any foods that trigger symptoms.",
      "Start a food and symptom diary.",
      "Tell your GP about ongoing symptoms.",
    ],
    ask: "Could my symptoms since the operation be bile acid diarrhoea, and should I be tested?",
    interactive: {
      kind: "signs",
      title: "Since your operation",
      intro: "Tick anything you have noticed since your gallbladder was removed. Your list is ready to share with your GP.",
      signs: [
        "Diarrhoea that has not settled",
        "Needing the toilet very urgently",
        "Waking at night to empty my bowels",
        "Pale, greasy or hard-to-flush poo",
        "Bloating after fatty or spicy food",
        "Feeling sick or indigestion",
        "Tummy pain like before the operation",
        "Losing weight without trying",
      ],
      after: "Continuing symptoms should be reported to your GP, so the cause can be found and treatment offered.",
      copyHeading: "Since my gallbladder operation",
    },
    sources: [NHS_GBR_WHAT, NHSI_GS, GUTS_GS, NHS_GBR_COMPLICATIONS, GUTS_BAD, CUH_DIET, NHS_CHOL],
    quiz: {
      question: "What happens to bile after the gallbladder is removed?",
      options: [{ text: "It drips continuously into the small bowel", right: true }, { text: "The liver stops making it" }, { text: "It has to be replaced with supplements" }],
      why: "Without a gallbladder, bile just drips continuously into the small bowel, rather than being stored between meals.",
    },
  },
  {
    id: "gs-weight",
    kicker: "Living well",
    question: "How do weight and weight loss affect gallstones?",
    hook: "Extra weight raises the risk, and so does losing it too fast. Steady is the safe middle.",
    short: "Being overweight increases the cholesterol in bile, which makes gallstones more likely. Losing weight quickly also raises the risk, so a steady, gradual plan is recommended. For people who are overweight, the health benefits of losing weight far outweigh the risk of gallstones.",
    sections: [
      {
        heading: "Weight and bile",
        paragraphs: [
          "Being overweight, particularly being obese, increases the amount of cholesterol in your bile, which increases your risk of developing gallstones.",
          "The risk is also higher with a bigger waist measurement, which is a sign of tummy fat, even among people who have a healthy weight.",
        ],
      },
      {
        heading: "Why fast weight loss can backfire",
        paragraphs: [
          "Losing weight quickly, for example through weight loss surgery, makes gallstones more likely. There's evidence that low-calorie, rapid weight loss diets can disrupt your bile chemistry and increase your risk of developing gallstones.",
          "Guts UK says people who lose weight fast, at more than one and a half kilograms each week, are more likely to develop gallstones. Cambridge University Hospitals does not recommend losing more than 2lbs, or 1kg, a week, or yo-yo dieting.",
          "But for people who are overweight, the health advantages of weight loss far outweigh the risk of gallstones.",
        ],
      },
      {
        heading: "Losing weight steadily",
        paragraphs: [
          "If you are overweight, gradual weight loss can reduce the risk of developing gallstones. The NHS suggests trying to lose weight steadily, aiming for 1 to 2lbs a week.",
          "Just losing a small amount of weight, 5 to 10% of your body weight, can improve your health. Eat a healthy, balanced diet, cut down on high fat or sugary foods, and be kind to yourself: changing habits and losing weight is not easy and takes time.",
          "Physical activity and less time sitting are also important to reduce the risk of gallstones. Current UK guidelines recommend 150 minutes a week of moderate intensity exercise, such as fast-paced walking, dancing or jogging.",
        ],
      },
      {
        heading: "Before surgery, and after weight loss surgery",
        paragraphs: [
          "Before having your gallbladder removed, try to lose weight if you're overweight.",
          "Rapid weight loss can cause gallstones to grow. Tablets called ursodeoxycholic acid are occasionally prescribed as a precaution, for example if you've recently had weight loss surgery.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "A GP can give you advice about losing weight safely and refer you for support, such as weight management programmes. Very low calorie diets are not suitable or safe for everyone.",
          "If you have a medical condition or a special diet for your health, talk to a GP or healthcare professional before making changes to your lifestyle. Only take weight loss medicine if it has been prescribed for you.",
        ],
      },
    ],
    helps: [
      "Try to lose weight steadily, aiming for 1 to 2lbs a week rather than faster.",
      "Avoid low-calorie, rapid weight loss diets and yo-yo dieting.",
      "Aim for 150 minutes a week of moderate intensity exercise, and spend less time sitting.",
      "If you're overweight and waiting for gallbladder removal, try to lose weight before the operation.",
      "Ask a GP for advice about losing weight safely, and about weight management programmes.",
      "Only take weight loss medicine if it has been prescribed for you.",
    ],
    tryThisWeek: [
      "Set a steady weekly weight goal.",
      "Add some moderate exercise.",
      "Ask a GP about local programmes.",
    ],
    ask: "How quickly is it safe for me to lose weight with gallstones?",
    interactive: {
      kind: "scenarios",
      title: "Weight loss choices",
      scenarios: [
        {
          id: "crash",
          situation: "A crash diet promises fast results before your operation.",
          options: [{ text: "Choose a gradual plan instead", best: true }, { text: "Try the crash diet" }],
          why: "Low-calorie, rapid weight loss diets can disrupt your bile chemistry and increase your risk of developing gallstones.",
        },
        {
          id: "pace",
          situation: "You're losing much more than 1kg a week.",
          options: [{ text: "Slow down to a steadier pace", best: true }, { text: "Speed up while it's working" }],
          why: "Cambridge University Hospitals does not recommend losing more than 2lbs, or 1kg, a week, or yo-yo dieting.",
        },
        {
          id: "worth",
          situation: "You worry that losing weight will cause gallstones.",
          options: [{ text: "Keep going, steadily", best: true }, { text: "Give up on losing weight" }],
          why: "For people who are overweight, the health advantages of weight loss far outweigh the risk of gallstones.",
        },
        {
          id: "medicine",
          situation: "You see weight loss medicine for sale online.",
          options: [{ text: "Only take it if it's prescribed for you", best: true }, { text: "Buy it online" }],
          why: "Only take weight loss medicine if it has been prescribed for you.",
        },
      ],
    },
    sources: [NHS_GS, NHSI_GS, GUTS_GS, CUH_DIET, NHS_OBESITY, NHS_GBR_PREP, NHS_LOSE],
    quiz: {
      question: "What pace of weight loss does the NHS suggest?",
      options: [{ text: "Steadily, aiming for 1 to 2lbs a week", right: true }, { text: "As fast as possible" }, { text: "Half a stone a week" }],
      why: "The NHS suggests trying to lose weight steadily, aiming for 1 to 2lbs a week.",
    },
  },
  {
    id: "gs-watching",
    kicker: "Living well",
    question: "Do gallstones with no symptoms need treatment?",
    hook: "Usually not. Watching and waiting is common, as long as you know what to look out for.",
    short: "Gallstones that cause no symptoms usually do not need treatment. Doctors often recommend active monitoring: no treatment now, but tell your GP if symptoms start. Treatment may still be offered to some people, such as those who have had gallstone pancreatitis.",
    sections: [
      {
        heading: "Found by chance",
        paragraphs: [
          "Most people who have gallstones do not get symptoms. If you do not have symptoms, gallstones may be found by chance at a scan or X-ray for another health issue.",
          "When gallstones are discovered by accident while investigating another condition, they are usually not treated.",
        ],
      },
      {
        heading: "Watching and waiting",
        paragraphs: [
          "If you have gallstones, you might not need any treatment if they're not causing symptoms. You may need follow-up appointments with the doctor in the future, to check the gallstones are not getting worse or causing problems.",
          "This is often called active monitoring. You won't have immediate treatment, but you should let your GP know if you notice any symptoms. As a general rule, the longer you go without symptoms, the less likely it is that your condition will get worse.",
          "Even if you have one attack of pain from gallstones, there may be no further trouble for many years, if ever.",
        ],
      },
      {
        heading: "When treatment may still be offered",
        paragraphs: [
          "Some people are offered treatment for gallstones with no symptoms, to prevent problems in the future. This is especially the case if they have had acute pancreatitis caused by gallstones.",
          "Treatment may also be needed if you have a condition that increases the risk of complications, such as cirrhosis, high blood pressure inside the liver, or diabetes. It may also be recommended if a scan shows high levels of calcium inside your gallbladder.",
        ],
      },
      {
        heading: "Knowing when to act",
        paragraphs: [
          "When people have symptoms, they should be offered treatment, so contact your GP if symptoms occur. Ask for an urgent GP appointment or get help from NHS 111 if you have pain in your tummy that lasts longer than 30 minutes.",
          "Gallbladder removal is often recommended if gallstones are causing problems like severe or frequent tummy pain.",
        ],
      },
    ],
    helps: [
      "Let your GP know if you notice any symptoms.",
      "Go to any follow-up appointments that check the gallstones are not getting worse.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you have tummy pain that lasts longer than 30 minutes.",
      "Call 999 or go to A&E for sudden, severe tummy pain, or if your skin or the white part of your eyes looks yellow.",
      "Ask your doctor whether your gallstones need treatment, and what the risks and benefits are.",
    ],
    tryThisWeek: [
      "Note down any new symptoms.",
      "Keep your follow-up appointments.",
      "Know when to call NHS 111.",
    ],
    ask: "Do my gallstones need treatment, or can we watch and wait?",
    interactive: {
      kind: "scenarios",
      title: "Watching and waiting",
      scenarios: [
        {
          id: "chance",
          situation: "A scan for something else shows gallstones, but you feel fine.",
          options: [{ text: "Watch and wait, and report symptoms", best: true }, { text: "Ask for emergency surgery" }],
          why: "This is often called active monitoring. You won't have immediate treatment, but you should let your GP know if you notice any symptoms.",
        },
        {
          id: "first-pain",
          situation: "You had one bout of gallstone pain that settled.",
          options: [{ text: "Contact your GP", best: true }, { text: "Say nothing" }],
          why: "When people have symptoms, they should be offered treatment, so contact your GP if symptoms occur.",
        },
        {
          id: "pancreatitis",
          situation: "You once had acute pancreatitis caused by gallstones.",
          options: [{ text: "Talk to your doctor about treatment", best: true }, { text: "Assume no treatment is needed" }],
          why: "Some people are offered treatment for gallstones with no symptoms, especially if they have had acute pancreatitis caused by gallstones.",
        },
        {
          id: "night",
          situation: "Sudden, severe tummy pain starts in the night.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait for your follow-up" }],
          why: "Call 999 or go to A&E for sudden, severe tummy pain.",
        },
      ],
    },
    sources: [NHS_GS, NHSI_GS, GUTS_GS, NHS_GBR_WHY],
    quiz: {
      question: "With gallstones and no symptoms, what is often recommended?",
      options: [{ text: "Active monitoring", right: true }, { text: "Immediate surgery" }, { text: "A diet to dissolve them" }],
      why: "This is often called active monitoring. You won't have immediate treatment, but you should let your GP know if you notice any symptoms.",
    },
  },
];
