import type { NewsExtras } from "../ischaemic-news";
// Microscopic colitis features: paragraph references (numbers are positions in each answer's own sources in microscopic-colitis-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [3]], [[1], [1, 2]], [[1, 2], [1, 2]], [[1, 2], [2, 1]], [[1], [1, 2, 4]]],
    helpRefs: [[1], [3], [2], [1], [1]],
    stats: {
      3: [{ value: "Around 1 in 2,000", label: "people in the UK are thought to have microscopic colitis, says Crohn's & Colitis UK.", ref: 1 }],
    },
    charts: {
      3: { kind: "range", title: "When most people are diagnosed", subtitle: "Most people are diagnosed between these ages, says Guts UK", from: 50, to: 70, unit: "years of age", sources: "Source: Guts UK, Microscopic colitis" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1, 6], [1]], [[2], [3]], [[1, 2], [1, 5]], [[1, 2], [1]], [[4], [4]]],
    helpRefs: [[2], [1], [1], [3], [4]],
    stats: {
      0: [{ value: "As many as 15", label: "times during the day and night is how often some people have diarrhoea, says Crohn's & Colitis UK.", ref: 1 }],
      1: [{ value: "Up to 7 in 10", label: "people with Crohn's or Colitis have bowel incontinence and urgency at some point, says Crohn's & Colitis UK.", ref: 3 }],
    },
  },
  "causes": {
    sectionRefs: [[[1, 2], [1]], [[1], [1, 2]], [[1, 2], [1, 2], [1, 2]], [[3, 2]], [[1, 2], [1, 2]]],
    helpRefs: [[1, 2], [2], [2], [2]],
    stats: {
      1: [
        { value: "Around 1 in 4", label: "people with microscopic colitis are under 45, says Crohn's & Colitis UK.", ref: 1, picture: "one-in-four" },
        { value: "As many as 1 in 5", label: "people aged 65 or over with diarrhoea might have microscopic colitis, says Guts UK.", ref: 2, picture: "one-in", of: 5 },
      ],
    },
    charts: {
      4: { kind: "donut", title: "Often found alongside", subtitle: "People with microscopic colitis, out of every 100", value: 40, prefix: "Around", subject: "people with microscopic colitis", label: "also have an autoimmune condition (around 4 in 10)", sources: "Source: Crohn's & Colitis UK, Microscopic Colitis" },
    },
  },
  "diagnosis": {
    sectionRefs: [[[1], [1, 2]], [[1, 4], [2]], [[3, 1], [2, 4], [1, 3]], [[3], [3]], [[1, 2], [1]]],
    helpRefs: [[2], [2], [3], [3], [3], [1]],
    stats: {
      2: [{ value: "30 to 45 minutes", label: "is how long a colonoscopy should take, says the NHS.", ref: 3 }],
      4: [{ value: "1 in 10", label: "people with IBS with diarrhoea may have microscopic colitis, say Guts UK and Crohn's & Colitis UK.", ref: 2, picture: "one-in", of: 10 }],
    },
  },
  "medicines-review": {
    sectionRefs: [[[1], [2]], [[1], [1]], [[4], [3]], [[3], [3]], [[1, 5], [3, 6]]],
    helpRefs: [[2], [5], [2, 1], [3], [3], [3]],
  },
  "budesonide": {
    sectionRefs: [[[2, 3, 1], [1]], [[1], [1]], [[1], [1], [2]], [[1], [1], [1]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1], [2], [1]],
    stats: {
      2: [{ value: "9mg a day", label: "for 8 weeks is a common dose of budesonide, says Crohn's & Colitis UK.", ref: 1 }],
      4: [{ value: "3 months", label: "or more of taking steroids increases the risk of weak bones, says Crohn's & Colitis UK.", ref: 1, picture: "calendar" }],
    },
    charts: {
      1: { kind: "bars", title: "How many improved", subtitle: "People with a significant improvement in their microscopic colitis, out of every 100, in studies reported by Crohn's & Colitis UK", bars: [{ label: "Took budesonide", value: 80, strong: true }, { label: "Took a placebo", value: 26 }], sources: "Source: Crohn's & Colitis UK, Steroids" },
    },
  },
  "other-treatments": {
    sectionRefs: [[[1], [4, 5], [6, 3]], [[1], [1, 3]], [[2, 1], [2, 1]], [[1]], [[2, 7], [2, 1]]],
    helpRefs: [[3], [5], [3], [2], [1]],
    stats: {
      0: [{ value: "Within 1 hour", label: "loperamide usually starts to make diarrhoea better, says the NHS.", ref: 4, picture: "hours" }],
      1: [{ value: "Around 4 in 10", label: "people with microscopic colitis also have bile acid malabsorption, says Crohn's & Colitis UK.", ref: 1 }],
    },
  },
  "relapse": {
    sectionRefs: [[[1], [3]], [[2, 3], [3], [3, 2]], [[2], [4]], [[1], [1, 2]]],
    helpRefs: [[2], [3], [1], [1], [1]],
    charts: {
      1: { kind: "bars", title: "Staying in remission", subtitle: "People who stayed in remission, out of every 100, in 2 studies reported by Crohn's & Colitis UK", bars: [{ label: "Took budesonide", value: 75, strong: true }, { label: "Took a placebo", value: 25 }], sources: "Source: Crohn's & Colitis UK, Steroids" },
    },
  },
  "daily-life": {
    sectionRefs: [[[1], [1, 2]], [[1, 6, 2], [3]], [[1], [1]], [[1], [4], [7]], [[1, 5], [5]]],
    helpRefs: [[1], [3, 2], [1], [1], [4], [1]],
    stats: {
      0: [{ value: "Over 9,000", label: "locked public toilets around the UK can be opened with a Radar key, says Crohn's & Colitis UK.", ref: 2 }],
    },
  },
  "fluids": {
    sectionRefs: [[[3], [2, 1]], [[1, 2], [1], [2, 1, 4]], [[1], [1, 2]], [[1, 2], [2, 1]], [[2], [2]]],
    helpRefs: [[1, 3], [2], [2, 1], [2], [2]],
    stats: {
      1: [{ value: "6 to 8", label: "glasses of fluids a day is what the Eatwell Guide recommends, says Crohn's & Colitis UK.", ref: 1 }],
    },
  },
  "smoking": {
    sectionRefs: [[[1, 3], [1]], [[1], [1, 2]], [[3, 5, 1], [5]], [[1], [1]], [[4], [4]]],
    helpRefs: [[3], [5], [1, 5], [4], [4]],
    stats: {
      2: [{ value: "3 times", label: "more likely to quit for good with professional or expert help, says the NHS.", ref: 5, picture: "times" }],
      4: [{ value: "5 times", label: "more likely to quit for good if you reach 28 days smoke free, says the NHS.", ref: 4, picture: "times" }],
    },
  },
  "support": {
    sectionRefs: [[[2, 1], [3]], [[1], [1]], [[5, 1], [7]], [[1, 4], [5, 4], [4]], [[6]]],
    helpRefs: [[2], [3], [1], [5], [4]],
    stats: {
      2: [{ value: "Almost 60,000", label: "people are part of Crohn's & Colitis UK's membership community, says the charity.", ref: 7 }],
    },
  },
};
