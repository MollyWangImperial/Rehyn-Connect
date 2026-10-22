import type { LibraryCondition, LibraryItem } from "../library";
import { MIND_EXTRA_MEDIA } from "./mind-extra-media";
import { ADHD_UK, ANXIETY_UK, article, BEAT, CARERS_UK, FRANK, HARMLESS, MIND, NARCOLEPSY_UK, NAS, NHS, NO_PANIC, piece, RETHINK, SAMARITANS, source } from "../library-helpers";

// Mind & mood, filling out every group: perimenopause and mood, self-harm; panic, health anxiety, social
// anxiety, phobias; narcolepsy; schizophrenia, personality disorder; burnout, carer stress, anger; drug use,
// gambling, quitting smoking; binge eating, ARFID; adult ADHD and autism. Same shape as mind-more.ts.

type Lists = { understand: LibraryItem[]; recover: LibraryItem[]; liveWell: LibraryItem[] };
type Outline = Omit<LibraryCondition, "content" | "facts"> & { prefix: string; lists: Lists; sources: NonNullable<LibraryCondition["content"]>["sources"]; askDoctor: string[]; related: { groupId: string; conditionId: string }[] };

/**
 * A condition page from its outline: three lists of articles (each opening its checked answer, `<prefix><piece>`),
 * sources, questions and related pages. The header facts, videos and people's stories come from mind-extra-media.ts.
 */
const page = ({ prefix, lists, sources, askDoctor, related, ...rest }: Outline): LibraryCondition => {
  const media = MIND_EXTRA_MEDIA[rest.id];
  const withAnswers = (items: LibraryItem[]) => items.map(item => ({ ...item, learnId: `${prefix}${item.id}` }));
  return {
    ...rest,
    facts: media?.facts ?? [],
    content: {
      understand: withAnswers(lists.understand),
      recoverTitle: "Treat & manage",
      recover: withAnswers(lists.recover),
      liveWell: withAnswers(lists.liveWell),
      watch: media?.watch ?? [piece("video", "explained", `${rest.title} explained`, 3)],
      sources,
      stories: [],
      ...(media?.videoStories?.length ? { videoStories: media.videoStories } : {}),
      askDoctor,
      related,
    },
  };
};
const a = (id: string, title: string, minutes: number, keywords: string[], extra?: { blurb?: string; diagram?: boolean }) =>
  article(id, title, minutes, { keywords, ...(extra?.blurb ? { blurb: extra.blurb } : {}), ...(extra?.diagram ? { extra: "With a diagram" } : {}) });

export const perimenopauseMood = page({
  id: "perimenopause-mood", prefix: "peri-", title: "Perimenopause and mood",
  summary: "Low mood, anxiety, irritability and poor sleep are common in the years around the menopause, as hormone levels change. They are real, they are not a personal failing, and HRT, talking therapies and everyday changes can all help.",
  keywords: ["perimenopause", "menopause", "mood", "anxiety", "hrt", "hormones"],
  lists: {
    understand: [a("what-happens", "What happens to mood around the menopause", 3, ["hormones", "oestrogen"], { blurb: "Hormones, the brain and how mood can change.", diagram: true }), a("symptoms", "Symptoms: mood, worry, sleep and focus", 3, ["symptoms", "brain fog", "irritability"]), a("or-depression", "Menopause changes or depression?", 3, ["depression", "difference"]), a("getting-help", "Talking to a GP", 2, ["gp", "appointment"])],
    recover: [a("hrt", "HRT and mood", 4, ["hrt", "hormone replacement"]), a("talking", "CBT and talking therapies", 3, ["cbt", "therapy"]), a("other-medicines", "Other medicines", 3, ["antidepressants", "medicines"]), a("sleep", "Sleep and night sweats", 3, ["sleep", "night sweats"])],
    liveWell: [a("exercise-food", "Exercise, food and alcohol", 3, ["exercise", "food", "alcohol"]), a("work", "Menopause at work", 3, ["work", "employer"]), a("relationships", "Relationships and talking to others", 3, ["partner", "family"]), a("urgent", "When to get urgent help", 2, ["urgent", "crisis"])],
  },
  sources: [source(NHS, "Menopause"), MIND],
  askDoctor: ["Could my mood changes be linked to the menopause?", "Would HRT help my mood and sleep?", "Can I be referred for CBT?", "What else could be adding to how I feel?"],
  related: [{ groupId: "depression", conditionId: "depression" }, { groupId: "anxiety", conditionId: "anxiety" }, { groupId: "sleep", conditionId: "insomnia" }],
});

