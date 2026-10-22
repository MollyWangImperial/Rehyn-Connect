import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Microscopic colitis page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from Crohn's & Colitis UK
// and Guts UK. The NHS website has no page of its own for microscopic colitis (the address returns "not
// found"), so NHS wording comes from its inflammatory bowel disease, colonoscopy, dehydration, diarrhoea,
// loperamide, NSAIDs and quit smoking pages. General information only; it never replaces what a person's own
// GP, IBD team or pharmacist tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const ccuk = (label: string, path: string): LearnSource => ({
  label: `Crohn's & Colitis UK: ${label}`,
  url: `https://www.crohnsandcolitis.org.uk/info-support/information-about-crohns-and-colitis/all-information-about-crohns-and-colitis/${path}`,
});
const guts = (label: string, path: string): LearnSource => ({ label: `Guts UK: ${label}`, url: `https://gutscharity.org.uk/${path}` });

const NHS_IBD = nhs("Inflammatory bowel disease (IBD)", "conditions/inflammatory-bowel-disease/");
const NHS_COLONOSCOPY = nhs("Colonoscopy", "tests-and-treatments/colonoscopy/");
const NHS_DEHYDRATION = nhs("Dehydration", "conditions/dehydration/");
const NHS_DIARRHOEA = nhs("Diarrhoea and vomiting", "symptoms/diarrhoea-and-vomiting/");
const NHS_NSAIDS = nhs("NSAIDs", "medicines/nsaids/");
const NHS_LOP_ABOUT = nhs("About loperamide", "medicines/loperamide/about-loperamide/");
const NHS_LOP_HOW = nhs("How and when to take loperamide", "medicines/loperamide/how-and-when-to-take-loperamide/");
const NHS_LOP_WHO = nhs("Who can and cannot take loperamide", "medicines/loperamide/who-can-and-cannot-take-loperamide/");
const NHS_LOP_QUESTIONS = nhs("Common questions about loperamide", "medicines/loperamide/common-questions-about-loperamide/");
const NHS_QUIT = nhs("Quit smoking", "better-health/quit-smoking/");
const NHS_STOP_SERVICE = nhs("Find your local Stop Smoking Service", "better-health/quit-smoking/ready-to-quit-smoking/find-your-local-stop-smoking-service/");

const CCUK_MC = ccuk("Microscopic Colitis", "understanding-crohns-and-colitis/microscopic-colitis");
const CCUK_STEROIDS = ccuk("Steroids", "treatments/steroids");
const CCUK_OTHER = ccuk("Other treatments", "treatments/other-treatments");
const CCUK_DIARRHOEA = ccuk("Diarrhoea", "symptoms/diarrhoea");
const CCUK_DEHYDRATION = ccuk("Dehydration", "symptoms/dehydration");
const CCUK_URGENCY = ccuk("Bowel incontinence and urgency", "symptoms/bowel-incontinence-and-urgency");
const CCUK_FATIGUE = ccuk("Fatigue", "symptoms/fatigue");
const CCUK_TESTS = ccuk("Tests and investigations", "healthcare/tests-and-investigations");
const CCUK_SMOKING = ccuk("Smoking or vaping with Crohn's or Colitis", "living-with-crohns-or-colitis/smoking-or-vaping-with-crohns-or-colitis");
const CCUK_TRAVEL = ccuk("Travelling with Crohn's or Colitis", "living-with-crohns-or-colitis/travelling-with-crohns-or-colitis");
const CCUK_MENTAL = ccuk("Mental health and wellbeing", "living-with-crohns-or-colitis/mental-health-and-wellbeing");
const CCUK_HELPLINE: LearnSource = { label: "Crohn's & Colitis UK: Helpline service", url: "https://www.crohnsandcolitis.org.uk/info-support/support-for-you/helpline-service" };
const CCUK_MEMBER: LearnSource = { label: "Crohn's & Colitis UK: Become a member", url: "https://www.crohnsandcolitis.org.uk/get-involved/become-a-member" };

const GUTS_MC = guts("Microscopic colitis", "advice-and-information/conditions/microscopic-colitis/");
const GUTS_CARD = guts("This Can't Wait card", "advice-and-information/this-cant-wait-card/");
const GUTS_HELPLINE = guts("Helpline", "advice-and-information/helpline/");

const GOV_ACCESS_TO_WORK: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };

