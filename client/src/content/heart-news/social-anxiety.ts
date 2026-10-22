import type { NewsExtras } from "../ischaemic-news";
// Social anxiety features: paragraph references (numbers are positions in each answer's own sources in social-anxiety-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[2], [1]], [[1], [3]], [[3], [5]], [[1, 4], [2], [1, 3]]],
    helpRefs: [[3], [1], [1], [1], [6, 7]],
    charts: {
      3: { kind: "donut", title: "A common problem", subtitle: "People, out of every 100, who have some degree of social phobia", value: 5, prefix: "About", subject: "people", label: "have some degree of social phobia", sources: "Source: Royal College of Psychiatrists, Shyness, social anxiety and social phobia" },
    },
    stats: {
      3: [{ value: "2 or 3 times", label: "more likely: women are affected more often than men, says the Royal College of Psychiatrists.", ref: 2, picture: "times" }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [3]], [[1, 2, 3, 4], [3], [2]], [[1, 3], [4, 6]], [[1, 5], [5, 2]], [[1]]],
    helpRefs: [[1], [3], [1], [1], [7, 8]],
    charts: {
      3: { kind: "range", title: "A panic attack passes", subtitle: "Minutes a panic attack usually lasts. Frightening, but not dangerous", from: 5, to: 20, unit: "minutes", sources: "Source: NHS, Anxiety, fear and panic" },
    },
  },
  "causes": {
    sectionRefs: [[[7, 1, 2], [2]], [[1], [1], [6, 5]], [[3], [3], [3]], [[4], [4]], [[1]]],
    helpRefs: [[1], [4], [4], [1], [8, 9]],
    charts: {
      0: { kind: "range", title: "A normal stage of shyness", subtitle: "Ages at which all children go through a normal stage of shyness. Some experts think social phobia may come from getting stuck there", from: 3, to: 7, unit: "years old", sources: "Source: Royal College of Psychiatrists, Shyness, social anxiety and social phobia" },
    },
  },
  "diagnosis": {
    sectionRefs: [[[1], [2]], [[1, 2], [7], [9]], [[1], [3]], [[4], [4]], [[1, 5], [6]]],
    helpRefs: [[1], [2], [4], [8], [5], [10, 11]],
    stats: {
      1: [{ value: "2 questions", label: "can help spot social anxiety: do you avoid social situations or activities, and are you fearful or embarrassed in them? NICE suggests asking them.", ref: 7 }],
      4: [{ value: "18 or over", label: "is the age to refer yourself to NHS talking therapies, or 16 or over in some areas, says the NHS.", ref: 5 }],
    },
  },
  "cbt": {
    sectionRefs: [[[1], [2, 4]], [[2], [6, 3]], [[3], [3], [7, 5]], [[4], [4]], [[2, 5]]],
    helpRefs: [[2], [5], [5], [8], [5], [9, 10]],
    charts: {
      1: { kind: "range", title: "A course of CBT", subtitle: "Meetings with a therapist NICE says you should have, over 4 months, each lasting an hour to an hour and a half", from: 14, to: 16, unit: "sessions", sources: "Source: NICE, Social anxiety disorder, information for the public: Treatments for adults" },
    },
    stats: {
      1: [{ value: "4 months", label: "is how long a course of CBT for social anxiety usually takes, says NICE.", ref: 2, picture: "calendar" }],
    },
  },
  "self-help": {
    sectionRefs: [[[1, 3], [2]], [[4], [4]], [[7], [7]], [[5], [6], [5]]],
    helpRefs: [[1, 3], [7], [5], [6, 5], [5], [8, 9]],
    stats: {
      0: [
        { value: "Up to 9 sessions", label: "over 3 to 4 months is what supported self-help usually involves, says NICE.", ref: 2, picture: "calendar" },
        { value: "3 hours", label: "of support in total from a professional, face to face or by telephone, during supported self-help, says NICE.", ref: 2, picture: "hours" },
      ],
      2: [{ value: "1 or 2 weeks", label: "is how long to keep a social anxiety diary if you cannot get a clear picture by thinking back, says one NHS self-help guide.", ref: 7, picture: "calendar" }],
    },
  },
  "medicines": {
    sectionRefs: [[[1], [2]], [[2], [3]], [[2, 5], [3], [4]], [[2], [2], [7, 8]], [[2], [4], [3, 2]]],
    helpRefs: [[2], [4], [2], [4], [5, 6], [9, 10]],
    charts: {
      2: { kind: "range", title: "Giving an SSRI time", subtitle: "Weeks within which SSRIs usually start to work, and up to which they can take to have their full effect", from: 6, to: 12, unit: "weeks", sources: "Source: Royal College of Psychiatrists, Shyness, social anxiety and social phobia" },
    },
    stats: {
      4: [{ value: "At least 6 months", label: "more is how long to continue medicine if you feel better after the first 3 months, says NICE.", ref: 2, picture: "calendar" }],
    },
  },
  "small-steps": {
    sectionRefs: [[[1], [6, 2]], [[1], [4]], [[1], [1], [3]], [[2], [2]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [5], [1], [7, 8]],
    stats: {
      2: [{ value: "By half", label: "is how far to let your fear fall before moving on: a situation rated 10 should come down to a 5, says the NHS's Every Mind Matters.", ref: 1, picture: "half" }],
    },
  },
  "work": {
    sectionRefs: [[[1], [2], [3]], [[4], [5]], [[6], [7, 6]], [[8], [8]], [[9], [9]]],
    helpRefs: [[4], [6, 7], [8], [9], [9], [10, 11]],
    stats: {
      1: [{ value: "12 months or more", label: "is what long-term means under the Equality Act 2010, says the government.", ref: 5, picture: "calendar" }],
      2: [{ value: "16 or over", label: "is the age to get Access to Work support, if you are in or about to start paid work, says the government.", ref: 7 }],
      3: [{ value: "Up to £27,783", label: "a year of support is available to undergraduate and postgraduate students through Disabled Students' Allowance, says the government.", ref: 8 }],
    },
  },
  "safety": {
    sectionRefs: [[[1], [1]], [[1], [1], [2]], [[4], [4]], [[1, 5], [6], [8]], [[3], [2, 7]]],
    helpRefs: [[3], [2], [7], [4], [6, 8], [9, 10]],
  },
  "friends": {
    sectionRefs: [[[1], [2]], [[3], [4], [3]], [[3], [4]], [[4, 3], [5]], [[3], [6]]],
    helpRefs: [[3], [4], [3, 4], [4, 3], [5], [7, 8]],
  },
  "support": {
    sectionRefs: [[[9], [1]], [[2], [3, 4]], [[6, 5], [7]], [[8], [8]], [[10, 11], [12]]],
    helpRefs: [[2], [5], [8], [1], [12, 13]],
    stats: {
      1: [{ value: "6 weeks", label: "is the length of Anxiety UK's therapist-led anxiety management course, online for 1 hour a week.", ref: 3, picture: "calendar" }],
      2: [{ value: "10am to 10pm", label: "every day, the No Panic helpline is open on 0300 772 9844, says No Panic.", ref: 5, picture: "hours" }],
      4: [{ value: "Any time", label: "day or night, Samaritans is free to call on 116 123 from any phone, says Samaritans.", ref: 10, picture: "hours" }],
    },
  },
};
