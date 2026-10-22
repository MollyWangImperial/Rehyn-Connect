import type { NewsExtras } from "../ischaemic-news";
// Panic disorder features: paragraph references (numbers are positions in each answer's own sources in panic-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [1]], [[2], [2, 4]], [[1], [1, 5]], [[1], [1]]],
    helpRefs: [[1], [3], [3], [3], [6, 7]],
    stats: {
      2: [{ value: "Several times a week", label: "is how often some people have attacks, while others have them once or twice a month, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "attack": {
    sectionRefs: [[[1], [3]], [[1], [1, 5]], [[1, 2, 3], [6]], [[4], [4]], [[1, 3], [1]]],
    helpRefs: [[1], [1], [4], [5], [7, 8]],
    charts: {
      3: { kind: "donut", title: "Breathing too fast", subtitle: "Panic attacks, out of every 100, that come with hyperventilation, says No Panic", value: 60, prefix: "About", subject: "panic attacks", label: "are accompanied by hyperventilation, or over-breathing", sources: "Source: No Panic, Correct breathing animation" },
      4: { kind: "range", title: "Over in minutes", subtitle: "How long most panic attacks last, in minutes", from: 5, to: 20, unit: "minutes", sources: "Source: NHS, Panic disorder" },
    },
  },
  "causes": {
    sectionRefs: [[[1, 2], [1]], [[2], [2, 6]], [[3], [4]], [[1, 4], [5]]],
    helpRefs: [[5], [5], [1], [3], [7, 8]],
  },
  "diagnosis": {
    sectionRefs: [[[1], [1, 3]], [[1], [3]], [[1], [2]], [[3, 4, 5], [3, 6]]],
    helpRefs: [[1], [1, 3], [3, 5], [1], [7, 8]],
    stats: {
      2: [
        { value: "At least a month", label: "of continuous worry about more attacks, after regular unexpected ones, may mean panic disorder, says the NHS.", ref: 1, picture: "calendar" },
        { value: "The past 2 weeks", label: "is the period Anxiety UK's panic disorder self-check questions ask about.", ref: 2, picture: "calendar" },
      ],
    },
  },
  "cbt": {
    sectionRefs: [[[2, 5], [5]], [[1], [4], [4]], [[1, 3, 6], [3, 6]], [[2, 3], [2, 4], [2, 1]], [[2], [4, 7]]],
    helpRefs: [[3, 6], [1], [2], [2], [3], [8, 9]],
    stats: {
      2: [{ value: "18 or over", label: "is the age to refer yourself to NHS talking therapies, or 16 or over in some areas, says the NHS.", ref: 3 }],
      3: [{ value: "About an hour", label: "is how long each weekly CBT session usually lasts for agoraphobia and related panic, says the NHS.", ref: 4, picture: "hours" }],
    },
    charts: {
      3: { kind: "range", title: "A course of CBT", subtitle: "Weekly CBT sessions a course usually has for agoraphobia and related panic, says the NHS", from: 12, to: 15, unit: "sessions", sources: "Source: NHS, Agoraphobia: treatment" },
    },
  },
  "during": {
    sectionRefs: [[[1, 2], [2, 3]], [[1, 2], [4, 3], [3]], [[2, 3], [1, 2]], [[1, 2], [4]], [[5, 6], [3]]],
    helpRefs: [[1, 2], [1, 2], [2, 3], [1], [5], [7, 8]],
    stats: {
      4: [{ value: "24 hours", label: "a day, No Panic's recorded crisis message, a breathing exercise for a panic attack, can be heard on 01952 680835.", ref: 5, picture: "hours" }],
    },
    charts: {
      1: { kind: "bars", title: "The 4-5-8 breath", subtitle: "Seconds for each part of Rethink Mental Illness's 4-5-8 breathing method, which you can change to suit you", bars: [{ label: "Breathe in", value: 4 }, { label: "Hold", value: 5 }, { label: "Breathe out", value: 8, strong: true }], max: 8, unit: " sec", ticks: [0, 4, 8], sources: "Source: Rethink Mental Illness, How do I manage a panic attack?" },
    },
  },
  "medicines": {
    sectionRefs: [[[1], [4]], [[1, 2, 4, 8], [3], [1]], [[1], [3], [2]], [[1, 7], [5, 6]], [[2], [4, 6]]],
    helpRefs: [[1], [2], [2, 6], [6, 3], [3], [9, 10]],
    stats: {
      2: [{ value: "Up to 8 weeks", label: "is how long antidepressants can take to work fully, after 2 to 4 weeks to start working, says the NHS.", ref: 1, picture: "calendar" }],
      3: [{ value: "Around 1 hour", label: "is how long clonazepam should take to start working for panic disorder, says the NHS.", ref: 5, picture: "hours" }],
    },
    charts: {
      4: { kind: "range", title: "A longer course", subtitle: "Months some people take SSRIs for agoraphobia and related panic, or more", from: 6, to: 12, unit: "months", sources: "Source: NHS, Agoraphobia: treatment" },
    },
  },
  "self-help": {
    sectionRefs: [[[2], [2]], [[1], [2, 3]], [[4], [5], [6, 7]], [[8], [9], [10]], [[11]]],
    helpRefs: [[1], [4, 5], [6], [2, 3], [11], [12, 13]],
    stats: {
      2: [{ value: "2 in 3", label: "people who complete the Mind Plan email programme report better mental wellbeing, says Every Mind Matters.", ref: 5 }],
      3: [{ value: "Six one-hour sessions", label: "over six weeks, by phone, is how No Panic's CBT-focused mentoring is delivered.", ref: 9, picture: "calendar" }],
    },
  },
  "avoidance": {
    sectionRefs: [[[1], [4]], [[2], [3, 6]], [[4], [4], [4]], [[5], [2]]],
    helpRefs: [[7], [4], [4], [4], [5, 2], [8, 9]],
    stats: {
      2: [{ value: "By half", label: "is how far to let your fear rating fall before moving to the next step, says Every Mind Matters.", ref: 4, picture: "half" }],
    },
    charts: {
      2: { kind: "bars", title: "Rate it, then climb", subtitle: "Every Mind Matters' example: fear ratings for taking the bus for a couple of stops, on a scale of 0 to 100", bars: [{ label: "With a friend", value: 10 }, { label: "On your own", value: 50, strong: true }], max: 100, unit: "/100", ticks: [0, 50, 100], sources: "Source: NHS Every Mind Matters, Facing your fears" },
    },
  },
  "lifestyle": {
    sectionRefs: [[[2], [8, 7]], [[1, 2], [3, 7]], [[1], [6, 7]], [[7, 3], [5, 4], [4, 5]]],
    helpRefs: [[2], [1], [1], [3], [4], [9, 10]],
    stats: {
      2: [
        { value: "At least 150 minutes", label: "of physical activity over a week is what adults should aim for, says the NHS.", ref: 6, picture: "hours" },
        { value: "20 minutes, 3 times a week", label: "of regular exercise, at least, can reduce states of high arousal, says No Panic's Professor Kevin Gournay.", ref: 7, picture: "calendar" },
      ],
      3: [{ value: "At least 6 hours", label: "before bed is when to stop drinking alcohol, tea or coffee, says the NHS.", ref: 4, picture: "hours" }],
    },
    charts: {
      3: { kind: "range", title: "A full night", subtitle: "Hours of sleep a night most healthy adults need, says Every Mind Matters", from: 7, to: 9, unit: "hours", sources: "Source: NHS Every Mind Matters, Sleep problems" },
    },
  },
  "chest-pain": {
    sectionRefs: [[[1], [2]], [[2], [2], [3]], [[5], [4]], [[2, 4], [1, 6, 4], [7]]],
    helpRefs: [[2], [2], [5], [2, 4], [8, 9]],
    stats: {
      2: [{ value: "Longer than 20 minutes", label: "despite slow breathing is when to get medical help for a panic attack, says Rethink Mental Illness.", ref: 5, picture: "hours" }],
    },
  },
  "support": {
    sectionRefs: [[[1], [10, 9]], [[2], [3, 4]], [[7, 6], [5]], [[8]], [[11]]],
    helpRefs: [[1], [2], [7], [11], [12, 13]],
    stats: {
      1: [{ value: "10am to 10pm", label: "every day of the year, trained volunteers answer the No Panic helpline on 0300 772 9844, says No Panic.", ref: 2, picture: "hours" }],
      4: [{ value: "Day or night", label: "you can call Samaritans on 116 123 if you need someone to talk to, says the NHS.", ref: 11 }],
    },
  },
};
