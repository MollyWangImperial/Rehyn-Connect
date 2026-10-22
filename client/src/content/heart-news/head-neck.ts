import type { NewsExtras } from "../ischaemic-news";
// Head and neck cancer features: paragraph references (numbers are positions in each answer's own sources in head-neck-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-you-had": {
    sectionRefs: [[[1, 2], [1]], [[1, 3], [3], [4]], [[5], [5, 1], [5]], [[6], [7, 1], [7]], [[1], [1]]],
    helpRefs: [[8], [1], [4], [7], [1]],
    charts: {
      2: { kind: "range", title: "How long radiotherapy takes", subtitle: "Weeks of radiotherapy for head and neck cancer, depending on the type and size of the cancer", from: 4, to: 7, unit: "weeks", sources: "Source: Macmillan, Radiotherapy for head and neck cancer" },
    },
    stats: {
      3: [{ value: "Up to 2 years", label: "after treatment finishes, immunotherapy can rarely cause immune side effects, so contact your team straight away if you think you have one, says Macmillan.", ref: 7, picture: "calendar" }],
    },
  },
  "types": {
    sectionRefs: [[[1], [2, 1], [1]], [[3, 1], [1]], [[4], [1, 4], [1]], [[5, 6], [5, 6]], [[1], [1], [4]]],
    helpRefs: [[1], [1], [2], [7], [7]],
    charts: {
      0: { kind: "donut", title: "The most common type", subtitle: "Head and neck cancers, out of every 100", value: 90, prefix: "About", subject: "head and neck cancers", label: "start in squamous cells, which line the inside of the mouth, nose and throat", sources: "Source: Macmillan, Head and neck cancer" },
    },
    stats: {
      0: [{ value: "About 12,200", label: "people are diagnosed with head and neck cancer in the UK every year, including cancer of the voice box, says Macmillan.", ref: 1 }],
      3: [{ value: "Around 2,360", label: "people in the UK are diagnosed with cancer of the voice box each year, says Macmillan.", ref: 6 }],
    },
  },
  "follow-up": {
    sectionRefs: [[[1], [2]], [[1, 3], [3, 1]], [[1, 3], [1], [4, 1]], [[1, 3], [2], [5]], [[1, 3], [1, 3]]],
    helpRefs: [[6], [1], [2], [1], [1], [5]],
    stats: {
      1: [
        { value: "Every 2 months", label: "is how often check-ups usually are in the first 2 years, as a general guide, says Cancer Research UK.", ref: 1, picture: "calendar" },
        { value: "At least 5 years", label: "is how long people with head and neck cancers are generally followed up, says Cancer Research UK.", ref: 3, picture: "calendar" },
      ],
    },
    charts: {
      2: { kind: "range", title: "Thyroid levels after radiotherapy", subtitle: "People with low thyroid hormone levels after radiotherapy, out of every 100, as Cancer Research UK gives it", from: 10, to: 40, sources: "Source: Cancer Research UK, Follow up for mouth and oropharyngeal cancer" },
    },
  },
  "hpv": {
    sectionRefs: [[[1], [2, 1], [3, 1]], [[3], [2], [4]], [[2], [5], [4]], [[4, 3], [3]], [[6], [6]]],
    helpRefs: [[4, 5], [3], [3], [6], [6]],
    stats: {
      0: [
        { value: "Around 80 in 100", label: "people will be infected with HPV at some time in their life, says Cancer Research UK.", ref: 2 },
        { value: "Within 2 years", label: "the body usually clears an HPV infection, says the NHS.", ref: 1, picture: "calendar" },
      ],
    },
    charts: {
      1: { kind: "donut", title: "Half linked to HPV", subtitle: "Oropharyngeal cancers in the UK, out of every 100", value: 50, prefix: "Around", subject: "oropharyngeal cancers in the UK", label: "are caused by HPV, a much stronger link than for mouth cancers", sources: "Source: Cancer Research UK, Risks and causes of mouth and oropharyngeal cancer" },
    },
  },
  "swallowing": {
    sectionRefs: [[[1, 2], [2], [2]], [[2], [3]], [[2], [2], [2]], [[2], [2], [2]], [[2], [4, 5]]],
    helpRefs: [[2], [2], [2], [2], [2], [5]],
    stats: {
      2: [{ value: "About 30 minutes", label: "is how long a videofluoroscopy swallowing x-ray takes, and it is painless, says Macmillan.", ref: 2, picture: "hours" }],
      4: [{ value: "24/7", label: "The Swallows support line for patients and carers is open day and night on 07504 725 059.", ref: 5 }],
    },
  },
  "dry-mouth": {
    sectionRefs: [[[1], [1, 2], [1, 3]], [[1], [1], [1, 4]], [[1], [1]], [[5, 3], [3], [3]], [[3], [6], [6]]],
    helpRefs: [[1], [1, 4], [5], [3], [3], [1]],
    stats: {
      1: [{ value: "Up to 5 hours", label: "of relief from dryness at night may come from artificial saliva gel on the tongue and inside the mouth, says Macmillan.", ref: 1, picture: "hours" }],
      3: [{ value: "2 to 3 minutes", label: "of brushing every morning and night, with a high-fluoride toothpaste, is what Macmillan suggests.", ref: 3, picture: "hours" }],
    },
    charts: {
      3: { kind: "range", title: "How often to see the dentist", subtitle: "Months between check-ups with a dentist or dental hygienist after head and neck cancer treatment", from: 3, to: 6, unit: "months", sources: "Source: Macmillan, Late effects of head and neck cancer treatment" },
    },
  },
  "speech": {
    sectionRefs: [[[1], [2, 1], [1]], [[1, 2], [1, 2]], [[1], [1], [1]], [[3], [3, 4], [3]], [[1], [1], [1, 2]]],
    helpRefs: [[1], [1], [1], [1, 2], [1], [2]],
  },
  "eating": {
    sectionRefs: [[[1], [1], [2]], [[2], [2, 1], [3]], [[2, 4], [2], [3]], [[1], [5, 1]], [[2], [2, 6]]],
    helpRefs: [[1], [1], [3], [5], [2], [2]],
    stats: {
      0: [{ value: "A year or more", label: "is sometimes how long taste takes to return after treatment, though it usually improves gradually, says Macmillan.", ref: 2, picture: "calendar" }],
      3: [{ value: "3 fingers", label: "should fit upright between your front teeth. If only 1 or 2 fit, you may have trismus, says Macmillan.", ref: 5 }],
    },
  },
  "appearance": {
    sectionRefs: [[[1], [2], [1]], [[1], [3], [3]], [[1], [1, 4], [1]], [[1, 3], [1], [2]], [[3], [1]]],
    helpRefs: [[1], [1], [1], [1], [3], [3]],
  },
  "smoking-alcohol": {
    sectionRefs: [[[1, 11], [2, 3], [4]], [[5, 6], [7, 5]], [[3], [7, 8], [9]], [[7], [7], [8, 10]], [[10], [10]]],
    helpRefs: [[3], [7], [9], [7], [8, 10], [10]],
    charts: {
      0: { kind: "bars", title: "Mouth cancers linked to smoking and alcohol", subtitle: "Mouth cancers in the UK, out of every 100, caused by each, as research cited by Cancer Research UK suggests", bars: [{ label: "Caused by smoking", value: 17 }, { label: "Caused by alcohol", value: 35, strong: true }], sources: "Source: Cancer Research UK, Risks and causes of mouth and oropharyngeal cancer" },
      2: { kind: "bars", title: "Support makes quitting likelier", subtitle: "How likely you are to quit with specialist stop smoking support, compared with without it", bars: [{ label: "Without specialist support", value: 1 }, { label: "With specialist support", value: 4, strong: true }], max: 4, ticks: [0, 1, 2, 3, 4], unit: "×", sources: "Source: Macmillan, Lifestyle and well-being after treatment" },
    },
    stats: {
      3: [{ value: "14 units", label: "a week at most, spread over 3 or more days, is the NHS guideline Macmillan gives.", ref: 7 }],
    },
  },
  "work": {
    sectionRefs: [[[1, 2], [1]], [[3], [3, 4], [3]], [[5], [5, 6], [5]], [[7], [7]], [[8], [8], [8, 9]]],
    helpRefs: [[3], [3], [5], [6, 5], [7], [8]],
    stats: {
      0: [{ value: "From diagnosis", label: "you meet the definition of disability under the Equality Act 2010 if you have cancer, says the government.", ref: 2, picture: "calendar" }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[4], [4], [2]], [[2], [5, 4], [4, 6]], [[4, 7], [8], [8]]],
    helpRefs: [[2], [4], [6, 4], [5], [7], [8]],
    stats: {
      2: [{ value: "More than 2 weeks", label: "of low feelings is the time to talk to your doctor or nurse, says Macmillan.", ref: 4, picture: "calendar" }],
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 7 }],
    },
  },
};
