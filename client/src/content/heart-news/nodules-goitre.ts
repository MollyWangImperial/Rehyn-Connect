import type { NewsExtras } from "../ischaemic-news";
// Thyroid nodules and goitre features: paragraph references (numbers are positions in each answer's own sources in nodules-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[3, 4], [4]], [[1], [2, 3]], [[2], [5, 2], [5]], [[1, 2], [1]]],
    helpRefs: [[1], [2], [2], [2]],
    stats: {
      0: [{ value: "About 1 in 20", label: "people has some kind of thyroid disorder, which may be temporary or permanent, says the British Thyroid Foundation.", ref: 4, picture: "one-in", of: 20 }],
      1: [{ value: "More than 9 in 10", label: "thyroid nodules are found to be benign (not cancer), says the British Thyroid Foundation.", ref: 3 }],
    },
  },
  "causes": {
    sectionRefs: [[[1], [3]], [[2], [2, 3]], [[2], [4, 5]], [[4, 2], [6, 5]], [[2, 3]]],
    helpRefs: [[2], [3], [6], [6]],
  },
  "symptoms": {
    sectionRefs: [[[2], [3]], [[1]], [[1], [4]], [[5], [6, 7]]],
    helpRefs: [[1], [1], [5], [5]],
  },
  "tests": {
    sectionRefs: [[[5], [1, 2]], [[1], [3]], [[1], [1], [4]], [[1], [1]], [[2], [1]]],
    helpRefs: [[1], [1], [1], [1], [1]],
    stats: {
      1: [{ value: "10 to 45 minutes", label: "is how long an ultrasound scan can take, though it might take longer, says the NHS.", ref: 3 }],
      3: [{ value: "48 hours", label: "after a thyroid biopsy, any discomfort should have gone, says the British Thyroid Foundation.", ref: 1, picture: "hours" }],
      4: [{ value: "Up to 3 weeks", label: "for test reports to reach your doctor, says the British Thyroid Foundation.", ref: 1, picture: "calendar" }],
    },
  },
  "watching": {
    sectionRefs: [[[1], [2]], [[3], [3], [4]], [[4, 5]], [[5], [5]], [[4, 2]]],
    helpRefs: [[3], [4], [5], [3], [5]],
    stats: {
      2: [{ value: "Every 1 to 2 years", label: "your doctor may check your thyroid function, says the British Thyroid Foundation.", ref: 4, picture: "calendar" }],
      3: [{ value: "Millimetres", label: "of growth over a year or two is usual for a thyroid nodule, says a British Thyroid Foundation expert.", ref: 5 }],
    },
  },
  "treatments": {
    sectionRefs: [[[1], [2]], [[5, 4], [3]], [[6], [4, 6], [6]], [[3, 1, 7], [1, 8]], [[4]]],
    helpRefs: [[8], [4], [6], [6], [6]],
    stats: {
      2: [
        { value: "2 to 3 weeks", label: "at arm's length from babies, children under five and pregnant women after radioactive iodine, as a general rule, says the British Thyroid Foundation.", ref: 6, picture: "calendar" },
        { value: "About 1 in 10", label: "people need a further dose of radioactive iodine, says the British Thyroid Foundation.", ref: 6, picture: "one-in", of: 10 },
      ],
    },
  },
  "surgery": {
    sectionRefs: [[[1, 4], [2]], [[1], [1]], [[1, 4], [1]], [[1], [1, 4, 3]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [4], [1]],
    stats: {
      3: [
        { value: "1 to 2 days", label: "in hospital is usual after thyroid surgery, says the British Thyroid Foundation.", ref: 1, picture: "calendar" },
        { value: "Up to a month", label: "before you feel your energy levels are back, says the British Thyroid Foundation.", ref: 1 },
      ],
      4: [{ value: "6 months to a year", label: "for the scar to settle into a white line that is hardly visible, says the British Thyroid Foundation.", ref: 1, picture: "calendar" }],
    },
  },
  "after-surgery": {
    sectionRefs: [[[1], [1]], [[1, 2], [1], [1, 2]], [[1, 4], [1, 4], [3]], [[1], [2]]],
    helpRefs: [[1], [1], [3], [1], [2]],
    stats: {
      0: [{ value: "Within 6 months", label: "a husky or breathy voice usually recovers, says the British Thyroid Foundation.", ref: 1, picture: "calendar" }],
      2: [{ value: "30 to 60 minutes", label: "before your first meal of the day, caffeine or other medicines is when to take levothyroxine, says the NHS.", ref: 3 }],
    },
    charts: {
      1: { kind: "donut", title: "Going home with calcium", subtitle: "Patients after a total thyroidectomy, out of every 100", value: 40, prefix: "Over", subject: "patients", label: "go home with some calcium or vitamin D tablets", sources: "Source: British Thyroid Foundation, Thyroid surgery" },
      2: { kind: "range", title: "An underactive thyroid after half is removed", subtitle: "People who have a lobectomy or hemithyroidectomy, out of every 100, who develop an underactive thyroid", from: 10, to: 15, sources: "Source: British Thyroid Foundation, Thyroid surgery" },
    },
  },
  "worry": {
    sectionRefs: [[[1, 2], [3]], [[4], [4, 3]], [[3]], [[4, 5], [4]], [[5], [6]]],
    helpRefs: [[4], [4], [5], [5], [6], [6]],
    stats: {
      1: [{ value: "About 2 weeks", label: "is how long thyroid cancer test results should take, though sometimes longer, says the NHS.", ref: 4, picture: "calendar" }],
    },
    charts: {
      0: { kind: "donut", title: "Most lumps are not cancer", subtitle: "Thyroid nodules and swellings, out of every 100", value: 95, subject: "thyroid nodules and swellings", label: "are benign (not cancer)", sources: "Source: British Thyroid Foundation, What are the main signs of thyroid cancer?" },
    },
  },
  "urgent": {
    sectionRefs: [[[1]], [[2], [3], [6]], [[4], [5], [4]]],
    helpRefs: [[1], [1], [2], [4], [5]],
    stats: {
      1: [{ value: "Two weeks", label: "is the rule for urgent referrals, such as a painless thyroid lump that grows quickly over weeks, says the British Thyroid Foundation.", ref: 3, picture: "calendar" }],
    },
  },
  "iodine": {
    sectionRefs: [[[1], [1]], [[2, 1], [2], [2, 1]], [[1, 3], [1]], [[5, 4], [1]]],
    helpRefs: [[1], [1, 2], [2], [1], [3]],
    stats: {
      2: [{ value: "Up to 10,000 micrograms", label: "of iodine can be in one kelp or sea moss tablet, against 150 a day for adults, says the British Thyroid Foundation.", ref: 1 }],
    },
    charts: {
      1: { kind: "bars", title: "How much iodine a day", subtitle: "Recommended daily iodine, in micrograms", bars: [{ label: "Adults, says the NHS", value: 140 }, { label: "Adults, says the British Thyroid Foundation", value: 150 }, { label: "Conceiving, pregnant or breastfeeding", value: 200, strong: true }], max: 250, ticks: [0, 50, 100, 150, 200, 250], unit: " mcg", sources: "Sources: NHS, Iodine; British Thyroid Foundation, What's the deal with iodine?" },
    },
  },
  "follow-up": {
    sectionRefs: [[[1, 2], [2]], [[3], [4]], [[5], [5]], [[1], [7], [6]]],
    helpRefs: [[1], [5], [3], [1], [6]],
    stats: {
      1: [{ value: "6 to 8 weeks", label: "after surgery, a blood test checks your thyroid function, says the British Thyroid Foundation.", ref: 3, picture: "calendar" }],
      2: [
        { value: "4 to 6 weeks", label: "after radioactive iodine, you should have your first blood test, says the British Thyroid Foundation.", ref: 5, picture: "calendar" },
        { value: "Once a year", label: "after the first year, a blood test with your GP, says the British Thyroid Foundation.", ref: 5 },
      ],
    },
  },
};
