import type { NewsExtras } from "../ischaemic-news";
// Rotator cuff problems features: paragraph references (numbers are positions in each answer's own sources in rotator-cuff-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [1]], [[1, 4], [2]], [[3], [3]], [[2], [4]], [[6, 4], [5]]],
    helpRefs: [[7], [7], [1], [7]],
    charts: {
      4: { kind: "donut", title: "The usual culprit", subtitle: "People with shoulder pain, out of every 100", value: 70, prefix: "Around", subject: "people with shoulder pain", label: "are likely to have rotator cuff problems", sources: "Source: NIHR Evidence, summary of the UKUFF trial" },
    },
    stats: {
      2: [{ value: "90 in 100", label: "rotator cuff tears involve the supraspinatus tendon, says one NHS hospital leaflet.", ref: 3 }],
    },
  },
  "types": {
    sectionRefs: [[[3], [4]], [[1], [1]], [[1], [1, 2]], [[2], [1, 5]], [[2], [2, 6]]],
    helpRefs: [[3], [1], [7], [4]],
    stats: {
      3: [{ value: "Over 40", label: "is when a torn rotator cuff becomes more common, says Arthritis UK.", ref: 1 }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1, 2], [2]], [[1, 2], [3], [1, 8]], [[1, 4]], [[3], [3]], [[5], [5], [7]]],
    helpRefs: [[5], [5], [6], [6], [3]],
    charts: {
      1: { kind: "range", title: "The painful arc", subtitle: "Angles of raising the arm out to the side where pain may be felt", from: 70, to: 120, unit: "degrees", sources: "Source: NICE Clinical Knowledge Summaries, Shoulder pain" },
    },
    stats: {
      4: [{ value: "2 weeks", label: "without improvement is when the NHS says to see a GP about shoulder pain, or sooner if it is getting worse.", ref: 5, picture: "calendar" }],
    },
  },
  "diagnosis": {
    sectionRefs: [[[1, 3], [1]], [[2], [2, 3]], [[2], [3]], [[3, 8, 9], [2], [4]], [[5, 7], [6]]],
    helpRefs: [[3], [7], [2], [9], [8]],
    stats: {
      2: [{ value: "4 weeks", label: "of symptoms is one point at which NICE guidance for GPs suggests considering a shoulder X-ray.", ref: 2, picture: "calendar" }],
      3: [{ value: "15 minutes to 1 hour", label: "is how long an MRI scan usually takes, says the NHS.", ref: 9, picture: "hours" }],
    },
  },
  "self-care": {
    sectionRefs: [[[1], [2]], [[1, 2], [6]], [[2], [3]], [[1], [4]], [[1], [5], [3, 2]]],
    helpRefs: [[2], [1], [2], [1, 4], [2], [2]],
    stats: {
      1: [{ value: "2 weeks", label: "is how long you usually need to keep these things up before shoulder pain starts to ease, says the NHS.", ref: 2, picture: "calendar" }],
      2: [{ value: "20 minutes", label: "at a time is the most the NHS suggests for a wrapped ice pack or hot water bottle on a sore shoulder.", ref: 2, picture: "hours" }],
    },
  },
  "exercises": {
    sectionRefs: [[[1], [6, 5]], [[4], [3, 5]], [[2], [2], [2]], [[1], [2]], [[1], [1]]],
    helpRefs: [[4], [1], [1], [1], [7]],
    charts: {
      4: { kind: "bars", title: "How often to exercise", subtitle: "Days each week, according to the British Elbow and Shoulder Society", bars: [{ label: "The aim", value: 6, strong: true }, { label: "At least", value: 4 }], max: 7, ticks: [0, 1, 2, 3, 4, 5, 6, 7], unit: " days", sources: "Source: British Elbow and Shoulder Society, Subacromial pain" },
    },
    stats: {
      0: [{ value: "6 to 12 weeks", label: "is when your shoulder should start to feel better with the exercises, says the British Elbow and Shoulder Society.", ref: 1, picture: "calendar" }],
      3: [{ value: "30 minutes", label: "is how quickly a small rise in pain from exercise should settle, says the British Elbow and Shoulder Society.", ref: 1, picture: "hours" }],
    },
  },
  "injections": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[2], [2, 4]], [[2, 1], [1], [3]], [[2], [2, 3]]],
    helpRefs: [[2], [1], [3], [3, 2], [3]],
    stats: {
      2: [{ value: "6 weeks", label: "is the gap before a second injection may be given, and only if the first one helped, says NICE guidance for GPs.", ref: 2, picture: "calendar" }],
      3: [{ value: "24 hours", label: "is how long to rest the injected shoulder as much as is practical, says NICE guidance for GPs.", ref: 2, picture: "hours" }],
    },
  },
  "surgery": {
    sectionRefs: [[[1, 2], [3]], [[4], [4, 5]], [[1], [6]], [[4], [4, 5]], [[4], [8, 7]]],
    helpRefs: [[7], [4], [8], [4], [8]],
    charts: {
      3: { kind: "bars", title: "After a rotator cuff repair", subtitle: "Out of every 100 people, according to one NHS hospital leaflet", bars: [{ label: "Safe, reliable and effective for", value: 90, strong: true }, { label: "Still have some symptoms", value: 20 }, { label: "Develop a painful stiff shoulder", value: 5 }], sources: "Source: Royal Berkshire NHS Foundation Trust, Rotator cuff repair" },
    },
    stats: {
      1: [{ value: "273 people", label: "at 19 UK hospitals took part in the UKUFF trial comparing keyhole and open rotator cuff repair.", ref: 5 }],
      2: [{ value: "313 people", label: "with shoulder pain took part in the CSAW trial of decompression surgery, at 32 UK hospitals.", ref: 6 }],
    },
  },
  "daily-tasks": {
    sectionRefs: [[[1], [1]], [[6, 1], [1]], [[3], [1]], [[1], [1]], [[1], [5, 4]]],
    helpRefs: [[1], [1], [1], [1], [2], [1]],
  },
  "work": {
    sectionRefs: [[[1], [8]], [[2], [2]], [[2, 3], [4]], [[5, 6], [5]], [[5], [7]]],
    helpRefs: [[2], [2], [2, 3], [4], [5]],
    charts: {
      3: { kind: "bars", title: "Time off after a repair", subtitle: "Months off work, according to one NHS hospital leaflet", bars: [{ label: "Most people, within", value: 2 }, { label: "Heavy or overhead jobs, up to", value: 6, strong: true }], max: 6, ticks: [0, 2, 4, 6], unit: " months", sources: "Source: Royal Berkshire NHS Foundation Trust, Rotator cuff repair" },
    },
    stats: {
      4: [{ value: "Up to £1,000", label: "is the fine for not telling DVLA about a condition that might affect your ability to drive safely.", ref: 7 }],
    },
  },
  "sport": {
    sectionRefs: [[[1], [2]], [[3], [4, 9]], [[5], [2]], [[6], [7, 8]], [[6], [7]]],
    helpRefs: [[3], [4], [6], [7]],
    charts: {
      3: { kind: "bars", title: "Back to sport after a repair", subtitle: "Earliest time suggested, in months, according to NHS hospital leaflets", bars: [{ label: "Golf, from", value: 3 }, { label: "Competitive sport, from", value: 3 }, { label: "Contact sports, commonly from", value: 9, strong: true }], max: 12, ticks: [0, 3, 6, 9, 12], unit: " months", sources: "Sources: James Paget University Hospitals; Royal Berkshire NHS Foundation Trust; NHS Lothian" },
    },
    stats: {
      2: [{ value: "30 minutes", label: "is how quickly a small rise in pain from exercise should settle, says the British Elbow and Shoulder Society.", ref: 2, picture: "hours" }],
    },
  },
  "long-term": {
    sectionRefs: [[[1, 2], [8]], [[3], [3]], [[1], [4, 5]], [[2], [7]], [[6], [6], [5]]],
    helpRefs: [[2], [2], [1], [6], [6]],
    charts: {
      1: { kind: "range", title: "Pain that lasts", subtitle: "People with shoulder pain still in pain 6 to 12 months after seeing a GP, out of every 100", from: 40, to: 50, sources: "Source: NICE Clinical Knowledge Summaries, Shoulder pain" },
    },
    stats: {
      0: [{ value: "6 months or longer", label: "is how long it can take to recover from shoulder pain, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
};
