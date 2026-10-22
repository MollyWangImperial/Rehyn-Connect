import type { NewsExtras } from "../ischaemic-news";
// Quitting smoking features: paragraph references (numbers are positions in each answer's own sources in smoking-answers.ts) and big figures, all checked on 22 October 2026.
export const extras: Record<string, Pick<NewsExtras, "sectionRefs" | "helpRefs" | "charts" | "stats">> = {
  "why-quit": {
    sectionRefs: [[[2], [1, 3, 4], [1, 3]], [[1, 2], [1, 3]], [[2, 4], [2]], [[2], [2, 5]], [[1], [1, 5]]],
    helpRefs: [[2], [2], [3], [5], [6, 7]],
    stats: {
      2: [{ value: "Half", label: "the risk of heart attack, 1 year after quitting, compared with a smoker's, says the NHS.", ref: 2, picture: "half" }],
      3: [{ value: "Around £49", label: "a week is what the average smoker can save by quitting, over £2,500 a year, says the NHS.", ref: 2 }],
    },
  },
  "nicotine": {
    sectionRefs: [[[3], [2]], [[4, 1], [4, 7]], [[1], [1]], [[1], [1, 5]], [[2], [2, 1]]],
    helpRefs: [[1, 6], [2, 1], [1], [1], [8, 9]],
    stats: {
      3: [
        { value: "3 to 4 weeks", label: "is how long nicotine withdrawal symptoms last on average, says NHS Better Health.", ref: 1, picture: "calendar" },
        { value: "First 3 days", label: "are usually when withdrawal symptoms are strongest, says NHS Better Health.", ref: 1, picture: "calendar" },
      ],
      4: [{ value: "Within 30 minutes", label: "of waking, a first cigarette could mean a stronger dependence on smoking, says NHS Better Health.", ref: 2, picture: "hours" }],
    },
  },
  "mental-health": {
    sectionRefs: [[[1, 4], [1, 4, 5], [2]], [[1, 3], [1, 3]], [[4], [2]], [[1], [4]], [[1, 4], [1, 4]]],
    helpRefs: [[1, 4], [2], [2], [1], [2], [6, 7]],
    stats: {
      1: [{ value: "As little as 6 weeks", label: "to start feeling the mental health benefits of stopping smoking, says NHS Better Health.", ref: 3, picture: "calendar" }],
      2: [{ value: "28 days", label: "is how long it usually takes for cravings to subside, says NHS Better Health.", ref: 2, picture: "calendar" }],
    },
  },
  "myths": {
    sectionRefs: [[[1], [1], [1]], [[5]], [[2]], [[3], [3]], [[6], [4, 6]]],
    helpRefs: [[1], [1], [5], [4], [7, 8]],
    stats: {
      4: [{ value: "3 times", label: "more likely to quit for good with professional help, says NHS Better Health.", ref: 6, picture: "times" }],
    },
  },
  "services": {
    sectionRefs: [[[1, 2], [2, 3]], [[1], [3]], [[1], [1, 2], [1, 2]], [[1], [1]], [[1, 3], [1, 4]]],
    helpRefs: [[1, 3], [1], [3], [3], [5, 6]],
    stats: {
      0: [{ value: "3 times", label: "more likely to quit for good with professional or expert help, says NHS Better Health.", ref: 2, picture: "times" }],
      2: [{ value: "48 hours", label: "after your last cigarette, your carbon monoxide level drops to a non-smoker's, says NHS Better Health.", ref: 2, picture: "hours" }],
      3: [{ value: "Up to 12 weeks", label: "is how long stop smoking services usually offer support, says the NHS.", ref: 1, picture: "calendar" }],
    },
  },
  "nrt": {
    sectionRefs: [[[1], [1]], [[1], [1]], [[1], [1, 2]], [[1, 2], [1, 2]], [[1, 4], [1, 3, 2]]],
    helpRefs: [[1], [1], [1, 2], [1], [5, 6]],
    stats: {
      0: [{ value: "Double", label: "your chances of quitting for good, with nicotine replacement therapy, says NHS Better Health.", ref: 1, picture: "times" }],
      2: [{ value: "Over 5 times", label: "more likely to quit for good when NRT is combined with a nicotine-free medicine, says NHS Better Health.", ref: 2, picture: "times" }],
      3: [{ value: "About 12 weeks", label: "is how long NRT is recommended for, or as long as it is needed, says NHS Better Health.", ref: 1, picture: "calendar" }],
    },
  },
  "vaping": {
    sectionRefs: [[[2, 1], [1, 2, 3]], [[1, 3], [1]], [[1], [1, 3, 2], [1, 5]], [[1], [1]], [[1, 3], [4]]],
    helpRefs: [[1], [1, 2], [1], [1], [6, 7]],
    stats: {
      1: [
        { value: "Roughly twice", label: "as likely to quit smoking with a nicotine vape as with patches or gum, says NHS Better Health.", ref: 1, picture: "times" },
        { value: "Almost two-thirds", label: "of people who use a vape with support from a local stop smoking service successfully quit, says NHS Better Health.", ref: 1 },
      ],
    },
  },
  "medicines": {
    sectionRefs: [[[1, 2], [1, 2], [1, 10]], [[3, 4], [4, 3], [3, 8]], [[3, 8], [6]], [[5], [9], [7]], [[1], [8]]],
    helpRefs: [[1, 2], [1], [4], [5, 7, 9], [6], [11, 12]],
    stats: {
      1: [{ value: "12 weeks", label: "is how long 1 course of varenicline lasts, says the NHS.", ref: 3, picture: "calendar" }],
      4: [{ value: "Over 5 times", label: "more likely to quit for good when a nicotine-free medicine is combined with nicotine products, says NHS Better Health.", ref: 1, picture: "times" }],
    },
  },
  "cravings": {
    sectionRefs: [[[1, 3], [1]], [[1], [1]], [[3], [1], [2, 1]], [[1, 2], [1]], [[2], [1]]],
    helpRefs: [[1, 3], [1], [1], [1], [2], [4, 5]],
    stats: {
      0: [{ value: "28 days", label: "is when cravings are hardest, as your body adjusts to no nicotine, says NHS Better Health.", ref: 1, picture: "calendar" }],
      2: [{ value: "Up to 15 minutes", label: "is how long a craving lasts, says NHS Better Health.", ref: 3, picture: "hours" }],
    },
  },
  "plan": {
    sectionRefs: [[[1], [1]], [[3, 4], [8]], [[6, 3], [3]], [[5], [5], [3]], [[7, 2], [2, 7]]],
    helpRefs: [[3, 4], [6], [5], [5], [7], [9, 10]],
    stats: {
      1: [{ value: "Within 2 weeks", label: "of deciding to stop is when to set your quit date, says NHS Better Health.", ref: 3, picture: "calendar" }],
      4: [{ value: "5 times", label: "more likely to quit for good if you make it to 28 days smoke-free, says NHS Better Health.", ref: 2, picture: "times" }],
    },
  },
  "slips": {
    sectionRefs: [[[1], [2]], [[1], [1, 3]], [[1]], [[1], [1], [4]], [[1], [5]]],
    helpRefs: [[1], [1], [1], [1], [1], [6, 7]],
    stats: {
      3: [{ value: "Over 5 times", label: "more likely to quit for good when a nicotine-free medicine is combined with NRT, says NHS Better Health.", ref: 1, picture: "times" }],
      4: [{ value: "3 times", label: "more likely to quit for good with professional help, says NHS Better Health.", ref: 1, picture: "times" }],
    },
  },
  "others": {
    sectionRefs: [[[1, 2], [1, 2]], [[1], [1], [1]], [[1], [3]], [[1, 5]], [[4], [4]]],
    helpRefs: [[1], [1], [1, 5], [4], [4], [6, 7]],
    stats: {
      1: [{ value: "More than 5,000", label: "irritants, toxins and cancer-causing substances are in secondhand smoke, says the NHS.", ref: 1 }],
      2: [{ value: "4 times", label: "as likely to take up smoking: teens whose parents or caregivers smoke, says NHS Better Health.", ref: 3, picture: "times" }],
    },
  },
};
