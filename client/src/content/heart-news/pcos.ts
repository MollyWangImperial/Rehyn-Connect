import type { NewsExtras } from "../ischaemic-news";
// Polycystic ovary syndrome (PCOS) features: paragraph references (numbers are positions in each answer's own sources in pcos-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [3, 2]], [[2, 1], [3]], [[4], [4, 6], [5]], [[1], [4, 1]]],
    helpRefs: [[1], [2], [1], [1]],
    stats: {
      0: [{ value: "1 in 8", label: "women in the UK have PCOS, now also called PMOS, says Verity.", ref: 3, picture: "one-in", of: 8 }],
    },
    charts: {
      2: { kind: "range", title: "Insulin resistance is common", subtitle: "Women with PCOS who have insulin resistance, out of every 100", from: 65, to: 80, sources: "Source: NICE Clinical Knowledge Summaries, Polycystic ovary syndrome: causes" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [1]], [[1, 2], [3]], [[1, 4], [2, 1]], [[5], [6]], [[1], [5]]],
    helpRefs: [[1], [6], [6], [5]],
    stats: {
      2: [{ value: "Under 18", label: "is when symptoms usually start, at puberty, says the NHS.", ref: 1 }],
    },
    charts: {
      3: { kind: "bars", title: "When periods count as irregular", subtitle: "Gap between periods starting, in days", bars: [{ label: "Irregular if less than", value: 21 }, { label: "Average gap, around", value: 28, strong: true }, { label: "Irregular if more than", value: 35 }], max: 40, ticks: [0, 10, 20, 30, 40], unit: " days", sources: "Source: NHS, Irregular periods" },
    },
  },
  "diagnosis": {
    sectionRefs: [[[1], [1]], [[2, 3], [2], [2]], [[2, 5], [2]], [[4], [4]], [[3], [5]]],
    helpRefs: [[1], [6], [3], [3]],
    stats: {
      1: [{ value: "2 out of 3", label: "features are generally needed for a diagnosis, after other causes are ruled out, says Verity.", ref: 2 }],
      2: [{ value: "20 or more", label: "follicles in at least one ovary is how NICE's clinical summary defines polycystic ovaries on a scan.", ref: 5 }],
    },
  },
  "long-term": {
    sectionRefs: [[[1], [2]], [[3, 2], [3]], [[3], [3, 2]], [[3, 2], [3]], [[1], [3]]],
    helpRefs: [[1], [3], [3], [2], [3], [1]],
    stats: {
      1: [{ value: "3 times", label: "higher rates of impaired glucose tolerance and type 2 diabetes in women with PCOS in Europe, says NICE's clinical summary.", ref: 4, picture: "times" }],
      3: [{ value: "Fewer than 3", label: "periods a year can let the lining of the womb thicken, says the RCOG.", ref: 3 }],
    },
    charts: {
      1: { kind: "range", title: "Diabetes over a lifetime", subtitle: "Women with PCOS who go on to develop diabetes at some point, out of every 100", from: 10, to: 20, sources: "Source: RCOG, Polycystic ovary syndrome (PCOS): what it means for your long-term health" },
    },
  },
  "periods": {
    sectionRefs: [[[1], [2, 3]], [[4, 5], [4]], [[4], [4]], [[4], [5]], [[2], [6]]],
    helpRefs: [[1], [5], [4], [4], [2]],
    stats: {
      1: [{ value: "Every 3 to 4 months", label: "is how often it is important to have a period, to protect the womb lining, says the RCOG.", ref: 4, picture: "calendar" }],
      4: [{ value: "Over 7 days", label: "is when a period has lasted long enough to see a GP about it, says the NHS.", ref: 2 }],
    },
  },
  "hair-skin": {
    sectionRefs: [[[1], [1], [2]], [[1], [1]], [[3], [3]], [[4, 5], [5], [5]], [[6], [7]]],
    helpRefs: [[1], [3], [3], [3], [1], [5]],
    stats: {
      2: [{ value: "Twice a day", label: "is how often to wash skin with acne, using a gentle cleanser, says the NHS.", ref: 3 }],
      3: [{ value: "50 to 100", label: "hairs a day is a normal amount to lose, often without noticing, says the NHS.", ref: 5 }],
    },
  },
  "fertility": {
    sectionRefs: [[[1], [2], [7]], [[3], [4]], [[5, 1], [5]], [[1, 5], [6, 7]], [[3, 8], [5]]],
    helpRefs: [[3], [4], [4], [3], [6], [6]],
    stats: {
      1: [{ value: "After 1 year", label: "of trying without conceiving is a good time to see a GP, says the NHS. Sooner if you know of a fertility problem.", ref: 3, picture: "calendar" }],
    },
    charts: {
      0: { kind: "donut", title: "The most common reason for not ovulating", subtitle: "Women with infertility because they do not ovulate, out of every 100", value: 75, subject: "women with this kind of infertility", label: "have PCOS as the underlying cause", sources: "Source: NICE Clinical Knowledge Summaries, Polycystic ovary syndrome: complications" },
    },
  },
  "weight": {
    sectionRefs: [[[1, 2], [3]], [[2, 3], [4], [3]], [[4], [3]], [[4, 3], [5]], [[3, 6], [6, 1]]],
    helpRefs: [[1], [3], [4], [3], [6], [6]],
    stats: {
      1: [{ value: "As little as 5%", label: "of body weight lost has been shown to reduce insulin resistance and testosterone in women who are overweight, says NICE's clinical summary.", ref: 2 }],
    },
    charts: {
      3: { kind: "bars", title: "Weekly activity for adults", subtitle: "Minutes a week the NHS suggests, by how hard the activity is", bars: [{ label: "Vigorous activity", value: 75 }, { label: "Moderate activity", value: 150, strong: true }], max: 160, ticks: [0, 40, 80, 120, 160], unit: " minutes", sources: "Source: NHS, Physical activity guidelines for adults aged 19 to 64" },
    },
  },
  "checks": {
    sectionRefs: [[[1, 2]], [[1, 3], [3]], [[1], [3]], [[1], [1, 3]]],
    helpRefs: [[1], [1], [1], [1], [2]],
    stats: {
      1: [{ value: "Every 1 to 3 years", label: "you may be offered a diabetes test, depending on your risk factors, says the RCOG.", ref: 1, picture: "calendar" }],
      2: [{ value: "Once a year", label: "at least is how often NICE's clinical summary suggests blood pressure checks for women with PCOS.", ref: 3, picture: "calendar" }],
    },
  },
  "mood": {
    sectionRefs: [[[1, 2], [3]], [[1, 4], [5, 4]], [[1, 6], [2, 7, 8]], [[1, 9], [10]], [[11, 12], [11]]],
    helpRefs: [[1], [6], [8, 7], [1], [11, 12], [11]],
    stats: {
      3: [{ value: "Over 12,000", label: "people with PCOS give and receive peer support in Verity's private online group, says Verity.", ref: 9 }],
      4: [{ value: "116 123", label: "is the free number for Samaritans, open any time, day or night.", ref: 12 }],
    },
  },
  "pregnancy": {
    sectionRefs: [[[1, 8], [1]], [[2], [2], [3, 4]], [[5, 6], [6], [7]], [[7], [7]]],
    helpRefs: [[2], [2], [2], [4], [5], [7]],
    stats: {
      2: [{ value: "24 to 28 weeks", label: "is when women with PCOS are offered a blood test for diabetes in pregnancy, says the RCOG.", ref: 5, picture: "calendar" }],
      3: [{ value: "6 to 13 weeks", label: "after giving birth is when a diabetes blood test is advised, if you had gestational diabetes, says the NHS.", ref: 7, picture: "calendar" }],
    },
  },
  "support": {
    sectionRefs: [[[1], [2]], [[1, 3], [4], [3]], [[1], [5]], [[4]]],
    helpRefs: [[1], [4], [4], [2], [5]],
    stats: {
      1: [{ value: "Over 12,000", label: "people with PCOS are in Verity's private peer support group, says Verity.", ref: 4 }],
    },
  },
};
