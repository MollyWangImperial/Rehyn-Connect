import type { NewsExtras } from "../ischaemic-news";
// Sprains and strains features: paragraph references (numbers are positions in each answer's own sources in sprains-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [4]], [[1], [2]], [[1], [2]], [[1], [6, 5], [3]]],
    helpRefs: [[1], [1], [4], [1], [1]],
    charts: {
      3: { kind: "range", title: "How common they are", subtitle: "Bone, joint and muscle injuries reported as sprains or strains, out of every 100", from: 30, to: 50, sources: "Source: NICE Clinical Knowledge Summaries, Sprains and strains: how common are they?" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [1]], [[2], [5]], [[2], [4]], [[6], [3, 6]]],
    helpRefs: [[1], [3], [1], [1], [1]],
    stats: {
      3: [{ value: "Up to 24 hours", label: "is how long bruising may take to appear after a sprain or strain, says NICE's clinical summary.", ref: 3, picture: "hours" }],
    },
  },
  "serious": {
    sectionRefs: [[[1], [1], [1]], [[1], [1], [1]], [[4, 3], [2]], [[5], [6]]],
    helpRefs: [[1], [1], [1], [1], [2]],
  },
  "healing": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[4], [5, 6]], [[2], [2]], [[7, 3], [1]]],
    helpRefs: [[1], [2], [4], [3], [1]],
    charts: {
      0: { kind: "bars", title: "Better, then back to running", subtitle: "Weeks after a sprain or strain, according to the NHS", bars: [{ label: "Most sprains and strains feel better after", value: 2 }, { label: "Avoid strenuous exercise such as running for up to", value: 8, strong: true }], max: 10, ticks: [0, 2, 4, 6, 8, 10], unit: " weeks", sources: "Source: NHS, Sprains and strains" },
    },
    stats: {
      2: [{ value: "Up to 12 months", label: "is how long swelling can sometimes continue after an ankle sprain, says Northern Lincolnshire and Goole NHS Foundation Trust.", ref: 6, picture: "calendar" }],
    },
  },
  "first-days": {
    sectionRefs: [[[1], [1], [1]], [[3], [2, 5], [3]], [[1], [6]], [[1], [3, 4]]],
    helpRefs: [[1], [1], [1], [1], [2, 5], [1]],
    stats: {
      0: [{ value: "Up to 20 minutes", label: "of ice at a time, every 2 to 3 hours, for the first 2 to 3 days, says the NHS.", ref: 1, picture: "hours" }],
    },
    charts: {
      1: { kind: "bars", title: "How long to ice", subtitle: "The most minutes at a time, as each source puts it", bars: [{ label: "NHS inform, Soft tissue injury advice", value: 15 }, { label: "NHS, Sprains and strains", value: 20, strong: true }], max: 25, ticks: [0, 5, 10, 15, 20, 25], unit: " minutes", sources: "Source: NHS inform, Soft tissue injury advice; NHS, Sprains and strains" },
    },
  },
  "painkillers": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[3], [3, 4]], [[4, 7], [6, 5], [4]]],
    helpRefs: [[1], [4], [3], [4], [4], [3]],
    charts: {
      2: { kind: "bars", title: "How long to take them without advice", subtitle: "The most days before a doctor's advice is needed, according to the NHS", bars: [{ label: "Paracetamol", value: 3 }, { label: "Ibuprofen tablets and capsules", value: 10, strong: true }], max: 12, ticks: [0, 3, 6, 9, 12], unit: " days", sources: "Source: NHS, Paracetamol for adults and Ibuprofen for adults" },
    },
    stats: {
      3: [{ value: "48 hours", label: "after an injury is when anti-inflammatory medicines should first be considered, says NHS inform.", ref: 4, picture: "hours" }],
    },
  },
  "moving": {
    sectionRefs: [[[1], [3, 4]], [[3], [4, 5]], [[3], [2]], [[2], [2], [2]], [[2, 5]]],
    helpRefs: [[1], [3], [2], [2], [5]],
    stats: {
      2: [{ value: "20 to 30 seconds", label: "is how long to try to hold stretches, if possible, says NHS inform.", ref: 2, picture: "hours" }],
      3: [{ value: "0 to 5 out of 10", label: "is the pain level to aim for during exercise, says NHS inform.", ref: 2 }],
    },
    charts: {
      3: { kind: "bars", title: "Building up the repetitions", subtitle: "Repetitions at a time, as NHS inform suggests", bars: [{ label: "When starting, 2 to", value: 3 }, { label: "A set, to build strength", value: 8 }, { label: "The most in a set, up to 2 sets of", value: 15, strong: true }], max: 16, ticks: [0, 4, 8, 12, 16], unit: " repetitions", sources: "Source: NHS inform, Exercises for calf and ankle problems" },
    },
  },
  "physio": {
    sectionRefs: [[[1], [5, 6]], [[1, 2], [1, 2], [4]], [[2], [2]], [[3], [3]]],
    helpRefs: [[1], [3], [2], [2], [2]],
    stats: {
      3: [{ value: "2 weeks", label: "without your pain improving is when you could refer yourself to a physiotherapist, says the Chartered Society of Physiotherapy's foot pain advice.", ref: 3, picture: "calendar" }],
    },
  },
  "return": {
    sectionRefs: [[[1], [2, 3]], [[5], [6], [7]], [[4], [5]], [[5], [5]]],
    helpRefs: [[1], [5], [5], [4], [7], [5]],
    stats: {
      0: [
        { value: "Up to 8 weeks", label: "is how long to avoid strenuous exercise such as running after a sprain or strain, says the NHS.", ref: 1, picture: "calendar" },
        { value: "4 to 6 weeks", label: "after a moderate injury is when the risk of injuring it again is high, says NICE's clinical summary.", ref: 3, picture: "calendar" },
      ],
    },
  },
  "prevention": {
    sectionRefs: [[[1], [6]], [[2], [4], [2]], [[3], [4]], [[5], [3, 7]]],
    helpRefs: [[2], [3], [3], [5], [5], [3]],
    charts: {
      1: { kind: "bars", title: "The timed part of the NHS warm-up", subtitle: "Seconds for each timed move in the NHS routine", bars: [{ label: "March on the spot", value: 180, strong: true }, { label: "Heel digs", value: 60 }, { label: "Knee lifts", value: 30 }], max: 180, ticks: [0, 60, 120, 180], unit: " seconds", sources: "Source: NHS, How to warm up before exercising" },
    },
    stats: {
      2: [{ value: "3 or 4 times", label: "is how often to do a similar run before you increase your pace or distance, says the NHS.", ref: 4 }],
    },
  },
  "repeat": {
    sectionRefs: [[[1], [2]], [[5], [3]], [[6], [7], [5]], [[8, 9], [10, 4]]],
    helpRefs: [[6], [6], [5], [5], [8]],
    charts: {
      0: { kind: "donut", title: "A common after-effect", subtitle: "People who have had a lateral ankle sprain, out of every 100", value: 70, prefix: "Up to", subject: "people who have had an ankle sprain", label: "can develop chronic ankle instability, especially without proper rehabilitation", sources: "Source: NICE Clinical Knowledge Summaries, Sprains and strains: what are the complications?" },
    },
    stats: {
      2: [{ value: "1 minute", label: "is the time to build up towards when balancing on the injured foot, says Whittington Health NHS Trust.", ref: 6, picture: "hours" }],
    },
  },
  "supports": {
    sectionRefs: [[[1, 3], [1, 3]], [[6], [5, 8], [4]], [[4], [5, 7, 6], [3]], [[2], [5, 9, 3]]],
    helpRefs: [[1], [3], [4], [4], [5, 2]],
  },
};
