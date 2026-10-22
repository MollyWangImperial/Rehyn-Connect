import type { NewsExtras } from "../ischaemic-news";
// Binge eating disorder features: paragraph references (numbers are positions in each answer's own sources in binge-eating-answers.ts), charts and big figures, all checked on 22 October 2026. No weights, BMI figures, calorie numbers or food amounts, following Beat's media guidelines.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [2], [7, 2]], [[5], [1, 2]], [[2, 1], [2, 4], [4, 6]], [[3, 1], [1, 4]]],
    helpRefs: [[1], [6], [1], [1], [6]],
    stats: {
      2: [{ value: "Around 1 in 25", label: "people in the UK experience symptoms of binge eating disorder, says NHS inform.", ref: 4, picture: "one-in", of: 25 }],
    },
  },
  "signs": {
    sectionRefs: [[[1, 3], [1, 2]], [[1, 2], [2]], [[2, 4], [1, 5], [7]], [[2], [2]], [[2], [2]]],
    helpRefs: [[2], [2], [1], [6], [6]],
    stats: {
      2: [{ value: "Around 1 in 4", label: "people with an eating disorder are thought to be male, says Beat.", ref: 7, picture: "one-in-four" }],
    },
  },
  "causes": {
    sectionRefs: [[[1, 2], [2]], [[1], [1]], [[3, 4], [4, 3], [4]], [[6, 3], [6]], [[5], [7]]],
    helpRefs: [[5], [6], [7], [4], [8]],
  },
  "getting-help": {
    sectionRefs: [[[1, 2], [3], [8]], [[2], [3, 2], [2]], [[1, 2], [4, 5], [3]], [[1, 6], [2]], [[3], [3, 7]]],
    helpRefs: [[1, 2], [2], [3], [2], [1, 2], [2, 3]],
  },
  "guided-self-help": {
    sectionRefs: [[[1, 2], [3, 4]], [[1], [2, 4], [5, 3]], [[7], [6]], [[2, 1], [6]], [[1, 8]]],
    helpRefs: [[1], [2], [7], [6], [2], [8]],
    charts: {
      1: { kind: "range", title: "Guided self-help sessions", subtitle: "Short supportive sessions, of about 20 minutes each, that people generally have with a practitioner", from: 4, to: 9, unit: "sessions", sources: "Source: NICE, Binge-eating disorder (information for the public)" },
    },
    stats: {
      3: [{ value: "After 4 weeks", label: "if guided self-help has not helped, you may be offered CBT, say NICE and the NHS.", ref: 2, picture: "calendar" }],
    },
  },
  "cbt": {
    sectionRefs: [[[4, 3], [5]], [[1, 2], [3, 2]], [[1], [1, 2]], [[2, 3], [1]], [[3, 5, 6], [3]]],
    helpRefs: [[3], [4], [1], [4], [3]],
    stats: {
      1: [{ value: "About 90 minutes", label: "is how long each group CBT session usually lasts, say the NHS and NICE.", ref: 1, picture: "hours" }],
    },
  },
  "regular-eating": {
    sectionRefs: [[[1], [2], [2]], [[3, 4], [2], [2]], [[2], [2]], [[2, 5], [2, 5], [5]], [[2], [6, 3]]],
    helpRefs: [[2], [2], [2], [2], [2, 5], [3]],
    stats: {
      2: [{ value: "About 15 minutes", label: "a day is about how long keeping a record takes, at 2 or 3 minutes an entry, says NHS inform.", ref: 2, picture: "hours" }],
    },
  },
  "medicines": {
    sectionRefs: [[[2, 1, 3], [4]], [[1], [1], [6]], [[5], [5], [5]], [[5], [6]]],
    helpRefs: [[1, 2], [6], [5], [5], [5], [5]],
    stats: {
      2: [{ value: "Up to 8 weeks", label: "for an antidepressant to work fully, though most start to have an effect in 1 to 2 weeks, says the NHS.", ref: 5, picture: "calendar" }],
    },
  },
  "feelings": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[2], [2]], [[3], [2, 4], [4]], [[5], [6, 8, 7], [6]]],
    helpRefs: [[2], [2], [2], [4], [6], [8, 7]],
    stats: {
      4: [{ value: "24 hours", label: "a day, every day, Samaritans (116 123) and the Shout text line (85258) are open, says the NHS.", ref: 7, picture: "hours" }],
    },
  },
  "body-image": {
    sectionRefs: [[[1], [1]], [[5, 3], [2]], [[1], [1], [4]], [[2], [1, 2]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [2], [5], [6]],
  },
  "family": {
    sectionRefs: [[[1], [2], [2]], [[2, 3], [3], [3]], [[3], [3], [3, 4]], [[3, 5], [7, 8], [6, 9]]],
    helpRefs: [[1], [2], [3], [3], [3], [5, 6]],
  },
  "support": {
    sectionRefs: [[[1], [1], [1]], [[1], [2, 3]], [[4], [5]], [[6]], [[1], [7, 10, 8]]],
    helpRefs: [[1], [1], [2], [4], [5], [1, 9]],
    stats: {
      0: [{ value: "3pm to 8pm", label: "Monday to Friday, Beat's phone Helplines are open. Calls are free from UK landlines and mobiles, says Beat.", ref: 1, picture: "hours" }],
    },
  },
};
