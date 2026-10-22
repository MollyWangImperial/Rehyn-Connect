import type { NewsExtras } from "../ischaemic-news";
// Penile cancer features: paragraph references (numbers are positions in each answer's own sources in penile-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-you-had": {
    sectionRefs: [[[1, 4], [2]], [[4], [1, 2]], [[2, 3], [1, 3, 5], [1]], [[1], [1]], [[4], [1, 4]]],
    helpRefs: [[1], [4], [4], [2], [6]],
  },
  "stage": {
    sectionRefs: [[[1], [2, 4]], [[1], [1, 2]], [[1], [1, 4], [2]], [[1], [1, 3]], [[3], [4, 2]]],
    helpRefs: [[4], [2], [5], [6], [1]],
    charts: {
      4: { kind: "donut", title: "The most common type", subtitle: "Penile cancers that are squamous cell cancers", value: 95, prefix: "More than", subject: "penile cancers", label: "are squamous cell cancers", sources: "Source: Cancer Research UK, Types and grades of penile cancer" },
    },
  },
  "follow-up": {
    sectionRefs: [[[1], [1, 2]], [[1], [1]], [[1, 2], [4, 3]], [[3], [3]], [[1], [2, 1]]],
    helpRefs: [[1], [3], [3], [3], [1], [1]],
    charts: {
      1: { kind: "bars", title: "Check-ups spread out", subtitle: "Months between check-ups, as they are often arranged after penile cancer treatment", bars: [{ label: "First 2 years, often every", value: 3 }, { label: "Next 3 years, often every", value: 6, strong: true }], max: 6, ticks: [0, 2, 4, 6], unit: " months", sources: "Source: Cancer Research UK, Follow up after penile cancer treatment" },
    },
    stats: {
      1: [{ value: "Up to 10 years", label: "is how long your team might keep in touch, with clinic visits much less often, says Cancer Research UK.", ref: 1, picture: "calendar" }],
    },
  },
  "hpv": {
    sectionRefs: [[[2], [2]], [[1], [2, 3]], [[3], [2], [5]], [[2], [2]], [[4, 2], [1, 2]]],
    helpRefs: [[3], [2], [2], [2, 1], [2]],
    stats: {
      1: [{ value: "Roughly half", label: "of all penile cancers are caused by certain types of HPV, says the NHS.", ref: 1, picture: "half" }],
      4: [{ value: "12 to 13", label: "is the age at which all children are offered the HPV vaccine on the NHS.", ref: 4, picture: "calendar" }],
    },
  },
  "surgery-recovery": {
    sectionRefs: [[[1], [1]], [[1, 2], [1, 5], [5, 4]], [[1], [1], [1]], [[3], [3]], [[3], [4, 6]]],
    helpRefs: [[1, 4], [1], [3], [1], [3], [4]],
    stats: {
      2: [{ value: "Up to 5 days", label: "in hospital if part or all of the penis was removed, says Cancer Research UK.", ref: 1, picture: "calendar" }],
    },
    charts: {
      4: { kind: "range", title: "Taking it steady", subtitle: "Weeks to avoid strenuous activity, such as heavy lifting, after a total penectomy", from: 4, to: 6, unit: "weeks", sources: "Source: Orchid, Surgery for penile cancer" },
    },
  },
  "passing-urine": {
    sectionRefs: [[[1], [4]], [[1, 2], [4]], [[2, 3], [3]], [[1, 5, 7], [1]], [[3, 6], [6]]],
    helpRefs: [[1], [1, 2], [7, 1], [1], [6], [6]],
    stats: {
      4: [{ value: "Over 9,000", label: "locked disabled toilets in the UK can be opened through the National Key Scheme, says Macmillan.", ref: 6 }],
    },
  },
  "lymph-nodes": {
    sectionRefs: [[[2], [1]], [[1, 6], [1, 6], [3]], [[4], [3], [4, 7]], [[3, 4], [5]], [[5, 7], [8]]],
    helpRefs: [[3, 4], [4], [3], [3], [5], [4]],
    stats: {
      1: [{ value: "About 2 weeks", label: "is how long a groin wound drain usually stays in, and sometimes up to 4 weeks, says Macmillan.", ref: 1, picture: "calendar" }],
      2: [{ value: "For life", label: "is how long the risk of lymphoedema lasts after treatment to the lymph nodes, says Cancer Research UK.", ref: 4 }],
    },
  },
  "other-treatments": {
    sectionRefs: [[[1], [1], [2]], [[3], [4], [4]], [[4], [4]], [[5], [5], [5]], [[3, 6], [6]]],
    helpRefs: [[1], [2], [4], [4], [5], [5]],
    stats: {
      0: [{ value: "2 to 3 months", label: "is how long it may take for the penis to heal completely after laser treatment, says Macmillan.", ref: 2, picture: "calendar" }],
    },
    charts: {
      1: { kind: "range", title: "A course of radiotherapy", subtitle: "Weeks of external radiotherapy, usually each weekday as an outpatient", from: 4, to: 6, unit: "weeks", sources: "Source: Cancer Research UK, External radiotherapy for penile cancer" },
    },
  },
  "relationships": {
    sectionRefs: [[[1], [1, 3]], [[1], [1, 4, 3]], [[1], [1, 2], [4, 1]], [[1], [5]], [[1, 6], [1, 4]]],
    helpRefs: [[1], [6], [1], [5], [5], [1, 4]],
    stats: {
      0: [{ value: "About 4 weeks", label: "is how long to avoid sexual activity after a circumcision, or until the wound has healed, says Cancer Research UK.", ref: 1, picture: "calendar" }],
      2: [{ value: "Over half", label: "of men in a study who had a partial penectomy could have an erection and intercourse, says Cancer Research UK.", ref: 1, picture: "half" }],
    },
  },
  "body-image": {
    sectionRefs: [[[1], [1, 5]], [[1], [1]], [[1], [4]], [[1], [2]], [[2], [2]]],
    helpRefs: [[1], [1], [1], [3, 4], [2], [2]],
    stats: {
      0: [{ value: "Up to 3 months", label: "for the penis to fully heal after surgery, with its appearance improving over time, says Orchid.", ref: 5, picture: "calendar" }],
    },
  },
  "work": {
    sectionRefs: [[[1, 2], [7]], [[3], [3]], [[3, 4], [3]], [[5], [3]], [[6], [6]]],
    helpRefs: [[1], [3], [3], [3], [5], [3]],
    stats: {
      0: [{ value: "At least 4 weeks", label: "off work after larger penile surgery, and within a week after minor surgery, says Orchid.", ref: 1, picture: "calendar" }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [1, 3]], [[2], [2, 5]], [[9, 1], [1, 3, 4]], [[2], [4, 2]], [[6, 8, 7], [2, 6]]],
    helpRefs: [[9, 1], [2], [3, 4], [4, 2], [8], [6]],
    stats: {
      1: [{ value: "More than 2 weeks", label: "of low feelings is the point to talk to your doctor or nurse, says Macmillan.", ref: 2, picture: "calendar" }],
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 8 }],
    },
  },
};
