import type { NewsExtras } from "../ischaemic-news";
// Hypos (low blood sugar) features: paragraph references (numbers are positions in each answer's own sources in hypo-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[3, 1], [2]], [[1], [1, 5, 2]], [[4, 2], [2, 3]], [[1], [1]]],
    helpRefs: [[2], [2], [1], [2], [1]],
    stats: {
      0: [{ value: "Below 4mmol/L", label: "is usually where low blood sugar, or a hypo, begins, says the NHS.", ref: 1 }],
    },
  },
  "signs": {
    sectionRefs: [[[3], [1, 2]], [[3], [1]], [[2], [3, 4]], [[2, 5], [5, 1]]],
    helpRefs: [[1], [2], [3], [5], [1]],
  },
  "causes": {
    sectionRefs: [[[1], [1]], [[2], [3, 1]], [[1, 2], [2, 4]], [[1], [5]]],
    helpRefs: [[2, 1], [1, 6], [2], [6], [6], [1]],
  },
  "unawareness": {
    sectionRefs: [[[1], [1]], [[1], [1, 2]], [[1], [1]], [[1], [3, 1]], [[4], [4, 2]]],
    helpRefs: [[1], [1, 5], [1], [1, 5], [5], [2]],
  },
  "treating": {
    sectionRefs: [[[1, 2], [1]], [[1, 2], [1]], [[1, 2], [1]], [[2, 1], [1]]],
    helpRefs: [[4, 1], [1], [2], [1, 2], [1], [3]],
    stats: {
      0: [{ value: "15 to 20g", label: "of a fast-acting carbohydrate is what Diabetes UK suggests to treat a hypo in adults.", ref: 1 }],
      2: [{ value: "10 to 15 minutes", label: "after treating a hypo, check your blood sugar again, says the NHS.", ref: 2 }],
    },
  },
  "severe": {
    sectionRefs: [[[2], [2, 3]], [[1, 2], [1]], [[1], [1]], [[1], [2]], [[1, 2], [3]]],
    helpRefs: [[1], [1], [1], [1], [1], [2]],
    stats: {
      2: [{ value: "10 minutes", label: "after a glucagon injection, if someone has not recovered, call 999, says the NHS.", ref: 1 }],
    },
  },
  "night": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[1], [2]], [[3], [4]], [[5, 6], [7]]],
    helpRefs: [[1], [1], [3], [4], [5]],
    stats: {
      3: [{ value: "Up to 24 hours", label: "is how long the raised risk of a hypo can last after you stop drinking alcohol, says Diabetes UK.", ref: 3, picture: "hours" }],
    },
  },
  "medicines-review": {
    sectionRefs: [[[1], [2]], [[1], [3]], [[4, 5], [6, 7]], [[8], [9]], [[1, 5], [3]]],
    helpRefs: [[5], [1], [5], [3], [1], [1]],
    stats: {
      3: [{ value: "Over 5 years", label: "from April 2024 is how gradually hybrid closed loop systems are being introduced on the NHS for type 1 diabetes, says the NHS.", ref: 9, picture: "calendar" }],
    },
  },
  "driving": {
    sectionRefs: [[[1], [1]], [[1, 3, 4], [1]], [[1], [1, 4]], [[2], [1, 3]], [[2], [2]]],
    helpRefs: [[1, 4], [1], [1], [1], [1], [2]],
    stats: {
      1: [{ value: "Every 2 hours", label: "at least, check your glucose during a journey if you take insulin, says the DVLA.", ref: 1, picture: "hours" }],
      2: [{ value: "45 minutes", label: "at least, wait after your glucose is back to 5mmol/L or above before driving again, says the DVLA.", ref: 1 }],
      4: [{ value: "Up to £1,000", label: "is the fine for not telling the DVLA about a medical condition that affects your driving, says the government.", ref: 2 }],
    },
    charts: {
      2: { kind: "bars", title: "Your reading before you drive", subtitle: "Glucose levels in the DVLA's guide for drivers who take insulin, in mmol/L", bars: [{ label: "No driving: at or below", value: 4 }, { label: "Drive again: at least", value: 5, strong: true }], max: 6, ticks: [0, 2, 4, 6], unit: " mmol/L", sources: "Source: DVLA, A guide to insulin treated diabetes and driving (INF294)" },
    },
  },
  "exercise-alcohol": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[1, 4], [1]], [[2], [2]], [[3, 2], [2]]],
    helpRefs: [[4], [1], [1], [1, 2], [3], [2]],
    stats: {
      4: [{ value: "14 units", label: "of alcohol a week at most, spread over 3 days or more, says the NHS.", ref: 3 }],
    },
    charts: {
      1: { kind: "bars", title: "Before you start exercising", subtitle: "Diabetes UK's starting blood sugar bands, in mmol/L, by the top of each band", bars: [{ label: "Too low: below", value: 4, strong: true }, { label: "Snack may help: to", value: 7 }, { label: "You can begin: to", value: 13 }], max: 15, ticks: [0, 5, 10, 15], unit: " mmol/L", sources: "Source: Diabetes UK, Does exercise lower blood sugar levels?" },
    },
  },
  "telling-others": {
    sectionRefs: [[[1, 2], [3]], [[4], [1, 5]], [[6], [6]], [[6], [6, 7]], [[8], [8]]],
    helpRefs: [[1], [2], [1], [6], [6], [8]],
    stats: {
      3: [{ value: "1 in 6", label: "working people with diabetes feel they have been discriminated against by their employer because of their diabetes, says Diabetes UK.", ref: 6, picture: "one-in", of: 6 }],
    },
    charts: {
      4: { kind: "donut", title: "A common worry", subtitle: "People with diabetes in one study, out of every 100", value: 25, subject: "people with diabetes", label: "said worrying about hypos was a serious problem for them", sources: "Source: Diabetes UK, What is hypo anxiety?" },
    },
  },
  "kit": {
    sectionRefs: [[[1, 2], [2]], [[3, 2], [4]], [[1, 5], [2]], [[2], [6]], [[2, 7], [8]]],
    helpRefs: [[1], [1], [2, 7], [2], [6], [8]],
    charts: {
      3: { kind: "bars", title: "Worried about the cost of hypo treatments", subtitle: "People in Diabetes UK's Cost of Living survey, out of every 100", bars: [{ label: "With type 1 diabetes", value: 51, strong: true }, { label: "With type 2 diabetes", value: 12 }], sources: "Source: Diabetes UK, Half of people living with type 1 diabetes are concerned about hypo treatment costs" },
    },
  },
};
