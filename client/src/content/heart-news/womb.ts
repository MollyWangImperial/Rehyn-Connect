import type { NewsExtras } from "../ischaemic-news";
// Womb (endometrial) cancer features: paragraph references (numbers are positions in each answer's own sources in womb-answers.ts), charts and big figures, all checked on 22 October 2026. No survival figures.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-you-had": {
    sectionRefs: [[[1, 3], [3, 9]], [[3], [2, 4]], [[4], [4, 1]], [[5], [6], [7, 8]], [[2, 1], [1]]],
    helpRefs: [[3], [1], [6], [5], [1]],
    stats: {
      1: [{ value: "2 to 3 weeks", label: "is about how long test results take to come back after surgery, says Macmillan.", ref: 3, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "A course of radiotherapy", subtitle: "Weeks a full course of external beam radiotherapy may last, Monday to Friday", from: 5, to: 6, unit: "weeks", sources: "Source: Macmillan, Radiotherapy for womb cancer" },
    },
  },
  "stage": {
    sectionRefs: [[[5, 4], [4]], [[1], [1, 3], [1]], [[1, 2]], [[2, 4], [2, 4], [2]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1]],
    charts: {
      3: { kind: "donut", title: "The most common kind", subtitle: "Womb cancers, out of every 100", value: 75, prefix: "About", subject: "womb cancers", label: "are grade 1 or grade 2 endometrioid cancers, usually diagnosed at an early stage", sources: "Source: Macmillan, Womb cancer" },
    },
  },
  "follow-up": {
    sectionRefs: [[[2], [2, 1]], [[2, 1], [1]], [[1, 2], [2]], [[1, 2], [1]], [[5, 4], [2, 3]]],
    helpRefs: [[1], [5], [4], [5], [4], [2]],
    stats: {
      1: [
        { value: "4 to 6 weeks", label: "after treatment finishes is generally when the first check-up is, says Cancer Research UK.", ref: 2, picture: "calendar" },
        { value: "Every 6 months for 2 years", label: "then yearly for another 3 years, is how often follow-up may be if the cancer was low risk, says Macmillan.", ref: 1, picture: "calendar" },
      ],
      4: [{ value: "Within 12 months", label: "of diagnosis is when a cancer care review is usually done, and you can ask for one at any point, says Macmillan.", ref: 4, picture: "calendar" }],
    },
  },
  "lynch": {
    sectionRefs: [[[1], [4, 5]], [[1], [2]], [[1], [3, 1]], [[1], [1], [6]], [[1], [1, 5]]],
    helpRefs: [[3], [1], [1], [1], [1, 5]],
    stats: {
      0: [{ value: "1 in 400 to 450", label: "people are thought to have Lynch syndrome, says The Eve Appeal.", ref: 5 }],
      2: [{ value: "1 in 2", label: "is the chance a parent's Lynch syndrome gene change is passed on to each child, says Macmillan.", ref: 1, picture: "one-in", of: 2 }],
    },
    charts: {
      0: { kind: "range", title: "A small number", subtitle: "Womb cancers caused by gene changes passed on in a family, out of every 100", from: 5, to: 10, sources: "Source: Macmillan, Causes and risk factors of womb cancer" },
    },
  },
  "surgery-recovery": {
    sectionRefs: [[[1], [1]], [[2], [1, 3]], [[1], [1]], [[4], [4]], [[1, 4], [2]]],
    helpRefs: [[1], [1], [1], [1], [4], [2]],
    stats: {
      0: [{ value: "2 to 5 days", label: "in hospital is usual after open surgery; after keyhole or robotic surgery it may be the same day or the next, says Macmillan.", ref: 1, picture: "calendar" }],
      1: [{ value: "6 weeks to 3 months", label: "is how long it can take to fully recover after surgery to remove the womb, says Cancer Research UK.", ref: 2, picture: "calendar" }],
    },
  },
  "radiotherapy": {
    sectionRefs: [[[2], [1], [1, 4]], [[1, 2], [1, 2]], [[2], [2]], [[3, 1], [3, 2]], [[3], [3, 1]]],
    helpRefs: [[1], [1, 2], [2], [2], [3], [1]],
    stats: {
      2: [{ value: "5 to 10 minutes", label: "about 3 times a week, starting around 4 weeks after radiotherapy ends, is how dilators are usually used, says Cancer Research UK.", ref: 2, picture: "hours" }],
    },
    charts: {
      0: { kind: "range", title: "Keeping your fluids up", subtitle: "Glasses of fluid a day suggested if you have diarrhoea, unless your team says otherwise", from: 8, to: 12, unit: "glasses a day", sources: "Source: Macmillan, Radiotherapy for womb cancer" },
    },
  },
  "menopause": {
    sectionRefs: [[[1], [2]], [[3, 4], [3]], [[1], [4]], [[3], [3]], [[3, 5], [1]]],
    helpRefs: [[1, 4], [3], [3], [3], [3]],
    stats: {
      1: [{ value: "About 4 to 5 minutes", label: "is how long hot flushes generally last, says Macmillan.", ref: 3, picture: "hours" }],
      3: [{ value: "15 minutes, twice a day", label: "is how long to practise paced respiration, the slow breathing method that can help with hot flushes, says Macmillan.", ref: 3, picture: "hours" }],
    },
    charts: {
      3: { kind: "range", title: "Medicines for hot flushes", subtitle: "Weeks it usually takes for anti-depressants such as venlafaxine or citalopram to help with hot flushes", from: 1, to: 4, unit: "weeks", sources: "Source: Macmillan, Menopausal symptoms and cancer treatment" },
    },
  },
  "swelling": {
    sectionRefs: [[[2, 1], [1, 2, 8]], [[2], [2, 4], [2]], [[5], [5]], [[2, 6], [4, 6]], [[4, 7], [7]]],
    helpRefs: [[2], [5], [5], [5], [7], [7]],
    stats: {
      0: [{ value: "More than 200,000", label: "people in the UK are thought to have lymphoedema, says the NHS.", ref: 4 }],
    },
  },
  "bowels-bladder": {
    sectionRefs: [[[1], [1], [2]], [[3], [3]], [[3], [3]], [[5], [6], [5]], [[7, 3], [5]]],
    helpRefs: [[1], [5], [5], [6], [5], [7, 3]],
    stats: {
      3: [{ value: "At least 3 months", label: "is how long it takes to strengthen pelvic floor muscles, says Macmillan.", ref: 6, picture: "calendar" }],
    },
    charts: {
      3: { kind: "range", title: "A steady drink", subtitle: "Litres of fluid a day to aim for, spread through the day, to help the bladder", from: 1, to: 2, unit: "litres a day", sources: "Source: Macmillan, Tips for coping with bladder or bowel changes" },
    },
  },
  "relationships": {
    sectionRefs: [[[1], [1, 4]], [[1, 3], [6], [2]], [[3, 4], [5]], [[3], [4]], [[2, 4], [2, 3]]],
    helpRefs: [[1], [1, 4], [3], [5], [3], [2, 4]],
    stats: {
      0: [{ value: "6 weeks", label: "after surgery, once wounds have healed, is when penetrative sex is usually safe, or up to 12 weeks after keyhole surgery, says Macmillan.", ref: 1, picture: "calendar" }],
    },
  },
  "activity": {
    sectionRefs: [[[2], [1]], [[1, 3], [2]], [[4], [4]], [[1, 5]], [[4], [1, 6]]],
    helpRefs: [[1, 3], [1], [2], [4], [1], [1]],
    charts: {
      1: { kind: "bars", title: "Time before heavy lifting", subtitle: "Weeks to avoid strenuous activity or heavy lifting after a hysterectomy, about", bars: [{ label: "Open (abdominal) surgery", value: 12, strong: true }, { label: "Laparoscopic, robotic or vaginal surgery", value: 6 }], max: 12, ticks: [0, 3, 6, 9, 12], unit: " weeks", sources: "Source: Macmillan, Recovering from womb cancer surgery" },
    },
    stats: {
      1: [{ value: "At least 4 to 6 weeks", label: "of rest at home after a hysterectomy, without heavy housework or carrying heavy bags, says Cancer Research UK.", ref: 3, picture: "calendar" }],
    },
  },
  "mood": {
    sectionRefs: [[[2, 1], [6]], [[5], [4]], [[3, 6], [3]], [[3, 2], [7, 3], [3]], [[3, 10], [8, 9], [8]]],
    helpRefs: [[5, 3], [3], [7, 3], [3, 2], [10], [8]],
    stats: {
      2: [{ value: "More than 2 weeks", label: "of low feelings is when to talk to your doctor or nurse, says Macmillan.", ref: 3, picture: "calendar" }],
      3: [{ value: "Up to 4 weeks", label: "is how long anti-depressants can take to start helping, says Macmillan.", ref: 3, picture: "calendar" }],
    },
  },
};
