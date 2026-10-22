import type { NewsExtras } from "../ischaemic-news";
// Alcohol-related liver disease features: paragraph references (numbers are positions in each answer's own sources in arld-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[2], [1, 3]], [[1], [2]], [[1], [2]]],
    helpRefs: [[1], [1], [2], [1], [2]],
    stats: {
      3: [{ value: "Up to 1 in 5", label: "people in the UK drink alcohol in a way that could harm their liver, says Liver UK.", ref: 2, picture: "one-in", of: 5 }],
    },
    charts: {
      3: { kind: "donut", title: "The most common cause", subtitle: "Cases of liver disease in the UK, out of every 100", value: 60, subject: "cases of liver disease in the UK", label: "are caused by drinking alcohol (6 in 10)", sources: "Source: Liver UK, Alcohol-related liver disease" },
    },
  },
  "stages": {
    sectionRefs: [[[1], [1]], [[1, 2], [1, 2]], [[1], [2]], [[1], [2, 3], [3]], [[4], [3, 2]]],
    helpRefs: [[1], [1], [2], [2], [4]],
    stats: {
      1: [{ value: "Over 4 units", label: "of alcohol a day will lead to some build-up of fat in the liver, says Liver UK.", ref: 2 }],
      2: [{ value: "About a third", label: "of heavy drinkers with alcohol-related fatty liver start to develop alcohol-related hepatitis, says Liver UK.", ref: 2 }],
      3: [{ value: "Up to 1 in 5", label: "heavy drinkers will develop cirrhosis, says Liver UK.", ref: 2, picture: "one-in", of: 5 }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1, 2], [3, 2]], [[1, 2], [2, 3]], [[1], [1, 2], [2]], [[1], [1]]],
    helpRefs: [[3], [2], [1], [1], [3]],
    stats: {
      2: [{ value: "Around 500", label: "different jobs are done by the liver, and in later stages it struggles to do them all, says Liver UK.", ref: 3 }],
    },
  },
  "tests": {
    sectionRefs: [[[1, 7], [2]], [[1, 2], [4]], [[2], [2, 5]], [[2, 3, 6], [2]], [[2], [2]]],
    helpRefs: [[2], [4], [5], [2], [5]],
    stats: {
      2: [{ value: "5 to 15 minutes", label: "is how long a FibroScan should take in total, says Liver UK.", ref: 5 }],
      4: [{ value: "Every 2 years", label: "a fibrosis test is done after a low-risk score, says Liver UK.", ref: 2, picture: "calendar" }],
    },
    charts: {
      3: { kind: "bars", title: "When to ask for a liver scan", subtitle: "Units of alcohol a week over which Liver UK says to ask your doctor for a liver scan", bars: [{ label: "Women, drinking over", value: 35 }, { label: "Men, drinking over", value: 50 }], max: 60, ticks: [0, 20, 40, 60], unit: " units", sources: "Source: Liver UK, Alcohol-related liver disease; NHS, Cirrhosis" },
    },
  },
  "stopping": {
    sectionRefs: [[[1], [2], [2, 6]], [[3], [8]], [[4], [5]], [[7], [3], [4, 7]], [[3], [8]]],
    helpRefs: [[1], [8], [5], [7], [3], [2]],
    stats: {
      0: [{ value: "6 to 12 hours", label: "after the last drink is when withdrawal symptoms begin, says the NHS. They usually last 3 to 7 days.", ref: 2, picture: "hours" }],
    },
  },
  "support": {
    sectionRefs: [[[3], [3]], [[2, 3], [3, 2]], [[1], [7], [6]], [[2], [2]], [[4], [5, 2]]],
    helpRefs: [[2], [2], [2], [2], [4]],
    stats: {
      4: [{ value: "Over 3,000", label: "people a year are supported by Liver UK's nurse-led helpline, says Liver UK.", ref: 4 }],
    },
  },
  "medicines": {
    sectionRefs: [[[2], [2]], [[1, 2], [1, 2], [1, 2]], [[3], [3]], [[4], [4], [4, 5]], [[5], [2]]],
    helpRefs: [[1, 2], [2], [2], [3], [5], [4]],
    stats: {
      1: [
        { value: "Up to 6 months", label: "is how long acamprosate or naltrexone can be taken, or longer if it is helping, says NICE.", ref: 2, picture: "calendar" },
        { value: "At least 24 hours", label: "after the last drink is when disulfiram treatment should start, says NICE.", ref: 2, picture: "hours" },
      ],
    },
  },
  "treatment": {
    sectionRefs: [[[1], [2]], [[2], [2], [2]], [[1, 3], [4, 3]], [[2], [2]], [[2], [2, 5], [2]]],
    helpRefs: [[1], [2], [2], [2], [2], [5]],
    stats: {
      3: [{ value: "Every 6 months", label: "monitoring, for the rest of your life, is needed if you have cirrhosis, says Liver UK.", ref: 2, picture: "calendar" }],
      4: [
        { value: "Around 10 days", label: "after surgery is when most people leave hospital after a liver transplant, says Liver UK.", ref: 2 },
        { value: "7", label: "liver transplant units in the UK, says Liver UK.", ref: 2 },
      ],
    },
  },
  "units": {
    sectionRefs: [[[1], [1]], [[1, 2], [1]], [[2], [2, 4]], [[4], [3, 7], [6]], [[6, 1], [5]]],
    helpRefs: [[1], [2], [1], [5], [4]],
    stats: {
      0: [{ value: "About an hour", label: "is how long the average adult takes to process 1 unit of alcohol, says the NHS.", ref: 1, picture: "hours" }],
      2: [{ value: "More than 6 or 8", label: "units in a single session is binge drinking, for women or for men, says the NHS.", ref: 2 }],
    },
    charts: {
      1: { kind: "bars", title: "Units add up", subtitle: "Alcohol units in some common drinks, and the weekly limit", bars: [{ label: "Single small shot of spirits", value: 1 }, { label: "Pint of lower-strength lager", value: 2 }, { label: "Large glass of wine", value: 3 }, { label: "Pint of higher-strength lager", value: 3 }, { label: "Bottle of wine (750ml)", value: 10 }, { label: "Weekly limit, no more than", value: 14, strong: true }], max: 16, ticks: [0, 4, 8, 12, 16], unit: " units", sources: "Source: NHS, Alcohol units" },
    },
  },
  "food": {
    sectionRefs: [[[1], [4]], [[1], [1]], [[1, 2], [2], [2]], [[2], [2]], [[1], [4, 3, 5], [1, 6]]],
    helpRefs: [[1], [2], [2], [2], [4], [1]],
    stats: {
      2: [{ value: "Every 2 to 3 hours", label: "is how often to eat something if you have cirrhosis, instead of three main meals, says Liver UK.", ref: 2, picture: "hours" }],
    },
    charts: {
      2: { kind: "bars", title: "Malnourished with cirrhosis", subtitle: "People with cirrhosis who are malnourished, out of every 10, as Liver UK reports", bars: [{ label: "Compensated cirrhosis, around", value: 2 }, { label: "Decompensated cirrhosis, more than", value: 5, strong: true }], max: 10, ticks: [0, 5, 10], unit: " in 10", sources: "Source: Liver UK, Diet and cirrhosis" },
    },
  },
  "family": {
    sectionRefs: [[[1], [1]], [[1], [1, 4]], [[3], [3], [7]], [[6, 5], [6]], [[2, 3], [4], [2]]],
    helpRefs: [[1], [1], [3], [3], [4], [2]],
    stats: {
      0: [{ value: "9 in 10", label: "cases of liver disease in the UK could be prevented with changes made before people are unwell, says Liver UK.", ref: 1 }],
    },
  },
  "urgent": {
    sectionRefs: [[[1], [1], [5]], [[2], [2, 3]], [[4], [4]], [[1], [6]], [[1], [2]]],
    helpRefs: [[1], [1], [2], [4], [1]],
  },
};
