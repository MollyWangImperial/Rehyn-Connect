import type { NewsExtras } from "../ischaemic-news";
// Kidney transplant features: paragraph references (numbers are positions in each answer's own sources in transplant-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[2], [1, 2]], [[5], [5]], [[3, 4], [4]], [[2], [3]], [[6, 2], [6, 7]]],
    helpRefs: [[1], [2], [6], [2]],
    stats: {
      0: [{ value: "24", label: "kidney transplant centres in the UK, says NHS Blood and Transplant.", ref: 1 }],
      4: [{ value: "20 to 25 years", label: "is how long a kidney from a living donor lasts on average, and 15 to 20 years from a deceased donor, says NHS Blood and Transplant.", ref: 6, picture: "calendar" }],
    },
    charts: {
      1: { kind: "donut", title: "How many reach kidney failure", subtitle: "People with kidney disease, out of every 100", value: 10, prefix: "About", subject: "people with kidney disease", label: "develop kidney failure", sources: "Source: NHS Blood and Transplant, Kidneys and kidney failure" },
    },
  },
  "suitability": {
    sectionRefs: [[[1], [1]], [[1], [1, 7]], [[2, 3, 4], [2, 4]], [[2], [2]], [[5, 8], [6]]],
    helpRefs: [[1], [6], [6], [5], [6]],
    stats: {
      1: [{ value: "2 to 4 hours", label: "is how long a kidney transplant operation lasts, says NHS Blood and Transplant.", ref: 1, picture: "hours" }],
      4: [{ value: "Within a year", label: "of needing to start dialysis, or once already on it, is when you can join the transplant waiting list, says Kidney Care UK.", ref: 5, picture: "calendar" }],
    },
  },
  "donors": {
    sectionRefs: [[[1], [2, 1]], [[1, 4], [1]], [[3, 1, 6], [3]], [[3, 5], [5, 4]], [[2], [7, 8]]],
    helpRefs: [[3], [3], [1], [5], [8]],
    stats: {
      1: [{ value: "3 to 6 months", label: "is how long it usually takes to arrange a living donor transplant once a donor comes forward, says NHS Blood and Transplant.", ref: 1, picture: "calendar" }],
      2: [{ value: "More than 1,000", label: "people become living organ donors each year, says NHS Organ Donation.", ref: 6 }],
      4: [{ value: "7,000", label: "people in the UK are waiting for an organ transplant, with only around 1,400 donors a year, says Kidney Care UK.", ref: 8 }],
    },
    charts: {
      0: { kind: "waffle", title: "Where donated kidneys come from", subtitle: "Kidney transplants, out of every 100, on average", groups: [{ label: "From deceased donors", count: 70, tone: "dark" }, { label: "From living donors", count: 30, tone: "green" }], sources: "Source: NHS Blood and Transplant, Living donor and Deceased donor kidney transplant" },
    },
  },
  "waiting": {
    sectionRefs: [[[1], [3]], [[2, 5], [2, 5]], [[1], [1, 8]], [[3, 6], [4]], [[6, 7], [6]]],
    helpRefs: [[1], [1], [8], [4], [1], [6]],
    stats: {
      1: [{ value: "2 to 3 years", label: "is the average wait for a deceased donor kidney in the UK, says NHS Blood and Transplant.", ref: 2, picture: "calendar" }],
      2: [{ value: "45 minutes", label: "is how long your team has to reach you about an offer before they may need to turn it down, says NHS Blood and Transplant.", ref: 1, picture: "hours" }],
      3: [{ value: "An hour or less", label: "may be all the time there is to decide about an offer, says NHS Blood and Transplant.", ref: 4, picture: "hours" }],
    },
    charts: {
      1: { kind: "bars", title: "On the list, and among donors", subtitle: "Out of every 100 people on the kidney transplant list, and out of every 100 deceased donors, using NHS Blood and Transplant figures", bars: [{ label: "Asian heritage: of the list", value: 18, strong: true }, { label: "Asian heritage: of donors", value: 3 }, { label: "Black heritage: of the list", value: 10, strong: true }, { label: "Black heritage: of donors", value: 2 }], max: 20, ticks: [0, 5, 10, 15, 20], unit: " in 100", sources: "Source: Kidney Care UK, Receiving a kidney" },
    },
  },
  "operation": {
    sectionRefs: [[[1, 5], [1, 3]], [[1, 2], [7, 1]], [[2], [2, 3]], [[2, 6], [6, 8]], [[2, 5], [4]]],
    helpRefs: [[2], [2], [4], [4], [2], [3]],
    stats: {
      0: [{ value: "2 to 4 hours", label: "is how long kidney transplant surgery takes, says NHS Blood and Transplant.", ref: 1, picture: "hours" }],
      1: [{ value: "30 seconds to 2 minutes", label: "is how long removing the stent normally takes, says Kidney Care UK.", ref: 7 }],
      2: [{ value: "6 to 12 hours", label: "after the operation, you are usually helped to sit out in a chair and start short walks, says NHS Blood and Transplant.", ref: 2, picture: "hours" }],
    },
    charts: {
      3: { kind: "range", title: "Kidneys slow to wake up", subtitle: "Kidneys from deceased donors with delayed graft function, out of every 100", from: 20, to: 60, sources: "Source: NHS Blood and Transplant, Delayed graft function" },
      4: { kind: "bars", title: "The usual hospital stay", subtitle: "Days in hospital at the top of the usual range, as NHS Blood and Transplant gives them", bars: [{ label: "Living donor: 4 to", value: 6 }, { label: "Deceased donor: 6 to", value: 10, strong: true }], max: 12, ticks: [0, 3, 6, 9, 12], unit: " days", sources: "Source: NHS Blood and Transplant, Kidney transplant FAQs" },
    },
  },
  "medicines": {
    sectionRefs: [[[2, 3], [1]], [[2, 1], [1, 2]], [[1, 3], [1, 4]], [[2], [2, 6]], [[1, 7], [5]]],
    helpRefs: [[1], [1], [2], [2], [6], [5]],
    stats: {
      2: [{ value: "24 hours", label: "of missed anti-rejection tablets can cause rejection, says Kidney Care UK.", ref: 3, picture: "hours" }],
      4: [{ value: "3 to 12 months", label: "after a transplant is when antibiotic and antiviral medicines usually stop, says NHS Blood and Transplant.", ref: 1, picture: "calendar" }],
    },
  },
  "rejection": {
    sectionRefs: [[[1], [1, 2, 6]], [[3], [1]], [[4, 1], [1]], [[4, 1], [1]], [[4], [5]]],
    helpRefs: [[4, 1], [1], [1], [4], [5]],
    stats: {
      1: [{ value: "3 to 6 months", label: "after a transplant is when the risk of rejection is highest, says NHS Blood and Transplant.", ref: 3, picture: "calendar" }],
      4: [{ value: "38C or above", label: "is a temperature to contact your transplant team about, says NHS Blood and Transplant.", ref: 4 }],
    },
    charts: {
      0: { kind: "range", title: "Rejection in the first year", subtitle: "People in the first year after a kidney transplant, out of every 100", from: 10, to: 15, sources: "Source: NHS Blood and Transplant, Rejection of a transplanted kidney" },
    },
  },
  "clinic": {
    sectionRefs: [[[1, 2], [2]], [[1, 3], [1, 2]], [[4], [7]], [[5], [5]], [[6], [7, 1]]],
    helpRefs: [[4], [1], [5], [5], [7], [8]],
    stats: {
      0: [{ value: "Once or twice a week", label: "is how often most people are seen at the transplant clinic at first, says NHS Blood and Transplant.", ref: 1, picture: "calendar" }],
      1: [{ value: "Every 3 to 4 months", label: "is how often most people go to clinic after a year without serious problems, says NHS Blood and Transplant.", ref: 1, picture: "calendar" }],
    },
  },
  "infections": {
    sectionRefs: [[[1], [1, 9]], [[2, 4], [5, 6, 11]], [[3], [10]], [[8, 10], [7]], [[1], [10]]],
    helpRefs: [[2], [2, 3], [5], [8], [10], [7]],
    stats: {
      1: [{ value: "Every year", label: "a flu jab is important after a transplant, as the risk of infection is higher, says NHS Blood and Transplant.", ref: 2, picture: "calendar" }],
      3: [{ value: "38C or above", label: "is a temperature to contact your transplant team about, says NHS Blood and Transplant.", ref: 8 }],
    },
    charts: {
      0: { kind: "donut", title: "Chest infections early on", subtitle: "Kidney transplant patients in the first week, out of every 100", value: 10, subject: "patients", label: "get a chest infection in the first week after a transplant", sources: "Source: NHS Blood and Transplant, Infections and kidney transplants" },
    },
  },
  "skin-cancer": {
    sectionRefs: [[[2], [3, 4]], [[1, 2], [7, 5]], [[4], [4, 5]], [[6], [6, 5, 2]], [[3], [8, 1]]],
    helpRefs: [[1], [5], [2], [3], [1, 8], [6]],
    stats: {
      1: [{ value: "Factor 50", label: "sunblock, with a long-sleeved shirt and a hat, is what NHS Blood and Transplant suggests in the sun.", ref: 1 }],
      2: [{ value: "Every 2 hours", label: "is how often the NHS recommends reapplying sunscreen, as the sun can dry it off your skin.", ref: 5, picture: "hours" }],
      3: [{ value: "More than 4 weeks", label: "of a skin growth or patch that hurts, itches, bleeds or crusts is a reason to see a GP, says the NHS.", ref: 6, picture: "calendar" }],
    },
  },
  "daily-life": {
    sectionRefs: [[[1, 4, 3], [5, 8]], [[2, 1], [2, 5]], [[1], [1, 9, 3]], [[1, 6], [6, 7]], [[2], [10]]],
    helpRefs: [[1], [2], [2], [1], [8], [9]],
    stats: {
      1: [{ value: "More than 10kg", label: "is heavy lifting to avoid for at least 6 weeks after surgery, says NHS Blood and Transplant.", ref: 5 }],
      3: [{ value: "Around 6 months", label: "after a kidney transplant is when you can usually go abroad, says NHS Blood and Transplant.", ref: 1, picture: "calendar" }],
    },
    charts: {
      0: { kind: "bars", title: "Weeks until things restart", subtitle: "Usual timings after a kidney transplant, in weeks, as NHS Blood and Transplant gives them", bars: [{ label: "Driving, around", value: 6 }, { label: "Moderate exercise, after", value: 8 }, { label: "Back to work, within", value: 12, strong: true }], max: 12, ticks: [0, 4, 8, 12], unit: " weeks", sources: "Source: NHS Blood and Transplant, Getting back to activities after a transplant" },
    },
  },
  "donor-family": {
    sectionRefs: [[[7, 1], [1, 6]], [[1], [1]], [[1], [1]], [[2], [2]], [[3], [5, 4]]],
    helpRefs: [[1], [1], [1], [2], [4]],
    stats: {
      0: [{ value: "17 years", label: "after her transplant, one recipient in NHS Blood and Transplant's videos wrote to her donor family.", ref: 1, picture: "calendar" }],
      4: [{ value: "15 working days", label: "after donation at most, a specialist nurse contacts the donor's family about the outcome, if they wish to know, says NHS Blood and Transplant.", ref: 3, picture: "calendar" }],
    },
  },
};
