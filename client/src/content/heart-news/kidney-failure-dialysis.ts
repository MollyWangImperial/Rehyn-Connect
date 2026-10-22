import type { NewsExtras } from "../ischaemic-news";
// Kidney failure and dialysis features: paragraph references (numbers are positions in each answer's own sources in dialysis-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1, 3], [2, 1]], [[4], [6]], [[3], [1, 5]], [[1], [1, 4]]],
    helpRefs: [[4], [4], [4], [3]],
    stats: {
      0: [{ value: "Below 15ml/min", label: "is the eGFR at stage 5 of chronic kidney disease, kidney failure, says the NHS.", ref: 2 }],
      1: [{ value: "Around 10%", label: "of people with CKD may reach established renal failure, says Kidney Care UK.", ref: 4, picture: "one-in", of: 10 }],
    },
  },
  "choices": {
    sectionRefs: [[[1], [2]], [[1], [1, 3], [1]], [[1], [2, 1]], [[4, 3], [2, 1]]],
    helpRefs: [[1], [1], [1], [3], [4]],
    stats: {
      0: [{ value: "At least 1 year", label: "before treatment is likely to be needed is when assessment should start, says NICE.", ref: 2, picture: "calendar" }],
      1: [{ value: "1 in 3", label: "kidney transplants in the UK is now from a living donor, says Kidney Care UK.", ref: 1, picture: "one-in", of: 3 }],
    },
    charts: {
      1: { kind: "donut", title: "Transplants that keep working", subtitle: "Kidney transplants, out of every 100", value: 90, prefix: "About", subject: "kidney transplants", label: "still function after 5 years", sources: "Source: NHS, Treatment of chronic kidney disease" },
    },
  },
  "haemodialysis": {
    sectionRefs: [[[1, 4], [2]], [[1, 2], [3, 2]], [[2, 5], [4, 6]], [[2, 3], [1, 2]]],
    helpRefs: [[3], [3], [3], [3], [3]],
    stats: {
      1: [{ value: "3 times a week", label: "is how often most people have haemodialysis, around 4 hours each time, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "peritoneal": {
    sectionRefs: [[[2, 1], [2]], [[2], [2, 4]], [[1], [1, 2]], [[2], [3, 5]], [[2, 6], [6]]],
    helpRefs: [[2], [2], [2], [2], [2]],
    stats: {
      1: [{ value: "3 to 5 times a night", label: "is how often an APD machine fills and drains the fluid while you sleep, says Kidney Care UK.", ref: 2 }],
      2: [{ value: "About 2 weeks", label: "before treatment begins is when the catheter is put in, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "access": {
    sectionRefs: [[[1], [1, 7]], [[1, 4], [1]], [[2], [2, 3]], [[1], [1, 6]], [[5], [1, 6, 2]]],
    helpRefs: [[1], [1], [1], [1, 6], [2]],
    stats: {
      1: [
        { value: "Around 10 weeks", label: "is when a new fistula is usually ready to use, says Kidney Care UK.", ref: 1, picture: "calendar" },
        { value: "Around 6 months", label: "before dialysis is expected to start is when NICE recommends aiming to make a fistula.", ref: 4, picture: "calendar" },
      ],
    },
  },
  "fluid": {
    sectionRefs: [[[1], [1, 5]], [[2], [1, 4]], [[1], [2, 3]], [[1], [1]]],
    helpRefs: [[1], [1], [1], [1], [1], [6]],
  },
  "food": {
    sectionRefs: [[[6], [1, 6, 7]], [[3], [3]], [[4], [4], [4]], [[5], [8, 2]]],
    helpRefs: [[6], [3], [3], [4], [3]],
    stats: {
      1: [{ value: "300ml", label: "a day at most of milk and yoghurt together, if you have been told to lower potassium, says Kidney Care UK.", ref: 3 }],
    },
  },
  "supportive-care": {
    sectionRefs: [[[1, 2], [1]], [[2, 3], [2, 1]], [[2, 1], [1, 4]], [[1], [5, 2]]],
    helpRefs: [[1], [1], [1], [5], [4]],
  },
  "work-travel": {
    sectionRefs: [[[7], [3, 1]], [[1, 2], [1, 2]], [[4], [5, 4]], [[3, 6], [6]], [[6], [6]]],
    helpRefs: [[1], [4, 5], [6], [6], [6]],
    stats: {
      3: [
        { value: "4 or more weeks", label: "of notice is ideal before a break within the UK, says Kidney Care UK.", ref: 6, picture: "calendar" },
        { value: "At least 3 months", label: "of notice is best before travelling abroad on dialysis, says Kidney Care UK.", ref: 6, picture: "calendar" },
      ],
      4: [{ value: "As much as 20%", label: "of the cost of haemodialysis can be charged as a co-payment in some EU countries, says Kidney Care UK.", ref: 6 }],
    },
  },
  "tiredness-mood": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[7, 2, 3], [6]], [[3, 2, 4], [2, 5, 4], [5]]],
    helpRefs: [[1], [1], [1], [2], [2]],
    stats: {
      1: [{ value: "An hour or two", label: "of rest after each haemodialysis session can help, says Kidney Care UK.", ref: 1, picture: "hours" }],
      3: [{ value: "116 123", label: "is the free, 24-hour Samaritans support line, listed by Kidney Care UK for anyone who needs help now.", ref: 4 }],
    },
  },
  "money": {
    sectionRefs: [[[1, 2], [1]], [[2], [3, 1]], [[1], [1]], [[4, 7], [5, 1, 6]]],
    helpRefs: [[1], [2], [3], [1], [4]],
    stats: {
      2: [{ value: "35 hours a week", label: "of caring, at least, is needed for Carer's Allowance, says Kidney Care UK.", ref: 1, picture: "hours" }],
      3: [{ value: "Usually £750", label: "is the value of a Kidney Care UK holiday grant voucher.", ref: 7 }],
    },
  },
  "urgent": {
    sectionRefs: [[[1], [1, 4, 6]], [[1], [1, 5]], [[1, 2], [1, 2]], [[3], [3]], [[1, 4], [5]]],
    helpRefs: [[4, 6], [1], [4], [1], [3]],
  },
};
