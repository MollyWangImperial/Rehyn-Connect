import type { NewsExtras } from "../ischaemic-news";
// Gastritis features: paragraph references (numbers are positions in each answer's own sources in gastritis-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[2], [2, 1]], [[2], [2]], [[1], [1, 4]]],
    helpRefs: [[1], [1], [2], [2]],
    charts: {
      2: { kind: "donut", title: "More common than you might think", subtitle: "People worldwide, out of every 100", value: 50, prefix: "More than", subject: "people worldwide", label: "are reported to have chronic gastritis (more than half)", sources: "Source: Guts UK, Gastritis" },
    },
  },
  "causes": {
    sectionRefs: [[[3], [2, 3]], [[2], [2]], [[2], [4]], [[2, 1], [1, 2], [2]]],
    helpRefs: [[2], [1], [2], [2], [2]],
    stats: {
      0: [{ value: "8 to 9 in 10", label: "people with H. pylori have no problems from it, says Guts UK.", ref: 3 }],
    },
    charts: {
      0: { kind: "donut", title: "A common stomach germ", subtitle: "People in the UK, out of every 100", value: 40, prefix: "Up to", subject: "people in the UK", label: "have H. pylori in their stomach (up to 2 in 5)", sources: "Source: Guts UK, Helicobacter pylori (H. pylori)" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [2, 3]], [[2], [4]], [[2], [4]], [[1], [1], [1]]],
    helpRefs: [[1], [1], [2], [1], [1]],
    stats: {
      1: [{ value: "About half", label: "of people with H. pylori infection have no symptoms at all, says Guts UK.", ref: 4, picture: "half" }],
      3: [{ value: "1 week", label: "of tummy pain or indigestion is when to see a GP, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "tests": {
    sectionRefs: [[[1], [1, 3]], [[3, 6], [5, 3]], [[1, 4], [2], [2]], [[4], [4], [4]]],
    helpRefs: [[3], [5], [4], [4], [4]],
    charts: {
      1: { kind: "bars", title: "Before an H. pylori test", subtitle: "Weeks without these medicines before a breath or poo test, as NICE's summary for health professionals sets out", bars: [{ label: "No proton pump inhibitors for", value: 2 }, { label: "No antibiotics for", value: 4, strong: true }], max: 4, ticks: [0, 1, 2, 3, 4], unit: " weeks", sources: "Source: NICE CKS, Dyspepsia - unidentified cause" },
    },
    stats: {
      3: [
        { value: "15 to 45 minutes", label: "is how long a gastroscopy should take, says the NHS.", ref: 4, picture: "hours" },
        { value: "24 hours", label: "with someone staying with you after sedation, says the NHS.", ref: 4, picture: "hours" },
      ],
    },
  },
  "treatment": {
    sectionRefs: [[[1], [1, 2]], [[3, 2], [3], [3]], [[3], [3]], [[3], [3]], [[2], [1]]],
    helpRefs: [[3], [3], [3], [2], [2]],
    stats: {
      1: [{ value: "3 or 4", label: "different tablets make up the treatment for H. pylori, says Guts UK.", ref: 3 }],
      3: [{ value: "At least one month", label: "after finishing treatment is when a breath test can check it has worked, says Guts UK.", ref: 3, picture: "calendar" }],
    },
    charts: {
      1: { kind: "bars", title: "How long the course lasts", subtitle: "Weeks of triple therapy for H. pylori, as Guts UK describes", bars: [{ label: "The traditional course", value: 1 }, { label: "Now recognised as more effective", value: 2, strong: true }], max: 2, ticks: [0, 1, 2], unit: " weeks", sources: "Source: Guts UK, Helicobacter pylori (H. pylori)" },
    },
  },
  "medicines": {
    sectionRefs: [[[1], [1]], [[3], [2], [3]], [[5, 2], [6, 5], [4]], [[7, 2], [2]], [[6], [4]]],
    helpRefs: [[1], [1], [3], [6], [3, 4], [6]],
    stats: {
      1: [{ value: "2 to 4 hours", label: "between an antacid and other medicines, says the NHS.", ref: 3, picture: "hours" }],
      2: [{ value: "2 to 3 days", label: "to start to feel better on lansoprazole, says the NHS, and up to 4 weeks for it to work fully.", ref: 5, picture: "calendar" }],
    },
  },
  "painkillers": {
    sectionRefs: [[[2], [3]], [[1], [2, 5]], [[4], [6]], [[4], [7], [3]]],
    helpRefs: [[1], [2, 5], [4], [8], [6]],
    stats: {
      2: [{ value: "8 tablets", label: "of 500mg paracetamol is the most to take in 24 hours, says the NHS.", ref: 6 }],
    },
  },
  "urgent": {
    sectionRefs: [[[1], [1]], [[3], [2], [2]], [[1], [1]], [[4]]],
    helpRefs: [[1], [1], [1], [1], [1]],
  },
  "food-drink": {
    sectionRefs: [[[2], [2]], [[1], [1]], [[4], [1], [3]], [[5], [6, 4]], [[7], [7]]],
    helpRefs: [[1], [1], [1], [1], [2], [7]],
    stats: {
      1: [{ value: "3 to 4 hours", label: "before going to bed is when to stop eating, says the NHS.", ref: 1, picture: "hours" }],
    },
    charts: {
      3: { kind: "bars", title: "Units add up", subtitle: "Alcohol units in some common drinks, and the weekly guideline", bars: [{ label: "Single small shot of spirits", value: 1 }, { label: "Pint of lower-strength lager", value: 2 }, { label: "Pint of higher-strength lager", value: 3 }, { label: "Large glass of wine", value: 3 }, { label: "Bottle of wine (750ml)", value: 10 }, { label: "Weekly guideline, no more than", value: 14, strong: true }], max: 16, ticks: [0, 4, 8, 12, 16], unit: " units", sources: "Source: NHS, Alcohol units" },
    },
  },
  "smoking": {
    sectionRefs: [[[2], [3]], [[1], [4, 1]], [[2], [6]], [[5], [5], [5]]],
    helpRefs: [[1], [2], [5], [5], [5]],
    stats: {
      2: [{ value: "5 times", label: "more likely to quit for good if you reach 28 days smoke free, says the NHS.", ref: 6, picture: "times" }],
      3: [{ value: "Up to 12 weeks", label: "of support is what stop smoking services usually offer, says the NHS.", ref: 5, picture: "calendar" }],
    },
  },
  "long-term": {
    sectionRefs: [[[1], [1, 5]], [[1, 3], [3, 1]], [[2], [2], [4]], [[5], [5]], [[1], [1]]],
    helpRefs: [[1], [2], [5], [1], [5]],
    stats: {
      1: [{ value: "5 to 20 in 1,000", label: "people are estimated to have autoimmune gastritis, says Guts UK.", ref: 1 }],
      2: [{ value: "Every 2 to 3 months", label: "a vitamin B12 injection is usually needed for life when the cause is not diet, says the NHS.", ref: 4, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "Low B12 or folate with age", subtitle: "Around how many people are affected by vitamin B12 or folate deficiency, out of every 100", bars: [{ label: "Aged 65 to 74", value: 5 }, { label: "Aged 75 or over", value: 10, strong: true }], sources: "Source: NHS, Vitamin B12 or folate deficiency anaemia" },
    },
  },
  "coming-back": {
    sectionRefs: [[[3], [3]], [[1, 2], [6]], [[1], [5]], [[2], [4]]],
    helpRefs: [[3], [1], [6], [1], [5], [2]],
    stats: {
      1: [{ value: "10 days", label: "is the most to take ibuprofen tablets for, unless a doctor advises otherwise, says the NHS.", ref: 6, picture: "calendar" }],
      3: [{ value: "3 weeks", label: "of indigestion that is not improving is when to see your GP, says Guts UK.", ref: 2, picture: "calendar" }],
    },
  },
};
