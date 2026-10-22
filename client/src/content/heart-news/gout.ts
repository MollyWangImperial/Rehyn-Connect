import type { NewsExtras } from "../ischaemic-news";
// Gout features: paragraph references (numbers are positions in each answer's own sources in gout-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[2], [2]], [[2], [2]], [[1], [2]], [[1, 2], [2]], [[1], [3]]],
    helpRefs: [[1], [1], [1], [1]],
    stats: {
      0: [{ value: "1 in 40", label: "people in the UK are living with gout, says the UK Gout Society.", ref: 3 }],
    },
    charts: {
      2: { kind: "range", title: "How fast an attack peaks", subtitle: "Hours after first noticing something is wrong, when symptoms usually feel worst", from: 12, to: 24, unit: " hours", sources: "Source: Arthritis UK, Gout" },
    },
  },
  "causes": {
    sectionRefs: [[[2], [2]], [[1, 2], [2]], [[2], [2]], [[2, 1], [1, 2]], [[1, 2], [2]]],
    helpRefs: [[2], [1], [1], [1, 2], [3]],
    stats: {
      2: [{ value: "About 4 times", label: "more common in men than women: gout, says Arthritis UK.", ref: 2, picture: "times" }],
    },
    charts: {
      0: { kind: "donut", title: "Made by the body, not eaten", subtitle: "Urate in the body on any day, out of every 100 parts", value: 75, prefix: "About", subject: "parts of the body's urate", label: "come from purines made within the body; only about a quarter from food and drink", sources: "Source: Arthritis UK, Gout (about three-quarters from the body)" },
    },
  },
  "diagnosis": {
    sectionRefs: [[[1, 2], [2]], [[1, 2], [2, 3]], [[4], [4]], [[1], [2], [1, 2, 4]], [[1], [1]]],
    helpRefs: [[1], [4], [1], [4]],
    stats: {
      2: [
        { value: "360 micromol/L", label: "or more, with the symptoms and signs of gout, confirms the diagnosis, says NICE.", ref: 4 },
        { value: "At least 2 weeks", label: "after an attack has settled, repeat a low urate test if gout is strongly suspected, says NICE.", ref: 4, picture: "calendar" },
      ],
    },
    charts: {
      1: { kind: "donut", title: "High urate is not the same as gout", subtitle: "People with a high urate level, out of every 100", value: 95, prefix: "Around", subject: "people with a high urate level", label: "never develop gout", sources: "Source: NICE Clinical Knowledge Summaries, Gout: causes and risk factors" },
    },
  },
  "complications": {
    sectionRefs: [[[1], [2]], [[2, 3], [1, 2]], [[2], [2]], [[2, 1, 3], [4]], [[2], [2, 5]]],
    helpRefs: [[1], [6], [2], [4], [2]],
    stats: {
      3: [{ value: "Around 14%", label: "of people with gout have kidney stones, says NICE's Clinical Knowledge Summary.", ref: 3 }],
    },
    charts: {
      1: { kind: "bars", title: "Tophi build up over time", subtitle: "People with untreated gout who have tophi, out of every 100", bars: [{ label: "After 10 years, about", value: 50 }, { label: "After 20 years", value: 72, strong: true }], max: 100, ticks: [0, 25, 50, 75, 100], sources: "Source: NICE Clinical Knowledge Summaries, Gout: complications" },
    },
  },
  "attack": {
    sectionRefs: [[[1], [3, 2]], [[1], [2]], [[2], [4]], [[2, 6], [5]], [[2], [2, 7]]],
    helpRefs: [[1], [2], [7], [5], [1]],
    stats: {
      1: [{ value: "Within 2 days", label: "prescribed medicine for a gout attack should start to work, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "urate-lowering": {
    sectionRefs: [[[1, 2], [2, 3]], [[4], [5, 4]], [[2, 3, 4], [6]], [[6, 4], [4, 6]], [[4, 2], [6]]],
    helpRefs: [[1], [4], [5, 7], [6], [6], [6]],
    stats: {
      3: [{ value: "First 6 months", label: "of urate-lowering medicine is when more attacks can happen, a sign it is working, says Arthritis UK.", ref: 4, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "When treatment usually starts", subtitle: "Weeks after a gout attack has settled", from: 2, to: 4, unit: " weeks", sources: "Source: NICE, Gout: diagnosis and management (NG219)" },
    },
  },
  "target": {
    sectionRefs: [[[1, 2], [3]], [[1, 4], [4, 1]], [[4, 2], [5, 4]], [[3], [6]]],
    helpRefs: [[3], [4, 5], [4], [5, 6]],
    stats: {
      2: [{ value: "Once a year", label: "a blood test checks urate stays on target once it is stable, says Arthritis UK.", ref: 5, picture: "calendar" }],
    },
    charts: {
      1: { kind: "bars", title: "Two urate targets", subtitle: "Blood urate to stay below, in micromol per litre", bars: [{ label: "Most people", value: 360, strong: true }, { label: "Tophi or frequent attacks", value: 300 }], max: 400, ticks: [0, 100, 200, 300, 400], unit: " micromol/L", sources: "Source: NICE, Gout: diagnosis and management (NG219)" },
    },
  },
  "self-help": {
    sectionRefs: [[[1], [3, 2]], [[1], [2]], [[1, 2], [2]], [[1], [1]]],
    helpRefs: [[1], [1], [1, 2], [1], [1]],
    stats: {
      0: [{ value: "Up to 20 minutes", label: "at a time for an ice pack wrapped in a towel, says the NHS.", ref: 1 }],
    },
  },
  "food-drink": {
    sectionRefs: [[[1], [2, 3]], [[4], [4, 2]], [[5, 4], [4]], [[4], [5, 6, 4]], [[5, 4], [4, 5]]],
    helpRefs: [[5], [5], [5], [5], [5], [4]],
    stats: {
      3: [{ value: "14 units", label: "a week at most, with some alcohol-free days, says the NHS.", ref: 5 }],
      4: [{ value: "At least 2 litres", label: "of water a day if you have gout and a history of kidney stones, says Arthritis UK.", ref: 4 }],
    },
    charts: {
      3: { kind: "bars", title: "What 14 units looks like", subtitle: "Drinks that add up to 14 units, the most to drink in a week", bars: [{ label: "Pints of average-strength beer", value: 6, strong: true }, { label: "Small glasses of lower-strength wine", value: 10 }], max: 12, ticks: [0, 4, 8, 12], unit: " drinks", sources: "Source: NHS, Alcohol units" },
    },
  },
  "weight-activity": {
    sectionRefs: [[[1], [2]], [[3, 2, 1], [2, 1]], [[1], [1]], [[1], [3, 4]]],
    helpRefs: [[3, 2], [2], [1], [1], [4], [1]],
    charts: {
      3: { kind: "bars", title: "A week of activity", subtitle: "Minutes a week adults are advised to aim for, either kind", bars: [{ label: "Moderate, such as brisk walking", value: 150, strong: true }, { label: "Or vigorous, such as running", value: 75 }], max: 160, ticks: [0, 40, 80, 120, 160], unit: " minutes", sources: "Source: NHS, Physical activity guidelines for adults aged 19 to 64" },
    },
  },
  "other-conditions": {
    sectionRefs: [[[1], [2]], [[2], [1]], [[1, 3], [1]], [[1, 2], [1]], [[4], [4]]],
    helpRefs: [[1], [1], [1], [1], [1], [5]],
    charts: {
      2: { kind: "donut", title: "Gout and the kidneys", subtitle: "People with gout, out of every 100", value: 25, prefix: "Around", subject: "people with gout", label: "also have chronic kidney disease", sources: "Source: UK Gout Society, Gout and other health problems" },
    },
  },
  "work-life": {
    sectionRefs: [[[1], [1]], [[2], [3]], [[4], [4]], [[1], [1]], [[5], [5]]],
    helpRefs: [[1], [2], [3, 1], [4], [1]],
    stats: {
      3: [{ value: "8 hours", label: "before bed, avoid caffeine to help sleep, says Arthritis UK.", ref: 1, picture: "hours" }],
    },
  },
};
