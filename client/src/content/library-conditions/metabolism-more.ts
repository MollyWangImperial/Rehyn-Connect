import type { LibraryCondition } from "../library";
import { ADDISONS_SELF_HELP, article, BHF, DIABETES_UK, HEART_UK, NHS, piece, ROS, source, THYROID_UK, VERSUS_ARTHRITIS } from "../library-helpers";

// Diabetes & metabolism, the rest of the section: gestational diabetes and hypos; thyroid nodules and goitre;
// high cholesterol and familial hypercholesterolaemia; obesity; PCOS and Addison's disease; gout and vitamin D
// deficiency. Same shape as the pages in body.ts.

export const gestationalDiabetes: LibraryCondition = {
  id: "gestational-diabetes",
  title: "Gestational diabetes",
  summary: "High blood sugar that develops during pregnancy and usually goes away after the birth. It is checked for in pregnancy, and diet, activity and sometimes medicine keep it under control. It also means a higher chance of type 2 diabetes later, so the checks after the birth matter too.",
  facts: ["Affects about 1 in 8 pregnant women", "Tested at 24 to 28 weeks of pregnancy", "Usually goes away after the birth"],
  keywords: ["gestational diabetes", "pregnancy", "blood sugar", "glucose test", "ogtt"],
  content: {
    understand: [
      article("what-it-is", "What gestational diabetes is", 3, { learnId: "gd-what-it-is", blurb: "Why pregnancy can raise blood sugar.", extra: "With a diagram", keywords: ["pregnancy", "insulin", "cause"] }),
      article("risk", "Who is more likely to get it", 3, { learnId: "gd-risk", keywords: ["risk", "weight", "family"] }),
      article("tests", "The glucose test in pregnancy", 3, { learnId: "gd-tests", keywords: ["ogtt", "test", "screening"] }),
      article("baby", "What it can mean for you and your baby", 3, { learnId: "gd-baby", keywords: ["baby", "birth", "risks"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("checking", "Checking your blood sugar at home", 3, { learnId: "gd-checking", keywords: ["blood sugar", "testing", "meter"] }),
      article("food", "Eating with gestational diabetes", 4, { learnId: "gd-food", keywords: ["food", "diet", "carbohydrates"] }),
      article("medicines", "Metformin and insulin in pregnancy", 3, { learnId: "gd-medicines", keywords: ["metformin", "insulin", "medicine"] }),
      article("activity", "Staying active in pregnancy", 3, { learnId: "gd-activity", keywords: ["exercise", "activity", "walking"] }),
    ],
    liveWell: [
      article("birth", "Labour, birth and the first days", 3, { learnId: "gd-birth", keywords: ["labour", "birth", "induction"] }),
      article("after", "After the birth: the checks that follow", 3, { learnId: "gd-after", keywords: ["after birth", "test", "type 2"] }),
      article("next-pregnancy", "A future pregnancy", 2, { learnId: "gd-next-pregnancy", keywords: ["next pregnancy", "planning"] }),
      article("feelings", "Feelings, worry and support", 3, { learnId: "gd-feelings", keywords: ["worry", "feelings", "support"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-nhs-gestational-diabetes", title: "Gestational diabetes | NHS", kind: "video", duration: "6:13", url: "https://www.youtube.com/watch?v=TOlTrQvNCKo", extra: "A Diabetes UK care adviser explains", publisher: "NHS", keywords: ["gestational diabetes", "pregnancy", "symptoms"] },
      { id: "yt-ulh-gestational-explained", title: "Gestational diabetes explained", kind: "video", duration: "3:18", url: "https://www.youtube.com/watch?v=ieB1OvE52lg", extra: "Advice from a hospital diabetes team", publisher: "United Lincolnshire Hospitals NHS Trust News", keywords: ["gestational diabetes", "advice"] },
      { id: "yt-mkuh-testing-at-home", title: "Gestational Diabetes: Testing your blood sugar at home", kind: "video", duration: "4:36", url: "https://www.youtube.com/watch?v=BRkrl_jRZhg", extra: "A diabetes midwife shows home testing", publisher: "Milton Keynes University Hospital", keywords: ["blood sugar", "testing", "meter"] },
    ],
    sources: [source(NHS, "Gestational diabetes"), DIABETES_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-duk-rei-gestational", person: "Rei", title: "Gestational diabetes and pregnancy | Rei’s story | Diabetes UK", channel: "Diabetes UK", url: "https://www.youtube.com/watch?v=8xz4VCgx-uE", duration: "3:42", about: "Rei shares her story of gestational diabetes in pregnancy, with tips and information." },
      { id: "yt-duk-roisin-gestational", person: "Roisin", title: "Roisin's experience with gestational diabetes | Diabetes UK", channel: "Diabetes UK", url: "https://www.youtube.com/watch?v=Uqc97gyOsFM", duration: "6:13", about: "BBC Radio newsreader Roisin Hastie tells her experience of developing gestational diabetes during pregnancy." },
      { id: "yt-duk-sian-type-2", person: "Sian", title: "Sian's story: I was devastated by my type 2 diabetes diagonosis", channel: "Diabetes UK", url: "https://www.youtube.com/watch?v=GffXzIIlc1M", duration: "1:18", about: "Sian shares her experience of being diagnosed with type 2 diabetes before her third pregnancy." },
    ],
    askDoctor: [
      "What blood sugar levels should I aim for?",
      "Will I need medicine, and is it safe for my baby?",
      "How will my birth be planned?",
      "When will I be tested for diabetes after the birth?",
    ],
    related: [
      { groupId: "diabetes", conditionId: "type-2" },
      { groupId: "diabetes", conditionId: "prediabetes" },
      { groupId: "hormones", conditionId: "pcos" },
    ],
  },
};

export const hypoglycaemia: LibraryCondition = {
  id: "hypoglycaemia",
  title: "Hypos (low blood sugar)",
  summary: "Blood sugar that drops too low, most often in people who take insulin or some diabetes tablets. Shaking, sweating and confusion are common signs. Knowing the signs, treating a hypo quickly and finding out why it happened all help prevent the next one.",
  facts: ["A hypo is usually below 4mmol/L", "Treat with 15 to 20g of fast carbs", "Rare in people without diabetes"],
  keywords: ["hypo", "hypoglycaemia", "low blood sugar", "shaky", "sweating", "glucose"],
  content: {
    understand: [
      article("what-it-is", "What a hypo is", 3, { learnId: "hypogly-what-it-is", blurb: "When blood sugar drops too low, and why.", extra: "With a diagram", keywords: ["low blood sugar", "cause"] }),
      article("signs", "The signs, early and late", 3, { learnId: "hypogly-signs", keywords: ["signs", "shaking", "sweating", "confused"] }),
      article("causes", "Why hypos happen", 3, { learnId: "hypogly-causes", keywords: ["insulin", "missed meal", "exercise", "alcohol"] }),
      article("unawareness", "When you stop noticing the warning signs", 3, { learnId: "hypogly-unawareness", keywords: ["unawareness", "warning signs"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("treating", "Treating a hypo quickly", 3, { learnId: "hypogly-treating", keywords: ["treat", "sugary drink", "glucose tablets"] }),
      article("severe", "Severe hypos and glucagon", 3, { learnId: "hypogly-severe", keywords: ["severe", "glucagon", "999"] }),
      article("night", "Hypos at night", 3, { learnId: "hypogly-night", keywords: ["night", "sleep", "morning"] }),
      article("medicines-review", "Reviewing insulin and tablets", 3, { learnId: "hypogly-medicines-review", keywords: ["insulin", "sulfonylurea", "review"] }),
    ],
    liveWell: [
      article("driving", "Driving and hypos", 3, { learnId: "hypogly-driving", keywords: ["driving", "dvla", "check"] }),
      article("exercise-alcohol", "Exercise, alcohol and hypos", 3, { learnId: "hypogly-exercise-alcohol", keywords: ["exercise", "alcohol"] }),
      article("telling-others", "Telling people what to do", 2, { learnId: "hypogly-telling-others", keywords: ["family", "work", "friends"] }),
      article("kit", "Carrying a hypo kit", 2, { learnId: "hypogly-kit", keywords: ["kit", "glucose tablets"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-duk-hypo-feel", title: "Diabetes hypos | What does hypoglycaemia Feel Like? | Diabetes UK", kind: "video", duration: "1:16", url: "https://www.youtube.com/watch?v=4LttAS3HpA0", extra: "What a hypo feels like", publisher: "Diabetes UK", keywords: ["hypo", "symptoms", "low blood sugar"] },
      { id: "yt-uclh-hypo-treatment", title: "Diabetes and Hypoglycaemia (Low blood sugar) | Symptoms, management and treatment", kind: "video", duration: "4:39", url: "https://www.youtube.com/watch?v=bdfk3WmsF4E", extra: "Symptoms, treatment and prevention", publisher: "University College London Hospitals NHS Foundation Trust", keywords: ["hypoglycaemia", "treatment", "prevention"] },
      { id: "yt-uclh-hypo-driving", title: "Hypoglycaemia (Low blood sugar) | What to do if you experience a hypo while driving?", kind: "video", duration: "1:43", url: "https://www.youtube.com/watch?v=PhPMPP9LiaU", extra: "What to do at the wheel", publisher: "University College London Hospitals NHS Foundation Trust", keywords: ["driving", "hypo", "safety"] },
    ],
    sources: [source(NHS, "Low blood sugar (hypoglycaemia)"), DIABETES_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-duk-mim-licence", person: "Mim", title: "Diabetes and your driving licence | Mim’s story | Diabetes UK", channel: "Diabetes UK", url: "https://www.youtube.com/watch?v=mR89P0kUyN0", duration: "2:58", about: "Mim had one severe hypo when she was not driving and had her licence taken away, and Diabetes UK helped her fight back." },
      { id: "yt-duk-lynsey-anxiety", person: "Lynsey", title: "What causes hypo anxiety? | Lynsey and Khalida | Diabetes UK", channel: "Diabetes UK", url: "https://www.youtube.com/watch?v=aoNfsevdb9U", duration: "1:50", about: "Lynsey shares her hypo worries with diabetes and mental health specialist Khalida Ismail, who explains why it is such a common problem." },
      { id: "yt-duk-jen-first-date", person: "Jen", title: "Jen Grieves on hypos and first dates | #TheOne | Diabetes UK", channel: "Diabetes UK", url: "https://www.youtube.com/watch?v=t4Hr6droWZo", duration: "0:51", about: "Type 1 blogger Jen Grieves talks about having a hypo on a first date." },
    ],
    askDoctor: [
      "Why am I having hypos, and should my medicines change?",
      "Should I have glucagon at home?",
      "What do I need to check before driving?",
      "Would a continuous glucose monitor help me?",
    ],
    related: [
      { groupId: "diabetes", conditionId: "type-1" },
      { groupId: "diabetes", conditionId: "type-2" },
      { groupId: "blood-pressure", conditionId: "low-blood-pressure" },
    ],
  },
};

export const thyroidNodules: LibraryCondition = {
  id: "nodules-goitre",
  title: "Thyroid nodules and goitre",
  summary: "Lumps in the thyroid gland, or a swelling of the whole gland, in the front of the neck. Most nodules are harmless and many need no treatment, but they are checked with blood tests and an ultrasound scan to be sure.",
  facts: ["More than 9 in 10 nodules are benign", "Most goitres cause no problems", "More common in women and with age"],
  keywords: ["thyroid nodule", "goitre", "neck lump", "swelling", "thyroid lump"],
  content: {
    understand: [
      article("what-it-is", "Nodules and goitre: what they are", 3, { learnId: "tn-what-it-is", blurb: "A lump in the gland, or the whole gland growing.", extra: "With a diagram", keywords: ["nodule", "goitre", "lump"] }),
      article("causes", "Why they happen", 3, { learnId: "tn-causes", keywords: ["causes", "iodine", "thyroid"] }),
      article("symptoms", "Symptoms, and when there are none", 3, { learnId: "tn-symptoms", keywords: ["symptoms", "swallowing", "neck"] }),
      article("tests", "Blood tests, ultrasound and the needle test", 3, { learnId: "tn-tests", keywords: ["ultrasound", "biopsy", "fna"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("watching", "Keeping an eye on it", 3, { learnId: "tn-watching", keywords: ["monitoring", "scan", "watch"] }),
      article("treatments", "Treatments when they are needed", 3, { learnId: "tn-treatments", keywords: ["treatment", "radioiodine", "medicines"] }),
      article("surgery", "Thyroid surgery", 4, { learnId: "tn-surgery", keywords: ["thyroidectomy", "operation"] }),
      article("after-surgery", "After surgery: the voice, calcium and tablets", 3, { learnId: "tn-after-surgery", keywords: ["voice", "calcium", "levothyroxine"] }),
    ],
    liveWell: [
      article("worry", "The worry of a lump", 3, { learnId: "tn-worry", keywords: ["worry", "cancer", "results"] }),
      article("urgent", "Signs to get checked quickly", 2, { learnId: "tn-urgent", keywords: ["urgent", "breathing", "swallowing"] }),
      article("iodine", "Iodine and food", 2, { learnId: "tn-iodine", keywords: ["iodine", "food", "diet"] }),
      article("follow-up", "Follow-up and check-ups", 2, { learnId: "tn-follow-up", keywords: ["follow-up", "checks"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-cc-what-is-nodule", title: "What Is a Thyroid Nodule?", kind: "video", duration: "1:10", url: "https://www.youtube.com/watch?v=09oX__bND7U", extra: "An endocrinologist explains thyroid nodules", publisher: "Cleveland Clinic", keywords: ["nodule", "lump", "next steps"] },
      { id: "yt-cc-thyroid-fna", title: "Fine Needle Aspiration (FNA) of the Thyroid Gland", kind: "video", duration: "6:51", url: "https://www.youtube.com/watch?v=ha2R_P9fqBc", extra: "What happens during a thyroid FNA", publisher: "Cleveland Clinic", keywords: ["fna", "biopsy", "needle test"] },
      { id: "yt-rbft-total-thyroidectomy", title: "Consent for Surgery: Total Thyroidectomy", kind: "video", duration: "18:27", url: "https://www.youtube.com/watch?v=LCkOygXkSdU", extra: "Before consenting to a total thyroidectomy", publisher: "Royal Berkshire NHS Foundation Trust", keywords: ["thyroidectomy", "surgery", "consent"] },
    ],
    sources: [source(NHS, "Goitre"), THYROID_UK],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-sarah-goitre", person: "Sarah", title: "Sarah Bird - Thyroid Patient", channel: "Mount Sinai Health System", url: "https://www.youtube.com/watch?v=1n6TSyrKxMM", duration: "1:45", about: "Sarah had a partial thyroid resection, both to diagnose and to treat a nodular goitre." },
      { id: "yt-eric-nodule", person: "Eric", title: "Eric's Story: Papillary Carinoma Thyroid Nodule", channel: "Mass Eye and Ear", url: "https://www.youtube.com/watch?v=KVvhxGnig1g", duration: "3:01", about: "Eric's thyroid nodule was found when his vocal cords were being checked; he had it removed, is now cancer free and has advice for others." },
      { id: "yt-btf-cory", person: "Cory", title: "Thyroid Cancer - Patient Journeys - Cory", channel: "Anna Wooll", url: "https://www.youtube.com/watch?v=w4W2KwlPL-s", duration: "4:48", about: "Cory was diagnosed with follicular thyroid cancer in October 2012, was given the all clear in September 2013, and now sees life as a set of opportunities." },
    ],
    askDoctor: [
      "Does my nodule need a needle test?",
      "How often will it be checked?",
      "Would treatment or surgery help me?",
      "What signs should make me come back sooner?",
    ],
    related: [
      { groupId: "thyroid", conditionId: "underactive" },
      { groupId: "thyroid", conditionId: "overactive" },
      { groupId: "anxiety", conditionId: "anxiety" },
    ],
  },
};

export const highCholesterol: LibraryCondition = {
  id: "high-cholesterol",
  title: "High cholesterol",
  summary: "Too much of a fatty substance in the blood, which can build up in the arteries and raise the risk of heart attacks and strokes. It usually causes no symptoms and is found on a blood test. Food, activity and, for many people, a statin bring it down.",
  facts: ["Usually causes no symptoms", "Found only with a blood test", "About half of UK adults above 5mmol/L"],
  keywords: ["cholesterol", "ldl", "hdl", "statins", "lipids", "blood test"],
  content: {
    understand: [
      article("what-it-is", "What cholesterol is", 3, { learnId: "chol-what-it-is", blurb: "Good and bad cholesterol, and where it goes.", extra: "With a diagram", keywords: ["ldl", "hdl", "fat"] }),
      article("numbers", "Your cholesterol test and the numbers", 3, { learnId: "chol-numbers", keywords: ["test", "numbers", "non-hdl"] }),
      article("causes", "Why it is high", 3, { learnId: "chol-causes", keywords: ["causes", "diet", "family"] }),
      article("risk", "Your heart and stroke risk", 3, { learnId: "chol-risk", keywords: ["risk", "qrisk", "heart"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("statins", "Statins: what they do and side effects", 4, { learnId: "chol-statins", keywords: ["statins", "atorvastatin", "side effects"] }),
      article("other-medicines", "Other medicines that lower cholesterol", 3, { learnId: "chol-other-medicines", keywords: ["ezetimibe", "injections", "medicines"] }),
      article("food", "Eating to lower cholesterol", 4, { learnId: "chol-food", keywords: ["food", "fats", "fibre"] }),
      article("activity", "Activity, weight and smoking", 3, { learnId: "chol-activity", keywords: ["exercise", "weight", "smoking"] }),
    ],
    liveWell: [
      article("rechecks", "Rechecking your cholesterol", 2, { learnId: "chol-rechecks", keywords: ["recheck", "blood test"] }),
      article("labels", "Reading food labels", 3, { learnId: "chol-labels", keywords: ["labels", "saturated fat"] }),
      article("myths", "Eggs, butter and other questions", 3, { learnId: "chol-myths", keywords: ["eggs", "butter", "myths"] }),
      article("family", "Cholesterol in the family", 2, { learnId: "chol-family", keywords: ["family", "genetic", "children"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-heartuk-understanding-cholesterol", title: "Understanding your Cholesterol", kind: "video", duration: "4:53", url: "https://www.youtube.com/watch?v=pDZF7lFqSiw", extra: "Cholesterol, triglycerides and test results", publisher: "HEART UK- The Cholesterol Charity", keywords: ["cholesterol", "triglycerides", "test results"] },
      { id: "yt-bhf-statins-side-effects", title: "Statins, side effects and what they're used for", kind: "video", duration: "1:49", url: "https://www.youtube.com/watch?v=o6Oi_N5jotg", extra: "What statins do, and side effects", publisher: "British Heart Foundation", keywords: ["statins", "side effects", "medicine"] },
      { id: "yt-bhf-foods-lower-cholesterol", title: "Foods to reduce high cholesterol naturally", kind: "video", duration: "2:00", url: "https://www.youtube.com/watch?v=RnF3j-IvhQc", extra: "Foods to avoid and foods that help", publisher: "British Heart Foundation", keywords: ["food", "saturated fat", "eggs"] },
    ],
    sources: [source(NHS, "High cholesterol"), HEART_UK, BHF],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-heartuk-rahim", person: "Rahim", title: "Rahim's Heart Health Story | HEART UK - the Cholesterol Charity | Heart of the Family", channel: "HEART UK- The Cholesterol Charity", url: "https://www.youtube.com/watch?v=mXslah5qOpc", duration: "1:48", about: "Rahim was overweight with high cholesterol, and after advice from HEART UK's Cholesterol Helpline he changed his diet, gave up smoking, lost weight and now has healthy cholesterol levels." },
      { id: "yt-bhf-karen-exercise", person: "Karen", title: "British Heart Foundation - High cholesterol and exercise, Karen's story", channel: "British Heart Foundation", url: "https://www.youtube.com/watch?v=Dw0G2sOwJDU", duration: "1:30", about: "Karen tells us what she's doing to reduce her blood cholesterol levels." },
      { id: "yt-bhf-ali-statins", person: "Ali", title: "British Heart Foundation - High cholesterol and statins, Ali's story", channel: "British Heart Foundation", url: "https://www.youtube.com/watch?v=roeqO8rKhRw", duration: "1:30", about: "Ali tells us what he's doing to reduce his blood cholesterol levels." },
    ],
    askDoctor: [
      "What are my cholesterol numbers and my heart risk score?",
      "Would a statin help me, and what about side effects?",
      "When should my cholesterol be checked again?",
      "Could high cholesterol run in my family?",
    ],
    related: [
      { groupId: "cholesterol", conditionId: "familial-hypercholesterolaemia" },
      { groupId: "heart-attack", conditionId: "coronary-heart-disease" },
      { groupId: "blood-pressure", conditionId: "high-blood-pressure" },
    ],
  },
};

export const familialHypercholesterolaemia: LibraryCondition = {
  id: "familial-hypercholesterolaemia",
  title: "Familial hypercholesterolaemia (FH)",
  summary: "An inherited condition that causes very high cholesterol from birth. Without treatment it can lead to heart disease at a young age, which is why finding it early, and testing relatives, matters so much. Treatment works well.",
  facts: ["About 1 in 250 people have FH", "A 1 in 2 chance of passing it on", "Treated FH: a normal, healthy life"],
  keywords: ["fh", "familial hypercholesterolaemia", "inherited cholesterol", "genetic", "family"],
  content: {
    understand: [
      article("what-it-is", "What FH is", 3, { learnId: "fh-what-it-is", blurb: "An inherited gene, and cholesterol that stays high.", extra: "With a diagram", keywords: ["gene", "inherited"] }),
      article("signs", "Signs and family history", 3, { learnId: "fh-signs", keywords: ["signs", "xanthomas", "family history"] }),
      article("diagnosis", "Diagnosis and the genetic test", 3, { learnId: "fh-diagnosis", keywords: ["genetic test", "diagnosis"] }),
      article("risk", "What it means for your heart", 3, { learnId: "fh-risk", keywords: ["heart", "risk"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("statins", "Statins and FH", 3, { learnId: "fh-statins", keywords: ["statins", "treatment"] }),
      article("other-treatments", "Other treatments", 3, { learnId: "fh-other-treatments", keywords: ["ezetimibe", "injections", "apheresis"] }),
      article("lifestyle", "Food, activity and not smoking", 3, { learnId: "fh-lifestyle", keywords: ["food", "exercise", "smoking"] }),
      article("clinic", "The lipid clinic", 2, { learnId: "fh-clinic", keywords: ["clinic", "specialist"] }),
    ],
    liveWell: [
      article("relatives", "Testing your relatives", 3, { learnId: "fh-relatives", keywords: ["relatives", "cascade testing"] }),
      article("children", "Children and FH", 3, { learnId: "fh-children", keywords: ["children", "statins", "testing"] }),
      article("pregnancy", "Pregnancy and FH", 2, { learnId: "fh-pregnancy", keywords: ["pregnancy", "statins"] }),
      article("living", "Living well with FH", 2, { learnId: "fh-living", keywords: ["living", "support"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-heartuk-what-is-fh", title: "What is Familial Hypercholesterolaemia?", kind: "video", duration: "4:17", url: "https://www.youtube.com/watch?v=R_1x0x-YOxY", extra: "An inherited condition, explained", publisher: "HEART UK- The Cholesterol Charity", keywords: ["fh", "inherited", "genes"] },
      { id: "yt-heartuk-jarvis-fh", title: "High Cholesterol Can Be Inherited, Dr Sarah Jarvis Explains How #FindFH", kind: "video", duration: "6:01", url: "https://www.youtube.com/watch?v=UxSxqniP0yU", extra: "Signs, diagnosis and treatment of FH", publisher: "HEART UK- The Cholesterol Charity", keywords: ["signs", "diagnosis", "treatment"] },
      { id: "yt-nichs-what-is-fh", title: "What is Familial hypercholesterolemia (FH)? - Familial hypercholesterolemia Video Series", kind: "video", duration: "2:47", url: "https://www.youtube.com/watch?v=qMYBzOxNFrk", extra: "A short guide to what FH is", publisher: "NI Chest Heart and Stroke", keywords: ["fh", "family", "screening"] },
    ],
    sources: [HEART_UK, BHF, source(NHS, "High cholesterol")],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-bhf-suzanne-fh", person: "Suzanne", title: "British Heart Foundation - Familial Hypercholesterolaemia (FH), Suzanne's story", channel: "British Heart Foundation", url: "https://www.youtube.com/watch?v=C5t6WGP7jOc", duration: "1:43", about: "Suzanne talks about how she found out she has FH, how it has affected her and her family, and what she does to reduce her cholesterol." },
      { id: "yt-heartuk-rob-fh", person: "Rob", title: "Rob's story- living with FH hasn't stopped me living a full and active life", channel: "HEART UK- The Cholesterol Charity", url: "https://www.youtube.com/watch?v=XhhHDHY1xY0", duration: "4:01", about: "Rob shares his story from his first FH diagnosis to the positive steps he has taken, including running the London Marathon in 2016 for HEART UK." },
      { id: "yt-heartuk-kate-fh", person: "Kate", title: "Kate's Story | HEART UK - the Cholesterol Charity | Heart of the Family", channel: "HEART UK- The Cholesterol Charity", url: "https://www.youtube.com/watch?v=aP_gQZa-oHA", duration: "5:02", about: "Kate was diagnosed with FH after seeing her doctor about what she thought was a skin condition under her eyes, which turned out to be xanthelasmata." },
    ],
    askDoctor: [
      "Has FH been confirmed with a genetic test?",
      "Should my children, brothers, sisters and parents be tested?",
      "Is my cholesterol at target on my treatment?",
      "Can I be referred to a lipid clinic?",
    ],
    related: [
      { groupId: "cholesterol", conditionId: "high-cholesterol" },
      { groupId: "heart-attack", conditionId: "coronary-heart-disease" },
      { groupId: "heart-attack", conditionId: "heart-attack" },
    ],
  },
};

export const obesity: LibraryCondition = {
  id: "obesity",
  title: "Obesity",
  summary: "Carrying more body fat than is healthy, which raises the risk of type 2 diabetes, heart disease, joint pain and more. It is common and has many causes beyond willpower. Losing even a small amount of weight helps, and there is support from diet and activity programmes to medicines and surgery.",
  facts: ["Losing 5 to 10% can improve health", "Aim for a waist under half your height", "Not caused by a lack of willpower"],
  keywords: ["obesity", "weight", "bmi", "weight loss", "overweight", "waist"],
  content: {
    understand: [
      article("what-it-is", "What obesity means, and BMI", 3, { learnId: "ob-what-it-is", blurb: "BMI, waist size and what they can and cannot tell you.", extra: "With a diagram", keywords: ["bmi", "waist", "measure"] }),
      article("causes", "Why it happens", 3, { learnId: "ob-causes", keywords: ["causes", "genes", "medicines", "sleep"] }),
      article("health", "How it affects health", 3, { learnId: "ob-health", keywords: ["diabetes", "heart", "joints"] }),
      article("small-loss", "Why a small loss makes a difference", 2, { learnId: "ob-small-loss", keywords: ["weight loss", "benefits"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("programmes", "Weight management programmes", 3, { learnId: "ob-programmes", keywords: ["programme", "nhs", "support"] }),
      article("food", "Eating changes that last", 4, { learnId: "ob-food", keywords: ["food", "diet", "portions"] }),
      article("medicines", "Weight loss medicines", 4, { learnId: "ob-medicines", keywords: ["medicines", "injections", "semaglutide"] }),
      article("surgery", "Weight loss surgery", 4, { learnId: "ob-surgery", keywords: ["surgery", "bariatric", "gastric band"] }),
    ],
    liveWell: [
      article("activity", "Getting more active, at your own pace", 3, { learnId: "ob-activity", keywords: ["activity", "walking", "exercise"] }),
      article("stigma", "Weight stigma and talking to your doctor", 3, { learnId: "ob-stigma", keywords: ["stigma", "doctor", "feelings"] }),
      article("mood", "Mood, eating and stress", 3, { learnId: "ob-mood", keywords: ["mood", "stress", "emotional eating"] }),
      article("keeping-off", "Keeping weight off", 3, { learnId: "ob-keeping-off", keywords: ["maintenance", "regain"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-nhs-bmi-questions", title: "Common health questions about BMI | NHS", kind: "video", duration: "1:52", url: "https://www.youtube.com/watch?v=gaaTW0Elxgg", extra: "What BMI says about weight", publisher: "NHS", keywords: ["bmi", "healthy weight", "measure"] },
      { id: "yt-nhs-measure-waist", title: "How to measure your waist | NHS", kind: "video", duration: "2:25", url: "https://www.youtube.com/watch?v=dwk8sVCKuio", extra: "Measuring for waist to height ratio", publisher: "NHS", keywords: ["waist", "waist to height ratio", "measure"] },
      { id: "yt-nhse-dwmp-enrol", title: "What to expect when you enrol on to the NHS Digital Weight Management Programme", kind: "video", duration: "1:21", url: "https://www.youtube.com/watch?v=sIyk4QNsAoE", extra: "Inside the 12-week online programme", publisher: "NHS England", keywords: ["programme", "nhs", "online"] },
    ],
    sources: [source(NHS, "Obesity"), DIABETES_UK, BHF],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-nhsggc-tricia", person: "Tricia", title: "NHSGGC - Community Weight Management – Tricia's Story", channel: "NHS Greater Glasgow and Clyde", url: "https://www.youtube.com/watch?v=cU70qRkSbeI", duration: "4:02", about: "Tricia shares her journey of improving her health and losing weight after being referred to NHS Greater Glasgow and Clyde's weight management service." },
      { id: "yt-gstt-sarah", person: "Sarah", title: "Sarah's story - Healthy weight programme", channel: "Guy's and St Thomas' NHS Foundation Trust", url: "https://www.youtube.com/watch?v=HOnBidpPP1I", duration: "2:50", about: "Sarah shares her story of the trust's healthy weight programme, which helps people make positive, lasting changes to their health and wellbeing." },
      { id: "yt-nhsggc-john", person: "John", title: "NHSGGC - Community Weight Management – John’s Story", channel: "NHS Greater Glasgow and Clyde", url: "https://www.youtube.com/watch?v=osziNym2-IQ", duration: "4:12", about: "John tells his story of NHS Greater Glasgow and Clyde's community weight management service." },
    ],
    askDoctor: [
      "What is a healthy weight goal for me?",
      "Can I be referred to a weight management programme?",
      "Would a weight loss medicine or surgery be an option for me?",
      "Could any of my medicines or conditions be affecting my weight?",
    ],
    related: [
      { groupId: "diabetes", conditionId: "type-2" },
      { groupId: "liver", conditionId: "fatty-liver" },
      { groupId: "sleep-breathing", conditionId: "sleep-apnoea" },
    ],
  },
};

export const pcos: LibraryCondition = {
  id: "pcos",
  title: "PCOS (now called PMOS)",
  summary: "Polycystic ovary syndrome, renamed polyendocrine metabolic ovarian syndrome (PMOS) in 2026: a common hormone condition that affects how the ovaries work, with irregular periods, extra hair growth or acne, and sometimes difficulty getting pregnant. It is also linked to insulin resistance, so it can raise the risk of type 2 diabetes. Treatment depends on the symptoms that matter most to you.",
  facts: ["Affects 1 in 8 women in the UK", "Renamed PMOS on 12 May 2026", "No cure, but symptoms can be treated"],
  keywords: ["pcos", "pmos", "polyendocrine metabolic ovarian syndrome", "polycystic ovary syndrome", "periods", "hormones", "fertility", "insulin resistance"],
  content: {
    understand: [
      article("what-it-is", "What PCOS is", 3, { learnId: "pcos-what-it-is", blurb: "Hormones, the ovaries and insulin.", extra: "With a diagram", keywords: ["hormones", "ovaries", "cause"] }),
      article("symptoms", "Symptoms: periods, hair, skin and weight", 3, { learnId: "pcos-symptoms", keywords: ["periods", "hair", "acne", "weight"] }),
      article("diagnosis", "How it is diagnosed", 3, { learnId: "pcos-diagnosis", keywords: ["diagnosis", "blood test", "ultrasound"] }),
      article("long-term", "Long-term health: diabetes, heart and womb", 3, { learnId: "pcos-long-term", keywords: ["diabetes", "heart", "womb"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("periods", "Treating irregular periods", 3, { learnId: "pcos-periods", keywords: ["periods", "contraceptive pill"] }),
      article("hair-skin", "Excess hair, hair loss and acne", 3, { learnId: "pcos-hair-skin", keywords: ["hair", "acne", "treatment"] }),
      article("fertility", "Fertility and getting pregnant", 4, { learnId: "pcos-fertility", keywords: ["fertility", "pregnancy", "ovulation"] }),
      article("weight", "Weight, food and activity", 3, { learnId: "pcos-weight", keywords: ["weight", "food", "exercise"] }),
    ],
    liveWell: [
      article("checks", "Regular checks to keep up", 2, { learnId: "pcos-checks", keywords: ["checks", "blood sugar", "blood pressure"] }),
      article("mood", "Mood, body image and PCOS", 3, { learnId: "pcos-mood", keywords: ["mood", "body image", "anxiety"] }),
      article("pregnancy", "Pregnancy with PCOS", 3, { learnId: "pcos-pregnancy", keywords: ["pregnancy", "gestational diabetes"] }),
      article("support", "Getting support", 2, { learnId: "pcos-support", keywords: ["support", "charity"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-nhs-nel-pcos", title: "Symptoms of polycystic ovary syndrome (PCOS)? How to get help! 💡", kind: "video", duration: "1:30", url: "https://www.youtube.com/watch?v=ADJVmCkNLF8", extra: "Symptoms and where to get help", publisher: "NHS North East London", keywords: ["symptoms", "periods", "acne"] },
      { id: "yt-nhs-inform-pcos-bsl", title: "Polycystic ovary syndrome (PCOS) - BSL", kind: "video", duration: "6:13", url: "https://www.youtube.com/watch?v=8hSnwelUdC0", extra: "PCOS explained in BSL", publisher: "NHS inform", keywords: ["pcos", "bsl", "explained"] },
      { id: "yt-cleveland-pcos", title: "What Is Polycystic Ovary Syndrome? | Ask Cleveland Clinic’s Expert", kind: "video", duration: "2:49", url: "https://www.youtube.com/watch?v=HzG-zaMYZZ8", extra: "Symptoms, treatment, and whether it goes", publisher: "Cleveland Clinic", keywords: ["symptoms", "treatment", "hormones"] },
    ],
    sources: [source(NHS, "Polyendocrine metabolic ovarian syndrome (PMOS)")],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-kate-pcos-story", person: "Kate", title: "PCOS - Kate's story", channel: "veritypmos", url: "https://www.youtube.com/watch?v=SkPXyYXUL3c", duration: "10:31", about: "Kate shares her story with PCOS at a Verity conference in 2008." },
      { id: "yt-esther-pcos-story", person: "Esther", title: "“Just a Period”: Esther’s story:  PCOS", channel: "Wellbeing of Women", url: "https://www.youtube.com/watch?v=Inz4vbErHN4", duration: "2:04", about: "Esther was diagnosed with PCOS after years of irregular bleeding, and says people don't realise that PCOS is a problem." },
      { id: "yt-laura-pcos-story", person: "Laura", title: "PCOS - Laura's story", channel: "veritypmos", url: "https://www.youtube.com/watch?v=QzJFux0uu1E", duration: "7:40", about: "Laura shares her own story of living with PCOS, on Verity's channel." },
    ],
    askDoctor: [
      "Which of my symptoms can be treated, and how?",
      "Should I be checked for diabetes, and how often?",
      "What are my options if I want to get pregnant?",
      "Could any treatment help with my mood or skin?",
    ],
    related: [
      { groupId: "diabetes", conditionId: "type-2" },
      { groupId: "weight", conditionId: "obesity" },
      { groupId: "diabetes", conditionId: "gestational-diabetes" },
    ],
  },
};

export const addisons: LibraryCondition = {
  id: "addisons",
  title: "Addison's disease",
  summary: "The adrenal glands stop making enough of the hormones cortisol and aldosterone. It develops slowly, with tiredness, weakness and dizziness, and is treated with daily hormone tablets. Knowing the sick day rules and carrying an emergency injection keeps people safe.",
  facts: ["About 8,400 people in the UK have it", "Most common between ages 30 and 50", "Normal life expectancy with treatment"],
  keywords: ["addison's disease", "adrenal insufficiency", "cortisol", "hydrocortisone", "adrenal crisis"],
  content: {
    understand: [
      article("what-it-is", "What Addison's disease is", 3, { learnId: "add-what-it-is", blurb: "The adrenal glands, cortisol and aldosterone.", extra: "With a diagram", keywords: ["adrenal", "cortisol", "cause"] }),
      article("symptoms", "Symptoms, and how slowly they come", 3, { learnId: "add-symptoms", keywords: ["tired", "weak", "dizzy", "skin"] }),
      article("diagnosis", "Tests and diagnosis", 3, { learnId: "add-diagnosis", keywords: ["synacthen", "blood test", "diagnosis"] }),
      article("crisis", "Adrenal crisis: the emergency", 3, { learnId: "add-crisis", keywords: ["adrenal crisis", "emergency", "999"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("tablets", "Hydrocortisone and fludrocortisone", 3, { learnId: "add-tablets", keywords: ["hydrocortisone", "fludrocortisone", "tablets"] }),
      article("sick-day-rules", "Sick day rules", 3, { learnId: "add-sick-day-rules", keywords: ["sick day rules", "double dose"] }),
      article("injection", "The emergency injection", 3, { learnId: "add-injection", keywords: ["injection", "emergency kit"] }),
      article("operations", "Operations, dental work and tests", 3, { learnId: "add-operations", keywords: ["surgery", "dentist", "procedures"] }),
    ],
    liveWell: [
      article("card", "The steroid emergency card and ID", 2, { learnId: "add-card", keywords: ["card", "id", "bracelet"] }),
      article("exercise-heat", "Exercise, heat and salt", 3, { learnId: "add-exercise-heat", keywords: ["exercise", "heat", "salt"] }),
      article("travel", "Travel with Addison's", 3, { learnId: "add-travel", keywords: ["travel", "medicines", "time zones"] }),
      article("energy", "Energy, mood and everyday life", 3, { learnId: "add-energy", keywords: ["energy", "mood", "tired"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-comics-adrenal-crisis", title: "CoMICsLite Episode 3:  Addison's Disease: What is Adrenal Crisis & How to Manage It?", kind: "video", duration: "2:00", url: "https://www.youtube.com/watch?v=v3BsSishg0g", extra: "Adrenal crisis and how to manage it", publisher: "SIMBA & CoMICs- DEVI Collaboration", keywords: ["adrenal crisis", "emergency", "sick day rules"] },
      { id: "yt-adshg-when-to-inject", title: "Adrenal crisis: when to give an emergency injection", kind: "video", duration: "4:30", url: "https://www.youtube.com/watch?v=oucbVQ0Whq8", extra: "Prof John Wass on when to inject", publisher: "Addison's Disease Self-Help Group", keywords: ["adrenal crisis", "emergency injection", "symptoms"] },
      { id: "yt-adshg-powder-injection", title: "Hydrocortisone Powder - how to give an emergency injection to prevent or treat adrenal crisis.", kind: "video", duration: "6:08", url: "https://www.youtube.com/watch?v=ymP7Qg6RVt8", extra: "How to give the powder injection", publisher: "Addison's Disease Self-Help Group", keywords: ["emergency injection", "hydrocortisone powder", "how to"] },
    ],
    sources: [source(NHS, "Addison's disease"), ADDISONS_SELF_HELP],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-adshg-greg", person: "Greg", title: "Greg's Story: Learning to be Prepared", channel: "Addison's Disease Self-Help Group", url: "https://www.youtube.com/watch?v=eHTkhN1FlUA", duration: "1:49", about: "Greg shares what he learnt after he became unwell while taking on a straight line mission across Wales with his best mate, YouTuber Tom (GeoWizard)." },
      { id: "yt-adshg-billie", person: "Billie", title: "Billie's Story: 100 Flight's for Addison's", channel: "Addison's Disease Self-Help Group", url: "https://www.youtube.com/watch?v=soQyCn8hMqM", duration: "3:51", about: "Billie, diagnosed with primary Addison's disease in July 2020, shares her story and explains why she is fundraising for the charity." },
      { id: "yt-adshg-stuart-alps", person: "Stuart", title: "Addison's in the Alps", channel: "Addison's Disease Self-Help Group", url: "https://www.youtube.com/watch?v=u9LyBygevYI", duration: "8:38", about: "Stuart Jones, who has Addison's disease, climbed Mont Blanc with his friend Richard Topping in June 2015 to raise money for the ADSHG and Great Ormond Street Hospital." },
    ],
    askDoctor: [
      "What are my sick day rules, written down?",
      "Can I have an emergency injection kit and be shown how to use it?",
      "Is my dose right for my energy and activity?",
      "What should I do before an operation or dental work?",
    ],
    related: [
      { groupId: "thyroid", conditionId: "underactive" },
      { groupId: "blood-pressure", conditionId: "low-blood-pressure" },
      { groupId: "diabetes", conditionId: "type-1" },
    ],
  },
};

export const gout: LibraryCondition = {
  id: "gout",
  title: "Gout",
  summary: "Sudden attacks of severe pain, swelling and redness in a joint, often the big toe, caused by crystals of uric acid. Attacks can be treated quickly, and long-term medicine that lowers uric acid stops them coming back for most people.",
  facts: ["1 in 40 people in the UK have gout", "Most common inflammatory arthritis", "About 4 times more common in men"],
  keywords: ["gout", "uric acid", "big toe", "joint pain", "allopurinol", "flare"],
  content: {
    understand: [
      article("what-it-is", "What gout is", 3, { learnId: "gout-what-it-is", blurb: "Uric acid, crystals and a hot, swollen joint.", extra: "With a diagram", keywords: ["uric acid", "crystals", "cause"] }),
      article("causes", "Why it happens", 3, { learnId: "gout-causes", keywords: ["causes", "kidneys", "diet", "medicines"] }),
      article("diagnosis", "How it is diagnosed", 2, { learnId: "gout-diagnosis", keywords: ["diagnosis", "blood test", "joint fluid"] }),
      article("complications", "Tophi, kidney stones and joint damage", 3, { learnId: "gout-complications", keywords: ["tophi", "kidney stones", "damage"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("attack", "Treating an attack", 3, { learnId: "gout-attack", keywords: ["attack", "colchicine", "nsaids", "ice"] }),
      article("urate-lowering", "Allopurinol and long-term treatment", 4, { learnId: "gout-urate-lowering", keywords: ["allopurinol", "febuxostat", "uric acid"] }),
      article("target", "Uric acid targets and blood tests", 2, { learnId: "gout-target", keywords: ["target", "blood test"] }),
      article("self-help", "Rest, ice and raising the joint", 2, { learnId: "gout-self-help", keywords: ["rest", "ice", "self-help"] }),
    ],
    liveWell: [
      article("food-drink", "Food, drink and gout", 3, { learnId: "gout-food-drink", keywords: ["food", "alcohol", "purines"] }),
      article("weight-activity", "Weight and activity", 3, { learnId: "gout-weight-activity", keywords: ["weight", "exercise"] }),
      article("other-conditions", "Gout, the heart and the kidneys", 3, { learnId: "gout-other-conditions", keywords: ["heart", "kidneys", "blood pressure"] }),
      article("work-life", "Work and everyday life", 2, { learnId: "gout-work-life", keywords: ["work", "shoes", "everyday"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-nhs24-gout-flares", title: "How to manage and prevent gout flares", kind: "video", duration: "2:31", url: "https://www.youtube.com/watch?v=sMRN3k1X9Tw", extra: "managing and preventing gout flares", publisher: "NHS 24", keywords: ["gout", "flares", "lifestyle"] },
      { id: "yt-arthritis-ireland-what-is-gout", title: "What is gout?", kind: "video", duration: "1:21", url: "https://www.youtube.com/watch?v=-0TvHKqJulw", extra: "a consultant rheumatologist explains gout", publisher: "Arthritis Ireland", keywords: ["gout", "big toe", "flare"] },
      { id: "yt-auk-doherty-gout", title: "Professor Michael Doherty shows us how we can improve the treatment of gout.", kind: "video", duration: "4:56", url: "https://www.youtube.com/watch?v=xdvS9nYX6Dc", extra: "personalised treatment and nurse-led care", publisher: "Arthritis UK", keywords: ["gout", "treatment", "nurse-led care"] },
    ],
    sources: [source(NHS, "Gout"), VERSUS_ARTHRITIS],
    stories: [],
    // Real people's stories. Checked 21 October 2026; each detail is from the video's own title or description.
    videoStories: [
      { id: "yt-malcolm-gout", person: "Malcolm", title: "Malcolm's story: improving treatment for gout through nurse-led care and patient involvement", channel: "Arthritis UK", url: "https://www.youtube.com/watch?v=3etbpR6nCSg", duration: "3:21", about: "Malcolm describes how being part of an Arthritis UK-funded trial of nurse-led gout care was life-changing for him." },
      { id: "yt-jason-gout", person: "Jason", title: "Gout patient story - Jason", channel: "Mahitahi Hauora", url: "https://www.youtube.com/watch?v=6Eu-cWtPiJA", duration: "1:31", about: "Jason shares his experiences of having gout." },
      { id: "yt-lonnie-gout", person: "Lonnie", title: "Patient talks about living with gout", channel: "InsideDukeMedicine", url: "https://www.youtube.com/watch?v=_3VriClzmxA", duration: "1:36", about: "Lonnie Matthews talks about living with gout while taking part in a Duke clinical trial of a new gout drug." },
    ],
    askDoctor: [
      "Should I start a medicine to lower my uric acid?",
      "What is my uric acid target, and when is it checked?",
      "What should I take at the start of an attack?",
      "Could any of my other medicines be adding to it?",
    ],
    related: [
      { groupId: "arthritis", conditionId: "osteoarthritis" },
      { groupId: "kidneys", conditionId: "chronic-kidney-disease" },
      { groupId: "blood-pressure", conditionId: "high-blood-pressure" },
    ],
  },
};

export const vitaminD: LibraryCondition = {
  id: "vitamin-d-deficiency",
  title: "Vitamin D deficiency",
  summary: "Not having enough vitamin D, which the body needs to keep bones and muscles healthy. In the UK it is common in autumn and winter, when sunlight is weak. A daily supplement prevents it for most people, and higher doses treat it.",
  facts: ["Adults need 10 micrograms a day", "Winter sun is too weak in the UK", "18 in 100 adults aged 19 to 64 run low"],
  keywords: ["vitamin d", "deficiency", "sunlight", "supplement", "bones", "rickets", "osteomalacia"],
  content: {
    understand: [
      article("what-it-is", "What vitamin D does", 3, { learnId: "vitd-what-it-is", blurb: "Sunlight, the skin and strong bones.", extra: "With a diagram", keywords: ["sunlight", "bones", "calcium"] }),
      article("risk", "Who is more likely to be low", 3, { learnId: "vitd-risk", keywords: ["risk", "skin", "indoors", "age"] }),
      article("symptoms", "Symptoms: aches, weakness and bones", 3, { learnId: "vitd-symptoms", keywords: ["aches", "weakness", "osteomalacia"] }),
      article("tests", "The vitamin D blood test", 2, { learnId: "vitd-tests", keywords: ["blood test", "levels"] }),
    ],
    recoverTitle: "Treat & manage",
    recover: [
      article("supplements", "Daily supplements: who and how much", 3, { learnId: "vitd-supplements", keywords: ["supplement", "10 micrograms", "winter"] }),
      article("treatment", "Treating a deficiency", 3, { learnId: "vitd-treatment", keywords: ["treatment", "high dose", "loading dose"] }),
      article("food", "Vitamin D in food", 3, { learnId: "vitd-food", keywords: ["food", "oily fish", "eggs"] }),
      article("sunlight", "Sunlight safely", 3, { learnId: "vitd-sunlight", keywords: ["sunlight", "sunburn", "summer"] }),
    ],
    liveWell: [
      article("too-much", "Taking too much", 2, { learnId: "vitd-too-much", keywords: ["too much", "overdose", "calcium"] }),
      article("bones", "Vitamin D and bone health", 3, { learnId: "vitd-bones", keywords: ["bones", "osteoporosis", "falls"] }),
      article("groups", "Children, pregnancy and older people", 3, { learnId: "vitd-groups", keywords: ["children", "pregnancy", "older"] }),
      article("medicines", "Medicines and conditions that affect it", 2, { learnId: "vitd-medicines", keywords: ["medicines", "conditions", "absorption"] }),
    ],
    // Educational videos on YouTube. Checked 21 October 2026: title and channel from YouTube's oEmbed; running
    // time from each watch page.
    watch: [
      { id: "yt-bda-vitamin-d", title: "Vitamin D", kind: "video", duration: "2:17", url: "https://www.youtube.com/watch?v=oYWfjLyKR8k", extra: "A registered dietitian explains vitamin D", publisher: "British Dietetic Association (BDA)", keywords: ["vitamin d", "supplements", "dietitian"] },
      { id: "yt-nhs-pregnancy-supplements", title: "Should I take supplements during my pregnancy? | NHS", kind: "video", duration: "1:29", url: "https://www.youtube.com/watch?v=E25_9wc4ry0", extra: "A midwife on pregnancy supplements", publisher: "NHS", keywords: ["pregnancy", "supplements", "midwife"] },
      { id: "yt-glos-vitd-pregnancy", title: "Taking Vitamin D Supplements when Pregnant.", kind: "video", duration: "2:28", url: "https://www.youtube.com/watch?v=NgLPVNTRj-E", extra: "Vitamin D supplements in pregnancy", publisher: "Gloucestershire Hospitals NHS Foundation Trust", keywords: ["pregnancy", "vitamin d", "supplements"] },
    ],
    sources: [source(NHS, "Vitamin D"), ROS],
    stories: [],
    askDoctor: [
      "Do I need a vitamin D test?",
      "What dose should I take, and for how long?",
      "Could my medicines or other conditions be affecting my vitamin D?",
      "Do I need calcium as well?",
    ],
    related: [
      { groupId: "bone-health", conditionId: "osteoporosis" },
      { groupId: "kidneys", conditionId: "chronic-kidney-disease" },
      { groupId: "after-treatment", conditionId: "cancer-fatigue" },
    ],
  },
};
