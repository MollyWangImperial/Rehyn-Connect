import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Ulcerative colitis page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS and Crohn's & Colitis
// UK, with Guts UK and GOV.UK (Access to Work). Emergency advice is worded as the NHS and Crohn's & Colitis UK
// word it. General information only; it never replaces what a person's own GP or IBD team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const ccuk = (label: string, path: string): LearnSource => ({
  label: `Crohn's & Colitis UK: ${label}`,
  url: `https://www.crohnsandcolitis.org.uk/info-support/information-about-crohns-and-colitis/all-information-about-crohns-and-colitis/${path}`,
});

const NHS_UC = nhs("Ulcerative colitis", "conditions/ulcerative-colitis/");
const NHS_COLONOSCOPY = nhs("Colonoscopy", "tests-and-treatments/colonoscopy/");
const NHS_MESALAZINE = nhs("About mesalazine", "medicines/mesalazine/about-mesalazine/");
const NHS_ILEOSTOMY_WHAT = nhs("What is an ileostomy?", "tests-and-treatments/ileostomy/what-is-an-ileostomy/");
const NHS_ILEOSTOMY_RECOVERY = nhs("Recovering and lifestyle changes after an ileostomy", "tests-and-treatments/ileostomy/recovery/");
const NHS_TALKING = nhs("Find NHS talking therapies for anxiety and depression", "nhs-services/mental-health-services/find-nhs-talking-therapies-for-anxiety-and-depression/");

const CCUK_UC = ccuk("Ulcerative Colitis", "understanding-crohns-and-colitis/ulcerative-colitis");
const CCUK_FLARES = ccuk("Flare-ups", "symptoms/flare-ups");
const CCUK_URGENCY = ccuk("Bowel incontinence and urgency", "symptoms/bowel-incontinence-and-urgency");
const CCUK_FATIGUE = ccuk("Fatigue", "symptoms/fatigue");
const CCUK_BONES = ccuk("Bones", "symptoms/bones");
const CCUK_TESTS = ccuk("Tests and investigations", "healthcare/tests-and-investigations");
const CCUK_5ASA = ccuk("5-ASAs (aminosalicylates)", "treatments/5-asas-aminosalicylates");
const CCUK_STEROIDS = ccuk("Steroids", "treatments/steroids");
const CCUK_THIOPURINES = ccuk("Azathioprine and mercaptopurine", "treatments/azathioprine-and-mercaptopurine");
const CCUK_BIOLOGICS = ccuk("Biologics and other targeted medicines", "treatments/biologics-and-other-targeted-medicines");
const CCUK_SURGERY = ccuk("Surgery for Ulcerative Colitis", "surgery-and-complications/surgery-for-ulcerative-colitis");
const CCUK_CANCER = ccuk("Risk of bowel cancer and other gut-related cancers", "surgery-and-complications/risk-of-bowel-cancer-and-other-gut-related-cancers");
const CCUK_FOOD = ccuk("Food", "living-with-crohns-or-colitis/food");
const CCUK_TRAVEL = ccuk("Travelling with Crohn's or Colitis", "living-with-crohns-or-colitis/travelling-with-crohns-or-colitis");
const CCUK_MENTAL = ccuk("Mental health and wellbeing", "living-with-crohns-or-colitis/mental-health-and-wellbeing");
const CCUK_EMPLOYEES = ccuk("Employment: a guide for employees", "employment-and-education/employment-a-guide-for-employees");

const GUTS_UC: LearnSource = { label: "Guts UK: Ulcerative colitis", url: "https://gutscharity.org.uk/advice-and-information/conditions/ulcerative-colitis/" };
const GOV_ACCESS_TO_WORK: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };

