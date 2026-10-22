import type { NewsExtras } from "../ischaemic-news";
// Bowel incontinence features: paragraph references (numbers are positions in each answer's own sources in bowel-incontinence-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [2, 4]], [[1], [1]], [[2, 5], [2, 5]], [[3, 6], [3, 6]], [[4, 3], [2, 1]]],
    helpRefs: [[1], [1], [1], [2]],
    stats: {
      4: [
        { value: "1 in 10", label: "people in the UK are affected by bowel incontinence, says Bladder & Bowel Community.", ref: 4, picture: "one-in", of: 10 },
        { value: "Up to 1 in 8", label: "people are affected by faecal incontinence, says Guts UK.", ref: 3, picture: "one-in", of: 8 },
      ],
    },
  },
  "causes": {
    sectionRefs: [[[1, 5], [6]], [[1, 4], [3, 2]], [[3, 4], [3, 4]], [[1, 3, 4], [1, 2, 4, 5], [3, 5]], [[1, 2], [7]]],
    helpRefs: [[1], [3], [1], [6], [1]],
  },
  "talking": {
    sectionRefs: [[[1], [3, 5]], [[1, 2], [1]], [[3, 4], [4]], [[2], [2, 6]], [[2, 3], [3, 4]]],
    helpRefs: [[1], [3], [4], [2], [3, 2]],
    stats: {
      2: [{ value: "A week or so", label: "of keeping a bowel diary before your appointment is what Bladder & Bowel Community suggests.", ref: 4, picture: "calendar" }],
    },
  },
  "tests": {
    sectionRefs: [[[1], [2]], [[1, 3], [2]], [[4], [4]], [[2, 3], [3], [2, 3]], [[3], [3, 5]]],
    helpRefs: [[3], [3], [4], [3], [4]],
    stats: {
      3: [{ value: "Five minutes", label: "is all an anal ultrasound scan takes, with no radiation, says Guts UK.", ref: 3, picture: "hours" }],
    },
    charts: {
      2: { kind: "range", title: "How long a colonoscopy takes", subtitle: "Minutes for the test itself, says the NHS; allow around 2 hours at the hospital", from: 30, to: 45, unit: " minutes", sources: "Source: NHS, Colonoscopy" },
    },
  },
  "diet": {
    sectionRefs: [[[2], [6]], [[1, 3], [3], [5]], [[2], [1, 5, 6]], [[1, 6], [4]], [[1, 3], [7]]],
    helpRefs: [[1], [1, 6], [3], [2], [6], [1]],
  },
  "medicines": {
    sectionRefs: [[[4], [3, 2]], [[3], [6, 8], [5]], [[4, 5], [5], [7, 8]], [[3], [8]], [[3, 1], [9]]],
    helpRefs: [[3], [5], [4], [7], [3], [3]],
    stats: {
      0: [{ value: "Within 1 hour", label: "is when loperamide usually starts to work, says the NHS.", ref: 4, picture: "hours" }],
      1: [{ value: "48 hours", label: "at most for loperamide you have bought, before talking to a doctor, says the NHS.", ref: 5, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "The most loperamide in 24 hours", subtitle: "2mg capsules or tablets for adults with short-term diarrhoea, as the NHS gives them", bars: [{ label: "Bought from a shop or pharmacy", value: 6, strong: true }, { label: "On prescription", value: 8 }], max: 10, ticks: [0, 2, 4, 6, 8, 10], unit: " capsules", sources: "Source: NHS, How and when to take loperamide" },
    },
  },
  "exercises": {
    sectionRefs: [[[4], [3, 4]], [[5], [5], [5]], [[5], [1]], [[1], [4], [1, 6]], [[4, 3], [2, 7]]],
    helpRefs: [[1], [3], [5], [1], [1], [1, 6]],
    stats: {
      1: [
        { value: "10 seconds", label: "is how long to aim to hold a long squeeze, building up to it, says NHS inform.", ref: 5, picture: "hours" },
        { value: "3 times a day", label: "is how often NHS inform suggests doing 10 long and 10 short squeezes.", ref: 5, picture: "calendar" },
      ],
      3: [{ value: "1 minute", label: "of holding on before sitting down is where bowel retraining starts, says Bladder & Bowel Community.", ref: 4, picture: "hours" }],
    },
  },
  "further": {
    sectionRefs: [[[1, 3], [5]], [[3, 4], [3]], [[4, 3], [4, 6], [4]], [[2, 1], [1], [4]], [[2, 4, 7], [6, 5]]],
    helpRefs: [[1, 5], [3], [3], [1, 5], [5]],
    stats: {
      2: [{ value: "Around 40 in 100", label: "people achieve complete control after a permanent sacral nerve stimulator, says the NICE Clinical Knowledge Summary.", ref: 6 }],
    },
  },
  "products": {
    sectionRefs: [[[1, 2], [2, 4]], [[2, 1], [1, 2, 5]], [[3], [3, 1], [3]], [[7], [7]], [[2], [8, 6]]],
    helpRefs: [[2], [4], [3], [3], [7]],
    stats: {
      4: [{ value: "200 pieces", label: "or fewer, bought for personal use, is when 0% VAT applies to continence products, says Bladder & Bowel Community.", ref: 6 }],
    },
  },
  "out-and-about": {
    sectionRefs: [[[1, 3], [1, 2]], [[1, 2], [4, 3]], [[5], [5]], [[3, 7], [7, 8]], [[1]]],
    helpRefs: [[1], [3], [1], [1, 2, 6], [4, 3, 6], [5]],
    stats: {
      1: [{ value: "9,000", label: "disabled toilets around the UK can be opened with a Radar key, says NHS inform.", ref: 2 }],
      2: [{ value: "48 hours", label: "notice to the airline is needed for Special Assistance, says Bladder & Bowel Community.", ref: 5, picture: "hours" }],
    },
  },
  "relationships": {
    sectionRefs: [[[2], [2]], [[2], [2]], [[1], [1], [1]], [[3], [3, 4]]],
    helpRefs: [[2], [2], [1], [1], [3], [5]],
  },
  "carers": {
    sectionRefs: [[[1], [1], [5]], [[1], [1], [4]], [[2], [2], [2]], [[1], [1, 3]], [[6], [1, 4, 7]]],
    helpRefs: [[1], [1], [1], [2], [2], [6]],
    stats: {
      0: [{ value: "Up to 67 in 100", label: "people living in care homes have been found to have faecal incontinence, says the NICE Clinical Knowledge Summary.", ref: 5 }],
      2: [{ value: "20 minutes", label: "after a warm drink at breakfast is a toilet time that works for many people, says Bladder & Bowel Community.", ref: 2, picture: "hours" }],
      4: [{ value: "Over 18", label: "is the age from which anyone caring for someone can ask for a free carer's assessment, says the NHS.", ref: 6 }],
    },
  },
};
