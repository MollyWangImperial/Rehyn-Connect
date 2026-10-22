import type { NewsExtras } from "../ischaemic-news";
// Personality disorder (BPD) features: paragraph references (numbers are positions in each answer's own sources in bpd-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 3], [1, 3]], [[2], [1], [1]], [[1], [1, 2]], [[3], [2, 3]], [[2], [1], [1]]],
    helpRefs: [[1], [2], [1], [2], [4, 5]],
    stats: {
      2: [{ value: "10 categories", label: "is how many types personality disorders were split into until 2019, says the Royal College of Psychiatrists.", ref: 1 }],
      3: [{ value: "Around 1 in 20", label: "people live with a personality disorder, research suggests, says Rethink Mental Illness.", ref: 3 }],
    },
    charts: {
      4: { kind: "range", title: "Improving in the long term", subtitle: "People with a borderline personality disorder diagnosis, out of every 100, who improve in the long term, in some studies", from: 50, to: 70, sources: "Source: Royal College of Psychiatrists, Personality disorder" },
    },
  },
  "bpd": {
    sectionRefs: [[[1], [3]], [[1, 2], [3, 4]], [[2], [2]], [[2, 3], [2, 1, 3]], [[1, 3], [4, 3]]],
    helpRefs: [[1], [3], [2], [2], [5, 6]],
    stats: {
      0: [{ value: "Around 1 in 100", label: "people live with BPD, and it is most common in early adulthood, says Rethink Mental Illness.", ref: 3 }],
      1: [{ value: "4 main areas", label: "is how the symptoms of BPD can be grouped, says the NHS.", ref: 1 }],
    },
  },
  "causes": {
    sectionRefs: [[[1, 2]], [[1, 3], [1], [1]], [[2, 1], [1, 5]], [[3], [3, 4]], [[3], [3]]],
    helpRefs: [[1], [3], [6], [7, 8]],
    stats: {
      1: [{ value: "3 parts of the brain", label: "were smaller than expected or unusually active in many people with BPD, in brain scan research described by the NHS.", ref: 1 }],
    },
  },
  "diagnosis": {
    sectionRefs: [[[1], [3, 1]], [[1, 2], [4]], [[2], [3]], [[2, 3], [3, 6]], [[2, 4], [1]]],
    helpRefs: [[1], [1], [4], [2, 5], [2, 4], [7, 8]],
    stats: {
      2: [{ value: "At least 5", label: "of the symptoms in the diagnostic guidelines is when a psychiatrist might diagnose BPD, says Rethink Mental Illness.", ref: 3 }],
    },
  },
  "therapy": {
    sectionRefs: [[[1], [1, 3]], [[1], [2, 1], [5]], [[1], [1, 2]], [[2, 4], [1, 3]], [[1, 2], [2], [2]]],
    helpRefs: [[3, 5], [1], [3], [2], [2], [6, 7]],
    stats: {
      0: [{ value: "At least 3 months", label: "is how long the therapy you are offered should usually last, says Rethink Mental Illness.", ref: 3, picture: "calendar" }],
      1: [{ value: "12 months", label: "of one group and one individual DBT session a week, says the Royal College of Psychiatrists.", ref: 2, picture: "calendar" }],
      2: [{ value: "Around 18 months", label: "is how long a course of mentalisation-based therapy usually lasts, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "medicines": {
    sectionRefs: [[[1, 2, 4], [3]], [[1, 5], [1, 2]], [[1, 3], [3]], [[2, 3, 6], [2]]],
    helpRefs: [[6, 2], [3], [2], [3], [7, 8]],
    stats: {
      2: [{ value: "No longer than 1 week", label: "for a calming medicine started during a crisis, says NICE.", ref: 3, picture: "calendar" }],
    },
  },
  "crisis-plan": {
    sectionRefs: [[[2], [4]], [[2, 1], [1, 2], [3]], [[4], [2, 6]], [[2, 1], [4, 3]], [[1], [5, 6, 7]]],
    helpRefs: [[1, 2], [1, 2], [1, 2], [5], [1], [6, 7]],
    stats: {
      2: [{ value: "24 hours a day", label: "7 days a week, your local NHS urgent mental health helpline is available, says Rethink Mental Illness.", ref: 2, picture: "hours" }],
    },
  },
  "emotions": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[3], [3]], [[4], [4, 5]], [[5, 7], [6, 9]]],
    helpRefs: [[1], [2], [3], [4], [6], [8, 9]],
    stats: {
      0: [{ value: "4 modules", label: "make up DBT: distress tolerance, emotional regulation, interpersonal effectiveness and mindfulness, says the Royal College of Psychiatrists.", ref: 1 }],
      3: [{ value: "At least 5 minutes", label: "of gentle, regular breathing makes a calming exercise, says the NHS, ideally as part of your daily routine.", ref: 4, picture: "hours" }],
    },
  },
  "relationships": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[3]], [[3, 2], [2, 6]], [[3], [4, 5]]],
    helpRefs: [[1, 2], [2], [3], [4], [5], [7, 8]],
  },
  "self-harm": {
    sectionRefs: [[[2, 1], [1, 4]], [[4], [1, 5]], [[2, 3], [5, 6], [4]], [[4], [4]], [[4], [4, 7]]],
    helpRefs: [[5], [4], [4], [4], [3, 6], [8, 9]],
    charts: {
      2: { kind: "range", title: "Talking therapy for self-harm", subtitle: "Sessions of specialist talking therapy for adults who self-harm, though more can be offered if needed", from: 4, to: 10, unit: "sessions", sources: "Source: Rethink Mental Illness, Self-harm" },
    },
  },
  "carers": {
    sectionRefs: [[[1], [1]], [[2], [2, 1]], [[3, 2], [7, 4]], [[1]], [[5], [6, 2]]],
    helpRefs: [[1, 2], [2], [2], [5], [1, 2], [8, 9]],
    stats: {
      4: [{ value: "At least an hour", label: "is how long a carer's assessment usually lasts, and it is free, says the NHS.", ref: 5, picture: "hours" }],
    },
  },
  "support": {
    sectionRefs: [[[2], [1, 8]], [[1], [2]], [[2, 1], [2]], [[3, 4], [5, 6]], [[1], [1, 7]]],
    helpRefs: [[2, 1], [1], [2, 1], [1, 7], [5, 6]],
    stats: {
      1: [{ value: "1 day to 8 weeks", label: "is how long recovery college courses usually last, and they are free, says Rethink Mental Illness.", ref: 1, picture: "calendar" }],
      3: [{ value: "24 hours", label: "a day, Samaritans is free to call on 116 123 from any phone, says Samaritans.", ref: 3, picture: "hours" }],
    },
  },
};
