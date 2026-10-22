import type { NewsExtras } from "../ischaemic-news";
// Lymphoedema features: paragraph references (numbers are positions in each answer's own sources in lymphoedema-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2, 3]], [[2], [2, 4], [6, 2]], [[4], [2, 3], [5]], [[7, 1], [1]], [[2, 1], [1, 5]]],
    helpRefs: [[3], [3], [2], [3], [2, 6]],
    stats: {
      3: [{ value: "More than 200,000", label: "people in the UK are thought to be affected by lymphoedema, says the NHS.", ref: 1 }],
    },
  },
  "causes": {
    sectionRefs: [[[2, 7], [2], [1]], [[4, 1], [3], [3, 1]], [[2], [2]], [[1], [3, 6]], [[2], [5, 1]]],
    helpRefs: [[1], [3], [3], [3], [2]],
    stats: {
      1: [{ value: "1 or 2", label: "lymph nodes are removed in a sentinel lymph node biopsy, which carries a lower risk than removing a whole group, says Macmillan.", ref: 3 }],
    },
  },
  "signs": {
    sectionRefs: [[[1, 2], [1, 2]], [[3], [4], [1, 2]], [[3, 2], [2]], [[2, 4], [2, 4]], [[2], [5, 4], [1]]],
    helpRefs: [[1], [1], [1, 2], [5], [1]],
    stats: {
      3: [{ value: "Around 6 weeks", label: "after an operation is when normal swelling around the scar usually settles, says the Lymphoedema Support Network.", ref: 4, picture: "calendar" }],
    },
  },
  "diagnosis": {
    sectionRefs: [[[2], [2], [2]], [[4], [3]], [[3], [1, 3], [3]], [[1, 2], [3, 4]]],
    helpRefs: [[2], [2], [2], [4], [3], [5]],
    stats: {
      1: [{ value: "0 to 3", label: "is the range of stages a specialist usually uses to describe how severe lymphoedema is, says Cancer Research UK.", ref: 3 }],
    },
  },
  "compression": {
    sectionRefs: [[[1, 2], [3, 2], [2]], [[1, 2, 3], [1, 5], [1, 4]], [[1], [1, 2], [1, 2, 6]], [[1, 2], [1], [1]], [[1, 2], [1], [1]]],
    helpRefs: [[1], [1], [1, 2], [1, 2], [1], [1, 2]],
    stats: {
      4: [{ value: "At least 2", label: "garments are what you get, so one can be in the wash while you wear the other, says Macmillan.", ref: 1 }],
    },
    charts: {
      4: { kind: "range", title: "How long a garment lasts", subtitle: "Months each compression garment should last when worn every day, as Macmillan says", from: 3, to: 6, unit: "months", sources: "Source: Macmillan, Compression treatment for lymphoedema" },
    },
  },
  "skin-care": {
    sectionRefs: [[[1, 3], [2], [1]], [[1, 2, 5], [1, 2], [5]], [[1, 4], [1, 2, 3], [1, 3]], [[1], [1], [6]], [[1, 2, 3], [1, 3]]],
    helpRefs: [[1, 2, 5], [1, 2], [5], [1], [1], [6]],
    stats: {
      2: [{ value: "At least SPF 30", label: "with 4 or 5 stars is the sunscreen Cancer Research UK suggests, used with shade and clothing.", ref: 2 }],
    },
  },
  "massage": {
    sectionRefs: [[[1], [2, 1]], [[1, 2], [2], [1]], [[1, 3], [1, 2], [2, 1]], [[1, 5], [1]], [[2, 1]]],
    helpRefs: [[1], [1], [2], [1], [2], [4]],
    stats: {
      2: [{ value: "About 20 minutes", label: "twice a day is the usual routine for simple lymphatic drainage, says Cancer Research UK, though it can vary.", ref: 2, picture: "hours" }],
    },
  },
  "exercise": {
    sectionRefs: [[[2, 1], [2], [1]], [[2, 3], [2, 1], [2, 4]], [[1], [1, 2], [2]], [[2, 1], [2, 1], [2, 1]], [[2], [1, 5], [1, 5]]],
    helpRefs: [[2], [2], [2, 4], [2], [2], [1]],
    stats: {
      3: [{ value: "At least once an hour", label: "get up and move about if you have leg swelling and can, says Macmillan.", ref: 1, picture: "hours" }],
    },
    charts: {
      2: { kind: "range", title: "How many repeats", subtitle: "Times to repeat each lymphoedema exercise, as Cancer Research UK suggests", from: 5, to: 10, unit: "times each exercise", sources: "Source: Cancer Research UK, Exercise, positioning and lymphoedema" },
    },
  },
  "cellulitis": {
    sectionRefs: [[[2], [5, 1], [5]], [[5, 3], [2, 4, 3]], [[3], [4], [3, 5]], [[1], [1], [1]], [[4, 1, 3], [5, 3, 4], [4]]],
    helpRefs: [[3], [3], [1], [4, 1], [5], [4]],
    stats: {
      2: [{ value: "111", label: "is the NHS urgent advice number to call if signs of cellulitis start in the evening or at the weekend, says Macmillan.", ref: 3 }],
      4: [{ value: "14 days", label: "is how long you are usually on antibiotics for an infection with lymphoedema, says Cancer Research UK.", ref: 4, picture: "calendar" }],
    },
  },
  "travel": {
    sectionRefs: [[[1], [7, 1]], [[3], [2], [3, 1]], [[2, 5], [4, 5, 1], [2, 3]], [[1], [1], [1, 6]]],
    helpRefs: [[7], [3], [1, 5], [1, 2], [1], [1]],
    stats: {
      2: [{ value: "2 hours", label: "before you fly and after you land is how long to wear your compression garment, says the Lymphoedema Support Network.", ref: 5, picture: "hours" }],
    },
  },
  "everyday": {
    sectionRefs: [[[1], [1, 2], [1]], [[1], [1]], [[2], [4], [4]], [[3], [1]], [[5], [5]]],
    helpRefs: [[1, 2], [1], [2], [4], [3], [5]],
  },
  "mood": {
    sectionRefs: [[[1], [2, 6], [1]], [[1], [1], [11, 4]], [[4, 1, 3], [2, 1, 3]], [[4, 5], [3, 2, 4], [7]], [[5, 10], [8, 9], [8]]],
    helpRefs: [[1], [1], [4, 1], [5], [7, 5], [10]],
    stats: {
      3: [{ value: "More than 2 weeks", label: "of low feelings is the time to talk to your doctor or nurse, says Macmillan.", ref: 5, picture: "calendar" }],
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 10 }],
    },
  },
};
