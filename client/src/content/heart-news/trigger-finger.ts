import type { NewsExtras } from "../ischaemic-news";
// Trigger finger features: paragraph references (numbers are positions in each answer's own sources in trigger-finger-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [4, 3]], [[2], [5]], [[1], [5, 4]], [[2, 3, 5], [5]], [[4], [2, 1]]],
    helpRefs: [[1], [1], [1], [1]],
    charts: {
      3: { kind: "range", title: "A common hand problem", subtitle: "People who develop trigger finger, out of every 100, according to Gateshead Health", from: 2, to: 3, sources: "Source: Gateshead Health NHS Foundation Trust, Trigger finger/thumb release surgery" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [2]], [[1], [5, 3], [3]], [[1], [3, 4]], [[1], [6]], [[5], [6]]],
    helpRefs: [[1], [6], [5], [6]],
    stats: {
      1: [{ value: "Over 40", label: "is the usual age of people with this pain at the base of the finger or thumb, says the British Society for Surgery of the Hand.", ref: 3 }],
    },
  },
  "who": {
    sectionRefs: [[[1], [2]], [[1, 3], [2]], [[1, 2], [3], [4]], [[2, 4], [4, 5]], [[3]]],
    helpRefs: [[1], [4], [1]],
    stats: {
      1: [{ value: "Over 40", label: "is the age from which you may be more likely to get trigger finger, says the NHS.", ref: 1 }],
    },
  },
  "diagnosis": {
    sectionRefs: [[[1], [3]], [[2], [3]], [[2]], [[4], [4, 5], [3]], [[6], [2]]],
    helpRefs: [[1], [4], [6], [2]],
    stats: {
      4: [{ value: "Two weeks", label: "of treatment at home without improvement is when to visit your GP surgery about hand pain, says Arthritis UK.", ref: 2, picture: "calendar" }],
    },
  },
  "rest-splint": {
    sectionRefs: [[[1], [2]], [[1], [2], [2, 7]], [[3], [3]], [[1, 6, 7], [5]], [[3], [3]]],
    helpRefs: [[1], [2], [3], [5], [1], [4]],
    stats: {
      3: [{ value: "Up to 20 minutes", label: "at a time, every 2 to 3 hours, for an ice pack wrapped in a towel on a painful finger, says the NHS.", ref: 5, picture: "hours" }],
      4: [{ value: "Up to 12 weeks", label: "is how long improvement may take with the advice and exercises, says North Tees and Hartlepool's hand therapy leaflet.", ref: 3, picture: "calendar" }],
    },
  },
  "injection": {
    sectionRefs: [[[1], [4]], [[2], [3, 2], [9]], [[5, 6], [8, 6, 7]], [[2, 4], [5, 7]], [[2, 4], [10], [7]]],
    helpRefs: [[1], [7], [10], [10], [7]],
    stats: {
      2: [{ value: "24 hours", label: "of resting the area, and avoiding heavy exercise, after the injection, says the NHS.", ref: 7, picture: "hours" }],
    },
    charts: {
      1: { kind: "bars", title: "How often the injection helps", subtitle: "What two UK sources report, out of every 100 people injected", bars: [{ label: "Pain and triggering relieved (BSSH)", value: 70, strong: true }, { label: "No further treatment needed (Gloucestershire Hospitals)", value: 90 }], sources: "Sources: British Society for Surgery of the Hand, Trigger finger/thumb (about 70%); Gloucestershire Hospitals NHS Foundation Trust, Having a trigger finger release (around 90%)" },
    },
  },
  "surgery": {
    sectionRefs: [[[1], [3, 4]], [[5, 3], [3], [2]], [[2, 5], [4, 2]], [[3], [3]], [[3, 4], [3]]],
    helpRefs: [[1], [3, 4], [3], [4], [3]],
    stats: {
      1: [{ value: "Under 30 minutes", label: "is how long the operation usually takes, under local anaesthetic as a day case, says Gateshead Health.", ref: 3, picture: "hours" }],
      3: [{ value: "Fewer than 1 in 100", label: "people get a wound infection after the operation, according to Gateshead Health.", ref: 3 }],
    },
  },
  "after-surgery": {
    sectionRefs: [[[1], [1]], [[1], [2, 1]], [[3, 1], [2, 1], [1]], [[2], [2], [1]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1], [1]],
    stats: {
      1: [{ value: "10 to 14 days", label: "after the operation is when the wound is usually checked at your GP practice, says Gateshead Health.", ref: 1, picture: "calendar" }],
      3: [{ value: "3 months", label: "is usually when hand function is back to normal, says Gloucestershire Hospitals.", ref: 2, picture: "calendar" }],
    },
  },
  "hand-use": {
    sectionRefs: [[[1], [4]], [[2], [3]], [[3], [5], [3, 2]], [[2], [6]], [[3], [7]]],
    helpRefs: [[1], [2], [3], [3], [3], [2, 5]],
    stats: {
      2: [{ value: "2 to 3 days", label: "after an injury before using heat packs or having hot baths, says the NHS.", ref: 3, picture: "calendar" }],
    },
  },
  "diabetes": {
    sectionRefs: [[[1, 8], [2]], [[3, 9], [6]], [[2, 5], [4], [7]], [[2], [5]]],
    helpRefs: [[3, 9], [4], [4], [7]],
    stats: {
      2: [{ value: "About 70%", label: "of steroid injections relieve the pain and triggering, says the British Society for Surgery of the Hand. The success rate is lower with diabetes.", ref: 2 }],
    },
  },
  "work": {
    sectionRefs: [[[7], [10]], [[1], [1, 6], [1]], [[8], [9]], [[3, 2], [2, 4], [5]], [[3], [2]]],
    helpRefs: [[1], [1], [1], [8], [2]],
    stats: {
      3: [
        { value: "2 to 3 weeks", label: "off work for light manual jobs after the operation, in Glasgow's guidance for clinicians.", ref: 4, picture: "calendar" },
        { value: "4 to 6 weeks", label: "off work for heavy manual jobs after the operation, in Glasgow's guidance for clinicians.", ref: 4, picture: "calendar" },
      ],
      4: [{ value: "2 to 3 weeks", label: "after the operation is when most people return to driving, says Gloucestershire Hospitals.", ref: 3, picture: "calendar" }],
    },
  },
  "coming-back": {
    sectionRefs: [[[1], [4], [6]], [[7], [7]], [[1], [3]], [[6, 8], [2]], [[5], [4]]],
    helpRefs: [[7], [7], [6], [1]],
    stats: {
      0: [{ value: "2 injections", label: "in total is the most that Glasgow's guidance for clinicians suggests.", ref: 4 }],
      1: [{ value: "Up to 12 weeks", label: "is how long improvement may take with the advice and exercises, says North Tees and Hartlepool's hand therapy leaflet.", ref: 7, picture: "calendar" }],
    },
  },
};