export const selfHarm = page({
  id: "self-harm", prefix: "sh-", title: "Self-harm",
  summary: "When someone hurts themselves on purpose, often as a way of coping with very difficult feelings. It is more common than many people think and nothing to be ashamed of. Talking to someone is a strong first step, and there is support for the person and the people around them.",
  keywords: ["self-harm", "self harm", "hurting myself", "coping", "crisis"],
  lists: {
    understand: [a("what-it-is", "What self-harm is", 3, ["coping", "feelings"], { blurb: "A way of coping with overwhelming feelings.", diagram: true }), a("why", "Why people self-harm", 3, ["reasons", "feelings"]), a("signs", "Signs in someone you care about", 3, ["signs", "family"]), a("urgent", "If you need help now", 2, ["urgent", "999", "samaritans"], { blurb: "Who to call, right now, any hour." })],
    recover: [a("talking-first", "Telling someone", 3, ["telling", "talking"]), a("gp-therapy", "GP, talking therapies and support", 3, ["gp", "therapy", "support"]), a("injuries", "Looking after injuries", 2, ["injuries", "first aid"]), a("distraction", "Ways to cope with urges", 3, ["urges", "coping", "distraction"])],
    liveWell: [a("triggers", "Noticing what sets it off", 3, ["triggers", "patterns"]), a("support", "Charities and helplines", 2, ["helplines", "charities"]), a("carers", "Supporting someone who self-harms", 3, ["carers", "family", "friends"]), a("recovery", "Recovery takes time", 3, ["recovery", "setbacks"])],
  },
  sources: [source(NHS, "Self-harm"), SAMARITANS, HARMLESS, MIND],
  askDoctor: ["Can you help me find support for self-harm?", "Can I be referred to talking therapy?", "What should I do if I hurt myself badly?", "Is there support for my family too?"],
  related: [{ groupId: "depression", conditionId: "depression" }, { groupId: "anxiety", conditionId: "anxiety" }, { groupId: "bipolar-psychosis", conditionId: "personality-disorder" }],
});

export const panicDisorder = page({
  id: "panic-disorder", prefix: "pnc-", title: "Panic disorder",
  summary: "Repeated, unexpected panic attacks, and a constant fear of having another. The attacks are frightening but not dangerous. Talking therapy, especially CBT, helps most people, and there are ways to ride out an attack.",
  keywords: ["panic disorder", "panic attacks", "fear", "racing heart"],
  lists: {
    understand: [a("what-it-is", "What panic disorder is", 3, ["panic", "attacks"], { blurb: "Attacks, and the fear of the next one.", diagram: true }), a("attack", "What happens in a panic attack", 3, ["attack", "symptoms"]), a("causes", "Why it happens", 3, ["causes", "stress"]), a("diagnosis", "Getting a diagnosis", 2, ["diagnosis", "gp"])],
    recover: [a("cbt", "CBT for panic", 4, ["cbt", "therapy"]), a("during", "What to do during an attack", 3, ["breathing", "attack"]), a("medicines", "Medicines for panic disorder", 3, ["ssri", "medicines"]), a("self-help", "Self-help courses and apps", 2, ["self-help", "apps"])],
    liveWell: [a("avoidance", "Going back to places you avoid", 3, ["avoidance", "agoraphobia"]), a("lifestyle", "Caffeine, alcohol, exercise and sleep", 3, ["caffeine", "exercise"]), a("chest-pain", "When it might not be panic", 2, ["chest pain", "999"]), a("support", "Support groups", 2, ["support", "charity"])],
  },
  sources: [source(NHS, "Panic disorder"), NO_PANIC, ANXIETY_UK],
  askDoctor: ["Could my symptoms be panic disorder?", "Can I refer myself for CBT?", "Should my heart be checked?", "Would a medicine help?"],
  related: [{ groupId: "anxiety", conditionId: "anxiety" }, { groupId: "anxiety", conditionId: "phobias" }, { groupId: "heart-rhythm", conditionId: "svt" }],
});

export const healthAnxiety = page({
  id: "health-anxiety", prefix: "hanx-", title: "Health anxiety",
  summary: "Spending so much time worrying about being ill that it takes over everyday life: checking the body, searching symptoms and seeking reassurance that never lasts. It is common, especially after an illness or a scare, and CBT works well.",
  keywords: ["health anxiety", "hypochondria", "worry about illness", "checking", "reassurance"],
  lists: {
    understand: [a("what-it-is", "What health anxiety is", 3, ["worry", "illness"], { blurb: "When worry about illness takes over.", diagram: true }), a("cycle", "The checking and reassurance cycle", 3, ["checking", "reassurance"]), a("after-illness", "After a real illness or scare", 3, ["illness", "scare"]), a("signs", "Signs it has become a problem", 2, ["signs"])],
    recover: [a("cbt", "CBT for health anxiety", 4, ["cbt", "therapy"]), a("checking-less", "Cutting down checking and searching", 3, ["checking", "searching"]), a("medicines", "Medicines", 2, ["medicines", "ssri"]), a("gp-plan", "A plan with your GP", 3, ["gp", "appointments"])],
    liveWell: [a("uncertainty", "Living with uncertainty", 3, ["uncertainty"]), a("family", "Family and reassurance", 3, ["family", "reassurance"]), a("new-symptoms", "When a new symptom does need checking", 2, ["symptoms", "urgent"]), a("self-help", "Self-help that works", 3, ["self-help"])],
  },
  sources: [source(NHS, "Health anxiety"), ANXIETY_UK, MIND],
  askDoctor: ["Could this be health anxiety?", "Can I be referred for CBT?", "How should I handle new symptoms?", "Can we agree a plan for check-ups?"],
  related: [{ groupId: "anxiety", conditionId: "anxiety" }, { groupId: "anxiety", conditionId: "ocd" }, { groupId: "anxiety", conditionId: "panic-disorder" }],
});

