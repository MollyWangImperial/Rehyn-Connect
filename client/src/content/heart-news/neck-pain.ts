import type { NewsExtras } from "../ischaemic-news";
// Neck pain features: paragraph references (numbers are positions in each answer's own sources in neck-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [1]], [[2], [1]], [[2], [4, 1]], [[2], [1]], [[3, 2], [1]]],
    helpRefs: [[1], [3], [3], [1], [3]],
    stats: {
      0: [{ value: "7 bones", label: "at the top of the spinal column form the neck, the cervical vertebrae, says Arthritis UK.", ref: 1 }],
    },
  },
  "causes": {
    sectionRefs: [[[1], [3, 4]], [[3], [3, 4]], [[2], [2]], [[2], [2]], [[5], [5, 3]]],
    helpRefs: [[1], [5], [1], [1], [5]],
    stats: {
      0: [{ value: "30s and 40s", label: "is when neck pain affects most people, says the Chartered Society of Physiotherapy.", ref: 3 }],
    },
  },
  "trapped-nerve": {
    sectionRefs: [[[1], [3]], [[1], [4]], [[1], [1]], [[1], [1, 2]], [[5], [2]]],
    helpRefs: [[1], [1], [1], [5], [2]],
    stats: {
      3: [{ value: "3 to 8 weeks", label: "is how long you may need to try gabapentin or pregabalin to begin with, says Arthritis UK.", ref: 1, picture: "calendar" }],
    },
  },
  "urgent": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[1], [3]], [[4], [4]], [[5], [6]]],
    helpRefs: [[1], [2], [2], [1], [4], [5]],
  },
  "moving": {
    sectionRefs: [[[1], [3, 1]], [[2], [2]], [[1], [4]], [[5], [2, 3]], [[1], [1, 4]]],
    helpRefs: [[1], [1], [2], [3], [1]],
    stats: {
      1: [{ value: "A day or two", label: "at most is how long to rest a painful neck, says Arthritis UK.", ref: 2, picture: "calendar" }],
    },
    charts: {
      4: { kind: "bars", title: "How a neck problem usually settles", subtitle: "Weeks after a new neck problem starts, according to NHS inform", bars: [{ label: "Biggest change, within the first", value: 2 }, { label: "Most problems improved, within", value: 8, strong: true }], max: 10, ticks: [0, 2, 4, 6, 8, 10], unit: " weeks", sources: "Source: NHS inform, Neck problems" },
    },
  },
  "exercises": {
    sectionRefs: [[[3, 2], [1, 2, 4]], [[1], [1]], [[2], [2]], [[2], [2]], [[2, 3], [2]]],
    helpRefs: [[3], [2], [2], [2], [2]],
    stats: {
      1: [{ value: "5 seconds", label: "is how long to hold each Arthritis UK neck exercise, repeated five times on each side.", ref: 1, picture: "hours" }],
      2: [{ value: "Around 10", label: "repetitions is what to work up to over time, starting from 2 to 3, says NHS inform.", ref: 2 }],
    },
    charts: {
      3: { kind: "bars", title: "How much pain is all right", subtitle: "The top of each band when rating pain out of 10 during exercise", bars: [{ label: "Minimal pain, up to", value: 3 }, { label: "Acceptable pain, up to", value: 5, strong: true }, { label: "Excessive pain, up to", value: 10 }], max: 10, ticks: [0, 2, 4, 6, 8, 10], unit: " out of 10", sources: "Source: NHS inform, Exercises for neck problems" },
    },
  },
  "painkillers": {
    sectionRefs: [[[1, 6], [3, 2]], [[2], [3, 4]], [[3, 2], [8, 5]], [[1], [6, 7]], [[2], [2]]],
    helpRefs: [[1], [3], [1], [1], [2]],
    stats: {
      1: [{ value: "10 days", label: "at most for ibuprofen tablets, unless a doctor advises otherwise, says the NHS.", ref: 3, picture: "calendar" }],
    },
    charts: {
      3: { kind: "bars", title: "Cold or heat, and for how long", subtitle: "Minutes at a time for a wrapped cold or heat pack on the neck", bars: [{ label: "Frozen peas in a tea towel, 3 times a day", value: 5 }, { label: "Hot water bottle in a tea towel, 2 to 3 times a day", value: 20, strong: true }], max: 25, ticks: [0, 5, 10, 15, 20, 25], unit: " minutes", sources: "Source: NHS, Neck pain" },
    },
  },
  "physio": {
    sectionRefs: [[[1], [2]], [[2], [3, 2]], [[4, 5], [4]], [[2], [1]], [[2], [5]]],
    helpRefs: [[3, 2], [1], [2], [4], [2]],
    stats: {
      0: [{ value: "3rd largest", label: "health profession, after doctors and nurses, is physiotherapy, says the Chartered Society of Physiotherapy.", ref: 1 }],
    },
  },
  "desk": {
    sectionRefs: [[[1], [2]], [[3], [3, 6]], [[4], [5]], [[6], [6]], [[7], [6, 8]]],
    helpRefs: [[4], [3], [6], [5], [7]],
    stats: {
      2: [
        { value: "5 to 10 minutes", label: "every hour is better than 20 minutes every 2 hours, says the Health and Safety Executive.", ref: 4, picture: "hours" },
        { value: "30 minutes", label: "of brisk walking in your lunch break helps move your joints, says the Chartered Society of Physiotherapy.", ref: 5 },
      ],
    },
  },
  "sleep": {
    sectionRefs: [[[1, 2], [3]], [[1, 2], [2]], [[1], [1, 2]], [[2], [2]], [[5], [4, 5]]],
    helpRefs: [[1], [1], [1], [2], [5]],
    stats: {
      4: [{ value: "6 to 9 hours", label: "of sleep a night is what most adults need, says Arthritis UK.", ref: 4, picture: "hours" }],
    },
  },
  "whiplash": {
    sectionRefs: [[[1], [4, 3]], [[1, 2], [2, 3]], [[1], [1, 2]], [[1, 2], [1]], [[3], [1]]],
    helpRefs: [[1], [1], [1], [1], [3]],
    stats: {
      1: [{ value: "24 to 48 hours", label: "is the delay there often is before pain or stiffness from whiplash, says NHS inform.", ref: 2, picture: "hours" }],
      3: [{ value: "2 to 3 months", label: "is when whiplash usually gets better, though some people have symptoms for longer, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "long-term": {
    sectionRefs: [[[1], [5]], [[3], [3]], [[2], [4, 6]], [[4, 7], [2]], [[3], [3, 7]]],
    helpRefs: [[2], [2], [4], [3], [7]],
    charts: {
      0: { kind: "donut", title: "It can come back", subtitle: "People with neck pain, out of every 100", value: 50, prefix: "Around", subject: "people with neck pain", label: "will have it come back", sources: "Source: Chartered Society of Physiotherapy, Causes of neck pain" },
      2: { kind: "bars", title: "A week of activity", subtitle: "Minutes a week adults should aim for, by how hard the activity is", bars: [{ label: "Vigorous, such as running", value: 75 }, { label: "Moderate, such as brisk walking", value: 150, strong: true }], max: 160, ticks: [0, 40, 80, 120, 160], unit: " minutes", sources: "Source: NHS, Physical activity guidelines for adults aged 19 to 64" },
    },
  },
};
