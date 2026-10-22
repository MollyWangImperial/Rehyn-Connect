import type { NewsExtras } from "../ischaemic-news";
// Lung cancer features: paragraph references (numbers are positions in each answer's own sources in lung-cancer-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-you-had": {
    sectionRefs: [[[1], [1], [9]], [[4], [4]], [[1], [1], [1, 3]], [[5], [6], [5, 7]], [[6], [7], [8]]],
    helpRefs: [[8], [6, 7], [7], [6], [2]],
    stats: {
      3: [{ value: "Up to 2 years", label: "is how long you might have immunotherapy drugs, depending on why you are having them and how they affect you, says Macmillan.", ref: 7, picture: "calendar" }],
    },
  },
  "types": {
    sectionRefs: [[[1], [1], [1]], [[2], [2], [2]], [[3], [4, 3], [4, 6]], [[4, 5], [4], [4]], [[4], [7]]],
    helpRefs: [[7], [4], [2], [4]],
    charts: {
      0: { kind: "range", title: "The most common type", subtitle: "Lung cancers, out of every 100, that are non-small cell lung cancer, as Cancer Research UK reports", from: 80, to: 85, sources: "Source: Cancer Research UK, Types of lung cancer" },
    },
    stats: {
      3: [{ value: "4cm", label: "is the largest a stage 1 lung cancer can be, with no spread outside the lung or to any lymph nodes, says Macmillan.", ref: 4 }],
    },
  },
  "follow-up": {
    sectionRefs: [[[1], [3]], [[1, 4], [2], [5]], [[1], [1]], [[1], [7, 6]], [[1], [3]]],
    helpRefs: [[1], [6], [3], [3], [3], [3]],
    stats: {
      1: [
        { value: "4 to 6 weeks", label: "after treatment such as surgery, radiotherapy or chemotherapy is when you are likely to see your doctor, says Cancer Research UK.", ref: 1, picture: "calendar" },
        { value: "5 years", label: "is the minimum time you will have follow-up appointments, says the Roy Castle Lung Cancer Foundation.", ref: 5, picture: "calendar" },
      ],
    },
  },
  "recurrence": {
    sectionRefs: [[[1], [1], [1]], [[2], [2], [2]], [[1], [1, 3], [1]], [[3], [3]], [[1], [1], [1, 2]]],
    helpRefs: [[1], [1], [1], [1], [1], [4, 2]],
    stats: {
      3: [{ value: "999", label: "is the number to call if you are struggling to breathe or have pain in your chest or upper back, says the NHS.", ref: 3 }],
      4: [{ value: "0800 358 7200", label: "is the Roy Castle Lung Cancer Foundation's free Ask the Nurse helpline.", ref: 4 }],
    },
  },
  "breathlessness": {
    sectionRefs: [[[1, 3], [5, 1], [1]], [[1], [1], [1]], [[1, 2], [1], [1]], [[1], [2], [2]], [[2], [6, 2]]],
    helpRefs: [[1], [1, 2], [1], [4, 2], [1, 3], [2]],
    stats: {
      1: [{ value: "10 minutes", label: "at a time, at least twice a day, is how long to practise relaxed tummy breathing, says Cancer Research UK.", ref: 1, picture: "hours" }],
    },
  },
  "fatigue": {
    sectionRefs: [[[1, 3], [2]], [[3], [5, 6], [4]], [[2], [6]], [[1, 4], [2], [3]], [[2, 3], [2]]],
    helpRefs: [[1, 4], [2], [2], [3], [6], [2]],
    stats: {
      4: [{ value: "0 to 10", label: "is the scale your specialist nurse may ask you to score your fatigue on, where 10 is the worst possible fatigue, says Macmillan.", ref: 2 }],
    },
  },
  "chest": {
    sectionRefs: [[[1], [2], [1]], [[3], [3]], [[2], [4], [4]], [[2], [2, 1], [2]], [[3], [3]]],
    helpRefs: [[1], [1], [2], [4], [3], [3]],
    stats: {
      1: [{ value: "A couple of years", label: "is how long nerve pain along the scar takes to gradually reduce for most people, says Cancer Research UK.", ref: 3, picture: "calendar" }],
      3: [{ value: "7 to 10 days", label: "after your operation is when stitches, clips or staples are usually removed, says Macmillan.", ref: 2, picture: "calendar" }],
    },
    charts: {
      3: { kind: "range", title: "The scar after open surgery", subtitle: "Length of the scar around the side of the chest after a thoracotomy, in centimetres", from: 10, to: 20, unit: "centimetres long", sources: "Source: Macmillan, Surgery for lung cancer" },
    },
  },
  "activity": {
    sectionRefs: [[[1], [1]], [[2], [4], [5]], [[2], [2], [1]], [[1], [1]], [[3], [3], [3]]],
    helpRefs: [[2], [4, 5], [4], [1], [1], [3]],
    stats: {
      1: [{ value: "Within 12 hours", label: "of your operation, you might be sitting in a chair, says Cancer Research UK.", ref: 5, picture: "hours" }],
    },
    charts: {
      2: { kind: "bars", title: "Building up to the weekly guideline", subtitle: "Minutes of moderate activity, built up the way Macmillan suggests", bars: [{ label: "One short session", value: 10 }, { label: "A day: three short sessions", value: 30 }, { label: "A week: five such days", value: 150, strong: true }], max: 150, ticks: [0, 50, 100, 150], unit: " minutes", sources: "Source: Macmillan, Physical activity and cancer" },
    },
  },
  "smoking": {
    sectionRefs: [[[1], [3, 7]], [[1], [5], [1, 6]], [[3], [3]], [[1], [4], [4]], [[4], [1, 4]]],
    helpRefs: [[1], [4, 1], [1, 4], [4], [4], [2]],
    charts: {
      0: { kind: "donut", title: "Smoking and lung cancer", subtitle: "Lung cancer cases in the UK, out of every 100, as Cancer Research UK reports", value: 60, prefix: "More than", subject: "lung cancer cases in the UK", label: "are caused by smoking", sources: "Source: Cancer Research UK, What is lung cancer?" },
    },
    stats: {
      2: [{ value: "8 hours", label: "after you stop, the carbon monoxide level in your blood has reduced by half, says the NHS.", ref: 3, picture: "hours" }],
      3: [{ value: "4 times", label: "more likely to quit: the difference specialist support and stop smoking aids can make, says Macmillan.", ref: 1, picture: "times" }],
    },
  },
  "eating": {
    sectionRefs: [[[1], [2], [6]], [[1], [1], [3]], [[1], [1], [1, 3]], [[5], [7], [1]], [[2], [3, 1]]],
    helpRefs: [[1], [1], [1], [1], [5], [3, 4]],
    stats: {
      3: [{ value: "About 8 glasses", label: "of water a day is what Cancer Research UK suggests drinking while having radiotherapy.", ref: 7 }],
    },
  },
  "work": {
    sectionRefs: [[[1, 2], [2], [5, 3]], [[3], [3], [4]], [[6], [6]], [[7, 12], [8, 9], [8, 9, 10]], [[10, 11], [13]]],
    helpRefs: [[3], [4], [4], [6], [11], [10]],
    stats: {
      0: [{ value: "From diagnosis", label: "you meet the definition of disability under the Equality Act 2010 if you have cancer, says the government.", ref: 1, picture: "calendar" }],
      3: [{ value: "Up to 28 weeks", label: "is how long your employer pays Statutory Sick Pay if you're too ill to work, says the government.", ref: 7, picture: "calendar" }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [2], [2]], [[3], [3], [5]], [[2], [9], [10, 4]], [[3], [6], [3, 11]], [[7], [7], [8, 7]]],
    helpRefs: [[3], [2], [9, 3], [6], [7], [7, 8]],
    stats: {
      1: [{ value: "More than 2 weeks", label: "of low feelings is the time to talk to your doctor or nurse, says Macmillan.", ref: 3, picture: "calendar" }],
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 8 }],
    },
  },
};
