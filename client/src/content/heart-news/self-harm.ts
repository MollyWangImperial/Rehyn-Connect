import type { NewsExtras } from "../ischaemic-news";
// Self-harm features: paragraph references (numbers are positions in each answer's own sources in self-harm-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [2]], [[3, 5], [2, 3]], [[2, 4], [3, 2, 6]], [[2], [4]], [[1, 3]]],
    helpRefs: [[4], [7], [7], [1], [8, 9]],
    charts: {
      2: { kind: "range", title: "How common among young people", subtitle: "Young people, out of every 100, who research suggests have self-harmed: between 1 in 10 and 1 in 4", from: 10, to: 25, sources: "Source: Royal College of Psychiatrists, Self-harm in children and young people" },
    },
  },
  "why": {
    sectionRefs: [[[1], [1, 3]], [[3], [4]], [[1], [1, 4]], [[2], [3]], [[1], [1, 2, 4]]],
    helpRefs: [[2], [5], [2], [4], [6, 7]],
  },
  "signs": {
    sectionRefs: [[[1, 3]], [[1]], [[1], [2], [1, 5]], [[2], [2]], [[1], [4, 1]]],
    helpRefs: [[1], [4], [1], [1], [6, 7]],
  },
  "urgent": {
    sectionRefs: [[[2], [1]], [[1], [1, 2]], [[3], [4, 5], [6, 3]], [[1], [7]], [[2], [4]]],
    helpRefs: [[2], [1], [3, 6], [8], [1, 2]],
    stats: {
      2: [{ value: "24 hours", label: "a day, 365 days a year, Samaritans is there to listen, free, on 116 123, says Samaritans.", ref: 4, picture: "hours" }],
    },
  },
  "talking-first": {
    sectionRefs: [[[1, 2], [6]], [[1, 2], [4, 5]], [[2], [2, 3], [1]], [[2, 1], [1]], [[2], [2, 3]]],
    helpRefs: [[1], [2], [2, 3], [1], [4], [7, 8]],
    stats: {
      1: [{ value: "1 in 10", label: "calls Samaritans answers is about self-harm, says Samaritans.", ref: 4, picture: "one-in", of: 10 }],
    },
  },
  "gp-therapy": {
    sectionRefs: [[[1], [1, 3]], [[1, 2], [2], [5]], [[2, 3], [1]], [[2], [3], [4]], [[3, 2], [3, 6]]],
    helpRefs: [[1], [1], [6], [2, 3], [3], [7, 8]],
    stats: {
      0: [{ value: "4 out of 10", label: "GP appointments involve mental health, Mind says, as quoted by Rethink Mental Illness.", ref: 3 }],
    },
    charts: {
      3: { kind: "range", title: "A course of talking therapy", subtitle: "Sessions of therapy for adults who self-harm, though more can be offered if needed", from: 4, to: 10, unit: "sessions", sources: "Source: Rethink Mental Illness, Self-harm" },
    },
  },
  "injuries": {
    sectionRefs: [[[5], [2, 5], [6]], [[1], [5], [3]], [[4], [3], [5]], [[3], [3], [3]]],
    helpRefs: [[5], [5], [1], [3], [3], [6, 7]],
  },
  "distraction": {
    sectionRefs: [[[4], [1]], [[1, 3], [2]], [[1, 5], [1, 5, 2], [4]], [[1, 6], [2], [1, 3]], [[5], [2]]],
    helpRefs: [[1], [1], [1, 5], [1, 2], [1], [7, 8]],
  },
  "triggers": {
    sectionRefs: [[[1], [4]], [[2], [2]], [[1], [3]], [[1], [4]], [[1], [5]]],
    helpRefs: [[1], [2], [1], [1], [4], [6, 7]],
  },
  "support": {
    sectionRefs: [[[1], [2, 3], [1]], [[4], [1]], [[5, 6, 1], [8, 7], [1]], [[1]], [[1], [1]]],
    helpRefs: [[2], [4], [1, 8], [1], [1], [9, 10]],
    stats: {
      0: [{ value: "More than 200", label: "Samaritans branches and locations across the UK and Ireland answer calls to 116 123, says Samaritans.", ref: 3 }],
    },
  },
  "carers": {
    sectionRefs: [[[5, 4], [3, 5]], [[2, 1], [6, 3], [2]], [[1, 2], [1]], [[1, 2], [2]], [[2, 3], [1, 8], [5, 7]]],
    helpRefs: [[2, 1], [1], [1, 2], [1, 2], [2, 8], [9, 10]],
    stats: {
      4: [{ value: "Over 18", label: "is all it takes to ask your council for a free carer's assessment, says the NHS.", ref: 8 }],
    },
  },
  "recovery": {
    sectionRefs: [[[1], [4, 5]], [[2, 1], [3]], [[2], [2]], [[6, 3], [4]], [[1, 3], [7], [3]]],
    helpRefs: [[1], [1, 3], [6, 3], [3], [7], [8, 9]],
  },
};
