import type { NewsExtras } from "../ischaemic-news";
// Glomerulonephritis features: paragraph references (numbers are positions in each answer's own sources in gn-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[2], [1]], [[1], [2]], [[1], [3]]],
    helpRefs: [[1], [2], [2], [2]],
    stats: {
      1: [{ value: "About 1 million", label: "filters are in each kidney, each about the size of a pinhead, says the National Kidney Federation.", ref: 2 }],
    },
  },
  "types": {
    sectionRefs: [[[1], [1]], [[2], [2, 3], [2, 3]], [[4], [4]], [[6], [5]], [[7], [8]]],
    helpRefs: [[3], [1], [2], [2], [2]],
    stats: {
      2: [{ value: "Around 1 in 3", label: "people with membranous nephropathy recover without the need for any further treatment, says Kidney Care UK.", ref: 4, picture: "one-in", of: 3 }],
    },
    charts: {
      4: { kind: "donut", title: "Lupus and the kidneys", subtitle: "People with lupus, out of every 100", value: 60, prefix: "Around", subject: "people with lupus", label: "will develop lupus nephritis at some point during their illness", sources: "Source: Kidney Care UK, Lupus nephritis" },
    },
  },
  "symptoms": {
    sectionRefs: [[[2], [3]], [[1, 6], [7, 6]], [[1], [4], [5]], [[1], [2]]],
    helpRefs: [[6], [1], [5], [2]],
  },
  "biopsy": {
    sectionRefs: [[[1], [1], [6]], [[5, 3], [3, 5]], [[2], [2]], [[2, 3], [2, 4]], [[2], [3, 2]]],
    helpRefs: [[2], [2], [2], [2], [2]],
    stats: {
      3: [{ value: "Around half an hour", label: "is how long a kidney biopsy usually takes, says Kidney Care UK.", ref: 2, picture: "hours" }],
      4: [
        { value: "About 1 in 10", label: "biopsies are followed by visible blood in the urine that settles by itself, says the National Kidney Federation.", ref: 3, picture: "one-in", of: 10 },
        { value: "24 hours", label: "without driving after a kidney biopsy, says Kidney Care UK.", ref: 2, picture: "hours" },
      ],
    },
  },
  "blood-pressure": {
    sectionRefs: [[[1, 2], [2]], [[1], [1, 3]], [[4], [4]], [[3], [3]], [[3, 1], [5]]],
    helpRefs: [[2], [4], [4], [1], [5]],
    stats: {
      4: [{ value: "No more than 6g", label: "of salt a day, around 1 level teaspoon, is the NHS limit for adults.", ref: 5 }],
    },
  },
  "immune-treatment": {
    sectionRefs: [[[1], [1]], [[1], [3, 2, 4], [3, 2]], [[5, 6], [7]], [[5], [5]], [[1]]],
    helpRefs: [[3], [3], [5], [5], [5], [5]],
    stats: {
      1: [{ value: "More than 3 weeks", label: "on prednisolone, or a high dose, means you will be given a blue steroid card, says the NHS.", ref: 2, picture: "calendar" }],
    },
    charts: {
      1: { kind: "range", title: "The usual prednisolone dose", subtitle: "A day, in mg; occasionally higher doses are prescribed", from: 5, to: 60, unit: "mg a day", sources: "Source: NHS, How and when to take prednisolone" },
    },
  },
  "swelling": {
    sectionRefs: [[[2], [2]], [[2, 5], [3]], [[1, 4], [4], [4]], [[3], [2]]],
    helpRefs: [[3], [3], [4], [4], [6]],
  },
  "monitoring": {
    sectionRefs: [[[1], [2]], [[2], [3]], [[4], [4]], [[5, 6], [7]], [[1]]],
    helpRefs: [[1], [3], [4], [4], [7]],
  },
  "infections": {
    sectionRefs: [[[1, 7, 3]], [[1], [4], [5, 6]], [[2]], [[2, 3], [8]], [[9], [9]]],
    helpRefs: [[1, 4], [6], [2], [2], [3]],
    stats: {
      1: [
        { value: "Every year", label: "in autumn or winter, the flu vaccine is offered on the NHS to people at higher risk, says the NHS.", ref: 4, picture: "calendar" },
        { value: "2 doses", label: "of the shingles vaccine, 8 weeks to 6 months apart, for people with a severely weakened immune system, says the NHS.", ref: 6, picture: "calendar" },
      ],
    },
  },
  "food": {
    sectionRefs: [[[1], [4]], [[2], [6], [2]], [[2, 3], [3]], [[5], [5]], [[7, 8]]],
    helpRefs: [[1], [2], [2, 3], [3], [5], [8]],
    stats: {
      1: [
        { value: "No more than 6g", label: "of salt a day, around 1 level teaspoon, is the NHS limit for adults.", ref: 2 },
        { value: "Around three quarters", label: "of the salt we eat comes from packaged and everyday foods, says the NHS.", ref: 2 },
      ],
    },
  },
  "pregnancy": {
    sectionRefs: [[[1], [2]], [[2, 3], [4, 2], [5]], [[2], [2]], [[2], [6]]],
    helpRefs: [[2], [4], [3], [2], [2]],
    stats: {
      3: [{ value: "12 weeks", label: "of folic acid at the start of pregnancy, after at least three months before trying, says Kidney Care UK.", ref: 2, picture: "calendar" }],
    },
    charts: {
      1: { kind: "bars", title: "Times to wait", subtitle: "In months, as Kidney Care UK gives them", bars: [{ label: "After a flare has settled, at least", value: 6, strong: true }, { label: "After your medicines change", value: 3 }, { label: "Contraception after mycophenolate", value: 3 }], max: 8, ticks: [0, 2, 4, 6, 8], unit: " months", sources: "Source: Kidney Care UK, Pregnancy and chronic kidney disease; Medicines commonly taken after transplant or with an autoimmune disease" },
    },
  },
  "urgent": {
    sectionRefs: [[[1], [1]], [[7, 2], [2], [3]], [[1], [5]], [[4], [6]], [[8]]],
    helpRefs: [[1], [2], [2], [5], [4]],
  },
};
