import type { NewsExtras } from "../ischaemic-news";
// Sjögren's syndrome features: paragraph references (numbers are positions in each answer's own sources in sjogrens-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2], [3, 4]], [[2], [3, 4]], [[2], [2, 4]], [[2, 4], [1], [2]], [[1], [1]]],
    helpRefs: [[1], [1, 2], [1], [1], [1]],
    stats: {
      0: [{ value: "2nd most common", label: "autoimmune rheumatic disease in the UK, says Sjögren's UK.", ref: 3 }],
      3: [{ value: "About 9 in 10", label: "people with Sjögren's are women, says Sjögren's UK.", ref: 3 }],
    },
    charts: {
      3: { kind: "range", title: "When it is most often diagnosed", subtitle: "Ages at which women are most likely to be diagnosed, in years", from: 40, to: 60, unit: "years of age", sources: "Source: Arthritis UK, Sjögren disease" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[2], [1, 2], [1]], [[2, 3], [2, 4], [1]], [[1], [5]]],
    helpRefs: [[1], [5], [1], [2], [2]],
    stats: {
      3: [{ value: "More than half", label: "of people with Sjögren's may have tiredness and joint pain, says Sjögren's UK.", ref: 4, picture: "half" }],
    },
  },
  "diagnosis": {
    sectionRefs: [[[1, 2, 3], [3, 4]], [[1], [2, 4]], [[2], [2], [1, 2]], [[2], [1, 2], [1, 2]], [[4], [4]]],
    helpRefs: [[4], [4], [4], [4], [3], [4]],
    stats: {
      0: [{ value: "Around 10 years", label: "is thought to be the average time it takes to be diagnosed, says Sjögren's UK.", ref: 4, picture: "calendar" }],
      2: [{ value: "5 minutes", label: "of spitting or dribbling into a container is the spit test, says the NHS.", ref: 1, picture: "hours" }],
      3: [{ value: "About two-thirds", label: "of people with primary Sjögren's have anti-Ro or anti-La antibodies, or both, says Arthritis UK.", ref: 2 }],
    },
  },
  "other-organs": {
    sectionRefs: [[[2, 3], [1]], [[2, 3], [1]], [[2, 4], [3, 5], [3]], [[2], [2, 3]], [[1, 2, 3], [2, 6]]],
    helpRefs: [[2], [2], [4], [5], [2]],
    stats: {
      0: [{ value: "More than 1 in 3", label: "people with Sjögren's have problems affecting other body systems, says Sjögren's UK.", ref: 3, picture: "one-in", of: 3 }],
      2: [{ value: "Up to half", label: "of people with Sjögren's have Raynaud's phenomenon, says Sjögren's UK.", ref: 3, picture: "half" }],
      3: [{ value: "Up to 1 in 5", label: "people with Sjögren's may have thyroid disease, usually an underactive thyroid, says Sjögren's UK.", ref: 3, picture: "one-in", of: 5 }],
      4: [{ value: "No more than 1 or 2 in 100", label: "people with Sjögren's are probably affected by lymphoma, which remains rare, says Sjögren's UK.", ref: 3 }],
    },
  },
  "eyes": {
    sectionRefs: [[[5], [2]], [[2], [2], [2]], [[2, 4], [2, 4], [2, 5]], [[3], [2, 4, 1], [3, 1]], [[3], [3]]],
    helpRefs: [[1, 2], [2], [3], [1, 2], [3], [3]],
    stats: {
      1: [{ value: "More than 3 times a day", label: "using eye drops means a preservative-free brand is a good idea, says Arthritis UK.", ref: 2 }],
    },
  },
  "mouth": {
    sectionRefs: [[[4], [4, 2]], [[1, 2, 6], [4, 5], [5]], [[3, 2, 1], [2, 3], [3, 2]], [[2, 1], [4], [2]], [[2], [3]]],
    helpRefs: [[1], [1, 6], [3], [1, 3], [3, 2], [2]],
    stats: {
      1: [{ value: "Every 6 months", label: "is how often the NHS suggests dental check-ups with Sjögren's.", ref: 1, picture: "calendar" }],
      3: [{ value: "2 hours", label: "between eating and drinking, apart from water or tea or coffee without sugar, was recommended in a talk summarised by Sjögren's UK.", ref: 4, picture: "hours" }],
    },
    charts: {
      1: { kind: "range", title: "How often to see a dentist", subtitle: "Months between dental visits with a dry mouth, as Arthritis UK suggests", from: 3, to: 6, unit: "months", sources: "Source: Arthritis UK, Sjögren disease" },
    },
  },
  "medicines": {
    sectionRefs: [[[1], [1, 2]], [[1], [2]], [[2, 3], [5], [3, 4]], [[3, 4], [4], [3]], [[2], [2]]],
    helpRefs: [[3], [4], [4], [3], [2], [2]],
    stats: {
      2: [{ value: "12 weeks or longer", label: "may pass before you notice a benefit from hydroxychloroquine, says Arthritis UK.", ref: 4, picture: "calendar" }],
      3: [{ value: "At least 4 hours", label: "after hydroxychloroquine before taking an indigestion remedy, recommends Arthritis UK.", ref: 4, picture: "hours" }],
    },
  },
  "checks": {
    sectionRefs: [[[3], [1]], [[1, 2], [1, 2, 3]], [[2], [6]], [[2], [2, 5]], [[4], [4]]],
    helpRefs: [[1], [1, 3], [2], [4], [1]],
    stats: {
      1: [{ value: "Every 6 months", label: "is how often the NHS suggests dental check-ups with Sjögren's.", ref: 1, picture: "calendar" }],
      2: [{ value: "Up to 1 in 5", label: "people with Sjögren's may have thyroid disease, says Sjögren's UK.", ref: 6, picture: "one-in", of: 5 }],
      4: [{ value: "Once a year", label: "eye monitoring, once you have taken hydroxychloroquine for more than five years, says Arthritis UK.", ref: 4, picture: "calendar" }],
    },
  },
  "fatigue": {
    sectionRefs: [[[1], [5, 2]], [[1], [2, 1]], [[1], [4], [4]], [[1], [3], [1]]],
    helpRefs: [[1], [1], [1], [4], [4], [1]],
    stats: {
      2: [{ value: "4 Ps", label: "problem solving, planning, prioritising and pacing, are the strategies Arthritis UK suggests for fatigue.", ref: 4 }],
      3: [{ value: "5 or 10 minutes", label: "of walking can be enough to start with, says Arthritis UK.", ref: 1, picture: "hours" }],
    },
    charts: {
      0: { kind: "donut", title: "The hardest symptom for many", subtitle: "People with Sjögren's in UK registry data, out of every 100", value: 96, subject: "people with Sjögren's", label: "ranked physical or mental fatigue as their most or second most disabling symptom", sources: "Source: Sjögren's UK, Understanding fatigue in Sjögren's disease" },
    },
  },
  "everyday": {
    sectionRefs: [[[1, 2], [1], [1, 2]], [[1, 5], [2], [4]], [[1, 2], [2, 3]], [[3], [3], [3]]],
    helpRefs: [[1, 2], [1], [1, 5], [1], [3], [2, 4]],
    stats: {
      2: [{ value: "At least factor 30", label: "sunscreen, and factor 50 or more with sun rash, suggest Sjögren's UK's travel tips.", ref: 3 }],
    },
  },
  "pregnancy": {
    sectionRefs: [[[1], [2]], [[2, 3], [2], [2, 5]], [[2, 4], [6, 4]], [[2], [1]]],
    helpRefs: [[1], [2], [2], [6], [1], [1]],
    stats: {
      1: [{ value: "Up to 6 in 10", label: "women with Sjögren's have these antibodies, says Sjögren's UK.", ref: 3 }],
    },
    charts: {
      1: { kind: "range", title: "Rare, even with the antibodies", subtitle: "Babies of mothers with anti-Ro or anti-La who develop heart block, out of every 100", from: 1, to: 4, sources: "Source: Sjögren's UK, Pregnancy in Sjögren's syndrome and neonatal lupus" },
    },
  },
  "support": {
    sectionRefs: [[[1], [5, 1, 2]], [[3, 2], [3]], [[4], [4], [1]], [[2], [2]], [[6], [6]]],
    helpRefs: [[3], [1, 2], [4], [2], [2], [6]],
    stats: {
      1: [{ value: "1986", label: "is when Sjögren's UK was founded, as the British Sjögren's Syndrome Association.", ref: 3, picture: "calendar" }],
      4: [{ value: "116 123", label: "is the number to call Samaritans, says the NHS.", ref: 6 }],
    },
  },
};
