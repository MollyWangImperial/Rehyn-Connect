import type { LibraryCondition } from "../library";
import { ACTION_BLADDER_CANCER, article, BLOOD_CANCER_UK, CANCER_RESEARCH_UK, EVE_APPEAL, MACMILLAN, MARIE_CURIE, NHS, OVARIAN_CANCER_ACTION, PANCREATIC_CANCER_UK, piece, ROY_CASTLE, source, SWALLOWS } from "../library-helpers";

// Cancer & recovery, the rest of the section: lung cancer and melanoma; the blood cancers; the women's cancers;
// head and neck, bladder, kidney and pancreatic cancer; lymphoedema; and living with secondary cancer. Same shape
// as the pages in cancer-mind-digestion.ts.

export const lungCancer: LibraryCondition = {
  id: "lung",
  title: "Lung cancer",
  summary: "Recovery after treatment for lung cancer: surgery, radiotherapy, chemotherapy or newer targeted and immunotherapy drugs, and lungs that may feel different afterwards. Breathlessness and tiredness are common, and there is a lot of help, from breathing techniques to rehab.",
  facts: ["Third most common cancer in the UK", "80 to 85 in 100 are non-small cell", "Breathing often improves with exercise"],
  keywords: ["lung cancer", "breathless", "lobectomy", "immunotherapy", "radiotherapy"],
  content: {
    understand: [
      article("what-you-had", "Your treatment, explained after the fact", 4, { learnId: "lc-what-you-had", blurb: "Surgery, radiotherapy, chemotherapy, targeted drugs and immunotherapy.", keywords: ["surgery", "chemotherapy", "immunotherapy"] }),
      article("types", "Non-small cell, small cell and the stage", 3, { learnId: "lc-types", keywords: ["non-small cell", "small cell", "stage"] }),
      article("follow-up", "Follow-up: scans and appointments", 3, { learnId: "lc-follow-up", keywords: ["follow-up", "ct scan", "appointments"] }),
      article("recurrence", "The worry about it coming back", 3, { learnId: "lc-recurrence", keywords: ["recurrence", "worry", "signs"] }),
    ],
    recover: [
      article("breathlessness", "Breathlessness after treatment", 4, { learnId: "lc-breathlessness", keywords: ["breathless", "breathing", "techniques"] }),
      article("fatigue", "Tiredness after treatment", 3, { learnId: "lc-fatigue", keywords: ["tired", "fatigue", "pacing"] }),
      article("chest", "Cough, pain and the chest after surgery", 3, { learnId: "lc-chest", keywords: ["cough", "pain", "scar"] }),
      article("activity", "Getting active again", 3, { learnId: "lc-activity", keywords: ["exercise", "rehab", "walking"] }),
    ],
    liveWell: [
      article("smoking", "Stopping smoking, even now", 3, { learnId: "lc-smoking", keywords: ["smoking", "quit"] }),
      article("eating", "Eating well when appetite is low", 3, { learnId: "lc-eating", keywords: ["appetite", "food", "weight"] }),
      article("work", "Work and money", 3, { learnId: "lc-work", keywords: ["work", "money", "benefits"] }),
      article("mood", "The low months after treatment ends", 3, { learnId: "lc-mood", keywords: ["mood", "anxious", "depression"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-macmillan-lung-stages", title: "Stages of Lung Cancer Explained By Dr Ranj", kind: "video", duration: "13:07", url: "https://www.youtube.com/watch?v=n6TE-Nkws6Q", extra: "Symptoms, testing, stages and treatment", publisher: "Macmillan Cancer Support", keywords: ["stages", "treatment", "symptoms"] },
      { id: "yt-roycastle-breathlessness", title: "Living with Lung Cancer - Breathlessness", kind: "video", duration: "2:45", url: "https://www.youtube.com/watch?v=_pZcKUPIFuE", extra: "Living with Lung Cancer series", publisher: "Roy Castle Lung Cancer Foundation", keywords: ["breathlessness", "living with", "coping"] },
      { id: "yt-goldenjubilee-after-surgery", title: "Lung Surgery Journey: After Your Operation", kind: "video", duration: "5:20", url: "https://www.youtube.com/watch?v=vBs7LhRRNd4", extra: "What to expect after your operation", publisher: "NHS Golden Jubilee", keywords: ["surgery", "recovery", "hospital"] },
    ],
    sources: [source(NHS, "Lung cancer"), ROY_CASTLE, MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-cait-lung", person: "Cait", title: "Lung Cancer Treatment: Cait's Story | Cancer Research UK", channel: "Cancer Research UK", url: "https://www.youtube.com/watch?v=3mcWSmPXFtM", duration: "2:04", about: "Cait shares her experience of lung cancer treatment, which started with chemotherapy, then radiotherapy, before a new immunotherapy drug." },
      { id: "yt-julie-lung", person: "Julie", title: "Julie's lung cancer story", channel: "Roy Castle Lung Cancer Foundation", url: "https://www.youtube.com/watch?v=XwE2-VDqUk0", duration: "6:53", about: "Julie was diagnosed with stage 3 small cell lung cancer and, after chemotherapy, radiotherapy and a clinical trial, is determined not to let everything be about her diagnosis." },
      { id: "yt-ian-lung", person: "Ian", title: "Ian's lung cancer story", channel: "Roy Castle Lung Cancer Foundation", url: "https://www.youtube.com/watch?v=9nZ0AAIeI4M", duration: "7:35", about: "Ian shares his lung cancer story just a month after his surgery, highlighting the importance of early detection." },
    ],
    askDoctor: [
      "What type and stage was my lung cancer, and what does that mean now?",
      "Can I be referred to pulmonary rehab or a breathlessness service?",
      "What symptoms should I report between appointments?",
      "Can I get help to stop smoking?",
    ],
    related: [
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
      { groupId: "long-term-lung", conditionId: "copd" },
      { groupId: "advanced-cancer", conditionId: "secondary-cancer" },
    ],
  },
};

export const melanoma: LibraryCondition = {
  id: "melanoma",
  title: "Melanoma skin cancer",
  summary: "Life after treatment for melanoma, the skin cancer that can spread if it is not found early. Many people need only surgery; others have immunotherapy or targeted drugs. Checking your skin, sun safety and keeping follow-up appointments matter from now on.",
  facts: ["Surgery is the main treatment", "Check your skin at least monthly", "Never use a sunbed or sunlamp"],
  keywords: ["melanoma", "skin cancer", "mole", "immunotherapy", "sun"],
  content: {
    understand: [
      article("what-it-is", "What melanoma is", 3, { learnId: "mel-what-it-is", blurb: "Moles, pigment cells and why early matters.", extra: "With a diagram", keywords: ["mole", "skin", "cause"] }),
      article("stage", "Stage and what your results mean", 3, { learnId: "mel-stage", keywords: ["stage", "thickness", "results"] }),
      article("follow-up", "Follow-up and appointments", 3, { learnId: "mel-follow-up", keywords: ["follow-up", "scans"] }),
      article("recurrence", "The worry about it coming back", 3, { learnId: "mel-recurrence", keywords: ["recurrence", "worry"] }),
    ],
    recover: [
      article("surgery", "Surgery, scars and lymph nodes", 3, { learnId: "mel-surgery", keywords: ["surgery", "scar", "lymph nodes"] }),
      article("immunotherapy", "Immunotherapy and targeted drugs", 4, { learnId: "mel-immunotherapy", keywords: ["immunotherapy", "targeted", "braf"] }),
      article("side-effects", "Managing side effects", 3, { learnId: "mel-side-effects", keywords: ["side effects", "rash", "tired"] }),
      article("swelling", "Swelling after lymph node surgery", 3, { learnId: "mel-swelling", keywords: ["lymphoedema", "swelling"] }),
    ],
    liveWell: [
      article("sun", "Sun safety from now on", 3, { learnId: "mel-sun", keywords: ["sun", "sunscreen", "shade"] }),
      article("skin-checks", "Checking your skin each month", 3, { learnId: "mel-skin-checks", keywords: ["skin check", "moles"] }),
      article("vitamin-d", "Vitamin D when you avoid the sun", 2, { learnId: "mel-vitamin-d", keywords: ["vitamin d", "supplement"] }),
      article("mood", "Living with the worry", 3, { learnId: "mel-mood", keywords: ["mood", "worry", "anxious"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-nhs-melanoma-signs", title: "Signs of melanoma skin cancer | @DoctorSooj NHS #shorts", kind: "video", duration: "0:38", url: "https://www.youtube.com/watch?v=ux0pyNsuMis", extra: "What to look for when checking skin", publisher: "NHS", keywords: ["signs", "skin check", "mole"] },
      { id: "yt-uhl-immunotherapy-side-effects", title: "Side effects of immunotherapy | UHL NHS Trust", kind: "video", duration: "5:00", url: "https://www.youtube.com/watch?v=LRAA78U9g54", extra: "Common side effects and when to call", publisher: "Leicester's Hospitals", keywords: ["immunotherapy", "side effects", "care team"] },
      { id: "yt-chesterfield-sun-awareness", title: "Sun Awareness Week 2021 - Protect Yourself Against Skin Cancer", kind: "video", duration: "3:54", url: "https://www.youtube.com/watch?v=FLP-8dbkG4I", extra: "A skin cancer nurse on sun safety", publisher: "Chesterfield Royal Hospital", keywords: ["sun safety", "skin cancer", "nurse"] },
    ],
    sources: [source(NHS, "Melanoma skin cancer"), MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-daphne-macmillan", person: "Daphne", title: "Living on your own with cancer - Macmillan Cancer Support (Daphne's story)", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=jEcm4ddkdaY", duration: "1:44", about: "Daphne talks about living on her own after being diagnosed with a malignant melanoma, and the company and support of a Macmillan volunteer service manager." },
      { id: "yt-julie-cardiff-vale", person: "Julie", title: "Melanoma Skin Cancer: Julie’s Story & Early Symptoms | Cardiff & Vale NHS", channel: "Cardiff and Vale University Health Board", url: "https://www.youtube.com/watch?v=4X7kS6k9Mw0", duration: "3:47", about: "Julie shares her journey with melanoma skin cancer, from discovering an irregular mole to diagnosis, surgery, immunotherapy and managing long-term side effects." },
      { id: "yt-myrna-uhp", person: "Myrna", title: "Myrna's story - How immunotherapy is helping patients with melanoma at UHP", channel: "UHP_NHS", url: "https://www.youtube.com/watch?v=J1rq8KGBN0M", duration: "3:50", about: "Myrna's story of how immunotherapy is helping patients with melanoma at University Hospitals Plymouth NHS Trust." },
    ],
    askDoctor: [
      "What stage was my melanoma, and what follow-up will I have?",
      "How should I check my skin, and what should I look for?",
      "Which side effects of my treatment should I report straight away?",
      "Do I need vitamin D tablets?",
    ],
    related: [
      { groupId: "after-treatment", conditionId: "lymphoedema" },
      { groupId: "gout-vitamins", conditionId: "vitamin-d-deficiency" },
      { groupId: "anxiety", conditionId: "anxiety" },
    ],
  },
};

export const lymphoma: LibraryCondition = {
  id: "lymphoma",
  title: "Lymphoma",
  summary: "A cancer of the lymphatic system, in two main kinds: Hodgkin and non-Hodgkin lymphoma. Some types are treated straight away and many respond very well; others grow slowly and are watched before any treatment. Infections, tiredness and late effects are worth knowing about.",
  facts: ["The most common blood cancer in the UK", "There are over 60 types of lymphoma", "Slow-growing types may be watched first"],
  keywords: ["lymphoma", "hodgkin", "non-hodgkin", "lymph nodes", "watch and wait"],
  content: {
    understand: [
      article("what-it-is", "What lymphoma is", 3, { learnId: "lym-what-it-is", blurb: "The lymphatic system, and the white cells that grow out of control.", extra: "With a diagram", keywords: ["lymphatic", "lymph nodes", "cause"] }),
      article("types", "Hodgkin and non-Hodgkin lymphoma", 3, { learnId: "lym-types", keywords: ["hodgkin", "non-hodgkin", "types"] }),
      article("tests", "Scans, biopsies and the stage", 3, { learnId: "lym-tests", keywords: ["biopsy", "pet scan", "stage"] }),
      article("watch-wait", "Watch and wait", 3, { learnId: "lym-watch-wait", keywords: ["watch and wait", "active monitoring"] }),
    ],
    recover: [
      article("treatments", "Chemotherapy, immunotherapy and radiotherapy", 4, { learnId: "lym-treatments", keywords: ["chemotherapy", "rituximab", "radiotherapy"] }),
      article("infections", "Infections and your immune system", 3, { learnId: "lym-infections", keywords: ["infection", "fever", "neutropenia"] }),
      article("fatigue", "Tiredness during and after treatment", 3, { learnId: "lym-fatigue", keywords: ["tired", "fatigue"] }),
      article("late-effects", "Late effects to know about", 3, { learnId: "lym-late-effects", keywords: ["late effects", "heart", "lungs"] }),
    ],
    liveWell: [
      article("follow-up", "Follow-up after treatment", 3, { learnId: "lym-follow-up", keywords: ["follow-up", "checks"] }),
      article("work", "Work and money", 3, { learnId: "lym-work", keywords: ["work", "money"] }),
      article("fertility", "Fertility and family plans", 3, { learnId: "lym-fertility", keywords: ["fertility", "family"] }),
      article("mood", "Mood and living with uncertainty", 3, { learnId: "lym-mood", keywords: ["mood", "worry"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-la-what-is-lymphoma", title: "What is lymphoma - an animated introduction to lymphoma", kind: "video", duration: "3:00", url: "https://www.youtube.com/watch?v=6Z9sdEnwduQ", extra: "An animated introduction to lymphoma", publisher: "Lymphoma Action", keywords: ["lymphoma", "lymphatic system", "introduction"] },
      { id: "yt-la-staging", title: "Staging of lymphoma", kind: "video", duration: "3:21", url: "https://www.youtube.com/watch?v=b7PXgfjr0PA", extra: "A haematologist explains staging", publisher: "Lymphoma Action", keywords: ["staging", "stage", "diagnosis"] },
      { id: "yt-macmillan-watch-wait", title: "Watch and wait | Lymphoma | Macmillan Cancer Support", kind: "video", duration: "4:16", url: "https://www.youtube.com/watch?v=3MrFi77cDvs", extra: "A doctor explains watch and wait", publisher: "Macmillan Cancer Support", keywords: ["watch and wait", "active monitoring", "low grade"] },
    ],
    sources: [source(NHS, "Lymphoma"), BLOOD_CANCER_UK, MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-martin-la", person: "Martin", title: "Fatigue and lymphoma: Martin's story", channel: "Lymphoma Action", url: "https://www.youtube.com/watch?v=N0L_JYH_ywk", duration: "5:26", about: "Martin, diagnosed with diffuse large B-cell lymphoma in 2015, talks about how cancer-related fatigue affected his life and some of the ways he coped with it." },
      { id: "yt-jackie-la", person: "Jackie", title: "Splenic marginal zone lymphoma and active monitoring: Jackie's story", channel: "Lymphoma Action", url: "https://www.youtube.com/watch?v=FkWw4ws-A2M", duration: "7:12", about: "Jackie, diagnosed with splenic marginal zone lymphoma in 2008, talks about 10 years on active monitoring after a splenectomy, and enjoying time with her grandchildren." },
      { id: "yt-juliet-la", person: "Juliet", title: "Lymphoma, fertility and early menopause: Juliet's Story", channel: "Lymphoma Action", url: "https://www.youtube.com/watch?v=Mwhs6RUq4Pc", duration: "7:39", about: "Juliet talks about fertility, motherhood and going through an early menopause after a stem cell transplant as treatment for Hodgkin lymphoma." },
    ],
    askDoctor: [
      "What type of lymphoma do I have, and is it fast or slow growing?",
      "What should I do if I get a temperature?",
      "Which late effects should I watch for, and for how long?",
      "Who do I contact between appointments?",
    ],
    related: [
      { groupId: "blood-cancers", conditionId: "leukaemia" },
      { groupId: "blood-cancers", conditionId: "myeloma" },
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
    ],
  },
};

export const leukaemia: LibraryCondition = {
  id: "leukaemia",
  title: "Leukaemia",
  summary: "Cancers of the blood and bone marrow, either acute (fast) or chronic (slow). Treatment ranges from tablets taken for years to intensive chemotherapy and stem cell transplants. Blood counts, infections and tiredness shape everyday life during and after treatment.",
  facts: ["CLL is the most common type", "Most with CML take a daily tablet", "Transplant recovery: up to a year"],
  keywords: ["leukaemia", "aml", "all", "cll", "cml", "blood cancer", "bone marrow"],
  content: {
    understand: [
      article("what-it-is", "What leukaemia is", 3, { learnId: "leuk-what-it-is", blurb: "The bone marrow, blood cells and what goes wrong.", extra: "With a diagram", keywords: ["bone marrow", "blood cells", "cause"] }),
      article("types", "Acute and chronic types", 3, { learnId: "leuk-types", keywords: ["acute", "chronic", "aml", "cll"] }),
      article("tests", "Blood tests and bone marrow tests", 3, { learnId: "leuk-tests", keywords: ["blood test", "bone marrow biopsy"] }),
      article("counts", "Blood counts: what the numbers mean", 3, { learnId: "leuk-counts", keywords: ["blood count", "neutrophils", "platelets"] }),
    ],
    recover: [
      article("treatments", "Treatments, from tablets to chemotherapy", 4, { learnId: "leuk-treatments", keywords: ["chemotherapy", "targeted", "tablets"] }),
      article("stem-cell", "Stem cell transplants", 4, { learnId: "leuk-stem-cell", keywords: ["stem cell transplant", "donor"] }),
      article("infections", "Infections and staying safe", 3, { learnId: "leuk-infections", keywords: ["infection", "fever", "hygiene"] }),
      article("fatigue", "Tiredness and anaemia", 3, { learnId: "leuk-fatigue", keywords: ["tired", "anaemia"] }),
    ],
    liveWell: [
      article("follow-up", "Follow-up and checks", 3, { learnId: "leuk-follow-up", keywords: ["follow-up", "checks"] }),
      article("eating", "Eating and food safety", 3, { learnId: "leuk-eating", keywords: ["food", "eating", "food safety"] }),
      article("work", "Work and money", 3, { learnId: "leuk-work", keywords: ["work", "money"] }),
      article("mood", "Mood and living with uncertainty", 3, { learnId: "leuk-mood", keywords: ["mood", "worry"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-leukaemiacare-blood-cancer", title: "Leukaemia is a blood cancer", kind: "video", duration: "1:30", url: "https://www.youtube.com/watch?v=IFsN0DgStM8", extra: "The common symptoms of leukaemia", publisher: "Leukaemia Care", keywords: ["leukaemia", "symptoms", "blood cancer"] },
      { id: "yt-cruk-bone-marrow-test", title: "What to expect when you have a Bone Marrow Test", kind: "video", duration: "2:12", url: "https://www.youtube.com/watch?v=bwPP-z8aSjo", extra: "Bone marrow aspiration and biopsy explained", publisher: "Cancer Research UK", keywords: ["bone marrow test", "biopsy", "tests"] },
      { id: "yt-bcuk-infection-symptoms", title: "Blood Cancer UK: Common symptoms of infection", kind: "video", duration: "1:26", url: "https://www.youtube.com/watch?v=wP_DRGkk5yg", extra: "Infection signs to look out for", publisher: "Blood Cancer UK", keywords: ["infection", "symptoms", "sepsis"] },
    ],
    sources: [source(NHS, "Leukaemia"), BLOOD_CANCER_UK, MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-priti-macmillan", person: "Priti", title: "Leukaemia - Priti's Story", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=vw_2kshPCJI", duration: "3:20", about: "Priti describes talking to her son about being diagnosed with leukaemia." },
      { id: "yt-sandra-leukaemiacare", person: "Sandra", title: "Sandra's Acute Myeloid Leukaemia Story", channel: "Leukaemia Care", url: "https://www.youtube.com/watch?v=X-k6RJVEJcg", duration: "4:36", about: "Sandra had infections that didn't quite clear up before her diagnosis of acute myeloid leukaemia, and tells what life is like a decade on." },
      { id: "yt-kris-leukaemiacare", person: "Kris", title: "Kris Griffin - Chronic Myeloid Leukaemia (CML) Story", channel: "Leukaemia Care", url: "https://www.youtube.com/watch?v=qSrAuwXRuaM", duration: "6:01", about: "Kris put symptoms such as night sweats down to other causes, until a blood test at his GP revealed CML." },
    ],
    askDoctor: [
      "What type of leukaemia do I have, and what is the aim of treatment?",
      "What should I do if I get a temperature or feel unwell?",
      "What do my blood counts mean, and when are they checked?",
      "Are there any foods I should avoid?",
    ],
    related: [
      { groupId: "blood-cancers", conditionId: "lymphoma" },
      { groupId: "blood-cancers", conditionId: "myeloma" },
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
    ],
  },
};

export const myeloma: LibraryCondition = {
  id: "myeloma",
  title: "Myeloma",
  summary: "A cancer of plasma cells in the bone marrow that can affect the bones, kidneys and blood. It cannot usually be cured, but treatment can control it, often for years, with periods of remission. Bone health, infections and the kidneys are part of living with it.",
  facts: ["A blood cancer of plasma cells", "Usually treated with drug combinations", "Doctors advise 2 to 3 litres a day"],
  keywords: ["myeloma", "multiple myeloma", "plasma cells", "paraprotein", "bone pain"],
  content: {
    understand: [
      article("what-it-is", "What myeloma is", 3, { learnId: "mye-what-it-is", blurb: "Plasma cells, the bone marrow and paraprotein.", extra: "With a diagram", keywords: ["plasma cells", "bone marrow", "cause"] }),
      article("symptoms", "Bones, kidneys and blood", 3, { learnId: "mye-symptoms", keywords: ["bone pain", "kidneys", "anaemia"] }),
      article("tests", "Tests and the paraprotein", 3, { learnId: "mye-tests", keywords: ["paraprotein", "blood test", "scans"] }),
      article("stages", "Smouldering, active and relapse", 3, { learnId: "mye-stages", keywords: ["smouldering", "remission", "relapse"] }),
    ],
    recover: [
      article("treatments", "Treatment combinations", 4, { learnId: "mye-treatments", keywords: ["treatment", "combination", "steroids"] }),
      article("transplant", "Stem cell transplant", 4, { learnId: "mye-transplant", keywords: ["stem cell transplant", "autologous"] }),
      article("bones", "Bone pain and protecting the bones", 3, { learnId: "mye-bones", keywords: ["bones", "bisphosphonates", "pain"] }),
      article("infections", "Infections and vaccines", 3, { learnId: "mye-infections", keywords: ["infection", "vaccines"] }),
    ],
    liveWell: [
      article("kidneys", "Looking after your kidneys", 3, { learnId: "mye-kidneys", keywords: ["kidneys", "fluids"] }),
      article("fatigue", "Tiredness with myeloma", 3, { learnId: "mye-fatigue", keywords: ["tired", "fatigue"] }),
      article("neuropathy", "Tingling and numbness", 3, { learnId: "mye-neuropathy", keywords: ["neuropathy", "tingling"] }),
      article("mood", "Mood and living with a long-term cancer", 3, { learnId: "mye-mood", keywords: ["mood", "worry"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-cruk-what-is-myeloma", title: "What is Myeloma? | Cancer Research UK 2021", kind: "video", duration: "2:59", url: "https://www.youtube.com/watch?v=cRiu0noufOQ", extra: "How myeloma starts and is treated", publisher: "Cancer Research UK", keywords: ["myeloma", "plasma cells", "symptoms", "treatment"] },
      { id: "yt-muk-bone-disease", title: "Myeloma UK myeloma bone disease", kind: "video", duration: "2:07", url: "https://www.youtube.com/watch?v=RCqFkh1IJg4", extra: "An animation on myeloma bone disease", publisher: "Myeloma UK", keywords: ["bones", "bone disease", "pain"] },
      { id: "yt-bcuk-make-the-call", title: "Make the call: blood cancer, infection and sepsis", kind: "video", duration: "3:47", url: "https://www.youtube.com/watch?v=gTL2VR9QSZE", extra: "Infection and sepsis: what to do", publisher: "Blood Cancer UK", keywords: ["infection", "sepsis", "temperature"] },
    ],
    sources: [source(NHS, "Multiple myeloma"), BLOOD_CANCER_UK, MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-lynn-muk", person: "Lynn", title: "Myeloma & Me  - Lynn's Story - Dealing with fatigue", channel: "Myeloma UK", url: "https://www.youtube.com/watch?v=WWDg5kE0L6s", duration: "6:25", about: "Lynn describes living with fatigue, a common challenge of myeloma, as like wading through mud." },
      { id: "yt-roger-muk", person: "Roger", title: "Myeloma & Me - Roger's Story - Dealing with pain", channel: "Myeloma UK", url: "https://www.youtube.com/watch?v=ZJIv24QGFuk", duration: "5:08", about: "Roger Preston talks about living with daily pain from myeloma." },
      { id: "yt-deb-muk", person: "Deb", title: "Myeloma & Me - Deb's Story", channel: "Myeloma UK", url: "https://www.youtube.com/watch?v=9mzcPVHzQ3E", duration: "4:57", about: "Bringing up two young children while taking in a myeloma diagnosis, Deb realised it was okay to ask for help." },
    ],
    askDoctor: [
      "What is my paraprotein level, and what is the plan if it rises?",
      "How can I protect my bones and kidneys?",
      "What should I do if I get a temperature?",
      "Would a stem cell transplant be right for me?",
    ],
    related: [
      { groupId: "blood-cancers", conditionId: "lymphoma" },
      { groupId: "kidneys", conditionId: "chronic-kidney-disease" },
      { groupId: "bone-health", conditionId: "osteoporosis" },
    ],
  },
};

export const ovarianCancer: LibraryCondition = {
  id: "ovarian",
  title: "Ovarian cancer",
  summary: "Recovery after treatment for ovarian cancer, usually surgery and chemotherapy, sometimes followed by maintenance tablets. Surgery may bring on the menopause, and many people have regular CA125 tests. There is support for the body, the mind and the family.",
  facts: ["Most have both surgery and chemotherapy", "Up to 1 in 5 linked to a gene variant", "Recovery from surgery: 6 to 12 weeks"],
  keywords: ["ovarian cancer", "ca125", "parp inhibitor", "brca", "menopause"],
  content: {
    understand: [
      article("what-you-had", "Your treatment, explained after the fact", 4, { learnId: "ov-what-you-had", blurb: "Surgery, chemotherapy and maintenance treatment.", keywords: ["surgery", "chemotherapy"] }),
      article("stage", "Stage and grade", 3, { learnId: "ov-stage", keywords: ["stage", "grade"] }),
      article("follow-up", "Follow-up and the CA125 test", 3, { learnId: "ov-follow-up", keywords: ["follow-up", "ca125"] }),
      article("genes", "BRCA genes and family history", 3, { learnId: "ov-genes", keywords: ["brca", "genetic", "family"] }),
    ],
    recover: [
      article("surgery-recovery", "Recovering from surgery", 3, { learnId: "ov-surgery-recovery", keywords: ["surgery", "recovery"] }),
      article("maintenance", "PARP inhibitors and maintenance treatment", 3, { learnId: "ov-maintenance", keywords: ["parp", "olaparib", "maintenance"] }),
      article("menopause", "Menopause after surgery", 3, { learnId: "ov-menopause", keywords: ["menopause", "hot flushes", "hrt"] }),
      article("fatigue", "Tiredness after treatment", 3, { learnId: "ov-fatigue", keywords: ["tired", "fatigue"] }),
    ],
    liveWell: [
      article("bowels-bladder", "Bowel and bladder changes", 3, { learnId: "ov-bowels-bladder", keywords: ["bowel", "bladder"] }),
      article("relationships", "Sex, intimacy and partners", 3, { learnId: "ov-relationships", keywords: ["sex", "intimacy"] }),
      article("work", "Work and money", 3, { learnId: "ov-work", keywords: ["work", "money"] }),
      article("mood", "The low months after treatment ends", 3, { learnId: "ov-mood", keywords: ["mood", "worry"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-eve-brca-hereditary", title: "Ovarian Cancer - Your Questions Answered: BRCA and Hereditary Links", kind: "video", duration: "9:09", url: "https://www.youtube.com/watch?v=gO2QIcfUtww", extra: "A GP answers BRCA questions", publisher: "Eve Appeal", keywords: ["brca", "genetic", "hereditary", "family"] },
      { id: "yt-ovacome-menopause", title: "Understanding and managing menopause after ovarian cancer treatment", kind: "video", duration: "56:23", url: "https://www.youtube.com/watch?v=-LGB4mZ9JTo", extra: "An oncologist on menopause after treatment", publisher: "Ovacome - the ovarian cancer charity", keywords: ["menopause", "hrt", "hot flushes"] },
      { id: "yt-oca-parp-inhibitors", title: "Learn all about PARP inhibitors with Dr Jon Krell, Consultant Medical Oncologist", kind: "video", duration: "58:46", url: "https://www.youtube.com/watch?v=i8Gy5OQMAlE", extra: "An oncologist explains PARP inhibitors", publisher: "Ovarian Cancer Action UK", keywords: ["parp", "olaparib", "maintenance"] },
    ],
    sources: [source(NHS, "Ovarian cancer"), OVARIAN_CANCER_ACTION, EVE_APPEAL, MACMILLAN],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-stephanie-target", person: "Stephanie", title: "My experience: Stephanie - Target Ovarian Cancer", channel: "Target Ovarian Cancer", url: "https://www.youtube.com/watch?v=pe-9DOhLz6Q", duration: "1:38", about: "Stephanie tells Target Ovarian Cancer about her experience of being diagnosed with ovarian cancer, and her treatment." },
      { id: "yt-irene-target", person: "Irene", title: "Irene talks about her ovarian cancer diagnosis and treatment - Target Ovarian Cancer", channel: "Target Ovarian Cancer", url: "https://www.youtube.com/watch?v=ZeW8evlCvSw", duration: "2:13", about: "Irene, who attended Target Ovarian Cancer's Being Together support day in Plymouth, talks about her diagnosis and treatment." },
      { id: "yt-jackie-ovacome", person: "Jackie", title: "Jackie's story", channel: "Ovacome - the ovarian cancer charity", url: "https://www.youtube.com/watch?v=nc65BNjzMvs", duration: "7:33", about: "Jackie, diagnosed with stage 1 ovarian cancer in 2009 when she was 39, shares her experiences with Ovacome." },
    ],
    askDoctor: [
      "What stage and type was my cancer, and what follow-up will I have?",
      "Should I have genetic testing, and should my family?",
      "Is maintenance treatment right for me?",
      "Can I take HRT?",
    ],
    related: [
      { groupId: "womens-cancers", conditionId: "womb" },
      { groupId: "common-cancers", conditionId: "breast" },
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
    ],
  },
};

export const wombCancer: LibraryCondition = {
  id: "womb",
  title: "Womb (endometrial) cancer",
  summary: "Recovery after treatment for womb cancer, which is often found early and treated with surgery, sometimes with radiotherapy or other treatment after. Surgery brings on the menopause if it has not happened already. Follow-up focuses on symptoms to report.",
  facts: ["Surgery is the main treatment", "Usually diagnosed at an early stage", "Report new bleeding between check-ups"],
  keywords: ["womb cancer", "endometrial cancer", "hysterectomy", "uterine", "lynch syndrome"],
  content: {
    understand: [
      article("what-you-had", "Your treatment, explained after the fact", 4, { learnId: "wb-what-you-had", blurb: "Hysterectomy, radiotherapy and other treatments.", keywords: ["hysterectomy", "radiotherapy"] }),
      article("stage", "Stage, grade and type", 3, { learnId: "wb-stage", keywords: ["stage", "grade"] }),
      article("follow-up", "Follow-up and symptoms to report", 3, { learnId: "wb-follow-up", keywords: ["follow-up", "symptoms"] }),
      article("lynch", "Lynch syndrome and your family", 3, { learnId: "wb-lynch", keywords: ["lynch syndrome", "genetic"] }),
    ],
    recover: [
      article("surgery-recovery", "Recovering from a hysterectomy", 3, { learnId: "wb-surgery-recovery", keywords: ["hysterectomy", "recovery"] }),
      article("radiotherapy", "After radiotherapy", 3, { learnId: "wb-radiotherapy", keywords: ["radiotherapy", "side effects"] }),
      article("menopause", "Menopause after treatment", 3, { learnId: "wb-menopause", keywords: ["menopause", "hot flushes"] }),
      article("swelling", "Leg swelling (lymphoedema)", 3, { learnId: "wb-swelling", keywords: ["lymphoedema", "legs"] }),
    ],
    liveWell: [
      article("bowels-bladder", "Bowel and bladder changes", 3, { learnId: "wb-bowels-bladder", keywords: ["bowel", "bladder"] }),
      article("relationships", "Sex, intimacy and partners", 3, { learnId: "wb-relationships", keywords: ["sex", "intimacy"] }),
      article("activity", "Activity and recovery", 3, { learnId: "wb-activity", keywords: ["activity", "exercise"] }),
      article("mood", "The low months after treatment ends", 3, { learnId: "wb-mood", keywords: ["mood", "worry"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-peaches-surgery-recovery", title: "Recovery from womb cancer surgery", kind: "video", duration: "5:20", url: "https://www.youtube.com/watch?v=s14e1i_Gm24", extra: "How surgery may affect you", publisher: "Peaches Womb Cancer Trust", keywords: ["surgery", "recovery", "hysterectomy"] },
      { id: "yt-cruk-pelvic-side-effects", title: "Cancer Treatment | Pelvic and Abdominal Side Effects in Women | Cancer Research UK", kind: "video", duration: "5:37", url: "https://www.youtube.com/watch?v=CC8e9CINg3I", extra: "Side effects of pelvic radiotherapy", publisher: "Cancer Research UK", keywords: ["radiotherapy", "side effects", "pelvis"] },
      { id: "yt-peaches-understanding", title: "Understanding womb cancer", kind: "video", duration: "6:55", url: "https://www.youtube.com/watch?v=E1F1DMhZapQ", extra: "Cancer of the womb lining explained", publisher: "Peaches Womb Cancer Trust", keywords: ["womb cancer", "endometrial", "overview"] },
    ],
    sources: [source(NHS, "Womb (uterus) cancer"), EVE_APPEAL, MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-daloni-eve", person: "Daloni", title: "Daloni tells her story of living with womb cancer", channel: "The Eve Appeal", url: "https://www.youtube.com/watch?v=6Bo-NbiLVpw", duration: "2:42", about: "At The Eve Appeal's Get Lippy virtual event, Daloni shares her experiences of living with incurable womb cancer." },
      { id: "yt-lydia-eve", person: "Lydia", title: "Lydia's story with womb cancer", channel: "The Eve Appeal", url: "https://www.youtube.com/watch?v=Ax6tRTu1BQQ", duration: "3:46", about: "Lydia tells her story of womb cancer at The Eve Appeal's live virtual Get Lippy event." },
      { id: "yt-venus-macmillan", person: "Venus", title: "Venus' Story", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=KAf5tkYJ-Ic", duration: "3:34", about: "Venus, a teacher, describes how her whole world felt like it had collapsed when she was diagnosed with uterine cancer." },
    ],
    askDoctor: [
      "What stage and grade was my cancer?",
      "Which symptoms should I report between appointments?",
      "Should I be tested for Lynch syndrome?",
      "What can help with menopause symptoms after treatment?",
    ],
    related: [
      { groupId: "womens-cancers", conditionId: "ovarian" },
      { groupId: "after-treatment", conditionId: "lymphoedema" },
      { groupId: "common-cancers", conditionId: "bowel" },
    ],
  },
};

export const cervicalCancer: LibraryCondition = {
  id: "cervical",
  title: "Cervical cancer",
  summary: "Recovery after treatment for cervical cancer: surgery, or radiotherapy with chemotherapy. Treatment can affect fertility and bring on an early menopause, and radiotherapy can change the vagina, bladder and bowel. Specialist nurses can help with every one of these.",
  facts: ["Most common between ages 30 and 35", "Over 3,200 UK diagnoses each year", "Nearly all are caused by HPV"],
  keywords: ["cervical cancer", "hpv", "chemoradiotherapy", "dilators", "early menopause"],
  content: {
    understand: [
      article("what-you-had", "Your treatment, explained after the fact", 4, { learnId: "cx-what-you-had", blurb: "Surgery, radiotherapy and chemotherapy.", keywords: ["surgery", "radiotherapy"] }),
      article("stage", "Stage and what it means", 3, { learnId: "cx-stage", keywords: ["stage"] }),
      article("follow-up", "Follow-up and appointments", 3, { learnId: "cx-follow-up", keywords: ["follow-up"] }),
      article("hpv", "HPV and what it means", 3, { learnId: "cx-hpv", keywords: ["hpv", "virus"] }),
    ],
    recover: [
      article("radiotherapy", "After radiotherapy", 3, { learnId: "cx-radiotherapy", keywords: ["radiotherapy", "side effects"] }),
      article("menopause", "Early menopause after treatment", 3, { learnId: "cx-menopause", keywords: ["menopause", "hrt"] }),
      article("vaginal-changes", "Vaginal changes and dilators", 3, { learnId: "cx-vaginal-changes", keywords: ["dilators", "vaginal"] }),
      article("fertility", "Fertility after treatment", 3, { learnId: "cx-fertility", keywords: ["fertility", "pregnancy"] }),
    ],
    liveWell: [
      article("bowels-bladder", "Bowel and bladder changes", 3, { learnId: "cx-bowels-bladder", keywords: ["bowel", "bladder"] }),
      article("relationships", "Sex, intimacy and partners", 3, { learnId: "cx-relationships", keywords: ["sex", "intimacy"] }),
      article("work", "Work and money", 3, { learnId: "cx-work", keywords: ["work", "money"] }),
      article("mood", "The low months after treatment ends", 3, { learnId: "cx-mood", keywords: ["mood", "worry"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-macmillan-brachytherapy", title: "Radiotherapy for cervical cancer | brachytherapy explained", kind: "video", duration: "1:33", url: "https://www.youtube.com/watch?v=mLiRvZRIiic", extra: "A radiographer explains brachytherapy", publisher: "Macmillan Cancer Support", keywords: ["brachytherapy", "internal radiotherapy", "pain relief"] },
      { id: "yt-cruk-pelvic-side-effects", title: "Cancer Treatment | Pelvic and Abdominal Side Effects in Women | Cancer Research UK", kind: "video", duration: "5:36", url: "https://www.youtube.com/watch?v=CC8e9CINg3I", extra: "Side effects of pelvic radiotherapy", publisher: "Cancer Research UK", keywords: ["radiotherapy side effects", "bladder", "vagina", "fertility"] },
      { id: "yt-macmillan-applicator-removal", title: "Removing the brachytherapy applicator | cervical cancer", kind: "video", duration: "1:19", url: "https://www.youtube.com/watch?v=qm_MjxN-yok", extra: "How the applicator is removed", publisher: "Macmillan Cancer Support", keywords: ["brachytherapy", "applicator", "radiotherapy"] },
    ],
    sources: [source(NHS, "Cervical cancer"), EVE_APPEAL, MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-macmillan-rebecca", person: "Rebecca", title: "Sex, fertility and internal radiotherapy - Macmillan Cancer Support", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=laaCCWN0Ab8", duration: "3:13", about: "Diagnosed with cervical cancer at 26, Rebecca and her husband Scott explain how they dealt with the diagnosis and internal radiotherapy, and how cancer affected their sexual relationship." },
      { id: "yt-su2c-carla", person: "Carla", title: "Cervical Cancer | Carla's story | Stand Up To Cancer", channel: "Stand Up To Cancer UK", url: "https://www.youtube.com/watch?v=UVbuFQwIwvo", duration: "1:53", about: "Carla was diagnosed with cervical cancer in 2012 and went straight on to chemotherapy and radiotherapy, including brachytherapy, and later took on the Great Canoe Challenge." },
      { id: "yt-eve-julia", person: "Julia", title: "Julia shares her experiences of cervical cancer and VAIN", channel: "The Eve Appeal", url: "https://www.youtube.com/watch?v=HvlIjJ3Hb3g", duration: "2:12", about: "At The Eve Appeal's Get Lippy event, Julia describes being diagnosed with cervical cancer after abnormal bleeding, and being found to have VAIN after her treatment." },
    ],
    askDoctor: [
      "What follow-up will I have, and what should I report?",
      "Should I use vaginal dilators, and for how long?",
      "Can I take HRT after my treatment?",
      "Who can I talk to about fertility?",
    ],
    related: [
      { groupId: "womens-cancers", conditionId: "womb" },
      { groupId: "womens-cancers", conditionId: "ovarian" },
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
    ],
  },
};

export const headNeckCancer: LibraryCondition = {
  id: "head-neck",
  title: "Head and neck cancer",
  summary: "Recovery after treatment for cancers of the mouth, throat and voice box. Swallowing, eating, speech, a dry mouth and changes to appearance can all take time to settle. Speech and language therapists, dietitians and dentists are part of the team.",
  facts: ["About 12,200 diagnosed in the UK a year", "Check-ups for at least 5 years", "Dental check-ups every 3 to 6 months"],
  keywords: ["head and neck cancer", "mouth cancer", "throat cancer", "laryngeal", "swallowing", "dry mouth"],
  content: {
    understand: [
      article("what-you-had", "Your treatment, explained after the fact", 4, { learnId: "hn-what-you-had", blurb: "Surgery, radiotherapy and chemotherapy.", keywords: ["surgery", "radiotherapy"] }),
      article("types", "Mouth, throat and voice box cancers", 3, { learnId: "hn-types", keywords: ["mouth", "throat", "larynx"] }),
      article("follow-up", "Follow-up and appointments", 3, { learnId: "hn-follow-up", keywords: ["follow-up"] }),
      article("hpv", "HPV-related throat cancer", 3, { learnId: "hn-hpv", keywords: ["hpv"] }),
    ],
    recover: [
      article("swallowing", "Swallowing after treatment", 4, { learnId: "hn-swallowing", keywords: ["swallowing", "speech and language therapist"] }),
      article("dry-mouth", "Dry mouth and your teeth", 3, { learnId: "hn-dry-mouth", keywords: ["dry mouth", "teeth", "dentist"] }),
      article("speech", "Speech and voice", 3, { learnId: "hn-speech", keywords: ["speech", "voice"] }),
      article("eating", "Eating and nutrition", 3, { learnId: "hn-eating", keywords: ["eating", "nutrition", "feeding tube"] }),
    ],
    liveWell: [
      article("appearance", "Changes to how you look", 3, { learnId: "hn-appearance", keywords: ["appearance", "scars"] }),
      article("smoking-alcohol", "Smoking and alcohol", 3, { learnId: "hn-smoking-alcohol", keywords: ["smoking", "alcohol"] }),
      article("work", "Work and money", 3, { learnId: "hn-work", keywords: ["work", "money"] }),
      article("mood", "The low months after treatment ends", 3, { learnId: "hn-mood", keywords: ["mood", "worry"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-cruk-hn-dry-mouth", title: "Head and Neck Cancer | Radiotherapy Side Effects | Dry mouth | Cancer Research UK", kind: "video", duration: "1:15", url: "https://www.youtube.com/watch?v=HUWPlPtooDQ", extra: "Dry mouth after head and neck radiotherapy", publisher: "Cancer Research UK", keywords: ["dry mouth", "radiotherapy", "side effects"] },
      { id: "yt-cruk-hn-voice", title: "Head and Neck Cancer | Radiotherapy Side Effects | Changes to your voice | Cancer Research UK", kind: "video", duration: "4:10", url: "https://www.youtube.com/watch?v=4MDiRQQTcgc", extra: "Voice changes after radiotherapy", publisher: "Cancer Research UK", keywords: ["voice", "radiotherapy", "side effects"] },
      { id: "yt-mft-hn-slt", title: "HWB - Head & Neck Cancer - Speech and Language Therapist", kind: "video", duration: "3:27", url: "https://www.youtube.com/watch?v=VOOwjHB78Pc", extra: "A speech and language therapist on support", publisher: "MFT NHS Macmillan Personalised Cancer Care", keywords: ["speech", "swallowing", "therapist"] },
    ],
    sources: [MACMILLAN, SWALLOWS, CANCER_RESEARCH_UK, source(NHS, "Mouth cancer and laryngeal cancer")],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-gary-macmillan", person: "Gary", title: "Coping with the side effects of throat cancer - Gary's story", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=B_j8QKqO4Uk", duration: "2:16", about: "Gary was diagnosed with throat cancer after he could not eat or drink properly, and felt supported through the emotional side effects by his family and his Macmillan consultant radiographer." },
      { id: "yt-paul-macmillan", person: "Paul", title: "Paul's Story - Macmillan Cancer Support", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=dLEaqFk_0KY", duration: "3:19", about: "Paul reacted badly to his treatment for throat cancer and needed a feeding tube, and a Macmillan dietitian and team supported him and his wife." },
      { id: "yt-colin-lhnc", person: "Colin", title: "Colin's Story: Laryngectomy", channel: "LHNC - The Liverpool Head and Neck Centre", url: "https://www.youtube.com/watch?v=GH30-4-9KQo", duration: "8:57", about: "Colin speaks about his experience of having a laryngectomy for larynx cancer." },
    ],
    askDoctor: [
      "Can I see a speech and language therapist about swallowing and speech?",
      "How should I look after my teeth and mouth now?",
      "Which symptoms should I report between appointments?",
      "Can I get help to stop smoking or cut down on alcohol?",
    ],
    related: [
      { groupId: "common-cancers", conditionId: "lung" },
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
      { groupId: "depression", conditionId: "depression" },
    ],
  },
};

export const bladderCancer: LibraryCondition = {
  id: "bladder-cancer",
  title: "Bladder cancer",
  summary: "Life after treatment for bladder cancer, which is often found early and treated through the bladder itself, with regular camera checks afterwards. Some people have the bladder removed and live with a urostomy or a new bladder. Stopping smoking helps.",
  facts: ["Over 10,000 diagnosed in the UK yearly", "Cystoscopy is the key follow-up test", "Smoking causes around half of cases"],
  keywords: ["bladder cancer", "cystoscopy", "bcg", "urostomy", "cystectomy"],
  content: {
    understand: [
      article("what-you-had", "Your treatment, explained after the fact", 4, { learnId: "blc-what-you-had", blurb: "Surgery through the bladder, treatment into the bladder, and more.", keywords: ["turbt", "surgery"] }),
      article("types", "Early and muscle-invasive bladder cancer", 3, { learnId: "blc-types", keywords: ["non-muscle invasive", "muscle invasive"] }),
      article("follow-up", "Cystoscopy follow-up", 3, { learnId: "blc-follow-up", keywords: ["cystoscopy", "follow-up"] }),
      article("bcg", "BCG and treatment into the bladder", 3, { learnId: "blc-bcg", keywords: ["bcg", "intravesical"] }),
    ],
    recover: [
      article("cystectomy", "Bladder removal surgery", 4, { learnId: "blc-cystectomy", keywords: ["cystectomy", "surgery"] }),
      article("urostomy", "Living with a urostomy", 3, { learnId: "blc-urostomy", keywords: ["urostomy", "stoma", "bag"] }),
      article("new-bladder", "A new bladder", 3, { learnId: "blc-new-bladder", keywords: ["neobladder"] }),
      article("fatigue", "Tiredness after treatment", 3, { learnId: "blc-fatigue", keywords: ["tired", "fatigue"] }),
    ],
    liveWell: [
      article("smoking", "Stopping smoking", 3, { learnId: "blc-smoking", keywords: ["smoking", "quit"] }),
      article("relationships", "Sex, intimacy and body image", 3, { learnId: "blc-relationships", keywords: ["sex", "intimacy"] }),
      article("work", "Work and travel", 3, { learnId: "blc-work", keywords: ["work", "travel"] }),
      article("mood", "The low months after treatment ends", 3, { learnId: "blc-mood", keywords: ["mood", "worry"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-cruk-turbt", title: "Trans Urethral Resection of a Bladder Tumour (TURBT) | Cancer types | Cancer Research UK", kind: "video", duration: "2:10", url: "https://www.youtube.com/watch?v=kN0ar0UrvME", extra: "The operation, aftercare and when to call", publisher: "Cancer Research UK", keywords: ["turbt", "surgery", "early bladder cancer"] },
      { id: "yt-abcuk-what-is", title: "What is Bladder Cancer", kind: "video", duration: "3:56", url: "https://www.youtube.com/watch?v=i4tJemUSXSw", extra: "An introduction, with where to get support", publisher: "Action Bladder Cancer UK", keywords: ["bladder cancer", "overview", "support"] },
      { id: "yt-uhl-flexible-cystoscopy", title: "Patient video for flexible cystoscopy | UHL NHS Trust", kind: "video", duration: "2:44", url: "https://www.youtube.com/watch?v=JMJwMtMN84Y", extra: "What to expect at a flexible cystoscopy", publisher: "Leicester's Hospitals", keywords: ["cystoscopy", "follow-up", "hospital"] },
    ],
    sources: [source(NHS, "Bladder cancer"), ACTION_BLADDER_CANCER, MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-ravi-fbc", person: "Ravi", title: "Ravi's Bladder Cancer Story", channel: "Fight Bladder Cancer", url: "https://www.youtube.com/watch?v=XlKX96WTN8Y", duration: "6:05", about: "Ravi was diagnosed at 45 after noticing blood in his pee, and has lived with recurring non-invasive bladder cancer for five years, with several surgeries and two rounds of chemotherapy." },
      { id: "yt-liz-stockport", person: "Liz", title: "NHS Stockport CCG Patient Stories - Bladder Cancer", channel: "NHS Stockport CCG", url: "https://www.youtube.com/watch?v=D90XO8KBe2A", duration: "3:18", about: "Stockport resident Liz Wilson explains how the local NHS worked together to treat her bladder cancer and help her recovery." },
      { id: "yt-paul-macmillan", person: "Paul", title: "Paul, Macmillan online community member", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=UBIzW2qUaK8", duration: "1:43", about: "Paul, diagnosed with bladder cancer in September 2010, talks about chatting with people on Macmillan's online community to get through the tough times together." },
    ],
    askDoctor: [
      "What type and stage was my bladder cancer?",
      "How often will I have a cystoscopy?",
      "Which symptoms should I report between appointments?",
      "Can I get help to stop smoking?",
    ],
    related: [
      { groupId: "common-cancers", conditionId: "prostate" },
      { groupId: "other-cancers", conditionId: "kidney-cancer" },
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
    ],
  },
};

export const kidneyCancer: LibraryCondition = {
  id: "kidney-cancer",
  title: "Kidney cancer",
  summary: "Life after treatment for kidney cancer, often surgery to remove part or all of a kidney, sometimes followed by targeted drugs or immunotherapy. Most people live well with one kidney, with regular checks of kidney function and blood pressure.",
  facts: ["One kidney can do the work of two", "Surgery recovery: about 12 weeks", "8 in 10 kidney cancers are renal cell"],
  keywords: ["kidney cancer", "renal cell", "nephrectomy", "one kidney", "immunotherapy"],
  content: {
    understand: [
      article("what-you-had", "Your treatment, explained after the fact", 4, { learnId: "kc-what-you-had", blurb: "Surgery, ablation, targeted drugs and immunotherapy.", keywords: ["nephrectomy", "surgery"] }),
      article("stage", "Stage and what it means", 3, { learnId: "kc-stage", keywords: ["stage"] }),
      article("follow-up", "Follow-up and scans", 3, { learnId: "kc-follow-up", keywords: ["follow-up", "scans"] }),
      article("one-kidney", "Living with one kidney", 3, { learnId: "kc-one-kidney", keywords: ["one kidney"] }),
    ],
    recover: [
      article("surgery-recovery", "Recovering from kidney surgery", 3, { learnId: "kc-surgery-recovery", keywords: ["surgery", "recovery"] }),
      article("drugs", "Targeted drugs and immunotherapy", 4, { learnId: "kc-drugs", keywords: ["targeted", "immunotherapy"] }),
      article("side-effects", "Managing side effects", 3, { learnId: "kc-side-effects", keywords: ["side effects"] }),
      article("fatigue", "Tiredness after treatment", 3, { learnId: "kc-fatigue", keywords: ["tired", "fatigue"] }),
    ],
    liveWell: [
      article("kidney-health", "Looking after your kidney function", 3, { learnId: "kc-kidney-health", keywords: ["kidney function", "egfr"] }),
      article("blood-pressure", "Blood pressure", 3, { learnId: "kc-blood-pressure", keywords: ["blood pressure"] }),
      article("work", "Work and money", 3, { learnId: "kc-work", keywords: ["work", "money"] }),
      article("mood", "The low months after treatment ends", 3, { learnId: "kc-mood", keywords: ["mood", "worry"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-kcuk-powles-symptoms", title: "Professor  Dr.Thomas Powles  - Kidney Cancer Symptoms", kind: "video", duration: "3:59", url: "https://www.youtube.com/watch?v=U91NIBv31_s", extra: "An oncologist on symptoms and treatments", publisher: "Kidney Cancer UK", keywords: ["symptoms", "treatment", "support"] },
      { id: "yt-stepping-hill-lap-nephrectomy", title: "Laparoscopic nephrectomy patient information video - Stepping Hill Hospital", kind: "video", duration: "16:28", url: "https://www.youtube.com/watch?v=2q4BuE4oQJY", extra: "Patient guide to keyhole kidney removal", publisher: "Stepping Hill Urology", keywords: ["nephrectomy", "keyhole surgery", "surgery"] },
      { id: "yt-stepping-hill-robotic-partial", title: "Robotic partial nephrectomy patient information video - Stepping Hill Hospital", kind: "video", duration: "15:13", url: "https://www.youtube.com/watch?v=fbV2EIj4T0c", extra: "Patient guide to robotic partial nephrectomy", publisher: "Stepping Hill Urology", keywords: ["partial nephrectomy", "robotic surgery", "surgery"] },
    ],
    sources: [source(NHS, "Kidney cancer"), MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-adil-macmillan", person: "Adil", title: "The hardest part was speaking up | Adil's story", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=VP_yn-V3xS0", duration: "5:35", about: "Adil was diagnosed with kidney cancer during the height of the COVID-19 pandemic, when hospital wards were quiet, and says the hardest part was speaking up." },
      { id: "yt-jameel-kcuk", person: "Jameel", title: "Kidney Cancer UK: Jameel Qureshi - A Patient's Story", channel: "Kidney Cancer UK", url: "https://www.youtube.com/watch?v=uKGx0IuFyZM", duration: "36:49", about: "Jameel Qureshi talks to Kidney Cancer UK about his experience of a diagnosis of kidney cancer." },
      { id: "yt-dorothy-kcuk", person: "Dorothy", title: "Dorothy MacMillan - My Cancer Journey Part 1", channel: "Kidney Cancer UK", url: "https://www.youtube.com/watch?v=ggbLM1mOPuM", duration: "10:51", about: "Dorothy MacMillan, who has kidney cancer, shares her cancer journey in the first part of a two-part interview." },
    ],
    askDoctor: [
      "How well is my remaining kidney working?",
      "What follow-up scans will I have?",
      "Which painkillers and medicines are safe for my kidney?",
      "Which symptoms should I report between appointments?",
    ],
    related: [
      { groupId: "kidneys", conditionId: "chronic-kidney-disease" },
      { groupId: "blood-pressure", conditionId: "high-blood-pressure" },
      { groupId: "other-cancers", conditionId: "bladder-cancer" },
    ],
  },
};

export const pancreaticCancer: LibraryCondition = {
  id: "pancreatic",
  title: "Pancreatic cancer",
  summary: "Living with pancreatic cancer and its treatment, which can affect digestion, blood sugar and weight. Enzyme capsules, managing diabetes, eating well and controlling pain make a real difference to everyday life, and support is there for families too.",
  facts: ["Most people need enzyme capsules (PERT)", "Can cause type 3c diabetes", "Pain can usually be well controlled"],
  keywords: ["pancreatic cancer", "enzymes", "pert", "jaundice", "whipple"],
  content: {
    understand: [
      article("what-you-had", "Your treatment, explained", 4, { learnId: "panc-what-you-had", blurb: "Surgery, chemotherapy and treatments to ease symptoms.", keywords: ["surgery", "whipple", "chemotherapy"] }),
      article("symptoms", "Jaundice, pain and weight loss", 3, { learnId: "panc-symptoms", keywords: ["jaundice", "pain", "weight loss"] }),
      article("stage", "Stage and treatment options", 3, { learnId: "panc-stage", keywords: ["stage", "options"] }),
      article("follow-up", "Follow-up and appointments", 3, { learnId: "panc-follow-up", keywords: ["follow-up"] }),
    ],
    recover: [
      article("enzymes", "Pancreatic enzyme capsules", 3, { learnId: "panc-enzymes", keywords: ["enzymes", "pert", "creon"] }),
      article("diabetes", "Diabetes after pancreatic cancer", 3, { learnId: "panc-diabetes", keywords: ["diabetes", "blood sugar"] }),
      article("eating", "Eating and weight", 3, { learnId: "panc-eating", keywords: ["eating", "weight", "diet"] }),
      article("pain", "Managing pain", 3, { learnId: "panc-pain", keywords: ["pain", "painkillers"] }),
    ],
    liveWell: [
      article("fatigue", "Tiredness", 3, { learnId: "panc-fatigue", keywords: ["tired", "fatigue"] }),
      article("mood", "Mood and worry", 3, { learnId: "panc-mood", keywords: ["mood", "worry"] }),
      article("family", "Support for family and carers", 3, { learnId: "panc-family", keywords: ["family", "carers"] }),
      article("planning", "Planning ahead, at your own pace", 3, { learnId: "panc-planning", keywords: ["planning", "palliative care"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-pcuk-taking-pert", title: "Taking pancreatic enzyme replacement therapy", kind: "video", duration: "6:14", url: "https://www.youtube.com/watch?v=QR0gDArOZVE", extra: "A specialist nurse on taking enzymes", publisher: "Pancreatic Cancer UK", keywords: ["enzymes", "pert", "digestion"] },
      { id: "yt-pcuk-diabetes", title: "Managing diabetes if you have pancreatic cancer", kind: "video", duration: "7:50", url: "https://www.youtube.com/watch?v=IT13DZbOByk", extra: "What type 3c diabetes is", publisher: "Pancreatic Cancer UK", keywords: ["diabetes", "type 3c", "blood sugar"] },
      { id: "yt-macmillan-explained", title: "Pancreatic cancer explained | Macmillan Cancer Support", kind: "video", duration: "2:18", url: "https://www.youtube.com/watch?v=1642wJdw6yk", extra: "A surgeon on symptoms and treatment", publisher: "Macmillan Cancer Support", keywords: ["pancreatic cancer", "symptoms", "treatment"] },
    ],
    sources: [source(NHS, "Pancreatic cancer"), PANCREATIC_CANCER_UK, MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-frank-pancreatic", person: "Frank", title: "Frank Heaton | My Pancreatic Cancer Story | NHS #clearoncancer", channel: "Cheshire and Merseyside Cancer Alliance", url: "https://www.youtube.com/watch?v=rUvjf6XmzSI", duration: "3:06", about: "Frank, from Burtonwood in Warrington, tells how he was diagnosed with pancreatic cancer and about the care he received from NHS organisations across Cheshire and Merseyside." },
      { id: "yt-bill-pancreatic", person: "Bill", title: "Bill's Story - Macmillan Cancer Support", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=0fYsF3cQBBw", duration: "2:57", about: "Bill's wife Betty was diagnosed with pancreatic cancer in 2007, and Bill describes how their Macmillan nurse, Tony, guided the family in what to do and say." },
      { id: "yt-yasmin-margaret-pancreatic", person: "Yasmin and Margaret", title: "Yasmin & Margaret's story - pancreatic cancer", channel: "Cancer Research UK", url: "https://www.youtube.com/watch?v=OuROEcB2aCc", duration: "2:39", about: "Yasmin and her mother Margaret recount the story of Yasmin's father, Shaukat, and his experience of pancreatic cancer." },
    ],
    askDoctor: [
      "Do I need pancreatic enzyme capsules, and how should I take them?",
      "Should my blood sugar be checked?",
      "Can I see a dietitian?",
      "Who can help with pain and with planning ahead?",
    ],
    related: [
      { groupId: "advanced-cancer", conditionId: "secondary-cancer" },
      { groupId: "diabetes", conditionId: "type-2" },
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
    ],
  },
};

export const lymphoedema: LibraryCondition = {
  id: "lymphoedema",
  title: "Lymphoedema",
  summary: "Long-lasting swelling, often in an arm or leg, that can follow cancer treatment when lymph nodes are removed or treated. It cannot usually be cured, but skin care, compression, exercise and massage keep it under control, and treating infections early matters.",
  facts: ["Over 200,000 people affected in the UK", "Can't be cured, but can be controlled", "Can appear years after treatment"],
  keywords: ["lymphoedema", "swelling", "compression", "cellulitis", "lymph nodes"],
  content: {
    understand: [
      article("what-it-is", "What lymphoedema is", 3, { learnId: "lo-what-it-is", blurb: "The lymphatic system, and why fluid builds up.", extra: "With a diagram", keywords: ["lymphatic", "swelling", "cause"] }),
      article("causes", "Why it can follow cancer treatment", 3, { learnId: "lo-causes", keywords: ["lymph nodes", "surgery", "radiotherapy"] }),
      article("signs", "The early signs", 3, { learnId: "lo-signs", keywords: ["signs", "heaviness", "tight"] }),
      article("diagnosis", "Diagnosis and measuring", 2, { learnId: "lo-diagnosis", keywords: ["diagnosis", "measuring"] }),
    ],
    recover: [
      article("compression", "Compression garments", 3, { learnId: "lo-compression", keywords: ["compression", "sleeve", "stockings"] }),
      article("skin-care", "Skin care every day", 3, { learnId: "lo-skin-care", keywords: ["skin care", "moisturiser"] }),
      article("massage", "Massage and lymphatic drainage", 3, { learnId: "lo-massage", keywords: ["massage", "mld", "sld"] }),
      article("exercise", "Exercise and movement", 3, { learnId: "lo-exercise", keywords: ["exercise", "movement"] }),
    ],
    liveWell: [
      article("cellulitis", "Cellulitis: the signs and what to do", 3, { learnId: "lo-cellulitis", keywords: ["cellulitis", "infection", "antibiotics"] }),
      article("travel", "Travel and flying", 3, { learnId: "lo-travel", keywords: ["travel", "flying"] }),
      article("everyday", "Clothes, shoes and everyday life", 3, { learnId: "lo-everyday", keywords: ["clothes", "shoes", "everyday"] }),
      article("mood", "Living with a visible change", 3, { learnId: "lo-mood", keywords: ["mood", "body image"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-cruk-lymphatic-system", title: "The lymphatic drainage system", kind: "video", duration: "2:00", url: "https://www.youtube.com/watch?v=cnsty5BAD9k", extra: "How the lymphatic system drains fluid", publisher: "Cancer Research UK", keywords: ["lymphatic system", "lymph nodes", "drainage"] },
      { id: "yt-macmillan-compression", title: "Lymphoedema and Compression Garments", kind: "video", duration: "2:02", url: "https://www.youtube.com/watch?v=wfAmozS6CWY", extra: "Types of garment and putting them on", publisher: "Macmillan Cancer Support", keywords: ["compression", "garments", "sleeve"] },
      { id: "yt-cruk-arm-exercises", title: "Arm Exercises for Lymphoedema", kind: "video", duration: "4:14", url: "https://www.youtube.com/watch?v=zcQB6pZmdN0", extra: "Neck, shoulder, arm and hand exercises", publisher: "Cancer Research UK", keywords: ["exercise", "arm", "movement"] },
    ],
    sources: [source(NHS, "Lymphoedema"), MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-fiona-lymphoedema", person: "Fiona", title: "Lymphoedema Awareness Week 2019 - Fiona's story", channel: "Belfast Health and Social Care Trust", url: "https://www.youtube.com/watch?v=tfa9Gb3F7qc", duration: "6:25", about: "Fiona was diagnosed with lymphoedema following an earlier diagnosis of cancer, and tells the story of her diagnosis, the challenges of living with it and how she has overcome them." },
      { id: "yt-simon-lymphoedema", person: "Simon", title: "Simon's Lymphoedema Story", channel: "Cornwall Hospice", url: "https://www.youtube.com/watch?v=KEg5a930oaw", duration: "4:59", about: "Simon had chemotherapy and radiotherapy for throat cancer, which left him with problems including trauma to his lymphatic system, and he talks with his lymphoedema specialist practitioner about his journey to a better quality of life." },
      { id: "yt-irene-betty-lymphoedema", person: "Irene and Betty", title: "Living with lymphoedema - Macmillan Cancer Support", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=A0b_OxPSMJA", duration: "4:10", about: "Irene and Betty talk about what it is like to live with lymphoedema and compression sleeves after having a mastectomy for breast cancer." },
    ],
    askDoctor: [
      "Can I be referred to a lymphoedema service?",
      "Which compression garment is right for me, and how often is it replaced?",
      "What should I do at the first sign of cellulitis?",
      "Should I have antibiotics to keep at home?",
    ],
    related: [
      { groupId: "common-cancers", conditionId: "breast" },
      { groupId: "common-cancers", conditionId: "melanoma" },
      { groupId: "womens-cancers", conditionId: "womb" },
    ],
  },
};

export const secondaryCancer: LibraryCondition = {
  id: "secondary-cancer",
  title: "Living with secondary cancer",
  summary: "When cancer has spread from where it started to other parts of the body. It usually cannot be cured, but treatment can often control it for months or years, ease symptoms and help people live well. Palliative care teams help with this from early on, not only at the end.",
  facts: ["Still the same type as the first cancer", "Palliative care can start at diagnosis", "Hospice care is free"],
  keywords: ["secondary cancer", "metastatic", "advanced cancer", "stage 4", "palliative care"],
  content: {
    understand: [
      article("what-it-is", "What secondary cancer means", 3, { learnId: "sc-what-it-is", blurb: "Cancer that has spread, and what that does and does not mean.", extra: "With a diagram", keywords: ["metastatic", "spread", "stage 4"] }),
      article("treatment-aims", "What treatment can and cannot do", 3, { learnId: "sc-treatment-aims", keywords: ["treatment", "control", "aims"] }),
      article("symptoms", "Symptoms, and getting help with them", 3, { learnId: "sc-symptoms", keywords: ["symptoms", "pain", "breathless"] }),
      article("palliative", "Palliative care is not only for the end", 3, { learnId: "sc-palliative", keywords: ["palliative care", "hospice"] }),
    ],
    recover: [
      article("symptom-control", "Controlling pain and other symptoms", 3, { learnId: "sc-symptom-control", keywords: ["pain", "symptom control"] }),
      article("treatments", "Ongoing treatments", 3, { learnId: "sc-treatments", keywords: ["chemotherapy", "targeted", "radiotherapy"] }),
      article("fatigue", "Tiredness", 3, { learnId: "sc-fatigue", keywords: ["tired", "fatigue"] }),
      article("emergencies", "When to call for urgent help", 3, { learnId: "sc-emergencies", keywords: ["urgent", "999", "acute oncology"] }),
    ],
    liveWell: [
      article("living-well", "Living well day to day", 3, { learnId: "sc-living-well", keywords: ["living well", "energy"] }),
      article("talking", "Talking to family and children", 3, { learnId: "sc-talking", keywords: ["family", "children", "talking"] }),
      article("work-money", "Work, money and benefits", 3, { learnId: "sc-work-money", keywords: ["work", "money", "benefits"] }),
      article("planning", "Planning ahead, at your own pace", 3, { learnId: "sc-planning", keywords: ["planning", "wishes"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-macmillan-pain-advanced", title: "Managing pain during advanced cancer - Macmillan Cancer Support", kind: "video", duration: "3:18", url: "https://www.youtube.com/watch?v=E4zM7g1nipk", extra: "Treatments that reduce pain, explained", publisher: "Macmillan Cancer Support", keywords: ["pain", "advanced cancer", "treatments"] },
      { id: "yt-macmillan-hospices", title: "An introduction to hospices - Macmillan Cancer Support", kind: "video", duration: "5:51", url: "https://www.youtube.com/watch?v=Z19GghZNmy4", extra: "Hospice staff describe care and support", publisher: "Macmillan Cancer Support", keywords: ["hospice", "symptom control", "support"] },
      { id: "yt-macmillan-ppc", title: "Preferred Priorities for Care - Macmillan Cancer Support", kind: "video", duration: "2:14", url: "https://www.youtube.com/watch?v=Cs0rPukkGe0", extra: "About advance care planning", publisher: "Macmillan Cancer Support", keywords: ["planning ahead", "wishes", "advance care planning"] },
    ],
    sources: [source(NHS, "Palliative care"), MARIE_CURIE, MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-paola-palliative", person: "Paola", title: "Paola’s story – Having palliative care", channel: "Marie Curie", url: "https://www.youtube.com/watch?v=MuCFEHjI_f4", duration: "1:05", about: "Paola, aged 57, is living with terminal cancer and shares her experience of palliative care." },
      { id: "yt-paula-secondary-breast", person: "Paula", title: "Breast Cancer Now chats: Secondary breast cancer support - October 2024", channel: "Breast Cancer Now", url: "https://www.youtube.com/watch?v=-6Olaf9Adf0", duration: "56:00", about: "Paula, who is living with secondary breast cancer, shares her experience with a Breast Cancer Now nurse, including her decision to have a mastectomy and then chemotherapy, and the support available." },
      { id: "yt-ciaran-caring", person: "Ciaran", title: "Caring for someone with advanced cancer - Macmillan Cancer Support", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=KZaGDVqr8vE", duration: "8:30", about: "Ciaran talks about caring for his partner with terminal cancer, the emotions they both went through and the support they received from Macmillan." },
    ],
    askDoctor: [
      "What is the aim of my treatment now?",
      "Can I be referred to a palliative care team?",
      "Who do I call, day or night, if I become unwell?",
      "What help is there for my family?",
    ],
    related: [
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
      { groupId: "depression", conditionId: "depression" },
      { groupId: "other-cancers", conditionId: "pancreatic" },
    ],
  },
};
