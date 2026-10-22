import type { NewsExtras } from "../ischaemic-news";
// Drug use features: paragraph references (numbers are positions in each answer's own sources in drug-use-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[1], [1, 3]], [[2, 3], [1]], [[3, 1], [4]], [[1, 5]]],
    helpRefs: [[1], [1], [5], [1], [6, 7]],
  },
  "mental-health": {
    sectionRefs: [[[1], [2]], [[5], [4], [2]], [[2, 3], [3], [2]], [[1, 6], [1], [2]]],
    helpRefs: [[1], [2], [2], [1], [7, 8]],
    stats: {
      2: [{ value: "1 in 13", label: "people aged 16 to 59 in England had used cannabis in the last year, in one study, says Rethink Mental Illness.", ref: 1, picture: "one-in", of: 13 }],
    },
  },
  "prescription": {
    sectionRefs: [[[1, 2], [3, 4, 8], [7]], [[2], [6]], [[2, 4], [5]], [[2], [6]], [[1, 3, 4]]],
    helpRefs: [[2, 4], [1, 3, 4, 8], [2], [6], [9, 10]],
    stats: {
      0: [{ value: "Up to 4 weeks", label: "is how long diazepam should be used, as taking it for longer can cause addiction and withdrawal symptoms, says the NHS.", ref: 3, picture: "calendar" }],
      3: [{ value: "Up to 3 days", label: "at a time is how long to take co-codamol bought from a pharmacy before asking your doctor, says the NHS.", ref: 2, picture: "calendar" }],
    },
  },
  "signs": {
    sectionRefs: [[[1], [1]], [[2], [1]], [[5], [6], [4]], [[1, 3, 6], [3]]],
    helpRefs: [[3], [2], [2], [1], [7, 8]],
  },
  "getting-help": {
    sectionRefs: [[[1], [1, 2, 4]], [[3], [1], [6]], [[1], [1]], [[1, 5], [5]]],
    helpRefs: [[1], [1, 2], [1, 5], [3], [7, 8]],
    stats: {
      3: [
        { value: "24 hours", label: "a day, 7 days a week, you can call FRANK on 0300 123 6600, says FRANK.", ref: 5, picture: "hours" },
        { value: "120 languages", label: "you can talk to FRANK in, with an interpreter on the same number, says FRANK.", ref: 5 },
      ],
    },
  },
  "stopping-safely": {
    sectionRefs: [[[9], [3], [2]], [[1], [1, 7], [8]], [[5, 6]], [[4], [4]], [[1], [1]]],
    helpRefs: [[1, 3, 9], [5, 6], [4], [1], [10, 11]],
    stats: {
      1: [{ value: "Up to 12 weeks", label: "is how long detoxing from heroin while living at home can take, says the NHS.", ref: 1, picture: "calendar" }],
      3: [{ value: "Around 2 weeks", label: "is how long cannabis withdrawal symptoms can last, usually most intense in the first week, says the Royal College of Psychiatrists.", ref: 4, picture: "calendar" }],
      4: [{ value: "At least 6 months", label: "of support from your key worker after a heroin detox, to help you stay off heroin, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "treatments": {
    sectionRefs: [[[2, 3], [2], [5]], [[1], [4, 2]], [[3], [3]], [[1], [1]], [[3]]],
    helpRefs: [[1], [1, 4], [4], [1], [6, 7]],
    stats: {
      1: [{ value: "At least 3 months", label: "is how long a daily dose of methadone or buprenorphine is supervised by a drugs worker or pharmacist at first, says the NHS.", ref: 4, picture: "calendar" }],
    },
  },
  "emergency": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[1], [1, 3, 4]], [[1, 2], [1]], [[1], [1, 5]]],
    helpRefs: [[1], [1], [3, 1], [1], [6, 7]],
    stats: {
      0: [{ value: "999 or 112", label: "both reach the emergency services in the UK, says FRANK.", ref: 1 }],
      2: [{ value: "10 minutes", label: "is as little as naloxone training can take, and kits are free from local services, says Change Grow Live.", ref: 4, picture: "hours" }],
    },
  },
  "relapse": {
    sectionRefs: [[[1], [1]], [[1], [1, 2]], [[1], [1], [3]], [[1]], [[1], [4, 5], [1]]],
    helpRefs: [[1], [1], [1], [1], [4, 5], [6, 7]],
  },
  "family": {
    sectionRefs: [[[1], [1]], [[2], [2], [2]], [[2], [2]], [[1], [1, 4], [5]], [[3, 6]]],
    helpRefs: [[2], [1, 2], [1], [1], [5], [6, 7]],
    stats: {
      3: [{ value: "Over 18", label: "anyone can ask their local council for a free carer's assessment, says the NHS.", ref: 5 }],
    },
  },
  "harm-reduction": {
    sectionRefs: [[[2, 1], [1, 6]], [[4], [4, 8]], [[3], [7]], [[5], [4]], [[3, 10], [6], [9]]],
    helpRefs: [[1, 6], [3], [4, 8], [6], [9], [11, 12]],
    charts: {
      4: { kind: "range", title: "Hepatitis C can be cured", subtitle: "Weeks of daily antiviral tablets used to treat hepatitis C", from: 8, to: 12, unit: "weeks", sources: "Source: NHS, Hepatitis C" },
    },
  },
  "support": {
    sectionRefs: [[[3], [8]], [[6, 3], [7, 3], [2]], [[2, 4], [4], [5]], [[1, 3]]],
    helpRefs: [[1], [6, 3], [7, 3], [4], [10, 11]],
    stats: {
      1: [{ value: "10am to midnight", label: "every day, the Narcotics Anonymous helpline is open on 0300 999 1212, says Change Grow Live.", ref: 3, picture: "hours" }],
      2: [{ value: "60 or 90 minutes", label: "is how long SMART Recovery meetings last, usually once a week, says UK SMART Recovery.", ref: 4, picture: "hours" }],
    },
  },
};
