import type { NewsExtras } from "../ischaemic-news";
// Hiatus hernia features: paragraph references (numbers are positions in each answer's own sources in hiatus-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [5]], [[1, 3], [1, 3]], [[2, 1], [3, 2]], [[5], [4, 1]]],
    helpRefs: [[2], [2], [2], [2], [1]],
    stats: {
      2: [{ value: "A third", label: "of people over 50 are estimated to have a hiatus hernia, says NHS inform.", ref: 1, picture: "one-in", of: 3 }],
    },
    charts: {
      1: { kind: "donut", title: "The most common type", subtitle: "Hiatus hernias, out of every 100", value: 80, prefix: "More than", subject: "hiatus hernias", label: "are the sliding type", sources: "Source: NHS inform, Hiatus hernia" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1, 2], [2]], [[1], [1, 4]], [[3, 5], [3]], [[6], [6]]],
    helpRefs: [[1], [6], [1], [3]],
    stats: {
      2: [{ value: "Up to 1 in 4", label: "UK adults are affected by heartburn, says Guts UK.", ref: 3, picture: "one-in", of: 4 }],
    },
  },
  "causes": {
    sectionRefs: [[[1], [2, 3]], [[3], [4]], [[3], [2]], [[5], [4]]],
    helpRefs: [[1], [1], [1], [2], [4]],
    stats: {
      2: [{ value: "Over 50", label: "is the age group in which most hiatus hernias develop, says NHS Borders.", ref: 3 }],
    },
  },
  "tests": {
    sectionRefs: [[[1], [5]], [[3], [3], [3]], [[2], [2], [4]], [[2], [4]], [[3], [6]]],
    helpRefs: [[3], [6], [3], [3], [2], [3]],
    stats: {
      1: [{ value: "15 to 45 minutes", label: "is how long a gastroscopy should take, says the NHS.", ref: 3 }],
      2: [{ value: "About 15 minutes", label: "is how long a barium swallow usually takes, says NHS inform.", ref: 2 }],
      4: [{ value: "At least 6 hours", label: "without eating before a gastroscopy, says the NHS.", ref: 3, picture: "hours" }],
    },
  },
  "self-help": {
    sectionRefs: [[[1, 2], [3]], [[2, 3, 4], [1, 2]], [[1, 2], [3]], [[2, 3], [2, 3], [3]], [[1], [5]]],
    helpRefs: [[1], [1], [1, 2], [1, 3], [1], [1]],
    stats: {
      3: [{ value: "14 units", label: "of alcohol a week at most, with some alcohol-free days, says Guts UK.", ref: 3 }],
    },
  },
  "medicines": {
    sectionRefs: [[[1, 2, 3, 5], [1, 2, 4], [2]], [[1, 6], [6], [8, 9]], [[6, 9], [9]], [[7], [7, 10], [7]], [[1, 8]]],
    helpRefs: [[1], [1, 2], [2], [8], [6], [1]],
    stats: {
      1: [{ value: "4 or 8 weeks", label: "is how long a PPI is usually taken for, depending on how serious the reflux is, says the NHS.", ref: 6, picture: "calendar" }],
      3: [{ value: "2 weeks", label: "at most for omeprazole bought without a prescription, says the NHS.", ref: 7 }],
    },
  },
  "surgery": {
    sectionRefs: [[[1], [2, 3], [2]], [[1, 5], [5, 3]], [[5, 4], [1], [2]], [[2], [3], [6]], [[4], [1]]],
    helpRefs: [[6], [4, 5], [3], [4, 5], [3]],
    stats: {
      1: [{ value: "60 to 90 minutes", label: "is how long the operation takes, says Hull University Teaching Hospitals.", ref: 3 }],
      3: [{ value: "About 1 in 100", label: "cases have side effects that persist and may need more surgery, says NHS inform.", ref: 2, picture: "one-in", of: 100 }],
      4: [{ value: "5 in 6", label: "patients have acid reflux stopped by this surgery, says Gloucestershire Hospitals.", ref: 4 }],
    },
    charts: {
      2: { kind: "range", title: "Back to work", subtitle: "Weeks after the operation before returning to work, depending on the job", from: 3, to: 6, unit: "weeks", sources: "Source: NHS inform, Hiatus hernia" },
    },
  },
  "urgent": {
    sectionRefs: [[[1], [1]], [[2], [2], [2]], [[3], [4]], [[5], [5]]],
    helpRefs: [[1], [2], [2], [3], [2]],
  },
  "eating": {
    sectionRefs: [[[2, 3], [3, 4]], [[1, 2], [3]], [[3], [5, 3]], [[5, 2], [3]]],
    helpRefs: [[3], [3], [3], [5], [2], [2]],
    stats: {
      1: [{ value: "At least 3 hours", label: "between your main evening meal and going to bed, says Guts UK.", ref: 3, picture: "hours" }],
    },
  },
  "sleep": {
    sectionRefs: [[[3], [1, 4]], [[1, 4, 2], [4, 2], [3]], [[3]], [[1, 2], [3, 5]]],
    helpRefs: [[1], [4], [3], [1], [1, 3]],
    charts: {
      1: { kind: "range", title: "How far to raise the bed", subtitle: "Raising the head end of the bed, in centimetres, so your chest and head are above your waist", from: 10, to: 20, unit: "cm", sources: "Source: NHS, Hiatus hernia" },
    },
  },
  "exercise": {
    sectionRefs: [[[1], [3, 2]], [[4], [4], [3, 2]], [[5], [5, 6], [6, 5]]],
    helpRefs: [[2], [4], [4], [2], [5, 6]],
    stats: {
      1: [{ value: "150 minutes", label: "of moderate activity a week is the aim for adults, says the NHS.", ref: 4 }],
    },
    charts: {
      2: { kind: "bars", title: "No heavy lifting after surgery", subtitle: "Weeks to avoid heavy lifting after anti-reflux surgery, in two NHS hospital leaflets", bars: [{ label: "Gloucestershire Hospitals", value: 4 }, { label: "Worcestershire Acute Hospitals", value: 6, strong: true }], max: 8, ticks: [0, 2, 4, 6, 8], unit: " weeks", sources: "Sources: Gloucestershire Hospitals, Laparoscopic anti-reflux surgery; Worcestershire Acute Hospitals, Laparoscopic hiatus hernia repair" },
    },
  },
  "checks": {
    sectionRefs: [[[1], [2]], [[3], [6, 3]], [[5], [4], [5]], [[7]], [[3]]],
    helpRefs: [[1], [2], [3], [4], [4]],
    stats: {
      3: [{ value: "6 to 8 weeks", label: "after going home is when the clinic follow-up usually is, says Gloucestershire Hospitals.", ref: 7, picture: "calendar" }],
    },
    charts: {
      2: { kind: "donut", title: "Barrett's oesophagus", subtitle: "People with GORD, out of every 100", value: 11, prefix: "About", subject: "people with GORD", label: "get Barrett's oesophagus (about 11 in 100)", sources: "Source: Guts UK, Barrett's oesophagus" },
    },
  },
};
