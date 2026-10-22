import type { NewsExtras } from "../ischaemic-news";
// Perimenopause and mood features: paragraph references (numbers are positions in each answer's own sources in perimenopause-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-happens": {
    sectionRefs: [[[1], [1, 3], [1, 2]], [[3, 4], [5]], [[4], [5]], [[4], [6]]],
    helpRefs: [[4], [4], [4], [5], [7, 8]],
    charts: {
      0: { kind: "range", title: "When it usually happens", subtitle: "The ages at which menopause usually affects women, though it can happen earlier", from: 45, to: 55, unit: "years of age", sources: "Source: NHS, What are menopause and perimenopause?" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1, 2], [5, 4]], [[1, 2], [4]], [[1], [1]], [[1], [1], [3]], [[4]]],
    helpRefs: [[3], [3], [1], [3], [6, 7]],
    charts: {
      0: { kind: "donut", title: "Irritability is common", subtitle: "People going through perimenopause and menopause, out of every 100, according to studies Mental Health UK cites", value: 70, prefix: "Up to", subject: "people", label: "experience irritability during this time", sources: "Source: Mental Health UK, Menopause and mental health" },
    },
    stats: {
      3: [{ value: "7 to 9 years", label: "is how long menopause symptoms usually last, sometimes longer, and they can change during this time, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "or-depression": {
    sectionRefs: [[[1], [1, 4], [9]], [[3, 2], [2]], [[4], [7], [4]], [[5], [6, 5], [3]]],
    helpRefs: [[2], [4], [4], [8], [10, 11]],
    charts: {
      0: { kind: "donut", title: "A common experience", subtitle: "Perimenopausal women, out of every 100 (more than half), according to research The Menopause Charity cites", value: 50, prefix: "More than", subject: "perimenopausal women", label: "report an increase in depressive symptoms", sources: "Source: The Menopause Charity, Menopause and mental health" },
    },
    stats: {
      1: [{ value: "More than 2 weeks", label: "of symptoms of depression for most of the day, every day, is when to see a GP, says the NHS.", ref: 2, picture: "calendar" }],
    },
  },
  "getting-help": {
    sectionRefs: [[[1], [6], [8]], [[2], [3, 9]], [[4], [4, 6]], [[4, 7], [6]], [[4], [5]]],
    helpRefs: [[4, 5], [4], [4], [4], [5], [10, 11]],
    charts: {
      0: {
        kind: "bars",
        title: "What people link with the menopause",
        subtitle: "UK adults, out of every 100, who associate each one with the menopause, in a YouGov poll for the Royal College of Psychiatrists",
        bars: [
          { label: "Hot flushes", value: 81 },
          { label: "Changes in mood", value: 74 },
          { label: "Reduced sex drive", value: 64 },
          { label: "A new mental illness", value: 21, strong: true },
        ],
        sources: "Source: Royal College of Psychiatrists, press release of 1 March 2026",
      },
    },
  },
  "hrt": {
    sectionRefs: [[[1], [3]], [[1, 2], [4, 7], [8]], [[5], [1], [1]], [[2], [2], [1]], [[6, 1], [6, 5]]],
    helpRefs: [[3], [1], [6], [1], [5], [9, 10]],
    stats: {
      2: [{ value: "3 months", label: "after starting HRT is when a GP will usually review how well it is working, then usually once a year, says the NHS.", ref: 1, picture: "calendar" }],
      3: [{ value: "Around 5 in 1,000", label: "is the number of extra breast cancer cases among women who take combined HRT for 5 years, says the NHS. Oestrogen-only HRT brings little or no increase.", ref: 2 }],
    },
  },
  "talking": {
    sectionRefs: [[[1], [2]], [[3], [3], [6]], [[3], [2]], [[6], [7, 4]], [[4, 5], [4], [8]]],
    helpRefs: [[4, 5], [2], [3, 2], [3], [4], [9, 10]],
    charts: {
      2: { kind: "range", title: "A course of CBT", subtitle: "Sessions of CBT people usually have, depending on what they are having it for", from: 5, to: 15, unit: "sessions", sources: "Source: NHS, Cognitive behavioural therapy (CBT)" },
    },
    stats: {
      4: [{ value: "18 or over", label: "is the age to refer yourself to NHS talking therapies, or 16 or over in some areas, says the NHS.", ref: 4 }],
    },
  },
  "other-medicines": {
    sectionRefs: [[[1, 2], [1]], [[1, 2], [7, 6], [4, 2]], [[1, 2], [3]], [[1], [5], [5]], [[4], [4]]],
    helpRefs: [[1, 2], [4], [4], [4], [5], [8, 9]],
    stats: {
      1: [{ value: "Up to 8 weeks", label: "for an antidepressant to work fully, though it usually starts having an effect in 1 to 2 weeks, says the NHS.", ref: 4, picture: "calendar" }],
      2: [{ value: "2 to 4 weeks", label: "is how long clonidine may take before you notice its effect on hot flushes and night sweats, says the NHS.", ref: 2, picture: "calendar" }],
    },
  },
  "sleep": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[3], [4], [5]], [[6, 7], [8], [4]]],
    helpRefs: [[3], [6, 4], [4], [3], [4], [9, 10]],
    stats: {
      1: [{ value: "16 to 18°C", label: "may seem cold, but is the ideal bedroom temperature for sleeping, says NHS inform.", ref: 3 }],
      2: [{ value: "6 hours", label: "before bed is how long to avoid alcohol, tea or coffee, says the NHS.", ref: 4, picture: "hours" }],
    },
  },
  "exercise-food": {
    sectionRefs: [[[1], [3]], [[1], [3, 2, 1], [4, 7]], [[1], [3, 2, 4]], [[1, 5], [1, 3], [6]]],
    helpRefs: [[1], [1], [1], [3, 2], [1], [8, 9]],
    stats: {
      3: [{ value: "14 units", label: "a week is the most to drink on a regular basis, spread over 3 or more days, says the NHS.", ref: 5 }],
    },
  },
  "work": {
    sectionRefs: [[[2, 1], [1], [2]], [[1], [3], [8]], [[3, 5], [1], [6]], [[4], [4, 7]]],
    helpRefs: [[1], [1], [3, 1], [3, 6], [9, 10]],
    charts: {
      0: {
        kind: "bars",
        title: "Menopause and work",
        subtitle: "Women, out of every 100, in a British Menopause Society survey of 1,000 UK adults",
        bars: [
          { label: "Felt symptoms had a negative impact on their work", value: 45, strong: true },
          { label: "Needed a day off for symptoms and would not give the real reason", value: 47 },
        ],
        sources: "Source: NHS inform, Menopause and the workplace",
      },
    },
    stats: {
      0: [{ value: "14 million", label: "working days a year is what the menopause costs the UK economy, in time spent easing symptoms, says the Royal College of Psychiatrists.", ref: 8, picture: "calendar" }],
      1: [{ value: "Just 1 in 4", label: "UK women surveyed for the Royal College of Psychiatrists feel comfortable speaking to a male boss about the menopause.", ref: 8, picture: "one-in", of: 4 }],
    },
  },
  "relationships": {
    sectionRefs: [[[1], [5]], [[2], [5]], [[4], [4], [1, 4]], [[3], [3]], [[6, 7]]],
    helpRefs: [[2], [5], [4], [7], [8, 9]],
    stats: {
      2: [{ value: "2 years", label: "after your final period is how long you still need contraception if you are 40 to 49, or 1 year if you are 50 or over, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "urgent": {
    sectionRefs: [[[3], [2]], [[1], [1]], [[1], [4]], [[5, 2, 6], [1]], [[2], [2], [1, 7]]],
    helpRefs: [[2], [2], [2], [1, 2], [1, 2]],
    stats: {
      3: [{ value: "24 hours", label: "a day, every day, the Shout text line is open, says the NHS. Samaritans can be called free on 116 123 any time, day or night.", ref: 2, picture: "hours" }],
    },
  },
};
