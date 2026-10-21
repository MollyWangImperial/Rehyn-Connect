import type { FeatureSpec } from "./feature-spec";

// The Cancer & recovery pieces' feature pages (see feature-spec.ts). Pictures: components/library/NewsAftercarePieces.tsx.

export const AFTERCARE_PIECES = [
  // Prostate cancer
  "pc-four-paths", "pc-psa-lines", "pc-grade-sum", "pc-watch-timeline", "pc-sling", "pc-drops", "pc-slow-curve", "pc-body-tags", "pc-step-up", "pc-two-close", "pc-desk-case", "pc-sunrise-path",
  // Tiredness after treatment
  "cf-battery-drain", "cf-two-beds", "cf-weights", "cf-road-back", "cf-energy-blocks", "cf-walk-weeks", "cf-night-line", "cf-little-often", "cf-phased-return", "cf-helping-hands", "cf-loop-breaks", "cf-together-diary",
] as const;
export type AftercarePiece = (typeof AFTERCARE_PIECES)[number];

// Neither page sets a recoverTitle, and both recover columns are about recovering from treatment's after-effects.
const pcU = "Understanding prostate cancer", pcR = "Recovering after treatment", pcL = "Living with prostate cancer";
const cfU = "Understanding tiredness after treatment", cfR = "Recovering after treatment", cfL = "Living with tiredness after treatment";

