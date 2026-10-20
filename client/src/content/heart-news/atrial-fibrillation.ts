import type { NewsExtras } from "../ischaemic-news";
// Atrial fibrillation features: reference numbers (positions in each answer's `sources`, af-answers.ts) and figures, checked 20 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  // sources: 1 NHS AF, 2 BHF booklet, 3 BHF AF page
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[2], [2]], [[1, 2], [2]], [[1, 2, 3]]],
    helpRefs: [[1], [2], [2], [1, 2]],
  },
  // sources: 1 BHF booklet, 2 BHF Heart Matters, 3 NHS anticoagulants uses
  "stroke-link": {
    sectionRefs: [[[1], [2]], [[3], [1]], [[1], [1], [1]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1]],
    charts: {
      0: { kind: "bars", title: "A higher chance of stroke", subtitle: "Stroke risk with atrial fibrillation, compared with without it", bars: [{ label: "Without AF", value: 1 }, { label: "With AF", value: 5, strong: true }], max: 5, ticks: [0, 1, 2, 3, 4, 5], unit: "×", sources: "Source: British Heart Foundation, Expert tips on living with atrial fibrillation (the risk of stroke is five times higher)" },
    },
  },
  // sources: 1 NHS AF, 2 BHF booklet, 3 BHF AF page
  types: {
    sectionRefs: [[[1], [2, 3]], [[2, 3], [2, 3]], [[1], [2, 3]], [[2]]],
    helpRefs: [[2], [2], [1]],
    stats: {
      1: [{ value: "7 days", label: "The line between paroxysmal and persistent atrial fibrillation, says the British Heart Foundation.", ref: 2, picture: "calendar" }],
    },
  },
  // sources: 1 NHS AF, 2 BHF booklet, 3 BHF AF page
  tests: {
    sectionRefs: [[[2], [1]], [[2, 3], [3]], [[1, 2]], [[2], [2]], [[2]]],
    helpRefs: [[1], [2], [2], [2]],
    stats: {
      3: [{ value: "24 hours", label: "or more: how long you may wear a small heart monitor, says the British Heart Foundation.", ref: 2, picture: "hours" }],
    },
  },
  // sources: 1 NHS AF, 2 BHF booklet, 3 NHS heart palpitations
  symptoms: {
    sectionRefs: [[[1, 2], [1]], [[1, 2], [1, 2]], [[2]], [[1], [1]]],
    helpRefs: [[1], [1], [2], [1]],
    stats: {
      0: [{ value: "Over 100", label: "beats per minute: a heartbeat this fast is a symptom of atrial fibrillation, says the NHS.", ref: 1 }],
    },
  },
  // sources: 1 BHF booklet, 2 NHS anticoagulants, 3 NHS anticoagulants dosage
  anticoagulants: {
    sectionRefs: [[[1]], [[1, 2], [2]], [[2], [2]], [[3], [1]], [[1], [3]]],
    helpRefs: [[3], [1], [1], [1], [1]],
  },
  // sources: 1 BHF booklet, 2 BHF AF page, 3 NHS AF
  "rate-rhythm": {
    sectionRefs: [[[1]], [[2, 3], [1]], [[1], [1], [1]], [[1]], [[1]]],
    helpRefs: [[1], [1], [1], [1]],
  },
  // sources: 1 BHF booklet, 2 BHF AF page, 3 NHS AF
  ablation: {
    sectionRefs: [[[1], [1]], [[1], [1]], [[1], [1]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1]],
    stats: {
      2: [{ value: "Up to 4 hours", label: "for an ablation, though it may take much less time, says the British Heart Foundation.", ref: 1, picture: "hours" }],
    },
  },
  // sources: 1 BHF booklet, 2 BHF how to check your pulse, 3 BHF your heart rate
  "checking-pulse": {
    sectionRefs: [[[1, 2]], [[1], [1]], [[1, 2], [2]], [[1, 3], [2]], [[1]]],
    helpRefs: [[2], [1, 2], [1, 2], [2], [1]],
    charts: {
      3: { kind: "range", title: "A normal resting heart rate", subtitle: "Beats per minute at rest, for adults", from: 60, to: 100, unit: "beats per minute", sources: "Sources: British Heart Foundation, Your heart rate; Understanding atrial fibrillation" },
    },
    stats: {
      3: [{ value: "65+", label: "An irregular pulse is more likely to be a sign of atrial fibrillation from age 65, says the British Heart Foundation.", ref: 2 }],
    },
  },
  // sources: 1 NHS AF, 2 BHF booklet, 3 BHF Heart Matters
  "alcohol-caffeine": {
    sectionRefs: [[[3], [2]], [[1, 2]], [[1]], [[3], [2]]],
    helpRefs: [[1], [2], [1, 2], [3], [2]],
    stats: {
      1: [{ value: "Under 14", label: "units of alcohol a week: one of the lifestyle changes that can help manage atrial fibrillation, says the British Heart Foundation.", ref: 2, picture: "calendar" }],
    },
  },
  // sources: 1 BHF booklet, 2 NHS anticoagulants considerations, 3 NHS anticoagulants side effects
  bleeding: {
    sectionRefs: [[[1]], [[2], [2]], [[2], [2]], [[3], [3]], [[2], [1]]],
    helpRefs: [[1], [2], [2], [2], [3]],
    stats: {
      3: [{ value: "10 minutes", label: "A nosebleed lasting longer than this is a sign of bleeding to act on, says the NHS.", ref: 3 }],
    },
  },
  // sources: 1 NHS AF, 2 BHF booklet, 3 BHF Heart Matters
  exercise: {
    sectionRefs: [[[2], [1, 3]], [[1], [2]], [[2], [2]], [[2], [2]]],
    helpRefs: [[2], [2], [2], [2], [2]],
    stats: {
      0: [{ value: "150 minutes", label: "of moderate exercise a week to aim for, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  // sources: 1 BHF booklet, 2 BHF Heart Matters, 3 BHF AF page
  worry: {
    sectionRefs: [[[1, 2], [3]], [[1], [1]], [[2], [1]], [[1], [1]]],
    helpRefs: [[2], [1], [1], [1], [1]],
  },
};
