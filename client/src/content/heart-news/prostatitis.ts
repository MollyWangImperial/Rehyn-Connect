import type { NewsExtras } from "../ischaemic-news";
// Prostatitis features: paragraph references (numbers are positions in each answer's own sources in prostatitis-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [3]], [[2], [1]], [[2], [2]], [[2, 1], [4]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [4]],
    charts: {
      2: { kind: "waffle", title: "The most common kind", subtitle: "Men with prostatitis, out of every 100", groups: [{ label: "Chronic pelvic pain syndrome (around 90)", count: 90, tone: "green" }, { label: "The other types", count: 10, tone: "clay" }], sources: "Source: Prostate Cancer UK, Prostatitis" },
    },
  },
  "acute": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[2], [2]], [[2], [2, 4]], [[3], [4, 5]]],
    helpRefs: [[2], [4], [4], [4, 3], [3, 4]],
    stats: {
      2: [{ value: "Above 38C", label: "is the high temperature Prostate Cancer UK lists among the first symptoms.", ref: 2 }],
      3: [{ value: "About 1 in 10", label: "men with acute bacterial prostatitis suddenly and painfully cannot pee, says Prostate Cancer UK.", ref: 2, picture: "one-in", of: 10 }],
    },
  },
  "chronic": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[2], [2]], [[1], [1]], [[1, 2], [1]]],
    helpRefs: [[2], [2], [2], [3], [2], [4]],
    stats: {
      0: [{ value: "3 months or longer", label: "is how long men with chronic pelvic pain syndrome usually have symptoms, says Prostate Cancer UK.", ref: 1, picture: "calendar" }],
    },
  },
  "tests": {
    sectionRefs: [[[1], [1]], [[1], [1, 2]], [[1], [3, 4]], [[1], [1, 2]], [[1], [5]]],
    helpRefs: [[1], [4], [1], [2]],
    stats: {
      0: [{ value: "3 of the last 6 months", label: "or more with some symptoms may lead to a diagnosis of chronic pelvic pain syndrome, says Prostate Cancer UK.", ref: 1, picture: "calendar" }],
      3: [{ value: "4 to 6 weeks", label: "after a urine infection has cleared is how long to wait before a PSA test, says the NHS.", ref: 2, picture: "calendar" }],
    },
  },
  "antibiotics": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[2], [2]], [[1, 2], [5]], [[3], [3]]],
    helpRefs: [[1], [1], [3], [4], [3]],
    stats: {
      0: [{ value: "Within 2 weeks", label: "is when you will usually feel better after starting antibiotics, says the NHS.", ref: 1, picture: "calendar" }],
      4: [{ value: "At least 2 hours", label: "between ciprofloxacin and dairy products or drinks with added calcium, says the NHS.", ref: 3, picture: "hours" }],
    },
    charts: {
      1: { kind: "bars", title: "How long a course lasts", subtitle: "Weeks of antibiotic tablets, as Prostate Cancer UK gives them", bars: [{ label: "Acute bacterial: up to", value: 4 }, { label: "Chronic bacterial: at least 4 to", value: 6, strong: true }], max: 8, ticks: [0, 2, 4, 6, 8], unit: " weeks", sources: "Source: Prostate Cancer UK, Treatments for prostatitis" },
    },
  },
  "pain-relief": {
    sectionRefs: [[[1, 2], [5, 2]], [[3], [2]], [[3], [3]], [[2], [2]], [[2], [2]]],
    helpRefs: [[1], [2], [5], [3], [2]],
    stats: {
      0: [{ value: "8 tablets", label: "of 500mg paracetamol in 24 hours is the most for adults, says the NHS.", ref: 4, picture: "hours" }],
      1: [{ value: "4 to 6 weeks", label: "is how long an alpha-blocker is given before it is usually stopped if it is not helping, says Prostate Cancer UK.", ref: 2, picture: "calendar" }],
      3: [{ value: "Up to 6 months", label: "is how long finasteride can take to work, says Prostate Cancer UK.", ref: 2, picture: "calendar" }],
    },
  },
  "physio": {
    sectionRefs: [[[1, 2], [1]], [[1], [1]], [[3], [3, 1]], [[1], [1]]],
    helpRefs: [[1], [3], [3, 1], [1], [1]],
  },
  "urgent": {
    sectionRefs: [[[1]], [[1], [1]], [[1], [1]], [[2], [3]], [[2]]],
    helpRefs: [[1], [1], [1], [2], [4]],
    stats: {
      1: [{ value: "48 hours", label: "of antibiotics without getting better is when to ask for an urgent GP appointment or get help from NHS 111, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  "daily-life": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[1], [1]], [[1, 2], [1]], [[1], [1, 3]]],
    helpRefs: [[1], [1], [1], [1], [1]],
    stats: {
      1: [{ value: "Every 30 minutes", label: "is how often to try standing or walking around if you sit for long periods, suggests Prostate Cancer UK.", ref: 1, picture: "hours" }],
      3: [{ value: "6 to 8 glasses", label: "of water a day is what Prostate Cancer UK suggests drinking.", ref: 1 }],
    },
  },
  "sex": {
    sectionRefs: [[[1], [1]], [[2], [2, 3], [3]], [[2], [4]], [[3], [5, 3]]],
    helpRefs: [[2], [1], [3], [3], [3]],
  },
  "mood": {
    sectionRefs: [[[1], [1]], [[1], [2]], [[1], [3, 4]], [[1], [2, 6]], [[5], [5]]],
    helpRefs: [[1], [4], [1], [2], [5]],
    stats: {
      2: [{ value: "5 to 15 sessions", label: "of CBT is what you will usually have, says the NHS.", ref: 3, picture: "calendar" }],
    },
  },
  "coming-back": {
    sectionRefs: [[[1], [2]], [[2], [1, 2]], [[2], [2]], [[2], [2]], [[1, 4, 3]]],
    helpRefs: [[2], [2], [2], [2], [4]],
  },
};
