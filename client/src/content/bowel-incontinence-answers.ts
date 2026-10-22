import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Bowel incontinence page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, NHS
// inform, Guts UK and the Bladder & Bowel Community, with the NICE Clinical Knowledge Summary on faecal
// incontinence in adults for a few background points. General information only; it never replaces what a
// person's own GP, continence nurse, physiotherapist or pharmacist tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const bbc = (label: string, path: string): LearnSource => ({ label: `Bladder & Bowel Community: ${label}`, url: `https://www.bladderandbowel.org/${path}` });
const cks = (label: string, path: string): LearnSource => ({ label: `NICE CKS: Faecal incontinence in adults, ${label}`, url: `https://cks.nice.org.uk/topics/faecal-incontinence-in-adults/${path}` });

const NHS_BI = nhs("Bowel incontinence", "conditions/bowel-incontinence/");
const NHS_LOP_ABOUT = nhs("About loperamide", "medicines/loperamide/about-loperamide/");
const NHS_LOP_HOW = nhs("How and when to take loperamide", "medicines/loperamide/how-and-when-to-take-loperamide/");
const NHS_LOP_WHO = nhs("Who can and cannot take loperamide", "medicines/loperamide/who-can-and-cannot-take-loperamide/");
const NHS_LOP_SIDE = nhs("Side effects of loperamide", "medicines/loperamide/side-effects-of-loperamide/");
const NHS_COLONOSCOPY = nhs("Colonoscopy", "tests-and-treatments/colonoscopy/");
const NHS_COLOSTOMY_WHY = nhs("Why a colostomy is done", "tests-and-treatments/colostomy/why-a-colostomy-is-done/");
const NHS_CARER_ASSESS = nhs("Carer's assessments", "social-care-and-support/support-and-benefits-for-carers/carer-assessments/");

const INFORM_BI: LearnSource = { label: "NHS inform: Bowel incontinence", url: "https://www.nhsinform.scot/illnesses-and-conditions/stomach-liver-and-gastrointestinal-tract/bowel-incontinence/" };
const INFORM_PF: LearnSource = { label: "NHS inform: Women's pelvic floor muscles", url: "https://www.nhsinform.scot/healthy-living/womens-health/middle-years-around-25-to-50-years/pelvic-health/pelvic-floor-muscles/" };

const GUTS_FI: LearnSource = { label: "Guts UK: Faecal incontinence", url: "https://gutscharity.org.uk/advice-and-information/conditions/faecal-incontinence/" };

const BBC_FI = bbc("Faecal incontinence", "bowel/bowel-problems/faecal-incontinence/");
const BBC_FIT = bbc("Bowel incontinence treatments", "bowel/bowel-treatments/faecal-incontinence-treatments/");
const BBC_SUPPORT = bbc("Bowel support and advice", "bowel/bowel-treatments/bowel-support-and-advice/");
const BBC_BOWEL_WORKS = bbc("How does the bowel work?", "bowel/bowel-resources/how-the-bowel-works/");
const BBC_JCW = bbc("Just Can't Wait card", "free-just-cant-wait-card/");
const BBC_CARERS = bbc("Carers support", "help-information/carers-support/");
const BBC_EMOTIONS = bbc("Coping with your emotions", "help-information/coping-with-your-emotions/");
const BBC_SEX = bbc("How does incontinence affect sexual relationships?", "help-information/sexual-relationships/");
const BBC_PRACTICAL = bbc("Practical advice", "help-information/practical-advice/");
const BBC_TRAVEL = bbc("Travelling with confidence", "news/travelling-with-confidence/");
const BBC_DEMENTIA = bbc("Dementia and incontinence", "bladder/bladder-resources/confused-incontinent/");
const BBC_DISCRIM = bbc("Can you be discriminated against because of incontinence?", "help-information/incontinence-and-discrimination/");

const CKS_DEF = cks("definition", "background-information/definition/");
const CKS_CAUSES = cks("causes", "background-information/causes/");
const CKS_PREV = cks("prevalence", "background-information/prevalence/");
const CKS_PROG = cks("prognosis", "background-information/prognosis/");
const CKS_ASSESS = cks("assessment", "diagnosis/assessment/");
const CKS_MGMT = cks("management", "management/faecal-incontinence/");

const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };

