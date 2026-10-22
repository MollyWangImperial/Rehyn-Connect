import type { FeatureSpec } from "./feature-spec";

// The Rotator cuff problems and Shoulder replacement pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsShoulderPieces.tsx.

export const SHOULDER_PIECES = [
  // Rotator cuff problems
  "rc-four-tendons", "rc-name-tags", "rc-painful-arc", "rc-scan-choice", "rc-peas-bottle", "rc-wall-slide", "rc-one-injection", "rc-tendon-anchor", "rc-elbow-in", "rc-desk-sling", "rc-back-to-play", "rc-patient-path",
  // Shoulder replacement
  "shr-four-types", "shr-weigh-scale", "shr-home-ready", "shr-day-strip", "shr-sling-weeks", "shr-pendulum", "shr-back-sleep", "shr-signs-999", "shr-arm-first", "shr-road-desk", "shr-active-week", "shr-ten-years",
] as const;
export type ShoulderPiece = (typeof SHOULDER_PIECES)[number];

const rcU = "Understanding rotator cuff problems", rcT = "Treat and manage", rcL = "Living with rotator cuff problems";
const shrU = "Understanding shoulder replacement", shrR = "Recovering after surgery", shrL = "Living with a shoulder replacement";

export const SHOULDER_FEATURES: Record<string, FeatureSpec<ShoulderPiece>> = {
  "rotator-cuff/what-it-is": { kicker: rcU, headline: "Four muscles holding a small socket", standfirst: "How the shoulder joint works, what the rotator cuff does, what can go wrong and how common it is.", piece: "rc-four-tendons", pullQuote: "With increasing age the tendons gradually get thinner and more vulnerable." },
  "rotator-cuff/types": { kicker: rcU, headline: "Many names, mostly one problem", standfirst: "Tendinopathy, impingement and bursitis, and how tears from wear differ from tears after an injury.", piece: "rc-name-tags", pullQuote: "They can cause symptoms, or none at all." },
  "rotator-cuff/symptoms": { kicker: rcU, headline: "Lifting, reaching and the painful arc", standfirst: "Where the pain is felt, the movements and nights that make it worse, signs of a tear and when to get help urgently.", piece: "rc-painful-arc", pullQuote: "There may be pain at night." },
  "rotator-cuff/diagnosis": { kicker: rcU, headline: "Your story, an examination, sometimes a scan", standfirst: "How the shoulder is examined, when X-rays and scans help, and how to get seen.", piece: "rc-scan-choice", pullQuote: "These scans are not usually requested by GPs." },
  "rotator-cuff/self-care": { kicker: rcT, headline: "Rest briefly, then keep it moving", standfirst: "Resting early on, changing what makes it worse, cold and heat, paracetamol and anti-inflammatories.", piece: "rc-peas-bottle", pullQuote: "Stay active and gently move your shoulder." },
  "rotator-cuff/exercises": { kicker: rcT, headline: "Three moves, six days a week", standfirst: "Why exercise is the main treatment, checking first, three exercises, how much pain is okay and making it a habit.", piece: "rc-wall-slide", pullQuote: "Check with your GP or physiotherapist first." },
  "rotator-cuff/injections": { kicker: rcT, headline: "Calming the pain to get moving", standfirst: "What a steroid injection does, how it fits with physiotherapy, how many are given, aftercare and warning signs.", piece: "rc-one-injection", pullQuote: "No more than two are given." },
  "rotator-cuff/surgery": { kicker: rcT, headline: "When a tendon needs stitching back", standfirst: "Who is referred, rotator cuff repair, decompression, what a repair can achieve and the weeks afterwards.", piece: "rc-tendon-anchor", pullQuote: "Most shoulder problems improve without surgery." },
  "rotator-cuff/daily-tasks": { kicker: rcL, headline: "Elbow in, palm up, pillows placed", standfirst: "Reaching up, sleeping, sitting, jobs around the house, and dressing and washing with a painful shoulder.", piece: "rc-elbow-in", pullQuote: "Only iron essential items, with the ironing board at waist height." },
  "rotator-cuff/work": { kicker: rcL, headline: "Desk, lifting and the drive back", standfirst: "How work can affect the shoulder, your desk, help from your employer, returning after a repair, and driving.", piece: "rc-desk-sling", pullQuote: "It is illegal to drive while wearing a sling." },
  "rotator-cuff/sport": { kicker: rcL, headline: "Building back to the game", standfirst: "Sport and overhead activity, staying active while it settles, building strength, sport after a repair and starting small.", piece: "rc-back-to-play", pullQuote: "Start with short sessions involving little effort, then gradually increase the effort or time." },
  "rotator-cuff/long-term": { kicker: rcL, headline: "When the shoulder takes its time", standfirst: "How long recovery can take, pain that lasts, going back for help, keeping the shoulder in use and living with longer-term pain.", piece: "rc-patient-path", pullQuote: "It can take 6 months or longer to recover from shoulder pain." },

  "shoulder-replacement/what-it-is": { kicker: shrU, headline: "A new ball, sometimes a new socket", standfirst: "The shoulder joint, which parts are replaced, total and reverse replacements, and what the operation can do.", piece: "shr-four-types", pullQuote: "The shoulder is a ball-and-socket joint." },
  "shoulder-replacement/deciding": { kicker: shrU, headline: "Weighing up a new shoulder", standfirst: "The treatments that usually come first, when a replacement is considered, the likely gains, the limits and choosing together.", piece: "shr-weigh-scale", pullQuote: "A replacement is not always the most suitable option." },
  "shoulder-replacement/preparing": { kicker: shrU, headline: "Getting the home ready for one hand", standfirst: "The wait, your general health, the pre-admission clinic, practising one-handed and getting home ready.", piece: "shr-home-ready", pullQuote: "Try to finish heavier household jobs before the operation." },
  "shoulder-replacement/hospital": { kicker: shrU, headline: "In on the morning, home in days", standfirst: "Arriving, the anaesthetic, the operation, waking up, and the days on the ward before going home.", piece: "shr-day-strip", pullQuote: "The operation usually takes around an hour and a half." },
  "shoulder-replacement/sling": { kicker: shrR, headline: "Wearing the sling well", standfirst: "Why the sling matters, how long it is worn, putting it on, and the first days and weeks after surgery.", piece: "shr-sling-weeks", pullQuote: "Keep wearing it until your consultant or physiotherapist tells you to stop." },
  "shoulder-replacement/exercises": { kicker: shrR, headline: "Small moves, every day", standfirst: "Why the exercises matter, doing only the ones ticked for you, early moves, pain relief and outpatient physiotherapy.", piece: "shr-pendulum", pullQuote: "Never rush the exercises." },
  "shoulder-replacement/pain-sleep": { kicker: shrR, headline: "Comfortable days, easier nights", standfirst: "Pain after the operation, the first nights, taking painkillers well, sleeping, and what to do if pain does not settle.", piece: "shr-back-sleep", pullQuote: "Avoid lying on the operated side." },
  "shoulder-replacement/warning-signs": { kicker: shrR, headline: "Know the signs: 111 or 999", standfirst: "Possible complications, infection, blood clots, when to call 999, and other changes in the shoulder.", piece: "shr-signs-999", pullQuote: "Do not drive to A&E." },
  "shoulder-replacement/daily-life": { kicker: shrL, headline: "Operated arm in first", standfirst: "Dressing, washing, reaching and moving, jobs around the house and help at home after a shoulder replacement.", piece: "shr-arm-first", pullQuote: "Dress your operated arm first and undress it last." },
  "shoulder-replacement/driving-work": { kicker: shrL, headline: "Back on the road, back at work", standfirst: "When you can drive again, insurance and the DVLA, returning to work, planning ahead and Access to Work.", piece: "shr-road-desk", pullQuote: "Your consultant will give you guidance, as it varies with your circumstances." },
  "shoulder-replacement/activity": { kicker: shrL, headline: "Active, without the heavy lifting", standfirst: "Staying active, what to avoid, realistic movement, the weekly activity guide and building up gradually.", piece: "shr-active-week", pullQuote: "Most people can carry on with normal everyday activities." },
  "shoulder-replacement/long-term": { kicker: shrL, headline: "Built to last ten years", standfirst: "How long a new shoulder lasts, a second operation, protecting the joint, follow-up and carrying on improving.", piece: "shr-ten-years", pullQuote: "After this time it may loosen or wear out." },
};
