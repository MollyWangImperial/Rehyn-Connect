import type { NewsExtras } from "../ischaemic-news";
// Autism in adults features: paragraph references (numbers are positions in each answer's own sources in autism-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[1], [1, 2]], [[1], [2, 5]], [[2], [3, 4]], [[2], [2, 1]]],
    helpRefs: [[6], [6, 5], [2], [7], [8, 9]],
    stats: {
      4: [
        { value: "More than 1 in 100", label: "people are autistic, says the National Autistic Society.", ref: 2, picture: "one-in", of: 100 },
        { value: "At least 700,000", label: "autistic adults and children live in the UK, says the National Autistic Society.", ref: 2 },
      ],
    },
  },
  "signs": {
    sectionRefs: [[[1], [2, 4]], [[1], [2, 5]], [[1], [1]], [[2], [1, 2]], [[1], [3, 1]]],
    helpRefs: [[2], [2], [2], [1], [6, 7]],
  },
  "diagnosis": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[1, 3], [1, 2], [3, 1]], [[1], [1, 4]], [[1], [1]]],
    helpRefs: [[1, 6], [2], [1, 6], [1, 2], [5], [7, 8]],
    stats: {
      2: [{ value: "3 months", label: "is the longest wait for an autism assessment under NICE guidelines in England and Northern Ireland, though many people wait much longer, says the National Autistic Society.", ref: 3, picture: "calendar" }],
    },
  },
  "masking": {
    sectionRefs: [[[1], [2, 1]], [[1], [1]], [[1], [1, 6]], [[3], [4, 3], [3]], [[3], [3, 4, 1], [5]]],
    helpRefs: [[1], [3, 1], [3], [3], [1, 4], [7, 8]],
    stats: {
      3: [{ value: "3 months or more", label: "is how long autistic burnout typically lasts, in research described by the National Autistic Society.", ref: 4, picture: "calendar" }],
    },
  },
  "after-diagnosis": {
    sectionRefs: [[[1], [1]], [[3], [2]], [[2, 4], [4]], [[1], [1]], [[5], [6, 1]]],
    helpRefs: [[2, 3], [2, 4], [1], [1, 6], [1], [7, 8]],
  },
  "sensory": {
    sectionRefs: [[[1, 3], [2, 1]], [[1], [1]], [[1], [1]], [[1], [1]], [[1], [1, 4], [1]]],
    helpRefs: [[1], [1], [1], [4], [1], [5, 6]],
    charts: {
      0: { kind: "range", title: "Sensory differences are common", subtitle: "Autistic people, out of every 100, who research suggests have sensory processing differences: somewhere between just over half and almost all", from: 53, to: 95, sources: "Source: National Autistic Society, Autism and sensory processing" },
    },
  },
  "mental-health": {
    sectionRefs: [[[3, 1, 2], [2]], [[1], [1, 2]], [[1], [2]], [[2, 4, 5, 6], [1, 4], [4]], [[1, 2], [1, 4]]],
    helpRefs: [[2, 4], [2, 5, 6], [4], [1], [1], [7, 8, 9]],
    charts: {
      0: { kind: "bars", title: "How much it gets in the way", subtitle: "Autistic people, out of every 100, who said each had a high impact on their ability to get on with life, in National Autistic Society surveys", bars: [{ label: "Anxiety", value: 59, strong: true }, { label: "Depression", value: 50 }], sources: "Source: National Autistic Society, Anxiety and Depression" },
    },
    stats: {
      1: [{ value: "47 in 100", label: "autistic people fell into the severe anxiety category in a recent National Autistic Society survey.", ref: 1 }],
    },
  },
  "healthcare": {
    sectionRefs: [[[1], [6, 2]], [[2], [2]], [[3], [3]], [[4], [5]], [[1, 7], [7]]],
    helpRefs: [[4, 2], [2], [3], [5], [3], [8, 9]],
  },
  "work": {
    sectionRefs: [[[1, 2], [6, 2]], [[5, 1], [3, 7], [2]], [[3, 2], [3], [2]], [[4], [4, 3]], [[2], [5]]],
    helpRefs: [[3], [2], [4, 3], [5], [2], [8, 9]],
    stats: {
      0: [{ value: "12 months or more", label: "is what long-term means under the Equality Act 2010, says the government.", ref: 6, picture: "calendar" }],
      3: [
        { value: "16 or over", label: "is the age to get Access to Work, if you are in or about to start paid work, says the National Autistic Society.", ref: 3 },
        { value: "Only 1 in 5", label: "disabled people in the UK say they have had support from Access to Work, according to the Buckland Report cited by the National Autistic Society.", ref: 3, picture: "one-in", of: 5 },
      ],
    },
  },
  "relationships": {
    sectionRefs: [[[1, 5], [1], [1]], [[2], [2]], [[3], [2, 6]], [[4], [4]], [[1], [3]]],
    helpRefs: [[3, 2], [3], [4], [1], [3], [7, 8]],
  },
  "routines": {
    sectionRefs: [[[1], [1]], [[2, 4], [3]], [[1], [1]], [[1], [1], [1]], [[5], [4]]],
    helpRefs: [[1], [1], [1], [1], [5], [6, 7]],
  },
  "support": {
    sectionRefs: [[[1], [1, 4]], [[2], [3]], [[5], [5]], [[8], [1]], [[6, 9], [7, 10, 9]]],
    helpRefs: [[4], [2], [3], [8], [9, 10, 6]],
    stats: {
      1: [
        { value: "Over 3,500", label: "active users take part in the National Autistic Society's Online Community, open 24 hours a day.", ref: 2 },
        { value: "More than 60", label: "volunteer-led National Autistic Society branches run across the UK, plus online branches.", ref: 3 },
      ],
      4: [{ value: "24 hours", label: "a day, Samaritans is free to call on 116 123 from any phone, says Samaritans.", ref: 7, picture: "hours" }],
    },
  },
};
