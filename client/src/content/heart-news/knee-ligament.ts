import type { NewsExtras } from "../ischaemic-news";
// Knee ligament injury features: paragraph references (numbers are positions in each answer's own sources in knee-ligament-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[2], [3]], [[4], [2], [3]], [[5], [2, 3]]],
    helpRefs: [[5], [5], [1], [1]],
    stats: {
      0: [{ value: "4 main ligaments", label: "hold the bones of the knee together and keep it in place, says Arthritis UK.", ref: 1 }],
      4: [{ value: "2 weeks", label: "after a sprain or strain, most will feel better, says the NHS. Severe ones can take months.", ref: 5, picture: "calendar" }],
    },
  },
  "symptoms": {
    sectionRefs: [[[2], [2]], [[1], [3, 5]], [[1], [6]], [[4], [2]]],
    helpRefs: [[1], [1], [3], [3], [2]],
    charts: {
      3: { kind: "bars", title: "How long a knee injury takes", subtitle: "Weeks to recover after a knee injury, according to South Tees Hospitals", bars: [{ label: "Most injuries, up to", value: 3, strong: true }, { label: "Sometimes, to be completely comfortable", value: 6 }], max: 6, ticks: [0, 2, 4, 6], unit: " weeks", sources: "Source: South Tees Hospitals NHS Foundation Trust, Knee injury" },
    },
  },
  "diagnosis": {
    sectionRefs: [[[1], [2]], [[3], [7]], [[4], [4], [4]], [[4], [4]], [[5], [6]]],
    helpRefs: [[4], [4], [4], [8], [4]],
    stats: {
      1: [{ value: "4 to 6 weeks", label: "of physiotherapy without improvement may lead to a referral for an MRI scan or surgery, says South Tees Hospitals.", ref: 3, picture: "calendar" }],
      2: [{ value: "15 minutes to 1 hour", label: "is how long an MRI scan usually takes, says the NHS, though it can take longer.", ref: 4, picture: "hours" }],
      3: [{ value: "1 to 2 weeks", label: "is how long MRI scan results usually take, says the NHS.", ref: 4, picture: "calendar" }],
    },
  },
  "urgent": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[2], [2]], [[3], [3], [4]], [[5]]],
    helpRefs: [[1], [2], [1, 2], [1, 2], [3]],
    stats: {
      3: [{ value: "Within 7 days", label: "of new significant trauma to the knee, such as a fall from height, NHS inform says to phone 111.", ref: 4, picture: "calendar" }],
    },
  },
  "first-days": {
    sectionRefs: [[[1], [1]], [[2], [1]], [[3, 4], [5, 1], [5]], [[1], [6]], [[2], [2]]],
    helpRefs: [[1], [1, 4], [2], [3, 4], [6]],
    stats: {
      0: [{ value: "Up to 20 minutes", label: "at a time, every 2 to 3 hours, for a wrapped ice pack, says the NHS.", ref: 1, picture: "hours" }],
      1: [{ value: "48 to 72 hours", label: "of PRICE, with no heat, alcohol, running or massage, says South Tees Hospitals.", ref: 2, picture: "hours" }],
    },
  },
  "physio": {
    sectionRefs: [[[1], [8, 1]], [[2], [2], [3]], [[4], [6, 5]], [[7], [7], [7]], [[1], [6]]],
    helpRefs: [[1], [1], [1], [7], [2]],
    charts: {
      3: { kind: "bars", title: "Rating pain during exercise", subtitle: "NHS inform's pain scale for knee exercises, out of 10", bars: [{ label: "Minimal pain, up to", value: 3 }, { label: "Acceptable pain, up to", value: 5, strong: true }, { label: "Excessive pain, up to", value: 10 }], max: 10, ticks: [0, 2, 4, 6, 8, 10], unit: " out of 10", sources: "Source: NHS inform, Exercises for knee problems" },
    },
  },
  "surgery": {
    sectionRefs: [[[1, 2], [2]], [[1], [6]], [[3], [3]], [[3], [3]], [[5], [5]]],
    helpRefs: [[7], [4], [4], [4], [4], [4]],
    stats: {
      2: [{ value: "1 to 3 hours", label: "is how long ACL surgery normally takes, and you can usually leave hospital the same day, says the NHS.", ref: 3, picture: "hours" }],
    },
  },
  "after-surgery": {
    sectionRefs: [[[1], [1]], [[1], [3]], [[1], [1]], [[1], [1]], [[2], [2, 4]]],
    helpRefs: [[1], [1], [1], [1], [2], [2, 4]],
    stats: {
      0: [{ value: "Up to a year", label: "to play sport again after ACL surgery, says the NHS. Most activities come back within a few months.", ref: 1, picture: "calendar" }],
      1: [{ value: "2 to 3 weeks", label: "after the operation is when the follow-up appointment usually is, says the NHS.", ref: 1, picture: "calendar" }],
      2: [{ value: "15 to 20 minutes", label: "with a wrapped ice pack, every 2 to 3 hours, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  "return-to-sport": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[4], [5]], [[3], [3]], [[3], [3]]],
    helpRefs: [[2], [4], [3], [3], [3]],
    charts: {
      0: { kind: "bars", title: "How long until sport", subtitle: "Months after ACL surgery before playing sport again", bars: [{ label: "Earliest return, one NHS hospital leaflet", value: 6 }, { label: "Can take up to, says the NHS", value: 12, strong: true }], max: 12, ticks: [0, 3, 6, 9, 12], unit: " months", sources: "Source: NHS, Recovering from ACL surgery; Wrightington, Wigan and Leigh NHS, ACL reconstruction surgery leaflet" },
    },
    stats: {
      2: [{ value: "Up to 8 weeks", label: "without strenuous exercise such as running after a sprain, says the NHS.", ref: 4, picture: "calendar" }],
      3: [{ value: "10 to 15 minutes", label: "is how long a warm-up should take, says NHS inform.", ref: 3, picture: "hours" }],
    },
  },
  "daily-life": {
    sectionRefs: [[[3, 4], [1]], [[5], [1]], [[1], [2]], [[1], [2]], [[4, 6], [7]]],
    helpRefs: [[3, 4], [1], [5], [2], [7]],
    charts: {
      3: { kind: "bars", title: "Time off work after ACL surgery", subtitle: "Weeks off work, by type of job", bars: [{ label: "Desk job, about 2 to", value: 3 }, { label: "Usual return, says the NHS, 4 to", value: 6, strong: true }, { label: "Heavy manual job, up to", value: 16 }], max: 16, ticks: [0, 4, 8, 12, 16], unit: " weeks", sources: "Source: NHS, Recovering from ACL surgery; Wrightington, Wigan and Leigh NHS, ACL reconstruction surgery leaflet" },
    },
  },
  "confidence": {
    sectionRefs: [[[1, 2], [3]], [[4], [5]], [[3], [6]], [[7], [7, 8]]],
    helpRefs: [[3], [5], [3], [7], [2]],
    stats: {
      3: [{ value: "6 to 12 sessions", label: "is what counselling on the NHS usually consists of, says Arthritis UK.", ref: 7 }],
    },
  },
  "long-term": {
    sectionRefs: [[[1], [2], [3]], [[3, 1], [2]], [[4], [4]], [[1, 5], [2, 6], [3]]],
    helpRefs: [[1, 5], [2], [6], [1], [3]],
    stats: {
      3: [{ value: "2 days a week", label: "at least, for strengthening activities that work the major muscle groups, says the NHS.", ref: 5, picture: "calendar" }],
    },
    charts: {
      3: { kind: "bars", title: "A week of activity", subtitle: "Minutes a week adults should aim for, by how hard the activity is", bars: [{ label: "Vigorous, such as running", value: 75 }, { label: "Moderate, such as brisk walking", value: 150, strong: true }], max: 160, ticks: [0, 40, 80, 120, 160], unit: " minutes", sources: "Source: NHS, Physical activity guidelines for adults aged 19 to 64" },
    },
  },
};
