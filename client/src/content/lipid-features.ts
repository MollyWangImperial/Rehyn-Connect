import type { FeatureSpec } from "./feature-spec";

// The High cholesterol, Familial hypercholesterolaemia and Obesity pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsLipidPieces.tsx.

export const LIPID_PIECES = [
  // High cholesterol
  "chol-liver-parcels", "chol-results-slip", "chol-two-roads", "chol-risk-gauge", "chol-statin-dial", "chol-med-steps", "chol-swap-plate", "chol-five-habits", "chol-recheck-line", "chol-traffic-label", "chol-myth-cards", "chol-family-tree",
  // Familial hypercholesterolaemia
  "fh-receptors", "fh-clues", "fh-stones", "fh-arteries", "fh-statin-pull", "fh-ladder", "fh-week-board", "fh-clinic-table", "fh-cascade", "fh-child-line", "fh-plan-strip", "fh-living-shelf",
  // Obesity
  "ob-tape-ratio", "ob-many-reasons", "ob-hidden-fat", "ob-small-slice", "ob-signpost", "ob-plate", "ob-pens", "ob-stomachs", "ob-road", "ob-two-chairs", "ob-two-hungers", "ob-steady-line",
] as const;
export type LipidPiece = (typeof LIPID_PIECES)[number];

const cholU = "Understanding high cholesterol", cholT = "Treat and manage", cholL = "Living with high cholesterol";
const fhU = "Understanding FH", fhT = "Treat and manage", fhL = "Living with FH";
const obU = "Understanding obesity", obT = "Treat and manage", obL = "Living with obesity";

