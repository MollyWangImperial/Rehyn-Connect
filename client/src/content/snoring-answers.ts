import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Snoring page's pieces (content/library-conditions/heart-more.ts). Every
// sentence was written from wording checked on 21 October 2026 on the pages listed under each answer's
// `sources`; nothing is added that those pages do not say. Most of it comes from the NHS snoring, sleep
// apnoea, nose and quit smoking pages, Asthma + Lung UK's obstructive sleep apnoea pages and the Sleep
// Charity's advice pages, and is credited to them. General information only; it never replaces what a
// person's own GP or team tells them.

const nhs = (label: string, url: string): LearnSource => ({ label: `NHS: ${label}`, url });
const aluk = (label: string, path: string): LearnSource => ({ label: `Asthma + Lung UK: ${label}`, url: `https://www.asthmaandlung.org.uk/conditions/obstructive-sleep-apnoea-osa/${path}` });
const sleepCharity = (label: string, path: string): LearnSource => ({ label: `The Sleep Charity: ${label}`, url: `https://thesleepcharity.org.uk/${path}` });

const NHS_SNORING = nhs("Snoring", "https://www.nhs.uk/symptoms/snoring/");
const NHS_APNOEA = nhs("Sleep apnoea", "https://www.nhs.uk/conditions/sleep-apnoea/");
const NHS_TIRED = nhs("Tiredness and fatigue", "https://www.nhs.uk/symptoms/tiredness-and-fatigue/");
const NHS_ALLERGIC = nhs("Allergic rhinitis", "https://www.nhs.uk/conditions/allergic-rhinitis/");
const NHS_NON_ALLERGIC = nhs("Non-allergic rhinitis", "https://www.nhs.uk/conditions/non-allergic-rhinitis/");
const NHS_DECONGESTANTS = nhs("Decongestants", "https://www.nhs.uk/medicines/decongestants/");
const NHS_POLYPS = nhs("Nasal polyps", "https://www.nhs.uk/conditions/nasal-polyps/");
const NHS_UNITS = nhs("Alcohol units", "https://www.nhs.uk/live-well/alcohol-advice/calculating-alcohol-units/");
const NHS_STOP_SERVICES = nhs("NHS stop smoking services help you quit", "https://www.nhs.uk/live-well/quit-smoking/nhs-stop-smoking-services-help-you-quit/");
const NHS_QUIT: LearnSource = { label: "NHS Better Health: Quit smoking", url: "https://www.nhs.uk/better-health/quit-smoking/" };
const NHS_SLEEP_TIPS: LearnSource = { label: "NHS Every Mind Matters: How to fall asleep faster and sleep better", url: "https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/how-to-fall-asleep-faster-and-sleep-better/" };
const ALUK_OSA = aluk("What is obstructive sleep apnoea (OSA)?", "what-obstructive-sleep-apnoea-osa");
const ALUK_TREATMENTS = aluk("Treatments for OSA", "treatments-osa");
const ALUK_DIAGNOSIS = aluk("How is OSA diagnosed?", "how-osa-diagnosed");
const ALUK_EPWORTH = aluk("Epworth Sleepiness Scale", "epworth-sleepiness-scale");
const SC_APNOEA = sleepCharity("Sleep apnoea", "adults/sleep-disorders/sleep-apnoea/");
const SC_ALCOHOL = sleepCharity("Alcohol and sleep", "adults/alcohol-and-sleep/");
const SC_HYGIENE = sleepCharity("Sleep hygiene", "adults/sleep-hygiene/");
const SC_FAQS = sleepCharity("FAQs", "adults/faqs/");
const SC_POSITIONS = sleepCharity("Sleeping positions", "adults/sleeping-positions/");
const SC_ENVIRONMENT = sleepCharity("Sleep environment", "adults/sleep-environment/");
const SC_ROAD = sleepCharity("Road safety fatigue", "adults/road-safety-fatigue/");
const SC_HELPLINE = sleepCharity("National Sleep Helpline", "national-sleep-helpline/");
const NI_SNORING: LearnSource = { label: "nidirect: Snoring", url: "https://www.nidirect.gov.uk/conditions/snoring" };
const NI_OSA: LearnSource = { label: "nidirect: Obstructive sleep apnoea (OSA)", url: "https://www.nidirect.gov.uk/conditions/obstructive-sleep-apnoea-osa" };
const GOV_SLEEPINESS: LearnSource = { label: "GOV.UK: Excessive sleepiness and driving", url: "https://www.gov.uk/excessive-sleepiness-and-driving" };

