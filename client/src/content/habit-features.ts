import type { FeatureSpec } from "./feature-spec";

// The Drug use, Gambling and Quitting smoking pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsHabitPieces.tsx.

export const HABIT_PIECES = [
  // Drug use
  "drug-loop", "drug-two-way", "drug-dose-steps", "drug-checklist", "drug-two-doors", "drug-ramp", "drug-three-tiles", "drug-999-steps", "drug-trail", "drug-tea-talk", "drug-shield", "drug-circle-chairs",
  // Gambling
  "gamb-spiral", "gamb-nine-questions", "gamb-escape-door", "gamb-seven", "gamb-clinic-map", "gamb-layers", "gamb-sessions", "gamb-payday", "gamb-detour", "gamb-notebook", "gamb-sofa", "gamb-help-tiles",
  // Quitting smoking
  "smoke-timeline", "smoke-withdrawal-wave", "smoke-relief-loop", "smoke-scales", "smoke-adviser-table", "smoke-patch-bursts", "smoke-two-jars", "smoke-12-week-strip", "smoke-stopwatch", "smoke-plan-card", "smoke-day-dots", "smoke-house",
] as const;
export type HabitPiece = (typeof HABIT_PIECES)[number];

const drugU = "Understanding drug use", drugT = "Treat and manage", drugL = "Living with drug use";
const gambU = "Understanding gambling", gambT = "Treat and manage", gambL = "Living with gambling";
const smokeU = "Understanding smoking", smokeT = "Treat and manage", smokeL = "Staying smoke-free";

