import type { NewsExtras } from "../ischaemic-news";
// Kidney cancer features: paragraph references (numbers are positions in each answer's own sources in kidney-cancer-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-you-had": {
    sectionRefs: [[[1, 3], [2], [3]], [[1], [4], [4]], [[5], [1], [3]], [[2, 3], [1], [1, 2]], [[6], [7]]],
    helpRefs: [[6], [7], [7], [7], [3], [6]],
    stats: {
      1: [{ value: "Under 4cm", label: "is the size of kidney cancer for which removing only part of the kidney is the most common operation, says Macmillan.", ref: 4 }],
    },
  },
  "stage": {
    sectionRefs: [[[1], [2, 3]], [[1], [1], [1]], [[1], [1]], [[1], [1], [2]], [[3], [3], [1]]],
    helpRefs: [[1], [3], [4], [5], [1]],
    charts: {
      0: { kind: "donut", title: "The most common type", subtitle: "Kidney cancers, out of every 100, that are renal cell cancers", value: 80, prefix: "Around", subject: "kidney cancers", label: "are renal cell cancers", sources: "Sources: Cancer Research UK, Types and grades of kidney cancer; Macmillan, Kidney cancer" },
      2: { kind: "bars", title: "Size in the T stages", subtitle: "The largest size, in centimetres, for each early T stage, as Macmillan describes them", bars: [{ label: "T1a: 4cm or smaller", value: 4 }, { label: "T1: no bigger than 7cm", value: 7, strong: true }, { label: "T2a: between 7cm and 10cm", value: 10 }], max: 10, ticks: [0, 5, 10], unit: "cm", sources: "Source: Macmillan, Staging and grading of kidney cancer" },
    },
  },
  "follow-up": {
    sectionRefs: [[[1], [1], [1, 3]], [[1], [1], [1]], [[1], [1], [1]], [[1], [1, 3]], [[1, 2], [1]]],
    helpRefs: [[1, 2], [1], [1], [3], [1], [1]],
    stats: {
      1: [{ value: "About 6 weeks", label: "after you leave hospital is when you usually see your surgeon for the first follow-up, says Cancer Research UK.", ref: 1, picture: "calendar" }],
      2: [{ value: "At least 5 years", label: "of regular CT scans is usual after surgery, before your doctor decides whether you need any more, says Cancer Research UK.", ref: 1, picture: "calendar" }],
    },
  },
  "one-kidney": {
    sectionRefs: [[[1], [2], [3]], [[4], [4]], [[2], [2]], [[3], [2], [3]], [[2], [3], [2]]],
    helpRefs: [[2], [2], [3], [3], [2, 3], [3]],
    stats: {
      0: [{ value: "1 in 1,000", label: "people are born with one kidney, says Kidney Care UK.", ref: 5 }],
    },
  },
  "surgery-recovery": {
    sectionRefs: [[[2], [2]], [[1, 2], [2]], [[1], [1], [1, 4]], [[2], [2], [1]], [[3], [3], [1]]],
    helpRefs: [[1, 2], [2], [3], [1], [1], [3]],
    charts: {
      2: { kind: "bars", title: "The weeks after the operation", subtitle: "Weeks after kidney cancer surgery, as Macmillan describes most people's recovery", bars: [{ label: "Feeling more tired than usual: about", value: 6 }, { label: "Most people feel recovered: about", value: 12, strong: true }], max: 12, ticks: [0, 4, 8, 12], unit: " weeks", sources: "Source: Macmillan, Surgery for kidney cancer" },
    },
    stats: {
      3: [{ value: "About 10 days", label: "is how long the special glue on keyhole wounds takes to come off on its own, says Cancer Research UK.", ref: 2, picture: "calendar" }],
    },
  },
  "drugs": {
    sectionRefs: [[[1, 7], [1]], [[2], [3], [2, 6]], [[2], [2, 4], [2]], [[2], [3, 5], [5]], [[2], [1]]],
    helpRefs: [[4], [4], [4], [5], [4, 5], [1]],
    stats: {
      2: [{ value: "4 weeks on, 2 off", label: "is the usual pattern for sunitinib in kidney cancer, making one 6-week cycle, says Macmillan.", ref: 4, picture: "calendar" }],
      3: [{ value: "Every 3 to 6 weeks", label: "is how often pembrolizumab is given after surgery for kidney cancer, says Cancer Research UK.", ref: 3, picture: "calendar" }],
    },
  },
  "side-effects": {
    sectionRefs: [[[1], [3, 4]], [[2, 3], [2, 3], [2]], [[2], [2], [2]], [[4], [4, 5], [4]], [[2], [2], [2]]],
    helpRefs: [[2, 3], [1], [3, 4], [3, 4], [2, 4], [2]],
    stats: {
      1: [{ value: "24 hours", label: "a day: the hospital's contact numbers can be called at any time of the day or night if you feel unwell, says Macmillan.", ref: 2, picture: "hours" }],
      4: [{ value: "At least 2 litres", label: "of fluid a day is the usual advice to help protect your kidneys during sunitinib, says Macmillan.", ref: 2 }],
    },
  },
  "fatigue": {
    sectionRefs: [[[1], [1], [1, 2]], [[3], [4], [4]], [[5, 6], [6], [5, 6]], [[2], [2], [2, 7]], [[2, 7], [7], [2]]],
    helpRefs: [[2], [2], [7], [4], [6], [2]],
    charts: {
      0: { kind: "donut", title: "Very common", subtitle: "People with cancer, out of every 100, as research cited by Cancer Research UK suggests", value: 65, prefix: "Almost", subject: "people with cancer", label: "are affected by cancer related fatigue", sources: "Source: Cancer Research UK, What is cancer fatigue?" },
    },
    stats: {
      1: [{ value: "About 6 weeks", label: "of feeling more tired than usual is common after kidney cancer surgery, says Macmillan.", ref: 3, picture: "calendar" }],
    },
  },
  "kidney-health": {
    sectionRefs: [[[1], [2], [2, 3]], [[4], [4, 1], [4, 1]], [[4], [5]], [[1], [1, 4], [1, 4]], [[4], [1]]],
    helpRefs: [[1], [4], [1, 4], [4], [4], [1]],
    stats: {
      0: [{ value: "More than 90ml a minute", label: "is how much healthy kidneys should be able to filter, says the NHS.", ref: 2 }],
      1: [{ value: "At least 2 litres", label: "of non-alcoholic fluids a day helps protect the kidneys, says Macmillan. Plain water is best.", ref: 4 }],
      3: [{ value: "14 units", label: "of alcohol a week is the most to drink regularly, with a few alcohol-free days, says Macmillan.", ref: 4 }],
    },
  },
  "blood-pressure": {
    sectionRefs: [[[1], [2, 3], [4, 3]], [[4, 2], [3]], [[5], [5, 6]], [[2, 3], [3, 4]], [[3], [3]]],
    helpRefs: [[4, 2], [4], [5], [3], [3], [3]],
    stats: {
      1: [
        { value: "140/90", label: "or higher, checked by a healthcare professional, usually means high blood pressure, says the NHS.", ref: 3 },
        { value: "135/85", label: "or higher is the usual level for high blood pressure when checked at home, says the NHS.", ref: 3 },
      ],
      3: [{ value: "150 minutes", label: "of exercise a week is what the NHS suggests aiming for, to help lower blood pressure.", ref: 3, picture: "hours" }],
    },
  },
  "work": {
    sectionRefs: [[[1, 2], [1]], [[3, 4], [5], [5]], [[6], [5], [6]], [[7], [7]], [[8], [8], [8, 9]]],
    helpRefs: [[4], [5], [6], [5], [7], [8]],
    stats: {
      0: [{ value: "From diagnosis", label: "you meet the definition of disability under the Equality Act 2010 if you have cancer, says the government.", ref: 2, picture: "calendar" }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [2], [2]], [[3], [3]], [[4], [4]], [[4], [4, 5], [4]], [[4, 8], [6, 7], [6]]],
    helpRefs: [[4], [4], [5, 4], [4], [8], [6]],
    stats: {
      2: [{ value: "More than 2 weeks", label: "of low feelings is the time to talk to your doctor or nurse, says Macmillan.", ref: 4, picture: "calendar" }],
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 8 }],
    },
  },
};
