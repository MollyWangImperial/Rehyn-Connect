import type { NewsExtras } from "../ischaemic-news";
// Leukaemia features: paragraph references (numbers are positions in each answer's own sources in leukaemia-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 3], [2, 3]], [[2], [3]], [[1], [2], [5]], [[1], [4]], [[4], [7]]],
    helpRefs: [[8], [2], [6], [2], [6]],
    stats: {
      0: [{ value: "Billions", label: "of new blood cells are made by the bone marrow every day, to replace old and worn-out ones, says Macmillan.", ref: 3 }],
    },
  },
  "types": {
    sectionRefs: [[[1], [1, 2], [3]], [[4], [4]], [[5]], [[1, 6], [6]], [[7], [7, 8]]],
    helpRefs: [[9], [10], [11], [3], [3]],
    charts: {
      1: { kind: "donut", title: "More common with age", subtitle: "New cases of AML in the UK, out of every 100, as Cancer Research UK reports", value: 40, prefix: "Around", subject: "new cases of AML", label: "are in people aged 75 and over", sources: "Source: Cancer Research UK, What is acute myeloid leukaemia (AML)?" },
    },
    stats: {
      2: [{ value: "Aged 4 and under", label: "is when ALL is most common, in children, says the NHS.", ref: 5 }],
    },
  },
  "tests": {
    sectionRefs: [[[1], [2, 1], [2]], [[2], [2, 3], [2]], [[2], [2], [2]], [[1], [2], [4, 3, 1]], [[2], [3]]],
    helpRefs: [[2], [2], [2], [3], [2]],
    charts: {
      1: { kind: "range", title: "How long a bone marrow biopsy takes", subtitle: "Minutes from start to finish; removing the sample itself takes only a few", from: 20, to: 30, unit: "minutes", sources: "Source: Blood Cancer UK, Blood cancer tests" },
    },
    stats: {
      4: [{ value: "1 or 2 weeks", label: "is how long bone marrow biopsy results can take, says Blood Cancer UK.", ref: 2, picture: "calendar" }],
    },
  },
  "counts": {
    sectionRefs: [[[1], [1]], [[1, 2], [3, 4], [1, 5]], [[1], [1]], [[6], [6], [7, 2]], [[1], [1]]],
    helpRefs: [[1], [4], [1], [1], [1]],
    stats: {
      3: [{ value: "7 to 14 days", label: "after chemotherapy is when you are particularly at risk of infection, as white cells are at their lowest, says Macmillan.", ref: 6, picture: "calendar" }],
    },
  },
  "treatments": {
    sectionRefs: [[[1], [2]], [[3, 4], [3, 5], [3, 4]], [[6], [7, 8]], [[4, 3], [3]], [[3], [3]]],
    helpRefs: [[2], [5], [5], [3], [9]],
    stats: {
      1: [{ value: "Up to a week", label: "of steroid medicine is usually taken before chemotherapy starts for ALL, says the NHS.", ref: 4, picture: "calendar" }],
    },
  },
  "stem-cell": {
    sectionRefs: [[[1, 2], [3, 4], [5]], [[6], [5]], [[5], [3]], [[3, 5], [3], [3]], [[7], [8, 3], [7, 1]]],
    helpRefs: [[7], [7], [7], [7], [7], [8]],
    charts: {
      1: { kind: "range", title: "How long conditioning therapy lasts", subtitle: "Days of chemotherapy or radiotherapy before the transplant, usually; it can be longer", from: 1, to: 10, unit: "days", sources: "Source: NHS, How a stem cell or bone marrow transplant is done" },
    },
    stats: {
      2: [{ value: "About 2 to 3 weeks", label: "is how long engraftment can take, as the new stem cells start making blood cells, says Cancer Research UK.", ref: 3, picture: "calendar" }],
      4: [{ value: "Up to a year", label: "to fully recover from a stem cell or bone marrow transplant, says the NHS.", ref: 7, picture: "calendar" }],
    },
  },
  "infections": {
    sectionRefs: [[[1], [1], [2]], [[2], [2], [4]], [[3, 2], [3, 2], [7, 2]], [[2], [5]], [[3], [4, 6], [4]]],
    helpRefs: [[2], [2], [2], [3], [3], [1]],
    stats: {
      2: [{ value: "24-hour", label: "emergency number: you should be given one if you are having treatment, says Blood Cancer UK.", ref: 3, picture: "hours" }],
      4: [{ value: "Within the hour", label: "is when you should ideally get antibiotics in A&E if you are having anti-cancer treatment, says Blood Cancer UK.", ref: 3, picture: "hours" }],
    },
  },
  "fatigue": {
    sectionRefs: [[[1, 2], [1]], [[2, 3, 4], [3], [4]], [[5], [5], [5]], [[1, 6], [1, 4], [1]], [[1], [1]]],
    helpRefs: [[1], [2], [1], [1], [1], [1]],
    stats: {
      2: [{ value: "Up to 4 hours", label: "per bag is how long a red blood cell transfusion can take, says Blood Cancer UK.", ref: 5, picture: "hours" }],
      3: [{ value: "0 to 10", label: "is the scale your specialist nurse may ask you to score your fatigue on, where 10 is the worst possible, says Macmillan.", ref: 4 }],
    },
  },
  "follow-up": {
    sectionRefs: [[[1], [2, 3]], [[2], [2], [3]], [[4], [5]], [[3], [3]], [[6], [2, 3], [2]]],
    helpRefs: [[6], [6], [3], [3], [2], [3]],
    charts: {
      1: { kind: "bars", title: "Gaps between check-ups grow", subtitle: "Months between appointments after AML, in Cancer Research UK's general guide", bars: [{ label: "Years 1 and 2", value: 3 }, { label: "Years 3 and 4", value: 4 }, { label: "Year 5", value: 6, strong: true }], max: 6, ticks: [0, 2, 4, 6], unit: " months", sources: "Source: Cancer Research UK, Follow up after treatment for AML" },
    },
    stats: {
      2: [{ value: "Every 3 months", label: "to start with, a PCR blood test checks for CML cells if you take a TKI, says Macmillan.", ref: 5, picture: "calendar" }],
    },
  },
  "eating": {
    sectionRefs: [[[1], [1]], [[2], [2, 1], [2]], [[1], [1], [1, 2]], [[1], [1]], [[1], [3]]],
    helpRefs: [[1], [2], [1], [1, 2], [1], [1]],
    stats: {
      4: [{ value: "5", label: "is the highest food hygiene rating, meaning standards are very good, says Blood Cancer UK.", ref: 1 }],
    },
  },
  "work": {
    sectionRefs: [[[1, 2], [2]], [[3], [2]], [[5], [5, 4]], [[2], [2], [6]], [[7], [7], [7]]],
    helpRefs: [[2], [2], [4], [7], [7], [2]],
    stats: {
      0: [{ value: "From diagnosis", label: "you meet the definition of disability under the Equality Act 2010 if you have cancer, says the government.", ref: 1, picture: "calendar" }],
      4: [{ value: "5 years", label: "is how long a medical exemption certificate for free prescriptions in England lasts, says Blood Cancer UK.", ref: 7, picture: "calendar" }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [1], [2]], [[1], [1], [2]], [[3], [3], [1]], [[1, 3, 4], [3, 4]], [[3, 5], [6, 7], [6]]],
    helpRefs: [[3], [1], [3], [1], [5], [6]],
    stats: {
      2: [{ value: "More than 2 weeks", label: "of low feelings is the time to talk to your doctor or nurse, says Macmillan.", ref: 3, picture: "calendar" }],
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 5 }],
    },
  },
};
