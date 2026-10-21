import type { NewsExtras } from "../ischaemic-news";
// Pulmonary fibrosis features: reference numbers (positions in each answer's `sources`, pulmonary-fibrosis-answers.ts) and figures, checked 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  // sources: 1 NHS IPF, 2 A+LUK what is PF, 3 A+LUK ILDs
  "what-it-is": {
    sectionRefs: [[[2], [1]], [[2], [2]], [[2], [1, 2, 3]], [[2], [1]]],
    helpRefs: [[1], [2], [1], [2], [2]],
    stats: {
      0: [{ value: "70 or over", label: "The age group idiopathic pulmonary fibrosis mainly affects, though it can start younger, says the NHS.", ref: 1 }],
    },
  },
  // sources: 1 A+LUK what is PF, 2 A+LUK ILDs, 3 A+LUK pulmonary fibrosis
  types: {
    sectionRefs: [[[2], [1]], [[2], [1], [2]], [[1], [2], [2]], [[1], [1]]],
    helpRefs: [[3], [1], [2], [2]],
    stats: {
      0: [{ value: "More than 200", label: "types of interstitial lung disease, says Asthma + Lung UK.", ref: 2 }],
      1: [
        { value: "Almost 40,000", label: "people in the UK are affected by idiopathic pulmonary fibrosis, says Asthma + Lung UK.", ref: 1 },
        { value: "Around 1 in 20", label: "people with IPF have another family member with the condition, says Asthma + Lung UK.", ref: 2, picture: "one-in", of: 20 },
      ],
    },
  },
  // sources: 1 NHS IPF, 2 A+LUK what is PF, 3 A+LUK ILDs
  symptoms: {
    sectionRefs: [[[2, 3], [1]], [[2]], [[2], [1, 2], [2]], [[1], [2], [3]]],
    helpRefs: [[2], [1], [2], [3]],
    stats: {
      3: [{ value: "3 weeks", label: "or more: a cough that lasts this long is a reason to see a GP, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  // sources: 1 NHS IPF, 2 A+LUK diagnosis, 3 NHS spirometry, 4 A+LUK gas transfer test
  tests: {
    sectionRefs: [[[2], [2], [1]], [[3], [2, 4]], [[2], [2]], [[1], [2]], [[2], [2]]],
    helpRefs: [[2], [2], [2], [2]],
    stats: {
      1: [{ value: "10 to 30 minutes", label: "for the whole gas transfer test, says Asthma + Lung UK.", ref: 4, picture: "hours" }],
    },
  },
  // sources: 1 NHS IPF, 2 A+LUK treatment
  antifibrotics: {
    sectionRefs: [[[2], [1]], [[2], [2]], [[1], [2]], [[2], [2], [2]], [[2], [2]]],
    helpRefs: [[2], [1], [2], [2], [2]],
    stats: {
      0: [{ value: "2", label: "medicines may be prescribed to some people with IPF to help slow down scarring in the lungs, says the NHS.", ref: 1 }],
      3: [{ value: "1 in 10", label: "or more people are affected by each of the very common side effects listed for nintedanib and pirfenidone, says Asthma + Lung UK.", ref: 2, picture: "one-in", of: 10 }],
    },
  },
  // sources: 1 NHS home oxygen, 2 A+LUK treatment, 3 A+LUK home oxygen, 4 A+LUK living well, 5 A+LUK living with home oxygen
  oxygen: {
    sectionRefs: [[[2], [3]], [[2], [2], [2]], [[1], [3]], [[1], [1]], [[4], [1], [1]]],
    helpRefs: [[1], [1, 4], [1], [1, 5], [5]],
    stats: {
      1: [{ value: "15 hours", label: "a day or more: how long long-term oxygen therapy keeps oxygen levels up, says Asthma + Lung UK.", ref: 3, picture: "hours" }],
      3: [{ value: "Up to 3 hours", label: "of oxygen in most portable cylinders, which weigh around 2 to 3 kilograms, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  // sources: 1 NHS IPF, 2 A+LUK treatment, 3 A+LUK pulmonary rehabilitation, 4 A+LUK living well
  rehab: {
    sectionRefs: [[[3], [1]], [[3], [3], [2]], [[3], [2]], [[4], [4], [4]]],
    helpRefs: [[3], [3], [4], [4], [4], [3]],
    stats: {
      1: [{ value: "6 to 8 weeks", label: "is how long a course of pulmonary rehabilitation usually lasts, with two sessions a week, says Asthma + Lung UK.", ref: 3, picture: "calendar" }],
    },
  },
  // sources: 1 A+LUK treatment, 2 A+LUK ILDs, 3 NHS cough
  cough: {
    sectionRefs: [[[1], [1]], [[1], [2]], [[2], [2]], [[1], [1]], [[1], [3]]],
    helpRefs: [[2], [2], [2], [2], [1], [1]],
  },
  // sources: 1 A+LUK managing breathlessness, 2 A+LUK treatment, 3 A+LUK living well with breathlessness, 4 A+LUK living well with PF, 5 NHS shortness of breath, 6 A+LUK what is breathlessness
  breathlessness: {
    sectionRefs: [[[1], [1]], [[2], [1], [1]], [[1], [3]], [[4], [3]], [[2], [5], [5]]],
    helpRefs: [[1], [1], [3], [4], [1], [2]],
    stats: {
      0: [{ value: "1 in 10", label: "people in the UK experience breathlessness, says Asthma + Lung UK.", ref: 6, picture: "one-in", of: 10 }],
      2: [{ value: "About 6 inches", label: "from your face: where to hold a handheld battery fan, says Asthma + Lung UK.", ref: 3 }],
    },
  },
  // sources: 1 NHS IPF, 2 A+LUK flu, 3 NHS pneumococcal, 4 NHS RSV, 5 NHS COVID-19, 6 A+LUK treatment, 7 NHS chest infection
  infections: {
    sectionRefs: [[[1], [2]], [[2], [3]], [[4], [5], [6]], [[1], [2], [7]]],
    helpRefs: [[2], [7], [4, 5], [1], [2], [7]],
    stats: {
      1: [{ value: "14 days", label: "is how long flu vaccines take to work, so it is best to have one before the end of October, says Asthma + Lung UK.", ref: 2, picture: "calendar" }],
    },
  },
  // sources: 1 A+LUK travelling safely, 2 A+LUK travelling with oxygen, 3 NHS home oxygen, 4 A+LUK travel insurance
  travel: {
    sectionRefs: [[[1], [1], [1]], [[1], [2], [1]], [[3], [2], [2]], [[1], [4], [1]]],
    helpRefs: [[1], [1], [2, 3], [1], [4], [2]],
    stats: {
      0: [{ value: "8 weeks", label: "before you travel: when to see your GP if you take oral steroids or immunosuppressive medicine, says Asthma + Lung UK.", ref: 1, picture: "calendar" }],
      1: [{ value: "4 to 6 weeks", label: "ahead: when to book a fitness-to-fly test, says Asthma + Lung UK.", ref: 1, picture: "calendar" }],
    },
  },
  // sources: 1 A+LUK living well, 2 NHS IPF, 3 A+LUK what is PF, 4 A+LUK treatment, 5 A+LUK diagnosis, 6 NHS why plan ahead, 7 NHS advance statement, 8 NHS end of life care
  support: {
    sectionRefs: [[[1], [1]], [[2], [3, 1], [4]], [[4], [4]], [[5], [6], [7, 8]]],
    helpRefs: [[1], [1], [3], [4], [4], [6]],
  },
};
