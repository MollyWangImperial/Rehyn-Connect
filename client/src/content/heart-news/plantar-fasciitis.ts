import type { NewsExtras } from "../ischaemic-news";
// Plantar fasciitis features: paragraph references (numbers are positions in each answer's own sources in plantar-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[4, 3], [5, 4]], [[2], [6, 7]], [[8], [8]], [[3, 1], [9]]],
    helpRefs: [[1], [1], [1], [1], [1]],
    stats: {
      2: [{ value: "About half", label: "of people with plantar fasciitis have a heel spur, according to a review cited by NICE CKS. Spurs are also common in people with no symptoms.", ref: 7, picture: "half" }],
    },
    charts: {
      3: { kind: "donut", title: "A common cause of heel pain", subtitle: "People, out of every 100, who have it at some point in life", value: 10, prefix: "About", subject: "people", label: "get plantar fasciitis at some point in their lives, says a review cited by NICE CKS", sources: "Source: NICE Clinical Knowledge Summaries, Plantar fasciitis: how common is it?" },
    },
  },
  "causes": {
    sectionRefs: [[[1], [2]], [[1], [3]], [[4], [5]], [[1, 4], [2]], [[6], [7]]],
    helpRefs: [[1], [1], [1], [1], [3]],
    charts: {
      3: { kind: "range", title: "When it is most likely", subtitle: "The ages at which plantar fasciitis is more likely, according to the NHS", from: 40, to: 60, unit: "years of age", sources: "Source: NHS, Plantar fasciitis" },
    },
  },
  "symptoms": {
    sectionRefs: [[[1, 2], [3]], [[1], [4]], [[1, 4, 2], [1, 4]], [[1], [1]], [[5], [5]]],
    helpRefs: [[1], [1], [5], [1], [1, 6]],
    stats: {
      2: [{ value: "Up to 30%", label: "of people with plantar fasciitis have it in both feet, says NICE CKS. It usually affects one foot.", ref: 4 }],
      3: [{ value: "2 weeks", label: "of treating it yourself with no improvement is the time to see a GP, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "how-long": {
    sectionRefs: [[[1], [2]], [[1], [1]], [[3, 4], [5]], [[1], [6]], [[3], [5]]],
    helpRefs: [[3], [3], [6], [2], [5]],
    stats: {
      0: [{ value: "Up to 18 months", label: "is how long it can take to fully recover from plantar heel pain, says Arthritis UK.", ref: 2, picture: "calendar" }],
      2: [{ value: "6 to 12 weeks", label: "is how long injury and inflamed tissues usually take to improve, says the Chartered Society of Physiotherapy.", ref: 5, picture: "calendar" }],
    },
    charts: {
      1: { kind: "donut", title: "Most people improve", subtitle: "People with plantar fasciitis, out of every 100, with non-surgical treatment", value: 80, subject: "people with plantar fasciitis", label: "improve within 12 months, according to expert opinion in one review", sources: "Source: NICE Clinical Knowledge Summaries, Plantar fasciitis: prognosis" },
    },
  },
  "stretches": {
    sectionRefs: [[[1, 2], [2]], [[3], [4]], [[5], [5]], [[5], [6]], [[5], [5, 3]]],
    helpRefs: [[3], [2], [4], [4], [7]],
    stats: {
      0: [{ value: "4 to 6 weeks", label: "of regular plantar fascia and calf stretches is what NICE CKS advises.", ref: 2, picture: "calendar" }],
    },
    charts: {
      2: { kind: "bars", title: "How long to hold", subtitle: "Seconds to hold each stretch, as Arthritis UK describes them", bars: [{ label: "Sitting toe pull, up to", value: 20 }, { label: "Towel stretch", value: 30, strong: true }], max: 40, ticks: [0, 10, 20, 30, 40], unit: " seconds", sources: "Source: Arthritis UK, Exercises for the toes, feet and ankles" },
    },
  },
  "footwear": {
    sectionRefs: [[[1], [2]], [[1], [2]], [[1, 3], [2, 3]], [[1], [4]], [[4], [4, 5]]],
    helpRefs: [[1], [1], [2], [4], [1]],
    stats: {
      0: [{ value: "About 2 to 3cm", label: "is how much Arthritis UK suggests the heel of your shoe is raised, as in a good sports shoe.", ref: 2 }],
    },
    charts: {
      4: { kind: "bars", title: "A good fit, in centimetres", subtitle: "Measurements Arthritis UK gives for good footwear", bars: [{ label: "Gap beyond your longest toe", value: 1 }, { label: "Broad heel, no higher than", value: 3, strong: true }], max: 4, ticks: [0, 1, 2, 3, 4], unit: " cm", sources: "Source: Arthritis UK, Footcare and footwear" },
    },
  },
  "pain-relief": {
    sectionRefs: [[[1], [2]], [[1], [2, 3]], [[1], [2]], [[4], [4, 5]], [[5, 4], [5, 4]]],
    helpRefs: [[1], [1], [1], [4], [4]],
    stats: {
      1: [{ value: "Up to 20 minutes", label: "every 2 to 3 hours is how long the NHS suggests using a towel-wrapped ice pack.", ref: 1, picture: "hours" }],
    },
    charts: {
      3: { kind: "bars", title: "Days without a doctor's advice", subtitle: "The most days to take each painkiller unless a doctor advises otherwise, according to the NHS", bars: [{ label: "Paracetamol", value: 3 }, { label: "Ibuprofen tablets", value: 10, strong: true }], max: 12, ticks: [0, 3, 6, 9, 12], unit: " days", sources: "Source: NHS, Paracetamol for adults and Ibuprofen for adults" },
    },
  },
  "further-treatment": {
    sectionRefs: [[[1, 2], [3]], [[1], [4]], [[1, 5], [4, 6]], [[1, 7], [8]], [[1, 4], [1, 9]]],
    helpRefs: [[2], [5], [6], [6], [9]],
    stats: {
      2: [{ value: "3 a year", label: "is the most steroid injections into the same part of the body your doctor will probably recommend, says Arthritis UK.", ref: 6 }],
    },
    charts: {
      4: { kind: "range", title: "When a surgeon may be involved", subtitle: "Months of ongoing symptoms, after treatment from the GP surgery, before a surgeon referral may be considered", from: 3, to: 6, unit: "months", sources: "Source: NICE Clinical Knowledge Summaries, Plantar fasciitis: management" },
    },
  },
  "work-standing": {
    sectionRefs: [[[1, 2], [3]], [[4], [5]], [[2], [6]], [[6], [7], [8]], [[9], [9]]],
    helpRefs: [[4], [2], [5], [6], [9]],
    stats: {
      2: [{ value: "6 hours", label: "or more of work in a day comes with a rest break under health and safety rules, says Arthritis UK.", ref: 6, picture: "hours" }],
    },
  },
  "exercise": {
    sectionRefs: [[[1, 2], [2]], [[3, 1], [4]], [[5], [5]], [[6], [6]], [[7], [7]]],
    helpRefs: [[1], [3], [5], [7], [6]],
    stats: {
      2: [{ value: "3 or 4 times", label: "is how often to do a similar run before increasing your pace or distance, says the NHS.", ref: 5 }],
    },
    charts: {
      3: { kind: "bars", title: "A week of activity", subtitle: "Minutes a week adults should aim for, by how hard the activity is", bars: [{ label: "Vigorous, such as running", value: 75 }, { label: "Moderate, such as riding a bike", value: 150, strong: true }], max: 160, ticks: [0, 40, 80, 120, 160], unit: " minutes", sources: "Source: NHS, Physical activity guidelines for adults aged 19 to 64" },
    },
  },
  "weight": {
    sectionRefs: [[[1, 2, 3], [2, 1, 4]], [[1], [5]], [[6], [7]], [[7], [7, 6]], [[6, 5], [7]]],
    helpRefs: [[7], [7], [7], [6], [5]],
    stats: {
      3: [{ value: "12 weeks", label: "is the length of the plan in the free NHS Weight Loss Plan app, says the NHS.", ref: 7, picture: "calendar" }],
    },
  },
  "coming-back": {
    sectionRefs: [[[1], [1]], [[2], [3]], [[4, 5], [6], [7]], [[8], [8]], [[9, 10], [11]]],
    helpRefs: [[1], [1], [4], [8], [9]],
    stats: {
      3: [{ value: "5 to 10 minutes", label: "of brisk walking or gentle jogging is the warm-up the NHS suggests before you run.", ref: 8, picture: "hours" }],
      4: [{ value: "3 months", label: "or more of foot pain, or pain that keeps coming back, is a reason to speak to a doctor or footcare specialist, says Arthritis UK.", ref: 10, picture: "calendar" }],
    },
  },
};
