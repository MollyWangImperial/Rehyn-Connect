import type { NewsExtras } from "../ischaemic-news";
// Stomach cancer features: paragraph references (numbers are positions in each answer's own sources in stomach-cancer-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-you-had": {
    sectionRefs: [[[1], [2]], [[3], [3], [4, 5]], [[6], [6]], [[7], [8]], [[1], [9], [10]]],
    helpRefs: [[1], [11], [1], [9], [9], [10]],
    stats: {
      2: [{ value: "2 to 3 months", label: "of chemotherapy usually comes before the operation, and again after it, says Macmillan.", ref: 6, picture: "calendar" }],
    },
    charts: {
      3: { kind: "range", title: "HER2-positive stomach cancer", subtitle: "People with stomach cancer, out of every 100, who have a HER2-positive cancer that trastuzumab can work for", from: 10, to: 15, sources: "Source: Macmillan, Targeted therapies and immunotherapy for stomach cancer" },
    },
  },
  "stage": {
    sectionRefs: [[[1, 2], [1, 2]], [[2], [2, 1], [2]], [[2], [2, 3]], [[4], [4]], [[2, 5], [5, 2]]],
    helpRefs: [[2], [4], [5], [5], [2]],
    charts: {
      1: { kind: "bars", title: "Lymph nodes and the N stage", subtitle: "The most nearby lymph nodes with cancer cells at each N stage (N3b: 16 or more)", bars: [{ label: "N1: 1 to 2 nodes", value: 2 }, { label: "N2: 3 to 6 nodes", value: 6 }, { label: "N3a: 7 to 15 nodes", value: 15 }, { label: "N3b: 16 or more", value: 16, strong: true }], max: 16, ticks: [0, 4, 8, 12, 16], unit: " nodes", sources: "Sources: Macmillan, Staging and grading of stomach cancer; Cancer Research UK, TNM staging for stomach cancer" },
    },
  },
  "follow-up": {
    sectionRefs: [[[1]], [[2], [2]], [[2], [2]], [[2], [1, 3], [4]], [[5], [5]]],
    helpRefs: [[5], [5], [2], [2], [1], [5]],
    stats: {
      4: [{ value: "Within 12 months", label: "of being diagnosed is when a cancer care review with your GP practice is usually done, says Macmillan.", ref: 5, picture: "calendar" }],
    },
  },
  "h-pylori": {
    sectionRefs: [[[1, 2], [1, 3]], [[3], [4, 2]], [[1], [1, 2], [1, 5]], [[2], [5]], [[1], [6]]],
    helpRefs: [[4], [2], [2], [5], [6]],
    stats: {
      0: [{ value: "Up to 2 in 5", label: "people in the UK have H pylori in their stomach; for most it causes no problems, says Guts UK.", ref: 2 }],
    },
    charts: {
      0: { kind: "donut", title: "A common cause", subtitle: "Stomach cancers in the UK, out of every 100", value: 40, prefix: "Around", subject: "stomach cancers in the UK", label: "are caused by infection with H pylori", sources: "Source: Cancer Research UK, Risks and causes of stomach cancer" },
    },
  },
  "eating": {
    sectionRefs: [[[1], [1]], [[2], [3, 2]], [[4, 1], [5, 1]], [[4], [5, 1]], [[1], [1]]],
    helpRefs: [[4], [1], [5], [4], [1], [1]],
    stats: {
      1: [{ value: "48 hours", label: "after surgery is how long you usually go without anything to eat, says Macmillan.", ref: 2, picture: "hours" }],
      2: [{ value: "About every 2 hours", label: "is how often to have smaller meals, splitting up a normal day's food, says Cancer Research UK.", ref: 4, picture: "hours" }],
    },
  },
  "dumping": {
    sectionRefs: [[[1, 2]], [[1], [1, 3]], [[1], [1, 3]], [[1, 3], [1], [1, 3]], [[1], [3]]],
    helpRefs: [[1], [1], [1, 3], [1], [3], [1]],
    stats: {
      1: [{ value: "Within 30 minutes", label: "of eating a meal is when early dumping syndrome can happen, says Macmillan.", ref: 1, picture: "hours" }],
      3: [{ value: "15 to 30 minutes", label: "is the gap Macmillan suggests leaving between eating and drinking, and the time to rest after a meal.", ref: 1, picture: "hours" }],
    },
  },
  "vitamins": {
    sectionRefs: [[[1], [2, 5]], [[1, 2], [2, 1]], [[3], [3]], [[1], [4, 5], [5]], [[1]]],
    helpRefs: [[2, 1], [1], [4, 5], [3], [5], [1]],
    stats: {
      1: [{ value: "Every 3 months", label: "is how often vitamin B12 injections are usually given after stomach surgery, says Cancer Research UK.", ref: 2, picture: "calendar" }],
    },
  },
  "weight": {
    sectionRefs: [[[1], [2]], [[2], [2, 3], [3]], [[2], [2]], [[4], [1]]],
    helpRefs: [[2], [2], [3], [2], [2], [1]],
    stats: {
      3: [{ value: "3 to 6 months", label: "is the time over which losing a lot of weight, usually a tenth or more of your body weight, may lead your team to suggest tube feeding if supplements have not helped, says Macmillan.", ref: 4, picture: "calendar" }],
    },
  },
  "fatigue": {
    sectionRefs: [[[1, 2], [3, 4], [5]], [[6, 1], [5, 1]], [[7], [2, 7]], [[5], [5]], [[7, 5], [7, 4]]],
    helpRefs: [[7], [2], [7], [5], [1], [1]],
    stats: {
      2: [{ value: "At least 8 weeks", label: "without heavy lifting, vacuuming or gardening gives your wound time to heal, says Macmillan.", ref: 7, picture: "calendar" }],
      4: [{ value: "4 to 6 weeks", label: "after the operation is when most people are ready to drive, says Macmillan.", ref: 7, picture: "calendar" }],
    },
  },
  "social-eating": {
    sectionRefs: [[[1, 2], [3]], [[3], [4], [5, 6]], [[1, 7], [7], [8, 1]], [[3], [3, 9]], [[1], [10, 11]]],
    helpRefs: [[3], [4, 5], [1], [7], [3], [1]],
    stats: {
      1: [{ value: "12 languages", label: "are available for the OPA's free restaurant cards, to show discreetly to waiting staff.", ref: 5 }],
    },
  },
  "work": {
    sectionRefs: [[[1, 2], [1]], [[3], [4], [4]], [[3], [4]], [[5], [6], [6]], [[7], [8]]],
    helpRefs: [[3], [4], [3], [5], [6], [7]],
    stats: {
      0: [{ value: "From diagnosis", label: "you meet the definition of disability under the Equality Act 2010 if you have cancer, says the government.", ref: 2, picture: "calendar" }],
      3: [{ value: "Up to 28 weeks", label: "of Statutory Sick Pay can be paid by your employer, says Macmillan.", ref: 5, picture: "calendar" }],
    },
  },
  "mood": {
    sectionRefs: [[[1, 2], [2], [3]], [[4], [4]], [[5], [5], [5]], [[5, 6, 7], [8, 5]], [[5, 9], [10, 11], [10]]],
    helpRefs: [[5], [5], [8, 5], [6, 7], [9], [10]],
    stats: {
      2: [{ value: "More than 2 weeks", label: "of low feelings is the time to talk to your doctor or nurse, says Macmillan.", ref: 5, picture: "calendar" }],
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 9 }],
    },
  },
};
