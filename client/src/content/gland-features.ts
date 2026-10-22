import type { FeatureSpec } from "./feature-spec";

// The PCOS and Addison's disease pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsGlandPieces.tsx.

export const GLAND_PIECES = [
  // PCOS (now called PMOS)
  "pcos-ovary-key", "pcos-body-signs", "pcos-two-of-three", "pcos-life-checks", "pcos-period-calendar", "pcos-care-shelf", "pcos-egg-path", "pcos-plate-week", "pcos-check-list", "pcos-mirror-talk", "pcos-pregnancy-line", "pcos-support-circle",
  // Addison's disease
  "add-glands-kidneys", "add-slow-creep", "add-synacthen-clock", "add-crisis-steps", "add-cortisol-curve", "add-sick-day-steps", "add-kit-box", "add-dentist-chair", "add-steroid-card", "add-sun-salt", "add-suitcase", "add-energy-day",
] as const;
export type GlandPiece = (typeof GLAND_PIECES)[number];

const pcosU = "Understanding PCOS", pcosT = "Treat and manage", pcosL = "Living with PCOS";
const addU = "Understanding Addison's disease", addT = "Treat and manage", addL = "Living with Addison's disease";

export const GLAND_FEATURES: Record<string, FeatureSpec<GlandPiece>> = {
  "pcos/what-it-is": { kicker: pcosU, headline: "One hormone condition, a new name", standfirst: "How PCOS affects the ovaries and insulin, why it is now called PMOS, and what may cause it.", piece: "pcos-ovary-key", pullQuote: "It can affect anyone who has ovaries." },
  "pcos/symptoms": { kicker: pcosU, headline: "Periods, hair, skin and mood", standfirst: "The main symptoms, how much they vary, when they start, and when to get them checked.", piece: "pcos-body-signs", pullQuote: "Symptoms can be mild or severe, or you may have no symptoms at all." },
  "pcos/diagnosis": { kicker: pcosU, headline: "Two out of three features", standfirst: "The tests, the three features doctors look for, and why a diagnosis can take time.", piece: "pcos-two-of-three", pullQuote: "An ultrasound scan will only be done if you are over 18." },
  "pcos/long-term": { kicker: pcosU, headline: "Looking after your future health", standfirst: "The higher chance of diabetes, heart problems and womb changes, and how regular check-ups lower the risks.", piece: "pcos-life-checks", pullQuote: "PCOS does not increase your chance of breast or ovarian cancer." },
  "pcos/periods": { kicker: pcosT, headline: "A bleed every few months", standfirst: "Treatments for irregular periods, protecting the womb lining, and bleeding to get checked.", piece: "pcos-period-calendar", pullQuote: "You may still become pregnant even if you do not have periods." },
  "pcos/hair-skin": { kicker: pcosT, headline: "Options for hair and skin", standfirst: "Removing or slowing unwanted hair, treating acne, and help with hair loss.", piece: "pcos-care-shelf", pullQuote: "Losing hair can be upsetting." },
  "pcos/fertility": { kicker: pcosT, headline: "Helping an egg on its way", standfirst: "Why getting pregnant can be harder, when to see a GP, and the treatments that can help.", piece: "pcos-egg-path", pullQuote: "This is usually because the ovaries do not release an egg each month." },
  "pcos/weight": { kicker: pcosT, headline: "Small changes you can keep", standfirst: "How food and activity help, why a small change can matter, and the support on offer.", piece: "pcos-plate-week", pullQuote: "But there are lots of women with PCOS who are a healthy weight." },
  "pcos/checks": { kicker: pcosL, headline: "The checks worth keeping up", standfirst: "Diabetes tests, blood pressure, cholesterol, the womb lining and mood, and how often to check.", piece: "pcos-check-list", pullQuote: "You can reduce the risk of serious conditions by getting regular check-ups." },
  "pcos/mood": { kicker: pcosL, headline: "When PCOS weighs on you", standfirst: "How PCOS can affect mood and body image, and where to find help, including right now.", piece: "pcos-mirror-talk", pullQuote: "Talking therapy can help if some symptoms are causing depression or anxiety." },
  "pcos/pregnancy": { kicker: pcosL, headline: "Extra checks for a safer pregnancy", standfirst: "The risks, getting ready, and the diabetes tests offered before, during and after pregnancy.", piece: "pcos-pregnancy-line", pullQuote: "Having PCOS does not mean that a pregnancy will be complicated." },
  "pcos/support": { kicker: pcosL, headline: "You are not on your own", standfirst: "Support from your team, Verity and other organisations, and finding trusted information.", piece: "pcos-support-circle", pullQuote: "Verity is a charity that offers information and support to anyone living with PCOS." },

  "addisons/what-it-is": { kicker: addU, headline: "Two small glands, two vital hormones", standfirst: "What the adrenal glands do, why they stop working, and who is most likely to get Addison's disease.", piece: "add-glands-kidneys", pullQuote: "It is essential for life." },
  "addisons/symptoms": { kicker: addU, headline: "The slow creep of Addison's", standfirst: "Early symptoms, how slowly they build, changes in the skin, and when to get help.", piece: "add-slow-creep", pullQuote: "Further symptoms tend to develop gradually over months or years." },
  "addisons/diagnosis": { kicker: addU, headline: "One injection, a few blood samples", standfirst: "From the GP's checks and first blood tests to the short Synacthen test and other tests.", piece: "add-synacthen-clock", pullQuote: "Glands that are not working properly cannot make this much." },
  "addisons/crisis": { kicker: addU, headline: "Inject, then call 999", standfirst: "What an adrenal crisis is, its signs, and what to do: the emergency injection, then 999.", piece: "add-crisis-steps", pullQuote: "Adrenal crisis is the most serious complication of Addison's disease." },
  "addisons/tablets": { kicker: addT, headline: "Copying the body's daily rhythm", standfirst: "How hydrocortisone and fludrocortisone replace the missing hormones, and finding the right dose.", piece: "add-cortisol-curve", pullQuote: "Do not stop taking hydrocortisone without talking to your doctor." },
  "addisons/sick-day-rules": { kicker: addT, headline: "When you are ill, take more", standfirst: "Why illness needs more cortisol, when to take extra, and what to do if you are being sick.", piece: "add-sick-day-steps", pullQuote: "If you feel better, go back to your usual dose." },
  "addisons/injection": { kicker: addT, headline: "The kit that keeps you safe", standfirst: "What the emergency injection is for, what is in a kit, giving it, and practising.", piece: "add-kit-box", pullQuote: "The injection goes into a muscle, usually in the upper arm or thigh." },
  "addisons/operations": { kicker: addT, headline: "Planning ahead for the dentist's chair", standfirst: "Why operations and dental work need extra medicine, and telling everyone who treats you.", piece: "add-dentist-chair", pullQuote: "A filling, a tooth taken out or treatment for an abscess does need extra." },
  "addisons/card": { kicker: addL, headline: "The card that speaks for you", standfirst: "The steroid emergency card, medical ID, and alerts on your phone.", piece: "add-steroid-card", pullQuote: "Choose a design that is easy to recognise as a medical alert." },
  "addisons/exercise-heat": { kicker: addL, headline: "Sweat, salt and staying active", standfirst: "Exercising safely, extra doses for hard exercise, hot weather and listening to salt cravings.", piece: "add-sun-salt", pullQuote: "In the heat you lose water and salt through sweat." },
  "addisons/travel": { kicker: addL, headline: "Pack double, keep it close", standfirst: "Getting ready, the paperwork, the journey, staying well away, and what to do if you are sick.", piece: "add-suitcase", pullQuote: "Vomiting in someone who depends on steroids is always a medical emergency." },
  "addisons/energy": { kicker: addL, headline: "Living well with low-energy days", standfirst: "Energy and your dose, mood and stress, and support at work.", piece: "add-energy-day", pullQuote: "Addison's disease is a serious condition that can be challenging to live with." },
};
