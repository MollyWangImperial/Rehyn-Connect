import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Hiatus hernia page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, NHS inform
// (NHS 24) and Guts UK, with NHS hospital leaflets for the operation and the recovery after it. Guts UK has
// no page of its own for hiatus hernia, so its heartburn and reflux and Barrett's oesophagus pages are used.
// General information only; it never replaces what a person's own GP, pharmacist or surgical team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const nhsInform = (label: string, path: string): LearnSource => ({ label: `NHS inform: ${label}`, url: `https://www.nhsinform.scot/illnesses-and-conditions/stomach-liver-and-gastrointestinal-tract/${path}` });
const gutsUk = (label: string, path: string): LearnSource => ({ label: `Guts UK: ${label}`, url: `https://gutscharity.org.uk/advice-and-information/${path}` });

const NHS_HH = nhs("Hiatus hernia", "conditions/hiatus-hernia/");
const NHS_REFLUX = nhs("Heartburn and acid reflux", "conditions/heartburn-and-acid-reflux/");
const NHS_GASTROSCOPY = nhs("Gastroscopy", "tests-and-treatments/gastroscopy/");
const NHS_OMEPRAZOLE = nhs("Omeprazole", "medicines/omeprazole/");
const NHS_LANSO_HOW = nhs("How and when to take lansoprazole", "medicines/lansoprazole/how-and-when-to-take-lansoprazole/");
const NHS_LANSO_Q = nhs("Common questions about lansoprazole", "medicines/lansoprazole/common-questions-about-lansoprazole/");
const NHS_ANTACIDS = nhs("Antacids", "medicines/antacids/");
const NHS_GAVISCON = nhs("About Gaviscon", "medicines/gaviscon/about-gaviscon/");
const NHS_GAVISCON_HOW = nhs("How and when to take Gaviscon", "medicines/gaviscon/how-and-when-to-take-gaviscon/");
const NHS_VOMIT_BLOOD = nhs("Vomiting blood", "symptoms/vomiting-blood/");
const NHS_CHEST_PAIN = nhs("Chest pain", "symptoms/chest-pain/");
const NHS_DYSPHAGIA = nhs("Dysphagia (swallowing problems)", "symptoms/swallowing-problems-dysphagia/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");

const NHSI_HH = nhsInform("Hiatus hernia", "hiatus-hernia/");
const NHSI_GORD = nhsInform("Gastro-oesophageal reflux disease (GORD)", "gastro-oesophageal-reflux-disease-gord/");

const GUTS_REFLUX = gutsUk("Heartburn and acid reflux", "symptoms/heartburn-and-reflux/");
const GUTS_BARRETTS = gutsUk("Barrett's oesophagus", "conditions/barretts-oesophagus/");

const WORCS: LearnSource = { label: "Worcestershire Acute Hospitals NHS Trust: Laparoscopic hiatus hernia repair", url: "https://www.worcsacute.nhs.uk/leaflets/laparoscopic-hiatus-hernia-repair/" };
const HULL: LearnSource = { label: "Hull University Teaching Hospitals NHS Trust: Laparoscopic Nissen's fundoplication and hiatus hernia repair", url: "https://www.hey.nhs.uk/patient-leaflet/laparoscopic-nissens-fundoplication-hiatus-hernia-repair/" };
const GLOS: LearnSource = { label: "Gloucestershire Hospitals NHS Foundation Trust: Laparoscopic anti-reflux surgery", url: "https://www.gloshospitals.nhs.uk/your-visit/patient-information-leaflets/laparoscopic-anti-reflux-surgery/" };
const BORDERS: LearnSource = { label: "NHS Borders: Hiatus hernia", url: "https://www.rightdecisions.scot.nhs.uk/patient-information-leaflets/acute-services-bgh/general-medicinedme/endoscopy/hiatus-hernia" };

