import type { FeatureSpec } from "./feature-spec";

// The Tennis elbow and Plantar fasciitis pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsTendonPieces.tsx.

export const TENDON_PIECES = [
  // Tennis elbow
  "te-outer-elbow", "te-grip-twist", "te-two-sides", "te-months-line", "te-ice-gel", "te-tin-lift", "te-strap-plan", "te-four-cards", "te-swap-grips", "te-desk-tools", "te-court-steps", "te-loop-break",
  // Plantar fasciitis
  "pfas-band", "pfas-load-list", "pfas-day-curve", "pfas-heel-timeline", "pfas-towel-tin-wall", "pfas-shoe-lift", "pfas-ice-stool", "pfas-care-stairs", "pfas-till-shift", "pfas-swim-bike", "pfas-ease-strain", "pfas-year-wheel",
] as const;
export type TendonPiece = (typeof TENDON_PIECES)[number];

const teU = "Understanding tennis elbow", teT = "Treat and manage", teL = "Living with tennis elbow";
const pfU = "Understanding plantar fasciitis", pfT = "Treat and manage", pfL = "Living with plantar fasciitis";

export const TENDON_FEATURES: Record<string, FeatureSpec<TendonPiece>> = {
  "tennis-elbow/what-it-is": { kicker: teU, headline: "Tennis elbow, without the tennis", standfirst: "Where the pain is, how the elbow is built, what happens to the tendons, and who gets it.", piece: "te-outer-elbow", pullQuote: "Racquet sports are the cause in fewer than 10% of people with tennis elbow." },
  "tennis-elbow/causes": { kicker: teU, headline: "The grip and twist behind it", standfirst: "Gripping and twisting, the everyday tasks linked with it, what happens inside the tendon, and why not everyone gets it.", piece: "te-grip-twist", pullQuote: "Many people do the same job for years without having a problem." },
  "tennis-elbow/symptoms": { kicker: teU, headline: "Outside or inside: telling them apart", standfirst: "The main and other symptoms, how golfer's elbow differs, and when to see a GP or get help urgently.", piece: "te-two-sides", pullQuote: "Tennis elbow is the more common of the two." },
  "tennis-elbow/how-long": { kicker: teU, headline: "Months, not days, but it eases", standfirst: "How long it usually lasts, what can slow it down, checkpoints along the way, and why it can come back.", piece: "te-months-line", pullQuote: "Be patient though, as this can take several months." },
  "tennis-elbow/self-care": { kicker: teT, headline: "Ice, gel, and keep it moving", standfirst: "Resting from what hurts, heat or cold, painkillers and gels used safely, and keeping the arm in use.", piece: "te-ice-gel", pullQuote: "It is important not to rest for too long." },
  "tennis-elbow/exercises": { kicker: teT, headline: "A tin of beans and a table", standfirst: "Checking first, why moving helps, and the stretching, strengthening and turning moves the sources describe.", piece: "te-tin-lift", pullQuote: "Arthritis UK calls this a useful basic exercise for tennis elbow." },
  "tennis-elbow/physio": { kicker: teT, headline: "What a physio and a strap can do", standfirst: "When physiotherapy may help, what a physiotherapist does, which treatments help less, braces and straps, and getting physiotherapy.", piece: "te-strap-plan", pullQuote: "Sometimes wearing a brace can help reduce pain." },
  "tennis-elbow/injections": { kicker: teT, headline: "Why the quick fix may not help", standfirst: "What the sources say about steroid injections, platelet-rich plasma, shockwave therapy and surgery.", piece: "te-four-cards", pullQuote: "Steroid injections are not recommended for tennis or golfer's elbow." },
  "tennis-elbow/tasks": { kicker: teL, headline: "Same jobs, gentler grips", standfirst: "Changing the movement first, keeping the arm in use, easing grip, force and vibration, and small swaps that help.", piece: "te-swap-grips", pullQuote: "This should dramatically improve your symptoms." },
  "tennis-elbow/work": { kicker: teL, headline: "Keyboards, tools and a word with work", standfirst: "Jobs linked with it, talking to your employer, changes at the desk and with tools, and support at work.", piece: "te-desk-tools", pullQuote: "If your workplace has an occupational health department, they should be able to help." },
  "tennis-elbow/sport": { kicker: teL, headline: "Back on court, step by step", standfirst: "How seldom racquets are the cause, easing off without stopping, changing your kit and building back up.", piece: "te-court-steps", pullQuote: "Despite the name, playing tennis or golf is not the most common cause." },
  "tennis-elbow/coming-back": { kicker: teL, headline: "When it keeps coming back", standfirst: "Why it can return, keeping the arm strong, looking again at the cause, and conditions that can look similar.", piece: "te-loop-break", pullQuote: "Tennis elbow and golfer's elbow can both return." },

  "plantar-fasciitis/what-it-is": { kicker: pfU, headline: "The band under your foot, strained", standfirst: "What the plantar fascia does, what goes wrong, heel spurs, how common it is and how it usually settles.", piece: "pfas-band", pullQuote: "It is the most commonly recognised cause of pain under the heel in adults." },
  "plantar-fasciitis/causes": { kicker: pfU, headline: "Too much load, too soon", standfirst: "Strain on the band, doing more than usual, shoes and feet, age and weight, and other causes of heel pain.", piece: "pfas-load-list", pullQuote: "It is not always clear why this happens." },
  "plantar-fasciitis/symptoms": { kicker: pfU, headline: "Sharpest at the very first step", standfirst: "Where it hurts, why the first steps are worst, how it changes through the day, and when to get help.", piece: "pfas-day-curve", pullQuote: "The pain then gradually gets better when you start moving around." },
  "plantar-fasciitis/how-long": { kicker: pfU, headline: "Months, not days, to settle", standfirst: "How slowly it usually settles, what the figures say, why starting early helps, and checking in along the way.", piece: "pfas-heel-timeline", pullQuote: "You can usually ease the pain yourself." },
  "plantar-fasciitis/stretches": { kicker: pfT, headline: "A towel, a tin, a wall", standfirst: "Why stretching helps, checking first, and the towel, rolling and wall stretches the sources describe.", piece: "pfas-towel-tin-wall", pullQuote: "Hold for 30 seconds, and repeat three times on each foot." },
  "plantar-fasciitis/footwear": { kicker: pfT, headline: "Cushion the heel, lift it slightly", standfirst: "What to look for in shoes, what to avoid for now, insoles and heel pads, a podiatrist's help and buying new shoes.", piece: "pfas-shoe-lift", pullQuote: "Arthritis UK also suggests avoiding flat shoes." },
  "plantar-fasciitis/pain-relief": { kicker: pfT, headline: "Ice, rest and the right painkiller", standfirst: "Resting and raising your foot, wrapped ice, painkillers, using them safely and what to do if you take too much.", piece: "pfas-ice-stool", pullQuote: "Never place ice directly on your skin." },
  "plantar-fasciitis/further-treatment": { kicker: pfT, headline: "When home care is not enough", standfirst: "Physiotherapy, podiatry and splints, steroid injections, shockwave therapy, and surgery or going private.", piece: "pfas-care-stairs", pullQuote: "If these things do not help, you may be offered steroid injections." },
  "plantar-fasciitis/work-standing": { kicker: pfL, headline: "On your feet all shift", standfirst: "Why standing matters, shoes for long shifts, breaking up the day, talking to your employer and Access to Work.", piece: "pfas-till-shift", pullQuote: "Your employer may arrange a health and safety or occupational health assessment." },
  "plantar-fasciitis/exercise": { kicker: pfL, headline: "Swim and cycle while it heals", standfirst: "Exercise that spares the heel, what to ease off, getting back to running, the weekly total and building up.", piece: "pfas-swim-bike", pullQuote: "You will not be able to run with heel pain." },
  "plantar-fasciitis/weight": { kicker: pfL, headline: "Small changes, less strain", standfirst: "Why weight matters to the heel, how a small change can help, BMI, realistic changes and moving with a sore heel.", piece: "pfas-ease-strain", pullQuote: "Exercise is still important whatever your weight." },
  "plantar-fasciitis/coming-back": { kicker: pfL, headline: "Keeping the heel settled", standfirst: "The habits that help, supportive shoes all year, keeping up stretches, building up slowly and if it keeps returning.", piece: "pfas-year-wheel", pullQuote: "Gentle stretches to the calf and plantar fascia will most likely help." },
};
