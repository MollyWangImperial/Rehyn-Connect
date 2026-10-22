import type { NewsExtras } from "../ischaemic-news";
// Paget's disease of bone features: paragraph references (numbers are positions in each answer's own sources in pagets-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [1, 2]], [[1], [2]], [[1, 2], [4]], [[1, 3, 4], [1, 3]], [[1, 5], [4, 1]]],
    helpRefs: [[1], [6], [1], [7]],
    stats: {
      3: [{ value: "About 1%", label: "of people in the UK over the age of 55 are thought to be affected, says the Paget's Association.", ref: 3 }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1, 2], [3]], [[1], [4]], [[2, 1], [2]], [[1], [1]], [[1]]],
    helpRefs: [[1], [1], [1], [1], [5]],
    stats: {
      0: [{ value: "Less than 10%", label: "of people with signs of Paget's disease on an X-ray come to medical attention, it has been estimated, says the Paget's Association.", ref: 3 }],
    },
    charts: {
      1: { kind: "bars", title: "What 88 people had when referred", subtitle: "UK patients referred to a specialist clinic between 2005 and 2013, out of every 100", bars: [{ label: "Had bone pain", value: 74, strong: true }, { label: "Had no symptoms", value: 22 }], sources: "Source: Paget's Association, Clinical presentation of Paget's disease" },
    },
  },
  "diagnosis": {
    sectionRefs: [[[2], [2]], [[1, 2], [1]], [[1, 3], [2]], [[1, 2], [1, 2]], [[1], [2, 3]]],
    helpRefs: [[2], [2], [2], [2]],
    stats: {
      0: [{ value: "Over 50", label: "is the age most people are when they are diagnosed with Paget's disease, says the Paget's Association.", ref: 2 }],
    },
    charts: {
      2: { kind: "bars", title: "Why one X-ray is not enough", subtitle: "Bones affected by Paget's disease that X-rays detected, out of every 100", bars: [{ label: "X-rays of several target sites", value: 93, strong: true }, { label: "A single X-ray of the abdomen", value: 79 }], sources: "Source: Paget's Association, Diagnosis" },
    },
  },
  "complications": {
    sectionRefs: [[[2], [3]], [[1, 2], [1, 2]], [[1, 4], [1]], [[1, 2], [2, 5]], [[1, 2], [1, 4]]],
    helpRefs: [[4], [1], [5], [6], [2]],
    stats: {
      4: [{ value: "1 in 500 to 1 in 1,000", label: "people with Paget's disease are estimated to be affected by bone cancer, a rare complication, says the NHS.", ref: 1 }],
    },
    charts: {
      0: { kind: "bars", title: "What first brings people to a doctor", subtitle: "Presenting features in published studies, out of every 100 cases", bars: [{ label: "Bone pain", value: 52, strong: true }, { label: "Bone deformity", value: 21 }, { label: "Deafness", value: 9 }, { label: "Fracture", value: 8 }], sources: "Source: Paget's Association, Clinical presentation of Paget's disease (a review of published studies)" },
    },
  },
  "bisphosphonates": {
    sectionRefs: [[[1], [3]], [[1, 2], [2]], [[1, 2], [1, 2]], [[2, 1], [2, 1]], [[1, 2], [1, 2]]],
    helpRefs: [[1], [2], [2], [2], [2]],
    stats: {
      2: [{ value: "15 to 30 minutes", label: "is how long a zoledronic acid infusion usually takes, says the Paget's Association.", ref: 2, picture: "hours" }],
    },
  },
  "pain": {
    sectionRefs: [[[1, 2], [1]], [[3], [3]], [[3], [3]], [[4], [4]], [[4], [4, 2]]],
    helpRefs: [[1], [2], [3], [4], [4], [3]],
    stats: {
      0: [{ value: "About 2 in 3", label: "people given bisphosphonate treatment for pain in one UK clinic study had an improvement in their pain, says the Paget's Association.", ref: 5 }],
      3: [{ value: "Up to 20 minutes", label: "at a time is how long to apply warmth to a painful area, says the Paget's Association.", ref: 4, picture: "hours" }],
    },
  },
  "surgery": {
    sectionRefs: [[[1, 2], [4]], [[2], [2]], [[2], [2]], [[1, 2], [5]], [[3, 1], [2]]],
    helpRefs: [[3], [2], [6], [7]],
  },
  "follow-up": {
    sectionRefs: [[[1], [1, 2]], [[3], [4]], [[3], [5, 3]], [[2], [6]]],
    helpRefs: [[1], [2], [6], [2], [7]],
    stats: {
      2: [{ value: "1,324 people", label: "with Paget's disease took part in the PRISM study, which compared intensive and symptom-led treatment, says the Paget's Association.", ref: 3 }],
    },
    charts: {
      0: { kind: "range", title: "When treatment is reviewed", subtitle: "When the response to treatment should be assessed", from: 3, to: 6, unit: "months after treatment", sources: "Source: Paget's Association, Treatment" },
    },
  },
  "activity": {
    sectionRefs: [[[1], [1]], [[3, 2], [2]], [[3], [3]], [[4], [2, 1]], [[1, 2], [5, 6]]],
    helpRefs: [[1], [3], [2], [3], [4], [2]],
    stats: {
      2: [{ value: "2 days a week", label: "at least, for activities that improve strength, balance and flexibility, says the NHS.", ref: 3, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "A week of activity", subtitle: "Minutes a week adults aged 65 and over should aim for, by how hard the activity is", bars: [{ label: "Vigorous, if already active", value: 75 }, { label: "Moderate, such as walking", value: 150, strong: true }], max: 160, ticks: [0, 40, 80, 120, 160], unit: " minutes", sources: "Source: NHS, Physical activity guidelines for older adults" },
    },
  },
  "hearing": {
    sectionRefs: [[[1], [2, 3]], [[1], [4]], [[4], [4]], [[5], [5, 6]], [[6], [6]]],
    helpRefs: [[4], [4], [4], [6], [6, 5]],
    stats: {
      0: [{ value: "8%", label: "of 88 people referred to a UK specialist clinic already had deafness by the time Paget's disease was diagnosed, says the Paget's Association.", ref: 7 }],
      3: [{ value: "About 1 in 7", label: "people live with tinnitus regularly or all the time, according to Tinnitus UK, as quoted by the Paget's Association.", ref: 5, picture: "one-in", of: 7 }],
    },
  },
  "family": {
    sectionRefs: [[[1], [2, 7]], [[2], [3]], [[2, 7], [2]], [[2], [4]]],
    helpRefs: [[5], [5], [2], [6]],
    stats: {
      1: [{ value: "About 1 in 8", label: "people with Paget's disease have a family history of it, according to research funded by the Paget's Association.", ref: 3, picture: "one-in", of: 8 }],
      2: [{ value: "About 7 times", label: "more likely to develop it: the children of people with Paget's disease, compared with people without a family history, says the Paget's Association.", ref: 2, picture: "times" }],
    },
    charts: {
      0: { kind: "bars", title: "A gene behind many family cases", subtitle: "People with Paget's disease found to have changes in the SQSTM1 gene, up to, out of every 100", bars: [{ label: "With a family history", value: 50, strong: true }, { label: "Without a family history", value: 10 }], sources: "Source: Paget's Association, Causes" },
    },
  },
  "support": {
    sectionRefs: [[[1], [1]], [[2], [2, 3]], [[4, 10], [5]], [[6], [7]], [[8, 9], [9, 11, 5]]],
    helpRefs: [[1], [2], [3], [4, 10], [1]],
    stats: {
      2: [{ value: "20%", label: "of people with bone pain in a Paget's Association survey waited more than 5 years for a diagnosis.", ref: 11 }],
      4: [{ value: "2 in 3", label: "people in a Paget's Association survey said bone pain affected their mental health.", ref: 11 }],
    },
  },
};
