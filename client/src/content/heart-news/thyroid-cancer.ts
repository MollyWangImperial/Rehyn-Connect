import type { NewsExtras } from "../ischaemic-news";
// Thyroid cancer features: paragraph references (numbers are positions in each answer's own sources in thyroid-cancer-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-you-had": {
    sectionRefs: [[[1], [1, 2]], [[1, 3], [1, 3]], [[1, 5], [1, 3, 2]], [[1, 4], [4, 6]], [[2, 1], [1]]],
    helpRefs: [[1], [1], [5], [4], [2]],
    stats: {
      3: [{ value: "Up to 3 months", label: "after surgery is how long you usually wait to have radioactive iodine, says Macmillan.", ref: 4, picture: "calendar" }],
    },
  },
  "types": {
    sectionRefs: [[[1], [1, 6]], [[1, 2], [1]], [[2, 1], [1, 2, 5], [2, 5]], [[3], [3, 1], [5]], [[4, 1], [1]]],
    helpRefs: [[1], [7], [3], [5], [2]],
    charts: {
      1: { kind: "donut", title: "The most common type", subtitle: "Thyroid cancers in the UK, out of every 100", value: 80, prefix: "About", subject: "thyroid cancers", label: "are papillary (8 in 10)", sources: "Source: Macmillan, Papillary and follicular thyroid cancer" },
    },
    stats: {
      3: [{ value: "1 in 4", label: "people with medullary thyroid cancer have a rare inherited condition called MEN2, says Macmillan.", ref: 3, picture: "one-in", of: 4 }],
    },
  },
  "follow-up": {
    sectionRefs: [[[1, 2], [2], [5]], [[2], [2]], [[3, 5, 1], [3, 2], [3]], [[1], [4, 6], [4, 6]], [[2, 1], [2]]],
    helpRefs: [[2], [1], [3], [1], [2]],
    stats: {
      0: [{ value: "At least 5 years", label: "of follow-up if the risk is low, at least 10 years if it is intermediate, and for life if it is high, says Cancer Research UK.", ref: 2, picture: "calendar" }],
      1: [{ value: "Up to 4 weeks", label: "for tumour marker results to come back from the specialist lab, says Cancer Research UK.", ref: 2, picture: "calendar" }],
    },
    charts: {
      3: { kind: "range", title: "When the risk is looked at again", subtitle: "Months after radioiodine for the neck ultrasound and thyroglobulin test", from: 6, to: 12, unit: "months", sources: "Source: Macmillan, Thyroidectomy; Butterfly Thyroid Cancer Trust, Dynamic risk stratification" },
    },
  },
  "radioiodine": {
    sectionRefs: [[[1, 4], [2, 1]], [[1], [1], [1, 2]], [[1], [1], [1]], [[1, 2], [1]], [[1], [1]]],
    helpRefs: [[1], [1], [1, 3], [1], [1]],
    stats: {
      1: [{ value: "1 to 2 weeks", label: "of a low iodine diet is usual before treatment, says Macmillan.", ref: 1, picture: "calendar" }],
      4: [{ value: "7 days", label: "is how long to carry the hospital's written information about precautions after treatment, says Macmillan.", ref: 1, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "A short stay on your own", subtitle: "Days usually spent in a room on your own in hospital after treatment", from: 1, to: 3, unit: "days", sources: "Source: Macmillan, Radioactive iodine for thyroid cancer" },
    },
  },
  "tablets": {
    sectionRefs: [[[1, 3], [1]], [[1, 5], [1, 3], [3]], [[2, 1], [2, 1], [1]], [[2], [1, 2], [2]], [[4, 3], [4, 1]]],
    helpRefs: [[2], [1], [1], [3, 4], [2], [2]],
    stats: {
      1: [{ value: "The first 2 years", label: "are when keeping TSH very low is most important, says Macmillan.", ref: 1, picture: "calendar" }],
      2: [{ value: "At least 4 hours", label: "between levothyroxine and calcium or zinc supplements, says Macmillan.", ref: 1, picture: "hours" }],
    },
    charts: {
      2: { kind: "range", title: "On an empty stomach", subtitle: "Minutes before your first meal, caffeine or other medicines to take levothyroxine", from: 30, to: 60, unit: "minutes", sources: "Source: NHS, Levothyroxine" },
    },
  },
  "voice-calcium": {
    sectionRefs: [[[1, 3], [2, 1]], [[4, 5], [2, 1]], [[1, 3], [1, 3], [2]], [[2, 1], [4]]],
    helpRefs: [[2, 1], [1, 3], [2], [4], [6]],
    stats: {
      1: [{ value: "4", label: "small parathyroid glands, each about the size of a pea, keep the calcium in your blood normal, says the Butterfly Thyroid Cancer Trust.", ref: 4 }],
    },
  },
  "scar": {
    sectionRefs: [[[2, 1], [1, 2]], [[3, 4], [4, 1], [4, 3]], [[3, 4, 1], [4, 1]], [[5, 1], [5, 1]]],
    helpRefs: [[3, 4], [4], [1], [4, 1], [4], [1, 5]],
    stats: {
      0: [{ value: "About 4 to 6cm", label: "is the usual length of the scar, which usually sits in a natural skin fold, says Macmillan.", ref: 1 }],
      2: [{ value: "3 months", label: "of the neck exercises you are shown, even if your movement is back, advises Macmillan.", ref: 4, picture: "calendar" }],
    },
    charts: {
      0: { kind: "range", title: "A scar that fades", subtitle: "Months after surgery for the scar to become quite faint", from: 6, to: 12, unit: "months", sources: "Source: Cancer Research UK, After thyroid cancer surgery" },
    },
  },
  "fatigue": {
    sectionRefs: [[[1], [4]], [[5], [5]], [[2, 3], [3, 6]], [[3], [3], [3, 4]], [[3], [7, 4]]],
    helpRefs: [[3], [4], [3], [3], [3], [5]],
    stats: {
      0: [{ value: "A few months", label: "is how long it might take to find the right dose of thyroid hormones, says Macmillan.", ref: 1, picture: "calendar" }],
    },
  },
  "pregnancy": {
    sectionRefs: [[[1], [1, 2, 6]], [[1], [1]], [[3], [4], [5]], [[5, 4], [5]]],
    helpRefs: [[1, 2], [3], [4, 5], [5], [5], [1]],
    stats: {
      0: [{ value: "At least 8 weeks", label: "before radioactive iodine is when breastfeeding needs to stop, says Macmillan.", ref: 1, picture: "calendar" }],
    },
    charts: {
      0: { kind: "bars", title: "Waiting after radioactive iodine", subtitle: "Months to avoid a pregnancy after treatment, as Macmillan and the British Thyroid Foundation advise", bars: [{ label: "Getting pregnant, at least", value: 6, strong: true }, { label: "Making someone pregnant, at least", value: 4 }], max: 6, ticks: [0, 2, 4, 6], unit: " months", sources: "Source: Macmillan, Radioactive iodine for thyroid cancer; British Thyroid Foundation, Your guide to thyroid cancer" },
    },
  },
  "work": {
    sectionRefs: [[[1, 2], [6]], [[1], [2, 1]], [[1, 2], [1]], [[3], [4]], [[5, 3], [5, 4]]],
    helpRefs: [[3], [1], [1, 2], [1], [4], [5]],
    charts: {
      1: { kind: "bars", title: "Protecting your neck", subtitle: "Weeks after thyroid surgery, as Macmillan advises", bars: [{ label: "Wound not under water, at least", value: 2 }, { label: "No heavy lifting, at least", value: 4, strong: true }], max: 4, ticks: [0, 1, 2, 3, 4], unit: " weeks", sources: "Source: Macmillan, Before and after surgery for thyroid cancer" },
    },
  },
  "weight-mood": {
    sectionRefs: [[[1], [1], [1]], [[3], [3]], [[2], [2], [2]], [[2], [2]]],
    helpRefs: [[3], [4], [4], [2], [2], [2]],
    stats: {
      0: [{ value: "5 to 10 pounds", label: "of body weight may be due to an underactive thyroid, depending on how severe it is, says the British Thyroid Foundation.", ref: 1 }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [1, 4]], [[1], [2]], [[1], [1]], [[3, 8], [5], [2]], [[6, 7], [6]]],
    helpRefs: [[1], [1], [1], [8, 3], [7], [6]],
    stats: {
      4: [{ value: "116 123", label: "is the Samaritans number, free to call any time, day or night.", ref: 7 }],
    },
  },
};
