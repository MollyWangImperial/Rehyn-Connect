import type { FeatureSpec } from "./feature-spec";

// The Bronchiectasis, Pulmonary fibrosis and Snoring pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsAirwayPieces.tsx.

export const AIRWAY_PIECES = [
  // Bronchiectasis
  "bx-airways", "bx-cause-map", "bx-cough-line", "bx-test-path", "bx-huff-cycle", "bx-14-days", "bx-mist", "bx-rehab-weeks", "bx-plan-sheet", "bx-shield", "bx-colour-pots", "bx-pace-path",
  // Pulmonary fibrosis
  "pf-air-sacs", "pf-ild-tree", "pf-slow-start", "pf-stones", "pf-two-slopes", "pf-oxygen-gauge", "pf-goal-hill", "pf-cough-cycle", "pf-catch-breath", "pf-autumn-jabs", "pf-flight-plan", "pf-support-web",
  // Snoring
  "sn-throat", "sn-two-traces", "sn-volume-dial", "sn-sleep-diary", "sn-side-sleeper", "sn-cause-device", "sn-nose", "sn-last-step", "sn-shared-bed", "sn-evening-line", "sn-energy-day", "sn-quit-line",
] as const;
export type AirwayPiece = (typeof AIRWAY_PIECES)[number];

const bxU = "Understanding bronchiectasis", bxT = "Treat and manage", bxL = "Living with bronchiectasis";
const pfU = "Understanding pulmonary fibrosis", pfT = "Treat and manage", pfL = "Living with pulmonary fibrosis";
const snU = "Understanding snoring", snT = "Treat and manage", snL = "Living with snoring";

