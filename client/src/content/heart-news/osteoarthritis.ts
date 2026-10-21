import type { NewsExtras } from "../ischaemic-news";
// Osteoarthritis features: paragraph references (numbers are positions in each answer's own sources in oa-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "knee-week-three": {
    sectionRefs: [[[2], [2, 1]], [[1], [1]], [[1], [1]], [[2, 1], [2, 1]], [[3], [3]]],
    helpRefs: [[2], [2], [1], [2], [1], [1]],
    stats: {
      1: [{ value: "Within 3 weeks", label: "of surgery you should be able to walk outside, in good supportive shoes, says Arthritis UK.", ref: 1, picture: "calendar" }],
      2: [{ value: "Up to 3 months", label: "is how long swelling, particularly in the ankle and foot, may last after a knee replacement, says Arthritis UK.", ref: 1, picture: "calendar" }],
    },
    charts: {
      3: { kind: "bars", title: "Back behind the wheel", subtitle: "The least time to wait before driving after a knee replacement, in weeks", bars: [{ label: "Partial knee replacement", value: 3 }, { label: "Total knee replacement", value: 6, strong: true }], max: 8, ticks: [0, 2, 4, 6, 8], unit: " weeks", sources: "Source: NHS, Recovering from a knee replacement" },
    },
  },
  "what-it-is": {
    sectionRefs: [[[2], [2, 1]], [[1], [1, 3]], [[5, 4], [1]], [[1], [2]], [[2], [1]]],
    helpRefs: [[2], [1], [1], [1], [1]],
    stats: {
      3: [{ value: "Over 5 million", label: "people in the UK are affected by osteoarthritis, says Arthritis UK.", ref: 3 }],
    },
  },
  "flare": {
    sectionRefs: [[[2], [1]], [[3], [6]], [[1, 3], [3]], [[4], [4]], [[5], [5, 7]]],
    helpRefs: [[1], [6], [5], [6], [7]],
    stats: {
      3: [{ value: "Less than 30 minutes", label: "of morning stiffness, if any, is one of the things that may lead a GP to suspect osteoarthritis, says the NHS.", ref: 4 }],
      4: [{ value: "15 to 20 minutes", label: "at a time is how long to use a wrapped ice pack on a hot, swollen joint, says Arthritis UK.", ref: 5, picture: "hours" }],
    },
  },
  "rheumatoid-or-osteo": {
    sectionRefs: [[[5], [4, 2]], [[3], [6]], [[2, 3, 4], [6]], [[3, 6], [2]], [[2, 6], [1]]],
    helpRefs: [[1], [7], [1], [1]],
    stats: {
      0: [{ value: "1 in 3", label: "people over the age of 45 in the UK have sought treatment for osteoarthritis, says the National Rheumatoid Arthritis Society.", ref: 6, picture: "one-in", of: 3 }],
      1: [{ value: "Within 30 minutes", label: "of getting up, morning stiffness from osteoarthritis usually wears off, says the NHS. In rheumatoid arthritis it often lasts longer.", ref: 3 }],
    },
    charts: {
      2: { kind: "range", title: "When rheumatoid arthritis is often found", subtitle: "The ages at which rheumatoid arthritis is often diagnosed", from: 40, to: 60, unit: "years of age", sources: "Source: NHS, Arthritis" },
    },
  },
  "strength": {
    sectionRefs: [[[1], [4, 6]], [[1], [1]], [[2], [2]], [[3], [3]], [[4], [5]]],
    helpRefs: [[1, 2], [2], [4], [7], [4]],
    stats: {
      4: [{ value: "2 days a week", label: "at least, for strengthening exercises, says Arthritis UK.", ref: 4, picture: "calendar" }],
    },
  },
  "painkillers": {
    sectionRefs: [[[6], [1]], [[1], [5]], [[1], [1, 2]], [[1], [1]], [[1], [4, 3]]],
    helpRefs: [[1], [5], [6], [1], [5]],
    stats: {
      3: [{ value: "Within 2 weeks", label: "you should get some pain relief from capsaicin cream, though it may take up to a month to work fully, says the NHS.", ref: 1, picture: "calendar" }],
      4: [{ value: "3 a year", label: "is the most steroid injections into the same part of the body your doctor will probably recommend, says Arthritis UK.", ref: 4 }],
    },
  },
  "weight": {
    sectionRefs: [[[1], [2]], [[2], [3]], [[4], [5]], [[3], [1, 2]], [[2], [2]]],
    helpRefs: [[6], [1], [1], [1], [2]],
    stats: {
      1: [{ value: "Nearly 1 in 4", label: "people with knee pain have symptoms linked to weight issues, says Arthritis UK.", ref: 3, picture: "one-in-four" }],
      3: [{ value: "12 weeks", label: "is the length of the free NHS weight loss plan, says Arthritis UK.", ref: 2, picture: "calendar" }],
    },
    charts: {
      0: { kind: "bars", title: "What each step puts through the knee", subtitle: "Force through the knees when walking, as a multiple of body weight", bars: [{ label: "Your body weight", value: 1 }, { label: "Force through the knees, up to", value: 3, strong: true }], max: 4, ticks: [0, 1, 2, 3, 4], unit: "×", sources: "Source: Arthritis UK, Managing your weight" },
    },
  },
  "replacement": {
    sectionRefs: [[[2, 4], [5, 10]], [[1, 3], [5]], [[7], [7]], [[1, 3, 6, 8], [8]], [[2, 1, 3], [6, 9]]],
    helpRefs: [[6], [10], [7], [6], [7]],
    stats: {
      0: [{ value: "About 1 in 10", label: "people with knee osteoarthritis go on to have a knee replacement, says Arthritis UK.", ref: 10, picture: "one-in", of: 10 }],
      4: [{ value: "4 in 5", label: "people who have had knee replacement surgery are happy with their new knees, says Arthritis UK.", ref: 6 }],
    },
    charts: {
      4: { kind: "bars", title: "How long a new joint can last", subtitle: "Years a replacement joint can last, according to the NHS", bars: [{ label: "Hip replacement, at least", value: 15 }, { label: "Knee replacement, can last", value: 25, strong: true }], max: 30, ticks: [0, 10, 20, 30], unit: " years", sources: "Source: NHS, What is a knee replacement? and What is a hip replacement?" },
    },
  },
  "stairs-chairs": {
    sectionRefs: [[[6], [1]], [[2], [6, 2]], [[7], [4]], [[4], [5]], [[4, 5], [4, 5, 3]]],
    helpRefs: [[6], [4], [3], [3], [3]],
    stats: {
      4: [{ value: "Under £1,000", label: "is the cost of each adaptation your council should pay for, such as grab rails, says the NHS.", ref: 5 }],
    },
  },
  "hands": {
    sectionRefs: [[[2], [2]], [[1], [1]], [[1, 6], [7]], [[1], [4]], [[1], [1, 5]]],
    helpRefs: [[3], [3], [3], [3], [1]],
    stats: {
      4: [{ value: "20 minutes", label: "at most is how long to leave a heat or ice pack on your skin, says Arthritis UK.", ref: 1, picture: "hours" }],
    },
  },
  "walking": {
    sectionRefs: [[[2, 3], [3]], [[2], [5]], [[1], [5]], [[1], [1]], [[4], [6]]],
    helpRefs: [[3], [5], [5], [6], [4]],
    stats: {
      1: [{ value: "10 minutes", label: "of brisk walking a day counts towards your weekly exercise, says the NHS.", ref: 5, picture: "calendar" }],
    },
    charts: {
      4: { kind: "bars", title: "A week of activity", subtitle: "Minutes a week adults should aim for, by how hard the activity is", bars: [{ label: "Vigorous, such as running", value: 75 }, { label: "Moderate, such as brisk walking", value: 150, strong: true }], max: 160, ticks: [0, 40, 80, 120, 160], unit: " minutes", sources: "Source: Arthritis UK, How much exercise should I do?" },
    },
  },
  "mood": {
    sectionRefs: [[[1], [4]], [[3], [2]], [[5], [1, 7]], [[5, 6], [6, 8]], [[7], [5]]],
    helpRefs: [[1], [3], [7], [8], [7]],
    stats: {
      1: [{ value: "6 to 9 hours", label: "of sleep a night is what most adults need, says Arthritis UK.", ref: 3, picture: "hours" }],
    },
  },
};
