import type { NewsExtras } from "../ischaemic-news";
// Addison's disease features: paragraph references (numbers are positions in each answer's own sources in addisons-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [3, 2]], [[3], [3, 4]], [[1, 2], [2], [1, 2]], [[2, 1], [3, 2]], [[3], [3]]],
    helpRefs: [[1], [1], [1], [1], [1]],
    stats: {
      3: [
        { value: "About 8,400", label: "people in the UK have Addison's disease, says NHS inform.", ref: 2 },
        { value: "2 to 3 times", label: "more women than men get Addison's disease, says the Addison's Disease Self-Help Group.", ref: 3, picture: "times" },
      ],
    },
    charts: {
      2: { kind: "range", title: "When the immune system is the cause", subtitle: "UK cases of Addison's disease caused by a problem with the immune system, out of every 100", from: 70, to: 90, sources: "Source: NHS inform, Addison's disease" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1, 2], [2, 1]], [[2], [2, 1]], [[1, 2], [1, 3, 4]], [[1, 2], [1]]],
    helpRefs: [[1], [3, 4], [2], [1]],
    stats: {
      0: [{ value: "30 to 50", label: "is the age range in which Addison's disease most commonly affects adults, says the NHS.", ref: 1 }],
    },
  },
  "diagnosis": {
    sectionRefs: [[[2], [2]], [[2], [4]], [[1], [1, 2, 3], [3]], [[2, 3], [1, 2]], [[2]]],
    helpRefs: [[1], [2], [4], [1]],
    stats: {
      2: [{ value: "30 and 60 minutes", label: "after the Synacthen injection, more blood samples are taken for cortisol, says NHS inform.", ref: 2 }],
    },
    charts: {
      1: { kind: "bars", title: "Reading a morning cortisol test", subtitle: "8am to 9am cortisol levels for people aged 16 and over, in nmol/L, as NICE sets them out", bars: [{ label: "Below this, it may be adrenal insufficiency", value: 150 }, { label: "Above this, it is very unlikely", value: 300, strong: true }], max: 400, ticks: [0, 100, 200, 300, 400], unit: " nmol/L", sources: "Source: NICE, Adrenal insufficiency: identification and management (NG243)" },
    },
  },
  "crisis": {
    sectionRefs: [[[1, 3], [1, 3]], [[2], [1, 4]], [[2], [1, 2], [2]], [[2, 5], [2]], [[3]]],
    helpRefs: [[3], [2], [1], [2], [3], [3]],
    stats: {
      2: [{ value: "100mg", label: "of hydrocortisone is the emergency injection to give in an adrenal crisis, says the Addison's Disease Self-Help Group.", ref: 2 }],
    },
    charts: {
      4: { kind: "donut", title: "A risk every year", subtitle: "People with Addison's disease, out of every 100", value: 8, prefix: "Around", subject: "people with Addison's disease", label: "have an adrenal crisis each year", sources: "Source: Addison's Disease Self-Help Group, What is adrenal crisis" },
    },
  },
  "tablets": {
    sectionRefs: [[[1], [1, 3]], [[3], [2, 4], [2]], [[3], [3, 7, 6]], [[3], [5, 8]], [[2], [3]]],
    helpRefs: [[1], [2], [2], [2], [4], [3]],
    stats: {
      1: [
        { value: "2 or 3 times a day", label: "is how often standard hydrocortisone tablets are usually taken, says the NHS.", ref: 2 },
        { value: "20 to 30 minutes", label: "for a hydrocortisone tablet to start being absorbed from the stomach, says the Addison's Disease Self-Help Group.", ref: 4 },
      ],
    },
  },
  "sick-day-rules": {
    sectionRefs: [[[5, 1], [1, 3]], [[1, 4], [3, 2]], [[1], [1], [1]], [[2, 1], [1]], [[1], [1]]],
    helpRefs: [[1], [2], [1], [1], [1], [1]],
    stats: {
      2: [{ value: "48 hours", label: "of extra doses at first, then back to your usual dose if you feel better, says the Addison's Disease Self-Help Group.", ref: 1, picture: "hours" }],
      3: [{ value: "30 minutes", label: "is the window: if you vomit within it after a dose, NICE says take a double dose once the vomiting stops.", ref: 2 }],
      4: [{ value: "3 months", label: "of steroid medicine to keep in reserve at all times, says the Addison's Disease Self-Help Group.", ref: 1, picture: "calendar" }],
    },
  },
  "injection": {
    sectionRefs: [[[4], [1, 6]], [[2], [1, 3], [1, 6]], [[3], [1, 5], [4, 3]], [[5], [5]], [[2, 1], [1]]],
    helpRefs: [[1], [1, 5], [5], [2], [1], [4]],
    stats: {
      1: [{ value: "2 or 3", label: "emergency kits should be given to people with primary adrenal insufficiency, says NICE.", ref: 2 }],
      3: [{ value: "Twice a year", label: "at least, practise the injection, on 1 March and 1 September, says the Addison's Disease Self-Help Group.", ref: 5, picture: "calendar" }],
    },
    charts: {
      3: { kind: "bars", title: "Injecting early keeps people out of hospital", subtitle: "People admitted to hospital after an adrenal crisis, out of every 100, from research the Addison's Disease Self-Help Group cites", bars: [{ label: "Injected themselves", value: 38, strong: true }, { label: "Waited for a healthcare professional", value: 73 }], sources: "Source: Addison's Disease Self-Help Group, Injection training" },
    },
  },
  "operations": {
    sectionRefs: [[[4, 1], [3]], [[4, 5], [2], [3]], [[6], [6], [6]], [[6], [7]]],
    helpRefs: [[7], [4], [2], [6], [6], [6]],
    stats: {
      1: [{ value: "60 minutes", label: "before a minor procedure, an extra dose by mouth is still recommended, says the Addison's Disease Self-Help Group.", ref: 5 }],
    },
    charts: {
      2: { kind: "donut", title: "The dentist's chair counts", subtitle: "Steroid-dependent people surveyed in 2013, out of every 100", value: 8, subject: "steroid-dependent people surveyed", label: "said a dental procedure had triggered an adrenal crisis", sources: "Source: Addison's Disease Self-Help Group, Advice for dentists" },
    },
  },
  "card": {
    sectionRefs: [[[1], [3, 5]], [[2, 4], [5, 6], [4, 2]], [[1, 4], [4], [4]], [[7], [8]]],
    helpRefs: [[1], [4], [4], [2], [8]],
  },
  "exercise-heat": {
    sectionRefs: [[[4, 1], [1]], [[1], [5], [1]], [[2], [2], [2]], [[4, 3], [3], [3]]],
    helpRefs: [[1], [1], [1], [2], [2], [4, 3]],
    stats: {
      3: [{ value: "6 grams", label: "of salt a day, the amount recommended for healthy people, is too little for people with Addison's disease, says the Addison's Disease Self-Help Group.", ref: 3 }],
    },
  },
  "travel": {
    sectionRefs: [[[1, 3], [2], [2]], [[1, 2], [1]], [[3, 1], [1], [4]], [[2], [2, 1]], [[2], [2]]],
    helpRefs: [[3], [3, 1], [1], [2], [4], [2]],
    stats: {
      0: [{ value: "Double", label: "your usual medicine is what to pack for a trip, plus your injection kit, says NHS inform.", ref: 3 }],
      1: [{ value: "More than 20", label: "languages: the adrenal crisis guidelines you can print and take abroad, from the Addison's Disease Self-Help Group.", ref: 1 }],
      4: [{ value: "Within 30 minutes", label: "of starting to vomit is when to use your injection, then get medical help, says the Addison's Disease Self-Help Group.", ref: 2 }],
    },
  },
  "energy": {
    sectionRefs: [[[1], [1, 2]], [[3, 2], [3, 2, 1]], [[1, 2, 5], [4, 6], [5, 6, 9]], [[7], [7, 8]]],
    helpRefs: [[3], [4], [4, 5], [4], [5], [6, 7]],
    stats: {
      1: [{ value: "Every 6 to 12 months", label: "is how often you will usually see an endocrinologist, says NHS inform.", ref: 2, picture: "calendar" }],
      2: [{ value: "Up to 1 in 6", label: "adrenal crises have emotional stress reported as the trigger, says the Addison's Disease Self-Help Group.", ref: 4, picture: "one-in", of: 6 }],
    },
  },
};