export const AFTERCARE_FEATURES: Record<string, FeatureSpec<AftercarePiece>> = {
  // Prostate cancer
  "prostate/what-you-had": { kicker: pcU, headline: "Four paths after a prostate diagnosis", standfirst: "Watching, surgery, radiotherapy and hormone therapy, and what each one aims to do.", piece: "pc-four-paths", pullQuote: "Prostate cancer does not always need treatment." },
  "prostate/psa": { kicker: pcU, headline: "Reading your PSA after treatment", standfirst: "What the PSA test measures, how it falls after surgery or radiotherapy, and when a rise matters.", piece: "pc-psa-lines", pullQuote: "Your PSA may rise after radiotherapy and then fall again." },
  "prostate/results": { kicker: pcU, headline: "Grade, stage and your CPG", standfirst: "How the Gleason score, grade group and stage fit together into a Cambridge Prognostic Group.", piece: "pc-grade-sum", pullQuote: "If you have prostate cancer, the score will be between 6 and 10." },
  "prostate/surveillance": { kicker: pcU, headline: "Watched, not treated, still in control", standfirst: "Why some cancers are watched, who it suits, what the tests involve and living with the uncertainty.", piece: "pc-watch-timeline", pullQuote: "Many men on active surveillance will never need treatment." },
  "prostate/pelvic-floor": { kicker: pcR, headline: "Small squeezes, steady progress", standfirst: "What the pelvic floor muscles do, when to start, and how to do slow and fast squeezes.", piece: "pc-sling", pullQuote: "It takes time to see an improvement." },
  "prostate/bladder": { kicker: pcR, headline: "Leaks and urgency, and what helps", standfirst: "Why bladder problems can follow treatment, how they usually improve, and the products and help available.", piece: "pc-drops", pullQuote: "Leaking urine usually improves with time." },
  "prostate/erections": { kicker: pcR, headline: "Erections after treatment, and what helps", standfirst: "Why erections change after treatment, how long recovery can take, and the treatments on offer.", piece: "pc-slow-curve", pullQuote: "You may hear this called penile rehabilitation." },
  "prostate/hormone-therapy": { kicker: pcR, headline: "Living well on hormone therapy", standfirst: "Why the side effects happen, and what helps with hot flushes, tiredness, bones and mood.", piece: "pc-body-tags", pullQuote: "Hormone therapy itself can affect your mood." },
  "prostate/exercise": { kicker: pcL, headline: "Muscle, bones and mood: keep moving", standfirst: "How much to aim for, which kinds of exercise help muscle and bones, and staying safe.", piece: "pc-step-up", pullQuote: "Physical activity can help to improve fatigue." },
  "prostate/relationships": { kicker: pcL, headline: "Staying close through the changes", standfirst: "How cancer can change a relationship, talking about it, and other ways to stay close.", piece: "pc-two-close", pullQuote: "Fear of rejection is natural, whether or not you have had cancer." },
  "prostate/work": { kicker: pcL, headline: "Your rights at work and on the move", standfirst: "Your rights, reasonable adjustments, going back to work and travelling with side effects.", piece: "pc-desk-case", pullQuote: "This protection does not end when your treatment finishes." },
  "prostate/mood": { kicker: pcL, headline: "Low after treatment: you are not alone", standfirst: "Why mood can change, the signs of depression, what helps and where to get help now.", piece: "pc-sunrise-path", pullQuote: "A mental health emergency should be taken as seriously as a physical one." },
  // Tiredness after treatment
  "cancer-fatigue/why": { kicker: cfU, headline: "Why treatment drains you", standfirst: "What cancer-related fatigue is, why it may happen, and how each treatment can add to it.", piece: "cf-battery-drain", pullQuote: "Fatigue in people with cancer can be more severe." },
  "cancer-fatigue/not-laziness": { kicker: cfU, headline: "Real fatigue, not a lack of effort", standfirst: "How cancer fatigue differs from ordinary tiredness, and why it can be hard for others to see.", piece: "cf-two-beds", pullQuote: "Cancer fatigue doesn't usually go away with sleep or rest." },
  "cancer-fatigue/other-causes": { kicker: cfU, headline: "The hidden extras worth checking", standfirst: "Anaemia, thyroid problems, sleep, mood, pain and medicines can all add to fatigue.", piece: "cf-weights", pullQuote: "Treating the cause and the symptoms can improve how you feel." },
  "cancer-fatigue/how-long": { kicker: cfU, headline: "The slow road back to energy", standfirst: "Most people improve after treatment, and how long it takes depends on the treatment and the person.", piece: "cf-road-back", pullQuote: "For most people, fatigue gets better after treatment finishes." },
  "cancer-fatigue/pacing": { kicker: cfR, headline: "Spend energy where it matters", standfirst: "Planning your day, keeping a fatigue diary, resting well and saving energy in everyday jobs.", piece: "cf-energy-blocks", pullQuote: "You'll be more tired later in the day and less able to cope." },
  "cancer-fatigue/gentle-exercise": { kicker: cfR, headline: "Moving a little, gaining energy back", standfirst: "Why activity helps fatigue, how to start small and build up, and staying safe.", piece: "cf-walk-weeks", pullQuote: "Even a single 15-minute walk can give you an energy boost." },
  "cancer-fatigue/sleep": { kicker: cfR, headline: "Exhausted but awake at night", standfirst: "Why sleep can be hard, and how a routine, short naps and winding down can help.", piece: "cf-night-line", pullQuote: "Shorter naps earlier in the day are less likely to affect your sleep." },
  "cancer-fatigue/food": { kicker: cfR, headline: "Little and often for energy", standfirst: "Regular small meals, a balanced plate, easy options on tired days and enough to drink.", piece: "cf-little-often", pullQuote: "Sometimes you feel tired simply because you're mildly dehydrated." },
  "cancer-fatigue/work": { kicker: cfL, headline: "Back to work, at your pace", standfirst: "Your rights, adjustments that allow for tiredness, and planning a flexible return.", piece: "cf-phased-return", pullQuote: "This protection does not end when treatment finishes." },
  "cancer-fatigue/asking-help": { kicker: cfL, headline: "Saying yes to help", standfirst: "Accepting offers, handing over everyday jobs and finding support outside the family.", piece: "cf-helping-hands", pullQuote: "Just about everyone needs support from someone else when they have cancer." },
  "cancer-fatigue/mood": { kicker: cfL, headline: "Breaking the tired, low loop", standfirst: "How fatigue and low mood feed each other, the signs of depression, and the help available.", piece: "cf-loop-breaks", pullQuote: "Depression is a real illness with real symptoms, not a sign of weakness." },
  "cancer-fatigue/family": { kicker: cfL, headline: "How the people around can help", standfirst: "Practical help, going to appointments, food without pressure, and looking after yourself as a carer.", piece: "cf-together-diary", pullQuote: "Acknowledge that fatigue is difficult to cope with." },
};
