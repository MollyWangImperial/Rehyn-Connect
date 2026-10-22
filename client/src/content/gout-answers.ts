import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Gout page's pieces (content/library-conditions/metabolism-more.ts). Every
// sentence was written from wording checked on 21 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, Arthritis UK (the
// charity formerly called Versus Arthritis; versusarthritis.org now redirects to arthritis-uk.org), the UK
// Gout Society, NICE's gout guideline (NG219) and NICE's Clinical Knowledge Summary on gout, with the
// government's Access to Work page for work. Urgent advice is worded as the NHS words it. General
// information only; it never replaces what a person's own GP, nurse or rheumatologist tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const au = (label: string, path: string): LearnSource => ({ label: `Arthritis UK: ${label}`, url: `https://www.arthritis-uk.org/${path}` });
const ukgs = (label: string, path: string): LearnSource => ({ label: `UK Gout Society: ${label}`, url: `https://www.ukgoutsociety.org/${path}` });
const cks = (label: string, path: string): LearnSource => ({ label: `NICE Clinical Knowledge Summaries: ${label}`, url: `https://cks.nice.org.uk/topics/gout/${path}` });

const NHS_GOUT = nhs("Gout", "conditions/gout/");
const NHS_ALLOPURINOL = nhs("Allopurinol", "medicines/allopurinol/");
const NHS_COLCHICINE = nhs("Colchicine", "medicines/colchicine/");
const NHS_NAPROXEN = nhs("Naproxen", "medicines/naproxen/");
const NHS_KIDNEY_STONES = nhs("Kidney stones", "conditions/kidney-stones/");
const NHS_ALCOHOL_UNITS = nhs("Alcohol units", "live-well/alcohol-advice/calculating-alcohol-units/");
const NHS_ACTIVITY = nhs("Physical activity guidelines for adults aged 19 to 64", "live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/");

const AU_GOUT = au("Gout", "information-and-support/understanding-arthritis/conditions/gout/");
const AU_ALLOPURINOL = au("Allopurinol", "information-and-support/understanding-arthritis/arthritis-treatments/drugs/allopurinol/");
const AU_FEBUXOSTAT = au("Febuxostat", "information-and-support/understanding-arthritis/arthritis-treatments/drugs/febuxostat/");
const AU_COLCHICINE = au("Colchicine", "information-and-support/understanding-arthritis/arthritis-treatments/drugs/colchicine/");
const AU_FOOTCARE = au("Footcare and footwear", "information-and-support/living-with-arthritis/health-and-wellbeing/footcare-and-footwear/");
const AU_ADJUSTMENTS = au("Applying for reasonable adjustments", "information-and-support/living-with-arthritis/work-benefits-and-finances/work-and-arthritis/applying-for-reasonable-adjustments/");
const AU_MYTHS = au("Busting the myths of gout", "news/2020/august/busting-the-myths-of-gout/");
const AU_MALCOLM = au("Malcolm's story: gout is treatable", "news/2023/july/malcolm-s-story-gout-is-treatable-so-get-informed-and-be-involved-in-your-own-care/");

const UKGS_HOME = ukgs("Home", "");
const UKGS_SUPPORT = ukgs("Information and support (check your risk)", "information-and-support/");
const UKGS_TREATMENT = ukgs("All about gout and treatment", "gout-and-treatment/");
const UKGS_DIET = ukgs("All about gout and diet", "gout-and-diet/");
const UKGS_CONDITIONS = ukgs("Gout and other health problems", "gout-and-other-health-conditions/");

const NICE_NG219: LearnSource = { label: "NICE: Gout: diagnosis and management (NG219), recommendations", url: "https://www.nice.org.uk/guidance/ng219/chapter/Recommendations" };
const CKS_CAUSES = cks("Gout, causes and risk factors", "background-information/causes-risk-factors/");
const CKS_COMPLICATIONS = cks("Gout, complications", "background-information/complications/");
const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };

