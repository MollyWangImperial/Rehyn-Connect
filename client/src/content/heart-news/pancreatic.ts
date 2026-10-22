import type { NewsExtras } from "../ischaemic-news";
// Pancreatic cancer features: paragraph references (numbers are positions in each answer's own sources in pancreatic-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-you-had": {
    sectionRefs: [[[1], [6]], [[2], [3], [2, 9]], [[4], [4], [5]], [[6, 10], [6]], [[7], [7, 8], [7]]],
    helpRefs: [[1], [7], [7], [7], [9], [6]],
    stats: {
      1: [{ value: "One to two weeks", label: "is how long you may spend in hospital after surgery, depending on how well you recover, says Pancreatic Cancer UK.", ref: 9, picture: "calendar" }],
      2: [
        { value: "12 weeks", label: "after surgery is the time within which chemotherapy should begin, says Pancreatic Cancer UK.", ref: 4, picture: "calendar" },
        { value: "Three to six weeks", label: "is about how long a course of radiotherapy usually lasts, on weekdays, says Pancreatic Cancer UK.", ref: 5, picture: "calendar" },
      ],
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [1], [1]], [[1], [1], [5]], [[2], [2]], [[4], [5]], [[3], [3]]],
    helpRefs: [[1], [2], [5], [5], [3]],
    stats: {
      1: [{ value: "Two to three weeks", label: "is around how long jaundice may take to go completely after treatment, says Pancreatic Cancer UK.", ref: 1, picture: "calendar" }],
    },
  },
  "stage": {
    sectionRefs: [[[1, 8], [5, 6]], [[1, 2], [1, 2, 9]], [[3], [3]], [[4], [4]], [[7], [1, 7]]],
    helpRefs: [[1], [7], [7], [7], [7], [7]],
    stats: {
      0: [{ value: "4 stages", label: "make up the number system doctors use to stage pancreatic cancer, says Cancer Research UK.", ref: 5 }],
      4: [{ value: "31 days", label: "is the time within which treatment should start, once you and your team agree what you will have, says Pancreatic Cancer UK.", ref: 7, picture: "calendar" }],
    },
  },
  "follow-up": {
    sectionRefs: [[[2, 1], [2]], [[1], [1]], [[1], [2, 1], [3, 4]], [[2, 1], [5, 2], [6]], [[2, 7], [2]]],
    helpRefs: [[1], [5], [1], [2], [5], [2]],
    stats: {
      2: [
        { value: "Every 6 months", label: "for the first two years is how often you may have a check-up after surgery, says Pancreatic Cancer UK.", ref: 1, picture: "calendar" },
        { value: "Every 12 months", label: "after two years, and some may be phone calls, says Pancreatic Cancer UK.", ref: 1, picture: "calendar" },
      ],
    },
  },
  "enzymes": {
    sectionRefs: [[[4], [4, 1], [1, 6]], [[2], [2], [2]], [[2], [2], [2]], [[2], [2], [2, 3]], [[1, 5], [3], [2]]],
    helpRefs: [[2], [2], [2], [2], [3], [1]],
    stats: {
      1: [{ value: "Half", label: "of your capsules go with the first few mouthfuls, and the rest are spread through the meal, says Pancreatic Cancer UK.", ref: 2, picture: "half" }],
    },
  },
  "diabetes": {
    sectionRefs: [[[1], [2, 8], [1]], [[2], [2, 3], [2]], [[1, 3], [7, 6, 3], [4]], [[4], [4], [4]], [[5], [5], [5]]],
    helpRefs: [[1], [7], [5], [4], [4], [5]],
    stats: {
      3: [
        { value: "Under 4mmol/l", label: "is a hypo, a low blood sugar level that needs treating quickly, says Pancreatic Cancer UK.", ref: 4 },
        { value: "10 to 15 minutes", label: "is how long to wait before checking your blood sugar again after treating a hypo, says Pancreatic Cancer UK.", ref: 4, picture: "hours" },
      ],
    },
  },
  "eating": {
    sectionRefs: [[[1, 2], [1]], [[7], [3], [3]], [[2], [2], [2]], [[3], [4], [8]], [[5], [6]]],
    helpRefs: [[1], [2], [3], [2], [5], [6]],
    stats: {
      2: [{ value: "3 meals and 3 snacks", label: "a day, all small, may be easier if you can't manage large portions, says Pancreatic Cancer UK.", ref: 2 }],
      3: [{ value: "About 8 cups", label: "of fluids a day is what to try to drink, if you can, says Pancreatic Cancer UK.", ref: 3 }],
    },
  },
  "pain": {
    sectionRefs: [[[2], [2], [1, 2]], [[3], [3]], [[4], [4], [5]], [[7], [9]], [[6], [8, 6], [2]]],
    helpRefs: [[1], [4], [4], [8], [8], [5]],
    stats: {
      2: [{ value: "0 to 10", label: "is the scale for recording how bad your pain is, along with where it is and what helps, says Pancreatic Cancer UK.", ref: 4 }],
    },
  },
  "fatigue": {
    sectionRefs: [[[1], [2]], [[3], [3, 6], [3]], [[4], [4], [3]], [[4, 7], [4]], [[4], [4], [5]]],
    helpRefs: [[3], [4], [4], [4], [4], [4]],
    stats: {
      2: [{ value: "About 30 minutes", label: "is the longest to nap, as sleeping too long can make it harder to sleep at night, says Pancreatic Cancer UK.", ref: 3, picture: "hours" }],
    },
    charts: {
      3: { kind: "bars", title: "Building in gentle activity", subtitle: "Minutes of gentle activity a day, as Pancreatic Cancer UK suggests for most people with fatigue", bars: [{ label: "One session", value: 10 }, { label: "Three sessions in a day", value: 30, strong: true }], max: 30, ticks: [0, 10, 20, 30], unit: " minutes", sources: "Source: Pancreatic Cancer UK, What can help with pancreatic cancer fatigue?" },
    },
  },
  "mood": {
    sectionRefs: [[[1], [1]], [[1, 2], [2], [2, 4]], [[2], [5], [3, 2]], [[3], [3], [1, 4]], [[4, 8], [6, 7], [6]]],
    helpRefs: [[2], [4], [5, 2], [3], [8], [6]],
    stats: {
      1: [{ value: "More than 2 weeks", label: "of low feelings is the time to talk to your doctor or nurse, says Macmillan.", ref: 4, picture: "calendar" }],
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 8 }],
    },
  },
  "family": {
    sectionRefs: [[[1, 3], [3], [3, 9]], [[4], [4]], [[5], [5]], [[6], [2, 4], [4]], [[2], [7, 4], [2, 8]]],
    helpRefs: [[3], [4], [6], [2], [7], [2]],
    stats: {
      4: [
        { value: "Over 18", label: "and caring for someone? You can ask your council for a free carer's assessment, says the NHS.", ref: 7 },
        { value: "At least an hour", label: "is how long a carer's assessment usually lasts, says the NHS.", ref: 7, picture: "hours" },
      ],
    },
  },
  "planning": {
    sectionRefs: [[[1], [1, 5]], [[1], [4]], [[2], [3], [6]], [[3, 7], [3], [8]], [[3], [9, 11], [2, 10]]],
    helpRefs: [[1], [1], [3], [3], [3], [9]],
    stats: {
      3: [{ value: "8 to 10 weeks", label: "is how long registering a lasting power of attorney takes if there are no mistakes, says the government.", ref: 8, picture: "calendar" }],
      4: [{ value: "0800 090 2309", label: "is the free Marie Curie Support Line, for information and emotional support.", ref: 9 }],
    },
  },
};
