import type { FeatureSpec } from "./feature-spec";

// The Secondary bone cancer and Caring for someone with advanced cancer pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsSupportPieces.tsx.

export const SUPPORT_PIECES = [
  // Secondary bone cancer
  "sup-bm-new-place", "sup-bm-ache-map", "sup-bm-urgent", "sup-bm-scan-day", "sup-bm-bone-shield", "sup-bm-beam", "sup-bm-pain-ladder", "sup-bm-bone-pin", "sup-bm-move-ticks", "sup-bm-smile", "sup-bm-house", "sup-bm-voices",
  // Caring for someone with advanced cancer
  "sup-ca-many-hands", "sup-ca-care-circle", "sup-ca-watch-signs", "sup-ca-two-chairs", "sup-ca-room-plan", "sup-ca-steps", "sup-ca-hours-bars", "sup-ca-sitter-clock", "sup-ca-day-icons", "sup-ca-feeling-cloud", "sup-ca-sofa-talk", "sup-ca-help-lines",
] as const;
export type SupportPiece = (typeof SUPPORT_PIECES)[number];

// Neither page sets a recoverTitle. The bone cancer recover column is about treatments that strengthen bone and ease pain;
// the carers' one is about practical help for the carer.
const bmU = "Understanding secondary bone cancer", bmT = "Treat and manage", bmL = "Living with secondary bone cancer";
const caU = "Understanding caring for someone", caT = "Practical help for carers", caL = "Living well as a carer";

