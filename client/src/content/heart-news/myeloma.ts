import type { NewsExtras } from "../ischaemic-news";
// Myeloma features: paragraph references (numbers are positions in each answer's own sources in myeloma-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2, 3]], [[4], [3]], [[2, 5], [5], [5]], [[4, 6], [4, 5]], [[7, 8], [8], [1, 2]]],
    helpRefs: [[9], [9], [2], [10], [11]],
    stats: {
      2: [{ value: "1 in 5", label: "people with myeloma have light chain myeloma, says Blood Cancer UK.", ref: 5, picture: "one-in", of: 5 }],
      4: [{ value: "Around 5,900", label: "people in the UK are diagnosed with myeloma each year, says Macmillan.", ref: 2 }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1, 2], [3, 4]], [[5, 6], [5, 3]], [[7, 3], [8, 6]], [[3, 6], [3]], [[9], [5, 1], [9, 1]]],
    helpRefs: [[10], [9], [1], [1, 3], [1]],
    charts: {
      4: { kind: "donut", title: "Pain comes first", subtitle: "People with spinal cord compression, out of every 100, as Cancer Research UK states", value: 90, prefix: "More than", subject: "people with spinal cord compression", label: "have pain, which is often the first symptom", sources: "Source: Cancer Research UK, Symptoms of myeloma" },
    },
  },
  "tests": {
    sectionRefs: [[[1, 2], [3]], [[4], [3, 2]], [[3], [3, 2]], [[3, 1], [5], [6]], [[7], [1]]],
    helpRefs: [[3], [5], [5], [7], [1]],
    stats: {
      3: [{ value: "Every 2 to 3 months", label: "is how often you might have tests and clinic visits at first, once in remission, says Cancer Research UK.", ref: 5, picture: "calendar" }],
      4: [{ value: "1 to 2 weeks", label: "is how long you should wait for your test results, says the NHS.", ref: 7, picture: "calendar" }],
    },
  },
  "stages": {
    sectionRefs: [[[1, 2], [1], [2]], [[3], [3]], [[4, 5], [4, 5]], [[5, 6, 9], [6, 7]], [[6], [5], [6, 8]]],
    helpRefs: [[1], [2], [2], [1], [1]],
    charts: {
      3: { kind: "bars", title: "How far the paraprotein falls", subtitle: "How much lower the paraprotein is than before treatment, out of every 100, in two of the response levels Macmillan describes", bars: [{ label: "Partial response: at least", value: 50 }, { label: "Very good partial response", value: 90, strong: true }], sources: "Source: Macmillan, Myeloma and response to treatment" },
    },
  },
  "treatments": {
    sectionRefs: [[[1], [2, 1]], [[1, 3], [3, 1, 2]], [[3], [1]], [[4, 3], [5]], [[1], [1], [1]]],
    helpRefs: [[1], [1], [6], [7], [1]],
    charts: {
      2: { kind: "range", title: "How long one cycle lasts", subtitle: "Days in each cycle of treatment, as Cancer Research UK describes it", from: 21, to: 35, unit: "days a cycle", sources: "Source: Cancer Research UK, First treatment for myeloma" },
    },
    stats: {
      2: [{ value: "4 to 6", label: "cycles of treatment is what most people have, says Cancer Research UK.", ref: 3 }],
    },
  },
  "transplant": {
    sectionRefs: [[[1], [1, 2, 7], [2]], [[1, 3], [3, 4]], [[1, 2], [2, 1], [1]], [[1], [1]], [[5], [5, 6], [5]]],
    helpRefs: [[1], [5], [5], [5], [5], [5]],
    stats: {
      2: [{ value: "5 to 10 days", label: "of daily growth factor injections come before your stem cells are collected, says Cancer Research UK.", ref: 1, picture: "calendar" }],
      4: [{ value: "6 months", label: "is how long doctors usually advise against going abroad after a transplant, says Cancer Research UK.", ref: 5, picture: "calendar" }],
    },
    charts: {
      3: { kind: "range", title: "Time in hospital", subtitle: "Weeks you may stay in hospital after high-dose treatment, though it can vary from one person to another", from: 3, to: 4, unit: "weeks", sources: "Source: Cancer Research UK, Stem cell transplant for myeloma" },
    },
  },
  "bones": {
    sectionRefs: [[[1], [2]], [[1], [2, 3, 4], [1, 5]], [[2, 1], [2], [2]], [[6], [7, 1]], [[2, 9], [2], [8]]],
    helpRefs: [[2], [2], [1, 5], [2], [6], [2]],
    stats: {
      1: [{ value: "Every 4 weeks", label: "is how often zoledronic acid or pamidronate is usually given as a drip, says Cancer Research UK.", ref: 3, picture: "calendar" }],
    },
  },
  "infections": {
    sectionRefs: [[[1], [1]], [[2, 3], [2]], [[2], [2], [2, 4]], [[1], [1, 3], [1]], [[1, 5], [6]]],
    helpRefs: [[2], [2], [7], [1], [6], [2]],
    stats: {
      3: [
        { value: "2 doses", label: "of the Shingrix shingles vaccine, at least two months apart, are recommended, says Blood Cancer UK.", ref: 1 },
        { value: "Over 75", label: "is the age from which the RSV vaccine is available, says Blood Cancer UK.", ref: 1 },
      ],
    },
  },
  "kidneys": {
    sectionRefs: [[[1, 2], [1, 2], [3]], [[1, 4], [1]], [[1, 5], [6], [5]], [[4, 7], [3]], [[1, 4], [4, 2], [2]]],
    helpRefs: [[5, 1], [4], [1], [7], [2]],
    charts: {
      0: { kind: "donut", title: "Kidneys at diagnosis", subtitle: "People newly diagnosed with myeloma, out of every 100, as Blood Cancer UK states", value: 20, prefix: "Up to", subject: "people with myeloma", label: "have kidney damage when they are first diagnosed", sources: "Source: Blood Cancer UK, Managing the effects of myeloma" },
      2: { kind: "range", title: "How much to drink", subtitle: "Litres of fluid a day that doctors generally encourage, unless you are on dialysis", from: 2, to: 3, unit: "litres a day", sources: "Source: Cancer Research UK, Treating and preventing problems caused by myeloma" },
    },
  },
  "fatigue": {
    sectionRefs: [[[1], [1, 2, 3]], [[1], [2, 4], [3]], [[1], [5], [7, 6]], [[7], [1], [5]], [[7], [7]]],
    helpRefs: [[1], [6], [1], [5], [1, 5], [7]],
    stats: {
      4: [{ value: "0 to 10", label: "is the scale your specialist nurse may ask you to score your fatigue on, where 10 is the worst possible, says Macmillan.", ref: 6 }],
    },
  },
  "neuropathy": {
    sectionRefs: [[[1, 2], [2, 1, 3]], [[2, 1], [3, 2]], [[3, 4], [6, 5, 2, 3], [1]], [[2, 1], [1, 4]], [[1], [1], [1]]],
    helpRefs: [[4, 5], [3], [1], [1], [1], [1]],
  },
  "mood": {
    sectionRefs: [[[1], [2]], [[3], [4, 5]], [[6], [6]], [[2, 6, 7], [8], [6]], [[6, 9], [10, 3], [10]]],
    helpRefs: [[6], [6], [7, 6], [7], [9], [10]],
    stats: {
      2: [{ value: "More than 2 weeks", label: "of low feelings is the time to talk to your doctor or nurse, says Macmillan.", ref: 6, picture: "calendar" }],
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 9 }],
    },
  },
};
