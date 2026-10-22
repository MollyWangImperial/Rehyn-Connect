import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Diverticular disease page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS (and NHS inform, the
// NHS in Scotland), Guts UK and the NICE guideline on diverticular disease (NG147, recommendations page). Where
// the sources differ (older advice to avoid nuts and seeds, or a low-fibre diet during a flare), the answers
// follow NICE and Guts UK and say so. General information only; it never replaces what a person's own GP,
// nurse or hospital team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const gutsUk = (label: string, path: string): LearnSource => ({ label: `Guts UK: ${label}`, url: `https://gutscharity.org.uk/${path}` });

const NHS_DD = nhs("Diverticular disease and diverticulitis", "conditions/diverticular-disease-and-diverticulitis/");
const NHS_FIBRE = nhs("How to get more fibre into your diet", "live-well/eat-well/digestive-health/how-to-get-more-fibre-into-your-diet/");
const NHS_WATER = nhs("Water, drinks and hydration", "live-well/eat-well/food-guidelines-and-food-labels/water-drinks-nutrition/");
const NHS_COLONOSCOPY = nhs("Colonoscopy", "tests-and-treatments/colonoscopy/");
const NHS_CT = nhs("CT scan", "tests-and-treatments/ct-scan/");
const NHS_PARACETAMOL = nhs("Paracetamol for adults", "medicines/paracetamol-for-adults/");
const NHS_NSAIDS = nhs("NSAIDs", "medicines/nsaids/");
const NHS_CODEINE = nhs("Codeine", "medicines/codeine/");
const NHS_MEBEVERINE = nhs("Mebeverine", "medicines/mebeverine/");
const NHS_LAXATIVES = nhs("Laxatives", "medicines/laxatives/");
const NHS_SEPSIS = nhs("Sepsis", "conditions/sepsis/");
const NHS_EXERCISE = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");
const NHS_QUIT_SERVICES = nhs("NHS stop smoking services help you quit", "live-well/quit-smoking/nhs-stop-smoking-services-help-you-quit/");
const NHS_QUIT = nhs("Quit smoking (Better Health)", "better-health/quit-smoking/");
const NHS_COLOSTOMY_WHAT = nhs("What is a colostomy?", "tests-and-treatments/colostomy/what-is-a-colostomy/");
const NHS_COLOSTOMY_HOW = nhs("How a colostomy is done", "tests-and-treatments/colostomy/how-a-colostomy-is-done/");
const NHS_COLOSTOMY_RECOVERY = nhs("Recovery and lifestyle changes after a colostomy", "tests-and-treatments/colostomy/recovery-and-lifestyle-changes-after-a-colostomy/");

const NHSI_DD: LearnSource = {
  label: "NHS inform: Diverticular disease and diverticulitis",
  url: "https://www.nhsinform.scot/illnesses-and-conditions/stomach-liver-and-gastrointestinal-tract/diverticular-disease-and-diverticulitis/",
};

const GUTS_DD = gutsUk("Diverticular disease", "advice-and-information/conditions/diverticular-disease/");
const GUTS_FIBRE = gutsUk("Fibre", "advice-and-information/health-and-lifestyle/fibre-information/");

const NICE_NG147: LearnSource = { label: "NICE: Diverticular disease: diagnosis and management (NG147)", url: "https://www.nice.org.uk/guidance/ng147/chapter/Recommendations" };
const BDA_FIBRE: LearnSource = { label: "BDA: Fibre (food fact sheet)", url: "https://www.bda.uk.com/resource/fibre.html" };

export const diverticularAnswers: LearnArticle[] = [
  {
    id: "div-what-it-is",
    kicker: "Understanding",
    question: "What are diverticulosis, diverticular disease and diverticulitis?",
    hook: "Three similar words for small pouches in the bowel wall. Most people who have them never get symptoms.",
    short: "Diverticula are small bulges or pouches in the wall of the large bowel. Having them without symptoms is called diverticulosis; having symptoms such as tummy pain is diverticular disease; and when the pouches become inflamed or infected, it is called diverticulitis. Most people get some diverticula as they get older, but most never get symptoms.",
    sections: [
      {
        heading: "Small pouches in the bowel wall",
        paragraphs: [
          "Diverticular disease and diverticulitis are conditions that affect the large intestine, or bowel, causing tummy pain and other symptoms. They're caused by small bulges or pouches in the walls of the intestine called diverticula.",
          "A single pouch is called a diverticulum, and more than one are called diverticula. They are most often found in the lower left part of the bowel.",
        ],
      },
      {
        heading: "Three words, three meanings",
        paragraphs: [
          "Diverticulosis is when there are diverticula in your bowel, but they're not causing any symptoms. Many people don't know they have it until they have a test for something else, and no specific treatments are needed.",
          "Diverticular disease means you have diverticula, and you might also feel belly pain or notice changes in your bowel habits, like constipation or diarrhoea. Diverticulitis happens when one or more of the pouches get inflamed or infected, which can cause increasing pain and other symptoms.",
        ],
      },
      {
        heading: "Very common with age",
        paragraphs: [
          "Diverticular disease is a common condition, and it affects both men and women. Guts UK says it affects around 1 in 3 people, and this increases to 1 in 2 people as they get older.",
          "NHS inform estimates that 5% of people have diverticula by the time they are 40 years old, and at least 50% of people have them by the time they are 80.",
        ],
      },
      {
        heading: "Most people never have symptoms",
        paragraphs: [
          "Most people will get some diverticula as they get older, but most people will not get any symptoms. If you have never had tummy pain or bouts of diarrhoea, NHS inform says there is a 70% to 80% chance that you will never have any symptoms from them.",
          "NHS inform says diverticula do not increase your risk of cancer. Guts UK says there is no evidence that having diverticular disease, whether you have symptoms or not, increases your risk of bowel cancer.",
        ],
      },
    ],
    helps: [
      "Eat a healthy, balanced diet including whole grains, fruits and vegetables; there are no specific foods you need to avoid.",
      "If you do not eat much fibre, increase it slowly, and drink plenty of water.",
      "Don't assume all belly problems are caused by diverticular disease; see your GP about any new or different symptoms.",
      "Ask whether your colonoscopy or CT scan has ruled out any other conditions.",
      "Ask what kind of follow-up or monitoring you will have.",
    ],
    tryThisWeek: [
      "Add whole grains, fruit and veg.",
      "Tell your GP about new symptoms.",
      "Ask what your tests ruled out.",
    ],
    ask: "Do I have diverticulosis, diverticular disease or diverticulitis, and what does that mean for me?",
    interactive: {
      kind: "flip-cards",
      title: "The words, card by card",
      intro: "Turn each card to see what each word means.",
      cards: [
        { id: "diverticulum", front: "Diverticulum", when: "One pouch", back: "A small pouch that sticks out from the wall of your large bowel." },
        { id: "diverticula", front: "Diverticula", when: "More than one", back: "Most often found in the lower left part of the bowel." },
        { id: "diverticulosis", front: "Diverticulosis", when: "Pouches, no symptoms", back: "Most people with it don't have symptoms and won't need treatment. Often found during a test for something else." },
        { id: "disease", front: "Diverticular disease", when: "Pouches with symptoms", back: "Belly pain, or changes in bowel habits like constipation or diarrhoea." },
        { id: "diverticulitis", front: "Diverticulitis", when: "Inflamed or infected", back: "One or more pouches get inflamed or infected, causing increasing pain and other symptoms." },
      ],
    },
    sources: [NHS_DD, GUTS_DD, NHSI_DD, NICE_NG147],
    quiz: {
      question: "Do most people with diverticula get symptoms?",
      options: [{ text: "No, most people will not get any symptoms", right: true }, { text: "Yes, everyone does in time" }, { text: "Only people under 40 do" }],
      why: "Most people will get some diverticula as they get older, but most people will not get any symptoms.",
    },
  },
  {
    id: "div-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms, and how is diverticulitis different?",
    hook: "Pain low on the left that eases after a poo is the typical sign. Severe, constant pain with a high temperature points to diverticulitis.",
    short: "Most people with diverticula have no symptoms. When diverticular disease does cause symptoms, they include pain in the lower left side of the tummy, bloating and changes in bowel habits. With diverticulitis, the pain is usually severe and constant, and there may be a high temperature.",
    sections: [
      {
        heading: "Many people have none",
        paragraphs: [
          "Most people with diverticular disease do not have any symptoms. Even fewer people will go on to have complications.",
          "NHS inform says 1 in 4 people who develop diverticula will experience symptoms, such as abdominal pain. Having symptoms associated with diverticula is known as diverticular disease.",
        ],
      },
      {
        heading: "Symptoms of diverticular disease",
        paragraphs: [
          "The symptoms of diverticular disease include pain in the lower left side of your tummy, tummy pain that gets worse after you eat and gets better after you poo or fart, constipation, diarrhoea, blood in your poo and bloating.",
          "The pain may come and go. Bowel changes can include diarrhoea, constipation, or switching between both. A small number of people get the pain on the right side, and in people of South Asian background the pain is sometimes on the right side instead of the left.",
        ],
      },
      {
        heading: "Symptoms of diverticulitis",
        paragraphs: [
          "If your intestine becomes infected or inflamed, it's called diverticulitis. You may also have severe, constant tummy pain, a high temperature, and bleeding or passing slime, called mucus, from your bottom.",
          "NHS inform says the pain of diverticulitis is constant and severe, rather than stop-start, and develops over a day or 2. It usually starts below your belly button, before moving to the lower left side. You may also feel sick or be sick, or feel generally tired and unwell.",
        ],
      },
      {
        heading: "Like other conditions",
        paragraphs: [
          "The symptoms of diverticular disease and diverticulitis are similar to those of other conditions, such as irritable bowel syndrome (IBS). Guts UK says they can also look like bowel cancer or colitis, so it's important not to assume that all belly problems are caused by diverticular disease.",
          "NHS inform says diverticular disease does not cause weight loss. If you are losing weight, seeing blood in your stools or having frequent bowel changes, see your GP.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if there is blood or mucus in your poo, you have tummy pain that's getting worse or does not go away, or you have a high temperature, or feel hot, cold or shivery.",
          "Call 999 or go to A&E if someone has severe tummy pain and is either vomiting, has a swollen tummy, or cannot poo or fart, or if they are bleeding heavily from their bottom.",
        ],
      },
    ],
    helps: [
      "See your GP if you notice any new or different symptoms, or blood in your poo.",
      "Ask for an urgent GP appointment or get help from NHS 111 if your tummy pain is getting worse or does not go away.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you have a high temperature, or feel hot, cold or shivery.",
      "See your GP if you are losing weight, seeing blood in your stools or having frequent bowel changes.",
      "Call 999 or go to A&E for severe tummy pain with vomiting, a swollen tummy, or not being able to poo or fart.",
    ],
    tryThisWeek: [
      "Note any new or different symptoms.",
      "Know when to get help from NHS 111.",
      "Know when to call 999.",
    ],
    ask: "Are my symptoms from diverticular disease, or could something else be causing them?",
    interactive: {
      kind: "signs",
      title: "Symptoms to tell your GP about",
      intro: "Tick any you have noticed. Some need an urgent GP appointment or NHS 111.",
      signs: [
        "Pain low on the left of the tummy",
        "Pain that is worse after eating",
        "Constipation, diarrhoea, or both",
        "Bloating",
        "Blood or mucus in your poo",
        "Severe, constant tummy pain",
        "A high temperature, or feeling hot, cold or shivery",
        "Feeling sick or being sick",
        "Losing weight",
      ],
      after: "See your GP about new symptoms. For blood or mucus in your poo, worsening pain or a high temperature, ask for an urgent GP appointment or get help from NHS 111.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_DD, GUTS_DD, NHSI_DD],
    quiz: {
      question: "Which kind of pain points more to diverticulitis?",
      options: [{ text: "Severe, constant tummy pain", right: true }, { text: "Mild pain that eases after a poo" }, { text: "Pain only first thing in the morning" }],
      why: "NHS inform says the pain of diverticulitis is constant and severe, rather than stop-start, and develops over a day or 2.",
    },
  },
  {
    id: "div-causes",
    kicker: "Causes",
    question: "Why do the pouches form?",
    hook: "Age is the biggest risk factor. Weight, activity and smoking play a part too, and doctors are still not exactly sure why.",
    short: "Diverticula form when the bowel wall becomes weak in places, which can happen as we get older, and pressure inside the bowel pushes the lining outwards. Age is the biggest risk factor. Being overweight, not being active and smoking can raise the risk of symptoms or complications.",
    sections: [
      {
        heading: "How a pouch forms",
        paragraphs: [
          "Diverticula form when the wall of the bowel becomes weak in places, which can happen as we get older. Pressure inside the bowel can then push the lining outwards, forming pouches.",
          "NHS inform says the pressure of moving hard, small pieces of stool through the large intestine is thought to create weak spots in the outside layer of muscle. The inner layer then squeezes through these weak spots, creating the diverticula.",
        ],
      },
      {
        heading: "Age is the biggest risk factor",
        paragraphs: [
          "Doctors still aren't exactly sure why diverticula form in the bowel. But Guts UK says age is the biggest risk factor, and your chances of developing them increase after the age of 40.",
          "More young people under 45 are now being diagnosed, but this is still uncommon. NHS inform says the condition is more likely to appear at a younger age, under 50, in men than in women.",
        ],
      },
      {
        heading: "Things that raise the risk",
        paragraphs: [
          "Some lifestyle factors can raise the risk of symptoms or complications. These include having a higher than healthy body weight, not being physically active, and smoking, which is linked to a higher risk of needing hospital care.",
          "NHS inform also lists a history of constipation, using non-steroidal anti-inflammatory painkillers such as ibuprofen or naproxen, and having a close relative with diverticular disease, especially if they developed it under the age of 50.",
          "NICE says people should be told about the benefits of exercise, weight loss if they are overweight, and stopping smoking, in reducing the risk of developing diverticulitis and symptoms.",
        ],
      },
      {
        heading: "Fibre: the evidence is mixed",
        paragraphs: [
          "Some studies suggest that eating more fibre, especially from vegetables, may lower the risk of diverticula. However, other studies find no clear link, and it is not proven that constipation causes diverticula.",
          "Diverticular disease is much more common in Western countries, where many people do not eat enough fibre. But NHS inform says there is currently no clinical evidence to fully prove the link between fibre and diverticula.",
        ],
      },
      {
        heading: "Rare family conditions",
        paragraphs: [
          "Some rare family conditions can weaken the bowel wall and make diverticula more likely. These include Ehlers-Danlos syndrome, Williams syndrome, polycystic kidney disease, Marfan syndrome and Coffin-Lowry syndrome.",
        ],
      },
    ],
    helps: [
      "Eat a healthy, balanced diet including whole grains, fruits and vegetables.",
      "Stop smoking if you smoke.",
      "Maintain a healthy weight.",
      "Take regular exercise.",
      "Do not take NSAIDs such as ibuprofen; if one is prescribed, talk to your doctor before stopping it.",
    ],
    tryThisWeek: [
      "Add whole grains, fruit and veg.",
      "Plan some regular exercise.",
      "Look into stopping smoking.",
    ],
    ask: "Is there anything in my lifestyle or my medicines that could be making symptoms more likely?",
    interactive: {
      kind: "risk-check",
      title: "What makes it more likely?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "age", label: "Being over 40", note: "Age is the biggest risk factor, and the chances of developing diverticula increase after the age of 40.", changeable: false },
        { id: "weight", label: "A higher than healthy body weight", note: "Can raise the risk of symptoms or complications. Weight loss, if you are overweight, can help.", changeable: true },
        { id: "active", label: "Not being physically active", note: "Exercise can help reduce the risk of developing diverticulitis and symptoms.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Linked to a higher risk of needing hospital care. Your GP can refer you to a local stop smoking service.", changeable: true },
        { id: "nsaids", label: "Taking NSAID painkillers", note: "Such as ibuprofen or naproxen. Do not stop a prescribed medicine without talking to your doctor.", changeable: true },
        { id: "family", label: "A close relative with it", note: "Especially if they developed it under the age of 50.", changeable: false },
      ],
    },
    sources: [GUTS_DD, NHSI_DD, NHS_DD, NICE_NG147],
    quiz: {
      question: "What is the biggest risk factor for diverticula?",
      options: [{ text: "Age", right: true }, { text: "Eating seeds" }, { text: "Drinking water" }],
      why: "Guts UK says age is the biggest risk factor, and your chances of developing them increase after the age of 40.",
    },
  },
  {
    id: "div-tests",
    kicker: "Tests",
    question: "Which tests and scans are used?",
    hook: "A camera test or a scan confirms the pouches, and rules out other causes of the same symptoms.",
    short: "A GP asks about your symptoms and may arrange a blood test or a poo sample. To confirm diverticular disease and rule out other conditions, you may have a colonoscopy or flexible sigmoidoscopy, where a thin tube with a small camera checks inside your bowel, or a CT scan.",
    sections: [
      {
        heading: "Starting with the GP",
        paragraphs: [
          "The GP will ask questions to find out what's causing your symptoms. You may need a blood test or to give a poo sample to help find what's wrong.",
          "NHS inform says blood tests can help rule out other conditions, such as coeliac disease or bowel cancer. You may need further tests to confirm if you have diverticular disease or diverticulitis and rule out other conditions.",
        ],
      },
      {
        heading: "Colonoscopy or sigmoidoscopy",
        paragraphs: [
          "A thin, flexible tube with a small camera on the end is passed into your bowel through your bottom. A colonoscopy looks at the whole bowel, while a sigmoidoscopy looks at just the left side of the bowel.",
          "The bowel needs to be empty, so you will be given laxatives to take at home. You may get diarrhoea a few hours after the first dose, so stay at home and be near a toilet after you've started taking them.",
          "The test may be uncomfortable but it should not hurt. If you are in pain, tell the doctor or nurse, who can offer things to help, such as painkillers or sedation. It should take 30 to 45 minutes, but you might be at the hospital for around 2 hours, and you cannot drive for 24 hours if you have sedation.",
        ],
      },
      {
        heading: "CT scans",
        paragraphs: [
          "A CT scan takes pictures of the inside of your belly. It can show signs of diverticular disease and can also help find complications, such as an abscess, which is a pocket of infection.",
          "A CT colonography looks more closely at the bowel without putting a camera inside it. A thin tube may be put into the rectum to fill the bowel with air, and you'll need to empty your bowels first with a laxative.",
          "A CT scan usually takes between 10 and 20 minutes. You may be given a dye called contrast medium to help show more detail.",
        ],
      },
      {
        heading: "When diverticulitis is suspected",
        paragraphs: [
          "If you have had diverticular disease before, NHS inform says your GP will usually be able to diagnose diverticulitis from your symptoms and a physical examination. A blood test may be taken, because a high number of white blood cells points to infection.",
          "NICE recommends same-day hospital assessment for people with suspected complicated diverticulitis. If blood tests show raised signs of inflammation, a CT scan with contrast should be offered within 24 hours of arriving in hospital.",
        ],
      },
      {
        heading: "Getting results",
        paragraphs: [
          "You should get a letter or a call with your colonoscopy results a few weeks afterwards. Call the hospital if you have not heard anything after 3 weeks.",
          "It usually takes between 1 and 2 weeks to get CT scan results, but it can take up to 4 weeks. If you have not heard anything after 4 weeks, contact the doctor who referred you.",
        ],
      },
    ],
    helps: [
      "Take your laxatives as it says on the packet or as you've been advised, so your bowel is empty for the test.",
      "Stay at home and near a toilet once you've started taking the laxatives.",
      "Bring the details of medicines you take, and follow the hospital's instructions about taking them.",
      "If you have sedation, arrange for someone to pick you up, as you cannot drive for 24 hours.",
      "Before a CT scan, tell the hospital if you are pregnant, take any medicines, have diabetes or kidney problems, or have reacted to contrast dye before.",
      "Ask whether your colonoscopy or CT scan has ruled out any other conditions.",
    ],
    tryThisWeek: [
      "Read your laxative instructions.",
      "Arrange a lift home.",
      "List your medicines for the hospital.",
    ],
    ask: "Has my colonoscopy or CT scan ruled out any other conditions?",
    interactive: {
      kind: "flip-cards",
      title: "Your tests, card by card",
      intro: "Turn each card to see what each test does.",
      cards: [
        { id: "bloods", front: "Blood test", when: "Often the first test", back: "Helps find what's wrong and rule out other conditions, such as coeliac disease." },
        { id: "poo", front: "Poo sample", when: "From the GP", back: "Can help the GP find what's causing your symptoms." },
        { id: "colonoscopy", front: "Colonoscopy", when: "A camera test", back: "A thin tube with a small camera looks at the whole large bowel. It should take 30 to 45 minutes." },
        { id: "sigmoidoscopy", front: "Flexible sigmoidoscopy", when: "A shorter camera test", back: "Looks at just the left side of the bowel." },
        { id: "ct", front: "CT scan", when: "Pictures of the belly", back: "Shows signs of diverticular disease and helps find complications, such as an abscess." },
        { id: "ctc", front: "CT colonography", when: "A closer scan of the bowel", back: "Looks closely at the bowel without a camera inside it. Air is used to make it easier to see." },
      ],
    },
    sources: [NHS_DD, GUTS_DD, NHSI_DD, NHS_COLONOSCOPY, NHS_CT, NICE_NG147],
    quiz: {
      question: "Why do you take laxatives before a colonoscopy?",
      options: [{ text: "So the bowel is empty for the test", right: true }, { text: "To ease the pain" }, { text: "To treat an infection" }],
      why: "The bowel needs to be empty, so you will be given laxatives to take at home.",
    },
  },
  {
    id: "div-fibre",
    kicker: "Treatment",
    question: "How much fibre and fluid do I need, and how do I add it?",
    hook: "Fibre often helps, but go slowly. Adding it gradually, with plenty to drink, keeps wind and bloating down.",
    short: "A healthy, balanced diet with whole grains, fruit and vegetables is the main advice. Government guidelines say adults should have 30g of fibre a day, but most adults eat about 20g. If you do not eat much fibre, increase it slowly and drink plenty, as the benefits may take several weeks.",
    sections: [
      {
        heading: "Why fibre helps",
        paragraphs: [
          "Eating well is one of the most important ways to manage diverticular disease. NHS inform says a high-fibre diet can often ease the symptoms.",
          "Fibre is the part of plant foods that you do not digest. It can make your poo bigger and softer, and it can produce gas.",
        ],
      },
      {
        heading: "How much to aim for",
        paragraphs: [
          "Government guidelines say our dietary fibre intake should increase to 30g a day, as part of a healthy balanced diet. Most adults are only eating an average of about 20g a day.",
          "High-fibre foods have 6g or more of fibre in every 100g, so it helps to check the nutrition label. Guts UK suggests a fibre-rich starchy food with each meal, like wholemeal bread, pasta, brown rice or potatoes with skin, and at least 5 portions of fruit and vegetables a day.",
        ],
      },
      {
        heading: "Go slowly",
        paragraphs: [
          "If you're not used to eating much fibre, increase it slowly to avoid bloating or wind. It might take a few weeks for your bowel habits to improve.",
          "NICE says the benefits of increasing dietary fibre may take several weeks, and if tolerated, a high-fibre diet should be kept up for life.",
        ],
      },
      {
        heading: "Drink enough",
        paragraphs: [
          "Drinking enough helps fibre move through your bowel and can prevent constipation. Guts UK suggests trying to drink at least 2 litres, about 8 to 10 cups, of water or other non-caffeinated drinks each day.",
          "Fibre draws water into the bowel, so you may become dehydrated if you do not drink enough. Drink extra fluids if you've been sweating from physical activity, or if you're unwell.",
        ],
      },
      {
        heading: "If fibre is hard to manage",
        paragraphs: [
          "If a high-fibre diet is not tolerated, or you have constipation or diarrhoea that keeps going, NICE says a bulk-forming laxative can be considered. These work by absorbing water in your bowel, which can help manage both constipation and diarrhoea.",
          "If you also have IBS, eating more wheat bran can make your symptoms worse, and oat or rice bran is usually easier to digest. You can ask your GP to refer you to an NHS dietitian if you're unsure what to eat or still have symptoms.",
        ],
      },
    ],
    helps: [
      "If you're not used to eating much fibre, increase it slowly to avoid bloating or wind.",
      "Have a fibre-rich starchy food with each meal, like wholemeal bread, brown rice or potatoes with skin.",
      "Add pulses like beans, lentils or chickpeas to stews, curries and salads.",
      "Aim for at least 5 portions of fruit and vegetables a day.",
      "Try to drink at least 2 litres of water or other non-caffeinated drinks each day.",
      "Ask your GP to refer you to an NHS dietitian if you're unsure what to eat.",
    ],
    tryThisWeek: [
      "Add fibre slowly.",
      "Add beans or lentils to one meal.",
      "Drink plenty of water each day.",
    ],
    ask: "How much fibre should I aim for, and how quickly should I increase it?",
    interactive: {
      kind: "scenarios",
      title: "Fibre, day to day",
      scenarios: [
        {
          id: "bloated",
          situation: "You've added a lot of fibre at once and feel bloated.",
          options: [{ text: "Increase it more slowly", best: true }, { text: "Cut out fibre altogether" }],
          why: "If you're not used to eating much fibre, increase it slowly to avoid bloating or wind.",
        },
        {
          id: "drinks",
          situation: "You're eating more fibre, but not drinking much.",
          options: [{ text: "Drink more through the day", best: true }, { text: "Drink less to avoid the toilet" }],
          why: "Drinking enough helps fibre move through your bowel and can prevent constipation.",
        },
        {
          id: "patience",
          situation: "Two weeks in, your bowel habits haven't changed yet.",
          options: [{ text: "Keep going: it can take weeks", best: true }, { text: "Give up on fibre" }],
          why: "The benefits of increasing dietary fibre may take several weeks.",
        },
        {
          id: "label",
          situation: "You're choosing a breakfast cereal.",
          options: [{ text: "One with 6g or more fibre per 100g", best: true }, { text: "Any one: labels don't matter" }],
          why: "High-fibre foods have 6g or more of fibre in every 100g, so it helps to check the nutrition label.",
        },
      ],
    },
    sources: [NHS_FIBRE, GUTS_DD, NHSI_DD, GUTS_FIBRE, NICE_NG147, BDA_FIBRE, NHS_WATER],
    quiz: {
      question: "How should you add fibre if you don't eat much?",
      options: [{ text: "Slowly, with plenty to drink", right: true }, { text: "All at once" }, { text: "Only at weekends" }],
      why: "If you're not used to eating much fibre, increase it slowly to avoid bloating or wind.",
    },
  },
  {
    id: "div-flare",
    kicker: "Treatment",
    question: "How is diverticulitis treated?",
    hook: "Milder flares can often be treated at home. Antibiotics are for when you are more unwell, and hospital care is for more serious cases.",
    short: "Diverticulitis is treated with painkillers such as paracetamol, and with antibiotics if it is caused by an infection. If symptoms are mild, your doctor may suggest a watch and wait approach. More serious cases may need hospital treatment, with antibiotics and fluids given into a vein.",
    sections: [
      {
        heading: "Treatment at home",
        paragraphs: [
          "Diverticulitis is treated with painkillers such as paracetamol, and with antibiotics if the diverticulitis is caused by an infection. NHS inform says mild diverticulitis can often be treated at home.",
          "Contact your GP as soon as possible if you think you have symptoms of diverticulitis. Your doctor may suggest a watch and wait approach, especially if symptoms are mild, and you should contact your GP straight away if your symptoms get worse.",
        ],
      },
      {
        heading: "When antibiotics are used",
        paragraphs: [
          "Guts UK says antibiotics may be used if you are unwell, have a weakened immune system, or have other health conditions. NICE says a no-antibiotic approach can be considered for people who are generally well, with paracetamol for pain and advice to come back if symptoms persist or get worse.",
          "If you are prescribed antibiotics, it's important that you finish the complete course, even if you are feeling better. Some antibiotics used to treat diverticulitis can cause side effects, including vomiting and diarrhoea.",
        ],
      },
      {
        heading: "Treatment in hospital",
        paragraphs: [
          "NHS inform says you may need to go to hospital if your pain cannot be controlled with paracetamol, you cannot drink enough fluids, you cannot take antibiotics by mouth, your symptoms fail to improve after 2 days of treatment at home, or complications are suspected.",
          "In hospital, you are likely to receive injections of antibiotics and be kept hydrated through a drip into a vein. Most people start to improve within 2 to 3 days.",
        ],
      },
      {
        heading: "Eating during a flare",
        paragraphs: [
          "Some people are told to eat less fibre during a flare-up. Guts UK says recent reviews found no good evidence that a low-fibre diet helps people recover faster or avoid future episodes, and a normal, balanced diet may be just as effective for uncomplicated diverticulitis.",
          "If your diverticulitis becomes more serious, for example with an abscess, a bowel blockage or a perforation, or if you've had surgery, your doctor or dietitian may give you different advice based on your specific needs.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "If you have not been diagnosed with diverticular disease before, your GP may refer you for a test such as a colonoscopy or CT colonography after the symptoms have settled.",
          "NHS inform says complications of diverticulitis affect 1 in 5 people with the condition. Rarely, these include an abscess, a blockage in the bowel, a fistula or a hole in the bowel, which can sometimes be treated with antibiotics or surgery.",
        ],
      },
    ],
    helps: [
      "Take paracetamol for the pain, following the packet or your doctor's advice.",
      "If you are prescribed antibiotics, finish the complete course, even if you are feeling better.",
      "Contact your GP straight away if your symptoms get worse.",
      "Go back to your doctor if your symptoms persist or get worse.",
      "Ask when antibiotics would be used to treat your diverticulitis.",
      "Ask when you should get back in touch or seek more help.",
    ],
    tryThisWeek: [
      "Take paracetamol as advised.",
      "Finish any antibiotic course.",
      "Call your GP if it gets worse.",
    ],
    ask: "When would antibiotics be used for my diverticulitis, and when should I get back in touch?",
    interactive: {
      kind: "timeline",
      title: "A flare, step by step",
      steps: [
        { id: "start", when: "First signs", title: "Constant, severe pain", points: ["Pain that is constant and severe, often low on the left", "A high temperature, or feeling sick", "Contact your GP as soon as possible"] },
        { id: "home", when: "If it is mild", title: "Treated at home", points: ["Paracetamol for the pain", "Watch and wait, or antibiotics if needed", "Contact your GP straight away if it gets worse"] },
        { id: "hospital", when: "If more unwell", title: "Hospital care", points: ["Antibiotics by injection and a drip for fluids", "Most people start to improve within 2 to 3 days"] },
        { id: "after", when: "Once it settles", title: "Checking the bowel", points: ["A colonoscopy or CT colonography, if not diagnosed before", "Ask about follow-up and when to get back in touch"] },
      ],
    },
    sources: [NHS_DD, GUTS_DD, NHSI_DD, NICE_NG147],
    quiz: {
      question: "If you are prescribed antibiotics for diverticulitis, what should you do?",
      options: [{ text: "Finish the course, even if you feel better", right: true }, { text: "Stop once the pain eases" }, { text: "Keep some for next time" }],
      why: "If you are prescribed antibiotics, it's important that you finish the complete course, even if you are feeling better.",
    },
  },
  {
    id: "div-pain",
    kicker: "Medicines",
    question: "Which painkillers can I use, and which should I avoid?",
    hook: "Paracetamol is the usual choice. Anti-inflammatories like ibuprofen, and opioids like codeine, can make things worse.",
    short: "Paracetamol is the painkiller the sources recommend for diverticular disease and diverticulitis. The NHS says not to take NSAIDs such as ibuprofen, or opioid painkillers such as codeine, because they can cause stomach problems or constipation and increase the risk of a hole in the bowel. Do not stop a prescribed medicine without talking to your doctor.",
    sections: [
      {
        heading: "Paracetamol first",
        paragraphs: [
          "Treatments that can help with the symptoms of diverticular disease include painkillers such as paracetamol. NICE says simple painkillers such as paracetamol can be considered as needed for ongoing tummy pain.",
          "For 500mg tablets, one dose is 1 or 2 tablets. Leave at least 4 hours between doses, and do not take more than 8 tablets in 24 hours. Do not take paracetamol for more than 3 days unless a doctor tells you to, and speak to your GP if paracetamol alone is not working.",
          "Avoid taking paracetamol at the same time as other medicines containing paracetamol, such as cold and flu remedies, because you may take too much.",
        ],
      },
      {
        heading: "Painkillers to avoid",
        paragraphs: [
          "The NHS says do not take NSAIDs, such as ibuprofen, or opioid painkillers, such as codeine. They can cause stomach problems or constipation, and increase the risk of getting a hole, or perforation, in your bowel.",
          "NSAIDs you can buy without a prescription include ibuprofen and aspirin, and ones only available on prescription include naproxen and diclofenac tablets. Lower-strength codeine also comes mixed with paracetamol, as co-codamol, or with ibuprofen.",
          "Guts UK says codeine and other opioid-based medicines can make constipation and pain worse. Both opioids and NSAIDs have been linked to serious complications such as fistulas and bowel perforation.",
        ],
      },
      {
        heading: "Other medicines to mention",
        paragraphs: [
          "Guts UK says nicorandil, a medicine sometimes used for angina, may also cause problems. Do not stop taking any prescribed medicine without talking to your doctor, as they may be able to offer a safer alternative.",
          "If you have taken codeine for a long time, do not stop it suddenly, because this can cause withdrawal symptoms. Your doctor will gradually reduce your dose.",
        ],
      },
      {
        heading: "For cramps and bowel changes",
        paragraphs: [
          "If you have pain caused by diverticular disease, your doctor might suggest an antispasmodic medicine such as mebeverine. It is a muscle relaxant that eases spasms in your stomach muscles, and it is best taken 20 minutes before a meal.",
          "If you have constipation or diarrhoea, speak to your pharmacist or GP, as a bulk-forming laxative might help. If you take one, it's important to drink plenty of fluids.",
        ],
      },
    ],
    helps: [
      "Use paracetamol for pain, following the packet or leaflet.",
      "Leave at least 4 hours between doses of paracetamol, and do not take more than 8 tablets of 500mg in 24 hours.",
      "Do not take NSAIDs such as ibuprofen, or opioid painkillers such as codeine.",
      "Check cold and flu remedies, as they can contain paracetamol.",
      "Do not stop a prescribed medicine without talking to your doctor; they may be able to offer a safer alternative.",
      "Speak to your GP if paracetamol alone is not working.",
    ],
    tryThisWeek: [
      "Check your painkiller labels.",
      "Leave 4 hours between doses.",
      "Ask about a safer alternative.",
    ],
    ask: "Which painkillers are safe for me, and should any of my current medicines be changed?",
    interactive: {
      kind: "flip-cards",
      title: "Before you take it",
      intro: "Turn each card to see what the sources say.",
      cards: [
        { id: "paracetamol", front: "Paracetamol", when: "The usual painkiller", back: "Leave at least 4 hours between doses, and take no more than 8 tablets of 500mg in 24 hours." },
        { id: "nsaids", front: "Ibuprofen and other NSAIDs", when: "Such as aspirin or naproxen", back: "Not recommended: they can cause stomach problems and increase the risk of a hole in the bowel." },
        { id: "codeine", front: "Codeine and other opioids", when: "Including co-codamol", back: "Can make constipation and pain worse. Do not stop a long-term one suddenly; ask your doctor." },
        { id: "mebeverine", front: "Mebeverine", when: "For cramping pain", back: "An antispasmodic that eases spasms. Best taken 20 minutes before a meal." },
        { id: "laxative", front: "Bulk-forming laxative", when: "For constipation or diarrhoea", back: "Absorbs water in the bowel. Drink plenty of fluids while taking it." },
        { id: "nicorandil", front: "Nicorandil", when: "Sometimes used for angina", back: "May cause problems. Do not stop it without talking to your doctor." },
      ],
    },
    sources: [NHS_DD, GUTS_DD, NHSI_DD, NICE_NG147, NHS_PARACETAMOL, NHS_NSAIDS, NHS_CODEINE, NHS_MEBEVERINE, NHS_LAXATIVES],
    quiz: {
      question: "Which painkiller is usually suggested for diverticular disease?",
      options: [{ text: "Paracetamol", right: true }, { text: "Ibuprofen" }, { text: "Codeine" }],
      why: "Treatments that can help with the symptoms of diverticular disease include painkillers such as paracetamol.",
    },
  },
  {
    id: "div-surgery",
    kicker: "Surgery",
    question: "When is surgery needed, and what does it involve?",
    hook: "Most people never need an operation. When one is needed, the damaged part of the bowel is removed, and a stoma is often temporary.",
    short: "Surgery for diverticular disease is not usually needed. It may be offered after a serious episode, for example if an abscess forms or a pouch tears, or for a narrowing or a fistula. The operation usually removes the affected part of the bowel, and sometimes a stoma is made, which in many cases can be reversed later.",
    sections: [
      {
        heading: "Not usually needed",
        paragraphs: [
          "Surgery for diverticular disease is not usually needed. But it may be offered after a serious episode of inflammation, for example if an abscess forms around the bowel, or an infection spreads into the abdomen from a torn pouch.",
          "NHS inform says surgery used to be recommended after 2 episodes of diverticulitis, as a precaution against complications. This is no longer the case, because in most cases the risks of serious complications from surgery, estimated to be around 1 in 100, usually outweigh the benefits.",
        ],
      },
      {
        heading: "When it may be considered",
        paragraphs: [
          "Exceptions include a history of serious complications from diverticulitis, having symptoms from a young age, or a weakened immune system. If surgery is being considered, discuss both the benefits and risks carefully with the doctor in charge of your care.",
          "NICE says a planned operation can be considered for people who have recovered from complicated diverticulitis but still have symptoms, for example with a narrowing of the bowel, called a stricture, or a fistula. Guts UK says fistulas and strictures usually need surgery.",
          "In rare cases, a hole in the bowel needs emergency surgery. This causes very severe tummy pain, which needs an emergency trip to hospital.",
        ],
      },
      {
        heading: "What the operation involves",
        paragraphs: [
          "In most cases, the operation removes the part of the bowel that has the infected or damaged pouches. This is called a colectomy, and it can be done as open surgery through one larger cut, or as keyhole surgery through a number of small cuts.",
          "NHS inform says open and keyhole operations are thought to be equally effective, with a similar risk of complications. People who have keyhole surgery tend to recover faster and have less pain after the operation.",
        ],
      },
      {
        heading: "If you need a stoma",
        paragraphs: [
          "Sometimes the surgeon needs to bring the healthy end of the bowel out through the skin as a stoma. Poo then comes out of the stoma into a pouch or bag you stick on your tummy.",
          "In many cases, the stoma is temporary and can be reversed later, once the inflammation has settled and the area has healed well. A reversal joins the bowel back together, and afterwards you poo from your bottom again. It's not always possible to reverse a colostomy, so speak to your doctor about whether it is an option for you.",
        ],
      },
      {
        heading: "Recovery",
        paragraphs: [
          "After a colostomy, you'll usually stay in hospital for around 2 to 7 days, and your stoma nurse will make sure you're comfortable changing your bag before you go home. It usually takes around 8 weeks to recover and get back to your usual activities.",
          "Avoid strenuous activities or heavy lifting for 8 weeks while your tummy muscles heal. Having a colostomy should not stop you from living a full and active life, and you can talk to your stoma nurse about any issues with sex, relationships or body image.",
          "Planned surgery is usually successful, although it does not cure everyone. NHS inform says that, following surgery, an estimated 1 in 12 people have symptoms come back.",
        ],
      },
    ],
    helps: [
      "If surgery is being considered, discuss both the benefits and risks carefully with the doctor in charge of your care.",
      "Ask whether a stoma might be needed, and whether it could be reversed later.",
      "After surgery, try gentle exercise like a short walk when you feel ready.",
      "Avoid strenuous activities or heavy lifting for 8 weeks while your tummy muscles heal.",
      "Talk to your stoma nurse about any issues with sex, relationships or body image.",
    ],
    tryThisWeek: [
      "Write down questions about surgery.",
      "Ask if a stoma could be reversed.",
      "Plan short, gentle walks.",
    ],
    ask: "Do I need surgery, and what are the benefits and risks for me?",
    interactive: {
      kind: "timeline",
      title: "Surgery, step by step",
      steps: [
        { id: "before", when: "Before", title: "Weighing it up", points: ["Surgery is not usually needed", "Discuss the benefits and risks with your doctor"] },
        { id: "operation", when: "The operation", title: "Removing the damaged part", points: ["Open or keyhole surgery", "Sometimes a stoma is made"] },
        { id: "hospital", when: "2 to 7 days", title: "In hospital", points: ["Your tummy may feel bloated and sore", "Your stoma nurse helps you with your bag"] },
        { id: "recovery", when: "Around 8 weeks", title: "Getting back to usual activities", points: ["A short walk when you feel ready", "No strenuous activity or heavy lifting for 8 weeks"] },
        { id: "reversal", when: "Later", title: "Reversal, if possible", points: ["Many stomas are temporary", "The bowel is joined back together"] },
      ],
    },
    sources: [GUTS_DD, NHSI_DD, NICE_NG147, NHS_COLOSTOMY_WHAT, NHS_COLOSTOMY_HOW, NHS_COLOSTOMY_RECOVERY],
    quiz: {
      question: "Is surgery usually needed for diverticular disease?",
      options: [{ text: "No, it is not usually needed", right: true }, { text: "Yes, after the first flare" }, { text: "Yes, for everyone over 50" }],
      why: "Surgery for diverticular disease is not usually needed.",
    },
  },
  {
    id: "div-urgent",
    kicker: "Urgent help",
    question: "Which signs mean I need urgent help?",
    hook: "Know when it is NHS 111 and when it is 999. Severe pain with vomiting, heavy bleeding or signs of sepsis need help straight away.",
    short: "Call 999 or go to A&E for severe tummy pain with vomiting, a swollen tummy or not being able to poo or fart, heavy bleeding from the bottom, or signs of sepsis. Ask for an urgent GP appointment or get help from NHS 111 for blood or mucus in your poo, tummy pain that is getting worse, or a high temperature.",
    sections: [
      {
        heading: "Call 999 or go to A&E",
        paragraphs: [
          "Call 999 or go to A&E if you or someone you care for has severe tummy pain and is either vomiting, has a swollen tummy, or cannot poo or fart. Guts UK says these may be signs of a blockage or another complication.",
          "Also call 999 or go to A&E if someone is bleeding heavily from their bottom, or is acting confused, has pale or blotchy skin, has a very high or low temperature, or is breathless or breathing rapidly. These could all be signs of sepsis.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance, and bring any medicines you take with you.",
        ],
      },
      {
        heading: "Sepsis",
        paragraphs: [
          "Sepsis is a serious reaction to an infection that can be life-threatening. It develops very quickly and needs urgent treatment in hospital.",
          "In adults, symptoms can include confusion or slurred speech, uncontrollable shivering, muscle pain, difficulty breathing, and not peeing all day. Someone with sepsis might not have every symptom, so get immediate medical help if you think there's something seriously wrong.",
        ],
      },
      {
        heading: "An urgent GP appointment or NHS 111",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if there is blood or mucus in your poo, you have tummy pain that's getting worse or does not go away, or you have a high temperature, or feel hot, cold or shivery.",
          "Do the same if you keep being sick and cannot keep fluid down, or you have diarrhoea for more than 7 days or are being sick for more than 2 days. You can call 111 or get help from 111 online.",
        ],
      },
      {
        heading: "Bleeding from the bottom",
        paragraphs: [
          "A blood vessel in a pouch can burst and cause bleeding in the large bowel. Guts UK says that in most people, 8 out of 10, the bleeding stops on its own without any treatment, but in rare cases it can be severe and need an emergency blood transfusion.",
          "NHS inform lists signs of heavy bleeding, apart from the amount of blood, as feeling very dizzy, confusion, pale clammy skin and shortness of breath. The NHS says to call 999 or go to A&E if someone is bleeding heavily from their bottom.",
        ],
      },
      {
        heading: "Other changes to report",
        paragraphs: [
          "Rarely, a fistula, an abnormal connection, can form between the bowel and the bladder or vagina. Signs include poo in your urine or a foul-smelling vaginal discharge, so see a doctor if you have these symptoms.",
          "NHS inform says diverticulitis can also cause urinary problems, such as pain when peeing or needing to pee more often than usual. Always speak to your GP if your symptoms change, get worse, or you notice something new.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E for severe tummy pain with vomiting, a swollen tummy, or not being able to poo or fart.",
      "Call 999 or go to A&E for heavy bleeding from the bottom, or signs of sepsis.",
      "Do not drive to A&E; ask someone to drive you or call 999 and ask for an ambulance.",
      "Ask for an urgent GP appointment or get help from NHS 111 for blood or mucus in your poo, worsening tummy pain or a high temperature.",
      "See a doctor if you notice poo in your urine or a foul-smelling vaginal discharge.",
    ],
    tryThisWeek: [
      "Learn the signs that mean 999.",
      "Know when to get help from NHS 111.",
      "Know who could drive you to A&E.",
    ],
    ask: "Which symptoms mean I should get help straight away, and who should I contact?",
    interactive: {
      kind: "scenarios",
      title: "Who to contact",
      scenarios: [
        {
          id: "severe",
          situation: "You have severe tummy pain, keep vomiting and cannot pass wind.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait until the morning" }, { text: "Take ibuprofen and wait" }],
          why: "Call 999 or go to A&E if you or someone you care for has severe tummy pain and is either vomiting, has a swollen tummy, or cannot poo or fart.",
        },
        {
          id: "mucus",
          situation: "There is mucus in your poo, and the pain is not going away.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Ignore it for now" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if there is blood or mucus in your poo, or tummy pain that does not go away.",
        },
        {
          id: "sepsis",
          situation: "A relative with diverticulitis is confused and breathing fast.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Let them sleep it off" }],
          why: "If someone is acting confused, or is breathless or breathing rapidly, these could all be signs of sepsis.",
        },
        {
          id: "drive",
          situation: "You need to go to A&E with severe pain.",
          options: [{ text: "Get a lift, or call 999", best: true }, { text: "Drive yourself" }],
          why: "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
        },
        {
          id: "diarrhoea",
          situation: "You've had diarrhoea for more than 7 days.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Wait another week" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if you have diarrhoea for more than 7 days.",
        },
      ],
    },
    sources: [NHS_DD, GUTS_DD, NHS_SEPSIS, NHSI_DD],
    quiz: {
      question: "Someone has severe tummy pain and cannot poo or fart. What should you do?",
      options: [{ text: "Call 999 or go to A&E", right: true }, { text: "Wait to see if it passes" }, { text: "Book a routine GP appointment" }],
      why: "Call 999 or go to A&E if you or someone you care for has severe tummy pain and is either vomiting, has a swollen tummy, or cannot poo or fart.",
    },
  },
  {
    id: "div-food-myths",
    kicker: "Living well",
    question: "Do I need to avoid nuts, seeds or other foods?",
    hook: "The old advice to avoid nuts, seeds and popcorn is no longer thought to be true. A balanced diet is what the sources advise.",
    short: "You don't need to avoid seeds, nuts, popcorn or fruit skins. These foods do not increase the risk of complications, even if you have diverticular disease. The advice is a healthy, balanced diet including whole grains, fruit and vegetables, with no specific foods you need to avoid.",
    sections: [
      {
        heading: "An old myth",
        paragraphs: [
          "In the past, people were told not to eat certain high-fibre foods like seeds, nuts, popcorn and fruit skins. It was once believed these foods could get stuck in the pouches and cause problems, but this is no longer thought to be true.",
          "NICE says people should be told there is no need to avoid seeds, nuts, popcorn or fruit skins. The NHS says there are no specific foods you need to avoid.",
        ],
      },
      {
        heading: "What the research shows",
        paragraphs: [
          "These foods do not increase the risk of diverticulitis or bleeding. Guts UK says research shows that men who ate nuts and popcorn had a lower risk of diverticulitis and bleeding, and women who eat more fibre were less likely to develop diverticulitis.",
          "So, unless your doctor or dietitian tells you otherwise, these foods can be enjoyed as part of a healthy, balanced diet. You might still come across outdated or incorrect advice online about what foods to avoid.",
        ],
      },
      {
        heading: "Fibre during a flare",
        paragraphs: [
          "Some people are told to eat less fibre during a flare-up of diverticulitis. But recent reviews show there's no good evidence that a low-fibre or low-residue diet helps people recover faster, have fewer symptoms, or avoid future episodes.",
          "Guts UK says you should only cut back on foods containing fibre if a health professional tells you to. They ought to explain how, why and for how long, and cutting back should be for as short a time as possible.",
        ],
      },
      {
        heading: "Probiotics, meat and balance",
        paragraphs: [
          "Some people try probiotics, or good bacteria, to help with diverticular disease. But at the moment there's not enough good evidence to say they work, so Guts UK does not recommend them for this condition.",
          "Guts UK suggests trying to limit red and processed meat to no more than 70 grams a day. Processed meat includes sausages, bacon, ham, salami and pâté.",
          "If you change what you eat, it's important to make sure your diet stays balanced and provides all the nutrients your body needs. You can ask your GP to refer you to an NHS dietitian if you're unsure about what to eat.",
        ],
      },
    ],
    helps: [
      "Enjoy seeds, nuts, popcorn and fruit skins as part of a balanced diet, unless your doctor or dietitian tells you otherwise.",
      "Include wholegrains, fruits and vegetables every day.",
      "Only cut back on fibre if a health professional tells you to, and ask how, why and for how long.",
      "Try to limit red and processed meat to no more than 70 grams a day.",
      "Ask your GP to refer you to an NHS dietitian if you're unsure what to eat.",
    ],
    tryThisWeek: [
      "Enjoy nuts and seeds again.",
      "Have wholegrains every day.",
      "Cut back on processed meat.",
    ],
    ask: "Are there any foods I should avoid, or is a normal balanced diet fine for me?",
    interactive: {
      kind: "scenarios",
      title: "Myth or fact?",
      scenarios: [
        {
          id: "seeds",
          situation: "A friend says to pick the seeds out of your bread.",
          options: [{ text: "Keep them: no need to avoid seeds", best: true }, { text: "Avoid all seeds from now on" }],
          why: "NICE says people should be told there is no need to avoid seeds, nuts, popcorn or fruit skins.",
        },
        {
          id: "popcorn",
          situation: "You fancy popcorn at the cinema.",
          options: [{ text: "Enjoy it as part of a balanced diet", best: true }, { text: "Skip it: it gets stuck in pouches" }],
          why: "It was once believed these foods could get stuck in the pouches and cause problems, but this is no longer thought to be true.",
        },
        {
          id: "probiotic",
          situation: "An advert says a probiotic will fix diverticular disease.",
          options: [{ text: "Skip it: evidence is lacking", best: true }, { text: "Start it straight away" }],
          why: "At the moment there's not enough good evidence to say they work, so Guts UK does not recommend them for this condition.",
        },
        {
          id: "low-fibre",
          situation: "After a mild flare, you wonder about cutting out fibre for months.",
          options: [{ text: "Ask your doctor or dietitian first", best: true }, { text: "Cut out all fibre for months" }],
          why: "Guts UK says you should only cut back on foods containing fibre if a health professional tells you to.",
        },
      ],
    },
    sources: [GUTS_DD, NICE_NG147, NHS_DD, GUTS_FIBRE],
    quiz: {
      question: "Do you need to avoid nuts and seeds with diverticular disease?",
      options: [{ text: "No, there is no need to avoid them", right: true }, { text: "Yes, always" }, { text: "Only during the winter" }],
      why: "NICE says people should be told there is no need to avoid seeds, nuts, popcorn or fruit skins.",
    },
  },
  {
    id: "div-activity-weight",
    kicker: "Living well",
    question: "How do activity, weight and smoking affect diverticular disease?",
    hook: "Moving more, a healthy weight and not smoking can lower the risk of diverticulitis. Small steps count, and free support is there.",
    short: "NICE says exercise, weight loss if you are overweight, and stopping smoking can reduce the risk of developing diverticulitis and symptoms. Adults are advised to aim for at least 150 minutes of moderate activity a week. Local NHS stop smoking services are free and can improve your chances of quitting for good.",
    sections: [
      {
        heading: "Why lifestyle matters",
        paragraphs: [
          "Having a higher than healthy body weight, not being physically active and smoking can raise the risk of symptoms or complications. Smoking is linked to a higher risk of needing hospital care.",
          "NICE says people should be told about the benefits of exercise, weight loss if they are overweight, and stopping smoking, in reducing the risk of developing diverticulitis and symptoms. The exact cause of flare-ups isn't fully clear, but a healthy lifestyle may lower the risk of complications.",
        ],
      },
      {
        heading: "Moving more",
        paragraphs: [
          "Adults should aim to do at least 150 minutes of moderate intensity activity a week, or 75 minutes of vigorous activity. Moderate activity raises your heart rate and makes you breathe faster and feel warmer, and one way to tell is if you can still talk, but not sing.",
          "Examples include brisk walking, riding a bike, dancing and water aerobics. Adults should also do strengthening activities on at least 2 days a week, and break up long periods of not moving with some activity.",
          "Speak to your GP first if you have not exercised for some time, or if you have medical conditions or concerns.",
        ],
      },
      {
        heading: "A healthy weight",
        paragraphs: [
          "The NHS advice for diverticular disease is to maintain a healthy weight. Guts UK says that if you're overweight, try to lose some weight.",
          "The NHS also advises a healthy, balanced diet including whole grains, fruits and vegetables. If you're unsure about what foods you should be eating, you can ask your GP to refer you to an NHS dietitian.",
        ],
      },
      {
        heading: "Stopping smoking",
        paragraphs: [
          "Stopping smoking is one of the best things you can do for your health. It can be hard, but getting support makes it easier, and your GP can refer you to a local stop smoking service.",
          "Local stop smoking services are free and can improve your chances of quitting for good. They offer advice, support and treatments such as nicotine replacement therapy, and usually support you for up to 12 weeks.",
          "In England, you can call the free Smokefree National Helpline on 0300 123 1044. The NHS says that if you can reach 28 days smoke free, you're 5 times more likely to quit for good.",
        ],
      },
    ],
    helps: [
      "Aim for at least 150 minutes of moderate activity a week, such as brisk walking.",
      "Do strengthening activities on at least 2 days a week.",
      "Speak to your GP first if you have not exercised for some time, or have medical conditions or concerns.",
      "If you're overweight, try to lose some weight.",
      "Ask your GP to refer you to a local stop smoking service, or call the Smokefree National Helpline on 0300 123 1044.",
    ],
    tryThisWeek: [
      "Take a brisk walk.",
      "Try one strength session.",
      "Contact a stop smoking service.",
    ],
    ask: "What activity is right for me, and can you help me with my weight or with stopping smoking?",
    interactive: {
      kind: "risk-check",
      title: "What could you change?",
      intro: "Tick any that apply. Each is linked to symptoms or complications, and each can change.",
      items: [
        { id: "inactive", label: "Not being physically active", note: "Aim for at least 150 minutes of moderate activity a week, such as brisk walking.", changeable: true },
        { id: "sitting", label: "Long periods of sitting", note: "Break up long periods of not moving with some activity.", changeable: true },
        { id: "weight", label: "A higher than healthy body weight", note: "If you're overweight, try to lose some weight. You can ask your GP about an NHS dietitian.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Linked to a higher risk of needing hospital care. Free NHS stop smoking services can help.", changeable: true },
      ],
    },
    sources: [GUTS_DD, NICE_NG147, NHS_EXERCISE, NHS_DD, NHS_QUIT_SERVICES, NHS_QUIT],
    quiz: {
      question: "How much moderate activity a week are adults advised to aim for?",
      options: [{ text: "At least 150 minutes", right: true }, { text: "10 minutes" }, { text: "None, rest is best" }],
      why: "Adults should aim to do at least 150 minutes of moderate intensity activity a week, or 75 minutes of vigorous activity.",
    },
  },
  {
    id: "div-coming-back",
    kicker: "Living well",
    question: "How can I lower the chance of another flare?",
    hook: "Nothing can promise to stop flares. Fibre for life, enough to drink, an active life and the right painkillers are what the sources advise.",
    short: "Doctors are still not sure why some people get flares, and there is a lack of good-quality evidence on prevention. The advice is a high-fibre diet kept up for life if tolerated, enough fluids, exercise, a healthy weight, not smoking, and avoiding NSAIDs and opioid painkillers if possible. Antibiotics are not offered to prevent flares.",
    sections: [
      {
        heading: "What is known",
        paragraphs: [
          "Even with research on this condition, it's still unclear why some people develop complications like infections. The exact cause of flare-ups isn't fully clear, but a healthy lifestyle may lower the risk of complications.",
          "NHS inform says there is a lack of good quality scientific evidence on how to prevent diverticular disease. NICE was unable to make recommendations on managing diverticular disease that keeps coming back.",
        ],
      },
      {
        heading: "Fibre for life",
        paragraphs: [
          "NICE says that, if tolerated, a high-fibre diet should be kept up for life. NHS inform says that once you have reached your fibre target, you should stick to it for the rest of your life, if possible.",
          "NHS inform says people aged 50 to 70 who eat a high-fibre diet of 25g a day have a 40% lower chance of admission to hospital with complications of diverticular disease, compared with others their age who eat the least fibre.",
          "Drink enough fluid if you are increasing your fibre, especially if there is a risk of dehydration.",
        ],
      },
      {
        heading: "Other things that help",
        paragraphs: [
          "The NHS says that to reduce the risk of your symptoms getting worse in the future, you can eat a healthy, balanced diet, slowly increase how much fibre you eat if you do not eat much, stop smoking if you smoke, and maintain a healthy weight.",
          "NICE says people should be told about the benefits of exercise, weight loss if they are overweight, and stopping smoking, in reducing the risk of developing diverticulitis.",
        ],
      },
      {
        heading: "Medicines: what does and does not help",
        paragraphs: [
          "Avoid NSAIDs, such as ibuprofen, and opioid painkillers, such as codeine, if possible, because they may increase the risk of a hole in the bowel. Do not stop taking any prescribed medicine without talking to your doctor.",
          "NICE says antibiotics, or medicines called aminosalicylates, should not be offered to prevent diverticulitis coming back. There's not enough good evidence to say probiotics work, so Guts UK does not recommend them for this condition.",
        ],
      },
      {
        heading: "Staying in touch",
        paragraphs: [
          "Guts UK suggests asking your doctor what kind of follow-up or monitoring you will have, and when you should get back in touch or seek more help. You can ask to be referred to an NHS dietitian if you still have symptoms such as gas, bloating or diarrhoea.",
          "Contact your GP straight away if your symptoms get worse, and see your GP if your symptoms change.",
        ],
      },
    ],
    helps: [
      "Keep up a high-fibre diet for life, if you can tolerate it.",
      "Drink enough fluid as you increase your fibre.",
      "Take regular exercise, and stop smoking if you smoke.",
      "Maintain a healthy weight.",
      "Avoid NSAIDs and opioid painkillers if possible, but do not stop a prescribed medicine without talking to your doctor.",
      "Ask what follow-up you will have, and when to get back in touch.",
    ],
    tryThisWeek: [
      "Keep up a high-fibre diet.",
      "Drink enough as you add fibre.",
      "Ask about your follow-up.",
    ],
    ask: "What follow-up will I have, and what should I do if another flare starts?",
    interactive: {
      kind: "flip-cards",
      title: "What helps, and what does not",
      intro: "Turn each card to see what the sources say.",
      cards: [
        { id: "fibre", front: "A high-fibre diet", when: "Helps", back: "If tolerated, keep it up for life. The benefits may take several weeks." },
        { id: "fluids", front: "Enough fluid", when: "Helps", back: "Drink enough as you increase fibre, especially if there is a risk of dehydration." },
        { id: "lifestyle", front: "Exercise, weight and not smoking", when: "Helps", back: "Can reduce the risk of developing diverticulitis and symptoms." },
        { id: "painkillers", front: "NSAIDs and opioids", when: "Avoid if possible", back: "May increase the risk of a hole in the bowel. Do not stop a prescribed one without your doctor." },
        { id: "antibiotics", front: "Antibiotics to prevent flares", when: "Not offered", back: "NICE says antibiotics should not be offered to prevent diverticulitis coming back." },
        { id: "probiotics", front: "Probiotics", when: "Not enough evidence", back: "There's not enough good evidence to say they work for this condition." },
      ],
    },
    sources: [GUTS_DD, NHSI_DD, NICE_NG147, NHS_DD],
    quiz: {
      question: "Are antibiotics given to stop diverticulitis coming back?",
      options: [{ text: "No, NICE says they should not be offered", right: true }, { text: "Yes, as a daily course" }, { text: "Yes, every winter" }],
      why: "NICE says antibiotics, or medicines called aminosalicylates, should not be offered to prevent diverticulitis coming back.",
    },
  },
];
