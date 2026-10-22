import type { NewsExtras } from "../ischaemic-news";
// Myelodysplastic syndromes (MDS) features: paragraph references (numbers are positions in each answer's own sources in mds-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [2]], [[2, 3], [2, 4]], [[5, 6, 7], [5, 6, 3], [7, 6]], [[1, 8], [1, 8]]],
    helpRefs: [[4], [8], [11], [11], [9, 4], [10]],
    charts: {
      2: { kind: "donut", title: "Mostly diagnosed later in life", subtitle: "People diagnosed with MDS, out of every 100, as Blood Cancer UK and Leukaemia Care give it", value: 90, prefix: "About", subject: "people diagnosed with MDS", label: "are over 50", sources: "Sources: Blood Cancer UK, What causes MDS?; Leukaemia Care, Myelodysplastic syndromes (MDS)" },
    },
  },
  "types": {
    sectionRefs: [[[1, 2, 3], [2, 4]], [[1], [1, 2], [1, 2]], [[3, 2], [3, 4]], [[3], [3, 5]], [[3], [3]]],
    helpRefs: [[3], [3], [3], [3], [6]],
    stats: {
      1: [{ value: "6 main types", label: "of MDS are described by Blood Cancer UK, from single lineage dysplasia to unclassifiable.", ref: 1 }],
      2: [{ value: "5 risk groups", label: "from very low to very high make up the IPSS-R system doctors often use, says Blood Cancer UK.", ref: 3 }],
    },
  },
  "tests": {
    sectionRefs: [[[1, 2, 3], [2, 4, 3]], [[2, 5, 4], [4, 5], [5]], [[2, 4, 6], [2]], [[4], [3, 4]], [[2]]],
    helpRefs: [[5], [5, 4], [5], [4], [4], [2]],
    stats: {
      1: [{ value: "20 to 30 minutes", label: "is how long a bone marrow biopsy appointment takes, though the biopsy itself takes only a few minutes, says Macmillan.", ref: 5, picture: "hours" }],
    },
  },
  "counts": {
    sectionRefs: [[[1], [1]], [[1], [2, 3]], [[1], [2, 4]], [[1], [1, 2]], [[1], [1, 5]]],
    helpRefs: [[1], [5], [5], [1]],
    charts: {
      1: { kind: "bars", title: "A healthy haemoglobin range", subtitle: "Haemoglobin in grams per litre, in someone healthy, as Blood Cancer UK gives it", bars: [{ label: "Lower end", value: 115 }, { label: "Upper end", value: 180, strong: true }], max: 200, ticks: [0, 50, 100, 150, 200], unit: " g/L", sources: "Source: Blood Cancer UK, Tests for MDS" },
      3: { kind: "range", title: "A healthy white cell count", subtitle: "White blood cells, in billions per litre, in someone healthy, as Blood Cancer UK gives it", from: 4, to: 11, unit: "billion white cells per litre", sources: "Source: Blood Cancer UK, Tests for MDS" },
    },
    stats: {
      2: [{ value: "150 to 400", label: "billion platelets per litre is the healthy range, says Blood Cancer UK.", ref: 1 }],
    },
  },
  "watch-wait": {
    sectionRefs: [[[1], [1, 2]], [[1], [1]], [[1], [1], [1]], [[1], [1], [2]], [[1, 3], [3, 1]]],
    helpRefs: [[1], [1], [2], [4], [3], [1]],
  },
  "transfusions": {
    sectionRefs: [[[1, 2], [1, 3]], [[2], [2]], [[1], [1]], [[1, 4], [1]], [[2], [2], [2]]],
    helpRefs: [[1], [1], [2], [2], [2]],
    stats: {
      1: [{ value: "Up to 4 hours", label: "is how long a blood transfusion usually takes, says the NHS.", ref: 2, picture: "hours" }],
    },
  },
  "treatments": {
    sectionRefs: [[[1, 2, 3], [2, 4]], [[1], [5, 3, 6]], [[7, 3, 8], [7, 8], [3, 8]], [[3, 7, 1], [3, 6, 7]], [[9], [3]]],
    helpRefs: [[2], [9], [8], [3], [3], [2]],
    charts: {
      2: { kind: "bars", title: "One cycle of azacitidine", subtitle: "Days in each cycle, as Macmillan describes it", bars: [{ label: "Daily injections", value: 7, strong: true }, { label: "Rest period", value: 21 }], max: 28, ticks: [0, 7, 14, 21, 28], unit: " days", sources: "Source: Macmillan, Azacitidine" },
    },
    stats: {
      3: [{ value: "21 days on, 7 off", label: "is the usual way of taking lenalidomide capsules, in repeating cycles, says Macmillan.", ref: 3, picture: "calendar" }],
    },
  },
  "transplant": {
    sectionRefs: [[[1, 2], [2, 1, 3]], [[1, 4], [2, 5, 4], [3]], [[5, 2], [2, 6]], [[5, 2], [2, 5]], [[7], [7], [8]]],
    helpRefs: [[3], [7], [7], [9], [8], [7]],
    charts: {
      2: { kind: "range", title: "How long conditioning lasts", subtitle: "Days of conditioning therapy before a transplant, usually, as the NHS gives it", from: 1, to: 10, unit: "days of conditioning", sources: "Source: NHS, How a stem cell or bone marrow transplant is done" },
    },
    stats: {
      3: [{ value: "At least 6 weeks", label: "in hospital is what a stem cell transplant for MDS involves, says Blood Cancer UK.", ref: 2, picture: "calendar" }],
      4: [{ value: "Up to a year", label: "is how long it can take to fully recover from a stem cell transplant, says the NHS.", ref: 7, picture: "calendar" }],
    },
  },
  "infections": {
    sectionRefs: [[[1], [2]], [[2, 1], [2, 3]], [[2, 4], [2, 4], [4]], [[5, 2], [5]], [[6], [6, 3], [6]]],
    helpRefs: [[2], [2], [4], [6], [6, 3], [4]],
    stats: {
      2: [{ value: "111", label: "is the number to call if you are not having treatment and cannot speak to your GP or hospital team, says Blood Cancer UK.", ref: 2 }],
      3: [{ value: "Within one hour", label: "of arriving at hospital is when you should get antibiotics if you have sepsis, says Blood Cancer UK.", ref: 5, picture: "hours" }],
    },
  },
  "fatigue": {
    sectionRefs: [[[1, 2], [3]], [[4, 5], [4], [3]], [[3], [6, 7], [6]], [[3, 7], [3], [3]], [[3, 7]]],
    helpRefs: [[3], [4], [3, 6], [3], [3], [3]],
    charts: {
      0: { kind: "donut", title: "Anaemia is common in MDS", subtitle: "People with MDS, out of every 100, as Leukaemia Care gives it", value: 80, prefix: "About", subject: "people with MDS", label: "have anaemia", sources: "Source: Leukaemia Care, Myelodysplastic syndromes (MDS)" },
    },
    stats: {
      2: [{ value: "5 or 10 minutes", label: "of walking a day is a place to start if you have not walked much before, building up slowly, says Blood Cancer UK.", ref: 6, picture: "hours" }],
    },
  },
  "bleeding": {
    sectionRefs: [[[1, 2], [2, 3]], [[2, 3], [4]], [[4, 1], [4], [2]], [[2], [2, 5]]],
    helpRefs: [[4], [2], [2], [5], [2]],
    stats: {
      0: [{ value: "150 to 400", label: "billion platelets per litre is the healthy range, says Blood Cancer UK; in MDS it can be lower.", ref: 6 }],
    },
  },
  "mood": {
    sectionRefs: [[[1, 2, 3], [3]], [[4], [5]], [[3], [3, 6]], [[2, 3], [7, 8, 9], [10, 7]], [[11, 3], [12, 11]]],
    helpRefs: [[4], [3], [3], [8], [12], [11]],
    stats: {
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 12 }],
    },
  },
};
