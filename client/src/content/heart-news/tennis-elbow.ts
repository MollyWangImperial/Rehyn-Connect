import type { NewsExtras } from "../ischaemic-news";
// Tennis elbow features: paragraph references (numbers are positions in each answer's own sources in tennis-elbow-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [4]], [[2], [2]], [[1], [3]], [[2], [5]], [[1, 3], [2]]],
    helpRefs: [[1], [1], [1], [1], [1]],
    stats: {
      3: [{ value: "Fewer than 10%", label: "of people with tennis elbow got it from racquet sports, says NICE's guidance for GPs.", ref: 5 }],
    },
    charts: {
      4: { kind: "range", title: "When it is most common", subtitle: "The ages at which tennis elbow is more common, according to the NHS", from: 35, to: 54, unit: "years of age", sources: "Source: NHS, Tennis elbow" },
    },
  },
  "causes": {
    sectionRefs: [[[1], [2, 6]], [[1], [2]], [[3], [3]], [[4], [4]], [[5], [5]]],
    helpRefs: [[1], [2], [2], [5]],
    stats: {
      1: [{ value: "Fewer than 10%", label: "of people with tennis elbow got it from racquet sports, says NICE's guidance for GPs.", ref: 3 }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [1]], [[1], [4]], [[2], [2, 5]], [[1], [2]], [[2], [3, 2]]],
    helpRefs: [[1], [2], [2], [1]],
    stats: {
      3: [{ value: "At least 2 weeks", label: "of rest and self-care is when to see a GP if the elbow still hurts, says the NHS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "Outside far more often than inside", subtitle: "How common tennis elbow is, compared with golfer's elbow", bars: [{ label: "Golfer's elbow", value: 1 }, { label: "Tennis elbow", value: 7, strong: true }], max: 8, ticks: [0, 2, 4, 6, 8], unit: "×", sources: "Source: NICE Clinical Knowledge Summaries, Tennis elbow: how common is it?" },
    },
  },
  "how-long": {
    sectionRefs: [[[1], [5]], [[2], [4, 3]], [[3], [3]], [[1], [1]], [[2]]],
    helpRefs: [[1], [5], [1], [1]],
    stats: {
      3: [{ value: "6 to 12 months", label: "is when surgery may be an option, if you still have tennis elbow, says the NHS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      1: { kind: "range", title: "Getting better, given time", subtitle: "People who see a big improvement within 12 to 24 months, out of every 100, according to NICE's guidance for GPs", from: 80, to: 90, sources: "Source: NICE Clinical Knowledge Summaries, Tennis elbow: what is the prognosis?" },
    },
  },
  "self-care": {
    sectionRefs: [[[1, 3], [2, 4]], [[1], [2]], [[1], [1, 5]], [[3, 2], [5, 6]], [[4], [4]]],
    helpRefs: [[1], [1], [1], [4], [4]],
    stats: {
      0: [{ value: "2 to 4 weeks", label: "of reducing or changing the activities that make it worse, at first, says the Chartered Society of Physiotherapy.", ref: 3, picture: "calendar" }],
      1: [{ value: "Up to 20 minutes", label: "at a time, every 2 to 3 hours, for a hot or cold pack wrapped in a towel, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  "exercises": {
    sectionRefs: [[[1], [2, 3]], [[3], [4]], [[1], [2]], [[2], [2]], [[2], [1]]],
    helpRefs: [[1], [2], [3], [2], [1]],
    stats: {
      2: [{ value: "15 to 30 seconds", label: "is how long to hold the wrist flex stretch, three times with each wrist, says Arthritis UK.", ref: 2, picture: "hours" }],
      3: [{ value: "8 to 12 weeks", label: "is how long the palm-down wrist lift needs doing for tennis elbow, says Arthritis UK.", ref: 2, picture: "calendar" }],
    },
  },
  "physio": {
    sectionRefs: [[[1], [1]], [[3], [3, 2]], [[4], [6]], [[1, 5], [6, 7]], [[1, 2], [2]]],
    helpRefs: [[1], [1], [2], [6]],
    stats: {
      0: [{ value: "6 weeks", label: "of treatments at home without improvement is when physiotherapy may help, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "injections": {
    sectionRefs: [[[1], [2, 3]], [[1], [1, 6]], [[5], [4]], [[7, 1], [1, 3]]],
    helpRefs: [[3], [4], [1], [1]],
    stats: {
      3: [{ value: "4 to 5 cm", label: "is about how long the cut is when the operation is not done by keyhole surgery, says Arthritis UK.", ref: 1 }],
    },
    charts: {
      2: { kind: "bars", title: "Shockwave against a pretend treatment", subtitle: "Patients counted as a success at 3 months in one trial NICE looked at, out of every 100", bars: [{ label: "Shockwave therapy", value: 26, strong: true }, { label: "Sham (pretend) shockwave", value: 25 }], sources: "Source: NICE, Extracorporeal shockwave therapy for refractory tennis elbow" },
    },
  },
  "tasks": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[5], [4]], [[3], [1]], [[1], [2]]],
    helpRefs: [[1], [2], [3], [4], [1]],
  },
  "work": {
    sectionRefs: [[[1], [2, 3]], [[4], [5]], [[6], [5]], [[2], [4]], [[7], [8]]],
    helpRefs: [[4], [4], [6], [5], [8]],
    stats: {
      3: [{ value: "6 weeks", label: "of reducing manual work that makes it worse, while staying active, is what NICE's guidance for GPs suggests.", ref: 4, picture: "calendar" }],
    },
  },
  "sport": {
    sectionRefs: [[[1, 2], [5, 6]], [[3], [6, 4]], [[4], [7, 1]], [[4], [1]], [[1]]],
    helpRefs: [[3], [4], [4], [1]],
    stats: {
      1: [{ value: "6 weeks", label: "of avoiding or cutting down on sport that makes it worse, while staying active, says NICE's guidance for GPs.", ref: 3, picture: "calendar" }],
    },
    charts: {
      0: { kind: "donut", title: "Not mostly from racquets", subtitle: "People with tennis elbow, out of every 100", value: 10, prefix: "Fewer than", subject: "people with tennis elbow", label: "got it from racquet sports", sources: "Source: NICE Clinical Knowledge Summaries, Tennis elbow: what causes it?" },
    },
  },
  "coming-back": {
    sectionRefs: [[[1, 2], [3, 4]], [[1], [1]], [[1], [5]], [[7], [5]], [[6], [1]]],
    helpRefs: [[1], [1], [7], [5]],
    stats: {
      0: [{ value: "Up to 50%", label: "of people may find their symptoms come back after steroid injections, often worse, says NICE's guidance for GPs.", ref: 3, picture: "half" }],
    },
  },
};
