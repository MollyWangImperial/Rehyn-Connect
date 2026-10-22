import type { NewsExtras } from "../ischaemic-news";
// Vitamin D deficiency features: paragraph references (numbers are positions in each answer's own sources in vitamin-d-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[1], [1, 3]], [[4], [4]], [[1], [5]], [[1], [6]]],
    helpRefs: [[1], [2, 1], [1], [7]],
    stats: {
      0: [{ value: "10 micrograms", label: "of vitamin D a day is what children from the age of 1 and adults need, says the NHS.", ref: 1 }],
    },
  },
  "risk": {
    sectionRefs: [[[1], [1]], [[1], [2]], [[3, 4], [4]], [[4, 3], [3, 4]], [[5], [5, 6]]],
    helpRefs: [[1], [1], [1, 4], [7], [1]],
    charts: {
      4: { kind: "bars", title: "Adults with low vitamin D", subtitle: "Adults with a blood level below 25 nmol/L, 2019 to 2023, out of every 100", bars: [{ label: "Aged 19 to 64", value: 18, strong: true }, { label: "Aged 65 and over", value: 12 }], sources: "Source: NICE CKS, Vitamin D deficiency in adults: how common is it? (UK National Diet and Nutrition Survey)" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [2]], [[1], [1]], [[1], [1, 2]], [[3], [4]], [[5], [6]]],
    helpRefs: [[1], [1], [7], [8]],
    stats: {
      3: [{ value: "Below 25 nmol/L", label: "is the blood level of vitamin D at which the risk of bone and muscle problems rises, says NICE's summary for GPs.", ref: 4 }],
    },
  },
  "tests": {
    sectionRefs: [[[1], [2]], [[2], [1]], [[2], [3]], [[4], [5]], [[6]]],
    helpRefs: [[1], [1], [4], [1]],
    stats: {
      4: [{ value: "1 month", label: "after starting a high-dose course is when you will usually have a blood test, then again after 3 to 6 months, says the NHS.", ref: 6, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "Reading a vitamin D result", subtitle: "UK thresholds for 25-hydroxyvitamin D in the blood, in nmol/L", bars: [{ label: "Risk of deficiency rises below", value: 25 }, { label: "Enough for most people above", value: 50, strong: true }], max: 75, ticks: [0, 25, 50, 75], unit: " nmol/L", sources: "Source: NICE CKS, Vitamin D deficiency in adults: what is it?" },
    },
  },
  "supplements": {
    sectionRefs: [[[1], [1]], [[1], [1, 2]], [[2, 1], [2]], [[3, 4], [2, 4, 6]], [[5], [5, 1]]],
    helpRefs: [[1], [1], [1], [2], [2, 4], [1]],
    stats: {
      2: [
        { value: "10 micrograms", label: "a day, the same as 400 IU, will be enough for most people, says the NHS.", ref: 1 },
        { value: "20 micrograms", label: "a day may be advised by your doctor if you are at risk of osteoporosis or take a medicine for it, says the Royal Osteoporosis Society.", ref: 2 },
      ],
    },
  },
  "treatment": {
    sectionRefs: [[[1], [2, 4]], [[2], [2]], [[3], [4]], [[5], [1]], [[2], [2, 6]]],
    helpRefs: [[2], [2], [2], [2], [7], [8]],
    stats: {
      1: [{ value: "Up to 300,000IU", label: "is the total loading dose a doctor may prescribe for severe deficiency in adults, says the NHS.", ref: 2 }],
      4: [{ value: "800IU to 2,000IU", label: "a day is the maintenance dose a doctor may prescribe after a loading dose, says the NHS.", ref: 2 }],
    },
    charts: {
      1: { kind: "bars", title: "Four ways to take a loading dose", subtitle: "Adult loading doses of up to 300,000IU, by how many weeks each takes", bars: [{ label: "50,000IU once a week", value: 6, strong: true }, { label: "40,000IU once a week", value: 7 }, { label: "1,000IU four times a day", value: 10 }, { label: "800IU five times a day", value: 10 }], max: 12, ticks: [0, 4, 8, 12], unit: " weeks", sources: "Source: NHS, How and when to take colecalciferol" },
    },
  },
  "food": {
    sectionRefs: [[[1, 2], [2]], [[1, 2], [1, 3, 2]], [[1], [3]], [[3, 4], [4, 1]], [[3], [2]]],
    helpRefs: [[1, 3], [3], [3], [4, 3], [3, 2]],
    stats: {
      3: [
        { value: "1 portion", label: "of oily fish a week is what to try to eat, says the Royal Osteoporosis Society.", ref: 3 },
        { value: "No more than 2", label: "portions of oily fish a week if you are pregnant, says the NHS.", ref: 4 },
      ],
    },
  },
  "sunlight": {
    sectionRefs: [[[1], [2]], [[1, 3], [4, 1]], [[5], [5, 1]], [[5, 3], [5]], [[5, 4], [6]]],
    helpRefs: [[1, 3], [5], [5, 1], [5], [5], [5, 4]],
    stats: {
      2: [{ value: "11am to 3pm", label: "is when the sun is strongest in the UK, from March to October, so spend time in the shade, says the NHS.", ref: 5, picture: "hours" }],
    },
    charts: {
      1: { kind: "bars", title: "Short spells of summer sun", subtitle: "Suggested minutes in the sun without sunscreen, each time, taking care not to burn", bars: [{ label: "Royal Osteoporosis Society: once or twice a day", value: 10 }, { label: "NHS: 2 or 3 times a week", value: 15, strong: true }], max: 20, ticks: [0, 5, 10, 15, 20], unit: " minutes", sources: "Sources: Royal Osteoporosis Society, Vitamin D; NHS, Rickets and osteomalacia" },
    },
  },
  "too-much": {
    sectionRefs: [[[1, 5], [1]], [[1, 3], [1]], [[3], [4]], [[2], [2]]],
    helpRefs: [[1], [3, 6], [4], [2], [2], [5]],
    stats: {
      0: [{ value: "10 micrograms", label: "a day will be enough for most people who choose to take vitamin D, says the NHS.", ref: 1 }],
    },
    charts: {
      1: { kind: "bars", title: "The most vitamin D in a day", subtitle: "Daily upper limits from supplements, in micrograms, by age", bars: [{ label: "Adults and children aged 11 to 17", value: 100, strong: true }, { label: "Children aged 1 to 10", value: 50 }, { label: "Babies under 12 months", value: 25 }], max: 120, ticks: [0, 40, 80, 120], unit: " micrograms", sources: "Source: NHS, Vitamin D" },
    },
  },
  "bones": {
    sectionRefs: [[[1], [2, 3]], [[4, 6, 7], [4, 5, 1]], [[5, 4], [8]], [[6, 1], [1, 6]], [[5], [6]]],
    helpRefs: [[6, 1], [6, 1], [4, 5], [4], [6], [9]],
    stats: {
      3: [{ value: "150 minutes", label: "of moderate-intensity exercise every week is what people over 65 should try to get, says the NHS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      1: { kind: "bars", title: "Calcium a day", subtitle: "Daily calcium amounts for adults, in milligrams", bars: [{ label: "Most adults need", value: 700, strong: true }, { label: "May be advised if at risk of osteoporosis, around", value: 1000 }, { label: "Supplements above this can be bad for health", value: 1500 }], max: 1600, ticks: [0, 400, 800, 1200, 1600], unit: "mg", sources: "Source: Royal Osteoporosis Society, Calcium" },
    },
  },
  "groups": {
    sectionRefs: [[[1, 2], [1]], [[1, 2], [1]], [[3], [4, 3]], [[4]], [[5, 6], [6]]],
    helpRefs: [[1], [1], [3], [4], [6], [7]],
    stats: {
      0: [{ value: "500ml", label: "of infant formula a day, about a pint, is the amount above which a baby should not be given a vitamin D supplement, says the NHS.", ref: 1 }],
      1: [{ value: "10 micrograms", label: "of vitamin D every day for children aged 1 to 4, says the NHS.", ref: 1 }],
    },
  },
  "medicines": {
    sectionRefs: [[[3, 4], [3, 2]], [[1, 4, 3], [1, 4]], [[1], [1]], [[2], [6, 2]], [[2]]],
    helpRefs: [[1], [1], [5], [3]],
  },
};
