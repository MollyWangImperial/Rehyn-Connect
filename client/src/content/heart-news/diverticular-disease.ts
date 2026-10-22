import type { NewsExtras } from "../ischaemic-news";
// Diverticular disease features: paragraph references (numbers are positions in each answer's own sources in diverticular-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[1, 2, 4], [2]], [[2], [3]], [[1, 3], [3, 2]]],
    helpRefs: [[1], [1], [2], [2], [2]],
    stats: {
      2: [{ value: "About 1 in 3", label: "people are affected by diverticular disease, rising to 1 in 2 as people get older, says Guts UK.", ref: 2, picture: "one-in", of: 3 }],
      3: [{ value: "70% to 80%", label: "chance of never having symptoms, if diverticula are found and you have never had tummy pain or bouts of diarrhoea, says NHS inform.", ref: 3 }],
    },
    charts: {
      2: { kind: "bars", title: "More common with age", subtitle: "People with diverticula, out of every 100, as estimated by NHS inform", bars: [{ label: "By the age of 40", value: 5 }, { label: "By the age of 80, at least", value: 50, strong: true }], sources: "Source: NHS inform, Diverticular disease and diverticulitis" },
    },
  },
  "symptoms": {
    sectionRefs: [[[2], [3]], [[1], [2, 1]], [[1], [3]], [[1, 2], [3]], [[1], [1]]],
    helpRefs: [[2], [1], [1], [3], [1]],
    stats: {
      0: [{ value: "1 in 4", label: "people who develop diverticula will experience symptoms, such as abdominal pain, says NHS inform.", ref: 3, picture: "one-in", of: 4 }],
    },
  },
  "causes": {
    sectionRefs: [[[1], [2]], [[1], [1, 2]], [[1], [2], [4]], [[1], [2]], [[1]]],
    helpRefs: [[3], [3], [3], [1], [3, 1]],
    stats: {
      1: [{ value: "After 40", label: "is when the chances of developing diverticula increase, says Guts UK. Age is the biggest risk factor.", ref: 1 }],
    },
  },
  "tests": {
    sectionRefs: [[[1], [3, 1]], [[2], [2, 4], [4]], [[2], [2, 3], [5]], [[3], [6]], [[4], [5]]],
    helpRefs: [[4], [4], [4], [4], [5], [2]],
    stats: {
      1: [
        { value: "30 to 45 minutes", label: "is how long a colonoscopy should take, says the NHS, though you might be at the hospital for around 2 hours.", ref: 4 },
        { value: "24 hours", label: "without driving if you have sedation for a colonoscopy, says the NHS.", ref: 4, picture: "hours" },
      ],
      2: [{ value: "10 to 20 minutes", label: "is how long a CT scan usually takes, says the NHS.", ref: 5 }],
      3: [{ value: "Within 24 hours", label: "of arriving in hospital, a contrast CT scan should be offered if complicated diverticulitis is suspected and inflammation is raised, says NICE.", ref: 6, picture: "hours" }],
    },
  },
  "fibre": {
    sectionRefs: [[[2, 3], [4]], [[1], [1, 2]], [[2], [5]], [[2], [6, 7]], [[5, 2], [2]]],
    helpRefs: [[2], [2], [1], [2], [2], [2]],
    stats: {
      1: [{ value: "6g or more", label: "of fibre in every 100g makes a food high-fibre, says the NHS.", ref: 1 }],
      3: [{ value: "At least 2 litres", label: "of water or other non-caffeinated drinks a day, about 8 to 10 cups, says Guts UK.", ref: 2 }],
    },
    charts: {
      1: { kind: "bars", title: "The fibre gap", subtitle: "Grams of fibre a day for adults, as the NHS sets out", bars: [{ label: "Most adults eat, on average, about", value: 20 }, { label: "Government guidelines say", value: 30, strong: true }], max: 40, ticks: [0, 10, 20, 30, 40], unit: "g", sources: "Source: NHS, How to get more fibre into your diet" },
    },
  },
  "flare": {
    sectionRefs: [[[1, 3], [3, 2]], [[2, 4], [3]], [[3], [3]], [[2], [2]], [[3], [3, 1]]],
    helpRefs: [[1, 3], [3], [2], [4], [2], [2]],
    stats: {
      2: [{ value: "2 to 3 days", label: "is when most people treated in hospital start to improve, says NHS inform.", ref: 3, picture: "calendar" }],
      4: [{ value: "1 in 5", label: "people with diverticulitis have complications, says NHS inform.", ref: 3, picture: "one-in", of: 5 }],
    },
  },
  "pain": {
    sectionRefs: [[[1, 4], [5, 3], [5]], [[1], [6, 7], [2]], [[2], [7]], [[2, 8], [2, 9]]],
    helpRefs: [[1, 5], [5], [1], [5], [2], [3]],
    stats: {
      0: [
        { value: "At least 4 hours", label: "between doses of paracetamol, says the NHS.", ref: 5, picture: "hours" },
        { value: "No more than 8", label: "500mg paracetamol tablets in 24 hours, says the NHS.", ref: 5 },
      ],
    },
  },
  "surgery": {
    sectionRefs: [[[1], [2]], [[2], [3, 1], [2]], [[1, 2], [2]], [[1, 4], [1, 5]], [[5, 6], [6], [2]]],
    helpRefs: [[2], [1, 5], [6], [6], [6]],
    stats: {
      0: [{ value: "Around 1 in 100", label: "is NHS inform's estimate of the risk of serious complications from surgery, which in most cases outweighs the benefits.", ref: 2, picture: "one-in", of: 100 }],
      4: [
        { value: "Around 8 weeks", label: "to recover from a colostomy and get back to usual activities, says the NHS.", ref: 6, picture: "calendar" },
        { value: "1 in 12", label: "people have symptoms come back after surgery, estimates NHS inform.", ref: 2, picture: "one-in", of: 12 },
      ],
    },
  },
  "urgent": {
    sectionRefs: [[[1, 2], [1], [3]], [[3], [3]], [[1], [1]], [[2], [4, 1]], [[2], [4, 2]]],
    helpRefs: [[1], [1], [3], [1], [2]],
    stats: {
      2: [{ value: "More than 7 days", label: "of diarrhoea, or being sick for more than 2 days, means an urgent GP appointment or NHS 111, says the NHS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      3: { kind: "donut", title: "Most bleeding stops on its own", subtitle: "People with bleeding from diverticular disease, out of every 100", value: 80, subject: "people with bleeding", label: "the bleeding stops on its own without any treatment (8 out of 10)", sources: "Source: Guts UK, Diverticular disease" },
    },
  },
  "food-myths": {
    sectionRefs: [[[1], [2, 3]], [[1], [1]], [[1], [4]], [[1], [1], [1]]],
    helpRefs: [[1, 2], [1], [4], [1], [1]],
    stats: {
      3: [{ value: "70 grams", label: "a day at most of red and processed meat, suggests Guts UK.", ref: 1 }],
    },
  },
  "activity-weight": {
    sectionRefs: [[[1], [2, 1]], [[3], [3], [3]], [[4, 1], [4, 1]], [[1], [5], [5, 6]]],
    helpRefs: [[3], [3], [3], [1], [1, 5]],
    stats: {
      3: [
        { value: "5 times", label: "more likely to quit for good if you reach 28 days smoke free, says the NHS.", ref: 6, picture: "times" },
        { value: "Up to 12 weeks", label: "of support is what local stop smoking services usually offer, says the NHS.", ref: 5, picture: "calendar" },
      ],
    },
    charts: {
      1: { kind: "bars", title: "The weekly aim", subtitle: "Minutes of activity a week that give similar health benefits, as the NHS sets out", bars: [{ label: "Moderate activity, at least", value: 150, strong: true }, { label: "Or vigorous activity", value: 75 }], max: 160, ticks: [0, 40, 80, 120, 160], unit: " minutes", sources: "Source: NHS, Physical activity guidelines for adults aged 19 to 64" },
    },
  },
  "coming-back": {
    sectionRefs: [[[1], [2, 3]], [[3, 2], [2], [3]], [[4], [3]], [[3, 4, 1], [3, 1]], [[1], [1]]],
    helpRefs: [[3, 2], [3], [1, 4], [4], [3, 1], [1]],
    stats: {
      1: [{ value: "40% lower", label: "chance of hospital admission with complications for people aged 50 to 70 who eat 25g of fibre a day, says NHS inform.", ref: 2 }],
    },
  },
};
