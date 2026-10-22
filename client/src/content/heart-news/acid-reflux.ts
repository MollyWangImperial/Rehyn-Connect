import type { NewsExtras } from "../ischaemic-news";
// Acid reflux and heartburn features: paragraph references (numbers are positions in each answer's own sources in reflux-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[2], [2]], [[2, 1], [2]], [[3], [2]]],
    helpRefs: [[1], [1], [1], [2]],
    charts: {
      3: { kind: "donut", title: "A very common problem", subtitle: "Adults in the UK, out of every 100", value: 25, prefix: "Up to", subject: "adults in the UK", label: "get heartburn (up to 1 in 4)", sources: "Source: Guts UK, Heartburn and acid reflux" },
    },
    stats: {
      4: [{ value: "Over 50", label: "is when a hiatus hernia becomes very common, says the NHS.", ref: 3 }],
    },
  },
  "triggers": {
    sectionRefs: [[[1], [1]], [[1], [2], [2]], [[2], [2, 3], [4]], [[1, 5], [1]], [[3], [2]]],
    helpRefs: [[1], [4], [1], [1, 2], [1, 2], [5, 1]],
  },
  "symptoms": {
    sectionRefs: [[[1], [1]], [[1], [2]], [[2], [2]], [[2], [2]], [[3, 4], [5]]],
    helpRefs: [[1], [1], [1], [1], [5]],
  },
  "checks": {
    sectionRefs: [[[1], [1]], [[2], [3]], [[3], [4]], [[5], [3]], [[6], [7], [6]]],
    helpRefs: [[1], [1], [3], [5], [6], [7]],
    stats: {
      1: [{ value: "3 weeks or more", label: "of heartburn most days is a reason to see a GP, says the NHS.", ref: 3, picture: "calendar" }],
      3: [{ value: "More than 2 days", label: "of being sick means asking for an urgent GP appointment or getting help from NHS 111, says the NHS.", ref: 3, picture: "calendar" }],
    },
  },
  "self-help": {
    sectionRefs: [[[1], [2]], [[1], [1], [1]], [[2], [2]], [[2], [2]], [[3], [1]]],
    helpRefs: [[1], [1], [1], [1, 2], [2], [2]],
    stats: {
      1: [{ value: "3 or 4 hours", label: "before bed is when to stop eating, says the NHS.", ref: 1, picture: "hours" }],
      3: [{ value: "14 units", label: "of alcohol a week at most, with some alcohol-free days, says Guts UK.", ref: 2 }],
    },
  },
  "pharmacy": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[3], [3]], [[1], [2], [2]], [[1, 2], [4], [2]]],
    helpRefs: [[1], [1, 2], [2], [5], [6], [2, 5]],
    stats: {
      2: [{ value: "Around 4 hours", label: "is how long 1 dose of Gaviscon should last, says the NHS.", ref: 3, picture: "hours" }],
      3: [{ value: "2 to 4 hours", label: "between an antacid and any other medicine, says the NHS.", ref: 2, picture: "hours" }],
      4: [{ value: "7 days", label: "at most for Gaviscon bought without a prescription, before checking with a doctor, says the NHS.", ref: 4, picture: "calendar" }],
    },
  },
  "ppis": {
    sectionRefs: [[[1], [2]], [[1], [2], [1]], [[3, 4], [4], [3]], [[4], [4]], [[4], [1], [4]]],
    helpRefs: [[4, 3], [2], [3], [4], [1], [4]],
    stats: {
      1: [
        { value: "4 or 8 weeks", label: "is how long a usual course lasts, depending on how serious reflux is, says the NHS.", ref: 1, picture: "calendar" },
        { value: "2 to 3 days", label: "until you should start to feel better on lansoprazole, says the NHS.", ref: 2 },
      ],
      3: [{ value: "2 weeks", label: "at most for omeprazole bought without a prescription, says the NHS.", ref: 4, picture: "calendar" }],
    },
  },
  "tests": {
    sectionRefs: [[[1], [1], [2]], [[3], [3], [3]], [[3], [4], [3]], [[2], [2], [2]], [[3], [3]]],
    helpRefs: [[3], [4], [3], [3], [2]],
    charts: {
      1: { kind: "range", title: "How long a gastroscopy takes", subtitle: "Minutes for the test itself, says the NHS", from: 15, to: 45, unit: "minutes", sources: "Source: NHS, Gastroscopy" },
    },
    stats: {
      2: [
        { value: "At least 6 hours", label: "without eating before a gastroscopy, says the NHS.", ref: 3, picture: "hours" },
        { value: "24 hours", label: "with someone staying with you after sedation, says the NHS.", ref: 3, picture: "hours" },
      ],
      4: [{ value: "Up to 2 months", label: "to get biopsy results, says the NHS.", ref: 3, picture: "calendar" }],
    },
  },
  "night": {
    sectionRefs: [[[1], [2]], [[1], [1], [2]], [[2, 3]], [[1], [2]], [[2], [4, 1]]],
    helpRefs: [[1], [1], [2, 3], [2], [2], [1]],
    charts: {
      1: { kind: "range", title: "How high to raise the bed", subtitle: "Centimetres to raise the head of the bed, as the NHS suggests", from: 10, to: 20, unit: "cm", sources: "Source: NHS, Heartburn and acid reflux" },
    },
    stats: {
      3: [{ value: "At least 3 hours", label: "between your main evening meal and going to bed, says Guts UK.", ref: 2, picture: "hours" }],
    },
  },
  "eating": {
    sectionRefs: [[[2]], [[1], [2], [3]], [[2], [2]], [[3], [3], [2]], [[2], [1]]],
    helpRefs: [[1, 2], [2], [2], [3], [3], [2]],
    stats: {
      2: [{ value: "At least 3 hours", label: "before bed for your main evening meal, says Guts UK.", ref: 2, picture: "hours" }],
    },
  },
  "long-term": {
    sectionRefs: [[[1], [2]], [[2], [3]], [[2], [4], [4]], [[5], [5, 6]], [[4], [4]]],
    helpRefs: [[1], [3], [5], [4], [4], [2]],
    stats: {
      1: [{ value: "Once a year", label: "a review should be offered to people on long-term treatment, says NICE.", ref: 3, picture: "calendar" }],
      2: [{ value: "More than 3 months", label: "on lansoprazole can lower the magnesium in your blood, says the NHS.", ref: 4, picture: "calendar" }],
    },
  },
  "barretts": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[1], [2, 1]], [[1], [1], [3]], [[1], [1], [1]]],
    helpRefs: [[1], [1], [1], [1], [1], [1]],
    charts: {
      1: { kind: "donut", title: "How often reflux leads to Barrett's", subtitle: "People with GORD, out of every 100", value: 11, prefix: "About", subject: "people with GORD", label: "will get Barrett's oesophagus", sources: "Source: Guts UK, Barrett's oesophagus" },
    },
    stats: {
      0: [{ value: "1 in 300", label: "people with Barrett's develop this cancer each year, says Guts UK: uncommon and a small risk.", ref: 1 }],
      3: [{ value: "Every 2 to 3 years", label: "is the suggested endoscopy for a long segment of 3cm or more, says Guts UK.", ref: 1, picture: "calendar" }],
    },
  },
};
