import type { NewsExtras } from "../ischaemic-news";
// Heart attack features: reference numbers (positions in each answer's own `sources`) and figures, checked 20 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  statins: {
    sectionRefs: [[[1, 2], [3]], [[1], [2]], [[2], [1]], [[2], [2]]],
    helpRefs: [[2], [2], [1], [1, 2], [1, 2]],
    charts: {
      0: { kind: "bars", title: "How far statins can lower bad cholesterol", subtitle: "Fall in LDL cholesterol, out of every 100: up to 30 on a low dose, more than 40 on a high dose", bars: [{ label: "Low-dose statin", value: 30 }, { label: "High-dose statin", value: 40, strong: true }], sources: "Source: British Heart Foundation, Statins and what they do" },
    },
  },
  "what-happened": {
    sectionRefs: [[[2]], [[2], [2]], [[2], [1, 2]], [[3], [4]], [[2]]],
    helpRefs: [[1], [4], [4]],
  },
  types: {
    sectionRefs: [[[1], [1]], [[1], [1]], [[1], [1]], [[2], [1]]],
    helpRefs: [[1], [3], [1, 3]],
  },
  tests: {
    sectionRefs: [[[2], [3]], [[4], [4]], [[1], [5]], [[1, 6], [6]]],
    helpRefs: [[2], [2], [5], [5]],
  },
  "why-me": {
    sectionRefs: [[[1, 2]], [[1], [1]], [[2]], [[2]], [[1]]],
    helpRefs: [[1, 2], [1], [1], [1], [2], [2]],
  },
  rehab: {
    sectionRefs: [[[1]], [[4], [4]], [[1], [1, 3]], [[1], [1]]],
    helpRefs: [[2], [4], [4], [4], [1]],
    stats: {
      1: [{ value: "10 days", label: "NICE: cardiac rehab should start within 10 days of leaving hospital.", ref: 4, picture: "calendar" }],
    },
  },
  tablets: {
    sectionRefs: [[[1, 4], [2]], [[3], [2]], [[2], [2]], [[2], [2]], [[2], [3]]],
    helpRefs: [[2], [2, 3], [2], [2], [3], [3]],
    stats: {
      1: [{ value: "1 year", label: "BHF: antiplatelets like clopidogrel or ticagrelor are commonly prescribed for 1 year after a heart attack.", ref: 2, picture: "calendar" }],
    },
  },
  "first-weeks": {
    sectionRefs: [[[1]], [[1], [1]], [[1, 2]], [[3, 4], [5]], [[1]]],
    helpRefs: [[1], [1], [1], [3], [2]],
    stats: {
      0: [{ value: "2 to 5 days", label: "BHF: the usual hospital stay after a heart attack.", ref: 1, picture: "calendar" }],
    },
  },
  "chest-pain": {
    sectionRefs: [[[1], [2]], [[2], [1, 3]], [[1], [4]], [[5], [5]], [[3], [4]]],
    helpRefs: [[2], [2], [2, 3], [4], [5]],
    stats: {
      0: [{ value: "5 minutes", label: "NHS: wait 5 minutes before a second GTN dose, and call 999 if you are still in pain 5 minutes after it.", ref: 2 }],
    },
  },
  "driving-work": {
    sectionRefs: [[[1, 2], [1, 2]], [[1], [2]], [[3], [3]], [[4], [4]]],
    helpRefs: [[1, 2], [2], [3], [4], [4]],
    charts: {
      0: { kind: "bars", title: "Time off driving after a heart attack", subtitle: "Weeks without driving, by licence and treatment", bars: [{ label: "Car: successful angioplasty", value: 1 }, { label: "Car: angioplasty not successful", value: 4 }, { label: "Car: no angioplasty", value: 4 }, { label: "Bus, coach or lorry", value: 6, strong: true }], max: 6, ticks: [0, 2, 4, 6], sources: "Source: GOV.UK (DVLA), Heart attacks, angioplasty, and driving" },
    },
  },
  food: {
    sectionRefs: [[[1]], [[2], [2]], [[2], [2]], [[2], [2]], [[1]]],
    helpRefs: [[1], [1], [2], [2], [2]],
    stats: {
      2: [{ value: "5 a day", label: "BHF: at least five portions of fruit and vegetables a day helps lower the risk of heart and circulatory diseases.", ref: 2 }],
    },
  },
  sex: {
    sectionRefs: [[[1], [2]], [[1, 2], [1]], [[1], [1]], [[1], [3]]],
    helpRefs: [[1], [1], [1], [1], [1]],
    stats: {
      1: [{ value: "About 4 weeks", label: "NICE: after an uncomplicated recovery, sex can usually resume after about 4 weeks.", ref: 2, picture: "calendar" }],
    },
  },
  mood: {
    sectionRefs: [[[1], [3]], [[2], [2]], [[2], [2]], [[4], [3, 5]]],
    helpRefs: [[2], [2], [2], [2], [2, 4]],
  },
  smoking: {
    sectionRefs: [[[1], [1]], [[1], [1]], [[2, 4], [2]], [[1], [1]]],
    helpRefs: [[1, 2], [1], [1], [2], [1]],
    stats: {
      1: [{ value: "Half", label: "BHF: a year after stopping smoking, your risk of a heart attack is half that of a smoker.", ref: 1, picture: "half" }],
    },
  },
};