export const goutAnswers: LearnArticle[] = [
  {
    id: "gout-what-it-is",
    kicker: "Understanding",
    question: "What is gout?",
    hook: "Tiny, sharp crystals of uric acid inside a joint. Usually the big toe, often at night, and very painful.",
    short: "Gout is a type of arthritis that causes sudden, severe joint pain. It happens when there is too much uric acid, also called urate, in the blood, and crystals form in and around the joints. Attacks can be treated, and gout is very treatable in the long term.",
    sections: [
      {
        heading: "Uric acid and crystals",
        paragraphs: [
          "Gout is a painful form of arthritis caused by uric acid crystals that form in and around the joints. It is the most common type of inflammatory arthritis.",
          "We all have urate in our blood, and this is normal and healthy. Urate is made every day when the body breaks down purines, chemicals made naturally in the body and also found in some foods. If levels stay too high, crystals can slowly form, mainly in and around firm joint tissues such as cartilage.",
        ],
      },
      {
        heading: "What an attack is",
        paragraphs: [
          "Urate crystals can build up in a joint for years without you knowing they are there. When there are a lot of them, some spill out into the space between the two bones in the joint.",
          "These tiny, hard, sharp crystals rub against the soft lining of the joint, called the synovium, causing pain, swelling and inflammation. This is known as an attack or flare of gout.",
        ],
      },
      {
        heading: "What it feels like",
        paragraphs: [
          "The main symptoms are sudden severe pain in a joint, usually the big toe, and hot, swollen, red skin over the joint. Redness may be harder to see on black or brown skin.",
          "Attacks usually come on very quickly, often during the night, and feel worst within the first 12 to 24 hours. Any light contact is very painful: even the weight of a bedsheet or wearing a sock can be unbearable.",
        ],
      },
      {
        heading: "Other joints",
        paragraphs: [
          "Gout can also affect other joints in the feet, ankles, hands, wrists, elbows or knees. Several joints can be affected at the same time.",
          "Attacks are especially common in joints at the ends of the legs and arms, such as the fingers and toes. This may be because these parts of the body are cooler, and low temperatures make crystals more likely to form.",
        ],
      },
      {
        heading: "How long it lasts",
        paragraphs: [
          "An attack usually lasts one to two weeks if left untreated. Without treatment, future attacks may last even longer, and leaving gout untreated may cause lasting damage to joints.",
          "Gout can come back every few months, or it may be years. The UK Gout Society describes it as a painful, potentially disabling, but very treatable condition.",
        ],
      },
    ],
    helps: [
      "See a GP if you have symptoms of gout for the first time.",
      "See a GP if you have gout and your usual treatments are not helping.",
      "Ask for an urgent GP appointment or get help from NHS 111 if a sudden painful, swollen joint is getting worse, or you also have a very high temperature, feel hot, cold or shivery, feel sick or cannot eat.",
      "If you have frequent attacks or high levels of uric acid, ask about uric acid-lowering medicine.",
    ],
    tryThisWeek: [
      "See a GP about a first attack.",
      "Know when to call NHS 111.",
      "Ask about uric acid-lowering medicine.",
    ],
    ask: "Is this gout, and is my uric acid high enough to need long-term treatment?",
    interactive: {
      kind: "signs",
      title: "Signs of a gout attack",
      intro: "Tick any you have noticed. They can help the GP decide if it is gout.",
      signs: ["Sudden severe pain in a joint", "Pain at the base of the big toe", "Hot, swollen, red skin over it", "It started during the night", "A bedsheet touching it is painful", "Shiny skin over the joint", "A very high temperature as well", "Feeling sick or unable to eat"],
      after: "See a GP if this is your first attack. Ask for an urgent GP appointment or get help from NHS 111 if the pain is getting worse, or you also have a very high temperature or feel sick: it could be an infection inside the joint.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_GOUT, AU_GOUT, UKGS_HOME],
    quiz: {
      question: "What causes the pain of a gout attack?",
      options: [{ text: "Sharp urate crystals rubbing the joint lining", right: true }, { text: "Cartilage that has worn away" }, { text: "A pulled muscle near the joint" }],
      why: "These tiny, hard, sharp crystals rub against the soft lining of the joint, called the synovium, causing pain, swelling and inflammation.",
    },
  },
  {
    id: "gout-causes",
    kicker: "Causes",
    question: "Why does gout happen?",
    hook: "Most urate is made by your own body, not eaten. Genes, kidneys, some medicines and other conditions all play a part.",
    short: "Gout happens when the body makes too much urate, or the kidneys cannot get rid of enough of it. About three-quarters of urate comes from the body's own breakdown of purines, and only about a quarter from food and drink. Family history, age, some medicines and other conditions all raise the chance.",
    sections: [
      {
        heading: "Not just food and drink",
        paragraphs: [
          "People used to think gout was caused by overeating and drinking too much alcohol. While these can make attacks more likely, it is not the whole story.",
          "On any day, about three-quarters of the urate in the body comes from purines made within the body, and only about a quarter from food and drink. If the body makes too much urate, or the kidneys cannot get rid of enough of it, levels start to rise.",
        ],
      },
      {
        heading: "Genes and family",
        paragraphs: [
          "Gout sometimes runs in families. Even when the kidneys are completely healthy, the genes you inherit can mean they do not flush urate out as well as they should.",
          "This is the most common cause of primary gout, especially when several family members, such as parents or grandparents, are affected.",
        ],
      },
      {
        heading: "Men, women and age",
        paragraphs: [
          "Gout is about four times more common in men than women. It can affect men of any age, but the risk is greater with age.",
          "Women rarely develop gout before the menopause, because the hormone oestrogen increases how much urate the kidneys filter out. After the menopause, oestrogen levels go down and urate levels go up.",
        ],
      },
      {
        heading: "Weight, medicines and other conditions",
        paragraphs: [
          "Gout is much more common in people who are overweight, because the body produces more urate. You might also have a higher chance if you drink alcohol, or have had surgery or an injury.",
          "Some medicines reduce how well the kidneys get rid of urate, including diuretics, or water tablets, and some tablets for high blood pressure. High cholesterol, high blood pressure, kidney problems, osteoarthritis and diabetes are also linked with gout.",
        ],
      },
      {
        heading: "What sets off an attack",
        paragraphs: [
          "An attack can be triggered by an illness with a high temperature, a knock or injury to the joint, an operation, a very large meal, drinking too much alcohol, or getting dehydrated.",
          "Starting urate-lowering medicine, especially at a high dose, or not taking it regularly each day, can also trigger an attack.",
        ],
      },
    ],
    helps: [
      "If you take water tablets or tablets for high blood pressure and are concerned, speak to your doctor about the risks.",
      "Drink plenty of fluids to avoid getting dehydrated.",
      "Get treatment immediately if you feel an attack starting.",
      "If you take urate-lowering medicine, take it regularly every day.",
      "Answer the UK Gout Society's simple quiz to see if you may be at increased risk.",
    ],
    tryThisWeek: [
      "Ask your doctor about your medicines.",
      "Drink plenty of fluids.",
      "Take your medicine every day.",
    ],
    ask: "Could any of my medicines or other conditions be raising my urate?",
    interactive: {
      kind: "risk-check",
      title: "What raises the chance of gout?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "family", label: "Family members with gout", note: "Inherited genes can mean the kidneys do not flush urate out as well as they should.", changeable: false },
        { id: "male", label: "Being a man", note: "Gout is about four times more common in men than women.", changeable: false },
        { id: "age", label: "Getting older", note: "The risk of gout is greater as you get older.", changeable: false },
        { id: "menopause", label: "Having been through the menopause", note: "After the menopause, oestrogen levels go down and urate levels go up.", changeable: false },
        { id: "conditions", label: "Kidney problems, high blood pressure", note: "These, with high cholesterol, osteoarthritis and diabetes, are linked with gout.", changeable: false },
        { id: "alcohol", label: "Drinking alcohol", note: "Too much alcohol, especially beer and spirits, can raise urate levels.", changeable: true },
        { id: "medicines", label: "Water tablets or some BP tablets", note: "They can reduce how well the kidneys get rid of urate. Speak to your doctor if you are concerned.", changeable: true },
        { id: "fluids", label: "Often getting dehydrated", note: "Getting dehydrated can trigger an attack. Drink plenty of fluids.", changeable: true },
      ],
    },
    sources: [NHS_GOUT, AU_GOUT, UKGS_SUPPORT],
    quiz: {
      question: "Where does most of the urate in the body come from?",
      options: [{ text: "Purines made within the body itself", right: true }, { text: "Red meat and seafood" }, { text: "Beer and spirits" }],
      why: "On any day, about three-quarters of the urate in the body comes from purines made within the body, and only about a quarter from food and drink.",
    },
  },
  {
    id: "gout-diagnosis",
    kicker: "Diagnosis",
    question: "How is gout diagnosed?",
    hook: "Often the joint tells the story. A blood test supports it, and a sample of joint fluid can confirm it.",
    short: "A GP will ask about your symptoms, diet and alcohol, and may test how much uric acid is in your blood. The blood test supports the diagnosis but is not enough on its own. If it is still unclear, a specialist can take a sample of fluid from the joint to look for crystals, or arrange a scan.",
    sections: [
      {
        heading: "At the appointment",
        paragraphs: [
          "The GP may ask about your diet and whether you drink alcohol. Diagnosing gout is usually straightforward when the symptoms are typical, such as an attack in the big toe.",
          "But gout can sometimes be more difficult to diagnose. Similar attacks can be caused by a condition called acute calcium pyrophosphate crystal arthritis, which used to be called pseudogout.",
        ],
      },
      {
        heading: "The blood test",
        paragraphs: [
          "A blood test measures how much uric acid, or urate, is in your blood. It can support a diagnosis of gout, but it is not enough to confirm it on its own.",
          "It is possible to have high urate levels without any other symptoms of gout. Around 95% of people with a high urate level never develop gout.",
        ],
      },
      {
        heading: "The number that confirms it",
        paragraphs: [
          "NICE says a urate level of 360 micromol per litre or more, in someone with the symptoms and signs of gout, confirms the diagnosis.",
          "If the level is below 360 during an attack and gout is strongly suspected, NICE says the test should be repeated at least two weeks after the attack has settled.",
        ],
      },
      {
        heading: "Joint fluid and scans",
        paragraphs: [
          "If the test is still unclear, a GP may refer you to a specialist, a rheumatologist, and arrange further tests. This could include taking a sample of fluid from inside the joint with a thin needle.",
          "The fluid is examined under a microscope for urate crystals. This is a good way to confirm the diagnosis and rule out other causes. If you have tophi, a sample can be taken from one of those instead.",
          "If a fluid sample cannot be taken or the diagnosis is still unclear, a scan will be arranged. Ultrasound and CT scans can be good at spotting crystals and early signs of gout, and X-rays pick up joint damage from long-standing gout.",
        ],
      },
      {
        heading: "When it might be something else",
        paragraphs: [
          "If you have a sudden pain and swelling in a joint and the pain is getting worse, or you also have a very high temperature, feel hot, cold or shivery, feel sick or cannot eat, ask for an urgent GP appointment or get help from NHS 111.",
          "These symptoms could mean you have an infection inside your joint and need urgent medical help. You can call 111 or get help from 111 online.",
        ],
      },
    ],
    helps: [
      "Tell the GP about your symptoms, what you eat and whether you drink alcohol.",
      "If your urate was tested during an attack and was not high, ask whether it should be repeated once the attack has settled.",
      "Ask for an urgent GP appointment or get help from NHS 111 if a swollen joint is getting worse, or comes with a very high temperature or feeling sick.",
      "If the diagnosis is uncertain, ask whether a referral to a rheumatology service could help.",
    ],
    tryThisWeek: [
      "Note your symptoms for the GP.",
      "Ask if the test needs repeating.",
      "Know the urgent warning signs.",
    ],
    ask: "Does my blood test confirm gout, or do I need a joint fluid test or a scan?",
    interactive: {
      kind: "scenarios",
      title: "Making sense of the tests",
      scenarios: [
        {
          id: "high-no-attack",
          situation: "Your urate is high, but you have never had an attack.",
          options: [{ text: "It does not prove gout by itself", best: true }, { text: "It means you definitely have gout" }],
          why: "It is possible to have high urate levels without any other symptoms of gout. Around 95% of people with a high urate level never develop gout.",
        },
        {
          id: "low-in-attack",
          situation: "Your urate was below 360 during an attack, but gout is strongly suspected.",
          options: [{ text: "Repeat the test after the attack settles", best: true }, { text: "Rule gout out" }],
          why: "NICE says the test should be repeated at least two weeks after the attack has settled.",
        },
        {
          id: "unclear",
          situation: "The diagnosis is still unclear after the blood test.",
          options: [{ text: "A joint fluid test or a scan", best: true }, { text: "Nothing more can be done" }],
          why: "A GP may refer you to a rheumatologist for a sample of joint fluid. If that cannot be done, a scan will be arranged.",
        },
        {
          id: "fever",
          situation: "Your swollen joint is getting worse and you feel hot and shivery.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Wait a few days to see" }],
          why: "These symptoms could mean you have an infection inside your joint and need urgent medical help.",
        },
      ],
    },
    sources: [NHS_GOUT, AU_GOUT, CKS_CAUSES, NICE_NG219],
    quiz: {
      question: "Can a blood test alone confirm gout?",
      options: [{ text: "No, it supports the diagnosis with the symptoms", right: true }, { text: "Yes, a high level always means gout" }, { text: "Yes, a normal level always rules it out" }],
      why: "A blood test can support a diagnosis of gout, but it is not enough to confirm it on its own.",
    },
  },
  {
    id: "gout-complications",
    kicker: "Complications",
    question: "What can gout lead to if it is not treated?",
    hook: "Years of repeated attacks can leave lumps under the skin, stones in the kidneys and damaged joints. Treatment stops most of it.",
    short: "Without treatment, repeated attacks over a long time can lead to joint damage, hard lumps called tophi, kidney stones and, rarely, chronic arthritis. Most of the damage and complications of gout can be stopped by taking medicine to lower urate and having a healthy diet and lifestyle.",
    sections: [
      {
        heading: "If attacks keep coming",
        paragraphs: [
          "If you get repeated attacks of gout over a long period of time, called chronic gout, and it is not treated, it can lead to damage in your joints, tophi, kidney stones and, rarely, chronic arthritis.",
          "Without medicine, attacks tend to happen more often, and other joints can become affected.",
        ],
      },
      {
        heading: "Tophi",
        paragraphs: [
          "Urate crystals can collect outside the joints and form small, firm lumps under the skin called tophi. You can sometimes see the white colour of the crystals. Without treatment, around half of people with gout have tophi after ten years.",
          "Tophi are most common over the toes, the back of the heel, the front of the knee, the fingers, wrists, elbows and ears. They can be painful and have an impact on daily life, and can sometimes become inflamed and leak a gritty white material, which is the urate crystals.",
        ],
      },
      {
        heading: "Joint damage",
        paragraphs: [
          "Tophi can also grow within joints and damage cartilage and bone. This can lead to more regular, daily pain when you use the affected joints.",
          "If gout has damaged a joint, treatment is similar to that for osteoarthritis: exercising regularly, reducing the strain on the joint, staying at a healthy weight, painkillers and, in more severe cases, joint replacement surgery.",
        ],
      },
      {
        heading: "Kidney stones",
        paragraphs: [
          "Urate crystals can also form in internal organs such as the kidneys, and kidney stones are one of the complications of untreated gout. They are found in around 14% of people with gout.",
          "Larger kidney stones can be very painful, with pain that usually starts in the side of the tummy or lower back. If you think you have kidney stones and you are in severe pain or have a high temperature, ask for an urgent GP appointment or get help from NHS 111.",
        ],
      },
      {
        heading: "Most of it can be stopped",
        paragraphs: [
          "Most of the damage and complications caused by gout can be stopped by taking medicine to lower urate and having a healthy diet and lifestyle.",
          "It can take a few months or years for the medicine to clear the crystals, but once they are gone there are no more attacks, tophi or risk of joint damage from gout. Once the target urate level is reached, tophi will often gradually reduce.",
        ],
      },
    ],
    helps: [
      "Take uric acid-lowering medicine regularly, even when you no longer have symptoms.",
      "If you have tophi, ask about urate-lowering medicine: NICE says it should be offered.",
      "If you have gout and a history of kidney stones, try to drink at least two litres of water a day.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you think you have kidney stones and are in severe pain or have a high temperature.",
      "If gout has damaged a joint, keep exercising regularly and reduce the strain on it.",
    ],
    tryThisWeek: [
      "Take your medicine every day.",
      "Ask about medicine if you have tophi.",
      "Drink two litres if you have had stones.",
    ],
    ask: "Are there any signs of tophi, joint damage or kidney stones, and would lowering my urate help?",
    interactive: {
      kind: "flip-cards",
      title: "Four complications",
      intro: "Tap each card to see what it is.",
      cards: [
        { id: "tophi", front: "Tophi", when: "Crystals collect under the skin", back: "Small, firm lumps, often on the ears, fingers, elbows or toes. They often gradually reduce once urate reaches its target." },
        { id: "joint", front: "Joint damage", when: "Tophi grow inside a joint", back: "Damage to cartilage and bone, with more regular, daily pain when the joint is used." },
        { id: "stones", front: "Kidney stones", when: "Crystals form in the kidneys", back: "Found in around 14% of people with gout. Larger stones can cause severe pain in the side or lower back." },
        { id: "chronic", front: "Chronic arthritis", when: "After years of untreated attacks", back: "Rare, says the NHS. Most damage can be stopped with medicine that lowers urate." },
      ],
    },
    sources: [NHS_GOUT, AU_GOUT, CKS_COMPLICATIONS, NHS_KIDNEY_STONES, UKGS_TREATMENT, NICE_NG219],
    quiz: {
      question: "Can the complications of gout be prevented?",
      options: [{ text: "Most can, with medicine that lowers urate", right: true }, { text: "No, they always happen in the end" }, { text: "Only with surgery" }],
      why: "Most of the damage and complications caused by gout can be stopped by taking medicine to lower urate and having a healthy diet and lifestyle.",
    },
  },
  {
    id: "gout-attack",
    kicker: "Treatment",
    question: "What helps during a gout attack?",
    hook: "Start the medicine at the first sign. The earlier, the better.",
    short: "Attacks are usually treated with an anti-inflammatory painkiller (an NSAID) such as naproxen, with colchicine, or with a short course of steroids. Take any prescribed medicine as soon as possible: it should start to work within two days. Treating an attack eases it, but does not lower urate or stop future attacks.",
    sections: [
      {
        heading: "The main options",
        paragraphs: [
          "Attacks of gout are usually treated with a non-steroidal anti-inflammatory drug, or NSAID, like ibuprofen. If the pain and swelling do not improve, you may be given steroids as tablets or an injection.",
          "NICE says an NSAID, colchicine or a short course of steroid tablets can each be offered first, taking into account your other conditions, other medicines and preferences. Many people with gout quickly learn what works best for them.",
        ],
      },
      {
        heading: "Start early",
        paragraphs: [
          "Take any medicine you have been prescribed as soon as possible. It should start to work within two days.",
          "Your doctor may let you keep a supply at home, so you can start at the first signs of an attack. The earlier you start treatment, the better.",
        ],
      },
      {
        heading: "NSAIDs",
        paragraphs: [
          "Naproxen, diclofenac and etoricoxib are three NSAIDs you could be given. They help with pain and reduce some of the inflammation.",
          "NSAIDs are not suitable for everyone, including some people with a heart, liver or kidney condition, a stomach ulcer or asthma. Your doctor may also prescribe a medicine such as omeprazole to protect your stomach.",
        ],
      },
      {
        heading: "Colchicine",
        paragraphs: [
          "Colchicine is not a painkiller, but it can be very effective at reducing the inflammation caused by urate crystals. It may take a day or two for symptoms to improve.",
          "Do not take doses closer together than your doctor has told you, as too much of the medicine can build up in the body and cause serious side effects. Do not drink grapefruit juice while taking it.",
        ],
      },
      {
        heading: "Steroids",
        paragraphs: [
          "Steroids are very useful for attacks. They are usually taken as a short course of tablets lasting a few days, or as an injection into a muscle or the affected joint, which can be helpful if only one joint is affected.",
          "Treating an attack does not lower urate or stop future attacks. If you already take urate-lowering medicine, keep taking it during an attack.",
        ],
      },
    ],
    helps: [
      "Take any medicine you have been prescribed as soon as possible.",
      "Ask whether you can keep a supply at home to start at the first signs of an attack.",
      "If you take urate-lowering medicine, keep taking it during an attack.",
      "Call NHS 111 if you have taken more colchicine than prescribed.",
      "See a GP if you have gout and your usual treatments are not helping.",
    ],
    tryThisWeek: [
      "Take medicine at the first sign.",
      "Ask about a supply at home.",
      "Keep taking urate-lowering medicine.",
    ],
    ask: "Which medicine should I take at the start of an attack, and can I keep some at home?",
    interactive: {
      kind: "flip-cards",
      title: "What treats an attack",
      intro: "Tap each card to see what it does.",
      cards: [
        { id: "nsaid", front: "An NSAID, like naproxen", when: "As soon as an attack starts", back: "Helps with pain and reduces some inflammation. Not suitable for everyone; a stomach-protecting medicine may be added." },
        { id: "colchicine", front: "Colchicine", when: "As soon as an attack starts", back: "Not a painkiller, but reduces the inflammation from crystals. Keep to the dose you are given, and no grapefruit juice." },
        { id: "steroids", front: "Steroids", when: "Tablets for a few days, or an injection", back: "Very useful for attacks. An injection into the joint can help if only one joint is affected." },
        { id: "ice", front: "An ice pack", when: "Alongside your medicine", back: "Wrapped in a towel, for up to 20 minutes at a time. It may help ease the pain." },
      ],
    },
    sources: [NHS_GOUT, AU_GOUT, NICE_NG219, NHS_NAPROXEN, NHS_COLCHICINE, AU_COLCHICINE, UKGS_TREATMENT],
    quiz: {
      question: "When is the best time to take attack medicine?",
      options: [{ text: "As soon as an attack starts", right: true }, { text: "Once the pain is at its worst" }, { text: "Only if it lasts more than a week" }],
      why: "Take any medicine you have been prescribed as soon as possible. The earlier you start treatment, the better.",
    },
  },
  {
    id: "gout-urate-lowering",
    kicker: "Long-term treatment",
    question: "What does allopurinol do, and how long is it for?",
    hook: "A daily tablet that lowers urate so the crystals slowly dissolve. More attacks at first can be a sign it is working.",
    short: "Allopurinol and febuxostat lower the amount of urate the body makes, which stops new crystals forming and slowly dissolves existing ones. They are usually taken every day for life, even when there are no symptoms. Attacks can increase in the first months, which does not mean the medicine is not working.",
    sections: [
      {
        heading: "Who is offered it",
        paragraphs: [
          "If you have frequent attacks or high levels of uric acid, you may need to take uric acid-lowering medicine. NICE says it should be offered to people with multiple or troublesome attacks, tophi, long-term gouty arthritis, chronic kidney disease stages 3 to 5, or who take a diuretic.",
          "NICE says the option should also be discussed with people who have had a first attack. The UK Gout Society says all people diagnosed with gout should have it discussed with them.",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "Allopurinol is the most commonly used urate-lowering medicine, and a very effective treatment for most people with gout. It works by reducing the amount of urate the body makes.",
          "Once your urate level is low enough, new crystals stop forming and existing crystals slowly dissolve. It can take a few months or years to clear them, but once they are gone there are no more attacks, tophi or joint damage from gout.",
        ],
      },
      {
        heading: "Starting and building up",
        paragraphs: [
          "It is usually started at least two to four weeks after an attack has settled, at a low dose that is gradually increased. Building up slowly makes an attack less likely and finds the lowest dose that controls your gout.",
          "Allopurinol is usually taken once a day, and it is best taken with food, swallowed with a glass of water. Drink plenty of fluids to stay hydrated.",
        ],
      },
      {
        heading: "More attacks at first",
        paragraphs: [
          "You may be more likely to get attacks when you first start. As the crystals dissolve and get smaller, they are more likely to get into the joint and trigger an attack. This is actually a sign the medicine is working.",
          "Your doctor might suggest a low dose of colchicine or an NSAID for the first six months to help prevent attacks. Do not stop taking allopurinol unless your doctor tells you to.",
        ],
      },
      {
        heading: "Febuxostat, and side effects",
        paragraphs: [
          "Febuxostat works in a similar way to allopurinol, but it is broken down by the liver instead of the kidneys. NICE says allopurinol should be offered first to people with major heart disease, such as a previous heart attack or stroke.",
          "If you get a rash or other skin reaction on allopurinol, stop taking it and speak to your doctor straight away. Call 999 if you think you might be having a severe allergic reaction or symptoms of Stevens-Johnson syndrome, such as flu-like symptoms with a rash, blisters and sores.",
        ],
      },
    ],
    helps: [
      "Take uric acid-lowering medicine regularly, even when you no longer have symptoms.",
      "Try not to miss doses, especially in the first year or two, as up-and-down urate levels could trigger an attack.",
      "If you have an attack while on it, keep taking it and treat the attack as you normally would.",
      "If you get a rash, stop taking allopurinol and speak to your doctor straight away.",
      "Tell your doctor about any other medicines, herbal remedies, vitamins or supplements before starting.",
      "Tell your doctor if you are pregnant or planning a pregnancy while taking allopurinol.",
    ],
    tryThisWeek: [
      "Take it every day, even when well.",
      "Keep taking it during an attack.",
      "Report any rash straight away.",
    ],
    ask: "Should I start a medicine to lower my uric acid, and what can I take to prevent attacks while it starts working?",
    interactive: {
      kind: "timeline",
      title: "Starting urate-lowering medicine",
      steps: [
        { id: "start", when: "2 to 4 weeks after an attack", title: "Start low", points: ["Usually started once an attack has settled", "A low dose to begin with"] },
        { id: "build", when: "Each month", title: "Build up the dose", points: ["A blood test guides each increase", "Until urate is below the target"] },
        { id: "early", when: "The first six months", title: "Attacks may increase", points: ["A sign the crystals are dissolving", "Colchicine or an NSAID may be added", "Keep taking the medicine"] },
        { id: "clear", when: "Months to years", title: "The crystals clear", points: ["New crystals stop forming", "Then no more attacks, tophi or joint damage from gout"] },
        { id: "yearly", when: "Every year", title: "A yearly check", points: ["A blood test checks urate stays on target", "Usually a lifelong treatment"] },
      ],
    },
    sources: [NHS_GOUT, NICE_NG219, UKGS_TREATMENT, AU_GOUT, AU_ALLOPURINOL, NHS_ALLOPURINOL, AU_FEBUXOSTAT],
    quiz: {
      question: "You have more attacks in the first months on allopurinol. What does it usually mean?",
      options: [{ text: "The crystals are dissolving: keep taking it", right: true }, { text: "It is not working, so stop it" }, { text: "You are allergic to it" }],
      why: "As the crystals dissolve and get smaller, they are more likely to get into the joint and trigger an attack. This is actually a sign the medicine is working.",
    },
  },
  {
    id: "gout-target",
    kicker: "Blood tests",
    question: "What is my uric acid target, and how often is it checked?",
    hook: "Below 360 for most people. Under that line, crystals stop forming and start to dissolve.",
    short: "For most people the target is a blood urate level below 360 micromol per litre, and below 300 for some people with tophi or frequent attacks. Blood tests guide each dose increase until the target is reached. After that, a yearly test checks it stays there.",
    sections: [
      {
        heading: "Why there is a target",
        paragraphs: [
          "Your doctor adjusts the dose of urate-lowering medicine until your blood urate falls below a target level. Once it is low enough, new crystals stop forming and existing crystals slowly dissolve.",
          "There is no single fixed dose. Different people need different doses to get to the right blood urate level.",
        ],
      },
      {
        heading: "The numbers",
        paragraphs: [
          "In most people, the target is below 360 micromol per litre. This is the level NICE says to aim for.",
          "A lower target, below 300 micromol per litre, may be considered for people with tophi or long-term gouty arthritis, or who keep having frequent attacks even below 360.",
        ],
      },
      {
        heading: "How often the test is done",
        paragraphs: [
          "NICE says to start with a low dose and use monthly blood tests to guide dose increases until the target is reached. Arthritis UK says tests may be every two to four weeks until the dose is high enough.",
          "Once your urate level is stable and in the target range, you will need yearly blood tests to check it stays there. Treatment is usually continued after the target is reached, and is typically lifelong.",
        ],
      },
      {
        heading: "If attacks carry on",
        paragraphs: [
          "If your symptoms are not getting under control, talk to your doctor about your urate level, as you might need to be on a higher dose.",
          "Malcolm, who has gout, was started on a low dose that was not enough for him. His team slowly increased it, the crystals began to dissolve, and he has not had an attack since.",
        ],
      },
    ],
    helps: [
      "If your symptoms are not getting under control, talk to your doctor about your urate level.",
      "Keep going for blood tests until your target is reached, then once a year.",
      "Keep taking the medicine after you reach the target.",
      "Once you are on target, have your urate checked every year.",
    ],
    tryThisWeek: [
      "Ask about your urate level.",
      "Book your next blood test.",
      "Keep taking it at target.",
    ],
    ask: "What is my uric acid target, what was my last result, and when is the next test?",
    interactive: {
      kind: "scenarios",
      title: "Reading your result",
      scenarios: [
        {
          id: "above",
          situation: "Your result is above 360 while the dose is being built up.",
          options: [{ text: "The dose may need to go up", best: true }, { text: "Stop the medicine" }],
          why: "NICE says to use monthly urate levels to guide dose increases until the target is reached.",
        },
        {
          id: "reached",
          situation: "You have reached your target and feel well.",
          options: [{ text: "Keep taking the medicine", best: true }, { text: "Stop: the job is done" }],
          why: "Treatment is usually continued after the target is reached, and is typically lifelong.",
        },
        {
          id: "tophi",
          situation: "You have tophi under the skin.",
          options: [{ text: "Ask about a lower target", best: true }, { text: "The usual target suits everyone" }],
          why: "A lower target, below 300 micromol per litre, may be considered for people with tophi.",
        },
        {
          id: "still-attacks",
          situation: "Your attacks are not getting under control.",
          options: [{ text: "Talk to your doctor about your urate", best: true }, { text: "Wait for the yearly test" }],
          why: "If your symptoms are not getting under control, talk to your doctor about your urate level, as you might need to be on a higher dose.",
        },
      ],
    },
    sources: [UKGS_TREATMENT, AU_ALLOPURINOL, AU_GOUT, NICE_NG219, AU_FEBUXOSTAT, AU_MALCOLM],
    quiz: {
      question: "What is the usual urate target for most people with gout?",
      options: [{ text: "Below 360 micromol per litre", right: true }, { text: "Above 360 micromol per litre" }, { text: "There is no target" }],
      why: "In most people, the target is below 360 micromol per litre. This is the level NICE says to aim for.",
    },
  },
  {
    id: "gout-self-help",
    kicker: "Self-help",
    question: "What can I do myself during an attack?",
    hook: "Ice, rest, the foot up and the bedclothes off. Small things that ease a big pain.",
    short: "Alongside your medicine, rest and raise the limb, keep the joint cool with an ice pack wrapped in a towel for up to 20 minutes at a time, drink lots of water and keep bedclothes off the joint at night. Try not to put pressure on the joint.",
    sections: [
      {
        heading: "Keep it cool",
        paragraphs: [
          "Keep the joint cool. Apply an ice pack, or a bag of frozen peas, wrapped in a towel for up to 20 minutes at a time.",
          "NICE says ice packs on the joint, alongside prescribed medicine, may help ease the pain. Arthritis UK says they can be particularly good at reducing some of the pain and swelling.",
        ],
      },
      {
        heading: "Rest and raise it",
        paragraphs: [
          "Rest and raise the limb. Do not put pressure on the joint, as this can make the pain feel worse.",
          "Avoid exercising during an attack, as it could make the pain worse. Rest and recover, and start exercising again after the pain and swelling have gone down.",
        ],
      },
      {
        heading: "At night",
        paragraphs: [
          "Attacks often happen at night and can make it hard to sleep. Try to keep bedclothes off the affected joint, as even a sheet touching it can make the pain worse.",
          "A bed cage supports the bedsheets above your feet, so the joint can rest without the weight of the sheets. Raising the joint on a cushion may also help.",
        ],
      },
      {
        heading: "Water and medicine",
        paragraphs: [
          "Drink lots of water, unless a GP tells you not to. Take any medicine you have been prescribed as soon as possible.",
          "If the pain is getting worse, or you also have a very high temperature, feel hot, cold or shivery, feel sick or cannot eat, ask for an urgent GP appointment or get help from NHS 111. It could mean an infection inside the joint.",
        ],
      },
    ],
    helps: [
      "Apply an ice pack wrapped in a towel for up to 20 minutes at a time.",
      "Rest and raise the limb.",
      "Keep bedclothes off the joint at night, or try a bed cage.",
      "Drink lots of water, unless a GP tells you not to.",
      "Do not put pressure on the joint.",
    ],
    tryThisWeek: [
      "Ice for up to 20 minutes.",
      "Rest and raise the joint.",
      "Keep the sheets off at night.",
    ],
    ask: "Besides medicine, what else can I do when an attack starts, and when should I call for help?",
    interactive: {
      kind: "scenarios",
      title: "In the middle of an attack",
      scenarios: [
        {
          id: "sheet",
          situation: "It is night, and the sheet on your toe is agony.",
          options: [{ text: "Keep the bedclothes off it", best: true }, { text: "Wrap it up tightly" }],
          why: "Try to keep bedclothes off the affected joint at night. A bed cage can hold the sheets above your feet.",
        },
        {
          id: "ice",
          situation: "You want to cool the joint down.",
          options: [{ text: "Wrapped ice, up to 20 minutes", best: true }, { text: "Ice straight on the skin for an hour" }],
          why: "Apply an ice pack, or a bag of frozen peas, wrapped in a towel for up to 20 minutes at a time.",
        },
        {
          id: "run",
          situation: "You usually go for a run every morning.",
          options: [{ text: "Rest until the swelling goes down", best: true }, { text: "Run through the pain" }],
          why: "Avoid exercising during an attack, as it could make the pain worse.",
        },
        {
          id: "shivery",
          situation: "The joint is getting worse and you feel shivery.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Wait for it to settle" }],
          why: "A joint getting worse, with a very high temperature or feeling hot, cold or shivery, could mean an infection inside the joint.",
        },
      ],
    },
    sources: [NHS_GOUT, AU_GOUT, NICE_NG219],
    quiz: {
      question: "How should ice be used on a gout attack?",
      options: [{ text: "Wrapped in a towel, up to 20 minutes at a time", right: true }, { text: "Straight on the skin for as long as possible" }, { text: "Ice should never be used" }],
      why: "Apply an ice pack, or a bag of frozen peas, wrapped in a towel for up to 20 minutes at a time.",
    },
  },
  {
    id: "gout-food-drink",
    kicker: "Food and drink",
    question: "Do I need to change what I eat and drink?",
    hook: "No food has to go completely. Diet helps a little, and medicine does most of the work.",
    short: "There is not enough evidence that any specific diet prevents attacks or lowers urate, so NICE advises a healthy, balanced diet. Large amounts of red meat, offal, some seafood and yeast extracts, sugary drinks and too much alcohol, especially beer, can raise urate. Most people with gout also need medicine to reach their target.",
    sections: [
      {
        heading: "What diet can and cannot do",
        paragraphs: [
          "NICE says there is not enough evidence to show that any specific diet prevents attacks or lowers urate levels, and advises a healthy, balanced diet.",
          "Most uric acid is made naturally by the body rather than coming from food. Diet has only a small effect on blood urate, so most people with gout need urate-lowering medicine to reach their target.",
        ],
      },
      {
        heading: "Foods to have in moderation",
        paragraphs: [
          "You should not have to remove anything completely from your diet. Try to avoid eating large quantities of red meat, game and offal, seafood, particularly oily fish and shellfish, and yeast extracts such as Marmite.",
          "Protein can come from other foods, such as soybeans, eggs, pulses or dairy products. Low-fat dairy, eggs, pasta, rice and most fruits and vegetables are low in purines.",
        ],
      },
      {
        heading: "Sugary drinks and fruit",
        paragraphs: [
          "Try not to have lots of sugary drinks and snacks. Sweetened soft drinks contain large amounts of sugar and can increase the risk of gout.",
          "Fruit contains sugar too, but the benefits of eating fruit far outweigh any negatives. Cutting down sugar from other sources is healthier than cutting out some of your five a day.",
        ],
      },
      {
        heading: "Alcohol",
        paragraphs: [
          "Drinking too much alcohol, especially beer and spirits, can raise urate levels and trigger an attack. Beer is particularly bad, as it contains a lot of purines.",
          "Have some alcohol-free days each week, and try not to drink more than 14 units a week, spread over the week rather than all in one go. That is about 6 pints of average-strength beer. Your doctor might advise a lower limit.",
        ],
      },
      {
        heading: "Water, milk and cherries",
        paragraphs: [
          "Drink plenty of fluids to avoid getting dehydrated. If you have gout and a history of kidney stones, try to drink at least two litres of water a day.",
          "Research suggests skimmed milk, low-fat yoghurt and cherries may help prevent attacks, and vitamin C may slightly lower uric acid. Ask a GP before taking vitamin C supplements.",
        ],
      },
    ],
    helps: [
      "Eat a healthy diet: your doctor may give you a list of foods to include or limit.",
      "Have some alcohol-free days each week, and try not to drink more than 14 units a week.",
      "Try not to have lots of sugary drinks and snacks.",
      "Drink plenty of fluids to avoid getting dehydrated.",
      "Ask a GP about vitamin C supplements.",
      "Talk to your doctor or pharmacist before trying herbal remedies, as some could react with gout medicine.",
    ],
    tryThisWeek: [
      "Plan some alcohol-free days.",
      "Have fewer sugary drinks.",
      "Ask a GP about vitamin C.",
    ],
    ask: "Is there anything in my diet or drinking that is worth changing for my gout?",
    interactive: {
      kind: "scenarios",
      title: "Choices at the table",
      scenarios: [
        {
          id: "pint",
          situation: "You would like a few pints at the weekend.",
          options: [{ text: "Stay within 14 units, spread out", best: true }, { text: "Save the week's units for Saturday" }],
          why: "Try to stick to no more than 14 units a week, and do not save them up to drink all in one go.",
        },
        {
          id: "protein",
          situation: "You want protein without so much meat.",
          options: [{ text: "Eggs, pulses, soya or dairy", best: true }, { text: "More liver and kidneys" }],
          why: "You could try replacing a portion of meat with other protein-rich foods like soybeans, eggs, pulses or dairy products.",
        },
        {
          id: "thirsty",
          situation: "You are thirsty on a hot day.",
          options: [{ text: "Water", best: true }, { text: "A sweetened fizzy drink" }],
          why: "Sweetened soft drinks contain large amounts of sugar and can increase the risk of gout.",
        },
        {
          id: "fruit",
          situation: "You love fruit, but it contains sugar.",
          options: [{ text: "Keep eating fruit", best: true }, { text: "Cut fruit out" }],
          why: "The benefits of eating fruit far outweigh any negatives.",
        },
      ],
    },
    sources: [NICE_NG219, UKGS_DIET, UKGS_TREATMENT, AU_GOUT, NHS_GOUT, NHS_ALCOHOL_UNITS],
    quiz: {
      question: "Can diet alone usually control gout?",
      options: [{ text: "No, most people also need urate-lowering medicine", right: true }, { text: "Yes, if you cut out all meat" }, { text: "Yes, if you stop drinking water" }],
      why: "Diet has only a small effect on blood urate, so most people with gout need urate-lowering medicine to reach their target.",
    },
  },
  {
    id: "gout-weight-activity",
    kicker: "Living well",
    question: "Do weight and exercise make a difference to gout?",
    hook: "Gradual changes rather than crash diets. Movement helps, but rest during an attack.",
    short: "The body makes more urate in people who are overweight, and for them gradual weight loss can lower urate and mean fewer attacks. Crash diets are best avoided, because rapid weight loss can trigger an attack. Staying active also lowers the chance of an attack, but not during a flare-up.",
    sections: [
      {
        heading: "How weight affects urate",
        paragraphs: [
          "Lifestyle choices are not the main reason most people get gout. But the more overweight a person is, the more urate the body produces, and it may produce more than the kidneys can cope with.",
          "In people who are overweight, reducing weight can lower urate levels, mean fewer gout attacks and relieve stress on weight-bearing joints such as the knees and ankles.",
        ],
      },
      {
        heading: "Gradual, not sudden",
        paragraphs: [
          "The NHS says to avoid crash diets. Rapid weight loss can trigger gout attacks, and extreme weight loss or starvation diets can raise urate levels.",
          "For people who want to lose weight, the UK Gout Society suggests doing it gradually, combining healthy eating with regular physical activity. Arthritis UK says daytime fasting, for example during Ramadan, should be OK.",
        ],
      },
      {
        heading: "Moving more",
        paragraphs: [
          "Staying active is important for general health and wellbeing, and it also reduces the chance of a gout attack. It does not matter how much you do: a little is better than none.",
          "Start slowly and build up. Exercise that leaves you out of breath is particularly good, such as dancing, walking across hilly countryside or tennis. It helps to find something you enjoy and will keep doing.",
        ],
      },
      {
        heading: "Not during an attack",
        paragraphs: [
          "Avoid exercising during an attack, as it could make the pain worse. Begin again after the pain and swelling have gone down.",
          "The NHS suggests exercising regularly, but avoiding intense exercise or putting lots of pressure on joints. Adults are advised to aim for at least 150 minutes of moderate activity a week, and to speak to a GP first if they have not exercised for some time.",
        ],
      },
    ],
    helps: [
      "If you are overweight and choose to lose weight, do it gradually and avoid crash diets.",
      "Combine healthy eating with regular physical activity.",
      "Start activity slowly and build up: a little is better than none.",
      "Rest during an attack, and start again once the pain and swelling have gone down.",
      "Speak to your GP first if you have not exercised for some time.",
      "Find a sport or exercise you enjoy and will keep doing.",
    ],
    tryThisWeek: [
      "Start slowly and build up.",
      "Rest during an attack.",
      "Find an activity you enjoy.",
    ],
    ask: "What kind of activity suits my joints, and is my weight affecting my gout?",
    interactive: {
      kind: "scenarios",
      title: "Finding a pace that works",
      scenarios: [
        {
          id: "quick",
          situation: "You want to lose weight quickly before a holiday.",
          options: [{ text: "Go gradually instead", best: true }, { text: "Try a crash diet" }],
          why: "Avoid crash dieting where possible, as rapid weight loss can trigger gout attacks.",
        },
        {
          id: "years",
          situation: "You have not exercised for years.",
          options: [{ text: "Speak to a GP, then start slowly", best: true }, { text: "Start with hard daily sessions" }],
          why: "Speak to your GP first if you have not exercised for some time. Start slowly and build up.",
        },
        {
          id: "flare",
          situation: "Your ankle is hot and swollen from an attack.",
          options: [{ text: "Rest until it settles", best: true }, { text: "Exercise through it" }],
          why: "Avoid exercising during an attack, as it could make the pain worse.",
        },
        {
          id: "ramadan",
          situation: "You are fasting during Ramadan.",
          options: [{ text: "Daytime fasting should be OK", best: true }, { text: "Fasting is never possible with gout" }],
          why: "Arthritis UK says you should be OK to do some daytime fasting, for example during Ramadan.",
        },
      ],
    },
    sources: [AU_GOUT, UKGS_DIET, NHS_GOUT, NHS_ACTIVITY],
    quiz: {
      question: "Why are crash diets not advised with gout?",
      options: [{ text: "Rapid weight loss can trigger an attack", right: true }, { text: "They make the kidneys work too well" }, { text: "They have no effect on urate at all" }],
      why: "Rapid weight loss can trigger gout attacks, and extreme weight loss or starvation diets can raise urate levels.",
    },
  },
  {
    id: "gout-other-conditions",
    kicker: "Heart and kidneys",
    question: "How is gout linked to the heart and the kidneys?",
    hook: "Gout often travels with blood pressure, cholesterol, diabetes and kidney problems. A check-up looks at all of them.",
    short: "Gout is often linked with high blood pressure, high cholesterol, type 2 diabetes, heart disease and kidney disease. Having high urate and gout for a long time can lead to narrowing of the arteries and kidney problems. After an attack, your GP may look at your heart risk and kidneys as well as your urate.",
    sections: [
      {
        heading: "Conditions that travel together",
        paragraphs: [
          "Gout is often connected to other conditions, including obesity, diabetes, high blood pressure, heart disease, stroke, high cholesterol and kidney disease. These may share underlying causes, such as inflammation.",
          "Some of these conditions affect the way the kidneys filter urate, and others cause more urate to be made in the first place.",
        ],
      },
      {
        heading: "The heart and circulation",
        paragraphs: [
          "Having high urate levels and gout for a long time can lead to narrowing of the arteries, which can increase the risk of stroke, heart attacks or other heart problems.",
          "Inflammation from uncontrolled gout can also increase the risk of heart disease, so keeping gout well controlled matters. Having your blood fats checked is important, and very effective medicines such as statins can lower them.",
        ],
      },
      {
        heading: "The kidneys",
        paragraphs: [
          "Around 25% of people with gout also have chronic kidney disease. High uric acid can sometimes lead to kidney stones or kidney damage in the long term.",
          "Studies suggest that urate-lowering medicine such as allopurinol lowers the risk of kidney damage and kidney stones in people with gout. Staying well hydrated is important if you have had kidney stones.",
        ],
      },
      {
        heading: "Blood pressure medicines and painkillers",
        paragraphs: [
          "Some medicines for high blood pressure, such as diuretics, or water tablets, can increase the risk of gout, while others can lower both blood pressure and urate. If you are concerned, speak to your doctor.",
          "NSAIDs used for attacks are linked to blood vessel disease, mostly with long-term use. For gout they are usually taken in short courses, and colchicine or prednisolone may be considered instead.",
        ],
      },
      {
        heading: "Checks after an attack",
        paragraphs: [
          "NICE suggests a follow-up appointment once an attack has settled, to measure urate, look at lifestyle and other conditions, including heart risk factors and chronic kidney disease, and review medicines.",
          "NICE says allopurinol should be offered first to people with gout who have major heart disease, such as a previous heart attack or stroke.",
        ],
      },
    ],
    helps: [
      "Ask your doctor to check your blood pressure.",
      "Ask to have your blood fats, such as cholesterol, checked.",
      "See your GP regularly to check for related conditions, for example at an annual health check.",
      "Keep your gout well controlled with urate-lowering medicine.",
      "If you have had kidney stones, stay well hydrated.",
      "Try to quit smoking.",
    ],
    tryThisWeek: [
      "Ask for a blood pressure check.",
      "Ask about a cholesterol test.",
      "Book a regular health check.",
    ],
    ask: "Have my blood pressure, cholesterol and kidneys been checked, and do any of my medicines affect my gout?",
    interactive: {
      kind: "signs",
      title: "To raise at your gout review",
      intro: "Tick any that apply to you. Gout is linked with each of them.",
      signs: ["High blood pressure", "High cholesterol", "Type 2 diabetes", "Kidney problems", "Kidney stones in the past", "Heart problems or a stroke", "Taking water tablets", "Taking NSAIDs often"],
      after: "Your GP may check your blood pressure, cholesterol and kidneys, and review your medicines. If you are concerned about a medicine, speak to your doctor.",
      copyHeading: "To raise at my gout review",
    },
    sources: [UKGS_CONDITIONS, AU_GOUT, CKS_COMPLICATIONS, NICE_NG219, NHS_GOUT],
    quiz: {
      question: "Why might your GP check your blood pressure and cholesterol when you have gout?",
      options: [{ text: "Gout is linked with heart and blood vessel disease", right: true }, { text: "Gout causes high blood pressure directly" }, { text: "It is only needed for people over 80" }],
      why: "Having high urate levels and gout for a long time can lead to narrowing of the arteries, which can increase the risk of stroke, heart attacks or other heart problems.",
    },
  },
  {
    id: "gout-work-life",
    kicker: "Everyday life",
    question: "How do I manage gout at work and day to day?",
    hook: "Most people with gout keep working. Adjustments, the right shoes and a plan for flares help.",
    short: "Most people with gout can keep working, though some time off may be needed during an attack. Employers have a duty to make reasonable adjustments, and the government's Access to Work scheme can help with some costs. Comfortable shoes, good sleep habits and support with low mood also make a difference.",
    sections: [
      {
        heading: "Working with gout",
        paragraphs: [
          "Most people with gout can continue working, but you may need some time off when you have an attack.",
          "If gout is affecting your ability to work, speak to your employer's occupational health service if there is one. Your employer has a duty to make reasonable adjustments so that you can do your job.",
        ],
      },
      {
        heading: "Adjustments and Access to Work",
        paragraphs: [
          "Reasonable adjustments might include specialist equipment, changes to your role, or a change to your work pattern. It helps to think about the times when your condition flares, as you may need extra support then.",
          "Access to Work can help you get or stay in work if you have a health condition. It could give a grant for things like specialist equipment, or travel to work if you cannot use public transport. It does not pay for reasonable adjustments, which your employer is legally required to make.",
        ],
      },
      {
        heading: "Shoes and feet",
        paragraphs: [
          "Good footwear should not press or dig into any part of the foot, and should have a round front deep enough for your toes to move. Choose shoes that fit comfortably from the start, rather than hoping they will become comfortable.",
          "Adjustable fastenings allow for changes in the shape of your feet during the day. Check your feet for any areas that are warm, red or swollen, which could be a sign of inflammation or infection.",
        ],
      },
      {
        heading: "Sleep and mood",
        paragraphs: [
          "Gout attacks tend to happen at night and can disturb sleep. A dark, quiet bedroom, a regular routine and avoiding caffeine in the eight hours before bed may help.",
          "The emotional effects of gout can have just as much impact as the physical symptoms. If you are feeling low, talk to your GP. Arthritis UK's helpline on 0800 5200 520 can listen and offer emotional support.",
        ],
      },
      {
        heading: "Being open about it",
        paragraphs: [
          "Gout is not always taken seriously, and people often think it comes from overindulgence. Cieran was diagnosed at 26 and, feeling slightly ashamed, at first did not tell anyone what it was.",
          "His advice is to seek medical advice and start treatment as early as possible, and to be honest with family, friends and employers about how it affects you and what support you need.",
        ],
      },
    ],
    helps: [
      "If gout affects your work, speak to your employer's occupational health service if there is one.",
      "Talk to your employer about reasonable adjustments, including for times when your gout flares.",
      "If adjustments are not enough, check whether Access to Work could help.",
      "Choose comfortable shoes with a round, deep front and adjustable fastenings.",
      "If you are feeling low, talk to your GP.",
    ],
    tryThisWeek: [
      "Talk to occupational health.",
      "Ask about adjustments for flares.",
      "Check your shoes fit well.",
    ],
    ask: "What support could help me keep working, especially during an attack?",
    interactive: {
      kind: "scenarios",
      title: "Everyday moments",
      scenarios: [
        {
          id: "workday",
          situation: "You wake with an attack on a workday.",
          options: [{ text: "Start treatment and tell work", best: true }, { text: "Hide it and push through" }],
          why: "Start treatment as early as possible. Most people with gout keep working, but you may need some time off during an attack.",
        },
        {
          id: "shoes",
          situation: "Your work shoes press on your toes.",
          options: [{ text: "Look for a deeper, rounder front", best: true }, { text: "Wait for them to stretch" }],
          why: "Do not buy footwear thinking it will become comfortable over time. Choose footwear that fits comfortably from the start.",
        },
        {
          id: "equipment",
          situation: "Your employer's adjustments are not enough.",
          options: [{ text: "Look into Access to Work", best: true }, { text: "Give up the job" }],
          why: "If your employer cannot make all the adjustments you need, you may be able to get help through Access to Work.",
        },
        {
          id: "low",
          situation: "Gout is getting you down.",
          options: [{ text: "Talk to your GP", best: true }, { text: "Keep it to yourself" }],
          why: "If you are feeling low, talk to your GP, who can signpost you to the right services.",
        },
      ],
    },
    sources: [AU_GOUT, AU_ADJUSTMENTS, GOV_ATW, AU_FOOTCARE, AU_MYTHS],
    quiz: {
      question: "Who pays for reasonable adjustments at work?",
      options: [{ text: "Your employer", right: true }, { text: "Access to Work" }, { text: "You, out of your own pocket" }],
      why: "Access to Work does not pay for reasonable adjustments, which your employer is legally required to make.",
    },
  },
];
