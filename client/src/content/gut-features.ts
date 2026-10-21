import type { FeatureSpec } from "./feature-spec";

// The Kidneys, liver & digestion pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsGutPieces.tsx.

export const GUT_PIECES = [
  // Chronic kidney disease
  "ckd-two-beans", "ckd-egfr-scale", "ckd-strain-load", "ckd-sieve", "ckd-pressure-loop", "ckd-two-shelves", "ckd-plate", "ckd-four-paths", "ckd-pause-box", "ckd-pharmacy-row", "ckd-epo-cells", "ckd-year-grid",
  // Fatty liver
  "fl-fat-drops", "fl-four-cards", "fl-stage-row", "fl-two-roads", "fl-waist-band", "fl-balanced-plate", "fl-week-blocks", "fl-hub", "fl-week-units", "fl-intake", "fl-timeline",
  // IBS
  "ibs-gut-brain", "ibs-three-lights", "ibs-three-lanes", "ibs-flare-line", "ibs-day-rows", "ibs-fodmap-steps", "ibs-symptom-shelf", "ibs-calm-wave", "ibs-world-circle", "ibs-stress-loop", "ibs-desk", "ibs-diary-page",
] as const;
export type GutPiece = (typeof GUT_PIECES)[number];

const ckdU = "Understanding chronic kidney disease", ckdT = "Treat and manage", ckdL = "Living with chronic kidney disease";
const flU = "Understanding fatty liver", flT = "Treat and manage", flL = "Living with fatty liver";
const ibsU = "Understanding IBS", ibsT = "Treat and manage", ibsL = "Living with IBS";

