import type { NewsExtras } from "../ischaemic-news";
// Constipation features: paragraph references (numbers are positions in each answer's own sources in constipation-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[2], [3, 4]], [[1], [1]], [[2]], [[3], [2]]],
    helpRefs: [[1], [1], [1], [1], [1]],
    stats: {
      0: [{ value: "Around 1 in 7", label: "adults in the UK has constipation at any one time, says NHS inform.", ref: 3, picture: "one-in", of: 7 }],
      2: [{ value: "3 times", label: "a week: fewer poos than this in the last week is one sign of constipation, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "causes": {
    sectionRefs: [[[1], [2]], [[1], [1, 5]], [[1, 2], [3]], [[1, 3], [1]], [[2, 1], [4]]],
    helpRefs: [[1], [1], [1], [2], [3]],
    stats: {
      4: [{ value: "Twice as many", label: "women as men are affected by constipation, says NHS inform.", ref: 2, picture: "times" }],
    },
  },
  "older": {
    sectionRefs: [[[1, 3], [7]], [[1], [1]], [[2, 4], [6]], [[5], [9, 1]], [[4], [3, 8]]],
    helpRefs: [[1], [6], [6], [4], [3], [8]],
    stats: {
      0: [{ value: "Over 65", label: "years old is when constipation becomes more common, says the NHS.", ref: 1 }],
      3: [{ value: "At least 30g", label: "of fibre a day is the advice for adults, and many people in the UK do not eat enough, says Guts UK.", ref: 5 }],
    },
    charts: {
      2: { kind: "bars", title: "Activity for people aged 65 and over", subtitle: "Minutes a week to aim for, as the NHS gives them, plus some activity every day", bars: [{ label: "Moderate activity, at least", value: 150, strong: true }, { label: "Or vigorous activity", value: 75 }], max: 160, ticks: [0, 40, 80, 120, 160], unit: " minutes", sources: "Source: NHS, Physical activity guidelines for older adults" },
    },
  },
  "checks": {
    sectionRefs: [[[1], [1, 5]], [[4], [2]], [[2, 3], [3], [4]], [[2], [2, 4]], [[2], [4]]],
    helpRefs: [[1], [4], [1], [2, 3], [3]],
    stats: {
      0: [{ value: "14 days", label: "without improvement is when NHS inform says to see a GP about constipation.", ref: 5, picture: "calendar" }],
      1: [{ value: "Over 40", label: "is the age when Guts UK says a sudden slowing up of your bowel is especially worth reporting to a GP.", ref: 4 }],
    },
  },
  "fibre-fluids": {
    sectionRefs: [[[5], [3]], [[2], [2, 3]], [[4, 6], [4]], [[7], [4, 3]], [[1, 8], [1]]],
    helpRefs: [[1], [1], [1], [1], [3], [1]],
    stats: {
      3: [{ value: "6 to 8", label: "cups or glasses of fluid a day is what the Eatwell Guide suggests, says the NHS.", ref: 7 }],
      4: [{ value: "150 minutes", label: "of physical activity a week, at least, is the aim for adults, says NHS inform.", ref: 8, picture: "calendar" }],
    },
    charts: {
      1: { kind: "bars", title: "Fibre: the advice and the average", subtitle: "Grams of fibre a day for adults, as the NHS gives them", bars: [{ label: "Government guidelines", value: 30, strong: true }, { label: "Average adult intake, about", value: 20 }], max: 40, ticks: [0, 10, 20, 30, 40], unit: "g", sources: "Source: NHS, How to get more fibre into your diet" },
    },
  },
  "toilet-routine": {
    sectionRefs: [[[1], [3]], [[1, 2], [3]], [[1], [4]], [[5], [5]], [[2, 6], [6]]],
    helpRefs: [[1], [1], [1], [1], [4], [5]],
  },
  "laxatives": {
    sectionRefs: [[[1], [2, 1]], [[1, 4, 5], [1, 6, 7, 8]], [[1], [3]], [[1, 5], [1]], [[1, 6], [9]]],
    helpRefs: [[1], [1], [1], [1], [1], [1]],
    stats: {
      0: [{ value: "Within 3 days", label: "is when most laxatives work, says the NHS.", ref: 2, picture: "calendar" }],
      3: [{ value: "7 days", label: "at most for a laxative bought without a prescription, says the NHS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      1: { kind: "range", title: "The quickest type", subtitle: "Hours a stimulant laxative, such as senna or bisacodyl, takes to work, says the NHS", from: 6, to: 12, unit: " hours", sources: "Source: NHS, Laxatives" },
    },
  },
  "medicines": {
    sectionRefs: [[[4], [1, 2]], [[5, 6], [10]], [[7], [7]], [[3, 1], [1, 4]], [[9], [8]]],
    helpRefs: [[4], [3], [7], [9], [3]],
  },
  "long-term": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[1], [1]], [[3], [3], [4]], [[5, 3], [3]]],
    helpRefs: [[3], [1], [3], [3], [6], [3]],
    stats: {
      0: [{ value: "At least 3 months", label: "of symptoms is what chronic constipation usually describes, says the NICE Clinical Knowledge Summary.", ref: 2, picture: "calendar" }],
    },
  },
  "impaction": {
    sectionRefs: [[[1], [2]], [[1, 2], [5]], [[3], [2]], [[1], [2, 6, 7], [1]], [[8], [4]]],
    helpRefs: [[3], [1], [6, 7], [4], [8]],
    stats: {
      3: [
        { value: "10 to 45 minutes", label: "is how long bisacodyl suppositories take to work, says the NHS.", ref: 6, picture: "hours" },
        { value: "Within 20 minutes", label: "is when docusate enemas usually work, says the NHS.", ref: 7, picture: "hours" },
      ],
      4: [{ value: "2 weeks", label: "of macrogol and still constipated is when the NHS says to see a doctor.", ref: 4, picture: "calendar" }],
    },
  },
  "travel": {
    sectionRefs: [[[1, 3], [4]], [[3], [3]], [[3, 5], [3, 4]], [[3], [2]], [[4], [6]]],
    helpRefs: [[3], [3], [3], [3], [4], [2]],
    stats: {
      4: [{ value: "2 to 3 weeks", label: "is how long Guts UK says to wait before seeing a doctor about a holiday change in bowel habit, sooner with warning signs.", ref: 4, picture: "calendar" }],
    },
  },
  "after-illness": {
    sectionRefs: [[[1], [2, 3]], [[4, 5], [2, 9]], [[6, 7], [6]], [[8, 2], [8]], [[2], [10]]],
    helpRefs: [[4, 9], [2], [6], [8], [2]],
  },
};
