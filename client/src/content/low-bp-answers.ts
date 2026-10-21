import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Low blood pressure page's pieces (content/library-conditions/heart-more.ts).
// Every sentence was written from wording checked on 21 October 2026 on the pages listed under each
// answer's `sources`; nothing is added that those pages do not say. Much of it comes from the NHS low blood
// pressure, fainting, dizziness and falls pages, Blood Pressure UK's "What is low blood pressure?", the
// British Heart Foundation's low blood pressure pages, Arrhythmia Alliance's STARS (syncope) pages and the
// DVLA pages on GOV.UK, and is credited to them. General information only; it never replaces what a
// person's own team tells them.

const nhs = (label: string, path: string): LearnSource => ({ label: `NHS: ${label}`, url: `https://www.nhs.uk/${path}` });
const bhf = (label: string, path: string): LearnSource => ({ label: `British Heart Foundation: ${label}`, url: `https://www.bhf.org.uk/informationsupport/${path}` });
const stars = (label: string, path: string): LearnSource => ({ label: `Arrhythmia Alliance (STARS): ${label}`, url: `https://heartrhythmalliance.org/stars/uk/${path}` });

const NHS_LBP = nhs("Low blood pressure (hypotension)", "conditions/low-blood-pressure-hypotension/");
const NHS_FAINTING = nhs("Fainting", "symptoms/fainting/");
const NHS_DIZZY = nhs("Dizziness", "symptoms/dizziness/");
const NHS_FALLS = nhs("Falls", "conditions/falls/");
const NHS_DEHYDRATION = nhs("Dehydration", "conditions/dehydration/");
const NHS_HEATWAVE = nhs("Heatwave: how to cope in hot weather", "live-well/seasonal-health/heatwave-how-to-cope-in-hot-weather/");
const NHS_HEAT_EXHAUSTION = nhs("Heat exhaustion and heatstroke", "conditions/heat-exhaustion-heatstroke/");
const NHS_ALCOHOL = nhs("The risks of drinking too much", "live-well/alcohol-advice/the-risks-of-drinking-too-much/");
const NHS_AMLODIPINE = nhs("Amlodipine", "medicines/amlodipine/");
const NHS_RAMIPRIL = nhs("Side effects of ramipril", "medicines/ramipril/side-effects-of-ramipril/");
const NHS_ANAPHYLAXIS = nhs("Anaphylaxis", "conditions/anaphylaxis/");
const BPUK_LOW: LearnSource = { label: "Blood Pressure UK: What is low blood pressure?", url: "https://www.bloodpressureuk.org/your-blood-pressure/understanding-your-blood-pressure/what-is-low-blood-pressure/" };
const BHF_LOW = bhf("Low blood pressure", "risk-factors/high-blood-pressure/low-blood-pressure");
const BHF_CAUSES = bhf("What causes low blood pressure and what are the symptoms?", "heart-matters-magazine/medical/low-blood-pressure");
const BHF_TIPS = bhf("5 tips to try if you have low blood pressure", "heart-matters-magazine/medical/how-to-treat-low-blood-pressure");
const BHF_SIDE_EFFECTS = bhf("What side effects can you get with blood pressure tablets?", "heart-matters-magazine/medical/blood-pressure-medicine-side-effects");
const BHF_DEHYDRATION = bhf("Dehydration: signs, causes, and tips to drink more water", "heart-matters-magazine/medical/signs-of-dehydration");
const AA_REFLEX = stars("Reflex syncope (vasovagal syncope)", "reflex-syncope-vasovagal-syncope");
const AA_FALLS = stars("Syncope and falls in the elderly", "syncope-and-falls-in-the-elderly");
const AA_SAFE = stars("Syncope and Falls in the Elderly (SaFE)", "programs/syncope-and-falls-in-the-elderly-safe");
const AA_TAKE = stars("Take Fainting to Heart", "programs/take-fainting-to-heart");
const GOV_BLACKOUTS: LearnSource = { label: "GOV.UK: Blackouts, fainting (syncope), loss of consciousness and driving", url: "https://www.gov.uk/blackouts-and-driving" };
const GOV_MEDICAL: LearnSource = { label: "GOV.UK: Medical conditions, disabilities and driving", url: "https://www.gov.uk/driving-medical-conditions" };

