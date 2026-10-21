import type { NewsExtras } from "../ischaemic-news";
// Back pain features: paragraph references (numbers are positions in each answer's own sources in back-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-hurts": {
    sectionRefs: [[[2], [2]], [[1], [3], [2]], [[3], [2, 4]], [[3], [3]], [[2], [1]]],
    helpRefs: [[1], [2], [3], [1]],
    stats: {
      0: [{ value: "24 bones", label: "called vertebrae make up the spinal column, with discs between them, says Arthritis UK.", ref: 2 }],
    },
    charts: {
      1: { kind: "donut", title: "A very common problem", subtitle: "People in the UK, out of every 100", value: 60, prefix: "Up to", subject: "people", label: "will have back pain at some time in their lives", sources: "Source: Arthritis UK, Back pain" },
    },
  },
  "red-flags": {
    sectionRefs: [[[2, 1], [5]], [[1], [1], [1]], [[1], [4]], [[1], [1, 2]], [[3]]],
    helpRefs: [[1], [1], [1], [1], [4]],
    stats: {
      0: [{ value: "2 in 100", label: "back pain cases have something more serious or underlying, says the Chartered Society of Physiotherapy.", ref: 5 }],
    },
  },
  "scans": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[3], [4], [1]], [[1], [3]], [[5], [5]]],
    helpRefs: [[1], [3], [3], [5], [5]],
    stats: {
      4: [
        { value: "15 minutes to 1 hour", label: "is how long an MRI scan usually takes, says the NHS.", ref: 5, picture: "hours" },
        { value: "1 to 2 weeks", label: "is how long it usually takes to get MRI scan results, says the NHS.", ref: 5, picture: "calendar" },
      ],
    },
  },
  "long-term": {
    sectionRefs: [[[1], [2]], [[1, 2], [2, 1]], [[2], [2]], [[2], [2]], [[2], [3]]],
    helpRefs: [[2], [2], [2], [3], [2], [4]],
    stats: {
      0: [{ value: "Over 3 months", label: "of pain is what makes it persistent, or chronic, pain, says Flippin' Pain.", ref: 2, picture: "calendar" }],
    },
    charts: {
      1: { kind: "range", title: "How common persistent pain is", subtitle: "People in the UK living with persistent pain, out of every 100, as estimated by Flippin' Pain", from: 30, to: 50, sources: "Source: Flippin' Pain, Understanding pain" },
    },
  },
  "exercises": {
    sectionRefs: [[[1], [1, 7]], [[3, 4], [2]], [[2], [2], [2, 3]], [[2], [2]], [[5, 4], [1, 6]]],
    helpRefs: [[3], [4], [1], [1, 4], [1], [2]],
    stats: {
      4: [{ value: "29 minutes", label: "is the length of the NHS pilates class for people with chronic back pain.", ref: 6 }],
    },
    charts: {
      2: { kind: "bars", title: "How long to hold each one", subtitle: "Hold times in Arthritis UK's back exercises, in seconds", bars: [{ label: "Pelvic tilt", value: 5 }, { label: "Knees to chest", value: 5 }, { label: "Knee rolls", value: 10, strong: true }, { label: "Back stabiliser", value: 10 }], max: 12, ticks: [0, 4, 8, 12], unit: " seconds", sources: "Source: Arthritis UK, Exercises for the back" },
    },
  },
  "painkillers": {
    sectionRefs: [[[1], [1, 2]], [[3], [4], [3, 4]], [[4], [4]], [[5, 6], [2, 3]], [[7]]],
    helpRefs: [[1], [4], [4], [4], [5], [3]],
    stats: {
      1: [{ value: "10 days", label: "at most for ibuprofen tablets, unless a doctor advises otherwise, says the NHS.", ref: 4, picture: "calendar" }],
    },
    charts: {
      3: { kind: "bars", title: "Short courses only", subtitle: "Longest use without medical advice, in days", bars: [{ label: "Painkillers containing codeine", value: 3, strong: true }, { label: "Ibuprofen tablets", value: 10 }], max: 12, ticks: [0, 4, 8, 12], unit: " days", sources: "Sources: Arthritis UK, Painkillers and arthritis pain relief; NHS, Ibuprofen for adults" },
    },
  },
  "physio": {
    sectionRefs: [[[1], [2]], [[3, 4], [4]], [[4, 1], [4]], [[1], [5, 6]], [[4], [4]]],
    helpRefs: [[3], [1], [4], [4], [4]],
    stats: {
      0: [
        { value: "2 to 3 weeks", label: "of pain not settling and stopping normal activities is the time to seek advice, says the Chartered Society of Physiotherapy.", ref: 1, picture: "calendar" },
        { value: "6 weeks", label: "of pain, even if it is not stopping you, is the time to seek advice, says the Chartered Society of Physiotherapy.", ref: 1, picture: "calendar" },
      ],
    },
  },
  "injections-surgery": {
    sectionRefs: [[[1], [2]], [[3, 1], [3, 4]], [[5, 6], [3]], [[1], [7], [7]], [[1], [3]]],
    helpRefs: [[2], [7], [1], [7], [7]],
    stats: {
      3: [{ value: "2 to 4 hours", label: "is how long lumbar decompression surgery usually takes, says the NHS.", ref: 7, picture: "hours" }],
    },
    charts: {
      3: { kind: "bars", title: "Recovering from lumbar decompression", subtitle: "Weeks after the operation, at most, as given by the NHS", bars: [{ label: "Back to work (around 4 to 6)", value: 6 }, { label: "All usual activities (up to 12)", value: 12, strong: true }], max: 12, ticks: [0, 4, 8, 12], unit: " weeks", sources: "Source: NHS, Lumbar decompression surgery" },
    },
  },
  "work": {
    sectionRefs: [[[1], [1], [1, 2]], [[1], [1]], [[1], [1]], [[2], [1]], [[3], [3, 1]]],
    helpRefs: [[1], [1], [1], [1], [3], [1]],
    stats: {
      2: [{ value: "Once an hour", label: "at least, take a break to stretch and walk around, says Arthritis UK.", ref: 1, picture: "hours" }],
      4: [{ value: "2 weeks", label: "off work with back pain is the time to talk to your GP and employer about physiotherapy, says Arthritis UK.", ref: 1, picture: "calendar" }],
    },
  },
  "sleep": {
    sectionRefs: [[[1], [2]], [[1], [2, 3]], [[1, 2], [2]], [[2], [2]], [[4], [2]]],
    helpRefs: [[1], [2], [2], [2], [4]],
    stats: {
      2: [{ value: "6 to 9 hours", label: "of sleep a night is what most adults need, says Arthritis UK.", ref: 2, picture: "hours" }],
    },
  },
  "fear": {
    sectionRefs: [[[1, 2], [2]], [[3], [2, 3]], [[3, 4], [4]], [[4], [4]], [[5], [3]]],
    helpRefs: [[2], [3], [3], [4], [4]],
    stats: {
      3: [{ value: "2 days", label: "at least, fill in an activity diary to see your pacing style, says Live Well with Pain.", ref: 4, picture: "calendar" }],
    },
  },
  "neck": {
    sectionRefs: [[[1, 2], [1]], [[1, 3], [4]], [[1], [1]], [[1, 5, 2], [1]], [[1], [2]]],
    helpRefs: [[1], [1], [1], [5], [6], [1]],
    stats: {
      1: [{ value: "Within 3 months", label: "most neck pain problems get a lot better, says the Chartered Society of Physiotherapy.", ref: 4, picture: "calendar" }],
    },
    charts: {
      0: { kind: "donut", title: "It can come back", subtitle: "People with neck pain, out of every 100", value: 50, prefix: "Around", subject: "people with neck pain", label: "will have it come back", sources: "Source: Chartered Society of Physiotherapy, Causes of neck pain" },
      2: { kind: "bars", title: "Heat and cold, timed", subtitle: "Minutes each time, as suggested by the NHS for neck pain", bars: [{ label: "Wrapped frozen peas", value: 5 }, { label: "Wrapped hot water bottle", value: 20, strong: true }], max: 24, ticks: [0, 8, 16, 24], unit: " minutes", sources: "Source: NHS, Neck pain" },
    },
  },
};
