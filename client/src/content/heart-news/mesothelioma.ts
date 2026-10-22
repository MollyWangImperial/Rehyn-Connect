import type { NewsExtras } from "../ischaemic-news";
// Mesothelioma features: paragraph references (numbers are positions in each answer's own sources in mesothelioma-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 2, 3], [2, 3]], [[3], [3]], [[3], [3], [3, 4]], [[2, 3, 5], [4], [3]], [[6], [6]]],
    helpRefs: [[3], [7], [7], [8], [2]],
    charts: {
      2: { kind: "bars", title: "Where mesothelioma starts", subtitle: "Mesotheliomas in the UK, out of every 100, by where they start", bars: [{ label: "In the chest (pleural)", value: 95, strong: true }, { label: "In the tummy (peritoneal)", value: 4 }], sources: "Source: Cancer Research UK, Mesothelioma" },
    },
    stats: {
      3: [{ value: "More than 2,700", label: "people in the UK are diagnosed with mesothelioma each year, says Macmillan.", ref: 2 }],
    },
  },
  "asbestos": {
    sectionRefs: [[[2, 3], [1, 2]], [[2], [3]], [[2], [2, 3], [2]], [[2, 1], [4]], [[2], [2, 3]]],
    helpRefs: [[4], [4], [3], [3], [5]],
    charts: {
      1: { kind: "donut", title: "The main cause", subtitle: "Cases of mesothelioma, out of every 100, caused by asbestos, as Macmillan states", value: 90, prefix: "Over", subject: "cases of mesothelioma", label: "are caused by exposure to asbestos fibres", sources: "Source: Macmillan, Causes and risk factors of mesothelioma" },
      3: { kind: "range", title: "A long delay", subtitle: "How long mesothelioma can take to develop after exposure to asbestos", from: 15, to: 60, unit: "years after exposure", sources: "Sources: NHS, Causes of mesothelioma; Macmillan, Causes and risk factors of mesothelioma" },
    },
  },
  "treatments": {
    sectionRefs: [[[2, 3, 1], [2]], [[1, 5], [4], [5]], [[6], [7]], [[1, 8], [3, 2]], [[9], [1, 3]]],
    helpRefs: [[1], [5], [5], [9], [2], [10]],
    stats: {
      1: [
        { value: "Up to 2 years", label: "is how long you usually carry on having immunotherapy if it is controlling the mesothelioma, says Cancer Research UK.", ref: 4, picture: "calendar" },
        { value: "Every 3 weeks", label: "you have nivolumab, and ipilimumab once every 6 weeks, says Cancer Research UK.", ref: 4, picture: "calendar" },
      ],
    },
  },
  "tests": {
    sectionRefs: [[[1, 3], [3, 1]], [[1], [3], [4]], [[2, 3], [3], [3]], [[5, 3], [2]], [[2], [2]]],
    helpRefs: [[1, 3], [3], [3], [2], [2], [2]],
    stats: {
      1: [{ value: "5 to 10 minutes", label: "is how long a CT scan usually takes, and it is painless, says Macmillan.", ref: 3, picture: "hours" }],
      3: [{ value: "Several weeks", label: "is how long it can take to get the results of your tests, says the NHS.", ref: 2, picture: "calendar" }],
    },
  },
  "breathlessness": {
    sectionRefs: [[[1, 2], [3]], [[2, 1], [2, 4]], [[4, 2], [1]], [[1], [3], [1]], [[3], [3, 2]]],
    helpRefs: [[1, 3], [3], [3], [3], [3], [3]],
    stats: {
      1: [{ value: "1 litre", label: "(about 2 pints) of fluid may be drained safely as soon as the drain is in; after that it is drained more slowly, says Macmillan.", ref: 2 }],
      2: [{ value: "About an hour", label: "is how long the drain is clamped after the talc goes in, to let the 2 linings stick together, says Macmillan.", ref: 2, picture: "hours" }],
    },
  },
  "pain": {
    sectionRefs: [[[1], [2]], [[2], [2, 1]], [[1], [1], [3]], [[3], [3]], [[1], [2, 1]]],
    helpRefs: [[1], [2], [1], [3], [3], [2]],
    stats: {
      3: [{ value: "Every 24 hours", label: "a nurse usually changes the syringe in a syringe pump, says Macmillan.", ref: 3, picture: "hours" }],
      4: [{ value: "1 to 2 weeks", label: "is how long a hospice stay to get pain and other symptoms treated may last, says Macmillan.", ref: 2, picture: "calendar" }],
    },
  },
  "fatigue": {
    sectionRefs: [[[1], [2]], [[1], [1, 2], [3]], [[1], [1], [2]], [[2], [2]], [[2], [2]]],
    helpRefs: [[1], [1], [1], [2], [2], [2]],
    stats: {
      3: [{ value: "1 month", label: "of energy levels can be recorded in Macmillan's fatigue diary, to share with your healthcare team.", ref: 2, picture: "calendar" }],
      4: [{ value: "0 to 10", label: "is the scale your specialist nurse may ask you to score your fatigue on, where 10 is the worst possible fatigue, says Macmillan.", ref: 2 }],
    },
  },
  "palliative": {
    sectionRefs: [[[1], [2]], [[3], [2]], [[1], [4]], [[3, 1], [1], [4]], [[5], [6, 7]]],
    helpRefs: [[1], [1], [8], [5], [7, 6], [9]],
    stats: {
      3: [{ value: "0800 169 2409", label: "is the free Mesothelioma UK number to ask for a call back from a mesothelioma clinical nurse specialist.", ref: 1 }],
    },
  },
  "compensation": {
    sectionRefs: [[[1], [2]], [[3], [1, 3], [3, 2]], [[3, 6], [4], [4]], [[1, 7], [1, 5], [1, 6]], [[1], [1, 5]]],
    helpRefs: [[1], [1], [2], [1], [1], [1]],
    stats: {
      2: [
        { value: "Within 12 months", label: "of diagnosis is when claims to the 2008 scheme must be made, says the government.", ref: 4, picture: "calendar" },
        { value: "Within 3 years", label: "of diagnosis is when claims to the Diffuse Mesothelioma Payment Scheme must be made, says the government.", ref: 4, picture: "calendar" },
      ],
    },
  },
  "eating": {
    sectionRefs: [[[1, 4], [1, 3]], [[1, 2], [2]], [[1], [3, 2]], [[3], [3]], [[1], [1]]],
    helpRefs: [[1], [2], [1], [3], [1], [1]],
  },
  "family": {
    sectionRefs: [[[1], [2]], [[2], [2], [2]], [[3], [4, 5], [2]], [[1], [6]], [[7], [2]]],
    helpRefs: [[2], [2], [3], [4], [1], [7]],
    stats: {
      2: [
        { value: "At least 35 hours", label: "a week of caring is needed to claim Carer's Allowance, says the government.", ref: 4, picture: "hours" },
        { value: "Over 18", label: "and caring for someone? You can ask your council for a free carer's assessment, says the NHS.", ref: 3 },
      ],
    },
  },
  "mood": {
    sectionRefs: [[[1], [2]], [[2], [3]], [[4], [4], [4]], [[5, 6, 1], [2]], [[4, 8], [7], [7]]],
    helpRefs: [[2], [3], [2], [4], [8], [7]],
    stats: {
      2: [{ value: "More than 2 weeks", label: "of low feelings is the time to talk to your doctor or nurse, says Macmillan.", ref: 4, picture: "calendar" }],
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 8 }],
    },
  },
};
