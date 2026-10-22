import type { FeatureSpec } from "./feature-spec";

// The Achilles tendinopathy and Bunions pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsFeetPieces.tsx.

export const FEET_PIECES = [
  // Achilles tendinopathy
  "ach-heel-cord", "ach-load-seesaw", "ach-snap-signs", "ach-year-line", "ach-heel-raise", "ach-ice-breaks", "ach-heel-wedge", "ach-care-steps", "ach-run-build", "ach-shift-boots", "ach-easy-load", "ach-early-light",
  // Bunions
  "bun-toe-lean", "bun-three-roots", "bun-sore-spots", "bun-who-to-see", "bun-roomy-shoe", "bun-pad-row", "bun-cool-warm", "bun-op-months", "bun-walk-week", "bun-two-shoes", "bun-soft-skin", "bun-family-tree",
] as const;
export type FeetPiece = (typeof FEET_PIECES)[number];

const achU = "Understanding Achilles tendinopathy", achT = "Treat and manage", achL = "Living with Achilles tendinopathy";
const bunU = "Understanding bunions", bunT = "Treat and manage", bunL = "Living with bunions";

export const FEET_FEATURES: Record<string, FeatureSpec<FeetPiece>> = {
  "achilles/what-it-is": { kicker: achU, headline: "The strongest tendon, under strain", standfirst: "What the Achilles tendon does, what tendinopathy means, the two places it hurts and who gets it.", piece: "ach-heel-cord", pullQuote: "It connects the large calf muscles to the heel bone." },
  "achilles/causes": { kicker: achU, headline: "Load the tendon was not ready for", standfirst: "Too much load, changes in activity, long spells standing still, age and health conditions, and some medicines.", piece: "ach-load-seesaw", pullQuote: "The exact cause of Achilles tendinopathy is not known." },
  "achilles/symptoms": { kicker: achU, headline: "Stiff mornings, or a sudden snap", standfirst: "The usual signs, how it starts, what a ruptured tendon feels like, where to get help and when to see a GP.", piece: "ach-snap-signs", pullQuote: "Tendinopathy develops gradually." },
  "achilles/how-long": { kicker: achU, headline: "Months, sometimes a year", standfirst: "Why it takes months, how most cases improve, what the studies found and when to check in along the way.", piece: "ach-year-line", pullQuote: "NICE's Clinical Knowledge Summary notes that full recovery can take a year or longer." },
  "achilles/exercises": { kicker: achT, headline: "Build the tendon up slowly", standfirst: "Why loading helps, checking first, heel raises and calf stretches, and how much pain is acceptable.", piece: "ach-heel-raise", pullQuote: "Your pain should be no worse the morning after you have exercised." },
  "achilles/self-care": { kicker: achT, headline: "Less of what hurts, not bed rest", standfirst: "Changing what you do, heat or ice, painkillers and using them safely, and support for the ankle.", piece: "ach-ice-breaks", pullQuote: "Achilles tendinopathy does not improve with rest." },
  "achilles/footwear": { kicker: achT, headline: "A small lift, on both sides", standfirst: "Why shoes matter, heel raises, insoles, running shoes and surfaces, and everyday shoes.", piece: "ach-heel-wedge", pullQuote: "The evidence for heel lifts is limited." },
  "achilles/further-treatment": { kicker: achT, headline: "Physiotherapy first, then other options", standfirst: "Referring yourself to physiotherapy, what a physiotherapist may offer, steroid injections, shockwave therapy and surgery.", piece: "ach-care-steps", pullQuote: "Surgery may be considered after at least six months of treatment without an operation." },
  "achilles/sport": { kicker: achL, headline: "Ease off, then build back", standfirst: "Why runners get it, whether to keep running, easing the load, going back and warming up.", piece: "ach-run-build", pullQuote: "A sharp pain will stop you running altogether." },
  "achilles/work": { kicker: achL, headline: "Staying in work helps recovery", standfirst: "Work and recovery, standing and walking, shoes and breaks, talking to your employer and Access to Work.", piece: "ach-shift-boots", pullQuote: "You do not need to be symptom free before you consider returning to work." },
  "achilles/weight": { kicker: achL, headline: "Small changes, less load", standfirst: "Why weight can matter, its part in looking after the tendon, BMI, small realistic changes and moving in a way that suits you.", piece: "ach-easy-load", pullQuote: "Exercise is still important whatever your weight." },
  "achilles/coming-back": { kicker: achL, headline: "Spot it early, keep it settled", standfirst: "Why it can come back, spotting early signs, habits that help, building strength and building up slowly.", piece: "ach-early-light", pullQuote: "Remember to warm up before sports." },

  "bunions/what-it-is": { kicker: bunU, headline: "A big toe that leans in", standfirst: "What a bunion is, what changes in the foot, lumps that are not bunions, and what can and cannot change it.", piece: "bun-toe-lean", pullQuote: "Bunions are bony lumps that form on the side of the feet." },
  "bunions/causes": { kicker: bunU, headline: "Genes first, shoes make it worse", standfirst: "A cause that is not always known, the shape of the foot, shoes, arthritis and arches, and who gets them.", piece: "bun-three-roots", pullQuote: "Bunions are also associated with joint diseases, such as rheumatoid arthritis and osteoarthritis." },
  "bunions/symptoms": { kicker: bunU, headline: "More than a lump by the toe", standfirst: "The main signs, why size and pain do not always match, problems that can come with it, and when it may be something else.", piece: "bun-sore-spots", pullQuote: "This is usually worse when wearing shoes and walking." },
  "bunions/when-to-see-gp": { kicker: bunU, headline: "When to get your bunion checked", standfirst: "When to see a GP, what happens there, what a podiatrist does, getting to one, and signs that need help sooner.", piece: "bun-who-to-see", pullQuote: "Podiatrists specialise in foot, ankle and leg healthcare." },
  "bunions/shoes": { kicker: bunT, headline: "Wide, low and laced up", standfirst: "The shape to look for, room at the front, buying shoes and what to avoid.", piece: "bun-roomy-shoe", pullQuote: "Get your shoes professionally fitted if possible, as feet can change size." },
  "bunions/padding": { kicker: bunT, headline: "Pads ease it, they cannot straighten it", standfirst: "Bunion pads, insoles, toe spacers and splints, and what they can and cannot do.", piece: "bun-pad-row", pullQuote: "More severe bunions can only be corrected by surgery." },
  "bunions/pain-relief": { kicker: bunT, headline: "Cool, warm, or a tablet", standfirst: "Painkillers, using ibuprofen safely, ice and heat, and other things that ease the pain.", piece: "bun-cool-warm", pullQuote: "Ibuprofen can cause more side effects than paracetamol." },
  "bunions/surgery": { kicker: bunT, headline: "A day in hospital, months to heal", standfirst: "When surgery is offered, what happens, the weeks after, what to expect afterwards and when to get help.", piece: "bun-op-months", pullQuote: "Surgery is not done just to improve how your feet look." },
  "bunions/walking": { kicker: bunL, headline: "Keep walking, in the right shoes", standfirst: "Why keep moving, shoes for walking, how much to aim for, and exercises for the feet.", piece: "bun-walk-week", pullQuote: "Walking is simple, free and one of the easiest ways to get more active." },
  "bunions/work-occasions": { kicker: bunL, headline: "Work shoes, best shoes, kinder shoes", standfirst: "Shoes for work, heels and special occasions, time off work and support at work.", piece: "bun-two-shoes", pullQuote: "Surgery can affect the shoes you wear later." },
  "bunions/skin": { kicker: bunL, headline: "Taking the pressure off the skin", standfirst: "Why bunions and hard skin go together, corns and calluses, what you can do, everyday foot care and when not to treat it yourself.", piece: "bun-soft-skin", pullQuote: "Corns are small lumps of hard skin." },
  "bunions/family": { kicker: bunL, headline: "Bunions across the generations", standfirst: "A family pattern, what may be passed on, children and later life, and what a family can do.", piece: "bun-family-tree", pullQuote: "They can often be seen in different generations in one family." },
};
