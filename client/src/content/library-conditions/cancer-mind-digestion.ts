import type { LibraryCondition } from "../library";
import { ANXIETY_UK, article, BOWEL_CANCER_UK, BREAST_CANCER_NOW, BRITISH_LIVER_TRUST, CANCER_RESEARCH_UK, GUTS_UK, KIDNEY_CARE_UK, MACMILLAN, MIND, NHS, piece, PROSTATE_CANCER_UK, SAMARITANS, SLEEP_CHARITY, source, STROKE_ASSOCIATION } from "../library-helpers";

// Cancer & recovery, Mind & mood, and Kidneys, liver & digestion. Same shape as the Ischaemic
// stroke page (see brain-a.ts).

export const breastCancer: LibraryCondition = {
  id: "breast",
  title: "Breast cancer",
  summary: "The months after breast cancer treatment: a body that has been through surgery, perhaps radiotherapy and chemotherapy, hormone tablets that may go on for years, and a mind that is only now catching up. Recovery is slower and odder than people expect, and it is still recovery.",
  facts: ["Most breast cancers do not come back", "Hormone tablets: usually 5 to 10 years", "Fatigue can last months after treatment"],
  keywords: ["breast cancer", "mastectomy", "chemotherapy", "radiotherapy", "tamoxifen"],
  content: {
    understand: [
      article("what-you-had", "Your treatment, explained after the fact", 5, { learnId: "bc-what-you-had", blurb: "Surgery, radiotherapy, chemotherapy, hormone therapy: what each was for.", keywords: ["surgery", "radiotherapy", "chemotherapy"] }),
      article("results", "Your results: grade, stage, receptors and what they mean", 4, { learnId: "bc-results", keywords: ["grade", "stage", "her2", "receptor"] }),
      article("follow-up", "Follow-up: mammograms, appointments and open access", 3, { learnId: "bc-follow-up", keywords: ["follow up", "mammogram", "appointments"] }),
      article("recurrence", "The worry about it coming back, and the real numbers", 4, { learnId: "bc-recurrence", keywords: ["recurrence", "come back", "risk"] }),
    ],
    recover: [
      article("fatigue", "Tiredness after treatment, and pacing", 5, { learnId: "bc-fatigue", keywords: ["tired", "fatigue", "energy"] }),
      article("arm-shoulder", "Arm and shoulder exercises after surgery", 6, { learnId: "bc-arm-shoulder", keywords: ["arm", "shoulder", "exercises", "lymphoedema"] }),
      article("hormone-tablets", "Tamoxifen and the aromatase inhibitors: the side effects, and what helps", 5, { learnId: "bc-hormone-tablets", keywords: ["tamoxifen", "letrozole", "hot flushes", "joints"] }),
      article("chemo-brain", "Chemo brain: fog, memory and getting sharper", 4, { learnId: "bc-chemo-brain", keywords: ["chemo brain", "memory", "fog"] }),
    ],
    liveWell: [
      article("body", "Your body after breast cancer: scars, reconstruction, clothes", 5, { learnId: "bc-body", keywords: ["body", "scar", "reconstruction"] }),
      article("menopause", "Treatment-induced menopause", 4, { learnId: "bc-menopause", keywords: ["menopause", "hot flushes"] }),
      article("work", "Going back to work", 4, { learnId: "bc-work", keywords: ["work", "employer", "phased"] }),
      article("relationships", "Sex, intimacy and partners", 4, { learnId: "bc-relationships", keywords: ["sex", "intimacy", "partner"] }),
      article("mood", "The low months after treatment ends", 4, { learnId: "bc-mood", keywords: ["mood", "anxious", "depression"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-cruk-breast-exercises", title: "Exercises After Breast Cancer Surgery | Cancer Research UK", kind: "video", duration: "6:41", url: "https://www.youtube.com/watch?v=vo1S-K2MetM", extra: "Arm and shoulder exercises after surgery", publisher: "Cancer Research UK", keywords: ["exercises", "arm", "shoulder", "surgery"] },
      { id: "yt-macmillan-fatigue", title: "What is cancer-related fatigue?", kind: "video", duration: "9:33", url: "https://www.youtube.com/watch?v=YJvbYVvOxcI", extra: "An occupational therapist explains fatigue", publisher: "Macmillan Cancer Support", keywords: ["fatigue", "tiredness", "energy"] },
      { id: "yt-bcn-hormone-side-effects", title: "Breast Cancer Now chats: Hormone therapy side effects - May 2025", kind: "video", duration: "49:28", url: "https://www.youtube.com/watch?v=sikW-fCNiII", extra: "Questions on hormone therapy side effects", publisher: "Breast Cancer Now", keywords: ["hormone therapy", "side effects", "tamoxifen"] },
    ],
    sources: [source(NHS, "Breast cancer: treatment and living with it"), BREAST_CANCER_NOW, MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-alison-macmillan", person: "Alison", title: "Life After Breast Cancer: Alison’s Story & Emotional Support from Macmillan", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=0BVDVPkfwe0", duration: "1:22", about: "Alison shares her experience of diagnosis and life after breast cancer, and emotional support from Macmillan." },
      { id: "yt-della-macmillan", person: "Della", title: "What is it like to have breast cancer? | Della's story | Macmillan Cancer Support", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=6QMq3NeAwk0", duration: "3:21", about: "Della shares her experience of having breast cancer, including receiving the diagnosis." },
      { id: "yt-stella-bcc", person: "Stella", title: "Care After Breast Cancer – Stella’s story", channel: "Breast Cancer Care", url: "https://www.youtube.com/watch?v=MkAbpbDyTJ4", duration: "2:24", about: "Stella tells how anxiety and side effects changed her life, in a film saying care after breast cancer should not end with treatment." },
    ],
    askDoctor: [
      "What was my stage and grade, and what does that mean for me now?",
      "How long will I take hormone tablets, and what can help the side effects?",
      "What symptoms should I report between appointments?",
      "Can I be referred for help with fatigue, lymphoedema or mood?",
    ],
    related: [
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
      { groupId: "bone-health", conditionId: "osteoporosis" },
      { groupId: "anxiety", conditionId: "anxiety" },
    ],
  },
};

export const bowelCancer: LibraryCondition = {
  id: "bowel",
  title: "Bowel cancer",
  summary: "Recovery after bowel cancer treatment: an operation that changed how your gut works, perhaps a stoma, chemotherapy that left your hands and feet tingling, and a new relationship with food and the bathroom. It settles, slowly, and there is a lot of help for the parts that don't.",
  facts: ["Bowel changes often last up to a year", "Follow-up usually lasts up to 5 years", "Most bowel cancer is not inherited"],
  keywords: ["bowel cancer", "colon", "colorectal", "stoma", "colostomy", "ileostomy"],
  content: {
    understand: [
      article("what-you-had", "Your treatment, explained after the fact", 5, { learnId: "bwc-what-you-had", blurb: "Surgery, chemotherapy, radiotherapy: what each was for.", keywords: ["surgery", "chemotherapy", "radiotherapy"] }),
      article("results", "Your results: stage, nodes and what they mean", 4, { learnId: "bwc-results", keywords: ["stage", "nodes", "results"] }),
      article("follow-up", "Follow-up: scans, blood tests and colonoscopies", 3, { learnId: "bwc-follow-up", keywords: ["follow up", "cea", "colonoscopy"] }),
      article("stoma", "Living with a stoma: the first months", 5, { learnId: "bwc-stoma", keywords: ["stoma", "bag", "colostomy", "ileostomy"] }),
    ],
    recover: [
      article("bowels", "Your bowels after surgery: urgency, frequency and what settles", 5, { learnId: "bwc-bowels", keywords: ["bowel", "urgency", "diarrhoea", "lars"] }),
      article("food", "Eating after bowel surgery", 5, { learnId: "bwc-food", keywords: ["food", "diet", "fibre"] }),
      article("neuropathy", "Tingling hands and feet after chemotherapy", 3, { learnId: "bwc-neuropathy", keywords: ["tingling", "neuropathy", "oxaliplatin"] }),
      article("core", "Gentle core and walking after abdominal surgery", 6, { learnId: "bwc-core", keywords: ["exercise", "walking", "core"] }),
    ],
    liveWell: [
      article("out-and-about", "Toilets, travel and going out", 4, { learnId: "bwc-out-and-about", keywords: ["toilets", "travel", "out"] }),
      article("work", "Going back to work", 4, { learnId: "bwc-work", keywords: ["work", "employer"] }),
      article("relationships", "Sex, intimacy and body confidence", 4, { learnId: "bwc-relationships", keywords: ["sex", "intimacy", "body"] }),
      article("mood", "The low months after treatment ends", 4, { learnId: "bwc-mood", keywords: ["mood", "anxious"] }),
      article("family", "Family history and screening for relatives", 3, { learnId: "bwc-family", keywords: ["family", "screening", "genetic"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-macmillan-bowel-staging", title: "How bowel cancer is staged: Macmillan Cancer Support", kind: "video", duration: "2:05", url: "https://www.youtube.com/watch?v=wkt8sVbUziY", extra: "An oncologist explains TNM staging", publisher: "Macmillan Cancer Support", keywords: ["stage", "tnm", "results"] },
      { id: "yt-macmillan-bowel-follow-up", title: "Follow up care for bowel cancer: Macmillan Cancer Support", kind: "video", duration: "2:04", url: "https://www.youtube.com/watch?v=el1GFfo8vxE", extra: "Appointments and wellbeing checks after treatment", publisher: "Macmillan Cancer Support", keywords: ["follow up", "appointments", "after treatment"] },
      { id: "yt-nnuh-stoma", title: "Stoma Information for Colorectal (Bowel) Cancer", kind: "video", duration: "1:50", url: "https://www.youtube.com/watch?v=3LbKpXcrUQc", extra: "Being referred to the stoma care team", publisher: "NNUH", keywords: ["stoma", "surgery", "stoma nurse"] },
    ],
    sources: [source(NHS, "Bowel cancer: treatment and living with it"), BOWEL_CANCER_UK, MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-paul-bowel", person: "Paul", title: "Life after cancer - Paul's story", channel: "Cancer Research UK", url: "https://www.youtube.com/watch?v=OHzhPVZyf4Q", duration: "2:46", about: "Paul, five years clear of bowel cancer, talks with his friend from rugby about coping after his treatment finished." },
      { id: "yt-antoine-bowel", person: "Antoine", title: "Antoine on coping with the side effects of bowel cancer", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=DZkW-xK8OtU", duration: "1:28", about: "Antoine felt cancer was changing who he was, making him weaker and more vulnerable, and talks about coping with the side effects of bowel cancer." },
      { id: "yt-emma-bowel", person: "Emma", title: "Emma's story", channel: "Bowel Cancer UK", url: "https://www.youtube.com/watch?v=L1-NyMqpsxo", duration: "12:23", about: "Emma was diagnosed with stage 3 bowel cancer in January 2021, aged 28, and shares her experience." },
    ],
    askDoctor: [
      "What was my stage, and what follow-up will I have?",
      "Will my bowels settle, and what can help in the meantime?",
      "Is my stoma temporary, and when might it be reversed?",
      "Should my family be screened?",
    ],
    related: [
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
      { groupId: "gut", conditionId: "ibs" },
      { groupId: "nerves", conditionId: "peripheral-neuropathy" },
    ],
  },
};

export const prostateCancer: LibraryCondition = {
  id: "prostate",
  title: "Prostate cancer",
  summary: "Recovery after prostate cancer treatment, or living alongside a cancer that is being watched rather than treated. Surgery and radiotherapy can affect the bladder and erections; hormone treatment changes energy, mood and the body. All of it has help worth asking for.",
  facts: ["Some cancers are watched, not treated", "PSA tests track it after treatment", "Leaks usually improve with time"],
  keywords: ["prostate", "prostate cancer", "psa", "radiotherapy", "hormone treatment"],
  content: {
    understand: [
      article("what-you-had", "Surgery, radiotherapy, hormones or watching: what each means", 5, { learnId: "pc-what-you-had", keywords: ["surgery", "radiotherapy", "hormone", "active surveillance"] }),
      article("psa", "PSA after treatment: what the numbers mean", 3, { learnId: "pc-psa", keywords: ["psa", "blood test", "numbers"] }),
      article("results", "Gleason score, stage and what they mean", 3, { learnId: "pc-results", keywords: ["gleason", "stage", "results"] }),
      article("surveillance", "Active surveillance: living with a cancer that's watched", 4, { learnId: "pc-surveillance", keywords: ["surveillance", "watching", "monitoring"] }),
    ],
    recover: [
      article("pelvic-floor", "Pelvic floor exercises that work", 5, { learnId: "pc-pelvic-floor", keywords: ["pelvic floor", "exercises", "bladder"] }),
      article("bladder", "Leaks and urgency after treatment", 4, { learnId: "pc-bladder", keywords: ["bladder", "leaks", "incontinence", "pads"] }),
      article("erections", "Erections after treatment: what helps", 5, { learnId: "pc-erections", keywords: ["erections", "erectile", "sex", "tablets"] }),
      article("hormone-therapy", "Hormone therapy: hot flushes, tiredness, mood, bones", 5, { learnId: "pc-hormone-therapy", keywords: ["hormone", "hot flushes", "tired", "bones"] }),
    ],
    liveWell: [
      article("exercise", "Exercise on hormone therapy: muscle, bones and mood", 4, { learnId: "pc-exercise", keywords: ["exercise", "strength"] }),
      article("relationships", "Partners, intimacy and talking about it", 4, { learnId: "pc-relationships", keywords: ["partner", "intimacy", "sex"] }),
      article("work", "Work and travel after treatment", 3, { learnId: "pc-work", keywords: ["work", "travel"] }),
      article("mood", "Mood on hormone therapy, and after", 4, { learnId: "pc-mood", keywords: ["mood", "depression", "anxious"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-nhs-pelvic-floor", title: "How to do pelvic floor exercises | NHS", kind: "video", duration: "3:08", url: "https://www.youtube.com/watch?v=JFJtUtKQCuM", extra: "A physiotherapist explains pelvic floor exercises", publisher: "NHS", keywords: ["pelvic floor", "exercises", "bladder"] },
      { id: "yt-pcuk-hormone-therapy", title: "Ask a Nurse: What is hormone therapy?", kind: "video", duration: "4:34", url: "https://www.youtube.com/watch?v=DjRLadCLsjQ", extra: "A nurse explains hormone therapy", publisher: "Prostate Cancer UK", keywords: ["hormone therapy", "testosterone", "nurse"] },
      { id: "yt-pcuk-understanding", title: "Understanding your prostate cancer", kind: "video", duration: "3:05", url: "https://www.youtube.com/watch?v=_tVNa9QY8gQ", extra: "Making sense of a diagnosis", publisher: "Prostate Cancer UK", keywords: ["diagnosis", "results", "understanding"] },
    ],
    sources: [source(NHS, "Prostate cancer: treatment and living with it"), PROSTATE_CANCER_UK, MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-bruce-hormone", person: "Bruce", title: "Living with hormone therapy: Bruce's story", channel: "Prostate Cancer UK", url: "https://www.youtube.com/watch?v=0iOlzrK9MyA", duration: "3:47", about: "Bruce, 51, is on hormone therapy to treat his advanced prostate cancer, and talks about living with it." },
      { id: "yt-paul-treatment", person: "Paul", title: "My treatment journey, Paul’s story", channel: "Prostate Cancer UK", url: "https://www.youtube.com/watch?v=CWwpYS9Zvig", duration: "5:54", about: "Paul had surgery followed by radiotherapy and hormone therapy to treat his prostate cancer, and talks about his treatment journey." },
      { id: "yt-bruno-mental-health", person: "Bruno", title: "Managing prostate cancer and my mental health: Bruno’s story", channel: "Prostate Cancer UK", url: "https://www.youtube.com/watch?v=4RN3ZXIRezw", duration: "3:47", about: "Bruno shares how focusing only on treatment left him struggling emotionally, and how he managed his mental health." },
    ],
    askDoctor: [
      "What is my PSA now, and what would worry you?",
      "What can help with leaks or erections, and who do I ask?",
      "How long will I be on hormone therapy, and what should I watch for?",
      "Should I have a bone density scan?",
    ],
    related: [
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
      { groupId: "bone-health", conditionId: "osteoporosis" },
      { groupId: "depression", conditionId: "depression" },
    ],
  },
};

export const cancerFatigue: LibraryCondition = {
  id: "cancer-fatigue",
  title: "Tiredness after treatment",
  summary: "A tiredness that sleep doesn't fix, that arrives without warning and lasts months after treatment ends. It is the most common after-effect of cancer treatment and the least talked about. Pacing, gentle exercise and treating the things that make it worse help most people.",
  facts: ["Affects almost 65 in 100 with cancer", "Usually eases after treatment ends", "Being active is one of the best helps"],
  keywords: ["tired", "fatigue", "exhausted", "cancer fatigue", "after chemo", "energy"],
  content: {
    understand: [
      article("why", "Why cancer treatment leaves you so tired", 4, { learnId: "cf-why", blurb: "Chemotherapy, radiotherapy, surgery, hormones, worry, and the body's repair work.", keywords: ["cause", "chemotherapy", "repair"] }),
      article("not-laziness", "It isn't laziness, and it isn't in your head", 3, { learnId: "cf-not-laziness", keywords: ["laziness", "guilt", "understanding"] }),
      article("other-causes", "Things that make it worse: anaemia, thyroid, sleep, mood, medicines", 3, { learnId: "cf-other-causes", keywords: ["anaemia", "thyroid", "sleep", "mood"] }),
      article("how-long", "How long it lasts, honestly", 3, { learnId: "cf-how-long", keywords: ["how long", "months"] }),
    ],
    recover: [
      article("pacing", "Pacing: the energy budget", 6, { learnId: "cf-pacing", keywords: ["pacing", "energy", "budget", "diary"] }),
      article("gentle-exercise", "Gentle exercise that gives energy back", 4, { learnId: "cf-gentle-exercise", keywords: ["exercise", "walking", "gentle"] }),
      article("sleep", "Sleep when you're exhausted but can't", 4, { learnId: "cf-sleep", keywords: ["sleep", "night", "naps"] }),
      article("food", "Eating for energy", 3, { learnId: "cf-food", keywords: ["food", "diet", "appetite"] }),
    ],
    liveWell: [
      article("work", "Going back to work with fatigue", 4, { learnId: "cf-work", keywords: ["work", "phased", "employer"] }),
      article("asking-help", "Asking for help without feeling a burden", 3, { learnId: "cf-asking-help", keywords: ["help", "family", "burden"] }),
      article("mood", "Fatigue and mood: the loop", 3, { learnId: "cf-mood", keywords: ["mood", "depression", "anxious"] }),
      article("family", "For the people around you", 4, { learnId: "cf-family", keywords: ["family", "carer", "partner"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-macmillan-what-is-crf", title: "What is cancer-related fatigue?", kind: "video", duration: "9:33", url: "https://www.youtube.com/watch?v=YJvbYVvOxcI", extra: "An occupational therapist explains fatigue", publisher: "Macmillan Cancer Support", keywords: ["fatigue", "occupational therapist", "symptoms"] },
      { id: "yt-cruk-tiredness-treatment", title: "Tiredness and cancer treatment | Cancer Research UK", kind: "video", duration: "0:51", url: "https://www.youtube.com/watch?v=6eHlwkjw_T4", extra: "A cancer nurse on tiredness", publisher: "Cancer Research UK", keywords: ["tiredness", "side effects", "coping"] },
      { id: "yt-uclh-managing-fatigue", title: "Cancer treatment side effects | Managing fatigue", kind: "video", duration: "3:07", url: "https://www.youtube.com/watch?v=xNBMZZ1r3lA", extra: "Tips to manage and reduce fatigue", publisher: "University College London Hospitals NHS Foundation Trust", keywords: ["fatigue", "tips", "hospital"] },
    ],
    sources: [source(NHS, "Cancer-related fatigue and life after cancer treatment"), MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-ruth-fatigue", person: "Ruth", title: "Ruth's Cancer Story - Coping With Fatigue After Cancer Treatment", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=8YRgI_M9EOY", duration: "5:38", about: "Ruth had chemotherapy, surgery and proton therapy for Ewing's sarcoma, and shares practical tips for coping with fatigue after treatment, including reasonable adjustments at work." },
      { id: "yt-denton-fatigue", person: "Denton", title: "Coping with fatigue - Macmillan Cancer Support", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=JMApRzwXFEc", duration: "3:30", about: "Denton describes how he coped with fatigue during his treatment for prostate cancer, including the physical and emotional effects and feeling isolated." },
      { id: "yt-faye-fatigue", person: "Faye", title: "Cancer treatment and fatigue – Faye's story", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=XfX8xFyzKmI", duration: "5:43", about: "Faye was diagnosed with Hodgkin lymphoma at 20 and had physical and mental fatigue during and after treatment; she and her family share their tips for coping." },
    ],
    askDoctor: [
      "Could anything treatable be adding to my tiredness?",
      "Is there a fatigue or exercise programme I can be referred to?",
      "How much activity is safe for me right now?",
      "When should I worry that it isn't improving?",
    ],
    related: [
      { groupId: "common-cancers", conditionId: "breast" },
      { groupId: "sleep", conditionId: "insomnia" },
      { groupId: "depression", conditionId: "depression" },
    ],
  },
};

export const depression: LibraryCondition = {
  id: "depression",
  title: "Depression",
  summary: "Low mood that lasts for weeks, drains the pleasure from things and makes everyday life heavy, often alongside poor sleep, little appetite and a harsh inner voice. It is an illness, it is common with any long-term condition, and talking therapy and medicines both work.",
  facts: ["Most days, for over 2 weeks", "Affects about 1 in 6 people", "Most people make a full recovery"],
  keywords: ["depression", "low mood", "sad", "hopeless", "no interest", "mental health"],
  content: {
    understand: [
      article("what-it-is", "What depression is, and isn't", 4, { learnId: "dep-what-it-is", blurb: "The symptoms, the two-week rule, and why it's not weakness.", keywords: ["symptoms", "weakness", "illness"] }),
      article("illness-link", "Why it so often follows a physical illness", 4, { learnId: "dep-illness-link", keywords: ["illness", "stroke", "heart", "diagnosis"] }),
      article("body", "How depression shows up in the body", 3, { learnId: "dep-body", keywords: ["sleep", "appetite", "pain", "tired"] }),
      article("urgent", "If you're thinking about ending your life", 2, { learnId: "dep-urgent", blurb: "Who to call, right now, any hour.", keywords: ["suicide", "crisis", "samaritans", "999"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("talking", "Talking therapies: CBT and the others, and how to get them", 5, { learnId: "dep-talking", keywords: ["cbt", "therapy", "counselling", "talking therapies"] }),
      article("antidepressants", "Antidepressants: what to expect in the first weeks", 5, { learnId: "dep-antidepressants", keywords: ["antidepressants", "sertraline", "tablets", "side effects"] }),
      article("activity", "Behavioural activation: small steps that lift mood", 6, { learnId: "dep-activity", keywords: ["activity", "steps", "routine"] }),
      article("exercise-sleep", "Exercise, daylight and sleep", 4, { learnId: "dep-exercise-sleep", keywords: ["exercise", "daylight", "sleep"] }),
    ],
    liveWell: [
      article("telling-people", "Telling someone", 3, { learnId: "dep-telling-people", keywords: ["telling", "family", "friend"] }),
      article("work", "Work, sick notes and going back", 4, { learnId: "dep-work", keywords: ["work", "sick note", "employer"] }),
      article("relapse", "Staying well, and spotting a dip early", 4, { learnId: "dep-relapse", keywords: ["relapse", "staying well", "warning signs"] }),
      article("carers", "Supporting someone with depression", 4, { learnId: "dep-carers", keywords: ["carer", "partner", "support"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-rcpsych-depression", title: "Depression - subtitles", kind: "video", duration: "2:57", url: "https://www.youtube.com/watch?v=dv82CywfKek", extra: "What depression feels like, and help", publisher: "The Royal College of Psychiatrists", keywords: ["symptoms", "help", "animation"] },
      { id: "yt-nhs-talking-therapies", title: "Treatment for depression and anxiety | NHS Talking Therapies", kind: "video", duration: "2:20", url: "https://www.youtube.com/watch?v=jLgv0E1k6hs", extra: "How to refer yourself for therapy", publisher: "NHS", keywords: ["talking therapies", "self-referral", "cbt"] },
      { id: "yt-rcpsych-physical-illness", title: "Coping with physical illness - subtitles", kind: "video", duration: "2:05", url: "https://www.youtube.com/watch?v=fKURj76p91k", extra: "Depression and anxiety with physical illness", publisher: "The Royal College of Psychiatrists", keywords: ["physical illness", "coping", "anxiety"] },
    ],
    sources: [source(NHS, "Depression: symptoms, treatment and support"), MIND, SAMARITANS],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-lawrence-depression", person: "Lawrence", title: "Clinical depression: Lawrence's story | NHS", channel: "NHS", url: "https://www.youtube.com/watch?v=BfZ7VKhwpeI", duration: "3:25", about: "Lawrence, a psychiatric nurse, explains how easy it was to ignore his symptoms of depression, and the problem this caused in his working life." },
      { id: "yt-hayley-depression", person: "Hayley", title: "Hayley's experience living with depression | Mind", channel: "Mind, the mental health charity", url: "https://www.youtube.com/watch?v=MJZEeZXWLcE", duration: "2:10", about: "Hayley shares her experience with depression, through dark and difficult times to hope and recovery, and how she used it as motivation to help others." },
      { id: "yt-laura-depression", person: "Laura", title: "Tips for coping with depression | Laura's Mental Health Story | Mind", channel: "Mind, the mental health charity", url: "https://www.youtube.com/watch?v=Me3aVUQZPHw", duration: "2:34", about: "Laura shares her top tips for coping with depression." },
    ],
    askDoctor: [
      "Can I be referred for talking therapy, and how long is the wait?",
      "Would an antidepressant help me, and what should I expect at first?",
      "Could any of my other medicines or conditions be adding to this?",
      "Who do I contact if things get worse quickly?",
    ],
    related: [
      { groupId: "depression", conditionId: "after-stroke" },
      { groupId: "anxiety", conditionId: "anxiety" },
      { groupId: "sleep", conditionId: "insomnia" },
    ],
  },
};

export const depressionAfterStroke: LibraryCondition = {
  id: "after-stroke",
  title: "Depression after stroke",
  summary: "About a third of people feel depressed in the year after a stroke. Some of it is the loss and the fright; some is the injury itself changing how the brain handles mood. Both kinds are treatable, and treating them helps recovery of everything else.",
  facts: ["Around 1 in 3 in the first year", "About 1 in 5 have emotionalism early on", "Talking therapy and medicines can help"],
  keywords: ["depression", "stroke", "low mood", "crying", "emotional", "after stroke"],
  content: {
    understand: [
      article("why", "Why depression is so common after a stroke", 4, { learnId: "pds-why", blurb: "The brain injury, the losses, the fatigue and the fright.", keywords: ["cause", "brain", "loss"] }),
      article("emotionalism", "Crying or laughing without meaning to: emotionalism", 3, { learnId: "pds-emotionalism", keywords: ["crying", "laughing", "emotional", "emotionalism"] }),
      article("signs", "The signs, in yourself or someone you care for", 3, { learnId: "pds-signs", keywords: ["signs", "symptoms", "carer"] }),
      article("anxiety-too", "Anxiety after stroke: the fear of another one", 3, { learnId: "pds-anxiety-too", keywords: ["anxiety", "fear", "another stroke"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("talking", "Talking therapy after a stroke, including with aphasia", 4, { learnId: "pds-talking", keywords: ["therapy", "cbt", "aphasia"] }),
      article("antidepressants", "Antidepressants after a stroke", 4, { learnId: "pds-antidepressants", keywords: ["antidepressants", "tablets"] }),
      article("activity", "Small steps: activity and mood after stroke", 6, { learnId: "pds-activity", keywords: ["activity", "steps", "routine"] }),
      article("peer-support", "Other people who've had a stroke: why it helps", 3, { learnId: "pds-peer-support", keywords: ["peer support", "group", "others"] }),
    ],
    liveWell: [
      article("fatigue-mood", "Fatigue and mood: the loop", 3, { learnId: "pds-fatigue-mood", keywords: ["fatigue", "tired", "mood"] }),
      article("purpose", "Finding purpose when the old roles have changed", 4, { learnId: "pds-purpose", keywords: ["purpose", "roles", "work"] }),
      article("carers", "For carers: your mood matters too", 4, { learnId: "pds-carers", keywords: ["carer", "partner", "family"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-msg-emotions-after-stroke", title: "Emotions after a stroke", kind: "video", duration: "2:11", url: "https://www.youtube.com/watch?v=5tyUrCA_FUY", extra: "Depression, anxiety, panic and what helps", publisher: "My Stroke Guide", keywords: ["emotions", "depression", "anxiety"] },
      { id: "yt-nhs-talking-therapies", title: "Treatment for depression and anxiety | NHS Talking Therapies", kind: "video", duration: "2:20", url: "https://www.youtube.com/watch?v=jLgv0E1k6hs", extra: "Referring yourself, assessment and treatments", publisher: "NHS", keywords: ["talking therapies", "self-referral", "cbt"] },
      { id: "yt-chss-fatigue-after-stroke", title: "STARs - Fatigue after stroke", kind: "video", duration: "5:13", url: "https://www.youtube.com/watch?v=hhTbtIMxQDQ", extra: "Real patients on fatigue and pacing", publisher: "Chest Heart & Stroke Scotland", keywords: ["fatigue", "pacing", "mood"] },
    ],
    sources: [source(NHS, "Depression and emotional changes after stroke"), STROKE_ASSOCIATION, MIND, SAMARITANS],
    stories: ["li-wei"],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-neil-mood-after-stroke", person: "Neil", title: "STARs - Mood and emotion after stroke (Neil)", channel: "Chest Heart & Stroke Scotland", url: "https://www.youtube.com/watch?v=OJILQ_D0fMQ", duration: "6:23", about: "Neil talks about the effect of stroke on mood and emotions, and how psychology helped." },
      { id: "yt-lisa-stroke-changes", person: "Lisa", title: "Lisa's story - Stroke changes everything", channel: "Stroke Association", url: "https://www.youtube.com/watch?v=jt_5tCDxzDo", duration: "1:40", about: "Dance teacher Lisa had a stroke two weeks before her 28th birthday, has had depression, and found support groups helped her see there is life after stroke." },
      { id: "yt-sonje-sister-carer", person: "Sonje", title: "Being a sister and a carer", channel: "Stroke Association", url: "https://www.youtube.com/watch?v=iAI7PKNP-7Q", duration: "2:06", about: "Sonje Turbitt describes what it is like for a family member to have a stroke, and how it feels to then care for them." },
    ],
    askDoctor: [
      "Could what I'm feeling be depression rather than just the stroke?",
      "Can I be referred for talking therapy, adapted if I have aphasia?",
      "Would an antidepressant interfere with my stroke medicines?",
      "Is there a stroke group near me?",
    ],
    related: [
      { groupId: "stroke", conditionId: "ischaemic" },
      { groupId: "depression", conditionId: "depression" },
      { groupId: "anxiety", conditionId: "anxiety" },
    ],
  },
};

export const anxiety: LibraryCondition = {
  id: "anxiety",
  title: "Anxiety",
  summary: "Worry that won't switch off, a body on alert, panic that arrives from nowhere. Anxiety is the mind's alarm system stuck on, and it is especially common after a health scare. It responds well to talking therapy, and there are things that help today.",
  facts: ["GAD affects about 1 in 25 in the UK", "Panic attacks often last 5 to 20 minutes", "You can refer yourself for therapy"],
  keywords: ["anxiety", "worry", "panic", "panic attack", "nervous", "on edge"],
  content: {
    understand: [
      article("what-it-is", "What anxiety is doing in your body", 4, { learnId: "anx-what-it-is", blurb: "Adrenaline, the alarm system and why your heart races in a quiet room.", extra: "With a diagram", keywords: ["adrenaline", "body", "symptoms"] }),
      article("panic", "Panic attacks: what they are and what they aren't", 3, { learnId: "anx-panic", keywords: ["panic", "panic attack", "heart attack"] }),
      article("health-anxiety", "Health anxiety after a scare", 4, { learnId: "anx-health-anxiety", keywords: ["health anxiety", "scare", "checking"] }),
      article("types", "Generalised, social, phobias: the types", 3, { learnId: "anx-types", keywords: ["generalised", "social", "phobia"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("cbt", "CBT for anxiety, and how to get it", 5, { learnId: "anx-cbt", keywords: ["cbt", "therapy", "talking therapies"] }),
      article("breathing", "Breathing for the moment it hits", 5, { learnId: "anx-breathing", keywords: ["breathing", "grounding", "panic"] }),
      article("medicines", "Medicines for anxiety: what they can and can't do", 4, { learnId: "anx-medicines", keywords: ["sertraline", "tablets", "medication"] }),
      article("worry-time", "Worry time and other tricks that work", 3, { learnId: "anx-worry-time", keywords: ["worry time", "tricks", "techniques"] }),
    ],
    liveWell: [
      article("caffeine-sleep", "Caffeine, alcohol and sleep", 3, { learnId: "anx-caffeine-sleep", keywords: ["caffeine", "alcohol", "sleep"] }),
      article("avoidance", "Avoidance: why it feeds anxiety", 3, { learnId: "anx-avoidance", keywords: ["avoidance", "avoiding"] }),
      article("telling-people", "Telling the people around you", 3, { learnId: "anx-telling-people", keywords: ["telling", "family"] }),
      article("exercise", "Exercise and anxiety", 3, { learnId: "anx-exercise", keywords: ["exercise", "walking"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-nhs-anxiety", title: "Anxiety | NHS", kind: "video", duration: "4:04", url: "https://www.youtube.com/watch?v=xH2E9I7vn28", extra: "A psychiatrist explains anxiety and treatments", publisher: "NHS", keywords: ["symptoms", "treatment", "psychiatrist"] },
      { id: "yt-mind-panic-cope", title: "How to cope with panic attacks", kind: "video", duration: "2:15", url: "https://www.youtube.com/watch?v=pJCpZBIedrw", extra: "Practical tips during and after panic", publisher: "Mind, the mental health charity", keywords: ["panic attack", "coping", "tips"] },
      { id: "yt-emm-worries", title: "Tackle your worries", kind: "video", duration: "2:40", url: "https://www.youtube.com/watch?v=hv9AwGuY0iU", extra: "Simple tips for managing worries", publisher: "Every Mind Matters", keywords: ["worry", "worry time", "self-help"] },
    ],
    sources: [source(NHS, "Anxiety: symptoms, treatment and self-help"), MIND, ANXIETY_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-alex-anxiety", person: "Alex", title: "The physical effects of anxiety | Alex's Mental Health Story | Mind", channel: "Mind, the mental health charity", url: "https://www.youtube.com/watch?v=oPmKH00kIpA", duration: "3:48", about: "Alex made this video to address the misconceptions surrounding panic attacks and anxiety disorders, and the physical effects of anxiety." },
      { id: "yt-harley-anxiety", person: "Harley", title: "Anxiety and panic attacks | Harley's Mental health Story | Mind", channel: "Mind, the mental health charity", url: "https://www.youtube.com/watch?v=9neXU_iBP9c", duration: "2:55", about: "Harley talks about how she feels her anxiety has held her back, and the ways she has learned to cope with it." },
      { id: "yt-anthony-panic", person: "Anthony", title: "Anthony’s experience of panic disorder | NHS Talking Therapies", channel: "NHS", url: "https://www.youtube.com/watch?v=kFY--rPwMFY", duration: "0:53", about: "Anthony has lived with panic disorder since he was 16; through NHS Talking Therapies he learned tools such as keeping a diary and setting clear goals." },
    ],
    askDoctor: [
      "Can I be referred for CBT, and can I refer myself?",
      "Could my heart or thyroid be adding to this?",
      "Would a medicine help, and what are the trade-offs?",
      "What can I do on a bad day while I wait for therapy?",
    ],
    related: [
      { groupId: "depression", conditionId: "depression" },
      { groupId: "sleep", conditionId: "insomnia" },
      { groupId: "heart-rhythm", conditionId: "atrial-fibrillation" },
    ],
  },
};

export const insomnia: LibraryCondition = {
  id: "insomnia",
  title: "Sleep problems",
  summary: "Trouble getting to sleep, staying asleep or waking rested, for weeks on end. Pain, worry, medicines, the menopause and a long-term condition all get in the way, and sleep then makes everything else worse. The best-proven treatment is not a tablet but a short course of CBT for insomnia.",
  facts: ["About 1 in 3 have short-term insomnia", "CBT for insomnia is the first treatment", "Adults need 7 to 9 hours on average"],
  keywords: ["insomnia", "sleep", "can't sleep", "waking", "tired", "night"],
  content: {
    understand: [
      article("what-happens", "What happens when you sleep, and when you don't", 4, { learnId: "ins-what-happens", blurb: "The sleep cycles, the body clock and sleep pressure.", extra: "With a diagram", keywords: ["cycles", "body clock"] }),
      article("causes", "Why you can't sleep: pain, worry, medicines, menopause, habits", 4, { learnId: "ins-causes", keywords: ["pain", "worry", "medicines", "menopause"] }),
      article("not-apnoea", "Sleep apnoea, restless legs: when it's something else", 3, { learnId: "ins-not-apnoea", keywords: ["apnoea", "restless legs", "snoring"] }),
      article("how-much", "How much sleep you actually need", 2, { learnId: "ins-how-much", keywords: ["how much", "hours"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("cbt-i", "CBT for insomnia: what it is and how to get it", 5, { learnId: "ins-cbt-i", keywords: ["cbt-i", "cbt", "therapy", "app"] }),
      article("sleep-window", "The sleep window: the method that works", 6, { learnId: "ins-sleep-window", keywords: ["sleep window", "restriction", "method"] }),
      article("sleeping-tablets", "Sleeping tablets: the honest version", 3, { learnId: "ins-sleeping-tablets", keywords: ["sleeping tablets", "zopiclone", "melatonin"] }),
      article("pain-at-night", "Sleeping with pain", 3, { learnId: "ins-pain-at-night", keywords: ["pain", "night"] }),
    ],
    liveWell: [
      article("evenings", "Evenings, screens and the bedroom", 3, { learnId: "ins-evenings", keywords: ["screens", "bedroom", "routine"] }),
      article("naps", "Naps and the day", 2, { learnId: "ins-naps", keywords: ["naps", "daytime"] }),
      article("worry", "Night-time worry", 3, { learnId: "ins-worry", keywords: ["worry", "anxious", "3am"] }),
      article("partner", "Sharing a bed with a poor sleeper", 2, { learnId: "ins-partner", keywords: ["partner", "snoring"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-emm-sleep-things", title: "Sleep - Things You Can Do", kind: "video", duration: "2:06", url: "https://www.youtube.com/watch?v=Rynz11JaB8c", extra: "Tips for sleeping problems", publisher: "Every Mind Matters", keywords: ["tips", "sleep problems", "habits"] },
      { id: "yt-five-principles-sleep", title: "The 5 Principles of Good Sleep Health", kind: "video", duration: "2:58", url: "https://www.youtube.com/watch?v=xAcvD3n-Ghw", extra: "Five principles of good sleep", publisher: "Scriberia", keywords: ["principles", "value sleep", "sleep window"] },
      { id: "yt-nhs24-sleep-tips", title: "Top Tips to Help You Get a Good Nights Sleep", kind: "video", duration: "2:40", url: "https://www.youtube.com/watch?v=A7Hy5WVkfsk", extra: "Breathing Space tips for better sleep", publisher: "NHS 24", keywords: ["tips", "worry", "good night's sleep"] },
    ],
    sources: [source(NHS, "Insomnia: causes and treatment"), SLEEP_CHARITY, MIND],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-jonny-sleep", person: "Jonny", title: "Tips for when you can't sleep | Jonny Benjamin's Mental Health Story | Mind", channel: "Mind, the mental health charity", url: "https://www.youtube.com/watch?v=dodxKSrbySg", duration: "6:08", about: "Jonny Benjamin talks about how his mental health affects his sleep and how he has learned to manage it." },
      { id: "yt-fraser-sleep", person: "Fraser", title: "Mind to Mind - Fraser's story: Getting a better night's sleep", channel: "Scottish Government", url: "https://www.youtube.com/watch?v=Mv3c0jqw840", duration: "2:27", about: "Fraser shares his tips for falling asleep, in one of Mind to Mind's videos from real people about managing sleep and mental wellbeing." },
      { id: "yt-nariese-sleep", person: "Nariese", title: "Mind to Mind – Nariese’s story: managing poor sleep", channel: "ScotGov Marketing", url: "https://www.youtube.com/watch?v=KXM-vxYCTSc", duration: "1:09", about: "Small changes made a big difference to Nariese's sleep." },
    ],
    askDoctor: [
      "Could any of my medicines be affecting my sleep?",
      "Can I be referred for CBT for insomnia, or use an app on prescription?",
      "Should I be checked for sleep apnoea?",
      "Is a short course of sleeping tablets sensible for me?",
    ],
    related: [
      { groupId: "sleep-breathing", conditionId: "sleep-apnoea" },
      { groupId: "anxiety", conditionId: "anxiety" },
      { groupId: "depression", conditionId: "depression" },
    ],
  },
};

export const chronicKidneyDisease: LibraryCondition = {
  id: "chronic-kidney-disease",
  title: "Chronic kidney disease",
  summary: "Kidneys that are not filtering as well as they should, found on a blood or urine test long before any symptoms. Most people with it never need dialysis: the job is to protect what's left, mainly through blood pressure, diabetes and the right medicines.",
  facts: ["About 1 in 10 people in the UK have it", "Only 1 in 50 ever need dialysis", "Usually no symptoms in early stages"],
  keywords: ["kidney", "ckd", "kidney disease", "egfr", "dialysis", "kidney function"],
  content: {
    understand: [
      article("what-kidneys-do", "What the kidneys do", 3, { learnId: "ckd-what-kidneys-do", blurb: "Filtering, fluid, blood pressure and bones. Why so much depends on them.", extra: "With a diagram", keywords: ["kidneys", "filter"] }),
      article("egfr", "eGFR and the stages: what your number means", 3, { learnId: "ckd-egfr", keywords: ["egfr", "stage", "number"] }),
      article("causes", "Why it happens: diabetes, blood pressure, age, and others", 4, { learnId: "ckd-causes", keywords: ["diabetes", "blood pressure", "cause"] }),
      article("protein", "Protein in the urine, and why it matters", 2, { learnId: "ckd-protein", keywords: ["protein", "urine", "acr"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("blood-pressure", "Blood pressure: the kidney's best friend", 4, { learnId: "ckd-blood-pressure", keywords: ["blood pressure", "tablets", "ace inhibitor"] }),
      article("medicines", "Medicines that protect, and medicines to avoid", 4, { learnId: "ckd-medicines", keywords: ["sglt2", "ibuprofen", "avoid", "medication"] }),
      article("food", "Salt, protein and potassium: eating with CKD", 5, { learnId: "ckd-food", keywords: ["diet", "salt", "potassium", "food"] }),
      article("later-stages", "If it progresses: dialysis and transplant, explained early", 5, { learnId: "ckd-later-stages", keywords: ["dialysis", "transplant"] }),
    ],
    liveWell: [
      article("sick-days", "Sick-day rules for your kidneys", 3, { learnId: "ckd-sick-days", keywords: ["sick", "dehydration", "vomiting"] }),
      article("painkillers", "Painkillers and the kidneys", 2, { learnId: "ckd-painkillers", keywords: ["painkillers", "ibuprofen", "nsaid"] }),
      article("tiredness", "Tiredness and anaemia", 3, { learnId: "ckd-tiredness", keywords: ["tired", "anaemia"] }),
      article("checks", "The checks, and how often", 2, { learnId: "ckd-checks", keywords: ["checks", "blood test", "review"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-uhl-what-is-ckd", title: "What is Chronic Kidney Disease (CKD)", kind: "video", duration: "4:20", url: "https://www.youtube.com/watch?v=uTfa9Tia1A4", extra: "Leicester hospital clinicians explain CKD", publisher: "UHL NHS Trust | Leicester's Hospitals", keywords: ["ckd", "kidneys", "what is ckd"] },
      { id: "yt-imperial-ckd-causes", title: "What causes chronic kidney disease?", kind: "video", duration: "3:55", url: "https://www.youtube.com/watch?v=tyWgdBYBttc", extra: "Causes, symptoms and diagnosis explained", publisher: "Imperial College Healthcare NHS Trust", keywords: ["causes", "symptoms", "diagnosis"] },
      { id: "yt-kruk-acr-test", title: "Dr Kevin Fernando explains the importance of a urine ACR test", kind: "video", duration: "3:34", url: "https://www.youtube.com/watch?v=bRfaYbkuVYo", extra: "Why the urine ACR test matters", publisher: "KidneyResearchUK", keywords: ["acr", "urine test", "protein"] },
    ],
    sources: [source(NHS, "Chronic kidney disease: symptoms and treatment"), KIDNEY_CARE_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-shaun-kcuk", person: "Shaun", title: "Shaun's story | Living with kidney disease | Kidney Care UK", channel: "Kidney Care UK", url: "https://www.youtube.com/watch?v=you5lXwQyOM", duration: "4:01", about: "Shaun was told out of the blue that his kidneys were failing and was diagnosed with IgA nephropathy; he now has haemodialysis and is back working on his motorbikes." },
      { id: "yt-nick-kcuk", person: "Nick", title: "Nick's story | Living with kidney disease | Kidney Care UK", channel: "Kidney Care UK", url: "https://www.youtube.com/watch?v=rU6Yc0Lqdpc", duration: "3:06", about: "Nick lost both of his kidneys two years ago and has haemodialysis three times a week at the Royal Cornwall Hospital in Treliske, keeping a positive outlook on life with kidney failure." },
      { id: "yt-paul-kcuk", person: "Paul", title: "Paul's haemodialysis treatment | Living with kidney disease | Kidney Care UK", channel: "Kidney Care UK", url: "https://www.youtube.com/watch?v=yrJuB0jbJDo", duration: "2:45", about: "Paul has had CKD for 60 years and three transplants that failed; he went onto haemodialysis at the end of 2020 and shares his experiences." },
    ],
    askDoctor: [
      "What is my eGFR and stage, and is it stable?",
      "What is my blood pressure target?",
      "Which of my medicines need adjusting for my kidneys?",
      "Should I see a kidney dietitian?",
    ],
    related: [
      { groupId: "blood-pressure", conditionId: "high-blood-pressure" },
      { groupId: "diabetes", conditionId: "type-2" },
      { groupId: "heart-attack", conditionId: "heart-attack" },
    ],
  },
};

export const fattyLiver: LibraryCondition = {
  id: "fatty-liver",
  title: "Fatty liver",
  summary: "Fat building up in the liver, usually linked to weight, diabetes and the metabolism rather than alcohol. It is very common, usually silent, and in most people it can be reversed. For some it scars the liver, which is why it's worth taking seriously early.",
  facts: ["About 1 in 4 UK adults have it", "Usually found by tests, not symptoms", "Losing 5 to 10 in 100 of weight helps"],
  keywords: ["fatty liver", "liver", "nafld", "masld", "liver test"],
  content: {
    understand: [
      article("what-it-is", "What fatty liver is", 3, { learnId: "fl-what-it-is", blurb: "Why fat collects in the liver, and what it does there.", extra: "With a diagram", keywords: ["liver", "fat", "cause"] }),
      article("tests", "Blood tests, ultrasound and the FibroScan", 3, { learnId: "fl-tests", keywords: ["blood test", "ultrasound", "fibroscan"] }),
      article("scarring", "Fibrosis and cirrhosis: when it matters", 3, { learnId: "fl-scarring", keywords: ["fibrosis", "cirrhosis", "scarring"] }),
      article("alcohol-or-not", "Alcohol-related or metabolic: the difference", 2, { learnId: "fl-alcohol-or-not", keywords: ["alcohol", "metabolic"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("weight", "Weight: how much, and what works", 5, { learnId: "fl-weight", keywords: ["weight", "diet"] }),
      article("food", "Eating for your liver", 4, { learnId: "fl-food", keywords: ["food", "diet", "sugar"] }),
      article("moving", "Movement and the liver", 6, { learnId: "fl-moving", keywords: ["exercise", "walking"] }),
      article("other-conditions", "Diabetes, cholesterol and blood pressure alongside", 3, { learnId: "fl-other-conditions", keywords: ["diabetes", "cholesterol"] }),
    ],
    liveWell: [
      article("alcohol", "Alcohol and a fatty liver", 2, { learnId: "fl-alcohol", keywords: ["alcohol", "drink"] }),
      article("medicines", "Medicines and supplements to be careful with", 2, { learnId: "fl-medicines", keywords: ["medicines", "supplements", "paracetamol"] }),
      article("checks", "How often to be checked", 2, { learnId: "fl-checks", keywords: ["checks", "review"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-liveruk-masld-name", title: "MASLD and NAFLD - explaining the new name", kind: "video", duration: "2:16", url: "https://www.youtube.com/watch?v=s6XyM_gXH-U", extra: "Why NAFLD is now called MASLD", publisher: "Liver UK", keywords: ["masld", "nafld", "new name"] },
      { id: "yt-liveruk-nafld-stages", title: "The stages of NAFLD (non-alcohol related fatty liver disease)", kind: "video", duration: "2:16", url: "https://www.youtube.com/watch?v=gZQ3VFHq17E", extra: "The stages of fatty liver disease", publisher: "Liver UK", keywords: ["stages", "fibrosis", "nafld"] },
      { id: "yt-liveruk-eat-healthily", title: "How to eat more healthily - advice from the experts", kind: "video", duration: "4:26", url: "https://www.youtube.com/watch?v=KRa2aqv71GE", extra: "A specialist NAFLD dietitian's healthy eating tips", publisher: "Liver UK", keywords: ["diet", "dietitian", "healthy eating"] },
    ],
    sources: [source(NHS, "Non-alcoholic fatty liver disease"), BRITISH_LIVER_TRUST],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-wendy-fatty-liver", person: "Wendy", title: "Wendy's story", channel: "Liver UK", url: "https://www.youtube.com/watch?v=-GHpK2Szshg", duration: "3:31", about: "Wendy was diagnosed with non-alcohol related fatty liver disease and cirrhosis in 2020, changed her diet and went from a size 22 to a 12." },
      { id: "yt-hilary-nash", person: "Hilary", title: "Hilary's NASH story", channel: "Liver UK", url: "https://www.youtube.com/watch?v=SjgZ0bmcjGM", duration: "2:38", about: "Hilary's own story of NASH, the progressive form of non-alcohol related fatty liver disease that can lead to cirrhosis." },
      { id: "yt-rob-fatty-liver", person: "Rob", title: "Rob's Liver Story - Reversing Fatty Liver Disease", channel: "Liver Foundation", url: "https://www.youtube.com/watch?v=vxUitmaelF0", duration: "4:12", about: "Through changes to his diet, regular exercise and a commitment to his health, Rob reversed his fatty liver and got the all clear from his doctor." },
    ],
    askDoctor: [
      "Is there any scarring in my liver?",
      "How much weight would make a difference for me?",
      "How often should my liver be checked?",
      "Is alcohol safe for me at all?",
    ],
    related: [
      { groupId: "diabetes", conditionId: "type-2" },
      { groupId: "diabetes", conditionId: "prediabetes" },
      { groupId: "blood-pressure", conditionId: "high-blood-pressure" },
    ],
  },
};

export const ibs: LibraryCondition = {
  id: "ibs",
  title: "Irritable bowel syndrome (IBS)",
  summary: "Tummy pain, bloating and a bowel that swings between too loose and too slow, with nothing wrong on the tests. It is a real condition of how the gut and the brain talk to each other, it is common, and food, stress and a few specific treatments can bring it under control.",
  facts: ["Affects up to 1 in 10 people", "No test for IBS; tests rule out others", "Low FODMAP helps many people"],
  keywords: ["ibs", "irritable bowel", "bloating", "tummy pain", "constipation", "diarrhoea"],
  content: {
    understand: [
      article("what-it-is", "What IBS is", 4, { learnId: "ibs-what-it-is", blurb: "The gut, the brain and the nerves between them. Why the tests are normal and the pain is real.", extra: "With a diagram", keywords: ["gut", "brain", "cause"] }),
      article("red-flags", "Symptoms that aren't IBS and need checking", 2, { learnId: "ibs-red-flags", keywords: ["bleeding", "weight loss", "red flags"] }),
      article("types", "IBS-D, IBS-C and mixed", 2, { learnId: "ibs-types", keywords: ["diarrhoea", "constipation", "mixed"] }),
      article("triggers", "Triggers: food, stress and infections", 3, { learnId: "ibs-triggers", keywords: ["triggers", "food", "stress"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("first-steps", "First steps: meals, fibre, fluids and caffeine", 4, { learnId: "ibs-first-steps", keywords: ["fibre", "meals", "caffeine"] }),
      article("low-fodmap", "The low FODMAP diet, with a dietitian", 5, { learnId: "ibs-low-fodmap", keywords: ["fodmap", "diet", "dietitian"] }),
      article("medicines", "Antispasmodics, laxatives, loperamide and the rest", 4, { learnId: "ibs-medicines", keywords: ["medicines", "antispasmodic", "laxative", "loperamide"] }),
      article("gut-therapy", "Gut-directed CBT and hypnotherapy", 3, { learnId: "ibs-gut-therapy", keywords: ["cbt", "hypnotherapy", "therapy"] }),
    ],
    liveWell: [
      article("out-and-about", "Toilets, travel and eating out", 3, { learnId: "ibs-out-and-about", keywords: ["toilets", "travel", "restaurant"] }),
      article("stress", "Stress and the gut", 3, { learnId: "ibs-stress", keywords: ["stress", "anxious"] }),
      article("work", "IBS at work", 3, { learnId: "ibs-work", keywords: ["work", "employer"] }),
      article("diary", "Keeping a food and symptom diary", 2, { learnId: "ibs-diary", keywords: ["diary", "food diary"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-nhs-what-is-ibs", title: "What is IBS? Symptoms and treatment | NHS", kind: "video", duration: "2:33", url: "https://www.youtube.com/watch?v=mNf8fK5gAm4", extra: "A gastroenterologist on symptoms and treatment", publisher: "NHS", keywords: ["symptoms", "flare-up", "treatment"] },
      { id: "yt-nhs-treat-ibs", title: "How to treat IBS (irritable bowel syndrome) | NHS", kind: "video", duration: "2:15", url: "https://www.youtube.com/watch?v=QtiTo7HhWrw", extra: "Diet, probiotics, medicine and low FODMAP", publisher: "NHS", keywords: ["diet", "probiotics", "low fodmap"] },
      { id: "yt-nhs24-diet-ibs", title: "Does your diet affect IBS?", kind: "video", duration: "4:51", url: "https://www.youtube.com/watch?v=Wn2xU4YsCBE", extra: "A specialist dietitian on diet and FODMAPs", publisher: "NHS 24", keywords: ["diet", "dietitian", "fodmap"] },
    ],
    sources: [source(NHS, "IBS: symptoms, diet and treatment"), GUTS_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-vicky-ibs", person: "Vicky", title: "Living Well With IBS", channel: "The IBS Network", url: "https://www.youtube.com/watch?v=K2HIQIEQce4", duration: "5:25", about: "Vicky, a University of Sheffield researcher who has lived with IBS for over 30 years, talks about her experiences and those shared in her storytelling workshops." },
      { id: "yt-nick-ibs", person: "Nick", title: "Self-Care Week Series: Managing Changing Symptoms", channel: "The IBS Network", url: "https://www.youtube.com/watch?v=fxGI3o9fz0Q", duration: "4:32", about: "Nick, a member of The IBS Network, shares how frustrating it can be when symptoms suddenly change, and how he handles it." },
      { id: "yt-sylvie-ibs", person: "Sylvie", title: "Refractory IBS Video Introduction & Patient Story 2016", channel: "NHS Gloucestershire", url: "https://www.youtube.com/watch?v=7vW2XLvckmI", duration: "5:08", about: "Sylvie, a patient, joins a dietitian and a consultant gastroenterologist to discuss the Refractory IBS Service at Gloucestershire Hospital Foundation Trust." },
    ],
    askDoctor: [
      "Have the other causes been ruled out, including coeliac disease?",
      "Can I be referred to a dietitian for the low FODMAP diet?",
      "Which medicine suits my type of IBS?",
      "Is gut-directed therapy available to me?",
    ],
    related: [
      { groupId: "anxiety", conditionId: "anxiety" },
      { groupId: "common-cancers", conditionId: "bowel" },
      { groupId: "sleep", conditionId: "insomnia" },
    ],
  },
};
