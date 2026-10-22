import type { NewsExtras } from "../ischaemic-news";
// Joint hypermobility features: paragraph references (numbers are positions in each answer's own sources in hypermobility-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[2, 4], [5, 4]], [[4, 2], [5, 3]], [[3], [2, 4]], [[1, 4], [4, 2]], [[1, 2], [3]]],
    helpRefs: [[1], [1], [1], [2]],
    stats: {
      3: [{ value: "1 in 2", label: "children will also have hypermobility if one parent has it, Arthritis UK says it is believed.", ref: 2, picture: "one-in", of: 2 }],
    },
  },
  "when-a-problem": {
    sectionRefs: [[[1], [2]], [[2, 3, 6], [2]], [[2, 5], [5]], [[3], [3]], [[1, 2], [4]]],
    helpRefs: [[1], [2], [5], [4]],
  },
  "hsd-heds": {
    sectionRefs: [[[2], [2, 1]], [[1], [1]], [[1], [1, 4]], [[3], [3]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1], [1]],
    stats: {
      1: [{ value: "13 types", label: "of Ehlers-Danlos syndromes are known, most of them rare, says the NHS.", ref: 1 }],
      4: [{ value: "1 in 2", label: "is the chance of each child developing hypermobile EDS when 1 parent has it, says the NHS.", ref: 1, picture: "one-in", of: 2 }],
    },
  },
  "diagnosis": {
    sectionRefs: [[[1], [1, 3]], [[3, 4], [3, 4]], [[3], [2]], [[5], [3, 2]], [[6, 2], [7]]],
    helpRefs: [[1], [2], [1], [7], [2]],
    charts: {
      1: { kind: "bars", title: "Where the line is drawn", subtitle: "Beighton score counted as positive, in points out of 9", bars: [{ label: "Adults", value: 5, strong: true }, { label: "Children before puberty", value: 6 }, { label: "Adults over 50", value: 4 }], max: 9, ticks: [0, 3, 6, 9], unit: " points", sources: "Source: The Ehlers-Danlos Society, Assessing joint hypermobility" },
    },
    stats: {
      4: [{ value: "10 to 15 years", label: "is the average gap between symptoms starting and a diagnosis, says the Hypermobility Syndromes Association.", ref: 6, picture: "calendar" }],
    },
  },
  "strengthening": {
    sectionRefs: [[[1], [1, 2]], [[3], [5]], [[1, 6], [4]], [[7], [2]], [[8, 6], [3]]],
    helpRefs: [[1, 6], [4], [6], [8], [3]],
    stats: {
      3: [{ value: "At least 2 days", label: "a week of strengthening activities is what adults should aim for, says the NHS.", ref: 8, picture: "calendar" }],
    },
  },
  "pain": {
    sectionRefs: [[[1], [2]], [[3], [4], [5]], [[3, 6], [1, 7]], [[6], [7, 6]], [[3, 8], [5]]],
    helpRefs: [[3], [3], [6], [7], [3, 8], [5]],
    stats: {
      1: [{ value: "10 days", label: "is the longest to take ibuprofen tablets or capsules unless a doctor advises it, says the NHS.", ref: 4, picture: "calendar" }],
    },
  },
  "fatigue": {
    sectionRefs: [[[1, 2], [3]], [[4], [2, 5], [6]], [[7], [7]], [[8], [8], [8]], [[9], [8]]],
    helpRefs: [[7], [7], [5], [8], [8], [9]],
    stats: {
      2: [{ value: "4 Ps", label: "problem solving, planning, prioritising and pacing, can help you manage your energy, suggests Arthritis UK.", ref: 7 }],
      3: [{ value: "9 to 10 hours", label: "of sleep may be what you need with a long-term condition, says the Hypermobility Syndromes Association.", ref: 8, picture: "hours" }],
    },
  },
  "dislocations": {
    sectionRefs: [[[1, 2], [3]], [[4], [4], [4]], [[5], [5], [5]], [[6], [6]], [[7], [7], [4]]],
    helpRefs: [[4], [4, 5], [5], [4], [4, 7], [7]],
    charts: {
      4: { kind: "range", title: "Back to everyday", subtitle: "Weeks it usually takes to recover from a dislocated shoulder", from: 6, to: 12, unit: "weeks", sources: "Source: NHS, Dislocated shoulder" },
    },
  },
  "everyday": {
    sectionRefs: [[[1, 2], [3, 2]], [[2], [4]], [[5, 1], [5, 6]], [[3], [2], [7]], [[3, 5], [3]]],
    helpRefs: [[1], [2], [1], [3, 7], [2]],
    stats: {
      1: [{ value: "Half an hour", label: "at most at one task or in one position, suggests the Hypermobility Syndromes Association.", ref: 2, picture: "hours" }],
    },
  },
  "exercise": {
    sectionRefs: [[[1, 2, 3], [4]], [[1, 5], [2, 6]], [[3, 7], [5]], [[2], [2, 7]], [[3], [2, 3]]],
    helpRefs: [[1], [4], [2], [3], [2], [2]],
    charts: {
      0: { kind: "bars", title: "Two ways to meet the weekly target", subtitle: "Minutes of activity adults should aim for each week", bars: [{ label: "Moderate intensity, at least", value: 150, strong: true }, { label: "Or vigorous intensity", value: 75 }], max: 150, ticks: [0, 50, 100, 150], unit: " minutes", sources: "Source: NHS, Physical activity guidelines for adults aged 19 to 64" },
    },
  },
  "work-school": {
    sectionRefs: [[[1], [2]], [[3, 4], [4]], [[1, 5], [6, 5]], [[7], [7], [8]], [[9], [3]]],
    helpRefs: [[1], [2, 1], [5, 1], [7], [3], [9]],
    stats: {
      1: [{ value: "12 months", label: "or more is what long-term means under the Equality Act 2010, says the government.", ref: 4, picture: "calendar" }],
      2: [{ value: "Within 12 weeks", label: "of starting or returning to paid work, you can already be eligible for Access to Work, says the government.", ref: 6, picture: "calendar" }],
    },
  },
  "support": {
    sectionRefs: [[[1], [2]], [[3, 4, 5], [5, 6]], [[2, 7], [2]], [[1, 5], [8]], [[9, 10], [9]]],
    helpRefs: [[4, 5], [5], [2], [1], [8], [10]],
  },
};
