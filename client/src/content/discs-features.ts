import type { FeatureSpec } from "./feature-spec";

// The Slipped disc and Scoliosis pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsDiscsPieces.tsx.

export const DISCS_PIECES = [
  // Slipped disc
  "disc-cushion-bulge", "disc-nerve-paths", "disc-age-load", "disc-red-flags", "disc-step-path", "disc-pill-days", "disc-knee-rolls", "disc-steps-path", "disc-lift-close", "disc-desk-timer", "disc-mattress-hand", "disc-week-plan",
  // Scoliosis
  "scol-c-and-s", "scol-abcd", "scol-tilted-discs", "scol-cobb-angle", "scol-watch-dial", "scol-brace-pads", "scol-rods-recovery", "scol-pain-steps", "scol-move-week", "scol-talk-circle", "scol-birth-plan", "scol-helpline-map",
] as const;
export type DiscsPiece = (typeof DISCS_PIECES)[number];

const discU = "Understanding a slipped disc", discT = "Treat and manage", discL = "Living with a slipped disc";
const scolU = "Understanding scoliosis", scolT = "Treat and manage", scolL = "Living with scoliosis";

export const DISCS_FEATURES: Record<string, FeatureSpec<DiscsPiece>> = {
  "slipped-disc/what-it-is": { kicker: discU, headline: "A cushion that bulges, not slips", standfirst: "What a slipped disc is, how the spine is built, what happens inside the disc and why it often settles with time.", piece: "disc-cushion-bulge", pullQuote: "Many people will never know they have slipped a disc." },
  "slipped-disc/symptoms": { kicker: discU, headline: "From the spine to the toes", standfirst: "Where a slipped disc can be felt, what sciatica is like, symptoms in the neck and arms, and how long they last.", piece: "disc-nerve-paths", pullQuote: "The pain may be worse when moving, sneezing or coughing." },
  "slipped-disc/causes": { kicker: discU, headline: "Age, load and a few habits", standfirst: "The usual reasons a disc bulges, the part ageing and overload play, why smoking matters and what turns pain up.", piece: "disc-age-load", pullQuote: "They remain strong, but it is usual for your back to get stiffer." },
  "slipped-disc/urgent": { kicker: discU, headline: "Signs that need help straight away", standfirst: "The symptoms that mean 999 or A&E, how to get there, what cauda equina syndrome is, the advice in Scotland and urgent GP signs.", piece: "disc-red-flags", pullQuote: "Do not drive to A&E." },
  "slipped-disc/moving": { kicker: discT, headline: "Moving hurts, but it helps", standfirst: "Why gentle activity beats bed rest, building up little and often, using heat safely and how long recovery takes.", piece: "disc-step-path", pullQuote: "Start off gently, and each day try to do a little bit more." },
  "slipped-disc/painkillers": { kicker: discT, headline: "Regular, short and checked", standfirst: "Taking anti-inflammatories regularly, where paracetamol fits, stronger medicines for a few days, nerve pain medicines and checking with a pharmacist.", piece: "disc-pill-days", pullQuote: "Always follow the instructions on the packet." },
  "slipped-disc/physio": { kicker: discT, headline: "Little and often, with a guide", standfirst: "Getting physiotherapy, what a physiotherapist does, checking first, gentle moves lying down and how hard to push.", piece: "disc-knee-rolls", pullQuote: "Stop the exercises if they make your symptoms worse or cause new pain." },
  "slipped-disc/injections-surgery": { kicker: discT, headline: "When the usual steps are not enough", standfirst: "When steroid injections or an epidural are used, scans, when surgery is discussed, and the operation and recovery.", piece: "disc-steps-path", pullQuote: "Surgery is not usually needed." },
  "slipped-disc/lifting": { kicker: discL, headline: "Stop, bend, keep it close", standfirst: "Why lifting matters, stopping to think, lifting and carrying with bent knees and no twisting, and bending without fear.", piece: "disc-lift-close", pullQuote: "Always ask for help if you need it." },
  "slipped-disc/work": { kicker: discL, headline: "Back to work, step by step", standfirst: "Going back before you are pain free, talking to your employer, setting up a desk, moving often and extra help.", piece: "disc-desk-timer", pullQuote: "You do not need to be pain and symptom free to return to work." },
  "slipped-disc/sleep": { kicker: discL, headline: "Comfort beats the perfect mattress", standfirst: "Why sleep matters, choosing a position and mattress, testing a bed, getting in and out of bed, and pillows for the neck.", piece: "disc-mattress-hand", pullQuote: "If there is a large gap, the bed is probably too hard." },
  "slipped-disc/coming-back": { kicker: discL, headline: "Keeping it from coming back", standfirst: "Why sciatica can return, regular exercise, everyday habits, weight and smoking, and managing stress.", piece: "disc-week-plan", pullQuote: "Do not smoke: nicotine weakens the disc tissue in the spine." },

  "scoliosis/what-it-is": { kicker: scolU, headline: "A curve, a twist, nobody's fault", standfirst: "What scoliosis is, how common it is, why it happens, where the curve can be and what it usually means.", piece: "scol-c-and-s", pullQuote: "Although many people have not heard of it, scoliosis is not rare." },
  "scoliosis/signs": { kicker: scolU, headline: "The ABCD of spotting a curve", standfirst: "The signs people notice, the ABCD checklist, the forward bend test, signs in adults and when to see a GP.", piece: "scol-abcd", pullQuote: "This is usually more common in adults with the condition." },
  "scoliosis/adults": { kicker: scolU, headline: "When age bends the spine", standfirst: "The two kinds of adult scoliosis, what happens in the spine, how it feels, how common it is and how it is treated.", piece: "scol-tilted-discs", pullQuote: "Most adults with scoliosis will not need surgery." },
  "scoliosis/diagnosis": { kicker: scolU, headline: "One angle, measured standing up", standfirst: "Referral to a specialist, the Cobb angle, why standing X-rays matter, other scans and what having an X-ray is like.", piece: "scol-cobb-angle", pullQuote: "The Cobb angle is calculated from a standing X-ray." },
  "scoliosis/monitoring": { kicker: scolT, headline: "Most curves just need watching", standfirst: "Watching a small curve, checks while a child grows, what happens after growth stops and when X-rays are needed.", piece: "scol-watch-dial", pullQuote: "Curves in adults of less than 30 degrees rarely get bigger." },
  "scoliosis/brace": { kicker: scolT, headline: "A support, not a straightener", standfirst: "Braces for adults with pain, why growing children wear them, what they are like, how well they work and how they can feel.", piece: "scol-brace-pads", pullQuote: "Wearing a brace may be difficult and sometimes uncomfortable." },
  "scoliosis/surgery": { kicker: scolT, headline: "Rods, bone and a long recovery", standfirst: "When surgery is considered, the two kinds of operation, the risks, the hospital stay and how long recovery takes.", piece: "scol-rods-recovery", pullQuote: "Spinal surgery is a major operation." },
  "scoliosis/pain": { kicker: scolT, headline: "Easing pain, knowing the urgent signs", standfirst: "Why scoliosis can hurt, painkillers, injections and pain clinics, things you can do yourself and when back pain is an emergency.", piece: "scol-pain-steps", pullQuote: "See a GP if over-the-counter painkillers do not work." },
  "scoliosis/exercise": { kicker: scolL, headline: "Move more, whatever your curve", standfirst: "What exercise can and cannot do, checking first, choosing an activity, physiotherapy and how much to aim for.", piece: "scol-move-week", pullQuote: "Choose something you enjoy and are likely to stick with." },
  "scoliosis/body-image": { kicker: scolL, headline: "Confidence with a curved spine", standfirst: "Why body image can feel hard, finding people in a similar situation, talking therapy and going at your own pace.", piece: "scol-talk-circle", pullQuote: "Adults feel it too." },
  "scoliosis/pregnancy": { kicker: scolL, headline: "Planning a birth with scoliosis", standfirst: "The outlook, the curve and back pain, breathing and the baby, planning pain relief for labour, and when to get help.", piece: "scol-birth-plan", pullQuote: "Most women will enjoy a straightforward pregnancy without any problems." },
  "scoliosis/support": { kicker: scolL, headline: "You do not have to do it alone", standfirst: "The UK scoliosis charity, its helpline, finding a specialist, support groups and events, and what to do if you are unhappy with your care.", piece: "scol-helpline-map", pullQuote: "If your GP will not refer you, ask why." },
};
