import type { NewsExtras } from "../ischaemic-news";
// Torn meniscus features: paragraph references (numbers are positions in each answer's own sources in meniscus-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [1, 3]], [[1, 5], [3, 4]], [[1], [1, 2]], [[3, 2], [4]]],
    helpRefs: [[2], [2], [3], [1]],
    stats: {
      0: [{ value: "Two", label: "wedge-shaped pieces of cartilage, the menisci, act as shock absorbers in each knee, says Arthritis UK.", ref: 1 }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [1]], [[2], [2, 3]], [[1, 2], [3, 7]], [[4, 6], [5]], [[6, 3]]],
    helpRefs: [[1], [1], [1], [5], [1]],
    stats: {
      0: [{ value: "Over 30 minutes", label: "of stiffness after waking up is a reason to see a GP, says the NHS.", ref: 1, picture: "hours" }],
      2: [{ value: "A few hours or days", label: "may pass before the swelling from a meniscus tear starts, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  "causes": {
    sectionRefs: [[[1], [3]], [[2], [2, 3]], [[4], [4]], [[5], [6, 7]]],
    helpRefs: [[4], [4], [6], [6]],
    stats: {
      1: [{ value: "Under 50", label: "is when acute tears from injury tend to happen. Degenerative tears tend to be in people over 50, says NHS inform.", ref: 2 }],
    },
    charts: {
      2: { kind: "range", title: "When sporting tears are most common", subtitle: "The ages at which traumatic meniscal tears happen more often", from: 15, to: 40, unit: "years of age", sources: "Source: University Hospitals Plymouth NHS Trust, Traumatic meniscal tears" },
    },
  },
  "diagnosis": {
    sectionRefs: [[[1], [2]], [[4, 6], [3]], [[2], [1, 4]], [[3], [3]], [[5], [5]]],
    helpRefs: [[7], [5], [5], [5], [5]],
    stats: {
      4: [
        { value: "15 minutes to 1 hour", label: "is how long an MRI scan usually takes, says the NHS.", ref: 5, picture: "hours" },
        { value: "1 to 2 weeks", label: "is how long it usually takes to get MRI scan results, says the NHS.", ref: 5, picture: "calendar" },
      ],
    },
  },
  "self-care": {
    sectionRefs: [[[1], [1, 3]], [[1, 2], [1, 3]], [[1], [1]], [[1, 6], [4]], [[3, 5], [3, 7]]],
    helpRefs: [[1], [1], [1], [1], [4], [1]],
    stats: {
      1: [{ value: "Up to 20 minutes", label: "every 2 to 3 hours is how long to use a wrapped ice pack on the knee, says the NHS.", ref: 1, picture: "hours" }],
      3: [{ value: "48 hours", label: "after an injury is the earliest NHS inform says to consider anti-inflammatory medicines such as ibuprofen.", ref: 4, picture: "hours" }],
    },
  },
  "exercises": {
    sectionRefs: [[[1], [4]], [[2], [7, 6]], [[1], [1]], [[5], [2]], [[1], [1]]],
    helpRefs: [[2, 3], [1], [1], [1], [1]],
    stats: {
      4: [{ value: "2 sets of 15", label: "is the most to aim for, building up from 2 to 3 repetitions at a time, says NHS inform.", ref: 1 }],
    },
    charts: {
      4: { kind: "bars", title: "How much pain is acceptable", subtitle: "NHS inform's pain scale for exercise: the top of each band, out of 10", bars: [{ label: "Minimal pain, up to", value: 3 }, { label: "Acceptable pain, up to", value: 5, strong: true }, { label: "Excessive pain, up to", value: 10 }], max: 10, ticks: [0, 2, 4, 6, 8, 10], unit: " out of 10", sources: "Source: NHS inform, Exercises for knee problems" },
    },
  },
  "surgery": {
    sectionRefs: [[[1], [4, 7]], [[2, 5], [1]], [[3], [6, 3]], [[1], [1]], [[8], [9]]],
    helpRefs: [[1], [9], [1], [3], [3]],
    stats: {
      2: [
        { value: "2mm to 3mm", label: "is the usual width of each small cut made for an arthroscopy, says the NHS.", ref: 3 },
        { value: "30 minutes to 3 hours", label: "is how long an arthroscopy can take, depending on the type, says the NHS.", ref: 3, picture: "hours" },
      ],
    },
  },
  "after-surgery": {
    sectionRefs: [[[1, 2], [1]], [[1], [2]], [[1], [1]], [[1], [2, 1]], [[2], [2, 1]]],
    helpRefs: [[1], [1], [2], [1], [1], [2]],
    stats: {
      1: [{ value: "48 hours", label: "is how long to keep the scars covered before leaving them uncovered, says the Royal College of Surgeons.", ref: 1, picture: "hours" }],
    },
    charts: {
      3: { kind: "bars", title: "Back to work after keyhole surgery", subtitle: "Days off work after the operation, as the Royal College of Surgeons describes them", bars: [{ label: "Office job, possibly within", value: 3 }, { label: "Average, up to", value: 14, strong: true }, { label: "Heavy manual work, up to", value: 42 }], max: 42, ticks: [0, 14, 28, 42], unit: " days", sources: "Source: Royal College of Surgeons of England, Get Well Soon: arthroscopic operations on the knee for meniscal tears" },
    },
  },
  "activity": {
    sectionRefs: [[[2], [5]], [[1], [4]], [[4], [4]], [[1, 2], [1]], [[3], [2]]],
    helpRefs: [[2], [1], [4], [5], [6]],
    stats: {
      2: [{ value: "10 minutes", label: "of brisk walking a day has lots of health benefits, says the NHS.", ref: 4, picture: "calendar" }],
    },
    charts: {
      4: { kind: "bars", title: "A week of activity", subtitle: "Minutes a week adults should aim for, by how hard the activity is", bars: [{ label: "Vigorous, such as running", value: 75 }, { label: "Moderate, such as riding a bike", value: 150, strong: true }], max: 160, ticks: [0, 40, 80, 120, 160], unit: " minutes", sources: "Source: NHS, Physical activity guidelines for adults aged 19 to 64" },
    },
  },
  "sport": {
    sectionRefs: [[[2], [4, 6]], [[3], [7]], [[1], [1]], [[2], [3]], [[5], [6]]],
    helpRefs: [[2], [2], [5], [5], [6]],
    stats: {
      1: [{ value: "3 to 6 months or more", label: "is how long meniscal healing can often take, says an NHS physiotherapy service in Swansea Bay.", ref: 3, picture: "calendar" }],
      4: [{ value: "10 to 15 minutes", label: "is how long a warm-up should take, says NHS inform.", ref: 5, picture: "hours" }],
    },
    charts: {
      2: { kind: "bars", title: "Stepping back up after surgery", subtitle: "Weeks after keyhole surgery for a meniscal tear, in the programme many surgeons suggest", bars: [{ label: "Exercise bike", value: 2 }, { label: "Cross trainer", value: 4 }, { label: "Treadmill", value: 6 }, { label: "Back to sport, for most, by", value: 8, strong: true }], max: 8, ticks: [0, 2, 4, 6, 8], unit: " weeks", sources: "Source: Royal College of Surgeons of England, Get Well Soon: arthroscopic operations on the knee for meniscal tears" },
    },
  },
  "locking": {
    sectionRefs: [[[6], [5]], [[1], [4, 3]], [[2], [2]], [[7], [5]]],
    helpRefs: [[1], [3], [2], [2], [2]],
  },
  "long-term": {
    sectionRefs: [[[3], [3]], [[4], [6]], [[2], [1]], [[1], [2]], [[5], [5, 2]]],
    helpRefs: [[3], [2], [5], [1], [1]],
    stats: {
      0: [{ value: "Around 6 weeks", label: "is when the symptoms of a meniscal injury go away on their own for some people, says NHS inform.", ref: 3, picture: "calendar" }],
      3: [{ value: "150 minutes", label: "of moderate activity a week, plus strength exercises on 2 or more days, is what the NHS suggests.", ref: 1, picture: "calendar" }],
      4: [{ value: "Nearly 1 in 4", label: "people with knee pain have symptoms linked to weight issues, says Arthritis UK.", ref: 2, picture: "one-in-four" }],
    },
  },
};