export const socialAnxiety = page({
  id: "social-anxiety", prefix: "soc-", title: "Social anxiety",
  summary: "An intense, lasting fear of social situations and of being judged, more than ordinary shyness. It can affect work, friendships and everyday tasks. CBT helps most people, and small steps make a real difference.",
  keywords: ["social anxiety", "social phobia", "shy", "judged", "embarrassed"],
  lists: {
    understand: [a("what-it-is", "What social anxiety is", 3, ["fear", "judged"], { blurb: "More than shyness.", diagram: true }), a("symptoms", "Symptoms: thoughts, body and behaviour", 3, ["blushing", "sweating"]), a("causes", "Why it happens", 2, ["causes"]), a("diagnosis", "Getting help from a GP", 2, ["gp", "diagnosis"])],
    recover: [a("cbt", "CBT for social anxiety", 4, ["cbt", "therapy"]), a("self-help", "Guided self-help", 3, ["self-help"]), a("medicines", "Medicines", 3, ["ssri", "medicines"]), a("small-steps", "Small steps into hard situations", 3, ["steps", "avoidance"])],
    liveWell: [a("work", "Work and study", 3, ["work", "meetings"]), a("safety", "Safety behaviours and dropping them", 3, ["safety behaviours"]), a("friends", "Friends and family", 2, ["friends", "family"]), a("support", "Support and charities", 2, ["support"])],
  },
  sources: [source(NHS, "Social anxiety"), ANXIETY_UK, MIND],
  askDoctor: ["Could this be social anxiety?", "Can I refer myself for CBT?", "Would a medicine help?", "Is there a group I could join?"],
  related: [{ groupId: "anxiety", conditionId: "anxiety" }, { groupId: "stress-grief", conditionId: "loneliness" }, { groupId: "depression", conditionId: "depression" }],
});

export const phobias = page({
  id: "phobias", prefix: "phob-", title: "Phobias",
  summary: "An overwhelming fear of a specific thing, place or situation that leads people to avoid it. Phobias are common and very treatable, usually with gradual exposure as part of talking therapy.",
  keywords: ["phobia", "fear", "agoraphobia", "needles", "flying", "heights"],
  lists: {
    understand: [a("what-it-is", "What a phobia is", 3, ["fear", "avoidance"], { blurb: "Fear far bigger than the danger.", diagram: true }), a("types", "Specific phobias and complex phobias", 3, ["specific", "agoraphobia"]), a("symptoms", "What it feels like", 2, ["symptoms", "panic"]), a("causes", "Why phobias start", 2, ["causes"])],
    recover: [a("exposure", "Gradual exposure", 4, ["exposure", "desensitisation"]), a("cbt", "CBT for phobias", 3, ["cbt"]), a("medicines", "Medicines", 2, ["medicines"]), a("self-help", "Self-help steps", 3, ["self-help"])],
    liveWell: [a("needles", "Needle and medical phobias", 3, ["needles", "blood", "medical"]), a("agoraphobia", "Agoraphobia and going out", 3, ["agoraphobia", "going out"]), a("family", "Helping someone with a phobia", 2, ["family"]), a("support", "Support and charities", 2, ["support"])],
  },
  sources: [source(NHS, "Phobias"), ANXIETY_UK, NO_PANIC],
  askDoctor: ["Can I be referred for help with my phobia?", "Would exposure therapy suit me?", "What can help before a medical procedure?", "Is there self-help I can start now?"],
  related: [{ groupId: "anxiety", conditionId: "panic-disorder" }, { groupId: "anxiety", conditionId: "anxiety" }, { groupId: "anxiety", conditionId: "social-anxiety" }],
});