export const LIPID_FEATURES: Record<string, FeatureSpec<LipidPiece>> = {
  "high-cholesterol/what-it-is": { kicker: cholU, headline: "The fat your body makes itself", standfirst: "What cholesterol does, where it is made, and the difference between good and bad cholesterol.", piece: "chol-liver-parcels", pullQuote: "Cholesterol is a type of blood fat which is made in the liver." },
  "high-cholesterol/numbers": { kicker: cholU, headline: "Three numbers worth asking for", standfirst: "How the test is done, what it measures, and the healthy levels to know.", piece: "chol-results-slip", pullQuote: "When you get your result, you may just be told your total cholesterol." },
  "high-cholesterol/causes": { kicker: cholU, headline: "The many roads to high cholesterol", standfirst: "Lifestyle, age, genes, health conditions and medicines, and how they add up.", piece: "chol-two-roads", pullQuote: "People are often surprised to find out they have high cholesterol." },
  "high-cholesterol/risk": { kicker: cholU, headline: "Your number in context", standfirst: "How your GP uses cholesterol with other factors to estimate your 10-year risk.", piece: "chol-risk-gauge", pullQuote: "After 85, your risk is deemed to be high because of your age." },
  "high-cholesterol/statins": { kicker: cholT, headline: "One tablet, less cholesterol made", standfirst: "What statins do, who may be offered one, taking them and side effects.", piece: "chol-statin-dial", pullQuote: "Most people taking statins will have no side effects." },
  "high-cholesterol/other-medicines": { kicker: cholT, headline: "When statins need back-up", standfirst: "Ezetimibe, bempedoic acid and injections, and when they are used.", piece: "chol-med-steps", pullQuote: "Ezetimibe is the next treatment after a statin." },
  "high-cholesterol/food": { kicker: cholT, headline: "Swap the fat, add the fibre", standfirst: "Cutting down on saturated fat, eating more fibre, and foods that actively help.", piece: "chol-swap-plate", pullQuote: "Aim for two to three portions of oat or barley foods a day." },
  "high-cholesterol/activity": { kicker: cholT, headline: "Move more, smoke less", standfirst: "How activity, weight, stopping smoking and less alcohol help your cholesterol.", piece: "chol-five-habits", pullQuote: "Start slowly and build up." },
  "high-cholesterol/rechecks": { kicker: cholL, headline: "Check, then check again", standfirst: "How often to have your cholesterol tested, and where to get it done.", piece: "chol-recheck-line", pullQuote: "These tests are recommended again a year later." },
  "high-cholesterol/labels": { kicker: cholL, headline: "Reading the traffic lights", standfirst: "Finding saturated fat on the label, the traffic lights and the ingredients list.", piece: "chol-traffic-label", pullQuote: "Red means high, amber means medium and green means low." },
  "high-cholesterol/myths": { kicker: cholL, headline: "Eggs, butter and the truth", standfirst: "What the evidence says about eggs, shellfish, butter, coconut oil and low-fat diets.", piece: "chol-myth-cards", pullQuote: "For most people, eggs are not bad for you." },
  "high-cholesterol/family": { kicker: cholL, headline: "Find it in one, protect them all", standfirst: "How families share genes and habits, what FH is, and testing relatives.", piece: "chol-family-tree", pullQuote: "There is no cure for FH, but it can be managed." },

  "familial-hypercholesterolaemia/what-it-is": { kicker: fhU, headline: "One gene, a lifetime of high cholesterol", standfirst: "How an inherited gene change stops LDL cholesterol being cleared, and how common FH is.", piece: "fh-receptors", pullQuote: "The word familial means it runs in families." },
  "familial-hypercholesterolaemia/signs": { kicker: fhU, headline: "The clues are usually in the family", standfirst: "The rare visible signs, when a doctor may suspect FH, and getting checked.", piece: "fh-clues", pullQuote: "Rarely, too much cholesterol caused by FH causes visible signs." },
  "familial-hypercholesterolaemia/diagnosis": { kicker: fhU, headline: "From a blood test to a gene", standfirst: "The blood test, the criteria doctors use, the genetic test and your results.", piece: "fh-stones", pullQuote: "You might be diagnosed as having definite FH or possible FH." },
  "familial-hypercholesterolaemia/risk": { kicker: fhU, headline: "Earlier risk, and how treatment changes it", standfirst: "Why FH raises heart risk at a younger age, how treatment lowers it, and the heart attack signs.", piece: "fh-arteries", pullQuote: "High cholesterol levels develop from childhood." },
  "familial-hypercholesterolaemia/statins": { kicker: fhT, headline: "The daily tablet that does the heavy lifting", standfirst: "How statins work, why they are the first treatment for FH, and taking them well.", piece: "fh-statin-pull", pullQuote: "Talk to a doctor or pharmacist before stopping." },
  "familial-hypercholesterolaemia/other-treatments": { kicker: fhT, headline: "When statins need a partner", standfirst: "Ezetimibe, injections, other tablets and LDL apheresis, and when they are used.", piece: "fh-ladder", pullQuote: "A very small number of people may have LDL apheresis." },
  "familial-hypercholesterolaemia/lifestyle": { kicker: fhT, headline: "Food and movement, alongside the tablets", standfirst: "Why food and activity still matter with FH, what to eat less and more of, and smoking and alcohol.", piece: "fh-week-board", pullQuote: "You are more likely to keep doing it if you enjoy it." },
  "familial-hypercholesterolaemia/clinic": { kicker: fhT, headline: "Meet your lipid clinic team", standfirst: "What a lipid clinic does, why you might be referred, who you might see and your yearly review.", piece: "fh-clinic-table", pullQuote: "Your GP can refer you to a lipid clinic for genetic testing." },
  "familial-hypercholesterolaemia/relatives": { kicker: fhL, headline: "One diagnosis, a whole family protected", standfirst: "Who should be tested, how cascade testing works, and telling your family.", piece: "fh-cascade", pullQuote: "They could still pass the gene on to their children." },
  "familial-hypercholesterolaemia/children": { kicker: fhL, headline: "Found early, growing up healthy", standfirst: "When children are tested, treatment for children, and healthy living as a family.", piece: "fh-child-line", pullQuote: "If your child has inherited FH, there is no need to feel guilty." },
  "familial-hypercholesterolaemia/pregnancy": { kicker: fhL, headline: "Planning a pregnancy with FH", standfirst: "Stopping medicines before trying, care during pregnancy, and your baby and FH.", piece: "fh-plan-strip", pullQuote: "FH should not affect your chances of getting pregnant." },
  "familial-hypercholesterolaemia/living": { kicker: fhL, headline: "Managing FH, not being managed by it", standfirst: "Daily statins, yearly reviews, prescriptions, insurance and where to find support.", piece: "fh-living-shelf", pullQuote: "There is no cure for FH, but it can be managed." },

  "obesity/what-it-is": { kicker: obU, headline: "A number, a tape measure, a fuller picture", standfirst: "What BMI shows and misses, measuring your waist, and finding a target that suits you.", piece: "ob-tape-ratio", pullQuote: "BMI cannot tell the difference between muscle and fat." },
  "obesity/causes": { kicker: obU, headline: "Many reasons, not willpower", standfirst: "Energy balance, health conditions, medicines, genes, life changes, sleep and stress.", piece: "ob-many-reasons", pullQuote: "Obesity is not caused by a lack of willpower." },
  "obesity/health": { kicker: obU, headline: "The fat you cannot see", standfirst: "How excess weight affects the heart, blood vessels, blood sugar and everyday life.", piece: "ob-hidden-fat", pullQuote: "Many people worry about the fat they can feel, which sits under the skin." },
  "obesity/small-loss": { kicker: obU, headline: "Small losses, real gains", standfirst: "Why losing 5 to 10% helps, a first goal, and going one step at a time.", piece: "ob-small-slice", pullQuote: "Most people say they also feel better in their mood and sleep better." },
  "obesity/programmes": { kicker: obT, headline: "Support that fits your life", standfirst: "What programmes offer, referring yourself, help through your GP and the NHS online programme.", piece: "ob-signpost", pullQuote: "Group support works well for some people." },
  "obesity/food": { kicker: obT, headline: "A plate you can keep coming back to", standfirst: "Finding a way of eating you can stick to, with calories, plates, portions and drinks.", piece: "ob-plate", pullQuote: "There is no single perfect way to lose weight." },
  "obesity/medicines": { kicker: obT, headline: "How the weight loss medicines work", standfirst: "Who they are for, the injections and orlistat, side effects, and using them alongside other changes.", piece: "ob-pens", pullQuote: "Some websites sell fake weight loss medicines." },
  "obesity/surgery": { kicker: obT, headline: "A smaller stomach, a lifelong plan", standfirst: "What weight loss surgery is, who it is for, the types, recovery and getting help quickly.", piece: "ob-stomachs", pullQuote: "Follow-up appointments continue for the rest of your life." },
  "obesity/activity": { kicker: obL, headline: "Start where you are", standfirst: "Why moving more helps, how much to aim for, starting small and keeping going.", piece: "ob-road", pullQuote: "Everyday activities like housework and gardening count too." },
  "obesity/stigma": { kicker: obL, headline: "Care without blame", standfirst: "What weight stigma does, what good care looks like, and raising your weight with your GP.", piece: "ob-two-chairs", pullQuote: "Obesity is a complex condition." },
  "obesity/mood": { kicker: obL, headline: "Hungry, or something else?", standfirst: "How feelings and stress affect eating, binge eating disorder, and where to get support.", piece: "ob-two-hungers", pullQuote: "There's nothing wrong with using food to cope with feelings some of the time." },
  "obesity/keeping-off": { kicker: obL, headline: "Holding steady is a win", standfirst: "Why keeping weight off can be hard, staying active, lasting habits and getting back on track.", piece: "ob-steady-line", pullQuote: "Avoid sitting down for long periods." },
};
