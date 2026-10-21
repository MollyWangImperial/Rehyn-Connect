import type { NewsExtras } from "../ischaemic-news";
// Tiredness after treatment features: paragraph references (numbers are positions in each answer's own sources in cancer-fatigue-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "why": {
    sectionRefs: [[[1], [2], [1]], [[2], [2, 3]], [[3], [3, 4], [3, 5]], [[3], [3, 2]], [[1], [1]]],
    helpRefs: [[1], [3], [3], [4], [3]],
    charts: {
      0: { kind: "donut", title: "Very common", subtitle: "People with cancer, out of every 100, as research cited by Cancer Research UK suggests", value: 65, prefix: "Almost", subject: "people with cancer", label: "are affected by cancer related fatigue", sources: "Source: Cancer Research UK, What is cancer fatigue?" },
    },
  },
  "not-laziness": {
    sectionRefs: [[[1], [1]], [[1], [1], [2]], [[1], [1]], [[2], [3]], [[4], [2]]],
    helpRefs: [[2], [2], [2], [3], [4], [2]],
    stats: {
      3: [{ value: "0 to 10", label: "is the scale your specialist nurse may ask you to score your fatigue on, where 10 is the worst possible fatigue, says Macmillan.", ref: 2 }],
    },
  },
  "other-causes": {
    sectionRefs: [[[1], [3, 7, 4]], [[2, 5], [1, 2]], [[2], [6], [3]], [[2], [2, 1]], [[1], [2, 1]]],
    helpRefs: [[1], [1], [2], [2], [6], [2]],
  },
  "how-long": {
    sectionRefs: [[[1], [2]], [[3], [4], [3]], [[3], [1]], [[1, 6], [6, 7]], [[5], [5]]],
    helpRefs: [[5], [1, 5], [1], [6], [5]],
    stats: {
      1: [{ value: "Within 2 weeks", label: "red blood cell levels usually start to recover during chemotherapy, depending on the type, says Cancer Research UK.", ref: 3, picture: "calendar" }],
      2: [{ value: "At least 6 months", label: "is how long symptoms last when fatigue is long term, or chronic, says Cancer Research UK.", ref: 3, picture: "calendar" }],
    },
  },
  "pacing": {
    sectionRefs: [[[1], [1], [4]], [[1], [1], [5]], [[2], [2], [2]], [[2], [1]], [[1, 3]]],
    helpRefs: [[1], [1], [2], [2], [2], [1, 3]],
    stats: {
      1: [{ value: "1 month", label: "of energy levels can be recorded in Macmillan's fatigue diary, to share with your healthcare team.", ref: 1, picture: "calendar" }],
    },
  },
  "gentle-exercise": {
    sectionRefs: [[[1], [1], [5]], [[3, 2], [2, 6], [8, 7]], [[3], [3, 2], [3, 8]], [[4], [4], [4]], [[7], [3]]],
    helpRefs: [[3, 2], [2], [2], [4], [4], [7]],
    stats: {
      1: [{ value: "15 minutes", label: "of walking, even once, can give you an energy boost, says the NHS.", ref: 6, picture: "hours" }],
    },
    charts: {
      2: { kind: "bars", title: "Building up to the weekly guideline", subtitle: "Minutes of moderate activity, built up the way Macmillan suggests", bars: [{ label: "One short session", value: 10 }, { label: "A day: three short sessions", value: 30 }, { label: "A week: five such days", value: 150, strong: true }], max: 150, ticks: [0, 50, 100, 150], unit: " minutes", sources: "Source: Macmillan, Physical activity and cancer" },
    },
  },
  "sleep": {
    sectionRefs: [[[1], [1], [3]], [[3], [2, 1, 4]], [[2, 1], [5]], [[2, 4], [2, 5], [1, 5]], [[3, 2], [1, 3], [1]]],
    helpRefs: [[2, 4], [2, 1], [2], [2], [5], [3]],
    stats: {
      2: [{ value: "20 to 30 minutes", label: "is the longest daytime nap Cancer Research UK suggests, if you nap at all.", ref: 2, picture: "hours" }],
    },
    charts: {
      1: { kind: "range", title: "How much sleep adults need", subtitle: "Hours of sleep a night, on average, for adults", from: 7, to: 9, unit: "hours a night", sources: "Sources: Macmillan, Trouble sleeping (insomnia); NHS, Insomnia" },
    },
  },
  "food": {
    sectionRefs: [[[1], [1, 3]], [[5], [2], [1]], [[4], [4]], [[2], [2], [2]], [[1, 6, 5], [1, 2]]],
    helpRefs: [[5, 2], [2], [1], [1, 6], [2], [1]],
    stats: {
      1: [{ value: "Every 3 to 4 hours", label: "eat regular meals and healthy snacks to keep up your energy, says the NHS.", ref: 5, picture: "hours" }],
    },
    charts: {
      4: { kind: "range", title: "How much to drink", subtitle: "Cups or glasses of fluid a day, as the government recommends in the Eatwell Guide", from: 6, to: 8, unit: "cups or glasses a day", sources: "Source: NHS, Water, drinks and hydration" },
    },
  },
  "work": {
    sectionRefs: [[[3, 4], [3]], [[1], [1]], [[2], [2, 6], [2]], [[1], [1], [2]], [[5], [5, 7]]],
    helpRefs: [[1], [2], [1], [1], [5], [2]],
    stats: {
      0: [{ value: "From diagnosis", label: "you meet the definition of disability under the Equality Act 2010 if you have cancer, says the government.", ref: 4, picture: "calendar" }],
    },
  },
  "asking-help": {
    sectionRefs: [[[2], [4]], [[1], [1]], [[2, 3, 6], [1]], [[1], [7]], [[2], [5, 3]]],
    helpRefs: [[1], [1], [2], [1], [2], [3]],
    stats: {
      4: [{ value: "8 weekly calls", label: "with the same trained volunteer are what Macmillan Buddies offers, free.", ref: 5, picture: "calendar" }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [2]], [[3], [3], [4]], [[1, 3], [5, 6], [7]], [[3], [3]], [[3, 10], [8, 9], [8]]],
    helpRefs: [[1], [3], [7, 3], [5], [10], [8]],
    stats: {
      1: [{ value: "More than 2 weeks", label: "of low feelings is the time to talk to your doctor or nurse, says Macmillan.", ref: 3, picture: "calendar" }],
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 10 }],
    },
  },
  "family": {
    sectionRefs: [[[3, 1], [2]], [[2], [1], [2]], [[1], [8]], [[7], [7]], [[6, 4], [4], [5]]],
    helpRefs: [[1], [2], [1], [1], [7], [5]],
    stats: {
      4: [
        { value: "Over 18", label: "and caring for someone? You can ask your council for a free carer's assessment, says the NHS.", ref: 5 },
        { value: "At least an hour", label: "is how long a carer's assessment usually lasts, says the NHS.", ref: 5, picture: "hours" },
      ],
    },
  },
};
