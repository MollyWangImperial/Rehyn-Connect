import type { NewsExtras } from "../ischaemic-news";
// Anxiety features: paragraph references (numbers are positions in each answer's own sources in anxiety-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[2], [2, 4]], [[1], [4, 1]], [[1], [1, 2], [1, 2]], [[2], [5, 2]], [[1], [3, 6]]],
    helpRefs: [[1], [3], [1], [1], [1], [7, 8]],
  },
  "panic": {
    sectionRefs: [[[1], [1]], [[1, 2], [1]], [[1, 2], [1, 2]], [[1, 3], [3, 1]], [[1, 4], [1]]],
    helpRefs: [[1], [1], [1], [1], [3], [5, 6]],
    stats: {
      4: [{ value: "At least a month", label: "of continuous worry about more attacks, after regular unexpected ones, may mean panic disorder, says the NHS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "Over in minutes", subtitle: "How long most panic attacks last, in minutes", from: 5, to: 20, unit: "minutes", sources: "Source: NHS, Panic disorder" },
    },
  },
  "health-anxiety": {
    sectionRefs: [[[1, 2], [2]], [[3], [3], [3]], [[1], [1, 4]], [[1], [1], [1]], [[1], [1, 5, 2]]],
    helpRefs: [[1], [1], [1], [1], [1], [6, 7]],
    stats: {
      1: [{ value: "Around 1 in 4", label: "people who have a stroke will experience anxiety within the first five years, says the Stroke Association.", ref: 3, picture: "one-in-four" }],
    },
  },
  "types": {
    sectionRefs: [[[1, 6], [1, 5]], [[2]], [[3], [3, 7]], [[4], [4, 9, 8]], [[1, 10], [1, 3, 4]]],
    helpRefs: [[1, 4], [1], [1], [4], [3, 4], [11, 12]],
    stats: {
      0: [
        { value: "1 in 25", label: "people in the UK are affected by generalised anxiety disorder, says the Royal College of Psychiatrists.", ref: 5, picture: "one-in", of: 25 },
        { value: "At least 6 months", label: "of feeling anxious a lot of the time is one of the things a GP looks for before diagnosing GAD, says the NHS.", ref: 1, picture: "calendar" },
      ],
    },
  },
  "cbt": {
    sectionRefs: [[[1, 6], [3, 5]], [[1, 2], [2, 1], [1, 2]], [[1], [2, 1]], [[1], [1, 4]], [[1], [1]]],
    helpRefs: [[2], [2], [1], [1], [2], [7, 8]],
    stats: {
      3: [{ value: "Around 50 to 60 minutes", label: "is how long a CBT session typically lasts, usually once a week, says Anxiety UK.", ref: 3, picture: "hours" }],
    },
    charts: {
      2: { kind: "range", title: "A short course", subtitle: "Number of CBT sessions you will usually have, says the NHS", from: 5, to: 15, unit: "sessions", sources: "Source: NHS, Cognitive behavioural therapy (CBT)" },
    },
  },
  "breathing": {
    sectionRefs: [[[6, 1], [1, 5]], [[1], [1]], [[1], [1]], [[3], [3], [4]], [[2], [2]]],
    helpRefs: [[1], [1], [5], [3], [2], [7, 8]],
    stats: {
      2: [{ value: "At least 5 minutes", label: "of calm breathing, counting from 1 to 5 in and out, is what the NHS breathing exercise suggests.", ref: 1, picture: "hours" }],
    },
  },
  "medicines": {
    sectionRefs: [[[1, 3], [3]], [[1, 3, 4], [5]], [[4, 2], [5, 4], [4]], [[3, 6], [3, 7]], [[4], [4, 3, 5]]],
    helpRefs: [[2, 4], [4], [4], [5, 3], [3], [8, 9]],
    stats: {
      2: [{ value: "Up to 8 weeks", label: "is how long antidepressants can take to work fully, says the NHS.", ref: 4, picture: "calendar" }],
      4: [{ value: "At least 6 months", label: "after you feel better is how long you will usually keep taking an antidepressant, says the NHS.", ref: 4, picture: "calendar" }],
    },
  },
  "worry-time": {
    sectionRefs: [[[1, 4]], [[1, 2], [1]], [[1], [1]], [[3], [3]], [[1], [5, 4]]],
    helpRefs: [[1], [1], [1], [3], [5], [6, 7]],
    stats: {
      1: [{ value: "10 or 15 minutes", label: "a day is the short worry time Every Mind Matters suggests, to write worries down and find solutions.", ref: 1, picture: "hours" }],
    },
  },
  "caffeine-sleep": {
    sectionRefs: [[[1, 4], [4], [4]], [[1, 9], [5, 3, 7]], [[6], [3, 2, 1]], [[2, 8, 3], [3, 2], [2, 3, 5]], [[2]]],
    helpRefs: [[1, 4], [2], [1], [3, 10], [2, 3], [11, 12]],
    stats: {
      2: [
        { value: "7 to 9 hours", label: "of sleep a night is what most healthy adults need, says Every Mind Matters.", ref: 3, picture: "hours" },
        { value: "4 in 5", label: "long-term poor sleepers suffer from low mood, says The Sleep Charity.", ref: 6 },
      ],
      3: [{ value: "At least 6 hours", label: "before bed is when to stop drinking alcohol, tea or coffee, says the NHS.", ref: 2, picture: "hours" }],
    },
    charts: {
      0: { kind: "range", title: "Caffeine lingers", subtitle: "Average half-life of caffeine in the body, in hours", from: 5, to: 7, unit: "hours", sources: "Source: The Sleep Charity, Caffeine and sleep" },
    },
  },
  "avoidance": {
    sectionRefs: [[[1], [2, 4]], [[5], [6]], [[1], [1], [1]], [[1], [3]], [[7, 3]]],
    helpRefs: [[1], [1], [1], [3], [1], [8, 9]],
    stats: {
      2: [{ value: "By half", label: "is how far to let your fear rating fall before moving to the next step, says Every Mind Matters.", ref: 1, picture: "half" }],
    },
    charts: {
      2: { kind: "bars", title: "Rate it, then climb", subtitle: "Every Mind Matters' example: fear ratings for taking the bus for a couple of stops, on a scale of 0 to 100", bars: [{ label: "With a friend", value: 10 }, { label: "On your own", value: 50, strong: true }], max: 100, unit: "/100", ticks: [0, 50, 100], sources: "Source: NHS Every Mind Matters, Facing your fears" },
    },
  },
  "telling-people": {
    sectionRefs: [[[5, 4], [6, 1]], [[1], [1]], [[1], [2]], [[3], [2, 3]], [[3], [7, 8]]],
    helpRefs: [[1, 5], [2], [1], [2], [1], [8, 7]],
  },
  "exercise": {
    sectionRefs: [[[1, 2], [6, 8]], [[3, 4], [4]], [[5], [4, 5]], [[5, 6], [9, 5]], [[7], [10, 7]]],
    helpRefs: [[1], [5, 4], [5], [5, 6], [4], [11, 12]],
    stats: {
      2: [{ value: "10 minutes", label: "of brisk walking can clear your mind and help you relax, says the NHS.", ref: 5, picture: "hours" }],
    },
    charts: {
      1: { kind: "bars", title: "Two ways to reach your week", subtitle: "Minutes of activity a week the NHS says adults should aim for", bars: [{ label: "Moderate", value: 150, strong: true }, { label: "Or vigorous", value: 75 }], max: 150, unit: " min", ticks: [0, 75, 150], sources: "Source: NHS, Physical activity guidelines for adults aged 19 to 64" },
    },
  },
};
