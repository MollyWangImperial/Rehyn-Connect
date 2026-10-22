import type { NewsExtras } from "../ischaemic-news";
// Spinal stenosis features: paragraph references (numbers are positions in each answer's own sources in stenosis-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2, 3]], [[3], [3]], [[1], [1, 4]], [[1], [1]], [[1], [1, 6]]],
    helpRefs: [[1], [5], [1], [1], [1]],
    stats: {
      1: [{ value: "24 bones", label: "called vertebrae make up the spinal column, says Arthritis UK.", ref: 3 }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [1, 4]], [[1], [1]], [[1], [2]], [[1], [1]], [[1], [3]]],
    helpRefs: [[1], [1], [2], [1], [3]],
  },
  "causes": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[1], [4]], [[1], [5]], [[1], [6]]],
    helpRefs: [[1], [1], [6, 1], [1], [1]],
    stats: {
      3: [{ value: "100 per cent", label: "of pain is real and never all in your head, says the Chartered Society of Physiotherapy.", ref: 5 }],
    },
  },
  "urgent": {
    sectionRefs: [[[1], [2]], [[3, 7], [3, 4]], [[3], [4, 5]], [[6], [6]], [[1], [3]]],
    helpRefs: [[3, 7], [3], [3], [3], [1]],
    stats: {
      3: [{ value: "7 days", label: "is the window NHS inform gives: a new, significant injury to the back within the last 7 days, such as a fall from height, is also a reason to phone 111.", ref: 6, picture: "calendar" }],
    },
  },
  "exercise": {
    sectionRefs: [[[1], [1, 8]], [[3], [2]], [[2], [2, 7]], [[2], [2]], [[1, 6], [4]]],
    helpRefs: [[3], [7], [2], [2], [5]],
    stats: {
      3: [{ value: "2 sets of 15", label: "is the most NHS inform suggests aiming for, as you build up repetitions over time.", ref: 2 }],
    },
    charts: {
      3: { kind: "bars", title: "Rating pain while you exercise", subtitle: "NHS inform's pain scale, where 0 is no pain and 10 the worst you have ever had", bars: [{ label: "Minimal pain, up to", value: 3 }, { label: "Acceptable pain, up to", value: 5, strong: true }, { label: "Excessive pain, up to", value: 10 }], max: 10, ticks: [0, 2, 4, 6, 8, 10], unit: " out of 10", sources: "Source: NHS inform, Exercises for back pain" },
    },
  },
  "painkillers": {
    sectionRefs: [[[1], [2]], [[3], [4, 2]], [[4, 5], [6, 7]], [[8, 4], [4, 9]], [[10], [10]]],
    helpRefs: [[3], [2], [2], [9, 7, 11], [10]],
    stats: {
      2: [{ value: "Up to 6 weeks", label: "is how long amitriptyline can take to work as a painkiller, says the NHS.", ref: 5, picture: "calendar" }],
      4: [{ value: "Once a year", label: "at least, is how often to get pain medicines reviewed, says NHS inform.", ref: 10, picture: "calendar" }],
    },
    charts: {
      1: { kind: "bars", title: "How long to try everyday painkillers", subtitle: "Days, according to NHS inform and Arthritis UK", bars: [{ label: "Still need pain relief? Ask a pharmacist after", value: 4 }, { label: "A short course of painkillers, up to about", value: 10, strong: true }], max: 12, ticks: [0, 4, 8, 12], unit: " days", sources: "Source: NHS inform, When should I take painkillers?; Arthritis UK, Back pain" },
    },
  },
  "injections": {
    sectionRefs: [[[1], [2, 3]], [[4], [4]], [[5], [5]], [[5], [5]], [[5], [5]]],
    helpRefs: [[5], [5], [5], [5], [5]],
    stats: {
      2: [{ value: "2 months or longer", label: "is how long some slower-acting steroid injections can ease symptoms, says Arthritis UK.", ref: 5, picture: "calendar" }],
      3: [{ value: "3 a year", label: "is the most steroid injections into the same part of the body your doctor will probably recommend, says Arthritis UK.", ref: 5 }],
    },
  },
  "surgery": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[3], [3]], [[3], [3]], [[3], [3]]],
    helpRefs: [[4], [4], [4], [3], [3]],
    stats: {
      2: [{ value: "2 to 4 hours", label: "is how long lumbar decompression surgery usually takes, says the NHS.", ref: 3, picture: "hours" }],
    },
    charts: {
      3: { kind: "bars", title: "Getting back to normal", subtitle: "Weeks after lumbar decompression surgery, according to the NHS", bars: [{ label: "Back to work, around 4 to", value: 6 }, { label: "All usual activities, up to", value: 12, strong: true }], max: 12, ticks: [0, 3, 6, 9, 12], unit: " weeks", sources: "Source: NHS, Lumbar decompression surgery" },
    },
  },
  "walking": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[2, 3], [3]], [[3], [2]], [[4], [4, 2]]],
    helpRefs: [[1], [1], [2], [3], [1], [4]],
    stats: {
      3: [{ value: "10 minutes", label: "three times a week is NHS inform's example of a specific, time-bound walking goal.", ref: 3, picture: "calendar" }],
    },
    charts: {
      4: { kind: "bars", title: "A week of activity after 65", subtitle: "Minutes a week adults aged 65 and over should aim for, by intensity", bars: [{ label: "Vigorous, if already active", value: 75 }, { label: "Moderate, such as walking for health", value: 150, strong: true }], max: 160, ticks: [0, 40, 80, 120, 160], unit: " minutes", sources: "Source: NHS, Physical activity guidelines for older adults" },
    },
  },
  "posture": {
    sectionRefs: [[[1], [1]], [[2], [2, 3]], [[2], [2]], [[3], [3]], [[4, 3, 2], [5]]],
    helpRefs: [[1], [2], [2], [3], [2]],
    stats: {
      3: [{ value: "Once an hour", label: "at least, is how often Arthritis UK suggests a reminder to take a break, stretch and walk around.", ref: 3, picture: "hours" }],
      4: [{ value: "15 to 20 minutes", label: "at a time of heat or ice is normally enough, says Arthritis UK.", ref: 3, picture: "hours" }],
    },
  },
  "weight-activity": {
    sectionRefs: [[[1], [4]], [[2], [3]], [[5], [2, 5]], [[5], [6]], [[1, 7, 8]]],
    helpRefs: [[5], [2], [5], [6], [6], [1]],
    stats: {
      2: [{ value: "12 weeks", label: "is the length of the free NHS weight loss plan, says Arthritis UK.", ref: 5, picture: "calendar" }],
      3: [{ value: "2 days a week", label: "at least, for activities that improve strength, balance and flexibility, says the NHS for adults aged 65 and over.", ref: 6, picture: "calendar" }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [2, 3]], [[4], [5]], [[5], [5]], [[4], [4]], [[5, 6], [7]]],
    helpRefs: [[5], [4], [4], [5, 6], [7], [7]],
    stats: {
      0: [{ value: "Over 1 in 3", label: "adults in the UK are affected by chronic pain, says NHS inform.", ref: 2, picture: "one-in", of: 3 }],
    },
  },
};
