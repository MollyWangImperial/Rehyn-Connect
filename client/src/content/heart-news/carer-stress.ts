import type { NewsExtras } from "../ischaemic-news";
// Carer stress features: paragraph references (numbers are positions in each answer's own sources in carer-stress-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[6], [6]], [[1], [4], [2, 3]], [[1], [1, 3]], [[5, 7], [1]]],
    helpRefs: [[1, 2], [1], [6], [1], [2], [8, 9]],
    charts: {
      3: { kind: "bars", title: "How caring can feel", subtitle: "Carers in the Carers UK State of Caring 2025 survey, out of every 100", bars: [{ label: "Felt stressed or anxious", value: 74, strong: true }, { label: "Feel depressed", value: 40 }, { label: "Mental health bad or very bad", value: 35 }], sources: "Source: Carers UK, Key facts and figures about caring" },
    },
  },
  "signs": {
    sectionRefs: [[[1, 2], [1]], [[1, 2], [3]], [[2, 1], [3]], [[2], [4]], [[1], [1, 8]]],
    helpRefs: [[1], [2], [2], [6, 2], [3], [7, 8]],
    stats: {
      2: [{ value: "About 1 in 4", label: "carers in England and Wales reported not good health in the Census 2021, compared with fewer than 1 in 5 non-carers, says Carers UK.", ref: 5, picture: "one-in-four" }],
    },
  },
  "rights": {
    sectionRefs: [[[1, 2], [2], [2]], [[4], [4, 8]], [[5]], [[6], [6]], [[7], [7]]],
    helpRefs: [[2, 3], [4, 8], [5], [6], [7], [9, 10]],
    stats: {
      1: [{ value: "Up to one week", label: "of unpaid carer's leave every 12 months, from the first day of work, says the government's guidance.", ref: 4, picture: "calendar" }],
    },
  },
  "assessment": {
    sectionRefs: [[[2], [1], [2]], [[1], [2]], [[1, 2], [2]], [[1], [1, 2]], [[1, 2], [1]]],
    helpRefs: [[1], [1, 2], [2], [1], [2], [3, 4]],
    stats: {
      3: [{ value: "At least an hour", label: "is how long a carer's assessment usually lasts, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  "breaks": {
    sectionRefs: [[[1], [2], [3]], [[1], [1, 2]], [[1], [1]], [[1], [1, 2]], [[2], [2, 1]]],
    helpRefs: [[1], [1], [2], [1], [2], [4, 5]],
  },
  "money": {
    sectionRefs: [[[1, 2, 3], [2]], [[3], [3, 4]], [[2, 6, 1], [6]], [[5], [5], [2, 1]], [[7], [8]]],
    helpRefs: [[1, 7], [2], [6], [1], [7], [9, 10]],
    charts: {
      0: { kind: "bars", title: "Hours of caring that count", subtitle: "Hours of care a week needed for each, says the government", bars: [{ label: "Carer's Allowance", value: 35, strong: true }, { label: "Carer's Credit", value: 20 }], max: 35, ticks: [0, 20, 35], unit: " hours", sources: "Source: GOV.UK, Carer's Allowance; Carer's Credit" },
    },
    stats: {
      1: [{ value: "£204 a week", label: "or less, after tax, National Insurance and expenses, is the earnings limit for Carer's Allowance, says the government.", ref: 3 }],
      4: [{ value: "Nearly half", label: "of carers said they had cut back on essentials such as food and heating, in the Carers UK State of Caring 2025 survey.", ref: 8, picture: "half" }],
    },
  },
  "gp": {
    sectionRefs: [[[1], [1, 3]], [[1], [1]], [[2], [2]], [[1], [4, 5]], [[1]]],
    helpRefs: [[1], [2], [1], [4, 5], [1], [6, 7]],
    charts: {
      0: { kind: "donut", title: "Carers' own health", subtitle: "Carers, out of every 100, in the GP Patient Survey 2025", value: 72, subject: "carers", label: "said they had a physical or mental health condition lasting, or expected to last, 12 months or more", sources: "Source: Carers UK, Key facts and figures about caring" },
    },
  },
  "talking": {
    sectionRefs: [[[1, 2], [1]], [[1], [1, 4]], [[3], [5, 7]], [[6, 8]]],
    helpRefs: [[1], [1], [3, 5], [6], [1], [9, 10]],
    stats: {
      0: [{ value: "18 or over", label: "is the age to refer yourself to NHS talking therapies, or 16 or over in some areas, says the NHS.", ref: 1 }],
    },
  },
  "health": {
    sectionRefs: [[[1], [5]], [[2], [2]], [[4], [3]], [[4], [4]], [[3], [3]]],
    helpRefs: [[2], [4], [4], [3], [2, 3], [6, 7]],
    charts: {
      0: { kind: "donut", title: "Health that suffers", subtitle: "Carers, out of every 100, in the Carers UK State of Caring 2025 survey", value: 42, subject: "carers", label: "said their physical health had suffered as a result of caring", sources: "Source: Carers UK, Key facts and figures about caring" },
    },
    stats: {
      2: [{ value: "10 minutes", label: "of yoga is one idea Carers UK gives for being active if you are tied to the home.", ref: 4, picture: "hours" }],
    },
  },
  "work": {
    sectionRefs: [[[7], [1]], [[2, 9], [2, 9]], [[3, 8], [3]], [[4, 5], [5, 4]], [[6], [6]]],
    helpRefs: [[1, 6], [2], [3], [5], [8], [10, 11]],
    stats: {
      0: [{ value: "Nearly 3 million", label: "people in the UK balance unpaid care with paid work, Census data shows, says Carers UK.", ref: 7 }],
    },
    charts: {
      0: { kind: "bars", title: "More carers work part time", subtitle: "People in work who work part time, out of every 100, Census 2021 in England and Wales", bars: [{ label: "Carers", value: 38, strong: true }, { label: "Non-carers", value: 29 }], sources: "Source: Carers UK, Key facts and figures about caring" },
    },
  },
  "emergency": {
    sectionRefs: [[[1], [2, 4]], [[2], [2], [1]], [[2], [3]], [[3], [5, 3]], [[3]]],
    helpRefs: [[2], [1], [1], [2, 3], [3, 5], [6, 7]],
    stats: {
      3: [{ value: "24 hours", label: "a day is the response that carers' emergency card schemes provide, where they run, says Carers UK.", ref: 3, picture: "hours" }],
    },
  },
  "feelings": {
    sectionRefs: [[[1], [1, 4]], [[1], [1]], [[1], [2]], [[1, 3]], [[1], [1, 5]]],
    helpRefs: [[1], [1], [1], [2], [1], [6, 7]],
    charts: {
      0: { kind: "donut", title: "Low mood is common", subtitle: "Carers, out of every 100, in the Carers UK State of Caring 2025 survey", value: 40, subject: "carers", label: "said they feel depressed", sources: "Source: Carers UK, Key facts and figures about caring" },
    },
  },
};
