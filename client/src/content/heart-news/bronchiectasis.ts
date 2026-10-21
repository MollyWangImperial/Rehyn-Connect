import type { NewsExtras } from "../ischaemic-news";
// Bronchiectasis features: reference numbers (positions in each answer's `sources`, bronchiectasis-answers.ts) and figures, checked 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  // sources: 1 NHS bronchiectasis, 2 Asthma + Lung UK what is it, 3 Asthma + Lung UK diagnosis
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[2], [1]], [[2], [2]], [[1], [1], [3]]],
    helpRefs: [[1], [3], [1, 2], [1]],
    stats: {
      2: [
        { value: "212,000", label: "people are estimated to be living with bronchiectasis in the UK, around 1 in 200 adults, says Asthma + Lung UK.", ref: 2 },
        { value: "Over 70", label: "You're more likely to be diagnosed with bronchiectasis over this age, says Asthma + Lung UK.", ref: 2 },
      ],
    },
  },
  // sources: 1 NHS bronchiectasis, 2 Asthma + Lung UK what is it, 3 Asthma + Lung UK diagnosis, 4 Asthma + Lung UK treatment
  causes: {
    sectionRefs: [[[1], [1, 2]], [[2], [1]], [[1, 2], [2]], [[1, 2], [1, 2]], [[1], [3, 1]]],
    helpRefs: [[3], [3], [1], [1]],
    charts: {
      0: { kind: "donut", title: "Often no clear cause", subtitle: "Cases of bronchiectasis, out of every 100", value: 40, prefix: "Around", subject: "cases", label: "have no clear cause (idiopathic bronchiectasis)", sources: "Source: Asthma + Lung UK, What is bronchiectasis?" },
    },
  },
  // sources: 1 NHS bronchiectasis, 2 Asthma + Lung UK symptoms, 3 Asthma + Lung UK flare-ups
  symptoms: {
    sectionRefs: [[[1], [2]], [[1], [2]], [[3], [3]], [[1], [1], [1]]],
    helpRefs: [[1], [2], [1], [1]],
    charts: {
      0: { kind: "donut", title: "A daily cough with phlegm", subtitle: "People with bronchiectasis, out of every 100", value: 75, prefix: "Around", subject: "people with bronchiectasis", label: "cough up phlegm every day (around 3 in 4)", sources: "Source: Asthma + Lung UK, What are the signs and symptoms of bronchiectasis?" },
    },
    stats: {
      2: [{ value: "38°C", label: "or more: a fever this high can be a new symptom in a flare-up, says Asthma + Lung UK.", ref: 3 }],
      3: [{ value: "3 weeks", label: "A cough lasting more than this is a reason to see a GP, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  // sources: 1 NHS bronchiectasis, 2 Asthma + Lung UK diagnosis, 3 NHS CT scan, 4 NHS spirometry
  tests: {
    sectionRefs: [[[1, 2], [1]], [[1], [2], [3]], [[2], [2, 4], [2]], [[3], [2]]],
    helpRefs: [[2], [2], [3], [3], [3]],
    stats: {
      1: [{ value: "10 to 20 minutes", label: "how long a CT scan usually takes, says the NHS.", ref: 3, picture: "hours" }],
      3: [{ value: "4 weeks", label: "If you have not heard about CT scan results by then, contact the doctor who referred you, says the NHS.", ref: 3, picture: "calendar" }],
    },
  },
  // sources: 1 NHS bronchiectasis, 2 Asthma + Lung UK treatment, 3 Asthma + Lung UK airway clearance
  "airway-clearance": {
    sectionRefs: [[[1], [2]], [[2, 3], [2, 3], [3]], [[2], [3]], [[3], [3]], [[3], [1]]],
    helpRefs: [[3], [3], [3], [3], [3], [3]],
    charts: {
      3: { kind: "range", title: "Time for airway clearance", subtitle: "Minutes per session, twice a day, for most people", from: 10, to: 30, unit: "minutes", sources: "Source: Asthma + Lung UK, Airway clearance when you have a lung condition" },
    },
    stats: {
      3: [{ value: "Twice a day", label: "how often most people benefit from doing airway clearance, says Asthma + Lung UK.", ref: 3, picture: "calendar" }],
    },
  },
  // sources: 1 NHS bronchiectasis, 2 Asthma + Lung UK treatment, 3 Asthma + Lung UK antibiotics
  antibiotics: {
    sectionRefs: [[[1], [2]], [[2, 3], [2]], [[1], [2], [3]], [[1], [2]], [[3], [3]]],
    helpRefs: [[1], [2, 3], [1], [2], [3]],
    stats: {
      1: [{ value: "14 days", label: "how long you'll usually take antibiotics for a flare-up caused by a bacterial infection, says Asthma + Lung UK.", ref: 2, picture: "calendar" }],
      3: [{ value: "More than 3", label: "chest infections a year: when a specialist may recommend long-term antibiotics, says the NHS.", ref: 1 }],
    },
  },
  // sources: 1 Asthma + Lung UK treatment, 2 NHS bronchiectasis, 3 Asthma + Lung UK nebulisers, 4 Asthma + Lung UK inhaler videos, 5 Asthma + Lung UK airway clearance
  inhalers: {
    sectionRefs: [[[1], [1]], [[1], [1]], [[1, 3], [2], [3]], [[1]], [[1], [3]]],
    helpRefs: [[1, 4], [3], [3], [5], [3]],
    charts: {
      1: { kind: "range", title: "How long a long-acting inhaler works", subtitle: "Hours a long-acting bronchodilator can keep your airways open", from: 12, to: 24, unit: "hours", sources: "Source: Asthma + Lung UK, How is bronchiectasis treated?" },
    },
    stats: {
      4: [{ value: "10 to 15 minutes", label: "how long using a nebuliser normally takes, says Asthma + Lung UK.", ref: 3, picture: "hours" }],
    },
  },
  // sources: 1 NHS bronchiectasis, 2 Asthma + Lung UK treatment, 3 Asthma + Lung UK pulmonary rehabilitation, 4 Asthma + Lung UK physical activity
  rehab: {
    sectionRefs: [[[1], [2]], [[3], [3]], [[3], [3]], [[1], [4], [4]], [[4], [4]]],
    helpRefs: [[3], [3], [4], [4], [4], [4]],
    stats: {
      1: [{ value: "6 to 8 weeks", label: "how long a pulmonary rehabilitation course usually lasts, with two sessions a week, says Asthma + Lung UK.", ref: 3, picture: "calendar" }],
      3: [{ value: "150 minutes", label: "of moderate activity a week to aim for, about 20 minutes a day, says Asthma + Lung UK.", ref: 4, picture: "calendar" }],
    },
  },
  // sources: 1 Asthma + Lung UK managing bronchiectasis, 2 Asthma + Lung UK self-management plan, 3 Asthma + Lung UK flare-ups, 4 NHS bronchiectasis
  "flare-plan": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[3], [3]], [[3], [4]], [[2], [1]]],
    helpRefs: [[1], [2], [3], [3], [3], [1]],
    stats: {
      4: [{ value: "Once a year", label: "at least: how often to have your bronchiectasis reviewed, says Asthma + Lung UK.", ref: 1, picture: "calendar" }],
    },
  },
  // sources: 1 NHS bronchiectasis, 2 Asthma + Lung UK treatment, 3 Asthma + Lung UK flare-ups, 4 Asthma + Lung UK preventing flu,
  // 5 NHS flu vaccine, 6 NHS pneumococcal vaccine, 7 NHS RSV vaccine, 8 NHS COVID-19 vaccine
  infections: {
    sectionRefs: [[[2], [3]], [[1], [4], [1]], [[1, 5], [4, 5]], [[1, 6], [7], [5]], [[2]]],
    helpRefs: [[1], [1], [1], [1], [7], [1]],
    stats: {
      2: [{ value: "14 days", label: "up to this long for the flu vaccine to work, says the NHS.", ref: 5, picture: "calendar" }],
      3: [{ value: "1 dose", label: "of the pneumococcal vaccine is all most adults need for long-term protection, says the NHS.", ref: 6 }],
    },
  },
  // sources: 1 Asthma + Lung UK flare-ups, 2 Asthma + Lung UK symptoms, 3 Asthma + Lung UK self-management plan, 4 NHS bronchiectasis,
  // 5 NHS coughing up blood, 6 Asthma + Lung UK phlegm and mucus
  phlegm: {
    sectionRefs: [[[1], [2]], [[1], [1]], [[1], [3]], [[4, 5], [4, 5]], [[6], [6]]],
    helpRefs: [[1], [4], [4, 5], [4, 5], [6]],
    stats: {
      4: [{ value: "6 to 8 glasses", label: "of water a day to help keep phlegm loose, says Asthma + Lung UK.", ref: 6 }],
    },
  },
  // sources: 1 NHS bronchiectasis, 2 Asthma + Lung UK managing bronchiectasis, 3 Asthma + Lung UK working, 4 GOV.UK Access to Work,
  // 5 Asthma + Lung UK travelling safely, 6 Asthma + Lung UK travel insurance
  "daily-life": {
    sectionRefs: [[[1, 2], [2]], [[3], [3], [3]], [[4], [4]], [[5], [5], [5]], [[6, 5]]],
    helpRefs: [[2], [3], [3], [4, 3], [5], [6]],
    stats: {
      1: [{ value: "12 months", label: "A condition that has lasted, or is likely to last, this long can count as a disability under the Equality Act 2010, says Asthma + Lung UK.", ref: 3, picture: "calendar" }],
      3: [{ value: "2 months", label: "or more before you travel: when to discuss your plans with your doctor, says Asthma + Lung UK.", ref: 5, picture: "calendar" }],
    },
  },
};
