import type { NewsExtras } from "../ischaemic-news";
// Vulval cancer features: paragraph references (numbers are positions in each answer's own sources in vulval-answers.ts), charts and big figures, all checked on 22 October 2026. No survival figures.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-you-had": {
    sectionRefs: [[[2], [1]], [[2, 3], [3, 1], [1]], [[5, 2], [4]], [[6, 8, 2], [5], [2]], [[7], [7], [8]]],
    helpRefs: [[1], [1], [2], [7], [2]],
    stats: {
      1: [{ value: "At least 1cm", label: "is the usual width of the margin of healthy tissue taken in a wide local excision, says Macmillan.", ref: 3 }],
      3: [{ value: "Once a week", label: "is how often cisplatin is usually given throughout radiotherapy for vulval cancer, says Macmillan.", ref: 5, picture: "calendar" }],
    },
  },
  "stage": {
    sectionRefs: [[[1, 4], [3], [2]], [[2], [2, 1]], [[1, 2], [2, 1]], [[2, 4], [1]], [[5], [5], [6]]],
    helpRefs: [[3], [3], [1], [5], [6]],
    stats: {
      0: [{ value: "4 main stages", label: "divide vulval cancer in the FIGO system that UK doctors usually use, from 1 to 4, says Cancer Research UK.", ref: 2 }],
      3: [{ value: "3 grades", label: "of vulval cancer, from grade 1 to grade 3, describe how abnormal the cells look, says Cancer Research UK.", ref: 2 }],
    },
  },
  "follow-up": {
    sectionRefs: [[[1], [4]], [[1], [1]], [[1], [1], [2]], [[1], [6]], [[1], [5]]],
    helpRefs: [[3], [3], [1], [2], [3], [1]],
    stats: {
      1: [{ value: "Every 6 to 12 months", label: "is how often you may have follow-up after the first 2 years, usually for 3 years, says Cancer Research UK.", ref: 1, picture: "calendar" }],
    },
    charts: {
      1: { kind: "range", title: "Check-ups at first", subtitle: "Months between follow-up appointments in the first 2 years after treatment", from: 3, to: 6, unit: "months", sources: "Source: Cancer Research UK, Follow up after vulval cancer treatment" },
    },
  },
  "skin-conditions": {
    sectionRefs: [[[6], [2, 7]], [[1], [1, 3], [1, 2]], [[5], [4, 8, 5], [4]], [[1, 3], [1]], [[2], [3]]],
    helpRefs: [[2], [1, 3], [1, 3], [1], [4], [2]],
    stats: {
      2: [{ value: "Over 4 in 10", label: "vulval cancers are linked to HPV, says The Eve Appeal.", ref: 8 }],
      4: [{ value: "More than two weeks", label: "of skin thickening, soreness or ulceration that steroid ointment has not helped is a reason to see your GP, says the British Association of Dermatologists.", ref: 3, picture: "calendar" }],
    },
  },
  "wound": {
    sectionRefs: [[[1], [2, 1], [2, 1]], [[1], [1], [1, 2]], [[1], [3]], [[2, 1], [3, 1], [2, 1]], [[2, 1], [2, 1]]],
    helpRefs: [[1], [1], [1], [1], [3], [1]],
    stats: {
      0: [
        { value: "7 to 10 days", label: "after the operation is usually when stitches or staples that do not dissolve are removed, says Macmillan.", ref: 1, picture: "calendar" },
        { value: "Up to 14 days", label: "is how long a groin drain may stay in, until no more fluid is coming out, says Cancer Research UK.", ref: 2, picture: "calendar" },
      ],
    },
    charts: {
      4: { kind: "range", title: "Allow time to heal", subtitle: "Weeks to allow, at least, to recover after a bigger operation for vulval cancer", from: 6, to: 8, unit: "weeks", sources: "Source: Cancer Research UK, After vulval cancer surgery" },
    },
  },
  "swelling": {
    sectionRefs: [[[1], [1], [8, 9]], [[2], [4, 6], [4]], [[2, 3], [5, 4]], [[2], [2, 6], [4]], [[5], [7]]],
    helpRefs: [[3, 4], [2], [2], [2], [6], [7]],
    charts: {
      0: { kind: "donut", title: "A common after-effect", subtitle: "People treated for vulval cancer, out of every 100", value: 50, prefix: "Up to", subject: "people treated for vulval cancer", label: "develop lymphoedema", sources: "Source: Lymphoedema Support Network, Think you may be at risk?" },
    },
  },
  "radiotherapy": {
    sectionRefs: [[[1], [2, 1]], [[1], [2, 3]], [[1], [1, 3], [1]], [[1], [3]], [[2, 1], [2, 1], [2]]],
    helpRefs: [[1, 4], [1], [1, 3], [3], [3], [2]],
    stats: {
      1: [{ value: "Around 2 weeks", label: "after treatment ends is when side effects usually begin to improve, says Cancer Research UK.", ref: 1, picture: "calendar" }],
      2: [{ value: "Within 2 to 4 weeks", label: "of ending treatment is when skin symptoms usually go away, says Cancer Research UK.", ref: 1, picture: "calendar" }],
    },
    charts: {
      0: { kind: "range", title: "A course of radiotherapy", subtitle: "Weeks of treatment, once a day from Monday to Friday, for vulval cancer", from: 5, to: 6, unit: "weeks", sources: "Source: Cancer Research UK, Radiotherapy for vulval cancer" },
    },
  },
  "passing-urine": {
    sectionRefs: [[[1], [3], [1, 7]], [[1, 2], [2]], [[4], [8]], [[4], [4, 5]], [[6], [6]]],
    helpRefs: [[2], [1], [8], [5], [6], [6]],
    stats: {
      4: [{ value: "About 7,000", label: "locked disabled toilets across the UK can be opened with the National Key Scheme, says Macmillan.", ref: 6 }],
    },
    charts: {
      4: { kind: "range", title: "Drink regularly", subtitle: "Litres of fluids to aim for, at least, each day after pelvic radiotherapy", from: 1, to: 2, unit: "litres a day", sources: "Source: Macmillan, Tips for coping with bladder or bowel changes" },
    },
  },
  "relationships": {
    sectionRefs: [[[3, 2], [1]], [[1], [2], [5]], [[1, 2], [3], [4]], [[2, 1], [2, 4], [4]], [[3, 2], [5, 6]]],
    helpRefs: [[1, 3], [2, 5], [1], [2], [4], [5]],
    stats: {
      1: [{ value: "At least 6 weeks", label: "after the operation before having sex gives your wound time to heal properly, says Macmillan.", ref: 1, picture: "calendar" }],
    },
    charts: {
      1: { kind: "range", title: "Time to heal", subtitle: "Weeks it can take for the wound to heal before many women return to sex", from: 6, to: 8, unit: "weeks", sources: "Source: Cancer Research UK, Problems after vulval cancer surgery" },
    },
  },
  "self-checks": {
    sectionRefs: [[[3], [2], [4]], [[2], [1, 2], [1]], [[1], [2, 5]], [[3], [2, 5], [6]]],
    helpRefs: [[2], [1], [3], [6]],
    stats: {
      0: [{ value: "Once a month", label: "is how often The Eve Appeal encourages people to check their vulva.", ref: 2, picture: "calendar" }],
    },
  },
  "work": {
    sectionRefs: [[[3], [4, 6]], [[3], [3]], [[1], [1], [1]], [[1], [7]], [[2], [1, 5]]],
    helpRefs: [[3], [4], [3], [1], [2], [1]],
    stats: {
      1: [{ value: "About 6 weeks", label: "after the operation is when you can usually start driving, after checking with your doctor or nurse and your insurer, says Macmillan.", ref: 3, picture: "calendar" }],
    },
    charts: {
      1: { kind: "range", title: "No heavy lifting", subtitle: "Weeks, at least, to avoid lifting heavy objects after major surgery for vulval cancer", from: 6, to: 8, unit: "weeks", sources: "Source: Macmillan, Before and after surgery for vulval cancer" },
    },
  },
  "mood": {
    sectionRefs: [[[1], [2], [3]], [[4], [4]], [[8, 2], [8, 3]], [[3, 2], [5], [5]], [[6, 7], [6]]],
    helpRefs: [[5], [9], [2, 8], [3], [7], [6]],
  },
};
