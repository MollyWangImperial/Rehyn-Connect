import type { NewsExtras } from "../ischaemic-news";
// Slipped disc features: paragraph references (numbers are positions in each answer's own sources in disc-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[3], [3]], [[4], [4]], [[1], [5, 6]]],
    helpRefs: [[1], [4], [1], [1]],
    stats: {
      1: [{ value: "24 bones", label: "called vertebrae make up the spinal column, with discs between them, says Arthritis UK.", ref: 2 }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[3], [5]], [[4], [4]], [[2, 3], [3]]],
    helpRefs: [[2], [6], [4], [3], [1]],
    stats: {
      4: [{ value: "12 weeks", label: "is the time within which sciatica usually improves, says NHS inform, though for some people it takes up to a year to settle.", ref: 3, picture: "calendar" }],
    },
  },
  "causes": {
    sectionRefs: [[[1], [2]], [[3], [6]], [[4], [5]], [[1, 3], [7]], [[4]]],
    helpRefs: [[1], [1], [1], [7], [3]],
    stats: {
      4: [{ value: "100 per cent", label: "of pain is real and never all in your head, says the Chartered Society of Physiotherapy.", ref: 4 }],
    },
  },
  "urgent": {
    sectionRefs: [[[1], [2]], [[1], [3]], [[4], [5, 6]], [[5], [5]], [[2], [1]]],
    helpRefs: [[1], [1], [1], [1], [2]],
    stats: {
      3: [{ value: "7 days", label: "is the window NHS inform gives: a new, significant injury to the back within the last 7 days, such as a fall from height, is also a reason to phone 111.", ref: 5, picture: "calendar" }],
    },
  },
  "moving": {
    sectionRefs: [[[1], [1]], [[2], [3, 4]], [[6], [4]], [[2, 3], [3]], [[3], [5]]],
    helpRefs: [[1], [2], [2], [6], [2, 3], [7]],
    charts: {
      4: { kind: "bars", title: "When things usually ease", subtitle: "Weeks, according to NHS inform's back problems and sciatica pages", bars: [{ label: "Biggest change in symptoms, within the first", value: 2 }, { label: "Most problems improved within", value: 6, strong: true }, { label: "Sciatica usually improves within", value: 12 }], max: 12, ticks: [0, 3, 6, 9, 12], unit: " weeks", sources: "Source: NHS inform, Back problems; NHS inform, Sciatica" },
    },
  },
  "painkillers": {
    sectionRefs: [[[1], [1, 4]], [[2, 3], [9]], [[1, 5], [1, 6]], [[10, 7], [9, 12, 8]], [[11], [14]]],
    helpRefs: [[1], [1], [1], [13, 12], [11], [11]],
    stats: {
      2: [{ value: "Up to 4 weeks", label: "is the most diazepam should be used for, says the NHS, as taking it for longer can cause addiction and withdrawal symptoms.", ref: 6, picture: "calendar" }],
      3: [{ value: "Up to 6 weeks", label: "is how long amitriptyline can take to work as a painkiller, says the NHS.", ref: 7, picture: "calendar" }],
    },
    charts: {
      4: { kind: "bars", title: "How long to take everyday painkillers", subtitle: "Days, according to NHS inform and the NHS", bars: [{ label: "Still need pain relief? Ask a pharmacist after", value: 4 }, { label: "Ibuprofen tablets, without a doctor's advice, no more than", value: 10, strong: true }], max: 12, ticks: [0, 4, 8, 12], unit: " days", sources: "Source: NHS inform, When should I take painkillers?; NHS, Ibuprofen for adults" },
    },
  },
  "physio": {
    sectionRefs: [[[1, 10], [3], [9]], [[4], [2]], [[5], [8]], [[6], [6, 7]], [[6], [6]]],
    helpRefs: [[5], [3], [2], [6], [6], [10]],
    stats: {
      4: [{ value: "2 sets of 15", label: "is the most NHS inform suggests aiming for, as you build up repetitions over time.", ref: 6 }],
    },
    charts: {
      4: { kind: "bars", title: "Rating pain while you exercise", subtitle: "NHS inform's pain scale, where 0 is no pain and 10 the worst you have ever had", bars: [{ label: "Minimal pain, up to", value: 3 }, { label: "Acceptable pain, up to", value: 5, strong: true }, { label: "Excessive pain, up to", value: 10 }], max: 10, ticks: [0, 2, 4, 6, 8, 10], unit: " out of 10", sources: "Source: NHS inform, Exercises for back pain" },
    },
  },
  "injections-surgery": {
    sectionRefs: [[[1, 2], [3]], [[4], [4]], [[1, 7], [6]], [[1, 9], [3]], [[5], [5]]],
    helpRefs: [[8], [8], [8], [4], [5]],
    stats: {
      2: [{ value: "1 to 2 weeks", label: "is how long it usually takes to get MRI scan results, says the NHS.", ref: 6, picture: "calendar" }],
    },
    charts: {
      4: { kind: "bars", title: "Getting back to normal", subtitle: "Weeks after lumbar decompression surgery, according to the NHS", bars: [{ label: "Back to work, around 4 to", value: 6 }, { label: "All usual activities, up to", value: 12, strong: true }], max: 12, ticks: [0, 3, 6, 9, 12], unit: " weeks", sources: "Source: NHS, Lumbar decompression surgery" },
    },
  },
  "lifting": {
    sectionRefs: [[[1], [2, 5]], [[3], [2]], [[3], [3, 2]], [[3], [2, 4]], [[6], [3]]],
    helpRefs: [[3], [3, 2], [4], [2], [2]],
  },
  "work": {
    sectionRefs: [[[2], [3]], [[1], [1]], [[8, 4], [1, 4]], [[4], [5, 4]], [[6], [7]]],
    helpRefs: [[1], [1], [1], [4], [6]],
    stats: {
      1: [{ value: "2 weeks", label: "off work with back pain is the point to talk to your GP and employer about physiotherapy or other treatment, says Arthritis UK.", ref: 1, picture: "calendar" }],
    },
    charts: {
      3: { kind: "bars", title: "How often to change position", subtitle: "Minutes at a desk, according to BackCare", bars: [{ label: "Even better: every", value: 20, strong: true }, { label: "At least every", value: 45 }], max: 60, ticks: [0, 15, 30, 45, 60], unit: " minutes", sources: "Source: BackCare, Back pain in the work place: office furniture" },
    },
  },
  "sleep": {
    sectionRefs: [[[1], [2]], [[1], [4]], [[4], [4]], [[3], [3]], [[5], [6, 2]]],
    helpRefs: [[1], [2], [4], [3], [2]],
    stats: {
      2: [{ value: "10 minutes", label: "at least, is how long BackCare suggests trying a new mattress before you buy.", ref: 4, picture: "hours" }],
    },
  },
  "coming-back": {
    sectionRefs: [[[2], [7]], [[1, 3], [4, 5]], [[2], [6]], [[2, 3], [1]], [[7]]],
    helpRefs: [[1], [2], [2], [2], [1], [7]],
    stats: {
      1: [{ value: "2 days a week", label: "at least, for strengthening activities that work all the major muscle groups, says the NHS for adults aged 19 to 64.", ref: 5, picture: "calendar" }],
    },
    charts: {
      1: { kind: "bars", title: "A week of activity", subtitle: "Minutes a week adults aged 19 to 64 should aim for, by intensity", bars: [{ label: "Vigorous intensity", value: 75 }, { label: "Moderate intensity", value: 150, strong: true }], max: 160, ticks: [0, 40, 80, 120, 160], unit: " minutes", sources: "Source: NHS, Physical activity guidelines for adults aged 19 to 64" },
    },
  },
};