export const narcolepsy = page({
  id: "narcolepsy", prefix: "narc-", title: "Narcolepsy",
  summary: "A long-term condition in which the brain cannot control sleeping and waking normally, causing overwhelming sleepiness in the day and sometimes sudden muscle weakness. Medicines, planned naps and support help people live well with it.",
  keywords: ["narcolepsy", "sleepy", "cataplexy", "falling asleep", "daytime sleepiness"],
  lists: {
    understand: [a("what-it-is", "What narcolepsy is", 3, ["sleep", "brain"], { blurb: "When the brain's sleep switch misfires.", diagram: true }), a("symptoms", "Sleepiness, cataplexy and other symptoms", 3, ["cataplexy", "sleep paralysis"]), a("causes", "Why it happens", 2, ["causes", "orexin"]), a("diagnosis", "Sleep studies and diagnosis", 3, ["sleep study", "mslt"])],
    recover: [a("medicines", "Medicines for narcolepsy", 4, ["medicines", "modafinil"]), a("naps", "Planned naps", 2, ["naps"]), a("sleep-habits", "Sleep habits that help", 3, ["sleep habits"]), a("specialist", "The sleep clinic", 2, ["specialist", "clinic"])],
    liveWell: [a("driving", "Driving and narcolepsy", 3, ["driving", "dvla"]), a("work-study", "Work and study", 3, ["work", "adjustments"]), a("mood", "Mood and narcolepsy", 2, ["mood", "depression"]), a("support", "Support and charities", 2, ["support"])],
  },
  sources: [source(NHS, "Narcolepsy"), NARCOLEPSY_UK],
  askDoctor: ["Can I be referred to a sleep clinic?", "Which medicines might help me?", "Do I need to tell the DVLA?", "What adjustments could help at work?"],
  related: [{ groupId: "sleep", conditionId: "insomnia" }, { groupId: "sleep-breathing", conditionId: "sleep-apnoea" }, { groupId: "depression", conditionId: "depression" }],
});

export const schizophrenia = page({
  id: "schizophrenia", prefix: "scz-", title: "Schizophrenia",
  summary: "A long-term condition that affects how a person thinks, feels and sees the world, with times of psychosis such as hearing voices or holding unusual beliefs. Many people recover or live well with it, with medicines, talking therapy and support.",
  keywords: ["schizophrenia", "psychosis", "voices", "hallucinations", "delusions"],
  lists: {
    understand: [a("what-it-is", "What schizophrenia is", 3, ["psychosis", "symptoms"], { blurb: "Psychosis, and the quieter symptoms too.", diagram: true }), a("symptoms", "Positive and negative symptoms", 3, ["voices", "motivation"]), a("causes", "Why it happens", 3, ["causes", "genes", "stress"]), a("diagnosis", "Diagnosis and the mental health team", 3, ["diagnosis", "psychiatrist"])],
    recover: [a("medicines", "Antipsychotic medicines", 4, ["antipsychotics", "medicines"]), a("therapy", "CBT and family therapy", 3, ["cbt", "family therapy"]), a("crisis", "In a crisis", 2, ["crisis", "urgent"]), a("physical-health", "Physical health checks", 3, ["health checks", "weight"])],
    liveWell: [a("relapse", "Spotting early signs of relapse", 3, ["relapse", "early signs"]), a("daily-life", "Work, money and daily life", 3, ["work", "benefits"]), a("carers", "For families and carers", 3, ["carers", "family"]), a("support", "Support and charities", 2, ["support"])],
  },
  sources: [source(NHS, "Schizophrenia"), RETHINK, MIND],
  askDoctor: ["What is my care plan, and who do I contact in a crisis?", "What side effects should I watch for?", "Can my family be involved in my care?", "How often will my physical health be checked?"],
  related: [{ groupId: "bipolar-psychosis", conditionId: "psychosis" }, { groupId: "bipolar-psychosis", conditionId: "bipolar" }, { groupId: "depression", conditionId: "depression" }],
});

export const personalityDisorder = page({
  id: "personality-disorder", prefix: "persd-", title: "Personality disorder (BPD)",
  summary: "Long-standing patterns of thinking, feeling and relating to others that cause distress, such as intense emotions, fear of abandonment and difficult relationships. Borderline personality disorder is the most common. Specialist talking therapies help many people.",
  keywords: ["personality disorder", "bpd", "eupd", "borderline", "emotions"],
  lists: {
    understand: [a("what-it-is", "What a personality disorder is", 3, ["patterns", "emotions"], { blurb: "Patterns that cause distress, not a flaw in who you are.", diagram: true }), a("bpd", "Borderline personality disorder", 3, ["bpd", "eupd"]), a("causes", "Why it happens", 2, ["causes", "trauma"]), a("diagnosis", "Diagnosis and the name", 2, ["diagnosis", "stigma"])],
    recover: [a("therapy", "DBT, MBT and other therapies", 4, ["dbt", "mbt", "therapy"]), a("medicines", "Medicines", 2, ["medicines"]), a("crisis-plan", "A crisis plan", 3, ["crisis", "plan"]), a("emotions", "Managing intense emotions", 3, ["emotions", "skills"])],
    liveWell: [a("relationships", "Relationships", 3, ["relationships"]), a("self-harm", "Self-harm and urges", 3, ["self-harm", "urges"]), a("carers", "For family and friends", 3, ["carers", "family"]), a("support", "Support and charities", 2, ["support"])],
  },
  sources: [source(NHS, "Borderline personality disorder"), MIND, RETHINK],
  askDoctor: ["Can I be referred for DBT or another specialist therapy?", "What is my crisis plan?", "How long is the wait for therapy?", "Is there support for my family?"],
  related: [{ groupId: "depression", conditionId: "self-harm" }, { groupId: "anxiety", conditionId: "ptsd" }, { groupId: "depression", conditionId: "depression" }],
});

