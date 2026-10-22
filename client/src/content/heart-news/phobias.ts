import type { NewsExtras } from "../ischaemic-news";
// Phobias features: paragraph references (numbers are positions in each answer's own sources in phobias-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[4], [4]], [[2], [3]], [[4], [1, 6]]],
    helpRefs: [[1], [1, 6], [1], [5], [7, 8]],
  },
  "types": {
    sectionRefs: [[[1], [2]], [[3]], [[2], [4, 5]], [[6, 7], [8]], [[1], [1]]],
    helpRefs: [[1, 2], [6], [2], [2], [9, 10]],
    charts: {
      3: { kind: "donut", title: "Claustrophobia is common", subtitle: "People in the UK, out of every 100, affected by claustrophobia during their lifetime (an estimate)", value: 10, prefix: "Around", subject: "people in the UK", label: "are affected by claustrophobia during their lifetime", sources: "Sources: NHS, Claustrophobia; Anxiety UK, Claustrophobia" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [2]], [[1], [3]], [[4], [4, 5]], [[3], [4, 5]], [[1, 5]]],
    helpRefs: [[4, 5], [5], [1], [1], [6, 7]],
    charts: {
      2: { kind: "range", title: "Frightening, but it passes", subtitle: "How long a panic attack usually lasts, in minutes", from: 5, to: 20, unit: "minutes", sources: "Sources: NHS, Anxiety, fear and panic; NHS, Panic disorder" },
    },
  },
  "causes": {
    sectionRefs: [[[1], [2]], [[1], [1]], [[3], [4]], [[5, 2], [6]]],
    helpRefs: [[7], [7], [1], [1], [8, 9]],
  },
  "exposure": {
    sectionRefs: [[[1], [1]], [[2], [3]], [[1], [1]], [[1], [1]], [[1], [4]]],
    helpRefs: [[1], [1], [1], [1], [5], [6, 7]],
    charts: {
      2: { kind: "bars", title: "Rate it, then start low", subtitle: "Every Mind Matters' example: how hard taking the bus for a couple of stops might feel, on a scale of 0 to 100", bars: [{ label: "With a friend", value: 10 }, { label: "On your own", value: 50, strong: true }], max: 100, unit: "/100", ticks: [0, 50, 100], sources: "Source: NHS Every Mind Matters, Facing your fears" },
    },
    stats: {
      3: [{ value: "Reduced by half", label: "is when to move on: stay with a situation until your fear rating has halved, says NHS Every Mind Matters.", ref: 1, picture: "half" }],
    },
  },
  "cbt": {
    sectionRefs: [[[1], [2]], [[1], [1]], [[3], [3]], [[1], [4]], [[1, 5], [2, 1]]],
    helpRefs: [[5, 6, 7], [1], [1], [1], [8, 9]],
    charts: {
      3: { kind: "range", title: "A course of CBT", subtitle: "Sessions of CBT people usually have, depending on what it is for", from: 5, to: 15, unit: "sessions", sources: "Source: NHS, Cognitive behavioural therapy (CBT)" },
    },
    stats: {
      4: [{ value: "18 or over", label: "is the age to refer yourself to NHS talking therapies, or 16 or over in some areas, says the NHS.", ref: 5 }],
    },
  },
  "medicines": {
    sectionRefs: [[[1], [2]], [[3, 2], [3], [3]], [[4, 5], [5, 4]], [[6], [8, 7]], [[3], [6, 3]]],
    helpRefs: [[3], [3], [3, 6], [5], [3, 4], [9, 10]],
    stats: {
      1: [{ value: "Up to 8 weeks", label: "for an antidepressant to work fully, though it usually starts to have an effect in 1 to 2 weeks, says the NHS.", ref: 3, picture: "calendar" }],
      3: [{ value: "Up to 4 weeks", label: "is the most diazepam should be used for, as taking it for longer can cause addiction and withdrawal symptoms, says the NHS.", ref: 6, picture: "calendar" }],
    },
  },
  "self-help": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[3], [4]], [[1], [4]], [[1], [3]]],
    helpRefs: [[1, 2], [1], [1], [1], [4], [5, 6]],
    stats: {
      1: [{ value: "At least 5 minutes", label: "is how long to repeat the NHS calming breathing exercise, doing it regularly as part of your daily routine.", ref: 2, picture: "hours" }],
      3: [{ value: "After 3pm", label: "is when to stop energy drinks and drinks containing caffeine, as caffeine can affect sleep and make anxiety worse, says the NHS.", ref: 1 }],
    },
  },
  "needles": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[4], [5], [4]], [[1, 6], [6]], [[7, 8]]],
    helpRefs: [[3], [3, 4], [4, 5], [6], [7], [9, 10]],
    stats: {
      1: [{ value: "About 10 minutes", label: "is how long a blood test usually takes, says the NHS.", ref: 3, picture: "hours" }],
      2: [{ value: "24 hours", label: "without driving if you had a medicine to help you relax during an MRI scan, says the NHS.", ref: 4, picture: "hours" }],
    },
  },
  "agoraphobia": {
    sectionRefs: [[[1], [2]], [[2], [3]], [[4], [4], [5]], [[6], [6]], [[6], [6]]],
    helpRefs: [[4], [5], [6], [6], [6], [7, 8]],
    charts: {
      3: { kind: "range", title: "A course of CBT for agoraphobia", subtitle: "Weekly sessions in a usual course of CBT, each lasting about an hour", from: 12, to: 15, unit: "weekly sessions", sources: "Source: NHS, Agoraphobia: treatment" },
    },
  },
  "family": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[2, 3], [3]], [[4, 5]], [[6], [5, 6]]],
    helpRefs: [[2], [1], [2, 3], [3], [5, 6], [7, 8]],
  },
  "support": {
    sectionRefs: [[[1], [2]], [[3, 4], [5, 6, 7]], [[8], [9, 3]], [[10]], [[11, 12]]],
    helpRefs: [[1], [8], [9], [10], [12, 13]],
    stats: {
      0: [{ value: "10am to 10pm", label: "every day of the year, the No Panic helpline is open, staffed by trained volunteers, says No Panic.", ref: 1, picture: "hours" }],
      1: [{ value: "Up to 30 minutes", label: "is the length of a confidential TAUK to us call with an Anxiety UK peer supporter.", ref: 4, picture: "hours" }],
      4: [{ value: "Any time", label: "day or night, Samaritans is free to call on 116 123 from any phone, says Samaritans.", ref: 11 }],
    },
  },
};
