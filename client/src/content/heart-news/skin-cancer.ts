import type { NewsExtras } from "../ischaemic-news";
// Non-melanoma skin cancer features: paragraph references (numbers are positions in each answer's own sources in skin-cancer-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[4, 5], [5, 2, 3], [4, 1]], [[1, 2], [1, 6, 2], [6]], [[1, 3, 6], [6], [3, 1]], [[7], [7], [7]]],
    helpRefs: [[8], [8], [6], [7], [7]],
    charts: {
      1: { kind: "donut", title: "The most common type", subtitle: "Non-melanoma skin cancers, out of every 100", value: 75, prefix: "Around", subject: "non-melanoma skin cancers", label: "are basal cell carcinomas", sources: "Source: Cancer Research UK, Basal cell carcinoma (BCC)" },
    },
  },
  "treatments": {
    sectionRefs: [[[2, 4], [2, 4], [4, 2]], [[2, 3, 4, 6], [3, 1], [3, 5, 1]], [[3], [3, 8]], [[2, 4, 10], [2, 9, 1], [5, 4]], [[4, 7, 2], [2]]],
    helpRefs: [[1], [1], [3], [3]],
    charts: {
      2: { kind: "donut", title: "Usually done in one or two stages", subtitle: "Mohs operations, out of every 100", value: 90, subject: "Mohs operations", label: "remove the skin cancer after 1 or 2 stages", sources: "Source: British Association of Dermatologists, Mohs micrographic surgery" },
    },
    stats: {
      2: [{ value: "Half a day", label: "is how long Mohs surgery takes on average, longer than a standard excision, says the British Association of Dermatologists.", ref: 8, picture: "hours" }],
    },
  },
  "follow-up": {
    sectionRefs: [[[1], [2]], [[1, 3, 4], [1, 3]], [[1], [1]], [[1, 5], [7, 2], [3]], [[1], [1]]],
    helpRefs: [[1], [1, 5], [2], [3, 6], [1]],
    stats: {
      1: [{ value: "At least 5 years", label: "of appointments every 4 to 6 months is what you might have after an SCC with a high risk of coming back, says Cancer Research UK.", ref: 1, picture: "calendar" }],
    },
  },
  "another-one": {
    sectionRefs: [[[1], [4, 3]], [[2], [2]], [[2, 6], [2, 5], [2]], [[5, 3], [1], [7]], [[8, 3]]],
    helpRefs: [[5], [3], [1, 3], [2], [6]],
    stats: {
      3: [{ value: "Once a month", label: "is how often it is advisable to check your skin for changes after a BCC, says the British Association of Dermatologists.", ref: 5, picture: "calendar" }],
    },
  },
  "wound-care": {
    sectionRefs: [[[1], [1], [1, 2]], [[4], [4, 2], [2, 4]], [[2], [2, 3], [2]], [[5], [5]], [[2, 3], [2, 3]]],
    helpRefs: [[1, 4], [2, 3], [2], [2, 3], [5], [2, 3]],
    charts: {
      0: { kind: "range", title: "Stitches out", subtitle: "Days after the operation when stitches that need removing are taken out, or once the wound has healed", from: 5, to: 14, unit: "days", sources: "Source: Macmillan, Surgery for skin cancer" },
    },
    stats: {
      1: [{ value: "48 hours", label: "is the least time to wait before a shower after Mohs surgery, keeping the dressing dry, says the British Association of Dermatologists.", ref: 4, picture: "hours" }],
    },
  },
  "skin-checks": {
    sectionRefs: [[[2], [1]], [[1], [1], [3, 1]], [[1, 2], [1]], [[1], [5, 2], [4, 6]]],
    helpRefs: [[2], [1, 2], [1], [1], [2]],
    stats: {
      0: [{ value: "Once a month", label: "is how often it is advisable to check your skin for changes after a BCC, says the British Association of Dermatologists.", ref: 2, picture: "calendar" }],
      3: [{ value: "More than 4 weeks", label: "of a growth or patch of skin hurting, itching, bleeding, crusting or scabbing is a reason to see a GP, says the NHS.", ref: 5, picture: "calendar" }],
    },
  },
  "creams": {
    sectionRefs: [[[3, 1, 4], [4, 5, 6]], [[3, 1], [4, 2], [1, 2, 4]], [[1], [1, 4], [1]], [[3, 1, 2], [1]], [[1, 2], [1, 2]]],
    helpRefs: [[1, 4], [1, 2], [1, 2], [3], [1], [2]],
    charts: {
      1: { kind: "bars", title: "How long a course lasts", subtitle: "Usual length of a course of cream, in weeks", bars: [{ label: "Imiquimod for BCC", value: 6, strong: true }, { label: "Fluorouracil for superficial BCC", value: 6 }, { label: "Fluorouracil, usual course: 3 to 4 weeks", value: 4 }], unit: "weeks", max: 6, ticks: [0, 2, 4, 6], sources: "Source: Cancer Research UK, Imiquimod cream and Chemotherapy cream; British Association of Dermatologists, 5-fluorouracil cream" },
    },
    stats: {
      1: [{ value: "8 hours", label: "is how long imiquimod cream stays on before you wash it off, says Cancer Research UK.", ref: 3, picture: "hours" }],
    },
  },
  "appearance": {
    sectionRefs: [[[1, 3], [7, 4], [7, 6]], [[1], [3, 1]], [[1, 2], [1, 5], [5]], [[2], [2]]],
    helpRefs: [[1, 4], [1], [1], [2], [2]],
  },
  "sun": {
    sectionRefs: [[[1, 2], [4, 3]], [[1], [2, 1]], [[2], [1, 3, 4]], [[1, 2], [3, 4, 1]], [[1], [1]]],
    helpRefs: [[1, 4], [1, 2], [2, 4], [1, 3], [1], [3, 4]],
    charts: {
      0: { kind: "donut", title: "Clouds are no shield", subtitle: "The sun's UV rays, out of every 100", value: 90, prefix: "Over", subject: "UV rays", label: "can pass through cloud", sources: "Source: Cancer Research UK, Sun safety" },
      2: { kind: "range", title: "Enough to cover you", subtitle: "Teaspoons of sunscreen enough to cover most adults", from: 6, to: 8, unit: "teaspoons", sources: "Source: Macmillan, Sun safety and cancer treatment; NHS, Sunscreen and sun safety" },
    },
    stats: {
      1: [{ value: "11am to 3pm", label: "is when the sun is strongest, the time to stay in the shade, says Macmillan.", ref: 1, picture: "hours" }],
    },
  },
  "vitamin-d": {
    sectionRefs: [[[1], [1]], [[2], [3]], [[1, 4], [5, 4]], [[4], [4, 6], [4]]],
    helpRefs: [[2, 3], [1], [1, 4], [4], [4]],
    charts: {
      3: { kind: "bars", title: "Enough, and too much", subtitle: "Daily vitamin D for adults, in micrograms", bars: [{ label: "Supplement to consider in autumn and winter", value: 10, strong: true }, { label: "The most to take in a day", value: 100 }], unit: "micrograms", max: 100, ticks: [0, 25, 50, 75, 100], sources: "Source: NHS, Vitamin D" },
    },
  },
  "work-outdoors": {
    sectionRefs: [[[2, 3], [1, 4]], [[1], [1, 7], [1, 7]], [[1], [5]], [[6], [8], [6]]],
    helpRefs: [[1], [1], [1, 7], [1], [1], [6]],
    stats: {
      1: [{ value: "SPF 30", label: "or higher is the sunscreen to use on any exposed skin when working outdoors, says the Health and Safety Executive.", ref: 1 }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [2]], [[3, 4], [5], [3]], [[3], [2]], [[1], [6, 2], [7]], [[8, 9, 10], [8]]],
    helpRefs: [[1], [1], [7], [6, 1], [9], [8]],
    stats: {
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 9 }],
    },
  },
};
