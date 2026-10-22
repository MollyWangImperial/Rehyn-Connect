import type { NewsExtras } from "../ischaemic-news";
// Ovarian cancer features: paragraph references (numbers are positions in each answer's own sources in ovarian-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-you-had": {
    sectionRefs: [[[1], [2]], [[3, 4], [4, 1]], [[5], [5], [5, 4]], [[2], [6]], [[7], [7, 1]]],
    helpRefs: [[2], [1], [7], [7], [2]],
    charts: {
      2: { kind: "range", title: "Time to recover first", subtitle: "Weeks after surgery before chemotherapy usually starts: about 4, and up to 12", from: 4, to: 12, unit: "weeks after surgery", sources: "Source: Macmillan Cancer Support, Chemotherapy for ovarian cancer" },
    },
    stats: {
      2: [{ value: "6 cycles", label: "is the length of most courses of chemotherapy, says Macmillan Cancer Support.", ref: 5, picture: "calendar" }],
      3: [{ value: "Every 3 weeks", label: "is how often bevacizumab is usually given, into a vein as a drip, says Macmillan Cancer Support.", ref: 6, picture: "calendar" }],
    },
  },
  "stage": {
    sectionRefs: [[[1, 2], [2, 1]], [[1], [1]], [[1], [1]], [[2, 3], [2, 3], [3, 2]], [[1, 3], [3]]],
    helpRefs: [[3], [4], [4], [3]],
    stats: {
      0: [{ value: "4 stages", label: "numbered 1 to 4, from the earliest to the most advanced, are used for ovarian cancer, says Cancer Research UK.", ref: 2 }],
    },
  },
  "follow-up": {
    sectionRefs: [[[1], [2]], [[1, 2], [1, 2]], [[1, 2], [1], [1]], [[1, 2], [1]], [[3, 2], [3, 2]]],
    helpRefs: [[1], [1], [1], [1], [3]],
    stats: {
      1: [{ value: "Every 3 months", label: "is how often follow-up appointments tend to be in the first few years, says Target Ovarian Cancer.", ref: 1, picture: "calendar" }],
      2: [{ value: "Under 35", label: "units per millilitre is usually a normal CA125 level, says Target Ovarian Cancer.", ref: 1 }],
    },
  },
  "genes": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[2], [2], [3]], [[4], [4], [4]]],
    helpRefs: [[1], [2], [2], [4], [4]],
    charts: {
      0: { kind: "bars", title: "When genes play a part", subtitle: "People who develop ovarian cancer, out of every 100", bars: [{ label: "Linked to an inherited gene variant (up to)", value: 20 }, { label: "With a BRCA1 or BRCA2 variant (about)", value: 15, strong: true }], sources: "Source: Target Ovarian Cancer, Hereditary ovarian cancer" },
    },
    stats: {
      2: [{ value: "Within 12 weeks", label: "is when you will usually find out your genetic test result, says Target Ovarian Cancer.", ref: 2, picture: "calendar" }],
      3: [{ value: "1 in 2", label: "is the chance each of your children and full siblings has of carrying the same gene variant, says Target Ovarian Cancer.", ref: 4, picture: "one-in", of: 2 }],
    },
  },
  "surgery-recovery": {
    sectionRefs: [[[1], [2, 3]], [[1], [2, 1], [2]], [[1, 2], [1]], [[2], [3, 1]], [[3], [3], [2]]],
    helpRefs: [[1], [2, 1], [1], [1], [1, 2], [3]],
    charts: {
      1: { kind: "range", title: "A recovery measured in weeks", subtitle: "Weeks that recovery at home can last after ovarian cancer surgery", from: 6, to: 12, unit: "weeks", sources: "Source: Ovarian Cancer Action, Recovering from ovarian cancer surgery" },
    },
    stats: {
      0: [{ value: "3 to 4 days", label: "after surgery is when most women are discharged from hospital, says Ovarian Cancer Action.", ref: 1, picture: "calendar" }],
      2: [{ value: "At least 8 weeks", label: "off work is what you will need after ovarian cancer surgery, says Ovarian Cancer Action.", ref: 1, picture: "calendar" }],
    },
  },
  "maintenance": {
    sectionRefs: [[[1, 2], [1]], [[2, 3], [3], [1]], [[2], [2]], [[2, 4], [2]], [[2, 3], [2]]],
    helpRefs: [[2], [3], [3], [2], [2], [1]],
    charts: {
      1: { kind: "range", title: "When the tablets start", subtitle: "Weeks after finishing chemotherapy that PARP inhibitors usually start", from: 8, to: 12, unit: "weeks after chemotherapy", sources: "Source: Target Ovarian Cancer, PARP inhibitor treatment side effects" },
    },
    stats: {
      3: [{ value: "Once a month", label: "is how often you have blood tests while taking a PARP inhibitor, says Target Ovarian Cancer.", ref: 4, picture: "calendar" }],
    },
  },
  "menopause": {
    sectionRefs: [[[1, 3], [2, 1]], [[1], [1, 2]], [[1], [1], [1]], [[1], [1]], [[1], [1]]],
    helpRefs: [[1], [1, 2], [2], [1], [1], [1]],
    stats: {
      0: [{ value: "45 to 55", label: "is the age range when the menopause usually happens naturally, says Target Ovarian Cancer.", ref: 1 }],
      2: [{ value: "Within 10 years", label: "of the menopause is when starting HRT also reduces the future risk of heart disease, says Target Ovarian Cancer.", ref: 1, picture: "calendar" }],
    },
  },
  "fatigue": {
    sectionRefs: [[[1], [1]], [[1], [2]], [[1], [1]], [[1, 3], [1], [1, 2]]],
    helpRefs: [[1, 2], [1], [2], [1], [1, 2], [1]],
    stats: {
      2: [{ value: "0 to 10", label: "is the scale your nurse may use to score fatigue, from none to the worst possible, says Macmillan Cancer Support.", ref: 1 }],
    },
  },
  "bowels-bladder": {
    sectionRefs: [[[2, 1, 3], [4]], [[1, 3], [1]], [[1], [1]], [[5, 6], [5]], [[7], [7, 8]]],
    helpRefs: [[1], [1], [1], [1], [5], [1]],
    charts: {
      1: { kind: "range", title: "Keep drinking", subtitle: "Litres of fluid a day suggested to help with bladder and bowel problems, unless your team says otherwise", from: 2, to: 3, unit: "litres a day", sources: "Source: Macmillan Cancer Support, Bladder and bowel problems" },
    },
    stats: {
      3: [{ value: "6 to 8 weeks", label: "after surgery is about when a stoma settles down in size, so bags can be cut to fit, says Target Ovarian Cancer.", ref: 5, picture: "calendar" }],
    },
  },
  "relationships": {
    sectionRefs: [[[1], [1]], [[2], [1, 3]], [[1], [1]], [[1], [4]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1, 4], [1]],
    stats: {
      1: [{ value: "At least 4 to 6 weeks", label: "is how long it usually takes for scars to heal and discharge to stop before sex after a hysterectomy, says the NHS.", ref: 2, picture: "calendar" }],
    },
  },
  "work": {
    sectionRefs: [[[1, 4], [1, 2]], [[3, 4], [4]], [[2], [2]], [[4], [5], [4]]],
    helpRefs: [[3], [4], [2], [4], [5], [4]],
    stats: {
      1: [{ value: "At least 8 weeks", label: "off work is what you will need after ovarian cancer surgery, says Ovarian Cancer Action.", ref: 3, picture: "calendar" }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [2, 3]], [[4], [4]], [[5], [5]], [[5, 4], [4, 6, 7]], [[8, 9, 10], [8]]],
    helpRefs: [[4], [4], [5], [4], [9, 8], [8]],
  },
};
