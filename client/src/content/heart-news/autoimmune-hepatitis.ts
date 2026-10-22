import type { NewsExtras } from "../ischaemic-news";
// Autoimmune hepatitis features: paragraph references (numbers are positions in each answer's own sources in aih-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [1, 2]], [[3], [3], [3]], [[1], [2, 1]], [[3], [1, 4]], [[1], [1, 5]]],
    helpRefs: [[1], [3], [1], [1]],
    stats: {
      4: [{ value: "About 1 in 3", label: "people with autoimmune hepatitis have cirrhosis when they're diagnosed, says Liver UK.", ref: 1, picture: "one-in", of: 3 }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1, 5], [5]], [[1]], [[1, 2], [1], [4]], [[1], [1], [1]], [[3, 4], [1]]],
    helpRefs: [[1], [4], [1], [5]],
    stats: {
      0: [{ value: "Nearly a quarter", label: "of people with autoimmune hepatitis will have no symptoms, says Liver UK.", ref: 1, picture: "one-in-four" }],
    },
  },
  "tests": {
    sectionRefs: [[[1], [1]], [[1], [1, 2], [2]], [[1]], [[1, 3], [3], [1, 3]], [[3], [3], [3]]],
    helpRefs: [[1], [3, 2], [3], [3], [3]],
    stats: {
      1: [{ value: "Around 1 in 5", label: "people with autoimmune hepatitis will not test positive for SMA, says Liver UK.", ref: 2, picture: "one-in", of: 5 }],
      3: [
        { value: "Around 10 minutes", label: "is how long the liver biopsy itself usually takes, says Liver UK.", ref: 3 },
        { value: "About two weeks", label: "for the lab to look at the sample and send the results, says Liver UK.", ref: 3, picture: "calendar" },
      ],
    },
  },
  "who": {
    sectionRefs: [[[1], [2]], [[1], [4, 5]], [[3, 4], [3, 4]], [[3], [3]], [[1]]],
    helpRefs: [[6], [5], [3], [1]],
    stats: {
      1: [{ value: "A third to a half", label: "of people diagnosed have a personal or family history of other autoimmune conditions, says Liver UK.", ref: 1 }],
    },
    charts: {
      0: { kind: "donut", title: "Mostly women", subtitle: "People with autoimmune hepatitis, out of every 100", value: 80, prefix: "Around", subject: "people with autoimmune hepatitis", label: "are women (around 4 out of 5)", sources: "Source: Liver UK, Autoimmune hepatitis (AIH) in adults" },
    },
  },
  "steroids": {
    sectionRefs: [[[1], [1, 2]], [[1], [1], [1]], [[2, 3, 1], [3], [3, 5]], [[2], [4, 1]], [[1, 6], [1], [1, 7]]],
    helpRefs: [[3], [3], [1, 4], [1], [7]],
    stats: {
      3: [{ value: "More than 3 weeks", label: "on prednisolone, or a high dose, means you'll get a blue steroid card, says the NHS.", ref: 2, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "The usual daily dose", subtitle: "Prednisolone doses usually vary between these amounts a day, across the health problems it treats, says the NHS", from: 5, to: 60, unit: "mg a day", sources: "Source: NHS, How and when to take prednisolone tablets and liquid" },
    },
  },
  "azathioprine": {
    sectionRefs: [[[1], [2]], [[1], [1]], [[1], [2, 1], [2]], [[1], [1]], [[1], [1, 2]]],
    helpRefs: [[1], [2], [1], [1], [2], [1]],
    stats: {
      1: [
        { value: "At least two years", label: "is how long you are likely to take medicines, says Liver UK.", ref: 1, picture: "calendar" },
        { value: "Up to three months", label: "before you feel the benefits of azathioprine, says Liver UK.", ref: 1 },
      ],
    },
    charts: {
      2: { kind: "bars", title: "Keeping dairy apart", subtitle: "Hours to avoid milk and other dairy around each azathioprine tablet, as the NHS sets out", bars: [{ label: "Before your tablet", value: 1 }, { label: "After your tablet", value: 2, strong: true }], max: 3, ticks: [0, 1, 2, 3], unit: " hours", sources: "Source: NHS, Azathioprine" },
    },
  },
  "side-effects": {
    sectionRefs: [[[2], [1, 4]], [[1, 2], [1], [2]], [[1, 3], [3]], [[3, 4], [4]], [[2, 1], [5], [1]]],
    helpRefs: [[1], [3], [1], [5], [1], [1]],
    stats: {
      1: [{ value: "More than 1 in 100", label: "people get the common side effects of prednisolone, says the NHS.", ref: 2, picture: "one-in", of: 100 }],
      4: [
        { value: "Every 12 months", label: "visit an optometrist to check for glaucoma and cataracts on long-term prednisolone, says the NHS.", ref: 5, picture: "calendar" },
        { value: "SPF30", label: "at least, in sunscreen to protect your skin from strong sun, says Liver UK.", ref: 1 },
      ],
    },
  },
  "stopping": {
    sectionRefs: [[[1], [2]], [[1, 3], [2, 1]], [[2], [2]], [[1, 2], [4]]],
    helpRefs: [[1], [2, 3], [4], [2], [1]],
    stats: {
      0: [{ value: "At least two years", label: "of medicines is likely, and for many people treatment could be for life, says Liver UK.", ref: 1, picture: "calendar" }],
    },
    charts: {
      2: { kind: "donut", title: "Relapse is common", subtitle: "Out of every 100 people who go into remission and stop treatment", value: 70, prefix: "About", subject: "people who stop treatment in remission", label: "relapse within a year (about 7 in 10)", sources: "Source: Liver UK, Living with autoimmune hepatitis" },
    },
  },
  "infections": {
    sectionRefs: [[[1, 3, 4], [3]], [[1, 2], [5, 6], [7]], [[2, 1], [2, 3], [4, 3]], [[9], [8]]],
    helpRefs: [[1, 2], [4, 3], [1], [3], [2, 4], [1]],
    stats: {
      1: [{ value: "Every year", label: "in autumn or winter, the NHS offers the flu vaccine to people with liver disease or a weakened immune system.", ref: 5, picture: "calendar" }],
      2: [{ value: "3 to 6 months", label: "after you stop treatment, keep avoiding live vaccines, says Liver UK.", ref: 1, picture: "calendar" }],
    },
  },
  "bones": {
    sectionRefs: [[[2], [2, 4]], [[2], [2]], [[1], [3, 7], [2, 3]], [[2, 5], [5, 6, 2], [2]], [[3, 2], [3]]],
    helpRefs: [[2], [1, 3], [2], [5, 6], [2], [2]],
    stats: {
      2: [
        { value: "Every 1 to 2 years", label: "a bone density scan may be offered on long-term steroids, says Liver UK.", ref: 1, picture: "calendar" },
        { value: "10 to 20 minutes", label: "is how long a DEXA scan usually takes, says Liver UK.", ref: 3 },
      ],
      3: [
        { value: "700mg", label: "of calcium a day is what adults need, says the NHS.", ref: 5 },
        { value: "10 micrograms", label: "of vitamin D a day for all adults, says the NHS.", ref: 5 },
      ],
    },
  },
  "pregnancy": {
    sectionRefs: [[[1], [1]], [[1, 2]], [[2], [2], [2]], [[3], [1], [2, 4]]],
    helpRefs: [[1], [1], [1], [1], [2]],
    stats: {
      2: [{ value: "More than 40mg", label: "of prednisolone a day for a long time may mean extra monitoring for a breastfed baby, says the NHS.", ref: 2 }],
    },
  },
  "urgent": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[4], [5]], [[6]], [[7, 8], [9]]],
    helpRefs: [[1], [3, 4], [3], [3], [9]],
    stats: {
      4: [{ value: "9am to 4pm", label: "Monday to Friday, the Liver UK nurse-led helpline answers on 0800 652 7330, says Liver UK.", ref: 9 }],
    },
  },
};
