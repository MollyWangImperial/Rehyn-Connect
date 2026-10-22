import type { NewsExtras } from "../ischaemic-news";
// Bipolar disorder features: paragraph references (numbers are positions in each answer's own sources in bipolar-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 3], [1, 3]], [[3, 2], [2, 3]], [[1], [2]], [[3, 5], [5, 6]], [[2, 3], [1, 3]]],
    helpRefs: [[1], [1], [4], [1], [7, 8]],
    stats: {
      4: [
        { value: "About 1 in 50", label: "adults will have bipolar disorder at some point in their life, says the Royal College of Psychiatrists.", ref: 2 },
        { value: "More than one million", label: "people in the UK have bipolar, Bipolar UK estimates.", ref: 3 },
      ],
    },
    charts: {
      4: { kind: "range", title: "When it usually starts", subtitle: "The ages at which bipolar disorder usually begins", from: 15, to: 25, unit: "years of age", sources: "Source: Royal College of Psychiatrists, Bipolar disorder" },
    },
  },
  "mania": {
    sectionRefs: [[[1, 3], [2, 3]], [[1], [1, 2, 4]], [[1, 2], [3]], [[2, 4], [2], [2, 5]], [[3], [7, 6, 9]]],
    helpRefs: [[2], [2], [1], [1], [7, 8]],
    charts: {
      3: { kind: "range", title: "How long an untreated manic episode lasts", subtitle: "Months a manic episode generally lasts without treatment", from: 3, to: 6, unit: "months", sources: "Source: Royal College of Psychiatrists, Bipolar disorder; Bipolar UK, Types of bipolar" },
    },
  },
  "depression": {
    sectionRefs: [[[2], [2, 4, 5]], [[1], [1, 2]], [[3], [3]], [[2, 4], [2, 3]], [[3, 6], [8, 7, 9], [8, 7]]],
    helpRefs: [[1], [6], [6], [6], [7, 8]],
    stats: {
      4: [{ value: "24 hours", label: "a day, every day, Samaritans (116 123) and the Shout text line (85258) are open, says the NHS.", ref: 8, picture: "hours" }],
    },
    charts: {
      0: { kind: "range", title: "How long an untreated depressive episode lasts", subtitle: "Months a depressive episode generally lasts without treatment", from: 6, to: 12, unit: "months", sources: "Source: Royal College of Psychiatrists, Bipolar disorder; Rethink Mental Illness; Bipolar UK" },
    },
  },
  "types": {
    sectionRefs: [[[1], [3, 4]], [[1, 2, 3], [1, 2]], [[1, 3], [1]], [[2, 1], [1, 2, 3]], [[1, 2, 3], [1, 3]]],
    helpRefs: [[5], [5], [5], [5], [6, 7]],
    stats: {
      2: [{ value: "About 2 in 5", label: "people with bipolar have bipolar type 2, says Bipolar UK.", ref: 1 }],
      4: [{ value: "Around 1 in 10", label: "people living with bipolar have rapid cycling, says Bipolar UK.", ref: 1 }],
    },
    charts: {
      1: { kind: "donut", title: "Lows as well as highs", subtitle: "Out of every 100 people with bipolar type 1", value: 90, subject: "people with bipolar type 1", label: "also go through periods of depression", sources: "Source: Bipolar UK, Types of bipolar" },
    },
  },
  "mood-stabilisers": {
    sectionRefs: [[[8, 2], [2, 7], [2]], [[2, 3], [4, 2], [4, 3]], [[2, 5], [3, 5, 10], [4]], [[5, 3], [5, 6]], [[8, 2], [9], [4, 6]]],
    helpRefs: [[5, 4], [4, 7], [5], [5], [1], [11, 12]],
    stats: {
      1: [{ value: "Every 3 to 6 months", label: "is how often you'll have a lithium blood test once your doctor is happy with the level, says the NHS.", ref: 4, picture: "calendar" }],
    },
    charts: {
      0: {
        kind: "bars",
        title: "Chance of another episode within a year",
        subtitle: "Out of every 100 people, by number of earlier manic episodes, without and with lithium",
        bars: [
          { label: "3 or 4 earlier episodes, no lithium", value: 20 },
          { label: "3 or 4 earlier episodes, taking lithium", value: 12, strong: true },
          { label: "5 or more earlier episodes, no lithium", value: 40 },
          { label: "5 or more earlier episodes, taking lithium", value: 26, strong: true },
        ],
        sources: "Source: Royal College of Psychiatrists, Bipolar disorder",
      },
    },
  },
  "other-medicines": {
    sectionRefs: [[[4], [1, 2]], [[2, 3], [2, 4], [5, 6]], [[4], [3, 8]], [[6, 9, 5], [7], [5, 8]], [[3, 4], [5], [5, 8]]],
    helpRefs: [[4], [4], [5, 8], [4], [4], [10, 11]],
    stats: {
      1: [{ value: "Within a few days", label: "symptoms of mania usually improve once treatment starts, though full recovery may take several weeks, says the Royal College of Psychiatrists.", ref: 2, picture: "calendar" }],
      4: [{ value: "At least once a year", label: "is how often physical health checks should be done, says Rethink Mental Illness.", ref: 3, picture: "calendar" }],
    },
  },
  "talking": {
    sectionRefs: [[[2], [3]], [[7, 1], [3]], [[3], [3], [3]], [[4, 5], [4], [8]], [[6], [3]]],
    helpRefs: [[3], [3], [4], [7], [3], [9, 10]],
    stats: {
      3: [{ value: "8 weeks", label: "is the length of Bipolar UK's free online self-management course.", ref: 8, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "A course of CBT for bipolar", subtitle: "Sessions people usually have", from: 5, to: 20, unit: "sessions", sources: "Source: Bipolar UK, Therapy for bipolar" },
    },
  },
  "care-team": {
    sectionRefs: [[[1, 2], [4], [2]], [[3], [4]], [[2, 5], [5], [5]], [[4], [1]], [[8, 6], [8, 2], [10]]],
    helpRefs: [[3], [2], [2, 5], [7], [4], [8, 9]],
    stats: {
      4: [{ value: "24 hours", label: "a day, A&E departments will have a psychiatrist available, says the Royal College of Psychiatrists.", ref: 2, picture: "hours" }],
    },
  },
  "warning-signs": {
    sectionRefs: [[[1], [8]], [[2], [2, 3, 4], [1]], [[5], [5]], [[6], [6], [6]], [[7], [6]]],
    helpRefs: [[2, 4], [2, 4], [7], [6], [8], [10, 11]],
    stats: {
      1: [{ value: "About 2 minutes", label: "a day is all it takes to use Bipolar UK's Mood Tracker app, says the charity.", ref: 4, picture: "hours" }],
      3: [{ value: "1 in 5", label: "people in a Bipolar UK survey said stress linked to happy events had triggered a mood episode.", ref: 6, picture: "one-in", of: 5 }],
    },
    charts: {
      2: { kind: "donut", title: "Sleep as a trigger", subtitle: "Out of every 100 people in a Bipolar UK survey of 2000 people", value: 80, subject: "people surveyed", label: "said lack of regular quality sleep was the biggest trigger for a first episode or relapse", sources: "Source: Bipolar UK, Bipolar and sleep" },
    },
  },
  "routine": {
    sectionRefs: [[[1], [4]], [[2], [2]], [[2], [2], [2]], [[1], [1, 2], [5]], [[3, 2], [3]]],
    helpRefs: [[2], [2], [2], [1], [2], [6, 7]],
    stats: {
      2: [{ value: "15 minutes", label: "awake in bed is when Bipolar UK suggests getting up to do something gentle, then trying again.", ref: 2, picture: "hours" }],
      4: [{ value: "20 minutes, three times a week", label: "of reasonably intense exercise seems to improve mood, says the Royal College of Psychiatrists.", ref: 3, picture: "calendar" }],
    },
  },
  "work-money": {
    sectionRefs: [[[1], [1]], [[1], [3]], [[1], [2]], [[4], [4, 3], [5]], [[6], [7, 8], [8]]],
    helpRefs: [[1], [1], [4], [4, 5], [7], [9, 10]],
    stats: {
      4: [{ value: "Up to £1,000", label: "is the fine for not telling the DVLA about a medical condition that affects your driving, says the government.", ref: 7 }],
    },
    charts: {
      0: {
        kind: "bars",
        title: "Bipolar and money",
        subtitle: "Out of every 100 people with bipolar in a Bipolar Commission survey",
        bars: [
          { label: "Had some form of debt due to their bipolar", value: 50 },
          { label: "Had mounting debt out of their control", value: 20 },
          { label: "Said money worries had triggered a relapse", value: 40, strong: true },
        ],
        sources: "Source: Bipolar UK, Bipolar and money (Bipolar Commission survey)",
      },
    },
  },
  "family": {
    sectionRefs: [[[1], [2, 3]], [[2], [2], [1]], [[1, 5], [3]], [[2], [2, 6]], [[2, 1], [4, 8, 7]]],
    helpRefs: [[1, 3], [1], [3], [1], [4], [9, 10]],
    stats: {
      4: [{ value: "At least an hour", label: "is how long a free carer's assessment usually lasts, says the NHS.", ref: 4, picture: "hours" }],
    },
  },
};
