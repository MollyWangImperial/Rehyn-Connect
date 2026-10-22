import type { FeatureSpec } from "./feature-spec";

// The Hip replacement and Knee replacement pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsJointPieces.tsx.

export const JOINT_PIECES = [
  // Hip replacement
  "hipr-ball-socket", "hipr-scales", "hipr-countdown", "hipr-day-stations", "hipr-bed-moves", "hipr-frame-stick", "hipr-recline", "hipr-two-lanes", "hipr-right-angle", "hipr-car-swing", "hipr-sport-steps", "hipr-years-dial",
  // Knee replacement
  "kner-new-surfaces", "kner-four-in-five", "kner-checklist", "kner-day-ruler", "kner-day-wedges", "kner-walk-ruler", "kner-ice-raise", "kner-leg-lungs", "kner-house", "kner-drive-work-bars", "kner-sport-tiles", "kner-years-line",
] as const;
export type JointPiece = (typeof JOINT_PIECES)[number];

const hipU = "Understanding hip replacement", hipR = "Recovering after surgery", hipL = "Living with a hip replacement";
const kneeU = "Understanding knee replacement", kneeR = "Recovering after surgery", kneeL = "Living with a knee replacement";

export const JOINT_FEATURES: Record<string, FeatureSpec<JointPiece>> = {
  "hip-replacement/what-it-is": { kicker: hipU, headline: "A new ball, a new socket", standfirst: "How the hip joint works, what a replacement swaps in, and the other kinds of operation.", piece: "hipr-ball-socket", pullQuote: "Freedom from pain is often the main benefit of surgery." },
  "hip-replacement/deciding": { kicker: hipU, headline: "Is it time for a new hip?", standfirst: "When a replacement is considered, what is usually tried first, and the benefits and risks to weigh.", piece: "hipr-scales", pullQuote: "There are no upper or lower age limits for hip replacement surgery." },
  "hip-replacement/preparing": { kicker: hipU, headline: "Getting stronger while you wait", standfirst: "Exercise, the pre-admission clinic and a home made ready for the weeks after.", piece: "hipr-countdown", pullQuote: "Arthritis UK says staying active is important if you are waiting for surgery." },
  "hip-replacement/hospital": { kicker: hipU, headline: "An hour or two, then first steps", standfirst: "Arriving, the anaesthetic, the operation, the ward and going home, usually within a few days.", piece: "hipr-day-stations", pullQuote: "The operation usually takes about 1 to 2 hours." },
  "hip-replacement/exercises": { kicker: hipR, headline: "Little and often on the bed", standfirst: "Why the exercises matter, starting gently, and the moves lying down and standing.", piece: "hipr-bed-moves", pullQuote: "Start gently with just a few repeats of each exercise and gradually build up." },
  "hip-replacement/walking": { kicker: hipR, headline: "Frame, crutches, then one stick", standfirst: "Moving from a frame to crutches to a stick, and walking a little further each day.", piece: "hipr-frame-stick", pullQuote: "Walk every day as far as is comfortable." },
  "hip-replacement/pain-swelling": { kicker: hipR, headline: "Sore, swollen and tired: what settles", standfirst: "What to expect from pain, swelling and tiredness, what helps, and when pain is a warning.", piece: "hipr-recline", pullQuote: "Swelling can cause the leg to ache and make it feel very heavy." },
  "hip-replacement/warning-signs": { kicker: hipR, headline: "Two numbers to know: 111 and 999", standfirst: "The signs of an infection or a blood clot, and where to get help straight away.", piece: "hipr-two-lanes", pullQuote: "This could be a blood clot in the lungs." },
  "hip-replacement/daily-life": { kicker: hipL, headline: "Keeping the new hip safe at home", standfirst: "Movements to avoid at first, higher chairs, gadgets for dressing, and free help with equipment.", piece: "hipr-right-angle", pullQuote: "A hand-held grabber helps you pick up objects." },
  "hip-replacement/driving-work": { kicker: hipL, headline: "Six weeks to the driving seat", standfirst: "When to drive, telling your insurer, getting into the car, and planning a return to work.", piece: "hipr-car-swing", pullQuote: "Getting in and out of a car can be difficult." },
  "hip-replacement/activity": { kicker: hipL, headline: "Walk, swim, cycle, then golf", standfirst: "Which activities come first, which follow at about three months, and which to ask about.", piece: "hipr-sport-steps", pullQuote: "Regular exercise will help with your recovery." },
  "hip-replacement/long-term": { kicker: hipL, headline: "Built to last 15 years and more", standfirst: "How long a new hip lasts, signs of wear or loosening, revisions and the follow-up checks.", piece: "hipr-years-dial", pullQuote: "Modern hip replacement joints are designed to last for at least 15 years." },

  "knee-replacement/what-it-is": { kicker: kneeU, headline: "New surfaces for a worn knee", standfirst: "How a worn knee is resurfaced, the total, partial and complex kinds, and what it can do.", piece: "kner-new-surfaces", pullQuote: "The interlocking parts allow the knee to bend while also making it more stable." },
  "knee-replacement/deciding": { kicker: kneeU, headline: "Weighing up a new knee", standfirst: "When a knee replacement is considered, what comes first, the likely gains and the limits.", piece: "kner-four-in-five", pullQuote: "Most people who have a knee replacement are over 60." },
  "knee-replacement/preparing": { kicker: kneeU, headline: "Using the wait to get ready", standfirst: "Stronger thigh muscles, good general health, the pre-admission clinic and a home made ready.", piece: "kner-checklist", pullQuote: "Being unfit, overweight or a smoker can increase your risk of complications." },
  "knee-replacement/hospital": { kicker: kneeU, headline: "In on the day, up and moving soon", standfirst: "Arriving, the anaesthetic, the operation, pain relief and getting up and about.", piece: "kner-day-ruler", pullQuote: "The operation usually takes about 1 to 2 hours." },
  "knee-replacement/exercises": { kicker: kneeR, headline: "Little and often, every day", standfirst: "Why the exercises matter, how often to do them, bending and straightening, and sore days.", piece: "kner-day-wedges", pullQuote: "Keeping up your exercises will make a big difference to your recovery time." },
  "knee-replacement/walking": { kicker: kneeR, headline: "From frame to free walking", standfirst: "Stepping down from crutches to a stick, walking outside, the stairs and help at home.", piece: "kner-walk-ruler", pullQuote: "Do not twist your knee as you turn around." },
  "knee-replacement/pain-swelling": { kicker: kneeR, headline: "Sore, swollen, and settling", standfirst: "What is normal for pain and swelling, painkillers, ice and a raised leg, and when to get checked.", piece: "kner-ice-raise", pullQuote: "Pain caused by bruising from the operation is normal in the first two months." },
  "knee-replacement/warning-signs": { kicker: kneeR, headline: "Know the signs: 111 or 999", standfirst: "Blood clots and wound infections, the signs to know, and when to call 111 or 999.", piece: "kner-leg-lungs", pullQuote: "These could be signs of an infection or a blood clot." },
  "knee-replacement/daily-life": { kicker: kneeL, headline: "Light jobs now, heavy jobs later", standfirst: "Washing and dressing, housework, kneeling, sleep, and free help with equipment.", piece: "kner-house", pullQuote: "Do not kneel on your new knee until your doctor says you can." },
  "knee-replacement/driving-work": { kicker: kneeL, headline: "Back on the road, back at work", standfirst: "When to drive after a total or partial knee, insurance, returning to work and support there.", piece: "kner-drive-work-bars", pullQuote: "Return to work when you feel ready." },
  "knee-replacement/activity": { kicker: kneeL, headline: "Golf yes, rugby no", standfirst: "Which sports suit a new knee, good places to start, building up and protecting the joint.", piece: "kner-sport-tiles", pullQuote: "Exercise and sport are recommended after a knee replacement, apart from contact sports." },
  "knee-replacement/long-term": { kicker: kneeL, headline: "Built to last for decades", standfirst: "How long a new knee lasts, partial knees and repeats, what can shorten its life, and follow-up.", piece: "kner-years-line", pullQuote: "Most knee replacements last for about 25 years." },
};
