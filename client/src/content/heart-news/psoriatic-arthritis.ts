import type { NewsExtras } from "../ischaemic-news";
// Psoriatic arthritis features: paragraph references (numbers are positions in each answer's own sources in psa-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [3, 2]], [[1, 2], [3]], [[3, 4], [3, 2], [2, 3]], [[3], [2]], [[2], [3]]],
    helpRefs: [[1], [5], [2], [1], [1]],
    stats: {
      0: [{ value: "8 in 10", label: "people with psoriatic arthritis develop it after the psoriasis appears, says PAPAA.", ref: 3 }],
      2: [{ value: "About 325,000", label: "people in the UK have psoriatic arthritis, says PAPAA.", ref: 4 }],
    },
    charts: {
      0: { kind: "donut", title: "Linked to the skin", subtitle: "People who have psoriasis, out of every 100", value: 25, prefix: "About", subject: "people who have psoriasis", label: "develop psoriatic arthritis (about 1 in 4)", sources: "Source: Arthritis UK, Psoriatic arthritis" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1, 2], [1, 2, 3]], [[2], [2]], [[2, 3], [1, 3]], [[2], [4]], [[2, 5], [2], [5]]],
    helpRefs: [[1], [4], [4], [2], [5]],
    stats: {
      0: [{ value: "More than 30 minutes", label: "is how long stiffness lasts after a rest in psoriatic arthritis, says Arthritis UK.", ref: 2, picture: "hours" }],
    },
    charts: {
      2: { kind: "bars", title: "Nail changes are more common", subtitle: "People with nail changes, out of every 100", bars: [{ label: "Psoriasis alone, about", value: 40 }, { label: "Psoriatic arthritis, around", value: 80, strong: true }], sources: "Source: PAPAA, What is psoriatic arthritis?" },
    },
  },
  "diagnosis": {
    sectionRefs: [[[1], [3]], [[2], [4, 5]], [[2], [3, 5], [1]], [[2], [6]], [[2], [3]]],
    helpRefs: [[1], [3], [2], [3], [2]],
    charts: {
      1: { kind: "range", title: "A common age to start", subtitle: "Age at which symptoms often start, in years", from: 20, to: 30, unit: "years of age", sources: "Source: PAPAA, Getting a diagnosis" },
    },
  },
  "flares": {
    sectionRefs: [[[1, 2], [3]], [[4], [5, 6], [7]], [[1], [8], [8]], [[4], [4]], [[9, 2], [2]]],
    helpRefs: [[1], [8], [8], [4], [5], [9]],
    stats: {
      2: [{ value: "About 10 minutes", label: "every two hours is how long to apply an ice pack to an inflamed joint, suggests PAPAA.", ref: 8, picture: "hours" }],
      3: [{ value: "An hour", label: "before bed is when to switch off your devices, suggests Arthritis UK.", ref: 4, picture: "hours" }],
    },
  },
  "dmards": {
    sectionRefs: [[[1, 2], [1, 3]], [[1, 2], [1]], [[4, 5], [5], [5]], [[1, 5], [4], [4]], [[7], [8]]],
    helpRefs: [[2], [6], [5], [5], [5], [5]],
    stats: {
      1: [{ value: "Up to 3 months", label: "before you feel the effect of a DMARD, says Arthritis UK.", ref: 1, picture: "calendar" }],
      2: [{ value: "Once a week", label: "on the same day is how methotrexate is taken, says Arthritis UK.", ref: 4, picture: "calendar" }],
      3: [{ value: "Every 2 to 3 months", label: "is how often you have blood tests once your methotrexate dose is right, says the NHS.", ref: 5, picture: "calendar" }],
    },
    charts: {
      4: { kind: "range", title: "Leflunomide takes time", subtitle: "Months to feel the full effect of leflunomide", from: 4, to: 6, unit: "months", sources: "Source: Arthritis UK, Leflunomide" },
    },
  },
  "biologics": {
    sectionRefs: [[[1, 2], [3]], [[3], [3], [4]], [[4, 5], [6]], [[3], [7], [8]], [[4], [4], [4]]],
    helpRefs: [[4], [4], [4], [4], [4], [5]],
    stats: {
      0: [{ value: "Up to 3 months", label: "for a biological therapy to fully start working, says Arthritis UK.", ref: 3, picture: "calendar" }],
      2: [{ value: "Every 12 weeks", label: "is how often ustekinumab is given after the first two doses, says Arthritis UK.", ref: 6, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "Feeling better on adalimumab", subtitle: "Weeks over which you should start to feel better on adalimumab", from: 2, to: 12, unit: "weeks", sources: "Source: Arthritis UK, Adalimumab" },
    },
  },
  "pain-relief": {
    sectionRefs: [[[1, 2], [3]], [[3], [3], [4]], [[5], [5]], [[3, 6], [3]], [[6], [6]]],
    helpRefs: [[3], [3], [5], [6], [6], [6]],
    stats: {
      0: [{ value: "About 20", label: "different NSAIDs are available, says Arthritis UK.", ref: 3 }],
      2: [{ value: "Around 5 hours", label: "is how long paracetamol lasts, starting to work within the hour, says Arthritis UK.", ref: 5, picture: "hours" }],
      3: [{ value: "No more than 3", label: "steroid injections a year into the same joint is what your doctor will usually recommend, says Arthritis UK.", ref: 3 }],
    },
  },
  "skin": {
    sectionRefs: [[[1], [2]], [[3], [3, 1]], [[4, 5], [4], [5]], [[6], [7, 8]], [[1], [1]]],
    helpRefs: [[3], [3], [1], [6], [5], [1]],
    stats: {
      1: [{ value: "At least twice a day", label: "is how often to use your moisturiser, suggests Psoriasis UK.", ref: 3, picture: "calendar" }],
      2: [{ value: "Up to 10 weeks", label: "of narrowband UVB, usually two or three times a week, says Psoriasis UK.", ref: 5, picture: "calendar" }],
      3: [{ value: "4 weeks", label: "after starting a new topical treatment is when a review is recommended, says Psoriasis UK.", ref: 7, picture: "calendar" }],
    },
  },
  "exercise": {
    sectionRefs: [[[1], [2, 3]], [[3], [3]], [[3], [3], [3, 4]], [[3], [3]], [[4, 1], [5]]],
    helpRefs: [[2], [3], [3], [1], [1], [3]],
    stats: {
      1: [{ value: "At least 3 times a week", label: "for strength and cardiovascular exercise, says PAPAA.", ref: 3, picture: "calendar" }],
    },
    charts: {
      4: { kind: "bars", title: "A weekly activity target", subtitle: "Minutes a week the NHS suggests adults aim for", bars: [{ label: "Moderate activity, at least", value: 150, strong: true }, { label: "Or vigorous activity", value: 75 }], max: 150, ticks: [0, 50, 100, 150], unit: "minutes", sources: "Source: NHS, Physical activity guidelines for adults aged 19 to 64" },
    },
  },
  "fatigue": {
    sectionRefs: [[[1], [2, 1]], [[3], [1, 3]], [[4], [3]], [[5], [6], [3]], [[3], [6]]],
    helpRefs: [[3], [4], [3], [6], [3], [3]],
    stats: {
      3: [{ value: "5 to 10 minutes", label: "of walking or gentle stretching is a good way to start adding exercise, says Arthritis UK.", ref: 6 }],
    },
    charts: {
      3: { kind: "donut", title: "Sleep is a common struggle", subtitle: "People with arthritis, out of every 100", value: 80, prefix: "As many as", subject: "people with arthritis", label: "have reported that they struggle with sleep", sources: "Source: Arthritis UK, Psoriatic arthritis" },
    },
  },
  "heart": {
    sectionRefs: [[[1, 2], [3]], [[2], [2]], [[1], [2], [4]], [[1], [1]], [[5], [2]]],
    helpRefs: [[2], [1], [2], [1], [2], [2]],
    stats: {
      1: [{ value: "Every year", label: "is how often to have your blood pressure checked, suggests PAPAA.", ref: 2, picture: "calendar" }],
      2: [{ value: "10 minutes", label: "of daily activity, such as walking or gardening, is a good starting goal, says PAPAA.", ref: 2, picture: "hours" }],
    },
    charts: {
      2: { kind: "bars", title: "Inactivity and the heart", subtitle: "Risk of heart attack and stroke, compared with being active", bars: [{ label: "Active", value: 1 }, { label: "Inactive, up to", value: 2, strong: true }], max: 2, ticks: [0, 1, 2], unit: "×", sources: "Source: PAPAA, Psoriasis and the heart (being inactive can double your risk)" },
    },
  },
  "work": {
    sectionRefs: [[[1], [2]], [[3], [4]], [[5, 1], [5, 6]], [[6], [2]], [[7], [8, 7]]],
    helpRefs: [[5], [6], [6], [1], [7], [4]],
    stats: {
      1: [{ value: "12 months", label: "or more is what long-term means under the Equality Act 2010, says the government.", ref: 3, picture: "calendar" }],
      4: [{ value: "16 or over", label: "and in paid work, or about to start, is who can get Access to Work, says the government.", ref: 8 }],
    },
  },
};
