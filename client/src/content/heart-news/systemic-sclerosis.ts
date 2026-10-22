import type { NewsExtras } from "../ischaemic-news";
// Systemic sclerosis features: paragraph references (numbers are positions in each answer's own sources in ssc-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[3, 2], [3], [2]], [[4], [1, 6], [5]], [[2], [2], [4]], [[3, 1, 6], [1, 6]], [[2, 4], [2]]],
    helpRefs: [[4], [2], [2], [1], [1]],
    stats: {
      3: [
        { value: "Around 19,000", label: "people in the UK have scleroderma, says SRUK.", ref: 3 },
        { value: "4 to 5 women", label: "for every man are diagnosed with systemic sclerosis, says SRUK.", ref: 6 },
      ],
    },
    charts: {
      3: { kind: "range", title: "When it usually starts", subtitle: "Ages at which systemic sclerosis usually develops, in years", from: 30, to: 50, unit: "years of age", sources: "Source: NHS, Scleroderma" },
    },
  },
  "raynauds": {
    sectionRefs: [[[1], [1], [3]], [[1, 4], [1]], [[1], [1]], [[5, 4, 2], [5]], [[3], [6]]],
    helpRefs: [[3], [3], [3], [3], [3]],
    stats: {
      0: [{ value: "Around 10 million", label: "people in the UK are thought to have Raynaud's, says SRUK.", ref: 1 }],
      3: [{ value: "More than 9 in 10", label: "people with systemic sclerosis have Raynaud's, says SRUK.", ref: 5 }],
    },
    charts: {
      2: { kind: "range", title: "Most Raynaud's is primary", subtitle: "People with Raynaud's who have the primary type, out of every 100", from: 80, to: 90, sources: "Source: SRUK, What is Raynaud's?" },
    },
  },
  "types": {
    sectionRefs: [[[4], [4, 2]], [[1, 3], [1], [1, 2]], [[2, 1], [2, 1], [5]], [[2]], [[2, 4], [2]]],
    helpRefs: [[5], [5], [5], [5]],
  },
  "organs": {
    sectionRefs: [[[1], [6]], [[4, 1], [4]], [[2], [2], [2]], [[3], [3]], [[5], [5]]],
    helpRefs: [[4], [2], [3], [5], [5]],
    stats: {
      2: [{ value: "Up to half", label: "of people with systemic sclerosis have some form of lung involvement, says SRUK.", ref: 2, picture: "half" }],
      3: [{ value: "Around 1 in 10", label: "people with scleroderma may develop pulmonary arterial hypertension, says SRUK.", ref: 3, picture: "one-in", of: 10 }],
    },
    charts: {
      1: { kind: "donut", title: "The gut is often involved", subtitle: "People with systemic sclerosis, out of every 100 (up to 90)", value: 90, prefix: "Up to", subject: "people with systemic sclerosis", label: "have some form of gut involvement", sources: "Source: SRUK, Gastrointestinal tract involvement in systemic sclerosis" },
      4: { kind: "range", title: "Rare, but serious", subtitle: "People with systemic sclerosis who develop a renal crisis, out of every 100", from: 5, to: 10, sources: "Source: SRUK, Kidney involvement in systemic sclerosis" },
    },
  },
  "medicines": {
    sectionRefs: [[[1], [2]], [[1, 3], [1], [1]], [[4], [4], [4]], [[1], [1]], [[2], [4], [5]]],
    helpRefs: [[4], [4], [4], [4], [4], [1]],
    stats: {
      2: [{ value: "Up to 4 months", label: "may pass before you notice the benefit of mycophenolate, says Arthritis UK.", ref: 4, picture: "calendar" }],
    },
  },
  "raynauds-care": {
    sectionRefs: [[[1], [1, 2], [9]], [[1, 5], [1], [2]], [[5], [4]], [[3], [3, 8], [3, 7]], [[6], [6]]],
    helpRefs: [[1], [1], [3, 8], [3, 7], [2], [2]],
    stats: {
      1: [{ value: "Up to 3 weeks", label: "for some Raynaud's medicines to take full effect, says SRUK.", ref: 1, picture: "calendar" }],
      2: [{ value: "3 to 5 days", label: "in a row is the usual course of iloprost through a drip, says SRUK.", ref: 4, picture: "calendar" }],
    },
    charts: {
      3: { kind: "donut", title: "Ulcers are common", subtitle: "People with systemic sclerosis, out of every 100 (around 45)", value: 45, prefix: "Around", subject: "people with systemic sclerosis", label: "develop ulcers", sources: "Source: SRUK, Skin in systemic sclerosis" },
    },
  },
  "checks": {
    sectionRefs: [[[2], [1]], [[4], [6], [1, 8]], [[3], [3], [5]], [[7], [7]], [[8]]],
    helpRefs: [[1], [3], [7], [8], [8]],
    stats: {
      0: [{ value: "Once a year", label: "is how often to have check-ups with your doctor, preferably, says Arthritis UK.", ref: 1, picture: "calendar" }],
      4: [{ value: "6 months", label: "is how far back to compare what you can do, such as climbing stairs, suggests SRUK.", ref: 8, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "How long an echo takes", subtitle: "The most common type of echocardiogram, in minutes", from: 30, to: 40, unit: "minutes", sources: "Source: NHS, Echocardiogram" },
    },
  },
  "therapy": {
    sectionRefs: [[[1], [2]], [[1], [3], [3, 4, 1]], [[1], [7]], [[4], [1], [3]], [[6], [5]]],
    helpRefs: [[2], [1], [4], [1], [3], [5]],
    stats: {
      2: [{ value: "Once or twice a day", label: "is how often to do mouth stretching exercises for best effects, says SRUK.", ref: 7, picture: "calendar" }],
    },
  },
  "warmth": {
    sectionRefs: [[[1], [2, 4], [5]], [[1, 2], [1], [2]], [[1], [1], [1]], [[1], [1]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1], [3], [3]],
    stats: {
      3: [{ value: "18 degrees", label: "is the temperature to heat rooms you use a lot to, if you can, says SRUK.", ref: 1 }],
      4: [{ value: "Up to 20 minutes", label: "is how long one cigarette can lower your body temperature, by up to one degree, says SRUK.", ref: 1, picture: "hours" }],
    },
  },
  "eating": {
    sectionRefs: [[[2], [2], [1]], [[2], [2], [3]], [[2, 4]], [[2], [1]], [[6, 3], [7], [5]]],
    helpRefs: [[2], [2], [2], [4], [3], [5]],
    stats: {
      1: [{ value: "6 small meals", label: "a day instead of three larger ones, suggests Arthritis UK.", ref: 2 }],
    },
    charts: {
      0: { kind: "range", title: "The gullet is usually involved", subtitle: "People with systemic sclerosis whose gullet is affected, out of every 100", from: 80, to: 90, sources: "Source: SRUK, Gastrointestinal tract involvement in systemic sclerosis" },
      2: { kind: "range", title: "Raise the head of the bed", subtitle: "How far to raise the head of the bed, in centimetres", from: 10, to: 20, unit: "centimetres", sources: "Source: NHS, Heartburn and acid reflux" },
    },
  },
  "urgent": {
    sectionRefs: [[[1], [1], [1]], [[1], [7]], [[5], [2]], [[4], [3]], [[8], [6]]],
    helpRefs: [[1], [1], [5], [2], [3, 4], [8]],
    stats: {
      1: [{ value: "Every other day", label: "at least, is how often to measure your blood pressure if you are at risk, says SRUK.", ref: 1, picture: "calendar" }],
      4: [{ value: "999", label: "is the number to call if you need emergency assistance, says SRUK.", ref: 6 }],
    },
    charts: {
      0: { kind: "range", title: "Rare, but serious", subtitle: "People with systemic sclerosis who develop a renal crisis, out of every 100", from: 5, to: 10, sources: "Source: SRUK, Kidney involvement in systemic sclerosis" },
    },
  },
  "support": {
    sectionRefs: [[[1], [1], [2]], [[2], [3], [2]], [[4], [5, 6]], [[8], [9]], [[7], [7]]],
    helpRefs: [[2], [2, 3], [4], [5, 6], [8], [7]],
    stats: {
      2: [{ value: "9am to 7pm", label: "365 days a year, the free SRUK helpline on 0800 311 2756 is open, says SRUK.", ref: 4, picture: "hours" }],
      4: [{ value: "116 123", label: "is the number to call Samaritans, says the NHS.", ref: 7 }],
    },
    charts: {
      1: { kind: "donut", title: "You are not alone", subtitle: "People with a long-term physical health condition, out of every 100 (at least 30)", value: 30, prefix: "At least", subject: "people with a long-term physical health condition", label: "also have a mental health condition", sources: "Source: SRUK, Emotional impact of scleroderma" },
    },
  },
};
