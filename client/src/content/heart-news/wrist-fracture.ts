import type { NewsExtras } from "../ischaemic-news";
// Broken wrist features: paragraph references (numbers are positions in each answer's own sources in wrist-fracture-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [1]], [[4], [2]], [[1], [5]], [[1], [3]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [2]],
    stats: {
      3: [{ value: "6 to 12 weeks", label: "is when most of the healing happens after a wrist fracture, says NHS inform.", ref: 1, picture: "calendar" }],
    },
  },
  "signs": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[1], [1]], [[1], [1]], [[2]]],
    helpRefs: [[1], [1], [1], [1], [1], [1]],
    stats: {
      3: [{ value: "Up to 20 minutes", label: "of a wrapped ice pack on the injury, every 2 to 3 hours, while you wait to see a doctor, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  "treatment": {
    sectionRefs: [[[1], [4]], [[2], [1, 3]], [[1], [4]], [[1, 2], [4]], [[1], [4]]],
    helpRefs: [[5], [1], [1], [3], [4]],
    stats: {
      1: [{ value: "About six weeks", label: "is how long the plaster cast usually stays on, until the bone has healed, says the Royal Osteoporosis Society.", ref: 2, picture: "calendar" }],
      3: [
        { value: "Within 72 hours", label: "of injury is when NICE says surgery should happen for intra-articular distal radius fractures, when it is needed.", ref: 4, picture: "hours" },
        { value: "Within 7 days", label: "of injury for extra-articular distal radius fractures, when surgery is needed, says NICE.", ref: 4, picture: "calendar" },
      ],
    },
  },
  "bones": {
    sectionRefs: [[[1], [2]], [[1], [6, 5]], [[7, 2], [2]], [[2], [3, 4]], [[8, 2], [5, 8]]],
    helpRefs: [[1], [3], [6], [5], [5], [2]],
    stats: {
      1: [{ value: "Over 50", label: "is when it is normal for health professionals to check whether a wrist fracture was caused by osteoporosis, says NHS inform.", ref: 1 }],
      2: [{ value: "Around 35", label: "is the age when you gradually start losing bone, says the NHS.", ref: 7 }],
      3: [{ value: "10 to 20 minutes", label: "is how long a bone density (DEXA) scan takes, depending on the part of the body scanned, says the NHS.", ref: 2, picture: "hours" }],
    },
  },
  "cast-care": {
    sectionRefs: [[[2], [2, 3]], [[1, 2], [1, 4]], [[1, 2]], [[2, 4]], [[2, 1], [2, 4]]],
    helpRefs: [[1], [1], [2], [2], [2, 1]],
    stats: {
      0: [{ value: "About six weeks", label: "is how long a plaster cast usually stays on after a broken wrist, until the bone has healed, says the Royal Osteoporosis Society.", ref: 3, picture: "calendar" }],
    },
  },
  "exercises": {
    sectionRefs: [[[1, 3], [3], [3]], [[1], [4]], [[2], [1, 2]], [[2], [2]], [[2], [2, 1]]],
    helpRefs: [[1], [1], [5], [2], [2], [2]],
    stats: {
      3: [{ value: "2 sets of 15", label: "is the most to build up to, starting from 2 to 3 repetitions at a time, says NHS inform.", ref: 2 }],
    },
    charts: {
      4: { kind: "bars", title: "Reading your pain score", subtitle: "Pain out of 10 while exercising, and where each band ends", bars: [{ label: "Minimal pain, up to", value: 3 }, { label: "Acceptable pain, up to", value: 5, strong: true }, { label: "Excessive pain, up to", value: 10 }], max: 10, ticks: [0, 2, 4, 6, 8, 10], unit: " out of 10", sources: "Source: NHS inform, Exercises for wrist, hand and finger problems" },
    },
  },
  "pain": {
    sectionRefs: [[[1], [1]], [[2, 1], [1, 4]], [[1], [1], [1]], [[3], [3]], [[5, 6]]],
    helpRefs: [[1], [1], [1], [2], [1], [2]],
  },
  "warning-signs": {
    sectionRefs: [[[1], [1]], [[2]], [[3], [3], [3]], [[4], [4]]],
    helpRefs: [[1], [1], [1, 2], [3], [4]],
  },
  "daily-tasks": {
    sectionRefs: [[[1], [1]], [[2], [2], [3, 2]], [[4, 2], [2]], [[2], [2, 3]], [[4], [2]]],
    helpRefs: [[1], [2], [3], [2], [2], [4]],
  },
  "driving-work": {
    sectionRefs: [[[3, 1], [2, 1], [2]], [[4], [4]], [[1], [1]], [[1], [1]]],
    helpRefs: [[3], [1], [2], [4], [1]],
    charts: {
      3: { kind: "bars", title: "Getting back to activities", subtitle: "Weeks after a wrist fracture, from NHS inform's rehabilitation plan", bars: [{ label: "Out of the splint or cast, from", value: 4 }, { label: "Normal day to day activity, from", value: 6, strong: true }, { label: "Contact sports, at", value: 12 }], max: 12, ticks: [0, 3, 6, 9, 12], unit: " weeks", sources: "Source: NHS inform, Wrist fracture" },
    },
  },
  "falls": {
    sectionRefs: [[[1], [7]], [[2], [2]], [[4], [5]], [[3], [6]], [[2, 3], [3, 2]]],
    helpRefs: [[2], [2], [5], [3], [3], [2]],
    stats: {
      0: [{ value: "1 in 3", label: "people over the age of 65 have a fall at least once a year, says NHS inform.", ref: 7, picture: "one-in", of: 3 }],
      2: [
        { value: "At least twice a week", label: "for activities that improve strength and balance, say the NHS physical activity guidelines for older adults.", ref: 4, picture: "calendar" },
        { value: "50 hours", label: "is the least a strength and balance programme should add up to, at least 2 hours a week for at least 6 months, says the Chartered Society of Physiotherapy.", ref: 5 },
      ],
    },
  },
  "long-term": {
    sectionRefs: [[[2], [1], [3]], [[4], [2, 1]], [[5], [6, 7], [6]], [[1, 3], [7]]],
    helpRefs: [[5], [2, 3], [1], [6], [4]],
    stats: {
      0: [{ value: "As long as 12 months", label: "is how long it can take some people to recover from a broken bone, says the Royal Osteoporosis Society.", ref: 3, picture: "calendar" }],
      1: [{ value: "Within 6 weeks", label: "of following the advice: if your wrist function has not improved by then, talk to a healthcare professional, says NHS inform.", ref: 1, picture: "calendar" }],
    },
  },
};
