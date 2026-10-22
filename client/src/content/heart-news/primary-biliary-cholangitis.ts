import type { NewsExtras } from "../ischaemic-news";
// Primary biliary cholangitis features: paragraph references (numbers are positions in each answer's own sources in pbc-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[1, 3], [3, 5], [3, 6]], [[2], [2, 5]], [[4, 5], [5]], [[3], [5]]],
    helpRefs: [[6], [6], [7], [7], [6]],
    stats: {
      2: [
        { value: "Around 25,000", label: "people in the UK have PBC, doctors estimate, says Liver UK.", ref: 2 },
        { value: "Up to 10 times", label: "more common in women than in men, says Liver UK.", ref: 2, picture: "times" },
      ],
    },
    charts: {
      2: { kind: "range", title: "When PBC is usually found", subtitle: "The common age of diagnosis, says the PBC Foundation", from: 35, to: 55, unit: "years of age", sources: "Source: PBC Foundation, About PBC" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [2, 3]], [[1], [4]], [[1, 2], [2]], [[1, 2], [5, 1]], [[1], [3]]],
    helpRefs: [[4], [7], [8], [6], [5]],
    stats: {
      0: [{ value: "Around 60%", label: "of people with PBC have no symptoms when they are diagnosed, says the PBC Foundation.", ref: 3 }],
      3: [{ value: "Around 1 in 3", label: "people with PBC develop Sjogren's syndrome, which commonly causes dry eyes and a dry mouth, says Liver UK.", ref: 5, picture: "one-in", of: 3 }],
    },
    charts: {
      2: { kind: "donut", title: "Itching is common", subtitle: "People with PBC, out of every 100", value: 80, prefix: "As many as", subject: "people with PBC", label: "are troubled by itching at some point (4 out of 5)", sources: "Source: Liver UK, Symptoms of primary biliary cholangitis" },
    },
  },
  "tests": {
    sectionRefs: [[[1, 2], [2]], [[2], [2]], [[2], [1, 3]], [[1, 2], [3]], [[1], [3]]],
    helpRefs: [[2], [3], [3], [4], [5]],
    stats: {
      3: [
        { value: "At least every 3 years", label: "is how often your doctor is likely to suggest a FibroScan, says Liver UK.", ref: 3, picture: "calendar" },
        { value: "3 hours", label: "without eating before a FibroScan, says Liver UK.", ref: 3, picture: "hours" },
      ],
    },
  },
  "outlook": {
    sectionRefs: [[[1], [2, 1]], [[3, 4], [2]], [[5], [4]], [[6], [2, 9]], [[7], [7]]],
    helpRefs: [[5, 10], [5], [8, 2], [7], [7]],
    stats: {
      1: [
        { value: "25 years", label: "was the commonest time from early stage PBC to cirrhosis in one patient study, says Liver UK.", ref: 2 },
        { value: "Around 1 in 6", label: "people diagnosed with early stage PBC had advanced disease 10 years later, in the same study, says Liver UK.", ref: 2, picture: "one-in", of: 6 },
      ],
      2: [{ value: "After a year", label: "you'll be assessed to see if you've responded to ursodeoxycholic acid, says the NHS.", ref: 5, picture: "calendar" }],
    },
  },
  "udca": {
    sectionRefs: [[[1, 2, 3], [1]], [[2], [2]], [[2, 1], [2]], [[1, 2], [2]], [[1, 2], [1]]],
    helpRefs: [[2], [2], [1], [2], [1]],
    stats: {
      4: [{ value: "At least 1 hour", label: "before colestyramine, or 4 to 6 hours afterwards, is when to take UDCA, says the NHS.", ref: 1, picture: "hours" }],
    },
    charts: {
      3: { kind: "donut", title: "How often Urso works", subtitle: "People taking Urso, out of every 100", value: 60, prefix: "Around", subject: "people", label: "find that Urso controls their PBC (6 out of every 10)", sources: "Source: Liver UK, Treating primary biliary cholangitis" },
    },
  },
  "second-line": {
    sectionRefs: [[[1, 3], [2, 4]], [[1], [2, 1, 5], [6, 2]], [[1, 2, 7, 8], [2, 1]], [[1, 9], [9, 1]], [[2], [10]]],
    helpRefs: [[1], [1], [2], [2], [2], [10]],
    stats: {
      1: [{ value: "12 months", label: "after starting obeticholic acid, NICE says to assess the response, and only continue if there is evidence of benefit.", ref: 5, picture: "calendar" }],
      3: [{ value: "June 2026", label: "is when NICE said seladelpar can be used, with UDCA or alone, says NICE.", ref: 9 }],
    },
    charts: {
      0: { kind: "range", title: "Not everyone responds to Urso", subtitle: "People who do not respond effectively to Urso, out of every 100, says the PBC Foundation", from: 20, to: 30, sources: "Source: PBC Foundation, About PBC" },
    },
  },
  "itching": {
    sectionRefs: [[[1, 7], [1]], [[2, 3], [2, 3], [2]], [[2], [3, 1]], [[4], [5, 6]], [[2, 3], [3]]],
    helpRefs: [[1], [3], [2], [2], [3], [3]],
    stats: {
      0: [{ value: "4 out of 5", label: "people with PBC suffer from itching at some point, says Liver UK.", ref: 1 }],
      1: [{ value: "At least 4 hours", label: "before or after any other medicines is when to take colestyramine, says Liver UK.", ref: 3, picture: "hours" }],
      3: [{ value: "Twice a day", label: "is how linerixibat is taken, as one tablet, says the MHRA.", ref: 4 }],
    },
  },
  "fatigue": {
    sectionRefs: [[[1], [2]], [[2, 3], [4, 1]], [[2, 3], [1, 3]], [[3], [3, 6]], [[1, 5], [1]]],
    helpRefs: [[3, 1], [3], [1, 6], [3], [2, 1, 7], [1]],
    stats: {
      0: [{ value: "1 in 5", label: "people with PBC have fatigue severely, says Liver UK.", ref: 1, picture: "one-in", of: 5 }],
      3: [{ value: "2 hours", label: "before bed is the cut-off for daily exercise, says Liver UK.", ref: 3, picture: "hours" }],
    },
    charts: {
      0: { kind: "donut", title: "A common symptom", subtitle: "People with PBC, out of every 100", value: 50, prefix: "More than", subject: "people with PBC", label: "have fatigue (more than half)", sources: "Source: Liver UK, Living with primary biliary cholangitis" },
    },
  },
  "bones": {
    sectionRefs: [[[1, 2, 6], [2, 3]], [[1, 4], [4, 5]], [[4, 1], [2, 1]], [[2], [4]], [[4, 5], [5]]],
    helpRefs: [[4], [4], [5], [5, 4], [5, 3], [5]],
    stats: {
      1: [{ value: "10 to 20 minutes", label: "is how long a DEXA scan usually takes, says Liver UK.", ref: 4 }],
      2: [{ value: "Every 1 to 5 years", label: "you will have DEXA scans, depending on your result, says Liver UK.", ref: 1, picture: "calendar" }],
    },
    charts: {
      0: { kind: "donut", title: "Bone thinning in PBC", subtitle: "People with PBC, out of every 100", value: 50, prefix: "As many as", subject: "people with PBC", label: "have some degree of bone thinning (1 in 2)", sources: "Source: Liver UK, Ongoing tests for primary biliary cholangitis" },
    },
  },
  "checks": {
    sectionRefs: [[[1, 2], [1]], [[3, 9], [1]], [[1], [4, 5], [1, 4]], [[1, 8], [1]], [[6], [7, 5]]],
    helpRefs: [[1], [9], [6], [5], [6], [8]],
    stats: {
      1: [{ value: "At least every 3 years", label: "a FibroScan to measure scarring in the liver, says Liver UK.", ref: 1, picture: "calendar" }],
      3: [{ value: "Every 6 months", label: "an abdominal ultrasound may be offered if you have cirrhosis, says Liver UK.", ref: 1, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "Conditions that can come with PBC", subtitle: "People with PBC who have or develop each condition, out of every 100, as Liver UK gives them", bars: [{ label: "Autoimmune thyroid disease (around)", value: 25, strong: true }, { label: "Raynaud's (around)", value: 25 }, { label: "Coeliac disease (up to)", value: 12 }, { label: "Scleroderma (about)", value: 8 }], sources: "Source: Liver UK, Complications and conditions related to PBC" },
    },
  },
  "work": {
    sectionRefs: [[[1, 2], [2]], [[1, 3], [2]], [[3, 2], [2]], [[4], [4]], [[2], [3]]],
    helpRefs: [[2], [1, 3], [2], [4], [2], [3]],
    stats: {
      1: [{ value: "2010", label: "is the year of the Equality Act, which covers PBC as a long-term condition, says Liver UK.", ref: 1 }],
      4: [
        { value: "More than 7 days", label: "off sick in a row means you need a fit note, says Liver UK.", ref: 2, picture: "calendar" },
        { value: "Up to 28 weeks", label: "of Statutory Sick Pay for employees, says Liver UK.", ref: 2 },
      ],
    },
  },
  "support": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[2], [3, 1, 4, 7]], [[5], [5, 1]], [[5], [5, 6]]],
    helpRefs: [[1], [2], [3, 1], [5], [5]],
    stats: {
      2: [
        { value: "0800 652 7330", label: "is Liver UK's free nurse-led helpline, open 9am to 4pm, Monday to Friday.", ref: 2 },
        { value: "Over 3,000", label: "people are supported by Liver UK's helpline each year, says Liver UK.", ref: 2 },
      ],
    },
  },
};
