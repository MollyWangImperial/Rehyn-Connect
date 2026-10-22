import type { NewsExtras } from "../ischaemic-news";
// Health anxiety features: paragraph references (numbers are positions in each answer's own sources in health-anxiety-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [3]], [[4], [4]], [[4], [1, 3]], [[5], [6, 2]], [[6, 1], [4]]],
    helpRefs: [[1], [1], [1], [4], [7, 8]],
    stats: {
      3: [{ value: "1 in 4", label: "doctor's appointments are the result of health anxiety, No Panic estimates.", ref: 5, picture: "one-in", of: 4 }],
    },
  },
  "cycle": {
    sectionRefs: [[[1], [1]], [[1], [1, 2]], [[1], [1, 3]], [[1], [1], [2]], [[2], [3]]],
    helpRefs: [[1], [4], [4], [4], [5, 6]],
  },
  "after-illness": {
    sectionRefs: [[[1], [1], [2]], [[3], [4]], [[4], [3]], [[4], [4]], [[4], [4]]],
    helpRefs: [[4], [4], [4], [4], [3], [5, 6]],
    stats: {
      1: [{ value: "1 in 4", label: "people who have a stroke will experience anxiety within the first five years, says the Stroke Association.", ref: 3, picture: "one-in", of: 4 }],
    },
  },
  "signs": {
    sectionRefs: [[[1], [1]], [[2], [3]], [[4], [4]], [[1, 4], [2]]],
    helpRefs: [[1], [1], [4], [2], [5, 6]],
    stats: {
      2: [{ value: "At least 6 months", label: "of preoccupation with having a serious illness is one of the questions in Anxiety UK's self-check.", ref: 4, picture: "calendar" }],
    },
  },
  "cbt": {
    sectionRefs: [[[1, 2], [3, 2]], [[2], [2]], [[1], [1]], [[4], [1], [5, 4]], [[1]]],
    helpRefs: [[3, 5], [1], [1], [1], [4], [6, 7]],
    stats: {
      3: [
        { value: "18 or over", label: "is the age to refer yourself to NHS talking therapies, or 16 or over in some areas, says the NHS.", ref: 4 },
        { value: "From £35", label: "a session is what private therapy can cost, though free or low-cost sessions from £15 are sometimes available, says the NHS.", ref: 5 },
      ],
    },
    charts: {
      3: { kind: "range", title: "A typical course of CBT", subtitle: "Sessions of CBT people usually have, depending on what they are having it for", from: 5, to: 15, unit: "sessions", sources: "Source: NHS, Cognitive behavioural therapy (CBT)" },
    },
  },
  "checking-less": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[2], [3]], [[1, 2], [3]], [[2], [2, 1]]],
    helpRefs: [[1], [1, 2], [2], [2, 3], [1], [4, 5]],
    charts: {
      1: { kind: "bars", title: "One week, fewer checks", subtitle: "Body checks Mary planned to allow herself each day, in an example plan from an NHS self-help guide", bars: [{ label: "Mon", value: 35, strong: true }, { label: "Tue", value: 30 }, { label: "Wed", value: 20 }, { label: "Thu", value: 15 }, { label: "Fri", value: 10 }, { label: "Sat", value: 5 }, { label: "Sun", value: 2, strong: true }], max: 40, ticks: [0, 10, 20, 30, 40], unit: "checks", sources: "Source: Cumbria, Northumberland, Tyne and Wear NHS Foundation Trust, Health anxiety self-help guide" },
      2: { kind: "bars", title: "Searching less, week by week", subtitle: "Times Jill planned to look up illness on the internet each week, in an example plan from an NHS self-help guide", bars: [{ label: "Week 1", value: 30, strong: true }, { label: "Week 2", value: 15 }, { label: "Week 3", value: 7 }, { label: "Week 4", value: 0, strong: true }], max: 30, ticks: [0, 10, 20, 30], unit: "times", sources: "Source: Cumbria, Northumberland, Tyne and Wear NHS Foundation Trust, Health anxiety self-help guide" },
    },
  },
  "medicines": {
    sectionRefs: [[[1], [2, 3]], [[2, 3], [4, 5]], [[4], [4], [4]], [[3], [3]], [[4], [4]]],
    helpRefs: [[1, 3], [4], [4], [4], [4, 3], [6, 7]],
    stats: {
      2: [{ value: "Up to 8 weeks", label: "is how long antidepressants can take to work fully, though they usually start to have an effect in 1 to 2 weeks, says the NHS.", ref: 4, picture: "calendar" }],
      4: [{ value: "At least 6 months", label: "is how long you will usually keep taking an antidepressant after you feel better, says the NHS.", ref: 4, picture: "calendar" }],
    },
  },
  "gp-plan": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[4], [4]], [[3], [3]], [[5, 1]]],
    helpRefs: [[4, 3], [4], [3], [3], [5, 1], [6, 7]],
    stats: {
      2: [{ value: "10 minutes", label: "is usually the longest a GP appointment lasts, so you can ask for a double appointment, says Rethink Mental Illness.", ref: 4, picture: "hours" }],
    },
  },
  "uncertainty": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[2], [2]], [[3], [1]], [[4], [1]]],
    helpRefs: [[1], [1], [2], [3], [4, 1], [5, 6]],
    stats: {
      2: [{ value: "10 or 15 minutes", label: "a day is the short worry time NHS Every Mind Matters suggests, to write worries down and look for solutions.", ref: 2, picture: "hours" }],
    },
  },
  "family": {
    sectionRefs: [[[1], [2, 1]], [[3], [4]], [[1], [2]], [[2], [2, 4]], [[4], [4]]],
    helpRefs: [[4, 3], [1], [2], [2], [4], [5, 6]],
    charts: {
      2: { kind: "bars", title: "Asking less, worrying less", subtitle: "Times John asked for reassurance or comfort each day, in an example record from an NHS self-help guide (his worry fell from 9 to 2 out of 10 over the same week)", bars: [{ label: "Mon", value: 10, strong: true }, { label: "Tue", value: 10 }, { label: "Wed", value: 6 }, { label: "Thu", value: 6 }, { label: "Fri", value: 2 }, { label: "Sat", value: 2 }, { label: "Sun", value: 1, strong: true }], max: 10, ticks: [0, 2, 4, 6, 8, 10], unit: "times", sources: "Source: Cumbria, Northumberland, Tyne and Wear NHS Foundation Trust, Health anxiety self-help guide" },
    },
  },
  "new-symptoms": {
    sectionRefs: [[[1, 2], [3]], [[4], [5]], [[6, 7], [4]], [[4, 8], [9, 10]], [[11], [10]]],
    helpRefs: [[4, 5], [7], [4, 8], [1], [10, 11], [12, 13]],
    charts: {
      3: { kind: "donut", title: "Symptoms put down to anxiety", subtitle: "People with generalised anxiety disorder in an Anxiety UK survey, out of every 100", value: 44, subject: "people with generalised anxiety disorder", label: "said they have or may have had problems getting medical help for a physical condition because of their anxiety", sources: "Source: Anxiety UK, Medical gaslighting, diagnostic overshadowing and anxiety" },
    },
  },
  "self-help": {
    sectionRefs: [[[1], [1], [1]], [[2], [2]], [[3], [2]], [[4, 2], [5, 6]], [[7], [1]]],
    helpRefs: [[1], [1], [2], [3], [4, 2], [8, 9]],
    stats: {
      2: [{ value: "At least 5 minutes", label: "is how long to repeat the NHS calming breathing exercise, ideally as part of your daily routine.", ref: 3, picture: "hours" }],
    },
  },
};
