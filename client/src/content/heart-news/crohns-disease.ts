import type { NewsExtras } from "../ischaemic-news";
// Crohn's disease features: paragraph references (numbers are positions in each answer's own sources in crohns-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[2], [2]], [[2], [1, 3]], [[3, 2], [2]], [[2], [2]]],
    helpRefs: [[1], [3], [3], [1], [1, 2]],
    stats: {
      3: [
        { value: "1 in every 650", label: "people are affected by Crohn's disease, says Guts UK.", ref: 3 },
        { value: "Before 30", label: "is when Crohn's is most commonly diagnosed, though it can be diagnosed at any age, says Crohn's & Colitis UK.", ref: 2 },
      ],
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [2, 5], [1]], [[1], [2]], [[2], [2, 3]], [[1, 2], [2]], [[1], [3], [4]]],
    helpRefs: [[1], [2], [2], [1], [3]],
    stats: {
      0: [{ value: "Nearly 7 in 10", label: "people with Crohn's or Colitis reported having urgency in one study, says Crohn's & Colitis UK.", ref: 5 }],
      3: [{ value: "Around 1 in 3", label: "people with Crohn's develop a fistula, says Crohn's & Colitis UK.", ref: 2, picture: "one-in", of: 3 }],
    },
    charts: {
      2: { kind: "donut", title: "Beyond the gut", subtitle: "People with Crohn's, out of every 100", value: 50, prefix: "Up to", subject: "people with Crohn's", label: "develop problems in other parts of the body (up to 1 in 2)", sources: "Source: Crohn's & Colitis UK, Crohn's Disease" },
    },
  },
  "causes": {
    sectionRefs: [[[1], [2], [2]], [[1, 2], [3], [2]], [[2], [1, 2]], [[4], [4]], [[5], [5]]],
    helpRefs: [[1], [4], [1], [3], [5]],
    stats: {
      1: [
        { value: "More than 200", label: "genetic variations that affect the risk of developing Crohn's have been identified, says Crohn's & Colitis UK.", ref: 2 },
        { value: "About one-fifth", label: "of people with Crohn's disease have a family member also affected, says Guts UK.", ref: 3 },
      ],
    },
    charts: {
      1: { kind: "bars", title: "When a parent has it", subtitle: "Children who might develop Crohn's or Colitis, out of every 100", bars: [{ label: "One parent has Crohn's", value: 5 }, { label: "Both parents have Crohn's or Colitis, up to", value: 30, strong: true }], sources: "Source: Crohn's & Colitis UK, Crohn's Disease" },
    },
  },
  "tests": {
    sectionRefs: [[[1], [3]], [[2], [2, 3]], [[4, 2], [2]], [[1, 2], [2]], [[1], [2]]],
    helpRefs: [[3], [3], [2, 4], [4], [2]],
    stats: {
      1: [{ value: "Above 100", label: "micrograms of calprotectin per gram of poo is usually considered a raised level, says Crohn's & Colitis UK.", ref: 3 }],
      2: [{ value: "30 to 45 minutes", label: "is how long a colonoscopy should take, says the NHS.", ref: 4 }],
      4: [{ value: "Within 3 weeks", label: "you should receive your endoscopy report; biopsy results can take up to 2 months, says Crohn's & Colitis UK.", ref: 2, picture: "calendar" }],
    },
  },
  "medicines": {
    sectionRefs: [[[2], [2]], [[2, 3], [3], [3]], [[2], [4, 5]], [[2, 6], [6]], [[3, 4, 6], [2, 1]]],
    helpRefs: [[2], [3], [3], [4, 5], [3, 2]],
    stats: {
      2: [
        { value: "3 months or more", label: "is how long azathioprine and mercaptopurine can take to start working, says Crohn's & Colitis UK.", ref: 4, picture: "calendar" },
        { value: "Around 6 in 10", label: "people with Crohn's or Colitis take azathioprine or mercaptopurine at some point, says Crohn's & Colitis UK.", ref: 4 },
      ],
      3: [{ value: "At least once a year", label: "your IBD team should review a biologic or targeted treatment, says Crohn's & Colitis UK.", ref: 6, picture: "calendar" }],
    },
    charts: {
      1: { kind: "bars", title: "How well prednisolone works", subtitle: "People with Crohn's under control after up to 17 weeks, out of every 100, in two large studies", bars: [{ label: "Took prednisolone", value: 60, strong: true }, { label: "Took a placebo", value: 31 }], sources: "Source: Crohn's & Colitis UK, Steroids" },
    },
  },
  "surgery": {
    sectionRefs: [[[1, 2], [2], [2]], [[1, 2], [2]], [[1, 2], [2, 3]], [[2], [2]], [[2], [2, 4]]],
    helpRefs: [[2], [4], [2], [2], [2], [2]],
    stats: {
      0: [{ value: "Around 1 in 5", label: "people with Crohn's need major surgery to remove part of their bowel in the first 5 years after diagnosis, says Crohn's & Colitis UK.", ref: 2, picture: "one-in", of: 5 }],
      3: [{ value: "7 to 10 days", label: "is the usual hospital stay for the common operations, says Crohn's & Colitis UK.", ref: 2 }],
      4: [{ value: "Almost 9 in 10", label: "people said they would have an ileocaecal resection again, in one study reported by Crohn's & Colitis UK.", ref: 2 }],
    },
  },
  "flares": {
    sectionRefs: [[[1], [2, 1]], [[2], [1], [2]], [[1], [1], [3]], [[1], [4], [1]], [[1, 2], [1, 2]]],
    helpRefs: [[2], [2], [1], [1], [1], [1]],
    stats: {
      0: [{ value: "More than 5 times", label: "going for a poo in 24 hours, or more than is normal for you, can be a sign of a flare-up, says Crohn's & Colitis UK.", ref: 1 }],
    },
  },
  "nutrition": {
    sectionRefs: [[[1], [2]], [[1, 2], [2, 3]], [[2], [2]], [[2], [2, 3]], [[3], [2]]],
    helpRefs: [[1], [1, 2], [1], [2], [2]],
    stats: {
      1: [{ value: "Up to 1 in 4", label: "people with Crohn's or Colitis say they avoid eating out or social events that involve food, says Crohn's & Colitis UK.", ref: 2, picture: "one-in", of: 4 }],
      3: [
        { value: "Within 10 days", label: "a liquid-only diet can help improve symptoms, says Crohn's & Colitis UK.", ref: 2 },
        { value: "6 to 8 weeks", label: "is how long a liquid-only diet takes to heal the lining of the gut, says Crohn's & Colitis UK.", ref: 2, picture: "calendar" },
      ],
    },
  },
  "fatigue": {
    sectionRefs: [[[1], [1]], [[1], [2]], [[1], [1]], [[1], [1]], [[1], [1, 3]]],
    helpRefs: [[1], [1], [1], [1], [1], [1]],
    stats: {
      2: [{ value: "Around 1 in 3", label: "people with Crohn's or Colitis have anaemia, says Crohn's & Colitis UK.", ref: 1, picture: "one-in", of: 3 }],
    },
    charts: {
      1: { kind: "bars", title: "Fatigue in flare-ups and remission", subtitle: "People with Crohn's or Colitis who have fatigue, out of every 100", bars: [{ label: "During a flare-up, around", value: 70, strong: true }, { label: "In remission, around", value: 40 }], sources: "Source: Crohn's & Colitis UK, Fatigue" },
    },
  },
  "work-study": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[2], [2]], [[3, 4], [4]], [[5], [6, 7]]],
    helpRefs: [[1], [1, 2], [3, 4], [4], [5, 7]],
    stats: {
      0: [{ value: "More than 1 in 3", label: "people with Crohn's or Colitis considered themselves disabled in a 2019 survey, says Crohn's & Colitis UK.", ref: 8 }],
      1: [{ value: "More than 7 days", label: "off sick means you will need a fit note, says Crohn's & Colitis UK.", ref: 1, picture: "calendar" }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [1]], [[1], [1, 3]], [[1], [1]], [[1, 4], [1]], [[1], [1], [5]]],
    helpRefs: [[1], [1], [1, 4], [1], [1], [1]],
    stats: {
      0: [{ value: "Twice as likely", label: "to experience anxiety and depression, research suggests, for people with Crohn's or Colitis, says Crohn's & Colitis UK.", ref: 1, picture: "times" }],
      3: [{ value: "Up to 3 in 10", label: "people with Crohn's or Colitis take antidepressant medicines, says Crohn's & Colitis UK.", ref: 1 }],
    },
    charts: {
      0: { kind: "donut", title: "A common experience", subtitle: "People with Crohn's or Colitis, out of every 100", value: 50, prefix: "Around", subject: "people with Crohn's or Colitis", label: "say it has affected their mental health (around half)", sources: "Source: Crohn's & Colitis UK, Mental health and wellbeing" },
    },
  },
  "checks": {
    sectionRefs: [[[1, 2], [3, 4]], [[1], [5]], [[6], [2]], [[6, 7], [7, 8], [7]], [[2], [5, 3]]],
    helpRefs: [[3], [5, 9], [2], [8], [7], [3]],
    stats: {
      2: [{ value: "About 8 years", label: "after symptoms start is when a first check colonoscopy may be offered, says Crohn's & Colitis UK.", ref: 2, picture: "calendar" }],
      3: [
        { value: "700 mg", label: "of calcium a day from the diet is what the NHS recommends for adults aged 19 to 64, says Crohn's & Colitis UK.", ref: 7 },
        { value: "Almost half", label: "of people with Crohn's or Colitis have osteopenia, a mild loss of bone density, research suggests, says Crohn's & Colitis UK.", ref: 7, picture: "half" },
      ],
    },
  },
};
