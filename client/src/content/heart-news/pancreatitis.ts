import type { NewsExtras } from "../ischaemic-news";
// Pancreatitis features: paragraph references (numbers are positions in each answer's own sources in pancreatitis-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [3, 4]], [[3, 4], [3, 4]], [[3], [5]], [[1], [2], [1]], [[3], [4]]],
    helpRefs: [[1], [1], [2], [3]],
    stats: {
      0: [{ value: "About 25cm", label: "is the length of the pancreas, about nine inches, says Guts UK.", ref: 3 }],
      4: [
        { value: "34 per 100,000", label: "people get acute pancreatitis every year, says Guts UK.", ref: 3 },
        { value: "6,000 to 12,000", label: "people in the UK are newly diagnosed with chronic pancreatitis every year, says Guts UK.", ref: 4 },
      ],
    },
  },
  "acute": {
    sectionRefs: [[[1], [1], [1]], [[1], [1], [1]], [[2], [2, 3]], [[1], [2]], [[1, 2], [1]]],
    helpRefs: [[1], [1], [1], [1], [2]],
    stats: {
      2: [{ value: "About 1 in 4", label: "people who have an attack may have problems with other organs, says Guts UK.", ref: 2, picture: "one-in-four" }],
    },
    charts: {
      4: { kind: "donut", title: "Most people recover", subtitle: "Adults who develop acute pancreatitis, out of every 100", value: 79, subject: "adults who develop acute pancreatitis", label: "fully recover and never have another episode", sources: "Source: Guts UK, Acute pancreatitis" },
    },
  },
  "chronic": {
    sectionRefs: [[[2], [1]], [[1], [1], [2, 1]], [[1], [2]], [[1], [1, 2], [2]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1], [1]],
    stats: {
      2: [{ value: "Less than one", label: "newly diagnosed person a year is what the average UK GP practice would see, says Guts UK.", ref: 2 }],
    },
  },
  "causes": {
    sectionRefs: [[[3], [5], [3]], [[3], [2], [3, 4]], [[3, 2]], [[1], [3, 4], [2]], [[3], [4, 3]]],
    helpRefs: [[3], [3], [1], [1], [3]],
    stats: {
      1: [{ value: "About 7 in 10", label: "people with chronic pancreatitis have alcohol as the cause, the most frequent one, says Guts UK.", ref: 4 }],
      4: [{ value: "Up to 3 in 10", label: "people with chronic pancreatitis have no cause found, despite thorough investigation, says Guts UK.", ref: 4 }],
    },
    charts: {
      0: { kind: "waffle", title: "What causes pancreatitis in adults", subtitle: "Cases of pancreatitis in adults, out of every 100, as Guts UK describes them", groups: [{ label: "Gallstones or alcohol", count: 80, tone: "clay" }, { label: "Unusual causes", count: 10, tone: "green" }, { label: "No known cause found", count: 10, tone: "dark" }], sources: "Source: Guts UK, Acute pancreatitis" },
    },
  },
  "hospital": {
    sectionRefs: [[[2, 1], [1, 2]], [[2], [1, 2]], [[2], [2]], [[1], [2], [2]], [[1], [2, 3], [2]]],
    helpRefs: [[3], [2], [2], [2], [2]],
    stats: {
      4: [
        { value: "5 to 10 days", label: "is when most people with acute pancreatitis can leave hospital, says the NHS.", ref: 1, picture: "calendar" },
        { value: "Up to 3 times", label: "the length of the hospital stay is how long recovery at home can take, says Guts UK.", ref: 2, picture: "times" },
      ],
    },
  },
  "enzymes": {
    sectionRefs: [[[1], [1, 3]], [[1], [1]], [[1, 2], [1], [1]], [[1, 2], [1], [1]], [[1], [1, 2], [1]]],
    helpRefs: [[1], [1], [1], [1], [1, 2], [1, 2]],
    stats: {
      2: [{ value: "4 types", label: "of enzyme medicine are available, in capsule or powder form, says Guts UK.", ref: 1 }],
    },
    charts: {
      0: { kind: "donut", title: "A common problem", subtitle: "People with chronic pancreatitis, out of every 100", value: 80, subject: "people with chronic pancreatitis", label: "will eventually develop PEI (8 in 10)", sources: "Source: Guts UK, PEI and PERT" },
    },
  },
  "pain": {
    sectionRefs: [[[2], [2], [2]], [[2], [2], [2]], [[2], [2]], [[2], [3]], [[2], [2], [1]]],
    helpRefs: [[2], [2], [2], [3], [2], [1]],
    stats: {
      0: [{ value: "About 1 in 10", label: "people with chronic pancreatitis have no pain, so most people with it do, says Guts UK.", ref: 2, picture: "one-in", of: 10 }],
    },
  },
  "diabetes": {
    sectionRefs: [[[2, 3], [4]], [[2], [1]], [[1, 2], [2]], [[3, 2], [3]], [[3], [3, 2], [2]]],
    helpRefs: [[3], [2], [1, 2], [3], [3]],
    stats: {
      1: [{ value: "About 1 in 5", label: "adults who have had severe acute pancreatitis go on to develop diabetes, says Guts UK.", ref: 1, picture: "one-in", of: 5 }],
      2: [{ value: "Every 6 months", label: "a check for diabetes with an HbA1c blood test, for people with chronic pancreatitis, says Guts UK.", ref: 2, picture: "calendar" }],
    },
    charts: {
      1: { kind: "range", title: "Diabetes over time", subtitle: "People with chronic pancreatitis who develop diabetes within 10 to 20 years, out of every 100", from: 25, to: 80, sources: "Source: Guts UK, Chronic pancreatitis" },
    },
  },
  "alcohol-smoking": {
    sectionRefs: [[[1], [2]], [[3], [4], [3]], [[5], [6], [6]], [[3], [7]], [[5], [5]]],
    helpRefs: [[1], [1], [5], [6], [7], [5]],
    stats: {
      3: [{ value: "3 times", label: "more likely to quit for good with professional or expert help, says the NHS.", ref: 7, picture: "times" }],
    },
  },
  "food": {
    sectionRefs: [[[1], [3]], [[2], [4]], [[3, 5], [3], [3]], [[3], [3]], [[5], [3]]],
    helpRefs: [[1], [3, 5], [3], [5], [3, 5], [3]],
    stats: {
      3: [{ value: "At least every 12 months", label: "people with chronic pancreatitis should be offered checks on their nutrition, says Guts UK.", ref: 3, picture: "calendar" }],
    },
  },
  "urgent": {
    sectionRefs: [[[1], [1], [1]], [[1], [2]], [[3], [4]], [[5], [6]], [[7]]],
    helpRefs: [[1], [1], [1], [1], [3, 4], [6]],
  },
  "support": {
    sectionRefs: [[[1], [2]], [[2, 3], [3, 2], [2]], [[4], [5]], [[1], [2]], [[1], [6, 1], [7]]],
    helpRefs: [[3, 2], [4], [2], [1], [6]],
    stats: {
      1: [{ value: "2 in 3", label: "people with chronic pancreatitis can develop weakened bones over time, says Guts UK.", ref: 2 }],
    },
    charts: {
      1: { kind: "bars", title: "How often the checks come round", subtitle: "Months between regular checks for adults with chronic pancreatitis, as Guts UK sets them out", bars: [{ label: "HbA1c test for diabetes", value: 6, strong: true }, { label: "Faecal elastase poo test", value: 12 }, { label: "Nutrition check", value: 12 }, { label: "Bone density scan", value: 24 }], max: 24, ticks: [0, 6, 12, 18, 24], unit: " months", sources: "Source: Guts UK, Chronic pancreatitis, and PEI and PERT" },
    },
  },
};
