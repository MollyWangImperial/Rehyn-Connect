import type { NewsExtras } from "../ischaemic-news";
// Heart failure features: reference numbers (positions in each answer's `sources`, heart-failure-answers.ts) and figures, checked 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  // sources: 1 NHS heart failure, 2 BHF Understanding booklet, 3 BHF Your guide booklet, 4 BHF stages explained
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[2], [2, 3], [2, 3]], [[2, 4], [2, 4], [3]], [[1], [3]]],
    helpRefs: [[2], [1], [1], [2]],
    stats: {
      0: [{ value: "Over 1 million", label: "people across the UK are affected by heart failure, says the British Heart Foundation.", ref: 3 }],
    },
    charts: {
      2: { kind: "range", title: "A normal ejection fraction", subtitle: "Blood pushed out of the heart with each beat, out of every 100", from: 50, to: 65, sources: "Source: British Heart Foundation, Your guide to heart failure (a normal ejection fraction is around 50 to 65%)" },
    },
  },
  // sources: 1 NHS heart failure, 2 BHF heart failure page, 3 BHF Understanding booklet, 4 BHF Your guide booklet
  causes: {
    sectionRefs: [[[1], [3]], [[2, 3], [3], [2, 3]], [[1], [2, 3], [2, 3]], [[1], [4]], [[4], [4]]],
    helpRefs: [[1], [2], [2], [2], [4]],
    stats: {
      2: [{ value: "14 units", label: "of alcohol a week is the recommended limit; drinking more is one cause of heart failure, says the British Heart Foundation.", ref: 2, picture: "calendar" }],
      3: [{ value: "65 or older", label: "is one of the things that may put you more at risk of heart failure, says the NHS.", ref: 1 }],
    },
  },
  // sources: 1 NHS heart failure, 2 BHF Understanding booklet, 3 BHF Your guide booklet, 4 BHF heart failure page
  symptoms: {
    sectionRefs: [[[1], [1]], [[4], [3]], [[2], [3]], [[1], [2]], [[1], [1]]],
    helpRefs: [[1], [2], [2], [1], [3]],
  },
  // sources: 1 NHS heart failure, 2 BHF Understanding booklet, 3 BHF heart failure page, 4 NHS echocardiogram
  tests: {
    sectionRefs: [[[2], [1]], [[2, 3], [2]], [[2], [4], [4]], [[1, 2, 3], [1]], [[2], [4]]],
    helpRefs: [[2], [4], [4], [4]],
    charts: {
      2: { kind: "range", title: "How long an echo takes", subtitle: "Minutes for the most common type of echocardiogram", from: 30, to: 40, unit: "minutes", sources: "Source: NHS, Echocardiogram" },
    },
  },
  // sources: 1 NHS heart failure, 2 BHF Understanding booklet, 3 BHF Your guide booklet, 4 BHF living with heart failure, 5 NHS furosemide, 6 NHS dapagliflozin
  medicines: {
    sectionRefs: [[[2], [1]], [[1, 2], [5, 4]], [[2, 4], [3], [2]], [[3], [3, 6], [3]], [[4], [3], [3]]],
    helpRefs: [[1], [4], [3], [3], [3]],
  },
  // sources: 1 BHF Understanding booklet, 2 BHF Your guide booklet, 3 NHS pacemakers, 4 BHF ICD, 5 BHF ICD tips, 6 NHS heart failure, 7 GOV.UK pacemakers and driving, 8 GOV.UK defibrillators and driving
  devices: {
    sectionRefs: [[[1, 2], [1, 2], [6]], [[1, 2], [1], [4]], [[3], [4], [3]], [[4], [3, 5], [5]], [[7, 8], [7, 8], [3, 5]]],
    helpRefs: [[2], [4], [5], [3, 5], [3]],
    stats: {
      2: [{ value: "4 to 6 weeks", label: "without carrying heavy objects, vigorous exercise or lifting your elbow above shoulder height after a pacemaker, says the NHS.", ref: 3, picture: "calendar" }],
      4: [{ value: "Up to £1,000", label: "is the fine for not telling DVLA about a medical condition or treatment that affects your driving, says the government.", ref: 7 }],
    },
    charts: {
      3: { kind: "range", title: "How often an ICD is checked", subtitle: "Months between ICD check appointments, usually", from: 3, to: 12, unit: "months", sources: "Source: British Heart Foundation, Implantable cardioverter defibrillator (ICD)" },
    },
  },
  // sources: 1 BHF Understanding booklet, 2 BHF Your guide booklet, 3 BHF sudden weight gain, 4 BHF fluid restriction in hot weather, 5 NHS heart failure
  "fluid-salt": {
    sectionRefs: [[[1], [1]], [[1, 5], [3], [2]], [[3], [1]], [[1, 2], [1, 2], [2]], [[4], [4], [4]]],
    helpRefs: [[1], [2], [1], [1], [2]],
    stats: {
      2: [{ value: "2kg in 3 days", label: "A rise of more than this is a reason to contact your doctor, says the British Heart Foundation.", ref: 1, picture: "calendar" }],
      3: [{ value: "Less than 6g", label: "of salt a day for adults, about one level teaspoon, says the British Heart Foundation.", ref: 1 }],
    },
    charts: {
      4: { kind: "range", title: "A fluid limit, as a guide", subtitle: "Cups a day NICE recommends for people advised to restrict fluids; your own team sets yours", from: 6, to: 8, unit: "cups a day", sources: "Source: British Heart Foundation, How do I manage fluid restriction in hot weather? (citing NICE)" },
    },
  },
  // sources: 1 NHS heart failure, 2 BHF exercise for heart failure, 3 BHF Your guide booklet, 4 BHF Understanding booklet
  "cardiac-rehab": {
    sectionRefs: [[[2], [2]], [[1], [1], [3]], [[2], [2], [2]], [[2], [3]], [[2], [2]]],
    helpRefs: [[2], [2, 4], [2], [2], [2]],
    stats: {
      3: [{ value: "150 minutes", label: "of moderate intensity activity a week is what the UK Government's guidelines recommend, says the British Heart Foundation.", ref: 2, picture: "calendar" }],
    },
    charts: {
      3: { kind: "range", title: "Little and often", subtitle: "Minutes in each short session, a few times a day", from: 5, to: 10, unit: "minutes", sources: "Source: British Heart Foundation, Exercise for heart failure" },
    },
  },
  // sources: 1 NHS heart failure, 2 BHF Your guide booklet, 3 BHF Understanding booklet, 4 BHF sudden weight gain, 5 BHF heart failure page
  worsening: {
    sectionRefs: [[[4], [4]], [[2], [2]], [[4], [2], [5]], [[1], [1], [3]], [[2], [2]]],
    helpRefs: [[1, 4], [4], [2], [2], [1, 2]],
    stats: {
      0: [{ value: "As much as 3kg", label: "in just 1 or 2 days: how much weight fluid retention can sometimes add, says the British Heart Foundation.", ref: 4 }],
    },
  },
  // sources: 1 NHS heart failure, 2 BHF Your guide booklet, 3 BHF living with heart failure, 4 BHF sudden weight gain, 5 Asthma + Lung UK breathlessness, 6 The Sleep Charity
  sleep: {
    sectionRefs: [[[1, 2], [2], [2]], [[2, 3], [2]], [[2], [6], [5]], [[3], [2]], [[4], [2], [1]]],
    helpRefs: [[2], [2], [2], [3], [4]],
    stats: {
      2: [{ value: "8 hours", label: "before bedtime is when to stop having caffeine, suggests The Sleep Charity.", ref: 6, picture: "hours" }],
    },
  },
  // sources: 1 NHS heart failure, 2 BHF Understanding booklet, 3 BHF Your guide booklet, 4 BHF depression, 5 NHS talking therapies, 6 NHS urgent help for mental health, 7 BHF living with heart failure
  mood: {
    sectionRefs: [[[1], [2]], [[3], [3], [3]], [[3], [7], [3]], [[4], [3], [1, 5]], [[6], [6], [6]]],
    helpRefs: [[2], [1, 5], [3], [3], [7], [2]],
    stats: {
      1: [{ value: "3 to 5 minutes", label: "of gentle breathing can help you cope with feelings of stress and anxiety, says the British Heart Foundation.", ref: 3, picture: "hours" }],
    },
  },
  // sources: 1 NHS heart failure, 2 BHF Understanding booklet, 3 BHF Your guide booklet, 4 BHF Heart Helpline, 5 NHS end of life care, 6 NHS why plan ahead, 7 GOV.UK heart failure and driving
  support: {
    sectionRefs: [[[1], [2, 4], [1]], [[1], [1], [5]], [[2], [6], [5, 6]], [[2], [2], [3]], [[7], [7], [7]]],
    helpRefs: [[2], [4], [2], [3, 6], [2]],
    stats: {
      0: [{ value: "9am to 5pm", label: "on weekdays, excluding bank holidays, is when the Heart Helpline's cardiac nurses are open, says the British Heart Foundation.", ref: 4, picture: "hours" }],
      4: [{ value: "At least 1 month", label: "off the road for drivers who need to tell DVLA about heart failure and no longer have symptoms, says the government.", ref: 7, picture: "calendar" }],
    },
  },
};
