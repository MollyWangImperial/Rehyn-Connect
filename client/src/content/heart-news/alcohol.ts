import type { NewsExtras } from "../ischaemic-news";
// Alcohol and your health features: paragraph references (numbers are positions in each answer's own sources in alcohol-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "units": {
    sectionRefs: [[[1], [1, 4]], [[1], [1, 4]], [[1, 2], [3, 2]], [[2], [2, 3], [2, 3]]],
    helpRefs: [[1, 4], [1, 2], [1, 2], [2, 3], [4], [5, 6]],
    charts: {
      1: { kind: "bars", title: "How drinks add up", subtitle: "Units of alcohol in some common drinks", bars: [{ label: "Single shot of spirits", value: 1 }, { label: "Pint of lower-strength beer", value: 2 }, { label: "Pint of higher-strength beer", value: 3 }, { label: "Large glass of wine", value: 3 }, { label: "Bottle of wine", value: 10, strong: true }], max: 10, ticks: [0, 2, 4, 6, 8, 10], unit: "units", sources: "Source: NHS, Alcohol units" },
    },
    stats: {
      2: [{ value: "14 units", label: "a week is the most men and women are advised to drink on a regular basis, spread over 3 or more days, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "mood-sleep": {
    sectionRefs: [[[2], [2]], [[4], [1, 4]], [[3], [1, 6], [7, 3]], [[5], [5]], [[3], [4, 3]]],
    helpRefs: [[4], [4], [5], [3, 4], [8], [9, 10]],
    stats: {
      4: [{ value: "4 weeks", label: "without alcohol often makes a clear difference to how people with depression feel, says Drinkaware.", ref: 3, picture: "calendar" }],
    },
  },
  "health": {
    sectionRefs: [[[1], [1]], [[4], [4]], [[6], [5]], [[8, 7], [7]], [[1, 3], [9, 3]]],
    helpRefs: [[1], [6], [4], [7], [4], [10, 11]],
    stats: {
      1: [{ value: "At least 7", label: "types of cancer are caused by drinking alcohol, including breast, bowel, mouth and throat cancers, says Drinkaware.", ref: 4 }],
    },
    charts: {
      3: { kind: "donut", title: "The most common cause", subtitle: "Cases of liver disease in the UK, out of every 100", value: 60, prefix: "About", subject: "cases of liver disease in the UK", label: "are caused by drinking alcohol", sources: "Source: Drinkaware, Alcohol dependence" },
    },
  },
  "dependence": {
    sectionRefs: [[[2], [2, 4]], [[1], [1, 3], [3]], [[1], [1]], [[3], [3, 4]], [[1, 2], [6]]],
    helpRefs: [[4], [5], [4, 1], [4], [6], [7, 8]],
    stats: {
      0: [{ value: "Around 1 in 100", label: "adults in the UK are dependent on alcohol, says the Royal College of Psychiatrists.", ref: 2, picture: "one-in", of: 100 }],
      4: [{ value: "Up to £1,000", label: "is the fine for not telling the DVLA about a medical condition that affects your driving, says the government.", ref: 6 }],
    },
  },
  "cutting-down": {
    sectionRefs: [[[3], [3]], [[1, 2, 3], [1, 7]], [[1], [1, 3]], [[5], [2, 3, 5]], [[6, 3], [6, 1]]],
    helpRefs: [[1], [1], [1], [1], [5], [8, 9]],
    stats: {
      0: [{ value: "At least 3", label: "drink-free days each week give your body a break from alcohol, says Drinkaware.", ref: 4, picture: "calendar" }],
    },
  },
  "support": {
    sectionRefs: [[[1], [4, 6]], [[3], [2]], [[1], [5]], [[1], [1]], [[1], [1]]],
    helpRefs: [[1], [4, 3], [1, 5], [1], [1], [7, 8]],
    stats: {
      2: [{ value: "9am to 8pm", label: "on weekdays, and 11am to 4pm at weekends, Drinkline is open on 0300 123 1110, free and confidential, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  "stopping-safely": {
    sectionRefs: [[[1, 2], [3]], [[2], [1, 4]], [[2], [2, 3]], [[4], [4], [4]], [[1], [1]]],
    helpRefs: [[1, 2], [2], [3], [4], [1, 2], [5, 6]],
    charts: {
      1: { kind: "range", title: "How long withdrawal usually lasts", subtitle: "Days alcohol withdrawal symptoms usually last", from: 3, to: 7, unit: "days", sources: "Source: NHS, Alcohol-use disorder" },
    },
    stats: {
      3: [{ value: "48 hours", label: "after stopping are likely to be the worst, and most people feel better within a week, says Drinkaware.", ref: 4, picture: "hours" }],
    },
  },
  "medicines": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[3, 4], [7, 1]], [[1], [6, 1]], [[2, 1], [8, 5]]],
    helpRefs: [[1, 2], [1, 2], [2], [7], [8], [9, 10]],
    charts: {
      1: { kind: "bars", title: "Keep avoiding alcohol afterwards", subtitle: "Hours to keep avoiding alcohol after you stop taking these antibiotics", bars: [{ label: "Metronidazole", value: 48 }, { label: "Tinidazole", value: 72, strong: true }], max: 72, ticks: [0, 24, 48, 72], unit: "hours", sources: "Source: NHS, Antibiotics: interactions" },
    },
  },
  "social": {
    sectionRefs: [[[1], [1]], [[2], [1]], [[1], [2]], [[2, 3], [3]], [[4], [2]]],
    helpRefs: [[2], [2, 4], [1], [1, 2], [4], [5, 6]],
    charts: {
      3: { kind: "bars", title: "More people choosing low and no", subtitle: "UK drinkers who had low or alcohol-free drinks in the last 12 months, out of every 100", bars: [{ label: "2021", value: 22 }, { label: "2025", value: 45, strong: true }], sources: "Source: Drinkaware, Cutting your drinking with alcohol-free and low alcohol drinks" },
    },
  },
  "family": {
    sectionRefs: [[[1], [1]], [[1, 2], [2]], [[5, 3], [1, 7]], [[3], [3, 5]], [[6], [6]]],
    helpRefs: [[1, 2], [1, 2], [1], [3], [6], [8, 9]],
    charts: {
      0: { kind: "donut", title: "You're not alone", subtitle: "UK adults, out of every 100, in Drinkaware research in 2024", value: 28, subject: "UK adults", label: "felt concerned about someone else's drinking in the last year", sources: "Source: Drinkaware, Worried about someone else's drinking?" },
    },
    stats: {
      4: [{ value: "1 in 5", label: "young people in the UK is thought to live with a parent who drinks too much, says Drinkaware.", ref: 4, picture: "one-in", of: 5 }],
    },
  },
  "after-illness": {
    sectionRefs: [[[1], [2, 1]], [[3], [2, 4]], [[2], [2]], [[5], [6]], [[2], [7, 3]]],
    helpRefs: [[2], [2, 4], [1, 2], [2], [6, 8], [9, 10]],
    stats: {
      1: [{ value: "Around half", label: "of all strokes in the UK have high blood pressure contributing, and drinking too much raises blood pressure, says the Stroke Association.", ref: 2, picture: "half" }],
    },
  },
  "urgent": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[3]], [[4], [4, 5], [7, 5, 8]], [[1, 10], [9]]],
    helpRefs: [[1, 2], [1, 2], [2], [4, 6], [7, 5], [4, 6]],
    stats: {
      3: [{ value: "24 hours", label: "a day, every day, Samaritans (116 123) and the Shout text line (85258) are open, says the NHS.", ref: 5, picture: "hours" }],
    },
  },
};
