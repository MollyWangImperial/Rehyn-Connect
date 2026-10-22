import type { NewsExtras } from "../ischaemic-news";
// Coeliac disease features: paragraph references (numbers are positions in each answer's own sources in coeliac-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [1]], [[3], [3, 4]], [[5, 1], [6]], [[1, 2], [1, 5]], [[1], [4, 5]]],
    helpRefs: [[6], [6], [2, 4], [1]],
    stats: {
      3: [{ value: "At least 1 in 100", label: "people in the UK have coeliac disease, says the NHS.", ref: 1, picture: "one-in", of: 100 }],
    },
    charts: {
      3: { kind: "donut", title: "Most are not yet diagnosed", subtitle: "People with coeliac disease in the UK, out of every 100", value: 36, prefix: "Only", subject: "people with coeliac disease", label: "have been diagnosed", sources: "Source: Coeliac UK, About coeliac disease" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [2, 1]], [[1], [1, 2]], [[1], [2, 1], [3]], [[1], [1, 5]], [[2], [2, 6]]],
    helpRefs: [[2], [2], [4], [2]],
    stats: {
      3: [{ value: "Around 1 in 4", label: "people with coeliac disease develop the itchy rash dermatitis herpetiformis, says the NHS.", ref: 1, picture: "one-in-four" }],
      4: [{ value: "13 years", label: "is the average time it takes to be diagnosed, Coeliac UK's research shows.", ref: 6 }],
    },
  },
  "testing": {
    sectionRefs: [[[1], [1, 5]], [[2], [3, 1], [2]], [[1], [1, 3]], [[1], [1, 6], [3, 2]], [[4], [4]]],
    helpRefs: [[3], [1], [2], [3], [4]],
    stats: {
      1: [{ value: "At least 6 weeks", label: "of eating some gluten in more than one meal every day is recommended before testing, says Coeliac UK.", ref: 3, picture: "calendar" }],
    },
    charts: {
      1: { kind: "bars", title: "What 3g of gluten looks like", subtitle: "Grams of each food that contain about 3g of gluten, from Coeliac UK's examples for eating gluten before tests", bars: [{ label: "Wheat-based breakfast cereal", value: 25 }, { label: "Wheat-based biscuits", value: 50 }, { label: "Wheat-based bread", value: 60, strong: true }, { label: "Wheat-based cooked pasta", value: 90 }], max: 100, ticks: [0, 25, 50, 75, 100], unit: "g", sources: "Source: Coeliac UK, Getting diagnosed" },
      3: { kind: "range", title: "Diagnosed without a biopsy", subtitle: "Adults with symptoms whose very high antibody levels can mean no biopsy is needed, out of every 100", from: 20, to: 30, sources: "Source: Coeliac UK, Blood tests and biopsy" },
    },
  },
  "family": {
    sectionRefs: [[[1], [2, 3]], [[1, 8], [1]], [[5, 6], [5, 7], [6]], [[1], [8, 6], [2]], [[4, 9], [9]]],
    helpRefs: [[2], [6, 7], [9], [6], [9]],
    stats: {
      0: [{ value: "Around 1 in 10", label: "close relatives of people with coeliac disease will be at risk, says Coeliac UK.", ref: 2, picture: "one-in", of: 10 }],
    },
    charts: {
      2: { kind: "bars", title: "Who is more likely to have it", subtitle: "Chance of having or developing coeliac disease, out of every 100", bars: [{ label: "General population", value: 1 }, { label: "Autoimmune thyroid disease, up to", value: 4 }, { label: "Type 1 diabetes, up to", value: 9 }, { label: "Close relatives, around", value: 10 }, { label: "Identical twin, around", value: 75, strong: true }], sources: "Sources: Coeliac UK, Related conditions and Who should get tested?; NHS, Coeliac disease: causes" },
    },
  },
  "gluten-free": {
    sectionRefs: [[[1], [2], [5]], [[1], [1, 2]], [[1, 2], [1, 6], [4]], [[1], [7, 2]], [[1, 3], [3], [3]]],
    helpRefs: [[1], [2], [1], [1], [2], [3]],
    stats: {
      4: [{ value: "6 months to 5 years", label: "is how long gut damage can take to fully heal, and sometimes longer, says Coeliac UK.", ref: 3, picture: "calendar" }],
    },
  },
  "labels": {
    sectionRefs: [[[1], [1]], [[3, 2], [1], [6]], [[1], [1]], [[3, 9], [3, 7, 8]], [[3, 5], [4]]],
    helpRefs: [[1], [1], [1], [4], [4], [7]],
    stats: {
      0: [{ value: "14", label: "listed allergens have to be emphasised on food labels, and cereals containing gluten are one of them, says Coeliac UK.", ref: 1 }],
      1: [{ value: "20 ppm", label: "of gluten is the most that food labelled gluten-free can contain by law, says the NHS.", ref: 3 }],
    },
  },
  "nutrition": {
    sectionRefs: [[[4], [1, 2]], [[3], [3], [3]], [[8], [8]], [[5], [11, 5], [9]], [[6], [6], [7, 10]]],
    helpRefs: [[2], [3], [5, 11], [9], [6], [3]],
    stats: {
      1: [{ value: "A quarter", label: "of adults are estimated to be anaemic due to iron deficiency when diagnosed with coeliac disease, says Coeliac UK.", ref: 3, picture: "one-in-four" }],
      3: [{ value: "700mg", label: "of calcium a day for adults with coeliac disease, the same as the general population, says Coeliac UK.", ref: 5 }],
      4: [{ value: "30 grams", label: "of fibre a day is the aim for adults in the UK, says Coeliac UK.", ref: 6 }],
    },
  },
  "follow-up": {
    sectionRefs: [[[1], [1]], [[1, 6]], [[2], [1], [1]], [[2], [3]], [[4], [1, 4], [2, 4]]],
    helpRefs: [[2], [1], [2, 3], [4], [1], [5]],
    stats: {
      0: [{ value: "Up to two years", label: "of regular follow-up after diagnosis is recommended by the British Society of Gastroenterology, says Coeliac UK.", ref: 1, picture: "calendar" }],
      1: [{ value: "Around one year", label: "after starting the gluten-free diet, adults should have a DEXA scan, says Coeliac UK.", ref: 1, picture: "calendar" }],
      4: [{ value: "Around 1 in 3", label: "people have ongoing symptoms after starting a gluten-free diet, says Coeliac UK.", ref: 4, picture: "one-in", of: 3 }],
    },
  },
  "eating-out": {
    sectionRefs: [[[1], [2], [5, 2]], [[2], [5]], [[3], [3]], [[4], [4], [4, 5]], [[4], [6]]],
    helpRefs: [[2], [2], [2], [2], [4], [4]],
    stats: {
      3: [{ value: "Over 50", label: "countries have a Coeliac UK travel guide, with translations of useful phrases.", ref: 4 }],
    },
  },
  "prescriptions": {
    sectionRefs: [[[3], [1]], [[1, 2], [1, 2, 5]], [[2], [2]], [[6, 3], [6, 4], [8, 7]], [[1, 4], [4]]],
    helpRefs: [[1], [4], [6], [4], [8]],
    stats: {
      3: [
        { value: "Almost 8 in 10", label: "people struggled to afford gluten-free products, Coeliac UK's research found.", ref: 6 },
        { value: "As much as 35%", label: "more expensive is the weekly food shop for a gluten-free diet, says Coeliac UK.", ref: 6 },
      ],
    },
    charts: {
      2: { kind: "bars", title: "Units a month, as a guide", subtitle: "Gluten-free staple units a month suggested by the national prescribing guidelines, by age and sex (in England, bread and flour mixes only)", bars: [{ label: "Men aged 19 to 59", value: 18, strong: true }, { label: "Men aged 60 to 74", value: 16 }, { label: "Men aged 75 and over", value: 14 }, { label: "Women aged 19 to 74", value: 14 }, { label: "Women aged 75 and over", value: 12 }], max: 20, ticks: [0, 5, 10, 15, 20], unit: " units", sources: "Source: Coeliac UK, How much should be prescribed" },
    },
  },
  "bones": {
    sectionRefs: [[[2, 3, 1], [1], [1]], [[1], [1]], [[1, 5], [1]], [[1], [7, 8], [9, 1]], [[4, 1], [1, 4]]],
    helpRefs: [[1, 6], [1], [8], [1], [1], [1]],
    stats: {
      2: [{ value: "One year", label: "after starting the gluten-free diet, all newly diagnosed adults should have a DEXA scan, says Coeliac UK.", ref: 1, picture: "calendar" }],
    },
    charts: {
      0: { kind: "range", title: "Thinner bones at diagnosis", subtitle: "People with osteopenia or osteoporosis when diagnosed with coeliac disease, out of every 100, in studies reported by Coeliac UK", from: 38, to: 72, sources: "Source: Coeliac UK, Osteoporosis" },
      3: { kind: "bars", title: "Where the calcium is", subtitle: "Milligrams of calcium in a portion, against 700mg a day for adults", bars: [{ label: "Semi-skimmed milk, 200ml", value: 244, strong: true }, { label: "Calcium-enriched soya milk, 200ml", value: 240 }, { label: "Tinned sardines with bones, 42g", value: 230 }, { label: "Cheddar cheese, 30g", value: 220 }, { label: "Pot of yoghurt, 125g", value: 170 }, { label: "Kale, 80g", value: 120 }, { label: "Almonds, 30g", value: 70 }], max: 300, ticks: [0, 100, 200, 300], unit: "mg", sources: "Source: Coeliac UK, Osteoporosis" },
    },
  },
  "feelings": {
    sectionRefs: [[[1], [9, 6]], [[1, 2], [2]], [[3], [10]], [[4], [5, 4]], [[7], [8]]],
    helpRefs: [[2], [2], [4], [5], [8]],
    stats: {
      4: [{ value: "7 in 10", label: "people say shopping gluten-free adversely affects their quality of life, Coeliac UK's research found.", ref: 7 }],
    },
  },
};
