import type { NewsExtras } from "../ischaemic-news";
// Fertility after cancer features: paragraph references (numbers are positions in each answer's own sources in fertility-after-cancer-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "how-treatment": {
    sectionRefs: [[[2], [2, 1]], [[1], [1], [1, 5]], [[1, 4], [1]], [[1], [1], [1]], [[3, 6], [2]]],
    helpRefs: [[2], [1], [1], [3], [5]],
    stats: {
      1: [{ value: "5 to 10 years", label: "earlier than it would naturally is when the menopause may start if chemotherapy reduces the number of eggs, says Macmillan.", ref: 1, picture: "calendar" }],
    },
  },
  "women": {
    sectionRefs: [[[1], [1, 4]], [[5], [3], [3]], [[1], [4], [4, 3]], [[4], [3, 1]], [[4], [2]]],
    helpRefs: [[5], [3], [4], [1], [1]],
    charts: {
      0: { kind: "range", title: "When the natural menopause usually happens", subtitle: "Age, in years, at which the natural menopause usually happens", from: 45, to: 55, unit: "years of age", sources: "Sources: Macmillan, The reproductive system; NHS, Early or premature menopause" },
    },
    stats: {
      2: [{ value: "Before 45", label: "is when periods stop in an early menopause, and before 40 in a premature menopause, says the NHS.", ref: 4, picture: "calendar" }],
    },
  },
  "men": {
    sectionRefs: [[[1], [1]], [[2], [2], [3]], [[5, 3], [3], [3]], [[2], [2, 3]], [[2], [2, 3]]],
    helpRefs: [[2], [4, 5], [2], [3], [2]],
    stats: {
      4: [{ value: "A few months or years", label: "is how long it can take for fertility to return to normal after chemotherapy, says Cancer Research UK.", ref: 2, picture: "calendar" }],
    },
  },
  "tests": {
    sectionRefs: [[[1, 4], [4]], [[1, 3], [1], [5]], [[1], [1], [1]], [[2], [1]], [[2], [1]]],
    helpRefs: [[1], [1], [1], [2], [2]],
    stats: {
      2: [{ value: "1 to 2 years", label: "of trying is usual before referral to a fertility clinic, but after cancer treatment ovarian reserve testing should come sooner, says Macmillan.", ref: 1, picture: "calendar" }],
      3: [{ value: "6 months to a year", label: "after treatment is a good time to wait before checking fertility, to give your body time to recover, says Teenage Cancer Trust.", ref: 2, picture: "calendar" }],
    },
  },
  "preserving": {
    sectionRefs: [[[1], [1, 2]], [[1], [1], [1, 4]], [[1], [1, 3], [3, 1]], [[1], [3]], [[1], [1, 5, 6], [5, 6, 7]]],
    helpRefs: [[2], [1], [1, 3], [1], [5, 6], [7]],
    stats: {
      2: [{ value: "8 to 14 days", label: "of daily hormone injections usually come before eggs are collected, says Macmillan.", ref: 1, picture: "calendar" }],
    },
    charts: {
      4: { kind: "bars", title: "How long eggs, sperm and embryos can be stored", subtitle: "Years of storage, as Macmillan describes it", bars: [{ label: "Usual first storage period", value: 10 }, { label: "Longest total, renewed every 10 years", value: 55, strong: true }], max: 55, ticks: [0, 10, 20, 30, 40, 50], unit: " years", sources: "Source: Macmillan, Fertility preservation" },
    },
  },
  "trying": {
    sectionRefs: [[[1], [1]], [[2, 4], [1], [3]], [[1], [5]], [[1], [1], [1]], [[6, 1], [1]]],
    helpRefs: [[1, 2], [3, 4], [1], [1], [1]],
  },
  "ivf": {
    sectionRefs: [[[1], [1]], [[1], [1, 4], [2]], [[3, 1], [2], [2, 5]], [[1], [3, 2]], [[1, 2], [2]]],
    helpRefs: [[1], [2, 3], [3], [3, 1], [2], [2]],
    stats: {
      1: [{ value: "3 to 6 weeks", label: "is how long a full cycle of IVF takes, says the NHS.", ref: 2, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "IVF cycles you may be eligible for on the NHS", subtitle: "Full cycles of IVF, by age, as the NHS website describes", bars: [{ label: "Aged 39 or under", value: 3, strong: true }, { label: "Aged 40 to 42", value: 1 }], max: 3, ticks: [0, 1, 2, 3], unit: " full cycles", sources: "Source: NHS, IVF" },
    },
  },
  "other-routes": {
    sectionRefs: [[[2, 7, 3], [7]], [[1], [1], [1, 6]], [[1], [3, 5], [5]], [[2], [4, 3]], [[2, 3], [2]]],
    helpRefs: [[7, 1], [1], [3, 1], [2, 3], [2]],
    stats: {
      1: [{ value: "18", label: "is the age at which a child born from donated eggs or sperm can find out the donor's identity, says the NHS.", ref: 6, picture: "calendar" }],
      3: [{ value: "21 or over", label: "is the age you can adopt a child in England and Wales, with no upper age limit, says the government.", ref: 4 }],
    },
  },
  "feelings": {
    sectionRefs: [[[1], [1, 2]], [[1], [10, 1]], [[5], [2, 5]], [[1, 3], [2, 6], [4]], [[4, 9], [7, 8], [7]]],
    helpRefs: [[1], [1], [2], [4], [9], [7]],
    stats: {
      3: [{ value: "More than 2 weeks", label: "of low feelings is the time to talk to your doctor or nurse, says Macmillan.", ref: 4, picture: "calendar" }],
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 9 }],
    },
  },
  "relationships": {
    sectionRefs: [[[1], [4]], [[6], [5]], [[2], [2]], [[3], [3]], [[2, 6], [2]]],
    helpRefs: [[1], [4], [2], [3], [2]],
    stats: {
      2: [{ value: "About a week", label: "after treatment is how long some doctors advise a barrier method such as condoms, says Cancer Research UK.", ref: 2, picture: "calendar" }],
      4: [{ value: "0808 800 4040", label: "is the free Cancer Research UK nurse line, Monday to Friday, 9am to 5pm.", ref: 2 }],
    },
  },
  "contraception": {
    sectionRefs: [[[1], [4, 2]], [[6, 5], [2], [3]], [[3], [7], [3]], [[8], [9]]],
    helpRefs: [[2, 9], [2, 3], [3, 4], [6], [8]],
  },
  "support": {
    sectionRefs: [[[1], [1]], [[1, 2], [1, 7]], [[1], [3], [4, 5]], [[1], [6], [1, 7]]],
    helpRefs: [[1], [1, 2], [1], [3], [5]],
    stats: {
      2: [{ value: "7 days a week", label: "from 8am to 8pm, the Macmillan Support Line is open, free on 0808 808 00 00.", ref: 1, picture: "calendar" }],
    },
  },
};
