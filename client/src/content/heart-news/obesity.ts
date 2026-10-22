import type { NewsExtras } from "../ischaemic-news";
// Obesity features: paragraph references (numbers are positions in each answer's own sources in obesity-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[1, 4], [1, 5]], [[1, 2], [4]], [[1, 3], [4, 5], [4]], [[5]]],
    helpRefs: [[1, 3], [4], [2, 3], [2, 3], [4]],
    stats: {
      1: [{ value: "30 or more", label: "is the BMI that counts as obese for most adults, says the NHS.", ref: 1 }],
    },
    charts: {
      3: { kind: "bars", title: "A healthy waist size", subtitle: "Waist sizes Diabetes UK calls generally healthy, in centimetres", bars: [{ label: "Women: under", value: 80 }, { label: "South Asian men: under", value: 90 }, { label: "Most men: under", value: 94, strong: true }], max: 100, ticks: [0, 25, 50, 75, 100], unit: "cm", sources: "Source: Diabetes UK, What's a healthy weight for diabetes?" },
    },
  },
  "causes": {
    sectionRefs: [[[1], [2]], [[3], [4, 5]], [[1], [1]], [[1], [3, 7]], [[6], [7]]],
    helpRefs: [[1], [3], [7], [7], [7]],
  },
  "health": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[2], [2]], [[3], [4]], [[1, 2], [1]]],
    helpRefs: [[1], [1], [1], [2]],
    stats: {
      4: [{ value: "5 to 10%", label: "of your body weight, lost, can improve your health, says the NHS.", ref: 1 }],
    },
    charts: {
      3: { kind: "donut", title: "Weight and type 2 diabetes", subtitle: "People with newly diagnosed type 2 diabetes, out of every 100", value: 90, prefix: "Around", subject: "people newly diagnosed with type 2 diabetes", label: "are living with overweight or obesity", sources: "Source: Diabetes UK, Weight Management Services for preventing and managing type 2 diabetes" },
    },
  },
  "small-loss": {
    sectionRefs: [[[1], [2]], [[3], [2]], [[5, 2], [2]], [[4], [3, 6]]],
    helpRefs: [[3, 1], [3], [1], [1], [2]],
    stats: {
      1: [{ value: "10%", label: "of your body weight is a good first goal if you have a lot of excess weight, says the BHF.", ref: 3 }],
      3: [{ value: "1 to 2lbs a week", label: "is the steady weight loss to aim for, says the NHS.", ref: 4, picture: "calendar" }],
    },
    charts: {
      0: { kind: "range", title: "The weight loss that helps", subtitle: "Losing this share of your body weight can improve your health, says the NHS", from: 5, to: 10, unit: "per cent of body weight", sources: "Source: NHS, Overweight and obesity in adults" },
    },
  },
  "programmes": {
    sectionRefs: [[[1], [7]], [[1, 2], [5]], [[1], [1], [7]], [[3, 4], [4, 6]], [[8], [8]]],
    helpRefs: [[1, 2], [1], [4, 6], [8], [7]],
    stats: {
      3: [{ value: "12 weeks", label: "is the length of the free, online NHS Digital Weight Management Programme, says NHS England.", ref: 4, picture: "calendar" }],
    },
  },
  "food": {
    sectionRefs: [[[1], [6, 4]], [[2], [2, 5]], [[1], [1]], [[1], [1]], [[4], [3, 1]]],
    helpRefs: [[1], [2], [3], [1], [3], [1]],
    stats: {
      3: [{ value: "150ml", label: "a day in total is the most that fruit juice and smoothies should add up to, says the NHS.", ref: 1 }],
    },
    charts: {
      1: { kind: "bars", title: "600 calories, meal by meal", subtitle: "Calories to cut at each point in the day, in the NHS example of a 600-calorie daily cut", bars: [{ label: "Breakfast", value: 100 }, { label: "Lunch", value: 200, strong: true }, { label: "Dinner", value: 200, strong: true }, { label: "Snacks", value: 100 }], max: 250, ticks: [0, 50, 100, 150, 200, 250], unit: " calories", sources: "Source: NHS Better Health, Calories and weight loss" },
    },
  },
  "medicines": {
    sectionRefs: [[[1, 6], [6]], [[1, 2, 3, 4], [2, 3, 4], [7]], [[5], [5]], [[2, 3, 5], [2, 3, 4, 5]], [[1], [1, 2, 3, 4], [2, 3, 4, 5]]],
    helpRefs: [[8], [2, 3], [2, 3, 5], [2, 3, 5], [2, 3, 5], [2, 3]],
    stats: {
      2: [{ value: "A third", label: "of the fat from your food is passed out in your poo when you take orlistat, says the NHS.", ref: 5 }],
    },
    charts: {
      1: { kind: "bars", title: "Two injections compared", subtitle: "Average share of body weight lost over around a year and a half, in a head-to-head study of people with obesity, as reported by the BHF", bars: [{ label: "Semaglutide (Wegovy): nearly", value: 14 }, { label: "Tirzepatide (Mounjaro): just over", value: 20, strong: true }], max: 25, ticks: [0, 5, 10, 15, 20, 25], unit: "%", sources: "Source: British Heart Foundation, Mounjaro vs Wegovy: which is better for weight loss?" },
    },
  },
  "surgery": {
    sectionRefs: [[[1], [1, 4], [7]], [[2, 1], [2]], [[4], [4]], [[3], [1, 5], [5]], [[6], [6]]],
    helpRefs: [[7], [5], [5], [5], [6], [6]],
    stats: {
      2: [{ value: "Around 80%", label: "of the stomach is removed in a sleeve gastrectomy, says the NHS.", ref: 4 }],
      3: [{ value: "1 to 3 days", label: "after surgery is when most people go home, says the NHS. Recovery usually takes 4 to 6 weeks.", ref: 1, picture: "calendar" }],
    },
  },
  "activity": {
    sectionRefs: [[[6, 2], [3]], [[1, 3], [1]], [[3, 4], [2, 4, 3]], [[1], [5]], [[2], [4]]],
    helpRefs: [[4, 2], [2, 3], [2], [2], [1]],
    stats: {
      1: [{ value: "150 minutes", label: "of moderate activity a week is what adults should aim for, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "stigma": {
    sectionRefs: [[[1], [2]], [[3], [5, 6]], [[1], [3]], [[5, 4], [4], [7]]],
    helpRefs: [[5], [3], [3], [4], [7]],
    stats: {
      0: [{ value: "More than 100", label: "medical and scientific organisations joined Diabetes UK in pledging to end obesity stigma.", ref: 2 }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [1]], [[4, 7], [8]], [[1, 2], [1, 2]], [[3], [3]], [[5], [6]]],
    helpRefs: [[1, 2], [2], [1], [3], [5], [6]],
  },
  "keeping-off": {
    sectionRefs: [[[1, 3], [3]], [[2, 1], [1, 6]], [[2], [4, 7]], [[1], [2]], [[1], [5]]],
    helpRefs: [[1, 2], [1], [1], [1], [3]],
    stats: {
      1: [{ value: "60 to 90 minutes", label: "of activity a day can help you keep weight off, say Diabetes UK and the NHS.", ref: 1 }],
    },
  },
};
