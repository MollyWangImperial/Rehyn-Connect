import type { NewsExtras } from "../ischaemic-news";
// Gallstones features: paragraph references (numbers are positions in each answer's own sources in gallstones-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[2, 1], [3, 2]], [[1, 3], [2, 3]], [[3, 2], [5]], [[1], [1, 3, 4]]],
    helpRefs: [[1], [3], [3], [5], [2]],
    stats: {
      0: [{ value: "About 9cm", label: "is how long the gallbladder is when full, says Guts UK.", ref: 2 }],
      3: [{ value: "More than 1 in 10", label: "adults in the UK have gallstones, NHS inform estimates.", ref: 3, picture: "one-in", of: 10 }],
    },
    charts: {
      2: { kind: "bars", title: "What gallstones are made of", subtitle: "Gallstones in every 5, by what they are made of, as NHS inform sets out", bars: [{ label: "Made up of cholesterol, about", value: 4, strong: true }, { label: "Made up of bilirubin, about", value: 1 }], max: 5, ticks: [0, 1, 2, 3, 4, 5], unit: " in 5", sources: "Source: NHS inform, Gallstones" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1, 3], [3]], [[1], [2], [3]], [[1, 2], [3, 2], [2]], [[2], [4]]],
    helpRefs: [[1], [1], [1], [1], [1]],
    stats: {
      0: [{ value: "About 2 in 3", label: "people who have gallstones have no symptoms, says Guts UK.", ref: 3 }],
      2: [{ value: "1 to 5 hours", label: "is how long biliary colic usually lasts, says NHS inform.", ref: 2, picture: "hours" }],
      3: [{ value: "38C or above", label: "is a high temperature that can be a sign of more serious gallstone disease, says NHS inform.", ref: 2 }],
    },
  },
  "causes": {
    sectionRefs: [[[1, 2], [3]], [[1], [2], [4]], [[2], [3], [1, 3]], [[3], [4]]],
    helpRefs: [[2], [2], [2], [4], [4]],
    stats: {
      0: [
        { value: "3 times", label: "more common in women than men, says Guts UK.", ref: 3, picture: "times" },
        { value: "Nearly a quarter", label: "of women have symptoms from gallstones by the age of 60, says Guts UK.", ref: 3 },
      ],
      1: [{ value: "Over 40", label: "is an age when gallstones become more likely, says the NHS.", ref: 1 }],
    },
  },
  "complications": {
    sectionRefs: [[[1], [1]], [[2], [2], [2]], [[3, 1, 6], [4], [3]], [[3, 5], [5]], [[3], [3]]],
    helpRefs: [[1], [1], [2], [2], [5]],
    stats: {
      2: [{ value: "1 in 7", label: "people with acute cholecystitis also have jaundice, NHS inform estimates.", ref: 3, picture: "one-in", of: 7 }],
      3: [{ value: "5 to 10 days", label: "is when most people with acute pancreatitis can leave hospital, says the NHS.", ref: 5, picture: "calendar" }],
      4: [{ value: "Less than 1 in 10,000", label: "people with a history of gallstones develop gallbladder cancer, says NHS inform.", ref: 3 }],
    },
    charts: {
      1: { kind: "donut", title: "Most cases start with a stone", subtitle: "Cases of acute cholecystitis, out of every 100", value: 95, prefix: "Around", subject: "cases of acute cholecystitis", label: "are caused by a gallstone or biliary sludge", sources: "Source: NHS, Acute cholecystitis" },
    },
  },
  "tests": {
    sectionRefs: [[[1]], [[2, 5], [2, 3]], [[2], [3], [4]], [[2], [2]]],
    helpRefs: [[3, 4], [4], [4], [4], [3]],
    stats: {
      2: [{ value: "10 to 15 minutes", label: "is how long a gallstones ultrasound scan usually takes, says NHS inform.", ref: 2, picture: "hours" }],
    },
  },
  "surgery": {
    sectionRefs: [[[1, 2], [2, 1], [6]], [[3], [3]], [[4], [4], [5]], [[4], [7], [5]], [[8], [6]]],
    helpRefs: [[3], [3], [3], [4], [6]],
    stats: {
      0: [{ value: "More than 60,000", label: "gallbladder removals are done on the NHS every year, says Guts UK.", ref: 6 }],
      1: [{ value: "At least 6 weeks", label: "before surgery is when to stop smoking, says the NHS.", ref: 3, picture: "calendar" }],
      2: [{ value: "About 1 hour", label: "is how long the operation usually takes, says the NHS.", ref: 4, picture: "hours" }],
      4: [{ value: "Up to 1 in 200", label: "is the chance of damage to the bile ducts during surgery, says Guts UK.", ref: 6, picture: "one-in", of: 200 }],
    },
  },
  "after-surgery": {
    sectionRefs: [[[1], [1]], [[1, 2], [1], [1]], [[1, 2, 3], [1]], [[1]], [[4], [5, 6]]],
    helpRefs: [[1], [1], [1], [1], [1], [4]],
    stats: {
      0: [{ value: "24 hours", label: "is how long to have a friend or relative stay with you at first, says the NHS.", ref: 1, picture: "hours" }],
      3: [{ value: "1 to 2 weeks", label: "after the operation is when you may be able to return to work, says the NHS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      4: { kind: "donut", title: "Diarrhoea after surgery", subtitle: "People who have gallbladder surgery, out of every 100", value: 13, prefix: "Around", subject: "people", label: "may develop diarrhoea, up to 3 months after the operation", sources: "Source: Guts UK, Gallstones" },
    },
  },
  "urgent": {
    sectionRefs: [[[1], [1], [1]], [[1], [3]], [[4], [5]], [[2], [2]]],
    helpRefs: [[1], [1], [1], [1], [2]],
    stats: {
      1: [
        { value: "30 minutes", label: "of tummy pain or longer means an urgent GP appointment or NHS 111, says the NHS.", ref: 1, picture: "hours" },
        { value: "Eight hours", label: "of tummy pain or longer means contacting your GP immediately, says NHS inform.", ref: 3, picture: "hours" },
      ],
    },
  },
  "food": {
    sectionRefs: [[[1], [3]], [[2], [2], [2]], [[2], [2, 4], [4]], [[2], [2]], [[5], [2, 3]]],
    helpRefs: [[1], [3, 2], [2], [2], [2], [2]],
    stats: {
      1: [{ value: "Less than 3g", label: "of total fat per 100g shows as green in the traffic light labels, says Cambridge University Hospitals.", ref: 2 }],
      2: [{ value: "At least 5", label: "portions of fruit and vegetables a day, says Cambridge University Hospitals.", ref: 2 }],
      3: [{ value: "6 to 8", label: "cups or glasses of non-alcoholic fluid a day, the government recommends.", ref: 2 }],
    },
  },
  "without-gallbladder": {
    sectionRefs: [[[1, 7], [2, 3, 6]], [[3, 4], [2]], [[3], [5], [5]], [[3], [3]]],
    helpRefs: [[3, 1], [2], [3], [5], [3]],
    stats: {
      2: [
        { value: "Around 13 in 100", label: "people may develop diarrhoea after gallbladder surgery, says Guts UK.", ref: 3 },
        { value: "Up to 1 in 100", label: "people in the UK have bile acid diarrhoea, says Guts UK.", ref: 5, picture: "one-in", of: 100 },
      ],
    },
  },
  "weight": {
    sectionRefs: [[[2], [3]], [[1, 2], [3, 4], [3]], [[4, 5], [5], [4]], [[6], [2]], [[5], [7]]],
    helpRefs: [[5], [2, 4], [4], [6], [5], [7]],
    stats: {
      1: [{ value: "1kg a week", label: "is the most to lose, as faster loss is not recommended, says Cambridge University Hospitals.", ref: 4 }],
      2: [{ value: "150 minutes", label: "a week of moderate intensity exercise is what UK guidelines recommend, says Cambridge University Hospitals.", ref: 4 }],
    },
    charts: {
      2: { kind: "range", title: "A small loss helps", subtitle: "Losing this share of your body weight can improve your health, says the NHS", from: 5, to: 10, unit: "per cent of body weight", sources: "Source: NHS, Overweight and obesity in adults" },
    },
  },
  "watching": {
    sectionRefs: [[[1], [3]], [[1], [2], [3]], [[3], [2]], [[3, 1], [4]]],
    helpRefs: [[2], [1], [1], [1], [3]],
    charts: {
      0: { kind: "range", title: "How many people have gallstones", subtitle: "People with gallstones, out of every 100, says Guts UK; not everyone has symptoms", from: 10, to: 15, sources: "Source: Guts UK, Gallstones" },
    },
  },
};
