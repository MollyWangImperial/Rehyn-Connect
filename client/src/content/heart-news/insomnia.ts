import type { NewsExtras } from "../ischaemic-news";
// Sleep problems features: paragraph references (numbers are positions in each answer's own sources in insomnia-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-happens": {
    sectionRefs: [[[1, 5], [5, 2]], [[1], [1, 2]], [[1, 2], [1, 2], [2]], [[3], [3], [4]], [[1], [1, 6]]],
    helpRefs: [[3], [3], [4], [1], [1]],
    stats: {
      0: [{ value: "About a third", label: "of our lives is spent asleep, says the Royal College of Psychiatrists.", ref: 1 }],
      2: [{ value: "About 90 minutes", label: "is how long each sleep cycle lasts in adults, says the Royal College of Psychiatrists.", ref: 1, picture: "hours" }],
      3: [{ value: "Around 15 hours", label: "of being awake makes sleep pressure strong enough for you to feel tired, says the Sleep Charity.", ref: 3, picture: "hours" }],
    },
    charts: {
      1: { kind: "donut", title: "A fifth of the night is dreaming", subtitle: "Sleep time, out of every 100", value: 20, prefix: "About", subject: "of your sleep time", label: "is REM (dreaming) sleep", sources: "Source: Royal College of Psychiatrists, Sleeping well" },
    },
  },
  "causes": {
    sectionRefs: [[[1], [2]], [[1, 2, 8], [3]], [[1, 2], [1, 3]], [[1, 3, 7], [2, 6, 5]], [[1, 3], [4, 3]]],
    helpRefs: [[4], [7], [3], [4, 6], [1, 4], [1]],
    stats: {
      0: [{ value: "Around 1 in 3", label: "people in the UK are thought to be affected by short-term (acute) insomnia, says the Sleep Charity.", ref: 2, picture: "one-in", of: 3 }],
      3: [{ value: "2 to 10 years", label: "is how long the whole menopause process can last, with effects on sleep, says the Sleep Charity.", ref: 5, picture: "calendar" }],
    },
    charts: {
      0: { kind: "range", title: "When poor sleep lasts", subtitle: "People in the UK with long-term (chronic) sleep difficulties, out of every 100", from: 10, to: 15, sources: "Source: The Sleep Charity, Insomnia" },
    },
  },
  "not-apnoea": {
    sectionRefs: [[[3, 8], [3]], [[1, 4], [1, 3], [1]], [[1], [1], [1]], [[2, 5], [5, 2], [2]], [[7], [7]]],
    helpRefs: [[1], [1, 6], [1], [2], [2], [2]],
    stats: {
      3: [
        { value: "Around 1 in 10", label: "people are affected by restless legs syndrome at some point in their life, says the Sleep Charity.", ref: 5, picture: "one-in", of: 10 },
        { value: "Twice as likely", label: "is how much more likely women are to get restless legs syndrome than men, says the Sleep Charity.", ref: 5, picture: "times" },
      ],
    },
    charts: {
      3: { kind: "donut", title: "Common late in pregnancy", subtitle: "Pregnant women, out of every 100 (around one in five)", value: 20, prefix: "Around", subject: "pregnant women", label: "have restless legs syndrome in the last trimester", sources: "Source: The Sleep Charity, Restless leg syndrome" },
    },
  },
  "how-much": {
    sectionRefs: [[[1, 2], [3]], [[3], [2, 3]], [[6], [3]], [[3, 5], [5]], [[3], [4]]],
    helpRefs: [[3], [4], [6], [4], [3], [7]],
    stats: {
      4: [{ value: "Under 6 hours", label: "of sleep a night, regularly, is linked to many health problems, says the Sleep Charity.", ref: 4, picture: "hours" }],
    },
    charts: {
      0: { kind: "range", title: "What most adults need", subtitle: "Average hours of sleep adults need each night", from: 7, to: 9, unit: "hours a night", sources: "Source: NHS, Insomnia" },
    },
  },
  "cbt-i": {
    sectionRefs: [[[2, 9], [1]], [[2], [2, 7], [3, 4]], [[1, 4], [6, 5], [3]], [[1, 6, 5], [8, 4]], [[2, 3], [5, 4]]],
    helpRefs: [[1], [3, 5], [8, 4], [4], [4]],
    stats: {
      2: [{ value: "6 weeks", label: "is how long the Sleepio programme is designed to take, says NICE.", ref: 6, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "A short course", subtitle: "The usual number of CBT sessions on the NHS", from: 5, to: 15, unit: "sessions", sources: "Source: NHS, Cognitive behavioural therapy (CBT)" },
    },
  },
  "sleep-window": {
    sectionRefs: [[[1], [2, 4]], [[3], [3]], [[1], [1], [1]], [[1, 7], [5]], [[2, 6], [1]]],
    helpRefs: [[2, 6], [1, 7], [1, 7], [5], [1, 7]],
    stats: {
      2: [
        { value: "15 minutes", label: "a week is how much to move your earliest bedtime, says the Royal College of Psychiatrists.", ref: 1, picture: "hours" },
        { value: "About 20 minutes", label: "to fall asleep is the sign it is time to widen the window, says the Royal College of Psychiatrists.", ref: 1, picture: "hours" },
      ],
    },
  },
  "sleeping-tablets": {
    sectionRefs: [[[1], [1]], [[2], [2, 3], [2]], [[4], [5, 6, 8]], [[3, 7], [3, 9]], [[1], [1]]],
    helpRefs: [[1, 7], [2], [2], [2, 6], [6, 8], [3]],
    stats: {
      1: [{ value: "12 hours", label: "is how long not to drive, ride a bike or use machinery after taking zopiclone, says the NHS.", ref: 2, picture: "hours" }],
      2: [{ value: "1 to 2 hours", label: "is how long melatonin takes to work, says the NHS.", ref: 4, picture: "hours" }],
    },
    charts: {
      1: { kind: "bars", title: "Short courses, by design", subtitle: "The longest usual course, in weeks, according to the NHS", bars: [{ label: "Pharmacy sleep aids, up to", value: 2 }, { label: "Zopiclone, usually no more than", value: 4, strong: true }, { label: "Melatonin for short-term sleep problems, up to", value: 13 }], max: 16, ticks: [0, 4, 8, 12, 16], unit: " weeks", sources: "Source: NHS, Insomnia; Zopiclone; How and when to take melatonin" },
    },
  },
  "pain-at-night": {
    sectionRefs: [[[1], [2, 3]], [[3, 2], [2, 3]], [[3, 2], [2], [3]], [[1], [2]], [[2], [3, 1, 4]]],
    helpRefs: [[3], [3, 2], [2], [1], [3], [2]],
  },
  "evenings": {
    sectionRefs: [[[1, 6], [6]], [[3, 5], [3, 6]], [[1, 5, 6], [5, 1, 2]], [[1, 4], [5, 2, 1]], [[6], [4]]],
    helpRefs: [[1], [2, 3], [1], [4, 5], [5, 2], [2]],
    stats: {
      1: [{ value: "An hour", label: "before bed is when to stop using screens, say Every Mind Matters and the Sleep Charity.", ref: 3, picture: "hours" }],
      3: [{ value: "16 to 18°C", label: "is an ideal bedroom temperature, says the Sleep Charity.", ref: 4 }],
    },
    charts: {
      2: { kind: "bars", title: "When to stop caffeine", subtitle: "Hours before bedtime to have the last caffeine, by source", bars: [{ label: "The NHS: at least", value: 6 }, { label: "The Sleep Charity's guidelines", value: 8, strong: true }], max: 8, ticks: [0, 2, 4, 6, 8], unit: " hours", sources: "Source: NHS, Insomnia; The Sleep Charity, Sleep hygiene" },
    },
  },
  "naps": {
    sectionRefs: [[[2, 3], [3]], [[3], [3]], [[2], [2], [2]], [[4], [4, 5]], [[1, 6, 7], [4, 1]]],
    helpRefs: [[1, 2], [3, 4], [2], [2], [5, 4], [4]],
    stats: {
      1: [{ value: "Before 4pm", label: "is when to nap, if you nap at all, says the Sleep Charity.", ref: 3, picture: "hours" }],
      2: [{ value: "20 to 30 minutes", label: "is how long caffeine can take to start working, says the Royal College of Psychiatrists.", ref: 2, picture: "hours" }],
    },
    charts: {
      1: { kind: "range", title: "A power nap", subtitle: "The ideal length of a short nap", from: 20, to: 30, unit: "minutes", sources: "Source: The Sleep Charity, Napping" },
    },
  },
  "worry": {
    sectionRefs: [[[1], [4, 1]], [[2], [2, 3, 4]], [[1, 4], [10, 1]], [[4], [3]], [[5, 6], [1, 8, 9], [6, 7]]],
    helpRefs: [[2], [4, 1], [1, 10], [1, 8], [6, 7], [6, 7]],
    stats: {
      1: [{ value: "10 or 15 minutes", label: "of worry time, every day or so before bed, can help stop racing thoughts, says Every Mind Matters.", ref: 2, picture: "hours" }],
      4: [{ value: "116 123", label: "is the free number for Samaritans, any time of the day or night, says the NHS.", ref: 7 }],
    },
    charts: {
      4: { kind: "donut", title: "Sleep and mood go together", subtitle: "Long-term poor sleepers, out of every 100 (4 in 5)", value: 80, subject: "long-term poor sleepers", label: "have low mood", sources: "Source: The Sleep Charity, Mental health" },
    },
  },
  "partner": {
    sectionRefs: [[[1, 5, 3], [4]], [[2], [2]], [[2, 3], [3, 2]], [[1], [6]], [[5], [5]]],
    helpRefs: [[5], [2], [4], [5], [2, 3], [1]],
    stats: {
      0: [{ value: "5ft", label: "wide is the minimum for a bed that two people share, says the Sleep Charity.", ref: 4 }],
    },
  },
};
