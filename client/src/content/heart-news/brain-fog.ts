import type { NewsExtras } from "../ischaemic-news";
// Brain fog after cancer (chemo brain) features: paragraph references (numbers are positions in each answer's own sources in brain-fog-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2], [3, 5]], [[2, 1], [2], [6]], [[1], [3, 2], [2]], [[2], [2]], [[1], [1, 3]]],
    helpRefs: [[3], [1], [4], [1]],
    charts: {
      3: { kind: "bars", title: "How many people notice it", subtitle: "People with cancer, out of every 100, thought to have cognitive changes, as Cancer Research UK reports (studies vary widely)", bars: [{ label: "During treatment: up to", value: 75, strong: true }, { label: "After treatment: up to", value: 35 }], sources: "Source: Cancer Research UK, Cognitive changes (chemo brain)" },
    },
  },
  "causes": {
    sectionRefs: [[[2, 1], [2]], [[1, 2], [1, 2], [3]], [[2, 1], [2, 1], [1, 2, 3]], [[2], [2]], [[1], [1, 4], [1]]],
    helpRefs: [[1], [3], [3], [3], [1]],
  },
  "how-long": {
    sectionRefs: [[[2, 5], [1]], [[1, 2], [3]], [[1, 3], [1]], [[2, 3], [4]]],
    helpRefs: [[2], [4], [4], [2]],
    stats: {
      0: [{ value: "Within a year", label: "of ending treatment, the symptoms have gone or improved a lot for most people, says Cancer Research UK.", ref: 1, picture: "calendar" }],
    },
  },
  "other-causes": {
    sectionRefs: [[[3, 1], [1, 2]], [[4], [5]], [[6, 9], [10, 7]], [[1, 8], [1, 9], [1]], [[11], [10], [11]]],
    helpRefs: [[1], [1], [4, 5], [3], [10, 11]],
    charts: {
      2: { kind: "range", title: "How much sleep adults need", subtitle: "Hours of sleep a night, on average, for adults", from: 7, to: 9, unit: "hours a night", sources: "Sources: Macmillan, Trouble sleeping (insomnia); NHS, Insomnia" },
    },
  },
  "strategies": {
    sectionRefs: [[[1, 3], [1, 2]], [[1, 2], [2, 1], [2, 3]], [[1, 2, 3], [1, 2]], [[3], [2], [2]]],
    helpRefs: [[1, 3], [2], [1, 2], [2, 3], [3, 1], [2]],
  },
  "activity": {
    sectionRefs: [[[1], [2], [3]], [[4], [5, 4], [4]], [[2], [6, 7], [7, 6, 3]], [[1], [1, 3, 8]], [[1, 3]]],
    helpRefs: [[4], [2], [6, 7], [1, 2], [1], [1, 3]],
    charts: {
      1: { kind: "bars", title: "Building up to the weekly guideline", subtitle: "Minutes of moderate activity, built up the way Macmillan suggests", bars: [{ label: "One short session", value: 10 }, { label: "A day: three short sessions", value: 30 }, { label: "A week: five such days", value: 150, strong: true }], max: 150, ticks: [0, 50, 100, 150], unit: " minutes", sources: "Source: Macmillan, Physical activity and cancer" },
    },
  },
  "brain-exercises": {
    sectionRefs: [[[1], [2, 3]], [[2], [2]], [[4], [4]], [[5], [2]]],
    helpRefs: [[2], [1, 5], [3], [2], [2]],
  },
  "getting-help": {
    sectionRefs: [[[1], [3]], [[2, 3], [2, 1]], [[1], [1], [2]], [[1, 4], [1]], [[2, 5], [4, 2]]],
    helpRefs: [[1], [2], [2, 3], [2, 1], [2]],
    stats: {
      4: [{ value: "7 days a week", label: "the Macmillan Support Line is open, 8am to 8pm, free on 0808 808 0000.", ref: 2, picture: "calendar" }],
    },
  },
  "work": {
    sectionRefs: [[[2], [1], [8]], [[4, 5], [4]], [[1], [3], [3]], [[6], [6, 1], [6]], [[7], [7, 1]]],
    helpRefs: [[1], [6], [6], [1, 6], [6], [7]],
    stats: {
      1: [{ value: "From diagnosis", label: "you meet the definition of disability under the Equality Act 2010 if you have cancer, says the government.", ref: 5, picture: "calendar" }],
    },
  },
  "driving": {
    sectionRefs: [[[8], [1, 3, 4]], [[1], [1]], [[2], [4], [5]], [[6, 7], [6, 7]]],
    helpRefs: [[1, 3], [1], [1], [1], [5], [6]],
    stats: {
      3: [{ value: "Up to £1,000", label: "is the fine for not telling DVLA about a medical condition that affects your driving, says the government.", ref: 6 }],
    },
  },
  "family": {
    sectionRefs: [[[1], [1]], [[2], [1], [2]], [[3], [2], [2]], [[1, 4], [4], [5]]],
    helpRefs: [[1], [1], [3], [2], [4], [5]],
  },
  "mood": {
    sectionRefs: [[[2, 1], [1]], [[2, 1], [6], [6]], [[3, 4], [4], [5]], [[3, 2], [7], [2, 6]], [[4, 10], [8, 9], [8]]],
    helpRefs: [[6], [2, 6], [4], [7, 3], [10], [8]],
    stats: {
      2: [{ value: "More than 2 weeks", label: "of low feelings is the time to talk to your doctor or nurse, says Macmillan.", ref: 4, picture: "calendar" }],
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 10 }],
    },
  },
};
