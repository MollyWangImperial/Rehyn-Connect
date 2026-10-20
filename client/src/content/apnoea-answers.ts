import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Sleep apnoea page's pieces (content/library-conditions/heart.ts
// `sleepApnoea`). Every sentence was written from wording checked on 20 October 2026 on the pages listed
// under each answer's `sources`; nothing is added that those pages do not say. Most of it comes from the NHS,
// NHS inform, Asthma + Lung UK and the Sleep Apnoea Trust, a UK patient charity, with the driving rules from
// GOV.UK. General information only; it never replaces what a person's own sleep clinic tells them.

const aluk = (label: string, path: string): LearnSource => ({ label: `Asthma + Lung UK: ${label}`, url: `https://www.asthmaandlung.org.uk/conditions/obstructive-sleep-apnoea-osa/${path}` });
const sata = (label: string, path: string): LearnSource => ({ label: `Sleep Apnoea Trust: ${label}`, url: `https://sleep-apnoea-trust.org/${path}` });
const NHS_OSA: LearnSource = { label: "NHS: Sleep apnoea", url: "https://www.nhs.uk/conditions/sleep-apnoea/" };
const NHSI_OSA: LearnSource = { label: "NHS inform: Obstructive sleep apnoea", url: "https://www.nhsinform.scot/illnesses-and-conditions/lungs-and-airways/obstructive-sleep-apnoea" };
const ALUK_WHAT = aluk("What is obstructive sleep apnoea (OSA)?", "what-obstructive-sleep-apnoea-osa");
const ALUK_DIAG = aluk("How is OSA diagnosed?", "how-osa-diagnosed");
const ALUK_TREAT = aluk("Treatments for OSA", "treatments-osa");
const ALUK_CPAP = aluk("Continuous positive airway pressure (CPAP)", "continuous-positive-airway-pressure-cpap");
const ALUK_EPWORTH = aluk("Epworth Sleepiness Scale", "epworth-sleepiness-scale");
const SATA_WHAT = sata("What is sleep apnoea?", "about-us/what-is-sleep-apnoea/");
const SATA_TREAT = sata("Treatment of sleep apnoea", "patient-information/treatment-sleep-apnoea/");
const SATA_TRAVEL = sata("Practical advice on OSA and travel", "travelling-with-cpap/practical-advice-on-obstructive-sleep-apnoea-and-travel/");
const SATA_DRIVING = sata("Driving and sleep apnoea: the rules", "driving-and-sleep-apnoea-the-rules/");
const GOV_SLEEPY: LearnSource = { label: "GOV.UK: Excessive sleepiness and driving", url: "https://www.gov.uk/excessive-sleepiness-and-driving" };
const BHF_HEART: LearnSource = { label: "BHF: Can sleep apnoea cause heart problems?", url: "https://www.bhf.org.uk/informationsupport/heart-matters-magazine/medical/ask-the-experts/sleep-apnoea-heart-problems" };

