import type { NewsExtras } from "../ischaemic-news";
// Bladder cancer features: paragraph references (numbers are positions in each answer's own sources in bladder-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-you-had": {
    sectionRefs: [[[1, 2], [1]], [[3, 4, 7], [3, 4], [4]], [[4], [2, 4]], [[2], [5, 1, 2]], [[6], [6]]],
    helpRefs: [[1], [1], [3, 4], [4], [6]],
    stats: {
      1: [{ value: "2 to 3 weeks", label: "is how long the results of a TURBT usually take, says Macmillan.", ref: 3, picture: "calendar" }],
      2: [{ value: "Within 6 hours", label: "of a TURBT, you usually have a single dose of chemotherapy into the bladder, says Cancer Research UK.", ref: 4, picture: "hours" }],
    },
    charts: {
      1: { kind: "range", title: "A short operation", subtitle: "Minutes a TURBT takes, depending on the size and number of tumours", from: 15, to: 90, unit: "minutes", sources: "Source: Macmillan Cancer Support and Cancer Research UK, TURBT" },
    },
  },
  "types": {
    sectionRefs: [[[1], [1]], [[1, 2], [2, 3]], [[3], [3]], [[2, 4], [1, 4]], [[5], [2, 5], [5]]],
    helpRefs: [[2, 3], [5], [2]],
    stats: {
      0: [{ value: "Over 10,000", label: "people are diagnosed with bladder cancer in the UK each year, says Macmillan.", ref: 1 }],
      2: [{ value: "3 risk groups", label: "low, intermediate and high, are used for non-muscle-invasive bladder cancer, says Cancer Research UK.", ref: 3 }],
    },
  },
  "follow-up": {
    sectionRefs: [[[1, 2], [3]], [[4], [4], [2]], [[2, 1], [2], [2]], [[2, 1], [1]], [[2, 3], [2, 3]]],
    helpRefs: [[2, 3], [2], [4], [4], [4], [2, 3]],
    stats: {
      1: [{ value: "A few minutes", label: "is how long a flexible cystoscopy takes, says Macmillan.", ref: 4, picture: "hours" }],
      3: [{ value: "At least 5 years", label: "of regular cystoscopies follow radiotherapy for bladder cancer, says Macmillan.", ref: 1, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "Moderate risk: checks spread out", subtitle: "Months after treatment when you may have a cystoscopy, before checks once a year", bars: [{ label: "First check", value: 3 }, { label: "Second check", value: 9 }, { label: "Third check", value: 18, strong: true }], max: 18, ticks: [0, 6, 12, 18], unit: " months", sources: "Source: Cancer Research UK, Follow up after non muscle invasive bladder cancer treatment" },
    },
  },
  "bcg": {
    sectionRefs: [[[1, 2], [3, 4]], [[1], [2, 1], [4, 3]], [[1, 3], [1, 3, 2]], [[1, 2], [1, 4, 3], [1, 3]], [[1], [2, 1], [2]]],
    helpRefs: [[1, 3], [1, 2], [1, 4], [2], [1, 2], [4]],
    stats: {
      1: [{ value: "6 weeks", label: "of BCG once a week is the usual first course, called the induction course, says Cancer Research UK.", ref: 2, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "Holding the medicine in", subtitle: "Hours you are asked not to pass urine after each treatment goes into the bladder", bars: [{ label: "BCG", value: 2, strong: true }, { label: "Chemotherapy into the bladder (about)", value: 1 }], max: 2, ticks: [0, 1, 2], unit: " hours", sources: "Source: Macmillan Cancer Support, BCG treatment and Intravesical chemotherapy for bladder cancer" },
    },
  },
  "cystectomy": {
    sectionRefs: [[[1, 2], [1]], [[1, 2], [2, 1], [1, 2]], [[3, 1], [3], [1, 2]], [[3], [1, 4], [4, 1]], [[4, 1], [4]]],
    helpRefs: [[1], [3, 4], [3], [4], [4], [3]],
    stats: {
      3: [{ value: "A couple of weeks", label: "after surgery is when your first follow-up appointment usually is, says Cancer Research UK.", ref: 3, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "Time in hospital", subtitle: "Days in hospital after a cystectomy, depending on the operation and your recovery", from: 5, to: 14, unit: "days", sources: "Source: Macmillan Cancer Support, Cystectomy (removing the bladder)" },
    },
  },
  "urostomy": {
    sectionRefs: [[[3, 1], [3, 1]], [[1], [2], [1, 4]], [[1, 2], [1, 2], [2, 3]], [[3, 1], [3], [3]], [[1, 2], [1, 4], [5, 4]]],
    helpRefs: [[1, 2], [1], [1, 4], [3], [1, 2], [1, 4]],
    stats: {
      0: [{ value: "Within a few weeks", label: "a new stoma shrinks to its final size after the swelling of surgery, says Macmillan.", ref: 1, picture: "calendar" }],
      4: [{ value: "Over 9,000", label: "locked disabled toilets in the UK can be opened with a National Key Scheme key, says Macmillan.", ref: 5 }],
    },
  },
  "new-bladder": {
    sectionRefs: [[[1, 3], [3], [1]], [[1, 3], [1, 3]], [[2, 1], [1, 2], [2, 1]], [[2], [2, 4]], [[1, 3], [1, 2]]],
    helpRefs: [[1], [2], [1, 2], [2, 4], [1], [1]],
    stats: {
      2: [{ value: "About a pint", label: "is what a new bladder should be able to hold after about 3 to 6 months, says Cancer Research UK.", ref: 2 }],
    },
    charts: {
      2: { kind: "range", title: "Longer gaps with time", subtitle: "Hours between emptying a new bladder once it has stretched, up from every 2 to 3 hours at first", from: 4, to: 6, unit: "hours", sources: "Source: Macmillan Cancer Support, Bladder reconstruction (neobladder)" },
    },
  },
  "fatigue": {
    sectionRefs: [[[1], [5, 1]], [[2, 3], [4, 1]], [[1], [2]], [[1], [1], [1]], [[1, 3], [1]]],
    helpRefs: [[1], [1, 3], [2], [1], [1], [1, 3]],
    stats: {
      3: [{ value: "0 to 10", label: "is the scale you might use to score your fatigue, where 10 is the worst possible fatigue, says Macmillan.", ref: 1 }],
    },
    charts: {
      1: { kind: "range", title: "Short-lived after BCG", subtitle: "Hours within which flu-like symptoms after BCG should get better", from: 48, to: 72, unit: "hours", sources: "Source: Macmillan Cancer Support, BCG treatment for bladder cancer" },
    },
  },
  "smoking": {
    sectionRefs: [[[1, 5], [1]], [[2], [2, 6], [2]], [[4], [4]], [[2], [3], [3]], [[3], [2, 3]]],
    helpRefs: [[2], [3], [3], [2, 3], [4], [2]],
    stats: {
      0: [{ value: "Around half", label: "of all bladder cancers in the UK are caused by smoking, says Cancer Research UK.", ref: 1, picture: "half" }],
      3: [
        { value: "4 times", label: "more likely to quit, with a stop smoking service and products such as nicotine replacement therapy, says Macmillan.", ref: 2, picture: "times" },
        { value: "Up to 12 weeks", label: "is how long NHS stop smoking services usually offer support, says the NHS.", ref: 3, picture: "calendar" },
      ],
    },
  },
  "relationships": {
    sectionRefs: [[[1, 2], [1, 2]], [[1], [2, 1]], [[1], [1]], [[1, 5], [3], [4]], [[4], [4, 1]]],
    helpRefs: [[1, 2], [1], [2, 1], [3], [1], [1, 4]],
  },
  "work": {
    sectionRefs: [[[1], [7, 8]], [[2], [2, 3]], [[3], [4]], [[5], [5], [5]], [[6], [6]]],
    helpRefs: [[1, 7, 8], [3], [4], [5], [5], [6]],
    stats: {
      0: [{ value: "2 to 3 weeks", label: "is how long you may need to avoid lifting or carrying anything heavy after a TURBT, says Macmillan.", ref: 7, picture: "calendar" }],
      3: [{ value: "About twice", label: "your normal stoma supplies is what to pack for a trip, says Macmillan.", ref: 5, picture: "times" }],
    },
  },
  "mood": {
    sectionRefs: [[[3], [1, 2]], [[1], [1]], [[4, 5], [5]], [[5], [2, 4, 3]], [[6, 7], [6]]],
    helpRefs: [[1], [1], [2], [4], [7], [6]],
    stats: {
      4: [{ value: "116 123", label: "is the free Samaritans number, to call any time, day or night.", ref: 7 }],
    },
  },
};
