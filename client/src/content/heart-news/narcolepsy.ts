import type { NewsExtras } from "../ischaemic-news";
// Narcolepsy features: paragraph references (numbers are positions in each answer's own sources in narcolepsy-answers.ts), charts and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-it-is": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[2], [1, 4]], [[1], [1], [5]]],
    helpRefs: [[1], [1], [1], [1], [1, 6]],
    stats: {
      1: [{ value: "About every 90 minutes", label: "through the night, a normal sleeper has several minutes of dreaming (REM) sleep, says Narcolepsy UK.", ref: 3, picture: "hours" }],
      2: [{ value: "About 1 in 2,500", label: "people have narcolepsy, around 30,000 people in the UK, most of them thought to be undiagnosed, says Narcolepsy UK.", ref: 2 }],
    },
  },
  "symptoms": {
    sectionRefs: [[[1], [2, 1], [1]], [[3], [3], [3]], [[4], [5], [2]], [[2], [4, 2]]],
    helpRefs: [[4], [2], [6], [7], [5]],
    stats: {
      1: [{ value: "Less than 2 minutes", label: "is how long attacks of cataplexy generally last, and the person stays fully conscious, says Narcolepsy UK.", ref: 3, picture: "hours" }],
    },
    charts: {
      1: { kind: "donut", title: "How many have cataplexy", subtitle: "People with narcolepsy, out of every 100", value: 75, prefix: "About", subject: "people with narcolepsy", label: "have cataplexy, sudden muscle weakness set off by strong emotions", sources: "Source: Narcolepsy UK, Cataplexy" },
    },
  },
  "causes": {
    sectionRefs: [[[1], [2]], [[2], [1, 2], [2]], [[3], [2]], [[4], [5]]],
    helpRefs: [[5], [6], [3], [7]],
  },
  "diagnosis": {
    sectionRefs: [[[1, 2], [1]], [[3], [3]], [[2], [2], [4, 2]], [[2, 5], [6], [2]], [[2, 8], [5, 7]]],
    helpRefs: [[1], [1], [4], [1], [6]],
    stats: {
      1: [{ value: "18 or above", label: "on the Epworth Sleepiness Scale is a very high level of daytime sleepiness, and a reason to see your doctor, says Narcolepsy UK.", ref: 3 }],
      3: [{ value: "15 to 20 minutes", label: "is how long a lumbar puncture typically takes, says the NHS.", ref: 6, picture: "hours" }],
    },
  },
  "medicines": {
    sectionRefs: [[[1], [2]], [[2], [3]], [[2], [2, 4], [5, 2]], [[2, 7], [6]], [[2], [2], [2]]],
    helpRefs: [[2, 7], [2], [1, 4], [6], [2]],
  },
  "naps": {
    sectionRefs: [[[1], [2]], [[3], [3], [4]], [[4], [5], [6]], [[7]]],
    helpRefs: [[1], [3], [3], [3], [4], [5, 6]],
    stats: {
      1: [
        { value: "15 to 30 minutes", label: "is the length of the planned daily naps that may help, says Narcolepsy UK.", ref: 3, picture: "hours" },
        { value: "2pm to 4pm", label: "is when planned naps may help most, along with before events where you need to be alert, says Narcolepsy UK.", ref: 3, picture: "hours" },
      ],
    },
  },
  "sleep-habits": {
    sectionRefs: [[[1, 5], [2, 3]], [[2], [2]], [[1, 2], [2, 3], [2]], [[1, 2], [4]], [[1]]],
    helpRefs: [[1, 2], [2], [1, 2], [2], [1, 2], [1]],
    stats: {
      0: [{ value: "7 to 9 hours", label: "of sleep a night is what most healthy adults need, says NHS Every Mind Matters.", ref: 5, picture: "hours" }],
    },
  },
  "specialist": {
    sectionRefs: [[[1], [2]], [[1, 3], [1]], [[1, 4], [5]], [[6], [5]], [[1]]],
    helpRefs: [[7], [1], [7], [8], [1]],
  },
  "driving": {
    sectionRefs: [[[1, 2], [1]], [[2], [3], [3]], [[4], [4]], [[3]], [[4, 5]]],
    helpRefs: [[1, 6], [2], [2], [5], [3]],
    stats: {
      0: [{ value: "Up to £1,000", label: "is the fine for not telling the DVLA about a medical condition that affects your driving, says the government.", ref: 1 }],
      1: [{ value: "At least 3 months", label: "of satisfactory symptom control comes before a car or motorcycle licence may be issued, says the DVLA.", ref: 3, picture: "calendar" }],
      2: [{ value: "1, 2 or 3 years", label: "is how long a licence will most likely last before it is reviewed, says Narcolepsy UK.", ref: 4, picture: "calendar" }],
    },
  },
  "work-study": {
    sectionRefs: [[[1], [3, 2]], [[1], [1]], [[4], [5, 3, 6]], [[7], [7]], [[8], [9, 8]]],
    helpRefs: [[1, 8], [1, 8], [8], [7], [9], [10]],
    stats: {
      2: [{ value: "12 months or more", label: "is what long-term means under the Equality Act 2010, says the government.", ref: 4, picture: "calendar" }],
      4: [{ value: "Up to £27,783", label: "a year of support is available to undergraduate and postgraduate students through Disabled Students' Allowance, says the government.", ref: 9 }],
    },
  },
  "mood": {
    sectionRefs: [[[1, 2], [3, 4], [5]], [[6, 7], [8]], [[3], [9], [10]], [[11], [11]], [[12, 13], [12]]],
    helpRefs: [[3], [9, 10], [11], [8], [1], [12, 14, 13, 15]],
    stats: {
      2: [{ value: "18 or over", label: "is the age to refer yourself to NHS talking therapies, or 16 or over in some areas, says the NHS.", ref: 10 }],
    },
  },
  "support": {
    sectionRefs: [[[1], [2]], [[3], [3]], [[4], [5]], [[6], [7, 2], [8]], [[9, 10, 11, 12], [9, 10]]],
    helpRefs: [[3], [2], [5, 4], [6], [8], [9, 10, 11, 12]],
    stats: {
      0: [
        { value: "Almost 400", label: "people were helped by Narcolepsy UK in 2024, says the charity.", ref: 2 },
        { value: "80 schools", label: "heard presentations about narcolepsy from Narcolepsy UK in 2024, says the charity.", ref: 2 },
      ],
    },
  },
};
