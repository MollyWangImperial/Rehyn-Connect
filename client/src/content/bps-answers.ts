import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Bladder pain syndrome page's pieces
// (content/library-conditions/digestion-more.ts). Every sentence was written from wording checked on
// 22 October 2026 on the pages listed under each answer's `sources`; nothing is added that those pages do
// not say. Most of it comes from the NHS, the British Association of Urological Surgeons (BAUS), Bladder
// Health UK, NICE and GOV.UK. General information only; it never replaces what a person's own GP, urologist,
// nurse or pharmacist tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const baus = (label: string, path: string): LearnSource => ({ label: `BAUS: ${label}`, url: `https://www.baus.org.uk/${path}` });
const nice = (label: string, path: string): LearnSource => ({ label: `NICE: ${label}`, url: `https://www.nice.org.uk/${path}` });
const bhuk = (label: string, path: string): LearnSource => ({ label: `Bladder Health UK: ${label}`, url: `https://bladderhealthuk.org/${path}` });
const gov = (label: string, path: string): LearnSource => ({ label: `GOV.UK: ${label}`, url: `https://www.gov.uk/${path}` });

const NHS_BPS = nhs("Bladder pain syndrome (BPS)", "conditions/bladder-pain-syndrome/");
const NHS_CYSTO_WHY = nhs("Why a cystoscopy is done", "tests-and-treatments/cystoscopy/why-its-done/");
const NHS_CYSTO_HOW = nhs("How a cystoscopy is done", "tests-and-treatments/cystoscopy/how-its-done/");
const NHS_CYSTO_RESULTS = nhs("Cystoscopy results", "tests-and-treatments/cystoscopy/results/");
const NHS_CYSTO_COMP = nhs("Complications of a cystoscopy", "tests-and-treatments/cystoscopy/complications/");
const NHS_AMI_ABOUT = nhs("About amitriptyline for pain and migraine", "medicines/amitriptyline-for-pain/about-amitriptyline-for-pain-and-migraine/");
const NHS_AMI_HOW = nhs("How and when to take amitriptyline for pain and migraine", "medicines/amitriptyline-for-pain/how-and-when-to-take-amitriptyline-for-pain-and-migraine/");
const NHS_AMI_Q = nhs("Common questions about amitriptyline for pain and migraine", "medicines/amitriptyline-for-pain/common-questions-about-amitriptyline-for-pain-and-migraine/");
const NHS_AMI_SIDE = nhs("Side effects of amitriptyline for pain and migraine", "medicines/amitriptyline-for-pain/side-effects-of-amitriptyline-for-pain-and-migraine/");
const NHS_GABA = nhs("About gabapentin", "medicines/gabapentin/about-gabapentin/");
const NHS_PREGAB = nhs("About pregabalin", "medicines/pregabalin/about-pregabalin/");
const NHS_PAIN_10 = nhs("10 ways to reduce pain", "live-well/pain/10-ways-to-ease-pain/");
const NHS_PAIN_HELP = nhs("How to get NHS help for your pain", "live-well/pain/how-to-get-nhs-help-for-your-pain/");
const NHS_PHYSIO = nhs("Physiotherapy", "tests-and-treatments/physiotherapy/");
const NHS_LIBIDO = nhs("Low sex drive (loss of libido)", "symptoms/loss-of-libido/");
const NHS_TALKING = nhs("Find NHS talking therapies for anxiety and depression", "nhs-services/mental-health-services/find-nhs-talking-therapies-for-anxiety-and-depression/");
const NHS_URGENT_MH = nhs("Where to get urgent help for mental health", "nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/");

const BAUS_INSTIL = baus("Instillations for painful bladder conditions (leaflet)", "_userfiles/pages/files/Patients/Leaflets/Painful%20bladder.pdf");
const BAUS_HYDRO = baus("Hydrodistension, stretching of the bladder (leaflet)", "_userfiles/pages/files/patients/leaflets/Hydrodistension.pdf");
const BAUS_DIARY = baus("Input/output chart, or bladder diary (leaflet)", "_userfiles/pages/files/patients/leaflets/Input%20output%20chart.pdf");
const BAUS_TRAINING = baus("Bladder training (leaflet)", "_userfiles/pages/files/patients/leaflets/Bladder%20training.pdf");

const BHUK_IC = bhuk("Interstitial Cystitis", "page/index/285");
const BHUK_DIET = bhuk("IC/BPS Diet", "interstitial-cystitis/icbps-diet");
const BHUK_FAQ = bhuk("IC/BPS FAQ", "interstitial-cystitis/icbps-faq");
const BHUK_TREAT = bhuk("IC/BPS Treatments", "interstitial-cystitis/icbps-treatments");
const BHUK_CARD = bhuk("Priority Access Card", "priority-access-card");

const NICE_TA610 = nice("Pentosan polysulfate sodium for treating bladder pain syndrome: recommendations", "guidance/ta610/chapter/1-Recommendations");
const NICE_TA610_PUBLIC = nice("Pentosan polysulfate sodium for treating bladder pain syndrome: information for the public", "guidance/ta610/informationforpublic");

const GOV_ATW = gov("Access to Work: get support if you have a disability or health condition", "access-to-work");
const GOV_ADJUST = gov("Reasonable adjustments for workers with disabilities or health conditions", "reasonable-adjustments-for-disabled-workers");

const SAMARITANS: LearnSource = { label: "Samaritans: Contact a Samaritan", url: "https://www.samaritans.org/how-we-can-help/contact-samaritan/" };

