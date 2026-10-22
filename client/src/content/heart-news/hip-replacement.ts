import type { NewsExtras } from "../ischaemic-news";
// Hip replacement features: paragraph references (numbers are positions in each answer's own sources in hip-replacement-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[4], [4, 2]], [[3, 4], [4]], [[3], [3]], [[2, 4], [4, 1]]],
    helpRefs: [[4], [4], [4]],
    stats: {
      3: [{ value: "At least 15 years", label: "is how long a hip replacement can last, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "deciding": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[3], [3]], [[4], [3]], [[5]]],
    helpRefs: [[2], [3], [4], [2], [2]],
  },
  "preparing": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[1], [3]], [[1], [1, 3]]],
    helpRefs: [[1, 3], [3], [3], [3], [1], [4]],
    stats: {
      2: [{ value: "2 to 3 weeks", label: "before surgery is when most hospitals hold the pre-admission clinic, says Arthritis UK.", ref: 3, picture: "calendar" }],
      3: [{ value: "At least 6 weeks", label: "after the operation you will be unable to drive, so arrange transport, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "hospital": {
    sectionRefs: [[[1, 2], [2, 1]], [[1, 2], [1]], [[1], [1]], [[3, 2], [3, 2, 4]], [[3], [3, 2]]],
    helpRefs: [[2], [5], [5], [3], [2]],
    stats: {
      2: [{ value: "About 1 to 2 hours", label: "is how long a hip replacement operation usually takes, says the NHS.", ref: 1, picture: "hours" }],
      4: [{ value: "Around 1 to 3 days", label: "after the operation is when you can usually go home, if you are generally fit and the surgery went well, says the NHS.", ref: 3, picture: "calendar" }],
    },
  },
  "exercises": {
    sectionRefs: [[[1, 2], [2, 3]], [[2], [2]], [[2], [2]], [[2, 4], [2, 4]], [[2], [1]]],
    helpRefs: [[1], [2], [2], [2], [1]],
    stats: {
      2: [{ value: "10 times", label: "for each lying-down exercise, three or four times a day, says Arthritis UK.", ref: 2 }],
    },
  },
  "walking": {
    sectionRefs: [[[1], [1, 2]], [[3, 2], [2]], [[2], [1]], [[4], [4]]],
    helpRefs: [[3], [2], [3], [4], [4]],
    stats: {
      1: [{ value: "5 to 10 minutes", label: "at a time, several times a day, is how far you might walk four to five days after the operation, says the Royal College of Surgeons.", ref: 2, picture: "hours" }],
    },
  },
  "pain-swelling": {
    sectionRefs: [[[1], [2, 1]], [[3], [2]], [[1], [2]], [[2], [2]], [[4]]],
    helpRefs: [[3], [1], [2], [2], [2]],
    stats: {
      0: [{ value: "Within 2 weeks", label: "pain from the surgery itself should start to ease, says Arthritis UK.", ref: 1, picture: "calendar" }],
    },
  },
  "warning-signs": {
    sectionRefs: [[[1], [1]], [[1], [2, 5]], [[1], [3]], [[1, 3], [3, 4]], [[1]]],
    helpRefs: [[1], [1], [2, 5], [1, 3], [3]],
    stats: {
      2: [{ value: "4 to 5 weeks", label: "after going home is how long blood clot tablets are taken, if your surgeon prescribes them, says Arthritis UK.", ref: 3, picture: "calendar" }],
      3: [{ value: "About 1 in 100", label: "cases is how often a deep infection can occur, says Arthritis UK.", ref: 3, picture: "one-in", of: 100 }],
    },
  },
  "daily-life": {
    sectionRefs: [[[1], [2]], [[1], [2]], [[3, 4], [5]], [[2], [1, 6]], [[3]]],
    helpRefs: [[1], [1], [4, 2], [3], [5]],
    stats: {
      0: [{ value: "90 degrees", label: "(a right angle) is the most you should bend your new hip at first, says the NHS.", ref: 1 }],
      2: [{ value: "48 hours", label: "after surgery you can usually have a shower, unless advised not to, says the NHS.", ref: 5, picture: "hours" }],
    },
  },
  "driving-work": {
    sectionRefs: [[[1, 2], [3]], [[3, 2], [4]], [[2], [3]], [[1], [2]], [[5, 3], [7, 6]]],
    helpRefs: [[1], [3, 2], [3], [5], [3]],
    stats: {
      1: [{ value: "3 months", label: "after an operation, if you are still unable to drive, is when to tell DVLA, says GOV.UK.", ref: 4, picture: "calendar" }],
      3: [{ value: "About 6 weeks", label: "is how long returning to work usually takes, depending on the type of work you do, says the NHS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "Back in the car", subtitle: "Weeks after a hip replacement, by what the sources advise", bars: [{ label: "Avoid being a passenger, except essential trips (RCS)", value: 3 }, { label: "Wait at least this long to drive (NHS)", value: 6, strong: true }], max: 8, ticks: [0, 2, 4, 6, 8], unit: " weeks", sources: "Source: Royal College of Surgeons, Get Well Soon; NHS, Recovering from a hip replacement" },
    },
  },
  "activity": {
    sectionRefs: [[[1], [2]], [[1], [2]], [[1], [1, 3]], [[4], [4]], [[3, 1]]],
    helpRefs: [[1], [3], [1], [4], [4]],
    stats: {
      1: [{ value: "About 3 months", label: "after the operation, dancing, golf or bowls should be fine, says Arthritis UK.", ref: 1, picture: "calendar" }],
    },
    charts: {
      3: { kind: "bars", title: "A week of activity at 65 and over", subtitle: "Minutes a week to aim for, by how hard the activity is", bars: [{ label: "Vigorous, such as swimming", value: 75 }, { label: "Moderate, such as walking for health", value: 150, strong: true }], max: 160, ticks: [0, 40, 80, 120, 160], unit: " minutes", sources: "Source: NHS, Physical activity guidelines for older adults" },
    },
  },
  "long-term": {
    sectionRefs: [[[1, 2], [2]], [[2, 1], [2]], [[1], [1]], [[1, 2], [2]], [[3, 4], [5]]],
    helpRefs: [[1], [1], [2, 1], [2], [2]],
    stats: {
      0: [{ value: "At least 15 years", label: "is how long modern hip replacement joints are designed to last, says the NHS.", ref: 1, picture: "calendar" }],
      1: [{ value: "10 to 15 years", label: "after surgery is when loosening, the most common reason a new hip fails, is most common, says Arthritis UK.", ref: 2, picture: "calendar" }],
    },
  },
};
