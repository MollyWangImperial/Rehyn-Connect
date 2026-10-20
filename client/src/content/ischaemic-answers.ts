import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Ischaemic stroke page's pieces that had none yet (content/library.ts
// `learnId`). Every figure and piece of advice here was checked on 17 October 2026 against the pages
// listed under each answer's `sources`. Sentences are kept short: Alira reads them one at a time.
// General information only; it never replaces what a person's own stroke team tells them.

const sa = (label: string, path: string): LearnSource => ({ label: `Stroke Association: ${label}`, url: `https://www.stroke.org.uk/stroke/${path}` });
const SA_ISCHAEMIC = sa("Ischaemic stroke", "types/ischaemic");
const SA_CAUSES = sa("Ischaemic stroke causes", "types/ischaemic/causes");
const SA_DIAGNOSIS = sa("Diagnosing ischaemic stroke", "types/ischaemic/diagnosis");
const SA_TREATMENTS = sa("Ischaemic stroke treatments", "types/ischaemic/treatments");
const SA_TYPES = sa("Types and causes of stroke", "types");
const SA_TIA = sa("Transient ischaemic attack (TIA)", "type/tia");
const SA_HAEMORRHAGIC = sa("Haemorrhagic stroke", "types/haemorrhagic");
const SA_PHYSIO = sa("Physiotherapy after a stroke", "life-after-stroke/physiotherapy");
const SA_RECOVERY = sa("Stroke recovery", "recovery");
const SA_BALANCE = sa("Balance problems after stroke", "effects/physical/balance-problems-after-stroke");
const SA_WEAKNESS = sa("Muscle weakness", "effects/physical/muscle-weakness");
const SA_SWALLOWING =sa("Swallowing problems", "effects/physical/swallowing-problems");
const SA_WORK = sa("Work after a stroke", "life-after/work");
const SA_CARERS = sa("How can I best support someone after a stroke?", "support/carers/supporting-someone");
const SA_TIPS = sa("Top tips for family and friends", "life-after/top-tips-family-and-friends");
const ASA_EFFECTS: LearnSource = { label: "American Stroke Association: Effects of stroke", url: "https://www.stroke.org/en/about-stroke/effects-of-stroke" };
const NHS_RECOVERY: LearnSource = { label: "NHS: Recovering from a stroke", url: "https://www.nhs.uk/conditions/stroke/recovery/" };
const GOV_DRIVING: LearnSource = { label: "GOV.UK: Stroke and driving", url: "https://www.gov.uk/stroke-and-driving" };

