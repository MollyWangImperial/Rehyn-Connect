import type { NewsExtras } from "../ischaemic-news";
// Type 1 diabetes features: paragraph references (numbers are positions in each answer's own sources in t1d-answers.ts), charts and big figures, all checked on 20 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1]], [[2, 1], [2]], [[2, 3], [1, 3]], [[1], [3, 2]], [[4], [4]]],
    helpRefs: [[4], [4], [4], [5], [6]],
    stats: {
      3: [
        { value: "Fewer than 1 in 10", label: "people in the UK who have diabetes have type 1, says Diabetes UK.", ref: 3, picture: "one-in", of: 10 },
        { value: "Over 400,000", label: "people in the UK live with type 1 diabetes, says Breakthrough T1D UK.", ref: 2 },
      ],
    },
  },
  "hypos-hypers": {
    sectionRefs: [[[1, 2], [2, 1]], [[1, 2], [1, 2]], [[2, 1], [2, 1]], [[3, 4], [3, 4]], [[3, 4], [3]]],
    helpRefs: [[2], [1, 2], [1], [2], [3]],
    stats: {
      0: [{ value: "Below 4mmol/l", label: "is usually when blood sugar counts as a hypo, says Diabetes UK.", ref: 1 }],
      1: [{ value: "15 to 20g", label: "of fast-acting carbohydrate is what Diabetes UK says to take to treat a hypo.", ref: 1 }],
    },
  },
  "dka": {
    sectionRefs: [[[2, 1], [2, 3, 1]], [[1, 2], [1, 2, 3]], [[1, 2, 3], [1, 2, 3]], [[2, 4], [3, 1]], [[1], [1]]],
    helpRefs: [[1], [1], [1, 4], [1], [1], [1]],
    charts: {
      1: { kind: "donut", title: "Sometimes the first sign", subtitle: "Children diagnosed with diabetes, out of every 100", value: 23, subject: "children", label: "are diagnosed with diabetes in DKA", sources: "Source: Diabetes UK, What are ketones?" },
    },
    stats: {
      2: [{ value: "About 24 hours", label: "is how long DKA signs usually take to develop, though they can come on faster, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  "hba1c": {
    sectionRefs: [[[1, 3], [1]], [[1], [1]], [[1, 3]], [[2], [2, 4]], [[2], [1]]],
    helpRefs: [[1], [1], [2], [2], [2]],
    stats: {
      1: [{ value: "48mmol/mol", label: "or below is the ideal HbA1c for people with diabetes, says Diabetes UK.", ref: 1 }],
    },
    charts: {
      3: { kind: "donut", title: "Aim for at least 70%", subtitle: "Time in range, out of every 100 parts of the day", value: 70, prefix: "At least", subject: "parts of the day", label: "in your target range is what most experts recommend", sources: "Source: Diabetes UK, Time in range for diabetes" },
    },
  },
  "insulin": {
    sectionRefs: [[[1, 2], [1]], [[3], [3, 4]], [[3], [3]], [[4], [4]], [[3, 5], [4]]],
    helpRefs: [[6], [1], [3], [4, 5], [1]],
    charts: {
      3: { kind: "donut", title: "Most people inject", subtitle: "People with type 1 diabetes in the UK, out of every 100", value: 90, prefix: "Around", subject: "people with type 1 in the UK", label: "inject insulin several times a day", sources: "Source: Breakthrough T1D UK, Insulin" },
    },
    stats: {
      3: [{ value: "4 to 8", label: "injections a day is what a basal-bolus regime usually means, says Breakthrough T1D UK.", ref: 4 }],
    },
  },
  "carb-counting": {
    sectionRefs: [[[1, 2], [2]], [[2], [2]], [[2], [2]], [[2], [2]], [[2, 3], [4]]],
    helpRefs: [[2], [2], [2], [2], [2]],
    stats: {
      0: [{ value: "10g", label: "of carbohydrate usually makes one carbohydrate portion, says Diabetes UK.", ref: 2 }],
      2: [{ value: "7 units", label: "of bolus insulin for 70g of carbohydrate, on a ratio of 1 unit for every 10g: Diabetes UK's worked example.", ref: 2 }],
    },
  },
  "sensors-pumps": {
    sectionRefs: [[[1], [1]], [[1]], [[2], [2]], [[3, 4], [3]], [[4, 3], [2]]],
    helpRefs: [[1, 3], [1], [1], [2], [3]],
    stats: {
      1: [{ value: "Up to 15 minutes", label: "is how far a CGM can lag behind blood sugar levels, says Diabetes UK.", ref: 1 }],
    },
    charts: {
      3: { kind: "donut", title: "Less time managing diabetes", subtitle: "Parents in a study of children's closed loop systems, out of every 100", value: 90, subject: "parents", label: "reported spending less time managing diabetes", sources: "Source: Diabetes UK, What are closed loop systems?" },
    },
  },
  "sick-days": {
    sectionRefs: [[[2, 4, 3]], [[1], [2]], [[1], [1]], [[1], [1]], [[1, 2], [2]]],
    helpRefs: [[1], [1], [1, 2], [1], [1], [1]],
    stats: {
      2: [{ value: "Every 4 hours", label: "at least: how often to check blood sugar when you are ill, including at night, says Diabetes UK.", ref: 1, picture: "hours" }],
    },
  },
  "exercise": {
    sectionRefs: [[[1], [1]], [[2, 1], [1]], [[1], [1]], [[1, 3], [1]]],
    helpRefs: [[1, 2], [1], [1], [1], [2]],
    stats: {
      2: [{ value: "8 to 12 hours", label: "after exercise, blood glucose could drop too low, says Breakthrough T1D UK.", ref: 1, picture: "hours" }],
    },
  },
  "driving": {
    sectionRefs: [[[1], [2]], [[3], [3, 4]], [[3, 1], [3, 4]], [[3], [3]]],
    helpRefs: [[1, 2], [3, 4], [3], [3], [3], [3]],
    stats: {
      0: [{ value: "Up to £1,000", label: "fine for not telling the DVLA about a medical condition that affects your driving, says the government.", ref: 2 }],
      2: [{ value: "45 minutes", label: "to wait after glucose is back to 5mmol/l or above before driving again, says Diabetes UK.", ref: 3, picture: "hours" }],
    },
  },
  "alcohol": {
    sectionRefs: [[[1], [1]], [[1, 2], [2, 3]], [[1], [1]], [[1], [1]], [[3]]],
    helpRefs: [[1, 2], [2, 3], [1], [1], [1], [1]],
    stats: {
      0: [{ value: "Up to 24 hours", label: "is how long the raised hypo risk can last after drinking, says Diabetes UK.", ref: 1, picture: "hours" }],
      1: [{ value: "14 units", label: "a week at most, spread over three days or more, say the NHS and Diabetes UK.", ref: 2, picture: "calendar" }],
    },
  },
  "burnout": {
    sectionRefs: [[[1, 2], [1]], [[1]], [[1], [1]], [[1, 3], [3]], [[1]]],
    helpRefs: [[1], [3], [1], [3], [1, 3], [1]],
    stats: {
      1: [{ value: "1 in 4", label: "people with type 1 diabetes have high levels of diabetes distress, says Diabetes UK.", ref: 1, picture: "one-in-four" }],
    },
  },
  "pregnancy": {
    sectionRefs: [[[1], [3]], [[2, 3], [3]], [[2, 3]], [[3, 2], [3]], [[2], [2]]],
    helpRefs: [[3], [2, 3], [2], [2], [3], [3]],
    charts: {
      1: { kind: "bars", title: "Two HbA1c numbers before pregnancy", subtitle: "HbA1c in mmol/mol", bars: [{ label: "Best before pregnancy: no more than", value: 48, strong: true }, { label: "Above this, wait before trying", value: 86 }], max: 100, ticks: [0, 25, 50, 75, 100], unit: " mmol/mol", sources: "Sources: NHS, Diabetes and pregnancy; Diabetes UK, Type 1 diabetes and pregnancy" },
    },
    stats: {
      2: [{ value: "5mg", label: "of folic acid a day, on prescription, until 12 weeks of pregnancy, says the NHS.", ref: 2 }],
    },
  },
};
