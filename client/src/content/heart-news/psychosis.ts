import type { NewsExtras } from "../ischaemic-news";
// Psychosis features: paragraph references (numbers are positions in each answer's own sources in psychosis-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[1], [1], [1, 3, 9]], [[4], [5]], [[2], [4]], [[1, 6], [7]]],
    helpRefs: [[1, 6], [1], [1], [2, 3], [7, 8]],
    stats: {
      1: [{ value: "3", label: "main symptoms of psychosis: hallucinations, delusions, and disordered thinking and speaking, says the NHS.", ref: 1 }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [3], [3]], [[2], [2]], [[1], [3, 2]], [[1], [2]], [[4], [4]]],
    helpRefs: [[4], [5], [4], [4], [6, 7]],
  },
  "causes": {
    sectionRefs: [[[3, 2], [1, 10]], [[1], [2, 1]], [[4, 1, 2], [2]], [[1], [1, 7]], [[5], [5]]],
    helpRefs: [[6], [1], [2], [5], [5], [8, 9]],
    stats: {
      4: [{ value: "Around 1 in 1,000", label: "mothers are affected by postpartum psychosis after giving birth, says the NHS. Most make a full recovery with the right treatment.", ref: 5 }],
    },
  },
  "early-signs": {
    sectionRefs: [[[1], [4]], [[2], [2]], [[3], [3]], [[1], [1, 2]], [[5], [7, 6]]],
    helpRefs: [[5], [2], [1], [7, 6], [3], [8, 9]],
  },
  "early-intervention": {
    sectionRefs: [[[1], [2]], [[1], [5]], [[2, 5], [4, 3]], [[3, 4], [3], [4]], [[4], [2, 3]]],
    helpRefs: [[2], [3, 4], [3], [1, 5], [6], [7, 8]],
    stats: {
      3: [{ value: "2 weeks", label: "is how soon early intervention in psychosis teams aim to see you after your referral, says Rethink Mental Illness.", ref: 3, picture: "calendar" }],
    },
  },
  "medicines": {
    sectionRefs: [[[1], [3, 4]], [[1], [1, 2]], [[3, 4], [2]], [[1], [1]], [[1], [5, 2], [2]]],
    helpRefs: [[2], [1], [1, 3], [2, 4], [2], [6, 7]],
    stats: {
      0: [{ value: "4 out of 5", label: "people with severe mental illness who take antipsychotics find they are successful in treating their symptoms, says Rethink Mental Illness, citing the Royal College of Psychiatrists.", ref: 4 }],
    },
    charts: {
      1: { kind: "range", title: "Slow-release injections", subtitle: "How often a slow-release antipsychotic injection may be needed", from: 1, to: 4, unit: "weeks between injections", sources: "Source: NHS, Psychosis: treatment" },
    },
  },
  "talking": {
    sectionRefs: [[[1, 2], [2, 3]], [[1], [1, 2], [2]], [[1], [2, 1, 3]], [[2], [3], [3, 1]]],
    helpRefs: [[2], [2], [3], [3, 4], [2], [5, 6]],
    stats: {
      1: [{ value: "At least 16", label: "weekly sessions of individual CBT should be offered for psychosis, says the Royal College of Psychiatrists.", ref: 2, picture: "calendar" }],
      2: [{ value: "At least 10", label: "planned family intervention sessions should be offered, says Rethink Mental Illness.", ref: 3 }],
    },
    charts: {
      2: { kind: "range", title: "How long family support lasts", subtitle: "Months of family intervention support a family should get", from: 3, to: 12, unit: "months", sources: "Source: Rethink Mental Illness, Psychosis" },
    },
  },
  "urgent": {
    sectionRefs: [[[1], [4]], [[1], [1, 5]], [[5, 3], [9]], [[8], [8]], [[6], [2, 7], [3, 2]]],
    helpRefs: [[1], [1], [6, 2], [2, 7], [5, 9], [8]],
    stats: {
      4: [{ value: "24 hours", label: "a day, every day, Samaritans (116 123) and the Shout text line (85258) are open, says the NHS.", ref: 2, picture: "hours" }],
    },
  },
  "recovery": {
    sectionRefs: [[[1], [3, 2]], [[1], [3, 1]], [[1], [1], [5]], [[1], [4]], [[7, 1, 6], [1]]],
    helpRefs: [[1], [3], [1], [5], [6, 7], [8, 9]],
    stats: {
      4: [
        { value: "At least 3 months", label: "of being well may be needed before you can start driving again, says the Royal College of Psychiatrists.", ref: 1, picture: "calendar" },
        { value: "Up to £1,000", label: "is the fine for not telling the DVLA about a medical condition that affects your driving, says the government.", ref: 6 },
      ],
    },
  },
  "substances": {
    sectionRefs: [[[1], [2, 7]], [[2], [8, 4], [2]], [[1, 5], [5]], [[7, 3], [2]], [[4, 3], [4, 2, 6]]],
    helpRefs: [[7, 3], [2], [5], [6], [2], [9, 10]],
    stats: {
      1: [{ value: "As much as double", label: "the risk of schizophrenia with regular cannabis use from a young age, research suggests, says the Royal College of Psychiatrists.", ref: 8 }],
    },
  },
  "physical-health": {
    sectionRefs: [[[2, 3], [3, 2]], [[2], [3]], [[1], [1], [1]], [[5, 2], [5]], [[5], [5, 2]]],
    helpRefs: [[1], [4], [1], [2], [5], [6, 7]],
    stats: {
      1: [{ value: "12 weeks", label: "after starting antipsychotic medicine, you should have a physical health check, then at least once a year, says Rethink Mental Illness.", ref: 3, picture: "calendar" }],
      2: [{ value: "About 45 minutes", label: "is how long the free annual health check appointment may take, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  "family": {
    sectionRefs: [[[4], [1]], [[1], [1], [3]], [[1], [2]], [[5], [4]], [[1], [6], [2]]],
    helpRefs: [[1, 3], [1], [2, 4], [6, 2], [7], [8, 9]],
    stats: {
      4: [{ value: "At least an hour", label: "is how long a free carer's assessment usually lasts, says the NHS.", ref: 6, picture: "hours" }],
    },
  },
};
