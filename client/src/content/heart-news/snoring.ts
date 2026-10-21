import type { NewsExtras } from "../ischaemic-news";
// Snoring features: reference numbers (positions in each answer's `sources`, snoring-answers.ts) and figures, checked 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  // sources: 1 NHS snoring, 2 Sleep Charity alcohol, 3 nidirect OSA, 4 Sleep Charity sleep apnoea
  "what-it-is": {
    sectionRefs: [[[1]], [[1], [1]], [[3], [2]], [[1], [4]]],
    helpRefs: [[1], [1], [1], [1]],
  },
  // sources: 1 NHS sleep apnoea, 2 Asthma + Lung UK OSA, 3 NHS snoring, 4 nidirect OSA
  "or-apnoea": {
    sectionRefs: [[[3], [1]], [[2], [2]], [[1], [1]], [[2], [4]], [[1]]],
    helpRefs: [[1, 2], [1, 2], [1, 2], [1], [1]],
    stats: {
      0: [{ value: "1 in 20", label: "people are affected by obstructive sleep apnoea, the most common type of sleep apnoea, says Asthma + Lung UK.", ref: 2, picture: "one-in", of: 20 }],
    },
  },
  // sources: 1 NHS snoring, 2 Sleep Charity alcohol, 3 nidirect OSA, 4 Sleep Charity positions, 5 NHS nasal polyps
  causes: {
    sectionRefs: [[[1]], [[2], [3]], [[1], [3]], [[4]], [[1], [5]]],
    helpRefs: [[1], [1], [1], [1], [1], [5]],
  },
  // sources: 1 NHS snoring, 2 NHS sleep apnoea, 3 Asthma + Lung UK diagnosis, 4 NHS tiredness
  "when-to-see-gp": {
    sectionRefs: [[[1], [1]], [[1], [1], [1]], [[3], [3]], [[2], [3]]],
    helpRefs: [[1], [1], [3], [3], [4]],
  },
  // sources: 1 NHS snoring, 2 Sleep Charity alcohol, 3 NHS alcohol units, 4 Asthma + Lung UK treatments, 5 nidirect OSA
  "self-help": {
    sectionRefs: [[[1]], [[1], [4]], [[1, 2], [5], [3]], [[1], [4]], [[1]]],
    helpRefs: [[1], [1], [1], [3], [1], [1]],
    stats: {
      2: [{ value: "14 units", label: "of alcohol a week is the most men and women are advised to drink on a regular basis, says the NHS.", ref: 3, picture: "calendar" }],
    },
  },
  // sources: 1 NHS snoring, 2 Asthma + Lung UK treatments, 3 nidirect OSA
  devices: {
    sectionRefs: [[[1]], [[1], [2, 3]], [[2], [2]], [[1]], [[1], [1]]],
    helpRefs: [[1], [2], [1], [1]],
  },
  // sources: 1 NHS snoring, 2 NHS allergic rhinitis, 3 NHS non-allergic rhinitis, 4 NHS decongestants, 5 NHS nasal polyps
  nose: {
    sectionRefs: [[[1]], [[2], [2]], [[3], [3]], [[2, 3], [2, 4], [4]], [[5], [5]]],
    helpRefs: [[2, 3], [2, 3], [4], [4], [2, 3]],
    stats: {
      3: [{ value: "5 days", label: "is the longest to use decongestant nasal sprays or drops; longer can make a blocked nose worse, says the NHS.", ref: 4, picture: "calendar" }],
    },
  },
  // sources: 1 NHS snoring, 2 nidirect snoring, 3 Asthma + Lung UK treatments, 4 nidirect OSA, 5 NHS nasal polyps
  surgery: {
    sectionRefs: [[[1, 2], [1]], [[2]], [[3], [4]], [[5], [5]]],
    helpRefs: [[1, 2], [1], [5]],
    stats: {
      3: [{ value: "About 12 weeks", label: "of treatment without improvement before a GP may suggest surgery for nasal polyps, says the NHS.", ref: 5, picture: "calendar" }],
    },
  },
  // sources: 1 NHS snoring, 2 Sleep Charity FAQs, 3 NHS sleep apnoea, 4 NHS Every Mind Matters sleep tips, 5 Sleep Charity sleep environment
  partner: {
    sectionRefs: [[[2], [3]], [[1], [2], [4]], [[2]], [[3], [1]], [[5]]],
    helpRefs: [[1, 2], [4], [2], [1], [5]],
    stats: {
      4: [{ value: "5ft", label: "wide should be the minimum for a bed you share, says the Sleep Charity.", ref: 5 }],
    },
  },
  // sources: 1 NHS Every Mind Matters sleep tips, 2 Sleep Charity sleep hygiene, 3 NHS tiredness, 4 NHS sleep apnoea, 5 Sleep Charity helpline
  routine: {
    sectionRefs: [[[1], [4]], [[1], [2], [3]], [[1], [1]], [[1], [1], [2]], [[1, 2], [5]]],
    helpRefs: [[1], [1], [1], [1, 2], [3], [5]],
    stats: {
      1: [{ value: "6 to 9 hours", label: "of sleep to aim for, keeping to the same sleep times, says the NHS.", ref: 3, picture: "hours" }],
      3: [{ value: "8 hours", label: "before bedtime is when to stop caffeine, says the Sleep Charity.", ref: 2, picture: "hours" }],
    },
  },
  // sources: 1 NHS tiredness, 2 Asthma + Lung UK Epworth Sleepiness Scale, 3 GOV.UK excessive sleepiness and driving, 4 Sleep Charity road safety
  tiredness: {
    sectionRefs: [[[1], [1]], [[2], [2]], [[3], [3], [3]], [[4], [4]], [[1], [1]]],
    helpRefs: [[1], [2], [3], [4], [4]],
    stats: {
      2: [{ value: "Up to £1,000", label: "fine if you do not tell DVLA about a medical condition that affects your driving, says GOV.UK.", ref: 3 }],
      3: [{ value: "1 in 6", label: "crashes resulting in death and injury on motorways and A roads are fatigue related, says the Sleep Charity.", ref: 4, picture: "one-in", of: 6 }],
    },
  },
  // sources: 1 NHS snoring, 2 NHS non-allergic rhinitis, 3 Asthma + Lung UK treatments, 4 NHS Better Health quit smoking, 5 NHS stop smoking services, 6 Sleep Charity sleep hygiene
  smoking: {
    sectionRefs: [[[1], [2]], [[3]], [[6]], [[4], [4]], [[5], [5], [4]]],
    helpRefs: [[1], [3], [6], [5], [5], [4]],
    stats: {
      4: [{ value: "28 days", label: "smoke free makes you 5 times more likely to quit for good, says the NHS.", ref: 4, picture: "calendar" }],
    },
  },
};
