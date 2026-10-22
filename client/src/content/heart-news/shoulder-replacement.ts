import type { NewsExtras } from "../ischaemic-news";
// Shoulder replacement features: paragraph references (numbers are positions in each answer's own sources in shoulder-replacement-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[1, 4], [1]], [[1, 2, 3], [1, 2]], [[1], [2, 1]]],
    helpRefs: [[1, 2], [1], [3], [1]],
  },
  "deciding": {
    sectionRefs: [[[1], [2, 3]], [[1], [1]], [[1, 3], [3]], [[1], [1, 2]], [[1], [4]]],
    helpRefs: [[1], [1], [1], [1], [4]],
    stats: {
      3: [{ value: "10 years", label: "is how long replacement joints are likely to last before they may wear out, says Arthritis UK.", ref: 1, picture: "calendar" }],
    },
  },
  "preparing": {
    sectionRefs: [[[1], [2, 5]], [[2], [1]], [[1], [1, 3]], [[1, 4], [4]], [[1, 3], [4, 3]]],
    helpRefs: [[2], [5], [1], [1], [4], [3]],
    stats: {
      0: [{ value: "6 to 12 weeks", label: "is when the hospital usually contacts you after you join the waiting list, says Arthritis UK.", ref: 1, picture: "calendar" }],
      2: [{ value: "2 to 3 weeks", label: "before surgery is when the pre-admission clinic usually happens, says Arthritis UK.", ref: 1, picture: "calendar" }],
    },
  },
  "hospital": {
    sectionRefs: [[[1, 2], [1]], [[1], [1, 4, 3]], [[1], [1]], [[2], [2]], [[3, 1], [1]]],
    helpRefs: [[2], [3, 4], [2], [2], [1]],
    stats: {
      3: [{ value: "12 to 24 hours", label: "is when the heavy, numb feeling from a nerve block usually wears off, says Worcestershire Acute Hospitals.", ref: 2, picture: "hours" }],
      4: [
        { value: "Within 24 hours", label: "of surgery, a physiotherapist or occupational therapist should offer rehabilitation, says NICE.", ref: 3, picture: "hours" },
        { value: "2 to 3 nights", label: "is the usual stay in hospital after the operation, says Arthritis UK.", ref: 1, picture: "calendar" },
      ],
    },
  },
  "sling": {
    sectionRefs: [[[1, 2], [2, 4]], [[1, 3], [2]], [[2], [2]], [[1], [1, 2]], [[3], [1]]],
    helpRefs: [[2], [2, 4], [2], [1], [3]],
    charts: {
      1: { kind: "bars", title: "How long the sling stays on", subtitle: "Weeks, as two sources describe it; surgeons' own advice differs", bars: [{ label: "At home, about (Cambridge)", value: 3 }, { label: "Up to (Arthritis UK)", value: 4 }, { label: "Outside the home (Cambridge)", value: 6, strong: true }], max: 8, ticks: [0, 2, 4, 6, 8], unit: " weeks", sources: "Source: Arthritis UK, Shoulder and elbow replacement surgery; Cambridge University Hospitals, Advice following total shoulder replacement" },
    },
    stats: {
      3: [{ value: "14 days", label: "after surgery is when clips or stitches are usually removed, says Worcestershire Acute Hospitals.", ref: 2, picture: "calendar" }],
      4: [{ value: "6 weeks", label: "is usually when the pain has eased enough to lift your arm to dress, feed and wash yourself, says Arthritis UK.", ref: 1, picture: "calendar" }],
    },
  },
  "exercises": {
    sectionRefs: [[[1, 2], [3]], [[1, 2], [1, 2]], [[1], [1, 2]], [[1, 6], [1]], [[1, 4], [1]]],
    helpRefs: [[1, 2], [1], [1], [1], [1], [5]],
    stats: {
      2: [{ value: "10 times every hour", label: "is how often the leaflet suggests the fist-and-stretch finger exercise, if your physiotherapist has ticked it.", ref: 1, picture: "hours" }],
      4: [{ value: "12 to 18 months", label: "is how long improvements can continue, depending on the procedure, says Worcestershire Acute Hospitals.", ref: 1, picture: "calendar" }],
    },
  },
  "pain-sleep": {
    sectionRefs: [[[1], [1, 2]], [[2], [3]], [[1, 3], [3]], [[4, 1], [1, 4]], [[1, 3], [5]]],
    helpRefs: [[1], [3], [4], [4], [1]],
    stats: {
      3: [
        { value: "2 weeks", label: "of sleeping on your back after the surgery is what Cambridge University Hospitals advises.", ref: 4, picture: "calendar" },
        { value: "4 weeks", label: "without pushing up on the operated arm to get out of bed, says Worcestershire Acute Hospitals.", ref: 1, picture: "calendar" },
      ],
    },
  },
  "warning-signs": {
    sectionRefs: [[[1], [1, 2]], [[1], [6, 8]], [[3], [3]], [[3, 4], [4, 5], [3]], [[7], [2]]],
    helpRefs: [[6], [3], [3], [3], [8]],
  },
  "daily-life": {
    sectionRefs: [[[1, 2], [1, 3]], [[2], [1, 2]], [[2], [1]], [[1], [2, 1]], [[1, 2], [3]]],
    helpRefs: [[1], [2], [2], [1], [2], [3]],
    stats: {
      3: [{ value: "6 weeks", label: "without heavy lifting, usually nothing heavier than a cup of tea, advises Cambridge University Hospitals.", ref: 1, picture: "calendar" }],
    },
  },
  "driving-work": {
    sectionRefs: [[[1, 2], [3, 2]], [[1], [4]], [[1, 2], [1]], [[3], [7]], [[5], [6, 5]]],
    helpRefs: [[1, 2], [1], [4], [2], [6]],
    stats: {
      0: [{ value: "4 to 6 weeks", label: "is usually how long the shoulder immobiliser is used; do not drive while you still use it, says Worcestershire Acute Hospitals.", ref: 2, picture: "calendar" }],
      2: [{ value: "Up to 3 months", label: "before you can return to work, depending on the type of work you do, says Arthritis UK.", ref: 1, picture: "calendar" }],
      4: [{ value: "12 weeks", label: "is how soon you need to be starting or returning to paid work to be eligible for Access to Work, says the government.", ref: 6, picture: "calendar" }],
    },
  },
  "activity": {
    sectionRefs: [[[3], [2, 6]], [[2, 1], [1]], [[1], [3]], [[4, 5], [5, 4]], [[7], [2]]],
    helpRefs: [[2], [2], [3], [4], [7]],
    charts: {
      3: { kind: "bars", title: "A week of activity", subtitle: "Minutes a week adults should aim for, by how hard the activity is", bars: [{ label: "Vigorous, such as running", value: 75 }, { label: "Moderate, such as riding a bike", value: 150, strong: true }], max: 160, ticks: [0, 40, 80, 120, 160], unit: " minutes", sources: "Source: NHS, Physical activity guidelines for older adults and for adults aged 19 to 64" },
    },
    stats: {
      3: [{ value: "2 days a week", label: "at least, for activities that improve strength, balance and flexibility, says the NHS.", ref: 4, picture: "calendar" }],
    },
  },
  "long-term": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[2, 1], [1]], [[1], [3]], [[2], [1]]],
    helpRefs: [[1], [3], [2], [1]],
    stats: {
      0: [{ value: "10 years", label: "is how long a shoulder replacement has a very good chance of lasting, says Arthritis UK.", ref: 1, picture: "calendar" }],
      4: [{ value: "12 to 18 months", label: "is how long improvements can continue, depending on the procedure, says Worcestershire Acute Hospitals.", ref: 2, picture: "calendar" }],
    },
  },
};
