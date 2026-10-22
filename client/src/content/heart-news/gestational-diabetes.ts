import type { NewsExtras } from "../ischaemic-news";
// Gestational diabetes features: paragraph references (numbers are positions in each answer's own sources in gd-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [1, 4]], [[3, 1], [3]], [[3], [5]], [[1], [1]], [[1], [1]]],
    helpRefs: [[1], [4], [5], [5], [6]],
    stats: {
      0: [{ value: "1 in 8", label: "women are estimated to be affected by gestational diabetes during pregnancy, says Diabetes UK.", ref: 3, picture: "one-in", of: 8 }],
    },
  },
  "risk": {
    sectionRefs: [[[1, 2]], [[1], [1], [1]], [[1]], [[2, 3], [3]], [[3], [3]]],
    helpRefs: [[4], [1], [3], [3], [3]],
    stats: {
      1: [{ value: "10lb or more", label: "at birth for a previous baby raises the risk of gestational diabetes, says the NHS.", ref: 1 }],
      4: [{ value: "150 minutes", label: "of exercise a week, at least, is what Diabetes UK suggests to keep active.", ref: 3, picture: "calendar" }],
    },
  },
  "tests": {
    sectionRefs: [[[1], [1, 3]], [[1, 2], [1], [1]], [[2], [2]], [[2], [2]]],
    helpRefs: [[1], [2], [2], [4], [2]],
    stats: {
      0: [{ value: "24 to 28 weeks", label: "of pregnancy is when the glucose test is usually done, says the NHS.", ref: 1, picture: "calendar" }],
      1: [{ value: "8 to 10 hours", label: "without food or drink before the first blood test, though water is usually allowed, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  "baby": {
    sectionRefs: [[[1]], [[1], [1], [1]], [[3, 1], [3]], [[2, 4], [3]], [[3], [5, 3]]],
    helpRefs: [[4], [3], [5], [5], [5], [3]],
    charts: {
      3: { kind: "bars", title: "Extra scans", subtitle: "Weeks of pregnancy when scans of your baby's growth and fluid are offered", bars: [{ label: "First growth scan", value: 28 }, { label: "Second growth scan", value: 32 }, { label: "Third growth scan", value: 36 }, { label: "Regular checks from", value: 38, strong: true }], max: 40, ticks: [0, 10, 20, 30, 40], unit: " weeks", sources: "Source: NHS, Gestational diabetes: treatment" },
    },
    stats: {
      4: [{ value: "24 hours a day", label: "there are staff on the hospital maternity unit who can check your baby is OK, says Diabetes UK.", ref: 3, picture: "hours" }],
    },
  },
  "checking": {
    sectionRefs: [[[1, 2], [2]], [[1, 2], [1, 2]], [[3], [3]], [[1], [4, 2]], [[1], [3]]],
    helpRefs: [[2], [2], [3], [3], [4]],
    stats: {
      1: [{ value: "1 hour", label: "after each meal, and before breakfast, is when you will usually be advised to test, says the NHS.", ref: 1, picture: "hours" }],
      4: [{ value: "Above 4 mmol/l", label: "is where pregnant women with any form of diabetes should aim to keep blood sugar, says Diabetes UK.", ref: 3 }],
    },
  },
  "food": {
    sectionRefs: [[[1], [2]], [[2], [1]], [[2], [2]], [[1], [1, 2]], [[2], [1]]],
    helpRefs: [[2], [1], [1], [2], [2], [2]],
    charts: {
      2: { kind: "bars", title: "Splitting breakfast", subtitle: "Carbohydrate at breakfast, in grams, as Diabetes UK describes it", bars: [{ label: "First sitting, up to", value: 20, strong: true }, { label: "A few hours later, up to", value: 20 }, { label: "All at once: often above target", value: 40 }], max: 50, ticks: [0, 10, 20, 30, 40, 50], unit: "g", sources: "Source: Diabetes UK, What can I eat with gestational diabetes?" },
    },
    stats: {
      4: [{ value: "At least 5", label: "portions of fruit and vegetables a day to aim for, says the NHS.", ref: 1 }],
    },
  },
  "medicines": {
    sectionRefs: [[[2, 1], [2], [1]], [[2, 1], [1, 2], [3]], [[1], [1]], [[1], [1, 4], [4]], [[1, 5], [2]]],
    helpRefs: [[2], [1, 2], [2], [1, 4], [5], [3]],
    stats: {
      0: [{ value: "1 to 2 weeks", label: "after changing diet and exercise, medicine may be given if blood sugar is still not stable, says the NHS.", ref: 1, picture: "calendar" }],
      1: [{ value: "Up to 3 times a day", label: "is how often metformin is taken, usually with or after meals, says the NHS.", ref: 1 }],
    },
  },
  "activity": {
    sectionRefs: [[[1], [2]], [[1], [1]], [[3, 2], [2]], [[4, 1], [1, 2]], [[2], [2]]],
    helpRefs: [[1], [4], [1], [1], [2]],
    stats: {
      1: [{ value: "15 to 20 minutes", label: "of activity within 30 minutes of a meal helps after-meal sugar levels reach target, says Diabetes UK.", ref: 1, picture: "hours" }],
      2: [{ value: "150 minutes", label: "of moderate activity a week is a common recommendation, says the NHS.", ref: 3, picture: "calendar" }],
    },
  },
  "birth": {
    sectionRefs: [[[1], [1], [1]], [[2], [3]], [[1], [1]], [[1], [1], [2]], [[1], [1, 2]]],
    helpRefs: [[2], [1], [2], [1], [3]],
    stats: {
      0: [{ value: "Weeks 38 to 40", label: "is usually the ideal time to give birth with gestational diabetes, says the NHS.", ref: 1, picture: "calendar" }],
      3: [{ value: "Within 30 minutes", label: "of the birth is when to feed your baby, then every 2 to 3 hours, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  "after": {
    sectionRefs: [[[4, 1, 2], [1]], [[1, 2, 6], [2], [1]], [[1, 2], [3, 2], [2]], [[2], [2], [4]], [[5], [2]]],
    helpRefs: [[2], [1], [2], [1], [2], [2]],
    stats: {
      0: [
        { value: "10 times", label: "higher is your risk of type 2 diabetes after gestational diabetes, says Diabetes UK.", ref: 2, picture: "times" },
        { value: "Up to half", label: "of women diagnosed with gestational diabetes develop type 2 diabetes within five years, says Diabetes UK.", ref: 2, picture: "half" },
      ],
      2: [{ value: "More than a third", label: "is how much the Healthier You programme cuts the risk of type 2 diabetes for people completing it, says NHS England.", ref: 3 }],
    },
    charts: {
      1: { kind: "bars", title: "What the blood test can show", subtitle: "HbA1c levels in mmol/mol, as Diabetes UK describes them", bars: [{ label: "Back to normal: below", value: 42 }, { label: "Type 2 diabetes: at or above", value: 48, strong: true }], max: 60, ticks: [0, 20, 40, 60], unit: " mmol/mol", sources: "Source: Diabetes UK, Preventing type 2 diabetes after gestational diabetes" },
    },
  },
  "next-pregnancy": {
    sectionRefs: [[[1], [2]], [[1], [1], [3]], [[4, 3], [1]], [[1]]],
    helpRefs: [[1], [4, 3], [4], [3], [2]],
    stats: {
      2: [{ value: "24 to 28 weeks", label: "is when another test is offered if the early one is normal, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "feelings": {
    sectionRefs: [[[2, 1], [3]], [[1], [4], [1, 2]], [[6], [5, 6], [6]], [[4, 6], [4], [6]], [[7], [7]]],
    helpRefs: [[1], [4], [4], [6], [1], [7]],
    stats: {
      2: [{ value: "Within 2 weeks", label: "of the birth is when the baby blues usually go away, says the NHS.", ref: 6, picture: "calendar" }],
      3: [{ value: "3 to 6 months", label: "is how long postnatal depression usually takes to get better, though it can last longer, says the NHS.", ref: 6 }],
    },
  },
};
