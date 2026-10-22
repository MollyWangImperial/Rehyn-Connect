import type { FeatureSpec } from "./feature-spec";

// The Neck pain and Spinal stenosis pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsSpinePieces.tsx.

export const SPINE_PIECES = [
  // Neck pain
  "neck-seven-bones", "neck-four-triggers", "neck-arm-tingle", "neck-three-tiers", "neck-rest-ruler", "neck-tilt-turn-nod", "neck-peas-bottle", "neck-physio-visits", "neck-screen-level", "neck-low-pillow", "neck-jolt-timeline", "neck-loop-break",
  // Spinal stenosis
  "ss-narrow-tunnel", "ss-stand-lean", "ss-years-discs", "ss-horse-tail", "ss-knee-rolls", "ss-medicine-shelf", "ss-path-stop", "ss-room-nerves", "ss-bench-route", "ss-lean-chair", "ss-week-strip", "ss-four-supports",
] as const;
export type SpinePiece = (typeof SPINE_PIECES)[number];

const neckU = "Understanding neck pain", neckT = "Treat and manage", neckL = "Living with neck pain";
const ssU = "Understanding spinal stenosis", ssT = "Treat and manage", ssL = "Living with spinal stenosis";

export const SPINE_FEATURES: Record<string, FeatureSpec<SpinePiece>> = {
  "neck-pain/what-it-is": { kicker: neckU, headline: "Seven small bones, rarely serious damage", standfirst: "How the neck is built, what usually hurts, what scans do and do not show, and why most neck pain passes within weeks.", piece: "neck-seven-bones", pullQuote: "Most neck pain only lasts a few weeks." },
  "neck-pain/causes": { kicker: neckU, headline: "Not your posture: your stillness", standfirst: "The usual causes, why long spells in one position matter more than posture, and the part sleep and stress play.", piece: "neck-four-triggers", pullQuote: "Neck problems are rarely caused by any serious disease or damage." },
  "neck-pain/trapped-nerve": { kicker: neckU, headline: "When the neck speaks through the arm", standfirst: "How a pinched nerve causes arm symptoms, why it often settles, the treatments that help and when to get help.", piece: "neck-arm-tingle", pullQuote: "Numbness and tingling go away once the problem resolves itself." },
  "neck-pain/urgent": { kicker: neckU, headline: "Neck symptoms that need help fast", standfirst: "When to call 999, when to ask for an urgent GP appointment or NHS 111, and when to see a GP.", piece: "neck-three-tiers", pullQuote: "Do not drive yourself to A&E." },
  "neck-pain/moving": { kicker: neckT, headline: "A day of rest, then keep moving", standfirst: "Why movement is part of the treatment, how little rest to take, and how long recovery usually takes.", piece: "neck-rest-ruler", pullQuote: "Most neck problems should have improved within 8 weeks." },
  "neck-pain/exercises": { kicker: neckT, headline: "A tilt, a turn and a nod", standfirst: "Three gentle exercises, how to build them up, how much pain is all right and when to stop.", piece: "neck-tilt-turn-nod", pullQuote: "Your pain should be no worse the morning after you have exercised." },
  "neck-pain/painkillers": { kicker: neckT, headline: "Ease the pain to keep moving", standfirst: "Paracetamol and ibuprofen, how long to take them, who should check first, and using heat and cold safely.", piece: "neck-peas-bottle", pullQuote: "Pain medication can help you move more comfortably, which can help your recovery." },
  "neck-pain/physio": { kicker: neckT, headline: "What a physiotherapist can do", standfirst: "What happens at physiotherapy, referring yourself to NHS services, exercises between sessions and going private.", piece: "neck-physio-visits", pullQuote: "The longer you have had neck pain, the less hands-on treatments are indicated." },
  "neck-pain/desk": { kicker: neckL, headline: "Screen up, phone off your shoulder", standfirst: "Long spells in one position, setting up your screen, taking short breaks and getting support at work.", piece: "neck-screen-level", pullQuote: "Take short breaks often, rather than longer ones less often." },
  "neck-pain/sleep": { kicker: neckL, headline: "One low pillow, head level", standfirst: "Pillows, sleeping position and mattresses, and getting to sleep when your neck hurts.", piece: "neck-low-pillow", pullQuote: "The NHS suggests a low, firm pillow." },
  "neck-pain/whiplash": { kicker: neckL, headline: "After the jolt, keep going", standfirst: "What whiplash is, when symptoms start, why a collar does not help, how long recovery takes and the urgent signs.", piece: "neck-jolt-timeline", pullQuote: "Do not rest your neck for long periods." },
  "neck-pain/long-term": { kicker: neckL, headline: "Breaking the cycle of neck pain", standfirst: "Why neck pain can come back or linger, why exercise works best and where to find longer-term support.", piece: "neck-loop-break", pullQuote: "Neck pain quite often continues even after the original problem has settled." },

  "spinal-stenosis/what-it-is": { kicker: ssU, headline: "Narrow tunnels, adaptable nerves", standfirst: "What narrows in the spine, where it happens, why many people have no symptoms and how it is found.", piece: "ss-narrow-tunnel", pullQuote: "Many people have no symptoms at all." },
  "spinal-stenosis/symptoms": { kicker: ssU, headline: "Worse walking, better leaning forward", standfirst: "Symptoms in the legs or arms, the link with sciatica, how symptoms change and when to get checked quickly.", piece: "ss-stand-lean", pullQuote: "Any progression of symptoms is usually slow." },
  "spinal-stenosis/causes": { kicker: ssU, headline: "Ageing, not damage", standfirst: "How ageing discs and joints narrow the spine, the other causes, and why narrowing is not the same as damage.", piece: "ss-years-discs", pullQuote: "They remain strong, but it is usual for your back to get stiffer." },
  "spinal-stenosis/urgent": { kicker: ssU, headline: "The rare signs that mean 999", standfirst: "The signs of cauda equina syndrome, getting to A&E, the advice in Scotland and when to contact your GP urgently.", piece: "ss-horse-tail", pullQuote: "Do not drive to A&E." },
  "spinal-stenosis/exercise": { kicker: ssT, headline: "Calmer nerves, stronger body", standfirst: "What exercise can and cannot do, checking first, gentle moves lying down and how physiotherapy helps.", piece: "ss-knee-rolls", pullQuote: "It will not change the narrowing of the spinal tunnel itself." },
  "spinal-stenosis/painkillers": { kicker: ssT, headline: "Short courses, careful reviews", standfirst: "Everyday painkillers, medicines for nerve pain, what NICE advises and reviewing medicines for long-term pain.", piece: "ss-medicine-shelf", pullQuote: "Most people with chronic pain will not benefit from using medication alone." },
  "spinal-stenosis/injections": { kicker: ssT, headline: "Where an injection fits", standfirst: "When steroid injections are used, what NICE says, how they work, and what to expect before and after one.", piece: "ss-path-stop", pullQuote: "Most people have steroid injections without any side effects." },
  "spinal-stenosis/surgery": { kicker: ssT, headline: "Making room for the nerves", standfirst: "When surgery is considered, what lumbar decompression involves, recovery, and the signs to report afterwards.", piece: "ss-room-nerves", pullQuote: "The operation usually takes around 2 to 4 hours, but may take longer." },
  "spinal-stenosis/walking": { kicker: ssL, headline: "Short walks, planned rests", standfirst: "Why walking is safe, taking breaks, building up gradually and setting a goal you can keep.", piece: "ss-bench-route", pullQuote: "Walking short distances regularly is encouraged to help manage your symptoms." },
  "spinal-stenosis/posture": { kicker: ssL, headline: "Lean, sit, move often", standfirst: "Positions that ease symptoms, getting out of a chair or bed, sitting at a desk, and heat, ice and sleep.", piece: "ss-lean-chair", pullQuote: "Your posture does not need to be perfect." },
  "spinal-stenosis/weight-activity": { kicker: ssL, headline: "Small changes, steadier back", standfirst: "Weight and the back, BMI as a rough guide, staying active at any weight, and stopping smoking.", piece: "ss-week-strip", pullQuote: "Exercise is still important whatever your weight." },
  "spinal-stenosis/mood": { kicker: ssL, headline: "Looking after yourself with long-term pain", standfirst: "How pain and mood affect each other, pacing, sleep, keeping in touch with people and where to find support.", piece: "ss-four-supports", pullQuote: "Be kind to yourself." },
};