export const burnout = page({
  id: "burnout", prefix: "burn-", title: "Burnout",
  summary: "Exhaustion that builds when stress goes on too long, often at work or while caring, leaving people drained, detached and less able to cope. It is not a medical diagnosis, but it is real, and rest, boundaries and support help recovery.",
  keywords: ["burnout", "exhausted", "work stress", "overwhelmed", "drained"],
  lists: {
    understand: [a("what-it-is", "What burnout is", 3, ["exhaustion", "stress"], { blurb: "Long stress, and the tank running dry.", diagram: true }), a("signs", "Signs of burnout", 3, ["signs", "tired", "detached"]), a("causes", "What leads to it", 3, ["causes", "workload"]), a("or-depression", "Burnout or depression?", 2, ["depression", "difference"])],
    recover: [a("rest", "Rest and recovery", 3, ["rest", "recovery"]), a("gp", "Talking to a GP and time off", 3, ["gp", "fit note"]), a("therapy", "Talking therapies", 3, ["therapy", "cbt"]), a("boundaries", "Boundaries and saying no", 3, ["boundaries"])],
    liveWell: [a("work", "Going back to work", 3, ["work", "return"]), a("daily-habits", "Sleep, food and movement", 3, ["sleep", "exercise"]), a("employer", "What employers can do", 2, ["employer", "adjustments"]), a("preventing", "Stopping it coming back", 2, ["prevention"])],
  },
  sources: [source(NHS, "Stress"), MIND],
  askDoctor: ["Could this be depression rather than burnout?", "Do I need time off work, and a fit note?", "Can I be referred for talking therapy?", "Could anything physical be adding to my tiredness?"],
  related: [{ groupId: "stress-grief", conditionId: "stress" }, { groupId: "depression", conditionId: "depression" }, { groupId: "stress-grief", conditionId: "carer-stress" }],
});

export const carerStress = page({
  id: "carer-stress", prefix: "cstress-", title: "Carer stress",
  summary: "The strain of looking after someone who is ill, disabled or older can affect sleep, mood, health and money. Carers have rights to an assessment and support, and looking after yourself helps the person you care for too.",
  keywords: ["carer", "caring", "carer stress", "carer's assessment", "respite"],
  lists: {
    understand: [a("what-it-is", "Carer stress, and why it builds", 3, ["stress", "caring"], { blurb: "The weight of caring, and why it matters.", diagram: true }), a("signs", "Signs you are struggling", 3, ["signs", "tired"]), a("rights", "Your rights as a carer", 3, ["rights", "law"]), a("assessment", "The carer's assessment", 3, ["carer's assessment"])],
    recover: [a("breaks", "Breaks and respite", 3, ["respite", "breaks"]), a("money", "Carer's Allowance and money help", 3, ["carer's allowance", "benefits"]), a("gp", "Telling your GP you are a carer", 2, ["gp", "register"]), a("talking", "Talking therapies and support groups", 3, ["therapy", "support groups"])],
    liveWell: [a("health", "Looking after your own health", 3, ["health", "sleep"]), a("work", "Work and caring", 3, ["work", "flexible"]), a("emergency", "An emergency plan", 2, ["emergency", "plan"]), a("feelings", "Guilt, anger and other feelings", 3, ["guilt", "feelings"])],
  },
  sources: [source(NHS, "Carers' breaks and respite care"), CARERS_UK],
  askDoctor: ["Can you register me as a carer?", "How do I get a carer's assessment?", "Can I be referred for support for my own mood?", "What help is there for breaks?"],
  related: [{ groupId: "stress-grief", conditionId: "stress" }, { groupId: "stress-grief", conditionId: "burnout" }, { groupId: "depression", conditionId: "depression" }],
});

