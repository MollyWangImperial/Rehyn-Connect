import type { NewsExtras } from "../ischaemic-news";
// Melanoma skin cancer features: paragraph references (numbers are positions in each answer's own sources in melanoma-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [1, 2]], [[5, 1], [5], [5]], [[4], [1, 4]], [[6], [3, 1]]],
    helpRefs: [[6], [6], [5], [5], [6]],
    charts: {
      2: { kind: "range", title: "The most common type", subtitle: "People with melanoma who have superficial spreading melanoma, out of every 100", from: 70, to: 80, sources: "Source: Cancer Research UK, Types of melanoma" },
    },
  },
  "stage": {
    sectionRefs: [[[5], [3]], [[1, 2], [1, 2]], [[1], [1]], [[1], [6, 4]], [[5], [1, 5]]],
    helpRefs: [[5], [1], [5], [1], [3]],
    stats: {
      0: [{ value: "About 2 weeks", label: "is how long excision biopsy results should take to come back, though sometimes it might be longer, says the NHS.", ref: 3, picture: "calendar" }],
    },
    charts: {
      1: { kind: "bars", title: "Thickness, level by level", subtitle: "The deepest each T level reaches, in millimetres. T4 is more than 4mm", bars: [{ label: "T1: 1mm or less", value: 1 }, { label: "T2: between 1mm and 2mm", value: 2 }, { label: "T3: between 2mm and 4mm", value: 4, strong: true }], unit: "mm", max: 4, ticks: [0, 1, 2, 3, 4], sources: "Source: Macmillan, Staging of melanoma" },
    },
  },
  "follow-up": {
    sectionRefs: [[[1], [2]], [[2], [1]], [[1], [1], [1]], [[1, 4], [1]], [[1], [3]]],
    helpRefs: [[1], [1], [5], [1], [1]],
    charts: {
      2: { kind: "bars", title: "How long follow-up usually lasts", subtitle: "Years of follow-up appointments in England, Wales and Northern Ireland, if there are no signs the melanoma has come back. After melanoma in situ, usually one appointment", bars: [{ label: "Stage 1A", value: 1 }, { label: "Stages 1B and 2A", value: 5 }, { label: "Stages 2B and 2C", value: 5 }, { label: "Stages 3 and 4, removed", value: 5, strong: true }], unit: "years", max: 5, ticks: [0, 1, 2, 3, 4, 5], sources: "Source: Cancer Research UK, Follow up after treatment for melanoma skin cancer (NICE guidelines)" },
    },
  },
  "recurrence": {
    sectionRefs: [[[1, 2], [1]], [[1], [1]], [[1], [4]], [[1, 3], [3, 1]], [[2], [1]]],
    helpRefs: [[1], [1, 3], [3], [1], [1]],
    stats: {
      2: [{ value: "2cm", label: "from where the melanoma started is the line between satellite metastases, closer in, and in-transit metastases, further away, says Macmillan.", ref: 1 }],
    },
  },
  "surgery": {
    sectionRefs: [[[2, 1], [2, 1]], [[2, 3], [1]], [[2], [2]], [[1, 2], [1, 2]], [[4, 5], [4]]],
    helpRefs: [[1, 2], [2], [2], [2], [1], [5]],
    stats: {
      1: [{ value: "5 to 7 days", label: "is about how long a skin graft takes to connect with the blood supply in the area, says Macmillan.", ref: 1, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "Stitches out", subtitle: "Days after surgery when stitches or clips that need removing are normally taken out", from: 5, to: 14, unit: "days", sources: "Source: Cancer Research UK, Surgery to remove melanoma skin cancer" },
    },
  },
  "immunotherapy": {
    sectionRefs: [[[2], [3]], [[1, 5], [6, 4]], [[1], [1]], [[2, 7], [3, 2, 8]], [[2, 3], [8]]],
    helpRefs: [[2], [3, 8], [8], [2], [8]],
    charts: {
      2: { kind: "range", title: "The BRAF change", subtitle: "People with skin melanoma who have a change in the BRAF gene, out of every 100", from: 40, to: 50, sources: "Source: Cancer Research UK, Targeted cancer drugs and immunotherapy for melanoma skin cancer" },
    },
    stats: {
      3: [{ value: "Up to 12 months", label: "is how long adjuvant immunotherapy usually lasts after surgery, says Macmillan.", ref: 2, picture: "calendar" }],
    },
  },
  "side-effects": {
    sectionRefs: [[[1, 2, 3], [1, 2]], [[1], [1, 2]], [[2, 5], [4], [1]], [[1], [1, 4], [1]], [[1], [1]]],
    helpRefs: [[1], [1, 2], [2], [1, 4], [1], [1]],
    stats: {
      0: [{ value: "More than a year", label: "after treatment ends is when some immunotherapy side effects can start, says Macmillan.", ref: 2, picture: "calendar" }],
      2: [{ value: "The first month", label: "of dabrafenib and trametinib is when high temperatures usually start, says Macmillan.", ref: 4, picture: "calendar" }],
    },
  },
  "swelling": {
    sectionRefs: [[[1], [4, 3, 1]], [[2], [2, 1]], [[5, 1], [1, 5]], [[2], [2]], [[3, 2], [6, 3]]],
    helpRefs: [[1], [2, 7], [2], [2], [1], [2]],
    stats: {
      2: [{ value: "Around six weeks", label: "after an operation is when normal swelling around the scars usually settles, says the Lymphoedema Support Network.", ref: 5, picture: "calendar" }],
    },
  },
  "sun": {
    sectionRefs: [[[1], [2, 3]], [[1, 3], [1, 2]], [[1, 2], [3, 2]], [[3, 1, 2], [2, 3]], [[3, 1], [1, 3]]],
    helpRefs: [[1, 2], [1, 2], [1], [1, 2], [1]],
    stats: {
      1: [{ value: "11am to 3pm", label: "is when the sun is usually strongest and best stayed out of, says Macmillan.", ref: 1, picture: "hours" }],
    },
    charts: {
      3: { kind: "range", title: "Enough to cover you", subtitle: "Teaspoons of sun cream enough to cover most adults", from: 6, to: 8, unit: "teaspoons", sources: "Source: Macmillan, Skincare in the sun after melanoma; NHS, Sunscreen and sun safety" },
    },
  },
  "skin-checks": {
    sectionRefs: [[[2], [2]], [[1, 3], [1, 3], [1]], [[3, 1], [1]], [[1], [1]], [[2, 4], [4, 1]]],
    helpRefs: [[2], [1, 2], [1], [1], [1], [2]],
    stats: {
      0: [{ value: "At least once a month", label: "is how often to check your skin for signs of melanoma after treatment, says Macmillan.", ref: 2, picture: "calendar" }],
      1: [{ value: "More than 6mm", label: "wide is usual for a melanoma, while normal moles are about the size of the blunt end of a pencil or smaller, says Macmillan.", ref: 1 }],
    },
  },
  "vitamin-d": {
    sectionRefs: [[[1], [1]], [[1], [1, 2]], [[3, 1], [4, 3]], [[3], [3]]],
    helpRefs: [[1], [1], [3, 1], [3], [3]],
    stats: {
      3: [{ value: "10 micrograms", label: "a day is the vitamin D supplement everyone should consider during the autumn and winter, says the NHS.", ref: 3 }],
    },
  },
  "mood": {
    sectionRefs: [[[1, 3], [2]], [[2, 5], [5]], [[3, 4], [6, 10, 1]], [[2], [11]], [[7, 9, 8], [7]]],
    helpRefs: [[3, 4], [3], [6], [1, 10], [9], [7]],
    stats: {
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 9 }],
    },
  },
};
