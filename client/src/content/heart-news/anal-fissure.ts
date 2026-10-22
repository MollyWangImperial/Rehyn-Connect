import type { NewsExtras } from "../ischaemic-news";
// Anal fissure features: paragraph references (numbers are positions in each answer's own sources in fissure-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [4]], [[2], [3]], [[2, 1], [5]], [[4, 1], [6]]],
    helpRefs: [[1], [1], [1], [1], [1]],
    stats: {
      1: [{ value: "More than 6 weeks", label: "is when a fissure is called chronic, meaning persistent, says Milton Keynes University Hospital.", ref: 2, picture: "calendar" }],
      2: [{ value: "About 1 in 350", label: "people are affected by an anal fissure, says Guts UK.", ref: 5 }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [3, 6]], [[1], [7]], [[5, 4], [3]], [[5], [5]], [[1, 2], [2]]],
    helpRefs: [[1], [2], [2], [2], [2]],
  },
  "causes": {
    sectionRefs: [[[1, 2], [1]], [[2], [3]], [[1, 2], [3]], [[1], [3], [4, 6]], [[1], [7]]],
    helpRefs: [[1], [5], [5], [3], [6]],
    stats: {
      2: [{ value: "About 1 in 10", label: "anal fissures occur during childbirth, says Milton Keynes University Hospital.", ref: 2, picture: "one-in", of: 10 }],
    },
    charts: {
      4: { kind: "range", title: "The most common ages", subtitle: "Anal fissures are more common in people aged 15 to 40, and in young children, says the NHS", from: 15, to: 40, unit: " years old", sources: "Source: NHS, Anal fissure" },
    },
  },
  "checks": {
    sectionRefs: [[[1], [2]], [[2], [5]], [[1]], [[3], [4, 3]], [[6], [2, 7]]],
    helpRefs: [[1], [6], [2], [5]],
    stats: {
      0: [{ value: "7 days", label: "of treating it yourself with no improvement is when the NHS says to see a GP.", ref: 1, picture: "calendar" }],
    },
  },
  "softer-stools": {
    sectionRefs: [[[2], [5]], [[3], [5, 3], [5, 6]], [[5, 2], [2]], [[4], [4], [4, 1]], [[2]]],
    helpRefs: [[3], [5], [4], [4], [2], [1]],
    stats: {
      2: [{ value: "At least 2 litres", label: "of fluid a day, or 10 to 12 cups, is the aim for adults, says Milton Keynes University Hospital.", ref: 2 }],
      3: [{ value: "7 days", label: "at most for laxatives bought without a prescription, says the NHS.", ref: 4, picture: "calendar" }],
    },
    charts: {
      1: { kind: "bars", title: "Fibre: the advice and the average", subtitle: "Grams of fibre a day for adults, as the NHS gives them", bars: [{ label: "Government guidelines", value: 30, strong: true }, { label: "Average adult intake, about", value: 20 }], max: 40, ticks: [0, 10, 20, 30, 40], unit: "g", sources: "Source: NHS, How to get more fibre into your diet" },
    },
  },
  "creams": {
    sectionRefs: [[[1], [5, 6]], [[2, 6], [2, 10], [6, 8]], [[6, 4], [3, 4], [2, 9]], [[3, 5], [3, 4]], [[5], [7]]],
    helpRefs: [[6, 3], [3], [2, 10], [6, 8], [6, 9], [10]],
    stats: {
      1: [{ value: "Up to 6 in 10", label: "people have a headache after applying GTN ointment, usually gone within 30 minutes, says Milton Keynes University Hospital.", ref: 2 }],
      2: [{ value: "6 to 8 weeks", label: "is how long diltiazem cream is usually used, twice a day, says the NHS.", ref: 3, picture: "calendar" }],
    },
    charts: {
      1: { kind: "bars", title: "Healing a chronic fissure", subtitle: "People with a chronic anal fissure who are cured, out of every 100, as Milton Keynes University Hospital gives them", bars: [{ label: "With a course of GTN ointment, about", value: 70, strong: true }, { label: "With warm baths and anaesthetic cream, about", value: 50 }], sources: "Source: Milton Keynes University Hospital, Anal fissure" },
    },
  },
  "pain": {
    sectionRefs: [[[1, 4], [8, 5]], [[1, 5], [4, 3]], [[5, 4, 6], [5]], [[1], [7]], [[4, 5], [4]]],
    helpRefs: [[1, 8], [1], [4, 5], [2], [5], [5]],
    stats: {
      1: [{ value: "15 minutes", label: "in a warm bath can soothe and help ease the pain, says University Hospitals Plymouth.", ref: 4 }],
      2: [{ value: "5 to 7 days", label: "at a time is as long as an anaesthetic cream should be used, says Milton Keynes University Hospital.", ref: 5, picture: "calendar" }],
    },
  },
  "further": {
    sectionRefs: [[[1], [8]], [[3, 5], [3, 4, 2], [2, 4]], [[3, 5], [3, 5], [2, 6]], [[6], [2]], [[6, 7], [6, 7]]],
    helpRefs: [[2, 5], [7], [7], [6], [7]],
    stats: {
      1: [{ value: "About 3 months", label: "is how long the effect of a Botox injection lasts, says Cambridge University Hospitals.", ref: 2, picture: "calendar" }],
      4: [{ value: "7 to 10 days", label: "of a little blood on the toilet paper is expected after the operation, says York Hospital.", ref: 6, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "How often each one works", subtitle: "Fissures healed or cured, out of every 100, as Milton Keynes University Hospital gives them", bars: [{ label: "Botox injection, about", value: 70 }, { label: "Lateral sphincterotomy, at least", value: 90, strong: true }], sources: "Source: Milton Keynes University Hospital, Anal fissure" },
    },
  },
  "toilet": {
    sectionRefs: [[[1, 5], [2]], [[2], [3]], [[3]], [[1, 4, 2], [4, 2]], [[2, 3]]],
    helpRefs: [[1], [2], [3], [4, 2], [4], [3]],
    stats: {
      1: [{ value: "5 minutes", label: "is the most time to spend sitting on the toilet, suggests University Hospitals Plymouth.", ref: 2 }],
    },
  },
  "coming-back": {
    sectionRefs: [[[1], [1, 3]], [[1], [4, 5]], [[1, 2, 3], [1, 3]], [[6, 7], [6]]],
    helpRefs: [[1, 4], [6], [6], [6], [1]],
    stats: {
      3: [{ value: "At least 30g", label: "of fibre a day is what adults should aim to eat, says the NHS.", ref: 6 }],
    },
    charts: {
      2: { kind: "bars", title: "How often it comes back", subtitle: "People who have one or more recurrences after successful treatment, out of every 100, as two NHS hospital leaflets give them", bars: [{ label: "After GTN ointment, up to", value: 30 }, { label: "After diltiazem cream, up to", value: 50, strong: true }], sources: "Sources: Milton Keynes University Hospital and North Cumbria Integrated Care, anal fissure leaflets" },
    },
  },
  "long-lasting": {
    sectionRefs: [[[1], [2]], [[1], [4]], [[1], [3, 6]], [[5], [5]], [[7, 3]]],
    helpRefs: [[3], [1], [3], [3], [7]],
    stats: {
      0: [{ value: "Around half", label: "of new fissures heal within 6 to 8 weeks of simple treatment, says the NICE Clinical Knowledge Summary.", ref: 2, picture: "half" }],
    },
    charts: {
      0: { kind: "donut", title: "When a fissure lingers", subtitle: "People with a new anal fissure, out of every 100", value: 40, prefix: "About", subject: "people with a new anal fissure", label: "go on to have a chronic one", sources: "Source: NICE Clinical Knowledge Summaries, Anal fissure prognosis" },
    },
  },
  "urgent": {
    sectionRefs: [[[1], [2]], [[3], [5]], [[2, 3], [4]], [[2, 3], [3]], [[2]]],
    helpRefs: [[1], [3], [2], [2, 3], [2, 3], [3]],
    stats: {
      1: [{ value: "3 weeks", label: "of blood in your poo is when the NHS says to see a GP.", ref: 3, picture: "calendar" }],
    },
  },
};
