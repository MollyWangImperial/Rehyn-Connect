import type { NewsExtras } from "../ischaemic-news";
// Fear of cancer coming back features: paragraph references (numbers are positions in each answer's own sources in fear-of-recurrence-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2], [2]], [[2], [3], [4]], [[5], [5]], [[6], [3]], [[1, 5], [2]]],
    helpRefs: [[2], [2], [1], [5], [1]],
  },
  "triggers": {
    sectionRefs: [[[1], [2], [3]], [[1], [4]], [[5], [5]], [[3, 6], [3, 6]], [[1, 7], [8]]],
    helpRefs: [[7], [1], [5], [5], [5]],
  },
  "signs-to-report": {
    sectionRefs: [[[1], [2, 3]], [[1], [4], [5]], [[6], [6]], [[1], [1, 5], [1, 4]], [[1], [1]]],
    helpRefs: [[1], [2], [4], [1], [1], [1]],
  },
  "when-help": {
    sectionRefs: [[[1], [2]], [[2], [3], [2, 4]], [[1], [5], [2]], [[4], [2, 1]], [[6], [8, 7], [6]]],
    helpRefs: [[2], [1], [4], [6], [8], [6]],
    stats: {
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 8 }],
    },
  },
  "coping": {
    sectionRefs: [[[1], [1]], [[2], [2], [2]], [[3], [4, 5]], [[4], [6]], [[7], [7, 6]]],
    helpRefs: [[1], [2], [3], [5], [4], [7]],
  },
  "check-ups": {
    sectionRefs: [[[1], [2]], [[2], [2], [2]], [[2], [2], [3]], [[4], [1]], [[5, 6]]],
    helpRefs: [[2], [2], [2], [3], [4], [1]],
    stats: {
      1: [{ value: "Every few months", label: "is how often follow-up appointments may happen in the first year after treatment, says Macmillan. Over time they happen less often.", ref: 2, picture: "calendar" }],
    },
  },
  "talking": {
    sectionRefs: [[[1], [1]], [[1], [1], [2]], [[3, 1], [1], [1]], [[4], [1]], [[1, 2], [5]]],
    helpRefs: [[3, 1], [1], [4], [1], [1]],
    stats: {
      2: [{ value: "18 or over", label: "is the age to refer yourself to NHS talking therapies, or 16 or over in some areas, says the NHS.", ref: 3 }],
    },
  },
  "mindfulness": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[4], [1], [1, 4]], [[1], [5, 1]], [[2], [2, 6]]],
    helpRefs: [[3], [2], [1], [1], [2]],
    stats: {
      1: [{ value: "At least 5 minutes", label: "is how long to keep going with the NHS calming breathing exercise.", ref: 3, picture: "hours" }],
      3: [{ value: "8 weeks", label: "is how long a mindfulness-based cognitive therapy course usually runs, says Macmillan.", ref: 1, picture: "calendar" }],
    },
  },
  "plans": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[1], [1], [1]], [[2], [2, 3]], [[4], [5]]],
    helpRefs: [[2], [6], [1], [1], [4]],
  },
  "family": {
    sectionRefs: [[[1], [2]], [[3], [4]], [[2], [1]], [[5], [6]], [[7], [7], [7]]],
    helpRefs: [[1], [2], [7], [6], [2], [2]],
  },
  "activity": {
    sectionRefs: [[[1], [2, 3]], [[1], [1, 4], [2]], [[5], [5], [4]], [[1], [6]], [[7], [8], [4]]],
    helpRefs: [[1], [2, 1], [5], [4], [6], [7]],
    charts: {
      2: { kind: "bars", title: "Building up your activity", subtitle: "Minutes of moderate activity, as the NHS describes it", bars: [{ label: "A brisk walk that can clear your mind", value: 10 }, { label: "What adults should do each week", value: 150, strong: true }], max: 150, ticks: [0, 50, 100, 150], unit: " minutes", sources: "Source: NHS, Exercise for depression" },
    },
  },
  "support": {
    sectionRefs: [[[1], [2]], [[3], [3], [3]], [[4, 5], [6]], [[7], [8], [9]], [[10], [5], [1]]],
    helpRefs: [[3], [3], [4, 5], [6], [8, 9], [1]],
    stats: {
      2: [{ value: "8 weekly calls", label: "with the same trained volunteer are what Macmillan Buddies offers, free.", ref: 6, picture: "calendar" }],
      3: [{ value: "2 half-days", label: "on consecutive weeks is how long Breast Cancer Now's Moving Forward course runs, in person or online.", ref: 8, picture: "calendar" }],
    },
  },
};
