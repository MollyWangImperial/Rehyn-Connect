import type { NewsExtras } from "../ischaemic-news";
// Stress and burnout features: paragraph references (numbers are positions in each answer's own sources in stress-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [1, 3]], [[2, 4], [1, 4, 3]], [[1, 2], [3]], [[2, 3], [4, 5, 1], [8]], [[2, 1]]],
    helpRefs: [[2], [2], [2], [2], [2], [6, 7]],
    charts: {
      3: { kind: "donut", title: "Overwhelmed by stress", subtitle: "Adults in a 2018 UK poll for the Mental Health Foundation, out of every 100", value: 74, subject: "people", label: "felt so stressed in the past year they were overwhelmed or unable to cope", sources: "Source: Mental Health Foundation, Stress: statistics" },
    },
  },
  "signs": {
    sectionRefs: [[[1], [2, 3]], [[1], [2, 4]], [[1], [2, 8]], [[1, 4], [3, 5]], [[2], [1]]],
    helpRefs: [[3], [3], [4], [2], [6, 7]],
    charts: {
      2: { kind: "bars", title: "What stress made people do", subtitle: "Adults in a 2018 UK poll for the Mental Health Foundation, out of every 100", bars: [{ label: "Ate too much or ate unhealthily", value: 46, strong: true }, { label: "Started drinking or drank more", value: 29 }, { label: "Started smoking or smoked more", value: 16 }], sources: "Source: Mental Health Foundation, Stress: statistics" },
    },
  },
  "causes": {
    sectionRefs: [[[2], [5]], [[1], [1], [2]], [[1, 5]], [[3], [4], [6]], [[1], [7]]],
    helpRefs: [[5], [4], [4], [5], [1], [8, 9]],
    charts: {
      3: { kind: "bars", title: "What adults said was behind their stress", subtitle: "Adults who reported stress in the past year, 2018 UK poll for the Mental Health Foundation, out of every 100", bars: [{ label: "A long-term health condition, their own or someone close", value: 36, strong: true }, { label: "Debt", value: 22 }], sources: "Source: Mental Health Foundation, Stress: statistics" },
    },
  },
  "burnout": {
    sectionRefs: [[[1], [4, 1], [3]], [[1], [1]], [[2], [2, 3]], [[1], [3]], [[3, 1], [1, 3]]],
    helpRefs: [[3, 1], [3], [3], [3], [1, 5], [6, 7]],
    charts: {
      0: { kind: "donut", title: "Burnt out at work", subtitle: "UK workers, out of every 100, from recent reports cited by the Mental Health Foundation", value: 65, prefix: "About", subject: "UK workers", label: "feel burnt out", sources: "Source: Mental Health Foundation, Burnout" },
    },
    stats: {
      4: [{ value: "1 in 5", label: "workers have needed time off due to mental health problems associated with stress at work, says the Mental Health Foundation.", ref: 3, picture: "one-in", of: 5 }],
    },
  },
  "small-changes": {
    sectionRefs: [[[1], [1, 4]], [[2, 3], [1], [5, 3]], [[1], [1]], [[1, 3], [2, 1, 4]], [[6], [1]]],
    helpRefs: [[1], [3], [1], [1], [1], [7, 8]],
    stats: {
      3: [{ value: "3 things", label: "that went well, or that you are grateful for, written down at the end of every day, is one of the NHS 10 stress busters.", ref: 1 }],
      4: [{ value: "5 or 10 minutes", label: "is the time Every Mind Matters suggests setting aside to think about possible solutions to a problem you can solve.", ref: 6, picture: "hours" }],
    },
  },
  "breathing": {
    sectionRefs: [[[2], [1]], [[1], [1]], [[2], [2]], [[3], [4], [4]], [[4], [4, 5]]],
    helpRefs: [[1], [1], [2], [4, 3], [4], [6, 7]],
    stats: {
      1: [{ value: "At least 5 minutes", label: "of calm breathing, counting from 1 to 5 in and out, is what the NHS breathing exercise suggests.", ref: 1, picture: "hours" }],
    },
  },
  "talking": {
    sectionRefs: [[[5], [6, 8]], [[6, 1, 7], [1], [1]], [[1], [4, 2], [3]], [[4], [4]]],
    helpRefs: [[5], [6, 8], [6, 1], [1], [2], [9, 10]],
    stats: {
      1: [{ value: "18 or over", label: "is the age you can refer yourself to NHS talking therapies, or 16 or over in some areas, says the NHS.", ref: 1 }],
      2: [{ value: "50 to 60 minutes", label: "is how long a counselling session usually lasts, says the NHS.", ref: 3, picture: "hours" }],
    },
    charts: {
      2: { kind: "range", title: "A short course", subtitle: "Number of CBT sessions you will usually have, depending on what it is for, says the NHS", from: 5, to: 15, unit: "sessions", sources: "Source: NHS, Cognitive behavioural therapy (CBT)" },
    },
  },
  "gp": {
    sectionRefs: [[[1], [2], [2, 6]], [[4], [3]], [[2]], [[2], [3]], [[1], [1]]],
    helpRefs: [[1], [2], [2], [4], [3], [5, 6]],
    stats: {
      0: [{ value: "2 weeks or more", label: "of feeling very low or hopeless is one of the signs you may be struggling, says Rethink Mental Illness.", ref: 2, picture: "calendar" }],
    },
  },
  "work": {
    sectionRefs: [[[1, 9], [4]], [[1], [1]], [[3], [2, 4, 3]], [[1], [4, 1], [1]], [[6], [7, 8]]],
    helpRefs: [[1], [4], [1], [5], [6, 8], [10, 11]],
    charts: {
      0: { kind: "bars", title: "The biggest work-related illness", subtitle: "Workers in Great Britain with a work-related illness, 2024 to 2025, in thousands", bars: [{ label: "Stress, depression or anxiety", value: 964, strong: true }, { label: "Musculoskeletal disorders", value: 511 }], max: 1000, ticks: [0, 500, 1000], unit: " thousand", sources: "Source: Health and Safety Executive, Key figures for Great Britain 2024 to 2025" },
    },
    stats: {
      4: [{ value: "More than 7 days", label: "off sick in a row is when you need to give your employer a fit note, says the government's sick leave guide.", ref: 7, picture: "calendar" }],
    },
  },
  "caring": {
    sectionRefs: [[[1], [4, 5]], [[1], [1], [1]], [[2], [2]], [[3], [3, 1]], [[1], [1]]],
    helpRefs: [[2], [1], [1], [1], [2], [6, 7]],
    charts: {
      0: { kind: "donut", title: "Stress is common in caring", subtitle: "Carers in the Carers UK State of Caring 2025 survey, out of every 100", value: 74, subject: "carers", label: "said they had felt stressed or anxious", sources: "Source: Carers UK, Key facts and figures" },
    },
    stats: {
      2: [{ value: "At least an hour", label: "is how long a carer's assessment usually lasts, says the NHS.", ref: 2, picture: "hours" }],
    },
  },
  "sleep-activity": {
    sectionRefs: [[[1, 2], [3, 2]], [[1], [1, 7]], [[4, 5], [6, 7], [3]], [[8, 4], [9, 10], [11]]],
    helpRefs: [[1], [1], [7, 3], [8], [11], [12, 13]],
    stats: {
      0: [{ value: "7 to 9 hours", label: "of sleep a night is what most healthy adults need, says Every Mind Matters.", ref: 2, picture: "hours" }],
      1: [{ value: "At least 6 hours", label: "before bed is when to stop drinking alcohol, tea or coffee, says the NHS.", ref: 1, picture: "hours" }],
    },
    charts: {
      2: { kind: "bars", title: "Two ways to reach your week", subtitle: "Minutes of activity a week the NHS says adults should aim for", bars: [{ label: "Moderate", value: 150, strong: true }, { label: "Or vigorous", value: 75 }], max: 150, unit: " min", ticks: [0, 75, 150], sources: "Source: NHS, Physical activity guidelines for adults aged 19 to 64" },
    },
  },
  "crisis": {
    sectionRefs: [[[5], [5]], [[3, 4], [2, 7], [2]], [[1], [2]], [[1], [6, 1]], [[2], [1, 2]]],
    helpRefs: [[1], [4, 3], [2], [2], [3, 1], [1, 2]],
    stats: {
      0: [{ value: "1 in 5", label: "people who call Samaritans say that they feel suicidal. You can call about anything that is troubling you.", ref: 5, picture: "one-in", of: 5 }],
      1: [{ value: "24 hours", label: "a day, every day, is when Samaritans and the Shout text line are open, says the NHS.", ref: 2, picture: "hours" }],
    },
  },
};