export const SUPPORT_FEATURES: Record<string, FeatureSpec<SupportPiece>> = {
  // Secondary bone cancer
  "bone-metastases/what-it-is": { kicker: bmU, headline: "The first cancer, in a new place", standfirst: "How cancer cells can travel to the bone, why they stay the same type, what they do to bone and what treatment aims to do.", piece: "sup-bm-new-place", pullQuote: "Any type of primary cancer can spread to the bone." },
  "bone-metastases/symptoms": { kicker: bmU, headline: "Bone pain, and when to speak up", standfirst: "What bone pain can feel like, where it shows, when to tell your team and the signs that need help straight away.", piece: "sup-bm-ache-map", pullQuote: "Pain is the most common symptom of secondary bone cancer." },
  "bone-metastases/emergencies": { kicker: bmU, headline: "Two warnings that cannot wait", standfirst: "The signs of spinal cord compression and high calcium, what to do straight away and the numbers to keep ready.", piece: "sup-bm-urgent", pullQuote: "Do not wait for further symptoms to develop." },
  "bone-metastases/tests": { kicker: bmU, headline: "What each scan is looking for", standfirst: "Why tests are done, blood tests and x-rays, a bone scan day, other scans and waiting for results.", piece: "sup-bm-scan-day", pullQuote: "Many people feel anxious while they are waiting." },
  "bone-metastases/bone-drugs": { kicker: bmT, headline: "Medicines that make bone stronger", standfirst: "What bisphosphonates and denosumab do, how you have them, who has them, side effects and your dentist.", piece: "sup-bm-bone-shield", pullQuote: "Side effects are usually mild." },
  "bone-metastases/radiotherapy": { kicker: bmT, headline: "A beam aimed at the ache", standfirst: "Why radiotherapy is used for bone pain, how it is given, when the pain eases, side effects and radioisotopes.", piece: "sup-bm-beam", pullQuote: "External radiotherapy does not make you radioactive." },
  "bone-metastases/pain": { kicker: bmT, headline: "Easing bone pain, step by step", standfirst: "Why bone pain can usually be eased, telling your team, painkillers step by step, other treatments and who can help.", piece: "sup-bm-pain-ladder", pullQuote: "With the right treatment and management, pain can usually be relieved or reduced." },
  "bone-metastases/surgery": { kicker: bmT, headline: "Pins, joints and bone cement", standfirst: "Why surgery can help a weakened bone, the kinds of operation, bone cement, radiotherapy alongside and whether it suits you.", piece: "sup-bm-bone-pin", pullQuote: "It takes about an hour, and you can usually go home later that day." },
  "bone-metastases/moving": { kicker: bmL, headline: "Moving safely with bone secondaries", standfirst: "Why activity still helps, checking with your team first, what to avoid, what is usually safe and when to stop.", piece: "sup-bm-move-ticks", pullQuote: "Start slowly and build up gradually." },
  "bone-metastases/teeth": { kicker: bmL, headline: "Looking after your jaw on bone medicines", standfirst: "Why the jaw needs care, seeing a dentist first, daily mouth care, dental treatment and the signs to report.", piece: "sup-bm-smile", pullQuote: "Good dental hygiene can help reduce the risk." },
  "bone-metastases/home": { kicker: bmL, headline: "The help that makes home easier", standfirst: "Who can help you stay independent, equipment around the house, a free needs assessment and nurses at home.", piece: "sup-bm-house", pullQuote: "The needs assessment is free and anyone can ask for one." },
  "bone-metastases/mood": { kicker: bmL, headline: "Your feelings, and who to call", standfirst: "Why many feelings are natural, how pain and worry link, talking, low mood that lasts and help right now.", piece: "sup-bm-voices", pullQuote: "There is no right or wrong way to feel." },

  // Caring for someone with advanced cancer
  "caring-advanced/role": { kicker: caU, headline: "You may already be a carer", standfirst: "Who counts as a carer, what caring can involve, how it changes, telling the team and the help there for you.", piece: "sup-ca-many-hands", pullQuote: "Being a carer can be rewarding." },
  "caring-advanced/palliative": { kicker: caU, headline: "The team around you both", standfirst: "What palliative care is, how it supports the whole family, who is in the team, hospices and how to get a referral.", piece: "sup-ca-care-circle", pullQuote: "Family, friends and carers can get emotional and practical palliative care too." },
  "caring-advanced/symptoms": { kicker: caU, headline: "The changes that cannot wait", standfirst: "Who to call, and the signs of spinal cord compression, sepsis, sudden confusion and other symptoms to act on.", piece: "sup-ca-watch-signs", pullQuote: "Trust your instincts." },
  "caring-advanced/talking": { kicker: caU, headline: "Conversations that matter most", standfirst: "Why talking helps, letting them lead, getting started, planning ahead together and when wishes cannot be met.", piece: "sup-ca-two-chairs", pullQuote: "You do not have to talk about everything at once." },
  "caring-advanced/practical": { kicker: caT, headline: "Making care at home safer", standfirst: "Personal care, moving safely, medicines, equipment and sharing the load with family and friends.", piece: "sup-ca-room-plan", pullQuote: "Nurses and therapists can show you, and equipment can help." },
  "caring-advanced/assessment": { kicker: caT, headline: "A free assessment, just for you", standfirst: "What a carer's assessment is, how to ask for one, what happens, how to prepare and what it could lead to.", piece: "sup-ca-steps", pullQuote: "It's certainly not a test of your abilities as a carer." },
  "caring-advanced/money": { kicker: caT, headline: "Money help and your rights at work", standfirst: "Carer's Allowance, how it affects other benefits, Carer's Credit, benefits for the person you care for and work.", piece: "sup-ca-hours-bars", pullQuote: "Your employer must consider your request in a fair way." },
  "caring-advanced/respite": { kicker: caT, headline: "Taking a break, without guilt", standfirst: "Why a break matters, signs it might help, the kinds of respite, arranging it and planning ahead.", piece: "sup-ca-sitter-clock", pullQuote: "A break can benefit the person you care for too." },
  "caring-advanced/own-health": { kicker: caL, headline: "Your health counts too", standfirst: "Why your own health matters, eating and moving, sleep, time to relax and when to see your GP.", piece: "sup-ca-day-icons", pullQuote: "Accept help from others, or ask for help." },
  "caring-advanced/feelings": { kicker: caL, headline: "Every feeling has a place", standfirst: "The mix of feelings carers have, guilt and anger, grief before a loss, low moods that do not lift and help now.", piece: "sup-ca-feeling-cloud", pullQuote: "It is OK to feel both things at once." },
  "caring-advanced/children": { kicker: caL, headline: "Honest words for young minds", standfirst: "Why honesty helps, finding the words, how children of different ages react, everyday life and more support.", piece: "sup-ca-sofa-talk", pullQuote: "Make sure they know that it's OK for them to still have fun." },
  "caring-advanced/support": { kicker: caL, headline: "Help is a call away", standfirst: "Helplines for cancer questions, terminal illness and caring, carers' rights and money, out of hours, and people who understand.", piece: "sup-ca-help-lines", pullQuote: "You do not have to wait for an appointment." },
};
