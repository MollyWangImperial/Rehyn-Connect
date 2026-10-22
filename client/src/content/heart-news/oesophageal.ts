import type { NewsExtras } from "../ischaemic-news";
// Oesophageal cancer features: paragraph references (numbers are positions in each answer's own sources in oesophageal-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-you-had": {
    sectionRefs: [[[1], [1]], [[3, 4], [4], [3]], [[5], [5, 6], [10]], [[7], [1]], [[9], [8]]],
    helpRefs: [[1], [2], [7], [9], [1]],
    stats: {
      1: [{ value: "About 2 weeks", label: "is how long you may stay in hospital after surgery to the oesophagus, says Macmillan. Some people stay longer.", ref: 3, picture: "calendar" }],
      2: [{ value: "2 to 3 months", label: "of chemotherapy is usual before the operation, and again after it, when it is given both before and after surgery, says Macmillan.", ref: 5, picture: "calendar" }],
    },
  },
  "stage": {
    sectionRefs: [[[1, 2], [1], [2, 1]], [[3], [3, 4]], [[1], [1]], [[3], [1]], [[3, 1], [3]]],
    helpRefs: [[3], [5], [5], [5], [3]],
    stats: {
      2: [{ value: "5 main stages", label: "make up the number staging system, from stage 0 to stage 4, says Cancer Research UK.", ref: 1 }],
    },
  },
  "follow-up": {
    sectionRefs: [[[1], [5]], [[1, 2], [1]], [[1], [1]], [[1, 4], [4, 3]], [[3], [2]]],
    helpRefs: [[3], [3], [1], [1], [3], [3]],
  },
  "swallowing": {
    sectionRefs: [[[3], [5], [4, 7]], [[2, 1], [2]], [[1, 3], [1, 4]], [[2], [2, 8, 1], [2]], [[2, 3], [2, 6]]],
    helpRefs: [[4], [2], [2], [2], [2], [6]],
    stats: {
      1: [{ value: "About 30 minutes", label: "is how long fitting a stent usually takes, says Cancer Research UK.", ref: 2, picture: "hours" }],
      3: [{ value: "An hour", label: "after your meal is how long to keep sitting upright if you have a stent, says Cancer Research UK.", ref: 2, picture: "hours" }],
    },
  },
  "eating": {
    sectionRefs: [[[3], [3]], [[1], [1]], [[1], [2]], [[2], [1]], [[2, 4], [5]]],
    helpRefs: [[1], [1, 2], [1], [1], [1, 3], [4]],
    stats: {
      0: [{ value: "24 to 48 hours", label: "after surgery is when you can usually start sipping water, says Cancer Research UK.", ref: 3, picture: "hours" }],
      4: [{ value: "Up to 2 years", label: "is how long it takes some people for their eating to return to normal, says Cancer Research UK.", ref: 2, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "Little and often", subtitle: "Smaller meals a day that can help after surgery to remove the oesophagus and part of the stomach", from: 6, to: 8, unit: "small meals a day", sources: "Source: Cancer Research UK, Eating problems with oesophageal cancer" },
    },
  },
  "dumping": {
    sectionRefs: [[[1], [2]], [[1, 3], [1]], [[1], [1, 2]], [[1], [1, 2], [1, 2]], [[1], [2]]],
    helpRefs: [[1], [1], [1], [1, 2], [1], [2]],
    stats: {
      0: [{ value: "1 in 2", label: "people have dumping syndrome after an oesophagectomy, says Guts UK. It is a very common side effect.", ref: 2, picture: "one-in", of: 2 }],
    },
    charts: {
      3: { kind: "range", title: "A gap before drinking", subtitle: "Minutes to leave between eating and drinking, to help prevent dumping syndrome", from: 15, to: 30, unit: "minutes", sources: "Source: Macmillan Cancer Support, Dumping syndrome" },
    },
  },
  "weight": {
    sectionRefs: [[[1], [1]], [[1], [2]], [[1], [1]], [[1], [4]], [[3], [1]]],
    helpRefs: [[1], [1], [1], [1], [1], [4]],
    stats: {
      3: [{ value: "At least twice a day", label: "is how often to aim for some soft meat, Quorn, tofu, fish, beans or eggs, says Cancer Research UK.", ref: 1, picture: "calendar" }],
    },
  },
  "reflux": {
    sectionRefs: [[[1], [2, 4]], [[3], [5, 7]], [[3], [4, 6], [5]], [[1, 2], [5]], [[5, 7]]],
    helpRefs: [[3], [3, 5], [3, 5], [7], [1, 2], [5]],
    stats: {
      2: [{ value: "10 to 20cm", label: "is how far the NHS suggests raising the head of the bed for reflux in general.", ref: 5 }],
    },
    charts: {
      1: { kind: "range", title: "Stay upright after eating", subtitle: "Minutes to try not to lie down after a meal", from: 30, to: 60, unit: "minutes", sources: "Source: Macmillan Cancer Support, Eating after treatment for oesophageal cancer" },
    },
  },
  "fatigue": {
    sectionRefs: [[[1, 7], [4, 6]], [[2, 5], [2, 5]], [[3], [3]], [[3], [3], [3]], [[3], [3]]],
    helpRefs: [[3], [3], [2], [3], [3], [3]],
    stats: {
      2: [{ value: "0 to 10", label: "is the scale your team may use to ask how severe your fatigue is, where 10 is the worst possible, says Macmillan.", ref: 3 }],
    },
  },
  "social-eating": {
    sectionRefs: [[[1, 2], [7]], [[3], [3, 4]], [[6], [1, 6]], [[5]], [[1, 8], [7]]],
    helpRefs: [[3], [6], [1], [1], [5], [7]],
    stats: {
      1: [{ value: "12 languages", label: "are offered for the OPA's restaurant cards, from English and French to Korean and Mandarin Chinese.", ref: 4 }],
    },
  },
  "work": {
    sectionRefs: [[[1], [6]], [[1], [1], [1]], [[2], [2]], [[3, 1], [1], [5]], [[4], [5]]],
    helpRefs: [[1], [1], [2], [3, 1], [1], [5]],
    stats: {
      3: [{ value: "7 days a week", label: "Macmillan's free line on 0808 808 0000 is open, 8am to 8pm, including for help with money and work.", ref: 3, picture: "calendar" }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [2]], [[3], [8, 3]], [[2], [2], [2]], [[4], [5, 2]], [[2, 7], [6]]],
    helpRefs: [[2], [4], [5], [2], [7], [6]],
    stats: {
      2: [{ value: "More than 2 weeks", label: "of low feelings is the point to talk to your doctor or nurse, says Macmillan.", ref: 2, picture: "calendar" }],
      4: [{ value: "116 123", label: "is the free Samaritans number, any time, day or night.", ref: 7 }],
    },
  },
};
