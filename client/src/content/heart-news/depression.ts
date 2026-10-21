import type { NewsExtras } from "../ischaemic-news";
// Depression features: paragraph references (numbers are positions in each answer's own sources in depression-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [4]], [[6], [2, 3]], [[2, 1], [2]], [[1], [4, 5]], [[2], [2, 1]]],
    helpRefs: [[2], [1], [3], [3], [6]],
    stats: {
      1: [{ value: "About 2 weeks", label: "is how long a low mood can last before it may be a sign of depression, says NHS Every Mind Matters.", ref: 6, picture: "calendar" }],
      3: [{ value: "About 1 in 6", label: "people are affected by depression, one of the most common mental illnesses, says Rethink Mental Illness.", ref: 5, picture: "one-in", of: 6 }],
    },
  },
  "illness-link": {
    sectionRefs: [[[2], [1]], [[1, 2], [1, 5]], [[1], [2]], [[1], [3]], [[1], [1, 4]]],
    helpRefs: [[1], [1], [5, 1], [1], [1], [1]],
    stats: {
      3: [{ value: "Around 1 in 3", label: "stroke survivors will have some form of depression within the first year, says the Stroke Association.", ref: 3, picture: "one-in", of: 3 }],
    },
    charts: {
      0: { kind: "range", title: "A higher chance of depression", subtitle: "How much more likely depression is with ongoing physical health problems than with good physical health", from: 2, to: 3, unit: "times as likely", sources: "Source: Royal College of Psychiatrists, Physical illness and mental health" },
    },
  },
  "body": {
    sectionRefs: [[[1], [2]], [[1], [2]], [[2, 1], [2]], [[2, 3], [3, 2]], [[4], [5]]],
    helpRefs: [[5, 2], [2], [2], [2], [2]],
  },
  "urgent": {
    sectionRefs: [[[1], [6]], [[1], [2]], [[2, 4], [1, 8]], [[3, 4], [1, 5], [7]], [[1], [1], [1, 8]]],
    helpRefs: [[2, 4], [2, 4], [3, 4], [1, 5], [1], [1]],
    stats: {
      3: [
        { value: "24 hours", label: "a day, every day, Samaritans (116 123) and the Shout text line (85258) are open, says the NHS.", ref: 1, picture: "hours" },
        { value: "1 in 5", label: "people who call Samaritans say they feel suicidal. You don't have to feel suicidal to get in touch, says Samaritans.", ref: 7, picture: "one-in", of: 5 },
      ],
    },
  },
  "talking": {
    sectionRefs: [[[1], [5]], [[2, 3], [2, 3]], [[3, 1], [3]], [[3, 1], [1]], [[3, 4], [2]]],
    helpRefs: [[3, 1], [2], [3], [1], [2]],
    stats: {
      2: [{ value: "6 to 8", label: "sessions is the usual length of guided self-help for depression, says the NHS.", ref: 3 }],
      3: [{ value: "18 or over", label: "is the age to refer yourself to NHS talking therapies, or 16 or over in some areas, says the NHS.", ref: 1 }],
    },
    charts: {
      1: { kind: "range", title: "A course of CBT for depression", subtitle: "Sessions usually offered, depending on how severe the depression is", from: 8, to: 16, unit: "sessions", sources: "Source: NHS, Depression in adults: treatment" },
    },
  },
  "antidepressants": {
    sectionRefs: [[[1], [2, 1]], [[1, 4], [4], [1]], [[1], [2, 1]], [[1], [1]], [[1, 5], [2, 1]]],
    helpRefs: [[5], [1], [1], [4, 3], [1, 3], [3, 4]],
    stats: {
      2: [{ value: "Up to 8 weeks", label: "is how long antidepressants can take to work fully, says the NHS.", ref: 1, picture: "calendar" }],
      4: [{ value: "At least 6 months", label: "after you feel better is how long you'll usually keep taking them, says the NHS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "Time to start working", subtitle: "Weeks an antidepressant usually takes to start having an effect", from: 1, to: 2, unit: "weeks", sources: "Source: NHS, Antidepressants" },
    },
  },
  "activity": {
    sectionRefs: [[[2], [5]], [[1], [1], [4]], [[3], [3, 2]], [[2], [2]], [[2], [4]]],
    helpRefs: [[3], [2], [2], [2], [1], [6]],
    stats: {
      3: [{ value: "3 days", label: "is the length of the first activity plan suggested in NHS inform's depression self-help guide.", ref: 2, picture: "calendar" }],
    },
    charts: {
      1: { kind: "range", title: "A course of behavioural activation", subtitle: "Individual sessions usually offered, depending on how severe the depression is", from: 12, to: 16, unit: "sessions", sources: "Source: NHS, Depression in adults: treatment" },
    },
  },
  "exercise-sleep": {
    sectionRefs: [[[2, 3], [1]], [[1], [1]], [[7], [4], [4]], [[8, 5], [6]], [[5, 6], [7, 5]]],
    helpRefs: [[1], [1], [4], [5, 6], [5], [5]],
    stats: {
      0: [{ value: "10 weeks", label: "is how long a group exercise programme for depression usually runs, with more than 1 session a week, says the NHS.", ref: 1, picture: "calendar" }],
      1: [{ value: "150 minutes", label: "of moderate activity every week is what adults should aim for, says the NHS.", ref: 1, picture: "hours" }],
      4: [{ value: "6 hours", label: "before bed is when to stop tea, coffee, alcohol and smoking, says the NHS.", ref: 5, picture: "hours" }],
    },
    charts: {
      3: { kind: "range", title: "How much sleep adults need", subtitle: "Hours of sleep most healthy adults need each night", from: 7, to: 9, unit: "hours a night", sources: "Source: NHS Every Mind Matters, Sleep problems" },
    },
  },
  "telling-people": {
    sectionRefs: [[[1, 3], [2]], [[3, 4], [3]], [[2], [6]], [[1, 9], [8]], [[5], [7]]],
    helpRefs: [[2], [3], [2, 1], [1, 2], [5], [6]],
  },
  "work": {
    sectionRefs: [[[1], [3]], [[2], [2]], [[4], [4]], [[4, 1, 2], [4]], [[5], [4]]],
    helpRefs: [[4], [4], [2], [4, 1], [5, 4], [1, 6]],
    stats: {
      0: [{ value: "Up to 28 weeks", label: "of Statutory Sick Pay from your employer if you're too ill to work, says the government.", ref: 3, picture: "calendar" }],
      1: [{ value: "More than 7 days", label: "off sick in a row, including weekends, means giving your employer a fit note, says the government.", ref: 2, picture: "calendar" }],
    },
  },
  "relapse": {
    sectionRefs: [[[1], [2]], [[4], [3], [5]], [[2], [2]], [[7], [1, 7]], [[6], [2, 8]]],
    helpRefs: [[4], [5], [2], [1], [6], [8, 2]],
    stats: {
      1: [{ value: "At least twice a year", label: "is how often you'll be reviewed if you take antidepressants long term, says the NHS.", ref: 3, picture: "calendar" }],
    },
    charts: {
      0: { kind: "donut", title: "It can come back", subtitle: "People having depression for the first time, out of every 100 (a roughly 50:50 chance)", value: 50, prefix: "About", subject: "people with a first episode of depression", label: "become depressed again", sources: "Source: Royal College of Psychiatrists, Depression in adults" },
    },
  },
  "carers": {
    sectionRefs: [[[1], [1, 2]], [[1], [2]], [[1, 2], [2]], [[1, 4], [3], [3, 5]], [[1, 3], [6]]],
    helpRefs: [[1], [2], [2], [1], [3], [6, 3]],
    stats: {
      4: [{ value: "At least an hour", label: "is how long a free carer's assessment usually lasts, says the NHS.", ref: 6, picture: "hours" }],
    },
  },
};
