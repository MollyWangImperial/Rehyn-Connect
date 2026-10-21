import type { NewsExtras } from "../ischaemic-news";
// Breast cancer features: paragraph references (numbers are positions in each answer's own sources in breast-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-you-had": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[3, 1], [3]], [[4], [5]], [[6], [6]]],
    helpRefs: [[1], [1], [3, 4], [3], [7]],
    stats: {
      4: [{ value: "5 to 10 years", label: "is how long tamoxifen or an aromatase inhibitor is usually taken after surgery, says Breast Cancer Now.", ref: 6, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "A short course", subtitle: "Days of radiotherapy for primary breast cancer, usually Monday to Friday", from: 5, to: 15, unit: "days", sources: "Source: Breast Cancer Now, Radiotherapy for primary breast cancer" },
    },
  },
  "results": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[3, 4], [4], [4]], [[5], [5]], [[6], [6]]],
    helpRefs: [[1], [1], [1], [1], [1]],
    stats: {
      0: [{ value: "1 to 2 weeks", label: "is how long pathology results usually take, says Breast Cancer Now.", ref: 1, picture: "calendar" }],
      4: [{ value: "Less than 1 in 5", label: "invasive breast cancers are HER2-positive, says Breast Cancer Now.", ref: 6, picture: "one-in", of: 5 }],
    },
  },
  "follow-up": {
    sectionRefs: [[[1], [1]], [[1, 2], [1]], [[1], [1], [1]], [[1], [1, 2]], [[1], [1]]],
    helpRefs: [[1], [3], [1], [2], [1]],
    stats: {
      2: [{ value: "Every year", label: "for at least 5 years is how often you have a follow-up mammogram if you are under 50, says Breast Cancer Now.", ref: 1, picture: "calendar" }],
      4: [{ value: "Within 12 months", label: "of treatment is when you should be offered a Cancer Care Review with your GP or practice nurse, says Breast Cancer Now.", ref: 1, picture: "calendar" }],
    },
  },
  "recurrence": {
    sectionRefs: [[[1, 2], [2]], [[3], [3, 4, 1], [4]], [[1], [1]], [[1], [1]], [[2], [4, 2]]],
    helpRefs: [[1], [1], [2], [1], [2], [1]],
    charts: {
      1: { kind: "bars", title: "Survival is generally very good", subtitle: "Women with breast cancer in the UK who survive their cancer, out of every 100. Figures for large groups, not a prediction for one person", bars: [{ label: "1 year or more (more than)", value: 95 }, { label: "5 years or more (almost)", value: 90, strong: true }, { label: "10 years or more (more than)", value: 75 }], sources: "Source: Cancer Research UK, Survival for breast cancer" },
    },
  },
  "fatigue": {
    sectionRefs: [[[1], [2]], [[1], [1]], [[1], [1, 2], [2, 1]], [[1, 2], [1], [3]], [[1], [1, 2]]],
    helpRefs: [[1], [1, 2], [1], [1], [1], [1]],
    stats: {
      3: [
        { value: "Under half an hour", label: "is how long to keep naps, avoiding the late afternoon, says Breast Cancer Now.", ref: 1, picture: "hours" },
        { value: "30 minutes, 5 times a week", label: "of moderate activity, or three 10-minute sessions if that feels too much, suggests Breast Cancer Now.", ref: 3, picture: "calendar" },
      ],
    },
    charts: {
      3: { kind: "range", title: "Staying hydrated", subtitle: "Glasses of fluid a day suggested to help with fatigue", from: 6, to: 8, unit: "glasses a day", sources: "Source: Breast Cancer Now, Extreme tiredness (cancer-related fatigue)" },
    },
  },
  "arm-shoulder": {
    sectionRefs: [[[2, 1], [1, 2]], [[1], [1], [1, 3]], [[1, 3], [1]], [[2, 3], [2, 3]], [[4], [4]]],
    helpRefs: [[1], [1], [1, 3], [1, 3], [1], [4]],
    stats: {
      1: [{ value: "3 times a day", label: "for the first 3 months, morning, around midday and evening, suggests Breast Cancer Now.", ref: 1, picture: "hours" }],
    },
  },
  "hormone-tablets": {
    sectionRefs: [[[1], [2]], [[3, 4], [1, 5], [3]], [[3, 6, 7], [8]], [[6, 7, 1], [1]], [[3], [1, 5]]],
    helpRefs: [[3], [5, 1], [6], [8], [1], [1]],
    charts: {
      1: { kind: "range", title: "Years, not months", subtitle: "How long tamoxifen or an aromatase inhibitor is usually taken after surgery, in years", from: 5, to: 10, unit: "years", sources: "Source: Breast Cancer Now, Hormone (endocrine) therapy" },
    },
  },
  "chemo-brain": {
    sectionRefs: [[[1], [1, 2]], [[1], [1, 2]], [[1], [1, 2, 3]], [[1, 2], [1, 2], [1, 2]], [[2, 1], [1]]],
    helpRefs: [[2, 1], [2, 1], [2], [1], [1, 2], [1]],
  },
  "body": {
    sectionRefs: [[[1, 2], [3, 2]], [[3, 1], [1]], [[1, 4], [5], [1, 5]], [[6], [7, 6]], [[1], [1]]],
    helpRefs: [[1], [2], [4], [6], [5], [1]],
    stats: {
      0: [{ value: "Up to a year", label: "is how long it might take for things to settle after breast surgery, says Cancer Research UK.", ref: 3, picture: "calendar" }],
      2: [{ value: "Every 2 years", label: "you can ask for a replacement breast prosthesis on the NHS, or when yours is worn out, says Breast Cancer Now.", ref: 4, picture: "calendar" }],
    },
    charts: {
      3: { kind: "range", title: "Skin takes time to settle", subtitle: "Months after surgery and radiotherapy for the skin of the chest to heal and settle", from: 6, to: 12, unit: "months", sources: "Source: Breast Cancer Now, Bras after surgery for breast cancer" },
    },
  },
  "menopause": {
    sectionRefs: [[[1, 2], [1]], [[3], [3]], [[3, 2], [3, 2]], [[1], [3, 1]], [[1, 2], [2, 1]]],
    helpRefs: [[2], [3], [3], [1], [2], [1]],
    stats: {
      0: [{ value: "Around 40", label: "and above, women are less likely to have their periods return after chemotherapy than women under 40, says Breast Cancer Now.", ref: 1 }],
      1: [{ value: "A few every hour", label: "is how often hot flushes can come for some people, while for others it is a couple a day, says Breast Cancer Now.", ref: 3, picture: "hours" }],
    },
  },
  "work": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[1, 2], [2, 1]], [[3], [3]], [[1], [2]]],
    helpRefs: [[1], [1], [1], [2], [3], [2]],
  },
  "relationships": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[2], [2]], [[1], [1], [3]], [[2, 1], [1]]],
    helpRefs: [[1, 2], [2], [2], [1], [1], [1]],
  },
  "mood": {
    sectionRefs: [[[6], [1]], [[1, 3], [1, 3]], [[2], [2]], [[1], [1]], [[4, 5], [4]]],
    helpRefs: [[1], [1], [2], [1], [5], [4]],
    stats: {
      3: [{ value: "Around 8 weeks", label: "to feel the full benefits of an antidepressant, after 1 to 2 weeks for a first improvement, says Breast Cancer Now.", ref: 1, picture: "calendar" }],
    },
  },
};
