import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Haemochromatosis page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, Liver UK
// (the new name for the British Liver Trust; britishlivertrust.org.uk now redirects to liveruk.org) and
// Haemochromatosis UK, with NHS Blood and Transplant's page on giving blood with haemochromatosis. Where the
// charities give target numbers, the answer says who gives them. General information only; it never replaces
// what a person's own GP, specialist or haemochromatosis team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const liverUk = (label: string, path: string): LearnSource => ({ label: `Liver UK: ${label}`, url: `https://liveruk.org/${path}` });
const huk = (label: string, path: string): LearnSource => ({ label: `Haemochromatosis UK: ${label}`, url: `https://www.haemochromatosis.org.uk/${path}` });

const NHS_HC = nhs("Haemochromatosis", "conditions/haemochromatosis/");
const NHS_SYMPTOMS = nhs("Haemochromatosis symptoms", "conditions/haemochromatosis/symptoms/");
const NHS_CAUSES = nhs("Haemochromatosis causes", "conditions/haemochromatosis/causes/");
const NHS_DIAGNOSIS = nhs("Haemochromatosis diagnosis", "conditions/haemochromatosis/diagnosis/");
const NHS_TREATMENT = nhs("Haemochromatosis treatment", "conditions/haemochromatosis/treatment/");
const NHS_COMPLICATIONS = nhs("Haemochromatosis complications", "conditions/haemochromatosis/complications/");
const NHS_UNITS = nhs("Alcohol units", "live-well/alcohol-advice/calculating-alcohol-units/");

const HC = "about-liver-disease/conditions/haemochromatosis";
const LU_OVERVIEW = liverUk("Haemochromatosis", `${HC}/`);
const LU_WHAT = liverUk("What is haemochromatosis?", `${HC}/what-is-haemochromatosis/`);
const LU_INHERIT = liverUk("How is haemochromatosis passed on in families?", `${HC}/haemochromatosis-inheritance/`);
const LU_RISK = liverUk("The risk of iron overload in haemochromatosis", `${HC}/haemochromatosis-iron-overload/`);
const LU_SYMPTOMS = liverUk("Symptoms of haemochromatosis", `${HC}/haemochromatosis-symptoms/`);
const LU_TESTS = liverUk("Tests and diagnosis of haemochromatosis", `${HC}/haemochromatosis-tests/`);
const LU_TREATMENT = liverUk("Treating haemochromatosis", `${HC}/haemochromatosis-treatment/`);
const LU_FUTURE = liverUk("Future treatments for haemochromatosis", `${HC}/haemochromatosis-future-treatment/`);
const LU_COMPLICATIONS = liverUk("Complications and related conditions", `${HC}/haemochromatosis-complications/`);
const LU_LIVING = liverUk("Living with haemochromatosis", `${HC}/living-with-haemochromatosis/`);
const LU_HELPLINE = liverUk("Nurse-led helpline", "how-we-can-help/nurse-led-helpline/");

const HUK_CARE = huk("Treatment & Care", "genetic-haemochromatosis-care-pathway");
const HUK_SYMPTOMS = huk("Understanding genetic haemochromatosis (symptoms)", "common-symptoms-of-genetic-haemochromatosis");
const HUK_GENETICS = huk("HFE (Type 1) genetic haemochromatosis", "genetics-of-haemochromatosis");
const HUK_C282Y = huk("C282Y homozygous", "c282y-homozygous");
const HUK_CARRIERS = huk("Haemochromatosis carriers", "haemochromatosis-carriers");
const HUK_FAMILY = huk("Explaining genetic haemochromatosis to friends & family", "talking-to-family-about-haemochromatosis");
const HUK_ARTHROPATHY = huk("Arthropathy and joint pain", "arthropathy");
const HUK_DONATE = huk("Can I donate blood?", "can-i-donate-blood");
const HUK_DONATE_ENGLAND = huk("Improved blood donation arrangements in England", "blood-donation-arrangements-in-england-2023");
const HUK_LIVING_WELL = huk("Living well with GH", "living-well-with-genetic-haemochromatosis");
const HUK_HELPLINE = huk("Help lines", "helpline");
const HUK_FAQ = huk("Frequently asked questions", "frequently-asked-questions-about-genetic-haemochromatosis");

const NHSBT: LearnSource = { label: "NHS Blood Donation: Haemochromatosis and blood donation", url: "https://www.blood.co.uk/who-can-give-blood/haemochromatosis-and-blood-donation/" };

