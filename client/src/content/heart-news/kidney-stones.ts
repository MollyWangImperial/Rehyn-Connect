import type { NewsExtras } from "../ischaemic-news";
// Kidney stones features: paragraph references (numbers are positions in each answer's own sources in kidney-stones-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [3, 4]], [[2], [5, 2]], [[3], [3]], [[3], [3]], [[1, 3], [2, 4]]],
    helpRefs: [[1], [1], [1, 2], [1], [1]],
    stats: {
      1: [{ value: "Less than 2mm", label: "is the size of the majority of stones, says BAUS.", ref: 5 }],
      3: [{ value: "1 in 11", label: "people will get stone symptoms during their lifetime, says BAUS.", ref: 3, picture: "one-in", of: 11 }],
    },
    charts: {
      2: { kind: "range", title: "Calcium stones are the most common", subtitle: "Calcium-based stones, out of every 100 kidney stones", from: 60, to: 80, sources: "Source: BAUS, Kidney stones" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1, 2], [2]], [[2, 4], [1]], [[3], [3]], [[2], [1, 5]], [[2, 4], [1, 6]]],
    helpRefs: [[1], [1], [4], [6], [2]],
  },
  "causes": {
    sectionRefs: [[[2], [3]], [[2, 4], [1, 5]], [[1], [3, 2, 4]], [[3], [4, 6]], [[2, 3], [6]]],
    helpRefs: [[1], [3, 5], [2], [5], [1]],
    stats: {
      3: [{ value: "Around 45", label: "is the peak age for a first stone, says BAUS.", ref: 2 }],
    },
    charts: {
      1: { kind: "range", title: "How much oxalate comes from food", subtitle: "Of the oxalate in your urine, out of every 100 parts", from: 10, to: 15, sources: "Source: BAUS, Dietary advice for stone formers" },
    },
  },
  "tests": {
    sectionRefs: [[[1], [2]], [[2], [2, 3]], [[1], [4, 3]], [[2], [5, 3]], [[3, 2], [2, 7]]],
    helpRefs: [[1], [5], [3], [6], [5]],
    stats: {
      2: [{ value: "Within 24 hours", label: "is when NICE advises a low-dose CT scan for adults with suspected renal colic.", ref: 4, picture: "hours" }],
      3: [{ value: "10 to 20 minutes", label: "is how long a CT scan usually takes, says the NHS.", ref: 5, picture: "hours" }],
    },
  },
  "passing": {
    sectionRefs: [[[3, 2], [1]], [[1], [4]], [[2, 6, 7], [5, 2]], [[1], [8, 2]], [[2], [5, 2]]],
    helpRefs: [[1], [4], [4], [1], [6], [1]],
    stats: {
      2: [{ value: "Once a day", label: "is how tamsulosin is taken for kidney stones, usually 400 micrograms, says the NHS.", ref: 7, picture: "calendar" }],
      4: [{ value: "2 to 3 weeks", label: "with no sign of a stone passing is when BAUS usually recommends active treatment.", ref: 2, picture: "calendar" }],
    },
    charts: {
      0: { kind: "bars", title: "Size and the chance of passing", subtitle: "Stone width in millimetres, as BAUS gives it", bars: [{ label: "Most pass: smaller than", value: 5, strong: true }, { label: "Rarely pass: larger than", value: 7 }], max: 10, ticks: [0, 5, 10], unit: "mm", sources: "Source: BAUS, Ureteroscopy for stone removal" },
    },
  },
  "treatments": {
    sectionRefs: [[[1, 7], [2], [6]], [[1, 3], [3, 2]], [[1, 4], [4]], [[5, 1], [2]], [[8, 2, 7], [2]]],
    helpRefs: [[2], [3], [3], [3, 4], [8], [3, 4]],
    stats: {
      1: [{ value: "30 to 60 minutes", label: "is how long shockwave treatment normally lasts, depending on the size of the stone, says BAUS.", ref: 3, picture: "hours" }],
    },
    charts: {
      0: { kind: "bars", title: "Stone size and the first choice", subtitle: "For stones in the kidney in adults, NICE's size limits in millimetres", bars: [{ label: "Shockwaves offered: under", value: 10 }, { label: "Shockwaves or ureteroscopy: 10 to", value: 20 }, { label: "Keyhole surgery offered: over", value: 20, strong: true }], max: 25, ticks: [0, 5, 10, 15, 20, 25], unit: "mm", sources: "Source: NICE, Renal and ureteric stones (NG118)" },
    },
  },
  "pain": {
    sectionRefs: [[[4], [3]], [[2], [3, 2]], [[5], [6]], [[8, 7], [5, 9]], [[4], [1, 3]]],
    helpRefs: [[4], [5, 6], [5, 7], [6], [1]],
    stats: {
      2: [{ value: "8 tablets", label: "of 500mg paracetamol in 24 hours is the most an adult should take, says the NHS.", ref: 6, picture: "hours" }],
    },
  },
  "urgent": {
    sectionRefs: [[[1], [1]], [[2], [2, 3]], [[4], [5]], [[6, 7], [6]], [[8], [3]]],
    helpRefs: [[1], [2], [4], [4, 5], [4, 5]],
  },
  "fluids": {
    sectionRefs: [[[2], [1, 5]], [[1], [2]], [[3, 2], [4]], [[3, 2], [1, 6, 4]], [[7, 2], [7]]],
    helpRefs: [[1], [1], [2], [2], [1, 2], [7]],
    stats: {
      1: [{ value: "At least 2 litres", label: "of urine a day is what keeping your urine colourless should give you, says BAUS.", ref: 2 }],
    },
    charts: {
      0: { kind: "range", title: "Drinking plenty cuts the risk", subtitle: "How much the risk of forming stones falls, out of every 100", from: 30, to: 40, sources: "Source: BAUS, Dietary advice for stone formers" },
    },
  },
  "food": {
    sectionRefs: [[[2], [1, 2]], [[1, 2], [3, 4, 8]], [[2, 6], [2, 6]], [[5, 7], [2]], [[2, 3], [7, 2]]],
    helpRefs: [[1], [1, 3], [6, 2], [5], [2], [2]],
    stats: {
      2: [{ value: "6g", label: "of salt a day at most for adults, around 1 level teaspoon, says the NHS.", ref: 6 }],
      3: [{ value: "Half", label: "is how much a normal-calcium, low-salt, low-protein diet can cut the risk of stones, says BAUS.", ref: 7, picture: "half" }],
    },
    charts: {
      1: { kind: "bars", title: "How much calcium?", subtitle: "Calcium a day for adults, in milligrams", bars: [{ label: "NHS: adults need", value: 700 }, { label: "BAUS: safe for calcium stone formers, up to", value: 1000, strong: true }, { label: "NICE: normal intake, up to", value: 1200 }], max: 1500, ticks: [0, 500, 1000, 1500], unit: " mg", sources: "Sources: NHS, Calcium; BAUS, Dietary advice for stone formers; NICE, NG118" },
    },
  },
  "coming-back": {
    sectionRefs: [[[1, 2], [1]], [[3], [5]], [[3], [3]], [[2], [5, 2]], [[3, 4], [3]]],
    helpRefs: [[3], [2], [2, 5], [2], [3], [2]],
    stats: {
      1: [{ value: "Almost a third", label: "is how much keeping your urine dilute and colourless cuts the risk of another stone, says BAUS.", ref: 3 }],
    },
    charts: {
      0: { kind: "donut", title: "Stones often come back", subtitle: "People who have had a stone, out of every 100", value: 50, subject: "people who have had a stone", label: "form another within the next 10 years", sources: "Source: BAUS, Kidney stones" },
    },
  },
  "follow-up": {
    sectionRefs: [[[1], [1, 5]], [[2, 3], [6, 2]], [[1, 3], [2, 1]], [[1, 4], [4]], [[1], [1, 3]]],
    helpRefs: [[1], [1, 5], [2], [4], [4], [1]],
    stats: {
      3: [{ value: "4 to 6 weeks", label: "after a stent goes in: if you have not heard about its removal by then, BAUS says let your urology department know.", ref: 4, picture: "calendar" }],
    },
    charts: {
      3: { kind: "range", title: "Stent side effects are common", subtitle: "People with a ureteric stent who get one or more side effects, out of every 100", from: 20, to: 70, sources: "Source: BAUS, Living with a ureteric stent" },
    },
  },
};
