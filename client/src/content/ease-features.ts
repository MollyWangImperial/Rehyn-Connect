import type { FeatureSpec } from "./feature-spec";

// The Stress and Grief pieces' feature pages (see feature-spec.ts). Pictures:
// components/library/NewsEasePieces.tsx.

export const EASE_PIECES = [
  // Stress and burnout
  "str-pressure-line", "str-signs-tabs", "str-pressure-ring", "str-batteries", "str-sort-steps", "str-belly-breath", "str-two-chairs", "str-gp-notes", "str-desk-tiles", "str-carer-bench", "str-day-clock", "str-help-tiles",
  // Grief and bereavement
  "grief-feelings-cloud", "grief-growing-rings", "grief-body-signs", "grief-fork-path", "grief-support-doors", "grief-step-stairs", "grief-day-ring", "grief-two-lines", "grief-calendar", "grief-heights", "grief-tea-table", "grief-hands-clock",
] as const;
export type EasePiece = (typeof EASE_PIECES)[number];

const strU = "Understanding stress and burnout", strT = "Treat and manage", strL = "Living with stress and burnout";
const grfU = "Understanding grief and bereavement", grfT = "Treat and manage", grfL = "Living with grief and bereavement";

export const EASE_FEATURES: Record<string, FeatureSpec<EasePiece>> = {
  "stress/what-it-is": { kicker: strU, headline: "Pressure, and how the body responds", standfirst: "What stress is, why a little can help, and when it becomes a problem.", piece: "str-pressure-line", pullQuote: "If you are stressed all the time, it can become a problem." },
  "stress/signs": { kicker: strU, headline: "Body, mind and habits: the signs", standfirst: "How stress can show in your body, your mood and what you do, and when to see a GP.", piece: "str-signs-tabs", pullQuote: "If you have symptoms you are worried about, see a GP." },
  "stress/causes": { kicker: strU, headline: "Where the pressure comes from", standfirst: "Work, family, money, health and even happy changes, and why feeling out of control matters.", piece: "str-pressure-ring", pullQuote: "The things that cause stress vary from person to person." },
  "stress/burnout": { kicker: strU, headline: "When stress turns to burnout", standfirst: "How burnout differs from stress, what the World Health Organization says, the signs and recovering.", piece: "str-batteries", pullQuote: "Burnout can feel like you have nothing left to give." },
  "stress/small-changes": { kicker: strT, headline: "Small steps back to control", standfirst: "Finding the cause, small targets, time for yourself and others, and solving what you can.", piece: "str-sort-steps", pullQuote: "The act of taking control can be empowering." },
  "stress/breathing": { kicker: strT, headline: "Breathe, slow down, notice", standfirst: "A calming breath, belly breathing, mindfulness and other ways to relax.", piece: "str-belly-breath", pullQuote: "Taking a few slow, deep breaths can help you feel calmer." },
  "stress/talking": { kicker: strT, headline: "Talking it through helps", standfirst: "Telling someone, free NHS talking therapies, the types of therapy, and why asking is not a failure.", piece: "str-two-chairs", pullQuote: "You do not need to have a diagnosed mental health condition." },
  "stress/gp": { kicker: strT, headline: "Knowing when to see a GP", standfirst: "When to go, getting ready, what a GP might offer, and where to turn if it is urgent.", piece: "str-gp-notes", pullQuote: "Your GP will have seen a lot of patients with stress-related problems." },
  "stress/work": { kicker: strL, headline: "Stress at work, and your rights", standfirst: "Spotting work stress, its six main causes, what you can do, and your rights and support.", piece: "str-desk-tiles", pullQuote: "But stress is not a weakness, and it can happen to anyone." },
  "stress/caring": { kicker: strL, headline: "Looking after yourself as a carer", standfirst: "Noticing stress, a carer's assessment, taking a break and finding support for you.", piece: "str-carer-bench", pullQuote: "It helps stop you becoming exhausted and run down." },
  "stress/sleep-activity": { kicker: strL, headline: "Sleep, movement, and why alcohol is no fix", standfirst: "How stress affects sleep, habits that help, moving more, and why alcohol is not a fix.", piece: "str-day-clock", pullQuote: "You might feel more relaxed after a drink, but the effect is short-lived." },
  "stress/crisis": { kicker: strL, headline: "Help is there, day and night", standfirst: "Who to call or text at any hour, what to do in an emergency, and getting through today.", piece: "str-help-tiles", pullQuote: "You do not have to feel suicidal to get in touch with Samaritans." },

  "grief/what-it-is": { kicker: grfU, headline: "Many feelings, all of them normal", standfirst: "Shock, sadness, anger, guilt and the feelings that take you by surprise, and how grief begins to ease.", piece: "grief-feelings-cloud", pullQuote: "Healing comes slowly, but it does come." },
  "grief/no-right-way": { kicker: grfU, headline: "No map, and no right way", standfirst: "Where the five stages come from, why grief follows no set order, and growing around grief.", piece: "grief-growing-rings", pullQuote: "Instead the grief stayed just as big, but her life grew around it." },
  "grief/body": { kicker: grfU, headline: "When grief is felt in the body", standfirst: "Aches, sleep, appetite, exhaustion and anxiety after a loss, and when to see a GP.", piece: "grief-body-signs", pullQuote: "These are normal reactions, but they can be very distressing." },
  "grief/other-losses": { kicker: grfU, headline: "Grieving the life you had", standfirst: "Grief after other losses, including illness and someone close changing, and when to ask for help.", piece: "grief-fork-path", pullQuote: "There is no normal way to react to difficult situations or uncertainty." },
  "grief/support": { kicker: grfT, headline: "Help to talk, in many forms", standfirst: "A free helpline, one to one support and groups, your GP and other places to find support.", piece: "grief-support-doors", pullQuote: "If grief just does not lift after a few months, a GP can help." },
  "grief/practical": { kicker: grfT, headline: "One step at a time after a death", standfirst: "Registering the death, telling organisations, the funeral and money, and getting help with it all.", piece: "grief-step-stairs", pullQuote: "Making a list and breaking it into small steps can help." },
  "grief/looking-after": { kicker: grfT, headline: "Small, steady acts of care", standfirst: "Small steps, eating and sleep, moving, talking and writing, and going easy on alcohol.", piece: "grief-day-ring", pullQuote: "Try not to do everything at once." },
  "grief/stuck": { kicker: grfT, headline: "When grief stays the same", standfirst: "The signs that grief has got stuck, who is more likely to be affected, and what helps.", piece: "grief-two-lines", pullQuote: "This is known as prolonged grief disorder or complicated grief." },
  "grief/anniversaries": { kicker: grfL, headline: "Hard dates, gently planned", standfirst: "Reminders, planning ahead for hard days, birthdays and Christmas, and ways to remember.", piece: "grief-calendar", pullQuote: "Leave in a bit of flexibility." },
  "grief/children": { kicker: grfL, headline: "Honest words for young hearts", standfirst: "Telling children clearly, what they understand at each age, the signs of grief and how to help.", piece: "grief-heights", pullQuote: "Teenagers are not grown ups, even if they seem to grieve like adults." },
  "grief/helping-others": { kicker: grfL, headline: "What to say, and what to do", standfirst: "Saying something, listening, offering specific help, keeping in touch and looking after yourself too.", piece: "grief-tea-table", pullQuote: "You cannot pour from an empty cup." },
  "grief/crisis": { kicker: grfL, headline: "Help is there, right now", standfirst: "Where to get help straight away, ways to get through today, and support with the grief itself.", piece: "grief-hands-clock", pullQuote: "You will not be wasting anyone's time." },
};
