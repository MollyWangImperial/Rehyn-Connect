import type { LibraryCondition } from "../library";
import { article, BLOOD_CANCER_UK, CANCER_RESEARCH_UK, EVE_APPEAL, MACMILLAN, MARIE_CURIE, NHS, piece, source } from "../library-helpers";

// Cancer & recovery, the second set: non-melanoma skin cancer, MDS and vulval cancer; testicular and penile
// cancer; the digestive cancers (oesophageal, stomach, liver); thyroid cancer; brain tumours, sarcoma and
// mesothelioma; and more of life after treatment and advanced cancer. Same shape as cancer-more.ts.

export const skinCancer: LibraryCondition = {
  id: "skin-cancer",
  title: "Non-melanoma skin cancer",
  summary: "The most common cancers in the UK: basal cell and squamous cell skin cancers. Most are treated with a small operation or treatment to the skin and are cured. Checking your skin, sun safety and follow-up matter, because another one can appear.",
  facts: ["BCC is the most common skin cancer", "Surgery is the main treatment", "Check your skin once a month"],
  keywords: ["skin cancer", "basal cell", "squamous cell", "bcc", "scc", "rodent ulcer"],
  content: {
    understand: [
      article("what-it-is", "Basal cell and squamous cell skin cancer", 3, { learnId: "nmsc-what-it-is", blurb: "The two main types, and how they differ.", extra: "With a diagram", keywords: ["basal cell", "squamous cell"] }),
      article("treatments", "Surgery, creams and other treatments", 3, { learnId: "nmsc-treatments", keywords: ["surgery", "cream", "radiotherapy"] }),
      article("follow-up", "Follow-up and checking your skin", 3, { learnId: "nmsc-follow-up", keywords: ["follow-up", "skin check"] }),
      article("another-one", "Why another one can appear", 3, { learnId: "nmsc-another-one", keywords: ["new skin cancer", "risk"] }),
    ],
    recover: [
      article("wound-care", "Caring for the wound and scar", 3, { learnId: "nmsc-wound-care", keywords: ["wound", "scar", "stitches"] }),
      article("skin-checks", "Checking your skin each month", 3, { learnId: "nmsc-skin-checks", keywords: ["skin check", "spots"] }),
      article("creams", "Living with treatment creams", 3, { learnId: "nmsc-creams", keywords: ["imiquimod", "fluorouracil", "cream"] }),
      article("appearance", "Scars and how you look", 3, { learnId: "nmsc-appearance", keywords: ["scar", "appearance", "face"] }),
    ],
    liveWell: [
      article("sun", "Sun safety from now on", 3, { learnId: "nmsc-sun", keywords: ["sun", "sunscreen"] }),
      article("vitamin-d", "Vitamin D when you avoid the sun", 2, { learnId: "nmsc-vitamin-d", keywords: ["vitamin d"] }),
      article("work-outdoors", "Working or spending time outdoors", 2, { learnId: "nmsc-work-outdoors", keywords: ["outdoors", "work"] }),
      article("mood", "Living with the worry", 3, { learnId: "nmsc-mood", keywords: ["worry", "mood"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-swl-skin-self-exam", title: "Skin Cancer Self Examination", kind: "video", duration: "3:22", url: "https://www.youtube.com/watch?v=7iweKDdpkjs", extra: "A skin cancer nurse shows self-checks", publisher: "NHS South West London", keywords: ["skin check", "self examination", "nurse"] },
      { id: "yt-gstt-mohs-explained", title: "Mohs surgery explained", kind: "video", duration: "6:36", url: "https://www.youtube.com/watch?v=IOFUaT17-dA", extra: "How Mohs surgery works, with risks", publisher: "Guy's and St Thomas' NHS Foundation Trust", keywords: ["mohs surgery", "surgery", "skin cancer"] },
      { id: "yt-uhp-skin-cancer-qa", title: "Dermatology - skin cancer Q&A", kind: "video", duration: "2:19", url: "https://www.youtube.com/watch?v=hRzNkMEpL-E", extra: "Common skin cancer questions answered", publisher: "University Hospitals Plymouth NHS Trust", keywords: ["skin cancer", "types", "dermatology"] },
    ],
    sources: [source(NHS, "Non-melanoma skin cancer"), MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-jeremy-gstt-mohs", person: "Jeremy", title: "Mohs surgery: Jeremy’s story", channel: "Guy's and St Thomas' NHS Foundation Trust", url: "https://www.youtube.com/watch?v=C7kk7DEWYw4", duration: "4:51", about: "Jeremy talks about his experience of having Mohs surgery for skin cancer at the dermatological surgery and laser unit at Guy's and St Thomas'." },
      { id: "yt-james-scf-bcc", person: "James", title: "Skin Cancer Is Serious – Basal Cell Carcinoma Warrior James", channel: "The Skin Cancer Foundation", url: "https://www.youtube.com/watch?v=psepMTS5ylI", duration: "1:55", about: "James, an actor from the UK, had Mohs surgery on his face when he was diagnosed with basal cell carcinoma, and wants people to know that skin cancer is serious." },
      { id: "yt-martin-nccp-sunsmart", person: "Martin", title: "SunSmart Patient Skin Cancer Story, Martin's Story (Full Version)", channel: "National Cancer Control Programme Ireland", url: "https://www.youtube.com/watch?v=S_vlcop5iDA", duration: "3:00", about: "Martin tells his skin cancer story for the SunSmart campaign." },
    ],
    askDoctor: [
      "What type of skin cancer did I have, and has it all been removed?",
      "How often should I check my skin, and what should I look for?",
      "Will I have follow-up appointments?",
      "Do I need vitamin D tablets?",
    ],
    related: [
      { groupId: "common-cancers", conditionId: "melanoma" },
      { groupId: "gout-vitamins", conditionId: "vitamin-d-deficiency" },
      { groupId: "anxiety", conditionId: "anxiety" },
    ],
  },
};

export const mds: LibraryCondition = {
  id: "mds",
  title: "Myelodysplastic syndromes (MDS)",
  summary: "A group of conditions in which the bone marrow does not make enough healthy blood cells. Some people need only regular checks; others have blood transfusions, medicines or, for a few, a stem cell transplant. Tiredness and infections are part of living with it.",
  facts: ["A rare type of blood cancer", "More common in people over 70", "Often develops slowly, over years"],
  keywords: ["mds", "myelodysplastic syndrome", "bone marrow", "transfusion", "anaemia"],
  content: {
    understand: [
      article("what-it-is", "What MDS is", 3, { learnId: "mds-what-it-is", blurb: "The bone marrow, and blood cells that do not mature properly.", extra: "With a diagram", keywords: ["bone marrow", "blood cells"] }),
      article("types", "Lower risk and higher risk MDS", 3, { learnId: "mds-types", keywords: ["risk", "types"] }),
      article("tests", "Blood tests and bone marrow tests", 3, { learnId: "mds-tests", keywords: ["blood test", "bone marrow"] }),
      article("counts", "Blood counts and what they mean", 3, { learnId: "mds-counts", keywords: ["blood count", "anaemia"] }),
    ],
    recover: [
      article("watch-wait", "Watch and wait", 3, { learnId: "mds-watch-wait", keywords: ["watch and wait", "monitoring"] }),
      article("transfusions", "Blood transfusions", 3, { learnId: "mds-transfusions", keywords: ["transfusion", "iron"] }),
      article("treatments", "Medicines and other treatments", 3, { learnId: "mds-treatments", keywords: ["medicines", "azacitidine"] }),
      article("transplant", "Stem cell transplant", 3, { learnId: "mds-transplant", keywords: ["stem cell transplant"] }),
    ],
    liveWell: [
      article("infections", "Infections and staying safe", 3, { learnId: "mds-infections", keywords: ["infection", "fever"] }),
      article("fatigue", "Tiredness and anaemia", 3, { learnId: "mds-fatigue", keywords: ["tired", "anaemia"] }),
      article("bleeding", "Bruising and bleeding", 2, { learnId: "mds-bleeding", keywords: ["bruising", "bleeding", "platelets"] }),
      article("mood", "Mood and living with uncertainty", 3, { learnId: "mds-mood", keywords: ["mood", "worry"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-mayo-what-is-mds", title: "What is Myelodysplastic Syndrome (MDS)? - Mayo Clinic", kind: "video", duration: "4:09", url: "https://www.youtube.com/watch?v=Rb0PkIG_EWs", extra: "An overview, symptoms and diagnosis", publisher: "Mayo Clinic", keywords: ["mds", "symptoms", "diagnosis"] },
      { id: "yt-mdsuk-myelos-hope", title: "Myelo's Hope", kind: "video", duration: "2:30", url: "https://www.youtube.com/watch?v=eo9f1CRQQSA", extra: "An animation for newly diagnosed people", publisher: "MDS UK Patient Support Group", keywords: ["mds", "newly diagnosed", "support"] },
      { id: "yt-bcuk-make-the-call", title: "Make the call: blood cancer, infection and sepsis", kind: "video", duration: "3:46", url: "https://www.youtube.com/watch?v=gTL2VR9QSZE", extra: "Infection and sepsis: what to do", publisher: "Blood Cancer UK", keywords: ["infection", "sepsis", "temperature"] },
    ],
    sources: [source(NHS, "Myelodysplastic syndrome"), BLOOD_CANCER_UK, MACMILLAN],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-claudia-mdsuk", person: "Claudia", title: "09 Claudia Richards", channel: "MDS UK Patient Support Group", url: "https://www.youtube.com/watch?v=erSnRIWUqJE", duration: "3:20", about: "Claudia Richards, an MDS patient and local group coordinator, describes her emotional journey from fraught times at diagnosis to becoming an empowered, educated, active patient." },
      { id: "yt-nicky-dkms", person: "Nicky", title: "Nicky's Story | DKMS UK", channel: "DKMS UK", url: "https://www.youtube.com/watch?v=58YA23MJFmA", duration: "4:59", about: "Nicky, diagnosed with MDS in 2020, tells DKMS UK how she needed a stem cell transplant from an unrelated donor after chemotherapy did not work." },
      { id: "yt-jad-lf", person: "Jad", title: "National MDS Day: Jad Harris' Story", channel: "Leukaemia Foundation", url: "https://www.youtube.com/watch?v=ogTnkW5aU80", duration: "22:56", about: "Jad Harris was told he had MDS at 26, and shares his experiences of a bone marrow transplant, graft-versus-host disease and his recovery." },
    ],
    askDoctor: [
      "Is my MDS lower risk or higher risk?",
      "How often will my blood be checked?",
      "What should I do if I get a temperature or start bleeding?",
      "Would treatment or a transplant be right for me?",
    ],
    related: [
      { groupId: "blood-cancers", conditionId: "leukaemia" },
      { groupId: "blood-cancers", conditionId: "myeloma" },
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
    ],
  },
};

export const vulvalCancer: LibraryCondition = {
  id: "vulval",
  title: "Vulval cancer",
  summary: "Recovery after treatment for vulval cancer, usually surgery, sometimes with radiotherapy. Healing can take time, and treatment can change how the area looks and feels. Specialist nurses can help with wound care, swelling, sex and intimacy, and regular checks.",
  facts: ["Around 1,350 UK diagnoses each year", "8 in 10 cases are in women over 60", "9 in 10 are squamous cell carcinoma"],
  keywords: ["vulval cancer", "vulva", "vulvectomy", "lichen sclerosus"],
  content: {
    understand: [
      article("what-you-had", "Your treatment, explained after the fact", 3, { learnId: "vul-what-you-had", blurb: "Surgery, radiotherapy and other treatments.", keywords: ["surgery", "radiotherapy"] }),
      article("stage", "Stage and what it means", 3, { learnId: "vul-stage", keywords: ["stage"] }),
      article("follow-up", "Follow-up and checks", 3, { learnId: "vul-follow-up", keywords: ["follow-up", "checks"] }),
      article("skin-conditions", "Lichen sclerosus and other skin conditions", 3, { learnId: "vul-skin-conditions", keywords: ["lichen sclerosus", "vin"] }),
    ],
    recover: [
      article("wound", "Wound healing after surgery", 3, { learnId: "vul-wound", keywords: ["wound", "healing"] }),
      article("swelling", "Leg swelling (lymphoedema)", 3, { learnId: "vul-swelling", keywords: ["lymphoedema", "legs"] }),
      article("radiotherapy", "After radiotherapy", 3, { learnId: "vul-radiotherapy", keywords: ["radiotherapy", "skin"] }),
      article("passing-urine", "Passing urine and bowel changes", 3, { learnId: "vul-passing-urine", keywords: ["urine", "bowel"] }),
    ],
    liveWell: [
      article("relationships", "Sex, intimacy and body image", 3, { learnId: "vul-relationships", keywords: ["sex", "intimacy", "body image"] }),
      article("self-checks", "Checking yourself between appointments", 2, { learnId: "vul-self-checks", keywords: ["self-check", "mirror"] }),
      article("work", "Work and everyday life", 3, { learnId: "vul-work", keywords: ["work", "sitting"] }),
      article("mood", "The low months after treatment ends", 3, { learnId: "vul-mood", keywords: ["mood", "worry"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-cruk-pelvic-side-effects", title: "Cancer Treatment | Pelvic and Abdominal Side Effects in Women | Cancer Research UK", kind: "video", duration: "5:36", url: "https://www.youtube.com/watch?v=CC8e9CINg3I", extra: "Side effects of pelvic radiotherapy", publisher: "Cancer Research UK", keywords: ["radiotherapy side effects", "bladder", "vagina", "fertility"] },
      { id: "yt-macmillan-sexual-difficulty", title: "Sexual difficulty for women after cancer treatment - Macmillan Cancer Support", kind: "video", duration: "3:26", url: "https://www.youtube.com/watch?v=y4X0xxLVESw", extra: "Tools for sexual side effects", publisher: "Macmillan Cancer Support", keywords: ["sex", "dilators", "side effects", "women"] },
      { id: "yt-nelca-vulval-referral", title: "What to expect: Vulval Cancer Referral", kind: "video", duration: "3:36", url: "https://www.youtube.com/watch?v=RadEFUl2zaI", extra: "Referral, tests and hospital appointments", publisher: "North East London Cancer Alliance", keywords: ["referral", "tests", "hospital appointments"] },
    ],
    sources: [source(NHS, "Vulval cancer"), EVE_APPEAL, MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-eve-clare", person: "Clare", title: "Clare talks about her experiences with vulval cancer", channel: "The Eve Appeal", url: "https://www.youtube.com/watch?v=RdgLWD8mgVU", duration: "2:46", about: "At The Eve Appeal's Get Lippy event, Clare shares her experiences with vulval cancer and why she wants to break down the taboos around women's bodies and vulvas so everyone can spot the signs and symptoms." },
      { id: "yt-norton-cathy", person: "Cathy", title: "I Knew Something Wasn’t Right: Cathy’s Journey Through Vulvar Cancer", channel: "Norton Healthcare", url: "https://www.youtube.com/watch?v=ChCFMiHc1VY", duration: "3:20", about: "Cathy's vulvar cancer story shows the importance of listening to your body, seeking care early and getting team-based support at Norton Cancer Institute." },
    ],
    askDoctor: [
      "What follow-up will I have, and what should I look out for?",
      "How should I care for the wound at home?",
      "Who can I talk to about sex and intimacy?",
      "Do I need treatment for lichen sclerosus?",
    ],
    related: [
      { groupId: "womens-cancers", conditionId: "cervical" },
      { groupId: "after-treatment", conditionId: "lymphoedema" },
      { groupId: "womens-cancers", conditionId: "womb" },
    ],
  },
};

export const testicularCancer: LibraryCondition = {
  id: "testicular",
  title: "Testicular cancer",
  summary: "Recovery after treatment for testicular cancer, one of the most common cancers in young men. Most men are treated with surgery, sometimes followed by chemotherapy or radiotherapy, and follow-up checks continue for some years. Fertility, hormones and body image are worth talking about.",
  facts: ["Most common in men aged 15 to 49", "Around 2,300 UK diagnoses a year", "Follow-up usually lasts 5 years"],
  keywords: ["testicular cancer", "orchidectomy", "seminoma", "testicle", "fertility"],
  content: {
    understand: [
      article("what-you-had", "Your treatment, explained after the fact", 3, { learnId: "tes-what-you-had", blurb: "Surgery, chemotherapy and radiotherapy.", keywords: ["orchidectomy", "chemotherapy"] }),
      article("types", "Seminoma, non-seminoma and the stage", 3, { learnId: "tes-types", keywords: ["seminoma", "stage"] }),
      article("follow-up", "Follow-up: scans and blood tests", 3, { learnId: "tes-follow-up", keywords: ["follow-up", "tumour markers"] }),
      article("self-checks", "Checking your remaining testicle", 2, { learnId: "tes-self-checks", keywords: ["self-check"] }),
    ],
    recover: [
      article("surgery-recovery", "Recovering from surgery", 3, { learnId: "tes-surgery-recovery", keywords: ["surgery", "recovery"] }),
      article("prosthesis", "A prosthesis: whether to have one", 2, { learnId: "tes-prosthesis", keywords: ["prosthesis", "implant"] }),
      article("fertility", "Fertility and sperm banking", 3, { learnId: "tes-fertility", keywords: ["fertility", "sperm"] }),
      article("hormones", "Testosterone and hormones", 3, { learnId: "tes-hormones", keywords: ["testosterone", "hormones"] }),
    ],
    liveWell: [
      article("relationships", "Sex, intimacy and body image", 3, { learnId: "tes-relationships", keywords: ["sex", "body image"] }),
      article("late-effects", "Late effects of treatment", 3, { learnId: "tes-late-effects", keywords: ["late effects", "heart"] }),
      article("work-study", "Work, study and sport", 3, { learnId: "tes-work-study", keywords: ["work", "study", "sport"] }),
      article("mood", "Mood and talking about it", 3, { learnId: "tes-mood", keywords: ["mood", "talking"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-nhs-testicular", title: "Testicular cancer | NHS", kind: "video", duration: "6:52", url: "https://www.youtube.com/watch?v=-z6QGK_yook", extra: "Two men's experiences, plus expert advice", publisher: "NHS", keywords: ["testicular cancer", "checking", "experiences"] },
      { id: "yt-mac-about-testicular", title: "About Testicular Cancer Symptoms & Treatment", kind: "video", duration: "5:09", url: "https://www.youtube.com/watch?v=ghL0PbS266M", extra: "A doctor explains symptoms and treatments", publisher: "Macmillan Cancer Support", keywords: ["testicular cancer", "treatment", "symptoms"] },
      { id: "yt-nelca-referral", title: "What to expect: Testicular Cancer Referral", kind: "video", duration: "3:30", url: "https://www.youtube.com/watch?v=MQR76ho26b4", extra: "What happens after a hospital referral", publisher: "North East London Cancer Alliance", keywords: ["referral", "tests"] },
    ],
    sources: [source(NHS, "Testicular cancer"), MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-darren-macmillan", person: "Darren", title: "Testicular cancer and the emotional effects - Macmillan Cancer Support", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=OPVHKxUTg84", duration: "4:28", about: "Darren describes being diagnosed with and treated for testicular cancer, the emotions he went through and how Macmillan supported him." },
      { id: "yt-roger-macmillan", person: "Roger", title: "Healthy, active and shocked by cancer | Rogers Story", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=TMPJUz84_Hw", duration: "3:30", about: "Roger, for whom fitness is a huge part of everyday life, ignored weeks of pain before a testicular cancer diagnosis, and shares his story to encourage other men to speak up about their health." },
      { id: "yt-mark-su2c", person: "Mark", title: "Testicular Cancer | Mark's Story | Stand Up To Cancer", channel: "Stand Up To Cancer UK", url: "https://www.youtube.com/watch?v=h2lN-uNblvQ", duration: "3:17", about: "Mark was diagnosed with stage 2 testicular cancer that had spread to a lymph node in his abdomen, and talks about his experience of chemotherapy and what it has shown him." },
    ],
    askDoctor: [
      "What follow-up will I have, and for how long?",
      "Could treatment affect my fertility or testosterone?",
      "Should I have a prosthesis?",
      "Which late effects should I know about?",
    ],
    related: [
      { groupId: "mens-cancers", conditionId: "penile" },
      { groupId: "common-cancers", conditionId: "prostate" },
      { groupId: "after-treatment", conditionId: "fertility-after-cancer" },
    ],
  },
};

export const penileCancer: LibraryCondition = {
  id: "penile",
  title: "Penile cancer",
  summary: "Recovery after treatment for penile cancer, a rare cancer usually treated with surgery, sometimes with other treatments. Treatment can affect passing urine, sex and how you feel about your body, and specialist teams and nurses can help with each of these.",
  facts: ["Around 700 UK diagnoses a year", "Roughly half are caused by HPV", "Over 95 in 100 are squamous cell"],
  keywords: ["penile cancer", "penis", "hpv", "surgery"],
  content: {
    understand: [
      article("what-you-had", "Your treatment, explained after the fact", 3, { learnId: "pen-what-you-had", blurb: "Surgery and other treatments.", keywords: ["surgery"] }),
      article("stage", "Stage and what it means", 3, { learnId: "pen-stage", keywords: ["stage"] }),
      article("follow-up", "Follow-up and checks", 3, { learnId: "pen-follow-up", keywords: ["follow-up"] }),
      article("hpv", "HPV and penile cancer", 2, { learnId: "pen-hpv", keywords: ["hpv"] }),
    ],
    recover: [
      article("surgery-recovery", "Recovering from surgery", 3, { learnId: "pen-surgery-recovery", keywords: ["surgery", "recovery"] }),
      article("passing-urine", "Passing urine after treatment", 3, { learnId: "pen-passing-urine", keywords: ["urine", "toilet"] }),
      article("lymph-nodes", "Lymph node surgery and swelling", 3, { learnId: "pen-lymph-nodes", keywords: ["lymph nodes", "lymphoedema"] }),
      article("other-treatments", "Other treatments", 3, { learnId: "pen-other-treatments", keywords: ["radiotherapy", "chemotherapy", "creams"] }),
    ],
    liveWell: [
      article("relationships", "Sex, intimacy and partners", 3, { learnId: "pen-relationships", keywords: ["sex", "intimacy"] }),
      article("body-image", "Body image and confidence", 3, { learnId: "pen-body-image", keywords: ["body image", "confidence"] }),
      article("work", "Work and everyday life", 3, { learnId: "pen-work", keywords: ["work"] }),
      article("mood", "Mood and talking about it", 3, { learnId: "pen-mood", keywords: ["mood", "talking"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-eau-penile-cancer", title: "Penile cancer", kind: "video", duration: "3:01", url: "https://www.youtube.com/watch?v=OuUkti55ciM", extra: "From the European Association of Urology", publisher: "European Association of Urology", keywords: ["penile cancer", "overview"] },
      { id: "yt-orchid-penile-treatment", title: "Penile Cancer Overview of Treatment", kind: "video", duration: "3:01", url: "https://www.youtube.com/watch?v=w7ef8NyZIts", extra: "Orchid's overview of treatment", publisher: "Orchid", keywords: ["treatment", "surgery", "support"] },
      { id: "yt-keck-penile-explained", title: "Penile Cancer Explained | Urology Experts Explain", kind: "video", duration: "3:46", url: "https://www.youtube.com/watch?v=fEq6e9Py5Tg", extra: "Risk factors, warning signs and treatment", publisher: "Keck Medicine of USC", keywords: ["risk factors", "symptoms", "treatment"] },
    ],
    sources: [source(NHS, "Penile cancer"), MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-cormac-hse", person: "Cormac", title: "Know the Signs: Penile Cancer Awareness - Cormac’s Story", channel: "HSE Ireland", url: "https://www.youtube.com/watch?v=MGIgJLOiICk", duration: "2:22", about: "Cormac France, a father of four and a cancer survivor, shares his personal story to encourage men to act early, alongside a consultant urologist and a clinical nurse specialist from the National Penile Centre at Beaumont Hospital." },
      { id: "yt-john-eurogen", person: "John", title: "ERN eUROGEN Webinar 21: Penile cancer - a patient perspective", channel: "ERN eUROGEN", url: "https://www.youtube.com/watch?v=YS6bANVqJzI", duration: "42:03", about: "John Osborne talks about his own experience as a penile cancer patient and his work as a patient advocate, after Orchid nurse Rob Cornes explains how men can be supported." },
    ],
    askDoctor: [
      "What follow-up will I have, and what should I look out for?",
      "Will treatment affect how I pass urine?",
      "Who can I talk to about sex and body image?",
      "Is there a specialist nurse I can contact?",
    ],
    related: [
      { groupId: "mens-cancers", conditionId: "testicular" },
      { groupId: "common-cancers", conditionId: "prostate" },
      { groupId: "after-treatment", conditionId: "lymphoedema" },
    ],
  },
};

export const oesophagealCancer: LibraryCondition = {
  id: "oesophageal",
  title: "Oesophageal cancer",
  summary: "Recovery after treatment for cancer of the oesophagus (food pipe). Surgery, chemotherapy and radiotherapy can change how you eat and swallow, and eating little and often, weight and nutrition become important. Dietitians and specialist nurses help.",
  facts: ["Around 9,000 UK diagnoses each year", "Dumping affects 1 in 2 after surgery", "Normal eating can take up to 2 years"],
  keywords: ["oesophageal cancer", "food pipe", "oesophagectomy", "swallowing", "dysphagia"],
  content: {
    understand: [
      article("what-you-had", "Your treatment, explained after the fact", 3, { learnId: "oes-what-you-had", blurb: "Surgery, chemotherapy and radiotherapy.", keywords: ["oesophagectomy", "chemotherapy"] }),
      article("stage", "Type and stage", 3, { learnId: "oes-stage", keywords: ["stage", "adenocarcinoma"] }),
      article("follow-up", "Follow-up and appointments", 3, { learnId: "oes-follow-up", keywords: ["follow-up"] }),
      article("swallowing", "Swallowing problems and stents", 3, { learnId: "oes-swallowing", keywords: ["swallowing", "stent"] }),
    ],
    recover: [
      article("eating", "Eating after surgery: little and often", 3, { learnId: "oes-eating", keywords: ["eating", "small meals"] }),
      article("dumping", "Dumping syndrome", 3, { learnId: "oes-dumping", keywords: ["dumping syndrome"] }),
      article("weight", "Weight and nutrition", 3, { learnId: "oes-weight", keywords: ["weight", "nutrition", "supplements"] }),
      article("reflux", "Reflux and sleeping propped up", 3, { learnId: "oes-reflux", keywords: ["reflux", "sleeping"] }),
    ],
    liveWell: [
      article("fatigue", "Tiredness", 3, { learnId: "oes-fatigue", keywords: ["tired", "fatigue"] }),
      article("social-eating", "Eating out and with others", 2, { learnId: "oes-social-eating", keywords: ["eating out", "social"] }),
      article("work", "Work and money", 3, { learnId: "oes-work", keywords: ["work", "money"] }),
      article("mood", "The low months after treatment ends", 3, { learnId: "oes-mood", keywords: ["mood", "worry"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-macmillan-oesophageal", title: "What Is Oesophageal (Gullet) Cancer? - Symptoms, Treatments & Diagnosis", kind: "video", duration: "3:35", url: "https://www.youtube.com/watch?v=ii0lq6RR_9A", extra: "A thoracic surgeon explains gullet cancer", publisher: "Macmillan Cancer Support", keywords: ["oesophageal cancer", "symptoms", "treatment"] },
      { id: "yt-cruk-eating-after-surgery", title: "How to eat after surgery for cancer of the oesophagus or stomach", kind: "video", duration: "3:31", url: "https://www.youtube.com/watch?v=cyN4dNhZetw", extra: "A specialist dietitian on eating after surgery", publisher: "Cancer Research UK", keywords: ["eating", "surgery", "diet"] },
      { id: "yt-uclh-oesophageal", title: "Oesophageal cancer | Causes, symptoms, diagnosis, and treatment options", kind: "video", duration: "7:18", url: "https://www.youtube.com/watch?v=h96pQXuj6sY", extra: "A consultant surgeon on diagnosis and treatment", publisher: "University College London Hospitals NHS Foundation Trust", keywords: ["oesophageal cancer", "diagnosis", "treatment"] },
    ],
    sources: [source(NHS, "Oesophageal cancer"), MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-wendy-oesophageal", person: "Wendy", title: "Oesophageal Cancer Treatment | Wendy's Story | Cancer Research UK", channel: "Cancer Research UK", url: "https://www.youtube.com/watch?v=iaCqt7L4VGg", duration: "5:58", about: "Wendy was diagnosed with early cancer of the oesophagus in January 2013, and her story follows her from diagnosis to the end of treatment, with chemotherapy and surgery." },
      { id: "yt-nick-oesophageal", person: "Nick", title: "Nick's story - Oesophageal Cancer Symptoms", channel: "NHS Lincolnshire ICB", url: "https://www.youtube.com/watch?v=tkPFgCKmA8Q", duration: "2:49", about: "Nick had a healthy lifestyle but was diagnosed with oesophageal cancer in 2017, after he realised that difficulty swallowing wasn't normal and acted fast." },
      { id: "yt-matt-oesophageal", person: "Matt", title: "Matt Carter, Oesophageal Cancer Survivor, Oxfordshire", channel: "Thames Valley Cancer Alliance", url: "https://www.youtube.com/watch?v=_3PNSn9QgAw", duration: "1:23", about: "Matt Carter, from Oxfordshire, is an oesophageal cancer survivor." },
    ],
    askDoctor: [
      "Can I see a dietitian about eating and weight?",
      "What should I do if swallowing gets harder?",
      "What can help with dumping syndrome or reflux?",
      "What follow-up will I have?",
    ],
    related: [
      { groupId: "digestive-cancers", conditionId: "stomach-cancer" },
      { groupId: "other-cancers", conditionId: "head-neck" },
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
    ],
  },
};

export const stomachCancer: LibraryCondition = {
  id: "stomach-cancer",
  title: "Stomach cancer",
  summary: "Recovery after treatment for stomach cancer, often surgery to remove part or all of the stomach, with chemotherapy. Eating changes a great deal: small meals, vitamin B12 and weight all matter. Dietitians and specialist nurses help you find what works.",
  facts: ["Surgery plus chemotherapy for most", "B12 injections every few months", "H pylori causes around 40 in 100"],
  keywords: ["stomach cancer", "gastric cancer", "gastrectomy", "vitamin b12", "eating"],
  content: {
    understand: [
      article("what-you-had", "Your treatment, explained after the fact", 3, { learnId: "stc-what-you-had", blurb: "Surgery, chemotherapy and other treatments.", keywords: ["gastrectomy", "chemotherapy"] }),
      article("stage", "Stage and what it means", 3, { learnId: "stc-stage", keywords: ["stage"] }),
      article("follow-up", "Follow-up and appointments", 3, { learnId: "stc-follow-up", keywords: ["follow-up"] }),
      article("h-pylori", "H. pylori and family", 2, { learnId: "stc-h-pylori", keywords: ["h pylori", "family"] }),
    ],
    recover: [
      article("eating", "Eating after a gastrectomy", 3, { learnId: "stc-eating", keywords: ["eating", "small meals"] }),
      article("dumping", "Dumping syndrome", 3, { learnId: "stc-dumping", keywords: ["dumping syndrome"] }),
      article("vitamins", "Vitamin B12, iron and other supplements", 3, { learnId: "stc-vitamins", keywords: ["vitamin b12", "iron"] }),
      article("weight", "Weight and nutrition", 3, { learnId: "stc-weight", keywords: ["weight", "nutrition"] }),
    ],
    liveWell: [
      article("fatigue", "Tiredness", 3, { learnId: "stc-fatigue", keywords: ["tired", "fatigue"] }),
      article("social-eating", "Eating out and with others", 2, { learnId: "stc-social-eating", keywords: ["eating out"] }),
      article("work", "Work and money", 3, { learnId: "stc-work", keywords: ["work", "money"] }),
      article("mood", "The low months after treatment ends", 3, { learnId: "stc-mood", keywords: ["mood", "worry"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-macmillan-eating-after-stomach-surgery", title: "Eating after stomach cancer surgery - Macmillan Cancer Support", kind: "video", duration: "3:03", url: "https://www.youtube.com/watch?v=XMyLgni1VyA", extra: "Eating after part of the stomach is removed", publisher: "Macmillan Cancer Support", keywords: ["eating", "gastrectomy", "surgery"] },
      { id: "yt-cruk-eat-after-stomach-surgery", title: "How to eat after surgery for cancer of the oesophagus or stomach", kind: "video", duration: "3:32", url: "https://www.youtube.com/watch?v=cyN4dNhZetw", extra: "How to eat after stomach surgery", publisher: "Cancer Research UK", keywords: ["eating", "surgery", "diet"] },
      { id: "yt-mayo-gastrectomy-quality-of-life", title: "How will gastrectomy for stomach cancer affect my quality of life?", kind: "video", duration: "0:54", url: "https://www.youtube.com/watch?v=zPlINBiFS_s", extra: "A surgeon on life after gastrectomy", publisher: "Mayo Clinic", keywords: ["gastrectomy", "quality of life", "surgery"] },
    ],
    sources: [source(NHS, "Stomach cancer"), MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-sunnybrook-jim", person: "Jim", title: "Life without a stomach: Jim's story", channel: "Sunnybrook Hospital", url: "https://www.youtube.com/watch?v=nLb0hCSzPas", duration: "2:38", about: "After a diagnosis of stomach cancer, Jim talks about life without a stomach, something many people live with." },
      { id: "yt-hfsc-alison", person: "Alison", title: "Life After Stomach Cancer: Alison’s Post-Gastrectomy Nutrition Journey", channel: "Hope For Stomach Cancer", url: "https://www.youtube.com/watch?v=RJp-V9tdXEg", duration: "4:30", about: "After undergoing a total gastrectomy, Alison shares her post-gastrectomy nutrition journey." },
      { id: "yt-gcf-jason", person: "Jason", title: "Jason's Story - Stomach Cancer Awareness Month", channel: "Gut Cancer Foundation", url: "https://www.youtube.com/watch?v=XdPVIu9bqCQ", duration: "5:03", about: "Jason was diagnosed with stomach cancer in 2021, at the age of 54, and tells his story." },
    ],
    askDoctor: [
      "Will I need vitamin B12 injections or other supplements?",
      "Can I see a dietitian?",
      "What can help with dumping syndrome?",
      "What follow-up will I have?",
    ],
    related: [
      { groupId: "digestive-cancers", conditionId: "oesophageal" },
      { groupId: "other-cancers", conditionId: "pancreatic" },
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
    ],
  },
};

export const liverCancer: LibraryCondition = {
  id: "liver-cancer",
  title: "Liver cancer",
  summary: "Living with and after treatment for primary liver cancer, which often develops in a liver already damaged by cirrhosis. Treatment ranges from surgery or a transplant to treatments given into the liver and medicines. Looking after the rest of the liver matters too.",
  facts: ["HCC: the most common liver cancer", "The liver can regrow after surgery", "Over 9 in 10 HCCs linked to cirrhosis"],
  keywords: ["liver cancer", "hepatocellular carcinoma", "hcc", "cirrhosis", "tace"],
  content: {
    understand: [
      article("what-it-is", "What primary liver cancer is", 3, { learnId: "lvc-what-it-is", blurb: "Cancer that starts in the liver, and how it differs from cancer that has spread there.", extra: "With a diagram", keywords: ["primary", "hcc"] }),
      article("causes", "Cirrhosis, hepatitis and other causes", 3, { learnId: "lvc-causes", keywords: ["cirrhosis", "hepatitis"] }),
      article("treatments", "Surgery, transplant and other treatments", 3, { learnId: "lvc-treatments", keywords: ["surgery", "transplant", "ablation"] }),
      article("follow-up", "Scans and follow-up", 3, { learnId: "lvc-follow-up", keywords: ["scans", "follow-up"] }),
    ],
    recover: [
      article("local-treatments", "Treatments into the liver", 3, { learnId: "lvc-local-treatments", keywords: ["tace", "ablation"] }),
      article("medicines", "Targeted drugs and immunotherapy", 3, { learnId: "lvc-medicines", keywords: ["targeted", "immunotherapy"] }),
      article("surgery-recovery", "Recovering from liver surgery", 3, { learnId: "lvc-surgery-recovery", keywords: ["surgery", "recovery"] }),
      article("symptoms", "Managing symptoms", 3, { learnId: "lvc-symptoms", keywords: ["symptoms", "swelling", "itching"] }),
    ],
    liveWell: [
      article("liver-health", "Looking after your liver", 3, { learnId: "lvc-liver-health", keywords: ["liver health", "alcohol"] }),
      article("eating", "Eating and weight", 3, { learnId: "lvc-eating", keywords: ["eating", "weight"] }),
      article("fatigue", "Tiredness", 3, { learnId: "lvc-fatigue", keywords: ["tired", "fatigue"] }),
      article("mood", "Mood and support", 3, { learnId: "lvc-mood", keywords: ["mood", "support"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-macmillan-what-is-liver-cancer", title: "What Is Liver Cancer? (Symptoms, Causes & Treatments)  - Macmillan Cancer Support", kind: "video", duration: "3:30", url: "https://www.youtube.com/watch?v=sXDAsLWcYX4", extra: "A liver surgeon on primary liver cancer", publisher: "Macmillan Cancer Support", keywords: ["primary liver cancer", "symptoms", "treatment"] },
      { id: "yt-liveruk-about-liver-cancer", title: "About the liver and liver cancer", kind: "video", duration: "1:57", url: "https://www.youtube.com/watch?v=2Ayk03lf26M", extra: "What the liver does, and liver cancer", publisher: "Liver UK", keywords: ["liver", "liver cancer"] },
      { id: "yt-liveruk-surveillance", title: "What is liver cancer surveillance?", kind: "video", duration: "2:17", url: "https://www.youtube.com/watch?v=6U1wTHNBR2o", extra: "A Birmingham hospital doctor explains surveillance", publisher: "Liver UK", keywords: ["surveillance", "scans", "follow-up"] },
    ],
    sources: [source(NHS, "Liver cancer"), MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-liveruk-billy-gill", person: "Billy", title: "Billy and Gill's liver cancer story", channel: "Liver UK", url: "https://www.youtube.com/watch?v=beff86e3Vgs", duration: "3:55", about: "Billy was diagnosed with liver cancer in 2018 and had a liver transplant; he and his wife, Gill, share their journey." },
      { id: "yt-hepb-paul-uk", person: "Paul", title: "#BtheVoice: Paul's story of living with liver cancer in the United Kingdom", channel: "Hepatitis B Foundation", url: "https://www.youtube.com/watch?v=6owb6qimP9w", duration: "6:17", about: "Paul shares his journey of being diagnosed with hepatocellular carcinoma (HCC) in the United Kingdom, and his treatment." },
      { id: "yt-hepb-marjorie", person: "Marjorie", title: "#BtheVoice: Marjorie's Liver Cancer Story", channel: "Hepatitis B Foundation", url: "https://www.youtube.com/watch?v=Xr1NQutjTqU", duration: "3:35", about: "Marjorie, who was teaching fitness classes, caring for loved ones and staying active, tells her liver cancer story." },
    ],
    askDoctor: [
      "What is the aim of my treatment?",
      "How well is the rest of my liver working?",
      "Which symptoms should I report straight away?",
      "Can I see a dietitian?",
    ],
    related: [
      { groupId: "liver", conditionId: "fatty-liver" },
      { groupId: "advanced-cancer", conditionId: "secondary-cancer" },
      { groupId: "digestive-cancers", conditionId: "stomach-cancer" },
    ],
  },
};

export const thyroidCancer: LibraryCondition = {
  id: "thyroid-cancer",
  title: "Thyroid cancer",
  summary: "Recovery after treatment for thyroid cancer, which is usually treated successfully with surgery, sometimes followed by radioactive iodine. Most people then take thyroid hormone tablets for life and have regular blood tests. The voice and calcium levels may need checking after surgery.",
  facts: ["Surgery is the most common treatment", "Levothyroxine: daily, for life", "About 8 in 10 are papillary"],
  keywords: ["thyroid cancer", "thyroidectomy", "radioactive iodine", "levothyroxine", "papillary"],
  content: {
    understand: [
      article("what-you-had", "Your treatment, explained after the fact", 3, { learnId: "thc-what-you-had", blurb: "Surgery and radioactive iodine.", keywords: ["thyroidectomy", "radioactive iodine"] }),
      article("types", "Papillary, follicular and other types", 3, { learnId: "thc-types", keywords: ["papillary", "follicular", "medullary"] }),
      article("follow-up", "Follow-up and blood tests", 3, { learnId: "thc-follow-up", keywords: ["thyroglobulin", "follow-up"] }),
      article("radioiodine", "Radioactive iodine treatment", 3, { learnId: "thc-radioiodine", keywords: ["radioactive iodine", "isolation"] }),
    ],
    recover: [
      article("tablets", "Levothyroxine for life", 3, { learnId: "thc-tablets", keywords: ["levothyroxine", "tablets"] }),
      article("voice-calcium", "Voice and calcium after surgery", 3, { learnId: "thc-voice-calcium", keywords: ["voice", "calcium"] }),
      article("scar", "The scar and the neck", 2, { learnId: "thc-scar", keywords: ["scar", "neck"] }),
      article("fatigue", "Tiredness and getting the dose right", 3, { learnId: "thc-fatigue", keywords: ["tired", "dose"] }),
    ],
    liveWell: [
      article("pregnancy", "Pregnancy and thyroid cancer", 3, { learnId: "thc-pregnancy", keywords: ["pregnancy"] }),
      article("work", "Work and everyday life", 3, { learnId: "thc-work", keywords: ["work"] }),
      article("weight-mood", "Weight, mood and energy", 3, { learnId: "thc-weight-mood", keywords: ["weight", "mood", "energy"] }),
      article("mood", "Living with the worry", 3, { learnId: "thc-mood", keywords: ["worry", "mood"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-macmillan-thyroid-rai", title: "Radioactive iodine treatment for thyroid cancer – Macmillan Cancer Support", kind: "video", duration: "3:04", url: "https://www.youtube.com/watch?v=_3nsx6jfWh8", extra: "A nurse specialist on what to expect", publisher: "Macmillan Cancer Support", keywords: ["radioactive iodine", "treatment", "isolation"] },
      { id: "yt-rbh-total-thyroidectomy", title: "Consent for Surgery: Total Thyroidectomy", kind: "video", duration: "18:27", url: "https://www.youtube.com/watch?v=LCkOygXkSdU", extra: "NHS hospital film on total thyroidectomy", publisher: "Royal Berkshire NHS Foundation Trust", keywords: ["thyroidectomy", "surgery", "consent"] },
      { id: "yt-btf-patient-journeys-intro", title: "Thyroid Cancer - Patient Journeys - Introduction with Dr Mark Vanderpump", kind: "video", duration: "8:05", url: "https://www.youtube.com/watch?v=Pro9cvUwvV0", extra: "A thyroid consultant introduces the series", publisher: "British Thyroid Foundation", keywords: ["thyroid cancer", "overview", "patient journeys"] },
    ],
    sources: [source(NHS, "Thyroid cancer"), MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-amy-cruk", person: "Amy", title: "Amy's Story - Thyroid Cancer | Cancer Research UK", channel: "Cancer Research UK", url: "https://www.youtube.com/watch?v=AYYMrRUDgNI", duration: "2:28", about: "Amy and her father John talk about life after thyroid cancer, finishing treatment and going to follow-up appointments." },
      { id: "yt-cory-btf", person: "Cory", title: "Thyroid Cancer - Patient Journeys - Cory", channel: "British Thyroid Foundation", url: "https://www.youtube.com/watch?v=w4W2KwlPL-s", duration: "4:48", about: "Cory, diagnosed with follicular thyroid cancer in October 2012, talks about an intense period of treatment and seeing things differently afterwards." },
      { id: "yt-rebekka-butterfly", person: "Rebekka", title: "Living with Papillary Thyroid Cancer: Rebekka's Story", channel: "Butterfly Thyroid Cancer Trust", url: "https://www.youtube.com/watch?v=p_dML8vfkFQ", duration: "10:00", about: "Rebekka shares her story of living with papillary thyroid cancer, in a film for the Butterfly Thyroid Cancer Trust." },
    ],
    askDoctor: [
      "What type of thyroid cancer did I have?",
      "What dose of levothyroxine do I need, and how is it checked?",
      "Will I need radioactive iodine?",
      "Should my calcium or voice be checked?",
    ],
    related: [
      { groupId: "thyroid", conditionId: "nodules-goitre" },
      { groupId: "thyroid", conditionId: "underactive" },
      { groupId: "other-cancers", conditionId: "head-neck" },
    ],
  },
};

export const brainTumours: LibraryCondition = {
  id: "brain-tumours",
  title: "Brain tumours",
  summary: "Living with and after treatment for a brain tumour, which can be slow growing or faster growing. Surgery, radiotherapy and chemotherapy may affect energy, thinking, mood and seizures, and rehabilitation can help. Rules about driving often apply.",
  facts: ["Over 100 types of brain tumour", "Graded 1 to 4 by how fast they grow", "Treated in specialist hospitals"],
  keywords: ["brain tumour", "glioma", "meningioma", "seizures", "radiotherapy"],
  content: {
    understand: [
      article("what-it-is", "What a brain tumour is", 3, { learnId: "bt-what-it-is", blurb: "Slow growing and faster growing tumours.", extra: "With a diagram", keywords: ["glioma", "meningioma", "grade"] }),
      article("symptoms", "Symptoms and how they can change", 3, { learnId: "bt-symptoms", keywords: ["headache", "seizures", "symptoms"] }),
      article("treatments", "Surgery, radiotherapy and chemotherapy", 3, { learnId: "bt-treatments", keywords: ["surgery", "radiotherapy"] }),
      article("follow-up", "Scans and follow-up", 3, { learnId: "bt-follow-up", keywords: ["mri", "follow-up"] }),
    ],
    recover: [
      article("rehab", "Rehabilitation after treatment", 3, { learnId: "bt-rehab", keywords: ["rehab", "therapy"] }),
      article("seizures", "Seizures and what to do", 3, { learnId: "bt-seizures", keywords: ["seizures", "epilepsy"] }),
      article("thinking", "Memory, thinking and concentration", 3, { learnId: "bt-thinking", keywords: ["memory", "thinking"] }),
      article("steroids", "Steroids and their side effects", 3, { learnId: "bt-steroids", keywords: ["steroids", "dexamethasone"] }),
    ],
    liveWell: [
      article("driving", "Driving and the DVLA", 3, { learnId: "bt-driving", keywords: ["driving", "dvla"] }),
      article("fatigue", "Tiredness", 3, { learnId: "bt-fatigue", keywords: ["tired", "fatigue"] }),
      article("personality", "Changes in mood and personality", 3, { learnId: "bt-personality", keywords: ["mood", "personality"] }),
      article("carers", "For family and carers", 3, { learnId: "bt-carers", keywords: ["carers", "family"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-macmillan-srs", title: "Stereotactic radiosurgery for brain tumours", kind: "video", duration: "3:50", url: "https://www.youtube.com/watch?v=NvdjrlVmsFg", extra: "A lead radiographer explains radiosurgery", publisher: "Macmillan Cancer Support", keywords: ["stereotactic radiosurgery", "radiotherapy", "treatment"] },
      { id: "yt-btc-seizures", title: "Seizures and Brain Tumours | The Brain Tumour Charity | Understanding Brain Tumours", kind: "video", duration: "2:27", url: "https://www.youtube.com/watch?v=ZTD8BpHzP9E", extra: "Seizures as a brain tumour symptom", publisher: "The Brain Tumour Charity", keywords: ["seizures", "epilepsy", "symptoms"] },
      { id: "yt-cruk-brain-radiotherapy", title: "Cancer Treatment | Brain Radiotherapy Side Effects | Cancer Research UK", kind: "video", duration: "5:25", url: "https://www.youtube.com/watch?v=BlENUqqC034", extra: "Side effects of brain radiotherapy", publisher: "Cancer Research UK", keywords: ["radiotherapy", "side effects", "tiredness"] },
    ],
    sources: [source(NHS, "Brain tumours"), MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-paula-macmillan", person: "Paula", title: "Being diagnosed with a brain tumour | Paula’s story", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=_UgQFIy1An8", duration: "2:40", about: "Paula talks about their experience of being diagnosed with a brain tumour and how they dealt with the diagnosis." },
      { id: "yt-tess-macmillan", person: "Tess", title: "Living With A Brain Tumour | Tess's Story - Macmillan Cancer Support", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=sqM0eGpqCqY", duration: "3:48", about: "Tess talks about her experience of living with a brain tumour." },
      { id: "yt-lorna-btc", person: "Lorna-Rose", title: "Lorna's Story | Brain Tumour Stories | Living With a Brain Tumour | The Brain Tumour Charity", channel: "The Brain Tumour Charity", url: "https://www.youtube.com/watch?v=sIlf--wzEHI", duration: "2:35", about: "Lorna-Rose, diagnosed with a pilocytic astrocytoma in 2005, shares her brain tumour story; she is now the mum of two boys." },
    ],
    askDoctor: [
      "What type and grade of tumour do I have?",
      "What should I do if I have a seizure?",
      "Can I drive, and do I need to tell the DVLA?",
      "Can I be referred for rehabilitation?",
    ],
    related: [
      { groupId: "rarer-cancers", conditionId: "sarcoma" },
      { groupId: "after-treatment", conditionId: "brain-fog" },
      { groupId: "advanced-cancer", conditionId: "caring-advanced" },
    ],
  },
};

export const sarcoma: LibraryCondition = {
  id: "sarcoma",
  title: "Sarcoma",
  summary: "Recovery after treatment for sarcoma, a rarer cancer of the soft tissues or bone, treated in specialist centres. Surgery, sometimes with radiotherapy or chemotherapy, may be followed by physiotherapy to regain movement and strength. Follow-up continues for some years.",
  facts: ["Around 100 subtypes of sarcoma", "Surgery is the main treatment", "Follow-up can last for many years"],
  keywords: ["sarcoma", "soft tissue sarcoma", "bone sarcoma", "osteosarcoma", "physiotherapy"],
  content: {
    understand: [
      article("what-it-is", "What sarcoma is", 3, { learnId: "sar-what-it-is", blurb: "Soft tissue and bone sarcomas.", extra: "With a diagram", keywords: ["soft tissue", "bone"] }),
      article("specialist-centres", "Why treatment is at specialist centres", 2, { learnId: "sar-specialist-centres", keywords: ["specialist centre"] }),
      article("treatments", "Surgery, radiotherapy and chemotherapy", 3, { learnId: "sar-treatments", keywords: ["surgery", "radiotherapy"] }),
      article("follow-up", "Follow-up and scans", 3, { learnId: "sar-follow-up", keywords: ["follow-up", "scans"] }),
    ],
    recover: [
      article("physio", "Physiotherapy and getting moving", 3, { learnId: "sar-physio", keywords: ["physiotherapy", "movement"] }),
      article("limb-surgery", "Limb surgery and prosthetics", 3, { learnId: "sar-limb-surgery", keywords: ["limb", "prosthesis"] }),
      article("wound", "Wound healing and scars", 3, { learnId: "sar-wound", keywords: ["wound", "scar"] }),
      article("fatigue", "Tiredness", 3, { learnId: "sar-fatigue", keywords: ["tired", "fatigue"] }),
    ],
    liveWell: [
      article("work", "Work, study and money", 3, { learnId: "sar-work", keywords: ["work", "money"] }),
      article("late-effects", "Late effects of treatment", 3, { learnId: "sar-late-effects", keywords: ["late effects"] }),
      article("body-image", "Body image and confidence", 3, { learnId: "sar-body-image", keywords: ["body image"] }),
      article("mood", "Mood and support", 3, { learnId: "sar-mood", keywords: ["mood", "support"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-rnoh-adult-sarcoma-service", title: "The Adult Sarcoma Service at the Royal National Orthopaedic Hospital", kind: "video", duration: "3:38", url: "https://www.youtube.com/watch?v=U_8eTnxRvww", extra: "Overview of a specialist sarcoma service", publisher: "Royal National Orthopaedic Hospital", keywords: ["specialist centre", "sarcoma service", "NHS"] },
      { id: "yt-bcrt-getting-moving", title: "Immediately after surgery -  Getting moving again", kind: "video", duration: "6:49", url: "https://www.youtube.com/watch?v=gXLeWGoT_Zs", extra: "Amputees on getting moving again", publisher: "Bone Cancer Research Trust", keywords: ["amputation", "rehabilitation", "getting moving"] },
      { id: "yt-suk-late-effects", title: "Late Effects of Sarcoma Treatment, Dr Alex Lee", kind: "video", duration: "20:52", url: "https://www.youtube.com/watch?v=czqx-4339jI", extra: "A sarcoma oncologist on late effects", publisher: "Sarcoma UK", keywords: ["late effects", "treatment", "oncologist"] },
    ],
    sources: [source(NHS, "Soft tissue sarcoma"), MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-jo-rnoh", person: "Jo", title: "RNOH Sarcoma Service: Jo's story", channel: "RNOHnhs", url: "https://www.youtube.com/watch?v=fs3jcbod42M", duration: "5:10", about: "Jo shares her story of being diagnosed with sarcoma and her care at the RNOH Sarcoma service, and her active and enjoyable life after surgery." },
      { id: "yt-uma-suk", person: "Uma", title: "Sarcoma Won't Wait: Uma Paul", channel: "Sarcoma UK", url: "https://www.youtube.com/watch?v=HO0EKb4y_Go", duration: "6:07", about: "Uma describes going to her GP every day for a week with pain before her sarcoma was found, and why more education is needed so people from BAME communities know help and support is out there." },
      { id: "yt-andrew-suk", person: "Andrew", title: "Sarcoma Won't Wait: Andrew's Story", channel: "Sarcoma UK", url: "https://www.youtube.com/watch?v=ANmpC0oCkF4", duration: "8:07", about: "Andrew's story, part of Sarcoma UK's Sarcoma Won't Wait films about the late diagnosis of sarcoma." },
    ],
    askDoctor: [
      "What type of sarcoma did I have?",
      "Can I be referred for physiotherapy?",
      "What follow-up will I have, and for how long?",
      "Which symptoms should I report between appointments?",
    ],
    related: [
      { groupId: "rarer-cancers", conditionId: "brain-tumours" },
      { groupId: "after-treatment", conditionId: "late-effects" },
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
    ],
  },
};

export const mesothelioma: LibraryCondition = {
  id: "mesothelioma",
  title: "Mesothelioma",
  summary: "Living with mesothelioma, a cancer of the lining of the lungs or tummy that is usually linked to asbestos. Treatment aims to control it and ease symptoms such as breathlessness and pain. Specialist nurses, palliative care and advice about compensation are all part of the support.",
  facts: ["Over 2,700 UK diagnoses a year", "95 in 100 start in the chest", "Over 9 in 10 linked to asbestos"],
  keywords: ["mesothelioma", "asbestos", "pleural", "breathless", "compensation"],
  content: {
    understand: [
      article("what-it-is", "What mesothelioma is", 3, { learnId: "meso-what-it-is", blurb: "The linings of the lungs and tummy, and asbestos.", extra: "With a diagram", keywords: ["pleural", "peritoneal", "asbestos"] }),
      article("asbestos", "Asbestos and how it causes it", 3, { learnId: "meso-asbestos", keywords: ["asbestos", "exposure"] }),
      article("treatments", "Treatments and what they aim to do", 3, { learnId: "meso-treatments", keywords: ["chemotherapy", "immunotherapy"] }),
      article("tests", "Tests and diagnosis", 3, { learnId: "meso-tests", keywords: ["biopsy", "ct scan"] }),
    ],
    recover: [
      article("breathlessness", "Breathlessness and fluid around the lung", 3, { learnId: "meso-breathlessness", keywords: ["breathless", "pleural effusion", "drain"] }),
      article("pain", "Managing pain", 3, { learnId: "meso-pain", keywords: ["pain", "painkillers"] }),
      article("fatigue", "Tiredness", 3, { learnId: "meso-fatigue", keywords: ["tired", "fatigue"] }),
      article("palliative", "Palliative care from early on", 3, { learnId: "meso-palliative", keywords: ["palliative care"] }),
    ],
    liveWell: [
      article("compensation", "Compensation and benefits", 3, { learnId: "meso-compensation", keywords: ["compensation", "benefits", "claim"] }),
      article("eating", "Eating and weight", 3, { learnId: "meso-eating", keywords: ["eating", "weight"] }),
      article("family", "Support for family", 3, { learnId: "meso-family", keywords: ["family", "carers"] }),
      article("mood", "Mood and support", 3, { learnId: "meso-mood", keywords: ["mood", "support"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-macmillan-meso-explained", title: "Mesothelioma Explained: Symptoms, Causes, Diagnosis & Treatment | Oncologist Dr Sanjay Popat", kind: "video", duration: "4:23", url: "https://www.youtube.com/watch?v=Y5b218OAXN4", extra: "Symptoms, causes, diagnosis and treatment", publisher: "Macmillan Cancer Support", keywords: ["symptoms", "asbestos", "treatment"] },
      { id: "yt-cruk-breathing-control", title: "Breathing Control for Breathlessness | Cancer Research UK", kind: "video", duration: "3:14", url: "https://www.youtube.com/watch?v=YmBanu2UHKk", extra: "Breathing control and pursed lip breathing", publisher: "Cancer Research UK", keywords: ["breathless", "breathing", "techniques"] },
      { id: "yt-mesouk-benefits", title: "Mesothelioma UK Know How - Benefits advice", kind: "video", duration: "4:05", url: "https://www.youtube.com/watch?v=GWELhYLULvA", extra: "Benefits advice from Mesothelioma UK", publisher: "Mesothelioma UK", keywords: ["benefits", "compensation", "claim"] },
    ],
    sources: [source(NHS, "Mesothelioma"), MACMILLAN, CANCER_RESEARCH_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-gemma-meso", person: "Gemma", title: "Gemma Ruck - My Mesothelioma Story", channel: "Mesothelioma UK", url: "https://www.youtube.com/watch?v=etmJ6kxFU4g", duration: "13:27", about: "Gemma Ruck tells her family's mesothelioma story: her Nana had pleural mesothelioma after working in a munitions factory, and her mum was diagnosed with pleural mesothelioma in late 2020." },
      { id: "yt-jim-meso", person: "Jim", title: "Mesothelioma Awareness: Jim's Story", channel: "Gloucestershire Hospitals NHS Foundation Trust", url: "https://www.youtube.com/watch?v=2EVBqLYBuxs", duration: "6:04", about: "Jim's story, shared by his hospital trust to raise awareness of mesothelioma." },
      { id: "yt-mags-meso", person: "Mags", title: "Dr Mags Portman on living with mesothelioma and the importance of research.", channel: "Mesothelioma UK", url: "https://www.youtube.com/watch?v=i_6SGJzh2x4", duration: "3:46", about: "Dr Mags Portman, a specialist in HIV and sexual health who had mesothelioma, talks about living with it and the importance of investment in research and clinical trials." },
    ],
    askDoctor: [
      "What is the aim of my treatment?",
      "What can help with breathlessness and pain?",
      "Can I be referred to palliative care and a specialist nurse?",
      "Who can advise me about compensation?",
    ],
    related: [
      { groupId: "common-cancers", conditionId: "lung" },
      { groupId: "advanced-cancer", conditionId: "secondary-cancer" },
      { groupId: "long-term-lung", conditionId: "pulmonary-fibrosis" },
    ],
  },
};

export const brainFog: LibraryCondition = {
  id: "brain-fog",
  title: "Brain fog after cancer (chemo brain)",
  summary: "Problems with memory, concentration and thinking during or after cancer treatment, sometimes called chemo brain. For most people they are mild and improve over time. Simple strategies, rest, activity and support at work can all help.",
  facts: ["Up to 75 in 100 notice it in treatment", "Usually mild and improves with time", "Can happen without chemotherapy"],
  keywords: ["chemo brain", "brain fog", "memory", "concentration", "cognitive"],
  content: {
    understand: [
      article("what-it-is", "What brain fog after cancer is", 3, { learnId: "bfog-what-it-is", blurb: "Memory, concentration and thinking changes.", extra: "With a diagram", keywords: ["memory", "concentration"] }),
      article("causes", "What can cause it", 3, { learnId: "bfog-causes", keywords: ["chemotherapy", "hormones", "tiredness"] }),
      article("how-long", "How long it lasts", 2, { learnId: "bfog-how-long", keywords: ["how long", "improve"] }),
      article("other-causes", "Other things that can add to it", 3, { learnId: "bfog-other-causes", keywords: ["anaemia", "sleep", "mood"] }),
    ],
    recover: [
      article("strategies", "Everyday strategies that help", 3, { learnId: "bfog-strategies", keywords: ["lists", "reminders", "routine"] }),
      article("activity", "Activity, sleep and rest", 3, { learnId: "bfog-activity", keywords: ["exercise", "sleep"] }),
      article("brain-exercises", "Keeping the mind active", 2, { learnId: "bfog-brain-exercises", keywords: ["puzzles", "learning"] }),
      article("getting-help", "Getting help and support", 3, { learnId: "bfog-getting-help", keywords: ["gp", "help"] }),
    ],
    liveWell: [
      article("work", "Work and brain fog", 3, { learnId: "bfog-work", keywords: ["work", "adjustments"] }),
      article("driving", "Driving and concentration", 2, { learnId: "bfog-driving", keywords: ["driving"] }),
      article("family", "Explaining it to others", 2, { learnId: "bfog-family", keywords: ["family", "explaining"] }),
      article("mood", "Frustration and mood", 3, { learnId: "bfog-mood", keywords: ["frustration", "mood"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-nhsggc-crcc", title: "NHSGGC - Cancer-related cognitive changes (chemobrain)", kind: "video", duration: "12:18", url: "https://www.youtube.com/watch?v=StaGjnvj0ig", extra: "What chemo brain is and its effects", publisher: "NHS Greater Glasgow and Clyde", keywords: ["chemo brain", "memory", "concentration"] },
      { id: "yt-nhsggc-memory", title: "NHSGGC - 3: Memory changes after cancer treatment", kind: "video", duration: "11:19", url: "https://www.youtube.com/watch?v=CT1Zelsk--s", extra: "Memory problems and coping strategies", publisher: "NHS Greater Glasgow and Clyde", keywords: ["memory", "coping strategies", "after treatment"] },
      { id: "yt-ucdavis-thinking-memory", title: "Thinking and Memory Changes During Cancer Treatment | UC Davis Comprehensive Cancer Center", kind: "video", duration: "4:03", url: "https://www.youtube.com/watch?v=DRLhOPkBSCM", extra: "An oncologist on causes and strategies", publisher: "UC Davis Health", keywords: ["chemo fog", "causes", "strategies"] },
    ],
    sources: [MACMILLAN, CANCER_RESEARCH_UK, source(NHS, "Chemotherapy side effects")],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-diana-chemo-brain", person: "Diana", title: "Chemo Brain Study Gives Hope to Cancer Survivor", channel: "UCLA Jonsson Comprehensive Cancer Center", url: "https://www.youtube.com/watch?v=KcDCFG0XZIU", duration: "4:12", about: "Diana had chemotherapy for inflammatory breast cancer and took part in a five-week UCLA study for chemo brain, and talks about improvements to her memory, thinking and mental health." },
      { id: "yt-brad-chemo-brain", person: "Brad", title: "The reality of \"Chemo Brain\": cancer and the mental health impact of the disease in young survivors", channel: "Youth Cancer Europe", url: "https://www.youtube.com/watch?v=zOIPrnxjx_w", duration: "1:11", about: "Brad, a young cancer survivor and patient advocate from the UK, talks about the mental health impact of cancer during and after treatment and how it affects all areas of life." },
    ],
    askDoctor: [
      "Could anything else be adding to my memory problems?",
      "Is there support for memory and concentration?",
      "Could my medicines be affecting my thinking?",
      "What adjustments could help me at work?",
    ],
    related: [
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
      { groupId: "common-cancers", conditionId: "breast" },
      { groupId: "sleep", conditionId: "insomnia" },
    ],
  },
};

export const fearOfRecurrence: LibraryCondition = {
  id: "fear-of-recurrence",
  title: "Fear of cancer coming back",
  summary: "Worry that cancer will come back is one of the most common feelings after treatment. It often eases with time, but it can flare around check-ups and anniversaries. Knowing what to look out for, and ways to manage the worry, helps many people.",
  facts: ["Worry about recurrence is very common", "These feelings often ease with time", "Self-refer to NHS talking therapies"],
  keywords: ["fear of recurrence", "worry", "scanxiety", "anxiety", "check-ups"],
  content: {
    understand: [
      article("what-it-is", "Why the worry is so common", 3, { learnId: "fcr-what-it-is", blurb: "Fear of recurrence, and why it comes and goes.", keywords: ["worry", "common"] }),
      article("triggers", "What can set it off", 3, { learnId: "fcr-triggers", keywords: ["check-ups", "anniversaries", "aches"] }),
      article("signs-to-report", "Symptoms worth reporting", 3, { learnId: "fcr-signs-to-report", keywords: ["symptoms", "report"] }),
      article("when-help", "When worry becomes too much", 3, { learnId: "fcr-when-help", keywords: ["anxiety", "help"] }),
    ],
    recover: [
      article("coping", "Ways to manage the worry", 3, { learnId: "fcr-coping", keywords: ["coping", "techniques"] }),
      article("check-ups", "Before and after check-ups", 3, { learnId: "fcr-check-ups", keywords: ["scanxiety", "check-ups"] }),
      article("talking", "Talking therapies and support", 3, { learnId: "fcr-talking", keywords: ["talking therapy", "cbt"] }),
      article("mindfulness", "Relaxation and mindfulness", 3, { learnId: "fcr-mindfulness", keywords: ["mindfulness", "relaxation"] }),
    ],
    liveWell: [
      article("plans", "Making plans again", 3, { learnId: "fcr-plans", keywords: ["plans", "future"] }),
      article("family", "Talking with family", 3, { learnId: "fcr-family", keywords: ["family", "talking"] }),
      article("activity", "Activity and wellbeing", 3, { learnId: "fcr-activity", keywords: ["activity", "wellbeing"] }),
      article("support", "Support groups and others who understand", 3, { learnId: "fcr-support", keywords: ["support groups"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-maudsley-fear-coming-back", title: "Cancer and mental wellbeing: Worrying about cancer coming back", kind: "video", duration: "4:16", url: "https://www.youtube.com/watch?v=zJUaWkipvJQ", extra: "Why the fear is common and understandable", publisher: "Maudsley Learning", keywords: ["fear of recurrence", "worry", "mental wellbeing"] },
      { id: "yt-nclca-fear-recurrence", title: "Cancer and Fear of Recurrence", kind: "video", duration: "3:45", url: "https://www.youtube.com/watch?v=8BLJQQl2AuU", extra: "Recognising worry, relaxing, finding support", publisher: "North Central London Cancer Alliance", keywords: ["fear of recurrence", "relaxation", "support"] },
      { id: "yt-nhs-talking-therapies", title: "Treatment for depression and anxiety | NHS Talking Therapies", kind: "video", duration: "2:20", url: "https://www.youtube.com/watch?v=jLgv0E1k6hs", extra: "Referring yourself, assessment, treatment options", publisher: "NHS", keywords: ["talking therapies", "self-referral", "anxiety"] },
    ],
    sources: [MACMILLAN, CANCER_RESEARCH_UK, source(NHS, "NHS Talking Therapies")],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-yvonne-life-beyond", person: "Yvonne", title: "Life Beyond Cancer - Yvonne's story", channel: "Cancer Research UK", url: "https://www.youtube.com/watch?v=6h7ly3rlvEw", duration: "2:39", about: "Yvonne shares her story of life after breast cancer and how she coped when her treatment finished, and she and her sister Sonia talk about what it was like going to check-up appointments." },
      { id: "yt-tina-anxiety-after", person: "Tina", title: "Tina's Feelings of Anxiety After Cancer Treatment", channel: "Cancer Support UK", url: "https://www.youtube.com/watch?v=QUfseRJFXls", duration: "1:19", about: "Tina talks about her feelings of anxiety after cancer treatment." },
      { id: "yt-egon-scanxiety", person: "Egon", title: "#NotOk: Egon on ‘scanxiety’ after cancer", channel: "Teenage Cancer Trust", url: "https://www.youtube.com/watch?v=_Wi7MrN5uEg", duration: "0:58", about: "Egon, who was diagnosed with a brain tumour in 2017, shares how the anxiety he had around MRI scans and treatment affected his mental health." },
    ],
    askDoctor: [
      "Which symptoms should I report, and who do I contact?",
      "What follow-up will I have?",
      "Can I be referred for talking therapy?",
      "Is there a support group near me?",
    ],
    related: [
      { groupId: "anxiety", conditionId: "anxiety" },
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
      { groupId: "common-cancers", conditionId: "breast" },
    ],
  },
};

export const fertilityAfterCancer: LibraryCondition = {
  id: "fertility-after-cancer",
  title: "Fertility after cancer",
  summary: "Some cancer treatments can affect fertility, for women and for men. Options to preserve fertility, such as freezing eggs, embryos or sperm, are best discussed before treatment, but there is help afterwards too. Specialist fertility teams can explain what is possible.",
  facts: ["Storage can last up to 55 years", "Semen tests are free on the NHS", "Many have children after chemo"],
  keywords: ["fertility", "egg freezing", "sperm banking", "pregnancy after cancer", "ivf"],
  content: {
    understand: [
      article("how-treatment", "How treatment can affect fertility", 3, { learnId: "fert-how-treatment", blurb: "Chemotherapy, radiotherapy, surgery and hormone treatments.", keywords: ["chemotherapy", "radiotherapy"] }),
      article("women", "Fertility for women", 3, { learnId: "fert-women", keywords: ["eggs", "ovaries", "menopause"] }),
      article("men", "Fertility for men", 3, { learnId: "fert-men", keywords: ["sperm", "testicles"] }),
      article("tests", "Fertility tests after treatment", 3, { learnId: "fert-tests", keywords: ["tests", "amh", "semen analysis"] }),
    ],
    recover: [
      article("preserving", "Preserving fertility", 3, { learnId: "fert-preserving", keywords: ["egg freezing", "sperm banking"] }),
      article("trying", "Trying for a baby after cancer", 3, { learnId: "fert-trying", keywords: ["pregnancy", "trying"] }),
      article("ivf", "IVF and fertility treatment", 3, { learnId: "fert-ivf", keywords: ["ivf", "nhs funding"] }),
      article("other-routes", "Donor eggs or sperm, surrogacy and adoption", 3, { learnId: "fert-other-routes", keywords: ["donor", "adoption"] }),
    ],
    liveWell: [
      article("feelings", "Feelings about fertility", 3, { learnId: "fert-feelings", keywords: ["feelings", "grief"] }),
      article("relationships", "Partners and relationships", 3, { learnId: "fert-relationships", keywords: ["partners"] }),
      article("contraception", "Contraception during and after treatment", 2, { learnId: "fert-contraception", keywords: ["contraception"] }),
      article("support", "Where to get support", 2, { learnId: "fert-support", keywords: ["support"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-ucla-oncofertility", title: "Oncofertility: Fertility preservation before cancer treatment", kind: "video", duration: "3:04", url: "https://www.youtube.com/watch?v=uu8fpa6JGOA", extra: "A fertility specialist on preservation", publisher: "UCLA Health", keywords: ["fertility preservation", "oncofertility", "before treatment"] },
      { id: "yt-cincinnati-sperm-banking", title: "Sperm Banking for Cancer Patients", kind: "video", duration: "3:04", url: "https://www.youtube.com/watch?v=euvkyBej8rE", extra: "How sperm banking saves healthy sperm", publisher: "Cincinnati Children's", keywords: ["sperm banking", "cryopreservation", "chemotherapy"] },
      { id: "yt-bcrt-fertility-cancer", title: "Fertility and cancer", kind: "video", duration: "61:50", url: "https://www.youtube.com/watch?v=r47RSoZt65I", extra: "NHS fertility services and preservation", publisher: "Bone Cancer Research Trust", keywords: ["fertility", "nhs", "preservation"] },
    ],
    sources: [MACMILLAN, CANCER_RESEARCH_UK, source(NHS, "Fertility preservation")],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-robert-fertility", person: "Robert", title: "Cancer treatment and fertility - Robert's story. Macmillan Cancer Support", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=PZzw39-t0h8", duration: "4:46", about: "Robert talks about losing his fertility after chemotherapy and radiotherapy for Hodgkin lymphoma, finding out about the options for preserving fertility, talking to his girlfriend and dealing with the emotions it brought up." },
      { id: "yt-lj-fertility", person: "LJ", title: "Cancer treatment and male fertility: LJ’s story", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=J89SXsQFPCk", duration: "2:55", about: "LJ was diagnosed with leukaemia at 19 and, before starting treatment, chose to freeze his sperm to keep the option of having a family later in life." },
      { id: "yt-amy-fertility", person: "Amy", title: "Amy and Lisa: chemotherapy and fertility", channel: "Teenage Cancer Trust", url: "https://www.youtube.com/watch?v=3XpemdzIz9w", duration: "0:52", about: "Amy was 20 when she was diagnosed with Hodgkin lymphoma, and talks about how chemotherapy affected her fertility and the support she received from nurse Lisa." },
    ],
    askDoctor: [
      "Could my treatment affect my fertility?",
      "Can I be referred to a fertility specialist?",
      "How long should I wait before trying for a baby?",
      "Is NHS funding available for fertility treatment?",
    ],
    related: [
      { groupId: "mens-cancers", conditionId: "testicular" },
      { groupId: "womens-cancers", conditionId: "cervical" },
      { groupId: "blood-cancers", conditionId: "lymphoma" },
    ],
  },
};

export const lateEffects: LibraryCondition = {
  id: "late-effects",
  title: "Late effects of cancer treatment",
  summary: "Effects of cancer treatment that last, or appear months or years afterwards: on the heart, bones, hormones, nerves, bowels and more. Most people do not have serious late effects, but knowing what to look out for means problems can be found and treated early.",
  facts: ["Can start months or years later", "Not everyone will get late effects", "Most nerve symptoms slowly improve"],
  keywords: ["late effects", "long-term effects", "heart", "bones", "after treatment"],
  content: {
    understand: [
      article("what-they-are", "What late effects are", 3, { learnId: "late-what-they-are", blurb: "Effects that last, or start years later.", keywords: ["late effects", "long-term"] }),
      article("which-treatments", "Which treatments can cause them", 3, { learnId: "late-which-treatments", keywords: ["chemotherapy", "radiotherapy", "surgery"] }),
      article("heart", "The heart and blood vessels", 3, { learnId: "late-heart", keywords: ["heart", "blood pressure"] }),
      article("bones-hormones", "Bones and hormones", 3, { learnId: "late-bones-hormones", keywords: ["bones", "hormones", "osteoporosis"] }),
    ],
    recover: [
      article("bowel-bladder", "Bowel and bladder changes", 3, { learnId: "late-bowel-bladder", keywords: ["bowel", "bladder"] }),
      article("nerves", "Nerve damage and numbness", 3, { learnId: "late-nerves", keywords: ["neuropathy", "numbness"] }),
      article("checks", "Checks to ask about", 3, { learnId: "late-checks", keywords: ["checks", "screening"] }),
      article("second-cancers", "Second cancers", 2, { learnId: "late-second-cancers", keywords: ["second cancer"] }),
    ],
    liveWell: [
      article("healthy-living", "Healthy living after treatment", 3, { learnId: "late-healthy-living", keywords: ["healthy", "exercise", "diet"] }),
      article("telling-doctors", "Telling other doctors about your treatment", 2, { learnId: "late-telling-doctors", keywords: ["records", "doctors"] }),
      article("treatment-summary", "Your treatment summary", 2, { learnId: "late-treatment-summary", keywords: ["summary", "care plan"] }),
      article("mood", "Living with long-term effects", 3, { learnId: "late-mood", keywords: ["mood", "coping"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-macmillan-pelvic-late-effects", title: "Late effects of pelvic radiotherapy - Macmillan Cancer Support", kind: "video", duration: "3:18", url: "https://www.youtube.com/watch?v=azsHf21XvO8", extra: "Coping with pelvic radiotherapy late effects", publisher: "Macmillan Cancer Support", keywords: ["pelvic radiotherapy", "late effects", "bowel", "bladder"] },
      { id: "yt-bhf-chemo-heart", title: "Chemotherapy and the heart", kind: "video", duration: "2:35", url: "https://www.youtube.com/watch?v=0eaNEVDD7CQ", extra: "Research into chemotherapy heart damage", publisher: "British Heart Foundation", keywords: ["heart", "chemotherapy", "heart failure"] },
      { id: "yt-ngh-chemo-late-effects", title: "Late effects of chemotherapy for breast cancer treatment", kind: "video", duration: "9:28", url: "https://www.youtube.com/watch?v=UFQISVy6pgs", extra: "Late effects of breast cancer chemotherapy", publisher: "Northampton General Hospital NHS Trust", keywords: ["chemotherapy", "breast cancer", "late effects"] },
    ],
    sources: [MACMILLAN, CANCER_RESEARCH_UK, source(NHS, "Living with cancer")],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-poonam-late-effects", person: "Poonam", title: "Poonam talks about the late effects of her cancer diagnosis", channel: "Bone Cancer Research Trust", url: "https://www.youtube.com/watch?v=Bymxxwo3UZQ", duration: "2:38", about: "Poonam was diagnosed with osteosarcoma at nine years old and had chemotherapy and life-changing surgery, and she shares her story to raise awareness of the long-term and late effects of her treatment." },
      { id: "yt-stephen-prd", person: "Stephen", title: "PRDA22 - Living with Pelvic Radiation Disease", channel: "Pelvic Radiation Disease Association", url: "https://www.youtube.com/watch?v=sPByr4_ZONs", duration: "16:32", about: "Stephen talks with Catherine Sharma about his experience of living with pelvic radiation disease, at the Pelvic Radiation Disease Association's 2022 annual conference." },
      { id: "yt-yvonne-life-beyond", person: "Yvonne", title: "Life Beyond Cancer - Yvonne's story", channel: "Cancer Research UK", url: "https://www.youtube.com/watch?v=6h7ly3rlvEw", duration: "2:39", about: "Yvonne shares how she coped when her breast cancer treatment finished, the physical effects of the cancer and its treatment, what helped her, and what check-up appointments were like with her sister Sonia." },
    ],
    askDoctor: [
      "Which late effects could my treatment cause?",
      "Which checks should I have, and how often?",
      "Can I have a treatment summary to share with other doctors?",
      "Who do I contact if I notice a new symptom?",
    ],
    related: [
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
      { groupId: "bone-health", conditionId: "osteoporosis" },
      { groupId: "heart-attack", conditionId: "heart-failure" },
    ],
  },
};

export const boneMetastases: LibraryCondition = {
  id: "bone-metastases",
  title: "Secondary bone cancer",
  summary: "Cancer that has spread to the bones from somewhere else, most often from breast, prostate or lung cancer. Treatment can strengthen the bones, ease pain and help prevent fractures. Knowing the warning signs that need urgent help is important.",
  facts: ["Pain is the most common symptom", "Any cancer can spread to the bones", "Spinal cord compression is an emergency"],
  keywords: ["secondary bone cancer", "bone metastases", "bone pain", "spinal cord compression", "bisphosphonates"],
  content: {
    understand: [
      article("what-it-is", "What secondary bone cancer is", 3, { learnId: "bmet-what-it-is", blurb: "Cancer that has spread to the bones.", extra: "With a diagram", keywords: ["spread", "bones"] }),
      article("symptoms", "Bone pain and other symptoms", 3, { learnId: "bmet-symptoms", keywords: ["pain", "symptoms"] }),
      article("emergencies", "Warning signs that need urgent help", 3, { learnId: "bmet-emergencies", keywords: ["spinal cord compression", "calcium", "fracture"] }),
      article("tests", "Scans and tests", 3, { learnId: "bmet-tests", keywords: ["bone scan", "mri"] }),
    ],
    recover: [
      article("bone-drugs", "Medicines that strengthen bones", 3, { learnId: "bmet-bone-drugs", keywords: ["bisphosphonates", "denosumab"] }),
      article("radiotherapy", "Radiotherapy for bone pain", 3, { learnId: "bmet-radiotherapy", keywords: ["radiotherapy", "pain"] }),
      article("pain", "Managing pain", 3, { learnId: "bmet-pain", keywords: ["pain", "painkillers"] }),
      article("surgery", "Surgery to support a bone", 2, { learnId: "bmet-surgery", keywords: ["surgery", "fracture"] }),
    ],
    liveWell: [
      article("moving", "Moving safely and staying active", 3, { learnId: "bmet-moving", keywords: ["moving", "activity"] }),
      article("teeth", "Dental care on bone medicines", 2, { learnId: "bmet-teeth", keywords: ["dentist", "jaw"] }),
      article("home", "Help at home", 3, { learnId: "bmet-home", keywords: ["home", "equipment"] }),
      article("mood", "Mood and support", 3, { learnId: "bmet-mood", keywords: ["mood", "support"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-cruk-secondary-cancer", title: "What is Secondary Cancer? | Cancer Research UK", kind: "video", duration: "2:42", url: "https://www.youtube.com/watch?v=WGbogCPY5D4", extra: "How cancers spread, and treatment", publisher: "Cancer Research UK", keywords: ["secondary cancer", "metastasis", "spread"] },
      { id: "yt-pcuk-advanced-prostate", title: "What is advanced prostate cancer?", kind: "video", duration: "2:44", url: "https://www.youtube.com/watch?v=rIfd_FznP_A", extra: "Where prostate cancer can spread", publisher: "Prostate Cancer UK", keywords: ["advanced prostate cancer", "spread", "bones"] },
      { id: "yt-uva-bone-pain", title: "Metastatic Bone Cancer: Bone Pain When Breast & Prostate Cancer Spreads", kind: "video", duration: "1:36", url: "https://www.youtube.com/watch?v=MuJzWhrIOk8", extra: "A doctor explains bone pain", publisher: "UVA Health", keywords: ["bone metastases", "bone pain", "breast", "prostate"] },
    ],
    sources: [MACMILLAN, CANCER_RESEARCH_UK, source(NHS, "Palliative care")],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-shonagh-secondary-breast", person: "Shonagh", title: "Shonagh tells her secondary breast cancer story", channel: "bccampaign", url: "https://www.youtube.com/watch?v=PxY8zBDQ_sU", duration: "3:25", about: "Shonagh tells the story of finding out that her breast cancer had spread to another part of her body, such as the bones." },
      { id: "yt-sue-secondary-breast", person: "Sue", title: "SUE'S STORY - Secondary Breast Cancer", channel: "Macmillan Cancer Improvement Partnership", url: "https://www.youtube.com/watch?v=yMTuheqIPys", duration: "4:43", about: "Sue tells her story of living with secondary breast cancer." },
      { id: "yt-laura-secondary-sisters", person: "Laura", title: "Laura on founding Secondary Sisters | Breast Cancer Now Podcast (S6 E17)", channel: "Breast Cancer Now", url: "https://www.youtube.com/watch?v=co_KClaeXmM", duration: "59:33", about: "Laura, diagnosed with secondary breast cancer aged 28, talks about how the diagnosis affected her life, adjusting to an uncertain future and founding Secondary Sisters, an online community for people with secondary cancer." },
    ],
    askDoctor: [
      "Which warning signs mean I need urgent help, and who do I call?",
      "Would bone-strengthening medicines help me?",
      "What can help with my pain?",
      "Should I see a dentist before starting bone medicines?",
    ],
    related: [
      { groupId: "advanced-cancer", conditionId: "secondary-cancer" },
      { groupId: "common-cancers", conditionId: "breast" },
      { groupId: "common-cancers", conditionId: "prostate" },
    ],
  },
};

export const caringAdvanced: LibraryCondition = {
  id: "caring-advanced",
  title: "Caring for someone with advanced cancer",
  summary: "Looking after someone with advanced cancer can be rewarding and exhausting at once. There is practical, financial and emotional help for carers, from carer's assessments to palliative care teams and helplines, and looking after yourself matters too.",
  facts: ["Carer's assessments are free", "Palliative care can last for years", "Hospice care is free"],
  keywords: ["carer", "caring", "advanced cancer", "palliative care", "carer's assessment"],
  content: {
    understand: [
      article("role", "Becoming a carer", 3, { learnId: "carer-role", blurb: "What caring can involve, and that you are not alone.", keywords: ["carer", "role"] }),
      article("palliative", "Palliative care and who is in the team", 3, { learnId: "carer-palliative", keywords: ["palliative care", "hospice"] }),
      article("symptoms", "Symptoms to look out for", 3, { learnId: "carer-symptoms", keywords: ["symptoms", "urgent"] }),
      article("talking", "Talking about what matters to them", 3, { learnId: "carer-talking", keywords: ["talking", "wishes"] }),
    ],
    recover: [
      article("practical", "Practical care at home", 3, { learnId: "carer-practical", keywords: ["home", "equipment"] }),
      article("assessment", "A carer's assessment", 3, { learnId: "carer-assessment", keywords: ["carer's assessment"] }),
      article("money", "Money, benefits and work", 3, { learnId: "carer-money", keywords: ["carer's allowance", "benefits"] }),
      article("respite", "Breaks and respite", 3, { learnId: "carer-respite", keywords: ["respite", "breaks"] }),
    ],
    liveWell: [
      article("own-health", "Looking after yourself", 3, { learnId: "carer-own-health", keywords: ["self-care", "health"] }),
      article("feelings", "Your feelings", 3, { learnId: "carer-feelings", keywords: ["feelings", "stress"] }),
      article("children", "Supporting children", 3, { learnId: "carer-children", keywords: ["children", "family"] }),
      article("support", "Helplines and support", 2, { learnId: "carer-support", keywords: ["helplines", "support"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-carersuk-assessments", title: "Carers' Assessments", kind: "video", duration: "3:13", url: "https://www.youtube.com/watch?v=2uZfwOeuUvw", extra: "An introduction to carers' assessments", publisher: "Carers UK", keywords: ["carer's assessment", "council", "support"] },
      { id: "yt-nhs-end-of-life-care", title: "End of life care | NHS", kind: "video", duration: "5:21", url: "https://www.youtube.com/watch?v=BuF5qxIDa3c", extra: "An expert explains end of life care", publisher: "NHS", keywords: ["end of life care", "palliative care", "family"] },
      { id: "yt-mariecurie-what-to-expect", title: "What to expect at the end of life", kind: "video", duration: "9:19", url: "https://www.youtube.com/watch?v=slNShkHNNpw", extra: "A nurse and carers on the last weeks", publisher: "Marie Curie", keywords: ["end of life", "carers", "changes"] },
    ],
    sources: [MACMILLAN, MARIE_CURIE, source(NHS, "Carers")],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-joe-caring", person: "Joe", title: "Caring for someone with Cancer - Joe's Story", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=_j8nlHGbysY", duration: "4:00", about: "Joe talks about caring for his wife, Melita, the emotions he felt, and the support he and his family received from Macmillan." },
      { id: "yt-ian-caring", person: "Ian", title: "Ian's Story | caring for someone when their cancer comes back", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=MhJP8XNs7Fk", duration: "3:36", about: "Ian's wife Kate was diagnosed with cervical cancer at 30 and later found out it was incurable; her Macmillan nurse supported her, and Ian used Macmillan's services too." },
      { id: "yt-ciaran-caring", person: "Ciaran", title: "Caring for someone with advanced cancer - Macmillan Cancer Support", channel: "Macmillan Cancer Support", url: "https://www.youtube.com/watch?v=KZaGDVqr8vE", duration: "8:30", about: "Ciaran Devane, Macmillan's chief executive from 2007 to 2014, talks about caring for his partner with terminal cancer, the emotions they went through and the support they received." },
    ],
    askDoctor: [
      "Who do we call, day or night, if they become unwell?",
      "Can we be referred to a palliative care team?",
      "How do I get a carer's assessment?",
      "What help is there so I can take a break?",
    ],
    related: [
      { groupId: "advanced-cancer", conditionId: "secondary-cancer" },
      { groupId: "depression", conditionId: "depression" },
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
    ],
  },
};
