import type { NewsExtras } from "../ischaemic-news";
// Ulcerative colitis features: paragraph references (numbers are positions in each answer's own sources in colitis-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [3, 2]], [[1], [2, 1], [2]], [[2], [2], [2]], [[1], [2]], [[2], [2]]],
    helpRefs: [[1], [1], [2], [2], [2]],
    stats: {
      2: [
        { value: "At least 1 in 233", label: "people in the UK live with ulcerative colitis, says Crohn's & Colitis UK.", ref: 2 },
        { value: "As many as 1 in 10", label: "people with ulcerative colitis have their diagnosis changed to Crohn's or IBD Unclassified in the first five years, says Crohn's & Colitis UK.", ref: 2, picture: "one-in", of: 10 },
      ],
    },
    charts: {
      2: { kind: "range", title: "When most people are diagnosed", subtitle: "The ages at which most people are diagnosed with ulcerative colitis, says Crohn's & Colitis UK", from: 20, to: 40, unit: "years of age", sources: "Source: Crohn's & Colitis UK, Ulcerative Colitis" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [1], [1]], [[2], [4]], [[3], [3], [2]], [[1], [1], [2]], [[1], [2]]],
    helpRefs: [[1], [2, 3], [2], [2], [1]],
    stats: {
      2: [{ value: "More than 5 times", label: "in 24 hours going for a poo, or more than is normal for you, can be a sign of a flare-up, says Crohn's & Colitis UK.", ref: 3 }],
      3: [{ value: "As many as 1 in 5", label: "people with Colitis develop problems in other parts of the body, says Crohn's & Colitis UK.", ref: 2, picture: "one-in", of: 5 }],
    },
  },
  "extent": {
    sectionRefs: [[[1], [2]], [[1], [1], [1]], [[1], [1]], [[1], [1]], [[1, 2], [3]]],
    helpRefs: [[4, 1], [5], [3], [3]],
    stats: {
      0: [{ value: "1 in 20", label: "people with ulcerative colitis have no inflammation in the rectum, says Guts UK.", ref: 2, picture: "one-in", of: 20 }],
      3: [{ value: "1 in 10", label: "people with proctitis will later develop Colitis that affects most of their colon, says Crohn's & Colitis UK.", ref: 1, picture: "one-in", of: 10 }],
    },
  },
  "tests": {
    sectionRefs: [[[1, 2], [5]], [[5], [4, 2], [2]], [[3, 4], [5], [1, 4]], [[3], [3], [3, 2]], [[2], [2]]],
    helpRefs: [[3], [3], [3, 2], [2], [5]],
    stats: {
      3: [{ value: "30 to 45 minutes", label: "is how long a colonoscopy should take, says the NHS.", ref: 3 }],
      4: [{ value: "Within 3 weeks", label: "you should receive a report of your endoscopy results, says Crohn's & Colitis UK.", ref: 2, picture: "calendar" }],
    },
  },
  "medicines": {
    sectionRefs: [[[1], [8]], [[3], [3], [3]], [[2, 4], [2, 4]], [[2, 5], [6], [5, 6]], [[2, 7], [2], [2]]],
    helpRefs: [[2], [4], [7], [2], [3]],
    stats: {
      3: [{ value: "Around 6 in 10", label: "people with Crohn's or Colitis take azathioprine or mercaptopurine at some point, says Crohn's & Colitis UK.", ref: 5 }],
    },
    charts: {
      1: { kind: "bars", title: "How oral 5-ASAs compared with a placebo", subtitle: "People with at least some improvement after 6 to 12 weeks, out of every 100, in a research review reported by Crohn's & Colitis UK", bars: [{ label: "Oral 5-ASA", value: 56, strong: true }, { label: "Placebo (no medicine)", value: 35 }], sources: "Source: Crohn's & Colitis UK, 5-ASAs (aminosalicylates)" },
    },
  },
  "flares": {
    sectionRefs: [[[1, 2], [2]], [[1], [1], [2]], [[1], [1], [2]], [[1], [3]], [[1], [2]]],
    helpRefs: [[1], [2], [1], [1], [1], [1]],
    stats: {
      0: [{ value: "More than 3 days", label: "of loose poo or diarrhoea with blood or mucus can be a sign of a flare-up, says Crohn's & Colitis UK.", ref: 1, picture: "calendar" }],
    },
  },
  "severe": {
    sectionRefs: [[[1], [1], [1]], [[1], [1]], [[2], [2], [2]], [[3], [3], [4]], [[3], [3, 1]]],
    helpRefs: [[1], [1], [1], [1], [2]],
    stats: {
      3: [{ value: "Around 1 in 3", label: "people with acute severe ulcerative colitis are not helped by steroids, says Crohn's & Colitis UK.", ref: 4, picture: "one-in", of: 3 }],
    },
  },
  "surgery": {
    sectionRefs: [[[1], [3, 2], [3, 2]], [[1], [1], [6, 2]], [[4], [3], [5]], [[5], [5], [5]], [[2], [2], [2, 1]]],
    helpRefs: [[2], [2], [2], [5], [5], [5]],
    stats: {
      3: [{ value: "6 to 8 weeks", label: "is how long it usually takes to recover from an ileostomy and get back to usual activities, says the NHS.", ref: 5, picture: "calendar" }],
      4: [{ value: "Around half", label: "of people with pouch surgery get pouchitis at some point, says Crohn's & Colitis UK.", ref: 2, picture: "half" }],
    },
    charts: {
      0: { kind: "bars", title: "Fewer people now need surgery", subtitle: "People with Colitis who need major surgery to remove the colon, out of every 100, by time since diagnosis", bars: [{ label: "In the first 5 years", value: 7 }, { label: "Within 10 years", value: 10, strong: true }], max: 20, ticks: [0, 5, 10, 15, 20], unit: " in 100", sources: "Source: Crohn's & Colitis UK, Surgery for Ulcerative Colitis" },
    },
  },
  "food": {
    sectionRefs: [[[3], [3]], [[1], [1], [1, 2]], [[2], [1]], [[1], [1]], [[3], [4], [1]]],
    helpRefs: [[2], [1], [1, 2], [1], [4, 1]],
    stats: {
      1: [{ value: "6 to 8", label: "cups or glasses of fluid a day is the aim, says Crohn's & Colitis UK.", ref: 1 }],
      4: [{ value: "Around 1 in 3", label: "people with Colitis have low iron levels, says Crohn's & Colitis UK.", ref: 3, picture: "one-in", of: 3 }],
    },
  },
  "work-travel": {
    sectionRefs: [[[1], [1, 5]], [[1], [1, 2], [2]], [[3], [3, 5], [3]], [[4], [4], [4]], [[4], [3]]],
    helpRefs: [[1], [1, 2], [3], [3], [4], [4]],
    stats: {
      3: [{ value: "At least 6 to 8 weeks", label: "before you travel abroad, see your GP or a travel clinic, says Crohn's & Colitis UK.", ref: 4, picture: "calendar" }],
      4: [{ value: "At least 3 months", label: "of Colitis under control makes you more likely to stay well on your trip, says Crohn's & Colitis UK.", ref: 4, picture: "calendar" }],
    },
    charts: {
      2: { kind: "donut", title: "Common, and often hidden", subtitle: "People with Crohn's or Colitis, out of every 100", value: 70, prefix: "Up to", subject: "people with Crohn's or Colitis", label: "are affected by bowel incontinence and urgency (up to 7 in 10)", sources: "Source: Crohn's & Colitis UK, Bowel incontinence and urgency" },
    },
  },
  "mood-fatigue": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[1], [1]], [[3], [2], [2]], [[3, 5, 2], [3, 4], [2]]],
    helpRefs: [[1], [1], [2], [5, 2], [3], [2]],
    stats: {
      3: [{ value: "Twice as likely", label: "to have mental health problems like anxiety and depression, research suggests, says Crohn's & Colitis UK.", ref: 2, picture: "times" }],
    },
    charts: {
      0: { kind: "bars", title: "Fatigue in flare-ups and calmer times", subtitle: "People with Crohn's or Colitis who have fatigue, out of every 100, as Crohn's & Colitis UK reports", bars: [{ label: "During a flare-up", value: 70, strong: true }, { label: "In remission", value: 40 }], sources: "Source: Crohn's & Colitis UK, Fatigue" },
    },
  },
  "checks": {
    sectionRefs: [[[2], [3]], [[1], [1], [1]], [[1], [1], [1]], [[1], [1]], [[2, 4], [6], [5]]],
    helpRefs: [[2], [1], [1], [2, 4], [6, 5]],
    stats: {
      2: [{ value: "About 8 years", label: "after symptoms started is when the first surveillance colonoscopy is usually offered, says Crohn's & Colitis UK.", ref: 1, picture: "calendar" }],
    },
    charts: {
      1: { kind: "bars", title: "The risk rises slowly with time", subtitle: "People with ulcerative colitis or Crohn's colitis who might develop bowel cancer, out of every 100, by years of symptoms", bars: [{ label: "After 10 years", value: 1 }, { label: "After 20 years", value: 2 }, { label: "After more than 20 years", value: 5, strong: true }], max: 10, ticks: [0, 5, 10], unit: " in 100", sources: "Source: Crohn's & Colitis UK, Risk of bowel cancer and other gut-related cancers" },
    },
  },
};
