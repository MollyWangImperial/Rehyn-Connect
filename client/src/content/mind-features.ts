import type { FeatureSpec } from "./feature-spec";

// The Mind & mood pieces' feature pages (see feature-spec.ts). Pictures: components/library/NewsMindPieces.tsx.

export const MIND_PIECES = [
  // Anxiety
  "anx-alarm", "anx-panic-wave", "anx-check-loop", "anx-doors", "anx-triangle", "anx-breath", "anx-weeks", "anx-worry-clock", "anx-day-line", "anx-ladder", "anx-chairs", "anx-week-move",
  // Depression
  "dep-two-weeks", "dep-overlap", "dep-body-map", "dep-signposts", "dep-stepping-stones", "dep-week-line", "dep-planner", "dep-sun-arc", "dep-bench", "dep-stations", "dep-wave-flags", "dep-care-trio",
  // Depression after stroke
  "pds-halves", "pds-spike-wave", "pds-signs-tags", "pds-dial", "pds-table-talk", "pds-check-first", "pds-small-steps", "pds-circle-chairs", "pds-battery-loop", "pds-milestones", "pds-umbrella",
  // Sleep problems
  "ins-hypnogram", "ins-cause-tiles", "ins-two-sleepers", "ins-shoe-sizes", "ins-six-weeks", "ins-window-clock", "ins-pill-week", "ins-pain-bed", "ins-bedroom", "ins-nap-dip", "ins-worry-pad", "ins-double-bed",
] as const;
export type MindPiece = (typeof MIND_PIECES)[number];

const anxU = "Understanding anxiety", anxT = "Treat and manage", anxL = "Living with anxiety";
const depU = "Understanding depression", depT = "Treat and manage", depL = "Living with depression";
const pdsU = "Understanding depression after stroke", pdsT = "Treat and manage", pdsL = "Living with depression after stroke";
const insU = "Understanding sleep problems", insT = "Treat and manage", insL = "Living with sleep problems";