export const ischaemicAnswers: LearnArticle[] = [
  {
    id: "isch-what-happens",
    kicker: "Your brain",
    question: "What actually happens in the brain?",
    hook: "A blocked supply line, a starved patch of brain, and a body that suddenly will not do as it is told.",
    short: "A blockage cuts off the blood supply to part of your brain, and without it brain cells die. What changes for you depends on where in the brain that happened, and how big the area is.",
    sections: [
      {
        heading: "A blocked supply line",
        paragraphs: [
          "Blood brings your brain cells the oxygen they need. In an ischaemic stroke, a blockage stops it reaching part of the brain, and the cells there start to die.",
          "It is the most common kind of stroke. Around 85 in every 100 strokes in the UK are ischaemic.",
        ],
      },
      {
        heading: "Why minutes mattered on the day",
        paragraphs: [
          "The faster someone reaches a specialist stroke unit, the better their chances of reducing damage to the brain.",
          "Treatments that break up or remove the clot are usually only possible within a few hours. At present, around 10 to 15 in every 100 people are able to have them.",
        ],
      },
      {
        heading: "Why the left brain moves the right hand",
        paragraphs: [
          "Nerve signals cross over on their way between the brain and the body. So each side of the brain controls the opposite side of the body.",
          "A stroke on the left side of the brain affects the right side of the body, and a stroke on the right side affects the left.",
        ],
      },
      {
        heading: "What happens to the clot",
        paragraphs: [
          "Without clot-busting or clot removal, the clot usually breaks up by itself within a few days or weeks.",
          "The brain cells that died do not grow back. But the brain can rewire itself, so healthy parts can learn to take over.",
        ],
      },
    ],
    helps: [
      "If signs of a stroke appear again, call 999 straight away, even if they stop.",
      "Take the blood-thinning medicine you are given. It helps prevent new clots, and most people need it for life.",
      "Practise the activities your therapists give you. That is how the brain builds its new connections.",
    ],
    tryThisWeek: [
      "Learn FAST: face, arms, speech, time to call 999.",
      "Take your blood-thinning medicine every day as prescribed.",
      "Practise one activity your therapist gave you, a little and often.",
    ],
    ask: "Which part of my brain was affected, and does that explain what I have noticed?",
    sources: [SA_ISCHAEMIC, SA_DIAGNOSIS, SA_TREATMENTS, ASA_EFFECTS],
    interactive: {
      kind: "brain-sides",
      title: "Tap a side of the brain",
      left: "A stroke on the left side of the brain affects the right side of the body.",
      right: "A stroke on the right side of the brain affects the left side of the body.",
      note: "Nerve signals cross over on their way between the brain and the body.",
    },
    quiz: {
      question: "Someone's right arm is weak after their stroke. Which side of the brain was most likely affected?",
      options: [{ text: "The left side", right: true }, { text: "The right side" }],
      why: "Each side of the brain controls the opposite side of the body, so right-arm weakness usually points to the left side of the brain.",
    },
  },
  {
    id: "isch-why-me",
    kicker: "Causes",
    question: "Why did this happen to me?",
    hook: "Sometimes there is one clear reason, sometimes several, and sometimes the tests never find one.",
    short: "An ischaemic stroke happens when a blockage cuts off blood to part of the brain. The usual reasons are narrowed arteries, damage to tiny blood vessels deep in the brain, or a heart problem that lets clots form. Your team looks for yours, so it can be treated.",
    sections: [
      {
        heading: "Narrowed arteries",
        paragraphs: [
          "Fatty deposits can build up inside the arteries, including the large ones in your neck that lead to the brain. A clot can form on them, block the artery, or break off and travel to the brain.",
          "High blood pressure, high cholesterol and diabetes make that build-up more likely. So do smoking, being overweight and not being physically active.",
        ],
      },
      {
        heading: "Tiny vessels deep in the brain",
        paragraphs: [
          "Small vessel disease means damage to the tiny blood vessels deep inside the brain. They narrow, less blood gets through, and a stroke becomes more likely.",
          "High blood pressure over a long time, and diabetes, are risk factors. What causes it in some people is not fully understood.",
        ],
      },
      {
        heading: "The heart",
        paragraphs: [
          "In atrial fibrillation the heartbeat is irregular. The heart does not empty itself of blood at each beat, so a clot can form in the blood left behind and travel to the brain.",
          "Up to one in four people have a small gap between the two sides of the heart, called a PFO. Most people with one never have a stroke. If you had a stroke young, or no cause was found, you may be checked for it.",
        ],
      },
      {
        heading: "Other reasons, and none",
        paragraphs: [
          "A tear in the lining of an artery can let a clot form. It can follow an injury, or happen for no obvious reason.",
          "Clotting disorders, autoimmune conditions and heart infections can also play a part. As we age, our arteries become harder and narrower too.",
          "One in four strokes in the UK happens to someone of working age. Anyone can have a stroke.",
        ],
      },
    ],
    helps: [
      "After a stroke, you should get advice about treating your medical conditions and making healthy changes.",
      "Your GP can check your risk with simple checks, and support you to make the changes that lower it.",
      "Take your blood-thinning medicine as prescribed. Most people need it for life.",
    ],
    tryThisWeek: [
      "Ask your GP which of your risk factors can be treated.",
      "Take your blood-thinning medicine every day.",
      "Pick one healthy change to start, such as moving a little more.",
    ],
    ask: "What do you think caused my stroke, and what is being done about it?",
    sources: [SA_CAUSES, SA_TYPES, SA_TREATMENTS],
    interactive: {
      kind: "risk-check",
      title: "Which of these apply to you?",
      intro: "Tick any you know about. Nothing leaves this device.",
      items: [
        { id: "bp", label: "High blood pressure", note: "Treatable. It drives both narrowed arteries and small vessel disease, so keeping it down matters most.", changeable: true },
        { id: "chol", label: "High cholesterol", note: "Treatable. It adds to the fatty build-up in arteries. Ask how yours is being treated.", changeable: true },
        { id: "diabetes", label: "Diabetes", note: "Treatable. Keeping blood sugar in range helps protect your blood vessels.", changeable: true },
        { id: "af", label: "Atrial fibrillation (an irregular heartbeat)", note: "Treatable. It lets clots form in the heart, and blood thinners can lower that risk.", changeable: true },
        { id: "smoking", label: "Smoking", note: "Changeable. Smoking speeds up the fatty build-up in arteries.", changeable: true },
        { id: "active", label: "Not very active, or overweight", note: "Changeable. Starting slowly and building up still counts.", changeable: true },
        { id: "age", label: "Getting older", note: "Not changeable. Arteries harden and narrow with age, which is why the treatable ones matter.", changeable: false },
        { id: "family", label: "Family history of stroke", note: "Not changeable, but worth telling your GP about.", changeable: false },
      ],
    },
    quiz: {
      question: "In atrial fibrillation, where does the clot usually form?",
      options: [{ text: "In the heart, in blood left behind after each beat", right: true }, { text: "In the brain itself" }, { text: "In the lungs" }],
      why: "An irregular heartbeat means the heart does not empty itself of blood each time. A clot can form there and travel to the brain.",
    },
  },
  {
    id: "isch-types",
    kicker: "Words from the ward",
    question: "TIA, ischaemic, haemorrhagic: what is the difference?",
    hook: "Three words the ward used that nobody explained. Here is a picture of each.",
    short: "Ischaemic means a blockage cut off blood to part of the brain. Haemorrhagic means bleeding in or around the brain. A TIA is a blockage that clears by itself, with symptoms gone within a day, but it is still an emergency.",
    sections: [
      {
        heading: "Ischaemic stroke: a blockage",
        paragraphs: [
          "A blockage cuts off the blood supply to part of the brain. Around 85 in every 100 strokes in the UK are this kind.",
        ],
      },
      {
        heading: "Haemorrhagic stroke: a bleed",
        paragraphs: [
          "Bleeding in or around the brain damages brain cells. Around 15 in every 100 strokes in the UK are this kind.",
          "Most bleeds happen inside the brain itself. A bleed on the surface of the brain often brings a sudden, severe headache, sometimes called a thunderclap headache.",
        ],
      },
      {
        heading: "TIA: a warning",
        paragraphs: [
          "A transient ischaemic attack, or mini-stroke, is a temporary blockage. It has the same symptoms as a stroke, but they last minutes to hours and are gone within 24 hours.",
          "It is a medical emergency all the same. The risk of a stroke is greatest in the first days and weeks after a TIA.",
        ],
      },
      {
        heading: "Why the type matters",
        paragraphs: [
          "Treatments are different depending on the cause and timing of a stroke. A brain scan shows whether it was a clot or a bleed.",
          "It is not always clear straight away which type someone had. If you are not sure about yours, ask your team.",
        ],
      },
    ],
    helps: [
      "If you spot the signs of a stroke or a TIA, call 999. Do not wait to see if they pass.",
      "If you did not get help at the time of a TIA, get an urgent GP appointment or go to an urgent treatment centre.",
      "If you are not sure which type you had, ask a healthcare professional.",
    ],
    tryThisWeek: [
      "Ask your team which type of stroke you had, if you are not sure.",
      "Tell the people around you: if signs come back, call 999, even if they pass.",
      "Learn FAST: face, arms, speech, time to call 999.",
    ],
    ask: "Which type of stroke did I have, and how did the scan show it?",
    sources: [SA_TYPES, SA_ISCHAEMIC, SA_HAEMORRHAGIC, SA_TIA, SA_DIAGNOSIS],
    interactive: {
      kind: "compare",
      title: "Pick one to see it",
      types: [
        { id: "ischaemic", name: "Ischaemic", share: "About 85 in 100 strokes", what: "A clot or blockage cuts off the blood supply to part of the brain.", signs: "The FAST signs: face, arms, speech.", next: "Clot-busting or clot removal if it is caught early, then medicine to prevent new clots." },
        { id: "haemorrhagic", name: "Haemorrhagic", share: "About 15 in 100 strokes", what: "A blood vessel bleeds in or around the brain.", signs: "The FAST signs, and often a sudden, severe headache.", next: "A brain scan and emergency treatment, then support for recovery." },
        { id: "tia", name: "TIA", share: "A warning sign", what: "A temporary blockage that clears by itself.", signs: "The same signs as a stroke, gone within 24 hours.", next: "Call 999 even if the signs pass. An urgent assessment lowers the risk of a stroke." },
      ],
    },
    quiz: {
      question: "Someone's face droops for ten minutes, then it is fine. What should they do?",
      options: [{ text: "Call 999, even though it has passed", right: true }, { text: "Wait and see if it happens again" }, { text: "Mention it at their next GP check-up" }],
      why: "A TIA is a medical emergency. The risk of a stroke is greatest in the first days and weeks, so do not wait to see if the symptoms pass.",
    },
  },
  {
    id: "isch-scans",
    kicker: "In hospital",
    question: "What were all those scans and tests for?",
    hook: "CT, MRI, an ECG, a neck scan, a sip of water. Each one was looking for something.",
    short: "A brain scan, CT or MRI, shows whether the stroke was a clot or a bleed and helps decide the treatment. Other checks look for the cause: blood pressure, blood tests, an ECG for an irregular heartbeat, and a scan of the arteries in your neck.",
    sections: [
      {
        heading: "The brain scan",
        paragraphs: [
          "If a stroke is suspected, a brain scan should be done urgently, within one hour of arriving at hospital.",
          "A CT or an MRI scan makes detailed pictures of the brain. It shows the type of stroke, rules out other causes, and shows how much of the brain was affected.",
          "It also helps doctors decide whether you can have clot-busting or clot-removal treatment.",
        ],
      },
      {
        heading: "Scans with a dye",
        paragraphs: [
          "Some scans use an injection of a special dye, to show the blood vessels of the neck and brain more clearly. They are called CT angiography or MR angiography.",
        ],
      },
      {
        heading: "Looking for the cause",
        paragraphs: [
          "Your blood pressure is checked, and blood tests look for conditions linked to stroke, such as diabetes and high cholesterol.",
          "An ECG checks for an irregular heartbeat. A scan of the neck checks for narrowed arteries, which may cause up to 15 in every 100 ischaemic strokes.",
        ],
      },
      {
        heading: "The swallowing test",
        paragraphs: [
          "You should have a swallowing test within four hours of arriving at hospital. Nothing to eat, drink or swallow by mouth until it is done, to keep food and drink out of your lungs.",
        ],
      },
    ],
    helps: [
      "Treatments differ depending on the cause and timing of a stroke, so the tests shape your care.",
      "If you have had a stroke, you should have a full assessment by the stroke team after the first 24 hours.",
      "If you are not sure what a test found, your team can explain it.",
    ],
    tryThisWeek: [
      "Write down any test you are not sure about, to ask at your next appointment.",
      "Ask whether your neck arteries and heart rhythm were checked.",
      "Keep a note of your blood pressure readings if you are asked to.",
    ],
    ask: "What did my scans and tests show, and what does that mean for my treatment?",
    sources: [SA_DIAGNOSIS, SA_TREATMENTS, SA_SWALLOWING],
    interactive: {
      kind: "flip-cards",
      title: "Turn a card over",
      intro: "Each test, and what it was looking for.",
      cards: [
        { id: "ct", front: "CT or MRI scan", when: "Within an hour of arriving", back: "Detailed pictures of the brain. They show whether it was a clot or a bleed, and how much of the brain was affected." },
        { id: "angio", front: "Scan with a dye", when: "Sometimes, alongside the brain scan", back: "A dye shows the blood vessels of the neck and brain more clearly. Called CT or MR angiography." },
        { id: "swallow", front: "Swallowing test", when: "Within four hours", back: "Checks it is safe to eat, drink and take tablets, so nothing goes into your lungs." },
        { id: "bloods", front: "Blood pressure and blood tests", when: "Early on", back: "Look for conditions linked to stroke, such as high blood pressure, diabetes and high cholesterol." },
        { id: "ecg", front: "ECG", when: "During your stay", back: "Checks your heart rhythm for atrial fibrillation, an irregular heartbeat that can cause clots." },
        { id: "neck", front: "Neck artery scan", when: "During your stay", back: "Looks for narrowed arteries in the neck, which may be behind up to 15 in 100 ischaemic strokes." },
      ],
    },
    quiz: {
      question: "Why should nothing be swallowed before the swallowing test?",
      options: [{ text: "Food or drink could go into the lungs", right: true }, { text: "It would affect the brain scan" }, { text: "The test needs an empty stomach" }],
      why: "If swallowing is affected, food, drink and even saliva can go into the airway and lungs. That can lead to a serious chest infection.",
    },
  },
  {
    id: "isch-first-three-months",
    kicker: "The early weeks",
    question: "What happens in the first three months?",
    hook: "What is typical, what is not, and the review that comes after.",
    short: "The quickest recovery usually happens in the first days and weeks after a stroke, and progress can carry on for months and years. Rehabilitation starts in hospital and carries on at home for as long as you need it. There is no set pattern.",
    sections: [
      {
        heading: "The first day",
        paragraphs: [
          "The stroke team watches you closely for at least 24 hours. A swallowing test comes within four hours of arriving.",
          "If you still have effects after 24 hours, you have a full assessment with the whole team. That can include a physiotherapist, a speech and language therapist, an occupational therapist, a dietitian and a psychologist.",
        ],
      },
      {
        heading: "The first weeks",
        paragraphs: [
          "From 24 to 48 hours, if it is safe, you are encouraged to move as much as you can: in bed, sitting in a chair, or walking.",
          "Guidelines say you should have at least three hours of therapy for movement, at least five days a week, if you can manage it. Many people in the UK do not get that much, and it varies by area.",
          "Some people go home early with a team that brings the same therapy to the house. This early supported discharge usually lasts up to six weeks.",
        ],
      },
      {
        heading: "What is typical",
        paragraphs: [
          "Tiredness that rest does not fix is very common. So are tears or laughter that arrive out of nowhere, in about one in five people in the first months.",
          "Most people with swallowing problems can swallow safely again within the first few weeks. Every stroke is different, and every recovery is too.",
        ],
      },
      {
        heading: "What is not",
        paragraphs: [
          "New signs of a stroke are never something to wait out. Face, arms, speech: call 999, even if they stop.",
        ],
      },
      {
        heading: "Around six months",
        paragraphs: [
          "After about six months, you should get a review of your progress. If you do not get one, speak to your team about it.",
        ],
      },
    ],
    helps: [
      "Plan rest as well as activity into your day. Fatigue can limit how much you can do.",
      "When you get home, keep as active as you can each day.",
      "If you did not get physiotherapy, or your needs change, ask your GP to refer you.",
    ],
    tryThisWeek: [
      "Plan one rest before and one after your busiest task each day.",
      "Do a little of your therapy practice every day.",
      "Put a reminder in your diary for your six-month review.",
    ],
    ask: "What should I be working on now, and who do I call if something changes?",
    sources: [SA_TREATMENTS, SA_PHYSIO, SA_RECOVERY, SA_SWALLOWING, NHS_RECOVERY],
    interactive: {
      kind: "timeline",
      title: "Slide through the first months",
      steps: [
        { id: "day1", when: "Day 1", title: "Watched closely", points: ["Swallowing test within four hours", "Close monitoring for at least 24 hours", "A brain scan within an hour of arriving"] },
        { id: "day2", when: "Days 1 to 2", title: "Getting moving", points: ["From 24 to 48 hours, moving as much as is safe", "A full assessment with the stroke team", "Goals set with your therapists"] },
        { id: "weeks", when: "The first weeks", title: "Rehabilitation", points: ["Therapy most days, in hospital or at home", "Early supported discharge usually lasts up to six weeks", "Swallowing often safe again within the first few weeks"] },
        { id: "months", when: "Months 1 to 3", title: "Home and onwards", points: ["Keep active each day, and plan rest too", "Tiredness and strong emotions are common", "Ask your GP for a referral if needs change"] },
        { id: "review", when: "Around 6 months", title: "Your review", points: ["A review of your progress", "If it does not happen, ask your team", "Progress can carry on for months and years"] },
      ],
    },
    quiz: {
      question: "When should you get a review of your progress?",
      options: [{ text: "Around six months after the stroke", right: true }, { text: "Only if something goes wrong" }, { text: "After a year" }],
      why: "After about six months you should get a review. If it does not happen, speak to your team about it.",
    },
  },
  {
    id: "isch-driving",
    kicker: "Getting about",
    question: "Can I drive again, and who decides?",
    hook: "The rules are clearer than most people think. Your doctor says when, and sometimes DVLA needs to know.",
    short: "You must stop driving straight away after a stroke or a TIA. With a car or motorcycle licence, you must not drive for at least a month, and you can restart only when your doctor or healthcare professional says it is safe. Some people must also tell DVLA.",
    sections: [
      {
        heading: "Car or motorcycle licence",
        paragraphs: [
          "Stop driving for at least one month. Restart only when your doctor or healthcare professional tells you it is safe.",
          "You do not need to tell DVLA if you had a stroke and have recovered.",
        ],
      },
      {
        heading: "When DVLA must know",
        paragraphs: [
          "You must tell DVLA if, after one month, you still have weakness in your arms or legs, problems with your eyesight such as double vision or loss of part of your vision, or problems with balance, memory or understanding.",
          "You must also tell DVLA if you have had any type of seizure, if you needed brain surgery as part of your treatment, or if your doctor thinks you may not be safe to drive.",
        ],
      },
      {
        heading: "Bus, coach or lorry licence",
        paragraphs: [
          "You must tell DVLA and stop driving for at least one year. DVLA will assess your case and tell you if you need any tests before you reapply.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "You can be fined up to 1,000 pounds if you do not tell DVLA about a medical condition that affects your driving. You may be prosecuted if you are involved in an accident as a result.",
        ],
      },
    ],
    helps: [
      "You can tell DVLA online, or with form STR1 for a car or motorcycle licence.",
      "For a bus, coach or lorry licence, the form is STR1V.",
      "Ask your doctor or healthcare professional when it is safe for you to drive again.",
    ],
    tryThisWeek: [
      "Ask your doctor whether it is safe for you to drive yet.",
      "Check the rules on GOV.UK for your licence type.",
      "If you need to tell DVLA, report online or fill in the form.",
    ],
    ask: "Is it safe for me to drive yet, and do I need to tell DVLA?",
    sources: [GOV_DRIVING],
    interactive: {
      kind: "driving",
      title: "What do the rules say for you?",
      rules: {
        source: GOV_DRIVING,
        car: {
          stop: "Stop driving for at least one month. Restart only when your doctor or healthcare professional tells you it is safe.",
          ask: "Do any of these apply to you?",
          checks: [
            "After one month, I still have weakness in my arms or legs",
            "After one month, I still have eyesight problems, such as double vision or loss of part of my vision",
            "After one month, I still have problems with balance, memory or understanding",
            "I have had a seizure of any kind",
            "I needed brain surgery as part of my stroke treatment",
            "My doctor thinks I may not be safe to drive",
          ],
          tell: "You must tell DVLA. You can report online, or fill in form STR1 and send it to the address on the form.",
          noTell: "You do not need to tell DVLA if you have recovered. Restart only when your doctor says it is safe.",
        },
        bus: "You must tell DVLA and stop driving for at least one year. Fill in form STR1V. DVLA will tell you if you need any tests before you reapply for your licence.",
        fine: "You can be fined up to £1,000 if you do not tell DVLA about a medical condition that affects your driving.",
      },
    },
    quiz: {
      question: "With a car licence, what is the shortest time you must stop driving after a stroke?",
      options: [{ text: "At least one month", right: true }, { text: "One week" }, { text: "One year" }],
      why: "With a car or motorcycle licence it is at least one month, and only once your doctor says it is safe. For a bus, coach or lorry licence it is at least a year.",
    },
  },
  {
    id: "isch-work",
    kicker: "Work",
    question: "How do I go back to work, in stages?",
    hook: "Some people go back within weeks, some after months or years. A plan with your employer makes the difference.",
    short: "With the right care, support and advice, many people do return to work after a stroke. There is no set timetable. It helps not to rush, to keep in touch with your employer, and to agree a plan for your return.",
    sections: [
      {
        heading: "How long will I be off?",
        paragraphs: [
          "Some people feel able to return within a few weeks. Others return after months or years. Every stroke and every recovery is different.",
          "Many people want to go back full-time as soon as possible, for money or career reasons. It is better to go back only when you feel well enough, with support and a plan in place.",
        ],
      },
      {
        heading: "Telling your employer",
        paragraphs: [
          "Contact your employer yourself if you can. Tell them you have had a stroke, that you are taking part in rehabilitation, and that you will contact them again.",
          "Useful things to give them: the date of your stroke, your likely date of leaving hospital, and a date when you will be back in touch. Ask for their policy on returning to work after sick leave.",
          "If talking is hard after your stroke, a family member or friend can help explain your needs.",
        ],
      },
      {
        heading: "You are the expert",
        paragraphs: [
          "Your doctors, your employer and your family may all have different views. You are the expert in your own needs, so try to keep control of the decisions.",
          "Many people find work helps their recovery. Some try voluntary work first, to rebuild confidence. An occupational therapist can give advice if you are thinking about going back.",
        ],
      },
      {
        heading: "Money while you are off",
        paragraphs: [
          "Check your employer's policy on sick pay. Some pay in full for a time, others pay Statutory Sick Pay only.",
          "If you are self-employed you cannot get Statutory Sick Pay, but you may qualify for New Style Employment and Support Allowance. Check any insurance policies too.",
        ],
      },
    ],
    helps: [
      "Do not rush back. Go back when you feel well enough, with support and a plan agreed with your employer.",
      "Keep in touch with your employer. It can help you feel less isolated and ease worries about returning.",
      "Consider voluntary work first, to help regain confidence and independence.",
    ],
    tryThisWeek: [
      "Send your employer a short note with three dates in it.",
      "Ask for a copy of the return-to-work policy.",
      "Ask your occupational therapist what they would suggest.",
    ],
    ask: "When do you think I could start going back to work, and what should I build up first?",
    sources: [SA_WORK, SA_WEAKNESS],
    interactive: {
      kind: "employer-note",
      title: "Write a note to your employer",
      intro: "Fill in the three dates. The note stays on this device until you copy it.",
      policyAsk: "Could you send me a copy of the policy on returning to work after sick leave?",
    },
    quiz: {
      question: "Who is the expert in your own needs when deciding about going back to work?",
      options: [{ text: "You are", right: true }, { text: "Your employer" }, { text: "Your family" }],
      why: "Professionals, your employer and your family may all have views. You are the expert in your own needs, so try to keep control of the decisions.",
    },
  },
  {
    id: "isch-swallowing",
    kicker: "Eating and drinking",
    question: "How do I eat and swallow safely?",
    hook: "Swallowing is one of the most complicated things the brain does. Here is what helps while it recovers.",
    short: "Swallowing problems, called dysphagia, are very common after a stroke. Most people can swallow safely again within the first few weeks. Until then, a speech and language therapist will tell you what is safe to eat and drink.",
    sections: [
      {
        heading: "Why it happens",
        paragraphs: [
          "Swallowing needs your brain to coordinate many muscles in the mouth and throat. If the stroke damaged the parts that do this, swallowing is affected.",
          "Other effects can make it harder too: a weak hand that cannot hold a cup, a weak face or lips, trouble sitting up straight, or drowsiness.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "If you cannot swallow properly, food, drink or even saliva can get into your airway and lungs. This is called aspiration.",
          "Germs from the mouth can then cause pneumonia, a serious chest infection. That is why any change in swallowing should be spotted early.",
        ],
      },
      {
        heading: "What a speech and language therapist does",
        paragraphs: [
          "They assess how you swallow, then explain what is safe. That might mean changing how you eat and drink, learning techniques, using aids, and exercises to strengthen the muscles.",
          "Water and other thin drinks are the hardest to control. You might be offered thickened drinks, or soft or pureed food at the right texture.",
        ],
      },
      {
        heading: "Will it get better?",
        paragraphs: [
          "Most people can swallow safely again within the first few weeks. A small number have problems that last longer.",
          "Even with lasting problems, with good care and support you can have a good diet and enjoy your food and drink.",
        ],
      },
    ],
    helps: [
      "Eat small amounts through the day instead of three big meals, if you tire quickly or find it hard to concentrate.",
      "Eat earlier in the day, when you have more energy, if that works better for you.",
      "Let hot food and drinks cool down first. They are harder to hold in your mouth.",
      "Drink enough. Your body needs fluid to fight off infections and recover.",
      "Follow your speech and language therapist's advice on textures and thickness.",
    ],
    tryThisWeek: [
      "Try smaller meals spread through the day.",
      "Let hot food and drinks cool before you start.",
      "Tell your team about any coughing or choking when you eat.",
    ],
    ask: "Is my swallowing safe now, and which textures should I be having?",
    sources: [SA_SWALLOWING, SA_TREATMENTS],
    interactive: {
      kind: "signs",
      copyHeading: "Swallowing: things we have noticed",
      title: "Have you noticed any of these?",
      intro: "Swallowing problems are not always obvious. Tick anything you or your family have noticed.",
      signs: [
        "Coughing or choking when eating or drinking",
        "Food or drink going down the wrong way",
        "Feeling that food is stuck in the throat",
        "Bringing food back up, sometimes through the nose",
        "Food left in the mouth after swallowing",
        "A croaky or wet-sounding voice",
        "Saliva escaping from the mouth",
        "Taking a long time to finish a meal",
        "Being short of breath when swallowing",
      ],
      after: "Tell your speech and language therapist or stroke team about what you ticked. Spotting a change early helps keep food and drink out of your lungs.",
    },
    quiz: {
      question: "Which drinks are usually hardest to swallow safely after a stroke?",
      options: [{ text: "Water and other thin drinks", right: true }, { text: "Thick milkshakes" }, { text: "Smoothies" }],
      why: "Thin liquids are difficult to control once they enter the mouth. That is why thickened drinks are sometimes suggested.",
    },
  },
  {
    id: "isch-carers",
    kicker: "For family and friends",
    question: "How can I help someone after a stroke?",
    hook: "Patience, encouragement, and knowing when not to help. A page for the person alongside.",
    short: "Most people need some support after a stroke, and more in the early days. You help most by encouraging them to do as much as they can, being patient, and celebrating every small step. Your own needs matter too.",
    sections: [
      {
        heading: "Are you a carer?",
        paragraphs: [
          "You might not call yourself a carer, and that is fine. You are still someone's partner, relative or friend doing what you can.",
          "Being recognised as an unpaid carer matters, though, because it helps you get support for yourself.",
        ],
      },
      {
        heading: "The help you might give",
        paragraphs: [
          "Practical help with cooking, shopping or medicines. Emotional support: being there, listening, reassuring. Help with speaking, reading or writing. Help with memory.",
        ],
      },
      {
        heading: "What helps recovery most",
        paragraphs: [
          "Ask the therapists if you can be involved in rehabilitation. Encourage them to take on family roles from the start, even new ones that are manageable.",
          "Try not to be overprotective. Encourage them to do as much as they can. Help them do things for themselves, rather than doing it all for them.",
          "Be patient. Listening, replying and doing things can all take longer, and tiredness can make it harder to join in. These changes come from the stroke.",
          "Be positive. Recovery is slow, so praise every sign of progress, however small.",
        ],
      },
      {
        heading: "Helping prevent another stroke",
        paragraphs: [
          "Encourage them to take the medicines they are prescribed, to eat healthily, and to be more active.",
        ],
      },
    ],
    helps: [
      "Break tasks into steps, and give one simple instruction at a time.",
      "Find new ways to communicate, ask what helps, and include them in conversations.",
      "Look after your own health and wellbeing. Carers UK, Carers Trust and the Stroke Association helpline, 0303 3033 100, are there for you too.",
    ],
    tryThisWeek: [
      "Let them do one task themselves that you would usually do for them.",
      "Celebrate one small success out loud.",
      "Do one thing for your own wellbeing.",
    ],
    ask: "Can I come to a therapy session, and what should we practise together at home?",
    sources: [SA_CARERS, SA_TIPS],
    interactive: {
      kind: "scenarios",
      title: "What would you do?",
      scenarios: [
        { id: "day", situation: "They ask you what day it is.", options: [{ text: "Suggest they look at the newspaper to find out", best: true }, { text: "Tell them straight away" }], why: "Helping them find it for themselves is better than doing it for them. Small chances to work things out add up." },
        { id: "dress", situation: "Getting dressed is taking a long time this morning.", options: [{ text: "Lay the clothes out, then let them do it in their own time", best: true }, { text: "Dress them to save time" }], why: "Laying things out helps them do it themselves. Things take longer after a stroke, and that is all right." },
        { id: "list", situation: "You need them to do a few things before an appointment.", options: [{ text: "Give one simple instruction at a time", best: true }, { text: "Give them the whole list at once" }], why: "If concentration or memory is affected, one step at a time is much easier than a list." },
        { id: "progress", situation: "They managed a few more steps than yesterday, but say it is pointless.", options: [{ text: "Notice it and celebrate it with them", best: true }, { text: "Agree that it is slow going" }], why: "When progress is slow it is easy to think things will never get better. Praise for every small success helps." },
      ],
    },
    quiz: {
      question: "What is usually most helpful for someone's recovery?",
      options: [{ text: "Encouraging them to do as much as they can", right: true }, { text: "Doing everything for them so they can rest" }],
      why: "It is natural to want to protect them, but with the right advice and equipment people regain independence by doing as much as they can.",
    },
  },
  {
    id: "isch-walking",
    kicker: "Moving",
    question: "Will I walk again, and how?",
    hook: "From the bed, to a chair, to your feet: walking usually comes back in small steps, not one big one.",
    short: "Physiotherapy breaks a big goal like walking into smaller steps, starting with sitting and standing on your own. Some people need a walking aid, such as a stick or an ankle splint. Your physiotherapist decides what suits you.",
    sections: [
      {
        heading: "Why walking is harder",
        paragraphs: [
          "If your muscles are weak after a stroke, sitting, standing and walking can all be difficult.",
          "If your leg is weak, it can be hard to put your weight on it. That can make you more likely to trip or fall.",
          "Balance depends on your brain, muscles, joints, sense of touch, vision and inner ear all working together. A stroke can upset any of these.",
        ],
      },
      {
        heading: "The first steps",
        paragraphs: [
          "Physiotherapy may start with moving around the bed, then from the bed to a chair. Sitting in a chair helps your breathing and helps avoid blood clots in your legs.",
          "If you cannot stand yet, the team may use equipment to help you onto your feet, if it is safe.",
        ],
      },
      {
        heading: "Walking with support",
        paragraphs: [
          "Physiotherapy can include standing, balance and walking, with and without support.",
          "If you need one, your physiotherapist and occupational therapist will provide a walking aid, such as a stick or an ankle splint, and if necessary a wheelchair.",
        ],
      },
      {
        heading: "Practice is the medicine",
        paragraphs: [
          "If you are having difficulty walking, you need to walk as much as possible, in the way your physiotherapist shows you.",
          "Practising the activities your physiotherapist and stroke team recommend helps the brain re-wire itself.",
        ],
      },
    ],
    helps: [
      "Set goals with your physiotherapist, and break the big ones into smaller steps.",
      "Practise the activities your physiotherapist and stroke team recommend.",
      "Use the walking aid you were given, the way you were shown.",
    ],
    tryThisWeek: [
      "Agree one small walking goal with your physiotherapist.",
      "Practise what they gave you, every day you can.",
      "Use your walking aid the way you were shown.",
    ],
    ask: "What is my next walking goal, and when should I try it without my aid?",
    sources: [SA_PHYSIO, SA_BALANCE, SA_WEAKNESS],
    quiz: {
      question: "What usually comes before walking in physiotherapy?",
      options: [{ text: "Sitting and standing on your own", right: true }, { text: "Walking without an aid" }],
      why: "A big goal like walking is broken into smaller steps, starting with sitting and standing independently.",
    },
  },
];
