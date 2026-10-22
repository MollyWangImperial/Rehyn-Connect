import type { NewsExtras } from "../ischaemic-news";
// Lactose intolerance features: paragraph references (numbers are positions in each answer's own sources in lactose-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[1, 2], [2]], [[4, 3], [2, 5]], [[2], [2], [1]]],
    helpRefs: [[1], [1], [1], [3]],
  },
  "symptoms": {
    sectionRefs: [[[1], [1]], [[2], [3, 4]], [[2], [2]], [[1], [1]], [[1], [1, 5]]],
    helpRefs: [[1], [3], [1], [1], [1]],
    stats: {
      3: [{ value: "3 weeks", label: "of changes in your poo, blood in your poo, or bloating and discomfort means see a GP, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "not-allergy": {
    sectionRefs: [[[1], [4]], [[2], [2, 3]], [[1], [5]], [[5], [6]], [[2, 7], [2]]],
    helpRefs: [[6], [6], [2], [5]],
    stats: {
      3: [{ value: "2% to 3%", label: "of babies and young children in the UK have cow's milk allergy, says the BDA. Most grow out of it by the age of five.", ref: 5 }],
    },
  },
  "diagnosis": {
    sectionRefs: [[[2], [2]], [[1], [2], [3]], [[1], [1], [5]], [[3], [4]]],
    helpRefs: [[4], [3], [4, 6], [3], [5]],
    stats: {
      1: [{ value: "Two weeks", label: "on a strict low-lactose diet, then lactose is brought back, is the check Allergy UK describes.", ref: 2, picture: "calendar" }],
      2: [{ value: "15 to 45 minutes", label: "is how long a gastroscopy should take, says the NHS.", ref: 5 }],
    },
  },
  "cutting-down": {
    sectionRefs: [[[1], [2], [3]], [[2], [3]], [[2], [2]], [[4], [2]], [[2], [1, 6]]],
    helpRefs: [[1], [2], [3], [5, 2], [1]],
  },
  "labels": {
    sectionRefs: [[[2], [1]], [[3, 1, 4], [3], [5]], [[1], [1]], [[4], [1]], [[4], [1]]],
    helpRefs: [[3, 5], [2, 1], [5], [1], [4]],
    stats: {
      1: [{ value: "14", label: "allergens, milk among them, must be declared on food by UK law, says the BDA.", ref: 4 }],
    },
  },
  "calcium": {
    sectionRefs: [[[2], [1, 4, 3]], [[2], [3, 5]], [[1, 3], [2], [3, 5]], [[1], [1, 3]], [[3, 6], [3, 2]]],
    helpRefs: [[1], [3], [2], [6], [3], [7]],
    stats: {
      1: [{ value: "700mg", label: "of calcium a day is what adults need, says the NHS.", ref: 2 }],
      3: [{ value: "About 3", label: "portions a day of dairy foods or calcium-fortified alternatives can help meet calcium needs, says Allergy UK.", ref: 1 }],
    },
    charts: {
      2: { kind: "bars", title: "Calcium in a portion", subtitle: "Milligrams of calcium in one portion of each food, as the BDA lists it", bars: [{ label: "Lactose-free milk, 200ml", value: 240 }, { label: "Cheddar, 30g", value: 240 }, { label: "Plain yoghurt, 150g", value: 240 }, { label: "Sardines with bones, 60g", value: 240 }, { label: "Calcium-set tofu, 100g", value: 300, strong: true }, { label: "Kale, boiled, 100g", value: 150 }, { label: "Orange, one medium", value: 30 }], max: 320, ticks: [0, 80, 160, 240, 320], unit: "mg", sources: "Source: BDA, Calcium food fact sheet" },
    },
  },
  "lactase": {
    sectionRefs: [[[2], [1]], [[2], [2]], [[3], [2]], [[2], [1]], [[2], [2]]],
    helpRefs: [[1], [2], [2], [2]],
  },
  "eating-out": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[2], [2]], [[1], [1], [3]]],
    helpRefs: [[1], [1], [2], [2], [1]],
    stats: {
      0: [{ value: "14", label: "allergens, milk among them, that a restaurant or café must give you information about in writing, says the BDA.", ref: 1 }],
    },
  },
  "after-illness": {
    sectionRefs: [[[1], [1], [2]], [[1], [1]], [[1], [1]], [[1], [3]], [[4], [4]]],
    helpRefs: [[4], [1], [1], [1], [4]],
    stats: {
      1: [{ value: "2 to 8 weeks", label: "is typically how long a strict low-lactose diet lasts while the gut heals, says Allergy UK.", ref: 1, picture: "calendar" }],
      4: [{ value: "5 to 7 days", label: "is when diarrhoea usually stops, says the NHS. Call 111 if it lasts more than 7 days.", ref: 4, picture: "calendar" }],
    },
  },
  "dietitian": {
    sectionRefs: [[[1, 2], [2]], [[4], [6], [7]], [[5], [1]], [[2, 8], [3]]],
    helpRefs: [[1], [5], [6, 7], [8], [3]],
    stats: {
      3: [{ value: "1,000 hours", label: "of on-the-job training are part of a dietitian's accredited degree, says the BDA.", ref: 3, picture: "hours" }],
    },
  },
  "other-conditions": {
    sectionRefs: [[[1]], [[3], [2]], [[10, 5, 8], [4], [6]], [[7], [7]], [[9]]],
    helpRefs: [[1], [2], [4], [6], [7], [5]],
    stats: {
      1: [{ value: "At least 1 in 100", label: "people in the UK have coeliac disease, says the NHS.", ref: 3, picture: "one-in", of: 100 }],
      2: [{ value: "Over 8 in 10", label: "people with IBS report food-related symptoms, says Guts UK.", ref: 6 }],
    },
  },
};
