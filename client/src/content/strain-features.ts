import type { FeatureSpec } from "./feature-spec";

// The Burnout and Carer stress pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsStrainPieces.tsx.

export const STRAIN_PIECES = [
  // Burnout
  "burn-tank", "burn-four-signs", "burn-load", "burn-desk-home", "burn-stones", "burn-fit-note", "burn-therapy-chairs", "burn-boundary", "burn-phased", "burn-day-dial", "burn-duty", "burn-plan",
  // Carer stress
  "carer-scales", "carer-signs-body", "carer-rights-shield", "carer-assessment-talk", "carer-respite-week", "carer-hours", "carer-gp-record", "carer-group", "carer-self-care", "carer-work-home", "carer-emergency-plan", "carer-ups-downs",
] as const;
export type StrainPiece = (typeof STRAIN_PIECES)[number];

const burnU = "Understanding burnout", burnT = "Treat and manage", burnL = "Living with burnout";
const carerU = "Understanding carer stress", carerT = "Treat and manage", carerL = "Living with carer stress";

export const STRAIN_FEATURES: Record<string, FeatureSpec<StrainPiece>> = {
  "burnout/what-it-is": { kicker: burnU, headline: "Long stress, and the tank running dry", standfirst: "What burnout is, how the World Health Organization describes it, how it builds, why it matters and why recovery is possible.", piece: "burn-tank", pullQuote: "It can develop gradually, so you may not notice it straight away." },
  "burnout/signs": { kicker: burnU, headline: "Feelings, thoughts, body and work", standfirst: "How burnout can show in your feelings, your thoughts, your body and the way you work, and when to get help.", piece: "burn-four-signs", pullQuote: "Burnout can change the way you think." },
  "burnout/causes": { kicker: burnU, headline: "Where the load comes from", standfirst: "Why burnout rarely has one cause: pressures at work and outside it, what people say drives it, and finding your own causes.", piece: "burn-load", pullQuote: "Burnout does not have one single cause." },
  "burnout/or-depression": { kicker: burnU, headline: "Burnout or depression?", standfirst: "Why the two get confused, how burnout and depression differ, and when to see a GP.", piece: "burn-desk-home", pullQuote: "Depression is a real illness with real symptoms." },
  "burnout/rest": { kicker: burnT, headline: "A gradual road back", standfirst: "How long recovery can take, time away from the cause, dealing with the cause, rest that restores and being kind to yourself.", piece: "burn-stones", pullQuote: "Recovery is gradual, and every step forward counts." },
  "burnout/gp": { kicker: burnT, headline: "What a GP can do", standfirst: "When to see a GP, what they can offer, checking for other causes of tiredness, time off, fit notes and sick pay.", piece: "burn-fit-note", pullQuote: "If you have kept a stress diary, you could take it with you." },
  "burnout/therapy": { kicker: burnT, headline: "Talking it through", standfirst: "How talking therapies fit into recovery, referring yourself, what CBT and counselling involve, and trying self-help CBT.", piece: "burn-therapy-chairs", pullQuote: "Self-help CBT can be a start." },
  "burnout/boundaries": { kicker: burnT, headline: "Saying no, without the guilt", standfirst: "What boundaries are, setting them at work, speaking up, working smarter and protecting your time at home.", piece: "burn-boundary", pullQuote: "Boundaries matter outside work too." },
  "burnout/work": { kicker: burnL, headline: "Back to work, one step at a time", standfirst: "Getting ready to go back, the return to work meeting, a phased return, adjustments and support, and not going straight back to the same pressure.", piece: "burn-phased", pullQuote: "How long it lasts depends on your circumstances." },
  "burnout/daily-habits": { kicker: burnL, headline: "Sleep, food and movement", standfirst: "The four foundations of health, and small changes to sleep, movement, food and drink and the working day.", piece: "burn-day-dial", pullQuote: "Physical activity can ease stress, improve your mood and boost your energy." },
  "burnout/employer": { kicker: burnL, headline: "What employers owe you", standfirst: "Employers' legal duties on stress, the six areas to manage, adjustments and flexible working, and what a healthier workplace does.", piece: "burn-duty", pullQuote: "Your employer must share the results of any risk assessment with you." },
  "burnout/preventing": { kicker: burnL, headline: "Stopping it coming back", standfirst: "A wellbeing plan, spotting stress early, everyday protection, building resilience, and why it is not all in your control.", piece: "burn-plan", pullQuote: "Be compassionate to yourself, and remember that this is not your fault." },

  "carer-stress/what-it-is": { kicker: carerU, headline: "The quiet weight of caring", standfirst: "Who counts as a carer, why the pressure builds, how it can affect you, and why your own needs matter.", piece: "carer-scales", pullQuote: "Just talking about how you feel can make a huge difference." },
  "carer-stress/signs": { kicker: carerU, headline: "Signs you might be missing", standfirst: "Why the signs are easy to miss, how stress shows in your mind, body, behaviour and sleep, and what to do when low mood lasts.", piece: "carer-signs-body", pullQuote: "Stress can also leave you irritable, tearful, hopeless or scared." },
  "carer-stress/rights": { kicker: carerU, headline: "Rights that are yours to use", standfirst: "Your right to a carer's assessment, carer's leave, time off in an emergency, flexible working and fair treatment.", piece: "carer-rights-shield", pullQuote: "This is called discrimination by association." },
  "carer-stress/assessment": { kicker: carerU, headline: "A conversation, not a test", standfirst: "What a carer's assessment is, how to ask for one, getting ready, what happens on the day and what comes afterwards.", piece: "carer-assessment-talk", pullQuote: "A carer's assessment is not a test of your abilities as a carer." },
  "carer-stress/breaks": { kicker: carerT, headline: "Time out is not giving up", standfirst: "Why breaks matter, the kinds of respite, getting assessed first, paying for a break and planning it.", piece: "carer-respite-week", pullQuote: "Some care homes take advance bookings, which can help you plan a holiday." },
  "carer-stress/money": { kicker: carerT, headline: "Money you may be missing", standfirst: "Carer's Allowance, who can claim, protecting your pension, other benefits and keeping your claim up to date.", piece: "carer-hours", pullQuote: "Carer's Allowance is the main state benefit for carers." },
  "carer-stress/gp": { kicker: carerT, headline: "Put caring on your record", standfirst: "Why to tell your GP you are a carer, what they can help with, a free flu jab, your own health and ways to save time.", piece: "carer-gp-record", pullQuote: "Carers UK has a letter template to help you register your role." },
  "carer-stress/talking": { kicker: carerT, headline: "Talk to someone who gets it", standfirst: "NHS talking therapies and what you might be offered, carers' groups where others understand, and helplines.", piece: "carer-group", pullQuote: "You do not need a diagnosed mental health condition." },
  "carer-stress/health": { kicker: carerL, headline: "Look after the one who cares", standfirst: "Why your own health matters too, and help with sleep, moving more, food and drink and protecting your back.", piece: "carer-self-care", pullQuote: "Physical exercise is a simple way to relieve tension." },
  "carer-stress/work": { kicker: carerL, headline: "Making work and care fit", standfirst: "Balancing a job with caring, carer's leave, time off when something goes wrong, flexible working and telling your employer.", piece: "carer-work-home", pullQuote: "It is your choice whether to tell your employer about your caring role." },
  "carer-stress/emergency": { kicker: carerL, headline: "A plan for if you cannot be there", standfirst: "Why to plan ahead, what to put in an emergency plan, sharing it, extra help and what to do in a crisis.", piece: "carer-emergency-plan", pullQuote: "Putting one together might not take as long as you think." },
  "carer-stress/feelings": { kicker: carerL, headline: "Mixed feelings are normal", standfirst: "Why mixed feelings are common, guilt, resentment and anger, grief before a loss and finding an outlet.", piece: "carer-ups-downs", pullQuote: "Acknowledge your feelings and try not to bottle them up." },
};