export const anger = page({
  id: "anger", prefix: "anger-", title: "Anger",
  summary: "Anger is a normal emotion, but when it is frequent, intense or hard to control it can harm relationships, work and health. Noticing the early signs, calming the body and talking therapies help people manage it.",
  keywords: ["anger", "temper", "irritable", "rage", "frustration"],
  lists: {
    understand: [a("what-it-is", "When anger becomes a problem", 3, ["anger", "emotion"], { blurb: "A normal feeling, and when it takes over.", diagram: true }), a("body", "What anger does in the body", 3, ["body", "adrenaline"]), a("causes", "What lies underneath", 3, ["causes", "stress", "hurt"]), a("illness", "Anger after illness or injury", 3, ["illness", "stroke", "brain injury"])],
    recover: [a("in-the-moment", "Calming down in the moment", 3, ["calming", "breathing"]), a("talking", "Anger management and therapy", 3, ["anger management", "cbt"]), a("triggers", "Knowing your triggers", 3, ["triggers"]), a("gp", "When to see a GP", 2, ["gp"])],
    liveWell: [a("relationships", "Relationships and repair", 3, ["relationships"]), a("lifestyle", "Sleep, alcohol and stress", 3, ["sleep", "alcohol"]), a("safety", "If anger turns to harm", 2, ["safety", "domestic abuse"]), a("support", "Support and courses", 2, ["support", "courses"])],
  },
  sources: [source(NHS, "Get help with anger"), MIND],
  askDoctor: ["Could something else be making me irritable?", "Is there an anger management course near me?", "Can I be referred for therapy?", "Could my medicines be affecting my mood?"],
  related: [{ groupId: "stress-grief", conditionId: "stress" }, { groupId: "depression", conditionId: "depression" }, { groupId: "anxiety", conditionId: "ptsd" }],
});

export const drugUse = page({
  id: "drug-use", prefix: "drug-", title: "Drug use",
  summary: "Using drugs, including prescription medicines not as prescribed, can affect mood, sleep, health and daily life, and can become hard to stop. Free, confidential help is available, and cutting down safely is possible with support.",
  keywords: ["drugs", "drug use", "addiction", "cannabis", "cocaine", "painkillers"],
  lists: {
    understand: [a("what-it-is", "When drug use becomes a problem", 3, ["addiction", "dependence"], { blurb: "Use, misuse and dependence.", diagram: true }), a("mental-health", "Drugs and mental health", 3, ["mental health", "mood"]), a("prescription", "Prescription and over-the-counter medicines", 3, ["painkillers", "sleeping tablets"]), a("signs", "Signs of a problem", 2, ["signs"])],
    recover: [a("getting-help", "Getting free help", 3, ["help", "services"]), a("stopping-safely", "Stopping safely", 3, ["withdrawal", "stopping"]), a("treatments", "Talking therapies and medicines", 3, ["therapy", "treatment"]), a("emergency", "In an emergency", 2, ["overdose", "999"])],
    liveWell: [a("relapse", "Relapse and getting back on track", 3, ["relapse"]), a("family", "For family and friends", 3, ["family", "carers"]), a("harm-reduction", "Reducing harm", 3, ["harm reduction", "safety"]), a("support", "Support groups", 2, ["support", "groups"])],
  },
  sources: [source(NHS, "Drug addiction: getting help"), FRANK],
  askDoctor: ["Where can I get help with my drug use?", "Is it safe for me to stop suddenly?", "Could my prescribed medicines be part of the problem?", "Is there support for my family?"],
  related: [{ groupId: "alcohol", conditionId: "alcohol" }, { groupId: "alcohol", conditionId: "gambling" }, { groupId: "depression", conditionId: "depression" }],
});

export const gambling = page({
  id: "gambling", prefix: "gamb-", title: "Gambling",
  summary: "When gambling becomes hard to control and starts to harm money, relationships, work or mood. It is a recognised condition, and there is free, confidential help, including NHS gambling clinics and tools that block gambling.",
  keywords: ["gambling", "betting", "gambling addiction", "debt", "slots"],
  lists: {
    understand: [a("what-it-is", "When gambling becomes a problem", 3, ["addiction", "harm"], { blurb: "Chasing losses, and the cycle behind it.", diagram: true }), a("signs", "Signs of a gambling problem", 3, ["signs"]), a("mental-health", "Gambling, mood and anxiety", 3, ["mood", "anxiety"]), a("affected-others", "How it affects others", 3, ["family", "affected others"])],
    recover: [a("getting-help", "Free help and NHS clinics", 3, ["help", "nhs clinics"]), a("blocking", "Blocking and self-exclusion", 3, ["self-exclusion", "blocking"]), a("therapy", "CBT and other therapies", 3, ["cbt", "therapy"]), a("money", "Money and debt help", 3, ["debt", "money"])],
    liveWell: [a("urges", "Coping with urges", 3, ["urges", "triggers"]), a("relapse", "Slips and relapse", 2, ["relapse"]), a("family", "For family and friends", 3, ["family"]), a("crisis", "If you feel you cannot cope", 2, ["crisis", "samaritans"])],
  },
  sources: [source(NHS, "Help for problems with gambling"), SAMARITANS],
  askDoctor: ["Can you refer me to an NHS gambling clinic?", "Is there help for my debt?", "Could my mood be linked to my gambling?", "Is there support for my partner?"],
  related: [{ groupId: "alcohol", conditionId: "drug-use" }, { groupId: "depression", conditionId: "depression" }, { groupId: "anxiety", conditionId: "anxiety" }],
});

