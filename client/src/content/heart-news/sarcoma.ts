import type { NewsExtras } from "../ischaemic-news";
// Sarcoma features: paragraph references (numbers are positions in each answer's own sources in sarcoma-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[3], [4]], [[5], [5], [4, 8]], [[4, 6], [7, 4]], [[2], [2]]],
    helpRefs: [[4], [8], [9], [6], [4]],
    stats: {
      0: [{ value: "Around 100", label: "subtypes of sarcoma sit within the two main types, soft tissue and bone, says Sarcoma UK.", ref: 2 }],
    },
    charts: {
      2: { kind: "bars", title: "Two of the bone sarcomas", subtitle: "Share of all bone sarcoma diagnoses, out of every 100, as Sarcoma UK gives them", bars: [{ label: "Ewing sarcoma", value: 14, strong: true }, { label: "Chordoma", value: 6 }], sources: "Source: Sarcoma UK, Types of sarcoma" },
    },
  },
  "specialist-centres": {
    sectionRefs: [[[1, 2], [3]], [[3], [4, 3]], [[5], [5], [5]], [[5], [5]], [[6], [5]]],
    helpRefs: [[5], [5], [5], [3], [7]],
    stats: {
      2: [{ value: "Once a week", label: "is how often the sarcoma MDT usually meets, though this can be different in some hospitals, says Sarcoma UK.", ref: 5, picture: "calendar" }],
    },
    charts: {
      1: { kind: "bars", title: "Sarcoma specialist centres in the UK", subtitle: "Number of specialist centres, as Sarcoma UK lists them", bars: [{ label: "Bone sarcoma centres", value: 5 }, { label: "Soft tissue sarcoma centres", value: 17, strong: true }], max: 20, ticks: [0, 5, 10, 15, 20], unit: " centres", sources: "Source: Sarcoma UK, Sarcoma specialist centres" },
    },
  },
  "treatments": {
    sectionRefs: [[[1], [2]], [[1], [3], [4]], [[5], [5], [5]], [[1], [6], [4, 1]], [[7], [7], [4]]],
    helpRefs: [[2], [7], [5], [7], [1], [4]],
    stats: {
      2: [{ value: "About 6 weeks", label: "is how long a course of radiotherapy for an early-stage cancer usually lasts, given Monday to Friday, says Macmillan.", ref: 5, picture: "calendar" }],
    },
    charts: {
      2: { kind: "range", title: "Each radiotherapy treatment", subtitle: "Minutes each daily treatment usually takes, says Macmillan", from: 10, to: 15, unit: "minutes each treatment", sources: "Source: Macmillan, Radiotherapy for soft tissue sarcoma" },
    },
  },
  "follow-up": {
    sectionRefs: [[[1], [2]], [[1, 5], [1, 3], [2]], [[2, 4], [2], [1, 4]], [[1, 5], [1], [2]], [[1], [2]]],
    helpRefs: [[3], [1], [1], [1], [2]],
    stats: {
      2: [
        { value: "Every 3 to 4 months", label: "is usual routine follow-up for the first 2 to 3 years after an intermediate or high grade sarcoma, says Cancer Research UK.", ref: 2, picture: "calendar" },
        { value: "Up to 5 years", label: "of check-ups every 6 months usually follow, then yearly appointments, says Cancer Research UK.", ref: 2, picture: "calendar" },
      ],
    },
  },
  "physio": {
    sectionRefs: [[[1], [1]], [[1], [1], [1]], [[2], [3], [2]], [[2, 4], [2], [3]], [[1], [4], [4]]],
    helpRefs: [[1], [2], [1], [4], [4], [1]],
    stats: {
      4: [{ value: "6 to 12 weeks", label: "is how long exercise on referral sessions at local gyms usually last, depending on the gym, says Sarcoma UK.", ref: 4, picture: "calendar" }],
    },
  },
  "limb-surgery": {
    sectionRefs: [[[1], [1], [1]], [[1], [2], [3]], [[4, 5], [6], [7]], [[6], [6, 7], [8, 7]], [[7, 6], [8], [10, 9]]],
    helpRefs: [[1], [6], [7], [7], [8], [9]],
    stats: {
      4: [{ value: "1 to 2 years", label: "is how long rehabilitation after sarcoma surgery can often last, depending on the type of surgery, says Sarcoma UK.", ref: 9, picture: "calendar" }],
    },
    charts: {
      3: { kind: "range", title: "Going home after an amputation", subtitle: "Days after the operation that most people go home, though it is different for everyone, says Sarcoma UK", from: 10, to: 14, unit: "days after the amputation", sources: "Source: Sarcoma UK, Amputation" },
    },
  },
  "wound": {
    sectionRefs: [[[1], [1], [2]], [[3], [3]], [[3], [4, 5], [6]], [[3], [7]], [[3], [8], [9, 10]]],
    helpRefs: [[3], [3], [6], [3], [2], [9]],
    stats: {
      0: [{ value: "The first week or so", label: "after surgery is when it is normal to have pain, and painkillers help, says Cancer Research UK.", ref: 2, picture: "calendar" }],
    },
  },
  "fatigue": {
    sectionRefs: [[[1], [2], [3, 4]], [[1], [1]], [[1], [1], [4]], [[1], [2], [5]], [[4], [6]]],
    helpRefs: [[1], [1], [2], [5], [4], [4]],
    stats: {
      2: [{ value: "1 month", label: "of energy levels can be recorded in Macmillan's fatigue diary, to share with your healthcare team.", ref: 1, picture: "calendar" }],
    },
  },
  "work": {
    sectionRefs: [[[1], [2, 3]], [[1], [4], [5]], [[1], [1]], [[1], [6, 7], [1]], [[8], [9], [9, 10]]],
    helpRefs: [[1], [4], [5], [1], [1], [9]],
    stats: {
      0: [{ value: "From diagnosis", label: "you meet the definition of disability under the Equality Act 2010 if you have cancer, says the government.", ref: 2, picture: "calendar" }],
      4: [{ value: "Up to 28 weeks", label: "of Statutory Sick Pay can be paid by your employer if you are too ill to work, says Sarcoma UK.", ref: 10, picture: "calendar" }],
    },
  },
  "late-effects": {
    sectionRefs: [[[1], [2, 3]], [[4], [4], [1, 5]], [[6], [6], [7, 8]], [[9, 10], [9], [1, 9]], [[3], [3]]],
    helpRefs: [[3], [1], [1], [1], [6], [6]],
    stats: {
      1: [{ value: "Longer than 3 months", label: "of swelling after surgery or radiotherapy might mean lymphoedema, so speak to your sarcoma nurse or GP, says Sarcoma UK.", ref: 4, picture: "calendar" }],
    },
  },
  "body-image": {
    sectionRefs: [[[1, 2], [3], [4]], [[5], [5]], [[6], [6], [5]], [[5, 7], [5]], [[1, 3], [5], [8]]],
    helpRefs: [[1], [5], [6], [5], [5], [8]],
  },
  "mood": {
    sectionRefs: [[[1], [1]], [[1, 2], [3], [1]], [[1], [1, 4], [1, 5]], [[1], [6], [7, 4]], [[4, 8], [9, 10], [9]]],
    helpRefs: [[7], [1], [1], [4], [8], [9]],
    stats: {
      2: [{ value: "More than 2 weeks", label: "of low feelings is the time to talk to your doctor or nurse, says Macmillan.", ref: 4, picture: "calendar" }],
      4: [{ value: "116 123", label: "is the free Samaritans number, open any time, day or night.", ref: 8 }],
    },
  },
};
