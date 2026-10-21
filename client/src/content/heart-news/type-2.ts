import type { NewsExtras } from "../ischaemic-news";
// Type 2 diabetes features: paragraph references (numbers are positions in each answer's own sources in t2d-answers.ts), charts and big figures, all checked on 20 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "hba1c": {
    sectionRefs: [[[1], [1]], [[1, 2], [1]], [[1, 3, 4], [1]], [[1, 4], [1]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1], [1], [1]],
    stats: {
      1: [{ value: "48 mmol/mol", label: "or below is an ideal HbA1c level if you have diabetes, says Diabetes UK.", ref: 1 }],
      2: [{ value: "Every 3 to 6 months", label: "is how often most people have an HbA1c test, says the NHS.", ref: 3, picture: "calendar" }],
    },
    charts: {
      1: { kind: "bars", title: "Two HbA1c targets", subtitle: "Target HbA1c levels in mmol/mol, by who is being tested", bars: [{ label: "At risk of type 2: below", value: 42 }, { label: "With diabetes: ideal at or below", value: 48, strong: true }], max: 60, ticks: [0, 20, 40, 60], unit: " mmol/mol", sources: "Source: Diabetes UK, What is HbA1c?" },
    },
  },
  "what-it-is": {
    sectionRefs: [[[5], [5]], [[1, 2, 3], [3]], [[4], [4]], [[6, 3], [6, 3]], [[2, 6], [6, 7]]],
    helpRefs: [[6], [6, 7], [6], [6], [6]],
    stats: {
      3: [{ value: "2 to 6 times", label: "more likely to develop type 2 diabetes if a close blood relative has diabetes, says Diabetes UK.", ref: 3, picture: "times" }],
    },
    charts: {
      3: { kind: "donut", title: "Not only about weight", subtitle: "People with type 2 diabetes, out of every 100", value: 10, prefix: "Around", subject: "people with type 2 diabetes", label: "have a healthy BMI", sources: "Source: Diabetes UK, What causes type 2 diabetes?" },
    },
  },
  "complications": {
    sectionRefs: [[[2], [1]], [[3], [7]], [[4], [4]], [[5], [5]], [[6], [6]]],
    helpRefs: [[1], [2, 5], [2], [1], [3], [5]],
    stats: {
      2: [{ value: "Almost 1 in 5", label: "people with diabetes will need treatment for kidney disease caused by diabetes, says Diabetes UK.", ref: 4, picture: "one-in", of: 5 }],
    },
    charts: {
      3: { kind: "bars", title: "Every week in the UK", subtitle: "Heart attacks and strokes that diabetes is a cause in, each week, as estimated by Diabetes UK", bars: [{ label: "Heart attacks, over", value: 700 }, { label: "Strokes", value: 1010, strong: true }], max: 1200, ticks: [0, 400, 800, 1200], unit: " a week", sources: "Source: Diabetes UK, Diabetes and heart disease" },
    },
  },
  "remission": {
    sectionRefs: [[[1], [1]], [[1], [1, 2]], [[1], [4]], [[2, 3], [2]], [[1], [1]]],
    helpRefs: [[6, 2], [5], [2, 6], [4], [1]],
    stats: {
      1: [{ value: "Almost half", label: "of people in the DiRECT trial who went on a low-calorie diet were in remission after one year, says NHS England.", ref: 2, picture: "half" }],
      2: [{ value: "Around 15kg", label: "of weight lost quickly and safely after diagnosis makes remission more likely for people living with obesity or overweight, says Diabetes UK.", ref: 1 }],
    },
    charts: {
      3: { kind: "donut", title: "Remission through the NHS programme", subtitle: "People who completed the programme with two HbA1c results recorded, out of every 100", value: 32, subject: "people who completed the programme", label: "had put their type 2 diabetes into remission", sources: "Source: NHS England, NHS Type 2 Diabetes Path to Remission Programme" },
    },
  },
  "hypos": {
    sectionRefs: [[[1, 3], [5, 2]], [[1, 2], [1]], [[1], [1]], [[1], [1]], [[1], [4]]],
    helpRefs: [[2], [1], [1], [1], [1]],
    stats: {
      0: [{ value: "Below 4mmol/L", label: "is usually where low blood sugar, or a hypo, begins, says the NHS.", ref: 1 }],
      2: [{ value: "10 to 15 minutes", label: "after a sugary drink or snack, check your blood sugar again, says the NHS.", ref: 1 }],
    },
  },
  "tablets": {
    sectionRefs: [[[5], [5]], [[3, 2], [2, 3]], [[1], [4]], [[5, 6], [5]], [[2], [2]]],
    helpRefs: [[2, 3], [2], [3], [5], [3], [2]],
    stats: {
      1: [{ value: "1 to 3 times a day", label: "with food is how most people take metformin, says the NHS.", ref: 2 }],
    },
  },
  "injections": {
    sectionRefs: [[[2], [2]], [[1], [2]], [[2], [2]], [[4], [3]], [[4], [1, 3, 5]]],
    helpRefs: [[2], [2], [2], [4], [3, 5], [5]],
    stats: {
      1: [{ value: "Once a week", label: "is how often a GLP-1 medicine is usually given by injection, says the NHS.", ref: 1, picture: "calendar" }],
      3: [{ value: "1 in 4", label: "people with type 2 diabetes take insulin, says Diabetes UK.", ref: 3, picture: "one-in-four" }],
    },
  },
  "food": {
    sectionRefs: [[[1], [1, 2]], [[1], [2]], [[3], [3]], [[2, 1], [2]], [[1], [1, 4]]],
    helpRefs: [[1], [2], [2], [2], [4], [1]],
    stats: {
      3: [{ value: "6 grams", label: "of salt a day at most for adults, about one teaspoon, says Diabetes UK.", ref: 2 }],
    },
    charts: {
      2: { kind: "bars", title: "What one portion weighs", subtitle: "One portion of starchy food for an average healthy adult, in grams", bars: [{ label: "Bread, one medium slice", value: 35 }, { label: "Cooked rice, two cupped hands", value: 180, strong: true }, { label: "Jacket potato, fist-sized", value: 220 }], max: 240, ticks: [0, 80, 160, 240], unit: "g", sources: "Source: Diabetes UK, Portion sizes and diabetes" },
    },
  },
  "moving": {
    sectionRefs: [[[1], [1]], [[2], [1, 3]], [[5, 6], [4]], [[1], [1]], [[1], [2]]],
    helpRefs: [[1], [1], [6], [1], [3], [1, 3]],
    stats: {
      2: [{ value: "150 minutes", label: "of moderate activity a week to aim for, in chunks as short as 10 minutes, says Diabetes UK.", ref: 6, picture: "calendar" }],
      3: [{ value: "Every 30 to 45 minutes", label: "standing up for a while can help lower your blood sugar, says Diabetes UK.", ref: 1 }],
    },
  },
  "monitoring": {
    sectionRefs: [[[1, 2], [1]], [[1], [1]], [[1], [3, 1]], [[1], [4, 5]], [[1, 2]]],
    helpRefs: [[1], [1], [1], [3], [1]],
    stats: {
      2: [{ value: "Up to 15 minutes", label: "is how far CGM readings can lag behind blood sugar, says Diabetes UK.", ref: 1 }],
    },
    charts: {
      3: { kind: "bars", title: "When a home reading counts as high", subtitle: "Home blood sugar readings above which the NHS calls them high, in mmol/L", bars: [{ label: "On waking or before eating", value: 7 }, { label: "At least 90 minutes after eating", value: 11, strong: true }], max: 12, ticks: [0, 4, 8, 12], unit: " mmol/L", sources: "Source: NHS, High blood sugar (hyperglycaemia)" },
    },
  },
  "annual-checks": {
    sectionRefs: [[[1], [1]], [[1, 2], [5]], [[1, 2], [4]], [[1, 3], [3]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [3], [1]],
    stats: {
      0: [{ value: "9", label: "diabetes health checks should be offered at your annual review, says Diabetes UK.", ref: 1 }],
      3: [{ value: "Within 3 weeks", label: "is when your eye screening result letter usually arrives, says the NHS.", ref: 3, picture: "calendar" }],
    },
  },
  "feet": {
    sectionRefs: [[[2], [2, 1]], [[1], [5]], [[1], [1]], [[3], [3]], [[4], [4]]],
    helpRefs: [[1], [1], [1], [1], [1], [1]],
    stats: {
      3: [{ value: "Up to 20 times", label: "more likely to have an amputation if you have diabetes, says Diabetes UK.", ref: 3, picture: "times" }],
      4: [{ value: "184 a week", label: "leg, toe or foot amputations are what diabetes leads to, says Diabetes UK. That is 26 a day.", ref: 4 }],
    },
  },
  "sick-days": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[2], [1, 3]], [[1], [1, 4]], [[4], [5, 4]]],
    helpRefs: [[4, 1], [1], [1], [2], [1], [1]],
    stats: {
      3: [{ value: "Every 4 hours", label: "at least, including at night, check your blood sugar when ill if you test at home, says Diabetes UK.", ref: 1, picture: "hours" }],
    },
  },
  "driving": {
    sectionRefs: [[[2], [2, 5]], [[1], [1]], [[1]], [[2, 3, 4], [2]], [[2], [2, 4]]],
    helpRefs: [[1], [2, 4], [2], [2], [2], [2]],
    stats: {
      1: [{ value: "Up to £1,000", label: "is the fine for not telling the DVLA about a medical condition that affects your driving, says the government.", ref: 1 }],
      3: [{ value: "Every 2 hours", label: "at least, on longer journeys, check your blood sugar if your treatment can cause hypos, says Diabetes UK.", ref: 2, picture: "hours" }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[1, 2], [2]], [[1], [1, 2]], [[3, 2], [1, 4]]],
    helpRefs: [[1], [1], [1], [1], [2], [4]],
    stats: {
      0: [{ value: "1 in 5", label: "people with type 2 diabetes have high levels of diabetes distress, says Diabetes UK.", ref: 1, picture: "one-in", of: 5 }],
      2: [{ value: "At least twice", label: "as likely to have depression: people with diabetes, compared with people without, says Diabetes UK.", ref: 2 }],
    },
    charts: {
      2: { kind: "donut", title: "A heavy load to carry", subtitle: "People with diabetes, out of every 100", value: 40, prefix: "As many as", subject: "people with diabetes", label: "say they have struggled with their psychological wellbeing since diagnosis", sources: "Source: Diabetes UK, Depression and diabetes" },
    },
  },
};