export const quittingSmoking = page({
  id: "quitting-smoking", prefix: "smoke-", title: "Quitting smoking",
  summary: "Stopping smoking is one of the best things anyone can do for their health, and it can help mood and anxiety too. Free NHS stop smoking services, nicotine replacement, vapes and medicines make quitting much more likely to work.",
  keywords: ["stop smoking", "quit smoking", "nicotine", "vaping", "cigarettes"],
  lists: {
    understand: [a("why-quit", "What quitting does for your body", 3, ["benefits", "health"], { blurb: "What changes, from hours to years.", diagram: true }), a("nicotine", "Nicotine, cravings and withdrawal", 3, ["nicotine", "withdrawal"]), a("mental-health", "Smoking and mental health", 3, ["mental health", "anxiety"]), a("myths", "Common worries about quitting", 2, ["myths", "weight"])],
    recover: [a("services", "Free NHS stop smoking services", 3, ["stop smoking service"]), a("nrt", "Nicotine replacement", 3, ["nrt", "patches", "gum"]), a("vaping", "Vaping to quit", 3, ["vaping", "e-cigarettes"]), a("medicines", "Stop smoking medicines", 3, ["varenicline", "medicines"])],
    liveWell: [a("cravings", "Getting through cravings", 3, ["cravings"]), a("plan", "Making a quit plan", 2, ["plan", "quit date"]), a("slips", "Slips and trying again", 2, ["slips", "relapse"]), a("others", "Smoke-free homes and family", 2, ["family", "second-hand smoke"])],
  },
  sources: [source(NHS, "Quit smoking")],
  askDoctor: ["Can you refer me to a stop smoking service?", "Which treatment would suit me best?", "Will quitting affect my medicines?", "Is vaping a good option for me?"],
  related: [{ groupId: "alcohol", conditionId: "alcohol" }, { groupId: "long-term-lung", conditionId: "copd" }, { groupId: "heart-attack", conditionId: "coronary-heart-disease" }],
});

export const bingeEating = page({
  id: "binge-eating", prefix: "bed-", title: "Binge eating disorder",
  summary: "Regularly eating very large amounts of food in a short time while feeling out of control, often followed by shame or distress. It is a recognised eating disorder, not a lack of willpower, and specialist talking therapy helps.",
  keywords: ["binge eating", "binge eating disorder", "eating disorder", "out of control eating"],
  lists: {
    understand: [a("what-it-is", "What binge eating disorder is", 3, ["binge", "eating disorder"], { blurb: "An illness, not a lack of willpower.", diagram: true }), a("signs", "Signs and feelings", 3, ["signs", "shame"]), a("causes", "Why it happens", 2, ["causes"]), a("getting-help", "Talking to a GP", 2, ["gp", "help"])],
    recover: [a("guided-self-help", "Guided self-help", 3, ["self-help"]), a("cbt", "CBT for binge eating", 3, ["cbt", "therapy"]), a("regular-eating", "Regular eating", 3, ["regular eating", "meals"]), a("medicines", "Medicines", 2, ["medicines"])],
    liveWell: [a("feelings", "Feelings, stress and triggers", 3, ["triggers", "emotions"]), a("body-image", "Body image and stigma", 3, ["body image", "stigma"]), a("family", "For family and friends", 2, ["family"]), a("support", "Beat and other support", 2, ["support", "beat"])],
  },
  sources: [source(NHS, "Binge eating disorder"), BEAT],
  askDoctor: ["Could this be binge eating disorder?", "Can I be referred for specialist help?", "What can I do while I wait?", "Is there support for my family?"],
  related: [{ groupId: "eating-disorders", conditionId: "eating-disorders" }, { groupId: "depression", conditionId: "depression" }, { groupId: "anxiety", conditionId: "anxiety" }],
});

