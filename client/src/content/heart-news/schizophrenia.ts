import type { NewsExtras } from "../ischaemic-news";
// Schizophrenia features: paragraph references (numbers are positions in each answer's own sources in schizophrenia-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [3]], [[1], [1]], [[2], [3]], [[1, 4], [4]], [[1, 5], [1]]],
    helpRefs: [[1], [3], [1, 4], [1], [6, 7]],
    stats: {
      2: [{ value: "20 to 30", label: "is the age range in which schizophrenia is most likely to develop, though it also develops in younger and older people, says the Royal College of Psychiatrists.", ref: 3, picture: "calendar" }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1, 2, 3], [1, 2]], [[1], [1], [3]], [[1], [1]], [[2, 3], [1, 2], [3]], [[2, 3], [1]]],
    helpRefs: [[1, 2], [4], [3], [3], [5, 6]],
  },
  "causes": {
    sectionRefs: [[[1], [1, 2]], [[1], [1], [2]], [[1], [1, 3]], [[1, 3], [1, 2], [1]], [[2], [2]]],
    helpRefs: [[2], [1, 4], [4], [4], [5, 6]],
    charts: {
      1: { kind: "bars", title: "Genes are only part of it", subtitle: "Chance of developing schizophrenia, out of every 100 people (1 in 2 for an identical twin, about 1 in 100 in the general population)", bars: [{ label: "Identical twin of someone with it", value: 50, strong: true }, { label: "General population", value: 1 }], sources: "Source: NHS, Schizophrenia: causes" },
    },
    stats: {
      3: [{ value: "As much as double", label: "the risk of being diagnosed with schizophrenia, research suggests, with regular cannabis use from a young age, says the Royal College of Psychiatrists.", ref: 2, picture: "times" }],
    },
  },
  "diagnosis": {
    sectionRefs: [[[1], [1, 2]], [[1], [3], [4, 3]], [[1, 2], [2, 1]], [[2], [3, 2]], [[1], [3]]],
    helpRefs: [[1], [3], [2], [1], [3], [5, 6]],
    stats: {
      1: [{ value: "Within 2 weeks", label: "of referral is when treatment should start, as NICE suggests, says Rethink Mental Illness.", ref: 3, picture: "calendar" }],
      2: [{ value: "At least 1 month", label: "of symptoms, most of the time, is usually needed for a diagnosis, says the Royal College of Psychiatrists.", ref: 2, picture: "calendar" }],
    },
  },
  "medicines": {
    sectionRefs: [[[1], [1, 2, 3], [4]], [[1, 3], [1, 4, 2], [1, 2]], [[1], [1]], [[1, 2], [1, 4], [3]], [[5], [5, 1]]],
    helpRefs: [[5], [1], [1, 4], [5], [5, 2], [6, 7]],
    charts: {
      0: { kind: "donut", title: "Helped by antipsychotics", subtitle: "People with severe mental illness who take antipsychotics, out of every 100 (4 in every 5)", value: 80, subject: "people taking antipsychotics", label: "find they are successful in treating their symptoms", sources: "Source: Rethink Mental Illness, Antipsychotics (citing the Royal College of Psychiatrists)" },
      1: { kind: "range", title: "Depot injections", subtitle: "Weeks between slow-release antipsychotic injections", from: 1, to: 4, unit: "weeks", sources: "Source: NHS, Schizophrenia: treatment" },
    },
    stats: {
      3: [{ value: "1 or 2 years", label: "is how long most people take medicine after their first psychotic episode, and longer if the illness comes back, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "therapy": {
    sectionRefs: [[[1], [2]], [[1], [2, 1], [2, 1]], [[1], [3, 1]], [[2, 1], [3, 4]]],
    helpRefs: [[1], [1], [2], [4, 3], [5, 6]],
    stats: {
      1: [{ value: "At least 16", label: "weekly sessions of individual CBT should be offered, says the Royal College of Psychiatrists.", ref: 2 }],
    },
    charts: {
      2: { kind: "range", title: "How long family intervention runs", subtitle: "Months a family intervention should be carried out for, with at least 10 planned sessions", from: 3, to: 12, unit: "months", sources: "Source: Rethink Mental Illness, Schizophrenia explained" },
    },
  },
  "crisis": {
    sectionRefs: [[[1], [3, 1]], [[7], [2]], [[4], [4]], [[4], [4]], [[5], [4, 6]]],
    helpRefs: [[4], [4], [1, 3], [7, 2], [1, 2]],
    stats: {
      1: [{ value: "24 hours", label: "a day, Samaritans is free to call on 116 123 from any phone, says Samaritans.", ref: 7, picture: "hours" }],
    },
  },
  "physical-health": {
    sectionRefs: [[[3, 4], [6]], [[4], [6, 5]], [[2], [2], [2]], [[1], [1], [6]]],
    helpRefs: [[2], [2], [2], [1], [1], [7, 8]],
    stats: {
      2: [
        { value: "Once a year", label: "your GP surgery should invite you for a free health check if you have schizophrenia, says the NHS.", ref: 2, picture: "calendar" },
        { value: "About 45 minutes", label: "is how long the annual health check appointment may take, says the NHS.", ref: 2, picture: "hours" },
      ],
    },
  },
  "relapse": {
    sectionRefs: [[[1], [2]], [[1], [1], [2]], [[1, 2], [1]], [[1, 2], [4]], [[1, 3], [3]]],
    helpRefs: [[3], [1], [1], [1], [1], [5, 6]],
    charts: {
      0: { kind: "waffle", title: "Different paths", subtitle: "People with schizophrenia, out of every 100 (on average 1, 3 and 1 in every 5)", groups: [{ label: "Get better within 5 years of their first obvious symptoms", count: 20, tone: "green" }, { label: "Get better, but have times when they get worse again", count: 60, tone: "clay" }, { label: "Have troublesome symptoms for long periods", count: 20, tone: "dark" }], sources: "Source: Rethink Mental Illness, Schizophrenia explained" },
    },
    stats: {
      4: [{ value: "More than double", label: "the risk of becoming unwell again and needing hospital, for people with more than one episode who stop antipsychotics, says the Royal College of Psychiatrists.", ref: 3, picture: "times" }],
    },
  },
  "daily-life": {
    sectionRefs: [[[3], [2, 1]], [[4, 2], [5, 2]], [[6], [6, 2]], [[7], [2]], [[1], [8, 2]]],
    helpRefs: [[5, 2], [6], [2, 1], [8], [1], [9, 10]],
    stats: {
      1: [{ value: "12 months or more", label: "is what long-term means under the Equality Act 2010, says the government.", ref: 4, picture: "calendar" }],
      4: [
        { value: "Up to £1,000", label: "is the fine for not telling the DVLA about a medical condition that affects your driving, says the government.", ref: 8 },
        { value: "At least 3 months", label: "well after a relapse, before you may be able to start driving again, says the Royal College of Psychiatrists.", ref: 2, picture: "calendar" },
      ],
    },
  },
  "carers": {
    sectionRefs: [[[1], [1]], [[2], [4]], [[4], [4]], [[2, 3, 1], [1, 8]], [[5, 6], [7, 5, 3]]],
    helpRefs: [[1], [2, 4], [1, 3], [5], [3], [9, 10]],
    stats: {
      4: [
        { value: "At least an hour", label: "is how long a carer's assessment usually lasts, say the NHS and Carers UK.", ref: 5, picture: "hours" },
        { value: "35 hours a week", label: "of caring, for someone who gets certain benefits, can qualify you for Carer's Allowance, says the government.", ref: 7, picture: "hours" },
      ],
    },
  },
  "support": {
    sectionRefs: [[[1], [2, 4]], [[1], [2]], [[2, 3], [2]], [[3, 4], [1]], [[3, 4], [5]]],
    helpRefs: [[2, 4], [2], [2], [4], [2, 1], [6, 7]],
    stats: {
      4: [{ value: "24 hours", label: "a day, Samaritans is free to call on 116 123 from any phone, says Samaritans.", ref: 5, picture: "hours" }],
    },
  },
};