export const MIND_FEATURES: Record<string, FeatureSpec<MindPiece>> = {
  "anxiety/what-it-is": { kicker: anxU, headline: "The alarm that will not switch off", standfirst: "What anxiety does in the body, and why the alarm can get stuck on.", piece: "anx-alarm", pullQuote: "This is called the fight or flight response." },
  "anxiety/panic": { kicker: anxU, headline: "Frightening, not dangerous, and over soon", standfirst: "What a panic attack is, what it is not, and when to get it checked.", piece: "anx-panic-wave", pullQuote: "Although panic attacks are frightening, they are not dangerous." },
  "anxiety/health-anxiety": { kicker: anxU, headline: "When every twinge feels like a warning", standfirst: "How worry about health can take over after a scare, and the checking trap.", piece: "anx-check-loop", pullQuote: "You may find your fears ease over time." },
  "anxiety/types": { kicker: anxU, headline: "Many kinds of anxiety, one way in", standfirst: "Generalised anxiety, panic, social anxiety and phobias, and the help for each.", piece: "anx-doors", pullQuote: "It usually starts during the teenage years, and it is more than shyness." },
  "anxiety/cbt": { kicker: anxT, headline: "Thoughts, feelings, actions: breaking the loop", standfirst: "What CBT is, how to refer yourself, and what happens in the sessions.", piece: "anx-triangle", pullQuote: "For anxiety, CBT can help you test out your fears and tolerate your anxiety." },
  "anxiety/breathing": { kicker: anxT, headline: "Five slow counts in, five out", standfirst: "A simple breathing exercise, and coming back to the present moment.", piece: "anx-breath", pullQuote: "They can take time and practice to get used to." },
  "anxiety/medicines": { kicker: anxT, headline: "Slow medicines, careful steps", standfirst: "Where medicines fit, how long they take, and stopping safely with the doctor.", piece: "anx-weeks", pullQuote: "Most side effects ease after a couple of weeks." },
  "anxiety/worry-time": { kicker: anxT, headline: "Give worry a time slot", standfirst: "Writing worries down, a set time for them, and checking anxious thoughts.", piece: "anx-worry-clock", pullQuote: "Once you have caught one, take a step back and check it." },
  "anxiety/caffeine-sleep": { kicker: anxL, headline: "Coffee, a nightcap and a racing mind", standfirst: "How caffeine, alcohol and poor sleep feed anxiety, and a routine that helps.", piece: "anx-day-line", pullQuote: "Sleep and mental health are closely linked." },
  "anxiety/avoidance": { kicker: anxL, headline: "Small steps shrink big fears", standfirst: "Why avoiding things keeps fear going, and facing it one step at a time.", piece: "anx-ladder", pullQuote: "When we are afraid of something, it can be tempting to avoid it." },
  "anxiety/telling-people": { kicker: anxL, headline: "Letting the people around you in", standfirst: "Why telling someone helps, what to ask for, and ideas for family and friends.", piece: "anx-chairs", pullQuote: "It is normal to put off getting help." },
  "anxiety/exercise": { kicker: anxL, headline: "Move a little, worry a little less", standfirst: "Why activity helps, how much to aim for, and starting small.", piece: "anx-week-move", pullQuote: "Even moderate exercise releases chemicals in your brain that lift your mood." },

  "depression/what-it-is": { kicker: depU, headline: "More than a bad week", standfirst: "How depression differs from feeling low, the two-week rule, and why it is not a weakness.", piece: "dep-two-weeks", pullQuote: "Grief is an entirely natural response to a loss, while depression is an illness." },
  "depression/illness-link": { kicker: depU, headline: "When the body's illness weighs on the mind", standfirst: "Why depression often follows a physical illness, the hardest times, and why it still deserves help.", piece: "dep-overlap", pullQuote: "Different causes can often combine." },
  "depression/body": { kicker: depU, headline: "The symptoms you feel in your body", standfirst: "How depression can show in sleep, energy, appetite, aches and focus, and telling it apart from illness.", piece: "dep-body-map", pullQuote: "Some people may only be aware of physical symptoms." },
  "depression/urgent": { kicker: depU, headline: "Help is there, right now", standfirst: "Who to call or text at any hour, and ways to get through today.", piece: "dep-signposts", pullQuote: "Suicidal feelings are not permanent." },
  "depression/talking": { kicker: depT, headline: "Talking therapies, and how to start", standfirst: "CBT, guided self-help and counselling, how to refer yourself, and what comes after.", piece: "dep-stepping-stones", pullQuote: "You do not need a diagnosed mental health condition." },
  "depression/antidepressants": { kicker: depT, headline: "The first weeks on antidepressants", standfirst: "What antidepressants do, how the first weeks go, and stopping safely with the doctor.", piece: "dep-week-line", pullQuote: "Speak to your doctor straight away if this happens." },
  "depression/activity": { kicker: depT, headline: "Small steps that lift mood", standfirst: "How doing less can keep depression going, and planning small activities to break the cycle.", piece: "dep-planner", pullQuote: "Remember to pace yourself: you don't have to do everything at once." },
  "depression/exercise-sleep": { kicker: depT, headline: "Move, get daylight, sleep steady", standfirst: "Why exercise and daylight help, and a sleep routine that supports mood.", piece: "dep-sun-arc", pullQuote: "Any type of exercise is useful, as long as it suits you." },
  "depression/telling-people": { kicker: depL, headline: "Finding the words to tell someone", standfirst: "Why sharing helps, who to tell, and other ways in if talking feels too hard.", piece: "dep-bench", pullQuote: "Be persistent and don't give up: you can get the right help." },
  "depression/work": { kicker: depL, headline: "Time off, and a way back", standfirst: "Sick pay and fit notes, planning a return, and your rights and support at work.", piece: "dep-stations", pullQuote: "For 7 days or less, you can self-certify." },
  "depression/relapse": { kicker: depL, headline: "Staying well, and catching a dip", standfirst: "Why depression can come back, what helps you stay well, and acting on early signs.", piece: "dep-wave-flags", pullQuote: "Take your antidepressants as prescribed, even if you start to feel better." },
  "depression/carers": { kicker: depL, headline: "Being there for someone low", standfirst: "Listening, practical help, encouraging support, and looking after yourself too.", piece: "dep-care-trio", pullQuote: "It's usually best not to offer advice unless it's asked for." },

  "after-stroke/why": { kicker: pdsU, headline: "Why stroke so often brings depression", standfirst: "How the shock, the losses and the injury itself can affect mood, and why there is hope.", piece: "pds-halves", pullQuote: "Depression is common after a stroke." },
  "after-stroke/emotionalism": { kicker: pdsU, headline: "Tears that arrive without warning", standfirst: "What emotionalism is, how it differs from depression, and what can help.", piece: "pds-spike-wave", pullQuote: "Emotionalism can get better over time." },
  "after-stroke/signs": { kicker: pdsU, headline: "When low mood becomes something more", standfirst: "The signs of depression after a stroke, in yourself or someone close, and when it is urgent.", piece: "pds-signs-tags", pullQuote: "A low mood can happen to anyone from time to time." },
  "after-stroke/anxiety-too": { kicker: pdsU, headline: "Living with the fear of another stroke", standfirst: "What anxiety after a stroke feels like, when to get help, and lowering the risk.", piece: "pds-dial", pullQuote: "It is very common to feel anxious after a stroke." },
  "after-stroke/talking": { kicker: pdsT, headline: "Talking it through, in every way", standfirst: "What talking therapy offers after a stroke, how to get it, and help with aphasia.", piece: "pds-table-talk", pullQuote: "Sessions might take place in person, online or over the phone." },
  "after-stroke/antidepressants": { kicker: pdsT, headline: "What to know before an antidepressant", standfirst: "What antidepressants can do, why your other medicines matter, and the first weeks.", piece: "pds-check-first", pullQuote: "Tell your doctor about every medicine, herbal remedy and supplement you take." },
  "after-stroke/activity": { kicker: pdsT, headline: "Small, steady steps to lift mood", standfirst: "Why doing a little helps, starting small, building up safely, and doing things you enjoy.", piece: "pds-small-steps", pullQuote: "Try to do something you enjoy regularly." },
  "after-stroke/peer-support": { kicker: pdsT, headline: "People who have been there too", standfirst: "Stroke groups, the online community and volunteer calls, and whether a group suits you.", piece: "pds-circle-chairs", pullQuote: "It is common to feel nervous before joining a group." },
  "after-stroke/fatigue-mood": { kicker: pdsL, headline: "Breaking the tiredness and mood loop", standfirst: "How fatigue and low mood feed each other, and pacing, planning and prioritising.", piece: "pds-battery-loop", pullQuote: "Fatigue often gets better over time." },
  "after-stroke/purpose": { kicker: pdsL, headline: "New roles after the old ones change", standfirst: "Milestones, adapted hobbies, work, volunteering and new roles at home.", piece: "pds-milestones", pullQuote: "This is all part of your recovery." },
  "after-stroke/carers": { kicker: pdsL, headline: "Carers need care too", standfirst: "Why a carer's own mood matters, taking breaks, and where to find support.", piece: "pds-umbrella", pullQuote: "Taking breaks or getting help with some of your tasks is important." },

  "insomnia/what-happens": { kicker: insU, headline: "The night's hidden work, cycle by cycle", standfirst: "The kinds of sleep, the 90-minute cycles, and what makes us sleepy.", piece: "ins-hypnogram", pullQuote: "Deep sleep is the hardest stage to wake from, and the most restorative." },
  "insomnia/causes": { kicker: insU, headline: "What keeps you awake at night", standfirst: "Worry, pain, medicines, the menopause and everyday habits that disturb sleep.", piece: "ins-cause-tiles", pullQuote: "Insomnia can be made worse by the way we think about it." },
  "insomnia/not-apnoea": { kicker: insU, headline: "When it is not just insomnia", standfirst: "Sleep apnoea, restless legs and other signs worth mentioning to a doctor.", piece: "ins-two-sleepers", pullQuote: "Sleeping pills can make sleep apnoea worse." },
  "insomnia/how-much": { kicker: insU, headline: "Your sleep, your size", standfirst: "Why 7 to 9 hours is an average, and how to judge your own sleep by the day.", piece: "ins-shoe-sizes", pullQuote: "You are simply someone who needs less sleep." },
  "insomnia/cbt-i": { kicker: insT, headline: "The treatment that is not a pill", standfirst: "What CBT for insomnia involves, the ways to do it, and how to get it.", piece: "ins-six-weeks", pullQuote: "After the course, it is important to keep using the skills you have learned." },
  "insomnia/sleep-window": { kicker: insT, headline: "Less time in bed, better sleep", standfirst: "How sleep rescheduling works, step by step, and why to check first.", piece: "ins-window-clock", pullQuote: "Try delaying that earliest bedtime by 15 minutes each week." },
  "insomnia/sleeping-tablets": { kicker: insT, headline: "Short courses, careful stops", standfirst: "Where zopiclone, melatonin, newer medicines and pharmacy aids fit, and their limits.", piece: "ins-pill-week", pullQuote: "GPs now rarely prescribe sleeping pills to treat insomnia." },
  "insomnia/pain-at-night": { kicker: insT, headline: "Breaking the pain and sleep cycle", standfirst: "Getting comfortable, timing pain relief, a steady routine and when to get help.", piece: "ins-pain-bed", pullQuote: "Sleep deprivation can also make pain worse." },
  "insomnia/evenings": { kicker: insL, headline: "Setting the scene for sleep", standfirst: "Winding down, screens, drinks, and a cool, dark bedroom kept for sleep.", piece: "ins-bedroom", pullQuote: "A warm milky drink or herbal tea is a good swap." },
  "insomnia/naps": { kicker: insL, headline: "Getting through the afternoon dip", standfirst: "Why naps can backfire, how to nap well, and ways to stay awake instead.", piece: "ins-nap-dip", pullQuote: "Longer naps can leave you feeling groggy, so set a timer." },
  "insomnia/worry": { kicker: insL, headline: "Turning down the night-time worries", standfirst: "Worry time, calming the body, letting thoughts pass, and where to get support.", piece: "ins-worry-pad", pullQuote: "These skills get stronger with practice, so try them every night." },
  "insomnia/partner": { kicker: insL, headline: "Two sleepers, one good night", standfirst: "Snoring, other night-time disturbances, and finding what works for you both.", piece: "ins-double-bed", pullQuote: "Looking after your own rest is not selfish: it helps you both cope." },
};
