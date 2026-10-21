import type { NewsExtras } from "../ischaemic-news";
// Underactive thyroid features: paragraph references (numbers are positions in each answer's own sources in underactive-answers.ts), charts and big figures, all checked on 20 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-does": {
    sectionRefs: [[[1], [1]], [[1, 3], [1]], [[1, 4]], [[2], [2, 3]], [[2, 1], [2]]],
    helpRefs: [[2], [2], [2], [2, 1]],
    stats: {
      4: [{ value: "About 1 in 20", label: "people has some kind of thyroid disorder, says the British Thyroid Foundation.", ref: 1, picture: "one-in", of: 20 }],
    },
  },
  "causes": {
    sectionRefs: [[[1, 2], [3, 2]], [[1], [1, 4]], [[1, 2], [2]], [[1, 2], [2]]],
    helpRefs: [[1], [2], [2], [2]],
    charts: {
      0: { kind: "bars", title: "Antibodies point to the immune system", subtitle: "People with TPO antibodies, out of every 100", bars: [{ label: "With autoimmune hypothyroidism (more than)", value: 90, strong: true }, { label: "Without a thyroid disorder (about)", value: 10 }], sources: "Source: British Thyroid Foundation, Thyroid antibodies explained" },
    },
  },
  "tests": {
    sectionRefs: [[[1], [1]], [[2, 1], [1]], [[1, 3], [1]], [[2, 1], [1, 4]], [[2, 1], [1]]],
    helpRefs: [[3], [2, 3, 1], [1], [2]],
    stats: {
      3: [{ value: "About half", label: "of people with positive TPO antibodies go on to an underactive thyroid over around 20 years, says the British Thyroid Foundation.", ref: 4, picture: "half" }],
    },
  },
  "still-tired": {
    sectionRefs: [[[1, 5], [4], [6]], [[1], [1, 2]], [[3], [3]], [[1], [1, 4, 5]], [[2], [2]]],
    helpRefs: [[1], [1, 2], [1], [1], [1]],
    charts: {
      0: { kind: "range", title: "Most feel better, some do not", subtitle: "People who continue to have symptoms on levothyroxine, out of every 100", from: 5, to: 10, sources: "Source: Thyroid UK, Frequently asked questions for hypothyroidism" },
    },
  },
  "levothyroxine": {
    sectionRefs: [[[4, 2], [1, 4]], [[1], [1]], [[2, 3], [2, 3]], [[1], [1]], [[1], [2, 3]]],
    helpRefs: [[1], [1], [2, 3], [1], [1], [2]],
    stats: {
      1: [{ value: "30 to 60 minutes", label: "before breakfast, caffeine or other medicines is when the NHS says to take levothyroxine.", ref: 1, picture: "hours" }],
      2: [{ value: "Up to 1 in 2", label: "people in a US study did not take their levothyroxine regularly, says the British Thyroid Foundation.", ref: 3, picture: "half" }],
    },
  },
  "dose": {
    sectionRefs: [[[2, 1], [1]], [[2, 1], [3]], [[4, 3], [1]], [[3, 1], [1, 5]], [[1, 4]]],
    helpRefs: [[1], [5], [4], [2], [4]],
    charts: {
      0: { kind: "bars", title: "Doses vary widely", subtitle: "Daily levothyroxine doses, in micrograms", bars: [{ label: "Can be lower than", value: 50 }, { label: "Most people, from", value: 100, strong: true }, { label: "Most people, up to", value: 150, strong: true }, { label: "Can be up to", value: 300 }], max: 300, ticks: [0, 100, 200, 300], unit: " mcg", sources: "Source: British Thyroid Foundation, Hypothyroidism" },
    },
  },
  "interactions": {
    sectionRefs: [[[1], [3]], [[2, 3], [3, 4]], [[1], [1]], [[3], [3]]],
    helpRefs: [[1], [2, 3], [1], [3], [3]],
    stats: {
      1: [{ value: "4 hours", label: "at least between levothyroxine and calcium, iron or multivitamins, says the British Thyroid Foundation.", ref: 2, picture: "hours" }],
    },
  },
  "weight": {
    sectionRefs: [[[1, 2], [1]], [[1], [1]], [[3, 1], [1]], [[1], [1], [4]]],
    helpRefs: [[4], [1], [5], [1]],
    stats: {
      2: [{ value: "Usually under 10%", label: "of body weight is lost once an underactive thyroid is treated, says the British Thyroid Foundation.", ref: 1 }],
    },
  },
  "mood": {
    sectionRefs: [[[1, 2], [1, 3]], [[1]], [[1], [1]], [[1, 4], [1]]],
    helpRefs: [[1], [1], [1, 4], [1], [1], [1]],
  },
  "pregnancy": {
    sectionRefs: [[[2], [2, 3]], [[5], [1]], [[2, 3], [2, 1, 4], [2]], [[2], [2]], [[2], [2]]],
    helpRefs: [[1], [2, 3], [2, 3], [2], [2]],
    charts: {
      4: { kind: "range", title: "After some pregnancies", subtitle: "Pregnancies followed by postpartum thyroiditis, out of every 100", from: 5, to: 10, sources: "Source: British Thyroid Foundation, Pregnancy and fertility in thyroid disorders" },
    },
  },
  "checks": {
    sectionRefs: [[[1], [2]], [[3, 1, 4], [2]], [[5], [4]], [[5], [2]]],
    helpRefs: [[2], [2], [2], [4]],
    stats: {
      1: [{ value: "Once a year", label: "is how often TSH is usually checked once it is stable, says NICE.", ref: 1, picture: "calendar" }],
    },
  },
};
