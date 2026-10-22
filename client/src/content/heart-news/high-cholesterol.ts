import type { NewsExtras } from "../ischaemic-news";
// High cholesterol features: paragraph references (numbers are positions in each answer's own sources in cholesterol-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [1, 4]], [[1], [1, 3]], [[3, 1], [3]], [[2, 3], [2]], [[1], [3, 1]]],
    helpRefs: [[1], [1], [2], [5], [3]],
    charts: {
      1: { kind: "donut", title: "Mostly made, not eaten", subtitle: "Where the body's cholesterol comes from, out of every 100 parts", value: 80, prefix: "About", subject: "parts of your cholesterol", label: "are made in the liver", sources: "Source: HEART UK, What is cholesterol?" },
    },
  },
  "numbers": {
    sectionRefs: [[[4], [4]], [[2, 1], [1, 3]], [[1, 2, 3], [1, 3]], [[2], [3]], [[1], [3, 1]]],
    helpRefs: [[3], [3], [3], [1], [1], [2]],
    charts: {
      2: { kind: "bars", title: "Healthy levels for healthy adults", subtitle: "The level each result should be below, in mmol/L, as a general guide", bars: [{ label: "Total cholesterol, below", value: 5 }, { label: "Non-HDL cholesterol, below", value: 4, strong: true }, { label: "LDL cholesterol, below", value: 3 }], max: 6, ticks: [0, 2, 4, 6], unit: " mmol/L", sources: "Sources: NHS, Cholesterol levels; British Heart Foundation, Understanding your cholesterol levels" },
    },
    stats: {
      3: [{ value: "More than 40%", label: "is the fall in non-HDL cholesterol national guidelines recommend for people at higher risk who do not have heart disease, says HEART UK.", ref: 3 }],
    },
  },
  "causes": {
    sectionRefs: [[[2, 4], [2]], [[1], [2, 3]], [[1], [2]], [[2, 3], [2]], [[3, 2], [2]]],
    helpRefs: [[1], [3], [3], [3], [2], [2]],
    charts: {
      0: { kind: "donut", title: "Very common", subtitle: "Adults in the UK, out of every 100", value: 50, prefix: "About", subject: "adults in the UK", label: "have total cholesterol above the healthy limit of 5mmol/L", sources: "Source: British Heart Foundation, Foods to avoid with high cholesterol" },
    },
  },
  "risk": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[2], [2]], [[2, 3], [4]], [[2, 5], [3]]],
    helpRefs: [[2], [3], [2], [2], [4]],
    charts: {
      2: { kind: "range", title: "A moderate risk", subtitle: "Chance out of 100 of developing cardiovascular disease within 10 years, on a QRISK score", from: 10, to: 20, sources: "Source: British Heart Foundation, QRISK: how it works and what your score means" },
    },
    stats: {
      3: [{ value: "Every 5 years", label: "an NHS Health Check invitation for people aged 40 to 74 in England without certain existing conditions, says the NHS.", ref: 3, picture: "calendar" }],
    },
  },
  "statins": {
    sectionRefs: [[[1], [3, 2]], [[1], [2], [1]], [[1, 3], [3], [1, 3]], [[2, 1], [6], [6]], [[1], [3, 4], [5]]],
    helpRefs: [[3], [3, 2], [1, 3], [4], [3], [3]],
    charts: {
      0: { kind: "bars", title: "How far atorvastatin lowers LDL", subtitle: "Approximate fall in LDL cholesterol, by daily dose of atorvastatin, out of every 100", bars: [{ label: "10mg a day", value: 37 }, { label: "20mg a day", value: 43 }, { label: "40mg a day", value: 49 }, { label: "80mg a day", value: 55, strong: true }], max: 100, ticks: [0, 25, 50, 75, 100], unit: "%", sources: "Source: HEART UK, Questions about statins (from national NHS lipid guidance, 2021)" },
    },
    stats: {
      3: [{ value: "62 out of 66", label: "side effects commonly listed on statin leaflets may not be caused by statins, found a BHF-funded study in 2026.", ref: 6 }],
    },
  },
  "other-medicines": {
    sectionRefs: [[[1, 7], [9]], [[2, 3], [3, 7], [2]], [[4, 7], [4]], [[7, 6], [5], [5, 6, 7]], [[5, 6, 7], [8]]],
    helpRefs: [[1], [2], [4], [4, 6], [6], [8]],
    charts: {
      3: { kind: "bars", title: "How far other medicines lower LDL", subtitle: "Fall in LDL cholesterol seen in studies, out of every 100", bars: [{ label: "Ezetimibe with a statin, up to", value: 27 }, { label: "Inclisiran, at least", value: 50 }, { label: "PCSK9 inhibitors, up to", value: 60, strong: true }], max: 100, ticks: [0, 25, 50, 75, 100], unit: "%", sources: "Sources: HEART UK, Ezetimibe and Inclisiran; British Heart Foundation, 4 statin alternatives that lower cholesterol" },
    },
    stats: {
      1: [{ value: "Within 2 weeks", label: "is when ezetimibe usually lowers cholesterol levels, says the NHS.", ref: 2, picture: "calendar" }],
      3: [{ value: "Every 6 months", label: "an inclisiran injection, after the first two doses three months apart, says HEART UK.", ref: 5, picture: "calendar" }],
    },
  },
  "food": {
    sectionRefs: [[[1], [2, 4]], [[1], [3, 4]], [[1], [5, 3]], [[3], [3, 6]], [[3], [3]]],
    helpRefs: [[1], [5], [3], [5], [5], [2]],
    charts: {
      0: { kind: "bars", title: "The daily limit for saturated fat", subtitle: "The most saturated fat to eat in a day under UK guidelines, in grams", bars: [{ label: "Women", value: 20 }, { label: "Men", value: 30, strong: true }], max: 40, ticks: [0, 10, 20, 30, 40], unit: "g", sources: "Sources: British Heart Foundation, Foods to avoid with high cholesterol; HEART UK, Saturated fat" },
    },
    stats: {
      3: [
        { value: "3g a day", label: "of beta glucans, the fibre in oats and barley, can help maintain healthy cholesterol levels, says the BHF.", ref: 3 },
        { value: "7 to 12%", label: "is how much plant sterols and stanols can lower cholesterol, taken daily in the right amount, says the BHF.", ref: 6 },
      ],
    },
  },
  "activity": {
    sectionRefs: [[[3, 6], [2]], [[1, 2], [2, 1], [2, 1]], [[4], [4]], [[5, 6], [5]], [[7], [1]]],
    helpRefs: [[1], [2], [4], [1], [1], [1]],
    stats: {
      1: [{ value: "150 minutes", label: "of moderate intensity exercise a week, at least, is what to aim for, says the NHS.", ref: 1, picture: "calendar" }],
      2: [{ value: "10%", label: "of body weight lost will help lower cholesterol and triglyceride levels, says HEART UK.", ref: 4 }],
      3: [{ value: "Halved", label: "is your risk of heart disease one year after stopping smoking, says HEART UK.", ref: 5, picture: "half" }],
      4: [{ value: "14 units", label: "of alcohol a week is the most to drink on a regular basis, says the NHS.", ref: 1 }],
    },
  },
  "rechecks": {
    sectionRefs: [[[1], [4, 2]], [[3], [3, 6]], [[4, 5], [5]], [[7], [7]]],
    helpRefs: [[2], [3], [5], [7], [1]],
    stats: {
      0: [{ value: "Every year", label: "your GP should invite you for a blood test if you have high cholesterol, says the BHF.", ref: 1, picture: "calendar" }],
      1: [{ value: "3 months", label: "after starting a statin is usually when the first check-up blood tests happen, says HEART UK.", ref: 3, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "Who is invited for an NHS Health Check", subtitle: "Ages invited every 5 years in England, for people without certain existing conditions", from: 40, to: 74, unit: "years of age", sources: "Source: NHS, NHS Health Check" },
    },
  },
  "labels": {
    sectionRefs: [[[1], [1, 2]], [[1], [3, 2]], [[1], [2], [3]], [[1], [4]]],
    helpRefs: [[1], [2], [2], [4], [3]],
    stats: {
      1: [{ value: "More than 5g", label: "of saturated fat per 100g means a food is high in saturated fat, says the NHS.", ref: 1 }],
    },
  },
  "myths": {
    sectionRefs: [[[1], [1]], [[2, 4], [2]], [[3], [3, 5]], [[6, 3], [3]], [[1], [3, 1]]],
    helpRefs: [[1], [1], [4], [6, 3], [1], [3]],
    stats: {
      0: [{ value: "1 or 2 eggs", label: "a day is unlikely to be a problem for most adults as part of a balanced diet, says the BHF.", ref: 1 }],
    },
    charts: {
      3: { kind: "bars", title: "Saturated fat in two cooking fats", subtitle: "How much of the fat is saturated, out of every 100 parts, as given by HEART UK", bars: [{ label: "Butter", value: 52 }, { label: "Coconut oil", value: 92, strong: true }], max: 100, ticks: [0, 25, 50, 75, 100], unit: "%", sources: "Source: HEART UK, Heart health nutrition myths busted by science" },
    },
  },
  "family": {
    sectionRefs: [[[3], [7]], [[1], [1, 2], [1]], [[4], [4]], [[1], [1]], [[1, 5], [6], [1]]],
    helpRefs: [[7], [6, 1], [5], [6], [6]],
    stats: {
      1: [
        { value: "1 in 2", label: "is the chance of inheriting FH if one of your parents has it, says the BHF.", ref: 1, picture: "one-in", of: 2 },
        { value: "About 1 in 250", label: "people have familial hypercholesterolaemia, says the BHF.", ref: 1 },
      ],
      4: [{ value: "By age 10", label: "children of people with FH should have a cholesterol check, says HEART UK.", ref: 5 }],
    },
  },
};
