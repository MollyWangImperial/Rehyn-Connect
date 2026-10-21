import type { NewsExtras } from "../ischaemic-news";
// Coronary heart disease features: reference numbers (positions in each answer's `sources`, chd-answers.ts) and figures, checked 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  // sources: 1 BHF booklet, 2 BHF CHD page, 3 NHS CHD, 4 NHS CHD causes, 5 NHS CHD symptoms
  "what-it-is": {
    sectionRefs: [[[3], [1]], [[2, 3], [4, 2]], [[2]], [[2, 3], [2]], [[1], [3, 1]]],
    helpRefs: [[1], [1], [1], [1, 2]],
    stats: {
      3: [{ value: "800,000", label: "women in the UK are living with coronary heart disease, says the British Heart Foundation.", ref: 2 }],
    },
  },
  // sources: 1 NHS CHD causes, 2 BHF booklet, 3 BHF CHD page, 4 BHF risk factors, 5 NHS CHD prevention, 6 NHS CHD
  "risk-factors": {
    sectionRefs: [[[2], [4]], [[1], [1, 2]], [[1], [1]], [[2, 3], [1], [2, 3]], [[6], [5]]],
    helpRefs: [[5], [5], [5], [2, 3], [2, 3]],
    charts: {
      2: { kind: "donut", title: "Blood pressure behind many heart attacks", subtitle: "Heart attacks and strokes, out of every 100", value: 50, prefix: "Around", subject: "heart attacks and strokes", label: "are linked to high blood pressure", sources: "Source: British Heart Foundation, Risk factors" },
    },
    stats: {
      2: [
        { value: "Almost twice", label: "as likely to have a heart attack: smokers, compared with people who have never smoked, says the British Heart Foundation.", ref: 4 },
        { value: "More than double", label: "the risk of coronary heart disease can come with diabetes, says the NHS.", ref: 1 },
      ],
    },
  },
  // sources: 1 NHS CHD diagnosis, 2 BHF booklet, 3 BHF ECG, 4 BHF angiogram, 5 BHF CT scan, 6 BHF echo
  tests: {
    sectionRefs: [[[1], [1], [2]], [[3], [3], [3]], [[6], [5, 4]], [[4], [4], [4]], [[2], [2]]],
    helpRefs: [[2], [2], [4], [4], [4]],
    charts: {
      0: { kind: "range", title: "Who can get a free health check", subtitle: "Adults living in England, by age, to assess the risk of coronary heart disease", from: 40, to: 74, unit: "years of age", sources: "Source: British Heart Foundation, Understanding coronary heart disease" },
    },
    stats: {
      1: [{ value: "10", label: "small sticky patches (electrodes) go on your arms, legs and chest for an ECG, says the British Heart Foundation.", ref: 3 }],
      3: [{ value: "Around 30 minutes", label: "is how long a traditional angiogram usually lasts, though it can take longer, says the British Heart Foundation.", ref: 4, picture: "hours" }],
    },
  },
  // sources: 1 NHS CHD symptoms, 2 BHF booklet, 3 NHS angina, 4 NHS heart attack, 5 BHF CHD page, 6 NHS CHD
  symptoms: {
    sectionRefs: [[[1, 6, 5], [2]], [[1], [1], [1, 3]], [[3], [3]], [[1], [1], [1]], [[3, 2], [3, 2, 4], [3]]],
    helpRefs: [[3, 2], [2], [2, 4], [3], [3]],
    stats: {
      1: [{ value: "Under 10 minutes", label: "is how long angina symptoms usually last, says the NHS.", ref: 1, picture: "hours" }],
      3: [{ value: "15 minutes", label: "Heart pains lasting longer than this may be the start of a heart attack, says the NHS.", ref: 1 }],
    },
  },
  // sources: 1 NHS CHD treatment, 2 BHF booklet, 3 NHS aspirin, 4 NHS statins
  medicines: {
    sectionRefs: [[[1, 2], [1]], [[1], [3], [1]], [[2, 1], [4]], [[2, 1], [2, 1], [2, 1]], [[2], [1]]],
    helpRefs: [[2], [2], [2], [2], [2]],
    stats: {
      1: [{ value: "75mg", label: "is the usual low-dose aspirin tablet, usually taken once a day, says the NHS.", ref: 3 }],
    },
  },
  // sources: 1 NHS CHD treatment, 2 BHF booklet, 3 BHF angioplasty, 4 BHF bypass, 5 NHS bypass recovery, 6 GOV.UK angioplasty and driving, 7 GOV.UK bypass and driving
  "stents-bypass": {
    sectionRefs: [[[1], [1, 2]], [[2], [3], [3]], [[3], [3], [3]], [[2], [2], [4, 2]], [[5], [6, 7], [6, 7]]],
    helpRefs: [[3], [3, 4], [3], [3], [5]],
    stats: {
      2: [{ value: "Under 1 in 100", label: "is the usual risk of major complications during an angioplasty, says the British Heart Foundation.", ref: 3 }],
      4: [{ value: "About 6 weeks", label: "until you should be able to get back to most normal activities after a bypass, says the NHS.", ref: 5, picture: "calendar" }],
    },
  },
  // sources: 1 BHF high cholesterol, 2 NHS cholesterol levels, 3 NHS how to lower your cholesterol, 4 BHF statins, 5 NHS medicines for high cholesterol
  cholesterol: {
    sectionRefs: [[[1], [1]], [[2], [2], [1]], [[1], [1]], [[3], [3]], [[5], [4], [5]]],
    helpRefs: [[1], [1], [1], [1], [1]],
    charts: {
      1: { kind: "bars", title: "Healthy cholesterol levels", subtitle: "A guide for healthy adults: below these numbers", bars: [{ label: "Total cholesterol", value: 5 }, { label: "Non-HDL (bad) cholesterol", value: 4, strong: true }], max: 6, ticks: [0, 2, 4, 6], unit: "mmol/L", sources: "Source: NHS, Cholesterol levels" },
      4: { kind: "bars", title: "How much statins lower bad cholesterol", subtitle: "Fall in LDL cholesterol: up to 30 per cent with a low dose, more than 40 per cent with a high dose", bars: [{ label: "Low-dose statin (up to)", value: 30 }, { label: "High-dose statin (more than)", value: 40, strong: true }], max: 50, ticks: [0, 10, 20, 30, 40, 50], unit: "%", sources: "Source: British Heart Foundation, Statins and what they do" },
    },
  },
  // sources: 1 NHS CHD recovery, 2 BHF what is cardiac rehab, 3 BHF booklet
  "cardiac-rehab": {
    sectionRefs: [[[3], [2]], [[3, 1], [1]], [[2], [2], [2]], [[1]], [[1, 2], [2, 3]]],
    helpRefs: [[3], [1], [2], [2], [3]],
    charts: {
      3: { kind: "range", title: "A course of cardiac rehab", subtitle: "Weeks a local programme often lasts, in weekly sessions", from: 6, to: 12, unit: "weeks", sources: "Source: NHS, Coronary heart disease – Recovery" },
    },
  },
  // sources: 1 NHS CHD prevention, 2 BHF booklet, 3 BHF healthy eating
  eating: {
    sectionRefs: [[[2], [1], [3]], [[1], [1]], [[2], [2]], [[2], [1]], [[2], [3, 2]]],
    helpRefs: [[2], [2], [2], [3], [2]],
    stats: {
      0: [{ value: "5 a day", label: "portions of fresh fruit and vegetables, says the NHS.", ref: 1, picture: "calendar" }],
      2: [{ value: "6g", label: "of salt a day at most for adults, about one level teaspoon, says the British Heart Foundation.", ref: 2 }],
      3: [{ value: "30g", label: "of sugar a day at most for adults, about seven teaspoons, says the British Heart Foundation.", ref: 2 }],
    },
  },
  // sources: 1 BHF staying active, 2 BHF booklet, 3 NHS physical activity guidelines, 4 NHS CHD prevention
  activity: {
    sectionRefs: [[[4], [2]], [[2, 3], [1]], [[1], [1, 3]], [[1], [1], [2]], [[1], [1]]],
    helpRefs: [[1, 3], [1], [1], [1], [1]],
    stats: {
      0: [{ value: "Up to 35%", label: "lower risk of heart and circulatory diseases can come from exercise, says the British Heart Foundation.", ref: 1 }],
      1: [{ value: "150 minutes", label: "of activity a week for adults, around 20 to 30 minutes a day, says the British Heart Foundation.", ref: 2, picture: "calendar" }],
    },
  },
  // sources: 1 NHS CHD causes, 2 BHF smoking, 3 NHS stop smoking services, 4 NHS CHD treatment, 5 NHS CHD prevention, 6 BHF booklet
  smoking: {
    sectionRefs: [[[2], [1]], [[4], [2]], [[5], [3], [3]], [[2], [2], [3]], [[6, 2], [2]]],
    helpRefs: [[6, 2], [6], [3], [2], [6]],
    stats: {
      1: [{ value: "Half", label: "the heart attack risk of a smoker, 1 year after stopping, says the British Heart Foundation.", ref: 2, picture: "half" }],
      2: [{ value: "3 times", label: "more likely to successfully give up smoking with NHS support and stop-smoking medicines, says the NHS.", ref: 5 }],
    },
  },
  // sources: 1 BHF booklet, 2 BHF anxiety, 3 BHF depression, 4 NHS talking therapies, 5 NHS urgent help for mental health, 6 BHF coping with diagnosis
  emotions: {
    sectionRefs: [[[1], [2], [6]], [[2], [2]], [[3], [3]], [[1], [4], [2, 3]], [[5], [5]]],
    helpRefs: [[1], [4, 1], [2], [3], [1], [5]],
    charts: {
      0: { kind: "range", title: "Anxiety after a heart attack", subtitle: "People diagnosed with anxiety in the year after a heart attack, out of every 100", from: 20, to: 30, sources: "Source: British Heart Foundation, Coping with diagnosis (Heart Matters)" },
    },
  },
};
