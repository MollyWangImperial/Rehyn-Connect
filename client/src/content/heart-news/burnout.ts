import type { NewsExtras } from "../ischaemic-news";
// Burnout features: paragraph references (numbers are positions in each answer's own sources in burnout-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[5], [4], [1]], [[2], [1, 4]], [[2], [1]]],
    helpRefs: [[2], [1], [1], [2], [6, 7]],
    charts: {
      3: { kind: "donut", title: "Feeling burnt out", subtitle: "UK workers, out of every 100, according to recent reports", value: 65, subject: "UK workers", label: "feel burnt out", sources: "Source: Mental Health Foundation, Burnout: signs, causes and ways to recover" },
    },
    stats: {
      3: [{ value: "1 in 5", label: "workers have needed time off because of mental health problems linked to stress at work, says the Mental Health Foundation.", ref: 2, picture: "one-in", of: 5 }],
    },
  },
  "signs": {
    sectionRefs: [[[1], [3]], [[1, 2], [1]], [[1], [3]], [[1, 2], [3]], [[1], [6], [4]]],
    helpRefs: [[1], [2], [6], [5], [7, 8]],
    stats: {
      4: [{ value: "A few weeks", label: "of feeling tired without knowing why is a reason to see a GP, says the NHS.", ref: 6, picture: "calendar" }],
    },
  },
  "causes": {
    sectionRefs: [[[1], [2]], [[1], [3]], [[1], [4]], [[2], [2], [2]], [[6], [5]]],
    helpRefs: [[5], [5], [5], [1], [7, 8]],
    charts: {
      3: {
        kind: "bars",
        title: "What adds to the load",
        subtitle: "UK adults, out of every 100, who said each had caused stress that may add to burnout",
        bars: [
          { label: "Poor sleep", value: 59, strong: true },
          { label: "Money worries", value: 48 },
          { label: "Poor physical health", value: 38 },
          { label: "Feeling isolated", value: 36 },
          { label: "Relationship problems", value: 28 },
        ],
        sources: "Source: Mental Health UK, Burnout (YouGov polling for its Burnout Reports)",
      },
    },
  },
  "or-depression": {
    sectionRefs: [[[1], [1, 2]], [[1], [1]], [[2]], [[3], [4], [3]], [[4], [4], [5]]],
    helpRefs: [[4], [3], [5], [1], [6, 7]],
    stats: {
      4: [{ value: "More than 2 weeks", label: "of depression symptoms for most of the day, every day, is the time to see a GP, says the NHS.", ref: 4, picture: "calendar" }],
    },
  },
  "rest": {
    sectionRefs: [[[1], [1]], [[1], [6], [1]], [[3], [2]], [[4], [2], [5]], [[2], [3, 1]]],
    helpRefs: [[3], [1], [4], [2], [3, 1], [7, 8]],
    stats: {
      0: [{ value: "Months to years", label: "is how long recovery from burnout can take, from a couple of months to a couple of years, says Mental Health UK.", ref: 1, picture: "calendar" }],
    },
  },
  "gp": {
    sectionRefs: [[[2], [4], [3]], [[1], [3], [9]], [[5], [5]], [[3], [8]], [[6], [6], [7]]],
    helpRefs: [[2], [3], [5], [6], [8], [10, 11]],
    stats: {
      4: [
        { value: "More than 7 days", label: "off sick in a row, including weekends, is when your employer needs a fit note, says the government.", ref: 6, picture: "calendar" },
        { value: "Up to 28 weeks", label: "is how long your employer pays Statutory Sick Pay if you are too ill to work, says the government.", ref: 7, picture: "calendar" },
      ],
    },
  },
  "therapy": {
    sectionRefs: [[[4], [4]], [[7], [1], [1, 8]], [[2], [2], [5]], [[3], [3]], [[6], [6]]],
    helpRefs: [[1, 7], [1], [8], [2], [6], [9, 10]],
    stats: {
      1: [{ value: "18 or over", label: "is the age to refer yourself to NHS talking therapies, or 16 or over in some areas, says the NHS.", ref: 7 }],
    },
    charts: {
      2: { kind: "range", title: "A course of CBT", subtitle: "Sessions of CBT people usually have, depending on what it is for", from: 5, to: 15, unit: "sessions", sources: "Source: NHS, Cognitive behavioural therapy (CBT)" },
      3: { kind: "range", title: "Counselling on the NHS", subtitle: "Sessions people usually have when they get counselling on the NHS, each lasting 50 to 60 minutes", from: 8, to: 16, unit: "sessions", sources: "Source: NHS, Counselling" },
    },
  },
  "boundaries": {
    sectionRefs: [[[1], [2]], [[1], [3], [3]], [[3], [2], [3]], [[4], [5]], [[2], [5]]],
    helpRefs: [[1], [1], [3], [4], [2], [6, 7]],
    stats: {
      1: [{ value: "At least half an hour", label: "for lunch, away from the workplace if you can, is what the Mental Health Foundation suggests.", ref: 3, picture: "hours" }],
    },
  },
  "work": {
    sectionRefs: [[[1], [3]], [[3], [1]], [[2], [2], [4]], [[5], [6], [8]], [[7], [7]]],
    helpRefs: [[1], [2], [2], [6], [8], [9, 10]],
    stats: {
      4: [{ value: "Over a quarter", label: "of workers who took time off because of stress received no help on their return, says Mental Health UK's Burnout Report.", ref: 7 }],
    },
  },
  "daily-habits": {
    sectionRefs: [[[6], [5]], [[1], [1], [1, 2]], [[5], [8], [4, 3]], [[7], [8]], [[9], [9]]],
    helpRefs: [[1], [1], [3, 4], [5], [8], [10, 11]],
    charts: {
      1: { kind: "range", title: "A night's sleep", subtitle: "Hours of sleep most healthy adults need each night", from: 7, to: 9, unit: "hours a night", sources: "Source: NHS Every Mind Matters, Sleep problems" },
      2: {
        kind: "bars",
        title: "Two ways to reach the weekly target",
        subtitle: "Minutes of activity a week adults should aim for, of either kind",
        bars: [
          { label: "Moderate activity", value: 150, strong: true },
          { label: "Vigorous activity", value: 75 },
        ],
        unit: "minutes a week",
        max: 150,
        sources: "Source: NHS, Physical activity guidelines for adults aged 19 to 64",
      },
    },
  },
  "employer": {
    sectionRefs: [[[1, 2], [4]], [[1], [3]], [[4], [5], [8]], [[6], [6], [9]], [[7], [7]]],
    helpRefs: [[2], [2], [2], [5], [8], [10, 11]],
    stats: {
      2: [
        { value: "12 months", label: "or more is how long poor mental health lasts, or is expected to last, to count as a disability under the Equality Act 2010, says Acas.", ref: 4, picture: "calendar" },
        { value: "From day one", label: "in a job, all employees have the legal right to request flexible working, says the government.", ref: 8, picture: "calendar" },
      ],
    },
  },
  "preventing": {
    sectionRefs: [[[1], [5]], [[1], [2], [2]], [[1], [1], [4]], [[2], [6], [7]], [[1], [1, 3]]],
    helpRefs: [[1], [1], [1], [4], [6], [8, 9]],
    stats: {
      2: [{ value: "5 steps", label: "to mental wellbeing: connect, be active, learn, give and notice the present moment, says the NHS.", ref: 4 }],
      3: [{ value: "5 or 10 minutes", label: "set aside to think through solutions to one problem can help, says NHS Every Mind Matters.", ref: 6, picture: "hours" }],
    },
  },
};
