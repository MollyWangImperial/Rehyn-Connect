import type { FeatureSpec } from "./feature-spec";

// The Crohn's disease and Ulcerative colitis pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsIbdPieces.tsx.

export const IBD_PIECES = [
  // Crohn's disease
  "cd-patchy-gut", "cd-body-signs", "cd-gut-barrier", "cd-clue-cards", "cd-two-steps", "cd-rejoin", "cd-flare-plan", "cd-plate-feed", "cd-battery", "cd-desk-key", "cd-two-way", "cd-checklist",
  // Ulcerative colitis
  "uc-colon-lining", "uc-day-signs", "uc-four-reaches", "uc-clue-lines", "uc-flare-to-calm", "uc-plan-sheet", "uc-two-lamps", "uc-two-routes", "uc-plate-diary", "uc-route-pins", "uc-week-energy", "uc-check-timeline",
] as const;
export type IbdPiece = (typeof IBD_PIECES)[number];

const cdU = "Understanding Crohn's disease", cdT = "Treat and manage", cdL = "Living with Crohn's disease";
const ucU = "Understanding ulcerative colitis", ucT = "Treat and manage", ucL = "Living with ulcerative colitis";

export const IBD_FEATURES: Record<string, FeatureSpec<IbdPiece>> = {
  // Crohn's disease
  "crohns-disease/what-it-is": { kicker: cdU, headline: "Patches anywhere, mouth to bottom", standfirst: "What Crohn's disease is, where in the gut it can appear, how it comes and goes, who gets it and the team who help.", piece: "cd-patchy-gut", pullQuote: "Crohn's can be found anywhere in the gut, but it won't be everywhere." },
  "crohns-disease/symptoms": { kicker: cdU, headline: "More than a gut condition", standfirst: "The common symptoms, how flare-ups come and go, problems beyond the gut, complications and when to get help.", piece: "cd-body-signs", pullQuote: "A flare-up can last from a few days to several months." },
  "crohns-disease/causes": { kicker: cdU, headline: "Genes, bacteria and the immune system", standfirst: "How the immune system, genes, gut bacteria, the environment and smoking may play a part, and why it is not your fault.", piece: "cd-gut-barrier", pullQuote: "There is no evidence that any particular food causes Crohn's or Colitis." },
  "crohns-disease/tests": { kicker: cdU, headline: "No single test, many clues", standfirst: "Where diagnosis starts, the blood and poo tests, camera tests and scans, and how long results can take.", piece: "cd-clue-cards", pullQuote: "There is usually no pain when biopsies are taken." },
  "crohns-disease/medicines": { kicker: cdT, headline: "Get it under control, keep it there", standfirst: "The two jobs medicines do, and what to know about steroids, immunosuppressants, biologics and staying safe on treatment.", piece: "cd-two-steps", pullQuote: "It may take some time to find the right medicine for you." },
  "crohns-disease/surgery": { kicker: cdT, headline: "An operation as a treatment choice", standfirst: "Why surgery is offered, the main types of operation, stomas, recovery and life afterwards.", piece: "cd-rejoin", pullQuote: "Many people think surgery is the last option, but that is not true." },
  "crohns-disease/flares": { kicker: cdT, headline: "Your plan for the bad days", standfirst: "Spotting a flare-up, following your plan, the urgent and emergency signs, looking after yourself and lowering the risk of the next.", piece: "cd-flare-plan", pullQuote: "It's important to go to hospital if you're advised to." },
  "crohns-disease/nutrition": { kicker: cdT, headline: "Eating well, without a miracle diet", standfirst: "Why there is no special diet, finding your own triggers, eating in a flare-up, liquid diets and vitamins.", piece: "cd-plate-feed", pullQuote: "There is no evidence that following a particular diet can cure Crohn's." },
  "crohns-disease/fatigue": { kicker: cdL, headline: "Tiredness that rest does not fix", standfirst: "What fatigue is, how common it is, its possible causes, what can be done and managing energy day to day.", piece: "cd-battery", pullQuote: "Fatigue is very different from being tired." },
  "crohns-disease/work-study": { kicker: cdL, headline: "Rights, adjustments and a RADAR key", standfirst: "Telling an employer, reasonable adjustments, Access to Work, toilets when you are out, and help at school or university.", piece: "cd-desk-key", pullQuote: "They may be able to extend deadlines or give you extra time during exams." },
  "crohns-disease/mood": { kicker: cdL, headline: "Looking after your mind and your gut", standfirst: "How common mood problems are, the times to watch for, the gut-brain link, what helps and where to get help now.", piece: "cd-two-way", pullQuote: "These feelings are completely normal." },
  "crohns-disease/checks": { kicker: cdL, headline: "Checks that keep you well", standfirst: "Regular check-ups and blood tests, vaccines, bowel checks, bone health and other checks over the years.", piece: "cd-checklist", pullQuote: "There are usually no obvious symptoms of bone loss." },
  // Ulcerative colitis
  "ulcerative-colitis/what-it-is": { kicker: ucU, headline: "Inflammation that comes and goes", standfirst: "What ulcerative colitis is, why it happens, who gets it, how it comes and goes and the team who support you.", piece: "uc-colon-lining", pullQuote: "Colitis is not contagious; you cannot catch it." },
  "ulcerative-colitis/symptoms": { kicker: ucU, headline: "More than a bowel problem", standfirst: "The common symptoms, how they differ, what a flare-up is, symptoms beyond the bowel and what can set one off.", piece: "uc-day-signs", pullQuote: "Sometimes there is no obvious trigger." },
  "ulcerative-colitis/extent": { kicker: ucU, headline: "How far up it reaches", standfirst: "Where colitis starts, the main types, how the type shapes symptoms and treatment, and how it can change.", piece: "uc-four-reaches", pullQuote: "Having proctitis does not increase your risk of developing bowel cancer." },
  "ulcerative-colitis/tests": { kicker: ucU, headline: "Pieces of the picture, put together", standfirst: "Who diagnoses it, the blood and poo tests, looking inside the bowel, getting ready for a colonoscopy and waiting for results.", piece: "uc-clue-lines", pullQuote: "The test may be uncomfortable but it should not hurt." },
  "ulcerative-colitis/medicines": { kicker: ucT, headline: "Calm it, then keep it calm", standfirst: "The two stages of treatment, mesalazine and other 5-ASAs, short courses of steroids, immune medicines and finding what works.", piece: "uc-flare-to-calm", pullQuote: "It's important that you do not stop taking steroids suddenly." },
  "ulcerative-colitis/flares": { kicker: ucT, headline: "Have a plan before it starts", standfirst: "Knowing the early signs, what to do when a flare-up starts, your medicines, looking after yourself and lowering the chance of the next.", piece: "uc-plan-sheet", pullQuote: "Over time you'll get to know how to recognise a potential flare-up." },
  "ulcerative-colitis/severe": { kicker: ucT, headline: "Know when it is an emergency", standfirst: "When to call 999 or go to A&E, when to get urgent help, acute severe colitis and the rare but serious complications.", piece: "uc-two-lamps", pullQuote: "Do not drive to A&E." },
  "ulcerative-colitis/surgery": { kicker: ucT, headline: "Surgery is not a last resort", standfirst: "When surgery is offered, what a colectomy involves, living with a stoma, recovery and life afterwards.", piece: "uc-two-routes", pullQuote: "Many people think surgery is the last option, but that isn't true." },
  "ulcerative-colitis/food": { kicker: ucL, headline: "No single diet, just balance", standfirst: "Why no one diet suits everyone, eating a balanced diet, finding your own triggers, eating in a flare-up and extra help.", piece: "uc-plate-diary", pullQuote: "Some people find that what they eat has little effect on their symptoms." },
  "ulcerative-colitis/work-travel": { kicker: ucL, headline: "Toilets, adjustments and trips", standfirst: "Telling your employer, changes at work, finding toilets when you are out, planning a trip and choosing when to go.", piece: "uc-route-pins", pullQuote: "Having Colitis should not stop you from travelling." },
  "ulcerative-colitis/mood-fatigue": { kicker: ucL, headline: "Tired, and it is real", standfirst: "What fatigue is, finding its cause, ways to manage it, why mood matters too and where to get support.", piece: "uc-week-energy", pullQuote: "Fatigue is not your fault and is nothing to be embarrassed about." },
  "ulcerative-colitis/checks": { kicker: ucL, headline: "Checks that catch changes early", standfirst: "Regular check-ups, the bowel cancer risk, surveillance colonoscopies, bowel screening, and vaccines and bones.", piece: "uc-check-timeline", pullQuote: "It's best to have it when your Colitis is in remission, if possible." },
};