export const lowBpAnswers: LearnArticle[] = [
  {
    id: "lbp-what-it-is",
    kicker: "Understanding",
    question: "What is low blood pressure, and when does it matter?",
    hook: "A reading under 90/60mmHg. For many people it causes no trouble at all; it matters when it brings symptoms.",
    short: "Low blood pressure is a reading of less than 90/60mmHg. It does not always cause symptoms, but you may need treatment if it does. If your blood pressure is naturally low, this probably won't cause you any problems and won't need treating.",
    sections: [
      {
        heading: "The numbers",
        paragraphs: [
          "Low blood pressure, also known as hypotension, is a reading of less than 90/60mmHg.",
          "A reading is two numbers. The first, higher number is your blood pressure when your heart is pushing blood around your body. The second is the pressure in between heart beats.",
          "Only one of the numbers needs to be at this level or lower to count as low blood pressure.",
        ],
      },
      {
        heading: "Often nothing to worry about",
        paragraphs: [
          "If your blood pressure is naturally low, this probably won't cause you any problems and won't need treating. In fact, the lower your blood pressure, the lower your risk of heart disease and stroke.",
          "It may be low because you're fit and healthy, or you may have inherited it from your parents.",
        ],
      },
      {
        heading: "When it matters",
        paragraphs: [
          "Low blood pressure does not always cause symptoms, but you may need treatment if it does.",
          "It can sometimes mean that not enough blood is flowing to your brain or organs. This can cause symptoms such as feeling dizzy, faint or light-headed, feeling sick, blurred vision and feeling confused.",
          "If your blood pressure is too low it can cause health problems and may be a sign you have an underlying health condition.",
        ],
      },
      {
        heading: "Getting it checked",
        paragraphs: [
          "You can ask if a pharmacist can check your blood pressure, ask a practice nurse or GP to do it, or check it at home yourself using a home blood pressure monitor.",
          "See a GP if you keep getting symptoms of low blood pressure such as dizziness and fainting.",
        ],
      },
    ],
    helps: [
      "Get your blood pressure checked if you keep getting symptoms like dizziness, blurred vision or fainting.",
      "Ask a pharmacist, practice nurse or GP to check your blood pressure, or check it at home with a monitor.",
      "See a GP if you keep getting symptoms such as dizziness and fainting.",
      "Speak to your doctor or nurse if you're worried about low blood pressure.",
    ],
    tryThisWeek: [
      "Get your blood pressure checked.",
      "See a GP if symptoms keep coming.",
      "Tell your doctor or nurse if you're worried.",
    ],
    ask: "Is my blood pressure low, and does it need treating?",
    interactive: {
      kind: "signs",
      title: "What have you noticed?",
      intro: "Tick anything you keep getting. The ones you tick make a list to take to your GP.",
      signs: [
        "Lightheadedness or dizziness",
        "Feeling sick",
        "Blurred vision",
        "Generally feeling weak",
        "Confusion",
        "Fainting",
      ],
      after: "Get your blood pressure checked if you keep getting symptoms like these. See a GP if you keep getting symptoms of low blood pressure such as dizziness and fainting.",
      copyHeading: "Symptoms I keep getting",
    },
    sources: [NHS_LBP, BHF_LOW, BHF_CAUSES, BPUK_LOW],
    quiz: {
      question: "What reading counts as low blood pressure?",
      options: [{ text: "Less than 90/60mmHg", right: true }, { text: "Less than 120/80mmHg" }, { text: "Less than 140/90mmHg" }],
      why: "Low blood pressure, also known as hypotension, is a reading of less than 90/60mmHg.",
    },
  },
  {
    id: "lbp-postural",
    kicker: "Standing up",
    question: "Why do I feel dizzy when I stand up?",
    hook: "Getting up from a chair or out of bed can make blood pressure drop for a moment. The name for it is postural hypotension.",
    short: "If you get symptoms when you stand up or suddenly change position, you may have a type of low blood pressure called postural hypotension. The symptoms pass quickly as your body adjusts, but can put you at risk of falls. Getting up slowly helps.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "If you get symptoms when you stand up or suddenly change position, you may have a type of low blood pressure called postural hypotension.",
          "It is also called orthostatic hypotension. Changes in your posture can cause your blood pressure to drop, for example going from sitting or lying down to standing up.",
        ],
      },
      {
        heading: "What it feels like",
        paragraphs: [
          "You might feel dizzy or faint when you stand up. The symptoms pass quickly as your body adjusts, but can put you at risk of falls.",
          "Feeling dizzy when standing or sitting up suddenly can be caused by a sudden drop in blood pressure.",
        ],
      },
      {
        heading: "Why it happens",
        paragraphs: [
          "Blood Pressure UK says it's caused by changes to your arteries which happen as you get older, and by medicines to lower your blood pressure.",
          "Medicines for Parkinson's disease and erectile dysfunction increase the risk of orthostatic hypotension.",
        ],
      },
      {
        heading: "How it is checked",
        paragraphs: [
          "If you feel dizzy or faint when you stand up, you might need to have your blood pressure measured when you're lying down and again while you are standing up.",
          "You might be offered a tilt table test. You lie on a table that slowly tilts until you're almost upright, as if you were standing, while your blood pressure and pulse are monitored.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "Get up slowly from sitting to standing. Take care when getting out of bed, and move slowly from lying to sitting to standing.",
          "When you're getting up from sitting, cross and uncross your legs a few times before standing up.",
        ],
      },
    ],
    helps: [
      "Get up slowly from sitting to standing.",
      "Move slowly from lying to sitting to standing when you get out of bed.",
      "Cross and uncross your legs a few times before standing up.",
      "Ask whether your blood pressure should be measured lying down and again standing up.",
      "If you feel dizzy, lie down until the dizziness passes, then get up slowly.",
    ],
    tryThisWeek: [
      "Get up slowly.",
      "Cross and uncross your legs first.",
      "Lie down until dizziness passes.",
    ],
    ask: "Should my blood pressure be checked lying down and standing up?",
    interactive: {
      kind: "scenarios",
      title: "What would you do?",
      scenarios: [
        {
          id: "bed",
          situation: "You wake up and want to get out of bed quickly.",
          options: [{ text: "Move slowly from lying to sitting to standing", best: true }, { text: "Jump straight up" }],
          why: "Take care when getting out of bed. Move slowly from lying to sitting to standing.",
        },
        {
          id: "chair",
          situation: "You've been sitting in a chair for a while and need to get up.",
          options: [{ text: "Cross and uncross your legs a few times first", best: true }, { text: "Stand up as fast as you can" }],
          why: "When you're getting up from sitting, cross and uncross your legs a few times before standing up.",
        },
        {
          id: "spin",
          situation: "You stand up and the room starts to spin.",
          options: [{ text: "Lie down until the dizziness passes", best: true }, { text: "Keep walking to shake it off" }],
          why: "Lie down until the dizziness passes, then get up slowly.",
        },
      ],
    },
    sources: [NHS_LBP, BPUK_LOW, BHF_LOW, NHS_DIZZY, BHF_TIPS],
    quiz: {
      question: "What is postural hypotension?",
      options: [{ text: "Blood pressure dropping when you stand up or change position", right: true }, { text: "Blood pressure rising during exercise" }, { text: "A fast heartbeat at night" }],
      why: "If you get symptoms when you stand up or suddenly change position, you may have a type of low blood pressure called postural hypotension.",
    },
  },
  {
    id: "lbp-causes",
    kicker: "Causes",
    question: "Why is my blood pressure low?",
    hook: "Some people simply run low. For others, a medicine, not drinking enough or an illness is behind it.",
    short: "There are many possible causes of low blood pressure. It may be low because you're fit and healthy, or you may have inherited it from your parents. It can also be caused by some medicines, dehydration, pregnancy and conditions such as diabetes, Parkinson's disease and heart problems.",
    sections: [
      {
        heading: "Naturally low",
        paragraphs: [
          "Your blood pressure can vary depending on the time of day. What you're doing and how you're feeling can also affect it.",
          "Some people have a blood pressure level that is naturally low. It can be the result of a healthy lifestyle and being fit and active, and your genes may play a role.",
          "Some people develop low blood pressure as they get older.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "Medicines that can cause it include some heart medicines, high blood pressure medicines and water pills (diuretics).",
          "Medicines for depression can also cause it, as can some over-the-counter and herbal products.",
        ],
      },
      {
        heading: "Fluids and blood loss",
        paragraphs: [
          "When your body does not have enough water, there is less blood travelling around the body. This can lead to low blood pressure.",
          "Losing a lot of blood from an injury or internal bleeding reduces blood volume, leading to a severe drop in blood pressure.",
        ],
      },
      {
        heading: "Illness and pregnancy",
        paragraphs: [
          "Low blood pressure can be a symptom of conditions like Parkinson's disease, diabetes and heart conditions, including heart failure and some arrhythmias.",
          "Diabetes can affect the nerves leading to your blood vessels. If they are affected, your blood pressure might drop when you stand up because your blood vessels can't adjust to the new position quickly enough.",
          "Low blood pressure is fairly common in pregnancy, and not usually a cause for concern.",
        ],
      },
      {
        heading: "After meals and in the warm",
        paragraphs: [
          "Your blood pressure might drop when you've just eaten while your blood is carried to your gut, if you've been standing up for a long time, if you're dehydrated, and if the temperature is warm.",
        ],
      },
    ],
    helps: [
      "Ask your GP whether a medicine could be the cause; they may suggest changing it or altering your dose.",
      "Increase the amount of water you drink.",
      "Speak to your doctor or nurse if you're worried, as it could be a sign of another health problem.",
      "If you are on a daily fluid restriction for a heart condition, check with your doctor how much fluid you can drink.",
    ],
    tryThisWeek: [
      "Ask if a medicine could be the cause.",
      "Drink more water.",
      "Check your fluid limit first if you have one.",
    ],
    ask: "Could any of my medicines be lowering my blood pressure too much?",
    interactive: {
      kind: "risk-check",
      title: "What might be behind yours?",
      intro: "Tick any that apply to you. Some can be changed; some cannot.",
      items: [
        { id: "age", label: "Getting older", note: "Some people develop low blood pressure as they get older.", changeable: false },
        { id: "family", label: "Low blood pressure in the family", note: "You may have inherited it from your parents.", changeable: false },
        { id: "bp-medicines", label: "Blood pressure or heart medicines", note: "If a medicine is the cause, a GP may suggest changing it or altering your dose.", changeable: true },
        { id: "water-pills", label: "Water pills (diuretics)", note: "Water pills are one of the medicines that can cause low blood pressure.", changeable: true },
        { id: "fluids", label: "Not drinking enough", note: "When your body does not have enough water, there is less blood travelling around the body.", changeable: true },
        { id: "conditions", label: "Diabetes or Parkinson's disease", note: "Low blood pressure can be a symptom of conditions like Parkinson's disease and diabetes.", changeable: false },
        { id: "heart", label: "Heart failure or an arrhythmia", note: "Conditions that affect how your heart works can affect your blood pressure.", changeable: false },
        { id: "pregnancy", label: "Being pregnant", note: "After giving birth, blood pressure should go back to how it was before pregnancy.", changeable: false },
      ],
    },
    sources: [NHS_LBP, BHF_LOW, BHF_CAUSES, BPUK_LOW, BHF_DEHYDRATION, BHF_TIPS],
    quiz: {
      question: "Which of these can cause low blood pressure?",
      options: [{ text: "Water pills (diuretics)", right: true }, { text: "Eating too much salt" }, { text: "Drinking plenty of water" }],
      why: "Medicines that can cause it include some heart medicines, high blood pressure medicines and water pills (diuretics).",
    },
  },
  {
    id: "lbp-fainting",
    kicker: "Fainting",
    question: "Why do people faint, and what should I do?",
    hook: "A short blackout when blood pressure drops. Usually nothing serious, but always worth a check with a GP.",
    short: "Fainting is when you pass out for a short time, and it happens when your blood pressure drops. It's not usually a sign of something serious, but if it happens you should see a GP. If you feel like you're about to faint, lie down with your legs raised.",
    sections: [
      {
        heading: "What is happening",
        paragraphs: [
          "Fainting is when you pass out for a short time. Syncope is the medical term for it.",
          "Fainting happens when your blood pressure drops. At this time, your heart rate may also drop or even pause for a few seconds.",
        ],
      },
      {
        heading: "Common causes",
        paragraphs: [
          "Causes can include standing up too quickly, which could be a sign of low blood pressure, not eating or drinking enough, and being too hot.",
          "Being very upset, angry or in severe pain can also cause it, as can heart problems, taking drugs or drinking too much alcohol.",
          "Standing still in one position for a period of time, and seeing blood or having injections, can also bring on a faint.",
        ],
      },
      {
        heading: "The warning signs",
        paragraphs: [
          "Fainting usually happens suddenly. Symptoms can include dizziness, sweating, feeling warm or hot, feeling sick and changes to your vision.",
        ],
      },
      {
        heading: "If you feel faint",
        paragraphs: [
          "Lie down with your legs raised. If you cannot do this, sit with your head lowered between your knees.",
          "Drink some water. Cross your legs while standing up or rock up and down on your toes, and clench your fists.",
        ],
      },
      {
        heading: "Get it checked",
        paragraphs: [
          "It's probably nothing serious, but it's important to get checked by a GP to find out what might have caused it.",
          "Fainting is a symptom and should not be ignored. It could signal severe heart issues in certain groups, including people who faint during physical activity and those whose faints come with palpitations. If this could apply to you, discuss it with your doctor.",
        ],
      },
    ],
    helps: [
      "See a GP if you have fainted.",
      "If you feel faint, lie down with your legs raised, or sit with your head lowered between your knees.",
      "Drink some water.",
      "Cross your legs while standing up or rock up and down on your toes, and clench your fists.",
      "Call 999 if someone cannot be woken up within 1 minute, has chest pain or palpitations, or fainted while exercising.",
    ],
    tryThisWeek: [
      "See a GP after a faint.",
      "Lie down with your legs raised if faint.",
      "Cross your legs and clench your fists.",
    ],
    ask: "What should I do if I feel faint?",
    interactive: {
      kind: "timeline",
      title: "If you see someone faint",
      steps: [
        { id: "calm", when: "First", title: "Keep calm", points: ["Try to keep calm."] },
        { id: "respond", when: "Step 1", title: "Check they respond", points: ["Gently shake their shoulders and ask loudly if they're OK.", "If they do not respond, shout for help, tilt back their head and lift their chin."] },
        { id: "breathing", when: "Step 2", title: "Check their breathing", points: ["Listen for at least 10 seconds.", "If they're breathing normally, lay them on their back and raise their legs."] },
        { id: "pregnant", when: "If they're pregnant", title: "On their side", points: ["Especially after 28 weeks of pregnancy, it's better to lay them on their side."] },
        { id: "wake", when: "Usually within 30 seconds", title: "Waking up", points: ["The person usually wakes up within 30 seconds.", "Call 999 if they cannot be woken up within 1 minute."] },
      ],
    },
    sources: [NHS_FAINTING, AA_REFLEX, AA_TAKE],
    quiz: {
      question: "What should you do if you feel like you're about to faint?",
      options: [{ text: "Lie down with your legs raised", right: true }, { text: "Stand up and walk about" }, { text: "Hold your breath" }],
      why: "If you feel like you're about to faint, lie down with your legs raised. If you cannot do this, sit with your head lowered between your knees.",
    },
  },
  {
    id: "lbp-medicines-review",
    kicker: "Medicines",
    question: "Could my tablets be making my blood pressure too low?",
    hook: "Blood pressure tablets, water pills and some other medicines can push pressure down too far. A review can help, but do not stop them on your own.",
    short: "Some medicines can cause low blood pressure, including medicines for high blood pressure, heart problems and depression. If a medicine is the cause, your GP might try an alternative medicine or a different dose. Do not stop taking your medication without talking to a doctor first.",
    sections: [
      {
        heading: "Medicines that can lower it",
        paragraphs: [
          "Low blood pressure, and low blood pressure when you stand up, can be caused by medications. These include medications to lower blood pressure, antidepressants and beta blockers, which are used to treat heart problems.",
          "Water pills (diuretics) can also cause it.",
        ],
      },
      {
        heading: "Dizziness when starting",
        paragraphs: [
          "It's not unusual to feel dizzy or lightheaded when you first take blood pressure medicines, or if your dose is increased. Your body needs time to adjust to lower blood pressure.",
          "Many side effects, like mild headaches or dizziness, typically improve or disappear after a few weeks as your body gets used to the medicine.",
          "The NHS says that if ramipril makes you feel dizzy when you stand up, try getting up very slowly or stay sitting down until you feel better.",
        ],
      },
      {
        heading: "Asking for a review",
        paragraphs: [
          "If your GP thinks your low blood pressure is caused by a medication you're taking, they might want to try an alternative medication or a different dose.",
          "Your GP may change your prescription to ease side effects, such as changing the dose or the timings, or swapping you to another blood pressure lowering medicine.",
        ],
      },
      {
        heading: "Keep a note",
        paragraphs: [
          "Note down your side effects for the first 2 to 3 weeks on a new medicine. This can help your GP to see patterns, like if dizziness only happens an hour after taking the pill.",
        ],
      },
      {
        heading: "Do not stop on your own",
        paragraphs: [
          "Do not stop taking your medication without talking to a doctor first, as your blood pressure could increase to a dangerously high level.",
          "If you are concerned that your medicine is causing side effects, speak to your doctor or pharmacist for further advice.",
        ],
      },
    ],
    helps: [
      "Ask for a medicine review if you think a medicine is lowering your blood pressure too much.",
      "Note down your side effects for the first 2 to 3 weeks on a new medicine.",
      "Speak to your doctor or pharmacist if you're concerned your medicine is causing side effects.",
      "Do not stop taking your medication without talking to a doctor first.",
      "If your blood pressure medicine makes you dizzy, lie down until it passes and move slowly from sitting to standing.",
    ],
    tryThisWeek: [
      "Ask for a medicine review.",
      "Keep a note of side effects.",
      "Do not stop without talking to a doctor.",
    ],
    ask: "Could the dose or the timing of my tablets be changed to ease the dizziness?",
    interactive: {
      kind: "flip-cards",
      title: "Blood pressure medicines, turned over",
      intro: "Tap a card to see how each one lowers blood pressure.",
      cards: [
        { id: "beta", front: "Beta blockers", when: "Names end in 'olol', like bisoprolol", back: "Lower blood pressure by slowing down the rate and force of your heartbeat." },
        { id: "ace", front: "ACE inhibitors", when: "Names end in 'pril', like ramipril", back: "Help the blood vessels to relax and widen, lowering your blood pressure." },
        { id: "arb", front: "ARBs", when: "Names end in 'artan', like losartan", back: "Work similarly to ACE inhibitors, controlling the hormones that affect blood pressure." },
        { id: "ccb", front: "Calcium channel blockers", when: "Names end in 'pine', like amlodipine", back: "Help to relax the artery walls, making them wider, which allows more blood to pass through." },
        { id: "diuretic", front: "Diuretics (water tablets)", when: "Medicines like furosemide", back: "Help to remove excess fluid from the body, including from the blood." },
      ],
    },
    sources: [NHS_LBP, BHF_SIDE_EFFECTS, BPUK_LOW, NHS_RAMIPRIL, BHF_LOW],
    quiz: {
      question: "You think your tablets are making your blood pressure too low. What should you do?",
      options: [{ text: "Talk to your doctor or pharmacist first", right: true }, { text: "Stop taking them straight away" }, { text: "Halve the dose yourself" }],
      why: "Do not stop taking your medication without talking to a doctor first, as your blood pressure could increase to a dangerously high level.",
    },
  },
  {
    id: "lbp-standing-slowly",
    kicker: "Every day",
    question: "What everyday tricks help with low blood pressure?",
    hook: "Stretch before you sit up, cross your legs before you stand, and keep moving through the day.",
    short: "Get up slowly from sitting to standing, and take care when getting out of bed by moving from lying to sitting to standing. Do not sit or stand for long periods. Sleeping with your head raised can also help.",
    sections: [
      {
        heading: "Getting out of bed",
        paragraphs: [
          "Take care when getting out of bed. Move slowly from lying to sitting to standing.",
          "Try stretching out of bed to get the blood flowing around the body before you move to a sitting position, then stand slowly.",
        ],
      },
      {
        heading: "Getting up from a chair",
        paragraphs: [
          "When you're getting up from sitting, cross and uncross your legs a few times before standing up.",
          "You can try other simple movements to get the blood flowing before you stand up, such as straightening and bending your legs.",
        ],
      },
      {
        heading: "Keep moving",
        paragraphs: [
          "Do not sit or stand for long periods. Staying still for too long, such as sitting in a chair to watch the TV, can cause blood pressure to fall.",
          "If you can, go for regular walks throughout the day. Even short 10-minute strolls will help.",
        ],
      },
      {
        heading: "Raise the head of the bed",
        paragraphs: [
          "Sleeping with your head raised can also help. You can lift the top end of your bed, where your pillow sits, with extra pillows under your head or wedges under the mattress or bed legs.",
        ],
      },
      {
        heading: "If you feel faint",
        paragraphs: [
          "If you feel like you're about to faint, lie down with your legs raised. If you cannot do this, sit with your head lowered between your knees.",
          "You can also cross your legs while standing up or rock up and down on your toes, and clench your fists.",
        ],
      },
    ],
    helps: [
      "Get up slowly from sitting to standing.",
      "Stretch before sitting up in bed, then stand slowly.",
      "Cross and uncross your legs a few times before standing up.",
      "Go for regular walks through the day; even short 10-minute strolls will help.",
      "Try sleeping with the head of your bed raised.",
      "Do not bend down or change posture suddenly.",
    ],
    tryThisWeek: [
      "Stretch before you sit up.",
      "Cross your legs before standing.",
      "Take a 10-minute stroll.",
    ],
    ask: "Would raising the head of my bed help my symptoms?",
    interactive: {
      kind: "timeline",
      title: "Out of bed, step by step",
      steps: [
        { id: "stretch", when: "Still lying down", title: "Stretch first", points: ["Stretch to get the blood flowing around the body before you sit up."] },
        { id: "sit", when: "Next", title: "Sit up", points: ["Move slowly from lying to sitting."] },
        { id: "legs", when: "While sitting", title: "Get the blood moving", points: ["Cross and uncross your legs a few times.", "Or straighten and bend your legs."] },
        { id: "stand", when: "Then", title: "Stand slowly", points: ["Move slowly from sitting to standing."] },
        { id: "faint", when: "If you feel faint", title: "Lie back down", points: ["Lie down with your legs raised.", "If you cannot, sit with your head lowered between your knees."] },
      ],
    },
    sources: [NHS_LBP, BHF_TIPS, BHF_LOW, BPUK_LOW, NHS_FAINTING],
    quiz: {
      question: "What can you do just before standing up from a chair?",
      options: [{ text: "Cross and uncross your legs a few times", right: true }, { text: "Hold your breath" }, { text: "Stand up as fast as you can" }],
      why: "When you're getting up from sitting, cross and uncross your legs a few times before standing up.",
    },
  },
  {
    id: "lbp-fluids-salt",
    kicker: "Food & drink",
    question: "Should I drink more, eat differently or add salt?",
    hook: "More fluids and smaller meals help many people. Salt is something to add only if your doctor agrees.",
    short: "Increase the amount of water you drink; the NHS recommends six to eight glasses of fluid a day. Eat small, frequent meals, because blood pressure drops after eating. If your blood pressure is very low, your doctor may recommend more salt, but speak to them before increasing it.",
    sections: [
      {
        heading: "Drink enough",
        paragraphs: [
          "Increase the amount of water you drink.",
          "About 55 per cent of blood is made up of plasma, which is 90 per cent water. Drinking plenty of water is key to keeping your blood pressure healthy.",
          "The NHS recommends drinking six to eight glasses of fluid per day. Blood Pressure UK suggests around 2 litres through the day, so you don't get dehydrated.",
        ],
      },
      {
        heading: "If you're on a fluid limit",
        paragraphs: [
          "If your doctor has put you on fluid restriction, speak to them before increasing your fluid intake.",
          "If you have been told to limit fluids, for example because of heart failure, the usual goal of 6 to 8 glasses per day may not apply.",
        ],
      },
      {
        heading: "Caffeine and alcohol",
        paragraphs: [
          "The British Heart Foundation suggests steering clear of caffeine and alcohol, as they can make you dehydrated.",
          "Do not drink too much alcohol.",
        ],
      },
      {
        heading: "Smaller meals",
        paragraphs: [
          "Your blood pressure drops after eating, as more blood flows to the gut to help with digestion. Eat small, frequent meals.",
          "Lying down or sitting still for a while after eating may also help.",
          "Eating rapidly digested carbohydrates, such as white bread, pasta, rice, cakes and biscuits, can lead to a sudden drop in blood pressure. More wholegrains can help to keep your blood pressure up after eating.",
        ],
      },
      {
        heading: "Salt, only with your doctor",
        paragraphs: [
          "If your blood pressure is very low, your doctor may recommend increasing your salt intake. Speak to your doctor before increasing the amount of salt you eat.",
          "Choose healthy nutritious foods instead of salty processed foods. Olives, anchovies, smoked or tinned fish, and cottage cheese are good options.",
        ],
      },
    ],
    helps: [
      "Increase the amount of water you drink.",
      "Aim for six to eight glasses of fluid a day, unless you are on a fluid restriction.",
      "Eat small, frequent meals.",
      "Choose wholegrains over white bread, pasta and rice.",
      "Ask your doctor before adding more salt to your diet.",
    ],
    tryThisWeek: [
      "Drink a little more water.",
      "Swap big meals for smaller ones.",
      "Ask before adding salt.",
    ],
    ask: "Should I drink more, or add salt, and how much is right for me?",
    interactive: {
      kind: "scenarios",
      title: "Everyday choices",
      scenarios: [
        {
          id: "meal",
          situation: "A big roast lunch is on the table, and you often feel faint afterwards.",
          options: [{ text: "Eat a smaller meal, little and often", best: true }, { text: "Eat a large plate, then stand straight up" }],
          why: "Eat small, frequent meals. Lying down or sitting still for a while after eating may also help.",
        },
        {
          id: "fluid-limit",
          situation: "Your heart team has put you on a fluid restriction.",
          options: [{ text: "Ask them before drinking more", best: true }, { text: "Drink extra anyway" }],
          why: "If your doctor has put you on fluid restriction, speak to them before increasing your fluid intake.",
        },
        {
          id: "salt",
          situation: "You've read that salt can raise blood pressure.",
          options: [{ text: "Speak to your doctor first", best: true }, { text: "Add salt to every meal" }],
          why: "It's important to speak to your doctor before increasing the amount of salt you eat.",
        },
      ],
    },
    sources: [NHS_LBP, BHF_TIPS, BPUK_LOW, BHF_LOW, BHF_DEHYDRATION],
    quiz: {
      question: "How much fluid a day does the NHS recommend?",
      options: [{ text: "Six to eight glasses", right: true }, { text: "One glass" }, { text: "Twenty glasses" }],
      why: "The NHS recommends drinking six to eight glasses of fluid per day.",
    },
  },
  {
    id: "lbp-treatments",
    kicker: "Treatment",
    question: "Do compression stockings or medicines help?",
    hook: "Most people need no tablets at all. Support stockings, a medicine change or treating the cause usually work.",
    short: "If a cause can be found, a GP will be able to recommend treatment, such as changing medicines or wearing support stockings. Medicine to increase blood pressure is rarely needed, because simple lifestyle measures or treating the underlying cause is usually effective. When medicines are used, they include fludrocortisone.",
    sections: [
      {
        heading: "Finding the cause first",
        paragraphs: [
          "If a cause for low blood pressure can be found, a GP will be able to recommend treatment to ease your symptoms.",
          "If your blood pressure is naturally low and isn't causing you any problems, it probably won't need any treatment.",
        ],
      },
      {
        heading: "Support stockings",
        paragraphs: [
          "Wearing support stockings can improve circulation and increase blood pressure.",
          "They put extra pressure on your legs, which helps to improve circulation and raise your blood pressure. Speak to your GP first, because they aren't suitable for everyone.",
        ],
      },
      {
        heading: "Changing medicines",
        paragraphs: [
          "If a medicine is the cause, a GP may suggest changing it or altering your dose.",
          "If your adrenal glands have been damaged, you may be referred to a specialist called an endocrinologist, who might prescribe hormone replacement medication.",
        ],
      },
      {
        heading: "Medicines to raise blood pressure",
        paragraphs: [
          "Medicine to increase blood pressure is rarely needed because simple lifestyle measures or treating the underlying cause is usually effective.",
          "Depending on the cause, medicines can include fludrocortisone, a steroid that makes your kidneys retain water and salt, increasing your blood volume.",
          "Beta-agonists make the heart beat faster, while alpha-agonists narrow the blood vessels.",
        ],
      },
      {
        heading: "For fainting and falls in later life",
        paragraphs: [
          "Arrhythmia Alliance lists the treatments for fainting and falls in older people as a medication review, lifestyle changes and a pacemaker.",
          "Lifestyle changes include stockings, calf muscle exercises, and moving more slowly from lying to sitting and standing. Drinking more often and adding salt are only on advice from your doctor.",
        ],
      },
    ],
    helps: [
      "Speak to your GP before wearing support stockings, as they are not suitable for everyone.",
      "Ask whether a medicine change could ease your symptoms.",
      "Increase salt only on advice from your doctor.",
      "Speak to your GP if low blood pressure is becoming a problem for you.",
    ],
    tryThisWeek: [
      "Ask your GP about stockings.",
      "Ask about a medicine change.",
      "Add salt only if your doctor advises.",
    ],
    ask: "Would support stockings or a medicine help me?",
    interactive: {
      kind: "flip-cards",
      title: "Treatments, turned over",
      intro: "Tap a card to see what each treatment does.",
      cards: [
        { id: "stockings", front: "Support stockings", when: "Check with your GP first", back: "Put extra pressure on your legs, which helps to improve circulation and raise your blood pressure." },
        { id: "change", front: "A medicine change", when: "If a medicine is the cause", back: "Your GP might try an alternative medication or a different dose." },
        { id: "fludrocortisone", front: "Fludrocortisone", when: "Rarely needed; depends on the cause", back: "A steroid that makes your kidneys retain water and salt, increasing your blood volume." },
        { id: "agonists", front: "Beta-agonists or alpha-agonists", when: "Rarely needed; depends on the cause", back: "Beta-agonists make the heart beat faster, while alpha-agonists narrow the blood vessels." },
        { id: "hormone", front: "Hormone replacement", when: "If the adrenal glands are damaged", back: "An endocrinologist might prescribe hormone replacement medication." },
      ],
    },
    sources: [NHS_LBP, BPUK_LOW, BHF_CAUSES, BHF_TIPS, AA_FALLS],
    quiz: {
      question: "How often is medicine needed to raise blood pressure?",
      options: [{ text: "Rarely", right: true }, { text: "Always" }, { text: "Only in summer" }],
      why: "Medicine to increase blood pressure is rarely needed because simple lifestyle measures or treating the underlying cause is usually effective.",
    },
  },
  {
    id: "lbp-falls",
    kicker: "Staying safe",
    question: "How can I avoid falls at home?",
    hook: "Dizzy spells and faints can lead to falls. Simple changes at home, and a plan in case you fall, help keep you safe.",
    short: "Low blood pressure is one of the causes of falls, and its symptoms can put you at risk of having a fall. Making changes to prevent falls can help you avoid injuries and keep your confidence and independence. If you have symptoms, stop what you're doing and sit or lie down in case you fall.",
    sections: [
      {
        heading: "Why low blood pressure leads to falls",
        paragraphs: [
          "Causes of falls include low blood pressure, side effects of some medicines and muscles getting weaker as you get older.",
          "Symptoms such as dizziness could mean you're at risk of having a fall. If you have them, stop what you're doing and sit down or lie down in case you fall, and drink some water.",
        ],
      },
      {
        heading: "Faints that look like falls",
        paragraphs: [
          "As we get older, our bodies are less able to deal with falls in blood pressure.",
          "Arrhythmia Alliance says 30 in every 100 people aged 65 and over who have fainted will not be aware of it, and will report that they have fallen instead.",
        ],
      },
      {
        heading: "Making your home safer",
        paragraphs: [
          "Wear shoes or slippers that fit well, do not slip off and have a good grip. Use a non-slip mat in the bath or shower.",
          "Consider fitting safety rails on steps and grab rails in the bathroom. Do not have too much clutter at home, or things you could trip on such as loose wires or rugs.",
          "Wear a personal alarm, or carry a mobile phone with you.",
        ],
      },
      {
        heading: "If you fall",
        paragraphs: [
          "Try to stay calm. Take a couple of minutes to check for any pain or injuries and see if you think you can get up.",
          "Call 999 if you or someone else has fallen and may have injured the head, back, neck or hip, or cannot get up.",
          "Get help from NHS 111 if you or someone else has fallen and may be in pain, injured or unwell.",
        ],
      },
      {
        heading: "Getting help",
        paragraphs: [
          "See a GP if you've had a fall or you're worried about your balance. They may refer you to a specialist falls service, which can include strength and balance training, checking your home is safe and reviewing your medicines.",
        ],
      },
    ],
    helps: [
      "Wear shoes or slippers that fit well, do not slip off and have a good grip.",
      "Do not have too much clutter, or things you could trip on such as loose wires or rugs.",
      "Wear a personal alarm, or carry a mobile phone with you.",
      "Eat well and stay hydrated, as not eating and drinking enough can make you feel lightheaded or faint.",
      "Speak to a GP or pharmacist if you think your medicines could be affecting your balance.",
      "See a GP if you've had a fall.",
    ],
    tryThisWeek: [
      "Check your slippers grip.",
      "Clear loose rugs and wires.",
      "Keep a phone with you.",
    ],
    ask: "Could I be referred to a falls service?",
    interactive: {
      kind: "timeline",
      title: "If you fall",
      steps: [
        { id: "calm", when: "First", title: "Stay calm", points: ["Take a couple of minutes to check for any pain or injuries."] },
        { id: "roll", when: "If you can get up", title: "Roll and kneel", points: ["Take your time.", "Roll onto your side, then push yourself onto your hands and knees."] },
        { id: "hold", when: "Next", title: "Find something stable", points: ["A heavy piece of furniture, a bath or a sink.", "Crawl to it if it's out of reach."] },
        { id: "stand", when: "Then", title: "Stand up slowly", points: ["Put one foot flat on the floor and stand up slowly, holding on.", "Sit down and rest while you recover."] },
        { id: "cannot", when: "If you cannot get up", title: "Get help, keep warm", points: ["Use your phone or alarm, or shout or bang for help.", "Cover yourself, and change position about every 30 minutes."] },
        { id: "injured", when: "If hurt", title: "Call 999", points: ["Call 999 if someone may have injured the head, back, neck or hip, or cannot get up."] },
      ],
    },
    sources: [NHS_FALLS, BPUK_LOW, AA_FALLS, AA_SAFE],
    quiz: {
      question: "Which of these can make falls more likely?",
      options: [{ text: "Low blood pressure", right: true }, { text: "Well-fitting slippers" }, { text: "A non-slip bath mat" }],
      why: "Causes of falls include low blood pressure, side effects of some medicines and muscles getting weaker as you get older.",
    },
  },
  {
    id: "lbp-heat-alcohol",
    kicker: "Heat & alcohol",
    question: "What should I know about heat, the bathroom and alcohol?",
    hook: "Warmth and alcohol can both pull blood pressure down. Keeping cool, drinking water and taking care in the bathroom help.",
    short: "Your blood pressure can drop when the temperature is warm, and being too hot is one of the causes of fainting. The NHS advises not drinking too much alcohol if you have low blood pressure. In hot weather, keep out of the heat, drink extra fluids and avoid alcohol.",
    sections: [
      {
        heading: "Why warmth matters",
        paragraphs: [
          "Your blood pressure varies throughout the day. It might drop if you're dehydrated and if the temperature is warm.",
          "Being too hot is one of the causes of fainting. Hot or warm areas can bring on a faint.",
        ],
      },
      {
        heading: "Hot weather",
        paragraphs: [
          "Keep out of the heat if you can. If you have to go outside, stay in the shade especially between 11am and 3pm.",
          "Have cold food and regular cold drinks. Drink extra fluids but avoid alcohol, caffeine and hot drinks.",
        ],
      },
      {
        heading: "In the bathroom",
        paragraphs: [
          "In hot weather, have a cool shower or put cool water on your skin or clothes.",
          "If you feel like you're about to faint, lie down with your legs raised. If you cannot do this, sit with your head lowered between your knees.",
          "Use a non-slip mat in the bath or shower, and consider fitting grab rails in the bathroom.",
        ],
      },
      {
        heading: "Alcohol",
        paragraphs: [
          "Do not drink too much alcohol if you have low blood pressure.",
          "If you take amlodipine, try to limit how much alcohol you drink, as it can increase the risk of low blood pressure.",
          "Men and women are advised not to drink more than 14 units a week on a regular basis.",
        ],
      },
      {
        heading: "Heat exhaustion",
        paragraphs: [
          "Symptoms of heat exhaustion include tiredness, dizziness, headache, feeling sick and being very thirsty. Someone with heat exhaustion needs to be cooled down and given fluids.",
          "Call 999 if someone is still unwell after 30 minutes of resting in a cool place, being cooled and drinking fluids, or has other signs of heatstroke.",
        ],
      },
    ],
    helps: [
      "Stay in the shade, especially between 11am and 3pm.",
      "Drink extra fluids in hot weather, but avoid alcohol, caffeine and hot drinks.",
      "Have a cool shower or put cool water on your skin or clothes.",
      "Do not drink too much alcohol.",
      "Use a non-slip mat in the bath or shower.",
    ],
    tryThisWeek: [
      "Stay in the shade from 11am to 3pm.",
      "Drink extra fluids when it's hot.",
      "Cut back on alcohol.",
    ],
    ask: "Do I need to change anything in hot weather or when I drink alcohol?",
    interactive: {
      kind: "risk-check",
      title: "What pulls your blood pressure down?",
      intro: "Tick any that are part of your day. Most of them can be changed.",
      items: [
        { id: "warm", label: "Warm rooms or hot weather", note: "Your blood pressure might drop if the temperature is warm.", changeable: true },
        { id: "sun", label: "Being out in the midday sun", note: "If you have to go outside, stay in the shade especially between 11am and 3pm.", changeable: true },
        { id: "alcohol", label: "Drinking alcohol", note: "Do not drink too much alcohol if you have low blood pressure.", changeable: true },
        { id: "fluids", label: "Not drinking enough", note: "Your blood pressure might drop if you're dehydrated.", changeable: true },
        { id: "standing", label: "Standing for a long time", note: "Your blood pressure might drop if you've been standing up for a long time.", changeable: true },
        { id: "meals", label: "Big meals", note: "It might drop when you've just eaten, while your blood is carried to your gut.", changeable: true },
        { id: "amlodipine", label: "Alcohol while taking amlodipine", note: "Try to limit how much alcohol you drink while taking amlodipine, as it can increase the risk of low blood pressure.", changeable: true },
      ],
    },
    sources: [BPUK_LOW, NHS_FAINTING, NHS_HEATWAVE, NHS_HEAT_EXHAUSTION, NHS_LBP, NHS_AMLODIPINE, NHS_ALCOHOL, AA_REFLEX, NHS_FALLS],
    quiz: {
      question: "In hot weather, when does the NHS suggest staying in the shade?",
      options: [{ text: "Especially between 11am and 3pm", right: true }, { text: "Only after 6pm" }, { text: "Only before 9am" }],
      why: "If you have to go outside, stay in the shade especially between 11am and 3pm.",
    },
  },
  {
    id: "lbp-driving",
    kicker: "Driving",
    question: "Can I drive with low blood pressure and dizzy spells?",
    hook: "Do not drive while you're dizzy. If you faint or black out, ask your doctor whether it affects your driving.",
    short: "Do not do anything that could be dangerous while you're dizzy, like driving. If you have blackouts or fainting, ask your doctor if they affect your driving, and tell DVLA if your condition affects your driving. Bus, coach and lorry drivers need to tell DVLA if they have fainted.",
    sections: [
      {
        heading: "While you're dizzy",
        paragraphs: [
          "Do not do anything that could be dangerous while you're dizzy, like driving, climbing a ladder or using heavy machinery.",
          "The NHS says that if ramipril, a blood pressure medicine, makes you dizzy, do not drive, ride a bike or use tools or machinery until the dizziness passes.",
        ],
      },
      {
        heading: "Car or motorcycle licence",
        paragraphs: [
          "Ask your doctor if your blackouts, fainting (syncope) or loss of consciousness affect your driving.",
          "DVLA needs to be told if your condition affects your driving. You can report your condition online, or fill in form FEP1 and send it to DVLA.",
        ],
      },
      {
        heading: "Bus, coach or lorry licence",
        paragraphs: [
          "DVLA needs to be told if you have had a blackout, fainted (syncope) or lost consciousness. Fill in form FEP1V and send it to the address on the form.",
        ],
      },
      {
        heading: "What the NHS says",
        paragraphs: [
          "The NHS says to tell DVLA if you're fainting regularly, as it could affect your ability to drive.",
          "Do not drive if your GP has referred you to a specialist and you are waiting to be assessed.",
        ],
      },
      {
        heading: "If you do not tell DVLA",
        paragraphs: [
          "You can be fined up to £1,000 if you do not tell DVLA about a medical condition that affects your driving. You may be prosecuted if you're involved in an accident as a result.",
          "If you're in Northern Ireland, contact the Driver and Vehicle Agency (DVA).",
        ],
      },
    ],
    helps: [
      "Do not drive while you're dizzy.",
      "Ask your doctor if your blackouts or fainting affect your driving.",
      "Tell DVLA if your condition affects your driving.",
      "Do not drive if your GP has referred you to a specialist and you are waiting to be assessed.",
    ],
    tryThisWeek: [
      "Do not drive while dizzy.",
      "Ask your doctor about driving.",
      "Tell DVLA if it affects your driving.",
    ],
    ask: "Is it safe for me to drive?",
    interactive: {
      kind: "scenarios",
      title: "Behind the wheel",
      scenarios: [
        {
          id: "dizzy",
          situation: "You feel dizzy just as you're about to drive to the shops.",
          options: [{ text: "Do not drive while you're dizzy", best: true }, { text: "Drive slowly with the window open" }],
          why: "Do not do anything that could be dangerous while you're dizzy, like driving.",
        },
        {
          id: "car",
          situation: "You have a car licence and have fainted.",
          options: [{ text: "Ask your doctor if it affects your driving", best: true }, { text: "Carry on and say nothing" }],
          why: "Ask your doctor if your blackouts, fainting (syncope) or loss of consciousness affect your driving. DVLA needs to be told if your condition affects your driving.",
        },
        {
          id: "lorry",
          situation: "You drive a lorry and have fainted.",
          options: [{ text: "Tell DVLA, using form FEP1V", best: true }, { text: "Wait to see if it happens again" }],
          why: "DVLA needs to be told if you have had a blackout, fainted (syncope) or lost consciousness. Fill in form FEP1V.",
        },
        {
          id: "referred",
          situation: "Your GP has referred you to a specialist about your fainting.",
          options: [{ text: "Do not drive while you wait", best: true }, { text: "Keep driving until the appointment" }],
          why: "Do not drive if your GP has referred you to a specialist and you are waiting to be assessed.",
        },
      ],
    },
    sources: [GOV_BLACKOUTS, GOV_MEDICAL, NHS_FAINTING, NHS_DIZZY, NHS_RAMIPRIL],
    quiz: {
      question: "You have a car licence and have fainted. Who should you ask first about driving?",
      options: [{ text: "Your doctor", right: true }, { text: "A friend" }, { text: "Nobody" }],
      why: "Ask your doctor if your blackouts, fainting (syncope) or loss of consciousness affect your driving.",
    },
  },
  {
    id: "lbp-when-to-worry",
    kicker: "Getting help",
    question: "When does low blood pressure need help?",
    hook: "Most low blood pressure is not an emergency. Know when to see a GP, when to use NHS 111, and when to call 999.",
    short: "See a GP if you keep getting symptoms of low blood pressure such as dizziness and fainting. Call 999 if someone who has fainted is not breathing, cannot be woken up within 1 minute, or has chest pain or a pounding, fluttering or irregular heartbeat. Do not drive yourself to A&E.",
    sections: [
      {
        heading: "See a GP",
        paragraphs: [
          "See a GP if you keep getting symptoms of low blood pressure such as dizziness and fainting.",
          "See a GP if you have fainted. It's probably nothing serious, but it's important to get checked to find out what might have caused it.",
        ],
      },
      {
        heading: "Call 999 after a faint",
        paragraphs: [
          "Call 999 if someone is not breathing, cannot be woken up within 1 minute, or has not fully recovered or has difficulty with speech or movement.",
          "Call 999 if they have chest pain or a pounding, fluttering or irregular heartbeat, have seriously hurt themselves, are shaking or jerking, or fainted while exercising or while lying down.",
          "Do not drive yourself to A&E. The person you speak to at 999 will give you advice about what to do.",
        ],
      },
      {
        heading: "Dehydration",
        paragraphs: [
          "Ask for an urgent GP appointment or get help from NHS 111 if you feel dizzy when you stand up and it does not go away, or you're feeling unusually tired.",
          "Call 999 or go to A&E if someone with signs of dehydration has blue, grey, pale or blotchy skin, skin that feels cold, difficulty breathing, or is confused or difficult to wake. These could be signs of shock.",
        ],
      },
      {
        heading: "Dangerously low",
        paragraphs: [
          "Septic shock and anaphylactic shock, a severe allergic reaction, can cause dangerously low blood pressure.",
          "Anaphylaxis is a life-threatening allergic reaction that happens very quickly. Call 999 if you think you or someone else is having an anaphylactic reaction.",
        ],
      },
      {
        heading: "Fainting and the heart",
        paragraphs: [
          "Fainting could signal severe heart issues in certain groups, including people who faint during physical activity and those whose faints come with palpitations. If this could apply to you or a member of your family, discuss it with your doctor.",
        ],
      },
    ],
    helps: [
      "See a GP if you keep getting dizziness and fainting.",
      "Call 999 if someone who has fainted cannot be woken up within 1 minute or has chest pain.",
      "Do not drive yourself to A&E.",
      "Get help from NHS 111 if you feel dizzy when you stand up and it does not go away.",
      "Call 999 if you think someone is having an anaphylactic reaction.",
    ],
    tryThisWeek: [
      "Know when to see a GP.",
      "Know when to call 999.",
      "Know when to use NHS 111.",
    ],
    ask: "Which symptoms mean I should get help straight away?",
    interactive: {
      kind: "scenarios",
      title: "Where to turn",
      scenarios: [
        {
          id: "gp",
          situation: "Your dizziness and light-headedness keep coming back.",
          options: [{ text: "See a GP", best: true }, { text: "Call 999" }, { text: "Ignore it" }],
          why: "See a GP if you keep getting symptoms of low blood pressure such as dizziness and fainting.",
        },
        {
          id: "wake",
          situation: "Someone faints and cannot be woken up after a minute.",
          options: [{ text: "Call 999", best: true }, { text: "Wait another ten minutes" }, { text: "Book a GP appointment" }],
          why: "Call 999 if someone cannot be woken up within 1 minute.",
        },
        {
          id: "dehydrated",
          situation: "You have hardly drunk anything, and you feel dizzy every time you stand up. It does not go away.",
          options: [{ text: "Ask for an urgent GP appointment or use NHS 111", best: true }, { text: "Wait a week" }],
          why: "Ask for an urgent GP appointment or get help from NHS 111 if you feel dizzy when you stand up and it does not go away.",
        },
        {
          id: "exercise",
          situation: "Someone faints while exercising.",
          options: [{ text: "Call 999", best: true }, { text: "Let them rest, then carry on" }],
          why: "Call 999 if someone fainted while exercising.",
        },
      ],
    },
    sources: [NHS_LBP, NHS_FAINTING, NHS_DEHYDRATION, NHS_ANAPHYLAXIS, BHF_CAUSES, AA_TAKE],
    quiz: {
      question: "Someone faints and has chest pain afterwards. What should you do?",
      options: [{ text: "Call 999", right: true }, { text: "Book a GP appointment" }, { text: "Drive them to A&E yourself" }],
      why: "Call 999 if they have chest pain or a pounding, fluttering or irregular heartbeat. Do not drive yourself to A&E.",
    },
  },
];