export const bpsAnswers: LearnArticle[] = [
  {
    id: "bps-what-it-is",
    kicker: "Understanding",
    question: "What is bladder pain syndrome?",
    hook: "Pain and pressure in the bladder, and a constant need to pee, when no infection is found. It has two names, and no single cause.",
    short: "Bladder pain syndrome, or BPS, also known as interstitial cystitis, causes pain in the lower tummy or back and a feeling of needing to pee all the time. It happens when the inner lining of the bladder becomes irritated and inflamed, though it is unclear why. There is currently no cure, but treatments can help manage the symptoms.",
    sections: [
      {
        heading: "Two names, one condition",
        paragraphs: [
          "Bladder pain syndrome, or BPS, is also known as interstitial cystitis. It is a condition that causes pain in your lower tummy or back and makes you feel like you want to pee all the time.",
          "Bladder Health UK describes it as a chronic inflammation of the bladder wall. It may look like a bacterial bladder infection, but short-term antibiotics are not effective.",
        ],
      },
      {
        heading: "What is happening in the bladder",
        paragraphs: [
          "The symptoms are caused by the inner lining of the bladder, the bladder wall, becoming irritated and inflamed. But it is unclear why this happens in some people.",
          "It is thought it may be caused by your immune system mistakenly attacking your bladder wall, or by a problem with the bladder wall that makes it easily irritated by substances in your pee. Bladder Health UK explains that the bladder wall is normally protected from urine by a layer known as GAGs, and that in this condition the layer becomes thin and defective.",
        ],
      },
      {
        heading: "Who gets it",
        paragraphs: [
          "BPS is more common in women than men and usually affects people aged 40 or above.",
          "You are more likely to get BPS if you already have another long-term pain condition, like fibromyalgia.",
        ],
      },
      {
        heading: "Living with it",
        paragraphs: [
          "There is currently no cure for BPS, but there are treatments that can help manage your symptoms, such as pain. Your doctor will talk to you about the different options and what might work best for you.",
          "NICE says bladder pain syndrome causes extreme pain and severely affects quality of life. Bladder Health UK says it is important to get support from your GP and urologist, and to work together at finding the correct treatment for your symptoms.",
        ],
      },
    ],
    helps: [
      "See a GP if you have pain in your bladder, lower tummy or back that does not go away or keeps coming back.",
      "See a GP if you are peeing much more than you usually do.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you have blood in your pee.",
      "Work with your GP and urologist to find the correct treatment for your symptoms.",
      "Call Bladder Health UK's confidential helpline on 0121 702 0820 for support.",
    ],
    tryThisWeek: [
      "See a GP about pain that keeps coming back.",
      "Get urgent help for blood in your pee.",
      "Call the Bladder Health UK helpline.",
    ],
    ask: "Have other causes, including infection, been ruled out?",
    interactive: {
      kind: "flip-cards",
      title: "The words you may hear",
      intro: "Turn each card to see what it means.",
      cards: [
        { id: "bps", front: "Bladder pain syndrome", when: "The name the NHS uses", back: "A condition that causes pain in your lower tummy or back and makes you feel like you want to pee all the time." },
        { id: "ic", front: "Interstitial cystitis", when: "Another name for it", back: "Bladder Health UK describes it as a chronic inflammation of the bladder wall. Short-term antibiotics are not effective." },
        { id: "lining", front: "The bladder lining", when: "Where the symptoms start", back: "The inner lining of the bladder becomes irritated and inflamed. It is unclear why this happens in some people." },
        { id: "flare", front: "A flare-up", when: "When symptoms get worse", back: "Symptoms can come and go. There are usually times when they get worse, and times when they are better." },
      ],
    },
    sources: [NHS_BPS, BHUK_IC, NICE_TA610, BHUK_TREAT],
    quiz: {
      question: "What is another name for bladder pain syndrome?",
      options: [{ text: "Interstitial cystitis", right: true }, { text: "Kidney stones" }, { text: "Overactive kidney" }],
      why: "Bladder pain syndrome, or BPS, is also known as interstitial cystitis.",
    },
  },
  {
    id: "bps-symptoms",
    kicker: "Symptoms",
    question: "What are the symptoms, and what is a flare-up?",
    hook: "Pain, pressure and needing to pee again and again, even when the bladder is nearly empty. It often comes and goes.",
    short: "Symptoms include pain in the bladder, lower tummy or back, feeling like you need to pee even when your bladder is empty, peeing often in small amounts, and waking at night to pee. Sex can be painful. Symptoms come and go, with flare-ups when they get worse.",
    sections: [
      {
        heading: "The main symptoms",
        paragraphs: [
          "Symptoms include bladder pain or pain in your lower tummy or back, and feeling like you need to pee, even when your bladder is empty. You may pee often, usually just small amounts, during the day, and wake up at night to pee.",
          "Some people leak a small amount of pee if they do not get to a toilet quickly enough. You may also feel discomfort when your bladder fills up after drinking, and get some relief when you pee.",
        ],
      },
      {
        heading: "Pain in other places",
        paragraphs: [
          "Bladder Health UK says the pain can be in the abdominal, urethral or vaginal area. Urgency, the feeling of having to pee immediately, may come with pain, pressure or spasms.",
          "Pain during sex is also a symptom. Women can find penetration painful, and men can find getting an erection painful.",
        ],
      },
      {
        heading: "Flare-ups",
        paragraphs: [
          "Symptoms of BPS can come and go over time. There are usually times when your symptoms get worse, called flare-ups, and times when they are better.",
          "Bladder Health UK notes that severe tiredness can also happen if you have to get up again and again during the night.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "See a GP if you have pain in your bladder, lower tummy or back that does not go away or keeps coming back, or if you are peeing much more than you usually do.",
          "Ask for an urgent GP appointment or get help from NHS 111 if you have blood in your pee, which may be bright pink, red or dark brown. Do the same if you have bladder, lower tummy or back pain and a very high temperature, or you feel very hot, or cold and shivery, as these could be signs of an infection.",
        ],
      },
    ],
    helps: [
      "Ask for an urgent GP appointment or get help from NHS 111 if you have blood in your pee.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you have bladder, lower tummy or back pain with a very high temperature, or feel very hot, or cold and shivery.",
      "You can call 111 or get help from 111 online.",
      "See a GP if you are peeing much more than you usually do.",
      "Keep a food diary to track what you eat and drink, as certain foods and drinks may make your symptoms worse.",
    ],
    tryThisWeek: [
      "Get urgent help for blood in your pee.",
      "Get urgent help for pain with a fever.",
      "Start a food and drink diary.",
    ],
    ask: "What should I do during a flare-up?",
    interactive: {
      kind: "signs",
      title: "Symptoms to mention",
      intro: "Tick any you have noticed. They become a list to show your GP, nurse or urologist.",
      signs: [
        "Bladder, lower tummy or back pain",
        "Needing to pee with an empty bladder",
        "Peeing often, in small amounts",
        "Waking up at night to pee",
        "Leaking before reaching a toilet",
        "Discomfort as the bladder fills",
        "Some relief after peeing",
        "Pain during sex",
        "Severe tiredness from night trips",
        "Symptoms that come and go in flare-ups",
      ],
      after: "If you have blood in your pee, or pain with a very high temperature, ask for an urgent GP appointment or get help from NHS 111.",
      copyHeading: "Bladder symptoms I have noticed",
    },
    sources: [NHS_BPS, BHUK_IC],
    quiz: {
      question: "What is a flare-up?",
      options: [{ text: "A time when symptoms get worse", right: true }, { text: "A kind of bladder test" }, { text: "A medicine for pain" }],
      why: "There are usually times when your symptoms get worse, called flare-ups, and times when they are better.",
    },
  },
  {
    id: "bps-diagnosis",
    kicker: "Tests",
    question: "How is bladder pain syndrome diagnosed?",
    hook: "There is no single test. Instead, doctors rule out the things that can look like it, and that can take time.",
    short: "No single test can diagnose bladder pain syndrome, so several tests are used to check for other causes, such as a urine infection. They may include a pee test, a blood test, a pelvic examination, an ultrasound scan, a cystoscopy to look inside the bladder, and a bladder diary.",
    sections: [
      {
        heading: "No single test",
        paragraphs: [
          "There is no single test that can diagnose bladder pain syndrome. You might need several tests to check for other conditions that could be causing your symptoms, such as a urinary tract infection.",
          "Bladder Health UK says it can take time to get a correct diagnosis, as the symptoms can be similar to other conditions, such as overactive bladder, bacterial cystitis or a chronic urine infection.",
        ],
      },
      {
        heading: "Tests you may have",
        paragraphs: [
          "Tests may include a blood test, a pee test and a physical examination of your pelvis and genitals, which may include an internal vaginal exam. You may also have an ultrasound scan of your tummy.",
          "Some people have the pressure inside the bladder measured using a thin tube called a catheter. You may also have a cystoscopy, to look inside your bladder using a thin tube with a camera inside it.",
        ],
      },
      {
        heading: "Having a cystoscopy",
        paragraphs: [
          "A cystoscopy can be used to check what is causing bladder symptoms, including pain in the lower part of your tummy that does not go away. Before it, you may be asked for a urine sample, and if you have an infection, the cystoscopy may need to be rescheduled.",
          "A flexible cystoscopy uses a local anaesthetic gel and usually takes around 10 to 15 minutes. A rigid cystoscopy is done under a general anaesthetic or a spinal anaesthetic, and usually takes around 30 minutes.",
        ],
      },
      {
        heading: "Afterwards",
        paragraphs: [
          "You may have a small amount of blood in your pee for a few days, and it may hurt when you pee. These symptoms should pass in a few days, and paracetamol or ibuprofen can help with any pain.",
          "If a sample of cells was taken for testing, it usually takes 1 to 2 weeks to get the results. Call 999 or go to A&E if you cannot pee and your tummy is swollen and painful.",
        ],
      },
      {
        heading: "A bladder diary",
        paragraphs: [
          "You may be asked to keep an input and output chart, also called a bladder diary. It records how much you drink, how much pee you pass and how often, over three consecutive normal days.",
          "BAUS asks you to note the type of each drink too, because this can help identify any triggers for your symptoms.",
        ],
      },
    ],
    helps: [
      "Give a urine sample before a cystoscopy if asked, so any infection can be found first.",
      "Use a plastic measuring jug that holds at least 500ml to measure your pee for a bladder diary.",
      "Record every drink, day and night, and the type of drink, in your bladder diary.",
      "Bring the completed chart with you to your next clinic appointment.",
      "Speak to a GP if blood in your pee or pain when peeing does not go away a few days after a cystoscopy.",
      "Call 999 or go to A&E if you cannot pee and your tummy is swollen and painful.",
    ],
    tryThisWeek: [
      "Get a measuring jug for your diary.",
      "Write down every drink and its type.",
      "Take the chart to your appointment.",
    ],
    ask: "Which tests do I need, and what are you checking for?",
    interactive: {
      kind: "flip-cards",
      title: "Tests you may be offered",
      intro: "Turn each card to see what the test does.",
      cards: [
        { id: "pee", front: "A pee test", when: "Usually first", back: "Checks for other conditions that could be causing your symptoms, such as a urinary tract infection." },
        { id: "blood", front: "A blood test", when: "To rule out other causes", back: "One of several tests used, because there is no single test that can diagnose BPS." },
        { id: "exam", front: "A pelvic examination", when: "At a clinic", back: "A physical examination of your pelvis and genitals, which may include an internal vaginal exam." },
        { id: "scan", front: "An ultrasound scan", when: "To look at the tummy", back: "An ultrasound scan of your tummy, to check for other causes." },
        { id: "cysto", front: "A cystoscopy", when: "To look inside the bladder", back: "A thin tube with a camera inside it. A flexible one usually takes around 10 to 15 minutes." },
        { id: "pressure", front: "A bladder pressure test", when: "Sometimes", back: "Measures the pressure inside your bladder using a thin tube, a catheter." },
        { id: "diary", front: "A bladder diary", when: "Over three normal days", back: "Records what you drink, how much pee you pass and how often. It can help identify triggers." },
      ],
    },
    sources: [NHS_BPS, BHUK_IC, NHS_CYSTO_WHY, NHS_CYSTO_HOW, NHS_CYSTO_RESULTS, NHS_CYSTO_COMP, BAUS_DIARY],
    quiz: {
      question: "Is there one test that can diagnose bladder pain syndrome?",
      options: [{ text: "No, several tests rule out other causes", right: true }, { text: "Yes, a single blood test" }, { text: "Yes, a single urine test" }],
      why: "There is no single test that can diagnose bladder pain syndrome. You might need several tests to check for other conditions that could be causing your symptoms.",
    },
  },
  {
    id: "bps-triggers",
    kicker: "Causes",
    question: "What can set off my symptoms?",
    hook: "Coffee, alcohol, spicy or acidic food, sometimes clothing or stress. But what bothers one person may not bother the next.",
    short: "Certain foods and drinks may make symptoms worse, especially spicy or acidic food, alcohol and caffeine. Some people find clothing or stress makes things worse too. Everyone is different, so a food diary can help track what affects you.",
    sections: [
      {
        heading: "Food and drink",
        paragraphs: [
          "Certain foods and drinks may make your symptoms worse, such as making you pee more. The NHS suggests not eating too much spicy food or acidic food, like citrus fruits, and not having too much alcohol or caffeinated drinks, such as energy drinks, tea or coffee.",
          "Bladder Health UK lists foods and drinks that its members widely agree on. These include alcohol, caffeinated tea and coffee, fizzy drinks, acidic fruit juices, spicy foods, chocolate, berry fruits, tomatoes and onions.",
        ],
      },
      {
        heading: "Everyone is different",
        paragraphs: [
          "Bladder Health UK says there are no hard and fast rules. Some people can have a small amount of a food that bothers them but have a flare if they have more, while for others one mouthful can make symptoms much worse.",
          "Others find their diet does not seem to affect their symptoms at all. It is not fully understood why people respond so differently.",
        ],
      },
      {
        heading: "Clothing and stress",
        paragraphs: [
          "Bladder Health UK says a large number of people find that certain foods or drinks, and even clothing, can make the condition worse.",
          "In the charity's questions and answers, a consultant urologist explains that many people need to pee more often at times of stress. Because the bladder lining is extra sensitive in this condition, that urgency can be more noticeable.",
        ],
      },
      {
        heading: "Finding your own triggers",
        paragraphs: [
          "The NHS suggests keeping a food diary to track what you eat and drink, as certain foods and drinks may make your symptoms worse.",
          "BAUS lists avoiding trigger factors, such as certain foods or liquids, alongside relaxation techniques, physiotherapy and low-impact exercise such as yoga, as conservative ways of managing bladder pain.",
        ],
      },
      {
        heading: "Other conditions",
        paragraphs: [
          "You are more likely to get BPS if you already have another long-term pain condition, like fibromyalgia. Bladder Health UK's questions and answers note that many people with the condition also have irritable bowel syndrome, vulvodynia, fibromyalgia or allergies.",
        ],
      },
    ],
    helps: [
      "Keep a food diary to track what you eat and drink.",
      "Do not eat too much spicy food or acidic food, like citrus fruits.",
      "Do not have too much alcohol or caffeinated drinks, such as energy drinks, tea or coffee.",
      "Try decaffeinated tea or coffee, which some people may tolerate.",
      "Try relaxation techniques such as meditation.",
    ],
    tryThisWeek: [
      "Keep a food and drink diary.",
      "Cut back on caffeine and alcohol.",
      "Try a relaxation technique.",
    ],
    ask: "Could anything I eat, drink or do be making my symptoms worse?",
    interactive: {
      kind: "risk-check",
      title: "What might set off your symptoms?",
      intro: "Tick any that seem to affect you. A food diary can help you check.",
      items: [
        { id: "caffeine", label: "Tea, coffee or energy drinks", note: "The NHS suggests not having too much caffeine. Bladder Health UK says decaffeinated may be tolerated.", changeable: true },
        { id: "alcohol", label: "Alcohol", note: "The NHS suggests not having too much alcohol.", changeable: true },
        { id: "fizzy", label: "Fizzy drinks", note: "One of the drinks Bladder Health UK's members widely agree on.", changeable: true },
        { id: "acidic", label: "Citrus fruits or acidic juices", note: "The NHS suggests not eating too much acidic food, like citrus fruits.", changeable: true },
        { id: "spicy", label: "Spicy food", note: "The NHS suggests not eating too much spicy food.", changeable: true },
        { id: "other-food", label: "Chocolate, berries, tomatoes or onions", note: "On Bladder Health UK's list, though everyone is different.", changeable: true },
        { id: "clothing", label: "Certain clothing", note: "Bladder Health UK says even clothing can make the condition worse for some people.", changeable: true },
        { id: "stress", label: "Stress", note: "Relaxation techniques such as meditation may help with some symptoms.", changeable: true },
        { id: "pain-condition", label: "Another long-term pain condition", note: "You are more likely to get BPS if you already have one, like fibromyalgia.", changeable: false },
      ],
    },
    sources: [NHS_BPS, BHUK_DIET, BHUK_IC, BHUK_FAQ, BAUS_INSTIL],
    quiz: {
      question: "Do the same foods set off symptoms in everyone?",
      options: [{ text: "No, everyone is different", right: true }, { text: "Yes, always the same foods" }, { text: "Food never matters" }],
      why: "Bladder Health UK says there are no hard and fast rules. Others find their diet does not seem to affect their symptoms at all.",
    },
  },
  {
    id: "bps-self-care",
    kicker: "Self-care",
    question: "What can I do myself, and how do food and bladder diaries help?",
    hook: "A diary, gentle exercise and a way to relax. Small things that help you see a pattern and ease some symptoms.",
    short: "The NHS suggests keeping a food diary, taking regular low-impact exercise such as walking, swimming or yoga, and trying relaxation techniques. A bladder diary over three normal days records what you drink and how much you pee, and can help identify triggers.",
    sections: [
      {
        heading: "Things that can help",
        paragraphs: [
          "There are things you can do to manage the symptoms of bladder pain syndrome. The NHS suggests keeping a food diary, taking regular low-impact exercise, and trying relaxation techniques.",
          "Bladder Health UK says lifestyle changes such as relaxation, diet, exercise, clothing and planned travel can all help you live positively with the condition.",
        ],
      },
      {
        heading: "A food diary",
        paragraphs: [
          "A food diary tracks what you eat and drink, as certain foods and drinks may make your symptoms worse, such as making you pee more.",
          "A bladder diary, or input and output chart, records how much you drink, the type of drink, how much pee you pass and how often. BAUS says noting the type of drink can help identify any triggers for your symptoms.",
        ],
      },
      {
        heading: "Keeping a bladder diary",
        paragraphs: [
          "BAUS asks you to fill it in as accurately as possible over three consecutive normal days, including work or rest days. You will need a plastic measuring jug that ideally holds at least 500ml.",
          "Mark when you get up and when you go to bed, which shows how many times you get up at night to pee. Bring the completed chart to your next clinic appointment.",
        ],
      },
      {
        heading: "Gentle exercise and relaxation",
        paragraphs: [
          "Regular low-impact exercise, like walking, swimming or yoga, and relaxation techniques such as meditation may help with some symptoms.",
          "When pain is intense, it is easy to start taking shallow, rapid breaths. The NHS suggests breathing slowly and deeply instead, to help you feel more in control and stay relaxed.",
        ],
      },
      {
        heading: "Bladder retraining",
        paragraphs: [
          "The NHS lists bladder retraining exercises among the treatment and support that can help. In its leaflet on overactive bladder, BAUS describes bladder training as a way of teaching the bladder to hold more urine, often supervised by a trained healthcare professional.",
        ],
      },
    ],
    helps: [
      "Keep a food diary to track what you eat and drink.",
      "Fill in a bladder diary over three consecutive normal days, recording every drink and every time you pee.",
      "Take regular low-impact exercise, like walking, swimming or yoga.",
      "Try relaxation techniques such as meditation.",
      "Breathe slowly and deeply when pain is intense.",
      "Bladder retraining exercises can help, and are often supervised by a trained healthcare professional.",
    ],
    tryThisWeek: [
      "Start a food diary.",
      "Go for a walk or a swim.",
      "Practise slow, deep breathing.",
    ],
    ask: "Should I keep a bladder diary, and could bladder retraining help me?",
    interactive: {
      kind: "scenarios",
      title: "Everyday self-care",
      scenarios: [
        {
          id: "coffee",
          situation: "You think coffee might be making things worse.",
          options: [{ text: "Note it in your food diary", best: true }, { text: "Ignore it and carry on" }],
          why: "Keep a food diary to track what you eat and drink, as certain foods and drinks may make your symptoms worse.",
        },
        {
          id: "diary",
          situation: "Your clinic asks you for a bladder diary.",
          options: [{ text: "Fill it in over three normal days", best: true }, { text: "Guess the amounts from memory" }],
          why: "BAUS asks you to fill it in as accurately as possible over three consecutive normal days, measuring with a jug.",
        },
        {
          id: "breathing",
          situation: "Pain is intense and your breathing is fast and shallow.",
          options: [{ text: "Breathe slowly and deeply", best: true }, { text: "Hold your breath" }],
          why: "The NHS suggests breathing slowly and deeply, to help you feel more in control and stay relaxed.",
        },
        {
          id: "exercise",
          situation: "You want to be more active, but worry about pain.",
          options: [{ text: "Try walking, swimming or yoga", best: true }, { text: "Avoid all activity" }],
          why: "Regular low-impact exercise, like walking, swimming or yoga, may help with some symptoms.",
        },
      ],
    },
    sources: [NHS_BPS, BAUS_DIARY, BHUK_IC, NHS_PAIN_10, BAUS_TRAINING],
    quiz: {
      question: "Over how many days does BAUS ask you to fill in a bladder diary?",
      options: [{ text: "Three consecutive normal days", right: true }, { text: "One afternoon" }, { text: "A whole month" }],
      why: "BAUS asks you to fill it in as accurately as possible over three consecutive normal days, including work or rest days.",
    },
  },
  {
    id: "bps-medicines",
    kicker: "Treatment",
    question: "Which medicines can help bladder pain?",
    hook: "Everyday painkillers, low-dose nerve pain medicines, and tablets that calm the need to pee. Some take weeks to work.",
    short: "Medicines that can help include paracetamol and ibuprofen, nerve pain medicines like amitriptyline, gabapentin or pregabalin, and medicines that make you pee less, like oxybutynin. If these do not work, a hospital specialist may offer pentosan polysulfate sodium. Amitriptyline can take 6 weeks to work, and should not be stopped suddenly.",
    sections: [
      {
        heading: "Medicines that can help",
        paragraphs: [
          "Medicines that can help the symptoms of BPS include everyday painkillers like paracetamol and ibuprofen, painkillers for nerve pain like amitriptyline, gabapentin or pregabalin, and medicines that make you pee less, like oxybutynin.",
          "Your doctor will talk to you about the different options and what might work best for you.",
        ],
      },
      {
        heading: "Amitriptyline",
        paragraphs: [
          "Amitriptyline is used to treat nerve pain and pain that lasts a long time. The doses used for pain are lower than the doses for depression, and taking it for pain will not have the same effect as taking it for depression.",
          "It is best taken in the evening or before bed, as it can make you sleepy. The usual starting dose for adults is 10mg a day, and the maximum dose for treating pain is 75mg a day.",
          "You may sleep better straight away, but it usually takes 1 or 2 weeks for pain to begin to wear off, and 4 to 6 weeks to feel the full benefit. Allow at least 6 weeks to see if it works for you.",
        ],
      },
      {
        heading: "Gabapentin and pregabalin",
        paragraphs: [
          "Gabapentin and pregabalin are also taken for nerve pain. They are thought to block pain by affecting the pain messages travelling through the brain and down the spine, and it takes at least a few weeks for them to work.",
          "Some people can become addicted to them. When stopping either medicine, the dose needs to be reduced gradually to avoid withdrawal symptoms.",
        ],
      },
      {
        heading: "Pentosan polysulfate sodium",
        paragraphs: [
          "If other treatments have not worked, you may be offered a medicine called pentosan polysulfate sodium to protect your bladder from irritation.",
          "NICE says it is available on the NHS for some adults with bladder pain syndrome who have urinary urgency and frequency and moderate to severe pain, if the condition has not responded to standard oral treatments. It is used in secondary care.",
        ],
      },
      {
        heading: "Side effects and stopping",
        paragraphs: [
          "Common side effects of amitriptyline include constipation, feeling dizzy, a dry mouth, feeling sleepy and difficulty peeing. Talk to your doctor urgently if you cannot pee at all.",
          "Do not stop taking amitriptyline suddenly without talking to your doctor. You may get flu-like symptoms, so your doctor will probably recommend reducing the dose gradually over several weeks.",
        ],
      },
    ],
    helps: [
      "Take amitriptyline in the evening or before you go to bed, as it can make you sleepy.",
      "Allow at least 6 weeks to see if amitriptyline works for you.",
      "Do not stop taking amitriptyline suddenly without talking to your doctor.",
      "Do not drive, cycle or operate heavy machinery if amitriptyline makes you feel sleepy.",
      "Talk to your doctor urgently if you cannot pee at all.",
      "Contact 111 for advice now if you take more than your prescribed dose of amitriptyline.",
    ],
    tryThisWeek: [
      "Take amitriptyline in the evening.",
      "Give it at least 6 weeks.",
      "Never stop it suddenly.",
    ],
    ask: "Which medicine might suit my symptoms, and what side effects should I look out for?",
    interactive: {
      kind: "flip-cards",
      title: "Medicines you may hear about",
      intro: "Turn each card to see what it is for.",
      cards: [
        { id: "everyday", front: "Paracetamol and ibuprofen", when: "Everyday painkillers", back: "Among the medicines the NHS lists that can help the symptoms of BPS." },
        { id: "amitriptyline", front: "Amitriptyline", when: "For nerve pain", back: "A low dose taken in the evening. It can take 6 weeks to work as a painkiller." },
        { id: "gaba-pregab", front: "Gabapentin or pregabalin", when: "For nerve pain", back: "Thought to block pain messages travelling through the brain and down the spine. They take a few weeks to work." },
        { id: "oxybutynin", front: "Oxybutynin", when: "To make you pee less", back: "A medicine the NHS lists for making you need to pee less often." },
        { id: "pentosan", front: "Pentosan polysulfate sodium", when: "If other treatments have not worked", back: "Helps protect the bladder from irritation. NICE says it is used in secondary care, for some adults." },
      ],
    },
    sources: [NHS_BPS, NHS_AMI_ABOUT, NHS_AMI_HOW, NHS_AMI_Q, NHS_AMI_SIDE, NHS_GABA, NHS_PREGAB, NICE_TA610_PUBLIC],
    quiz: {
      question: "How long does the NHS say to allow to see if amitriptyline works for pain?",
      options: [{ text: "At least 6 weeks", right: true }, { text: "One day" }, { text: "One year" }],
      why: "It usually takes 1 or 2 weeks for pain to begin to wear off, and 4 to 6 weeks to feel the full benefit. Allow at least 6 weeks to see if it works for you.",
    },
  },
  {
    id: "bps-bladder-treatments",
    kicker: "Treatment",
    question: "What are treatments into the bladder?",
    hook: "Medicine put straight into the bladder through a soft tube, or a gentle stretch under anaesthetic. Here is what each involves.",
    short: "If other treatments have not worked, medicine can be put into the bladder through a thin tube, a catheter, to numb it or reduce the need to pee. These instillations usually come as a course, one to four weeks apart. Hydrodistension, stretching the bladder under anaesthetic, is another option, though relief may only be temporary.",
    sections: [
      {
        heading: "Medicine straight into the bladder",
        paragraphs: [
          "If other treatments have not worked, you may be offered medicine given through a thin tube, a catheter, to numb your bladder or reduce your need to pee. NICE notes that bladder pain syndrome is managed with oral treatments first, then bladder instillations if symptoms do not improve.",
          "BAUS explains that a bladder instillation puts a liquid medication into the bladder to treat severe bladder pain. Most contain chondroitin sulphate, sodium hyaluronate or both, chemicals found naturally on the lining of the bladder that form part of its barrier to toxic substances in urine.",
        ],
      },
      {
        heading: "On the day",
        paragraphs: [
          "You are asked to limit how much you drink for four hours before each treatment. On arrival, your urine is tested for infection, and treatment may be postponed while you take a course of antibiotics.",
          "A soft catheter is passed into the bladder, the medication is put in slowly in about 50ml of fluid, and the catheter is removed. You are asked to try not to pee for at least 15 minutes and, if possible, for 90 minutes, so the medication can treat the whole bladder lining.",
        ],
      },
      {
        heading: "A course of treatments",
        paragraphs: [
          "Several treatments are usually needed, at intervals of one to four weeks, sometimes followed by maintenance treatments. The number depends on how well your bladder responds to the first few.",
          "The commonest side effects are bladder pain and urinary infection. BAUS says burning and stinging, or needing to pee often and urgently, over the first few days affect between 1 in 2 and 1 in 10 people, and the same share find the treatment has no effect.",
        ],
      },
      {
        heading: "Stretching the bladder",
        paragraphs: [
          "Hydrodistension gently stretches the bladder by filling it with fluid, under a general or spinal anaesthetic, to make it less sensitive. A small biopsy is sometimes taken, and you should expect to go home the same day.",
          "BAUS says it may only give temporary relief and, for some people, no relief at all. Almost everyone has mild burning when peeing and a short-term worsening of symptoms afterwards.",
        ],
      },
      {
        heading: "Surgery",
        paragraphs: [
          "Surgery is not common for BPS, but it may be recommended if other treatments have not helped. Options include injecting the bladder with botox to numb it, and a small device under the skin in the lower back that sends signals to the nerves controlling the bladder, called sacral nerve stimulation.",
          "Another option is expanding the bladder using tissue from elsewhere in the body.",
        ],
      },
    ],
    helps: [
      "Limit how much you drink for four hours before each instillation.",
      "If you take water tablets, do not take them on the morning of your instillation appointment.",
      "Try not to pee for at least 15 minutes after an instillation, and for 90 minutes if possible.",
      "Drink twice as much fluid as normal over the 24 hours after an instillation.",
      "Contact your GP if you think you have a urine infection, or develop a high temperature with backache, after an instillation.",
      "After hydrodistension, contact your GP immediately if you develop a fever, severe pain when peeing, cannot pee or have worsening bleeding.",
    ],
    tryThisWeek: [
      "Drink less for 4 hours beforehand.",
      "Hold your pee for 15 to 90 minutes.",
      "Drink double for the next 24 hours.",
    ],
    ask: "Would bladder instillations or hydrodistension be worth trying for me?",
    interactive: {
      kind: "timeline",
      title: "An instillation, step by step",
      steps: [
        { id: "before", when: "4 hours before", title: "Getting ready", points: ["Limit how much you drink.", "Skip water tablets that morning, if you take them."] },
        { id: "arrive", when: "On arrival", title: "A urine test", points: ["Your urine is tested for infection.", "Treatment may be postponed for antibiotics."] },
        { id: "treatment", when: "The treatment", title: "Medicine into the bladder", points: ["A soft catheter is passed into the bladder.", "About 50ml of fluid goes in slowly."] },
        { id: "hold", when: "Afterwards", title: "Hold on if you can", points: ["Try not to pee for at least 15 minutes.", "Ninety minutes if possible."] },
        { id: "day", when: "Next 24 hours", title: "Drink more", points: ["Drink twice as much fluid as normal.", "Contact your GP if you think you have an infection."] },
        { id: "course", when: "Every 1 to 4 weeks", title: "The next treatment", points: ["Several treatments are usually needed.", "Sometimes followed by maintenance treatments."] },
      ],
    },
    sources: [NHS_BPS, BAUS_INSTIL, BAUS_HYDRO, NICE_TA610],
    quiz: {
      question: "After an instillation, how long does BAUS ask you to try not to pee?",
      options: [{ text: "At least 15 minutes, ideally 90", right: true }, { text: "No time at all" }, { text: "A whole day" }],
      why: "You are asked to try not to pee for at least 15 minutes and, if possible, for 90 minutes, so the medication can treat the whole bladder lining.",
    },
  },
  {
    id: "bps-pain-support",
    kicker: "Support",
    question: "Can a pain clinic or physiotherapy help?",
    hook: "Long-lasting pain is more than a bladder problem. Pain clinics and physiotherapists help you build skills to manage it.",
    short: "As well as medicines, help with long-term pain, physiotherapy to strengthen the pelvic floor and bladder retraining can help. If you are struggling to manage pain, you can ask a GP for a referral to a specialist pain clinic, which may offer a pain management programme.",
    sections: [
      {
        heading: "More than medicines",
        paragraphs: [
          "Other treatment and support can help with the symptoms and problems caused by BPS. This may include physiotherapy to strengthen your pelvic floor muscles, bladder retraining exercises, help with managing long-term pain, and mental health support.",
          "If treatment is not working or your symptoms are severe, you may be referred to a urologist, a specialist in treating bladder conditions.",
        ],
      },
      {
        heading: "Pain clinics",
        paragraphs: [
          "If you have been struggling with pain for more than 12 weeks, there are many services that can help, and your first stop should be a GP. If you are having difficulty managing your pain, ask the GP for a referral to a specialist pain clinic.",
          "Pain clinics aim to support you in developing self-help skills to control and relieve your pain. Treatments may include medicine, pain-relief injections, manual therapy, exercise, complementary therapy and psychological therapy.",
        ],
      },
      {
        heading: "Pain management programmes",
        paragraphs: [
          "Some people at a pain clinic are offered a pain management programme. Its aim is to improve your quality of life despite your pain, rather than to reduce the pain.",
          "Programmes are usually a series of group sessions, and may include gentle exercise, relaxation and mindfulness, managing emotions linked to long-term pain, and learning to pace yourself to avoid pain flare-ups.",
        ],
      },
      {
        heading: "Physiotherapy",
        paragraphs: [
          "Physiotherapy uses exercise, massage and other techniques, and is used for a wide range of problems, including pelvic pain and leaking pee during or after pregnancy. BAUS lists physiotherapy among the conservative ways of managing bladder pain.",
          "You can get physiotherapy free on the NHS, but there may be a long waiting list. Treatment may include exercises, manual therapy, advice on managing your symptoms and TENS, where a device sends a weak electrical current to your nerves to relieve pain.",
        ],
      },
    ],
    helps: [
      "Ask the GP for a referral to a specialist pain clinic if you are having difficulty managing your pain.",
      "Physiotherapy to strengthen your pelvic floor muscles can help.",
      "Do the exercises a physiotherapist gives you regularly between sessions.",
      "Pace your activities every day to help avoid pain flare-ups.",
      "Look into a self-management course, such as a pain management programme.",
    ],
    tryThisWeek: [
      "Ask about a pain clinic referral.",
      "Do your physio exercises regularly.",
      "Pace your activities each day.",
    ],
    ask: "Can I be referred to a specialist or a pain clinic?",
    interactive: {
      kind: "timeline",
      title: "Routes to more support",
      steps: [
        { id: "gp", when: "First", title: "Your GP", points: ["Discuss your pain in all its forms.", "Ask about a pain clinic if pain is hard to manage."] },
        { id: "urologist", when: "If treatment is not working", title: "A urologist", points: ["A specialist in treating bladder conditions.", "For severe symptoms too."] },
        { id: "physio", when: "Alongside", title: "Physiotherapy", points: ["To strengthen the pelvic floor muscles.", "Exercises to do at home between sessions."] },
        { id: "clinic", when: "When pain is hard to manage", title: "A pain clinic", points: ["Helps build self-help skills.", "May include medicine, injections or psychological therapy."] },
        { id: "pmp", when: "Sometimes", title: "A pain management programme", points: ["Group sessions with other people.", "Aims to improve quality of life despite pain."] },
      ],
    },
    sources: [NHS_BPS, NHS_PAIN_HELP, NHS_PHYSIO, BAUS_INSTIL, NHS_PAIN_10],
    quiz: {
      question: "What is the main aim of a pain management programme?",
      options: [{ text: "Better quality of life despite pain", right: true }, { text: "Removing the bladder" }, { text: "Stopping all medicines" }],
      why: "Its aim is to improve your quality of life despite your pain, rather than to reduce the pain.",
    },
  },
  {
    id: "bps-flares",
    kicker: "Living well",
    question: "How can I get through a flare-up?",
    hook: "Bad days come and go. A few steady habits can make them easier, and it helps to know when it is more than a flare.",
    short: "Symptoms come and go, with flare-ups when they get worse. Slow, deep breathing, relaxation, distraction, pacing and a regular sleep routine can help with pain. Blood in your pee, or pain with a very high temperature, needs an urgent GP appointment or help from NHS 111.",
    sections: [
      {
        heading: "Good days and bad days",
        paragraphs: [
          "Symptoms of BPS can come and go over time. There are usually times when your symptoms get worse, called flare-ups, and times when they are better.",
          "Bladder Health UK suggests learning to manage your flares, or bad days, with self-help and medication, and getting support from your GP and urologist.",
        ],
      },
      {
        heading: "Easing the pain",
        paragraphs: [
          "When pain is intense, it is easy to start taking shallow, rapid breaths, which can make you feel dizzy, anxious or panicked. Breathing slowly and deeply can help you feel more in control and keep you relaxed.",
          "Shifting your attention onto something else, such as an activity you enjoy, means the pain is not the only thing on your mind. Practising relaxation techniques regularly can help to reduce persistent pain.",
        ],
      },
      {
        heading: "What may set one off",
        paragraphs: [
          "Bladder Health UK notes that some people can have a small amount of a food that bothers them but have a flare if they have more, while others react to just one mouthful.",
          "Keeping a food diary helps you track what you eat and drink, as certain foods and drinks may make your symptoms worse.",
        ],
      },
      {
        heading: "Pacing and sleep",
        paragraphs: [
          "Pain management programmes teach people to pace themselves to avoid pain flare-ups. The NHS notes that not pacing your activities every day can make living with pain harder.",
          "Lack of sleep can make pain worse, so try to stick to a normal sleep routine. If sleep problems carry on, see a GP.",
        ],
      },
      {
        heading: "When it is not just a flare",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you have blood in your pee. Do the same if you have bladder, lower tummy or back pain and a very high temperature, or you feel very hot, or cold and shivery, as these could be signs of an infection.",
        ],
      },
    ],
    helps: [
      "Breathe slowly and deeply when the pain is intense.",
      "Get stuck into an activity you enjoy, so the pain is not the only thing on your mind.",
      "Practise relaxation techniques regularly.",
      "Go to bed and get up at regular times, and avoid naps in the day.",
      "Ask for an urgent GP appointment or get help from NHS 111 if you have blood in your pee, or pain with a very high temperature.",
    ],
    tryThisWeek: [
      "Breathe slowly and deeply.",
      "Lose yourself in a hobby.",
      "Keep a regular sleep routine.",
    ],
    ask: "What should I do during a flare-up, and which medicines can I use?",
    interactive: {
      kind: "scenarios",
      title: "During a flare",
      scenarios: [
        {
          id: "breathing",
          situation: "A flare starts and your breathing becomes fast and shallow.",
          options: [{ text: "Breathe slowly and deeply", best: true }, { text: "Breathe faster to cope" }],
          why: "Breathing slowly and deeply can help you feel more in control and keep you relaxed.",
        },
        {
          id: "focus",
          situation: "The pain is all you can think about.",
          options: [{ text: "Do something you enjoy", best: true }, { text: "Sit and focus on the pain" }],
          why: "Shifting your attention onto something else means the pain is not the only thing on your mind.",
        },
        {
          id: "fever",
          situation: "Your back hurts and you feel hot, then cold and shivery.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Wait for the flare to pass" }],
          why: "Pain with a very high temperature, or feeling very hot, or cold and shivery, could be signs of an infection.",
        },
        {
          id: "blood",
          situation: "You notice your pee is pink.",
          options: [{ text: "Urgent GP appointment or NHS 111", best: true }, { text: "Ignore it" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if you have blood in your pee, which may be bright pink, red or dark brown.",
        },
      ],
    },
    sources: [NHS_BPS, BHUK_IC, NHS_PAIN_10, NHS_PAIN_HELP, BHUK_DIET],
    quiz: {
      question: "What can help when pain makes your breathing fast and shallow?",
      options: [{ text: "Breathing slowly and deeply", right: true }, { text: "Holding your breath" }, { text: "Breathing faster" }],
      why: "Breathing slowly and deeply can help you feel more in control and keep you relaxed.",
    },
  },
  {
    id: "bps-sex-relationships",
    kicker: "Living well",
    question: "How can bladder pain affect sex and relationships?",
    hook: "Pain during sex is a common symptom, and not something to put up with in silence. There is help to talk through.",
    short: "Pain during sex is one of the symptoms of bladder pain syndrome, and long-lasting pain can affect relationships. Advice on your sex life is part of the support the NHS lists. A GP can help with a low sex drive, and treatments depend on the cause.",
    sections: [
      {
        heading: "A common symptom",
        paragraphs: [
          "Pain during sex is one of the symptoms of bladder pain syndrome. Women can find penetration painful, and men can find getting an erection painful.",
          "Bladder Health UK says pain is often linked with sex, and that constant pain can affect relationships.",
        ],
      },
      {
        heading: "Help is available",
        paragraphs: [
          "The NHS lists advice on what you can do if symptoms are affecting your sex life among the treatment and support for BPS.",
          "A low sex drive has many possible causes, including relationship problems, stress, anxiety or depression, and sexual problems like vaginal dryness or erectile dysfunction. Treating the cause should help increase your sex drive.",
        ],
      },
      {
        heading: "Treatments for a low sex drive",
        paragraphs: [
          "Treatment depends on the cause. It can include relationship counselling for relationship problems, vaginal lubricants or medicines to help you get an erection, and antidepressants or cognitive behavioural therapy for depression.",
          "See a GP if you are worried about your low sex drive, or if you think a medicine you are taking may be affecting it.",
        ],
      },
      {
        heading: "Medicines and sex",
        paragraphs: [
          "Some people have sex-related problems while taking amitriptyline, such as problems getting an erection. These are not common and should go away after the first couple of weeks.",
          "If they do not go away and this is a problem for you, go back to your doctor to see if there is another medicine you can try.",
        ],
      },
      {
        heading: "Not talked about enough",
        paragraphs: [
          "Bladder Health UK notes that bladder problems are often not discussed in public, and are hidden disabilities that can leave people feeling isolated and misunderstood. Its helpline and forums are there for people who want to talk to others who understand.",
        ],
      },
    ],
    helps: [
      "See a GP if you are worried about your low sex drive.",
      "See a GP if you think a medicine you are taking may be affecting your sex drive.",
      "Relationship counselling can help with relationship problems.",
      "Vaginal lubricants can help with vaginal dryness.",
      "Go back to your doctor if sexual side effects of amitriptyline do not go away after a couple of weeks.",
    ],
    tryThisWeek: [
      "Talk to a GP about your sex life.",
      "Ask about relationship counselling.",
      "Try a vaginal lubricant.",
    ],
    ask: "My symptoms are affecting my sex life. What help is there?",
    interactive: {
      kind: "scenarios",
      title: "Finding help",
      scenarios: [
        {
          id: "painful-sex",
          situation: "Sex has become painful since your symptoms started.",
          options: [{ text: "Raise it with your GP", best: true }, { text: "Keep it to yourself" }],
          why: "The NHS lists advice on what you can do if symptoms are affecting your sex life among the support for BPS.",
        },
        {
          id: "low-drive",
          situation: "You have lost interest in sex and it worries you.",
          options: [{ text: "See a GP", best: true }, { text: "Assume nothing can help" }],
          why: "See a GP if you are worried about your low sex drive. Treating the cause should help increase your sex drive.",
        },
        {
          id: "medicine",
          situation: "You started amitriptyline and notice sexual side effects.",
          options: [{ text: "Wait two weeks, then see your doctor", best: true }, { text: "Stop the tablets suddenly" }],
          why: "Sexual side effects should go away after the first couple of weeks. If not, go back to your doctor. Do not stop amitriptyline suddenly.",
        },
        {
          id: "relationship",
          situation: "Pain is putting a strain on your relationship.",
          options: [{ text: "Consider relationship counselling", best: true }, { text: "Avoid talking about it" }],
          why: "Relationship counselling is a possible treatment when relationship problems lower your sex drive.",
        },
      ],
    },
    sources: [NHS_BPS, BHUK_IC, NHS_LIBIDO, NHS_AMI_Q, NHS_AMI_HOW],
    quiz: {
      question: "Is pain during sex a symptom of bladder pain syndrome?",
      options: [{ text: "Yes", right: true }, { text: "No, never" }, { text: "Only in men over 80" }],
      why: "Pain during sex is one of the symptoms of bladder pain syndrome. Women can find penetration painful, and men can find getting an erection painful.",
    },
  },
  {
    id: "bps-work",
    kicker: "Living well",
    question: "How can I manage work and daily life?",
    hook: "Knowing where the next toilet is shapes a lot of days. Support at work, and a card for public toilets, can take some of the pressure off.",
    short: "Many people with bladder pain syndrome plan trips around toilets, and symptoms can affect work. Bladder Health UK offers a Priority Access Card for public toilets. Employers must make reasonable adjustments, and Access to Work can give grants for practical support.",
    sections: [
      {
        heading: "Planning around toilets",
        paragraphs: [
          "Bladder Health UK says many people with the condition find their life revolves around knowing where the nearest toilet is, so any trip away from home may need thought and planning.",
          "Bladder problems are often hidden disabilities, which can leave people feeling isolated and misunderstood. Constant pain can affect relationships and work, and severe tiredness can come from getting up again and again at night.",
        ],
      },
      {
        heading: "A card for public toilets",
        paragraphs: [
          "Bladder Health UK offers a Priority Access Card for people who need priority when using a public toilet, including a disabled toilet. You register your details, then either send a stamped addressed envelope or pay £5 to cover the card and postage.",
        ],
      },
      {
        heading: "Reasonable adjustments",
        paragraphs: [
          "Employers must make reasonable adjustments to make sure workers with disabilities, or physical or mental health conditions, are not substantially disadvantaged when doing their jobs.",
          "Examples include doing things another way, letting someone work somewhere else, and a phased return to work with flexible hours or part-time working. A Disability Employment Adviser at your local Jobcentre Plus office can advise on reasonable adjustments.",
        ],
      },
      {
        heading: "Access to Work",
        paragraphs: [
          "Access to Work can help you get or stay in work if you have a physical or mental health condition or disability. It can give a grant to help pay for practical support, such as specialist equipment, or the cost of travelling to work if you cannot use public transport.",
          "A grant will not affect any other benefits you get, and you will not have to pay it back. Access to Work can also offer support with managing your mental health at work, but it will not pay for reasonable adjustments.",
        ],
      },
      {
        heading: "After a test or treatment",
        paragraphs: [
          "After a flexible cystoscopy, you can return to work and normal activities as soon as you feel able to. After hydrodistension, BAUS says you may return to work when you are comfortable enough and your GP is satisfied with your progress.",
        ],
      },
    ],
    helps: [
      "Plan trips away from home with toilets in mind.",
      "Register for Bladder Health UK's Priority Access Card for public toilets.",
      "Get advice on reasonable adjustments from a Disability Employment Adviser at your local Jobcentre Plus.",
      "Check whether you are eligible for an Access to Work grant.",
      "Apply to Access to Work for support with your mental health at work if you need it.",
    ],
    tryThisWeek: [
      "Plan trips with toilets in mind.",
      "Register for a Priority Access Card.",
      "Check Access to Work eligibility.",
    ],
    ask: "Could you write something for my employer about how this condition affects me?",
    interactive: {
      kind: "scenarios",
      title: "Work and days out",
      scenarios: [
        {
          id: "queue",
          situation: "You often cannot wait in a queue for a public toilet.",
          options: [{ text: "Register for a Priority Access Card", best: true }, { text: "Stop going out" }],
          why: "Bladder Health UK offers a Priority Access Card for people who need priority when using a public toilet.",
        },
        {
          id: "hours",
          situation: "Night-time trips to the toilet leave you exhausted for early shifts.",
          options: [{ text: "Talk about reasonable adjustments", best: true }, { text: "Say nothing and struggle on" }],
          why: "Reasonable adjustments include doing things another way, and flexible hours or part-time working.",
        },
        {
          id: "travel",
          situation: "You cannot use public transport to get to work on bad days.",
          options: [{ text: "Look into Access to Work", best: true }, { text: "Give up the job" }],
          why: "An Access to Work grant can help pay for the cost of travelling to work if you cannot use public transport.",
        },
        {
          id: "payback",
          situation: "You worry an Access to Work grant will affect your benefits.",
          options: [{ text: "It will not affect them", best: true }, { text: "It has to be paid back" }],
          why: "A grant will not affect any other benefits you get, and you will not have to pay it back.",
        },
      ],
    },
    sources: [BHUK_IC, BHUK_CARD, GOV_ADJUST, GOV_ATW, NHS_CYSTO_HOW, BAUS_HYDRO],
    quiz: {
      question: "Does an Access to Work grant have to be paid back?",
      options: [{ text: "No", right: true }, { text: "Yes, within a year" }, { text: "Yes, with interest" }],
      why: "A grant will not affect any other benefits you get, and you will not have to pay it back.",
    },
  },
  {
    id: "bps-mood",
    kicker: "Living well",
    question: "How can I look after my mood with long-term pain?",
    hook: "Living with pain is hard, and low mood can make pain feel worse. Support is there, and it can help to start small.",
    short: "Pain can make you tired, anxious and low, which can make the pain feel worse. Mental health support is part of the care for BPS, and NHS talking therapies can help. If you need urgent help, call 111 and choose the mental health option, call Samaritans free on 116 123, or call 999 if a life is at risk.",
    sections: [
      {
        heading: "Pain and mood",
        paragraphs: [
          "Pain can make you tired, anxious, depressed and grumpy, and this can make the pain even worse. The NHS says to be kind to yourself, because living with pain is not easy.",
          "Bladder Health UK says some people with severe symptoms find themselves almost housebound, which can lead to social isolation and depression.",
        ],
      },
      {
        heading: "Support for your mental health",
        paragraphs: [
          "The NHS lists mental health support for low mood or anxiety among the treatment and support for BPS.",
          "NHS talking therapies for anxiety and depression may help if you have persistent low mood or often feel very anxious, including if you have a long-term health condition. In England, adults can refer themselves, or ask a GP to refer them.",
        ],
      },
      {
        heading: "Staying connected",
        paragraphs: [
          "It can help to talk to someone who has had similar pain and understands what you are going through. Bladder Health UK has a confidential helpline on 0121 702 0820, message forums, and telephone contact with a Phone-Pal who has been through it too.",
          "Try not to let pain mean you lose contact with people. Shorter visits, a phone call or a chat with a neighbour can help you feel much better.",
        ],
      },
      {
        heading: "Urgent help",
        paragraphs: [
          "If you need urgent help for your mental health, get help from 111 online or call 111 and select the mental health option, or ask for an urgent GP appointment. You can call Samaritans free on 116 123, at any time, to talk about anything that is troubling you.",
          "Call 999 or go to A&E now if someone's life is at risk, or you do not feel you can keep yourself or someone else safe. A mental health emergency should be taken as seriously as a physical one.",
        ],
      },
    ],
    helps: [
      "Be kind to yourself: living with pain is not easy.",
      "Refer yourself to NHS talking therapies for anxiety and depression, or ask your GP to refer you.",
      "Talk to someone who has had similar pain, through a helpline or support group.",
      "Keep in touch with friends and family, even with shorter visits or a phone call.",
      "Call Samaritans free on 116 123, at any time, to talk about anything that is troubling you.",
      "Call 999 or go to A&E now if you do not feel you can keep yourself or someone else safe.",
    ],
    tryThisWeek: [
      "Be kind to yourself.",
      "Look into NHS talking therapies.",
      "Phone a friend or family member.",
    ],
    ask: "Can I get support for my mood as part of my care?",
    interactive: {
      kind: "scenarios",
      title: "Where to turn",
      scenarios: [
        {
          id: "low-weeks",
          situation: "Your mood has been low for weeks.",
          options: [{ text: "Refer yourself to NHS talking therapies", best: true }, { text: "Wait for it to lift on its own" }],
          why: "NHS talking therapies may help if you have persistent low mood. You can refer yourself, or ask your GP to refer you.",
        },
        {
          id: "isolated",
          situation: "You feel no one understands what living with this is like.",
          options: [{ text: "Call the Bladder Health UK helpline", best: true }, { text: "Stop seeing people" }],
          why: "It can help to talk to someone who has had similar pain. Bladder Health UK has a confidential helpline on 0121 702 0820.",
        },
        {
          id: "night",
          situation: "It is late at night and you need to talk to someone now.",
          options: [{ text: "Call Samaritans on 116 123", best: true }, { text: "Wait until your next appointment" }],
          why: "You can call Samaritans free on 116 123, at any time, to talk about anything that is troubling you.",
        },
        {
          id: "unsafe",
          situation: "You do not feel you can keep yourself safe.",
          options: [{ text: "Call 999 or go to A&E now", best: true }, { text: "Keep it to yourself" }],
          why: "Call 999 or go to A&E now if you do not feel you can keep yourself or someone else safe.",
        },
      ],
    },
    sources: [NHS_BPS, BHUK_IC, NHS_PAIN_10, NHS_TALKING, NHS_URGENT_MH, SAMARITANS],
    quiz: {
      question: "What number can you call to talk to Samaritans, free, at any time?",
      options: [{ text: "116 123", right: true }, { text: "101" }, { text: "100" }],
      why: "You can call Samaritans free on 116 123, at any time, to talk about anything that is troubling you.",
    },
  },
];
