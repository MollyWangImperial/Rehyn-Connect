import type { NewsExtras } from "../ischaemic-news";
// Bladder pain syndrome features: paragraph references (numbers are positions in each answer's own sources in bps-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[1], [1, 4]], [[1], [1]], [[1], [3, 2]]],
    helpRefs: [[1], [1], [1], [2], [2]],
    stats: {
      2: [{ value: "40 or above", label: "is the age bladder pain syndrome usually affects, and it is more common in women than men, says the NHS.", ref: 1 }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [1]], [[2], [1]], [[1], [2]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1], [1]],
  },
  "diagnosis": {
    sectionRefs: [[[1], [2]], [[1], [1]], [[3, 4], [4]], [[4], [5, 6]], [[7], [7]]],
    helpRefs: [[4], [7], [7], [7], [4], [6]],
    charts: {
      2: { kind: "bars", title: "How long a cystoscopy takes", subtitle: "The usual length of each kind, in minutes, as the NHS gives it", bars: [{ label: "Flexible, up to", value: 15 }, { label: "Rigid, around", value: 30, strong: true }], max: 30, ticks: [0, 10, 20, 30], unit: " minutes", sources: "Source: NHS, How a cystoscopy is done" },
    },
    stats: {
      3: [{ value: "1 to 2 weeks", label: "is how long biopsy results from a cystoscopy usually take, says the NHS.", ref: 5, picture: "calendar" }],
      4: [{ value: "Three days", label: "in a row is how long BAUS asks you to keep a bladder diary, including work or rest days.", ref: 7, picture: "calendar" }],
    },
  },
  "triggers": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[3], [4]], [[1], [5]], [[1, 4]]],
    helpRefs: [[1], [1], [1], [2], [1]],
  },
  "self-care": {
    sectionRefs: [[[1], [3]], [[1], [2]], [[2], [2]], [[1], [4]], [[1, 5]]],
    helpRefs: [[1], [2], [1], [1], [4], [1, 5]],
    stats: {
      2: [{ value: "500ml", label: "is the least a measuring jug for a bladder diary should ideally hold, says BAUS.", ref: 2 }],
    },
  },
  "medicines": {
    sectionRefs: [[[1], [1]], [[2], [2, 3], [4]], [[6, 7], [6, 7]], [[1], [8]], [[5], [3, 4]]],
    helpRefs: [[2], [4], [3], [2], [5], [3]],
    charts: {
      1: { kind: "bars", title: "Amitriptyline doses for pain", subtitle: "Milligrams a day for adults, as the NHS gives them", bars: [{ label: "Usual starting dose", value: 10 }, { label: "Maximum for treating pain", value: 75, strong: true }], max: 75, ticks: [0, 25, 50, 75], unit: "mg", sources: "Source: NHS, How and when to take amitriptyline for pain and migraine" },
    },
    stats: {
      1: [{ value: "4 to 6 weeks", label: "is how long it can take to feel the full benefit of amitriptyline as a painkiller, says the NHS.", ref: 4, picture: "calendar" }],
    },
  },
  "bladder-treatments": {
    sectionRefs: [[[1, 4], [2]], [[2], [2]], [[2], [2]], [[3], [3]], [[1], [1]]],
    helpRefs: [[2], [2], [2], [2], [2], [3]],
    charts: {
      1: { kind: "bars", title: "Holding on after an instillation", subtitle: "Minutes to try not to pee, so the medicine reaches the whole lining, as BAUS gives them", bars: [{ label: "At least", value: 15 }, { label: "If possible", value: 90, strong: true }], max: 90, ticks: [0, 30, 60, 90], unit: " minutes", sources: "Source: BAUS, Instillations for painful bladder conditions" },
    },
    stats: {
      2: [{ value: "1 to 4 weeks", label: "is the usual gap between bladder instillations in a course, says BAUS.", ref: 2, picture: "calendar" }],
    },
  },
  "pain-support": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[2], [2]], [[3, 4], [3]]],
    helpRefs: [[2], [1], [3], [2, 5], [5]],
    stats: {
      1: [{ value: "12 weeks", label: "of struggling with pain is when the NHS says many services can help, starting with a GP.", ref: 2, picture: "calendar" }],
    },
  },
  "flares": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[5], [1]], [[4, 3], [3]], [[1]]],
    helpRefs: [[3], [3], [3], [3], [1]],
  },
  "sex-relationships": {
    sectionRefs: [[[1], [2]], [[1], [3]], [[3], [3]], [[4], [4]], [[2]]],
    helpRefs: [[3], [3], [3], [3], [4]],
  },
  "work": {
    sectionRefs: [[[1], [1]], [[2]], [[3], [3]], [[4], [4]], [[5, 6]]],
    helpRefs: [[1], [2], [3], [4], [4]],
    stats: {
      1: [{ value: "£5", label: "covers the cost of Bladder Health UK's Priority Access Card and postage, or you can send a stamped addressed envelope instead.", ref: 2 }],
    },
  },
  "mood": {
    sectionRefs: [[[3], [2]], [[1], [4]], [[3, 2], [3]], [[5, 6], [5]]],
    helpRefs: [[3], [4], [3], [3], [6, 5], [5]],
    stats: {
      3: [{ value: "116 123", label: "is Samaritans' number, free to call from any phone, at any time, says Samaritans.", ref: 6 }],
    },
  },
};
