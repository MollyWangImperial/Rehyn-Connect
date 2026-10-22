import type { NewsExtras } from "../ischaemic-news";
// Lupus (SLE) features: paragraph references (numbers are positions in each answer's own sources in lupus-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[2], [3, 2]], [[1, 3], [1, 3], [3, 2, 1]], [[2], [1, 2]], [[3], [2, 1]]],
    helpRefs: [[1], [1], [3], [4], [3]],
    stats: {
      3: [{ value: "Around 2 in 10", label: "lupus cases start in childhood, says LUPUS UK.", ref: 2 }],
    },
    charts: {
      3: { kind: "range", title: "When lupus often starts", subtitle: "Ages at which lupus often develops, in years", from: 15, to: 55, unit: "years of age", sources: "Source: LUPUS UK, What is lupus?" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1, 5], [1, 2]], [[1], [2, 1], [1]], [[2], [2, 4]], [[1], [1, 2]], [[3], [3]]],
    helpRefs: [[1], [2], [2], [2], [2], [2]],
    stats: {
      0: [{ value: "Almost 9 in 10", label: "people with lupus report experiencing fatigue, says LUPUS UK.", ref: 5 }],
    },
  },
  "diagnosis": {
    sectionRefs: [[[2, 1], [2]], [[2], [2]], [[3, 2], [2, 3], [3]], [[2, 3], [1]], [[2], [2]]],
    helpRefs: [[2], [4], [2], [2], [2]],
    stats: {
      2: [{ value: "About 4 in 10", label: "people with lupus test negative for anti-dsDNA, so a negative test does not rule it out, says LUPUS UK.", ref: 2 }],
      3: [{ value: "About 1 in 3", label: "people with lupus have kidney involvement, says LUPUS UK.", ref: 2, picture: "one-in", of: 3 }],
      4: [{ value: "About 6 years", label: "is the average time from first symptoms to a diagnosis of lupus, says LUPUS UK.", ref: 2, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "Common in lupus, but not proof", subtitle: "People with a positive ANA test, out of every 100", bars: [{ label: "People with lupus", value: 95, strong: true }, { label: "People with no health conditions", value: 10 }], sources: "Source: LUPUS UK, Diagnosis" },
    },
  },
  "organs": {
    sectionRefs: [[[1], [1, 2]], [[2], [3], [2]], [[2], [2]], [[2], [2]], [[4], [4]]],
    helpRefs: [[2], [2], [2], [5], [4], [2]],
    stats: {
      1: [{ value: "About 1 in 3", label: "people with lupus have kidney involvement, says LUPUS UK.", ref: 6, picture: "one-in", of: 3 }],
      4: [{ value: "15 minutes or more", label: "of sudden chest pain means calling 999 or going to A&E, says the NHS.", ref: 4, picture: "hours" }],
    },
  },
  "hydroxychloroquine": {
    sectionRefs: [[[1], [2], [3]], [[1], [1], [4]], [[1, 4, 3], [4, 1]], [[1], [3, 2, 4], [1]], [[4], [2]]],
    helpRefs: [[1, 4], [1], [4], [4], [4], [1]],
    stats: {
      1: [{ value: "At least 4 hours", label: "after hydroxychloroquine before taking an indigestion remedy, recommends Arthritis UK.", ref: 4, picture: "hours" }],
      3: [{ value: "Once a year", label: "is how often eye checks are repeated after five years of treatment, says LUPUS UK.", ref: 2, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "Slow to reach its full effect", subtitle: "Months from first helping to full effectiveness", from: 1, to: 12, unit: "months", sources: "Source: LUPUS UK, Treatments" },
    },
  },
  "other-medicines": {
    sectionRefs: [[[1], [2]], [[3, 1], [2, 1], [2, 4]], [[2], [1]], [[2, 1], [1, 6], [2]], [[1], [1, 5]]],
    helpRefs: [[4], [5], [6], [7], [7], [7]],
    stats: {
      1: [{ value: "More than 3 weeks", label: "on steroids, or a high dose, means carrying a steroid card, says Arthritis UK.", ref: 5, picture: "calendar" }],
      3: [{ value: "Up to 6 months", label: "may pass before you notice the benefits of belimumab, says Arthritis UK.", ref: 6, picture: "calendar" }],
    },
  },
  "flares": {
    sectionRefs: [[[1], [2, 3]], [[4], [1, 3]], [[4], [4], [3]], [[4], [5, 4], [6]]],
    helpRefs: [[4], [4], [3], [4], [4], [6]],
  },
  "checks": {
    sectionRefs: [[[1], [1]], [[2], [1], [1]], [[1, 3]], [[1, 4], [5, 6]], [[7], [7, 8]]],
    helpRefs: [[1], [1], [4], [5], [7], [7]],
    stats: {
      1: [{ value: "About 1 in 3", label: "people with lupus have kidney involvement, which is why urine is checked, says LUPUS UK.", ref: 8, picture: "one-in", of: 3 }],
    },
  },
  "sun": {
    sectionRefs: [[[3], [2]], [[1], [4], [2]], [[4, 2], [4, 2], [1]], [[2], [2, 5]]],
    helpRefs: [[1], [2], [4], [1], [2], [2]],
    stats: {
      1: [{ value: "At least factor 50", label: "sunscreen, which people with lupus can get on prescription, says the NHS.", ref: 1 }],
      2: [{ value: "11am to 3pm", label: "is when the sun is strongest in the UK, from March to October, says the NHS.", ref: 4, picture: "hours" }],
      3: [{ value: "10 micrograms", label: "of vitamin D a day is what adults need, says the NHS.", ref: 5 }],
    },
    charts: {
      1: { kind: "range", title: "Enough sunscreen", subtitle: "Teaspoons of sunscreen to cover an adult's entire body", from: 6, to: 8, unit: "teaspoons", sources: "Source: NHS, Sunscreen and sun safety" },
    },
  },
  "fatigue": {
    sectionRefs: [[[1, 2], [1]], [[3], [1]], [[3, 4], [1, 4], [4]], [[3], [3, 5], [5]]],
    helpRefs: [[6], [6], [3], [4], [4], [3]],
    stats: {
      2: [{ value: "4 Ps", label: "problem solving, planning, prioritising and pacing, are the strategies Arthritis UK suggests for fatigue.", ref: 4 }],
    },
    charts: {
      0: { kind: "donut", title: "Almost everyone feels it", subtitle: "People with lupus, out of every 100 (almost 9 in 10)", value: 90, prefix: "Almost", subject: "people with lupus", label: "report experiencing fatigue", sources: "Source: LUPUS UK, What is lupus?" },
    },
  },
  "pregnancy": {
    sectionRefs: [[[1], [2]], [[2], [2, 3], [2]], [[3, 2, 5], [2], [2]], [[2], [2]], [[3], [4, 2]]],
    helpRefs: [[1], [2], [3], [2], [3], [2]],
    stats: {
      2: [{ value: "About half", label: "of people with lupus have antiphospholipid antibodies, says Arthritis UK.", ref: 3, picture: "half" }],
      4: [{ value: "About 3 months", label: "before pregnancy is when to start folic acid, says Arthritis UK.", ref: 3, picture: "calendar" }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [2], [3]], [[4, 1], [5]], [[1], [1]], [[1, 6], [6, 1]], [[7], [7]]],
    helpRefs: [[1], [1], [1], [1], [8], [7]],
    stats: {
      3: [{ value: "9am to 8pm", label: "Monday to Friday, the free Arthritis UK helpline on 0800 5200 520 is open, says Arthritis UK.", ref: 1, picture: "hours" }],
      4: [{ value: "116 123", label: "is the number to call Samaritans, says the NHS.", ref: 7 }],
    },
  },
};
