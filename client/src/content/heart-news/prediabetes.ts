import type { NewsExtras } from "../ischaemic-news";
// Prediabetes features: paragraph references (numbers are positions in each answer's own sources in prediabetes-answers.ts), charts and big figures, all checked on 20 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[2], [1]], [[3, 4], [1, 3]], [[6], [1]], [[2, 1, 5], [2]], [[1, 5], [1]]],
    helpRefs: [[1], [7], [2], [4]],
    charts: {
      1: { kind: "range", title: "The prediabetes range", subtitle: "HbA1c in mmol/mol: below 42 is normal, and 48 or above is type 2 diabetes", from: 42, to: 47, unit: "mmol/mol", sources: "Sources: Diabetes UK, Prediabetes; Diabetes test" },
    },
    stats: {
      2: [{ value: "Around 1 in 12", label: "people are estimated to have prediabetes, says Diabetes UK. There are not usually any symptoms.", ref: 1 }],
    },
  },
  "why": {
    sectionRefs: [[[2, 1], [1, 5]], [[1], [1]], [[1], [1, 3]], [[1], [1, 3, 4]], [[1], [1]]],
    helpRefs: [[1, 3], [3], [3], [1], [2]],
    stats: {
      2: [{ value: "Around 1 in 10", label: "people living with type 2 diabetes are a healthy weight, says Diabetes UK.", ref: 3 }],
    },
    charts: {
      3: { kind: "bars", title: "Risk can start younger", subtitle: "Age above which the NHS says you may be more at risk of type 2 diabetes, by background", bars: [{ label: "White", value: 40 }, { label: "South Asian, Chinese, Black African or Black Caribbean", value: 25, strong: true }], max: 50, ticks: [0, 10, 20, 30, 40, 50], unit: " years", sources: "Source: NHS, Symptoms of type 2 diabetes and how it's diagnosed" },
    },
  },
  "odds": {
    sectionRefs: [[[1, 3], [4]], [[3], [2, 3]], [[3], [4, 5]], [[6], [6]], [[7]]],
    helpRefs: [[3, 5], [6], [7], [6]],
    stats: {
      0: [{ value: "Two million", label: "people in England are currently at high risk of developing type 2 diabetes, says NHS England.", ref: 4 }],
      2: [
        { value: "Half", label: "the risk of type 2 diabetes: how much getting support through your GP to make health changes can help cut it, says Diabetes UK.", ref: 3, picture: "half" },
        { value: "20%", label: "less likely to develop type 2 diabetes: people with prediabetes who had Healthier You support, in NHS England figures from 2023 to 2025, says Diabetes UK.", ref: 5 },
      ],
    },
  },
  "tests": {
    sectionRefs: [[[1], [1]], [[2], [3]], [[4]], [[2, 1]], [[5], [5, 6]]],
    helpRefs: [[1], [4], [3], [6]],
    stats: {
      0: [{ value: "At least once a year", label: "your GP should offer a blood test to check your average blood sugar levels, says Diabetes UK.", ref: 1, picture: "calendar" }],
      1: [{ value: "Two to three months", label: "of blood sugar levels: the average the HbA1c test shows, says Diabetes UK.", ref: 2 }],
    },
  },
  "programme": {
    sectionRefs: [[[3], [1]], [[1, 2], [1]], [[2], [2]], [[2], [2]], [[2], [2]]],
    helpRefs: [[2], [1, 2], [2, 4], [2], [2]],
    stats: {
      0: [{ value: "More than a third", label: "lower risk of developing type 2 diabetes for people completing the Healthier You programme, says NHS England.", ref: 1 }],
    },
    charts: {
      4: { kind: "donut", title: "Most of Wales is covered", subtitle: "Wales covered by the All Wales Prevention Programme, out of every 100 parts", value: 80, prefix: "Around", subject: "parts of Wales", label: "are covered by the All Wales Prevention Programme", sources: "Source: Diabetes UK, NHS type 2 diabetes prevention courses" },
    },
  },
  "weight": {
    sectionRefs: [[[2, 4, 3], [1]], [[1, 2, 3], [1]], [[2, 1], [1], [2]], [[1], [1], [1, 5]], [[1], [2, 1, 5]]],
    helpRefs: [[2, 5], [1], [1], [4], [1], [1]],
    charts: {
      1: { kind: "range", title: "A small loss can help", subtitle: "Weight loss that can help insulin work better, as a share of body weight, out of every 100", from: 1, to: 9, sources: "Sources: Diabetes UK, How to lose weight for prediabetes; Prediabetes treatments" },
      3: { kind: "bars", title: "Calories to keep a healthy weight", subtitle: "Rough daily calories that government recommendations say adults need to keep a healthy weight", bars: [{ label: "Men, around", value: 2500 }, { label: "Women, around", value: 2000, strong: true }], max: 3000, ticks: [0, 1000, 2000, 3000], unit: " kcal", sources: "Source: Diabetes UK, How to lose weight for prediabetes and lowering type 2 risk" },
    },
  },
  "moving": {
    sectionRefs: [[[1], [4]], [[3], [2]], [[2], [1]], [[4, 5], [1, 3]], [[1], [1]]],
    helpRefs: [[1], [1], [1, 3], [1], [1], [1]],
    charts: {
      2: { kind: "bars", title: "The weekly aim", subtitle: "Minutes of activity a week the NHS says adults should aim for, at least", bars: [{ label: "Moderate activity", value: 150, strong: true }, { label: "Or vigorous activity", value: 75 }], max: 150, ticks: [0, 50, 100, 150], unit: " minutes", sources: "Source: NHS, Physical activity guidelines for adults aged 19 to 64" },
    },
    stats: {
      3: [{ value: "More than 7 hours", label: "a day: how long many adults spend sitting down, research suggests, says the NHS.", ref: 5, picture: "hours" }],
    },
  },
  "food": {
    sectionRefs: [[[1], [1]], [[2, 1], [1]], [[2, 1], [1]], [[1, 2], [1]], [[1], [1], [4]]],
    helpRefs: [[1], [1], [1], [1], [4], [3]],
    stats: {
      1: [{ value: "150ml", label: "one small glass: the most fruit juice or smoothie to have in a day, says Diabetes UK.", ref: 1 }],
      4: [{ value: "At least 5", label: "portions of fruit and veg a day, for example three of veg and two of fruit, says Diabetes UK.", ref: 1 }],
    },
  },
  "sleep-stress": {
    sectionRefs: [[[1], [1], [4]], [[1], [1]], [[1]], [[2], [2], [3]], [[1], [5]]],
    helpRefs: [[1], [1], [1], [1], [5], [1]],
    stats: {
      2: [{ value: "7 to 9 hours", label: "of quality sleep a night is what most experts recommend for adults, says Diabetes UK.", ref: 1, picture: "hours" }],
    },
  },
  "alcohol": {
    sectionRefs: [[[1], [1, 2]], [[3, 1], [3]], [[1], [1]], [[1, 4]], [[1], [1]]],
    helpRefs: [[3, 1], [3, 1], [1], [1], [1], [2, 3]],
    charts: {
      1: { kind: "bars", title: "How fast 14 units adds up", subtitle: "Units of alcohol in some common drinks, against the weekly guide of 14", bars: [{ label: "Single 25ml shot of spirits", value: 1 }, { label: "Pint of lower-strength lager", value: 2 }, { label: "Pint of higher-strength lager", value: 3 }, { label: "Large 250ml glass of wine", value: 3 }, { label: "750ml bottle of wine", value: 10, strong: true }], max: 14, ticks: [0, 7, 14], unit: " units", sources: "Source: NHS, Alcohol units" },
    },
  },
  "family": {
    sectionRefs: [[[3], [3]], [[1], [7]], [[2], [2]], [[2, 4], [4]], [[2, 6], [2], [1]]],
    helpRefs: [[1], [2], [2], [2], [2, 6], [5]],
  },
};
