import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the TIA (mini-stroke) page's pieces (content/library-conditions/brain-a.ts
// `learnId`). Every sentence was written from wording checked on 20 October 2026 on the pages listed
// under each answer's `sources`; nothing is added that those pages do not say. Sentences are kept short,
// because they are read aloud one at a time. General information only; it never replaces what a
// person's own team tells them.

const sa = (label: string, path: string): LearnSource => ({ label: `Stroke Association: ${label}`, url: `https://www.stroke.org.uk/stroke/${path}` });
const SA_TIA = sa("Transient ischaemic attack (TIA)", "type/tia");
const SA_TIA_DX = sa("TIA diagnosis and treatment", "type/tia/diagnosis-and-treatment");
const SA_TIA_CAUSE = sa("TIA cause and risk", "type/tia/cause-and-risk");
const SA_TIA_EFFECTS = sa("Effects of a TIA", "type/tia/effects");
const SA_TIA_RISK = sa("Reducing your risk after a TIA", "type/tia/reduce-risk");
const SA_SYMPTOMS = sa("Stroke symptoms", "symptoms");
const SA_AF = sa("Atrial fibrillation: diagnosis", "managing-risk/atrial-fibrillation/diagnosis");
const SA_DRIVING = sa("Driving after a stroke", "life-after/driving");
const SA_MANAGE_RISK = sa("Managing risk", "manage-risk");
const NHS_TIA: LearnSource = { label: "NHS: Transient ischaemic attack (TIA)", url: "https://www.nhs.uk/conditions/transient-ischaemic-attack-tia/" };
const NHS_TIA_CAUSES: LearnSource = { label: "NHS: Causes of a TIA", url: "https://www.nhs.uk/conditions/transient-ischaemic-attack-tia/causes/" };
const NHS_TIA_DX: LearnSource = { label: "NHS: Diagnosing a TIA", url: "https://www.nhs.uk/conditions/transient-ischaemic-attack-tia/diagnosis/" };
const NHS_TIA_TX: LearnSource = { label: "NHS: Treating a TIA", url: "https://www.nhs.uk/conditions/transient-ischaemic-attack-tia/treatment/" };
const NHS_CEA: LearnSource = { label: "NHS: Carotid endarterectomy", url: "https://www.nhs.uk/tests-and-treatments/carotid-endarterectomy/what-is-a-carotid-endarterectomy/" };
const NHS_CEA_WHY: LearnSource = { label: "NHS: Why a carotid endarterectomy is done", url: "https://www.nhs.uk/tests-and-treatments/carotid-endarterectomy/why-its-done/" };
const NICE_TIA: LearnSource = { label: "NICE: Stroke and TIA in over 16s (NG128)", url: "https://www.nice.org.uk/guidance/ng128/chapter/Recommendations" };
const GOV_DRIVING: LearnSource = { label: "GOV.UK: Stroke and driving", url: "https://www.gov.uk/stroke-and-driving" };
const GOV_DVLA: LearnSource = { label: "GOV.UK: DVLA guidance on neurological disorders", url: "https://www.gov.uk/guidance/neurological-disorders-assessing-fitness-to-drive" };

const CALL_999 = "If you spot any of the signs of a TIA or stroke, call 999. Do not wait to see if the symptoms pass.";

