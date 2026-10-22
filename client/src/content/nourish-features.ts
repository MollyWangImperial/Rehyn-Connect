import type { FeatureSpec } from "./feature-spec";

// The Binge eating disorder and ARFID pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsNourishPieces.tsx.

export const NOURISH_PIECES = [
  // Binge eating disorder
  "bed-knot-thread", "bed-sign-weather", "bed-four-threads", "bed-gp-road", "bed-workbook", "bed-cbt-group", "bed-day-rhythm", "bed-therapy-first", "bed-urge-wave", "bed-kind-feed", "bed-word-swap", "bed-contact-tiles",
  // ARFID
  "arfid-venn", "arfid-umbrella", "arfid-week-strip", "arfid-battery", "arfid-stones", "arfid-ladder", "arfid-good-enough", "arfid-steps", "arfid-quiet-table", "arfid-three-rings", "arfid-bench", "arfid-help-line",
] as const;
export type NourishPiece = (typeof NOURISH_PIECES)[number];

const bedU = "Understanding binge eating disorder", bedT = "Treat and manage", bedL = "Living with binge eating disorder";
const arfU = "Understanding ARFID", arfT = "Treat and manage", arfL = "Living with ARFID";

export const NOURISH_FEATURES: Record<string, FeatureSpec<NourishPiece>> = {
  "binge-eating/what-it-is": { kicker: bedU, headline: "An illness, not a lack of willpower", standfirst: "What binge eating disorder is, why it is about feelings rather than willpower, who it affects, and that recovery is possible.", piece: "bed-knot-thread", pullQuote: "It is a serious mental health condition." },
  "binge-eating/signs": { kicker: bedU, headline: "The signs behind the shame", standfirst: "What a binge can be like, the feelings that come with it, changes others might notice, and physical signs.", piece: "bed-sign-weather", pullQuote: "Someone doesn't have to have all of the signs to be ill." },
  "binge-eating/causes": { kicker: bedU, headline: "Many threads, and nobody's fault", standfirst: "Why there is no single reason, what makes it more likely, what can keep it going, other conditions, and why it is not your fault.", piece: "bed-four-threads", pullQuote: "They aren't a choice, and it certainly isn't your fault." },
  "binge-eating/getting-help": { kicker: bedU, headline: "Your first GP appointment", standfirst: "Seeing a GP early, preparing, what happens at the appointment, referral and waiting, and what to do if you don't feel heard.", piece: "bed-gp-road", pullQuote: "Anyone of any weight can have an eating disorder." },
  "binge-eating/guided-self-help": { kicker: bedT, headline: "A guide, a helper and short sessions", standfirst: "Why guided self-help usually comes first, what it involves, making the most of it, and what comes next if it is not enough.", piece: "bed-workbook", pullQuote: "Guided self-help may not be right for everyone." },
  "binge-eating/cbt": { kicker: bedT, headline: "Changing the cycle, step by step", standfirst: "What CBT is, group or one-to-one sessions, what you will work on, why weight is not the target, and other therapies.", piece: "bed-cbt-group", pullQuote: "The therapy is not designed to help you gain or lose weight." },
  "binge-eating/regular-eating": { kicker: bedT, headline: "Steady days, fewer binges", standfirst: "Why regular eating matters, a structure for the day, keeping a record, shopping and mealtimes, and rules about food.", piece: "bed-day-rhythm", pullQuote: "Eating regularly helps to break the starve and binge cycle." },
  "binge-eating/medicines": { kicker: bedT, headline: "Therapy first, medicine alongside", standfirst: "Why medicine is not the main treatment, when an antidepressant might be offered, the first weeks, and stopping safely.", piece: "bed-therapy-first", pullQuote: "Medicine should not be offered as the only treatment for binge eating disorder." },
  "binge-eating/feelings": { kicker: bedL, headline: "Riding out the wave", standfirst: "What can set off a binge, getting to know your triggers, riding out an urge, stress and setbacks, and help if you feel overwhelmed.", piece: "bed-urge-wave", pullQuote: "You will not be wasting anyone's time." },
  "binge-eating/body-image": { kicker: bedL, headline: "Turning down the voices that judge", standfirst: "What body image is, its place in treatment, weight stigma, why you deserve help, and the people and media around you.", piece: "bed-kind-feed", pullQuote: "Weight loss should not be the focus of treatment." },
  "binge-eating/family": { kicker: bedL, headline: "Being there, in the right words", standfirst: "Raising your worry, words that help, practical support, and looking after yourself.", piece: "bed-word-swap", pullQuote: "Recognise that you are not to blame." },
  "binge-eating/support": { kicker: bedL, headline: "A helpline, a chat and a Friday group", standfirst: "Beat's Helpline, webchat and online group, finding help near you, support for families, and where to turn in a crisis.", piece: "bed-contact-tiles", pullQuote: "The phone lines are open 3pm to 8pm, Monday to Friday." },

  "arfid/what-it-is": { kicker: arfU, headline: "Avoidance, not body image", standfirst: "What ARFID is, how it differs from anorexia and bulimia, who it affects, and why it is more than picky eating.", piece: "arfid-venn", pullQuote: "Beliefs about weight or body shape are not reasons why people develop ARFID." },
  "arfid/types": { kicker: arfU, headline: "Three reasons, one umbrella", standfirst: "Sensory avoidance, fear and low interest in eating, how they can overlap, and what does not count as ARFID.", piece: "arfid-umbrella", pullQuote: "This is why ARFID is sometimes called an umbrella term." },
  "arfid/signs": { kicker: arfU, headline: "The quiet signs that last for years", standfirst: "The wide range of signs around food, feelings and social life, signs in the body, and why it is not just picky eating.", piece: "arfid-week-strip", pullQuote: "Some people need supplements to make sure their nutritional and energy needs are met." },
  "arfid/health": { kicker: arfU, headline: "When nutrients run short", standfirst: "How a narrow range of foods can affect nutrients, energy, mood and daily life, why the body is treated first, and when to get help quickly.", piece: "arfid-battery", pullQuote: "Someone can be any weight and still have a significant nutritional deficiency." },
  "arfid/getting-help": { kicker: arfT, headline: "Your first step: the GP", standfirst: "Starting with your GP, going prepared, why services vary, and what happens next.", piece: "arfid-stones", pullQuote: "The GP should still make a referral." },
  "arfid/therapy": { kicker: arfT, headline: "Goals, steps and a therapist", standfirst: "Treatment tailored to the person, the CBT made for ARFID, graded exposure, other approaches, and making it work.", piece: "arfid-ladder", pullQuote: "There is a type of CBT developed specifically for people with ARFID." },
  "arfid/dietitian": { kicker: arfT, headline: "Good enough, not perfect", standfirst: "Where a dietitian fits in the team, putting back what is missing, eating that is good enough, and other things that affect eating.", piece: "arfid-good-enough", pullQuote: "For people whose food intake is very limited, nutritional supplements may be prescribed." },
  "arfid/new-foods": { kicker: arfT, headline: "One small step at a time", standfirst: "Why pressure does not help, small steps, working with a therapist, planning ahead, and why every step counts.", piece: "arfid-steps", pullQuote: "Calm consistency is key." },
  "arfid/social": { kicker: arfL, headline: "Making meals with others easier", standfirst: "Why eating with others can be hard, planning ahead, the space around you, and what helps from others.", piece: "arfid-quiet-table", pullQuote: "Keeping conversation at meals neutral can help." },
  "arfid/autism": { kicker: arfL, headline: "When the senses shape eating", standfirst: "How ARFID, autism and ADHD are linked, autism and the senses, and adapting treatment.", piece: "arfid-three-rings", pullQuote: "Some find it hard to recognise hunger or fullness." },
  "arfid/family": { kicker: arfL, headline: "Patience over pressure", standfirst: "Talking about it, why it is not fussiness or a choice, going at their pace, and looking after yourself.", piece: "arfid-bench", pullQuote: "Remind yourself that things can change, and reassure them that recovery is possible." },
  "arfid/support": { kicker: arfL, headline: "You are not alone", standfirst: "Beat's Helpline, the ARFID Online Support Group, other support, and where to turn in a crisis.", piece: "arfid-help-line", pullQuote: "Beat does not run a crisis service." },
};
