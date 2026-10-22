import type { NewsExtras } from "../ischaemic-news";
// Indigestion features: paragraph references (numbers are positions in each answer's own sources in indigestion-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[2], [2, 1]], [[1], [2]], [[1], [2]], [[2], [2]]],
    helpRefs: [[1], [1], [1], [2]],
    stats: {
      3: [{ value: "Around 1 in 4", label: "people with indigestion symptoms visit their GP for advice, says Guts UK.", ref: 2, picture: "one-in", of: 4 }],
    },
    charts: {
      3: { kind: "range", title: "How many have it at any time", subtitle: "People with indigestion at any one time, out of every 100 (1 or 2 in 5), says Guts UK", from: 20, to: 40, sources: "Source: Guts UK, Indigestion" },
    },
  },
  "causes": {
    sectionRefs: [[[1], [2]], [[1, 4], [1, 4]], [[2]], [[2], [2, 3]], [[1, 2], [2]]],
    helpRefs: [[4], [2], [4, 1], [2], [2]],
    stats: {
      3: [{ value: "About 8 in 100", label: "people with indigestion have ulcers, the second most common cause, says Guts UK.", ref: 2 }],
    },
    charts: {
      2: { kind: "donut", title: "The most common cause", subtitle: "People with indigestion, out of every 100", value: 80, subject: "people with indigestion", label: "have functional dyspepsia (8 in 10)", sources: "Source: Guts UK, Indigestion" },
    },
  },
  "functional": {
    sectionRefs: [[[1], [1]], [[1], [1], [1]], [[1], [2, 1]], [[1], [1]], [[1], [1, 2, 3], [1]]],
    helpRefs: [[1], [1], [1], [1], [1], [1]],
    stats: {
      1: [{ value: "1 in 3", label: "people with functional dyspepsia have both patterns of symptoms, says Guts UK.", ref: 1, picture: "one-in", of: 3 }],
      3: [{ value: "Roughly 1 in 3", label: "people with functional dyspepsia also have IBS, says Guts UK.", ref: 1, picture: "one-in", of: 3 }],
    },
    charts: {
      3: { kind: "donut", title: "Common around the world", subtitle: "People around the world, out of every 100", value: 7, subject: "people worldwide", label: "have functional dyspepsia (7 in 100)", sources: "Source: Guts UK, Functional dyspepsia" },
    },
  },
  "checks": {
    sectionRefs: [[[1], [1]], [[2], [2], [2]], [[3], [3], [4]], [[5], [5]], [[6], [2]]],
    helpRefs: [[1, 2], [6], [3], [5], [3]],
    stats: {
      1: [{ value: "55 or older", label: "with new symptoms: see your doctor first, before trying over-the-counter remedies, says Guts UK.", ref: 2 }],
      4: [{ value: "More than 2 days", label: "of being sick means get advice from 111 now, says the NHS.", ref: 6, picture: "calendar" }],
    },
  },
  "self-help": {
    sectionRefs: [[[1], [2]], [[1], [2], [5]], [[1], [3]], [[1], [3], [4]], [[2], [2]]],
    helpRefs: [[1], [1], [1], [3], [1], [2]],
    stats: {
      2: [{ value: "3 to 4 hours", label: "without eating before going to bed, says the NHS.", ref: 1, picture: "hours" }],
    },
    charts: {
      2: { kind: "range", title: "Raising the head of the bed", subtitle: "How far to raise the head of your bed, using wood, bricks or books, as the NHS describes", from: 10, to: 20, unit: "cm", sources: "Source: NHS, Heartburn and acid reflux" },
    },
  },
  "pharmacy": {
    sectionRefs: [[[1], [5], [7]], [[2], [2]], [[3], [4, 3]], [[2], [2], [2]], [[6], [6, 5]]],
    helpRefs: [[2], [2], [2], [3], [2]],
    stats: {
      2: [{ value: "Around 4 hours", label: "is how long the effect of 1 dose of Gaviscon should last, says the NHS.", ref: 4, picture: "hours" }],
      3: [{ value: "2 to 4 hours", label: "between an antacid and other medicines, says the NHS.", ref: 2, picture: "hours" }],
      4: [{ value: "2 weeks at most", label: "for omeprazole bought without a prescription, says the NHS.", ref: 6, picture: "calendar" }],
    },
  },
  "h-pylori": {
    sectionRefs: [[[1], [1]], [[2], [4, 2]], [[1], [3, 1]], [[1, 4], [2, 1]], [[1], [1], [2, 1]]],
    helpRefs: [[2], [2, 1], [1], [1], [2, 3]],
    stats: {
      0: [{ value: "8 to 9 in 10", label: "people with H pylori have no problems from it, says Guts UK.", ref: 1 }],
      3: [{ value: "Two weeks", label: "without proton pump inhibitors before an H pylori test, says Guts UK.", ref: 1, picture: "calendar" }],
      4: [{ value: "12 months", label: "may pass before the benefit of treatment is seen, says Guts UK.", ref: 1, picture: "calendar" }],
    },
    charts: {
      0: { kind: "donut", title: "A common infection", subtitle: "People in the UK, out of every 100", value: 40, prefix: "Up to", subject: "people in the UK", label: "have H pylori (up to 2 in 5)", sources: "Source: Guts UK, Helicobacter pylori" },
    },
  },
  "ppis": {
    sectionRefs: [[[1], [1]], [[2], [3], [2]], [[1], [4], [2]], [[6], [1], [3]], [[2], [4, 5], [1]]],
    helpRefs: [[2], [2], [1], [2], [4]],
    stats: {
      1: [{ value: "30 minutes", label: "before a meal or snack is when lansoprazole works best, says the NHS.", ref: 2, picture: "hours" }],
      2: [
        { value: "2 to 3 days", label: "to start to feel better on lansoprazole, says the NHS.", ref: 1, picture: "calendar" },
        { value: "Up to 4 weeks", label: "for lansoprazole to work fully, says the NHS.", ref: 1, picture: "calendar" },
      ],
      3: [{ value: "More than 3 months", label: "on lansoprazole and magnesium levels in the blood may fall, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "eating": {
    sectionRefs: [[[5, 2, 3], [4]], [[1, 7], [5]], [[3, 6]], [[1], [6], [5]], [[5], [5]]],
    helpRefs: [[2], [4], [1], [3, 6], [5]],
    stats: {
      1: [{ value: "3 to 4 hours", label: "without eating before going to bed, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  "stress": {
    sectionRefs: [[[1], [2]], [[4], [5], [3]], [[5], [6]], [[2], [7, 3]], [[5], [3, 5]]],
    helpRefs: [[6], [5], [2], [5], [5], [5]],
    stats: {
      2: [{ value: "At least 5 minutes", label: "of calm breathing, ideally as part of your daily routine, says the NHS.", ref: 6 }],
      4: [{ value: "116 123", label: "is the number to call Samaritans if you need someone to talk to, says the NHS.", ref: 5 }],
    },
  },
  "pregnancy": {
    sectionRefs: [[[1], [1, 2], [1]], [[1], [1], [1]], [[1, 5], [3, 4], [1]], [[1], [1], [6]]],
    helpRefs: [[1], [1], [1], [1, 5], [1], [1]],
    stats: {
      0: [{ value: "From 12 weeks", label: "symptoms are more common, says the NHS pregnancy page.", ref: 1, picture: "calendar" }],
      2: [{ value: "2 hours", label: "between antacids and folic acid or iron supplements, says the NHS.", ref: 1, picture: "hours" }],
      3: [{ value: "30 to 60 minutes", label: "of rest: if stomach pain has not gone, call your maternity unit immediately, says the NHS.", ref: 6, picture: "hours" }],
    },
  },
  "medicines-review": {
    sectionRefs: [[[1], [2, 7]], [[2, 3, 4], [3]], [[3], [3], [8]], [[5], [6]], [[7], [4]]],
    helpRefs: [[1], [3], [3], [7], [7]],
    stats: {
      2: [{ value: "10 days", label: "at most for ibuprofen tablets unless a doctor advises it, says the NHS.", ref: 3, picture: "calendar" }],
    },
  },
};
