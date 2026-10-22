import type { NewsExtras } from "../ischaemic-news";
// Giant cell arteritis features: paragraph references (numbers are positions in each answer's own sources in gca-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [3]], [[2], [3, 2]], [[3, 2], [2, 3, 4]], [[2, 3], [3, 5]], [[2, 3]]],
    helpRefs: [[1, 3], [1], [5], [5]],
    charts: {
      2: { kind: "range", title: "When it usually starts", subtitle: "The peak age for developing giant cell arteritis", from: 60, to: 80, unit: "years of age", sources: "Source: PMRGCAuk, What is GCA?" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [3, 4]], [[2, 4], [3, 2]], [[1, 2, 3], [3, 4]], [[1, 4, 3], [1, 2, 3], [2]], [[1, 2], [2, 4]]],
    helpRefs: [[1], [2], [2], [4]],
  },
  "urgent": {
    sectionRefs: [[[4], [3, 2]], [[2], [3, 4], [5]], [[3], [1], [7]], [[1], [2], [6]]],
    helpRefs: [[2, 3], [2], [5], [5], [1]],
    stats: {
      1: [{ value: "A few minutes", label: "is enough: sudden changes in sight need same-day attention even if they last only that long, says PMRGCAuk.", ref: 3, picture: "hours" }],
      3: [
        { value: "Same day", label: "is when you should see a hospital eye specialist if you have problems with your vision, says the NHS.", ref: 1, picture: "calendar" },
        { value: "After the first week", label: "of steroids, blindness is rare, which is why immediate treatment matters so much, says PMRGCAuk.", ref: 6, picture: "calendar" },
      ],
    },
  },
  "diagnosis": {
    sectionRefs: [[[1], [2]], [[3], [3, 4], [2]], [[1, 2], [2, 3]], [[1, 2], [2], [2]], [[2]]],
    helpRefs: [[1], [3], [2], [2]],
    stats: {
      3: [
        { value: "About 3 to 4cm", label: "is the length of the wound close to the hairline after a temporal artery biopsy, says Arthritis UK.", ref: 2 },
        { value: "About a week", label: "after the biopsy is the follow-up appointment, when the dressing comes off, says Arthritis UK.", ref: 2, picture: "calendar" },
      ],
    },
  },
  "steroids": {
    sectionRefs: [[[1, 2], [2, 7]], [[2, 1, 3], [4, 3]], [[2, 3], [4], [2]], [[5], [5], [6]], [[1, 5]]],
    helpRefs: [[5], [5], [6], [1], [2]],
    stats: {
      0: [{ value: "Within a few days", label: "steroid tablets usually start to work for giant cell arteritis, says Arthritis UK.", ref: 2, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "A higher starting dose", subtitle: "Usual starting dose of prednisolone, milligrams a day", bars: [{ label: "Polymyalgia rheumatica", value: 15 }, { label: "Giant cell arteritis", value: 40, strong: true }, { label: "With eye symptoms", value: 60, strong: true }], max: 60, ticks: [0, 20, 40, 60], unit: "mg", sources: "Source: PMRGCAuk, FAQs (Am I on the right dose of steroids?)" },
    },
  },
  "reducing": {
    sectionRefs: [[[1], [2]], [[2, 3], [2, 1]], [[3, 4], [4], [7]], [[4], [4]], [[2], [5, 6]]],
    helpRefs: [[4], [7], [4], [2]],
    stats: {
      1: [{ value: "1 to 3 years", label: "is how long it usually takes to come off steroids altogether, mostly on a low dose, says Arthritis UK.", ref: 2, picture: "calendar" }],
      2: [{ value: "1 to 2mg at a time", label: "is the most to reduce by once you get to about 10mg, in PMRGCAuk's experience.", ref: 4 }],
    },
  },
  "other-medicines": {
    sectionRefs: [[[2], [2, 4]], [[3], [3], [3]], [[2], [5]], [[1, 2], [1, 2], [6]], [[2]]],
    helpRefs: [[2, 4], [2], [3], [3], [3]],
    stats: {
      1: [
        { value: "Once a week", label: "is how often tocilizumab is injected under the skin for giant cell arteritis, says Arthritis UK.", ref: 3, picture: "calendar" },
        { value: "No more than one year", label: "is how long tocilizumab should be continued in giant cell arteritis, says Arthritis UK.", ref: 3, picture: "calendar" },
      ],
      2: [{ value: "Up to 12 weeks", label: "may pass before you notice a difference from methotrexate, says Arthritis UK.", ref: 5, picture: "calendar" }],
    },
  },
  "side-effects": {
    sectionRefs: [[[1, 2, 5], [1]], [[2], [2]], [[4], [1, 4], [8, 1, 4]], [[1, 7, 6], [3, 2]], [[1], [2, 1, 5], [2, 9]]],
    helpRefs: [[2], [1, 4], [7], [3], [1, 3], [2]],
    stats: {
      2: [{ value: "More than three months", label: "of steroid tablets makes bone loss more likely, says the Royal Osteoporosis Society.", ref: 4, picture: "calendar" }],
      3: [{ value: "Every 12 months", label: "visit an optometrist to check for glaucoma and cataracts while on prednisolone long term, says the NHS.", ref: 3, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "More calcium on steroids", subtitle: "Milligrams of calcium a day", bars: [{ label: "All adults (NHS)", value: 700 }, { label: "With GCA, aim up to", value: 1200, strong: true }], max: 1200, ticks: [0, 400, 800, 1200], unit: "mg", sources: "Sources: NHS, Preventing osteoporosis; Arthritis UK, Giant cell arteritis (700 to 1,200mg a day)" },
    },
  },
  "relapse": {
    sectionRefs: [[[1], [2, 7]], [[3], [3], [4]], [[3], [3]], [[2], [1]], [[6, 5]]],
    helpRefs: [[5], [3], [3], [3], [6]],
    stats: {
      0: [{ value: "The first 18 months", label: "of treatment is when a relapse is most common, says Arthritis UK.", ref: 1, picture: "calendar" }],
    },
  },
  "pmr-link": {
    sectionRefs: [[[1, 2], [4, 2, 6]], [[1, 2], [3, 2]], [[4], [4]], [[1], [5, 3]]],
    helpRefs: [[7], [7], [4], [4]],
    stats: {
      1: [{ value: "Up to 1 in 5", label: "people with polymyalgia rheumatica develop giant cell arteritis, says the NHS.", ref: 1, picture: "one-in", of: 5 }],
    },
    charts: {
      1: { kind: "donut", title: "The two often go together", subtitle: "People with giant cell arteritis, out of every 100", value: 50, prefix: "Up to", subject: "people with giant cell arteritis", label: "have symptoms similar to polymyalgia rheumatica at some time", sources: "Source: PMRGCAuk, What is GCA?" },
    },
  },
  "steroid-card": {
    sectionRefs: [[[1, 2, 3], [1, 4]], [[1], [7], [1, 5]], [[4], [1], [6]], [[1], [3], [4, 8]]],
    helpRefs: [[1], [3], [2], [1, 3], [6], [4]],
    stats: {
      0: [
        { value: "Longer than 3 weeks", label: "on prednisolone means you will be given a blue steroid treatment card, says the NHS.", ref: 1, picture: "calendar" },
        { value: "More than 40mg", label: "of prednisolone a day counts as a high dose for the blue steroid card, says the NHS.", ref: 1 },
      ],
      1: [{ value: "Above 15mg for 15 days", label: "of prednisolone suppresses the body's natural cortisol production, says PMRGCAuk.", ref: 7, picture: "calendar" }],
    },
  },
  "support": {
    sectionRefs: [[[7, 6], [7]], [[1], [2, 3, 4, 5]], [[8], [11]], [[10], [9], [10, 9]], [[12, 6], [6]]],
    helpRefs: [[1], [2, 3, 4], [8], [9], [12], [6]],
    stats: {
      1: [
        { value: "9am to 5pm", label: "Monday to Friday is when the PMRGCAuk helpline is open, on 0300 111 5090.", ref: 1, picture: "hours" },
        { value: "About 50 calls a month", label: "come in to the PMRGCAuk helpline, the charity says.", ref: 6 },
      ],
      3: [{ value: "Half", label: "of your earlier level of activity is a reasonable rule of thumb, says the PMRGCAuk helpline.", ref: 9, picture: "half" }],
    },
  },
};
