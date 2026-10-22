import type { NewsExtras } from "../ischaemic-news";
// Lymphoma features: paragraph references (numbers are positions in each answer's own sources in lymphoma-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [1], [1]], [[2], [2]], [[1], [2]], [[3, 4], [6]], [[5], [5]]],
    helpRefs: [[1], [5], [7], [8]],
    stats: {
      0: [{ value: "Over 60", label: "different types of lymphoma, broadly grouped into Hodgkin and non-Hodgkin lymphomas, says Lymphoma Action.", ref: 1 }],
      1: [{ value: "1 to 2cm", label: "is how long lymph nodes, small bean-shaped checkpoints, usually are, says Lymphoma Action.", ref: 2 }],
    },
  },
  "types": {
    sectionRefs: [[[1, 2], [1, 2, 5]], [[1], [1, 3], [3, 1]], [[2], [2, 5]], [[2, 6], [2], [2]], [[4], [7, 3]]],
    helpRefs: [[7], [2], [8]],
    charts: {
      0: { kind: "bars", title: "Non-Hodgkin is the more common", subtitle: "People diagnosed each year in the UK, around", bars: [{ label: "Hodgkin lymphoma", value: 2166 }, { label: "Non-Hodgkin lymphoma", value: 13500, strong: true }], max: 14000, ticks: [0, 3500, 7000, 10500, 14000], unit: " people", sources: "Source: Lymphoma Action, Hodgkin lymphoma and Non-Hodgkin lymphoma" },
      1: { kind: "donut", title: "A less common type", subtitle: "People with Hodgkin lymphoma, out of every 100, as Cancer Research UK states", value: 5, prefix: "Around", subject: "people with Hodgkin lymphoma", label: "have nodular lymphocyte predominant Hodgkin lymphoma (NLPHL)", sources: "Source: Cancer Research UK, Types of Hodgkin lymphoma" },
    },
    stats: {
      2: [{ value: "Around 1 in 10", label: "non-Hodgkin lymphomas develop from T cells; most develop from B cells, says Lymphoma Action.", ref: 2, picture: "one-in", of: 10 }],
    },
  },
  "tests": {
    sectionRefs: [[[2, 3], [2, 1], [3]], [[1, 2, 3], [3, 1, 6]], [[1, 2], [4], [4]], [[5], [5], [5]], [[5], [2]]],
    helpRefs: [[3], [1, 2], [6], [4], [3], [6]],
    stats: {
      1: [{ value: "Within 2 weeks", label: "is when you should get the results of a lymph node biopsy, says the NHS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "How long a PET/CT scan takes", subtitle: "Minutes on the scanner, after a wait of 60 to 90 minutes for the injection to be taken up", from: 30, to: 60, unit: "minutes", sources: "Source: Lymphoma Action, CT and PET/CT scan" },
    },
  },
  "watch-wait": {
    sectionRefs: [[[1, 2], [1], [1]], [[1, 3], [1]], [[1], [1]], [[1], [1]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1], [1], [4]],
    charts: {
      2: { kind: "range", title: "Regular, not constant", subtitle: "Check-ups a year on active monitoring, depending on your hospital and your lymphoma", from: 1, to: 4, unit: "check-ups a year", sources: "Source: Lymphoma Action, Active monitoring (watch and wait)" },
    },
  },
  "treatments": {
    sectionRefs: [[[1, 2], [1, 2]], [[1, 3], [3, 7]], [[4], [4], [6]], [[1, 5], [5]], [[1, 2], [1, 2]]],
    helpRefs: [[1, 2], [3], [1, 2], [7], [7], [8]],
    charts: {
      1: { kind: "range", title: "A course in cycles", subtitle: "Cycles of chemotherapy typically given for lymphoma, each followed by a rest period", from: 4, to: 6, unit: "cycles", sources: "Source: Lymphoma Action, Chemotherapy" },
    },
    stats: {
      2: [{ value: "Every 2 months for 2 years", label: "is how rituximab is usually given as maintenance therapy, says Lymphoma Action.", ref: 6, picture: "calendar" }],
      3: [{ value: "10 to 20 minutes", label: "is the typical length of a radiotherapy session, most of it spent getting into position, says Lymphoma Action.", ref: 5, picture: "hours" }],
    },
  },
  "infections": {
    sectionRefs: [[[1, 2], [3]], [[1], [2, 3], [1, 3]], [[1], [6, 4], [1]], [[5], [5]], [[1, 3], [1, 3], [1]]],
    helpRefs: [[1], [1], [1], [1], [1, 3], [3]],
    charts: {
      0: { kind: "range", title: "When the risk is highest", subtitle: "Days after chemotherapy when white blood cells are at their lowest, called the nadir", from: 7, to: 14, unit: "days after chemotherapy", sources: "Source: Macmillan Cancer Support, Infection" },
    },
    stats: {
      1: [{ value: "Above 38°C", label: "is a fever, one of the common signs of infection to act on straight away, says Lymphoma Action.", ref: 1 }],
    },
  },
  "fatigue": {
    sectionRefs: [[[1], [1, 2]], [[1], [2, 1]], [[4, 3], [3]], [[1], [1, 2], [2, 1]], [[2, 3], [2]]],
    helpRefs: [[1], [1, 2], [3], [1], [2], [2]],
    stats: {
      2: [{ value: "1 or 2 years", label: "is how long tiredness may occasionally last after lymphoma treatment, depending on the treatment, says Macmillan.", ref: 3, picture: "calendar" }],
    },
  },
  "late-effects": {
    sectionRefs: [[[2, 1], [2], [2]], [[1, 3], [1]], [[1, 3, 4], [1]], [[1], [1]], [[1, 2], [1]]],
    helpRefs: [[2], [2], [1], [1], [1], [1]],
    stats: {
      2: [{ value: "Once a year", label: "you will have a blood test to check your thyroid if you had radiotherapy to your neck, says Lymphoma Action.", ref: 4, picture: "calendar" }],
    },
    charts: {
      3: { kind: "range", title: "No live vaccines for a while", subtitle: "Months after treatment for non-Hodgkin lymphoma to avoid live vaccines, or until your immune system has recovered", from: 6, to: 24, unit: "months after treatment", sources: "Source: Macmillan Cancer Support, Late effects of treatment for lymphoma" },
    },
  },
  "follow-up": {
    sectionRefs: [[[1], [1, 2]], [[1, 2], [1, 2]], [[1, 2], [2, 1]], [[2], [1, 2]], [[2, 1], [1]]],
    helpRefs: [[1], [2], [1], [1], [1], [2]],
    stats: {
      1: [
        { value: "Every 3 months or so", label: "is how often follow-up appointments may be to begin with, with fewer after 2 years, says Macmillan.", ref: 2, picture: "calendar" },
        { value: "Around 2 years", label: "is how long many hospitals offer follow-up after Hodgkin and high-grade non-Hodgkin lymphoma, says Lymphoma Action.", ref: 1, picture: "calendar" },
      ],
    },
  },
  "work": {
    sectionRefs: [[[1], [1]], [[2, 1], [2, 1]], [[2, 1], [2]], [[3], [3]], [[1], [1, 2]]],
    helpRefs: [[1], [2], [2], [3, 1], [1], [2]],
  },
  "fertility": {
    sectionRefs: [[[2, 3], [1]], [[1], [1]], [[1], [1], [1]], [[4, 1], [5]], [[1], [1]]],
    helpRefs: [[2, 3], [1], [4], [1], [5]],
    stats: {
      2: [{ value: "About 2 weeks", label: "of daily injections to stimulate the ovaries come before eggs are collected and frozen, says Lymphoma Action.", ref: 1, picture: "calendar" }],
      3: [{ value: "At least 3 months", label: "after radiotherapy is how long doctors usually recommend using contraception, says Lymphoma Action.", ref: 1, picture: "calendar" }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [1]], [[2, 3], [2], [1]], [[2, 3], [3, 1]], [[1, 6], [3, 1]], [[4, 5], [4]]],
    helpRefs: [[1], [3], [3], [4, 3], [5], [4]],
  },
};