export const AIRWAY_FEATURES: Record<string, FeatureSpec<AirwayPiece>> = {
  "bronchiectasis/what-it-is": { kicker: bxU, headline: "Wide airways, trapped phlegm", standfirst: "How damaged, widened airways let phlegm build up, how common it is, and how it can affect daily life.", piece: "bx-airways", pullQuote: "Too much phlegm can lead to chest infections." },
  "bronchiectasis/causes": { kicker: bxU, headline: "Many roads to damaged airways", standfirst: "Severe infections, other lung conditions and immune problems, and why the cause is often unclear.", piece: "bx-cause-map", pullQuote: "For many people it's not clear what the cause is." },
  "bronchiectasis/symptoms": { kicker: bxU, headline: "The daily cough, and when it changes", standfirst: "The main symptoms, what a flare-up is, and when to get help.", piece: "bx-cough-line", pullQuote: "A flare-up is when your usual symptoms get worse." },
  "bronchiectasis/tests": { kicker: bxU, headline: "From stethoscope to CT scanner", standfirst: "What the GP checks, why a CT scan confirms it, the other tests and waiting for results.", piece: "bx-test-path", pullQuote: "A CT scan is the most effective way of diagnosing bronchiectasis." },
  "bronchiectasis/airway-clearance": { kicker: bxT, headline: "Huff, don't cough", standfirst: "Breathing techniques and devices that clear phlegm, how often to do them, and what helps.", piece: "bx-huff-cycle", pullQuote: "You'll usually need to do these exercises every day." },
  "bronchiectasis/antibiotics": { kicker: bxT, headline: "Fourteen days, start to finish", standfirst: "Phlegm samples, the 14-day course, rescue packs, long-term antibiotics and side effects.", piece: "bx-14-days", pullQuote: "You'll usually have to take these for 14 days." },
  "bronchiectasis/inhalers": { kicker: bxT, headline: "Mist that loosens phlegm", standfirst: "When inhalers help, how nebulised salt water thins phlegm, and using them well.", piece: "bx-mist", pullQuote: "Inhalers are not always used as a treatment for bronchiectasis." },
  "bronchiectasis/rehab": { kicker: bxT, headline: "Breathless is part of getting stronger", standfirst: "What a pulmonary rehab course involves, how it helps, and staying active safely.", piece: "bx-rehab-weeks", pullQuote: "Getting out of breath when you're active is completely normal." },
  "bronchiectasis/flare-plan": { kicker: bxL, headline: "A plan for when it flares", standfirst: "What goes in a self-management plan, acting quickly on a flare-up, and when it is an emergency.", piece: "bx-plan-sheet", pullQuote: "It's important to manage flare-ups quickly to prevent further damage to your lungs." },
  "bronchiectasis/infections": { kicker: bxL, headline: "Shields against infection", standfirst: "Everyday habits and the vaccines that help prevent infections and flare-ups.", piece: "bx-shield", pullQuote: "Have the flu vaccine every year." },
  "bronchiectasis/phlegm": { kicker: bxL, headline: "Read the colour", standfirst: "What the colour of phlegm can mean, knowing your normal, blood in phlegm and keeping it loose.", piece: "bx-colour-pots", pullQuote: "Dark yellow or green phlegm means you're likely to have an infection." },
  "bronchiectasis/daily-life": { kicker: bxL, headline: "Pace, plan and prioritise", standfirst: "Saving energy, support at work, and planning a trip.", piece: "bx-pace-path", pullQuote: "Feeling very tired is one of the symptoms of bronchiectasis." },

  "pulmonary-fibrosis/what-it-is": { kicker: pfU, headline: "When the lungs stiffen with scars", standfirst: "What scarring does to the tiny air sacs, what can cause it, and why treatment aims to slow it.", piece: "pf-air-sacs", pullQuote: "Any scarring that's already in your lungs cannot be reversed." },
  "pulmonary-fibrosis/types": { kicker: pfU, headline: "One family, many kinds of scarring", standfirst: "Interstitial lung diseases, idiopathic pulmonary fibrosis, the other types, and progressive or stable.", piece: "pf-ild-tree", pullQuote: "Idiopathic means that no specific cause for the pulmonary fibrosis has been found." },
  "pulmonary-fibrosis/symptoms": { kicker: pfU, headline: "Breathless, coughing, tired: the slow start", standfirst: "The main symptoms, signs a doctor may notice, and when to get help.", piece: "pf-slow-start", pullQuote: "The symptoms usually start slowly but continue to get worse over time." },
  "pulmonary-fibrosis/tests": { kicker: pfU, headline: "From a GP visit to a clear diagnosis", standfirst: "What the GP checks, breathing tests and scans, when a biopsy is needed, and why it can take time.", piece: "pf-stones", pullQuote: "Biopsies are not needed for everyone, only if test results are still uncertain." },
  "pulmonary-fibrosis/antifibrotics": { kicker: pfT, headline: "Slowing the scars, not erasing them", standfirst: "How pirfenidone and nintedanib slow scarring, who they suit, taking them and their side effects.", piece: "pf-two-slopes", pullQuote: "However, they cannot treat scarring that has already developed." },
  "pulmonary-fibrosis/oxygen": { kicker: pfT, headline: "Oxygen for low levels, not every breath", standfirst: "Who needs oxygen, how you are assessed, the equipment and using it safely.", piece: "pf-oxygen-gauge", pullQuote: "Oxygen therapy is a treatment for low blood oxygen levels, not breathlessness." },
  "pulmonary-fibrosis/rehab": { kicker: pfT, headline: "Small goals, stronger breathing", standfirst: "What a pulmonary rehab course involves, how it helps, and keeping active every day.", piece: "pf-goal-hill", pullQuote: "You could try setting yourself small goals to keep motivated." },
  "pulmonary-fibrosis/cough": { kicker: pfT, headline: "Breaking the cycle of coughing", standfirst: "Why the cough can become a cycle, things to try, and other causes to mention.", piece: "pf-cough-cycle", pullQuote: "Constant coughing can affect the quality of your everyday life." },
  "pulmonary-fibrosis/breathlessness": { kicker: pfL, headline: "Getting your breath back, your way", standfirst: "Why staying active matters, breathing techniques, recovery positions, pacing and emergencies.", piece: "pf-catch-breath", pullQuote: "Breathing techniques help you control and slow your breathing." },
  "pulmonary-fibrosis/infections": { kicker: pfL, headline: "Your winter shield of vaccines", standfirst: "The flu, pneumococcal, RSV and COVID-19 vaccines, and everyday ways to avoid infections.", piece: "pf-autumn-jabs", pullQuote: "Try to keep away from people with chest infections and colds." },
  "pulmonary-fibrosis/travel": { kicker: pfL, headline: "Plan early, then fly", standfirst: "Talking to your team, fitness-to-fly tests, oxygen away from home, medicines and insurance.", piece: "pf-flight-plan", pullQuote: "Most people with a lung condition can travel safely." },
  "pulmonary-fibrosis/support": { kicker: pfL, headline: "You do not have to manage alone", standfirst: "Support for your feelings, people who can help, palliative care and planning ahead.", piece: "pf-support-web", pullQuote: "Palliative care is not just end-of-life care." },

  "snoring/what-it-is": { kicker: snU, headline: "The sound of relaxed tissues", standfirst: "What vibrates when you snore, why sleep makes a difference, and when it is something more.", piece: "sn-throat", pullQuote: "It happens because these parts of your body relax and narrow when you're asleep." },
  "snoring/or-apnoea": { kicker: snU, headline: "Snore, or a pause and a gasp?", standfirst: "How snoring and sleep apnoea differ, the signs to look for, and why apnoea needs treating.", piece: "sn-two-traces", pullQuote: "You can stop and start breathing like this hundreds of times." },
  "snoring/causes": { kicker: snU, headline: "The things that turn up the volume", standfirst: "Weight, smoking, alcohol, sleeping pills, sleeping on your back and a blocked nose.", piece: "sn-volume-dial", pullQuote: "Sleeping pills can sometimes cause snoring." },
  "snoring/when-to-see-gp": { kicker: snU, headline: "When a snore needs a GP", standfirst: "When to see a GP, what happens at the appointment, keeping notes and sleep tests.", piece: "sn-sleep-diary", pullQuote: "Ask people you're close to about any symptoms too." },
  "snoring/self-help": { kicker: snT, headline: "Small changes, quieter nights", standfirst: "How weight, alcohol, sleeping position, smoking and sleeping pills affect snoring.", piece: "sn-side-sleeper", pullQuote: "Simple lifestyle changes can help stop or reduce snoring." },
  "snoring/devices": { kicker: snT, headline: "The right device for the cause", standfirst: "Mouth devices, chin straps and nasal strips, and which cause each one suits.", piece: "sn-cause-device", pullQuote: "Treatment for snoring depends on the cause." },
  "snoring/nose": { kicker: snT, headline: "When the nose is the problem", standfirst: "Allergies, other irritants, help from a pharmacist and nasal polyps.", piece: "sn-nose", pullQuote: "Blocked or narrow airways in your nose are one possible cause." },
  "snoring/surgery": { kicker: snT, headline: "The last step, not the first", standfirst: "When surgery may be considered for snoring, sleep apnoea and nasal polyps.", piece: "sn-last-step", pullQuote: "Surgery is sometimes used to treat snoring if other treatments do not help." },
  "snoring/partner": { kicker: snL, headline: "The person lying awake", standfirst: "How snoring affects a partner, short-term help, and when to take it seriously.", piece: "sn-shared-bed", pullQuote: "For some people, simple solutions like earplugs can offer short-term relief." },
  "snoring/routine": { kicker: snL, headline: "An evening built for sleep", standfirst: "A regular routine, winding down, food and drink, and the bedroom.", piece: "sn-evening-line", pullQuote: "Try not to use phones, tablets or computers for an hour before bed." },
  "snoring/tiredness": { kicker: snL, headline: "Snoring at night, tired all day", standfirst: "When tiredness may be a sign, checking sleepiness, driving, and when to see a GP.", piece: "sn-energy-day", pullQuote: "It's normal to feel tired sometimes." },
  "snoring/smoking": { kicker: snL, headline: "Stop smoking, breathe easier at night", standfirst: "How smoking and nicotine affect snoring and sleep, what quitting brings, and help to stop.", piece: "sn-quit-line", pullQuote: "You're more likely to snore if you smoke." },
};
