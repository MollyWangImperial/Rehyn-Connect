import type { NewsExtras } from "../ischaemic-news";
// ARFID features: paragraph references (numbers are positions in each answer's own sources in arfid-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [3]], [[2, 3], [1, 3]], [[1], [7, 1]], [[3], [6]], [[1, 5], [4, 1]]],
    helpRefs: [[1], [3, 5], [4], [2]],
    stats: {
      2: [{ value: "About 1 in 33", label: "children aged 8 to 13 showed signs of ARFID in one questionnaire study, says the Royal College of Psychiatrists.", ref: 3, picture: "one-in", of: 33 }],
    },
    charts: {
      3: { kind: "range", title: "A normal phase", subtitle: "Ages when most children go through a normal phase of selective eating, say Beat's dietitians", from: 2, to: 5, unit: "years old", sources: "Source: Beat, Dietitians Sarah Fuller and Clare Ellison on ARFID vs 'picky eating'" },
    },
  },
  "types": {
    sectionRefs: [[[1], [3, 2]], [[1, 3], [1, 3]], [[1, 3]], [[1], [1]], [[1, 3]]],
    helpRefs: [[1], [1], [1], [4], [2]],
  },
  "signs": {
    sectionRefs: [[[1, 2]], [[1], [1], [1]], [[1, 3], [4]], [[1], [2, 1]], [[5, 6]]],
    helpRefs: [[1], [1], [1], [3]],
  },
  "health": {
    sectionRefs: [[[1], [2], [3]], [[2], [1, 4]], [[1], [2]], [[2], [1]], [[3]]],
    helpRefs: [[3], [4], [3], [5]],
  },
  "getting-help": {
    sectionRefs: [[[1], [2]], [[3, 1], [2], [7]], [[1], [1], [6]], [[4], [5]]],
    helpRefs: [[1], [3], [2], [1], [8, 9]],
  },
  "therapy": {
    sectionRefs: [[[1, 2], [2]], [[1, 3], [1], [1]], [[1], [1]], [[1], [2, 4]], [[3]]],
    helpRefs: [[3], [3], [1], [3], [3]],
  },
  "dietitian": {
    sectionRefs: [[[1], [4]], [[2], [1]], [[3], [3], [4]], [[4], [2]]],
    helpRefs: [[4], [3], [4], [4]],
  },
  "new-foods": {
    sectionRefs: [[[1], [4, 3]], [[2], [2]], [[1], [1]], [[5], [2]], [[3], [4]]],
    helpRefs: [[3], [2], [5], [4]],
    stats: {
      1: [{ value: "Months", label: "is how long these small steps with a new food could take, says the National Autistic Society.", ref: 2, picture: "calendar" }],
    },
  },
  "social": {
    sectionRefs: [[[1], [2]], [[3], [5]], [[4], [3]], [[6, 5], [5]]],
    helpRefs: [[3, 5], [4], [6], [5]],
  },
  "autism": {
    sectionRefs: [[[2], [6, 4]], [[3], [1, 5], [1, 5]], [[3, 7, 1]], [[1], [1], [4]]],
    helpRefs: [[4], [1], [1, 4], [1], [4]],
    stats: {
      0: [{ value: "Twice as likely", label: "to experience eating disorders: autistic people compared with people who are not autistic, says Beat.", ref: 4, picture: "times" }],
    },
    charts: {
      0: { kind: "range", title: "A wide estimate", subtitle: "Out of every 100 people with an eating disorder, how many are also autistic, as some research suggests (National Autistic Society)", from: 4, to: 23, sources: "Source: National Autistic Society, Eating disorders" },
    },
  },
  "family": {
    sectionRefs: [[[1], [1]], [[2], [3]], [[5], [4], [7]], [[6, 5], [8, 9]]],
    helpRefs: [[1], [2], [5], [4], [6], [10, 11]],
    stats: {
      3: [{ value: "12 weeks", label: "of weekly one-to-one sessions with a Beat programme officer, in ARFID support for family members.", ref: 9, picture: "calendar" }],
    },
    charts: {
      3: { kind: "range", title: "Support for families", subtitle: "Ages of the young people whose families can use Beat's ARFID family support", from: 5, to: 17, unit: "years old", sources: "Source: Beat, ARFID peer support group for family members, and ARFID support for family members" },
    },
  },
  "support": {
    sectionRefs: [[[1], [1], [1]], [[2], [2]], [[3], [8]], [[1], [5, 7, 6]]],
    helpRefs: [[1, 4], [2], [1], [3], [5, 6]],
    stats: {
      0: [{ value: "3pm to 8pm", label: "Monday to Friday, is when Beat's phone Helplines are open.", ref: 1, picture: "hours" }],
      1: [{ value: "Every Thursday", label: "from 6:45pm to 7:45pm, Beat's ARFID Online Support Group meets online.", ref: 2, picture: "calendar" }],
      3: [{ value: "24 hours", label: "a day, every day, Samaritans and the Shout text line are open, says the NHS.", ref: 6, picture: "hours" }],
    },
  },
};
