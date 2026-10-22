import type { FeatureSpec } from "./feature-spec";

// The Lymphoedema and Living with secondary cancer pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsCarePieces.tsx.

export const CARE_PIECES = [
  // Lymphoedema
  "lo-drain-map", "lo-bead-string", "lo-ring-sock", "lo-tape-rings", "lo-sleeve-arrows", "lo-skin-guard", "lo-clear-path", "lo-calf-pump", "lo-act-ladder", "lo-plane-seat", "lo-wardrobe", "lo-bench-talk",
  // Living with secondary cancer
  "sc-same-cells", "sc-balance", "sc-helper-circle", "sc-care-ribbons", "sc-ease-steps", "sc-cycle-calendar", "sc-energy-day", "sc-call-card", "sc-small-goals", "sc-table-talk", "sc-shield-jar", "sc-wish-folder",
] as const;
export type CarePiece = (typeof CARE_PIECES)[number];

// The lymphoedema recover column is about treating and managing the swelling; the secondary cancer one is about care and
// treatment that carries on.
const loU = "Understanding lymphoedema", loR = "Treat and manage", loL = "Living with lymphoedema";
const scU = "Understanding secondary cancer", scR = "Care and treatment", scL = "Living well with secondary cancer";

export const CARE_FEATURES: Record<string, FeatureSpec<CarePiece>> = {
  // Lymphoedema
  "lymphoedema/what-it-is": { kicker: loU, headline: "When the body's drainage backs up", standfirst: "What the lymphatic system does, why fluid builds up, and why lymphoedema can usually be controlled.", piece: "lo-drain-map", pullQuote: "Lymphoedema can't be cured, but it can usually be well controlled." },
  "lymphoedema/causes": { kicker: loU, headline: "How treatment can interrupt the flow", standfirst: "How surgery and radiotherapy affect the lymph nodes, which treatments carry more risk, and when swelling can start.", piece: "lo-bead-string", pullQuote: "Lymph nodes and vessels that are removed or damaged can't be replaced." },
  "lymphoedema/signs": { kicker: loU, headline: "A tight ring can be the first sign", standfirst: "Tighter clothes or jewellery, heaviness, swelling that comes and goes, and when to get it checked.", piece: "lo-ring-sock", pullQuote: "It may get worse during the day and go down overnight." },
  "lymphoedema/diagnosis": { kicker: loU, headline: "Measuring what the swelling is doing", standfirst: "How a specialist examines, stages and measures swelling, and why a progress chart can help.", piece: "lo-tape-rings", pullQuote: "The most common way to measure is with a tape measure." },
  "lymphoedema/compression": { kicker: loR, headline: "A sleeve for muscles to push against", standfirst: "How compression works, getting the right garment, putting it on, and looking after it.", piece: "lo-sleeve-arrows", pullQuote: "Compression puts even but firm pressure on the swollen area." },
  "lymphoedema/skin-care": { kicker: loR, headline: "Small daily care, big protection", standfirst: "Why unbroken skin matters, a simple daily routine, and what to do about cuts, bites and burns.", piece: "lo-skin-guard", pullQuote: "Any cuts in the skin can let bacteria in." },
  "lymphoedema/massage": { kicker: loR, headline: "Clear the path, then drain", standfirst: "What manual and simple lymphatic drainage are, how deep breathing helps, and when not to have them.", piece: "lo-clear-path", pullQuote: "You should not have other types of massage on the affected area." },
  "lymphoedema/exercise": { kicker: loR, headline: "Moving muscles, moving fluid", standfirst: "Why exercise helps, how to start, simple arm and leg exercises, resting positions and when to stop.", piece: "lo-calf-pump", pullQuote: "The evidence suggests that exercise doesn't cause or worsen lymphoedema." },
  "lymphoedema/cellulitis": { kicker: loL, headline: "Red, hot, swollen: act straight away", standfirst: "Why cellulitis is more likely, its signs, who to contact straight away and when to call 999.", piece: "lo-act-ladder", pullQuote: "If you have any of these signs, contact your GP straight away." },
  "lymphoedema/travel": { kicker: loL, headline: "Holidays, planned around your limb", standfirst: "Planning ahead, moving on the journey, compression for flying, and protecting your skin while away.", piece: "lo-plane-seat", pullQuote: "Research suggests that flying doesn't increase the risk of developing lymphoedema." },
  "lymphoedema/everyday": { kicker: loL, headline: "Small swaps for everyday comfort", standfirst: "Avoiding pressure, bras, shoes and clothes that fit, help around the house and changes at work.", piece: "lo-wardrobe", pullQuote: "Finding shoes to fit a swollen foot can be frustrating." },
  "lymphoedema/mood": { kicker: loL, headline: "Living with a visible change", standfirst: "The mix of feelings, changes to how you look, talking, low mood and where to get help now.", piece: "lo-bench-talk", pullQuote: "However you are feeling, it is okay to feel that way." },
  // Living with secondary cancer
  "secondary-cancer/what-it-is": { kicker: scU, headline: "The same cancer, in a new place", standfirst: "How cancer spreads, why it is still the same type, the words doctors use and what it means.", piece: "sc-same-cells", pullQuote: "A secondary cancer is the same type of cancer as the primary tumour." },
  "secondary-cancer/treatment-aims": { kicker: scU, headline: "Control, comfort and your own choices", standfirst: "What treatment aims to do, what palliative treatment means, weighing it up and the questions you can ask.", piece: "sc-balance", pullQuote: "Sometimes treatment can control advanced cancer for a long time." },
  "secondary-cancer/symptoms": { kicker: scU, headline: "Symptoms, and the people who help", standfirst: "Why symptoms depend on where the cancer is, why pain is not something to put up with, and who can help.", piece: "sc-helper-circle", pullQuote: "Always check any new symptoms with your GP, cancer doctor or specialist nurse." },
  "secondary-cancer/palliative": { kicker: scU, headline: "Palliative care is for living", standfirst: "What palliative care is, why it is not only for the end, what hospices offer and how to get a referral.", piece: "sc-care-ribbons", pullQuote: "Some people have palliative care for years." },
  "secondary-cancer/symptom-control": { kicker: scR, headline: "Easing pain, step by step", standfirst: "Telling your team about pain, painkillers step by step, easing sickness and breathlessness, and other help.", piece: "sc-ease-steps", pullQuote: "This is called a pain assessment, and keeping a pain diary can help." },
  "secondary-cancer/treatments": { kicker: scR, headline: "Living around ongoing treatment", standfirst: "Check-ups, chemotherapy cycles, radiotherapy, clinical trials and the side effects to report.", piece: "sc-cycle-calendar", pullQuote: "Let your care team know if you get side effects." },
  "secondary-cancer/fatigue": { kicker: scR, headline: "Tiredness you can plan around", standfirst: "What can add to fatigue, scoring it for your team, planning your energy and moving gently.", piece: "sc-energy-day", pullQuote: "Fatigue affects everyone differently." },
  "secondary-cancer/emergencies": { kicker: scR, headline: "When to call, day or night", standfirst: "Knowing your 24-hour number, and the signs of infection, spinal cord compression and clots to report straight away.", piece: "sc-call-card", pullQuote: "Do not wait for further symptoms to develop." },
  "secondary-cancer/living-well": { kicker: scL, headline: "One day, one small goal at a time", standfirst: "Small goals, looking after yourself, accepting help, your feelings and where to get help now.", piece: "sc-small-goals", pullQuote: "There is no right or wrong way to feel." },
  "secondary-cancer/talking": { kicker: scL, headline: "Honest words for the people you love", standfirst: "Why talking helps, starting the conversation, your partner, children, and support for the whole family.", piece: "sc-table-talk", pullQuote: "You do not have to talk about everything at once." },
  "secondary-cancer/work-money": { kicker: scL, headline: "Your rights, benefits and free help", standfirst: "Your rights at work, reasonable adjustments, stopping work, benefits and help with money worries.", piece: "sc-shield-jar", pullQuote: "You do not have to tell your employer you have cancer." },
  "secondary-cancer/planning": { kicker: scL, headline: "Planning ahead, in your own time", standfirst: "Planning at your own pace, writing down your wishes, legal choices and keeping your plan safe.", piece: "sc-wish-folder", pullQuote: "You can change your mind at any time, but remember to record your changes." },
};
