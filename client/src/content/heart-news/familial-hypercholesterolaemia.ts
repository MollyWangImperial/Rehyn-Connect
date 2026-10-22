import type { NewsExtras } from "../ischaemic-news";
// Familial hypercholesterolaemia features: paragraph references (numbers are positions in each answer's own sources in fh-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [1]], [[1], [1, 2]], [[1], [1]], [[2], [3, 1]], [[1], [2, 4]]],
    helpRefs: [[5], [2], [2], [2]],
    stats: {
      2: [{ value: "2 or 3 in 100", label: "people with FH have a change in the APOB gene, says HEART UK. Most have a change in an LDL receptor gene.", ref: 1 }],
      3: [{ value: "Around 270,000", label: "people in the UK are estimated to have FH, but many do not know they have it, says the British Heart Foundation.", ref: 2 }],
    },
  },
  "signs": {
    sectionRefs: [[[2], [1, 5]], [[1], [1]], [[1], [1]], [[3], [3]], [[4], [4, 2]]],
    helpRefs: [[2], [3], [5, 1], [1], [3]],
    charts: {
      3: { kind: "bars", title: "A strong family history", subtitle: "Age at diagnosis, in years, below which a close relative's condition counts as a strong family history", bars: [{ label: "Father or brother: under", value: 55 }, { label: "Mother or sister: under", value: 65, strong: true }], max: 80, ticks: [0, 20, 40, 60, 80], unit: " years", sources: "Source: British Heart Foundation, Family history" },
    },
  },
  "diagnosis": {
    sectionRefs: [[[1], [1]], [[2, 5], [2, 5]], [[1, 4], [3]], [[3], [3]], [[3, 6], [3]]],
    helpRefs: [[1], [5], [3, 4], [3], [4]],
    stats: {
      3: [{ value: "2 to 3 months", label: "or sometimes longer, for genetic test results if you are the first in your family to be tested, says HEART UK.", ref: 3, picture: "calendar" }],
    },
    charts: {
      3: { kind: "donut", title: "What the genetic test finds", subtitle: "People with FH, out of every 100", value: 75, prefix: "About", subject: "people with FH", label: "have an altered gene that genetic testing can find", sources: "Source: HEART UK, Genetic testing (about three out of every four)" },
    },
  },
  "risk": {
    sectionRefs: [[[1], [3]], [[1, 2], [2]], [[1, 2], [1]], [[5], [5]], [[4], [4]]],
    helpRefs: [[1], [5], [1], [4], [4]],
    stats: {
      1: [{ value: "Up to 13 times", label: "higher risk of coronary heart disease in people with untreated FH, says the British Heart Foundation.", ref: 2, picture: "times" }],
      3: [{ value: "At least once a year", label: "is how often people with FH should be offered a structured review, says NICE.", ref: 5, picture: "calendar" }],
    },
  },
  "statins": {
    sectionRefs: [[[1, 2], [2, 1]], [[7, 3, 1], [4]], [[1, 5, 2], [2, 1]], [[6, 1], [1]], [[1, 5], [1, 5]]],
    helpRefs: [[2], [5], [1], [1], [5], [2]],
    stats: {
      1: [{ value: "At least 50%", label: "fall in LDL cholesterol from the level before treatment is what NICE recommends aiming for with a statin in adults with FH.", ref: 4, picture: "half" }],
    },
    charts: {
      1: { kind: "bars", title: "How much atorvastatin lowers LDL", subtitle: "Approximate fall in LDL cholesterol, out of every 100, by daily dose of atorvastatin", bars: [{ label: "10mg a day", value: 37 }, { label: "20mg a day", value: 43 }, { label: "40mg a day", value: 49 }, { label: "80mg a day", value: 55, strong: true }], sources: "Source: HEART UK, Questions about statins" },
    },
  },
  "other-treatments": {
    sectionRefs: [[[1], [9]], [[2, 3, 8], [3, 2]], [[4, 10], [4, 5]], [[6], [9]], [[1, 7], [7, 11]]],
    helpRefs: [[1], [8], [9], [4], [4, 3]],
    stats: {
      4: [{ value: "2 to 4 hours", label: "is how long LDL apheresis usually takes, every one to two weeks, says HEART UK.", ref: 7, picture: "hours" }],
    },
    charts: {
      2: { kind: "bars", title: "The most each can lower LDL", subtitle: "Largest fall in LDL cholesterol reported, out of every 100", bars: [{ label: "Ezetimibe on its own", value: 22 }, { label: "Ezetimibe with a statin", value: 27 }, { label: "Inclisiran", value: 52 }, { label: "PCSK9 inhibitors", value: 60, strong: true }], sources: "Sources: HEART UK, Ezetimibe; British Heart Foundation, 4 statin alternatives that lower cholesterol" },
    },
  },
  "lifestyle": {
    sectionRefs: [[[1, 3], [4]], [[1], [1]], [[1], [1, 3]], [[2], [2]], [[2, 3], [2]]],
    helpRefs: [[1], [1], [1], [2], [2], [3]],
    stats: {
      0: [{ value: "57% lower", label: "odds of heart disease with a heart-healthy diet than with a very poor one, among people with FH in a Danish study, says HEART UK.", ref: 4 }],
      3: [{ value: "150 minutes", label: "of moderate exercise a week, or 75 minutes of vigorous activity, says the NHS.", ref: 2, picture: "calendar" }],
      4: [{ value: "14 units", label: "of alcohol a week is the most to drink on a regular basis, says the NHS.", ref: 2 }],
    },
    charts: {
      1: { kind: "bars", title: "Cholesterol in food each day", subtitle: "Limits the BHF suggests for people with FH, in milligrams a day", bars: [{ label: "No more than", value: 300 }, { label: "Ideally less than", value: 200, strong: true }], max: 400, ticks: [0, 100, 200, 300, 400], unit: "mg", sources: "Source: British Heart Foundation, Familial hypercholesterolaemia" },
    },
  },
  "clinic": {
    sectionRefs: [[[1], [2]], [[1], [1]], [[1], [3]], [[2], [2]], [[3, 5], [4]]],
    helpRefs: [[5], [1], [2], [2], [4]],
    stats: {
      3: [{ value: "At least once a year", label: "is how often everyone with FH should be offered a structured review, says NICE.", ref: 2, picture: "calendar" }],
    },
  },
  "relatives": {
    sectionRefs: [[[1], [4, 2]], [[3, 2], [5]], [[2], [3]], [[2], [2]], [[3]]],
    helpRefs: [[1], [2], [2], [4], [3]],
    stats: {
      0: [{ value: "1 in 2", label: "chance that each child of a person with FH inherits it, says the British Heart Foundation.", ref: 1, picture: "one-in", of: 2 }],
      1: [{ value: "3,522", label: "previously undiagnosed cases of FH were found by BHF-funded FH nurses, as of August 2019, says the British Heart Foundation.", ref: 5 }],
    },
  },
  "children": {
    sectionRefs: [[[1], [1, 2, 4]], [[3], [3]], [[1], [2, 5]], [[1], [1]], [[1], [1]]],
    helpRefs: [[1], [2], [1], [1], [1], [1]],
    stats: {
      0: [{ value: "1 in 2", label: "chance that a child of a parent with FH has it too, says HEART UK.", ref: 1, picture: "one-in", of: 2 }],
      2: [{ value: "By age 10", label: "is when NICE says statins should be offered to children with FH, or at the earliest opportunity after that.", ref: 2, picture: "calendar" }],
      3: [{ value: "At least an hour", label: "a day is how active children should be, and three hours for children under five, says HEART UK.", ref: 1, picture: "hours" }],
    },
  },
  "pregnancy": {
    sectionRefs: [[[1, 3], [1]], [[6, 4, 3], [2]], [[2, 3], [5, 2]], [[2, 3], [2, 3]], [[1], [3]]],
    helpRefs: [[1], [2], [2], [2], [3], [2]],
    stats: {
      1: [{ value: "3 months", label: "before trying to conceive is when cholesterol-lowering medicines should be stopped, says NICE.", ref: 3, picture: "calendar" }],
      3: [{ value: "2 to 3 months", label: "at least after giving birth is how long HEART UK's specialists advise waiting before a cholesterol test.", ref: 2, picture: "calendar" }],
    },
  },
  "living": {
    sectionRefs: [[[1], [7]], [[6], [6]], [[2], [2]], [[3], [4]], [[5], [1, 3]]],
    helpRefs: [[6], [6], [2], [3], [5], [1]],
    stats: {
      3: [{ value: "3 months", label: "of medicine on one prescription is worth asking your GP for once your dose is stable, says HEART UK.", ref: 3, picture: "calendar" }],
      4: [{ value: "9am to 5pm", label: "on weekdays, cardiac nurses answer the BHF Heart Helpline on 0808 802 1234.", ref: 5, picture: "hours" }],
    },
  },
};
