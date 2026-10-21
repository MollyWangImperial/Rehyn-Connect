import type { NewsExtras } from "../ischaemic-news";
// Bowel cancer features: paragraph references (numbers are positions in each answer's own sources in bowel-answers.ts), charts and big figures, all checked on 21 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "what-you-had": {
    sectionRefs: [[[1], [1, 2]], [[3, 4], [4], [1]], [[1, 5], [5], [5]], [[6], [6]], [[4], [7]]],
    helpRefs: [[2], [4], [6, 7], [5], [5, 6], [2]],
    stats: {
      2: [{ value: "Every 2 to 3 weeks", label: "is how often chemotherapy for bowel cancer is usually given, each period being one cycle, says Bowel Cancer UK.", ref: 5, picture: "calendar" }],
      3: [{ value: "Around 5 days", label: "is how long a short course of radiotherapy before surgery lasts; a long course is five or six weeks, says Bowel Cancer UK.", ref: 6, picture: "calendar" }],
    },
  },
  "results": {
    sectionRefs: [[[1], [1, 2]], [[1, 2], [1, 2], [1, 2]], [[1], [1, 2]], [[1, 2], [1, 2]], [[4, 3], [3, 4]]],
    helpRefs: [[2], [4], [4], [5], [6]],
    stats: {
      1: [{ value: "Up to 3", label: "nearby lymph nodes with cancer cells is N1; four or more is N2, says Bowel Cancer UK.", ref: 1 }],
    },
  },
  "follow-up": {
    sectionRefs: [[[1, 2], [1]], [[1, 2], [4, 3]], [[1, 3], [2]], [[1, 2], [2], [2]], [[2], [3]]],
    helpRefs: [[3], [1], [3], [3], [5], [3]],
    stats: {
      2: [{ value: "Up to 5 years", label: "is how long follow-up appointments usually go on after treatment, says Bowel Cancer UK.", ref: 1, picture: "calendar" }],
    },
    charts: {
      1: { kind: "bars", title: "Two colonoscopies to expect", subtitle: "Years after treatment for bowel cancer, as the British Society of Gastroenterology advises", bars: [{ label: "First colonoscopy, around", value: 1 }, { label: "Second colonoscopy, around", value: 4, strong: true }], max: 5, ticks: [0, 1, 2, 3, 4, 5], unit: " years", sources: "Source: Cancer Research UK, Screening for people at high risk of bowel cancer" },
    },
  },
  "stoma": {
    sectionRefs: [[[1], [2], [3]], [[1], [1]], [[1], [1, 6]], [[4, 5], [1], [4, 1]], [[7], [8]]],
    helpRefs: [[1], [8], [4], [4], [8], [9]],
    stats: {
      0: [{ value: "1 in 335", label: "people in the UK are estimated to be living with a stoma, says Colostomy UK.", ref: 3 }],
      1: [{ value: "4 to 6 times a day", label: "is how often an ileostomy bag is emptied; a colostomy bag is changed once or twice a day, says Bowel Cancer UK.", ref: 1 }],
      3: [{ value: "Around 8 weeks", label: "is how long it usually takes to recover from a colostomy and get back to your usual activities, says the NHS.", ref: 4, picture: "calendar" }],
    },
  },
  "bowels": {
    sectionRefs: [[[3, 4], [3]], [[1], [3]], [[2], [2], [2]], [[3, 1], [4], [3]], [[4, 3], [4, 3]]],
    helpRefs: [[4], [1], [4, 3], [4], [1], [1]],
    stats: {
      1: [{ value: "Up to a year", label: "is how long bowel changes after treatment often last, improving most in the first six months, says Bowel Cancer UK.", ref: 1, picture: "calendar" }],
      3: [{ value: "At least 12 weeks", label: "of pelvic floor exercises, 3 times a day, can be needed to rebuild strength in these muscles, says Macmillan.", ref: 4, picture: "calendar" }],
    },
  },
  "food": {
    sectionRefs: [[[1, 2], [2, 3]], [[2], [4, 2]], [[2, 5], [2, 3]], [[4], [4]], [[4, 6], [4, 7]]],
    helpRefs: [[2], [2], [4], [4], [2], [4]],
    stats: {
      0: [{ value: "About 6 weeks", label: "on a low-fibre diet after surgery, before gradually adding fibre back, says Cancer Research UK.", ref: 2, picture: "calendar" }],
      1: [{ value: "6 to 8 glasses", label: "of fluid each day is what Bowel Cancer UK suggests.", ref: 4 }],
      3: [{ value: "At least 30g", label: "of fibre a day is what healthy adults should eat, says Bowel Cancer UK; your team will say how much suits you after treatment.", ref: 4 }],
    },
  },
  "neuropathy": {
    sectionRefs: [[[1], [3, 2]], [[2], [2, 1]], [[1], [3, 1]], [[1], [1, 4]], [[1], [1, 5]]],
    helpRefs: [[2, 1], [2], [1], [1], [1], [5, 1]],
    stats: {
      1: [{ value: "Up to 2 weeks", label: "after each chemotherapy cycle is when neuropathy symptoms may still come on, says Bowel Cancer UK.", ref: 2, picture: "calendar" }],
    },
  },
  "core": {
    sectionRefs: [[[1, 2], [3]], [[3, 4], [5]], [[6], [7, 8], [9, 6]], [[6, 9], [9]], [[9, 10], [4]]],
    helpRefs: [[1, 2], [3, 4], [6], [6], [10, 9], [4]],
    stats: {
      2: [{ value: "Up to 3 months", label: "of avoiding heavy lifting after surgery helps prevent a hernia, says Bowel Cancer UK.", ref: 6, picture: "calendar" }],
      4: [{ value: "30 minutes", label: "of moderate exercise, such as fast walking, on at least five days a week is what to build up to, says Bowel Cancer UK.", ref: 4, picture: "hours" }],
    },
    charts: {
      2: { kind: "donut", title: "Hernias are common", subtitle: "People with a stoma, out of every 100, as Colostomy UK states", value: 70, prefix: "Up to", subject: "people with a stoma", label: "will develop a parastomal hernia", sources: "Source: Colostomy UK, What is a parastomal hernia?" },
    },
  },
  "out-and-about": {
    sectionRefs: [[[1], [2, 3, 4]], [[3, 4, 5], [1]], [[1, 6], [4]], [[7, 3], [3, 7]], [[3], [3]]],
    helpRefs: [[3, 5], [1], [1], [3, 2], [3], [3]],
    stats: {
      1: [{ value: "Over 9,000", label: "accessible toilets across the UK can be opened with a Radar key, says Colostomy UK.", ref: 5 }],
    },
  },
  "work": {
    sectionRefs: [[[1], [2]], [[3, 4], [2, 5]], [[2, 5], [2], [2]], [[6, 2], [6]], [[7, 8], [7, 2]]],
    helpRefs: [[2], [2, 7], [7], [6], [3], [2]],
    stats: {
      0: [{ value: "From day one", label: "of a cancer diagnosis, you meet the disability definition under the Equality Act 2010, says the government.", ref: 1, picture: "calendar" }],
    },
  },
  "relationships": {
    sectionRefs: [[[1, 2], [1]], [[3, 2], [3, 1, 2], [1, 3]], [[1, 3], [1, 3]], [[1, 3], [2, 4]], [[1, 2], [3]]],
    helpRefs: [[1], [2], [1, 3], [1], [1]],
    stats: {
      1: [{ value: "At least 6 weeks", label: "after major surgery for bowel cancer before having sex, says Cancer Research UK.", ref: 3, picture: "calendar" }],
    },
  },
  "mood": {
    sectionRefs: [[[1], [1]], [[1, 2], [1]], [[4, 3], [4, 3]], [[3], [1, 7, 5], [2, 6]], [[7, 8], [9, 10, 7]]],
    helpRefs: [[1], [3], [3], [1, 5], [8, 9], [10]],
    stats: {
      3: [{ value: "8am to 8pm", label: "every day is when the free Macmillan helpline is open, on 0808 808 0000, says the NHS.", ref: 6, picture: "hours" }],
      4: [{ value: "24 hours a day", label: "Samaritans are there to listen, free on 116 123, says Samaritans.", ref: 8, picture: "hours" }],
    },
  },
  "family": {
    sectionRefs: [[[1], [1]], [[2], [2]], [[1, 2], [2, 3]], [[1, 2], [3]], [[4, 5], [4, 3]]],
    helpRefs: [[2], [2], [1], [1, 2], [3, 4]],
    stats: {
      1: [
        { value: "Around 1 in 30", label: "bowel cancers are linked to Lynch syndrome, says Bowel Cancer UK.", ref: 2, picture: "one-in", of: 30 },
        { value: "1 in 2", label: "is the chance that the children, full siblings and parents of someone with Lynch syndrome have it too, says Bowel Cancer UK.", ref: 2, picture: "half" },
      ],
      4: [{ value: "Every 2 years", label: "NHS bowel screening is offered to people aged 50 to 74 in England, says the NHS.", ref: 4, picture: "calendar" }],
    },
    charts: {
      0: { kind: "range", title: "A small share runs in families", subtitle: "Bowel cancers thought to be caused by a change in a known gene, out of every 100", from: 5, to: 10, sources: "Source: Bowel Cancer UK, Family history" },
      2: { kind: "bars", title: "When Lynch screening starts", subtitle: "Age at which colonoscopies every two years begin for people with Lynch syndrome, by gene change", bars: [{ label: "MLH1, MSH2 or EPCAM", value: 25, strong: true }, { label: "MSH6 or PMS2", value: 35 }], max: 80, ticks: [0, 20, 40, 60, 80], unit: " years", sources: "Source: Bowel Cancer UK, Lynch syndrome" },
    },
  },
};