export const microscopicColitisAnswers: LearnArticle[] = [
  {
    id: "mc-what-it-is",
    kicker: "Understanding",
    question: "What is microscopic colitis?",
    hook: "Inflammation of the large bowel that only shows up under a microscope. It can upset daily life, and good treatments exist.",
    short: "Microscopic colitis is a type of inflammatory bowel disease (IBD) that affects the colon, causing ongoing watery diarrhoea. The inflammation can only be seen when a small tissue sample is looked at under a microscope. It is a lifelong condition, but the right treatment can make a huge difference.",
    sections: [
      {
        heading: "A type of inflammatory bowel disease",
        paragraphs: [
          "Microscopic colitis is a type of inflammatory bowel disease, or IBD. When you have it, your immune system does not work properly, causing inflammation. This can lead to frequent, watery diarrhoea that keeps coming back. It can also cause tummy pain, fatigue and bloating.",
          "There are 3 main types of IBD: Crohn's disease, ulcerative colitis and microscopic colitis. Microscopic colitis causes inflammation in your large bowel, also called the colon.",
        ],
      },
      {
        heading: "Why it is called microscopic",
        paragraphs: [
          "Normally, your colon absorbs water from digested food, which helps you pass a solid, soft and well-formed poo. When the colon is affected by microscopic colitis, it cannot absorb as much liquid. Fluid builds up, producing a large amount of watery diarrhoea.",
          "In microscopic colitis, the inner lining of the colon becomes inflamed. Unlike Crohn's disease and ulcerative colitis, the bowel lining usually looks normal through a camera. The inflammation can only be seen when a small tissue sample, called a biopsy, is looked at under a microscope.",
        ],
      },
      {
        heading: "Two main types",
        paragraphs: [
          "In lymphocytic colitis, the biopsy shows a higher number of white blood cells, known as lymphocytes, in the inner lining of the colon. In collagenous colitis, the lining has a thicker layer of collagen than usual. Collagen is a protein that helps give the body structure.",
          "The two types look different under the microscope, but the symptoms and treatment are the same. Sometimes a sample does not look healthy but does not fit either type. This may be called microscopic colitis incomplete.",
        ],
      },
      {
        heading: "How common it is",
        paragraphs: [
          "Around 1 in every 2,000 people in the UK are thought to have microscopic colitis. The real number could be a lot higher, because the condition may be underreported and misdiagnosed.",
          "It can develop at any age, but most people are diagnosed between the ages of 50 and 70. It is more common in women. More cases are being diagnosed as understanding of the condition grows.",
        ],
      },
      {
        heading: "What it means for the future",
        paragraphs: [
          "Microscopic colitis is a lifelong condition. But the right treatment can make a huge difference to quality of life. There will be times with fewer symptoms or none at all, and times when symptoms return or get worse, called relapses.",
          "It carries less risk of serious complications than ulcerative colitis or Crohn's disease, but it can have a huge effect on quality of life. Microscopic colitis does not make you any more likely to get colon cancer than the general population.",
        ],
      },
    ],
    helps: [
      "Talk to your GP if you think your symptoms could be caused by microscopic colitis.",
      "See a GP if you have diarrhoea that lasts more than 7 days.",
      "Ask your doctor whether your symptoms are due to microscopic colitis.",
      "Ask for support from an IBD nurse-led service.",
      "Contact the Crohn's & Colitis UK Helpline on 0300 222 5700 for information and support.",
    ],
    tryThisWeek: [
      "Talk to your GP about your symptoms.",
      "Ask if an IBD nurse can help.",
      "Save the Helpline number.",
    ],
    ask: "Which type of microscopic colitis do I have, and what does it mean for my treatment?",
    interactive: {
      kind: "flip-cards",
      title: "The names, card by card",
      intro: "Turn each card to see what each name means.",
      cards: [
        { id: "lc", front: "Lymphocytic colitis", when: "One of the two main types", back: "The biopsy shows more white blood cells, called lymphocytes, in the inner lining of the colon." },
        { id: "cc", front: "Collagenous colitis", when: "The other main type", back: "The lining of the colon has a thicker layer of collagen than usual." },
        { id: "mci", front: "Microscopic colitis incomplete", when: "When a sample fits neither type", back: "The sample does not look healthy, but a diagnosis of either main type cannot be made." },
        { id: "uc", front: "Ulcerative colitis", when: "Another type of IBD", back: "Affects the large bowel, and doctors can see the inflammation through an endoscope." },
        { id: "crohns", front: "Crohn's disease", when: "Another type of IBD", back: "Can affect any part of the gut, from the mouth to the bottom." },
      ],
    },
    sources: [CCUK_MC, GUTS_MC, NHS_IBD, CCUK_TESTS],
    quiz: {
      question: "How can doctors see the inflammation of microscopic colitis?",
      options: [{ text: "Under a microscope, in a biopsy", right: true }, { text: "On a normal X-ray" }, { text: "In a routine blood test" }],
      why: "The inflammation can only be seen when a small tissue sample, called a biopsy, is looked at under a microscope.",
    },
  },
  {
    id: "mc-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms of microscopic colitis?",
    hook: "Watery diarrhoea that keeps coming, often with urgency and night-time trips to the toilet. Other symptoms can catch people by surprise.",
    short: "The main symptom is ongoing watery diarrhoea, which can be sudden and frequent, by day and at night. Urgency, bowel control problems, tummy pain, bloating, tiredness, joint pain and weight loss can come with it. Telling a doctor about all of these can help the diagnosis.",
    sections: [
      {
        heading: "The main symptom",
        paragraphs: [
          "The main symptom of microscopic colitis is ongoing watery diarrhoea. Diarrhoea is when you have loose or liquid poo three or more times a day, or more often than is normal for you. For some people, this can be as many as 15 times during the day and night.",
          "It can begin suddenly or gradually, and can get worse over time. The diarrhoea may be sudden, so you may not always reach the toilet in time. It may happen frequently, both during the day and at night.",
        ],
      },
      {
        heading: "Urgency and bowel control",
        paragraphs: [
          "Symptoms often include urgency to use the toilet, bowel incontinence episodes and waking during the night to empty the bowels. Night-time symptoms can be unrelenting.",
          "Urgency is the sudden intense feeling of needing to poo and having to rush to get to the toilet. Bowel incontinence is when you pass liquid or solid poo without meaning to. Bowel incontinence is not something to feel ashamed of, and there is a range of ways to manage it.",
        ],
      },
      {
        heading: "Other symptoms",
        paragraphs: [
          "Other symptoms can include tummy pain, which may be cramping or dull, bloating and wind, joint pain, and weight loss that cannot be explained.",
          "Fatigue, or extreme tiredness, is common. It could come from getting up at night to go to the toilet, but many people have it even if they sleep through the night.",
        ],
      },
      {
        heading: "The effect on everyday life",
        paragraphs: [
          "These symptoms can have a huge impact on everyday life. They can make it difficult to work, go out with friends or plan activities. People often need to find toilets when they leave home, and some are unable to leave the house at all because of their symptoms.",
          "Coping with a long-term condition like microscopic colitis can be difficult, and some people may feel isolated and low. But there is support available.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "See a GP if you have diarrhoea that lasts more than 7 days, tummy pain or bloating that does not go away or keeps coming back, blood or mucus in your poo, or you are losing weight without trying.",
          "Call 999 or go to A&E if you have severe tummy pain, you are bleeding non-stop from your bottom, there is a lot of blood or you see large blood clots when you poo, or you are vomiting blood or poo, or your sick looks like coffee grounds or soil.",
        ],
      },
    ],
    helps: [
      "Tell your doctor about all your symptoms, not only the watery diarrhoea, as this may help the diagnosis.",
      "Keep a symptom diary: note the date, time and a short description, and rate it from mild to very severe.",
      "Drink plenty of fluids to avoid getting dehydrated.",
      "Tell your IBD team or GP if you are having problems with bowel control.",
      "Call 999 or go to A&E if you have severe tummy pain or are bleeding non-stop from your bottom.",
    ],
    tryThisWeek: [
      "Start a symptom diary.",
      "Drink plenty of fluids.",
      "Tell your GP about bowel control.",
    ],
    ask: "Could my symptoms be microscopic colitis, and what tests do I need?",
    interactive: {
      kind: "signs",
      title: "Symptoms to tell your doctor about",
      intro: "Tick any you have noticed. The ones you tick become a list to take to your appointment.",
      signs: [
        "Watery diarrhoea that keeps coming back",
        "Needing to rush to the toilet",
        "Not always reaching the toilet in time",
        "Waking at night to empty your bowels",
        "Tummy pain or cramps",
        "Bloating and wind",
        "Extreme tiredness",
        "Joint pain",
        "Losing weight without trying",
      ],
      after: "Call 999 or go to A&E for severe tummy pain, or if you are bleeding non-stop from your bottom.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [CCUK_MC, GUTS_MC, CCUK_URGENCY, NHS_IBD, CCUK_FATIGUE, CCUK_DIARRHOEA],
    quiz: {
      question: "What is the main symptom of microscopic colitis?",
      options: [{ text: "Ongoing watery diarrhoea", right: true }, { text: "Blood in the poo every day" }, { text: "A rash on the skin" }],
      why: "The main symptom of microscopic colitis is ongoing watery diarrhoea.",
    },
  },
  {
    id: "mc-causes",
    kicker: "Causes",
    question: "What causes microscopic colitis, and which medicines are linked to it?",
    hook: "No single cause is known. But age, sex, smoking, other autoimmune conditions and some everyday medicines all play a part.",
    short: "The cause of microscopic colitis is not known, and it may come from several factors, including damage to the gut lining, the immune system and genes. It is more likely in women, older adults, people who smoke and people with autoimmune conditions. Some common medicines are linked to it too.",
    sections: [
      {
        heading: "No single cause",
        paragraphs: [
          "The cause of microscopic colitis is not known. It may be caused by different factors.",
          "These include damage to the lining of the gut, which may be caused by viruses, bacteria or certain medicines. They also include the immune system not working properly and affecting the gut microbiome, and genes, which studies suggest play an important role.",
        ],
      },
      {
        heading: "Who is more likely to get it",
        paragraphs: [
          "Microscopic colitis can affect anyone, from any background, age, ethnicity or sex. Most people are diagnosed at around 60, but around 1 in every 4 are under 45. Children have also been diagnosed, although this is rare.",
          "The risk is higher in women than men. In people aged 65 or over with diarrhoea, as many as 1 in 5 might have microscopic colitis.",
        ],
      },
      {
        heading: "Medicines linked to it",
        paragraphs: [
          "Some medicines are linked to microscopic colitis or can make its symptoms worse. These include anti-inflammatory painkillers called NSAIDs, such as aspirin, ibuprofen or diclofenac, and medicines that reduce stomach acid called proton pump inhibitors, or PPIs, such as omeprazole and lansoprazole.",
          "Others include histamine-2 antagonists such as famotidine, some antidepressants called SSRIs such as sertraline, statins such as simvastatin, acarbose for type 2 diabetes and ticlopidine. Guts UK also lists HRT in high doses and some anticonvulsants, such as carbamazepine.",
          "Always talk to your doctor before stopping or changing any medicines you are taking.",
        ],
      },
      {
        heading: "Smoking",
        paragraphs: [
          "Smoking increases the risk of developing microscopic colitis. Current smokers and ex-smokers have an increased risk, and smokers tend to develop it at a younger age than non-smokers or ex-smokers.",
        ],
      },
      {
        heading: "Other conditions linked to it",
        paragraphs: [
          "Around 4 in 10 people with microscopic colitis also have an autoimmune condition, where the immune system attacks other parts of the body. These may include type 1 diabetes, thyroid disease, rheumatoid arthritis, psoriasis and coeliac disease.",
          "You are more likely to have microscopic colitis if you already have coeliac disease, and you can have both together. Having bile acid diarrhoea is also a risk factor.",
        ],
      },
    ],
    helps: [
      "Always talk to your doctor before stopping or changing any medicines you are taking.",
      "Ask your doctor whether your medicines are causing your symptoms, and whether there are any alternatives.",
      "If you smoke, ask your GP about stop smoking services in your area.",
      "Ask whether you need to be tested for other autoimmune conditions, such as coeliac disease.",
    ],
    tryThisWeek: [
      "Ask your doctor about your medicines.",
      "Ask about stop smoking support.",
      "Ask about a coeliac test.",
    ],
    ask: "Could any of my medicines, or another condition, be linked to my microscopic colitis?",
    interactive: {
      kind: "risk-check",
      title: "What makes it more likely?",
      intro: "Tick any that apply. Some can be changed with your doctor's help, and some cannot.",
      items: [
        { id: "age", label: "Being around 60 or older", note: "Most people are diagnosed at around 60, though around 1 in 4 are under 45.", changeable: false },
        { id: "women", label: "Being a woman", note: "The risk of developing microscopic colitis is higher in women than men.", changeable: false },
        { id: "smoking", label: "Smoking now or in the past", note: "Smoking increases the risk. Your GP can tell you about stop smoking services in your area.", changeable: true },
        { id: "nsaids", label: "Taking NSAIDs such as ibuprofen", note: "Linked to microscopic colitis. Talk to your doctor before stopping or changing any medicine.", changeable: true },
        { id: "ppis", label: "Taking a PPI such as omeprazole", note: "Linked to microscopic colitis. Talk to your doctor before stopping or changing any medicine.", changeable: true },
        { id: "autoimmune", label: "An autoimmune condition", note: "Around 4 in 10 people with microscopic colitis also have one, such as thyroid disease or type 1 diabetes.", changeable: false },
        { id: "coeliac", label: "Coeliac disease", note: "You are more likely to have microscopic colitis if you already have coeliac disease.", changeable: false },
      ],
    },
    sources: [CCUK_MC, GUTS_MC, CCUK_SMOKING],
    quiz: {
      question: "What should you do if you think a medicine is linked to your symptoms?",
      options: [{ text: "Talk to your doctor before changing it", right: true }, { text: "Stop taking it straight away" }, { text: "Take a bigger dose" }],
      why: "Always talk to your doctor before stopping or changing any medicines you are taking.",
    },
  },
  {
    id: "mc-diagnosis",
    kicker: "Tests",
    question: "How is microscopic colitis diagnosed?",
    hook: "The bowel usually looks normal on camera, and common tests can come back normal. A biopsy taken during a colonoscopy is what shows it.",
    short: "Microscopic colitis is diagnosed with a colonoscopy, where small tissue samples, called biopsies, are taken from the large bowel and looked at under a microscope. Poo and blood tests used for other kinds of IBD can be normal, so they do not rule it out. Getting a diagnosis can take time.",
    sections: [
      {
        heading: "Starting with the GP",
        paragraphs: [
          "Talk to your GP if you think your symptoms could be caused by microscopic colitis. Your GP will take a history of all your symptoms, which may help them rule out other conditions.",
          "If your GP thinks you may have microscopic colitis, you will need to be referred for a colonoscopy and a biopsy. People with microscopic colitis should be tested for coeliac disease, as people can have both.",
        ],
      },
      {
        heading: "Why normal tests do not rule it out",
        paragraphs: [
          "A poo test called faecal calprotectin is often used to help diagnose Crohn's and colitis, but it may not be useful here. In microscopic colitis, calprotectin levels are often normal or only slightly raised.",
          "Blood tests that check for inflammation, called CRP and ESR, may also miss it. A normal result can falsely reassure people. These tests do not rule out microscopic colitis.",
        ],
      },
      {
        heading: "Colonoscopy with biopsies",
        paragraphs: [
          "A colonoscopy is a test to check inside your bowels using a thin tube with a small camera inside it. The tube is about the thickness of your little finger and goes in through your bottom. The test may be uncomfortable but it should not hurt.",
          "Only a biopsy from the large bowel wall can detect the inflammation. Multiple biopsies are recommended, from different areas of the large bowel, including the left and right side. Taking more biopsies makes a diagnosis more likely. There is usually no pain when biopsies are taken.",
          "Most colonoscopies are done under mild sedation, which is medicine through a tube in your arm to help you relax. You may be offered gas and air or painkillers instead. It should take 30 to 45 minutes, but you might be at the hospital for around 2 hours.",
        ],
      },
      {
        heading: "Getting ready, and afterwards",
        paragraphs: [
          "Before the test you will be given laxatives to empty your bowel, and told when to stop eating and drinking. Bring the details of medicines you take and follow the hospital's instructions about them. You cannot drive for 24 hours if you have sedation.",
          "Call 111 or the hospital where you had the colonoscopy if you get a high temperature, or feel hot, cold or shivery. Call 999 or go to A&E if you have heavy bleeding from your bottom or bleeding that is getting worse, chest pain, severe stomach pain that gets worse, or you cannot stop being sick.",
        ],
      },
      {
        heading: "When diagnosis takes time",
        paragraphs: [
          "It may take time to get a diagnosis, which can be frustrating. Microscopic colitis is often misdiagnosed as irritable bowel syndrome (IBS) or diverticular disease. Figures suggest 1 in 10 people with IBS with diarrhoea may have microscopic colitis.",
          "A symptom diary can help. Record the date and time with a short description, rate it from mild to very severe, and add details such as any food or medicine that may have had an impact. Being able to speak up for yourself can help make sure your voice is heard.",
        ],
      },
    ],
    helps: [
      "Ask your doctor whether you would benefit from a colonoscopy and a biopsy of your large bowel.",
      "Ask whether you need to be tested for coeliac disease.",
      "Take your laxatives as it says on the packet or as you have been advised.",
      "Arrange for someone to pick you up, as you cannot drive for 24 hours after sedation.",
      "Call the hospital if you have not heard about your results after 3 weeks.",
      "Keep a symptom diary to take to your appointments.",
    ],
    tryThisWeek: [
      "Ask about a colonoscopy and biopsy.",
      "Ask about a coeliac test.",
      "Keep a symptom diary.",
    ],
    ask: "How many biopsies will be taken, and will I be tested for coeliac disease?",
    interactive: {
      kind: "flip-cards",
      title: "Your tests, card by card",
      intro: "Turn each card to see what each test can and cannot show.",
      cards: [
        { id: "history", front: "Symptom history", when: "At the GP", back: "Your GP takes a history of all your symptoms to help rule out other conditions." },
        { id: "calprotectin", front: "Faecal calprotectin", when: "A poo test", back: "Often normal or only slightly raised in microscopic colitis, so it does not rule it out." },
        { id: "blood", front: "CRP and ESR blood tests", when: "Blood tests for inflammation", back: "May miss microscopic colitis. A normal result can falsely reassure people." },
        { id: "coeliac", front: "Coeliac disease test", when: "Because people can have both", back: "Gluten needs to be eaten to identify coeliac disease, so do not stop eating it before the test." },
        { id: "colonoscopy", front: "Colonoscopy with biopsies", when: "The test that shows it", back: "Samples from different areas of the large bowel are looked at under a microscope." },
        { id: "sehcat", front: "SeHCAT scan", when: "If bile acids may play a part", back: "You swallow a capsule with a small amount of harmless radioactive material, then have two scans a week apart." },
      ],
    },
    sources: [CCUK_MC, GUTS_MC, NHS_COLONOSCOPY, CCUK_TESTS],
    quiz: {
      question: "Why can a normal calprotectin poo test not rule out microscopic colitis?",
      options: [{ text: "Levels are often normal or only slightly raised in it", right: true }, { text: "The test only works in children" }, { text: "It only checks for gluten" }],
      why: "In microscopic colitis, calprotectin levels are often normal or only slightly raised.",
    },
  },
  {
    id: "mc-medicines-review",
    kicker: "Treatment",
    question: "Could my other medicines be making it worse?",
    hook: "Some everyday medicines are linked to microscopic colitis. A review with your doctor, never stopping on your own, is often the first step.",
    short: "Before offering treatment, doctors check whether you take medicines linked to microscopic colitis, such as some painkillers, stomach acid medicines, antidepressants and statins. If a medicine may be the cause, your doctor may ask you to stop it and consider other options, which can often improve symptoms. Do not stop any medicine without your doctor's advice.",
    sections: [
      {
        heading: "The first check",
        paragraphs: [
          "Before offering any treatment for microscopic colitis, your doctor will check whether you take any medicines for other conditions.",
          "If the cause of the microscopic colitis is a medicine, your doctor may ask you to stop taking it and consider giving you other options instead. This can often result in symptom improvement.",
        ],
      },
      {
        heading: "Medicines that may make symptoms worse",
        paragraphs: [
          "Crohn's & Colitis UK lists NSAIDs such as aspirin, ibuprofen or diclofenac, proton pump inhibitors such as omeprazole and lansoprazole, and histamine-2 antagonists such as famotidine. It also lists SSRI antidepressants such as citalopram, fluoxetine and sertraline.",
          "The list also includes acarbose for type 2 diabetes, ticlopidine for blood conditions, and statins such as simvastatin or atorvastatin. Many of these medicines can also cause diarrhoea as a side effect.",
        ],
      },
      {
        heading: "Painkillers",
        paragraphs: [
          "Some NSAIDs can be bought without a prescription, including ibuprofen and aspirin. Diarrhoea is one of their common side effects.",
          "Crohn's & Colitis UK advises only taking NSAIDs, including low doses of aspirin, if your doctor advises it. Some people take low-dose aspirin to help prevent strokes and heart attacks. For pain, paracetamol is likely to be the safest option, sticking to the recommended dose on the packet.",
        ],
      },
      {
        heading: "Stomach acid medicines",
        paragraphs: [
          "Proton pump inhibitors include omeprazole, esomeprazole, lansoprazole and pantoprazole. Some can be bought at pharmacies, while others are only available on prescription.",
          "Crohn's & Colitis UK says they are not recommended for people with microscopic colitis. Speak to your IBD team before you start taking a PPI.",
        ],
      },
      {
        heading: "Never stop on your own",
        paragraphs: [
          "Always talk to your doctor before stopping or changing any medicines you are taking. Some medicines can cause bowel incontinence or urgency, and you may want to ask your IBD team or GP to review your medicines.",
          "Tell your IBD team or doctor about all the medicines you take for other conditions, including ones bought over the counter, herbal remedies, vitamins and supplements.",
        ],
      },
    ],
    helps: [
      "Ask your doctor whether your medicines are causing your symptoms, and whether there are any alternatives.",
      "Ask your IBD team or GP to review your medicines.",
      "Do not stop taking any medicine without your doctor's advice.",
      "Only take NSAIDs, including low-dose aspirin, if your doctor advises it.",
      "Speak to your IBD team before you start taking a PPI.",
      "For pain, paracetamol is likely to be the safest option; stick to the recommended dose on the packet.",
    ],
    tryThisWeek: [
      "Ask for a medicines review.",
      "Check before taking ibuprofen.",
      "Ask before starting a PPI.",
    ],
    ask: "Could any of my medicines be causing this, and is there an alternative I could switch to?",
    interactive: {
      kind: "flip-cards",
      title: "Medicines to ask about",
      intro: "Turn each card to see why it is on the list. Never stop a medicine without your doctor's advice.",
      cards: [
        { id: "nsaids", front: "NSAIDs", when: "Aspirin, ibuprofen, diclofenac", back: "May make symptoms worse. Only take them, including low-dose aspirin, if your doctor advises it." },
        { id: "ppis", front: "Proton pump inhibitors", when: "Omeprazole, lansoprazole", back: "Reduce stomach acid. Crohn's & Colitis UK says they are not recommended for people with microscopic colitis." },
        { id: "h2", front: "Histamine-2 antagonists", when: "Famotidine", back: "Used for indigestion and heartburn. May make microscopic colitis symptoms worse." },
        { id: "ssris", front: "SSRI antidepressants", when: "Citalopram, fluoxetine, sertraline", back: "Used for depression. May make symptoms worse. Talk to your doctor before stopping or changing them." },
        { id: "statins", front: "Statins", when: "Simvastatin, atorvastatin", back: "Used for cholesterol control. May make symptoms worse. Talk to your doctor before any change." },
        { id: "acarbose", front: "Acarbose", when: "For type 2 diabetes", back: "Also on the list of medicines that may make microscopic colitis symptoms worse." },
      ],
    },
    sources: [CCUK_MC, GUTS_MC, CCUK_OTHER, NHS_NSAIDS, CCUK_URGENCY, CCUK_STEROIDS],
    quiz: {
      question: "What is the safest first step if you think a medicine is behind your symptoms?",
      options: [{ text: "Ask your doctor to review it", right: true }, { text: "Stop it straight away" }, { text: "Swap to someone else's medicine" }],
      why: "Always talk to your doctor before stopping or changing any medicines you are taking.",
    },
  },
  {
    id: "mc-budesonide",
    kicker: "Treatment",
    question: "How does budesonide treat microscopic colitis?",
    hook: "A steroid that works mainly in the bowel. It is usually the first treatment, and it works for most people.",
    short: "Budesonide is a steroid that lowers inflammation, and it is usually the first medicine doctors prescribe for microscopic colitis. Because it is released in the bowel, less reaches the blood, so side effects are less likely than with standard steroids. It should not be stopped suddenly, and the dose is usually lowered gradually.",
    sections: [
      {
        heading: "The usual first treatment",
        paragraphs: [
          "Microscopic colitis can be treated with a gut-specific steroid called budesonide. This is usually the first choice of treatment. Budesonide is used to reduce inflammation and control symptoms.",
          "Budesonide is a delayed-release steroid. The tablet does not release the medicine until it reaches your bowel, so it works directly where the inflammation is. Less of the steroid goes into your blood, so it is less likely to cause side effects than standard oral steroids, but you can still get side effects.",
        ],
      },
      {
        heading: "How well it works",
        paragraphs: [
          "Several studies have compared budesonide with a placebo, which looks the same but has no medicine in it. Of the people who took budesonide, 8 in every 10 had a significant improvement in their microscopic colitis. Of those who had the placebo, around 1 in every 4 did.",
          "Oral steroids typically take 1 to 7 weeks to start working. Steroids do not work for everyone, so speak to your IBD team if you think your medicine is not working.",
        ],
      },
      {
        heading: "How it is taken",
        paragraphs: [
          "A common dose is 9mg a day for 8 weeks, as a single dose or split into 3 doses. Your doctor may then gradually lower the dose for a further 2 to 4 weeks. The dose you have may be different.",
          "You may need to take delayed-release steroids before food in the morning. Swallow them whole, and do not chew, crush or break them, as this may stop them working.",
          "You may be asked to lower your dose gradually to find the lowest dose that treats symptoms. If your symptoms return, tell your doctor.",
        ],
      },
      {
        heading: "Side effects and staying safe",
        paragraphs: [
          "At least half of people taking steroids for Crohn's and colitis have some side effects. These can include a more rounded face, weight gain, sleep problems, mood changes and skin changes. Tell your IBD team if you get any side effects.",
          "It is important not to stop steroids suddenly, even if you feel better. Some need to be slowly reduced, which gives your body time to start making its own steroids again. Stopping too quickly can risk adrenal insufficiency, which can be very serious.",
          "Steroids affect the immune system, so even a mild infection could become more serious. Live vaccines are not safe while taking them. Your IBD team may give you a steroid card to carry and show to any healthcare professional, including dentists.",
        ],
      },
      {
        heading: "Longer courses",
        paragraphs: [
          "Steroids are usually used for a short time to get symptoms under control. Sometimes you may be able to take budesonide for longer to keep symptoms under control. This is called maintaining remission.",
          "Taking steroids for 3 months or more increases the risk of weak bones. If you are taking steroids for longer than 3 months, you should have a bone density scan, also called a DEXA scan.",
        ],
      },
    ],
    helps: [
      "Swallow budesonide whole, and do not chew, crush or break it.",
      "Do not suddenly stop taking steroids, even if you feel better; your IBD team will advise how to reduce the dose.",
      "Tell your IBD team about any side effects, or if you think the medicine is not working.",
      "Carry your steroid card and show it to any healthcare professional, including dentists.",
      "If your symptoms return, tell your doctor.",
      "If you take steroids for longer than 3 months, tell your doctor if you have not had a DEXA scan.",
    ],
    tryThisWeek: [
      "Swallow tablets whole.",
      "Never stop suddenly.",
      "Carry your steroid card.",
    ],
    ask: "How long should I take budesonide, and how will we lower the dose?",
    interactive: {
      kind: "timeline",
      title: "A typical course, step by step",
      steps: [
        { id: "checks", when: "Before starting", title: "Checks first", points: ["Your IBD team checks if steroids are suitable for you", "They ask about other medicines, vaccinations and pregnancy"] },
        { id: "full", when: "Weeks 1 to 8", title: "The full dose", points: ["A common dose is 9mg a day for 8 weeks", "Oral steroids typically take 1 to 7 weeks to start working"] },
        { id: "lower", when: "A further 2 to 4 weeks", title: "Lowering the dose", points: ["Your doctor may gradually lower the dose", "Never stop suddenly, even if you feel better"] },
        { id: "after", when: "Afterwards", title: "Watching for symptoms", points: ["If your symptoms return, tell your doctor", "Sometimes budesonide is taken for longer to keep symptoms under control"] },
      ],
    },
    sources: [CCUK_STEROIDS, GUTS_MC, CCUK_MC],
    quiz: {
      question: "You feel better partway through a course of budesonide. What should you do?",
      options: [{ text: "Keep going, and follow your team's plan to reduce it", right: true }, { text: "Stop it straight away" }, { text: "Take a double dose" }],
      why: "It is important not to stop steroids suddenly, even if you feel better.",
    },
  },
  {
    id: "mc-other-treatments",
    kicker: "Treatment",
    question: "What other treatments are there besides budesonide?",
    hook: "Anti-diarrhoea medicines, bile acid binders, and medicines that calm the immune system. Surgery is rarely needed.",
    short: "For mild microscopic colitis, medicines to stop diarrhoea, such as loperamide, can help. Bile acid binders may be offered if bile acids play a part. If budesonide does not work or is not suitable, medicines such as azathioprine or, rarely, biologics can be considered, and surgery is rare.",
    sections: [
      {
        heading: "Loperamide",
        paragraphs: [
          "If you have mild microscopic colitis, medicines to stop diarrhoea, such as loperamide, can help. They make food move through the gut more slowly so more water is absorbed. Poo becomes firmer and you may need to go to the toilet less urgently. They can also help control symptoms while other medicines take time to work.",
          "Loperamide usually starts to make diarrhoea better within 1 hour. For long-lasting diarrhoea it is prescribed, and your doctor will tell you how much to take. The maximum dose is 8 tablets or capsules in 24 hours, and too much loperamide can cause serious heart problems.",
          "The NHS says not to take loperamide if you are having a flare-up of an inflammatory bowel condition like ulcerative colitis. Crohn's & Colitis UK also advises against these medicines with a high temperature of 38°C or above, or blood in your poo. Only take them if your IBD team has said it is safe.",
        ],
      },
      {
        heading: "Bile acid binders",
        paragraphs: [
          "Around 4 out of 10 people with microscopic colitis also have bile acid malabsorption. This is when bile acids used in digestion are not reabsorbed as usual and cause diarrhoea. A SeHCAT scan may be used to check for it.",
          "Bile acid binders, such as colestyramine or colesevelam, attach to the bile acids in your gut so they cannot cause diarrhoea. You may be offered one if your microscopic colitis is related to bile acid malabsorption, or if diarrhoea continues despite other treatment. They can affect how other medicines are absorbed, so you will need to leave a gap between them.",
        ],
      },
      {
        heading: "Medicines that calm the immune system",
        paragraphs: [
          "If budesonide does not work well or is not tolerated, other treatments can be considered. These are often used for other types of IBD. Azathioprine and mercaptopurine work by suppressing the immune system, which is over-active in microscopic colitis.",
          "Biologic medicines, such as vedolizumab, adalimumab or infliximab, target parts of the immune system that lead to inflammation. Funding for biologics in microscopic colitis is not generally given, but in rare circumstances some people may be offered one. Ask your consultant if you would benefit.",
        ],
      },
      {
        heading: "Surgery",
        paragraphs: [
          "It is rare to need surgery for microscopic colitis. Your healthcare professional may suggest it if other treatments have not worked.",
        ],
      },
      {
        heading: "Working out what suits you",
        paragraphs: [
          "Loperamide or colestyramine can sometimes be used together with budesonide. If you cannot, or do not want to, take steroids, your doctor may suggest medicines for diarrhoea, biologic medicines such as vedolizumab, or medicines such as azathioprine.",
          "There are ongoing studies on other treatments, including medicines and changing the bugs found in the large bowel. Ask your IBD team about any opportunities to get involved in research.",
        ],
      },
    ],
    helps: [
      "Only take antimotility medicines such as loperamide if your IBD team has said it is safe.",
      "Do not take more loperamide than the recommended dose; contact 111 for advice if you take 2 extra doses or more.",
      "Leave a gap between bile acid binders and other medicines, and ask your pharmacist if you are not sure how.",
      "Ask your consultant whether you would benefit from other treatments if budesonide has not worked.",
      "Ask your IBD team about opportunities to get involved in research.",
    ],
    tryThisWeek: [
      "Check loperamide is safe for you.",
      "Ask how to time bile acid binders.",
      "Ask about research opportunities.",
    ],
    ask: "If budesonide does not work for me, what would we try next?",
    interactive: {
      kind: "flip-cards",
      title: "Other treatments, card by card",
      intro: "Turn each card to see when each one is used and what it does.",
      cards: [
        { id: "loperamide", front: "Loperamide", when: "Mild symptoms, or while others start", back: "Slows food through the gut so more water is absorbed. Usually starts working within 1 hour." },
        { id: "binders", front: "Bile acid binders", when: "If bile acids play a part", back: "Colestyramine or colesevelam attach to bile acids so they cannot cause diarrhoea." },
        { id: "azathioprine", front: "Azathioprine or mercaptopurine", when: "If budesonide has not worked", back: "Suppress the immune system, which is over-active in microscopic colitis." },
        { id: "biologics", front: "Biologics", when: "In rare circumstances", back: "Such as vedolizumab. Funding for their use in microscopic colitis is not generally given." },
        { id: "surgery", front: "Surgery", when: "If other treatments have not worked", back: "It is rare to need surgery for microscopic colitis." },
      ],
    },
    sources: [CCUK_MC, GUTS_MC, CCUK_OTHER, NHS_LOP_ABOUT, NHS_LOP_HOW, NHS_LOP_WHO, CCUK_STEROIDS],
    quiz: {
      question: "How often is surgery needed for microscopic colitis?",
      options: [{ text: "Rarely, if other treatments have not worked", right: true }, { text: "Always, soon after diagnosis" }, { text: "Every few years" }],
      why: "It is rare to need surgery for microscopic colitis.",
    },
  },
  {
    id: "mc-relapse",
    kicker: "Treatment",
    question: "What if my microscopic colitis comes back?",
    hook: "Symptoms can return after treatment. That is common in a lifelong condition, and there are clear next steps.",
    short: "Microscopic colitis is lifelong, and symptoms can come back or get worse, which is called a relapse. If this happens, tell your doctor: the steroid dose may be raised for a while, budesonide may be used for longer, or other treatments tried. If symptoms carry on, your doctor should consider other causes.",
    sections: [
      {
        heading: "Why symptoms can return",
        paragraphs: [
          "Microscopic colitis is a lifelong condition. With the right treatment there will be times when you have fewer symptoms or none at all. But you may also have relapses, when your symptoms return or get worse.",
          "Sometimes symptoms come back when steroids are stopped or the dose is lowered.",
        ],
      },
      {
        heading: "What your team may do",
        paragraphs: [
          "If your symptoms return, tell your doctor. Your IBD team may increase your steroid dose for a short time, then lower it again more slowly.",
          "Budesonide is occasionally used for a longer time to keep symptoms under control, which is called maintaining remission. In 2 studies, 3 in every 4 people who took budesonide stayed in remission, compared with 1 in every 4 who took a placebo.",
          "You may be offered other medicines too, such as azathioprine or mercaptopurine, or a biologic medicine.",
        ],
      },
      {
        heading: "Checking for other causes",
        paragraphs: [
          "If symptoms continue, your doctor should consider other diagnoses, such as coeliac disease, lactose intolerance and bile acid diarrhoea.",
          "Diarrhoea can also be a side effect of medicines for other conditions, such as omeprazole and lansoprazole, or a sign of a tummy infection. You can check the leaflet that comes with your medicine to see if diarrhoea is a side effect.",
        ],
      },
      {
        heading: "Things that may help",
        paragraphs: [
          "Cutting down on caffeine and alcohol may help symptoms. There is no evidence that specific foods affect microscopic colitis, but some people find certain foods are a trigger. A food diary can help you understand what makes you more unwell.",
          "Talk to your doctor or dietitian before making any major changes to your diet. Do not stop eating gluten before a coeliac test, as excluding it could give a false negative result.",
        ],
      },
    ],
    helps: [
      "If your symptoms return, tell your doctor.",
      "Speak to your IBD team if you think your steroid medicine is not working.",
      "Keep a food diary to help you understand what foods make you more unwell.",
      "Try cutting down on caffeine and alcohol.",
      "Talk to your doctor or dietitian before making any major changes to your diet.",
    ],
    tryThisWeek: [
      "Tell your doctor if symptoms return.",
      "Keep a food diary.",
      "Cut down on caffeine.",
    ],
    ask: "What should I do if the diarrhoea comes back?",
    interactive: {
      kind: "scenarios",
      title: "If symptoms come back",
      scenarios: [
        {
          id: "return",
          situation: "A few weeks after finishing budesonide, the watery diarrhoea is back.",
          options: [{ text: "Tell your doctor", best: true }, { text: "Restart old tablets on your own" }, { text: "Wait and say nothing" }],
          why: "If your symptoms return, tell your doctor. Your IBD team may increase your dose for a short time, then lower it again more slowly.",
        },
        {
          id: "gluten",
          situation: "You want to cut out gluten before your coeliac test.",
          options: [{ text: "Keep eating gluten until the test", best: true }, { text: "Cut out gluten now" }],
          why: "Gluten needs to be eaten to identify coeliac disease. Excluding it could give a false negative result.",
        },
        {
          id: "coffee",
          situation: "You drink several strong coffees a day.",
          options: [{ text: "Try decaffeinated drinks instead", best: true }, { text: "Drink more coffee to keep going" }],
          why: "Try cutting down on caffeine. Drink decaffeinated tea, decaffeinated coffee and non-caffeinated soft drinks.",
        },
        {
          id: "ongoing",
          situation: "Symptoms carry on despite treatment.",
          options: [{ text: "Ask your doctor about other causes", best: true }, { text: "Accept that nothing else can be done" }],
          why: "If symptoms continue, your doctor should consider other diagnoses, such as coeliac disease, lactose intolerance and bile acid diarrhoea.",
        },
      ],
    },
    sources: [CCUK_MC, GUTS_MC, CCUK_STEROIDS, CCUK_DIARRHOEA],
    quiz: {
      question: "What should you do if your symptoms come back after treatment?",
      options: [{ text: "Tell your doctor", right: true }, { text: "Stop all your medicines" }, { text: "Wait a year and see" }],
      why: "If your symptoms return, tell your doctor.",
    },
  },
  {
    id: "mc-daily-life",
    kicker: "Living well",
    question: "How do I manage toilets, travel and daily life?",
    hook: "Planning ahead, a small kit and a card that says you can't wait can make going out feel possible again.",
    short: "Urgency and bowel accidents can affect work, travel and time with others, but there are practical ways to manage them. Planning toilet stops, carrying an emergency kit, and using a Can't Wait card or Radar key can help. At work, changes such as sitting nearer a toilet, and support from Access to Work, may help.",
    sections: [
      {
        heading: "Knowing where the toilets are",
        paragraphs: [
          "Making sure you have easy access to a toilet is an important part of managing urgency. Many people plan journeys by toilet stops, sometimes called toilet mapping. Toilet map apps, or the Great British Toilet Map, can help you find the nearest public toilet.",
          "A Radar key opens accessible public toilets. Crohn's & Colitis UK members get one, giving access to over 9,000 locked public toilets around the UK, and you can also buy one from Disability Rights UK.",
        ],
      },
      {
        heading: "Cards that explain",
        paragraphs: [
          "A Can't Wait card shows that you have a medical condition and need toilet facilities urgently. It may help to show it if there is a long queue, or if you want to use a shop's toilet. Crohn's & Colitis UK members get one.",
          "Guts UK can post a free Can't Wait card to anyone in the UK with a diagnosed digestive condition. The cards do not guarantee urgent access to a toilet, but can help.",
        ],
      },
      {
        heading: "An emergency kit",
        paragraphs: [
          "Some people carry pads, spare underwear, alcohol-free wipes, tissues, disposal bags and a neutraliser spray. You may also wish to keep a change of clothes at work or in your car, just in case.",
          "Trousers or skirts that are easy to undo can help, such as ones with an elasticated waist, and darker colours may disguise leaks more easily. Continence products such as pads may be available free on the NHS from a continence clinic or your district nurse.",
        ],
      },
      {
        heading: "Travelling",
        paragraphs: [
          "Most long-distance coaches now have an on-board toilet, and you can check facilities at train stations on the National Rail website. When flying, request an aisle seat near the toilet in advance if possible, and keep what you need in your hand luggage.",
          "If you travel abroad, get travel insurance that covers your condition, and declare it when you get a quote. Pack enough medicine for the whole trip, with extra in case of delays, and a copy of your prescription or a letter about your medicines.",
          "Loperamide can make some people dizzy, tired or sleepy. If this happens, do not drive, cycle or use machinery or tools until you feel better.",
        ],
      },
      {
        heading: "Work",
        paragraphs: [
          "You might ask your employer to move your workstation closer to a toilet. Access to Work can help you get or stay in work if you have a physical or mental health condition, and a grant does not have to be paid back.",
          "Access to Work will not pay for reasonable adjustments, which are the changes your employer must legally make to support you to do your job.",
        ],
      },
    ],
    helps: [
      "Plan journeys by toilet stops, using a toilet map app or the Great British Toilet Map.",
      "Order a free Can't Wait card from Guts UK, or get one by joining Crohn's & Colitis UK.",
      "Carry an emergency kit, and keep a change of clothes at work or in your car.",
      "Ask your employer about moving your workstation closer to a toilet.",
      "Declare your condition when you get a travel insurance quote.",
      "Request an aisle seat near the toilet when you fly.",
    ],
    tryThisWeek: [
      "Order a Can't Wait card.",
      "Pack an emergency kit.",
      "Plan toilet stops for a trip.",
    ],
    ask: "Could I be referred to a continence service for help with urgency?",
    interactive: {
      kind: "scenarios",
      title: "Out and about",
      scenarios: [
        {
          id: "queue",
          situation: "You need the toilet urgently, and there is a long queue.",
          options: [{ text: "Show your Can't Wait card", best: true }, { text: "Wait in the queue and hope" }],
          why: "It may be helpful to show a Can't Wait card if there is a long queue for the toilet, or if you want to use a shop's toilet.",
        },
        {
          id: "car",
          situation: "You are planning a long car journey.",
          options: [{ text: "Plan the route by toilet stops", best: true }, { text: "Drive straight through" }],
          why: "Many people plan their journeys by toilet stops. Toilet map apps can help you plan your journey.",
        },
        {
          id: "flight",
          situation: "You are booking a flight.",
          options: [{ text: "Ask for an aisle seat near the toilet", best: true }, { text: "Take any seat" }],
          why: "If possible, request an aisle seat near the toilet in advance, and take what you need in your hand luggage.",
        },
        {
          id: "desk",
          situation: "Your desk at work is a long way from the toilet.",
          options: [{ text: "Ask to move closer to a toilet", best: true }, { text: "Say nothing" }],
          why: "You might ask your employer to move your workstation closer to a toilet.",
        },
      ],
    },
    sources: [CCUK_URGENCY, CCUK_MEMBER, GUTS_CARD, CCUK_TRAVEL, GOV_ACCESS_TO_WORK, CCUK_MC, NHS_LOP_QUESTIONS],
    quiz: {
      question: "What does a Radar key do?",
      options: [{ text: "Opens accessible public toilets", right: true }, { text: "Gets you a faster GP appointment" }, { text: "Pays for travel insurance" }],
      why: "A Radar key opens accessible public toilets.",
    },
  },
  {
    id: "mc-fluids",
    kicker: "Living well",
    question: "How do I avoid dehydration with watery diarrhoea?",
    hook: "Watery diarrhoea takes fluid and salts with it. Small, regular drinks and knowing the warning signs both help.",
    short: "With microscopic colitis, your body can lose a lot of fluid, so drinking plenty helps avoid dehydration. Water or diluted squash in small amounts often are good choices, and oral rehydration solutions can replace lost salts and sugar. Know the signs of serious dehydration, and get urgent help when the NHS says to.",
    sections: [
      {
        heading: "Why fluids matter",
        paragraphs: [
          "When you have diarrhoea, your body loses a lot of fluid. It is important to drink plenty of fluids to avoid getting dehydrated.",
          "Dehydration means your body loses more fluids than you take in. Mild or moderate dehydration can usually be treated quickly. If it is not treated, it can become severe, and severe dehydration needs urgent treatment.",
        ],
      },
      {
        heading: "What to drink",
        paragraphs: [
          "Water or diluted squash are good choices. Keep drinking small amounts of fluids regularly. Drink enough during the day so that your pee is a pale colour.",
          "The Eatwell Guide recommends drinking six to eight glasses of fluids a day. You may need to drink more when the weather is very hot, when you sweat from exercise, or when you have diarrhoea. Do not wait until you feel thirsty before you start drinking extra.",
          "Avoid caffeine and alcohol, as they can make dehydration worse. Fruit juice and fizzy drinks can make diarrhoea worse.",
        ],
      },
      {
        heading: "Replacing salts and sugar",
        paragraphs: [
          "With diarrhoea, you might need to replace salts and sugar as well as water. Oral rehydration solutions are powders or tablets dissolved in water that help the body do this.",
          "You can buy them from most supermarkets and pharmacies, and a pharmacist can recommend one that is right for you. Follow all instructions carefully.",
        ],
      },
      {
        heading: "Signs to watch for",
        paragraphs: [
          "Early signs include feeling thirsty and dark yellow pee. Other signs include peeing less than usual, strong-smelling pee, feeling dizzy or tired, and a dry mouth, lips and tongue.",
          "Older adults are more at risk of dehydration. Drinking much more water than your body can process can also be harmful, so if you think you have drunk too much, contact a healthcare professional.",
        ],
      },
      {
        heading: "When to get urgent help",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you are feeling unusually tired, feel dizzy when you stand up and it does not go away, have dark yellow pee or are peeing less than normal, or are breathing quickly or have a fast heart rate.",
          "Call 999 or go to A&E if someone has signs of dehydration and blue, grey, pale or blotchy skin, lips or tongue, skin that feels cold, difficulty breathing, confusion, or is sleepier than normal or difficult to wake. These could be signs of shock.",
        ],
      },
    ],
    helps: [
      "Drink plenty of fluids, such as water or diluted squash, in small amounts regularly.",
      "Drink enough during the day so that your pee is a pale colour.",
      "Ask a pharmacist to recommend an oral rehydration solution.",
      "Avoid caffeine and alcohol, which can make dehydration worse.",
      "Get an urgent GP appointment or help from NHS 111 if you feel dizzy when you stand up and it does not go away.",
    ],
    tryThisWeek: [
      "Sip water or squash often.",
      "Check your pee is pale.",
      "Ask a pharmacist about rehydration.",
    ],
    ask: "Should I keep oral rehydration solution at home, and when should I use it?",
    interactive: {
      kind: "signs",
      title: "Signs of dehydration",
      intro: "Tick any you have noticed today. The ones you tick become a list you can share.",
      signs: [
        "Feeling thirsty",
        "Dark yellow, strong-smelling pee",
        "Peeing less often than usual",
        "Feeling dizzy or light-headed",
        "Feeling unusually tired",
        "A dry mouth, lips and tongue",
        "Dizziness on standing that does not go away",
        "Breathing quickly or a fast heart rate",
      ],
      after: "Some of these can be signs of serious dehydration: ask for an urgent GP appointment or get help from NHS 111. Call 999 for cold or blotchy skin, confusion or difficulty breathing.",
      copyHeading: "Dehydration signs I have noticed",
    },
    sources: [CCUK_DEHYDRATION, NHS_DEHYDRATION, CCUK_MC, NHS_DIARRHOEA],
    quiz: {
      question: "What colour should your pee be when you are drinking enough?",
      options: [{ text: "Pale", right: true }, { text: "Dark yellow" }, { text: "Orange" }],
      why: "Drink enough during the day so that your pee is a pale colour.",
    },
  },
  {
    id: "mc-smoking",
    kicker: "Living well",
    question: "Does smoking affect microscopic colitis?",
    hook: "Smoking raises the risk of getting it. Stopping is hard, but support makes you far more likely to succeed.",
    short: "Smoking increases the risk of developing microscopic colitis, and smokers tend to get it younger. How smoking affects it once you have it is less clear, but everyone with microscopic colitis is advised not to smoke. Expert support makes quitting for good 3 times more likely.",
    sections: [
      {
        heading: "Smoking and the risk",
        paragraphs: [
          "Smoking increases the risk of developing microscopic colitis. Current smokers and ex-smokers have an increased risk, and smokers tend to develop it at a younger age than non-smokers or ex-smokers.",
          "Everyone with Crohn's, ulcerative colitis or microscopic colitis is advised not to smoke. Cigarette smoke contains over 5,000 chemicals, and around 100 of these are known to be toxic or cause cancer.",
        ],
      },
      {
        heading: "If you already have it",
        paragraphs: [
          "There is not enough evidence to know for sure how smoking affects microscopic colitis in people who already have it. The evidence so far suggests smoking does not affect symptoms, and may not affect remission rates or the need for medicines.",
          "But smoking is the biggest cause of early death and preventable illness in the UK, and there are lots of health benefits to stopping. If you smoke, your healthcare professional may suggest stopping as one of the lifestyle changes that can help.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "Stopping can be challenging, and people are usually more successful with help. With professional or expert help, you are 3 times more likely to quit for good. Ask your GP about stop smoking services in your area.",
          "Local Stop Smoking Services are free. Advisers can offer one-to-one or group sessions, help you choose nicotine replacement or other stop smoking medicines, and support you if you use your own vape to quit.",
        ],
      },
      {
        heading: "Treatments that help",
        paragraphs: [
          "Stop smoking treatments are safe to take if you have Crohn's or colitis. NHS treatments include nicotine replacement therapy, such as patches, gum, lozenges and sprays, and medicines called bupropion, varenicline and cytisinicline.",
          "Vapes can help people quit smoking, but they are not recommended for non-smokers. Vaping is less harmful than smoking, but it is not harm-free.",
        ],
      },
      {
        heading: "What happens when you quit",
        paragraphs: [
          "After 48 hours, your carbon monoxide level has dropped to that of a non-smoker, and your senses of taste and smell are improving. After 72 hours, breathing can feel easier and your energy will be increasing.",
          "After 1 year, your risk of heart attack will have halved compared with a smoker's. If you reach 28 days smoke free, you are 5 times more likely to quit for good.",
        ],
      },
    ],
    helps: [
      "Ask your GP about stop smoking services in your area.",
      "Contact your local Stop Smoking Service, which is free.",
      "Ask about nicotine replacement therapy or other stop smoking medicines.",
      "Aim for 28 days smoke free, which makes you much more likely to quit for good.",
      "Use the free NHS Quit Smoking app to track your progress.",
    ],
    tryThisWeek: [
      "Contact a Stop Smoking Service.",
      "Ask about nicotine replacement.",
      "Get the NHS Quit Smoking app.",
    ],
    ask: "Can you refer me to a stop smoking service, and which treatment would suit me?",
    interactive: {
      kind: "timeline",
      title: "When you quit",
      steps: [
        { id: "m20", when: "After 20 minutes", title: "Pulse settling", points: ["Your pulse rate will already be starting to return to normal"] },
        { id: "h8", when: "After 8 hours", title: "Oxygen recovering", points: ["Oxygen levels are recovering", "Carbon monoxide in your blood will have reduced by half"] },
        { id: "h48", when: "After 48 hours", title: "Like a non-smoker", points: ["Carbon monoxide has dropped to that of a non-smoker", "Taste and smell are improving"] },
        { id: "h72", when: "After 72 hours", title: "Easier breathing", points: ["Breathing can feel easier", "Your energy will be increasing"] },
        { id: "w12", when: "After 2 to 12 weeks", title: "Better circulation", points: ["Blood will be pumping through to your heart and muscles much better"] },
        { id: "y1", when: "After 1 year", title: "Heart risk halved", points: ["Your risk of heart attack will have halved compared with a smoker's"] },
      ],
    },
    sources: [CCUK_SMOKING, CCUK_MC, GUTS_MC, NHS_QUIT, NHS_STOP_SERVICE],
    quiz: {
      question: "How does smoking affect the chance of getting microscopic colitis?",
      options: [{ text: "It increases the risk", right: true }, { text: "It protects against it" }, { text: "It makes no difference" }],
      why: "Smoking increases the risk of developing microscopic colitis.",
    },
  },
  {
    id: "mc-support",
    kicker: "Support",
    question: "Where can I get support with microscopic colitis?",
    hook: "You are not alone. Charity helplines, IBD nurses, other people with the condition and talking therapies can all help.",
    short: "Crohn's & Colitis UK and Guts UK both run helplines and have information about microscopic colitis. An IBD nurse can help with treatment and daily life, though services vary. If the condition is affecting your mood, talking therapies can help, and urgent support is there if you are struggling.",
    sections: [
      {
        heading: "Charity helplines",
        paragraphs: [
          "The Crohn's & Colitis UK Helpline is open 10am to 3pm, Monday to Friday, except English bank holidays, on 0300 222 5700, by email or by LiveChat. It takes many calls from people with microscopic colitis. The team is not medically trained, but it may help to talk through your worries.",
          "The Guts UK Helpline is on 0300 102 4887, Monday to Friday, 10am to 2pm, excluding bank holidays. Its team can help you understand a condition and what to ask a healthcare professional. Urgent health matters should go to the NHS, your GP or urgent care services.",
        ],
      },
      {
        heading: "Your healthcare team",
        paragraphs: [
          "Your doctor will support you, and you should ask for support from an IBD nurse-led service. An IBD nurse can offer support and advice about treatment options and daily life with microscopic colitis.",
          "NHS support services vary. Some hospital IBD teams do not treat microscopic colitis, and some areas still do not have an IBD nurse. Crohn's & Colitis UK can help you find out if your hospital has one.",
        ],
      },
      {
        heading: "Other people who understand",
        paragraphs: [
          "You may find it helpful to get support from other people with IBD, at a local support group or online. Crohn's & Colitis UK has local networks and a closed Facebook forum for anyone affected by Crohn's or colitis.",
          "Members of Crohn's & Colitis UK get a Can't Wait card, a Radar key and a magazine. Membership starts from £15 a year, and there is concessionary membership for people on a low income.",
        ],
      },
      {
        heading: "Looking after your mental health",
        paragraphs: [
          "Coping with a long-term condition like microscopic colitis can be difficult, and some people may feel isolated and low. Talking therapies and medicines for depression and anxiety can help.",
          "In England, you can refer yourself directly to an NHS talking therapies service without needing a referral from a GP. Your GP or IBD team may also be able to arrange psychological support.",
          "If you have thoughts of suicide or harming yourself, tell someone you trust, call the NHS on 111 or go to your nearest A&E. If you need someone to talk to, Samaritans are available 24 hours a day, 7 days a week on 116 123.",
        ],
      },
      {
        heading: "Questions to take to your doctor",
        paragraphs: [
          "Guts UK suggests asking whether your symptoms are due to microscopic colitis, whether your medicines are causing them and if there are alternatives, whether you would benefit from a colonoscopy and biopsy, and whether you need tests for other conditions such as coeliac disease.",
        ],
      },
    ],
    helps: [
      "Call the Crohn's & Colitis UK Helpline on 0300 222 5700, 10am to 3pm, Monday to Friday.",
      "Call the Guts UK Helpline on 0300 102 4887, Monday to Friday, 10am to 2pm.",
      "Ask for support from an IBD nurse-led service.",
      "If you live in England, refer yourself to an NHS talking therapies service.",
      "Call Samaritans on 116 123 if you need someone to talk to.",
    ],
    tryThisWeek: [
      "Save the helpline numbers.",
      "Ask about an IBD nurse.",
      "Look into talking therapies.",
    ],
    ask: "Is there an IBD nurse who can support me with microscopic colitis?",
    interactive: {
      kind: "flip-cards",
      title: "Where to turn",
      intro: "Turn each card to see what each one offers.",
      cards: [
        { id: "ccuk", front: "Crohn's & Colitis UK Helpline", when: "0300 222 5700, weekdays 10am to 3pm", back: "Information and support about microscopic colitis, by phone, email or LiveChat." },
        { id: "guts", front: "Guts UK Helpline", when: "0300 102 4887, weekdays 10am to 2pm", back: "Help understanding a condition and what to ask a healthcare professional." },
        { id: "nurse", front: "IBD nurse", when: "Through your hospital", back: "Support and advice about treatment options and daily life. Services vary between areas." },
        { id: "talking", front: "NHS talking therapies", when: "Self-referral in England", back: "Talking to a trained professional about how you are feeling." },
        { id: "samaritans", front: "Samaritans", when: "116 123, at any time", back: "Someone to talk to, 24 hours a day, 7 days a week." },
      ],
    },
    sources: [CCUK_MC, CCUK_HELPLINE, GUTS_HELPLINE, CCUK_MENTAL, NHS_IBD, GUTS_MC, CCUK_MEMBER],
    quiz: {
      question: "Who can offer advice about treatment and daily life with microscopic colitis?",
      options: [{ text: "An IBD nurse", right: true }, { text: "Only a surgeon" }, { text: "No one" }],
      why: "An IBD nurse can offer support and advice about treatment options and daily life with microscopic colitis.",
    },
  },
];