export const bowelIncontinenceAnswers: LearnArticle[] = [
  {
    id: "binc-what-it-is",
    kicker: "Understanding",
    question: "What is bowel incontinence?",
    hook: "From the odd small leak to not reaching the toilet in time. It is common, and treatments can help.",
    short: "Bowel incontinence is when you cannot control when you poo. It can mean poo leaking out without you being able to stop it, or needing to poo but not getting to the toilet in time. It is more common than many people think, and there are treatments that can help.",
    sections: [
      {
        heading: "What it means",
        paragraphs: [
          "Bowel incontinence is when you cannot control when you poo. It is also sometimes known as faecal incontinence.",
          "Some people have it every day, while for others it only happens from time to time. It can mean losing control of runny or solid poo, and sometimes wind.",
        ],
      },
      {
        heading: "The signs",
        paragraphs: [
          "Signs include poo leaking out without you being able to stop it, or feeling like you need to poo but not being able to get to the toilet in time.",
          "You may not be able to get fully clean after going to the toilet, or you may see streaks or stains of poo in your underwear.",
        ],
      },
      {
        heading: "Two main types",
        paragraphs: [
          "Urge incontinence is when you feel a sudden and very intense need to poo and cannot stop it before you reach a toilet. Passive incontinence, or passive soiling, is when you do not feel the need to poo before it happens, or a little poo comes out when you pass wind.",
          "You may have both types. Bowel incontinence is a symptom rather than a diagnosis in itself.",
        ],
      },
      {
        heading: "How bowel control works",
        paragraphs: [
          "A ring of muscles around the last part of the bowel, called the anal sphincter, keeps poo inside until you are ready to pass it. The inner ring works automatically to keep the anus closed, and the outer ring gives extra protection when you feel the urge, or when you cough or sneeze.",
          "These muscles are controlled by nerves, which also tell the brain when the rectum is filling. Incontinence happens when this balance is not working correctly.",
        ],
      },
      {
        heading: "More common than you might think",
        paragraphs: [
          "Bladder & Bowel Community says bowel incontinence affects 1 in 10 people in the UK, and Guts UK says up to 1 in 8. It is under-reported because people do not talk about it.",
          "Although it is common, it should not be thought of as normal. Try not to be embarrassed: see a GP, as there are treatments that can help.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you have bowel incontinence, as there are treatments that can help.",
      "Try not to be embarrassed: the doctor will be used to talking about these symptoms.",
      "Keep a diary of your symptoms and what you eat and drink.",
      "Remember that changing your diet and strengthening your pelvic floor can improve symptoms.",
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Start a symptom diary.",
      "Remember the doctor is used to this.",
    ],
    ask: "Could what I am noticing be bowel incontinence, and what might be causing it?",
    interactive: {
      kind: "signs",
      title: "What have you noticed?",
      intro: "Tick what you have noticed. The ones you tick make a short list to take to your GP.",
      signs: [
        "Poo leaking that I cannot stop",
        "Not reaching the toilet in time",
        "A sudden, very strong need to poo",
        "Leaks I did not feel coming",
        "A little poo when passing wind",
        "Not getting fully clean after the toilet",
        "Streaks or stains in my underwear",
        "Changes in my poo that are not usual",
      ],
      after: "Try not to be embarrassed: the doctor will be used to talking about these symptoms. If your poo is black or dark red, or you have bloody diarrhoea, ask for an urgent GP appointment or get help from NHS 111.",
      copyHeading: "What I have noticed about my bowels",
    },
    sources: [NHS_BI, INFORM_BI, GUTS_FI, BBC_FI, CKS_DEF, BBC_BOWEL_WORKS],
    quiz: {
      question: "Which of these can be a sign of bowel incontinence?",
      options: [{ text: "Streaks or stains of poo in your underwear", right: true }, { text: "Needing to pee at night" }, { text: "Feeling hungry after meals" }],
      why: "You may not be able to get fully clean after going to the toilet, or you may see streaks or stains of poo in your underwear.",
    },
  },
  {
    id: "binc-causes",
    kicker: "Causes",
    question: "Why does bowel incontinence happen?",
    hook: "Childbirth, diarrhoea, constipation, weaker muscles or nerve problems. Often more than one thing at once.",
    short: "Bowel incontinence can happen for lots of reasons, and often more than one at once. Common causes include weaker or damaged muscles around the bottom, for example after childbirth, diarrhoea, constipation, bowel conditions such as IBS or Crohn's disease, and conditions that affect the nerves or awareness, such as a stroke, multiple sclerosis or dementia.",
    sections: [
      {
        heading: "Often more than one reason",
        paragraphs: [
          "Bowel incontinence can happen for lots of reasons and is common. It can be the result of more than one thing at once.",
          "Bladder & Bowel Community says chronic constipation and a weak pelvic floor are two of the most common causes.",
        ],
      },
      {
        heading: "Muscles and childbirth",
        paragraphs: [
          "Weaker muscles around your bottom can happen as you get older, or because of things like hormonal changes or childbirth. Bladder & Bowel Community says the most common cause is damage to one or both of the anal sphincter muscles, including tears during childbirth.",
          "Symptoms of a childbirth injury can sometimes start many years later. Pregnancy and vaginal birth are among the things that make bowel incontinence more likely, and it is more common in women than men.",
        ],
      },
      {
        heading: "Diarrhoea and constipation",
        paragraphs: [
          "Severe diarrhoea of any cause may cause occasional incontinence. Some medicines, like antibiotics, can cause loose stools, which may make symptoms worse.",
          "Hard poo that is not fully passed can lead to fluid leaking around it, called overflow diarrhoea. So constipation can be both a cause and a symptom of bowel incontinence.",
        ],
      },
      {
        heading: "Bowel conditions and nerves",
        paragraphs: [
          "Conditions that affect the digestive system, such as IBS, Crohn's disease and colitis, can make the bowel overactive and cause an urgent need to go.",
          "Conditions that affect the nerves, or make you less aware of when you need to poo, can also play a part. These include a stroke, multiple sclerosis, Parkinson's disease, a spinal injury, diabetes, dementia and a learning disability.",
          "Problems can also follow cancer treatment, such as radiotherapy to the pelvis, or some bowel or anal surgery.",
        ],
      },
      {
        heading: "Other things that add to it",
        paragraphs: [
          "Certain foods and drinks, such as spicy foods or drinks with caffeine, can make it worse. Being overweight, a family history of incontinence and getting older can make it more likely, but incontinence is not an inevitable part of ageing.",
          "A doctor may also ask about your medicines, whether you smoke, and how easy it is for you to get to and use a toilet.",
        ],
      },
    ],
    helps: [
      "Keep a diary of your symptoms and what you eat and drink.",
      "Ask a health care professional whether any medicine you take could be playing a part.",
      "Quit smoking, as nicotine can affect how quickly food moves through your digestive system.",
      "Avoid constipation, as it is one of the most common causes.",
      "See a GP if you think you have bowel incontinence, to find out what is causing it.",
    ],
    tryThisWeek: [
      "Start a food and symptom diary.",
      "Ask about your medicines.",
      "Book a GP appointment.",
    ],
    ask: "What do you think is causing my bowel incontinence?",
    interactive: {
      kind: "risk-check",
      title: "What might be playing a part?",
      intro: "Tick what applies to you. Each one says what the sources suggest.",
      items: [
        { id: "childbirth", label: "Childbirth, or a tear during labour", note: "This can damage the sphincter muscles, and symptoms can start many years later. Pelvic floor exercises help many people.", changeable: false },
        { id: "diarrhoea", label: "Loose stools or diarrhoea", note: "Severe diarrhoea of any cause may cause occasional incontinence. Any illness that may be causing it should be treated.", changeable: true },
        { id: "constipation", label: "Constipation", note: "Hard poo can lead to fluid leaking around it. Avoiding constipation can help.", changeable: true },
        { id: "bowel", label: "IBS, Crohn's disease or colitis", note: "These can make the bowel overactive and cause an urgent need to go.", changeable: false },
        { id: "nerves", label: "A stroke, MS, spinal injury or diabetes", note: "Nerve problems can weaken signals to the anal sphincter.", changeable: false },
        { id: "awareness", label: "Dementia or a learning disability", note: "These can make you less aware of when you need to poo.", changeable: false },
        { id: "food", label: "Spicy food or caffeine", note: "These can make it worse for some people. Try changing one thing at a time.", changeable: true },
        { id: "medicine", label: "Antibiotics or other medicines", note: "Some medicines can cause loose stools or incontinence. Ask a health care professional about this.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Nicotine can affect how quickly food moves through your digestive system.", changeable: true },
        { id: "weight", label: "Being overweight", note: "Being overweight is one of the things that can make bowel incontinence more likely.", changeable: true },
      ],
    },
    sources: [NHS_BI, INFORM_BI, GUTS_FI, BBC_FI, CKS_CAUSES, BBC_FIT, CKS_ASSESS],
    quiz: {
      question: "Can a childbirth injury cause bowel incontinence years later?",
      options: [{ text: "Yes, symptoms can start many years later", right: true }, { text: "No, only straight after the birth" }, { text: "No, childbirth is never a cause" }],
      why: "Symptoms of a childbirth injury can sometimes start many years later.",
    },
  },
  {
    id: "binc-talking",
    kicker: "Understanding",
    question: "How do I talk to a doctor about it?",
    hook: "It can feel hard to bring up. Doctors are used to it, and a written note or a bowel diary can help you say it.",
    short: "Many people feel embarrassed, but the doctor will be used to talking about these symptoms. You can write a note and hand it over, keep a bowel diary for a week or so beforehand, and ask for a doctor of the same sex or for someone else to be in the room. Answering as honestly as you can helps you get the most suitable treatment.",
    sections: [
      {
        heading: "Try not to be embarrassed",
        paragraphs: [
          "Bowel incontinence is common, so try not to be embarrassed. The doctor will be used to talking about these symptoms.",
          "Guts UK says your doctor will be comfortable discussing your problem and will appreciate that it can be difficult for you to talk about. Bladder & Bowel Community says that whatever your problem, something can be done.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "See a GP if you think you have bowel incontinence, or if you have changes in your poo that are not getting better, such as softer poo, diarrhoea or constipation that is not usual for you.",
          "Ask for an urgent GP appointment or get help from NHS 111 if your poo is black or dark red, or you have bloody diarrhoea.",
        ],
      },
      {
        heading: "Getting the words out",
        paragraphs: [
          "If you have an in-person appointment, writing a note and handing it over might help. Bladder & Bowel Community suggests keeping a bowel diary for a week or so before your appointment.",
          "The diary can record how many times you go to the toilet, any accidents you have and what you eat or drink. This may help the doctor spot an underlying cause.",
        ],
      },
      {
        heading: "What the GP will ask",
        paragraphs: [
          "Your GP will ask when and how often your symptoms happen, about your diet, and how much caffeine, fizzy drinks and alcohol you drink. You may find this embarrassing, but it is important to answer as honestly and fully as you can.",
          "Let the doctor know about any changes in your bowel habits lasting more than a few weeks, bleeding from your back passage, stomach pains, changes to your diet and any medicines you take. They may also ask how it affects your work, relationships, social life and mood.",
        ],
      },
      {
        heading: "Your choices at the appointment",
        paragraphs: [
          "An examination is intimate, so the doctor may have another person, called a chaperone, in the room. You can ask for a doctor or health professional of the same sex.",
          "You can also ask about any test and how it will be done. A continence nurse, specialist physiotherapist or colorectal nurse specialist can help too.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you have bowel incontinence.",
      "Write a note to hand over if saying it out loud feels hard.",
      "Keep a bowel diary for a week or so before your appointment.",
      "Answer as honestly and fully as you can.",
      "Ask for a doctor or health professional of the same sex if you prefer.",
    ],
    tryThisWeek: [
      "Write a note for your GP.",
      "Keep a bowel diary for a week.",
      "Ask for a same-sex doctor if you prefer.",
    ],
    ask: "Can I be referred to a continence service or specialist physiotherapist?",
    interactive: {
      kind: "scenarios",
      title: "Getting it said",
      scenarios: [
        {
          id: "words",
          situation: "You have booked an appointment but dread saying the words.",
          options: [{ text: "Write a note and hand it over", best: true }, { text: "Cancel and hope it settles" }],
          why: "If you have an in-person appointment, writing a note and handing it over might help.",
        },
        {
          id: "coffee",
          situation: "The GP asks how much coffee and alcohol you drink, and you feel awkward.",
          options: [{ text: "Answer as honestly as you can", best: true }, { text: "Play it down" }],
          why: "It is important to answer as honestly and fully as you can.",
        },
        {
          id: "examination",
          situation: "You would feel easier with a doctor of your own sex for the examination.",
          options: [{ text: "Ask for one", best: true }, { text: "Say nothing and put up with it" }],
          why: "You can ask for a doctor or health professional of the same sex.",
        },
        {
          id: "black",
          situation: "Your poo has turned black.",
          options: [{ text: "Ask for an urgent GP appointment or get help from NHS 111", best: true }, { text: "Wait for your routine appointment" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if your poo is black or dark red, or you have bloody diarrhoea.",
        },
      ],
    },
    sources: [NHS_BI, INFORM_BI, GUTS_FI, BBC_FI, BBC_SUPPORT, CKS_ASSESS],
    quiz: {
      question: "What does the NHS say about talking to a doctor about bowel incontinence?",
      options: [{ text: "The doctor will be used to talking about it", right: true }, { text: "It is best kept to yourself" }, { text: "Only a specialist can be told" }],
      why: "The doctor will be used to talking about these symptoms.",
    },
  },
  {
    id: "binc-tests",
    kicker: "Understanding",
    question: "Which tests might I have?",
    hook: "Most start with a chat and a quick examination. Some people need tests of the muscles and nerves.",
    short: "A GP will talk to you about your symptoms and may examine your tummy and, with a gloved finger, inside your bottom. You may give a poo sample. Some people are referred for further tests, such as blood tests, a colonoscopy, tests of how well the sphincter muscles work, an ultrasound scan or defecography. You may not need all of them.",
    sections: [
      {
        heading: "At the GP",
        paragraphs: [
          "A GP will talk to you about your symptoms. They might feel your tummy and feel inside your bottom with a gloved finger, and ask you to give a poo sample.",
          "You may be asked to squeeze around their finger so they can see how well the muscles in your anus are working. Sometimes they find piles or a prolapse, which is not life threatening and can be treated.",
        ],
      },
      {
        heading: "Specialist tests",
        paragraphs: [
          "You might be referred to a specialist for more tests, such as blood tests, poo tests or scans. You may not need all of the tests straight away, or at all, if symptoms improve.",
          "If you are eligible and have not had a recent bowel screening test, your GP may suggest this first.",
        ],
      },
      {
        heading: "Looking inside the bowel",
        paragraphs: [
          "A colonoscopy checks inside your bowels using a thin, flexible tube with a small camera inside it. You will be given laxatives to empty your bowel first, so stay at home and near a toilet once you start taking them.",
          "The test may be uncomfortable but it should not hurt. It should take 30 to 45 minutes, though you might be at the hospital for around 2 hours.",
        ],
      },
      {
        heading: "Testing the muscles and nerves",
        paragraphs: [
          "Anorectal manometry uses a small pressure-measuring device, sometimes with a small balloon, to check how well the muscles and nerves in and around your rectum are working. Most of these tests are simple, quick and usually pain-free.",
          "An anal ultrasound scan gives a clear picture of both sphincter muscle rings, showing if one or both is damaged. It takes only five minutes and involves no radiation, though it may cause a little discomfort.",
          "Defecography uses an X-ray or MRI scan to see how well your rectum and pelvic floor muscles work while you poo.",
        ],
      },
      {
        heading: "Waiting for tests",
        paragraphs: [
          "These tests are usually done in NHS departments with a special interest in continence problems. Referral can take time, and your GP can tell you how long the wait might be.",
          "While you wait, your GP may consider advice or medicine. People with bowel incontinence may also be referred to a community continence service.",
        ],
      },
    ],
    helps: [
      "Ask about any test and how it will be done, to help you decide.",
      "Ask for a doctor or health professional of the same sex for intimate tests if you prefer.",
      "Stay at home and near a toilet once you start the laxatives before a colonoscopy.",
      "Ask your GP how long the wait might be, and what may help while you wait.",
      "Call 111 or the hospital if you have a high temperature after a colonoscopy.",
    ],
    tryThisWeek: [
      "Ask how each test is done.",
      "Ask how long the wait will be.",
      "Stay near a toilet before a colonoscopy.",
    ],
    ask: "Which tests do I need, and what can help while I wait?",
    interactive: {
      kind: "flip-cards",
      title: "Tests you may hear about",
      intro: "Turn each card to see what the test does. You may not need all of them.",
      cards: [
        { id: "exam", front: "Examination", when: "At the GP", back: "A look, and a gloved finger inside your bottom. You may be asked to squeeze, to show how well the muscles work." },
        { id: "samples", front: "Poo and blood tests", when: "At the GP or specialist", back: "Poo samples can check for blood, infection or other problems." },
        { id: "colonoscopy", front: "Colonoscopy", when: "If a specialist suggests it", back: "A thin tube with a small camera checks inside your bowel. Laxatives empty the bowel first." },
        { id: "manometry", front: "Anorectal manometry", when: "At a specialist clinic", back: "Checks how strong the sphincter muscles are, and sensation and nerves. Usually pain-free." },
        { id: "ultrasound", front: "Anal ultrasound", when: "At a specialist clinic", back: "Shows both sphincter muscle rings and whether one is damaged. About five minutes, no radiation." },
        { id: "defecography", front: "Defecography", when: "If needed", back: "An X-ray or MRI shows how the rectum and pelvic floor muscles work while you poo." },
      ],
    },
    sources: [NHS_BI, INFORM_BI, GUTS_FI, NHS_COLONOSCOPY, CKS_MGMT],
    quiz: {
      question: "How long does an anal ultrasound scan take, according to Guts UK?",
      options: [{ text: "About five minutes", right: true }, { text: "About two hours" }, { text: "A whole day" }],
      why: "It takes only five minutes and involves no radiation, though it may cause a little discomfort.",
    },
  },
  {
    id: "binc-diet",
    kicker: "Treatment",
    question: "Can food and fibre help firm my stools?",
    hook: "Some foods and drinks loosen stools. A diary, and changing one thing at a time, helps you find yours.",
    short: "Changing your diet helps many people, and the aim is regular, firm poos. Some things can make bowel incontinence worse, such as too much caffeine or alcohol, spicy food, artificial sweeteners or a very high fibre diet. Keep a food and symptom diary, change one thing at a time, and ask whether a fibre supplement could help.",
    sections: [
      {
        heading: "The aim: regular, firm poos",
        paragraphs: [
          "Most people find that their symptoms significantly improve by changing their diet, taking a fibre supplement to help have regular, firm poos, and strengthening their pelvic floor muscles.",
          "The NICE Clinical Knowledge Summary describes aiming for a diet that gives an ideal stool consistency and predictable bowel emptying, while keeping your overall diet balanced.",
        ],
      },
      {
        heading: "Things that can make it worse",
        paragraphs: [
          "Some things can make bowel incontinence worse, including too much caffeine, too much alcohol, spicy food, large amounts of artificial sweeteners and a very high fibre diet with too much bran, cereal or fruit.",
          "Caffeine is found in coffee, with a smaller amount in tea. Guts UK suggests reducing it slowly, moving to decaffeinated options.",
          "Other foods that may loosen stools for some people include beans, pulses, cabbage, sprouts, prunes and plums, and larger amounts of milk if you have trouble digesting lactose.",
        ],
      },
      {
        heading: "Fibre: the right kind and amount",
        paragraphs: [
          "Fibre supplements such as ispaghula husk, usually known as Fybogel, or psyllium husk are taken daily to help you have regular, firm poos. They usually come as granules that you mix with water.",
          "But too much fibre can make things worse for some people, and porridge or oats may cause fewer problems than whole wheat cereals. If you increase your fibre, make sure you drink enough fluid.",
        ],
      },
      {
        heading: "Finding your triggers",
        paragraphs: [
          "Keep a diary of your symptoms and what you eat and drink, as you may notice some things make it worse. Do not cut lots of foods and drinks from your diet at once: try one thing at a time to see if it helps.",
          "Bladder & Bowel Community suggests seeing whether eating little and often helps, rather than three large meals a day.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "A GP or a specialist incontinence service can review your diet. If constipation is causing the incontinence, laxatives or suppositories might be helpful instead.",
          "Symptoms of mild faecal incontinence can often be improved with changes in lifestyle, though reliable data on how well these measures work is lacking.",
        ],
      },
    ],
    helps: [
      "Keep a diary of your symptoms and what you eat and drink.",
      "Try changing one food or drink at a time, rather than cutting out lots at once.",
      "Reduce caffeine slowly, moving to decaffeinated options.",
      "Ask whether a daily fibre supplement could help you have regular, firm poos.",
      "Drink enough fluid if you increase your fibre.",
      "Eat a balanced diet.",
    ],
    tryThisWeek: [
      "Keep a food and symptom diary.",
      "Change one thing at a time.",
      "Swap some coffee for decaf.",
    ],
    ask: "Which foods should I try changing first, and would a fibre supplement help?",
    interactive: {
      kind: "risk-check",
      title: "Foods and drinks to check",
      intro: "Tick what you often eat or drink. Each one says what the sources suggest. Change one thing at a time.",
      items: [
        { id: "caffeine", label: "Coffee or other caffeine", note: "Too much caffeine can make it worse. Reduce it slowly, moving to decaffeinated options.", changeable: true },
        { id: "alcohol", label: "Alcohol", note: "Too much alcohol can make it worse, especially stout, beers and ales.", changeable: true },
        { id: "spicy", label: "Spicy food", note: "Spicy foods can make bowel incontinence worse for some people.", changeable: true },
        { id: "sweeteners", label: "Artificial sweeteners", note: "Large amounts can make it worse. They are also found in some diabetic products and nicotine gums.", changeable: true },
        { id: "fibre", label: "Lots of bran, cereal or fruit", note: "A very high fibre diet can make it worse. Porridge or oats may cause fewer problems.", changeable: true },
        { id: "beans", label: "Beans, pulses or cabbage", note: "These may loosen stools for some people, especially those with loose stools.", changeable: true },
        { id: "milk", label: "Lots of milk", note: "Larger amounts may cause diarrhoea if you have trouble digesting lactose.", changeable: true },
      ],
    },
    sources: [NHS_BI, INFORM_BI, GUTS_FI, BBC_FIT, CKS_ASSESS, CKS_MGMT, CKS_PROG],
    quiz: {
      question: "What does the NHS suggest when changing your diet?",
      options: [{ text: "Try one thing at a time", right: true }, { text: "Cut out lots of foods at once" }, { text: "Stop eating fibre altogether" }],
      why: "Do not cut lots of foods and drinks from your diet at once: try one thing at a time to see if it helps.",
    },
  },
  {
    id: "binc-medicines",
    kicker: "Treatment",
    question: "Which medicines can help firm my stools?",
    hook: "Loperamide slows the gut so poo is firmer and less frequent. If constipation is behind the leaks, a laxative may help instead.",
    short: "Loperamide, also known as Imodium, slows down food as it goes through your gut, so poos get firmer and you go less often. It can be prescribed in low doses for regular use over a long time, but it is not suitable for everyone, so get advice before using it regularly. If constipation is causing the leaks, laxatives may help instead.",
    sections: [
      {
        heading: "Loperamide",
        paragraphs: [
          "Loperamide works by slowing down food as it goes through your gut. Your body can then draw in more water from your intestines, so your poos get firmer and you poo less often. It usually starts to work within 1 hour.",
          "Guts UK says it also slightly increases the tone of the anal sphincter, which may help the muscle to tighten. It can be prescribed in low doses for regular use over a long period of time.",
        ],
      },
      {
        heading: "Get advice before using it regularly",
        paragraphs: [
          "Loperamide is not suitable for everyone with faecal incontinence, and for a few people it can be dangerous. It is important to get the advice of a doctor, pharmacist or other qualified prescriber before using it regularly.",
          "Do not take it if you are constipated or your stomach looks swollen, if you are having a flare-up of ulcerative colitis, or if you have severe diarrhoea after taking antibiotics. Bladder & Bowel Community says not to use it if you have diarrhoea with blood or mucus, or a temperature.",
          "If you buy loperamide, do not take it for more than 48 hours without talking to a doctor. If your doctor prescribes it for longer, they will tell you how much to take and adjust the dose to your symptoms.",
        ],
      },
      {
        heading: "Using it safely",
        paragraphs: [
          "Only take the recommended amount. Too much loperamide can cause serious heart problems, including a fast or irregular heartbeat.",
          "Contact 111 for advice now if you take 2 extra doses or more, or if you take more than the recommended dose and get a fast or irregular heartbeat.",
          "Common side effects include constipation, feeling sick, headaches and farting. If you have difficulty doing a poo, stop taking it. Some people find it increases pain and bloating in the stomach.",
        ],
      },
      {
        heading: "If constipation is the cause",
        paragraphs: [
          "If constipation is causing incontinence, laxatives or suppositories might be helpful. It may seem strange, but hard poo often needs loosening so that the overflow stops and poo becomes a normal consistency.",
          "Bladder & Bowel Community says a bulking agent such as Fybogel may be tried first. If that does not help, a GP may be able to advise on another laxative.",
        ],
      },
      {
        heading: "Reviewing other medicines",
        paragraphs: [
          "Medicines prescribed for other conditions can cause incontinence, so it is important to ask a health care professional about this. A GP might recommend a review of your diet and any medicines you take.",
          "The NICE Clinical Knowledge Summary lists medicines that can make it worse, including some antibiotics, some antidepressants, metformin and laxatives.",
        ],
      },
    ],
    helps: [
      "Get the advice of a doctor, pharmacist or other qualified prescriber before using loperamide regularly.",
      "Do not take loperamide you have bought for more than 48 hours without talking to a doctor.",
      "Only take the recommended amount of loperamide.",
      "Stop taking loperamide if you have difficulty doing a poo.",
      "Ask a health care professional whether any of your medicines could be playing a part.",
      "Ask whether a laxative could help if constipation is causing the leaks.",
    ],
    tryThisWeek: [
      "Ask a pharmacist or GP about loperamide.",
      "Stick to the recommended dose.",
      "Ask about your other medicines.",
    ],
    ask: "Would a medicine help firm my stools, and how should I take it?",
    interactive: {
      kind: "flip-cards",
      title: "Medicines that may help",
      intro: "Turn each card to see what it does. Ask a doctor or pharmacist which suits you.",
      cards: [
        { id: "loperamide", front: "Loperamide (Imodium)", when: "Loose stools. Ask first", back: "Slows food through the gut, so poo is firmer and you go less often. Usually starts to work within 1 hour." },
        { id: "fibre", front: "Fibre supplement", when: "Ispaghula or psyllium husk", back: "Taken daily, mixed with water, to help you have regular, firm poos." },
        { id: "laxative", front: "Laxatives or suppositories", when: "If constipation causes leaks", back: "Loosen hard poo so the overflow stops and poo becomes a normal consistency." },
        { id: "barrier", front: "Barrier cream", when: "For sore skin", back: "Looks after the skin around the back passage and protects it from soreness and breakdown." },
      ],
    },
    sources: [NHS_BI, INFORM_BI, GUTS_FI, NHS_LOP_ABOUT, NHS_LOP_HOW, NHS_LOP_WHO, NHS_LOP_SIDE, BBC_FIT, CKS_ASSESS],
    quiz: {
      question: "You bought loperamide from a pharmacy. How long can you take it before talking to a doctor?",
      options: [{ text: "48 hours", right: true }, { text: "2 weeks" }, { text: "As long as you like" }],
      why: "If you buy loperamide, do not take it for more than 48 hours without talking to a doctor.",
    },
  },
  {
    id: "binc-exercises",
    kicker: "Treatment",
    question: "How do pelvic floor exercises and bowel retraining work?",
    hook: "Strengthening the muscles that hold poo in, and teaching the bowel a routine. Both take weeks, not days.",
    short: "Exercises to strengthen the pelvic floor and the muscles around your bottom help many people, and you can try them while waiting for an appointment. Bowel retraining builds a regular routine and teaches you to hold on for longer. Biofeedback helps you learn to squeeze effectively. It may take several weeks to notice an improvement.",
    sections: [
      {
        heading: "Why the pelvic floor matters",
        paragraphs: [
          "The pelvic floor is layers of muscles that stretch from the pubic bone to the tailbone and help support the bladder and bowel. They can become weak through childbirth or surgery, changing hormones, a persistent cough or chronic constipation.",
          "Special exercises to strengthen the anal sphincter muscles help many people, and Guts UK says you can try them while waiting for an appointment. Bladder & Bowel Community says this is just as important for men as for women.",
        ],
      },
      {
        heading: "How to do them",
        paragraphs: [
          "Start in a comfortable position, such as sitting or lying down. Close the back passage as if you are trying to stop yourself from passing wind, but try not to clench your buttocks.",
          "For long squeezes, squeeze and hold for around 10 seconds, working up to this if you need to, then relax fully for about 5 seconds. For short squeezes, squeeze tight for 1 second, then relax fully.",
          "NHS inform suggests aiming for 10 long and 10 short squeezes, 3 times a day. Relaxing fully between squeezes is just as important as the squeeze itself.",
        ],
      },
      {
        heading: "Give it time",
        paragraphs: [
          "Do not be put off if you do not see an improvement straight away. It may take several weeks to notice a difference.",
          "Practise any exercises your doctor has recommended. A specialist incontinence service can recommend exercises to strengthen your pelvic floor and the muscles around your bottom.",
        ],
      },
      {
        heading: "Bowel retraining",
        paragraphs: [
          "Bowel retraining helps you empty your bowels fully and develop a controlled routine for emptying them. Try to poo at regular times, such as after meals.",
          "Bladder & Bowel Community describes going to the bathroom when you feel the urge, and holding on for 1 minute before sitting down. You then gradually increase the time until you feel more confident with your control.",
          "Sitting with your feet on a footstool, so your knees are higher than your hips, and leaning forward slightly can help. Try not to strain when you poo.",
        ],
      },
      {
        heading: "Biofeedback",
        paragraphs: [
          "Biofeedback uses a small probe and sensor to measure how your sphincter muscles squeeze, which shows whether you are learning to squeeze effectively. It is provided by pelvic floor nurses, and some services have physiotherapists.",
          "You may be referred to a specialist or physio for this. Reliable data on the outcomes of these treatments is limited.",
        ],
      },
    ],
    helps: [
      "Practise any exercises your doctor has recommended for your pelvic floor or the muscles around your bottom.",
      "Try pelvic floor exercises while you wait for an appointment.",
      "Aim for 10 long and 10 short squeezes, 3 times a day, building up to it.",
      "Try to poo at regular times, such as after meals.",
      "Put your feet on a footstool and lean forward slightly when you poo.",
      "Try not to strain when you poo.",
    ],
    tryThisWeek: [
      "Practise your squeezes daily.",
      "Try a toilet visit after a meal.",
      "Use a footstool on the toilet.",
    ],
    ask: "Can I be referred to a specialist physiotherapist or nurse for pelvic floor exercises or biofeedback?",
    interactive: {
      kind: "timeline",
      title: "Building control",
      steps: [
        { id: "find", when: "Starting out", title: "Find the right muscles", points: ["Close the back passage as if stopping wind.", "Try not to clench your buttocks."] },
        { id: "long", when: "Each session", title: "Long squeezes", points: ["Hold for around 10 seconds, or as long as you can at first.", "Relax fully for about 5 seconds."] },
        { id: "short", when: "Each session", title: "Short squeezes", points: ["Squeeze tight for 1 second, then relax fully.", "Aim for up to 10."] },
        { id: "habit", when: "Three times a day", title: "Make it a habit", points: ["Aim for 10 long and 10 short squeezes.", "Build up to it if you need to."] },
        { id: "routine", when: "After meals", title: "A regular toilet time", points: ["Try to poo at regular times, such as after meals.", "Feet on a footstool, lean forward slightly."] },
        { id: "hold", when: "Over several weeks", title: "Hold on a little longer", points: ["When you feel the urge, hold for 1 minute before sitting.", "It may take several weeks to notice a difference."] },
      ],
    },
    sources: [NHS_BI, INFORM_BI, GUTS_FI, BBC_FIT, INFORM_PF, CKS_MGMT, CKS_PROG],
    quiz: {
      question: "How long might it take to notice an improvement from pelvic floor exercises?",
      options: [{ text: "Several weeks", right: true }, { text: "A day" }, { text: "An hour" }],
      why: "It may take several weeks to notice a difference.",
    },
  },
  {
    id: "binc-further",
    kicker: "Treatment",
    question: "What if the first treatments do not help?",
    hook: "Irrigation, nerve stimulation, injections and surgery are options for some. Only a small number of people need an operation.",
    short: "If diet, medicines and exercises do not help enough, a specialist continence service can offer other treatments, such as rectal irrigation, nerve stimulation and bulking injections. Only a small percentage of people need surgery, which can include repairing the sphincter muscles, a device that sends electrical pulses to the nerves, or a stoma as a last resort. A surgeon will explain the risks and benefits.",
    sections: [
      {
        heading: "A specialist continence service",
        paragraphs: [
          "If treatment from a GP does not help, you might be referred to a specialist service. Guts UK says some services may not need a GP referral.",
          "People who continue to have symptoms after initial treatment should be considered for specialised management. A combination of treatments is often needed, with a review after each one.",
        ],
      },
      {
        heading: "Rectal irrigation",
        paragraphs: [
          "Rectal irrigation, also called anal or transanal irrigation, uses a special pump, water and a tube to wash out the bowel. It lets you clear your bowel in the privacy of your own home, at a time that suits you.",
          "You would need a referral to a specialist nurse service for the right support. It may take several weeks to get comfortable with the equipment, and some people decide to stop. It is not the same as colonic irrigation, which is not a recommended treatment.",
        ],
      },
      {
        heading: "Nerve stimulation and injections",
        paragraphs: [
          "Percutaneous tibial nerve stimulation, or PTNS, directly stimulates the nerves responsible for bowel control. Sacral nerve stimulation, offered in some specialist centres, uses a small device under the skin of the upper buttock to help correct the messages along the nerves.",
          "Sacral nerve stimulation is done in two stages: an assessment first, then the implant depending on the results. The NICE Clinical Knowledge Summary says around 40 in 100 people achieve complete control after a permanent implant.",
          "Injectable treatments put a gel into the anal canal to bulk up the tissues and help prevent leakage. They are a less invasive option than surgery.",
        ],
      },
      {
        heading: "Surgery",
        paragraphs: [
          "Only a small percentage of people need surgery. It may be offered if other treatments have not helped or your symptoms are severe, and a colorectal surgeon would explain your options, the risks and benefits.",
          "Operations can include repairing the anal sphincter muscles, making a new sphincter using muscle from the thigh, or fitting an artificial sphincter. A small tube can also be put into your tummy to flush water through, which helps empty your bowels.",
          "Bladder & Bowel Community says sphincter repair is not advised for women who are considering having more children.",
        ],
      },
      {
        heading: "A stoma as a last resort",
        paragraphs: [
          "A colostomy, where an opening called a stoma is made in the tummy and poo collects in a pouch, is usually only recommended if other treatments are unsuccessful. It can be done when injury to the bowel, spinal cord or nerves means you cannot control when you poo.",
          "Whatever the treatment, complete continence may not be achieved, and some people continue to use pads. Talking through realistic expectations with a specialist surgeon is part of the process.",
        ],
      },
    ],
    helps: [
      "Ask to be referred to a specialist continence service if the first treatments have not helped.",
      "Ask whether you need a GP referral, as some services may not.",
      "Get training and support from a specialist nurse before using rectal irrigation.",
      "Ask the surgeon about the risks, benefits and long-term results of any operation.",
      "Ask about continence products and coping strategies alongside any treatment.",
    ],
    tryThisWeek: [
      "Ask about a specialist referral.",
      "Get support before trying irrigation.",
      "Ask about long-term results.",
    ],
    ask: "What other treatments might help me, and what are their long-term results?",
    interactive: {
      kind: "flip-cards",
      title: "Further options",
      intro: "Turn each card to see what the option involves. A specialist can say which might suit you.",
      cards: [
        { id: "irrigation", front: "Rectal irrigation", when: "With specialist nurse support", back: "A pump, water and a tube wash out the bowel at home, at a time that suits you." },
        { id: "ptns", front: "Tibial nerve stimulation", when: "Without an operation", back: "Directly stimulates the nerves responsible for bowel control." },
        { id: "injection", front: "Bulking injections", when: "If other treatments fail", back: "A gel injected into the anal canal bulks up the tissues to help prevent leakage." },
        { id: "sns", front: "Sacral nerve stimulation", when: "Specialist centres, two stages", back: "A small device under the skin of the upper buttock helps correct the nerve messages." },
        { id: "repair", front: "Sphincter repair", when: "Surgery", back: "The sphincter muscles are overlapped and stitched. Not advised if you are considering more children." },
        { id: "stoma", front: "Colostomy", when: "Usually a last resort", back: "An opening in the tummy, called a stoma, with poo collected in a pouch." },
      ],
    },
    sources: [NHS_BI, INFORM_BI, GUTS_FI, BBC_FIT, CKS_MGMT, CKS_PROG, NHS_COLOSTOMY_WHY],
    quiz: {
      question: "How many people with bowel incontinence need surgery, according to NHS inform?",
      options: [{ text: "Only a small percentage", right: true }, { text: "Almost everyone" }, { text: "About half" }],
      why: "Only a small percentage of people need surgery.",
    },
  },
  {
    id: "binc-products",
    kicker: "Living with",
    question: "Which pads and products help, and how do I care for my skin?",
    hook: "Pads, plugs and barrier creams can make everyday life easier while treatment works. Your skin needs care too.",
    short: "Products such as pads, incontinence pants and bed pads are not a treatment, but they can help you feel more confident day to day. Anal plugs can stop leaks for some people. Keep the skin around your bottom clean and dry, avoid too much wiping, and use a barrier cream if you are sore. A local NHS continence service can advise, usually without a GP referral.",
    sections: [
      {
        heading: "Pads and pants",
        paragraphs: [
          "A GP might recommend products such as incontinence pants, or pads for inside your clothes or on your bed. They are not a treatment, but they can help day to day while you wait for an assessment or for treatment to work.",
          "Products may help you feel more confident during everyday activities, like socialising or exercising. Change a pad or liner once it is soiled.",
        ],
      },
      {
        heading: "Anal plugs",
        paragraphs: [
          "Anal plugs are made of foam or silicone and go inside your bottom, in a similar way to a tampon. They create a barrier and stop leaks.",
          "Your doctor or local NHS continence service will explain how to use them and where to get them. They are offered if you wish and can tolerate them.",
        ],
      },
      {
        heading: "Looking after your skin",
        paragraphs: [
          "Leaks raise the risk of the skin around the back passage breaking down. Keep the area clean and dry, and avoid too much wiping. Pre-moistened tissues can help.",
          "Barrier creams or ointments, such as zinc oxide, protect the skin from soreness. Your pharmacist can advise.",
          "A skin infection may show as more pain when you poo, or even just sitting, and if left untreated it can cause a fever.",
        ],
      },
      {
        heading: "Freshness and odour",
        paragraphs: [
          "With proper protection, good personal hygiene and changing promptly after a leak, many problems with odour can be avoided. A shower with a removable head, or a bidet, makes it easier to get clean.",
          "When you are out, take a clean-up kit with your spare pads and clothes, such as large wipes and sealable disposal bags.",
        ],
      },
      {
        heading: "Getting products",
        paragraphs: [
          "Your local NHS continence service can give help and advice about continence products, and you do not usually need a GP referral to make an appointment. You can also buy products from pharmacies or online.",
          "Bladder & Bowel Community says incontinence products should be available free of charge through district nursing services. If you buy them yourself, 0% VAT applies when you buy 200 pieces or less for personal use.",
        ],
      },
    ],
    helps: [
      "Ask your local NHS continence service for advice on products.",
      "Change a pad or liner once it is soiled.",
      "Keep the skin around your bottom clean and dry, and avoid too much wiping.",
      "Use a barrier cream if you are sore, and ask your pharmacist for advice.",
      "Carry a clean-up kit with spare pads, clothes, wipes and disposal bags.",
    ],
    tryThisWeek: [
      "Contact your continence service.",
      "Pack a clean-up kit.",
      "Use a barrier cream if sore.",
    ],
    ask: "Which continence products would suit me, and can I get them through the NHS?",
    interactive: {
      kind: "flip-cards",
      title: "Products that can help",
      intro: "Turn each card to see what it is for. A continence service can help you choose.",
      cards: [
        { id: "pads", front: "Pads and pants", when: "Day to day", back: "Absorb leaks and protect your clothes. Change once soiled." },
        { id: "bed", front: "Bed pads", when: "At night", back: "Pads for your bed, which a GP or continence service may recommend." },
        { id: "plug", front: "Anal plug", when: "If it suits you", back: "Foam or silicone, inserted like a tampon. Creates a barrier and stops leaks." },
        { id: "cream", front: "Barrier cream", when: "If you are sore", back: "Protects the skin around the back passage from soreness. A pharmacist can advise." },
        { id: "tissues", front: "Pre-moistened tissues", when: "When cleaning", back: "Help keep the area clean without too much wiping." },
      ],
    },
    sources: [NHS_BI, INFORM_BI, GUTS_FI, BBC_FI, CKS_MGMT, BBC_PRACTICAL, BBC_EMOTIONS, BBC_DEMENTIA],
    quiz: {
      question: "Are pads a treatment for bowel incontinence?",
      options: [{ text: "No, but they can help day to day", right: true }, { text: "Yes, they cure it" }, { text: "They make it worse" }],
      why: "They are not a treatment, but they can help day to day while you wait for an assessment or for treatment to work.",
    },
  },
  {
    id: "binc-out-and-about",
    kicker: "Living with",
    question: "How can I go out, travel and work with confidence?",
    hook: "Knowing where the toilets are, a card in your pocket and a small kit in your bag can make outings feel possible again.",
    short: "Planning helps. Find out where the toilets are, carry spare clothes and supplies, and wear clothes that are easy to undo. A Radar key opens many accessible toilets, and a toilet card can help explain that you need one urgently. Incontinence can be classed as a disability under the Equality Act 2010, and Access to Work may help with practical support at work.",
    sections: [
      {
        heading: "Planning ahead",
        paragraphs: [
          "Plan an easy route to the toilet at home and when you are out. Guts UK suggests knowing how long an outing will be, taking a set of spare clothes, and finding out where the nearest toilets are, for example with a toilet map website.",
          "Wear clothing that is easy to get off in a rush, such as trousers or skirts with elasticated waistbands rather than buttons.",
        ],
      },
      {
        heading: "Keys and cards",
        paragraphs: [
          "Radar keys unlock lots of accessible public toilets in places like cafés, restaurants and shopping centres. NHS inform says the key gives access to 9,000 disabled toilets around the UK, and it is only sold to people who need it because of a disability or health condition.",
          "Bladder & Bowel Community's Just Can't Wait card is free as a digital card on your phone, and helps explain discreetly that you urgently need a toilet. Guts UK also offers a free Can't Wait card. A card does not guarantee access, but it can help.",
        ],
      },
      {
        heading: "Travelling",
        paragraphs: [
          "Choose transport with a toilet, book a seat near the toilets if you fly, and note where the service stations are if you drive. Airlines offer Special Assistance, which needs 48 hours' notice.",
          "Pack plenty of pads, pants, creams and wipes, with some in your hand luggage in case of delays. Ask your GP for a letter explaining your medicines and supplies, and sort out travel insurance before you pay for a holiday, telling the insurer about your condition.",
        ],
      },
      {
        heading: "At work",
        paragraphs: [
          "Under the Equality Act 2010, incontinence can be classed as a disability. Employers must consider reasonable adjustments, and it is unlawful for them to discriminate.",
          "There is no easy answer about when to tell an employer, and you may not want others to know. Access to Work can help you get or stay in work if you have a health condition, for example with a grant for practical support, and it will not affect other benefits.",
        ],
      },
      {
        heading: "Looking after your mood",
        paragraphs: [
          "Bowel incontinence can affect your mental health, and it can help to talk about how you are feeling. You can get talking therapies for free on the NHS, in person, by video, over the phone or as an online course.",
        ],
      },
    ],
    helps: [
      "Plan an easy route to the toilet at home and when you are out.",
      "Take a set of spare clothes when you go out.",
      "Wear clothing that is easy to get off in a rush.",
      "Get a Radar key for accessible public toilets.",
      "Carry a free toilet card, such as the Just Can't Wait card.",
      "Give the airline 48 hours' notice if you need Special Assistance.",
    ],
    tryThisWeek: [
      "Look up toilets before you go.",
      "Pack a set of spare clothes.",
      "Get a Radar key or toilet card.",
    ],
    ask: "Could I get help at work, or a letter to help with travel?",
    interactive: {
      kind: "scenarios",
      title: "Out and about",
      scenarios: [
        {
          id: "town",
          situation: "You are meeting a friend in town for the first time in months.",
          options: [{ text: "Check where the toilets are and pack spare clothes", best: true }, { text: "Stay at home to be safe" }],
          why: "Guts UK suggests knowing how long an outing will be, taking a set of spare clothes, and finding out where the nearest toilets are.",
        },
        {
          id: "shop",
          situation: "A shop's toilet is for staff only, and you cannot wait.",
          options: [{ text: "Show your toilet card and ask", best: true }, { text: "Leave and hope you make it home" }],
          why: "A card does not guarantee access, but it can help.",
        },
        {
          id: "flight",
          situation: "You are booking a flight.",
          options: [{ text: "Book a seat near the toilets", best: true }, { text: "Take whatever seat you are given" }],
          why: "Book a seat near the toilets if you fly. Airlines offer Special Assistance, which needs 48 hours' notice.",
        },
        {
          id: "work",
          situation: "You need more toilet breaks at work.",
          options: [{ text: "Think about asking for reasonable adjustments", best: true }, { text: "Skip breaks and hope no one notices" }],
          why: "Under the Equality Act 2010, incontinence can be classed as a disability. Employers must consider reasonable adjustments.",
        },
      ],
    },
    sources: [NHS_BI, INFORM_BI, GUTS_FI, BBC_JCW, BBC_TRAVEL, CKS_MGMT, BBC_DISCRIM, GOV_ATW],
    quiz: {
      question: "What does a Radar key do?",
      options: [{ text: "Unlocks many accessible public toilets", right: true }, { text: "Books a hospital appointment" }, { text: "Orders continence pads" }],
      why: "Radar keys unlock lots of accessible public toilets in places like cafés, restaurants and shopping centres.",
    },
  },
  {
    id: "binc-relationships",
    kicker: "Living with",
    question: "How can I feel close to someone again?",
    hook: "Telling the people you trust, and a little planning, can take some of the worry out of closeness.",
    short: "Bowel incontinence can affect confidence, relationships and intimacy, but it does not make close relationships impossible. Sharing it with people you trust is often met with understanding and support. Practical steps, such as emptying your bowel beforehand and protecting the bed, can ease worries about sex. Counselling, including couples therapy, can help too.",
    sections: [
      {
        heading: "You are not alone",
        paragraphs: [
          "Bladder and bowel problems are rarely discussed, so it is easy to feel you are the only one. Those who confide in friends or family usually find their problem is accepted in a sympathetic and matter-of-fact way.",
          "Others will rarely notice the slight bulge of a pad, for the simple reason that they are not looking for it.",
        ],
      },
      {
        heading: "Sharing it",
        paragraphs: [
          "Keeping it a secret can cut you off from the support of family and friends. Telling a few people you trust means they can understand, help you plan and listen when you feel frustrated.",
          "Think about how much you want to tell each person: you are still entitled to your privacy. Choose carefully who you share it with.",
        ],
      },
      {
        heading: "Intimacy and sex",
        paragraphs: [
          "A bowel control problem does not mean that intimate relationships are impossible. A relationship is about more than sex, and it may help to ask yourself whether you would reject a partner who had the same problem.",
          "Empty your bowel before sex, and protect the bed with a bed pad or an old towel. You may find there is a time of day when your bowels are more in control.",
          "Talking with your partner can help you come up with ideas together. A GP or continence adviser can also give advice.",
        ],
      },
      {
        heading: "Looking after your feelings",
        paragraphs: [
          "Long-term faecal incontinence can lead to feelings of hopelessness, anxiety or depression. It is important to talk to your doctor about any low feelings, so that the right support can be arranged.",
          "This might include counselling, or couples therapy if you are avoiding intimacy or having relationship problems. Free NHS talking therapies can also help you find ways to cope.",
        ],
      },
    ],
    helps: [
      "Tell a few close friends or family members you trust.",
      "Think about how much you want to tell each person.",
      "Empty your bowel before sex, and protect the bed.",
      "Talk with your partner to find ideas together.",
      "Talk to your doctor about any low feelings, so support can be arranged.",
      "Ask for advice on how to talk to friends and family about incontinence.",
    ],
    tryThisWeek: [
      "Tell one person you trust.",
      "Plan ahead for intimacy.",
      "Mention low feelings to your doctor.",
    ],
    ask: "Could I be referred for counselling, or couples therapy, to help with how this affects me?",
    interactive: {
      kind: "timeline",
      title: "Planning for closeness",
      steps: [
        { id: "before", when: "Beforehand", title: "Feel fresh and ready", points: ["Empty your bowel before sex.", "Protect the bed with a bed pad or an old towel."] },
        { id: "time", when: "Choosing a time", title: "Pick a good time", points: ["There may be a time of day when your bowels are more in control."] },
        { id: "talk", when: "Together", title: "Talk it through", points: ["Speak to your partner and find ideas together."] },
        { id: "after", when: "Afterwards", title: "Freshen up", points: ["After a comfortable while, freshen up and put on your pad."] },
        { id: "support", when: "Any time", title: "Get support", points: ["A GP or continence adviser can give advice.", "Counselling or couples therapy can help."] },
      ],
    },
    sources: [BBC_SEX, BBC_EMOTIONS, GUTS_FI, NHS_BI, CKS_MGMT],
    quiz: {
      question: "What do people who confide in friends or family usually find?",
      options: [{ text: "Their problem is accepted sympathetically", right: true }, { text: "Everyone already knew" }, { text: "Friends lose interest" }],
      why: "Those who confide in friends or family usually find their problem is accepted in a sympathetic and matter-of-fact way.",
    },
  },
  {
    id: "binc-carers",
    kicker: "Living with",
    question: "How can I help someone I care for?",
    hook: "Dignity first: easy toilet access, a routine, the right products, and help for you as well.",
    short: "Caring for someone with bowel incontinence can have a big emotional and physical impact on you both. Helping them keep their dignity and control matters most. Easy access to the toilet, a regular routine, the right products and equipment, and watching for constipation can all help. You can also ask your council for a free carer's assessment.",
    sections: [
      {
        heading: "Dignity and control",
        paragraphs: [
          "Caring for someone with a bowel problem may not be easy, and it can affect you emotionally too. A carer's most important job is to help keep the person's dignity as much as possible.",
          "Let them make as many decisions as they can, and respect their wishes. Call their products pads, underwear or special products rather than nappies, and avoid discussing their care with others.",
          "Bowel incontinence is common in people who need care. Rates of up to 67 in every 100 people living in care homes have been seen.",
        ],
      },
      {
        heading: "Making the toilet easy to reach",
        paragraphs: [
          "Make it easy for the person to reach a toilet quickly, as this should help to prevent accidents. A commode close to their bed or chair may help if they have mobility problems.",
          "Commodes, raised toilet seats and handrails can help. A continence adviser, GP or district nurse can refer you to an occupational therapist, who may arrange equipment.",
          "Toilets should be private, comfortable and safe to use, with enough time allowed, and clothes should be easy to remove.",
        ],
      },
      {
        heading: "Routine, and caring for someone with dementia",
        paragraphs: [
          "Not everyone with dementia develops continence problems, and sometimes there is a simple medical answer, so seek medical advice. A regular habit, such as going to the toilet before or after meals, helps many people.",
          "Bowel incontinence is often caused or made worse by constipation. A warm drink at breakfast and then a visit to the toilet 20 minutes later works for many people, along with enough fibre.",
          "Arrows, labels or a picture on the toilet door, and a warm, well lit and comfortable toilet, can help someone who forgets where they are going.",
        ],
      },
      {
        heading: "Out of the house",
        paragraphs: [
          "Be aware of where the nearest toilet is, and take a bag with continence products, hand wipes and spare underwear. It is fine to use disabled toilets, which have more space to change.",
          "A toilet card or a Radar key can help with access to toilets when you are out.",
        ],
      },
      {
        heading: "Support for you",
        paragraphs: [
          "Anyone over 18 who cares for someone can ask their local council for a free carer's assessment. It might recommend things like someone to take over so you can have a break, or advice about benefits for carers.",
          "Carers UK offers advice on carers' rights, and charities such as Bladder & Bowel UK, Guts UK and Age UK offer information and support.",
        ],
      },
    ],
    helps: [
      "Help the person keep their dignity, and let them make their own decisions.",
      "Call products pads or special underwear, not nappies.",
      "Make it easy for the person to reach a toilet quickly.",
      "Keep a regular routine, such as going before or after meals.",
      "Watch for constipation, which often causes or worsens bowel incontinence.",
      "Ask your local council for a free carer's assessment.",
    ],
    tryThisWeek: [
      "Clear the way to the toilet.",
      "Try a toilet visit after breakfast.",
      "Ask for a carer's assessment.",
    ],
    ask: "Can we be referred to a continence service, and what equipment might help at home?",
    interactive: {
      kind: "scenarios",
      title: "Caring at home",
      scenarios: [
        {
          id: "night",
          situation: "Your dad keeps having accidents on the way to the bathroom.",
          options: [{ text: "Put a commode close to his bed or chair", best: true }, { text: "Tell him to hurry next time" }],
          why: "A commode close to their bed or chair may help if they have mobility problems.",
        },
        {
          id: "dementia",
          situation: "Your mum, who has dementia, has started having bowel accidents.",
          options: [{ text: "Seek medical advice, as there may be a simple cause", best: true }, { text: "Assume it is just her dementia" }],
          why: "Sometimes there is a simple medical answer, so seek medical advice.",
        },
        {
          id: "words",
          situation: "You are talking to her about her continence products.",
          options: [{ text: "Call them pads or special underwear", best: true }, { text: "Call them nappies" }],
          why: "Call their products pads, underwear or special products rather than nappies.",
        },
        {
          id: "tired",
          situation: "You are exhausted from caring.",
          options: [{ text: "Ask the council for a carer's assessment", best: true }, { text: "Keep going without help" }],
          why: "Anyone over 18 who cares for someone can ask their local council for a free carer's assessment.",
        },
      ],
    },
    sources: [BBC_CARERS, BBC_DEMENTIA, NHS_BI, CKS_MGMT, CKS_PREV, NHS_CARER_ASSESS, GUTS_FI],
    quiz: {
      question: "What is a carer's most important job, according to Bladder & Bowel Community?",
      options: [{ text: "Helping the person keep their dignity", right: true }, { text: "Making every decision for them" }, { text: "Keeping it from the GP" }],
      why: "A carer's most important job is to help keep the person's dignity as much as possible.",
    },
  },
];
