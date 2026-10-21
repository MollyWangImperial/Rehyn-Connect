import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Bronchiectasis page's pieces (content/library-conditions/heart-more.ts
// `learnId`). Every sentence was written from wording checked on 21 October 2026 on the pages listed under
// each answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS
// bronchiectasis page and from Asthma + Lung UK, the UK lung charity, and is credited to them. General
// information only; it never replaces what a person's own team tells them.

const aluk = (label: string, path: string): LearnSource => ({ label: `Asthma + Lung UK: ${label}`, url: `https://www.asthmaandlung.org.uk/${path}` });

const NHS_BX: LearnSource = { label: "NHS: Bronchiectasis", url: "https://www.nhs.uk/conditions/bronchiectasis/" };
const NHS_BLOOD: LearnSource = { label: "NHS: Coughing up blood (blood in phlegm)", url: "https://www.nhs.uk/symptoms/coughing-up-blood/" };
const NHS_CT: LearnSource = { label: "NHS: CT scan", url: "https://www.nhs.uk/tests-and-treatments/ct-scan/" };
const NHS_SPIRO: LearnSource = { label: "NHS: Spirometry test", url: "https://www.nhs.uk/tests-and-treatments/spirometry/" };
const NHS_FLU: LearnSource = { label: "NHS: Flu vaccine", url: "https://www.nhs.uk/vaccinations/flu-vaccine/" };
const NHS_PNEUMO: LearnSource = { label: "NHS: Pneumococcal vaccine", url: "https://www.nhs.uk/vaccinations/pneumococcal-vaccine/" };
const NHS_COVID: LearnSource = { label: "NHS: COVID-19 vaccine", url: "https://www.nhs.uk/vaccinations/covid-19-vaccine/" };
const NHS_RSV: LearnSource = { label: "NHS: RSV vaccine", url: "https://www.nhs.uk/vaccinations/rsv-vaccine/" };
const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };
const ALUK_WHAT = aluk("What is bronchiectasis?", "conditions/bronchiectasis/what-bronchiectasis-what-causes-it");
const ALUK_SYMPTOMS = aluk("What are the signs and symptoms of bronchiectasis?", "conditions/bronchiectasis/what-are-symptoms-bronchiectasis");
const ALUK_DIAG = aluk("How is bronchiectasis diagnosed?", "conditions/bronchiectasis/how-bronchiectasis-diagnosed");
const ALUK_TREAT = aluk("How is bronchiectasis treated?", "conditions/bronchiectasis/how-bronchiectasis-treated");
const ALUK_FLARE = aluk("Bronchiectasis flare-ups (exacerbations)", "conditions/bronchiectasis/flare-ups");
const ALUK_SELF = aluk("Managing bronchiectasis", "conditions/bronchiectasis/self-management-bronchiectasis");
const ALUK_PLAN = aluk("Your bronchiectasis self-management plan", "conditions/bronchiectasis/plan");
const ALUK_AIRWAY = aluk("Airway clearance when you have a lung condition", "living-with/airway-clearance-when-you-have-lung-condition");
const ALUK_PHLEGM = aluk("Phlegm and mucus", "symptoms-tests-treatments/symptoms/phlegm");
const ALUK_ANTIBIOTICS = aluk("Antibiotics", "symptoms-tests-treatments/treatments/antibiotics");
const ALUK_NEBS = aluk("Nebulisers", "symptoms-tests-treatments/treatments/nebulisers");
const ALUK_INHALER_VIDEOS = aluk("How to use your inhaler", "living-with/inhaler-videos");
const ALUK_PR = aluk("Pulmonary rehabilitation (PR)", "living-with/keeping-active/pulmonary-rehabilitation");
const ALUK_ACTIVE = aluk("Physical activity and your lungs", "living-with/keeping-active/physical-activity");
const ALUK_FLU = aluk("How to prevent flu", "conditions/flu/prevent");
const ALUK_WORK = aluk("Working with a lung condition", "living-with/working-lung-condition");
const ALUK_TRAVEL = aluk("Travelling safely with a lung condition", "living-with/travel/safely");
const ALUK_TRAVEL_INS = aluk("Travel insurance with a lung condition", "living-with/travel/insurance");

