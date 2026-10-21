import type { NewsExtras } from "../ischaemic-news";
// Ectopic beats features: reference numbers (positions in each answer's `sources`, ectopic-answers.ts) and figures, checked 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  // sources: 1 BHF ectopic beats, 2 AF Association factsheet, 3 NHS heart palpitations
  "what-it-is": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[2], [2]], [[1], [1]], [[1, 2]]],
    helpRefs: [[1], [3], [1], [1]],
  },
  // sources: 1 NHS heart palpitations, 2 BHF ectopic beats, 3 BHF heart palpitations, 4 AF Association factsheet
  feelings: {
    sectionRefs: [[[1], [2]], [[1, 2], [3]], [[4]], [[1], [2]]],
    helpRefs: [[1], [1], [3], [1]],
  },
  // sources: 1 BHF ectopic beats, 2 NHS heart palpitations, 3 BHF heart palpitations, 4 AF Association factsheet, 5 BHF when to worry
  causes: {
    sectionRefs: [[[1], [2]], [[1], [4]], [[1], [5]], [[2, 3]]],
    helpRefs: [[1], [1], [1], [5], [3]],
  },
  // sources: 1 AF Association factsheet, 2 BHF ectopic beats, 3 NHS heart palpitations
  harmless: {
    sectionRefs: [[[2], [1]], [[1], [1]], [[3], [2]], [[3], [3]]],
    helpRefs: [[3], [3], [2], [1], [3]],
    stats: {
      1: [{ value: "Over 30 seconds", label: "Some schools of thought consider ectopic episodes lasting longer than this to be atrial fibrillation, says the AF Association.", ref: 1, picture: "hours" }],
    },
  },
  // sources: 1 NHS ECG, 2 BHF ECG, 3 NHS echocardiogram, 4 BHF ectopic beats, 5 AF Association factsheet, 6 BHF when to worry, 7 BHF echocardiogram
  tests: {
    sectionRefs: [[[5]], [[1], [2]], [[6], [1], [2]], [[3, 7], [4, 3]], [[1], [6]]],
    helpRefs: [[1], [2], [2], [1], [1]],
    charts: {
      2: { kind: "range", title: "How long a portable ECG is worn", subtitle: "Hours, usually; it can be up to 7 days", from: 24, to: 48, unit: "hours", sources: "Source: NHS, Electrocardiogram (ECG)" },
    },
    stats: {
      2: [{ value: "Up to 3 years", label: "of heartbeat monitoring from an implantable loop recorder, says the British Heart Foundation.", ref: 2, picture: "calendar" }],
      3: [{ value: "30 to 40 minutes", label: "is about how long the most common echo scan takes, says the NHS.", ref: 3, picture: "hours" }],
    },
  },
  // sources: 1 BHF heart palpitations, 2 BHF when to worry, 3 BHF ectopic beats, 4 AF Association factsheet, 5 NHS heart palpitations, 6 NHS insomnia, 7 NHS alcohol units, 8 BHF palpitations at night
  triggers: {
    sectionRefs: [[[1], [5]], [[1, 2], [1, 7]], [[3, 6], [2], [2]], [[1], [4]], [[1, 8]]],
    helpRefs: [[1], [1, 7], [1], [1], [1], [2]],
    charts: {
      2: { kind: "range", title: "Fluid each day", subtitle: "Glasses of fluid a day, from the Eatwell Guide", from: 6, to: 8, unit: "glasses a day", sources: "Source: British Heart Foundation, When to worry about heart palpitations" },
    },
    stats: {
      1: [{ value: "14 units", label: "of alcohol a week at most: the recommended limit, says the British Heart Foundation.", ref: 1, picture: "calendar" }],
    },
  },
  // sources: 1 AF Association factsheet, 2 BHF heart palpitations, 3 NHS heart palpitations, 4 NHS arrhythmia, 5 NHS beta blockers, 6 Leeds Teaching Hospitals leaflet, 7 BHF ectopic beats
  treatment: {
    sectionRefs: [[[7], [1], [3]], [[1], [5, 1]], [[5], [5]], [[4], [6], [6]], [[6]]],
    helpRefs: [[1], [5], [5], [6], [1]],
    stats: {
      3: [{ value: "About 1 in 1,000", label: "ablation procedures for ventricular ectopics has a life-threatening complication, which is rare, says a Leeds Teaching Hospitals NHS Trust leaflet.", ref: 6 }],
    },
  },
  // sources: 1 NHS heart palpitations, 2 BHF heart palpitations, 3 NHS arrhythmia, 4 NHS chest pain, 5 BHF anxiety with a heart problem
  urgent: {
    sectionRefs: [[[1, 3], [2]], [[1, 3]], [[1, 3]], [[4]], [[5]]],
    helpRefs: [[1], [1, 3], [1, 3], [1, 3], [5]],
  },
  // sources: 1 BHF when to worry, 2 BHF anxiety with a heart problem, 3 NHS breathing exercises, 4 BHF breathing exercises, 5 BHF ectopic beats
  "noticing-less": {
    sectionRefs: [[[1], [1]], [[5], [3], [4]], [[2], [2]], [[2], [2]]],
    helpRefs: [[5], [3], [2], [2], [2]],
    stats: {
      1: [{ value: "5 minutes", label: "or more of calm breathing, ideally as part of your daily routine, says the NHS.", ref: 3, picture: "hours" }],
    },
  },
  // sources: 1 BHF when to worry, 2 BHF ectopic beats, 3 NHS heart palpitations, 4 NHS physical activity guidelines
  exercise: {
    sectionRefs: [[[2, 3], [1]], [[1], [4]], [[1], [1]], [[4], [4]], [[1]]],
    helpRefs: [[1], [1], [1], [1], [4]],
    charts: {
      2: { kind: "range", title: "A gentle start", subtitle: "Minutes of walking, if exercise is new to you", from: 5, to: 10, unit: "minutes", sources: "Source: British Heart Foundation, When to worry about heart palpitations" },
    },
    stats: {
      3: [{ value: "150 minutes", label: "of moderate intensity activity a week to aim for, says the NHS.", ref: 4, picture: "calendar" }],
    },
  },
  // sources: 1 BHF palpitations at night, 2 AF Association factsheet, 3 BHF when to worry, 4 NHS insomnia, 5 BHF breathing exercises
  night: {
    sectionRefs: [[[2]], [[1], [1, 3]], [[1]], [[1], [1]], [[4], [1]]],
    helpRefs: [[1], [1], [4], [4], [5]],
    stats: {
      4: [{ value: "6 hours", label: "before bed: no smoking, alcohol, tea or coffee for at least this long, says the NHS.", ref: 4, picture: "hours" }],
    },
  },
  // sources: 1 BHF when to worry, 2 BHF anxiety with a heart problem, 3 NHS GAD, 4 NHS talking therapies, 5 BHF heart palpitations
  worry: {
    sectionRefs: [[[1], [3]], [[2], [2]], [[1], [2], [2, 3]], [[1, 2], [4], [1]], [[3], [5]]],
    helpRefs: [[1], [2], [4], [3], [3], [5]],
    stats: {
      2: [{ value: "About 20 minutes", label: "set aside at a time that suits you to focus on your worries, suggests the British Heart Foundation.", ref: 2, picture: "hours" }],
    },
  },
};