export const GUT_FEATURES: Record<string, FeatureSpec<GutPiece>> = {
  // Chronic kidney disease
  "chronic-kidney-disease/what-kidneys-do": { kicker: ckdU, headline: "Two small filters, many big jobs", standfirst: "Where the kidneys sit, how they filter the blood, balance water and salts, and make hormones.", piece: "ckd-two-beans", pullQuote: "Renin keeps blood pressure normal." },
  "chronic-kidney-disease/egfr": { kicker: ckdU, headline: "Your kidney number, decoded", standfirst: "Where the eGFR comes from, how to read it, the five stages, and why one reading is not the whole story.", piece: "ckd-egfr-scale", pullQuote: "An eGFR of 50ml/min means your kidneys are working at about 50%." },
  "chronic-kidney-disease/causes": { kicker: ckdU, headline: "Why kidneys come under strain", standfirst: "Diabetes, high blood pressure and the other causes of CKD, and who is more likely to get it.", piece: "ckd-strain-load", pullQuote: "Often it is the result of a combination of different problems." },
  "chronic-kidney-disease/protein": { kicker: ckdU, headline: "When the filters start to leak", standfirst: "Why protein leaks into the urine, the ACR test and its A stages, and how the result guides treatment.", piece: "ckd-sieve", pullQuote: "Protein in the urine does not usually cause symptoms." },
  "chronic-kidney-disease/blood-pressure": { kicker: ckdT, headline: "Break the pressure loop", standfirst: "How blood pressure and CKD feed each other, the usual targets, and the medicines and habits that help.", piece: "ckd-pressure-loop", pullQuote: "A combination of a few medicines is often needed to reach your target." },
  "chronic-kidney-disease/medicines": { kicker: ckdT, headline: "Allies and risks in the medicine cabinet", standfirst: "Medicines that help protect the kidneys, those to be careful with, and why to tell every doctor and pharmacist.", piece: "ckd-two-shelves", pullQuote: "There is no medicine that can cure CKD." },
  "chronic-kidney-disease/food": { kicker: ckdT, headline: "Mostly just a healthy plate", standfirst: "Why most people need no special diet, and what to know about salt, protein, potassium and fluids.", piece: "ckd-plate", pullQuote: "If you have CKD, you may not need a special diet." },
  "chronic-kidney-disease/later-stages": { kicker: ckdT, headline: "Four paths if the kidneys fail", standfirst: "Haemodialysis, peritoneal dialysis, a transplant or supportive care, planned with a kidney team well ahead.", piece: "ckd-four-paths", pullQuote: "Only 1 in 50 people with CKD will ever need dialysis or a transplant." },
  "chronic-kidney-disease/sick-days": { kicker: ckdL, headline: "A plan for the days you are ill", standfirst: "Why illness and dehydration matter, which medicines may be paused, and the signs to watch for.", piece: "ckd-pause-box", pullQuote: "Taking certain medicines when you are unwell can lead to more severe illness." },
  "chronic-kidney-disease/painkillers": { kicker: ckdL, headline: "Choose the kinder painkiller", standfirst: "Paracetamol at standard doses, why NSAIDs can harm the kidneys, and when to get help with pain.", piece: "ckd-pharmacy-row", pullQuote: "Paracetamol in standard doses is safe to take if you have kidney problems." },
  "chronic-kidney-disease/tiredness": { kicker: ckdL, headline: "When tiredness has a cause", standfirst: "Why CKD can make you tired, how anaemia happens, and the tests, treatments and daily habits that help.", piece: "ckd-epo-cells", pullQuote: "Damaged kidneys make less EPO, so your body makes fewer red blood cells." },
  "chronic-kidney-disease/checks": { kicker: ckdL, headline: "Your year of kidney checks", standfirst: "The yearly review, checks at home and vaccinations, and when tests are repeated.", piece: "ckd-year-grid", pullQuote: "It is also a good chance to ask questions." },
  // Fatty liver
  "fatty-liver/what-it-is": { kicker: flU, headline: "Fat where it does not belong", standfirst: "What fatty liver is, why it happens, its new name, and why it is often silent.", piece: "fl-fat-drops", pullQuote: "Your liver is not meant to store extra fat." },
  "fatty-liver/tests": { kicker: flU, headline: "Blood tests, scores and scans", standfirst: "How a GP looks for fatty liver, from blood tests and risk scores to ultrasound and FibroScan, and what the results mean.", piece: "fl-four-cards", pullQuote: "A liver blood test cannot diagnose or rule out MASLD on its own." },
  "fatty-liver/scarring": { kicker: flU, headline: "Scarring is what matters", standfirst: "How scarring builds, the stages, and why damage can slow or even reverse.", piece: "fl-stage-row", pullQuote: "Having one stage does not mean you will always move to the next one." },
  "fatty-liver/alcohol-or-not": { kicker: flU, headline: "Two roads to a fatty liver", standfirst: "Alcohol-related or metabolic: how doctors tell them apart, the new names, and why alcohol matters either way.", piece: "fl-two-roads", pullQuote: "You can use whichever name you feel most comfortable with." },
  "fatty-liver/weight": { kicker: flT, headline: "Five to ten per cent can help", standfirst: "Why losing some weight helps the liver, how to measure your waist, and steady changes with support.", piece: "fl-waist-band", pullQuote: "Reducing liver fat tackles the root cause of MASLD." },
  "fatty-liver/food": { kicker: flT, headline: "No miracle diet, just balance", standfirst: "What a balanced diet looks like, what to cut down on, and why a liver detox does not work.", piece: "fl-balanced-plate", pullQuote: "There isn't a special diet that cures MASLD." },
  "fatty-liver/moving": { kicker: flT, headline: "Ten minutes at a time", standfirst: "Why activity lowers liver fat, the weekly aim, strength work twice a week, and starting small.", piece: "fl-week-blocks", pullQuote: "Every bit of movement matters, and doing something is always better than doing nothing." },
  "fatty-liver/other-conditions": { kicker: flT, headline: "One metabolism, linked conditions", standfirst: "How fatty liver links to diabetes, heart health, cholesterol and blood pressure, and managing them together.", piece: "fl-hub", pullQuote: "Because of this, having one can increase your risk of developing the other." },
  "fatty-liver/alcohol": { kicker: flL, headline: "Easing the load on your liver", standfirst: "Why alcohol matters with fatty liver, the weekly guidelines, when to stop, and where to get support.", piece: "fl-week-units", pullQuote: "If you have MASLD, drinking alcohol can make liver damage worse." },
  "fatty-liver/medicines": { kicker: flL, headline: "Check before you take it", standfirst: "How the liver handles medicines, and what to know about painkillers, supplements, herbal remedies and grapefruit.", piece: "fl-intake", pullQuote: "But do not stop taking any medicine your doctor has prescribed." },
  "fatty-liver/checks": { kicker: flL, headline: "Checks that catch it early", standfirst: "Why checks matter, how often they happen, who looks after you, and the signs to report between checks.", piece: "fl-timeline", pullQuote: "Liver damage often has no symptoms, so regular checks are important." },
  // IBS
  "ibs/what-it-is": { kicker: ibsU, headline: "When gut and brain miscommunicate", standfirst: "A common gut condition of gut-brain communication, why the tests come back normal, and who gets it.", piece: "ibs-gut-brain", pullQuote: "Doctors call this visceral hypersensitivity." },
  "ibs/red-flags": { kicker: ibsU, headline: "When it isn't IBS: get checked", standfirst: "Symptoms that are not typical of IBS, when to get urgent help, and conditions that can look like it.", piece: "ibs-three-lights", pullQuote: "These could be signs of something more serious." },
  "ibs/types": { kicker: ibsU, headline: "Too fast, too slow, or both", standfirst: "IBS with diarrhoea, with constipation or mixed, and why the type guides diet advice and medicines.", piece: "ibs-three-lanes", pullQuote: "Another third of people have IBS-D, with diarrhoea symptoms." },
  "ibs/triggers": { kicker: ibsU, headline: "Finding what sets it off", standfirst: "Flare-ups and what can trigger them: food and drink, stress, infections and medicines, and women's health.", piece: "ibs-flare-line", pullQuote: "IBS flare-ups can happen for no obvious reason." },
  "ibs/first-steps": { kicker: ibsT, headline: "Simple changes before big ones", standfirst: "Regular meals, fluids, caffeine, fruit and fibre: simple diet changes that often help.", piece: "ibs-day-rows", pullQuote: "Smaller meals may ease symptoms." },
  "ibs/low-fodmap": { kicker: ibsT, headline: "Three stages, with a dietitian", standfirst: "What FODMAPs are, when the diet is used, its three stages, and why to follow it with a dietitian.", piece: "ibs-fodmap-steps", pullQuote: "This is an important learning stage of the diet." },
  "ibs/medicines": { kicker: ibsT, headline: "The right medicine for your symptom", standfirst: "Medicines for cramps, constipation and diarrhoea, and stronger options from a GP.", piece: "ibs-symptom-shelf", pullQuote: "Products with IBS in the name are no different from others." },
  "ibs/gut-therapy": { kicker: ibsT, headline: "Calming the gut through the mind", standfirst: "How IBS-specific CBT and gut-directed hypnotherapy can help, and how to get them.", piece: "ibs-calm-wave", pullQuote: "Gut-directed hypnotherapy has evidence that it can help treat IBS." },
  "ibs/out-and-about": { kicker: ibsL, headline: "Making the world bigger again", standfirst: "Help with toilets, planning trips, eating out, and slowly getting back to places you have avoided.", piece: "ibs-world-circle", pullQuote: "Many people with IBS find that their world has become smaller." },
  "ibs/stress": { kicker: ibsL, headline: "Breaking the stress-gut loop", standfirst: "How stress reaches the gut, the loop it can create, a breathing exercise, and where to get support.", piece: "ibs-stress-loop", pullQuote: "Feeling anxious or a change in your mood can worsen IBS symptoms." },
  "ibs/work": { kicker: ibsL, headline: "Support to stay in work", standfirst: "Reasonable adjustments, the Equality Act, Access to Work, and day-to-day tips.", piece: "ibs-desk", pullQuote: "You do not need to be diagnosed with a condition to apply." },
  "ibs/diary": { kicker: ibsL, headline: "Patterns on paper", standfirst: "Why a food and symptom diary helps, what to write down, describing poo, and making one change at a time.", piece: "ibs-diary-page", pullQuote: "The Bristol Stool Chart is a way of describing poo." },
};