export const arfid = page({
  id: "arfid", prefix: "arfid-", title: "ARFID (avoidant eating)",
  summary: "Avoidant/restrictive food intake disorder: avoiding or restricting food because of its texture or smell, fear of choking or being sick, or little interest in eating, not because of body image. It affects adults as well as children, and specialist help works.",
  keywords: ["arfid", "avoidant eating", "restrictive eating", "picky eating", "fear of choking"],
  lists: {
    understand: [a("what-it-is", "What ARFID is", 3, ["arfid", "eating"], { blurb: "Avoidance, not body image.", diagram: true }), a("types", "Sensory, fear and low interest", 3, ["sensory", "fear", "interest"]), a("signs", "Signs in adults", 2, ["signs", "adults"]), a("health", "Effects on health", 3, ["nutrition", "weight"])],
    recover: [a("getting-help", "Getting help", 3, ["gp", "referral"]), a("therapy", "CBT for ARFID", 3, ["cbt", "therapy"]), a("dietitian", "Working with a dietitian", 3, ["dietitian", "nutrition"]), a("new-foods", "Trying new foods slowly", 3, ["new foods", "exposure"])],
    liveWell: [a("social", "Eating with others", 3, ["social", "eating out"]), a("autism", "ARFID, autism and ADHD", 2, ["autism", "adhd"]), a("family", "For family and friends", 2, ["family"]), a("support", "Support and charities", 2, ["support", "beat"])],
  },
  sources: [source(NHS, "Eating disorders"), BEAT],
  askDoctor: ["Could my eating be ARFID?", "Can I be referred to an eating disorder service?", "Should I see a dietitian?", "Could anything physical be adding to it?"],
  related: [{ groupId: "eating-disorders", conditionId: "eating-disorders" }, { groupId: "adhd-autism", conditionId: "autism" }, { groupId: "anxiety", conditionId: "anxiety" }],
});

export const adhd = page({
  id: "adhd", prefix: "adhd-", title: "ADHD in adults",
  summary: "Attention deficit hyperactivity disorder affects attention, restlessness and impulsiveness, and often carries on into adult life. Many adults are diagnosed later. Medicines, coaching, therapy and changes at work and home can all help.",
  keywords: ["adhd", "attention", "focus", "hyperactivity", "impulsive", "adult adhd"],
  lists: {
    understand: [a("what-it-is", "What ADHD is", 3, ["attention", "brain"], { blurb: "Attention, restlessness and impulsiveness.", diagram: true }), a("adults", "ADHD in adults", 3, ["adults", "symptoms"]), a("assessment", "Getting assessed", 3, ["assessment", "diagnosis"]), a("other-conditions", "ADHD alongside other conditions", 3, ["anxiety", "depression", "autism"])],
    recover: [a("medicines", "ADHD medicines", 4, ["methylphenidate", "medicines"]), a("therapy", "CBT and coaching", 3, ["cbt", "coaching"]), a("organising", "Tools for organising life", 3, ["organising", "planning"]), a("health-checks", "Health checks on medicine", 2, ["blood pressure", "checks"])],
    liveWell: [a("work", "Work and reasonable adjustments", 3, ["work", "adjustments"]), a("relationships", "Relationships", 3, ["relationships"]), a("driving", "Driving and ADHD", 2, ["driving", "dvla"]), a("support", "Support and charities", 2, ["support"])],
  },
  sources: [source(NHS, "ADHD in adults"), ADHD_UK],
  askDoctor: ["Can I be referred for an ADHD assessment?", "How long is the wait?", "What checks do I need before and during medicine?", "Is there support while I wait?"],
  related: [{ groupId: "adhd-autism", conditionId: "autism" }, { groupId: "anxiety", conditionId: "anxiety" }, { groupId: "depression", conditionId: "depression" }],
});

export const autism = page({
  id: "autism", prefix: "aut-", title: "Autism in adults",
  summary: "Autism is a lifelong difference in how people communicate, experience the world and interact with others. It is not an illness. Many adults are diagnosed later in life, and understanding, adjustments and support can make everyday life easier.",
  keywords: ["autism", "autistic", "asd", "neurodivergent", "adult diagnosis"],
  lists: {
    understand: [a("what-it-is", "What autism is", 3, ["autism", "difference"], { blurb: "A different way of experiencing the world.", diagram: true }), a("signs", "Signs of autism in adults", 3, ["signs", "adults"]), a("diagnosis", "Getting an autism assessment", 3, ["assessment", "diagnosis"]), a("masking", "Masking and burnout", 3, ["masking", "autistic burnout"])],
    recover: [a("after-diagnosis", "After a diagnosis", 3, ["after diagnosis", "support"]), a("sensory", "Sensory needs", 3, ["sensory", "noise"]), a("mental-health", "Anxiety, depression and therapy", 3, ["anxiety", "therapy"]), a("healthcare", "Getting healthcare that works for you", 3, ["gp", "adjustments"])],
    liveWell: [a("work", "Work and reasonable adjustments", 3, ["work", "adjustments"]), a("relationships", "Relationships and social life", 3, ["relationships", "social"]), a("routines", "Routines and change", 2, ["routines", "change"]), a("support", "Support and the community", 2, ["support", "community"])],
  },
  sources: [source(NHS, "Autism"), NAS],
  askDoctor: ["Can I be referred for an autism assessment?", "What support is there after a diagnosis?", "Can you note my sensory needs on my record?", "Can I be referred for help with anxiety?"],
  related: [{ groupId: "adhd-autism", conditionId: "adhd" }, { groupId: "anxiety", conditionId: "social-anxiety" }, { groupId: "eating-disorders", conditionId: "arfid" }],
});
