import type { NewsExtras } from "../ischaemic-news";
// Stomach ulcers features: paragraph references (numbers are positions in each answer's own sources in ulcer-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[2], [4, 2]], [[3], [3]], [[1], [1, 2]]],
    helpRefs: [[1], [1], [5], [5]],
    charts: {
      2: { kind: "donut", title: "One cause of indigestion", subtitle: "People with indigestion, out of every 100", value: 8, prefix: "About", subject: "people with indigestion", label: "have ulcers (about 8 in 100)", sources: "Source: Guts UK, Indigestion" },
    },
  },
  "causes": {
    sectionRefs: [[[1], [1]], [[2], [3, 2], [2]], [[3], [3, 4]], [[2], [3]]],
    helpRefs: [[2], [2], [1], [1], [2]],
    stats: {
      1: [{ value: "About 3 in 20", label: "people with H pylori have ulcers, says Guts UK.", ref: 2 }],
    },
    charts: {
      1: { kind: "donut", title: "A very common germ", subtitle: "People in the UK, out of every 100", value: 40, prefix: "Up to", subject: "people in the UK", label: "have H pylori in their stomach (up to 2 in 5)", sources: "Source: Guts UK, Helicobacter pylori (H. pylori)" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[1], [2]], [[2], [1, 3]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1], [3]],
    stats: {
      3: [{ value: "About half", label: "of people who have H pylori infection don't have any symptoms at all, says Guts UK.", ref: 3, picture: "half" }],
    },
  },
  "tests": {
    sectionRefs: [[[1], [2]], [[1, 3], [3, 2]], [[3], [3, 6]], [[4, 2], [4], [4]], [[4], [4]]],
    helpRefs: [[3], [5], [4], [4], [3]],
    stats: {
      3: [{ value: "15 to 45 minutes", label: "is how long a gastroscopy should take, says the NHS.", ref: 4 }],
      4: [{ value: "24 hours", label: "is how long someone should stay with you after sedation, says the NHS.", ref: 4, picture: "hours" }],
    },
    charts: {
      2: { kind: "bars", title: "Before an H pylori test", subtitle: "Weeks without these medicines before a breath or stool test, as NICE CKS sets out", bars: [{ label: "Proton pump inhibitors", value: 2 }, { label: "Antibiotics", value: 4, strong: true }], max: 4, ticks: [0, 1, 2, 3, 4], unit: " weeks", sources: "Source: NICE CKS, Dyspepsia - proven peptic ulcer" },
    },
  },
  "h-pylori": {
    sectionRefs: [[[1], [2]], [[1], [2], [3]], [[2, 1], [4]], [[2], [5]], [[2, 1], [1, 2]]],
    helpRefs: [[2, 5], [5], [4], [6], [1]],
    stats: {
      1: [{ value: "2 or 3", label: "antibiotics are usually prescribed to clear H pylori, says NHS inform.", ref: 1 }],
      4: [{ value: "At least 4 weeks", label: "after finishing the antibiotics, a re-test checks for H pylori, says NHS inform.", ref: 1, picture: "calendar" }],
    },
  },
  "ppis": {
    sectionRefs: [[[2], [1]], [[1, 2], [4, 5], [5]], [[5, 3], [5, 2]], [[2, 1], [4, 1, 2]], [[4], [4]]],
    helpRefs: [[5], [4], [4], [5], [4], [5]],
    stats: {
      1: [
        { value: "4 to 8 weeks", label: "is how long PPIs are usually prescribed for an ulcer, says NHS inform.", ref: 1, picture: "calendar" },
        { value: "2 to 3 days", label: "to start feeling better on lansoprazole, says the NHS.", ref: 2 },
      ],
    },
  },
  "painkillers": {
    sectionRefs: [[[2], [2, 9]], [[1, 3], [1]], [[1], [4]], [[5, 1], [1, 8]], [[3], [6]]],
    helpRefs: [[7], [1, 2], [4], [1, 8], [3], [2]],
    stats: {
      2: [{ value: "No more than 8", label: "500mg paracetamol tablets in 24 hours for adults, says the NHS.", ref: 4 }],
      3: [{ value: "75mg", label: "is a low-dose aspirin tablet, usually taken once a day, says the NHS.", ref: 5 }],
    },
    charts: {
      0: { kind: "bars", title: "Ulcers and long-term NSAIDs", subtitle: "How often ulcers occur, out of every 100 people, as NICE CKS reports", bars: [{ label: "People taking NSAIDs long term", value: 20, strong: true }, { label: "The background population", value: 5 }], sources: "Source: NICE CKS, Dyspepsia - proven peptic ulcer: risk factors" },
    },
  },
  "urgent": {
    sectionRefs: [[[1], [1], [1]], [[2], [3], [2]], [[2, 4], [2, 4]], [[2], [5, 2]], [[1], [2]]],
    helpRefs: [[1], [1], [1], [1], [1]],
  },
  "healing": {
    sectionRefs: [[[1, 2], [4]], [[1, 2], [3]], [[2], [5]], [[1], [3]], [[2], [1]]],
    helpRefs: [[3], [3], [3], [1], [2], [1]],
    stats: {
      1: [{ value: "At least 4 weeks", label: "after finishing antibiotics, you'll be re-tested for H pylori, says NHS inform.", ref: 2, picture: "calendar" }],
      2: [{ value: "4 to 6 weeks", label: "is when you may have a repeat gastroscopy to check the ulcer has healed, says NHS inform.", ref: 2, picture: "calendar" }],
    },
    charts: {
      0: { kind: "bars", title: "Healing on acid-reducing tablets", subtitle: "Weeks within which ulcers typically heal with PPI treatment, as NICE CKS reports", bars: [{ label: "Duodenal ulcers", value: 4 }, { label: "Stomach ulcers", value: 8, strong: true }], max: 8, ticks: [0, 2, 4, 6, 8], unit: " weeks", sources: "Source: NICE CKS, Dyspepsia - proven peptic ulcer: prognosis" },
    },
  },
  "smoking-alcohol": {
    sectionRefs: [[[1, 2], [1, 3]], [[4], [4]], [[2, 5], [6], [7, 8]], [[9], [10]], [[6], [6]]],
    helpRefs: [[1, 4], [4], [1, 9], [9, 10], [8], [6]],
    stats: {
      0: [{ value: "Almost twice", label: "the risk of peptic ulcers is linked to current or former smoking, says NICE CKS.", ref: 3 }],
      1: [{ value: "Up to 12 weeks", label: "of support is what stop smoking services usually offer, says the NHS.", ref: 4, picture: "calendar" }],
    },
    charts: {
      3: { kind: "bars", title: "Units add up", subtitle: "Alcohol units in some common drinks, and the weekly guideline", bars: [{ label: "Single small shot of spirits", value: 1 }, { label: "Pint of lower-strength lager", value: 2 }, { label: "Pint of higher-strength lager", value: 3 }, { label: "Large glass of wine", value: 3 }, { label: "Bottle of wine (750ml)", value: 10 }, { label: "Weekly guideline, no more than", value: 14, strong: true }], max: 16, ticks: [0, 4, 8, 12, 16], unit: " units", sources: "Source: NHS, Alcohol units" },
    },
  },
  "food": {
    sectionRefs: [[[1], [2, 3]], [[2], [4]], [[2], [3, 1], [5, 4]], [[2, 5], [1, 6]]],
    helpRefs: [[2], [2], [2], [4], [5, 4], [2]],
    stats: {
      2: [{ value: "3 to 4 hours", label: "before going to bed is when to eat your evening meal, says the NHS.", ref: 2, picture: "hours" }],
    },
  },
  "coming-back": {
    sectionRefs: [[[1], [2]], [[3], [2]], [[1], [1, 2]], [[4], [4]], [[4], [5]]],
    helpRefs: [[2], [4], [1], [4], [4], [5]],
    charts: {
      1: { kind: "bars", title: "The chance of an ulcer coming back", subtitle: "Lifetime risk of an ulcer coming back, out of every 100 people, as NICE CKS reports", bars: [{ label: "Duodenal ulcer, H pylori still there", value: 80 }, { label: "Stomach ulcer, H pylori still there", value: 60 }, { label: "Either, once H pylori is cleared", value: 5, strong: true }], sources: "Source: NICE CKS, Dyspepsia - proven peptic ulcer: prognosis" },
    },
  },
};
