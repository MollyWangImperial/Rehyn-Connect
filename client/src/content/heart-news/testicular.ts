import type { NewsExtras } from "../ischaemic-news";
// Testicular cancer features: paragraph references (numbers are positions in each answer's own sources in testicular-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-you-had": {
    sectionRefs: [[[1], [2, 6]], [[1, 3, 6], [3, 1]], [[2], [1, 4], [2]], [[5, 1], [1, 2]]],
    helpRefs: [[1], [1], [1], [2], [3]],
    stats: {
      2: [{ value: "3 weeks", label: "is how long each cycle of chemotherapy usually takes, says Macmillan.", ref: 4, picture: "calendar" }],
    },
    charts: {
      3: { kind: "range", title: "A short course", subtitle: "Weeks a course of radiotherapy for seminoma may last, usually Monday to Friday", from: 2, to: 3, unit: "weeks", sources: "Source: Macmillan, Radiotherapy for testicular cancer" },
    },
  },
  "types": {
    sectionRefs: [[[1, 2], [1, 2]], [[1], [1, 2], [1, 2]], [[4, 3], [3, 4], [3, 2]], [[5], [5, 3]], [[4, 2, 6], [4]]],
    helpRefs: [[4], [7], [7], [4]],
    stats: {
      0: [{ value: "Around 2,300", label: "men are diagnosed with testicular cancer each year in the UK, says Macmillan.", ref: 8 }],
    },
    charts: {
      1: { kind: "range", title: "The most common type", subtitle: "Testicular cancers that are pure seminomas, out of every 100", from: 55, to: 60, sources: "Source: Cancer Research UK, Types of testicular cancer" },
    },
  },
  "follow-up": {
    sectionRefs: [[[1], [2, 3]], [[1], [2]], [[2, 1], [1, 4]], [[1], [3, 5]], [[1], [6, 1]]],
    helpRefs: [[3, 5], [3], [1], [2, 3], [2], [1]],
    stats: {
      1: [{ value: "5 years", label: "is how long follow-up usually lasts, says Cancer Research UK.", ref: 1, picture: "calendar" }],
    },
    charts: {
      1: { kind: "bars", title: "How often on surveillance", subtitle: "Months between appointments you usually have on surveillance, before they become less frequent", bars: [{ label: "Non-seminoma, every", value: 3, strong: true }, { label: "Seminoma, every", value: 6 }], max: 12, ticks: [0, 3, 6, 9, 12], unit: " months", sources: "Source: Cancer Research UK, Monitoring (surveillance) for testicular cancer" },
    },
  },
  "self-checks": {
    sectionRefs: [[[1], [2, 4]], [[2, 3], [2], [2, 3]], [[4], [2, 3]], [[2], [5, 1]], [[5]]],
    helpRefs: [[1], [2, 3], [2, 4], [2, 4], [5]],
    stats: {
      0: [{ value: "Every month", label: "is how often to check your remaining testicle, says Macmillan.", ref: 1, picture: "calendar" }],
    },
  },
  "surgery-recovery": {
    sectionRefs: [[[1, 2], [1]], [[1, 2], [1]], [[3, 2], [1, 5]], [[2], [2, 4], [4]], [[3], [3]]],
    helpRefs: [[1, 5], [1], [1, 3], [1], [2], [4]],
    stats: {
      0: [{ value: "24 hours", label: "is how long someone should stay with you after you go home, says Macmillan.", ref: 1, picture: "hours" }],
      2: [{ value: "About 2 weeks", label: "until most people can go back to normal activities, including work, says Cancer Research UK.", ref: 3, picture: "calendar" }],
    },
    charts: {
      4: { kind: "range", title: "A longer recovery", subtitle: "Months it can take to fully recover after lymph node surgery (RPLND); for some it takes longer", from: 2, to: 4, unit: "months", sources: "Source: Cancer Research UK, After surgery for testicular cancer" },
    },
  },
  "prosthesis": {
    sectionRefs: [[[1, 3], [4, 2]], [[1, 3], [1]], [[2, 3], [3]], [[3], [2, 3]], [[2]]],
    helpRefs: [[1], [1, 2], [2], [2]],
  },
  "fertility": {
    sectionRefs: [[[1, 2, 4], [4, 2], [4, 2, 7]], [[1, 2], [2, 3], [3]], [[2], [2, 3]], [[2, 5], [2, 5, 6]], [[4], [2]]],
    helpRefs: [[1, 2], [3], [3], [2, 5], [2], [4]],
    stats: {
      1: [{ value: "10 years", label: "is the usual time sperm can be stored, and it can be extended up to 55 years, says Cancer Research UK.", ref: 3, picture: "calendar" }],
      4: [{ value: "£175 to £450", label: "a year is the average cost if you have to pay for sperm storage yourself, says Macmillan.", ref: 2 }],
    },
    charts: {
      3: { kind: "range", title: "Time for sperm to recover", subtitle: "Months after chemotherapy when sperm count generally starts to recover; for some it takes longer", from: 18, to: 24, unit: "months", sources: "Source: Macmillan, Chemotherapy for testicular cancer" },
    },
  },
  "hormones": {
    sectionRefs: [[[1, 2], [1, 5]], [[2, 3]], [[1], [3, 1]], [[1, 3], [3]], [[1, 2, 4], [3], [3]]],
    helpRefs: [[1], [3], [3], [3], [3]],
    stats: {
      4: [{ value: "3 months", label: "may be how long it takes to feel the full effects of testosterone replacement, says Orchid.", ref: 3, picture: "calendar" }],
    },
    charts: {
      3: { kind: "range", title: "A usual range", subtitle: "A normal testosterone level, approximately, in nanomoles per litre, as Orchid gives it", from: 9, to: 30, unit: "nmol/L", sources: "Source: Orchid, Testosterone Replacement Therapy" },
    },
  },
  "relationships": {
    sectionRefs: [[[1, 3], [6]], [[1, 2], [2], [1, 4]], [[5, 7], [5]], [[1, 2], [1, 5]], [[2], [1]]],
    helpRefs: [[3, 6], [2], [1, 2], [5], [2], [4]],
    stats: {
      0: [{ value: "2 to 3 weeks", label: "after surgery, once the wound has healed, is when you can usually start having sex, says Cancer Research UK.", ref: 3, picture: "calendar" }],
    },
  },
  "late-effects": {
    sectionRefs: [[[1, 2], [1]], [[1, 6], [1, 6]], [[1, 3, 4, 5], [1]], [[1, 3, 4, 5]], [[1, 7], [7, 8]]],
    helpRefs: [[1], [1], [1], [1], [1, 7]],
  },
  "work-study": {
    sectionRefs: [[[1, 2, 3], [3, 2]], [[8], [6]], [[6, 4], [4], [7]], [[5], [4]], [[9], [10]]],
    helpRefs: [[3], [6], [6], [4, 5], [7], [9]],
    stats: {
      0: [{ value: "About 2 weeks", label: "after an orchidectomy is when most people can go back to work, depending on the job, says Cancer Research UK.", ref: 1, picture: "calendar" }],
      4: [{ value: "150 minutes", label: "of moderate activity a week is what UK guidelines recommend for adults, says Macmillan.", ref: 9, picture: "calendar" }],
    },
  },
  "mood": {
    sectionRefs: [[[1, 4], [3]], [[4, 5], [5]], [[2, 3, 1], [2, 3], [2]], [[4], [8]], [[6, 7], [6]]],
    helpRefs: [[5, 1], [2, 3], [2], [4], [7], [6]],
    stats: {
      2: [{ value: "Up to 6", label: "free telephone counselling sessions are offered by Orchid to men affected by testicular cancer.", ref: 2 }],
      4: [{ value: "116 123", label: "is the Samaritans number, free to call any time, day or night.", ref: 7 }],
    },
  },
};
