import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Enlarged prostate page's pieces (content/library-conditions/digestion-more.ts).
// Every sentence was written from wording checked on 22 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS, Prostate Cancer UK and
// the British Association of Urological Surgeons (BAUS: its condition page and patient leaflets), with the
// Bladder and Bowel Community for toilets and travel. An enlarged prostate is also called benign prostatic
// enlargement (BPE) or benign prostatic hyperplasia (BPH). General information only; it never replaces what a
// person's own GP, nurse or urology team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const pcuk = (label: string, path: string): LearnSource => ({ label: `Prostate Cancer UK: ${label}`, url: `https://prostatecanceruk.org/prostate-information-and-support/${path}` });
const bausLeaflet = (label: string, file: string): LearnSource => ({ label: `BAUS: ${label}`, url: `https://www.baus.org.uk/_userfiles/pages/files/Patients/Leaflets/${file}` });
const bbc = (label: string, path: string): LearnSource => ({ label: `Bladder and Bowel Community: ${label}`, url: `https://www.bladderandbowel.org/${path}` });

const NHS_BPE = nhs("Enlarged prostate", "conditions/enlarged-prostate/");
const NHS_PSA = nhs("PSA test", "tests-and-treatments/psa-test/");
const NHS_TURP = nhs("Transurethral resection of the prostate (TURP)", "tests-and-treatments/transurethral-resection-of-the-prostate-turp/");
const NHS_CATHETER = nhs("Urinary catheter", "tests-and-treatments/urinary-catheters/");
const NHS_PC_SYMPTOMS = nhs("Symptoms of prostate cancer", "conditions/prostate-cancer/symptoms/");
const NHS_PC_CAUSES = nhs("Causes of prostate cancer", "conditions/prostate-cancer/causes/");
const NHS_ED = nhs("Erectile dysfunction (impotence)", "conditions/erection-problems-erectile-dysfunction/");
const NHS_TAMS_ABOUT = nhs("About tamsulosin", "medicines/tamsulosin/about-tamsulosin/");
const NHS_TAMS_SIDE = nhs("Side effects of tamsulosin", "medicines/tamsulosin/side-effects-of-tamsulosin/");
const NHS_TAMS_HOW = nhs("How and when to take tamsulosin", "medicines/tamsulosin/how-and-when-to-take-tamsulosin/");
const NHS_TAMS_QS = nhs("Common questions about tamsulosin", "medicines/tamsulosin/common-questions-about-tamsulosin/");
const NHS_FIN_ABOUT = nhs("About finasteride", "medicines/finasteride/about-finasteride/");
const NHS_FIN_SIDE = nhs("Side effects of finasteride", "medicines/finasteride/side-effects-of-finasteride/");
const NHS_FIN_HOW = nhs("How and when to take finasteride", "medicines/finasteride/how-and-when-to-take-finasteride/");
const NHS_FIN_QS = nhs("Common questions about finasteride", "medicines/finasteride/common-questions-about-finasteride/");

const OTHER = "just-diagnosed/other-prostate-problems";
const PCUK_BPE = pcuk("Enlarged prostate", `${OTHER}/enlarged-prostate`);
const PCUK_TESTS = pcuk("How is an enlarged prostate diagnosed?", `${OTHER}/enlarged-prostate-tests`);
const PCUK_TREAT = pcuk("How is an enlarged prostate treated?", `${OTHER}/enlarged-prostate-treatment`);

const BAUS_PROSTATE: LearnSource = { label: "BAUS: Prostate symptoms (bladder outlet obstruction)", url: "https://www.baus.org.uk/patients/conditions/9/prostate_symptoms_bladder_outlet_obstruction/" };
const BAUS_LUTS = bausLeaflet("Lower urinary tract symptoms (LUTS) in men", "Male%20LUTS.pdf");
const BAUS_NOCTURNAL = bausLeaflet("Nocturnal polyuria (passing too much urine at night)", "Nocturnal%20polyuria.pdf");
const BAUS_TURP = bausLeaflet("Transurethral resection of the prostate for benign disease", "TURP%20for%20benign.pdf");
const BAUS_TRAINING = bausLeaflet("Bladder training", "Bladder%20training.pdf");

const BBC_TRAVEL = bbc("Travelling over Christmas", "news/travelling-over-christmas/");
const BBC_CARD = bbc("Free Just Can't Wait card", "free-just-cant-wait-card/");

