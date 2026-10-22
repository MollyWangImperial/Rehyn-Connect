import type { FeatureSpec } from "./feature-spec";

// The Broken wrist and Broken ankle pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsBreaksPieces.tsx.

export const BREAKS_PIECES = [
  // Broken wrist
  "wfx-forearm-crack", "wfx-three-tags", "wfx-cast-wires", "wfx-bone-scan", "wfx-raised-cast", "wfx-hand-poses", "wfx-pillow-arm", "wfx-fingertips", "wfx-one-hand-kitchen", "wfx-wheel-hands", "wfx-lit-stairs", "wfx-long-path",
  // Broken ankle
  "afx-three-bones", "afx-ligament-bone", "afx-boot-cast-plate", "afx-healing-ruler", "afx-crutch-steps", "afx-ankle-moves", "afx-raised-leg", "afx-leg-zones", "afx-home-crutches", "afx-pedal-stop", "afx-walk-run-track", "afx-year-strip",
] as const;
export type BreaksPiece = (typeof BREAKS_PIECES)[number];

const wfxU = "Understanding a broken wrist", wfxL = "Living with a broken wrist";
const afxU = "Understanding a broken ankle", afxL = "Living with a broken ankle";
const rec = "Recovering after a break";

export const BREAKS_FEATURES: Record<string, FeatureSpec<BreaksPiece>> = {
  "wrist-fracture/what-it-is": { kicker: wfxU, headline: "Fracture, break, crack: same thing", standfirst: "What the words mean, the bones involved, how a wrist breaks, how long healing takes and what can slow it.", piece: "wfx-forearm-crack", pullQuote: "These terms all mean the same thing." },
  "wrist-fracture/signs": { kicker: wfxU, headline: "Sprain or break? Know the signs", standfirst: "The signs of a break, when to go to A&E or call 999, when NHS 111 can help and what to do while you wait.", piece: "wfx-three-tags", pullQuote: "Any possible breaks need to be treated as soon as possible." },
  "wrist-fracture/treatment": { kicker: wfxU, headline: "Cast, splint or wires", standfirst: "What happens at hospital, casts and splints, moving the bones back into place, when an operation is needed and going home.", piece: "wfx-cast-wires", pullQuote: "You should be able to go home once your plaster cast has been fitted." },
  "wrist-fracture/bones": { kicker: wfxU, headline: "Was it a small fall? Check your bones", standfirst: "How weaker bones and wrist breaks are linked, who is checked, what raises the risk, and the checks and treatment that help.", piece: "wfx-bone-scan", pullQuote: "Healthcare professionals may check if your fracture is caused by osteoporosis." },
  "wrist-fracture/cast-care": { kicker: rec, headline: "Dry, raised and left alone", standfirst: "What a cast does, everyday care, itching, keeping the rest of the arm moving and when to phone 111.", piece: "wfx-raised-cast", pullQuote: "Move slowly and with care, as the cast may be heavy." },
  "wrist-fracture/exercises": { kicker: rec, headline: "Little and often, within 0 to 5", standfirst: "Moves to do with the cast on, starting once it comes off, NHS inform's exercises, how many to do and how much pain is all right.", piece: "wfx-hand-poses", pullQuote: "Start exercises for your wrist once advised by your healthcare professional." },
  "wrist-fracture/pain": { kicker: rec, headline: "Raise it, move it, pace it", standfirst: "Why some pain is normal, pain relief, easing swelling and bruising, stiffness after the cast and other ways to ease pain.", piece: "wfx-pillow-arm", pullQuote: "It is normal to have some pain even when your fracture has healed." },
  "wrist-fracture/warning-signs": { kicker: rec, headline: "Changes that cannot wait", standfirst: "When to get help from NHS 111, other signs to phone 111 about, sudden severe pain that needs 999 or A&E, and pain far worse than expected.", piece: "wfx-fingertips", pullQuote: "Do not drive to A&E." },
  "wrist-fracture/daily-tasks": { kicker: wfxL, headline: "One hand, a few clever aids", standfirst: "Doing what you can, aids for washing, dressing and the kitchen, arranging your home and getting help with equipment.", piece: "wfx-one-hand-kitchen", pullQuote: "Arrange things so that items you use most often are within easy reach." },
  "wrist-fracture/driving-work": { kicker: wfxL, headline: "Out of the cast, in full control", standfirst: "When you can drive again, medicines and driving, going back to work and building up your activity.", piece: "wfx-wheel-hands", pullQuote: "You do not need to see a healthcare professional to return to work." },
  "wrist-fracture/falls": { kicker: wfxL, headline: "Stop the next fall", standfirst: "Finding out why you fell, help from a falls service, strength and balance, a safer home, and shoes, sight and medicines.", piece: "wfx-lit-stairs", pullQuote: "Many underlying causes of falls can be treated or corrected." },
  "wrist-fracture/long-term": { kicker: wfxL, headline: "When recovery takes its time", standfirst: "Why recovery can take months, what affects it, longer-term problems such as CRPS, and looking after your mood.", piece: "wfx-long-path", pullQuote: "A physiotherapist can help with stiffness and weakness." },

  "ankle-fracture/what-it-is": { kicker: afxU, headline: "Three bones, one common break", standfirst: "The three bones that meet at the ankle, how they break, what a break feels like and the soft tissues hurt with it.", piece: "afx-three-bones", pullQuote: "Ankle fractures usually involve the fibula." },
  "ankle-fracture/sprain-or-break": { kicker: afxU, headline: "Stretched ligament or broken bone?", standfirst: "How a sprain and a break differ, why they are hard to tell apart, the signs that need A&E or 999, the X-ray and sprain care.", piece: "afx-ligament-bone", pullQuote: "A fracture is the same as a broken bone." },
  "ankle-fracture/treatment": { kicker: afxU, headline: "Boot, cast or plate and screws", standfirst: "Why treatment depends on the break, boots, casts, when an operation is needed and the follow-up appointments.", piece: "afx-boot-cast-plate", pullQuote: "If you have a very minor break, you may not need any treatment." },
  "ankle-fracture/healing": { kicker: afxU, headline: "Weeks to heal, months to settle", standfirst: "How long a broken ankle takes to heal, what slows it, what helps, life after the cast or boot and the longer view.", piece: "afx-healing-ruler", pullQuote: "Eating a healthy diet and keeping active will help your recovery." },
  "ankle-fracture/weight-bearing": { kicker: rec, headline: "From two crutches to none", standfirst: "Who decides how much weight to put on it, crutches and frames, putting weight through it, coming off crutches and moving safely.", piece: "afx-crutch-steps", pullQuote: "Walking on your foot can help recovery but may be uncomfortable at first." },
  "ankle-fracture/exercises": { kicker: rec, headline: "Toes first, then balance", standfirst: "Moves to do in a cast or boot, early ankle movements, strength and balance, how much is right and sticking with it.", piece: "afx-ankle-moves", pullQuote: "If a sharp shooting pain is provoked, ease off." },
  "ankle-fracture/swelling": { kicker: rec, headline: "Foot up, ice wrapped, ahead of pain", standfirst: "Why swelling is part of healing, raising the leg, using ice, pain relief and the pain that is normal.", piece: "afx-raised-leg", pullQuote: "Ice can help with swelling and pain." },
  "ankle-fracture/warning-signs": { kicker: rec, headline: "Know which signs need 999", standfirst: "When to get help from NHS 111, the signs of a blood clot in the leg or lungs, compartment syndrome and what to watch for after an operation.", piece: "afx-leg-zones", pullQuote: "Complete the course you are given." },
  "ankle-fracture/home": { kicker: afxL, headline: "A home that works on crutches", standfirst: "Planning for home, stairs and moving about, equipment that helps, washing with a cast or boot and day-to-day care.", piece: "afx-home-crutches", pullQuote: "Do not carry heavy things while your ankle heals." },
  "ankle-fracture/driving-work": { kicker: afxL, headline: "Pedals, insurer, then the road", standfirst: "Why not to drive in a cast or boot, when you can drive again, going back to work and why you do not need to be fully better.", piece: "afx-pedal-stop", pullQuote: "You should not drive while in a cast or wearing a boot." },
  "ankle-fracture/return-to-sport": { kicker: afxL, headline: "Six weeks off, six weeks back", standfirst: "Walking first, when sport can start, building up, setbacks and goals, and staying active for good.", piece: "afx-walk-run-track", pullQuote: "Loss of confidence is also common after a fracture." },
  "ankle-fracture/long-term": { kicker: afxL, headline: "Why it still feels different", standfirst: "Why swelling and stiffness can last, skin and the shape of the ankle, arthritis later on and pain that is more than expected.", piece: "afx-year-strip", pullQuote: "Expect swelling and discomfort for up to one year after a fracture." },
};
