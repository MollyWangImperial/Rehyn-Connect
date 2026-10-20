import type { NewsExtras } from "../ischaemic-news";
// Sleep apnoea features (content/apnoea-answers.ts): reference numbers and figures, checked on 20 October 2026 against each answer's sources.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-happens": {
    sectionRefs: [[[1], [1]], [[2, 3]], [[3], [2]], [[3]]],
    helpRefs: [[1], [1], [1], [1]],
  },
  "why-it-matters": {
    sectionRefs: [[[1, 3], [1]], [[2], [2]], [[2], [4]], [[1], [1]]],
    helpRefs: [[1], [2], [1], [4]],
  },
  tests: {
    sectionRefs: [[[3], [2, 3]], [[1], [1, 2]], [[2]], [[1]]],
    helpRefs: [[1], [3], [2]],
  },
  severity: {
    sectionRefs: [[[1, 2]], [[1]], [[2]], [[1, 2], [2, 3]]],
    helpRefs: [[1], [1], [3]],
    stats: {
      1: [
        { value: "5 to 14", label: "AHI score for mild sleep apnoea, says the NHS.", ref: 1 },
        { value: "15 to 30", label: "AHI score for moderate sleep apnoea, says the NHS.", ref: 1 },
        { value: "Over 30", label: "AHI score for severe sleep apnoea, says the NHS.", ref: 1 },
      ],
    },
  },
  cpap: {
    sectionRefs: [[[1, 2], [1]], [[1, 3], [2]], [[2], [2]], [[2], [2]], [[1, 2]]],
    helpRefs: [[1, 2], [1], [2], [2], [2], [2]],
    stats: {
      1: [{ value: "1 month", label: "Within one month of starting CPAP you should get a follow-up appointment, says Asthma + Lung UK.", ref: 2, picture: "calendar" }],
    },
  },
  mouthpiece: {
    sectionRefs: [[[1, 3]], [[2, 4], [3]], [[2, 3], [4]], [[4], [4]]],
    helpRefs: [[3], [2], [4]],
  },
  "weight-position": {
    sectionRefs: [[[1, 3], [2]], [[1, 3]], [[2], [1]], [[2, 3], [1]], [[2]]],
    helpRefs: [[1, 2], [1], [1], [1], [1], [1, 2]],
  },
  driving: {
    sectionRefs: [[[1], [1]], [[1, 2]], [[1, 3]], [[1], [1, 3]]],
    helpRefs: [[1], [1], [1], [1]],
    stats: {
      0: [{ value: "3 months", label: "Any sleep condition causing excessive sleepiness for at least this long needs reporting to DVLA, says GOV.UK.", ref: 1, picture: "calendar" }],
      3: [{ value: "£1,000", label: "The most you can be fined for not telling DVLA about a condition that affects your driving, says GOV.UK.", ref: 1 }],
    },
  },
  travel: {
    sectionRefs: [[[1], [1, 2]], [[1, 2], [1]], [[1, 2], [1]], [[2], [2]]],
    helpRefs: [[1], [1, 2], [1], [1, 2], [1, 2], [2]],
  },
  partner: {
    sectionRefs: [[[1], [3]], [[2]], [[2]], [[4]]],
    helpRefs: [[1], [2], [4]],
  },
  energy: {
    sectionRefs: [[[1], [2]], [[5]], [[3]], [[4]], [[1]]],
    helpRefs: [[1], [4], [1], [1], [1]],
    stats: {
      1: [{ value: "11 to 24", label: "An Epworth score in this range might suggest unusual daytime sleepiness, says Asthma + Lung UK.", ref: 5 }],
    },
  },
};
