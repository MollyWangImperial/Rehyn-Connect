import type { NewsExtras } from "../ischaemic-news";
// Depression after stroke features: paragraph references (numbers are positions in each answer's own sources in post-stroke-mood-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "why": {
    sectionRefs: [[[1], [1]], [[2], [2], [3]], [[2], [2]], [[4], [5]], [[2], [3, 6]]],
    helpRefs: [[2], [1], [5], [2], [1], [7]],
    stats: {
      0: [{ value: "Around 1 in 3", label: "stroke survivors will have some form of depression within the first year, says the Stroke Association.", ref: 1, picture: "one-in", of: 3 }],
    },
  },
  "emotionalism": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[1], [1]], [[1], [1], [1]], [[2]]],
    helpRefs: [[1], [1], [1], [1], [1], [3]],
    stats: {
      1: [{ value: "About 1 in 5", label: "people experience emotionalism in the first few months after a stroke, says the Stroke Association.", ref: 1, picture: "one-in", of: 5 }],
      3: [{ value: "Within 6 months", label: "many people find emotionalism improves or disappears altogether, says the Stroke Association.", ref: 1, picture: "calendar" }],
    },
  },
  "signs": {
    sectionRefs: [[[1], [1], [2]], [[1, 2]], [[1, 2], [1, 2]], [[2], [3]], [[1], [1, 3]]],
    helpRefs: [[2], [1], [1], [3], [1], [3]],
    stats: {
      0: [{ value: "More than 2 weeks", label: "of symptoms for most of the day, every day, is the time to see a GP, says the NHS.", ref: 2, picture: "calendar" }],
    },
  },
  "anxiety-too": {
    sectionRefs: [[[1], [1, 2]], [[1], [1]], [[1], [1, 3]], [[1], [1]], [[4], [5]]],
    helpRefs: [[1], [1], [1, 5], [1], [4], [6]],
    stats: {
      0: [{ value: "Around 1 in 4", label: "people who have a stroke will experience anxiety within the first five years, says the Stroke Association.", ref: 1, picture: "one-in-four" }],
    },
  },
  "talking": {
    sectionRefs: [[[1], [1]], [[1], [2, 3], [4]], [[1], [3, 2], [1, 3]], [[5], [6], [7, 8]]],
    helpRefs: [[1], [3], [6], [8], [2], [9]],
    stats: {
      2: [{ value: "£40 to over £100", label: "is what one private talking therapy session typically costs, says the Stroke Association.", ref: 1 }],
      3: [{ value: "Around 2 in 3", label: "people have communication problems directly after a stroke, says the Stroke Association.", ref: 7 }],
    },
    charts: {
      1: { kind: "range", title: "A course of CBT", subtitle: "Sessions in a usual NHS course of cognitive behavioural therapy for depression", from: 8, to: 16, unit: "sessions", sources: "Source: NHS, Treatment for depression in adults" },
    },
  },
  "antidepressants": {
    sectionRefs: [[[1], [1], [2]], [[3, 2], [4], [5]], [[3], [3, 5], [3]], [[3, 1], [3]], [[3, 5], [6]]],
    helpRefs: [[5], [3], [3], [3], [3], [7]],
    stats: {
      3: [{ value: "At least 6 months", label: "after you feel better is how long antidepressants are usually taken, says the NHS.", ref: 3, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "From first weeks to full effect", subtitle: "Weeks an antidepressant takes: usually 1 to 2 to start having an effect, up to 8 to work fully", from: 1, to: 8, unit: "weeks", sources: "Source: NHS, Antidepressants" },
    },
  },
  "activity": {
    sectionRefs: [[[1], [2]], [[1, 3], [4]], [[2], [5, 2]], [[3], [3], [6]], [[1], [7]]],
    helpRefs: [[4], [1], [3], [3], [2, 6], [8]],
    stats: {
      1: [{ value: "10 minutes", label: "of brisk walking can clear your mind and help you relax, says the NHS.", ref: 6, picture: "hours" }],
      3: [{ value: "150 minutes", label: "of moderate activity a week is what adults should build up towards, says the NHS.", ref: 6, picture: "hours" }],
    },
    charts: {
      2: { kind: "range", title: "A course of behavioural activation", subtitle: "Individual sessions with a trained practitioner, on the NHS", from: 12, to: 16, unit: "sessions", sources: "Source: NHS, Treatment for depression in adults" },
    },
  },
  "peer-support": {
    sectionRefs: [[[1], [1]], [[2], [3]], [[4], [5]], [[1], [1], [6]]],
    helpRefs: [[2], [4], [5], [1], [1], [7]],
    stats: {
      1: [{ value: "Around 400", label: "stroke support groups across the UK, all run by volunteers, says the Stroke Association.", ref: 2 }],
      2: [{ value: "8 weeks", label: "of weekly phone calls with a trained volunteer, around 30 minutes each, says the Stroke Association.", ref: 5, picture: "calendar" }],
    },
  },
  "fatigue-mood": {
    sectionRefs: [[[1], [1]], [[1], [2], [3, 1]], [[1], [1]], [[4], [4]], [[5, 4], [4, 1]]],
    helpRefs: [[4], [1, 4], [4], [4], [4], [6]],
  },
  "purpose": {
    sectionRefs: [[[1], [2]], [[2], [2], [2]], [[3], [3]], [[4], [5]], [[6], [7]]],
    helpRefs: [[2], [3], [3], [4], [5], [8]],
    stats: {
      3: [{ value: "Once a week", label: "is a good way to start volunteering, building up if you feel able, says the Stroke Association.", ref: 5, picture: "calendar" }],
    },
  },
  "carers": {
    sectionRefs: [[[1], [1], [2]], [[3], [3], [3]], [[3], [4]], [[5], [5, 6]], [[3, 4], [4, 7, 5]]],
    helpRefs: [[3], [3], [3, 4], [3], [3], [7]],
    stats: {
      2: [{ value: "10 minutes", label: "of yoga or mindfulness can fit into a day when a long break is not possible, suggests the Stroke Association.", ref: 3, picture: "hours" }],
    },
  },
};
