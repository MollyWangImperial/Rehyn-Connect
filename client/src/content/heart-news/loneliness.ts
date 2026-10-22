import type { NewsExtras } from "../ischaemic-news";
// Loneliness features: paragraph references (numbers are positions in each answer's own sources in loneliness-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2], [3]], [[1], [1]], [[2, 4], [4]], [[1], [3, 1]]],
    helpRefs: [[1, 2], [1], [2], [3], [5, 6]],
    charts: {
      2: { kind: "bars", title: "How often adults feel lonely", subtitle: "Adults in Great Britain, 7 January to 1 February 2026, out of every 100", bars: [{ label: "Often, always or some of the time", value: 23, strong: true }, { label: "Occasionally", value: 27 }, { label: "Hardly ever or never", value: 48 }], sources: "Source: Office for National Statistics, Public opinions and social trends, Great Britain: January 2026" },
    },
  },
  "causes": {
    sectionRefs: [[[1], [2]], [[2, 3], [5, 3]], [[1, 2], [3]], [[1], [2, 4]], [[2, 1]]],
    helpRefs: [[1], [1], [1], [1], [6, 7]],
    stats: {
      3: [{ value: "16 to 34", label: "is the age range Every Mind Matters names as one of the most at-risk groups for loneliness.", ref: 2 }],
    },
    charts: {
      3: { kind: "bars", title: "Not only an older person's feeling", subtitle: "Adults in Great Britain who felt lonely often, always or some of the time, by age, January 2026, out of every 100", bars: [{ label: "16 to 29", value: 27 }, { label: "30 to 49", value: 28, strong: true }, { label: "50 to 69", value: 19 }, { label: "70 and over", value: 16 }], sources: "Source: Office for National Statistics, Public opinions and social trends, Great Britain: January 2026" },
    },
  },
  "health": {
    sectionRefs: [[[1], [1]], [[1], [2]], [[3], [2, 3]], [[4], [5, 7]]],
    helpRefs: [[3], [3], [3], [6], [6], [8, 9]],
  },
  "signs": {
    sectionRefs: [[[1], [3]], [[1], [1], [2]], [[4], [1]], [[1], [5]]],
    helpRefs: [[3], [1], [1], [1], [5], [6, 5]],
  },
  "small-steps": {
    sectionRefs: [[[1], [3]], [[2], [2]], [[1, 2], [1, 2]], [[1, 3], [2]], [[4], [1, 2]]],
    helpRefs: [[1], [2], [1], [1], [1], [5, 6]],
  },
  "groups": {
    sectionRefs: [[[2], [3], [1]], [[3, 4], [5], [6]], [[3], [1]], [[2, 7], [1, 7, 3, 8]]],
    helpRefs: [[1], [1], [3], [3], [1], [9, 10]],
    stats: {
      1: [{ value: "75 and over", label: "is the age group Re-engage's free monthly tea parties and activity groups are for, says Re-engage.", ref: 5 }],
    },
  },
  "befriending": {
    sectionRefs: [[[1], [1]], [[2], [2], [4]], [[3], [5]], [[7], [8]]],
    helpRefs: [[1], [2], [3], [6], [7], [9, 10]],
    stats: {
      0: [{ value: "24 hours a day", label: "365 days a year, The Silver Line Helpline is open to people aged 55 and over, says Age UK.", ref: 1, picture: "hours" }],
      1: [{ value: "99 in 100", label: "older people told Age UK they enjoyed their friendship calls, in 2024 to 2025.", ref: 2 }],
    },
  },
  "online": {
    sectionRefs: [[[1], [1]], [[3, 5], [2, 8]], [[1], [1]], [[2, 6], [6, 7]], [[4], [5]]],
    helpRefs: [[1], [1], [1], [7], [4], [9, 10]],
  },
  "after-illness": {
    sectionRefs: [[[2, 1], [3, 10]], [[5], [4]], [[4, 5], [6]], [[2, 8], [7]], [[9, 3]]],
    helpRefs: [[4], [6], [2], [7], [3], [11, 12]],
    stats: {
      2: [{ value: "8 weeks", label: "of weekly calls, around 30 minutes each, with a trained volunteer are offered by the Stroke Association.", ref: 6, picture: "calendar" }],
      3: [{ value: "Around 25 million", label: "people in England live with a long-term condition, says the National Academy for Social Prescribing.", ref: 8 }],
    },
  },
  "social-prescribing": {
    sectionRefs: [[[4], [2]], [[5, 3], [5, 2]], [[4, 5], [4, 5]], [[1, 5], [3, 5]], [[5]]],
    helpRefs: [[1], [5], [5], [5], [6, 7]],
    stats: {
      0: [{ value: "Almost a fifth", label: "of GP appointment time is estimated to be spent on non-medical problems, including loneliness and isolation, says the National Academy for Social Prescribing.", ref: 4 }],
    },
  },
  "helping-others": {
    sectionRefs: [[[1], [3]], [[1], [1]], [[2], [2]], [[1, 5], [1, 4]], [[1], [6]]],
    helpRefs: [[1], [1], [2], [5], [1], [7, 6]],
    stats: {
      3: [{ value: "30 minutes", label: "of your time a week as an Age UK telephone friend could make a huge difference to an older person's life, says Age UK.", ref: 5, picture: "hours" }],
    },
  },
  "low-mood": {
    sectionRefs: [[[5], [2]], [[2], [3]], [[1, 3], [1, 2, 4], [3]], [[2, 3, 7], [6, 7, 8, 9], [7]]],
    helpRefs: [[2], [2], [2, 1], [4], [2], [6, 7]],
    stats: {
      1: [{ value: "2 weeks or more", label: "of low mood could be a sign of depression, says the NHS.", ref: 2, picture: "calendar" }],
      3: [{ value: "24 hours a day", label: "every day, Samaritans (116 123) and the Shout text line (85258) are there, says the NHS.", ref: 7, picture: "hours" }],
    },
  },
};
