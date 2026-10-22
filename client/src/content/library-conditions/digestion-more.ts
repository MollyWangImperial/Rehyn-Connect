import type { LibraryCondition } from "../library";
import { article, BAUS, BLADDER_HEALTH_UK, BRITISH_LIVER_TRUST, COELIAC_UK, CROHNS_COLITIS_UK, GUTS_UK, KIDNEY_CARE_UK, NHS, piece, PROSTATE_CANCER_UK, source } from "../library-helpers";

// Kidneys, liver & digestion, the rest of the section: kidney stones and acute kidney injury; urinary
// incontinence, an enlarged prostate and urinary tract infections; cirrhosis, alcohol-related liver disease and
// hepatitis B and C; acid reflux, stomach ulcers, gallstones and pancreatitis; coeliac disease, diverticular disease
// and constipation; Crohn's disease and ulcerative colitis. Same shape as the pages in cancer-mind-digestion.ts.

type Outline = [id: string, title: string, minutes: number, keywords: string[]];
type Content = NonNullable<LibraryCondition["content"]>;

/**
 * A condition from its outline. `prefix` names its checked answers (every piece links to `<prefix><piece>`
 * once they exist); `facts`, `watch` and `videoStories` are filled in from each condition's research report.
 */
function condition(spec: {
  id: string; title: string; summary: string; keywords: string[]; blurb: string;
  understand: Outline[]; recover: Outline[]; liveWell: Outline[];
  sources: Content["sources"]; askDoctor: string[]; related: { groupId: string; conditionId: string }[];
  prefix?: string; facts?: string[]; watch?: Content["watch"]; videoStories?: Content["videoStories"];
}): LibraryCondition {
  const toItem = ([id, title, minutes, keywords]: Outline, index: number) => article(id, title, minutes, {
    ...(spec.prefix ? { learnId: `${spec.prefix}${id}` } : {}),
    ...(index === 0 ? { blurb: spec.blurb, extra: "With a diagram" } : {}),
    keywords,
  });
  const all = [...spec.understand, ...spec.recover, ...spec.liveWell].map(toItem);
  const [u, r] = [spec.understand.length, spec.recover.length];
  return {
    id: spec.id,
    title: spec.title,
    summary: spec.summary,
    facts: spec.facts ?? [],
    keywords: spec.keywords,
    content: {
      understand: all.slice(0, u),
      recoverTitle: "Treat & manage",
      recover: all.slice(u, u + r),
      liveWell: all.slice(u + r),
      watch: spec.watch ?? [piece("video", "explained", `${spec.title} explained`, 3)],
      sources: spec.sources,
      stories: [],
      ...(spec.videoStories?.length ? { videoStories: spec.videoStories } : {}),
      askDoctor: spec.askDoctor,
      related: spec.related,
    },
  };
}
export const kidneyStones = condition({
  id: "kidney-stones",
  title: "Kidney stones",
  summary: "Hard lumps that form from waste in the urine. Small stones often pass on their own, though they can be very painful on the way; larger ones may need treatment to break them up or remove them. Drinking enough fluid is the main way to stop new ones forming.",
  keywords: ["kidney stones", "renal colic", "stone", "flank pain", "lithotripsy"],
  blurb: "How stones form, and the path they take.",
  understand: [
    ["what-it-is", "What kidney stones are", 3, ["stones", "urine", "cause"]],
    ["symptoms", "The pain, and other symptoms", 3, ["pain", "colic", "blood in urine"]],
    ["causes", "Why they form", 3, ["causes", "fluids", "diet"]],
    ["tests", "Scans and tests", 3, ["ct scan", "urine test", "x-ray"]],
  ],
  recover: [
    ["passing", "Passing a small stone", 3, ["passing", "painkillers", "sieve"]],
    ["treatments", "Breaking up or removing larger stones", 4, ["lithotripsy", "ureteroscopy", "surgery"]],
    ["pain", "Pain relief during an attack", 3, ["pain relief", "anti-inflammatory"]],
    ["urgent", "When to get urgent help", 2, ["fever", "urgent", "a&e"]],
  ],
  liveWell: [
    ["fluids", "Drinking enough to prevent stones", 3, ["water", "fluids", "urine colour"]],
    ["food", "Food, salt and stones", 3, ["salt", "calcium", "oxalate"]],
    ["coming-back", "Stopping them coming back", 3, ["prevention", "recurrence"]],
    ["follow-up", "Follow-up and further tests", 2, ["follow-up", "tests"]],
  ],
  sources: [source(NHS, "Kidney stones"), BAUS, KIDNEY_CARE_UK],
  prefix: "ks-",
  facts: ["1 in 11 people get stone symptoms", "Most small stones pass on their own", "Half form another within 10 years"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running
  // time from each watch page.
  watch: [
    { id: "yt-imperial-what-are-kidney-stones", title: "What are kidney stones?", kind: "video", duration: "5:28", url: "https://www.youtube.com/watch?v=RoayNPhwizc", extra: "A consultant urological surgeon explains", publisher: "Imperial College Healthcare NHS Trust", keywords: ["kidney stones", "urologist", "explained"] },
    { id: "yt-ouh-lithotripsy-guide", title: "Lithotripsy - A patient guide", kind: "video", duration: "9:28", url: "https://www.youtube.com/watch?v=DJutlSdH5aI", extra: "Before your first lithotripsy appointment", publisher: "ouhnhs", keywords: ["lithotripsy", "shockwave", "eswl"] },
    { id: "yt-eau-urs", title: "Removal of kidney stones: URS", kind: "video", duration: "2:54", url: "https://www.youtube.com/watch?v=oU_GUAWz52w", extra: "How ureteroscopy removes kidney stones", publisher: "European Association of Urology", keywords: ["ureteroscopy", "urs", "stone removal"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-pat-kidney-stones", person: "Pat", title: "Patient Story: Kidney Stones", channel: "Emory Healthcare", url: "https://www.youtube.com/watch?v=RTBXMUGHnSg", duration: "2:59", about: "Pat describes what it feels like to have kidney stones and how he dealt with the pain." },
    { id: "yt-art-kidney-stones", person: "Art", title: "Kidney stone patients: Art's Story | National Kidney Foundation", channel: "National Kidney Foundation", url: "https://www.youtube.com/watch?v=BvXjWKNSUDs", duration: "1:04", about: "Art's story as a kidney stone patient, shared by the US National Kidney Foundation." },
  ],
  askDoctor: [
    "How big is my stone, and is it likely to pass on its own?",
    "Which symptoms mean I should get help straight away?",
    "How much should I drink each day?",
    "Should my stone be tested to find out what it is made of?",
  ],
  related: [
    { groupId: "kidneys", conditionId: "chronic-kidney-disease" },
    { groupId: "bladder", conditionId: "uti" },
    { groupId: "gout-vitamins", conditionId: "gout" },
  ],
});

export const acuteKidneyInjury = condition({
  id: "acute-kidney-injury",
  title: "Acute kidney injury",
  summary: "When the kidneys suddenly stop working as well as they should, over hours or days, often during another illness, dehydration or after some medicines. It is usually picked up on a blood test in someone already unwell, and most people recover when the cause is treated.",
  keywords: ["acute kidney injury", "aki", "kidney failure", "dehydration", "creatinine"],
  blurb: "A sudden drop in kidney function, and why it happens.",
  understand: [
    ["what-it-is", "What acute kidney injury is", 3, ["aki", "kidneys", "sudden"]],
    ["causes", "Why it happens: illness, fluids and medicines", 3, ["causes", "dehydration", "infection"]],
    ["who", "Who is more likely to get it", 3, ["risk", "older", "ckd"]],
    ["signs", "Signs and how it is found", 3, ["signs", "blood test", "urine"]],
  ],
  recover: [
    ["treatment", "Treatment in hospital", 3, ["treatment", "fluids", "hospital"]],
    ["medicines", "Medicines that may be paused", 3, ["medicines", "pause", "review"]],
    ["recovery", "Recovery afterwards", 3, ["recovery", "blood tests"]],
    ["dialysis", "If dialysis is needed for a while", 3, ["dialysis", "temporary"]],
  ],
  liveWell: [
    ["sick-days", "Sick days and fluids", 3, ["sick day", "fluids", "vomiting"]],
    ["checks", "Kidney checks after an AKI", 2, ["checks", "follow-up"]],
    ["painkillers", "Painkillers and the kidneys", 2, ["painkillers", "nsaids"]],
    ["future", "Lowering the chance of another", 3, ["prevention", "future"]],
  ],
  sources: [source(NHS, "Acute kidney injury"), KIDNEY_CARE_UK],
  prefix: "aki-",
  facts: ["Many recover fully in a few weeks", "More common if aged 65 or over", "Seen in 13 to 18 in 100 admissions"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running
  // time from each watch page.
  watch: [
    { id: "yt-1000lives-what-is-aki", title: "AKI PRO: What is Acute Kidney Injury?", kind: "video", duration: "3:44", url: "https://www.youtube.com/watch?v=uv4GHOgjBD4", extra: "a clinical lead explains AKI", publisher: "1000 Lives Improvement", keywords: ["acute kidney injury", "aki", "kidneys"] },
    { id: "yt-1000lives-look-after-kidneys", title: "AKI PRO: How can patients look after their kidneys?", kind: "video", duration: "4:10", url: "https://www.youtube.com/watch?v=R8NOquYRqRE", extra: "how patients can protect their kidneys", publisher: "1000 Lives Improvement", keywords: ["aki", "prevention", "kidneys"] },
    { id: "yt-nkf-aki-what-is-it", title: "Acute kidney injury (AKI): What is it and what you can do about it?", kind: "video", duration: "2:40", url: "https://www.youtube.com/watch?v=w8sWwG9HZVY", extra: "what AKI is and what helps", publisher: "National Kidney Foundation", keywords: ["acute kidney injury", "aki", "what you can do"] },
  ],
  askDoctor: [
    "What caused my kidney injury?",
    "Which of my medicines should be paused or changed?",
    "When will my kidney blood tests be repeated?",
    "What should I do if I become unwell again?",
  ],
  related: [
    { groupId: "kidneys", conditionId: "chronic-kidney-disease" },
    { groupId: "heart-attack", conditionId: "heart-failure" },
    { groupId: "diabetes", conditionId: "type-2" },
  ],
});

export const urinaryIncontinence = condition({
  id: "urinary-incontinence",
  title: "Urinary incontinence",
  summary: "Leaking urine, when coughing or lifting, with a sudden urge, or both. It is very common, especially with age, after childbirth or prostate treatment, and it is not something you have to put up with: pelvic floor exercises, bladder training and other treatments help most people.",
  keywords: ["incontinence", "bladder leaks", "stress incontinence", "urge incontinence", "pelvic floor"],
  blurb: "Stress, urge and mixed: the different kinds of leaks.",
  understand: [
    ["what-it-is", "What urinary incontinence is", 3, ["leaks", "bladder", "types"]],
    ["types", "Stress, urge and mixed incontinence", 3, ["stress", "urge", "mixed"]],
    ["causes", "Why it happens", 3, ["causes", "pregnancy", "menopause", "prostate"]],
    ["tests", "What the GP will check", 3, ["tests", "bladder diary", "examination"]],
  ],
  recover: [
    ["pelvic-floor", "Pelvic floor exercises", 4, ["pelvic floor", "exercises"]],
    ["bladder-training", "Bladder training", 3, ["bladder training", "urge"]],
    ["medicines", "Medicines for an overactive bladder", 3, ["medicines", "overactive bladder"]],
    ["procedures", "Procedures and surgery", 3, ["surgery", "procedures"]],
  ],
  liveWell: [
    ["drinks", "Drinks, caffeine and the bladder", 3, ["caffeine", "fluids", "alcohol"]],
    ["products", "Pads and products", 2, ["pads", "products"]],
    ["confidence", "Going out with confidence", 3, ["confidence", "toilets", "travel"]],
    ["talking", "Talking about it", 2, ["embarrassment", "talking", "gp"]],
  ],
  sources: [source(NHS, "Urinary incontinence"), BLADDER_HEALTH_UK],
  prefix: "ui-",
  facts: ["3 to 6 million UK people have it", "About 80% can be cured or improved", "Pelvic floor training helps everyone"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running
  // time from each watch page.
  watch: [
    { id: "yt-nhs-pelvic-floor", title: "How to do pelvic floor exercises | NHS", kind: "video", duration: "3:08", url: "https://www.youtube.com/watch?v=JFJtUtKQCuM", extra: "A pelvic health physiotherapist shows how", publisher: "NHS", keywords: ["pelvic floor", "exercises", "physiotherapist"] },
    { id: "yt-bhrut-urge", title: "Pelvic health: Urge Incontinence", kind: "video", duration: "2:25", url: "https://www.youtube.com/watch?v=a159MV1P_hA", extra: "Urge incontinence, from an NHS trust", publisher: "Barking, Havering and Redbridge University Hospitals NHS Trust", keywords: ["urge incontinence", "overactive bladder"] },
    { id: "yt-bhrut-stress", title: "Pelvic health: stress urinary incontinence", kind: "video", duration: "1:20", url: "https://www.youtube.com/watch?v=nWUCeFKr2s0", extra: "Stress incontinence, from an NHS trust", publisher: "Barking, Havering and Redbridge University Hospitals NHS Trust", keywords: ["stress incontinence", "pelvic floor"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-paul-incontinence", person: "Paul", title: "Living with incontinence: Paul's story", channel: "Prostate Cancer UK", url: "https://www.youtube.com/watch?v=pq23GUTJEyo", duration: "3:38", about: "Paul talks about living with incontinence, in a film from Prostate Cancer UK." },
  ],
  askDoctor: [
    "Which kind of incontinence do I have?",
    "Can I be referred to a pelvic floor physiotherapist or continence service?",
    "Could any of my medicines be adding to it?",
    "What are my options if exercises do not help?",
  ],
  related: [
    { groupId: "bladder", conditionId: "enlarged-prostate" },
    { groupId: "common-cancers", conditionId: "prostate" },
    { groupId: "bladder", conditionId: "uti" },
  ],
});

export const enlargedProstate = condition({
  id: "enlarged-prostate",
  title: "Enlarged prostate",
  summary: "A prostate gland that has grown bigger with age, which is common in men over 50 and is not cancer. It can press on the tube carrying urine, causing a weak flow, needing to go often or getting up at night. Lifestyle changes, medicines and surgery can all help.",
  keywords: ["enlarged prostate", "bph", "benign prostatic hyperplasia", "weak flow", "night-time urination"],
  blurb: "Where the prostate sits, and why it affects peeing.",
  understand: [
    ["what-it-is", "What an enlarged prostate is", 3, ["prostate", "bph"]],
    ["symptoms", "Symptoms: flow, frequency and nights", 3, ["weak flow", "frequency", "night"]],
    ["not-cancer", "Is it cancer?", 3, ["cancer", "psa"]],
    ["tests", "Tests and the PSA question", 3, ["tests", "psa", "examination"]],
  ],
  recover: [
    ["lifestyle", "Lifestyle changes that help", 3, ["fluids", "caffeine", "bladder training"]],
    ["medicines", "Medicines for an enlarged prostate", 3, ["tamsulosin", "finasteride", "medicines"]],
    ["surgery", "Surgery and procedures", 4, ["turp", "surgery"]],
    ["urgent", "When you cannot pee: urgent help", 2, ["retention", "urgent", "a&e"]],
  ],
  liveWell: [
    ["nights", "Getting up at night less", 3, ["night", "sleep"]],
    ["sex", "Sex, medicines and surgery", 3, ["sex", "side effects"]],
    ["checks", "Regular checks", 2, ["checks", "review"]],
    ["daily-life", "Toilets, travel and everyday life", 2, ["toilets", "travel"]],
  ],
  sources: [source(NHS, "Benign prostate enlargement"), PROSTATE_CANCER_UK, BAUS],
  prefix: "bph-",
  facts: ["Most common in men over 50", "Not cancer, and no extra cancer risk", "Lifestyle changes usually come first"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running
  // time from each watch page.
  watch: [
    { id: "yt-pcuk-ask-nurse-bph", title: "Ask a Nurse: What is an enlarged prostate?", kind: "video", duration: "4:56", url: "https://www.youtube.com/watch?v=zinYyu6xio0", extra: "A Specialist Nurse answers common questions", publisher: "Prostate Cancer UK", keywords: ["enlarged prostate", "symptoms", "treatment"] },
    { id: "yt-pcuk-what-is-prostate", title: "Ask a Nurse: What is a prostate?", kind: "video", duration: "2:11", url: "https://www.youtube.com/watch?v=b0A2bXxb4sg", extra: "What a prostate is, and common problems", publisher: "Prostate Cancer UK", keywords: ["prostate", "gland", "problems"] },
    { id: "yt-nhs-fife-rezum", title: "Rezum Steam Therapy", kind: "video", duration: "2:49", url: "https://www.youtube.com/watch?v=2sq4b4oIl8k", extra: "A steam procedure, new to NHS Fife", publisher: "NHS Fife", keywords: ["rezum", "steam", "procedure"] },
  ],
  askDoctor: [
    "Is this an enlarged prostate, and do I need any tests?",
    "Would a medicine help, and what are the side effects?",
    "When would surgery be worth considering?",
    "Which symptoms mean I should get help straight away?",
  ],
  related: [
    { groupId: "common-cancers", conditionId: "prostate" },
    { groupId: "bladder", conditionId: "urinary-incontinence" },
    { groupId: "bladder", conditionId: "uti" },
  ],
});

export const uti = condition({
  id: "uti",
  title: "Urinary tract infections (UTIs)",
  summary: "Infections in the bladder, kidneys or the tubes that carry urine. They are common, especially in women, and often cause burning and needing to pee often. Many clear with treatment from a pharmacist or GP, and a few simple habits help prevent the next one.",
  keywords: ["uti", "urinary tract infection", "cystitis", "kidney infection", "burning"],
  blurb: "Where infections happen in the urinary tract.",
  understand: [
    ["what-it-is", "What a UTI is", 3, ["infection", "bladder", "cystitis"]],
    ["symptoms", "Symptoms, and in older people", 3, ["burning", "frequency", "confusion"]],
    ["kidney-infection", "When it reaches the kidneys", 3, ["kidney infection", "fever"]],
    ["causes", "Why they happen", 3, ["causes", "bacteria", "menopause"]],
  ],
  recover: [
    ["pharmacy", "Pharmacist, GP or 111", 3, ["pharmacy", "pharmacy first", "gp"]],
    ["antibiotics", "Antibiotics and self-care", 3, ["antibiotics", "fluids", "painkillers"]],
    ["recurrent", "UTIs that keep coming back", 3, ["recurrent", "prevention"]],
    ["urgent", "When to get urgent help", 2, ["urgent", "sepsis", "fever"]],
  ],
  liveWell: [
    ["prevention", "Everyday ways to prevent them", 3, ["prevention", "fluids", "wiping"]],
    ["menopause", "UTIs after the menopause", 3, ["menopause", "vaginal oestrogen"]],
    ["catheter", "UTIs with a catheter", 2, ["catheter", "infection"]],
    ["myths", "Cranberry and other questions", 2, ["cranberry", "myths"]],
  ],
  sources: [source(NHS, "Urinary tract infections (UTIs)"), BLADDER_HEALTH_UK],
  prefix: "uti-",
  facts: ["More than half of women get cystitis", "Pharmacists treat UTIs in women 16-64", "Most are caused by E coli bacteria"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running
  // time from each watch page.
  watch: [
    { id: "yt-nhs24-uti", title: "Urinary tract infections (UTIs) - What you need to know", kind: "video", duration: "3:29", url: "https://www.youtube.com/watch?v=K6wkOKAtkWo", extra: "An NHS doctor on UTI self-care", publisher: "NHS 24", keywords: ["uti", "self-care", "when to get help"] },
    { id: "yt-nhsglos-pharmacy-first-uti", title: "UTI - Think Pharmacy First", kind: "video", duration: "1:35", url: "https://www.youtube.com/watch?v=0-U1zx-WP98", extra: "A pharmacist explains Pharmacy First", publisher: "NHS Gloucestershire", keywords: ["pharmacy first", "pharmacist", "women 16 to 64"] },
    { id: "yt-wy-catheter-infections", title: "Avoiding infections, a video for people living with a urinary catheter", kind: "video", duration: "4:08", url: "https://www.youtube.com/watch?v=TX1QvdL1AeY", extra: "Avoiding infections with a catheter", publisher: "West Yorkshire Health and Care Partnership", keywords: ["catheter", "infection", "prevention"] },
  ],
  askDoctor: [
    "Do I need antibiotics, or can it clear by itself?",
    "Should my urine be tested?",
    "What can I do to stop UTIs coming back?",
    "Which symptoms mean I should get urgent help?",
  ],
  related: [
    { groupId: "kidneys", conditionId: "kidney-stones" },
    { groupId: "bladder", conditionId: "urinary-incontinence" },
    { groupId: "kidneys", conditionId: "chronic-kidney-disease" },
  ],
});

export const cirrhosis = condition({
  id: "cirrhosis",
  title: "Cirrhosis",
  summary: "Scarring of the liver after long-term damage, from alcohol, fatty liver, hepatitis or other causes. The liver can keep working for a long time, and treating the cause can stop the damage getting worse. Knowing the warning signs of complications matters.",
  keywords: ["cirrhosis", "liver scarring", "liver damage", "fibrosis", "liver disease"],
  blurb: "How long-term damage scars the liver.",
  understand: [
    ["what-it-is", "What cirrhosis is", 3, ["scarring", "liver", "cause"]],
    ["causes", "What causes it", 3, ["alcohol", "fatty liver", "hepatitis"]],
    ["symptoms", "Symptoms, early and later", 3, ["symptoms", "jaundice", "tired"]],
    ["tests", "Tests, scans and stages", 3, ["fibroscan", "blood tests", "stages"]],
  ],
  recover: [
    ["cause", "Treating the cause", 3, ["treatment", "alcohol", "hepatitis"]],
    ["complications", "Fluid, bleeding and confusion: complications", 4, ["ascites", "varices", "encephalopathy"]],
    ["medicines", "Medicines and cirrhosis", 3, ["medicines", "painkillers"]],
    ["transplant", "Liver transplant", 3, ["transplant"]],
  ],
  liveWell: [
    ["food", "Eating well with cirrhosis", 3, ["food", "protein", "salt"]],
    ["alcohol", "Alcohol and cirrhosis", 2, ["alcohol", "stopping"]],
    ["checks", "Regular checks and scans", 2, ["checks", "ultrasound"]],
    ["urgent", "Warning signs to act on", 2, ["urgent", "vomiting blood", "999"]],
  ],
  sources: [source(NHS, "Cirrhosis"), BRITISH_LIVER_TRUST],
  prefix: "cir-",
  facts: ["Often no symptoms early on", "Many live with it for years", "A liver scan every 6 months"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running
  // time from each watch page.
  watch: [
    { id: "yt-mayo-cirrhosis", title: "Mayo Clinic Explains Cirrhosis", kind: "video", duration: "5:25", url: "https://www.youtube.com/watch?v=ljqkjasTmQE", extra: "What cirrhosis is, symptoms and treatment", publisher: "Mayo Clinic", keywords: ["cirrhosis", "symptoms", "treatment"] },
    { id: "yt-nhs-liver-disease", title: "Liver disease | NHS", kind: "video", duration: "3:28", url: "https://www.youtube.com/watch?v=-6xX1ra5fnw", extra: "A hepatologist on avoiding alcohol", publisher: "NHS", keywords: ["alcohol", "liver disease", "hepatologist"] },
    { id: "yt-liveruk-transplant-assessment", title: "Liver transplant: what to expect at the assessment", kind: "video", duration: "9:27", url: "https://www.youtube.com/watch?v=cYCKgz3xo0Q", extra: "Tests and the decision at assessment", publisher: "Liver UK", keywords: ["transplant", "assessment", "tests"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-john-cirrhosis", person: "John", title: "John's story", channel: "Liver UK", url: "https://www.youtube.com/watch?v=vGUYSfMknys", duration: "4:29", about: "John has haemochromatosis and cirrhosis, and shares how he felt about his diagnosis and how the British Liver Trust supported him." },
    { id: "yt-mary-cirrhosis-trial", person: "Mary", title: "How Mary got the \"full monty\" with her liver cirrhosis clinical trial", channel: "NUHRISE", url: "https://www.youtube.com/watch?v=-oUoWoAh-WI", duration: "2:22", about: "Mary has cirrhosis of the liver and explains why taking part in a clinical trial at the Nottingham Digestive Diseases Centre felt far better to her than a regular clinic." },
    { id: "yt-colin-liver-transplant", person: "Colin", title: "Liver transplant - Patient experience - Part 1 (Colin)", channel: "Royal Free London NHS Foundation Trust", url: "https://www.youtube.com/watch?v=FPaeh54I55o", duration: "4:51", about: "Colin's experience as a liver transplant patient at the Royal Free's Sheila Sherlock Liver Centre." },
  ],
  askDoctor: [
    "What caused my cirrhosis, and can it be treated?",
    "How often should I have scans and blood tests?",
    "Which medicines and painkillers are safe for me?",
    "Which symptoms mean I should call 999?",
  ],
  related: [
    { groupId: "liver", conditionId: "fatty-liver" },
    { groupId: "liver", conditionId: "alcohol-related-liver-disease" },
    { groupId: "liver", conditionId: "hepatitis-b-c" },
  ],
});

export const alcoholLiverDisease = condition({
  id: "alcohol-related-liver-disease",
  title: "Alcohol-related liver disease",
  summary: "Liver damage from drinking more than the liver can handle over years. It often causes no symptoms until it is advanced, but stopping drinking can let the liver recover in the early stages, and support to cut down or stop is available.",
  keywords: ["alcohol-related liver disease", "arld", "alcohol", "liver", "drinking"],
  blurb: "From fatty liver to hepatitis to cirrhosis.",
  understand: [
    ["what-it-is", "What alcohol-related liver disease is", 3, ["alcohol", "liver", "stages"]],
    ["stages", "The three stages", 3, ["fatty liver", "hepatitis", "cirrhosis"]],
    ["symptoms", "Symptoms, and when there are none", 3, ["symptoms", "jaundice"]],
    ["tests", "Tests and diagnosis", 3, ["blood tests", "fibroscan"]],
  ],
  recover: [
    ["stopping", "Stopping or cutting down safely", 4, ["stopping", "withdrawal", "detox"]],
    ["support", "Support to stop drinking", 3, ["support", "services", "groups"]],
    ["medicines", "Medicines that help", 3, ["medicines", "relapse prevention"]],
    ["treatment", "Treatment for liver damage", 3, ["treatment", "transplant"]],
  ],
  liveWell: [
    ["units", "Units and drinking guidelines", 2, ["units", "14 units"]],
    ["food", "Eating well", 3, ["food", "nutrition"]],
    ["family", "For family and friends", 3, ["family", "support"]],
    ["urgent", "Warning signs to act on", 2, ["urgent", "999", "withdrawal"]],
  ],
  sources: [source(NHS, "Alcohol-related liver disease"), BRITISH_LIVER_TRUST],
  prefix: "arld-",
  facts: ["Alcohol: 6 in 10 UK liver cases", "Often no symptoms in the early stages", "Liver can often recover if you stop"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running
  // time from each watch page.
  watch: [
    { id: "yt-nhs-liver-disease", title: "Liver disease | NHS", kind: "video", duration: "3:28", url: "https://www.youtube.com/watch?v=-6xX1ra5fnw", extra: "A hepatologist on avoiding alcohol", publisher: "NHS", keywords: ["alcohol", "liver disease", "hepatologist"] },
    { id: "yt-nhs-alcohol-units", title: "A guide to alcohol units (and signs of alcohol dependence) | NHS", kind: "video", duration: "3:15", url: "https://www.youtube.com/watch?v=OeX0Fz0Xza4", extra: "Units, risk levels and dependence", publisher: "NHS", keywords: ["units", "drinking guidelines", "dependence"] },
    { id: "yt-drinkaware-liver", title: "Dr Sarah Jarvis discusses alcohol’s effect on the liver", kind: "video", duration: "2:04", url: "https://www.youtube.com/watch?v=hxvM0jtv5kM", extra: "How alcohol can damage the liver", publisher: "Drinkaware.co.uk", keywords: ["alcohol", "liver", "liver disease"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-sheila-alcohol-hepatitis", person: "Sheila", title: "Alcohol-related Hepatitis - Patient Advocate - Sheila", channel: "American Liver Foundation", url: "https://www.youtube.com/watch?v=aHJPb-rIzWk", duration: "2:54", about: "Sheila, a volunteer patient advocate for the American Liver Foundation, shares her story of the effects of acute alcohol-related hepatitis." },
    { id: "yt-jay-alcohol-hepatitis", person: "Jay", title: "Alcohol-related Hepatitis - Patient Advocate - Jay", channel: "American Liver Foundation", url: "https://www.youtube.com/watch?v=yqzVRLuc05g", duration: "2:14", about: "Jay, a volunteer patient advocate for the American Liver Foundation, shares his story of liver transplantation due to the effects of acute alcohol-related hepatitis." },
    { id: "yt-susan-alcohol-free", person: "Susan", title: "Susan's story: Alcohol Awareness Week", channel: "Alcohol Change UK", url: "https://www.youtube.com/watch?v=1KKRaMPCGK4", duration: "1:43", about: "Susan's story of how alcohol nearly cost her everything, and how getting the support she needed helped her find ways to be free of alcohol." },
  ],
  askDoctor: [
    "How much damage is there, and can my liver recover?",
    "Is it safe for me to stop drinking suddenly?",
    "Can I be referred to an alcohol support service?",
    "How often should my liver be checked?",
  ],
  related: [
    { groupId: "liver", conditionId: "cirrhosis" },
    { groupId: "liver", conditionId: "fatty-liver" },
    { groupId: "depression", conditionId: "depression" },
  ],
});

export const hepatitis = condition({
  id: "hepatitis-b-c",
  title: "Hepatitis B and C",
  summary: "Viral infections of the liver, spread through blood and some body fluids. Both can be silent for years. Hepatitis C can now usually be cured with tablets, and hepatitis B can be controlled with medicine and prevented with a vaccine, so testing matters.",
  keywords: ["hepatitis b", "hepatitis c", "hep c", "hep b", "viral hepatitis", "liver infection"],
  blurb: "Two viruses, how they spread, and what they do to the liver.",
  understand: [
    ["what-it-is", "What hepatitis B and C are", 3, ["virus", "liver", "infection"]],
    ["spread", "How they spread, and how they do not", 3, ["spread", "blood", "sex"]],
    ["symptoms", "Symptoms, and why many have none", 3, ["symptoms", "silent"]],
    ["testing", "Getting tested", 3, ["test", "blood test", "home test"]],
  ],
  recover: [
    ["hep-c-treatment", "Hepatitis C: tablets that cure", 3, ["hepatitis c", "treatment", "cure"]],
    ["hep-b-treatment", "Hepatitis B: treatment and monitoring", 3, ["hepatitis b", "antivirals"]],
    ["vaccine", "The hepatitis B vaccine", 2, ["vaccine", "prevention"]],
    ["liver-care", "Looking after your liver", 3, ["alcohol", "liver health"]],
  ],
  liveWell: [
    ["telling-others", "Telling partners and family", 3, ["telling", "partners", "testing"]],
    ["pregnancy", "Pregnancy and hepatitis", 3, ["pregnancy", "baby"]],
    ["stigma", "Stigma and support", 3, ["stigma", "support"]],
    ["checks", "Checks after treatment", 2, ["checks", "liver scan"]],
  ],
  sources: [source(NHS, "Hepatitis B and hepatitis C"), BRITISH_LIVER_TRUST],
  prefix: "hep-",
  facts: ["Hep C tablets cure most people", "All UK babies get the hep B vaccine", "Most with hep C have no symptoms"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running
  // time from each watch page.
  watch: [
    { id: "yt-liveruk-could-you-have-hep-b", title: "Could you have hepatitis B?", kind: "video", duration: "1:29", url: "https://www.youtube.com/watch?v=WdOJKAatFiI", extra: "Could you be at risk of hepatitis B?", publisher: "Liver UK", keywords: ["hepatitis b", "risk", "testing"] },
    { id: "yt-hctrust-just-diagnosed", title: "Just diagnosed with hepatitis C? We're here for you", kind: "video", duration: "1:34", url: "https://www.youtube.com/watch?v=fanzQ3_Yiow", extra: "Hepatitis C is curable with tablets", publisher: "The Hepatitis C Trust", keywords: ["hepatitis c", "just diagnosed", "treatment"] },
    { id: "yt-shwales-finger-prick", title: "How to take a Finger Prick Blood Sample to test for HIV, Syphilis, Hepatitis C and Hepatitis B", kind: "video", duration: "4:26", url: "https://www.youtube.com/watch?v=FrJyUvsN8C8", extra: "Taking a finger-prick test sample, step by step", publisher: "Sexual Health Wales", keywords: ["test", "home test", "finger prick"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-paul-hep-c", person: "Paul", title: "Paul's hepatitis C story", channel: "The Hepatitis C Trust", url: "https://www.youtube.com/watch?v=PLCgqaeY4-8", duration: "4:59", about: "Paul shares what it is like to find out you have hepatitis C and go through treatment." },
    { id: "yt-tracey-infected-blood", person: "Tracey", title: "Tracey's infected blood and hepatitis C story", channel: "The Hepatitis C Trust", url: "https://www.youtube.com/watch?v=bx2hSNyIpV4", duration: "3:58", about: "Tracey shares her story of hepatitis C and infected blood, one of approximately 30,000 people in the UK who received infected blood transfusions before the mid-1990s." },
    { id: "yt-amanda-hep-b", person: "Amanda", title: "#BtheVoice: Amanda's story of living with hepatitis B in the United Kingdom", channel: "Hepatitis B Foundation", url: "https://www.youtube.com/watch?v=4z9g6sZdvp8", duration: "5:26", about: "Amanda, an ex-teacher in the UK, found out she had hepatitis B in December 2019 after blood tests for her Crohn's disease, and talks about the stigma and misinformation she faced." },
  ],
  askDoctor: [
    "Which tests do I need, and what do the results mean?",
    "Is treatment right for me now?",
    "Should my partner or family be tested or vaccinated?",
    "How often should my liver be checked?",
  ],
  related: [
    { groupId: "liver", conditionId: "cirrhosis" },
    { groupId: "liver", conditionId: "fatty-liver" },
    { groupId: "liver", conditionId: "alcohol-related-liver-disease" },
  ],
});

export const acidReflux = condition({
  id: "acid-reflux",
  title: "Acid reflux and heartburn (GORD)",
  summary: "Stomach acid coming back up into the food pipe, causing heartburn and a sour taste. It is very common and often helped by changes to eating and sleeping, with medicines from a pharmacist or GP if needed. Some symptoms need checking.",
  keywords: ["acid reflux", "heartburn", "gord", "indigestion", "reflux"],
  blurb: "The valve at the top of the stomach, and why acid gets past it.",
  understand: [
    ["what-it-is", "What acid reflux is", 3, ["reflux", "heartburn", "valve"]],
    ["triggers", "Triggers: food, drink, weight and more", 3, ["triggers", "food", "alcohol"]],
    ["symptoms", "Symptoms beyond heartburn", 3, ["symptoms", "cough", "sour taste"]],
    ["checks", "Symptoms that need checking", 2, ["swallowing", "weight loss", "gp"]],
  ],
  recover: [
    ["self-help", "Everyday changes that help", 3, ["eating", "sleeping", "self-help"]],
    ["pharmacy", "Antacids from the pharmacy", 3, ["antacids", "pharmacy"]],
    ["ppis", "Acid-reducing tablets (PPIs)", 3, ["omeprazole", "ppi", "tablets"]],
    ["tests", "Tests: endoscopy and more", 3, ["endoscopy", "tests"]],
  ],
  liveWell: [
    ["night", "Reflux at night", 3, ["night", "sleep", "bed"]],
    ["eating", "Eating patterns that help", 3, ["meals", "eating", "timing"]],
    ["long-term", "Long-term medicine and reviews", 2, ["long-term", "review"]],
    ["barretts", "Barrett's oesophagus, explained", 2, ["barrett's", "oesophagus"]],
  ],
  sources: [source(NHS, "Heartburn and acid reflux"), GUTS_UK],
  prefix: "gord-",
  facts: ["Up to 1 in 4 UK adults get heartburn", "Raise the bed head 10 to 20cm", "PPI courses usually last 4 or 8 weeks"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running
  // time from each watch page.
  watch: [
    { id: "yt-nhs-suffolk-persistent-heartburn", title: "Why you should get persistent heartburn checked", kind: "video", duration: "0:58", url: "https://www.youtube.com/watch?v=JYFfwz0Br24", extra: "Why persistent heartburn needs checking", publisher: "NHS Norfolk and Suffolk ICB - Suffolk", keywords: ["heartburn", "gp", "checks"] },
    { id: "yt-cuh-capsule-sponge", title: "Capsule sponge animation for Barrett's Oesophagus", kind: "video", duration: "2:01", url: "https://www.youtube.com/watch?v=J7m9BBXUNXw", extra: "How the capsule sponge test works", publisher: "CUHNHS", keywords: ["capsule sponge", "barrett's", "tests"] },
    { id: "yt-stmarks-gastroscopy", title: "Gastroscopy: What happens during the procedure", kind: "video", duration: "3:20", url: "https://www.youtube.com/watch?v=60jQQ2xHlck", extra: "What happens during a gastroscopy", publisher: "St Mark's Hospital Foundation", keywords: ["gastroscopy", "endoscopy", "tests"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-peter-barretts", person: "Peter", title: "Acid Reflux, Heartburn or Something More? | Peter’s Barrett’s Oesophagus Story", channel: "Guts UK Charity", url: "https://www.youtube.com/watch?v=hVCzrhBZgn0", duration: "1:29", about: "Peter, from Guts UK's Experts by Experience panel, has Barrett's oesophagus, encourages regular monitoring, and says it does not stop him enjoying the things he loves." },
    { id: "yt-nick-oesophageal", person: "Nick", title: "Nick's story - Oesophageal Cancer Symptoms", channel: "NHS Lincolnshire ICB", url: "https://www.youtube.com/watch?v=tkPFgCKmA8Q", duration: "2:49", about: "Nick realised difficulty swallowing wasn't normal, acted fast, and his oesophageal cancer was caught by his doctors before it spread." },
    { id: "yt-david-cytosponge", person: "David", title: "Cytosponge clinics in Lancashire and South Cumbria – detecting cancer early and saving lives", channel: "Lancashire and South Cumbria ICB", url: "https://www.youtube.com/watch?v=-wu0pU764Pk", duration: "1:37", about: "David, who has Barrett's oesophagus, had the Cytosponge test at Oswald Medical Centre in Accrington, part of a pilot that avoids the need for an endoscopy." },
  ],
  askDoctor: [
    "Do I need any tests?",
    "How long should I take acid-reducing tablets?",
    "Could any of my medicines be causing reflux?",
    "Which symptoms mean I should come back sooner?",
  ],
  related: [
    { groupId: "stomach", conditionId: "stomach-ulcers" },
    { groupId: "weight", conditionId: "obesity" },
    { groupId: "heart-attack", conditionId: "angina" },
  ],
});

export const stomachUlcers = condition({
  id: "stomach-ulcers",
  title: "Stomach ulcers",
  summary: "Open sores in the lining of the stomach or the first part of the bowel, most often caused by a germ called H. pylori or by anti-inflammatory painkillers. They usually heal with treatment, but bleeding is a serious complication to know about.",
  keywords: ["stomach ulcer", "peptic ulcer", "h. pylori", "duodenal ulcer", "indigestion"],
  blurb: "Where ulcers form, and the two main causes.",
  understand: [
    ["what-it-is", "What a stomach ulcer is", 3, ["ulcer", "stomach lining"]],
    ["causes", "H. pylori and painkillers: the main causes", 3, ["h. pylori", "nsaids", "aspirin"]],
    ["symptoms", "Symptoms", 3, ["symptoms", "pain", "indigestion"]],
    ["tests", "Breath, stool and endoscopy tests", 3, ["breath test", "stool test", "endoscopy"]],
  ],
  recover: [
    ["h-pylori", "Clearing H. pylori", 3, ["h. pylori", "antibiotics"]],
    ["ppis", "Acid-reducing tablets", 3, ["ppi", "omeprazole"]],
    ["painkillers", "Painkillers to avoid, and alternatives", 3, ["nsaids", "painkillers", "paracetamol"]],
    ["urgent", "Bleeding and other emergencies", 2, ["bleeding", "999", "vomiting blood"]],
  ],
  liveWell: [
    ["healing", "Healing and follow-up", 3, ["healing", "follow-up"]],
    ["smoking-alcohol", "Smoking, alcohol and ulcers", 2, ["smoking", "alcohol"]],
    ["food", "Food and ulcers", 2, ["food", "myths"]],
    ["coming-back", "Stopping it coming back", 2, ["prevention", "recurrence"]],
  ],
  sources: [source(NHS, "Stomach ulcer"), GUTS_UK],
  prefix: "su-",
  facts: ["Most people recover with treatment", "Main causes: H pylori and painkillers", "Most heal in a month or two"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running
  // time from each watch page.
  watch: [
    { id: "yt-ottawa-peptic-ulcer", title: "Your guide to peptic ulcer disease", kind: "video", duration: "3:56", url: "https://www.youtube.com/watch?v=TPDyhvvuipI", extra: "Causes, symptoms, when to get help", publisher: "The Ottawa Hospital", keywords: ["peptic ulcer", "causes", "symptoms"] },
    { id: "yt-patient-stomach-ulcers", title: "What are stomach ulcers?", kind: "video", duration: "2:16", url: "https://www.youtube.com/watch?v=KkJDr4zouQA", extra: "A UK GP explains stomach ulcers", publisher: "Patient", keywords: ["stomach ulcer", "gastric ulcer", "explained"] },
    { id: "yt-northumbria-gastroscopy", title: "What to Expect from an Upper GI (Gastrointestinal) Endoscopy", kind: "video", duration: "3:31", url: "https://www.youtube.com/watch?v=SBwEp2-g5S4", extra: "A nurse endoscopist answers gastroscopy questions", publisher: "NorthumbriaNHS", keywords: ["gastroscopy", "endoscopy", "tests"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-brogan-bleeding-ulcer", person: "Brogan", title: "Nearly Felled by Bleeding Ulcer", channel: "UCI Health", url: "https://www.youtube.com/watch?v=LMZC7Y4hUA4", duration: "2:42", about: "After college student Brogan Evans suddenly collapsed, doctors at UC Irvine Health's digestive disease centre diagnosed and treated a bleeding ulcer." },
  ],
  askDoctor: [
    "Have I been tested for H. pylori?",
    "Which painkillers are safe for me now?",
    "Do I need a follow-up test after treatment?",
    "Which symptoms mean I should call 999?",
  ],
  related: [
    { groupId: "stomach", conditionId: "acid-reflux" },
    { groupId: "arthritis", conditionId: "osteoarthritis" },
    { groupId: "liver", conditionId: "cirrhosis" },
  ],
});

export const gallstones = condition({
  id: "gallstones",
  title: "Gallstones",
  summary: "Small stones that form in the gallbladder, a small pouch under the liver. Most cause no symptoms, but if one blocks a duct it can cause sudden, severe pain. Removing the gallbladder is a common, routine operation when stones keep causing problems.",
  keywords: ["gallstones", "gallbladder", "biliary colic", "cholecystitis", "cholecystectomy"],
  blurb: "The gallbladder, bile and how stones form.",
  understand: [
    ["what-it-is", "What gallstones are", 3, ["gallbladder", "bile", "stones"]],
    ["symptoms", "Gallstone pain and other symptoms", 3, ["pain", "biliary colic"]],
    ["causes", "Who gets them and why", 3, ["causes", "risk"]],
    ["complications", "Infection, jaundice and pancreatitis", 3, ["cholecystitis", "jaundice", "pancreatitis"]],
  ],
  recover: [
    ["tests", "Scans and tests", 3, ["ultrasound", "tests"]],
    ["surgery", "Gallbladder removal", 4, ["cholecystectomy", "keyhole surgery"]],
    ["after-surgery", "Recovering after the operation", 3, ["recovery", "after surgery"]],
    ["urgent", "When to get urgent help", 2, ["urgent", "fever", "jaundice"]],
  ],
  liveWell: [
    ["food", "Eating before and after surgery", 3, ["food", "fat", "diet"]],
    ["without-gallbladder", "Living without a gallbladder", 2, ["without gallbladder", "digestion"]],
    ["weight", "Weight changes and gallstones", 2, ["weight loss", "diet"]],
    ["watching", "Gallstones with no symptoms", 2, ["no symptoms", "watch"]],
  ],
  sources: [source(NHS, "Gallstones"), GUTS_UK],
  prefix: "gs-",
  facts: ["More than 1 in 10 UK adults have them", "Most cause no symptoms", "Over 60,000 NHS removals each year"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running
  // time from each watch page.
  watch: [
    { id: "yt-royal-devon-gallstones-1", title: "Gallstones - A guide for patients (Part 1)", kind: "video", duration: "14:05", url: "https://www.youtube.com/watch?v=wrTQmWVR-8M", extra: "Royal Devon guide to gallstone surgery", publisher: "Royal Devon NHS", keywords: ["gallstones", "surgery", "cholecystectomy"] },
    { id: "yt-cleveland-what-are-gallstones", title: "What Are Gallstones? | Ask Cleveland Clinic’s Expert", kind: "video", duration: "3:37", url: "https://www.youtube.com/watch?v=nWnHjwM-brg", extra: "A doctor explains symptoms and treatments", publisher: "Cleveland Clinic", keywords: ["gallstones", "symptoms", "treatment"] },
    { id: "yt-north-tees-ercp", title: "Endoscopy Procedures | Endoscopic Retrograde Cholangiopancreatography (ERCP)", kind: "video", duration: "3:59", url: "https://www.youtube.com/watch?v=GuePY-3ccOg", extra: "What happens during an ERCP", publisher: "North Tees and Hartlepool NHS Foundation Trust", keywords: ["ercp", "bile duct", "endoscopy"] },
  ],
  askDoctor: [
    "Do my gallstones need treatment?",
    "What does the operation involve, and how long is recovery?",
    "Which symptoms mean I should get urgent help?",
    "Should I change what I eat while I wait?",
  ],
  related: [
    { groupId: "stomach", conditionId: "pancreatitis" },
    { groupId: "weight", conditionId: "obesity" },
    { groupId: "liver", conditionId: "fatty-liver" },
  ],
});

export const pancreatitis = condition({
  id: "pancreatitis",
  title: "Pancreatitis",
  summary: "Inflammation of the pancreas, the gland that helps digest food and controls blood sugar. Acute pancreatitis comes on suddenly, often from gallstones or alcohol, and needs hospital care; chronic pancreatitis is long-lasting damage that affects digestion and can cause diabetes.",
  keywords: ["pancreatitis", "pancreas", "acute pancreatitis", "chronic pancreatitis", "abdominal pain"],
  blurb: "What the pancreas does, and what inflammation does to it.",
  understand: [
    ["what-it-is", "What pancreatitis is", 3, ["pancreas", "inflammation"]],
    ["acute", "Acute pancreatitis", 3, ["acute", "sudden pain"]],
    ["chronic", "Chronic pancreatitis", 3, ["chronic", "long-term"]],
    ["causes", "Causes: gallstones, alcohol and others", 3, ["gallstones", "alcohol", "causes"]],
  ],
  recover: [
    ["hospital", "Treatment in hospital", 3, ["hospital", "fluids", "pain relief"]],
    ["enzymes", "Enzyme capsules and digestion", 3, ["enzymes", "creon", "digestion"]],
    ["pain", "Managing long-term pain", 3, ["pain", "pain clinic"]],
    ["diabetes", "Pancreatitis and diabetes", 3, ["diabetes", "blood sugar"]],
  ],
  liveWell: [
    ["alcohol-smoking", "Stopping alcohol and smoking", 3, ["alcohol", "smoking", "stopping"]],
    ["food", "Eating with pancreatitis", 3, ["food", "fat", "small meals"]],
    ["urgent", "When to get urgent help", 2, ["urgent", "999", "severe pain"]],
    ["support", "Support and follow-up", 2, ["support", "follow-up"]],
  ],
  sources: [source(NHS, "Pancreatitis"), GUTS_UK],
  prefix: "pan-",
  facts: ["Gallstones: most common acute cause", "79 in 100 recover fully from acute", "Most start to get better within a week"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running
  // time from each watch page.
  watch: [
    { id: "yt-gutsuk-acute-pancreatitis", title: "What Is Acute Pancreatitis? Symptoms, Causes and Treatment Explained", kind: "video", duration: "1:48", url: "https://www.youtube.com/watch?v=vYZAiEOnDog", extra: "A pancreatic dietitian explains acute pancreatitis", publisher: "Guts UK Charity", keywords: ["acute", "symptoms", "nutrition"] },
    { id: "yt-gutsuk-chronic-pancreatitis", title: "What Is Chronic Pancreatitis? Symptoms, Causes and Treatment Explained", kind: "video", duration: "1:42", url: "https://www.youtube.com/watch?v=WNZGZOWdnXY", extra: "Symptoms, nutrition and lifestyle factors", publisher: "Guts UK Charity", keywords: ["chronic", "symptoms", "lifestyle"] },
    { id: "yt-gutsuk-acute-vs-chronic", title: "What are the similarities and differences between acute and chronic pancreatitis?", kind: "video", duration: "1:20", url: "https://www.youtube.com/watch?v=xsGAF7mqlWI", extra: "How acute and chronic differ", publisher: "Guts UK Charity", keywords: ["acute", "chronic", "causes"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-charlotte-chronic-pancreatitis", person: "Charlotte", title: "Spend a day in the life with Charlotte: Chronic pancreatitis edition 💚", channel: "Guts UK Charity", url: "https://www.youtube.com/watch?v=K7WXVtzKnIs", duration: "1:27", about: "Charlotte had pancreatitis symptoms many times over 11 months in 2022 before blood tests at A&E found it; she now takes prescribed pancreatic enzymes and shares how it affects her day." },
    { id: "yt-hal-acute-pancreatitis", person: "Hal", title: "Hal Davidson  Talks About Living With Acute Pancreatitis.", channel: "Royal Liverpool Hospitals", url: "https://www.youtube.com/watch?v=-X0OmBjE72k", duration: "2:20", about: "In 2014 Hal woke up with acute pancreatitis, later had most of his pancreas removed and now lives with diabetes; he talks about the stigma around pancreatitis and his approach through healthy eating and an active lifestyle." },
  ],
  askDoctor: [
    "What caused my pancreatitis?",
    "Do I need enzyme capsules, and how should I take them?",
    "Should I be checked for diabetes?",
    "Which symptoms mean I should get urgent help?",
  ],
  related: [
    { groupId: "stomach", conditionId: "gallstones" },
    { groupId: "liver", conditionId: "alcohol-related-liver-disease" },
    { groupId: "diabetes", conditionId: "type-2" },
  ],
});

export const coeliac = condition({
  id: "coeliac-disease",
  title: "Coeliac disease",
  summary: "An autoimmune condition in which eating gluten damages the lining of the small bowel. It can cause gut symptoms, tiredness and anaemia, or very few symptoms at all. A lifelong gluten-free diet lets the gut heal, and support is there to make it manageable.",
  keywords: ["coeliac disease", "celiac", "gluten", "gluten-free", "autoimmune"],
  blurb: "Gluten, the immune system and the lining of the gut.",
  understand: [
    ["what-it-is", "What coeliac disease is", 3, ["gluten", "autoimmune", "gut"]],
    ["symptoms", "Symptoms, in the gut and beyond", 3, ["symptoms", "tired", "anaemia"]],
    ["testing", "Testing: keep eating gluten first", 3, ["blood test", "biopsy", "gluten"]],
    ["family", "Family and related conditions", 3, ["family", "type 1", "thyroid"]],
  ],
  recover: [
    ["gluten-free", "Going gluten-free", 4, ["gluten-free", "diet"]],
    ["labels", "Reading labels and avoiding cross-contamination", 3, ["labels", "cross-contamination"]],
    ["nutrition", "Iron, calcium and vitamins", 3, ["iron", "calcium", "vitamins"]],
    ["follow-up", "Follow-up and reviews", 2, ["follow-up", "dietitian"]],
  ],
  liveWell: [
    ["eating-out", "Eating out and travelling", 3, ["eating out", "travel"]],
    ["prescriptions", "Gluten-free food on prescription", 2, ["prescription", "food"]],
    ["bones", "Bone health", 2, ["bones", "osteoporosis"]],
    ["feelings", "Living with it day to day", 3, ["feelings", "support"]],
  ],
  sources: [source(NHS, "Coeliac disease"), COELIAC_UK],
  prefix: "coe-",
  facts: ["At least 1 in 100 people in the UK", "Only 36 in 100 are diagnosed", "Treated by a lifelong gluten-free diet"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running
  // time from each watch page.
  watch: [
    { id: "yt-cuk-what-is-coeliac", title: "What is coeliac disease", kind: "video", duration: "3:41", url: "https://www.youtube.com/watch?v=YURYVVz8cqA", extra: "Coeliac UK explains the condition", publisher: "Coeliac UK", keywords: ["coeliac disease", "gluten", "autoimmune"] },
    { id: "yt-cuk-testing", title: "The testing process and diagnosis with coeliac disease", kind: "video", duration: "2:58", url: "https://www.youtube.com/watch?v=hyh3Hgj7V74", extra: "How testing and diagnosis work", publisher: "Coeliac UK", keywords: ["blood test", "biopsy", "diagnosis"] },
    { id: "yt-cuk-cross-contamination", title: "Cross-contamination - What is it and why is it important on a gluten free diet?", kind: "video", duration: "3:25", url: "https://www.youtube.com/watch?v=yL0U4ugp_PQ", extra: "A Coeliac UK dietitian on cross-contamination", publisher: "Coeliac UK", keywords: ["cross-contamination", "kitchen", "eating out"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-anita-cuk", person: "Anita", title: "Anita's coeliac diagnosis story", channel: "Coeliac UK", url: "https://www.youtube.com/watch?v=1ZygFM969cA", duration: "2:12", about: "Anita went from an upset stomach and diarrhoea to a diagnosis confirmed by blood tests and a biopsy, and support from Coeliac UK helped her keep travelling and eating out." },
    { id: "yt-natalie-cuk", person: "Natalie", title: "Natalie's coeliac diagnosis story", channel: "Coeliac UK", url: "https://www.youtube.com/watch?v=bojgEWVA6n4", duration: "1:58", about: "Numbness in her hands and feet and a family history led Natalie to get tested, and having coeliac disease now shapes her work as a highly specialist paediatric dietitian." },
    { id: "yt-joe-cuk", person: "Joe", title: "Joe's coeliac diagnosis story", channel: "Coeliac UK", url: "https://www.youtube.com/watch?v=2DNlfu0Kt7M", duration: "1:22", about: "Joe was tested after his brother was diagnosed as a child, got an early diagnosis, and recalls how accidentally eating gluten at 7 left him lethargic and unwell." },
  ],
  askDoctor: [
    "Should I keep eating gluten until my tests are done?",
    "Can I see a dietitian about a gluten-free diet?",
    "Should my family be tested?",
    "Do I need a bone density scan or vitamin checks?",
  ],
  related: [
    { groupId: "gut", conditionId: "ibs" },
    { groupId: "diabetes", conditionId: "type-1" },
    { groupId: "bone-health", conditionId: "osteoporosis" },
  ],
});

export const diverticular = condition({
  id: "diverticular-disease",
  title: "Diverticular disease",
  summary: "Small pouches in the wall of the large bowel, very common with age. Most people have no symptoms; some have tummy pain and bowel changes, and occasionally the pouches become inflamed or infected (diverticulitis). Fibre and fluids help.",
  keywords: ["diverticular disease", "diverticulitis", "diverticulosis", "bowel pouches", "tummy pain"],
  blurb: "Small pouches in the bowel wall, and when they cause trouble.",
  understand: [
    ["what-it-is", "Diverticulosis, diverticular disease and diverticulitis", 3, ["pouches", "bowel"]],
    ["symptoms", "Symptoms", 3, ["pain", "bloating", "bowel changes"]],
    ["causes", "Why pouches form", 3, ["causes", "fibre", "age"]],
    ["tests", "Tests and scans", 3, ["colonoscopy", "ct scan"]],
  ],
  recover: [
    ["fibre", "Fibre and fluids", 3, ["fibre", "fluids"]],
    ["flare", "Treating diverticulitis", 3, ["diverticulitis", "antibiotics", "rest"]],
    ["pain", "Pain relief to use and avoid", 2, ["paracetamol", "nsaids"]],
    ["surgery", "When surgery is needed", 3, ["surgery", "complications"]],
  ],
  liveWell: [
    ["urgent", "Signs to get urgent help", 2, ["urgent", "bleeding", "fever"]],
    ["food-myths", "Nuts, seeds and other food questions", 2, ["nuts", "seeds", "myths"]],
    ["activity-weight", "Activity, weight and smoking", 3, ["exercise", "weight", "smoking"]],
    ["coming-back", "Lowering the chance of another flare", 2, ["prevention"]],
  ],
  sources: [source(NHS, "Diverticular disease and diverticulitis"), GUTS_UK],
  prefix: "div-",
  facts: ["Affects around 1 in 3 people", "Most people never get symptoms", "No need to avoid nuts or seeds"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running
  // time from each watch page.
  watch: [
    { id: "yt-gutsuk-dd-top10", title: "Your top 10 questions about Diverticular disease", kind: "video", duration: "2:31", url: "https://www.youtube.com/watch?v=aESPf-al1x0", extra: "Helpline team answers common questions", publisher: "Guts UK Charity", keywords: ["questions", "diet", "lifestyle"] },
    { id: "yt-gutsuk-dd-symptoms", title: "What are the symptoms of diverticular disease?", kind: "video", duration: "0:22", url: "https://www.youtube.com/watch?v=dyTgdBJ2qz4", extra: "The common signs, in brief", publisher: "Guts UK Charity", keywords: ["symptoms", "pain", "bloating"] },
    { id: "yt-nhs-colonoscopy", title: "What happens during a colonoscopy?", kind: "video", duration: "2:19", url: "https://www.youtube.com/watch?v=wK2imf6w8Pw", extra: "A nurse explains a colonoscopy", publisher: "NHS", keywords: ["colonoscopy", "tests"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-will-diverticular", person: "Will", title: "Will shares his experiences this Diverticular Disease Awareness Week 💚", channel: "Guts UK Charity", url: "https://www.youtube.com/watch?v=WXG1zifhod8", duration: "1:48", about: "Will shares his diverticular disease story and his experiences of living with a temporary stoma, after what happened to him in August 2024." },
  ],
  askDoctor: [
    "Is this diverticular disease or diverticulitis?",
    "How much fibre should I aim for, and how fast should I increase it?",
    "Which painkillers should I avoid?",
    "Which symptoms mean I should get urgent help?",
  ],
  related: [
    { groupId: "gut", conditionId: "constipation" },
    { groupId: "gut", conditionId: "ibs" },
    { groupId: "common-cancers", conditionId: "bowel" },
  ],
});

export const constipation = condition({
  id: "constipation",
  title: "Constipation",
  summary: "Pooing less often than usual, or finding it hard to go. It is very common, especially with age, some medicines and less activity, and usually improves with fibre, fluids and movement, with laxatives if needed. A lasting change in bowel habit should be checked.",
  keywords: ["constipation", "laxatives", "bowel habits", "straining", "fibre"],
  blurb: "How the bowel moves things along, and why it slows down.",
  understand: [
    ["what-it-is", "What constipation is", 3, ["bowel", "stools"]],
    ["causes", "Causes: food, fluids, medicines and more", 3, ["causes", "medicines", "fibre"]],
    ["older", "Constipation in older age", 3, ["older", "age"]],
    ["checks", "Changes that need checking", 2, ["bowel changes", "bleeding", "gp"]],
  ],
  recover: [
    ["fibre-fluids", "Fibre, fluids and movement", 3, ["fibre", "fluids", "exercise"]],
    ["toilet-routine", "Toilet routine and position", 3, ["routine", "footstool", "position"]],
    ["laxatives", "Laxatives: types and how to use them", 4, ["laxatives", "types"]],
    ["medicines", "Medicines that can cause it", 3, ["opioids", "iron", "medicines"]],
  ],
  liveWell: [
    ["long-term", "Long-term constipation", 3, ["long-term", "chronic"]],
    ["impaction", "Faecal impaction", 2, ["impaction", "overflow"]],
    ["travel", "Travel and routine changes", 2, ["travel", "routine"]],
    ["after-illness", "After illness or surgery", 2, ["surgery", "illness", "bed rest"]],
  ],
  sources: [source(NHS, "Constipation"), GUTS_UK],
  prefix: "con-",
  facts: ["Around 1 in 7 adults have it", "Twice as common in women as men", "Most laxatives work within 3 days"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running
  // time from each watch page.
  watch: [
    { id: "yt-nhs-treat-constipation", title: "How to treat constipation | NHS", kind: "video", duration: "0:56", url: "https://www.youtube.com/watch?v=_sgpAQ-cirU", extra: "simple diet and lifestyle changes", publisher: "NHS", keywords: ["constipation", "diet", "lifestyle"] },
    { id: "yt-uhl-bowel-health-tips", title: "Bowel health - top tips from continence nurse Sarah | UHL NHS Trust", kind: "video", duration: "1:52", url: "https://www.youtube.com/watch?v=kC-MdFhbZIA", extra: "a continence nurse's healthy bowel tips", publisher: "Leicester's Hospitals", keywords: ["bowel health", "continence", "tips"] },
    { id: "yt-blmk-constipation-carers", title: "Constipation for Carers", kind: "video", duration: "9:31", url: "https://www.youtube.com/watch?v=PWY6RmkhPFI", extra: "signs, Bristol Stool Chart, who is at risk", publisher: "BLMKHealthandCare", keywords: ["carers", "learning disability", "bristol stool chart"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-jenna-slow-transit", person: "Jenna", title: "Slow transit constipation: Jenna’s story", channel: "Colostomy UK", url: "https://www.youtube.com/watch?v=yzmkZc9Dw_4", duration: "3:00", about: "Jenna shares her lived experience of slow transit constipation, a condition that affected every part of her life for eight years, and the loop ileostomy that transformed it." },
    { id: "yt-anne-chronic-constipation", person: "Anne", title: "Anne's story: How has chronic constipation affected your life? What symptoms do you experience?", channel: "You and Constipation", url: "https://www.youtube.com/watch?v=cBuAhqJ7fHA", duration: "3:43", about: "Anne describes the various ways that chronic constipation has affected her life, including the symptoms and bothersome issues she has experienced." },
  ],
  askDoctor: [
    "Could any of my medicines be causing this?",
    "Which laxative is right for me, and for how long?",
    "Do I need any tests?",
    "Which changes in my bowels should I report?",
  ],
  related: [
    { groupId: "gut", conditionId: "ibs" },
    { groupId: "gut", conditionId: "diverticular-disease" },
    { groupId: "parkinsons", conditionId: "parkinsons-disease" },
  ],
});

export const crohns = condition({
  id: "crohns-disease",
  title: "Crohn's disease",
  summary: "A lifelong condition in which parts of the gut become inflamed, anywhere from the mouth to the bottom. It comes and goes in flare-ups and calmer times. Medicines can control the inflammation, and some people need surgery; specialist teams support people for the long term.",
  keywords: ["crohn's disease", "crohns", "ibd", "inflammatory bowel disease", "flare-up"],
  blurb: "Patches of inflammation, anywhere along the gut.",
  understand: [
    ["what-it-is", "What Crohn's disease is", 3, ["inflammation", "gut", "ibd"]],
    ["symptoms", "Symptoms and flare-ups", 3, ["diarrhoea", "pain", "tired"]],
    ["causes", "What causes it", 3, ["causes", "genes", "immune"]],
    ["tests", "Tests and diagnosis", 3, ["colonoscopy", "calprotectin", "scans"]],
  ],
  recover: [
    ["medicines", "Medicines: steroids, immunosuppressants and biologics", 4, ["steroids", "azathioprine", "biologics"]],
    ["surgery", "Surgery for Crohn's", 3, ["surgery", "resection", "stoma"]],
    ["flares", "Managing a flare-up", 3, ["flare", "ibd nurse"]],
    ["nutrition", "Food, nutrition and liquid diets", 3, ["food", "nutrition", "liquid diet"]],
  ],
  liveWell: [
    ["fatigue", "Fatigue", 3, ["fatigue", "tired"]],
    ["work-study", "Work, study and toilets", 3, ["work", "toilets", "rights"]],
    ["mood", "Mood and living with a long-term condition", 3, ["mood", "anxiety", "support"]],
    ["checks", "Long-term checks and bone health", 2, ["checks", "bones", "vaccines"]],
  ],
  sources: [source(NHS, "Crohn's disease"), CROHNS_COLITIS_UK],
  prefix: "cd-",
  facts: ["Affects 1 in every 650 people", "Most often diagnosed before age 30", "Fewer need surgery than 20 years ago"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running
  // time from each watch page.
  watch: [
    { id: "yt-ccuk-what-are-crohns-colitis", title: "What are Crohn's and Colitis?", kind: "video", duration: "2:15", url: "https://www.youtube.com/watch?v=vuytsHjQvqc", extra: "The two main forms of IBD", publisher: "Crohn's & Colitis UK", keywords: ["crohn's", "ibd", "what it is"] },
    { id: "yt-ccuk-symptoms", title: "The symptoms of Crohn’s and Colitis", kind: "video", duration: "5:39", url: "https://www.youtube.com/watch?v=jI0NRovOAPw", extra: "Gut and non-gut symptoms explained", publisher: "Crohn's & Colitis UK", keywords: ["symptoms", "flare-up", "non-gut symptoms"] },
    { id: "yt-gosh-what-is-crohns", title: "What is Crohn’s disease and how is it treated?", kind: "video", duration: "2:19", url: "https://www.youtube.com/watch?v=NVVwpybEXgs", extra: "What Crohn's is and what helps", publisher: "Great Ormond Street Hospital Health Information", keywords: ["crohn's", "treatment", "children"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-sophie-crohns", person: "Sophie", title: "Living with Crohn’s - Sophie’s story", channel: "Crohn's & Colitis UK", url: "https://www.youtube.com/watch?v=R0K8VbGktCk", duration: "2:33", about: "Sophie, diagnosed with Crohn's Disease in 2012, explains how she first became unwell, how her symptoms can change over time and what she does to be kind to herself during a flare-up." },
    { id: "yt-rachael-crohns", person: "Rachael", title: "Living with Crohn’s - Rachael’s story", channel: "Crohn's & Colitis UK", url: "https://www.youtube.com/watch?v=nSZu-Pkde6A", duration: "4:53", about: "Rachael, diagnosed with Crohn's disease in 2014, talks openly about how Crohn's affects her, life with a stoma and the importance of having people to confide in." },
    { id: "yt-georgia-crohns", person: "Georgia", title: "Georgia Talks About Living With Crohn's Disease", channel: "Guts UK Charity", url: "https://www.youtube.com/watch?v=qFc8PAe3guI", duration: "1:10", about: "Georgia shares what life with Crohn's disease is like for her, and how running helped her rebuild her strength after being unwell." },
  ],
  askDoctor: [
    "Which part of my gut is affected?",
    "What are the options if my medicine stops working?",
    "Who should I call when I have a flare-up?",
    "Which checks and vaccines do I need on my medicines?",
  ],
  related: [
    { groupId: "ibd", conditionId: "ulcerative-colitis" },
    { groupId: "gut", conditionId: "ibs" },
    { groupId: "bone-health", conditionId: "osteoporosis" },
  ],
});

export const ulcerativeColitis = condition({
  id: "ulcerative-colitis",
  title: "Ulcerative colitis",
  summary: "A lifelong condition in which the lining of the large bowel becomes inflamed and develops ulcers. It comes and goes in flare-ups, with diarrhoea that may contain blood. Medicines keep most people well, and specialist teams support people for the long term.",
  keywords: ["ulcerative colitis", "colitis", "ibd", "inflammatory bowel disease", "bloody diarrhoea"],
  blurb: "Inflammation in the lining of the large bowel.",
  understand: [
    ["what-it-is", "What ulcerative colitis is", 3, ["colitis", "bowel", "ibd"]],
    ["symptoms", "Symptoms and flare-ups", 3, ["diarrhoea", "blood", "urgency"]],
    ["extent", "How much of the bowel is affected", 3, ["proctitis", "extent"]],
    ["tests", "Tests and diagnosis", 3, ["colonoscopy", "calprotectin"]],
  ],
  recover: [
    ["medicines", "Medicines: mesalazine, steroids and beyond", 4, ["mesalazine", "steroids", "biologics"]],
    ["flares", "Managing a flare-up", 3, ["flare", "ibd nurse"]],
    ["severe", "Severe flare-ups: when to get urgent help", 2, ["severe", "urgent", "hospital"]],
    ["surgery", "Surgery and a stoma", 3, ["surgery", "colectomy", "stoma"]],
  ],
  liveWell: [
    ["food", "Food and colitis", 3, ["food", "diet"]],
    ["work-travel", "Work, travel and toilets", 3, ["work", "travel", "toilets"]],
    ["mood-fatigue", "Fatigue, mood and support", 3, ["fatigue", "mood", "support"]],
    ["checks", "Bowel cancer checks and long-term care", 2, ["colonoscopy", "checks"]],
  ],
  sources: [source(NHS, "Ulcerative colitis"), CROHNS_COLITIS_UK],
  prefix: "uc-",
  facts: ["At least 1 in 233 UK people have it", "Most are diagnosed aged 20 to 40", "Not contagious: you cannot catch it"],
  // Educational videos on YouTube. Checked 22 October 2026: title and channel from YouTube's oEmbed; running
  // time from each watch page.
  watch: [
    { id: "yt-ccuk-what-are-crohns-colitis", title: "What are Crohn's and Colitis?", kind: "video", duration: "2:16", url: "https://www.youtube.com/watch?v=vuytsHjQvqc", extra: "Crohn's and Colitis, simply explained", publisher: "crohnsandcolitisuk", keywords: ["colitis", "ibd", "what it is"] },
    { id: "yt-nhs-colonoscopy", title: "What happens during a colonoscopy?", kind: "video", duration: "2:20", url: "https://www.youtube.com/watch?v=wK2imf6w8Pw", extra: "A nurse explains a colonoscopy", publisher: "NHS", keywords: ["colonoscopy", "tests", "bowel"] },
    { id: "yt-ccuk-colitis-surgery", title: "Types of surgery for Colitis", kind: "video", duration: "4:27", url: "https://www.youtube.com/watch?v=DOLjMAnScu8", extra: "The different types of Colitis surgery", publisher: "crohnsandcolitisuk", keywords: ["surgery", "stoma", "j pouch"] },
  ],
  // Real people's stories. Checked 22 October 2026; each detail is from the video's own title or description.
  videoStories: [
    { id: "yt-louise-colitis", person: "Louise", title: "Louise Thompson, living with Ulcerative Colitis", channel: "crohnsandcolitisuk", url: "https://www.youtube.com/watch?v=BoTVPT3-PDw", duration: "22:17", about: "Louise Thompson, fitness icon and Crohn's & Colitis UK Ambassador, talks candidly about her Colitis diagnosis." },
    { id: "yt-andrea-colitis", person: "Andrea", title: "Andrea’s Story: Knowing you are not alone", channel: "Crohn's and Colitis Canada", url: "https://www.youtube.com/watch?v=xnUDZb6Ptz4", duration: "3:03", about: "Andrea lives in Ontario and was diagnosed with ulcerative colitis in 2006; she has faced long hospital stays and surgery." },
  ],
  askDoctor: [
    "How much of my bowel is affected?",
    "What should I do at the start of a flare-up?",
    "When will I need checks for bowel cancer?",
    "Which checks and vaccines do I need on my medicines?",
  ],
  related: [
    { groupId: "ibd", conditionId: "crohns-disease" },
    { groupId: "gut", conditionId: "ibs" },
    { groupId: "common-cancers", conditionId: "bowel" },
  ],
});
