import type { NewsExtras } from "../ischaemic-news";
// Slow heart rate and heart block features: reference numbers (positions in each answer's `sources`, slow-heart-answers.ts) and figures, checked 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  // sources: 1 BHF bradycardia (Heart Matters), 2 BHF heart rate, 3 Arrhythmia Alliance bradycardia, 4 BHF arrhythmias
  "what-it-is": {
    sectionRefs: [[[1, 2], [3]], [[1], [1], [2]], [[1], [4]], [[1], [1, 2]]],
    helpRefs: [[1], [1], [2], [2], [2]],
    charts: {
      0: { kind: "range", title: "A normal resting heart rate", subtitle: "Beats per minute at rest, for adults; below 60 is a low heart rate", from: 60, to: 100, unit: "beats per minute", sources: "Sources: British Heart Foundation, When should I worry about bradycardia; Heart rate: what's normal and how to check it" },
    },
    stats: {
      2: [{ value: "Over 2 million", label: "people in the UK are estimated to experience heart rhythm problems, and most will be able to lead normal lives, says the British Heart Foundation.", ref: 2 }],
    },
  },
  // sources: 1 NHS heart block, 2 BHF heart block, 3 BHF arrhythmias
  "heart-block": {
    sectionRefs: [[[1], [2]], [[1], [2]], [[2, 1], [2]], [[2]], [[2], [2, 3]]],
    helpRefs: [[2], [1], [2], [1, 2], [2]],
    stats: {
      1: [{ value: "3 degrees", label: "of AV heart block: first, second and third (complete), say the NHS and the British Heart Foundation.", ref: 1 }],
    },
  },
  // sources: 1 NHS heart block, 2 BHF heart block, 3 BHF heart rate, 4 BHF bradycardia, 5 Arrhythmia Alliance bradycardia, 6 NHS arrhythmia
  causes: {
    sectionRefs: [[[6], [2]], [[1], [2, 1]], [[4], [3]], [[3, 1, 2], [2]], [[1], [2, 5]]],
    helpRefs: [[2], [3], [3], [6]],
  },
  // sources: 1 NHS heart block, 2 BHF heart block, 3 BHF bradycardia, 4 NHS fainting
  symptoms: {
    sectionRefs: [[[1], [2]], [[1], [1, 2]], [[1], [1]], [[1], [1]], [[4]]],
    helpRefs: [[1], [1], [3], [4], [1]],
    stats: {
      3: [{ value: "1 minute", label: "Call 999 if someone faints and they are not breathing or cannot be woken up within this time, says the NHS.", ref: 1 }],
    },
  },
  // sources: 1 NHS heart block, 2 NHS ECG, 3 BHF ECG, 4 Arrhythmia Alliance heart monitor, 5 BHF heart block
  tests: {
    sectionRefs: [[[1], [5]], [[3], [3]], [[2], [2, 4]], [[3], [3]], [[1, 5], [2]]],
    helpRefs: [[2], [2], [3], [2], [2]],
    stats: {
      2: [{ value: "Up to 7 days", label: "that a portable ECG may be worn, though it is usually 24 to 48 hours, says the NHS.", ref: 2, picture: "calendar" }],
      3: [{ value: "Up to 3 years", label: "that an implantable loop recorder can continuously monitor your heartbeat, says the British Heart Foundation.", ref: 3, picture: "calendar" }],
    },
  },
  // sources: 1 NHS pacemakers, 2 BHF pacemakers, 3 NHS heart block, 4 Arrhythmia Alliance pacemaker, 5 BHF booklet, 6 Arrhythmia Alliance bradycardia
  pacemaker: {
    sectionRefs: [[[1], [2, 4]], [[2, 4], [2, 4]], [[4], [3], [6]], [[3], [5]], [[5, 2], [2, 5]]],
    helpRefs: [[5], [2], [5], [2]],
    stats: {
      0: [{ value: "20 to 50 grams", label: "is what a pacemaker usually weighs; it is about 5 by 4 centimetres, smaller than a matchbox, says the British Heart Foundation.", ref: 2 }],
    },
  },
  // sources: 1 NHS pacemakers, 2 BHF pacemakers, 3 BHF booklet, 4 Arrhythmia Alliance pacemaker
  "pacemaker-fitting": {
    sectionRefs: [[[1], [3]], [[2, 3], [1, 2]], [[2, 3], [1], [1, 4]], [[1, 3], [1]], [[1], [1]]],
    helpRefs: [[3], [3], [3], [1], [1]],
    stats: {
      1: [{ value: "About 1 hour", label: "to fit a standard pacemaker, though it can take longer if you're having another procedure at the same time, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  // sources: 1 BHF heart rate, 2 NHS beta blockers, 3 NHS about digoxin, 4 NHS heart block, 5 BHF heart block, 6 NHS bisoprolol,
  // 7 Arrhythmia Alliance bradycardia, 8 NHS digoxin side effects, 9 NHS how and when to take digoxin
  "medicines-review": {
    sectionRefs: [[[1], [1, 4, 5]], [[2], [2]], [[3], [3]], [[7], [6, 9], [5]], [[2], [8]]],
    helpRefs: [[1], [1], [6], [2], [2]],
    stats: {
      4: [{ value: "More than 2", label: "of the common side effects of digoxin could mean too much digoxin in your blood, so tell your doctor, says the NHS.", ref: 8 }],
    },
  },
  // sources: 1 BHF Heart Matters 15 everyday things, 2 BHF booklet, 3 NHS pacemakers, 4 Arrhythmia Alliance pacemaker
  "living-pacemaker": {
    sectionRefs: [[[1], [2, 4]], [[1, 2], [1]], [[1, 2], [1, 2, 4]], [[2, 3], [3], [1]], [[2], [2]]],
    helpRefs: [[1, 2, 4], [1, 2, 4], [2, 3], [3], [1]],
    charts: {
      2: { kind: "bars", title: "How far to keep things from a pacemaker", subtitle: "The least distance to keep between each item and your pacemaker, in centimetres", bars: [{ label: "Phone, headphones, hairdryer", value: 15 }, { label: "Smartwatch charger", value: 30 }, { label: "Induction hob", value: 60, strong: true }], max: 60, ticks: [0, 15, 30, 45, 60], unit: "cm", sources: "Source: British Heart Foundation, Pacemakers: 15 everyday things you can and cannot do with one" },
    },
  },
  // sources: 1 DVLA pacemakers and driving, 2 DVLA assessing fitness to drive (cardiovascular), 3 DVLA arrhythmia and driving, 4 NHS pacemakers, 5 BHF booklet
  driving: {
    sectionRefs: [[[1], [1]], [[2], [2]], [[2], [5, 3]], [[4], [1], [1]]],
    helpRefs: [[1], [4], [4], [5], [5]],
    charts: {
      1: { kind: "bars", title: "No driving after a pacemaker implant", subtitle: "The least time off driving after a pacemaker implant or box change, by licence", bars: [{ label: "Car or motorcycle", value: 1 }, { label: "Bus or lorry", value: 6, strong: true }], max: 6, ticks: [0, 2, 4, 6], unit: " weeks", sources: "Source: DVLA, Cardiovascular disorders: assessing fitness to drive (pacemaker implant, including box change)" },
    },
    stats: {
      3: [{ value: "Up to £1,000", label: "is the fine for not telling DVLA about a medical condition or treatment that affects your driving, says the DVLA.", ref: 1 }],
    },
  },
  // sources: 1 BHF booklet, 2 NHS pacemakers, 3 BHF Heart Matters 15 everyday things, 4 BHF heart rate and exercise
  activity: {
    sectionRefs: [[[1], [1]], [[1, 2], [1, 2]], [[2, 3], [1]], [[1], [1, 3]], [[4], [4]]],
    helpRefs: [[1], [1], [1, 2], [4], [1]],
    stats: {
      1: [{ value: "4 to 6 weeks", label: "of keeping your arm below shoulder height on the pacemaker side, say the NHS and the British Heart Foundation.", ref: 1, picture: "calendar" }],
      4: [{ value: "150 minutes", label: "of moderate intensity exercise a week is what the UK's Chief Medical Officer guidelines recommend, says the British Heart Foundation.", ref: 4, picture: "calendar" }],
    },
  },
  // sources: 1 NHS pacemakers, 2 BHF booklet, 3 BHF Heart Matters 15 everyday things, 4 Arrhythmia Alliance pacemaker, 5 Arrhythmia Alliance remote monitoring
  checks: {
    sectionRefs: [[[1], [2]], [[5], [3]], [[1, 2], [3]], [[2], [2]], [[3], [2]]],
    helpRefs: [[2], [3], [2], [3], [2]],
    stats: {
      0: [{ value: "Every 12 months", label: "at least: how often the pacemaker clinic checks your pacemaker after the first few months, says the NHS.", ref: 1, picture: "calendar" }],
      2: [{ value: "6 to 10 years", label: "is how long a pacemaker battery usually lasts, says the British Heart Foundation's booklet; the NHS says 6 to 7 years.", ref: 2 }],
    },
  },
};
