import type { NewsExtras } from "../ischaemic-news";
// Hepatitis B and C features: paragraph references (numbers are positions in each answer's own sources in hepatitis-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [4, 5, 1]], [[2, 5], [4], [5]], [[5], [2, 4]], [[3, 5], [2, 6, 5]], [[4], [4]]],
    helpRefs: [[2, 3], [4], [5], [2]],
    stats: {
      3: [{ value: "More than 9 in 10", label: "people with hepatitis C can now get rid of the virus by taking tablets, says Liver UK.", ref: 5 }],
    },
    charts: {
      1: { kind: "bars", title: "Who goes on to a long-term infection", subtitle: "People who pick up hepatitis B and get a chronic infection, out of every 100, by when they picked it up", bars: [{ label: "Babies, from their mother at birth", value: 90, strong: true }, { label: "Children under 5, 25 to", value: 30 }, { label: "Adults, less than", value: 5 }], sources: "Source: Liver UK, What is hepatitis B?" },
    },
  },
  "spread": {
    sectionRefs: [[[1, 3, 4], [3]], [[1], [4, 2], [4, 5]], [[1, 6], [2, 6]], [[2, 3], [4], [4]], [[1, 2], [2]]],
    helpRefs: [[1], [1, 2], [2], [2], [2, 6]],
    stats: {
      3: [{ value: "About 1 in 10", label: "people with hepatitis C have no recognised risk factor, says Liver UK.", ref: 4, picture: "one-in", of: 10 }],
      4: [{ value: "At least a week", label: "is how long the hepatitis B virus can live in dried blood, says Liver UK.", ref: 3, picture: "calendar" }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1, 2], [4]], [[1, 2], [1, 6], [2]], [[2, 4], [5, 7], [7]], [[3, 1, 2], [8], [7, 6]]],
    helpRefs: [[3], [5, 4], [6], [7], [8]],
    stats: {
      1: [{ value: "2 or 3 months", label: "is how long acute hepatitis B can take to develop after contact with the virus, says Liver UK.", ref: 6, picture: "calendar" }],
    },
    charts: {
      0: { kind: "donut", title: "Often no symptoms at all", subtitle: "People with acute hepatitis C, out of every 100", value: 80, prefix: "About", subject: "people with acute hepatitis C", label: "have no symptoms (about 8 in 10)", sources: "Source: Liver UK, Hepatitis C" },
      2: { kind: "donut", title: "Why treatment matters", subtitle: "People with untreated hepatitis C, out of every 100", value: 20, prefix: "Around", subject: "people with untreated hepatitis C", label: "develop cirrhosis after about 20 to 30 years", sources: "Source: The Hepatitis C Trust, Symptoms" },
    },
  },
  "testing": {
    sectionRefs: [[[5, 1], [4]], [[2], [4], [6]], [[3, 4], [1, 3]], [[2, 3], [4]], [[1], [4]]],
    helpRefs: [[1, 5], [1, 3], [4], [1], [4], [4]],
    stats: {
      4: [
        { value: "Up to 2 weeks", label: "to get hepatitis C test results back, says the NHS.", ref: 1, picture: "calendar" },
        { value: "6 months", label: "later, a repeat test may be advised after a negative result, says the NHS.", ref: 1, picture: "calendar" },
      ],
    },
  },
  "hep-c-treatment": {
    sectionRefs: [[[1, 2], [2, 3]], [[1, 2], [3, 2], [2]], [[1, 3], [1, 3], [3]], [[1, 3], [2], [1]], [[3], [1]]],
    helpRefs: [[1, 3], [3], [1], [3], [4, 3], [3]],
    stats: {
      3: [{ value: "12 weeks", label: "after treatment ends, a second blood test checks for cure, says The Hepatitis C Trust.", ref: 3, picture: "calendar" }],
    },
    charts: {
      0: { kind: "donut", title: "A cure for almost everyone", subtitle: "People who complete hepatitis C treatment, out of every 100", value: 97, subject: "people who complete treatment", label: "are cured of the virus", sources: "Source: The Hepatitis C Trust, Treatment" },
    },
  },
  "hep-b-treatment": {
    sectionRefs: [[[1, 3], [3]], [[1, 2, 4], [2], [2]], [[2], [2], [2]], [[2]], [[2], [3]]],
    helpRefs: [[1, 2], [2], [2], [1], [3]],
    stats: {
      0: [{ value: "More than 95 in 100", label: "people with acute hepatitis B fight off the virus without any treatment, says Liver UK.", ref: 3 }],
      4: [{ value: "Every 3 months", label: "is how often check-ups usually are in the first year of tablets, then around every 6 months, says Liver UK.", ref: 2, picture: "calendar" }],
    },
  },
  "vaccine": {
    sectionRefs: [[[2, 1], [1, 4]], [[2, 1, 3], [2, 1]], [[2, 1], [1, 2]], [[1], [1]], [[1, 3], [1]]],
    helpRefs: [[1], [1], [1, 2], [2], [3]],
    stats: {
      0: [{ value: "20 to 30 years", label: "is how long protection against long-term infection could last after vaccination, says the NHS.", ref: 1, picture: "calendar" }],
      3: [{ value: "At least 3 doses", label: "of the vaccine give the best protection, usually a month apart, says the NHS.", ref: 1 }],
    },
    charts: {
      0: { kind: "bars", title: "How well it protects", subtitle: "People with good protection from hepatitis B after being vaccinated, out of every 100", bars: [{ label: "Adults", value: 90 }, { label: "Babies, over", value: 98, strong: true }], sources: "Source: NHS, Hepatitis B vaccine" },
    },
  },
  "liver-care": {
    sectionRefs: [[[3, 5], [2]], [[1, 3], [4], [4, 6, 5]], [[4, 3], [4, 3]], [[4], [3], [4]], [[5, 7]]],
    helpRefs: [[3], [3, 4], [3], [4], [3, 4], [5]],
    stats: {
      1: [{ value: "14 units", label: "a week at most is Liver UK's general advice with hepatitis B, with at least 3 alcohol-free days in a row, if your doctor says drinking is safe for you.", ref: 3, picture: "calendar" }],
    },
  },
  "telling-others": {
    sectionRefs: [[[1, 2], [2]], [[1], [2], [2]], [[1, 2], [2, 1], [2]], [[1, 2], [3, 4, 2]]],
    helpRefs: [[1, 2], [1], [2], [2], [3, 4], [2]],
    stats: {
      1: [{ value: "1 in 190,000", label: "instances of heterosexual sex lead to hepatitis C being passed on, research reported by The Hepatitis C Trust suggests.", ref: 5 }],
    },
  },
  "pregnancy": {
    sectionRefs: [[[1, 2], [8]], [[5], [2, 4, 9], [2]], [[2, 3], [2]], [[8, 7, 6], [6, 7], [7]]],
    helpRefs: [[2], [2], [2], [2], [8], [6]],
    stats: {
      0: [{ value: "8 to 12 weeks", label: "is when screening for hepatitis B, HIV and syphilis usually happens in pregnancy, says the NHS.", ref: 1, picture: "calendar" }],
      3: [{ value: "About 5 in 100", label: "babies born to mothers who have hepatitis C get the infection, says The Hepatitis C Trust.", ref: 7, picture: "one-in", of: 20 }],
    },
    charts: {
      1: { kind: "bars", title: "Why the baby's vaccines matter", subtitle: "Chance of a baby infected at birth developing chronic hepatitis B, out of every 100", bars: [{ label: "Without the full course", value: 90 }, { label: "With the full course of vaccinations, around", value: 10, strong: true }], sources: "Source: NHS England, Screening tests for you and your baby: infectious diseases" },
    },
  },
  "stigma": {
    sectionRefs: [[[3, 2], [4], [1]], [[6, 5], [6, 5]], [[7], [8, 9], [6]], [[10]], [[11, 6]]],
    helpRefs: [[6], [7], [8], [9], [6]],
    stats: {
      2: [{ value: "More than 63,000", label: "calls have been made to The Hepatitis C Trust's helpline since it launched in July 2004.", ref: 7 }],
    },
  },
  "checks": {
    sectionRefs: [[[1], [2]], [[2, 3], [3]], [[4], [4]], [[4, 5], [6], [6]]],
    helpRefs: [[1], [3], [4], [4], [6]],
    stats: {
      0: [{ value: "12 weeks", label: "after hepatitis C treatment ends, a blood test checks for cure, says The Hepatitis C Trust.", ref: 1, picture: "calendar" }],
      1: [
        { value: "Every 6 months", label: "most people with cirrhosis or long-term hepatitis B are offered a check-up, says Liver UK.", ref: 3, picture: "calendar" },
        { value: "Around 1 in 20", label: "people with hepatitis-associated cirrhosis go on to develop liver cancer, says The Hepatitis C Trust.", ref: 7, picture: "one-in", of: 20 },
      ],
    },
  },
};
