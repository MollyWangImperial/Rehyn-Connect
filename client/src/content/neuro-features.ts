import type { FeatureSpec } from "./feature-spec";

// The ADHD in adults and Autism in adults pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsNeuroPieces.tsx.

export const NEURO_PIECES = [
  // ADHD in adults
  "adhd-three-circles", "adhd-inner-buzz", "adhd-path-stops", "adhd-bubble-cluster", "adhd-dose-steps", "adhd-toolbox", "adhd-desk-reminders", "adhd-check-calendar", "adhd-office-plan", "adhd-two-bubbles", "adhd-road-fork", "adhd-call-grid",
  // Autism in adults
  "aut-petals", "aut-mask-signs", "aut-stepping-stones", "aut-battery", "aut-signpost", "aut-sense-dials", "aut-lamp-chair", "aut-door-tags", "aut-quiet-desk", "aut-bridge-bubbles", "aut-week-planner", "aut-map-pins",
] as const;
export type NeuroPiece = (typeof NEURO_PIECES)[number];

const adhdU = "Understanding ADHD", adhdT = "Treat and manage", adhdL = "Living with ADHD";
const autU = "Understanding autism", autT = "Support and next steps", autL = "Living with autism";

export const NEURO_FEATURES: Record<string, FeatureSpec<NeuroPiece>> = {
  "adhd/what-it-is": { kicker: adhdU, headline: "A different way of being wired", standfirst: "The three kinds of challenge, why ADHD happens, and the strengths that can come with it.", piece: "adhd-three-circles", pullQuote: "It may be caused by genetic differences and often runs in families." },
  "adhd/adults": { kicker: adhdU, headline: "When restlessness turns inward", standfirst: "How ADHD changes with age, the everyday signs, and why it can show up later in life.", piece: "adhd-inner-buzz", pullQuote: "ADHD often lasts into adulthood." },
  "adhd/assessment": { kicker: adhdU, headline: "From a GP chat to a specialist answer", standfirst: "Seeing a GP, what the assessment involves, waiting, Right to Choose and private reports.", piece: "adhd-path-stops", pullQuote: "Right to Choose only applies in England." },
  "adhd/other-conditions": { kicker: adhdU, headline: "Rarely just one thing", standfirst: "The conditions that often come with ADHD, how they affect each other, and looking after your mental health.", piece: "adhd-bubble-cluster", pullQuote: "Anxiety and depression can make ADHD symptoms worse." },
  "adhd/medicines": { kicker: adhdT, headline: "Slow start, steady steps", standfirst: "Who medicine is for, stimulants and non-stimulants, finding the right dose and taking it safely.", piece: "adhd-dose-steps", pullQuote: "You will usually be able to tell quickly whether they help." },
  "adhd/therapy": { kicker: adhdT, headline: "Skills to work with your brain", standfirst: "What CBT, mindfulness, coaching and occupational therapy can help with, and how to get them.", piece: "adhd-toolbox", pullQuote: "Many people find mindfulness helpful, but it is not right for everyone." },
  "adhd/organising": { kicker: adhdT, headline: "Let the reminders do the remembering", standfirst: "Changing your surroundings, reminders, protecting your focus, money and building a routine.", piece: "adhd-desk-reminders", pullQuote: "Sleep matters too, as not sleeping well can make ADHD symptoms worse." },
  "adhd/health-checks": { kicker: adhdT, headline: "Checks that keep medicine safe", standfirst: "The checks before starting, blood pressure and weight, the yearly review and when to get help quickly.", piece: "adhd-check-calendar", pullQuote: "Your doctor will usually measure your blood pressure and pulse every 6 months." },
  "adhd/work": { kicker: adhdL, headline: "Your right to adjustments at work", standfirst: "The Equality Act, adjustments that can help, Access to Work and starting the conversation.", piece: "adhd-office-plan", pullQuote: "Long-term means 12 months or more." },
  "adhd/relationships": { kicker: adhdL, headline: "Understanding ADHD together", standfirst: "How ADHD can show up between people, telling those around you, and support for you both.", piece: "adhd-two-bubbles", pullQuote: "There may be things you can both do to solve it." },
  "adhd/driving": { kicker: adhdL, headline: "Fit to drive? It depends", standfirst: "When to tell the DVLA, how to do it, and what ADHD medicine means on the road.", piece: "adhd-road-fork", pullQuote: "If your driving is not affected, you do not need to tell them." },
  "adhd/support": { kicker: adhdL, headline: "You do not have to do this alone", standfirst: "Peer groups, charities, finding good information, and help right now if you are struggling.", piece: "adhd-call-grid", pullQuote: "Samaritans is free to call on 116 123, day or night." },

  "autism/what-it-is": { kicker: autU, headline: "A different way of experiencing the world", standfirst: "What autism is, why it is not an illness, how it can show, and what the spectrum means.", piece: "aut-petals", pullQuote: "It is not caused by vaccines or medicines." },
  "autism/signs": { kicker: autU, headline: "The signs that were there all along", standfirst: "Masking, communication, routines and senses, feeling different, and signs in women.", piece: "aut-mask-signs", pullQuote: "Autistic men can also mask." },
  "autism/diagnosis": { kicker: autU, headline: "From GP to report, step by step", standfirst: "Getting a referral, preparing for the GP, waiting, the assessment itself and your results.", piece: "aut-stepping-stones", pullQuote: "This is called Right to Choose." },
  "autism/masking": { kicker: autU, headline: "The hidden cost of fitting in", standfirst: "What masking is, why people do it, autistic fatigue and burnout, and protecting your energy.", piece: "aut-battery", pullQuote: "Unlike work burnout, it affects every part of life." },
  "autism/after-diagnosis": { kicker: autT, headline: "The start of understanding yourself", standfirst: "Feelings after a diagnosis, a plan for support, help you can ask for, and telling people.", piece: "aut-signpost", pullQuote: "There is no single correct way to feel." },
  "autism/sensory": { kicker: autT, headline: "When the world feels too loud", standfirst: "How senses can be processed differently, common triggers, sensory overload and what can help.", piece: "aut-sense-dials", pullQuote: "Many people have a mix of both." },
  "autism/mental-health": { kicker: autT, headline: "Support that fits the way you think", standfirst: "Why anxiety and depression are more common, signs to look out for, and adapted therapy and medicines.", piece: "aut-lamp-chair", pullQuote: "It is important to seek help as early as possible." },
  "autism/healthcare": { kicker: autT, headline: "Appointments that work for you", standfirst: "Why appointments can be hard, your right to adjustments, and making your needs known.", piece: "aut-door-tags", pullQuote: "These changes are called reasonable adjustments, and they are often quite small." },
  "autism/work": { kicker: autL, headline: "Your rights and adjustments at work", standfirst: "The Equality Act, adjustments that help, telling your employer, Access to Work, and if things go wrong.", piece: "aut-quiet-desk", pullQuote: "It is your choice." },
  "autism/relationships": { kicker: autL, headline: "Connection, on your own terms", standfirst: "Different ways of communicating, loneliness, making friends, partners and looking after yourself socially.", piece: "aut-bridge-bubbles", pullQuote: "Neither style is correct, and effort is needed on both sides." },
  "autism/routines": { kicker: autL, headline: "Calm in the routine, a plan for change", standfirst: "Why routines matter, when change is hard, when to get support, and preparing for change.", piece: "aut-week-planner", pullQuote: "Seeing a new place or practising a journey before the day can help." },
  "autism/support": { kicker: autL, headline: "You are not on your own", standfirst: "Where support comes from, the online and local community, help for families, and help right now.", piece: "aut-map-pins", pullQuote: "A formal diagnosis is not needed for the National Autistic Society's peer support." },
};
