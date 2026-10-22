import type { NewsExtras } from "../ischaemic-news";
// Knee replacement features: paragraph references (numbers are positions in each answer's own sources in knee-replacement-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[3], [4]], [[3, 4], [4]], [[4], [5]], [[2, 1], [1, 4]]],
    helpRefs: [[4], [5, 4], [1], [3]],
    stats: {
      2: [{ value: "About 1 in 40", label: "people with osteoarthritis are suitable for a kneecap replacement, says Arthritis UK.", ref: 4 }],
      4: [{ value: "25 years", label: "is how long knee replacements can last, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "deciding": {
    sectionRefs: [[[1], [3]], [[2], [3, 2]], [[3], [3]], [[3], [3]], [[4], [3]]],
    helpRefs: [[2], [3], [4], [3], [2]],
    stats: {
      2: [{ value: "4 in 5", label: "people who have had knee replacement surgery are happy with their new knees, says Arthritis UK.", ref: 3 }],
      3: [{ value: "About three-quarters", label: "normal is how most people rate their artificial knee joint, says Arthritis UK.", ref: 3 }],
    },
  },
  "preparing": {
    sectionRefs: [[[1, 6], [1]], [[2], [5]], [[2], [3]], [[1, 2], [2, 4]], [[1], [1, 4]]],
    helpRefs: [[1], [2, 5], [2], [2], [1], [4]],
  },
  "hospital": {
    sectionRefs: [[[1, 3], [3]], [[1, 4], [3, 5]], [[1], [1]], [[1, 3], [3]], [[2, 5], [2]]],
    helpRefs: [[3], [4, 5], [3], [2], [3]],
    stats: {
      2: [{ value: "1 to 2 hours", label: "is how long the operation usually takes, says the NHS.", ref: 1, picture: "hours" }],
      4: [
        { value: "Within 24 hours", label: "of surgery, a physiotherapist or occupational therapist should offer rehabilitation, says NICE.", ref: 5, picture: "hours" },
        { value: "1 to 4 days", label: "after the operation is when most people leave hospital, says the NHS.", ref: 2, picture: "calendar" },
      ],
    },
  },
  "exercises": {
    sectionRefs: [[[1, 4], [2]], [[2], [4]], [[2], [2]], [[2, 3], [3]], [[2, 6], [2, 5]]],
    helpRefs: [[2], [1], [2], [3], [3], [1, 2]],
    stats: {
      0: [{ value: "Up to 2 years", label: "is how long a new knee can keep improving after the operation, says Arthritis UK.", ref: 2, picture: "calendar" }],
      1: [{ value: "10 minutes", label: "six to eight times a day is one way to do the exercises regularly, says Arthritis UK.", ref: 2, picture: "hours" }],
    },
  },
  "walking": {
    sectionRefs: [[[1], [2]], [[2, 1], [2]], [[2], [2]], [[2]], [[2], [3]]],
    helpRefs: [[1], [1], [2], [2], [2], [3]],
    charts: {
      1: { kind: "bars", title: "Stepping down the walking aids", subtitle: "Weeks after the operation, as Arthritis UK and the NHS describe them", bars: [{ label: "One crutch, from about", value: 2 }, { label: "Walking outside, within", value: 3 }, { label: "No aid, after about", value: 6, strong: true }], max: 8, ticks: [0, 2, 4, 6, 8], unit: " weeks", sources: "Source: Arthritis UK, Knee replacement surgery; NHS, Recovering from a knee replacement" },
    },
  },
  "pain-swelling": {
    sectionRefs: [[[1], [1]], [[3], [3]], [[1], [2]], [[1], [1]], [[1, 3], [4]]],
    helpRefs: [[2], [1], [1], [3], [2], [1]],
    charts: {
      0: { kind: "range", title: "Pain that lingers", subtitle: "People who still have moderate or severe pain in the long term, of every 100, according to research Arthritis UK cites", from: 10, to: 20, sources: "Source: Arthritis UK, Knee replacement surgery" },
    },
    stats: {
      2: [{ value: "Up to 3 months", label: "is how long swelling, particularly of the ankle and foot, may last, says Arthritis UK.", ref: 1, picture: "calendar" }],
      3: [{ value: "20 minutes", label: "at a time is the most to apply ice, with your skin protected from the pack, says Arthritis UK.", ref: 1, picture: "hours" }],
    },
  },
  "warning-signs": {
    sectionRefs: [[[1], [4, 1]], [[1], [1, 2]], [[1, 4], [4]], [[1], [1]], [[1, 3], [1]]],
    helpRefs: [[5], [4], [1], [1], [1], [4]],
    stats: {
      0: [{ value: "About 1 in 20", label: "people may have complications after a knee joint operation, and most are minor, says Arthritis UK.", ref: 4 }],
      2: [{ value: "About 1 in 50", label: "knee replacement wounds become infected, usually treated with antibiotics, says Arthritis UK.", ref: 4 }],
    },
  },
  "daily-life": {
    sectionRefs: [[[1], [3]], [[1, 2], [1]], [[2], [1]], [[1], [2, 1]], [[4, 1], [3]]],
    helpRefs: [[1], [1, 2], [1], [2], [4], [3]],
    stats: {
      1: [{ value: "3 months", label: "is how long to avoid heavier jobs like vacuuming or changing the beds, says Arthritis UK.", ref: 1, picture: "calendar" }],
      2: [{ value: "6 weeks", label: "is how long not to sit with your legs crossed, says the NHS.", ref: 2, picture: "calendar" }],
    },
  },
  "driving-work": {
    sectionRefs: [[[1], [2]], [[2], [3]], [[1], [2]], [[4], [2]], [[5], [6, 5]]],
    helpRefs: [[1], [2], [4], [2], [6]],
    charts: {
      0: { kind: "bars", title: "Back behind the wheel", subtitle: "The least time to wait before driving after a knee replacement, in weeks", bars: [{ label: "Partial knee replacement", value: 3 }, { label: "Total knee replacement", value: 6, strong: true }], max: 8, ticks: [0, 2, 4, 6, 8], unit: " weeks", sources: "Source: NHS, Recovering from a knee replacement" },
      2: { kind: "bars", title: "Back to work, by kind of job", subtitle: "The upper end of the weeks before returning, as Arthritis UK describes them", bars: [{ label: "Sitting most of the day", value: 8 }, { label: "Standing or manual work", value: 12, strong: true }], max: 12, ticks: [0, 3, 6, 9, 12], unit: " weeks", sources: "Source: Arthritis UK, Knee replacement surgery" },
    },
    stats: {
      4: [{ value: "12 weeks", label: "is how soon you need to be starting or returning to paid work to be eligible for Access to Work, says the government.", ref: 6, picture: "calendar" }],
    },
  },
  "activity": {
    sectionRefs: [[[1], [1]], [[1], [2]], [[1], [3, 4]], [[3], [3, 4]], [[1], [5]]],
    helpRefs: [[1], [1], [1], [3], [1]],
    charts: {
      3: { kind: "bars", title: "A week of activity", subtitle: "Minutes a week adults should aim for, by how hard the activity is", bars: [{ label: "Vigorous, such as running", value: 75 }, { label: "Moderate, such as riding a bike", value: 150, strong: true }], max: 160, ticks: [0, 40, 80, 120, 160], unit: " minutes", sources: "Source: NHS, Physical activity guidelines for older adults and for adults aged 19 to 64" },
    },
    stats: {
      3: [{ value: "2 days a week", label: "at least, for activities that improve strength, balance and flexibility, says the NHS.", ref: 3, picture: "calendar" }],
    },
  },
  "long-term": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[2], [2]], [[3, 2], [4]], [[2, 1], [2, 5]]],
    helpRefs: [[3, 2], [4], [1], [2]],
    charts: {
      0: { kind: "bars", title: "How long a new knee can last", subtitle: "Years most knee replacements last, according to the NHS and Arthritis UK", bars: [{ label: "Arthritis UK: about", value: 20 }, { label: "NHS: about", value: 25, strong: true }], max: 30, ticks: [0, 10, 20, 30], unit: " years", sources: "Source: NHS, Complications of a knee replacement; Arthritis UK, Knee replacement surgery" },
    },
    stats: {
      1: [{ value: "About 1 in 10", label: "people with a partial knee replacement need further surgery after 10 years, says Arthritis UK.", ref: 2 }],
    },
  },
};
