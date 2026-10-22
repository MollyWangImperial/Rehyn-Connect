import type { NewsExtras } from "../ischaemic-news";
// Caring for someone with advanced cancer features: paragraph references (numbers are positions in each answer's own sources in caring-advanced-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "role": {
    sectionRefs: [[[1], [1]], [[1], [2]], [[1, 5], [1]], [[1, 3], [3]], [[1], [1], [4]]],
    helpRefs: [[1], [1], [3], [1, 2], [4]],
    stats: {
      4: [{ value: "0800 090 2309", label: "is the free Marie Curie Support Line, which can help if you are unsure whether you are a carer.", ref: 4 }],
    },
  },
  "palliative": {
    sectionRefs: [[[1], [1, 4], [2]], [[2], [4]], [[6], [6], [6]], [[3], [3]], [[4], [2]]],
    helpRefs: [[4], [4, 2], [5], [3], [2]],
  },
  "symptoms": {
    sectionRefs: [[[1], [1], [2]], [[3], [3], [3]], [[4], [4], [4]], [[5], [5]], [[6], [7]]],
    helpRefs: [[1], [1], [1], [3], [4], [5]],
    stats: {
      0: [{ value: "24 hours", label: "a day is when GP surgeries provide a service; out of hours you are usually put through to an out-of-hours doctor, says Macmillan.", ref: 1, picture: "hours" }],
    },
  },
  "talking": {
    sectionRefs: [[[1], [1]], [[2], [2], [2, 5]], [[1], [1]], [[3], [3, 4], [3]], [[3], [3]]],
    helpRefs: [[2], [1], [1], [2], [3], [4]],
  },
  "practical": {
    sectionRefs: [[[1], [1]], [[1], [1], [1]], [[1], [1], [1]], [[2], [2]], [[3], [3], [4]]],
    helpRefs: [[1], [1], [1], [1], [2], [3]],
  },
  "assessment": {
    sectionRefs: [[[1], [2], [1]], [[1], [2]], [[1], [1]], [[1, 2], [2]], [[1], [1], [1]]],
    helpRefs: [[1], [1, 2], [2], [1, 2], [1], [1]],
    stats: {
      0: [{ value: "Over 18", label: "and caring for someone? You can ask your council for a free carer's assessment, says the NHS.", ref: 1 }],
      2: [{ value: "At least an hour", label: "is how long a carer's assessment usually lasts, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  "money": {
    sectionRefs: [[[1], [2], [1, 3]], [[4], [1, 5], [15, 6]], [[7], [7, 8]], [[9], [9, 10]], [[11], [12, 13], [14]]],
    helpRefs: [[1, 2], [7, 8], [5, 4], [9], [11], [6]],
    stats: {
      0: [
        { value: "£204 or less", label: "a week, after tax, National Insurance and expenses, is what you can earn and still get Carer's Allowance, says the government.", ref: 2 },
        { value: "Up to 3 months", label: "is how far back you can backdate a claim for Carer's Allowance, says the government.", ref: 3, picture: "calendar" },
      ],
      4: [{ value: "1 week", label: "of unpaid carer's leave every 12 months is what employees are entitled to, from their first day of work, says the government.", ref: 13, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "Hours of caring a week", subtitle: "The least time spent caring each week to get each one, as the government sets it", bars: [{ label: "Carer's Credit", value: 20 }, { label: "Carer's Allowance", value: 35, strong: true }], max: 40, ticks: [0, 10, 20, 30, 40], unit: " hours", sources: "Sources: GOV.UK, Carer's Allowance: eligibility; Carer's Credit" },
    },
  },
  "respite": {
    sectionRefs: [[[1], [2], [2]], [[2]], [[1, 4], [1, 5], [3, 1]], [[1], [1]], [[2, 4], [1], [2]]],
    helpRefs: [[1], [3], [1], [2], [1], [2]],
  },
  "own-health": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[1], [2], [1]], [[1], [3], [1]], [[1], [3]]],
    helpRefs: [[1], [1], [1], [2], [1], [1]],
    stats: {
      2: [{ value: "6 weeks", label: "is the length of the Sleepio sleep programme, which carers of someone living with cancer may be able to use for free, says Macmillan.", ref: 1, picture: "calendar" }],
      3: [{ value: "At least 5 minutes", label: "out of the room, breathing slowly, can help bring your stress down, says Carers UK.", ref: 3, picture: "hours" }],
    },
  },
  "feelings": {
    sectionRefs: [[[1], [1], [1]], [[1], [1]], [[2], [2], [2]], [[1], [1], [2]], [[3, 4], [3], [5]]],
    helpRefs: [[1], [1], [1], [2], [3], [4]],
    stats: {
      4: [{ value: "116 123", label: "is the free Samaritans number, open 24 hours a day, every day.", ref: 4 }],
    },
  },
  "children": {
    sectionRefs: [[[1, 2], [2, 1]], [[2], [1, 2], [1, 2]], [[2], [1]], [[2], [2], [2]], [[3], [4, 2, 3]]],
    helpRefs: [[1], [1, 2], [2], [2], [2], [2, 4]],
    stats: {
      4: [{ value: "0800 11 11", label: "is Childline, a free and confidential telephone helpline for children, says the NHS.", ref: 3 }],
    },
  },
  "support": {
    sectionRefs: [[[1, 2]], [[3], [3]], [[4], [4]], [[4], [4], [4]], [[5], [6]]],
    helpRefs: [[1], [3], [4], [4], [4], [5, 6]],
    stats: {
      0: [{ value: "7 days a week", label: "from 8am to 8pm, the Macmillan Support Line is open, free on 0808 808 00 00.", ref: 1, picture: "calendar" }],
      1: [{ value: "Over 200", label: "languages can be used to talk to Marie Curie's Support Line.", ref: 3 }],
    },
  },
};
