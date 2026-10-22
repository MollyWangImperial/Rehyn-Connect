import type { NewsExtras } from "../ischaemic-news";
// Polycystic kidney disease features: paragraph references (numbers are positions in each answer's own sources in pkd-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [4, 2]], [[2, 3], [4, 3]], [[1], [4, 2]], [[1, 2], [2, 4]], [[1, 2], [2]]],
    helpRefs: [[2], [2], [1], [2]],
    stats: {
      1: [{ value: "About 5%", label: "is how much the kidneys tend to grow each year in ADPKD, says the PKD Charity.", ref: 3 }],
      3: [{ value: "30,000 to 70,000", label: "people in the UK could have ADPKD, says the NHS.", ref: 1 }],
    },
    charts: {
      4: { kind: "donut", title: "Kidney failure by 60", subtitle: "People with ADPKD, out of every 100", value: 50, prefix: "Around", subject: "people with ADPKD", label: "need treatment for kidney failure by the time they are 60", sources: "Source: NHS, Autosomal dominant polycystic kidney disease (ADPKD)" },
    },
  },
  "inheritance": {
    sectionRefs: [[[1, 2, 4], [2]], [[1, 2], [1, 2]], [[1, 2], [2]], [[1], [1, 2]], [[1]]],
    helpRefs: [[2, 3], [2], [2], [2]],
    stats: {
      2: [{ value: "1 in 2", label: "is the chance for each child of a parent with ADPKD, says the NHS.", ref: 1, picture: "half" }],
      3: [{ value: "Up to 1 in 4", label: "people with ADPKD have no known family history of it, says the NHS.", ref: 1, picture: "one-in", of: 4 }],
    },
    charts: {
      1: { kind: "bars", title: "Which gene causes it", subtitle: "Cases of ADPKD caused by each gene, out of every 100, as the NHS gives them", bars: [{ label: "PKD1", value: 78, strong: true }, { label: "PKD2", value: 15 }], sources: "Source: NHS, Autosomal dominant polycystic kidney disease (ADPKD)" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [2, 1]], [[1], [2, 1]], [[1], [1, 2]], [[1, 2, 3], [1]], [[1], [1]]],
    helpRefs: [[1, 2], [1], [1], [1], [2]],
    stats: {
      1: [{ value: "About 5 in 10", label: "people with ADPKD have high blood pressure, says the PKD Charity.", ref: 2, picture: "half" }],
    },
    charts: {
      0: { kind: "bars", title: "How common each problem is", subtitle: "People with ADPKD, out of every 100, as the PKD Charity gives them. Kidney stones: at least this many by middle age.", bars: [{ label: "Visible blood in wee at times", value: 60, strong: true }, { label: "Long-term pain", value: 60 }, { label: "High blood pressure", value: 50 }, { label: "A kidney stone", value: 10 }], sources: "Source: PKD Charity, ADPKD basics" },
    },
  },
  "tests": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[3], [3]], [[2, 3], [2]], [[4], [4, 5]]],
    helpRefs: [[2], [3], [2], [2], [4]],
    stats: {
      0: [{ value: "More than 90ml", label: "of blood a minute is what a healthy pair of kidneys should filter, says the NHS.", ref: 1 }],
      2: [{ value: "About 1 in 4", label: "people get an unclear result from a genetic test for ADPKD, says the PKD Charity.", ref: 3, picture: "one-in", of: 4 }],
    },
    charts: {
      2: { kind: "bars", title: "Waiting for genetic results", subtitle: "Weeks until results, at most, as the PKD Charity gives them", bars: [{ label: "Family's gene change already known", value: 6, strong: true }, { label: "No one in the family tested before", value: 12 }], max: 12, ticks: [0, 3, 6, 9, 12], unit: " weeks", sources: "Source: PKD Charity, Genetic testing and counselling for ADPKD" },
    },
  },
  "blood-pressure": {
    sectionRefs: [[[2], [2, 3]], [[2], [2]], [[1, 2], [2]], [[1, 2], [2]], [[2]]],
    helpRefs: [[2], [2], [2], [2], [1], [2]],
    stats: {
      1: [{ value: "At least once a year", label: "is how often blood pressure is usually measured at kidney clinic, says the PKD Charity.", ref: 2, picture: "calendar" }],
      3: [{ value: "Less than 6g", label: "of salt a day, about a teaspoonful, is the NHS advice for people with ADPKD.", ref: 1 }],
    },
    charts: {
      0: { kind: "donut", title: "Half have high blood pressure", subtitle: "People with ADPKD, out of every 100", value: 50, prefix: "About", subject: "people with ADPKD", label: "have high blood pressure", sources: "Source: PKD Charity, High blood pressure" },
    },
  },
  "tolvaptan": {
    sectionRefs: [[[2, 1], [2, 4]], [[3], [2, 5], [2]], [[1, 2], [2]], [[1, 2], [1, 2]]],
    helpRefs: [[2], [2], [2], [2]],
    stats: {
      2: [
        { value: "Twice a day", label: "is how tolvaptan is taken, as a split dose, says the NHS.", ref: 1, picture: "calendar" },
        { value: "At least 10 years", label: "is how long the benefits seem to last in people who keep taking it, says the PKD Charity.", ref: 2 },
      ],
      3: [{ value: "Around 2 in 10", label: "people in a clinical trial stopped tolvaptan because of side effects, says the PKD Charity.", ref: 2, picture: "one-in", of: 5 }],
    },
  },
  "pain": {
    sectionRefs: [[[2], [2]], [[2], [2]], [[1, 2], [1, 3]], [[2], [1, 2]], [[2], [2]]],
    helpRefs: [[1], [3], [2], [2], [2], [2]],
    stats: {
      4: [{ value: "0 to 10", label: "is the scale the PKD Charity suggests for rating pain in a pain diary.", ref: 2 }],
    },
    charts: {
      0: { kind: "bars", title: "Long-term pain is more common", subtitle: "People with pain, out of every 100, as the PKD Charity gives it", bars: [{ label: "People with ADPKD: up to", value: 60, strong: true }, { label: "UK adults with long-term pain: about", value: 40 }], sources: "Source: PKD Charity, Pain" },
    },
  },
  "later": {
    sectionRefs: [[[2], [3, 2]], [[2], [1, 6], [4]], [[5], [5]], [[1, 2]]],
    helpRefs: [[1], [1], [2], [2]],
    stats: {
      0: [{ value: "About 55 or 60", label: "is the average age at which people with ADPKD reach kidney failure, says the PKD Charity.", ref: 2 }],
      1: [
        { value: "About 1 in 3", label: "kidney transplants in the UK come from a living donor, says the PKD Charity.", ref: 4, picture: "one-in", of: 3 },
        { value: "About 2 to 3 years", label: "is the average wait for a kidney from a deceased donor, says the PKD Charity.", ref: 4, picture: "calendar" },
      ],
    },
    charts: {
      2: { kind: "bars", title: "How much of the work each does", subtitle: "The share of a healthy kidney's work, out of every 100, as the PKD Charity gives it", bars: [{ label: "A kidney transplant: about", value: 50, strong: true }, { label: "Dialysis: about", value: 10 }], sources: "Source: PKD Charity, ADPKD basics" },
    },
  },
  "fluids-food": {
    sectionRefs: [[[1, 5], [1]], [[2, 1], [2, 3], [1]], [[1], [1, 4], [1]], [[1], [1], [1]]],
    helpRefs: [[2, 5], [1], [1], [1], [1]],
    stats: {
      1: [{ value: "6 to 8 glasses", label: "of water a day, 200ml each, is usually enough in the UK, says Kidney Care UK.", ref: 2 }],
      2: [{ value: "No more than 5g", label: "of salt a day, just under a teaspoon, is the PKD Charity's advice for adults with ADPKD.", ref: 1 }],
      3: [{ value: "14 units", label: "of alcohol a week at most, spread over the week, for lower-risk drinking, says the PKD Charity.", ref: 1 }],
    },
    charts: {
      2: { kind: "bars", title: "Salt limits for children", subtitle: "The most salt a day, in grams, by age, as the PKD Charity gives it", bars: [{ label: "1 to 3 years", value: 2 }, { label: "4 to 6 years", value: 3 }, { label: "7 and older", value: 5, strong: true }], max: 6, ticks: [0, 2, 4, 6], unit: "g", sources: "Source: PKD Charity, Diet and lifestyle in ADPKD" },
    },
  },
  "family": {
    sectionRefs: [[[4], [4, 1]], [[1], [3], [3]], [[2], [2]], [[1, 5], [1, 5]], [[1], [1]]],
    helpRefs: [[4], [1], [2], [1], [1]],
    stats: {
      1: [
        { value: "Within 6 weeks", label: "a predictive test result may come when the family's gene change is known, says the PKD Charity.", ref: 1, picture: "calendar" },
        { value: "Every 2 years", label: "is how often children with ADPKD usually have kidney and blood pressure check-ups, says the PKD Charity.", ref: 3, picture: "calendar" },
      ],
      4: [{ value: "About a third", label: "of couples having pre-implantation genetic testing have a baby, says the PKD Charity.", ref: 1, picture: "one-in", of: 3 }],
    },
  },
  "liver-brain": {
    sectionRefs: [[[2], [2]], [[2, 1], [2]], [[1, 3], [1, 3]], [[3, 1], [1, 3]], [[1], [1]]],
    helpRefs: [[2], [3], [3, 1], [3], [1], [3]],
    stats: {
      2: [{ value: "About 9 in 100", label: "people with ADPKD have a brain aneurysm, against about 2 to 3 in 100 people in general, says the PKD Charity.", ref: 3 }],
      3: [{ value: "9 out of 10", label: "people find coiling or clipping works well to prevent complications, says the PKD Charity.", ref: 3 }],
    },
    charts: {
      0: { kind: "donut", title: "Liver cysts are common", subtitle: "People with ADPKD by their mid-thirties, out of every 100", value: 80, subject: "people with ADPKD", label: "have liver cysts by their mid-thirties", sources: "Source: PKD Charity, Polycystic liver disease" },
    },
  },
  "support": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[2], [3]], [[5], [4]], [[1, 6], [6]]],
    helpRefs: [[2], [3], [1], [6], [4], [7]],
    stats: {
      1: [{ value: "At least 3 in 10", label: "people with ADPKD have anxiety or depression at some point, says the PKD Charity.", ref: 1 }],
    },
    charts: {
      0: { kind: "donut", title: "Daily life carries on", subtitle: "People with good or moderate kidney function, out of every 100", value: 80, prefix: "Over", subject: "people with good or moderate kidney function", label: "say ADPKD does not affect their daily life", sources: "Source: PKD Charity, ADPKD basics" },
    },
  },
};
