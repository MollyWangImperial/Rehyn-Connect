import type { NewsExtras } from "../ischaemic-news";
// Polymyalgia rheumatica features: paragraph references (numbers are positions in each answer's own sources in pmr-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [3, 1]], [[1], [4]], [[2], [1]], [[1, 5], [1, 3, 4]], [[1]]],
    helpRefs: [[1], [6], [6], [6]],
    stats: {
      1: [{ value: "Over 65", label: "is the age of most people diagnosed with polymyalgia rheumatica, says the NHS. It is very rare under 50.", ref: 1 }],
      4: [{ value: "Up to 1 in 5", label: "people with polymyalgia rheumatica develop giant cell arteritis, says the NHS.", ref: 1, picture: "one-in", of: 5 }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [2, 3]], [[1, 4], [2]], [[3], [2]], [[1, 3], [2]], [[1], [1]]],
    helpRefs: [[1], [5], [2], [1]],
    stats: {
      1: [{ value: "About 45 minutes", label: "after waking is when morning stiffness usually starts to improve, says the NHS.", ref: 1, picture: "hours" }],
      4: [{ value: "More than a week", label: "of pain and stiffness is the time to see a GP, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "diagnosis": {
    sectionRefs: [[[1], [2, 3]], [[1, 3], [1]], [[1], [1, 2], [4]], [[1], [1]], [[2], [4]]],
    helpRefs: [[5], [6], [7]],
    stats: {
      3: [
        { value: "More than 2 weeks", label: "of symptoms is one part of the checklist used to diagnose polymyalgia rheumatica, says the NHS.", ref: 1, picture: "calendar" },
        { value: "Over 50", label: "years of age is another part of the same checklist, says the NHS.", ref: 1 },
      ],
    },
  },
  "gca": {
    sectionRefs: [[[2], [6, 3, 7]], [[1, 6], [1, 3], [2, 5]], [[1, 2], [3], [4]], [[2, 3, 7], [2]], [[2, 3], [2]]],
    helpRefs: [[8], [1], [3, 4], [4], [2]],
    stats: {
      0: [{ value: "Up to 1 in 5", label: "people with polymyalgia rheumatica develop giant cell arteritis, says the NHS.", ref: 6, picture: "one-in", of: 5 }],
      3: [{ value: "Same day", label: "is when you should see a hospital eye specialist if you have problems with your vision, says the NHS.", ref: 2, picture: "calendar" }],
    },
    charts: {
      0: { kind: "donut", title: "The two often go together", subtitle: "People with giant cell arteritis, out of every 100", value: 50, prefix: "Up to", subject: "people with giant cell arteritis", label: "have symptoms similar to polymyalgia rheumatica at some time", sources: "Source: PMRGCAuk, What is GCA?" },
    },
  },
  "steroids": {
    sectionRefs: [[[1], [1, 7]], [[1, 2], [5, 8]], [[1, 5], [6]], [[1, 3], [3]], [[4], [1]]],
    helpRefs: [[3], [3], [4], [1], [1, 6]],
    stats: {
      1: [{ value: "Within two weeks", label: "symptoms improve significantly once steroid treatment starts, says Arthritis UK.", ref: 2, picture: "calendar" }],
      2: [{ value: "15mg a day", label: "is the usual recommended starting dose of prednisolone for polymyalgia rheumatica, says PMRGCAuk.", ref: 5 }],
    },
  },
  "reducing": {
    sectionRefs: [[[2, 1], [2]], [[7, 1], [4]], [[2], [3]], [[4, 3], [3]], [[2], [5, 6]]],
    helpRefs: [[3], [8], [3], [2], [1]],
    stats: {
      0: [{ value: "Every 1 to 2 months", label: "is how often the dose is usually reduced if symptoms are well controlled, says the NHS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      1: { kind: "donut", title: "A longer road for some", subtitle: "People with polymyalgia rheumatica, out of every 100", value: 25, subject: "people with polymyalgia rheumatica", label: "are still on steroids after 4 years, research shows", sources: "Source: PMRGCAuk, What is PMR?" },
    },
  },
  "side-effects": {
    sectionRefs: [[[2, 1], [1, 2]], [[1], [1]], [[3, 2, 6], [4, 3], [3]], [[1], [3]], [[2], [8, 6, 7]]],
    helpRefs: [[2], [2], [5], [3], [3], [2]],
    stats: {
      1: [{ value: "About 1 in 20", label: "people experience changes in their mental state when they take prednisolone, says the NHS.", ref: 1, picture: "one-in", of: 20 }],
      2: [{ value: "Every 12 months", label: "visit an optometrist to check for glaucoma and cataracts while on prednisolone long term, says the NHS.", ref: 3, picture: "calendar" }],
    },
  },
  "relapse": {
    sectionRefs: [[[1], [2]], [[1, 2], [3], [1]], [[3, 4], [4]], [[1], [2]], [[5], [6]]],
    helpRefs: [[1], [2], [3], [5], [3]],
    stats: {
      1: [{ value: "Every few weeks", label: "for the first 3 months, then at least every 3 months in the first year, is how often follow-ups are usually recommended, says the NHS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      0: { kind: "donut", title: "Sometimes a longer road", subtitle: "People with polymyalgia rheumatica, out of every 100", value: 25, prefix: "About", subject: "people with polymyalgia rheumatica", label: "are likely to have a more complicated form that takes longer to get over", sources: "Source: PMRGCAuk, FAQs" },
    },
  },
  "steroid-card": {
    sectionRefs: [[[1], [2, 4]], [[1, 4], [2], [5]], [[2], [2, 3]], [[5], [6]], [[1, 2], [4]]],
    helpRefs: [[1], [1], [2, 4], [3], [5]],
    stats: {
      0: [
        { value: "Longer than 3 weeks", label: "on steroids, or a high dose, means you should be given a steroid card, says the NHS.", ref: 1, picture: "calendar" },
        { value: "More than 40mg", label: "of prednisolone a day counts as a high dose for the blue steroid card, says the NHS.", ref: 2 },
      ],
    },
  },
  "activity": {
    sectionRefs: [[[1], [2]], [[2], [2], [2]], [[1, 3], [3]], [[1], [5]], [[1], [1, 4]]],
    helpRefs: [[2], [3, 1], [1], [1], [1], [4]],
    stats: {
      0: [{ value: "Half", label: "of your earlier level of activity is a reasonable rule of thumb, says the PMRGCAuk helpline.", ref: 2, picture: "half" }],
      1: [{ value: "A few minutes", label: "of walking at a brisker pace is a start, says a physiotherapist advising PMRGCAuk.", ref: 2, picture: "hours" }],
    },
  },
  "bones": {
    sectionRefs: [[[1], [1]], [[1, 2], [2, 6], [1]], [[2], [3, 2]], [[1, 5], [2, 3, 7]]],
    helpRefs: [[1], [2, 5], [2, 3, 4], [3], [1], [3, 2]],
    stats: {
      0: [{ value: "More than 3 months", label: "of steroid tablets makes bone loss more likely, says the Royal Osteoporosis Society.", ref: 1, picture: "calendar" }],
      2: [{ value: "10 micrograms", label: "of vitamin D a day is what all adults should have, says the NHS.", ref: 3 }],
    },
    charts: {
      2: { kind: "bars", title: "More calcium on steroids", subtitle: "Milligrams of calcium a day", bars: [{ label: "All adults (NHS)", value: 700 }, { label: "On steroids, aim up to", value: 1200, strong: true }], max: 1200, ticks: [0, 400, 800, 1200], unit: "mg", sources: "Sources: NHS, Preventing osteoporosis; Arthritis UK, Polymyalgia rheumatica (700 to 1,200mg on steroids)" },
    },
  },
  "daily-life": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[3, 10], [4, 8]], [[5], [5, 6]], [[7, 9], [1]]],
    helpRefs: [[2], [1, 3, 10], [1, 4], [1, 8], [5], [6]],
    stats: {
      0: [{ value: "About 50 calls a month", label: "come in to the PMRGCAuk helpline, the charity says.", ref: 1 }],
      1: [{ value: "9am to 5pm", label: "Monday to Friday is when the PMRGCAuk helpline is open, on 0300 111 5090.", ref: 2, picture: "hours" }],
    },
  },
};
