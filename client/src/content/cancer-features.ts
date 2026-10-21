import type { FeatureSpec } from "./feature-spec";

// The Cancer & recovery pieces' feature pages (see feature-spec.ts). Pictures: components/library/NewsCancerPieces.tsx.

export const CANCER_PIECES = [
  // Breast cancer
  "bc-timeline", "bc-report", "bc-checkups", "bc-worry-curve", "bc-battery", "bc-arm-reach", "bc-tablet-years", "bc-fog", "bc-mirror", "bc-flush", "bc-desk", "bc-closeness", "bc-path",
  // Bowel cancer
  "bwc-colon", "bwc-tnm", "bwc-years", "bwc-stoma", "bwc-settle", "bwc-plate", "bwc-tingle", "bwc-footpath", "bwc-ready-bag", "bwc-week", "bwc-talk", "bwc-feel", "bwc-tree",
] as const;
export type CancerPiece = (typeof CANCER_PIECES)[number];

const bcU = "Understanding breast cancer", bcR = "Recovering after treatment", bcL = "Living with breast cancer";
const bwcU = "Understanding bowel cancer", bwcR = "Recovering after treatment", bwcL = "Living with bowel cancer";

export const CANCER_FEATURES: Record<string, FeatureSpec<CancerPiece>> = {
  // Breast cancer
  "breast/what-you-had": { kicker: bcU, headline: "Each treatment, and what it was for", standfirst: "Surgery, radiotherapy, chemotherapy, targeted medicines and hormone therapy: what each one was for.", piece: "bc-timeline", pullQuote: "Surgery is usually the first treatment for people with breast cancer." },
  "breast/results": { kicker: bcU, headline: "Reading your pathology report, word by word", standfirst: "What the grade, size, stage, hormone receptors and HER2 in your results mean.", piece: "bc-report", pullQuote: "The grade is different from the stage." },
  "breast/follow-up": { kicker: bcU, headline: "After treatment, still looked after", standfirst: "How follow-up works, open access, mammograms, other tests and support at the end of treatment.", piece: "bc-checkups", pullQuote: "Follow-up appointments usually focus on how you are feeling." },
  "breast/recurrence": { kicker: bcU, headline: "The worry, and the real numbers", standfirst: "Why the worry about it coming back is so common, what the numbers can and cannot tell you, and what to look out for.", piece: "bc-worry-curve", pullQuote: "There is no evidence that feeling worried or stressed alters your prognosis." },
  "breast/fatigue": { kicker: bcR, headline: "Not just tired: fatigue after treatment", standfirst: "What cancer-related fatigue is, why it happens, and how pacing, moving and your team can help.", piece: "bc-battery", pullQuote: "For most people, fatigue gets better after treatment finishes." },
  "breast/arm-shoulder": { kicker: bcR, headline: "Getting your shoulder moving again", standfirst: "Why the arm and shoulder exercises matter, how to build them up, and what to know about cording and lymphoedema.", piece: "bc-arm-reach", pullQuote: "Cording usually gets better with physiotherapy and exercise." },
  "breast/hormone-tablets": { kicker: bcR, headline: "Living with years of hormone tablets", standfirst: "How tamoxifen and the aromatase inhibitors work, their side effects, and what to do if they are hard to live with.", piece: "bc-tablet-years", pullQuote: "Some people find tamoxifen made by one manufacturer suits them better than another." },
  "breast/chemo-brain": { kicker: bcR, headline: "Clearing the fog, slowly", standfirst: "What chemo brain is, what you might notice, why it happens and ways to cope.", piece: "bc-fog", pullQuote: "Any problems with concentration or memory are usually temporary and mild." },
  "breast/body": { kicker: bcL, headline: "Your body, your choice", standfirst: "Scars settling, looking at yourself, staying flat or not, bras and clothes, and other changes.", piece: "bc-mirror", pullQuote: "It might take up to a year for things to settle." },
  "breast/menopause": { kicker: bcL, headline: "A sudden menopause, and what helps", standfirst: "Why treatment can bring on menopausal symptoms, what helps hot flushes, why HRT is not usual, and other support.", piece: "bc-flush", pullQuote: "Hot flushes are the most commonly reported menopausal symptom caused by breast cancer treatment." },
  "breast/work": { kicker: bcL, headline: "Back to work, with the law behind you", standfirst: "Your rights, planning your return, reasonable adjustments, help with costs and other paths.", piece: "bc-desk", pullQuote: "You cannot lose your job or be treated unfairly because you have breast cancer." },
  "breast/relationships": { kicker: bcL, headline: "Finding closeness again", standfirst: "Why desire can change, dryness, pain and tiredness, talking with your partner, and getting help.", piece: "bc-closeness", pullQuote: "Most people with breast cancer who have sexual problems do not need long-term therapy." },
  "breast/mood": { kicker: bcL, headline: "The low months, and the way through", standfirst: "Why the end of treatment can be hard, low mood or depression, anxiety, treatment, and where to get urgent help.", piece: "bc-path", pullQuote: "Low mood often improves with time." },
  // Bowel cancer
  "bowel/what-you-had": { kicker: bwcU, headline: "Three treatments, three different jobs", standfirst: "Surgery, chemotherapy and radiotherapy for bowel cancer: what each one was for, and what happens after the operation.", piece: "bwc-colon", pullQuote: "Surgery is the most common treatment for bowel cancer." },
  "bowel/results": { kicker: bwcU, headline: "Reading your report, letter by letter", standfirst: "What staging is, what T, N and M mean, how they become a number stage, the grade, and tests on the cancer cells.", piece: "bwc-tnm", pullQuote: "Knowing the stage helps you and your doctor decide on the best treatment." },
  "bowel/follow-up": { kicker: bwcU, headline: "Checks that thin out over five years", standfirst: "Why you have follow-up, the tests, how often, booking your own checks, and the worry appointments can bring.", piece: "bwc-years", pullQuote: "You do not have to wait until your next visit." },
  "bowel/stoma": { kicker: bwcU, headline: "A new opening, a new routine", standfirst: "What a stoma is, colostomy or ileostomy, temporary or permanent, the first weeks at home, and when to get help.", piece: "bwc-stoma", pullQuote: "It should not hurt, but it can bleed easily when scratched or wiped." },
  "bowel/bowels": { kicker: bwcR, headline: "Settling into a new normal", standfirst: "What changes after surgery, how long it lasts, LARS after rectal surgery, what can help, and caring for your skin.", piece: "bwc-settle", pullQuote: "It can take time and perseverance to re-train the bowel." },
  "bowel/food": { kicker: bwcR, headline: "Low fibre first, then step by step", standfirst: "Eating in the first weeks, how to eat, finding what suits you, adding fibre back, and eating with a stoma.", piece: "bwc-plate", pullQuote: "Take small mouthfuls and chew your food slowly." },
  "bowel/neuropathy": { kicker: bwcR, headline: "When chemotherapy leaves you tingling", standfirst: "What peripheral neuropathy is, what happens during treatment, whether it gets better, what helps, and staying safe.", piece: "bwc-tingle", pullQuote: "But many people find ways of coping with the changes." },
  "bowel/core": { kicker: bwcR, headline: "From the bedside to a daily walk", standfirst: "Moving in hospital, the first weeks at home, protecting your tummy, building your core and getting fitter.", piece: "bwc-footpath", pullQuote: "A short walk each day may help keep your bowel motions soft and regular." },
  "bowel/out-and-about": { kicker: bwcL, headline: "Ready to go out again", standfirst: "Planning ahead, toilet keys and cards, a bag of supplies, travelling, and insurance.", piece: "bwc-ready-bag", pullQuote: "Planning ahead so that you are prepared can help you feel more confident." },
  "bowel/work": { kicker: bwcL, headline: "Back to work, on fair terms", standfirst: "Your rights from diagnosis, when to go back, adjustments that help, Access to Work and confidence at work.", piece: "bwc-week", pullQuote: "This is sometimes called a phased return." },
  "bowel/relationships": { kicker: bwcL, headline: "Intimacy after bowel cancer", standfirst: "Body image, sex after surgery, sex with a stoma, talking about it, and menopause and fertility.", piece: "bwc-talk", pullQuote: "You may want to get used to your stoma before having sex." },
  "bowel/mood": { kicker: bwcL, headline: "When treatment ends and feelings begin", standfirst: "Why feelings can surface when treatment ends, what you might feel, when it is more than a low patch, what helps and urgent help.", piece: "bwc-feel", pullQuote: "There is no right or wrong way to feel." },
  "bowel/family": { kicker: bwcL, headline: "Does it run in my family?", standfirst: "Why most bowel cancer is not inherited, Lynch syndrome, what it means for relatives, and screening for everyone else.", piece: "bwc-tree", pullQuote: "Lynch syndrome is linked to around 1 in 30 cases of bowel cancer." },
};
