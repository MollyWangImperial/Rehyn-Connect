import type { FeatureSpec } from "./feature-spec";

// The Gout and Vitamin D deficiency pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsMineralPieces.tsx.

export const MINERAL_PIECES = [
  // Gout
  "gout-crystal-joint", "gout-urate-pie", "gout-test-trio", "gout-body-spots", "gout-first-sign", "gout-crystals-shrink", "gout-urate-line", "gout-raised-foot", "gout-plate", "gout-gentle-path", "gout-linked-checks", "gout-day-strip",
  // Vitamin D deficiency
  "vitd-sun-to-bone", "vitd-who-low", "vitd-ache-map", "vitd-level-bands", "vitd-year-wheel", "vitd-loading-line", "vitd-food-plate", "vitd-sun-arc", "vitd-limit-bars", "vitd-bone-pillars", "vitd-life-row", "vitd-pill-box",
] as const;
export type MineralPiece = (typeof MINERAL_PIECES)[number];

const goutU = "Understanding gout", goutT = "Treat and manage", goutL = "Living with gout";
const vitdU = "Understanding vitamin D deficiency", vitdT = "Treat and manage", vitdL = "Living with vitamin D deficiency";

export const MINERAL_FEATURES: Record<string, FeatureSpec<MineralPiece>> = {
  "gout/what-it-is": { kicker: goutU, headline: "Sharp crystals, sudden pain, big toe", standfirst: "How urate crystals form in a joint, what an attack feels like, where it strikes and how long it lasts.", piece: "gout-crystal-joint", pullQuote: "It is the most common type of inflammatory arthritis." },
  "gout/causes": { kicker: goutU, headline: "Mostly made by the body, not eaten", standfirst: "Where urate comes from, and how genes, age, weight, medicines and triggers play a part.", piece: "gout-urate-pie", pullQuote: "Gout is about four times more common in men than women." },
  "gout/diagnosis": { kicker: goutU, headline: "A blood test helps, crystals confirm", standfirst: "What the GP asks, what the urate test can and cannot show, and when joint fluid or a scan helps.", piece: "gout-test-trio", pullQuote: "Around 95% of people with a high urate level never develop gout." },
  "gout/complications": { kicker: goutU, headline: "Lumps, stones and damage that can be stopped", standfirst: "What years of untreated attacks can lead to, and how lowering urate stops most of it.", piece: "gout-body-spots", pullQuote: "Once the target urate level is reached, tophi will often gradually reduce." },
  "gout/attack": { kicker: goutT, headline: "Act fast at the first twinge", standfirst: "The medicines that treat an attack, why starting early matters, and what each one does.", piece: "gout-first-sign", pullQuote: "The earlier you start treatment, the better." },
  "gout/urate-lowering": { kicker: goutT, headline: "Dissolving the crystals, one day at a time", standfirst: "Who is offered allopurinol, how it works, building up the dose, and why attacks can rise at first.", piece: "gout-crystals-shrink", pullQuote: "This is actually a sign the medicine is working." },
  "gout/target": { kicker: goutT, headline: "Below the line, the crystals dissolve", standfirst: "Why there is a urate target, the numbers, how often it is checked, and what to do if attacks carry on.", piece: "gout-urate-line", pullQuote: "In most people, the target is below 360 micromol per litre." },
  "gout/self-help": { kicker: goutT, headline: "Ice, rest, raise: small comforts", standfirst: "Keeping the joint cool, resting and raising it, easier nights, water, and when to get urgent help.", piece: "gout-raised-foot", pullQuote: "Drink lots of water, unless a GP tells you not to." },
  "gout/food-drink": { kicker: goutL, headline: "A balanced plate, not a banned list", standfirst: "What diet can and cannot do, foods to keep moderate, sugary drinks, alcohol and water.", piece: "gout-plate", pullQuote: "You should not have to remove anything completely from your diet." },
  "gout/weight-activity": { kicker: goutL, headline: "Gentle steps beat crash diets", standfirst: "How weight affects urate, why gradual change matters, moving more, and resting during an attack.", piece: "gout-gentle-path", pullQuote: "It does not matter how much you do: a little is better than none." },
  "gout/other-conditions": { kicker: goutL, headline: "One check-up for joints, heart and kidneys", standfirst: "How gout links with the heart and kidneys, which medicines matter, and the check after an attack.", piece: "gout-linked-checks", pullQuote: "Around 25% of people with gout also have chronic kidney disease." },
  "gout/work-life": { kicker: goutL, headline: "Keeping working through the flares", standfirst: "Work and adjustments, Access to Work, comfortable shoes, sleep and mood, and being open about gout.", piece: "gout-day-strip", pullQuote: "Adjustable fastenings allow for changes in the shape of your feet during the day." },

  "vitamin-d-deficiency/what-it-is": { kicker: vitdU, headline: "From summer sun to strong bones", standfirst: "How vitamin D is made in the skin, how the body uses it for calcium, and what happens without enough.", piece: "vitd-sun-to-bone", pullQuote: "Vitamin D does not work straight away." },
  "vitamin-d-deficiency/risk": { kicker: vitdU, headline: "Who runs short, and when", standfirst: "Little sun, darker skin, age, pregnancy, some conditions and medicines, and how common low levels are.", piece: "vitd-who-low", pullQuote: "Low levels were most common from January to March." },
  "vitamin-d-deficiency/symptoms": { kicker: vitdU, headline: "Aching bones and tired muscles", standfirst: "Soft, weak bones, the signs in adults and in children, the longer term, and getting better.", piece: "vitd-ache-map", pullQuote: "The main symptom of rickets is bowed legs." },
  "vitamin-d-deficiency/tests": { kicker: vitdU, headline: "One number, three ranges", standfirst: "Why most people need no test, when one is done, reading the number, other checks and follow-up.", piece: "vitd-level-bands", pullQuote: "Above 50 nmol/L, levels are enough for most people." },
  "vitamin-d-deficiency/supplements": { kicker: vitdT, headline: "One small tablet, every winter", standfirst: "Who should take vitamin D in autumn and winter or all year, how much, choosing one and taking it.", piece: "vitd-year-wheel", pullQuote: "Most adults need 10 micrograms of vitamin D a day." },
  "vitamin-d-deficiency/treatment": { kicker: vitdT, headline: "A short boost, then a steady dose", standfirst: "Loading doses, how they are taken, what to tell the doctor first, feeling better and the dose afterwards.", piece: "vitd-loading-line", pullQuote: "Higher doses work more quickly." },
  "vitamin-d-deficiency/food": { kicker: vitdT, headline: "Where vitamin D hides on your plate", standfirst: "The few foods that contain it, UK milk and labels, oily fish in pregnancy, and food with a supplement.", piece: "vitd-food-plate", pullQuote: "Vitamin D is found in a small number of foods." },
  "vitamin-d-deficiency/sunlight": { kicker: vitdT, headline: "A little sun, never a burn", standfirst: "When UK sun can help, short spells, avoiding sunburn, darker skin and babies, and why not sunbeds.", piece: "vitd-sun-arc", pullQuote: "There is no safe or healthy way to get a tan." },
  "vitamin-d-deficiency/too-much": { kicker: vitdL, headline: "When more is not better", standfirst: "What too much vitamin D does, the daily limits by age, counting every supplement, and when to contact 111.", piece: "vitd-limit-bars", pullQuote: "You cannot overdose on vitamin D through exposure to sunlight." },
  "vitamin-d-deficiency/bones": { kicker: vitdL, headline: "Calcium, vitamin D and movement", standfirst: "Why bones need vitamin D and calcium, why more is not better, moving, and checks before bone medicines.", piece: "vitd-bone-pillars", pullQuote: "Vitamin D also helps maintain muscle strength to prevent falls." },
  "vitamin-d-deficiency/groups": { kicker: vitdL, headline: "From newborn to grandparent", standfirst: "What babies, young children, pregnant women and older people need, and what is known about fertility.", piece: "vitd-life-row", pullQuote: "Vitamin D helps your baby's bones and teeth develop." },
  "vitamin-d-deficiency/medicines": { kicker: vitdL, headline: "Medicines that change the picture", standfirst: "Conditions and medicines that lower vitamin D or clash with it, other forms, and what does not change.", piece: "vitd-pill-box", pullQuote: "Your doctor will decide which type of vitamin D suits your condition." },
};