export const bronchiectasisAnswers: LearnArticle[] = [
  {
    id: "bx-what-it-is",
    kicker: "Understanding",
    question: "What is bronchiectasis?",
    hook: "Airways in the lungs that have become damaged and wider than usual. Phlegm builds up, and that makes infections more likely.",
    short: "Bronchiectasis is a long-term condition where the airways in your lungs become damaged and widened, so phlegm (mucus) can build up in them. The built-up phlegm makes it easier for bacteria to get trapped, which increases your risk of infections. It cannot usually be cured, but treatment can help manage it.",
    sections: [
      {
        heading: "Damaged, widened airways",
        paragraphs: [
          "Bronchiectasis is a condition where the airways in your lungs are damaged and produce a lot of phlegm (mucus). It cannot usually be cured, but treatment can help manage it.",
          "It is pronounced brong-kee-EK-tuh-siss.",
        ],
      },
      {
        heading: "Why phlegm builds up",
        paragraphs: [
          "Because your airways are widened, phlegm (sputum) can build up in them. This can increase your risk of getting infections, as the built-up phlegm makes it easier for bacteria to get trapped in your airways.",
          "Bronchiectasis happens when your airways are damaged by inflammation. They become wider than usual, and this causes phlegm to build up. Too much phlegm can lead to chest infections.",
        ],
      },
      {
        heading: "How common it is",
        paragraphs: [
          "Asthma + Lung UK estimates that 212,000 people are living with bronchiectasis in the UK. This is around 1 in 200 adults.",
          "Bronchiectasis can affect anybody, but it is more common in women than men. You're more likely to be diagnosed with it if you're over 70 years old.",
        ],
      },
      {
        heading: "How it affects your life",
        paragraphs: [
          "Bronchiectasis affects everyone differently. How it affects you depends on how severe your symptoms are and how often you get chest infections.",
          "Some people find their condition gets worse and they get breathing problems that can be serious and affect their daily life. In rare cases it can be life-threatening. But some people have less severe symptoms that can be managed well with treatment.",
          "If your bronchiectasis is mild and your symptoms are well controlled, it should not impact your life expectancy. Speaking to your healthcare professional is the best way to understand more about your outlook.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you could have bronchiectasis.",
      "Ask your healthcare professional how severe your bronchiectasis is at your annual review.",
      "Call the Asthma + Lung UK helpline on 0300 222 5800 for information and support.",
      "Get support from other people with bronchiectasis, at a local support group or online.",
    ],
    tryThisWeek: [
      "See a GP if you think you have it.",
      "Ask how severe yours is.",
      "Call the Asthma + Lung UK helpline.",
    ],
    ask: "How severe is my bronchiectasis, and what does that mean for me?",
    interactive: {
      kind: "timeline",
      title: "How the cycle builds",
      steps: [
        { id: "damage", when: "First", title: "Airways damaged", points: ["Your airways are damaged by inflammation."] },
        { id: "wider", when: "Then", title: "Wider than usual", points: ["The airways become wider than usual."] },
        { id: "phlegm", when: "Next", title: "Phlegm builds up", points: ["Phlegm (mucus) builds up in the widened airways."] },
        { id: "infection", when: "Over time", title: "Infections", points: ["Built-up phlegm makes it easier for bacteria to get trapped.", "Too much phlegm can lead to chest infections."] },
      ],
    },
    sources: [NHS_BX, ALUK_WHAT, ALUK_DIAG],
    quiz: {
      question: "Why does phlegm build up in bronchiectasis?",
      options: [{ text: "The airways are widened", right: true }, { text: "The lungs stop making mucus" }, { text: "The heart pumps too slowly" }],
      why: "Because your airways are widened, phlegm (sputum) can build up in them.",
    },
  },
  {
    id: "bx-causes",
    kicker: "Causes",
    question: "Why does bronchiectasis happen?",
    hook: "A severe infection, another lung condition or a problem with the immune system can damage the airways. For many people, no cause is found.",
    short: "Bronchiectasis happens when your airways are damaged by inflammation. Possible causes include a severe infection such as pneumonia or whooping cough, another lung condition, a problem with your immune system, and conditions such as rheumatoid arthritis or inflammatory bowel disease. In around 4 in 10 cases, bronchiectasis has no clear cause.",
    sections: [
      {
        heading: "Damage from inflammation",
        paragraphs: [
          "Bronchiectasis happens when your airways are damaged by inflammation. There are many possible causes of damage to your airways.",
          "For many people it's not clear what the cause is. Asthma + Lung UK says that in around 4 in 10 cases, bronchiectasis has no clear cause. This is called idiopathic bronchiectasis.",
        ],
      },
      {
        heading: "Severe infections",
        paragraphs: [
          "Infections can cause bronchiectasis. You might have had a very severe case of an infection, such as pneumonia, tuberculosis (TB), mycoplasma, flu, whooping cough or measles.",
          "The NHS list of severe infections also includes COVID-19.",
        ],
      },
      {
        heading: "Other lung conditions",
        paragraphs: [
          "Another condition that affects your lungs, such as asthma, chronic obstructive pulmonary disease (COPD) or cystic fibrosis, can cause bronchiectasis.",
          "So can problems with the tiny hair-like structures in your lungs (cilia). This could be caused by conditions like primary ciliary dyskinesia or Young's syndrome.",
        ],
      },
      {
        heading: "The immune system and other conditions",
        paragraphs: [
          "A problem with your immune system can cause it. So can conditions such as rheumatoid arthritis, and inflammatory bowel disease such as ulcerative colitis or Crohn's disease.",
          "Other causes include breathing in something that damages your lungs, allergic bronchopulmonary aspergillosis (ABPA), tumours in your airways, and accidentally breathing food or drink into your airways instead of swallowing it (aspiration).",
        ],
      },
      {
        heading: "Finding the cause",
        paragraphs: [
          "If tests show you could have bronchiectasis, you'll be referred to a specialist. You may also need other tests to find the cause.",
          "If possible, your respiratory specialist will find out what caused your bronchiectasis. You may also need treatment for any conditions that have caused it.",
        ],
      },
    ],
    helps: [
      "Ask your respiratory specialist whether they can find out what caused your bronchiectasis.",
      "Be ready to talk about your symptoms, your medical history and times when you've been sick in the past.",
      "Ask whether you need treatment for any conditions that have caused your bronchiectasis.",
      "Do not smoke, and get help to quit smoking if you need it.",
    ],
    tryThisWeek: [
      "Ask what caused yours.",
      "Be ready to share your medical history.",
      "Ask about treating the cause.",
    ],
    ask: "What caused my bronchiectasis?",
    interactive: {
      kind: "risk-check",
      title: "What could lie behind it?",
      intro: "Tick any that apply to you. In around 4 in 10 cases, no clear cause is found.",
      items: [
        { id: "infection", label: "A severe infection in the past", note: "Such as pneumonia, TB, flu, whooping cough or measles.", changeable: false },
        { id: "lung", label: "Another lung condition", note: "Such as asthma, COPD or cystic fibrosis. Getting the right treatment for other long-term conditions can help your bronchiectasis too.", changeable: true },
        { id: "immune", label: "A weaker immune system", note: "A problem with your immune system can cause bronchiectasis.", changeable: false },
        { id: "ra", label: "Rheumatoid arthritis", note: "Connective tissue disorders, like rheumatoid arthritis, are one of the possible causes.", changeable: false },
        { id: "ibd", label: "Crohn's disease or ulcerative colitis", note: "Inflammatory bowel disease is one of the possible causes.", changeable: false },
        { id: "cilia", label: "Problems with the cilia", note: "Conditions like primary ciliary dyskinesia affect the tiny hair-like structures in your lungs.", changeable: false },
        { id: "aspiration", label: "Food or drink going down the wrong way", note: "Accidentally breathing food or drink into your airways (aspiration) is one of the causes.", changeable: false },
      ],
    },
    sources: [NHS_BX, ALUK_WHAT, ALUK_DIAG, ALUK_TREAT],
    quiz: {
      question: "In around how many cases does bronchiectasis have no clear cause?",
      options: [{ text: "Around 4 in 10", right: true }, { text: "Around 1 in 100" }, { text: "Every case has a clear cause" }],
      why: "In around 4 in 10 cases, bronchiectasis has no clear cause. This is called idiopathic bronchiectasis.",
    },
  },
  {
    id: "bx-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms of bronchiectasis?",
    hook: "A cough that does not go away, a lot of phlegm, and chest infections that keep coming back. A flare-up is when they get worse.",
    short: "The main symptoms of bronchiectasis are a cough that does not go away, coughing up a lot of phlegm (mucus) and getting frequent chest infections. Other symptoms can include wheezing, shortness of breath, feeling very tired, chest pain and coughing up blood. A flare-up is when your usual symptoms get worse.",
    sections: [
      {
        heading: "The main symptoms",
        paragraphs: [
          "The main symptoms of bronchiectasis are a cough that does not go away, coughing up a lot of phlegm (mucus), and getting frequent chest infections. The phlegm may be clear, white, yellow or green.",
          "Asthma + Lung UK says around 3 in 4 people with bronchiectasis cough up phlegm every day. Some people cough up small amounts of phlegm, or no phlegm. This is sometimes called dry bronchiectasis.",
        ],
      },
      {
        heading: "Other symptoms",
        paragraphs: [
          "Other symptoms can include wheezing, shortness of breath, noises when you breathe such as crackling, feeling very tired, coughing up blood and chest pain.",
          "Everybody with bronchiectasis is different. You could have one symptom, or many, and the symptoms you have might change from day to day.",
        ],
      },
      {
        heading: "What a flare-up is",
        paragraphs: [
          "A flare-up is when your usual symptoms get worse. The medical name for a flare-up is exacerbation.",
          "You may cough more or cough up more phlegm, notice a change in the colour or texture of your phlegm, or feel more breathless or more tired than usual. You could also get a fever, which is a high temperature of 38 degrees Celsius or more.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "See a GP if you think you could have bronchiectasis, or if you've had a cough for more than 3 weeks.",
          "Ask for an urgent GP appointment or get help from NHS 111 if your cough is very bad or quickly gets worse, you're coughing up a few small spots, flecks or streaks of blood, or you feel more short of breath than usual. Do the same if you've been diagnosed with bronchiectasis and get symptoms of a chest infection, such as a high temperature or chest pain when you breathe or cough.",
          "Call 999 or go to A&E if you're coughing up more than just a few spots or streaks of blood, or you have severe difficulty breathing, where you're gasping, choking or not able to get words out. Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
        ],
      },
    ],
    helps: [
      "See a GP if you've had a cough for more than 3 weeks.",
      "Use a symptom diary to track your symptoms, and show it to your healthcare professional.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you have bronchiectasis and get symptoms of a chest infection.",
      "Call 999 or go to A&E if you're coughing up more than just a few spots or streaks of blood, or have severe difficulty breathing.",
    ],
    tryThisWeek: [
      "See a GP about a cough over 3 weeks.",
      "Keep a symptom diary.",
      "Know when to call 999.",
    ],
    ask: "Which symptoms should make me call my team, and which mean I should call 999?",
    interactive: {
      kind: "signs",
      title: "What have you noticed?",
      intro: "Tick anything you have noticed. The ones you tick make a list to take to your GP or nurse.",
      signs: [
        "A cough that does not go away",
        "Coughing up a lot of phlegm",
        "Frequent chest infections",
        "Wheezing",
        "Shortness of breath",
        "Feeling very tired",
        "Chest pain",
        "Coughing up blood",
      ],
      after: "Ask for an urgent GP appointment or get help from NHS 111 if you're coughing up a few streaks of blood or feel more short of breath than usual. Call 999 or go to A&E if you're coughing up more than just a few spots or streaks of blood, or have severe difficulty breathing.",
      copyHeading: "My bronchiectasis symptoms",
    },
    sources: [NHS_BX, ALUK_SYMPTOMS, ALUK_FLARE],
    quiz: {
      question: "How many people with bronchiectasis cough up phlegm every day?",
      options: [{ text: "Around 3 in 4", right: true }, { text: "Around 1 in 10" }, { text: "Nobody does" }],
      why: "Around 3 in 4 people with bronchiectasis cough up phlegm every day.",
    },
  },
  {
    id: "bx-tests",
    kicker: "Tests",
    question: "Which tests show bronchiectasis?",
    hook: "A GP listens to your chest and may test your phlegm. A CT scan, arranged through a specialist, confirms the diagnosis.",
    short: "If you have symptoms of bronchiectasis, a GP will listen to your chest and may arrange tests such as a phlegm sample, a chest X-ray, a spirometry test and blood tests. If these show you could have bronchiectasis, you'll be referred to a specialist for more tests, such as a CT scan, to confirm the diagnosis. You may also need other tests to find the cause.",
    sections: [
      {
        heading: "At the GP",
        paragraphs: [
          "If you have symptoms of bronchiectasis a GP will listen to your chest. You may be asked about your symptoms, such as how often you cough up phlegm, your medical history, and your lifestyle, like whether you smoke.",
          "They may arrange some tests, such as testing a sample of your phlegm to check for an infection, a chest X-ray, a spirometry test and blood tests.",
        ],
      },
      {
        heading: "The CT scan",
        paragraphs: [
          "If these tests show you could have bronchiectasis, you'll be referred to a specialist for more tests, such as a CT scan, to confirm the diagnosis.",
          "A CT scan is the most effective way of diagnosing bronchiectasis. It provides detailed images of your lungs that can show a lot more than a standard X-ray. You may hear it called a high-resolution CT (HRCT) scan.",
          "A CT scan usually takes between 10 and 20 minutes. You lie still on a flat bed while the scanner moves over you, and you may be asked to breathe in, out, or hold your breath during parts of the scan.",
        ],
      },
      {
        heading: "The other tests",
        paragraphs: [
          "For a phlegm (sputum) sample, you cough up phlegm into a pot, and it is tested to see if there is bacteria or fungi in it. A chest X-ray helps to rule out other conditions that could be causing your symptoms.",
          "Spirometry checks how well your lungs are working. You breathe out as quickly and strongly as you can into a tube, then repeat the test 2 more times.",
          "Blood tests check how well your immune system is working. A bronchoscopy may be used to see if there are any problems inside your lungs and to take samples for testing.",
        ],
      },
      {
        heading: "Results and questions",
        paragraphs: [
          "It usually takes between 1 and 2 weeks to get CT scan results, but it can take up to 4 weeks. If you have not heard anything after 4 weeks, contact the doctor who referred you.",
          "If you're unsure about your tests, you could ask what the test is for, how and when you will get the results, who to contact if you do not get them, and what the results mean.",
        ],
      },
    ],
    helps: [
      "Ask what each test is for.",
      "Ask how and when you will get the results, and who to contact if you do not get them.",
      "Contact the doctor who referred you if you have not heard about your CT scan results after 4 weeks.",
      "Tell the hospital before a CT scan if you take any medicines, have any allergies, or are or might be pregnant.",
      "Talk to a GP or doctor at the hospital if you're feeling anxious about having a CT scan.",
    ],
    tryThisWeek: [
      "Ask what each test is for.",
      "Ask when the results will come.",
      "Chase CT results after 4 weeks.",
    ],
    ask: "Which tests do I need, and will they look for the cause too?",
    interactive: {
      kind: "flip-cards",
      title: "The tests, turned over",
      intro: "Tap a card to see what each test does.",
      cards: [
        { id: "ct", front: "CT scan", when: "To confirm the diagnosis", back: "The most effective way of diagnosing bronchiectasis. Detailed images of your lungs that show a lot more than an X-ray." },
        { id: "sputum", front: "Phlegm sample", when: "At the GP, and when you're unwell", back: "You cough up phlegm into a pot. It is tested to see if there is bacteria or fungi in it." },
        { id: "xray", front: "Chest X-ray", when: "Early on", back: "Helps to rule out other conditions that could be causing your symptoms." },
        { id: "spiro", front: "Spirometry", when: "To check your lungs", back: "You breathe into a machine to check how well your lungs are working." },
        { id: "blood", front: "Blood tests", when: "Alongside other tests", back: "Check how well your immune system is working." },
        { id: "bronchoscopy", front: "Bronchoscopy", when: "Sometimes", back: "Used to see if there are any problems inside your lungs and to take samples for testing." },
      ],
    },
    sources: [NHS_BX, ALUK_DIAG, NHS_CT, NHS_SPIRO],
    quiz: {
      question: "What is the most effective way of diagnosing bronchiectasis?",
      options: [{ text: "A CT scan", right: true }, { text: "A blood pressure check" }, { text: "An ECG" }],
      why: "A CT scan is the most effective way of diagnosing bronchiectasis.",
    },
  },
  {
    id: "bx-airway-clearance",
    kicker: "Treatment",
    question: "How do I clear my chest every day?",
    hook: "A respiratory physiotherapist teaches breathing techniques that loosen phlegm and move it up gently. Most people do them twice a day.",
    short: "A specialist physiotherapist will teach you breathing techniques for clearing phlegm from your lungs and airways, and may recommend a hand-held device. You'll usually need to do these exercises every day, which helps to control your cough and reduce the risk of chest infections. Most people benefit from doing airway clearance twice a day for 10 to 30 minutes, but your physiotherapist will advise you.",
    sections: [
      {
        heading: "Why it matters",
        paragraphs: [
          "You'll see a specialist physiotherapist, who will teach you breathing techniques for clearing phlegm (mucus) from your lungs and airways. You'll usually need to do these exercises every day. This helps to control your cough and reduce the risk of chest infections.",
          "Always speak to your respiratory physiotherapist before trying airway clearance techniques for the first time. If you do airway clearance incorrectly, you could risk irritating your lungs.",
        ],
      },
      {
        heading: "The Active Cycle of Breathing Technique",
        paragraphs: [
          "The Active Cycle of Breathing Technique (ACBT) involves cycles of relaxed and deep breathing, followed by gentle huffing to remove a build-up of phlegm from your airways. You can do it anywhere that you feel comfortable, without any equipment.",
          "Huffing is a big breath out through an open mouth, instead of a forceful cough. It helps to move phlegm up your airways in a controlled way that's gentle on your airways.",
          "If you start to feel breathless, wheezy or tired, stop and rest with relaxed breathing control.",
        ],
      },
      {
        heading: "Hand-held devices",
        paragraphs: [
          "Hand-held devices usually use a combination of vibrations and air pressure to help you cough up phlegm. Examples include Acapella, Aerobika or Flutter.",
          "They do not contain any medicine. They are not suitable for everyone, and should only be used if your healthcare professional has recommended one.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "Your respiratory physiotherapist will advise you how often and for how long to do your airway clearance exercises. Most people benefit from doing airway clearance twice a day for 10 to 30 minutes, but this depends on your condition and how much phlegm you produce.",
          "If you're having a flare-up, you may need to do airway clearance more often. Flare-ups can increase phlegm in your airways.",
        ],
      },
      {
        heading: "Getting the most from it",
        paragraphs: [
          "Find a time and place where you feel comfortable, and give yourself enough time to complete your full routine. Staying hydrated helps to thin your phlegm, and some people find a hot shower or bath beforehand helpful.",
          "If your phlegm is difficult to cough up, your care team may recommend using a nebuliser to breathe in a salt solution before doing the exercises.",
        ],
      },
    ],
    helps: [
      "Ask your healthcare professional to refer you to a respiratory physiotherapist.",
      "Clear your airways regularly, as prescribed by your respiratory physiotherapist.",
      "Find a time and place where you feel comfortable doing your airway clearance routine.",
      "Stay hydrated to help thin your phlegm.",
      "Stop and rest if you start to feel breathless, wheezy or tired.",
      "Speak to your GP, nurse or respiratory physiotherapist if you have any discomfort, dizziness or pain when you clear your airways.",
    ],
    tryThisWeek: [
      "Ask for a physiotherapy referral.",
      "Clear your airways as prescribed.",
      "Drink enough to thin your phlegm.",
    ],
    ask: "Can I be shown an airway clearance technique by a physiotherapist?",
    interactive: {
      kind: "timeline",
      title: "The Active Cycle of Breathing, step by step",
      steps: [
        { id: "control", when: "One to two minutes", title: "Breathing control", points: ["Breathe in slowly through your nose, and out gently through pursed lips.", "Your breath out should take longer than your breath in."] },
        { id: "deep", when: "Three to five breaths", title: "Deep breathing", points: ["A long, slow deep breath in until your lungs feel comfortably full.", "Pause for two to three seconds if you can, then breathe out gently."] },
        { id: "recover", when: "Then", title: "Back to breathing control", points: ["Go back to relaxed breathing control to give yourself time to recover."] },
        { id: "huff", when: "Next", title: "Huffing", points: ["A big breath out through an open mouth, like misting up a mirror.", "Rest with relaxed breathing control after each huff."] },
        { id: "repeat", when: "Until it sounds clear", title: "Repeat the cycle", points: ["Continue until your huff sounds clear.", "Stop and rest if you feel breathless, wheezy or tired."] },
      ],
    },
    sources: [NHS_BX, ALUK_TREAT, ALUK_AIRWAY],
    quiz: {
      question: "What is huffing?",
      options: [{ text: "A big breath out through an open mouth", right: true }, { text: "A forceful cough" }, { text: "Holding your breath for a minute" }],
      why: "Huffing is a big breath out through an open mouth, instead of a forceful cough.",
    },
  },
  {
    id: "bx-antibiotics",
    kicker: "Treatment",
    question: "How are antibiotics used for bronchiectasis?",
    hook: "A phlegm sample shows what is causing an infection. A flare-up caused by bacteria usually means a 14-day course.",
    short: "Antibiotics are used to treat bronchiectasis flare-ups caused by a bacterial infection, and you'll usually take them for 14 days. Your phlegm should be tested so the right antibiotic can be chosen, though treatment may start before the results are back. If you get more than 3 chest infections a year, a specialist may recommend antibiotics long term to help prevent them.",
    sections: [
      {
        heading: "A phlegm sample first",
        paragraphs: [
          "You'll usually be asked to give your doctor a sample of phlegm when you're unwell or if your symptoms change. The sample will be checked for a chest infection, and if you have one you'll need to take antibiotics.",
          "Your healthcare professional might start your course of antibiotics without waiting for the results of your phlegm sample. Once they get the results, they might change your course of antibiotics if they need to.",
        ],
      },
      {
        heading: "A 14-day course",
        paragraphs: [
          "If you have a flare-up caused by a bacterial infection, you'll get a course of antibiotics. You'll usually have to take these for 14 days.",
          "It's important to finish your course of antibiotics even if you feel better, to make sure the bacteria are fully treated. Stopping early may mean your infection could come back.",
        ],
      },
      {
        heading: "A rescue pack at home",
        paragraphs: [
          "You may be given antibiotics to keep at home (a rescue pack) for when you get symptoms of a chest infection. Your care team will give you instructions on when to take them.",
          "Usually, you should only start them if you have a sign of an infection, such as a change in colour or texture of your phlegm. Always tell your healthcare professional if you use your rescue pack, so they can review your treatment.",
          "Check the expiry date of your rescue pack regularly, and ask for another one if your medicines are out of date.",
        ],
      },
      {
        heading: "Long-term antibiotics",
        paragraphs: [
          "If you get more than 3 chest infections a year, a specialist may recommend you take antibiotics long term to help prevent them.",
          "Asthma + Lung UK says your healthcare professional should refer you to a specialist if you've had two or more flare-ups in the last year, or significant symptoms every day and one severe flare-up. If you have a flare-up while using long-term antibiotics, your healthcare professional can prescribe different antibiotics to treat it.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Side effects of antibiotics are usually mild and go away after you have stopped taking them. They include being sick, feeling sick, bloating and indigestion, and diarrhoea.",
          "Talk to your GP if side effects are a problem for you. It's important to tell your doctor about your allergies before they prescribe you any antibiotics.",
        ],
      },
    ],
    helps: [
      "Give your doctor a phlegm sample when you're unwell or if your symptoms change.",
      "Finish your course of antibiotics even if you feel better.",
      "Ask whether you should have antibiotics to keep at home (a rescue pack), and when to take them.",
      "Always tell your healthcare professional if you use your rescue pack.",
      "Check the expiry date of your rescue pack regularly.",
    ],
    tryThisWeek: [
      "Give a phlegm sample when unwell.",
      "Finish the whole course.",
      "Tell your team if you use your rescue pack.",
    ],
    ask: "Should I have a rescue pack of antibiotics at home?",
    interactive: {
      kind: "scenarios",
      title: "What would you do?",
      scenarios: [
        {
          id: "feel-better",
          situation: "You're partway through a 14-day course and already feel much better.",
          options: [{ text: "Finish the course", best: true }, { text: "Stop now and save the rest" }],
          why: "It's important to finish your course of antibiotics even if you feel better. Stopping early may mean your infection could come back.",
        },
        {
          id: "colour",
          situation: "Your phlegm has changed colour, and you have a rescue pack at home.",
          options: [{ text: "Follow your instructions, then tell your team", best: true }, { text: "Wait a few weeks to see" }],
          why: "Usually, you should only start them if you have a sign of an infection, such as a change in colour or texture of your phlegm. Always tell your healthcare professional if you use your rescue pack.",
        },
        {
          id: "sample",
          situation: "You feel unwell and your doctor asks for a phlegm sample.",
          options: [{ text: "Give the sample", best: true }, { text: "Skip it and ask for antibiotics" }],
          why: "The sample will be checked for a chest infection, and the results help your healthcare professional choose the right antibiotics.",
        },
      ],
    },
    sources: [NHS_BX, ALUK_TREAT, ALUK_ANTIBIOTICS],
    quiz: {
      question: "How long is a usual antibiotic course for a bronchiectasis flare-up?",
      options: [{ text: "14 days", right: true }, { text: "2 days" }, { text: "One day" }],
      why: "If you have a flare-up caused by a bacterial infection, you'll get a course of antibiotics. You'll usually have to take these for 14 days.",
    },
  },
  {
    id: "bx-inhalers",
    kicker: "Treatment",
    question: "Will I need inhalers or a nebuliser?",
    hook: "Not everyone with bronchiectasis needs an inhaler. A nebuliser can turn salt water into a mist that makes thick phlegm easier to cough up.",
    short: "Inhalers are not always used for bronchiectasis, but you may be prescribed one if you're very breathless every day, to take before chest clearance, or if you also have asthma or COPD. If your phlegm is difficult to cough up, your care team may recommend using a nebuliser to breathe in a salt solution before your exercises. Using the correct inhaler technique means you get the full benefit of your medicines.",
    sections: [
      {
        heading: "When an inhaler helps",
        paragraphs: [
          "Inhalers are not always used as a treatment for bronchiectasis. Your healthcare professional may prescribe one if your bronchiectasis is making you very breathless every day, to take before you do chest clearance, or if you also have asthma or COPD.",
          "These inhalers have bronchodilator medicines in them. Bronchodilators open your airways and relax the muscles in your chest, which makes it easier for you to breathe.",
        ],
      },
      {
        heading: "Short-acting and long-acting",
        paragraphs: [
          "Reliever inhalers, or short-acting bronchodilators, work in a few minutes. You can use them up to four times a day, and they can help your breathing for four to six hours.",
          "Long-acting bronchodilators are usually taken once or twice a day. They can keep your airways open, helping your breathing, for 12 to 24 hours.",
        ],
      },
      {
        heading: "Salt water through a nebuliser",
        paragraphs: [
          "A nebuliser is a device that changes liquid medicine into a fine mist, which you breathe in through a face mask or mouthpiece.",
          "If your phlegm is difficult to cough up, your care team may recommend using a nebuliser to breathe in a salt solution before doing your chest clearance exercises.",
          "The saltwater solution helps to reduce the thickness of phlegm so it's easier to cough it out. Nebulisers can also be used to breathe in antibiotics if you have a bacterial infection.",
        ],
      },
      {
        heading: "Other medicines for thick phlegm",
        paragraphs: [
          "Mucolytics are medicines that make your phlegm less thick and sticky. As well as saline, they include carbocisteine, which you usually take three to four times a day, and acetylcysteine.",
        ],
      },
      {
        heading: "Using them well",
        paragraphs: [
          "When your healthcare professional prescribes you an inhaler, they should check that you know how to use it well. Using the correct technique means that you get the full benefit of your medicines.",
          "Using a nebuliser normally takes between 10 and 15 minutes. Clean your nebuliser after every use, and never use anyone else's mouthpiece, mask or tubing.",
        ],
      },
    ],
    helps: [
      "Ask a pharmacist to check your inhaler technique, or use Asthma + Lung UK's short inhaler videos.",
      "Only use a nebuliser at home if your healthcare professional has prescribed it for you.",
      "Always clean your nebuliser after every use.",
      "Use your reliever inhaler or saline nebuliser around 10 minutes before you clear your airways, if your healthcare professional has advised you to.",
      "Always let your doctor or specialist know about any side effects you're getting.",
    ],
    tryThisWeek: [
      "Get your inhaler technique checked.",
      "Clean your nebuliser after each use.",
      "Ask about using it before chest clearance.",
    ],
    ask: "Do I need an inhaler or a saline nebuliser before I clear my chest?",
    interactive: {
      kind: "flip-cards",
      title: "Inhalers and nebulisers, turned over",
      intro: "Tap a card to see what each one does.",
      cards: [
        { id: "reliever", front: "Reliever inhaler", when: "Up to four times a day", back: "A short-acting bronchodilator. It works in a few minutes and can help your breathing for four to six hours." },
        { id: "long-acting", front: "Long-acting inhaler", when: "Once or twice a day", back: "A long-acting bronchodilator. It can keep your airways open for 12 to 24 hours." },
        { id: "saline", front: "Saline nebuliser", when: "Before chest clearance, if advised", back: "Turns a saltwater solution into a mist that makes phlegm less thick, so it's easier to cough out." },
        { id: "carbocisteine", front: "Carbocisteine", when: "Usually three to four times a day", back: "A mucolytic capsule, syrup or liquid that makes phlegm less thick and sticky." },
        { id: "nebulised-antibiotics", front: "Nebulised antibiotics", when: "For a bacterial infection", back: "A nebuliser can also be used to breathe in antibiotics." },
      ],
    },
    sources: [ALUK_TREAT, NHS_BX, ALUK_NEBS, ALUK_INHALER_VIDEOS, ALUK_AIRWAY],
    quiz: {
      question: "What does a saltwater nebuliser do for bronchiectasis?",
      options: [{ text: "Makes phlegm less thick, so it's easier to cough out", right: true }, { text: "Slows the heart down" }, { text: "Cures bronchiectasis" }],
      why: "It works by helping to reduce the thickness of phlegm so it's easier to cough it out.",
    },
  },
  {
    id: "bx-rehab",
    kicker: "Staying active",
    question: "What is pulmonary rehabilitation, and how active should I be?",
    hook: "A course of exercise and advice for people whose lung condition makes them breathless. Getting out of breath is part of it.",
    short: "If you have problems with shortness of breath, you may be offered pulmonary rehabilitation, a course led by a physiotherapist with exercise classes and advice on managing your condition. A course usually lasts six to eight weeks, with two sessions a week. Exercising regularly helps you stay fit and helps clear your lungs.",
    sections: [
      {
        heading: "What rehab is",
        paragraphs: [
          "If you have problems with shortness of breath you may be offered a course led by a physiotherapist, called pulmonary rehabilitation. This will include exercise classes and advice on managing your condition.",
          "Asthma + Lung UK says it includes exercises to help you feel stronger and have more energy, advice to help you understand your condition, lifestyle advice such as help with healthy eating, and physical and emotional support.",
        ],
      },
      {
        heading: "How a course runs",
        paragraphs: [
          "A course usually lasts six to eight weeks, with two sessions of about two hours each week. You'll be in a group with other people too.",
          "At each session, you'll spend about half the time exercising. Getting out of breath is part of the therapy, but you will be supported throughout and won't be asked to do more than you can safely do.",
        ],
      },
      {
        heading: "How it can help",
        paragraphs: [
          "Pulmonary rehabilitation can help you cope better with feeling out of breath, feel less tired and improve your mental wellbeing. It can also reduce your risk of being admitted to hospital with a chest infection or flare-up.",
          "Your GP, practice nurse or respiratory team can refer you. Some programmes have waiting lists, so try to speak to your GP about it as soon as you can.",
        ],
      },
      {
        heading: "Keeping active every day",
        paragraphs: [
          "Exercise regularly, to stay fit and help clear your lungs. Your care team can give you exercise advice.",
          "Getting out of breath when you're active is completely normal. If you avoid activities that make you breathless, your muscles become weaker, and over time you feel more and more breathless.",
          "Try to do at least 150 minutes of moderate intensity activity every week, which works out at about 20 minutes a day. Start slowly and build up gradually.",
        ],
      },
      {
        heading: "Knowing when to stop",
        paragraphs: [
          "Stop exercising and get advice from your healthcare professional if you get chest pain or tightness, feel more breathless than you usually would, feel dizzy or sick, or start wheezing.",
          "Call 999 if you're struggling to breathe or have sudden shortness of breath, or if your breathing does not go back to normal after exercise.",
        ],
      },
    ],
    helps: [
      "Ask your GP, practice nurse or respiratory team whether pulmonary rehabilitation is right for you.",
      "Try to attend every session of pulmonary rehabilitation if you can.",
      "Use the talk test: if you need to stop for breath when saying a sentence, you're exercising at the right level.",
      "Start slowly and build up gradually.",
      "Wait around one to two hours after eating a meal before you start doing any physical activity.",
      "Stop and get advice if you get chest pain, dizziness or feel more breathless than usual.",
    ],
    tryThisWeek: [
      "Ask about a rehab referral.",
      "Try the talk test.",
      "Start slowly and build up.",
    ],
    ask: "Can I be referred to pulmonary rehabilitation?",
    interactive: {
      kind: "timeline",
      title: "A course of pulmonary rehab",
      steps: [
        { id: "assessment", when: "At the start", title: "An assessment", points: ["Your health and what you're physically able to do are checked.", "The team asks questions so they can help you get the best out of the course."] },
        { id: "sessions", when: "Six to eight weeks", title: "Two sessions a week", points: ["About two hours each, in a group.", "About half the time is spent exercising."] },
        { id: "learning", when: "In each session", title: "Learning", points: ["Breathing techniques, using your inhalers, and eating when breathless.", "What to do when you're unwell with a chest infection or flare-up."] },
        { id: "after", when: "After the course", title: "Keeping it going", points: ["Staying active helps you keep up the progress you've made.", "Ask about a follow-up exercise programme."] },
      ],
    },
    sources: [NHS_BX, ALUK_TREAT, ALUK_PR, ALUK_ACTIVE],
    quiz: {
      question: "Is getting out of breath in pulmonary rehabilitation a bad sign?",
      options: [{ text: "No, it is part of the therapy", right: true }, { text: "Yes, it means you should leave the course" }, { text: "Yes, it means rehab is not working" }],
      why: "Getting out of breath is part of the therapy, but you will be supported throughout and won't be asked to do more than you can safely do.",
    },
  },
  {
    id: "bx-flare-plan",
    kicker: "Self-management",
    question: "What should a plan for flare-ups include?",
    hook: "A self-management plan, made with your team, helps you spot a flare-up early and act on it quickly.",
    short: "A bronchiectasis self-management plan includes personalised advice about your symptoms, treatments and flare-ups, and can help you recognise early symptoms of a flare-up and treat them quickly. You and your healthcare professional create it together. If you think you're having a flare-up, follow the advice on your plan.",
    sections: [
      {
        heading: "What the plan is",
        paragraphs: [
          "A bronchiectasis self-management plan includes personalised advice about your bronchiectasis, including information about your symptoms, treatments, management, lifestyle and flare-ups. You and your healthcare professional can create it together.",
          "It keeps important information in one place, including everyday advice, how to spot and treat flare-ups, when to see your healthcare professional, and what the colour of your phlegm means.",
        ],
      },
      {
        heading: "Spotting a flare-up",
        paragraphs: [
          "A flare-up is when your usual symptoms get worse. You may cough more or cough up more phlegm, notice a change in its colour or texture, or feel more breathless or tired than usual.",
          "Flare-ups are usually caused by bacterial infections, like a chest or lung infection. They can also be caused by colds, flu, COVID-19 or respiratory syncytial virus (RSV), and by air pollution.",
        ],
      },
      {
        heading: "Acting quickly",
        paragraphs: [
          "It's important to manage flare-ups quickly to prevent further damage to your lungs. If you think you're having a flare-up, follow the advice on your self-management plan.",
          "This might involve giving a phlegm sample, taking antibiotics if your flare-up is caused by a bacterial infection, doing your airway clearance techniques, and seeing your healthcare professional when you feel better.",
        ],
      },
      {
        heading: "When it is an emergency",
        paragraphs: [
          "Asthma + Lung UK says to call 999 if you have cold, clammy skin, are coughing up blood, feel lightheaded or dizzy, or have severe breathlessness or difficulty breathing.",
          "The NHS says to call 999 or go to A&E if you're coughing up more than just a few spots or streaks of blood, or you have severe difficulty breathing. Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
        ],
      },
      {
        heading: "Sharing and reviewing it",
        paragraphs: [
          "After making your plan with your healthcare professional, share it with your GP, respiratory nurse, or any other healthcare professionals involved in your care. It may also help to discuss it with your family, friends and carers.",
          "You should see your healthcare professional to review your bronchiectasis at least once a year. Regular reviews help make sure your self-management plan stays up to date.",
        ],
      },
    ],
    helps: [
      "Create a self-management plan together with your healthcare professional.",
      "Share your plan with your GP, respiratory nurse, family, friends and carers.",
      "Follow the advice on your self-management plan if you think you're having a flare-up.",
      "Record your day-to-day symptoms in a symptom diary, so you can notice changes quickly.",
      "Ask about being referred to a respiratory specialist if you've had two or more flare-ups in the last year.",
      "Have your bronchiectasis reviewed at least once a year.",
    ],
    tryThisWeek: [
      "Make a plan with your team.",
      "Share it with family and carers.",
      "Start a symptom diary.",
    ],
    ask: "Can we make a self-management plan for my flare-ups together?",
    interactive: {
      kind: "scenarios",
      title: "When things change",
      scenarios: [
        {
          id: "worse",
          situation: "You're coughing more than usual, and your phlegm has turned darker and thicker.",
          options: [{ text: "Follow your self-management plan", best: true }, { text: "Wait for your annual review" }],
          why: "If you think you're having a flare-up, you should follow the advice on your bronchiectasis self-management plan. It's important to manage flare-ups quickly.",
        },
        {
          id: "blood",
          situation: "You're coughing up more than just a few streaks of blood.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Drive yourself to A&E" }, { text: "Book a routine appointment" }],
          why: "Call 999 or go to A&E if you're coughing up more than just a few spots or streaks of blood. Do not drive to A&E.",
        },
        {
          id: "frequent",
          situation: "You've had two flare-ups in the last year.",
          options: [{ text: "Ask about seeing a respiratory specialist", best: true }, { text: "Accept it as normal" }],
          why: "Ask your healthcare professional about being referred to a respiratory specialist if you've had two or more flare-ups in the last year. They can help you prevent future flare-ups.",
        },
      ],
    },
    sources: [ALUK_SELF, ALUK_PLAN, ALUK_FLARE, NHS_BX],
    quiz: {
      question: "Why is it important to manage a flare-up quickly?",
      options: [{ text: "To prevent further damage to your lungs", right: true }, { text: "Because flare-ups never pass on their own" }, { text: "So you do not need a plan" }],
      why: "It's important to manage flare-ups quickly to prevent further damage to your lungs.",
    },
  },
  {
    id: "bx-infections",
    kicker: "Prevention",
    question: "Which vaccines help, and how can I avoid infections?",
    hook: "Infections are the main cause of flare-ups. Washing your hands, keeping away from people with colds, and a yearly flu jab all help.",
    short: "Washing your hands regularly and trying to stay away from people with infections such as colds and flu can help prevent infections. The NHS advises the flu vaccine every year, and the pneumococcal and COVID-19 vaccines as recommended by your GP. Getting the vaccines you're eligible for may also help prevent flare-ups.",
    sections: [
      {
        heading: "Why infections matter",
        paragraphs: [
          "Respiratory infections can increase your chance of becoming seriously ill or needing to go to hospital. Getting the vaccines that you're eligible for may also help prevent bronchiectasis flare-ups.",
          "The main cause of bronchiectasis flare-ups are bacterial infections, like chest or lung infections.",
        ],
      },
      {
        heading: "Everyday habits",
        paragraphs: [
          "Wash your hands regularly, to help prevent infections. Try to stay away from people with infections such as colds and flu.",
          "Asthma + Lung UK also suggests cleaning the most used surfaces in your home, covering your mouth and nose when you cough and sneeze, and opening windows and doors to let fresh air in.",
          "Do not smoke. Get help to quit smoking if you need it.",
        ],
      },
      {
        heading: "The flu vaccine",
        paragraphs: [
          "Have the flu vaccine every year. It's offered on the NHS every year in autumn or winter to people at higher risk of getting seriously ill from flu, including people with conditions that affect their breathing.",
          "Asthma + Lung UK lists bronchiectasis among the lung conditions that can get a free flu vaccine. The vaccine usually takes up to 14 days to work, and protection goes down with time, which is why it's important to have it every year.",
        ],
      },
      {
        heading: "Pneumococcal, COVID-19 and RSV",
        paragraphs: [
          "The NHS advises the pneumococcal vaccine and COVID-19 vaccine as recommended by your GP. Most adults only need 1 dose of the pneumococcal vaccine for long-term protection.",
          "The NHS offers a free RSV vaccine to people aged 75 or over, and to people aged 65 to 74 who have a long-term lung condition.",
          "Speak to your GP surgery or specialist if you have a health condition and you're not sure which vaccines you're eligible for.",
        ],
      },
      {
        heading: "The people around you",
        paragraphs: [
          "Your friends, family or carers might be able to get some of these vaccines to help protect you too.",
        ],
      },
    ],
    helps: [
      "Wash your hands regularly, to help prevent infections.",
      "Try to stay away from people with infections such as colds and flu.",
      "Have the flu vaccine every year.",
      "Ask your GP about the pneumococcal vaccine and the COVID-19 vaccine.",
      "If you're aged 65 or over, ask your GP surgery about the RSV vaccine.",
      "Do not smoke, and get help to quit smoking if you need it.",
    ],
    tryThisWeek: [
      "Wash your hands often.",
      "Book this year's flu vaccine.",
      "Ask your GP about other vaccines.",
    ],
    ask: "Which vaccines should I have, and when?",
    interactive: {
      kind: "flip-cards",
      title: "Your vaccines, turned over",
      intro: "Tap a card to see what each vaccine does and when it is given.",
      cards: [
        { id: "flu", front: "Flu vaccine", when: "Every year, in autumn or winter", back: "Helps protect against flu. It usually takes up to 14 days to work." },
        { id: "pneumococcal", front: "Pneumococcal vaccine", when: "As recommended by your GP", back: "Helps protect against bacterial infections that can cause illnesses like pneumonia. Most adults need 1 dose." },
        { id: "covid", front: "COVID-19 vaccine", when: "As recommended by your GP", back: "Can help reduce your risk of getting severe symptoms and of having to go to hospital." },
        { id: "rsv", front: "RSV vaccine", when: "Aged 75+, or 65–74 with lung condition", back: "Helps reduce the risk of serious breathing problems like pneumonia. Given all year round." },
      ],
    },
    sources: [NHS_BX, ALUK_TREAT, ALUK_FLARE, ALUK_FLU, NHS_FLU, NHS_PNEUMO, NHS_RSV, NHS_COVID],
    quiz: {
      question: "How often should you have the flu vaccine?",
      options: [{ text: "Every year", right: true }, { text: "Once in your life" }, { text: "Every ten years" }],
      why: "Have regular vaccinations such as the flu vaccine every year.",
    },
  },
  {
    id: "bx-phlegm",
    kicker: "Self-check",
    question: "What can the colour of my phlegm tell me?",
    hook: "Clear or white can be normal. Darker, thicker or stickier phlegm can mean an infection, and blood always needs checking.",
    short: "Your phlegm can help you work out if you're having a flare-up. White or clear phlegm can be normal when you're well, while phlegm that gets darker, thicker or stickier could mean an infection. If you cough up blood, get it checked; how quickly depends on how much there is.",
    sections: [
      {
        heading: "Why it is worth watching",
        paragraphs: [
          "Your phlegm (sputum) can help you work out if you're having a flare-up. If your phlegm gets darker, thicker or stickier, you could have an infection.",
          "Phlegm is usually clear unless you get an infection. When you have an infection, it can change colour and texture.",
        ],
      },
      {
        heading: "A guide to the colours",
        paragraphs: [
          "Coughing up white or clear phlegm can be normal when you're well. Pale yellow or green phlegm may mean you have an infection, but this may be normal for you.",
          "Dark yellow or green phlegm means you're likely to have an infection. Dark green, brown, or sometimes bloody phlegm means you have an infection.",
        ],
      },
      {
        heading: "Knowing your normal",
        paragraphs: [
          "Understanding your usual symptoms could help you quickly notice any patterns or changes that might lead to a flare-up. A symptom diary can help you record your day-to-day symptoms.",
          "A bronchiectasis self-management plan keeps important information in one place, including what the colour of your phlegm means.",
        ],
      },
      {
        heading: "Blood in your phlegm",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you're coughing up a few small spots, flecks or streaks of blood, or there's blood in your phlegm.",
          "Call 999 or go to A&E if you're coughing up more than just a few spots or streaks of blood. This could be a sign of serious bleeding in your lungs. Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
        ],
      },
      {
        heading: "Keeping phlegm loose",
        paragraphs: [
          "Drink plenty of water to help keep your phlegm loose. Asthma + Lung UK suggests trying to drink 6 to 8 glasses of water a day.",
          "Sitting in a bathroom with a hot shower running for a while can help loosen phlegm in your lungs, so you can cough it up more easily.",
        ],
      },
    ],
    helps: [
      "Keep a symptom diary so you know what your usual phlegm is like.",
      "Give your doctor a phlegm sample when you're unwell or if your symptoms change.",
      "Ask for an urgent GP appointment or get help from NHS 111 if there are a few streaks of blood in your phlegm.",
      "Call 999 or go to A&E if you're coughing up more than just a few spots or streaks of blood.",
      "Try to drink 6 to 8 glasses of water a day to help keep your phlegm loose.",
    ],
    tryThisWeek: [
      "Note what your usual phlegm looks like.",
      "Drink 6 to 8 glasses of water a day.",
      "Know when blood means 999.",
    ],
    ask: "Which change in my phlegm should make me start my rescue pack?",
    interactive: {
      kind: "signs",
      title: "What has changed?",
      intro: "Tick any change you have noticed in your phlegm. The ones you tick make a list to tell your GP or nurse.",
      signs: [
        "More phlegm than usual",
        "Darker phlegm",
        "Thicker or stickier phlegm",
        "Pale yellow or green phlegm",
        "Dark yellow or green phlegm",
        "Brown phlegm",
        "A few streaks of blood",
      ],
      after: "If your phlegm gets darker, thicker or stickier, you could have an infection: follow your self-management plan. Call 999 or go to A&E if you're coughing up more than just a few spots or streaks of blood.",
      copyHeading: "Changes in my phlegm",
    },
    sources: [ALUK_FLARE, ALUK_SYMPTOMS, ALUK_PLAN, NHS_BX, NHS_BLOOD, ALUK_PHLEGM],
    quiz: {
      question: "What does dark yellow or green phlegm usually mean?",
      options: [{ text: "You're likely to have an infection", right: true }, { text: "Your lungs are clear" }, { text: "Nothing at all" }],
      why: "Coughing up dark yellow or green phlegm means you're likely to have an infection.",
    },
  },
  {
    id: "bx-daily-life",
    kicker: "Everyday life",
    question: "How do I manage work, travel and tiredness?",
    hook: "Pace, plan and prioritise to save energy. Talk to your employer about adjustments, and sort out medicines well before a trip.",
    short: "Feeling very tired is one of the symptoms of bronchiectasis, and learning to pace, plan and prioritise your activities can help you save energy. A long-term lung condition that makes day-to-day activities much harder can count as a disability, so you can ask for reasonable adjustments at work, and Access to Work may help. Most people with a lung condition can travel safely, but speak to your GP or specialist team before planning a trip.",
    sections: [
      {
        heading: "Saving your energy",
        paragraphs: [
          "Feeling very tired is one of the symptoms of bronchiectasis. There are things you can do to save energy and manage fatigue: Asthma + Lung UK suggests the three Ps, learning to pace, plan and prioritise your activities.",
          "Regular physical activity can help you manage symptoms like breathlessness, and a well-balanced diet can help you stay well. Some people with bronchiectasis lose weight without meaning to, and being underweight can increase your risk of infections.",
        ],
      },
      {
        heading: "At work",
        paragraphs: [
          "The Equality Act 2010 says you have a disability if you have a condition that makes it hard to do normal day-to-day activities and has lasted at least 12 months, or is likely to. This includes any long-term lung condition that makes day-to-day activities much harder, even if your symptoms come and go. Northern Ireland has different laws.",
          "If your condition means you are disabled, you can get reasonable adjustments, such as flexible hours, working on the ground floor if going upstairs makes you breathless, or equipment that makes it easier to do your job.",
          "Keeping a copy of your self-management plan at work means colleagues can help if you get symptoms.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition or disability. A grant can help pay for things like specialist equipment, or the costs of travelling to work if you cannot use public transport.",
          "An Access to Work grant will not affect any other benefits you get, and you will not have to pay it back.",
        ],
      },
      {
        heading: "Planning a trip",
        paragraphs: [
          "Most people with a lung condition can travel safely, but it's important to speak to your GP or specialist team for advice before planning a trip.",
          "Discuss your plans with your doctor at least two months before you travel. For conditions like bronchiectasis, your doctor may prescribe an emergency supply of antibiotics or steroids.",
          "If you're flying, carry your medicines in your hand luggage, in their original, correctly labelled packages. If you have a rescue pack for flare-ups, make sure it's packed and that you know when to use it.",
        ],
      },
      {
        heading: "Insurance and equipment",
        paragraphs: [
          "Always get travel insurance if you're travelling abroad, and check that it covers your lung condition. If you use equipment like a nebuliser abroad, you may need a travel adaptor or battery-powered equipment.",
        ],
      },
    ],
    helps: [
      "Learn to pace, plan and prioritise your activities to save energy.",
      "Speak to your employer about how your lung condition affects you, and the adjustments that would help.",
      "Keep a copy of your self-management plan at work.",
      "Check whether you're eligible for an Access to Work grant.",
      "Discuss your travel plans with your doctor at least two months before you go.",
      "Get travel insurance that covers your lung condition.",
    ],
    tryThisWeek: [
      "Pace, plan and prioritise.",
      "Keep your plan at work.",
      "Talk to your doctor two months before a trip.",
    ],
    ask: "Should I take an emergency supply of antibiotics when I travel?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        {
          id: "stairs",
          situation: "Your desk is upstairs, and the stairs leave you breathless every morning.",
          options: [{ text: "Ask your employer about a reasonable adjustment", best: true }, { text: "Say nothing and struggle on" }],
          why: "Reasonable adjustments include letting you work somewhere else, such as on the ground floor of a building if going upstairs makes you breathless.",
        },
        {
          id: "holiday",
          situation: "You're booking a holiday abroad for three months' time.",
          options: [{ text: "Talk to your doctor about medicines now", best: true }, { text: "Sort it out the week before" }],
          why: "Discuss your plans with your doctor at least two months before you plan to travel. Your doctor may prescribe an emergency supply of antibiotics or steroids.",
        },
        {
          id: "tired",
          situation: "By midday on a busy day you feel completely drained.",
          options: [{ text: "Pace, plan and prioritise your activities", best: true }, { text: "Push through everything at once" }],
          why: "You could save energy if you can learn to pace, plan and prioritise your activities.",
        },
      ],
    },
    sources: [NHS_BX, ALUK_SELF, ALUK_WORK, GOV_ATW, ALUK_TRAVEL, ALUK_TRAVEL_INS],
    quiz: {
      question: "What are the three Ps for saving energy?",
      options: [{ text: "Pace, plan and prioritise", right: true }, { text: "Push, persist and perform" }, { text: "Pills, puffers and plans" }],
      why: "You could save energy if you can learn to pace, plan and prioritise your activities.",
    },
  },
];
