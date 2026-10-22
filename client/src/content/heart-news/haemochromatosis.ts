import type { NewsExtras } from "../ischaemic-news";
// Haemochromatosis features: paragraph references (numbers are positions in each answer's own sources in haemochromatosis-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[2], [4, 2]], [[1], [3, 5]], [[1, 3], [1, 3, 2]]],
    helpRefs: [[1], [1], [1], [3]],
    stats: {
      3: [{ value: "As many as 1 in 150", label: "people in England and Wales have the condition, and most are unaware, says Haemochromatosis UK.", ref: 5, picture: "one-in", of: 150 }],
    },
  },
  "genes": {
    sectionRefs: [[[2], [1]], [[1], [2, 1]], [[1], [4]], [[2], [5]], [[1], [3]]],
    helpRefs: [[3], [5], [6], [1, 3]],
    stats: {
      1: [{ value: "Around 1 in 10", label: "people in the UK carry the gene variant that most commonly causes haemochromatosis, says Liver UK.", ref: 2, picture: "one-in", of: 10 }],
      3: [{ value: "More than 8 in 10", label: "people with haemochromatosis have the C282Y variant as the cause, says Liver UK.", ref: 2 }],
    },
    charts: {
      2: { kind: "waffle", title: "When two carriers have a baby", subtitle: "The chances for each baby, out of every 100", groups: [{ label: "Two normal genes: not affected, not a carrier", count: 25, tone: "green" }, { label: "One faulty gene: a carrier", count: 50, tone: "clay" }, { label: "Two faulty genes: at risk", count: 25, tone: "dark" }], sources: "Source: NHS, Haemochromatosis causes" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [5, 1]], [[1, 4], [2]], [[1, 3], [3]], [[1], [1, 2]], [[2]]],
    helpRefs: [[1, 4], [1, 4], [1, 4], [2], [3]],
    charts: {
      0: { kind: "range", title: "When symptoms usually begin", subtitle: "The ages at which symptoms usually start, though they can start earlier, says the NHS", from: 30, to: 60, unit: "years of age", sources: "Source: NHS, Haemochromatosis symptoms" },
    },
  },
  "tests": {
    sectionRefs: [[[1], [5]], [[1], [2], [2]], [[1, 2], [2, 3]], [[2], [2]], [[1], [2]]],
    helpRefs: [[1, 4], [2], [2], [2]],
    stats: {
      0: [{ value: "About 3 in 4", label: "cases of haemochromatosis are picked up by testing relatives of someone diagnosed, says Liver UK.", ref: 5 }],
      2: [{ value: "4 to 6 weeks", label: "is how long the genetic test result takes, says Haemochromatosis UK.", ref: 3, picture: "calendar" }],
    },
    charts: {
      1: { kind: "bars", title: "Transferrin saturation", subtitle: "Per cent, as Liver UK describes the levels", bars: [{ label: "Normal level, around", value: 30 }, { label: "May mean too much iron, above", value: 45, strong: true }], max: 100, ticks: [0, 25, 50, 75, 100], unit: "%", sources: "Source: Liver UK, Tests and diagnosis of haemochromatosis" },
    },
  },
  "venesection": {
    sectionRefs: [[[1], [2]], [[2], [1, 2]], [[1], [1, 3]], [[2], [2]], [[1], [2, 4]]],
    helpRefs: [[2], [2], [2], [2], [2]],
    stats: {
      0: [
        { value: "About 500ml", label: "of blood is usually removed each time, says the NHS.", ref: 1 },
        { value: "Around 250mg", label: "of iron is taken out with each pint of blood, says Liver UK.", ref: 2 },
      ],
      1: [{ value: "About 12 weeks", label: "is how long red blood cells last, so they are constantly being replaced, says Liver UK.", ref: 2, picture: "calendar" }],
      2: [{ value: "2 to 4 times a year", label: "is how often blood is usually removed in maintenance, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "targets": {
    sectionRefs: [[[5], [2]], [[1], [2]], [[1], [3, 2]], [[6], [4]], [[1], [5]]],
    helpRefs: [[2], [6], [3], [1], [5]],
    stats: {
      4: [{ value: "Every 6 or 12 months", label: "an appointment with your consultant should be offered, says Haemochromatosis UK.", ref: 1, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "Ferritin targets", subtitle: "Serum ferritin in micrograms per litre, as Haemochromatosis UK sets out", bars: [{ label: "Bringing iron down: until between 20 and", value: 30 }, { label: "Maintenance, ideally below", value: 50, strong: true }, { label: "Maintenance is reached below", value: 100 }], max: 120, ticks: [0, 40, 80, 120], unit: " μg/l", sources: "Source: Haemochromatosis UK, Treatment & Care" },
    },
  },
  "liver-checks": {
    sectionRefs: [[[1], [4]], [[1, 2], [5], [2]], [[2], [4]], [[2], [5]], [[3], [1]]],
    helpRefs: [[1], [2], [5], [3]],
    stats: {
      1: [
        { value: "About half an hour", label: "is how long a FibroScan or liver MRI takes, says Liver UK. Both are painless.", ref: 1 },
        { value: "Over 1000 μg/l", label: "serum ferritin means referral to a liver specialist, says Haemochromatosis UK.", ref: 5 },
      ],
      3: [{ value: "Every 6 months", label: "a liver ultrasound is done if cirrhosis is found, says Haemochromatosis UK.", ref: 5, picture: "calendar" }],
    },
  },
  "food": {
    sectionRefs: [[[1], [3]], [[1, 4], [2]], [[1], [2]], [[1, 4], [2, 5]], [[2], [2]]],
    helpRefs: [[1, 4], [1, 2], [1, 2], [2], [2], [2]],
    stats: {
      3: [
        { value: "Fewer than 14 units", label: "of alcohol a week once iron levels are back to normal, says Liver UK.", ref: 2 },
        { value: "At least 3", label: "alcohol-free days in a row each week, says Liver UK.", ref: 2, picture: "calendar" },
      ],
    },
  },
  "family": {
    sectionRefs: [[[1], [4]], [[2], [7, 3]], [[6, 5], [6]], [[8], [8]], [[5], [5]]],
    helpRefs: [[1], [7], [3], [6], [5]],
    stats: {
      0: [{ value: "About 3 in 4", label: "cases of haemochromatosis are picked up by testing relatives, says Liver UK.", ref: 4 }],
      1: [{ value: "At least 1 in 4", label: "is the chance that a brother or sister is affected, says Haemochromatosis UK.", ref: 7, picture: "one-in-four" }],
      2: [{ value: "About 1 in 20", label: "is the chance each child of a person with two C282Y copies has it, says Haemochromatosis UK.", ref: 6, picture: "one-in", of: 20 }],
      3: [{ value: "Every 2 to 3 years", label: "carriers with normal iron and no symptoms need iron checks, says Haemochromatosis UK.", ref: 8, picture: "calendar" }],
    },
  },
  "joints": {
    sectionRefs: [[[3], [6]], [[4], [5]], [[2, 4], [3, 4]], [[2], [1, 2]], [[2], [1, 3, 4]]],
    helpRefs: [[2], [2], [1], [2], [2]],
    charts: {
      0: { kind: "donut", title: "A very common symptom", subtitle: "People with haemochromatosis, out of every 100", value: 80, prefix: "More than", subject: "people with haemochromatosis", label: "have pains in their joints (more than 8 in 10)", sources: "Source: Liver UK, Complications and related conditions" },
    },
  },
  "blood-donation": {
    sectionRefs: [[[1], [4]], [[1], [2]], [[3, 1], [1]], [[1, 3], [2]], [[1, 3], [4]]],
    helpRefs: [[1], [1], [2], [1, 3], [3]],
    stats: {
      1: [{ value: "17 to 66", label: "is the age range for first-time blood donors, says Haemochromatosis UK.", ref: 2 }],
      2: [
        { value: "Every 6 weeks", label: "is how often donors with haemochromatosis in England can give blood, at most, says Haemochromatosis UK.", ref: 3, picture: "calendar" },
        { value: "Every 12 to 16 weeks", label: "is the usual frequency at which carriers can donate, says NHS Blood and Transplant.", ref: 1, picture: "calendar" },
      ],
    },
  },
  "living": {
    sectionRefs: [[[1, 5, 7], [1]], [[1], [1]], [[1], [1]], [[2], [2]], [[1, 6], [3, 4]]],
    helpRefs: [[1], [1], [1], [1], [2], [3, 4]],
  },
};
