import type { FeatureSpec } from "./feature-spec";

// The Loneliness and Alcohol pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsReachPieces.tsx.

export const REACH_PIECES = [
  // Loneliness
  "lone-alone-together", "lone-life-changes", "lone-ripple", "lone-doorstep", "lone-stair-steps", "lone-noticeboard", "lone-any-hour", "lone-video-call", "lone-world-widens", "lone-link-path", "lone-street-doors", "lone-two-weeks",
  // Alcohol and your health
  "alc-unit-blocks", "alc-calm-dip", "alc-body-markers", "alc-spectrum", "alc-week-plan", "alc-signposts", "alc-gentle-stairs", "alc-leaflet-check", "alc-table-talk", "alc-sofa-talk", "alc-recovery-road", "alc-help-tiles",
] as const;
export type ReachPiece = (typeof REACH_PIECES)[number];

const loneU = "Understanding loneliness", loneT = "Treat and manage", loneL = "Living with loneliness";
const alcU = "Understanding alcohol", alcT = "Treat and manage", alcL = "Living with alcohol";

export const REACH_FEATURES: Record<string, FeatureSpec<ReachPiece>> = {
  "loneliness/what-it-is": { kicker: loneU, headline: "Lonely is not the same as alone", standfirst: "What loneliness is, the kinds it comes in, how common it is, and why the feelings can pass.", piece: "lone-alone-together", pullQuote: "It is very subjective and personal to us." },
  "loneliness/causes": { kicker: loneU, headline: "The changes that leave us lonely", standfirst: "Loss, moves, illness and even happy changes, at any age, and sometimes no clear reason at all.", piece: "lone-life-changes", pullQuote: "Sometimes there is no obvious cause, and it is just how we feel." },
  "loneliness/health": { kicker: loneU, headline: "What loneliness does to body and mind", standfirst: "How lasting loneliness can affect mood, sleep, habits and health, and why connection helps.", piece: "lone-ripple", pullQuote: "It is also great for our physical and mental health." },
  "loneliness/signs": { kicker: loneU, headline: "The quiet signs someone is lonely", standfirst: "Why people rarely say, the changes to look out for, who is more at risk, and what to do if you are worried.", piece: "lone-doorstep", pullQuote: "When someone is lonely, they can feel misunderstood and be irritable at times." },
  "loneliness/small-steps": { kicker: loneT, headline: "Small steps back to people", standfirst: "Starting small, keeping in touch, being around people, planning ahead and talking about how you feel.", piece: "lone-stair-steps", pullQuote: "Set small targets that you can easily achieve." },
  "loneliness/groups": { kicker: loneT, headline: "Finding your people", standfirst: "Groups built around what you enjoy, what local services run, peer support and volunteering.", piece: "lone-noticeboard", pullQuote: "Look for a support group for people going through something similar." },
  "loneliness/befriending": { kicker: loneT, headline: "A friendly voice, any hour", standfirst: "The Silver Line, weekly friendship calls, home visits, and where to turn if you are struggling to cope.", piece: "lone-any-hour", pullQuote: "Call Samaritans free on 116 123 if you need someone to listen." },
  "loneliness/online": { kicker: loneT, headline: "Closer on screen, safely", standfirst: "Video calls and group chats, a first call, staying safe, and keeping screens alongside meeting up.", piece: "lone-video-call", pullQuote: "Not everyone online is who they say they are." },
  "loneliness/after-illness": { kicker: loneL, headline: "When illness shrinks your world", standfirst: "Why illness can isolate, support made for this stage, help through a GP, and getting out again.", piece: "lone-world-widens", pullQuote: "Changes in health can affect daily routines, relationships and our sense of connection." },
  "loneliness/social-prescribing": { kicker: loneL, headline: "A prescription for connection", standfirst: "What a link worker does, what they might link you to, how to get one, and finding things yourself.", piece: "lone-link-path", pullQuote: "Then they connect you with activities and services that can help." },
  "loneliness/helping-others": { kicker: loneL, headline: "Small kindnesses that matter", standfirst: "Saying hello, practical help, talking, giving your time, and what to do if you are worried about someone.", piece: "lone-street-doors", pullQuote: "Suggest meeting for lunch, going for a walk, or trying a new club together." },
  "loneliness/low-mood": { kicker: loneL, headline: "When lonely becomes low", standfirst: "When low mood may be depression, how to get help, and who to contact right now if things feel very hard.", piece: "lone-two-weeks", pullQuote: "A low mood that lasts 2 weeks or more could be a sign of depression." },

  "alcohol/units": { kicker: alcU, headline: "What is really in a drink", standfirst: "What a unit is, how drinks add up, the 14-unit weekly guideline, and why low risk is not the same as safe.", piece: "alc-unit-blocks", pullQuote: "The less you drink, the lower the health risks." },
  "alcohol/mood-sleep": { kicker: alcU, headline: "The calm that doesn't last", standfirst: "How alcohol affects anxiety, mood and sleep, and how cutting down can help you feel better.", piece: "alc-calm-dip", pullQuote: "Even a couple of drinks will have an effect." },
  "alcohol/health": { kicker: alcU, headline: "What drinking does over years", standfirst: "How alcohol raises the risk of cancer, heart, liver and brain problems, and why less is lower risk.", piece: "alc-body-markers", pullQuote: "Alcohol-related liver disease does not always cause symptoms in the early stages." },
  "alcohol/dependence": { kicker: alcU, headline: "When drinking gets hard to control", standfirst: "What dependence is, the signs, why withdrawal is a warning, why it happens and where to get help.", piece: "alc-spectrum", pullQuote: "Needing more alcohol to get the same effect is an early sign." },
  "alcohol/cutting-down": { kicker: alcT, headline: "Small steps that add up", standfirst: "Checking it is safe first, making a plan, smaller and weaker drinks, knowing your triggers, and slips.", piece: "alc-week-plan", pullQuote: "Making a list of yours helps you know what to look out for." },
  "alcohol/support": { kicker: alcT, headline: "Help is free, and closer than you think", standfirst: "Where to start, what services offer, helplines, groups, and stopping safely with advice.", piece: "alc-signposts", pullQuote: "You can also refer yourself to a local alcohol service, without a GP referral." },
  "alcohol/stopping-safely": { kicker: alcT, headline: "Stopping safely, with help", standfirst: "Why stopping suddenly is risky if you are dependent, the signs, what help looks like, and when it is an emergency.", piece: "alc-gentle-stairs", pullQuote: "If you have become physically dependent, stopping overnight could be harmful." },
  "alcohol/medicines": { kicker: alcT, headline: "Your medicines and a drink", standfirst: "How alcohol interacts with antibiotics, mood medicines, painkillers and blood thinners, and checking first.", piece: "alc-leaflet-check", pullQuote: "Alcohol interacts with some medicines." },
  "alcohol/social": { kicker: alcL, headline: "Out with friends, on your terms", standfirst: "Spotting pressure, planning ahead, what to say, low and alcohol-free drinks, and other ways to meet.", piece: "alc-table-talk", pullQuote: "Going for drinks is not the only way to see friends." },
  "alcohol/family": { kicker: alcL, headline: "When someone you love drinks too much", standfirst: "Signs to notice, having the conversation, what you can and cannot do, and support for you.", piece: "alc-sofa-talk", pullQuote: "Decide in advance what help you're comfortable giving, and stick to it." },
  "alcohol/after-illness": { kicker: alcL, headline: "Drinking after a stroke or illness", standfirst: "Getting your own advice, lowering the risk, how alcohol can slow recovery, other illnesses and your medicines.", piece: "alc-recovery-road", pullQuote: "Some medicines interact with alcohol, so ask your pharmacist or doctor." },
  "alcohol/urgent": { kicker: alcL, headline: "When to call for help now", standfirst: "Severe withdrawal, alcohol poisoning, liver warning signs, a mental health crisis, and when to see a GP.", piece: "alc-help-tiles", pullQuote: "You will not be wasting anyone's time." },
};
