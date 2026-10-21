import type { NewsExtras } from "../ischaemic-news";
// Overactive thyroid features: paragraph references (numbers are positions in each answer's own sources in overactive-answers.ts), charts and big figures, all checked on 20 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-does": {
    sectionRefs: [[[1], [1, 3]], [[2], [2]], [[2], [2, 4]], [[2], [1]], [[2], [4]]],
    helpRefs: [[2], [2], [1], [2]],
    stats: {
      3: [{ value: "About 10 times", label: "more common in women than in men, says the NHS.", ref: 1, picture: "times" }],
    },
  },
  "causes": {
    sectionRefs: [[[1], [1, 2]], [[1, 4], [2]], [[1], [1]], [[1], [1, 2], [2]]],
    helpRefs: [[3], [4], [2], [2]],
    charts: {
      0: { kind: "donut", title: "Graves' disease leads", subtitle: "People with an overactive thyroid, out of every 100", value: 80, prefix: "About", subject: "people with an overactive thyroid", label: "have Graves' disease: about 4 in every 5", sources: "Source: NHS, Overactive thyroid: causes" },
    },
  },
  "tests": {
    sectionRefs: [[[1], [1, 2]], [[1]], [[1, 2, 5], [4]], [[1], [1]], [[2, 3]]],
    helpRefs: [[2], [3], [2, 4], [1]],
    charts: {
      2: { kind: "bars", title: "Antibodies in Graves' disease", subtitle: "People with Graves' disease who have raised antibodies, out of every 100", bars: [{ label: "TSH receptor antibodies (about)", value: 95, strong: true }, { label: "TPO antibodies as well (about)", value: 70 }], sources: "Source: British Thyroid Foundation, Thyroid antibodies explained" },
    },
  },
  "eyes": {
    sectionRefs: [[[2], [1, 2]], [[1], [2, 1]], [[2], [2]], [[1, 2], [2]], [[2], [2], [3]]],
    helpRefs: [[2], [2], [2], [3], [3], [2]],
    stats: {
      0: [{ value: "Around 1 in 4", label: "people with an overactive thyroid caused by Graves' disease have eye problems, says the NHS.", ref: 1, picture: "one-in-four" }],
      4: [{ value: "Under 5 in 100", label: "people with thyroid eye disease find it becomes very severe, says the British Thyroid Foundation.", ref: 2 }],
    },
  },
  "tablets": {
    sectionRefs: [[[4], [4, 1]], [[2], [2, 6], [5]], [[1, 3], [5]], [[1, 6], [3], [5]], [[6, 4], [2], [2]]],
    helpRefs: [[3], [5], [2], [4], [2], [2]],
    charts: {
      1: { kind: "range", title: "A lasting cure for some", subtitle: "People with Graves' disease with no further problems after one course of tablets, out of every 100", from: 30, to: 50, sources: "Source: British Thyroid Foundation, Antithyroid drug therapy to treat hyperthyroidism" },
    },
    stats: {
      3: [{ value: "Fewer than 1 in 500", label: "people taking antithyroid drugs get the serious drop in white blood cells, and possibly as few as 1 in 3,000, says the British Thyroid Foundation.", ref: 5 }],
    },
  },
  "radioiodine": {
    sectionRefs: [[[1, 2], [1, 2]], [[1], [2]], [[1], [1, 2], [1]], [[1, 2, 3]], [[5, 3], [3, 4]]],
    helpRefs: [[2], [2], [1, 2], [3], [3]],
    charts: {
      2: { kind: "bars", title: "Waiting before a baby", subtitle: "Months to wait after radioiodine before a pregnancy, at least", bars: [{ label: "Women: avoid getting pregnant", value: 6, strong: true }, { label: "Men: avoid fathering a child", value: 4 }], max: 6, ticks: [0, 2, 4, 6], unit: " months", sources: "Source: NHS, Overactive thyroid: treatment" },
    },
  },
  "surgery": {
    sectionRefs: [[[1], [1], [4]], [[2], [1]], [[2], [2]], [[2], [1, 3]]],
    helpRefs: [[2], [2], [2], [1, 3]],
    stats: {
      3: [{ value: "Up to a month", label: "may pass before energy levels come back after a thyroidectomy, says the British Thyroid Foundation.", ref: 2, picture: "calendar" }],
    },
  },
  "beta-blockers": {
    sectionRefs: [[[1], [1]], [[5, 4], [6]], [[2], [1, 2]], [[3, 1], [3]], [[2]]],
    helpRefs: [[2, 1], [3], [3], [2], [2]],
    stats: {
      0: [{ value: "A few hours", label: "is how soon propranolol usually starts to work, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  "anxiety": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[3], [4], [2]], [[2], [2]]],
    helpRefs: [[2], [2], [3], [2], [2], [5]],
  },
  "smoking": {
    sectionRefs: [[[1, 5], [1]], [[1, 2], [1]], [[1, 2], [3, 4]], [[1], [1, 2], [1]]],
    helpRefs: [[2], [1], [1], [1], [6]],
    charts: {
      1: { kind: "bars", title: "Smoke raises the odds", subtitle: "Chance of thyroid eye disease, compared with non-smokers", bars: [{ label: "Smokers", value: 2 }, { label: "Smokers who have radioactive iodine", value: 4 }, { label: "Heavy smokers", value: 8, strong: true }], max: 8, ticks: [0, 2, 4, 6, 8], unit: "×", sources: "Source: British Thyroid Foundation, TED and smoking: information for patients" },
    },
    stats: {
      2: [{ value: "Up to 3 times", label: "more likely to relapse after antithyroid tablets: smokers compared with non-smokers, says the British Thyroid Foundation.", ref: 4, picture: "times" }],
    },
  },
  "pregnancy": {
    sectionRefs: [[[1], [4], [2]], [[1], [4, 2]], [[3], [3], [2]], [[2], [2]], [[2], [3]]],
    helpRefs: [[1, 3], [3], [4], [2], [2]],
    stats: {
      0: [{ value: "6 months", label: "of contraception after radioactive iodine, says the NHS, because the treatment can harm an unborn baby.", ref: 1, picture: "calendar" }],
    },
  },
  "after": {
    sectionRefs: [[[1], [1], [2]], [[2, 1]], [[2], [3]], [[5], [2, 5]], [[2], [4]]],
    helpRefs: [[2], [2], [2], [2], [2]],
    stats: {
      2: [{ value: "Every 6 weeks", label: "for the first 6 months after radioactive iodine: how often NICE suggests checking thyroid levels.", ref: 3, picture: "calendar" }],
    },
  },
};
