import type { NewsExtras } from "../ischaemic-news";
// ADHD in adults features: paragraph references (numbers are positions in each answer's own sources in adhd-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2], [2]], [[2], [1], [2]], [[1], [2, 1]], [[2], [2]], [[2], [3, 1]]],
    helpRefs: [[1], [2], [2], [1], [4, 5]],
    charts: {
      0: { kind: "range", title: "Common in adults", subtitle: "Adults with ADHD, out of every 100, says the Royal College of Psychiatrists", from: 3, to: 4, sources: "Source: Royal College of Psychiatrists, ADHD in adults" },
    },
    stats: {
      2: [{ value: "37 weeks", label: "of pregnancy: being born before this, premature, is one of the things linked to ADHD, says the NHS.", ref: 1, picture: "calendar" }],
      3: [{ value: "Before 12", label: "is the age by which the symptoms of ADHD usually start, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "adults": {
    sectionRefs: [[[3, 2], [3], [3]], [[2], [2], [2]], [[2], [2]], [[1], [2, 4]], [[2], [1]]],
    helpRefs: [[1], [3], [2], [2], [5, 6]],
    charts: {
      0: { kind: "donut", title: "It often carries on", subtitle: "Children with ADHD, out of every 100, who keep some impairments in adulthood", value: 65, prefix: "Around", subject: "children with ADHD", label: "keep some impairments in adulthood", sources: "Source: ADHD UK, About ADHD" },
    },
    stats: {
      1: [{ value: "At least two", label: "areas of daily life, such as home, work or relationships, need to be significantly affected for a diagnosis, says the Royal College of Psychiatrists.", ref: 2 }],
    },
  },
  "assessment": {
    sectionRefs: [[[1], [2], [3]], [[1], [1], [2, 4]], [[1, 3], [5, 1], [5]], [[2, 6], [3]], [[1, 3], [2]]],
    helpRefs: [[6], [2], [1, 5], [6, 3], [2], [7, 8]],
    charts: {
      1: { kind: "range", title: "A long conversation", subtitle: "How long an adult ADHD assessment discussion usually lasts, in minutes", from: 45, to: 90, unit: "minutes", sources: "Source: ADHD UK, Diagnosis pathways for adult ADHD" },
    },
    stats: {
      2: [{ value: "Several months or years", label: "is how long you may have to wait to access ADHD specialist services, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "other-conditions": {
    sectionRefs: [[[1], [2]], [[2], [1], [3]], [[1], [2]], [[2], [2, 4]], [[1, 6], [3]]],
    helpRefs: [[2], [1], [2], [1, 6], [5, 6]],
  },
  "medicines": {
    sectionRefs: [[[1, 2], [3]], [[2, 3], [3, 5], [3]], [[5], [4, 1, 2], [4]], [[3], [2]], [[6, 4], [5, 3], [1]]],
    helpRefs: [[6], [6], [5], [5], [3], [7, 8]],
    charts: {
      2: { kind: "range", title: "Quick to work", subtitle: "Once the dose is right, minutes for methylphenidate to start working", from: 30, to: 60, unit: "minutes", sources: "Source: NHS, About methylphenidate for adults" },
    },
    stats: {
      2: [
        { value: "6 weeks", label: "is the trial at an adequate dose after which NICE suggests switching between the two first-choice medicines may be considered.", ref: 2, picture: "calendar" },
        { value: "28 days", label: "is how long you have to collect a methylphenidate prescription, as it is a controlled drug, says the NHS.", ref: 4, picture: "calendar" },
      ],
    },
  },
  "therapy": {
    sectionRefs: [[[1, 2], [2, 3]], [[2, 4], [4]], [[2], [2]], [[1, 5], [2]], [[1], [3]]],
    helpRefs: [[2], [2], [1], [2], [4], [6, 7]],
    charts: {
      4: { kind: "range", title: "A short course", subtitle: "Number of CBT sessions you will usually have, says the NHS", from: 5, to: 15, unit: "sessions", sources: "Source: NHS, Cognitive behavioural therapy (CBT)" },
    },
    stats: {
      3: [{ value: "18 or over", label: "is the age to refer yourself to NHS talking therapies, or 16 or over in some areas, says the NHS.", ref: 5 }],
    },
  },
  "organising": {
    sectionRefs: [[[1], [2]], [[2], [3]], [[3], [3]], [[1, 4], [4]], [[1], [1]]],
    helpRefs: [[2], [2], [3], [2], [1], [5, 6]],
  },
  "health-checks": {
    sectionRefs: [[[1, 2], [2], [3]], [[4], [2], [4]], [[1, 2, 5], [2]], [[4], [4]]],
    helpRefs: [[3], [2], [4], [5], [4], [6, 7]],
    stats: {
      1: [{ value: "Every 6 months", label: "your doctor will usually measure your blood pressure and pulse while you take methylphenidate, says the NHS.", ref: 4, picture: "calendar" }],
      2: [{ value: "At least once a year", label: "is how often an ADHD medicine that is working for you should be reviewed, says the Royal College of Psychiatrists.", ref: 1, picture: "calendar" }],
    },
  },
  "work": {
    sectionRefs: [[[1], [2], [3]], [[4], [5], [1]], [[6, 7], [6], [7, 6]], [[8], [5, 9]]],
    helpRefs: [[5], [4], [8], [7], [9], [10, 11]],
    stats: {
      0: [{ value: "12 months or more", label: "is what long-term means in the Equality Act 2010 definition of disability.", ref: 2, picture: "calendar" }],
      2: [{ value: "16 or over", label: "is the age you need to be to get Access to Work support, says the government.", ref: 7 }],
    },
  },
  "relationships": {
    sectionRefs: [[[1, 2], [2]], [[2], [3, 4]], [[2], [2], [2]], [[2, 4, 6], [5]]],
    helpRefs: [[2], [2], [2], [2], [5], [7, 8]],
  },
  "driving": {
    sectionRefs: [[[1], [2, 1], [1, 6]], [[1], [1]], [[3], [4]], [[5], [5]]],
    helpRefs: [[1], [4], [1], [5], [7, 8]],
    stats: {
      0: [{ value: "Up to £1,000", label: "is the fine for not telling the DVLA about ADHD that affects your ability to drive safely, says the government.", ref: 1 }],
    },
  },
  "support": {
    sectionRefs: [[[1], [1]], [[2, 3, 4], [2, 5]], [[1], [6]], [[7], [8, 9], [10]]],
    helpRefs: [[3, 4], [2, 1], [1], [3], [10, 11]],
    stats: {
      3: [{ value: "24 hours", label: "a day, every day, Samaritans answers on 116 123, free from any phone.", ref: 8, picture: "hours" }],
    },
  },
};
