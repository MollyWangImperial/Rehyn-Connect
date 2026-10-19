import type { LibraryCondition } from "../library";
import { article, BRAIN_AND_SPINE, EPILEPSY_ACTION, EPILEPSY_SOCIETY, FACIAL_PALSY_UK, HEADWAY, MIGRAINE_TRUST, NHS, piece, source, SPINAL_INJURIES_ASSOCIATION, STROKE_ASSOCIATION, VERSUS_ARTHRITIS } from "../library-helpers";

// Brain & nervous system, part two: epilepsy & seizures, brain & spinal injury, migraine & headache,
// and nerve conditions. Same shape as the Ischaemic stroke page (see brain-a.ts).

export const focalSeizures: LibraryCondition = {
  id: "focal",
  title: "Focal seizures",
  summary: "Seizures that start in one part of the brain. Some leave you aware but with a strange feeling, a smell or a twitch; in others awareness goes and you may stare, fiddle or wander. They are often mistaken for something else, which is why describing them well matters so much.",
  facts: ["Start in one area of the brain", "Can happen with or without losing awareness", "Often controlled with the right medicine"],
  keywords: ["seizure", "fit", "focal", "partial", "aura", "absence"],
  content: {
    understand: [
      article("what-happens", "What happens in the brain during a focal seizure", 4, { blurb: "A burst of electrical activity in one place, and why where it starts shapes what you feel.", extra: "With a diagram", keywords: ["electrical", "brain"] }),
      article("aware-or-not", "Aware or not: the two kinds of focal seizure", 3, { blurb: "The strange feelings, the smells, the staring and the fiddling. What an onlooker sees.", keywords: ["aware", "awareness", "staring"] }),
      article("spreading", "When a focal seizure spreads", 3, { blurb: "Why some become a full convulsion, and what the warning can feel like.", keywords: ["aura", "warning", "convulsion"] }),
      article("tests", "EEG, MRI and the diagnosis", 4, { keywords: ["eeg", "mri", "diagnosis"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("medicines", "Seizure medicines: finding the right one", 6, { keywords: ["tablets", "medication", "side effects"] }),
      article("triggers", "Triggers: sleep, stress, missed doses, alcohol", 4, { keywords: ["triggers", "sleep", "alcohol"] }),
      article("diary", "Keeping a seizure diary that helps your doctor", 3, { keywords: ["diary", "record"] }),
      article("surgery", "When surgery is an option", 4, { keywords: ["surgery", "operation"] }),
    ],
    liveWell: [
      article("first-aid", "What the people around you should do", 3, { keywords: ["first aid", "help", "family"] }),
      article("driving", "Driving, seizures and the DVLA", 4, { keywords: ["car", "licence", "dvla"] }),
      article("work", "Work, safety and telling your employer", 4, { keywords: ["work", "employer", "safety"] }),
      article("home", "Baths, cooking and heights: everyday safety", 3, { keywords: ["safety", "bath", "cooking"] }),
      article("mood", "Mood, worry and living with the unpredictability", 4, { keywords: ["mood", "anxious"] }),
    ],
    watch: [
      piece("podcast", "epilepsy-voices", "Two people with epilepsy talk about the first year", 22),
      piece("animation", "in-pictures", "A seizure in the brain, in pictures", 3),
    ],
    sources: [source(NHS, "Epilepsy: symptoms, diagnosis and treatment"), EPILEPSY_ACTION, EPILEPSY_SOCIETY],
    stories: [],
    askDoctor: [
      "What type of seizures do I have, and where do they start?",
      "What are the side effects to expect from this medicine?",
      "What should I do if I miss a dose?",
      "When do I need to tell the DVLA?",
    ],
    related: [
      { groupId: "epilepsy", conditionId: "generalised" },
      { groupId: "epilepsy", conditionId: "after-stroke" },
      { groupId: "sleep", conditionId: "insomnia" },
    ],
  },
};

export const generalisedSeizures: LibraryCondition = {
  id: "generalised",
  title: "Generalised seizures",
  summary: "Seizures that involve both sides of the brain from the start. Tonic-clonic seizures are the ones most people picture; absences, where a person goes blank for a few seconds, are the quiet kind. Most are well controlled with medicine.",
  facts: ["Involve both sides of the brain", "Tonic-clonic, absence and others", "Most people become seizure-free with medicine"],
  keywords: ["seizure", "fit", "convulsion", "tonic clonic", "absence", "grand mal"],
  content: {
    understand: [
      article("what-happens", "What happens in the brain during a generalised seizure", 4, { extra: "With a diagram", keywords: ["electrical", "brain"] }),
      article("types", "Tonic-clonic, absence, myoclonic: the types", 4, { blurb: "What each looks like from the outside and feels like from the inside.", keywords: ["tonic clonic", "absence", "myoclonic"] }),
      article("after", "The hours after a seizure", 3, { blurb: "The sleepiness, the sore muscles, the bitten tongue, and when to seek help.", keywords: ["after", "tired", "recovery"] }),
      article("tests", "EEG, MRI and the diagnosis", 4, { keywords: ["eeg", "mri", "diagnosis"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("medicines", "Seizure medicines: finding the right one", 6, { keywords: ["tablets", "medication", "side effects"] }),
      article("triggers", "Triggers: sleep, stress, missed doses, alcohol, flashing lights", 4, { keywords: ["triggers", "sleep", "alcohol", "lights"] }),
      article("rescue", "Rescue medicine and emergency plans", 4, { keywords: ["rescue", "emergency", "plan"] }),
      article("women", "Seizure medicines, contraception and pregnancy", 5, { keywords: ["pregnancy", "contraception"] }),
    ],
    liveWell: [
      article("first-aid", "Seizure first aid: what to do and what not to do", 3, { keywords: ["first aid", "help"] }),
      article("driving", "Driving, seizures and the DVLA", 4, { keywords: ["car", "licence", "dvla"] }),
      article("sudep", "SUDEP: the risk, honestly, and how to lower it", 4, { keywords: ["sudep", "risk"] }),
      article("water-heights", "Swimming, baths and heights: everyday safety", 3, { keywords: ["safety", "swimming", "bath"] }),
      article("mood", "Mood, worry and the unpredictability", 4, { keywords: ["mood", "anxious"] }),
    ],
    watch: [
      piece("podcast", "epilepsy-voices", "Two people with epilepsy talk about the first year", 22),
      piece("video", "first-aid-video", "Seizure first aid in three minutes", 3),
    ],
    sources: [source(NHS, "Epilepsy: symptoms, diagnosis and treatment"), EPILEPSY_ACTION, EPILEPSY_SOCIETY],
    stories: [],
    askDoctor: [
      "Do I need rescue medicine at home, and who should know how to use it?",
      "What are my personal triggers, as far as we can tell?",
      "What should my family do if a seizure lasts more than five minutes?",
      "When do I need to tell the DVLA?",
    ],
    related: [
      { groupId: "epilepsy", conditionId: "focal" },
      { groupId: "epilepsy", conditionId: "after-stroke" },
      { groupId: "sleep", conditionId: "insomnia" },
    ],
  },
};

export const seizuresAfterStroke: LibraryCondition = {
  id: "after-stroke",
  title: "Seizures after stroke",
  summary: "A stroke leaves scarred tissue that can misfire, so seizures are more common after a stroke, especially a bleed or one that reached the surface of the brain. One seizure in the first week is different from seizures that start months later, and the treatment follows that.",
  facts: ["Early seizures (first week) often don't come back", "Later seizures usually need regular medicine", "More likely after a bleed or a large stroke"],
  keywords: ["seizure", "fit", "after stroke", "post-stroke epilepsy"],
  content: {
    understand: [
      article("why", "Why a stroke can cause seizures", 4, { blurb: "Scar tissue, irritated brain cells and timing.", extra: "With a diagram", keywords: ["scar", "cause"] }),
      article("early-late", "Early seizures and late ones: why the difference matters", 3, { keywords: ["early", "late", "first week"] }),
      article("what-it-looks-like", "What a seizure can look like after a stroke", 4, { blurb: "Twitching, staring, a stroke-like spell that passes. How to tell it from another stroke.", keywords: ["twitch", "staring", "another stroke"] }),
      article("tests", "EEG and the scans", 3, { keywords: ["eeg", "scan"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("medicines", "Seizure medicines alongside stroke medicines", 5, { keywords: ["tablets", "medication", "interactions"] }),
      article("recovery", "Does a seizure set recovery back?", 3, { keywords: ["recovery", "setback"] }),
      article("diary", "Keeping a seizure diary", 3, { keywords: ["diary", "record"] }),
    ],
    liveWell: [
      article("first-aid", "What the people around you should do", 3, { keywords: ["first aid", "help", "family"] }),
      article("driving", "Driving after a stroke and a seizure", 4, { keywords: ["car", "licence", "dvla"] }),
      article("confidence", "Getting your confidence back", 4, { keywords: ["confidence", "anxious", "worry"] }),
    ],
    watch: [
      piece("podcast", "two-things", "Living with a stroke and seizures: two people talk", 20),
      piece("video", "first-aid-video", "Seizure first aid in three minutes", 3),
    ],
    sources: [source(NHS, "Epilepsy and stroke pages"), STROKE_ASSOCIATION, EPILEPSY_ACTION],
    stories: [],
    askDoctor: [
      "Was mine an early or a late seizure, and does that change the plan?",
      "How long will I need the seizure medicine?",
      "Do any of my medicines clash with it?",
      "When can I drive again?",
    ],
    related: [
      { groupId: "stroke", conditionId: "ischaemic" },
      { groupId: "stroke", conditionId: "haemorrhagic" },
      { groupId: "epilepsy", conditionId: "focal" },
    ],
  },
};

export const traumaticBrainInjury: LibraryCondition = {
  id: "traumatic-brain-injury",
  title: "Traumatic brain injury",
  summary: "An injury to the brain from a blow or a jolt: a fall, a crash, a sporting knock. The visible injuries heal; the hidden ones, to memory, concentration, mood and energy, take longer and are harder for other people to see.",
  facts: ["Falls and road accidents are the most common causes", "The hidden effects outlast the visible ones", "Recovery continues for years, with the right rehab"],
  keywords: ["head injury", "tbi", "brain injury", "accident", "fall"],
  content: {
    understand: [
      article("what-happens", "What a knock does to the brain", 4, { blurb: "Bruising, swelling, and the stretching of nerve fibres that scans don't always show.", extra: "With a diagram", keywords: ["swelling", "bruise"] }),
      article("severity", "Mild, moderate, severe: what the labels mean", 3, { keywords: ["severity", "mild", "severe", "coma"] }),
      article("hidden", "The hidden effects: memory, concentration, temper, tiredness", 5, { blurb: "Why they are so often missed, and why they matter most.", keywords: ["memory", "concentration", "anger", "fatigue"] }),
      article("post-traumatic-amnesia", "The days you can't remember", 3, { keywords: ["amnesia", "memory", "hospital"] }),
    ],
    recover: [
      piece("video", "rehab", "Brain injury rehabilitation: who does what", 8, { keywords: ["rehab", "physio", "ot", "psychologist"] }),
      article("fatigue", "Fatigue after brain injury, and pacing", 5, { keywords: ["tired", "fatigue", "energy"] }),
      piece("video", "memory", "Memory strategies that stick", 6, { keywords: ["memory", "strategies", "notes"] }),
      article("headaches", "Headaches and dizziness after injury", 4, { keywords: ["headache", "dizzy"] }),
    ],
    liveWell: [
      article("mood", "Anger, tears and mood swings: why, and what helps", 5, { keywords: ["anger", "mood", "crying"] }),
      article("work", "Going back to work or study, in stages", 5, { keywords: ["work", "study", "phased"] }),
      article("driving", "Driving after a brain injury", 3, { keywords: ["car", "licence", "dvla"] }),
      article("alcohol", "Alcohol and the injured brain", 3, { keywords: ["alcohol", "drink"] }),
      article("family", "For family: the person who came home is still them", 6, { keywords: ["family", "carer", "partner"] }),
    ],
    watch: [
      piece("podcast", "hidden-injury", "Living with a hidden injury: two people talk", 24),
      piece("animation", "in-pictures", "A brain injury in pictures", 4),
      piece("audio", "wind-down", "A ten-minute wind-down for a tired brain", 10, { extra: "read aloud" }),
    ],
    sources: [source(NHS, "Severe head injury: treatment and recovery"), HEADWAY, BRAIN_AND_SPINE],
    stories: [],
    askDoctor: [
      "Which parts of the brain were injured, and what do they do?",
      "Can I be referred for brain injury rehabilitation?",
      "Is it safe to drink alcohol, and when can I drive?",
      "Who do we call if mood or behaviour changes suddenly?",
    ],
    related: [
      { groupId: "brain-spinal-injury", conditionId: "concussion" },
      { groupId: "epilepsy", conditionId: "focal" },
      { groupId: "depression", conditionId: "depression" },
    ],
  },
};

export const concussion: LibraryCondition = {
  id: "concussion",
  title: "Concussion",
  summary: "A mild brain injury from a knock to the head, with symptoms like headache, dizziness, fogginess and feeling off, usually without anything on a scan. Most people recover within weeks. Resting a little, then returning to normal life gradually, works better than either extreme.",
  facts: ["A mild brain injury; scans are usually normal", "Most people recover within a few weeks", "Gradual return beats complete rest"],
  keywords: ["concussion", "head injury", "knock", "mild brain injury", "dizzy"],
  content: {
    understand: [
      article("what-it-is", "What concussion is", 3, { blurb: "The brain's chemistry briefly upset, and why scans are usually clear.", keywords: ["cause", "scan"] }),
      article("symptoms", "The symptoms, and how long they usually last", 4, { blurb: "Headache, dizziness, fog, light and noise, sleep, mood.", keywords: ["headache", "dizzy", "fog", "light"] }),
      article("red-flags", "When to go back to A&E", 2, { keywords: ["emergency", "worse", "vomiting"] }),
      article("post-concussion", "When it lasts longer: post-concussion symptoms", 4, { keywords: ["post concussion", "months", "lasting"] }),
    ],
    recover: [
      article("first-days", "The first days: rest, but not too much", 4, { keywords: ["rest", "screens", "sleep"] }),
      article("return", "Returning to school, work and sport in steps", 5, { keywords: ["return", "work", "sport", "school"] }),
      piece("video", "neck-balance", "Neck and balance exercises that help", 6, { keywords: ["neck", "balance", "exercise"] }),
      article("headache", "Headaches after concussion, and painkiller overuse", 3, { keywords: ["headache", "painkillers"] }),
    ],
    liveWell: [
      article("screens", "Screens, reading and bright rooms", 3, { keywords: ["screens", "phone", "light"] }),
      article("sleep", "Sleep after concussion", 3, { keywords: ["sleep", "night"] }),
      article("sport", "Another knock: why the second one matters more", 3, { keywords: ["sport", "second", "rugby", "football"] }),
      article("mood", "Feeling flat or anxious afterwards", 3, { keywords: ["mood", "anxious"] }),
    ],
    watch: [
      piece("video", "explained", "Concussion explained in four minutes", 4),
      piece("audio", "wind-down", "A ten-minute wind-down for a tired brain", 10, { extra: "read aloud" }),
    ],
    sources: [source(NHS, "Concussion: symptoms and recovery"), HEADWAY],
    stories: [],
    askDoctor: [
      "How long should I expect this to last?",
      "When can I return to work, driving and sport?",
      "Which symptoms mean I should come straight back?",
      "Could a physio help with the dizziness or the neck?",
    ],
    related: [
      { groupId: "brain-spinal-injury", conditionId: "traumatic-brain-injury" },
      { groupId: "headache", conditionId: "migraine" },
      { groupId: "sleep", conditionId: "insomnia" },
    ],
  },
};

export const spinalCordInjury: LibraryCondition = {
  id: "spinal-cord",
  title: "Spinal cord injury",
  summary: "Damage to the spinal cord that changes movement, feeling and the working of the bladder, bowel and skin below the level of the injury. The early months in a spinal unit are intense; the years after are about building a life that works, with the right equipment and the right people.",
  facts: ["Level and completeness of the injury shape what changes", "Bladder, bowel and skin care are daily work", "Independence is built with equipment, skills and support"],
  keywords: ["spinal", "spinal cord", "paralysis", "paraplegia", "tetraplegia", "wheelchair"],
  content: {
    understand: [
      article("what-happens", "What the spinal cord does, and what injury changes", 4, { blurb: "Levels, complete and incomplete, and why the level matters so much.", extra: "With a diagram", keywords: ["level", "complete", "incomplete"] }),
      article("spinal-shock", "The first weeks: spinal shock and what returns", 4, { keywords: ["shock", "return", "early"] }),
      article("autonomic", "Autonomic dysreflexia: the emergency to know about", 3, { keywords: ["dysreflexia", "emergency", "blood pressure"] }),
      article("pain", "Nerve pain after spinal injury", 4, { keywords: ["pain", "nerve pain", "burning"] }),
    ],
    recover: [
      piece("video", "rehab", "Spinal rehab: what the months in the unit are for", 9, { keywords: ["rehab", "unit", "physio"] }),
      article("bladder-bowel", "Bladder and bowel: the routines that give you your day back", 6, { keywords: ["bladder", "bowel", "catheter"] }),
      article("skin", "Skin and pressure: the checks that prevent sores", 4, { keywords: ["skin", "pressure sore", "cushion"] }),
      piece("exercise", "strength", "Strength and fitness with a spinal injury", 0, { keywords: ["exercise", "fitness", "gym"] }),
    ],
    liveWell: [
      article("home", "Adapting the house, and who pays", 6, { keywords: ["home", "adaptations", "grant", "ot"] }),
      article("wheelchair", "Getting the right wheelchair and cushion", 5, { keywords: ["wheelchair", "cushion", "equipment"] }),
      article("work-money", "Work, benefits and money", 5, { keywords: ["work", "benefits", "pip"] }),
      article("relationships", "Sex, relationships and family", 5, { keywords: ["sex", "relationships", "partner"] }),
      article("driving", "Driving again: adapted cars and the DVLA", 4, { keywords: ["car", "adapted", "dvla"] }),
    ],
    watch: [
      piece("podcast", "two-years-on", "Two years on from a spinal injury: two people talk", 26),
      piece("animation", "in-pictures", "The spinal cord, in pictures", 4),
    ],
    sources: [source(NHS, "Spinal cord injury: treatment and support"), SPINAL_INJURIES_ASSOCIATION, BRAIN_AND_SPINE],
    stories: [],
    askDoctor: [
      "What is my level of injury, and is it complete or incomplete?",
      "What is my bladder and bowel plan, and who adjusts it?",
      "What are the signs of autonomic dysreflexia I must know?",
      "Who is my point of contact once I leave the unit?",
    ],
    related: [
      { groupId: "brain-spinal-injury", conditionId: "traumatic-brain-injury" },
      { groupId: "nerves", conditionId: "peripheral-neuropathy" },
      { groupId: "depression", conditionId: "depression" },
    ],
  },
};

export const migraine: LibraryCondition = {
  id: "migraine",
  title: "Migraine",
  summary: "A brain condition, not just a bad headache: attacks of throbbing pain with sickness and sensitivity to light and sound, sometimes with an aura of flashing lights or numbness first. Triggers, early treatment and, for frequent attacks, preventive medicine make a real difference.",
  facts: ["Attacks last hours to days", "Aura happens in about a third of people", "Preventives are worth asking about at four or more days a month"],
  keywords: ["migraine", "headache", "aura", "flashing lights", "sick"],
  content: {
    understand: [
      article("what-happens", "What happens in a migraine attack", 4, { blurb: "The nerves and blood vessels involved, and the four stages of an attack.", extra: "With a diagram", keywords: ["stages", "cause"] }),
      article("aura", "Aura: lights, zigzags, numbness and words", 3, { keywords: ["aura", "lights", "zigzag", "numb"] }),
      article("not-a-migraine", "Headaches that need urgent attention", 2, { blurb: "The thunderclap, the worst ever, the one with a fever or weakness. When to call 999.", keywords: ["emergency", "999", "thunderclap"] }),
      article("triggers", "Triggers: what the evidence says, and what's myth", 4, { keywords: ["triggers", "chocolate", "sleep", "hormones"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("acute", "Treating an attack: timing is everything", 4, { keywords: ["painkillers", "triptan", "early"] }),
      article("preventive", "Preventive medicines, from tablets to injections", 6, { keywords: ["preventive", "propranolol", "cgrp", "botox"] }),
      article("diary", "Keeping a migraine diary", 3, { keywords: ["diary", "record"] }),
      article("overuse", "Medication overuse headache: the trap", 3, { keywords: ["overuse", "painkillers"] }),
    ],
    liveWell: [
      article("work", "Migraine at work: adjustments that help", 4, { keywords: ["work", "screens", "lighting"] }),
      article("sleep-food", "Sleep, meals and routine", 3, { keywords: ["sleep", "meals", "routine"] }),
      article("hormones", "Migraine and periods, pregnancy and menopause", 5, { keywords: ["periods", "hormones", "menopause"] }),
      article("family", "Explaining migraine to the people around you", 3, { keywords: ["family", "explain"] }),
    ],
    watch: [
      piece("podcast", "migraine-voices", "Living with migraine: two people talk", 20),
      piece("animation", "in-pictures", "A migraine attack, in pictures", 3),
      piece("audio", "dark-room", "A quiet ten minutes for a dark room", 10, { extra: "read aloud" }),
    ],
    sources: [source(NHS, "Migraine: symptoms, causes and treatment"), MIGRAINE_TRUST],
    stories: [],
    askDoctor: [
      "Is this migraine, and do I need any tests?",
      "Which treatment should I take at the start of an attack?",
      "Am I having enough attacks to try a preventive?",
      "Could my other medicines or contraception be affecting it?",
    ],
    related: [
      { groupId: "headache", conditionId: "tension" },
      { groupId: "stroke", conditionId: "tia" },
      { groupId: "sleep", conditionId: "insomnia" },
    ],
  },
};

export const tensionHeadache: LibraryCondition = {
  id: "tension",
  title: "Tension headache",
  summary: "The everyday headache: a dull, tight band around the head, often with sore neck and shoulder muscles, brought on by stress, posture, screens, poor sleep or too little water. Common and rarely serious, but worth taking seriously when it becomes frequent.",
  facts: ["The most common type of headache", "A tight band, not a throbbing pain", "Frequent painkillers can make it worse"],
  keywords: ["headache", "tension", "tight band", "stress headache"],
  content: {
    understand: [
      article("what-it-is", "What a tension headache is", 3, { blurb: "Muscles, stress and sensitivity. Why it feels like a band.", keywords: ["cause", "band"] }),
      article("migraine-or-tension", "Tension headache or migraine? Telling them apart", 3, { keywords: ["migraine", "difference"] }),
      article("red-flags", "Headaches that need urgent attention", 2, { keywords: ["emergency", "999", "sudden"] }),
      article("frequent", "When it becomes frequent or daily", 3, { keywords: ["daily", "chronic", "frequent"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("painkillers", "Painkillers: what works, and the overuse trap", 3, { keywords: ["painkillers", "paracetamol", "overuse"] }),
      piece("video", "neck-shoulders", "Neck and shoulder stretches for headache", 5, { keywords: ["neck", "shoulders", "stretch"] }),
      article("preventive", "Preventing frequent tension headaches", 4, { keywords: ["prevent", "amitriptyline"] }),
    ],
    liveWell: [
      article("screens", "Screens, posture and the desk", 3, { keywords: ["screens", "posture", "desk"] }),
      article("stress", "Stress, and the ways through it that help", 4, { keywords: ["stress", "relax"] }),
      article("sleep-water", "Sleep, water and skipped meals", 3, { keywords: ["sleep", "water", "meals"] }),
      article("eyes", "Eyes, glasses and headaches", 2, { keywords: ["eyes", "glasses", "eye test"] }),
    ],
    watch: [
      piece("video", "explained", "Tension headache explained in three minutes", 3),
      piece("audio", "unwind", "A ten-minute unwind for a tight head", 10, { extra: "read aloud" }),
    ],
    sources: [source(NHS, "Tension headaches: symptoms and treatment"), MIGRAINE_TRUST],
    stories: [],
    askDoctor: [
      "Is this tension headache, or could it be migraine?",
      "How many days a week is it safe to take painkillers?",
      "Could my posture, eyes or jaw be part of it?",
      "Is a preventive worth trying for me?",
    ],
    related: [
      { groupId: "headache", conditionId: "migraine" },
      { groupId: "back-neck", conditionId: "back-pain" },
      { groupId: "anxiety", conditionId: "anxiety" },
    ],
  },
};

export const peripheralNeuropathy: LibraryCondition = {
  id: "peripheral-neuropathy",
  title: "Peripheral neuropathy",
  summary: "Damage to the nerves in the hands and feet: numbness, tingling, burning pain or weakness, usually starting in the toes. Diabetes is the most common cause, and protecting the feet becomes an everyday job.",
  facts: ["Usually starts in the feet", "Diabetes is the most common cause", "Foot care prevents the serious complications"],
  keywords: ["neuropathy", "numb", "numbness", "tingling", "pins and needles", "burning feet", "nerve damage"],
  content: {
    understand: [
      article("what-happens", "What nerve damage does, and why the feet first", 4, { blurb: "The longest nerves suffer first. Why it creeps upward.", extra: "With a diagram", keywords: ["nerves", "feet"] }),
      article("causes", "Causes: diabetes, alcohol, vitamin B12, chemotherapy and more", 5, { keywords: ["diabetes", "b12", "alcohol", "chemotherapy", "cause"] }),
      article("tests", "Nerve conduction tests and blood tests", 3, { keywords: ["tests", "nerve conduction"] }),
      article("types", "Numb, painful, or weak: the different patterns", 3, { keywords: ["pain", "weak", "numb"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("cause", "Treating the cause: sugar, B12, alcohol", 4, { keywords: ["treat", "cause", "sugar"] }),
      article("pain-medicines", "Nerve pain medicines: what to expect", 5, { keywords: ["gabapentin", "duloxetine", "amitriptyline", "pain"] }),
      piece("video", "balance", "Balance and strength when you can't feel your feet", 7, { keywords: ["balance", "falls", "exercise"] }),
      article("creams", "Creams, patches and other things that help", 3, { keywords: ["cream", "capsaicin", "patch"] }),
    ],
    liveWell: [
      article("foot-care", "Looking after feet you can't feel", 5, { keywords: ["feet", "foot care", "ulcer", "shoes"] }),
      article("falls", "Falls: lighting, footwear and the house", 4, { keywords: ["falls", "home", "shoes"] }),
      article("sleep", "Nerve pain at night", 3, { keywords: ["night", "sleep", "burning"] }),
      article("hands", "When it reaches the hands: buttons, cutlery and typing", 3, { keywords: ["hands", "buttons", "grip"] }),
    ],
    watch: [
      piece("podcast", "numb-feet", "Living with numb feet: two people talk", 20),
      piece("animation", "in-pictures", "Nerves and nerve damage, in pictures", 3),
    ],
    sources: [source(NHS, "Peripheral neuropathy: symptoms, causes and treatment"), BRAIN_AND_SPINE],
    stories: [],
    askDoctor: [
      "What is causing my neuropathy, and can that be treated?",
      "Should I see a podiatrist, and how often should my feet be checked?",
      "Which pain medicine suits me, and how long before it works?",
      "Is it likely to get worse, and what would slow it?",
    ],
    related: [
      { groupId: "diabetes", conditionId: "type-2" },
      { groupId: "nerves", conditionId: "carpal-tunnel" },
      { groupId: "nerves", conditionId: "sciatica" },
    ],
  },
};

export const bellsPalsy: LibraryCondition = {
  id: "bells-palsy",
  title: "Bell's palsy",
  summary: "Sudden weakness of one side of the face, from a swollen facial nerve. It is frightening because it looks like a stroke, but it is not one, and most people recover fully within weeks to months, especially when steroids are started early.",
  facts: ["Not a stroke, though it looks like one", "Steroids within 72 hours improve recovery", "Most people recover fully within months"],
  keywords: ["bells palsy", "face", "facial weakness", "drooping face", "facial palsy"],
  content: {
    understand: [
      article("what-it-is", "What Bell's palsy is", 3, { blurb: "The facial nerve, its narrow tunnel, and why it swells.", extra: "With a diagram", keywords: ["facial nerve", "cause"] }),
      article("not-a-stroke", "Bell's palsy or stroke? How doctors tell", 3, { blurb: "The forehead test, and why it matters to call 999 if you're unsure.", keywords: ["stroke", "forehead", "difference"] }),
      article("recovery-timeline", "How recovery usually goes", 4, { keywords: ["recovery", "weeks", "months"] }),
      article("eye", "Protecting the eye that won't close", 3, { keywords: ["eye", "drops", "tape"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("steroids", "Steroids: why early matters", 3, { keywords: ["steroids", "prednisolone"] }),
      piece("video", "facial-exercises", "Facial exercises: what helps and what to avoid", 6, { keywords: ["exercises", "face", "physio"] }),
      article("slow-recovery", "If recovery is slow: synkinesis and what can be done", 4, { keywords: ["synkinesis", "slow", "therapy"] }),
    ],
    liveWell: [
      article("eating-speaking", "Eating, drinking and speaking with a weak side", 3, { keywords: ["eating", "drinking", "speech"] }),
      article("confidence", "Being looked at: confidence while the face recovers", 4, { keywords: ["confidence", "self conscious"] }),
      article("pregnancy", "Bell's palsy in pregnancy", 2, { keywords: ["pregnancy"] }),
    ],
    watch: [
      piece("video", "explained", "Bell's palsy explained in three minutes", 3),
      piece("podcast", "faces", "Recovering a smile: two people talk", 16),
    ],
    sources: [source(NHS, "Bell's palsy: symptoms and treatment"), FACIAL_PALSY_UK],
    stories: [],
    askDoctor: [
      "Is it definitely Bell's palsy, and did I start steroids in time?",
      "How should I protect my eye, day and night?",
      "When should I be referred to a facial therapist?",
      "What signs would mean it's not recovering as expected?",
    ],
    related: [
      { groupId: "stroke", conditionId: "tia" },
      { groupId: "nerves", conditionId: "peripheral-neuropathy" },
    ],
  },
};

export const sciatica: LibraryCondition = {
  id: "sciatica",
  title: "Sciatica",
  summary: "Pain that runs from the lower back down the leg, along the sciatic nerve, often with tingling or numbness. Usually a disc pressing on a nerve root. Most cases settle within weeks with movement and painkillers, and surgery is rarely needed.",
  facts: ["Pain travels down the leg, below the knee", "Most cases settle within 4 to 6 weeks", "Keep moving: bed rest makes it worse"],
  keywords: ["sciatica", "leg pain", "back pain", "slipped disc", "nerve pain"],
  content: {
    understand: [
      article("what-it-is", "What sciatica is", 3, { blurb: "The nerve, the disc and why the pain is in the leg when the problem is in the back.", extra: "With a diagram", keywords: ["disc", "nerve", "cause"] }),
      article("red-flags", "Symptoms that need urgent attention", 2, { blurb: "Numbness between the legs, bladder or bowel changes, weakness in both legs. Don't wait.", keywords: ["emergency", "cauda equina", "bladder"] }),
      article("how-long", "How long it usually lasts", 3, { keywords: ["how long", "weeks"] }),
      article("scans", "Why you may not need a scan", 3, { keywords: ["mri", "scan", "x-ray"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      piece("video", "exercises", "Exercises and positions that ease sciatica", 7, { keywords: ["exercises", "stretch", "positions"] }),
      article("painkillers", "Painkillers: what helps and what doesn't", 3, { keywords: ["painkillers", "ibuprofen", "nerve pain"] }),
      article("physio", "Physiotherapy and when to ask for it", 3, { keywords: ["physio", "referral"] }),
      article("injections-surgery", "Injections and surgery: when they're considered", 4, { keywords: ["injection", "surgery", "operation"] }),
    ],
    liveWell: [
      article("sitting-driving", "Sitting, driving and sleeping with sciatica", 4, { keywords: ["sitting", "driving", "sleeping", "mattress"] }),
      article("work", "Working through it, and when to rest", 3, { keywords: ["work", "lifting"] }),
      article("preventing", "Preventing the next episode", 4, { keywords: ["prevent", "core", "lifting"] }),
    ],
    watch: [
      piece("video", "explained", "Sciatica explained in four minutes", 4),
      piece("audio", "pain-rest", "A ten-minute rest when the pain is loud", 10, { extra: "read aloud" }),
    ],
    sources: [source(NHS, "Sciatica: symptoms, treatment and exercises"), VERSUS_ARTHRITIS, BRAIN_AND_SPINE],
    stories: [],
    askDoctor: [
      "What's pressing on the nerve, and is it likely to settle?",
      "Which painkillers are safe for me, and for how long?",
      "Can I be referred to a physiotherapist?",
      "Which symptoms mean I should come straight back?",
    ],
    related: [
      { groupId: "back-neck", conditionId: "back-pain" },
      { groupId: "nerves", conditionId: "peripheral-neuropathy" },
      { groupId: "arthritis", conditionId: "osteoarthritis" },
    ],
  },
};

export const carpalTunnel: LibraryCondition = {
  id: "carpal-tunnel",
  title: "Carpal tunnel",
  summary: "Tingling, numbness and pain in the thumb and first fingers, often worse at night, from a nerve squeezed at the wrist. Splints, steroid injections and a short operation are the usual steps, and the operation is one of the most reliable there is.",
  facts: ["Tingling in the thumb, index and middle fingers", "Worse at night and first thing", "A night splint is the first treatment"],
  keywords: ["carpal tunnel", "wrist", "tingling", "numb hands", "pins and needles"],
  content: {
    understand: [
      article("what-it-is", "What carpal tunnel syndrome is", 3, { blurb: "The median nerve, the narrow tunnel at the wrist, and why the little finger escapes.", extra: "With a diagram", keywords: ["median nerve", "wrist", "cause"] }),
      article("causes", "Why it happens: pregnancy, thyroid, diabetes, repetitive work", 3, { keywords: ["pregnancy", "thyroid", "diabetes", "cause"] }),
      article("tests", "The tests: tapping, bending and nerve studies", 3, { keywords: ["tests", "nerve conduction"] }),
      article("other-causes", "Tingling hands that aren't carpal tunnel", 3, { keywords: ["neck", "neuropathy", "other"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("splint", "Night splints: how to wear one", 3, { keywords: ["splint", "night"] }),
      article("injection", "Steroid injections: what to expect", 3, { keywords: ["injection", "steroid"] }),
      article("surgery", "The operation: before, during and after", 5, { keywords: ["surgery", "operation", "release"] }),
      piece("video", "exercises", "Hand and wrist exercises", 5, { keywords: ["exercises", "stretch", "hand"] }),
    ],
    liveWell: [
      article("work", "Keyboards, tools and work with carpal tunnel", 3, { keywords: ["work", "keyboard", "tools"] }),
      article("night", "Sleeping with tingling hands", 2, { keywords: ["night", "sleep"] }),
      article("after-surgery", "Getting back to normal after the operation", 3, { keywords: ["after surgery", "recovery", "scar"] }),
    ],
    watch: [
      piece("video", "explained", "Carpal tunnel explained in three minutes", 3),
      piece("animation", "in-pictures", "The carpal tunnel, in pictures", 2),
    ],
    sources: [source(NHS, "Carpal tunnel syndrome: symptoms and treatment"), VERSUS_ARTHRITIS],
    stories: [],
    askDoctor: [
      "Is it carpal tunnel, or could the problem be in my neck?",
      "Should I try a splint or an injection first?",
      "How long is the wait for the operation, and what's the recovery?",
      "Could an underlying condition be causing it?",
    ],
    related: [
      { groupId: "nerves", conditionId: "peripheral-neuropathy" },
      { groupId: "thyroid", conditionId: "underactive" },
      { groupId: "arthritis", conditionId: "rheumatoid" },
    ],
  },
};
