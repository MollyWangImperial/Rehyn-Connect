import type { NewsExtras } from "../ischaemic-news";
// Cirrhosis features: paragraph references (numbers are positions in each answer's own sources in cirrhosis-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[2, 1], [1, 4]], [[3], [3]], [[1, 3], [1, 3], [1]], [[2, 1, 4], [1, 3]], [[3], [3, 2]]],
    helpRefs: [[2], [5], [5], [3], [2]],
  },
  "causes": {
    sectionRefs: [[[1, 7], [7]], [[2, 3], [2]], [[1, 3], [3, 1], [4]], [[1, 3, 5], [5], [6]], [[1], [3]]],
    helpRefs: [[3], [3], [5], [3], [3]],
    stats: {
      1: [{ value: "9 in 10", label: "cases of liver disease are caused by things like alcohol and being overweight, says Liver UK.", ref: 3 }],
      3: [{ value: "More than 20 years", label: "with hepatitis C before cirrhosis is likely, unless you drink regularly or also have hepatitis B or HIV, says the NHS.", ref: 5, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "Alcohol and the risk of cirrhosis", subtitle: "Units of alcohol a week: the UK guideline for a healthy liver, and the drinking the NHS links with cirrhosis", bars: [{ label: "Healthy liver guideline: no more than", value: 14 }, { label: "Women: more likely to have cirrhosis at over", value: 35, strong: true }, { label: "Men: more likely to have cirrhosis at over", value: 50, strong: true }], max: 60, ticks: [0, 20, 40, 60], unit: " units", sources: "Source: NHS, Cirrhosis; Liver UK, Alcohol and liver disease" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1, 2], [2]], [[1], [1, 3]], [[1], [1], [1, 2, 3]], [[2, 4], [4]], [[1], [1], [2]]],
    helpRefs: [[2], [2], [5], [4], [1]],
  },
  "tests": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[1], [1, 2]], [[1, 3], [4]], [[1], [1], [1]]],
    helpRefs: [[1], [1], [1], [1], [3], [1]],
    charts: {
      4: { kind: "bars", title: "Child-Pugh points, class by class", subtitle: "The points that put cirrhosis into each Child-Pugh class, as Liver UK lists them", bars: [{ label: "Class A, well compensated: 5 to", value: 6 }, { label: "Class B, the liver is struggling: 7 to", value: 9 }, { label: "Class C, decompensated: 10 to", value: 15, strong: true }], max: 15, ticks: [0, 5, 10, 15], unit: " points", sources: "Source: Liver UK, Tests and scoring systems for cirrhosis" },
    },
  },
  "cause": {
    sectionRefs: [[[2], [1], [6]], [[1], [7, 5]], [[1], [1]], [[1, 3], [1, 4]], [[1], [2]]],
    helpRefs: [[1], [5, 7], [1], [3], [7], [2]],
    stats: {
      3: [{ value: "8 to 12 weeks", label: "of antiviral tablets, taken every day, treat hepatitis C, says the NHS.", ref: 3, picture: "calendar" }],
    },
  },
  "complications": {
    sectionRefs: [[[7, 1], [6, 1]], [[1, 4], [4], [4]], [[5], [5, 2]], [[3, 1], [3], [3, 8]], [[2, 7], [1]]],
    helpRefs: [[6], [1], [6, 5], [5, 3], [3], [4, 6]],
    stats: {
      3: [
        { value: "Up to 8 in 10", label: "people with cirrhosis will have some symptoms of HE at some point, says Liver UK.", ref: 3 },
        { value: "2 to 3", label: "poos a day is the aim when taking lactulose for HE, says Liver UK.", ref: 3 },
      ],
    },
  },
  "medicines": {
    sectionRefs: [[[2, 5], [1, 2]], [[7], [8], [3]], [[4], [4]], [[5], [5, 6]], [[2, 10], [9]]],
    helpRefs: [[1], [2], [7], [4], [5, 6], [2]],
  },
  "transplant": {
    sectionRefs: [[[1, 2], [1]], [[3], [3], [4]], [[5], [5], [9]], [[6], [6]], [[7], [7, 10], [8]]],
    helpRefs: [[4], [4], [5], [6], [6], [7]],
    stats: {
      0: [
        { value: "746", label: "adult liver transplants were performed in the UK in 2021 to 2022, says NHS Blood and Transplant.", ref: 2 },
        { value: "7", label: "liver transplant centres in the UK, says NHS Blood and Transplant.", ref: 2 },
      ],
      2: [{ value: "49 or more", label: "is the UKELD score needed to go on the liver transplant waiting list, says Liver UK.", ref: 9 }],
      4: [{ value: "Up to a year", label: "is how long recovery from a liver transplant can take, says Liver UK.", ref: 7, picture: "calendar" }],
    },
  },
  "food": {
    sectionRefs: [[[1], [1, 3]], [[1], [1]], [[1], [1, 4], [1]], [[1, 5], [1], [1]], [[6, 2], [7]]],
    helpRefs: [[1, 2], [1], [1], [1], [1], [6]],
    stats: {
      1: [{ value: "Every 2 to 3 hours", label: "eat something, with a snack before bedtime, says Liver UK.", ref: 1, picture: "hours" }],
    },
    charts: {
      0: { kind: "bars", title: "Malnutrition with cirrhosis", subtitle: "People with cirrhosis who are malnourished, out of every 100", bars: [{ label: "Compensated cirrhosis: around", value: 20 }, { label: "Decompensated cirrhosis: more than", value: 50, strong: true }], sources: "Source: Liver UK, Diet and cirrhosis" },
    },
  },
  "alcohol": {
    sectionRefs: [[[1, 2], [3], [6, 7]], [[5], [4, 3], [3]], [[4], [4, 5], [4, 3]], [[3], [3]], [[3], [3, 4]]],
    helpRefs: [[1, 2], [5], [4], [4], [3], [3]],
    stats: {
      2: [{ value: "1 in 4", label: "of us drink alcohol in a way that could harm our health, says Liver UK.", ref: 4, picture: "one-in", of: 4 }],
    },
  },
  "checks": {
    sectionRefs: [[[2, 1], [2, 1]], [[1], [1], [1]], [[4], [4]], [[3, 2, 5], [3, 7, 6], [3, 6]], [[3], [3]]],
    helpRefs: [[1], [2], [1], [4], [3], [3]],
    stats: {
      0: [
        { value: "Every 6 months", label: "most people with cirrhosis should have a surveillance ultrasound scan for liver cancer, says Liver UK.", ref: 2, picture: "calendar" },
        { value: "Up to 9 in 10", label: "people who have HCC liver cancer also have cirrhosis, says Liver UK.", ref: 1 },
      ],
      1: [{ value: "15 to 30 minutes", label: "is how long the surveillance ultrasound scan takes, says Liver UK.", ref: 1 }],
      2: [{ value: "2 to 3 years", label: "until the next check if an endoscopy finds no varices, says Liver UK.", ref: 4, picture: "calendar" }],
    },
  },
  "urgent": {
    sectionRefs: [[[1], [2], [1]], [[3], [3]], [[4], [4]], [[1], [2, 5]], [[6, 3], [4]]],
    helpRefs: [[1], [1], [1], [3], [1], [4]],
  },
};
