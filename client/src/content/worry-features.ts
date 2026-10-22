import type { FeatureSpec } from "./feature-spec";

// The OCD and PTSD pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsWorryPieces.tsx.

export const WORRY_PIECES = [
  // OCD
  "ocd-loop", "ocd-cloud-drift", "ocd-seesaw", "ocd-overlap", "ocd-ladder", "ocd-med-weeks", "ocd-two-doors", "ocd-notebook", "ocd-family-door", "ocd-desk", "ocd-dip-path", "ocd-groups",
  // PTSD
  "ptsd-filing", "ptsd-four-panels", "ptsd-roads", "ptsd-stones", "ptsd-therapy-cards", "ptsd-med-line", "ptsd-route", "ptsd-senses", "ptsd-night-line", "ptsd-sofa", "ptsd-diary", "ptsd-help-tiles",
] as const;
export type WorryPiece = (typeof WORRY_PIECES)[number];

const ocdU = "Understanding OCD", ocdT = "Treat and manage", ocdL = "Living with OCD";
const ptsdU = "Understanding PTSD", ptsdT = "Treat and manage", ptsdL = "Living with PTSD";

export const WORRY_FEATURES: Record<string, FeatureSpec<WorryPiece>> = {
  "ocd/what-it-is": { kicker: ocdU, headline: "The loop that keeps OCD going", standfirst: "How obsessions and compulsions feed each other, who OCD affects, and why it is nothing to be ashamed of.", piece: "ocd-loop", pullQuote: "OCD can affect men, women and children." },
  "ocd/obsessions": { kicker: ocdU, headline: "Just a thought, not a wish", standfirst: "Why almost everyone has unwanted thoughts, when they become obsessions, and why pushing them away backfires.", piece: "ocd-cloud-drift", pullQuote: "Obsessions can be thoughts, images, impulses, worries, fears or doubts." },
  "ocd/compulsions": { kicker: ocdU, headline: "Why the relief never lasts", standfirst: "What compulsions can look like, why their relief is short lived, and how treatment breaks the cycle.", piece: "ocd-seesaw", pullQuote: "Over time, compulsions may happen more often or take longer to complete." },
  "ocd/types": { kicker: ocdU, headline: "One condition, many forms", standfirst: "Checking, contamination, order, intrusive thoughts and hoarding, and what is not OCD.", piece: "ocd-overlap", pullQuote: "Themes often overlap between them." },
  "ocd/cbt-erp": { kicker: ocdT, headline: "Facing fears, one rung at a time", standfirst: "How exposure and response prevention works step by step, how long it takes, and what to do if a step feels too hard.", piece: "ocd-ladder", pullQuote: "CBT will usually have an effect quite quickly." },
  "ocd/medicines": { kicker: ocdT, headline: "Patience with medicine", standfirst: "When medicine is offered, how SSRIs help, how long they take, and stopping safely with the doctor.", piece: "ocd-med-weeks", pullQuote: "Most people need treatment for at least a year." },
  "ocd/getting-help": { kicker: ocdT, headline: "Taking the first step", standfirst: "Referring yourself or seeing a GP, what happens next, and getting help even if you feel ashamed.", piece: "ocd-two-doors", pullQuote: "You do not need to have a diagnosed mental health condition." },
  "ocd/self-help": { kicker: ocdT, headline: "What you can start while you wait", standfirst: "Making a start before therapy, what helps, what keeps OCD going, and looking after the basics.", piece: "ocd-notebook", pullQuote: "Resist the compulsive behaviour, but not the obsessional thought." },
  "ocd/family": { kicker: ocdL, headline: "Helping without joining in", standfirst: "How families get drawn in, why reassurance backfires, what helps instead, and looking after yourself.", piece: "ocd-family-door", pullQuote: "It may take a while for someone to accept they need help." },
  "ocd/work": { kicker: ocdL, headline: "Rights and support at work and study", standfirst: "How OCD can affect work and study, your rights, Access to Work, Disabled Students' Allowance and where to get advice.", piece: "ocd-desk", pullQuote: "It is not a test." },
  "ocd/setbacks": { kicker: ocdL, headline: "A blip, not a fall", standfirst: "Why ups and downs are normal, planning for them, keeping your skills sharp and getting help again.", piece: "ocd-dip-path", pullQuote: "They might suggest having more CBT or a different type of treatment." },
  "ocd/support": { kicker: ocdL, headline: "You are not alone with it", standfirst: "Why groups help, the free groups OCD-UK and OCD Action run, choosing support wisely, and help right now.", piece: "ocd-groups", pullQuote: "Many people with OCD find support groups helpful." },

  "ptsd/what-it-is": { kicker: ptsdU, headline: "A memory still on high alert", standfirst: "What PTSD is, why the body can stay on alert, how common it is, and why it usually gets better.", piece: "ptsd-filing", pullQuote: "PTSD is not a sign of weakness." },
  "ptsd/symptoms": { kicker: ptsdU, headline: "Reliving, avoiding, never switching off", standfirst: "Reliving, avoiding reminders, feeling on edge and changes in mood, and when to contact a GP.", piece: "ptsd-four-panels", pullQuote: "Hypervigilance is stressful and exhausting." },
  "ptsd/causes": { kicker: ptsdU, headline: "Many kinds of trauma, including illness", standfirst: "The many events that can lead to PTSD, including serious illness, and what can help protect you.", piece: "ptsd-roads", pullQuote: "Serious health problems can be traumatic too." },
  "ptsd/complex": { kicker: ptsdU, headline: "When trauma went on and on", standfirst: "How complex PTSD differs, what can cause it, treatment in stages, and why healing is possible.", piece: "ptsd-stones", pullQuote: "Sometimes this is the only help that is needed." },
  "ptsd/therapy": { kicker: ptsdT, headline: "The two therapies that work best", standfirst: "What trauma-focused CBT and EMDR involve, how many sessions to expect, and why the start can feel intense.", piece: "ptsd-therapy-cards", pullQuote: "It helps the brain process traumatic memories so they become less distressing." },
  "ptsd/medicines": { kicker: ptsdT, headline: "Where medicine fits, and the first weeks", standfirst: "When medicine is suggested, the usual choices, the first weeks and stopping safely with the doctor.", piece: "ptsd-med-line", pullQuote: "Being offered an antipsychotic for PTSD does not mean you have psychosis." },
  "ptsd/getting-help": { kicker: ptsdT, headline: "Your first step, and what follows", standfirst: "When to ask for help, seeing a GP, referring yourself and what happens next.", piece: "ptsd-route", pullQuote: "You do not need to have a diagnosed mental health condition." },
  "ptsd/grounding": { kicker: ptsdT, headline: "Back to the here and now", standfirst: "Grounding with your senses, slow breathing, a safe space and reaching out afterwards.", piece: "ptsd-senses", pullQuote: "The NHS calming breath can be done anywhere." },
  "ptsd/sleep": { kicker: ptsdL, headline: "Calmer nights after trauma", standfirst: "Why sleep suffers, help for nightmares, a routine that helps and when to see a GP.", piece: "ptsd-night-line", pullQuote: "If nightmares are caused by PTSD, psychological therapies can be helpful." },
  "ptsd/relationships": { kicker: ptsdL, headline: "Staying close when you want to pull away", standfirst: "How PTSD can affect relationships, staying connected, and how family and friends can help.", piece: "ptsd-sofa", pullQuote: "Even a phone call or text message can help you feel connected." },
  "ptsd/triggers": { kicker: ptsdL, headline: "Spotting what brings it back", standfirst: "What triggers are, why they hit so hard, spotting patterns, approaching reminders and taking care on the road.", piece: "ptsd-diary", pullQuote: "Over time, you may notice patterns." },
  "ptsd/crisis": { kicker: ptsdL, headline: "Help is there, any hour", standfirst: "Who to call or text in danger, for urgent help or just to talk, and ways to get through today.", piece: "ptsd-help-tiles", pullQuote: "You will not be wasting anyone's time." },
};
