import type { FeatureSpec } from "./feature-spec";

// The Psoriatic arthritis and Axial spondyloarthritis pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsInflamPieces.tsx.

export const INFLAM_PIECES = [
  // Psoriatic arthritis
  "psa-skin-joint", "psa-sausage-finger", "psa-clue-tiles", "psa-flare-tide", "psa-mtx-week", "psa-messengers", "psa-relief-trio", "psa-skin-shelf", "psa-move-mix", "psa-energy-days", "psa-heart-checks", "psa-work-desk",
  // Axial spondyloarthritis
  "axspa-spine-pelvis", "axspa-two-lines", "axspa-long-road", "axspa-body-map", "axspa-three-moves", "axspa-nsaid-plate", "axspa-targeted", "axspa-warm-pool", "axspa-wall-check", "axspa-rest-clock", "axspa-red-eye", "axspa-year-ring",
] as const;
export type InflamPiece = (typeof INFLAM_PIECES)[number];

const psaU = "Understanding psoriatic arthritis", psaT = "Treat and manage", psaL = "Living with psoriatic arthritis";
const axU = "Understanding axial spondyloarthritis", axT = "Treat and manage", axL = "Living with axial spondyloarthritis";

export const INFLAM_FEATURES: Record<string, FeatureSpec<InflamPiece>> = {
  "psoriatic-arthritis/what-it-is": { kicker: psaU, headline: "When skin and joints share a cause", standfirst: "How psoriatic arthritis is linked to psoriasis, who gets it, and why early treatment matters.", piece: "psa-skin-joint", pullQuote: "It may come on at any age, and men and women are equally affected." },
  "psoriatic-arthritis/symptoms": { kicker: psaU, headline: "Fingers, heels, nails and more", standfirst: "Joints, tendons, swollen fingers, nails and tiredness, and why a red, painful eye needs urgent help.", piece: "psa-sausage-finger", pullQuote: "It most commonly affects one or two fingers or toes at a time." },
  "psoriatic-arthritis/diagnosis": { kicker: psaU, headline: "Piecing the clues together", standfirst: "Why there is no single test, and how your symptoms, blood tests and scans fit together.", piece: "psa-clue-tiles", pullQuote: "Ultrasound and MRI scans may help to confirm the diagnosis." },
  "psoriatic-arthritis/flares": { kicker: psaU, headline: "Riding the waves of a flare", standfirst: "Why the condition comes and goes, what can set it off, and how to calm a hot joint.", piece: "psa-flare-tide", pullQuote: "Episodes of flare then settle of their own accord." },
  "psoriatic-arthritis/dmards": { kicker: psaT, headline: "Slow medicines for skin and joints", standfirst: "How DMARDs slow the condition down, why they take time, and taking methotrexate safely.", piece: "psa-mtx-week", pullQuote: "Many DMARDs will treat both psoriasis and psoriatic arthritis." },
  "psoriatic-arthritis/biologics": { kicker: psaT, headline: "Targeting the messengers of inflammation", standfirst: "Anti-TNF drugs, interleukin inhibitors and newer tablets, and the checks before you start.", piece: "psa-messengers", pullQuote: "Both may be prescribed alongside methotrexate." },
  "psoriatic-arthritis/pain-relief": { kicker: psaT, headline: "Easing pain while treatment works", standfirst: "What NSAIDs, paracetamol and steroid injections can and cannot do, and the side effects to know.", piece: "psa-relief-trio", pullQuote: "They provide symptom relief, but they do not prevent joint damage or disease progression." },
  "psoriatic-arthritis/skin": { kicker: psaT, headline: "Caring for the skin side too", standfirst: "Moisturisers, creams, light therapy and medicines, and asking your skin and joint teams to share plans.", piece: "psa-skin-shelf", pullQuote: "Sunburn can aggravate psoriasis or trigger a flare." },
  "psoriatic-arthritis/exercise": { kicker: psaL, headline: "Little and often keeps you moving", standfirst: "Why moving helps, a balanced mix of exercise, and going gently on swollen days.", piece: "psa-move-mix", pullQuote: "Range of movement exercises help relieve stiffness and should be carried out daily." },
  "psoriatic-arthritis/fatigue": { kicker: psaL, headline: "More than tired: pacing your energy", standfirst: "Why fatigue is more than tiredness, what feeds it, and how pacing, sleep and movement help.", piece: "psa-energy-days", pullQuote: "Pacing is about not using up all your energy in one go." },
  "psoriatic-arthritis/heart": { kicker: psaL, headline: "Looking after more than joints", standfirst: "The links with heart risk, the gut and the liver, the checks to ask about, and everyday steps.", piece: "psa-heart-checks", pullQuote: "You do not have to exercise strenuously to get the health benefits." },
  "psoriatic-arthritis/work": { kicker: psaL, headline: "Work, with the right support", standfirst: "Your rights at work, telling your employer, adjustments that help and Access to Work.", piece: "psa-work-desk", pullQuote: "Writing down what you agree can help if your manager changes." },

  "axial-spondyloarthritis/what-it-is": { kicker: axU, headline: "Inflammation where spine meets pelvis", standfirst: "What axial SpA and ankylosing spondylitis are, what happens in the spine, and who gets it.", piece: "axspa-spine-pelvis", pullQuote: "This does not happen to everyone with axial SpA." },
  "axial-spondyloarthritis/back-pain": { kicker: axU, headline: "Back pain that eases with movement", standfirst: "How inflammatory back pain differs from common backache, and when to see a doctor.", piece: "axspa-two-lines", pullQuote: "Inflammatory back pain affects a much smaller number of people." },
  "axial-spondyloarthritis/diagnosis": { kicker: axU, headline: "The long road to a name", standfirst: "Why diagnosis can take years, what the tests can and cannot show, and who confirms it.", piece: "axspa-long-road", pullQuote: "Only a rheumatologist can make a definite diagnosis." },
  "axial-spondyloarthritis/beyond-spine": { kicker: axU, headline: "More than a back condition", standfirst: "How axial SpA can affect the eyes, gut, skin and bones, and the rare emergency to know.", piece: "axspa-body-map", pullQuote: "Not everyone with axial SpA will develop these." },
  "axial-spondyloarthritis/exercise": { kicker: axT, headline: "A little movement, every day", standfirst: "Why exercise matters so much, what to include, and fitting stretches safely into your day.", piece: "axspa-three-moves", pullQuote: "Keep within your limits, especially when you first start." },
  "axial-spondyloarthritis/nsaids": { kicker: axT, headline: "Usually the first medicine to try", standfirst: "How NSAIDs are taken, how fast they work, and the side effects and risks to know.", piece: "axspa-nsaid-plate", pullQuote: "Only naproxen is not associated with this increased risk." },
  "axial-spondyloarthritis/biologics": { kicker: axT, headline: "When NSAIDs and exercise are not enough", standfirst: "Anti-TNF, anti-IL-17 medicines and JAK inhibitors, how well they work, and staying safe.", piece: "axspa-targeted", pullQuote: "Carry a biological therapy alert card." },
  "axial-spondyloarthritis/physio": { kicker: axT, headline: "Warm water, easier stretches", standfirst: "What a physiotherapist does, exercising in a warm pool, and how to get referred.", piece: "axspa-warm-pool", pullQuote: "Hydrotherapy is exercise in water, usually a warm, shallow pool." },
  "axial-spondyloarthritis/posture": { kicker: axL, headline: "Sit tall, sleep well, keep working", standfirst: "Sitting and standing tall, checking your posture, a better night and your working day.", piece: "axspa-wall-check", pullQuote: "Report any changes you notice to your doctor." },
  "axial-spondyloarthritis/fatigue": { kicker: axL, headline: "Pacing through fatigue and flares", standfirst: "Why fatigue happens, resting and pacing, and getting through a flare with a plan.", piece: "axspa-rest-clock", pullQuote: "Taking enough rest is just as important as taking exercise." },
  "axial-spondyloarthritis/eyes": { kicker: axL, headline: "A red, painful eye: act today", standfirst: "What uveitis is, the signs to know, where to get urgent help, and how it is treated.", piece: "axspa-red-eye", pullQuote: "Go to A&E or call 999 if you cannot see." },
  "axial-spondyloarthritis/support": { kicker: axL, headline: "You are not managing alone", standfirst: "The NASS helpline and branches, meeting others, your wellbeing and taking part in your care.", piece: "axspa-year-ring", pullQuote: "Speaking to others with the same condition can help when you are experiencing fatigue." },
};
