import type { NewsExtras } from "../ischaemic-news";
// Living with secondary cancer features: paragraph references (numbers are positions in each answer's own sources in secondary-cancer-answers.ts) and big figures, all checked on 22 October 2026. No figures about time left.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [2]], [[1], [2]], [[3, 1], [3, 1], [3]], [[1], [3], [1, 4]], [[3], [3]]],
    helpRefs: [[1], [3], [1], [4], [3]],
  },
  "treatment-aims": {
    sectionRefs: [[[1], [2]], [[2], [1]], [[3], [4], [4]], [[2], [2], [4, 2]], [[4], [4]]],
    helpRefs: [[4], [4], [2], [4], [5], [4]],
  },
  "symptoms": {
    sectionRefs: [[[1, 2], [2]], [[3], [7, 4], [5, 6]], [[4], [4]], [[8], [4]], [[5], [5]]],
    helpRefs: [[2], [2], [4], [4], [5], [7]],
  },
  "palliative": {
    sectionRefs: [[[1], [2], [3]], [[1], [2], [1]], [[1], [1]], [[4], [5, 4], [5]], [[1, 6], [1, 7]]],
    helpRefs: [[1], [1], [5], [5], [1], [7]],
    stats: {
      3: [{ value: "Free", label: "is what hospice care costs you: it is paid for through NHS funding and public donation, says Marie Curie.", ref: 4 }],
    },
  },
  "symptom-control": {
    sectionRefs: [[[1], [2, 1]], [[2], [1], [2]], [[2], [2]], [[3], [2], [4]], [[5], [1]]],
    helpRefs: [[1], [1], [1], [2], [3], [4]],
    stats: {
      4: [{ value: "1 to 2 weeks", label: "is how long some people spend in a hospice having pain and other symptoms treated, says Macmillan.", ref: 1, picture: "calendar" }],
    },
  },
  "treatments": {
    sectionRefs: [[[1], [1]], [[2], [2], [3]], [[4], [4]], [[5, 6], [6]], [[2], [2]]],
    helpRefs: [[2], [2], [7], [3], [6]],
  },
  "fatigue": {
    sectionRefs: [[[1], [1]], [[1, 5], [1]], [[1], [1]], [[1], [1]], [[2], [2], [3, 4, 1]]],
    helpRefs: [[1], [1], [1], [1], [2], [1]],
    stats: {
      2: [{ value: "0 to 10", label: "is the scale your specialist nurse may ask you to score your fatigue on, where 10 is the worst possible fatigue, says Macmillan.", ref: 1 }],
    },
  },
  "emergencies": {
    sectionRefs: [[[4, 5], [2]], [[1, 2], [1, 2], [1, 3]], [[4], [4]], [[5], [2]], [[7, 6], [2]]],
    helpRefs: [[2, 4], [1], [1, 2], [1, 3], [4], [8]],
    stats: {
      0: [{ value: "24 hours", label: "a day: the contact number your hospital gives you during chemotherapy is there round the clock, says Macmillan.", ref: 2, picture: "hours" }],
      1: [{ value: "Below 36°C", label: "is a temperature to report straight away, just as much as a high one, says Cancer Research UK.", ref: 1 }],
    },
  },
  "living-well": {
    sectionRefs: [[[4, 2, 7], [3]], [[1], [1], [3, 1]], [[1], [1]], [[2], [2], [2, 3]], [[5, 6], [5], [4]]],
    helpRefs: [[3], [1], [1], [3], [2], [6]],
    stats: {
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 6 }],
    },
  },
  "talking": {
    sectionRefs: [[[1], [3]], [[3], [3], [3]], [[1], [1]], [[2], [2], [2]], [[1], [2], [1]]],
    helpRefs: [[3], [3], [2], [2], [2], [1]],
    stats: {
      3: [{ value: "Under 10", label: "years old is when children most often worry that they caused the cancer or could catch it, says Macmillan.", ref: 2 }],
    },
  },
  "work-money": {
    sectionRefs: [[[1, 2], [1]], [[1, 3], [3], [4]], [[5], [5]], [[6], [7], [6]], [[8], [6]]],
    helpRefs: [[1, 3], [4], [5], [7], [6], [6]],
    stats: {
      0: [{ value: "From diagnosis", label: "you meet the definition of disability under the Equality Act 2010 if you have cancer, says the government.", ref: 2, picture: "calendar" }],
      3: [{ value: "5 years", label: "is how long a prescription exemption certificate lasts in England, and it can be renewed, says Macmillan.", ref: 6, picture: "calendar" }],
    },
  },
  "planning": {
    sectionRefs: [[[1], [2, 3], [3]], [[3, 4], [5]], [[5], [6]], [[3], [7, 3], [5]], [[5], [5], [3, 8]]],
    helpRefs: [[3], [3], [5], [5, 6], [5], [5]],
    stats: {
      3: [{ value: "2 types", label: "of lasting power of attorney in England and Wales: one for financial decisions, one for health and welfare, says Macmillan.", ref: 3 }],
    },
  },
};
