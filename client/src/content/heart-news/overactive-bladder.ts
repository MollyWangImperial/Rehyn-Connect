import type { NewsExtras } from "../ischaemic-news";
// Overactive bladder features: paragraph references (numbers are positions in each answer's own sources in oab-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[2], [2]], [[1], [3]], [[2], [2]], [[2, 3], [2, 5]]],
    helpRefs: [[5], [2], [2], [4], [6]],
    stats: {
      2: [
        { value: "About 1 in 6", label: "adults reported some symptoms of an overactive bladder in two large studies, says Bladder Health UK.", ref: 2, picture: "one-in", of: 6 },
        { value: "About 1 in 3", label: "people with an overactive bladder have episodes of urge incontinence, says Bladder Health UK.", ref: 2, picture: "one-in", of: 3 },
      ],
    },
  },
  "symptoms": {
    sectionRefs: [[[7, 1], [2]], [[1, 3]], [[1, 2], [4, 1]], [[1, 2], [1]], [[5], [5]]],
    helpRefs: [[6], [4], [5], [5], [6]],
    stats: {
      1: [{ value: "More than 8", label: "trips to pee during the day is how Bladder Health UK describes frequency.", ref: 1 }],
    },
  },
  "causes": {
    sectionRefs: [[[1, 2], [2]], [[1, 2], [1, 3]], [[2, 1], [1, 3]], [[2, 3], [3, 1]], [[4], [5, 6]]],
    helpRefs: [[2], [6], [1, 5], [6], [5], [7]],
  },
  "diary": {
    sectionRefs: [[[1], [1]], [[2, 1, 3]], [[1], [1, 2]], [[2], [2, 6]], [[4, 5]]],
    helpRefs: [[2], [1], [1], [1], [1]],
    stats: {
      1: [{ value: "At least 3 days", label: "of bladder diary is what the GP may suggest, says the NHS.", ref: 2, picture: "calendar" }],
      2: [{ value: "At least 500ml", label: "is what the measuring jug should ideally hold, says BAUS.", ref: 1 }],
    },
  },
  "training": {
    sectionRefs: [[[1], [2], [4]], [[1], [3]], [[1], [1, 3]], [[3], [3]], [[1, 2], [1]]],
    helpRefs: [[1], [5], [1], [1], [2, 1], [3]],
    stats: {
      0: [{ value: "At least 6 weeks", label: "is how long a course of bladder training usually lasts, says the NHS.", ref: 2, picture: "calendar" }],
      2: [{ value: "5 to 15 minutes", label: "longer is how much extra to wait in the second week, says BAUS.", ref: 1 }],
    },
    charts: {
      0: { kind: "donut", title: "First steps that work", subtitle: "People with an overactive bladder, out of every 100", value: 50, prefix: "More than", subject: "people with an overactive bladder", label: "are helped by less caffeine and alcohol, pelvic floor exercises and bladder training", sources: "Source: BAUS, Comparison of treatment options for overactive bladder" },
    },
  },
  "drinks": {
    sectionRefs: [[[1, 2], [1]], [[1, 3, 2], [3, 8, 4]], [[1], [5, 6]], [[1, 7], [4, 6]], [[1, 6], [6, 4]]],
    helpRefs: [[1], [1], [1, 2], [3], [1, 5], [4]],
    stats: {
      1: [{ value: "14 units", label: "a week is the recommended limit for alcohol, says the NHS.", ref: 2 }],
      3: [{ value: "6 to 8 glasses", label: "of fluid a day, but no more, unless your doctor advises otherwise, says the NHS.", ref: 1 }],
    },
  },
  "medicines": {
    sectionRefs: [[[1], [5]], [[3, 1], [3, 1, 2]], [[1, 4, 3], [3, 2]], [[1, 6], [1, 5, 6, 8]], [[1, 6], [4, 7]]],
    helpRefs: [[1], [2], [4], [3], [6], [4]],
    stats: {
      4: [{ value: "After 4 weeks", label: "is the first review of an antimuscarinic, then every 6 to 12 months while it works, says the NHS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "Common side effects", subtitle: "People taking anticholinergic tablets, out of every 100", bars: [{ label: "Dry mouth", value: 20, strong: true }, { label: "Constipation", value: 10 }], sources: "Source: BAUS, Comparison of treatment options for overactive bladder" },
    },
  },
  "further": {
    sectionRefs: [[[1], [6]], [[2], [2, 3, 1]], [[1], [4]], [[1, 5], [1]], [[1], [1]]],
    helpRefs: [[1], [4], [2], [4], [2]],
    stats: {
      1: [{ value: "4 to 9 months", label: "is how long Botox injections into the bladder usually work, says BAUS.", ref: 2, picture: "calendar" }],
      2: [{ value: "70 in 100", label: "people report improvement after sacral neuromodulation, says BAUS.", ref: 3 }],
    },
    charts: {
      4: { kind: "bars", title: "Reported improvement", subtitle: "People with an overactive bladder who report improvement after each treatment, out of every 100", bars: [{ label: "Botox injections", value: 70, strong: true }, { label: "Sacral neuromodulation", value: 70, strong: true }, { label: "Augmentation enterocystoplasty", value: 80 }], sources: "Source: BAUS, Comparison of treatment options for overactive bladder" },
    },
  },
  "nights": {
    sectionRefs: [[[1], [1]], [[2, 1], [2]], [[3, 4, 7], [2, 6]], [[5, 2], [5]], [[1], [2]]],
    helpRefs: [[3], [4], [2], [2], [6], [1]],
    stats: {
      1: [{ value: "More than a third", label: "of a day's urine passed at night is called nocturnal polyuria, says BAUS.", ref: 2 }],
    },
  },
  "out-and-about": {
    sectionRefs: [[[1], [2, 1]], [[2], [2]], [[3, 4], [3, 4, 2]], [[5], [6]], [[7], [7]]],
    helpRefs: [[2], [2], [3], [8], [5], [7]],
  },
  "pelvic-floor": {
    sectionRefs: [[[1], [6, 1]], [[2], [3, 5]], [[4, 5], [5]], [[4], [3, 1]], [[5], [1, 3]]],
    helpRefs: [[2], [4], [3], [1], [1], [5]],
    stats: {
      3: [{ value: "At least 8", label: "squeezes, at least 3 times a day, for at least 3 months, is the programme the NHS describes.", ref: 3 }],
      4: [{ value: "3 to 6 months", label: "is how long pelvic floor exercises take to give the most benefit, says BAUS.", ref: 5, picture: "calendar" }],
    },
  },
  "older-age": {
    sectionRefs: [[[3, 2, 1]], [[4], [4]], [[5, 6], [5, 7]], [[8], [8]], [[9], [10, 11]]],
    helpRefs: [[1], [5], [8], [8], [9], [10]],
    charts: {
      1: { kind: "bars", title: "An enlarged prostate with age", subtitle: "Men with an enlarged prostate, out of every 100", bars: [{ label: "Men over 60: more than", value: 50 }, { label: "Men over 80", value: 80, strong: true }], sources: "Source: Bladder & Bowel Community, Nocturia" },
    },
  },
};
