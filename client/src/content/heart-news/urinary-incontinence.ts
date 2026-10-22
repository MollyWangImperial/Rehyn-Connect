import type { NewsExtras } from "../ischaemic-news";
// Urinary incontinence features: paragraph references (numbers are positions in each answer's own sources in incontinence-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [6]], [[1, 3, 4], [5, 6, 1]], [[2, 1], [1, 2]], [[4], [1]]],
    helpRefs: [[1], [4], [1], [1], [1]],
    stats: {
      1: [{ value: "3 to 6 million", label: "people in the UK have some degree of urinary incontinence, Bladder Health UK estimates.", ref: 4 }],
    },
    charts: {
      1: { kind: "bars", title: "Women and men", subtitle: "People with any incontinence, out of every 100, averaged across UK studies", bars: [{ label: "Women", value: 40, strong: true }, { label: "Men", value: 10 }], sources: "Source: Bladder Health UK, Men with incontinence: treating and managing" },
      3: { kind: "donut", title: "It can usually be helped", subtitle: "Urinary incontinence, out of every 100 cases", value: 80, prefix: "About", subject: "cases of urinary incontinence", label: "can be cured or improved", sources: "Source: Bladder Health UK, The impact of urinary incontinence" },
    },
  },
  "types": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[4], [4]], [[1, 3], [1, 2]], [[5], [6]]],
    helpRefs: [[2], [7], [4], [5], [6]],
    stats: {
      2: [
        { value: "About 1 in 6", label: "adults reported some symptoms of an overactive bladder in two large studies, says Bladder Health UK.", ref: 4, picture: "one-in", of: 6 },
        { value: "About 1 in 3", label: "people with an overactive bladder have episodes of urge incontinence, says Bladder Health UK.", ref: 4, picture: "one-in", of: 3 },
      ],
    },
    charts: {
      3: { kind: "donut", title: "Stress, urge or both", subtitle: "People with incontinence, out of every 100", value: 90, subject: "people with incontinence", label: "have stress incontinence, urge incontinence or both", sources: "Source: BAUS, Incontinence of urine" },
    },
  },
  "causes": {
    sectionRefs: [[[1], [1]], [[2, 3], [4, 6]], [[8], [5, 1]], [[1], [9]], [[1], [1, 7, 10]]],
    helpRefs: [[1], [10, 8], [10], [6, 2], [8]],
    stats: {
      1: [{ value: "1 in 3", label: "women will have stress urinary incontinence at some time in their lives, says Bladder Health UK.", ref: 4, picture: "one-in", of: 3 }],
    },
  },
  "tests": {
    sectionRefs: [[[3, 1], [1]], [[1], [4, 6]], [[1], [1, 2]], [[1], [1]], [[1], [1, 2]]],
    helpRefs: [[1, 6], [5], [5], [5], [5]],
    stats: {
      1: [{ value: "At least 3 days", label: "of bladder diary is what the GP may suggest, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "pelvic-floor": {
    sectionRefs: [[[3, 4], [1, 7]], [[2, 3], [3, 4]], [[2, 3], [1, 2, 3]], [[3, 4], [2, 3]], [[1, 5], [1, 4, 6]]],
    helpRefs: [[2], [1], [4, 2], [1, 4], [3]],
    stats: {
      2: [{ value: "At least 8", label: "squeezes, at least 3 times a day, for at least 3 months, is the programme the NHS describes.", ref: 1 }],
      3: [{ value: "3 to 6 months", label: "is how long pelvic floor exercises take to give the most benefit, says BAUS.", ref: 3, picture: "calendar" }],
    },
    charts: {
      4: { kind: "range", title: "When exercises are supervised", subtitle: "Women with stress incontinence helped by pelvic floor exercises supervised by a continence adviser or physiotherapist, of every 100", from: 50, to: 70, sources: "Source: BAUS, Comparison of treatment options for stress urinary incontinence in women" },
    },
  },
  "bladder-training": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[2], [2, 3]], [[2], [2]], [[1, 2], [4, 2]]],
    helpRefs: [[2], [2], [5], [2], [1, 2], [2]],
    stats: {
      2: [{ value: "5 to 15 minutes", label: "longer is how much extra to wait in the second week of training, says BAUS.", ref: 2 }],
      4: [{ value: "At least 6 weeks", label: "is how long a course of bladder training usually lasts, says the NHS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      4: { kind: "donut", title: "First steps that work", subtitle: "People with an overactive bladder, out of every 100", value: 50, prefix: "More than", subject: "people with an overactive bladder", label: "are helped by less caffeine and alcohol, pelvic floor exercises and bladder training", sources: "Source: BAUS, Comparison of treatment options for overactive bladder" },
    },
  },
  "medicines": {
    sectionRefs: [[[1], [2, 1]], [[1, 6], [1, 5]], [[4, 6], [1, 4, 6]], [[1, 7], [4]], [[1, 8], [3]]],
    helpRefs: [[4], [1, 2], [3], [2, 4], [4, 6], [6]],
    stats: {
      2: [{ value: "After 4 weeks", label: "is the first review of an antimuscarinic, then every 6 to 12 months while it works, says the NHS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      3: { kind: "bars", title: "Common side effects", subtitle: "People taking anticholinergic tablets, out of every 100", bars: [{ label: "Dry mouth", value: 20, strong: true }, { label: "Constipation", value: 10 }], sources: "Source: BAUS, Comparison of treatment options for overactive bladder" },
    },
  },
  "procedures": {
    sectionRefs: [[[1], [1, 5]], [[1, 2], [1]], [[1], [4]], [[1], [1, 3]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1], [5]],
    stats: {
      3: [{ value: "70 in 100", label: "people report improvement after Botox injections into the bladder wall, says BAUS.", ref: 3 }],
    },
    charts: {
      1: { kind: "bars", title: "Dry or much better", subtitle: "Women dry or significantly improved after a first treatment for stress incontinence, at least, out of every 100", bars: [{ label: "Colposuspension: from", value: 80, strong: true }, { label: "Own-tissue sling: from", value: 80, strong: true }, { label: "Bulking injections: from", value: 50 }], sources: "Source: BAUS, Comparison of treatment options for stress urinary incontinence in women" },
    },
  },
  "drinks": {
    sectionRefs: [[[1], [9, 4]], [[1, 5], [2]], [[1, 3], [1]], [[1, 2], [6, 4]], [[1, 4], [7]]],
    helpRefs: [[1], [1], [1, 2], [2, 8], [4]],
    stats: {
      1: [{ value: "6 to 8 glasses", label: "of fluid a day, but no more, unless your doctor advises otherwise, says the NHS.", ref: 1 }],
      3: [{ value: "14 units", label: "a week is the recommended limit for alcohol, says the NHS.", ref: 2 }],
    },
  },
  "products": {
    sectionRefs: [[[2, 1], [5]], [[1], [1, 4]], [[4, 3], [3]], [[1, 3], [1]], [[1], [1]]],
    helpRefs: [[1], [1], [1, 5], [3], [1, 3], [1]],
  },
  "confidence": {
    sectionRefs: [[[4, 3], [1]], [[2, 1], [2, 5]], [[2, 1], [1, 2]], [[1], [1]], [[1], [1, 6]]],
    helpRefs: [[2, 1], [2], [2], [1], [1], [1]],
    charts: {
      0: { kind: "bars", title: "How wearing pads felt", subtitle: "Women wearing pads, out of every 100, in a 2019 survey reported by Bladder Health UK", bars: [{ label: "Embarrassed to wear them", value: 72 }, { label: "More self-conscious", value: 50 }, { label: "Led to a fear of going out", value: 29, strong: true }], sources: "Source: Bladder Health UK, Stress urinary incontinence" },
    },
  },
  "talking": {
    sectionRefs: [[[2], [4, 2]], [[3], [1]], [[1], [2, 1, 5]], [[1], [1]], [[2], [7]]],
    helpRefs: [[6, 3], [1], [1], [5], [1], [2]],
    stats: {
      0: [{ value: "35 in 100", label: "people with urinary incontinence see it simply as part of ageing, says BAUS.", ref: 4 }],
    },
    charts: {
      0: { kind: "range", title: "Many never ask for help", subtitle: "People with urinary incontinence who have never sought medical advice, of every 100", from: 60, to: 80, sources: "Source: BAUS, Incontinence of urine" },
    },
  },
};
