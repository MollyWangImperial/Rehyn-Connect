import type { NewsExtras } from "../ischaemic-news";
// Anger features: paragraph references (numbers are positions in each answer's own sources in anger-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[2, 3], [3]], [[1], [2]], [[1], [2, 4]], [[1], [5]]],
    helpRefs: [[4, 1], [4], [4], [4], [6, 7]],
    charts: {
      3: { kind: "bars", title: "Easier to see in others", subtitle: "Adults in a YouGov survey of 1,974 people for the Mental Health Foundation, January 2008, out of every 100", bars: [{ label: "Have a close friend or family member who has trouble controlling their anger", value: 32, strong: true }, { label: "Worry about how angry they sometimes feel", value: 28 }, { label: "Have trouble controlling their own anger", value: 12 }], sources: "Source: Mental Health Foundation, Boiling Point report" },
    },
  },
  "body": {
    sectionRefs: [[[1], [4]], [[2], [1]], [[1], [1]], [[1], [1]], [[1], [5, 1]]],
    helpRefs: [[3], [3], [3], [5], [6, 7]],
  },
  "causes": {
    sectionRefs: [[[1], [1, 2]], [[3], [5], [2, 3]], [[1, 3], [1, 4]], [[1, 3], [1, 2], [3]], [[1, 3]]],
    helpRefs: [[3], [5], [1], [3], [4], [6, 7]],
  },
  "illness": {
    sectionRefs: [[[1], [3]], [[2], [1]], [[3], [3]], [[1], [1], [5]], [[1], [3, 6, 1]]],
    helpRefs: [[1], [1], [1], [4], [5], [7, 8]],
  },
  "in-the-moment": {
    sectionRefs: [[[1], [3]], [[3], [2], [2]], [[2], [2], [2]], [[2], [5]], [[2, 4], [2]]],
    helpRefs: [[1], [3], [2], [2], [2, 4], [6, 7]],
    stats: {
      0: [{ value: "10", label: "is the number to count to before reacting, together with calming breathing exercises, says the NHS.", ref: 1 }],
      1: [{ value: "4 seconds", label: "in, and 4 seconds out, is the controlled breathing rhythm NHS inform suggests when you notice the signs of anger.", ref: 2, picture: "hours" }],
      4: [{ value: "At least 5 minutes", label: "of gentle breathing, counting from 1 to 5 in and out, is what the NHS breathing exercise suggests.", ref: 4, picture: "hours" }],
    },
  },
  "talking": {
    sectionRefs: [[[1], [1, 2]], [[3, 7], [3], [3]], [[1], [1, 4, 5]], [[1], [4]], [[1, 6], [6]]],
    helpRefs: [[1], [4], [3], [1], [1, 6], [8, 9]],
    charts: {
      1: { kind: "range", title: "A short course", subtitle: "Number of CBT sessions you will usually have, depending on what it is for, says the NHS", from: 5, to: 15, unit: "sessions", sources: "Source: NHS, Cognitive behavioural therapy (CBT)" },
    },
    stats: {
      2: [{ value: "18 or over", label: "is the age you can refer yourself to NHS talking therapies, or 16 or over in some areas, says the NHS.", ref: 4 }],
    },
  },
  "triggers": {
    sectionRefs: [[[1, 2], [1]], [[1], [3]], [[1], [5], [1]], [[1], [4]]],
    helpRefs: [[1], [1], [5], [4], [1], [6, 7]],
    stats: {
      1: [{ value: "A week or 2", label: "is how long NHS inform suggests keeping a diary of the times you have been angry and what triggered it.", ref: 1, picture: "calendar" }],
    },
  },
  "gp": {
    sectionRefs: [[[1], [1]], [[2], [6]], [[1], [2], [3]], [[5], [5]], [[4]]],
    helpRefs: [[1], [1], [1], [1], [4], [7, 8]],
    stats: {
      0: [{ value: "More than 2 weeks", label: "of low mood is one of the reasons the NHS gives for seeing a GP about anger.", ref: 1, picture: "calendar" }],
    },
    charts: {
      3: { kind: "donut", title: "Few people ask for help", subtitle: "Adults who said they have trouble controlling their anger, YouGov survey for the Mental Health Foundation, January 2008, out of every 100", value: 13, subject: "people", label: "had sought help for their anger problems", sources: "Source: Mental Health Foundation, Boiling Point report" },
    },
  },
  "relationships": {
    sectionRefs: [[[1], [4]], [[1], [1]], [[1, 2], [1], [1]], [[1], [5, 1]], [[3], [3]]],
    helpRefs: [[1], [1], [1], [1], [5], [6, 7]],
    charts: {
      0: { kind: "donut", title: "Anger can end relationships", subtitle: "Adults in a YouGov survey of 1,974 people for the Mental Health Foundation, January 2008, out of every 100", value: 20, subject: "people", label: "had ended a relationship or friendship because of how someone behaved when they were angry", sources: "Source: Mental Health Foundation, Boiling Point report" },
    },
  },
  "lifestyle": {
    sectionRefs: [[[1], [2]], [[1], [3, 4], [5]], [[1], [6]], [[9, 7], [8, 1]]],
    helpRefs: [[2], [2], [3], [5], [9], [10, 11]],
    stats: {
      0: [{ value: "7 to 9 hours", label: "of sleep a night, on average, is the ideal amount for adults, says NHS inform.", ref: 1, picture: "hours" }],
      1: [{ value: "14 units", label: "a week is the most men and women are advised to drink on a regular basis, says the NHS.", ref: 3 }],
    },
    charts: {
      3: { kind: "bars", title: "Two ways to reach your week", subtitle: "Minutes of activity a week the NHS says adults aged 19 to 64 should aim for", bars: [{ label: "Moderate intensity", value: 150, strong: true }, { label: "Or vigorous intensity", value: 75 }], max: 150, unit: " min", ticks: [0, 75, 150], sources: "Source: NHS, Physical activity guidelines for adults aged 19 to 64" },
    },
  },
  "safety": {
    sectionRefs: [[[1], [2]], [[4], [4]], [[2, 3], [6, 5], [5]], [[5], [5], [2, 7]], [[8], [2]]],
    helpRefs: [[3, 2], [5], [5], [1], [2], [9, 10]],
    stats: {
      2: [{ value: "Around 30 minutes", label: "is the time the Respect Phoneline offers per contact, with extra time if your situation is complex.", ref: 6, picture: "hours" }],
    },
  },
  "support": {
    sectionRefs: [[[1, 2], [1, 3]], [[1], [3]], [[1, 2], [7]], [[8], [5, 6]], [[9]]],
    helpRefs: [[1], [3, 4], [1], [1], [7], [11, 12, 10]],
    stats: {
      2: [{ value: "24 hours", label: "a day is when Samaritans is open, free to call on 116 123 from any phone.", ref: 7, picture: "hours" }],
    },
    charts: {
      4: { kind: "bars", title: "Wanting help, not knowing where", subtitle: "Adults in a YouGov survey of 1,974 people for the Mental Health Foundation, January 2008, out of every 100", bars: [{ label: "Agree people should be encouraged to seek help with anger", value: 84 }, { label: "Would not know where to seek help for an anger problem", value: 58, strong: true }], sources: "Source: Mental Health Foundation, Boiling Point report" },
    },
  },
};