export const tiaAnswers: LearnArticle[] = [
  {
    id: "tia-what",
    kicker: "Your brain",
    question: "What is a TIA, and why did it pass?",
    hook: "A blockage that cleared by itself before it did lasting damage. The warning it gives still matters.",
    short: "A TIA, or mini-stroke, is caused by a temporary blockage in the blood supply to part of the brain. When the blockage moves away or dissolves, the blood supply returns and the symptoms stop. The symptoms fully go within 24 hours.",
    sections: [
      {
        heading: "A temporary blockage",
        paragraphs: [
          "A TIA is caused by a temporary blockage in the blood supply to part of your brain. A clot blocks the blood supply for a short time.",
        ],
      },
      {
        heading: "Why the symptoms passed",
        paragraphs: [
          "When the blockage moves away or dissolves, the blood supply returns and the stroke symptoms stop. The blood supply goes back to normal before there is any significant damage.",
        ],
      },
      {
        heading: "Minutes to hours",
        paragraphs: [
          "The symptoms usually last between a few minutes and a few hours, and they fully go within 24 hours.",
        ],
      },
    ],
    helps: [
      CALL_999,
      "If you did not get medical help at the time, get an urgent appointment with your GP or go to an NHS urgent treatment centre.",
      "Remember FAST: Face, Arms, Speech, Time to call 999.",
    ],
    tryThisWeek: [
      "Learn FAST: face, arms, speech, time to call 999.",
      "Tell the people around you: do not wait to see if signs pass.",
      "If you have not been seen, get an urgent GP appointment.",
    ],
    ask: "What do you think caused my TIA, as far as the tests can tell?",
    sources: [SA_TIA, SA_TIA_CAUSE, NHS_TIA, NHS_TIA_CAUSES],
    quiz: {
      question: "Why did the symptoms of the TIA stop?",
      options: [{ text: "The blockage moved away or dissolved", right: true }, { text: "The brain healed overnight" }, { text: "The symptoms were not real" }],
      why: "When the blockage moves away or dissolves, the blood supply returns and the symptoms stop.",
    },
  },
  {
    id: "tia-warning",
    kicker: "In the first days",
    question: "Why is a TIA treated as an emergency?",
    hook: "It is a warning. The risk of a stroke is greatest in the first days and weeks after it.",
    short: "A TIA is a medical emergency, the same as a stroke. It is a warning that you are at risk of having a stroke, and the risk is greatest in the first days and weeks. That is why you are given aspirin straight away and seen by a specialist within 24 hours.",
    sections: [
      {
        heading: "A medical emergency",
        paragraphs: [
          "A TIA is a medical emergency, the same as a stroke. It is a warning that you are at risk of having a stroke.",
        ],
      },
      {
        heading: "Aspirin straight away",
        paragraphs: [
          "If a TIA is suspected, you are given aspirin to take straight away to help prevent a stroke, unless there is a medical reason you cannot take it.",
        ],
      },
      {
        heading: "Seen within 24 hours",
        paragraphs: [
          "You should be referred to see a specialist doctor or nurse within 24 hours of your symptoms.",
        ],
      },
      {
        heading: "The risk is highest early",
        paragraphs: [
          "The risk of a stroke is greatest in the first days and weeks after a TIA. It goes down over time.",
        ],
      },
    ],
    helps: [
      CALL_999,
      "Take the aspirin you are given, unless your doctor has told you not to.",
      "If you have not been seen by a specialist yet, ask your GP about it urgently.",
    ],
    tryThisWeek: [
      "Learn FAST: face, arms, speech, time to call 999.",
      "Take the medicines you were given.",
      "Make sure you have been seen by a specialist.",
    ],
    ask: "Have I been seen in time, and what do I do if the symptoms come back?",
    sources: [SA_TIA, SA_TIA_DX, SA_TIA_RISK, NHS_TIA_DX, NHS_TIA_TX, NICE_TIA],
    quiz: {
      question: "When is the risk of a stroke greatest after a TIA?",
      options: [{ text: "In the first days and weeks", right: true }, { text: "After a year" }, { text: "There is no extra risk" }],
      why: "The risk is greatest in the first days and weeks after a TIA, and it goes down over time.",
    },
  },
  {
    id: "tia-tests",
    kicker: "In clinic",
    question: "What were the tests after a TIA for?",
    hook: "A scan, a neck scan, blood tests, a heart check. Each one looks for a cause that can be treated.",
    short: "A TIA may not cause damage that shows on a brain scan, so not everyone needs one. Other tests look for the cause: a scan of the neck arteries, blood pressure and blood tests, and heart monitoring.",
    sections: [
      {
        heading: "A brain scan",
        paragraphs: [
          "You may have a brain scan, but not everyone needs one. A TIA is a temporary blockage, so it may not cause damage that would show on a scan. An MRI scan is most often used.",
        ],
      },
      {
        heading: "A scan of the neck",
        paragraphs: [
          "A carotid ultrasound scan can show if there is narrowing or a blockage in the neck arteries leading to your brain.",
        ],
      },
      {
        heading: "Blood pressure and blood tests",
        paragraphs: [
          "Your blood pressure is checked, because high blood pressure can lead to TIAs. You might need blood tests to check whether you have high cholesterol or diabetes.",
        ],
      },
      {
        heading: "Heart checks",
        paragraphs: [
          "You might have heart monitoring to check for heart conditions. An ECG can find an irregular heartbeat called atrial fibrillation, which can increase the risk of TIAs.",
        ],
      },
    ],
    helps: [
      "If you are not sure what a test found, ask your team to explain it.",
      "Ask for the results of your heart checks and neck scan.",
      "Ask whether you need any more tests, and when.",
    ],
    tryThisWeek: [
      "Write down any test you are not sure about.",
      "Ask whether your neck arteries and heart rhythm were checked.",
      "Ask whether you need any more tests.",
    ],
    ask: "What did my tests show, and are there any I still need?",
    sources: [SA_TIA_DX, NHS_TIA_DX],
    quiz: {
      question: "Why might a brain scan not show anything after a TIA?",
      options: [{ text: "A temporary blockage may not cause damage that shows", right: true }, { text: "Scans cannot see the brain" }, { text: "The scan was done wrong" }],
      why: "A TIA is a temporary blockage, so it may not cause damage that would show up on a scan.",
    },
  },
  {
    id: "tia-not",
    kicker: "In clinic",
    question: "Why did the doctor ask so many questions?",
    hook: "Other things can cause the same symptoms. The questions help rule them out.",
    short: "The symptoms of a TIA can be caused by other problems, so the specialist listens carefully and confirms whether you had a TIA. They ask about your symptoms and how long they lasted, and they check for other causes such as low blood sugar.",
    sections: [
      {
        heading: "Listening carefully",
        paragraphs: [
          "Symptoms can be caused by other problems, so the specialist doctor or nurse will listen carefully to you and confirm whether you have had a TIA.",
        ],
      },
      {
        heading: "What happened, and for how long",
        paragraphs: [
          "You are asked about the symptoms you had during the TIA and how long they lasted. This helps rule out other conditions that may have caused them.",
        ],
      },
      {
        heading: "Low blood sugar",
        paragraphs: [
          "National guidance asks doctors to rule out low blood sugar as the cause of sudden symptoms like these.",
        ],
      },
      {
        heading: "A bleed or another cause",
        paragraphs: [
          "A brain scan can rule out other causes of the symptoms, such as bleeds or other changes in the brain.",
        ],
      },
    ],
    helps: [
      "Tell the specialist about the symptoms you had, and how long they lasted.",
      "Ask whether anything else was ruled out, and how.",
      CALL_999,
    ],
    tryThisWeek: [
      "Be ready to describe your symptoms, and how long they lasted.",
      "Ask what else was ruled out.",
      "Learn FAST: face, arms, speech, time to call 999.",
    ],
    ask: "Are you sure it was a TIA, and was anything else ruled out?",
    sources: [SA_TIA_DX, NHS_TIA_DX, NHS_TIA, NICE_TIA],
    quiz: {
      question: "Why does the specialist ask how long your symptoms lasted?",
      options: [{ text: "To help rule out other conditions", right: true }, { text: "To decide your driving test" }, { text: "It does not matter" }],
      why: "Your symptoms and how long they lasted help rule out other conditions that may have caused them.",
    },
  },
  {
    id: "tia-tablets",
    kicker: "Medicines",
    question: "Which tablets was I started on, and why?",
    hook: "Most people take one or more medicines every day, long term, to lower the chance of a stroke.",
    short: "Most people who have had a TIA need to take one or more medicines every day, long term, to help reduce their chances of a stroke or another TIA. These can include an antiplatelet, a statin, blood pressure medicine and, for some, an anticoagulant.",
    sections: [
      {
        heading: "Antiplatelets",
        paragraphs: [
          "Antiplatelet medicines include aspirin and clopidogrel. They help prevent clots.",
        ],
      },
      {
        heading: "A statin",
        paragraphs: [
          "You may be offered a statin even if your cholesterol level is not particularly high.",
        ],
      },
      {
        heading: "Blood pressure medicine",
        paragraphs: [
          "If you have high blood pressure, you will be offered a medicine called an antihypertensive to control it.",
        ],
      },
      {
        heading: "Anticoagulants",
        paragraphs: [
          "If the clot came from the heart because of a condition like atrial fibrillation, you may be given an anticoagulant. Warfarin, apixaban, dabigatran, edoxaban and rivaroxaban are examples.",
        ],
      },
    ],
    helps: [
      "Do not stop any medicines before speaking to your GP or pharmacist.",
      "Take your medicines every day, as prescribed.",
      "Ask what each of your medicines is for.",
    ],
    tryThisWeek: [
      "Take your medicines every day, as prescribed.",
      "Never stop one without talking to your GP or pharmacist.",
      "Ask what each medicine is for.",
    ],
    ask: "Which tablets are for life, and which are for the first few weeks?",
    sources: [SA_TIA_DX, NHS_TIA_TX, SA_TIA_RISK],
    quiz: {
      question: "When might you be given an anticoagulant after a TIA?",
      options: [{ text: "If the clot came from the heart, for example with atrial fibrillation", right: true }, { text: "Always, for everyone" }, { text: "Only for headaches" }],
      why: "If the clot came from the heart because of a condition like atrial fibrillation, you may be given an anticoagulant.",
    },
  },
  {
    id: "tia-carotid",
    kicker: "Treatment",
    question: "If the neck artery is narrowed: what is the operation?",
    hook: "An operation to clear fatty deposits from the artery in the neck, to improve blood flow and help prevent a stroke.",
    short: "A carotid endarterectomy is an operation to remove fatty deposits from the carotid artery in the neck. It improves blood flow and helps prevent a stroke. It may be offered if the artery is narrowed by more than 50%.",
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "A carotid endarterectomy is an operation to remove fatty deposits, called plaques, from your carotid artery. This improves blood flow and helps prevent a stroke.",
        ],
      },
      {
        heading: "Who is offered it",
        paragraphs: [
          "If the carotid artery in your neck is narrowed by more than 50%, you might be offered surgery to clear the blockage. After a TIA, it is needed as soon as possible.",
        ],
      },
      {
        heading: "The operation",
        paragraphs: [
          "The operation usually takes 1 to 2 hours, and you may need to stay in hospital for a few days afterwards.",
        ],
      },
    ],
    helps: [
      "Ask how narrowed your neck artery is, if it was scanned.",
      "If you are offered the operation, ask when it will be.",
      "Do not stop any medicines before speaking to your GP or pharmacist.",
    ],
    tryThisWeek: [
      "Ask how narrowed your neck artery is.",
      "Ask when any operation will be.",
      "Never stop a medicine without talking to your GP first.",
    ],
    ask: "How narrowed is my neck artery, and do I need the operation?",
    sources: [NHS_CEA, NHS_CEA_WHY, SA_TIA_DX, SA_TIA_RISK],
    quiz: {
      question: "What does a carotid endarterectomy do?",
      options: [{ text: "Removes fatty deposits from the artery in the neck", right: true }, { text: "Removes a clot from the heart" }, { text: "Replaces the artery" }],
      why: "It removes fatty deposits, called plaques, from the carotid artery, which improves blood flow.",
    },
  },
  {
    id: "tia-af",
    kicker: "Your heart",
    question: "Why check for an irregular heartbeat?",
    hook: "A clot can form in the heart and travel to the brain. An irregular heartbeat can come and go, so finding it can take time.",
    short: "An irregular heartbeat called atrial fibrillation can lead to a clot forming in the heart and travelling to the brain. An ECG can find it. Because it can come and go, you might wear a small device to track your heartbeat over 24 hours.",
    sections: [
      {
        heading: "Why the heart is checked",
        paragraphs: [
          "Some clots are due to heart conditions such as atrial fibrillation, a type of irregular heartbeat. A clot can form in the heart and travel to the brain.",
        ],
      },
      {
        heading: "An ECG",
        paragraphs: [
          "An ECG can find abnormal heart rhythms, such as atrial fibrillation, which can increase your risk of TIAs.",
        ],
      },
      {
        heading: "When it comes and goes",
        paragraphs: [
          "Because atrial fibrillation can come and go, you might be given a small wearable device to track your heartbeat over 24 hours.",
        ],
      },
      {
        heading: "If it is found",
        paragraphs: [
          "If the clot came from the heart because of a condition like atrial fibrillation, you may be given an anticoagulant.",
        ],
      },
    ],
    helps: [
      "Ask whether you need longer heart monitoring.",
      "Ask for the results of your heart checks.",
      "If you are prescribed an anticoagulant, do not stop it without speaking to your GP or pharmacist.",
    ],
    tryThisWeek: [
      "Ask whether you need longer heart monitoring.",
      "Ask for your heart check results.",
      "Never stop a medicine without talking to your GP first.",
    ],
    ask: "Was my heart rhythm checked, and do I need longer monitoring?",
    sources: [SA_TIA_CAUSE, NHS_TIA_DX, SA_AF, SA_TIA_DX, SA_TIA_RISK],
    quiz: {
      question: "Why might you wear a heart monitor for 24 hours?",
      options: [{ text: "Atrial fibrillation can come and go", right: true }, { text: "To measure your steps" }, { text: "To check your blood sugar" }],
      why: "Because atrial fibrillation can come and go, a wearable device can track your heartbeat over 24 hours.",
    },
  },
  {
    id: "tia-prevent",
    kicker: "Looking ahead",
    question: "How do I lower my risk of a stroke now?",
    hook: "Medicines every day, the numbers checked, and the habits that help. And the risk goes down over time.",
    short: "Most people who have had a TIA need one or more medicines every day, long term, to help reduce the chance of a stroke or another TIA. Your risk of a stroke goes down over time following a TIA.",
    sections: [
      {
        heading: "Medicines every day",
        paragraphs: [
          "Most people who have had a TIA need to take one or more medicines every day, long term, to help reduce their chances of a stroke or another TIA.",
        ],
      },
      {
        heading: "The risk goes down over time",
        paragraphs: [
          "Your risk of a stroke goes down over time following a TIA.",
        ],
      },
      {
        heading: "Habits that help",
        paragraphs: [
          "Stopping smoking, being more active, eating well and keeping alcohol within the recommended limits all help lower the risk.",
        ],
      },
    ],
    helps: [
      "Take your medicines every day. Do not stop any before speaking to your GP or pharmacist.",
      "Keep your blood pressure, cholesterol and blood sugar checked and treated.",
      "Stop smoking, be more active, eat well, and keep alcohol within the recommended limits.",
      CALL_999,
    ],
    tryThisWeek: [
      "Take your medicines every day.",
      "Book a check of your blood pressure.",
      "Pick one healthy change to start.",
    ],
    ask: "What are my blood pressure and cholesterol targets?",
    sources: [NHS_TIA_TX, SA_TIA_RISK, SA_MANAGE_RISK],
  },
  {
    id: "tia-driving",
    kicker: "Getting about",
    question: "Can I drive after a TIA?",
    hook: "You must stop straight away. With a car licence it is at least a month, and only when your doctor says it is safe.",
    short: "You must stop driving straight away after a TIA. With a car or motorcycle licence, stop for at least one month, and restart only when your doctor or healthcare professional says it is safe. With a bus, coach or lorry licence, you must tell DVLA and stop for at least a year.",
    sections: [
      {
        heading: "Car or motorcycle licence",
        paragraphs: [
          "You must stop driving straight away after a TIA, for at least one month. You can restart only when your doctor or healthcare professional tells you it is safe.",
        ],
      },
      {
        heading: "More than one TIA",
        paragraphs: [
          "If you have had more than one TIA, you must not drive for one month after the most recent one.",
        ],
      },
      {
        heading: "Bus, coach or lorry licence",
        paragraphs: [
          "You must tell DVLA and stop driving for at least one year. Fill in form STR1V and send it to DVLA.",
        ],
      },
      {
        heading: "Your insurance",
        paragraphs: [
          "You must tell your motor insurance company if you have had a stroke or TIA.",
        ],
      },
    ],
    helps: [
      "Ask your doctor or healthcare professional when it is safe for you to drive again.",
      "Tell your motor insurance company about your TIA.",
      "Check the GOV.UK rules for your licence type.",
    ],
    tryThisWeek: [
      "Ask your doctor when it is safe to drive.",
      "Tell your insurance company.",
      "Check the GOV.UK rules for your licence.",
    ],
    ask: "When is it safe for me to drive again?",
    sources: [GOV_DRIVING, GOV_DVLA, SA_DRIVING, NHS_TIA_TX],
    quiz: {
      question: "With a car licence, how long must you stop driving after a TIA?",
      options: [{ text: "At least one month", right: true }, { text: "One day" }, { text: "Not at all" }],
      why: "You must stop for at least one month, and restart only when your doctor says it is safe.",
    },
  },
  {
    id: "tia-worry",
    kicker: "Feelings",
    question: "How do I live with the worry after a TIA?",
    hook: "It can be very worrying to be told you had a TIA. The risk goes down over time, and support is there.",
    short: "It can be very worrying to be told you had a TIA. Some people have anxiety and low mood afterwards, and some have tiredness. Your risk of a stroke goes down over time, and if worry is affecting your life, your GP can help.",
    sections: [
      {
        heading: "A worrying time",
        paragraphs: [
          "You may be worried about your health, or about having another TIA or a stroke. Some people have anxiety and low mood afterwards.",
        ],
      },
      {
        heading: "The risk goes down",
        paragraphs: [
          "Your risk of a stroke goes down over time following a TIA.",
        ],
      },
      {
        heading: "Tiredness and thinking",
        paragraphs: [
          "Some people get fatigue after a TIA: extreme tiredness that does not always get better with rest.",
          "If you still have physical problems, or difficulties with memory and thinking, raise this at a clinic appointment or with your GP.",
        ],
      },
      {
        heading: "Getting support",
        paragraphs: [
          "If anxiety or low mood is affecting your daily life, contact your GP, or call the Stroke Association's helpline, 0303 3033 100.",
        ],
      },
    ],
    helps: [
      "If anxiety or low mood is affecting your daily life, contact your GP.",
      "The Stroke Association's helpline, 0303 3033 100, can help you find support.",
      "Raise any lasting problems with memory, thinking or tiredness at your clinic or with your GP.",
    ],
    tryThisWeek: [
      "Contact your GP if worry is affecting your daily life.",
      "Note any tiredness or memory problems for your GP.",
      "Save the helpline number: 0303 3033 100.",
    ],
    ask: "Is what I feel normal after a TIA, and what support is there?",
    sources: [SA_TIA_EFFECTS, SA_TIA_RISK],
  },
  {
    id: "tia-fast",
    kicker: "If it happens again",
    question: "What do I do if it happens again?",
    hook: "Four letters, and one rule: do not wait to see if it passes.",
    short: "Remember FAST: Face, Arms, Speech, Time to call 999. If you spot any of the signs, call 999 straight away, and do not wait to see if they pass. Even if the symptoms go while you wait for the ambulance, you still need to be assessed in hospital.",
    sections: [
      {
        heading: "Face",
        paragraphs: ["The face may have dropped on one side, the person may not be able to smile, or their mouth or eye may have dropped."],
      },
      {
        heading: "Arms",
        paragraphs: ["The person may not be able to lift both arms and keep them raised, because of weakness or numbness in one arm."],
      },
      {
        heading: "Speech",
        paragraphs: ["Their speech may be slurred or garbled, or they may not be able to talk at all, despite appearing to be awake. They may also have problems understanding what you say."],
      },
      {
        heading: "Time",
        paragraphs: ["It is time to call 999 immediately if you see any of these signs. Even if the symptoms disappear while you are waiting for the ambulance, you still need to be assessed in hospital."],
      },
    ],
    helps: [
      CALL_999,
      "Even if the symptoms disappear while you wait for an ambulance, you still need to be assessed in hospital.",
      "Remember FAST: Face, Arms, Speech, Time to call 999.",
    ],
    tryThisWeek: [
      "Learn the four letters of FAST.",
      "Share FAST with the people around you.",
      "Do not wait to see if signs pass: call 999.",
    ],
    ask: "What should my family do if they see the signs?",
    sources: [NHS_TIA, SA_TIA, SA_SYMPTOMS],
    quiz: {
      question: "The symptoms stop while you wait for the ambulance. What now?",
      options: [{ text: "You still need to be assessed in hospital", right: true }, { text: "Cancel the ambulance" }, { text: "Wait and see tomorrow" }],
      why: "Even if the symptoms disappear while you are waiting, you still need to be assessed in hospital.",
    },
  },
];
