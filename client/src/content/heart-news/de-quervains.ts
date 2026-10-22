import type { NewsExtras } from "../ischaemic-news";
// De Quervain's tenosynovitis features: paragraph references (numbers are positions in each answer's own sources in de-quervains-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2, 3]], [[6], [2]], [[3, 5]], [[4], [1]]],
    helpRefs: [[1], [4], [5], [5]],
    stats: {
      3: [{ value: "A few weeks", label: "is how long some mild cases take to recover without treatment, says the British Society for Surgery of the Hand.", ref: 4, picture: "calendar" }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [1, 4]], [[1, 7], [2], [1, 3]], [[5, 6], [5, 6]], [[5], [6]]],
    helpRefs: [[6], [6], [6], [6], [5]],
    stats: {
      2: [{ value: "2 weeks", label: "of treating thumb pain at home without improvement is a reason to see a GP, says the NHS.", ref: 6, picture: "calendar" }],
    },
  },
  "causes": {
    sectionRefs: [[[2, 1], [4]], [[6, 7], [5], [2]], [[2, 3], [4, 8, 9]], [[1, 7, 8], [1, 8, 7]]],
    helpRefs: [[9], [2], [7], [7]],
    charts: {
      3: { kind: "bars", title: "How much more common in women?", subtitle: "How many times more likely women are to be affected than men, as three NHS leaflets put it", bars: [{ label: "Gloucestershire Hospitals", value: 3 }, { label: "Newcastle upon Tyne Hospitals", value: 6 }, { label: "NHS inform", value: 10, strong: true }], max: 10, ticks: [0, 2, 4, 6, 8, 10], unit: "×", sources: "Sources: NHS inform, Wrist tendonitis; Newcastle upon Tyne Hospitals, De Quervain's syndrome; Gloucestershire Hospitals, De Quervain's syndrome of the wrist" },
    },
  },
  "diagnosis": {
    sectionRefs: [[[2], [1, 8]], [[5], [5, 3]], [[1, 4], [5, 7]], [[7], [6]]],
    helpRefs: [[7], [6], [7], [6]],
    stats: {
      3: [{ value: "8 weeks", label: "of self-management comes first in NHS Ayrshire and Arran's guidance for GPs on de Quervain's.", ref: 5, picture: "calendar" }],
    },
  },
  "self-care": {
    sectionRefs: [[[1], [7, 3], [8]], [[1, 3], [1], [9]], [[1, 4], [3, 6], [5]], [[1], [6]]],
    helpRefs: [[1, 2], [1, 2], [1, 2], [1, 2], [1, 2]],
    stats: {
      1: [{ value: "Up to 20 minutes", label: "at a time, every 2 to 3 hours, is how long to use an ice pack wrapped in a towel on a painful thumb, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  "splint": {
    sectionRefs: [[[5, 2], [3]], [[2, 3, 7, 10], [4]], [[8, 9, 7], [1, 5]], [[5, 6], [1, 4], [4]]],
    helpRefs: [[1], [4], [1], [4], [4]],
    charts: {
      2: { kind: "bars", title: "How long a splint may be worn", subtitle: "Weeks of wearing a thumb and wrist splint, in three NHS leaflets", bars: [{ label: "NHS Lothian: continuously, up to", value: 3 }, { label: "Torbay and South Devon: continuously, up to", value: 4 }, { label: "North Tees and Hartlepool: at least", value: 6, strong: true }], max: 8, ticks: [0, 2, 4, 6, 8], unit: " weeks", sources: "Sources: NHS Lothian; Torbay and South Devon NHS Foundation Trust; North Tees and Hartlepool NHS Foundation Trust" },
    },
  },
  "injection": {
    sectionRefs: [[[2, 6], [3, 5]], [[1, 3, 4, 8], [3, 2, 6]], [[1, 6, 7], [5], [5]], [[5, 2], [5]]],
    helpRefs: [[8], [5], [5], [5], [5]],
    charts: {
      1: { kind: "bars", title: "How often an injection helps", subtitle: "Cases out of every 100 in which a steroid injection relieves the pain, as each source puts it", bars: [{ label: "NHS Scotland leaflet, up to", value: 70 }, { label: "British Society for Surgery of the Hand, about", value: 70, strong: true }, { label: "Newcastle upon Tyne Hospitals, about", value: 80 }], sources: "Sources: NHS Scotland, Wrist tendonitis / De Quervain; British Society for Surgery of the Hand, De Quervain's syndrome; Newcastle upon Tyne Hospitals, De Quervain's syndrome" },
    },
    stats: {
      3: [{ value: "2 weeks", label: "after a steroid injection is how long not to overdo it, because of a small risk to the tendon, says Arthritis UK.", ref: 5, picture: "calendar" }],
    },
  },
  "surgery": {
    sectionRefs: [[[2, 7], [4]], [[2, 5, 1, 6], [3, 2], [1]], [[2, 3], [2, 6], [2, 3]], [[1], [1, 2]]],
    helpRefs: [[2], [2], [6], [2], [2]],
    stats: {
      1: [{ value: "About 30 minutes", label: "is how long the operation lasts, says North Tees and Hartlepool NHS Foundation Trust.", ref: 3, picture: "hours" }],
      3: [{ value: "Less than 1 in 100", label: "is the risk of infection after the operation, says the British Society for Surgery of the Hand.", ref: 1, picture: "one-in", of: 100 }],
    },
    charts: {
      2: { kind: "bars", title: "Back to work after surgery", subtitle: "Weeks after the operation when work may be possible, at the end of each range", bars: [{ label: "Light manual or desk work, 2 to", value: 3 }, { label: "Heavy manual work, 4 to", value: 6, strong: true }], max: 8, ticks: [0, 2, 4, 6, 8], unit: " weeks", sources: "Source: University Hospitals Coventry and Warwickshire, deQuervain's tenosynovitis" },
    },
  },
  "lifting": {
    sectionRefs: [[[1], [3, 10, 2]], [[1, 2], [4], [4]], [[6, 5], [5]], [[7], [8]]],
    helpRefs: [[1], [4], [4], [9], [5]],
    stats: {
      2: [{ value: "4 times", label: "in 24 hours is the most often to use ibuprofen gel or spray, says the NHS.", ref: 5 }],
    },
  },
  "daily-tasks": {
    sectionRefs: [[[1], [7]], [[2], [3]], [[2], [6], [3]], [[4], [1], [5]]],
    helpRefs: [[2], [2], [2], [6], [4]],
    stats: {
      1: [{ value: "Every 30 minutes", label: "or so, take a break and stand up if you work at a computer, says Arthritis UK.", ref: 3, picture: "hours" }],
    },
  },
  "exercises": {
    sectionRefs: [[[7, 1], [2, 1]], [[1], [2], [1]], [[2], [3, 4], [5]], [[1, 2], [6]]],
    helpRefs: [[1], [1], [2], [6], [2]],
    stats: {
      1: [{ value: "10 times", label: "is how often to repeat each early thumb exercise, says the Royal United Hospitals Bath hand therapy leaflet.", ref: 1 }],
    },
    charts: {
      3: { kind: "bars", title: "How much pain is acceptable?", subtitle: "NHS inform's pain scale for exercise, rated out of 10", bars: [{ label: "Minimal pain, up to", value: 3 }, { label: "Acceptable pain, up to", value: 5, strong: true }, { label: "Excessive pain, up to", value: 10 }], max: 10, ticks: [0, 2, 4, 6, 8, 10], unit: " out of 10", sources: "Source: NHS inform, Exercises for wrist, hand and finger problems" },
    },
  },
  "coming-back": {
    sectionRefs: [[[8], [5]], [[3], [2]], [[1], [1]], [[6, 4], [7, 5]]],
    helpRefs: [[1], [2], [2], [1], [7]],
    stats: {
      3: [{ value: "3 a year", label: "is the most steroid injections into the same part of the body your doctor will probably recommend, says Arthritis UK.", ref: 4 }],
    },
  },
};
