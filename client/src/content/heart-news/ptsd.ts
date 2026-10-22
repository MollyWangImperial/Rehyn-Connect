import type { NewsExtras } from "../ischaemic-news";
// PTSD features: paragraph references (numbers are positions in each answer's own sources in ptsd-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[2, 1], [1, 4]], [[1], [1], [3]], [[1], [4, 1]], [[1, 4], [1, 4]], [[2], [5, 2]]],
    helpRefs: [[2], [2], [2, 1], [1], [1, 4], [7, 8]],
    stats: {
      3: [
        { value: "Around 1 in 20", label: "adults in England screened positive for PTSD in a national survey, says the Royal College of Psychiatrists.", ref: 1, picture: "one-in", of: 20 },
        { value: "Around 1 in 3", label: "adults in England report at least one major traumatic event in their lifetime, says the Royal College of Psychiatrists.", ref: 1, picture: "one-in", of: 3 },
      ],
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [2, 4]], [[1, 4, 3], [4, 1], [5, 3, 7]], [[1, 4], [6]], [[4, 2], [1]], [[1, 3], [4]]],
    helpRefs: [[4], [3], [3], [1], [5, 7], [8, 9]],
    stats: {
      4: [
        { value: "About 4 weeks", label: "after the event, contact your GP practice if you are still having problems, says NHS inform.", ref: 4, picture: "calendar" },
        { value: "Around 15 in 100", label: "people may have a delay of months or even years before symptoms start to appear, says PTSD UK.", ref: 3 },
      ],
    },
  },
  "causes": {
    sectionRefs: [[[1, 5], [1, 2]], [[1, 2, 5], [3]], [[1, 2]], [[3], [2, 4]], [[2], [4]]],
    helpRefs: [[2, 6], [2], [2, 6], [1, 2], [6], [7, 8]],
    charts: {
      3: { kind: "donut", title: "Most people do not develop it", subtitle: "People who go through a trauma, out of every 100, PTSD UK estimates", value: 20, prefix: "Around", subject: "people who go through a trauma", label: "go on to develop PTSD", sources: "Source: PTSD UK, Causes of PTSD" },
    },
  },
  "complex": {
    sectionRefs: [[[1, 3], [3, 2]], [[1], [2], [4, 5]], [[2], [2], [2]], [[6], [2]], [[5, 4]]],
    helpRefs: [[5], [5], [2, 4], [2], [6], [7, 8]],
    stats: {
      2: [{ value: "3 stages", label: "is how the work with a therapist often happens in complex PTSD, though not everyone needs them all, says the Royal College of Psychiatrists.", ref: 2 }],
    },
  },
  "therapy": {
    sectionRefs: [[[2], [2]], [[3], [3, 6]], [[2, 7], [5], [4]], [[2, 3], [2]], [[8], [8]]],
    helpRefs: [[1, 7], [2], [2], [8], [9], [10, 11]],
    stats: {
      3: [{ value: "60 to 90 minutes", label: "is how long a session of trauma-focused CBT usually lasts, with the same therapist each week, says NHS inform.", ref: 3, picture: "hours" }],
    },
    charts: {
      3: { kind: "range", title: "A course of therapy", subtitle: "Sessions of trauma-focused CBT or EMDR you will usually have", from: 8, to: 12, unit: "sessions", sources: "Sources: Royal College of Psychiatrists; NHS inform" },
    },
  },
  "medicines": {
    sectionRefs: [[[2], [2, 3]], [[2, 6, 7], [4, 2]], [[5], [5, 6], [5]], [[1], [6, 7]], [[1, 5], [5, 4]]],
    helpRefs: [[5], [5], [1], [1], [6, 7], [8, 9]],
    stats: {
      2: [{ value: "Up to 8 weeks", label: "is how long antidepressants can take to work fully, says the NHS.", ref: 5, picture: "calendar" }],
      4: [{ value: "At least 6 months", label: "after you feel better is how long you will usually keep taking an antidepressant, says the NHS.", ref: 5, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "Starting to work", subtitle: "Weeks antidepressants usually take to start having an effect, says the NHS", from: 1, to: 2, unit: "weeks", sources: "Source: NHS, Antidepressants" },
    },
  },
  "getting-help": {
    sectionRefs: [[[2], [1]], [[1, 6], [1, 3]], [[1, 5], [5]], [[2, 4], [1, 3], [4, 7]], [[2, 6]]],
    helpRefs: [[2], [1, 5], [6], [3], [3], [8, 9]],
    stats: {
      0: [{ value: "About 4 weeks", label: "after a traumatic event, contact your GP practice if you are still having problems, says NHS inform.", ref: 2, picture: "calendar" }],
      2: [{ value: "18 or over", label: "is the age to refer yourself to NHS talking therapies, or 16 or over in some areas, says the NHS.", ref: 1 }],
    },
  },
  "grounding": {
    sectionRefs: [[[1], [4]], [[3], [2, 3], [3]], [[2], [5]], [[2], [6]], [[2], [7]]],
    helpRefs: [[2, 3], [2], [5], [2], [4], [8, 9]],
    stats: {
      2: [{ value: "At least 5 minutes", label: "of calm breathing, counting from 1 to 5 in and out, is what the NHS breathing exercise suggests.", ref: 5, picture: "hours" }],
    },
  },
  "sleep": {
    sectionRefs: [[[1, 3], [4]], [[2], [2]], [[2], [2, 5], [2]], [[5, 2], [1, 8]], [[6, 5], [7, 3]]],
    helpRefs: [[2, 5], [2], [2], [5], [2], [9, 10]],
    stats: {
      3: [{ value: "At least 6 hours", label: "before bed is when to stop drinking alcohol, tea or coffee, says the NHS.", ref: 5, picture: "hours" }],
    },
    charts: {
      4: { kind: "range", title: "The sleep most adults need", subtitle: "Hours of sleep most healthy adults need a night", from: 7, to: 9, unit: "hours", sources: "Source: NHS Every Mind Matters, Sleep problems" },
    },
  },
  "relationships": {
    sectionRefs: [[[6, 1], [3]], [[1], [1]], [[1], [1], [2, 5]], [[1], [2]], [[1, 4], [5]]],
    helpRefs: [[1], [1], [1], [2], [4, 5], [7, 8]],
  },
  "triggers": {
    sectionRefs: [[[1], [1], [3, 4]], [[1]], [[2, 1], [1]], [[3], [4, 6], [3]], [[4, 3], [5]]],
    helpRefs: [[2, 1], [1], [4], [3], [5], [7, 8]],
    stats: {
      4: [{ value: "Up to £1,000", label: "is the fine for not telling the DVLA about PTSD that affects your ability to drive safely, says the government.", ref: 5 }],
    },
  },
  "crisis": {
    sectionRefs: [[[7], [1]], [[1], [2, 4]], [[2, 4], [1]], [[4, 3], [1, 5], [6]], [[1], [1]]],
    helpRefs: [[1, 2], [2, 4], [3, 4], [1, 5], [1], [1]],
    stats: {
      3: [
        { value: "24 hours", label: "a day, every day, Samaritans and the Shout text line are there to help, says the NHS.", ref: 1, picture: "hours" },
        { value: "1 in 5", label: "people who call Samaritans say they feel suicidal. You do not have to feel suicidal to get in touch.", ref: 6, picture: "one-in", of: 5 },
      ],
    },
  },
};
