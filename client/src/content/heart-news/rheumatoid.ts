import type { NewsExtras } from "../ischaemic-news";
// Rheumatoid arthritis features: paragraph references (numbers are positions in each answer's own sources in ra-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [1, 4]], [[4, 2], [2, 4]], [[3, 5], [6]], [[5, 4], [2, 5, 1, 4]], [[1], [4]]],
    helpRefs: [[1], [7], [5], [5], [5]],
    stats: {
      3: [
        { value: "More than 450,000", label: "people in the UK have rheumatoid arthritis, about 1 in 100, says NRAS.", ref: 5 },
        { value: "1 in 6", label: "is the chance of the other identical twin developing it when one twin has it, says NRAS.", ref: 5, picture: "one-in", of: 6 },
      ],
    },
    charts: {
      3: { kind: "range", title: "The most common age to start", subtitle: "Age at which rheumatoid arthritis most often develops, in years", from: 40, to: 60, unit: "years of age", sources: "Source: NRAS, What is RA?" },
    },
  },
  "tests": {
    sectionRefs: [[[1], [1, 5, 6]], [[1], [1]], [[1], [2, 3], [1, 3]], [[4], [2, 4]], [[1], [1, 2]]],
    helpRefs: [[1], [1], [5], [5], [4]],
    stats: {
      2: [{ value: "About 1 in 20", label: "people without rheumatoid arthritis also test positive for rheumatoid factor, says the NHS.", ref: 1, picture: "one-in", of: 20 }],
    },
    charts: {
      2: { kind: "donut", title: "A negative test does not rule it out", subtitle: "People with rheumatoid arthritis, out of every 100", value: 30, prefix: "About", subject: "people with rheumatoid arthritis", label: "do not have rheumatoid factor", sources: "Source: NRAS, What is RA?" },
    },
  },
  "beyond-joints": {
    sectionRefs: [[[3, 1], [3]], [[4, 5], [4, 2]], [[2], [6]], [[2], [2, 7]], [[2, 8], [2, 8]]],
    helpRefs: [[2, 8], [2, 8], [7], [8], [4], [4]],
    stats: {
      1: [{ value: "About 1 in 4", label: "people with rheumatoid arthritis have eye problems, says NRAS.", ref: 4, picture: "one-in-four" }],
      4: [{ value: "Around 1 in 5", label: "people with rheumatoid arthritis develop rheumatoid nodules, says Arthritis UK.", ref: 8, picture: "one-in", of: 5 }],
    },
    charts: {
      1: { kind: "bars", title: "Dry eyes are more common", subtitle: "People with dry eyes, out of every 100", bars: [{ label: "General population, about", value: 15 }, { label: "With rheumatoid arthritis, some studies", value: 40, strong: true }], sources: "Source: NRAS, Eye health and RA" },
    },
  },
  "flares": {
    sectionRefs: [[[1, 2], [1]], [[1], [3, 1]], [[1], [1], [1, 4]], [[1], [1, 2]]],
    helpRefs: [[1], [1], [1], [1], [3], [1]],
  },
  "dmards": {
    sectionRefs: [[[1], [1]], [[1, 2], [2, 3]], [[6, 4], [1]], [[1], [1, 3], [5]], [[7], [8, 9]]],
    helpRefs: [[2], [3], [3], [3], [3], [10]],
    stats: {
      1: [{ value: "Once a week", label: "on the same day each week is how methotrexate is taken for rheumatoid arthritis, says the NHS.", ref: 2, picture: "calendar" }],
      3: [{ value: "Every 2 to 3 months", label: "is how often you have blood tests once your methotrexate dose is right, says the NHS.", ref: 3, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "Slow to kick in", subtitle: "Weeks a DMARD usually takes to start working", from: 3, to: 12, unit: "weeks", sources: "Source: NRAS, DMARDs" },
    },
  },
  "biologics": {
    sectionRefs: [[[1, 2], [3]], [[1, 3], [3, 1], [2, 5]], [[4, 7, 1], [1, 4]], [[5, 1], [5, 6]], [[1, 5], [5, 6], [4]]],
    helpRefs: [[5], [5], [5], [5], [5], [4]],
    stats: {
      0: [{ value: "At least 2", label: "DMARDs, usually including methotrexate, are tried before a biologic, says NRAS.", ref: 3 }],
      3: [{ value: "2 to 12 weeks", label: "is how long it may take to start feeling better on adalimumab, says Arthritis UK.", ref: 5, picture: "calendar" }],
    },
    charts: {
      0: { kind: "range", title: "Harder to control", subtitle: "People whose rheumatoid arthritis is more aggressive and harder to get under control, out of every 100", from: 10, to: 20, sources: "Source: NRAS, What is RA?" },
    },
  },
  "steroids": {
    sectionRefs: [[[2], [1, 3]], [[1, 3], [5, 4]], [[1, 3], [3, 2]], [[2], [3]], [[4], [4]]],
    helpRefs: [[2], [3], [3], [3], [3, 1], [4]],
    stats: {
      3: [{ value: "More than 3 weeks", label: "on steroids, or a high dose, means carrying a steroid card, says Arthritis UK.", ref: 3, picture: "calendar" }],
      4: [{ value: "No more than 3", label: "steroid injections into the same part of the body within a year is what your doctor will probably recommend, says Arthritis UK.", ref: 4 }],
    },
  },
  "hands": {
    sectionRefs: [[[1], [3]], [[2], [2], [1]], [[1], [1]], [[1], [3], [4]], [[1], [5]]],
    helpRefs: [[1], [2, 1], [1], [1], [3, 1], [4]],
    stats: {
      4: [{ value: "Every half an hour or so", label: "take a break from a task and notice any aches and pains, says Arthritis UK.", ref: 1, picture: "hours" }],
    },
  },
  "mornings": {
    sectionRefs: [[[1, 2], [1, 2]], [[3], [4, 5]], [[3], [6]], [[3], [3]], [[3, 4], [3]]],
    helpRefs: [[3], [3], [3], [3], [3], [2]],
    stats: {
      0: [{ value: "More than 30 minutes", label: "is how long morning stiffness in rheumatoid arthritis often lasts, says the NHS.", ref: 1, picture: "hours" }],
      4: [{ value: "An hour", label: "before bedtime is when to turn off your devices for a better night's sleep, suggests Arthritis UK.", ref: 3, picture: "hours" }],
    },
  },
  "fatigue": {
    sectionRefs: [[[1], [1, 2]], [[1, 2], [2]], [[3], [3, 1], [2, 3]], [[4], [5, 2]], [[5], [1, 5]]],
    helpRefs: [[3], [1], [4], [2], [3], [5]],
    stats: {
      0: [{ value: "40 in 100", label: "of those with fatigue had persistent and severe fatigue, NRAS found in its 2014 survey.", ref: 2 }],
      3: [{ value: "5 to 10 minutes", label: "of walking or gentle stretching is a good way to start adding exercise, says Arthritis UK.", ref: 4 }],
    },
    charts: {
      0: { kind: "donut", title: "Almost everyone feels it", subtitle: "People with rheumatoid arthritis in an NRAS survey in 2014, out of every 100", value: 89, subject: "people with rheumatoid arthritis surveyed", label: "said they experienced fatigue", sources: "Source: NRAS, Fatigue" },
    },
  },
  "work": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[4], [2], [5]], [[6], [7, 6]], [[5, 4], [8]]],
    helpRefs: [[3], [5], [5], [6, 5], [4], [5]],
    stats: {
      0: [{ value: "12 months", label: "or more is what long-term means under the Equality Act 2010, says the government.", ref: 1, picture: "calendar" }],
      4: [{ value: "Up to 28 weeks", label: "of Statutory Sick Pay from your employer if you cannot work because of your condition, says the NHS.", ref: 8, picture: "calendar" }],
    },
  },
  "infections": {
    sectionRefs: [[[1], [4, 7, 8]], [[2], [5]], [[6], [1]], [[1, 5, 9], [3, 5]], [[1, 4], [1, 3], [1]]],
    helpRefs: [[2, 1], [3], [1], [7, 4], [3, 7], [4]],
    stats: {
      1: [{ value: "Every year", label: "is how often the flu vaccine is given, because the flu virus keeps changing, says Arthritis UK.", ref: 1, picture: "calendar" }],
      2: [{ value: "Around half", label: "is how much the shingles vaccination reduces the risk of shingles, says Arthritis UK.", ref: 1, picture: "half" }],
    },
    charts: {
      1: { kind: "range", title: "How well the flu vaccine works", subtitle: "Vaccinated people in whom the seasonal flu vaccine prevents flu, out of every 100", from: 70, to: 80, sources: "Source: Arthritis UK, Vaccinations" },
    },
  },
  "pregnancy": {
    sectionRefs: [[[1, 2], [3, 1]], [[3, 2, 9], [4, 5]], [[6, 7, 8], [2]], [[1, 2, 4]], [[2], [2, 3]]],
    helpRefs: [[3, 2], [1], [4, 5], [1], [2], [1]],
    stats: {
      1: [{ value: "2 years", label: "of effective contraception after stopping leflunomide, unless a course of medicine removes it sooner, says NRAS.", ref: 5, picture: "calendar" }],
      4: [{ value: "Almost half", label: "of women with rheumatoid arthritis have a flare-up after giving birth, estimates Arthritis UK.", ref: 2, picture: "half" }],
    },
    charts: {
      4: { kind: "donut", title: "Pregnancy often brings relief", subtitle: "Women with rheumatoid arthritis, out of every 100 (three in five), as estimated by Arthritis UK", value: 60, subject: "women with rheumatoid arthritis", label: "notice some improvement during pregnancy", sources: "Source: Arthritis UK, Pregnancy, fertility and arthritis" },
    },
  },
};
