import type { NewsExtras } from "../ischaemic-news";
// Chronic kidney disease features: paragraph references (numbers are positions in each answer's own sources in ckd-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-kidneys-do": {
    sectionRefs: [[[1, 3], [1]], [[1], [1, 2]], [[1], [1]], [[1], [1]], [[1, 4], [1, 4]]],
    helpRefs: [[5], [5], [5], [5], [4]],
    stats: {
      1: [
        { value: "About a million", label: "tiny filtering units, called nephrons, are in each kidney, says Kidney Care UK.", ref: 1 },
        { value: "180 litres", label: "of blood a day is what the kidneys filter, says Kidney Care UK.", ref: 2 },
      ],
    },
    charts: {
      0: { kind: "bars", title: "The size of a kidney", subtitle: "An average kidney, in centimetres", bars: [{ label: "Long", value: 12, strong: true }, { label: "Wide", value: 6 }, { label: "Thick", value: 3 }], max: 15, ticks: [0, 5, 10, 15], unit: "cm", sources: "Source: Kidney Care UK, Facts about your kidneys" },
    },
  },
  "egfr": {
    sectionRefs: [[[1, 4], [1]], [[2, 4], [1, 4]], [[1], [1]], [[3], [3, 4]], [[5], [6, 2]]],
    helpRefs: [[4], [4], [4], [4, 3], [1], [7]],
    stats: {
      1: [{ value: "More than 90ml/min", label: "is what healthy kidneys should be able to filter, says the NHS.", ref: 1 }],
      4: [{ value: "1 in 50", label: "people with CKD will ever need dialysis or a kidney transplant, says Kidney Care UK.", ref: 2, picture: "one-in", of: 50 }],
    },
    charts: {
      2: { kind: "bars", title: "Where each stage begins", subtitle: "The lowest eGFR in each stage, in ml/min, as the NHS lists them. Stage 5 is below 15.", bars: [{ label: "Stage 1: above", value: 90 }, { label: "Stage 2: from", value: 60 }, { label: "Stage 3a: from", value: 45, strong: true }, { label: "Stage 3b: from", value: 30, strong: true }, { label: "Stage 4: from", value: 15 }], max: 100, ticks: [0, 25, 50, 75, 100], unit: " ml/min", sources: "Source: NHS, Diagnosis of chronic kidney disease" },
    },
  },
  "causes": {
    sectionRefs: [[[1, 2], [2, 9]], [[1, 3], [3]], [[1, 4], [4]], [[1], [1, 2]], [[6], [1, 2, 5]]],
    helpRefs: [[10], [2], [5], [5], [8], [7]],
    stats: {
      0: [{ value: "2 out of 3", label: "CKD cases have diabetes and high blood pressure as factors, says Kidney Care UK.", ref: 2 }],
      1: [{ value: "Nearly 1 in 5", label: "people with diabetes will need to be treated for CKD, says Kidney Care UK.", ref: 3, picture: "one-in", of: 5 }],
    },
    charts: {
      4: { kind: "donut", title: "More common with age", subtitle: "People over the age of 70, out of every 100", value: 40, prefix: "Around", subject: "people over 70", label: "have some form of CKD", sources: "Source: Kidney Care UK, Early stage CKD" },
    },
  },
  "protein": {
    sectionRefs: [[[4], [3, 4, 8]], [[1, 8], [2, 1]], [[1, 2], [2]], [[4], [4]], [[6], [5]]],
    helpRefs: [[6], [2], [6], [7], [4]],
    stats: {
      2: [{ value: "Within 3 months", label: "is when your doctor will want to repeat an ACR of 3 to 70mg/mmol, says Kidney Care UK.", ref: 2, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "Where the urine stages begin", subtitle: "The ACR at which each urine stage starts, in mg/mmol, as the NHS gives them. A1 is below 3.", bars: [{ label: "A2: from", value: 3 }, { label: "A3: more than", value: 30, strong: true }], max: 40, ticks: [0, 10, 20, 30, 40], unit: " mg/mmol", sources: "Source: NHS, Diagnosis of chronic kidney disease" },
    },
  },
  "blood-pressure": {
    sectionRefs: [[[2], [2]], [[1], [2]], [[1], [3, 2]], [[3], [3]], [[2], [2, 4]]],
    helpRefs: [[2], [3], [3], [4, 2], [5], [3]],
    stats: {
      0: [{ value: "More than 1 in 2", label: "people with CKD have high blood pressure, says Kidney Care UK.", ref: 2, picture: "half" }],
      4: [{ value: "More than 5 million", label: "people in England have high blood pressure that has not been diagnosed, says Kidney Care UK.", ref: 5 }],
    },
    charts: {
      1: { kind: "bars", title: "Two NHS targets", subtitle: "The top number of the blood pressure to stay below, in mmHg", bars: [{ label: "With kidney disease", value: 140 }, { label: "With kidney disease and diabetes", value: 130, strong: true }], max: 160, ticks: [0, 40, 80, 120, 160], unit: "mmHg", sources: "Source: NHS, Treatment of chronic kidney disease" },
    },
  },
  "medicines": {
    sectionRefs: [[[1], [2, 1]], [[2], [2, 3]], [[1, 4], [1, 5]], [[1], [6]], [[8, 6], [7, 8]]],
    helpRefs: [[6], [7], [6], [2], [7], [7, 8]],
    stats: {
      1: [{ value: "Once a day", label: "is how SGLT2 inhibitors are taken, as tablets, says Kidney Care UK.", ref: 2, picture: "calendar" }],
    },
  },
  "food": {
    sectionRefs: [[[2, 1], [4]], [[1, 3], [1]], [[5], [5]], [[6, 1], [2, 6, 5]], [[8, 1], [8]]],
    helpRefs: [[1, 2], [1], [5], [5], [8], [4]],
    stats: {
      1: [{ value: "Less than 6g", label: "of salt a day, around 1 teaspoon, is the NHS advice for people with kidney disease.", ref: 3 }],
      3: [{ value: "150ml", label: "a day at most of smoothies or fruit juice, if you have been advised to eat less potassium, says Kidney Care UK.", ref: 6 }],
    },
  },
  "later-stages": {
    sectionRefs: [[[1], [5, 6]], [[2], [2]], [[2], [2, 3]], [[1], [1, 3]], [[4, 1], [3]]],
    helpRefs: [[3], [1], [3], [3], [4]],
    stats: {
      0: [{ value: "1 in 50", label: "people with CKD will ever need dialysis or a kidney transplant, says Kidney Care UK.", ref: 5, picture: "one-in", of: 50 }],
      1: [{ value: "3 times a week", label: "is how often most people have haemodialysis, around 4 hours each time, says the NHS.", ref: 2, picture: "calendar" }],
      3: [{ value: "1 in 3", label: "kidney transplants in the UK is now from a living donor, says Kidney Care UK.", ref: 3, picture: "one-in", of: 3 }],
    },
    charts: {
      3: { kind: "donut", title: "Transplants that keep working", subtitle: "Kidney transplants, out of every 100", value: 90, prefix: "About", subject: "kidney transplants", label: "still function after 5 years", sources: "Source: NHS, Treatment of chronic kidney disease" },
    },
  },
  "sick-days": {
    sectionRefs: [[[1], [5, 3]], [[1], [1]], [[2], [2]], [[4], [4, 7]], [[5], [4, 8]]],
    helpRefs: [[5], [5], [6], [1], [4], [4]],
    stats: {
      1: [{ value: "At least 48 hours", label: "of eating and drinking normally again before restarting paused medicines, says Kidney Care UK.", ref: 1, picture: "hours" }],
      4: [{ value: "After 1 day", label: "rather than 3 or 4 days is when you may be told to see a doctor if you feel unwell, says the National Kidney Federation.", ref: 5, picture: "calendar" }],
    },
  },
  "painkillers": {
    sectionRefs: [[[1], [1, 2]], [[1, 2, 5, 4], [3, 1]], [[1, 2], [1, 2]], [[1], [1]], [[2], [1, 6]]],
    helpRefs: [[1, 6], [1, 3], [1, 2], [2], [2], [2]],
    stats: {
      0: [{ value: "8 tablets", label: "in 24 hours is the most paracetamol at the standard dose, says Kidney Care UK.", ref: 1, picture: "hours" }],
    },
  },
  "tiredness": {
    sectionRefs: [[[1], [1, 8]], [[2], [7, 4]], [[6, 2], [3, 4]], [[2, 4], [5, 4, 3]], [[1], [1]]],
    helpRefs: [[1], [1], [3], [3], [1], [5]],
    stats: {
      0: [{ value: "Up to 1 in 3", label: "people with kidney disease will have depression at some point, says Kidney Care UK.", ref: 8, picture: "one-in", of: 3 }],
      3: [{ value: "Below 110 g/L", label: "of haemoglobin is how anaemia is defined in people with CKD, says Kidney Care UK.", ref: 4 }],
    },
    charts: {
      1: { kind: "donut", title: "Anaemia is common", subtitle: "People with CKD who are not on dialysis, out of every 100", value: 60, subject: "people with CKD not on dialysis", label: "have anaemia, according to a recent study", sources: "Source: Kidney Care UK, Anaemia and CKD: your questions answered" },
    },
  },
  "checks": {
    sectionRefs: [[[2], [1]], [[3], [3, 7]], [[3, 4], [3]], [[5], [6]], [[8, 4], [3, 9]]],
    helpRefs: [[2, 1], [3], [3, 4], [3], [3]],
    stats: {
      0: [{ value: "At least once a year", label: "blood and urine tests for CKD stages 1 to 3, organised by your GP practice, says Kidney Care UK.", ref: 2, picture: "calendar" }],
      2: [{ value: "Twice a week", label: "at least is how often to check your blood pressure at home, suggests the National Kidney Federation.", ref: 4, picture: "calendar" }],
    },
    charts: {
      3: { kind: "bars", title: "Anaemia checks", subtitle: "Haemoglobin tests a year, at least, by CKD stage", bars: [{ label: "Stage 3", value: 1 }, { label: "Stages 4 and 5", value: 2, strong: true }], max: 3, ticks: [0, 1, 2, 3], unit: " a year", sources: "Source: Kidney Care UK, Anaemia: iron comes first" },
    },
  },
};
