import type { NewsExtras } from "../ischaemic-news";
// Frozen shoulder features: paragraph references (numbers are positions in each answer's own sources in frozen-shoulder-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[1], [6, 3]], [[1], [2]], [[1], [4, 2]]],
    helpRefs: [[1], [1], [1], [2], [5]],
    stats: {
      4: [{ value: "1 to 3 years", label: "is roughly how long frozen shoulder lasts for most people, says the UK FROST trial team at the University of York.", ref: 4, picture: "calendar" }],
    },
  },
  "stages": {
    sectionRefs: [[[1], [2]], [[1], [4]], [[1], [1]], [[1], [1, 3]], [[2], [2]]],
    helpRefs: [[3], [2], [2], [2], [4]],
    charts: {
      0: { kind: "bars", title: "How long each phase can last", subtitle: "The longest each phase can last, in months, according to NICE guidance for GPs", bars: [{ label: "Painful phase, up to", value: 9 }, { label: "Stiffness phase, up to", value: 12 }, { label: "Resolution phase, up to", value: 42, strong: true }], max: 48, ticks: [0, 12, 24, 36, 48], unit: " months", sources: "Source: NICE Clinical Knowledge Summaries, Shoulder pain" },
    },
    stats: {
      3: [{ value: "18 to 24 months", label: "is when symptoms usually settle, says NICE guidance for GPs.", ref: 1, picture: "calendar" }],
    },
  },
  "who": {
    sectionRefs: [[[1, 5], [6]], [[1]], [[2, 1], [4]], [[2], [3, 1]], [[2, 1]]],
    helpRefs: [[2], [7], [2], [8]],
    charts: {
      0: { kind: "range", title: "The usual age range", subtitle: "Ages frozen shoulder typically affects, in years", from: 40, to: 60, unit: "years of age", sources: "Source: NICE Clinical Knowledge Summaries, Shoulder pain" },
      2: { kind: "donut", title: "A common link", subtitle: "People with diabetes, out of every 100", value: 13, prefix: "Around", subject: "people with diabetes", label: "have frozen shoulder, by one estimate", sources: "Source: NICE Clinical Knowledge Summaries, Shoulder pain" },
    },
  },
  "diagnosis": {
    sectionRefs: [[[1, 2], [3]], [[1], [1]], [[1, 3], [2]], [[6, 4], [4, 7, 5]], [[4], [4]]],
    helpRefs: [[3], [4, 7], [2], [4]],
    stats: {
      3: [{ value: "2 weeks", label: "without improvement is when the NHS says to see a GP about shoulder pain, or sooner if it is getting worse.", ref: 4, picture: "calendar" }],
    },
  },
  "pain-relief": {
    sectionRefs: [[[1], [2, 6]], [[1, 2], [3]], [[1], [4]], [[1], [2, 7]], [[1], [5]]],
    helpRefs: [[1], [1], [6], [4], [1]],
    stats: {
      1: [{ value: "At least 4 hours", label: "between doses of paracetamol, with no more than 8 tablets of 500mg in 24 hours, says the NHS.", ref: 3, picture: "hours" }],
      4: [{ value: "20 minutes", label: "at a time is how long to use a wrapped heat pack on a frozen shoulder, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  "exercises": {
    sectionRefs: [[[1], [1]], [[4], [6, 8]], [[5], [4], [4]], [[3], [3]], [[1], [2]]],
    helpRefs: [[1], [4], [1, 7], [3], [8]],
    stats: {
      3: [{ value: "6 to 12 weeks", label: "is when to contact your healthcare provider if you are not making progress, says the British Elbow and Shoulder Society.", ref: 3, picture: "calendar" }],
      4: [{ value: "At least 6 weeks", label: "is how long a course of physiotherapy for frozen shoulder usually lasts, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "injections": {
    sectionRefs: [[[1, 3], [3, 6]], [[2], [3]], [[3, 4], [3, 2]], [[3, 5], [3, 5]], [[4], [4, 5]]],
    helpRefs: [[2], [3], [4], [4], [4], [5]],
    stats: {
      1: [{ value: "2 or 3", label: "injections into the shoulder are usually the most recommended, as more can damage the joint, says Arthritis UK.", ref: 3 }],
      2: [{ value: "2 days", label: "is how long to avoid anything too strenuous with the shoulder after an injection, says Arthritis UK.", ref: 3, picture: "calendar" }],
    },
    charts: {
      3: { kind: "bars", title: "Reported results of hydrodilatation", subtitle: "Success rates reported nationally, out of every 100, according to one NHS hospital leaflet", bars: [{ label: "Improved movement, over", value: 70 }, { label: "Improved pain, over", value: 90, strong: true }], sources: "Source: Wrightington, Wigan and Leigh NHS Foundation Trust, Hydrodilatation for frozen shoulder" },
    },
  },
  "surgery": {
    sectionRefs: [[[1], [4, 5, 2]], [[3], [4]], [[3], [4, 5]], [[4, 5], [4]], [[3], [3, 1]]],
    helpRefs: [[3], [3], [1], [3], [3]],
    stats: {
      0: [{ value: "About 1 in 10", label: "people with frozen shoulder have a more resistant condition and are referred to hospital, says the UK FROST trial team.", ref: 4, picture: "one-in", of: 10 }],
      3: [{ value: "503 people", label: "from 35 UK hospitals took part in UK FROST, which compared three hospital treatments for frozen shoulder.", ref: 4 }],
    },
  },
  "daily-tasks": {
    sectionRefs: [[[5, 2], [1]], [[3, 1], [1]], [[1], [1]], [[1], [1]], [[1], [4]]],
    helpRefs: [[2, 1], [4], [1], [1], [1]],
  },
  "diabetes": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[2], [3]], [[4]], [[5], [6, 7]]],
    helpRefs: [[1], [5], [5, 6], [3]],
    charts: {
      0: { kind: "donut", title: "A common link", subtitle: "People with diabetes, out of every 100", value: 13, prefix: "Around", subject: "people with diabetes", label: "have frozen shoulder, by one estimate", sources: "Source: NICE Clinical Knowledge Summaries, Shoulder pain" },
    },
    stats: {
      4: [{ value: "48 hours", label: "is how long one NHS hospital leaflet advises people with diabetes to check blood sugars carefully after hydrodilatation.", ref: 7, picture: "hours" }],
    },
  },
  "work": {
    sectionRefs: [[[2], [1]], [[1], [1, 3]], [[4, 5], [1]], [[6], [7, 8]]],
    helpRefs: [[1], [1], [1], [3], [6]],
    stats: {
      2: [{ value: "Up to £1,000", label: "is the fine for not telling DVLA about a medical condition that affects your driving, says the government's driving guidance.", ref: 5 }],
      3: [{ value: "The next day", label: "is when most people are usually back in work after hydrodilatation, says one NHS hospital leaflet.", ref: 7, picture: "calendar" }],
    },
  },
  "patience": {
    sectionRefs: [[[1], [4, 5]], [[2], [3]], [[6], [6]], [[5], [1]], [[3, 7], [1]]],
    helpRefs: [[6], [6], [5], [1]],
    charts: {
      1: { kind: "bars", title: "How long it can take", subtitle: "Years for frozen shoulder to settle, according to NICE guidance for GPs and Arthritis UK", bars: [{ label: "Symptoms usually settle by", value: 2 }, { label: "It may take as long as", value: 3, strong: true }], max: 4, ticks: [0, 1, 2, 3, 4], unit: " years", sources: "Sources: NICE Clinical Knowledge Summaries, Shoulder pain; Arthritis UK, Shoulder pain" },
    },
    stats: {
      3: [{ value: "6 to 12 weeks", label: "is when to contact your healthcare provider if there is no progress, says the British Elbow and Shoulder Society.", ref: 5, picture: "calendar" }],
      4: [{ value: "1 in 10", label: "people with frozen shoulder do not improve and are referred to hospital for specialist treatment, says South Tees Hospitals NHS Foundation Trust.", ref: 7, picture: "one-in", of: 10 }],
    },
  },
};
