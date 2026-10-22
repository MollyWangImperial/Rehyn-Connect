import type { NewsExtras } from "../ischaemic-news";
// Postnatal depression features: paragraph references (numbers are positions in each answer's own sources in pnd-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[1], [2]], [[2], [1]], [[1], [2, 3]]],
    helpRefs: [[1], [1], [1], [3], [4, 5]],
    charts: {
      0: { kind: "range", title: "How common it is", subtitle: "Women having a baby who get postnatal depression, out of every 100", from: 10, to: 15, sources: "Source: Royal College of Psychiatrists, Postnatal depression" },
    },
    stats: {
      1: [{ value: "About a third", label: "of women with PND have symptoms which started in pregnancy and continue after birth, says the Royal College of Psychiatrists.", ref: 2, picture: "one-in", of: 3 }],
      3: [{ value: "3 to 6 months", label: "is how long postnatal depression usually takes to get better, though it can sometimes last much longer, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "baby-blues": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[1, 2], [2]], [[3], [3]]],
    helpRefs: [[2], [1], [2], [3], [4, 5]],
    charts: {
      0: { kind: "donut", title: "Very common", subtitle: "New mothers who have the baby blues, out of every 100 (over half)", value: 50, prefix: "More than", subject: "new mothers", label: "experience the baby blues", sources: "Source: Royal College of Psychiatrists, Postnatal depression" },
    },
    stats: {
      1: [{ value: "By about day 10", label: "after the birth, the baby blues usually stop, says the Royal College of Psychiatrists.", ref: 2, picture: "calendar" }],
      3: [{ value: "Around 1 in 1,000", label: "mothers are affected by postpartum psychosis after giving birth, says the NHS.", ref: 3 }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [1]], [[2], [3, 2]], [[2], [2]], [[1, 4], [4]], [[1, 2], [2]]],
    helpRefs: [[1], [3], [5], [2], [6, 7]],
  },
  "causes": {
    sectionRefs: [[[1], [2]], [[1, 2], [2]], [[1], [1, 2]], [[3], [4]]],
    helpRefs: [[5], [2], [2, 5], [4], [6, 7]],
  },
  "getting-help": {
    sectionRefs: [[[1], [2]], [[1], [3]], [[4], [4]], [[1], [3]], [[1], [5]]],
    helpRefs: [[1], [3], [4], [3], [5], [6, 7]],
    stats: {
      0: [{ value: "Around 10 days", label: "after your baby is born is when your health visitor will usually do a new baby review at home, says the NHS.", ref: 2, picture: "calendar" }],
      2: [{ value: "6 to 8 weeks", label: "after the birth is when you should have your postnatal check, including a talk about your mental health, says the NHS.", ref: 4, picture: "calendar" }],
    },
  },
  "talking": {
    sectionRefs: [[[1], [2]], [[3], [4]], [[4, 1], [1]], [[2, 1], [5]], [[1], [1]]],
    helpRefs: [[4, 1], [1], [2, 1], [5], [1], [6, 7]],
    charts: {
      1: { kind: "range", title: "A course of CBT", subtitle: "Sessions usually offered, depending on what it is for", from: 5, to: 15, unit: "sessions", sources: "Source: NHS, Cognitive behavioural therapy (CBT)" },
    },
    stats: {
      4: [{ value: "Within a month", label: "is when national guidelines say women with PND should be seen, though waiting lists can be long, says the Royal College of Psychiatrists.", ref: 1, picture: "calendar" }],
    },
  },
  "medicines": {
    sectionRefs: [[[1], [1]], [[2], [1], [3]], [[1], [1]], [[1, 4], [4]], [[1, 4], [1]]],
    helpRefs: [[2], [4], [4], [4], [3], [5, 6]],
    stats: {
      3: [{ value: "Up to 8 weeks", label: "is how long antidepressants can take to work fully, says the NHS.", ref: 4, picture: "calendar" }],
      4: [{ value: "Around 6 months", label: "after you start to feel better is how long you will usually keep taking them, says the Royal College of Psychiatrists.", ref: 1, picture: "calendar" }],
    },
  },
  "self-care": {
    sectionRefs: [[[1, 2], [2]], [[1, 3], [1]], [[4, 1], [1]], [[4, 1], [1]], [[4, 1], [5]]],
    helpRefs: [[4, 2], [4], [1], [4], [4], [6, 7]],
  },
  "partners": {
    sectionRefs: [[[1, 2], [3]], [[4], [4]], [[2], [2], [2]], [[5], [2]], [[6], [5]]],
    helpRefs: [[2], [2], [2], [2], [5], [7, 8]],
    stats: {
      0: [
        { value: "Up to 1 in 5", label: "women develop mental health problems such as depression or anxiety in pregnancy or the first year after birth, says the NHS.", ref: 3, picture: "one-in", of: 5 },
        { value: "Up to 1 in 10", label: "men develop mental health problems such as depression or anxiety in pregnancy or the first year after birth, says the NHS.", ref: 3 },
      ],
    },
  },
  "bonding": {
    sectionRefs: [[[1], [1]], [[2], [3, 1]], [[1], [1]], [[1], [2]], [[1], [4]]],
    helpRefs: [[1], [1], [1], [1], [4], [5, 6]],
  },
  "urgent": {
    sectionRefs: [[[1], [2]], [[2], [1]], [[3], [3], [3]], [[3], [3]], [[4, 5], [3, 6]]],
    helpRefs: [[2], [2], [3], [4], [5], [3]],
    stats: {
      2: [{ value: "Within 2 weeks", label: "of giving birth is when postpartum psychosis symptoms usually start, often within hours or days, says the NHS.", ref: 3, picture: "calendar" }],
      4: [{ value: "24 hours", label: "a day, Samaritans are there to listen on 116 123, free from any phone, says Samaritans.", ref: 4, picture: "hours" }],
    },
  },
  "next-pregnancy": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[4], [1]], [[5], [5]], [[6], [6]]],
    helpRefs: [[1], [3], [1, 4], [2], [5], [7, 8]],
    stats: {
      4: [
        { value: "About 1 in 2", label: "is the chance of another episode of postpartum psychosis after a future pregnancy; the right care can reduce the risk, says the NHS.", ref: 6, picture: "half" },
        { value: "Around 32 weeks", label: "of pregnancy is when a pre-birth planning meeting should happen if you are at high risk of postpartum psychosis, says the NHS.", ref: 6, picture: "calendar" },
      ],
    },
  },
};