export const bphAnswers: LearnArticle[] = [
  {
    id: "bph-what-it-is",
    kicker: "Understanding",
    question: "What is an enlarged prostate?",
    hook: "A gland that grows with age and can squeeze the tube urine passes through. Very common, and not cancer.",
    short: "An enlarged prostate is when your prostate gets bigger. It's common, most often in men over 50, and is not usually serious. It isn't caused by cancer, but as it grows it can press on the tube that carries pee, causing problems with peeing.",
    sections: [
      {
        heading: "A small gland below the bladder",
        paragraphs: [
          "The prostate is a small, walnut-size gland under the bladder and behind the penis. It produces a thick fluid that mixes with sperm to make semen.",
          "The urethra, the tube that carries pee from your bladder, runs through the middle of the prostate. If the prostate gets bigger, it can put pressure on this tube, causing problems with peeing.",
        ],
      },
      {
        heading: "What the names mean",
        paragraphs: [
          "The medical term for an enlarged prostate is benign prostatic enlargement (BPE). Benign means not cancer, prostatic means to do with the prostate, and enlargement means an increase in size.",
          "You might also hear it called benign prostatic hyperplasia (BPH). Hyperplasia means an increase in the number of cells. It's this increase in cells that makes the prostate grow bigger.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "An enlarged prostate is most common in men over 50 years old. It can affect anyone with a prostate. It can affect younger men too, although this is uncommon.",
          "By the age of 65, half of men will have benign enlargement of the prostate, says the British Association of Urological Surgeons. At the age of 90, 90 in every 100 men have it.",
        ],
      },
      {
        heading: "What causes it",
        paragraphs: [
          "It's thought that an enlarged prostate may be caused by changes in your hormone levels as you get older. The balance of oestrogen and testosterone in your body changes with age, and this may cause your prostate to grow.",
          "You may be more likely to get it if others in your family have an enlarged prostate. Some studies show that obese men and men who have diabetes may be more likely to develop one. More studies are needed to know for certain if, and how, it can be prevented.",
        ],
      },
      {
        heading: "Not always a problem",
        paragraphs: [
          "Not everyone with an enlarged prostate gets symptoms, and some men have symptoms that don't bother them. Many men can live with an enlarged prostate without it affecting their life or needing treatment.",
          "An enlarged prostate is not caused by prostate cancer, and does not increase your risk of getting prostate cancer. There are treatments that can help if you need them.",
        ],
      },
    ],
    helps: [
      "See a GP if you have difficulty peeing or need to pee more frequently; the GP will be used to talking about these symptoms.",
      "Keep to a healthy weight, as being overweight can make symptoms worse.",
      "Exercise regularly, as it may help your symptoms; if you're not usually very active, speak to your doctor first.",
      "If you have any symptoms, visit your GP to find out what may be causing them.",
    ],
    tryThisWeek: [
      "Book a GP visit if peeing has changed.",
      "Work towards a healthy weight.",
      "Plan some regular exercise.",
    ],
    ask: "Is my prostate enlarged, and is that what is causing my symptoms?",
    interactive: {
      kind: "risk-check",
      title: "What makes it more likely?",
      intro: "Tick any that apply. Some you can change, and some you cannot.",
      items: [
        { id: "age", label: "Being over 50", note: "Your risk of having an enlarged prostate increases as you get older.", changeable: false },
        { id: "hormones", label: "Hormone changes with age", note: "The balance of oestrogen and testosterone changes as you get older. This may cause your prostate to grow.", changeable: false },
        { id: "family", label: "Family members with one", note: "You may be more likely to get it if others in your family have an enlarged prostate.", changeable: false },
        { id: "weight", label: "Being overweight", note: "Some studies show obese men may be more likely to develop it. Being overweight can make symptoms worse.", changeable: true },
        { id: "diabetes", label: "Diabetes", note: "Some studies show that men who have diabetes may be more likely to develop an enlarged prostate.", changeable: false },
        { id: "active", label: "Not much regular exercise", note: "Regular exercise may help to reduce your risk of urinary symptoms.", changeable: true },
      ],
    },
    sources: [NHS_BPE, NHS_PSA, PCUK_BPE, BAUS_PROSTATE, PCUK_TREAT],
    quiz: {
      question: "What does 'benign' mean in benign prostatic enlargement?",
      options: [{ text: "Not cancer", right: true }, { text: "Very large" }, { text: "Painful" }],
      why: "Benign means not cancer, prostatic means to do with the prostate, and enlargement means an increase in size.",
    },
  },
  {
    id: "bph-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms of an enlarged prostate?",
    hook: "A weak flow, stopping and starting, rushing to the toilet, getting up at night. They usually creep up slowly.",
    short: "The main symptoms are problems with peeing: difficulty starting, a weak or stop-start flow, feeling you have not emptied your bladder, dribbling afterwards, and needing to go more often or urgently, including at night. They usually develop slowly. Get them checked by a GP, as other conditions can cause them too.",
    sections: [
      {
        heading: "Problems with peeing",
        paragraphs: [
          "The main symptoms of an enlarged prostate are problems with peeing. You may have difficulty starting to pee, or have to push or strain. The flow may be weak, stop and start, and take longer than usual to empty your bladder.",
          "You may feel like you cannot fully empty your bladder, or dribble pee after you finish. You may need to pee more often or urgently, including getting up to pee during the night. A sudden urge can mean you sometimes leak before you get to the toilet.",
        ],
      },
      {
        heading: "The words doctors use",
        paragraphs: [
          "Doctors call these lower urinary tract symptoms (LUTS). They include frequency, the need to pass urine very often, urgency, the need to pass urine without much warning, and hesitancy, not being able to pass urine immediately.",
          "Poor flow is a decrease in the force of your urinary stream, and nocturia is the need to pass urine frequently at night. Going to the toilet more than six to eight times in 24 hours, with more than one of these visits at night, is considered abnormal.",
        ],
      },
      {
        heading: "How it changes over time",
        paragraphs: [
          "The symptoms usually develop slowly, and may gradually get worse as you get older. You may not get all of them, and some men with an enlarged prostate don't get any symptoms at all.",
          "Some men find their symptoms improve over time without treatment. But for most, the symptoms will stay the same or slowly start to cause more problems unless they have treatment. The severity of the symptoms is not related to the size of the prostate.",
        ],
      },
      {
        heading: "Other causes",
        paragraphs: [
          "These symptoms can also be caused by other things, such as cold weather, anxiety, other health problems, lifestyle factors and some medicines. Not all urinary symptoms in men are due to an enlarged prostate.",
          "It's important to get these symptoms checked by a GP because they can sometimes be caused by other more serious conditions, such as prostate cancer. Blood in your urine may be a symptom of an enlarged prostate, but this is rare and is usually caused by something else.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "See a GP if you have difficulty peeing or need to pee more frequently. Try not to be embarrassed. The GP will be used to talking about these symptoms.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you have blood in your pee, pain when peeing, or you cannot pee at all. Your pee may look pink, red or brown if there is blood in it.",
        ],
      },
    ],
    helps: [
      "See a GP if you have difficulty peeing or need to pee more frequently.",
      "Before you visit your GP, think about how often you've had symptoms over the last month.",
      "Keep a diary of what you drink, how much you drink, how often you urinate and the volume of urine you pass.",
      "Tell your doctor if you have blood in your urine.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you have blood in your pee, pain when peeing or cannot pee at all.",
    ],
    tryThisWeek: [
      "See a GP about peeing problems.",
      "Note how often symptoms came this month.",
      "Keep a drinks and toilet diary.",
    ],
    ask: "Could anything other than my prostate be causing these symptoms?",
    interactive: {
      kind: "signs",
      title: "Which of these do you notice?",
      intro: "Tick the ones you notice. They become a list to take to your GP.",
      signs: [
        "Difficulty starting to pee",
        "Having to push or strain to pee",
        "A weak flow of pee",
        "Stopping and starting",
        "Feeling the bladder has not emptied",
        "Dribbling after finishing",
        "Needing to pee more often",
        "A sudden urge to pee",
        "Leaking before reaching the toilet",
        "Getting up at night to pee",
      ],
      after: "Blood in your pee, pain when peeing or not being able to pee at all need an urgent GP appointment or help from NHS 111.",
      copyHeading: "Symptoms to tell my GP about",
    },
    sources: [NHS_BPE, PCUK_BPE, BAUS_LUTS, BAUS_PROSTATE, PCUK_TESTS],
    quiz: {
      question: "Does the size of the prostate show how bad the symptoms will be?",
      options: [{ text: "No, severity is not related to size", right: true }, { text: "Yes, bigger always means worse" }, { text: "Yes, smaller always means worse" }],
      why: "The severity of the symptoms is not related to the size of the prostate.",
    },
  },
  {
    id: "bph-not-cancer",
    kicker: "Understanding",
    question: "Is an enlarged prostate cancer?",
    hook: "No, and it does not raise your risk of cancer either. But the symptoms can overlap, which is why a check matters.",
    short: "No. An enlarged prostate is not caused by cancer and does not increase your risk of prostate cancer. The two usually begin in different parts of the prostate, but a man can have both at once and some symptoms overlap, so it's important to get checked by a GP.",
    sections: [
      {
        heading: "Not cancer, and no extra risk",
        paragraphs: [
          "An enlarged prostate is not caused by prostate cancer, and does not increase your risk of getting prostate cancer. You are no more likely to develop prostate cancer than a man without benign prostatic enlargement.",
          "The two problems usually begin in different parts of the prostate. But men can have an enlarged prostate and prostate cancer at the same time.",
        ],
      },
      {
        heading: "Why the symptoms can look alike",
        paragraphs: [
          "Prostate cancer often has no symptoms at first. It usually starts to grow on the outer part of the prostate, so it does not press on the urethra and cause symptoms until the cancer has grown or spread.",
          "If this happens, it can cause changes to the way you pee, such as a weak flow, needing to pee urgently or often, or peeing during the night. These symptoms do not always mean you have prostate cancer. You can also get them if you have an enlarged prostate, a very common non-cancerous condition.",
        ],
      },
      {
        heading: "Why a check still matters",
        paragraphs: [
          "It's important to get urinary symptoms checked by a GP because they can sometimes be caused by other more serious conditions, such as prostate cancer. If they're caused by cancer, finding it early may mean it's easier to treat.",
          "You might find you get used to some of these symptoms. But it's important to be checked by a GP if your symptoms change, get worse, or do not feel normal.",
        ],
      },
      {
        heading: "Who has a higher risk of prostate cancer",
        paragraphs: [
          "The risk of developing prostate cancer increases with age and mostly affects men over 50. You may have a higher chance if you're from a Black African or African Caribbean ethnic background, or if you have a history of prostate cancer in your family.",
          "Speak to a GP if you're worried about your prostate cancer risk, even if you do not have any symptoms. Symptoms of prostate cancer do not always appear until the cancer has grown or spread.",
        ],
      },
      {
        heading: "What a raised PSA means",
        paragraphs: [
          "A high PSA does not mean you have cancer. It may be for other reasons, such as an enlarged prostate. Between 50% and 60% of men with benign enlargement of the prostate have a raised PSA level, says the British Association of Urological Surgeons.",
          "If your PSA blood test result is higher than normal, you'll be offered other tests to see if you have prostate cancer, or something less serious such as an enlarged prostate or a prostate infection. A referral for more tests does not definitely mean you have cancer.",
        ],
      },
    ],
    helps: [
      "Get urinary symptoms checked by a GP, as they can sometimes be caused by more serious conditions such as prostate cancer.",
      "Be checked by a GP if your symptoms change, get worse, or do not feel normal.",
      "Speak to a GP if you're worried about your prostate cancer risk, even if you do not have any symptoms.",
      "If you're worried about prostate cancer, talk to your GP or call Prostate Cancer UK's Risk Information Service.",
    ],
    tryThisWeek: [
      "Get urinary symptoms checked.",
      "See a GP if symptoms change.",
      "Ask a GP about your cancer risk.",
    ],
    ask: "Do my symptoms or test results need any checks for prostate cancer?",
    interactive: {
      kind: "scenarios",
      title: "Questions people ask",
      scenarios: [
        {
          id: "risk",
          situation: "Your GP says your prostate is enlarged. Is your cancer risk now higher?",
          options: [{ text: "No, it does not increase the risk", best: true }, { text: "Yes, the risk goes up" }],
          why: "An enlarged prostate is not caused by prostate cancer, and does not increase your risk of getting prostate cancer.",
        },
        {
          id: "psa",
          situation: "Your PSA result comes back higher than normal.",
          options: [{ text: "Have the further tests you are offered", best: true }, { text: "Assume it is cancer" }, { text: "Ignore it" }],
          why: "A high PSA does not mean you have cancer. You'll be offered other tests to find out the cause.",
        },
        {
          id: "worse",
          situation: "You've had a weak flow for years, and lately it has got worse.",
          options: [{ text: "Get it checked by a GP", best: true }, { text: "Put up with it, as you're used to it" }],
          why: "It's important to be checked by a GP if your symptoms change, get worse, or do not feel normal.",
        },
        {
          id: "family",
          situation: "Your father had prostate cancer, and you have no symptoms.",
          options: [{ text: "Speak to a GP about your risk", best: true }, { text: "Wait until symptoms appear" }],
          why: "Speak to a GP if you're worried about your prostate cancer risk, even if you do not have any symptoms.",
        },
      ],
    },
    sources: [NHS_BPE, BAUS_PROSTATE, PCUK_BPE, NHS_PC_SYMPTOMS, NHS_PC_CAUSES, NHS_PSA],
    quiz: {
      question: "Can a man have an enlarged prostate and prostate cancer at the same time?",
      options: [{ text: "Yes, both can happen at once", right: true }, { text: "No, one rules out the other" }, { text: "Only after surgery" }],
      why: "But men can have an enlarged prostate and prostate cancer at the same time.",
    },
  },
  {
    id: "bph-tests",
    kicker: "Tests",
    question: "What tests will I have, and should I have a PSA test?",
    hook: "A chat, a diary, a pee sample and maybe a blood test at the GP. Flow tests and scans if more is needed.",
    short: "A GP asks about your symptoms, may examine your tummy and prostate, and asks you to keep a record of drinks and toilet visits. A urine test and a PSA blood test are common. A specialist may add a flow test, a bladder scan or a camera test. A PSA test has benefits and risks to talk through first.",
    sections: [
      {
        heading: "At the GP surgery",
        paragraphs: [
          "If a GP thinks you could have an enlarged prostate, they'll ask about your symptoms, such as how often you pee. They will also check whether your symptoms might be caused by another health problem, such as diabetes, or by medicines you are taking.",
          "They may ask to examine your tummy and penis, and feel inside your bottom with their finger to check the size of your prostate. This is called a rectal examination.",
        ],
      },
      {
        heading: "A diary and a questionnaire",
        paragraphs: [
          "The GP will usually ask you to keep a record for at least 3 days of how much you drink, and how often and how much you pee. A diary can help your doctor to work out what may be causing your symptoms and how to treat them.",
          "You might also be asked to fill in a short questionnaire called the International Prostate Symptom Score (IPSS). It is used to see how bad your symptoms are and how much they are bothering you.",
        ],
      },
      {
        heading: "Urine and blood tests",
        paragraphs: [
          "Your GP may ask for a urine sample to check for blood or any infection that could be causing your symptoms. You may also be offered a blood test to check your kidneys are working properly.",
          "A PSA test checks the level of prostate specific antigen in your blood. An enlarged prostate can cause the amount of PSA in your blood to rise. A urine infection, inflammation and prostate cancer can also make it rise.",
        ],
      },
      {
        heading: "The PSA question",
        paragraphs: [
          "There is a risk a PSA test result may not be accurate, and you may be offered tests and treatment you do not need. Your doctor will discuss the benefits and risks of having a PSA test before a decision is made about whether it is the right choice for you.",
          "For 48 hours before a PSA test, do not ejaculate, have anal sex, ride a bike, or do anything that leaves you out of breath, such as exercise. These can increase your PSA levels. If you have a urine infection, you'll need to wait 4 to 6 weeks after it has cleared.",
          "You should get your PSA test results in 1 to 2 weeks. If you have a raised PSA level, you may be offered another PSA test to check if your levels are still high.",
        ],
      },
      {
        heading: "Tests at the hospital",
        paragraphs: [
          "A specialist may ask you to pee into a machine that measures the speed of your flow. Men with an enlarged prostate usually have a slower flow than other men. You'll need a full bladder for this test.",
          "An ultrasound scan shows how much urine your bladder can hold and whether it is emptying properly. A cystoscopy looks inside your bladder with a thin tube that has a light and camera on the end, and anaesthetic gel is used to make it more comfortable.",
        ],
      },
    ],
    helps: [
      "Keep a record for at least 3 days of how much you drink, and how often and how much you pee.",
      "Make sure your GP knows about all the medicines you take, including herbal medicines.",
      "Discuss the benefits and risks of a PSA test with a GP.",
      "For 48 hours before a PSA test, do not ejaculate, ride a bike or do exercise that leaves you out of breath.",
      "Ask your GP to explain which tests you will have, where you will have them, and what they will involve.",
      "Tell the person doing your blood test if you're worried about needles.",
    ],
    tryThisWeek: [
      "Start a 3-day drinks and toilet diary.",
      "List all your medicines.",
      "Ask which tests you will have.",
    ],
    ask: "Which tests do I need, and is a PSA test right for me?",
    interactive: {
      kind: "flip-cards",
      title: "Your tests, card by card",
      intro: "Turn each card to see what each test is for.",
      cards: [
        { id: "diary", front: "Bladder diary", when: "At home, for at least 3 days", back: "A record of what you drink, and how often and how much you pee. It helps work out the cause." },
        { id: "ipss", front: "Symptom score (IPSS)", when: "A short questionnaire", back: "Shows how bad your symptoms are and how much they are bothering you." },
        { id: "urine", front: "Urine test", when: "At the GP surgery", back: "Checks for blood or any infection that could be causing your symptoms." },
        { id: "psa", front: "PSA blood test", when: "After talking through benefits and risks", back: "Checks the level of PSA in your blood. A high PSA does not mean you have cancer." },
        { id: "dre", front: "Rectal examination", when: "At the GP surgery", back: "The doctor feels inside your bottom with a finger to check the size of your prostate." },
        { id: "flow", front: "Urine flow test", when: "At the hospital, with a full bladder", back: "You pee into a machine that measures the speed of your flow." },
        { id: "scan", front: "Bladder ultrasound", when: "Often straight after the flow test", back: "Shows how much urine is left in your bladder after you pee." },
        { id: "cysto", front: "Cystoscopy", when: "If symptoms are severe, or with blood or pain", back: "A thin tube with a light and camera looks inside your urethra and bladder." },
      ],
    },
    sources: [NHS_BPE, PCUK_TESTS, NHS_PSA, BAUS_PROSTATE],
    quiz: {
      question: "Which of these can make your PSA level rise?",
      options: [{ text: "An enlarged prostate, an infection or cancer", right: true }, { text: "Drinking water before the test" }, { text: "Eating breakfast" }],
      why: "An enlarged prostate can cause the amount of PSA in your blood to rise. A urine infection, inflammation and prostate cancer can also make it rise.",
    },
  },
  {
    id: "bph-lifestyle",
    kicker: "Treatment",
    question: "What changes can I make myself?",
    hook: "Small changes to drinks, timing and toilet habits can ease symptoms, and may be all some men need.",
    short: "If your symptoms are not causing many problems, doctors usually recommend lifestyle changes first. Cutting down on alcohol, caffeine and fizzy drinks, drinking less in the evening but enough in the day, emptying your bladder fully, avoiding constipation, keeping a healthy weight and bladder training can all help.",
    sections: [
      {
        heading: "Starting with lifestyle",
        paragraphs: [
          "An enlarged prostate does not always need treatment. It depends on your symptoms and how they're affecting you. If your symptoms are not causing many problems, doctors will usually recommend trying lifestyle changes first.",
          "An enlarged prostate usually develops slowly, and your symptoms may never get any worse. Between 30% and 40% of men with prostate symptoms do not get worse with time and may not need any treatment, says the British Association of Urological Surgeons.",
        ],
      },
      {
        heading: "What you drink",
        paragraphs: [
          "Drink less alcohol, caffeine, artificial sweeteners and fizzy drinks. These can irritate the bladder and make urinary symptoms worse. If you cut down on caffeine, do it gradually, over a fortnight or so, to prevent withdrawal symptoms.",
          "Do not cut down too much on fluids, as this can cause problems such as urinary tract infections. Prostate Cancer UK suggests drinking 3 to 4 pints a day, and it helps to space your drinks evenly throughout the day.",
        ],
      },
      {
        heading: "Toilet habits",
        paragraphs: [
          "Wait a few moments after you pee and then try peeing again, to help you empty your bladder. This is called double voiding. Do not strain or push when peeing: try to relax when you pee.",
          "To stop dribbling, try putting your fingertips 3 finger widths behind your scrotum after you finish peeing. Gently press while moving your fingers forwards and upwards towards the base of your penis, to help push the last few drops out.",
        ],
      },
      {
        heading: "Bladder training",
        paragraphs: [
          "Bladder training can help you hold on for longer when you need to pee. You try holding on for a short time when you need to go, and gradually increase the time over a few weeks.",
          "Try to avoid going to the toilet just in case, as the bladder can get used to holding smaller amounts. Bladder training is done for a minimum of 6 weeks, and the bladder may need a few months of training to reach its full potential.",
        ],
      },
      {
        heading: "Your body and your medicines",
        paragraphs: [
          "Eat enough fibre to help prevent constipation, which can put pressure on your bladder. Keep to a healthy weight, as being overweight can make symptoms worse. Regular exercise may help your symptoms too.",
          "Check with a doctor or pharmacist whether any medicines you take for other conditions could be making your symptoms worse, such as antidepressants or decongestants. Nicotine can also irritate the bladder and make urinary symptoms worse.",
        ],
      },
    ],
    helps: [
      "Cut down on alcohol and caffeine, as they can make you pee more.",
      "Reduce how much fluid you drink before bed or before going out, but make sure you drink enough during the rest of the day.",
      "Wait a few moments after you pee and then try peeing again, without straining or pushing.",
      "Make sure you eat enough fibre to help prevent constipation.",
      "Ask your doctor or specialist nurse about bladder retraining.",
      "Check with a doctor or pharmacist whether any medicines you take could be making your symptoms worse.",
    ],
    tryThisWeek: [
      "Swap one caffeinated drink.",
      "Wait, then try peeing again.",
      "Ask about bladder retraining.",
    ],
    ask: "Which of these changes would help my symptoms most?",
    interactive: {
      kind: "scenarios",
      title: "Everyday choices",
      scenarios: [
        {
          id: "fluids",
          situation: "You're thirsty, but worried about needing the toilet.",
          options: [{ text: "Drink enough, spaced through the day", best: true }, { text: "Cut right down on fluids" }],
          why: "Do not cut down too much on fluids, as this can cause problems such as urinary tract infections.",
        },
        {
          id: "more",
          situation: "You've just finished peeing, but feel there is more to come.",
          options: [{ text: "Wait a few moments, then try again", best: true }, { text: "Push and strain" }],
          why: "Wait a few moments after you pee and then try peeing again. Do not strain or push when peeing.",
        },
        {
          id: "just-in-case",
          situation: "You go to the toilet just in case, many times a day.",
          options: [{ text: "Try holding on for a short time", best: true }, { text: "Keep going just in case" }],
          why: "Try to avoid going just in case. Hold on for a short time, and gradually increase the time over a few weeks.",
        },
        {
          id: "coffee",
          situation: "You want to cut out coffee.",
          options: [{ text: "Cut down gradually over a fortnight", best: true }, { text: "Stop all at once" }],
          why: "Cut down on caffeine gradually, over a fortnight or so, to prevent withdrawal symptoms.",
        },
      ],
    },
    sources: [NHS_BPE, PCUK_TREAT, BAUS_PROSTATE, BAUS_LUTS, BAUS_TRAINING, NHS_TAMS_QS],
    quiz: {
      question: "What helps you empty your bladder fully?",
      options: [{ text: "Waiting a few moments, then trying again", right: true }, { text: "Pushing and straining" }, { text: "Drinking very little all day" }],
      why: "Wait a few moments after you pee and then try peeing again, to help you empty your bladder.",
    },
  },
  {
    id: "bph-medicines",
    kicker: "Treatment",
    question: "Which medicines help an enlarged prostate?",
    hook: "Some relax the muscle so urine flows more easily; others slowly shrink the gland. Some men take both.",
    short: "If you have moderate or severe symptoms, you may be offered medicines. Alpha blockers such as tamsulosin relax the muscle around the bladder and prostate and can start to work within days. Finasteride and dutasteride slowly shrink the prostate over months. Other medicines help with urgency or with peeing at night.",
    sections: [
      {
        heading: "When medicines are offered",
        paragraphs: [
          "If lifestyle changes don't control your symptoms, medicines may be an option. If you have moderate or severe symptoms you may be offered medicines for an enlarged prostate.",
          "These medicines can cause side effects. Your doctor will explain the benefits and possible side effects and help you decide if they are right for you. Tell your doctor about any medicines or herbal remedies you already use.",
        ],
      },
      {
        heading: "Alpha blockers",
        paragraphs: [
          "Tamsulosin belongs to a group of medicines called alpha blockers, along with others such as alfuzosin and doxazosin. They relax the muscle around the bladder and prostate gland so you can pee more easily. They don't cure an enlarged prostate, but they can help to relieve symptoms.",
          "Symptoms may start to improve within a few hours or days, but you may need to take them for a few weeks before they work fully. If your symptoms haven't improved after about four to six weeks, your doctor may suggest a higher dose or a different treatment.",
          "When you first take tamsulosin, you may feel dizzy or light-headed. If this happens, sit or lie down until you feel better, and do not drive, cycle or use machinery. It's taken once a day, usually after breakfast or the first meal of the day.",
        ],
      },
      {
        heading: "Medicines that shrink the prostate",
        paragraphs: [
          "Finasteride and dutasteride are 5-alpha reductase inhibitors. They stop testosterone turning into another hormone, called DHT, which can cause your prostate to grow bigger. This helps shrink your prostate so it stops pressing on the urethra.",
          "They work slowly: for an enlarged prostate, finasteride can take up to 6 months to work fully. But they are effective at improving symptoms in the long term, and help to prevent acute urine retention and the need for surgery. You'll usually be offered them if your prostate is very large.",
          "These medicines lower the amount of PSA in your blood. If you need a PSA test, always tell your doctor or nurse that you're taking one.",
        ],
      },
      {
        heading: "Combinations and other medicines",
        paragraphs: [
          "Some people may need a combination of an alpha blocker and a 5-alpha reductase inhibitor if a single medicine is not helping. With larger prostates, the combination has been shown to be more effective than either type used alone.",
          "Medicines such as oxybutynin or tolterodine help with needing to pee more often or more urgently. Mirabegron may be suggested if these aren't working or you can't take them. If you pee a lot during the night, a desmopressin tablet before bed may be an option.",
        ],
      },
      {
        heading: "Taking them long term",
        paragraphs: [
          "Tamsulosin is generally safe to take for a long time, and it works best when you take it for a long time. You'll usually take finasteride for several months or years. You'll have regular check-ups to see how well the medicine is working.",
          "Talk to a doctor if you want to stop. Stopping tamsulosin suddenly could make your symptoms come back, and if you stop finasteride your symptoms will usually come back. If side effects bother you, the doctor may be able to prescribe a different medicine.",
          "Some men use herbal remedies such as saw palmetto, but Prostate Cancer UK says studies suggest they're unlikely to improve symptoms. Even if a product is natural, this doesn't mean it is safe, so tell your doctor about any you use.",
        ],
      },
    ],
    helps: [
      "Tell your doctor about any medicines or herbal remedies you already use.",
      "Take tamsulosin once a day, after breakfast or the first meal or snack of the day.",
      "If tamsulosin makes you dizzy, sit or lie down until you feel better, and do not drive, cycle or use machinery.",
      "If you're going to have cataract or glaucoma surgery, tell the doctor in advance that you take tamsulosin.",
      "If you take finasteride or dutasteride and need a PSA test, tell your doctor or nurse.",
      "Talk to a doctor before stopping tamsulosin or finasteride.",
    ],
    tryThisWeek: [
      "List your medicines and remedies.",
      "Take tamsulosin after breakfast.",
      "Mention it before any eye surgery.",
    ],
    ask: "Which medicine suits my symptoms, and what side effects should I look out for?",
    interactive: {
      kind: "flip-cards",
      title: "The medicines, card by card",
      intro: "Turn each card to see what each type of medicine does.",
      cards: [
        { id: "alpha", front: "Alpha blockers", when: "Usually the first medicine offered", back: "Relax the muscle around the bladder and prostate so you can pee more easily. Tamsulosin, alfuzosin, doxazosin." },
        { id: "5ari", front: "5-alpha reductase inhibitors", when: "Usually if the prostate is very large", back: "Slowly shrink the prostate, over months. Finasteride and dutasteride." },
        { id: "combo", front: "Combination treatment", when: "If one medicine is not helping enough", back: "An alpha blocker with a 5-alpha reductase inhibitor, as separate tablets or one tablet." },
        { id: "antimuscarinic", front: "Antimuscarinics", when: "For urgency and needing to go often", back: "Help with a sudden urge to pee, needing to go more often and leaking. Oxybutynin, tolterodine, solifenacin." },
        { id: "mirabegron", front: "Mirabegron", when: "If antimuscarinics don't work or don't suit", back: "Can help if you need to pee more often than usual or get sudden urges." },
        { id: "desmopressin", front: "Desmopressin", when: "If you pee a lot at night", back: "Taken before bed, it makes the kidneys produce less urine for six to eight hours. Not usually an option over 65." },
      ],
    },
    sources: [NHS_BPE, PCUK_TREAT, NHS_TAMS_ABOUT, NHS_TAMS_HOW, NHS_TAMS_QS, NHS_FIN_ABOUT, NHS_FIN_QS, NHS_FIN_HOW, BAUS_PROSTATE],
    quiz: {
      question: "Which medicines work by slowly shrinking the prostate?",
      options: [{ text: "Finasteride and dutasteride", right: true }, { text: "Tamsulosin and alfuzosin" }, { text: "Oxybutynin and tolterodine" }],
      why: "Finasteride and dutasteride are 5-alpha reductase inhibitors. This helps shrink your prostate so it stops pressing on the urethra.",
    },
  },
  {
    id: "bph-surgery",
    kicker: "Treatment",
    question: "What surgery and procedures are there?",
    hook: "TURP is the most common operation. Lasers, steam and small implants are other options, though not every hospital offers them.",
    short: "Surgery may be offered if medicines have not helped or your symptoms are severe. The most common operation is TURP, which removes part of the prostate through a thin tube passed up the penis. Other procedures use lasers, steam or small implants. Your surgeon will explain the options, risks and benefits.",
    sections: [
      {
        heading: "When surgery is offered",
        paragraphs: [
          "You might be offered surgery if medicines have not helped, or your symptoms are severe. About 1 in 10 men will need surgical treatment for their symptoms, says the British Association of Urological Surgeons.",
          "The options available to you may depend on the size of your prostate and any other health problems you have, and your hospital might not offer all of them. The surgeon will explain your options, the risks and benefits of the procedure, and what will happen.",
        ],
      },
      {
        heading: "TURP, the most common operation",
        paragraphs: [
          "Transurethral resection of the prostate (TURP) is the most common surgery for an enlarged prostate. It involves removing part of your prostate through a thin tube passed up your penis. The surgeon uses the tube to remove small pieces of prostate, and there's no need for stitches or dressings afterwards.",
          "You might have a general anaesthetic, where you're asleep, or a spinal anaesthetic, where you're numb from the waist down. The operation can take around an hour. You'll have a catheter put in to help you empty your bladder afterwards.",
        ],
      },
      {
        heading: "Other procedures",
        paragraphs: [
          "Holmium laser enucleation of the prostate (HoLEP) uses a high-powered laser and may be particularly useful in men with a very large prostate. GreenLight laser surgery heats up and destroys the tissue blocking the urethra. Rezūm uses steam to destroy the blocking tissue.",
          "A prostatic urethral lift (UroLift) puts small implants into the prostate to pull tissue away from the urethra, without removing any tissue. Some procedures have a shorter recovery time and fewer side effects than TURP, but not all of them are available on the NHS.",
        ],
      },
      {
        heading: "Recovery after TURP",
        paragraphs: [
          "Most people leave hospital around 1 to 4 days after TURP. You may be able to do your usual activities around 2 to 4 weeks afterwards, but it can take up to 6 weeks to fully heal.",
          "Drink lots of fluid for the first few days to reduce the chance of a bladder infection, and start pelvic floor exercises as soon as you can. Do not lift very heavy things or do intense exercise for around 6 weeks.",
          "There's a chance you'll have blood in your pee again 10 to 14 days after your operation. This is part of the recovery process. About one patient in five gets some bleeding at this stage, says the British Association of Urological Surgeons.",
        ],
      },
      {
        heading: "Possible problems, and if surgery is not for you",
        paragraphs: [
          "Problems that can happen after TURP include still having problems peeing, difficulty getting or keeping an erection, having no semen when you ejaculate, and needing TURP again if your prostate regrows. Your doctor will talk to you about the chance of complications.",
          "If surgery isn't suitable and other treatments haven't worked, your doctor may suggest a catheter, a thin, flexible tube that drains urine from your bladder. It may be permanent, or you may be shown how to put one in yourself when you need to pee.",
        ],
      },
    ],
    helps: [
      "Ask the surgeon to explain your options, the risks and benefits, and what will happen.",
      "Drink lots of fluid for the first few days after TURP, to reduce the chance of a bladder infection.",
      "Start pelvic floor exercises as soon as you can after TURP.",
      "Do not lift very heavy things or do intense exercise for around 6 weeks afterwards.",
      "After TURP, ask for an urgent GP appointment or get help from NHS 111 if you have a high temperature, suddenly cannot pee, or are bleeding from your penis.",
    ],
    tryThisWeek: [
      "Write down questions for the surgeon.",
      "Learn pelvic floor exercises.",
      "Plan help with heavy lifting.",
    ],
    ask: "Which procedures does this hospital offer, and which would suit my prostate?",
    interactive: {
      kind: "timeline",
      title: "After TURP, step by step",
      steps: [
        { id: "day", when: "The day", title: "The operation", points: ["Takes around an hour", "General or spinal anaesthetic", "A catheter drains your bladder"] },
        { id: "home", when: "1 to 4 days", title: "Going home", points: ["Most people leave hospital", "Blood in the catheter bag for a few days", "Peeing often, and some burning, once the catheter is out"] },
        { id: "bleed", when: "10 to 14 days", title: "Some bleeding again", points: ["Blood in your pee can come back", "This is part of the recovery process"] },
        { id: "usual", when: "2 to 4 weeks", title: "Usual activities", points: ["You may be able to do your usual activities", "Keep up pelvic floor exercises"] },
        { id: "healed", when: "Up to 6 weeks", title: "Fully healed", points: ["No heavy lifting or intense exercise until around 6 weeks"] },
      ],
    },
    sources: [NHS_BPE, BAUS_PROSTATE, PCUK_TREAT, NHS_TURP, BAUS_TURP],
    quiz: {
      question: "What is the most common surgery for an enlarged prostate?",
      options: [{ text: "TURP", right: true }, { text: "Prostate artery embolisation" }, { text: "Bladder neck incision" }],
      why: "Transurethral resection of the prostate (TURP) is the most common surgery for an enlarged prostate.",
    },
  },
  {
    id: "bph-urgent",
    kicker: "Urgent help",
    question: "What should I do if I suddenly cannot pee?",
    hook: "Suddenly and painfully not being able to pee needs treating straight away. Here is who to call.",
    short: "Acute urine retention is when you suddenly and painfully can't pee at all. It needs treating straight away: Prostate Cancer UK says to call your doctor or nurse, or go to your nearest A&E. The NHS says to ask for an urgent GP appointment or get help from NHS 111 if you cannot pee at all, have blood in your pee or pain when peeing.",
    sections: [
      {
        heading: "Acute urine retention",
        paragraphs: [
          "Acute urine retention is when you suddenly and painfully can't urinate at all. It needs treating straight away.",
          "If this happens, Prostate Cancer UK says to call your doctor or nurse, or go to your nearest accident and emergency (A&E) department. They may need to drain your bladder using a catheter.",
          "The risk of acute, painful retention of urine is small, approximately 1 in 100, and it is not always preceded by prostate symptoms, says the British Association of Urological Surgeons.",
        ],
      },
      {
        heading: "Other signs that need a GP urgently",
        paragraphs: [
          "The NHS says to ask for an urgent GP appointment or get help from NHS 111 if you have blood in your pee, pain when peeing, or you cannot pee at all. Your pee may look pink, red or brown if there is blood in it. You can call 111 or get help from 111 online.",
        ],
      },
      {
        heading: "What happens next",
        paragraphs: [
          "A urinary catheter is a flexible tube used to empty the bladder. It allows urine to drain if something is blocking the tube that carries urine out of your bladder, for example because of prostate enlargement.",
          "Before the catheter is removed, you may be offered a medicine called an alpha blocker. This may help stop you getting acute retention again.",
        ],
      },
      {
        heading: "Chronic retention, the slow kind",
        paragraphs: [
          "Chronic urine retention is where you can't empty your bladder fully, but can still urinate a little. It usually develops slowly over time and is usually painless. The first signs often include a weak flow, leaking urine at night, or feeling that your stomach area is swollen.",
          "Over time the pressure of the urine can stretch the bladder muscle and make it weaker, and lead to urine infections or painful bladder stones. Chronic urine retention can damage your bladder and kidneys if it isn't treated. You may be more likely to get retention if you're aged 70 or over, have a very large prostate, a raised PSA level, or severe symptoms and a very slow flow.",
        ],
      },
      {
        heading: "After surgery, with a catheter, or on tamsulosin",
        paragraphs: [
          "If you recently had TURP, the NHS says to ask for an urgent GP appointment or get help from NHS 111 if you have a high temperature or feel hot, cold or shivery, you suddenly cannot pee, you're bleeding from your penis, you have blood in your pee that looks like small blobs of jelly, or your penis is swollen or red.",
          "If you have a catheter and urine hasn't drained from your bladder for two to three hours, contact your GP or district nurse straight away, says Prostate Cancer UK.",
          "If you take tamsulosin, the NHS says to call 999 or go to A&E now if you get a painful erection that lasts 2 or more hours. Do not drive to A&E: ask someone to drive you or call 999 for an ambulance.",
        ],
      },
    ],
    helps: [
      "If you suddenly and painfully cannot pee, call your doctor or nurse, or go to your nearest A&E.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you have blood in your pee, pain when peeing, or you cannot pee at all.",
      "After TURP, ask for an urgent GP appointment or get help from NHS 111 if you have a high temperature, suddenly cannot pee, or are bleeding from your penis.",
      "If your catheter has not drained for two to three hours, contact your GP or district nurse straight away.",
      "If you take tamsulosin, call 999 or go to A&E now for a painful erection that lasts 2 or more hours.",
    ],
    tryThisWeek: [
      "Know when to go to A&E.",
      "Know when to call NHS 111.",
      "Keep your district nurse's number handy.",
    ],
    ask: "Am I at risk of urine retention, and what should I do if it happens?",
    interactive: {
      kind: "scenarios",
      title: "What to do, and who to call",
      scenarios: [
        {
          id: "retention",
          situation: "You suddenly can't pee at all, and it hurts.",
          options: [{ text: "Call your doctor or nurse, or go to A&E", best: true }, { text: "Wait and see if it passes" }],
          why: "It needs treating straight away. Call your doctor or nurse, or go to your nearest A&E.",
        },
        {
          id: "blood",
          situation: "Your pee looks pink.",
          options: [{ text: "Ask for an urgent GP appointment or call 111", best: true }, { text: "Mention it at your next routine visit" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if you have blood in your pee.",
        },
        {
          id: "after-turp",
          situation: "A week after TURP, you feel hot and shivery.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Try to sleep it off" }],
          why: "After TURP, ask for an urgent GP appointment or get help from NHS 111 if you have a high temperature, or feel hot, cold or shivery.",
        },
        {
          id: "catheter",
          situation: "Your catheter bag has stayed empty for three hours.",
          options: [{ text: "Contact your GP or district nurse straight away", best: true }, { text: "Leave it until the morning" }],
          why: "If urine hasn't drained from your bladder for two to three hours, contact your GP or district nurse straight away.",
        },
        {
          id: "erection",
          situation: "On tamsulosin, a painful erection has lasted 2 hours.",
          options: [{ text: "Call 999 or go to A&E now", best: true }, { text: "Wait for it to go down" }],
          why: "Call 999 or go to A&E now if you get a painful erection that lasts 2 or more hours.",
        },
      ],
    },
    sources: [PCUK_BPE, BAUS_PROSTATE, NHS_BPE, NHS_CATHETER, NHS_TURP, PCUK_TREAT, NHS_TAMS_SIDE],
    quiz: {
      question: "What is acute urine retention?",
      options: [{ text: "Suddenly and painfully not being able to pee", right: true }, { text: "Needing to pee at night" }, { text: "A weak flow of pee" }],
      why: "Acute urine retention is when you suddenly and painfully can't urinate at all. It needs treating straight away.",
    },
  },
  {
    id: "bph-nights",
    kicker: "Living well",
    question: "How can I get up less often at night to pee?",
    hook: "Getting up to pee breaks your sleep. Timing your drinks, easing swollen ankles and checking the cause can all help.",
    short: "Needing to pee at night is a common symptom. Drinking less in the evening while drinking enough earlier in the day, cutting down on caffeine and alcohol, and eating watery foods earlier can help. Sometimes the body makes too much urine at night, and a GP can look for the cause and suggest treatment.",
    sections: [
      {
        heading: "Why nights are disrupted",
        paragraphs: [
          "Needing to urinate more often, especially at night, is one of the symptoms of an enlarged prostate. If you need the toilet a lot during the night, this can affect your sleep and make you feel more tired during the day.",
          "There are many reasons why you may need to get up at night to pass urine. They include poor sleep patterns, drinking too much fluid before bed-time, problems with your bladder or prostate, and producing too much urine at night.",
        ],
      },
      {
        heading: "Too much urine at night",
        paragraphs: [
          "As you get older, less than a third of your daily urine output should be at night. When you produce more than a third of the daily total overnight, this is called nocturnal polyuria.",
          "It can happen if your body is not producing enough of a hormone that reduces urine production while you sleep, which can be part of ageing. Fluid that causes ankle swelling in the day can also turn into urine at night when you lie down. Occasionally, it is linked to heart or breathing problems, such as obstructive sleep apnoea.",
        ],
      },
      {
        heading: "Evening drinks and food",
        paragraphs: [
          "Try to reduce the amount you drink and avoid drinking anything for 2 hours before bedtime. Make sure you're still drinking enough fluids earlier in the day.",
          "Cut down on alcohol and caffeine, as they can make you pee more. Eat most of your water-containing food, such as fruit, vegetables, salads, pasta and rice, earlier in the day.",
          "If you wake up needing a drink at night, only have a few sips of water.",
        ],
      },
      {
        heading: "Other things that help",
        paragraphs: [
          "If your ankles are swollen, put your feet up as often as possible during the day, especially in the evening. More exercise, especially walking, helps to push extra fluid back into the circulation.",
          "Wait a few moments after you pee and then try peeing again, to help you empty your bladder. A chart of how much you drink and pee, measured accurately with a measuring jug, helps a doctor work out if you make too much urine at night.",
        ],
      },
      {
        heading: "If it does not get better",
        paragraphs: [
          "If simple measures fail, seek further advice from your GP. Your doctor may prescribe a water tablet taken around six hours before bedtime, so your kidneys get rid of extra water in the evening instead of at night.",
          "If you urinate a lot during the night, your doctor may suggest a desmopressin tablet before bed, which makes the kidneys produce less urine for six to eight hours. You'll have regular blood tests, and it isn't usually an option if you're over 65 or have heart failure.",
        ],
      },
    ],
    helps: [
      "Avoid drinking anything for 2 hours before bedtime, but make sure you drink enough earlier in the day.",
      "Cut down on alcohol and caffeine, as they can make you pee more.",
      "Eat most of your water-containing food earlier in the day.",
      "If your ankles are swollen, put your feet up as often as possible, especially in the evening.",
      "Only have a few sips of water if you wake up needing a drink.",
      "If simple measures fail, seek further advice from your GP.",
    ],
    tryThisWeek: [
      "Stop drinks 2 hours before bed.",
      "Eat watery foods earlier in the day.",
      "Put your feet up in the evening.",
    ],
    ask: "Am I making too much urine at night, and what could be causing it?",
    interactive: {
      kind: "timeline",
      title: "A day planned for better nights",
      steps: [
        { id: "day", when: "Morning and afternoon", title: "Drink well", points: ["Drink enough fluids earlier in the day", "Eat most watery foods, like fruit and salads, earlier"] },
        { id: "evening", when: "Evening", title: "Ease off", points: ["Take in less fluid", "Cut down on alcohol and caffeine", "Put your feet up if your ankles swell"] },
        { id: "two-hours", when: "2 hours before bed", title: "Stop drinking", points: ["Avoid drinking anything"] },
        { id: "bedtime", when: "Bedtime", title: "Empty your bladder", points: ["Wait a few moments after peeing, then try again"] },
        { id: "night", when: "In the night", title: "If you wake", points: ["Only a few sips of water if you're thirsty"] },
      ],
    },
    sources: [PCUK_BPE, BAUS_NOCTURNAL, NHS_TAMS_QS, NHS_BPE, BAUS_LUTS, PCUK_TREAT],
    quiz: {
      question: "How long before bedtime is it best to stop drinking?",
      options: [{ text: "2 hours", right: true }, { text: "10 minutes" }, { text: "From lunchtime" }],
      why: "Try to reduce the amount you drink and avoid drinking anything for 2 hours before bedtime.",
    },
  },
  {
    id: "bph-sex",
    kicker: "Living well",
    question: "How can medicines and surgery affect sex?",
    hook: "Some treatments change ejaculation or erections. Knowing what to expect makes it easier to talk about.",
    short: "Tamsulosin can cause little or no semen when you ejaculate, which is harmless. Finasteride and dutasteride can lower interest in sex and cause erection problems. After TURP, most men have no semen when they ejaculate, but sex still feels the same. A doctor can help if anything bothers you.",
    sections: [
      {
        heading: "Erections and prostate symptoms",
        paragraphs: [
          "Reduced erections and prostate symptoms often go together, so you may be asked about your erections when your symptoms are assessed.",
          "Erectile dysfunction is very common, particularly in men over 40. It can be a side effect of some medicines, or linked to conditions such as high blood pressure, diabetes, depression or anxiety. See a GP or go to a sexual health clinic if erection problems keep happening.",
        ],
      },
      {
        heading: "Alpha blockers",
        paragraphs: [
          "The main side effects of tamsulosin include problems when ejaculating, such as little or no semen. If this happens, you do not need to worry, as this side effect is harmless. Talk to a doctor if it bothers you or does not get any better.",
          "Tell a doctor or pharmacist if you take medicines for erection problems, such as sildenafil or tadalafil, as tamsulosin may make you feel dizzy or light-headed. If you're having problems with your sex life after taking tamsulosin, talk to a doctor.",
        ],
      },
      {
        heading: "Medicines that shrink the prostate",
        paragraphs: [
          "The main side effects of finasteride are losing interest in sex and difficulty getting an erection. They usually improve after a while, but they can sometimes carry on even after you stop taking it. Speak to your doctor if you get these side effects.",
          "These side effects are most common during the first year of treatment, and are more common in men taking both types of medicine together. If there is a chance your partner is pregnant or could become pregnant, use a condom during sex while taking these medicines.",
        ],
      },
      {
        heading: "After surgery",
        paragraphs: [
          "After TURP, between 2 in 3 and 3 in 4 men find no semen is produced when they ejaculate, because it passes back into the bladder. This is called retrograde ejaculation. Sex will still feel the same.",
          "Poor erections after TURP happen in between 1 in 10 and 1 in 50 men who had normal erections before. Your chance of each side effect depends on many things, including the type of surgery, and Rezūm has a low risk of causing sexual problems.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "Treatment can usually help improve erectile dysfunction. The main treatments are medicines that increase the blood flow to your penis, called PDE-5 inhibitors. Your doctor may switch you to a different medicine if one is causing the problem.",
          "Healthy lifestyle changes can sometimes help too, such as losing weight if you're overweight, stopping smoking, eating a healthy diet, exercising and drinking no more than 14 units of alcohol a week.",
        ],
      },
    ],
    helps: [
      "Talk to a doctor if changes in ejaculation bother you or do not get any better.",
      "Tell a doctor or pharmacist if you take medicines for erection problems.",
      "Speak to your doctor if you get erection problems or less interest in sex while taking finasteride.",
      "Use a condom if there's a chance your partner is or could become pregnant while you take finasteride or dutasteride.",
      "Speak to your doctor or nurse about your chances of each side effect with the surgery you're offered.",
      "See a GP or go to a sexual health clinic if erection problems keep happening.",
    ],
    tryThisWeek: [
      "Mention any erection medicines.",
      "Ask about side effects of surgery.",
      "See a GP if problems keep happening.",
    ],
    ask: "How might my treatment affect my sex life, and what can help?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments and sex, card by card",
      intro: "Turn each card to see how each treatment can affect sex.",
      cards: [
        { id: "tamsulosin", front: "Tamsulosin", when: "An alpha blocker", back: "Can cause little or no semen when you ejaculate. Harmless, but talk to a doctor if it bothers you." },
        { id: "finasteride", front: "Finasteride or dutasteride", when: "Medicines that shrink the prostate", back: "Can lower interest in sex and cause erection problems. Speak to your doctor if you get these." },
        { id: "both", front: "Both together", when: "Combination treatment", back: "Sexual side effects are more common than with either medicine on its own." },
        { id: "turp", front: "TURP", when: "The most common operation", back: "Most men have no semen when they ejaculate afterwards, but sex will still feel the same." },
        { id: "rezum", front: "Rezūm", when: "A steam treatment", back: "Has a low risk of causing sexual problems." },
        { id: "pde5", front: "PDE-5 inhibitors", when: "For erection problems", back: "Medicines that increase the blood flow to your penis, such as sildenafil and tadalafil." },
      ],
    },
    sources: [BAUS_PROSTATE, NHS_ED, NHS_TAMS_ABOUT, NHS_TAMS_SIDE, NHS_TAMS_QS, NHS_FIN_ABOUT, NHS_FIN_SIDE, PCUK_TREAT, BAUS_TURP, NHS_TURP],
    quiz: {
      question: "After TURP, how does sex usually feel?",
      options: [{ text: "The same, though often with no semen", right: true }, { text: "It can no longer happen" }, { text: "Always painful" }],
      why: "No semen is produced when they ejaculate, because it passes back into the bladder. Sex will still feel the same.",
    },
  },
  {
    id: "bph-checks",
    kicker: "Living well",
    question: "What regular checks will I have?",
    hook: "Reviews keep treatment working. They are also the time to say what has changed.",
    short: "Depending on your treatment, you may have regular check-ups with your GP or a hospital specialist. They may repeat some tests to see how well treatment is working and ask about side effects. If your symptoms don't improve, or side effects bother you, you may be able to try a different treatment.",
    sections: [
      {
        heading: "Why reviews matter",
        paragraphs: [
          "No treatment is likely to clear all your symptoms completely, but they can be greatly improved. Your symptoms can then be monitored regularly to see whether changes in treatment are needed.",
          "Depending on the treatment you choose, you may have regular check-ups with your GP, or with a specialist at the hospital. They may repeat some tests to see how well your treatment is working.",
        ],
      },
      {
        heading: "On medicines",
        paragraphs: [
          "You'll have regular check-ups to see how well the medicine is working and to talk about any side effects. If you take tamsulosin long term, your doctor may check every few months that you're still having relief from symptoms.",
          "If you're having treatment for a prostate condition, you may be offered regular PSA tests to check how the treatment is working. If you take finasteride or dutasteride, your doctor or nurse will look at your PSA results differently, because these medicines lower PSA. If your PSA level rises, you should be offered further tests to find out why.",
        ],
      },
      {
        heading: "If things change",
        paragraphs: [
          "If your symptoms don't improve or your treatment is causing side effects, you may be able to try a different treatment. If your symptoms get worse, you may need medicines or surgery.",
          "It's important to be checked by a GP if your symptoms change, get worse, or do not feel normal.",
        ],
      },
      {
        heading: "With a catheter",
        paragraphs: [
          "If you have a permanent catheter, your doctor or nurse will usually change it every 12 weeks. Urine infections are common in men who use a catheter.",
          "Your urine should usually be a pale yellow colour. If it becomes dark or cloudy with a strong smell, or you have a fever, a burning feeling or feel unwell, tell your doctor or nurse, as these could be signs of an infection.",
        ],
      },
      {
        heading: "Getting ready for a review",
        paragraphs: [
          "A symptom score and a diary of your drinks and toilet visits help your doctor understand how much your symptoms affect your daily activities. It is important that your GP is aware of all the medicines you are taking.",
          "Before you go, think about how often you've had symptoms over the last month, whether they are getting worse, and how they are affecting your life.",
        ],
      },
    ],
    helps: [
      "Go to your regular check-ups, with your GP or at the hospital.",
      "Tell your doctor or nurse about any side effects you might be getting.",
      "If you take finasteride or dutasteride, always tell your doctor or nurse when you have a PSA test.",
      "If you use a catheter, tell your doctor or nurse if your urine becomes dark or cloudy with a strong smell.",
      "Get checked by a GP if your symptoms change, get worse, or do not feel normal.",
    ],
    tryThisWeek: [
      "Book your next check-up.",
      "Write down any side effects.",
      "Mention finasteride at PSA tests.",
    ],
    ask: "Is my treatment working as well as it should, and is there anything else to try?",
    interactive: {
      kind: "signs",
      title: "What to bring up at your review",
      intro: "Tick anything that applies. It becomes a list to take to your check-up.",
      signs: [
        "Symptoms are no better",
        "Symptoms are getting worse",
        "Getting up more at night",
        "Feeling dizzy when standing up",
        "Changes in ejaculation",
        "Erection problems or less interest in sex",
        "Leaking or dribbling",
        "Dark, cloudy or strong-smelling urine",
        "New medicines started for something else",
      ],
      after: "Blood in your pee, pain when peeing or not being able to pee at all need an urgent GP appointment or help from NHS 111, not a routine review.",
      copyHeading: "To mention at my review",
    },
    sources: [BAUS_PROSTATE, PCUK_TREAT, NHS_BPE, NHS_TAMS_HOW, NHS_PSA, NHS_PC_SYMPTOMS, PCUK_TESTS],
    quiz: {
      question: "If your PSA rises while you take finasteride, what should happen?",
      options: [{ text: "You should be offered further tests", right: true }, { text: "Nothing, it is expected" }, { text: "Stop the medicine yourself" }],
      why: "If your PSA level rises, you should be offered further tests to find out why.",
    },
  },
  {
    id: "bph-daily-life",
    kicker: "Living well",
    question: "How do I manage toilets, travel and everyday life?",
    hook: "A little planning, a toilet card and a spare change of clothes can make days out feel easier.",
    short: "Some men find they need to stay near a toilet, which can make work, driving, being outdoors and social events harder. Going before journeys, drinking less before going out while drinking enough the rest of the day, planning toilet stops and carrying spares can help. A Radar key and a Just Can't Wait card can make toilets easier to reach.",
    sections: [
      {
        heading: "How it can affect your day",
        paragraphs: [
          "Having an enlarged prostate affects everyone in different ways. Some men can manage mild symptoms and don't need treatment. Others find they need to stay near a toilet, which can make it difficult to work, drive, be outdoors and attend social events.",
          "Try not to be embarrassed about seeing a GP. The GP will be used to talking about these symptoms, and treatment and support are available.",
        ],
      },
      {
        heading: "Before you go out",
        paragraphs: [
          "Remember to go to the toilet before long journeys or other situations when you know you may not be able to reach a toilet easily. Reduce how much fluid you drink before going out, but make sure you drink enough during the rest of the day.",
          "Plan your journey ahead of time and find out where toilets will be along the way. On the motorway, check which service stations are on your route, and in towns or cities a toilet finder app can help.",
        ],
      },
      {
        heading: "Toilets you can get into",
        paragraphs: [
          "A Radar key unlocks public accessible toilets across the UK. It can be useful if you have a bladder or bowel condition and need extra space, or have mobility issues.",
          "The Bladder and Bowel Community's Just Can't Wait card helps you discreetly show that you urgently need a toilet while you are out. A digital version is free. It doesn't guarantee access, but it is widely accepted at many cafés, shops, restaurants and other businesses.",
        ],
      },
      {
        heading: "Leaks and dribbling",
        paragraphs: [
          "Products such as pads, pants or sheaths can help with leaks or dribbling pee. Absorbent pads and pants can be worn inside or instead of underwear. A urinary sheath drains urine into a bag you can strap to your leg, under your clothes.",
          "It is worth keeping a change of clothes in a bag or in your car. If you're staying away overnight, a mattress protector may help you feel more confident.",
        ],
      },
      {
        heading: "Longer trips",
        paragraphs: [
          "Order enough supplies for the whole trip, and pack extra supplies and clothes in your hand luggage in case of delays. A Sunflower lanyard can show staff that you have an invisible illness and may need extra help, including at airports in the UK and Europe.",
          "If you travel abroad, declare all your health conditions to your travel insurer, or it may not pay out. During hot weather and air travel you need to drink more, as becoming dehydrated makes urine more concentrated and can inflame the bladder.",
        ],
      },
    ],
    helps: [
      "Go to the toilet before long journeys or places where you may not reach a toilet easily.",
      "Reduce how much fluid you drink before going out, but drink enough during the rest of the day.",
      "Plan your journey and find out where the toilets are along the way.",
      "Get a free digital Just Can't Wait card from the Bladder and Bowel Community.",
      "Keep a change of clothes in a bag or in your car.",
      "Ask your doctor or specialist nurse about absorbent pads or urinary sheaths.",
    ],
    tryThisWeek: [
      "Plan toilet stops for your next trip.",
      "Get a Just Can't Wait card.",
      "Pack a spare change of clothes.",
    ],
    ask: "Can I be referred for help with leaks, pads or other products?",
    interactive: {
      kind: "scenarios",
      title: "Out and about",
      scenarios: [
        {
          id: "drive",
          situation: "You're setting off on a long car journey.",
          options: [{ text: "Go to the toilet first, and plan stops", best: true }, { text: "Have a large drink just before you leave" }],
          why: "Go to the toilet before long journeys, and find out which service stations are on your route.",
        },
        {
          id: "shop",
          situation: "In a shop, you suddenly need a toilet urgently.",
          options: [{ text: "Show staff a Just Can't Wait card", best: true }, { text: "Try to hold on until home" }],
          why: "The Just Can't Wait card helps you discreetly show that you urgently need a toilet while you are out.",
        },
        {
          id: "evening",
          situation: "You're going out for the evening.",
          options: [{ text: "Drink less before going out, but enough earlier", best: true }, { text: "Stop drinking for the whole day" }],
          why: "Reduce how much fluid you drink before going out, but make sure you drink enough during the rest of the day.",
        },
        {
          id: "flight",
          situation: "You're flying abroad.",
          options: [{ text: "Spares in hand luggage, and tell your insurer", best: true }, { text: "Pack everything in the hold" }],
          why: "Pack extra supplies and clothes in hand luggage in case of delays, and declare all your health conditions to your travel insurer.",
        },
      ],
    },
    sources: [PCUK_BPE, NHS_BPE, NHS_TAMS_QS, BBC_TRAVEL, BBC_CARD, PCUK_TREAT, BAUS_LUTS],
    quiz: {
      question: "What does a Radar key do?",
      options: [{ text: "Unlocks public accessible toilets across the UK", right: true }, { text: "Pays for parking" }, { text: "Books a GP appointment" }],
      why: "A Radar key unlocks public accessible toilets across the UK.",
    },
  },
];
