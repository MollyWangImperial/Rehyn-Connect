import type { NewsExtras } from "../ischaemic-news";
// Secondary bone cancer features: paragraph references (numbers are positions in each answer's own sources in bone-metastases-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [1]], [[2], [2]], [[1, 2], [1, 4]], [[3], [3]], [[1, 2], [2], [1, 5]]],
    helpRefs: [[5], [5], [2], [1], [1, 6]],
  },
  "symptoms": {
    sectionRefs: [[[1], [2, 3], [4]], [[1], [1, 5]], [[1], [2]], [[1], [1]], [[1], [1]]],
    helpRefs: [[1], [2], [4], [5], [1]],
    stats: {
      2: [{ value: "More than 2 weeks", label: "of pain in 1 or more areas is a reason to let your doctor or nurse know, says Macmillan.", ref: 1, picture: "calendar" }],
    },
  },
  "emergencies": {
    sectionRefs: [[[3, 4, 1], [2, 1]], [[3, 1, 2], [1, 2], [1]], [[1], [1, 2, 8], [1, 2]], [[4, 5], [4, 5], [4, 5]], [[1, 6], [7]]],
    helpRefs: [[1, 2], [1, 2], [1, 6], [4], [1, 6], [7]],
    charts: {
      1: { kind: "donut", title: "Pain is often the first sign", subtitle: "People with spinal cord compression, out of every 100, who have pain, as Cancer Research UK reports", value: 90, prefix: "More than", subject: "people with spinal cord compression", label: "have pain, which is often the first symptom", sources: "Source: Cancer Research UK, Spinal cord compression and cancer" },
    },
    stats: {
      2: [{ value: "Within 24 hours", label: "of diagnosis is when treatment for spinal cord compression should usually start, says Cancer Research UK.", ref: 2, picture: "hours" }],
    },
  },
  "tests": {
    sectionRefs: [[[1], [2]], [[1], [1, 2]], [[2, 1, 3], [3], [3, 4]], [[1, 5], [1]], [[3], [6, 3]]],
    helpRefs: [[4], [3], [3], [3], [3], [6]],
    stats: {
      2: [{ value: "2 to 3 hours", label: "is how long you wait for the tracer to collect in your bones before a bone scan, says Cancer Research UK.", ref: 3, picture: "hours" }],
      4: [{ value: "1 or 2 weeks", label: "is when you should get your bone scan results, says Cancer Research UK.", ref: 3, picture: "calendar" }],
    },
  },
  "bone-drugs": {
    sectionRefs: [[[1, 2], [4, 3]], [[3], [2, 5, 3], [3]], [[2, 6], [4]], [[3, 2], [3], [3, 5]], [[2, 3], [3]]],
    helpRefs: [[3], [2], [3], [5, 3], [5, 3], [3]],
    stats: {
      1: [{ value: "Every 3 to 4 weeks", label: "is how often zoledronic acid is usually given into a vein at first, says Breast Cancer Now.", ref: 3, picture: "calendar" }],
    },
  },
  "radiotherapy": {
    sectionRefs: [[[1], [2]], [[1, 3], [1], [1, 4]], [[1], [1], [2]], [[1], [1]], [[1], [1], [3]]],
    helpRefs: [[1], [1], [1], [2], [3]],
    stats: {
      2: [
        { value: "7 to 10 days", label: "is how long bone pain may take to start improving after radiotherapy, says Macmillan.", ref: 1, picture: "calendar" },
        { value: "Up to 6 weeks", label: "may pass before you feel the full benefit of the treatment, says Macmillan.", ref: 1, picture: "calendar" },
      ],
    },
  },
  "pain": {
    sectionRefs: [[[1], [1, 2]], [[2], [3, 1]], [[4], [4, 1], [5]], [[3, 1, 4], [6]], [[3, 1], [1], [7]]],
    helpRefs: [[2], [2, 1], [4], [5], [3], [2]],
    stats: {
      4: [{ value: "1 to 2 weeks", label: "is how long a hospice stay to get pain and other symptoms under control may last, says Macmillan.", ref: 1, picture: "calendar" }],
    },
  },
  "surgery": {
    sectionRefs: [[[1], [2]], [[3, 2], [1, 2]], [[1, 4, 2], [4]], [[1, 3]], [[5], [1]]],
    helpRefs: [[1], [1], [6], [7]],
    stats: {
      2: [{ value: "About an hour", label: "is how long a vertebroplasty takes, and you can usually go home later that day, says Breast Cancer Now.", ref: 4, picture: "hours" }],
    },
  },
  "moving": {
    sectionRefs: [[[1], [2]], [[1], [3]], [[1], [1]], [[1], [1]], [[1], [3]]],
    helpRefs: [[1], [1], [1], [1], [1], [3]],
  },
  "teeth": {
    sectionRefs: [[[1, 2], [2]], [[3, 2], [3, 4], [3]], [[3], [2, 3]], [[1], [3, 2]], [[2, 4], [4, 3]]],
    helpRefs: [[2], [3], [2, 4], [3], [2], [3]],
    stats: {
      1: [{ value: "4 to 6 weeks", label: "is how long the area usually takes to heal after a tooth is removed, before bone-strengthening drugs start, says Breast Cancer Now.", ref: 3, picture: "calendar" }],
    },
  },
  "home": {
    sectionRefs: [[[1, 2], [1]], [[2, 1], [3, 4]], [[2], [5, 3, 2]], [[6], [6], [6, 2]], [[3], [2, 3]]],
    helpRefs: [[2], [1], [2], [6], [6], [2]],
    stats: {
      3: [{ value: "Free", label: "is what a care needs assessment from your council costs, and anyone can ask for one, says the NHS.", ref: 6 }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [1]], [[2, 3], [4, 1]], [[1], [5, 6, 7], [4, 8]], [[5], [1, 9, 5]], [[5, 10], [11], [11]]],
    helpRefs: [[1], [5], [1], [6, 7], [10], [11]],
    stats: {
      3: [{ value: "More than 2 weeks", label: "of low feelings is the time to talk to your doctor or nurse, says Macmillan.", ref: 5, picture: "calendar" }],
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 10 }],
    },
  },
};
