import type { FeatureSpec } from "./feature-spec";

// The Brain tumours, Sarcoma and Mesothelioma pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsRarePieces.tsx.

export const RARE_PIECES = [
  // Brain tumours
  "rare-bt-grades", "rare-bt-pressure", "rare-bt-team-tiles", "rare-bt-scan-line", "rare-bt-new-route", "rare-bt-stopwatch", "rare-bt-desk-tools", "rare-bt-steroid-steps", "rare-bt-car-key", "rare-bt-five-ps", "rare-bt-two-people", "rare-bt-carer-break",
  // Sarcoma
  "rare-sar-tissue-map", "rare-sar-mdt-table", "rare-sar-margin", "rare-sar-spacing", "rare-sar-physio-path", "rare-sar-limb", "rare-sar-scar-fade", "rare-sar-energy-steps", "rare-sar-four-doors", "rare-sar-later-row", "rare-sar-mirror", "rare-sar-not-alone",
  // Mesothelioma
  "rare-meso-lining", "rare-meso-fibres", "rare-meso-five-tiles", "rare-meso-test-path", "rare-meso-drain-fan", "rare-meso-pain-dial", "rare-meso-seesaw", "rare-meso-two-layers", "rare-meso-signposts", "rare-meso-small-plate", "rare-meso-carer-circle", "rare-meso-feelings",
] as const;
export type RarePiece = (typeof RARE_PIECES)[number];

// None of the three pages sets a recoverTitle. The Brain tumours and Sarcoma recover columns are about recovering
// from treatment, as on the other cancer pages; Mesothelioma's is about easing breathlessness, pain and tiredness.
const btU = "Understanding brain tumours", btR = "Recovering after treatment", btL = "Living with a brain tumour";
const sarU = "Understanding sarcoma", sarR = "Recovering after treatment", sarL = "Living with sarcoma";
const mesoU = "Understanding mesothelioma", mesoR = "Treat and manage", mesoL = "Living with mesothelioma";

