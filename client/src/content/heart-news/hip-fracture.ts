import type { NewsExtras } from "../ischaemic-news";
// Hip fracture features: paragraph references (numbers are positions in each answer's own sources in hip-fracture-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[3, 1], [2]], [[1], [1]], [[1], [1]], [[3, 1], [2]], [[4]]],
    helpRefs: [[1], [1], [1], [1], [3]],
    stats: {
      0: [{ value: "Around 6,000", label: "broken hips happen in Scotland each year, most of them caused by a fall, says NHS inform.", ref: 5 }],
    },
  },
  "why": {
    sectionRefs: [[[1, 6], [3]], [[1, 2], [3]], [[3], [2]], [[4], [5, 4]], [[4]]],
    helpRefs: [[5], [3], [5], [5], [2]],
    stats: {
      1: [{ value: "After 35", label: "bone loss slowly increases, making bones weaker, says the Chartered Society of Physiotherapy.", ref: 3 }],
      3: [{ value: "1 in 3", label: "people over the age of 65 have a fall at least once a year, says NHS inform.", ref: 4, picture: "one-in", of: 3 }],
    },
  },
  "operation": {
    sectionRefs: [[[1], [4]], [[3, 1], [2, 4]], [[1, 2], [3]], [[2], [2, 3]], [[5], [5]]],
    helpRefs: [[4], [2], [3], [5], [1]],
    stats: {
      2: [{ value: "Same day or next", label: "is when you will usually have surgery, counting from the day you arrive at hospital, says the NHS.", ref: 1, picture: "calendar" }],
      3: [{ value: "The day after", label: "the operation is usually when you get up and about, with a physiotherapist and a walking frame, says the Royal Osteoporosis Society.", ref: 2, picture: "calendar" }],
    },
  },
  "recovery-time": {
    sectionRefs: [[[1, 2], [3]], [[1, 2], [5, 2]], [[3], [3]], [[3], [3]], [[4, 1], [3]]],
    helpRefs: [[1], [2], [2], [3], [5]],
    stats: {
      0: [{ value: "6 to 12 weeks", label: "is how long a broken bone usually takes to heal, though it can take longer, says the Royal Osteoporosis Society.", ref: 2, picture: "calendar" }],
      1: [{ value: "1 to 4 weeks", label: "is how long you will usually spend in hospital after a broken hip, says the NHS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      3: { kind: "bars", title: "Back to everyday life", subtitle: "Weeks after a hip fracture from when NHS inform's general guidelines say each may be possible", bars: [{ label: "Driving, if you can do an emergency stop", value: 6 }, { label: "Light or office work", value: 6 }, { label: "Gentle exercise, such as swimming", value: 6 }, { label: "Active or manual work", value: 12, strong: true }, { label: "Running, jumping or heavy lifting", value: 12 }], max: 12, ticks: [0, 3, 6, 9, 12], unit: " weeks", sources: "Source: NHS inform, Recovery from a hip fracture" },
    },
  },
  "moving": {
    sectionRefs: [[[1], [2]], [[1], [4, 5]], [[3], [3]], [[3], [3]], [[3], [3]]],
    helpRefs: [[1], [3], [3], [3], [3]],
    stats: {
      0: [{ value: "The day after surgery", label: "is when NICE recommends getting moving, unless there is a medical reason not to.", ref: 2, picture: "calendar" }],
      3: [{ value: "5 minutes", label: "of confident walking is a first aim, then a little longer every few days as you feel able, says NHS inform.", ref: 3, picture: "hours" }],
    },
  },
  "exercises": {
    sectionRefs: [[[4], [1, 2]], [[1], [3]], [[2], [2]], [[1], [2]], [[1], [1]]],
    helpRefs: [[4], [1], [1], [1], [1], [5]],
    stats: {
      3: [{ value: "2 sets of 15", label: "is the most to build up to, starting from 2 to 3 repetitions at a time, says NHS inform.", ref: 2 }],
    },
    charts: {
      4: { kind: "bars", title: "Reading your pain score", subtitle: "Pain out of 10 while exercising, and where each band ends", bars: [{ label: "Minimal pain, up to", value: 3 }, { label: "Acceptable pain, up to", value: 5, strong: true }, { label: "Excessive pain, up to", value: 10 }], max: 10, ticks: [0, 2, 4, 6, 8, 10], unit: " out of 10", sources: "Source: NHS inform, Exercises for recovery from a hip fracture" },
    },
  },
  "pain": {
    sectionRefs: [[[1, 2], [4]], [[3], [3, 2]], [[1], [1, 7]], [[1], [1]], [[1, 5], [5]]],
    helpRefs: [[1], [1], [1], [5], [1], [6]],
    stats: {
      0: [{ value: "6 weeks or longer", label: "of pain is normal and expected after a hip fracture, says NHS inform.", ref: 1, picture: "calendar" }],
      1: [{ value: "Every 6 hours", label: "is how often NICE recommends offering paracetamol after the operation, unless it is not suitable.", ref: 3, picture: "hours" }],
      4: [{ value: "7 to 9 hours", label: "of sleep a night is what adults need on average, says the NHS.", ref: 5, picture: "hours" }],
    },
  },
  "confusion": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[2, 1], [2, 4]], [[1, 2], [3]], [[2], [2]]],
    helpRefs: [[1], [2], [2], [2, 3], [2], [3]],
    stats: {
      2: [{ value: "Around 1 in 7", label: "adults in hospital have delirium, one of the most common medical emergencies, says NHS inform.", ref: 2, picture: "one-in", of: 7 }],
    },
  },
  "home": {
    sectionRefs: [[[1], [1]], [[2, 1], [2]], [[3], [6]], [[4], [5]], [[7], [4, 5]]],
    helpRefs: [[1], [2], [4], [3], [3], [7]],
    stats: {
      1: [{ value: "Up to 6 weeks", label: "is usually the most that free intermediate care lasts, says the NHS.", ref: 2, picture: "calendar" }],
      3: [{ value: "Under £1,000", label: "is the cost of each adaptation your council should pay for, such as grab rails, says the NHS.", ref: 5 }],
    },
  },
  "next-fall": {
    sectionRefs: [[[6], [1]], [[1, 8], [4]], [[1, 3], [2]], [[1, 3], [3, 7]], [[1, 5], [1, 5]]],
    helpRefs: [[1], [1, 3], [1], [3], [1], [3]],
    stats: {
      1: [
        { value: "At least twice a week", label: "for activities that improve strength and balance, say the NHS physical activity guidelines for older adults.", ref: 8, picture: "calendar" },
        { value: "50 hours", label: "is the least a strength and balance programme should add up to, at least 2 hours a week for at least 6 months, says the Chartered Society of Physiotherapy.", ref: 4 },
      ],
    },
  },
  "bones": {
    sectionRefs: [[[8, 1], [2]], [[3], [3]], [[5, 4], [2, 4]], [[2], [3]], [[2], [6, 7]]],
    helpRefs: [[1], [3], [5], [4], [6], [3]],
    stats: {
      2: [{ value: "6 to 12 months", label: "is how long bisphosphonates usually take to work, says the NHS.", ref: 2, picture: "calendar" }],
      3: [{ value: "Every 3 to 5 years", label: "your bone medicine and bone strength should be reviewed, says the Royal Osteoporosis Society.", ref: 3, picture: "calendar" }],
      4: [{ value: "10 micrograms", label: "of vitamin D a day is what all adults should have, says the NHS.", ref: 2 }],
    },
  },
  "confidence": {
    sectionRefs: [[[1], [2, 5]], [[3], [3]], [[2], [4]], [[4, 2], [4]], [[4], [6]]],
    helpRefs: [[2], [4], [2], [4], [4], [4]],
  },
};
