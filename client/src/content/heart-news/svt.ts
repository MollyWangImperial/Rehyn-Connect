import type { NewsExtras } from "../ischaemic-news";
// Supraventricular tachycardia (SVT) features: reference numbers (positions in each answer's `sources`, svt-answers.ts) and figures, checked 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  // sources: 1 NHS SVT, 2 Arrhythmia Alliance SVT, 3 AA SVT leaflet, 4 BHF arrhythmias, 5 AA ablation booklet
  "what-it-is": {
    sectionRefs: [[[1], [1, 2]], [[3, 5], [5]], [[1, 2], [5], [4]], [[1, 5], [2]]],
    helpRefs: [[1], [1], [1], [4]],
    charts: {
      0: { kind: "bars", title: "How fast the heart goes", subtitle: "Beats per minute: the top of a normal resting rate, and the usual top during SVT", bars: [{ label: "Normal resting", value: 100 }, { label: "During SVT", value: 220, strong: true }], max: 250, ticks: [0, 50, 100, 150, 200, 250], unit: " bpm", sources: "Sources: NHS, Supraventricular tachycardia (SVT) (a normal resting heart rate is 60 to 100 bpm); Arrhythmia Alliance, Supraventricular Tachycardia (SVT) (during SVT the heart usually beats 150 to 220 times a minute)" },
    },
  },
  // sources: 1 NHS SVT, 2 Arrhythmia Alliance SVT, 3 BHF palpitations at night
  symptoms: {
    sectionRefs: [[[1], [1, 2]], [[1], [2]], [[1], [1]], [[1], [1]]],
    helpRefs: [[1], [3], [1], [1], [1]],
    stats: {
      2: [{ value: "25 to 40", label: "years old: when many people have their first symptoms of SVT, says the NHS.", ref: 1 }],
    },
  },
  // sources: 1 NHS SVT, 2 Arrhythmia Alliance SVT, 3 AA SVT leaflet, 4 AA Living with SVT questions, 5 BHF palpitations, 6 BHF when to worry about palpitations
  triggers: {
    sectionRefs: [[[1], [3]], [[4]], [[5], [6]], [[1, 2], [5]]],
    helpRefs: [[1], [1], [2], [5], [6]],
  },
  // sources: 1 NHS ECG, 2 AA SVT leaflet, 3 BHF ECG, 4 BHF implantable loop recorders, 5 BHF EP study, 6 AA Living with SVT questions
  tests: {
    sectionRefs: [[[1, 3], [2]], [[1], [1, 3], [2]], [[3, 4], [4]], [[2], [6]], [[5], [5]]],
    helpRefs: [[1], [1], [3], [1], [2]],
    stats: {
      1: [{ value: "Up to 7 days", label: "for a portable ECG, though 24 to 48 hours is usual, says the NHS.", ref: 1, picture: "calendar" }],
      2: [{ value: "15 minutes", label: "or so to have an implantable loop recorder fitted, says the British Heart Foundation.", ref: 4, picture: "hours" }],
    },
  },
  // sources: 1 AA SVT leaflet, 2 NHS SVT, 3 AA Living with SVT questions
  "stopping-episode": {
    sectionRefs: [[[1], [1, 2]], [[1], [1], [1]], [[1], [1], [3]], [[1], [1]], [[1], [2]]],
    helpRefs: [[2], [1], [1], [1], [1]],
    stats: {
      1: [{ value: "20 seconds", label: "or so: how long to strain in the Valsalva manoeuvre, lying or sitting down, says the Arrhythmia Alliance.", ref: 1 }],
    },
  },
  // sources: 1 NHS SVT, 2 Arrhythmia Alliance SVT, 3 AA SVT leaflet, 4 AA Living with SVT questions, 5 NHS beta blockers, 6 NHS about verapamil, 7 BHF cardioversion, 8 NHS arrhythmia
  medicines: {
    sectionRefs: [[[1, 2], [3]], [[1, 2], [7, 3]], [[3], [5, 8], [6]], [[4]], [[5], [5]]],
    helpRefs: [[3], [4], [5], [6], [5]],
    stats: {
      2: [{ value: "1 to 2 weeks", label: "for verapamil to work fully, though it starts to work on the first day, says the NHS.", ref: 6, picture: "calendar" }],
    },
  },
  // sources: 1 NHS SVT, 2 AA ablation booklet, 3 BHF ablation, 4 AA SVT leaflet, 5 GOV.UK catheter ablation and driving, 6 AA Living with SVT questions
  ablation: {
    sectionRefs: [[[1], [2]], [[4, 2], [6], [2]], [[2], [2], [3]], [[2], [2], [2]], [[5], [5]]],
    helpRefs: [[2, 3], [3], [3], [2], [2]],
    stats: {
      2: [{ value: "15 minutes", label: "for the shortest ablation; a more complex one can take three or four hours, says the British Heart Foundation.", ref: 3, picture: "hours" }],
      4: [{ value: "2 days", label: "without driving after an ablation for SVT, with a car or motorcycle licence, says DVLA.", ref: 5, picture: "calendar" }],
    },
  },
  // sources: 1 NHS SVT, 2 NHS heart palpitations, 3 NHS arrhythmia, 4 NHS when to call 999, 5 NHS 111
  "when-to-get-help": {
    sectionRefs: [[[1], [1]], [[2]], [[1, 2], [1]], [[2, 3, 5], [4]], [[1]]],
    helpRefs: [[1], [1], [1, 2], [2], [2, 3]],
  },
  // sources: 1 NHS SVT, 2 BHF when to worry about palpitations, 3 BHF finding a safe exercise level, 4 NHS physical activity guidelines, 5 AA ablation booklet
  exercise: {
    sectionRefs: [[[1], [2]], [[2], [4]], [[2], [3], [3]], [[3], [1]], [[5]]],
    helpRefs: [[2], [2], [3], [3], [3]],
    stats: {
      1: [{ value: "150 minutes", label: "of moderate intensity activity a week for adults to aim for, says the NHS.", ref: 4, picture: "calendar" }],
    },
  },
  // sources: 1 NHS SVT, 2 BHF caffeine, 3 BHF alcohol, 4 Arrhythmia Alliance SVT, 5 NHS beta blockers
  "caffeine-alcohol": {
    sectionRefs: [[[1], [1, 4]], [[2], [2], [2]], [[2], [2]], [[3], [3], [5]]],
    helpRefs: [[1], [2], [2], [3], [3]],
    charts: {
      2: { kind: "bars", title: "Caffeine in a drink", subtitle: "Average milligrams of caffeine in one serving", bars: [{ label: "Filter coffee", value: 90 }, { label: "Espresso", value: 80 }, { label: "Energy drink", value: 80, strong: true }, { label: "Black tea", value: 50 }, { label: "Cola", value: 40 }, { label: "Green tea", value: 35 }, { label: "Decaf coffee", value: 7 }], max: 100, ticks: [0, 25, 50, 75, 100], unit: "mg", sources: "Source: British Heart Foundation, Is caffeine bad for you? How much is too much? (filtered or instant coffee 200ml, espresso 60ml, energy drink 250ml, black tea 220ml, cola 355ml, green tea 220ml, decaffeinated coffee 200ml)" },
    },
    stats: {
      3: [{ value: "14 units", label: "of alcohol a week at most, spread over 3 days or more, says the British Heart Foundation.", ref: 3, picture: "calendar" }],
    },
  },
  // sources: 1 GOV.UK tachycardia and driving, 2 GOV.UK catheter ablation and driving, 3 BHF arrhythmias, 4 BHF work, 5 GOV.UK Access to Work, 6 NHS beta blockers
  "driving-work": {
    sectionRefs: [[[1], [1], [1]], [[1]], [[2], [3]], [[3], [4]], [[5], [5]]],
    helpRefs: [[1], [3], [6], [3], [4, 5]],
    stats: {
      0: [{ value: "12 months", label: "Tell DVLA if tachycardia has caused sudden dizziness or fainting in this time (car or motorcycle licence).", ref: 1, picture: "calendar" }],
    },
  },
  // sources: 1 BHF anxiety, 2 BHF when to worry about palpitations, 3 BHF arrhythmias, 4 NHS talking therapies, 5 BHF Heart Helpline, 6 AA Living with SVT questions, 7 AA SVT leaflet
  worry: {
    sectionRefs: [[[1, 3], [2]], [[6, 7], [1], [1]], [[1], [1], [1]], [[1, 4], [5], [1]]],
    helpRefs: [[1], [1], [1], [4], [5], [1]],
    stats: {
      2: [{ value: "20 minutes", label: "set aside to focus on your worries can stop them taking over your day, says the British Heart Foundation.", ref: 1, picture: "hours" }],
    },
  },
};
