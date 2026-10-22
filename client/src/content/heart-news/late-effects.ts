import type { NewsExtras } from "../ischaemic-news";
// Late effects of cancer treatment features: paragraph references (numbers are positions in each answer's own sources in late-effects-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-they-are": {
    sectionRefs: [[[1], [2], [1]], [[3], [4], [3]], [[1], [3]], [[1], [1]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1], [3], [3]],
    stats: {
      0: [{ value: "Over 3 months", label: "is how long an effect that began during or shortly after treatment has lasted when Macmillan calls it long-term.", ref: 2, picture: "calendar" }],
      2: [{ value: "More than a year", label: "is how long tiredness after chemotherapy can last for some people, says Cancer Research UK.", ref: 3, picture: "calendar" }],
    },
  },
  "which-treatments": {
    sectionRefs: [[[1], [1], [2]], [[3], [3], [4, 3]], [[5], [6]], [[7], [6, 8], [5, 6]], [[5], [1], [3, 5]]],
    helpRefs: [[2], [8], [3], [3], [5]],
  },
  "heart": {
    sectionRefs: [[[1], [2], [1]], [[1], [3], [1]], [[1], [2, 1], [1]], [[4], [1], [4, 1]], [[1], [1], [5, 1]]],
    helpRefs: [[1], [1], [4], [1], [1], [1, 3]],
    stats: {
      3: [{ value: "999", label: "is the number to phone for an ambulance straight away if you think you or someone else may be having a heart attack, says Macmillan.", ref: 1 }],
      4: [{ value: "0808 802 1234", label: "is the free British Heart Foundation Heart Helpline, open Monday to Friday, 9am to 5pm.", ref: 3 }],
    },
  },
  "bones-hormones": {
    sectionRefs: [[[1], [1], [4]], [[2], [3], [3]], [[5], [5], [6]], [[1], [7], [1]], [[8], [8], [1]]],
    helpRefs: [[1, 2], [3], [6], [5], [8], [8]],
    charts: {
      1: { kind: "donut", title: "Why hormone therapy is so common", subtitle: "Breast cancers, out of every 100, that are oestrogen-receptor positive, as the Royal Osteoporosis Society states", value: 80, prefix: "About", subject: "breast cancers", label: "are oestrogen-receptor positive, and their treatment includes hormone therapy", sources: "Source: Royal Osteoporosis Society, Breast cancer treatments" },
      3: { kind: "range", title: "How long a DEXA scan takes", subtitle: "Minutes for a bone density scan, as Cancer Research UK and the NHS describe it", from: 10, to: 20, unit: "minutes", sources: "Sources: Cancer Research UK, Bone density scan (DEXA, DXA); NHS, Osteoporosis" },
    },
    stats: {
      4: [
        { value: "700mg", label: "of calcium a day is what UK public health bodies recommend for most adults, says Macmillan.", ref: 8 },
        { value: "10 micrograms", label: "of vitamin D a day, as a supplement in autumn and winter, is what guidelines suggest, says Macmillan.", ref: 8 },
      ],
    },
  },
  "bowel-bladder": {
    sectionRefs: [[[1], [2], [3]], [[2], [2], [2, 3]], [[4], [4], [4]], [[4, 3], [4, 1], [4]], [[2], [2]]],
    helpRefs: [[2], [2], [4], [1], [4], [2]],
    stats: {
      1: [{ value: "4 symptoms", label: "to always talk to your doctor about: blood from the back passage, waking at night to open your bowels, needing to rush, and bowel incontinence, says Macmillan.", ref: 2 }],
    },
    charts: {
      2: { kind: "range", title: "How much to drink", subtitle: "Litres of fluid a day, unless your healthcare team tells you differently", from: 1, to: 2, unit: "litres a day", sources: "Source: Macmillan, Managing bowel late effects" },
    },
  },
  "nerves": {
    sectionRefs: [[[1], [2], [1]], [[1], [2, 1], [3]], [[1], [1]], [[1], [1, 2], [1]], [[1], [1, 2], [1]]],
    helpRefs: [[1], [4], [1, 2], [1], [1], [1]],
    stats: {
      2: [{ value: "Several months or longer", label: "is how long nerves may take to recover once the drug causing the damage is stopped, says Macmillan.", ref: 1, picture: "calendar" }],
    },
  },
  "checks": {
    sectionRefs: [[[1], [1], [1]], [[2], [2]], [[3], [3]], [[4], [5]], [[1], [2], [1]]],
    helpRefs: [[5], [1], [2], [3], [1], [1]],
    stats: {
      0: [{ value: "Every few months", label: "is how often follow-up appointments may happen in the first year after treatment, becoming less often over time, says Macmillan.", ref: 1, picture: "calendar" }],
      4: [{ value: "Within 12 months", label: "of diagnosis is when a cancer care review is usually done, though you can ask for one at any point, says Macmillan.", ref: 1, picture: "calendar" }],
    },
  },
  "second-cancers": {
    sectionRefs: [[[1], [2], [3]], [[4], [2, 1]], [[5], [5, 6], [5]], [[7, 8], [8]]],
    helpRefs: [[1, 2], [5], [5, 6], [5], [7], [8]],
  },
  "healthy-living": {
    sectionRefs: [[[1], [2]], [[3], [3], [4]], [[1], [1]], [[1], [1], [1]], [[5, 1], [1]]],
    helpRefs: [[1], [1], [1], [1], [1], [1]],
    charts: {
      1: { kind: "bars", title: "Building up to the weekly amount", subtitle: "Minutes of activity that raises the heart rate, as Macmillan suggests", bars: [{ label: "One short period", value: 10 }, { label: "A day: three short periods", value: 30 }, { label: "A week: five such days", value: 150, strong: true }], max: 150, ticks: [0, 50, 100, 150], unit: " minutes", sources: "Source: Macmillan, Keeping your bones healthy" },
    },
    stats: {
      3: [
        { value: "4 times", label: "more likely to quit smoking with specialist support from a stop smoking service and products or medicines, says Macmillan.", ref: 1, picture: "times" },
        { value: "14 units", label: "of alcohol a week, at most, spread over 3 or more days, is what NHS guidelines suggest, says Macmillan.", ref: 1 },
      ],
    },
  },
  "telling-doctors": {
    sectionRefs: [[[1], [2]], [[3], [4], [3]], [[1], [5], [6]], [[7], [8]], [[7], [4]]],
    helpRefs: [[1], [2], [3, 4], [1], [3], [7, 8]],
  },
  "treatment-summary": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[1], [1, 2]], [[1, 3], [1], [3]], [[2], [1]]],
    helpRefs: [[1], [2], [3], [2], [1]],
    stats: {
      3: [{ value: "1 to 10", label: "is the scale you may be asked to rate your concerns on in a Holistic Needs Assessment, where 10 is the most important, says Macmillan.", ref: 3 }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [2, 3]], [[4], [4]], [[5], [5], [5]], [[5], [6, 7], [1]], [[5, 10], [8, 9], [8]]],
    helpRefs: [[4], [5], [5], [7, 5], [10], [8]],
    stats: {
      2: [{ value: "More than 2 weeks", label: "of low feelings is the time to talk to your doctor or nurse, says Macmillan.", ref: 5, picture: "calendar" }],
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 10 }],
    },
  },
};
