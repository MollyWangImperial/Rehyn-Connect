import type { NewsExtras } from "../ischaemic-news";
// High blood pressure features: paragraph references (numbers are positions in each answer's own sources in hbp-answers.ts), charts and big figures, all checked on 20 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "numbers": {
    sectionRefs: [[[3], [3, 2]], [[3, 4]], [[1, 2], [3, 4]], [[3], [3]]],
    helpRefs: [[1], [1], [3], [3, 4]],
    stats: {
      2: [{ value: "About 1 in 3", label: "adults in the UK have high blood pressure, but many are not aware of it, says Blood Pressure UK.", ref: 4, picture: "one-in", of: 3 }],
    },
  },
  "after-stroke": {
    sectionRefs: [[[1]], [[6], [1]], [[1]], [[2], [3]], [[3]]],
    helpRefs: [[5], [3], [3], [4], [6]],
    stats: {
      0: [{ value: "About half", label: "of all strokes have high blood pressure playing a part. It is the biggest single risk factor, says the Stroke Association.", ref: 1, picture: "half" }],
      4: [{ value: "Over 25%", label: "lower stroke risk could follow from lowering blood pressure by just 10 mmHg, says the Stroke Association.", ref: 3 }],
    },
  },
  "why-high": {
    sectionRefs: [[[2], [2]], [[3], [3]], [[3, 1], [3, 1]], [[2, 3, 4], [3]]],
    helpRefs: [[1, 3], [1], [1], [1], [4]],
    charts: {
      2: { kind: "bars", title: "Blood pressure tends to rise with age", subtitle: "People in England with high blood pressure, out of every 100", bars: [{ label: "Aged 16 to 24 (up to)", value: 5 }, { label: "Aged 65 to 74", value: 58, strong: true }], sources: "Source: Blood Pressure UK, Causes of high blood pressure" },
    },
  },
  "targets": {
    sectionRefs: [[[1]], [[1, 2], [1]], [[1]], [[1], [1]], [[2]]],
    helpRefs: [[3, 2], [1, 2], [2], [1]],
    charts: {
      2: { kind: "bars", title: "Home targets sit 5 points lower", subtitle: "Top-number targets in mmHg, by age and where the reading is taken", bars: [{ label: "Under 80, clinic", value: 140 }, { label: "Under 80, home", value: 135, strong: true }, { label: "80 and over, clinic", value: 150 }, { label: "80 and over, home", value: 145, strong: true }], max: 160, ticks: [0, 40, 80, 120, 160], unit: " mmHg", sources: "Source: NICE, Hypertension in adults (NG136), recommendations 1.4.20 to 1.4.22" },
    },
  },
  "home-monitor": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[2], [2]], [[2, 4], [2]], [[2]]],
    helpRefs: [[1], [2], [2], [2], [2], [1, 2]],
    charts: {
      0: { kind: "waffle", title: "Most people find home checks help", subtitle: "People in Blood Pressure UK's 2016 survey of home monitoring, out of every 100", groups: [{ label: "Found it helpful, reassuring or empowering", count: 87, tone: "green" }, { label: "Found it caused anxiety", count: 13, tone: "clay" }], sources: "Source: Blood Pressure UK, Monitoring your blood pressure at home" },
    },
  },
  "tablets": {
    sectionRefs: [[[2, 3], [2, 6]], [[2, 4]], [[5, 2]], [[2], [6]], [[6], [6]]],
    helpRefs: [[6], [6], [6], [2], [6]],
  },
  "side-effects": {
    sectionRefs: [[[1, 2], [1]], [[2, 5], [3, 6, 4]], [[1], [5]], [[1], [1]], [[5]]],
    helpRefs: [[1], [5], [2], [1], [1, 5]],
    stats: {
      1: [{ value: "More than 1 in 100", label: "people taking ramipril get its common side effects, such as a dry cough, says the NHS.", ref: 5 }],
    },
  },
  "salt": {
    sectionRefs: [[[2], [2]], [[1, 2]], [[1, 2], [2, 1]], [[1, 2]], [[1, 2], [2]]],
    helpRefs: [[1, 2], [1, 2], [1], [1], [3, 2], [2]],
    stats: {
      1: [{ value: "6g", label: "of salt a day at most for adults, around one level teaspoon, says the NHS.", ref: 1 }],
    },
    charts: {
      2: { kind: "donut", title: "Salt we never see", subtitle: "The salt we eat, out of every 100 parts", value: 75, prefix: "Around", subject: "parts of the salt we eat", label: "come from packaged and everyday foods we buy", sources: "Sources: NHS, Salt in your diet; Blood Pressure UK, Salt and your blood pressure" },
    },
  },
  "moving": {
    sectionRefs: [[[3], [3]], [[3], [3]], [[1, 2]], [[3], [3]], [[3]]],
    helpRefs: [[3], [3], [1, 2], [3], [3], [3]],
    stats: {
      2: [{ value: "150 minutes", label: "of exercise a week is what the NHS suggests aiming for to help lower blood pressure.", ref: 1, picture: "calendar" }],
    },
  },
  "alcohol-weight": {
    sectionRefs: [[[3], [3]], [[3, 1], [3]], [[4], [4]], [[4], [4]]],
    helpRefs: [[1, 3], [3], [3], [4], [4]],
    charts: {
      0: { kind: "donut", title: "Alcohol's big impact", subtitle: "Cases of high blood pressure linked to alcohol, out of every 100", value: 20, subject: "cases of high blood pressure", label: "are linked to alcohol: a fifth of cases", sources: "Source: Blood Pressure UK, Causes of high blood pressure" },
    },
  },
  "missed-dose": {
    sectionRefs: [[[1, 2, 3]], [[2], [3]], [[2, 3]], [[1], [2]], [[2, 1]]],
    helpRefs: [[1, 2, 3], [1, 3], [1, 2], [1], [2], [2]],
  },
  "white-coat": {
    sectionRefs: [[[1, 2], [1]], [[1]], [[1], [1]], [[4], [5]], [[1]]],
    helpRefs: [[1], [1], [3], [1]],
    charts: {
      1: { kind: "bars", title: "How much higher in clinic", subtitle: "How much higher clinic readings tend to be than home ones, in mmHg", bars: [{ label: "Top number, on average", value: 10, strong: true }, { label: "Bottom number, on average", value: 5 }, { label: "Very worried or stressed, up to", value: 30 }], max: 30, ticks: [0, 10, 20, 30], unit: " mmHg", sources: "Source: Blood Pressure UK, Getting a blood pressure check" },
    },
  },
  "stress-sleep": {
    sectionRefs: [[[1], [1]], [[3]], [[2], [2]], [[2], [2]], [[1], [2]]],
    helpRefs: [[1], [1], [1], [1], [2], [2]],
    stats: {
      2: [{ value: "Up to 20%", label: "lower: how far blood pressure can dip during sleep compared with daytime readings, says Blood Pressure UK.", ref: 2 }],
      3: [{ value: "About half", label: "of people with obstructive sleep apnoea are estimated to have high blood pressure, says Blood Pressure UK.", ref: 2, picture: "half" }],
    },
  },
};
