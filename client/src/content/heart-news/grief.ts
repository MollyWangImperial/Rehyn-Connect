import type { NewsExtras } from "../ischaemic-news";
// Grief and bereavement features: paragraph references (numbers are positions in each answer's own sources in grief-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2, 3]], [[1, 2], [3, 2]], [[1, 5], [2, 1], [3]], [[2, 4], [1]], [[1, 2], [2, 1]]],
    helpRefs: [[1], [5], [2], [1], [6, 7]],
    stats: {
      4: [{ value: "More than 2 weeks", label: "of low mood after a loss is a reason to see a GP, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "no-right-way": {
    sectionRefs: [[[1], [1, 2]], [[2, 1], [1, 7]], [[2], [2]], [[3], [3]], [[5], [4, 6]]],
    helpRefs: [[1], [6], [3], [2], [8, 9]],
  },
  "body": {
    sectionRefs: [[[2], [3, 1]], [[1, 3], [1]], [[1, 3], [1, 4]], [[4], [1, 5]], [[1], [1, 6]]],
    helpRefs: [[1], [1], [1], [4], [1], [7, 8]],
  },
  "other-losses": {
    sectionRefs: [[[1], [2]], [[3], [3], [3]], [[4], [5]], [[3], [3], [6]]],
    helpRefs: [[3], [3], [3], [3], [5], [7, 8]],
    charts: {
      1: { kind: "range", title: "A higher chance of depression", subtitle: "How much more likely depression is with ongoing physical health problems than with good physical health", from: 2, to: 3, unit: "times as likely", sources: "Source: Royal College of Psychiatrists, Physical illness and mental health" },
    },
  },
  "support": {
    sectionRefs: [[[3], [1]], [[2], [2]], [[3, 4], [4], [3, 4]], [[1, 5], [6]], [[7], [5]]],
    helpRefs: [[2], [4, 3], [5, 1], [7], [3], [8, 9]],
    stats: {
      2: [{ value: "Over 80", label: "local Cruse branches across England, Wales and Northern Ireland offer grief support, says Cruse.", ref: 4 }],
      3: [{ value: "18 or over", label: "is the age to refer yourself to NHS talking therapies, or 16 or over in some areas, says the NHS.", ref: 5 }],
    },
    charts: {
      2: { kind: "range", title: "A short course of support", subtitle: "One to one sessions Cruse generally recommends with a trained bereavement supporter", from: 1, to: 6, unit: "sessions", sources: "Source: Cruse Bereavement Support, One to one support" },
    },
  },
  "practical": {
    sectionRefs: [[[1], [1], [4]], [[3], [3, 2, 4]], [[4], [4, 5, 6], [2]], [[7], [4]]],
    helpRefs: [[1], [4], [3], [4], [5, 4], [8, 9]],
    stats: {
      1: [{ value: "28 days", label: "is how long you have to use Tell Us Once after the registrar gives you your reference number, says the government.", ref: 3, picture: "calendar" }],
    },
    charts: {
      0: { kind: "bars", title: "Time to register a death", subtitle: "Days you have to register, once the medical examiner's office confirms you can, including weekends and bank holidays", bars: [{ label: "England, Wales and Northern Ireland", value: 5, strong: true }, { label: "Scotland", value: 8 }], max: 8, unit: " days", ticks: [0, 4, 8], sources: "Source: GOV.UK, What to do after someone dies; Cruse Bereavement Support, What to do after someone dies" },
    },
  },
  "looking-after": {
    sectionRefs: [[[1], [2]], [[3, 1], [3], [3]], [[1, 4], [4]], [[2, 3], [5], [6]], [[1, 3], [3, 7]]],
    helpRefs: [[1], [2, 3], [4], [5], [1, 7], [8, 9]],
    stats: {
      2: [{ value: "5 minutes", label: "is a good first walk after a death; slowly increase it until you reach your comfort level, says Cruse.", ref: 4, picture: "hours" }],
    },
  },
  "stuck": {
    sectionRefs: [[[1], [2]], [[1], [2], [1, 9]], [[1, 2], [6]], [[3], [4]], [[2], [2, 5]]],
    helpRefs: [[1], [2], [2], [2], [2], [8, 9]],
    stats: {
      0: [{ value: "More than 6 months", label: "of intense grief, with ongoing difficulty coping with life, is how Cruse describes prolonged grief disorder.", ref: 2, picture: "calendar" }],
    },
  },
  "anniversaries": {
    sectionRefs: [[[1], [2, 6], [2]], [[1], [4]], [[4], [3], [3, 7]], [[1, 5, 3], [1, 3]]],
    helpRefs: [[1], [4], [5, 3], [1], [3], [8, 9]],
  },
  "children": {
    sectionRefs: [[[1], [1, 5], [2]], [[3], [3]], [[1], [4]], [[1, 5], [4, 1, 2], [6]], [[7], [4, 10, 2]]],
    helpRefs: [[1], [1, 5], [5, 1], [4, 1], [2, 1], [9, 10]],
    stats: {
      1: [{ value: "By the age of 7", label: "the average child accepts that all people, including themselves, will eventually die, says Cruse.", ref: 5 }],
    },
  },
  "helping-others": {
    sectionRefs: [[[1], [2, 1, 5]], [[1], [2, 5]], [[1], [5, 2, 1]], [[3], [3]], [[4], [6]]],
    helpRefs: [[1, 2], [1], [1], [3], [4], [7, 6]],
  },
  "crisis": {
    sectionRefs: [[[1], [1]], [[2], [3]], [[3, 2], [4, 2, 5], [2]], [[2], [1]], [[7, 6], [2]]],
    helpRefs: [[3], [3], [4, 2], [2, 5], [1, 2], [2]],
    stats: {
      2: [{ value: "24 hours", label: "a day, every day, Samaritans (116 123) and the Shout text line (85258) are open, says the NHS.", ref: 2, picture: "hours" }],
    },
  },
};
