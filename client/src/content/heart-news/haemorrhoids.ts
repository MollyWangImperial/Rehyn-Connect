import type { NewsExtras } from "../ischaemic-news";
// Haemorrhoids (piles) features: paragraph references (numbers are positions in each answer's own sources in piles-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [5]], [[3, 2], [3, 2]], [[4], [4], [2]], [[6], [6]]],
    helpRefs: [[1], [1], [1], [1]],
    charts: {
      3: { kind: "range", title: "How many people have piles", subtitle: "People affected, out of every 100, in UK community studies that may give a higher figure than the real one", from: 13, to: 36, sources: "Source: NICE Clinical Knowledge Summaries, Haemorrhoids: how common is it?" },
    },
    stats: {
      3: [{ value: "Around 1 in 10", label: "people are thought to have piles in any one year, says NICE's clinical summary.", ref: 6, picture: "one-in", of: 10 }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1, 2], [5]], [[3], [1]], [[1], [4]], [[4, 3], [6], [1]], [[2], [2]]],
    helpRefs: [[1], [1], [1], [1], [2]],
    stats: {
      3: [{ value: "48 to 72 hours", label: "after it starts is when the pain of a pile with a clot usually peaks, says NICE's clinical summary.", ref: 6, picture: "hours" }],
    },
  },
  "causes": {
    sectionRefs: [[[1, 2]], [[3], [4]], [[6], [5]], [[3], [1]]],
    helpRefs: [[1], [1], [1, 4], [1, 5], [1], [6]],
    stats: {
      2: [{ value: "Around 1 in 7", label: "otherwise healthy people are affected by constipation, says Guts UK.", ref: 6, picture: "one-in", of: 7 }],
    },
  },
  "checks": {
    sectionRefs: [[[1], [3, 1]], [[1], [2]], [[1], [6], [1, 2]], [[1, 2], [2, 3, 1], [5, 4]]],
    helpRefs: [[1], [1, 2], [3], [2], [4]],
    stats: {
      2: [{ value: "3 weeks", label: "of blood in your poo is a reason to see a GP, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "self-help": {
    sectionRefs: [[[3], [1]], [[2], [3, 4]], [[3, 4], [5, 6]], [[1], [1], [6]]],
    helpRefs: [[1], [3, 4], [1], [1], [1], [1]],
    charts: {
      1: { kind: "bars", title: "Most adults fall short on fibre", subtitle: "Grams of fibre a day", bars: [{ label: "Government guideline", value: 30, strong: true }, { label: "What most adults eat, on average", value: 20 }], max: 40, ticks: [0, 10, 20, 30, 40], unit: "g", sources: "Source: NHS, How to get more fibre into your diet" },
    },
    stats: {
      2: [{ value: "8 mugs or tall glasses", label: "of fluid a day is a normal amount for the average adult, says Guts UK.", ref: 4 }],
    },
  },
  "pharmacy": {
    sectionRefs: [[[1, 2], [1, 2]], [[3, 7], [4, 7], [3]], [[3], [5], [6]], [[8], [8]], [[4, 1]]],
    helpRefs: [[1], [3], [4], [8], [4]],
    stats: {
      2: [{ value: "7 days", label: "is the longest to use hydrocortisone treatments for piles, says the NHS.", ref: 3, picture: "calendar" }],
      3: [{ value: "Up to 3 days", label: "is how long a bulk-forming laxative takes to work, says the NHS.", ref: 8, picture: "calendar" }],
    },
  },
  "treatments": {
    sectionRefs: [[[1, 2], [1]], [[1, 2], [1, 2]], [[4], [3]], [[4], [5], [4, 5]], [[4, 3], [4]]],
    helpRefs: [[4], [5], [5], [5], [5], [4]],
    charts: {
      4: { kind: "donut", title: "Sometimes banding is repeated", subtitle: "People who have banding, out of every 100", value: 20, prefix: "About", subject: "people who have banding", label: "need a second banding within 6 months", sources: "Source: NICE Clinical Knowledge Summaries, Haemorrhoids: management" },
    },
    stats: {
      3: [{ value: "7 to 10 days", label: "after banding, the tissue in the band falls away, says a Cambridge University Hospitals leaflet.", ref: 4, picture: "calendar" }],
    },
  },
  "surgery": {
    sectionRefs: [[[1, 2, 4], [5]], [[1, 2], [1, 5]], [[5], [5], [5]], [[5], [3]], [[3, 5], [5]]],
    helpRefs: [[5], [5], [5], [5], [5]],
    stats: {
      0: [{ value: "About 1 in 10", label: "people with piles need surgery to ease their symptoms, says NICE's clinical summary.", ref: 4, picture: "one-in", of: 10 }],
      2: [{ value: "1 to 2 weeks", label: "is when you should be able to return to work, says a Royal Devon hospital leaflet.", ref: 5, picture: "calendar" }],
    },
    charts: {
      4: { kind: "donut", title: "Surgery lasts best", subtitle: "People who have their piles removed, out of every 100", value: 20, prefix: "Fewer than", subject: "people who have their piles removed", label: "have symptoms come back", sources: "Source: NICE Clinical Knowledge Summaries, Haemorrhoids: management" },
    },
  },
  "toilet": {
    sectionRefs: [[[1, 5, 6], [2, 5]], [[3, 1], [3, 4]], [[1, 3], [2, 3]], [[1, 6, 7]]],
    helpRefs: [[1], [2], [1, 3], [1], [2], [1]],
    stats: {
      0: [{ value: "3 times a day to 3 times a week", label: "is the normal range for opening the bowels in healthy people, says Guts UK.", ref: 5 }],
    },
    charts: {
      1: { kind: "bars", title: "Keep toilet visits short", subtitle: "Minutes on the toilet that two NHS hospital leaflets suggest", bars: [{ label: "Cambridge: aim for around", value: 5 }, { label: "Royal Devon: less than", value: 3, strong: true }], max: 10, ticks: [0, 5, 10], unit: " minutes", sources: "Sources: Cambridge University Hospitals, Banding of piles; Royal Devon University Healthcare, About removal of haemorrhoids" },
    },
  },
  "pregnancy": {
    sectionRefs: [[[1, 4], [2, 1, 5]], [[1]], [[1, 2, 7], [1]], [[1], [3]], [[6], [6]]],
    helpRefs: [[1, 7], [1], [1], [1], [1]],
    stats: {
      4: [{ value: "6 to 8 weeks", label: "after the birth is the postnatal check, a good time to mention any physical problems, says the NHS.", ref: 6, picture: "calendar" }],
    },
  },
  "coming-back": {
    sectionRefs: [[[1], [1, 3]], [[2], [4]], [[6, 8], [7]], [[5, 3], [5]]],
    helpRefs: [[2], [3], [5], [6], [7]],
    stats: {
      2: [{ value: "150 minutes", label: "of moderate intensity activity a week is what adults should aim for, says the NHS.", ref: 7 }],
    },
  },
  "urgent": {
    sectionRefs: [[[1, 2], [1]], [[1], [3, 2]], [[5]], [[4], [4]]],
    helpRefs: [[1, 2], [1], [1], [1], [1]],
  },
};
