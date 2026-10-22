import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Overactive bladder page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, the British Association
// of Urological Surgeons (BAUS, its patient leaflets), Bladder Health UK and the Bladder & Bowel Community.
// General information only; it never replaces what a person's own GP, continence nurse or physiotherapist tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const baus = (label: string, path: string): LearnSource => ({ label: `BAUS: ${label}`, url: `https://www.baus.org.uk/${path}` });
const bhuk = (label: string, path: string): LearnSource => ({ label: `Bladder Health UK: ${label}`, url: `https://bladderhealthuk.org/${path}` });
const bbc = (label: string, path: string): LearnSource => ({ label: `Bladder & Bowel Community: ${label}`, url: `https://www.bladderandbowel.org/${path}` });
const LEAFLETS = "_userfiles/pages/files/patients/leaflets";

const NHS_UI = nhs("Urinary incontinence", "conditions/urinary-incontinence/");
const NHS_UI_SYMPTOMS = nhs("Symptoms of urinary incontinence", "conditions/urinary-incontinence/symptoms/");
const NHS_UI_CAUSES = nhs("Causes of urinary incontinence", "conditions/urinary-incontinence/causes/");
const NHS_UI_DIAGNOSIS = nhs("Diagnosis of urinary incontinence", "conditions/urinary-incontinence/diagnosis/");
const NHS_UI_TREATMENT = nhs("Non-surgical treatment for urinary incontinence", "conditions/urinary-incontinence/treatment/");
const NHS_UI_SURGERY = nhs("Surgery and procedures for urinary incontinence", "conditions/urinary-incontinence/surgery/");
const NHS_UI_10WAYS = nhs("10 ways to stop leaks", "conditions/urinary-incontinence/10-ways-to-stop-leaks/");
const NHS_OXY_ABOUT = nhs("About oxybutynin", "medicines/oxybutynin/about-oxybutynin/");
const NHS_OXY_SIDE = nhs("Side effects of oxybutynin", "medicines/oxybutynin/side-effects-of-oxybutynin/");
const NHS_OXY_QS = nhs("Common questions about oxybutynin", "medicines/oxybutynin/common-questions-about-oxybutynin/");
const NHS_MIRA_ABOUT = nhs("About mirabegron", "medicines/mirabegron/about-mirabegron/");
const NHS_MIRA_SIDE = nhs("Side effects of mirabegron", "medicines/mirabegron/side-effects-of-mirabegron/");
const NHS_MIRA_QS = nhs("Common questions about mirabegron", "medicines/mirabegron/common-questions-about-mirabegron/");
const NHS_UTI = nhs("Urinary tract infections (UTIs)", "conditions/urinary-tract-infections-utis/");
const NHS_FALLS = nhs("Falls", "conditions/falls/");

const BAUS_OAB = baus("Comparison of treatment options for overactive bladder (leaflet)", `${LEAFLETS}/OAB%20options.pdf`);
const BAUS_BT = baus("Bladder training (leaflet)", `${LEAFLETS}/Bladder%20training.pdf`);
const BAUS_CHART = baus("Urinary input and output chart (bladder diary) (leaflet)", `${LEAFLETS}/Input%20output%20chart.pdf`);
const BAUS_NIGHT = baus("Nocturnal polyuria: passing too much urine at night (leaflet)", `${LEAFLETS}/Nocturnal%20polyuria.pdf`);
const BAUS_BOTOX = baus("Botulinum toxin-A injections into the bladder wall (leaflet)", `${LEAFLETS}/Botox.pdf`);
const BAUS_PF_WOMEN = baus("Pelvic floor exercises in women (leaflet)", `${LEAFLETS}/Pelvic%20floor%20XS%20female.pdf`);

const BHUK_OAB = bhuk("Overactive bladder", "page/index/306");
const BHUK_OAB_HUB = bhuk("Overactive bladder and stress urinary incontinence", "overactive-bladder");
const BHUK_DIET = bhuk("OAB diet", "overactive-bladder/oab-diet");
const BHUK_FAQ = bhuk("OAB FAQ", "overactive-bladder/oab-faq");
const BHUK_DIARY = bhuk("Bladder diary", "overactive-bladder/oab-bladderdiary");

const BBC_OAB = bbc("Overactive bladder", "bladder/bladder-conditions-and-symptoms/overactive-bladder/");
const BBC_NOCTURIA = bbc("Nocturia", "bladder/bladder-conditions-and-symptoms/nocturia/");
const BBC_FLUIDS = bbc("Lifestyle, fluids and diet", "bladder/bladder-conditions-and-symptoms/lifestyle-fluids-and-diet/");
const BBC_RETRAIN = bbc("Bladder retraining and keeping a bladder diary", "conservative-treatment/bladder-diary/");
const BBC_FAQS = bbc("Bladder control FAQs", "bladder/bladder-resources/bladder-faqs/");
const BBC_PF = bbc("Pelvic floor exercises", "bladder/bladder-resources/pelvic-floor-exercises/");
const BBC_PTNS = bbc("Tibial nerve stimulation", "conservative-treatment/tibial-nerve-stimulation/");
const BBC_SNM = bbc("Sacral nerve stimulation", "surgical-treatment/sacral-nerve-stimulation/");
const BBC_JCW = bbc("Just Can't Wait card", "free-just-cant-wait-card/");
const BBC_JCW_FAQ = bbc("Just Can't Wait card FAQs", "help-information/resources/faqs-jcw-card/");
const BBC_DEMENTIA = bbc("Dementia and incontinence", "bladder/bladder-resources/confused-incontinent/");
const BBC_HYDRATION = bbc("The importance of hydration", "bladder/bladder-resources/importance-of-hydration/");

const GOV_ATW: LearnSource = { label: "GOV.UK: Access to Work", url: "https://www.gov.uk/access-to-work" };