export const haemochromatosisAnswers: LearnArticle[] = [
  {
    id: "hc-what-it-is",
    kicker: "Understanding",
    question: "What is haemochromatosis?",
    hook: "The body takes in more iron than it needs, and has no way to get rid of it. Found early, it can be managed.",
    short: "Haemochromatosis is an inherited condition where iron levels in the body slowly build up over many years. If it is not treated, the extra iron can damage parts of the body such as the liver, joints, pancreas and heart. Found and treated early, it is unlikely to cause serious problems.",
    sections: [
      {
        heading: "Iron that slowly builds up",
        paragraphs: [
          "Haemochromatosis is an inherited condition where iron levels in the body slowly build up over many years. This build-up of iron, known as iron overload, can cause unpleasant symptoms. If it is not treated, it can damage parts of the body such as the liver, joints, pancreas and heart.",
          "If you have haemochromatosis, your body doesn't process iron in the same way as other people. If this isn't diagnosed, it can cause problems in the long term. The good news is that it can be managed by your doctor once you know you have it.",
        ],
      },
      {
        heading: "What iron does",
        paragraphs: [
          "Iron is a very important part of haemoglobin, a protein found in red blood cells. Haemoglobin attaches to oxygen as blood flows through your lungs, and the red blood cells carry the oxygen round your body. Your body also stores a little extra iron in the liver, for when it's needed.",
          "Iron is absorbed in the gut from the food you eat and passes into the bloodstream. A protein called transferrin picks up the iron and carries it to the liver for storage, or to your bone marrow, where new red blood cells are made.",
        ],
      },
      {
        heading: "Why the iron builds up",
        paragraphs: [
          "If you have haemochromatosis, your body doesn't produce enough of a protein called hepcidin. This is a hormone that stops your body absorbing iron from your gut when you don't need it. Without hepcidin, your body absorbs too much iron, and it has no way of getting rid of the extra.",
          "Normally, your body keeps a steady level of iron. People with haemochromatosis cannot control their iron level. It gradually increases over time, and iron starts to build up in their organs, mostly in the liver.",
        ],
      },
      {
        heading: "Who it affects",
        paragraphs: [
          "Haemochromatosis most often affects people of white northern European background. It is particularly common in countries where lots of people have a Celtic background, such as Ireland, Scotland and Wales.",
          "It is a common condition in the UK. The most common type affects adults, and is usually diagnosed in people aged 40 or more. Haemochromatosis UK says as many as 1 in 150 people in England and Wales, and 1 in 113 people in Scotland, have the condition, but most are unaware that they do.",
        ],
      },
      {
        heading: "Found early, it can be managed",
        paragraphs: [
          "If the condition is diagnosed and treated early on, haemochromatosis does not affect life expectancy and is unlikely to result in serious problems. The sooner iron overload is diagnosed and treated, the lower the risk of any organ damage.",
          "There's currently no cure, but there are treatments that reduce the amount of iron in the body and reduce the risk of damage. Some people with the genes never develop iron overload and do not need treatment. Even so, joint pain and fatigue are often an issue.",
        ],
      },
    ],
    helps: [
      "See a GP if you have persistent or worrying symptoms that could be caused by haemochromatosis, particularly if you have a northern European family background.",
      "See a GP if a parent or sibling has haemochromatosis, even if you do not have symptoms yourself.",
      "Talk to the GP about whether you should have blood tests to check for haemochromatosis.",
      "Have treatment as needed: the sooner iron overload is diagnosed and treated, the lower the risk of organ damage.",
    ],
    tryThisWeek: [
      "See a GP about lasting symptoms.",
      "Tell your GP about family history.",
      "Ask about iron blood tests.",
    ],
    ask: "Do I have iron overload, or only the genes for haemochromatosis?",
    interactive: {
      kind: "flip-cards",
      title: "The words you may hear",
      intro: "Turn each card to see what each word means.",
      cards: [
        { id: "haemoglobin", front: "Haemoglobin", when: "In red blood cells", back: "A protein that contains iron. It attaches to oxygen in the lungs so red blood cells can carry it round the body." },
        { id: "transferrin", front: "Transferrin", when: "In the blood", back: "A protein that picks up iron in the blood and carries it to the liver for storage, or to the bone marrow." },
        { id: "hepcidin", front: "Hepcidin", when: "Too little in haemochromatosis", back: "A hormone that stops your body absorbing iron from your gut when you don't need it." },
        { id: "overload", front: "Iron overload", when: "When iron builds up", back: "The build-up of iron over many years. If not treated, it can damage the liver, joints, pancreas and heart." },
        { id: "hfe", front: "HFE", when: "The gene in most cases", back: "Most cases are linked to a fault in a gene called HFE, which affects your ability to absorb iron from food." },
      ],
    },
    sources: [NHS_HC, LU_WHAT, LU_OVERVIEW, NHS_CAUSES, HUK_CARE],
    quiz: {
      question: "What does the hormone hepcidin normally do?",
      options: [{ text: "Stops the body absorbing iron it does not need", right: true }, { text: "Makes new red blood cells" }, { text: "Carries oxygen to the lungs" }],
      why: "Hepcidin is a hormone that stops your body absorbing iron from your gut when you don't need it.",
    },
  },
  {
    id: "hc-genes",
    kicker: "Understanding",
    question: "How is haemochromatosis inherited?",
    hook: "One copy of the gene makes you a carrier. Two copies raise the risk, but even then many people never become unwell.",
    short: "Haemochromatosis is a recessive condition: you are only at risk if you inherit the faulty gene from both parents. With one copy you are a carrier, and around 1 in 10 people in the UK carry it. Even with two copies, only some people ever develop the condition.",
    sections: [
      {
        heading: "Genes come in pairs",
        paragraphs: [
          "All our genes come in pairs. We inherit one of each pair from our mother and one from our father. Haemochromatosis is a recessive condition. That means you need to inherit the gene from both parents to be at risk of developing it.",
          "Most cases are linked to a fault in a gene called HFE, which affects your ability to absorb iron from food.",
        ],
      },
      {
        heading: "Being a carrier",
        paragraphs: [
          "If you only inherit the faulty gene from 1 parent, you'll be at risk of passing it on to your children. This is known as being a carrier, but you will not develop haemochromatosis yourself.",
          "Around 1 in 10 people in the UK carry the gene variant that most commonly causes haemochromatosis. In people with a Celtic background, which is common in Ireland, Scotland and Wales, it's quite common to be a carrier.",
        ],
      },
      {
        heading: "When two carriers have a baby",
        paragraphs: [
          "If 2 carriers have a baby, there's a 1 in 4 chance the baby will receive 2 normal versions of the HFE gene. There's a 1 in 2 chance the baby will be a carrier. And there's a 1 in 4 chance the baby will inherit 2 copies of the faulty gene and be at risk of developing haemochromatosis.",
          "These proportions are averages for the whole population. In any particular family where both parents are carriers, it is possible for all the children to be affected, all to be carriers, or all to be clear.",
        ],
      },
      {
        heading: "C282Y, the most common variant",
        paragraphs: [
          "By far the commonest cause is a particular change in the HFE gene that doctors call C282Y. It is the cause of haemochromatosis in more than 8 out of 10 people. Haemochromatosis caused by other gene variants is generally called non-HFE haemochromatosis.",
          "Haemochromatosis UK says people with two copies of C282Y tend to load iron much more quickly than other people with the condition. People with one C282Y and one H63D variant, called compound heterozygous, tend to load iron less rapidly.",
        ],
      },
      {
        heading: "Genes are not the whole story",
        paragraphs: [
          "Inheriting 2 copies of the faulty gene does not mean you'll definitely get haemochromatosis. For unknown reasons, only a small proportion of people with 2 copies will ever develop the condition.",
          "Doctors call this incomplete penetrance, and they can't predict who will develop the condition and who won't. You're more likely to develop it as you get older, and the chances are higher in men than in women.",
        ],
      },
    ],
    helps: [
      "If you have the gene variant on both copies of the gene, have regular blood tests throughout your life to check for iron building up.",
      "If you have two copies of C282Y, doctors recommend that all your siblings, parents and adult children get tested.",
      "If you are struggling to understand a genetic result, Haemochromatosis UK's nursing team can help interpret it.",
      "Remember that having the genes does not mean you will definitely develop haemochromatosis.",
    ],
    tryThisWeek: [
      "Keep up regular iron blood tests.",
      "Tell siblings, parents and adult children.",
      "Ask for help understanding your result.",
    ],
    ask: "Which gene variants do I have, and what do they mean for me and my family?",
    interactive: {
      kind: "flip-cards",
      title: "Your genes, card by card",
      intro: "Turn each card to see what each result means.",
      cards: [
        { id: "clear", front: "Two normal genes", when: "1 in 4 children of two carriers", back: "No haemochromatosis, and not a carrier." },
        { id: "carrier", front: "One faulty gene", when: "1 in 2 children of two carriers", back: "A carrier. You will not develop haemochromatosis, but can pass the gene on to your children." },
        { id: "two", front: "Two faulty genes", when: "1 in 4 children of two carriers", back: "At risk of developing haemochromatosis, though only a small proportion ever do." },
        { id: "c282y", front: "C282Y", when: "The commonest variant", back: "A change in the HFE gene that causes haemochromatosis in more than 8 out of 10 people." },
        { id: "compound", front: "C282Y and H63D", when: "Compound heterozygous", back: "One of each variant. Haemochromatosis UK says people with this tend to load iron less rapidly." },
      ],
    },
    sources: [NHS_CAUSES, LU_INHERIT, LU_RISK, HUK_GENETICS, HUK_CARE, HUK_CARRIERS],
    quiz: {
      question: "What happens if you inherit the faulty gene from only one parent?",
      options: [{ text: "You are a carrier, but will not develop it", right: true }, { text: "You will develop it in later life" }, { text: "You need venesection straight away" }],
      why: "If you only inherit the faulty gene from 1 parent, you'll be a carrier, but you will not develop haemochromatosis yourself.",
    },
  },
  {
    id: "hc-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms of haemochromatosis?",
    hook: "Tiredness and aching joints come first, and they are easy to put down to something else.",
    short: "Symptoms usually begin between the ages of 30 and 60, and often start with feeling very tired and joint pain. Many early symptoms have other causes, so the condition is easy to miss. Sometimes there are no symptoms, and it is only found during a blood test.",
    sections: [
      {
        heading: "When symptoms start",
        paragraphs: [
          "Symptoms of haemochromatosis usually begin between the ages of 30 and 60, although they can occur earlier. They tend to develop earlier in men than in women. Women often do not experience problems until after the menopause.",
          "Women lose iron each month when they bleed during a period. This naturally lowers their iron levels until they reach menopause. Sometimes there are no symptoms at all, and the condition is only found during a blood test.",
        ],
      },
      {
        heading: "Early symptoms",
        paragraphs: [
          "Early symptoms can include feeling very tired all the time, brain fog, mood swings, depression and anxiety, weight loss and weakness. Others are joint pain, especially in the fingers, being unable to get or keep an erection, and irregular, stopped or missed periods.",
          "Liver UK says the commonest early symptoms of iron overload are feeling very tired and arthritic pains in the joints, most often in the ankles, hips, or wrists and hands. These can start years before any other symptoms or signs develop.",
        ],
      },
      {
        heading: "Why it is easy to miss",
        paragraphs: [
          "These symptoms can have many different causes, and may sometimes just be because of getting older. Haemochromatosis UK says chronic fatigue may be put down to a viral infection, and tummy pain to irritable bowel syndrome.",
          "But if some of these symptoms are present, haemochromatosis should be considered. Arthritis found only in the first two finger joints is highly suggestive of it.",
        ],
      },
      {
        heading: "Later problems",
        paragraphs: [
          "As the condition progresses, it can cause loss of sex drive, darkening of the skin, tummy pain and swelling, and yellowing of the skin and the whites of the eyes. It can also cause feeling thirsty all the time and needing to pee often, severe joint pain and stiffness, chest pain, shortness of breath, swollen hands and feet, an irregular heartbeat and smaller testicles.",
          "These problems are often caused by complications that can happen if the condition is not treated early on. A change in the colour of the skin is very rare, but something people often worry about. Iron can make the skin look bronzed or grey, most often on the face, hands, forearms or lower legs.",
        ],
      },
      {
        heading: "Not everything is the iron",
        paragraphs: [
          "As with any other changes in your body, it's sensible to speak to your doctor. People with any medical condition get all the usual aches and pains and ailments that everyone gets. So don't assume that anything you notice is due to haemochromatosis.",
        ],
      },
    ],
    helps: [
      "See a GP if you have persistent or worrying symptoms that could be caused by haemochromatosis, particularly if you have a northern European family background.",
      "See a GP if a parent or sibling has haemochromatosis, even if you do not have symptoms yourself.",
      "Talk to the GP about whether you should have blood tests to check for haemochromatosis.",
      "Don't assume a new symptom is due to haemochromatosis: see your GP or ask your specialist.",
      "Haemochromatosis UK has GP self-referral forms you can download, complete and discuss with your GP.",
    ],
    tryThisWeek: [
      "Note any lasting symptoms.",
      "Book a GP appointment to discuss them.",
      "Mention any family history.",
    ],
    ask: "Could my tiredness or joint pain be caused by too much iron?",
    interactive: {
      kind: "signs",
      title: "Symptoms to mention",
      intro: "Tick any you have noticed. They can have other causes, so take the list to your GP.",
      signs: [
        "Feeling very tired all the time",
        "Brain fog, mood swings, depression or anxiety",
        "Weight loss or weakness",
        "Joint pain, especially in the fingers",
        "Problems getting or keeping an erection",
        "Irregular, stopped or missed periods",
        "Loss of sex drive",
        "Darker skin, or skin that looks bronzed or grey",
        "Feeling thirsty all the time and peeing often",
        "Tummy pain or swelling",
      ],
      after: "These symptoms can have many different causes. Talk to the GP about whether you should have blood tests to check for haemochromatosis.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_SYMPTOMS, LU_SYMPTOMS, HUK_SYMPTOMS, NHS_HC, LU_RISK],
    quiz: {
      question: "When do symptoms of haemochromatosis usually begin?",
      options: [{ text: "Between the ages of 30 and 60", right: true }, { text: "In early childhood" }, { text: "Only after the age of 80" }],
      why: "Symptoms of haemochromatosis usually begin between the ages of 30 and 60, although they can occur earlier.",
    },
  },
  {
    id: "hc-tests",
    kicker: "Tests",
    question: "How is haemochromatosis diagnosed?",
    hook: "Two iron blood tests, then a genetic test. Both iron results need to be high before it is haemochromatosis.",
    short: "Haemochromatosis can usually be diagnosed with blood tests. A transferrin saturation test and a serum ferritin test show how much iron you absorb and store. If they suggest haemochromatosis, a genetic test checks for the gene linked to it.",
    sections: [
      {
        heading: "Who gets tested",
        paragraphs: [
          "Speak to a GP about getting tested if you have persistent symptoms of haemochromatosis. These symptoms can have a number of causes, and the GP may want to rule out some of these first. Speak to a GP too if a parent or sibling has been diagnosed, even if you do not have any symptoms.",
          "If a close relative has been diagnosed, you are likely to be tested before you have any symptoms. About 3 out of every 4 cases of haemochromatosis are picked up this way.",
        ],
      },
      {
        heading: "The iron blood tests",
        paragraphs: [
          "Several blood tests are needed. You'll have a full blood count, a liver test, a transferrin saturation test, which shows if you have a high iron level in the blood, and a serum ferritin test, which checks the amount of iron stored in your body.",
          "Liver UK says the normal transferrin saturation level is around 30%, and above 45% you may have too much iron. Levels go up and down through the day, so your doctor may ask you to have them checked at different times, or before you eat anything that day.",
          "Ferritin is not as reliable a measure. It can go up if you have other causes of liver damage, such as inflammation, fatty liver or drinking too much alcohol. It's only if both ferritin and transferrin saturation are raised that you have haemochromatosis.",
        ],
      },
      {
        heading: "The genetic test",
        paragraphs: [
          "If your blood tests suggest haemochromatosis, you'll have a test to see if your DNA carries the gene associated with the condition. It is a blood test, but not the same as the test that measures your iron.",
          "Because haemochromatosis only affects adults, the genetic test is not usually offered to anyone under 18. Haemochromatosis UK says you will receive the result within 4 to 6 weeks.",
        ],
      },
      {
        heading: "Deciding about a genetic test",
        paragraphs: [
          "Whether to be tested is a personal decision. Some people want to know straight away, and others know they don't. Neither view is right or wrong, and most people need time to weigh it up.",
          "There are genetic counselling services on the NHS for anyone considering a test for a genetic condition that runs in their family. The UK insurance industry has a code of conduct, and your insurance company is not allowed to ask whether you have had any genetic tests for a medical condition.",
        ],
      },
      {
        heading: "What happens next",
        paragraphs: [
          "If these tests detect a problem, you'll usually be referred to a hospital specialist to discuss what the results mean and whether you need further tests or treatment. A high iron level can have other causes too, including long-term liver disease, alcohol misuse, too much iron from supplements and long-term dialysis.",
          "If your results are normal, your doctor may ask you to repeat the blood tests every few years, or regularly, for example once a year. If transferrin saturation is raised but ferritin is not, you are absorbing more iron than normal but don't yet have iron overload. When to start treatment is a decision you make together with your doctor.",
        ],
      },
    ],
    helps: [
      "Ask a GP about testing if you have persistent symptoms, or a parent or sibling with haemochromatosis.",
      "If you are asked to, have your transferrin saturation test before you eat anything that day.",
      "If you are struggling to decide about a genetic test, speak to your doctor, who can refer you for NHS genetic counselling.",
      "Talk through what your individual results mean with your doctor; deciding when to start treatment is a decision you make together.",
    ],
    tryThisWeek: [
      "Ask your GP about iron tests.",
      "Check if your test needs fasting.",
      "Ask about genetic counselling.",
    ],
    ask: "What are my ferritin and transferrin saturation levels, and do I need a genetic test?",
    interactive: {
      kind: "flip-cards",
      title: "Your tests, card by card",
      intro: "Turn each card to see what each test looks for.",
      cards: [
        { id: "tsat", front: "Transferrin saturation", when: "One of two main iron tests", back: "Shows how much iron your body is absorbing. Liver UK says around 30% is normal." },
        { id: "ferritin", front: "Serum ferritin", when: "One of two main iron tests", back: "Shows how much iron is stored in your body. It can also rise with fatty liver or alcohol." },
        { id: "fbc", front: "Full blood count", when: "With the iron tests", back: "One of the several blood tests needed to diagnose haemochromatosis." },
        { id: "liver", front: "Liver blood tests", when: "With the iron tests", back: "A general check of liver health, and a baseline for the future, as iron overload mostly affects the liver." },
        { id: "genetic", front: "Genetic test", when: "If iron tests suggest it", back: "A blood test that looks for the gene variants that cause haemochromatosis. Not usually offered under 18." },
      ],
    },
    sources: [NHS_DIAGNOSIS, LU_TESTS, HUK_CARE, NHS_HC, LU_WHAT],
    quiz: {
      question: "Which results both need to be raised for haemochromatosis?",
      options: [{ text: "Ferritin and transferrin saturation", right: true }, { text: "Blood sugar and cholesterol" }, { text: "Ferritin alone is enough" }],
      why: "It's only if both ferritin and transferrin saturation are raised that you have haemochromatosis.",
    },
  },
  {
    id: "hc-venesection",
    kicker: "Treatment",
    question: "What is venesection, and what is it like?",
    hook: "Much like giving blood. Each time, the body pulls iron out of its stores to make new red cells.",
    short: "Venesection is the most commonly used treatment: about 500ml of blood is removed from a vein in your arm, much like giving blood. Your body then uses up stored iron to make new red blood cells. It is done often at first, then less often for life.",
    sections: [
      {
        heading: "Much like giving blood",
        paragraphs: [
          "The most commonly used treatment for haemochromatosis is a procedure to remove some of your blood, known as a venesection or phlebotomy. It is similar to giving blood. You lie back in a chair and a needle is used to drain a small amount of blood, usually about 500ml, from a vein in your arm.",
          "A rubber strap called a tourniquet goes around your upper arm to help your veins stand out. Once the bag is full, the needle comes out and a small dressing goes over the needle site. Each time takes out around 250mg of iron.",
        ],
      },
      {
        heading: "How it lowers iron",
        paragraphs: [
          "Your body uses iron to make red blood cells, which only last about 12 weeks. When blood is removed, your bone marrow makes more red blood cells to make up for it. It needs iron to do this, so your body moves iron from the stores in the liver.",
          "This can help relieve some of the symptoms and reduce the risk of damage to organs such as the heart, liver and pancreas. If you already have some damage, the treatment may even help your liver recover.",
        ],
      },
      {
        heading: "Two stages",
        paragraphs: [
          "In the first stage, called induction, blood is removed often, usually weekly, until your iron levels are normal. This can sometimes take up to a year or more.",
          "In maintenance, blood is removed less often, usually 2 to 4 times a year, to keep your iron levels under control. This is usually needed for the rest of your life.",
        ],
      },
      {
        heading: "Getting ready",
        paragraphs: [
          "Some people feel faint when they give blood. It can help to eat a meal an hour or two beforehand, and to drink plenty of fluids before and after. Some people take a bit of light exercise first, so they're warmed up, which can help the technician find a vein. Squeezing a stress ball can help the blood flow.",
          "You may feel tired for a couple of days afterwards, so it's worth bearing this in mind when choosing a time for your treatment.",
        ],
      },
      {
        heading: "If venesection is not possible",
        paragraphs: [
          "Chelation therapy may be used in a small number of cases where it's difficult to remove blood regularly, for example if you have very thin or fragile veins. It involves taking medicine that removes iron from your blood and releases it into your urine or poo.",
          "Chelation doesn't work as well as removing blood, and it has side effects. Another option, which removes only red blood cells, is very rarely used in the UK. Researchers are looking at new medicines, but these are not yet widely available.",
        ],
      },
    ],
    helps: [
      "Eat a meal an hour or two before venesection.",
      "Drink plenty of fluids before and after having blood taken.",
      "Take a bit of light exercise beforehand, but don't overdo it.",
      "Choose a time for treatment bearing in mind you may feel tired for a couple of days afterwards.",
      "Talk to your haemochromatosis team about any effects you think are caused by venesection.",
    ],
    tryThisWeek: [
      "Eat before your appointment.",
      "Drink plenty before and after.",
      "Plan a quieter day afterwards.",
    ],
    ask: "How often will I need venesection, and for how long?",
    interactive: {
      kind: "timeline",
      title: "A venesection, step by step",
      steps: [
        { id: "before", when: "Before", title: "Get ready", points: ["Eat a meal an hour or two beforehand", "Drink plenty of fluids", "A little light exercise can help find a vein"] },
        { id: "during", when: "During", title: "Like giving blood", points: ["You lie back in a chair", "A tourniquet helps your veins stand out", "Usually about 500ml of blood is taken"] },
        { id: "after", when: "Afterwards", title: "Rest and drink", points: ["A small dressing goes over the needle site", "Drink plenty of fluids", "You may feel tired for a couple of days"] },
        { id: "induction", when: "At first", title: "Induction", points: ["Usually weekly until iron levels are normal", "Can sometimes take up to a year or more"] },
        { id: "maintenance", when: "Then", title: "Maintenance", points: ["Usually 2 to 4 times a year", "Usually needed for the rest of your life"] },
      ],
    },
    sources: [NHS_TREATMENT, LU_TREATMENT, NHS_HC, LU_FUTURE],
    quiz: {
      question: "How much blood is usually removed at a venesection?",
      options: [{ text: "About 500ml", right: true }, { text: "About 5 litres" }, { text: "A few drops" }],
      why: "A needle is used to drain a small amount of blood, usually about 500ml, from a vein in your arm.",
    },
  },
  {
    id: "hc-targets",
    kicker: "Treatment",
    question: "What are my iron targets, and what is maintenance?",
    hook: "Ferritin is the number that steers treatment: down first, then kept low with less frequent venesection.",
    short: "Treatment is guided by your ferritin level, which shows how much iron is stored in your body. Venesection is frequent until iron levels are normal, then less frequent to keep them there. Your team adjusts the schedule to you, and checks your levels every few months.",
    sections: [
      {
        heading: "Ferritin steers treatment",
        paragraphs: [
          "Treatment is guided by your ferritin level, a blood test showing how much iron is stored in your body. Your specialist team reviews your results and decides which phase of treatment you need.",
          "Your doctor will check your ferritin and transferrin saturation every few months. This is to make sure you are having venesection often enough to keep your iron levels within a normal range.",
        ],
      },
      {
        heading: "Bringing iron down",
        paragraphs: [
          "Haemochromatosis UK says venesection continues regularly until serum ferritin is between 20 and 30 μg/l and transferrin saturation is below 50%. Depending on your iron levels at diagnosis, it may take several months to several years.",
          "At first, you may have blood taken every one or two weeks. If you have very heavy iron overload, you may need weekly treatment for a year or more.",
        ],
      },
      {
        heading: "Maintenance",
        paragraphs: [
          "Haemochromatosis UK says you reach maintenance once your serum ferritin is below 100 μg/l and transferrin saturation is below 50%. You then keep having venesection to hold your iron at normal levels, ideally where serum ferritin is below 50 μg/l.",
          "Maintenance is usually needed for the rest of your life. How often varies from person to person. Liver UK says it may be as often as every 2 months, up to every 6 months.",
        ],
      },
      {
        heading: "Targets fit the person",
        paragraphs: [
          "Everyone is different. Some people load iron rapidly and others less quickly, so your venesection schedule is adjusted to your own circumstances.",
          "Ferritin is measured in micrograms per litre. Your doctor compares your result with the normal reference range for the lab that did your test.",
        ],
      },
      {
        heading: "Regular reviews",
        paragraphs: [
          "Haemochromatosis UK says you should also be offered a periodic appointment with your consultant, every 6 or 12 months, to discuss your treatment and arrange a liver ultrasound or FibroScan.",
          "If you give blood as part of your treatment, ferritin monitoring and advice on how often to donate are still carried out by your own doctor.",
        ],
      },
    ],
    helps: [
      "Have your ferritin and transferrin saturation checked every few months, as your doctor arranges.",
      "Ask your team how your venesection schedule is adjusted to your circumstances.",
      "Keep going with maintenance venesection, which is usually needed for the rest of your life.",
      "Expect a periodic appointment with your consultant, every 6 or 12 months.",
      "Keep up ferritin monitoring with your own doctor, even if you give blood as treatment.",
    ],
    tryThisWeek: [
      "Ask for your latest ferritin result.",
      "Check your next blood test date.",
      "Ask when your consultant review is.",
    ],
    ask: "What ferritin level are we aiming for, and how often will I need venesection to keep it there?",
    interactive: {
      kind: "timeline",
      title: "From diagnosis to maintenance",
      steps: [
        { id: "start", when: "At first", title: "Bringing iron down", points: ["Blood taken every one or two weeks", "Can take several months to several years", "Ferritin checked every few months"] },
        { id: "normal", when: "Iron back to normal", title: "Reaching maintenance", points: ["Haemochromatosis UK: ferritin below 100 μg/l", "Transferrin saturation below 50%"] },
        { id: "maintain", when: "For life", title: "Keeping it there", points: ["Ideally ferritin below 50 μg/l, says Haemochromatosis UK", "Venesection less often, as your team advises"] },
        { id: "review", when: "Every 6 or 12 months", title: "Consultant review", points: ["Discuss your treatment", "Arrange a liver ultrasound or FibroScan"] },
      ],
    },
    sources: [HUK_CARE, LU_TREATMENT, NHS_TREATMENT, LU_TESTS, NHSBT, HUK_C282Y],
    quiz: {
      question: "Which blood test mainly guides venesection treatment?",
      options: [{ text: "Ferritin", right: true }, { text: "Cholesterol" }, { text: "Blood sugar" }],
      why: "Treatment is guided by your ferritin level, a blood test showing how much iron is stored in your body.",
    },
  },
  {
    id: "hc-liver-checks",
    kicker: "Checks",
    question: "Why does my liver need checking?",
    hook: "Iron is stored in the liver, so that is where damage shows first. Painless scans look for scarring.",
    short: "Everyone diagnosed with haemochromatosis needs a liver assessment, because too much stored iron can scar the liver. Blood tests, a FibroScan or an MRI look for scarring. If cirrhosis is found, regular checks look for liver cancer early.",
    sections: [
      {
        heading: "Why the liver",
        paragraphs: [
          "Everyone who is diagnosed with haemochromatosis needs to have a liver assessment. Storing too much iron can damage liver tissue. This leads to scars, which doctors call fibrosis.",
          "The liver can be very sensitive to the effects of iron, and many people with haemochromatosis will have some degree of liver damage. This often will not cause any obvious symptoms at first, but can be picked up during tests.",
        ],
      },
      {
        heading: "The tests",
        paragraphs: [
          "You may hear your doctor talk about blood tests called FIB-4 or ELF. You may also have a special ultrasound called transient elastography, or FibroScan, or an MRI of your liver. Both are painless, take about half an hour, and are done as an outpatient.",
          "Haemochromatosis UK says people with serum ferritin over 1000 μg/l should be referred to a liver specialist, to check for scarring or damage caused by high iron levels.",
          "A liver biopsy takes a sample of liver tissue to look at under a microscope. It's done less often now, because other tests are just as good. Your doctor may suggest it if your results are unclear or contradict each other.",
        ],
      },
      {
        heading: "Cirrhosis and liver cancer",
        paragraphs: [
          "If liver damage continues, it can eventually develop into cirrhosis. This means there is so much scarring that the liver can't work properly. Cirrhosis increases the risk of a type of liver cancer called hepatocellular carcinoma.",
          "With cirrhosis, you may have tiredness and weakness, loss of appetite, weight loss, feeling sick, very itchy skin, tenderness or pain around the liver, or yellowing of the eyes and skin.",
        ],
      },
      {
        heading: "Regular surveillance",
        paragraphs: [
          "If you are at risk of liver cancer, your doctor will organise regular monitoring, called surveillance. This is so any changes are picked up as early as possible, which greatly increases the chance of successful treatment.",
          "Haemochromatosis UK says that if cirrhosis is found, a liver specialist checks the liver with an ultrasound every 6 months, along with a blood test called AFP.",
        ],
      },
      {
        heading: "Other checks",
        paragraphs: [
          "Further tests may include an ECG or echo to check your heart, a rheumatology check for joint disease, checks for diabetes or Addison's disease, and a DEXA scan to check for osteoporosis.",
          "Generally, you don't need these other tests when you are diagnosed, unless you already have symptoms of iron overload.",
        ],
      },
    ],
    helps: [
      "Make sure you have a liver assessment after you are diagnosed.",
      "If your doctor organises regular surveillance, go to each check, as finding changes early greatly increases the chance of successful treatment.",
      "Ask your consultant about a liver ultrasound or FibroScan at your periodic appointment.",
      "Ask whether you need other checks, such as an ECG, a DEXA scan or diabetes tests.",
    ],
    tryThisWeek: [
      "Ask if you have had a liver assessment.",
      "Note your next scan date.",
      "Ask which other checks you need.",
    ],
    ask: "Has my liver been checked for scarring, and do I need regular surveillance?",
    interactive: {
      kind: "flip-cards",
      title: "Liver checks, card by card",
      intro: "Turn each card to see what each check looks for.",
      cards: [
        { id: "blood", front: "FIB-4 or ELF", when: "Blood tests", back: "Blood tests that give a more accurate picture of possible scarring in the liver." },
        { id: "fibroscan", front: "FibroScan", when: "A special ultrasound", back: "Measures how stiff the liver is. Painless, about half an hour, as an outpatient." },
        { id: "mri", front: "Liver MRI", when: "Another option", back: "A painless scan of the liver, taking about half an hour, as an outpatient." },
        { id: "biopsy", front: "Liver biopsy", when: "If results are unclear", back: "A sample of liver tissue looked at under a microscope. Done less often now." },
        { id: "surveillance", front: "Surveillance", when: "If you have cirrhosis", back: "Regular checks, such as an ultrasound every 6 months, so changes are picked up early." },
      ],
    },
    sources: [LU_TESTS, LU_COMPLICATIONS, NHS_DIAGNOSIS, NHS_COMPLICATIONS, HUK_CARE],
    quiz: {
      question: "Who needs a liver assessment?",
      options: [{ text: "Everyone diagnosed with haemochromatosis", right: true }, { text: "Only people with yellow skin" }, { text: "Only people who drink alcohol" }],
      why: "Everyone who is diagnosed with haemochromatosis needs to have a liver assessment.",
    },
  },
  {
    id: "hc-food",
    kicker: "Living well",
    question: "Do I need to change what I eat and drink?",
    hook: "No big diet changes, and no need to cut out iron. A few sensible swaps, and one food to avoid.",
    short: "You do not need to make big changes to your diet or avoid all foods containing iron. You'll usually be advised to avoid iron-fortified cereals, iron and vitamin C supplements, raw shellfish and drinking too much alcohol. A healthy, balanced diet is the aim.",
    sections: [
      {
        heading: "No big changes",
        paragraphs: [
          "You do not need to make any big changes to your diet, such as avoiding all foods containing iron. This is unlikely to be of much extra help if you're having treatment, and could mean you do not get all the nutrition you need.",
          "Iron is an essential part of a balanced diet, even for people with haemochromatosis, and changes to your diet cannot prevent iron overload. Haemochromatosis UK says that with a few sensible adjustments, a healthy, balanced diet can help slow the rate at which your body absorbs iron from food.",
        ],
      },
      {
        heading: "A few sensible swaps",
        paragraphs: [
          "You'll usually be advised to avoid breakfast cereals that have been fortified with extra iron. Avoid taking iron and vitamin C supplements, as these may be harmful for people with high iron levels.",
          "Don't take iron tablets, or multivitamins that contain iron. If you eat meat, you can have red meat if you want to, but have it now and then, as a treat.",
        ],
      },
      {
        heading: "Raw shellfish",
        paragraphs: [
          "Be careful not to eat raw oysters and clams. These may contain a type of bacteria that can cause serious infections in people with high iron levels.",
          "Liver UK says not to handle or eat raw or undercooked fish or shellfish. The bacteria grow more easily in iron-rich environments, which is why they are more of a risk to people with haemochromatosis.",
        ],
      },
      {
        heading: "Alcohol",
        paragraphs: [
          "Avoid drinking excessive amounts of alcohol. This can increase the level of iron in your body and put extra strain on your liver.",
          "If you've recently been diagnosed, it's best not to drink alcohol until your iron levels are back to normal. After that, it's best to stick to the UK guidelines of fewer than 14 units a week, with at least 3 alcohol-free days in a row each week. 14 units is equivalent to 6 pints of average-strength beer or 10 small glasses of lower-strength wine.",
        ],
      },
      {
        heading: "A balanced plate",
        paragraphs: [
          "As with anyone else, aim for a healthy, balanced diet, with plenty of fresh fruit and vegetables, along with some protein and carbohydrates. Avoid eating too much salt and sugar.",
          "People with haemochromatosis have a higher risk of diabetes, so it's best to try to keep to a healthy weight. Being overweight also increases the risk of liver damage from fatty liver.",
        ],
      },
    ],
    helps: [
      "Avoid breakfast cereals fortified with extra iron.",
      "Do not take iron or vitamin C supplements, or multivitamins that contain iron.",
      "Do not eat raw oysters and clams, or other raw or undercooked fish or shellfish.",
      "If you've recently been diagnosed, avoid alcohol until your iron levels are back to normal.",
      "After that, keep to fewer than 14 units a week, with at least 3 alcohol-free days in a row.",
      "If you eat red meat, have it now and then, as a treat.",
    ],
    tryThisWeek: [
      "Check your cereal for added iron.",
      "Check supplements for iron or vitamin C.",
      "Plan 3 alcohol-free days in a row.",
    ],
    ask: "Is there anything in my diet or supplements I should change?",
    interactive: {
      kind: "scenarios",
      title: "Everyday food choices",
      scenarios: [
        {
          id: "cereal",
          situation: "You're choosing a breakfast cereal.",
          options: [{ text: "One without added iron", best: true }, { text: "One fortified with extra iron" }],
          why: "You'll usually be advised to avoid breakfast cereals that have been fortified with extra iron.",
        },
        {
          id: "vitamins",
          situation: "You feel run down and think about a multivitamin.",
          options: [{ text: "Check it has no iron or vitamin C, and ask first", best: true }, { text: "Take one with iron and vitamin C" }],
          why: "Avoid iron and vitamin C supplements, and multivitamins that contain iron. These may be harmful for people with high iron levels.",
        },
        {
          id: "oysters",
          situation: "Raw oysters are on the menu.",
          options: [{ text: "Choose something else", best: true }, { text: "Have a few" }],
          why: "Raw oysters and clams may contain bacteria that can cause serious infections in people with high iron levels.",
        },
        {
          id: "new",
          situation: "You've just been diagnosed and are offered a drink.",
          options: [{ text: "Skip alcohol until iron is normal", best: true }, { text: "Drink as usual" }],
          why: "If you've recently been diagnosed, it's best not to drink alcohol until your iron levels are back to normal.",
        },
      ],
    },
    sources: [NHS_TREATMENT, LU_LIVING, HUK_LIVING_WELL, NHS_HC, NHS_UNITS],
    quiz: {
      question: "Do you need to cut out all foods containing iron?",
      options: [{ text: "No, big diet changes are not needed", right: true }, { text: "Yes, all iron must go" }, { text: "Yes, but only red meat" }],
      why: "You do not need to make any big changes to your diet, such as avoiding all foods containing iron.",
    },
  },
  {
    id: "hc-family",
    kicker: "Living well",
    question: "Should my relatives be tested?",
    hook: "Most cases are found through family testing. Brothers and sisters have the highest chance of being affected.",
    short: "Haemochromatosis runs in families, so it's important to tell your adult relatives. Brothers and sisters have at least a 1 in 4 chance of being affected, and parents and adult children should also be tested. Children's testing can usually wait until early adulthood.",
    sections: [
      {
        heading: "Why relatives matter",
        paragraphs: [
          "When you have genetic haemochromatosis, it's important to tell your adult family members, as they might be at risk of iron overload. This includes your biological parents, sisters, brothers, their children, and your own children.",
          "If a close relative has been diagnosed, you are likely to be tested before you have any symptoms. About 3 out of every 4 cases of haemochromatosis are picked up this way.",
        ],
      },
      {
        heading: "Who should be tested",
        paragraphs: [
          "If you have two copies of C282Y, doctors recommend that all your siblings, parents and adult children get tested. If you have one C282Y and one H63D, Haemochromatosis UK also recommends testing family members.",
          "Testing is particularly important for brothers and sisters, as they stand at least a 1 in 4 chance of being affected. The NHS says to see a GP if a parent or sibling has haemochromatosis, even without symptoms.",
        ],
      },
      {
        heading: "Children",
        paragraphs: [
          "Haemochromatosis UK says there are no immediate implications for babies and children under 18. Their testing can wait until they can give informed consent in early adulthood. The genetic test is not usually offered to anyone under 18.",
          "Any children of a person with two copies of C282Y will be carriers. Haemochromatosis UK says each has a small chance, approximately 1 in 20, of having genetic haemochromatosis themselves.",
        ],
      },
      {
        heading: "If you are a carrier",
        paragraphs: [
          "If you are a carrier, each of your siblings and any children you have has a 1 in 2 chance of also being a carrier.",
          "Carriers might be at risk of iron loading. Haemochromatosis UK says that with normal iron levels and no symptoms, carriers need ferritin and transferrin saturation checked every 2 to 3 years.",
        ],
      },
      {
        heading: "Taking it in",
        paragraphs: [
          "If you didn't know about a relative with haemochromatosis, it may be a shock to find out there is a genetic condition running in your family. It will take time to take this in.",
          "Whether to be tested is a personal decision. There are genetic counselling services on the NHS for anyone considering a test for a genetic condition that runs in their family.",
        ],
      },
    ],
    helps: [
      "Tell your adult family members: your parents, brothers, sisters, their children and your own children.",
      "Encourage brothers and sisters to be tested, as they have at least a 1 in 4 chance of being affected.",
      "Relatives can see a GP about testing even if they do not have symptoms.",
      "Let children's testing wait until they can give informed consent in early adulthood.",
      "Ask your doctor about NHS genetic counselling if family members are unsure about testing.",
    ],
    tryThisWeek: [
      "Make a list of adult relatives.",
      "Talk to a brother or sister first.",
      "Ask about genetic counselling.",
    ],
    ask: "Which of my family members should be tested, and how do they arrange it?",
    interactive: {
      kind: "flip-cards",
      title: "Who to tell, and why",
      intro: "Turn each card to see what it means for each relative.",
      cards: [
        { id: "siblings", front: "Brothers and sisters", when: "Most important to test", back: "They stand at least a 1 in 4 chance of being affected." },
        { id: "parents", front: "Parents", when: "Recommended to test", back: "With two copies of C282Y, doctors recommend that your parents get tested." },
        { id: "adult-children", front: "Adult children", when: "Recommended to test", back: "Children of a person with two C282Y copies will be carriers, with a small chance of having it." },
        { id: "under-18", front: "Children under 18", when: "Testing can wait", back: "No immediate implications. Testing can wait until they can give informed consent." },
        { id: "carrier-family", front: "If you are a carrier", when: "Siblings and children", back: "Each has a 1 in 2 chance of also being a carrier." },
      ],
    },
    sources: [HUK_FAMILY, HUK_CARE, NHS_HC, LU_WHAT, LU_TESTS, HUK_C282Y, HUK_GENETICS, HUK_CARRIERS],
    quiz: {
      question: "Which relatives have the highest chance of being affected?",
      options: [{ text: "Brothers and sisters", right: true }, { text: "Cousins" }, { text: "Partners" }],
      why: "Testing is particularly important for brothers and sisters, as they stand at least a 1 in 4 chance of being affected.",
    },
  },
  {
    id: "hc-joints",
    kicker: "Living well",
    question: "Why do my joints hurt, and what helps?",
    hook: "The most common symptom, and the one venesection does least for. Moving, pacing and pain relief help.",
    short: "Joint pain is very common in haemochromatosis, often in the hands, hips and ankles. Removing iron makes little difference to joint pain, so treatment aims to ease pain and stiffness. Keeping active, a healthy weight, painkillers and physiotherapy can help.",
    sections: [
      {
        heading: "Very common",
        paragraphs: [
          "Excess iron can damage your joints, leading to arthritis. Liver UK says more than 8 out of 10 people with haemochromatosis have pains in their joints, most often in the hips and ankles or hands and wrists.",
          "Haemochromatosis UK says arthritis is particularly common in the knuckle and first joint of the first two fingers.",
        ],
      },
      {
        heading: "What happens in the joint",
        paragraphs: [
          "Haemochromatosis joint disease leads to thinning and loss of cartilage in a joint, bone bruising, and new bone growth around the edge of the joint. The links between the genes, iron and joint damage are not completely understood.",
          "Joint pain in haemochromatosis is similar to osteoarthritis in the pain it causes. But it usually starts at a younger age than you'd expect with arthritis.",
        ],
      },
      {
        heading: "Venesection may not help the joints",
        paragraphs: [
          "Unfortunately, treatment with venesection doesn't seem to help with joint pain. Most patients find that removing excess iron makes little difference to joint stiffness or pain.",
          "Arthritis is also common in people who have regular treatment to keep iron levels under control. So treatment for the joints aims to reduce pain, swelling and stiffness and improve how they work.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "Although you may feel like doing the opposite, keeping active helps reduce pain and stiffness in the long term. Keeping to a healthy weight will help reduce strain on your joints too.",
          "It may be possible to relieve symptoms with hand exercises, painkillers and steroid medicine. You can take anti-inflammatory medicines, such as ibuprofen, but don't take them on an empty stomach, as they can damage your stomach lining.",
        ],
      },
      {
        heading: "More help",
        paragraphs: [
          "If you are having trouble coping, speak to your doctor. It may help to see a physiotherapist.",
          "If significant damage has occurred, it may be necessary to replace the joint with an artificial one. On average, people with haemochromatosis need this surgery at a younger age than people without it. At later stages, surgery can be a very effective way of controlling pain.",
        ],
      },
    ],
    helps: [
      "Keep active: it helps reduce pain and stiffness in the long term.",
      "Keep to a healthy weight to reduce strain on your joints.",
      "Ask about hand exercises.",
      "Don't take anti-inflammatory medicines such as ibuprofen on an empty stomach.",
      "If you are having trouble coping, speak to your doctor and ask about seeing a physiotherapist.",
    ],
    tryThisWeek: [
      "Keep moving, a little each day.",
      "Take ibuprofen with food.",
      "Ask about a physiotherapist.",
    ],
    ask: "What can I do about my joint pain, and would a physiotherapist help?",
    interactive: {
      kind: "scenarios",
      title: "Moments with sore joints",
      scenarios: [
        {
          id: "stiff",
          situation: "Your knuckles are stiff and you want to rest them all day.",
          options: [{ text: "Keep gently active", best: true }, { text: "Stop using them completely" }],
          why: "Although you may feel like doing the opposite, keeping active helps reduce pain and stiffness in the long term.",
        },
        {
          id: "ibuprofen",
          situation: "You take ibuprofen first thing, before breakfast.",
          options: [{ text: "Take it with food instead", best: true }, { text: "Carry on on an empty stomach" }],
          why: "Don't take anti-inflammatory medicines on an empty stomach, as they can damage your stomach lining.",
        },
        {
          id: "venesection",
          situation: "Your iron is under control, but your joints still hurt.",
          options: [{ text: "Talk to your doctor about joint care", best: true }, { text: "Ask for more venesection to fix it" }],
          why: "Venesection doesn't seem to help with joint pain. If you are having trouble coping, speak to your doctor; a physiotherapist may help.",
        },
      ],
    },
    sources: [NHS_COMPLICATIONS, LU_LIVING, LU_COMPLICATIONS, HUK_ARTHROPATHY, LU_SYMPTOMS, HUK_SYMPTOMS],
    quiz: {
      question: "Does venesection usually ease joint pain?",
      options: [{ text: "No, it doesn't seem to help joint pain", right: true }, { text: "Yes, it always cures it" }, { text: "Yes, after one session" }],
      why: "Unfortunately, treatment with venesection doesn't seem to help with joint pain.",
    },
  },
  {
    id: "hc-blood-donation",
    kicker: "Living well",
    question: "Can I give blood as my treatment?",
    hook: "Many people can. The blood is perfectly healthy, and each donation can help patients who need it.",
    short: "Some people with haemochromatosis can donate blood as part of their treatment, and their blood can help others. You need a ferritin level within or close to normal, no organ damage from iron, and to meet the other donor rules. Your own doctor still monitors your ferritin.",
    sections: [
      {
        heading: "Treatment that helps others",
        paragraphs: [
          "Some people with genetic haemochromatosis may be able to donate blood as part of their treatment. For some, donating can be a suitable alternative to hospital venesection, and the donation can help save and improve the lives of patients who need blood.",
          "The blood is perfectly healthy. Haemochromatosis can't be passed on to anyone else, because it is a genetic condition.",
        ],
      },
      {
        heading: "Who can donate",
        paragraphs: [
          "NHS Blood and Transplant says you can donate if you have a ferritin level within or close to the normal range, have your ferritin monitored regularly, are generally fit and well, have no organ damage caused by haemochromatosis, and meet all the other criteria for donating.",
          "Haemochromatosis UK says people taking medicines for their condition, such as iron chelators, cannot donate. First-time donors need to be between 17 and 66 years old.",
        ],
      },
      {
        heading: "How often",
        paragraphs: [
          "Since January 2023, donors with haemochromatosis in England can donate as often as every 6 weeks, and do not need to be in maintenance. NHS Blood and Transplant suggests contacting them once you have been told that donating every 6 weeks or more will be suitable for you.",
          "Carriers do not usually develop the condition, and can donate at the usual frequency of every 12 to 16 weeks.",
        ],
      },
      {
        heading: "Registering",
        paragraphs: [
          "If you meet the criteria, call NHS Blood and Transplant on 0300 123 23 23 to talk through whether blood donation is right for you. If you struggle to get an appointment, the Give Blood team's helpline on 0300 303 2732 can arrange a prioritised one.",
          "The rules vary slightly in Northern Ireland, Scotland and Wales. In Scotland, people who have not yet reached maintenance cannot become blood donors.",
        ],
      },
      {
        heading: "Your doctor still leads",
        paragraphs: [
          "This is just a donation service. Ferritin monitoring and advice on how often to donate are still carried out by your own doctor.",
          "The Blood Transfusion Service will register you as a haemochromatosis blood donor, as you'll be giving blood more often than is usual.",
        ],
      },
    ],
    helps: [
      "Ask your GP or specialist team whether your ferritin is within or close to the normal range.",
      "Call 0300 123 23 23 once you have been told that donating every 6 weeks or more is suitable for you.",
      "If you live in Northern Ireland, Scotland or Wales, check your own blood service's rules.",
      "Keep having your ferritin monitored by your own doctor while you donate.",
      "If you struggle to book a donor appointment, call 0300 303 2732.",
    ],
    tryThisWeek: [
      "Ask if your ferritin is near normal.",
      "Ask if 6-weekly donation suits you.",
      "Call the Give Blood team.",
    ],
    ask: "Could I have my venesection as a blood donor, and how often?",
    interactive: {
      kind: "scenarios",
      title: "Could you donate?",
      scenarios: [
        {
          id: "organ",
          situation: "Iron overload has already damaged an organ.",
          options: [{ text: "Keep having venesection in clinic", best: true }, { text: "Register as a donor" }],
          why: "To donate, you need to have no organ damage caused by haemochromatosis.",
        },
        {
          id: "carrier",
          situation: "You are a carrier with one faulty gene.",
          options: [{ text: "Donate at the usual frequency", best: true }, { text: "Donate every 6 weeks" }],
          why: "Carriers do not usually develop the condition and can donate at the usual frequency of every 12 to 16 weeks.",
        },
        {
          id: "booking",
          situation: "You can't find a donor appointment that fits.",
          options: [{ text: "Call 0300 303 2732", best: true }, { text: "Skip your treatment" }],
          why: "The Give Blood team's helpline on 0300 303 2732 can arrange a prioritised appointment.",
        },
        {
          id: "monitoring",
          situation: "You now donate regularly instead of going to clinic.",
          options: [{ text: "Keep up ferritin checks with your doctor", best: true }, { text: "Stop having blood tests" }],
          why: "This is just a donation service. Ferritin monitoring is still carried out by your own doctor.",
        },
      ],
    },
    sources: [NHSBT, HUK_DONATE, HUK_DONATE_ENGLAND, LU_TREATMENT],
    quiz: {
      question: "Who monitors your ferritin when you give blood as treatment?",
      options: [{ text: "Your own doctor", right: true }, { text: "The donation centre" }, { text: "Nobody, it is not needed" }],
      why: "This is just a donation service. Ferritin monitoring and advice on how often to donate are still carried out by your own doctor.",
    },
  },
  {
    id: "hc-living",
    kicker: "Living well",
    question: "How do I live well with haemochromatosis?",
    hook: "Usually well controlled with treatment. Tiredness and sore joints are the parts that need managing.",
    short: "Haemochromatosis is usually well controlled these days, and with treatment as needed people have a normal life expectancy. Many people still have tiredness and joint pain, which can be managed. Support is there from nurse helplines, employers and your own team.",
    sections: [
      {
        heading: "Usually well controlled",
        paragraphs: [
          "Haemochromatosis is usually well controlled these days. Providing you stick to your treatment schedule, you are unlikely to develop any serious health problems because of it. With treatment as needed, people with haemochromatosis have a normal life expectancy.",
          "However, many people do have some symptoms, particularly fatigue and joint pain.",
        ],
      },
      {
        heading: "Taking in the diagnosis",
        paragraphs: [
          "Even if you never develop haemochromatosis, being told you have the gene variants may still have an impact on you. Knowing that you could pass it on to your children can be upsetting.",
          "There's no right or wrong way to feel, so give yourself time to come to terms with it. Many people who are diagnosed know others in their family who have it, and can talk it over with them.",
        ],
      },
      {
        heading: "Coping with fatigue",
        paragraphs: [
          "Many people with haemochromatosis have problems with fatigue, even without iron overload. You can't fight your way through it; it's more a case of learning how to manage it. Noticing the times of day and the activities that make it better or worse can help you adjust your routine.",
          "Exercise can help with fatigue and with mental health. Weight-bearing exercise, such as walking, running or dancing, is good for your bones, but don't overdo it. If you're struggling, speak to your doctor, as tests may show something else making it worse, such as low thyroid hormone levels.",
        ],
      },
      {
        heading: "Bones and blood sugar",
        paragraphs: [
          "Even if your iron levels are controlled with treatment, you may have a higher than normal risk of thinning bones, called osteoporosis. Your doctor may suggest a bone density scan.",
          "Controlling your iron levels reduces your risk of diabetes. Tell your doctor if you notice symptoms such as peeing more often, feeling very thirsty or losing weight.",
        ],
      },
      {
        heading: "Work, insurance and support",
        paragraphs: [
          "Liver UK says haemochromatosis is a protected condition under the Equality Act 2010. Employers have to make reasonable adjustments, which includes time off for tests and treatment. The Association of British Insurers has a code of practice which prevents insurers denying cover to people with genetic haemochromatosis.",
          "Haemochromatosis UK's nurse help line is on 03030 401 102, Monday to Friday, from noon to 3pm. Liver UK's nurse-led helpline is on 0800 652 7330, from 9am to 4pm on weekdays.",
        ],
      },
    ],
    helps: [
      "Stick to your treatment schedule.",
      "Notice the times and activities that make fatigue better or worse, and adjust your routine.",
      "Accept help from family and friends if you're struggling.",
      "Speak to your doctor if fatigue is hard to cope with, as tests may show something else making it worse.",
      "Tell your doctor if you notice peeing more often, feeling very thirsty or losing weight.",
      "Call a nurse helpline: Haemochromatosis UK on 03030 401 102, or Liver UK on 0800 652 7330.",
    ],
    tryThisWeek: [
      "Keep your next treatment date.",
      "Note when tiredness is worst.",
      "Save a nurse helpline number.",
    ],
    ask: "Could anything else be making my tiredness worse, and do I need a bone density scan?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        {
          id: "work",
          situation: "You need time off work for blood tests.",
          options: [{ text: "Ask your employer for reasonable adjustments", best: true }, { text: "Keep it quiet and miss the tests" }],
          why: "Haemochromatosis is a protected condition under the Equality Act. Employers have to make reasonable adjustments, including time off for tests and treatment.",
        },
        {
          id: "fatigue",
          situation: "Tiredness is getting on top of you.",
          options: [{ text: "Speak to your doctor", best: true }, { text: "Push through it alone" }],
          why: "You can't fight your way through it. Speak to your doctor; tests may show something else making it worse.",
        },
        {
          id: "insurance",
          situation: "You're buying travel insurance.",
          options: [{ text: "Tell the insurer about your diagnosis", best: true }, { text: "Leave it off the form" }],
          why: "Haemochromatosis UK recommends disclosing it, to make sure you are fully covered during your trip.",
        },
        {
          id: "talk",
          situation: "You've just been diagnosed and feel unsettled.",
          options: [{ text: "Give yourself time, and talk to someone", best: true }, { text: "Keep it all to yourself" }],
          why: "There's no right or wrong way to feel. Nurse helplines, support groups and family can help.",
        },
      ],
    },
    sources: [LU_LIVING, LU_COMPLICATIONS, HUK_HELPLINE, LU_HELPLINE, LU_OVERVIEW, HUK_FAQ, NHS_HC],
    quiz: {
      question: "What can employers do for someone with haemochromatosis?",
      options: [{ text: "Make reasonable adjustments, like time off for treatment", right: true }, { text: "Nothing, it is not covered" }, { text: "Ask for genetic test results" }],
      why: "Employers have to make reasonable adjustments, which includes time off for tests and treatment.",
    },
  },
];
