import type { NewsExtras } from "../ischaemic-news";
// Angina features: reference numbers (positions in each answer's own `sources`) and figures, checked 20 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[2], [2]], [[1], [1]], [[3]], [[1]], [[1, 4]]],
    helpRefs: [[1], [1], [1], [1]],
    stats: {
      3: [{ value: "Under 10 minutes", label: "NHS: how long angina attacks usually last.", ref: 1 }],
    },
  },
  "stable-unstable": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[2], [2]], [[2, 3]]],
    helpRefs: [[2], [2, 3], [2, 3], [2], [2]],
    stats: {
      0: [{ value: "5 minutes or less", label: "BHF: how long stable angina usually lasts.", ref: 1 }],
    },
  },
  tests: {
    sectionRefs: [[[1, 3]], [[2], [6]], [[4], [6]], [[2, 5], [2, 6]], [[4], [4]]],
    helpRefs: [[5], [5], [2], [4], [4]],
    stats: {
      4: [{ value: "About 30 minutes", label: "BHF: how long a traditional angiogram usually takes.", ref: 4 }],
    },
  },
  "not-angina": {
    sectionRefs: [[[1], [3]], [[1], [2]], [[1], [1]], [[2], [1]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1], [1]],
  },
  spray: {
    sectionRefs: [[[4], [1]], [[2], [2]], [[2, 6], [2]], [[1, 5], [3]], [[2], [5]]],
    helpRefs: [[2], [2, 5], [2], [5], [5], [4]],
    stats: {
      4: [{ value: "1 to 3 minutes", label: "NHS: how long the spray usually takes to work when used before activity.", ref: 2 }],
    },
  },
  tablets: {
    sectionRefs: [[[1], [2]], [[1], [3, 4]], [[5], [5]], [[6], [6]], [[1], [1]]],
    helpRefs: [[1], [5], [3, 4], [3], [3]],
    stats: {
      4: [{ value: "2 to 4 weeks", label: "NICE: when treatment should be reviewed after starting or changing a medicine.", ref: 1, picture: "calendar" }],
    },
  },
  "stents-bypass": {
    sectionRefs: [[[1, 2], [1, 5]], [[3, 6], [3]], [[4, 7], [5, 7]], [[1], [4]]],
    helpRefs: [[6], [1], [6, 7], [6], [6]],
    stats: {
      2: [{ value: "About 6 weeks", label: "BHF: when most normal activities, including work and driving, are possible after bypass surgery.", ref: 7, picture: "calendar" }],
    },
  },
  rehab: {
    sectionRefs: [[[1], [1, 2]], [[1], [1]], [[1], [1]], [[1], [1]], [[1]]],
    helpRefs: [[1], [1], [1, 3], [1], [1], [1, 3]],
    stats: {
      1: [{ value: "150 minutes", label: "BHF: UK Government guidelines recommend at least 150 minutes of moderate aerobic exercise a week.", ref: 1 }],
    },
  },
  "cold-meals": {
    sectionRefs: [[[1, 6]], [[3], [3]], [[2]], [[2]], [[4, 5]]],
    helpRefs: [[1], [3], [3], [2], [2], [4]],
    stats: {
      1: [{ value: "18°C", label: "BHF: try to keep the room you spend most time in heated to at least 18°C.", ref: 3 }],
    },
  },
  "driving-work": {
    sectionRefs: [[[1, 2], [1, 2]], [[1], [2]], [[3], [4]], [[5], [3, 5]]],
    helpRefs: [[1], [3], [2], [4], [3, 5]],
    stats: {
      3: [{ value: "2,000 metres", label: "BHF: avoid travelling to high altitudes above 2,000 metres, as less oxygen can bring on angina.", ref: 5 }],
    },
  },
  "food-smoking": {
    sectionRefs: [[[1], [2]], [[1, 4], [2]], [[1, 2], [2]], [[2, 3]], [[6]]],
    helpRefs: [[3, 5], [1, 2], [2], [2], [3]],
    stats: {
      2: [{ value: "6g", label: "NHS: the most salt to aim for in a day.", ref: 2 }],
      3: [{ value: "14 units", label: "NHS: the most alcohol to drink in a week, spread across 3 or more days.", ref: 2 }],
    },
  },
  worry: {
    sectionRefs: [[[1]], [[1], [1, 2]], [[3], [3]], [[5], [4]]],
    helpRefs: [[5], [3], [3], [1], [2, 4]],
  },
};
