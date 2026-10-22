import type { NewsExtras } from "../ischaemic-news";
// Restless legs syndrome features: paragraph references (numbers are positions in each answer's own sources in rls-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[2, 3], [1]], [[2, 4], [3]], [[1, 2, 3, 4], [3, 2]], [[2, 3], [2, 4]], [[2], [1, 3]]],
    helpRefs: [[1], [1], [1], [2], [5, 6]],
    stats: {
      3: [
        { value: "As many as 1 in 10", label: "people are affected by restless legs syndrome at some point in their life, says NHS inform.", ref: 2, picture: "one-in", of: 10 },
        { value: "Twice as likely", label: "are women to develop restless legs syndrome as men, says NHS inform.", ref: 2, picture: "times" },
      ],
    },
  },
  "causes": {
    sectionRefs: [[[1, 2], [2, 3]], [[1, 2], [2, 3]], [[2], [1, 7]], [[2, 4], [4, 5], [2, 3]], [[2, 4], [6]]],
    helpRefs: [[1], [2], [4], [1, 2], [1, 2], [8, 9]],
    stats: {
      1: [{ value: "Up to half", label: "of people with restless legs syndrome have a family history of it, says NICE's clinical knowledge summary.", ref: 3, picture: "half" }],
      2: [{ value: "Almost half", label: "of people with kidney disease will also have restless legs syndrome, says RLS-UK.", ref: 7, picture: "half" }],
    },
  },
  "sleep": {
    sectionRefs: [[[3], [3, 7]], [[2], [2, 4]], [[3, 5], [6]], [[1], [1], [8]], [[1, 2]]],
    helpRefs: [[1], [1], [1], [8], [1], [9, 10]],
    charts: {
      1: { kind: "donut", title: "Leg jerks at night", subtitle: "People with restless legs syndrome who also have periodic limb movements in sleep, out of every 100", value: 80, prefix: "Up to", subject: "people with restless legs syndrome", label: "also have periodic limb movements in sleep", sources: "Source: NHS inform, Restless legs syndrome" },
      2: { kind: "bars", title: "What people with restless legs report", subtitle: "People living with RLS in the REST general population study reporting each, out of every 100", bars: [{ label: "Uncomfortable feelings or urge to move", value: 88 }, { label: "Sleep problems", value: 76, strong: true }, { label: "Daytime tiredness or poor focus", value: 56 }, { label: "Twitching or jerky movements", value: 37 }, { label: "Low mood", value: 26 }], sources: "Source: RLS-UK, Living with RLS (REST general population study, Allen and others, 2005)" },
    },
  },
  "diagnosis": {
    sectionRefs: [[[1], [1]], [[3, 5], [3, 5], [3]], [[1, 3], [4]], [[7, 1, 4], [2, 3]], [[6], [6]]],
    helpRefs: [[2], [1, 3], [3, 4], [1], [8, 9]],
    charts: {
      4: { kind: "range", title: "A long wait for a name", subtitle: "Years after symptoms begin that many people are diagnosed, says RLS-UK", from: 10, to: 20, unit: "years", sources: "Source: RLS-UK, What is RLS?" },
    },
  },
  "self-help": {
    sectionRefs: [[[2, 5, 4], [3]], [[1], [3], [6]], [[1, 3, 4], [1]], [[1, 2], [1, 3]], [[3], [3, 1]]],
    helpRefs: [[1], [1, 6], [1, 4], [1], [1, 2], [7, 8]],
    stats: {
      1: [{ value: "At least 2 hours", label: "before bed is when to stop drinking alcohol if you have restless legs, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  "iron": {
    sectionRefs: [[[1, 2], [2, 4]], [[2], [2, 3], [2]], [[1, 7], [2, 6], [2]], [[5], [5]], [[5], [5]]],
    helpRefs: [[2, 1], [5], [5], [5], [2], [8, 9]],
    charts: {
      0: { kind: "donut", title: "Low iron is common", subtitle: "People with restless legs syndrome who have iron deficiency, out of every 100", value: 24, prefix: "About", subject: "people with restless legs syndrome", label: "have iron deficiency, says NICE's clinical knowledge summary", sources: "Source: NICE CKS, Restless legs syndrome: causes" },
    },
    stats: {
      3: [{ value: "About 6 months", label: "is how long iron tablets are usually taken for iron deficiency anaemia, says the NHS.", ref: 5, picture: "calendar" }],
    },
  },
  "medicines": {
    sectionRefs: [[[1], [2], [3]], [[2, 3], [3, 7, 8], [7, 8, 3]], [[1, 2]], [[1, 2], [4, 3], [5]], [[6], [1]]],
    helpRefs: [[3, 6], [3], [4, 5], [5], [5, 9], [10, 11]],
    charts: {
      3: { kind: "range", title: "Augmentation is common", subtitle: "People taking pramipexole or ropinirole who develop augmentation over a 10-year period, out of every 100", from: 40, to: 70, sources: "Source: RLS-UK, Augmentation & rebound" },
    },
  },
  "in-the-moment": {
    sectionRefs: [[[1, 5], [4]], [[1, 2], [4]], [[1, 2]], [[2, 3], [6]], [[1]]],
    helpRefs: [[1], [1], [2], [1], [2, 6], [7, 8]],
    stats: {
      3: [{ value: "At least 5 minutes", label: "of calm breathing, counting from 1 to 5 in and out, is what the NHS breathing exercise suggests.", ref: 6, picture: "hours" }],
    },
  },
  "evenings": {
    sectionRefs: [[[1, 4], [6]], [[2], [5, 2], [2]], [[2], [9]], [[3], [7], [3, 8]], [[7]]],
    helpRefs: [[2], [2], [2], [7], [7], [10, 11]],
  },
  "pregnancy": {
    sectionRefs: [[[1, 2], [6, 9, 3]], [[4], [8], [4]], [[4, 5], [4, 1]], [[4], [4], [7]], [[7], [3, 4]]],
    helpRefs: [[4], [4], [4], [7], [7], [10, 11]],
    charts: {
      0: { kind: "bars", title: "More common as pregnancy goes on", subtitle: "Pregnant women with restless legs syndrome, by trimester, out of every 100", bars: [{ label: "First trimester", value: 8 }, { label: "Second trimester", value: 16 }, { label: "Third trimester", value: 22, strong: true }], sources: "Source: NICE CKS, Restless legs syndrome: prevalence (a meta-analysis of 27 studies)" },
    },
    stats: {
      0: [{ value: "Within 4 weeks", label: "of giving birth is when restless legs that start in pregnancy usually stop, says NHS inform.", ref: 1, picture: "calendar" }],
    },
  },
  "mood": {
    sectionRefs: [[[1, 4], [2, 3, 7]], [[5], [8]], [[1, 3], [3]], [[1, 6], [6]], [[3], [10, 9]]],
    helpRefs: [[1], [6], [3], [10], [3], [9, 10]],
    stats: {
      0: [{ value: "26 in 100", label: "people living with RLS in a large population study reported mood disturbance, such as feeling low, says RLS-UK.", ref: 4 }],
    },
  },
  "support": {
    sectionRefs: [[[1], [1]], [[2], [3]], [[4]], [[5], [5, 6]], [[8, 7], [9, 8]]],
    helpRefs: [[1, 2], [3], [5], [6], [8, 9]],
    stats: {
      0: [{ value: "Almost 20 years", label: "since RLS-UK began as a support group. It is still run by volunteers and receives no government funding.", ref: 1, picture: "calendar" }],
    },
  },
};
