import type { NewsExtras } from "../ischaemic-news";
// Osteoporosis features: paragraph references (numbers are positions in each answer's own sources in osteo-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [1, 2]], [[1], [2]], [[3], [3, 4]], [[1, 4], [5, 4]], [[4], [4]]],
    helpRefs: [[6], [4], [4], [4], [4]],
    stats: {
      0: [{ value: "7 to 10 years", label: "is how long it takes for the adult skeleton to be completely renewed, says Arthritis UK.", ref: 2, picture: "calendar" }],
      2: [{ value: "From around 35", label: "you gradually start losing bone, after bones are strongest in early adult life, says the NHS.", ref: 3 }],
    },
  },
  "dexa": {
    sectionRefs: [[[1, 2], [1, 2]], [[1], [2]], [[2], [2, 3]], [[3, 2], [3, 2]], [[2, 4], [2]]],
    helpRefs: [[2], [2], [2], [2], [2]],
    stats: {
      0: [{ value: "3 days", label: "of normal life gives about the same radiation as a bone density scan, says the Royal Osteoporosis Society.", ref: 2 }],
      2: [{ value: "10 to 20 minutes", label: "is how long a bone density scan takes, depending on the part of the body being scanned, says the NHS.", ref: 3 }],
      4: [{ value: "Every 2 to 5 years", label: "is how often people normally have a repeat bone density scan, says the Royal Osteoporosis Society.", ref: 2, picture: "calendar" }],
    },
  },
  "who": {
    sectionRefs: [[[1, 2], [1]], [[1], [1, 3]], [[4, 1], [3]], [[5], [1, 6]], [[1], [1, 6]]],
    helpRefs: [[5], [5], [3], [6], [6], [6]],
    stats: {
      0: [{ value: "About 4 times", label: "more likely to develop osteoporosis: women compared with men, says Arthritis UK.", ref: 2, picture: "times" }],
      2: [{ value: "Over 3 months", label: "of high-dose steroid tablets raises the risk of osteoporosis, says the NHS.", ref: 4, picture: "calendar" }],
      3: [{ value: "19 or less", label: "is the body mass index the NHS lists as a risk factor for osteoporosis.", ref: 1 }],
    },
  },
  "spine": {
    sectionRefs: [[[1], [2, 3]], [[1], [1, 4]], [[3], [1]], [[1], [3]], [[5], [3]]],
    helpRefs: [[6, 3], [1], [7], [5], [5]],
    stats: {
      1: [{ value: "6 to 12 weeks", label: "is how long a spinal fracture takes to heal, though the bone keeps its new shape, says the Royal Osteoporosis Society.", ref: 1, picture: "calendar" }],
    },
  },
  "tablets": {
    sectionRefs: [[[1], [1, 2]], [[3, 2], [3, 2]], [[3, 4], [2]], [[3], [5]], [[4, 3], [6]]],
    helpRefs: [[4], [3], [1, 2], [3], [4], [7]],
    stats: {
      1: [{ value: "Once a week", label: "is how the usual 70mg dose of alendronic acid is taken, says the NHS.", ref: 3, picture: "calendar" }],
      2: [{ value: "30 minutes", label: "upright after taking alendronic acid, sitting, standing or walking, says the NHS.", ref: 3 }],
      4: [{ value: "At least 3 to 5 years", label: "is how long people usually take alendronic acid before a review, says the NHS.", ref: 3, picture: "calendar" }],
    },
  },
  "other-treatments": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[3, 4], [3]], [[4, 5], [6]], [[4, 7], [4]]],
    helpRefs: [[1], [1], [3], [3], [2], [1]],
    stats: {
      1: [{ value: "Up to 3 in 10", label: "people get flu-like symptoms after their first zoledronate drip, usually gone in a couple of days, says the Royal Osteoporosis Society.", ref: 2 }],
      2: [{ value: "Every 6 months", label: "is how often denosumab is injected, and it wears off quickly, says the Royal Osteoporosis Society.", ref: 3, picture: "calendar" }],
    },
  },
  "calcium-d": {
    sectionRefs: [[[1, 2], [3]], [[4, 2], [4, 2]], [[5], [3]], [[5], [5, 3]], [[2, 4], [5, 2, 3]]],
    helpRefs: [[4], [5], [1], [2, 3], [2]],
    stats: {
      3: [{ value: "10 micrograms", label: "of vitamin D a day is what adults need, says the NHS.", ref: 5 }],
    },
    charts: {
      1: { kind: "bars", title: "Calcium a day", subtitle: "Daily calcium in milligrams: what most adults need, what a doctor may advise, and the supplement limit", bars: [{ label: "Most adults", value: 700 }, { label: "At risk or on treatment, around", value: 1000, strong: true }, { label: "Supplements: more than this can harm", value: 1500 }], max: 1600, ticks: [0, 400, 800, 1200, 1600], unit: "mg", sources: "Sources: NHS, Calcium; Royal Osteoporosis Society, Calcium" },
      4: { kind: "bars", title: "Vitamin D a day", subtitle: "Daily vitamin D in micrograms: what most adults need, what a doctor may advise, and the upper limit", bars: [{ label: "Most adults", value: 10 }, { label: "At risk or on treatment", value: 20, strong: true }, { label: "Do not take more than", value: 100 }], max: 120, ticks: [0, 40, 80, 120], unit: " micrograms", sources: "Sources: NHS, Vitamin D; Royal Osteoporosis Society, Vitamin D" },
    },
  },
  "bone-exercise": {
    sectionRefs: [[[1], [1]], [[1, 3], [3, 2]], [[1], [3]], [[1, 4, 5], [6]], [[3], [3]]],
    helpRefs: [[3], [3], [4, 3], [7, 5], [3], [3]],
    stats: {
      3: [{ value: "At least 2 days", label: "a week of activities that improve strength, balance and flexibility, for adults aged 65 and over, says the NHS.", ref: 6, picture: "calendar" }],
    },
    charts: {
      3: { kind: "bars", title: "The weekly aim at 65 and over", subtitle: "Minutes of activity a week the NHS suggests for adults aged 65 and over", bars: [{ label: "Moderate activity, at least", value: 150, strong: true }, { label: "Or vigorous, if already active", value: 75 }], max: 160, ticks: [0, 40, 80, 120, 160], unit: " minutes", sources: "Source: NHS, Physical activity guidelines for older adults" },
    },
  },
  "falls": {
    sectionRefs: [[[1, 2], [3]], [[4, 2], [4, 2]], [[3, 2], [2]], [[4, 3, 2], [3, 2]], [[3], [5, 3]]],
    helpRefs: [[4], [3], [3], [2], [3], [3]],
    stats: {
      4: [{ value: "At least twice a week", label: "do activities that improve strength and balance, as the guidelines for older adults recommend, says the NHS.", ref: 3, picture: "calendar" }],
    },
  },
  "after-fracture": {
    sectionRefs: [[[1], [1]], [[1, 2], [2]], [[3], [1, 3]], [[4], [5, 4]], [[6, 4], [7]]],
    helpRefs: [[1], [3], [4], [4], [6], [2]],
    stats: {
      0: [{ value: "6 to 12 weeks", label: "is how long a broken bone usually takes to heal, and osteoporosis does not slow it, says the Royal Osteoporosis Society.", ref: 1, picture: "calendar" }],
      2: [{ value: "1 to 4 weeks", label: "is how long people usually spend in hospital after a broken hip, says the NHS.", ref: 3, picture: "calendar" }],
      4: [{ value: "1 to 2 years", label: "after a break from a small fall is when the risk of another break is highest, says the Royal Osteoporosis Society.", ref: 6 }],
    },
  },
  "lifting": {
    sectionRefs: [[[1, 2], [2]], [[1], [1]], [[3, 4], [3]], [[4], [4]], [[5], [4, 6]]],
    helpRefs: [[1], [3, 4], [4], [4], [6]],
    stats: {
      3: [{ value: "Every 10 to 15 minutes", label: "take a break and stretch between gardening jobs, says the Royal Osteoporosis Society.", ref: 4 }],
    },
  },
  "dentist": {
    sectionRefs: [[[1], [1]], [[2, 1], [1]], [[3, 2], [1]], [[3], [1]], [[4], [1]]],
    helpRefs: [[3], [3], [1], [4], [1]],
    stats: {
      2: [{ value: "Every 6 months", label: "have a dental check-up while taking alendronic acid, says the NHS.", ref: 3, picture: "calendar" }],
    },
    charts: {
      0: { kind: "bars", title: "A very rare side effect", subtitle: "People taking osteoporosis medicines, out of every 10,000, as research estimates", bars: [{ label: "Get jaw bone problems, up to", value: 10 }, { label: "Do not, at least", value: 9990, strong: true }], max: 10000, ticks: [0, 5000, 10000], unit: " people", sources: "Source: Royal Osteoporosis Society, Jaw bone problems" },
    },
  },
};
