import type { NewsExtras } from "../ischaemic-news";
// Asthma features: reference numbers (positions in each answer's own sources, asthma-answers.ts), charts and figures, checked 20 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [1]], [[1], [1, 2]], [[1], [1]], [[1], [1]], [[1]]],
    helpRefs: [[1, 3], [2, 3], [1], [2]],
    stats: {
      3: [{ value: "8 in 100", label: "people in the UK have asthma, says Asthma + Lung UK.", ref: 1 }],
      4: [{ value: "2 in 3", label: "asthma deaths are preventable, says Asthma + Lung UK.", ref: 1 }],
    },
  },
  "triggers": {
    sectionRefs: [[[1], [1]], [[1], [1], [1]], [[1], [1]], [[1], [1]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1], [2]],
    charts: {
      1: { kind: "bars", title: "Colds and flu top the list", subtitle: "People with asthma who said it triggered their asthma, out of every 100", bars: [{ label: "Colds and flu", value: 80, strong: true }, { label: "Food", value: 10 }], sources: "Source: Asthma + Lung UK, What are asthma triggers?" },
    },
  },
  "tests": {
    sectionRefs: [[[1, 5], [1]], [[1, 2], [1, 2], [2]], [[1, 3], [3], [3]], [[4], [4], [4]], [[1]]],
    helpRefs: [[1], [4], [3], [2], [2]],
    stats: { 3: [{ value: "50 ppb", label: "or more on a FeNO test, with a history that suggests asthma, means asthma is diagnosed in adults, says Asthma + Lung UK.", ref: 4 }] },
  },
  "adult-onset": {
    sectionRefs: [[[1, 2], [2]], [[1], [1]], [[2], [2]], [[2]], [[2, 3]]],
    helpRefs: [[2], [1], [2], [2], [2]],
    stats: { 1: [{ value: "1 in 10", label: "people who develop asthma as an adult have occupational asthma, says Asthma + Lung UK.", ref: 1 }] },
  },
  "inhalers": {
    sectionRefs: [[[1, 2], [2]], [[3], [3]], [[1, 3], [1]], [[3], [3, 4]], [[2], [3]]],
    helpRefs: [[3], [3], [2], [2], [1], [5]],
    stats: { 4: [{ value: "3 times a week", label: "or more using a blue reliever is a reason to see your GP or nurse, says Asthma + Lung UK.", ref: 3, picture: "calendar" }] },
  },
  "action-plan": {
    sectionRefs: [[[1], [1]], [[1]], [[1], [1]], [[1], [1]], [[1, 3]]],
    helpRefs: [[1], [1], [1], [1, 2], [4]],
  },
  "attack": {
    sectionRefs: [[[1], [1], [1]], [[1, 2], [1, 2], [1, 2]], [[1, 2], [1, 2]], [[1], [2]], [[1], [1]]],
    helpRefs: [[1], [2], [2], [1, 2], [1, 2]],
    stats: { 1: [{ value: "10 puffs", label: "at most, one every 30 to 60 seconds, with a blue reliever, say Asthma + Lung UK and the NHS.", ref: 1 }] },
  },
  "reviews": {
    sectionRefs: [[[1], [1, 2]], [[1], [1]], [[1], [1]], [[1], [1]], [[1]]],
    helpRefs: [[1, 2], [1], [1], [1], [1]],
    stats: { 0: [{ value: "Once a year", label: "at least is how often most people have an asthma review, says Asthma + Lung UK.", ref: 1, picture: "calendar" }] },
  },
  "exercise": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[1], [1]], [[1], [1, 3]], [[1], [2]]],
    helpRefs: [[1], [1, 2], [3], [1], [1]],
    stats: { 2: [{ value: "9 in 10", label: "people with asthma get tightening in their airways caused by exercise, says Asthma + Lung UK.", ref: 5 }] },
  },
  "home": {
    sectionRefs: [[[1], [1]], [[1], [1], [1]], [[2], [2]], [[1], [1]], [[2]]],
    helpRefs: [[1], [1], [1, 2], [1], [2], [2]],
    charts: {
      1: { kind: "bars", title: "What makes it worse at home", subtitle: "People with a lung condition who said it made their condition worse, out of every 100, 2024 survey", bars: [{ label: "Dust", value: 50, strong: true }, { label: "Aerosols and perfumes", value: 40 }], sources: "Source: Asthma + Lung UK, Air pollution and allergies at home" },
    },
    stats: { 2: [{ value: "1 in 5", label: "people said pets triggered their asthma symptoms, in the same 2024 Asthma + Lung UK survey.", ref: 1, picture: "one-in", of: 5 }] },
  },
  "smoking-vaping": {
    sectionRefs: [[[1], [1, 4]], [[1], [1]], [[1], [3]], [[2, 3], [1, 2]], [[2], [2]]],
    helpRefs: [[3, 5], [1], [2], [3]],
    stats: { 2: [{ value: "3 times", label: "more likely to stop smoking with support from a local stop smoking service, says Asthma + Lung UK.", ref: 3 }] },
  },
  "hay-fever": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[2], [3]], [[2], [2], [2]], [[1]]],
    helpRefs: [[2], [2], [2], [3], [4]],
    stats: { 0: [{ value: "1 in 3", label: "people said pollen triggers their lung condition symptoms, in an Asthma + Lung UK survey.", ref: 1, picture: "one-in", of: 3 }] },
  },
};
