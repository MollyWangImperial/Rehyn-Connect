import type { LearnArticle, LearnSource } from "./my-time-learn";

// The written answers behind the Haemorrhagic stroke page's pieces (content/library-conditions/brain-a.ts
// `learnId`). Every sentence was written from wording checked on 20 October 2026 on the pages listed
// under each answer's `sources`; nothing is added that those pages do not say. Sentences are kept
// short, because they are read aloud one at a time. General information only; it never replaces what a
// person's own stroke team tells them.

const sa = (label: string, path: string): LearnSource => ({ label: `Stroke Association: ${label}`, url: `https://www.stroke.org.uk/stroke/${path}` });
const SA_HAEM = sa("Haemorrhagic stroke", "types/haemorrhagic");
const SA_HAEM_CAUSES = sa("Haemorrhagic stroke causes", "types/haemorrhagic/causes");
const SA_HAEM_TREATMENT = sa("Haemorrhagic stroke treatment", "types/haemorrhagic/treatment");
const SA_HAEM_RISK = sa("Haemorrhagic stroke risk", "types/haemorrhagic/risk");
const SA_HAEM_DIAGNOSIS = sa("Diagnosing haemorrhagic stroke", "types/haemorrhagic/diagnosis");
const NHS_SAH: LearnSource = { label: "NHS: Subarachnoid haemorrhage", url: "https://www.nhs.uk/conditions/subarachnoid-haemorrhage/" };
const NHS_SYMPTOMS: LearnSource = { label: "NHS: Symptoms of a stroke", url: "https://www.nhs.uk/conditions/stroke/symptoms/" };
const NICE_SAH: LearnSource = { label: "NICE: Subarachnoid haemorrhage caused by a ruptured aneurysm (NG228)", url: "https://www.nice.org.uk/guidance/ng228/chapter/Recommendations" };
const SA_HEADACHES = sa("Headaches", "effects/physical/pain/headaches");
const SA_BP_DIAGNOSE = sa("High blood pressure: diagnosis and treatment", "managing-risk/high-blood-pressure/diagnose");
const SA_BP_REDUCE = sa("Reducing your blood pressure", "managing-risk/high-blood-pressure/reduce");
const SA_BP_MONITOR = sa("Monitoring your blood pressure", "managing-risk/high-blood-pressure/monitor");
const SA_ISCH_TREATMENTS = sa("Ischaemic stroke treatments", "types/ischaemic/treatments");
const SA_RECOVERY = sa("Stroke recovery", "recovery");
const SA_PHYSIO = sa("Physiotherapy after a stroke", "life-after-stroke/physiotherapy");
const GOV_STROKE_DRIVING: LearnSource = { label: "GOV.UK: Stroke and driving", url: "https://www.gov.uk/stroke-and-driving" };
const GOV_ICH_DRIVING: LearnSource = { label: "GOV.UK: Intracerebral haemorrhage and driving", url: "https://www.gov.uk/intracerebral-haemorrhage-and-driving" };
const GOV_SAH_DRIVING: LearnSource = { label: "GOV.UK: Subarachnoid haemorrhage and driving", url: "https://www.gov.uk/subarachnoid-haemorrhage-and-driving" };