export const hiatusAnswers: LearnArticle[] = [
  {
    id: "hiat-what-it-is",
    kicker: "Understanding",
    question: "What is a hiatus hernia?",
    hook: "Part of the stomach slips up through a gap in the diaphragm. It sounds alarming, but it is very common and often causes no trouble.",
    short: "A hiatus hernia is when part of the stomach squeezes up into the chest through an opening in the diaphragm. It's very common if you're over 50. Most people have no symptoms, and it does not normally need treatment if it's not causing problems.",
    sections: [
      {
        heading: "Part of the stomach, in the chest",
        paragraphs: [
          "A hiatus hernia is when part of the stomach squeezes up into the chest through an opening, called the hiatus, in the diaphragm. The diaphragm is a large, thin sheet of muscle between the chest and the tummy.",
          "The opening normally lets the gullet (oesophagus) pass from the chest into the abdomen. A hiatus hernia happens when it becomes too wide and lets the stomach slip up into the chest.",
        ],
      },
      {
        heading: "Two main types",
        paragraphs: [
          "Sliding hiatus hernias move up and down, in and out of the chest area. They are the most common type: more than 80% of hiatus hernias are sliding ones, and they are often quite small.",
          "Para-oesophageal hiatus hernias, also called rolling hiatus hernias, are less common. Part of the stomach pushes up through the hole in the diaphragm next to the oesophagus. About 5 to 15% of hiatus hernias are of this type.",
        ],
      },
      {
        heading: "Very common, often silent",
        paragraphs: [
          "A hiatus hernia is very common if you're over 50. It's estimated that a third of people over 50 have one.",
          "Most people with a hiatus hernia do not have any symptoms or problems. It does not normally need treatment if it's not causing you problems.",
        ],
      },
      {
        heading: "The link with reflux",
        paragraphs: [
          "A hiatus hernia and reflux are not the same thing. A hiatus hernia may occur without reflux, and reflux may occur without a hiatus hernia, but the two commonly exist together.",
          "The hernia itself rarely causes symptoms, but it does seem to make reflux more likely. It can stop the valve at the bottom of the oesophagus from working properly, so stomach acid leaks up into it.",
        ],
      },
    ],
    helps: [
      "Speak to a pharmacist for advice if you keep getting hiatus hernia symptoms.",
      "See a GP if your symptoms do not go away after 3 weeks, are very bad or getting worse, or pharmacy medicines do not help.",
      "Eat smaller, more frequent meals.",
      "Try to lose weight if you're overweight.",
      "See your GP if you have frequent and severe symptoms of reflux (GORD).",
    ],
    tryThisWeek: [
      "Ask a pharmacist about your symptoms.",
      "Try smaller, more frequent meals.",
      "See a GP if symptoms last 3 weeks.",
    ],
    ask: "What type of hiatus hernia do I have, and is it causing my symptoms?",
    interactive: {
      kind: "flip-cards",
      title: "The words, card by card",
      intro: "Turn each card to see what each word means.",
      cards: [
        { id: "diaphragm", front: "Diaphragm", when: "Between the chest and tummy", back: "A large, thin sheet of muscle between the chest and the abdomen (tummy)." },
        { id: "hiatus", front: "Hiatus", when: "The gap in the diaphragm", back: "The opening that lets the gullet pass from the chest into the abdomen." },
        { id: "sliding", front: "Sliding hiatus hernia", when: "More than 80% of them", back: "Moves up and down, in and out of the chest area. It is often quite small." },
        { id: "rolling", front: "Rolling hiatus hernia", when: "About 5 to 15% of them", back: "Also called para-oesophageal. Part of the stomach pushes up next to the oesophagus." },
        { id: "gord", front: "GORD", when: "When symptoms happen", back: "Gastro-oesophageal reflux disease: stomach acid leaks up into the oesophagus." },
      ],
    },
    sources: [NHSI_HH, NHS_HH, BORDERS, GUTS_REFLUX, HULL],
    quiz: {
      question: "How common is a hiatus hernia in people over 50?",
      options: [{ text: "About a third have one", right: true }, { text: "Almost nobody has one" }, { text: "Everyone over 50 has one" }],
      why: "It's estimated that a third of people over 50 have one.",
    },
  },
  {
    id: "hiat-symptoms",
    kicker: "Symptoms",
    question: "What does a hiatus hernia feel like, if anything?",
    hook: "Many people never know they have one. When it does cause symptoms, they are the symptoms of reflux.",
    short: "You can have a hiatus hernia without knowing and without it being a problem. When it causes symptoms, they are usually those of reflux: heartburn, bringing up food or bitter fluid, bloating and sometimes trouble swallowing. Sudden chest pain that does not go away needs a 999 call.",
    sections: [
      {
        heading: "Often no symptoms at all",
        paragraphs: [
          "You can have a hiatus hernia without knowing and without it being a problem. A hiatus hernia itself rarely has any noticeable symptoms.",
          "In most cases, people with a hiatus hernia only have problems if the hernia causes gastro-oesophageal reflux disease (GORD). This is where stomach acid leaks up into the oesophagus.",
        ],
      },
      {
        heading: "The common symptoms",
        paragraphs: [
          "Symptoms include a painful burning feeling in your chest, often after eating (heartburn), and bringing up small amounts of food or bitter-tasting fluids (acid reflux).",
          "Bad breath, feeling bloated, feeling or being sick, and difficulty or pain when swallowing can happen too. Belching, an acid taste in the mouth and upper tummy pain are also common.",
        ],
      },
      {
        heading: "How heartburn feels",
        paragraphs: [
          "Heartburn is a chest pain, often described as burning. It usually occurs after eating, lying down or bending over, and is felt at the lower end of the breastbone in the centre of the chest.",
          "Some people have less typical symptoms, such as voice changes, a sore throat, a cough or problems with teeth that a dentist can pick up. Symptoms are often worse at night or when lying down.",
        ],
      },
      {
        heading: "Chest pain that could be the heart",
        paragraphs: [
          "Get immediate medical help if you think you're having a heart attack. Call 999 if you get sudden pain or discomfort in your chest that does not go away. The pain can feel like squeezing or pressure inside your chest, burning or indigestion.",
          "Call 999 too if the pain spreads to your arms, neck, jaw, stomach or back, or you have chest pain and feel sweaty, sick, light headed or short of breath. Do not self-diagnose: see a GP if you're worried.",
        ],
      },
    ],
    helps: [
      "See a GP if your symptoms do not go away after 3 weeks, are very bad or getting worse, or pharmacy medicines do not help.",
      "Call 999 if you get sudden chest pain or discomfort that does not go away, or chest pain with sweating, feeling sick, light-headedness or breathlessness.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you have reflux and lose weight without trying, find swallowing difficult, are being sick frequently, have blood in your sick or pain in your upper tummy.",
      "Notice what triggers your symptoms, as triggers can be very individual.",
    ],
    tryThisWeek: [
      "Note when your symptoms start.",
      "Learn the 999 chest pain signs.",
      "See a GP if symptoms last 3 weeks.",
    ],
    ask: "Are my symptoms coming from my hiatus hernia, or from something else?",
    interactive: {
      kind: "signs",
      title: "Symptoms to note down",
      intro: "Tick any you have had. They can help a pharmacist or GP understand what is happening.",
      signs: [
        "A burning feeling in the chest after eating",
        "Bringing up food or bitter-tasting fluid",
        "Bad breath or a sour taste in the mouth",
        "Feeling bloated or belching",
        "Feeling or being sick",
        "Difficulty or pain when swallowing",
        "Symptoms worse at night or lying down",
        "A cough, sore throat or voice changes",
      ],
      after: "Take this list to a pharmacist or GP. See a GP if symptoms do not go away after 3 weeks or get worse. Sudden chest pain that does not go away needs a 999 call.",
      copyHeading: "Hiatus hernia symptoms I have noticed",
    },
    sources: [NHS_HH, NHSI_HH, GUTS_REFLUX, BORDERS, NHS_REFLUX, NHS_CHEST_PAIN],
    quiz: {
      question: "Which chest pain needs a 999 call?",
      options: [{ text: "Sudden pain or discomfort that does not go away", right: true }, { text: "None, chest pain is always heartburn" }, { text: "Only pain that lasts a whole day" }],
      why: "Call 999 if you get sudden pain or discomfort in your chest that does not go away.",
    },
  },
  {
    id: "hiat-causes",
    kicker: "Understanding",
    question: "Why do people get a hiatus hernia?",
    hook: "Nobody knows exactly. Age and pressure on the tummy seem to play the biggest part.",
    short: "It's not clear what causes a hiatus hernia. It may be the diaphragm becoming weak with age, or pressure on the abdomen. It's more common if you're over 50, pregnant or overweight, and some everyday things can make the reflux it brings worse.",
    sections: [
      {
        heading: "Not fully clear",
        paragraphs: [
          "It's not clear what causes a hiatus hernia. Anyone can have one, but it's more common if you're over 50, pregnant or overweight.",
          "It may be the result of the diaphragm becoming weak with age, or pressure on the abdomen.",
        ],
      },
      {
        heading: "Pressure on the tummy",
        paragraphs: [
          "Things that increase the pressure in the abdomen, such as regular coughing, weight lifting or being overweight, may increase the risk of developing a hiatus hernia.",
          "A higher weight can put more pressure on the stomach, which makes reflux episodes more likely. In the later stages of pregnancy, the growing baby puts pressure on the stomach too.",
        ],
      },
      {
        heading: "Age, and a rare type from birth",
        paragraphs: [
          "Most hiatus hernias develop in people over the age of 50. It may be that the diaphragm weakens with age and allows part of the stomach to push through the opening.",
          "A hiatus hernia can sometimes occur in newborn babies if the stomach or diaphragm does not develop properly. This rare type is present from birth.",
        ],
      },
      {
        heading: "What can make reflux worse",
        paragraphs: [
          "Heartburn and reflux are sometimes caused or made worse by certain food and drink, such as coffee, tomatoes, alcohol, chocolate and fatty or spicy foods. Smoking, stress and anxiety, and some medicines, such as anti-inflammatory painkillers like ibuprofen, can play a part too.",
          "Stooping or bending forwards also appears to increase the risk of heartburn and reflux.",
        ],
      },
    ],
    helps: [
      "Try to lose weight if you're overweight.",
      "Do not smoke, and do not drink too much alcohol.",
      "Try to find ways to relax.",
      "Avoid bending over or stooping, particularly after eating or drinking.",
      "Try to avoid wearing tight clothes, as they can put extra pressure on your tummy.",
    ],
    tryThisWeek: [
      "Find one way to relax.",
      "Avoid bending over after meals.",
      "Wear looser clothes at the waist.",
    ],
    ask: "Is there anything in my health or daily life that could be making my symptoms worse?",
    interactive: {
      kind: "risk-check",
      title: "What makes it more likely?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "age", label: "Being over 50", note: "Most hiatus hernias develop in people over the age of 50.", changeable: false },
        { id: "weight", label: "Being overweight", note: "Extra weight puts pressure on the stomach. Losing weight may help reduce how bad and how often symptoms are.", changeable: true },
        { id: "pregnancy", label: "Being pregnant", note: "In later pregnancy the growing baby puts pressure on the stomach. Symptoms often go once the baby is born.", changeable: false },
        { id: "pressure", label: "Regular coughing or weight lifting", note: "Things that increase the pressure in the abdomen may increase the risk of a hiatus hernia.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Tobacco smoke can irritate the digestive system and may make symptoms worse.", changeable: true },
        { id: "food", label: "Foods or drinks that trigger it", note: "Coffee, tomatoes, alcohol, chocolate and fatty or spicy foods can make reflux worse for some people.", changeable: true },
      ],
    },
    sources: [NHS_HH, NHSI_HH, BORDERS, GUTS_REFLUX, NHS_REFLUX],
    quiz: {
      question: "Which of these may increase the pressure in the tummy?",
      options: [{ text: "Regular coughing, weight lifting or being overweight", right: true }, { text: "Drinking water with meals" }, { text: "Sleeping on your left side" }],
      why: "Things that increase the pressure in the abdomen, such as regular coughing, weight lifting or being overweight, may increase the risk of developing a hiatus hernia.",
    },
  },
  {
    id: "hiat-tests",
    kicker: "Tests",
    question: "How is a hiatus hernia found: endoscopy or barium swallow?",
    hook: "A camera test or a chalky drink and X-rays. Here is what each involves, and how to get ready.",
    short: "A hiatus hernia can usually be diagnosed with a gastroscopy (endoscopy) or a barium swallow X-ray. A gastroscopy uses a thin tube with a camera; a barium swallow uses a chalky drink that shows up on X-rays. Other tests check how the gullet moves and how much acid comes up.",
    sections: [
      {
        heading: "When tests are used",
        paragraphs: [
          "If stronger medicines do not work, a GP can send you for tests to find out if your symptoms are caused by a hiatus hernia.",
          "Hospital tests are usually only needed if the GP is unsure, symptoms are persistent, severe or unusual, or prescription medicines are not controlling them. They may also be needed if surgery might help, or there are signs such as difficulty swallowing or unexplained weight loss.",
        ],
      },
      {
        heading: "Gastroscopy",
        paragraphs: [
          "A gastroscopy is a test to check inside your food pipe, stomach and the top of your intestine using a thin tube with a camera inside it. The tube goes into your mouth, or nose, and down your throat into your stomach.",
          "You'll be offered a local anaesthetic spray to numb your throat, or sedation to help you relax. It should not be painful, you can ask for it to be stopped at any time, and it should take 15 to 45 minutes.",
          "A sample of cells may be taken, called a biopsy. You will not feel anything if this happens.",
        ],
      },
      {
        heading: "Barium swallow",
        paragraphs: [
          "The barium swallow test, also called a barium meal X-ray, is an effective way of identifying a hiatus hernia. You drink a white, chalky liquid containing barium, which shows up clearly on X-rays.",
          "You will not be able to eat or drink anything for at least 6 hours before. The test usually takes about 15 minutes. Afterwards you can eat and drink as normal, though the barium may cause constipation and your stools may be white for a few days.",
          "It gives less information than an endoscopy, but it might be an alternative if an endoscopy cannot be done for any reason.",
        ],
      },
      {
        heading: "Other tests",
        paragraphs: [
          "Before surgery, you may need tests to check how well the oesophagus moves (manometry) and how much acid is being refluxed (24-hour pH studies).",
          "The pH test uses a thin, flexible tube through your nose into your gullet. It tracks acid reflux all day as you go about your usual activities, linked to a small recording device you carry.",
        ],
      },
      {
        heading: "Getting ready",
        paragraphs: [
          "Once referred for a gastroscopy, you should get a letter telling you when to stop eating and drinking. On the day, you'll need to stop eating at least 6 hours before the test, but you may be able to have small sips of water.",
          "Medicines such as omeprazole can affect the result of a gastroscopy. You may need to stop taking it for a few days or weeks before the test, so check with the hospital or clinic.",
        ],
      },
    ],
    helps: [
      "Follow the instructions in your appointment letter about when to stop eating and drinking.",
      "Check with the hospital or clinic whether to stop omeprazole or a similar medicine before the test.",
      "Bring along the details of any medicines you take.",
      "If you have sedation, arrange for someone to take you home and stay with you for 24 hours.",
      "After a barium swallow, drink more water to help flush the barium out of your system.",
      "After a gastroscopy, call 999 or go to A&E if you keep being sick, vomit blood, are short of breath, or have severe or worsening stomach or chest pain.",
    ],
    tryThisWeek: [
      "Read your appointment letter.",
      "Ask about stopping acid medicine.",
      "Arrange a lift home after sedation.",
    ],
    ask: "Which test do I need, and do I need to stop any of my medicines before it?",
    interactive: {
      kind: "flip-cards",
      title: "Your tests, card by card",
      intro: "Turn each card to see what each test looks for.",
      cards: [
        { id: "gastroscopy", front: "Gastroscopy", when: "The camera test", back: "A thin tube with a camera checks inside the food pipe, stomach and top of the intestine. It takes 15 to 45 minutes." },
        { id: "barium", front: "Barium swallow", when: "If an endoscopy cannot be done", back: "You drink a chalky liquid that shows up on X-rays. It usually takes about 15 minutes." },
        { id: "manometry", front: "Manometry", when: "Before surgery", back: "Checks how well the oesophagus moves." },
        { id: "ph", front: "24-hour pH study", when: "Before surgery, or if medicine has not helped", back: "A thin tube through the nose tracks acid reflux all day, linked to a small recorder you carry." },
      ],
    },
    sources: [NHS_HH, NHSI_HH, NHS_GASTROSCOPY, GUTS_REFLUX, NHSI_GORD, NHS_OMEPRAZOLE],
    quiz: {
      question: "How long before a gastroscopy do you need to stop eating?",
      options: [{ text: "At least 6 hours", right: true }, { text: "30 minutes" }, { text: "There is no need to stop" }],
      why: "On the day, you'll need to stop eating at least 6 hours before the test, but you may be able to have small sips of water.",
    },
  },
  {
    id: "hiat-self-help",
    kicker: "Treatment",
    question: "What everyday changes help a hiatus hernia?",
    hook: "Smaller meals, an earlier dinner and looser waistbands. Simple changes are the first treatment.",
    short: "There are things you can do yourself to manage hiatus hernia symptoms. Eat smaller, more frequent meals, stop eating 3 or 4 hours before bed, avoid foods that trigger symptoms, and try to lose weight if you're overweight. Not smoking and not drinking too much alcohol help too.",
    sections: [
      {
        heading: "Small changes first",
        paragraphs: [
          "There are things you can do yourself to manage hiatus hernia symptoms. Treatment usually focuses on relieving the symptoms of reflux, and lifestyle changes and medicines are the preferred treatments.",
          "Many people find that their symptoms improve greatly if they change their lifestyle.",
        ],
      },
      {
        heading: "How and when you eat",
        paragraphs: [
          "Eat smaller, more frequent meals, rather than 3 large meals a day. Eat slowly and chew each mouthful well.",
          "Do not eat within 3 or 4 hours of going to bed. Avoid bending over or stooping, particularly after eating or drinking.",
        ],
      },
      {
        heading: "Food and drink triggers",
        paragraphs: [
          "Do not have food or drink that triggers your symptoms. Alcohol, caffeine, chocolate, tomatoes, fatty foods, spicy foods and acidic food or drinks, such as citrus fruit juice, are worth avoiding if they make your symptoms worse.",
          "There is no one approach to diet and reflux, and triggers can be very individual. Cutting down on fizzy drinks may help, although it hasn't been proven.",
        ],
      },
      {
        heading: "Weight, smoking and alcohol",
        paragraphs: [
          "If you're overweight, losing weight may help to reduce how severe your symptoms are and how often they happen. You can speak to your GP about the weight management services in your area.",
          "Tobacco smoke can irritate your digestive system and may make symptoms worse, so try to give up if you smoke. Your GP can tell you about NHS stop smoking services where you live.",
          "Health advice is not to have more than 14 units of alcohol a week, with some alcohol-free days. If you drink a lot, discuss it with your GP before cutting down.",
        ],
      },
      {
        heading: "Clothes and stress",
        paragraphs: [
          "Do not wear clothes that are tight around your waist. Try to find ways to relax.",
          "Sit up straight when you eat, as this takes the pressure off your stomach.",
        ],
      },
    ],
    helps: [
      "Eat smaller, more frequent meals.",
      "Do not eat within 3 or 4 hours of going to bed.",
      "Cut out food or drink that triggers your symptoms.",
      "Try to lose weight if you're overweight, and ask your GP about local weight management services.",
      "Do not smoke, and do not drink too much alcohol.",
      "Do not wear clothes that are tight around your waist.",
    ],
    tryThisWeek: [
      "Swap to smaller, more frequent meals.",
      "Stop eating 3 hours before bed.",
      "Wear looser clothes at the waist.",
    ],
    ask: "Which changes are likely to help me most?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        {
          id: "late-dinner",
          situation: "You get home late and bed is in an hour.",
          options: [{ text: "Have something small, or eat earlier next time", best: true }, { text: "Have a big meal and go straight to bed" }],
          why: "Do not eat within 3 or 4 hours of going to bed.",
        },
        {
          id: "big-meal",
          situation: "There is a big buffet at a family party.",
          options: [{ text: "Take a smaller plate and eat slowly", best: true }, { text: "Eat until you feel very full" }],
          why: "Eat smaller, more frequent meals rather than 3 large meals a day, and chew each mouthful well.",
        },
        {
          id: "belt",
          situation: "Your symptoms flare in your work trousers.",
          options: [{ text: "Choose clothes that are looser at the waist", best: true }, { text: "Tighten your belt" }],
          why: "Do not wear clothes that are tight around your waist.",
        },
        {
          id: "drink",
          situation: "You want to cut down on heavy drinking.",
          options: [{ text: "Talk to your GP before cutting down", best: true }, { text: "Stop suddenly on your own" }],
          why: "If you drink a lot, discuss it with your GP before cutting down.",
        },
      ],
    },
    sources: [NHS_HH, NHSI_HH, GUTS_REFLUX, BORDERS, NHS_LANSO_Q],
    quiz: {
      question: "How long before bed should you stop eating?",
      options: [{ text: "3 or 4 hours", right: true }, { text: "10 minutes" }, { text: "It makes no difference" }],
      why: "Do not eat within 3 or 4 hours of going to bed.",
    },
  },
  {
    id: "hiat-medicines",
    kicker: "Treatment",
    question: "Which medicines help hiatus hernia symptoms?",
    hook: "Quick relief from the pharmacy, and stronger acid-reducing tablets from a GP. How to take each one well.",
    short: "A pharmacist may suggest antacids or alginates for short-term relief. If they do not help, a GP can prescribe a proton pump inhibitor (PPI), such as omeprazole or lansoprazole, which reduces how much acid the stomach makes. If a PPI does not help, an H2 blocker such as famotidine may be suggested.",
    sections: [
      {
        heading: "From the pharmacy",
        paragraphs: [
          "A pharmacist may recommend antacids or alginates. Antacids neutralise the acid in your stomach. Alginates form a protective layer on top of the stomach contents, which helps stop acid moving up into your food pipe.",
          "It's best to take them with food or soon after eating, and just before going to bed. They help symptoms in the short term, but they will not cure the problem and should not be taken regularly for long periods.",
          "Antacids can affect how well other medicines work, so do not take other medicines within 2 to 4 hours of taking an antacid.",
        ],
      },
      {
        heading: "Proton pump inhibitors",
        paragraphs: [
          "If pharmacy medicines and changing your eating habits do not help, a GP can prescribe stronger medicines. A proton pump inhibitor (PPI), such as omeprazole or lansoprazole, reduces how much acid your stomach makes.",
          "You'll usually need to take it for 4 or 8 weeks, depending on how serious your reflux is. Go back to the GP if your symptoms return after stopping, as you may need a long-term prescription.",
          "Lansoprazole works best if you take it at least 30 minutes before a meal or snack. You should start to feel better within 2 to 3 days, but it may take up to 4 weeks to work fully.",
        ],
      },
      {
        heading: "H2 blockers",
        paragraphs: [
          "If a PPI does not help, your doctor may suggest a different type of medicine called an H2 receptor antagonist, such as famotidine. These reduce the amount of acid made in the stomach in a different way to PPIs.",
          "In general, PPIs are used first because they are better than H2 blockers at reducing stomach acid.",
        ],
      },
      {
        heading: "Side effects and long-term use",
        paragraphs: [
          "Common side effects of omeprazole include a headache, stomach pain, feeling or being sick, constipation or diarrhoea, and farting more than usual.",
          "The chance of serious side effects, such as weakened bones or a very low level of vitamin B12, can be higher if you take omeprazole for a year or more. It is recommended that PPIs are taken for the shortest time at the lowest dose.",
          "Do not take omeprazole for longer than 2 weeks if you bought it without a prescription. See a GP if your symptoms get worse or do not get better.",
        ],
      },
      {
        heading: "Stopping safely",
        paragraphs: [
          "Do not stop taking any prescribed medicine without speaking to a doctor first. If you've taken lansoprazole for a long time, speak to your doctor before you stop: stopping suddenly could make your stomach produce a lot more acid and bring your symptoms back.",
        ],
      },
    ],
    helps: [
      "Speak to a pharmacist for advice if you keep getting symptoms.",
      "Take antacids or alginates with food or soon after eating, and just before going to bed.",
      "Do not take other medicines within 2 to 4 hours of taking an antacid.",
      "Take lansoprazole at least 30 minutes before a meal or snack.",
      "Go back to the GP if your symptoms return after stopping your medicine.",
      "Do not stop taking any prescribed medicine without speaking to a doctor first.",
    ],
    tryThisWeek: [
      "Ask a pharmacist about antacids.",
      "Take your PPI before eating.",
      "Space antacids from other medicines.",
    ],
    ask: "How long should I take my medicine for, and when will we review it?",
    interactive: {
      kind: "flip-cards",
      title: "Your medicines, card by card",
      intro: "Turn each card to see what each medicine does.",
      cards: [
        { id: "antacids", front: "Antacids", when: "From a pharmacy, for short-term relief", back: "Neutralise the acid in your stomach. Best with or soon after meals, and just before bed." },
        { id: "alginates", front: "Alginates", when: "From a pharmacy, for short-term relief", back: "Form a protective layer on top of the stomach contents, helping stop acid moving up." },
        { id: "ppi", front: "Proton pump inhibitors", when: "From a GP, if pharmacy medicines do not help", back: "Omeprazole or lansoprazole. Reduce how much acid your stomach makes. Usually taken for 4 or 8 weeks." },
        { id: "h2", front: "H2 blockers", when: "If a PPI does not help", back: "Famotidine is one. Reduce stomach acid in a different way to PPIs." },
      ],
    },
    sources: [NHS_HH, NHS_ANTACIDS, NHS_GAVISCON, NHS_GAVISCON_HOW, NHSI_HH, NHS_REFLUX, NHS_OMEPRAZOLE, NHS_LANSO_HOW, NHS_LANSO_Q, GUTS_REFLUX],
    quiz: {
      question: "Should antacids and alginates be taken regularly for long periods?",
      options: [{ text: "No, they are for short-term relief", right: true }, { text: "Yes, every day for life" }, { text: "Yes, they cure the hernia" }],
      why: "They help symptoms in the short term, but they will not cure the problem and should not be taken regularly for long periods.",
    },
  },
  {
    id: "hiat-surgery",
    kicker: "Treatment",
    question: "When is surgery considered for a hiatus hernia?",
    hook: "Most people never need an operation. For those who do, it is usually keyhole surgery with a soft diet afterwards.",
    short: "Surgery is usually only considered if other treatments have not worked and you keep having very bad symptoms, or to repair a rolling hiatus hernia at risk of serious complications. It is usually keyhole surgery under general anaesthetic. Recovery takes weeks, and bloating or swallowing difficulty can take a few months to settle.",
    sections: [
      {
        heading: "Only for some people",
        paragraphs: [
          "A GP might refer you to a specialist to check if you need surgery. This usually only happens if other treatments have not worked and you keep having very bad symptoms.",
          "You may also want to consider surgery if you have persistent and troublesome symptoms but don't want to take medicines long term. The vast majority of people with a hiatus hernia do not need surgery.",
          "Surgery is used to repair a para-oesophageal hiatus hernia if there's a risk of serious complications, such as the hernia becoming strangulated.",
        ],
      },
      {
        heading: "What the operation does",
        paragraphs: [
          "Keyhole surgery (a laparoscopy) is usually used, under general anaesthetic, through small cuts in your tummy. The stomach is brought back into the correct position and the opening in the diaphragm is tightened.",
          "Often the top part of the stomach is also wrapped around the lower gullet to help stop reflux. This is called a fundoplication. The operation takes between 60 and 90 minutes.",
        ],
      },
      {
        heading: "Recovery",
        paragraphs: [
          "Most people stay in hospital for 1 to 2 days. You will follow a soft diet at first, and the hospital will give you dietary advice before you go home.",
          "After surgery, it can take up to 6 weeks before you can eat what you want, and a few months to recover from things like bloating, farting and difficulty swallowing.",
          "Depending on the type of job you do, you should be able to return to work within 3 to 6 weeks.",
        ],
      },
      {
        heading: "Side effects and risks",
        paragraphs: [
          "Difficulty swallowing, belching, bloating and wind are common after this operation and should settle over a few months. In about 1 in 100 cases they persist, and more surgery may be needed.",
          "The wrap can reduce the ability to belch or vomit. Complete relief of symptoms is never guaranteed, and some people still need medicines to control their symptoms.",
          "Ask your doctor about the risks and benefits of surgery for your situation.",
        ],
      },
      {
        heading: "The results",
        paragraphs: [
          "One hospital leaflet says this surgery stops acid reflux in 5 out of every 6 patients, and that people are often able to stop their acid medicines completely afterwards.",
          "There's a chance that you may need more surgery.",
        ],
      },
    ],
    helps: [
      "Ask your doctor about the risks and benefits of surgery for your situation.",
      "Follow the soft diet the hospital advises, eat slowly and chew food well.",
      "Avoid bread and fizzy drinks for the first 4 to 6 weeks, if your hospital advises it.",
      "Avoid heavy lifting for as long as your surgical team advises.",
      "Get medical attention immediately if you develop severe tummy or chest pain, cannot keep fluids down, or food becomes stuck.",
    ],
    tryThisWeek: [
      "List your questions about surgery.",
      "Plan soft meals for recovery.",
      "Know when to get help after surgery.",
    ],
    ask: "Would surgery help me, and what are the risks and benefits for me?",
    interactive: {
      kind: "timeline",
      title: "Recovery, step by step",
      steps: [
        { id: "day", when: "The day", title: "The operation", points: ["Keyhole surgery under general anaesthetic", "Takes between 60 and 90 minutes", "Shoulder tip pain from the gas is common for a day or two"] },
        { id: "days", when: "1 to 2 days", title: "Going home", points: ["Most people stay in hospital for 1 to 2 days", "Dietary advice before you leave"] },
        { id: "weeks", when: "Up to 6 weeks", title: "A soft diet", points: ["Soft food, eaten slowly and chewed well", "Avoid heavy lifting as your team advises", "Back to work within 3 to 6 weeks, depending on your job"] },
        { id: "months", when: "A few months", title: "Settling down", points: ["Bloating, wind and swallowing difficulty usually settle", "Clinic follow-up with your surgeon"] },
      ],
    },
    sources: [NHS_HH, NHSI_HH, HULL, GLOS, WORCS, GUTS_REFLUX],
    quiz: {
      question: "When is surgery usually considered?",
      options: [{ text: "When other treatments have not worked", right: true }, { text: "As soon as a hiatus hernia is found" }, { text: "For everyone over 50" }],
      why: "This usually only happens if other treatments have not worked and you keep having very bad symptoms.",
    },
  },
  {
    id: "hiat-urgent",
    kicker: "Urgent help",
    question: "When does a hiatus hernia need urgent help?",
    hook: "Most symptoms can wait for a GP. Some cannot: know which ones mean 999.",
    short: "Call 999 for sudden chest pain that does not go away, or if you vomit blood and feel unwell, faint or dizzy or have black poo. Ask for an urgent GP appointment or contact NHS 111 if you have reflux with weight loss, difficulty swallowing, frequent vomiting, blood in your sick or upper tummy pain.",
    sections: [
      {
        heading: "Chest pain: call 999",
        paragraphs: [
          "Call 999 if you get sudden pain or discomfort in your chest that does not go away. The pain can feel like squeezing or pressure inside your chest, burning or indigestion. You could be having a heart attack, and you need immediate treatment in hospital.",
          "Call 999 too if the pain spreads to your left or right arm, or your neck, jaw, stomach or back, or you have chest pain and feel sweaty, sick, light headed or short of breath.",
        ],
      },
      {
        heading: "Vomiting blood",
        paragraphs: [
          "Always get medical help if you are vomiting blood. Vomit can vary from bright red to brown or black, and may look like coffee granules.",
          "Call 999 or go to A&E if you are vomiting blood and feel generally unwell, confused, faint or dizzy, or have rapid or shallow breathing, cold, clammy, pale skin, tummy pain or black poo.",
          "If you have stopped vomiting blood and had no other symptoms, ask for an urgent GP appointment, call 111 or get help from 111 online. Do not drive to A&E: ask someone to drive you or call 999 for an ambulance.",
        ],
      },
      {
        heading: "Urgent GP or NHS 111",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have indigestion or acid reflux and you have lost weight without trying, swallowing becomes difficult, you're being sick frequently, there's blood in your sick or you have pain in your upper tummy.",
          "Get the same help if you cough or choke while eating or drinking, or feel like something is stuck in your throat after eating.",
        ],
      },
      {
        heading: "A rare emergency",
        paragraphs: [
          "Complications from a hiatus hernia are rare, but they can be serious. With a para-oesophageal hiatus hernia, there is a risk of it becoming strangulated, when the hernia becomes knotted and its blood supply is cut off.",
          "Emergency surgery is usually needed to correct a strangulated hernia.",
        ],
      },
    ],
    helps: [
      "Call 999 if you get sudden chest pain that does not go away, or pain that spreads to your arm, neck, jaw, stomach or back.",
      "Call 999 or go to A&E if you vomit blood and feel unwell, faint or dizzy, or have black poo.",
      "Do not drive to A&E: ask someone to drive you or call 999 and ask for an ambulance.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you lose weight without trying, swallowing becomes difficult or you're being sick frequently.",
      "Bring any medicines you take with you.",
    ],
    tryThisWeek: [
      "Learn the 999 chest pain signs.",
      "Know when to use NHS 111.",
      "Keep a list of your medicines.",
    ],
    ask: "Which symptoms mean I should get urgent help?",
    interactive: {
      kind: "scenarios",
      title: "What to do, and when",
      scenarios: [
        {
          id: "chest",
          situation: "Sudden chest pressure that will not go away, spreading to your jaw.",
          options: [{ text: "Call 999 straight away", best: true }, { text: "Take an antacid and wait" }, { text: "Book a routine GP appointment" }],
          why: "You could be having a heart attack. Call 999 straight away as you need immediate treatment in hospital.",
        },
        {
          id: "blood-faint",
          situation: "You have vomited blood and feel faint and dizzy.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Drive yourself to the GP" }],
          why: "Call 999 or go to A&E if you are vomiting blood and feel faint or dizzy. Do not drive to A&E.",
        },
        {
          id: "blood-stopped",
          situation: "You vomited a little blood once, it stopped, and you feel well.",
          options: [{ text: "Ask for an urgent GP appointment or call 111", best: true }, { text: "Ignore it" }],
          why: "If you have stopped vomiting blood and had no other symptoms, ask for an urgent GP appointment, call 111 or get help from 111 online.",
        },
        {
          id: "weight",
          situation: "You have reflux and have lost weight without trying.",
          options: [{ text: "Ask for an urgent GP appointment or call 111", best: true }, { text: "Wait for your next routine check" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if you have lost weight without trying.",
        },
      ],
    },
    sources: [NHS_CHEST_PAIN, NHS_VOMIT_BLOOD, NHS_HH, NHS_DYSPHAGIA, NHSI_HH],
    quiz: {
      question: "You have vomited blood and feel faint. What should you do?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Wait to see if it happens again" }, { text: "Take an antacid" }],
      why: "Call 999 or go to A&E if you are vomiting blood and feel generally unwell, confused, faint or dizzy.",
    },
  },
  {
    id: "hiat-eating",
    kicker: "Living well",
    question: "What should I eat, and when, with a hiatus hernia?",
    hook: "How and when you eat matters as much as what. Little and often, slowly, and well before bed.",
    short: "Eat little and often, slowly, and chew well. Have your main evening meal at least 3 hours before bed, and avoid lying down soon after eating. Notice which foods trigger your symptoms, as triggers can be very individual.",
    sections: [
      {
        heading: "Little and often",
        paragraphs: [
          "Eat smaller, more frequent meals, rather than 3 large meals a day. Eating beyond fullness, such as having large meals, can bring on symptoms.",
          "Eating too quickly can cause symptoms too. Eat slowly and chew each mouthful well before swallowing.",
        ],
      },
      {
        heading: "Timing the evening meal",
        paragraphs: [
          "Do not eat within 3 or 4 hours of going to bed. Avoid lying down, including going to bed, for at least 3 hours after eating or drinking.",
          "Avoid late-night, high-fat meals, so you don't go to bed with a full stomach. Cut down on late-night snacking, and do not skip breakfast.",
        ],
      },
      {
        heading: "Foods that may trigger it",
        paragraphs: [
          "People can find that spicy food, food higher in fats and tomato are more likely to trigger symptoms. Drinks containing caffeine, such as tea, coffee and some energy drinks, can cause heartburn.",
          "Acidic foods, such as citrus fruits, salad dressings and fizzy drinks, can make symptoms worse for some people. Triggers can be very individual, so there is no one diet for everyone.",
        ],
      },
      {
        heading: "At the table",
        paragraphs: [
          "Sit up straight when you eat, as this takes the pressure off your stomach. Avoid bending over or stooping, particularly after eating or drinking.",
          "Try to avoid wearing tight clothes, as these can put extra pressure on your tummy.",
        ],
      },
    ],
    helps: [
      "Eat little but more often.",
      "Eat your main evening meal at least 3 hours before going to bed.",
      "Chew each mouthful well, and do not rush meals.",
      "Sit up straight when you eat.",
      "Cut out foods and drinks that make your symptoms worse.",
      "Avoid drinking during the night.",
    ],
    tryThisWeek: [
      "Eat dinner 3 hours before bed.",
      "Chew each mouthful well.",
      "Sit up straight at meals.",
    ],
    ask: "Could a dietitian help me work out which foods trigger my symptoms?",
    interactive: {
      kind: "scenarios",
      title: "Mealtime choices",
      scenarios: [
        {
          id: "evening",
          situation: "You usually go to bed at 11pm.",
          options: [{ text: "Finish your main meal by about 8pm", best: true }, { text: "Have your main meal just before 11pm" }],
          why: "Eat your main evening meal at least three hours before going to bed.",
        },
        {
          id: "breakfast",
          situation: "You are rushing out and think about skipping breakfast.",
          options: [{ text: "Have a small breakfast", best: true }, { text: "Skip it and eat a big lunch" }],
          why: "Do not skip breakfast, and eat little but more often if needed.",
        },
        {
          id: "spicy",
          situation: "Spicy curries seem to bring on your heartburn.",
          options: [{ text: "Cut them down and see if it helps", best: true }, { text: "Keep eating them late at night" }],
          why: "People can find that spicy food is more likely to trigger symptoms. Reducing these foods might be helpful.",
        },
        {
          id: "sofa",
          situation: "You finish lunch and want to lie on the sofa.",
          options: [{ text: "Stay upright for a while", best: true }, { text: "Lie down straight away" }],
          why: "Avoid lying down for at least 3 hours after eating or drinking.",
        },
      ],
    },
    sources: [NHS_HH, NHSI_HH, GUTS_REFLUX, BORDERS, NHS_LANSO_Q],
    quiz: {
      question: "When should the main evening meal be?",
      options: [{ text: "At least 3 hours before bed", right: true }, { text: "Just before bed" }, { text: "In the middle of the night" }],
      why: "Eat your main evening meal at least three hours before going to bed.",
    },
  },
  {
    id: "hiat-sleep",
    kicker: "Living well",
    question: "How can I sleep better with a hiatus hernia?",
    hook: "Lying flat lets acid travel up. Raising the head of the bed, not adding pillows, can help.",
    short: "Symptoms are often worse at night or when lying down. Raising the head end of your bed by 10 to 20cm can stop acid travelling up towards your throat, but extra pillows can make things worse. Sleeping on your left side and stopping eating 3 or 4 hours before bed can help too.",
    sections: [
      {
        heading: "Why nights can be worse",
        paragraphs: [
          "Reflux symptoms are often worse at night or when lying down. For some people, heartburn and reflux can disturb sleep.",
          "Having your chest and head above the level of your waist can stop stomach acid travelling up towards your throat.",
        ],
      },
      {
        heading: "Raise the head of the bed",
        paragraphs: [
          "Raise the head end of your bed by 10 to 20cm, so your chest and head are above the level of your waist. You can do this by placing wood, bricks, books or blocks under one end of the bed.",
          "Do not use extra pillows to get the same effect. This can increase pressure on your belly and make your symptoms worse.",
          "A wedge pillow, or raising the head of the bed or mattress by up to 20cm, may reduce night-time symptoms.",
        ],
      },
      {
        heading: "Sleeping position",
        paragraphs: [
          "Sleeping on your left side can help.",
        ],
      },
      {
        heading: "Before bed",
        paragraphs: [
          "Do not eat within 3 or 4 hours of going to bed, and avoid drinking during the night.",
          "Alginates can be useful after meals and before bed to reduce night-time symptoms. The best time to take Gaviscon is after meals and at bedtime, because pain and discomfort are usually worse then.",
        ],
      },
    ],
    helps: [
      "Raise the head end of your bed by 10 to 20cm.",
      "Use wood, bricks or books under the bed, not extra pillows.",
      "Try sleeping on your left side.",
      "Do not eat within 3 or 4 hours of going to bed.",
      "Speak to a pharmacist about whether an alginate after meals and at bedtime could help.",
    ],
    tryThisWeek: [
      "Raise the bed head 10 to 20cm.",
      "Try sleeping on your left side.",
      "Stop eating 3 hours before bed.",
    ],
    ask: "Is there anything else I can try if night-time symptoms keep waking me?",
    interactive: {
      kind: "timeline",
      title: "An evening, step by step",
      steps: [
        { id: "meal", when: "3 to 4 hours before bed", title: "Last meal", points: ["Finish eating", "Avoid a late, high-fat meal"] },
        { id: "after", when: "After eating", title: "Stay upright", points: ["Avoid lying down", "Avoid bending over or stooping"] },
        { id: "bedtime", when: "Bedtime", title: "Ready for bed", points: ["An alginate can help, if a pharmacist suggests one", "Avoid drinking during the night"] },
        { id: "bed", when: "In bed", title: "Head raised", points: ["Head end of the bed raised 10 to 20cm", "No extra pillows", "Sleeping on your left side can help"] },
      ],
    },
    sources: [NHS_HH, NHSI_HH, GUTS_REFLUX, NHS_REFLUX, NHS_GAVISCON_HOW],
    quiz: {
      question: "Why not use extra pillows to raise your head?",
      options: [{ text: "They can increase pressure on your belly", right: true }, { text: "They make the bed too hot" }, { text: "Pillows are fine and work best" }],
      why: "Do not use extra pillows to get the same effect. This can increase pressure on your belly and make your symptoms worse.",
    },
  },
  {
    id: "hiat-exercise",
    kicker: "Living well",
    question: "Can I exercise and lift things with a hiatus hernia?",
    hook: "Staying active is good for everyone. The things to watch are bending after meals, and heavy lifting after surgery.",
    short: "Adults are advised to be active most days. Pressure on the tummy, from weight lifting, regular coughing or being overweight, may make a hiatus hernia more likely, and bending forwards can bring on reflux. After surgery, hospitals advise against heavy lifting for some weeks.",
    sections: [
      {
        heading: "Lifting, bending and pressure",
        paragraphs: [
          "Things which increase the pressure in the abdomen, such as regular coughing, weight lifting or being overweight, may increase the risk of developing a hiatus hernia.",
          "Stooping or bending forwards appears to increase the risk of heartburn and reflux. Avoiding bending over or stooping, particularly after eating or drinking, can help relieve symptoms.",
        ],
      },
      {
        heading: "Staying active",
        paragraphs: [
          "Adults should aim for at least 150 minutes of moderate activity a week, such as brisk walking, riding a bike or dancing, and strengthening activities on at least 2 days a week.",
          "Speak to your GP first if you have not exercised for some time, or if you have medical conditions or concerns. Make sure your activity and its intensity are right for your fitness.",
          "For some people, heartburn and reflux can interfere with physical activity. If you're overweight, losing weight may help to reduce how severe your symptoms are and how often they happen.",
        ],
      },
      {
        heading: "After surgery",
        paragraphs: [
          "Doing some gentle exercise after anti-reflux surgery reduces the risk of complications such as a chest infection or a blood clot. Return to your normal daily activities as soon as you feel able and comfortable.",
          "Hospitals advise against heavy lifting after this surgery: one leaflet says for 4 weeks, another for 6 weeks. Follow the advice your own surgical team gives you.",
          "Most people can return to normal activities within 2 to 4 weeks. Do not drive until you can do an emergency stop comfortably and without hesitation.",
        ],
      },
    ],
    helps: [
      "Avoid bending over or stooping, particularly after eating or drinking.",
      "Speak to your GP first if you have not exercised for some time, or have medical conditions or concerns.",
      "Aim for at least 150 minutes of moderate activity a week, such as brisk walking.",
      "If you're overweight, losing weight may help reduce your symptoms.",
      "After surgery, avoid heavy lifting for as long as your surgical team advises.",
    ],
    tryThisWeek: [
      "Take a brisk walk.",
      "Avoid bending over after meals.",
      "Ask your GP before starting exercise.",
    ],
    ask: "Is there any exercise or lifting I should avoid with my hiatus hernia?",
    interactive: {
      kind: "scenarios",
      title: "Moving, lifting and bending",
      scenarios: [
        {
          id: "gardening",
          situation: "You plan to weed the garden straight after lunch.",
          options: [{ text: "Leave it a while after eating", best: true }, { text: "Start bending straight away" }],
          why: "Avoid bending over or stooping, particularly after eating or drinking.",
        },
        {
          id: "after-surgery",
          situation: "It is 2 weeks after your operation and the shopping is heavy.",
          options: [{ text: "Ask someone to help carry it", best: true }, { text: "Carry it all yourself" }],
          why: "Hospitals advise against heavy lifting for some weeks after this surgery. Follow your surgical team's advice.",
        },
        {
          id: "new-exercise",
          situation: "You have not exercised for years and want to start.",
          options: [{ text: "Speak to your GP first", best: true }, { text: "Start with heavy weights" }],
          why: "Speak to your GP first if you have not exercised for some time, or if you have medical conditions or concerns.",
        },
      ],
    },
    sources: [BORDERS, NHSI_HH, GUTS_REFLUX, NHS_ACTIVITY, GLOS, WORCS],
    quiz: {
      question: "After anti-reflux surgery, what is the advice on heavy lifting?",
      options: [{ text: "Avoid it for as long as your surgical team advises", right: true }, { text: "Start heavy lifting the next day" }, { text: "Never be active again" }],
      why: "Hospitals advise against heavy lifting after this surgery. Follow the advice your own surgical team gives you.",
    },
  },
  {
    id: "hiat-checks",
    kicker: "Follow-up",
    question: "What follow-up do I need for a hiatus hernia?",
    hook: "Often none, if symptoms are settled. What to keep an eye on, and when to go back.",
    short: "Many people need no regular follow-up. Go back to the GP if symptoms last more than 3 weeks, get worse, or return after stopping medicine. Long-term acid medicines are reviewed to keep the dose as low as possible, and anyone with Barrett's oesophagus is usually offered regular checks.",
    sections: [
      {
        heading: "When to go back to the GP",
        paragraphs: [
          "See a GP if your symptoms do not go away after 3 weeks, are very bad or getting worse, or medicines from a pharmacy do not help.",
          "Go back to the GP if your symptoms return after stopping your medicine, as you may need a long-term prescription.",
        ],
      },
      {
        heading: "Reviewing medicines",
        paragraphs: [
          "It is recommended that PPIs are taken for the shortest time at the lowest dose. Your doctor may suggest coming off them, or lowering the dose to the lowest level that manages your symptoms.",
          "If you take lansoprazole for longer than 1 year, your doctor will regularly check your health to see if you should carry on taking it. Some conditions confirmed by endoscopy, such as Barrett's oesophagus, may mean staying on the medicine long term.",
        ],
      },
      {
        heading: "Longer-term reflux",
        paragraphs: [
          "Long-term damage to the oesophagus from leaking stomach acid can lead to ulcers, scarring and changes to the cells of the oesophagus. These changes, called Barrett's oesophagus, can increase the risk of oesophageal cancer.",
          "Most people with Barrett's oesophagus will not develop cancer. People with it are usually offered a surveillance programme, with regular checks, usually by endoscopy.",
          "If you have persistent reflux symptoms for more than 3 weeks, talk to your GP, as you may need some tests.",
        ],
      },
      {
        heading: "After surgery",
        paragraphs: [
          "After anti-reflux surgery, you are usually seen in the outpatient clinic 6 to 8 weeks after you go home.",
        ],
      },
      {
        heading: "Questions to take along",
        paragraphs: [
          "Guts UK suggests asking whether you need an endoscopy, what you can change in your lifestyle to reduce reflux, and how you should take your medicines.",
        ],
      },
    ],
    helps: [
      "See a GP if your symptoms do not go away after 3 weeks or are getting worse.",
      "Go back to the GP if your symptoms return after stopping your medicine.",
      "Ask your doctor whether your dose can be lowered, or whether you can come off your medicine.",
      "See a doctor if you have trouble swallowing, are often sick after eating, lose weight, feel tired or vomit blood.",
      "If you are offered surveillance endoscopies, ask how often you need one.",
    ],
    tryThisWeek: [
      "Ask for a medicines review.",
      "Write down your questions.",
      "Note any new symptoms.",
    ],
    ask: "Do I need any follow-up, and how long should I stay on my medicine?",
    interactive: {
      kind: "signs",
      title: "Changes to tell the doctor about",
      intro: "Tick any that apply. A doctor should be consulted about each of them.",
      signs: [
        "Symptoms lasting more than 3 weeks",
        "Symptoms coming back after stopping medicine",
        "Trouble swallowing or pain on swallowing",
        "Being sick often after eating or drinking",
        "Losing weight without trying",
        "Feeling tired all the time",
        "A hoarse voice or changes to your voice",
        "Vomiting blood",
      ],
      after: "Take this list to your GP. If you are vomiting blood and feel unwell, faint or dizzy, or have black poo, call 999 or go to A&E.",
      copyHeading: "Changes to tell my doctor about",
    },
    sources: [NHS_HH, NHS_REFLUX, GUTS_REFLUX, GUTS_BARRETTS, NHSI_HH, NHS_LANSO_Q, GLOS],
    quiz: {
      question: "How are acid-reducing PPIs best taken over time?",
      options: [{ text: "For the shortest time at the lowest dose", right: true }, { text: "At the highest dose, for life" }, { text: "Only when you remember" }],
      why: "It is recommended that PPIs are taken for the shortest time at the lowest dose.",
    },
  },
];