export const oabAnswers: LearnArticle[] = [
  {
    id: "oab-what-it-is",
    kicker: "Understanding",
    question: "What is an overactive bladder?",
    hook: "A bladder muscle that squeezes before the bladder is full. It is common, and it is not something you simply have to live with.",
    short: "With an overactive bladder, the bladder muscle, called the detrusor, squeezes too often or on its own, so you get a strong, sudden urge to pee even when the bladder holds little urine. Bladder Health UK says about one in six adults reported some symptoms in two large studies. It is not an inevitable part of ageing, and several treatments can help.",
    sections: [
      {
        heading: "A bladder that squeezes too soon",
        paragraphs: [
          "When a healthy bladder fills, it stretches to hold more urine. Nerves in the bladder lining sense when it is full and tell the brain it is time to empty, and normally you can hold on until you reach a toilet.",
          "With an overactive bladder, there is thought to be abnormal communication between the brain and the bladder. The bladder muscle contracts too often or on its own, so you may feel a strong, sudden urge to pee even when there is little urine in the bladder.",
        ],
      },
      {
        heading: "The detrusor muscle",
        paragraphs: [
          "The detrusor muscles in the bladder wall relax to let the bladder fill, then contract when you go to the toilet to let the urine out. Sometimes they contract too often, creating an urgent need to go. This is known as having an overactive bladder.",
          "It is sometimes called an unstable or irritable bladder, or detrusor overactivity. It means your bladder wants to squeeze out urine even if it is not full.",
        ],
      },
      {
        heading: "How common it is",
        paragraphs: [
          "Bladder Health UK says an overactive bladder can affect women, men and children of any age, though it is mostly found in adult women, with adult men a close second. In two large studies, about one in six adults reported some symptoms.",
          "Symptoms vary in how severe they are, and they can become more common with age. About one in three people with an overactive bladder have episodes of urge incontinence, which means leaking before reaching the toilet.",
        ],
      },
      {
        heading: "Help is there",
        paragraphs: [
          "People with an overactive bladder do not always seek help, because of embarrassment or a belief that nothing can be done. But an overactive bladder is not an inevitable part of ageing, and it is never too late to get help with bladder problems.",
          "Several treatment options exist, and the first step is talking to your doctor and getting the right diagnosis. The NHS says urinary incontinence is a common problem, and you should not feel embarrassed talking to a GP about it.",
        ],
      },
    ],
    helps: [
      "See a GP about your symptoms: it is a common problem and you should not feel embarrassed.",
      "Discuss symptoms of an overactive bladder with your GP as soon as possible, as there are treatments available.",
      "If you are too embarrassed to talk about it, Bladder Health UK has a confidential advice line on 0121 702 0820.",
      "Ask about bladder training, the first-line treatment for an overactive bladder.",
      "Cut down on caffeine, which irritates the bladder and can make symptoms worse.",
    ],
    tryThisWeek: [
      "Book a GP appointment.",
      "Ask about bladder training.",
      "Cut down on caffeine.",
    ],
    ask: "Do my symptoms fit an overactive bladder, or could something else be causing them?",
    interactive: {
      kind: "flip-cards",
      title: "Words you may hear",
      intro: "Turn each card to see what the word means.",
      cards: [
        { id: "detrusor", front: "Detrusor muscle", when: "The muscle in the bladder wall", back: "Relaxes to let the bladder fill, and contracts to let urine out. In an overactive bladder it contracts too often." },
        { id: "urgency", front: "Urgency", when: "The main symptom", back: "The sudden need to pass urine before reaching a toilet, even when the bladder holds little urine." },
        { id: "frequency", front: "Frequency", when: "Many trips in the day", back: "Needing to pee very often. Bladder Health UK describes it as more than 8 times during the day." },
        { id: "nocturia", front: "Nocturia", when: "Trips at night", back: "Getting out of bed at night to pee. Bladder Health UK counts it as more than once a night." },
        { id: "urge-incontinence", front: "Urge incontinence", when: "About one in three", back: "Leaking because you cannot get to the toilet in time after a sudden urge." },
      ],
    },
    sources: [NHS_UI_CAUSES, BHUK_OAB, BBC_OAB, BAUS_BT, NHS_UI, NHS_UI_10WAYS],
    quiz: {
      question: "Which muscle squeezes too often in an overactive bladder?",
      options: [{ text: "The detrusor muscle in the bladder wall", right: true }, { text: "The heart muscle" }, { text: "The thigh muscles" }],
      why: "The detrusor muscles in the bladder wall relax to let the bladder fill, then contract when you go to the toilet. Sometimes they contract too often, creating an urgent need to go.",
    },
  },
  {
    id: "oab-symptoms",
    kicker: "Understanding",
    question: "What are urgency, frequency and night-time trips?",
    hook: "A rush to the toilet, many trips in the day, and broken nights. Most people have some of these, not always all.",
    short: "The main symptom is urgency: a sudden, strong need to pee that is hard to put off. Many people also need to go very often in the day, get up at night to pee, and sometimes leak before reaching the toilet. Symptoms differ from person to person and can change over time.",
    sections: [
      {
        heading: "Urgency",
        paragraphs: [
          "Urgency is a sudden, compelling need to pass urine. It is difficult to put off and can happen at any time, day or night, without any warning.",
          "The need to pee may be triggered by a sudden change of position, or even by the sound of running water. With urge incontinence, there are often only a few seconds between the need to pee and the release of urine.",
        ],
      },
      {
        heading: "Going very often",
        paragraphs: [
          "An overactive bladder can mean you need to pass urine very often. Bladder Health UK describes this as needing to pee more than 8 times during the day, and the Bladder & Bowel Community as more than 7 times a day.",
        ],
      },
      {
        heading: "At night",
        paragraphs: [
          "Nocturia means getting up at night to pass urine, and an overactive bladder can mean going several times during the night. Bladder Health UK counts it as needing to get out of bed to pee more than once a night.",
          "The Bladder & Bowel Community says it can be quite normal to wake once or twice in the night to pee, but more often than that can become annoying and tiring. Some people also pass urine while asleep, which is called nocturnal enuresis.",
        ],
      },
      {
        heading: "Leaks and change over time",
        paragraphs: [
          "About one in three people with an overactive bladder have episodes of urge incontinence. Some people leak urine during sex, particularly at orgasm.",
          "Symptoms can differ from person to person, and they may change over time. You may have some or all of them.",
        ],
      },
      {
        heading: "When it could be an infection",
        paragraphs: [
          "Needing to pee suddenly, or more often than usual, including at night, can also be symptoms of a urinary tract infection. Other signs include pain or burning when peeing, cloudy pee, blood in your pee and a high temperature.",
          "The NHS says to ask for an urgent GP appointment or get help from NHS 111 if you think you have a UTI and, for example, you are aged 65 or older, you are a man, you have blood in your pee, or you have pain in your back just under the ribs. Call 999 or go to A&E if someone is confused, drowsy or has difficulty speaking.",
        ],
      },
    ],
    helps: [
      "Tell your GP which symptoms you have, including how often you go in the day and at night.",
      "Report a frequent need to go at night to your doctor, continence nurse or specialist physiotherapist, particularly if it came on quickly and recently.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you think you have a UTI and you are 65 or older, a man, have blood in your pee or have pain in your back.",
      "Call 999 or go to A&E if you or someone else with UTI symptoms is confused, drowsy or has difficulty speaking.",
      "Keep a bladder diary for at least 3 days to show your GP what is happening.",
    ],
    tryThisWeek: [
      "Note how often you go each day.",
      "Mention night-time trips to your GP.",
      "Keep a 3-day bladder diary.",
    ],
    ask: "Which of my symptoms are from an overactive bladder, and has an infection been ruled out?",
    interactive: {
      kind: "signs",
      title: "Symptoms to tell your GP",
      intro: "Tick any you have noticed. They become a list you can take to your appointment.",
      signs: [
        "A sudden, strong need to pee that is hard to put off",
        "Needing to pee more than 8 times in the day",
        "Getting up more than once a night to pee",
        "Leaking before I reach the toilet",
        "Wetting the bed while asleep",
        "Leaking during sex",
        "The urge set off by running water or standing up",
        "Pain or burning when I pee",
        "Blood in my pee",
      ],
      after: "Pain or burning, blood in your pee or a high temperature can be signs of an infection. The NHS says to ask for an urgent GP appointment or get help from NHS 111 if you are 65 or older, a man, or have blood in your pee.",
      copyHeading: "Bladder symptoms I have noticed",
    },
    sources: [BHUK_OAB, NHS_UI_SYMPTOMS, BBC_OAB, BBC_NOCTURIA, NHS_UTI, NHS_UI_DIAGNOSIS, BHUK_OAB_HUB],
    quiz: {
      question: "What is urgency?",
      options: [{ text: "A sudden, compelling need to pee that is hard to put off", right: true }, { text: "Peeing a large amount once a day" }, { text: "Pain in the kidneys" }],
      why: "Urgency is a sudden, compelling need to pass urine. It is difficult to put off and can happen at any time, day or night, without any warning.",
    },
  },
  {
    id: "oab-causes",
    kicker: "Causes",
    question: "What can cause an overactive bladder or make it worse?",
    hook: "Often no single cause is found. But drinks, infections, constipation, some medicines and other conditions can all play a part.",
    short: "The reason the bladder muscle squeezes too often is often not clear. Possible causes and triggers include too much alcohol or caffeine, not drinking enough, constipation, urinary tract infections, conditions affecting the nerves, diabetes and certain medicines. It is important to rule out other treatable causes first.",
    sections: [
      {
        heading: "Often no clear cause",
        paragraphs: [
          "The reason the detrusor muscles contract too often may not be clear. For many people with an overactive bladder, the actual cause cannot be identified.",
          "The Bladder & Bowel Community says this can be a relief, as it means no other health problem is causing your symptoms, but it can also be frustrating and confusing. It is important to make sure there is no other treatable condition causing your symptoms first.",
        ],
      },
      {
        heading: "What you drink",
        paragraphs: [
          "Drinking too much alcohol or caffeine can be a cause. Some fizzy drinks and fruit teas containing hibiscus can also irritate the bladder.",
          "Not drinking enough can cause strong, concentrated urine to collect in the bladder, which can irritate it and cause symptoms of overactivity. Bladder Health UK also lists drinking excess fluids as a possible cause.",
        ],
      },
      {
        heading: "Infections and other bladder problems",
        paragraphs: [
          "Infection is a common cause of urgency, and your doctor or practice nurse can do a simple urine dipstick test to check. Conditions affecting the bladder and urethra, such as urinary tract infections or tumours in the bladder, can also cause it.",
          "Constipation is another possible cause. Men with an enlarged prostate that blocks the flow of urine may also have symptoms of an overactive bladder.",
        ],
      },
      {
        heading: "Other conditions and medicines",
        paragraphs: [
          "Any condition that affects the nervous system can cause problems, including stroke, multiple sclerosis, Parkinson's disease and Alzheimer's disease. People who have diabetes can also develop an overactive bladder, and women who have had operations for stress incontinence are also at risk.",
          "Certain medicines can be linked to an overactive bladder, including diuretics and opioids. Stopping a medicine, if a doctor advises it, may help.",
        ],
      },
      {
        heading: "Things that can add to it",
        paragraphs: [
          "Bladder Health UK says nicotine can irritate the bladder muscle, causing it to contract and creating urgency, and coughing from smoking may cause leaks.",
          "Being overweight can also make bladder problems worse, as extra weight may put pressure on the pelvic floor muscles. Straining to poo weakens the pelvic floor, so treating constipation promptly helps.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or practice nurse for a urine dipstick test to check for an infection.",
      "Cut down on alcohol and drinks containing caffeine.",
      "Drink enough fluid each day, as concentrated urine can irritate the bladder.",
      "Treat constipation promptly: eating more fibre and exercising more can help.",
      "If you smoke, try to give up, and visit your GP for advice.",
      "Ask your doctor whether any of your medicines could be adding to your symptoms, but do not stop a medicine unless you are advised to.",
    ],
    tryThisWeek: [
      "Ask for a urine test.",
      "Cut down on caffeine and alcohol.",
      "Treat constipation promptly.",
    ],
    ask: "Could an infection, constipation or one of my medicines be causing this?",
    interactive: {
      kind: "risk-check",
      title: "What could be adding to it?",
      intro: "Tick any that apply. Some can be changed, and some cannot.",
      items: [
        { id: "caffeine", label: "Caffeine or alcohol", note: "Too much alcohol or caffeine can be a cause, and they can irritate the bladder.", changeable: true },
        { id: "too-little", label: "Not drinking enough", note: "Concentrated urine can irritate the bladder and cause symptoms of overactivity.", changeable: true },
        { id: "constipation", label: "Constipation", note: "A possible cause. Treating it promptly helps, as straining weakens the pelvic floor.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Nicotine can irritate the bladder muscle, and coughing may cause leaks.", changeable: true },
        { id: "infection", label: "A urine infection", note: "A common cause of urgency. A simple dipstick test can check for it.", changeable: true },
        { id: "medicines", label: "Some medicines", note: "Such as diuretics. Ask your doctor, and only stop a medicine if they advise it.", changeable: true },
        { id: "nerves", label: "A condition affecting the nerves", note: "Stroke, multiple sclerosis, Parkinson's and Alzheimer's disease are all possible causes.", changeable: false },
        { id: "diabetes", label: "Diabetes", note: "People who have diabetes can develop an overactive bladder.", changeable: false },
      ],
    },
    sources: [NHS_UI_CAUSES, BBC_OAB, BHUK_OAB, BHUK_FAQ, BBC_FLUIDS, NHS_UI_10WAYS, BBC_NOCTURIA],
    quiz: {
      question: "Can not drinking enough make an overactive bladder worse?",
      options: [{ text: "Yes, concentrated urine can irritate the bladder", right: true }, { text: "No, drinking less always helps" }, { text: "Only if you drink coffee" }],
      why: "Not drinking enough can cause strong, concentrated urine to collect in the bladder, which can irritate it and cause symptoms of overactivity.",
    },
  },
  {
    id: "oab-diary",
    kicker: "Diagnosis",
    question: "What is a bladder diary, and how do I keep one?",
    hook: "Three days of notes on what goes in and what comes out. It is one of the most useful things you can bring to your GP.",
    short: "A bladder diary, also called an input and output chart or frequency-volume chart, records what you drink, how much urine you pass and when, and any leaks. Your GP may ask you to keep one for at least 3 days. The results help find the cause of your symptoms and decide how best to treat them.",
    sections: [
      {
        heading: "What it shows",
        paragraphs: [
          "A bladder diary is used to see how much fluid you drink, measure how much urine you pass, record how often you pee over 24 hours, and show any leaks. It is also known as a frequency-volume chart or an input and output chart.",
          "The British Association of Urological Surgeons says the results are important in diagnosing the cause of your symptoms and deciding how best to treat them.",
        ],
      },
      {
        heading: "How long to keep it",
        paragraphs: [
          "The NHS says your GP may suggest you keep a diary of your bladder habits for at least 3 days. The British Association of Urological Surgeons suggests filling it in as accurately as you can over three normal days in a row, including work or rest days if that suits you.",
        ],
      },
      {
        heading: "What to write down",
        paragraphs: [
          "Note how much you drink, and what type of drink it is, such as water, squash, coffee, tea or beer, as this can help find any triggers. Try to record every drink, day and night.",
          "Each time you pee, collect it in a plastic measuring jug that holds at least 500ml, and write down the amount. If you cannot measure it, simply put a tick. Mark any leaks, how many times you have an urgent need to go, and when you get up and go to bed, so the number of night-time trips can be seen.",
        ],
      },
      {
        heading: "Other checks",
        paragraphs: [
          "Your GP will ask about your symptoms, any medicines you take, and how much fluid, alcohol or caffeine you drink. A urine dipstick test can check for an infection, and you may have a physical examination.",
          "Further tests may be needed if the cause is not clear, such as a cystoscopy, where a thin camera looks inside the bladder, or urodynamic tests of how the bladder works. The GP will usually start treating you first and may suggest further tests if treatment does not work.",
        ],
      },
      {
        heading: "Using it during treatment",
        paragraphs: [
          "Keeping a diary while you do bladder training can show your progress, with fewer toilet visits and longer gaps between them. From your diary you can see how long your bladder can hold on, and set realistic goals.",
        ],
      },
    ],
    helps: [
      "Keep a bladder diary for at least 3 days if your GP suggests it.",
      "Use a plastic measuring jug that holds at least 500ml to measure the urine you pass.",
      "Measure the mugs, cups or glasses you use often, so it is easy to record how much you drink.",
      "Record the type of each drink, as this can help identify triggers.",
      "Bring the completed chart to your next appointment.",
    ],
    tryThisWeek: [
      "Find a measuring jug.",
      "Measure your usual mug.",
      "Keep the diary for 3 days.",
    ],
    ask: "What does my bladder diary show, and do I need any other tests?",
    interactive: {
      kind: "timeline",
      title: "Three days with a bladder diary",
      steps: [
        { id: "before", when: "Before you start", title: "Get ready", points: ["Find a plastic jug that holds at least 500ml.", "Measure the mugs and glasses you use most."] },
        { id: "day", when: "Days 1 to 3", title: "In the day", points: ["Write down every drink, how much and what type.", "Measure and note each time you pee, or put a tick.", "Mark any leaks and any urgent need to go."] },
        { id: "night", when: "Each night", title: "Bedtime and night", points: ["Mark when you go to bed and when you get up.", "Keep recording any trips to pee in the night."] },
        { id: "after", when: "Afterwards", title: "Take it with you", points: ["Bring the completed chart to your appointment.", "Write down anything else you think is important."] },
      ],
    },
    sources: [BAUS_CHART, NHS_UI_DIAGNOSIS, BHUK_DIARY, BAUS_BT, BBC_RETRAIN, BHUK_OAB],
    quiz: {
      question: "For how long might a GP suggest keeping a bladder diary?",
      options: [{ text: "At least 3 days", right: true }, { text: "One hour" }, { text: "A whole year" }],
      why: "The NHS says your GP may suggest you keep a diary of your bladder habits for at least 3 days.",
    },
  },
  {
    id: "oab-training",
    kicker: "Treatment",
    question: "How does bladder training work?",
    hook: "Teaching the bladder to wait, a minute at a time. It takes weeks, not days, but it is the first treatment for good reason.",
    short: "Bladder training is the first-line treatment for an overactive bladder. When you feel the urge, you try to wait a little before going, and slowly stretch that time, so the bladder learns to hold more. It usually lasts at least 6 weeks, and the British Association of Urological Surgeons says first steps like this help more than 50% of people.",
    sections: [
      {
        heading: "The first treatment",
        paragraphs: [
          "Bladder training is the first-line treatment for the urinary symptoms of an overactive bladder. It teaches your bladder to hold more urine, reduces the number of times you need to pee, and can help stop leaks if you have urgency.",
          "It involves learning ways to increase the time between feeling the need to pee and passing urine. The NHS says a course will usually last for at least 6 weeks.",
          "The British Association of Urological Surgeons says first steps like cutting down on caffeine and alcohol, pelvic floor exercises and bladder training help more than 50% of people with an overactive bladder. They are simple and safe, but need commitment.",
        ],
      },
      {
        heading: "Why the bladder rushes",
        paragraphs: [
          "If you have an overactive bladder, you may feel your bladder contracts before you are ready to go. This can happen if you get into the habit of going just in case, because the bladder learns to hold only a small amount.",
          "If you go every time you feel the urge, the feelings of urgency and frequency will continue and may get worse.",
        ],
      },
      {
        heading: "How to do it",
        paragraphs: [
          "When you feel the urge to pee, do not go straight away. Try to distract yourself for one minute from the first urge, using whatever works best for you.",
          "During the next week, do the same thing but try to wait an extra 5 to 15 minutes. Your bladder will learn to hold even more, and your symptoms will gradually improve. At night, empty your bladder before bed and try to resist any further urges before you sleep.",
        ],
      },
      {
        heading: "Patience and setbacks",
        paragraphs: [
          "Bladder training takes time and determination, and it will not work overnight. Plan realistic goals, focus on success rather than setbacks, and do not be put off by accidents, especially at first.",
          "If you are worried about leaking while you train, light protection such as a pad may help. If you are getting nowhere after 2 to 3 weeks, talk to your doctor, continence nurse or physiotherapist, as something else, such as an infection, may be holding you back.",
        ],
      },
      {
        heading: "Help and keeping it up",
        paragraphs: [
          "Training is often supervised by a trained healthcare professional, who can support you and answer questions. Doing pelvic floor exercises alongside it helps, especially with urgency. A GP can refer you to your local NHS continence service, and in some cases you can refer yourself.",
          "Your bladder is like any other muscle, and it may take a few months of training to reach its full potential. Keep practising regularly to keep the benefit.",
        ],
      },
    ],
    helps: [
      "When you feel the urge, try to wait one minute before going, then build up by an extra 5 to 15 minutes.",
      "Avoid going to the toilet just in case: go only when your bladder feels full.",
      "Keep a diary while you train, so you can see your progress.",
      "Do pelvic floor exercises alongside bladder training.",
      "Keep going for at least 6 weeks, and keep practising to keep the benefit.",
      "If you are getting nowhere after 2 to 3 weeks, talk to your doctor, continence nurse or physiotherapist.",
    ],
    tryThisWeek: [
      "Wait one minute after an urge.",
      "Stop going just in case.",
      "Keep a training diary.",
    ],
    ask: "Can I be referred to a continence service to help me with bladder training?",
    interactive: {
      kind: "timeline",
      title: "A course of bladder training",
      steps: [
        { id: "week-1", when: "Week 1", title: "Wait one minute", points: ["When the urge comes, do not go straight away.", "Distract yourself for one minute from the first urge."] },
        { id: "week-2", when: "Week 2", title: "Wait a little longer", points: ["Try to wait an extra 5 to 15 minutes.", "Keep a diary to see your progress."] },
        { id: "weeks-2-3", when: "After 2 to 3 weeks", title: "Check how it is going", points: ["Focus on success, not setbacks.", "If you are getting nowhere, talk to your doctor or continence nurse."] },
        { id: "week-6", when: "At least 6 weeks", title: "A full course", points: ["A course usually lasts at least 6 weeks.", "It may take a few months to reach full potential."] },
        { id: "after", when: "From then on", title: "Keep it up", points: ["Keep practising regularly to keep the benefit."] },
      ],
    },
    sources: [BAUS_BT, NHS_UI_TREATMENT, BBC_RETRAIN, BAUS_OAB, BAUS_PF_WOMEN],
    quiz: {
      question: "What should you try first when the urge to pee comes during bladder training?",
      options: [{ text: "Wait, and distract yourself for a minute", right: true }, { text: "Go straight away every time" }, { text: "Stop drinking for the day" }],
      why: "When you feel the urge to pee, do not go straight away. Try to distract yourself for one minute from the first urge.",
    },
  },
  {
    id: "oab-drinks",
    kicker: "Treatment",
    question: "Which drinks irritate the bladder, and should I drink less?",
    hook: "Coffee, fizzy drinks and alcohol can make things worse. Drinking less overall usually does not help.",
    short: "Caffeine irritates the bladder, and coffee has the biggest effect. Alcohol, fizzy drinks, diet drinks with sweeteners and citrus juices can also make symptoms worse. But cutting right back on fluids makes things worse too, so the NHS suggests 6 to 8 glasses of fluid a day, unless your doctor advises otherwise.",
    sections: [
      {
        heading: "Caffeine",
        paragraphs: [
          "Caffeine irritates the bladder and can make symptoms worse. It can also cause your kidneys to produce more urine.",
          "Coffee has the biggest effect, so the NHS suggests stopping it or switching to decaffeinated coffee. Fizzy drinks, tea, green tea, energy drinks and hot chocolate also contain caffeine, so cut down on these too and replace them with water and herbal or fruit teas.",
        ],
      },
      {
        heading: "Alcohol, fizzy and diet drinks",
        paragraphs: [
          "Alcohol makes you pee more often, and it can also affect your sleep and make you more likely to get up in the night to pee. The recommended weekly limit is 14 units.",
          "Other drinks that may irritate the bladder include fizzy drinks, drinks with artificial sweeteners such as diet drinks, and citrus juices such as orange, grapefruit and lime. Some fruit teas containing hibiscus can also make problems worse.",
        ],
      },
      {
        heading: "Do not cut right back",
        paragraphs: [
          "Many people with urinary incontinence avoid drinking, because they feel it causes more problems. But limiting fluid makes incontinence worse, because it reduces how much the bladder can hold, and it can also cause constipation.",
          "When you do not drink enough, the bladder gets used to holding smaller amounts and urine becomes more concentrated, which can irritate it. The Bladder & Bowel Community says never reduce how much you drink unless your GP recommends it.",
        ],
      },
      {
        heading: "How much and when",
        paragraphs: [
          "The NHS suggests 6 to 8 glasses of fluid a day, but no more, unless your doctor advises otherwise. The British Association of Urological Surgeons suggests between one and a half and 2 litres a day.",
          "Drink small amounts regularly through the day, rather than large amounts at one time. In the short term this may seem to make things worse, but in the longer term your bladder can learn to hold more.",
        ],
      },
      {
        heading: "Food",
        paragraphs: [
          "Spicy and acidic foods, such as curries and citrus fruits, can irritate the bladder. Bladder Health UK also lists tomato-based foods and chocolate, which contains caffeine.",
          "Eating more fibre helps avoid constipation, which can put pressure on the bladder. As you pay attention to what you drink, you may begin to notice which drinks make your symptoms worse.",
        ],
      },
    ],
    helps: [
      "Cut down on caffeine, or switch to decaffeinated coffee.",
      "Replace caffeinated drinks with water and herbal or fruit teas.",
      "Cut down on alcohol, keeping to no more than 14 units a week.",
      "Try cutting down on fizzy drinks, diet drinks with sweeteners and citrus juices.",
      "Drink 6 to 8 glasses of fluid a day, unless your doctor advises otherwise, and do not cut back unless your GP recommends it.",
      "Spread your drinks through the day, in small amounts.",
    ],
    tryThisWeek: [
      "Switch to decaf coffee.",
      "Swap one fizzy drink for water.",
      "Spread drinks through the day.",
    ],
    ask: "How much should I be drinking each day for my bladder?",
    interactive: {
      kind: "scenarios",
      title: "Everyday drink choices",
      scenarios: [
        {
          id: "drink-less",
          situation: "You think drinking less will mean fewer trips.",
          options: [{ text: "Keep drinking 6 to 8 glasses a day", best: true }, { text: "Cut right down on fluids" }],
          why: "Limiting fluid makes incontinence worse, because it reduces how much the bladder can hold, and it can also cause constipation.",
        },
        {
          id: "coffee",
          situation: "You have three strong coffees each morning.",
          options: [{ text: "Cut down or switch to decaf", best: true }, { text: "Have them later in the day instead" }],
          why: "Coffee has the biggest effect, so stop drinking it or switch to decaffeinated coffee.",
        },
        {
          id: "diet-cola",
          situation: "You swapped to diet cola to be healthier.",
          options: [{ text: "Try water or herbal tea instead", best: true }, { text: "Diet drinks never affect the bladder" }],
          why: "Drinks with artificial sweeteners, such as diet drinks, and drinks with caffeine, such as cola, may irritate the bladder.",
        },
        {
          id: "big-glass",
          situation: "You drink most of your water in one go at lunch.",
          options: [{ text: "Spread it out in small amounts", best: true }, { text: "Drink it all at once" }],
          why: "Drink small amounts regularly through the day, rather than large amounts at one time.",
        },
      ],
    },
    sources: [NHS_UI_10WAYS, NHS_UI, NHS_MIRA_QS, BBC_FLUIDS, BBC_FAQS, BHUK_DIET, BAUS_BT, BBC_OAB],
    quiz: {
      question: "Which drink does the NHS say has the biggest effect on the bladder?",
      options: [{ text: "Coffee", right: true }, { text: "Water" }, { text: "Herbal tea" }],
      why: "Coffee has the biggest effect, so the NHS suggests stopping it or switching to decaffeinated coffee.",
    },
  },
  {
    id: "oab-medicines",
    kicker: "Treatment",
    question: "What medicines are there for an overactive bladder?",
    hook: "Tablets or a patch that relax the bladder muscle. They ease symptoms rather than cure them, and finding the right one can take a few tries.",
    short: "If bladder training does not help enough, a GP may prescribe an antimuscarinic, such as oxybutynin, tolterodine or solifenacin. If these are unsuitable or cause side effects, mirabegron or vibegron may be offered instead. They relax the bladder muscle so it can hold more, can take several weeks to work fully, and are reviewed regularly.",
    sections: [
      {
        heading: "When medicines are offered",
        paragraphs: [
          "If bladder training is not effective, a GP may prescribe a medicine called an antimuscarinic, also called an anticholinergic. These may be prescribed for an overactive bladder with or without leaks.",
          "Mirabegron, for example, eases the symptoms of an overactive bladder but does not treat the condition itself. You will usually take it long term to help keep your symptoms under control.",
        ],
      },
      {
        heading: "Antimuscarinics",
        paragraphs: [
          "Antimuscarinics include oxybutynin, tolterodine, darifenacin, solifenacin, fesoterodine, propiverine and trospium. They are usually tablets taken 2 or 3 times a day, although oxybutynin also comes as a patch you put on your skin twice a week.",
          "They work by relaxing the muscle in the bladder wall, so the bladder can hold more. You usually start on a low dose. Oxybutynin may take 4 weeks or longer to work fully, and if your symptoms do not start to improve after 1 to 2 weeks, talk to your doctor.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "Possible side effects include a dry mouth, constipation, blurred vision and tiredness. Sugar-free gum or sweets can help a dry mouth. They all seem to work about as well as each other, so if one gives you side effects, a different one may suit you better.",
          "There may be an increased risk of confusion, and possibly of dementia getting worse, in people taking oxybutynin, so talk to your doctor if you are worried. Do not drive if it makes you sleepy, dizzy or gives you blurred vision.",
        ],
      },
      {
        heading: "Mirabegron and vibegron",
        paragraphs: [
          "If antimuscarinics are unsuitable, have not helped or have unpleasant side effects, you may be offered mirabegron or vibegron. These relax the bladder muscle in a slightly different way, and usually come as a tablet or capsule taken once a day.",
          "Common side effects can include constipation, diarrhoea, feeling sick, headache, urinary tract infections and a fast heartbeat. It can take 4 to 8 weeks to notice an improvement. The British Association of Urological Surgeons says mirabegron cannot be used with severe high blood pressure or certain heart rhythm problems.",
        ],
      },
      {
        heading: "Reviews, and when to get help",
        paragraphs: [
          "With an antimuscarinic, you will be assessed after 4 weeks to see if the medicine is helping, and then every 6 to 12 months while it keeps working. Do not stop taking it without talking to your doctor first, as your symptoms may come back or get worse.",
          "With oxybutynin, talk to a doctor urgently if you cannot pee at all, and tell your doctor or call 111 straight away if you have difficulty emptying your bladder or signs of a severe urine infection. With mirabegron, call 999 or go to A&E if you have chest pain, a very severe headache or difficulty breathing.",
        ],
      },
    ],
    helps: [
      "If bladder training has not helped, ask your doctor about medicines.",
      "Talk to your doctor if your symptoms have not started to improve after 1 to 2 weeks of oxybutynin.",
      "Try sugar-free gum or sucking sugar-free sweets for a dry mouth.",
      "Tell your doctor about side effects: a different medicine may suit you better.",
      "Do not stop taking your medicine without talking to your doctor first.",
      "Talk to a doctor urgently if you cannot pee at all.",
    ],
    tryThisWeek: [
      "Note any side effects.",
      "Keep sugar-free gum handy.",
      "Book your 4-week review.",
    ],
    ask: "Which medicine would suit me, and what side effects should I look out for?",
    interactive: {
      kind: "flip-cards",
      title: "The medicines, card by card",
      intro: "Turn each card to see what each kind of medicine involves.",
      cards: [
        { id: "antimuscarinics", front: "Antimuscarinics", when: "Such as oxybutynin or solifenacin", back: "Relax the bladder muscle so it can hold more. Usually tried first. Dry mouth and constipation are common." },
        { id: "patch", front: "Oxybutynin patch", when: "Put on the skin twice a week", back: "Another way to take oxybutynin, rather than tablets 2 or 3 times a day." },
        { id: "mirabegron", front: "Mirabegron or vibegron", when: "A tablet or capsule once a day", back: "Offered if antimuscarinics are unsuitable, have not helped or cause side effects. Relaxes the bladder in a different way." },
        { id: "review", front: "Reviews", when: "After 4 weeks, then every 6 to 12 months", back: "To check the medicine is helping, is still needed and is still the best choice for you." },
      ],
    },
    sources: [NHS_UI_TREATMENT, NHS_OXY_ABOUT, NHS_OXY_QS, NHS_OXY_SIDE, NHS_MIRA_ABOUT, NHS_MIRA_QS, NHS_MIRA_SIDE, BAUS_OAB],
    quiz: {
      question: "If one antimuscarinic gives you side effects, what may help?",
      options: [{ text: "Trying a different one", right: true }, { text: "Stopping it without telling anyone" }, { text: "Doubling the dose" }],
      why: "They all seem to work about as well as each other, so if one gives you side effects, a different one may suit you better.",
    },
  },
  {
    id: "oab-further",
    kicker: "Treatment",
    question: "What if bladder training and tablets are not enough?",
    hook: "Injections into the bladder, gentle nerve stimulation, and rarely an operation. Each has its own trade-offs.",
    short: "If first treatments do not help, a specialist may suggest Botox injections into the bladder wall, sacral nerve stimulation with a small implanted device, or tibial nerve stimulation through the ankle. The British Association of Urological Surgeons says about 70% of people report improvement after Botox or sacral nerve stimulation. Bigger operations are kept for rare cases.",
    sections: [
      {
        heading: "Talking it through",
        paragraphs: [
          "If non-surgical treatments are unsuccessful or unsuitable, other procedures may be recommended. Before deciding, discuss the risks, benefits and any alternatives with a specialist.",
          "Surgery is always a final option, and will not normally be considered until more conservative treatments have been tried.",
        ],
      },
      {
        heading: "Botox injections into the bladder",
        paragraphs: [
          "A thin telescope is passed into the bladder through the urethra, and several injections of Botox are given into the bladder wall, usually under a local anaesthetic gel. The procedure only takes a few minutes, and you can usually go home shortly afterwards.",
          "The British Association of Urological Surgeons says it works in over seven out of 10 people. The effect usually lasts 4 to 9 months, and the injections can be repeated. Some people find it hard to empty their bladder afterwards and need to learn to use a catheter, and urine infection is the commonest after-effect.",
        ],
      },
      {
        heading: "Sacral nerve stimulation",
        paragraphs: [
          "The sacral nerves, at the base of your back, carry signals to the muscles used when you go to the toilet. A small device sends a mild electrical current into one of these nerves, which should improve the signals between the brain and the bladder and reduce the urge to pee.",
          "First, a thin temporary wire is tried for about two weeks while you keep a diary at home. If it helps, a device about the size of a two pound coin is placed under the skin of the upper buttock, and its battery lasts about 5 years.",
        ],
      },
      {
        heading: "Tibial nerve stimulation",
        paragraphs: [
          "A very thin needle is put into the skin of your ankle, near the tibial nerve, and a mild electric current is sent through it. You may need 12 sessions, each lasting around 30 minutes, 1 week apart.",
          "The NHS says some studies show it can offer relief for some people, but there is not enough evidence yet to recommend it as a routine treatment. It is only recommended in a few cases.",
        ],
      },
      {
        heading: "Rarely, an operation",
        paragraphs: [
          "In rare cases, an operation called augmentation cystoplasty makes the bladder bigger using a piece of tissue from the intestine. Afterwards you may not be able to pee normally and may need to use a catheter, so it is only considered if you are willing to do this.",
          "Urinary diversion, where urine is collected in a bag outside the body, should only be done if other treatments have been unsuccessful or are not suitable.",
        ],
      },
    ],
    helps: [
      "Discuss the risks, benefits and alternatives of any procedure with a specialist before deciding.",
      "Ask your GP or continence clinic whether a referral to a specialist is right for you.",
      "Ask your surgeon about the risks of Botox and their impact on you, including difficulty emptying your bladder.",
      "If you try sacral nerve stimulation, keep a diary before and during the test, so the results can be compared.",
      "Try conservative treatments before an operation, as this avoids the risks of surgery.",
    ],
    tryThisWeek: [
      "Write down what you have tried.",
      "Ask about a specialist referral.",
      "List questions for the specialist.",
    ],
    ask: "Which of these treatments might suit me, and what are the risks for me?",
    interactive: {
      kind: "flip-cards",
      title: "The options, card by card",
      intro: "Turn each card to see what each treatment involves.",
      cards: [
        { id: "botox", front: "Botox injections", when: "Usually under local anaesthetic", back: "Relaxes the bladder. Lasts about 4 to 9 months and can be repeated. Some people need a catheter for a while." },
        { id: "snm", front: "Sacral nerve stimulation", when: "A test first, then an implant", back: "A small device sends mild pulses to a nerve in the lower back to improve signals to the bladder." },
        { id: "ptns", front: "Tibial nerve stimulation", when: "12 weekly sessions", back: "A fine needle at the ankle carries a mild current. Only recommended in a few cases." },
        { id: "cystoplasty", front: "Augmentation cystoplasty", when: "In rare cases", back: "Makes the bladder bigger with tissue from the intestine. You may need to use a catheter afterwards." },
      ],
    },
    sources: [NHS_UI_SURGERY, BAUS_BOTOX, BAUS_OAB, BBC_SNM, BBC_PTNS, BBC_FAQS],
    quiz: {
      question: "How long does the effect of Botox injections into the bladder usually last?",
      options: [{ text: "About 4 to 9 months", right: true }, { text: "A lifetime" }, { text: "One day" }],
      why: "The effect usually lasts 4 to 9 months, and the injections can be repeated.",
    },
  },
  {
    id: "oab-nights",
    kicker: "Living well",
    question: "How can I get up less often at night to pee?",
    hook: "Some night trips come from the bladder, some from making too much urine at night. A few evening changes often help.",
    short: "Getting up at night to pee is called nocturia. It can come from an overactive bladder, drinking late, poor sleep, or the body making too much urine at night. Drinking less in the hours before bed, while still drinking enough in the day, and cutting out caffeine and alcohol in the evening can help. If not, see your GP.",
    sections: [
      {
        heading: "What counts as too often",
        paragraphs: [
          "The Bladder & Bowel Community says it can be quite normal to wake once or twice in the night to pee. If you need to go more often than that, it can become both annoying and tiring.",
          "Nocturia is more common in older adults but can affect people of any age. It might have a medical cause that can be treated, so it is a good idea to report it to your doctor, continence nurse or specialist physiotherapist.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "Reasons include poor sleep, drinking too much before bed, problems with the bladder or prostate, and making too much urine at night. A hormone called antidiuretic hormone normally tells the kidneys to make less urine while you sleep, and less of it may be made as you get older.",
          "Making too much urine at night, more than a third of the day's total, is called nocturnal polyuria. Fluid that collects in swollen ankles during the day goes back into the blood when you lie down, and is turned into urine overnight. Occasionally, making too much urine at night is linked to heart or breathing problems, such as sleep apnoea.",
        ],
      },
      {
        heading: "What you can try",
        paragraphs: [
          "Try drinking less in the hours before bed, but make sure you still drink enough during the day. Bladder Health UK suggests having most of your drinks before 6pm, and cutting out alcohol and caffeine, particularly in the evening.",
          "The British Association of Urological Surgeons suggests eating most water-rich foods, such as fruit, salads, pasta and rice, earlier in the day. If your ankles swell, put your feet up as often as you can, especially in the evening, and walk more. Empty your bladder before you go to bed.",
        ],
      },
      {
        heading: "Medicines for night-time",
        paragraphs: [
          "A low dose of a medicine called desmopressin may be used, to help reduce the amount of urine the kidneys make. The British Association of Urological Surgeons says synthetic antidiuretic hormone should be used with caution, as it can cause water retention and, occasionally, dangerously low levels of salt in the blood.",
          "A water tablet called a loop diuretic, taken in the late afternoon, may also help by removing extra fluid before bedtime. It is not licensed for this use, so your doctor should explain the possible risks and benefits.",
        ],
      },
      {
        heading: "Getting it checked",
        paragraphs: [
          "Nocturia can be caused by other conditions, such as diabetes, a heart condition, an infection or some medicines. Check with your doctor whether a medicine could be the cause, but do not stop taking any medicine unless you have been advised to.",
          "Your doctor may ask you to complete a bladder diary, measuring how much you drink and pee, and when, using a measuring jug.",
        ],
      },
    ],
    helps: [
      "Drink less in the hours before you go to bed, but still drink enough during the day.",
      "Cut out alcohol and caffeine, particularly in the evening.",
      "Eat most water-rich foods earlier in the day.",
      "If your ankles swell, put your feet up during the day, especially in the evening.",
      "Empty your bladder before you go to bed.",
      "Report frequent night-time trips to your doctor, particularly if they came on quickly and recently.",
    ],
    tryThisWeek: [
      "Drink less before bed.",
      "Skip evening caffeine and alcohol.",
      "Empty your bladder at bedtime.",
    ],
    ask: "Is my bladder the cause of my night-time trips, or am I making too much urine at night?",
    interactive: {
      kind: "timeline",
      title: "An evening plan",
      steps: [
        { id: "day", when: "During the day", title: "Drink enough", points: ["Drink enough during the day.", "Eat most water-rich foods earlier on."] },
        { id: "evening", when: "From 6pm", title: "Ease off", points: ["Have most of your drinks before 6pm.", "Cut out alcohol and caffeine in the evening.", "Put your feet up if your ankles swell."] },
        { id: "bed", when: "Bedtime", title: "Empty first", points: ["Empty your bladder before you go to bed.", "Try to resist any further urges before you sleep."] },
        { id: "check", when: "If nothing changes", title: "See your GP", points: ["Report frequent night-time trips.", "Keep a bladder diary to bring along."] },
      ],
    },
    sources: [BBC_NOCTURIA, BAUS_NIGHT, NHS_UI, BHUK_DIET, NHS_UI_TREATMENT, BBC_RETRAIN, NHS_MIRA_QS],
    quiz: {
      question: "What is one simple change that may mean fewer trips at night?",
      options: [{ text: "Drink less in the hours before bed", right: true }, { text: "Drink much less all day" }, { text: "Have a coffee before bed" }],
      why: "Try drinking less in the hours before bed, but make sure you still drink enough during the day.",
    },
  },
  {
    id: "oab-out-and-about",
    kicker: "Living well",
    question: "How can I go out with confidence?",
    hook: "Knowing where the toilets are, packing a few things and carrying a card that explains can make going out feel possible again.",
    short: "An overactive bladder can make travel and going out feel difficult. Planning your route and toilets, carrying a change of clothes or protection, and using a toilet card such as the Bladder & Bowel Community's free Just Can't Wait card can all help. Products can help while you wait for treatment to work.",
    sections: [
      {
        heading: "A common worry",
        paragraphs: [
          "Bladder Health UK says travelling can be difficult with an overactive bladder, because of worries about leaking or finding the nearest toilet. People may feel distress, embarrassment, and a loss of self-esteem and control.",
          "Bladder Health UK says that with a little determination it can be done. You do not have to live with the condition, and the first step towards treatment is talking to your doctor.",
        ],
      },
      {
        heading: "Planning a trip",
        paragraphs: [
          "Plan your route and find out in advance where the toilets are, such as at petrol stations, pubs and restaurants. Take a change of clothes, and wear protective underwear or a pad if it helps.",
          "For car journeys, a discreet portable toilet may help. When flying, arrange an aisle seat near the toilets in advance, and a letter from your GP may help you get a seat right next to them. Try not to travel at peak times, when things are busier and harder to predict.",
        ],
      },
      {
        heading: "A card that explains",
        paragraphs: [
          "The Bladder & Bowel Community's Just Can't Wait card helps you explain, quickly and discreetly, that you need a toilet urgently. The digital card is free and is kept in Apple Wallet or Google Wallet, and a plastic card can be ordered online.",
          "It is widely accepted at many cafés, shops, restaurants and other businesses, and can help you use toilets not normally open to the public. It is a way to communicate rather than a pass, so it does not guarantee access. Bladder Health UK gives its members a similar Can't Wait card.",
        ],
      },
      {
        heading: "Products while treatment works",
        paragraphs: [
          "Incontinence products are not a treatment, but they can help you manage while you wait to be assessed or for treatment to start working. They include absorbent pads and pants, and handheld urinals.",
          "If you are worried about leaking while you do bladder training, light protection can remove some of the worry.",
        ],
      },
      {
        heading: "At work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a health condition. It can give a grant to help pay for practical support, such as physical changes to your workplace.",
          "It does not pay for reasonable adjustments, which are changes your employer must legally make to support you to do your job.",
        ],
      },
    ],
    helps: [
      "Plan your route and find out in advance where the toilets are.",
      "Take a change of clothes, and wear protective underwear or a pad if it helps.",
      "Get a free digital Just Can't Wait card from the Bladder & Bowel Community.",
      "Keep drinking enough: limiting fluid makes incontinence worse.",
      "Ask about incontinence products to help while you wait for treatment to work.",
      "Look into Access to Work if your bladder affects your job.",
    ],
    tryThisWeek: [
      "Plan the toilets on one trip.",
      "Pack a change of clothes.",
      "Get a Just Can't Wait card.",
    ],
    ask: "Which products could help me while my treatment starts to work?",
    interactive: {
      kind: "scenarios",
      title: "Out and about",
      scenarios: [
        {
          id: "queue",
          situation: "A shop's toilet is staff-only and you cannot wait.",
          options: [{ text: "Show your Just Can't Wait card", best: true }, { text: "Leave and hope to find one" }],
          why: "The card helps you explain discreetly that you need a toilet urgently, and can help you use toilets not normally open to the public.",
        },
        {
          id: "flight",
          situation: "You are booking a flight.",
          options: [{ text: "Ask for an aisle seat near the toilets", best: true }, { text: "Take a window seat at the front" }],
          why: "For air travel, arrange in advance an aisle seat near the toilets. A letter from your GP may help you get a seat right next to them.",
        },
        {
          id: "day-out",
          situation: "You are going on a long day out.",
          options: [{ text: "Plan toilets and pack a change of clothes", best: true }, { text: "Stop drinking for the day" }],
          why: "Plan your route and find toilets in advance, and take a change of clothes. Limiting fluid makes incontinence worse.",
        },
      ],
    },
    sources: [BHUK_OAB, BHUK_FAQ, BBC_JCW, BBC_JCW_FAQ, NHS_UI_TREATMENT, BBC_RETRAIN, GOV_ATW, NHS_UI_10WAYS],
    quiz: {
      question: "Does the Just Can't Wait card guarantee you can use a toilet?",
      options: [{ text: "No, it helps you explain, but does not guarantee access", right: true }, { text: "Yes, every shop must let you in" }, { text: "It only works at train stations" }],
      why: "It is a way to communicate rather than a pass, so it does not guarantee access.",
    },
  },
  {
    id: "oab-pelvic-floor",
    kicker: "Living well",
    question: "Can pelvic floor exercises help with urgency?",
    hook: "The same muscles that stop a leak can help you hold on when an urge hits. They take months to build, and nobody can see you doing them.",
    short: "The pelvic floor muscles support the bladder and help keep the urethra closed. Doing pelvic floor exercises alongside bladder training helps you find and strengthen the muscles that stop leaks, and is especially helpful with urgency. They take about 3 to 6 months to give the most benefit.",
    sections: [
      {
        heading: "What the pelvic floor is",
        paragraphs: [
          "Both men and women have pelvic floor muscles. They are layers of muscle stretched like a hammock from the pubic bone at the front to the bottom of the backbone.",
          "They support the bladder, womb and bowel, and help close the bladder outlet. Like other muscles, they weaken if they are not exercised.",
        ],
      },
      {
        heading: "How they help with urgency",
        paragraphs: [
          "Doing regular pelvic floor exercises together with bladder training helps you find and develop the muscles that prevent leaks. The British Association of Urological Surgeons says this is especially helpful with urgency and mixed incontinence.",
          "The NHS says research has shown that pelvic floor muscle training can benefit everyone with urinary incontinence. You can also squeeze your pelvic floor before you do anything that might make you leak.",
        ],
      },
      {
        heading: "Finding the right muscles",
        paragraphs: [
          "You can feel your pelvic floor muscles if you imagine stopping yourself peeing and passing wind at the same time. Try not to tense your tummy, squeeze your legs together, tighten your buttocks or hold your breath.",
          "Do not practise by stopping the flow while you are actually peeing, because it can cause problems with emptying your bladder.",
        ],
      },
      {
        heading: "A simple routine",
        paragraphs: [
          "Squeeze your pelvic floor muscles, hold for 2 seconds, then relax, and repeat 10 times. Breathe normally, and gradually build up the hold to 10 seconds. Include quick squeezes as well as long ones.",
          "The NHS says a programme should include at least 8 squeezes at least 3 times a day, for at least 3 months. Linking them to things you do every day, such as cleaning your teeth, can help you remember.",
        ],
      },
      {
        heading: "Giving it time",
        paragraphs: [
          "Pelvic floor exercises take 3 to 6 months to give the most benefit, and it is worth keeping them up for life. If there is little or no change after 3 months, seek help from a health professional.",
          "A specialist continence adviser or physiotherapist can check you are doing them properly. If you cannot squeeze the muscles, electrical stimulation may be suggested.",
        ],
      },
    ],
    helps: [
      "Do pelvic floor exercises alongside bladder training.",
      "Squeeze, hold for 2 seconds, relax, and repeat 10 times, building up the hold to 10 seconds.",
      "Aim for at least 8 squeezes at least 3 times a day, for at least 3 months.",
      "Link your exercises to everyday habits, such as cleaning your teeth.",
      "Ask a continence adviser or physiotherapist to check you are doing them properly.",
      "Seek help if there is little or no change after 3 months.",
    ],
    tryThisWeek: [
      "Find your pelvic floor muscles.",
      "Do 8 squeezes, 3 times a day.",
      "Link them to brushing your teeth.",
    ],
    ask: "Can I be referred to a specialist physiotherapist to check my pelvic floor exercises?",
    interactive: {
      kind: "timeline",
      title: "Building your pelvic floor",
      steps: [
        { id: "find", when: "Day 1", title: "Find the muscles", points: ["Imagine stopping yourself peeing and passing wind.", "Keep your tummy, legs and buttocks relaxed."] },
        { id: "daily", when: "Every day", title: "Squeeze and hold", points: ["Hold for 2 seconds, relax, repeat 10 times.", "At least 8 squeezes, at least 3 times a day."] },
        { id: "build", when: "Over the weeks", title: "Build up", points: ["Gradually build up the hold to 10 seconds.", "Add quick squeezes too."] },
        { id: "three-months", when: "3 months", title: "Check in", points: ["Seek help if there is little or no change."] },
        { id: "six-months", when: "3 to 6 months", title: "Most benefit", points: ["The exercises give the most benefit.", "Keep them up for life."] },
      ],
    },
    sources: [BBC_PF, BAUS_BT, NHS_UI_TREATMENT, NHS_UI_10WAYS, BAUS_PF_WOMEN, BBC_FAQS],
    quiz: {
      question: "Should you practise by stopping the flow while you are peeing?",
      options: [{ text: "No, it can cause problems with emptying", right: true }, { text: "Yes, every time you pee" }, { text: "Only at night" }],
      why: "Do not practise by stopping the flow while you are actually peeing, because it can cause problems with emptying your bladder.",
    },
  },
  {
    id: "oab-older-age",
    kicker: "Living well",
    question: "What about an overactive bladder in later life?",
    hook: "More common with age, but never just something to accept. Night trips, medicines, infections and falls all need a little more care.",
    short: "An overactive bladder becomes more common with age, but it is not an inevitable part of ageing and it is never too late to get help. In later life, it is worth watching for urine infections, which can cause confusion, asking about the effects of some bladder medicines on memory, and making night-time trips to the toilet safer.",
    sections: [
      {
        heading: "More common, not inevitable",
        paragraphs: [
          "An overactive bladder can become more common with age, and urinary incontinence is very common in people over 80. But an overactive bladder is not an inevitable part of ageing, and it is never too late to get help.",
        ],
      },
      {
        heading: "Why nights change",
        paragraphs: [
          "As you get older, the bladder loses some of its stretch, and the body may make less of the hormone that slows urine production at night. Fluid that gathers around the ankles in the day can also return to the blood when you lie down and fill the bladder overnight.",
          "The prostate grows in almost all men as they get older. The Bladder & Bowel Community says more than half of men over 60 and 80% of men over 80 have an enlarged prostate, which can stop the bladder emptying fully, so it fills again sooner.",
        ],
      },
      {
        heading: "Medicines and memory",
        paragraphs: [
          "There may be an increased risk of confusion, and possibly of dementia getting worse, in people taking oxybutynin. The British Association of Urological Surgeons lists a risk of dementia with anticholinergic tablets, especially if taken with other medicines that act in a similar way.",
          "If you are worried about this, talk to your doctor. Your GP will consider any other medical conditions you have when deciding which medicine suits you, and mirabegron works in a different way.",
        ],
      },
      {
        heading: "Infections can look different",
        paragraphs: [
          "In older, frail people with memory problems, a urinary tract infection may cause agitation or confusion, leaking that is worse than usual, or new shivering or shaking.",
          "The NHS says to ask for an urgent GP appointment or get help from NHS 111 if you think someone aged 65 or older has a urine infection. Call 999 or go to A&E if they are confused, drowsy or have difficulty speaking.",
        ],
      },
      {
        heading: "Safer night-time trips",
        paragraphs: [
          "Older people may get up several times at night to pee, and may wander in the dark looking for the toilet. A commode or chamber pot by the bed, or a low night-light, may help.",
          "Falls are more likely as you get older. Shoes or slippers that fit well and have a good grip, a home free of clutter and loose rugs, and a personal alarm or phone close by can all help. Not drinking enough can lead to confusion and falls in older people, so keep drinking enough.",
        ],
      },
    ],
    helps: [
      "Get help for bladder symptoms at any age: it is never too late.",
      "Talk to your doctor if you are worried about memory or confusion with bladder medicines.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you think someone aged 65 or older has a urine infection.",
      "Call 999 or go to A&E if someone with a urine infection is confused, drowsy or has difficulty speaking.",
      "Keep a commode by the bed or use a low night-light for night-time trips.",
      "Wear well-fitting slippers with a good grip, and clear clutter and loose rugs.",
    ],
    tryThisWeek: [
      "Add a night-light on the way to the toilet.",
      "Check your slippers grip well.",
      "Ask about your bladder medicine.",
    ],
    ask: "Are my bladder medicines the right ones for me at my age, given my other medicines?",
    interactive: {
      kind: "scenarios",
      title: "Later-life moments",
      scenarios: [
        {
          id: "confused",
          situation: "Your mother, 82, is suddenly confused and leaking more than usual.",
          options: [{ text: "Call 999 or go to A&E", best: true }, { text: "Wait a few days to see" }],
          why: "In older, frail people, a urine infection may cause confusion and worse leaking. Call 999 or go to A&E if someone is confused, drowsy or has difficulty speaking.",
        },
        {
          id: "night-trip",
          situation: "You get up three times a night and the hallway is dark.",
          options: [{ text: "Use a low night-light or a commode", best: true }, { text: "Rush to the toilet in the dark" }],
          why: "A commode or chamber pot by the bed, or a low night-light, may help with night-time trips.",
        },
        {
          id: "memory",
          situation: "You worry your bladder tablets affect your memory.",
          options: [{ text: "Talk to your doctor", best: true }, { text: "Stop them without telling anyone" }],
          why: "There may be an increased risk of confusion with oxybutynin. Talk to your doctor if you are worried, and do not stop it without talking to them first.",
        },
      ],
    },
    sources: [BBC_OAB, NHS_UI_CAUSES, BHUK_OAB, BBC_NOCTURIA, NHS_OXY_QS, BAUS_OAB, NHS_UI_TREATMENT, NHS_UTI, BBC_DEMENTIA, NHS_FALLS, BBC_HYDRATION],
    quiz: {
      question: "Is an overactive bladder an inevitable part of ageing?",
      options: [{ text: "No, and it is never too late to get help", right: true }, { text: "Yes, nothing can be done" }, { text: "Only for men" }],
      why: "But an overactive bladder is not an inevitable part of ageing, and it is never too late to get help.",
    },
  },
];
