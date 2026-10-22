import type { NewsExtras } from "../ischaemic-news";
// Acute kidney injury features: paragraph references (numbers are positions in each answer's own sources in aki-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [5, 2, 1]], [[3], [2, 3]], [[3, 2], [5, 3]], [[2], [1, 5, 2]]],
    helpRefs: [[1], [1], [4], [5], [2]],
    stats: {
      1: [{ value: "Within 6 weeks", label: "is how recent acute can mean, though AKI often develops over a period of days, says the National Kidney Federation.", ref: 3, picture: "calendar" }],
    },
  },
  "causes": {
    sectionRefs: [[[1, 3], [3]], [[1, 3, 2], [1, 3, 4, 2]], [[1, 3], [1, 5, 6]], [[3, 1, 4], [3]]],
    helpRefs: [[4, 3], [4], [1], [6], [1]],
  },
  "who": {
    sectionRefs: [[[1, 2, 6], [4]], [[1], [3]], [[5], [3]], [[3], [7]]],
    helpRefs: [[1], [1], [7], [3], [1]],
    stats: {
      1: [{ value: "65 or older", label: "is the age from which AKI is more common, says the NHS.", ref: 1 }],
    },
    charts: {
      0: { kind: "range", title: "Common in hospital", subtitle: "People admitted to hospital who have AKI, out of every 100", from: 13, to: 18, sources: "Source: NICE, Acute kidney injury (NG148), context" },
    },
  },
  "signs": {
    sectionRefs: [[[1, 3], [4]], [[1, 2], [1, 2]], [[1, 3], [1, 3], [5]], [[1], [1, 6]]],
    helpRefs: [[1], [1], [6], [6], [1]],
    stats: {
      2: [{ value: "Within 48 hours", label: "a rise in creatinine of 26 micromol per litre or more is one way NICE says AKI is detected.", ref: 5, picture: "hours" }],
      3: [{ value: "18 hours", label: "of not peeing, or peeing very little, is listed by the NHS among the symptoms of sepsis in adults.", ref: 6, picture: "hours" }],
    },
  },
  "treatment": {
    sectionRefs: [[[1, 3], [2, 1]], [[2, 1], [2, 1]], [[4, 3, 1], [6]], [[3, 5], [1, 5, 4]], [[3]]],
    helpRefs: [[3], [7], [2], [6]],
    charts: {
      3: { kind: "bars", title: "How quickly NICE says to act", subtitle: "The longest wait, in hours, for three steps in NICE's guideline", bars: [{ label: "Scan for an infected, blocked kidney", value: 6, strong: true }, { label: "Stent or tube for a blocked kidney", value: 12 }, { label: "Scan when there is no clear cause", value: 24 }], max: 24, ticks: [0, 6, 12, 18, 24], unit: " hours", sources: "Source: NICE, Acute kidney injury (NG148), recommendations" },
    },
  },
  "medicines": {
    sectionRefs: [[[6, 1], [7]], [[2], [3], [5]], [[4], [4]], [[3, 2], [3, 8]]],
    helpRefs: [[7], [3], [7], [3, 4], [2]],
    stats: {
      3: [{ value: "At least 48 hours", label: "of eating and drinking normally again before restarting paused medicines, says Kidney Care UK.", ref: 3, picture: "hours" }],
    },
  },
  "recovery": {
    sectionRefs: [[[2, 1], [3, 1]], [[3], [3]], [[3], [3]], [[1], [4, 1]]],
    helpRefs: [[1], [5], [3], [3], [4]],
    stats: {
      0: [{ value: "A few weeks", label: "is how long many people take to recover fully, with no long-term effects, says the NHS.", ref: 1, picture: "calendar" }],
      3: [{ value: "2 to 3 years", label: "after an episode of AKI is when chronic kidney disease can also develop, says Kidney Research UK.", ref: 4, picture: "calendar" }],
    },
  },
  "dialysis": {
    sectionRefs: [[[4], [3, 4]], [[2, 1, 4], [7]], [[2, 3], [5, 6]], [[5], [5, 7]]],
    helpRefs: [[8], [5], [7], [2]],
    stats: {
      1: [{ value: "A few days or weeks", label: "is how long most people with AKI need dialysis, until their kidneys start working again, says Kidney Care UK.", ref: 2, picture: "calendar" }],
    },
  },
  "sick-days": {
    sectionRefs: [[[3, 5, 2], [2]], [[1, 3], [3]], [[6], [7]], [[3], [4, 3]]],
    helpRefs: [[1], [2, 5], [3], [6], [3]],
    stats: {
      0: [{ value: "At least 48 hours", label: "of eating and drinking normally again before restarting medicines paused under sick day rules, says Kidney Care UK.", ref: 2, picture: "hours" }],
    },
    charts: {
      3: { kind: "bars", title: "When to call 111", subtitle: "Days of symptoms after which the NHS says to call 111", bars: [{ label: "Vomiting for more than", value: 2, strong: true }, { label: "Diarrhoea for more than", value: 7 }], max: 8, ticks: [0, 2, 4, 6, 8], unit: " days", sources: "Source: NHS, Diarrhoea and vomiting" },
    },
  },
  "checks": {
    sectionRefs: [[[1], [2]], [[4], [4]], [[3]], [[5], [5]]],
    helpRefs: [[1], [2], [3], [5], [5]],
    stats: {
      0: [{ value: "At least 3 years", label: "of kidney function and blood pressure checks by your GP after an episode of AKI, says Kidney Care UK.", ref: 2, picture: "calendar" }],
      2: [{ value: "About a month", label: "after recovery is when a urine test may check that a urine infection has gone, says the National Kidney Federation.", ref: 3, picture: "calendar" }],
    },
  },
  "painkillers": {
    sectionRefs: [[[1, 4], [8, 2, 4]], [[5, 2], [7, 2]], [[2], [6]], [[3], [5]]],
    helpRefs: [[3], [2], [2], [3], [5]],
    stats: {
      2: [{ value: "8 tablets", label: "in 24 hours is the most paracetamol at the standard dose, says Kidney Care UK.", ref: 2, picture: "hours" }],
    },
  },
  "future": {
    sectionRefs: [[[1], [2]], [[1], [2]], [[1, 3], [5, 1, 2]], [[4, 2], [6]]],
    helpRefs: [[2], [1], [2], [1], [5], [6]],
    stats: {
      0: [{ value: "After 1 day", label: "rather than 3 or 4 days is when you may be told to see a doctor if you feel unwell, says the National Kidney Federation.", ref: 2, picture: "calendar" }],
    },
  },
};
