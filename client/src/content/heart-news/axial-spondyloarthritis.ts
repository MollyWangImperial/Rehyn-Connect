import type { NewsExtras } from "../ischaemic-news";
// Axial spondyloarthritis features: paragraph references (numbers are positions in each answer's own sources in axspa-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [1, 2]], [[1, 3], [3, 4]], [[3, 5, 6], [4, 3, 9]], [[2], [7, 2]], [[2, 8], [9, 8]]],
    helpRefs: [[2], [9], [9], [3], [3]],
    stats: {
      2: [
        { value: "1 in 200", label: "adults in the UK have axial SpA, says NASS.", ref: 3 },
        { value: "26", label: "is the average age at which axial SpA starts, says NASS.", ref: 6, picture: "calendar" },
      ],
    },
    charts: {
      2: { kind: "range", title: "When it usually starts", subtitle: "Age at which ankylosing spondylitis usually first starts to develop, in years", from: 18, to: 40, unit: "years of age", sources: "Source: NHS, Symptoms of ankylosing spondylitis" },
    },
  },
  "back-pain": {
    sectionRefs: [[[1], [1]], [[2, 3], [4], [3, 4]], [[4], [4, 5]], [[4, 2], [6]], [[7, 6]]],
    helpRefs: [[7], [4], [3], [5], [6]],
    stats: {
      1: [
        { value: "More than 3 months", label: "is how long the back pain of axial SpA typically persists, rather than coming in short attacks, says NASS.", ref: 2, picture: "calendar" },
        { value: "At least 30 minutes", label: "of early-morning stiffness in the lower back is typical in the early stages, says Arthritis UK.", ref: 3, picture: "hours" },
      ],
    },
  },
  "diagnosis": {
    sectionRefs: [[[1, 2], [1, 3]], [[4], [4, 1]], [[4, 1], [4], [4]], [[4, 1], [1]], [[4], [5]]],
    helpRefs: [[4], [4], [4], [4], [4]],
    stats: {
      0: [{ value: "Eight and a half years", label: "is the current average delay from first symptoms to diagnosis, says NASS.", ref: 3, picture: "calendar" }],
      2: [{ value: "Around half", label: "of cases have inflammation blood markers within the normal range, says NASS.", ref: 4, picture: "half" }],
    },
    charts: {
      2: { kind: "donut", title: "A common gene, not a test result", subtitle: "People with axial SpA, out of every 100", value: 90, prefix: "Over", subject: "people with axial SpA", label: "carry the HLA-B27 gene", sources: "Source: NASS, Your diagnosis" },
    },
  },
  "beyond-spine": {
    sectionRefs: [[[1, 9], [2]], [[3, 4], [3]], [[5, 4], [6, 7, 4]], [[4, 6], [6, 4, 8]], [[4], [4]]],
    helpRefs: [[4], [3], [6], [6], [8]],
    stats: {
      1: [{ value: "About 1 in 4", label: "people with axial SpA will have an attack of uveitis at some time in their life, says NASS.", ref: 3, picture: "one-in-four" }],
    },
    charts: {
      2: { kind: "bars", title: "The gut and the skin", subtitle: "People with axial SpA, out of every 100", bars: [{ label: "Also develop inflammatory bowel disease", value: 7 }, { label: "Also develop psoriasis", value: 9, strong: true }], sources: "Source: NASS, Your gut and Your skin" },
    },
  },
  "exercise": {
    sectionRefs: [[[1], [2, 1]], [[3, 1], [2]], [[2], [2], [2]], [[4], [3, 1], [5]], [[3], [3], [3]]],
    helpRefs: [[2], [2], [3], [3], [3], [1]],
    stats: {
      4: [{ value: "Over 65", label: "or having had axial SpA for more than 10 years is a reason to check with a health professional before a new exercise programme, says NASS.", ref: 3 }],
    },
  },
  "nsaids": {
    sectionRefs: [[[1, 2], [2, 1]], [[1], [1], [2]], [[3, 1], [4, 1], [3, 4]], [[1], [1, 4], [1]], [[2], [5]]],
    helpRefs: [[1], [1], [4], [1], [4], [1]],
    stats: {
      1: [
        { value: "Within a few hours", label: "is how quickly NSAIDs usually work, says NASS, though the full benefit can take up to 2 weeks.", ref: 1, picture: "hours" },
        { value: "2 to 4 weeks", label: "is when to go back to your GP if your NSAID has not relieved your pain and stiffness, says NASS.", ref: 1, picture: "calendar" },
      ],
      3: [{ value: "About 3 extra", label: "heart attacks for every 1,000 people treated with ibuprofen or diclofenac, in research described by NASS.", ref: 1 }],
    },
  },
  "biologics": {
    sectionRefs: [[[1], [1]], [[1, 2], [1]], [[1, 3], [3, 4]], [[1], [1, 3, 5]], [[5, 6], [5], [4]]],
    helpRefs: [[1], [5], [5], [5], [5], [4]],
    stats: {
      3: [{ value: "3 to 6 months", label: "may be needed to be certain whether a biologic is working, says NASS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      3: { kind: "donut", title: "Most people respond", subtitle: "People with axial SpA on biologic therapy, out of every 100", value: 80, prefix: "About", subject: "people on biologic therapy", label: "have a meaningful response", sources: "Source: NASS, Biologic therapy" },
    },
  },
  "physio": {
    sectionRefs: [[[1, 2], [2]], [[2], [2], [3]], [[1, 4], [4, 3]], [[4], [4]], [[2, 5], [6, 5]]],
    helpRefs: [[2], [2], [4], [4], [3], [6]],
    stats: {
      0: [{ value: "At least once a year", label: "is how often NASS recommends seeing a physiotherapist after your first assessment.", ref: 2, picture: "calendar" }],
      2: [{ value: "Around half", label: "of what you weigh on land is what you weigh in waist-deep water, says NASS.", ref: 4, picture: "half" }],
    },
    charts: {
      2: { kind: "range", title: "Warmer than a swimming pool", subtitle: "Usual water temperature in a hydrotherapy pool", from: 33, to: 34, unit: "degrees Celsius", sources: "Source: NASS, Hydrotherapy" },
    },
  },
  "posture": {
    sectionRefs: [[[1], [1], [1]], [[1], [1]], [[1], [1]], [[1], [1, 2]], [[3, 4, 5], [1, 6, 7]]],
    helpRefs: [[1], [1], [1], [1], [1], [4, 5]],
    stats: {
      1: [{ value: "Once a month", label: "or so is how often to check your posture against a wall, suggests Arthritis UK.", ref: 1, picture: "calendar" }],
      2: [{ value: "At least an hour", label: "before bed is when to stop looking at screens, suggests Arthritis UK.", ref: 1, picture: "hours" }],
    },
  },
  "fatigue": {
    sectionRefs: [[[1, 2], [1]], [[1, 2], [1]], [[2], [2]], [[3], [4, 3], [4, 3]], [[3, 2], [3]]],
    helpRefs: [[2, 1], [1, 2], [2], [4], [3], [3]],
    stats: {
      1: [{ value: "10 minutes every hour", label: "of rest is often recommended for fatigue, says NASS.", ref: 1, picture: "hours" }],
    },
  },
  "eyes": {
    sectionRefs: [[[1, 2], [1, 2]], [[1, 2], [2, 1]], [[1], [3], [4]], [[1], [3]]],
    helpRefs: [[3], [3], [1], [4]],
    stats: {
      0: [{ value: "About 1 in 4", label: "people with axial SpA will have an attack of uveitis at some time in their life, says NASS.", ref: 1, picture: "one-in-four" }],
      2: [{ value: "Within 24 hours", label: "is when, ideally, to see an eye doctor if you think you have uveitis, says NASS.", ref: 1, picture: "hours" }],
    },
  },
  "support": {
    sectionRefs: [[[1], [2]], [[3, 4], [5, 3]], [[2, 6], [7]], [[8], [8]], [[11, 9], [10]]],
    helpRefs: [[3], [5], [2], [8], [8], [9]],
    stats: {
      0: [{ value: "8,758 hours", label: "a year are spent managing axial SpA on your own, against about 2 hours with a healthcare professional, says NASS.", ref: 1, picture: "hours" }],
    },
  },
};
