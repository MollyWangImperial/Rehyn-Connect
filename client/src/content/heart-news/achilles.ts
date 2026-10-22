import type { NewsExtras } from "../ischaemic-news";
// Achilles tendinopathy features: paragraph references (numbers are positions in each answer's own sources in achilles-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[2], [2, 1]], [[3, 1], [2]], [[2, 4], [1]], [[1], [1]], [[3, 5], [2, 6]]],
    helpRefs: [[3], [3], [3], [2]],
    stats: {
      3: [{ value: "55 to 60%", label: "of cases affect the middle of the tendon, the most common site, according to a review cited by NICE CKS.", ref: 1 }],
    },
    charts: {
      4: { kind: "range", title: "When it peaks", subtitle: "The peak age for Achilles tendinopathy in one large study cited by NICE CKS", from: 40, to: 59, unit: "years of age", sources: "Source: NICE Clinical Knowledge Summaries, Achilles tendinopathy: how common is it?" },
    },
  },
  "causes": {
    sectionRefs: [[[1], [4]], [[2], [9, 3]], [[2], [2, 4]], [[5], [2, 3, 8]], [[3], [7]]],
    helpRefs: [[6], [6], [6], [7], [7]],
    stats: {
      4: [{ value: "48 hours", label: "is how soon tendon damage, a serious side effect of the antibiotic ciprofloxacin, can develop after starting treatment, says the NHS.", ref: 7, picture: "hours" }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [3, 4]], [[5], [2]], [[5], [6, 7, 5], [9]], [[6, 7], [5, 8]], [[3], [10]]],
    helpRefs: [[6], [7], [3], [6]],
    stats: {
      1: [{ value: "About 30%", label: "of people may have Achilles tendinopathy in both ankles, says NICE CKS.", ref: 2 }],
      4: [{ value: "2 to 3 weeks", label: "of Achilles pain that does not disappear is the time to see a GP or physiotherapist, says the NHS.", ref: 3, picture: "calendar" }],
    },
  },
  "how-long": {
    sectionRefs: [[[1, 3], [2]], [[2], [4]], [[2], [2]], [[1], [5, 4]], [[4], [4, 6]]],
    helpRefs: [[1], [1], [5], [6]],
    stats: {
      0: [{ value: "A year or longer", label: "is how long full recovery can take, says a review cited by NICE CKS.", ref: 2, picture: "calendar" }],
      2: [{ value: "84%", label: "of people in one 8-year study had fully returned to their normal activity level, says NICE CKS.", ref: 2 }],
    },
    charts: {
      1: { kind: "donut", title: "Most cases settle", subtitle: "Cases of Achilles tendinopathy, out of every 100, with treatment without surgery", value: 75, subject: "cases", label: "settle within 3 to 6 months, according to one review cited by NICE CKS", sources: "Source: NICE Clinical Knowledge Summaries, Achilles tendinopathy: management" },
    },
  },
  "exercises": {
    sectionRefs: [[[3], [1]], [[4], [2]], [[2], [2]], [[2], [6], [5]], [[2], [2]]],
    helpRefs: [[4], [7], [8], [2], [2]],
    stats: {
      0: [{ value: "2 to 3 times a week", label: "is how often a progressive tendon loading programme is done, says NICE CKS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      4: { kind: "range", title: "Pain while exercising", subtitle: "The pain score NHS inform suggests staying within during exercise, where 0 is no pain and 10 the worst", from: 0, to: 5, unit: "out of 10", sources: "Source: NHS inform, Exercises for calf and ankle problems" },
    },
  },
  "self-care": {
    sectionRefs: [[[1, 4], [2]], [[1], [1], [5]], [[1, 3], [4], [2]], [[6, 7], [6], [6, 7]], [[3], [3]]],
    helpRefs: [[1], [1], [3], [4], [6]],
    stats: {
      1: [{ value: "20 minutes", label: "at most at a time is how long NHS inform suggests using wrapped heat or ice, with a few hours between treatments.", ref: 1, picture: "hours" }],
    },
    charts: {
      3: { kind: "bars", title: "Days without a doctor's advice", subtitle: "The most days to take each painkiller unless a doctor advises otherwise, according to the NHS", bars: [{ label: "Paracetamol", value: 3 }, { label: "Ibuprofen tablets", value: 10, strong: true }], max: 12, ticks: [0, 3, 6, 9, 12], unit: " days", sources: "Source: NHS, Paracetamol for adults and Ibuprofen for adults" },
    },
  },
  "footwear": {
    sectionRefs: [[[4, 6], [2]], [[1], [5, 3], [3]], [[1, 3], [9]], [[1, 5], [8]], [[10], [7]]],
    helpRefs: [[2], [1], [5], [5], [7]],
    stats: {
      4: [{ value: "1cm", label: "is the gap Arthritis UK says good footwear should have between your longest toe and the front of the shoe.", ref: 7 }],
    },
  },
  "further-treatment": {
    sectionRefs: [[[2], [3]], [[1], [1]], [[1]], [[5, 1], [6]], [[7, 1], [1, 4], [8]]],
    helpRefs: [[2], [3], [6], [8]],
    stats: {
      4: [{ value: "6 months", label: "of treatment without an operation, at least, comes before surgery may be considered, says NICE CKS.", ref: 1, picture: "calendar" }],
    },
  },
  "sport": {
    sectionRefs: [[[1, 6], [5]], [[1], [2]], [[3, 4], [7]], [[8], [1]], [[5, 1], [9]]],
    helpRefs: [[1], [3], [4], [1], [5]],
    stats: {
      3: [{ value: "27 to 44%", label: "are the re-injury rates in amateur and elite athletes, in studies cited by NICE CKS.", ref: 8 }],
    },
    charts: {
      0: { kind: "bars", title: "Runners are most affected", subtitle: "People, out of every 100, who get Achilles tendinopathy at some point in life, according to a review cited by NICE CKS", bars: [{ label: "General population", value: 6 }, { label: "Athletes in general", value: 24 }, { label: "Short-distance runners", value: 36 }, { label: "Middle and long-distance runners", value: 52, strong: true }], sources: "Source: NICE Clinical Knowledge Summaries, Achilles tendinopathy: how common is it?" },
    },
  },
  "work": {
    sectionRefs: [[[1], [1], [3]], [[1], [2], [4]], [[6], [5]], [[5], [7], [8]], [[9], [9]]],
    helpRefs: [[1], [4], [6], [5], [9]],
    stats: {
      2: [{ value: "6 hours", label: "or more of work in a day comes with a rest break under health and safety rules, says Arthritis UK.", ref: 5, picture: "hours" }],
    },
  },
  "weight": {
    sectionRefs: [[[1, 2], [1, 2]], [[3], [4, 5]], [[5], [6]], [[6], [6, 5]], [[5, 7, 8], [6]]],
    helpRefs: [[6], [6], [6], [5], [7]],
    stats: {
      3: [{ value: "12 weeks", label: "is the length of the plan in the free NHS Weight Loss Plan app, says the NHS.", ref: 6, picture: "calendar" }],
    },
  },
  "coming-back": {
    sectionRefs: [[[1], [3]], [[2], [2]], [[3], [3]], [[4], [5, 2]], [[6], [9, 7]]],
    helpRefs: [[2], [8], [3], [6], [9]],
    stats: {
      0: [{ value: "41%", label: "of people in one long-term study later had overuse symptoms in the Achilles tendon of the other leg, says NICE CKS.", ref: 1 }],
    },
  },
};
