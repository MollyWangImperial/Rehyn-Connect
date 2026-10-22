import type { NewsExtras } from "../ischaemic-news";
// Cervical cancer features: paragraph references (numbers are positions in each answer's own sources in cervical-answers.ts), charts and big figures, all checked on 22 October 2026. No survival figures.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-you-had": {
    sectionRefs: [[[1, 2], [2, 1]], [[3], [3, 1], [3]], [[2, 4], [4]], [[1, 5], [1]], [[6], [6]]],
    helpRefs: [[1], [1], [3], [6], [2]],
    stats: {
      2: [{ value: "Once a week", label: "is how often cisplatin is usually given throughout radiotherapy for cervical cancer, says Macmillan.", ref: 4, picture: "calendar" }],
    },
    charts: {
      3: { kind: "range", title: "Cycles of chemotherapy", subtitle: "How long most cycles of chemotherapy for cervical cancer last, in weeks", from: 1, to: 3, unit: "weeks", sources: "Source: Macmillan, Chemotherapy for cervical cancer" },
    },
  },
  "stage": {
    sectionRefs: [[[1, 2], [4]], [[1], [1, 2]], [[1, 2], [1, 2]], [[1], [1]], [[2], [3], [1]]],
    helpRefs: [[5], [5, 4], [5], [4], [5], [1]],
    stats: {
      0: [{ value: "4 main stages", label: "divide cervical cancer, and each stage has further sub-divisions, says Macmillan.", ref: 1 }],
    },
  },
  "follow-up": {
    sectionRefs: [[[1, 2], [3]], [[1], [1], [1]], [[1], [1]], [[1, 5], [4, 3]], [[1, 2], [1, 2]]],
    helpRefs: [[3], [1], [4], [4], [3], [3]],
    stats: {
      1: [{ value: "Within 6 weeks", label: "of finishing treatment is when your first follow-up appointment will be, says Cancer Research UK.", ref: 1, picture: "calendar" }],
      3: [{ value: "Within 12 months", label: "of diagnosis is when a cancer care review with your GP practice is usually done, says Macmillan.", ref: 3, picture: "calendar" }],
    },
    charts: {
      1: { kind: "range", title: "Check-ups at first", subtitle: "Months between follow-up appointments you might have in the first 2 years", from: 3, to: 6, unit: "months", sources: "Source: Cancer Research UK, Follow up after cervical cancer treatment" },
    },
  },
  "hpv": {
    sectionRefs: [[[1, 2], [4, 3]], [[2, 3], [3, 5, 4], [2, 5]], [[6], [3]], [[7, 5], [2, 3]], [[3], [4]]],
    helpRefs: [[6], [7], [4], [2], [8]],
    stats: {
      0: [{ value: "Around 14", label: "types of HPV are high-risk types that increase the risk of cancer, says Cancer Research UK.", ref: 4 }],
      1: [{ value: "Within two years", label: "is when the immune system usually gets rid of HPV, says The Eve Appeal.", ref: 3, picture: "calendar" }],
    },
    charts: {
      0: { kind: "donut", title: "Two types matter most", subtitle: "Cervical cancers, out of every 100", value: 70, prefix: "More than", subject: "cervical cancers", label: "come from two high-risk HPV types, 16 and 18", sources: "Source: The Eve Appeal, HPV" },
      1: { kind: "waffle", title: "A very common virus", subtitle: "People, out of every 100, who get HPV at some point in their lives", groups: [{ label: "Get HPV at some point", count: 80, tone: "clay" }, { label: "Do not", count: 20, tone: "green" }], sources: "Source: The Eve Appeal, HPV" },
    },
  },
  "radiotherapy": {
    sectionRefs: [[[1], [1, 3]], [[1], [1, 2]], [[1, 6], [1, 5]], [[1, 2], [2, 1], [1]], [[1, 3], [3, 4]]],
    helpRefs: [[4, 2], [1], [2], [2], [4], [3]],
    stats: {
      0: [{ value: "Around 2 weeks", label: "after treatment ends is when side effects usually begin to improve, says Cancer Research UK.", ref: 1, picture: "calendar" }],
      3: [{ value: "Within 48 hours", label: "is when bleeding from the vagina after internal radiotherapy should clear up, says Cancer Research UK.", ref: 1, picture: "hours" }],
    },
    charts: {
      1: { kind: "range", title: "When skin can get sore", subtitle: "Days into treatment when a skin reaction usually starts", from: 5, to: 7, unit: "days", sources: "Source: Cancer Research UK, Side effects of cervical cancer radiotherapy" },
      2: { kind: "donut", title: "Tiredness can linger", subtitle: "Women treated for cervical cancer, out of every 100", value: 30, prefix: "More than", subject: "women treated for cervical cancer", label: "report fatigue two years or longer after treatment", sources: "Source: Cancer Research UK, Coping with cervical cancer" },
    },
  },
  "menopause": {
    sectionRefs: [[[1, 5], [6, 2, 3], [1, 2]], [[2], [4]], [[3, 4], [5, 2], [4]], [[4], [4]], [[4, 5], [5]]],
    helpRefs: [[4, 2], [4], [4], [4], [4], [5]],
    stats: {
      0: [{ value: "Before 45", label: "is when stopping regular periods counts as an early menopause, says the NHS.", ref: 5, picture: "calendar" }],
      3: [{ value: "15 minutes, twice a day", label: "is how long to practise paced respiration, suggests Macmillan.", ref: 4, picture: "hours" }],
    },
    charts: {
      1: { kind: "range", title: "A hot flush", subtitle: "How long hot flushes generally last, in minutes", from: 4, to: 5, unit: "minutes", sources: "Source: Macmillan, Menopausal symptoms and cancer treatment" },
    },
  },
  "vaginal-changes": {
    sectionRefs: [[[1, 4], [3]], [[1], [1, 3], [2, 3]], [[1], [1], [1]], [[1], [3]], [[2, 3, 5], [2, 3]]],
    helpRefs: [[1], [1], [1], [1], [3], [3]],
    stats: {
      2: [
        { value: "Around 4 weeks", label: "after radiotherapy ends is when you usually start using a dilator, says Cancer Research UK.", ref: 1, picture: "calendar" },
        { value: "2 years or more", label: "is how long your doctor might advise using dilators, even if you are sexually active, says Cancer Research UK.", ref: 1, picture: "calendar" },
      ],
    },
    charts: {
      2: { kind: "range", title: "A few minutes at a time", subtitle: "Minutes for each dilator session, about 3 times a week", from: 5, to: 10, unit: "minutes", sources: "Source: Cancer Research UK, Side effects of cervical cancer radiotherapy" },
    },
  },
  "fertility": {
    sectionRefs: [[[1, 3], [1]], [[1], [1, 2], [2]], [[4], [4]], [[1, 2, 5], [4]], [[1], [1]]],
    helpRefs: [[1], [4], [1], [1], [6], [1]],
  },
  "bowels-bladder": {
    sectionRefs: [[[2], [5, 6], [2]], [[4], [4]], [[1], [1, 2]], [[3], [3], [3]], [[2], [1]]],
    helpRefs: [[1], [1], [3], [3], [3], [2, 1]],
    stats: {
      3: [{ value: "About 7,000", label: "locked disabled toilets across the UK can be opened with the National Key Scheme, says Macmillan.", ref: 3 }],
    },
    charts: {
      1: { kind: "bars", title: "Common, and worth raising", subtitle: "Women treated for cervical cancer, out of every 100. Each figure is 'more than'", bars: [{ label: "Bowel problems the most distressing symptom, after radiotherapy following radical surgery", value: 60, strong: true }, { label: "Struggle with bladder problems after chemoradiation", value: 20 }], sources: "Source: Cancer Research UK, Coping with cervical cancer" },
    },
  },
  "relationships": {
    sectionRefs: [[[3], [1]], [[1], [1]], [[4], [2]], [[2], [2]], [[1, 5], [2, 1]]],
    helpRefs: [[3], [2], [2], [1, 5], [2], [1]],
    stats: {
      0: [{ value: "At least 6 weeks", label: "after surgery before having sex gives your wound time to heal properly, says Macmillan.", ref: 3, picture: "calendar" }],
    },
  },
  "work": {
    sectionRefs: [[[1], [1]], [[1], [3, 4], [1]], [[1], [1]], [[2], [2]], [[5], [1, 6]]],
    helpRefs: [[1], [1], [1], [3], [2], [1]],
    charts: {
      1: { kind: "bars", title: "Building back up", subtitle: "About how many weeks to avoid strenuous activity and heavy lifting after surgery for cervical cancer", bars: [{ label: "Laparoscopic surgery", value: 6 }, { label: "Abdominal surgery", value: 12, strong: true }], max: 12, ticks: [0, 3, 6, 9, 12], unit: " weeks", sources: "Source: Macmillan, Before and after surgery for cervical cancer" },
    },
  },
  "mood": {
    sectionRefs: [[[1], [2, 4]], [[3], [3]], [[2, 8], [2]], [[2], [5], [5]], [[6, 7], [6]]],
    helpRefs: [[5], [2], [2], [2], [7, 6], [6]],
  },
};
