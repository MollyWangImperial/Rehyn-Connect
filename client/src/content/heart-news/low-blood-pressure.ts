import type { NewsExtras } from "../ischaemic-news";
// Low blood pressure features: reference numbers (positions in each answer's `sources`, low-bp-answers.ts) and figures, checked 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  // sources: 1 NHS low blood pressure, 2 BHF low blood pressure, 3 BHF what causes low blood pressure, 4 Blood Pressure UK
  "what-it-is": {
    sectionRefs: [[[1, 2], [3], [4]], [[4], [1]], [[1, 2], [4], [3]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [4]],
    charts: {
      0: { kind: "bars", title: "Where low begins", subtitle: "The top number of a reading, in mmHg, in the NHS guide quoted by the British Heart Foundation", bars: [{ label: "Low: below", value: 90, strong: true }, { label: "Normal: up to", value: 120 }, { label: "High, at a clinic: from", value: 140 }], max: 140, ticks: [0, 90, 120, 140], unit: " mmHg", sources: "Source: British Heart Foundation, What causes low blood pressure and what are the symptoms? (quoting the NHS guide)" },
    },
  },
  // sources: 1 NHS low blood pressure, 2 Blood Pressure UK, 3 BHF low blood pressure, 4 NHS dizziness, 5 BHF 5 tips
  postural: {
    sectionRefs: [[[1], [2]], [[2], [4]], [[2], [3]], [[2], [2]], [[1], [5]]],
    helpRefs: [[1], [1], [5], [2], [4]],
  },
  // sources: 1 NHS low blood pressure, 2 BHF low blood pressure, 3 BHF what causes, 4 Blood Pressure UK, 5 BHF dehydration, 6 BHF 5 tips
  causes: {
    sectionRefs: [[[1], [4], [1, 2, 6]], [[2], [3, 4]], [[2, 5], [2]], [[2], [4], [3]], [[4]]],
    helpRefs: [[1], [1], [4], [2]],
    stats: {
      0: [{ value: "Over 70", label: "Low blood pressure comes with getting older and is common in people over the age of 70, says the British Heart Foundation.", ref: 6 }],
    },
  },
  // sources: 1 NHS fainting, 2 Arrhythmia Alliance reflex syncope, 3 Arrhythmia Alliance Take Fainting to Heart
  fainting: {
    sectionRefs: [[[1, 2], [2]], [[1], [1], [2]], [[1]], [[1], [1]], [[1], [2, 3]]],
    helpRefs: [[1], [1], [1], [1], [1]],
    charts: {
      0: { kind: "donut", title: "Fainting is common", subtitle: "People who will faint at least once in their lifetime, says Arrhythmia Alliance", value: 50, subject: "people", label: "will faint at least once in their lifetime", sources: "Source: Arrhythmia Alliance (STARS), Take Fainting to Heart" },
    },
    stats: {
      3: [{ value: "30 seconds", label: "Usually, the person who has fainted will wake up within this time, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  // sources: 1 NHS low blood pressure, 2 BHF blood pressure tablet side effects, 3 Blood Pressure UK, 4 NHS ramipril side effects, 5 BHF low blood pressure
  "medicines-review": {
    sectionRefs: [[[3], [5]], [[2], [2], [4]], [[3], [2]], [[2]], [[2], [2]]],
    helpRefs: [[2], [2], [2], [2], [2]],
    stats: {
      3: [{ value: "2 to 3 weeks", label: "How long to note down side effects on a new medicine, to help your GP see patterns, says the British Heart Foundation.", ref: 2, picture: "calendar" }],
    },
  },
  // sources: 1 NHS low blood pressure, 2 BHF 5 tips, 3 BHF low blood pressure, 4 Blood Pressure UK, 5 NHS fainting
  "standing-slowly": {
    sectionRefs: [[[1], [2]], [[2], [4]], [[1, 2], [2]], [[2]], [[5], [5]]],
    helpRefs: [[1], [2], [2], [2], [2], [1]],
    stats: {
      2: [{ value: "10 minutes", label: "Even short strolls of this length, taken through the day, will help, says the British Heart Foundation.", ref: 2, picture: "hours" }],
    },
  },
  // sources: 1 NHS low blood pressure, 2 BHF 5 tips, 3 Blood Pressure UK, 4 BHF low blood pressure, 5 BHF dehydration
  "fluids-salt": {
    sectionRefs: [[[1], [2], [2, 3]], [[2, 4], [5]], [[2], [1]], [[2, 1], [1], [2]], [[2, 4], [2]]],
    helpRefs: [[1], [2], [1], [2], [4, 2]],
    charts: {
      0: { kind: "donut", title: "Blood is mostly plasma", subtitle: "How much of your blood is plasma, which is 90 per cent water", value: 55, prefix: "About", subject: "parts of your blood", label: "are plasma, which is 90 per cent water", sources: "Source: British Heart Foundation, 5 tips to try if you have low blood pressure" },
    },
    stats: {
      1: [{ value: "6 to 8", label: "glasses of fluid a day: the NHS recommendation, unless your team has put you on a fluid restriction, says the British Heart Foundation.", ref: 2 }],
    },
  },
  // sources: 1 NHS low blood pressure, 2 Blood Pressure UK, 3 BHF what causes, 4 BHF 5 tips, 5 Arrhythmia Alliance syncope and falls in the elderly
  treatments: {
    sectionRefs: [[[1], [2]], [[1], [2, 4]], [[1], [2]], [[1], [3], [3]], [[5], [5]]],
    helpRefs: [[2, 4], [1], [5], [3]],
  },
  // sources: 1 NHS falls, 2 Blood Pressure UK, 3 Arrhythmia Alliance syncope and falls in the elderly, 4 Arrhythmia Alliance SaFE
  falls: {
    sectionRefs: [[[1], [2]], [[4], [4]], [[1], [1], [1]], [[1], [1], [1]], [[1]]],
    helpRefs: [[1], [1], [1], [1], [1], [1]],
    charts: {
      0: { kind: "donut", title: "Falls are common in later life", subtitle: "Older people who will fall each year, says Arrhythmia Alliance", value: 25, subject: "older people", label: "will fall each year", sources: "Source: Arrhythmia Alliance (STARS), Syncope and falls in the elderly" },
    },
    stats: {
      1: [{ value: "30 in 100", label: "people aged 65 and over who have fainted will not be aware of it, and report a fall instead, says Arrhythmia Alliance.", ref: 4 }],
    },
  },
  // sources: 1 Blood Pressure UK, 2 NHS fainting, 3 NHS heatwave, 4 NHS heat exhaustion, 5 NHS low blood pressure, 6 NHS amlodipine, 7 NHS risks of drinking too much, 8 Arrhythmia Alliance reflex syncope, 9 NHS falls
  "heat-alcohol": {
    sectionRefs: [[[1], [2, 8]], [[3], [3]], [[3], [2], [9]], [[5], [6], [7]], [[4], [4]]],
    helpRefs: [[3], [3], [3], [5], [9]],
    stats: {
      1: [{ value: "11am to 3pm", label: "The hours to stay in the shade in hot weather, says the NHS.", ref: 3, picture: "hours" }],
      3: [{ value: "14 units", label: "of alcohol a week: the most men and women are advised to drink on a regular basis, says the NHS.", ref: 7, picture: "calendar" }],
    },
  },
  // sources: 1 GOV.UK blackouts and driving, 2 GOV.UK medical conditions and driving, 3 NHS fainting, 4 NHS dizziness, 5 NHS ramipril side effects
  driving: {
    sectionRefs: [[[4], [5]], [[1], [1]], [[1]], [[3], [3]], [[1, 2], [2]]],
    helpRefs: [[4], [1], [1], [3]],
    stats: {
      4: [{ value: "£1,000", label: "The fine you can be given if you do not tell DVLA about a medical condition that affects your driving, says DVLA.", ref: 1 }],
    },
  },
  // sources: 1 NHS low blood pressure, 2 NHS fainting, 3 NHS dehydration, 4 NHS anaphylaxis, 5 BHF what causes, 6 Arrhythmia Alliance Take Fainting to Heart
  "when-to-worry": {
    sectionRefs: [[[1], [2]], [[2], [2], [2]], [[3], [3]], [[5], [4]], [[6]]],
    helpRefs: [[1], [2], [2], [3], [4]],
    stats: {
      1: [{ value: "1 minute", label: "Call 999 if someone who has fainted cannot be woken up within this time, says the NHS.", ref: 2, picture: "hours" }],
    },
  },
};
