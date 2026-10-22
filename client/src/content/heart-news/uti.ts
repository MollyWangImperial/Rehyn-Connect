import type { NewsExtras } from "../ischaemic-news";
// Urinary tract infections features: paragraph references (numbers are positions in each answer's own sources in uti-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[3], [3, 5]], [[1, 2], [1]], [[3, 4], [3, 1]], [[1, 2], [2, 6]]],
    helpRefs: [[1], [1], [1], [3], [1]],
    stats: {
      1: [{ value: "More than half", label: "of the women in this country get cystitis at some time in their lives, says BAUS.", ref: 3, picture: "half" }],
      4: [{ value: "Up to 48 hours", label: "is how long a laboratory urine culture result can take, says BAUS.", ref: 2, picture: "hours" }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1, 3], [1]], [[2], [1]], [[1], [1, 4]], [[1]], [[4], [1, 4]]],
    helpRefs: [[1], [4], [4], [4], [1], [1]],
    stats: {
      0: [{ value: "Below 36C", label: "a very low temperature, can be a symptom of a UTI, says the NHS.", ref: 1 }],
    },
  },
  "kidney-infection": {
    sectionRefs: [[[1, 2], [1]], [[1], [1]], [[1], [1]], [[1], [1]], [[1], [2]]],
    helpRefs: [[1], [1], [1], [1], [1], [1]],
    stats: {
      3: [{ value: "7 to 14 days", label: "of antibiotic tablets is the usual treatment for a kidney infection, says the NHS.", ref: 1, picture: "calendar" }],
      4: [{ value: "About 2 weeks", label: "is when most people feel better from a kidney infection, says the NHS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      3: { kind: "bars", title: "How long treatment takes", subtitle: "The longest the NHS gives for each, in days", bars: [{ label: "Antibiotic tablets, up to", value: 14, strong: true }, { label: "A hospital stay for most, up to", value: 7 }], max: 14, ticks: [0, 7, 14], unit: " days", sources: "Source: NHS, Kidney infection" },
    },
  },
  "causes": {
    sectionRefs: [[[1, 2], [4, 2]], [[2, 1]], [[1], [1, 3]], [[2, 3], [1, 2]], [[2, 1], [1, 3]]],
    helpRefs: [[1, 3], [1], [1, 3], [1, 2], [1, 2]],
    charts: {
      0: { kind: "donut", title: "One bacterium leads", subtitle: "Bladder infections in women where a cause is found, out of every 100", value: 77, prefix: "Up to", subject: "bladder infections in women", label: "are caused by E coli", sources: "Source: NICE Clinical Knowledge Summaries, Urinary tract infection (lower) - women" },
    },
  },
  "pharmacy": {
    sectionRefs: [[[1], [2]], [[1], [1]], [[2], [2]], [[3], [3]], [[2]]],
    helpRefs: [[2], [1], [2], [2], [3], [2]],
    stats: {
      2: [{ value: "48 hours", label: "without improvement after starting treatment means asking for an urgent GP appointment or NHS 111, says the NHS.", ref: 2, picture: "hours" }],
    },
    charts: {
      0: { kind: "range", title: "Who a pharmacist can treat", subtitle: "Women who are not pregnant or breastfeeding can get UTI treatment through Pharmacy First at these ages", from: 16, to: 64, unit: "years of age", sources: "Source: NHS, How pharmacies can help" },
    },
  },
  "antibiotics": {
    sectionRefs: [[[1, 2], [1, 2]], [[2, 3], [2, 4]], [[1, 4, 5], [6]], [[4, 2], [4]], [[1], [1, 2]]],
    helpRefs: [[1], [1], [1], [1, 6], [5, 4], [2]],
    stats: {
      0: [{ value: "48 hours", label: "is how long a GP may ask you to wait before getting antibiotics, in case symptoms go away on their own, says the NHS.", ref: 1, picture: "hours" }],
      2: [{ value: "3 to 7 days", label: "is how long most people take nitrofurantoin for, says the NHS.", ref: 6, picture: "calendar" }],
    },
  },
  "recurrent": {
    sectionRefs: [[[1], [2]], [[3], [4, 2]], [[1], [2]], [[1], [1]], [[5]]],
    helpRefs: [[1], [2], [2], [1], [3], [5]],
    stats: {
      2: [{ value: "Up to 6 months", label: "of a low-dose antibiotic is one option a GP may prescribe, says the NHS.", ref: 1, picture: "calendar" }],
    },
    charts: {
      0: { kind: "bars", title: "When UTIs keep coming back", subtitle: "The number of UTIs that means seeing a GP, as the NHS gives it", bars: [{ label: "Within 6 months", value: 2, strong: true }, { label: "Within 12 months", value: 3 }], max: 4, ticks: [0, 1, 2, 3, 4], unit: " UTIs", sources: "Source: NHS, Urinary tract infections (UTIs)" },
    },
  },
  "urgent": {
    sectionRefs: [[[1], [1]], [[1, 2], [2]], [[2], [2]], [[2], [2]], [[1], [1, 3]]],
    helpRefs: [[1], [2], [1], [1], [2], [2]],
    stats: {
      2: [{ value: "18 hours", label: "of peeing very little, or not peeing all day, can be a sign of sepsis in adults, says the NHS.", ref: 2, picture: "hours" }],
    },
  },
  "prevention": {
    sectionRefs: [[[1, 3], [1]], [[1, 2], [1, 2]], [[1], [2]], [[1, 2], [1, 2]], [[1]]],
    helpRefs: [[1, 3], [1], [1, 3], [1], [1, 2], [1, 2]],
    stats: {
      1: [{ value: "Two litres", label: "of liquid a day, or three to four pints, is what BAUS suggests to help prevent further attacks.", ref: 2 }],
    },
  },
  "menopause": {
    sectionRefs: [[[1], [2]], [[3], [4]], [[5, 6], [2, 7]], [[5], [8]], [[4], [4]]],
    helpRefs: [[6], [2], [4], [4], [4], [8]],
    stats: {
      2: [{ value: "4 to 6 weeks", label: "is how long vaginal oestrogen is often used more frequently at the start, before weekly use, says BAUS.", ref: 7, picture: "calendar" }],
      3: [{ value: "Within 12 months", label: "is when NICE says vaginal oestrogen for recurrent UTI should be reviewed.", ref: 8, picture: "calendar" }],
    },
  },
  "catheter": {
    sectionRefs: [[[1, 2], [1]], [[2, 4], [4]], [[3], [3]], [[3], [3, 4]], [[3], [3, 2]]],
    helpRefs: [[3], [3], [3], [3], [3], [3]],
    stats: {
      3: [
        { value: "Every 7 days", label: "is how often leg bags and valves should be changed, says the NHS.", ref: 3, picture: "calendar" },
        { value: "At least every 3 months", label: "the catheter itself needs to be removed and replaced, says the NHS.", ref: 3, picture: "calendar" },
      ],
    },
  },
  "myths": {
    sectionRefs: [[[1], [2, 3]], [[1, 4], [3, 2]], [[1, 3], [1]], [[1, 5, 2], [3, 4]], [[7, 6], [8]]],
    helpRefs: [[1], [1], [3], [3], [8], [7]],
    stats: {
      1: [{ value: "2 grams", label: "a day of D-mannose was taken in the small studies BAUS describes, which suggest it can help prevent urine infection.", ref: 2 }],
    },
  },
};
