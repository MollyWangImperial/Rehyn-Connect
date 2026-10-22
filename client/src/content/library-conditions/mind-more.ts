import type { LibraryCondition } from "../library";
import { AGE_UK, article, BEAT, BIPOLAR_UK, CRUSE, DRINKAWARE, MIND, NHS, OCD_UK, PANDAS, piece, PTSD_UK, RETHINK, RLS_UK, SAMARITANS, SLEEP_CHARITY, source } from "../library-helpers";

// Mind & mood, the rest of the section: seasonal affective disorder and postnatal depression; OCD and PTSD;
// restless legs; bipolar disorder and psychosis; stress, grief and loneliness; alcohol; eating disorders. Same
// shape as the pages in cancer-mind-digestion.ts. Every page follows safe-messaging guidance.

export const sad: LibraryCondition = {
  id: "seasonal-affective-disorder",
  title: "Seasonal affective disorder (SAD)",
  summary: "Depression that comes and goes with the seasons, usually starting in autumn and lifting in spring. Low mood, tiredness and sleeping more are common. Daylight, routine, talking therapy and sometimes medicines or light therapy can all help.",
  facts: ["Usually appears in autumn or winter", "About 1 in 15 in the UK each winter", "Treatment can help manage symptoms"],
  keywords: ["sad", "seasonal affective disorder", "winter depression", "light therapy", "low mood"],
  content: {
    understand: [
      article("what-it-is", "What SAD is", 3, { learnId: "sad-what-it-is", blurb: "The seasons, light and mood.", extra: "With a diagram", keywords: ["seasons", "winter", "depression"] }),
      article("symptoms", "The signs, and how they differ from the winter blues", 3, { learnId: "sad-symptoms", keywords: ["symptoms", "tired", "sleep"] }),
      article("causes", "Why light and the seasons matter", 3, { learnId: "sad-causes", keywords: ["light", "body clock", "melatonin"] }),
      article("diagnosis", "Getting it recognised", 2, { learnId: "sad-diagnosis", keywords: ["gp", "diagnosis"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("daylight", "Daylight and getting outside", 3, { learnId: "sad-daylight", keywords: ["daylight", "outdoors", "walk"] }),
      article("light-therapy", "Light therapy boxes", 3, { learnId: "sad-light-therapy", keywords: ["light box", "light therapy"] }),
      article("talking", "Talking therapies", 3, { learnId: "sad-talking", keywords: ["cbt", "talking therapy"] }),
      article("medicines", "Antidepressants for SAD", 3, { learnId: "sad-medicines", keywords: ["antidepressants", "medicine"] }),
    ],
    liveWell: [
      article("routine", "A winter routine that helps", 3, { learnId: "sad-routine", keywords: ["routine", "sleep", "activity"] }),
      article("planning", "Planning ahead for autumn", 3, { learnId: "sad-planning", keywords: ["planning", "autumn"] }),
      article("food-activity", "Food, activity and energy", 3, { learnId: "sad-food-activity", keywords: ["food", "exercise", "energy"] }),
      article("help", "If it gets worse: where to get help", 2, { learnId: "sad-help", keywords: ["help", "crisis", "samaritans"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-nhs24-sad", title: "What is Seasonal Affective Disorder? (SAD)", kind: "video", duration: "3:14", url: "https://www.youtube.com/watch?v=hqkXDsPzOI8", extra: "What SAD is, with quick tips", publisher: "NHS 24", keywords: ["seasonal affective disorder", "winter blues", "symptoms"] },
      { id: "yt-nhs-talking-therapies-sad", title: "Treatment for depression and anxiety | NHS Talking Therapies", kind: "video", duration: "2:20", url: "https://www.youtube.com/watch?v=jLgv0E1k6hs", extra: "How to refer yourself for therapy", publisher: "NHS", keywords: ["talking therapies", "self-referral", "cbt"] },
      { id: "yt-emm-sleep-tips", title: "Simple Tips for Better Sleep from Every Mind Matters", kind: "video", duration: "2:28", url: "https://www.youtube.com/watch?v=OvQTjAlIvI8", extra: "Simple tips to sleep better", publisher: "Every Mind Matters", keywords: ["sleep", "routine", "winter"] },
    ],
    sources: [source(NHS, "Seasonal affective disorder (SAD)"), RETHINK, SAMARITANS],
    stories: [],
    askDoctor: ["Could my low mood each winter be SAD?", "Would talking therapy or an antidepressant help me?", "Is a light box worth trying?", "Who do I contact if things get worse quickly?"],
    related: [
      { groupId: "depression", conditionId: "depression" },
      { groupId: "sleep", conditionId: "insomnia" },
      { groupId: "gout-vitamins", conditionId: "vitamin-d-deficiency" },
    ],
  },
};

export const postnatalDepression: LibraryCondition = {
  id: "postnatal-depression",
  title: "Postnatal depression",
  summary: "Depression in the year after having a baby. It is common, it can affect partners too, and it is not a sign of being a bad parent. Support at home, talking therapy and sometimes medicine help most people recover.",
  facts: ["Affects 10 to 15 in 100 new mothers", "Baby blues usually pass within 2 weeks", "Usually better in 3 to 6 months"],
  keywords: ["postnatal depression", "pnd", "baby", "after birth", "perinatal", "new parent"],
  content: {
    understand: [
      article("what-it-is", "What postnatal depression is", 3, { learnId: "pnd-what-it-is", blurb: "Depression in the year after a baby.", extra: "With a diagram", keywords: ["after birth", "depression"] }),
      article("baby-blues", "Baby blues or postnatal depression?", 3, { learnId: "pnd-baby-blues", keywords: ["baby blues", "difference"] }),
      article("symptoms", "The signs, in yourself or a partner", 3, { learnId: "pnd-symptoms", keywords: ["signs", "symptoms", "partner"] }),
      article("causes", "Why it happens, and who is more likely to get it", 3, { learnId: "pnd-causes", keywords: ["causes", "risk"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("getting-help", "Telling your health visitor, midwife or GP", 3, { learnId: "pnd-getting-help", keywords: ["health visitor", "gp", "help"] }),
      article("talking", "Talking therapies and support groups", 3, { learnId: "pnd-talking", keywords: ["therapy", "support group"] }),
      article("medicines", "Antidepressants and breastfeeding", 3, { learnId: "pnd-medicines", keywords: ["antidepressants", "breastfeeding"] }),
      article("self-care", "Rest, food and small breaks", 3, { learnId: "pnd-self-care", keywords: ["rest", "self-care", "sleep"] }),
    ],
    liveWell: [
      article("partners", "Partners, dads and other parents", 3, { learnId: "pnd-partners", keywords: ["partner", "dads", "parents"] }),
      article("bonding", "Bonding with your baby", 3, { learnId: "pnd-bonding", keywords: ["bonding", "baby"] }),
      article("urgent", "When to get help straight away", 2, { learnId: "pnd-urgent", keywords: ["urgent", "psychosis", "crisis"] }),
      article("next-pregnancy", "A future pregnancy", 2, { learnId: "pnd-next-pregnancy", keywords: ["pregnancy", "planning"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-nhs-pnd-know", title: "How do I know if I have postnatal depression? | NHS", kind: "video", duration: "3:28", url: "https://www.youtube.com/watch?v=KBlVBOP7TGc", extra: "Three mothers describe their symptoms", publisher: "NHS", keywords: ["symptoms", "mothers", "postnatal depression"] },
      { id: "yt-hme-blues-support", title: "From Baby Blues to Postnatal Anxiety: When to Seek Support", kind: "video", duration: "1:29", url: "https://www.youtube.com/watch?v=I9xXIUsuLyM", extra: "A therapist on when to seek support", publisher: "Hertfordshire & Mid Essex Talking Therapies", keywords: ["baby blues", "talking therapies", "cbt"] },
      { id: "yt-swlstg-new-parents", title: "Mental health support for new and existing parents | NHS Talking Therapies", kind: "video", duration: "1:26", url: "https://www.youtube.com/watch?v=9Qic7KBvjCc", extra: "Priority talking therapy for new parents", publisher: "SWLSTG NHS Trust", keywords: ["talking therapies", "self-referral", "new parents"] },
    ],
    sources: [source(NHS, "Postnatal depression"), PANDAS, SAMARITANS],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-leanne-pnd", person: "Leanne", title: "Postnatal Depression - Leanne's Story", channel: "NHS England", url: "https://www.youtube.com/watch?v=DRJF2ddmHWU", duration: "1:51", about: "Leanne's story of postnatal depression, from an NHS England series made with women who have experienced perinatal mental health conditions." },
      { id: "yt-tara-bonding", person: "Tara", title: "Maternal Bonding Difficulties - Tara's Story", channel: "NHS England", url: "https://www.youtube.com/watch?v=hhCeMZX3ghM", duration: "2:28", about: "Tara's story of bonding difficulties following birth, from the same NHS England series made with women with lived experience." },
      { id: "yt-joanne-perinatal", person: "Joanne", title: "Helping new mums like Joanne deal with their mental health problems.", channel: "NHS England", url: "https://www.youtube.com/watch?v=2dUElzBlWvg", duration: "2:11", about: "Joanne, a service user, describes the positive impact of perinatal mental health services provided by Devon Partnership NHS Foundation Trust." },
    ],
    askDoctor: ["Could what I am feeling be postnatal depression?", "Can I be referred for talking therapy or a perinatal mental health team?", "Which medicines are safe while breastfeeding?", "Who do I contact if things get worse quickly?"],
    related: [
      { groupId: "depression", conditionId: "depression" },
      { groupId: "anxiety", conditionId: "anxiety" },
      { groupId: "diabetes", conditionId: "gestational-diabetes" },
    ],
  },
};

export const ocd: LibraryCondition = {
  id: "ocd",
  title: "Obsessive compulsive disorder (OCD)",
  summary: "Unwanted, distressing thoughts (obsessions) and repeated actions or rituals (compulsions) done to ease the anxiety they bring. OCD is common and treatable: a type of CBT called exposure and response prevention, and some medicines, help most people.",
  facts: ["Affects around 1 in 50 people", "Can start as early as age 6", "CBT usually works quite quickly"],
  keywords: ["ocd", "obsessive compulsive disorder", "intrusive thoughts", "compulsions", "rituals", "checking"],
  content: {
    understand: [
      article("what-it-is", "What OCD is", 3, { learnId: "ocd-what-it-is", blurb: "Obsessions, compulsions and the cycle that links them.", extra: "With a diagram", keywords: ["obsessions", "compulsions"] }),
      article("obsessions", "Intrusive thoughts: what they are and are not", 3, { learnId: "ocd-obsessions", keywords: ["intrusive thoughts", "obsessions"] }),
      article("compulsions", "Compulsions and the cycle", 3, { learnId: "ocd-compulsions", keywords: ["compulsions", "cycle", "checking"] }),
      article("types", "The many forms OCD takes", 3, { learnId: "ocd-types", keywords: ["types", "contamination", "checking"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("cbt-erp", "CBT with exposure and response prevention", 4, { learnId: "ocd-cbt-erp", keywords: ["cbt", "erp", "exposure"] }),
      article("medicines", "Medicines for OCD", 3, { learnId: "ocd-medicines", keywords: ["ssri", "medicine"] }),
      article("getting-help", "Getting help and referring yourself", 3, { learnId: "ocd-getting-help", keywords: ["referral", "talking therapies"] }),
      article("self-help", "Self-help that supports treatment", 3, { learnId: "ocd-self-help", keywords: ["self-help", "books"] }),
    ],
    liveWell: [
      article("family", "Family and friends: helping without joining in", 3, { learnId: "ocd-family", keywords: ["family", "reassurance"] }),
      article("work", "OCD at work or study", 3, { learnId: "ocd-work", keywords: ["work", "study"] }),
      article("setbacks", "Setbacks and staying well", 3, { learnId: "ocd-setbacks", keywords: ["setbacks", "relapse"] }),
      article("support", "Support groups and charities", 2, { learnId: "ocd-support", keywords: ["support", "charity"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-maudsley-what-is-ocd", title: "What is OCD?", kind: "video", duration: "4:46", url: "https://www.youtube.com/watch?v=-1w9zCNhVBo", extra: "What OCD is, how common, causes", publisher: "Maudsley NHS", keywords: ["what is ocd", "how common", "causes"] },
      { id: "yt-sussex-clara-strauss-ocd", title: "Clara Strauss: What is Obsessive Compulsive Disorder OCD", kind: "video", duration: "2:20", url: "https://www.youtube.com/watch?v=2gIPiZfKKyY", extra: "A clinical psychologist explains OCD", publisher: "Sussex Partnership NHS Foundation Trust", keywords: ["what is ocd", "psychologist", "explained"] },
      { id: "yt-ocduk-understanding-ocd", title: "Understanding Obsessive-Compulsive Disorder (OCD)", kind: "video", duration: "8:29", url: "https://www.youtube.com/watch?v=_YOcjtEzgHs", extra: "Awareness film on problems OCD brings", publisher: "OCD-UK", keywords: ["awareness", "living with ocd", "ocd-uk"] },
    ],
    sources: [source(NHS, "Obsessive compulsive disorder (OCD)"), OCD_UK, MIND],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-jeremy-ocd", person: "Jeremy", title: "Jeremy’s experience of obsessive compulsive disorder (OCD) | NHS Talking Therapies", channel: "NHS", url: "https://www.youtube.com/watch?v=DVYxxk0Q9dg", duration: "0:55", about: "Jeremy had persistent repetitive behaviours and intrusive thoughts throughout adulthood, until NHS Talking Therapies helped him understand his thought patterns and learn to manage them." },
      { id: "yt-yasmin-ocd", person: "Yasmin", title: "My experience of having OCD", channel: "Our Mental Health Space - Sussex Partnership NHS Foundation Trust", url: "https://www.youtube.com/watch?v=DemQn2Bxqbc", duration: "2:07", about: "Yasmin shares what it was like to have OCD as a child, and how CAMHS helped her to overcome these difficulties into adulthood." },
      { id: "yt-sam-ocd", person: "Sam", title: "OCD Week of Action 2023: Sam's Story", channel: "OCD Action", url: "https://www.youtube.com/watch?v=0k35h4K7JWA", duration: "4:38", about: "Sam waited 16 years before he could access the recommended therapy for his OCD, CBT with ERP, and OCD Action shares his story to call for fair access to treatment." },
    ],
    askDoctor: ["Could this be OCD?", "Can I be referred for CBT with exposure and response prevention?", "Would a medicine help me?", "What can my family do to help?"],
    related: [
      { groupId: "anxiety", conditionId: "anxiety" },
      { groupId: "depression", conditionId: "depression" },
      { groupId: "anxiety", conditionId: "ptsd" },
    ],
  },
};

export const ptsd: LibraryCondition = {
  id: "ptsd",
  title: "Post-traumatic stress disorder (PTSD)",
  summary: "Ongoing distress after a frightening or traumatic event, including a serious illness, accident or time in intensive care. Flashbacks, nightmares, feeling on edge and avoiding reminders are common. Trauma-focused therapies help many people.",
  facts: ["About 1 in 20 adults screen positive", "Can start months or years later", "Usually gets better for most people"],
  keywords: ["ptsd", "trauma", "flashbacks", "nightmares", "post-traumatic stress", "complex ptsd"],
  content: {
    understand: [
      article("what-it-is", "What PTSD is", 3, { learnId: "ptsd-what-it-is", blurb: "Trauma, memory and a body stuck on alert.", extra: "With a diagram", keywords: ["trauma", "stress"] }),
      article("symptoms", "Flashbacks, nightmares and feeling on edge", 3, { learnId: "ptsd-symptoms", keywords: ["flashbacks", "nightmares", "hyperarousal"] }),
      article("causes", "Events that can lead to it, including illness", 3, { learnId: "ptsd-causes", keywords: ["causes", "illness", "intensive care"] }),
      article("complex", "Complex PTSD", 3, { learnId: "ptsd-complex", keywords: ["complex ptsd", "cptsd"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("therapy", "Trauma-focused CBT and EMDR", 4, { learnId: "ptsd-therapy", keywords: ["cbt", "emdr", "therapy"] }),
      article("medicines", "Medicines for PTSD", 3, { learnId: "ptsd-medicines", keywords: ["medicine", "antidepressants"] }),
      article("getting-help", "Getting help and what to expect", 3, { learnId: "ptsd-getting-help", keywords: ["referral", "gp"] }),
      article("grounding", "Coping in the moment", 3, { learnId: "ptsd-grounding", keywords: ["coping", "breathing", "present"] }),
    ],
    liveWell: [
      article("sleep", "Sleep and nightmares", 3, { learnId: "ptsd-sleep", keywords: ["sleep", "nightmares"] }),
      article("relationships", "Relationships and the people around you", 3, { learnId: "ptsd-relationships", keywords: ["family", "partner"] }),
      article("triggers", "Reminders and triggers", 3, { learnId: "ptsd-triggers", keywords: ["triggers", "avoidance"] }),
      article("crisis", "If you are struggling to cope", 2, { learnId: "ptsd-crisis", keywords: ["crisis", "samaritans", "help"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-rethink-understanding-ptsd", title: "Understanding PTSD: What It Is, How It Happens & What To Do", kind: "video", duration: "1:23", url: "https://www.youtube.com/watch?v=odM8dvnWQ98", extra: "Why it happens, signs and support", publisher: "Rethink Mental Illness", keywords: ["what is ptsd", "symptoms", "support"] },
      { id: "yt-nhsinform-complex-ptsd", title: "Post-traumatic stress disorder (PTSD) - Complex PTSD (CPTSD)", kind: "video", duration: "3:49", url: "https://www.youtube.com/watch?v=vDIfED6I134", extra: "Complex PTSD symptoms and treatments", publisher: "NHS inform", keywords: ["complex ptsd", "cptsd", "treatment"] },
      { id: "yt-devon-emdr-talkworks", title: "EMDR Therapy at TALKWORKS", kind: "video", duration: "3:49", url: "https://www.youtube.com/watch?v=kmsxPgJyzrc", extra: "What EMDR is and how to access it", publisher: "Devon Partnership NHS Trust", keywords: ["emdr", "talking therapies", "treatment"] },
    ],
    sources: [source(NHS, "Post-traumatic stress disorder (PTSD)"), PTSD_UK, MIND, SAMARITANS],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-tori-cbt-ptsd", person: "Tori", title: "CBT for PTSD: A Patient Story", channel: "Solent NHS Trust", url: "https://www.youtube.com/watch?v=3H596qCRPxY", duration: "4:15", about: "Tori talks about her experience of cognitive behavioural therapy (CBT) for PTSD in the Solent NHS mental health recovery team." },
      { id: "yt-heather-emdr", person: "Heather", title: "A Journey through EMDR", channel: "Solent NHS Trust", url: "https://www.youtube.com/watch?v=JQ1vfanJgwA", duration: "6:04", about: "Heather tells her story of receiving eye movement desensitisation and reprocessing (EMDR) for past trauma from Solent NHS Trust." },
      { id: "yt-clarke-ptsd", person: "Clarke", title: "Clarke Carlisle talks about living with PTSD | NHS Talking Therapies", channel: "NHS", url: "https://www.youtube.com/watch?v=Op69m9DeYq4", duration: "0:42", about: "Former footballer Clarke Carlisle shares how, for over a decade, PTSD made him withdraw from the world and from his family, as part of the NHS Talking Therapies campaign." },
    ],
    askDoctor: ["Could what I am going through be PTSD?", "Can I be referred for trauma-focused therapy?", "Would a medicine help with sleep or nightmares?", "Who do I contact if I feel unable to cope?"],
    related: [
      { groupId: "anxiety", conditionId: "anxiety" },
      { groupId: "depression", conditionId: "depression" },
      { groupId: "sleep", conditionId: "insomnia" },
    ],
  },
};

export const restlessLegs: LibraryCondition = {
  id: "restless-legs",
  title: "Restless legs syndrome",
  summary: "An overwhelming urge to move the legs, often with uncomfortable feelings, that comes on at rest and in the evening and can badly disturb sleep. Treating a cause such as low iron, changing habits and sometimes medicines help.",
  facts: ["Affects as many as 1 in 10 people", "Women are twice as likely to get it", "Linked to iron and dopamine levels"],
  keywords: ["restless legs", "rls", "willis-ekbom", "legs", "night", "sleep"],
  content: {
    understand: [
      article("what-it-is", "What restless legs syndrome is", 3, { learnId: "rls-what-it-is", blurb: "An urge to move that comes at rest.", extra: "With a diagram", keywords: ["urge", "legs", "night"] }),
      article("causes", "Causes: iron, pregnancy, medicines and more", 3, { learnId: "rls-causes", keywords: ["iron", "pregnancy", "medicines"] }),
      article("sleep", "How it affects sleep", 3, { learnId: "rls-sleep", keywords: ["sleep", "tired"] }),
      article("diagnosis", "Getting it diagnosed", 2, { learnId: "rls-diagnosis", keywords: ["gp", "blood test"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("self-help", "Habits that can ease it", 3, { learnId: "rls-self-help", keywords: ["caffeine", "alcohol", "exercise"] }),
      article("iron", "Iron and blood tests", 3, { learnId: "rls-iron", keywords: ["iron", "ferritin"] }),
      article("medicines", "Medicines for restless legs", 3, { learnId: "rls-medicines", keywords: ["medicines", "dopamine"] }),
      article("in-the-moment", "Easing an attack", 2, { learnId: "rls-in-the-moment", keywords: ["massage", "stretching", "bath"] }),
    ],
    liveWell: [
      article("evenings", "Evenings, travel and long sitting", 3, { learnId: "rls-evenings", keywords: ["evenings", "travel", "sitting"] }),
      article("pregnancy", "Restless legs in pregnancy", 2, { learnId: "rls-pregnancy", keywords: ["pregnancy"] }),
      article("mood", "Tiredness, mood and coping", 3, { learnId: "rls-mood", keywords: ["mood", "tired"] }),
      article("support", "Support and charities", 2, { learnId: "rls-support", keywords: ["support", "charity"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-cleveland-rls-calm", title: "What Can You Do To Calm Restless Legs Syndrome?", kind: "video", duration: "2:16", url: "https://www.youtube.com/watch?v=kwMm_imqku8", extra: "Calming techniques, iron and triggers", publisher: "Cleveland Clinic", keywords: ["self-help", "iron", "triggers"] },
      { id: "yt-hopkins-rls-sleep", title: "Restless Legs Syndrome and Sleep - Diagnosis and Treatments", kind: "video", duration: "3:40", url: "https://www.youtube.com/watch?v=TYhgbE_84MA", extra: "Sleep specialists on symptoms and treatment", publisher: "Johns Hopkins Howard County Medical Center", keywords: ["sleep", "diagnosis", "treatment"] },
      { id: "yt-bbc-reel-rls", title: "What is restless legs syndrome and why does it matter? - BBC REEL", kind: "video", duration: "9:26", url: "https://www.youtube.com/watch?v=hnTKtp5PZGo", extra: "Why it is still poorly understood", publisher: "BBC Global", keywords: ["explained", "medicines", "awareness"] },
    ],
    sources: [source(NHS, "Restless legs syndrome"), RLS_UK, SLEEP_CHARITY],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-kate-rls", person: "Kate", title: "RLS-UK - Restless Legs Syndrome UK", channel: "EARLS European Alliance for Restless Legs Syndrome", url: "https://www.youtube.com/watch?v=XcnhHMbSHEo", duration: "6:39", about: "Kate talks about restless legs syndrome and how it affects her." },
      { id: "yt-imogen-rls", person: "Imogen", title: "RLS-UK: Imogen speaks about her experience of RLS", channel: "EARLS European Alliance for Restless Legs Syndrome", url: "https://www.youtube.com/watch?v=hqWgauZ7kGs", duration: "4:24", about: "Imogen speaks about her experience of restless legs syndrome, in a video made with RLS-UK." },
      { id: "yt-janice-rls", person: "Janice", title: "My RLS Journey: Janice's Story", channel: "RLS Foundation", url: "https://www.youtube.com/watch?v=T3a9hYLNcwk", duration: "3:24", about: "Janice discusses her journey to a restless legs diagnosis, and how she offers hope to others struggling with this often misunderstood disease." },
    ],
    askDoctor: ["Should my iron levels be checked?", "Could any of my medicines be causing this?", "Would a medicine help, and what are the side effects?", "What can I try at home first?"],
    related: [
      { groupId: "sleep", conditionId: "insomnia" },
      { groupId: "kidneys", conditionId: "chronic-kidney-disease" },
      { groupId: "parkinsons", conditionId: "parkinsons-disease" },
    ],
  },
};

export const bipolar: LibraryCondition = {
  id: "bipolar",
  title: "Bipolar disorder",
  summary: "A condition of mood that swings between episodes of depression and episodes of high mood (mania or hypomania), with periods of more even mood between. Mood stabilisers, talking therapy and knowing your early warning signs help many people live well.",
  facts: ["About 1 in 50 adults, at some point", "Usually starts between 15 and 25", "Over a million people in the UK"],
  keywords: ["bipolar", "bipolar disorder", "mania", "hypomania", "mood swings", "lithium"],
  content: {
    understand: [
      article("what-it-is", "What bipolar disorder is", 3, { learnId: "bpd-what-it-is", blurb: "Episodes of high and low mood, and the time between.", extra: "With a diagram", keywords: ["mood", "episodes"] }),
      article("mania", "Mania and hypomania", 3, { learnId: "bpd-mania", keywords: ["mania", "hypomania", "high"] }),
      article("depression", "The depressive episodes", 3, { learnId: "bpd-depression", keywords: ["depression", "low"] }),
      article("types", "Bipolar I, bipolar II and cyclothymia", 3, { learnId: "bpd-types", keywords: ["types", "bipolar i", "bipolar ii"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("mood-stabilisers", "Lithium and other mood stabilisers", 4, { learnId: "bpd-mood-stabilisers", keywords: ["lithium", "mood stabiliser"] }),
      article("other-medicines", "Other medicines", 3, { learnId: "bpd-other-medicines", keywords: ["antipsychotics", "medicine"] }),
      article("talking", "Talking therapies and psychoeducation", 3, { learnId: "bpd-talking", keywords: ["therapy", "cbt"] }),
      article("care-team", "Your care team and crisis plan", 3, { learnId: "bpd-care-team", keywords: ["care team", "crisis plan"] }),
    ],
    liveWell: [
      article("warning-signs", "Knowing your early warning signs", 3, { learnId: "bpd-warning-signs", keywords: ["warning signs", "relapse"] }),
      article("routine", "Sleep, routine and mood", 3, { learnId: "bpd-routine", keywords: ["sleep", "routine"] }),
      article("work-money", "Work and money", 3, { learnId: "bpd-work-money", keywords: ["work", "money"] }),
      article("family", "For family and friends", 3, { learnId: "bpd-family", keywords: ["family", "carer"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-rcpsych-bipolar", title: "Bipolar Disorder - subtitles", kind: "video", duration: "2:31", url: "https://www.youtube.com/watch?v=whiktKBQ9B8", extra: "What it's like to have bipolar", publisher: "The Royal College of Psychiatrists", keywords: ["what it is", "experience", "animation"] },
      { id: "yt-rethink-what-is-bipolar", title: "What is bipolar disorder?", kind: "video", duration: "2:11", url: "https://www.youtube.com/watch?v=iJ0s4IzXk0E", extra: "Diagnosis, causes and treatment", publisher: "Rethink Mental Illness", keywords: ["diagnosis", "causes", "treatment"] },
      { id: "yt-bipolaruk-self-management", title: "Top 5 Bipolar Self-Management Techniques", kind: "video", duration: "2:42", url: "https://www.youtube.com/watch?v=dNtR8N6PA1k", extra: "How people manage bipolar day to day", publisher: "Bipolar UK", keywords: ["self-management", "staying well", "techniques"] },
    ],
    sources: [source(NHS, "Bipolar disorder"), BIPOLAR_UK, MIND, SAMARITANS],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-nhs-rod-bipolar", person: "Rod", title: "Bipolar disorder: Rod's story | NHS", channel: "NHS", url: "https://www.youtube.com/watch?v=RaC9Zz_2JHM", duration: "3:40", about: "Rod, diagnosed with bipolar in 1987, describes how his symptoms got worse and led to his diagnosis, the treatments offered to him and how he copes today." },
      { id: "yt-rethink-vhea-bipolar", person: "Vhea", title: "\"You Are Not a Mere Statistic\" - Vhea's Journey with Bipolar Disorder", channel: "Rethink Mental Illness", url: "https://www.youtube.com/watch?v=WuPRl0b9owA", duration: "3:08", about: "Vhea was first diagnosed at 18 after symptoms of mania, and is now a qualified mental health nurse using her experience to support others." },
      { id: "yt-mind-scott-bipolar", person: "Scott", title: "Bipolar - learning to cope | Scott's Mental Health Story | Mind", channel: "Mind, the mental health charity", url: "https://www.youtube.com/watch?v=KCmbzH2YYOU", duration: "2:39", about: "Scott explains how he has learned to cope with his bipolar." },
    ],
    askDoctor: ["What kind of bipolar disorder do I have?", "What blood tests do I need on my medicine?", "What should go in my crisis plan?", "Who do I contact if I notice warning signs?"],
    related: [
      { groupId: "depression", conditionId: "depression" },
      { groupId: "bipolar-psychosis", conditionId: "psychosis" },
      { groupId: "sleep", conditionId: "insomnia" },
    ],
  },
};

export const psychosis: LibraryCondition = {
  id: "psychosis",
  title: "Psychosis",
  summary: "Losing touch with reality for a time, through hallucinations (seeing or hearing things others do not) or delusions (strong beliefs others do not share). It can have many causes, it is treatable, and early help from a specialist team makes a real difference.",
  facts: ["Early treatment can be more effective", "Often a full recovery with treatment", "Far more common than many people think"],
  keywords: ["psychosis", "hallucinations", "delusions", "hearing voices", "schizophrenia", "early intervention"],
  content: {
    understand: [
      article("what-it-is", "What psychosis is", 3, { learnId: "psy-what-it-is", blurb: "When reality is hard to tell apart for a while.", extra: "With a diagram", keywords: ["reality", "symptoms"] }),
      article("symptoms", "Hallucinations, delusions and muddled thinking", 3, { learnId: "psy-symptoms", keywords: ["hallucinations", "delusions"] }),
      article("causes", "Causes and conditions it can be part of", 3, { learnId: "psy-causes", keywords: ["causes", "schizophrenia", "bipolar"] }),
      article("early-signs", "Early signs, in yourself or someone else", 3, { learnId: "psy-early-signs", keywords: ["early signs", "warning"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("early-intervention", "Early intervention teams", 3, { learnId: "psy-early-intervention", keywords: ["early intervention", "team"] }),
      article("medicines", "Antipsychotic medicines", 4, { learnId: "psy-medicines", keywords: ["antipsychotics", "side effects"] }),
      article("talking", "Talking therapies and family work", 3, { learnId: "psy-talking", keywords: ["cbt", "family"] }),
      article("urgent", "Getting urgent help", 2, { learnId: "psy-urgent", keywords: ["urgent", "999", "crisis"] }),
    ],
    liveWell: [
      article("recovery", "Recovery and getting back to life", 3, { learnId: "psy-recovery", keywords: ["recovery", "work", "study"] }),
      article("substances", "Cannabis, alcohol and other drugs", 3, { learnId: "psy-substances", keywords: ["cannabis", "drugs", "alcohol"] }),
      article("physical-health", "Looking after your physical health", 3, { learnId: "psy-physical-health", keywords: ["physical health", "weight", "checks"] }),
      article("family", "For family and carers", 3, { learnId: "psy-family", keywords: ["family", "carer"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-rethink-what-is-psychosis", title: "What is psychosis?", kind: "video", duration: "2:41", url: "https://www.youtube.com/watch?v=UQq2j6tZdyg", extra: "When reality is perceived differently", publisher: "Rethink Mental Illness", keywords: ["psychosis", "symptoms", "explained"] },
      { id: "yt-myhealthlondon-eip", title: "What is an Early Intervention in Psychosis service?", kind: "video", duration: "3:43", url: "https://www.youtube.com/watch?v=8oWQWCc1uPs", extra: "What early intervention services offer", publisher: "MyHealthLondon", keywords: ["early intervention", "team", "nhs"] },
      { id: "yt-nsft-eip-family", title: "Family and Carers support within our Early Intervention in Psychosis Service", kind: "video", duration: "4:55", url: "https://www.youtube.com/watch?v=Qdh2vHlJiW4", extra: "Support for families and carers", publisher: "Norfolk and Suffolk NHS Foundation Trust", keywords: ["family", "carers", "early intervention"] },
    ],
    sources: [source(NHS, "Psychosis"), RETHINK, MIND, SAMARITANS],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-nhs-laura-psychosis", person: "Laura", title: "Mental Health: Laura's Story | NHS", channel: "NHS", url: "https://www.youtube.com/watch?v=rGq7kv3pKu0", duration: "1:56", about: "A real-life story from Laura, who experienced psychosis; the NHS notes her name has been changed for anonymity." },
      { id: "yt-rethink-danni", person: "Danni", title: "From Psychosis to Saving Lives - Danni's Story", channel: "Rethink Mental Illness", url: "https://www.youtube.com/watch?v=EMo2CxTRNW0", duration: "1:47", about: "Danni experienced a psychotic episode at 16, got support early, and now works for the NHS." },
      { id: "yt-solent-susie", person: "Susie", title: "A service user story of Early Intervention in Psychosis (EIP) Services", channel: "Solent NHS Trust", url: "https://www.youtube.com/watch?v=-kUfAtLwR8Q", duration: "4:37", about: "Susie tells her story of a first psychotic episode and her experiences of care from Solent NHS Trust's Early Intervention in Psychosis services." },
    ],
    askDoctor: ["Can I be referred to an early intervention team?", "What are the side effects of my medicine?", "What physical health checks do I need?", "Who do I contact if things get worse?"],
    related: [
      { groupId: "bipolar-psychosis", conditionId: "bipolar" },
      { groupId: "depression", conditionId: "depression" },
      { groupId: "alcohol", conditionId: "alcohol" },
    ],
  },
};

export const stress: LibraryCondition = {
  id: "stress",
  title: "Stress and burnout",
  summary: "Feeling under too much pressure, for too long. Stress is the body's response to pressure and can help in short bursts, but ongoing stress affects sleep, mood and health. Spotting the signs and making small changes helps, and support is there when it is too much.",
  facts: ["74 in 100 felt overwhelmed in a year", "Not an illness, but it can make you ill", "Self-refer to NHS talking therapies"],
  keywords: ["stress", "burnout", "pressure", "overwhelmed", "tension", "work stress"],
  content: {
    understand: [
      article("what-it-is", "What stress is", 3, { learnId: "str-what-it-is", blurb: "Pressure, the body's response, and when it builds up.", extra: "With a diagram", keywords: ["pressure", "body"] }),
      article("signs", "The signs in your body, mind and habits", 3, { learnId: "str-signs", keywords: ["signs", "sleep", "irritable"] }),
      article("causes", "What causes stress", 3, { learnId: "str-causes", keywords: ["work", "money", "illness", "caring"] }),
      article("burnout", "Burnout", 3, { learnId: "str-burnout", keywords: ["burnout", "exhausted"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("small-changes", "Small changes that help", 3, { learnId: "str-small-changes", keywords: ["changes", "breaks", "routine"] }),
      article("breathing", "Breathing and relaxation", 3, { learnId: "str-breathing", keywords: ["breathing", "relaxation"] }),
      article("talking", "Talking to someone, and therapy", 3, { learnId: "str-talking", keywords: ["talking", "therapy"] }),
      article("gp", "When to see a GP", 2, { learnId: "str-gp", keywords: ["gp", "help"] }),
    ],
    liveWell: [
      article("work", "Stress at work", 3, { learnId: "str-work", keywords: ["work", "employer"] }),
      article("caring", "Stress when you are a carer", 3, { learnId: "str-caring", keywords: ["carer", "caring"] }),
      article("sleep-activity", "Sleep, activity and alcohol", 3, { learnId: "str-sleep-activity", keywords: ["sleep", "exercise", "alcohol"] }),
      article("crisis", "If it feels too much", 2, { learnId: "str-crisis", keywords: ["crisis", "samaritans"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-nhs-stress", title: "Stress | NHS", kind: "video", duration: "3:14", url: "https://www.youtube.com/watch?v=jXT0YtAl4YM", extra: "What stress is, and when to get help", publisher: "NHS", keywords: ["stress", "symptoms", "gp"] },
      { id: "yt-emm-stress-things-you-can-do", title: "Stress - Things You Can Do", kind: "video", duration: "4:19", url: "https://www.youtube.com/watch?v=z7ATOc4ShOc", extra: "Tips to help relieve stress", publisher: "Every Mind Matters", keywords: ["self-help", "tips", "stress relief"] },
      { id: "yt-emm-take-control-of-stress", title: "Take Control of Stress", kind: "video", duration: "4:52", url: "https://www.youtube.com/watch?v=tJlcnyji9FY", extra: "Small steps to feel more in control", publisher: "Every Mind Matters", keywords: ["control", "small changes", "stress"] },
    ],
    sources: [source(NHS, "Stress"), MIND, SAMARITANS],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-bernadine-stress", person: "Bernadine", title: "Opening up about stress and anger - Bernadine", channel: "Mind, the mental health charity", url: "https://www.youtube.com/watch?v=jgiorDF-mxU", duration: "1:14", about: "Bernadine, 18, talks about how she opened up to her mum during her GCSEs, and how she found ways to deal with her stress and anger." },
      { id: "yt-joan-john-carers", person: "Joan and John", title: "Carers UK : Joan, John and James", channel: "Carers UK", url: "https://www.youtube.com/watch?v=WuqV3_91rdk", duration: "2:35", about: "Joan and John describe how caring for James, who has epilepsy and autism, has taken over their lives, and how they always make sure he is well looked after." },
      { id: "yt-kirk-work", person: "Kirk", title: "Kirk's Story | Mental Health at Work | Heads Together", channel: "Heads Together", url: "https://www.youtube.com/watch?v=AjLXO9woNaw", duration: "2:09", about: "When Kirk's daughter became ill, being able to talk at work, with support and understanding from his team, helped him through a very difficult time; he now encourages colleagues to talk and ask for help." },
    ],
    askDoctor: ["Could my symptoms be caused by stress?", "Can I be referred for talking therapy?", "Should I take time off work?", "Who do I contact if it feels too much?"],
    related: [
      { groupId: "anxiety", conditionId: "anxiety" },
      { groupId: "depression", conditionId: "depression" },
      { groupId: "sleep", conditionId: "insomnia" },
    ],
  },
};

export const grief: LibraryCondition = {
  id: "grief",
  title: "Grief and bereavement",
  summary: "The feelings that follow the death of someone close, and other big losses, including loss of health. Grief is not an illness and there is no right way to grieve, but support helps, and sometimes grief gets stuck and needs more help.",
  facts: ["Grief is not an illness", "No right or wrong way to feel", "Cruse helpline: 0808 808 1677"],
  keywords: ["grief", "bereavement", "loss", "death", "mourning", "loss of health"],
  content: {
    understand: [
      article("what-it-is", "What grief can feel like", 3, { learnId: "grief-what-it-is", blurb: "The feelings that follow a loss.", extra: "With a diagram", keywords: ["feelings", "loss"] }),
      article("no-right-way", "There is no right way to grieve", 3, { learnId: "grief-no-right-way", keywords: ["stages", "normal"] }),
      article("body", "Grief in the body", 2, { learnId: "grief-body", keywords: ["sleep", "tired", "appetite"] }),
      article("other-losses", "Grieving the loss of health or a way of life", 3, { learnId: "grief-other-losses", keywords: ["illness", "change", "loss"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("support", "Bereavement support and counselling", 3, { learnId: "grief-support", keywords: ["counselling", "support"] }),
      article("practical", "Practical things after a death", 3, { learnId: "grief-practical", keywords: ["practical", "paperwork"] }),
      article("looking-after", "Looking after yourself", 3, { learnId: "grief-looking-after", keywords: ["self-care", "sleep", "food"] }),
      article("stuck", "When grief does not ease", 3, { learnId: "grief-stuck", keywords: ["prolonged grief", "help"] }),
    ],
    liveWell: [
      article("anniversaries", "Anniversaries and special days", 2, { learnId: "grief-anniversaries", keywords: ["anniversaries", "christmas"] }),
      article("children", "Helping children who are grieving", 3, { learnId: "grief-children", keywords: ["children"] }),
      article("helping-others", "Supporting someone who is grieving", 3, { learnId: "grief-helping-others", keywords: ["supporting", "friends"] }),
      article("crisis", "If you are struggling to cope", 2, { learnId: "grief-crisis", keywords: ["crisis", "samaritans"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-cruse-grief-feel", title: "What does grief feel like?", kind: "video", duration: "1:10", url: "https://www.youtube.com/watch?v=sKXkmlD98Sc", extra: "The physical feelings of grief", publisher: "Cruse Bereavement Support", keywords: ["feelings", "body", "grief"] },
      { id: "yt-cruse-lasting-impact", title: "What is the lasting impact of grief?", kind: "video", duration: "1:44", url: "https://www.youtube.com/watch?v=8NDHdpKEGSA", extra: "Common experiences of long-lasting grief", publisher: "Cruse Bereavement Support", keywords: ["long-lasting grief", "time", "feelings"] },
      { id: "yt-cruse-communicating", title: "Communicating Grief", kind: "video", duration: "2:54", url: "https://www.youtube.com/watch?v=8jAh-dPtHu4", extra: "Ways to communicate feelings after a death", publisher: "Cruse Bereavement Support", keywords: ["talking", "feelings", "support"] },
    ],
    sources: [source(NHS, "Grief after bereavement or loss"), CRUSE, SAMARITANS],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-penny-bereavement", person: "Penny", title: "Adult bereavement | NHS", channel: "NHS", url: "https://www.youtube.com/watch?v=3RX1R1ktQVY", duration: "4:32", about: "Penny, widowed in 2005, describes how she coped with the sudden death of her husband, alongside a bereavement counsellor's advice on emotions and where to find support." },
      { id: "yt-sam-cruse", person: "Sam", title: "Day of Reflection: Sam's Story", channel: "Cruse Bereavement Support", url: "https://www.youtube.com/watch?v=JnEmFf4riPk", duration: "4:04", about: "Sam shares how the volunteers at Cruse Bereavement Care helped her through a difficult time after the death of her dad." },
      { id: "yt-margaret-cruse", person: "Margaret", title: "Margaret - Bereavement Story", channel: "Cruse Bereavement Support", url: "https://www.youtube.com/watch?v=7YnncVbW_bI", duration: "0:57", about: "Margaret shares her experience of being part of one of Cruse's bereavement groups." },
    ],
    askDoctor: ["Is what I am feeling a normal part of grief?", "Can I be referred for bereavement counselling?", "I am not sleeping or eating: what could help?", "Who do I contact if I feel unable to cope?"],
    related: [
      { groupId: "depression", conditionId: "depression" },
      { groupId: "stress-grief", conditionId: "loneliness" },
      { groupId: "sleep", conditionId: "insomnia" },
    ],
  },
};

export const loneliness: LibraryCondition = {
  id: "loneliness",
  title: "Loneliness",
  summary: "Feeling alone or without the connection you want, whether or not you live on your own. It is common, especially after an illness, a move or a loss, and it affects mood and health. Small steps to reconnect, and services that help, can make a difference.",
  facts: ["Almost 1 in 4 adults feel lonely", "Silver Line: free, 24 hours", "Low mood over 2 weeks? See a GP"],
  keywords: ["loneliness", "lonely", "isolated", "isolation", "connection", "befriending"],
  content: {
    understand: [
      article("what-it-is", "What loneliness is", 3, { learnId: "lone-what-it-is", blurb: "Wanting more connection than you have.", extra: "With a diagram", keywords: ["lonely", "connection"] }),
      article("causes", "Why it happens: illness, moves, loss and more", 3, { learnId: "lone-causes", keywords: ["causes", "illness", "loss"] }),
      article("health", "Loneliness, mood and health", 3, { learnId: "lone-health", keywords: ["mood", "health"] }),
      article("signs", "Signs in someone you care about", 2, { learnId: "lone-signs", keywords: ["signs", "family"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("small-steps", "Small steps to reconnect", 3, { learnId: "lone-small-steps", keywords: ["steps", "contact"] }),
      article("groups", "Groups, classes and volunteering", 3, { learnId: "lone-groups", keywords: ["groups", "volunteering"] }),
      article("befriending", "Befriending and phone services", 3, { learnId: "lone-befriending", keywords: ["befriending", "phone", "silver line"] }),
      article("online", "Staying in touch online", 2, { learnId: "lone-online", keywords: ["online", "video calls"] }),
    ],
    liveWell: [
      article("after-illness", "Loneliness after an illness", 3, { learnId: "lone-after-illness", keywords: ["illness", "recovery"] }),
      article("social-prescribing", "Social prescribing and link workers", 3, { learnId: "lone-social-prescribing", keywords: ["social prescribing", "link worker"] }),
      article("helping-others", "Helping someone who is lonely", 3, { learnId: "lone-helping-others", keywords: ["helping", "neighbour"] }),
      article("low-mood", "When loneliness becomes low mood", 2, { learnId: "lone-low-mood", keywords: ["low mood", "depression", "help"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-emm-social-connection", title: "Social Connection", kind: "video", duration: "2:57", url: "https://www.youtube.com/watch?v=x1EYcVpQeeE", extra: "Ways to build social connection", publisher: "Every Mind Matters", keywords: ["connection", "low mood", "anxiety"] },
      { id: "yt-nhsfife-coping-loneliness", title: "Health and Wellbeing - Coping with Loneliness", kind: "video", duration: "3:59", url: "https://www.youtube.com/watch?v=UHEfnsYDeSE", extra: "Why talking about loneliness matters", publisher: "NHS Fife", keywords: ["coping", "talking", "loneliness"] },
      { id: "yt-nasp-link-workers", title: "What are Social Prescribing Link Workers?", kind: "video", duration: "1:33", url: "https://www.youtube.com/watch?v=fahpHQfKI9c", extra: "How link workers support wellbeing", publisher: "National Academy for Social Prescribing", keywords: ["social prescribing", "link worker", "gp"] },
    ],
    sources: [source(NHS, "Feeling lonely"), AGE_UK, SAMARITANS],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-lee-loneliness", person: "Lee", title: "Loneliness and mental health | Lee's Mental Health Story | Mind", channel: "Mind, the mental health charity", url: "https://www.youtube.com/watch?v=T7I2O1cmywk", duration: "2:26", about: "Lee shares a personal story of loneliness and mental health, for Mind." },
      { id: "yt-maud-tea-parties", person: "Maud", title: "Maud talks about the effects of loneliness", channel: "Re-engage - reducing loneliness in later life", url: "https://www.youtube.com/watch?v=mcJdQztn2-4", duration: "3:19", about: "Maud, 90, talks about the effects of loneliness and how five years of Re-engage tea parties helped her feel less alone and isolated." },
    ],
    askDoctor: ["Is there a social prescriber or link worker at my practice?", "Could my low mood be more than loneliness?", "Are there groups or befriending services near me?", "What could help me get out more after my illness?"],
    related: [
      { groupId: "depression", conditionId: "depression" },
      { groupId: "stress-grief", conditionId: "grief" },
      { groupId: "anxiety", conditionId: "anxiety" },
    ],
  },
};

export const alcohol: LibraryCondition = {
  id: "alcohol",
  title: "Alcohol and your health",
  summary: "How alcohol affects mood, sleep, medicines and long-term health, and what help there is for cutting down. Many people drink more than they mean to, especially at hard times. Small changes help, and support is free and confidential.",
  facts: ["No more than 14 units a week", "There's no safe drinking level", "Don't stop suddenly if dependent"],
  keywords: ["alcohol", "drinking", "units", "cutting down", "alcohol dependence", "drink"],
  content: {
    understand: [
      article("units", "Units and the weekly guidelines", 3, { learnId: "alc-units", blurb: "What a unit is, and what alcohol does.", extra: "With a diagram", keywords: ["units", "14 units", "guidelines"] }),
      article("mood-sleep", "Alcohol, mood, anxiety and sleep", 3, { learnId: "alc-mood-sleep", keywords: ["mood", "anxiety", "sleep"] }),
      article("health", "Alcohol and long-term health", 3, { learnId: "alc-health", keywords: ["liver", "heart", "cancer"] }),
      article("dependence", "When drinking becomes hard to control", 3, { learnId: "alc-dependence", keywords: ["dependence", "signs"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("cutting-down", "Cutting down: tips that work", 3, { learnId: "alc-cutting-down", keywords: ["cutting down", "tips"] }),
      article("support", "Free support and services", 3, { learnId: "alc-support", keywords: ["support", "services"] }),
      article("stopping-safely", "Stopping safely if you drink heavily", 3, { learnId: "alc-stopping-safely", keywords: ["withdrawal", "detox", "safety"] }),
      article("medicines", "Alcohol and your medicines", 3, { learnId: "alc-medicines", keywords: ["medicines", "interactions"] }),
    ],
    liveWell: [
      article("social", "Social life and saying no", 3, { learnId: "alc-social", keywords: ["social", "alcohol-free"] }),
      article("family", "Family and friends", 3, { learnId: "alc-family", keywords: ["family", "worried"] }),
      article("after-illness", "Alcohol after an illness", 3, { learnId: "alc-after-illness", keywords: ["illness", "stroke", "heart"] }),
      article("urgent", "When to get urgent help", 2, { learnId: "alc-urgent", keywords: ["urgent", "999", "withdrawal"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-nhs-alcohol-units", title: "A guide to alcohol units (and signs of alcohol dependence) | NHS", kind: "video", duration: "3:15", url: "https://www.youtube.com/watch?v=OeX0Fz0Xza4", extra: "Units, risk levels and dependence", publisher: "NHS", keywords: ["units", "guidelines", "dependence"] },
      { id: "yt-nhs-cut-down", title: "Tips to cut down on alcohol | NHS", kind: "video", duration: "2:36", url: "https://www.youtube.com/watch?v=qpX8fE4FGhk", extra: "How to safely cut down", publisher: "NHS", keywords: ["cutting down", "tips", "units"] },
      { id: "yt-drinkaware-worried", title: "Worried about someone elses drinking?", kind: "video", duration: "1:31", url: "https://www.youtube.com/watch?v=saSQRRAXasE", extra: "Spot the signs, know what to say", publisher: "Drinkaware.co.uk", keywords: ["family", "worried", "support"] },
    ],
    sources: [source(NHS, "Alcohol support"), DRINKAWARE, MIND],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-justin-alcohol", person: "Justin", title: "Find Your Balance: Justin's Story", channel: "Drinkaware.co.uk", url: "https://www.youtube.com/watch?v=-rECW0DiLn8", duration: "2:14", about: "Justin realised drinking had become his default way to switch off, set himself a goal of keeping within the 14-unit weekly guideline, and found a drinking diary was a turning point." },
      { id: "yt-micaela-alcohol", person: "Micaela", title: "Find Your Balance: Micaela's Story", channel: "Drinkaware.co.uk", url: "https://www.youtube.com/watch?v=AltYjx46JSY", duration: "2:10", about: "Stress, parenthood and recovering from breast cancer all shaped Micaela's drinking; over six weeks she tracked her drinking, came to understand her triggers and built new habits." },
      { id: "yt-lee-alcohol", person: "Lee", title: "Find Your Balance: Lee's Story", channel: "Drinkaware.co.uk", url: "https://www.youtube.com/watch?v=rddmDktCQVc", duration: "2:27", about: "As Lee approached 50 he took a closer look at his drinking, cut back, and found that cutting back doesn't mean missing out." },
    ],
    askDoctor: ["Is my drinking affecting my health or medicines?", "Is it safe for me to stop suddenly?", "Can I be referred to a local alcohol service?", "What support is there for my family?"],
    related: [
      { groupId: "liver", conditionId: "fatty-liver" },
      { groupId: "depression", conditionId: "depression" },
      { groupId: "anxiety", conditionId: "anxiety" },
    ],
  },
};

export const eatingDisorders: LibraryCondition = {
  id: "eating-disorders",
  title: "Eating disorders",
  summary: "Serious but treatable mental health conditions in which eating, food and body image become a way of coping, including anorexia, bulimia, binge eating disorder and ARFID. They can affect anyone, at any age. The earlier help starts, the better recovery tends to be.",
  facts: ["About 1 in 20 people in the UK", "Anyone, at any age, can get one", "Most people can recover"],
  keywords: ["eating disorders", "anorexia", "bulimia", "binge eating", "arfid", "body image"],
  content: {
    understand: [
      article("what-they-are", "What eating disorders are", 3, { learnId: "eatd-what-they-are", blurb: "When food and eating become a way of coping.", extra: "With a diagram", keywords: ["eating disorder", "mental health"] }),
      article("types", "Anorexia, bulimia, binge eating disorder and ARFID", 3, { learnId: "eatd-types", keywords: ["anorexia", "bulimia", "binge eating", "arfid"] }),
      article("signs", "Signs, in yourself or someone else", 3, { learnId: "eatd-signs", keywords: ["signs", "warning"] }),
      article("causes", "Why they happen", 3, { learnId: "eatd-causes", keywords: ["causes", "risk"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("getting-help", "Getting help: the GP and referral", 3, { learnId: "eatd-getting-help", keywords: ["gp", "referral"] }),
      article("treatments", "Talking therapies and specialist care", 3, { learnId: "eatd-treatments", keywords: ["therapy", "cbt", "specialist"] }),
      article("physical-health", "Physical health checks", 3, { learnId: "eatd-physical-health", keywords: ["physical health", "checks"] }),
      article("recovery", "What recovery can look like", 3, { learnId: "eatd-recovery", keywords: ["recovery", "relapse"] }),
    ],
    liveWell: [
      article("family", "For family, friends and carers", 3, { learnId: "eatd-family", keywords: ["family", "carer"] }),
      article("talking", "Starting the conversation", 3, { learnId: "eatd-talking", keywords: ["talking", "worried"] }),
      article("urgent", "When to get urgent help", 2, { learnId: "eatd-urgent", keywords: ["urgent", "999", "crisis"] }),
      article("support", "Helplines and support", 2, { learnId: "eatd-support", keywords: ["helpline", "beat"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-rcpsych-eating-disorders", title: "Eating disorders", kind: "video", duration: "2:07", url: "https://www.youtube.com/watch?v=E8ODN-k-HFo", extra: "What eating disorders are, animated", publisher: "The Royal College of Psychiatrists", keywords: ["what they are", "animation", "help"] },
      { id: "yt-nhs24-get-help", title: "How to get help for an eating disorder", kind: "video", duration: "3:19", url: "https://www.youtube.com/watch?v=MtsJBk41zSg", extra: "A GP on getting help", publisher: "NHS 24", keywords: ["gp", "getting help", "referral"] },
      { id: "yt-beat-affect-anyone", title: "Eating disorders can affect anyone", kind: "video", duration: "1:49", url: "https://www.youtube.com/watch?v=xRdKBLbb-bk", extra: "Anyone, anywhere, at any time", publisher: "Beat", keywords: ["anyone", "awareness", "beat"] },
    ],
    sources: [source(NHS, "Eating disorders"), BEAT, MIND],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-katie-anorexia", person: "Katie", title: "Anorexia: Katie's story", channel: "NHS", url: "https://www.youtube.com/watch?v=tOouAmEEnlc", duration: "4:19", about: "Katie, 21, had anorexia from the age of 14 to 19, and shares her experiences of life with anorexia and how she recovered." },
      { id: "yt-abigail-anorexia-bed", person: "Abigail", title: "Abigail’s story: recovering from anorexia and a binge eating disorder", channel: "NHS 24", url: "https://www.youtube.com/watch?v=s7nBob9T6Lo", duration: "9:09", about: "Abigail talks about being diagnosed with anorexia and later binge eating disorder, how she got help, and what recovery has looked like for her." },
      { id: "yt-joe-arfid", person: "Joe", title: "Eating Disorders Awareness Week 2024.  Joe’s Story.", channel: "Beat", url: "https://www.youtube.com/watch?v=CCQdEUf7lKE", duration: "1:53", about: "Joe tells how ARFID has affected his life for over ten years, for Beat's message that people with ARFID are not being fussy." },
    ],
    askDoctor: ["Could I have an eating disorder?", "Can I be referred to a specialist eating disorder service?", "What physical health checks do I need?", "What support is there for my family?"],
    related: [
      { groupId: "depression", conditionId: "depression" },
      { groupId: "anxiety", conditionId: "anxiety" },
      { groupId: "anxiety", conditionId: "ocd" },
    ],
  },
};
