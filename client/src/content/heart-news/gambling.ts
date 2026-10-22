import type { NewsExtras } from "../ischaemic-news";
// Gambling features: paragraph references (numbers are positions in each answer's own sources in gambling-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [1, 2]], [[1], [1]], [[2, 4], [1], [2]], [[5], [3], [4]], [[1], [1, 6]]],
    helpRefs: [[6], [4], [4], [6], [6], [7, 8]],
    stats: {
      1: [{ value: "Four times", label: "more likely: men, compared with women, to have a gambling disorder, although the rate in women is rising, says the Royal College of Psychiatrists.", ref: 1, picture: "times" }],
      4: [{ value: "About 2 in 3", label: "people with a gambling disorder who do not get help continue to have problems, which tend to get worse, says the Royal College of Psychiatrists.", ref: 1 }],
    },
    charts: {
      1: { kind: "range", title: "Harmful or at risk", subtitle: "People who gamble in ways that are harmful or at risk of becoming harmful, out of every 100", from: 8, to: 12, sources: "Source: Royal College of Psychiatrists, Gambling disorder" },
    },
  },
  "signs": {
    sectionRefs: [[[1], [1], [1]], [[2], [2]], [[3], [3]], [[4], [5]], [[6], [6, 1]]],
    helpRefs: [[1], [4], [2], [6, 2], [7, 8]],
    stats: {
      0: [{ value: "8 or higher", label: "on the NHS's nine questions means you, or those closest to you, are likely to be experiencing gambling-related harms.", ref: 1 }],
    },
  },
  "mental-health": {
    sectionRefs: [[[2], [3]], [[1, 6], [4], [1]], [[1, 4], [2]], [[5], [1]], [[1, 2], [5], [7, 8]]],
    helpRefs: [[4], [2], [4], [5, 1], [7], [7, 8]],
  },
  "affected-others": {
    sectionRefs: [[[1], [3, 4]], [[2], [1, 6]], [[2], [5]], [[5]], [[7], [6]]],
    helpRefs: [[5], [5], [2], [7], [6], [8, 9]],
    stats: {
      0: [{ value: "Around 7", label: "people are affected for every one person who has a gambling problem in the UK, says the NHS East of England Gambling Service.", ref: 1 }],
    },
    charts: {
      0: { kind: "donut", title: "Closer than you think", subtitle: "People, out of every 100, who think they know someone who has experienced gambling harms", value: 25, subject: "people", label: "think they know someone who has experienced gambling harms", sources: "Source: GambleAware, The signs of gambling harms (1 in 4 people)" },
    },
  },
  "getting-help": {
    sectionRefs: [[[1], [1, 2], [3]], [[4, 3], [3]], [[1, 5], [5]], [[1], [8, 9], [7]], [[2], [6]]],
    helpRefs: [[1], [1, 5], [8], [5], [6], [10, 11]],
    stats: {
      1: [{ value: "1 to 3 days", label: "is how soon the NHS Northern Gambling Service says it will contact you with next steps after a self-referral.", ref: 4, picture: "calendar" }],
      2: [{ value: "24 hours a day", label: "every day, the National Gambling Helpline is free on 0808 8020 133, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  "blocking": {
    sectionRefs: [[[2], [1, 6]], [[2], [2], [7]], [[2], [2, 5]], [[4, 2], [4]], [[3], [3, 8], [3, 9]]],
    helpRefs: [[1, 2], [1, 2], [1], [2, 4], [2], [10, 11]],
    stats: {
      0: [{ value: "Around 5 minutes", label: "is how long registering with GAMSTOP takes, says GambleAware.", ref: 2, picture: "hours" }],
    },
    charts: {
      0: { kind: "bars", title: "How long the block lasts", subtitle: "The GAMSTOP periods you can choose, in months, says the NHS", bars: [{ label: "6 months", value: 6 }, { label: "1 year", value: 12 }, { label: "5 years", value: 60, strong: true }], max: 60, unit: " months", ticks: [0, 12, 24, 36, 48, 60], sources: "Source: NHS, Help for problems with gambling" },
    },
  },
  "therapy": {
    sectionRefs: [[[1], [2]], [[1], [1]], [[3], [3]], [[1, 2], [1, 2]], [[1, 2], [4, 2]]],
    helpRefs: [[2], [1], [3], [1, 2], [4], [5, 6]],
    stats: {
      0: [{ value: "6 to 8 sessions", label: "is the usual length of a one-to-one CBT course for gambling, says NICE.", ref: 2, picture: "calendar" }],
    },
    charts: {
      0: { kind: "range", title: "A short course", subtitle: "Number of sessions a group CBT course for gambling usually has, says NICE", from: 8, to: 10, unit: "sessions", sources: "Source: NICE, Gambling-related harms (NG248)" },
    },
  },
  "money": {
    sectionRefs: [[[3, 1, 4], [5, 6, 4]], [[1, 3], [2], [7]], [[4], [3]], [[1, 2], [8]]],
    helpRefs: [[1], [5, 6, 4], [2], [2], [4], [9, 10]],
  },
  "urges": {
    sectionRefs: [[[4], [3]], [[2], [2]], [[2], [6]], [[1], [1, 3]], [[1, 5], [1, 7]]],
    helpRefs: [[4, 6], [2], [2], [1], [1, 7], [8, 9]],
  },
  "relapse": {
    sectionRefs: [[[1], [3]], [[1], [1, 2]], [[2], [1], [4]], [[1], [5], [6]], [[1, 7, 8]]],
    helpRefs: [[1], [2], [1, 4], [1], [6, 1], [7, 8]],
    stats: {
      2: [{ value: "3 sessions", label: "make up the relapse prevention course the National Gambling Clinic offers to people who have already had a period away from gambling.", ref: 4, picture: "calendar" }],
    },
  },
  "family": {
    sectionRefs: [[[1], [1, 2], [2]], [[3, 1], [3]], [[4, 3], [7, 3]], [[5, 8], [6, 7, 1], [5]], [[1], [1]]],
    helpRefs: [[1], [2], [3], [4, 3], [6, 7, 5, 1], [9, 10]],
  },
  "crisis": {
    sectionRefs: [[[1], [1]], [[3], [2, 1]], [[4, 5], [6], [7]], [[2], [2]], [[1, 2]]],
    helpRefs: [[1], [3], [2], [2], [1, 2], [1]],
    stats: {
      1: [{ value: "Any time, day or night", label: "you can call Samaritans free on 116 123, from any phone, says Samaritans.", ref: 3, picture: "hours" }],
    },
  },
};
