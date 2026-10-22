import type { NewsExtras } from "../ischaemic-news";
// Broken ankle features: paragraph references (numbers are positions in each answer's own sources in ankle-fracture-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [3, 4]], [[2, 3], [2, 3]], [[1], [1, 5]], [[6], [5]]],
    helpRefs: [[5], [5], [5], [5], [5]],
    stats: {
      0: [{ value: "3 bones", label: "meet at the ankle: the tibia, the fibula and the talus, says University Hospitals Coventry and Warwickshire.", ref: 1 }],
    },
  },
  "sprain-or-break": {
    sectionRefs: [[[1, 3], [2, 3]], [[1, 2, 6], [6, 4]], [[1], [1]], [[5], [4]], [[1]]],
    helpRefs: [[1], [1], [1], [4], [1]],
    stats: {
      4: [{ value: "2 weeks", label: "is when most sprains and strains feel better, though severe ones can take months, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "treatment": {
    sectionRefs: [[[1], [7, 2]], [[2, 8], [5]], [[2], [1, 3, 6]], [[3], [3, 4]], [[1, 4]]],
    helpRefs: [[1], [1, 3], [4], [1], [4]],
    stats: {
      1: [{ value: "Six weeks", label: "is the longest a walking boot should be used for a small stable fracture, says Nottingham University Hospitals.", ref: 5, picture: "calendar" }],
      3: [{ value: "Within 3 weeks", label: "of the injury is usually the only time surgery is possible, says University Hospitals Coventry and Warwickshire.", ref: 3, picture: "calendar" }],
    },
  },
  "healing": {
    sectionRefs: [[[1], [2]], [[2, 3], [6]], [[8, 6]], [[3], [3, 4]], [[7], [4, 5]]],
    helpRefs: [[6, 3], [8], [6], [1], [6]],
    stats: {
      0: [{ value: "6 to 8 weeks", label: "is how long a broken ankle usually takes to heal, though it can take longer, says the NHS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      4: { kind: "bars", title: "The long tail of recovery", subtitle: "Months after an ankle fracture, up to when each may carry on", bars: [{ label: "Symptoms settling completely", value: 12 }, { label: "Bone remodelling at the ankle", value: 18 }, { label: "Still recovering, for some people", value: 24, strong: true }], max: 24, ticks: [0, 6, 12, 18, 24], unit: " months", sources: "Sources: Royal United Hospitals Bath; George Eliot Hospital; University Hospitals Coventry and Warwickshire" },
    },
  },
  "weight-bearing": {
    sectionRefs: [[[1, 2], [9, 8]], [[6], [6]], [[3], [7]], [[4], [5, 3]], [[2]]],
    helpRefs: [[1, 8], [8], [6], [2], [4]],
    stats: {
      2: [{ value: "2 to 6 weeks", label: "after a minor ankle avulsion fracture is when NHS inform's plan moves to full weight through the leg.", ref: 7, picture: "calendar" }],
    },
  },
  "exercises": {
    sectionRefs: [[[10], [10, 1]], [[3], [4]], [[2, 4, 7], [2, 4]], [[2, 8], [7, 5]], [[6, 9]]],
    helpRefs: [[1], [3], [2], [8], [4, 5], [5]],
    stats: {
      2: [{ value: "3 sets of 10", label: "calf raises is the starting point to build up to, says University Hospitals Coventry and Warwickshire.", ref: 2 }],
    },
    charts: {
      3: { kind: "bars", title: "Reading your pain score", subtitle: "Pain out of 10 while exercising, and where each band ends", bars: [{ label: "Minimal pain, up to", value: 3 }, { label: "Acceptable pain, up to", value: 5, strong: true }, { label: "Excessive pain, up to", value: 10 }], max: 10, ticks: [0, 2, 4, 6, 8, 10], unit: " out of 10", sources: "Source: NHS inform, Exercises for ankle pain" },
    },
  },
  "swelling": {
    sectionRefs: [[[6], [7, 4]], [[3], [2, 5]], [[8], [2]], [[1, 2], [1, 6]], [[6]]],
    helpRefs: [[1], [8], [2], [2], [6], [6]],
    stats: {
      1: [{ value: "50 minutes of every hour", label: "resting is the advice for a very swollen ankle waiting for surgery, says University Hospitals Coventry and Warwickshire.", ref: 2, picture: "hours" }],
      2: [{ value: "10 to 15 minutes", label: "at a time for an ice pack wrapped in a damp tea towel, says Worcestershire Acute Hospitals.", ref: 8, picture: "hours" }],
    },
  },
  "warning-signs": {
    sectionRefs: [[[1], [1]], [[5, 2], [2]], [[3], [2, 7]], [[5], [4]], [[8, 7], [2]]],
    helpRefs: [[2], [3], [2], [1], [7], [6]],
    stats: {
      2: [{ value: "Less than 1 in 100", label: "is the risk of a clot moving to the lungs after ankle fracture surgery, says University Hospitals Coventry and Warwickshire.", ref: 7 }],
    },
  },
  "home": {
    sectionRefs: [[[1], [1]], [[1, 3], [2]], [[4], [4]], [[5, 6], [5]], [[7]]],
    helpRefs: [[1], [2], [3], [4], [5, 6], [5]],
  },
  "driving-work": {
    sectionRefs: [[[1, 7], [2]], [[4, 3], [5, 8]], [[2, 5], [2, 6]], [[1, 5, 3]]],
    helpRefs: [[1], [4], [5, 3], [8], [5], [2]],
    stats: {
      1: [
        { value: "6 to 8 weeks", label: "after the plaster is removed is usually when driving becomes possible, says Sherwood Forest Hospitals.", ref: 4, picture: "calendar" },
        { value: "9 to 12 weeks", label: "is when most people return to driving after ankle fracture surgery, says University Hospitals Coventry and Warwickshire.", ref: 3, picture: "calendar" },
      ],
      2: [{ value: "At least 2 months", label: "before more active work after ankle fracture surgery, says Chelsea and Westminster Hospital.", ref: 2, picture: "calendar" }],
    },
  },
  "return-to-sport": {
    sectionRefs: [[[1, 5], [6, 4]], [[2, 1], [3]], [[5], [9]], [[7], [3]], [[8]]],
    helpRefs: [[2], [1], [6], [7], [8]],
    stats: {
      4: [{ value: "150 minutes", label: "of moderate activity a week is what adults are advised to aim for, says the NHS.", ref: 8, picture: "hours" }],
    },
    charts: {
      1: { kind: "bars", title: "Back to running and sport", subtitle: "Weeks after a stable ankle fracture, for most people", bars: [{ label: "No running or sport, for at least", value: 6 }, { label: "Gradual build-up, to about", value: 12, strong: true }], max: 12, ticks: [0, 3, 6, 9, 12], unit: " weeks", sources: "Source: Nottingham University Hospitals, Stable ankle fracture or sprain" },
    },
  },
  "long-term": {
    sectionRefs: [[[1, 2], [3, 4]], [[1, 10], [2]], [[8], [7]], [[5]], [[6, 7], [9, 2]]],
    helpRefs: [[1], [2], [8], [6], [9]],
    stats: {
      0: [{ value: "Up to one year", label: "of swelling and discomfort after an ankle fracture is normal, says George Eliot Hospital.", ref: 1, picture: "calendar" }],
      2: [{ value: "12 to 18 months", label: "is how long the ankle may take to change shape as the bone remodels, says North Tees and Hartlepool.", ref: 7, picture: "calendar" }],
    },
  },
};
