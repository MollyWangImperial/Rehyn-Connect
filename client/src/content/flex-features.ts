import type { FeatureSpec } from "./feature-spec";

// The Joint hypermobility and Bursitis pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsFlexPieces.tsx.

export const FLEX_PIECES = [
  // Joint hypermobility
  "hmob-bend-further", "hmob-tipping-scale", "hmob-two-circles", "hmob-nine-points", "hmob-muscle-straps", "hmob-pain-toolkit", "hmob-energy-battery", "hmob-slip-signpost", "hmob-neutral-desk", "hmob-two-groups", "hmob-desk-and-class", "hmob-linked-hands",
  // Bursitis
  "burs-cushion", "burs-four-spots", "burs-three-scenes", "burs-hot-signs", "burs-ice-rest", "burs-wall-chair", "burs-needle-cards", "burs-course-line", "burs-pad-pillow", "burs-rest-to-move", "burs-work-bench", "burs-loop-break",
] as const;
export type FlexPiece = (typeof FLEX_PIECES)[number];

const hmU = "Understanding joint hypermobility", hmT = "Treat and manage", hmL = "Living with joint hypermobility";
const buU = "Understanding bursitis", buT = "Treat and manage", buL = "Living with bursitis";

export const FLEX_FEATURES: Record<string, FeatureSpec<FlexPiece>> = {
  "hypermobility/what-it-is": { kicker: hmU, headline: "Bendier than most, and often fine", standfirst: "What hypermobility means, why many people have no problems, why joints are looser and who it affects.", piece: "hmob-bend-further", pullQuote: "Many people with hypermobile joints do not have any problems." },
  "hypermobility/when-a-problem": { kicker: hmU, headline: "From coping to not coping", standfirst: "Joint symptoms, symptoms beyond the joints, dizziness on standing, what can tip the balance and when to see a GP.", piece: "hmob-tipping-scale", pullQuote: "Symptoms vary a lot between people, and also vary over time for each person." },
  "hypermobility/hsd-heds": { kicker: hmU, headline: "Two names, one way to manage", standfirst: "How hypermobility spectrum disorder and hypermobile EDS are related, why there are so many names, and how hEDS runs in families.", piece: "hmob-two-circles", pullQuote: "The NHS says HSD is treated in the same way as hEDS." },
  "hypermobility/diagnosis": { kicker: hmU, headline: "Nine points, and the bigger picture", standfirst: "Seeing a GP, the Beighton score and its limits, further referrals, and managing symptoms while you wait.", piece: "hmob-nine-points", pullQuote: "It does not include joints such as the shoulders and hips." },
  "hypermobility/strengthening": { kicker: hmT, headline: "Muscles that do the holding", standfirst: "Why strength and fitness are the main treatment, what a physiotherapist can do, and the kinds of exercise that help.", piece: "hmob-muscle-straps", pullQuote: "Hydrotherapy can also help strengthen your joints." },
  "hypermobility/pain": { kicker: hmT, headline: "Many tools for changing pain", standfirst: "Why pain varies, painkillers, heat and relaxation, keeping moving, and pain clinics when pain is not getting better.", piece: "hmob-pain-toolkit", pullQuote: "Distraction helps too, because thinking about pain makes you notice it more." },
  "hypermobility/fatigue": { kicker: hmT, headline: "Spending energy wisely", standfirst: "Why hypermobility can be so tiring, pacing and the four Ps, sleep, and when to see a GP.", piece: "hmob-energy-battery", pullQuote: "Pacing involves balancing periods of activity with periods of rest." },
  "hypermobility/dislocations": { kicker: hmT, headline: "When a joint slips out", standfirst: "What to do for a dislocated shoulder or kneecap, signs of a broken bone, and lowering the risk of it happening again.", piece: "hmob-slip-signpost", pullQuote: "Call 999 for an ambulance if you cannot get to A&E by yourself." },
  "hypermobility/everyday": { kicker: hmL, headline: "Small changes, less strain", standfirst: "Keeping joints in their middle range, changing position, footwear, easier ways to do tasks, and daily habits.", piece: "hmob-neutral-desk", pullQuote: "Do not overextend your joints just because you can." },
  "hypermobility/exercise": { kicker: hmL, headline: "Low impact, high control", standfirst: "Why keeping active helps, gentle places to start, what to take care with, and the many ways to move.", piece: "hmob-two-groups", pullQuote: "Not doing any exercise can make symptoms worse." },
  "hypermobility/work-school": { kicker: hmL, headline: "Making room at work and school", standfirst: "Reasonable adjustments, the Equality Act, Access to Work, and support at school and in PE.", piece: "hmob-desk-and-class", pullQuote: "Long-term means 12 months or more." },
  "hypermobility/support": { kicker: hmL, headline: "You are not on your own", standfirst: "Why feelings are part of it, charities and helplines, small steps, talking therapies and urgent help.", piece: "hmob-linked-hands", pullQuote: "Would you speak to a friend like that?" },

  "bursitis/what-it-is": { kicker: buU, headline: "The small cushion that swells", standfirst: "What a bursa does, what happens in bursitis, new cushions, and the infected and non-infected kinds.", piece: "burs-cushion", pullQuote: "This increases the amount of fluid in the bursa and makes it expand." },
  "bursitis/where": { kicker: buU, headline: "Hip, shoulder, elbow and knee", standfirst: "Where bursitis most often happens, and how it shows at the hip, shoulder, elbow and knee.", piece: "burs-four-spots", pullQuote: "This is why it is sometimes called student's elbow." },
  "bursitis/causes": { kicker: buU, headline: "Kneeling, leaning and a knock", standfirst: "Pressure, rubbing and overuse, the jobs and sports linked with it, other conditions, the hip, and infection.", piece: "burs-three-scenes", pullQuote: "Trochanteric bursitis is a very common condition, but there is usually no obvious cause." },
  "bursitis/urgent": { kicker: buU, headline: "When a hot, swollen joint needs help", standfirst: "When to see a GP, signs that may mean infection, getting help urgently, joint infection and sepsis.", piece: "burs-hot-signs", pullQuote: "This can be a sign of infection." },
  "bursitis/self-care": { kicker: buT, headline: "Rest, ice and a cushion", standfirst: "Resting the joint, using ice, painkillers and using them safely, and comfort at night.", piece: "burs-ice-rest", pullQuote: "NICE's guidance for GPs adds not to put ice directly onto the skin." },
  "bursitis/exercises": { kicker: buT, headline: "Moves matched to the joint", standfirst: "What a physiotherapist can do, getting physiotherapy, exercises for the hip and shoulder, and starting gently.", piece: "burs-wall-chair", pullQuote: "If any exercise worsens your pain, seek urgent medical advice." },
  "bursitis/injections": { kicker: buT, headline: "Draining, injections and rarely surgery", standfirst: "The checks first, draining the fluid, injections, stronger medicines, and why surgery is rare.", piece: "burs-needle-cards", pullQuote: "Overall, about 95% settle over a longer time." },
  "bursitis/infected": { kicker: buT, headline: "Seeing the treatment through", standfirst: "Antibiotics, testing the fluid, checking treatment is working, taking antibiotics well, and recovery.", piece: "burs-course-line", pullQuote: "Stopping treatment too soon could lead to the infection coming back." },
  "bursitis/pressure": { kicker: buL, headline: "Take the weight off the cushion", standfirst: "Easing pressure when kneeling, leaning, sleeping, sitting, carrying and walking.", piece: "burs-pad-pillow", pullQuote: "Do not carry anything heavy." },
  "bursitis/activity": { kicker: buL, headline: "Rest first, then keep moving", standfirst: "Moving again after rest, keeping the joint moving, building up, general fitness and keeping going.", piece: "burs-rest-to-move", pullQuote: "This may mean doing jobs in short bursts with regular breaks." },
  "bursitis/work": { kicker: buL, headline: "Kneeling, leaning and your employer", standfirst: "Jobs linked with bursitis, changing how you work, occupational therapy, adjustments and Access to Work.", piece: "burs-work-bench", pullQuote: "Your workplace might be able to provide a footrest, back support or other equipment." },
  "bursitis/coming-back": { kicker: buL, headline: "Keeping it from coming back", standfirst: "Why bursitis can return, what helps, weight and joints, how most people recover, and if it keeps returning.", piece: "burs-loop-break", pullQuote: "Bursitis can be treated, but it can come back." },
};