export const RARE_FEATURES: Record<string, FeatureSpec<RarePiece>> = {
  // Brain tumours
  "brain-tumours/what-it-is": { kicker: btU, headline: "A growth in the brain, graded 1 to 4", standfirst: "What a brain tumour is, how grades 1 to 4 work, benign and malignant, and the most common types.", piece: "rare-bt-grades", pullQuote: "There are over 100 different types of brain tumour." },
  "brain-tumours/symptoms": { kicker: btU, headline: "Where it sits shapes what you feel", standfirst: "Why symptoms depend on where a tumour is, how they can change, and when to get help.", piece: "rare-bt-pressure", pullQuote: "It is unusual for a headache to be the only symptom." },
  "brain-tumours/treatments": { kicker: btU, headline: "One team, several treatments", standfirst: "How a specialist team plans treatment, and what surgery, radiotherapy and chemotherapy involve.", piece: "rare-bt-team-tiles", pullQuote: "You may have a combination of treatments." },
  "brain-tumours/follow-up": { kicker: btU, headline: "Scans, results and the wait between", standfirst: "Why follow-up matters, what an MRI scan is like, active monitoring and waiting for results.", piece: "rare-bt-scan-line", pullQuote: "They are a good time to raise concerns and ask questions." },
  "brain-tumours/rehab": { kicker: btR, headline: "Re-learning, one repetition at a time", standfirst: "What rehabilitation can help with, the people who can help, getting a referral and taking it slowly.", piece: "rare-bt-new-route", pullQuote: "Give yourself time, and things will gradually improve." },
  "brain-tumours/seizures": { kicker: btR, headline: "Calm, time it, keep them safe", standfirst: "Why seizures happen, what they can be like, medicines and safety, and when to call 999.", piece: "rare-bt-stopwatch", pullQuote: "Seizures are a common symptom of brain tumours." },
  "brain-tumours/thinking": { kicker: btR, headline: "When memory and focus slip", standfirst: "Why thinking can change, whether it gets better, and everyday ways to cope.", piece: "rare-bt-desk-tools", pullQuote: "Following a daily routine and getting enough sleep can help." },
  "brain-tumours/steroids": { kicker: btR, headline: "Steroids: why, when and how to stop", standfirst: "Why steroids are used, taking them safely, common side effects and never stopping suddenly.", piece: "rare-bt-steroid-steps", pullQuote: "Never stop taking your steroids suddenly, as this can make you ill." },
  "brain-tumours/driving": { kicker: btL, headline: "Telling DVLA, and the road back", standfirst: "Telling DVLA, why most people stop driving for a time, and getting your licence back.", piece: "rare-bt-car-key", pullQuote: "You do not need to resit your driving test." },
  "brain-tumours/fatigue": { kicker: btL, headline: "Tired in a way rest won't fix", standfirst: "What fatigue is, why it happens, how long it can last, and the five Ps.", piece: "rare-bt-five-ps", pullQuote: "Small everyday tasks, such as brushing your teeth, can wear you out." },
  "brain-tumours/personality": { kicker: btL, headline: "Not yourself? It is not your fault", standfirst: "How a brain tumour can change mood and personality, why, and where to find help.", piece: "rare-bt-two-people", pullQuote: "Not everyone has these changes." },
  "brain-tumours/carers": { kicker: btL, headline: "Caring for them, and for you", standfirst: "Being a carer, supporting the person, looking after yourself, and practical help.", piece: "rare-bt-carer-break", pullQuote: "Let your GP know you are a carer." },

  // Sarcoma
  "sarcoma/what-it-is": { kicker: sarU, headline: "A rare cancer of soft tissue or bone", standfirst: "The two main types of sarcoma, where they start, and how they are named.", piece: "rare-sar-tissue-map", pullQuote: "Sarcoma can affect anyone of any age." },
  "sarcoma/specialist-centres": { kicker: sarU, headline: "Rare cancer, specialist team", standfirst: "Why sarcoma is treated at specialist centres, who is in the team, and deciding together.", piece: "rare-sar-mdt-table", pullQuote: "The MDT usually meets once a week." },
  "sarcoma/treatments": { kicker: sarU, headline: "Surgery at the centre of treatment", standfirst: "How treatment is tailored, what surgery, radiotherapy and chemotherapy involve, and when to call.", piece: "rare-sar-margin", pullQuote: "Surgery is the main treatment for most people with sarcoma." },
  "sarcoma/follow-up": { kicker: sarU, headline: "Check-ups that spread out over time", standfirst: "What follow-up looks for, what happens at an appointment, how often, and between visits.", piece: "rare-sar-spacing", pullQuote: "You do not have to wait until your next visit to report new symptoms." },
  "sarcoma/physio": { kicker: sarR, headline: "Getting moving, before and after surgery", standfirst: "Starting early, what a physiotherapist does, the first days after surgery, and keeping going.", piece: "rare-sar-physio-path", pullQuote: "Do not do too much too soon." },
  "sarcoma/limb-surgery": { kicker: sarR, headline: "Limb surgery, and the road afterwards", standfirst: "Limb-sparing surgery, living with a replaced joint, and recovery after an amputation with an artificial limb.", piece: "rare-sar-limb", pullQuote: "It may help to talk to someone who has had the same operation." },
  "sarcoma/wound": { kicker: sarR, headline: "Healing well, and knowing when to call", standfirst: "Drains and dressings, caring for the wound at home, signs of infection and clots, and scars.", piece: "rare-sar-scar-fade", pullQuote: "Over time they flatten and fade, and everyone's skin heals differently." },
  "sarcoma/fatigue": { kicker: sarR, headline: "Rebuilding energy, a little each day", standfirst: "Where tiredness comes from after treatment, how long it lasts, pacing, and moving a bit more.", piece: "rare-sar-energy-steps", pullQuote: "You will need to take plenty of time to rest at first." },
  "sarcoma/work": { kicker: sarL, headline: "Back to work, study and the road", standfirst: "Your rights, going back to work or school, driving after surgery, and help with money.", piece: "rare-sar-four-doors", pullQuote: "This protection does not end when your treatment finishes." },
  "sarcoma/late-effects": { kicker: sarL, headline: "Effects that linger or arrive later", standfirst: "What late effects are, lymphoedema, joints and implants, the heart, nerves and fertility.", piece: "rare-sar-later-row", pullQuote: "Radiotherapy to a joint, such as the knee or elbow, may make it stiff." },
  "sarcoma/body-image": { kicker: sarL, headline: "Finding confidence after visible change", standfirst: "Body image, scars, losing a limb, hair loss, and the support that is there.", piece: "rare-sar-mirror", pullQuote: "The people closest to you will not see you any differently as a person." },
  "sarcoma/mood": { kicker: sarL, headline: "You are not alone with sarcoma", standfirst: "Feeling isolated, worry about it coming back, low mood, and where to get help now.", piece: "rare-sar-not-alone", pullQuote: "For some people, sarcoma can feel like a lonely cancer." },

  // Mesothelioma
  "mesothelioma/what-it-is": { kicker: mesoU, headline: "The thin lining where it starts", standfirst: "What the mesothelium is, mesothelioma in the chest and in the tummy, and the symptoms it can cause.", piece: "rare-meso-lining", pullQuote: "Pleural mesothelioma is much more common." },
  "mesothelioma/asbestos": { kicker: mesoU, headline: "Tiny fibres, a very long delay", standfirst: "What asbestos is, how its fibres do harm, who was most likely to be exposed, and the long delay.", piece: "rare-meso-fibres", pullQuote: "Mesothelioma is not infectious and cannot be passed on to other people." },
  "mesothelioma/treatments": { kicker: mesoU, headline: "Slowing it down, easing symptoms", standfirst: "How treatment is planned, and what immunotherapy, chemotherapy, radiotherapy and surgery can do.", piece: "rare-meso-five-tiles", pullQuote: "This can help improve symptoms and may help improve quality of life." },
  "mesothelioma/tests": { kicker: mesoU, headline: "The tests on the way to answers", standfirst: "Seeing your GP and a specialist, scans, fluid samples and biopsies, and why results can take time.", piece: "rare-meso-test-path", pullQuote: "Mesothelioma is not an easy disease to diagnose." },
  "mesothelioma/breathlessness": { kicker: mesoR, headline: "Easing breathlessness and fluid", standfirst: "Why fluid builds up, how it is drained and kept from coming back, and things you can do.", piece: "rare-meso-drain-fan", pullQuote: "Always call 999 if you have chest pain or difficulty breathing." },
  "mesothelioma/pain": { kicker: mesoR, headline: "Many ways to bring pain down", standfirst: "Telling your team early, describing pain, painkillers, other ways to take them, and further help.", piece: "rare-meso-pain-dial", pullQuote: "Pain is a common symptom of mesothelioma." },
  "mesothelioma/fatigue": { kicker: mesoR, headline: "Balancing rest with gentle activity", standfirst: "Why mesothelioma can be so tiring, causes that can be treated, balancing rest and planning your day.", piece: "rare-meso-seesaw", pullQuote: "It is important not to do too much." },
  "mesothelioma/palliative": { kicker: mesoR, headline: "Support from the start, not the end", standfirst: "What palliative care covers, having it alongside treatment, how to get it and planning ahead.", piece: "rare-meso-two-layers", pullQuote: "It can be helpful right from when you are first diagnosed." },
  "mesothelioma/compensation": { kicker: mesoL, headline: "Financial help, and the time limits", standfirst: "Benefits, government lump sums, civil claims and finding a specialist solicitor.", piece: "rare-meso-signposts", pullQuote: "Advertisements and websites offering legal advice may be misleading." },
  "mesothelioma/eating": { kicker: mesoL, headline: "Little and often at the table", standfirst: "Why eating can get harder, little and often, adding energy, eating when breathless, and help.", piece: "rare-meso-small-plate", pullQuote: "Smaller meals on a smaller plate are easier to manage." },
  "mesothelioma/family": { kicker: mesoL, headline: "Support for the people who care", standfirst: "Being a carer, looking after yourself, practical and money help, and groups for carers.", piece: "rare-meso-carer-circle", pullQuote: "Try to make sure you eat well and keep active." },
  "mesothelioma/mood": { kicker: mesoL, headline: "Room for every feeling, and help", standfirst: "Feelings after a diagnosis, talking, signs of depression, people to talk to, and urgent help.", piece: "rare-meso-feelings", pullQuote: "Everyone reacts in their own way." },
};
