import type { LibraryCondition } from "../library";
import { ARRHYTHMIA_ALLIANCE, article, ASTHMA_LUNG_UK, BHF, BLOOD_PRESSURE_UK, NHS, piece, SLEEP_CHARITY, source } from "../library-helpers";

// Heart & lungs, the rest of each card: low blood pressure; coronary heart disease and heart failure; SVT,
// a slow heart rate and ectopic beats; bronchiectasis and pulmonary fibrosis; snoring. Same shape as the
// pages in heart.ts.

export const lowBloodPressure: LibraryCondition = {
  id: "low-blood-pressure",
  title: "Low blood pressure",
  summary: "Blood pressure that runs low, or drops when you stand up. For many people it causes no trouble at all; for others it brings dizziness, light-headedness or fainting. Finding the cause, often a medicine or not drinking enough, is usually where help begins.",
  facts: ["Low means under 90/60mmHg", "Most people notice no symptoms", "Tablets to raise it rarely needed"],
  keywords: ["low blood pressure", "hypotension", "dizzy", "light-headed", "fainting", "postural hypotension"],
  content: {
    understand: [
      article("what-it-is", "What low blood pressure is, and when it matters", 3, { learnId: "lbp-what-it-is", blurb: "The numbers, and why low is often fine.", extra: "With a diagram", keywords: ["numbers", "hypotension"] }),
      article("postural", "Dizzy when you stand up: postural hypotension", 3, { learnId: "lbp-postural", keywords: ["postural", "standing", "dizzy"] }),
      article("causes", "Why it happens: medicines, fluids and illness", 3, { learnId: "lbp-causes", keywords: ["causes", "medicines", "dehydration"] }),
      article("fainting", "Fainting: what is happening and what to do", 3, { learnId: "lbp-fainting", keywords: ["fainting", "blackout", "collapse"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("medicines-review", "Reviewing the medicines that lower blood pressure", 3, { learnId: "lbp-medicines-review", keywords: ["medicines", "review", "tablets"] }),
      article("standing-slowly", "Getting up slowly, and other everyday tricks", 3, { learnId: "lbp-standing-slowly", keywords: ["standing", "tips", "everyday"] }),
      article("fluids-salt", "Fluids, salt and meals", 3, { learnId: "lbp-fluids-salt", keywords: ["fluids", "salt", "meals", "water"] }),
      article("treatments", "Compression stockings and other treatments", 3, { learnId: "lbp-treatments", keywords: ["stockings", "treatment", "medicine"] }),
    ],
    liveWell: [
      article("falls", "Falls and staying safe at home", 3, { learnId: "lbp-falls", keywords: ["falls", "home", "safety"] }),
      article("heat-alcohol", "Hot weather, hot baths and alcohol", 3, { learnId: "lbp-heat-alcohol", keywords: ["heat", "bath", "alcohol"] }),
      article("driving", "Driving and dizzy spells", 2, { learnId: "lbp-driving", keywords: ["driving", "dvla"] }),
      article("when-to-worry", "When low blood pressure needs help", 2, { learnId: "lbp-when-to-worry", keywords: ["urgent", "help", "gp"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-nihr-orthostatic-hypotension", title: "NIHR Newcastle BRC: Orthostatic Hypotension animation", kind: "video", duration: "3:14", url: "https://www.youtube.com/watch?v=fvMBBtcjjl8", extra: "Causes, symptoms and what can help", publisher: "NIHR Biomedical Research Centre: Newcastle", keywords: ["postural hypotension", "orthostatic hypotension", "standing", "dizzy"] },
      { id: "yt-aa-prevent-syncope", title: "How can I prevent a syncopal episode?", kind: "video", duration: "3:37", url: "https://www.youtube.com/watch?v=oSiiXk4GZ3U", extra: "A cardiologist on preventing faints", publisher: "Arrhythmia Alliance", keywords: ["fainting", "syncope", "prevention"] },
      { id: "yt-aa-syncope-triggers", title: "Dr Fedororwski & Trudie Lobban - What triggers syncope and what are the treatment options", kind: "video", duration: "5:07", url: "https://www.youtube.com/watch?v=YJvgjaSM4v8", extra: "Fainting triggers and treatment options", publisher: "Arrhythmia Alliance", keywords: ["fainting", "triggers", "treatment"] },
    ],
    sources: [source(NHS, "Low blood pressure (hypotension)"), BLOOD_PRESSURE_UK, BHF],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-aa-roger-fainting", person: "Roger", title: "'Take fainting to heart' Sir Roger Moore", channel: "Arrhythmia Alliance", url: "https://www.youtube.com/watch?v=rg8u_GzeSQ4", duration: "3:17", about: "Sir Roger Moore, Patron of STARS, shares his experience of fainting on stage and being diagnosed with an irregular heartbeat." },
      { id: "yt-aa-ella-pots", person: "Ella", title: "Living with POTS - Ella Landsman's story", channel: "Arrhythmia Alliance", url: "https://www.youtube.com/watch?v=pKJ_ZTmaHoo", duration: "2:10", about: "Ella Landsman talks about her diagnosis, life with postural orthostatic tachycardia syndrome (POTS) and her advice to others." },
      { id: "yt-aa-saskia-pots", person: "Saskia", title: "Guernsey girl conquers PoTS to raise funds for STARS", channel: "Arrhythmia Alliance", url: "https://www.youtube.com/watch?v=otN3AQgCdsY", duration: "9:47", about: "STARS fundraiser Saskia Haining joins Trudie Lobban on BBC Radio Guernsey to raise awareness of PoTS." },
    ],
    askDoctor: [
      "Could any of my medicines be lowering my blood pressure too much?",
      "Should my blood pressure be checked lying down and standing up?",
      "What should I do if I feel faint?",
      "Is it safe for me to drive?",
    ],
    related: [
      { groupId: "blood-pressure", conditionId: "high-blood-pressure" },
      { groupId: "heart-rhythm", conditionId: "slow-heart-rate" },
      { groupId: "bone-health", conditionId: "osteoporosis" },
    ],
  },
};

export const coronaryHeartDisease: LibraryCondition = {
  id: "coronary-heart-disease",
  title: "Coronary heart disease",
  summary: "When the arteries that feed the heart muscle narrow with fatty build-up. It can cause angina, breathlessness or a heart attack, and it is the reason behind most heart attacks. Medicines, procedures and everyday changes can all slow it down.",
  facts: ["Angina and breathlessness are common", "Around 800,000 UK women live with it", "Cannot be cured, but can be managed"],
  keywords: ["coronary heart disease", "chd", "ischaemic heart disease", "narrow arteries", "atheroma", "cholesterol"],
  content: {
    understand: [
      article("what-it-is", "What coronary heart disease is", 3, { learnId: "chd-what-it-is", blurb: "The heart's own arteries, and how they narrow.", extra: "With a diagram", keywords: ["arteries", "atheroma", "cause"] }),
      article("risk-factors", "Why it happens: the risk factors", 3, { learnId: "chd-risk-factors", keywords: ["risk", "smoking", "blood pressure", "cholesterol"] }),
      article("tests", "ECG, angiogram and the other tests", 3, { learnId: "chd-tests", keywords: ["ecg", "angiogram", "ct", "tests"] }),
      article("symptoms", "Angina, breathlessness and the warning signs", 3, { learnId: "chd-symptoms", keywords: ["angina", "chest pain", "breathless"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("medicines", "Statins, aspirin and the other medicines", 4, { learnId: "chd-medicines", keywords: ["statins", "aspirin", "beta blockers"] }),
      article("stents-bypass", "Stents and bypass surgery", 4, { learnId: "chd-stents-bypass", keywords: ["stent", "angioplasty", "bypass"] }),
      article("cholesterol", "Cholesterol: the numbers and what lowers them", 3, { learnId: "chd-cholesterol", keywords: ["cholesterol", "ldl", "numbers"] }),
      article("cardiac-rehab", "Cardiac rehabilitation", 3, { learnId: "chd-cardiac-rehab", keywords: ["cardiac rehab", "exercise", "programme"] }),
    ],
    liveWell: [
      article("eating", "Eating for your heart", 3, { learnId: "chd-eating", keywords: ["food", "diet", "salt", "fat"] }),
      article("activity", "Staying active safely", 3, { learnId: "chd-activity", keywords: ["exercise", "activity", "walking"] }),
      article("smoking", "Stopping smoking", 3, { learnId: "chd-smoking", keywords: ["smoking", "quit", "vaping"] }),
      article("emotions", "Worry and low mood with heart disease", 3, { learnId: "chd-emotions", keywords: ["worry", "mood", "anxiety"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-bhf-chd-atherosclerosis", title: "Coronary heart disease, clogged arteries and atherosclerosis", kind: "video", duration: "1:21", url: "https://www.youtube.com/watch?v=y6QJceOAVY0", extra: "Animation: how arteries become blocked", publisher: "British Heart Foundation", keywords: ["coronary heart disease", "atherosclerosis", "arteries"] },
      { id: "yt-bhf-angioplasty-stents", title: "What is an angioplasty and stents?", kind: "video", duration: "1:54", url: "https://www.youtube.com/watch?v=CcVxzP7E2zo", extra: "Before, during and after angioplasty", publisher: "British Heart Foundation", keywords: ["angioplasty", "stent", "angiogram"] },
      { id: "yt-nhs-bypass-surgery", title: "What happens during heart bypass surgery | NHS", kind: "video", duration: "3:05", url: "https://www.youtube.com/watch?v=RnEUL8ELmmI", extra: "What happens during bypass surgery", publisher: "NHS", keywords: ["bypass", "cabg", "surgery"] },
    ],
    sources: [source(NHS, "Coronary heart disease"), BHF],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-bhf-amy-heart-disease", person: "Amy", title: "British Heart Foundation - Amy's story, living with heart disease", channel: "British Heart Foundation", url: "https://www.youtube.com/watch?v=ncdsGtiMFRI", duration: "2:02", about: "Amy is one of seven women sharing their experience of living with heart disease in the British Heart Foundation's Women's Room." },
      { id: "yt-bhf-frank-bypass", person: "Frank", title: "Life after bypass surgery: Frank's Story", channel: "British Heart Foundation", url: "https://www.youtube.com/watch?v=yuky1MnlPCY", duration: "2:08", about: "Since a heart attack at 31, Frank has had four bypass operations, and explains how he is still living life to the full forty-two years on." },
      { id: "yt-bhf-sulakhan-cholesterol", person: "Sulakhan", title: "Sulakhan’s story – high cholesterol", channel: "British Heart Foundation", url: "https://www.youtube.com/watch?v=BUPIOpoXM5Q", duration: "3:04", about: "Sulakhan had a heart attack due to high cholesterol in 2000, and lowered his cholesterol to a healthy level by making simple changes to his lifestyle." },
    ],
    askDoctor: [
      "How narrowed are my arteries, and what does that mean for me?",
      "What should my cholesterol and blood pressure be?",
      "Can I be referred to cardiac rehabilitation?",
      "What should I do if I get chest pain?",
    ],
    related: [
      { groupId: "heart-attack", conditionId: "angina" },
      { groupId: "heart-attack", conditionId: "heart-attack" },
      { groupId: "blood-pressure", conditionId: "high-blood-pressure" },
    ],
  },
};

export const heartFailure: LibraryCondition = {
  id: "heart-failure",
  title: "Heart failure",
  summary: "The heart is not pumping blood around the body as well as it should. It does not mean the heart has stopped. Breathlessness, swollen ankles and tiredness are common, and medicines, devices and daily habits help many people live well with it for years.",
  facts: ["Over 1 million people in the UK have it", "It does not mean the heart has stopped", "Treatment can keep it stable for years"],
  keywords: ["heart failure", "breathless", "swollen ankles", "fluid", "weak heart", "ejection fraction"],
  content: {
    understand: [
      article("what-it-is", "What heart failure means, and what it does not", 3, { learnId: "hf-what-it-is", blurb: "A pump that struggles, not a heart that has stopped.", extra: "With a diagram", keywords: ["pump", "meaning"] }),
      article("causes", "Why it happens", 3, { learnId: "hf-causes", keywords: ["causes", "heart attack", "blood pressure"] }),
      article("symptoms", "Breathlessness, swollen ankles and tiredness", 3, { learnId: "hf-symptoms", keywords: ["breathless", "ankles", "tired"] }),
      article("tests", "Echo, blood tests and the other tests", 3, { learnId: "hf-tests", keywords: ["echo", "bnp", "tests"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("medicines", "The medicines, and why there are several", 4, { learnId: "hf-medicines", keywords: ["medicines", "tablets", "diuretics"] }),
      article("devices", "Pacemakers, ICDs and other devices", 4, { learnId: "hf-devices", keywords: ["pacemaker", "icd", "crt"] }),
      article("fluid-salt", "Fluid, salt and weighing yourself daily", 3, { learnId: "hf-fluid-salt", keywords: ["fluid", "salt", "weight"] }),
      article("cardiac-rehab", "Rehab and exercise with heart failure", 3, { learnId: "hf-cardiac-rehab", keywords: ["rehab", "exercise"] }),
    ],
    liveWell: [
      article("worsening", "Spotting when it is getting worse", 3, { learnId: "hf-worsening", keywords: ["worse", "warning", "signs"] }),
      article("sleep", "Sleeping and breathing at night", 3, { learnId: "hf-sleep", keywords: ["sleep", "night", "pillows"] }),
      article("mood", "Mood, worry and living well", 3, { learnId: "hf-mood", keywords: ["mood", "worry", "depression"] }),
      article("support", "Support and planning ahead", 3, { learnId: "hf-support", keywords: ["support", "nurse", "planning"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-bhf-what-is-hf", title: "What is heart failure?", kind: "video", duration: "2:28", url: "https://www.youtube.com/watch?v=m4aC0-x4zWQ", extra: "Causes, symptoms and everyday impact", publisher: "British Heart Foundation", keywords: ["heart failure", "causes", "symptoms"] },
      { id: "yt-bhf-hfpef", title: "What is heart failure with preserved ejection fraction?", kind: "video", duration: "2:57", url: "https://www.youtube.com/watch?v=wOTS3ANQNa8", extra: "HFpEF, its symptoms and tests", publisher: "British Heart Foundation", keywords: ["hfpef", "ejection fraction", "tests"] },
      { id: "yt-trft-fluid", title: "Heart Failure : Treatment and monitoring of fluid retention", kind: "video", duration: "4:03", url: "https://www.youtube.com/watch?v=zZnBi7AaeOQ", extra: "Treating and monitoring fluid retention", publisher: "The Rotherham NHS Foundation Trust", keywords: ["fluid", "weight", "diuretics"] },
    ],
    sources: [source(NHS, "Heart failure"), BHF],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-bhf-edith-hf", person: "Edith", title: "British Heart Foundation - One step at a time, Edith's heart failure story", channel: "British Heart Foundation", url: "https://www.youtube.com/watch?v=Bei7T3fMb20", duration: "5:39", about: "Edith's heart attack left her with severe heart failure, and she talks about the small changes she made to keep doing the things she loves." },
      { id: "yt-bhf-lisa-hf", person: "Lisa", title: "‘I have hope': Lisa's story of living with heart failure", channel: "British Heart Foundation", url: "https://www.youtube.com/watch?v=m8Cd6en21uo", duration: "4:56", about: "Lisa had two heart attacks at 38 and, now living with heart failure, gives an honest account of her recovery and the new life she has made." },
      { id: "yt-bhf-norman-hf", person: "Norman", title: "British Heart Foundation - One step at a time, Norman's story", channel: "British Heart Foundation", url: "https://www.youtube.com/watch?v=ytyXf0OLveE", duration: "6:09", about: "Norman retired early because of his poor health and keeps busy running a heart failure support group near his home." },
    ],
    askDoctor: [
      "What type of heart failure do I have, and what caused it?",
      "Which symptoms mean I should call you straight away?",
      "Should I weigh myself every day, and what change matters?",
      "Is there a heart failure nurse I can contact?",
    ],
    related: [
      { groupId: "heart-attack", conditionId: "coronary-heart-disease" },
      { groupId: "heart-rhythm", conditionId: "atrial-fibrillation" },
      { groupId: "kidneys", conditionId: "chronic-kidney-disease" },
    ],
  },
};

export const svt: LibraryCondition = {
  id: "svt",
  title: "Supraventricular tachycardia (SVT)",
  summary: "Episodes of a very fast, regular heartbeat that start and stop suddenly. They can be frightening, but SVT is usually not dangerous. Simple manoeuvres can stop many episodes, and medicines or a procedure called ablation can prevent them.",
  facts: ["Often starts between 25 and 40", "150 to 220 beats a minute in SVT", "Ablation cures it in most people"],
  keywords: ["svt", "supraventricular tachycardia", "fast heartbeat", "racing heart", "palpitations", "avnrt"],
  content: {
    understand: [
      article("what-it-is", "What SVT is", 3, { learnId: "svt-what-it-is", blurb: "The heart's wiring, and the short circuit that speeds it up.", extra: "With a diagram", keywords: ["wiring", "electrical", "cause"] }),
      article("symptoms", "What an episode feels like", 3, { learnId: "svt-symptoms", keywords: ["racing", "palpitations", "dizzy"] }),
      article("triggers", "What can set it off", 3, { learnId: "svt-triggers", keywords: ["triggers", "caffeine", "stress"] }),
      article("tests", "ECG and heart monitors", 3, { learnId: "svt-tests", keywords: ["ecg", "monitor", "tests"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("stopping-episode", "Stopping an episode yourself", 3, { learnId: "svt-stopping-episode", keywords: ["vagal", "valsalva", "stop"] }),
      article("medicines", "Medicines for SVT", 3, { learnId: "svt-medicines", keywords: ["medicines", "beta blockers", "adenosine"] }),
      article("ablation", "Catheter ablation", 4, { learnId: "svt-ablation", keywords: ["ablation", "procedure", "cure"] }),
      article("when-to-get-help", "When to call 999 or go to A&E", 2, { learnId: "svt-when-to-get-help", keywords: ["999", "urgent", "a&e"] }),
    ],
    liveWell: [
      article("exercise", "Exercise and sport", 3, { learnId: "svt-exercise", keywords: ["exercise", "sport"] }),
      article("caffeine-alcohol", "Caffeine, alcohol and energy drinks", 3, { learnId: "svt-caffeine-alcohol", keywords: ["caffeine", "alcohol", "energy drinks"] }),
      article("driving-work", "Driving and work", 3, { learnId: "svt-driving-work", keywords: ["driving", "work", "dvla"] }),
      article("worry", "The worry of the next episode", 3, { learnId: "svt-worry", keywords: ["worry", "anxiety"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-aa-what-is-svt", title: "What is SVT? – How can we treat it?", kind: "video", duration: "10:42", url: "https://www.youtube.com/watch?v=S1lWOuPyS0s", extra: "Dr Nick Gall explains SVT treatment", publisher: "Arrhythmia Alliance", keywords: ["what is svt", "treatment", "electrophysiologist"] },
      { id: "yt-aa-svt-questions", title: "Mrs Trudie Lobban & Dr Shouvik Haldar – SVT Questions", kind: "video", duration: "16:04", url: "https://www.youtube.com/watch?v=xDnfq8i21h8", extra: "Questions about SVT answered", publisher: "Arrhythmia Alliance", keywords: ["questions", "specialist"] },
      { id: "yt-bhf-cardioversion", title: "British Heart Foundation - Your guide to cardioversion treatment", kind: "video", duration: "4:16", url: "https://www.youtube.com/watch?v=zC7yVk4yklA", extra: "What to expect from cardioversion", publisher: "British Heart Foundation", keywords: ["cardioversion", "treatment", "hospital"] },
    ],
    sources: [source(NHS, "Supraventricular tachycardia (SVT)"), ARRHYTHMIA_ALLIANCE, BHF],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-aa-mary-svt", person: "Mary", title: "Living with... SVT - Mary", channel: "Arrhythmia Alliance", url: "https://www.youtube.com/watch?v=1OWr2y37EdI", duration: "6:30", about: "Mary tells her story of living with SVT to Trudie Lobban, founder and CEO of Arrhythmia Alliance." },
      { id: "yt-aa-shana-svt", person: "Shana", title: "SVT Patient Story (Shana)", channel: "Arrhythmia Alliance", url: "https://www.youtube.com/watch?v=vrtMRtYcyzk", duration: "9:54", about: "Shana shares her experience of living with SVT." },
      { id: "yt-aa-susanne-svt", person: "Susanne", title: "SVT Patient Story (Susanne)", channel: "Arrhythmia Alliance", url: "https://www.youtube.com/watch?v=LuJmxZBQsd8", duration: "16:41", about: "Susanne shares her experience of living with SVT." },
    ],
    askDoctor: [
      "Which manoeuvres should I try to stop an episode?",
      "How long should I wait before getting help?",
      "Would ablation be right for me?",
      "Is it safe for me to exercise and drive?",
    ],
    related: [
      { groupId: "heart-rhythm", conditionId: "atrial-fibrillation" },
      { groupId: "heart-rhythm", conditionId: "ectopic-beats" },
      { groupId: "anxiety", conditionId: "anxiety" },
    ],
  },
};

export const slowHeartRate: LibraryCondition = {
  id: "slow-heart-rate",
  title: "Slow heart rate and heart block",
  summary: "A heart that beats more slowly than usual, sometimes because the electrical signal is delayed or blocked on its way through the heart. Some people feel nothing; others feel dizzy, faint or tired. When it causes symptoms, a pacemaker is a common and effective treatment.",
  facts: ["Under 60 bpm is a low heart rate", "Fitting a pacemaker takes about an hour", "No car driving for a week after fitting"],
  keywords: ["bradycardia", "slow heart rate", "heart block", "pacemaker", "dizzy", "fainting"],
  content: {
    understand: [
      article("what-it-is", "What a slow heart rate is", 3, { learnId: "brady-what-it-is", blurb: "When slow is healthy, and when it is a problem.", extra: "With a diagram", keywords: ["bradycardia", "slow", "pulse"] }),
      article("heart-block", "Heart block: the types", 3, { learnId: "brady-heart-block", keywords: ["heart block", "first degree", "complete"] }),
      article("causes", "Causes: age, medicines and the heart's wiring", 3, { learnId: "brady-causes", keywords: ["causes", "medicines", "age"] }),
      article("symptoms", "Dizziness, fainting and tiredness", 3, { learnId: "brady-symptoms", keywords: ["dizzy", "fainting", "tired"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("tests", "ECG and heart monitors", 3, { learnId: "brady-tests", keywords: ["ecg", "monitor", "holter"] }),
      article("pacemaker", "Pacemakers: who needs one", 3, { learnId: "brady-pacemaker", keywords: ["pacemaker", "treatment"] }),
      article("pacemaker-fitting", "Having a pacemaker fitted", 4, { learnId: "brady-pacemaker-fitting", keywords: ["pacemaker", "operation", "recovery"] }),
      article("medicines-review", "Medicines that slow the heart", 3, { learnId: "brady-medicines-review", keywords: ["beta blockers", "digoxin", "medicines"] }),
    ],
    liveWell: [
      article("living-pacemaker", "Living with a pacemaker", 3, { learnId: "brady-living-pacemaker", keywords: ["pacemaker", "phones", "magnets", "airport"] }),
      article("driving", "Driving after a pacemaker", 2, { learnId: "brady-driving", keywords: ["driving", "dvla"] }),
      article("activity", "Getting active again", 3, { learnId: "brady-activity", keywords: ["exercise", "activity", "arm"] }),
      article("checks", "Pacemaker checks", 2, { learnId: "brady-checks", keywords: ["checks", "clinic", "battery"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-bhf-what-is-a-pacemaker", title: "What is a pacemaker and how does it work?", kind: "video", duration: "1:49", url: "https://www.youtube.com/watch?v=DoYDhVrjBbY", extra: "How a pacemaker works and is fitted", publisher: "British Heart Foundation", keywords: ["pacemaker", "fitting", "recovery"] },
      { id: "yt-bhf-complete-heart-block", title: "What is complete heart block?", kind: "video", duration: "1:06", url: "https://www.youtube.com/watch?v=SApPLEhd_34", extra: "How complete heart block affects the heart", publisher: "British Heart Foundation", keywords: ["heart block", "complete", "third degree"] },
      { id: "yt-royalfree-having-a-pacemaker", title: "Having a pacemaker", kind: "video", duration: "3:17", url: "https://www.youtube.com/watch?v=IzdbZQe6Y2w", extra: "For patients coming in for a pacemaker", publisher: "Royal Free London NHS Foundation Trust", keywords: ["pacemaker", "hospital", "procedure"] },
    ],
    sources: [source(NHS, "Pacemaker implantation"), ARRHYTHMIA_ALLIANCE, BHF],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-bhf-alan-pacemaker", person: "Alan", title: "British Heart Foundation - Having a pacemaker fitted, Alan's story", channel: "British Heart Foundation", url: "https://www.youtube.com/watch?v=Ds_tGRilpJs", duration: "2:09", about: "Alan talks about how he found out he needed a pacemaker, and how his quality of life improved after he had one fitted." },
      { id: "yt-aa-paul-pacemaker", person: "Paul", title: "Pacemaker Patient Story (Paul W)", channel: "Arrhythmia Alliance", url: "https://www.youtube.com/watch?v=BDlZOlyaglc", duration: "23:31", about: "Paul shares his own experience of having a pacemaker." },
      { id: "yt-aa-carole-leadless", person: "Carole", title: "Leadless Pacemaker Patient Story (Carole)", channel: "Arrhythmia Alliance", url: "https://www.youtube.com/watch?v=wE-gRE89vWQ", duration: "17:27", about: "Carole shares her own experience of having a leadless pacemaker." },
    ],
    askDoctor: [
      "Is my slow heart rate causing my symptoms?",
      "Could any of my medicines be slowing my heart?",
      "Do I need a pacemaker, and what type?",
      "When can I drive and lift my arm after the operation?",
    ],
    related: [
      { groupId: "blood-pressure", conditionId: "low-blood-pressure" },
      { groupId: "heart-rhythm", conditionId: "atrial-fibrillation" },
      { groupId: "heart-attack", conditionId: "heart-failure" },
    ],
  },
};

export const ectopicBeats: LibraryCondition = {
  id: "ectopic-beats",
  title: "Ectopic beats",
  summary: "Extra or early heartbeats that can feel like a skipped beat, a flutter or a thump. They are very common and usually harmless, though they can be unsettling. Knowing what makes them more likely, and when to get them checked, helps.",
  facts: ["Most people have them at some point", "Usually harmless to the heart", "Often felt at rest or at night"],
  keywords: ["ectopic beats", "skipped beat", "palpitations", "extra beats", "flutter", "thump"],
  content: {
    understand: [
      article("what-it-is", "What ectopic beats are", 3, { learnId: "eb-what-it-is", blurb: "An early beat, and the pause that follows.", extra: "With a diagram", keywords: ["early beat", "extra beat"] }),
      article("feelings", "Skipped, extra or thumping beats", 2, { learnId: "eb-feelings", keywords: ["skipped", "thump", "flutter"] }),
      article("causes", "What makes them more likely", 3, { learnId: "eb-causes", keywords: ["caffeine", "stress", "alcohol"] }),
      article("harmless", "When they are harmless, and when to get checked", 3, { learnId: "eb-harmless", keywords: ["harmless", "checked", "gp"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("tests", "ECG, monitors and the echo", 3, { learnId: "eb-tests", keywords: ["ecg", "monitor", "echo"] }),
      article("triggers", "Cutting down on triggers", 3, { learnId: "eb-triggers", keywords: ["triggers", "caffeine", "sleep"] }),
      article("treatment", "Do they need treatment?", 3, { learnId: "eb-treatment", keywords: ["treatment", "beta blockers", "ablation"] }),
      article("urgent", "Symptoms that need urgent help", 2, { learnId: "eb-urgent", keywords: ["urgent", "999", "chest pain"] }),
    ],
    liveWell: [
      article("noticing-less", "Noticing them less", 3, { learnId: "eb-noticing-less", keywords: ["noticing", "attention", "calm"] }),
      article("exercise", "Exercise and ectopic beats", 3, { learnId: "eb-exercise", keywords: ["exercise", "sport"] }),
      article("night", "Why they can feel worse at night", 2, { learnId: "eb-night", keywords: ["night", "lying down", "sleep"] }),
      article("worry", "Worry, anxiety and palpitations", 3, { learnId: "eb-worry", keywords: ["worry", "anxiety", "palpitations"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-hca-ectopic-beats", title: "What are ectopic beats and are they harmful?", kind: "video", duration: "0:59", url: "https://www.youtube.com/watch?v=HeCj_s0zcXE", extra: "A cardiologist on when they matter", publisher: "HCA Healthcare UK: World-Class Private Healthcare", keywords: ["ectopic beats", "harmless", "irregular heartbeat"] },
      { id: "yt-bhf-ecg", title: "What's an electrocardiogram (ECG)?", kind: "video", duration: "1:50", url: "https://www.youtube.com/watch?v=qsrBlkESI18", extra: "Normal, exercise and 24-hour ECGs", publisher: "British Heart Foundation", keywords: ["ecg", "24-hour ecg", "tests"] },
      { id: "yt-bhf-loop-recorder", title: "What is an implantable loop recorder?", kind: "video", duration: "1:45", url: "https://www.youtube.com/watch?v=jetaCntOXZU", extra: "How a loop recorder is fitted", publisher: "British Heart Foundation", keywords: ["loop recorder", "heart monitor", "tests"] },
    ],
    sources: [source(NHS, "Heart palpitations"), ARRHYTHMIA_ALLIANCE, BHF],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-mayo-theresa-pvc", person: "Theresa", title: "Mayo Clinic Treatment of Irregular Heart Beats – A Patient’s Perspective", channel: "Mayo Clinic", url: "https://www.youtube.com/watch?v=O6qQqRbO04w", duration: "7:47", about: "Theresa talks about her history with premature ventricular contractions (PVCs) and her life after successful cardiac ablation." },
    ],
    askDoctor: [
      "Are my ectopic beats harmless, or do I need more tests?",
      "Could caffeine, alcohol or a medicine be causing them?",
      "Is it safe for me to exercise?",
      "Which symptoms should make me seek help straight away?",
    ],
    related: [
      { groupId: "heart-rhythm", conditionId: "svt" },
      { groupId: "heart-rhythm", conditionId: "atrial-fibrillation" },
      { groupId: "anxiety", conditionId: "anxiety" },
    ],
  },
};

export const bronchiectasis: LibraryCondition = {
  id: "bronchiectasis",
  title: "Bronchiectasis",
  summary: "Airways in the lungs that have become wider and scarred, so mucus collects and infections come back. A daily cough with phlegm is the main sign. Clearing the chest every day, treating flare-ups early and staying active make a real difference.",
  facts: ["Around 1 in 200 UK adults have it", "About 3 in 4 cough up phlegm daily", "Check-ups and tests at least yearly"],
  keywords: ["bronchiectasis", "cough", "phlegm", "mucus", "chest infections", "sputum"],
  content: {
    understand: [
      article("what-it-is", "What bronchiectasis is", 3, { learnId: "bx-what-it-is", blurb: "Widened airways, mucus and the cycle of infection.", extra: "With a diagram", keywords: ["airways", "mucus", "cause"] }),
      article("causes", "Why it happens", 3, { learnId: "bx-causes", keywords: ["causes", "infection", "immune"] }),
      article("symptoms", "Cough, phlegm and flare-ups", 3, { learnId: "bx-symptoms", keywords: ["cough", "phlegm", "flare"] }),
      article("tests", "CT scans and the other tests", 3, { learnId: "bx-tests", keywords: ["ct scan", "sputum test", "tests"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("airway-clearance", "Clearing your chest every day", 4, { learnId: "bx-airway-clearance", keywords: ["airway clearance", "physiotherapy", "breathing"] }),
      article("antibiotics", "Antibiotics and flare-ups", 3, { learnId: "bx-antibiotics", keywords: ["antibiotics", "flare-up", "infection"] }),
      article("inhalers", "Inhalers and nebulisers", 3, { learnId: "bx-inhalers", keywords: ["inhalers", "nebuliser", "saline"] }),
      article("rehab", "Pulmonary rehab and exercise", 3, { learnId: "bx-rehab", keywords: ["pulmonary rehab", "exercise"] }),
    ],
    liveWell: [
      article("flare-plan", "A plan for flare-ups", 3, { learnId: "bx-flare-plan", keywords: ["plan", "flare-up", "rescue"] }),
      article("infections", "Vaccines and avoiding infections", 3, { learnId: "bx-infections", keywords: ["vaccines", "flu", "infections"] }),
      article("phlegm", "Keeping an eye on your phlegm", 2, { learnId: "bx-phlegm", keywords: ["phlegm", "colour", "sputum"] }),
      article("daily-life", "Work, travel and tiredness", 3, { learnId: "bx-daily-life", keywords: ["work", "travel", "tired"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-aluk-acbt", title: "How to clear your airways using the Active Cycle of Breathing Technique | Asthma + Lung UK", kind: "video", duration: "4:08", url: "https://www.youtube.com/watch?v=vhdS5X5G3m4", extra: "A physiotherapist demonstrates the ACBT", publisher: "Asthma + Lung UK", keywords: ["airway clearance", "acbt", "huffing"] },
      { id: "yt-aluk-aerobika", title: "How to clear your airways using the Aerobika OPEP device | Asthma + Lung UK", kind: "video", duration: "4:43", url: "https://www.youtube.com/watch?v=Y68bLKsBLgw", extra: "Clearing phlegm with a handheld device", publisher: "Asthma + Lung UK", keywords: ["airway clearance", "device", "phlegm"] },
      { id: "yt-sth-bx-class", title: "Bronchiectasis Class", kind: "video", duration: "12:08", url: "https://www.youtube.com/watch?v=ttxVo2YsqcM", extra: "A hospital class on bronchiectasis", publisher: "Sheffield Teaching Hospitals NHS Foundation Trust", keywords: ["bronchiectasis", "class", "management"] },
    ],
    sources: [source(NHS, "Bronchiectasis"), ASTHMA_LUNG_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-elf-joyce", person: "Joyce", title: "Joyce's story: living with bronchiectasis", channel: "The European Lung Foundation", url: "https://www.youtube.com/watch?v=RVud3hKqJy0", duration: "6:14", about: "Joyce talks about her life with bronchiectasis, its impact on daily life and ways to keep active." },
      { id: "yt-elf-ed", person: "Ed", title: "Ed Powell: My Experience of Bronchiectasis", channel: "The European Lung Foundation", url: "https://www.youtube.com/watch?v=nemYJfDhmIQ", duration: "6:44", about: "Ed Powell discusses being diagnosed with bronchiectasis in childhood and living a fulfilling life." },
      { id: "yt-irh-brenda", person: "Brenda", title: "L I F E has been a lifeline for me - Brenda's story of living with bronchiectasis", channel: "IRH", url: "https://www.youtube.com/watch?v=sevkol4gIFo", duration: "1:18", about: "Brenda was diagnosed with bronchiectasis in February 2019 and found support through a lung health support group." },
    ],
    askDoctor: [
      "What caused my bronchiectasis?",
      "Can I be shown an airway clearance technique by a physiotherapist?",
      "Should I have a rescue pack of antibiotics at home?",
      "Can I be referred to pulmonary rehabilitation?",
    ],
    related: [
      { groupId: "long-term-lung", conditionId: "copd" },
      { groupId: "long-term-lung", conditionId: "asthma" },
      { groupId: "long-term-lung", conditionId: "pulmonary-fibrosis" },
    ],
  },
};

export const pulmonaryFibrosis: LibraryCondition = {
  id: "pulmonary-fibrosis",
  title: "Pulmonary fibrosis",
  summary: "Scarring of the lungs that makes them stiffer, so breathing gets harder over time. Idiopathic pulmonary fibrosis is the most common type. Medicines can slow the scarring, and oxygen, rehab and support help with everyday life.",
  facts: ["IPF affects almost 40,000 in the UK", "IPF mainly affects people 70 or over", "Existing scarring cannot be reversed"],
  keywords: ["pulmonary fibrosis", "ipf", "lung scarring", "breathless", "dry cough", "interstitial lung disease"],
  content: {
    understand: [
      article("what-it-is", "What pulmonary fibrosis is", 3, { learnId: "pf-what-it-is", blurb: "Scarring in the lungs, and why it makes breathing harder.", extra: "With a diagram", keywords: ["scarring", "lungs", "cause"] }),
      article("types", "Idiopathic pulmonary fibrosis and other types", 3, { learnId: "pf-types", keywords: ["ipf", "types", "ild"] }),
      article("symptoms", "Breathlessness and a dry cough", 3, { learnId: "pf-symptoms", keywords: ["breathless", "cough", "clubbing"] }),
      article("tests", "Breathing tests, scans and the diagnosis", 3, { learnId: "pf-tests", keywords: ["ct scan", "breathing tests", "biopsy"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("antifibrotics", "Medicines that slow the scarring", 4, { learnId: "pf-antifibrotics", keywords: ["antifibrotic", "pirfenidone", "nintedanib"] }),
      article("oxygen", "Oxygen therapy", 3, { learnId: "pf-oxygen", keywords: ["oxygen", "home oxygen"] }),
      article("rehab", "Pulmonary rehab and staying active", 3, { learnId: "pf-rehab", keywords: ["pulmonary rehab", "exercise"] }),
      article("cough", "Managing the cough", 3, { learnId: "pf-cough", keywords: ["cough", "relief"] }),
    ],
    liveWell: [
      article("breathlessness", "Managing breathlessness day to day", 3, { learnId: "pf-breathlessness", keywords: ["breathless", "pacing", "fan"] }),
      article("infections", "Vaccines and chest infections", 2, { learnId: "pf-infections", keywords: ["vaccines", "infection", "flu"] }),
      article("travel", "Travel and flying", 3, { learnId: "pf-travel", keywords: ["travel", "flying", "oxygen"] }),
      article("support", "Support and planning ahead", 3, { learnId: "pf-support", keywords: ["support", "planning", "palliative"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-apf-about-pf", title: "About pulmonary fibrosis and our charity", kind: "video", duration: "2:47", url: "https://www.youtube.com/watch?v=UXechkvPLOY", extra: "A UK charity on pulmonary fibrosis", publisher: "Action for Pulmonary Fibrosis", keywords: ["pulmonary fibrosis", "ipf", "support"] },
      { id: "yt-nhs-pulmonary-rehab-pf", title: "Pulmonary rehabilitation | NHS", kind: "video", duration: "2:54", url: "https://www.youtube.com/watch?v=JGzlcU9PQ-M", extra: "Nurse and patients explain rehab", publisher: "NHS", keywords: ["pulmonary rehab", "exercise", "breathless"] },
      { id: "yt-aluk-managing-breathing", title: "3 Managing my breathing - Keeping active with a lung condition | Asthma + Lung UK", kind: "video", duration: "3:05", url: "https://www.youtube.com/watch?v=q8B5nrhc-Q0", extra: "Managing your breathing while active", publisher: "Asthma + Lung UK", keywords: ["breathing", "breathless", "keep active"] },
    ],
    sources: [source(NHS, "Idiopathic pulmonary fibrosis"), ASTHMA_LUNG_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-western-eric-pf", person: "Eric", title: "Pulmonary Fibrosis Awareness Month | Eric Brown, Pulmonary Fibrosis Patient Story", channel: "WesternTrust", url: "https://www.youtube.com/watch?v=aEnav8n1xBc", duration: "2:22", about: "Eric shares his experience of living with pulmonary fibrosis and the support he has had from the Western Trust's interstitial lung disease team since his diagnosis in 2019." },
      { id: "yt-pft-yvonne-pf", person: "Yvonne", title: "Yvonne Smith's Story Part 1", channel: "Pulmonary Fibrosis Trust", url: "https://www.youtube.com/watch?v=NIRksQ7-ovw", duration: "1:17", about: "Yvonne had never heard of pulmonary fibrosis until her diagnosis; this is the first part of her story." },
      { id: "yt-lewis-manning-brian-ipf", person: "Brian", title: "Brian's Story 🌻 Living with breathlessness caused by Idiopathic Pulmonary Fibrosis 🫁", channel: "Lewis-Manning Hospice Care", url: "https://www.youtube.com/watch?v=ilGpdezb-7U", duration: "7:37", about: "Brian, who has idiopathic pulmonary fibrosis and uses oxygen day and night, talks about living with breathlessness and the hospice sessions that help him." },
    ],
    askDoctor: [
      "What type of pulmonary fibrosis do I have?",
      "Would an antifibrotic medicine help me?",
      "Do I need oxygen, at rest or when I am active?",
      "Can I be referred to pulmonary rehabilitation and a specialist nurse?",
    ],
    related: [
      { groupId: "long-term-lung", conditionId: "copd" },
      { groupId: "long-term-lung", conditionId: "bronchiectasis" },
      { groupId: "anxiety", conditionId: "anxiety" },
    ],
  },
};

export const snoring: LibraryCondition = {
  id: "snoring",
  title: "Snoring",
  summary: "The noise of relaxed tissues in the throat vibrating as air passes during sleep. It is very common and often harmless, but it can disturb a partner's sleep and sometimes points to sleep apnoea. Simple changes help many people snore less.",
  facts: ["Very common, not usually serious", "Worse with weight, smoking, alcohol", "Gasps or pauses? See a GP"],
  keywords: ["snoring", "snore", "partner", "sleep", "noisy breathing"],
  content: {
    understand: [
      article("what-it-is", "Why people snore", 3, { learnId: "sn-what-it-is", blurb: "Relaxed tissues, narrow airways and the sound they make.", extra: "With a diagram", keywords: ["cause", "throat", "airway"] }),
      article("or-apnoea", "Snoring or sleep apnoea?", 3, { learnId: "sn-or-apnoea", keywords: ["sleep apnoea", "gasping", "pauses"] }),
      article("causes", "What makes it worse", 3, { learnId: "sn-causes", keywords: ["weight", "alcohol", "sleeping position"] }),
      article("when-to-see-gp", "When to see a GP", 2, { learnId: "sn-when-to-see-gp", keywords: ["gp", "help"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("self-help", "Weight, alcohol and sleeping position", 3, { learnId: "sn-self-help", keywords: ["weight", "alcohol", "side"] }),
      article("devices", "Mouth devices and nasal strips", 3, { learnId: "sn-devices", keywords: ["mandibular device", "nasal strips", "dilators"] }),
      article("nose", "A blocked nose and allergies", 3, { learnId: "sn-nose", keywords: ["blocked nose", "allergies", "sprays"] }),
      article("surgery", "Is surgery ever the answer?", 2, { learnId: "sn-surgery", keywords: ["surgery", "operation"] }),
    ],
    liveWell: [
      article("partner", "Sleeping beside someone who snores", 3, { learnId: "sn-partner", keywords: ["partner", "earplugs", "sleep"] }),
      article("routine", "A better night's routine", 3, { learnId: "sn-routine", keywords: ["routine", "sleep"] }),
      article("tiredness", "Daytime tiredness", 2, { learnId: "sn-tiredness", keywords: ["tired", "sleepy", "daytime"] }),
      article("smoking", "Smoking and snoring", 2, { learnId: "sn-smoking", keywords: ["smoking", "quit"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-sn-newcastle", title: "Help for your snoring", kind: "video", duration: "10:46", url: "https://www.youtube.com/watch?v=sujFBut9bAA", extra: "What you can do to reduce snoring", publisher: "NewcastleHospitals", keywords: ["snoring", "tips", "nhs"] },
      { id: "yt-sn-nhs-tips", title: "Tips to help you stop snoring | @DoctorSooj NHS #shorts", kind: "video", duration: "0:29", url: "https://www.youtube.com/watch?v=SsWMAwZlIs0", extra: "A doctor's tips to stop snoring", publisher: "NHS", keywords: ["tips", "partner", "stop snoring"] },
      { id: "yt-sn-nhse-surgery", title: "Evidence-Based Interventions: snoring surgery in the absence of Obstructive Sleep Apnoea (OSA)", kind: "video", duration: "2:32", url: "https://www.youtube.com/watch?v=kfd3r9fppGU", extra: "Why snoring surgery is limited", publisher: "NHS England", keywords: ["surgery", "operation", "sleep apnoea"] },
    ],
    sources: [source(NHS, "Snoring"), SLEEP_CHARITY],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-sn-mike", person: "Mike", title: "Meet Mike: Living with Obstructive Sleep Apnoea", channel: "Sleep Health Foundation", url: "https://www.youtube.com/watch?v=pZNfE6qzr-c", duration: "5:41", about: "Mike, a member of the Sleep Health Foundation's Consumer Reference Council, shares his experience of obstructive sleep apnoea from his first symptoms through to diagnosis and treatment." },
      { id: "yt-sn-paul", person: "Paul", title: "Paul's sleep apnoea story on Goodnight Britain", channel: "Michael Oko", url: "https://www.youtube.com/watch?v=5Hhzk2J1eS0", duration: "9:48", about: "Paul, a lorry driver, undergoes CPAP treatment for sleep apnoea on the BBC show Goodnight Britain." },
      { id: "yt-sn-kath", person: "Kath", title: "The Masked Anchorman - a story of Hope!", channel: "The Masked Anchorman", url: "https://www.youtube.com/watch?v=DhoXhRBqLuo", duration: "13:13", about: "An interview with Kath Hope of Hope2Sleep, one of the UK's leading campaigners, who stopped breathing 32 times an hour when she went to sleep." },
    ],
    askDoctor: [
      "Could my snoring be sleep apnoea?",
      "Would a mouth device help me, and where can I get one?",
      "Could a blocked nose or allergy be adding to it?",
      "Do I need a sleep study?",
    ],
    related: [
      { groupId: "sleep-breathing", conditionId: "sleep-apnoea" },
      { groupId: "sleep", conditionId: "insomnia" },
      { groupId: "blood-pressure", conditionId: "high-blood-pressure" },
    ],
  },
};
