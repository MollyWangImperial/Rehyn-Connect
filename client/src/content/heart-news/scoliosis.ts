import type { NewsExtras } from "../ischaemic-news";
// Scoliosis features: paragraph references (numbers are positions in each answer's own sources in scoliosis-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[2, 3], [2, 4]], [[1], [1, 3], [1]], [[2], [5]], [[1]]],
    helpRefs: [[1], [2], [2], [1], [5]],
    stats: {
      1: [{ value: "Over 2 million", label: "people in the UK have scoliosis, says Scoliosis Support & Research.", ref: 4 }],
    },
    charts: {
      2: { kind: "waffle", title: "Why scoliosis happens", subtitle: "Out of every 100 cases, according to the NHS", groups: [{ label: "Cause unknown (idiopathic)", count: 80, tone: "green" }, { label: "A known cause, such as birth, a nerve or muscle condition, or age", count: 20, tone: "clay" }], sources: "Source: NHS, Scoliosis" },
    },
  },
  "signs": {
    sectionRefs: [[[1], [1]], [[3], [3]], [[2], [2, 6]], [[5], [2]], [[1], [4]]],
    helpRefs: [[1], [3], [3], [4], [4]],
    charts: {
      3: { kind: "range", title: "When scoliosis most often starts", subtitle: "The ages at which scoliosis most often starts, according to the NHS", from: 10, to: 15, unit: "years of age", sources: "Source: NHS, Scoliosis" },
    },
  },
  "adults": {
    sectionRefs: [[[2], [2]], [[3], [3]], [[1, 3], [3]], [[3], [2]], [[1, 2], [1, 3]]],
    helpRefs: [[2], [3], [3], [4], [5]],
    stats: {
      0: [{ value: "After 50", label: "is when adult degenerative scoliosis is typically diagnosed, says Scoliosis Support & Research.", ref: 2, picture: "calendar" }],
      3: [{ value: "About 30%", label: "of people older than 70 have an abnormality in the shape of their spine, says a consultant writing for Scoliosis Support & Research.", ref: 3 }],
    },
  },
  "diagnosis": {
    sectionRefs: [[[1], [5]], [[2], [7, 2]], [[5], [4]], [[5], [5]], [[6], [6]]],
    helpRefs: [[2], [2], [3], [6], [6], [3]],
    stats: {
      1: [{ value: "Around 30", label: "scoliosis centres across the UK, says Scoliosis Support & Research.", ref: 3 }],
    },
  },
  "monitoring": {
    sectionRefs: [[[1], [6]], [[2], [3]], [[1], [4]], [[5], [6]]],
    helpRefs: [[6], [1], [6], [6], [3]],
    stats: {
      1: [{ value: "Every 6 to 12 months", label: "is how often a growing child's curve will likely be assessed, says Scoliosis Support & Research.", ref: 3, picture: "calendar" }],
      2: [{ value: "1 degree a year", label: "is the average increase for adult curves of 50 degrees or more, says Scoliosis Support & Research. Curves under 30 degrees rarely get bigger.", ref: 4 }],
    },
  },
  "brace": {
    sectionRefs: [[[1], [4]], [[2], [3]], [[2], [6, 5]], [[2, 3], [3]], [[3], [3]]],
    helpRefs: [[1], [4], [3], [3], [3]],
    stats: {
      2: [{ value: "23 hours a day", label: "is how long a child's brace usually needs to be worn, says the NHS.", ref: 2, picture: "hours" }],
    },
    charts: {
      1: { kind: "range", title: "Curves most likely to benefit", subtitle: "Curve sizes during a growth spurt most likely to benefit from a brace", from: 20, to: 40, unit: "degrees", sources: "Source: Scoliosis Support & Research, Scoliosis back bracing" },
      3: { kind: "bars", title: "Brace or no brace", subtitle: "Young people in one study who controlled their curve without needing surgery, out of every 100", bars: [{ label: "Did not wear a brace", value: 53 }, { label: "Wore a brace", value: 72, strong: true }], sources: "Source: Scoliosis Support & Research, Scoliosis back bracing" },
    },
  },
  "surgery": {
    sectionRefs: [[[1], [2]], [[1, 5], [2]], [[1], [1, 3]], [[2], [4]], [[1, 2], [5]]],
    helpRefs: [[2], [2], [4], [3], [5], [4]],
    stats: {
      3: [{ value: "Over 10 days", label: "is the usual hospital stay after fusion surgery for adult scoliosis, says Scoliosis Support & Research.", ref: 2, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "Would have it again", subtitle: "Patients who would have large scoliosis correction surgery again, a year on, out of every 100", from: 80, to: 90, sources: "Source: Scoliosis Support & Research, Coping with an ageing spine" },
      4: { kind: "bars", title: "The road back", subtitle: "Rough timings after fusion surgery for adult scoliosis, in months", bars: [{ label: "Work and light exercise, around", value: 3 }, { label: "Normal activity, around", value: 6 }, { label: "Full recovery, up to", value: 18, strong: true }], max: 20, ticks: [0, 5, 10, 15, 20], unit: " months", sources: "Source: Scoliosis Support & Research, Scoliosis surgery for adults" },
    },
  },
  "pain": {
    sectionRefs: [[[2], [2]], [[1], [1]], [[1], [2], [6]], [[3], [2], [5]], [[4, 7], [4]]],
    helpRefs: [[1], [1], [3], [4], [2], [4]],
    stats: {
      2: [{ value: "6 to 9 months", label: "is how long radiofrequency denervation usually lasts, though it can be difficult to use on a curved spine, says Scoliosis Support & Research.", ref: 2, picture: "calendar" }],
      3: [{ value: "15 to 20 minutes", label: "is how long to apply heat or cold to the painful area, says Scoliosis Support & Research.", ref: 3, picture: "hours" }],
    },
  },
  "exercise": {
    sectionRefs: [[[1], [2]], [[2], [5, 6]], [[2], [3], [3]], [[2], [4], [3]], [[5, 6]]],
    helpRefs: [[2], [2], [3], [4], [7]],
    stats: {
      2: [{ value: "2 days a week", label: "at least, for strengthening activities, says the NHS.", ref: 5, picture: "calendar" }],
    },
    charts: {
      4: { kind: "bars", title: "A week of activity", subtitle: "Minutes a week adults should aim for, by how hard the activity is", bars: [{ label: "Vigorous, such as swimming", value: 75 }, { label: "Moderate, such as brisk walking", value: 150, strong: true }], max: 160, ticks: [0, 40, 80, 120, 160], unit: " minutes", sources: "Source: NHS, Physical activity guidelines for adults aged 19 to 64" },
    },
  },
  "body-image": {
    sectionRefs: [[[1], [6]], [[1], [4]], [[3], [5]], [[7], [2]]],
    helpRefs: [[1], [2], [5], [5], [7]],
    stats: {
      2: [{ value: "18 or over", label: "is the age to refer yourself to NHS talking therapies, or 16 or over in some areas, says the NHS.", ref: 5 }],
    },
  },
  "pregnancy": {
    sectionRefs: [[[1], [1]], [[1], [2, 1]], [[1], [1]], [[1], [1]], [[2], [2]]],
    helpRefs: [[1], [1], [1], [2], [2], [3]],
    stats: {
      1: [{ value: "About 40%", label: "of mothers develop low back pain during pregnancy, usually gone by 3 months after birth, says Scoliosis Support & Research.", ref: 1 }],
      2: [{ value: "Around 20 weeks", label: "is when the anomaly scan checks the development of the baby's spine, says Scoliosis Support & Research.", ref: 1, picture: "calendar" }],
    },
  },
  "support": {
    sectionRefs: [[[6], [7]], [[1], [1]], [[5], [8]], [[2, 9], [3, 4]], [[8]]],
    helpRefs: [[1], [5], [2], [1], [8]],
    stats: {
      0: [{ value: "Since 1981", label: "when Scoliosis Association UK, now Scoliosis Support & Research, began as a self-help group.", ref: 6, picture: "calendar" }],
      3: [
        { value: "Over 5,000", label: "members in the charity's Facebook support group, says Scoliosis Support & Research.", ref: 9 },
        { value: "Up to 100", label: "people at each of the charity's patient events around the UK, says Scoliosis Support & Research.", ref: 4 },
      ],
    },
  },
};
