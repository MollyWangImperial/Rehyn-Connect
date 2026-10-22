import type { NewsExtras } from "../ischaemic-news";
// Fibromyalgia features: paragraph references (numbers are positions in each answer's own sources in fibro-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 3], [4]], [[1, 2], [3]], [[3], [4]], [[1, 3], [1]], [[1], [3]]],
    helpRefs: [[1], [3], [3], [3], [1]],
    stats: {
      3: [{ value: "Nearly 1 in 20", label: "people may be affected by fibromyalgia to some degree, some estimates suggest, says the NHS.", ref: 1, picture: "one-in", of: 20 }],
    },
    charts: {
      3: { kind: "range", title: "When it usually starts", subtitle: "Ages at which fibromyalgia typically develops, in years", from: 25, to: 55, unit: "years of age", sources: "Sources: NHS, Fibromyalgia; Arthritis UK, Fibromyalgia" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1, 3], [1], [4]], [[1], [1]], [[1], [1], [1]], [[1], [3]], [[1, 3], [2, 1]]],
    helpRefs: [[1], [3], [3], [3], [1]],
    stats: {
      0: [{ value: "4 core symptoms", label: "widespread pain, profound fatigue, fibro fog and non-refreshing sleep, says Fibromyalgia Action UK.", ref: 4 }],
    },
  },
  "diagnosis": {
    sectionRefs: [[[1, 2], [2]], [[1, 2], [2, 1]], [[1, 2], [1]], [[2], [2]], [[3], [4]]],
    helpRefs: [[1], [2], [1], [3], [2]],
    stats: {
      1: [{ value: "3 months or more", label: "of severe pain is one of the common symptoms doctors look for, says Arthritis UK.", ref: 2, picture: "calendar" }],
      4: [{ value: "Around 3 years", label: "from first consultation is how long a diagnosis can take, says Fibromyalgia Action UK.", ref: 3, picture: "calendar" }],
    },
  },
  "triggers": {
    sectionRefs: [[[1], [3]], [[4], [3]], [[1], [5]], [[2], [2]], [[5], [4, 5]]],
    helpRefs: [[4], [3], [5], [5], [3]],
  },
  "exercise": {
    sectionRefs: [[[1], [3]], [[1, 6], [2, 1]], [[3], [3], [3]], [[4], [7, 3]], [[5], [5, 4]]],
    helpRefs: [[5], [2, 1], [4], [3], [1], [4]],
    stats: {
      3: [{ value: "5 to 10 minutes", label: "of walking or gentle stretching is one way to start adding activity, says Arthritis UK.", ref: 4, picture: "hours" }],
    },
    charts: {
      4: { kind: "bars", title: "Two ways to meet the weekly target", subtitle: "Minutes of activity adults should aim for each week", bars: [{ label: "Moderate intensity, at least", value: 150, strong: true }, { label: "Or vigorous intensity", value: 75 }], max: 150, ticks: [0, 50, 100, 150], unit: " minutes", sources: "Source: NHS, Physical activity guidelines for adults aged 19 to 64" },
    },
  },
  "medicines": {
    sectionRefs: [[[1], [2, 6]], [[1], [4, 5]], [[4], [3]], [[8, 2], [9, 5], [8]], [[2, 1], [6, 7], [7, 2]]],
    helpRefs: [[1], [3], [4], [1, 5], [9, 5], [2]],
    stats: {
      2: [{ value: "At least 6 weeks", label: "is how long to allow to see if amitriptyline works for you, says the NHS.", ref: 4, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "Slow to build", subtitle: "Weeks amitriptyline can take to give its full benefit as a painkiller", from: 4, to: 6, unit: "weeks", sources: "Source: NHS, Common questions about amitriptyline for pain and migraine" },
    },
  },
  "talking": {
    sectionRefs: [[[1], [1]], [[2], [6]], [[2], [3]], [[2], [2, 6]], [[2, 5], [4]]],
    helpRefs: [[1, 5], [2, 6], [3], [4], [2]],
    charts: {
      2: { kind: "range", title: "A course of CBT", subtitle: "Number of CBT sessions people usually have", from: 5, to: 15, unit: "sessions", sources: "Source: NHS, Cognitive behavioural therapy (CBT)" },
    },
  },
  "sleep": {
    sectionRefs: [[[1, 2], [4]], [[3, 4], [3]], [[1, 3], [3, 1]], [[3], [3]], [[3], [5]]],
    helpRefs: [[1], [1, 3], [1, 3], [3], [1, 3], [5]],
    stats: {
      3: [{ value: "8 hours", label: "before bed is how long to avoid caffeine, says Arthritis UK.", ref: 3, picture: "hours" }],
    },
  },
  "pacing": {
    sectionRefs: [[[1, 4], [3]], [[2], [2]], [[2], [2]], [[2, 1], [1, 4]], [[2], [2]]],
    helpRefs: [[2], [2, 1], [2], [2], [4], [2]],
    stats: {
      1: [{ value: "4 Ps", label: "problem solving, planning, prioritising and pacing, can help you manage your energy, suggests Arthritis UK.", ref: 2 }],
    },
  },
  "flares": {
    sectionRefs: [[[1], [2, 1]], [[3], [1, 5]], [[2], [1], [4]], [[6], [5]], [[1], [1]]],
    helpRefs: [[2], [1], [1], [5, 1], [1]],
  },
  "work": {
    sectionRefs: [[[1], [1]], [[2], [3]], [[4], [4, 5]], [[1], [5, 8]], [[6], [7, 8]]],
    helpRefs: [[4], [1], [5], [5], [6], [8]],
    stats: {
      1: [{ value: "12 months", label: "or more is what long-term means under the Equality Act 2010, says the government.", ref: 2, picture: "calendar" }],
      4: [{ value: "Within 12 weeks", label: "of starting or returning to paid work, you can already be eligible for Access to Work, says the government.", ref: 7, picture: "calendar" }],
    },
  },
  "mood": {
    sectionRefs: [[[3, 6], [2]], [[1], [1, 2]], [[3, 2], [3]], [[7], [8]], [[4, 5, 6], [4]]],
    helpRefs: [[1], [2], [3], [7], [4], [5]],
  },
};
