import type { NewsExtras } from "../ischaemic-news";
// Bunions features: paragraph references (numbers are positions in each answer's own sources in bunions-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[3], [3], [4]], [[5], [5, 6]], [[1], [3]]],
    helpRefs: [[1], [1], [2], [1]],
    stats: {
      0: [{ value: "26 bones", label: "and 33 small joints make up the foot, says Arthritis UK.", ref: 6 }],
    },
  },
  "causes": {
    sectionRefs: [[[1], [2]], [[3], [4, 3]], [[3, 5]], [[3], [6, 5], [6]], [[3, 4]]],
    helpRefs: [[1], [1], [5], [7]],
  },
  "symptoms": {
    sectionRefs: [[[1], [1]], [[3], [2]], [[4], [5]], [[1], [6]]],
    helpRefs: [[1], [1], [5], [5], [6]],
  },
  "when-to-see-gp": {
    sectionRefs: [[[1], [1], [2]], [[1], [3]], [[5, 4], [3, 1], [6]], [[1], [3, 4]], [[7], [3]]],
    helpRefs: [[1], [1], [4], [1]],
    stats: {
      0: [{ value: "12 weeks", label: "without improvement is when NHS inform suggests talking to a healthcare professional about a bunion.", ref: 2, picture: "calendar" }],
      2: [{ value: "Over 10,000", label: "health professionals in foot and lower limb care are supported by the Royal College of Podiatry, it says.", ref: 8 }],
    },
  },
  "shoes": {
    sectionRefs: [[[1], [2]], [[3], [4]], [[5], [5]], [[5, 4], [6]]],
    helpRefs: [[1], [2], [5], [5], [6]],
    stats: {
      1: [{ value: "3cm", label: "is the highest heel NHS inform suggests looking for when replacing shoes.", ref: 4 }],
      2: [{ value: "1cm", label: "is the gap to leave between the end of the shoe and your longest toe, says Arthritis UK.", ref: 5 }],
    },
  },
  "padding": {
    sectionRefs: [[[1], [2, 3]], [[1], [3, 4]], [[2, 5], [3, 5]], [[3], [6]]],
    helpRefs: [[1], [7], [3], [2], [1]],
  },
  "pain-relief": {
    sectionRefs: [[[1, 2], [3, 4]], [[4], [4], [4]], [[1], [5], [5]], [[1], [6]]],
    helpRefs: [[1, 3], [4], [1], [5], [5], [4]],
    stats: {
      1: [{ value: "10 days", label: "is the longest to take ibuprofen tablets and capsules unless a doctor advises it, says the NHS.", ref: 4, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "Cold and heat, a little at a time", subtitle: "The most minutes at a time for a wrapped pack, as each source gives it", bars: [{ label: "Ice pack on a bunion (NHS)", value: 5, strong: true }, { label: "Heat or ice on a joint (NHS Fife)", value: 15 }], max: 20, ticks: [0, 5, 10, 15, 20], unit: " minutes", sources: "Source: NHS, Bunions; NHS Fife, Bunion (hallux valgus)" },
    },
  },
  "surgery": {
    sectionRefs: [[[1], [3]], [[1], [1, 2]], [[1, 2], [1, 4], [3]], [[1], [3, 4]], [[2, 3], [5]]],
    helpRefs: [[1], [3], [2], [4], [4]],
    stats: {
      0: [{ value: "More than 120", label: "operations have been reported for treating bunions, says Kent Community Health NHS Foundation Trust.", ref: 3 }],
      3: [{ value: "2 in 100", label: "is the rate of infection, and of the bunion coming back, given by Kent Community Health NHS Foundation Trust for its bunion operation.", ref: 3 }],
    },
    charts: {
      2: { kind: "bars", title: "The weeks after bunion surgery", subtitle: "Weeks the NHS says you will usually need, at most, for each", bars: [{ label: "Resting with feet raised, at least", value: 2 }, { label: "Avoiding driving, up to", value: 8 }, { label: "Off work, up to", value: 12, strong: true }], max: 12, ticks: [0, 4, 8, 12], unit: " weeks", sources: "Source: NHS, Bunions" },
    },
  },
  "walking": {
    sectionRefs: [[[1, 2], [3]], [[1], [4, 5]], [[1], [1, 5]], [[6, 7], [7], [8]]],
    helpRefs: [[1], [1], [1], [5], [7]],
    stats: {
      2: [{ value: "150 minutes", label: "of exercise a week is recommended for adults aged 19 to 64, and a brisk 10-minute daily walk counts towards it, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "work-occasions": {
    sectionRefs: [[[2], [4]], [[1, 2], [3], [6, 7]], [[5], [5], [1, 6]], [[8], [8]]],
    helpRefs: [[2], [4], [1], [3], [8]],
    stats: {
      2: [{ value: "2 to 12 weeks", label: "off work is usual after bunion surgery, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "skin": {
    sectionRefs: [[[1], [2, 3]], [[1], [4]], [[1], [1, 4]], [[5, 2], [2]], [[1], [1]]],
    helpRefs: [[1], [1, 2], [1], [1], [5]],
    stats: {
      1: [{ value: "4 to 6 weeks", label: "is how soon corns and calluses usually grow back unless the pressure on the area is reduced, says Arthritis UK.", ref: 4, picture: "calendar" }],
      4: [{ value: "3 weeks", label: "of treating a corn or callus at home without improvement is when to see a GP, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "family": {
    sectionRefs: [[[1], [2]], [[3], [4]], [[1], [1]], [[5, 1], [4]]],
    helpRefs: [[5], [5], [4], [5]],
  },
};
