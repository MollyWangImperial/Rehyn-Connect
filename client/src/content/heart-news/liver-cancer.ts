import type { NewsExtras } from "../ischaemic-news";
// Liver cancer features: paragraph references (numbers are positions in each answer's own sources in liver-cancer-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [2], [6]], [[3], [4], [4]], [[3, 2], [3]], [[5], [5], [5]], [[2], [7]]],
    helpRefs: [[2, 7], [2, 7], [8], [1], [8]],
    charts: {
      1: { kind: "donut", title: "The most common type", subtitle: "Cancers that start in the liver, out of every 100, as Liver Cancer UK reports", value: 75, prefix: "Around", subject: "cancers that start in the liver", label: "are hepatocellular carcinoma (HCC)", sources: "Source: Liver Cancer UK, What is HCC?" },
    },
  },
  "causes": {
    sectionRefs: [[[1], [1], [2]], [[3, 1], [2], [2]], [[1, 5], [1], [1]], [[1, 2], [1], [1, 4]], [[4], [4, 5]]],
    helpRefs: [[2], [4, 1], [5], [4], [1]],
    stats: {
      0: [{ value: "1 in 4", label: "cases of HCC have no known cause, which doctors call sporadic cancer, says Liver Cancer UK.", ref: 2, picture: "one-in", of: 4 }],
      3: [{ value: "Fewer than 1 in 10", label: "cases of HCC in the UK are diagnosed in people with liver disease caused by drinking, says Liver Cancer UK.", ref: 2 }],
    },
    charts: {
      1: { kind: "donut", title: "Most HCC starts in a scarred liver", subtitle: "Cases of HCC, out of every 100, as Liver Cancer UK reports", value: 90, prefix: "More than", subject: "cases of HCC", label: "are related to cirrhosis", sources: "Source: Liver Cancer UK, Risks and causes of HCC" },
    },
  },
  "treatments": {
    sectionRefs: [[[1], [1], [4]], [[1], [3], [3]], [[1], [1, 2]], [[1], [1], [1]], [[2], [1], [2]]],
    helpRefs: [[2], [1, 4], [3], [2], [1]],
    charts: {
      1: { kind: "bars", title: "When a transplant might be an option", subtitle: "Largest tumour size, in centimetres across, Macmillan gives as an example", bars: [{ label: "A single tumour", value: 5, strong: true }, { label: "Each of up to 3 tumours", value: 3 }], max: 5, ticks: [0, 1, 2, 3, 4, 5], unit: "cm or smaller", sources: "Source: Macmillan, Surgery for liver cancer" },
    },
  },
  "follow-up": {
    sectionRefs: [[[1], [2], [3]], [[2], [3], [1]], [[1], [2, 3]], [[2], [3]], [[2], [2, 3]]],
    helpRefs: [[2], [3], [3], [3], [2]],
    stats: {
      1: [{ value: "Every 3 months", label: "for at least the first year, after about 6 weeks, are the check-ups after a liver resection or ablation, says Liver Cancer UK.", ref: 3, picture: "calendar" }],
      2: [{ value: "First 2 years", label: "is how long some people have scans every 3 months, says Macmillan.", ref: 1, picture: "calendar" }],
    },
  },
  "local-treatments": {
    sectionRefs: [[[1], [1], [1]], [[2], [2], [3, 2]], [[4], [4]], [[1, 2], [2, 3], [1, 3]], [[2], [3]]],
    helpRefs: [[1, 2], [2], [1, 2], [3], [1]],
    stats: {
      0: [{ value: "Up to 3cm", label: "is the largest cancer that thermal ablation is a suitable treatment for, says Cancer Research UK.", ref: 1 }],
      3: [{ value: "3 to 5 days", label: "after treatment is when flu-like symptoms may start, lasting 1 to 2 weeks, says Cancer Research UK.", ref: 1, picture: "calendar" }],
    },
  },
  "medicines": {
    sectionRefs: [[[1, 2], [1]], [[1], [2], [1]], [[2], [2, 1], [1, 4]], [[2], [2], [2, 3]], [[3], [3, 4], [3]]],
    helpRefs: [[3], [3], [3, 2], [1, 4], [3], [3]],
    stats: {
      2: [{ value: "Every 3 weeks", label: "is how often you usually have atezolizumab and bevacizumab, as a drip at a day unit, says Macmillan.", ref: 2, picture: "calendar" }],
      4: [{ value: "24 hours", label: "a day, the hospital's contact numbers are there if you feel unwell or need advice, says Macmillan.", ref: 3, picture: "hours" }],
    },
  },
  "surgery-recovery": {
    sectionRefs: [[[1], [1], [2]], [[1], [1, 2], [2]], [[1], [2]], [[1], [1], [1]], [[1], [2]]],
    helpRefs: [[2], [1, 2], [1], [1], [1], [1]],
    stats: {
      3: [
        { value: "Up to 3 months", label: "after a liver resection, it may take before you start getting back to normal, says Macmillan.", ref: 1, picture: "calendar" },
        { value: "At least 8 weeks", label: "of avoiding heavy lifting, vacuuming and gardening after liver surgery, says Macmillan.", ref: 1, picture: "calendar" },
      ],
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [1], [3]], [[1], [1], [2, 1]], [[1], [1]], [[1], [1, 2], [2]], [[1], [1], [1]]],
    helpRefs: [[1], [1, 2], [1], [1], [2], [1, 3]],
    stats: {
      3: [{ value: "Every 3 or 4 months", label: "a bile duct stent may need replacing, as stents can become blocked, says Liver Cancer UK.", ref: 2, picture: "calendar" }],
    },
  },
  "liver-health": {
    sectionRefs: [[[1], [1]], [[1], [1], [2]], [[3], [6], [4]], [[5], [5, 3], [5]], [[3], [7]]],
    helpRefs: [[1], [2], [3], [4], [5], [3, 7]],
    stats: {
      3: [{ value: "Every autumn", label: "is when people with long-term liver disease need a flu vaccine, says Liver UK.", ref: 5, picture: "calendar" }],
    },
  },
  "eating": {
    sectionRefs: [[[1], [1, 3], [1]], [[1, 2], [1], [1]], [[1], [1], [1]], [[1], [1], [4]], [[3, 1], [1]]],
    helpRefs: [[1], [1], [1], [1, 3], [1], [3]],
    stats: {
      1: [{ value: "Every couple of hours", label: "is how often to have something to eat if you feel full or sick, says Liver Cancer UK.", ref: 1, picture: "hours" }],
      2: [{ value: "3 or 4 tablespoons", label: "of milk powder added to whole milk fortifies it with extra energy, says Liver Cancer UK.", ref: 1 }],
    },
  },
  "fatigue": {
    sectionRefs: [[[1], [2], [2]], [[5], [8], [7]], [[1], [1], [3]], [[3], [6, 4]], [[3], [3]]],
    helpRefs: [[1, 3], [1], [3], [6], [3], [7]],
    charts: {
      0: { kind: "donut", title: "Very common", subtitle: "People with cancer, out of every 100, as research cited by Cancer Research UK suggests", value: 65, prefix: "Almost", subject: "people with cancer", label: "are affected by cancer related fatigue", sources: "Source: Cancer Research UK, What is cancer fatigue?" },
    },
    stats: {
      4: [{ value: "0 to 10", label: "is the scale your specialist nurse may ask you to score your fatigue on, where 10 is the worst possible fatigue, says Macmillan.", ref: 3 }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [2], [4]], [[2], [3]], [[3, 1], [2], [5, 2]], [[3, 8], [6, 7], [6]], [[9, 1], [11, 12], [10]]],
    helpRefs: [[3, 1], [3], [5, 2], [2], [8], [6]],
    stats: {
      1: [
        { value: "As many as 1 in 3", label: "people with a cancer of the digestive system have depression at some point, says Liver Cancer UK.", ref: 2, picture: "one-in", of: 3 },
        { value: "More than 2 weeks", label: "of low feelings is the time to talk to your doctor or nurse, says Macmillan.", ref: 3, picture: "calendar" },
      ],
      3: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 8 }],
    },
  },
};
