import type { NewsExtras } from "../ischaemic-news";
// Seasonal affective disorder features: paragraph references (numbers are positions in each answer's own sources in sad-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [2]], [[5], [4, 3, 2]], [[3, 1], [1]], [[3], [3, 4]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1], [6, 7]],
    stats: {
      3: [{ value: "About 1 in 15", label: "people in the UK experience SAD each winter, according to studies quoted by Rethink Mental Illness.", ref: 3, picture: "one-in", of: 15 }],
    },
    charts: {
      3: { kind: "donut", title: "Severely affected", subtitle: "People in the UK severely affected by winter SAD, out of every 100", value: 3, prefix: "About", subject: "people in the UK", label: "are severely affected by winter SAD", sources: "Source: Rethink Mental Illness, Seasonal affective disorder (SAD)" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [1]], [[2], [3, 5]], [[5], [5], [6]], [[4]], [[1, 6], [2]]],
    helpRefs: [[2], [1], [6], [6], [7, 8]],
    stats: {
      2: [{ value: "About 2 weeks", label: "is how long a low mood can last before it may be a sign of depression, says NHS Every Mind Matters.", ref: 6, picture: "calendar" }],
    },
  },
  "causes": {
    sectionRefs: [[[1, 2], [4]], [[1], [5]], [[1, 4], [6]], [[3, 4], [4]], [[3, 6], [4]]],
    helpRefs: [[1], [3], [6], [6], [2], [7, 8]],
    stats: {
      0: [{ value: "Around 1 in 10", label: "people in Scotland are affected by SAD each year, where daylight is lower, says Change Mental Health.", ref: 4, picture: "one-in", of: 10 }],
      4: [{ value: "At least 20 minutes", label: "outdoors each morning, even on cloudy days, helps reset your body clock, says The Sleep Charity.", ref: 6, picture: "hours" }],
    },
  },
  "diagnosis": {
    sectionRefs: [[[2]], [[1], [2]], [[1], [2]], [[3], [3]], [[4], [1]]],
    helpRefs: [[1], [1], [2], [4], [1], [5, 6]],
    stats: {
      2: [{ value: "2 years or longer", label: "of depression symptoms at a particular time of year can lead to a diagnosis of SAD, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "daylight": {
    sectionRefs: [[[1], [4]], [[1, 2], [3, 5]], [[4, 6], [2]], [[2], [1]], [[3], [1]]],
    helpRefs: [[1], [5], [4], [2], [1], [7, 8]],
    stats: {
      1: [{ value: "At least 20 minutes", label: "outdoors each morning is what The Sleep Charity suggests, even on cloudy days.", ref: 5, picture: "hours" }],
      2: [{ value: "10 minutes", label: "of brisk walking can clear your mind and help you relax, says the NHS.", ref: 6, picture: "hours" }],
    },
  },
  "light-therapy": {
    sectionRefs: [[[1, 2]], [[1], [2]], [[1], [2, 3]], [[1], [2]], [[1, 2, 4], [2]]],
    helpRefs: [[1], [1], [1], [2], [2], [5, 6]],
    stats: {
      3: [{ value: "10,000 lux", label: "is the standard brightness for a light box or SAD lamp, says the NHS.", ref: 1 }],
      4: [{ value: "Around 30 minutes", label: "a day is how long you would sit in front of a light box, says The Sleep Charity.", ref: 4, picture: "hours" }],
    },
  },
  "talking": {
    sectionRefs: [[[1, 7], [2]], [[5], [2]], [[4, 1], [4]], [[3], [3]], [[2], [6]]],
    helpRefs: [[4, 1], [2], [3], [3], [2], [8, 9]],
    stats: {
      2: [{ value: "18 or over", label: "is the age to refer yourself to NHS talking therapies, or 16 or over in some areas, says the NHS.", ref: 1 }],
    },
    charts: {
      3: { kind: "range", title: "A course of CBT", subtitle: "Sessions usually offered, depending on what you are having it for", from: 5, to: 15, unit: "sessions", sources: "Source: NHS, Cognitive behavioural therapy (CBT)" },
    },
  },
  "medicines": {
    sectionRefs: [[[1, 2, 4], [2]], [[2], [1, 2]], [[3], [3]], [[3], [3]], [[3], [3]]],
    helpRefs: [[2], [3], [3], [3], [3], [5, 6]],
    stats: {
      2: [{ value: "Up to 8 weeks", label: "is how long antidepressants can take to work fully, says the NHS.", ref: 3, picture: "calendar" }],
      3: [{ value: "Every 1 to 2 weeks", label: "you will be seen by a doctor when you first start taking antidepressants, says the NHS.", ref: 3, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "Time to start working", subtitle: "Weeks an antidepressant usually takes to start having an effect", from: 1, to: 2, unit: "weeks", sources: "Source: NHS, Antidepressants" },
    },
  },
  "routine": {
    sectionRefs: [[[2], [1]], [[1, 5], [4, 2]], [[6, 1], [1, 5]], [[1, 4], [4, 7]], [[3], [4]]],
    helpRefs: [[1], [1, 6], [1], [5], [1, 7], [8, 9]],
    stats: {
      3: [{ value: "6 hours", label: "before bed is when to stop alcohol, tea, coffee and smoking, says NHS Every Mind Matters.", ref: 4, picture: "hours" }],
      4: [{ value: "4 hours", label: "before bed is the window in which the NHS advises avoiding exercise.", ref: 4, picture: "hours" }],
    },
    charts: {
      1: { kind: "range", title: "How much sleep adults need", subtitle: "Hours of sleep most healthy adults need each night", from: 7, to: 9, unit: "hours a night", sources: "Source: NHS Every Mind Matters, Sleep problems" },
    },
  },
  "planning": {
    sectionRefs: [[[2, 1], [2]], [[2, 1], [2, 4]], [[3], [3]], [[1], [6], [5]], [[1], [1]]],
    helpRefs: [[2], [2], [3], [3], [6], [7, 8]],
    stats: {
      3: [{ value: "10 micrograms", label: "of vitamin D a day is the supplement everyone should consider in autumn and winter, says the NHS.", ref: 6 }],
    },
    charts: {
      2: { kind: "range", title: "Easing into the clock change", subtitle: "How much later to go to bed and get up each day, in the week before the clocks go back", from: 10, to: 15, unit: "minutes later each day", sources: "Source: The Sleep Charity, Prepare for the October clock change" },
    },
  },
  "food-activity": {
    sectionRefs: [[[1, 2], [4, 7]], [[2, 3], [2, 6], [2]], [[1, 4], [5, 6]], [[10]], [[1, 4], [9, 8]]],
    helpRefs: [[1, 2], [2], [4, 5], [10], [9, 8], [11, 12]],
    stats: {
      1: [{ value: "150 minutes", label: "of moderate activity a week is what to build up towards, says the NHS.", ref: 2, picture: "hours" }],
      2: [{ value: "At least 5", label: "portions of a variety of fruit and vegetables a day, says the NHS Eatwell Guide.", ref: 5 }],
      3: [{ value: "10 micrograms", label: "of vitamin D a day is the supplement everyone should consider in autumn and winter, says the NHS.", ref: 10 }],
    },
  },
  "help": {
    sectionRefs: [[[7, 1], [7, 2]], [[5], [5]], [[1], [2]], [[4, 3], [2, 6]], [[1, 3], [2, 1]]],
    helpRefs: [[1, 3], [1, 3], [4, 3], [2], [2], [2]],
    stats: {
      1: [{ value: "1 in 5", label: "people who call Samaritans say they feel suicidal. You don't have to feel suicidal to get in touch, says Samaritans.", ref: 5, picture: "one-in", of: 5 }],
      3: [{ value: "24 hours", label: "a day, every day, Samaritans (116 123) and the Shout text line (85258) are open, says the NHS.", ref: 2, picture: "hours" }],
    },
  },
};
