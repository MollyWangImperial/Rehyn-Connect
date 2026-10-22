import type { NewsExtras } from "../ischaemic-news";
// Enlarged prostate features: paragraph references (numbers are positions in each answer's own sources in bph-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[2], [4, 1]], [[3], [3]], [[1, 3], [4]], [[1, 3], [1, 3]], [[3], [1]]],
    helpRefs: [[1], [1], [5], [3]],
    charts: {
      2: { kind: "bars", title: "More common with age", subtitle: "Men with benign enlargement of the prostate, out of every 100, by age", bars: [{ label: "By the age of 65", value: 50 }, { label: "At the age of 90", value: 90, strong: true }], sources: "Source: BAUS, Prostate symptoms (bladder outlet obstruction)" },
    },
    stats: {
      4: [{ value: "About 1 in 3", label: "men over 50 have urinary symptoms, and an enlarged prostate is the most common cause, says Prostate Cancer UK.", ref: 3, picture: "one-in", of: 3 }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [1, 2]], [[3], [3]], [[1, 2], [2, 4]], [[2, 4], [1, 2]], [[1], [1]]],
    helpRefs: [[1], [5], [5], [2], [1]],
    stats: {
      1: [{ value: "6 to 8 times", label: "in 24 hours: going more often than this, with more than one visit at night, is considered abnormal, says BAUS.", ref: 3 }],
      2: [{ value: "1 in 3", label: "men will have prostate symptoms during their life, says BAUS.", ref: 4, picture: "one-in", of: 3 }],
    },
  },
  "not-cancer": {
    sectionRefs: [[[1, 2], [3]], [[4], [4]], [[1], [4]], [[5], [5]], [[6, 2], [4]]],
    helpRefs: [[1], [4], [5], [3]],
    charts: {
      4: { kind: "range", title: "A raised PSA is common", subtitle: "Men with benign enlargement of the prostate who have a raised PSA level, out of every 100", from: 50, to: 60, sources: "Source: BAUS, Prostate symptoms (bladder outlet obstruction)" },
    },
  },
  "tests": {
    sectionRefs: [[[1, 2], [1]], [[1, 2], [2, 4]], [[2], [3, 2]], [[3], [3], [3]], [[1, 2], [2, 1]]],
    helpRefs: [[1], [2, 4], [3], [3], [2], [3]],
    stats: {
      1: [{ value: "At least 3 days", label: "is how long the GP will usually ask you to record your drinks and toilet visits, says the NHS.", ref: 1, picture: "calendar" }],
      3: [
        { value: "48 hours", label: "before a PSA test, avoid ejaculating, cycling and exercise that leaves you out of breath, says the NHS.", ref: 3, picture: "hours" },
        { value: "1 to 2 weeks", label: "is how long PSA test results usually take, says the NHS.", ref: 3, picture: "calendar" },
      ],
    },
  },
  "lifestyle": {
    sectionRefs: [[[1], [2, 3]], [[2, 4], [1, 2, 4]], [[1, 2], [1]], [[1, 2], [4, 5]], [[1, 2], [1, 2, 6]]],
    helpRefs: [[1], [1], [1], [1], [2], [1]],
    charts: {
      0: { kind: "range", title: "Many men do not get worse", subtitle: "Men with prostate symptoms whose condition does not get worse with time, out of every 100", from: 30, to: 40, sources: "Source: BAUS, Prostate symptoms (bladder outlet obstruction)" },
    },
    stats: {
      1: [{ value: "3 to 4 pints", label: "of fluid a day is what Prostate Cancer UK suggests, spread through the day.", ref: 2 }],
      3: [{ value: "At least 6 weeks", label: "is the minimum time to keep up bladder training, says BAUS.", ref: 5, picture: "calendar" }],
    },
  },
  "medicines": {
    sectionRefs: [[[2, 1], [1, 2]], [[3, 1, 2], [2], [3, 4]], [[7, 2], [6, 2], [2, 6]], [[5, 9], [1, 2]], [[5, 8, 1], [4, 8], [2]]],
    helpRefs: [[2], [4], [3], [5], [2, 6], [4, 8]],
    stats: {
      1: [{ value: "4 to 6 weeks", label: "without improvement on an alpha blocker, and your doctor may suggest a higher dose or a different treatment, says Prostate Cancer UK.", ref: 2, picture: "calendar" }],
      2: [
        { value: "Up to 6 months", label: "for finasteride to work fully for an enlarged prostate, says the NHS.", ref: 6, picture: "calendar" },
        { value: "At least half", label: "less PSA in your blood with finasteride or dutasteride, says BAUS.", ref: 9, picture: "half" },
      ],
    },
  },
  "surgery": {
    sectionRefs: [[[1, 2], [3, 1]], [[3, 1, 4], [4]], [[3], [3, 4]], [[4], [4], [4, 5]], [[4], [3]]],
    helpRefs: [[1], [4], [4], [4], [4]],
    stats: {
      0: [{ value: "1 in 10", label: "men will need surgical treatment for their prostate symptoms, says BAUS.", ref: 2, picture: "one-in", of: 10 }],
      3: [
        { value: "1 to 4 days", label: "after TURP is when most people leave hospital, says the NHS.", ref: 4, picture: "calendar" },
        { value: "1 in 5", label: "patients get some bleeding 10 to 14 days after getting home, says BAUS.", ref: 5, picture: "one-in", of: 5 },
      ],
    },
    charts: {
      3: { kind: "bars", title: "Recovery after TURP", subtitle: "Weeks after the operation, as the NHS sets out", bars: [{ label: "Usual activities, from around", value: 2 }, { label: "Usual activities, by around", value: 4 }, { label: "Fully healed, up to", value: 6, strong: true }], max: 8, ticks: [0, 2, 4, 6, 8], unit: " weeks", sources: "Source: NHS, Transurethral resection of the prostate (TURP)" },
    },
  },
  "urgent": {
    sectionRefs: [[[1], [1], [2]], [[3]], [[4], [1]], [[1], [1]], [[5], [6], [7]]],
    helpRefs: [[1], [3], [5], [6], [7]],
    stats: {
      0: [{ value: "About 1 in 100", label: "is the small risk of acute, painful retention of urine, says BAUS.", ref: 2, picture: "one-in", of: 100 }],
      4: [
        { value: "2 to 3 hours", label: "with no urine draining from a catheter: contact your GP or district nurse straight away, says Prostate Cancer UK.", ref: 6, picture: "hours" },
        { value: "2 hours or more", label: "for a painful erection on tamsulosin: call 999 or go to A&E now, says the NHS.", ref: 7, picture: "hours" },
      ],
    },
  },
  "nights": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[3], [4, 2], [5]], [[2], [4, 2]], [[2], [6]]],
    helpRefs: [[3], [4], [2], [2], [5], [2]],
    stats: {
      1: [{ value: "More than a third", label: "of the day's urine made overnight is called nocturnal polyuria, says BAUS.", ref: 2 }],
      2: [{ value: "2 hours", label: "before bedtime, avoid drinking anything, says the NHS.", ref: 3, picture: "hours" }],
      4: [{ value: "6 to 8 hours", label: "of less urine from the kidneys after a desmopressin tablet at bedtime, says Prostate Cancer UK.", ref: 6, picture: "hours" }],
    },
  },
  "sex": {
    sectionRefs: [[[1], [2]], [[3, 4], [5]], [[6, 7], [8]], [[9, 10], [9, 8]], [[2], [2]]],
    helpRefs: [[4], [5], [7], [8], [8], [2]],
    charts: {
      3: { kind: "range", title: "No semen after TURP", subtitle: "Men who have retrograde ejaculation after TURP, out of every 100", from: 65, to: 75, sources: "Source: BAUS, Transurethral resection of the prostate for benign disease" },
    },
  },
  "checks": {
    sectionRefs: [[[1], [2]], [[3, 2, 4], [5, 2]], [[2, 3], [6]], [[2], [2]], [[1], [7]]],
    helpRefs: [[2], [2], [2], [2], [6]],
    stats: {
      1: [{ value: "Every few months", label: "your doctor may check that tamsulosin is still relieving your symptoms, says the NHS.", ref: 4, picture: "calendar" }],
      3: [{ value: "Every 12 weeks", label: "a permanent catheter is usually changed by your doctor or nurse, says Prostate Cancer UK.", ref: 2, picture: "calendar" }],
    },
  },
  "daily-life": {
    sectionRefs: [[[1], [2]], [[3, 2], [4]], [[4], [5, 4]], [[2, 6], [4]], [[4], [4, 7]]],
    helpRefs: [[3], [2], [4], [5], [4], [6]],
  },
};