export const apnoeaAnswers: LearnArticle[] = [
  {
    id: "osa-what-happens",
    kicker: "Understanding",
    question: "What happens in my throat while I sleep?",
    hook: "Relaxed throat muscles, a narrowed or closed airway, and a brief waking you usually do not remember.",
    short: "Sleep apnoea is when your breathing stops and starts while you sleep. The muscles of your upper airway relax and your throat narrows or closes, until the lack of oxygen pulls you out of deep sleep to breathe again. You will usually have no memory of it.",
    sections: [
      {
        heading: "A narrow airway",
        paragraphs: [
          "Sleep apnoea is when your breathing stops and starts while you sleep. The most common type is called obstructive sleep apnoea, or OSA.",
          "It happens if your airways become too narrow while you sleep.",
        ],
      },
      {
        heading: "Relaxed muscles",
        paragraphs: [
          "The muscles of your upper airway relax, and your throat narrows or closes while you sleep. You do not breathe enough, or your breathing stops for a short time.",
        ],
      },
      {
        heading: "A brief waking",
        paragraphs: [
          "The lack of oxygen triggers your brain to pull you out of deep sleep, to start breathing again.",
          "You can stop and start breathing like this hundreds of times.",
        ],
      },
      {
        heading: "You may not know",
        paragraphs: [
          "You will usually have no memory of your interrupted breathing. It may be noticed by a partner, friend or relative.",
        ],
      },
    ],
    helps: [
      "See a GP if your breathing stops and starts while you sleep.",
      "See a GP if you make gasping, snorting or choking noises while you sleep.",
      "Ask someone to stay with you while you sleep so they can check for the symptoms.",
      "If someone else has seen you have the symptoms, bring them with you to the GP.",
    ],
    tryThisWeek: [
      "Ask someone to watch you sleep.",
      "Bring them with you to the GP.",
      "See a GP about gasping or pauses.",
    ],
    ask: "Could my snoring and tiredness be sleep apnoea?",
    sources: [NHS_OSA, ALUK_WHAT, NHSI_OSA],
    interactive: {
      kind: "timeline",
      title: "Slide through one pause in breathing",
      steps: [
        { id: "relax", when: "As you sleep", title: "Muscles relax", points: ["The muscles of your upper airway relax", "Your throat narrows or closes"] },
        { id: "pause", when: "The pause", title: "Breathing stops", points: ["You do not breathe enough", "Or your breathing stops for a short time"] },
        { id: "wake", when: "Then", title: "A brief waking", points: ["The lack of oxygen triggers your brain", "It pulls you out of deep sleep to breathe again"] },
        { id: "repeat", when: "Through the night", title: "Again and again", points: ["This can happen hundreds of times", "You will usually have no memory of it", "A partner, friend or relative may notice"] },
      ],
    },
    quiz: {
      question: "What starts your breathing again?",
      options: [{ text: "Your brain pulls you out of deep sleep", right: true }, { text: "You fully wake and get up" }, { text: "The throat muscles relax more" }],
      why: "The lack of oxygen triggers your brain to pull you out of deep sleep, to start breathing again.",
    },
  },
  {
    id: "osa-why-it-matters",
    kicker: "Why it matters",
    question: "Why does sleep apnoea matter for my heart, blood pressure, driving and mood?",
    hook: "Untreated, it is linked to high blood pressure, stroke and heart disease, and to accidents caused by tiredness.",
    short: "Sleep apnoea can be serious if it's not diagnosed and treated. Without treatment it can lead to high blood pressure, a higher chance of stroke, type 2 diabetes, heart disease, mood changes and accidents caused by tiredness. Treating it can bring down high blood pressure, but it is not as effective as blood pressure medication.",
    sections: [
      {
        heading: "Serious if untreated",
        paragraphs: [
          "Sleep apnoea can be serious if it's not diagnosed and treated.",
          "Without treatment, it can lead to high blood pressure, a higher chance of having a stroke, type 2 diabetes and heart disease.",
        ],
      },
      {
        heading: "What the heart goes through",
        paragraphs: [
          "During an episode there can be temporary drops in oxygen levels, and big surges in fight or flight hormones, such as adrenaline. There are sudden changes in your blood pressure, and heart rate rises as your body struggles to breathe.",
          "Some studies have shown an association between sleep apnoea and increased risk of heart attacks. An association alone does not prove that sleep apnoea actually causes cardiovascular problems.",
        ],
      },
      {
        heading: "Blood pressure",
        paragraphs: [
          "Treating sleep apnoea can bring down high blood pressure, but it is not as effective as blood pressure medication.",
          "CPAP treatment lowers your risk of complications from OSA, including risks to your heart and circulation.",
        ],
      },
      {
        heading: "Driving and mood",
        paragraphs: [
          "Without treatment, there is a higher chance of having a serious accident caused by tiredness, such as a car accident.",
          "It can also lead to depression or mood changes, and difficulty concentrating at work or school.",
        ],
      },
    ],
    helps: [
      "See a GP if your breathing stops and starts while you sleep, or you always feel very tired during the day.",
      "Ask whether treating your sleep apnoea could help your blood pressure.",
      "If sleep apnoea with excessive sleepiness is confirmed, do not drive until symptoms like feeling very tired are under control.",
      "Keep going with CPAP: it lowers your risk of complications, including risks to your heart and circulation.",
    ],
    tryThisWeek: [
      "See a GP if you always feel very tired.",
      "Ask about your blood pressure.",
      "Keep going with CPAP.",
    ],
    ask: "Is my sleep apnoea affecting my blood pressure or my heart?",
    sources: [NHS_OSA, BHF_HEART, ALUK_WHAT, ALUK_CPAP],
    interactive: {
      kind: "flip-cards",
      title: "Turn a card over",
      intro: "Without treatment, sleep apnoea can lead to other problems.",
      cards: [
        { id: "bp", front: "High blood pressure", when: "Without treatment", back: "Treating sleep apnoea can bring down high blood pressure, but it is not as effective as blood pressure medication." },
        { id: "heart", front: "Heart disease", when: "Without treatment", back: "Oxygen levels drop, adrenaline surges, and blood pressure and heart rate change as your body struggles to breathe." },
        { id: "stroke", front: "Stroke", when: "Without treatment", back: "A higher chance of having a stroke." },
        { id: "accident", front: "Accidents", when: "Without treatment", back: "A higher chance of a serious accident caused by tiredness, such as a car accident." },
        { id: "mood", front: "Mood and concentration", when: "Without treatment", back: "Depression or mood changes, and difficulty concentrating at work or school." },
      ],
    },
    quiz: {
      question: "Can treating sleep apnoea bring down high blood pressure?",
      options: [{ text: "Yes, but less well than blood pressure medicine", right: true }, { text: "No, never" }, { text: "Yes, so blood pressure tablets can stop" }],
      why: "Treating sleep apnoea can bring down high blood pressure, but it is not as effective as blood pressure medication.",
    },
  },
  {
    id: "osa-tests",
    kicker: "Tests",
    question: "What does a sleep study measure?",
    hook: "A few devices worn overnight, usually in your own bed, that check your breathing, oxygen and heartbeat.",
    short: "Your GP may refer you to a sleep clinic. You wear devices overnight that check things like your breathing and heartbeat, usually at home, though sometimes you may need to stay in the clinic. The tests can show if you have sleep apnoea and how severe it is.",
    sections: [
      {
        heading: "A sleepiness questionnaire",
        paragraphs: [
          "The Epworth Sleepiness Scale is a useful tool to help diagnose OSA. It asks how likely you are to fall asleep in everyday situations.",
          "It cannot tell you whether you have OSA on its own. Based on your scores and how sleepiness affects you, your GP may refer you to a sleep clinic.",
        ],
      },
      {
        heading: "Usually at home",
        paragraphs: [
          "You may be given devices that check things like your breathing and heartbeat while you sleep. You wear these overnight so doctors can check for signs of sleep apnoea.",
          "You can usually do this at home, but sometimes you may need to stay in the clinic overnight.",
        ],
      },
      {
        heading: "What it can measure",
        paragraphs: [
          "A sleep study can test your breathing rate and depth, the amount of oxygen in your blood, brain activity, heart rate, and eye and leg movements.",
        ],
      },
      {
        heading: "The results",
        paragraphs: [
          "These tests can show if you have sleep apnoea and how severe it is.",
        ],
      },
    ],
    helps: [
      "Ask someone to stay with you while you sleep so they can check for the symptoms.",
      "Fill in the Epworth Sleepiness Scale, and talk to your GP about any concerns.",
      "If you think you need a quicker referral, talk to your GP.",
    ],
    tryThisWeek: [
      "Ask someone to watch you sleep.",
      "Fill in the Epworth scale.",
      "Talk to your GP about a referral.",
    ],
    ask: "Will my sleep study be at home or in the clinic, and what will it check?",
    sources: [NHS_OSA, ALUK_DIAG, ALUK_EPWORTH],
    interactive: {
      kind: "flip-cards",
      title: "Turn a card over",
      intro: "Each step on the way to a diagnosis, and what it tells you.",
      cards: [
        { id: "epworth", front: "Epworth Sleepiness Scale", when: "Before a referral", back: "Asks how likely you are to fall asleep in everyday situations. It cannot tell you whether you have OSA on its own." },
        { id: "home", front: "Home sleep study", when: "Usually", back: "Devices worn overnight check things like your breathing and heartbeat while you sleep." },
        { id: "clinic", front: "A night in the clinic", when: "Sometimes", back: "More detailed sleep monitoring, done in hospital." },
        { id: "results", front: "Your results", when: "After the study", back: "They show if you have sleep apnoea and how severe it is." },
      ],
    },
    quiz: {
      question: "Where is a sleep study usually done?",
      options: [{ text: "At home", right: true }, { text: "Always in hospital for a week" }, { text: "At the GP surgery during the day" }],
      why: "You can usually do this at home, but sometimes you may need to stay in the clinic overnight.",
    },
  },
  {
    id: "osa-severity",
    kicker: "Severity",
    question: "What do mild, moderate and severe mean?",
    hook: "Your AHI score counts how often your breathing stops while you sleep. It helps decide your treatment.",
    short: "Your AHI score shows how severe your sleep apnoea is: 5 to 14 is mild, 15 to 30 is moderate, and over 30 is severe. Your oxygen level during sleep is also very important. Mild sleep apnoea may need only lifestyle changes; CPAP is usually used for moderate to severe.",
    sections: [
      {
        heading: "The AHI score",
        paragraphs: [
          "Your AHI, or apnoea–hypopnoea index, score shows how severe your sleep apnoea is. It is based on how often your breathing stops while you sleep.",
        ],
      },
      {
        heading: "The three bands",
        paragraphs: [
          "An AHI of 5 to 14 is mild. An AHI of 15 to 30 is moderate. An AHI over 30 is severe.",
        ],
      },
      {
        heading: "Oxygen matters too",
        paragraphs: [
          "Doctors work out how severe your OSA is by counting the number of breathing pauses. Your oxygen level during sleep is also very important.",
        ],
      },
      {
        heading: "What it means for treatment",
        paragraphs: [
          "If your OSA is mild, it may be that you do not need any treatment. Lifestyle changes may be all you need to do if your sleep apnoea is mild.",
          "If your OSA is moderate to severe, your doctors should start you on treatment. CPAP machines are usually used to treat moderate to severe OSA.",
        ],
      },
    ],
    helps: [
      "Ask your sleep clinic how severe your sleep apnoea is.",
      "If it is mild, lifestyle changes such as losing weight, stopping smoking and drinking less alcohol may be all you need.",
      "If it is moderate to severe, ask about starting CPAP.",
    ],
    tryThisWeek: [
      "Ask how severe yours is.",
      "Pick one lifestyle change to start.",
      "Ask about CPAP if it is moderate or severe.",
    ],
    ask: "What is my AHI score, and what does it mean for my treatment?",
    sources: [NHS_OSA, ALUK_DIAG, ALUK_TREAT],
    interactive: {
      kind: "flip-cards",
      title: "Turn a card over",
      intro: "Each AHI band, and what it can mean for treatment.",
      cards: [
        { id: "mild", front: "Mild", when: "AHI 5 to 14", back: "It may be that you do not need any treatment. Lifestyle changes may be all you need." },
        { id: "moderate", front: "Moderate", when: "AHI 15 to 30", back: "Your doctors should start you on treatment. CPAP machines are usually used to treat moderate to severe OSA." },
        { id: "severe", front: "Severe", when: "AHI over 30", back: "Your doctors should start you on treatment. CPAP machines are usually used to treat moderate to severe OSA." },
      ],
    },
    quiz: {
      question: "Which AHI score counts as severe?",
      options: [{ text: "Over 30", right: true }, { text: "5 to 14" }, { text: "15 to 30" }],
      why: "An AHI over 30 is severe.",
    },
  },
  {
    id: "osa-cpap",
    kicker: "Treatment",
    question: "How do I get on with CPAP: masks, leaks and the first weeks?",
    hook: "It can feel strange at first. Small adjustments to the mask, the air and the settings often make a big difference.",
    short: "A CPAP machine gently pumps air into a mask over your nose, or nose and mouth, to keep your airway open while you sleep. It may feel strange or awkward at first, but people who persevere usually soon get used to it. It works best if you use it every night, and small adjustments can often make a big difference.",
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "A CPAP machine gently pumps air into a mask you wear over your nose, or nose and mouth, while you sleep. It helps to keep your upper airway open while you are asleep.",
          "You will be given it for free on the NHS if you need it.",
        ],
      },
      {
        heading: "The first weeks",
        paragraphs: [
          "Using a CPAP machine may feel strange or awkward at first, but try to keep using it. People who persevere usually soon get used to it, and their symptoms improve significantly.",
          "You should get a follow-up appointment with the sleep clinic within one month of starting CPAP.",
        ],
      },
      {
        heading: "Masks and leaks",
        paragraphs: [
          "Your mask needs to fit well and feel comfortable. Air leaks when the mask has not been fitted properly, or has a weak seal.",
          "You may feel less claustrophobic if you use a mask that just covers your nose.",
        ],
      },
      {
        heading: "Dry mouth and pressure",
        paragraphs: [
          "The air can sometimes dry out your mouth, nose or throat. A chin strap can keep your mouth closed while you sleep, and a humidifier moistens and warms the air.",
          "If the air pressure feels too high, ramp time settings let the pressure build up gradually.",
        ],
      },
      {
        heading: "Every night",
        paragraphs: [
          "It works best if you use it every night. Check and clean your machine and mask once a week, to keep it working well and prevent germs.",
        ],
      },
    ],
    helps: [
      "Use CPAP every night, for as much of the night as possible.",
      "Tell your doctor if you find it uncomfortable or hard to use.",
      "Check with the sleep clinic if you are having problems using your machine.",
      "Try a chin strap or a humidifier if your mouth gets dry.",
      "Ask about ramp settings if the air pressure feels too high.",
      "Check and clean your machine and mask once a week.",
    ],
    tryThisWeek: [
      "Use it every night.",
      "Clean the mask once this week.",
      "Call the clinic about any problems.",
    ],
    ask: "My mask leaks or feels uncomfortable: what can we change?",
    sources: [NHS_OSA, ALUK_CPAP, NHSI_OSA],
    interactive: {
      kind: "scenarios",
      title: "What would you do?",
      scenarios: [
        { id: "leak", situation: "Air is leaking out around your mask.", options: [{ text: "Check the fit and ask the sleep clinic", best: true }, { text: "Stop using CPAP" }], why: "Air leaks when the mask has not been fitted properly, or has a weak seal. Check with the sleep clinic if you are having problems." },
        { id: "dry", situation: "You wake up with a dry mouth.", options: [{ text: "Try a chin strap or a humidifier", best: true }, { text: "Use CPAP less often" }], why: "A chin strap can keep your mouth closed while you sleep, and a humidifier moistens and warms the air." },
        { id: "pressure", situation: "The air pressure feels too high.", options: [{ text: "Ask about ramp time settings", best: true }, { text: "Put up with it" }], why: "If the air pressure feels too high, ramp time settings let the pressure build up gradually." },
        { id: "strange", situation: "The first nights feel strange and awkward.", options: [{ text: "Keep using it, and tell your doctor", best: true }, { text: "Give up on it" }], why: "People who persevere usually soon get used to it. Tell your doctor if you find it uncomfortable or hard to use." },
      ],
    },
    quiz: {
      question: "Why does air usually leak from a CPAP mask?",
      options: [{ text: "The mask is not fitted properly", right: true }, { text: "The machine is too quiet" }, { text: "You used it every night" }],
      why: "Air leaks when the mask has not been fitted properly, or has a weak seal.",
    },
  },
  {
    id: "osa-mouthpiece",
    kicker: "Treatment",
    question: "Could a mouthpiece help instead of CPAP?",
    hook: "A device like a gum shield holds your jaw forward to keep your airway open. It is made for you by a trained dentist.",
    short: "A mandibular advancement device fits over your teeth like a gum shield and holds your jaw forward, keeping your airways open while you sleep. It is sometimes used for mild OSA, or if CPAP is not working well for you. It should be made by a dentist with training in treating sleep apnoea.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "A mandibular advancement device is like a gum shield that holds your airways open while you sleep. It fits over your teeth and holds your jaw forward.",
        ],
      },
      {
        heading: "Who it may suit",
        paragraphs: [
          "It is sometimes used to treat mild OSA. These devices are most commonly recommended for people with mild to moderate OSA, or for those whose main symptom is snoring.",
          "If a CPAP machine is not working well for you, your doctor can prescribe one.",
        ],
      },
      {
        heading: "Made for you",
        paragraphs: [
          "It should be made for you by a dentist with training and experience in treating sleep apnoea. A specially trained dentist will take an impression of your teeth.",
          "Over-the-counter boil and bite devices are not recommended.",
        ],
      },
      {
        heading: "Side effects",
        paragraphs: [
          "These devices are generally considered a safe treatment option. Some people may have side effects, particularly when first starting treatment.",
          "These include more saliva, aching in the jaw and facial muscles, tooth discomfort, and changes to your bite over time.",
        ],
      },
    ],
    helps: [
      "Ask whether a mouthpiece could suit you, especially if CPAP is not working well for you.",
      "Have it made by a dentist with training and experience in treating sleep apnoea.",
      "Avoid over-the-counter boil and bite devices.",
    ],
    tryThisWeek: [
      "Ask if a mouthpiece could suit you.",
      "Ask about a specially trained dentist.",
      "Skip boil and bite devices.",
    ],
    ask: "Would a mandibular advancement device work for my sleep apnoea?",
    sources: [NHS_OSA, NHSI_OSA, ALUK_TREAT, SATA_TREAT],
    interactive: {
      kind: "scenarios",
      title: "What would you do?",
      scenarios: [
        { id: "cpap", situation: "A CPAP machine is not working well for you.", options: [{ text: "Ask about a mouthpiece", best: true }, { text: "Stop all treatment" }], why: "If a CPAP machine is not working well for you, your doctor can prescribe a mandibular advancement device." },
        { id: "shop", situation: "You see a boil and bite device for sale.", options: [{ text: "Ask for one made by a trained dentist", best: true }, { text: "Buy it and try it" }], why: "Over-the-counter boil and bite devices are not recommended. It should be made by a dentist trained in treating sleep apnoea." },
        { id: "snoring", situation: "Your main symptom is snoring.", options: [{ text: "Ask whether a mouthpiece could suit you", best: true }, { text: "Assume nothing can help" }], why: "These devices are most commonly recommended for people with mild to moderate OSA, or whose main symptom is snoring." },
      ],
    },
    quiz: {
      question: "Who should make a mandibular advancement device?",
      options: [{ text: "A dentist trained in treating sleep apnoea", right: true }, { text: "You, at home, with a boil and bite kit" }, { text: "Any sports shop" }],
      why: "It should be made for you by a dentist with training and experience in treating sleep apnoea.",
    },
  },
  {
    id: "osa-weight-position",
    kicker: "Every day",
    question: "Do weight, alcohol and sleeping position make a difference?",
    hook: "Losing weight, cutting down on alcohol and sleeping on your side can all help, and may be enough for mild sleep apnoea.",
    short: "Losing weight can improve OSA and, in some people, may reduce the need for treatment. Alcohol relaxes the muscles in the throat and can make OSA worse, as can smoking and sleeping pills. Symptoms are likely to be worse if you sleep on your back, so sleeping on your side can help.",
    sections: [
      {
        heading: "Weight",
        paragraphs: [
          "Sleep apnoea is linked to obesity and having a large neck. Losing weight can improve OSA and, in some people, may reduce the need for treatment.",
          "If you're very overweight, your GP can help.",
        ],
      },
      {
        heading: "Alcohol",
        paragraphs: [
          "Alcohol relaxes the muscles in the throat and can make OSA worse. Try not to drink too much alcohol, especially shortly before going to sleep.",
        ],
      },
      {
        heading: "Smoking and sleeping pills",
        paragraphs: [
          "Smoking can make OSA worse.",
          "Do not take sleeping pills unless recommended by a doctor, as they can make sleep apnoea worse.",
        ],
      },
      {
        heading: "Sleeping position",
        paragraphs: [
          "Your symptoms are likely to be worse if you sleep on your back. Sleeping on your side, or with your head slightly raised, can help.",
          "Try taping a tennis ball to the back of your sleepwear, or buy a special pillow or bed wedge to help keep you on your side.",
        ],
      },
      {
        heading: "Often enough when mild",
        paragraphs: [
          "If you have mild OSA, lifestyle changes are often enough, and you may not need any further treatment.",
        ],
      },
    ],
    helps: [
      "Try to lose weight if you're overweight, and ask your GP for help.",
      "Exercise regularly.",
      "Cut down on alcohol, especially shortly before going to sleep.",
      "Do not smoke.",
      "Sleep on your side, using a tennis ball, special pillow or bed wedge to stay there.",
      "Avoid sleeping pills unless a doctor recommends them.",
    ],
    tryThisWeek: [
      "Sleep on your side.",
      "Skip alcohol close to bedtime.",
      "Ask your GP for help with weight.",
    ],
    ask: "Which lifestyle change would make the most difference to my sleep apnoea?",
    sources: [NHS_OSA, ALUK_TREAT, SATA_TREAT],
    interactive: {
      kind: "risk-check",
      title: "What could be making it worse?",
      intro: "Tick any that apply. Nothing leaves this device.",
      items: [
        { id: "weight", label: "Being overweight", note: "Changeable. Losing weight can improve OSA and, in some people, may reduce the need for treatment.", changeable: true },
        { id: "alcohol", label: "Alcohol, especially before bed", note: "Changeable. Alcohol relaxes the muscles in the throat and can make OSA worse.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Changeable. Smoking can make OSA worse.", changeable: true },
        { id: "pills", label: "Sleeping pills", note: "Changeable. Do not take them unless recommended by a doctor: they can make sleep apnoea worse.", changeable: true },
        { id: "back", label: "Sleeping on your back", note: "Changeable. A tennis ball taped to your sleepwear, a special pillow or a bed wedge can keep you on your side.", changeable: true },
        { id: "neck", label: "Having a large neck", note: "Not changeable, but it is linked to sleep apnoea.", changeable: false },
        { id: "age", label: "Getting older", note: "Not changeable. Children and young adults can also get it.", changeable: false },
      ],
    },
    quiz: {
      question: "Why can alcohol make sleep apnoea worse?",
      options: [{ text: "It relaxes the muscles in the throat", right: true }, { text: "It tightens the airway muscles" }, { text: "It has no effect on sleep" }],
      why: "Alcohol relaxes the muscles in the throat and can make OSA worse.",
    },
  },
  {
    id: "osa-driving",
    kicker: "Driving",
    question: "Do I need to tell the DVLA, and can I drive?",
    hook: "Sleepiness is what matters. With excessive sleepiness, driving waits until treatment has it under control.",
    short: "DVLA needs to be told if you have confirmed moderate or severe obstructive sleep apnoea syndrome with excessive sleepiness, or any sleep condition that has caused excessive sleepiness for at least 3 months. Do not drive until you are free from excessive sleepiness, or your symptoms are under control and you are strictly following your treatment. Ask your doctor if you are not sure.",
    sections: [
      {
        heading: "When to tell DVLA",
        paragraphs: [
          "DVLA needs to be told if you have confirmed moderate or severe obstructive sleep apnoea syndrome, with excessive sleepiness.",
          "It also needs to be told about any other sleep condition that has caused excessive sleepiness for at least 3 months, including suspected or confirmed mild OSA.",
        ],
      },
      {
        heading: "Holding off driving",
        paragraphs: [
          "Do not drive until you're free from excessive sleepiness, or until your symptoms are under control and you're strictly following any necessary treatment.",
        ],
      },
      {
        heading: "If sleepiness is not excessive",
        paragraphs: [
          "If a sleep clinic finds your sleepiness is not excessive, you do not need to notify DVLA. Ask your doctor if you are not sure.",
        ],
      },
      {
        heading: "How to tell them",
        paragraphs: [
          "For a car or motorcycle licence, you can report your condition online, or fill in form SL1. For a bus, coach or lorry licence, fill in form SL1V.",
          "You can be fined up to £1,000 if you do not tell DVLA about a medical condition that affects your driving. Breaking the rules may also invalidate your insurance.",
        ],
      },
    ],
    helps: [
      "Ask your doctor if you are not sure whether to tell DVLA.",
      "Hold off driving until you are free from excessive sleepiness, or your symptoms are under control.",
      "Keep strictly to any necessary treatment.",
      "Report online, or fill in form SL1 for a car or motorcycle licence.",
    ],
    tryThisWeek: [
      "Ask your doctor about DVLA.",
      "Hold off driving while very sleepy.",
      "Keep strictly to your treatment.",
    ],
    ask: "Do I need to tell the DVLA, and when can I drive again?",
    sources: [GOV_SLEEPY, NHS_OSA, SATA_DRIVING],
    interactive: {
      kind: "scenarios",
      title: "What would you do?",
      scenarios: [
        { id: "confirmed", situation: "The clinic confirms moderate sleep apnoea with excessive sleepiness.", options: [{ text: "Tell DVLA and hold off driving", best: true }, { text: "Keep driving as normal" }], why: "DVLA needs to be told. Do not drive until you're free from excessive sleepiness, or your symptoms are under control." },
        { id: "not-excessive", situation: "The clinic finds your sleepiness is not excessive.", options: [{ text: "No need to notify DVLA", best: true }, { text: "Hand in your licence" }], why: "If a sleep clinic finds your sleepiness is not excessive, you do not need to notify DVLA." },
        { id: "unsure", situation: "You are not sure whether to tell DVLA.", options: [{ text: "Ask your doctor", best: true }, { text: "Say nothing" }], why: "Ask your doctor if you are not sure. You can be fined up to £1,000 if you do not tell DVLA about a condition that affects your driving." },
      ],
    },
    quiz: {
      question: "How much can you be fined for not telling DVLA about a condition that affects your driving?",
      options: [{ text: "Up to £1,000", right: true }, { text: "Nothing" }, { text: "Up to £50" }],
      why: "You can be fined up to £1,000 if you do not tell DVLA about a medical condition that affects your driving.",
    },
  },
  {
    id: "osa-travel",
    kicker: "Travel",
    question: "How do I travel with my CPAP machine?",
    hook: "A plug socket, the right adapter, a letter from your clinic, and the machine in your hand luggage.",
    short: "Make sure there is somewhere to plug your CPAP in, and check the power supply where you are going. If you are flying, check with the airline before booking and carry the machine as hand luggage. Your sleep clinic can give you a letter for customs and security, and tell your travel insurer that you have OSA.",
    sections: [
      {
        heading: "Power",
        paragraphs: [
          "Make sure there's somewhere for you to plug your CPAP machine in. Use an extension lead if there's no plug socket near your bed.",
          "Check if your CPAP has a power supply that matches the supply at your destination. Some have a switch to change voltage, or you may need to take a power adapter if you're travelling abroad.",
        ],
      },
      {
        heading: "Flying",
        paragraphs: [
          "If you want to take your CPAP machine on the plane, check with the airline before booking your flight. You should carry your CPAP machine as hand luggage.",
          "Medical devices should not count towards your carry-on luggage limit, but check with your airline before you travel. You may not have a power supply on board, so the airline may suggest you use a battery.",
        ],
      },
      {
        heading: "Letters",
        paragraphs: [
          "If you're travelling abroad, your sleep clinic can give you a letter explaining your CPAP machine for customs and security officials.",
          "You may need to ask your GP to write you a letter stating that the machine is necessary.",
        ],
      },
      {
        heading: "Insurance and water",
        paragraphs: [
          "Tell the company providing your travel insurance that you have OSA.",
          "The water in most parts of the world is far from pure, so take particular care if you are using a humidifier.",
        ],
      },
    ],
    helps: [
      "Check there is a plug socket near your bed, or take an extension lead.",
      "Take a power adapter if you need one abroad.",
      "Check with the airline before booking your flight.",
      "Carry your CPAP machine as hand luggage.",
      "Ask your sleep clinic for a letter for customs and security.",
      "Tell your travel insurer that you have OSA.",
    ],
    tryThisWeek: [
      "Pack an extension lead and adapter.",
      "Ask the clinic for a travel letter.",
      "Tell your travel insurer.",
    ],
    ask: "Can you give me a letter about my CPAP machine for travelling?",
    sources: [ALUK_CPAP, SATA_TRAVEL],
    interactive: {
      kind: "scenarios",
      title: "What would you do?",
      scenarios: [
        { id: "flying", situation: "You are flying with your CPAP machine.", options: [{ text: "Carry it as hand luggage", best: true }, { text: "Put it in the hold" }], why: "You should carry your CPAP machine as hand luggage. Check with the airline before booking your flight." },
        { id: "socket", situation: "There is no plug socket near your bed.", options: [{ text: "Use an extension lead", best: true }, { text: "Go without CPAP" }], why: "Use an extension lead if there's no plug socket near your bed." },
        { id: "abroad", situation: "You are travelling abroad.", options: [{ text: "Get a letter from your sleep clinic", best: true }, { text: "Take nothing extra" }], why: "Your sleep clinic can give you a letter explaining your CPAP machine for customs and security officials. You may need a power adapter too." },
      ],
    },
    quiz: {
      question: "How should you carry your CPAP machine when flying?",
      options: [{ text: "As hand luggage", right: true }, { text: "In the hold" }, { text: "Leave it at home" }],
      why: "You should carry your CPAP machine as hand luggage.",
    },
  },
  {
    id: "osa-partner",
    kicker: "Partners",
    question: "What about the person who sleeps next to me?",
    hook: "They often notice the snoring and the pauses before you do, and treatment can help them sleep too.",
    short: "If you share a bedroom with someone, they might be more aware of your snoring and pauses in your breathing than you are. If they have seen the symptoms, it can help to bring them to the GP. Sleep apnoea can be difficult for a partner too, and with CPAP people may notice not snoring as much.",
    sections: [
      {
        heading: "They may notice first",
        paragraphs: [
          "If you share a bedroom with someone, they might be more aware of your snoring and pauses in your breathing when you're asleep than you are.",
          "You will usually have no memory of your interrupted breathing.",
        ],
      },
      {
        heading: "Going to the GP together",
        paragraphs: [
          "It may help to ask someone to stay with you while you sleep so they can check for the symptoms. If someone else has seen you have the symptoms, it can help to bring them with you to the GP.",
        ],
      },
      {
        heading: "Hard for both of you",
        paragraphs: [
          "Sleep apnoea can also be difficult for your partner and put a strain on your relationship with them.",
        ],
      },
      {
        heading: "What treatment can change",
        paragraphs: [
          "In a good routine with CPAP, people may notice not snoring as much and sleeping much better.",
        ],
      },
    ],
    helps: [
      "Ask the person who shares your bedroom whether they have noticed snoring or pauses in your breathing.",
      "If they have seen the symptoms, bring them with you to the GP.",
      "Keep going with CPAP so you can see the full benefits.",
    ],
    tryThisWeek: [
      "Ask your partner what they notice.",
      "Bring them to the GP.",
      "Keep going with CPAP.",
    ],
    ask: "Can my partner come with me and tell you what they have seen at night?",
    sources: [ALUK_WHAT, NHS_OSA, NHSI_OSA, ALUK_CPAP],
    interactive: {
      kind: "signs",
      title: "Have you noticed any of these?",
      intro: "If you share a bedroom, you might be more aware of these than they are. Tick anything you have noticed.",
      signs: [
        "Loud snoring",
        "Breathing stopping and starting",
        "Gasping, snorting or choking noises",
        "Waking up a lot",
      ],
      after: "If you have seen the symptoms, it can help to go with them to the GP.",
    },
    quiz: {
      question: "Who might be more aware of your snoring and pauses in breathing?",
      options: [{ text: "Someone who shares your bedroom", right: true }, { text: "You, while you sleep" }, { text: "No one can notice them" }],
      why: "If you share a bedroom with someone, they might be more aware of your snoring and pauses in your breathing than you are.",
    },
  },
  {
    id: "osa-energy",
    kicker: "Every day",
    question: "How do I get my days back?",
    hook: "Treatment can bring more refreshed mornings, fewer headaches, less daytime sleepiness and better concentration.",
    short: "Sleep apnoea can leave you very tired during the day, unable to concentrate and with morning headaches. With treatment you should notice improvements such as feeling more refreshed, no waking headaches and less daytime sleepiness. It can take time to get used to CPAP, but if you keep going you will notice the benefits.",
    sections: [
      {
        heading: "The tiredness",
        paragraphs: [
          "Sleep apnoea can make you feel very tired during the day, find it hard to concentrate, have mood swings and wake with a headache.",
          "People with it can fall asleep during the day, even whilst working or driving.",
        ],
      },
      {
        heading: "Checking your sleepiness",
        paragraphs: [
          "The Epworth Sleepiness Scale asks how likely you are to fall asleep in everyday situations. A total score between 11 and 24 might suggest you're feeling unusually sleepy during the day.",
        ],
      },
      {
        heading: "What treatment can bring",
        paragraphs: [
          "When you wake up, you should notice improvements such as feeling more refreshed, no waking headaches and reduced daytime sleepiness. Better concentration and memory, and improved mood and energy levels, are on the list too.",
        ],
      },
      {
        heading: "Keep going",
        paragraphs: [
          "Sometimes people need time to get used to CPAP. It's worth trying to keep going with the treatment if you can, so that you can see the full benefits.",
        ],
      },
      {
        heading: "Your nights",
        paragraphs: [
          "Exercise regularly, and make sure your bedroom is dark and quiet.",
        ],
      },
    ],
    helps: [
      "Use your treatment every night.",
      "Keep going with CPAP so you can see the full benefits.",
      "Exercise regularly.",
      "Make sure your bedroom is dark and quiet.",
      "See a GP if you always feel very tired during the day.",
    ],
    tryThisWeek: [
      "Use your treatment every night.",
      "Make your bedroom dark and quiet.",
      "Fit in some regular exercise.",
    ],
    ask: "I still feel tired on treatment: what else could we look at?",
    sources: [NHS_OSA, SATA_WHAT, SATA_TREAT, ALUK_CPAP, ALUK_EPWORTH],
    interactive: {
      kind: "signs",
      title: "How are your days?",
      intro: "Tick anything you notice during the day.",
      signs: [
        "Feeling very tired",
        "Finding it hard to concentrate",
        "Mood swings",
        "A headache when you wake up",
        "Falling asleep while working or driving",
      ],
      after: "See a GP if you always feel very tired during the day.",
    },
    quiz: {
      question: "Which of these should you notice on waking with treatment?",
      options: [{ text: "Feeling more refreshed", right: true }, { text: "More waking headaches" }, { text: "More daytime sleepiness" }],
      why: "When you wake up, you should notice improvements such as feeling more refreshed, no waking headaches and reduced daytime sleepiness.",
    },
  },
];
