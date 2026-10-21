import type { NewsExtras } from "../ischaemic-news";
// Prostate cancer features: paragraph references (numbers are positions in each answer's own sources in prostate-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-you-had": {
    sectionRefs: [[[1], [1, 7, 6]], [[3], [3], [3, 1]], [[4], [4]], [[5, 1], [1, 5, 4]], [[2, 8], [1]]],
    helpRefs: [[8], [8], [1], [3], [3]],
    stats: {
      1: [{ value: "1 to 5 days", label: "is the usual hospital stay after a radical prostatectomy, depending on the type of surgery, says Prostate Cancer UK.", ref: 3, picture: "calendar" }],
      2: [{ value: "Around 10 minutes", label: "is how long each radiotherapy treatment itself lasts, including getting into position, says Prostate Cancer UK.", ref: 4, picture: "hours" }],
      3: [{ value: "Up to 3 years", label: "of hormone therapy after radiotherapy, if there is a risk of the cancer spreading outside the prostate, says Prostate Cancer UK.", ref: 5, picture: "calendar" }],
    },
  },
  "psa": {
    sectionRefs: [[[1, 3], [1, 2]], [[1, 6], [1, 6]], [[1, 2], [1, 2], [1]], [[1, 2, 4], [1, 4]], [[1, 3], [1, 2]]],
    helpRefs: [[1, 3], [1], [1], [5, 1], [1]],
    stats: {
      1: [{ value: "4 to 8 weeks", label: "after surgery, your PSA level should drop so low that it cannot be detected, says Prostate Cancer UK.", ref: 1, picture: "calendar" }],
      4: [{ value: "48 hours", label: "before a PSA test is how long you may be asked to avoid vigorous exercise or ejaculating, says Prostate Cancer UK.", ref: 1, picture: "hours" }],
    },
    charts: {
      2: { kind: "range", title: "A slow fall after radiotherapy", subtitle: "Months after radiotherapy or brachytherapy for PSA to reach its lowest level", from: 18, to: 36, unit: "months after treatment", sources: "Source: Prostate Cancer UK, Follow-up after treatment" },
    },
  },
  "results": {
    sectionRefs: [[[1], [1, 2]], [[1, 2], [2]], [[1], [1], [1]], [[1, 3], [1, 3], [1, 3]], [[5, 4], [5]]],
    helpRefs: [[1], [1], [1], [4], [6]],
    stats: {
      0: [{ value: "6 to 10", label: "is the range of Gleason scores if you have prostate cancer, says Prostate Cancer UK.", ref: 1 }],
      3: [{ value: "5 groups", label: "from CPG 1 to CPG 5 are used in the UK for prostate cancer that has not spread, says Cancer Research UK.", ref: 3 }],
    },
  },
  "surveillance": {
    sectionRefs: [[[1, 3], [1, 2]], [[1, 2], [1, 2]], [[1, 2], [1, 2], [1]], [[1, 4], [1]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1], [1], [1]],
    stats: {
      2: [
        { value: "Every 3 to 4 months", label: "is how often you might have a PSA test in the first year of active surveillance, says Prostate Cancer UK.", ref: 1, picture: "calendar" },
        { value: "Every 6 months", label: "is how often you might have a PSA test from the second year onwards, says Prostate Cancer UK.", ref: 1, picture: "calendar" },
      ],
    },
  },
  "pelvic-floor": {
    sectionRefs: [[[1, 3], [1]], [[1, 5], [1], [1]], [[1], [1]], [[1], [1], [1, 2]], [[1], [1]]],
    helpRefs: [[1, 4], [1], [1], [1], [1]],
    stats: {
      3: [{ value: "At least 3 times a day", label: "with at least 8 muscle contractions each time, for at least 3 months, is the programme the NHS describes.", ref: 2, picture: "calendar" }],
      4: [{ value: "Up to 3 months", label: "can pass before you notice a real difference from pelvic floor exercises, says Prostate Cancer UK.", ref: 1, picture: "calendar" }],
    },
  },
  "bladder": {
    sectionRefs: [[[1], [1]], [[2, 1], [2, 3], [2, 1]], [[4, 1], [4, 1, 3]], [[1, 3], [1, 3]], [[2], [1, 2]]],
    helpRefs: [[1], [1], [1, 5], [1, 3], [1, 3], [1]],
    stats: {
      4: [{ value: "Fewer than 5 in 100", label: "men find it difficult to urinate after surgery, says Prostate Cancer UK.", ref: 2 }],
    },
    charts: {
      1: { kind: "range", title: "When leaks start to improve", subtitle: "Months after surgery when most men start to see an improvement in leaking urine", from: 1, to: 6, unit: "months after surgery", sources: "Source: Prostate Cancer UK, Surgery: radical prostatectomy" },
    },
  },
  "erections": {
    sectionRefs: [[[1], [1]], [[3], [3, 2, 1]], [[4], [4]], [[2, 5], [2], [2, 3]], [[1], [1, 6]]],
    helpRefs: [[1, 3], [2], [2, 5], [2], [2], [2, 5]],
    stats: {
      2: [{ value: "Up to 2 years", label: "can pass before erection problems caused by radiotherapy appear, says Prostate Cancer UK.", ref: 4, picture: "calendar" }],
      3: [{ value: "At least 8 times", label: "is how often to try each type of PDE5 inhibitor tablet before changing to a different one, says Prostate Cancer UK.", ref: 2 }],
    },
  },
  "hormone-therapy": {
    sectionRefs: [[[2, 1], [2, 1]], [[3], [3]], [[1, 4], [2]], [[2, 4], [2, 1]], [[5, 2], [2]]],
    helpRefs: [[1], [3], [2], [2], [2], [2]],
    stats: {
      3: [
        { value: "14 units", label: "of alcohol a week is the most men should regularly drink; drinking too much can increase the risk of osteoporosis, says Prostate Cancer UK.", ref: 2 },
        { value: "About every 6 months", label: "is how often your GP may suggest general health checks while you are on hormone therapy, says Prostate Cancer UK.", ref: 2, picture: "calendar" },
      ],
    },
  },
  "exercise": {
    sectionRefs: [[[1], [2]], [[1], [1]], [[1], [1, 3]], [[4, 3], [1, 5]], [[1], [1], [1]]],
    helpRefs: [[1], [1], [1, 2], [1], [1], [1]],
    stats: {
      1: [{ value: "30 minutes", label: "of moderate exercise, three to five days a week, is what to work up to if you can, says Prostate Cancer UK.", ref: 1, picture: "hours" }],
      4: [{ value: "4 to 6 weeks", label: "is how long to avoid heavy physical exercise after prostate surgery, says Prostate Cancer UK.", ref: 1, picture: "calendar" }],
    },
  },
  "relationships": {
    sectionRefs: [[[1], [1]], [[1], [2, 1]], [[1], [1, 3], [2]], [[4, 3], [1]], [[1], [1]]],
    helpRefs: [[1], [1], [4, 3], [1], [2, 1]],
  },
  "work": {
    sectionRefs: [[[3, 1], [1, 2]], [[1], [2]], [[5], [1, 6], [4, 2]], [[7], [7, 1]], [[7, 8], [8, 7]]],
    helpRefs: [[1, 6], [1, 2], [1, 2], [1, 7], [7], [1]],
    stats: {
      2: [{ value: "8 weeks", label: "is how long to avoid lifting heavy objects or doing manual work after surgery, says Prostate Cancer UK.", ref: 5, picture: "calendar" }],
      3: [{ value: "At least 4 weeks", label: "before you travel is when to ask your doctor for a letter about your medicines, if you need one, says Prostate Cancer UK.", ref: 7, picture: "calendar" }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [1, 2]], [[4], [4, 2]], [[2, 8], [3, 8]], [[1, 2], [5, 1], [3]], [[6, 7], [6]]],
    helpRefs: [[1, 2], [3], [5], [1], [9], [7, 6]],
    stats: {
      2: [{ value: "2 weeks", label: "of symptoms of depression for most of the day is when to tell your doctor or nurse, says Prostate Cancer UK.", ref: 3, picture: "calendar" }],
      4: [{ value: "116 123", label: "is the free number for Samaritans, open 24 hours a day, every day, says the NHS.", ref: 7, picture: "hours" }],
    },
  },
};
