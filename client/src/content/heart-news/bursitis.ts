import type { NewsExtras } from "../ischaemic-news";
// Bursitis features: paragraph references (numbers are positions in each answer's own sources in bursitis-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[2], [2]], [[2]], [[3], [4]]],
    helpRefs: [[1], [1], [1], [1]],
    stats: {
      4: [{ value: "Two-thirds", label: "of cases of bursitis at the elbow are not caused by infection, says NICE's guidance for GPs.", ref: 4 }],
    },
  },
  "where": {
    sectionRefs: [[[1], [9]], [[2], [2, 3], [4]], [[5], [6]], [[7], [7]], [[8], [9]]],
    helpRefs: [[9], [9], [9], [9], [10]],
    charts: {
      1: { kind: "range", title: "When hip pain on the outside is most common", subtitle: "The ages at which greater trochanteric pain syndrome is most common in women, according to NICE's guidance for GPs", from: 40, to: 60, unit: "years of age", sources: "Source: NICE Clinical Knowledge Summaries, Greater trochanteric pain syndrome" },
    },
  },
  "causes": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[1], [1]], [[4], [5, 6]], [[2], [2]]],
    helpRefs: [[7], [7], [7], [7]],
    stats: {
      1: [{ value: "Around 10 in 100,000", label: "people is how common some studies report elbow bursitis to be, says NICE's guidance for GPs, though the true figure is uncertain.", ref: 3 }],
    },
  },
  "urgent": {
    sectionRefs: [[[1], [2]], [[3], [3, 1]], [[4], [5], [6]], [[7], [7]], [[8], [8]]],
    helpRefs: [[1], [1], [4, 7], [8]],
    stats: {
      0: [{ value: "1 to 2 weeks", label: "of treating it yourself, without improvement, is when to see a GP, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "self-care": {
    sectionRefs: [[[1], [2]], [[1], [2, 3]], [[1, 2], [2]], [[4, 5], [4]], [[1], [2]]],
    helpRefs: [[1], [1], [1, 2], [1], [4]],
    stats: {
      1: [{ value: "Around 10 minutes", label: "at a time, repeated every few hours during the day, for an ice pack wrapped in a tea towel, says the NHS.", ref: 1, picture: "hours" }],
      2: [{ value: "A couple of weeks", label: "is when the pain should improve if painkillers work for you, though swelling may last longer, says Arthritis UK.", ref: 2, picture: "calendar" }],
    },
  },
  "exercises": {
    sectionRefs: [[[1], [1]], [[1, 2], [2]], [[3], [3], [4]], [[5], [5], [6]], [[4, 6], [7], [8]]],
    helpRefs: [[5, 4], [1, 2], [2], [4], [7]],
    stats: {
      2: [{ value: "Five seconds", label: "is how long to hold the standing hip abduction before slowly lowering the leg, says Arthritis UK.", ref: 4, picture: "hours" }],
    },
  },
  "injections": {
    sectionRefs: [[[1], [2]], [[2, 1], [3]], [[1, 2], [4], [5]], [[2, 4], [6]], [[1], [7]]],
    helpRefs: [[1], [2], [6], [2]],
    charts: {
      1: { kind: "bars", title: "After draining an elbow bursa", subtitle: "Elbow bursitis treated by aspiration alone, out of every 100 cases, according to NICE's guidance for GPs", bars: [{ label: "Settled within 2 weeks", value: 50 }, { label: "Still swollen at 8 weeks", value: 25 }, { label: "Still swollen at 6 months", value: 10 }, { label: "Settled over a longer time", value: 95, strong: true }], sources: "Source: NICE Clinical Knowledge Summaries, Olecranon bursitis: what is the prognosis?" },
    },
  },
  "infected": {
    sectionRefs: [[[1], [2]], [[2], [3]], [[4], [4]], [[5], [6], [7, 4]], [[8], [2]]],
    helpRefs: [[5], [6], [5], [4]],
    stats: {
      0: [{ value: "At least 7 days", label: "is how long antibiotics are usually taken if bursitis is caused by an infection, says the NHS.", ref: 1, picture: "calendar" }],
      4: [{ value: "5 weeks", label: "is the average time for an infected elbow bursa to settle, though some take up to 20 weeks, says NICE's guidance for GPs.", ref: 8, picture: "calendar" }],
    },
    charts: {
      1: { kind: "range", title: "The usual germ", subtitle: "Infected elbow bursae caused by Staphylococcus aureus, out of every 100, according to NICE's guidance for GPs", from: 80, to: 90, sources: "Source: NICE Clinical Knowledge Summaries, Olecranon bursitis: what causes it?" },
    },
  },
  "pressure": {
    sectionRefs: [[[1], [2]], [[3], [4]], [[1], [5], [1]], [[6], [7, 6]], [[1], [1]]],
    helpRefs: [[1], [4], [1], [6, 7], [1]],
  },
  "activity": {
    sectionRefs: [[[1], [2]], [[3], [4]], [[5], [5, 6]], [[1], [7]], [[1]]],
    helpRefs: [[1], [2], [6], [5], [1]],
    stats: {
      3: [{ value: "150 minutes", label: "of moderate activity a week is what adults should aim for, with strengthening on at least 2 days, says the NHS.", ref: 7, picture: "hours" }],
    },
  },
  "work": {
    sectionRefs: [[[1], [2]], [[3], [1], [4]], [[5], [5]], [[5], [6]], [[7], [7]]],
    helpRefs: [[3], [1], [5], [5], [6, 7]],
  },
  "coming-back": {
    sectionRefs: [[[1], [2]], [[3], [3], [1]], [[3], [4]], [[5], [4]], [[3], [6]]],
    helpRefs: [[3], [3], [3], [3, 1]],
    stats: {
      4: [{ value: "2 months", label: "without a response to treatment is when NICE's guidance for GPs suggests considering referral for elbow bursitis.", ref: 6, picture: "calendar" }],
    },
    charts: {
      3: { kind: "donut", title: "Most people recover", subtitle: "People with greater trochanteric pain syndrome, out of every 100", value: 90, prefix: "Over", subject: "people with pain on the outside of the hip", label: "recover fully with conservative treatment", sources: "Source: NICE Clinical Knowledge Summaries, Greater trochanteric pain syndrome" },
    },
  },
};
