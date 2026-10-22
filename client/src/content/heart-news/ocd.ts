import type { NewsExtras } from "../ischaemic-news";
// OCD features: paragraph references (numbers are positions in each answer's own sources in ocd-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [1]], [[1], [3, 4]], [[2], [3, 5]], [[2], [2, 3]], [[2], [1, 2]]],
    helpRefs: [[3, 2], [2], [2], [2], [6, 7]],
    stats: {
      2: [
        { value: "About 1 in 50", label: "people have OCD at some point in their lives, men and women equally, says the Royal College of Psychiatrists.", ref: 3 },
        { value: "As early as 6", label: "years old is when OCD symptoms can start, though it often begins around puberty and early adulthood, says the NHS.", ref: 2, picture: "calendar" },
      ],
    },
  },
  "obsessions": {
    sectionRefs: [[[1], [2]], [[1], [2]], [[1], [3]], [[1], [3], [2, 4]], [[3], [3]]],
    helpRefs: [[1, 3], [3], [3], [5], [3], [6, 7]],
    charts: {
      0: { kind: "donut", title: "Almost everyone has them", subtitle: "People, out of every 100, who report unwanted intrusive thoughts in research from the US, UK and Canada", value: 80, prefix: "Up to", subject: "people", label: "report unwanted intrusive thoughts, often the same as those in OCD", sources: "Source: OCD-UK, What are obsessions?" },
    },
  },
  "compulsions": {
    sectionRefs: [[[1], [1]], [[1], [1, 2]], [[3], [2]], [[2], [2, 4]], [[5, 6]]],
    helpRefs: [[8], [7], [7], [3], [1], [9, 10]],
    stats: {
      2: [{ value: "More than 1 hour", label: "a day spent on obsessions and compulsions, or significant problems in daily life, is part of how OCD is diagnosed, says Rethink Mental Illness.", ref: 3, picture: "hours" }],
    },
  },
  "types": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[2, 3]], [[1], [1, 4], [5]], [[2, 6], [7, 8]]],
    helpRefs: [[1, 4], [1], [1], [5], [9, 10]],
    stats: {
      0: [{ value: "5 main categories", label: "is how OCD has traditionally been grouped, with themes often overlapping, says OCD-UK.", ref: 1 }],
    },
  },
  "cbt-erp": {
    sectionRefs: [[[1], [1, 2, 3]], [[4], [4], [4]], [[5, 3], [3]], [[1], [6, 4]], [[3], [3]]],
    helpRefs: [[4, 7, 2], [4], [4, 1], [3], [1], [8, 9]],
    stats: {
      1: [{ value: "10 to 90 minutes", label: "is how long anxiety may take, at first, to fall below half its worst during an exposure, says the Royal College of Psychiatrists.", ref: 4, picture: "hours" }],
    },
    charts: {
      2: { kind: "donut", title: "Helped by CBT", subtitle: "People with OCD, out of every 100 (about 3 in every 4)", value: 75, subject: "people with OCD", label: "are significantly helped by cognitive behavioural therapy", sources: "Source: OCD-UK, What is cognitive behavioural therapy (CBT)?" },
      3: { kind: "range", title: "A course of therapy for milder OCD", subtitle: "Sessions of therapist treatment people with fairly mild OCD usually need, with exercises at home in between", from: 8, to: 20, unit: "sessions", sources: "Source: NHS, Obsessive compulsive disorder (OCD): treatment" },
    },
  },
  "medicines": {
    sectionRefs: [[[1], [3, 2]], [[1, 4], [4, 5]], [[1, 6, 4], [1], [1]], [[4, 6], [6, 1]], [[1], [1, 4], [1]]],
    helpRefs: [[1], [3], [7], [1], [7], [8, 9]],
    stats: {
      2: [{ value: "Up to 12 weeks", label: "before you notice the benefit of an SSRI, though most people will eventually benefit, says the NHS.", ref: 1, picture: "calendar" }],
      4: [{ value: "At least a year", label: "is how long most people need treatment with an SSRI, says the NHS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      2: { kind: "donut", title: "Helped by medicine", subtitle: "People taking medication for OCD, out of every 100 (about 6 in every 10)", value: 60, prefix: "About", subject: "people taking medication for OCD", label: "improve", sources: "Source: Royal College of Psychiatrists, Obsessive-compulsive disorder (OCD)" },
    },
  },
  "getting-help": {
    sectionRefs: [[[1, 2], [3, 4]], [[4], [5]], [[2, 6], [7], [8]], [[9], [3, 5]], [[2]]],
    helpRefs: [[3, 4], [4], [8], [7], [9], [10, 11]],
    stats: {
      0: [{ value: "18 or over", label: "is the age to refer yourself to NHS talking therapies, or 16 or over in some areas, says the NHS.", ref: 3 }],
    },
    charts: {
      2: { kind: "range", title: "A long wait, once", subtitle: "Average years people once waited between OCD symptoms developing and seeking treatment. Today it is much rarer", from: 10, to: 15, unit: "years", sources: "Source: OCD-UK, Accessing OCD treatment" },
    },
  },
  "self-help": {
    sectionRefs: [[[1], [1], [1]], [[2], [2]], [[2], [2]], [[1], [1]], [[3], [3]]],
    helpRefs: [[1], [1, 5], [1], [2], [3], [6, 7]],
  },
  "family": {
    sectionRefs: [[[1], [2]], [[3], [4]], [[5], [5], [6]], [[7], [5]], [[2], [2, 8]]],
    helpRefs: [[5], [5], [5, 7], [5, 6], [2, 8], [9, 10]],
    charts: {
      0: { kind: "donut", title: "OCD touches the whole family", subtitle: "Families of people with OCD, out of every 100", value: 80, prefix: "More than", subject: "families", label: "have suffered disruption to their personal life and family social life", sources: "Source: OCD Action, Carers" },
    },
  },
  "work": {
    sectionRefs: [[[1, 2], [3]], [[4], [5]], [[6], [7, 6]], [[8], [8]], [[5, 9], [10]]],
    helpRefs: [[5], [6], [8], [5, 9], [11, 12]],
    stats: {
      1: [{ value: "12 months or more", label: "is what long-term means under the Equality Act 2010, says the government.", ref: 4, picture: "calendar" }],
      2: [{ value: "16 or over", label: "is the age to get Access to Work support, if you are in or about to start paid work, says the government.", ref: 7 }],
    },
  },
  "setbacks": {
    sectionRefs: [[[1], [2, 3]], [[2], [4]], [[5], [1, 6]], [[1, 7], [1, 8]], [[4], [8]]],
    helpRefs: [[2], [4, 5], [2], [8, 7], [4], [9, 10]],
    stats: {
      2: [{ value: "About 1 in 5", label: "people who get better with ERP will develop symptoms in the future and need extra treatment, says the Royal College of Psychiatrists.", ref: 1, picture: "one-in", of: 5 }],
      3: [
        { value: "At least 12 months", label: "is how long to continue medication if it is helping, say the Royal College of Psychiatrists and OCD-UK.", ref: 1, picture: "calendar" },
        { value: "About 1 in 3", label: "people who stop medication get symptoms again in the months after, which is much less likely alongside CBT, says the Royal College of Psychiatrists.", ref: 1, picture: "one-in", of: 3 },
      ],
    },
  },
  "support": {
    sectionRefs: [[[1], [1, 2]], [[3], [4, 5]], [[6], [7]], [[4], [8]], [[9, 10], [11]]],
    helpRefs: [[3, 6], [4], [7, 5], [4], [11, 12]],
    stats: {
      1: [{ value: "Over 3,000", label: "people had attended one or more OCD-UK online support groups by the end of 2025, says OCD-UK.", ref: 3 }],
      4: [{ value: "24 hours", label: "a day, Samaritans is free to call on 116 123 from any phone, says Samaritans.", ref: 9, picture: "hours" }],
    },
  },
};
