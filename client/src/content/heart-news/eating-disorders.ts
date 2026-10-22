import type { NewsExtras } from "../ischaemic-news";
// Eating disorders features: paragraph references (numbers are positions in each answer's own sources in eating-answers.ts), charts and big figures, all checked on 22 October 2026. No weights, BMI figures or calorie numbers, following Beat's media guidance.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-they-are": {
    sectionRefs: [[[1], [2]], [[2, 3], [2, 7]], [[3, 2], [4, 5]], [[6]], [[2], [1]]],
    helpRefs: [[1], [2], [2], [1], [1]],
    stats: {
      3: [{ value: "About 1 in 20", label: "children, young people and adults in the UK are likely to be living with an eating disorder, Beat estimates.", ref: 6, picture: "one-in", of: 20 }],
    },
    charts: {
      2: { kind: "range", title: "When eating disorders most often start", subtitle: "The ages at which eating disorders most commonly start, though they can happen at any age", from: 13, to: 17, unit: "years old", sources: "Source: NICE, Eating disorders: what is an eating disorder? (information for the public)" },
    },
  },
  "types": {
    sectionRefs: [[[3], [3, 4]], [[5, 1], [6]], [[7, 8], [8, 7]], [[1, 9], [1, 9], [9]], [[10, 1], [2]]],
    helpRefs: [[11], [11], [5], [6, 10], [9]],
  },
  "signs": {
    sectionRefs: [[[1], [1], [3]], [[1], [2]], [[2], [2, 4]], [[1]], [[5], [2, 5]]],
    helpRefs: [[7], [7], [5], [6], [8]],
    stats: {
      0: [{ value: "Around 1 in 4", label: "people with an eating disorder are male, according to an estimate from existing research quoted by Beat.", ref: 3, picture: "one-in", of: 4 }],
    },
  },
  "causes": {
    sectionRefs: [[[1, 2], [2]], [[1], [1], [1, 3, 4]], [[5], [6]], [[2], [7, 8]], [[9], [10]]],
    helpRefs: [[9], [7, 1], [12], [10], [11]],
  },
  "getting-help": {
    sectionRefs: [[[2], [1]], [[3], [4, 3]], [[1, 3], [3, 5]], [[3, 5], [3, 8]], [[3, 6, 7], [6]]],
    helpRefs: [[2], [3], [1], [3], [3], [3]],
  },
  "treatments": {
    sectionRefs: [[[1], [2]], [[3], [4], [4]], [[5], [6, 7, 8], [7, 4, 1]], [[9], [10]], [[2, 11], [4]]],
    helpRefs: [[3], [4], [7], [4, 14], [12]],
    stats: {
      1: [{ value: "Up to 40 weeks", label: "of weekly sessions is how long CBT for anorexia usually lasts, says the NHS.", ref: 4, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "Guided self-help for binge eating disorder", subtitle: "Short sessions, of about 20 minutes each, that people generally have with a practitioner", from: 4, to: 9, unit: "sessions", sources: "Source: NICE, Binge-eating disorder (information for the public)" },
    },
  },
  "physical-health": {
    sectionRefs: [[[2, 1, 3], [4, 3]], [[1], [1]], [[5], [1, 6]], [[5, 7], [7]], [[5, 1], [8, 9]]],
    helpRefs: [[5], [5], [1, 6], [6], [7], [8, 9]],
    stats: {
      3: [{ value: "At least once a year", label: "is how often someone with anorexia who is not having treatment should have a GP check-up, says NICE.", ref: 7, picture: "calendar" }],
    },
  },
  "recovery": {
    sectionRefs: [[[1], [2, 3]], [[1], [2]], [[4], [1]], [[5], [5]], [[1], [1, 6]]],
    helpRefs: [[1], [5], [1], [1], [1], [1]],
    stats: {
      0: [{ value: "Even after 20 years", label: "of severe anorexia, full recovery can happen, says the Royal College of Psychiatrists.", ref: 3, picture: "calendar" }],
    },
  },
  "family": {
    sectionRefs: [[[1], [1]], [[3, 2], [3, 2]], [[4], [2, 4]], [[5, 9], [6, 5]], [[7], [5, 8]]],
    helpRefs: [[1], [1, 2], [3, 2], [2], [4], [7, 5]],
    charts: {
      3: { kind: "range", title: "Family therapy for young people with anorexia", subtitle: "Sessions usually offered over a year, with the schedule checked regularly", from: 18, to: 20, unit: "sessions", sources: "Source: NHS, Anorexia nervosa: treatment" },
    },
  },
  "talking": {
    sectionRefs: [[[1], [1]], [[1], [1, 2]], [[1], [1]], [[3], [3], [3]], [[4]]],
    helpRefs: [[1], [1], [1], [1], [3], [3]],
    stats: {
      4: [{ value: "2 in 3", label: "people who answered Beat's 2025 survey said they wouldn't feel comfortable talking to their line manager or a colleague about their eating disorder.", ref: 4 }],
    },
  },
  "urgent": {
    sectionRefs: [[[1], [2]], [[3, 6], [4]], [[3, 6], [3, 2]], [[4], [5, 4, 7], [3, 6]], [[4], [4]]],
    helpRefs: [[3, 6], [3, 6], [5, 6], [4, 7], [3, 2], [4]],
    stats: {
      3: [{ value: "24 hours", label: "a day, every day, Samaritans (116 123) and the Shout text line (85258) are open, says the NHS.", ref: 4, picture: "hours" }],
    },
  },
  "support": {
    sectionRefs: [[[1], [1]], [[1], [2, 3]], [[1], [1]], [[4], [5, 6]], [[8, 7], [8, 7]]],
    helpRefs: [[1], [1], [2], [3], [1], [4, 6]],
    stats: {
      0: [{ value: "3pm to 8pm", label: "Monday to Friday, Beat's phone Helplines are open. Calls are free from UK landlines and mobiles, says Beat.", ref: 1, picture: "hours" }],
    },
  },
};