export const HABIT_FEATURES: Record<string, FeatureSpec<HabitPiece>> = {
  "drug-use/what-it-is": { kicker: drugU, headline: "When using starts to take control", standfirst: "What addiction means, why it can be hard to stop, and why help works.", piece: "drug-loop", pullQuote: "Addiction is a treatable condition." },
  "drug-use/mental-health": { kicker: drugU, headline: "Drugs, mood and the mind", standfirst: "How drugs and mental health affect each other, from mood to psychosis, and getting help for both.", piece: "drug-two-way", pullQuote: "Seeing your GP is a good first step." },
  "drug-use/prescription": { kicker: drugU, headline: "When medicines become hard to stop", standfirst: "Which medicines can be addictive, how it can creep up, and stopping safely with your doctor.", piece: "drug-dose-steps", pullQuote: "Your doctor will reduce your dose gradually." },
  "drug-use/signs": { kicker: drugU, headline: "Signs that use is becoming a problem", standfirst: "The signs that drug use is taking over, and why they can be hard to see from the inside.", piece: "drug-checklist", pullQuote: "Problems might involve money, strained friendships, broken relationships, your job, or getting arrested." },
  "drug-use/getting-help": { kicker: drugT, headline: "Free help, without judgement", standfirst: "Seeing a GP or referring yourself, what the first appointment is like, and the FRANK helpline.", piece: "drug-two-doors", pullQuote: "A GP may be a good place to start." },
  "drug-use/stopping-safely": { kicker: drugT, headline: "Stopping safely, step by step", standfirst: "Why stopping suddenly can be risky, and how to cut down safely with support.", piece: "drug-ramp", pullQuote: "Gradual reduction is often the best way to quit." },
  "drug-use/treatments": { kicker: drugT, headline: "What treatment looks like", standfirst: "Talking therapies, substitute medicines for opioids, and where treatment happens.", piece: "drug-three-tiles", pullQuote: "Most treatment involves some form of talking therapy." },
  "drug-use/emergency": { kicker: drugT, headline: "If someone has taken too much", standfirst: "When to call 999, what to do while you wait, naloxone, and what to tell the crew.", piece: "drug-999-steps", pullQuote: "Stay with them, and do not leave them alone, even for a moment." },
  "drug-use/relapse": { kicker: drugL, headline: "A slip is not the end", standfirst: "What can trigger a relapse, the early warning signs, and getting back on track.", piece: "drug-trail", pullQuote: "Recovery is a process, and relapsing is sometimes a part of that process." },
  "drug-use/family": { kicker: drugL, headline: "When someone you love uses drugs", standfirst: "Talking to someone you love about drugs, what you can and cannot do, and support for you.", piece: "drug-tea-talk", pullQuote: "You may need support or professional help yourself too." },
  "drug-use/harm-reduction": { kicker: drugL, headline: "Staying safer if you are not ready to stop", standfirst: "Help with staying safe and healthy, the risks of mixing, and free naloxone and testing.", piece: "drug-shield", pullQuote: "You can never really know what is in any street or counterfeit drug." },
  "drug-use/support": { kicker: drugL, headline: "You do not have to do it alone", standfirst: "How peer support helps, 12-step groups, SMART Recovery and finding a group near you.", piece: "drug-circle-chairs", pullQuote: "Your keyworker can tell you where your nearest group is." },

  "gambling/what-it-is": { kicker: gambU, headline: "The chase that leads further in", standfirst: "What gambling disorder is, how common it is, chasing losses, and why help works.", piece: "gamb-spiral", pullQuote: "Anyone can develop a gambling disorder." },
  "gambling/signs": { kicker: gambU, headline: "Nine honest questions", standfirst: "The NHS's nine questions, the signs others may notice, and recognising a problem.", piece: "gamb-nine-questions", pullQuote: "If these go unnoticed, they can get worse." },
  "gambling/mental-health": { kicker: gambU, headline: "When escape becomes the worry", standfirst: "How gambling, mood, alcohol and drugs affect each other, and treating them together.", piece: "gamb-escape-door", pullQuote: "But over time, it can make things worse." },
  "gambling/affected-others": { kicker: gambU, headline: "One person gambles, seven feel it", standfirst: "How gambling harms partners, children and friends, and the support there for you.", piece: "gamb-seven", pullQuote: "Being close to someone with a gambling disorder can be very difficult." },
  "gambling/getting-help": { kicker: gambT, headline: "Free help, no letter needed", standfirst: "Free NHS gambling clinics you can refer yourself to, the National Gambling Helpline and other free support.", piece: "gamb-clinic-map", pullQuote: "Do not wait until things get worse." },
  "gambling/blocking": { kicker: gambT, headline: "Layers between you and the bet", standfirst: "GAMSTOP, blocking software, bank blocks and self-exclusion from venues.", piece: "gamb-layers", pullQuote: "It does not close your bank account or affect your credit score." },
  "gambling/therapy": { kicker: gambT, headline: "Changing the thoughts behind the bets", standfirst: "What CBT for gambling involves, treatment in an NHS clinic, and naltrexone.", piece: "gamb-sessions", pullQuote: "There are often tasks to complete between sessions." },
  "gambling/money": { kicker: gambT, headline: "Bills first, debts faced", standfirst: "Free debt advice, protecting the money you have, and dealing with lenders.", piece: "gamb-payday", pullQuote: "Money struggles can feel overwhelming, but you are not alone." },
  "gambling/urges": { kicker: gambL, headline: "Step around the trigger", standfirst: "Knowing your triggers, avoiding gambling settings and adverts, and filling the time.", piece: "gamb-detour", pullQuote: "Drugs and alcohol make it harder to stick to your limits." },
  "gambling/relapse": { kicker: gambL, headline: "A slip, not a fall", standfirst: "Why slips happen, getting back on track, and keeping the barriers up.", piece: "gamb-notebook", pullQuote: "NICE recognises that relapse after treatment can be very distressing." },
  "gambling/family": { kicker: gambL, headline: "Kindness, boundaries and help for you", standfirst: "Starting the conversation, looking after yourself, protecting money, and support for you.", piece: "gamb-sofa", pullQuote: "Words matter." },
  "gambling/crisis": { kicker: gambL, headline: "You do not have to wait", standfirst: "Where to get help right now, someone to talk to, and getting through today.", piece: "gamb-help-tiles", pullQuote: "Samaritans listen, and will not judge or tell you what to do." },

  "quitting-smoking/why-quit": { kicker: smokeU, headline: "From 20 minutes to 15 years", standfirst: "What changes in your body after you stop, from the first 20 minutes to the years ahead.", piece: "smoke-timeline", pullQuote: "This is a good sign that your body is cleaning out your airways." },
  "quitting-smoking/nicotine": { kicker: smokeU, headline: "Withdrawal is real, and it passes", standfirst: "How nicotine dependence works, what withdrawal feels like, and how long it lasts.", piece: "smoke-withdrawal-wave", pullQuote: "Withdrawal can start within a few hours of your last cigarette." },
  "quitting-smoking/mental-health": { kicker: smokeU, headline: "The calm that cigarettes borrow", standfirst: "Why smoking seems to ease stress, and how mood and anxiety can improve after quitting.", piece: "smoke-relief-loop", pullQuote: "But many people with mental health conditions have quit." },
  "quitting-smoking/myths": { kicker: smokeU, headline: "Worries, weighed against the facts", standfirst: "Weight, age, stress and nicotine: common worries about quitting, and what the evidence says.", piece: "smoke-scales", pullQuote: "It is never too late." },
  "quitting-smoking/services": { kicker: smokeT, headline: "Free help, three times the chance", standfirst: "What free local stop smoking services offer, from the first session to 12 weeks of support.", piece: "smoke-adviser-table", pullQuote: "Even if you are not yet ready to quit, they can help." },
  "quitting-smoking/nrt": { kicker: smokeT, headline: "A patch for the day, a spray for the moment", standfirst: "Patches, gum, sprays and more: how nicotine replacement works and how to use it.", piece: "smoke-patch-bursts", pullQuote: "They are the most widely used and well-established stop smoking products." },
  "quitting-smoking/vaping": { kicker: smokeT, headline: "A small fraction of the risk", standfirst: "How vaping compares with smoking, how to switch, staying safe and stopping later.", piece: "smoke-two-jars", pullQuote: "Going back to vaping is much better than starting to smoke again." },
  "quitting-smoking/medicines": { kicker: smokeT, headline: "Tablets that take the pleasure out", standfirst: "Varenicline, cytisine and bupropion: how they work, side effects, and combining them.", piece: "smoke-12-week-strip", pullQuote: "Varenicline alone is unlikely to stop you smoking." },
  "quitting-smoking/cravings": { kicker: smokeL, headline: "Fifteen minutes, then it passes", standfirst: "Why cravings happen, knowing your triggers, and ways to ride them out.", piece: "smoke-stopwatch", pullQuote: "After that, they often start to get easier." },
  "quitting-smoking/plan": { kicker: smokeL, headline: "A plan that sticks", standfirst: "Choosing a quit date, writing down your reasons, getting ready and tracking your progress.", piece: "smoke-plan-card", pullQuote: "This will help you build a stronger plan." },
  "quitting-smoking/slips": { kicker: smokeL, headline: "One cigarette is a lapse, not the end", standfirst: "Why slips happen, telling a lapse from a relapse, and trying again with support.", piece: "smoke-day-dots", pullQuote: "Shrug it off and keep going." },
  "quitting-smoking/others": { kicker: smokeL, headline: "A smoke-free home for everyone", standfirst: "How secondhand smoke spreads, protecting children, and how family and friends can help.", piece: "smoke-house", pullQuote: "Becoming a smoke-free role model means your children are much less likely to start." },
};