export const snoringAnswers: LearnArticle[] = [
  {
    id: "sn-what-it-is",
    kicker: "Understanding",
    question: "Why do people snore?",
    hook: "The tongue, mouth, throat and nose relax and narrow in sleep. As air passes, they vibrate, and that is the sound.",
    short: "Snoring is very common and is not usually caused by anything serious. It is caused by things such as your tongue, mouth, throat or airways in your nose vibrating as you breathe. It happens because these parts of your body relax and narrow when you're asleep.",
    sections: [
      {
        heading: "A very common noise",
        paragraphs: [
          "Snoring is very common and is not usually caused by anything serious. There are things that can help if it's a problem.",
        ],
      },
      {
        heading: "What is vibrating",
        paragraphs: [
          "Snoring is caused by things such as your tongue, mouth, throat or airways in your nose vibrating as you breathe.",
          "It happens because these parts of your body relax and narrow when you're asleep.",
        ],
      },
      {
        heading: "Why sleep makes a difference",
        paragraphs: [
          "It's normal for the muscles and soft tissues in the throat to relax and collapse to some degree while sleeping. For most people this doesn't cause breathing problems.",
          "Alcohol relaxes the muscles in your jaw and throat more than usual, allowing them to droop and narrow your airway. This makes it harder for air to flow freely, causing vibrations that lead to snoring.",
        ],
      },
      {
        heading: "When it is something more",
        paragraphs: [
          "Sometimes snoring is caused by a condition like sleep apnoea, which is when your airways become temporarily blocked as you sleep.",
          "Obstructive sleep apnoea is caused by physical obstructions, such as large tonsils or adenoids, a large tongue or a floppy soft palate, which mean the airways become blocked.",
        ],
      },
    ],
    helps: [
      "Try to lose weight if you're overweight.",
      "Sleep on your side.",
      "Do not smoke, and do not drink too much alcohol.",
      "See a GP if lifestyle changes are not helping your snoring.",
    ],
    tryThisWeek: [
      "Sleep on your side.",
      "Do not drink too much alcohol.",
      "See a GP if changes are not helping.",
    ],
    ask: "What do you think is causing my snoring?",
    interactive: {
      kind: "timeline",
      title: "From falling asleep to a snore",
      steps: [
        { id: "relax", when: "As you fall asleep", title: "Muscles relax", points: ["Your tongue, mouth, throat and nose airways relax and narrow.", "For most people this doesn't cause breathing problems."] },
        { id: "vibrate", when: "As you breathe", title: "Vibration", points: ["These parts vibrate as you breathe, and that is snoring."] },
        { id: "alcohol", when: "After alcohol", title: "More narrowing", points: ["Alcohol relaxes the jaw and throat muscles more than usual, narrowing your airway."] },
        { id: "blocked", when: "Sometimes", title: "A blocked airway", points: ["In sleep apnoea, your airways become temporarily blocked as you sleep."] },
      ],
    },
    sources: [NHS_SNORING, SC_ALCOHOL, NI_OSA, SC_APNOEA],
    quiz: {
      question: "What makes the sound of snoring?",
      options: [{ text: "The mouth, throat or nose vibrating as you breathe", right: true }, { text: "The heart beating faster" }, { text: "The lungs filling with fluid" }],
      why: "Snoring is caused by things such as your tongue, mouth, throat or airways in your nose vibrating as you breathe.",
    },
  },
  {
    id: "sn-or-apnoea",
    kicker: "Sleep apnoea",
    question: "Is it snoring, or sleep apnoea?",
    hook: "Snoring is usually harmless. When breathing stops and starts, with gasps and daytime tiredness, it may be sleep apnoea.",
    short: "Snoring is very common and is not usually caused by anything serious. Sleep apnoea is when your breathing stops and starts while you sleep, often with gasping, snorting or choking noises and feeling very tired in the day. It needs to be treated because it can lead to more serious problems.",
    sections: [
      {
        heading: "Not the same thing",
        paragraphs: [
          "Snoring is very common and is not usually caused by anything serious.",
          "Sleep apnoea is when your breathing stops and starts while you sleep. The most common type is called obstructive sleep apnoea.",
        ],
      },
      {
        heading: "What happens in sleep apnoea",
        paragraphs: [
          "In obstructive sleep apnoea, your throat narrows or closes while you sleep and the muscles of your upper airway relax. You do not breathe enough, or your breathing stops for a short time.",
          "This wakes you up, or brings you out of a deep sleep, to start breathing again. You can stop and start breathing like this hundreds of times.",
        ],
      },
      {
        heading: "Signs that point to sleep apnoea",
        paragraphs: [
          "Signs at night include your breathing stopping and starting, making gasping, snorting or choking noises, waking up a lot, and loud snoring.",
          "During the day, you may also feel very tired, find it hard to concentrate, have mood swings or have a headache when you wake up.",
        ],
      },
      {
        heading: "Often noticed by someone else",
        paragraphs: [
          "If you share a bedroom with someone, they might be more aware of your snoring and pauses in your breathing when you're asleep than you are.",
          "You'll usually have no memory of your interrupted breathing, so you may be unaware you have a problem.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Sleep apnoea needs to be treated because it can lead to more serious problems. Without treatment, it can lead to high blood pressure, a higher chance of having a stroke, type 2 diabetes and heart disease.",
        ],
      },
    ],
    helps: [
      "See a GP if your breathing stops and starts while you sleep.",
      "See a GP if you make gasping, snorting or choking noises while you sleep.",
      "See a GP if you always feel very tired during the day.",
      "Ask someone to stay with you while you sleep so they can check for the symptoms.",
      "If someone else has seen you have the symptoms, bring them with you to the GP.",
    ],
    tryThisWeek: [
      "Ask someone to check while you sleep.",
      "Bring them with you to the GP.",
      "See a GP if you are always very tired.",
    ],
    ask: "Could my snoring be sleep apnoea?",
    interactive: {
      kind: "signs",
      title: "What has been noticed?",
      intro: "Tick anything you, or the person you share a room with, have noticed. The ones you tick make a list to take to the GP.",
      signs: [
        "Breathing stops and starts",
        "Gasping, snorting or choking noises",
        "Waking up a lot",
        "Loud snoring",
        "Feeling very tired in the day",
        "Finding it hard to concentrate",
        "Mood swings",
        "A headache on waking",
      ],
      after: "See a GP if you have any of the main symptoms of sleep apnoea. If someone else has seen you have the symptoms, it can help to bring them with you to the GP.",
      copyHeading: "Signs to tell the GP",
    },
    sources: [NHS_APNOEA, ALUK_OSA, NHS_SNORING, NI_OSA],
    quiz: {
      question: "What sets sleep apnoea apart from ordinary snoring?",
      options: [{ text: "Breathing stops and starts during sleep", right: true }, { text: "It is always quieter" }, { text: "It only happens in the daytime" }],
      why: "Sleep apnoea is when your breathing stops and starts while you sleep.",
    },
  },
  {
    id: "sn-causes",
    kicker: "Causes",
    question: "What makes snoring worse?",
    hook: "Extra weight, smoking, too much alcohol and sleeping on your back all make snoring more likely. So can a blocked nose.",
    short: "You're more likely to snore if you are overweight, smoke, drink too much alcohol or sleep on your back. Sleeping pills can sometimes cause snoring. A blocked or narrow nose, including from nasal polyps, can play a part too.",
    sections: [
      {
        heading: "The main things",
        paragraphs: [
          "You're more likely to snore if you are overweight, smoke, drink too much alcohol or sleep on your back.",
        ],
      },
      {
        heading: "Alcohol",
        paragraphs: [
          "Drinking large amounts of alcohol can make breathing more difficult during sleep and increase snoring.",
          "Drinking alcohol, particularly before going to sleep, can make snoring and sleep apnoea worse.",
        ],
      },
      {
        heading: "Sleeping pills",
        paragraphs: [
          "Sleeping pills can sometimes cause snoring.",
          "Medicines with a sedative effect, such as sleeping tablets or tranquillisers, are among the things that can narrow the airway in obstructive sleep apnoea.",
        ],
      },
      {
        heading: "Sleeping on your back",
        paragraphs: [
          "The Sleep Charity says sleeping on your back, with arms by your sides, can ease back and neck pain and acid reflux. However, it can lead to snoring.",
        ],
      },
      {
        heading: "A blocked nose",
        paragraphs: [
          "Blocked or narrow airways in your nose are one possible cause of snoring.",
          "Nasal polyps are painless soft growths inside your nose that can keep growing and block your nose if not treated. Their symptoms include a blocked nose and snoring.",
        ],
      },
    ],
    helps: [
      "Try to lose weight if you're overweight.",
      "Do not smoke.",
      "Do not drink too much alcohol.",
      "Do not take sleeping pills, as these can sometimes cause snoring.",
      "Sleep on your side.",
      "See a GP if you think you may have nasal polyps.",
    ],
    tryThisWeek: [
      "Do not drink too much alcohol.",
      "Sleep on your side.",
      "Avoid sleeping pills.",
    ],
    ask: "Which of these is most likely to be behind my snoring?",
    interactive: {
      kind: "risk-check",
      title: "What could be adding to your snoring?",
      intro: "Tick any that apply to you. Most of them can be changed or treated.",
      items: [
        { id: "weight", label: "Being overweight", note: "You're more likely to snore if you are overweight. Try to lose weight if you're overweight.", changeable: true },
        { id: "smoking", label: "Smoking", note: "You're more likely to snore if you smoke.", changeable: true },
        { id: "alcohol", label: "Drinking too much alcohol", note: "Alcohol relaxes the muscles in your jaw and throat more than usual, narrowing your airway.", changeable: true },
        { id: "back", label: "Sleeping on your back", note: "Sleep on your side: a tennis ball on the back of your sleepwear, a special pillow or a bed wedge can help.", changeable: true },
        { id: "pills", label: "Sleeping pills", note: "Do not take sleeping pills, as these can sometimes cause snoring.", changeable: true },
        { id: "nose", label: "A blocked or narrow nose", note: "Nasal dilators or strips, decongestants or nasal sprays can help. Nasal polyps need a GP.", changeable: true },
      ],
    },
    sources: [NHS_SNORING, SC_ALCOHOL, NI_OSA, SC_POSITIONS, NHS_POLYPS],
    quiz: {
      question: "Which sleeping position makes snoring more likely?",
      options: [{ text: "On your back", right: true }, { text: "On your side" }, { text: "Position makes no difference" }],
      why: "You're more likely to snore if you are overweight, smoke, drink too much alcohol or sleep on your back.",
    },
  },
  {
    id: "sn-when-to-see-gp",
    kicker: "Getting help",
    question: "When should I see a GP about snoring?",
    hook: "When simple changes are not working, when it is taking a toll on you or your partner, or when there are gasps and pauses.",
    short: "See a GP if lifestyle changes are not helping, if your snoring is having a big impact on your or your partner's life, or if you feel sleepy during the day, stop and start breathing or gasp in your sleep. The GP will look inside your mouth and nose. It can help to bring someone who can describe what your snoring is like.",
    sections: [
      {
        heading: "When to go",
        paragraphs: [
          "See a GP if lifestyle changes are not helping your snoring, or if your snoring is having a big impact on your or your partner's life.",
          "See a GP if you feel sleepy during the day, your breathing stops and starts while you sleep, or you make gasping or choking noises while you sleep. You may have sleep apnoea, which can be serious if not treated.",
        ],
      },
      {
        heading: "What happens at the appointment",
        paragraphs: [
          "The GP will look inside your mouth and nose to check for any problems that might be causing your snoring.",
          "It can help to bring someone with you to your appointment who can describe what your snoring is like, such as a partner.",
          "The GP may do a blood test or refer you to a specialist for treatment or further tests if they're not sure what the cause is.",
        ],
      },
      {
        heading: "Keeping notes first",
        paragraphs: [
          "You might find it helpful to keep a symptom and sleep diary to take to your GP appointment. Ask people you're close to about any symptoms too.",
          "Take a note of night-time and day-time symptoms, when your symptoms have been better or worse, and how they have affected you at work.",
        ],
      },
      {
        heading: "If sleep apnoea is possible",
        paragraphs: [
          "If a GP thinks you might have sleep apnoea, they may refer you to a specialist sleep clinic for tests. You can usually do this at home, but sometimes you may need to stay in the clinic overnight.",
          "Your GP may be able to refer you more quickly if you are pregnant, have a job that involves driving, are going to have major surgery soon, have heart rhythm problems or have high blood pressure.",
        ],
      },
    ],
    helps: [
      "See a GP if lifestyle changes are not helping your snoring.",
      "Bring someone who can describe your snoring, such as a partner.",
      "Keep a symptom and sleep diary to take to your GP appointment.",
      "If you think you need a quicker referral, talk to your GP.",
      "See a GP if you've been feeling tired for a few weeks and you're not sure why.",
    ],
    tryThisWeek: [
      "Keep a sleep diary.",
      "Bring your partner along.",
      "See a GP if changes are not helping.",
    ],
    ask: "Do I need a sleep study?",
    interactive: {
      kind: "scenarios",
      title: "Is it time to see a GP?",
      scenarios: [
        {
          id: "not-helping",
          situation: "You've tried sleeping on your side and cutting back on alcohol, but the snoring carries on.",
          options: [{ text: "See a GP", best: true }, { text: "Put up with it" }],
          why: "See a GP if lifestyle changes are not helping your snoring.",
        },
        {
          id: "pauses",
          situation: "Your partner says your breathing sometimes stops, and then you gasp.",
          options: [{ text: "See a GP", best: true }, { text: "Wait and see if it goes" }],
          why: "See a GP if your breathing stops and starts while you sleep, or you make gasping or choking noises. You may have sleep apnoea, which can be serious if not treated.",
        },
        {
          id: "describe",
          situation: "You have a GP appointment, but you have never heard your own snoring.",
          options: [{ text: "Bring someone who can describe it", best: true }, { text: "Guess what it sounds like" }],
          why: "It can help to bring someone with you to your appointment who can describe what your snoring is like, such as a partner.",
        },
      ],
    },
    sources: [NHS_SNORING, NHS_APNOEA, ALUK_DIAGNOSIS, NHS_TIRED],
    quiz: {
      question: "What will the GP usually look at?",
      options: [{ text: "Inside your mouth and nose", right: true }, { text: "Your eyesight" }, { text: "Your hearing" }],
      why: "The GP will look inside your mouth and nose to check for any problems that might be causing your snoring.",
    },
  },
  {
    id: "sn-self-help",
    kicker: "Self-help",
    question: "Can weight, alcohol and sleeping position really help?",
    hook: "Simple changes can stop or reduce snoring: losing extra weight, easing off alcohol and staying on your side.",
    short: "Simple lifestyle changes can help stop or reduce snoring. Try to lose weight if you're overweight, sleep on your side, and do not smoke or drink too much alcohol. Do not take sleeping pills, as these can sometimes cause snoring.",
    sections: [
      {
        heading: "Simple changes first",
        paragraphs: [
          "Simple lifestyle changes can help stop or reduce snoring.",
        ],
      },
      {
        heading: "Weight",
        paragraphs: [
          "You're more likely to snore if you are overweight. Try to lose weight if you're overweight.",
          "Obstructive sleep apnoea in adults is closely linked to being very overweight. If you're very overweight your GP can help.",
        ],
      },
      {
        heading: "Alcohol",
        paragraphs: [
          "Do not drink too much alcohol. Alcohol relaxes the muscles in your jaw and throat more than usual, allowing them to droop and narrow your airway.",
          "Drinking alcohol, particularly before going to sleep, can make snoring and sleep apnoea worse.",
          "To keep health risks from alcohol to a low level, men and women are advised not to drink more than 14 units a week on a regular basis.",
        ],
      },
      {
        heading: "Sleeping position",
        paragraphs: [
          "Sleep on your side. Try taping or stitching a tennis ball to the back of your sleepwear, or buy a special pillow or bed wedge to help keep you on your side.",
          "For people whose sleep apnoea is worse on their back, Asthma + Lung UK lists other aids, such as special backpacks, firm pillows and a device which vibrates if you move onto your back.",
        ],
      },
      {
        heading: "Smoking and sleeping pills",
        paragraphs: [
          "Do not smoke. Do not take sleeping pills, as these can sometimes cause snoring.",
        ],
      },
    ],
    helps: [
      "Try to lose weight if you're overweight.",
      "Sleep on your side, with a tennis ball on the back of your sleepwear, a special pillow or a bed wedge.",
      "Do not drink too much alcohol.",
      "Do not drink more than 14 units of alcohol a week on a regular basis.",
      "Do not smoke.",
      "Do not take sleeping pills.",
    ],
    tryThisWeek: [
      "Try a tennis ball on your sleepwear.",
      "Keep to 14 units a week or fewer.",
      "Do not take sleeping pills.",
    ],
    ask: "Would losing weight or changing how I sleep help my snoring?",
    interactive: {
      kind: "scenarios",
      title: "Small choices at bedtime",
      scenarios: [
        {
          id: "nightcap",
          situation: "It's late, and you're thinking about one more drink before bed.",
          options: [{ text: "Leave it for tonight", best: true }, { text: "Have a nightcap to sleep better" }],
          why: "Drinking alcohol, particularly before going to sleep, can make snoring and sleep apnoea worse.",
        },
        {
          id: "back",
          situation: "You keep rolling onto your back in the night.",
          options: [{ text: "Try a tennis ball on your sleepwear, or a bed wedge", best: true }, { text: "Nothing can be done about it" }],
          why: "Try taping or stitching a tennis ball to the back of your sleepwear, or buy a special pillow or bed wedge to help keep you on your side.",
        },
        {
          id: "pills",
          situation: "You cannot get to sleep and think about taking a sleeping pill.",
          options: [{ text: "Leave it", best: true }, { text: "Take one to sleep more deeply" }],
          why: "Do not take sleeping pills, as these can sometimes cause snoring.",
        },
      ],
    },
    sources: [NHS_SNORING, SC_ALCOHOL, NHS_UNITS, ALUK_TREATMENTS, NI_OSA],
    quiz: {
      question: "What can help keep you on your side at night?",
      options: [{ text: "A tennis ball on the back of your sleepwear", right: true }, { text: "A sleeping pill" }, { text: "A nightcap" }],
      why: "Try taping or stitching a tennis ball to the back of your sleepwear, or buy a special pillow or bed wedge to help keep you on your side.",
    },
  },
  {
    id: "sn-devices",
    kicker: "Treatment",
    question: "Do mouth devices and nasal strips work?",
    hook: "The right device depends on the cause: a tongue in the way, a mouth that falls open, or a nose that is blocked or narrow.",
    short: "Treatment for snoring depends on the cause, so talk to a doctor about the best treatment for you. A mandibular advancement device brings your tongue and jaw forward; a chin strap or vestibular shield helps if your mouth falls open. Nasal dilators or strips hold a blocked or narrow nose open while you sleep.",
    sections: [
      {
        heading: "Treatment depends on the cause",
        paragraphs: [
          "Treatment for snoring depends on the cause. Talk to a doctor about the best snoring treatment for you.",
        ],
      },
      {
        heading: "If your tongue blocks your throat",
        paragraphs: [
          "If your tongue partially blocks the back of your throat, a device you wear in your mouth to bring your tongue forward may help. This is called a mandibular advancement device.",
          "It fits over your teeth, like a gum shield or mouth guard, and holds your jaw forward so there is more space at the back of your mouth. It helps stop snoring and pauses in your breathing.",
        ],
      },
      {
        heading: "Getting one fitted",
        paragraphs: [
          "A specially trained dentist will take an impression of your teeth and arrange for your mandibular advancement splint to be made and fitted properly.",
          "You need to have your teeth checked first. If you have problems with your teeth or gums, like tooth decay, gum disease or tooth loss, wearing an oral device will not be suitable for you.",
        ],
      },
      {
        heading: "If your mouth falls open",
        paragraphs: [
          "If your mouth falls open when you're asleep, a chin strap can hold your mouth closed. Or a device you wear in your mouth, called a vestibular shield, can make you breathe through your nose while you sleep.",
        ],
      },
      {
        heading: "If your nose is blocked or narrow",
        paragraphs: [
          "For blocked or narrow airways in your nose, special devices called nasal dilators, or strips, hold your nose open while you sleep.",
          "Decongestants or nasal sprays can reduce swelling inside your nose.",
        ],
      },
    ],
    helps: [
      "Talk to a doctor about the best snoring treatment for you.",
      "Have your teeth checked before you get fitted for a mandibular advancement splint.",
      "Ask whether a chin strap or vestibular shield could help if your mouth falls open when you're asleep.",
      "Ask about nasal dilators or strips if the airways in your nose are blocked or narrow.",
    ],
    tryThisWeek: [
      "Ask a doctor which treatment suits you.",
      "Get your teeth checked first.",
      "Ask about nasal dilators or strips.",
    ],
    ask: "Would a mouth device help me, and where can I get one?",
    interactive: {
      kind: "flip-cards",
      title: "The devices, turned over",
      intro: "Tap a card to see what each device does.",
      cards: [
        { id: "mad", front: "Mandibular advancement device", when: "Tongue partly blocking the throat", back: "Fits over your teeth like a gum shield and holds your jaw forward, so there is more space at the back of your mouth." },
        { id: "chin", front: "Chin strap", when: "Mouth falling open in sleep", back: "Holds your mouth closed while you sleep." },
        { id: "shield", front: "Vestibular shield", when: "Mouth falling open in sleep", back: "A device you wear in your mouth to make you breathe through your nose while you sleep." },
        { id: "dilators", front: "Nasal dilators or strips", when: "Blocked or narrow nose airways", back: "Hold your nose open while you sleep." },
        { id: "sprays", front: "Decongestants or nasal sprays", when: "Swelling inside the nose", back: "Reduce swelling inside your nose." },
      ],
    },
    sources: [NHS_SNORING, ALUK_TREATMENTS, NI_OSA],
    quiz: {
      question: "What does a mandibular advancement device do?",
      options: [{ text: "Holds your jaw forward", right: true }, { text: "Blows air into a mask" }, { text: "Holds your mouth closed" }],
      why: "It fits over your teeth, like a gum shield or mouth guard, and holds your jaw forward so there is more space at the back of your mouth.",
    },
  },
  {
    id: "sn-nose",
    kicker: "Your nose",
    question: "Could a blocked nose or an allergy be making me snore?",
    hook: "Blocked or narrow airways in the nose are one cause of snoring. Allergies, irritants and nasal polyps can all block it.",
    short: "Blocked or narrow airways in your nose are one possible cause of snoring. Allergies, irritants like smoke, and nasal polyps can all block the nose. A pharmacist can advise about medicines that help, but decongestant sprays should not be used for more than 5 days.",
    sections: [
      {
        heading: "The nose and snoring",
        paragraphs: [
          "Snoring can come from the airways in your nose vibrating as you breathe. Blocked or narrow airways in your nose are one possible cause.",
        ],
      },
      {
        heading: "Allergies",
        paragraphs: [
          "Allergic rhinitis is where your nose gets irritated by something you're allergic to, such as pollen. Symptoms include sneezing and a runny or blocked nose.",
          "Common allergies include pollen, house dust mites, dander from animals such as dogs and cats, and mould.",
        ],
      },
      {
        heading: "When it is not an allergy",
        paragraphs: [
          "Non-allergic rhinitis happens when the inside of your nose becomes irritated, causing a blocked or runny nose. Causes include changes in the weather, smoke, perfume and paint fumes, and alcohol and spicy food.",
          "Some medicines can cause it, as can using decongestant nasal sprays for longer than it says on the packet.",
        ],
      },
      {
        heading: "Help from a pharmacist",
        paragraphs: [
          "A pharmacist can advise you about medicines that can help, such as antihistamines, decongestant nasal sprays, steroid nasal sprays, and salt water sprays or rinses.",
          "Do not use decongestant nasal sprays or drops for more than 5 days, as this can make your blocked nose worse.",
          "Speak to a GP or pharmacist before using decongestants if you have high blood pressure or heart disease, or you're taking any other medicines.",
        ],
      },
      {
        heading: "Nasal polyps",
        paragraphs: [
          "Nasal polyps are painless soft growths inside your nose. Their symptoms include a blocked nose and snoring.",
          "If you have nasal polyps, you'll usually be given steroid nose drops or a spray to shrink them.",
        ],
      },
    ],
    helps: [
      "Try to avoid the things that trigger your allergies, if you can.",
      "Ask a pharmacist about medicines that can help with a blocked nose.",
      "Do not use decongestant nasal sprays or drops for more than 5 days.",
      "Speak to a GP or pharmacist before using decongestants if you have high blood pressure or heart disease.",
      "See a GP if your symptoms are affecting your sleep and everyday life.",
    ],
    tryThisWeek: [
      "Avoid your allergy triggers.",
      "Ask a pharmacist about your blocked nose.",
      "Use decongestant sprays for 5 days at most.",
    ],
    ask: "Could a blocked nose or allergy be adding to my snoring?",
    interactive: {
      kind: "risk-check",
      title: "What might be blocking your nose?",
      intro: "Tick any that seem to set your nose off. Some can be avoided; some need a pharmacist or GP.",
      items: [
        { id: "pollen", label: "Pollen", note: "Do not go outside or dry clothes outside when the pollen count is high, if possible.", changeable: true },
        { id: "dust", label: "House dust mites", note: "Use synthetic bedding and covers, and wash bedding regularly at 60C and above.", changeable: true },
        { id: "pets", label: "Pets", note: "Do not allow pets in bedrooms.", changeable: true },
        { id: "fumes", label: "Smoke, perfume or paint fumes", note: "These can cause non-allergic rhinitis. Try to avoid the things that trigger your symptoms.", changeable: true },
        { id: "weather", label: "Changes in the weather", note: "Changes in temperature or humidity can cause non-allergic rhinitis.", changeable: false },
        { id: "sprays", label: "Using decongestant sprays a lot", note: "Do not use them for more than 5 days, as this can make your blocked nose worse.", changeable: true },
        { id: "polyps", label: "Nasal polyps", note: "Soft growths that can block your nose. See a GP if you think you may have them.", changeable: false },
      ],
    },
    sources: [NHS_SNORING, NHS_ALLERGIC, NHS_NON_ALLERGIC, NHS_DECONGESTANTS, NHS_POLYPS],
    quiz: {
      question: "How long can decongestant nasal sprays be used for?",
      options: [{ text: "No more than 5 days", right: true }, { text: "A month" }, { text: "As long as you like" }],
      why: "Do not use decongestant nasal sprays or drops for more than 5 days, as this can make your blocked nose worse.",
    },
  },
  {
    id: "sn-surgery",
    kicker: "Treatment",
    question: "Is surgery ever the answer for snoring?",
    hook: "Sometimes, if nothing else has helped. But it is not widely available on the NHS, and snoring can come back.",
    short: "Surgery is sometimes used to treat snoring if other treatments do not help. But it's not widely available on the NHS, it does not always work and snoring can come back afterwards. Whether it would suit someone is decided after a specialist assessment at the hospital.",
    sections: [
      {
        heading: "Only if other treatments do not help",
        paragraphs: [
          "Surgery is sometimes used to treat snoring if other treatments do not help.",
          "But it's not widely available on the NHS, it does not always work and snoring can come back afterwards.",
        ],
      },
      {
        heading: "A specialist decides",
        paragraphs: [
          "You will be advised if surgery would be a suitable treatment for you following specialist assessment at the hospital.",
        ],
      },
      {
        heading: "Surgery for sleep apnoea",
        paragraphs: [
          "If you have large tonsils and adenoids, your doctor may suggest having surgery to remove them.",
          "For most people with obstructive sleep apnoea surgery isn't appropriate, and it may only be considered as a last resort if other treatments haven't helped.",
        ],
      },
      {
        heading: "Surgery for nasal polyps",
        paragraphs: [
          "If nasal polyps show no sign of improvement after about 12 weeks, the GP may suggest surgery to remove them.",
          "Most people who have surgery see an improvement, but it's common for polyps to grow back, usually within a few years.",
        ],
      },
    ],
    helps: [
      "Talk to a doctor about the best snoring treatment for you.",
      "Try other treatments first, as surgery is only sometimes used if they do not help.",
      "You may need to keep using a steroid nasal spray after surgery for nasal polyps, to stop them returning quickly.",
    ],
    tryThisWeek: [
      "Talk to a doctor about treatment.",
      "Try other treatments first.",
      "Keep using the spray after polyp surgery.",
    ],
    ask: "Is surgery an option for me, or should I try other treatments first?",
    interactive: {
      kind: "scenarios",
      title: "Weighing up an operation",
      scenarios: [
        {
          id: "quick-fix",
          situation: "Someone tells you an operation is the quickest fix for snoring.",
          options: [{ text: "Try other treatments first", best: true }, { text: "Ask for surgery straight away" }],
          why: "Surgery is sometimes used if other treatments do not help. But it's not widely available on the NHS, it does not always work and snoring can come back afterwards.",
        },
        {
          id: "polyps",
          situation: "Your nasal polyps have not improved after about 12 weeks of treatment.",
          options: [{ text: "Talk to the GP, who may suggest surgery", best: true }, { text: "Stop all treatment" }],
          why: "If there's no sign of improvement after about 12 weeks, the GP may suggest surgery to remove your polyps.",
        },
        {
          id: "after",
          situation: "After polyp surgery, your nose feels clear.",
          options: [{ text: "Keep using the steroid spray as advised", best: true }, { text: "Stop the spray now" }],
          why: "You may need to keep using a steroid nasal spray after surgery to stop the polyps returning quickly.",
        },
      ],
    },
    sources: [NHS_SNORING, NI_SNORING, ALUK_TREATMENTS, NI_OSA, NHS_POLYPS],
    quiz: {
      question: "Is surgery for snoring widely available on the NHS?",
      options: [{ text: "No", right: true }, { text: "Yes, for anyone who snores" }, { text: "Only for people who snore loudly" }],
      why: "It's not widely available on the NHS, it does not always work and snoring can come back afterwards.",
    },
  },
  {
    id: "sn-partner",
    kicker: "Together",
    question: "How do I sleep beside someone who snores?",
    hook: "Earplugs and white noise can help in the short term. Snoring that is loud, frequent or ongoing is worth taking seriously.",
    short: "Snoring is one of the most common causes of disturbed sleep when sharing a bed. Earplugs can offer short-term relief, but loud, frequent or ongoing snoring is worth taking seriously, as it may sometimes point to sleep apnoea. It can help to go with your partner to the GP to describe what their snoring is like.",
    sections: [
      {
        heading: "A common cause of broken sleep",
        paragraphs: [
          "Snoring is one of the most common causes of disturbed sleep when sharing a bed.",
          "Sleep apnoea can also be difficult for a partner and put a strain on the relationship.",
        ],
      },
      {
        heading: "Earplugs and other short-term help",
        paragraphs: [
          "If someone's snoring affects their partner's sleep, the NHS suggests they consider asking their partner to use earplugs.",
          "For some people, simple solutions like earplugs can offer short-term relief.",
          "You could also try background sounds like rainfall, gentle music or white noise.",
        ],
      },
      {
        heading: "Taking it seriously",
        paragraphs: [
          "If snoring is loud, frequent or ongoing, it's important to take it seriously. Persistent snoring can affect sleep quality for both partners and may sometimes point to an underlying issue, such as sleep apnoea.",
        ],
      },
      {
        heading: "You may notice first",
        paragraphs: [
          "It can be hard to tell if someone has sleep apnoea. It may help for someone to stay with them while they sleep so they can check for the symptoms.",
          "It can help to bring someone to the GP appointment who can describe what the snoring is like, such as a partner.",
        ],
      },
      {
        heading: "Room for two",
        paragraphs: [
          "If you share a bed, the Sleep Charity says to make sure it's big enough for two people, so you can sleep without disturbing each other.",
        ],
      },
    ],
    helps: [
      "Consider earplugs if a partner's snoring affects your sleep.",
      "Try background sounds like rainfall, gentle music or white noise.",
      "If snoring is a regular problem, seek advice rather than ignore it.",
      "Go with your partner to the GP to describe what their snoring is like.",
      "Make sure a shared bed is big enough for two people.",
    ],
    tryThisWeek: [
      "Try earplugs.",
      "Try white noise.",
      "Offer to go to the GP with them.",
    ],
    ask: "Could my partner's snoring be sleep apnoea?",
    interactive: {
      kind: "scenarios",
      title: "Nights with a snorer",
      scenarios: [
        {
          id: "woken",
          situation: "Your partner's snoring keeps waking you.",
          options: [{ text: "Try earplugs for short-term relief", best: true }, { text: "Lie awake and say nothing" }],
          why: "For some people, simple solutions like earplugs can offer short-term relief.",
        },
        {
          id: "pauses",
          situation: "You notice pauses in your partner's breathing, then a gasp.",
          options: [{ text: "Encourage them to see a GP", best: true }, { text: "Assume it is ordinary snoring" }],
          why: "See a GP if your breathing stops and starts while you sleep, or you make gasping or choking noises. It may be sleep apnoea, which can be serious if not treated.",
        },
        {
          id: "appointment",
          situation: "Your partner has booked a GP appointment about their snoring.",
          options: [{ text: "Offer to go and describe it", best: true }, { text: "Let them guess what it sounds like" }],
          why: "It can help to bring someone with you to your appointment who can describe what your snoring is like, such as a partner.",
        },
      ],
    },
    sources: [NHS_SNORING, SC_FAQS, NHS_APNOEA, NHS_SLEEP_TIPS, SC_ENVIRONMENT],
    quiz: {
      question: "What does the Sleep Charity say about earplugs?",
      options: [{ text: "They can offer short-term relief", right: true }, { text: "They cure snoring" }, { text: "They should never be used" }],
      why: "For some people, simple solutions like earplugs can offer short-term relief.",
    },
  },
  {
    id: "sn-routine",
    kicker: "Every night",
    question: "What makes a better night's routine?",
    hook: "Regular times, an hour without screens, no late alcohol or nicotine, and a quiet, dark, cool room.",
    short: "Small changes to habits and routines that help you sleep can make a real difference. Go to bed and get up at similar times, avoid screens for an hour before bed, and avoid alcohol and nicotine in the hours before. A quiet, dark and cool bedroom helps too.",
    sections: [
      {
        heading: "Small changes",
        paragraphs: [
          "Making small changes to habits and routines that help you sleep can make a real difference. This is sometimes called sleep hygiene.",
          "For people with sleep apnoea, the NHS suggests good sleep habits like making sure your bedroom is dark and quiet, and going to bed and waking up at the same time each day.",
        ],
      },
      {
        heading: "A regular routine",
        paragraphs: [
          "Going to bed and getting up at similar times each day helps your body know when it's time to sleep. Try to keep your routine the same when you can, even on days when you're not working.",
          "Where possible, wake up at the same time each morning, and get out into natural light as soon as is practical.",
          "The NHS suggests trying to stick to the same sleep times and aiming for 6 to 9 hours of sleep.",
        ],
      },
      {
        heading: "Winding down",
        paragraphs: [
          "Try not to use phones, tablets or computers for an hour before bed. The blue light from screens can make it harder to fall asleep.",
          "Things that can help you relax include reading something you enjoy, meditation, breathing exercises, calming music or a podcast.",
        ],
      },
      {
        heading: "Food, drink and nicotine",
        paragraphs: [
          "Eating large meals close to bedtime may make it harder to fall asleep. Tea, coffee and some soft drinks contain caffeine, which can make you feel more awake.",
          "Alcohol and nicotine can also have disruptive effects on sleep, so try to avoid them 1 to 2 hours before bed.",
          "The Sleep Charity suggests avoiding stimulants that contain caffeine 8 hours before bedtime.",
        ],
      },
      {
        heading: "The bedroom",
        paragraphs: [
          "You may find it easier to sleep in a room that is quiet, dark and cool. Keeping clocks out of view can help.",
          "The Sleep Charity's National Sleep Helpline, on 03303 530 541, is run by a team of specialist trained sleep advisors.",
        ],
      },
    ],
    helps: [
      "Go to bed and get up at similar times each day, even on days off.",
      "Try not to use phones, tablets or computers for an hour before bed.",
      "Avoid alcohol and nicotine 1 to 2 hours before bed.",
      "Keep your bedroom quiet, dark and cool.",
      "Aim for 6 to 9 hours of sleep.",
      "Call the National Sleep Helpline on 03303 530 541 to talk about your sleep.",
    ],
    tryThisWeek: [
      "Keep the same bed and wake times.",
      "No screens for an hour before bed.",
      "Keep the bedroom quiet, dark and cool.",
    ],
    ask: "Which change to my sleep routine would help most?",
    interactive: {
      kind: "timeline",
      title: "A day that ends in better sleep",
      steps: [
        { id: "morning", when: "Morning", title: "Same time, natural light", points: ["Wake up at the same time each morning.", "Get out into natural light as soon as is practical."] },
        { id: "caffeine", when: "8 hours before bed", title: "Last caffeine", points: ["Avoid stimulants that contain caffeine from here on."] },
        { id: "alcohol", when: "1 to 2 hours before bed", title: "No alcohol or nicotine", points: ["Alcohol and nicotine can have disruptive effects on sleep."] },
        { id: "screens", when: "An hour before bed", title: "Screens off", points: ["Try not to use phones, tablets or computers.", "Read, listen to calming music or try breathing exercises."] },
        { id: "bed", when: "Bedtime", title: "Quiet, dark and cool", points: ["Keep clocks out of view.", "Try earplugs if noise is a problem."] },
        { id: "awake", when: "Still awake after 20 minutes", title: "Get up for a while", points: ["Sit somewhere comfortable and do something relaxing.", "Go back to bed when you feel sleepy."] },
      ],
    },
    sources: [NHS_SLEEP_TIPS, SC_HYGIENE, NHS_TIRED, NHS_APNOEA, SC_HELPLINE],
    quiz: {
      question: "How long before bed is it best to put phones and tablets away?",
      options: [{ text: "An hour", right: true }, { text: "Five minutes" }, { text: "There is no need" }],
      why: "Try not to use phones, tablets or computers for an hour before bed. The blue light from screens can make it harder to fall asleep.",
    },
  },
  {
    id: "sn-tiredness",
    kicker: "Daytime",
    question: "Why am I so tired in the day?",
    hook: "Being tired all the time without knowing why can be a sign of a problem. With snoring and gasps at night, it may be sleep apnoea.",
    short: "It's normal to feel tired sometimes, but being tired all the time without knowing why could be a sign of a problem. Daytime tiredness with waking at night, gasping or choking noises and loud snoring can be a sign of sleep apnoea. Excessive sleepiness can affect driving, and DVLA needs to be told about some sleep conditions.",
    sections: [
      {
        heading: "Tired all the time",
        paragraphs: [
          "It's normal to feel tired sometimes. But if you're tired all the time and do not know why, it could be a sign of a problem.",
          "Being tired during the day because of waking up at night, making gasping, snorting or choking noises at night and loud snoring can be a sign of sleep apnoea.",
        ],
      },
      {
        heading: "Checking how sleepy you are",
        paragraphs: [
          "The Epworth Sleepiness Scale asks how likely you are to fall asleep in everyday situations, such as sitting and reading or watching TV. You can share your results with your GP to help them understand your symptoms.",
          "Asthma + Lung UK says a total score between 11 and 24 might suggest you're feeling unusually sleepy during the day. The scale cannot tell you whether you have sleep apnoea on its own.",
        ],
      },
      {
        heading: "Sleepiness and driving",
        paragraphs: [
          "Excessive sleepiness means that you have had difficulty concentrating and have found yourself falling asleep, for example while at work, watching television or when driving.",
          "DVLA needs to be told if you have confirmed moderate or severe obstructive sleep apnoea syndrome with excessive sleepiness, or any other sleep condition that has caused excessive sleepiness for at least 3 months, including suspected or confirmed mild obstructive sleep apnoea syndrome.",
          "Ask your doctor if you're not sure if your excessive sleepiness will affect your driving.",
        ],
      },
      {
        heading: "Tiredness on the road",
        paragraphs: [
          "The Sleep Charity says one in six crashes resulting in death and injury on motorways and A roads are fatigue related.",
          "If you start to feel drowsy on a journey, pull over when it's safe and legal to do so and take a power nap or get 20 minutes rest.",
        ],
      },
      {
        heading: "When to see a GP",
        paragraphs: [
          "See a GP if you've been feeling tired for a few weeks and you're not sure why, or your tiredness affects your daily life.",
          "Also see a GP if you feel tired and have other symptoms, or you've been told you're making gasping, snorting or choking noises when you're asleep.",
        ],
      },
    ],
    helps: [
      "See a GP if you've been feeling tired for a few weeks and you're not sure why.",
      "Share your Epworth Sleepiness Scale results with your GP.",
      "Ask your doctor if you're not sure if your excessive sleepiness will affect your driving.",
      "Do not begin a long journey if you're tired.",
      "If you feel drowsy on a journey, pull over when it's safe and legal and rest for 20 minutes.",
    ],
    tryThisWeek: [
      "See a GP if tired for weeks.",
      "Share your sleepiness score with your GP.",
      "Do not start a long drive tired.",
    ],
    ask: "Is my tiredness linked to my snoring, and is it safe for me to drive?",
    interactive: {
      kind: "scenarios",
      title: "Tired moments",
      scenarios: [
        {
          id: "nodded",
          situation: "You snore loudly and nearly nodded off while driving last week.",
          options: [{ text: "Ask your doctor about your sleepiness and driving", best: true }, { text: "Keep driving as normal" }],
          why: "Ask your doctor if you're not sure if your excessive sleepiness will affect your driving.",
        },
        {
          id: "drowsy",
          situation: "Halfway through a long drive, you start to feel drowsy.",
          options: [{ text: "Pull over when safe and legal, and rest", best: true }, { text: "Open the window and keep going" }],
          why: "If you start to feel drowsy on your journey, pull over when it's safe and legal to do so and take a power nap or get 20 minutes rest.",
        },
        {
          id: "weeks",
          situation: "You've felt tired for a few weeks and do not know why.",
          options: [{ text: "See a GP", best: true }, { text: "Wait it out" }],
          why: "See a GP if you've been feeling tired for a few weeks and you're not sure why.",
        },
      ],
    },
    sources: [NHS_TIRED, ALUK_EPWORTH, GOV_SLEEPINESS, SC_ROAD],
    quiz: {
      question: "What might an Epworth score between 11 and 24 suggest?",
      options: [{ text: "Feeling unusually sleepy during the day", right: true }, { text: "Sleep apnoea, for certain" }, { text: "Normal daytime sleepiness" }],
      why: "A total score between 11 and 24 might suggest you're feeling unusually sleepy during the day. The scale cannot tell you whether you have sleep apnoea on its own.",
    },
  },
  {
    id: "sn-smoking",
    kicker: "Smoking",
    question: "Does smoking make snoring worse?",
    hook: "Smokers are more likely to snore. Stopping brings quick changes to breathing, and free help makes it easier.",
    short: "You're more likely to snore if you smoke, and smoking can make obstructive sleep apnoea worse. When you quit, you'll begin to see almost immediate improvements to your health. Local NHS stop smoking services are free and can improve your chances of quitting for good.",
    sections: [
      {
        heading: "A link with snoring",
        paragraphs: [
          "You're more likely to snore if you smoke. The NHS advice for snoring includes not smoking.",
          "Smoke is one of the common causes of non-allergic rhinitis, when the inside of your nose becomes irritated, causing a blocked or runny nose.",
        ],
      },
      {
        heading: "Smoking and sleep apnoea",
        paragraphs: [
          "Smoking can make obstructive sleep apnoea worse. Asthma + Lung UK suggests getting help to stop smoking.",
        ],
      },
      {
        heading: "Nicotine and sleep",
        paragraphs: [
          "Nicotine is a short-acting stimulant that can keep you awake. The Sleep Charity says to avoid it in the later part of the evening and during the night if you happen to wake up.",
        ],
      },
      {
        heading: "What happens when you quit",
        paragraphs: [
          "When you quit smoking, you'll begin to see almost immediate improvements to your health. It's never too late to quit.",
          "After 72 hours, if you notice that breathing feels easier, it's because your bronchial tubes have started to relax. After 3 to 9 months, any coughs, wheezing or breathing problems will be improving.",
        ],
      },
      {
        heading: "Help to stop",
        paragraphs: [
          "Local stop smoking services are free and can improve your chances of quitting for good. Your GP, pharmacist or health visitor can refer you, or you can phone your local stop smoking service.",
          "In England, the free Smokefree National Helpline is on 0300 123 1044.",
          "If you can reach 28 days smoke free, you're 5 times more likely to quit for good.",
        ],
      },
    ],
    helps: [
      "Do not smoke.",
      "Get help to stop smoking.",
      "Avoid nicotine in the later part of the evening.",
      "Ask your GP, pharmacist or health visitor to refer you to a local stop smoking service.",
      "Call the free Smokefree National Helpline on 0300 123 1044.",
      "Download the free NHS Quit Smoking app.",
    ],
    tryThisWeek: [
      "Get help to stop smoking.",
      "No nicotine late in the evening.",
      "Call the Smokefree helpline.",
    ],
    ask: "Can you help me stop smoking, and would it help my snoring?",
    interactive: {
      kind: "timeline",
      title: "After the last cigarette",
      steps: [
        { id: "20m", when: "After 20 minutes", title: "Pulse settling", points: ["Your pulse rate will already be starting to return to normal."] },
        { id: "8h", when: "After 8 hours", title: "Oxygen recovering", points: ["Your oxygen levels are recovering.", "Carbon monoxide in your blood will have reduced by half."] },
        { id: "48h", when: "After 48 hours", title: "Lungs clearing", points: ["Carbon monoxide has dropped to that of a non-smoker.", "Your lungs are clearing out mucus, and taste and smell are improving."] },
        { id: "72h", when: "After 72 hours", title: "Easier breathing", points: ["Your bronchial tubes have started to relax.", "Your energy will be increasing."] },
        { id: "12w", when: "After 2 to 12 weeks", title: "Better circulation", points: ["Blood pumps through to your heart and muscles much better."] },
        { id: "9m", when: "After 3 to 9 months", title: "Fewer coughs", points: ["Coughs, wheezing and breathing problems will be improving."] },
      ],
    },
    sources: [NHS_SNORING, NHS_NON_ALLERGIC, ALUK_TREATMENTS, NHS_QUIT, NHS_STOP_SERVICES, SC_HYGIENE],
    quiz: {
      question: "Are people who smoke more likely to snore?",
      options: [{ text: "Yes", right: true }, { text: "No, smoking stops snoring" }, { text: "Only if they also have a cold" }],
      why: "You're more likely to snore if you smoke.",
    },
  },
];