export const haemorrhagicAnswers: LearnArticle[] = [
  {
    id: "haem-what-happens",
    kicker: "Your brain",
    question: "What does a bleed do inside the skull?",
    hook: "The blood itself damages brain cells, and the pressure it builds can do harm too.",
    short: "A haemorrhagic stroke is bleeding in or around the brain, and it can damage brain cells. If the bleed is large, pressure can build up inside the skull. That is why it needs a brain scan and emergency treatment.",
    sections: [
      {
        heading: "Bleeding in or around the brain",
        paragraphs: [
          "In a haemorrhagic stroke, a blood vessel bleeds in or around the brain. The bleeding can damage brain cells.",
          "Damage to brain cells can affect how the body works. It can also change how you think, communicate and feel.",
        ],
      },
      {
        heading: "Pressure inside the skull",
        paragraphs: [
          "If a bleed inside the brain is large, pressure can build up inside the skull. The pressure comes from the bleeding, or from swelling of the brain.",
        ],
      },
      {
        heading: "Emergency care",
        paragraphs: [
          "If you have a haemorrhagic stroke, you will have a brain scan and emergency treatment. The scan should be done urgently, within one hour of arriving in hospital.",
          "If you take blood-thinning medicine, you may be given medicine to reverse its effects. If your blood pressure is high, you may be given medicine to bring it down quickly.",
        ],
      },
      {
        heading: "Fluid on the brain",
        paragraphs: [
          "A haemorrhagic stroke can sometimes lead to a dangerous build-up of fluid around the brain, called hydrocephalus. It happens when the normal flow of the fluid around the brain and spinal cord is disrupted.",
          "Signs include headache and vomiting, as well as other stroke-like symptoms.",
        ],
      },
    ],
    helps: [
      "If you notice the signs of a stroke, call 999 straight away, even if they stop.",
      "Ask your team where your bleed was, and what that means for you.",
      "If anything was done to reduce pressure or drain fluid, ask what it was for.",
    ],
    tryThisWeek: [
      "Learn FAST: face, arms, speech, time to call 999.",
      "Ask your team where your bleed was.",
      "Ask what any procedure you had was for.",
    ],
    ask: "Where was my bleed, how big was it, and has it fully stopped?",
    sources: [SA_HAEM, SA_HAEM_TREATMENT, SA_HAEM_DIAGNOSIS, NHS_SYMPTOMS],
    quiz: {
      question: "Why can a large bleed be dangerous, beyond the blood itself?",
      options: [{ text: "Pressure can build up inside the skull", right: true }, { text: "The brain runs out of fluid" }, { text: "The heart stops pumping" }],
      why: "If a bleed inside the brain is large, pressure can build up inside the skull from the bleeding or from swelling.",
    },
  },
  {
    id: "haem-why-me",
    kicker: "Causes",
    question: "Why did I have a bleed?",
    hook: "Blood pressure, a weak spot in a vessel, or a medicine that thins the blood: the usual reasons, and the rarer ones.",
    short: "The causes are different from a stroke caused by a clot. Long-term high blood pressure is one. Others include a burst aneurysm, a tangle of blood vessels called an AVM, and blood-thinning medicine.",
    sections: [
      {
        heading: "High blood pressure",
        paragraphs: [
          "Over a long period, high blood pressure damages the small, deep blood vessels inside the brain. They stiffen, and their walls become fragile and more likely to bleed.",
        ],
      },
      {
        heading: "A burst aneurysm",
        paragraphs: [
          "A subarachnoid haemorrhage is often due to a burst aneurysm, a weak bulge in a blood vessel on the surface of the brain.",
          "A specific cause is not identified for most aneurysms. Smoking, high blood pressure, drugs such as cocaine and a severe head injury can all raise the risk of having one.",
        ],
      },
      {
        heading: "A tangle of vessels (AVM)",
        paragraphs: [
          "An arteriovenous malformation, or AVM, is a problem with the way the blood vessels in the brain have formed. Blood flows at high pressure into weak vessels, which can sometimes lead to bleeding.",
        ],
      },
      {
        heading: "Blood-thinning medicines",
        paragraphs: [
          "Blood-thinning medicine can increase the risk of bleeding, including in the brain.",
        ],
      },
      {
        heading: "Other causes",
        paragraphs: [
          "In cerebral amyloid angiopathy, a protein builds up inside the small blood vessels near the surface of the brain. This damages them, and makes them more likely to bleed.",
          "Some illegal drugs, such as cocaine and amphetamines, raise the risk of a haemorrhagic stroke. A severe head injury can also cause a bleed.",
        ],
      },
    ],
    helps: [
      "Ask your team what caused your bleed, and what is being done about it.",
      "If you have high blood pressure, ask how it is being treated.",
      "If you take blood-thinning medicine, ask your team what to do now. Do not stop or change it on your own.",
    ],
    tryThisWeek: [
      "Ask your team what caused your bleed.",
      "Ask how your blood pressure is being treated.",
      "Ask about any blood-thinning medicine you take.",
    ],
    ask: "What caused my bleed, and what is being done to stop it happening again?",
    sources: [SA_HAEM_CAUSES, SA_HAEM_RISK, NHS_SAH],
    quiz: {
      question: "What does long-term high blood pressure do to the small vessels deep in the brain?",
      options: [{ text: "Makes their walls stiff and fragile", right: true }, { text: "Makes them grow wider" }, { text: "Fills them with clots" }],
      why: "Over a long period, high blood pressure damages the small, deep blood vessels, making their walls fragile and prone to bleeding.",
    },
  },
  {
    id: "haem-two-kinds",
    kicker: "Words from the ward",
    question: "Intracerebral or subarachnoid: what is the difference?",
    hook: "The difference is where the blood collects: inside the brain, or in the space around it.",
    short: "In an intracerebral haemorrhage, blood leaks into the brain tissue. In a subarachnoid haemorrhage, it leaks from a vessel on the surface of the brain into the fluid around it. Intracerebral bleeds are the more common kind.",
    sections: [
      {
        heading: "Inside the brain: intracerebral haemorrhage",
        paragraphs: [
          "In an intracerebral haemorrhage, or ICH, blood leaks out of a blood vessel into the brain tissue, sometimes deep inside the brain.",
          "It is the most common type of haemorrhagic stroke. Around two-thirds of all haemorrhagic strokes are intracerebral.",
        ],
      },
      {
        heading: "Around the brain: subarachnoid haemorrhage",
        paragraphs: [
          "In a subarachnoid haemorrhage, or SAH, blood leaks from a blood vessel on the surface of the brain into the protective layer of fluid around it.",
          "It is a less common type of stroke, causing about 5 in every 100 strokes.",
        ],
      },
      {
        heading: "The thunderclap headache",
        paragraphs: [
          "A sudden, severe headache is sometimes called a thunderclap headache. People describe it as the worst pain ever, like being hit on the head.",
          "It is very likely with a subarachnoid haemorrhage, but it can also happen with an intracerebral haemorrhage.",
        ],
      },
    ],
    helps: [
      "If you are not sure which kind of bleed you had, ask your team.",
      "A sudden, severe headache is an emergency. Call 999.",
      "If you notice the signs of a stroke, call 999 straight away, even if they stop.",
    ],
    tryThisWeek: [
      "Ask your team which kind of bleed you had.",
      "Tell the people around you: a sudden, severe headache means calling 999.",
      "Learn FAST: face, arms, speech, time to call 999.",
    ],
    ask: "Which kind of bleed did I have, and how does that change my treatment?",
    sources: [SA_HAEM, NHS_SAH, NHS_SYMPTOMS],
    quiz: {
      question: "Where does the blood collect in a subarachnoid haemorrhage?",
      options: [{ text: "In the fluid around the surface of the brain", right: true }, { text: "Deep inside the brain tissue" }, { text: "In the heart" }],
      why: "In a subarachnoid haemorrhage, blood leaks from a vessel on the surface of the brain into the protective layer of fluid around it.",
    },
  },
  {
    id: "haem-surgery",
    kicker: "In hospital",
    question: "What were the operations and procedures for?",
    hook: "Coils, clips, removing a bleed, draining fluid. Each one had a job.",
    short: "Surgery for a subarachnoid haemorrhage aims to stop the bleeding by sealing the weak area of the blood vessel, with coils or a clip. Other operations remove a bleed, relieve pressure, or drain fluid that has built up.",
    sections: [
      {
        heading: "Coiling",
        paragraphs: [
          "A thin, flexible tube is passed into an artery in the groin or leg, and up to the aneurysm. Tiny platinum coils are passed through the tube into the aneurysm, and more are added until it is sealed.",
        ],
      },
      {
        heading: "Clipping",
        paragraphs: [
          "A small flap of bone is removed from the skull, and a tiny titanium clip is used to seal the aneurysm. National guidance offers clipping when coiling is not suitable.",
        ],
      },
      {
        heading: "Removing the blood",
        paragraphs: [
          "In a craniotomy, part of the skull is removed so the surgeon can reach and remove the bleed. In a hemicraniectomy, a large piece of the skull on one side is removed, to reduce pressure on the brain.",
          "Whether this helps depends on the size and place of the bleed, and on the chances of a good recovery.",
        ],
      },
      {
        heading: "Draining fluid",
        paragraphs: [
          "The main emergency treatment for a build-up of fluid is an external ventricular drain, a thin tube placed in the brain to drain the fluid away.",
          "A shunt is a tube that stays in and drains fluid to another part of the body. Its valve can be felt under the skin on the scalp.",
        ],
      },
      {
        heading: "Medicines",
        paragraphs: [
          "After a subarachnoid haemorrhage, blood vessels in the brain can narrow in places, which is called vasospasm. It can happen from around a day to three weeks after the stroke.",
          "To prevent it, you may be given a medicine called nimodipine for about three weeks.",
        ],
      },
    ],
    helps: [
      "Ask your team which procedure you had, and why.",
      "If you have a shunt, ask what to look out for and who to call.",
      "If you are given nimodipine, ask how long to take it for.",
    ],
    tryThisWeek: [
      "Ask which procedure you had, and why.",
      "If you have a shunt, ask who to call with a worry.",
      "Ask how long to take any new medicine.",
    ],
    ask: "Which procedure did I have, and what follow-up scans or checks will I need?",
    sources: [SA_HAEM_TREATMENT, NHS_SAH, NICE_SAH],
    quiz: {
      question: "What do coiling and clipping both aim to do?",
      options: [{ text: "Seal the weak area of the blood vessel", right: true }, { text: "Drain fluid from the brain" }, { text: "Lower blood pressure" }],
      why: "Surgery for a subarachnoid haemorrhage aims to stop the bleeding by sealing the weak area of the blood vessel.",
    },
  },
  {
    id: "haem-first-months",
    kicker: "The early weeks",
    question: "What happens in the first three months after a bleed?",
    hook: "Recovery can be slow and frustrating. Most people improve, and it can carry on for years.",
    short: "It can take months or years to get better after a bleed, but most people improve with treatment, and some recover fully. The quickest recovery often happens in the days and weeks after a stroke, and progress can continue for months and even years.",
    sections: [
      {
        heading: "The first days",
        paragraphs: [
          "After a subarachnoid haemorrhage, blood vessels in the brain can narrow in places. This can happen from around a day to three weeks after the stroke, and you may be given a medicine called nimodipine for about three weeks to help prevent it.",
        ],
      },
      {
        heading: "The first weeks",
        paragraphs: [
          "Stroke guidelines recommend at least three hours of therapy to help with movement goals, at least five days a week, if you are able to.",
          "Some people go home with a team that brings therapy to the house. This early supported discharge typically lasts up to six weeks.",
        ],
      },
      {
        heading: "Recovery takes time",
        paragraphs: [
          "Recovery can be slow and frustrating, but the exercises, therapy sessions and activities help you make progress. Some long-term problems can carry on improving after several months or years.",
        ],
      },
      {
        heading: "Work",
        paragraphs: [
          "You may have to stop working for a short time, or for longer, after a subarachnoid haemorrhage.",
        ],
      },
      {
        heading: "Around six months",
        paragraphs: [
          "Everyone should be offered a review about six months after their stroke, to look at progress and any needs that have not been met.",
        ],
      },
    ],
    helps: [
      "Take part in the therapy you are offered, as much as you are able to.",
      "If you are given nimodipine, ask how long to take it for.",
      "If you have not been offered a review at around six months, ask your team or GP about it.",
    ],
    tryThisWeek: [
      "Do a little of your therapy practice each day you can.",
      "Ask how long to take any new medicine.",
      "Put a reminder in your diary for your six-month review.",
    ],
    ask: "What should I be working on now, and when will my review be?",
    sources: [NHS_SAH, SA_HAEM_TREATMENT, SA_RECOVERY, SA_PHYSIO],
    quiz: {
      question: "When should you be offered a review of your progress?",
      options: [{ text: "About six months after the stroke", right: true }, { text: "Only if something goes wrong" }, { text: "After five years" }],
      why: "Everyone should be offered a review about six months after their stroke.",
    },
  },
  {
    id: "haem-headaches",
    kicker: "Pain",
    question: "Headaches after a bleed: what is usual and what is not?",
    hook: "Headaches after a bleed are common, and they usually ease. One kind is always an emergency.",
    short: "After a bleed in the brain, it can take a while for headaches to reduce while you recover. After a subarachnoid haemorrhage, headaches are common and generally harmless. A sudden, severe headache is different: it is an emergency, so call 999.",
    sections: [
      {
        heading: "Headaches that are common",
        paragraphs: [
          "If you had a bleed in the brain, it can take a while for headaches to reduce while you are recovering. After a subarachnoid haemorrhage caused by an aneurysm, headaches are common and generally harmless.",
        ],
      },
      {
        heading: "A headache that is an emergency",
        paragraphs: [
          "If you have any signs of a stroke, including a sudden, severe headache, call 999. Call 999 if someone gets a sudden headache that is extremely painful and does not go away.",
          "If you have a headache that will not go, get medical advice.",
        ],
      },
      {
        heading: "Painkillers",
        paragraphs: [
          "Check with your doctor or pharmacist before taking aspirin, or an anti-inflammatory such as ibuprofen, as these can cause bleeding.",
        ],
      },
    ],
    helps: [
      "If you have any signs of a stroke, including a sudden, severe headache, call 999.",
      "If a headache will not go away, get medical advice.",
      "Check with your doctor or pharmacist before taking aspirin or ibuprofen.",
    ],
    tryThisWeek: [
      "Tell the people around you: a sudden, severe headache means calling 999.",
      "Ask your pharmacist which painkillers are right for you.",
      "Get medical advice about a headache that will not go away.",
    ],
    ask: "Which painkillers are safe for me, and what kind of headache should I call about?",
    sources: [SA_HEADACHES, NICE_SAH, NHS_SAH],
    quiz: {
      question: "What should you do about a sudden, extremely painful headache that does not go away?",
      options: [{ text: "Call 999", right: true }, { text: "Take ibuprofen and wait" }, { text: "Mention it at the next check-up" }],
      why: "A sudden, severe headache can be a sign of a stroke. Call 999.",
    },
  },
  {
    id: "haem-blood-pressure",
    kicker: "Looking ahead",
    question: "Why does blood pressure matter so much now?",
    hook: "High blood pressure can make the blood vessels in the brain more likely to bleed. Keeping it down is the main way to lower the risk.",
    short: "High blood pressure damages the blood vessels in the brain, and it can make them more likely to bleed. If your blood pressure is high, you will be offered medicine for it, which can help reduce your risk of another stroke. Your doctor can tell you your own target.",
    sections: [
      {
        heading: "Why it matters most now",
        paragraphs: [
          "High blood pressure damages the blood vessels in your brain, and it can make them more likely to bleed. If you have high blood pressure, you will be offered medicine for it, which can help reduce your risk of another stroke.",
        ],
      },
      {
        heading: "Treatment, and your target",
        paragraphs: [
          "After a stroke or a TIA, if your top blood pressure number is 130 or more, you may be prescribed medicine to bring it down. Your doctor can advise you on the target for your blood pressure, and any treatment you need.",
        ],
      },
      {
        heading: "Checking at home",
        paragraphs: [
          "Some fitness trackers and phones can measure blood pressure. They can help you keep an eye on it, but most are not as accurate as a medical device.",
        ],
      },
    ],
    helps: [
      "Take your blood pressure medicine as prescribed. Do not stop it without speaking to your doctor or pharmacist first.",
      "Ask your doctor what your own blood pressure target is.",
      "If you check at home, ask your team which device to use.",
    ],
    tryThisWeek: [
      "Ask your doctor for your blood pressure target.",
      "Take your blood pressure medicine as prescribed.",
      "Ask which home monitor to use, if you check at home.",
    ],
    ask: "What should my blood pressure be now, and how often should I check it?",
    sources: [SA_HAEM_RISK, SA_BP_DIAGNOSE, SA_BP_REDUCE, SA_BP_MONITOR],
    quiz: {
      question: "Why is high blood pressure a risk after a bleed?",
      options: [{ text: "It can make the brain's blood vessels more likely to bleed", right: true }, { text: "It thins the blood" }, { text: "It only matters after a clot" }],
      why: "High blood pressure damages the blood vessels in the brain, and can make them more likely to bleed.",
    },
  },
  {
    id: "haem-blood-thinners",
    kicker: "Medicines",
    question: "Blood thinners after a bleed: what happens now?",
    hook: "They help prevent clots, and they can raise the risk of bleeding. It is a careful conversation with your team.",
    short: "Blood-thinning medicines help prevent clots, but they can also increase the risk of bleeding, including in the brain. If you had a bleed while taking one, your doctors will help you decide whether to stop it or change to a different type. Never stop one without speaking to your doctor first.",
    sections: [
      {
        heading: "What they are for",
        paragraphs: [
          "Blood-thinning medicine helps prevent new clots. Many people who have had a stroke caused by a clot take it for life.",
        ],
      },
      {
        heading: "The risk of a bleed",
        paragraphs: [
          "Blood-thinning medicine can increase the risk of bleeding, including in the brain. If you take warfarin or a similar medicine when a bleed happens, you may be given medicine to reverse its effects.",
        ],
      },
      {
        heading: "Your team weighs it up",
        paragraphs: [
          "If you had a haemorrhagic stroke while taking blood-thinning medicine, your doctors will assess you and help you decide whether to stop it, or change to a different type.",
          "National guidance asks doctors to balance the risks and benefits for each person. After an aneurysm has been sealed by coiling or clipping, these medicines are not ruled out because of the bleed alone.",
        ],
      },
    ],
    helps: [
      "Do not stop taking a medicine without speaking to your doctor or pharmacist first, as this can put you at risk of a stroke.",
      "Ask your team what they have decided about blood thinners for you, and why.",
      "Check with your doctor or pharmacist before taking aspirin, or an anti-inflammatory such as ibuprofen, as these can cause bleeding.",
    ],
    tryThisWeek: [
      "Ask your team what they decided about blood thinners for you.",
      "Never stop a medicine without talking to your doctor first.",
      "Check with a pharmacist before taking aspirin or ibuprofen.",
    ],
    ask: "Are any of my tablets off limits after a bleed, and will that change over time?",
    sources: [SA_HAEM_RISK, SA_HAEM_TREATMENT, NICE_SAH, SA_ISCH_TREATMENTS, SA_HEADACHES],
    quiz: {
      question: "Who decides whether you take a blood thinner after a bleed?",
      options: [{ text: "Your doctors, with you, after weighing the risks", right: true }, { text: "You stop it straight away yourself" }, { text: "Nobody: it never changes" }],
      why: "Your doctors will assess you and help you decide whether to stop the medicine, or change to a different type.",
    },
  },
  {
    id: "haem-driving",
    kicker: "Getting about",
    question: "Can I drive after a bleed, and who decides?",
    hook: "The rules depend on the kind of bleed, whether you had surgery, and your licence.",
    short: "You must stop driving for at least a month after a stroke, and restart only when your doctor says it is safe. After an intracerebral haemorrhage you must tell DVLA if you still have problems a month later. After a subarachnoid haemorrhage, it depends on whether an aneurysm caused it and was treated.",
    sections: [
      {
        heading: "Car or motorcycle licence",
        paragraphs: [
          "After a stroke you must stop driving for at least one month. You must tell DVLA if you are still having problems a month after an intracerebral haemorrhage.",
        ],
      },
      {
        heading: "After a subarachnoid haemorrhage",
        paragraphs: [
          "If a burst aneurysm caused the bleed and it was treated with coiling or a craniotomy, you do not need to tell DVLA. You can drive again once your doctor says you have recovered.",
          "If you did not have a burst aneurysm and surgery, you must tell DVLA about your subarachnoid haemorrhage.",
        ],
      },
      {
        heading: "Bus, coach or lorry licence",
        paragraphs: [
          "You must tell DVLA if you have had an intracerebral haemorrhage or a subarachnoid haemorrhage.",
        ],
      },
    ],
    helps: [
      "Check the GOV.UK page for your kind of bleed and your licence.",
      "Ask your doctor when it is safe for you to drive again.",
      "If you need to tell DVLA, the GOV.UK page for your kind of bleed shows how.",
    ],
    tryThisWeek: [
      "Find the GOV.UK page for your kind of bleed.",
      "Ask your doctor whether it is safe to drive yet.",
      "Tell DVLA if the rules say you must.",
    ],
    ask: "Is it safe for me to drive yet, and do I need to tell DVLA?",
    sources: [GOV_STROKE_DRIVING, GOV_ICH_DRIVING, GOV_SAH_DRIVING],
    quiz: {
      question: "After a stroke, what is the shortest time you must stop driving with a car licence?",
      options: [{ text: "At least one month", right: true }, { text: "One week" }, { text: "There is no rule" }],
      why: "After a stroke you must stop driving for at least one month, and restart only when your doctor says it is safe.",
    },
  },
];
