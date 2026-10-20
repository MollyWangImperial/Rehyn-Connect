import type { NewsExtras } from "../ischaemic-news";
// COPD features: reference numbers (positions in each answer's own sources, copd-answers.ts), charts and figures, checked 20 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[2, 4], [2]], [[2]], [[3], [3]], [[1, 2]], [[2, 4], [1]]],
    helpRefs: [[1], [1], [1], [1]],
    stats: { 0: [{ value: "600,000", label: "people across the UK are living with COPD without a diagnosis, says Asthma + Lung UK.", ref: 2 }] },
    charts: {
      4: { kind: "bars", title: "What COPD is linked to", subtitle: "Cases of COPD, out of every 100 (a case can have more than one cause)", bars: [{ label: "Smoking cigarettes", value: 90, strong: true }, { label: "Dust, fumes and chemicals at work", value: 20 }], sources: "Source: Asthma + Lung UK, What is COPD?" },
    },
  },
  "tests": {
    sectionRefs: [[[1, 3]], [[1], [2]], [[2, 3], [2, 3]], [[1, 3], [3], [2, 3]], [[4]]],
    helpRefs: [[2], [3], [3], [3]],
  },
  "flare-ups": {
    sectionRefs: [[[1, 3], [1, 2]], [[1], [1]], [[1], [1]], [[1], [1]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1], [1]],
    stats: {
      4: [
        { value: "7 to 10 days", label: "is how long flare-ups usually last, says Asthma + Lung UK, though full recovery can take longer.", ref: 1, picture: "calendar" },
        { value: "1 in 5", label: "people still have symptoms eight weeks after a flare-up, says Asthma + Lung UK.", ref: 1, picture: "one-in", of: 5 },
      ],
    },
  },
  "breathless-why": {
    sectionRefs: [[[3], [2]], [[2]], [[1], [4]], [[1, 2], [1]], [[1], [1]]],
    helpRefs: [[2], [1], [4], [3, 4], [3]],
    stats: { 3: [{ value: "1,000", label: "more steps a day can help you improve your fitness, says Asthma + Lung UK.", ref: 1 }] },
  },
  "inhalers": {
    sectionRefs: [[[1, 2], [1]], [[1, 2]], [[1], [1]], [[1], [1], [1]], [[4], [4]]],
    helpRefs: [[1, 2], [3], [1], [1], [4]],
    stats: { 2: [{ value: "12 to 24 hours", label: "of help from long-acting inhalers used regularly, says Asthma + Lung UK.", ref: 1, picture: "hours" }] },
  },
  "rehab": {
    sectionRefs: [[[3], [1, 2]], [[1], [1], [1]], [[1], [1, 2]], [[2], [1]], [[1]]],
    helpRefs: [[1], [1], [1], [1]],
    stats: { 1: [{ value: "6 to 8 weeks", label: "is how long a course usually lasts, with two sessions a week, says Asthma + Lung UK.", ref: 1, picture: "calendar" }] },
    charts: {
      2: { kind: "waffle", title: "More able to be active", subtitle: "People who complete a pulmonary rehab course, out of every 100", groups: [{ label: "More able to be active", count: 90, tone: "green" }, { label: "The rest", count: 10, tone: "dark" }], sources: "Source: Asthma + Lung UK, Treatments and medicines for COPD" },
    },
  },
  "rescue-pack": {
    sectionRefs: [[[1, 2]], [[2, 3], [2, 3], [1]], [[1], [2]], [[1], [1]], [[1]]],
    helpRefs: [[1], [1], [1], [1]],
    stats: { 3: [{ value: "3 or more", label: "courses of steroid tablets or antibiotics in a year should mean you are offered a review, says Asthma + Lung UK.", ref: 1 }] },
  },
  "oxygen": {
    sectionRefs: [[[3], [3]], [[1], [1]], [[1], [1]], [[1, 3], [2], [3]], [[1]]],
    helpRefs: [[1], [1, 3], [2], [2], [2]],
    stats: { 1: [{ value: "15 hours", label: "a day or more is how long long-term oxygen therapy is used, says Asthma + Lung UK.", ref: 1, picture: "hours" }] },
  },
  "breathing": {
    sectionRefs: [[[1, 4], [1]], [[1, 2], [1, 2]], [[1, 2], [2]], [[1], [1]], [[3]]],
    helpRefs: [[1], [1, 2], [1], [3], [1]],
    stats: { 4: [{ value: "6 inches", label: "from your face is where to hold a handheld battery fan, says Asthma + Lung UK.", ref: 3 }] },
  },
  "smoking": {
    sectionRefs: [[[1], [1, 2]], [[1]], [[3], [3]], [[3], [3], [3]], [[3, 4]]],
    helpRefs: [[3], [3], [3], [3], [3, 4]],
    stats: {
      2: [{ value: "3 times", label: "more likely to stop with support from a local stop smoking service, says Asthma + Lung UK.", ref: 3 }],
      4: [{ value: "5 times", label: "more likely to stop for good once you reach 28 days smoke free, say Asthma + Lung UK and the NHS.", ref: 3, picture: "times" }],
    },
  },
  "vaccines": {
    sectionRefs: [[[6], [3]], [[2, 3], [2, 3], [1, 2]], [[4], [4]], [[5], [6]], [[2, 3]]],
    helpRefs: [[1, 3], [1, 4], [5], [3]],
    stats: { 1: [{ value: "14 days", label: "is how long the flu vaccine can take to work, says the NHS.", ref: 2, picture: "calendar" }] },
  },
  "energy": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[2], [2]], [[1], [1]], [[1, 3], [3]]],
    helpRefs: [[1], [1], [1], [1], [2], [1]],
    stats: { 4: [{ value: "Twice a week", label: "at least, for strengthening activities, says Asthma + Lung UK.", ref: 3, picture: "calendar" }] },
  },
  "mood": {
    sectionRefs: [[[1], [1]], [[3], [2]], [[2], [1, 2], [1, 2]], [[3], [3]], [[2]]],
    helpRefs: [[1], [1, 2], [1, 2], [2], [2]],
    stats: { 1: [{ value: "2 to 3 times", label: "more likely to get depression with a long-term physical health condition, says Asthma + Lung UK.", ref: 2 }] },
  },
};
