import type { NewsExtras } from "../ischaemic-news";
// Irritable bowel syndrome (IBS) features: paragraph references (numbers are positions in each answer's own sources in ibs-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [1, 2]], [[2], [2], [3]], [[4], [2, 5]], [[1], [2]], [[2], [2]]],
    helpRefs: [[6], [2], [4], [4], [2]],
    stats: {
      4: [
        { value: "Twice as many", label: "women as men are diagnosed with IBS, says Guts UK.", ref: 2 },
        { value: "20 to 40", label: "years old is the most common age to be diagnosed with IBS, says Guts UK.", ref: 2, picture: "calendar" },
      ],
    },
    charts: {
      4: { kind: "range", title: "How common IBS is", subtitle: "People worldwide with IBS, out of every 100 (from 4 in 100 to 1 in 10)", from: 4, to: 10, sources: "Source: Guts UK, Irritable Bowel Syndrome (IBS)" },
    },
  },
  "red-flags": {
    sectionRefs: [[[2], [3]], [[1], [1], [3]], [[2], [4]], [[2, 4], [5]], [[4, 2], [4, 2]]],
    helpRefs: [[1], [3], [2], [2, 4], [2], [3]],
    stats: {
      2: [{ value: "More than 2kg", label: "of weight lost without meaning to is one reason to get a lasting bowel change checked, says Guts UK.", ref: 2 }],
    },
    charts: {
      2: { kind: "bars", title: "A bowel change that lasts", subtitle: "Weeks a change in bowel habit has lasted before it needs checking, by source", bars: [{ label: "Guts UK: 4 weeks or longer", value: 4, strong: true }, { label: "NHS inform: more than", value: 6 }], max: 8, ticks: [0, 2, 4, 6, 8], unit: " weeks", sources: "Sources: Guts UK, Irritable Bowel Syndrome (IBS); NHS inform, Irritable bowel syndrome (IBS)" },
    },
  },
  "types": {
    sectionRefs: [[[1], [1], [1]], [[2, 3], [4]], [[2, 5], [6, 5]], [[1], [1], [3]]],
    helpRefs: [[7], [7], [7], [7], [8]],
    stats: {
      0: [{ value: "About 1 in 3", label: "people with IBS have IBS-C, with constipation, and another third have IBS-D, with diarrhoea, says Guts UK.", ref: 1, picture: "one-in", of: 3 }],
    },
    charts: {
      1: { kind: "bars", title: "Other causes behind IBS-D symptoms", subtitle: "People with IBS-D symptoms, out of every 100 (about 1 in 5 and about 1 in 10), as Guts UK estimates", bars: [{ label: "May have bile acid diarrhoea, about", value: 20, strong: true }, { label: "May have microscopic colitis, about", value: 10 }], sources: "Source: Guts UK, Diarrhoea" },
    },
  },
  "triggers": {
    sectionRefs: [[[1], [1]], [[2, 3], [3], [4, 5]], [[6], [6]], [[2, 7], [2], [2]], [[2], [8]]],
    helpRefs: [[4], [4], [4], [4], [3], [2]],
    stats: {
      4: [{ value: "Twice as many", label: "women as men are diagnosed with IBS, says Guts UK.", ref: 2 }],
    },
    charts: {
      1: { kind: "donut", title: "Food matters to most", subtitle: "People with IBS who report food-related symptoms, out of every 100 (over 8 in 10)", value: 80, prefix: "Over", subject: "people with IBS", label: "report food-related symptoms", sources: "Source: Guts UK, Irritable Bowel Syndrome (IBS)" },
    },
  },
  "first-steps": {
    sectionRefs: [[[1, 2], [1, 2]], [[1], [1, 2]], [[1], [3]], [[3], [3], [1]], [[2], [1]]],
    helpRefs: [[1], [1], [1], [1], [1], [1]],
    stats: {
      2: [{ value: "80g", label: "is one portion of fresh fruit, and the NHS suggests no more than 3 portions a day with IBS.", ref: 1 }],
      3: [{ value: "Up to 1 tablespoon", label: "of linseeds a day, with oats, may ease bloating, cramps and farting, says the NHS.", ref: 1 }],
    },
    charts: {
      1: { kind: "bars", title: "A day's drinks and fruit", subtitle: "What the NHS suggests each day for people with IBS", bars: [{ label: "Drinks of fluid, at least", value: 8, strong: true }, { label: "Caffeinated drinks, at most", value: 3 }, { label: "Portions of fresh fruit, at most", value: 3 }], max: 10, ticks: [0, 2, 4, 6, 8, 10], unit: " a day", sources: "Source: NHS, Diet, lifestyle and medicines for IBS" },
    },
  },
  "low-fodmap": {
    sectionRefs: [[[1, 2], [3, 1]], [[1], [3]], [[1], [1], [1]], [[2], [4, 2], [5]], [[1, 2], [2, 4]]],
    helpRefs: [[6], [3], [3], [2], [5], [3, 6]],
    stats: {
      2: [{ value: "3 stages", label: "make up the low FODMAP diet: reduce, reintroduce, then a personal reduced diet, says Guts UK.", ref: 1 }],
      4: [{ value: "Half to two thirds", label: "of people with IBS find the low FODMAP diet works, says Guts UK.", ref: 1, picture: "half" }],
    },
  },
  "medicines": {
    sectionRefs: [[[1], [1, 2]], [[1, 2], [3], [4]], [[1, 5], [1], [5]], [[6], [7], [6]], [[8], [1, 8], [1]]],
    helpRefs: [[2], [7], [4], [4], [1], [1]],
    stats: {
      1: [{ value: "1 to 2 weeks", label: "is how long peppermint oil could take to work fully, says the NHS.", ref: 4, picture: "calendar" }],
      2: [{ value: "7 days", label: "is the longest to take laxatives bought without a prescription, says the NHS.", ref: 5, picture: "calendar" }],
      3: [{ value: "Within 1 hour", label: "is when loperamide usually starts to make diarrhoea better, says the NHS.", ref: 6, picture: "hours" }],
    },
    charts: {
      3: { kind: "bars", title: "Loperamide in 24 hours", subtitle: "The most capsules or tablets an adult should take in 24 hours, says the NHS", bars: [{ label: "Bought from a shop or pharmacy", value: 6, strong: true }, { label: "On prescription", value: 8 }], max: 8, ticks: [0, 2, 4, 6, 8], unit: " tablets", sources: "Source: NHS, How and when to take loperamide" },
    },
  },
  "gut-therapy": {
    sectionRefs: [[[1, 2], [3]], [[3], [1], [4]], [[3], [5, 3], [5]], [[3], [6]], [[2], [7]]],
    helpRefs: [[3], [7], [4], [3], [3]],
    stats: {
      1: [{ value: "5 to 15", label: "sessions of CBT is usual, depending on what you are having it for, says the NHS.", ref: 4, picture: "calendar" }],
      3: [{ value: "558", label: "people with significant IBS symptoms took part in the trial of phone and online CBT, reports Guts UK.", ref: 6 }],
    },
  },
  "out-and-about": {
    sectionRefs: [[[1], [1]], [[2], [2, 3, 4]], [[5], [6, 3]], [[3, 4], [3, 7], [8]], [[1], [1, 9]]],
    helpRefs: [[2], [3], [5], [3], [6], [1]],
    stats: {
      3: [{ value: "30 to 60 minutes", label: "before food is the best time to take peppermint oil capsules, says the NHS.", ref: 8, picture: "hours" }],
    },
  },
  "stress": {
    sectionRefs: [[[1], [1]], [[2], [1]], [[1], [1]], [[3], [3]], [[4, 1], [4]]],
    helpRefs: [[3], [4], [1], [4], [4], [4]],
    stats: {
      3: [{ value: "At least 5 minutes", label: "of gentle breathing is what the NHS calming breathing exercise suggests.", ref: 3, picture: "hours" }],
      4: [{ value: "116 123", label: "is the number to call Samaritans if you need someone to talk to, says the NHS.", ref: 4 }],
    },
  },
  "work": {
    sectionRefs: [[[1, 2], [1]], [[3], [3], [3]], [[4], [4]], [[5], [6], [5]], [[7, 8], [9]]],
    helpRefs: [[3], [3], [6], [7], [9], [8]],
    stats: {
      2: [{ value: "12 months", label: "or more is what long-term means under the Equality Act 2010, says the government.", ref: 4, picture: "calendar" }],
      3: [{ value: "16 or over", label: "is the age you need to be for Access to Work, and you need to be in paid work, says the government.", ref: 6 }],
    },
  },
  "diary": {
    sectionRefs: [[[1, 2], [3]], [[4], [5]], [[6], [7], [6]], [[2], [1, 2, 8]], [[1], [3]]],
    helpRefs: [[1], [4], [2], [2], [4], [3]],
    stats: {
      2: [{ value: "Type 4", label: "on the Bristol Stool Form Scale, a soft, well-formed poo, is the aim when doses are adjusted, says NICE.", ref: 7 }],
      3: [{ value: "At least 4 weeks", label: "is how long to try a probiotic, one product at a time, says the British Dietetic Association.", ref: 2, picture: "calendar" }],
    },
  },
};
