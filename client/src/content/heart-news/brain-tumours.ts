import type { NewsExtras } from "../ischaemic-news";
// Brain tumours features: paragraph references (numbers are positions in each answer's own sources in brain-tumours-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2], [5]], [[1], [4], [6]], [[6], [6], [4]], [[4, 1], [4]], [[5, 3], [3], [3]]],
    helpRefs: [[4], [4], [6], [6]],
    charts: {
      0: { kind: "donut", title: "About half are cancerous", subtitle: "Primary brain tumours diagnosed in the UK each year, out of every 100, as the NHS describes them", value: 50, prefix: "About", subject: "primary brain tumours", label: "are cancerous", sources: "Source: NHS, Brain tumours" },
    },
    stats: {
      0: [{ value: "More than 12,000", label: "people are diagnosed with a primary brain tumour in the UK each year, says the NHS.", ref: 1 }],
      4: [
        { value: "Over 100", label: "different types of brain tumour exist, says Cancer Research UK.", ref: 5 },
        { value: "More than half", label: "of all primary brain tumours are gliomas, says Macmillan.", ref: 3, picture: "half" },
      ],
    },
  },
  "symptoms": {
    sectionRefs: [[[2], [2]], [[5, 1], [2, 4], [2, 4]], [[2, 3], [2], [6]], [[7], [1]], [[1], [1], [4]]],
    helpRefs: [[7], [1], [1], [1], [8]],
    stats: {
      3: [{ value: "More than 2 days", label: "of vomiting is a reason to ask for an urgent GP appointment or get help from NHS 111, says the NHS.", ref: 1, picture: "calendar" }],
      4: [{ value: "5 minutes", label: "is when to call 999 for a seizure, if you do not know how long that person's seizures usually last, says the NHS.", ref: 1, picture: "hours" }],
    },
  },
  "treatments": {
    sectionRefs: [[[1], [1], [1]], [[3], [3, 7], [3]], [[4], [4], [4]], [[5], [5], [6]], [[2], [1], [8]]],
    helpRefs: [[1], [1], [3], [3], [6], [4]],
    charts: {
      2: { kind: "range", title: "How long a course of radiotherapy lasts", subtitle: "Weeks of short daily treatments, depending on the type of tumour and its size", from: 2, to: 6, unit: "weeks of radiotherapy", sources: "Source: Macmillan, Radiotherapy for a brain tumour" },
    },
    stats: {
      1: [{ value: "7 to 10 days", label: "after surgery is usually when staples or stitches are removed, says Macmillan.", ref: 3, picture: "calendar" }],
      2: [{ value: "4 to 8 weeks", label: "after radiotherapy to the brain is when extreme tiredness can come, says Macmillan.", ref: 4, picture: "calendar" }],
    },
  },
  "follow-up": {
    sectionRefs: [[[1, 2], [1], [1]], [[1], [2], [2]], [[3], [3]], [[4], [4, 3], [1]], [[2], [5]]],
    helpRefs: [[1], [2], [4], [3], [2]],
    charts: {
      1: { kind: "range", title: "How long a brain MRI scan takes", subtitle: "Minutes in the scanner, lying very still", from: 30, to: 60, unit: "minutes", sources: "Source: Macmillan, Brain tumours" },
    },
    stats: {
      3: [{ value: "1 to 2 weeks", label: "is how long scan results should take, says The Brain Tumour Charity; it can help to ask how long to expect.", ref: 4, picture: "calendar" }],
    },
  },
  "rehab": {
    sectionRefs: [[[1], [1, 3], [3]], [[1], [1]], [[2], [2], [1, 2]], [[2, 3], [1], [1]], [[1, 2], [1], [1]]],
    helpRefs: [[1], [1, 3], [1], [1], [1], [1]],
  },
  "seizures": {
    sectionRefs: [[[1, 4], [1]], [[3], [3]], [[3], [3, 4], [4]], [[5, 6], [5, 6], [5]], [[2], [2], [4]]],
    helpRefs: [[3, 4], [3], [5, 2], [5], [4], [2]],
    stats: {
      0: [{ value: "Up to 2 in 3", label: "people diagnosed with a brain tumour will have epilepsy or at least one seizure, though not everyone does, says The Brain Tumour Charity.", ref: 1 }],
      3: [
        { value: "5 minutes", label: "is when to call 999 for a seizure, if you do not know how long that person's seizures usually last, says the NHS.", ref: 5, picture: "hours" },
        { value: "3 or more", label: "seizures in 24 hours is also a reason to call 999, says the NHS.", ref: 5 },
      ],
    },
  },
  "thinking": {
    sectionRefs: [[[5, 6], [1]], [[1, 3], [3], [1, 6]], [[1], [1, 5], [7]], [[5], [2, 4], [2, 5]], [[5], [2], [5]]],
    helpRefs: [[5], [5, 4], [5], [2], [5, 1], [2]],
    stats: {
      0: [{ value: "1 in 2", label: "people The Brain Tumour Charity spoke to had memory difficulties or memory loss caused by a brain tumour or its treatment.", ref: 3, picture: "half" }],
      4: [{ value: "2 or more hours", label: "is how long a neuropsychological assessment can take, so it may need more than one appointment, says The Brain Tumour Charity.", ref: 2, picture: "hours" }],
    },
  },
  "steroids": {
    sectionRefs: [[[1], [1, 5]], [[1, 3], [3], [1, 4]], [[1], [3]], [[1], [1], [1]], [[2], [2], [2]]],
    helpRefs: [[1, 3], [1], [1], [1], [1], [2]],
    stats: {
      1: [
        { value: "Before 6pm", label: "is when to take your last dose if you take dexamethasone 2 or 3 times a day, says the NHS.", ref: 3, picture: "hours" },
        { value: "More than 3 weeks", label: "on dexamethasone, or more than 6mg a day, means you'll get a blue steroid card, says the NHS.", ref: 4, picture: "calendar" },
      ],
    },
  },
  "driving": {
    sectionRefs: [[[1], [1], [1, 2]], [[2], [2], [3]], [[5], [3], [4, 2]], [[6], [7], [3]], [[3, 4], [3], [4]]],
    helpRefs: [[1, 2], [2], [6, 1], [7], [3], [3]],
    charts: {
      2: { kind: "bars", title: "Time off driving for car and motorcycle licences", subtitle: "The longest time off driving in each of DVLA's brain tumour risk groups, in months", bars: [{ label: "Very low risk: 0 to 6 months", value: 6 }, { label: "Low risk: 6 months to 1 year", value: 12 }, { label: "High risk: 2 years", value: 24, strong: true }], max: 24, ticks: [0, 6, 12, 18, 24], unit: " months", sources: "Source: DVLA, Neurological disorders: assessing fitness to drive" },
    },
    stats: {
      0: [{ value: "Up to £1,000", label: "is the fine for not telling DVLA about a medical condition that affects your driving, says the government.", ref: 1 }],
      3: [
        { value: "3 months or more", label: "off driving on your doctor's advice means you can voluntarily surrender your licence, says the government.", ref: 6, picture: "calendar" },
        { value: "8 weeks", label: "before the end of your waiting period is the earliest you can reapply for a licence, says the government.", ref: 7, picture: "calendar" },
      ],
    },
  },
  "fatigue": {
    sectionRefs: [[[1], [4], [1]], [[1], [1]], [[3, 2], [6, 5]], [[2], [2], [2]], [[3, 2], [2], [3]]],
    helpRefs: [[3], [2], [2], [2], [3], [2]],
    charts: {
      2: { kind: "range", title: "When fatigue often improves", subtitle: "Months after treatment within which many people's fatigue begins to improve", from: 6, to: 12, unit: "months after treatment", sources: "Source: The Brain Tumour Charity, Coping with fatigue from a brain tumour" },
    },
    stats: {
      0: [{ value: "3 in 5", label: "people The Brain Tumour Charity spoke to reported feeling fatigued as a result of their brain tumour diagnosis.", ref: 1 }],
      3: [{ value: "10 minutes", label: "of rest out of every hour is the guide The Brain Tumour Charity gives for pacing, without sleeping.", ref: 2, picture: "hours" }],
    },
  },
  "personality": {
    sectionRefs: [[[1, 4], [1, 4]], [[1], [1], [1]], [[6], [6], [7, 5]], [[4, 3], [3, 1], [2]], [[8], [9, 8], [8]]],
    helpRefs: [[4], [3, 1], [6, 7], [2], [2], [9]],
    stats: {
      0: [{ value: "1 in 3", label: "people The Brain Tumour Charity spoke to had personality changes caused by a brain tumour or its treatment.", ref: 1, picture: "one-in", of: 3 }],
      2: [{ value: "9 in 10", label: "people The Brain Tumour Charity spoke to said a brain tumour diagnosis had affected their emotional or mental health.", ref: 6 }],
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 9 }],
    },
  },
  "carers": {
    sectionRefs: [[[1], [1, 2]], [[2], [3], [4]], [[1], [1], [1]], [[5], [1, 2], [1]], [[6, 7], [6], [8]]],
    helpRefs: [[1], [5], [1], [1], [4], [1]],
    stats: {
      2: [{ value: "An hour or two", label: "of break from caring every day is what The Brain Tumour Charity suggests, as part of your routine.", ref: 1, picture: "hours" }],
      3: [{ value: "Over 18", label: "and caring for someone? You can ask your council for a free carer's assessment, says the NHS.", ref: 5 }],
    },
  },
};