export const colitisAnswers: LearnArticle[] = [
  {
    id: "uc-what-it-is",
    kicker: "Understanding",
    question: "What is ulcerative colitis?",
    hook: "Inflammation in the lining of the large bowel that comes and goes. Lifelong, but there are many effective treatments.",
    short: "Ulcerative colitis is a condition where parts of the large bowel (colon) and rectum become inflamed. It is a type of inflammatory bowel disease (IBD) that comes and goes in flare-ups and calmer times. There is no cure yet, but there are many effective treatments.",
    sections: [
      {
        heading: "Inflammation in the large bowel",
        paragraphs: [
          "Ulcerative colitis is a condition where parts of your large bowel (colon) and rectum become inflamed (swollen). It's one of a group of conditions called inflammatory bowel disease (IBD).",
          "Colitis means the lining of the large bowel has become inflamed: swollen, red and fragile, which means it can bleed at times. If this inflammation becomes severe enough, ulcers (open painful sores) may form in the lining. Ulcers can also heal as the condition gets better.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "It's not known what causes ulcerative colitis. It's thought to be an autoimmune condition, which is where your body's natural defence system (immune system) attacks healthy parts of your body.",
          "Researchers believe that a mix of genes, bacteria in the gut and the environment probably cause Colitis, but more research is needed to know for certain. You might be more likely to get it if someone else in your family has ulcerative colitis, or if you used to smoke.",
          "Colitis is not contagious; you cannot catch it. There's nothing you could have done differently that would have stopped you from developing it.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "Colitis can be diagnosed at any age, but most people are diagnosed between the ages of 20 and 40. Crohn's & Colitis UK says at least 1 in every 233 people in the UK live with ulcerative colitis.",
          "It may not always be possible for doctors to tell Colitis from Crohn's disease if only the colon is affected. As many as 1 in 10 people with ulcerative colitis will have their diagnosis changed to Crohn's or IBD Unclassified in the first five years.",
          "Ulcerative colitis is not the same as irritable bowel syndrome (IBS). IBS has some similar symptoms, but Colitis causes inflammation in the bowel and blood in poo, and IBS does not.",
        ],
      },
      {
        heading: "A lifelong condition that comes and goes",
        paragraphs: [
          "Ulcerative colitis is a lifelong condition. Sometimes you may have no symptoms or only mild symptoms for a period of time (remission), and then have an episode of very bad symptoms. This is called a flare-up.",
          "Right now, there is no cure. But there are many effective treatments to help control symptoms and prevent long-term problems, including medicines, surgery, and sometimes a combination of both.",
        ],
      },
      {
        heading: "Support from a specialist team",
        paragraphs: [
          "Everyone with a diagnosis of Colitis should be seen by an IBD specialist and cared for by a team led by a consultant gastroenterologist, a doctor who specialises in the digestive system. Teams are likely to include IBD nurse specialists and surgeons.",
          "Being told you have Colitis can be a shock, and coming to terms with it can take time. There's no right or wrong way of doing things, and there is lots of support out there.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you have symptoms of ulcerative colitis.",
      "Take medicines you've been prescribed, even if you're currently feeling well and do not have symptoms.",
      "Find out if your IBD team has a direct number or email address, and ask how best to alert them if you become unwell.",
      "Learn about your condition at your own pace: some people feel more in control learning all they can, others take things one step at a time.",
      "Call the Crohn's & Colitis UK helpline on 0300 222 5700 for information and support.",
    ],
    tryThisWeek: [
      "Keep taking your medicines when well.",
      "Save your IBD team's contact details.",
      "Call the helpline if you need support.",
    ],
    ask: "Which type of ulcerative colitis do I have, and who is in my IBD team?",
    interactive: {
      kind: "flip-cards",
      title: "Words you will hear",
      intro: "Turn each card to see what each word means.",
      cards: [
        { id: "uc", front: "Ulcerative colitis", when: "The large bowel", back: "Parts of the large bowel and rectum become inflamed, and ulcers can form in the lining." },
        { id: "ibd", front: "IBD", when: "The group of conditions", back: "Inflammatory bowel disease, which includes ulcerative colitis, Crohn's disease and microscopic colitis." },
        { id: "ibdu", front: "IBD Unclassified", when: "When it is hard to tell", back: "Used when doctors cannot tell Colitis from Crohn's, if the inflammation only affects the colon." },
        { id: "ibs", front: "IBS", when: "A different condition", back: "Irritable bowel syndrome has some similar symptoms, but it does not cause inflammation or blood in poo." },
        { id: "remission", front: "Remission", when: "Calmer times", back: "You feel better because your Colitis is well controlled. Some symptoms, like fatigue, may not go away completely." },
        { id: "flare", front: "Flare-up", when: "Active times", back: "Symptoms come back and you feel unwell. A flare-up can last from a few days to several months." },
      ],
    },
    sources: [NHS_UC, CCUK_UC, GUTS_UC],
    quiz: {
      question: "Can you catch ulcerative colitis from someone else?",
      options: [{ text: "No, it is not contagious", right: true }, { text: "Yes, by sharing food" }, { text: "Yes, through touch" }],
      why: "Colitis is not contagious; you cannot catch it.",
    },
  },
  {
    id: "uc-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms, and what is a flare-up?",
    hook: "Diarrhoea that may contain blood, urgency and tummy pain. They come and go, and can reach beyond the bowel.",
    short: "Common symptoms are diarrhoea that may contain blood or mucus, tummy pain and needing to poo urgently. They come and go: a flare-up is when symptoms come back and you feel unwell. Some people also get symptoms in the joints, eyes or skin.",
    sections: [
      {
        heading: "The common symptoms",
        paragraphs: [
          "Common symptoms include diarrhoea, which may contain blood, mucus or pus, and tummy pain, particularly in the lower-left part of your tummy. This pain may get better after pooing.",
          "Many people need to poo frequently, urgently or during the night, or feel like they need to poo even though the bowel is empty. Bleeding from your bottom, farting a lot and feeling bloated are common too.",
          "Other symptoms may include constipation, feeling very tired (fatigue), feeling less hungry than usual and losing weight without trying to.",
        ],
      },
      {
        heading: "Different for everyone",
        paragraphs: [
          "Everyone experiences Colitis differently. Symptoms may be mild or severe and are likely to change over time. They may vary depending on where Colitis is active in your bowel and how severe it is.",
          "For some people, the symptoms can be an annoyance but may be bearable. For others, the condition can interfere with day-to-day life. As symptoms are often at their worst in the morning, the start of the day can be quite an ordeal.",
        ],
      },
      {
        heading: "What a flare-up is",
        paragraphs: [
          "A flare-up is when symptoms come back and you feel unwell. Flare-ups can last anywhere from a few days to several months, and you may have different symptoms than you had when you were first diagnosed.",
          "Signs of a flare-up include going for a poo more than 5 times in 24 hours, or more than is normal for you, loose poo or diarrhoea with blood or mucus for more than 3 days, and tummy pain.",
          "Flare-ups may not happen very often, and people can go years without feeling unwell. For others, flares may happen more often, with two or more a year.",
        ],
      },
      {
        heading: "Beyond the bowel",
        paragraphs: [
          "During a flare-up you may get symptoms in other parts of your body, such as swollen or painful joints, a high temperature, mouth ulcers, and red eyes, which may be itchy or painful.",
          "You may get swollen and red or darker patches of skin (erythema nodosum). Redness may be harder to see on black or brown skin.",
          "As many as 1 in every 5 people with Colitis develop problems in other parts of the body, most often the joints, eyes or skin. They usually happen during a flare-up but can occur without or before any bowel symptoms.",
        ],
      },
      {
        heading: "What can set off a flare-up",
        paragraphs: [
          "Flare-ups may be triggered by things such as stress, infections, changes in medicines, certain foods, and taking NSAIDs (non-steroidal anti-inflammatory drugs) such as ibuprofen or aspirin. Sometimes there is no obvious trigger.",
          "It can help to keep a diary of symptoms to help you spot any triggers. If you get any kind of painful eye irritation, redness or inflammation, tell your healthcare professional.",
        ],
      },
    ],
    helps: [
      "See a GP if you think you have symptoms of ulcerative colitis.",
      "Keep a diary of symptoms to help you spot any triggers.",
      "If you're worried in any way, contact your IBD team or your GP.",
      "Tell your healthcare professional about any painful eye irritation, redness or inflammation.",
      "Do not take NSAIDs, such as ibuprofen or aspirin, unless prescribed by a doctor.",
    ],
    tryThisWeek: [
      "Start a symptom diary.",
      "Report any sore, red eyes.",
      "Avoid ibuprofen unless prescribed.",
    ],
    ask: "Which of my symptoms should I report straight away, and who do I call?",
    interactive: {
      kind: "signs",
      title: "Signs to tell your team",
      intro: "Tick any you have noticed. They can be signs of a flare-up, in the bowel or elsewhere in the body.",
      signs: [
        "Pooing more than 5 times in 24 hours",
        "Blood or mucus in poo for over 3 days",
        "Urgently needing to poo",
        "Pain in the tummy area",
        "Generally feeling unwell",
        "Joint pain or swelling",
        "Red, sore or itchy eyes",
        "Mouth ulcers or skin rashes",
        "Extreme tiredness (fatigue)",
      ],
      after: "If you have a personalised care plan, follow it. If not, contact your IBD team or GP. If you cannot reach them, call NHS 111 or your local out-of-hours service.",
      copyHeading: "Symptoms I have noticed",
    },
    sources: [NHS_UC, CCUK_UC, CCUK_FLARES, GUTS_UC],
    quiz: {
      question: "Where in the tummy is the pain of ulcerative colitis often felt?",
      options: [{ text: "The lower-left part", right: true }, { text: "The upper-right part" }, { text: "Only behind the belly button" }],
      why: "Common symptoms include tummy pain, particularly in the lower-left part of your tummy. This pain may get better after pooing.",
    },
  },
  {
    id: "uc-extent",
    kicker: "Understanding",
    question: "How much of my bowel is affected, and why does it matter?",
    hook: "Colitis starts at the bottom end and can reach further up. How far it reaches shapes symptoms, treatment and checks.",
    short: "Ulcerative colitis usually begins in the rectum and can spread further up the large bowel. The type is named by how much is affected, from proctitis (the rectum only) to total Colitis (the whole colon). The type shapes your symptoms, your treatment and your bowel cancer checks.",
    sections: [
      {
        heading: "It starts at the bottom end",
        paragraphs: [
          "The large bowel starts at the beginning of the colon and ends at the anus. It includes the colon and rectum. Colitis usually begins in the rectum and lower colon, but it may involve all of the large bowel.",
          "Ulcerative colitis usually affects the rectum. But in 1 in 20 people there is no rectal inflammation. This is called rectal sparing.",
        ],
      },
      {
        heading: "The main types",
        paragraphs: [
          "The types of Colitis are based on how much of your large bowel is affected. In proctitis, only the rectum, the lowest part of the large bowel, is inflamed. The rest of the colon is unaffected and can still function normally.",
          "Proctosigmoiditis affects the rectum and the part of the colon next to it, called the sigmoid colon. Left-sided, or distal, Colitis affects the rectum and the left side of the colon, also called the descending colon.",
          "Colitis that affects the whole colon is known as total Colitis or pancolitis. If the inflammation affects most of the colon, but not all, it is known as extensive Colitis.",
        ],
      },
      {
        heading: "How the type shapes symptoms",
        paragraphs: [
          "Proctitis can cause blood or mucus in your poo, diarrhoea or constipation, and a feeling like you need to poo when the bowel is empty. This feeling is known as tenesmus. Constipation is common with proctitis.",
          "Left-sided Colitis can cause diarrhoea with blood and mucus, and pain on the left side of your tummy when you need to use the toilet. Total Colitis can cause very frequent diarrhoea, tummy cramps and pain, fever and weight loss.",
        ],
      },
      {
        heading: "It can change over time",
        paragraphs: [
          "You may not know which type of Colitis you have when you are diagnosed. This may depend on whether you have had a colonoscopy, which looks at the whole colon, or a sigmoidoscopy, which looks at part of the colon.",
          "1 in 10 people with proctitis will later develop Colitis that affects most of their colon. For some people with total or extensive Colitis, inflammation may reduce over time, so their Colitis may affect less of the colon.",
        ],
      },
      {
        heading: "Why the type matters",
        paragraphs: [
          "The type of Colitis can affect the symptoms you experience and the treatment you're offered. For proctitis, the doctor may recommend a medicine that you insert into the rectum, so the treatment is applied to the inflamed part of the bowel.",
          "The risk of bowel cancer is highest when inflammation affects all, or most, of your colon. Having proctitis does not increase your risk of developing bowel cancer.",
        ],
      },
    ],
    helps: [
      "Ask your IBD team how much of your bowel is affected, as your treatment will depend on it.",
      "Talk to your IBD team if you're struggling to use suppositories or enemas.",
      "If you have left-sided or total Colitis, ask your IBD team when your bowel cancer checks are due.",
      "Speak to your GP or IBD team if you notice any changes in your symptoms that you're worried about.",
    ],
    tryThisWeek: [
      "Ask which type you have.",
      "Ask for help with rectal medicines.",
      "Report symptom changes that worry you.",
    ],
    ask: "How much of my bowel is affected, and has that changed since I was diagnosed?",
    interactive: {
      kind: "flip-cards",
      title: "The types, card by card",
      intro: "Turn each card to see how much of the bowel each type affects.",
      cards: [
        { id: "proctitis", front: "Proctitis", when: "The rectum only", back: "Only the lowest part of the large bowel is inflamed. Having proctitis does not increase the risk of bowel cancer." },
        { id: "proctosigmoiditis", front: "Proctosigmoiditis", when: "Rectum and sigmoid colon", back: "Affects the rectum and the part of the colon next to it. Diarrhoea with blood is common." },
        { id: "left-sided", front: "Left-sided Colitis", when: "Also called distal Colitis", back: "The rectum and the left side of the colon. Pain on the left side when you need the toilet." },
        { id: "extensive", front: "Extensive Colitis", when: "Most of the colon", back: "The inflammation affects most of the colon, but not all of it." },
        { id: "total", front: "Total Colitis", when: "Also called pancolitis", back: "Affects the whole colon. Can cause very frequent diarrhoea, fever and weight loss." },
      ],
    },
    sources: [CCUK_UC, GUTS_UC, CCUK_CANCER, NHS_UC, CCUK_5ASA],
    quiz: {
      question: "Where does ulcerative colitis usually begin?",
      options: [{ text: "In the rectum and lower colon", right: true }, { text: "In the small bowel" }, { text: "In the stomach" }],
      why: "Colitis usually begins in the rectum and lower colon, but it may involve all of the large bowel.",
    },
  },
  {
    id: "uc-tests",
    kicker: "Tests",
    question: "How is ulcerative colitis diagnosed and checked?",
    hook: "No single test. Blood and poo tests, then a camera look inside the bowel, build up the picture.",
    short: "There is no one test for ulcerative colitis. Blood and poo tests look for inflammation, anaemia and infection, and a colonoscopy or sigmoidoscopy looks at the bowel lining and takes small samples. The same tests are repeated over time to check how well treatment is working.",
    sections: [
      {
        heading: "Where diagnosis happens",
        paragraphs: [
          "Ulcerative colitis is usually diagnosed in hospital by a specialist in digestive system conditions (gastroenterologist). There is no one test to diagnose it: doctors consider all of your symptoms, together with your blood and poo test results.",
          "Doctors will ask about your symptoms, how often you have them and how much they affect you. They may also ask about smoking, recent travel, infections and recent medicines, including antibiotics and NSAIDs such as ibuprofen.",
        ],
      },
      {
        heading: "Blood and poo tests",
        paragraphs: [
          "Blood tests can show whether you have inflammation somewhere in your body and if you have low iron, known as anaemia. They can also check whether the medicine you take for your Colitis is causing any side effects.",
          "Poo tests check for infections, which can mimic the symptoms of ulcerative colitis. A faecal calprotectin test shows whether you have inflammation in your bowel, and helps tell inflammatory bowel disease apart from conditions like irritable bowel syndrome.",
          "A normal faecal calprotectin level is usually a good sign that your condition is under control. For some people, how the level changes over time may be a better sign of a flare-up than how high it is.",
        ],
      },
      {
        heading: "Looking inside the bowel",
        paragraphs: [
          "A colonoscopy is a test to check inside your bowels using a thin, flexible tube with a small camera inside it. It looks at all of the large bowel. A sigmoidoscopy looks at the rectum and the left side of the large bowel only.",
          "During these tests, very small samples of the bowel lining can be taken. These are called biopsies, and there is usually no pain when they are taken. They are looked at under a microscope to check for inflammation.",
          "Scans, such as an X-ray, CT scan or ultrasound, may also be used. If inflammation is very severe and a doctor is concerned about the bowel, a plain tummy X-ray may be needed.",
        ],
      },
      {
        heading: "Getting ready for a colonoscopy",
        paragraphs: [
          "You'll be given laxatives, called bowel prep, to empty your bowel before the test, and told what to eat and drink in the days before. Stay at home and be near a toilet after you've started taking them.",
          "The test may be uncomfortable but it should not hurt. You may be offered painkillers, sedation or gas and air. It should take 30 to 45 minutes, but you might be at the hospital for around 2 hours.",
          "You cannot drive for 24 hours if you have sedation, so someone will need to pick you up. If you're in a flare-up when a routine colonoscopy is due, let your IBD team know.",
        ],
      },
      {
        heading: "Waiting for results",
        paragraphs: [
          "You should receive a report of your endoscopy results within three weeks. Biopsy results can take longer, and you may need to wait up to two months. Contact your GP if you have not heard back within these times.",
          "If your symptoms get better while you wait for a colonoscopy, it is still worth having it. Your doctor might find signs of inflammation even when you do not have symptoms.",
        ],
      },
    ],
    helps: [
      "Take your laxatives as it says on the packet or as you've been advised, otherwise the colonoscopy may not be possible.",
      "Bring along the details of medicines you take, and follow any instructions the hospital gives you about taking them.",
      "Arrange for someone to take you home if you are having sedation.",
      "If you are pregnant, diabetic, have kidney disease or take blood pressure medicines, let the hospital know as soon as you get your letter.",
      "Ask your IBD team for timescales and a point of contact while you wait for results.",
    ],
    tryThisWeek: [
      "Read your bowel prep instructions.",
      "List the medicines you take.",
      "Arrange a lift home after sedation.",
    ],
    ask: "What did my tests show about how active my Colitis is, and when will I be tested again?",
    interactive: {
      kind: "timeline",
      title: "A colonoscopy, step by step",
      steps: [
        { id: "letter", when: "When you're referred", title: "Your letter", points: ["When and where the test is", "Laxatives, or where to get them", "What to eat and drink beforehand"] },
        { id: "prep", when: "Before the test", title: "Bowel prep", points: ["Take laxatives as you've been advised", "Stay at home, near a toilet", "Keep drinking clear fluids"] },
        { id: "test", when: "On the day", title: "The test", points: ["It should not hurt: tell staff if you are in pain", "Painkillers, sedation or gas and air may help", "Usually 30 to 45 minutes"] },
        { id: "after", when: "Afterwards", title: "Going home", points: ["Bloating or cramps for 2 to 3 hours", "No driving for 24 hours after sedation"] },
        { id: "results", when: "Within 3 weeks", title: "Results", points: ["A report within three weeks", "Biopsy results can take up to two months"] },
      ],
    },
    sources: [NHS_UC, CCUK_TESTS, NHS_COLONOSCOPY, GUTS_UC, CCUK_UC],
    quiz: {
      question: "If your symptoms settle before your colonoscopy, should you still go?",
      options: [{ text: "Yes, it is still worth having", right: true }, { text: "No, cancel it" }, { text: "Only if symptoms come back" }],
      why: "Your symptoms might get better while you wait for your colonoscopy appointment. It is still worth having your colonoscopy.",
    },
  },
  {
    id: "uc-medicines",
    kicker: "Treatment",
    question: "Which medicines treat ulcerative colitis?",
    hook: "One set of medicines calms a flare-up, another keeps things calm. Finding the right one can take time.",
    short: "Medicines aim to calm a flare-up and then keep Colitis under control. Mesalazine and other 5-ASAs are often the first treatment; steroids are used for a short time in a flare-up; and azathioprine, biologics and other targeted medicines can help when more is needed. Take them as prescribed, even when you feel well.",
    sections: [
      {
        heading: "Two jobs: calm it, then keep it calm",
        paragraphs: [
          "Treatment aims to relieve symptoms during a flare-up and reduce the chances of them coming back. Your treatment will depend on your symptoms and how much of your bowel is affected.",
          "There are two main stages. The first is to bring the condition under control, called inducing remission. The second is to keep it under control and avoid it returning, called maintaining remission.",
        ],
      },
      {
        heading: "Mesalazine and other 5-ASAs",
        paragraphs: [
          "5-ASAs, also called aminosalicylates, are often the first treatment for mild to moderate Colitis. Mesalazine is the most common. They work directly on the bowel lining to ease inflammation, and they are not immunosuppressants.",
          "They come as tablets, capsules or granules to take by mouth, or as suppositories or enemas to insert into your bottom. Taking a combination can be more effective than either treatment alone.",
          "In a research review, around 56 in 100 people taking an oral 5-ASA had at least some improvement after 6 to 12 weeks, compared with 35 in 100 taking a placebo. They do not work for everyone.",
        ],
      },
      {
        heading: "Steroids, for a short time",
        paragraphs: [
          "When you're in a flare-up, steroids such as prednisolone can quickly reduce the inflammation in your gut to help you feel better. Steroids can be taken by mouth, put into your bottom, given as an injection, or as an infusion into a vein.",
          "Steroids cannot be used to control Colitis long-term, so you'll only take them for a set amount of time. It's important that you do not stop taking steroids suddenly.",
        ],
      },
      {
        heading: "Medicines that work on the immune system",
        paragraphs: [
          "Azathioprine and mercaptopurine dampen down the immune response, which reduces inflammation and helps prevent flare-ups. They may help you reduce or stop taking steroids without having another flare-up. Around 6 in every 10 people with Crohn's or Colitis take them at some point.",
          "Biologics and other targeted medicines block particular proteins or chemical pathways involved in inflammation. They may be an option for moderate to severe Colitis, and are given through a drip, as an injection under the skin, or as tablets.",
          "These medicines lower or alter your immune system, so you might not fight off infections as well as other people. Your IBD team will make sure your vaccinations are up to date before you start a biologic.",
        ],
      },
      {
        heading: "Finding what works for you",
        paragraphs: [
          "Medicines do not work the same way for everyone, and it may take some time to find the right medicine for you. Mesalazine starts working straight away, but it may take up to a few months to work fully.",
          "Some medicines ease symptoms without treating the inflammation. Paracetamol is likely to be the safest painkiller. Do not take NSAIDs such as ibuprofen unless your IBD team tells you to, as they may trigger a flare-up.",
          "Anti-diarrhoeal medicines such as loperamide should not be used during a flare-up, because they increase the risk of toxic megacolon. Only take them if your IBD team has said it's ok.",
        ],
      },
    ],
    helps: [
      "Take your medicines as prescribed by your IBD team, even when you feel well, to reduce the risk of flare-ups.",
      "Never suddenly stop taking steroids, even if you feel better, and carry your steroid card if you are given one.",
      "Drink plenty of fluids, such as water, while you're taking mesalazine to help prevent kidney problems.",
      "Talk to your doctor or IBD team before you take medicines you can buy yourself.",
      "Let your IBD team know if you're worried about side effects, and check with them before having a vaccine.",
    ],
    tryThisWeek: [
      "Take every dose, even when well.",
      "Drink plenty while on mesalazine.",
      "Check before buying painkillers.",
    ],
    ask: "Which medicine is right for me now, and what is the plan if it stops working?",
    interactive: {
      kind: "flip-cards",
      title: "Your medicines, card by card",
      intro: "Turn each card to see what each type of medicine does.",
      cards: [
        { id: "5asa", front: "5-ASAs", when: "Often the first treatment", back: "Mesalazine and others ease inflammation in the bowel lining and help keep you in remission." },
        { id: "steroids", front: "Steroids", when: "For a flare-up", back: "Quickly reduce inflammation. Taken for a set time only, and never stopped suddenly." },
        { id: "thiopurines", front: "Azathioprine or mercaptopurine", when: "To keep Colitis under control", back: "Dampen down the immune response, and may help you reduce or stop taking steroids." },
        { id: "biologics", front: "Biologics", when: "Moderate to severe Colitis", back: "Block particular proteins involved in inflammation. Given through a drip or an injection under the skin." },
        { id: "targeted", front: "Targeted tablets", when: "Moderate to severe Colitis", back: "Tablets, such as tofacitinib or ozanimod, that block chemical pathways involved in inflammation." },
        { id: "symptom", front: "Medicines for symptoms", when: "Check with your IBD team", back: "Paracetamol is likely to be the safest painkiller. NSAIDs may trigger a flare-up." },
      ],
    },
    sources: [NHS_UC, CCUK_UC, CCUK_5ASA, CCUK_STEROIDS, CCUK_THIOPURINES, CCUK_BIOLOGICS, NHS_MESALAZINE, GUTS_UC],
    quiz: {
      question: "Can steroids be used to keep Colitis under control long-term?",
      options: [{ text: "No, they are taken for a set time", right: true }, { text: "Yes, for life" }, { text: "Yes, once symptoms settle" }],
      why: "Steroids cannot be used to control Colitis long-term. You'll only take steroids for a set amount of time.",
    },
  },
  {
    id: "uc-flares",
    kicker: "Treatment",
    question: "What should I do when a flare-up starts?",
    hook: "Know your early signs, have a plan, and know who to call. Acting early helps.",
    short: "A flare-up plan agreed with your IBD team says what to do and who to contact. If you do not have one, contact your IBD team or GP, or NHS 111 if you cannot reach them. Keep taking your medicines unless told otherwise, and drink enough to replace lost fluid.",
    sections: [
      {
        heading: "Knowing your early signs",
        paragraphs: [
          "Signs of a flare-up include going for a poo more than 5 times in 24 hours, or more than is normal for you, loose poo or diarrhoea with blood or mucus for more than 3 days, and tummy pain. Over time you'll get to know how to recognise a potential flare-up.",
          "Working together with your health professionals, you'll create a treatment plan for flare-ups. The plan will give guidance on what to do and who to contact, such as your IBD team, their advice line or your GP.",
        ],
      },
      {
        heading: "What to do when it starts",
        paragraphs: [
          "If you have a written personalised care and support plan, or your IBD team have agreed with you what to do if your symptoms get worse, follow that guidance.",
          "If you do not have a plan, contact your IBD team or GP by phone or email. If you are unable to contact them, call NHS 111 or contact your local out-of-hours service.",
          "If you leave a message, include your full name, date of birth and NHS or hospital number, if you know it. Ask your IBD team how best to alert them, for example with an email that has Flare-up in the subject line.",
        ],
      },
      {
        heading: "Your medicines in a flare-up",
        paragraphs: [
          "Continue taking your medicines as normal unless your doctor or nurse has advised you otherwise, and make sure you have a good supply.",
          "Crohn's & Colitis UK says some people with ulcerative colitis may be able to temporarily increase the amount of 5-ASA medicine they take during a flare-up. If you do, tell your IBD team or GP as soon as possible, and check with them first if you are pregnant or have another health condition.",
          "Your IBD team or GP may use blood tests, poo tests or endoscopy to check if you're having a flare-up. The results help to find the best treatment.",
        ],
      },
      {
        heading: "Looking after yourself",
        paragraphs: [
          "If you're flaring and have diarrhoea, drink enough to replace what you have lost. Take rest and sleep, avoid NSAIDs such as ibuprofen, and protect your emotional and mental wellbeing.",
          "In a flare-up you might not feel like eating much, but it is still important to get enough energy and nutrients. If you're struggling to eat full meals, soups or smoothies might be easier to manage.",
        ],
      },
      {
        heading: "Lowering the chance of the next one",
        paragraphs: [
          "Taking your medicines as prescribed, even when you feel well, reduces the risk of flare-ups. Possible triggers include changes in medicines, ongoing stress, gut infections and NSAIDs.",
          "Flare-ups can be disruptive, and sometimes you may need to cancel plans or take time off work. It can help to be open about your condition with your family, friends, colleagues and employers.",
        ],
      },
    ],
    helps: [
      "If you have a personalised care and support plan, follow the guidance it gives.",
      "Find out if your IBD team has a direct number, email address or advice line.",
      "Continue taking your medicines unless your doctor or nurse has advised otherwise, and keep a good supply.",
      "If you have diarrhoea, drink enough to replace what you have lost.",
      "If you cannot contact your IBD team or GP, call NHS 111 or your local out-of-hours service.",
      "If your symptoms do not improve, contact your IBD team or GP.",
    ],
    tryThisWeek: [
      "Save your IBD team's number.",
      "Check your medicine supply.",
      "Drink enough if you have diarrhoea.",
    ],
    ask: "Can we write down a flare-up plan together, and what should I do first?",
    interactive: {
      kind: "scenarios",
      title: "When a flare-up starts",
      scenarios: [
        {
          id: "plan",
          situation: "There is blood in your poo and more trips to the toilet. You have a care plan.",
          options: [{ text: "Follow the guidance in your plan", best: true }, { text: "Wait a few weeks to see" }, { text: "Stop your medicines" }],
          why: "If you have a written personalised care and support plan, follow the specific guidance given by your doctor or nurse.",
        },
        {
          id: "painkiller",
          situation: "Your tummy hurts and you reach for a painkiller.",
          options: [{ text: "Avoid ibuprofen; check with your team", best: true }, { text: "Take ibuprofen" }],
          why: "Do not take NSAIDs, such as ibuprofen, unless told to by your IBD team. NSAIDs may trigger a flare-up. Paracetamol is likely to be the safest option.",
        },
        {
          id: "no-answer",
          situation: "You cannot get through to your IBD team or GP.",
          options: [{ text: "Call NHS 111 or out-of-hours service", best: true }, { text: "Leave it until next week" }],
          why: "If you are unable to contact your GP or IBD team, call NHS 111 or contact your local out-of-hours service.",
        },
        {
          id: "settled",
          situation: "Your symptoms have settled. Do you keep taking your usual medicine?",
          options: [{ text: "Yes, keep taking it as prescribed", best: true }, { text: "No, stop until the next flare" }],
          why: "Taking your medicines as prescribed by your IBD team, even when you feel well, reduces the risk of flare-ups.",
        },
      ],
    },
    sources: [CCUK_FLARES, CCUK_UC, CCUK_FOOD],
    quiz: {
      question: "If a flare-up starts and you have no care plan, who should you contact?",
      options: [{ text: "Your IBD team or GP", right: true }, { text: "No one until it passes" }, { text: "Only a friend" }],
      why: "If you do not have a personalised plan contact your local IBD team or GP via phone or email.",
    },
  },
  {
    id: "uc-severe",
    kicker: "Urgent help",
    question: "When is a flare-up an emergency?",
    hook: "Some signs need 999 or A&E straight away, others an urgent GP appointment or NHS 111. Know which is which.",
    short: "Call 999 or go to A&E for severe tummy pain, non-stop bleeding from your bottom, a lot of blood or large clots in your poo, or vomiting blood. Ask for an urgent GP appointment or get help from NHS 111 for very bad or bloody diarrhoea, a high temperature or a fast heartbeat. A very severe flare-up needs treatment in hospital.",
    sections: [
      {
        heading: "When to call 999 or go to A&E",
        paragraphs: [
          "Call 999 or go to A&E if you have severe tummy pain, you're bleeding non-stop from your bottom, or there's a lot of blood or you see large blood clots when you poo.",
          "Also call 999 or go to A&E if you're vomiting blood or poo, or your sick looks like coffee grounds or soil.",
          "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance. Bring any medicines you take with you.",
        ],
      },
      {
        heading: "When to get urgent help",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have symptoms of ulcerative colitis and very bad diarrhoea or bloody diarrhoea, or a high temperature, or you feel hot, cold or shivery.",
          "Do the same if you have a fast heartbeat, you cannot fart or poo, or you're worried about your symptoms. If you've been diagnosed with ulcerative colitis and are having a severe flare-up, you can also contact your care team.",
        ],
      },
      {
        heading: "Crohn's & Colitis UK's emergency list",
        paragraphs: [
          "Crohn's & Colitis UK says to go to A&E or call 999 if you have severe dehydration or malnourishment, are vomiting up blood, have severe tummy pain with a high temperature and a rapid heartbeat, or are bleeding non-stop from your bottom.",
          "Go to A&E or call 999 too if you have a stoma and think it might be blocked. Signs include not passing wind or poo, passing watery poo, a bloated or swelling tummy, tummy cramps, a swollen stoma, and nausea or vomiting.",
          "You will know your body and condition better than anyone. It's important to go to hospital if you're advised to.",
        ],
      },
      {
        heading: "Acute severe ulcerative colitis",
        paragraphs: [
          "Acute severe ulcerative colitis (ASUC) is a serious medical emergency that requires a stay in hospital for treatment and monitoring. Symptoms include those of severe Colitis, such as six or more poos a day with visible blood, as well as signs like a fever or increased heart rate.",
          "In hospital, you may be treated with a high dose of steroids through a drip. After three days, if steroids haven't worked, you may be given infliximab or ciclosporin. After seven days, if these have not worked, surgery may be necessary.",
          "Steroids do not work for around 1 in 3 people with ASUC. If your condition is very severe, surgery may be the safest option.",
        ],
      },
      {
        heading: "Rare but serious complications",
        paragraphs: [
          "When inflammation is extensive and severe, the bowel wall thins and the colon becomes bloated with gas. This is known as toxic megacolon, and its symptoms include a high fever with pain and tenderness in the tummy. It's essential to get treatment quickly.",
          "A perforation is a hole in the bowel. It is very rare but very serious, and symptoms can include severe tummy pain that is there all the time, a high fever, and feeling or being sick. Crohn's & Colitis UK says to contact NHS 111 straight away if you think you have signs of a perforation or toxic megacolon, and the NHS says to call 999 or go to A&E if you have severe tummy pain.",
        ],
      },
    ],
    helps: [
      "Call 999 or go to A&E if you have severe tummy pain, are bleeding non-stop from your bottom, see a lot of blood or large clots when you poo, or are vomiting blood.",
      "Do not drive to A&E: ask someone to drive you, or call 999 and ask for an ambulance.",
      "Bring any medicines you take with you.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you have very bad or bloody diarrhoea, a high temperature, a fast heartbeat, or cannot fart or poo.",
      "Go to hospital if you're advised to.",
    ],
    tryThisWeek: [
      "Learn the signs that need 999.",
      "Plan who could drive you to A&E.",
      "Keep your medicines ready to bring.",
    ],
    ask: "Which signs mean I should go straight to hospital, and who do I call out of hours?",
    interactive: {
      kind: "scenarios",
      title: "Urgent or emergency?",
      scenarios: [
        {
          id: "bleeding",
          situation: "You're bleeding non-stop from your bottom.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait for your next appointment" }],
          why: "Call 999 or go to A&E if you're bleeding non-stop from your bottom.",
        },
        {
          id: "fever",
          situation: "You have bloody diarrhoea and feel hot and shivery.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Wait a week to see" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if you have bloody diarrhoea, or a high temperature, or you feel hot, cold or shivery.",
        },
        {
          id: "pain",
          situation: "You have severe tummy pain.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Take ibuprofen and rest" }],
          why: "Call 999 or go to A&E if you have severe tummy pain. Do not take NSAIDs such as ibuprofen unless prescribed.",
        },
        {
          id: "driving",
          situation: "You need to go to A&E and your car is outside.",
          options: [{ text: "Ask someone to drive you, or call 999", best: true }, { text: "Drive yourself" }],
          why: "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
        },
        {
          id: "stoma",
          situation: "You have a stoma, nothing is coming out and your tummy is swelling.",
          options: [{ text: "Go to A&E or call 999", best: true }, { text: "Wait until tomorrow" }],
          why: "Go to A&E or call 999 if you have a stoma and think it might be blocked.",
        },
      ],
    },
    sources: [NHS_UC, CCUK_FLARES, CCUK_UC, CCUK_SURGERY],
    quiz: {
      question: "What does the NHS say about getting to A&E?",
      options: [{ text: "Ask someone to drive you or call 999", right: true }, { text: "Drive yourself as fast as you can" }, { text: "Wait to see if it settles" }],
      why: "Do not drive to A&E. Ask someone to drive you or call 999 and ask for an ambulance.",
    },
  },
  {
    id: "uc-surgery",
    kicker: "Treatment",
    question: "When is surgery an option, and what is life like with a stoma or pouch?",
    hook: "Surgery is not just a last resort. Removing the large bowel stops Colitis coming back, and most people say they would do it again.",
    short: "Surgery may be offered if medicines are not working, symptoms keep coming back or there are severe complications. The operation removes part or all of the large bowel, and poo then leaves through a stoma into a bag or through an internal pouch. Colitis cannot come back once all of the large bowel is removed.",
    sections: [
      {
        heading: "When surgery is offered",
        paragraphs: [
          "You may be recommended surgery if ulcerative colitis is significantly affecting your life, your bowel is severely damaged, your symptoms keep coming back or other treatments have not helped. You may also need emergency surgery if you have a very bad flare-up.",
          "Many people think surgery is the last option, but that isn't true. Surgery is offered when doctors think it will help your symptoms, and you can ask whether it is an option for you, even if your IBD team have not mentioned it.",
          "Most people with Colitis will have planned surgery, so there is time to discuss the options and prepare. Fewer people need surgery than 20 years ago: around 7 in 100 need major surgery to remove the colon in the first five years after diagnosis, and around 10 in 100 within 10 years.",
        ],
      },
      {
        heading: "What the operation involves",
        paragraphs: [
          "The surgery is called a colectomy, where part or all of your large bowel is removed. This stops your ulcerative colitis from coming back, but means your body needs a different way to pass out poo.",
          "With an ileostomy, your small bowel is connected to a hole in your tummy, called a stoma, and poo is collected in bags. With an ileo-anal pouch, or J pouch, an internal pouch is made from part of your small bowel and connected to your bottom, so you can poo normally.",
          "Pouch surgery usually takes two to three operations, so a stoma is likely to be needed for at least a short time. Many of the common operations can be done by keyhole surgery, which means less pain and a faster recovery.",
        ],
      },
      {
        heading: "Living with a stoma",
        paragraphs: [
          "A stoma should be soft, slippery and pink, like the inside of your mouth. It should not hurt, but it can bleed easily when scratched or wiped. You cannot control when poo or wind comes out, so it goes into a pouch or bag you stick on your tummy.",
          "There have been big improvements in the design of stoma products, which are now very discreet and comfortable. A stoma nurse will support you and give you practical help and information.",
          "If you have a permanent ileostomy, your GP will give you a prescription to order stoma bags for free on the NHS.",
        ],
      },
      {
        heading: "Recovery",
        paragraphs: [
          "It usually takes 6 to 8 weeks to recover from an ileostomy and get back to your usual activities. Avoid strenuous activities or heavy lifting for 3 months while your tummy muscles heal.",
          "Eat a low fibre diet for about 6 weeks while your bowel heals, then gradually introduce new foods. Wait until you've recovered to drive again, usually at least 6 weeks.",
          "Many people find their daily life improves after having an ileostomy, because they no longer have pain or uncomfortable symptoms.",
        ],
      },
      {
        heading: "Life afterwards",
        paragraphs: [
          "Colitis cannot come back if all of the large bowel and rectum have been removed. However, some people still have symptoms outside the gut, such as in their joints or eyes.",
          "Getting used to a stoma or a pouch takes time. After pouch surgery, some people still go to the toilet six or more times a day. Around half of people with pouch surgery get pouchitis, an inflammation of the pouch, at some point.",
          "Most people report a good quality of life after pouch surgery, and most say they would have the same surgery again. Your care team will discuss the benefits and risks of surgery with you.",
        ],
      },
    ],
    helps: [
      "Ask your IBD team whether surgery is an option for you, even if they have not mentioned it.",
      "Ask your surgical team about your own risks and how to lower them; if you smoke, stopping can help.",
      "Let your surgical team know what is important to you.",
      "After an ileostomy, avoid strenuous activities or heavy lifting for 3 months.",
      "Eat regularly, chew your food well to stop your ileostomy getting blocked, and drink plenty of fluids.",
      "Talk to your stoma nurse if you're having problems with sex, relationships or body image.",
    ],
    tryThisWeek: [
      "Ask if surgery is an option.",
      "Write down what matters to you.",
      "Ask about your personal risks.",
    ],
    ask: "Which operation would suit me, and what would recovery look like?",
    interactive: {
      kind: "flip-cards",
      title: "The operations, card by card",
      intro: "Turn each card to see what each operation involves.",
      cards: [
        { id: "subtotal", front: "Subtotal colectomy with ileostomy", when: "Often in emergencies", back: "The colon is removed but the rectum is left. Poo passes through a stoma into a bag." },
        { id: "proctectomy", front: "Completion proctectomy", when: "A later operation", back: "After a subtotal colectomy, the remaining rectum and anus are removed." },
        { id: "panproctocolectomy", front: "Panproctocolectomy with ileostomy", when: "A permanent stoma", back: "The whole colon, rectum and anal canal are removed, so none is left to become inflamed." },
        { id: "j-pouch", front: "J pouch", when: "Often in 2 or 3 stages", back: "A pouch made from the small bowel is joined to the anus and stores poo until you go." },
        { id: "keyhole", front: "Keyhole surgery", when: "For many operations", back: "Small cuts and a camera. Less pain, smaller scars and a faster recovery." },
      ],
    },
    sources: [NHS_UC, CCUK_SURGERY, CCUK_UC, NHS_ILEOSTOMY_WHAT, NHS_ILEOSTOMY_RECOVERY, GUTS_UC],
    quiz: {
      question: "Can ulcerative colitis come back once all of the large bowel is removed?",
      options: [{ text: "No, though some symptoms outside the gut can remain", right: true }, { text: "Yes, in the small bowel" }, { text: "Yes, always within a year" }],
      why: "Colitis cannot come back if all the large bowel and rectum have been removed. However, some people still have symptoms outside of the gut, such as in their joints or eyes.",
    },
  },
  {
    id: "uc-food",
    kicker: "Living well",
    question: "What should I eat with ulcerative colitis?",
    hook: "No food causes or cures it, and no one diet suits everyone. A balanced diet, and your own food diary, are the place to start.",
    short: "There is no clear evidence that particular foods cause, cure or treat Colitis, and no diet works for everyone. A healthy, balanced diet gives you the nutrients you need. A food diary can help spot triggers, but talk to your IBD team or a dietitian before cutting foods out.",
    sections: [
      {
        heading: "No single diet",
        paragraphs: [
          "There isn't any clear evidence that specific foods cause, cure or treat the inflammation in Colitis. There is no particular diet that works for everyone, and what works for one person might not work for another.",
          "Some people find that what they eat has little effect on their symptoms. Others find that certain foods trigger symptoms and cutting down on those foods helps.",
        ],
      },
      {
        heading: "A healthy, balanced diet",
        paragraphs: [
          "It's important to try to eat a healthy, balanced diet that gives you all the nutrients you need to stay well. If you can, aim to include a wide variety of fruit, vegetables, nuts, seeds, proteins and wholegrains.",
          "Try to limit high-fat, high-sugar and high-salt foods, especially animal fats and processed meats. You do not need to limit how much fibre you eat, unless you have a narrowing in your bowel called a stricture.",
          "Aim to drink 6 to 8 cups or glasses of fluid a day. Many people say alcohol makes their symptoms worse, and the NHS says not to drink more than 14 units of alcohol a week, as alcohol can irritate your digestive system.",
        ],
      },
      {
        heading: "Finding your own triggers",
        paragraphs: [
          "A food diary can help you work out if certain foods make your symptoms worse. But speak to your doctor or care team before making any dietary changes.",
          "It is important not to cut foods out without talking to your dietitian or IBD team, as you could miss out on nutrients your body needs. It may be easier to spot possible trigger foods when your symptoms are under control.",
        ],
      },
      {
        heading: "Eating during a flare-up",
        paragraphs: [
          "In a flare-up you might not feel like eating much, but it is still important to get enough energy and nutrients. Drink plenty, include protein-rich foods like eggs, fish, beans or nut butters, and choose fibre that is easy to digest, like well-cooked, peeled vegetables or bananas.",
          "Soups or smoothies might be easier to manage than full meals. When you start to feel better, get back to a healthy, balanced diet, and add back any foods that made your symptoms worse gradually.",
        ],
      },
      {
        heading: "Extra help",
        paragraphs: [
          "You may need supplements to replace low levels of vitamins and minerals. Around 1 in 3 people with Colitis have low iron levels, and many have low levels of calcium and vitamin D.",
          "Some people keep having symptoms even though the inflammation has gone, because they also have irritable bowel syndrome. Ask your IBD team to refer you to a gastroenterology dietitian if you feel your symptoms are related to food, or if you have lost weight without meaning to.",
          "Be careful with information about diet on the internet, as it may not be reliable. Dietitians are qualified health professionals who can assess and treat dietary problems due to medical conditions.",
        ],
      },
    ],
    helps: [
      "Keep a food diary, and speak to your doctor or care team before making any dietary changes.",
      "Eat a healthy, balanced diet with a wide variety of fruit, vegetables, proteins and wholegrains.",
      "Aim for 6 to 8 cups or glasses of fluid a day, and drink plenty to stay hydrated if you have diarrhoea.",
      "Do not cut foods out of your diet without talking to your dietitian or IBD team.",
      "Ask to be referred to a dietitian if you feel your symptoms are related to food.",
    ],
    tryThisWeek: [
      "Start a food diary.",
      "Drink 6 to 8 glasses a day.",
      "Ask about seeing a dietitian.",
    ],
    ask: "Could I be referred to a dietitian, and do I need any supplements?",
    interactive: {
      kind: "scenarios",
      title: "Everyday food choices",
      scenarios: [
        {
          id: "trigger",
          situation: "You suspect a food makes your symptoms worse.",
          options: [{ text: "Note it in a food diary, ask your team", best: true }, { text: "Cut out that food group for good" }],
          why: "A food diary can help you work out if certain foods make your symptoms worse, but speak to your doctor or care team before making any dietary changes.",
        },
        {
          id: "cure",
          situation: "A website promises a diet that cures Colitis.",
          options: [{ text: "Be careful: it may not be reliable", best: true }, { text: "Start it straight away" }],
          why: "There is no evidence that following a particular diet can cure Crohn's or Colitis.",
        },
        {
          id: "flare",
          situation: "You're in a flare-up and have little appetite.",
          options: [{ text: "Try soups or smoothies, drink plenty", best: true }, { text: "Skip meals until it passes" }],
          why: "It is still important to get enough energy and nutrients. If you're struggling to eat full meals, soups or smoothies might be easier to manage.",
        },
        {
          id: "fibre",
          situation: "You're well, and wonder whether to avoid fibre.",
          options: [{ text: "Only limit it if you have a stricture", best: true }, { text: "Cut out all fibre" }],
          why: "You do not need to limit how much fibre you eat, unless you have a narrowing (stricture) in your bowel.",
        },
      ],
    },
    sources: [CCUK_FOOD, NHS_UC, CCUK_UC, GUTS_UC],
    quiz: {
      question: "Is there one diet that works for everyone with Colitis?",
      options: [{ text: "No, what works differs from person to person", right: true }, { text: "Yes, a dairy-free diet" }, { text: "Yes, a liquid-only diet" }],
      why: "There is no particular diet that works for everyone with Colitis. What works for one person might not work for another.",
    },
  },
  {
    id: "uc-work-travel",
    kicker: "Living well",
    question: "How do I manage work, travel and finding a toilet?",
    hook: "Adjustments at work, a card and a key for toilets, and planning ahead for trips. Colitis should not stop you going places.",
    short: "You do not have to tell your employer, but if you do, they can make reasonable adjustments such as toilet breaks or flexible hours. A Can't Wait Card, a RADAR key and toilet maps help when you're out. For trips, plan early with your IBD team and get insurance that covers your Colitis.",
    sections: [
      {
        heading: "Telling your employer",
        paragraphs: [
          "You do not have to tell your employer about your Colitis. But if your employer knows, they can make changes to your workplace to help you do your job. These are called reasonable adjustments.",
          "Colitis isn't automatically classed as a disability under the Equality Act 2010, but it might be, depending on the effect on your daily life. You may not see yourself as disabled but still be protected under the legal definition.",
        ],
      },
      {
        heading: "Changes that can help at work",
        paragraphs: [
          "Adjustments might include time off for medical appointments, flexible or different hours, unlimited toilet breaks, a workstation close to a toilet, working from home, or a phased return to work after absence.",
          "If your employer's adjustments do not cover all your needs, Access to Work could give a grant to help pay for things like specialist equipment, support workers, or the costs of travelling to work if you cannot use public transport.",
          "An Access to Work grant will not affect any other benefits you get, and you will not have to pay it back. It will not pay for reasonable adjustments, which are the changes your employer must legally make.",
        ],
      },
      {
        heading: "Toilets when you're out",
        paragraphs: [
          "Urgency is the sudden intense feeling of needing to poo and having to rush to the toilet. Bowel incontinence and urgency affect up to 7 in every 10 people with Crohn's or Colitis, and can have a real impact on daily life.",
          "Members of Crohn's & Colitis UK get a Can't Wait Card, which shows you have a medical condition and need urgent access to a toilet, and a RADAR key to unlock accessible toilets. Toilet map apps and websites can help you plan journeys around toilet stops.",
          "Some people carry an emergency kit with pads, underwear, alcohol-free wipes and tissues, and keep a change of clothes at work or in the car. Tell your IBD team or GP if you are having problems with bowel control, as there are ways of managing it.",
        ],
      },
      {
        heading: "Planning a trip",
        paragraphs: [
          "Having Colitis should not stop you from travelling. Discuss your plans with your IBD team as far in advance as possible, and ask what to do if you have a flare-up while you're away.",
          "If you're travelling outside the UK, see your GP or a travel clinic at least six to eight weeks before you go. Tell them which medicines you take, as this might affect which vaccinations you can have.",
          "Get travel insurance that covers your Colitis, by declaring it when you get your quote. Pack enough medicines for the whole trip, with extra in case of delays, and take a copy of your prescription or a letter about your medicines.",
        ],
      },
      {
        heading: "Choosing when to go",
        paragraphs: [
          "You are more likely to stay well on your trip if your Colitis has been under control for at least 3 months. If you can, plan your trip so you will not need routine blood tests while you're away.",
          "If you're flying, it can help to request an aisle seat near the toilet in advance, and to keep a small supply of everything you need in your hand luggage.",
        ],
      },
    ],
    helps: [
      "If you choose to tell your employer, ask about reasonable adjustments such as toilet breaks or flexible hours.",
      "Check whether Access to Work could help with costs your employer's adjustments do not cover.",
      "Carry an emergency kit, and keep a change of clothes at work or in your car.",
      "Use a toilet map app or website to plan journeys around toilet stops.",
      "See your GP or a travel clinic at least six to eight weeks before travelling abroad.",
      "Get travel insurance that covers your Colitis, and pack extra medicine in case of delays.",
    ],
    tryThisWeek: [
      "Pack an emergency kit.",
      "Plan a route with toilet stops.",
      "List adjustments to ask for.",
    ],
    ask: "Could you give me a letter about my condition and medicines for work or travel?",
    interactive: {
      kind: "timeline",
      title: "Planning a trip, step by step",
      steps: [
        { id: "early", when: "As early as you can", title: "Talk to your IBD team", points: ["Ask what to do if you flare while away", "Bring routine blood tests forward if needed"] },
        { id: "weeks", when: "6 to 8 weeks before", title: "Vaccines and travel health", points: ["See your GP or a travel clinic", "Tell them which medicines you take"] },
        { id: "booking", when: "When you book", title: "Insurance and seats", points: ["Declare your Colitis for travel insurance", "Request an aisle seat near the toilet"] },
        { id: "packing", when: "Packing", title: "Medicines and kit", points: ["Enough medicine for the whole trip, plus extra", "A copy of your prescription or a letter", "An emergency kit in your hand luggage"] },
      ],
    },
    sources: [CCUK_EMPLOYEES, GOV_ACCESS_TO_WORK, CCUK_URGENCY, CCUK_TRAVEL, CCUK_UC],
    quiz: {
      question: "Do you have to tell your employer that you have Colitis?",
      options: [{ text: "No, it is your choice", right: true }, { text: "Yes, by law" }, { text: "Only if you work in an office" }],
      why: "You do not have to tell your employer about your Crohn's or Colitis. But it may help you feel more supported at work.",
    },
  },
  {
    id: "uc-mood-fatigue",
    kicker: "Living well",
    question: "Why am I so tired, and how do I look after my mood?",
    hook: "Fatigue is more than being tired, and low mood is common. Both are worth raising, and both can be helped.",
    short: "Fatigue is extreme tiredness that rest does not fix, and it is common in Colitis, especially in a flare-up. Causes such as anaemia can be checked and treated. Living with Colitis can affect your mood too, and talking therapies, support groups and your IBD team can help.",
    sections: [
      {
        heading: "More than being tired",
        paragraphs: [
          "Fatigue is extreme tiredness that does not go away with the usual amount of rest or sleep. It can be physical, like low energy or a feeling of heaviness, or mental, like poor concentration or brain fog, or both.",
          "Around 7 in 10 people with Crohn's or Colitis have fatigue during a flare-up, and around 4 in 10 when in remission. Fatigue is not your fault and is nothing to be embarrassed about.",
        ],
      },
      {
        heading: "Finding the cause",
        paragraphs: [
          "Fatigue can come from inflammation, anaemia, low levels of nutrients, poor sleep, stress and some medicines. It could also be a sign of a flare-up, so it's worth letting your IBD team or GP know early on.",
          "Ask what tests can look for the cause, including blood tests for anaemia, and whether any medicines could be adding to it. If you have iron deficiency anaemia, iron tablets or a drip often help fatigue.",
        ],
      },
      {
        heading: "Ways to manage it",
        paragraphs: [
          "Some people compare energy to a budget: each day you have a certain amount to spend, so you decide how to spend it. Creating a routine on good days can mean you have less to think about on low-energy days.",
          "Exercise may help fatigue. If you're able to, take it gently at first and build up your strength over time. Eating regular smaller meals or healthy snacks through the day can help keep your energy up.",
        ],
      },
      {
        heading: "Your mood matters too",
        paragraphs: [
          "Ulcerative colitis can be difficult to live with both physically and emotionally. It's common to feel stressed, anxious or embarrassed about the symptoms and how they may affect things like your social life, travel and sex.",
          "Research suggests that people with Crohn's or Colitis may be twice as likely to have mental health problems like anxiety and depression. These feelings are not a sign of weakness, and getting support can make a real difference.",
          "Poorer mental health is more likely when you're first diagnosed, during a flare-up, when starting a different treatment, or when taking steroids, which can cause extreme highs and lows in mood.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "In England, you can refer yourself directly to an NHS talking therapies service without needing a referral from a GP. Your GP or IBD team can also arrange psychological support.",
          "You may find it helpful to get support from other people with ulcerative colitis, either at a local support group or online. The Crohn's & Colitis UK helpline is on 0300 222 5700.",
          "If you have thoughts of suicide or harming yourself, tell someone you trust, call the NHS on 111 or go to your nearest A&E. If you need someone to talk to, you can call the Samaritans 24 hours a day, 7 days a week on 116 123.",
        ],
      },
    ],
    helps: [
      "Let your IBD team or GP know about fatigue early on, as it could be a sign of a flare-up.",
      "Ask if you need any blood tests to check for anaemia.",
      "Keep a mood diary or use a mood tracker app, and share it with your IBD team.",
      "Refer yourself to NHS talking therapies, or ask your GP or IBD team for psychological support.",
      "Try ways to manage stress, such as breathing exercises, and exercise regularly.",
      "If you have thoughts of suicide or harming yourself, call the NHS on 111, go to your nearest A&E, or call Samaritans on 116 123.",
    ],
    tryThisWeek: [
      "Tell your team about your fatigue.",
      "Start a mood diary.",
      "Try a breathing exercise.",
    ],
    ask: "Could my tiredness be caused by anaemia or my medicines, and can I see a psychologist?",
    interactive: {
      kind: "signs",
      title: "What to tell your team",
      intro: "Tick any that apply. Fatigue and low mood are both worth raising with your IBD team or GP.",
      signs: [
        "Tiredness that rest does not fix",
        "Brain fog or poor concentration",
        "Feeling breathless or dizzy",
        "Sleeping badly",
        "Low mood lasting weeks or months",
        "Worrying about going out",
        "Mood highs and lows on steroids",
        "Cancelling plans because of fatigue",
      ],
      after: "Share these with your IBD team or GP. They can look for causes such as anaemia, and help you get support for your mental health.",
      copyHeading: "What I have noticed",
    },
    sources: [CCUK_FATIGUE, CCUK_MENTAL, NHS_UC, CCUK_UC, NHS_TALKING],
    quiz: {
      question: "How common is fatigue during a flare-up of Crohn's or Colitis?",
      options: [{ text: "Around 7 in 10 people have it", right: true }, { text: "About 1 in 100 people have it" }, { text: "Nobody has it in a flare-up" }],
      why: "Around 7 in 10 people with Crohn's or Colitis experience fatigue during a flare-up.",
    },
  },
  {
    id: "uc-checks",
    kicker: "Living well",
    question: "What long-term checks will I need, including for bowel cancer?",
    hook: "The extra bowel cancer risk is low, and regular colonoscopies catch changes early. Vaccines and bone checks matter too.",
    short: "People with Colitis are more likely to get bowel cancer than others, but the increase in risk is low and has fallen over time. Regular surveillance colonoscopies, usually starting about eight years after symptoms began, look for early changes. Vaccines, blood tests and bone health are part of long-term care too.",
    sections: [
      {
        heading: "Regular check-ups",
        paragraphs: [
          "You should be offered regular check-ups with a GP and specialist care team to check how well your treatment is working, monitor any possible complications and talk about other changes that might help.",
          "Some medicines need regular blood tests to check for side effects. You may need a full blood count to check for anaemia every three to 12 months, depending on whether your Colitis is active or in remission.",
        ],
      },
      {
        heading: "Bowel cancer risk",
        paragraphs: [
          "If you have Colitis, you are more likely to develop bowel cancer than the general population. But the actual increase in risk is low, and over the last 20 years the number of people with Colitis who develop bowel cancer has fallen.",
          "The risk starts to increase about eight years after your symptoms started, and it is highest when inflammation affects all or most of your colon. Having proctitis does not increase your risk.",
          "Research estimates that 1 in every 100 people with ulcerative colitis or Crohn's colitis might develop bowel cancer after 10 years of symptoms, 2 in 100 after 20 years, and 5 in 100 after more than 20 years.",
        ],
      },
      {
        heading: "Surveillance colonoscopies",
        paragraphs: [
          "If you are at increased risk, your IBD team should offer you a surveillance colonoscopy: a check-up colonoscopy that looks for early changes before cancer develops. The first is usually about eight years after your symptoms started.",
          "After that, you may have a colonoscopy every year, every three years, or a review of your risk every 10 years, depending on your risk. It's best to have it when your Colitis is in remission, if possible.",
          "Following your treatment plan gives your bowel a chance to heal, which may reduce your risk. If you think a surveillance colonoscopy is due but you have not been invited, contact your IBD team.",
        ],
      },
      {
        heading: "Bowel cancer screening",
        paragraphs: [
          "The NHS bowel screening programmes are for everyone. Complete the home test kit, called FIT, when you're sent it, even if you're already having surveillance colonoscopies, have had a recent test, or are in a flare-up.",
          "If the FIT shows blood, a healthcare professional will assess you. Blood in your poo won't always mean you have cancer: it may be due to your Colitis.",
        ],
      },
      {
        heading: "Vaccines and bones",
        paragraphs: [
          "Have any vaccinations you're offered, as some medicines for ulcerative colitis can make you more likely to get infections. If you take azathioprine or mercaptopurine, you should have the yearly flu and COVID-19 vaccines, but not live vaccines.",
          "People with Colitis are more at risk of thinner and weaker bones, called osteoporosis, because of inflammation, smoking, steroids or low activity. Weight-bearing exercise, calcium and vitamin D supplements, not smoking and avoiding long-term steroid use can help.",
          "Bone loss usually has no obvious symptoms. If you are at risk, your doctor may refer you for a bone density scan, which is simple and painless.",
        ],
      },
    ],
    helps: [
      "Go to bowel cancer screening appointments when you're invited.",
      "Keep in touch with your IBD team and attend your appointments, even when you feel well.",
      "If you think a surveillance colonoscopy is due but you have not been invited, contact your IBD team.",
      "Have any vaccinations you're offered, and check with your IBD team before having a live vaccine.",
      "Do regular weight-bearing exercise, get enough calcium and vitamin D, and do not smoke, to protect your bones.",
    ],
    tryThisWeek: [
      "Ask when your colonoscopy is due.",
      "Check your vaccines are up to date.",
      "Add some weight-bearing exercise.",
    ],
    ask: "When is my next surveillance colonoscopy due, and which vaccines should I have?",
    interactive: {
      kind: "timeline",
      title: "Long-term checks, over the years",
      steps: [
        { id: "reviews", when: "From diagnosis", title: "Regular reviews", points: ["Check-ups with your GP and specialist team", "Blood tests for some medicines", "A full blood count every 3 to 12 months"] },
        { id: "vaccines", when: "Every year", title: "Vaccines", points: ["Yearly flu vaccine on azathioprine or mercaptopurine", "No live vaccines on these medicines"] },
        { id: "first", when: "About 8 years", title: "First surveillance colonoscopy", points: ["About eight years after symptoms started", "At diagnosis if you also have PSC, a liver condition"] },
        { id: "follow-up", when: "After that", title: "Follow-up colonoscopies", points: ["Every year, every 3 years, or a review every 10 years", "How often depends on your risk"] },
        { id: "screening", when: "When invited", title: "Bowel cancer screening", points: ["Complete the FIT home test kit", "Even if you have surveillance colonoscopies"] },
      ],
    },
    sources: [CCUK_CANCER, NHS_UC, CCUK_TESTS, CCUK_THIOPURINES, CCUK_BONES, CCUK_UC],
    quiz: {
      question: "When is the first surveillance colonoscopy usually offered?",
      options: [{ text: "About eight years after symptoms started", right: true }, { text: "Every month from diagnosis" }, { text: "Only after the age of 74" }],
      why: "You should be offered an initial surveillance colonoscopy about eight years after your symptoms started.",
    },
  },
];
