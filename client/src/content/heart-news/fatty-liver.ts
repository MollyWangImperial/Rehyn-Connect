import type { NewsExtras } from "../ischaemic-news";
// Fatty liver features: paragraph references (numbers are positions in each answer's own sources in fatty-liver-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[2], [2, 6]], [[2, 4], [2]], [[1], [1, 5]]],
    helpRefs: [[1], [1], [1], [1], [1]],
    stats: {
      1: [{ value: "More than 5%", label: "of liver cells containing fat is when it is called MASLD or fatty liver, says Liver UK.", ref: 3 }],
      3: [{ value: "About 1 in 20", label: "adults may have more advanced liver scarring, says Liver UK.", ref: 2, picture: "one-in", of: 20 }],
    },
    charts: {
      3: { kind: "donut", title: "A very common condition", subtitle: "Adults in the UK, out of every 100", value: 25, prefix: "About", subject: "adults in the UK", label: "have MASLD (about 1 in 4)", sources: "Source: Liver UK, What is MASLD?" },
    },
  },
  "tests": {
    sectionRefs: [[[1], [2]], [[3], [2, 3]], [[2, 4], [2, 4]], [[2, 6], [2, 5]], [[2], [2]]],
    helpRefs: [[3], [3], [5], [6], [4, 5]],
    stats: {
      1: [{ value: "1 in 20", label: "test results from healthy people are outside the reference range, says Liver UK.", ref: 3, picture: "one-in", of: 20 }],
      3: [{ value: "5 to 15 minutes", label: "is how long a FibroScan should take in total, says Liver UK.", ref: 5 }],
      4: [{ value: "Every 3 to 5 years", label: "a fibrosis test is needed after a low-risk result, says Liver UK.", ref: 2, picture: "calendar" }],
    },
  },
  "scarring": {
    sectionRefs: [[[5], [5]], [[2], [2]], [[1], [1], [1]], [[2], [3, 4, 6]], [[1], [4]]],
    helpRefs: [[7], [2], [8], [6], [1]],
    stats: {
      3: [{ value: "Every 6 months", label: "a scan to check for signs of liver cancer may be offered if you have cirrhosis, says Liver UK.", ref: 4, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "Who goes on to advanced scarring", subtitle: "People with early-stage MASLD who develop advanced scarring and more serious liver disease, out of every 100", from: 10, to: 30, sources: "Source: Liver UK, What are the stages of MASLD?" },
    },
  },
  "alcohol-or-not": {
    sectionRefs: [[[2], [1]], [[4], [8, 5]], [[1], [1]], [[3], [2]], [[6], [7]]],
    helpRefs: [[8], [6], [6], [2], [2]],
    stats: {
      2: [{ value: "2023", label: "is when an international group of healthcare professionals and patients updated the names, says Liver UK.", ref: 1 }],
      4: [{ value: "14 units", label: "of alcohol a week at most if you have MASLD, spread over 3 or more days, says Liver UK.", ref: 6 }],
    },
  },
  "weight": {
    sectionRefs: [[[1], [1]], [[4], [3], [1]], [[3], [3]], [[3], [3], [1]], [[1, 3], [2, 5], [1]]],
    helpRefs: [[6], [3], [3], [3], [1], [5]],
    stats: {
      1: [{ value: "Up to 1 in 5", label: "people with MASLD have a healthy body weight, says Liver UK.", ref: 4, picture: "one-in", of: 5 }],
      3: [{ value: "1 kg a week", label: "at the most is the steady weight loss to aim for, says Liver UK.", ref: 3 }],
    },
    charts: {
      0: { kind: "range", title: "The weight loss that helps", subtitle: "Losing this share of your body weight can help control MASLD, says research reported by Liver UK", from: 5, to: 10, unit: "per cent of body weight", sources: "Source: Liver UK, How is MASLD treated?" },
      2: { kind: "bars", title: "Waist sizes to act on", subtitle: "Waist measurements in centimetres, by what Liver UK says to do", bars: [{ label: "Women: try to lose weight at", value: 80 }, { label: "Men: try to lose weight at", value: 94 }, { label: "Women: speak to your GP at", value: 88, strong: true }, { label: "Men: speak to your GP at", value: 102, strong: true }], max: 120, ticks: [0, 40, 80, 120], unit: "cm", sources: "Source: Liver UK, Keeping a healthy weight" },
    },
  },
  "food": {
    sectionRefs: [[[2], [2, 1]], [[1], [1], [1]], [[3, 1], [4, 1], [7]], [[6, 4], [4, 6], [4, 7]], [[1], [1, 2]]],
    helpRefs: [[1], [1], [5], [1], [1], [2]],
    stats: {
      1: [
        { value: "At least 5", label: "portions of a variety of vegetables and fruit every day, says Liver UK.", ref: 1 },
        { value: "80g", label: "is one portion of fruit or veg, about a handful, says Liver UK.", ref: 1 },
      ],
      4: [{ value: "6 to 8", label: "cups or glasses of fluid a day, says Liver UK.", ref: 1 }],
    },
  },
  "moving": {
    sectionRefs: [[[1, 5], [1, 2]], [[1, 3], [1, 2], [2, 3]], [[1, 2], [1, 2]], [[1], [2, 3]], [[2, 4, 3], [1, 2]]],
    helpRefs: [[1], [1], [1, 3], [2], [3], [1]],
    stats: {
      2: [{ value: "Twice a week", label: "do activities that strengthen your muscles, says Liver UK.", ref: 1, picture: "calendar" }],
      3: [{ value: "10 minutes", label: "at a time is a way to break down the weekly 150 minutes, says Liver UK.", ref: 1 }],
    },
    charts: {
      1: { kind: "bars", title: "The weekly aim", subtitle: "Minutes of activity a week that give similar health benefits, as the NHS sets out", bars: [{ label: "Moderate activity, at least", value: 150, strong: true }, { label: "Or vigorous activity", value: 75 }], max: 160, ticks: [0, 40, 80, 120, 160], unit: " minutes", sources: "Source: NHS, Physical activity guidelines for adults aged 19 to 64" },
    },
  },
  "other-conditions": {
    sectionRefs: [[[1], [2]], [[1], [1, 5], [1]], [[5], [3]], [[4], [4], [6]], [[4], [7, 1]]],
    helpRefs: [[1], [6], [4], [1], [1]],
    stats: {
      1: [
        { value: "Around two-thirds", label: "of people with type 2 diabetes in the UK also have MASLD, says Liver UK.", ref: 1 },
        { value: "More than twice", label: "as likely to develop type 2 diabetes if you have MASLD, says Liver UK.", ref: 1, picture: "times" },
      ],
    },
  },
  "alcohol": {
    sectionRefs: [[[1], [1]], [[2, 1], [1, 7], [5]], [[1], [4]], [[6], [3], [1]], [[3], [4]]],
    helpRefs: [[1, 2], [1], [1], [1], [3], [4]],
    stats: {
      1: [{ value: "2 to 3", label: "alcohol-free days a week, preferably in a row, says Liver UK.", ref: 1, picture: "calendar" }],
    },
    charts: {
      1: { kind: "bars", title: "Units add up", subtitle: "Alcohol units in some common drinks, and the weekly limit", bars: [{ label: "Single small shot of spirits", value: 1 }, { label: "Large glass of wine", value: 3 }, { label: "Pint of higher-strength lager", value: 3 }, { label: "Bottle of wine (750ml)", value: 10 }, { label: "Weekly limit, no more than", value: 14, strong: true }], max: 16, ticks: [0, 4, 8, 12, 16], unit: " units", sources: "Source: NHS, Alcohol units" },
    },
  },
  "medicines": {
    sectionRefs: [[[4], [1]], [[2, 10], [2]], [[5], [5], [6]], [[1], [4, 3], [4]], [[7, 8], [9]]],
    helpRefs: [[1, 3], [2], [1], [5], [7], [9]],
    stats: {
      1: [{ value: "About 2%", label: "of MASLD cases are linked to prescribed medicines, says Liver UK.", ref: 2 }],
    },
  },
  "checks": {
    sectionRefs: [[[2, 3], [8]], [[1], [2], [5]], [[2], [2]], [[2, 4], [4]], [[3, 7], [6], [5]]],
    helpRefs: [[5], [6], [4], [5], [3]],
    stats: {
      1: [{ value: "At least once a year", label: "is how often to have a check-up, says the NHS, with tests every 2 to 3 years.", ref: 1, picture: "calendar" }],
      3: [{ value: "Every 6 months", label: "a scan for signs of liver cancer may be offered if you have cirrhosis, says Liver UK.", ref: 2, picture: "calendar" }],
    },
  },
};
